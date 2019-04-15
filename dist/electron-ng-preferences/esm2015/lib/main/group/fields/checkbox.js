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
if (false) {
    /** @type {?} */
    CheckBoxComponent.prototype.field;
    /** @type {?} */
    CheckBoxComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbGVjdHJvbi1uZy1wcmVmZXJlbmNlcy8iLCJzb3VyY2VzIjpbImxpYi9tYWluL2dyb3VwL2ZpZWxkcy9jaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBa0MzQyxNQUFNLE9BQU8saUJBQWlCO0lBaEM5QjtRQWlDVyxVQUFLLEdBQVEsRUFBRSxDQUFDO0lBNkIzQixDQUFDOzs7O0lBM0JDLElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxHQUFHO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsR0FBRztRQUM1QixHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxVQUFVO1FBQ3RCLE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFDLENBQUM7SUFDN0QsQ0FBQzs7O1lBN0RGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJUO2FBQ0Y7OztvQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixrQ0FBeUI7O0lBQ3pCLGlDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY2hlY2tib3gnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG4gICAgICA8ZGl2IFtmb3JtR3JvdXBOYW1lXT1cImZpZWxkLm5hbWVcIiBjbGFzcz1cImZpZWxkIGZpZWxkLWNoZWNrYm94XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWxhYmVsXCI+e3sgZmllbGQubGFiZWwgfX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3gtb3B0aW9uXCIgKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5vcHRpb25zXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgaWQ9XCJ7eyBmaWVsZC5uYW1lIH19XCJcclxuICAgICAgICAgICAgW2NoZWNrZWRdPVwib3B0LmNoZWNrZWRcIlxyXG4gICAgICAgICAgICBbdmFsdWVdPVwib3B0LnZhbHVlXCJcclxuICAgICAgICAgICAgKGNoYW5nZSk9XCJvbkNoZWNrbGlzdENoYW5nZSgkZXZlbnQudGFyZ2V0LmNoZWNrZWQsIG9wdClcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsYWJlbD57eyBvcHQubGFiZWwgfX08L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiICpuZ0lmPVwiY29udHJvbC5lcnJvcnM/LnJlcXVpcmVkXCJcclxuICAgICAgICAgID5QbGVhc2UgZmlsbCBvdXQgdGhpcyBmaWVsZC48L3NwYW5cclxuICAgICAgICA+PHNwYW4gY2xhc3M9XCJ3YWl0aW5nLW1lc3NhZ2VcIiAqbmdJZj1cImNvbnRyb2wuc3RhdHVzID09PSAnUEVORElORydcIj5cclxuICAgICAgICAgIFZhbGlkYXRpbmcuLi5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiXHJcbiAgICAgICAgICAqbmdJZj1cImNvbnRyb2wuZXJyb3JzPy5keW5hbWljRXJyb3IgJiYgZmllbGQuZXJyb3JNZXNzYWdlXCJcclxuICAgICAgICAgID57eyBmaWVsZC5lcnJvck1lc3NhZ2UgfX08L3NwYW5cclxuICAgICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwXCIgKm5nSWY9XCJmaWVsZC5oZWxwXCI+e3sgZmllbGQuaGVscCB9fTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja0JveENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZmllbGQ6IGFueSA9IHt9O1xyXG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcclxuICBnZXQgaXNWYWxpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWxpZDtcclxuICB9XHJcbiAgZ2V0IGlzRGlydHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0uZGlydHk7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0udmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUodmFsKSB7XHJcbiAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS5zZXRWYWx1ZSh2YWwpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbnRyb2woKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV07XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrbGlzdENoYW5nZShjaGVja2VkLCBvcHQpIHtcclxuICAgIG9wdC5jaGVja2VkID0gY2hlY2tlZDtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLmZsYXR0ZW5WYWx1ZXModGhpcy5maWVsZC5vcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGZsYXR0ZW5WYWx1ZXMoY2hlY2tib3hlcykge1xyXG4gICAgcmV0dXJuIGNoZWNrYm94ZXMuZmlsdGVyKGMgPT4gYy5jaGVja2VkKS5tYXAoYyA9PiBjLnZhbHVlKTtcclxuICB9XHJcbn1cclxuIl19