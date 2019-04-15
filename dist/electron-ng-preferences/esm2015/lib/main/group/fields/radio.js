/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class RadioComponent {
    constructor() {
        this.field = {};
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
RadioComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'radio',
                template: `
    <div [formGroup]="form">
      <div class="field field-radio">
        <div class="field-label">{{ field.label }}</div>
        <div class="radio-option" *ngFor="let opt of field.options">
          <input
            type="radio"
            id="{{ field.name }}"
            [value]="opt.value"
            [formControlName]="field.name"
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
RadioComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RadioComponent.prototype.field;
    /** @type {?} */
    RadioComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbGVjdHJvbi1uZy1wcmVmZXJlbmNlcy8iLCJzb3VyY2VzIjpbImxpYi9tYWluL2dyb3VwL2ZpZWxkcy9yYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBK0IzQyxNQUFNLE9BQU8sY0FBYztJQTdCM0I7UUE4QlcsVUFBSyxHQUFRLEVBQUUsQ0FBQztJQVUzQixDQUFDOzs7O0lBUEMsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7OztZQXZDRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCVDthQUNGOzs7b0JBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sK0JBQXlCOztJQUN6Qiw4QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3JhZGlvJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkIGZpZWxkLXJhZGlvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWxhYmVsXCI+e3sgZmllbGQubGFiZWwgfX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW8tb3B0aW9uXCIgKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZC5vcHRpb25zXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgaWQ9XCJ7eyBmaWVsZC5uYW1lIH19XCJcclxuICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdC52YWx1ZVwiXHJcbiAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxhYmVsPnt7IG9wdC5sYWJlbCB9fTwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci1tZXNzYWdlXCIgKm5nSWY9XCJjb250cm9sLmVycm9ycz8ucmVxdWlyZWRcIlxyXG4gICAgICAgICAgPlBsZWFzZSBmaWxsIG91dCB0aGlzIGZpZWxkLjwvc3BhblxyXG4gICAgICAgID48c3BhbiBjbGFzcz1cIndhaXRpbmctbWVzc2FnZVwiICpuZ0lmPVwiY29udHJvbC5zdGF0dXMgPT09ICdQRU5ESU5HJ1wiPlxyXG4gICAgICAgIFZhbGlkYXRpbmcuLi5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiICpuZ0lmPVwiY29udHJvbC5lcnJvcnM/LmR5bmFtaWNFcnJvciAmJiBmaWVsZC5lcnJvck1lc3NhZ2VcIj57e1xyXG4gICAgICAgICAgZmllbGQuZXJyb3JNZXNzYWdlXHJcbiAgICAgICAgfX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwXCIgKm5nSWY9XCJmaWVsZC5oZWxwXCI+e3sgZmllbGQuaGVscCB9fTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYWRpb0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZmllbGQ6IGFueSA9IHt9O1xyXG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgZ2V0IHZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbnRyb2woKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV07XHJcbiAgfVxyXG59XHJcbiJdfQ==