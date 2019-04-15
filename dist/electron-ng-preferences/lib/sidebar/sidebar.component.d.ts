import { Section, PreferenceOptions } from '../types/preference.types';
import { OnInit, EventEmitter } from '@angular/core';
export declare class SidebarComponent implements OnInit {
    activeSection: Section;
    sectionChange: EventEmitter<Section>;
    preferences: any;
    options: PreferenceOptions;
    defaults: any;
    constructor();
    ngOnInit(): void;
    selectSection(section: Section): void;
    onSave(): void;
}
