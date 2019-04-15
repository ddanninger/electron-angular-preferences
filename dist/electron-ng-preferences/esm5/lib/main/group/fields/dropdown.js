/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var DropDownComponent = /** @class */ (function () {
    function DropDownComponent() {
        this.field = {};
    }
    Object.defineProperty(DropDownComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name].value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownComponent.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name];
        },
        enumerable: true,
        configurable: true
    });
    DropDownComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'dropdown',
                    template: "\n    <div [formGroup]=\"form\">\n      <div class=\"field field-dropdown\">\n        <div class=\"field-label\">{{ field.label }}</div>\n        <select [id]=\"field.name\" [formControlName]=\"field.name\">\n          <option value=\"\">-- Select One --</option>\n          <option *ngFor=\"let opt of field.options\" [value]=\"opt.value\">{{\n            opt.label\n          }}</option>\n        </select>\n        <span class=\"error-message\" *ngIf=\"control.errors?.required\"\n          >Please fill out this field.</span\n        ><span class=\"waiting-message\" *ngIf=\"control.status === 'PENDING'\">\n        Validating...\n      </span>\n        <span class=\"error-message\" *ngIf=\"control.errors?.dynamicError && field.errorMessage\">{{\n          field.errorMessage\n        }}</span>\n        <span class=\"help\" *ngIf=\"field.help\">{{ field.help }}</span>\n      </div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    DropDownComponent.ctorParameters = function () { return []; };
    DropDownComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return DropDownComponent;
}());
export { DropDownComponent };
if (false) {
    /** @type {?} */
    DropDownComponent.prototype.field;
    /** @type {?} */
    DropDownComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbGVjdHJvbi1uZy1wcmVmZXJlbmNlcy8iLCJzb3VyY2VzIjpbImxpYi9tYWluL2dyb3VwL2ZpZWxkcy9kcm9wZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBc0NFO1FBWFMsVUFBSyxHQUFRLEVBQUUsQ0FBQztJQVdWLENBQUM7SUFSaEIsc0JBQUksb0NBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxzQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLENBQUM7OztPQUFBOztnQkFwQ0YsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLDI0QkFxQlQ7aUJBQ0Y7Ozs7O3dCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFXUix3QkFBQztDQUFBLEFBdkNELElBdUNDO1NBYlksaUJBQWlCOzs7SUFDNUIsa0NBQXlCOztJQUN6QixpQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2Ryb3Bkb3duJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkIGZpZWxkLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWxhYmVsXCI+e3sgZmllbGQubGFiZWwgfX08L2Rpdj5cclxuICAgICAgICA8c2VsZWN0IFtpZF09XCJmaWVsZC5uYW1lXCIgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS0gU2VsZWN0IE9uZSAtLTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0IG9mIGZpZWxkLm9wdGlvbnNcIiBbdmFsdWVdPVwib3B0LnZhbHVlXCI+e3tcclxuICAgICAgICAgICAgb3B0LmxhYmVsXHJcbiAgICAgICAgICB9fTwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiICpuZ0lmPVwiY29udHJvbC5lcnJvcnM/LnJlcXVpcmVkXCJcclxuICAgICAgICAgID5QbGVhc2UgZmlsbCBvdXQgdGhpcyBmaWVsZC48L3NwYW5cclxuICAgICAgICA+PHNwYW4gY2xhc3M9XCJ3YWl0aW5nLW1lc3NhZ2VcIiAqbmdJZj1cImNvbnRyb2wuc3RhdHVzID09PSAnUEVORElORydcIj5cclxuICAgICAgICBWYWxpZGF0aW5nLi4uXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIiAqbmdJZj1cImNvbnRyb2wuZXJyb3JzPy5keW5hbWljRXJyb3IgJiYgZmllbGQuZXJyb3JNZXNzYWdlXCI+e3tcclxuICAgICAgICAgIGZpZWxkLmVycm9yTWVzc2FnZVxyXG4gICAgICAgIH19PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscFwiICpuZ0lmPVwiZmllbGQuaGVscFwiPnt7IGZpZWxkLmhlbHAgfX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJvcERvd25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGZpZWxkOiBhbnkgPSB7fTtcclxuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBjb250cm9sKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiJdfQ==