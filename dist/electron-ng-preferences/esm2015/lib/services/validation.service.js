/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElectronService } from './electron.service';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./electron.service";
// import rxIpc from 'rx-ipc-electron-six/lib/renderer'; // not working @todo find a better way
export class ValidationService {
    /**
     * @param {?} electronService
     */
    constructor(electronService) {
        this.electronService = electronService;
        this.rxIpc = ((/** @type {?} */ (window))).require('rx-ipc-electron-six/lib/renderer').default;
        console.log('ValidationService', this.rxIpc);
    }
    /**
     * @param {?} name
     * @param {?} val
     * @return {?}
     */
    validateAsync(name, val) {
        return this.rxIpc.runCommand('runObservableValidator', null, name, val);
    }
    /**
     * @param {?} name
     * @param {?} form
     * @return {?}
     */
    actionAsync(name, form) {
        return this.rxIpc.runCommand('runObservableAction', null, name, form);
    }
}
ValidationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ValidationService.ctorParameters = () => [
    { type: ElectronService }
];
/** @nocollapse */ ValidationService.ngInjectableDef = i0.defineInjectable({ factory: function ValidationService_Factory() { return new ValidationService(i0.inject(i1.ElectronService)); }, token: ValidationService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ValidationService.prototype.rxIpc;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.electronService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU8zQyxNQUFNLE9BQU8saUJBQWlCOzs7O0lBRTVCLFlBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNsRCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxPQUFPLENBQ2xDLGtDQUFrQyxDQUNuQyxDQUFDLE9BQU8sQ0FBQztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7OztJQUVELGFBQWEsQ0FBQyxJQUFZLEVBQUUsR0FBVztRQUNyQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLHdCQUF3QixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7Ozs7O0lBRUQsV0FBVyxDQUFDLElBQVksRUFBRSxJQUFTO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMscUJBQXFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7WUFsQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUFEsZUFBZTs7Ozs7SUFTdEIsa0NBQVc7Ozs7O0lBQ0MsNENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlY3Ryb25TZXJ2aWNlIH0gZnJvbSAnLi9lbGVjdHJvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG4vLyBpbXBvcnQgcnhJcGMgZnJvbSAncngtaXBjLWVsZWN0cm9uLXNpeC9saWIvcmVuZGVyZXInOyAvLyBub3Qgd29ya2luZyBAdG9kbyBmaW5kIGEgYmV0dGVyIHdheVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uU2VydmljZSB7XG4gIHJ4SXBjOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlY3Ryb25TZXJ2aWNlOiBFbGVjdHJvblNlcnZpY2UpIHtcbiAgICB0aGlzLnJ4SXBjID0gKHdpbmRvdyBhcyBhbnkpLnJlcXVpcmUoXG4gICAgICAncngtaXBjLWVsZWN0cm9uLXNpeC9saWIvcmVuZGVyZXInXG4gICAgKS5kZWZhdWx0O1xuICAgIGNvbnNvbGUubG9nKCdWYWxpZGF0aW9uU2VydmljZScsIHRoaXMucnhJcGMpO1xuICB9XG5cbiAgdmFsaWRhdGVBc3luYyhuYW1lOiBzdHJpbmcsIHZhbDogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMucnhJcGMucnVuQ29tbWFuZCgncnVuT2JzZXJ2YWJsZVZhbGlkYXRvcicsIG51bGwsIG5hbWUsIHZhbCk7XG4gIH1cblxuICBhY3Rpb25Bc3luYyhuYW1lOiBzdHJpbmcsIGZvcm06IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucnhJcGMucnVuQ29tbWFuZCgncnVuT2JzZXJ2YWJsZUFjdGlvbicsIG51bGwsIG5hbWUsIGZvcm0pO1xuICB9XG59XG4iXX0=