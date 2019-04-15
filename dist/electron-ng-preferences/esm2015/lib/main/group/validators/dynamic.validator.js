/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { map, catchError, take, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
/**
 * @param {?} electronService
 * @param {?} cdRef
 * @param {?} validatorName
 * @return {?}
 */
export function dynamicValidatorFn(electronService, cdRef, validatorName) {
    return (/**
     * @param {?} control
     * @return {?}
     */
    (control) => {
        console.log('dynamicalidatorFn', validatorName);
        /** @type {?} */
        const value = control.value;
        /** @type {?} */
        const result = electronService.ipcRenderer.sendSync('runValidator', validatorName, value);
        if (!result) {
            cdRef.markForCheck();
            return { dynamicError: true };
        }
        cdRef.markForCheck();
        return null;
    });
}
/**
 * @param {?} validationService
 * @param {?} cdRef
 * @param {?} validatorName
 * @return {?}
 */
export function dynamicAsyncValidatorFn(validationService, cdRef, validatorName) {
    return (/**
     * @param {?} control
     * @return {?}
     */
    (control) => {
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
        }
        else {
            return control.valueChanges.pipe(debounceTime(300), distinctUntilChanged(), take(1), switchMap((/**
             * @param {?} value
             * @return {?}
             */
            value => validationService.validateAsync(validatorName, value))), map((/**
             * @param {?} success
             * @return {?}
             */
            success => {
                console.log('dynamicalidatorFn resulted', success);
                if (!success) {
                    return { dynamicError: true };
                }
                return null;
            }), (/**
             * @param {?} e
             * @return {?}
             */
            e => {
                return { dynamicError: true };
            })), catchError((/**
             * @return {?}
             */
            () => null)), tap((/**
             * @param {?} val
             * @return {?}
             */
            val => console.log('dynamicalidatorFn tapped', val))), take(1), tap((/**
             * @return {?}
             */
            () => {
                control.markAsTouched();
                cdRef.markForCheck();
            })));
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbGVjdHJvbi1uZy1wcmVmZXJlbmNlcy8iLCJzb3VyY2VzIjpbImxpYi9tYWluL2dyb3VwL3ZhbGlkYXRvcnMvZHluYW1pYy52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFDTCxHQUFHLEVBQ0gsVUFBVSxFQUVWLElBQUksRUFDSixZQUFZLEVBQ1osb0JBQW9CLEVBQ3BCLFNBQVMsRUFDVCxHQUFHLEVBQ0osTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7O0FBR3RDLE1BQU0sVUFBVSxrQkFBa0IsQ0FDaEMsZUFBZ0MsRUFDaEMsS0FBd0IsRUFDeEIsYUFBcUI7SUFFckI7Ozs7SUFBTyxDQUFDLE9BQXdCLEVBQUUsRUFBRTtRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLGFBQWEsQ0FBQyxDQUFDOztjQUMxQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUs7O2NBQ3JCLE1BQU0sR0FBRyxlQUFlLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FDakQsY0FBYyxFQUNkLGFBQWEsRUFDYixLQUFLLENBQ047UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3JCLE9BQU8sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDL0I7UUFDRCxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDLEVBQUM7QUFDSixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLHVCQUF1QixDQUNyQyxpQkFBb0MsRUFDcEMsS0FBd0IsRUFDeEIsYUFBcUI7SUFFckI7Ozs7SUFBTyxDQUFDLE9BQXdCLEVBQUUsRUFBRTtRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ2hEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFrQkU7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN6QixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0wsT0FBTyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDOUIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixvQkFBb0IsRUFBRSxFQUN0QixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsU0FBUzs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2hCLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLEVBQ3RELEVBQ0QsR0FBRzs7OztZQUNELE9BQU8sQ0FBQyxFQUFFO2dCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ1osT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQztpQkFDL0I7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDOzs7O1lBQ0QsQ0FBQyxDQUFDLEVBQUU7Z0JBQ0YsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUNoQyxDQUFDLEVBQ0YsRUFDRCxVQUFVOzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUMsRUFDdEIsR0FBRzs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxHQUFHLENBQUMsRUFBQyxFQUN4RCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsR0FBRzs7O1lBQUMsR0FBRyxFQUFFO2dCQUNQLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDeEIsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3ZCLENBQUMsRUFBQyxDQUNILENBQUM7U0FDSDtJQUNILENBQUMsRUFBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRWxlY3Ryb25TZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi8uLi9zZXJ2aWNlcy9lbGVjdHJvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmFsaWRhdG9yRm4sIEFic3RyYWN0Q29udHJvbCwgQXN5bmNWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtcclxuICBtYXAsXHJcbiAgY2F0Y2hFcnJvcixcclxuICBmaXJzdCxcclxuICB0YWtlLFxyXG4gIGRlYm91bmNlVGltZSxcclxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcclxuICBzd2l0Y2hNYXAsXHJcbiAgdGFwXHJcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGR5bmFtaWNWYWxpZGF0b3JGbihcclxuICBlbGVjdHJvblNlcnZpY2U6IEVsZWN0cm9uU2VydmljZSxcclxuICBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgdmFsaWRhdG9yTmFtZTogc3RyaW5nXHJcbik6IFZhbGlkYXRvckZuIHtcclxuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2R5bmFtaWNhbGlkYXRvckZuJywgdmFsaWRhdG9yTmFtZSk7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGNvbnRyb2wudmFsdWU7XHJcbiAgICBjb25zdCByZXN1bHQgPSBlbGVjdHJvblNlcnZpY2UuaXBjUmVuZGVyZXIuc2VuZFN5bmMoXHJcbiAgICAgICdydW5WYWxpZGF0b3InLFxyXG4gICAgICB2YWxpZGF0b3JOYW1lLFxyXG4gICAgICB2YWx1ZVxyXG4gICAgKTtcclxuICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgIGNkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICByZXR1cm4geyBkeW5hbWljRXJyb3I6IHRydWUgfTtcclxuICAgIH1cclxuICAgIGNkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGR5bmFtaWNBc3luY1ZhbGlkYXRvckZuKFxyXG4gIHZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSxcclxuICBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgdmFsaWRhdG9yTmFtZTogc3RyaW5nXHJcbik6IEFzeW5jVmFsaWRhdG9yRm4ge1xyXG4gIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnZHluYW1pY2FsaWRhdG9yRm4nLCB2YWxpZGF0b3JOYW1lKTtcclxuICAgIC8qXHJcbiAgICBjb25zdCB2YWx1ZSA9IGNvbnRyb2wudmFsdWU7XHJcbiAgICByZXR1cm4gdmFsaWRhdGlvblNlcnZpY2UudmFsaWRhdGVBc3luYyh2YWxpZGF0b3JOYW1lLCB2YWx1ZSkucGlwZShcclxuICAgICAgbWFwKFxyXG4gICAgICAgIHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2R5bmFtaWNhbGlkYXRvckZuIHJlc3VsdGVkJywgc3VjY2Vzcyk7XHJcbiAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZHluYW1pY0Vycm9yOiB0cnVlIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGUgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHsgZHluYW1pY0Vycm9yOiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG4gICAgICApLFxyXG4gICAgICBjYXRjaEVycm9yKCgpID0+IG51bGwpLFxyXG4gICAgICB0YWtlKDEpXHJcbiAgICApO1xyXG4gIH07Ki9cclxuICAgIGlmICghY29udHJvbC52YWx1ZUNoYW5nZXMpIHtcclxuICAgICAgcmV0dXJuIG9mKG51bGwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGNvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKDMwMCksXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgICB0YWtlKDEpLFxyXG4gICAgICAgIHN3aXRjaE1hcCh2YWx1ZSA9PlxyXG4gICAgICAgICAgdmFsaWRhdGlvblNlcnZpY2UudmFsaWRhdGVBc3luYyh2YWxpZGF0b3JOYW1lLCB2YWx1ZSlcclxuICAgICAgICApLFxyXG4gICAgICAgIG1hcChcclxuICAgICAgICAgIHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZHluYW1pY2FsaWRhdG9yRm4gcmVzdWx0ZWQnLCBzdWNjZXNzKTtcclxuICAgICAgICAgICAgaWYgKCFzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHsgZHluYW1pY0Vycm9yOiB0cnVlIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGR5bmFtaWNFcnJvcjogdHJ1ZSB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICksXHJcbiAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBudWxsKSxcclxuICAgICAgICB0YXAodmFsID0+IGNvbnNvbGUubG9nKCdkeW5hbWljYWxpZGF0b3JGbiB0YXBwZWQnLCB2YWwpKSxcclxuICAgICAgICB0YWtlKDEpLFxyXG4gICAgICAgIHRhcCgoKSA9PiB7XHJcbiAgICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgICAgICAgIGNkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXX0=