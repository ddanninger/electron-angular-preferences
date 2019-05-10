import { ValidationService } from './../../../services/validation.service';
import { ElectronService } from './../../../services/electron.service';
import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { ElectronPreferencesMessages } from '@shared/electron-preferences-options';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'laddabtnfield',
  template: `
    <div class="field field-button">
      <button class="btn" (click)="runAction()" [ladda]="isLoading">
        {{ field.label }}
      </button>
      <span
        class="message"
        *ngIf="message"
        [ngStyle]="{ color: messageColor }"
        >{{ message }}</span
      >
      <span class="help" *ngIf="field.help">{{ field.help }}</span>
    </div>
  `
})
export class LaddaBtnFieldComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;
  @Input() messages: ElectronPreferencesMessages;

  message: string;
  messageColor = 'black';
  isLoading = false;

  constructor(
    private electronService: ElectronService,
    private validationService: ValidationService,
    private cd: ChangeDetectorRef
  ) {}

  runAction() {
    this.message = null;
    this.messageColor = 'black';
    this.isLoading = true;
    const actionName = this.field.action;
    const lastLetter = actionName.substr(-1);
    if (lastLetter === '$') {
      this.validationService
        .actionAsync(actionName, this.form.value)
        .subscribe(res => {
          this.isLoading = false;
          this.setMessage(res);

          console.log('actionAsync result', res);
          //   if (this.field.actionIsBoolean) {
          //     if (this.field.setInvalidOnFalse && res === false) {
          //       this.form.setErrors({ actionNotValid: true });
          //       this.errorMessage = this.field.errorMessage;
          //     } else {
          //       this.errorMessage = this.field.errorMessage;
          //     }
          //   } else {
          // this.message = res;
          // }
        });
    } else {
      if (this.field.actionIsBoolean) {
      } else {
        const res = this.electronService.ipcRenderer.sendSync(
          'runAction',
          actionName,
          this.form.value
        );
        this.setMessage(res);
        this.isLoading = false;
      }
    }
  }

  private setMessage(res) {
    if (typeof res === 'string') {
      console.log('setmessage string', res);
      this.message = res;
    } else {
      console.log('res has message', res.message);
      if (res.message) {
        this.message = res.message;
      }
      if (res.color) {
        this.messageColor = res.color;
      }
    }

    console.log('thi.message', this.message);
    console.log('thi.message', this.messageColor);
    this.cd.detectChanges();
    this.cd.markForCheck();
  }
}
