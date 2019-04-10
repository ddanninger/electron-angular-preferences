import { rxIpc } from 'rx-ipc-electron/lib/renderer';
import { ElectronService } from './electron.service';
import { Injectable } from '@angular/core';
// import { IPC_MAIN_API_SERVICE } from '../rpc/definition';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  ipcMainApiClient: any;
  ipcMainPingMethod: any;
  constructor(electronService: ElectronService) {}

  validateAsync(name: string, val: string): Observable<any> {
    return rxIpc.runCommand('create-observable', null, 1, 2, 3);
    /*return this.ipcMainPingMethod({
      domain: 'www.provotive.com',
      times: Number(1)
    });*/
    return of({});
  }
}
