import { isBoolean } from 'util';
import { __values } from 'tslib';
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
var ElectronService = /** @class */ (function () {
    function ElectronService() {
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
    ElectronService.prototype.isElectron = /**
     * @return {?}
     */
    function () {
        // @ts-ignore
        return window && window.process && window.process.type;
    };
    /**
     * @return {?}
     */
    ElectronService.prototype.getOSLocale = /**
     * @return {?}
     */
    function () {
        if (this.isElectron() && this.remote && this.remote.app) {
            return this.remote.app.getLocale();
        }
    };
    ElectronService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ElectronService.ctorParameters = function () { return []; };
    /** @nocollapse */ ElectronService.ngInjectableDef = defineInjectable({ factory: function ElectronService_Factory() { return new ElectronService(); }, token: ElectronService, providedIn: "root" });
    return ElectronService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ElectronNgPreferencesComponent = /** @class */ (function () {
    function ElectronNgPreferencesComponent(electronService) {
        var _this = this;
        this.electronService = electronService;
        this.options = this.electronService.ipcRenderer.sendSync('getPreferenceOptions');
        this.preferences = this.electronService.ipcRenderer.sendSync('getPreferences');
        this.defaults = this.electronService.ipcRenderer.sendSync('getDefaults');
        this.options.sections = this.options.sections.filter((/**
         * @param {?} section
         * @return {?}
         */
        function (section) { return !section.enabled; }));
        this.options.sections.forEach((/**
         * @param {?} section
         * @return {?}
         */
        function (section) {
            if (!_this.preferences[section.name]) {
                _this.preferences[section.name] = {};
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
    ElectronNgPreferencesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log('electron-ng-preferences init', this.options, this.preferences, this.defaults, this.activeSection);
    };
    /**
     * @param {?} section
     * @return {?}
     */
    ElectronNgPreferencesComponent.prototype.sectionChanged = /**
     * @param {?} section
     * @return {?}
     */
    function (section) {
        this.activeSection = section;
    };
    ElectronNgPreferencesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'electron-ng-preferences',
                    template: "<div class=\"preference-window\">\r\n<sidebar\r\n  [activeSection]=\"activeSection\"\r\n  [options]=\"options\"\r\n  [preferences]=\"preferences\"\r\n  [defaults]=\"defaults\"\r\n  (sectionChange)=\"sectionChanged($event)\"\r\n></sidebar>\r\n<main\r\n  [activeSection]=\"activeSection\"\r\n  [options]=\"options\"\r\n  [preferences]=\"preferences\"\r\n  [defaults]=\"defaults\"\r\n></main>\r\n</div>",
                    styles: ["main{height:100%;min-height:100%;width:600px;min-width:600px;max-width:600px;background-color:#e7e7e7;font-size:14px;overflow:hidden;cursor:default;overflow-x:hidden;overflow-y:auto}sidebar{height:100%;min-height:100%;width:199px;min-width:199px;max-width:199px;border-right:1px solid #b8b8b9;display:flex;flex-direction:column;justify-content:flex-start;cursor:default;overflow-x:hidden;overflow-y:auto;background-color:#fff}.preference-window{height:100vh;width:100vw;display:flex}"]
                }] }
    ];
    /** @nocollapse */
    ElectronNgPreferencesComponent.ctorParameters = function () { return [
        { type: ElectronService }
    ]; };
    return ElectronNgPreferencesComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FlashMessageComponent = /** @class */ (function () {
    function FlashMessageComponent() {
        this.showMessage = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FlashMessageComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.manageMessage(changes.message.currentValue);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    FlashMessageComponent.prototype.manageMessage = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        var _this = this;
        if (message && message.message && message.message.length > 0) {
            this.message = message;
            this.showMessage = true;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.showMessage = false;
                _this.message = null;
            }), 8000);
        }
    };
    FlashMessageComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'flash-message',
                    template: "\n    <div\n      class=\"flashMessage animateCss\"\n      [ngClass]=\"{\n        showFlashmessage: showMessage,\n        flashSuccess: message?.level === 'success',\n        flashError: message?.level === 'error'\n      }\"\n      [hidden]=\"!showMessage\"\n    >\n      <span>{{ message?.message }}</span>\n    </div>\n  ",
                    styles: [".flashMessage{text-align:center;border:none;padding:5px 10px;color:#fff;font-size:14px;display:inline;margin-right:15px}.flashMessage.flashSuccess{background:#025f2b}.flashMessage.flashError{background:#ad0909}.animateCss{transition:opacity 1s ease-in-out,margin-left .5s ease-in-out;opacity:0}.showFlashmessage{opacity:2}"]
                }] }
    ];
    /** @nocollapse */
    FlashMessageComponent.ctorParameters = function () { return []; };
    FlashMessageComponent.propDecorators = {
        message: [{ type: Input }]
    };
    return FlashMessageComponent;
}());
/** @enum {string} */
var FlashMessageLevel = {
    SUCCESS: 'success',
    ERROR: 'error',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import rxIpc from 'rx-ipc-electron-six/lib/renderer'; // not working @todo find a better way
var ValidationService = /** @class */ (function () {
    function ValidationService(electronService) {
        this.electronService = electronService;
        this.rxIpc = ((/** @type {?} */ (window))).require('rx-ipc-electron-six/lib/renderer').default;
        console.log('ValidationService', this.rxIpc);
    }
    /**
     * @param {?} name
     * @param {?} val
     * @return {?}
     */
    ValidationService.prototype.validateAsync = /**
     * @param {?} name
     * @param {?} val
     * @return {?}
     */
    function (name, val) {
        return this.rxIpc.runCommand('runObservableValidator', null, name, val);
    };
    /**
     * @param {?} name
     * @param {?} form
     * @return {?}
     */
    ValidationService.prototype.actionAsync = /**
     * @param {?} name
     * @param {?} form
     * @return {?}
     */
    function (name, form) {
        return this.rxIpc.runCommand('runObservableAction', null, name, form);
    };
    ValidationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ValidationService.ctorParameters = function () { return [
        { type: ElectronService }
    ]; };
    /** @nocollapse */ ValidationService.ngInjectableDef = defineInjectable({ factory: function ValidationService_Factory() { return new ValidationService(inject(ElectronService)); }, token: ValidationService, providedIn: "root" });
    return ValidationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BtnFieldComponent = /** @class */ (function () {
    function BtnFieldComponent(electronService, validationService) {
        this.electronService = electronService;
        this.validationService = validationService;
        this.field = {};
    }
    /**
     * @return {?}
     */
    BtnFieldComponent.prototype.runAction = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var actionName = this.field.action;
        /** @type {?} */
        var lastLetter = actionName.substr(-1);
        if (lastLetter === '$') {
            this.validationService.actionAsync(actionName, this.form.value).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                _this.message = res;
            }));
        }
        else {
            this.message = this.electronService.ipcRenderer.sendSync('runAction', actionName, this.form.value);
        }
    };
    BtnFieldComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'btnfield',
                    template: "\n    <div class=\"field field-button\">\n      <div class=\"btn\" (click)=\"runAction()\">\n        {{ field.label }}\n      </div>\n      <span class=\"message\" *ngIf=\"message\">{{ message }}</span>\n      <span class=\"help\" *ngIf=\"field.help\">{{ field.help }}</span>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    BtnFieldComponent.ctorParameters = function () { return [
        { type: ElectronService },
        { type: ValidationService }
    ]; };
    BtnFieldComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return BtnFieldComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BooleanComponent = /** @class */ (function () {
    function BooleanComponent() {
        this.field = {};
    }
    Object.defineProperty(BooleanComponent.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BooleanComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name].value;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.form.controls[this.field.name].setValue(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} val
     * @return {?}
     */
    BooleanComponent.prototype.onChange = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.value = val;
    };
    /**
     * @return {?}
     */
    BooleanComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!isBoolean(this.value)) {
            this.value = false;
        }
    };
    BooleanComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'boolean',
                    template: "\n    <div class=\"field field-boolean\">\n      <div class=\"field-label\">{{ field.label }}</div>\n      <ui-switch [checked]=\"value\" (change)=\"onChange($event)\"></ui-switch>\n      <span class=\"error-message\" *ngIf=\"control.errors?.required\"\n        >Please fill out this field.</span\n      ><span class=\"waiting-message\" *ngIf=\"control.status === 'PENDING'\">\n        Validating...\n      </span>\n      <span\n        class=\"error-message\"\n        *ngIf=\"control.errors?.dynamicError && field.errorMessage\"\n        >{{ field.errorMessage }}</span\n      >\n      <span class=\"help\" *ngIf=\"field.help\">{{ field.help }}</span>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    BooleanComponent.ctorParameters = function () { return []; };
    BooleanComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return BooleanComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
        this.field = {};
    }
    MessageComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'message',
                    template: "\n    <div class=\"field field-message\">\n      <div class=\"field-heading\" *ngIf=\"field.heading\">\n        {{ field.heading }}\n      </div>\n      <div class=\"field-content\" [innerHTML]=\"field.content\"></div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    MessageComponent.ctorParameters = function () { return []; };
    MessageComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return MessageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DropDownComponent = /** @class */ (function () {
    function DropDownComponent() {
        this.field = {};
    }
    Object.defineProperty(DropDownComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name].value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownComponent.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name];
        },
        enumerable: true,
        configurable: true
    });
    DropDownComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'dropdown',
                    template: "\n    <div [formGroup]=\"form\">\n      <div class=\"field field-dropdown\">\n        <div class=\"field-label\">{{ field.label }}</div>\n        <select [id]=\"field.name\" [formControlName]=\"field.name\">\n          <option value=\"\">-- Select One --</option>\n          <option *ngFor=\"let opt of field.options\" [value]=\"opt.value\">{{\n            opt.label\n          }}</option>\n        </select>\n        <span class=\"error-message\" *ngIf=\"control.errors?.required\"\n          >Please fill out this field.</span\n        ><span class=\"waiting-message\" *ngIf=\"control.status === 'PENDING'\">\n        Validating...\n      </span>\n        <span class=\"error-message\" *ngIf=\"control.errors?.dynamicError && field.errorMessage\">{{\n          field.errorMessage\n        }}</span>\n        <span class=\"help\" *ngIf=\"field.help\">{{ field.help }}</span>\n      </div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    DropDownComponent.ctorParameters = function () { return []; };
    DropDownComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return DropDownComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
        this.field = {};
    }
    Object.defineProperty(RadioComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name].value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioComponent.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name];
        },
        enumerable: true,
        configurable: true
    });
    RadioComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'radio',
                    template: "\n    <div [formGroup]=\"form\">\n      <div class=\"field field-radio\">\n        <div class=\"field-label\">{{ field.label }}</div>\n        <div class=\"radio-option\" *ngFor=\"let opt of field.options\">\n          <input\n            type=\"radio\"\n            id=\"{{ field.name }}\"\n            [value]=\"opt.value\"\n            [formControlName]=\"field.name\"\n          />\n          <label>{{ opt.label }}</label>\n        </div>\n        <span class=\"error-message\" *ngIf=\"control.errors?.required\"\n          >Please fill out this field.</span\n        ><span class=\"waiting-message\" *ngIf=\"control.status === 'PENDING'\">\n        Validating...\n      </span>\n        <span class=\"error-message\" *ngIf=\"control.errors?.dynamicError && field.errorMessage\">{{\n          field.errorMessage\n        }}</span>\n        <span class=\"help\" *ngIf=\"field.help\">{{ field.help }}</span>\n      </div>\n    </div>\n  "
                }] }
    ];
    RadioComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return RadioComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextBoxComponent = /** @class */ (function () {
    function TextBoxComponent() {
        this.field = {};
    }
    Object.defineProperty(TextBoxComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name].valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextBoxComponent.prototype, "isDirty", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name].dirty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextBoxComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name].value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextBoxComponent.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name];
        },
        enumerable: true,
        configurable: true
    });
    TextBoxComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'textbox',
                    template: "\n    <div [formGroup]=\"form\">\n      <div class=\"field field-text\">\n        <div class=\"field-label\">{{ field.label }}</div>\n        <input\n          [attr.type]=\"field.type\"\n          class=\"form-control\"\n          [id]=\"field.name\"\n          [name]=\"field.name\"\n          [formControlName]=\"field.name\"\n          [readonly]=\"field.readonly\"\n          [ngClass]=\"{ 'field-readonly': field.readonly }\"\n        />\n        <span class=\"error-message\" *ngIf=\"control.errors?.required\"\n          >Please fill out this field.</span\n        >\n        <span class=\"waiting-message\" *ngIf=\"control.status === 'PENDING'\">\n          Validating...\n        </span>\n        <span\n          class=\"error-message\"\n          *ngIf=\"control.errors?.dynamicError && field.errorMessage\"\n          >{{ field.errorMessage }}</span\n        >\n        <span class=\"help\" *ngIf=\"field.help\">{{ field.help }}</span>\n      </div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    TextBoxComponent.ctorParameters = function () { return []; };
    TextBoxComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return TextBoxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DirectoryComponent = /** @class */ (function () {
    function DirectoryComponent(electronService) {
        this.electronService = electronService;
        this.field = {};
        this.btnLabel = 'Choose a Folder';
        this.dialog = this.electronService.remote.dialog;
    }
    Object.defineProperty(DirectoryComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name].valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DirectoryComponent.prototype, "isDirty", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name].dirty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DirectoryComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name].value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DirectoryComponent.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DirectoryComponent.prototype.chooseFolder = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.dialog.showOpenDialog({ properties: ['openDirectory'] });
        if (value) {
            this.form.controls[this.field.name].setValue(value[0]);
            // this.onChange.emit(value[0]);
            return;
        }
    };
    DirectoryComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'directory',
                    template: "\n    <div [formGroup]=\"form\">\n      <div class=\"field field-directory\">\n        <div class=\"field-label\">{{ field.label }}</div>\n        <div class=\"value\">Folder: {{ control?.value }}</div>\n        <div class=\"btn\" (click)=\"chooseFolder()\">\n          {{ btnLabel }}\n        </div>\n        <span class=\"error-message\" *ngIf=\"control.errors?.required\"\n          >Please fill out this field.</span\n        >\n        <span\n          class=\"error-message\"\n          *ngIf=\"control.errors?.dynamicError && field.errorMessage\"\n          >{{ field.errorMessage }}</span\n        >\n        <span class=\"waiting-message\" *ngIf=\"control.status === 'PENDING'\">\n          Validating...\n        </span>\n        <span class=\"help\" *ngIf=\"field.help\">{{ field.help }}</span>\n        <input [formControlName]=\"field.name\" type=\"hidden\" />\n      </div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    DirectoryComponent.ctorParameters = function () { return [
        { type: ElectronService }
    ]; };
    DirectoryComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return DirectoryComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckBoxComponent = /** @class */ (function () {
    function CheckBoxComponent() {
        this.field = {};
    }
    Object.defineProperty(CheckBoxComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name].valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBoxComponent.prototype, "isDirty", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name].dirty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBoxComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name].value;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.form.controls[this.field.name].setValue(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBoxComponent.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} checked
     * @param {?} opt
     * @return {?}
     */
    CheckBoxComponent.prototype.onChecklistChange = /**
     * @param {?} checked
     * @param {?} opt
     * @return {?}
     */
    function (checked, opt) {
        opt.checked = checked;
        this.value = this.flattenValues(this.field.options);
    };
    /**
     * @param {?} checkboxes
     * @return {?}
     */
    CheckBoxComponent.prototype.flattenValues = /**
     * @param {?} checkboxes
     * @return {?}
     */
    function (checkboxes) {
        return checkboxes.filter((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return c.checked; })).map((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return c.value; }));
    };
    CheckBoxComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'checkbox',
                    template: "\n    <div [formGroup]=\"form\">\n      <div [formGroupName]=\"field.name\" class=\"field field-checkbox\">\n        <div class=\"field-label\">{{ field.label }}</div>\n        <div class=\"checkbox-option\" *ngFor=\"let opt of field.options\">\n          <input\n            type=\"checkbox\"\n            id=\"{{ field.name }}\"\n            [checked]=\"opt.checked\"\n            [value]=\"opt.value\"\n            (change)=\"onChecklistChange($event.target.checked, opt)\"\n          />\n          <label>{{ opt.label }}</label>\n        </div>\n        <span class=\"error-message\" *ngIf=\"control.errors?.required\"\n          >Please fill out this field.</span\n        ><span class=\"waiting-message\" *ngIf=\"control.status === 'PENDING'\">\n          Validating...\n        </span>\n        <span\n          class=\"error-message\"\n          *ngIf=\"control.errors?.dynamicError && field.errorMessage\"\n          >{{ field.errorMessage }}</span\n        >\n        <span class=\"help\" *ngIf=\"field.help\">{{ field.help }}</span>\n      </div>\n    </div>\n  "
                }] }
    ];
    CheckBoxComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return CheckBoxComponent;
}());

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
    function (control) {
        console.log('dynamicalidatorFn', validatorName);
        /** @type {?} */
        var value = control.value;
        /** @type {?} */
        var result = electronService.ipcRenderer.sendSync('runValidator', validatorName, value);
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
    function (control) {
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
            function (value) {
                return validationService.validateAsync(validatorName, value);
            })), map((/**
             * @param {?} success
             * @return {?}
             */
            function (success) {
                console.log('dynamicalidatorFn resulted', success);
                if (!success) {
                    return { dynamicError: true };
                }
                return null;
            }), (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                return { dynamicError: true };
            })), catchError((/**
             * @return {?}
             */
            function () { return null; })), tap((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return console.log('dynamicalidatorFn tapped', val); })), take(1), tap((/**
             * @return {?}
             */
            function () {
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
var GroupComponent = /** @class */ (function () {
    function GroupComponent(electronService, validationService, cdRef) {
        this.electronService = electronService;
        this.validationService = validationService;
        this.cdRef = cdRef;
        cdRef.markForCheck();
    }
    Object.defineProperty(GroupComponent.prototype, "fields", {
        get: /**
         * @return {?}
         */
        function () {
            return this.group.fields;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var e_1, _a;
        console.log('group.component', this.group);
        if (this.group && this.group.fields) {
            /** @type {?} */
            var fieldsCtrls = {};
            var _loop_1 = function (f) {
                if (f.type === 'message') {
                    return { value: void 0 };
                }
                else {
                    // if (f.type !== 'checkbox') {
                    /** @type {?} */
                    var validators = [];
                    /** @type {?} */
                    var asyncValidators = [];
                    if (f.required) {
                        validators.push(Validators.required);
                    }
                    if (f.validator) {
                        /** @type {?} */
                        var lastLetter = f.validator.substr(-1);
                        if (lastLetter === '$') {
                            console.log('validator is observable', f.validator);
                            asyncValidators.push(dynamicAsyncValidatorFn(this_1.validationService, this_1.cdRef, f.validator));
                        }
                        else {
                            console.log('validator is normal', f.validator);
                            validators.push(dynamicValidatorFn(this_1.electronService, this_1.cdRef, f.validator));
                        }
                    }
                    if (f.type === 'checkbox' && f.options && this_1.preferences[f.name]) {
                        f.options.map((/**
                         * @param {?} o
                         * @return {?}
                         */
                        function (o) { return (o.checked = _this.preferences[f.name].includes(o.value)); }));
                    }
                    if (f.fixedValue) {
                        this_1.preferences[f.name] = f.fixedValue;
                    }
                    fieldsCtrls[f.name] = new FormControl(this_1.preferences[f.name] || '', validators, asyncValidators);
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
                this_1.form.addControl(f.name, fieldsCtrls[f.name]);
            };
            var this_1 = this;
            try {
                for (var _b = __values(this.group.fields), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var f = _c.value;
                    var state_1 = _loop_1(f);
                    if (typeof state_1 === "object")
                        return state_1.value;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // this.internalForm = new FormGroup(fieldsCtrls);
            // this.formChange.emit(this.form);
        }
        this.cdRef.markForCheck();
    };
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
    GroupComponent.ctorParameters = function () { return [
        { type: ElectronService },
        { type: ValidationService },
        { type: ChangeDetectorRef }
    ]; };
    GroupComponent.propDecorators = {
        group: [{ type: Input }],
        preferences: [{ type: Input }],
        form: [{ type: Input }],
        validationOn: [{ type: Input }]
    };
    return GroupComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.sectionChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SidebarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log('sidebar.component', this.preferences, this.options, this.defaults, this.activeSection);
    };
    /**
     * @param {?} section
     * @return {?}
     */
    SidebarComponent.prototype.selectSection = /**
     * @param {?} section
     * @return {?}
     */
    function (section) {
        this.activeSection = section;
        this.sectionChange.emit(section);
    };
    /**
     * @return {?}
     */
    SidebarComponent.prototype.onSave = /**
     * @return {?}
     */
    function () {
        /*preferences[this.state.activeSection][key] = value;
    
        this.setState({
          preferences: preferences
        });
    
        ipcRenderer.send('setPreferences', preferences);*/
    };
    SidebarComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'sidebar',
                    template: "<div\n  class=\"sidebar-section\"\n  *ngFor=\"let section of options?.sections\"\n  [ngClass]=\"{ 'active': activeSection?.name === section.name }\"\n  (click)=\"selectSection(section)\"\n>\n  <fa-icon\n    class=\"section-icon\"\n    [icon]=\"['fas', section.icon]\"\n    [fixedWidth]=\"true\"\n  ></fa-icon>\n  <span class=\"section-label\">{{ section.label }}</span>\n</div>\n",
                    styles: [".sidebar-section{height:40px;min-height:40px;max-height:40px;width:199px;min-width:199px;max-width:199px;overflow:hidden;padding:4px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.sidebar-section.active,.sidebar-section:hover{background-color:#f5f5f5}.sidebar-section .section-icon{margin-right:4px;width:30px;max-width:30px;min-width:30px}.sidebar-section .section-label{font-size:12px}"]
                }] }
    ];
    /** @nocollapse */
    SidebarComponent.ctorParameters = function () { return []; };
    SidebarComponent.propDecorators = {
        activeSection: [{ type: Input }],
        sectionChange: [{ type: Output }],
        preferences: [{ type: Input }],
        options: [{ type: Input }],
        defaults: [{ type: Input }]
    };
    return SidebarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MainComponent = /** @class */ (function () {
    function MainComponent(electronService) {
        this.electronService = electronService;
    }
    Object.defineProperty(MainComponent.prototype, "prefs", {
        get: /**
         * @return {?}
         */
        function () {
            return this.preferences[this.activeSection.name];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainComponent.prototype, "activeSectionForm", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.get(this.activeSection.name);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MainComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log('main.component->', this.preferences, this.options, this.defaults, this.activeSection);
        /** @type {?} */
        var validatorOptions = {};
        if (this.options.validationOn) {
            validatorOptions.updateOn = this.options.validationOn;
        }
        /** @type {?} */
        var formGroups = {};
        this.options.sections.forEach((/**
         * @param {?} s
         * @return {?}
         */
        function (s) {
            formGroups[s.name] = new FormGroup({}, validatorOptions);
        }));
        this.form = new FormGroup(formGroups, validatorOptions);
        console.log('main.ocmponent form is', this.form, validatorOptions);
    };
    /**
     * @return {?}
     */
    MainComponent.prototype.save = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log('save', this.form, this.form.valid, this.form.value);
        if (this.form.valid) {
            console.log('form is valid');
            /** @type {?} */
            var preferences = this.form.value;
            console.log('values', preferences);
            this.showSavedMessage();
            this.electronService.ipcRenderer.send('setPreferences', preferences);
        }
        else if (this.form.pending) {
            this.form.statusChanges.subscribe((/**
             * @param {?} status
             * @return {?}
             */
            function (status) {
                console.log('statusChanges form was pending and now is', status);
                if (status === 'VALID') {
                    _this.save();
                }
            }));
        }
        else {
            this.showErrorMessage();
        }
    };
    /**
     * @return {?}
     */
    MainComponent.prototype.showSavedMessage = /**
     * @return {?}
     */
    function () {
        this.flashMessage = {
            message: 'Successfully saved.',
            level: FlashMessageLevel.SUCCESS
        };
    };
    /**
     * @return {?}
     */
    MainComponent.prototype.showErrorMessage = /**
     * @return {?}
     */
    function () {
        this.flashMessage = {
            message: 'Form is not valid.',
            level: FlashMessageLevel.ERROR
        };
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MainComponent.prototype.onSubmit = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        console.log('onsubmit', this.form.valid, this.form, this.form.value);
        this.save();
        e.preventDefault();
        return false;
    };
    /**
     * @param {?} section
     * @return {?}
     */
    MainComponent.prototype.sectionForm = /**
     * @param {?} section
     * @return {?}
     */
    function (section) {
        return this.form.get(section.name);
    };
    /**
     * @param {?} section
     * @return {?}
     */
    MainComponent.prototype.sectionPreferences = /**
     * @param {?} section
     * @return {?}
     */
    function (section) {
        return this.preferences[section.name];
    };
    /**
     * @param {?} group
     * @return {?}
     */
    MainComponent.prototype.groupInActiveSelection = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        if (this.activeSection &&
            this.activeSection.form &&
            this.activeSection.form.groups) {
            if (this.activeSection.form.groups.find((/**
             * @param {?} g
             * @return {?}
             */
            function (g) { return g.id === group.id; }))) {
                return true;
            }
        }
        return false;
    };
    MainComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'main',
                    template: "<form (ngSubmit)=\"onSubmit($event)\" [formGroup]=\"form\">\r\n  <div class=\"groups\">\r\n    <ng-container *ngFor=\"let section of options?.sections\">\r\n      <group\r\n        *ngFor=\"let group of section.form?.groups\"\r\n        [group]=\"group\"\r\n        [preferences]=\"sectionPreferences(section)\"\r\n        [form]=\"sectionForm(section)\"\r\n        [validationOn]=\"options.validationOn\"\r\n        [ngClass]=\"{\r\n          'visible-group': groupInActiveSelection(group)\r\n        }\"\r\n      ></group>\r\n    </ng-container>\r\n  </div>\r\n  <div class=\"bottom-bar\">\r\n    <flash-message [message]=\"flashMessage\"></flash-message>\r\n    <button type=\"submit\" class=\"btn btn-primary\">\r\n      Save\r\n    </button>\r\n  </div>\r\n</form>\r\n",
                    styles: [".groups{height:calc(100vh - 40px);padding:10px;overflow:auto}group{display:none}.visible-group{display:block}.bottom-bar{padding:5px;text-align:right;background:#dcdcdc;border-top:1px solid #cecece}.bottom-bar button{background:rgba(2,95,43,.72);border:none;padding:5px 10px;font-size:14px;color:#fff;outline:0;transition:width 2s;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica,sans-serif}.bottom-bar button:hover{background:#000;border:none}"]
                }] }
    ];
    /** @nocollapse */
    MainComponent.ctorParameters = function () { return [
        { type: ElectronService }
    ]; };
    MainComponent.propDecorators = {
        activeSection: [{ type: Input }],
        preferences: [{ type: Input }],
        options: [{ type: Input }],
        defaults: [{ type: Input }]
    };
    return MainComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ElectronNgPreferencesModule = /** @class */ (function () {
    function ElectronNgPreferencesModule() {
        library.add(fas);
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
    ElectronNgPreferencesModule.ctorParameters = function () { return []; };
    return ElectronNgPreferencesModule;
}());

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