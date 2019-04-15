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
      <ui-switch (change)="onChange($event)"></ui-switch>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VsZWN0cm9uLW5nLXByZWZlcmVuY2VzLyIsInNvdXJjZXMiOlsibGliL21haW4vZ3JvdXAvZmllbGRzL2Jvb2xlYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBdUJqQyxNQUFNLE9BQU8sZ0JBQWdCO0lBZ0IzQjtRQWZTLFVBQUssR0FBUSxFQUFFLENBQUM7SUFlVixDQUFDOzs7O0lBWmhCLElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNuRCxDQUFDOzs7OztJQUVELElBQUksS0FBSyxDQUFDLEdBQUc7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUlELFFBQVEsQ0FBQyxHQUFZO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JUO2FBQ0Y7Ozs7O29CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLGlDQUF5Qjs7SUFDekIsZ0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgaXNCb29sZWFuIH0gZnJvbSAndXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdib29sZWFuJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkIGZpZWxkLWJvb2xlYW5cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWxhYmVsXCI+e3sgZmllbGQubGFiZWwgfX08L2Rpdj5cclxuICAgICAgPHVpLXN3aXRjaCAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIj48L3VpLXN3aXRjaD5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci1tZXNzYWdlXCIgKm5nSWY9XCJjb250cm9sLmVycm9ycz8ucmVxdWlyZWRcIlxyXG4gICAgICAgID5QbGVhc2UgZmlsbCBvdXQgdGhpcyBmaWVsZC48L3NwYW5cclxuICAgICAgPjxzcGFuIGNsYXNzPVwid2FpdGluZy1tZXNzYWdlXCIgKm5nSWY9XCJjb250cm9sLnN0YXR1cyA9PT0gJ1BFTkRJTkcnXCI+XHJcbiAgICAgICAgVmFsaWRhdGluZy4uLlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCJcclxuICAgICAgICAqbmdJZj1cImNvbnRyb2wuZXJyb3JzPy5keW5hbWljRXJyb3IgJiYgZmllbGQuZXJyb3JNZXNzYWdlXCJcclxuICAgICAgICA+e3sgZmllbGQuZXJyb3JNZXNzYWdlIH19PC9zcGFuXHJcbiAgICAgID5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwXCIgKm5nSWY9XCJmaWVsZC5oZWxwXCI+e3sgZmllbGQuaGVscCB9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEJvb2xlYW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGZpZWxkOiBhbnkgPSB7fTtcclxuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gIGdldCBjb250cm9sKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZhbHVlKHZhbCkge1xyXG4gICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0uc2V0VmFsdWUodmFsKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgb25DaGFuZ2UodmFsOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIWlzQm9vbGVhbih0aGlzLnZhbHVlKSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==