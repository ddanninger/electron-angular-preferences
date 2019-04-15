import { ValidationService } from './../../../services/validation.service';
import { ElectronService } from './../../../services/electron.service';
import { FormGroup } from '@angular/forms';
export declare class BtnFieldComponent {
    private electronService;
    private validationService;
    field: any;
    form: FormGroup;
    message: string;
    constructor(electronService: ElectronService, validationService: ValidationService);
    runAction(): void;
}
