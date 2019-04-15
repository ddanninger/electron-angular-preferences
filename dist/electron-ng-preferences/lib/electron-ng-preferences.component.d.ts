import { ElectronService } from './services/electron.service';
import { Section, PreferenceOptions } from './types/preference.types';
import { OnInit } from '@angular/core';
export declare class ElectronNgPreferencesComponent implements OnInit {
    private electronService;
    preferences: any;
    options: PreferenceOptions;
    defaults: any;
    activeSection: Section;
    constructor(electronService: ElectronService);
    ngOnInit(): void;
    sectionChanged(section: Section): void;
}
