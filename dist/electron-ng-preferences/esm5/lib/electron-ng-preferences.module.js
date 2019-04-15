/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FlashMessageComponent } from './main/flash-message/flash-message.component';
import { BtnFieldComponent } from './main/group/fields/button';
import { BooleanComponent } from './main/group/fields/boolean';
import { MessageComponent } from './main/group/fields/message';
import { ElectronService } from './services/electron.service';
import { DropDownComponent } from './main/group/fields/dropdown';
import { RadioComponent } from './main/group/fields/radio';
import { TextBoxComponent } from './main/group/fields/textbox';
import { DirectoryComponent } from './main/group/fields/directory';
import { CheckBoxComponent } from './main/group/fields/checkbox';
import { GroupComponent } from './main/group/group.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { ElectronNgPreferencesComponent } from './electron-ng-preferences.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ngx-ui-switch';
import { ValidationService } from './services/validation.service';
var ElectronNgPreferencesModule = /** @class */ (function () {
    function ElectronNgPreferencesModule() {
        library.add(fas);
    }
    ElectronNgPreferencesModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MainComponent,
                        SidebarComponent,
                        GroupComponent,
                        FlashMessageComponent,
                        CheckBoxComponent,
                        DirectoryComponent,
                        TextBoxComponent,
                        RadioComponent,
                        DropDownComponent,
                        MessageComponent,
                        BooleanComponent,
                        BtnFieldComponent,
                        ElectronNgPreferencesComponent
                    ],
                    providers: [ElectronService, ValidationService],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FontAwesomeModule,
                        UiSwitchModule
                    ],
                    exports: [ElectronNgPreferencesComponent]
                },] }
    ];
    /** @nocollapse */
    ElectronNgPreferencesModule.ctorParameters = function () { return []; };
    return ElectronNgPreferencesModule;
}());
export { ElectronNgPreferencesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMvIiwic291cmNlcyI6WyJsaWIvZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDNUQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRWxFO0lBMEJFO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDOztnQkE1QkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsY0FBYzt3QkFDZCxxQkFBcUI7d0JBQ3JCLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixnQkFBZ0I7d0JBQ2hCLGNBQWM7d0JBQ2QsaUJBQWlCO3dCQUNqQixnQkFBZ0I7d0JBQ2hCLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQiw4QkFBOEI7cUJBQy9CO29CQUNELFNBQVMsRUFBRSxDQUFDLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQztvQkFDL0MsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixpQkFBaUI7d0JBQ2pCLGNBQWM7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFLENBQUMsOEJBQThCLENBQUM7aUJBQzFDOzs7O0lBS0Qsa0NBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQUpZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsYXNoTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9mbGFzaC1tZXNzYWdlL2ZsYXNoLW1lc3NhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEJ0bkZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL2dyb3VwL2ZpZWxkcy9idXR0b24nO1xuaW1wb3J0IHsgQm9vbGVhbkNvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9ncm91cC9maWVsZHMvYm9vbGVhbic7XG5pbXBvcnQgeyBNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL2dyb3VwL2ZpZWxkcy9tZXNzYWdlJztcbmltcG9ydCB7IEVsZWN0cm9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZWxlY3Ryb24uc2VydmljZSc7XG5pbXBvcnQgeyBEcm9wRG93bkNvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9ncm91cC9maWVsZHMvZHJvcGRvd24nO1xuaW1wb3J0IHsgUmFkaW9Db21wb25lbnQgfSBmcm9tICcuL21haW4vZ3JvdXAvZmllbGRzL3JhZGlvJztcbmltcG9ydCB7IFRleHRCb3hDb21wb25lbnQgfSBmcm9tICcuL21haW4vZ3JvdXAvZmllbGRzL3RleHRib3gnO1xuaW1wb3J0IHsgRGlyZWN0b3J5Q29tcG9uZW50IH0gZnJvbSAnLi9tYWluL2dyb3VwL2ZpZWxkcy9kaXJlY3RvcnknO1xuaW1wb3J0IHsgQ2hlY2tCb3hDb21wb25lbnQgfSBmcm9tICcuL21haW4vZ3JvdXAvZmllbGRzL2NoZWNrYm94JztcbmltcG9ydCB7IEdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL2dyb3VwL2dyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1haW5Db21wb25lbnQgfSBmcm9tICcuL21haW4vbWFpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVsZWN0cm9uTmdQcmVmZXJlbmNlc0NvbXBvbmVudCB9IGZyb20gJy4vZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMuY29tcG9uZW50JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcbmltcG9ydCB7IGZhcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFVpU3dpdGNoTW9kdWxlIH0gZnJvbSAnbmd4LXVpLXN3aXRjaCc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTWFpbkNvbXBvbmVudCxcbiAgICBTaWRlYmFyQ29tcG9uZW50LFxuICAgIEdyb3VwQ29tcG9uZW50LFxuICAgIEZsYXNoTWVzc2FnZUNvbXBvbmVudCxcbiAgICBDaGVja0JveENvbXBvbmVudCxcbiAgICBEaXJlY3RvcnlDb21wb25lbnQsXG4gICAgVGV4dEJveENvbXBvbmVudCxcbiAgICBSYWRpb0NvbXBvbmVudCxcbiAgICBEcm9wRG93bkNvbXBvbmVudCxcbiAgICBNZXNzYWdlQ29tcG9uZW50LFxuICAgIEJvb2xlYW5Db21wb25lbnQsXG4gICAgQnRuRmllbGRDb21wb25lbnQsXG4gICAgRWxlY3Ryb25OZ1ByZWZlcmVuY2VzQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW0VsZWN0cm9uU2VydmljZSwgVmFsaWRhdGlvblNlcnZpY2VdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgRm9udEF3ZXNvbWVNb2R1bGUsXG4gICAgVWlTd2l0Y2hNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0VsZWN0cm9uTmdQcmVmZXJlbmNlc0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgRWxlY3Ryb25OZ1ByZWZlcmVuY2VzTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGlicmFyeS5hZGQoZmFzKTtcbiAgfVxufVxuIl19