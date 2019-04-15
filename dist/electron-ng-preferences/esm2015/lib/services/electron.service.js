/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ElectronService {
    constructor() {
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
    isElectron() {
        // @ts-ignore
        return window && window.process && window.process.type;
    }
    /**
     * @return {?}
     */
    getOSLocale() {
        if (this.isElectron() && this.remote && this.remote.app) {
            return this.remote.app.getLocale();
        }
    }
}
ElectronService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ElectronService.ctorParameters = () => [];
/** @nocollapse */ ElectronService.ngInjectableDef = i0.defineInjectable({ factory: function ElectronService_Factory() { return new ElectronService(); }, token: ElectronService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VsZWN0cm9uLW5nLXByZWZlcmVuY2VzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2VsZWN0cm9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUzNDLE1BQU0sT0FBTyxlQUFlO0lBTzFCO1FBQ0Usc0JBQXNCO1FBQ3RCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3JCLGFBQWE7WUFDYixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQzFELGFBQWE7WUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3BELGFBQWE7WUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2hELGFBQWE7WUFDYixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDcEQsYUFBYTtZQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsYUFBYTtRQUNiLE9BQU8sTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ3ZELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7WUFuQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7O0lBRUMsc0NBQWdDOztJQUNoQyxtQ0FBMEI7O0lBQzFCLGlDQUFzQjs7SUFDdEIsdUNBQWtDOztJQUNsQyw2QkFBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGlwY1JlbmRlcmVyLCB3ZWJGcmFtZSwgcmVtb3RlIH0gZnJvbSAnZWxlY3Ryb24nO1xyXG5pbXBvcnQgKiBhcyBjaGlsZFByb2Nlc3MgZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEVsZWN0cm9uU2VydmljZSB7XHJcbiAgaXBjUmVuZGVyZXI6IHR5cGVvZiBpcGNSZW5kZXJlcjtcclxuICB3ZWJGcmFtZTogdHlwZW9mIHdlYkZyYW1lO1xyXG4gIHJlbW90ZTogdHlwZW9mIHJlbW90ZTtcclxuICBjaGlsZFByb2Nlc3M6IHR5cGVvZiBjaGlsZFByb2Nlc3M7XHJcbiAgZnM6IHR5cGVvZiBmcztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBDb25kaXRpb25hbCBpbXBvcnRzXHJcbiAgICBpZiAodGhpcy5pc0VsZWN0cm9uKCkpIHtcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICB0aGlzLmlwY1JlbmRlcmVyID0gd2luZG93LnJlcXVpcmUoJ2VsZWN0cm9uJykuaXBjUmVuZGVyZXI7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgdGhpcy53ZWJGcmFtZSA9IHdpbmRvdy5yZXF1aXJlKCdlbGVjdHJvbicpLndlYkZyYW1lO1xyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIHRoaXMucmVtb3RlID0gd2luZG93LnJlcXVpcmUoJ2VsZWN0cm9uJykucmVtb3RlO1xyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIHRoaXMuY2hpbGRQcm9jZXNzID0gd2luZG93LnJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKTtcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICB0aGlzLmZzID0gd2luZG93LnJlcXVpcmUoJ2ZzJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0VsZWN0cm9uKCkge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgcmV0dXJuIHdpbmRvdyAmJiB3aW5kb3cucHJvY2VzcyAmJiB3aW5kb3cucHJvY2Vzcy50eXBlO1xyXG4gIH1cclxuXHJcbiAgZ2V0T1NMb2NhbGUoKSB7XHJcbiAgICBpZiAodGhpcy5pc0VsZWN0cm9uKCkgJiYgdGhpcy5yZW1vdGUgJiYgdGhpcy5yZW1vdGUuYXBwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbW90ZS5hcHAuZ2V0TG9jYWxlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==