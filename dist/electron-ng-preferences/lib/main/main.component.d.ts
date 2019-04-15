import { FlashMessage } from './flash-message/flash-message.component';
import { ElectronService } from './../services/electron.service';
import { OnInit } from '@angular/core';
import { PreferenceOptions, Section } from '../types/preference.types';
import { FormGroup } from '@angular/forms';
export declare class MainComponent implements OnInit {
    private electronService;
    activeSection: Section;
    preferences: any;
    options: PreferenceOptions;
    defaults: any;
    form: FormGroup;
    flashMessage: FlashMessage;
    readonly prefs: any;
    readonly activeSectionForm: import("@angular/forms").AbstractControl;
    constructor(electronService: ElectronService);
    ngOnInit(): void;
    save(): void;
    showSavedMessage(): void;
    showErrorMessage(): void;
    onSubmit(e: any): boolean;
    sectionForm(section: any): import("@angular/forms").AbstractControl;
    sectionPreferences(section: any): any;
    groupInActiveSelection(group: any): boolean;
}
