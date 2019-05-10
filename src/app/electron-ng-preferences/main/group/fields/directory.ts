import { ElectronPreferencesMessages } from './../../../../../../shared/electron-preferences-options';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ElectronService } from '../../../services/electron.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'directory',
  template: `
    <div [formGroup]="form">
      <div class="field field-directory">
        <div class="field-label">{{ field.label }}</div>
        <div class="value">Folder: {{ control?.value }}</div>
        <div class="btn" (click)="chooseFolder()">
          {{ messages.chooseFolder }}
        </div>
        <span class="error-message" *ngIf="control.errors?.required"
          >{{ messages.required }}</span
        >
        <span
          class="error-message"
          *ngIf="control.errors?.dynamicError && field.errorMessage"
          >{{ field.errorMessage }}</span
        >
        <span class="waiting-message" *ngIf="control.status === 'PENDING'">
          {{ messages.validating }}
        </span>
        <span class="help" *ngIf="field.help">{{ field.help }}</span>
        <input [formControlName]="field.name" type="hidden" />
      </div>
    </div>
  `
})
export class DirectoryComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;
  @Input() messages: ElectronPreferencesMessages;

  dialog: any;

  // tslint:disable-next-line:no-output-on-prefix
  // @Output()
  // onChange: EventEmitter<any> = new EventEmitter();

  selectedFolder: string;

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

  constructor(private electronService: ElectronService) {
    this.dialog = this.electronService.remote.dialog;
  }

  chooseFolder() {
    const value = this.dialog.showOpenDialog({ properties: ['openDirectory'] });
    if (value) {
      this.form.controls[this.field.name].setValue(value[0]);
      // this.onChange.emit(value[0]);
      return;
    }
  }
}
