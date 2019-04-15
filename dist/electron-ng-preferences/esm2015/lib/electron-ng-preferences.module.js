/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class ElectronNgPreferencesModule {
    constructor() {
        library.add(fas);
    }
}
ElectronNgPreferencesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MainComponent,
                    SidebarComponent,
                    GroupComponent,
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
ElectronNgPreferencesModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMvIiwic291cmNlcyI6WyJsaWIvZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDNUQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBMEJsRSxNQUFNLE9BQU8sMkJBQTJCO0lBQ3RDO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDOzs7WUEzQkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsY0FBYztvQkFDZCxpQkFBaUI7b0JBQ2pCLGtCQUFrQjtvQkFDbEIsZ0JBQWdCO29CQUNoQixjQUFjO29CQUNkLGlCQUFpQjtvQkFDakIsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsOEJBQThCO2lCQUMvQjtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxlQUFlLEVBQUUsaUJBQWlCLENBQUM7Z0JBQy9DLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsaUJBQWlCO29CQUNqQixjQUFjO2lCQUNmO2dCQUNELE9BQU8sRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnRuRmllbGRDb21wb25lbnQgfSBmcm9tICcuL21haW4vZ3JvdXAvZmllbGRzL2J1dHRvbic7XG5pbXBvcnQgeyBCb29sZWFuQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL2dyb3VwL2ZpZWxkcy9ib29sZWFuJztcbmltcG9ydCB7IE1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL21haW4vZ3JvdXAvZmllbGRzL21lc3NhZ2UnO1xuaW1wb3J0IHsgRWxlY3Ryb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9lbGVjdHJvbi5zZXJ2aWNlJztcbmltcG9ydCB7IERyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL2dyb3VwL2ZpZWxkcy9kcm9wZG93bic7XG5pbXBvcnQgeyBSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9ncm91cC9maWVsZHMvcmFkaW8nO1xuaW1wb3J0IHsgVGV4dEJveENvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9ncm91cC9maWVsZHMvdGV4dGJveCc7XG5pbXBvcnQgeyBEaXJlY3RvcnlDb21wb25lbnQgfSBmcm9tICcuL21haW4vZ3JvdXAvZmllbGRzL2RpcmVjdG9yeSc7XG5pbXBvcnQgeyBDaGVja0JveENvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9ncm91cC9maWVsZHMvY2hlY2tib3gnO1xuaW1wb3J0IHsgR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL21haW4vZ3JvdXAvZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFpbkNvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9tYWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWxlY3Ryb25OZ1ByZWZlcmVuY2VzQ29tcG9uZW50IH0gZnJvbSAnLi9lbGVjdHJvbi1uZy1wcmVmZXJlbmNlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5cbmltcG9ydCB7IGxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IHsgZmFzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVWlTd2l0Y2hNb2R1bGUgfSBmcm9tICduZ3gtdWktc3dpdGNoJztcbmltcG9ydCB7IFZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNYWluQ29tcG9uZW50LFxuICAgIFNpZGViYXJDb21wb25lbnQsXG4gICAgR3JvdXBDb21wb25lbnQsXG4gICAgQ2hlY2tCb3hDb21wb25lbnQsXG4gICAgRGlyZWN0b3J5Q29tcG9uZW50LFxuICAgIFRleHRCb3hDb21wb25lbnQsXG4gICAgUmFkaW9Db21wb25lbnQsXG4gICAgRHJvcERvd25Db21wb25lbnQsXG4gICAgTWVzc2FnZUNvbXBvbmVudCxcbiAgICBCb29sZWFuQ29tcG9uZW50LFxuICAgIEJ0bkZpZWxkQ29tcG9uZW50LFxuICAgIEVsZWN0cm9uTmdQcmVmZXJlbmNlc0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtFbGVjdHJvblNlcnZpY2UsIFZhbGlkYXRpb25TZXJ2aWNlXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuICAgIFVpU3dpdGNoTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtFbGVjdHJvbk5nUHJlZmVyZW5jZXNDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEVsZWN0cm9uTmdQcmVmZXJlbmNlc01vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxpYnJhcnkuYWRkKGZhcyk7XG4gIH1cbn1cbiJdfQ==