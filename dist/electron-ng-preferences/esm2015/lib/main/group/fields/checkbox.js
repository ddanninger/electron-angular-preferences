/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class CheckBoxComponent {
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
            [formControlName]="opt.label"
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
CheckBoxComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CheckBoxComponent.prototype.field;
    /** @type {?} */
    CheckBoxComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbGVjdHJvbi1uZy1wcmVmZXJlbmNlcy8iLCJzb3VyY2VzIjpbImxpYi9tYWluL2dyb3VwL2ZpZWxkcy9jaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBOEIzQyxNQUFNLE9BQU8saUJBQWlCO0lBNUI5QjtRQTZCVyxVQUFLLEdBQVEsRUFBRSxDQUFDO0lBZTNCLENBQUM7Ozs7SUFiQyxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7O1lBM0NGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1QlQ7YUFDRjs7O29CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLGtDQUF5Qjs7SUFDekIsaUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjaGVja2JveCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XHJcbiAgICAgIDxkaXYgW2Zvcm1Hcm91cE5hbWVdPVwiZmllbGQubmFtZVwiIGNsYXNzPVwiZmllbGQgZmllbGQtY2hlY2tib3hcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtbGFiZWxcIj57eyBmaWVsZC5sYWJlbCB9fTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveC1vcHRpb25cIiAqbmdGb3I9XCJsZXQgb3B0IG9mIGZpZWxkLm9wdGlvbnNcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICBpZD1cInt7IGZpZWxkLm5hbWUgfX1cIlxyXG4gICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cIm9wdC5sYWJlbFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxhYmVsPnt7IG9wdC5sYWJlbCB9fTwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci1tZXNzYWdlXCIgKm5nSWY9XCJjb250cm9sLmVycm9ycz8ucmVxdWlyZWRcIlxyXG4gICAgICAgICAgPlBsZWFzZSBmaWxsIG91dCB0aGlzIGZpZWxkLjwvc3BhblxyXG4gICAgICAgID48c3BhbiBjbGFzcz1cIndhaXRpbmctbWVzc2FnZVwiICpuZ0lmPVwiY29udHJvbC5zdGF0dXMgPT09ICdQRU5ESU5HJ1wiPlxyXG4gICAgICAgIFZhbGlkYXRpbmcuLi5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiICpuZ0lmPVwiY29udHJvbC5lcnJvcnM/LmR5bmFtaWNFcnJvciAmJiBmaWVsZC5lcnJvck1lc3NhZ2VcIj57e1xyXG4gICAgICAgICAgZmllbGQuZXJyb3JNZXNzYWdlXHJcbiAgICAgICAgfX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwXCIgKm5nSWY9XCJmaWVsZC5oZWxwXCI+e3sgZmllbGQuaGVscCB9fTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja0JveENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZmllbGQ6IGFueSA9IHt9O1xyXG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcclxuICBnZXQgaXNWYWxpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWxpZDtcclxuICB9XHJcbiAgZ2V0IGlzRGlydHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0uZGlydHk7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0udmFsdWU7XHJcbiAgfVxyXG4gIGdldCBjb250cm9sKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdO1xyXG4gIH1cclxufVxyXG4iXX0=