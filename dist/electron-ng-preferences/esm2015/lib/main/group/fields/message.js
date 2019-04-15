/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class MessageComponent {
    constructor() {
        this.field = {};
    }
}
MessageComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'message',
                template: `
    <div class="field field-message">
      <div class="field-heading" *ngIf="field.heading">
        {{ field.heading }}
      </div>
      <div class="field-content" [innerHTML]="field.content"></div>
    </div>
  `
            }] }
];
/** @nocollapse */
MessageComponent.ctorParameters = () => [];
MessageComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MessageComponent.prototype.field;
    /** @type {?} */
    MessageComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VsZWN0cm9uLW5nLXByZWZlcmVuY2VzLyIsInNvdXJjZXMiOlsibGliL21haW4vZ3JvdXAvZmllbGRzL21lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWMzQyxNQUFNLE9BQU8sZ0JBQWdCO0lBSTNCO1FBSFMsVUFBSyxHQUFRLEVBQUUsQ0FBQztJQUdWLENBQUM7OztZQWhCakIsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFOzs7Ozs7O0dBT1Q7YUFDRjs7Ozs7b0JBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4saUNBQXlCOztJQUN6QixnQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ21lc3NhZ2UnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGQgZmllbGQtbWVzc2FnZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtaGVhZGluZ1wiICpuZ0lmPVwiZmllbGQuaGVhZGluZ1wiPlxyXG4gICAgICAgIHt7IGZpZWxkLmhlYWRpbmcgfX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1jb250ZW50XCIgW2lubmVySFRNTF09XCJmaWVsZC5jb250ZW50XCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBmaWVsZDogYW55ID0ge307XHJcbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIl19