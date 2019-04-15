/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class DropDownComponent {
    constructor() {
        this.field = {};
    }
    /**
     * @return {?}
     */
    get value() {
        return this.form.controls[this.field.name].value;
    }
    /**
     * @return {?}
     */
    get control() {
        return this.form.controls[this.field.name];
    }
}
DropDownComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'dropdown',
                template: `
    <div [formGroup]="form">
      <div class="field field-dropdown">
        <div class="field-label">{{ field.label }}</div>
        <select [id]="field.name" [formControlName]="field.name">
          <option value="">-- Select One --</option>
          <option *ngFor="let opt of field.options" [value]="opt.value">{{
            opt.label
          }}</option>
        </select>
        <span class="error-message" *ngIf="control.errors?.required"
          >Please fill out this field.</span
        ><span class="waiting-message" *ngIf="control.status === 'PENDING'">
        Validating...
      </span>
        <span class="error-message" *ngIf="control.errors?.dynamicError && field.errorMessage">{{
          field.errorMessage
        }}</span>
        <span class="help" *ngIf="field.help">{{ field.help }}</span>
      </div>
    </div>
  `
            }] }
];
/** @nocollapse */
DropDownComponent.ctorParameters = () => [];
DropDownComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DropDownComponent.prototype.field;
    /** @type {?} */
    DropDownComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbGVjdHJvbi1uZy1wcmVmZXJlbmNlcy8iLCJzb3VyY2VzIjpbImxpYi9tYWluL2dyb3VwL2ZpZWxkcy9kcm9wZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBNEIzQyxNQUFNLE9BQU8saUJBQWlCO0lBWTVCO1FBWFMsVUFBSyxHQUFRLEVBQUUsQ0FBQztJQVdWLENBQUM7Ozs7SUFSaEIsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7OztZQXBDRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCVDthQUNGOzs7OztvQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixrQ0FBeUI7O0lBQ3pCLGlDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZHJvcGRvd24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGQgZmllbGQtZHJvcGRvd25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtbGFiZWxcIj57eyBmaWVsZC5sYWJlbCB9fTwvZGl2PlxyXG4gICAgICAgIDxzZWxlY3QgW2lkXT1cImZpZWxkLm5hbWVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLSBTZWxlY3QgT25lIC0tPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHQgb2YgZmllbGQub3B0aW9uc1wiIFt2YWx1ZV09XCJvcHQudmFsdWVcIj57e1xyXG4gICAgICAgICAgICBvcHQubGFiZWxcclxuICAgICAgICAgIH19PC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci1tZXNzYWdlXCIgKm5nSWY9XCJjb250cm9sLmVycm9ycz8ucmVxdWlyZWRcIlxyXG4gICAgICAgICAgPlBsZWFzZSBmaWxsIG91dCB0aGlzIGZpZWxkLjwvc3BhblxyXG4gICAgICAgID48c3BhbiBjbGFzcz1cIndhaXRpbmctbWVzc2FnZVwiICpuZ0lmPVwiY29udHJvbC5zdGF0dXMgPT09ICdQRU5ESU5HJ1wiPlxyXG4gICAgICAgIFZhbGlkYXRpbmcuLi5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiICpuZ0lmPVwiY29udHJvbC5lcnJvcnM/LmR5bmFtaWNFcnJvciAmJiBmaWVsZC5lcnJvck1lc3NhZ2VcIj57e1xyXG4gICAgICAgICAgZmllbGQuZXJyb3JNZXNzYWdlXHJcbiAgICAgICAgfX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwXCIgKm5nSWY9XCJmaWVsZC5oZWxwXCI+e3sgZmllbGQuaGVscCB9fTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wRG93bkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZmllbGQ6IGFueSA9IHt9O1xyXG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgZ2V0IHZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbnRyb2woKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZmllbGQubmFtZV07XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIl19