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
ElectronNgPreferencesModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMvIiwic291cmNlcyI6WyJsaWIvZWxlY3Ryb24tbmctcHJlZmVyZW5jZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDNUQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBMkJsRSxNQUFNLE9BQU8sMkJBQTJCO0lBQ3RDO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDOzs7WUE1QkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsY0FBYztvQkFDZCxxQkFBcUI7b0JBQ3JCLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQixnQkFBZ0I7b0JBQ2hCLGNBQWM7b0JBQ2QsaUJBQWlCO29CQUNqQixnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQiw4QkFBOEI7aUJBQy9CO2dCQUNELFNBQVMsRUFBRSxDQUFDLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQztnQkFDL0MsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixpQkFBaUI7b0JBQ2pCLGNBQWM7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGFzaE1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL21haW4vZmxhc2gtbWVzc2FnZS9mbGFzaC1tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdG5GaWVsZENvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9ncm91cC9maWVsZHMvYnV0dG9uJztcbmltcG9ydCB7IEJvb2xlYW5Db21wb25lbnQgfSBmcm9tICcuL21haW4vZ3JvdXAvZmllbGRzL2Jvb2xlYW4nO1xuaW1wb3J0IHsgTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9ncm91cC9maWVsZHMvbWVzc2FnZSc7XG5pbXBvcnQgeyBFbGVjdHJvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2VsZWN0cm9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHJvcERvd25Db21wb25lbnQgfSBmcm9tICcuL21haW4vZ3JvdXAvZmllbGRzL2Ryb3Bkb3duJztcbmltcG9ydCB7IFJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL2dyb3VwL2ZpZWxkcy9yYWRpbyc7XG5pbXBvcnQgeyBUZXh0Qm94Q29tcG9uZW50IH0gZnJvbSAnLi9tYWluL2dyb3VwL2ZpZWxkcy90ZXh0Ym94JztcbmltcG9ydCB7IERpcmVjdG9yeUNvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9ncm91cC9maWVsZHMvZGlyZWN0b3J5JztcbmltcG9ydCB7IENoZWNrQm94Q29tcG9uZW50IH0gZnJvbSAnLi9tYWluL2dyb3VwL2ZpZWxkcy9jaGVja2JveCc7XG5pbXBvcnQgeyBHcm91cENvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9ncm91cC9ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYWluQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL21haW4uY29tcG9uZW50JztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbGVjdHJvbk5nUHJlZmVyZW5jZXNDb21wb25lbnQgfSBmcm9tICcuL2VsZWN0cm9uLW5nLXByZWZlcmVuY2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcblxuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQgeyBmYXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBVaVN3aXRjaE1vZHVsZSB9IGZyb20gJ25neC11aS1zd2l0Y2gnO1xuaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1haW5Db21wb25lbnQsXG4gICAgU2lkZWJhckNvbXBvbmVudCxcbiAgICBHcm91cENvbXBvbmVudCxcbiAgICBGbGFzaE1lc3NhZ2VDb21wb25lbnQsXG4gICAgQ2hlY2tCb3hDb21wb25lbnQsXG4gICAgRGlyZWN0b3J5Q29tcG9uZW50LFxuICAgIFRleHRCb3hDb21wb25lbnQsXG4gICAgUmFkaW9Db21wb25lbnQsXG4gICAgRHJvcERvd25Db21wb25lbnQsXG4gICAgTWVzc2FnZUNvbXBvbmVudCxcbiAgICBCb29sZWFuQ29tcG9uZW50LFxuICAgIEJ0bkZpZWxkQ29tcG9uZW50LFxuICAgIEVsZWN0cm9uTmdQcmVmZXJlbmNlc0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtFbGVjdHJvblNlcnZpY2UsIFZhbGlkYXRpb25TZXJ2aWNlXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuICAgIFVpU3dpdGNoTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtFbGVjdHJvbk5nUHJlZmVyZW5jZXNDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEVsZWN0cm9uTmdQcmVmZXJlbmNlc01vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxpYnJhcnkuYWRkKGZhcyk7XG4gIH1cbn1cbiJdfQ==