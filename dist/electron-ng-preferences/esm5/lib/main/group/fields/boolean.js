/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { isBoolean } from 'util';
var BooleanComponent = /** @class */ (function () {
    function BooleanComponent() {
        this.field = {};
    }
    Object.defineProperty(BooleanComponent.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BooleanComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name].value;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.form.controls[this.field.name].setValue(val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} val
     * @return {?}
     */
    BooleanComponent.prototype.onChange = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.value = val;
    };
    /**
     * @return {?}
     */
    BooleanComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!isBoolean(this.value)) {
            this.value = false;
        }
    };
    BooleanComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'boolean',
                    template: "\n    <div class=\"field field-boolean\">\n      <div class=\"field-label\">{{ field.label }}</div>\n      <ui-switch (change)=\"onChange($event)\"></ui-switch>\n      <span class=\"error-message\" *ngIf=\"control.errors?.required\"\n        >Please fill out this field.</span\n      ><span class=\"waiting-message\" *ngIf=\"control.status === 'PENDING'\">\n        Validating...\n      </span>\n      <span\n        class=\"error-message\"\n        *ngIf=\"control.errors?.dynamicError && field.errorMessage\"\n        >{{ field.errorMessage }}</span\n      >\n      <span class=\"help\" *ngIf=\"field.help\">{{ field.help }}</span>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    BooleanComponent.ctorParameters = function () { return []; };
    BooleanComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return BooleanComponent;
}());
export { BooleanComponent };
if (false) {
    /** @type {?} */
    BooleanComponent.prototype.field;
    /** @type {?} */
    BooleanComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VsZWN0cm9uLW5nLXByZWZlcmVuY2VzLyIsInNvdXJjZXMiOlsibGliL21haW4vZ3JvdXAvZmllbGRzL2Jvb2xlYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWpDO0lBcUNFO1FBZlMsVUFBSyxHQUFRLEVBQUUsQ0FBQztJQWVWLENBQUM7SUFaaEIsc0JBQUkscUNBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG1DQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ25ELENBQUM7Ozs7O1FBRUQsVUFBVSxHQUFHO1lBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEQsQ0FBQzs7O09BSkE7Ozs7O0lBUUQsbUNBQVE7Ozs7SUFBUixVQUFTLEdBQVk7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELG1DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7Z0JBL0NGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSwyb0JBZ0JUO2lCQUNGOzs7Ozt3QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBeUJSLHVCQUFDO0NBQUEsQUFoREQsSUFnREM7U0EzQlksZ0JBQWdCOzs7SUFDM0IsaUNBQXlCOztJQUN6QixnQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBpc0Jvb2xlYW4gfSBmcm9tICd1dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2Jvb2xlYW4nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGQgZmllbGQtYm9vbGVhblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtbGFiZWxcIj57eyBmaWVsZC5sYWJlbCB9fTwvZGl2PlxyXG4gICAgICA8dWktc3dpdGNoIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiPjwvdWktc3dpdGNoPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIiAqbmdJZj1cImNvbnRyb2wuZXJyb3JzPy5yZXF1aXJlZFwiXHJcbiAgICAgICAgPlBsZWFzZSBmaWxsIG91dCB0aGlzIGZpZWxkLjwvc3BhblxyXG4gICAgICA+PHNwYW4gY2xhc3M9XCJ3YWl0aW5nLW1lc3NhZ2VcIiAqbmdJZj1cImNvbnRyb2wuc3RhdHVzID09PSAnUEVORElORydcIj5cclxuICAgICAgICBWYWxpZGF0aW5nLi4uXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW5cclxuICAgICAgICBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIlxyXG4gICAgICAgICpuZ0lmPVwiY29udHJvbC5lcnJvcnM/LmR5bmFtaWNFcnJvciAmJiBmaWVsZC5lcnJvck1lc3NhZ2VcIlxyXG4gICAgICAgID57eyBmaWVsZC5lcnJvck1lc3NhZ2UgfX08L3NwYW5cclxuICAgICAgPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImhlbHBcIiAqbmdJZj1cImZpZWxkLmhlbHBcIj57eyBmaWVsZC5oZWxwIH19PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm9vbGVhbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZmllbGQ6IGFueSA9IHt9O1xyXG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgZ2V0IGNvbnRyb2woKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV07XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0udmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUodmFsKSB7XHJcbiAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS5zZXRWYWx1ZSh2YWwpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBvbkNoYW5nZSh2YWw6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWw7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICghaXNCb29sZWFuKHRoaXMudmFsdWUpKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19