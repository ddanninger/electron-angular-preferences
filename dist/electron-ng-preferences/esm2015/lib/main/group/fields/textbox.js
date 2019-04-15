/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class TextBoxComponent {
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
if (false) {
    /** @type {?} */
    TextBoxComponent.prototype.field;
    /** @type {?} */
    TextBoxComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGJveC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VsZWN0cm9uLW5nLXByZWZlcmVuY2VzLyIsInNvdXJjZXMiOlsibGliL21haW4vZ3JvdXAvZmllbGRzL3RleHRib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWdDM0MsTUFBTSxPQUFPLGdCQUFnQjtJQWtCM0I7UUFqQlMsVUFBSyxHQUFRLEVBQUUsQ0FBQztJQWlCVixDQUFDOzs7O0lBZmhCLElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7WUE5Q0YsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJUO2FBQ0Y7Ozs7O29CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLGlDQUF5Qjs7SUFDekIsZ0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICd0ZXh0Ym94JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkIGZpZWxkLXRleHRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtbGFiZWxcIj57eyBmaWVsZC5sYWJlbCB9fTwvZGl2PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgW2F0dHIudHlwZV09XCJmaWVsZC50eXBlXCJcclxuICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgIFtpZF09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgIFtuYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiICpuZ0lmPVwiY29udHJvbC5lcnJvcnM/LnJlcXVpcmVkXCJcclxuICAgICAgICAgID5QbGVhc2UgZmlsbCBvdXQgdGhpcyBmaWVsZC48L3NwYW5cclxuICAgICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ3YWl0aW5nLW1lc3NhZ2VcIiAqbmdJZj1cImNvbnRyb2wuc3RhdHVzID09PSAnUEVORElORydcIj5cclxuICAgICAgICAgIFZhbGlkYXRpbmcuLi5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiXHJcbiAgICAgICAgICAqbmdJZj1cImNvbnRyb2wuZXJyb3JzPy5keW5hbWljRXJyb3IgJiYgZmllbGQuZXJyb3JNZXNzYWdlXCJcclxuICAgICAgICAgID57eyBmaWVsZC5lcnJvck1lc3NhZ2UgfX08L3NwYW5cclxuICAgICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwXCIgKm5nSWY9XCJmaWVsZC5oZWxwXCI+e3sgZmllbGQuaGVscCB9fTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXh0Qm94Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBmaWVsZDogYW55ID0ge307XHJcbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG4gIGdldCBpc1ZhbGlkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLnZhbGlkO1xyXG4gIH1cclxuICBnZXQgaXNEaXJ0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS5kaXJ0eTtcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBjb250cm9sKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiJdfQ==