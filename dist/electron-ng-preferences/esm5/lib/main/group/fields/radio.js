/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
        this.field = {};
    }
    Object.defineProperty(RadioComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name].value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioComponent.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name];
        },
        enumerable: true,
        configurable: true
    });
    RadioComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'radio',
                    template: "\n    <div [formGroup]=\"form\">\n      <div class=\"field field-radio\">\n        <div class=\"field-label\">{{ field.label }}</div>\n        <div class=\"radio-option\" *ngFor=\"let opt of field.options\">\n          <input\n            type=\"radio\"\n            id=\"{{ field.name }}\"\n            [value]=\"opt.value\"\n            [formControlName]=\"field.name\"\n          />\n          <label>{{ opt.label }}</label>\n        </div>\n        <span class=\"error-message\" *ngIf=\"control.errors?.required\"\n          >Please fill out this field.</span\n        ><span class=\"waiting-message\" *ngIf=\"control.status === 'PENDING'\">\n        Validating...\n      </span>\n        <span class=\"error-message\" *ngIf=\"control.errors?.dynamicError && field.errorMessage\">{{\n          field.errorMessage\n        }}</span>\n        <span class=\"help\" *ngIf=\"field.help\">{{ field.help }}</span>\n      </div>\n    </div>\n  "
                }] }
    ];
    RadioComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return RadioComponent;
}());
export { RadioComponent };
if (false) {
    /** @type {?} */
    RadioComponent.prototype.field;
    /** @type {?} */
    RadioComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbGVjdHJvbi1uZy1wcmVmZXJlbmNlcy8iLCJzb3VyY2VzIjpbImxpYi9tYWluL2dyb3VwL2ZpZWxkcy9yYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBQUE7UUE4QlcsVUFBSyxHQUFRLEVBQUUsQ0FBQztJQVUzQixDQUFDO0lBUEMsc0JBQUksaUNBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLENBQUM7OztPQUFBOztnQkF2Q0YsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsT0FBTztvQkFDakIsUUFBUSxFQUFFLDg2QkF3QlQ7aUJBQ0Y7Ozt3QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBU1IscUJBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQVhZLGNBQWM7OztJQUN6QiwrQkFBeUI7O0lBQ3pCLDhCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAncmFkaW8nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGQgZmllbGQtcmFkaW9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtbGFiZWxcIj57eyBmaWVsZC5sYWJlbCB9fTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyYWRpby1vcHRpb25cIiAqbmdGb3I9XCJsZXQgb3B0IG9mIGZpZWxkLm9wdGlvbnNcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICBpZD1cInt7IGZpZWxkLm5hbWUgfX1cIlxyXG4gICAgICAgICAgICBbdmFsdWVdPVwib3B0LnZhbHVlXCJcclxuICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGFiZWw+e3sgb3B0LmxhYmVsIH19PC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIiAqbmdJZj1cImNvbnRyb2wuZXJyb3JzPy5yZXF1aXJlZFwiXHJcbiAgICAgICAgICA+UGxlYXNlIGZpbGwgb3V0IHRoaXMgZmllbGQuPC9zcGFuXHJcbiAgICAgICAgPjxzcGFuIGNsYXNzPVwid2FpdGluZy1tZXNzYWdlXCIgKm5nSWY9XCJjb250cm9sLnN0YXR1cyA9PT0gJ1BFTkRJTkcnXCI+XHJcbiAgICAgICAgVmFsaWRhdGluZy4uLlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci1tZXNzYWdlXCIgKm5nSWY9XCJjb250cm9sLmVycm9ycz8uZHluYW1pY0Vycm9yICYmIGZpZWxkLmVycm9yTWVzc2FnZVwiPnt7XHJcbiAgICAgICAgICBmaWVsZC5lcnJvck1lc3NhZ2VcclxuICAgICAgICB9fTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHBcIiAqbmdJZj1cImZpZWxkLmhlbHBcIj57eyBmaWVsZC5oZWxwIH19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFJhZGlvQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBmaWVsZDogYW55ID0ge307XHJcbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0udmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgY29udHJvbCgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXTtcclxuICB9XHJcbn1cclxuIl19