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
    /**
     * @param {?} checked
     * @param {?} opt
     * @return {?}
     */
    CheckBoxComponent.prototype.onChecklistChange = /**
     * @param {?} checked
     * @param {?} opt
     * @return {?}
     */
    function (checked, opt) {
        opt.checked = checked;
        this.value = this.flattenValues(this.field.options);
    };
    /**
     * @param {?} checkboxes
     * @return {?}
     */
    CheckBoxComponent.prototype.flattenValues = /**
     * @param {?} checkboxes
     * @return {?}
     */
    function (checkboxes) {
        return checkboxes.filter((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return c.checked; })).map((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return c.value; }));
    };
    CheckBoxComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'checkbox',
                    template: "\n    <div [formGroup]=\"form\">\n      <div [formGroupName]=\"field.name\" class=\"field field-checkbox\">\n        <div class=\"field-label\">{{ field.label }}</div>\n        <div class=\"checkbox-option\" *ngFor=\"let opt of field.options\">\n          <input\n            type=\"checkbox\"\n            id=\"{{ field.name }}\"\n            [checked]=\"opt.checked\"\n            [value]=\"opt.value\"\n            (change)=\"onChecklistChange($event.target.checked, opt)\"\n          />\n          <label>{{ opt.label }}</label>\n        </div>\n        <span class=\"error-message\" *ngIf=\"control.errors?.required\"\n          >Please fill out this field.</span\n        ><span class=\"waiting-message\" *ngIf=\"control.status === 'PENDING'\">\n          Validating...\n        </span>\n        <span\n          class=\"error-message\"\n          *ngIf=\"control.errors?.dynamicError && field.errorMessage\"\n          >{{ field.errorMessage }}</span\n        >\n        <span class=\"help\" *ngIf=\"field.help\">{{ field.help }}</span>\n      </div>\n    </div>\n  "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbGVjdHJvbi1uZy1wcmVmZXJlbmNlcy8iLCJzb3VyY2VzIjpbImxpYi9tYWluL2dyb3VwL2ZpZWxkcy9jaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBQUE7UUFpQ1csVUFBSyxHQUFRLEVBQUUsQ0FBQztJQTZCM0IsQ0FBQztJQTNCQyxzQkFBSSxzQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNuRCxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHNDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ25ELENBQUM7OztPQUFBO0lBRUQsc0JBQUksb0NBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbkQsQ0FBQzs7Ozs7UUFFRCxVQUFVLEdBQUc7WUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwRCxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHNDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsQ0FBQzs7O09BQUE7Ozs7OztJQUVELDZDQUFpQjs7Ozs7SUFBakIsVUFBa0IsT0FBTyxFQUFFLEdBQUc7UUFDNUIsR0FBRyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFRCx5Q0FBYTs7OztJQUFiLFVBQWMsVUFBVTtRQUN0QixPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsT0FBTyxFQUFULENBQVMsRUFBQyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxFQUFDLENBQUM7SUFDN0QsQ0FBQzs7Z0JBN0RGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSxtakNBMkJUO2lCQUNGOzs7d0JBRUUsS0FBSzt1QkFDTCxLQUFLOztJQTRCUix3QkFBQztDQUFBLEFBOURELElBOERDO1NBOUJZLGlCQUFpQjs7O0lBQzVCLGtDQUF5Qjs7SUFDekIsaUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjaGVja2JveCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XHJcbiAgICAgIDxkaXYgW2Zvcm1Hcm91cE5hbWVdPVwiZmllbGQubmFtZVwiIGNsYXNzPVwiZmllbGQgZmllbGQtY2hlY2tib3hcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtbGFiZWxcIj57eyBmaWVsZC5sYWJlbCB9fTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveC1vcHRpb25cIiAqbmdGb3I9XCJsZXQgb3B0IG9mIGZpZWxkLm9wdGlvbnNcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICBpZD1cInt7IGZpZWxkLm5hbWUgfX1cIlxyXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJvcHQuY2hlY2tlZFwiXHJcbiAgICAgICAgICAgIFt2YWx1ZV09XCJvcHQudmFsdWVcIlxyXG4gICAgICAgICAgICAoY2hhbmdlKT1cIm9uQ2hlY2tsaXN0Q2hhbmdlKCRldmVudC50YXJnZXQuY2hlY2tlZCwgb3B0KVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxhYmVsPnt7IG9wdC5sYWJlbCB9fTwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci1tZXNzYWdlXCIgKm5nSWY9XCJjb250cm9sLmVycm9ycz8ucmVxdWlyZWRcIlxyXG4gICAgICAgICAgPlBsZWFzZSBmaWxsIG91dCB0aGlzIGZpZWxkLjwvc3BhblxyXG4gICAgICAgID48c3BhbiBjbGFzcz1cIndhaXRpbmctbWVzc2FnZVwiICpuZ0lmPVwiY29udHJvbC5zdGF0dXMgPT09ICdQRU5ESU5HJ1wiPlxyXG4gICAgICAgICAgVmFsaWRhdGluZy4uLlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCJcclxuICAgICAgICAgICpuZ0lmPVwiY29udHJvbC5lcnJvcnM/LmR5bmFtaWNFcnJvciAmJiBmaWVsZC5lcnJvck1lc3NhZ2VcIlxyXG4gICAgICAgICAgPnt7IGZpZWxkLmVycm9yTWVzc2FnZSB9fTwvc3BhblxyXG4gICAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHBcIiAqbmdJZj1cImZpZWxkLmhlbHBcIj57eyBmaWVsZC5oZWxwIH19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrQm94Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBmaWVsZDogYW55ID0ge307XHJcbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG4gIGdldCBpc1ZhbGlkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLnZhbGlkO1xyXG4gIH1cclxuICBnZXQgaXNEaXJ0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS5kaXJ0eTtcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCB2YWx1ZSh2YWwpIHtcclxuICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLnNldFZhbHVlKHZhbCk7XHJcbiAgfVxyXG5cclxuICBnZXQgY29udHJvbCgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXTtcclxuICB9XHJcblxyXG4gIG9uQ2hlY2tsaXN0Q2hhbmdlKGNoZWNrZWQsIG9wdCkge1xyXG4gICAgb3B0LmNoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZmxhdHRlblZhbHVlcyh0aGlzLmZpZWxkLm9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgZmxhdHRlblZhbHVlcyhjaGVja2JveGVzKSB7XHJcbiAgICByZXR1cm4gY2hlY2tib3hlcy5maWx0ZXIoYyA9PiBjLmNoZWNrZWQpLm1hcChjID0+IGMudmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXX0=