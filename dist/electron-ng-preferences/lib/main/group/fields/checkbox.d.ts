import { FormGroup } from '@angular/forms';
export declare class CheckBoxComponent {
    field: any;
    form: FormGroup;
    readonly isValid: boolean;
    readonly isDirty: boolean;
    value: any;
    readonly control: import("@angular/forms").AbstractControl;
    onChecklistChange(checked: any, opt: any): void;
    flattenValues(checkboxes: any): any;
}
