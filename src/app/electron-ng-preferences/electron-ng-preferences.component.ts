import { ElectronService } from './services/electron.service';
import { Section, PreferenceOptions } from '@shared/preference.types';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'electron-ng-preferences',
  templateUrl: './electron-ng-preferences.component.html',
  styleUrls: ['./electron-ng-preferences.component.scss']
})
export class ElectronNgPreferencesComponent implements OnInit {
  preferences: any;
  options: PreferenceOptions;
  defaults: any;
  activeSection: Section;
  constructor(private electronService: ElectronService) {
    this.options = this.electronService.ipcRenderer.sendSync(
      'getPreferenceOptions'
    );
    this.preferences = this.electronService.ipcRenderer.sendSync(
      'getPreferences'
    );
    this.defaults = this.electronService.ipcRenderer.sendSync('getDefaults');

    this.options.sections = this.options.sections.filter(
      section => !section.enabled
    );

    this.options.sections.forEach(section => {
      if (!this.preferences[section.name]) {
        this.preferences[section.name] = {};
      }
    });

    if (this.options.sections.length > 0) {
      this.activeSection = this.options.sections[0];
    }

    console.log('electron-ng-preferences construct', this.options, this.preferences, this.defaults, this.activeSection);
  }

  ngOnInit() {
    console.log('electron-ng-preferences init', this.options, this.preferences, this.defaults, this.activeSection);
  }

  sectionChanged(section: Section) {
    this.activeSection = section;
  }
}
