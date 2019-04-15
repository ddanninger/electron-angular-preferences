/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ValidationService } from './../../../services/validation.service';
import { ElectronService } from './../../../services/electron.service';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class BtnFieldComponent {
    /**
     * @param {?} electronService
     * @param {?} validationService
     */
    constructor(electronService, validationService) {
        this.electronService = electronService;
        this.validationService = validationService;
        this.field = {};
    }
    /**
     * @return {?}
     */
    runAction() {
        /** @type {?} */
        const actionName = this.field.action;
        /** @type {?} */
        const lastLetter = actionName.substr(-1);
        if (lastLetter === '$') {
            this.validationService.actionAsync(actionName, this.form.value).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                this.message = res;
            }));
        }
        else {
            this.message = this.electronService.ipcRenderer.sendSync('runAction', actionName, this.form.value);
        }
    }
}
BtnFieldComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'btnfield',
                template: `
    <div class="field field-button">
      <div class="btn" (click)="runAction()">
        {{ field.label }}
      </div>
      <span class="message" *ngIf="message">{{ message }}</span>
      <span class="help" *ngIf="field.help">{{ field.help }}</span>
    </div>
  `
            }] }
];
/** @nocollapse */
BtnFieldComponent.ctorParameters = () => [
    { type: ElectronService },
    { type: ValidationService }
];
BtnFieldComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMvIiwic291cmNlcyI6WyJsaWIvbWFpbi9ncm91cC9maWVsZHMvYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBZTNDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBTTVCLFlBQ1UsZUFBZ0MsRUFDaEMsaUJBQW9DO1FBRHBDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBUHJDLFVBQUssR0FBUSxFQUFFLENBQUM7SUFRdEIsQ0FBQzs7OztJQUVKLFNBQVM7O2NBQ0QsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTs7Y0FDOUIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxVQUFVLEtBQUssR0FBRyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUzs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM5RSxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNyQixDQUFDLEVBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FDdEQsV0FBVyxFQUNYLFVBQVUsRUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FDaEIsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7O1lBdENGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDthQUNGOzs7O1lBaEJRLGVBQWU7WUFEZixpQkFBaUI7OztvQkFtQnZCLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLGtDQUF5Qjs7SUFDekIsaUNBQXlCOztJQUV6QixvQ0FBZ0I7Ozs7O0lBR2QsNENBQXdDOzs7OztJQUN4Qyw4Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRWxlY3Ryb25TZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi8uLi9zZXJ2aWNlcy9lbGVjdHJvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdidG5maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZCBmaWVsZC1idXR0b25cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJ0blwiIChjbGljayk9XCJydW5BY3Rpb24oKVwiPlxyXG4gICAgICAgIHt7IGZpZWxkLmxhYmVsIH19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm1lc3NhZ2VcIiAqbmdJZj1cIm1lc3NhZ2VcIj57eyBtZXNzYWdlIH19PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImhlbHBcIiAqbmdJZj1cImZpZWxkLmhlbHBcIj57eyBmaWVsZC5oZWxwIH19PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnRuRmllbGRDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGZpZWxkOiBhbnkgPSB7fTtcclxuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZWN0cm9uU2VydmljZTogRWxlY3Ryb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0aW9uU2VydmljZTogVmFsaWRhdGlvblNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIHJ1bkFjdGlvbigpIHtcclxuICAgIGNvbnN0IGFjdGlvbk5hbWUgPSB0aGlzLmZpZWxkLmFjdGlvbjtcclxuICAgIGNvbnN0IGxhc3RMZXR0ZXIgPSBhY3Rpb25OYW1lLnN1YnN0cigtMSk7XHJcbiAgICBpZiAobGFzdExldHRlciA9PT0gJyQnKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGlvblNlcnZpY2UuYWN0aW9uQXN5bmMoYWN0aW9uTmFtZSwgdGhpcy5mb3JtLnZhbHVlKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSByZXM7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tZXNzYWdlID0gdGhpcy5lbGVjdHJvblNlcnZpY2UuaXBjUmVuZGVyZXIuc2VuZFN5bmMoXHJcbiAgICAgICAgJ3J1bkFjdGlvbicsXHJcbiAgICAgICAgYWN0aW9uTmFtZSxcclxuICAgICAgICB0aGlzLmZvcm0udmFsdWVcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19