/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElectronService } from './services/electron.service';
import { Component } from '@angular/core';
var ElectronNgPreferencesComponent = /** @class */ (function () {
    function ElectronNgPreferencesComponent(electronService) {
        var _this = this;
        this.electronService = electronService;
        this.options = this.electronService.ipcRenderer.sendSync('getPreferenceOptions');
        this.preferences = this.electronService.ipcRenderer.sendSync('getPreferences');
        this.defaults = this.electronService.ipcRenderer.sendSync('getDefaults');
        this.options.sections = this.options.sections.filter((/**
         * @param {?} section
         * @return {?}
         */
        function (section) { return !section.enabled; }));
        this.options.sections.forEach((/**
         * @param {?} section
         * @return {?}
         */
        function (section) {
            if (!_this.preferences[section.name]) {
                _this.preferences[section.name] = {};
            }
        }));
        if (this.options.sections.length > 0) {
            this.activeSection = this.options.sections[0];
        }
        console.log('electron-ng-preferences construct', this.options, this.preferences, this.defaults, this.activeSection);
    }
    /**
     * @return {?}
     */
    ElectronNgPreferencesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log('electron-ng-preferences init', this.options, this.preferences, this.defaults, this.activeSection);
    };
    /**
     * @param {?} section
     * @return {?}
     */
    ElectronNgPreferencesComponent.prototype.sectionChanged = /**
     * @param {?} section
     * @return {?}
     */
    function (section) {
        this.activeSection = section;
    };
    ElectronNgPreferencesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'electron-ng-preferences',
                    template: "<div class=\"preference-window\">\r\n<sidebar\r\n  [activeSection]=\"activeSection\"\r\n  [options]=\"options\"\r\n  [preferences]=\"preferences\"\r\n  [defaults]=\"defaults\"\r\n  (sectionChange)=\"sectionChanged($event)\"\r\n></sidebar>\r\n<main\r\n  [activeSection]=\"activeSection\"\r\n  [options]=\"options\"\r\n  [preferences]=\"preferences\"\r\n  [defaults]=\"defaults\"\r\n></main>\r\n</div>",
                    styles: ["main{height:100%;min-height:100%;width:600px;min-width:600px;max-width:600px;background-color:#e7e7e7;font-size:14px;overflow:hidden;cursor:default;overflow-x:hidden;overflow-y:auto}sidebar{height:100%;min-height:100%;width:199px;min-width:199px;max-width:199px;border-right:1px solid #b8b8b9;display:flex;flex-direction:column;justify-content:flex-start;cursor:default;overflow-x:hidden;overflow-y:auto;background-color:#fff}.preference-window{height:100vh;width:100vw;display:flex}"]
                }] }
    ];
    /** @nocollapse */
    ElectronNgPreferencesComponent.ctorParameters = function () { return [
        { type: ElectronService }
    ]; };
    return ElectronNgPreferencesComponent;
}());
export { ElectronNgPreferencesComponent };
if (false) {
    /** @type {?} */
    ElectronNgPreferencesComponent.prototype.preferences;
    /** @type {?} */
    ElectronNgPreferencesComponent.prototype.options;
    /** @type {?} */
    ElectronNgPreferencesComponent.prototype.defaults;
    /** @type {?} */
    ElectronNgPreferencesComponent.prototype.activeSection;
    /**
     * @type {?}
     * @private
     */
    ElectronNgPreferencesComponent.prototype.electronService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMvIiwic291cmNlcyI6WyJsaWIvZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFOUQsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRDtJQVVFLHdDQUFvQixlQUFnQztRQUFwRCxpQkF3QkM7UUF4Qm1CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNsRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FDdEQsc0JBQXNCLENBQ3ZCLENBQUM7UUFDRixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FDMUQsZ0JBQWdCLENBQ2pCLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUV6RSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNOzs7O1FBQ2xELFVBQUEsT0FBTyxJQUFJLE9BQUEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFoQixDQUFnQixFQUM1QixDQUFDO1FBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsT0FBTztZQUNuQyxJQUFJLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ25DLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNyQztRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0M7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0SCxDQUFDOzs7O0lBRUQsaURBQVE7OztJQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDakgsQ0FBQzs7Ozs7SUFFRCx1REFBYzs7OztJQUFkLFVBQWUsT0FBZ0I7UUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7SUFDL0IsQ0FBQzs7Z0JBMUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQywyWkFBdUQ7O2lCQUV4RDs7OztnQkFSUSxlQUFlOztJQStDeEIscUNBQUM7Q0FBQSxBQTNDRCxJQTJDQztTQXRDWSw4QkFBOEI7OztJQUN6QyxxREFBaUI7O0lBQ2pCLGlEQUEyQjs7SUFDM0Isa0RBQWM7O0lBQ2QsdURBQXVCOzs7OztJQUNYLHlEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZWN0cm9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZWxlY3Ryb24uc2VydmljZSc7XG5pbXBvcnQgeyBTZWN0aW9uLCBQcmVmZXJlbmNlT3B0aW9ucyB9IGZyb20gJy4vdHlwZXMvcHJlZmVyZW5jZS50eXBlcyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbGVjdHJvbi1uZy1wcmVmZXJlbmNlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9lbGVjdHJvbi1uZy1wcmVmZXJlbmNlcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2VsZWN0cm9uLW5nLXByZWZlcmVuY2VzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRWxlY3Ryb25OZ1ByZWZlcmVuY2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJlZmVyZW5jZXM6IGFueTtcbiAgb3B0aW9uczogUHJlZmVyZW5jZU9wdGlvbnM7XG4gIGRlZmF1bHRzOiBhbnk7XG4gIGFjdGl2ZVNlY3Rpb246IFNlY3Rpb247XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlY3Ryb25TZXJ2aWNlOiBFbGVjdHJvblNlcnZpY2UpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmVsZWN0cm9uU2VydmljZS5pcGNSZW5kZXJlci5zZW5kU3luYyhcbiAgICAgICdnZXRQcmVmZXJlbmNlT3B0aW9ucydcbiAgICApO1xuICAgIHRoaXMucHJlZmVyZW5jZXMgPSB0aGlzLmVsZWN0cm9uU2VydmljZS5pcGNSZW5kZXJlci5zZW5kU3luYyhcbiAgICAgICdnZXRQcmVmZXJlbmNlcydcbiAgICApO1xuICAgIHRoaXMuZGVmYXVsdHMgPSB0aGlzLmVsZWN0cm9uU2VydmljZS5pcGNSZW5kZXJlci5zZW5kU3luYygnZ2V0RGVmYXVsdHMnKTtcblxuICAgIHRoaXMub3B0aW9ucy5zZWN0aW9ucyA9IHRoaXMub3B0aW9ucy5zZWN0aW9ucy5maWx0ZXIoXG4gICAgICBzZWN0aW9uID0+ICFzZWN0aW9uLmVuYWJsZWRcbiAgICApO1xuXG4gICAgdGhpcy5vcHRpb25zLnNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgICBpZiAoIXRoaXMucHJlZmVyZW5jZXNbc2VjdGlvbi5uYW1lXSkge1xuICAgICAgICB0aGlzLnByZWZlcmVuY2VzW3NlY3Rpb24ubmFtZV0gPSB7fTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuc2VjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5hY3RpdmVTZWN0aW9uID0gdGhpcy5vcHRpb25zLnNlY3Rpb25zWzBdO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdlbGVjdHJvbi1uZy1wcmVmZXJlbmNlcyBjb25zdHJ1Y3QnLCB0aGlzLm9wdGlvbnMsIHRoaXMucHJlZmVyZW5jZXMsIHRoaXMuZGVmYXVsdHMsIHRoaXMuYWN0aXZlU2VjdGlvbik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMgaW5pdCcsIHRoaXMub3B0aW9ucywgdGhpcy5wcmVmZXJlbmNlcywgdGhpcy5kZWZhdWx0cywgdGhpcy5hY3RpdmVTZWN0aW9uKTtcbiAgfVxuXG4gIHNlY3Rpb25DaGFuZ2VkKHNlY3Rpb246IFNlY3Rpb24pIHtcbiAgICB0aGlzLmFjdGl2ZVNlY3Rpb24gPSBzZWN0aW9uO1xuICB9XG59XG4iXX0=