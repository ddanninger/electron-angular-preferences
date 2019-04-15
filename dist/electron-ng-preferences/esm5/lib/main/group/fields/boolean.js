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
                    template: "\n    <div class=\"field field-boolean\">\n      <div class=\"field-label\">{{ field.label }}</div>\n      <ui-switch [checked]=\"value\" (change)=\"onChange($event)\"></ui-switch>\n      <span class=\"error-message\" *ngIf=\"control.errors?.required\"\n        >Please fill out this field.</span\n      ><span class=\"waiting-message\" *ngIf=\"control.status === 'PENDING'\">\n        Validating...\n      </span>\n      <span\n        class=\"error-message\"\n        *ngIf=\"control.errors?.dynamicError && field.errorMessage\"\n        >{{ field.errorMessage }}</span\n      >\n      <span class=\"help\" *ngIf=\"field.help\">{{ field.help }}</span>\n    </div>\n  "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VsZWN0cm9uLW5nLXByZWZlcmVuY2VzLyIsInNvdXJjZXMiOlsibGliL21haW4vZ3JvdXAvZmllbGRzL2Jvb2xlYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWpDO0lBcUNFO1FBZlMsVUFBSyxHQUFRLEVBQUUsQ0FBQztJQWVWLENBQUM7SUFaaEIsc0JBQUkscUNBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG1DQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ25ELENBQUM7Ozs7O1FBRUQsVUFBVSxHQUFHO1lBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEQsQ0FBQzs7O09BSkE7Ozs7O0lBUUQsbUNBQVE7Ozs7SUFBUixVQUFTLEdBQVk7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELG1DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7Z0JBL0NGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSwrcEJBZ0JUO2lCQUNGOzs7Ozt3QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBeUJSLHVCQUFDO0NBQUEsQUFoREQsSUFnREM7U0EzQlksZ0JBQWdCOzs7SUFDM0IsaUNBQXlCOztJQUN6QixnQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBpc0Jvb2xlYW4gfSBmcm9tICd1dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2Jvb2xlYW4nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGQgZmllbGQtYm9vbGVhblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtbGFiZWxcIj57eyBmaWVsZC5sYWJlbCB9fTwvZGl2PlxyXG4gICAgICA8dWktc3dpdGNoIFtjaGVja2VkXT1cInZhbHVlXCIgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCI+PC91aS1zd2l0Y2g+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiICpuZ0lmPVwiY29udHJvbC5lcnJvcnM/LnJlcXVpcmVkXCJcclxuICAgICAgICA+UGxlYXNlIGZpbGwgb3V0IHRoaXMgZmllbGQuPC9zcGFuXHJcbiAgICAgID48c3BhbiBjbGFzcz1cIndhaXRpbmctbWVzc2FnZVwiICpuZ0lmPVwiY29udHJvbC5zdGF0dXMgPT09ICdQRU5ESU5HJ1wiPlxyXG4gICAgICAgIFZhbGlkYXRpbmcuLi5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiXHJcbiAgICAgICAgKm5nSWY9XCJjb250cm9sLmVycm9ycz8uZHluYW1pY0Vycm9yICYmIGZpZWxkLmVycm9yTWVzc2FnZVwiXHJcbiAgICAgICAgPnt7IGZpZWxkLmVycm9yTWVzc2FnZSB9fTwvc3BhblxyXG4gICAgICA+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiaGVscFwiICpuZ0lmPVwiZmllbGQuaGVscFwiPnt7IGZpZWxkLmhlbHAgfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb29sZWFuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBmaWVsZDogYW55ID0ge307XHJcbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBnZXQgY29udHJvbCgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXTtcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCB2YWx1ZSh2YWwpIHtcclxuICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLnNldFZhbHVlKHZhbCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG9uQ2hhbmdlKHZhbDogYm9vbGVhbikge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbDtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKCFpc0Jvb2xlYW4odGhpcy52YWx1ZSkpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=