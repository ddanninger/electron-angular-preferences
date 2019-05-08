import { ShortcutComponent } from './main/group/fields/shortcut';
import { LaddaBtnFieldComponent } from './main/group/fields/ladda-button';
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
import { LaddaModule } from 'angular2-ladda';

@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    GroupComponent,
    FlashMessageComponent,
    CheckBoxComponent,
    ShortcutComponent,
    DirectoryComponent,
    TextBoxComponent,
    RadioComponent,
    DropDownComponent,
    MessageComponent,
    BooleanComponent,
    BtnFieldComponent,
    LaddaBtnFieldComponent,
    ElectronNgPreferencesComponent
  ],
  providers: [ElectronService, ValidationService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    UiSwitchModule,
    LaddaModule
  ],
  exports: [ElectronNgPreferencesComponent]
})
export class ElectronNgPreferencesModule {
  constructor() {
    library.add(fas);
  }
}
