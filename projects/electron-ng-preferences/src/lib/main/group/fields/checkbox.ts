import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'checkbox',
  template: `
    <div [formGroup]="form">
      <div [formGroupName]="field.name" class="field field-checkbox">
        <div class="field-label">{{ field.label }}</div>
        <div class="checkbox-option" *ngFor="let opt of field.options">
          <input
            type="checkbox"
            id="{{ field.name }}"
            [formControlName]="opt.label"
          />
          <label>{{ opt.label }}</label>
        </div>
        <span class="error-message" *ngIf="control.errors?.required"
          >Please fill out this field.</span
        ><span class="waiting-message" *ngIf="control.status === 'PENDING'">
        Validating...
      </span>
        <span class="error-message" *ngIf="control.errors?.dynamicError && field.errorMessage">{{
          field.errorMessage
        }}</span>
        <span class="help" *ngIf="field.help">{{ field.help }}</span>
      </div>
    </div>
  `
})
export class CheckBoxComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.field.name].valid;
  }
  get isDirty() {
    return this.form.controls[this.field.name].dirty;
  }

  get value() {
    return this.form.controls[this.field.name].value;
  }
  get control() {
    return this.form.controls[this.field.name];
  }
}
