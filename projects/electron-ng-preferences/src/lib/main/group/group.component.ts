import { ValidationService } from './../../services/validation.service';
import { ElectronService } from './../../services/electron.service';
import { Group } from './../../types/preference.types';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  dynamicValidatorFn,
  dynamicAsyncValidatorFn
} from './validators/dynamic.validator';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  @Input()
  group: Group;

  @Input()
  preferences: any;

  @Input()
  form: FormGroup;

  @Input()
  validationOn: string;

  // @Output()
  // formChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  internalForm: FormGroup;

  get fields() {
    return this.group.fields;
  }

  constructor(
    private electronService: ElectronService,
    private validationService: ValidationService
  ) {}

  ngOnInit() {
    // const validatorOptions: any = {};
    // if (this.validationOn) {
    //   validatorOptions.updateOn = this.validationOn;
    // }

    console.log('group.component', this.group);
    if (this.group && this.group.fields) {
      const fieldsCtrls = {};
      for (const f of this.group.fields) {
        if (f.type === 'message') {
          // do nothing
          return;
        } else if (f.type !== 'checkbox') {
          const validators = [];
          const asyncValidators = [];
          if (f.required) {
            validators.push(Validators.required);
          }
          if (f.validator) {
            const lastLetter = f.validator.substr(-1);
            if (lastLetter === '$') {
              console.log('validator is observable', f.validator);
              asyncValidators.push(
                dynamicAsyncValidatorFn(this.validationService, f.validator)
              );
            } else {
              console.log('validator is normal', f.validator);
              validators.push(
                dynamicValidatorFn(this.electronService, f.validator)
              );
            }
          }

          fieldsCtrls[f.name] = new FormControl(
            this.preferences[f.name] || '',
            validators,
            asyncValidators
          );
        } else {
          const opts = {};
          for (const opt of f.options) {
            opts[opt.label] = new FormControl(opt.value);
          }
          const formGroup = new FormGroup(opts);
          if (this.preferences[f.name]) {
            formGroup.setValue(this.preferences[f.name]);
          }
          fieldsCtrls[f.name] = formGroup;
        }

        this.form.addControl(f.name, fieldsCtrls[f.name]);
      }

      // this.internalForm = new FormGroup(fieldsCtrls);
      // this.formChange.emit(this.form);
    }
  }
}
