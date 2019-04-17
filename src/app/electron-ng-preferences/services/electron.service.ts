import { Injectable } from '@angular/core';

import { ipcRenderer, webFrame, remote } from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';

@Injectable({
  providedIn: 'root'
})
export class ElectronService {
  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  remote: typeof remote;
  childProcess: typeof childProcess;
  fs: typeof fs;

  constructor() {
    // Conditional imports
    if (this.isElectron()) {
      // @ts-ignore
      this.ipcRenderer = window.require('electron').ipcRenderer;
      // @ts-ignore
      this.webFrame = window.require('electron').webFrame;
      // @ts-ignore
      this.remote = window.require('electron').remote;
      // @ts-ignore
      this.childProcess = window.require('child_process');
      // @ts-ignore
      this.fs = window.require('fs');
    }
  }

  isElectron() {
    // @ts-ignore
    return window && window.process && window.process.type;
  }

  getOSLocale() {
    if (this.isElectron() && this.remote && this.remote.app) {
      return this.remote.app.getLocale();
    }
  }
}
