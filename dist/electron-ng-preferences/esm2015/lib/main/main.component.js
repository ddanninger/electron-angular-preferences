/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
export class MainComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.fb = fb;
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
        console.log('main.component', this.preferences, this.options, this.defaults, this.activeSection);
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
        console.log('save', this.form, this.form.value);
        if (this.form.valid) {
            console.log('form is valid');
            /** @type {?} */
            const values = this.form.value;
            /*values.map(v => {
            return v;
          });*/
        }
        else if (this.form.pending) {
            this.form.statusChanges.subscribe((/**
             * @param {?} status
             * @return {?}
             */
            status => {
                console.log('statusChanges form was pending and now is', status);
            }));
        }
    }
    /**
     * @return {?}
     */
    onSubmit() {
        console.log('onsubmit', this.form.valid, this.form, this.form.value);
    }
}
MainComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'main',
                template: "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\r\n  <div class=\"groups\">\r\n    <group\r\n      *ngFor=\"let group of activeSection?.form?.groups\"\r\n      [group]=\"group\"\r\n      [preferences]=\"prefs\"\r\n      [form]=\"activeSectionForm\"\r\n      [validationOn]=\"options.validationOn\"\r\n    ></group>\r\n  </div>\r\n  <div class=\"bottom-bar\">\r\n    <span *ngIf=\"form.valid\">VALID</span>\r\n    <span *ngIf=\"form.invalid\">INVALID</span>\r\n    <span *ngIf=\"form.pending\">PENDING</span>\r\n    <button type=\"submit\" class=\"btn btn-primary\">\r\n      <!-- [disabled]=\"!form.valid\" -->\r\n      Save\r\n    </button>\r\n  </div>\r\n</form>\r\n",
                styles: [".groups{height:calc(100vh - 40px);padding:10px;overflow:auto}.bottom-bar{padding:5px;text-align:right;background:#dcdcdc;border-top:1px solid #cecece}.bottom-bar button{background:rgba(2,95,43,.72);border:none;padding:5px 10px;font-size:14px;color:#fff;transition:width 2s;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica,sans-serif}.bottom-bar button:hover{background:#000;border:none}"]
            }] }
];
/** @nocollapse */
MainComponent.ctorParameters = () => [
    { type: FormBuilder }
];
MainComponent.propDecorators = {
    activeSection: [{ type: Input }],
    preferences: [{ type: Input }],
    options: [{ type: Input }],
    defaults: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MainComponent.prototype.activeSection;
    /** @type {?} */
    MainComponent.prototype.preferences;
    /** @type {?} */
    MainComponent.prototype.options;
    /** @type {?} */
    MainComponent.prototype.defaults;
    /** @type {?} */
    MainComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    MainComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbGVjdHJvbi1uZy1wcmVmZXJlbmNlcy8iLCJzb3VyY2VzIjpbImxpYi9tYWluL21haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVF4RCxNQUFNLE9BQU8sYUFBYTs7OztJQW9CeEIsWUFBb0IsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7SUFBRyxDQUFDOzs7O0lBUnZDLElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUlELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUNULGdCQUFnQixFQUNoQixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FDbkIsQ0FBQzs7Y0FFSSxnQkFBZ0IsR0FBUSxFQUFFO1FBQ2hDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDN0IsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1NBQ3ZEOztjQUVLLFVBQVUsR0FBRyxFQUFFO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTtZQUNoQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNELENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7O2tCQUV2QixNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQzlCOztlQUVHO1NBQ0o7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7WUFBQyxNQUFNLENBQUMsRUFBRTtnQkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNuRSxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7O1lBcEVGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLDhxQkFBb0M7O2FBRXJDOzs7O1lBUG1CLFdBQVc7Ozs0QkFTNUIsS0FBSzswQkFFTCxLQUFLO3NCQUVMLEtBQUs7dUJBRUwsS0FBSzs7OztJQU5OLHNDQUN1Qjs7SUFDdkIsb0NBQ2lCOztJQUNqQixnQ0FDMkI7O0lBQzNCLGlDQUNjOztJQUVkLDZCQUFnQjs7Ozs7SUFVSiwyQkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcmVmZXJlbmNlT3B0aW9ucywgU2VjdGlvbiB9IGZyb20gJy4uL3R5cGVzL3ByZWZlcmVuY2UudHlwZXMnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdtYWluJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21haW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYWluLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGFjdGl2ZVNlY3Rpb246IFNlY3Rpb247XG4gIEBJbnB1dCgpXG4gIHByZWZlcmVuY2VzOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG9wdGlvbnM6IFByZWZlcmVuY2VPcHRpb25zO1xuICBASW5wdXQoKVxuICBkZWZhdWx0czogYW55O1xuXG4gIGZvcm06IEZvcm1Hcm91cDtcblxuICBnZXQgcHJlZnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlZmVyZW5jZXNbdGhpcy5hY3RpdmVTZWN0aW9uLm5hbWVdO1xuICB9XG5cbiAgZ2V0IGFjdGl2ZVNlY3Rpb25Gb3JtKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0uZ2V0KHRoaXMuYWN0aXZlU2VjdGlvbi5uYW1lKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgJ21haW4uY29tcG9uZW50JyxcbiAgICAgIHRoaXMucHJlZmVyZW5jZXMsXG4gICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICB0aGlzLmRlZmF1bHRzLFxuICAgICAgdGhpcy5hY3RpdmVTZWN0aW9uXG4gICAgKTtcblxuICAgIGNvbnN0IHZhbGlkYXRvck9wdGlvbnM6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLm9wdGlvbnMudmFsaWRhdGlvbk9uKSB7XG4gICAgICB2YWxpZGF0b3JPcHRpb25zLnVwZGF0ZU9uID0gdGhpcy5vcHRpb25zLnZhbGlkYXRpb25PbjtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JtR3JvdXBzID0ge307XG4gICAgdGhpcy5vcHRpb25zLnNlY3Rpb25zLmZvckVhY2gocyA9PiB7XG4gICAgICBmb3JtR3JvdXBzW3MubmFtZV0gPSBuZXcgRm9ybUdyb3VwKHt9LCB2YWxpZGF0b3JPcHRpb25zKTtcbiAgICB9KTtcbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZvcm1Hcm91cHMsIHZhbGlkYXRvck9wdGlvbnMpO1xuICAgIGNvbnNvbGUubG9nKCdtYWluLm9jbXBvbmVudCBmb3JtIGlzJywgdGhpcy5mb3JtLCB2YWxpZGF0b3JPcHRpb25zKTtcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgY29uc29sZS5sb2coJ3NhdmUnLCB0aGlzLmZvcm0sIHRoaXMuZm9ybS52YWx1ZSk7XG4gICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgY29uc29sZS5sb2coJ2Zvcm0gaXMgdmFsaWQnKTtcblxuICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5mb3JtLnZhbHVlO1xuICAgICAgLyp2YWx1ZXMubWFwKHYgPT4ge1xuICAgICAgcmV0dXJuIHY7XG4gICAgfSk7Ki9cbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybS5wZW5kaW5nKSB7XG4gICAgICB0aGlzLmZvcm0uc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoc3RhdHVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N0YXR1c0NoYW5nZXMgZm9ybSB3YXMgcGVuZGluZyBhbmQgbm93IGlzJywgc3RhdHVzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnNvbGUubG9nKCdvbnN1Ym1pdCcsIHRoaXMuZm9ybS52YWxpZCwgdGhpcy5mb3JtLCB0aGlzLmZvcm0udmFsdWUpO1xuICB9XG59XG4iXX0=