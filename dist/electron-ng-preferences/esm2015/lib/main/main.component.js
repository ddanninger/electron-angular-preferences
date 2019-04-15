/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FlashMessageLevel } from './flash-message/flash-message.component';
import { ElectronService } from './../services/electron.service';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class MainComponent {
    /**
     * @param {?} electronService
     */
    constructor(electronService) {
        this.electronService = electronService;
    }
    /**
     * @return {?}
     */
    get prefs() {
        return this.preferences[this.activeSection.name];
    }
    /**
     * @return {?}
     */
    get activeSectionForm() {
        return this.form.get(this.activeSection.name);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log('main.component->', this.preferences, this.options, this.defaults, this.activeSection);
        /** @type {?} */
        const validatorOptions = {};
        if (this.options.validationOn) {
            validatorOptions.updateOn = this.options.validationOn;
        }
        /** @type {?} */
        const formGroups = {};
        this.options.sections.forEach((/**
         * @param {?} s
         * @return {?}
         */
        s => {
            formGroups[s.name] = new FormGroup({}, validatorOptions);
        }));
        this.form = new FormGroup(formGroups, validatorOptions);
        console.log('main.ocmponent form is', this.form, validatorOptions);
    }
    /**
     * @return {?}
     */
    save() {
        console.log('save', this.form, this.form.valid, this.form.value);
        if (this.form.valid) {
            console.log('form is valid');
            /** @type {?} */
            const preferences = this.form.value;
            console.log('values', preferences);
            this.showSavedMessage();
            this.electronService.ipcRenderer.send('setPreferences', preferences);
        }
        else if (this.form.pending) {
            this.form.statusChanges.subscribe((/**
             * @param {?} status
             * @return {?}
             */
            status => {
                console.log('statusChanges form was pending and now is', status);
                if (status === 'VALID') {
                    this.save();
                }
            }));
        }
        else {
            this.showErrorMessage();
        }
    }
    /**
     * @return {?}
     */
    showSavedMessage() {
        this.flashMessage = {
            message: 'Successfully saved.',
            level: FlashMessageLevel.SUCCESS
        };
    }
    /**
     * @return {?}
     */
    showErrorMessage() {
        this.flashMessage = {
            message: 'Form is not valid.',
            level: FlashMessageLevel.ERROR
        };
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onSubmit(e) {
        console.log('onsubmit', this.form.valid, this.form, this.form.value);
        this.save();
        e.preventDefault();
        return false;
    }
    /**
     * @param {?} section
     * @return {?}
     */
    sectionForm(section) {
        return this.form.get(section.name);
    }
    /**
     * @param {?} section
     * @return {?}
     */
    sectionPreferences(section) {
        return this.preferences[section.name];
    }
    /**
     * @param {?} group
     * @return {?}
     */
    groupInActiveSelection(group) {
        if (this.activeSection &&
            this.activeSection.form &&
            this.activeSection.form.groups) {
            if (this.activeSection.form.groups.find((/**
             * @param {?} g
             * @return {?}
             */
            g => g.id === group.id))) {
                return true;
            }
        }
        return false;
    }
}
MainComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'main',
                template: "<form (ngSubmit)=\"onSubmit($event)\" [formGroup]=\"form\">\r\n  <div class=\"groups\">\r\n    <ng-container *ngFor=\"let section of options?.sections\">\r\n      <group\r\n        *ngFor=\"let group of section.form?.groups\"\r\n        [group]=\"group\"\r\n        [preferences]=\"sectionPreferences(section)\"\r\n        [form]=\"sectionForm(section)\"\r\n        [validationOn]=\"options.validationOn\"\r\n        [ngClass]=\"{\r\n          'visible-group': groupInActiveSelection(group)\r\n        }\"\r\n      ></group>\r\n    </ng-container>\r\n  </div>\r\n  <div class=\"bottom-bar\">\r\n    <flash-message [message]=\"flashMessage\"></flash-message>\r\n    <button type=\"submit\" class=\"btn btn-primary\">\r\n      Save\r\n    </button>\r\n  </div>\r\n</form>\r\n",
                styles: [".groups{height:calc(100vh - 40px);padding:10px;overflow:auto}group{display:none}.visible-group{display:block}.bottom-bar{padding:5px;text-align:right;background:#dcdcdc;border-top:1px solid #cecece}.bottom-bar button{background:rgba(2,95,43,.72);border:none;padding:5px 10px;font-size:14px;color:#fff;outline:0;transition:width 2s;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica,sans-serif}.bottom-bar button:hover{background:#000;border:none}"]
            }] }
];
/** @nocollapse */
MainComponent.ctorParameters = () => [
    { type: ElectronService }
];
MainComponent.propDecorators = {
    activeSection: [{ type: Input }],
    preferences: [{ type: Input }],
    options: [{ type: Input }],
    defaults: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MainComponent.prototype.activeSection;
    /** @type {?} */
    MainComponent.prototype.preferences;
    /** @type {?} */
    MainComponent.prototype.options;
    /** @type {?} */
    MainComponent.prototype.defaults;
    /** @type {?} */
    MainComponent.prototype.form;
    /** @type {?} */
    MainComponent.prototype.flashMessage;
    /**
     * @type {?}
     * @private
     */
    MainComponent.prototype.electronService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbGVjdHJvbi1uZy1wcmVmZXJlbmNlcy8iLCJzb3VyY2VzIjpbImxpYi9tYWluL21haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsaUJBQWlCLEVBQ2xCLE1BQU0seUNBQXlDLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRM0MsTUFBTSxPQUFPLGFBQWE7Ozs7SUFxQnhCLFlBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7Ozs7SUFSeEQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBSUQsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQ1Qsa0JBQWtCLEVBQ2xCLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLFFBQVEsRUFDYixJQUFJLENBQUMsYUFBYSxDQUNuQixDQUFDOztjQUVJLGdCQUFnQixHQUFRLEVBQUU7UUFDaEMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRTtZQUM3QixnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7U0FDdkQ7O2NBRUssVUFBVSxHQUFH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O1lBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFDOUI7WUFDQSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEtBQUssQ0FBQyxFQUFFLEVBQUMsRUFBRTtnQkFDL0QsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUEvR0YsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsTUFBTTtnQkFDaEIsaXhCQUFvQzs7YUFFckM7Ozs7WUFWUSxlQUFlOzs7NEJBWXJCLEtBQUs7MEJBRUwsS0FBSztzQkFFTCxLQUFLO3VCQUVMLEtBQUs7Ozs7SUFOTixzQ0FDdUI7O0lBQ3ZCLG9DQUNpQjs7SUFDakIsZ0NBQzJCOztJQUMzQixpQ0FDYzs7SUFFZCw2QkFBZ0I7O0lBQ2hCLHFDQUEyQjs7Ozs7SUFVZix3Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBGbGFzaE1lc3NhZ2UsXG4gIEZsYXNoTWVzc2FnZUxldmVsXG59IGZyb20gJy4vZmxhc2gtbWVzc2FnZS9mbGFzaC1tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFbGVjdHJvblNlcnZpY2UgfSBmcm9tICcuLy4uL3NlcnZpY2VzL2VsZWN0cm9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJlZmVyZW5jZU9wdGlvbnMsIFNlY3Rpb24gfSBmcm9tICcuLi90eXBlcy9wcmVmZXJlbmNlLnR5cGVzJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdtYWluJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21haW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYWluLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGFjdGl2ZVNlY3Rpb246IFNlY3Rpb247XG4gIEBJbnB1dCgpXG4gIHByZWZlcmVuY2VzOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG9wdGlvbnM6IFByZWZlcmVuY2VPcHRpb25zO1xuICBASW5wdXQoKVxuICBkZWZhdWx0czogYW55O1xuXG4gIGZvcm06IEZvcm1Hcm91cDtcbiAgZmxhc2hNZXNzYWdlOiBGbGFzaE1lc3NhZ2U7XG5cbiAgZ2V0IHByZWZzKCkge1xuICAgIHJldHVybiB0aGlzLnByZWZlcmVuY2VzW3RoaXMuYWN0aXZlU2VjdGlvbi5uYW1lXTtcbiAgfVxuXG4gIGdldCBhY3RpdmVTZWN0aW9uRm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmdldCh0aGlzLmFjdGl2ZVNlY3Rpb24ubmFtZSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZWN0cm9uU2VydmljZTogRWxlY3Ryb25TZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgJ21haW4uY29tcG9uZW50LT4nLFxuICAgICAgdGhpcy5wcmVmZXJlbmNlcyxcbiAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgIHRoaXMuZGVmYXVsdHMsXG4gICAgICB0aGlzLmFjdGl2ZVNlY3Rpb25cbiAgICApO1xuXG4gICAgY29uc3QgdmFsaWRhdG9yT3B0aW9uczogYW55ID0ge307XG4gICAgaWYgKHRoaXMub3B0aW9ucy52YWxpZGF0aW9uT24pIHtcbiAgICAgIHZhbGlkYXRvck9wdGlvbnMudXBkYXRlT24gPSB0aGlzLm9wdGlvbnMudmFsaWRhdGlvbk9uO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1Hcm91cHMgPSB7fTtcbiAgICB0aGlzLm9wdGlvbnMuc2VjdGlvbnMuZm9yRWFjaChzID0+IHtcbiAgICAgIGZvcm1Hcm91cHNbcy5uYW1lXSA9IG5ldyBGb3JtR3JvdXAoe30sIHZhbGlkYXRvck9wdGlvbnMpO1xuICAgIH0pO1xuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZm9ybUdyb3VwcywgdmFsaWRhdG9yT3B0aW9ucyk7XG4gICAgY29uc29sZS5sb2coJ21haW4ub2NtcG9uZW50IGZvcm0gaXMnLCB0aGlzLmZvcm0sIHZhbGlkYXRvck9wdGlvbnMpO1xuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBjb25zb2xlLmxvZygnc2F2ZScsIHRoaXMuZm9ybSwgdGhpcy5mb3JtLnZhbGlkLCB0aGlzLmZvcm0udmFsdWUpO1xuICAgIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmb3JtIGlzIHZhbGlkJyk7XG4gICAgICBjb25zdCBwcmVmZXJlbmNlcyA9IHRoaXMuZm9ybS52YWx1ZTtcbiAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZXMnLCBwcmVmZXJlbmNlcyk7XG4gICAgICB0aGlzLnNob3dTYXZlZE1lc3NhZ2UoKTtcbiAgICAgIHRoaXMuZWxlY3Ryb25TZXJ2aWNlLmlwY1JlbmRlcmVyLnNlbmQoJ3NldFByZWZlcmVuY2VzJywgcHJlZmVyZW5jZXMpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtLnBlbmRpbmcpIHtcbiAgICAgIHRoaXMuZm9ybS5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZShzdGF0dXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnc3RhdHVzQ2hhbmdlcyBmb3JtIHdhcyBwZW5kaW5nIGFuZCBub3cgaXMnLCBzdGF0dXMpO1xuICAgICAgICBpZiAoc3RhdHVzID09PSAnVkFMSUQnKSB7XG4gICAgICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UoKTtcbiAgICB9XG4gIH1cblxuICBzaG93U2F2ZWRNZXNzYWdlKCkge1xuICAgIHRoaXMuZmxhc2hNZXNzYWdlID0ge1xuICAgICAgbWVzc2FnZTogJ1N1Y2Nlc3NmdWxseSBzYXZlZC4nLFxuICAgICAgbGV2ZWw6IEZsYXNoTWVzc2FnZUxldmVsLlNVQ0NFU1NcbiAgICB9O1xuICB9XG5cbiAgc2hvd0Vycm9yTWVzc2FnZSgpIHtcbiAgICB0aGlzLmZsYXNoTWVzc2FnZSA9IHtcbiAgICAgIG1lc3NhZ2U6ICdGb3JtIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgbGV2ZWw6IEZsYXNoTWVzc2FnZUxldmVsLkVSUk9SXG4gICAgfTtcbiAgfVxuXG4gIG9uU3VibWl0KGUpIHtcbiAgICBjb25zb2xlLmxvZygnb25zdWJtaXQnLCB0aGlzLmZvcm0udmFsaWQsIHRoaXMuZm9ybSwgdGhpcy5mb3JtLnZhbHVlKTtcbiAgICB0aGlzLnNhdmUoKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2VjdGlvbkZvcm0oc2VjdGlvbikge1xuICAgIHJldHVybiB0aGlzLmZvcm0uZ2V0KHNlY3Rpb24ubmFtZSk7XG4gIH1cblxuICBzZWN0aW9uUHJlZmVyZW5jZXMoc2VjdGlvbikge1xuICAgIHJldHVybiB0aGlzLnByZWZlcmVuY2VzW3NlY3Rpb24ubmFtZV07XG4gIH1cblxuICBncm91cEluQWN0aXZlU2VsZWN0aW9uKGdyb3VwKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5hY3RpdmVTZWN0aW9uICYmXG4gICAgICB0aGlzLmFjdGl2ZVNlY3Rpb24uZm9ybSAmJlxuICAgICAgdGhpcy5hY3RpdmVTZWN0aW9uLmZvcm0uZ3JvdXBzXG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVTZWN0aW9uLmZvcm0uZ3JvdXBzLmZpbmQoZyA9PiBnLmlkID09PSBncm91cC5pZCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19