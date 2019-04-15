/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var TextBoxComponent = /** @class */ (function () {
    function TextBoxComponent() {
        this.field = {};
    }
    Object.defineProperty(TextBoxComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name].valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextBoxComponent.prototype, "isDirty", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name].dirty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextBoxComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name].value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextBoxComponent.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name];
        },
        enumerable: true,
        configurable: true
    });
    TextBoxComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'textbox',
                    template: "\n    <div [formGroup]=\"form\">\n      <div class=\"field field-text\">\n        <div class=\"field-label\">{{ field.label }}</div>\n        <input\n          [attr.type]=\"field.type\"\n          class=\"form-control\"\n          [id]=\"field.name\"\n          [name]=\"field.name\"\n          [formControlName]=\"field.name\"\n        />\n        <span class=\"error-message\" *ngIf=\"control.errors?.required\"\n          >Please fill out this field.</span\n        >\n        <span class=\"waiting-message\" *ngIf=\"control.status === 'PENDING'\">\n          Validating...\n        </span>\n        <span\n          class=\"error-message\"\n          *ngIf=\"control.errors?.dynamicError && field.errorMessage\"\n          >{{ field.errorMessage }}</span\n        >\n        <span class=\"help\" *ngIf=\"field.help\">{{ field.help }}</span>\n      </div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    TextBoxComponent.ctorParameters = function () { return []; };
    TextBoxComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return TextBoxComponent;
}());
export { TextBoxComponent };
if (false) {
    /** @type {?} */
    TextBoxComponent.prototype.field;
    /** @type {?} */
    TextBoxComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGJveC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VsZWN0cm9uLW5nLXByZWZlcmVuY2VzLyIsInNvdXJjZXMiOlsibGliL21haW4vZ3JvdXAvZmllbGRzL3RleHRib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQWdERTtRQWpCUyxVQUFLLEdBQVEsRUFBRSxDQUFDO0lBaUJWLENBQUM7SUFmaEIsc0JBQUkscUNBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxxQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNuRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG1DQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ25ELENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUNBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTs7Z0JBOUNGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSw2MkJBeUJUO2lCQUNGOzs7Ozt3QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBaUJSLHVCQUFDO0NBQUEsQUFqREQsSUFpREM7U0FuQlksZ0JBQWdCOzs7SUFDM0IsaUNBQXlCOztJQUN6QixnQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3RleHRib3gnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGQgZmllbGQtdGV4dFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1sYWJlbFwiPnt7IGZpZWxkLmxhYmVsIH19PC9kaXY+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBbYXR0ci50eXBlXT1cImZpZWxkLnR5cGVcIlxyXG4gICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgW2lkXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgW25hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci1tZXNzYWdlXCIgKm5nSWY9XCJjb250cm9sLmVycm9ycz8ucmVxdWlyZWRcIlxyXG4gICAgICAgICAgPlBsZWFzZSBmaWxsIG91dCB0aGlzIGZpZWxkLjwvc3BhblxyXG4gICAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIndhaXRpbmctbWVzc2FnZVwiICpuZ0lmPVwiY29udHJvbC5zdGF0dXMgPT09ICdQRU5ESU5HJ1wiPlxyXG4gICAgICAgICAgVmFsaWRhdGluZy4uLlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCJcclxuICAgICAgICAgICpuZ0lmPVwiY29udHJvbC5lcnJvcnM/LmR5bmFtaWNFcnJvciAmJiBmaWVsZC5lcnJvck1lc3NhZ2VcIlxyXG4gICAgICAgICAgPnt7IGZpZWxkLmVycm9yTWVzc2FnZSB9fTwvc3BhblxyXG4gICAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHBcIiAqbmdJZj1cImZpZWxkLmhlbHBcIj57eyBmaWVsZC5oZWxwIH19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRCb3hDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGZpZWxkOiBhbnkgPSB7fTtcclxuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XHJcbiAgZ2V0IGlzVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0udmFsaWQ7XHJcbiAgfVxyXG4gIGdldCBpc0RpcnR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLmRpcnR5O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbnRyb2woKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV07XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIl19