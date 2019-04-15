/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ElectronService } from '../../../services/electron.service';
export class DirectoryComponent {
    /**
     * @param {?} electronService
     */
    constructor(electronService) {
        this.electronService = electronService;
        this.field = {};
        this.btnLabel = 'Choose a Folder';
        this.dialog = this.electronService.remote.dialog;
    }
    /**
     * @return {?}
     */
    get isValid() {
        return this.form.controls[this.field.name].valid;
    }
    /**
     * @return {?}
     */
    get isDirty() {
        return this.form.controls[this.field.name].dirty;
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
    /**
     * @return {?}
     */
    chooseFolder() {
        /** @type {?} */
        const value = this.dialog.showOpenDialog({ properties: ['openDirectory'] });
        if (value) {
            this.form.controls[this.field.name].setValue(value[0]);
            // this.onChange.emit(value[0]);
            return;
        }
    }
}
DirectoryComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'directory',
                template: `
    <div [formGroup]="form">
      <div class="field field-directory">
        <div class="field-label">{{ field.label }}</div>
        <div class="value">Folder: {{ control?.value }}</div>
        <div class="btn" (click)="chooseFolder()">
          {{ btnLabel }}
        </div>
        <span class="error-message" *ngIf="control.errors?.required"
          >Please fill out this field.</span
        >
        <span
          class="error-message"
          *ngIf="control.errors?.dynamicError && field.errorMessage"
          >{{ field.errorMessage }}</span
        >
        <span class="waiting-message" *ngIf="control.status === 'PENDING'">
          Validating...
        </span>
        <span class="help" *ngIf="field.help">{{ field.help }}</span>
        <input [formControlName]="field.name" type="hidden" />
      </div>
    </div>
  `
            }] }
];
/** @nocollapse */
DirectoryComponent.ctorParameters = () => [
    { type: ElectronService }
];
DirectoryComponent.propDecorators = {
    field: [{ type: Input }],
    form: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DirectoryComponent.prototype.field;
    /** @type {?} */
    DirectoryComponent.prototype.form;
    /** @type {?} */
    DirectoryComponent.prototype.dialog;
    /** @type {?} */
    DirectoryComponent.prototype.selectedFolder;
    /** @type {?} */
    DirectoryComponent.prototype.btnLabel;
    /**
     * @type {?}
     * @private
     */
    DirectoryComponent.prototype.electronService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMvIiwic291cmNlcyI6WyJsaWIvbWFpbi9ncm91cC9maWVsZHMvZGlyZWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQThCckUsTUFBTSxPQUFPLGtCQUFrQjs7OztJQTRCN0IsWUFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBM0IzQyxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBVXpCLGFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQWtCM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbkQsQ0FBQzs7OztJQWpCRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQU1ELFlBQVk7O2NBQ0osS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQztRQUMzRSxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELGdDQUFnQztZQUNoQyxPQUFPO1NBQ1I7SUFDSCxDQUFDOzs7WUFuRUYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCVDthQUNGOzs7O1lBN0JRLGVBQWU7OztvQkErQnJCLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLG1DQUF5Qjs7SUFDekIsa0NBQXlCOztJQUV6QixvQ0FBWTs7SUFNWiw0Q0FBdUI7O0lBQ3ZCLHNDQUE2Qjs7Ozs7SUFpQmpCLDZDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRWxlY3Ryb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZWxlY3Ryb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdkaXJlY3RvcnknLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGQgZmllbGQtZGlyZWN0b3J5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLWxhYmVsXCI+e3sgZmllbGQubGFiZWwgfX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWVcIj5Gb2xkZXI6IHt7IGNvbnRyb2w/LnZhbHVlIH19PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0blwiIChjbGljayk9XCJjaG9vc2VGb2xkZXIoKVwiPlxyXG4gICAgICAgICAge3sgYnRuTGFiZWwgfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIiAqbmdJZj1cImNvbnRyb2wuZXJyb3JzPy5yZXF1aXJlZFwiXHJcbiAgICAgICAgICA+UGxlYXNlIGZpbGwgb3V0IHRoaXMgZmllbGQuPC9zcGFuXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIlxyXG4gICAgICAgICAgKm5nSWY9XCJjb250cm9sLmVycm9ycz8uZHluYW1pY0Vycm9yICYmIGZpZWxkLmVycm9yTWVzc2FnZVwiXHJcbiAgICAgICAgICA+e3sgZmllbGQuZXJyb3JNZXNzYWdlIH19PC9zcGFuXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwid2FpdGluZy1tZXNzYWdlXCIgKm5nSWY9XCJjb250cm9sLnN0YXR1cyA9PT0gJ1BFTkRJTkcnXCI+XHJcbiAgICAgICAgICBWYWxpZGF0aW5nLi4uXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGVscFwiICpuZ0lmPVwiZmllbGQuaGVscFwiPnt7IGZpZWxkLmhlbHAgfX08L3NwYW4+XHJcbiAgICAgICAgPGlucHV0IFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiIHR5cGU9XCJoaWRkZW5cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIERpcmVjdG9yeUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZmllbGQ6IGFueSA9IHt9O1xyXG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgZGlhbG9nOiBhbnk7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtb24tcHJlZml4XHJcbiAgLy8gQE91dHB1dCgpXHJcbiAgLy8gb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBzZWxlY3RlZEZvbGRlcjogc3RyaW5nO1xyXG4gIGJ0bkxhYmVsID0gJ0Nob29zZSBhIEZvbGRlcic7XHJcblxyXG4gIGdldCBpc1ZhbGlkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLnZhbGlkO1xyXG4gIH1cclxuICBnZXQgaXNEaXJ0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS5kaXJ0eTtcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5maWVsZC5uYW1lXS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBjb250cm9sKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVjdHJvblNlcnZpY2U6IEVsZWN0cm9uU2VydmljZSkge1xyXG4gICAgdGhpcy5kaWFsb2cgPSB0aGlzLmVsZWN0cm9uU2VydmljZS5yZW1vdGUuZGlhbG9nO1xyXG4gIH1cclxuXHJcbiAgY2hvb3NlRm9sZGVyKCkge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmRpYWxvZy5zaG93T3BlbkRpYWxvZyh7IHByb3BlcnRpZXM6IFsnb3BlbkRpcmVjdG9yeSddIH0pO1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmZpZWxkLm5hbWVdLnNldFZhbHVlKHZhbHVlWzBdKTtcclxuICAgICAgLy8gdGhpcy5vbkNoYW5nZS5lbWl0KHZhbHVlWzBdKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=