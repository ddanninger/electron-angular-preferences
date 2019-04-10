import { app, BrowserWindow, ipcMain, webContents } from 'electron';
import * as path from 'path';
import * as url from 'url';
import * as fs from 'fs-extra';
import * as _ from 'lodash';
import { EventEmitter2 } from 'eventemitter2';
import ping from 'ping';

/*export function register(): IpcMainApi {
  const api: IpcMainApi = {
    ping: ({ domain, times }) =>
      interval(1000).pipe(
        take(times),
        switchMap(() => from(ping.promise.probe(domain))),
        map(({ alive, avg }: any) => {
          if (!alive) {
            throw new Error(`Host "${domain}" is unreachable`);
          }
          return { domain, value: Number(avg) };
        })
      ),
    quitApp: () => {
      app.quit();
      return EMPTY;
    }
  };

  IPC_MAIN_API_SERVICE.registerApi(api);

  return api;
}*/

export default class ElectronPreferences extends EventEmitter2 {
  options: any;
  // tslint:disable-next-line:variable-name
  _preferences: any;
  prefsWindow: any;

  constructor(options: any = {}) {
    super();

    options = {
      sections: [],
      webPreferences: {
        devTools: false
      },
      ...options
    };

    options.sections.forEach((section, sectionIdx) => {
      section = {
        form: {
          groups: []
        },
        ...section
      };
      section.form.groups = section.form.groups.map((group, groupIdx) => {
        group.id = 'group' + sectionIdx + groupIdx;
        return group;
      });
    });

    this.options = options;

    if (!this.dataStore) {
      throw new Error(`The 'dataStore' option is required.`);
    }

    fs.ensureFileSync(this.dataStore);

    this.preferences = fs.readJsonSync(this.dataStore, {
      throws: false
    });

    if (!this.preferences) {
      this.preferences = this.defaults;
    }

    if (options.onLoad instanceof Function) {
      this.preferences = options.onLoad(this.preferences);
    }

    this.save();

    ipcMain.on('showPreferences', event => {
      this.show();
    });

    ipcMain.on('getPreferenceOptions', event => {
      event.returnValue = this.options;
    });

    ipcMain.on('restoreDefaults', (event, value) => {
      this.preferences = this.defaults;
      this.save();
      this.broadcast();
    });

    ipcMain.on('getDefaults', (event, value) => {
      event.returnValue = this.defaults;
    });

    ipcMain.on('getPreferences', (event, value) => {
      event.returnValue = this.preferences;
    });

    ipcMain.on('setPreferences', (event, value) => {
      this.preferences = value;
      this.save();
      this.broadcast();
      this.emit('save', Object.freeze(_.cloneDeep(this.preferences)));
      event.returnValue = null;
    });

    ipcMain.on('runValidator', (event, name, value) => {
      if (this.options.validators && this.options.validators[name]) {
        const result = this.options.validators[name](value);
        event.returnValue = result;
      }
      event.returnValue = true;
    });

    ipcMain.on('runAction', (event, name, form) => {
      if (this.options.actions && this.options.actions[name]) {
        const result = this.options.validators[name](form);
        event.returnValue = result;
      }
      event.returnValue = null;
    });

    if (_.isFunction(options.afterLoad)) {
      options.afterLoad(this);
    }
  }

  get dataStore() {
    return this.options.dataStore;
  }

  get defaults() {
    return this.options.defaults || {};
  }

  get preferences() {
    return this._preferences;
  }

  set preferences(value) {
    this._preferences = value;
  }

  get windowOptions() {
    return this.options.window || {};
  }

  save() {
    fs.writeJsonSync(this.dataStore, this.preferences, {
      spaces: 4
    });
  }

  value(key, value) {
    if (Array.isArray(key)) {
      // tslint:disable-next-line:no-shadowed-variable
      key.forEach(({ key, value }) => {
        _.set(this.preferences, key, value);
      });
      this.save();
      this.broadcast();
    } else if (!_.isUndefined(key) && !_.isUndefined(value)) {
      _.set(this.preferences, key, value);
      this.save();
      this.broadcast();
    } else if (!_.isUndefined(key)) {
      return _.cloneDeep(_.get(this.preferences, key));
    } else {
      return _.cloneDeep(this.preferences);
    }
  }

  broadcast() {
    webContents.getAllWebContents().forEach(wc => {
      wc.send('preferencesUpdated', this.preferences);
    });
  }

  show() {
    if (this.prefsWindow) {
      return;
    }

    this.prefsWindow = new BrowserWindow({
      title: 'Preferences',
      width: 800,
      maxWidth: 800,
      height: 600,
      maxHeight: 600,
      resizable: false,
      acceptFirstMouse: true,
      maximizable: false,
      backgroundColor: '#E7E7E7',
      show: true,
      webPreferences: this.options.webPreferences,
      ...this.windowOptions
    });

    this.prefsWindow.loadURL(
      url.format({
        pathname: path.join(
          __dirname,
          'electron-angular-preferences/index.html'
        ),
        protocol: 'file:',
        slashes: true
      })
    );

    this.prefsWindow.on('closed', () => {
      this.prefsWindow = null;
    });
  }
}