import { ElectronNgPreferencesModule } from 'electron-ng-preferences';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ElectronNgPreferencesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
