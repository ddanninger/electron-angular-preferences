/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var FlashMessageComponent = /** @class */ (function () {
    function FlashMessageComponent() {
        this.showMessage = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FlashMessageComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.manageMessage(changes.message.currentValue);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    FlashMessageComponent.prototype.manageMessage = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        var _this = this;
        if (message && message.message && message.message.length > 0) {
            this.message = message;
            this.showMessage = true;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.showMessage = false;
                _this.message = null;
            }), 8000);
        }
    };
    FlashMessageComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'flash-message',
                    template: "\n    <div\n      class=\"flashMessage animateCss\"\n      [ngClass]=\"{\n        showFlashmessage: showMessage,\n        flashSuccess: message?.level === 'success',\n        flashError: message?.level === 'error'\n      }\"\n      [hidden]=\"!showMessage\"\n    >\n      <span>{{ message?.message }}</span>\n    </div>\n  ",
                    styles: [".flashMessage{text-align:center;border:none;padding:5px 10px;color:#fff;font-size:14px;display:inline;margin-right:15px}.flashMessage.flashSuccess{background:#025f2b}.flashMessage.flashError{background:#ad0909}.animateCss{transition:opacity 1s ease-in-out,margin-left .5s ease-in-out;opacity:0}.showFlashmessage{opacity:2}"]
                }] }
    ];
    /** @nocollapse */
    FlashMessageComponent.ctorParameters = function () { return []; };
    FlashMessageComponent.propDecorators = {
        message: [{ type: Input }]
    };
    return FlashMessageComponent;
}());
export { FlashMessageComponent };
if (false) {
    /** @type {?} */
    FlashMessageComponent.prototype.message;
    /** @type {?} */
    FlashMessageComponent.prototype.showMessage;
}
/**
 * @record
 */
export function FlashMessage() { }
if (false) {
    /** @type {?} */
    FlashMessage.prototype.message;
    /** @type {?} */
    FlashMessage.prototype.level;
    /** @type {?|undefined} */
    FlashMessage.prototype.isError;
}
/** @enum {string} */
var FlashMessageLevel = {
    SUCCESS: 'success',
    ERROR: 'error',
};
export { FlashMessageLevel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhc2gtbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbGVjdHJvbi1uZy1wcmVmZXJlbmNlcy8iLCJzb3VyY2VzIjpbImxpYi9tYWluL2ZsYXNoLW1lc3NhZ2UvZmxhc2gtbWVzc2FnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUUzRTtJQXNCRTtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsMkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7OztJQUNELDZDQUFhOzs7O0lBQWIsVUFBYyxPQUFxQjtRQUFuQyxpQkFVQztRQVRDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzVELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBRXhCLFVBQVU7OztZQUFDO2dCQUNULEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUN0QixDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7U0FDVjtJQUNILENBQUM7O2dCQXZDRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUscVVBWVQ7O2lCQUVGOzs7OzswQkFFRSxLQUFLOztJQXFCUiw0QkFBQztDQUFBLEFBeENELElBd0NDO1NBdEJZLHFCQUFxQjs7O0lBQ2hDLHdDQUErQjs7SUFDL0IsNENBQXFCOzs7OztBQXNCdkIsa0NBSUM7OztJQUhDLCtCQUFnQjs7SUFDaEIsNkJBQXlCOztJQUN6QiwrQkFBa0I7Ozs7SUFHbEIsU0FBVSxTQUFTO0lBQ25CLE9BQVEsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2ZsYXNoLW1lc3NhZ2UnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiZmxhc2hNZXNzYWdlIGFuaW1hdGVDc3NcIlxuICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICBzaG93Rmxhc2htZXNzYWdlOiBzaG93TWVzc2FnZSxcbiAgICAgICAgZmxhc2hTdWNjZXNzOiBtZXNzYWdlPy5sZXZlbCA9PT0gJ3N1Y2Nlc3MnLFxuICAgICAgICBmbGFzaEVycm9yOiBtZXNzYWdlPy5sZXZlbCA9PT0gJ2Vycm9yJ1xuICAgICAgfVwiXG4gICAgICBbaGlkZGVuXT1cIiFzaG93TWVzc2FnZVwiXG4gICAgPlxuICAgICAgPHNwYW4+e3sgbWVzc2FnZT8ubWVzc2FnZSB9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vZmxhc2gtbWVzc2FnZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZsYXNoTWVzc2FnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG1lc3NhZ2U6IEZsYXNoTWVzc2FnZTtcbiAgc2hvd01lc3NhZ2U6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zaG93TWVzc2FnZSA9IGZhbHNlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMubWFuYWdlTWVzc2FnZShjaGFuZ2VzLm1lc3NhZ2UuY3VycmVudFZhbHVlKTtcbiAgfVxuICBtYW5hZ2VNZXNzYWdlKG1lc3NhZ2U6IEZsYXNoTWVzc2FnZSkge1xuICAgIGlmIChtZXNzYWdlICYmIG1lc3NhZ2UubWVzc2FnZSAmJiBtZXNzYWdlLm1lc3NhZ2UubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgIHRoaXMuc2hvd01lc3NhZ2UgPSB0cnVlO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zaG93TWVzc2FnZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBudWxsO1xuICAgICAgfSwgODAwMCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxhc2hNZXNzYWdlIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBsZXZlbDogRmxhc2hNZXNzYWdlTGV2ZWw7XG4gIGlzRXJyb3I/OiBib29sZWFuO1xufVxuZXhwb3J0IGVudW0gRmxhc2hNZXNzYWdlTGV2ZWwge1xuICBTVUNDRVNTID0gJ3N1Y2Nlc3MnLFxuICBFUlJPUiA9ICdlcnJvcidcbn1cbiJdfQ==