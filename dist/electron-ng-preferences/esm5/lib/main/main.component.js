/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FlashMessageLevel } from './flash-message/flash-message.component';
import { ElectronService } from './../services/electron.service';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var MainComponent = /** @class */ (function () {
    function MainComponent(electronService) {
        this.electronService = electronService;
    }
    Object.defineProperty(MainComponent.prototype, "prefs", {
        get: /**
         * @return {?}
         */
        function () {
            return this.preferences[this.activeSection.name];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainComponent.prototype, "activeSectionForm", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.get(this.activeSection.name);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MainComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log('main.component->', this.preferences, this.options, this.defaults, this.activeSection);
        /** @type {?} */
        var validatorOptions = {};
        if (this.options.validationOn) {
            validatorOptions.updateOn = this.options.validationOn;
        }
        /** @type {?} */
        var formGroups = {};
        this.options.sections.forEach((/**
         * @param {?} s
         * @return {?}
         */
        function (s) {
            formGroups[s.name] = new FormGroup({}, validatorOptions);
        }));
        this.form = new FormGroup(formGroups, validatorOptions);
        console.log('main.ocmponent form is', this.form, validatorOptions);
    };
    /**
     * @return {?}
     */
    MainComponent.prototype.save = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log('save', this.form, this.form.valid, this.form.value);
        if (this.form.valid) {
            console.log('form is valid');
            /** @type {?} */
            var preferences = this.form.value;
            console.log('values', preferences);
            this.showSavedMessage();
            this.electronService.ipcRenderer.send('setPreferences', preferences);
        }
        else if (this.form.pending) {
            this.form.statusChanges.subscribe((/**
             * @param {?} status
             * @return {?}
             */
            function (status) {
                console.log('statusChanges form was pending and now is', status);
                if (status === 'VALID') {
                    _this.save();
                }
            }));
        }
        else {
            this.showErrorMessage();
        }
    };
    /**
     * @return {?}
     */
    MainComponent.prototype.showSavedMessage = /**
     * @return {?}
     */
    function () {
        this.flashMessage = {
            message: 'Successfully saved.',
            level: FlashMessageLevel.SUCCESS
        };
    };
    /**
     * @return {?}
     */
    MainComponent.prototype.showErrorMessage = /**
     * @return {?}
     */
    function () {
        this.flashMessage = {
            message: 'Form is not valid.',
            level: FlashMessageLevel.ERROR
        };
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MainComponent.prototype.onSubmit = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        console.log('onsubmit', this.form.valid, this.form, this.form.value);
        this.save();
        e.preventDefault();
        return false;
    };
    /**
     * @param {?} section
     * @return {?}
     */
    MainComponent.prototype.sectionForm = /**
     * @param {?} section
     * @return {?}
     */
    function (section) {
        return this.form.get(section.name);
    };
    /**
     * @param {?} section
     * @return {?}
     */
    MainComponent.prototype.sectionPreferences = /**
     * @param {?} section
     * @return {?}
     */
    function (section) {
        return this.preferences[section.name];
    };
    /**
     * @param {?} group
     * @return {?}
     */
    MainComponent.prototype.groupInActiveSelection = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        if (this.activeSection &&
            this.activeSection.form &&
            this.activeSection.form.groups) {
            if (this.activeSection.form.groups.find((/**
             * @param {?} g
             * @return {?}
             */
            function (g) { return g.id === group.id; }))) {
                return true;
            }
        }
        return false;
    };
    MainComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'main',
                    template: "<form (ngSubmit)=\"onSubmit($event)\" [formGroup]=\"form\">\r\n  <div class=\"groups\">\r\n    <ng-container *ngFor=\"let section of options?.sections\">\r\n      <group\r\n        *ngFor=\"let group of section.form?.groups\"\r\n        [group]=\"group\"\r\n        [preferences]=\"sectionPreferences(section)\"\r\n        [form]=\"sectionForm(section)\"\r\n        [validationOn]=\"options.validationOn\"\r\n        [ngClass]=\"{\r\n          'visible-group': groupInActiveSelection(group)\r\n        }\"\r\n      ></group>\r\n    </ng-container>\r\n  </div>\r\n  <div class=\"bottom-bar\">\r\n    <flash-message [message]=\"flashMessage\"></flash-message>\r\n    <button type=\"submit\" class=\"btn btn-primary\">\r\n      Save\r\n    </button>\r\n  </div>\r\n</form>\r\n",
                    styles: [".groups{height:calc(100vh - 40px);padding:10px;overflow:auto}group{display:none}.visible-group{display:block}.bottom-bar{padding:5px;text-align:right;background:#dcdcdc;border-top:1px solid #cecece}.bottom-bar button{background:rgba(2,95,43,.72);border:none;padding:5px 10px;font-size:14px;color:#fff;outline:0;transition:width 2s;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica,sans-serif}.bottom-bar button:hover{background:#000;border:none}"]
                }] }
    ];
    /** @nocollapse */
    MainComponent.ctorParameters = function () { return [
        { type: ElectronService }
    ]; };
    MainComponent.propDecorators = {
        activeSection: [{ type: Input }],
        preferences: [{ type: Input }],
        options: [{ type: Input }],
        defaults: [{ type: Input }]
    };
    return MainComponent;
}());
export { MainComponent };
if (false) {
    /** @type {?} */
    MainComponent.prototype.activeSection;
    /** @type {?} */
    MainComponent.prototype.preferences;
    /** @type {?} */
    MainComponent.prototype.options;
    /** @type {?} */
    MainComponent.prototype.defaults;
    /** @type {?} */
    MainComponent.prototype.form;
    /** @type {?} */
    MainComponent.prototype.flashMessage;
    /**
     * @type {?}
     * @private
     */
    MainComponent.prototype.electronService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbGVjdHJvbi1uZy1wcmVmZXJlbmNlcy8iLCJzb3VyY2VzIjpbImxpYi9tYWluL21haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsaUJBQWlCLEVBQ2xCLE1BQU0seUNBQXlDLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUEyQkUsdUJBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFSeEQsc0JBQUksZ0NBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELENBQUM7OztPQUFBO0lBRUQsc0JBQUksNENBQWlCOzs7O1FBQXJCO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELENBQUM7OztPQUFBOzs7O0lBSUQsZ0NBQVE7OztJQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FDVCxrQkFBa0IsRUFDbEIsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsUUFBUSxFQUNiLElBQUksQ0FBQyxhQUFhLENBQ25CLENBQUM7O1lBRUksZ0JBQWdCLEdBQVEsRUFBRTtRQUNoQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQzdCLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztTQUN2RDs7WUFFSyxVQUFVLEdBQUcsRUFBRTtRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxDQUFDO1lBQzdCLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUMsRUFBRSxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDM0QsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7SUFFRCw0QkFBSTs7O0lBQUo7UUFBQSxpQkFrQkM7UUFqQkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7Z0JBQ3ZCLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3RFO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQSxNQUFNO2dCQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNqRSxJQUFJLE1BQU0sS0FBSyxPQUFPLEVBQUU7b0JBQ3RCLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDYjtZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7OztJQUVELHdDQUFnQjs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRztZQUNsQixPQUFPLEVBQUUscUJBQXFCO1lBQzlCLEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxPQUFPO1NBQ2pDLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsd0NBQWdCOzs7SUFBaEI7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxvQkFBb0I7WUFDN0IsS0FBSyxFQUFFLGlCQUFpQixDQUFDLEtBQUs7U0FDL0IsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsZ0NBQVE7Ozs7SUFBUixVQUFTLENBQUM7UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFRCxtQ0FBVzs7OztJQUFYLFVBQVksT0FBTztRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELDBDQUFrQjs7OztJQUFsQixVQUFtQixPQUFPO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFRCw4Q0FBc0I7Ozs7SUFBdEIsVUFBdUIsS0FBSztRQUMxQixJQUNFLElBQUksQ0FBQyxhQUFhO1lBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSTtZQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQzlCO1lBQ0EsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsRUFBRSxFQUFqQixDQUFpQixFQUFDLEVBQUU7Z0JBQy9ELE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBL0dGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLE1BQU07b0JBQ2hCLGl4QkFBb0M7O2lCQUVyQzs7OztnQkFWUSxlQUFlOzs7Z0NBWXJCLEtBQUs7OEJBRUwsS0FBSzswQkFFTCxLQUFLOzJCQUVMLEtBQUs7O0lBbUdSLG9CQUFDO0NBQUEsQUFoSEQsSUFnSEM7U0ExR1ksYUFBYTs7O0lBQ3hCLHNDQUN1Qjs7SUFDdkIsb0NBQ2lCOztJQUNqQixnQ0FDMkI7O0lBQzNCLGlDQUNjOztJQUVkLDZCQUFnQjs7SUFDaEIscUNBQTJCOzs7OztJQVVmLHdDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEZsYXNoTWVzc2FnZSxcbiAgRmxhc2hNZXNzYWdlTGV2ZWxcbn0gZnJvbSAnLi9mbGFzaC1tZXNzYWdlL2ZsYXNoLW1lc3NhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEVsZWN0cm9uU2VydmljZSB9IGZyb20gJy4vLi4vc2VydmljZXMvZWxlY3Ryb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcmVmZXJlbmNlT3B0aW9ucywgU2VjdGlvbiB9IGZyb20gJy4uL3R5cGVzL3ByZWZlcmVuY2UudHlwZXMnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ21haW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbWFpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21haW4uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgYWN0aXZlU2VjdGlvbjogU2VjdGlvbjtcbiAgQElucHV0KClcbiAgcHJlZmVyZW5jZXM6IGFueTtcbiAgQElucHV0KClcbiAgb3B0aW9uczogUHJlZmVyZW5jZU9wdGlvbnM7XG4gIEBJbnB1dCgpXG4gIGRlZmF1bHRzOiBhbnk7XG5cbiAgZm9ybTogRm9ybUdyb3VwO1xuICBmbGFzaE1lc3NhZ2U6IEZsYXNoTWVzc2FnZTtcblxuICBnZXQgcHJlZnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlZmVyZW5jZXNbdGhpcy5hY3RpdmVTZWN0aW9uLm5hbWVdO1xuICB9XG5cbiAgZ2V0IGFjdGl2ZVNlY3Rpb25Gb3JtKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0uZ2V0KHRoaXMuYWN0aXZlU2VjdGlvbi5uYW1lKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlY3Ryb25TZXJ2aWNlOiBFbGVjdHJvblNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2coXG4gICAgICAnbWFpbi5jb21wb25lbnQtPicsXG4gICAgICB0aGlzLnByZWZlcmVuY2VzLFxuICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgdGhpcy5kZWZhdWx0cyxcbiAgICAgIHRoaXMuYWN0aXZlU2VjdGlvblxuICAgICk7XG5cbiAgICBjb25zdCB2YWxpZGF0b3JPcHRpb25zOiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5vcHRpb25zLnZhbGlkYXRpb25Pbikge1xuICAgICAgdmFsaWRhdG9yT3B0aW9ucy51cGRhdGVPbiA9IHRoaXMub3B0aW9ucy52YWxpZGF0aW9uT247XG4gICAgfVxuXG4gICAgY29uc3QgZm9ybUdyb3VwcyA9IHt9O1xuICAgIHRoaXMub3B0aW9ucy5zZWN0aW9ucy5mb3JFYWNoKHMgPT4ge1xuICAgICAgZm9ybUdyb3Vwc1tzLm5hbWVdID0gbmV3IEZvcm1Hcm91cCh7fSwgdmFsaWRhdG9yT3B0aW9ucyk7XG4gICAgfSk7XG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cChmb3JtR3JvdXBzLCB2YWxpZGF0b3JPcHRpb25zKTtcbiAgICBjb25zb2xlLmxvZygnbWFpbi5vY21wb25lbnQgZm9ybSBpcycsIHRoaXMuZm9ybSwgdmFsaWRhdG9yT3B0aW9ucyk7XG4gIH1cblxuICBzYXZlKCkge1xuICAgIGNvbnNvbGUubG9nKCdzYXZlJywgdGhpcy5mb3JtLCB0aGlzLmZvcm0udmFsaWQsIHRoaXMuZm9ybS52YWx1ZSk7XG4gICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgY29uc29sZS5sb2coJ2Zvcm0gaXMgdmFsaWQnKTtcbiAgICAgIGNvbnN0IHByZWZlcmVuY2VzID0gdGhpcy5mb3JtLnZhbHVlO1xuICAgICAgY29uc29sZS5sb2coJ3ZhbHVlcycsIHByZWZlcmVuY2VzKTtcbiAgICAgIHRoaXMuc2hvd1NhdmVkTWVzc2FnZSgpO1xuICAgICAgdGhpcy5lbGVjdHJvblNlcnZpY2UuaXBjUmVuZGVyZXIuc2VuZCgnc2V0UHJlZmVyZW5jZXMnLCBwcmVmZXJlbmNlcyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm0ucGVuZGluZykge1xuICAgICAgdGhpcy5mb3JtLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGF0dXNDaGFuZ2VzIGZvcm0gd2FzIHBlbmRpbmcgYW5kIG5vdyBpcycsIHN0YXR1cyk7XG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdWQUxJRCcpIHtcbiAgICAgICAgICB0aGlzLnNhdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dTYXZlZE1lc3NhZ2UoKSB7XG4gICAgdGhpcy5mbGFzaE1lc3NhZ2UgPSB7XG4gICAgICBtZXNzYWdlOiAnU3VjY2Vzc2Z1bGx5IHNhdmVkLicsXG4gICAgICBsZXZlbDogRmxhc2hNZXNzYWdlTGV2ZWwuU1VDQ0VTU1xuICAgIH07XG4gIH1cblxuICBzaG93RXJyb3JNZXNzYWdlKCkge1xuICAgIHRoaXMuZmxhc2hNZXNzYWdlID0ge1xuICAgICAgbWVzc2FnZTogJ0Zvcm0gaXMgbm90IHZhbGlkLicsXG4gICAgICBsZXZlbDogRmxhc2hNZXNzYWdlTGV2ZWwuRVJST1JcbiAgICB9O1xuICB9XG5cbiAgb25TdWJtaXQoZSkge1xuICAgIGNvbnNvbGUubG9nKCdvbnN1Ym1pdCcsIHRoaXMuZm9ybS52YWxpZCwgdGhpcy5mb3JtLCB0aGlzLmZvcm0udmFsdWUpO1xuICAgIHRoaXMuc2F2ZSgpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzZWN0aW9uRm9ybShzZWN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5nZXQoc2VjdGlvbi5uYW1lKTtcbiAgfVxuXG4gIHNlY3Rpb25QcmVmZXJlbmNlcyhzZWN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlZmVyZW5jZXNbc2VjdGlvbi5uYW1lXTtcbiAgfVxuXG4gIGdyb3VwSW5BY3RpdmVTZWxlY3Rpb24oZ3JvdXApIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmFjdGl2ZVNlY3Rpb24gJiZcbiAgICAgIHRoaXMuYWN0aXZlU2VjdGlvbi5mb3JtICYmXG4gICAgICB0aGlzLmFjdGl2ZVNlY3Rpb24uZm9ybS5ncm91cHNcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZVNlY3Rpb24uZm9ybS5ncm91cHMuZmluZChnID0+IGcuaWQgPT09IGdyb3VwLmlkKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=