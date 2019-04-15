import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'flash-message',
  template: `
    <div
      class="flashMessage animateCss"
      [ngClass]="{
        showFlashmessage: showMessage,
        flashSuccess: message?.level === 'success',
        flashError: message?.level === 'error'
      }"
      [hidden]="!showMessage"
    >
      <span>{{ message?.message }}</span>
    </div>
  `,
  styleUrls: ['./flash-message.component.scss']
})
export class FlashMessageComponent implements OnChanges {
  @Input() message: FlashMessage;
  showMessage: boolean;

  constructor() {
    this.showMessage = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.manageMessage(changes.message.currentValue);
  }
  manageMessage(message: FlashMessage) {
    if (message && message.message && message.message.length > 0) {
      this.message = message;
      this.showMessage = true;

      setTimeout(() => {
        this.showMessage = false;
        this.message = null;
      }, 8000);
    }
  }
}

export interface FlashMessage {
  message: string;
  level: FlashMessageLevel;
  isError?: boolean;
}
export enum FlashMessageLevel {
  SUCCESS = 'success',
  ERROR = 'error'
}
