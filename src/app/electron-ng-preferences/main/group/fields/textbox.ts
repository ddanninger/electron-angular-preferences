import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ElectronPreferencesMessages } from '@shared/electron-preferences-options';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'textbox',
  template: `
    <div [formGroup]="form">
      <div class="field field-text">
        <div class="field-label">{{ field.label }}</div>
        <input
          [attr.type]="field.type"
          class="form-control"
          [id]="field.name"
          [name]="field.name"
          [formControlName]="field.name"
          [readonly]="field.readonly"
          [ngClass]="{ 'field-readonly': field.readonly }"
        />
        <span class="error-message" *ngIf="control.errors?.required"
          >{{ messages.required }}</span
        >
        <span class="waiting-message" *ngIf="control.status === 'PENDING'">
          {{ messages.validating }}
        </span>
        <span
          class="error-message"
          *ngIf="control.errors?.dynamicError && field.errorMessage"
          >{{ field.errorMessage }}</span
        >
        <span class="help" *ngIf="field.help">{{ field.help }}</span>
      </div>
    </div>
  `
})
export class TextBoxComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;
  @Input() messages: ElectronPreferencesMessages;
  
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

  constructor() {}
}
