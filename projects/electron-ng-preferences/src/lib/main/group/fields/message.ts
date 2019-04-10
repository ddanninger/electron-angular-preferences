import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'message',
  template: `
    <div class="field field-message">
      <div class="field-heading" *ngIf="field.heading">
        {{ field.heading }}
      </div>
      <div class="field-content" [innerHTML]="field.content"></div>
    </div>
  `
})
export class MessageComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;

  constructor() {}
}
