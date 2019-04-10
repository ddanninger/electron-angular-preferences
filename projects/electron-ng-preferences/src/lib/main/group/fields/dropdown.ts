import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
        <span class="error-message" *ngIf="field.errors?.required"
          >Please fill out this field.</span
        >
        <span class="error-message" *ngIf="field.errors?.dynamicError">{{
          field.help
        }}</span>
        <span class="help" *ngIf="field.help">{{ field.help }}</span>
      </div>
    </div>
  `
})
export class DropDownComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;

  get value() {
    return this.form.controls[this.field.name].value;
  }

  constructor() {}
}
