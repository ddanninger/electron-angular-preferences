import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ElectronPreferencesMessages } from '@shared/electron-preferences-options';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dropdown',
  template: `
    <div [formGroup]="form">
      <div class="field field-dropdown">
        <div class="field-label">{{ field.label }}</div>
        <select [id]="field.name" [formControlName]="field.name">
          <option value="">-- Select One --</option>
          <option *ngFor="let opt of field.options" [value]="opt.value">{{
            opt.label
          }}</option>
        </select>
        <span class="error-message" *ngIf="control.errors?.required"
          >{{ messages.required }}</span
        ><span class="waiting-message" *ngIf="control.status === 'PENDING'">
        {{ messages.validating }}
      </span>
        <span class="error-message" *ngIf="control.errors?.dynamicError && field.errorMessage">{{
          field.errorMessage
        }}</span>
        <span class="help" *ngIf="field.help">{{ field.help }}</span>
      </div>
    </div>
  `
})
export class DropDownComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;
  @Input() messages: ElectronPreferencesMessages;

  get value() {
    return this.form.controls[this.field.name].value;
  }

  get control() {
    return this.form.controls[this.field.name];
  }

  constructor() {}
}
