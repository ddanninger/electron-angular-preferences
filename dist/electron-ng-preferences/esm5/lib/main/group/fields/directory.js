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
                    template: "\n    <div [formGroup]=\"form\">\n      <div class=\"field field-directory\">\n        <div class=\"field-label\">{{ field.label }}</div>\n        <div class=\"value\">Folder: {{ control?.value }}</div>\n        <div class=\"btn\" (click)=\"chooseFolder()\">\n          {{ btnLabel }}\n        </div>\n        <span class=\"error-message\" *ngIf=\"control.errors?.required\"\n          >Please fill out this field.</span\n        >\n        <span\n          class=\"error-message\"\n          *ngIf=\"control.errors?.dynamicError && field.errorMessage\"\n          >{{ field.errorMessage }}</span\n        >\n        <span class=\"waiting-message\" *ngIf=\"control.status === 'PENDING'\">\n          Validating...\n        </span>\n        <span class=\"help\" *ngIf=\"field.help\">{{ field.help }}</span>\n        <input [formControlName]=\"field.name\" type=\"hidden\" />\n      </div>\n    </div>\n  "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMvIiwic291cmNlcyI6WyJsaWIvbWFpbi9ncm91cC9maWVsZHMvZGlyZWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVyRTtJQXdERSw0QkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBM0IzQyxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBVXpCLGFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQWtCM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbkQsQ0FBQztJQWpCRCxzQkFBSSx1Q0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNuRCxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHVDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ25ELENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUNBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLENBQUM7OztPQUFBOzs7O0lBTUQseUNBQVk7OztJQUFaOztZQUNRLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDM0UsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RCxnQ0FBZ0M7WUFDaEMsT0FBTztTQUNSO0lBQ0gsQ0FBQzs7Z0JBbkVGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSx5NEJBdUJUO2lCQUNGOzs7O2dCQTdCUSxlQUFlOzs7d0JBK0JyQixLQUFLO3VCQUNMLEtBQUs7O0lBc0NSLHlCQUFDO0NBQUEsQUFwRUQsSUFvRUM7U0F4Q1ksa0JBQWtCOzs7SUFDN0IsbUNBQXlCOztJQUN6QixrQ0FBeUI7O0lBRXpCLG9DQUFZOztJQU1aLDRDQUF1Qjs7SUFDdkIsc0NBQTZCOzs7OztJQWlCakIsNkNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBFbGVjdHJvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9lbGVjdHJvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2RpcmVjdG9yeScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZCBmaWVsZC1kaXJlY3RvcnlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtbGFiZWxcIj57eyBmaWVsZC5sYWJlbCB9fTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2YWx1ZVwiPkZvbGRlcjoge3sgY29udHJvbD8udmFsdWUgfX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuXCIgKGNsaWNrKT1cImNob29zZUZvbGRlcigpXCI+XHJcbiAgICAgICAgICB7eyBidG5MYWJlbCB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiICpuZ0lmPVwiY29udHJvbC5lcnJvcnM/LnJlcXVpcmVkXCJcclxuICAgICAgICAgID5QbGVhc2UgZmlsbCBvdXQgdGhpcyBmaWVsZC48L3NwYW5cclxuICAgICAgICA+XHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiXHJcbiAgICAgICAgICAqbmdJZj1cImNvbnRyb2wuZXJyb3JzPy5keW5hbWljRXJyb3IgJiYgZmllbGQuZXJyb3JNZXNzYWdlXCJcclxuICAgICAgICAgID57eyBmaWVsZC5lcnJvck1lc3NhZ2UgfX08L3NwYW5cclxuICAgICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ3YWl0aW5nLW1lc3NhZ2VcIiAqbmdJZj1cImNvbnRyb2wuc3RhdHVzID09PSAnUEVORElORydcIj5cclxuICAgICAgICAgIFZhbGlkYXRpbmcuLi5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwXCIgKm5nSWY9XCJmaWVsZC5oZWxwXCI+e3sgZmllbGQuaGVscCB9fTwvc3Bhbj5cclxuICAgICAgICA8aW5wdXQgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCIgdHlwZT1cImhpZGRlblwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlyZWN0b3J5Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBmaWVsZDogYW55ID0ge307XHJcbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBkaWFsb2c6IGFueTtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1vbi1wcmVmaXhcclxuICAvLyBAT3V0cHV0KClcclxuICAvLyBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHNlbGVjdGVkRm9sZGVyOiBzdHJpbmc7XHJcbiAgYnRuTGFiZWwgPSAnQ2hvb3NlIGEgRm9sZGVyJztcclxuXHJcbiAgZ2V0IGlzVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0udmFsaWQ7XHJcbiAgfVxyXG4gIGdldCBpc0RpcnR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLmRpcnR5O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbnRyb2woKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV07XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZWN0cm9uU2VydmljZTogRWxlY3Ryb25TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmRpYWxvZyA9IHRoaXMuZWxlY3Ryb25TZXJ2aWNlLnJlbW90ZS5kaWFsb2c7XHJcbiAgfVxyXG5cclxuICBjaG9vc2VGb2xkZXIoKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGlhbG9nLnNob3dPcGVuRGlhbG9nKHsgcHJvcGVydGllczogWydvcGVuRGlyZWN0b3J5J10gfSk7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV0uc2V0VmFsdWUodmFsdWVbMF0pO1xyXG4gICAgICAvLyB0aGlzLm9uQ2hhbmdlLmVtaXQodmFsdWVbMF0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==