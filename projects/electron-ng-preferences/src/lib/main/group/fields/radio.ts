import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'radio',
  template: `
    <div [formGroup]="form">
      <div class="field field-radio">
        <div class="field-label">{{ field.label }}</div>
        <div class="radio-option" *ngFor="let opt of field.options">
          <input
            type="radio"
            id="{{ field.name }}"
            [value]="opt.value"
            [formControlName]="field.name"
          />
          <label>{{ opt.label }}</label>
        </div>
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
export class RadioComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;

  get value() {
    return this.form.controls[this.field.name].value;
  }
}
