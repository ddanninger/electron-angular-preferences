import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'boolean',
  template: `
    <div class="field field-boolean">
      <div class="field-label">{{ field.label }}</div>
      <ui-switch [(ngModel)]="field.value"></ui-switch>
      <span class="error-message" *ngIf="field.errors?.required"
        >Please fill out this field.</span
      >
      <span class="error-message" *ngIf="field.errors?.dynamicError">{{
        field.help
      }}</span>
      <span class="help" *ngIf="field.help">{{ field.help }}</span>
    </div>
  `
})
export class BooleanComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;

  constructor() {}
}
