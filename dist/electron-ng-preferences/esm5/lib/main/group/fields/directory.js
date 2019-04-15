/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ElectronService } from '../../../services/electron.service';
var DirectoryComponent = /** @class */ (function () {
    function DirectoryComponent(electronService) {
        this.electronService = electronService;
        this.field = {};
        this.btnLabel = 'Choose a Folder';
        this.dialog = this.electronService.remote.dialog;
    }
    Object.defineProperty(DirectoryComponent.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name].valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DirectoryComponent.prototype, "isDirty", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name].dirty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DirectoryComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.field.name].value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DirectoryComponent.prototype, "control", {
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
     * @return {?}
     */
    DirectoryComponent.prototype.chooseFolder = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.dialog.showOpenDialog({ properties: ['openDirectory'] });
        if (value) {
            this.form.controls[this.field.name].setValue(value[0]);
            // this.onChange.emit(value[0]);
            return;
        }
    };
    DirectoryComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'directory',
                    template: "\n    <div [formGroup]=\"form\">\n      <div class=\"field field-directory\">\n        <div class=\"field-label\">{{ field.label }}</div>\n        <div class=\"value\">Folder: {{ control?.value }}</div>\n        <div class=\"btn\" (click)=\"chooseFolder()\">\n          {{ btnLabel }}\n        </div>\n        <span class=\"error-message\" *ngIf=\"control.errors?.required\"\n          >Please fill out this field.</span\n        >\n        <span class=\"error-message\" *ngIf=\"control.errors?.dynamicError && field.errorMessage\">{{\n          field.errorMessage\n        }}</span>\n        <span class=\"help\" *ngIf=\"field.help\">{{ field.help }}</span>\n        <input [formControlName]=\"field.name\" type=\"hidden\" />\n      </div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    DirectoryComponent.ctorParameters = function () { return [
        { type: ElectronService }
    ]; };
    DirectoryComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return DirectoryComponent;
}());
export { DirectoryComponent };
if (false) {
    /** @type {?} */
    DirectoryComponent.prototype.field;
    /** @type {?} */
    DirectoryComponent.prototype.form;
    /** @type {?} */
    DirectoryComponent.prototype.dialog;
    /** @type {?} */
    DirectoryComponent.prototype.selectedFolder;
    /** @type {?} */
    DirectoryComponent.prototype.btnLabel;
    /**
     * @type {?}
     * @private
     */
    DirectoryComponent.prototype.electronService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMvIiwic291cmNlcyI6WyJsaWIvbWFpbi9ncm91cC9maWVsZHMvZGlyZWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVyRTtJQW1ERSw0QkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBM0IzQyxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBVXpCLGFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQWtCM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbkQsQ0FBQztJQWpCRCxzQkFBSSx1Q0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNuRCxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHVDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ25ELENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUNBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLENBQUM7OztPQUFBOzs7O0lBTUQseUNBQVk7OztJQUFaOztZQUNRLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDM0UsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RCxnQ0FBZ0M7WUFDaEMsT0FBTztTQUNSO0lBQ0gsQ0FBQzs7Z0JBOURGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxzdkJBa0JUO2lCQUNGOzs7O2dCQXhCUSxlQUFlOzs7d0JBMEJyQixLQUFLO3VCQUNMLEtBQUs7O0lBc0NSLHlCQUFDO0NBQUEsQUEvREQsSUErREM7U0F4Q1ksa0JBQWtCOzs7SUFDN0IsbUNBQXlCOztJQUN6QixrQ0FBeUI7O0lBRXpCLG9DQUFZOztJQU1aLDRDQUF1Qjs7SUFDdkIsc0NBQTZCOzs7OztJQWlCakIsNkNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBFbGVjdHJvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9lbGVjdHJvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2RpcmVjdG9yeScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZCBmaWVsZC1kaXJlY3RvcnlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtbGFiZWxcIj57eyBmaWVsZC5sYWJlbCB9fTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2YWx1ZVwiPkZvbGRlcjoge3sgY29udHJvbD8udmFsdWUgfX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuXCIgKGNsaWNrKT1cImNob29zZUZvbGRlcigpXCI+XHJcbiAgICAgICAgICB7eyBidG5MYWJlbCB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiICpuZ0lmPVwiY29udHJvbC5lcnJvcnM/LnJlcXVpcmVkXCJcclxuICAgICAgICAgID5QbGVhc2UgZmlsbCBvdXQgdGhpcyBmaWVsZC48L3NwYW5cclxuICAgICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci1tZXNzYWdlXCIgKm5nSWY9XCJjb250cm9sLmVycm9ycz8uZHluYW1pY0Vycm9yICYmIGZpZWxkLmVycm9yTWVzc2FnZVwiPnt7XHJcbiAgICAgICAgICBmaWVsZC5lcnJvck1lc3NhZ2VcclxuICAgICAgICB9fTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHBcIiAqbmdJZj1cImZpZWxkLmhlbHBcIj57eyBmaWVsZC5oZWxwIH19PC9zcGFuPlxyXG4gICAgICAgIDxpbnB1dCBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIiB0eXBlPVwiaGlkZGVuXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaXJlY3RvcnlDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGZpZWxkOiBhbnkgPSB7fTtcclxuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gIGRpYWxvZzogYW55O1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW9uLXByZWZpeFxyXG4gIC8vIEBPdXRwdXQoKVxyXG4gIC8vIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgc2VsZWN0ZWRGb2xkZXI6IHN0cmluZztcclxuICBidG5MYWJlbCA9ICdDaG9vc2UgYSBGb2xkZXInO1xyXG5cclxuICBnZXQgaXNWYWxpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWxpZDtcclxuICB9XHJcbiAgZ2V0IGlzRGlydHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0uZGlydHk7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0udmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgY29udHJvbCgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlY3Ryb25TZXJ2aWNlOiBFbGVjdHJvblNlcnZpY2UpIHtcclxuICAgIHRoaXMuZGlhbG9nID0gdGhpcy5lbGVjdHJvblNlcnZpY2UucmVtb3RlLmRpYWxvZztcclxuICB9XHJcblxyXG4gIGNob29zZUZvbGRlcigpIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kaWFsb2cuc2hvd09wZW5EaWFsb2coeyBwcm9wZXJ0aWVzOiBbJ29wZW5EaXJlY3RvcnknXSB9KTtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS5zZXRWYWx1ZSh2YWx1ZVswXSk7XHJcbiAgICAgIC8vIHRoaXMub25DaGFuZ2UuZW1pdCh2YWx1ZVswXSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19