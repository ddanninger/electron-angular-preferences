/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.sectionChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SidebarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log('sidebar.component', this.preferences, this.options, this.defaults, this.activeSection);
    };
    /**
     * @param {?} section
     * @return {?}
     */
    SidebarComponent.prototype.selectSection = /**
     * @param {?} section
     * @return {?}
     */
    function (section) {
        this.activeSection = section;
        this.sectionChange.emit(section);
    };
    /**
     * @return {?}
     */
    SidebarComponent.prototype.onSave = /**
     * @return {?}
     */
    function () {
        /*preferences[this.state.activeSection][key] = value;
    
        this.setState({
          preferences: preferences
        });
    
        ipcRenderer.send('setPreferences', preferences);*/
    };
    SidebarComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'sidebar',
                    template: "<div\n  class=\"sidebar-section\"\n  *ngFor=\"let section of options?.sections\"\n  [ngClass]=\"{ 'active': activeSection?.name === section.name }\"\n  (click)=\"selectSection(section)\"\n>\n  <fa-icon\n    class=\"section-icon\"\n    [icon]=\"['fas', section.icon]\"\n    [fixedWidth]=\"true\"\n  ></fa-icon>\n  <span class=\"section-label\">{{ section.label }}</span>\n</div>\n",
                    styles: [".sidebar-section{height:40px;min-height:40px;max-height:40px;width:199px;min-width:199px;max-width:199px;overflow:hidden;padding:4px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.sidebar-section.active,.sidebar-section:hover{background-color:#f5f5f5}.sidebar-section .section-icon{margin-right:4px;width:30px;max-width:30px;min-width:30px}.sidebar-section .section-label{font-size:12px}"]
                }] }
    ];
    /** @nocollapse */
    SidebarComponent.ctorParameters = function () { return []; };
    SidebarComponent.propDecorators = {
        activeSection: [{ type: Input }],
        sectionChange: [{ type: Output }],
        preferences: [{ type: Input }],
        options: [{ type: Input }],
        defaults: [{ type: Input }]
    };
    return SidebarComponent;
}());
export { SidebarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbGVjdHJvbi1uZy1wcmVmZXJlbmNlcy8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBbUJFO1FBVEEsa0JBQWEsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQVNwRCxDQUFDOzs7O0lBRWhCLG1DQUFROzs7SUFBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQ1QsbUJBQW1CLEVBQ25CLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLFFBQVEsRUFDYixJQUFJLENBQUMsYUFBYSxDQUNuQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCx3Q0FBYTs7OztJQUFiLFVBQWMsT0FBZ0I7UUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELGlDQUFNOzs7SUFBTjtRQUNFOzs7Ozs7MERBTWtEO0lBQ3BELENBQUM7O2dCQTVDRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxTQUFTO29CQUNuQix1WUFBdUM7O2lCQUV4Qzs7Ozs7Z0NBRUUsS0FBSztnQ0FFTCxNQUFNOzhCQUdOLEtBQUs7MEJBRUwsS0FBSzsyQkFFTCxLQUFLOztJQTZCUix1QkFBQztDQUFBLEFBN0NELElBNkNDO1NBdkNZLGdCQUFnQjs7O0lBQzNCLHlDQUN1Qjs7SUFDdkIseUNBQ21FOztJQUVuRSx1Q0FDaUI7O0lBQ2pCLG1DQUMyQjs7SUFDM0Isb0NBQ2MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWN0aW9uLCBQcmVmZXJlbmNlT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzL3ByZWZlcmVuY2UudHlwZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NpZGViYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZGViYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgYWN0aXZlU2VjdGlvbjogU2VjdGlvbjtcbiAgQE91dHB1dCgpXG4gIHNlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxTZWN0aW9uPiA9IG5ldyBFdmVudEVtaXR0ZXI8U2VjdGlvbj4oKTtcblxuICBASW5wdXQoKVxuICBwcmVmZXJlbmNlczogYW55O1xuICBASW5wdXQoKVxuICBvcHRpb25zOiBQcmVmZXJlbmNlT3B0aW9ucztcbiAgQElucHV0KClcbiAgZGVmYXVsdHM6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2coXG4gICAgICAnc2lkZWJhci5jb21wb25lbnQnLFxuICAgICAgdGhpcy5wcmVmZXJlbmNlcyxcbiAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgIHRoaXMuZGVmYXVsdHMsXG4gICAgICB0aGlzLmFjdGl2ZVNlY3Rpb25cbiAgICApO1xuICB9XG5cbiAgc2VsZWN0U2VjdGlvbihzZWN0aW9uOiBTZWN0aW9uKSB7XG4gICAgdGhpcy5hY3RpdmVTZWN0aW9uID0gc2VjdGlvbjtcbiAgICB0aGlzLnNlY3Rpb25DaGFuZ2UuZW1pdChzZWN0aW9uKTtcbiAgfVxuXG4gIG9uU2F2ZSgpIHtcbiAgICAvKnByZWZlcmVuY2VzW3RoaXMuc3RhdGUuYWN0aXZlU2VjdGlvbl1ba2V5XSA9IHZhbHVlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmVmZXJlbmNlczogcHJlZmVyZW5jZXNcbiAgICB9KTtcblxuICAgIGlwY1JlbmRlcmVyLnNlbmQoJ3NldFByZWZlcmVuY2VzJywgcHJlZmVyZW5jZXMpOyovXG4gIH1cbn1cbiJdfQ==