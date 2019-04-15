/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var ElectronService = /** @class */ (function () {
    function ElectronService() {
        // Conditional imports
        if (this.isElectron()) {
            // @ts-ignore
            this.ipcRenderer = window.require('electron').ipcRenderer;
            // @ts-ignore
            this.webFrame = window.require('electron').webFrame;
            // @ts-ignore
            this.remote = window.require('electron').remote;
            // @ts-ignore
            this.childProcess = window.require('child_process');
            // @ts-ignore
            this.fs = window.require('fs');
        }
    }
    /**
     * @return {?}
     */
    ElectronService.prototype.isElectron = /**
     * @return {?}
     */
    function () {
        // @ts-ignore
        return window && window.process && window.process.type;
    };
    /**
     * @return {?}
     */
    ElectronService.prototype.getOSLocale = /**
     * @return {?}
     */
    function () {
        if (this.isElectron() && this.remote && this.remote.app) {
            return this.remote.app.getLocale();
        }
    };
    ElectronService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ElectronService.ctorParameters = function () { return []; };
    /** @nocollapse */ ElectronService.ngInjectableDef = i0.defineInjectable({ factory: function ElectronService_Factory() { return new ElectronService(); }, token: ElectronService, providedIn: "root" });
    return ElectronService;
}());
export { ElectronService };
if (false) {
    /** @type {?} */
    ElectronService.prototype.ipcRenderer;
    /** @type {?} */
    ElectronService.prototype.webFrame;
    /** @type {?} */
    ElectronService.prototype.remote;
    /** @type {?} */
    ElectronService.prototype.childProcess;
    /** @type {?} */
    ElectronService.prototype.fs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VsZWN0cm9uLW5nLXByZWZlcmVuY2VzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2VsZWN0cm9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDO0lBVUU7UUFDRSxzQkFBc0I7UUFDdEIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDckIsYUFBYTtZQUNiLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxXQUFXLENBQUM7WUFDMUQsYUFBYTtZQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDcEQsYUFBYTtZQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDaEQsYUFBYTtZQUNiLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNwRCxhQUFhO1lBQ2IsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7OztJQUVELG9DQUFVOzs7SUFBVjtRQUNFLGFBQWE7UUFDYixPQUFPLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQ3pELENBQUM7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ3ZELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEM7SUFDSCxDQUFDOztnQkFuQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7MEJBUkQ7Q0EwQ0MsQUFwQ0QsSUFvQ0M7U0FqQ1ksZUFBZTs7O0lBQzFCLHNDQUFnQzs7SUFDaEMsbUNBQTBCOztJQUMxQixpQ0FBc0I7O0lBQ3RCLHVDQUFrQzs7SUFDbEMsNkJBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBpcGNSZW5kZXJlciwgd2ViRnJhbWUsIHJlbW90ZSB9IGZyb20gJ2VsZWN0cm9uJztcclxuaW1wb3J0ICogYXMgY2hpbGRQcm9jZXNzIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbGVjdHJvblNlcnZpY2Uge1xyXG4gIGlwY1JlbmRlcmVyOiB0eXBlb2YgaXBjUmVuZGVyZXI7XHJcbiAgd2ViRnJhbWU6IHR5cGVvZiB3ZWJGcmFtZTtcclxuICByZW1vdGU6IHR5cGVvZiByZW1vdGU7XHJcbiAgY2hpbGRQcm9jZXNzOiB0eXBlb2YgY2hpbGRQcm9jZXNzO1xyXG4gIGZzOiB0eXBlb2YgZnM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gQ29uZGl0aW9uYWwgaW1wb3J0c1xyXG4gICAgaWYgKHRoaXMuaXNFbGVjdHJvbigpKSB7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgdGhpcy5pcGNSZW5kZXJlciA9IHdpbmRvdy5yZXF1aXJlKCdlbGVjdHJvbicpLmlwY1JlbmRlcmVyO1xyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIHRoaXMud2ViRnJhbWUgPSB3aW5kb3cucmVxdWlyZSgnZWxlY3Ryb24nKS53ZWJGcmFtZTtcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICB0aGlzLnJlbW90ZSA9IHdpbmRvdy5yZXF1aXJlKCdlbGVjdHJvbicpLnJlbW90ZTtcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICB0aGlzLmNoaWxkUHJvY2VzcyA9IHdpbmRvdy5yZXF1aXJlKCdjaGlsZF9wcm9jZXNzJyk7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgdGhpcy5mcyA9IHdpbmRvdy5yZXF1aXJlKCdmcycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNFbGVjdHJvbigpIHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHJldHVybiB3aW5kb3cgJiYgd2luZG93LnByb2Nlc3MgJiYgd2luZG93LnByb2Nlc3MudHlwZTtcclxuICB9XHJcblxyXG4gIGdldE9TTG9jYWxlKCkge1xyXG4gICAgaWYgKHRoaXMuaXNFbGVjdHJvbigpICYmIHRoaXMucmVtb3RlICYmIHRoaXMucmVtb3RlLmFwcCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdGUuYXBwLmdldExvY2FsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=