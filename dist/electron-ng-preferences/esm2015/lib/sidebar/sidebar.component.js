/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
export class SidebarComponent {
    constructor() {
        this.sectionChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log('sidebar.component', this.preferences, this.options, this.defaults, this.activeSection);
    }
    /**
     * @param {?} section
     * @return {?}
     */
    selectSection(section) {
        this.activeSection = section;
        this.sectionChange.emit(section);
    }
    /**
     * @return {?}
     */
    onSave() {
        /*preferences[this.state.activeSection][key] = value;
    
        this.setState({
          preferences: preferences
        });
    
        ipcRenderer.send('setPreferences', preferences);*/
    }
}
SidebarComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'sidebar',
                template: "<div\n  class=\"sidebar-section\"\n  *ngFor=\"let section of options?.sections\"\n  [ngClass]=\"{ 'active': activeSection?.name === section.name }\"\n  (click)=\"selectSection(section)\"\n>\n  <fa-icon\n    class=\"section-icon\"\n    [icon]=\"['fas', section.icon]\"\n    [fixedWidth]=\"true\"\n  ></fa-icon>\n  <span class=\"section-label\">{{ section.label }}</span>\n</div>\n",
                styles: [".sidebar-section{height:40px;min-height:40px;max-height:40px;width:199px;min-width:199px;max-width:199px;overflow:hidden;padding:4px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.sidebar-section.active,.sidebar-section:hover{background-color:#f5f5f5}.sidebar-section .section-icon{margin-right:4px;width:30px;max-width:30px;min-width:30px}.sidebar-section .section-label{font-size:12px}"]
            }] }
];
/** @nocollapse */
SidebarComponent.ctorParameters = () => [];
SidebarComponent.propDecorators = {
    activeSection: [{ type: Input }],
    sectionChange: [{ type: Output }],
    preferences: [{ type: Input }],
    options: [{ type: Input }],
    defaults: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SidebarComponent.prototype.activeSection;
    /** @type {?} */
    SidebarComponent.prototype.sectionChange;
    /** @type {?} */
    SidebarComponent.prototype.preferences;
    /** @type {?} */
    SidebarComponent.prototype.options;
    /** @type {?} */
    SidebarComponent.prototype.defaults;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbGVjdHJvbi1uZy1wcmVmZXJlbmNlcy8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUS9FLE1BQU0sT0FBTyxnQkFBZ0I7SUFhM0I7UUFUQSxrQkFBYSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO0lBU3BELENBQUM7Ozs7SUFFaEIsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQ1QsbUJBQW1CLEVBQ25CLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLFFBQVEsRUFDYixJQUFJLENBQUMsYUFBYSxDQUNuQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsT0FBZ0I7UUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELE1BQU07UUFDSjs7Ozs7OzBEQU1rRDtJQUNwRCxDQUFDOzs7WUE1Q0YsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsdVlBQXVDOzthQUV4Qzs7Ozs7NEJBRUUsS0FBSzs0QkFFTCxNQUFNOzBCQUdOLEtBQUs7c0JBRUwsS0FBSzt1QkFFTCxLQUFLOzs7O0lBVE4seUNBQ3VCOztJQUN2Qix5Q0FDbUU7O0lBRW5FLHVDQUNpQjs7SUFDakIsbUNBQzJCOztJQUMzQixvQ0FDYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlY3Rpb24sIFByZWZlcmVuY2VPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMvcHJlZmVyZW5jZS50eXBlcyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnc2lkZWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZWJhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBhY3RpdmVTZWN0aW9uOiBTZWN0aW9uO1xuICBAT3V0cHV0KClcbiAgc2VjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPFNlY3Rpb24+ID0gbmV3IEV2ZW50RW1pdHRlcjxTZWN0aW9uPigpO1xuXG4gIEBJbnB1dCgpXG4gIHByZWZlcmVuY2VzOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG9wdGlvbnM6IFByZWZlcmVuY2VPcHRpb25zO1xuICBASW5wdXQoKVxuICBkZWZhdWx0czogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgICdzaWRlYmFyLmNvbXBvbmVudCcsXG4gICAgICB0aGlzLnByZWZlcmVuY2VzLFxuICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgdGhpcy5kZWZhdWx0cyxcbiAgICAgIHRoaXMuYWN0aXZlU2VjdGlvblxuICAgICk7XG4gIH1cblxuICBzZWxlY3RTZWN0aW9uKHNlY3Rpb246IFNlY3Rpb24pIHtcbiAgICB0aGlzLmFjdGl2ZVNlY3Rpb24gPSBzZWN0aW9uO1xuICAgIHRoaXMuc2VjdGlvbkNoYW5nZS5lbWl0KHNlY3Rpb24pO1xuICB9XG5cbiAgb25TYXZlKCkge1xuICAgIC8qcHJlZmVyZW5jZXNbdGhpcy5zdGF0ZS5hY3RpdmVTZWN0aW9uXVtrZXldID0gdmFsdWU7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZWZlcmVuY2VzOiBwcmVmZXJlbmNlc1xuICAgIH0pO1xuXG4gICAgaXBjUmVuZGVyZXIuc2VuZCgnc2V0UHJlZmVyZW5jZXMnLCBwcmVmZXJlbmNlcyk7Ki9cbiAgfVxufVxuIl19