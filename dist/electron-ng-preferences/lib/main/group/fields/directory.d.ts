import { FormGroup } from '@angular/forms';
import { ElectronService } from '../../../services/electron.service';
export declare class DirectoryComponent {
    private electronService;
    field: any;
    form: FormGroup;
    dialog: any;
    selectedFolder: string;
    btnLabel: string;
    readonly isValid: boolean;
    readonly isDirty: boolean;
    readonly value: any;
    readonly control: import("@angular/forms").AbstractControl;
    constructor(electronService: ElectronService);
    chooseFolder(): void;
}
