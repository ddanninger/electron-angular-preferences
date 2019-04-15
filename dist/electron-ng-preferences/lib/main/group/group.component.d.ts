import { ValidationService } from './../../services/validation.service';
import { ElectronService } from './../../services/electron.service';
import { Group } from './../../types/preference.types';
import { OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class GroupComponent implements OnInit {
    private electronService;
    private validationService;
    private cdRef;
    group: Group;
    preferences: any;
    form: FormGroup;
    validationOn: string;
    internalForm: FormGroup;
    readonly fields: import("../../types/preference.types").Field[];
    constructor(electronService: ElectronService, validationService: ValidationService, cdRef: ChangeDetectorRef);
    ngOnInit(): void;
}
