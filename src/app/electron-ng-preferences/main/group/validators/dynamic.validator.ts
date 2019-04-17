import { ValidationService } from './../../../services/validation.service';
import { ElectronService } from './../../../services/electron.service';
import { ValidatorFn, AbstractControl, AsyncValidatorFn } from '@angular/forms';
import {
  map,
  catchError,
  first,
  take,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';

export function dynamicValidatorFn(
  electronService: ElectronService,
  cdRef: ChangeDetectorRef,
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
      cdRef.markForCheck();
      return { dynamicError: true };
    }
    cdRef.markForCheck();
    return null;
  };
}

export function dynamicAsyncValidatorFn(
  validationService: ValidationService,
  cdRef: ChangeDetectorRef,
  validatorName: string
): AsyncValidatorFn {
  return (control: AbstractControl) => {
    console.log('dynamicalidatorFn', validatorName);
    /*
    const value = control.value;
    return validationService.validateAsync(validatorName, value).pipe(
      map(
        success => {
          console.log('dynamicalidatorFn resulted', success);
          if (!success) {
            return { dynamicError: true };
          }
          return null;
        },
        e => {
          return { dynamicError: true };
        }
      ),
      catchError(() => null),
      take(1)
    );
  };*/
    if (!control.valueChanges) {
      return of(null);
    } else {
      return control.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        take(1),
        switchMap(value =>
          validationService.validateAsync(validatorName, value)
        ),
        map(
          success => {
            console.log('dynamicalidatorFn resulted', success);
            if (!success) {
              return { dynamicError: true };
            }
            return null;
          },
          e => {
            return { dynamicError: true };
          }
        ),
        catchError(() => null),
        tap(val => console.log('dynamicalidatorFn tapped', val)),
        take(1),
        tap(() => {
          control.markAsTouched();
          cdRef.markForCheck();
        })
      );
    }
  };
}
