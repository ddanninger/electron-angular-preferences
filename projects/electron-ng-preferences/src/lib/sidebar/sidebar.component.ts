import { Section, PreferenceOptions } from '../types/preference.types';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input()
  activeSection: Section;
  @Output()
  sectionChange: EventEmitter<Section> = new EventEmitter<Section>();

  @Input()
  preferences: any;
  @Input()
  options: PreferenceOptions;
  @Input()
  defaults: any;

  constructor() {}

  ngOnInit() {
    console.log(
      'sidebar.component',
      this.preferences,
      this.options,
      this.defaults,
      this.activeSection
    );
  }

  selectSection(section: Section) {
    this.activeSection = section;
    this.sectionChange.emit(section);
  }

  onSave() {
    /*preferences[this.state.activeSection][key] = value;

    this.setState({
      preferences: preferences
    });

    ipcRenderer.send('setPreferences', preferences);*/
  }
}
