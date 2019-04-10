import { ElectronService } from './electron.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import rxIpc from 'rx-ipc-electron-six/lib/renderer'; // not working @todo find a better way

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  rxIpc: any;
  constructor(private electronService: ElectronService) {
    this.rxIpc = (window as any).require(
      'rx-ipc-electron-six/lib/renderer'
    ).default;
    console.log('ValidationService', this.rxIpc);
  }

  validateAsync(name: string, val: string): Observable<any> {
    return this.rxIpc.runCommand('runObservableValidator', null, name, val);
  }

  actionAsync(name: string, form: any): Observable<any> {
    return this.rxIpc.runCommand('runObservableAction', null, name, form);
  }
}
