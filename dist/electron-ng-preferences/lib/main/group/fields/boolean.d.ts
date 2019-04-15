import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class BooleanComponent implements OnInit {
    field: any;
    form: FormGroup;
    readonly control: import("@angular/forms").AbstractControl;
    value: any;
    constructor();
    onChange(val: boolean): void;
    ngOnInit(): void;
}
