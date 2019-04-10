import { ValidationService } from './../../../services/validation.service';
import { ElectronService } from './../../../services/electron.service';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { map } from 'rxjs/operators';

export function dynamicValidatorFn(
  electronService: ElectronService,
  validatorName: string
): ValidatorFn {
  return (control: AbstractControl) => {
    console.log('dynamicalidatorFn', validatorName);
    const value = control.value;
    const result = electronService.ipcRenderer.sendSync(
      'runValidator',
      validatorName,
      value
    );
    if (!result) {
      return { dynamicError: true };
    }
    return null;
  };
}

export function dynamicAsyncValidatorFn(
  validationService: ValidationService,
  validatorName: string
): ValidatorFn {
  return (control: AbstractControl) => {
    console.log('dynamicalidatorFn', validatorName);
    const value = control.value;
    return validationService.validateAsync(validatorName, value).pipe(
      map(res => {
        console.log('dynamicAsyncValidatorFn validateAsync', res);
        return res ? null : { dynamicError: true };
      })
    );
  };
}
