/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var CheckBoxComponent = /** @class */ (function () {
    function CheckBoxComponent() {
        this.field = {};
    }
    Object.defineProperty(CheckBoxComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name].valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBoxComponent.prototype, "isDirty", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name].dirty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBoxComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name].value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBoxComponent.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name];
        },
        enumerable: true,
        configurable: true
    });
    CheckBoxComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'checkbox',
                    template: "\n    <div [formGroup]=\"form\">\n      <div [formGroupName]=\"field.name\" class=\"field field-checkbox\">\n        <div class=\"field-label\">{{ field.label }}</div>\n        <div class=\"checkbox-option\" *ngFor=\"let opt of field.options\">\n          <input\n            type=\"checkbox\"\n            id=\"{{ field.name }}\"\n            [formControlName]=\"opt.label\"\n          />\n          <label>{{ opt.label }}</label>\n        </div>\n        <span class=\"error-message\" *ngIf=\"control.errors?.required\"\n          >Please fill out this field.</span\n        ><span class=\"waiting-message\" *ngIf=\"control.status === 'PENDING'\">\n        Validating...\n      </span>\n        <span class=\"error-message\" *ngIf=\"control.errors?.dynamicError && field.errorMessage\">{{\n          field.errorMessage\n        }}</span>\n        <span class=\"help\" *ngIf=\"field.help\">{{ field.help }}</span>\n      </div>\n    </div>\n  "
                }] }
    ];
    CheckBoxComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return CheckBoxComponent;
}());
export { CheckBoxComponent };
if (false) {
    /** @type {?} */
    CheckBoxComponent.prototype.field;
    /** @type {?} */
    CheckBoxComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbGVjdHJvbi1uZy1wcmVmZXJlbmNlcy8iLCJzb3VyY2VzIjpbImxpYi9tYWluL2dyb3VwL2ZpZWxkcy9jaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBQUE7UUE2QlcsVUFBSyxHQUFRLEVBQUUsQ0FBQztJQWUzQixDQUFDO0lBYkMsc0JBQUksc0NBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxzQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNuRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG9DQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ25ELENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksc0NBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTs7Z0JBM0NGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSxrN0JBdUJUO2lCQUNGOzs7d0JBRUUsS0FBSzt1QkFDTCxLQUFLOztJQWNSLHdCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0FoQlksaUJBQWlCOzs7SUFDNUIsa0NBQXlCOztJQUN6QixpQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NoZWNrYm94JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cclxuICAgICAgPGRpdiBbZm9ybUdyb3VwTmFtZV09XCJmaWVsZC5uYW1lXCIgY2xhc3M9XCJmaWVsZCBmaWVsZC1jaGVja2JveFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1sYWJlbFwiPnt7IGZpZWxkLmxhYmVsIH19PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94LW9wdGlvblwiICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQub3B0aW9uc1wiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgIGlkPVwie3sgZmllbGQubmFtZSB9fVwiXHJcbiAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwib3B0LmxhYmVsXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGFiZWw+e3sgb3B0LmxhYmVsIH19PC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIiAqbmdJZj1cImNvbnRyb2wuZXJyb3JzPy5yZXF1aXJlZFwiXHJcbiAgICAgICAgICA+UGxlYXNlIGZpbGwgb3V0IHRoaXMgZmllbGQuPC9zcGFuXHJcbiAgICAgICAgPjxzcGFuIGNsYXNzPVwid2FpdGluZy1tZXNzYWdlXCIgKm5nSWY9XCJjb250cm9sLnN0YXR1cyA9PT0gJ1BFTkRJTkcnXCI+XHJcbiAgICAgICAgVmFsaWRhdGluZy4uLlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci1tZXNzYWdlXCIgKm5nSWY9XCJjb250cm9sLmVycm9ycz8uZHluYW1pY0Vycm9yICYmIGZpZWxkLmVycm9yTWVzc2FnZVwiPnt7XHJcbiAgICAgICAgICBmaWVsZC5lcnJvck1lc3NhZ2VcclxuICAgICAgICB9fTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHBcIiAqbmdJZj1cImZpZWxkLmhlbHBcIj57eyBmaWVsZC5oZWxwIH19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrQm94Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBmaWVsZDogYW55ID0ge307XHJcbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG4gIGdldCBpc1ZhbGlkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLnZhbGlkO1xyXG4gIH1cclxuICBnZXQgaXNEaXJ0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS5kaXJ0eTtcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWx1ZTtcclxuICB9XHJcbiAgZ2V0IGNvbnRyb2woKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV07XHJcbiAgfVxyXG59XHJcbiJdfQ==