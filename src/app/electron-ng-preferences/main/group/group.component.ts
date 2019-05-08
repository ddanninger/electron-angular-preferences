import { ValidationService } from './../../services/validation.service';
import { ElectronService } from './../../services/electron.service';
import { Group } from '@shared/preference.types';
import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  dynamicValidatorFn,
  dynamicAsyncValidatorFn
} from './validators/dynamic.validator';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  internalForm: FormGroup;

  get fields() {
    return this.group.fields;
  }

  constructor(
    private electronService: ElectronService,
    private validationService: ValidationService,
    private cdRef: ChangeDetectorRef
  ) {
    cdRef.markForCheck();
  }

  ngOnInit() {
    if (this.group && this.group.fields) {
      const fieldsCtrls = {};
      for (const f of this.group.fields) {
        if (f.type === 'message') {
          // do nothing
          return;
        } else {
          // if (f.type !== 'checkbox') {
          const validators = [];
          const asyncValidators = [];
          if (f.required) {
            validators.push(Validators.required);
          }
          if (f.validator) {
            const lastLetter = f.validator.substr(-1);
            if (lastLetter === '$') {
              asyncValidators.push(
                dynamicAsyncValidatorFn(
                  this.validationService,
                  this.cdRef,
                  f.validator
                )
              );
            } else {
              validators.push(
                dynamicValidatorFn(
                  this.electronService,
                  this.cdRef,
                  f.validator
                )
              );
            }
          }

          if (f.type === 'checkbox' && f.options && this.preferences[f.name]) {
            f.options.map(
              o => (o.checked = this.preferences[f.name].includes(o.value))
            );
          }

          if (f.fixedValue) {
            this.preferences[f.name] = f.fixedValue;
          }

          fieldsCtrls[f.name] = new FormControl(
            this.preferences[f.name] || '',
            validators,
            asyncValidators
          );
        }

        this.form.addControl(f.name, fieldsCtrls[f.name]);
      }
    }

    this.cdRef.markForCheck();
  }
}
