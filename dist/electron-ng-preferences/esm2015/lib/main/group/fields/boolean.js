/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { isBoolean } from 'util';
export class BooleanComponent {
    constructor() {
        this.field = {};
    }
    /**
     * @return {?}
     */
    get control() {
        return this.form.controls[this.field.name];
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
     * @param {?} val
     * @return {?}
     */
    onChange(val) {
        this.value = val;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!isBoolean(this.value)) {
            this.value = false;
        }
    }
}
BooleanComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'boolean',
                template: `
    <div class="field field-boolean">
      <div class="field-label">{{ field.label }}</div>
      <ui-switch [checked]="value" (change)="onChange($event)"></ui-switch>
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
  `
            }] }
];
/** @nocollapse */
BooleanComponent.ctorParameters = () => [];
BooleanComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BooleanComponent.prototype.field;
    /** @type {?} */
    BooleanComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VsZWN0cm9uLW5nLXByZWZlcmVuY2VzLyIsInNvdXJjZXMiOlsibGliL21haW4vZ3JvdXAvZmllbGRzL2Jvb2xlYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBdUJqQyxNQUFNLE9BQU8sZ0JBQWdCO0lBZ0IzQjtRQWZTLFVBQUssR0FBUSxFQUFFLENBQUM7SUFlVixDQUFDOzs7O0lBWmhCLElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNuRCxDQUFDOzs7OztJQUVELElBQUksS0FBSyxDQUFDLEdBQUc7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUlELFFBQVEsQ0FBQyxHQUFZO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JUO2FBQ0Y7Ozs7O29CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLGlDQUF5Qjs7SUFDekIsZ0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgaXNCb29sZWFuIH0gZnJvbSAndXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdib29sZWFuJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkIGZpZWxkLWJvb2xlYW5cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWxhYmVsXCI+e3sgZmllbGQubGFiZWwgfX08L2Rpdj5cclxuICAgICAgPHVpLXN3aXRjaCBbY2hlY2tlZF09XCJ2YWx1ZVwiIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiPjwvdWktc3dpdGNoPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIiAqbmdJZj1cImNvbnRyb2wuZXJyb3JzPy5yZXF1aXJlZFwiXHJcbiAgICAgICAgPlBsZWFzZSBmaWxsIG91dCB0aGlzIGZpZWxkLjwvc3BhblxyXG4gICAgICA+PHNwYW4gY2xhc3M9XCJ3YWl0aW5nLW1lc3NhZ2VcIiAqbmdJZj1cImNvbnRyb2wuc3RhdHVzID09PSAnUEVORElORydcIj5cclxuICAgICAgICBWYWxpZGF0aW5nLi4uXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW5cclxuICAgICAgICBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIlxyXG4gICAgICAgICpuZ0lmPVwiY29udHJvbC5lcnJvcnM/LmR5bmFtaWNFcnJvciAmJiBmaWVsZC5lcnJvck1lc3NhZ2VcIlxyXG4gICAgICAgID57eyBmaWVsZC5lcnJvck1lc3NhZ2UgfX08L3NwYW5cclxuICAgICAgPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImhlbHBcIiAqbmdJZj1cImZpZWxkLmhlbHBcIj57eyBmaWVsZC5oZWxwIH19PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm9vbGVhbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZmllbGQ6IGFueSA9IHt9O1xyXG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgZ2V0IGNvbnRyb2woKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV07XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0udmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUodmFsKSB7XHJcbiAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS5zZXRWYWx1ZSh2YWwpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBvbkNoYW5nZSh2YWw6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWw7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICghaXNCb29sZWFuKHRoaXMudmFsdWUpKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19