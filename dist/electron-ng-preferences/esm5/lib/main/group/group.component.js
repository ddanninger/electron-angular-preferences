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
        // const validatorOptions: any = {};
        // if (this.validationOn) {
        //   validatorOptions.updateOn = this.validationOn;
        // }
        var e_1, _a, e_2, _b;
        console.log('group.component', this.group);
        if (this.group && this.group.fields) {
            /** @type {?} */
            var fieldsCtrls = {};
            try {
                for (var _c = tslib_1.__values(this.group.fields), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var f = _d.value;
                    if (f.type === 'message') {
                        // do nothing
                        return;
                    }
                    else if (f.type !== 'checkbox') {
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
                                asyncValidators.push(dynamicAsyncValidatorFn(this.validationService, this.cdRef, f.validator));
                            }
                            else {
                                console.log('validator is normal', f.validator);
                                validators.push(dynamicValidatorFn(this.electronService, this.cdRef, f.validator));
                            }
                        }
                        fieldsCtrls[f.name] = new FormControl(this.preferences[f.name] || '', validators, asyncValidators);
                    }
                    else {
                        /** @type {?} */
                        var opts = {};
                        try {
                            for (var _e = tslib_1.__values(f.options), _f = _e.next(); !_f.done; _f = _e.next()) {
                                var opt = _f.value;
                                opts[opt.label] = new FormControl(opt.value);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        /** @type {?} */
                        var formGroup = new FormGroup(opts);
                        if (this.preferences[f.name]) {
                            formGroup.setValue(this.preferences[f.name]);
                        }
                        fieldsCtrls[f.name] = formGroup;
                    }
                    this.form.addControl(f.name, fieldsCtrls[f.name]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
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
                    styles: ["::ng-deep .group-label{font-size:16px;font-weight:700;text-transform:uppercase;border-bottom:1px dashed #000;margin-bottom:10px}::ng-deep .field{margin-bottom:20px}::ng-deep .field:last-child{margin-bottom:0}::ng-deep .field .field-label{border-bottom:1px dashed #ccc;margin-bottom:10px}::ng-deep .field .help{display:block;padding-top:5px;padding-bottom:5px;font-size:12px}::ng-deep .field .btn{display:inline-block;background-color:#d9dadb;color:#000;padding:5px;border-radius:0;margin-top:5px;border:1px solid rgba(0,0,0,.25)}::ng-deep .field .btn:hover{cursor:pointer;background-color:#a7a8a8}::ng-deep .field-text input{width:100%;font-size:14px;padding:4px}::ng-deep .field-dropdown select{width:100%;font-size:14px;padding:4px}::ng-deep .field-button .messsage{display:block;padding-top:5px;padding-bottom:5px;font-size:12px}::ng-deep .field-message .field-heading{border-bottom:1px dashed #ccc;margin-bottom:10px}::ng-deep .error-message{display:block;padding-top:5px;padding-bottom:5px;font-size:12px;color:#8c0707}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMvIiwic291cmNlcyI6WyJsaWIvbWFpbi9ncm91cC9ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFcEUsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsS0FBSyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNILE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsdUJBQXVCLEVBQ3hCLE1BQU0sZ0NBQWdDLENBQUM7QUFFeEM7SUE2QkUsd0JBQ1UsZUFBZ0MsRUFDaEMsaUJBQW9DLEVBQ3BDLEtBQXdCO1FBRnhCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBRWhDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBVkQsc0JBQUksa0NBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7Ozs7SUFVRCxpQ0FBUTs7O0lBQVI7UUFDRSxvQ0FBb0M7UUFDcEMsMkJBQTJCO1FBQzNCLG1EQUFtRDtRQUNuRCxJQUFJOztRQUVKLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFB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Szs4QkFHTCxLQUFLO3VCQUdMLEtBQUs7K0JBR0wsS0FBSzs7SUFnRlIscUJBQUM7Q0FBQSxBQWpHRCxJQWlHQztTQTFGWSxjQUFjOzs7SUFDekIsK0JBQ2E7O0lBRWIscUNBQ2lCOztJQUVqQiw4QkFDZ0I7O0lBRWhCLHNDQUNxQjs7SUFLckIsc0NBQXdCOzs7OztJQU90Qix5Q0FBd0M7Ozs7O0lBQ3hDLDJDQUE0Qzs7Ozs7SUFDNUMsK0JBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBFbGVjdHJvblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL2VsZWN0cm9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLy4uLy4uL3R5cGVzL3ByZWZlcmVuY2UudHlwZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgZHluYW1pY1ZhbGlkYXRvckZuLFxuICBkeW5hbWljQXN5bmNWYWxpZGF0b3JGblxufSBmcm9tICcuL3ZhbGlkYXRvcnMvZHluYW1pYy52YWxpZGF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2dyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ3JvdXAuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBncm91cDogR3JvdXA7XG5cbiAgQElucHV0KClcbiAgcHJlZmVyZW5jZXM6IGFueTtcblxuICBASW5wdXQoKVxuICBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgQElucHV0KClcbiAgdmFsaWRhdGlvbk9uOiBzdHJpbmc7XG5cbiAgLy8gQE91dHB1dCgpXG4gIC8vIGZvcm1DaGFuZ2U6IEV2ZW50RW1pdHRlcjxGb3JtR3JvdXA+ID0gbmV3IEV2ZW50RW1pdHRlcjxGb3JtR3JvdXA+KCk7XG5cbiAgaW50ZXJuYWxGb3JtOiBGb3JtR3JvdXA7XG5cbiAgZ2V0IGZpZWxkcygpIHtcbiAgICByZXR1cm4gdGhpcy5ncm91cC5maWVsZHM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZWN0cm9uU2VydmljZTogRWxlY3Ryb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgdmFsaWRhdGlvblNlcnZpY2U6IFZhbGlkYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIGNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc3QgdmFsaWRhdG9yT3B0aW9uczogYW55ID0ge307XG4gICAgLy8gaWYgKHRoaXMudmFsaWRhdGlvbk9uKSB7XG4gICAgLy8gICB2YWxpZGF0b3JPcHRpb25zLnVwZGF0ZU9uID0gdGhpcy52YWxpZGF0aW9uT247XG4gICAgLy8gfVxuXG4gICAgY29uc29sZS5sb2coJ2dyb3VwLmNvbXBvbmVudCcsIHRoaXMuZ3JvdXApO1xuICAgIGlmICh0aGlzLmdyb3VwICYmIHRoaXMuZ3JvdXAuZmllbGRzKSB7XG4gICAgICBjb25zdCBmaWVsZHNDdHJscyA9IHt9O1xuICAgICAgZm9yIChjb25zdCBmIG9mIHRoaXMuZ3JvdXAuZmllbGRzKSB7XG4gICAgICAgIGlmIChmLnR5cGUgPT09ICdtZXNzYWdlJykge1xuICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoZi50eXBlICE9PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgY29uc3QgdmFsaWRhdG9ycyA9IFtdO1xuICAgICAgICAgIGNvbnN0IGFzeW5jVmFsaWRhdG9ycyA9IFtdO1xuICAgICAgICAgIGlmIChmLnJlcXVpcmVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmLnZhbGlkYXRvcikge1xuICAgICAgICAgICAgY29uc3QgbGFzdExldHRlciA9IGYudmFsaWRhdG9yLnN1YnN0cigtMSk7XG4gICAgICAgICAgICBpZiAobGFzdExldHRlciA9PT0gJyQnKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWxpZGF0b3IgaXMgb2JzZXJ2YWJsZScsIGYudmFsaWRhdG9yKTtcbiAgICAgICAgICAgICAgYXN5bmNWYWxpZGF0b3JzLnB1c2goXG4gICAgICAgICAgICAgICAgZHluYW1pY0FzeW5jVmFsaWRhdG9yRm4odGhpcy52YWxpZGF0aW9uU2VydmljZSwgdGhpcy5jZFJlZiwgZi52YWxpZGF0b3IpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmFsaWRhdG9yIGlzIG5vcm1hbCcsIGYudmFsaWRhdG9yKTtcbiAgICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFxuICAgICAgICAgICAgICAgIGR5bmFtaWNWYWxpZGF0b3JGbih0aGlzLmVsZWN0cm9uU2VydmljZSwgdGhpcy5jZFJlZiwgZi52YWxpZGF0b3IpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmllbGRzQ3RybHNbZi5uYW1lXSA9IG5ldyBGb3JtQ29udHJvbChcbiAgICAgICAgICAgIHRoaXMucHJlZmVyZW5jZXNbZi5uYW1lXSB8fCAnJyxcbiAgICAgICAgICAgIHZhbGlkYXRvcnMsXG4gICAgICAgICAgICBhc3luY1ZhbGlkYXRvcnNcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG9wdHMgPSB7fTtcbiAgICAgICAgICBmb3IgKGNvbnN0IG9wdCBvZiBmLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdHNbb3B0LmxhYmVsXSA9IG5ldyBGb3JtQ29udHJvbChvcHQudmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBmb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKG9wdHMpO1xuICAgICAgICAgIGlmICh0aGlzLnByZWZlcmVuY2VzW2YubmFtZV0pIHtcbiAgICAgICAgICAgIGZvcm1Hcm91cC5zZXRWYWx1ZSh0aGlzLnByZWZlcmVuY2VzW2YubmFtZV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmaWVsZHNDdHJsc1tmLm5hbWVdID0gZm9ybUdyb3VwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb3JtLmFkZENvbnRyb2woZi5uYW1lLCBmaWVsZHNDdHJsc1tmLm5hbWVdKTtcbiAgICAgIH1cblxuICAgICAgLy8gdGhpcy5pbnRlcm5hbEZvcm0gPSBuZXcgRm9ybUdyb3VwKGZpZWxkc0N0cmxzKTtcbiAgICAgIC8vIHRoaXMuZm9ybUNoYW5nZS5lbWl0KHRoaXMuZm9ybSk7XG4gICAgfVxuXG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19