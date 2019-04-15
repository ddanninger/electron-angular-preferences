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
    function (control) {
        console.log('dynamicalidatorFn', validatorName);
        /** @type {?} */
        var value = control.value;
        /** @type {?} */
        var result = electronService.ipcRenderer.sendSync('runValidator', validatorName, value);
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
    function (control) {
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
            function (value) {
                return validationService.validateAsync(validatorName, value);
            })), map((/**
             * @param {?} success
             * @return {?}
             */
            function (success) {
                console.log('dynamicalidatorFn resulted', success);
                if (!success) {
                    return { dynamicError: true };
                }
                return null;
            }), (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                return { dynamicError: true };
            })), catchError((/**
             * @return {?}
             */
            function () { return null; })), tap((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return console.log('dynamicalidatorFn tapped', val); })), take(1), tap((/**
             * @return {?}
             */
            function () {
                control.markAsTouched();
                cdRef.markForCheck();
            })));
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbGVjdHJvbi1uZy1wcmVmZXJlbmNlcy8iLCJzb3VyY2VzIjpbImxpYi9tYWluL2dyb3VwL3ZhbGlkYXRvcnMvZHluYW1pYy52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFDTCxHQUFHLEVBQ0gsVUFBVSxFQUVWLElBQUksRUFDSixZQUFZLEVBQ1osb0JBQW9CLEVBQ3BCLFNBQVMsRUFDVCxHQUFHLEVBQ0osTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7O0FBR3RDLE1BQU0sVUFBVSxrQkFBa0IsQ0FDaEMsZUFBZ0MsRUFDaEMsS0FBd0IsRUFDeEIsYUFBcUI7SUFFckI7Ozs7SUFBTyxVQUFDLE9BQXdCO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsYUFBYSxDQUFDLENBQUM7O1lBQzFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSzs7WUFDckIsTUFBTSxHQUFHLGVBQWUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUNqRCxjQUFjLEVBQ2QsYUFBYSxFQUNiLEtBQUssQ0FDTjtRQUNELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDckIsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUMvQjtRQUNELEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUMsRUFBQztBQUNKLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsdUJBQXVCLENBQ3JDLGlCQUFvQyxFQUNwQyxLQUF3QixFQUN4QixhQUFxQjtJQUVyQjs7OztJQUFPLFVBQUMsT0FBd0I7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNoRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBa0JFO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDekIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNMLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQzlCLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsb0JBQW9CLEVBQUUsRUFDdEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFNBQVM7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2IsT0FBQSxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQztZQUFyRCxDQUFxRCxFQUN0RCxFQUNELEdBQUc7Ozs7WUFDRCxVQUFBLE9BQU87Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDWixPQUFPLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDO2lCQUMvQjtnQkFDRCxPQUFPLElBQUksQ0FBQztZQUNkLENBQUM7Ozs7WUFDRCxVQUFBLENBQUM7Z0JBQ0MsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUNoQyxDQUFDLEVBQ0YsRUFDRCxVQUFVOzs7WUFBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksRUFBQyxFQUN0QixHQUFHOzs7O1lBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLEdBQUcsQ0FBQyxFQUE1QyxDQUE0QyxFQUFDLEVBQ3hELElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxHQUFHOzs7WUFBQztnQkFDRixPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3hCLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN2QixDQUFDLEVBQUMsQ0FDSCxDQUFDO1NBQ0g7SUFDSCxDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uLy4uL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IEVsZWN0cm9uU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vc2VydmljZXMvZWxlY3Ryb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRvckZuLCBBYnN0cmFjdENvbnRyb2wsIEFzeW5jVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7XHJcbiAgbWFwLFxyXG4gIGNhdGNoRXJyb3IsXHJcbiAgZmlyc3QsXHJcbiAgdGFrZSxcclxuICBkZWJvdW5jZVRpbWUsXHJcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXHJcbiAgc3dpdGNoTWFwLFxyXG4gIHRhcFxyXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkeW5hbWljVmFsaWRhdG9yRm4oXHJcbiAgZWxlY3Ryb25TZXJ2aWNlOiBFbGVjdHJvblNlcnZpY2UsXHJcbiAgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gIHZhbGlkYXRvck5hbWU6IHN0cmluZ1xyXG4pOiBWYWxpZGF0b3JGbiB7XHJcbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdkeW5hbWljYWxpZGF0b3JGbicsIHZhbGlkYXRvck5hbWUpO1xyXG4gICAgY29uc3QgdmFsdWUgPSBjb250cm9sLnZhbHVlO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gZWxlY3Ryb25TZXJ2aWNlLmlwY1JlbmRlcmVyLnNlbmRTeW5jKFxyXG4gICAgICAncnVuVmFsaWRhdG9yJyxcclxuICAgICAgdmFsaWRhdG9yTmFtZSxcclxuICAgICAgdmFsdWVcclxuICAgICk7XHJcbiAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICBjZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgcmV0dXJuIHsgZHluYW1pY0Vycm9yOiB0cnVlIH07XHJcbiAgICB9XHJcbiAgICBjZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkeW5hbWljQXN5bmNWYWxpZGF0b3JGbihcclxuICB2YWxpZGF0aW9uU2VydmljZTogVmFsaWRhdGlvblNlcnZpY2UsXHJcbiAgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gIHZhbGlkYXRvck5hbWU6IHN0cmluZ1xyXG4pOiBBc3luY1ZhbGlkYXRvckZuIHtcclxuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2R5bmFtaWNhbGlkYXRvckZuJywgdmFsaWRhdG9yTmFtZSk7XHJcbiAgICAvKlxyXG4gICAgY29uc3QgdmFsdWUgPSBjb250cm9sLnZhbHVlO1xyXG4gICAgcmV0dXJuIHZhbGlkYXRpb25TZXJ2aWNlLnZhbGlkYXRlQXN5bmModmFsaWRhdG9yTmFtZSwgdmFsdWUpLnBpcGUoXHJcbiAgICAgIG1hcChcclxuICAgICAgICBzdWNjZXNzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdkeW5hbWljYWxpZGF0b3JGbiByZXN1bHRlZCcsIHN1Y2Nlc3MpO1xyXG4gICAgICAgICAgaWYgKCFzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGR5bmFtaWNFcnJvcjogdHJ1ZSB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlID0+IHtcclxuICAgICAgICAgIHJldHVybiB7IGR5bmFtaWNFcnJvcjogdHJ1ZSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgKSxcclxuICAgICAgY2F0Y2hFcnJvcigoKSA9PiBudWxsKSxcclxuICAgICAgdGFrZSgxKVxyXG4gICAgKTtcclxuICB9OyovXHJcbiAgICBpZiAoIWNvbnRyb2wudmFsdWVDaGFuZ2VzKSB7XHJcbiAgICAgIHJldHVybiBvZihudWxsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBjb250cm9sLnZhbHVlQ2hhbmdlcy5waXBlKFxyXG4gICAgICAgIGRlYm91bmNlVGltZSgzMDApLFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgdGFrZSgxKSxcclxuICAgICAgICBzd2l0Y2hNYXAodmFsdWUgPT5cclxuICAgICAgICAgIHZhbGlkYXRpb25TZXJ2aWNlLnZhbGlkYXRlQXN5bmModmFsaWRhdG9yTmFtZSwgdmFsdWUpXHJcbiAgICAgICAgKSxcclxuICAgICAgICBtYXAoXHJcbiAgICAgICAgICBzdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2R5bmFtaWNhbGlkYXRvckZuIHJlc3VsdGVkJywgc3VjY2Vzcyk7XHJcbiAgICAgICAgICAgIGlmICghc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7IGR5bmFtaWNFcnJvcjogdHJ1ZSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyBkeW5hbWljRXJyb3I6IHRydWUgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApLFxyXG4gICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gbnVsbCksXHJcbiAgICAgICAgdGFwKHZhbCA9PiBjb25zb2xlLmxvZygnZHluYW1pY2FsaWRhdG9yRm4gdGFwcGVkJywgdmFsKSksXHJcbiAgICAgICAgdGFrZSgxKSxcclxuICAgICAgICB0YXAoKCkgPT4ge1xyXG4gICAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICAgICAgICBjZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIl19