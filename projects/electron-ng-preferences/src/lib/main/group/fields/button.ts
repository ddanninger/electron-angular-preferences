import { ValidationService } from './../../../services/validation.service';
import { ElectronService } from './../../../services/electron.service';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'btnfield',
  template: `
    <div class="field field-button">
      <div class="btn" (click)="runAction()">
        {{ field.label }}
      </div>
      <span class="message" *ngIf="message">{{ message }}</span>
      <span class="help" *ngIf="field.help">{{ field.help }}</span>
    </div>
  `
})
export class BtnFieldComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;

  message: string;

  constructor(
    private electronService: ElectronService,
    private validationService: ValidationService
  ) {}

  runAction() {
    const actionName = this.field.action;
    const lastLetter = actionName.substr(-1);
    if (lastLetter === '$') {
      this.validationService.actionAsync(actionName, this.form.value).subscribe(res => {
        this.message = res;
      });
    } else {
      this.message = this.electronService.ipcRenderer.sendSync(
        'runAction',
        actionName,
        this.form.value
      );
    }
  }
}
