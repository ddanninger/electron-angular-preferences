import { isBoolean } from 'util';
import { map, catchError, take, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable, Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, defineInjectable, inject, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ngx-ui-switch';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ElectronService {
    constructor() {
        // Conditional imports
        if (this.isElectron()) {
            // @ts-ignore
            this.ipcRenderer = window.require('electron').ipcRenderer;
            // @ts-ignore
            this.webFrame = window.require('electron').webFrame;
            // @ts-ignore
            this.remote = window.require('electron').remote;
            // @ts-ignore
            this.childProcess = window.require('child_process');
            // @ts-ignore
            this.fs = window.require('fs');
        }
    }
    /**
     * @return {?}
     */
    isElectron() {
        // @ts-ignore
        return window && window.process && window.process.type;
    }
    /**
     * @return {?}
     */
    getOSLocale() {
        if (this.isElectron() && this.remote && this.remote.app) {
            return this.remote.app.getLocale();
        }
    }
}
ElectronService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ElectronService.ctorParameters = () => [];
/** @nocollapse */ ElectronService.ngInjectableDef = defineInjectable({ factory: function ElectronService_Factory() { return new ElectronService(); }, token: ElectronService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ElectronNgPreferencesComponent {
    /**
     * @param {?} electronService
     */
    constructor(electronService) {
        this.electronService = electronService;
        this.options = this.electronService.ipcRenderer.sendSync('getPreferenceOptions');
        this.preferences = this.electronService.ipcRenderer.sendSync('getPreferences');
        this.defaults = this.electronService.ipcRenderer.sendSync('getDefaults');
        this.options.sections = this.options.sections.filter((/**
         * @param {?} section
         * @return {?}
         */
        section => !section.enabled));
        this.options.sections.forEach((/**
         * @param {?} section
         * @return {?}
         */
        section => {
            if (!this.preferences[section.name]) {
                this.preferences[section.name] = {};
            }
        }));
        if (this.options.sections.length > 0) {
            this.activeSection = this.options.sections[0];
        }
        console.log('electron-ng-preferences construct', this.options, this.preferences, this.defaults, this.activeSection);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log('electron-ng-preferences init', this.options, this.preferences, this.defaults, this.activeSection);
    }
    /**
     * @param {?} section
     * @return {?}
     */
    sectionChanged(section) {
        this.activeSection = section;
    }
}
ElectronNgPreferencesComponent.decorators = [
    { type: Component, args: [{
                selector: 'electron-ng-preferences',
                template: "<div class=\"preference-window\">\r\n<sidebar\r\n  [activeSection]=\"activeSection\"\r\n  [options]=\"options\"\r\n  [preferences]=\"preferences\"\r\n  [defaults]=\"defaults\"\r\n  (sectionChange)=\"sectionChanged($event)\"\r\n></sidebar>\r\n<main\r\n  [activeSection]=\"activeSection\"\r\n  [options]=\"options\"\r\n  [preferences]=\"preferences\"\r\n  [defaults]=\"defaults\"\r\n></main>\r\n</div>",
                styles: ["main{height:100%;min-height:100%;width:600px;min-width:600px;max-width:600px;background-color:#e7e7e7;font-size:14px;overflow:hidden;cursor:default;overflow-x:hidden;overflow-y:auto}sidebar{height:100%;min-height:100%;width:199px;min-width:199px;max-width:199px;border-right:1px solid #b8b8b9;display:flex;flex-direction:column;justify-content:flex-start;cursor:default;overflow-x:hidden;overflow-y:auto;background-color:#fff}.preference-window{height:100vh;width:100vw;display:flex}"]
            }] }
];
/** @nocollapse */
ElectronNgPreferencesComponent.ctorParameters = () => [
    { type: ElectronService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FlashMessageComponent {
    constructor() {
        this.showMessage = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.manageMessage(changes.message.currentValue);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    manageMessage(message) {
        if (message && message.message && message.message.length > 0) {
            this.message = message;
            this.showMessage = true;
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.showMessage = false;
                this.message = null;
            }), 8000);
        }
    }
}
FlashMessageComponent.decorators = [
    { type: Component, args: [{
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
                styles: [".flashMessage{text-align:center;border:none;padding:5px 10px;color:#fff;font-size:14px;display:inline;margin-right:15px}.flashMessage.flashSuccess{background:#025f2b}.flashMessage.flashError{background:#ad0909}.animateCss{transition:opacity 1s ease-in-out,margin-left .5s ease-in-out;opacity:0}.showFlashmessage{opacity:2}"]
            }] }
];
/** @nocollapse */
FlashMessageComponent.ctorParameters = () => [];
FlashMessageComponent.propDecorators = {
    message: [{ type: Input }]
};
/** @enum {string} */
const FlashMessageLevel = {
    SUCCESS: 'success',
    ERROR: 'error',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import rxIpc from 'rx-ipc-electron-six/lib/renderer'; // not working @todo find a better way
class ValidationService {
    /**
     * @param {?} electronService
     */
    constructor(electronService) {
        this.electronService = electronService;
        this.rxIpc = ((/** @type {?} */ (window))).require('rx-ipc-electron-six/lib/renderer').default;
        console.log('ValidationService', this.rxIpc);
    }
    /**
     * @param {?} name
     * @param {?} val
     * @return {?}
     */
    validateAsync(name, val) {
        return this.rxIpc.runCommand('runObservableValidator', null, name, val);
    }
    /**
     * @param {?} name
     * @param {?} form
     * @return {?}
     */
    actionAsync(name, form) {
        return this.rxIpc.runCommand('runObservableAction', null, name, form);
    }
}
ValidationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ValidationService.ctorParameters = () => [
    { type: ElectronService }
];
/** @nocollapse */ ValidationService.ngInjectableDef = defineInjectable({ factory: function ValidationService_Factory() { return new ValidationService(inject(ElectronService)); }, token: ValidationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BtnFieldComponent {
    /**
     * @param {?} electronService
     * @param {?} validationService
     */
    constructor(electronService, validationService) {
        this.electronService = electronService;
        this.validationService = validationService;
        this.field = {};
    }
    /**
     * @return {?}
     */
    runAction() {
        /** @type {?} */
        const actionName = this.field.action;
        /** @type {?} */
        const lastLetter = actionName.substr(-1);
        if (lastLetter === '$') {
            this.validationService.actionAsync(actionName, this.form.value).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                this.message = res;
            }));
        }
        else {
            this.message = this.electronService.ipcRenderer.sendSync('runAction', actionName, this.form.value);
        }
    }
}
BtnFieldComponent.decorators = [
    { type: Component, args: [{
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
            }] }
];
/** @nocollapse */
BtnFieldComponent.ctorParameters = () => [
    { type: ElectronService },
    { type: ValidationService }
];
BtnFieldComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BooleanComponent {
    constructor() {
        this.field = {};
    }
    /**
     * @return {?}
     */
    get control() {
        return this.form.controls[this.field.name];
    }
    /**
     * @return {?}
     */
    get value() {
        return this.form.controls[this.field.name].value;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set value(val) {
        this.form.controls[this.field.name].setValue(val);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    onChange(val) {
        this.value = val;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!isBoolean(this.value)) {
            this.value = false;
        }
    }
}
BooleanComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'boolean',
                template: `
    <div class="field field-boolean">
      <div class="field-label">{{ field.label }}</div>
      <ui-switch [checked]="value" (change)="onChange($event)"></ui-switch>
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
            }] }
];
/** @nocollapse */
BooleanComponent.ctorParameters = () => [];
BooleanComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MessageComponent {
    constructor() {
        this.field = {};
    }
}
MessageComponent.decorators = [
    { type: Component, args: [{
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
            }] }
];
/** @nocollapse */
MessageComponent.ctorParameters = () => [];
MessageComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropDownComponent {
    constructor() {
        this.field = {};
    }
    /**
     * @return {?}
     */
    get value() {
        return this.form.controls[this.field.name].value;
    }
    /**
     * @return {?}
     */
    get control() {
        return this.form.controls[this.field.name];
    }
}
DropDownComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'dropdown',
                template: `
    <div [formGroup]="form">
      <div class="field field-dropdown">
        <div class="field-label">{{ field.label }}</div>
        <select [id]="field.name" [formControlName]="field.name">
          <option value="">-- Select One --</option>
          <option *ngFor="let opt of field.options" [value]="opt.value">{{
            opt.label
          }}</option>
        </select>
        <span class="error-message" *ngIf="control.errors?.required"
          >Please fill out this field.</span
        ><span class="waiting-message" *ngIf="control.status === 'PENDING'">
        Validating...
      </span>
        <span class="error-message" *ngIf="control.errors?.dynamicError && field.errorMessage">{{
          field.errorMessage
        }}</span>
        <span class="help" *ngIf="field.help">{{ field.help }}</span>
      </div>
    </div>
  `
            }] }
];
/** @nocollapse */
DropDownComponent.ctorParameters = () => [];
DropDownComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RadioComponent {
    constructor() {
        this.field = {};
    }
    /**
     * @return {?}
     */
    get value() {
        return this.form.controls[this.field.name].value;
    }
    /**
     * @return {?}
     */
    get control() {
        return this.form.controls[this.field.name];
    }
}
RadioComponent.decorators = [
    { type: Component, args: [{
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
        <span class="error-message" *ngIf="control.errors?.required"
          >Please fill out this field.</span
        ><span class="waiting-message" *ngIf="control.status === 'PENDING'">
        Validating...
      </span>
        <span class="error-message" *ngIf="control.errors?.dynamicError && field.errorMessage">{{
          field.errorMessage
        }}</span>
        <span class="help" *ngIf="field.help">{{ field.help }}</span>
      </div>
    </div>
  `
            }] }
];
RadioComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextBoxComponent {
    constructor() {
        this.field = {};
    }
    /**
     * @return {?}
     */
    get isValid() {
        return this.form.controls[this.field.name].valid;
    }
    /**
     * @return {?}
     */
    get isDirty() {
        return this.form.controls[this.field.name].dirty;
    }
    /**
     * @return {?}
     */
    get value() {
        return this.form.controls[this.field.name].value;
    }
    /**
     * @return {?}
     */
    get control() {
        return this.form.controls[this.field.name];
    }
}
TextBoxComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'textbox',
                template: `
    <div [formGroup]="form">
      <div class="field field-text">
        <div class="field-label">{{ field.label }}</div>
        <input
          [attr.type]="field.type"
          class="form-control"
          [id]="field.name"
          [name]="field.name"
          [formControlName]="field.name"
          [readonly]="field.readonly"
          [ngClass]="{ 'field-readonly': field.readonly }"
        />
        <span class="error-message" *ngIf="control.errors?.required"
          >Please fill out this field.</span
        >
        <span class="waiting-message" *ngIf="control.status === 'PENDING'">
          Validating...
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
            }] }
];
/** @nocollapse */
TextBoxComponent.ctorParameters = () => [];
TextBoxComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DirectoryComponent {
    /**
     * @param {?} electronService
     */
    constructor(electronService) {
        this.electronService = electronService;
        this.field = {};
        this.btnLabel = 'Choose a Folder';
        this.dialog = this.electronService.remote.dialog;
    }
    /**
     * @return {?}
     */
    get isValid() {
        return this.form.controls[this.field.name].valid;
    }
    /**
     * @return {?}
     */
    get isDirty() {
        return this.form.controls[this.field.name].dirty;
    }
    /**
     * @return {?}
     */
    get value() {
        return this.form.controls[this.field.name].value;
    }
    /**
     * @return {?}
     */
    get control() {
        return this.form.controls[this.field.name];
    }
    /**
     * @return {?}
     */
    chooseFolder() {
        /** @type {?} */
        const value = this.dialog.showOpenDialog({ properties: ['openDirectory'] });
        if (value) {
            this.form.controls[this.field.name].setValue(value[0]);
            // this.onChange.emit(value[0]);
            return;
        }
    }
}
DirectoryComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'directory',
                template: `
    <div [formGroup]="form">
      <div class="field field-directory">
        <div class="field-label">{{ field.label }}</div>
        <div class="value">Folder: {{ control?.value }}</div>
        <div class="btn" (click)="chooseFolder()">
          {{ btnLabel }}
        </div>
        <span class="error-message" *ngIf="control.errors?.required"
          >Please fill out this field.</span
        >
        <span
          class="error-message"
          *ngIf="control.errors?.dynamicError && field.errorMessage"
          >{{ field.errorMessage }}</span
        >
        <span class="waiting-message" *ngIf="control.status === 'PENDING'">
          Validating...
        </span>
        <span class="help" *ngIf="field.help">{{ field.help }}</span>
        <input [formControlName]="field.name" type="hidden" />
      </div>
    </div>
  `
            }] }
];
/** @nocollapse */
DirectoryComponent.ctorParameters = () => [
    { type: ElectronService }
];
DirectoryComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckBoxComponent {
    constructor() {
        this.field = {};
    }
    /**
     * @return {?}
     */
    get isValid() {
        return this.form.controls[this.field.name].valid;
    }
    /**
     * @return {?}
     */
    get isDirty() {
        return this.form.controls[this.field.name].dirty;
    }
    /**
     * @return {?}
     */
    get value() {
        return this.form.controls[this.field.name].value;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set value(val) {
        this.form.controls[this.field.name].setValue(val);
    }
    /**
     * @return {?}
     */
    get control() {
        return this.form.controls[this.field.name];
    }
    /**
     * @param {?} checked
     * @param {?} opt
     * @return {?}
     */
    onChecklistChange(checked, opt) {
        opt.checked = checked;
        this.value = this.flattenValues(this.field.options);
    }
    /**
     * @param {?} checkboxes
     * @return {?}
     */
    flattenValues(checkboxes) {
        return checkboxes.filter((/**
         * @param {?} c
         * @return {?}
         */
        c => c.checked)).map((/**
         * @param {?} c
         * @return {?}
         */
        c => c.value));
    }
}
CheckBoxComponent.decorators = [
    { type: Component, args: [{
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
    </div>
  `
            }] }
];
CheckBoxComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} electronService
 * @param {?} cdRef
 * @param {?} validatorName
 * @return {?}
 */
function dynamicValidatorFn(electronService, cdRef, validatorName) {
    return (/**
     * @param {?} control
     * @return {?}
     */
    (control) => {
        console.log('dynamicalidatorFn', validatorName);
        /** @type {?} */
        const value = control.value;
        /** @type {?} */
        const result = electronService.ipcRenderer.sendSync('runValidator', validatorName, value);
        if (!result) {
            cdRef.markForCheck();
            return { dynamicError: true };
        }
        cdRef.markForCheck();
        return null;
    });
}
/**
 * @param {?} validationService
 * @param {?} cdRef
 * @param {?} validatorName
 * @return {?}
 */
function dynamicAsyncValidatorFn(validationService, cdRef, validatorName) {
    return (/**
     * @param {?} control
     * @return {?}
     */
    (control) => {
        console.log('dynamicalidatorFn', validatorName);
        /*
        const value = control.value;
        return validationService.validateAsync(validatorName, value).pipe(
          map(
            success => {
              console.log('dynamicalidatorFn resulted', success);
              if (!success) {
                return { dynamicError: true };
              }
              return null;
            },
            e => {
              return { dynamicError: true };
            }
          ),
          catchError(() => null),
          take(1)
        );
      };*/
        if (!control.valueChanges) {
            return of(null);
        }
        else {
            return control.valueChanges.pipe(debounceTime(300), distinctUntilChanged(), take(1), switchMap((/**
             * @param {?} value
             * @return {?}
             */
            value => validationService.validateAsync(validatorName, value))), map((/**
             * @param {?} success
             * @return {?}
             */
            success => {
                console.log('dynamicalidatorFn resulted', success);
                if (!success) {
                    return { dynamicError: true };
                }
                return null;
            }), (/**
             * @param {?} e
             * @return {?}
             */
            e => {
                return { dynamicError: true };
            })), catchError((/**
             * @return {?}
             */
            () => null)), tap((/**
             * @param {?} val
             * @return {?}
             */
            val => console.log('dynamicalidatorFn tapped', val))), take(1), tap((/**
             * @return {?}
             */
            () => {
                control.markAsTouched();
                cdRef.markForCheck();
            })));
        }
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GroupComponent {
    /**
     * @param {?} electronService
     * @param {?} validationService
     * @param {?} cdRef
     */
    constructor(electronService, validationService, cdRef) {
        this.electronService = electronService;
        this.validationService = validationService;
        this.cdRef = cdRef;
        cdRef.markForCheck();
    }
    /**
     * @return {?}
     */
    get fields() {
        return this.group.fields;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log('group.component', this.group);
        if (this.group && this.group.fields) {
            /** @type {?} */
            const fieldsCtrls = {};
            for (const f of this.group.fields) {
                if (f.type === 'message') {
                    // do nothing
                    return;
                }
                else {
                    // if (f.type !== 'checkbox') {
                    /** @type {?} */
                    const validators = [];
                    /** @type {?} */
                    const asyncValidators = [];
                    if (f.required) {
                        validators.push(Validators.required);
                    }
                    if (f.validator) {
                        /** @type {?} */
                        const lastLetter = f.validator.substr(-1);
                        if (lastLetter === '$') {
                            console.log('validator is observable', f.validator);
                            asyncValidators.push(dynamicAsyncValidatorFn(this.validationService, this.cdRef, f.validator));
                        }
                        else {
                            console.log('validator is normal', f.validator);
                            validators.push(dynamicValidatorFn(this.electronService, this.cdRef, f.validator));
                        }
                    }
                    if (f.type === 'checkbox' && f.options && this.preferences[f.name]) {
                        f.options.map((/**
                         * @param {?} o
                         * @return {?}
                         */
                        o => (o.checked = this.preferences[f.name].includes(o.value))));
                    }
                    if (f.fixedValue) {
                        this.preferences[f.name] = f.fixedValue;
                    }
                    fieldsCtrls[f.name] = new FormControl(this.preferences[f.name] || '', validators, asyncValidators);
                } /* else {
                  const opts = {};
                  for (const opt of f.options) {
                    opts[opt.label] = new FormControl(opt.value);
                  }
                  const formGroup = new FormGroup(opts);
                  if (this.preferences[f.name]) {
                    formGroup.setValue(this.preferences[f.name]);
                  }
                  fieldsCtrls[f.name] = formGroup;
                }*/
                this.form.addControl(f.name, fieldsCtrls[f.name]);
            }
            // this.internalForm = new FormGroup(fieldsCtrls);
            // this.formChange.emit(this.form);
        }
        this.cdRef.markForCheck();
    }
}
GroupComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'group',
                template: "<div class=\"group-label\" *ngIf=\"group.label\">{{ group.label }}</div>\n<div *ngFor=\"let field of fields\">\n  <ng-container [ngSwitch]=\"field.type\">\n    <textbox *ngSwitchCase=\"'text'\" [field]=\"field\" [form]=\"form\"></textbox>\n    <dropdown\n      *ngSwitchCase=\"'dropdown'\"\n      [field]=\"field\"\n      [form]=\"form\"\n    ></dropdown>\n    <checkbox\n      *ngSwitchCase=\"'checkbox'\"\n      [field]=\"field\"\n      [form]=\"form\"\n    ></checkbox>\n    <radio *ngSwitchCase=\"'radio'\" [field]=\"field\" [form]=\"form\"></radio>\n    <directory\n      *ngSwitchCase=\"'directory'\"\n      [field]=\"field\"\n      [form]=\"form\"\n    ></directory>\n    <message *ngSwitchCase=\"'message'\" [field]=\"field\" [form]=\"form\"></message>\n    <boolean *ngSwitchCase=\"'boolean'\" [field]=\"field\" [form]=\"form\"></boolean>\n    <btnfield *ngSwitchCase=\"'button'\" [field]=\"field\" [form]=\"form\"></btnfield>\n  </ng-container>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["::ng-deep .group-label{font-size:16px;font-weight:700;text-transform:uppercase;border-bottom:1px dashed #000;margin-bottom:10px}::ng-deep .field{margin-bottom:20px}::ng-deep .field:last-child{margin-bottom:0}::ng-deep .field .field-label{border-bottom:1px dashed #ccc;margin-bottom:10px}::ng-deep .field .help{display:block;padding-top:5px;padding-bottom:5px;font-size:12px}::ng-deep .field .btn{display:inline-block;background-color:#d9dadb;color:#000;padding:5px;border-radius:0;margin-top:5px;border:1px solid rgba(0,0,0,.25)}::ng-deep .field .btn:hover{cursor:pointer;background-color:#a7a8a8}::ng-deep .field-text input{width:100%;font-size:14px;padding:4px;background:#fff;border:1px solid #dadada}::ng-deep .field-readonly{background:#d9dadb!important;border:1px solid #dadada!important}::ng-deep .field-dropdown select{width:100%;font-size:14px;padding:4px;background:#fff;border:1px solid #dadada}::ng-deep .field-button .message{display:block;padding-top:5px;padding-bottom:5px;font-size:12px}::ng-deep .field-message .field-heading{border-bottom:1px dashed #ccc;margin-bottom:10px}::ng-deep .error-message{display:block;padding-top:5px;padding-bottom:5px;font-size:12px;color:#8c0707}"]
            }] }
];
/** @nocollapse */
GroupComponent.ctorParameters = () => [
    { type: ElectronService },
    { type: ValidationService },
    { type: ChangeDetectorRef }
];
GroupComponent.propDecorators = {
    group: [{ type: Input }],
    preferences: [{ type: Input }],
    form: [{ type: Input }],
    validationOn: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SidebarComponent {
    constructor() {
        this.sectionChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log('sidebar.component', this.preferences, this.options, this.defaults, this.activeSection);
    }
    /**
     * @param {?} section
     * @return {?}
     */
    selectSection(section) {
        this.activeSection = section;
        this.sectionChange.emit(section);
    }
    /**
     * @return {?}
     */
    onSave() {
        /*preferences[this.state.activeSection][key] = value;
    
        this.setState({
          preferences: preferences
        });
    
        ipcRenderer.send('setPreferences', preferences);*/
    }
}
SidebarComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'sidebar',
                template: "<div\n  class=\"sidebar-section\"\n  *ngFor=\"let section of options?.sections\"\n  [ngClass]=\"{ 'active': activeSection?.name === section.name }\"\n  (click)=\"selectSection(section)\"\n>\n  <fa-icon\n    class=\"section-icon\"\n    [icon]=\"['fas', section.icon]\"\n    [fixedWidth]=\"true\"\n  ></fa-icon>\n  <span class=\"section-label\">{{ section.label }}</span>\n</div>\n",
                styles: [".sidebar-section{height:40px;min-height:40px;max-height:40px;width:199px;min-width:199px;max-width:199px;overflow:hidden;padding:4px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.sidebar-section.active,.sidebar-section:hover{background-color:#f5f5f5}.sidebar-section .section-icon{margin-right:4px;width:30px;max-width:30px;min-width:30px}.sidebar-section .section-label{font-size:12px}"]
            }] }
];
/** @nocollapse */
SidebarComponent.ctorParameters = () => [];
SidebarComponent.propDecorators = {
    activeSection: [{ type: Input }],
    sectionChange: [{ type: Output }],
    preferences: [{ type: Input }],
    options: [{ type: Input }],
    defaults: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MainComponent {
    /**
     * @param {?} electronService
     */
    constructor(electronService) {
        this.electronService = electronService;
    }
    /**
     * @return {?}
     */
    get prefs() {
        return this.preferences[this.activeSection.name];
    }
    /**
     * @return {?}
     */
    get activeSectionForm() {
        return this.form.get(this.activeSection.name);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log('main.component->', this.preferences, this.options, this.defaults, this.activeSection);
        /** @type {?} */
        const validatorOptions = {};
        if (this.options.validationOn) {
            validatorOptions.updateOn = this.options.validationOn;
        }
        /** @type {?} */
        const formGroups = {};
        this.options.sections.forEach((/**
         * @param {?} s
         * @return {?}
         */
        s => {
            formGroups[s.name] = new FormGroup({}, validatorOptions);
        }));
        this.form = new FormGroup(formGroups, validatorOptions);
        console.log('main.ocmponent form is', this.form, validatorOptions);
    }
    /**
     * @return {?}
     */
    save() {
        console.log('save', this.form, this.form.valid, this.form.value);
        if (this.form.valid) {
            console.log('form is valid');
            /** @type {?} */
            const preferences = this.form.value;
            console.log('values', preferences);
            this.showSavedMessage();
            this.electronService.ipcRenderer.send('setPreferences', preferences);
        }
        else if (this.form.pending) {
            this.form.statusChanges.subscribe((/**
             * @param {?} status
             * @return {?}
             */
            status => {
                console.log('statusChanges form was pending and now is', status);
                if (status === 'VALID') {
                    this.save();
                }
            }));
        }
        else {
            this.showErrorMessage();
        }
    }
    /**
     * @return {?}
     */
    showSavedMessage() {
        this.flashMessage = {
            message: 'Successfully saved.',
            level: FlashMessageLevel.SUCCESS
        };
    }
    /**
     * @return {?}
     */
    showErrorMessage() {
        this.flashMessage = {
            message: 'Form is not valid.',
            level: FlashMessageLevel.ERROR
        };
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onSubmit(e) {
        console.log('onsubmit', this.form.valid, this.form, this.form.value);
        this.save();
        e.preventDefault();
        return false;
    }
    /**
     * @param {?} section
     * @return {?}
     */
    sectionForm(section) {
        return this.form.get(section.name);
    }
    /**
     * @param {?} section
     * @return {?}
     */
    sectionPreferences(section) {
        return this.preferences[section.name];
    }
    /**
     * @param {?} group
     * @return {?}
     */
    groupInActiveSelection(group) {
        if (this.activeSection &&
            this.activeSection.form &&
            this.activeSection.form.groups) {
            if (this.activeSection.form.groups.find((/**
             * @param {?} g
             * @return {?}
             */
            g => g.id === group.id))) {
                return true;
            }
        }
        return false;
    }
}
MainComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'main',
                template: "<form (ngSubmit)=\"onSubmit($event)\" [formGroup]=\"form\">\r\n  <div class=\"groups\">\r\n    <ng-container *ngFor=\"let section of options?.sections\">\r\n      <group\r\n        *ngFor=\"let group of section.form?.groups\"\r\n        [group]=\"group\"\r\n        [preferences]=\"sectionPreferences(section)\"\r\n        [form]=\"sectionForm(section)\"\r\n        [validationOn]=\"options.validationOn\"\r\n        [ngClass]=\"{\r\n          'visible-group': groupInActiveSelection(group)\r\n        }\"\r\n      ></group>\r\n    </ng-container>\r\n  </div>\r\n  <div class=\"bottom-bar\">\r\n    <flash-message [message]=\"flashMessage\"></flash-message>\r\n    <button type=\"submit\" class=\"btn btn-primary\">\r\n      Save\r\n    </button>\r\n  </div>\r\n</form>\r\n",
                styles: [".groups{height:calc(100vh - 40px);padding:10px;overflow:auto}group{display:none}.visible-group{display:block}.bottom-bar{padding:5px;text-align:right;background:#dcdcdc;border-top:1px solid #cecece}.bottom-bar button{background:rgba(2,95,43,.72);border:none;padding:5px 10px;font-size:14px;color:#fff;outline:0;transition:width 2s;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica,sans-serif}.bottom-bar button:hover{background:#000;border:none}"]
            }] }
];
/** @nocollapse */
MainComponent.ctorParameters = () => [
    { type: ElectronService }
];
MainComponent.propDecorators = {
    activeSection: [{ type: Input }],
    preferences: [{ type: Input }],
    options: [{ type: Input }],
    defaults: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ElectronNgPreferencesModule {
    constructor() {
        library.add(fas);
    }
}
ElectronNgPreferencesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MainComponent,
                    SidebarComponent,
                    GroupComponent,
                    FlashMessageComponent,
                    CheckBoxComponent,
                    DirectoryComponent,
                    TextBoxComponent,
                    RadioComponent,
                    DropDownComponent,
                    MessageComponent,
                    BooleanComponent,
                    BtnFieldComponent,
                    ElectronNgPreferencesComponent
                ],
                providers: [ElectronService, ValidationService],
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FontAwesomeModule,
                    UiSwitchModule
                ],
                exports: [ElectronNgPreferencesComponent]
            },] }
];
/** @nocollapse */
ElectronNgPreferencesModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ElectronNgPreferencesComponent, ElectronNgPreferencesModule, FlashMessageComponent as ɵf, BooleanComponent as ɵm, BtnFieldComponent as ɵn, CheckBoxComponent as ɵg, DirectoryComponent as ɵh, DropDownComponent as ɵk, MessageComponent as ɵl, RadioComponent as ɵj, TextBoxComponent as ɵi, GroupComponent as ɵd, MainComponent as ɵb, ElectronService as ɵa, ValidationService as ɵe, SidebarComponent as ɵc };

//# sourceMappingURL=electron-ng-preferences.js.map