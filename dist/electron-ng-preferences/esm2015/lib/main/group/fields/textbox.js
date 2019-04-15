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
if (false) {
    /** @type {?} */
    TextBoxComponent.prototype.field;
    /** @type {?} */
    TextBoxComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGJveC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VsZWN0cm9uLW5nLXByZWZlcmVuY2VzLyIsInNvdXJjZXMiOlsibGliL21haW4vZ3JvdXAvZmllbGRzL3RleHRib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWtDM0MsTUFBTSxPQUFPLGdCQUFnQjtJQWtCM0I7UUFqQlMsVUFBSyxHQUFRLEVBQUUsQ0FBQztJQWlCVixDQUFDOzs7O0lBZmhCLElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7WUFoREYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQlQ7YUFDRjs7Ozs7b0JBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4saUNBQXlCOztJQUN6QixnQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3RleHRib3gnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGQgZmllbGQtdGV4dFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1sYWJlbFwiPnt7IGZpZWxkLmxhYmVsIH19PC9kaXY+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBbYXR0ci50eXBlXT1cImZpZWxkLnR5cGVcIlxyXG4gICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgW2lkXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgW25hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgW3JlYWRvbmx5XT1cImZpZWxkLnJlYWRvbmx5XCJcclxuICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ2ZpZWxkLXJlYWRvbmx5JzogZmllbGQucmVhZG9ubHkgfVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIiAqbmdJZj1cImNvbnRyb2wuZXJyb3JzPy5yZXF1aXJlZFwiXHJcbiAgICAgICAgICA+UGxlYXNlIGZpbGwgb3V0IHRoaXMgZmllbGQuPC9zcGFuXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwid2FpdGluZy1tZXNzYWdlXCIgKm5nSWY9XCJjb250cm9sLnN0YXR1cyA9PT0gJ1BFTkRJTkcnXCI+XHJcbiAgICAgICAgICBWYWxpZGF0aW5nLi4uXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIlxyXG4gICAgICAgICAgKm5nSWY9XCJjb250cm9sLmVycm9ycz8uZHluYW1pY0Vycm9yICYmIGZpZWxkLmVycm9yTWVzc2FnZVwiXHJcbiAgICAgICAgICA+e3sgZmllbGQuZXJyb3JNZXNzYWdlIH19PC9zcGFuXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscFwiICpuZ0lmPVwiZmllbGQuaGVscFwiPnt7IGZpZWxkLmhlbHAgfX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGV4dEJveENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZmllbGQ6IGFueSA9IHt9O1xyXG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcclxuICBnZXQgaXNWYWxpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWxpZDtcclxuICB9XHJcbiAgZ2V0IGlzRGlydHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0uZGlydHk7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0udmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgY29udHJvbCgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iXX0=