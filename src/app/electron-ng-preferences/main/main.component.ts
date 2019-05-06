import {
  FlashMessage,
  FlashMessageLevel
} from './flash-message/flash-message.component';
import { ElectronService } from './../services/electron.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PreferenceOptions, Section } from '@shared/preference.types';
import { FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input()
  activeSection: Section;
  @Input()
  preferences: any;
  @Input()
  options: PreferenceOptions;
  @Input()
  defaults: any;

  form: FormGroup;
  flashMessage: FlashMessage;

  messages: any = {
    save: 'Save',
    saved: 'Successfully saved.',
    invalid: 'Form is not valid.'
  };

  get prefs() {
    return this.preferences[this.activeSection.name];
  }

  get activeSectionForm() {
    return this.form.get(this.activeSection.name);
  }

  constructor(private electronService: ElectronService) {}

  ngOnInit() {
    console.log(
      'main.component->',
      this.preferences,
      this.options,
      this.defaults,
      this.activeSection
    );

    const validatorOptions: any = {};
    if (this.options.validationOn) {
      validatorOptions.updateOn = this.options.validationOn;
    }

    const formGroups = {};
    this.options.sections.forEach(s => {
      formGroups[s.name] = new FormGroup({}, validatorOptions);
    });
    this.form = new FormGroup(formGroups, validatorOptions);
    console.log('main.ocmponent form is', this.form, validatorOptions);

    if (this.options.messages) {
      this.messages = [...this.messages, ...this.options.messages];
    }
  }

  save() {
    console.log('save', this.form, this.form.valid, this.form.value);
    if (this.form.valid) {
      console.log('form is valid');
      const preferences = this.form.value;
      console.log('values', preferences);
      this.showSavedMessage();
      this.electronService.ipcRenderer.send('setPreferences', preferences);
    } else if (this.form.pending) {
      this.form.statusChanges.subscribe(status => {
        console.log('statusChanges form was pending and now is', status);
        if (status === 'VALID') {
          this.save();
        }
      });
    } else {
      this.showErrorMessage();
    }
  }

  showSavedMessage() {
    this.flashMessage = {
      message: this.messages.saved,
      level: FlashMessageLevel.SUCCESS
    };
  }

  showErrorMessage() {
    this.flashMessage = {
      message: this.messages.invalid,
      level: FlashMessageLevel.ERROR
    };
  }

  onSubmit(e) {
    console.log('onsubmit', this.form.valid, this.form, this.form.value);
    this.save();
    e.preventDefault();
    return false;
  }

  sectionForm(section) {
    return this.form.get(section.name);
  }

  sectionPreferences(section) {
    return this.preferences[section.name];
  }

  groupInActiveSelection(group) {
    if (
      this.activeSection &&
      this.activeSection.form &&
      this.activeSection.form.groups
    ) {
      if (this.activeSection.form.groups.find(g => g.id === group.id)) {
        return true;
      }
    }
    return false;
  }
}
