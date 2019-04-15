import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { isBoolean } from 'util';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'boolean',
  template: `
    <div class="field field-boolean">
      <div class="field-label">{{ field.label }}</div>
      <ui-switch (change)="onChange($event)"></ui-switch>
      <span class="error-message" *ngIf="control.errors?.required"
        >Please fill out this field.</span
      ><span class="waiting-message" *ngIf="control.status === 'PENDING'">
        Validating...
      </span>
      <span
        class="error-message"
        *ngIf="control.errors?.dynamicError && field.errorMessage"
        >{{ field.errorMessage }}</span
      >
      <span class="help" *ngIf="field.help">{{ field.help }}</span>
    </div>
  `
})
export class BooleanComponent implements OnInit {
  @Input() field: any = {};
  @Input() form: FormGroup;

  get control() {
    return this.form.controls[this.field.name];
  }

  get value() {
    return this.form.controls[this.field.name].value;
  }

  set value(val) {
    this.form.controls[this.field.name].setValue(val);
  }

  constructor() {}

  onChange(val: boolean) {
    this.value = val;
  }

  ngOnInit() {
    if (!isBoolean(this.value)) {
      this.value = false;
    }
  }
}
