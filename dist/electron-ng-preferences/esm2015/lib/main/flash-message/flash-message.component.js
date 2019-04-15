/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class FlashMessageComponent {
    constructor() {
        this.showMessage = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.manageMessage(changes.message.currentValue);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    manageMessage(message) {
        if (message && message.message && message.message.length > 0) {
            this.message = message;
            this.showMessage = true;
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.showMessage = false;
                this.message = null;
            }), 8000);
        }
    }
}
FlashMessageComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'flash-message',
                template: `
    <div
      class="flashMessage animateCss"
      [ngClass]="{
        showFlashmessage: showMessage,
        flashSuccess: message?.level === 'success',
        flashError: message?.level === 'error'
      }"
      [hidden]="!showMessage"
    >
      <span>{{ message?.message }}</span>
    </div>
  `,
                styles: [".flashMessage{text-align:center;border:none;padding:5px 10px;color:#fff;font-size:14px;display:inline;margin-right:15px}.flashMessage.flashSuccess{background:#025f2b}.flashMessage.flashError{background:#ad0909}.animateCss{transition:opacity 1s ease-in-out,margin-left .5s ease-in-out;opacity:0}.showFlashmessage{opacity:2}"]
            }] }
];
/** @nocollapse */
FlashMessageComponent.ctorParameters = () => [];
FlashMessageComponent.propDecorators = {
    message: [{ type: Input }]
};
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
const FlashMessageLevel = {
    SUCCESS: 'success',
    ERROR: 'error',
};
export { FlashMessageLevel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhc2gtbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbGVjdHJvbi1uZy1wcmVmZXJlbmNlcy8iLCJzb3VyY2VzIjpbImxpYi9tYWluL2ZsYXNoLW1lc3NhZ2UvZmxhc2gtbWVzc2FnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQW9CM0UsTUFBTSxPQUFPLHFCQUFxQjtJQUloQztRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7OztJQUNELGFBQWEsQ0FBQyxPQUFxQjtRQUNqQyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM1RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUV4QixVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztTQUNWO0lBQ0gsQ0FBQzs7O1lBdkNGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0dBWVQ7O2FBRUY7Ozs7O3NCQUVFLEtBQUs7Ozs7SUFBTix3Q0FBK0I7O0lBQy9CLDRDQUFxQjs7Ozs7QUFzQnZCLGtDQUlDOzs7SUFIQywrQkFBZ0I7O0lBQ2hCLDZCQUF5Qjs7SUFDekIsK0JBQWtCOzs7O0lBR2xCLFNBQVUsU0FBUztJQUNuQixPQUFRLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdmbGFzaC1tZXNzYWdlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImZsYXNoTWVzc2FnZSBhbmltYXRlQ3NzXCJcbiAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgc2hvd0ZsYXNobWVzc2FnZTogc2hvd01lc3NhZ2UsXG4gICAgICAgIGZsYXNoU3VjY2VzczogbWVzc2FnZT8ubGV2ZWwgPT09ICdzdWNjZXNzJyxcbiAgICAgICAgZmxhc2hFcnJvcjogbWVzc2FnZT8ubGV2ZWwgPT09ICdlcnJvcidcbiAgICAgIH1cIlxuICAgICAgW2hpZGRlbl09XCIhc2hvd01lc3NhZ2VcIlxuICAgID5cbiAgICAgIDxzcGFuPnt7IG1lc3NhZ2U/Lm1lc3NhZ2UgfX08L3NwYW4+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2ZsYXNoLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGbGFzaE1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBtZXNzYWdlOiBGbGFzaE1lc3NhZ2U7XG4gIHNob3dNZXNzYWdlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2hvd01lc3NhZ2UgPSBmYWxzZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLm1hbmFnZU1lc3NhZ2UoY2hhbmdlcy5tZXNzYWdlLmN1cnJlbnRWYWx1ZSk7XG4gIH1cbiAgbWFuYWdlTWVzc2FnZShtZXNzYWdlOiBGbGFzaE1lc3NhZ2UpIHtcbiAgICBpZiAobWVzc2FnZSAmJiBtZXNzYWdlLm1lc3NhZ2UgJiYgbWVzc2FnZS5tZXNzYWdlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICB0aGlzLnNob3dNZXNzYWdlID0gdHJ1ZTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2hvd01lc3NhZ2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbnVsbDtcbiAgICAgIH0sIDgwMDApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZsYXNoTWVzc2FnZSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgbGV2ZWw6IEZsYXNoTWVzc2FnZUxldmVsO1xuICBpc0Vycm9yPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBlbnVtIEZsYXNoTWVzc2FnZUxldmVsIHtcbiAgU1VDQ0VTUyA9ICdzdWNjZXNzJyxcbiAgRVJST1IgPSAnZXJyb3InXG59XG4iXX0=