/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ValidationService } from './../../services/validation.service';
import { ElectronService } from './../../services/electron.service';
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { dynamicValidatorFn, dynamicAsyncValidatorFn } from './validators/dynamic.validator';
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
                for (var _b = tslib_1.__values(this.group.fields), _c = _b.next(); !_c.done; _c = _b.next()) {
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
export { GroupComponent };
if (false) {
    /** @type {?} */
    GroupComponent.prototype.group;
    /** @type {?} */
    GroupComponent.prototype.preferences;
    /** @type {?} */
    GroupComponent.prototype.form;
    /** @type {?} */
    GroupComponent.prototype.validationOn;
    /** @type {?} */
    GroupComponent.prototype.internalForm;
    /**
     * @type {?}
     * @private
     */
    GroupComponent.prototype.electronService;
    /**
     * @type {?}
     * @private
     */
    GroupComponent.prototype.validationService;
    /**
     * @type {?}
     * @private
     */
    GroupComponent.prototype.cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMvIiwic291cmNlcyI6WyJsaWIvbWFpbi9ncm91cC9ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFcEUsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLHVCQUF1QixFQUN4QixNQUFNLGdDQUFnQyxDQUFDO0FBRXhDO0lBMEJFLHdCQUNVLGVBQWdDLEVBQ2hDLGlCQUFvQyxFQUNwQyxLQUF3QjtRQUZ4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUVoQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQVZELHNCQUFJLGtDQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzNCLENBQUM7OztPQUFBOzs7O0lBVUQsaUNBQVE7OztJQUFSO1FBQUEsaUJBeUVDOztRQXhFQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7O2dCQUM3QixXQUFXLEdBQUcsRUFBRTtvQ0FDWCxDQUFD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LHNDQUNxQjs7SUFFckIsc0NBQXdCOzs7OztJQU90Qix5Q0FBd0M7Ozs7O0lBQ3hDLDJDQUE0Qzs7Ozs7SUFDNUMsK0JBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBFbGVjdHJvblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL2VsZWN0cm9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLy4uLy4uL3R5cGVzL3ByZWZlcmVuY2UudHlwZXMnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgZHluYW1pY1ZhbGlkYXRvckZuLFxuICBkeW5hbWljQXN5bmNWYWxpZGF0b3JGblxufSBmcm9tICcuL3ZhbGlkYXRvcnMvZHluYW1pYy52YWxpZGF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2dyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ3JvdXAuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBncm91cDogR3JvdXA7XG5cbiAgQElucHV0KClcbiAgcHJlZmVyZW5jZXM6IGFueTtcblxuICBASW5wdXQoKVxuICBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgQElucHV0KClcbiAgdmFsaWRhdGlvbk9uOiBzdHJpbmc7XG5cbiAgaW50ZXJuYWxGb3JtOiBGb3JtR3JvdXA7XG5cbiAgZ2V0IGZpZWxkcygpIHtcbiAgICByZXR1cm4gdGhpcy5ncm91cC5maWVsZHM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZWN0cm9uU2VydmljZTogRWxlY3Ryb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgdmFsaWRhdGlvblNlcnZpY2U6IFZhbGlkYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIGNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2coJ2dyb3VwLmNvbXBvbmVudCcsIHRoaXMuZ3JvdXApO1xuICAgIGlmICh0aGlzLmdyb3VwICYmIHRoaXMuZ3JvdXAuZmllbGRzKSB7XG4gICAgICBjb25zdCBmaWVsZHNDdHJscyA9IHt9O1xuICAgICAgZm9yIChjb25zdCBmIG9mIHRoaXMuZ3JvdXAuZmllbGRzKSB7XG4gICAgICAgIGlmIChmLnR5cGUgPT09ICdtZXNzYWdlJykge1xuICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gaWYgKGYudHlwZSAhPT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgIGNvbnN0IHZhbGlkYXRvcnMgPSBbXTtcbiAgICAgICAgICBjb25zdCBhc3luY1ZhbGlkYXRvcnMgPSBbXTtcbiAgICAgICAgICBpZiAoZi5yZXF1aXJlZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZi52YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RMZXR0ZXIgPSBmLnZhbGlkYXRvci5zdWJzdHIoLTEpO1xuICAgICAgICAgICAgaWYgKGxhc3RMZXR0ZXIgPT09ICckJykge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmFsaWRhdG9yIGlzIG9ic2VydmFibGUnLCBmLnZhbGlkYXRvcik7XG4gICAgICAgICAgICAgIGFzeW5jVmFsaWRhdG9ycy5wdXNoKFxuICAgICAgICAgICAgICAgIGR5bmFtaWNBc3luY1ZhbGlkYXRvckZuKFxuICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2RSZWYsXG4gICAgICAgICAgICAgICAgICBmLnZhbGlkYXRvclxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWxpZGF0b3IgaXMgbm9ybWFsJywgZi52YWxpZGF0b3IpO1xuICAgICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goXG4gICAgICAgICAgICAgICAgZHluYW1pY1ZhbGlkYXRvckZuKFxuICAgICAgICAgICAgICAgICAgdGhpcy5lbGVjdHJvblNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICB0aGlzLmNkUmVmLFxuICAgICAgICAgICAgICAgICAgZi52YWxpZGF0b3JcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGYudHlwZSA9PT0gJ2NoZWNrYm94JyAmJiBmLm9wdGlvbnMgJiYgdGhpcy5wcmVmZXJlbmNlc1tmLm5hbWVdKSB7XG4gICAgICAgICAgICBmLm9wdGlvbnMubWFwKFxuICAgICAgICAgICAgICBvID0+IChvLmNoZWNrZWQgPSB0aGlzLnByZWZlcmVuY2VzW2YubmFtZV0uaW5jbHVkZXMoby52YWx1ZSkpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChmLmZpeGVkVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJlZmVyZW5jZXNbZi5uYW1lXSA9IGYuZml4ZWRWYWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaWVsZHNDdHJsc1tmLm5hbWVdID0gbmV3IEZvcm1Db250cm9sKFxuICAgICAgICAgICAgdGhpcy5wcmVmZXJlbmNlc1tmLm5hbWVdIHx8ICcnLFxuICAgICAgICAgICAgdmFsaWRhdG9ycyxcbiAgICAgICAgICAgIGFzeW5jVmFsaWRhdG9yc1xuICAgICAgICAgICk7XG4gICAgICAgIH0gLyogZWxzZSB7XG4gICAgICAgICAgY29uc3Qgb3B0cyA9IHt9O1xuICAgICAgICAgIGZvciAoY29uc3Qgb3B0IG9mIGYub3B0aW9ucykge1xuICAgICAgICAgICAgb3B0c1tvcHQubGFiZWxdID0gbmV3IEZvcm1Db250cm9sKG9wdC52YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAob3B0cyk7XG4gICAgICAgICAgaWYgKHRoaXMucHJlZmVyZW5jZXNbZi5uYW1lXSkge1xuICAgICAgICAgICAgZm9ybUdyb3VwLnNldFZhbHVlKHRoaXMucHJlZmVyZW5jZXNbZi5uYW1lXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZpZWxkc0N0cmxzW2YubmFtZV0gPSBmb3JtR3JvdXA7XG4gICAgICAgIH0qL1xuXG4gICAgICAgIHRoaXMuZm9ybS5hZGRDb250cm9sKGYubmFtZSwgZmllbGRzQ3RybHNbZi5uYW1lXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHRoaXMuaW50ZXJuYWxGb3JtID0gbmV3IEZvcm1Hcm91cChmaWVsZHNDdHJscyk7XG4gICAgICAvLyB0aGlzLmZvcm1DaGFuZ2UuZW1pdCh0aGlzLmZvcm0pO1xuICAgIH1cblxuICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==