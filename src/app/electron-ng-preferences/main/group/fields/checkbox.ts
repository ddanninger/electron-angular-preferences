import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ElectronPreferencesMessages } from '@shared/electron-preferences-options';

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
            [checked]="opt.checked"
            [value]="opt.value"
            (change)="onChecklistChange($event.target.checked, opt)"
          />
          <label>{{ opt.label }}</label>
        </div>
        <span class="error-message" *ngIf="control.errors?.required"
          >{{ messages.required }}</span
        ><span class="waiting-message" *ngIf="control.status === 'PENDING'">
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
export class CheckBoxComponent {
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

  set value(val) {
    this.form.controls[this.field.name].setValue(val);
  }

  get control() {
    return this.form.controls[this.field.name];
  }

  onChecklistChange(checked, opt) {
    opt.checked = checked;
    this.value = this.flattenValues(this.field.options);
  }

  flattenValues(checkboxes) {
    return checkboxes.filter(c => c.checked).map(c => c.value);
  }
}
