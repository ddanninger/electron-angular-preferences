import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PreferenceOptions, Section } from '../types/preference.types';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  get prefs() {
    return this.preferences[this.activeSection.name];
  }

  get activeSectionForm() {
    return this.form.get(this.activeSection.name);
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    console.log(
      'main.component',
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
  }

  save() {
    console.log('save', this.form, this.form.value);
    if (this.form.valid) {
      console.log('form is valid');
      const values = this.form.value;
      /*values.map(v => {
      return v;
    });*/
    }
  }

  onSubmit() {
    console.log('onsubmit', this.form.valid, this.form, this.form.value);
  }
}
