import { ElectronService } from './electron.service';
import { Observable } from 'rxjs';
export declare class ValidationService {
    private electronService;
    rxIpc: any;
    constructor(electronService: ElectronService);
    validateAsync(name: string, val: string): Observable<boolean>;
    actionAsync(name: string, form: any): Observable<any>;
}
