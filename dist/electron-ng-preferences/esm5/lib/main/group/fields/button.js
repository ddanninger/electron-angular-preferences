/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ValidationService } from './../../../services/validation.service';
import { ElectronService } from './../../../services/electron.service';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var BtnFieldComponent = /** @class */ (function () {
    function BtnFieldComponent(electronService, validationService) {
        this.electronService = electronService;
        this.validationService = validationService;
        this.field = {};
    }
    /**
     * @return {?}
     */
    BtnFieldComponent.prototype.runAction = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var actionName = this.field.action;
        /** @type {?} */
        var lastLetter = actionName.substr(-1);
        if (lastLetter === '$') {
            this.validationService.actionAsync(actionName, this.form.value).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                _this.message = res;
            }));
        }
        else {
            this.message = this.electronService.ipcRenderer.sendSync('runAction', actionName, this.form.value);
        }
    };
    BtnFieldComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'btnfield',
                    template: "\n    <div class=\"field field-button\">\n      <div class=\"btn\" (click)=\"runAction()\">\n        {{ field.label }}\n      </div>\n      <span class=\"message\" *ngIf=\"message\">{{ message }}</span>\n      <span class=\"help\" *ngIf=\"field.help\">{{ field.help }}</span>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    BtnFieldComponent.ctorParameters = function () { return [
        { type: ElectronService },
        { type: ValidationService }
    ]; };
    BtnFieldComponent.propDecorators = {
        field: [{ type: Input }],
        form: [{ type: Input }]
    };
    return BtnFieldComponent;
}());
export { BtnFieldComponent };
if (false) {
    /** @type {?} */
    BtnFieldComponent.prototype.field;
    /** @type {?} */
    BtnFieldComponent.prototype.form;
    /** @type {?} */
    BtnFieldComponent.prototype.message;
    /**
     * @type {?}
     * @private
     */
    BtnFieldComponent.prototype.electronService;
    /**
     * @type {?}
     * @private
     */
    BtnFieldComponent.prototype.validationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMvIiwic291cmNlcyI6WyJsaWIvbWFpbi9ncm91cC9maWVsZHMvYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBbUJFLDJCQUNVLGVBQWdDLEVBQ2hDLGlCQUFvQztRQURwQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVByQyxVQUFLLEdBQVEsRUFBRSxDQUFDO0lBUXRCLENBQUM7Ozs7SUFFSixxQ0FBUzs7O0lBQVQ7UUFBQSxpQkFjQzs7WUFiTyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOztZQUM5QixVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLFVBQVUsS0FBSyxHQUFHLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQSxHQUFHO2dCQUMzRSxLQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNyQixDQUFDLEVBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FDdEQsV0FBVyxFQUNYLFVBQVUsRUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FDaEIsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Z0JBdENGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSxxU0FRVDtpQkFDRjs7OztnQkFoQlEsZUFBZTtnQkFEZixpQkFBaUI7Ozt3QkFtQnZCLEtBQUs7dUJBQ0wsS0FBSzs7SUF3QlIsd0JBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQTFCWSxpQkFBaUI7OztJQUM1QixrQ0FBeUI7O0lBQ3pCLGlDQUF5Qjs7SUFFekIsb0NBQWdCOzs7OztJQUdkLDRDQUF3Qzs7Ozs7SUFDeEMsOENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uLy4uL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IEVsZWN0cm9uU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vc2VydmljZXMvZWxlY3Ryb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnYnRuZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGQgZmllbGQtYnV0dG9uXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJidG5cIiAoY2xpY2spPVwicnVuQWN0aW9uKClcIj5cclxuICAgICAgICB7eyBmaWVsZC5sYWJlbCB9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJtZXNzYWdlXCIgKm5nSWY9XCJtZXNzYWdlXCI+e3sgbWVzc2FnZSB9fTwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwXCIgKm5nSWY9XCJmaWVsZC5oZWxwXCI+e3sgZmllbGQuaGVscCB9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEJ0bkZpZWxkQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBmaWVsZDogYW55ID0ge307XHJcbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVjdHJvblNlcnZpY2U6IEVsZWN0cm9uU2VydmljZSxcclxuICAgIHByaXZhdGUgdmFsaWRhdGlvblNlcnZpY2U6IFZhbGlkYXRpb25TZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBydW5BY3Rpb24oKSB7XHJcbiAgICBjb25zdCBhY3Rpb25OYW1lID0gdGhpcy5maWVsZC5hY3Rpb247XHJcbiAgICBjb25zdCBsYXN0TGV0dGVyID0gYWN0aW9uTmFtZS5zdWJzdHIoLTEpO1xyXG4gICAgaWYgKGxhc3RMZXR0ZXIgPT09ICckJykge1xyXG4gICAgICB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLmFjdGlvbkFzeW5jKGFjdGlvbk5hbWUsIHRoaXMuZm9ybS52YWx1ZSkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gcmVzO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuZWxlY3Ryb25TZXJ2aWNlLmlwY1JlbmRlcmVyLnNlbmRTeW5jKFxyXG4gICAgICAgICdydW5BY3Rpb24nLFxyXG4gICAgICAgIGFjdGlvbk5hbWUsXHJcbiAgICAgICAgdGhpcy5mb3JtLnZhbHVlXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==