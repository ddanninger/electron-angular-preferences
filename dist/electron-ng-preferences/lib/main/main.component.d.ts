import { OnInit } from '@angular/core';
import { PreferenceOptions, Section } from '../types/preference.types';
import { FormGroup, FormBuilder } from '@angular/forms';
export declare class MainComponent implements OnInit {
    private fb;
    activeSection: Section;
    preferences: any;
    options: PreferenceOptions;
    defaults: any;
    form: FormGroup;
    readonly prefs: any;
    readonly activeSectionForm: import("@angular/forms").AbstractControl;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    save(): void;
    onSubmit(): void;
}
