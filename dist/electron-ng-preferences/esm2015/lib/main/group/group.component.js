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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMvIiwic291cmNlcyI6WyJsaWIvbWFpbi9ncm91cC9ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVwRSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsdUJBQXVCLEVBQ3hCLE1BQU0sZ0NBQWdDLENBQUM7QUFTeEMsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQW1CekIsWUFDVSxlQUFnQyxFQUNoQyxpQkFBb0MsRUFDcEMsS0FBd0I7UUFGeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFFaEMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFWRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFVRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFOztrQkFDN0IsV0FBVyxHQUFHLEVBQUU7WUFDdEIsS0FBSyxNQUFNLENBQUMsSUFBSSxJ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ZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRWxlY3Ryb25TZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9lbGVjdHJvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi8uLi8uLi90eXBlcy9wcmVmZXJlbmNlLnR5cGVzJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIGR5bmFtaWNWYWxpZGF0b3JGbixcbiAgZHluYW1pY0FzeW5jVmFsaWRhdG9yRm5cbn0gZnJvbSAnLi92YWxpZGF0b3JzL2R5bmFtaWMudmFsaWRhdG9yJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdncm91cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dyb3VwLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgZ3JvdXA6IEdyb3VwO1xuXG4gIEBJbnB1dCgpXG4gIHByZWZlcmVuY2VzOiBhbnk7XG5cbiAgQElucHV0KClcbiAgZm9ybTogRm9ybUdyb3VwO1xuXG4gIEBJbnB1dCgpXG4gIHZhbGlkYXRpb25Pbjogc3RyaW5nO1xuXG4gIGludGVybmFsRm9ybTogRm9ybUdyb3VwO1xuXG4gIGdldCBmaWVsZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ3JvdXAuZmllbGRzO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVjdHJvblNlcnZpY2U6IEVsZWN0cm9uU2VydmljZSxcbiAgICBwcml2YXRlIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBjZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKCdncm91cC5jb21wb25lbnQnLCB0aGlzLmdyb3VwKTtcbiAgICBpZiAodGhpcy5ncm91cCAmJiB0aGlzLmdyb3VwLmZpZWxkcykge1xuICAgICAgY29uc3QgZmllbGRzQ3RybHMgPSB7fTtcbiAgICAgIGZvciAoY29uc3QgZiBvZiB0aGlzLmdyb3VwLmZpZWxkcykge1xuICAgICAgICBpZiAoZi50eXBlID09PSAnbWVzc2FnZScpIHtcbiAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGlmIChmLnR5cGUgIT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICBjb25zdCB2YWxpZGF0b3JzID0gW107XG4gICAgICAgICAgY29uc3QgYXN5bmNWYWxpZGF0b3JzID0gW107XG4gICAgICAgICAgaWYgKGYucmVxdWlyZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGYudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0TGV0dGVyID0gZi52YWxpZGF0b3Iuc3Vic3RyKC0xKTtcbiAgICAgICAgICAgIGlmIChsYXN0TGV0dGVyID09PSAnJCcpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkYXRvciBpcyBvYnNlcnZhYmxlJywgZi52YWxpZGF0b3IpO1xuICAgICAgICAgICAgICBhc3luY1ZhbGlkYXRvcnMucHVzaChcbiAgICAgICAgICAgICAgICBkeW5hbWljQXN5bmNWYWxpZGF0b3JGbihcbiAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICB0aGlzLmNkUmVmLFxuICAgICAgICAgICAgICAgICAgZi52YWxpZGF0b3JcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmFsaWRhdG9yIGlzIG5vcm1hbCcsIGYudmFsaWRhdG9yKTtcbiAgICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFxuICAgICAgICAgICAgICAgIGR5bmFtaWNWYWxpZGF0b3JGbihcbiAgICAgICAgICAgICAgICAgIHRoaXMuZWxlY3Ryb25TZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgdGhpcy5jZFJlZixcbiAgICAgICAgICAgICAgICAgIGYudmFsaWRhdG9yXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChmLnR5cGUgPT09ICdjaGVja2JveCcgJiYgZi5vcHRpb25zICYmIHRoaXMucHJlZmVyZW5jZXNbZi5uYW1lXSkge1xuICAgICAgICAgICAgZi5vcHRpb25zLm1hcChcbiAgICAgICAgICAgICAgbyA9PiAoby5jaGVja2VkID0gdGhpcy5wcmVmZXJlbmNlc1tmLm5hbWVdLmluY2x1ZGVzKG8udmFsdWUpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZi5maXhlZFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnByZWZlcmVuY2VzW2YubmFtZV0gPSBmLmZpeGVkVmFsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmllbGRzQ3RybHNbZi5uYW1lXSA9IG5ldyBGb3JtQ29udHJvbChcbiAgICAgICAgICAgIHRoaXMucHJlZmVyZW5jZXNbZi5uYW1lXSB8fCAnJyxcbiAgICAgICAgICAgIHZhbGlkYXRvcnMsXG4gICAgICAgICAgICBhc3luY1ZhbGlkYXRvcnNcbiAgICAgICAgICApO1xuICAgICAgICB9IC8qIGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG9wdHMgPSB7fTtcbiAgICAgICAgICBmb3IgKGNvbnN0IG9wdCBvZiBmLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdHNbb3B0LmxhYmVsXSA9IG5ldyBGb3JtQ29udHJvbChvcHQudmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBmb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKG9wdHMpO1xuICAgICAgICAgIGlmICh0aGlzLnByZWZlcmVuY2VzW2YubmFtZV0pIHtcbiAgICAgICAgICAgIGZvcm1Hcm91cC5zZXRWYWx1ZSh0aGlzLnByZWZlcmVuY2VzW2YubmFtZV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmaWVsZHNDdHJsc1tmLm5hbWVdID0gZm9ybUdyb3VwO1xuICAgICAgICB9Ki9cblxuICAgICAgICB0aGlzLmZvcm0uYWRkQ29udHJvbChmLm5hbWUsIGZpZWxkc0N0cmxzW2YubmFtZV0pO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGlzLmludGVybmFsRm9ybSA9IG5ldyBGb3JtR3JvdXAoZmllbGRzQ3RybHMpO1xuICAgICAgLy8gdGhpcy5mb3JtQ2hhbmdlLmVtaXQodGhpcy5mb3JtKTtcbiAgICB9XG5cbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=