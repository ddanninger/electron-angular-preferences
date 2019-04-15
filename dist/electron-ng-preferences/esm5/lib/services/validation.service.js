/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElectronService } from './electron.service';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./electron.service";
// import rxIpc from 'rx-ipc-electron-six/lib/renderer'; // not working @todo find a better way
var ValidationService = /** @class */ (function () {
    function ValidationService(electronService) {
        this.electronService = electronService;
        this.rxIpc = ((/** @type {?} */ (window))).require('rx-ipc-electron-six/lib/renderer').default;
        console.log('ValidationService', this.rxIpc);
    }
    /**
     * @param {?} name
     * @param {?} val
     * @return {?}
     */
    ValidationService.prototype.validateAsync = /**
     * @param {?} name
     * @param {?} val
     * @return {?}
     */
    function (name, val) {
        return this.rxIpc.runCommand('runObservableValidator', null, name, val);
    };
    /**
     * @param {?} name
     * @param {?} form
     * @return {?}
     */
    ValidationService.prototype.actionAsync = /**
     * @param {?} name
     * @param {?} form
     * @return {?}
     */
    function (name, form) {
        return this.rxIpc.runCommand('runObservableAction', null, name, form);
    };
    ValidationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ValidationService.ctorParameters = function () { return [
        { type: ElectronService }
    ]; };
    /** @nocollapse */ ValidationService.ngInjectableDef = i0.defineInjectable({ factory: function ValidationService_Factory() { return new ValidationService(i0.inject(i1.ElectronService)); }, token: ValidationService, providedIn: "root" });
    return ValidationService;
}());
export { ValidationService };
if (false) {
    /** @type {?} */
    ValidationService.prototype.rxIpc;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.electronService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUkzQztJQUtFLDJCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsT0FBTyxDQUNsQyxrQ0FBa0MsQ0FDbkMsQ0FBQyxPQUFPLENBQUM7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7Ozs7SUFFRCx5Q0FBYTs7Ozs7SUFBYixVQUFjLElBQVksRUFBRSxHQUFXO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7Ozs7SUFFRCx1Q0FBVzs7Ozs7SUFBWCxVQUFZLElBQVksRUFBRSxJQUFTO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMscUJBQXFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RSxDQUFDOztnQkFsQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFQUSxlQUFlOzs7NEJBQXhCO0NBd0JDLEFBbkJELElBbUJDO1NBaEJZLGlCQUFpQjs7O0lBQzVCLGtDQUFXOzs7OztJQUNDLDRDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZWN0cm9uU2VydmljZSB9IGZyb20gJy4vZWxlY3Ryb24uc2VydmljZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuLy8gaW1wb3J0IHJ4SXBjIGZyb20gJ3J4LWlwYy1lbGVjdHJvbi1zaXgvbGliL3JlbmRlcmVyJzsgLy8gbm90IHdvcmtpbmcgQHRvZG8gZmluZCBhIGJldHRlciB3YXlcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvblNlcnZpY2Uge1xuICByeElwYzogYW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZWN0cm9uU2VydmljZTogRWxlY3Ryb25TZXJ2aWNlKSB7XG4gICAgdGhpcy5yeElwYyA9ICh3aW5kb3cgYXMgYW55KS5yZXF1aXJlKFxuICAgICAgJ3J4LWlwYy1lbGVjdHJvbi1zaXgvbGliL3JlbmRlcmVyJ1xuICAgICkuZGVmYXVsdDtcbiAgICBjb25zb2xlLmxvZygnVmFsaWRhdGlvblNlcnZpY2UnLCB0aGlzLnJ4SXBjKTtcbiAgfVxuXG4gIHZhbGlkYXRlQXN5bmMobmFtZTogc3RyaW5nLCB2YWw6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnJ4SXBjLnJ1bkNvbW1hbmQoJ3J1bk9ic2VydmFibGVWYWxpZGF0b3InLCBudWxsLCBuYW1lLCB2YWwpO1xuICB9XG5cbiAgYWN0aW9uQXN5bmMobmFtZTogc3RyaW5nLCBmb3JtOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJ4SXBjLnJ1bkNvbW1hbmQoJ3J1bk9ic2VydmFibGVBY3Rpb24nLCBudWxsLCBuYW1lLCBmb3JtKTtcbiAgfVxufVxuIl19