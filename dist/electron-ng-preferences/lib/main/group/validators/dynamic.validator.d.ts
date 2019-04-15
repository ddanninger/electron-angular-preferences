import { ValidationService } from './../../../services/validation.service';
import { ElectronService } from './../../../services/electron.service';
import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
export declare function dynamicValidatorFn(electronService: ElectronService, cdRef: ChangeDetectorRef, validatorName: string): ValidatorFn;
export declare function dynamicAsyncValidatorFn(validationService: ValidationService, cdRef: ChangeDetectorRef, validatorName: string): AsyncValidatorFn;
