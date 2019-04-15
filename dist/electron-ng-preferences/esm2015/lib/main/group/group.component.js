/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ValidationService } from './../../services/validation.service';
import { ElectronService } from './../../services/electron.service';
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { dynamicValidatorFn, dynamicAsyncValidatorFn } from './validators/dynamic.validator';
export class GroupComponent {
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
        // const validatorOptions: any = {};
        // if (this.validationOn) {
        //   validatorOptions.updateOn = this.validationOn;
        // }
        console.log('group.component', this.group);
        if (this.group && this.group.fields) {
            /** @type {?} */
            const fieldsCtrls = {};
            for (const f of this.group.fields) {
                if (f.type === 'message') {
                    // do nothing
                    return;
                }
                else if (f.type !== 'checkbox') {
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
                    fieldsCtrls[f.name] = new FormControl(this.preferences[f.name] || '', validators, asyncValidators);
                }
                else {
                    /** @type {?} */
                    const opts = {};
                    for (const opt of f.options) {
                        opts[opt.label] = new FormControl(opt.value);
                    }
                    /** @type {?} */
                    const formGroup = new FormGroup(opts);
                    if (this.preferences[f.name]) {
                        formGroup.setValue(this.preferences[f.name]);
                    }
                    fieldsCtrls[f.name] = formGroup;
                }
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
                styles: ["::ng-deep .group-label{font-size:16px;font-weight:700;text-transform:uppercase;border-bottom:1px dashed #000;margin-bottom:10px}::ng-deep .field{margin-bottom:20px}::ng-deep .field:last-child{margin-bottom:0}::ng-deep .field .field-label{border-bottom:1px dashed #ccc;margin-bottom:10px}::ng-deep .field .help{display:block;padding-top:5px;padding-bottom:5px;font-size:12px}::ng-deep .field .btn{display:inline-block;background-color:#d9dadb;color:#000;padding:5px;border-radius:0;margin-top:5px;border:1px solid rgba(0,0,0,.25)}::ng-deep .field .btn:hover{cursor:pointer;background-color:#a7a8a8}::ng-deep .field-text input{width:100%;font-size:14px;padding:4px}::ng-deep .field-dropdown select{width:100%;font-size:14px;padding:4px}::ng-deep .field-button .messsage{display:block;padding-top:5px;padding-bottom:5px;font-size:12px}::ng-deep .field-message .field-heading{border-bottom:1px dashed #ccc;margin-bottom:10px}::ng-deep .error-message{display:block;padding-top:5px;padding-bottom:5px;font-size:12px;color:#8c0707}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMvIiwic291cmNlcyI6WyJsaWIvbWFpbi9ncm91cC9ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVwRSxPQUFPLEVBQUUsU0FBUyxFQUFnQyxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0gsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUNMLGtCQUFrQixFQUNsQix1QkFBdUIsRUFDeEIsTUFBTSxnQ0FBZ0MsQ0FBQztBQVN4QyxNQUFNLE9BQU8sY0FBYzs7Ozs7O0lBc0J6QixZQUNVLGVBQWdDLEVBQ2hDLGlCQUFvQyxFQUNwQyxLQUF3QjtRQUZ4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUVoQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQVZELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDM0IsQ0FBQzs7OztJQVVELFFBQVE7UUFDTixvQ0FBb0M7UUFDcEMsMkJBQTJCO1FBQzNCLG1EQUFtRDtRQUNuRCxJQUFJO1FBRUosT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFOztr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Q0FBd0I7Ozs7O0lBT3RCLHlDQUF3Qzs7Ozs7SUFDeEMsMkNBQTRDOzs7OztJQUM1QywrQkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEVsZWN0cm9uU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvZWxlY3Ryb24uc2VydmljZSc7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4vLi4vLi4vdHlwZXMvcHJlZmVyZW5jZS50eXBlcyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBkeW5hbWljVmFsaWRhdG9yRm4sXG4gIGR5bmFtaWNBc3luY1ZhbGlkYXRvckZuXG59IGZyb20gJy4vdmFsaWRhdG9ycy9keW5hbWljLnZhbGlkYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ncm91cC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGdyb3VwOiBHcm91cDtcblxuICBASW5wdXQoKVxuICBwcmVmZXJlbmNlczogYW55O1xuXG4gIEBJbnB1dCgpXG4gIGZvcm06IEZvcm1Hcm91cDtcblxuICBASW5wdXQoKVxuICB2YWxpZGF0aW9uT246IHN0cmluZztcblxuICAvLyBAT3V0cHV0KClcbiAgLy8gZm9ybUNoYW5nZTogRXZlbnRFbWl0dGVyPEZvcm1Hcm91cD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1Hcm91cD4oKTtcblxuICBpbnRlcm5hbEZvcm06IEZvcm1Hcm91cDtcblxuICBnZXQgZmllbGRzKCkge1xuICAgIHJldHVybiB0aGlzLmdyb3VwLmZpZWxkcztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlY3Ryb25TZXJ2aWNlOiBFbGVjdHJvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSB2YWxpZGF0aW9uU2VydmljZTogVmFsaWRhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjb25zdCB2YWxpZGF0b3JPcHRpb25zOiBhbnkgPSB7fTtcbiAgICAvLyBpZiAodGhpcy52YWxpZGF0aW9uT24pIHtcbiAgICAvLyAgIHZhbGlkYXRvck9wdGlvbnMudXBkYXRlT24gPSB0aGlzLnZhbGlkYXRpb25PbjtcbiAgICAvLyB9XG5cbiAgICBjb25zb2xlLmxvZygnZ3JvdXAuY29tcG9uZW50JywgdGhpcy5ncm91cCk7XG4gICAgaWYgKHRoaXMuZ3JvdXAgJiYgdGhpcy5ncm91cC5maWVsZHMpIHtcbiAgICAgIGNvbnN0IGZpZWxkc0N0cmxzID0ge307XG4gICAgICBmb3IgKGNvbnN0IGYgb2YgdGhpcy5ncm91cC5maWVsZHMpIHtcbiAgICAgICAgaWYgKGYudHlwZSA9PT0gJ21lc3NhZ2UnKSB7XG4gICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChmLnR5cGUgIT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICBjb25zdCB2YWxpZGF0b3JzID0gW107XG4gICAgICAgICAgY29uc3QgYXN5bmNWYWxpZGF0b3JzID0gW107XG4gICAgICAgICAgaWYgKGYucmVxdWlyZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGYudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0TGV0dGVyID0gZi52YWxpZGF0b3Iuc3Vic3RyKC0xKTtcbiAgICAgICAgICAgIGlmIChsYXN0TGV0dGVyID09PSAnJCcpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkYXRvciBpcyBvYnNlcnZhYmxlJywgZi52YWxpZGF0b3IpO1xuICAgICAgICAgICAgICBhc3luY1ZhbGlkYXRvcnMucHVzaChcbiAgICAgICAgICAgICAgICBkeW5hbWljQXN5bmNWYWxpZGF0b3JGbih0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLCB0aGlzLmNkUmVmLCBmLnZhbGlkYXRvcilcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWxpZGF0b3IgaXMgbm9ybWFsJywgZi52YWxpZGF0b3IpO1xuICAgICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goXG4gICAgICAgICAgICAgICAgZHluYW1pY1ZhbGlkYXRvckZuKHRoaXMuZWxlY3Ryb25TZXJ2aWNlLCB0aGlzLmNkUmVmLCBmLnZhbGlkYXRvcilcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaWVsZHNDdHJsc1tmLm5hbWVdID0gbmV3IEZvcm1Db250cm9sKFxuICAgICAgICAgICAgdGhpcy5wcmVmZXJlbmNlc1tmLm5hbWVdIHx8ICcnLFxuICAgICAgICAgICAgdmFsaWRhdG9ycyxcbiAgICAgICAgICAgIGFzeW5jVmFsaWRhdG9yc1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgb3B0cyA9IHt9O1xuICAgICAgICAgIGZvciAoY29uc3Qgb3B0IG9mIGYub3B0aW9ucykge1xuICAgICAgICAgICAgb3B0c1tvcHQubGFiZWxdID0gbmV3IEZvcm1Db250cm9sKG9wdC52YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAob3B0cyk7XG4gICAgICAgICAgaWYgKHRoaXMucHJlZmVyZW5jZXNbZi5uYW1lXSkge1xuICAgICAgICAgICAgZm9ybUdyb3VwLnNldFZhbHVlKHRoaXMucHJlZmVyZW5jZXNbZi5uYW1lXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZpZWxkc0N0cmxzW2YubmFtZV0gPSBmb3JtR3JvdXA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvcm0uYWRkQ29udHJvbChmLm5hbWUsIGZpZWxkc0N0cmxzW2YubmFtZV0pO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGlzLmludGVybmFsRm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuICAgICAgLy8gdGhpcy5mb3JtQ2hhbmdlLmVtaXQodGhpcy5mb3JtKTtcbiAgICB9XG5cbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=