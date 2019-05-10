import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ElectronPreferencesMessages } from '@shared/electron-preferences-options';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'shortcut',
  template: `
    <div class="field field-shortcut">
      <div class="field-label">{{ field.label }}</div>
      <div class="shortcut-wrapper">
        <button class="btn" (click)="enableEdit = !enableEdit">
          Set
        </button>
        <input
          *ngIf="enableEdit"
          type="text"
          class="form-control shortcut-input"
          (keydown)="handleKeyDown($event)"
          (keyup)="handleKeyUp($event)"
        />
        <div class="shortcuts">
          <span class="shortcut" *ngFor="let shortcut of shortCuts"
            ><span [innerHTML]="shortcut"></span
          ></span>
        </div>
      </div>
      <span class="help" *ngIf="field.help">{{ field.help }}</span>
    </div>
  `
})
export class ShortcutComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;
  @Input() messages: ElectronPreferencesMessages;

  message: string;
  keyCount = 0;
  pressedKeys: any[] = [];
  shortCuts: [];

  enableEdit = false;

  get control() {
    return this.form.controls[this.field.name];
  }

  constructor(protected sanitizer: DomSanitizer) {}

  handleKeyDown(event) {
    console.log('handleKeyDown', event);
    event.preventDefault();

    if (this.keyCount <= 0) {
      this.pressedKeys = [];
    }

    if (this.pressedKeys.indexOf(event.key) === -1) {
      this.pressedKeys.push(event.key);
      this.keyCount++;
    }

    this.mapShortcut(this.pressedKeys);
  }

  handleKeyUp(event) {
    console.log('handleKeyUp', event);
    event.preventDefault();
    this.keyCount--;
    this.mapShortcut(this.pressedKeys);
  }

  mapShortcut(keys) {
    const arr = keys.map(item => {
      if (item === ' ') {
        return 'Space';
      }
      if (item === '+') {
        return 'Plus';
      }
      if (/^[a-z]$/.test(item)) {
        return item.toUpperCase();
      }
      return item;
    });
    console.log('mapShortcut', keys, arr);
    this.form.controls[this.field.name].setValue(arr.join('+'));
    this.shortCuts = arr.map(v => this.mapSymbol(v));
  }

  mapSymbol(value: string) {
    switch (value.toLowerCase()) {
      case 'command':
      case 'cmd':
        return '&#8963;'; // ⌘
      case 'shift':
        return '&#8679;'; // ⇧
      case 'option':
        return '&#8997;'; // ⌥
      case 'capslock':
        return '&#8682;'; // ⇪
      case 'enter':
      case 'return':
        return '&#9166;'; // ⏎
      case 'tab':
        return '&#8677;'; // ⇥
      case 'arrowleft':
        return '&#8592;'; // ←
      case 'arrowright':
        return '&#8594;'; // →
      case 'arrowup':
        return '&#8593;'; // ↑
      case 'arrowdown':
        return '&#8595;'; // ↓
      case 'space':
        return '&#9251;'; // ␣
      default:
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
  }
}

/* HTML Entity     GLYPH  NAME
&#8984;         ⌘      Command, Cmd, Clover, (formerly) Apple
&#8963;         ⌃      Control, Ctl, Ctrl
&#8997;         ⌥      Option, Opt, (Windows) Alt
&#8679;         ⇧      Shift
&#8682;         ⇪      Caps lock
&#9167;         ⏏      Eject
&#8617;         ↩      Return, Carriage Return
&#8629; &crarr; ↵      Return, Carriage Return
&#9166;         ⏎      Return, Carriage Return
&#8996;         ⌤      Enter
&#9003;         ⌫      Delete, Backspace
&#8998;         ⌦      Forward Delete
&#9099;         ⎋      Escape, Esc
&#8594; &rarr;  →      Right arrow
&#8592; &larr;  ←      Left arrow
&#8593; &uarr;  ↑      Up arrow
&#8595; &darr;  ↓      Down arrow
&#8670;         ⇞      Page Up, PgUp
&#8671;         ⇟      Page Down, PgDn
&#8598;         ↖      Home
&#8600;         ↘      End
&#8999;         ⌧      Clear
&#8677;         ⇥      Tab, Tab Right, Horizontal Tab
&#8676;         ⇤      Shift Tab, Tab Left, Back-tab
&#9250;         ␢      Space, Blank
&#9251;         **␣**  Space, Blank */
