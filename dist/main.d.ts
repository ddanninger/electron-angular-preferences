import { EventEmitter2 } from 'eventemitter2';
import { ElectronPreferencesOptions } from 'src/types/electron-preferences-options';
export default class ElectronPreferences extends EventEmitter2 {
    options: any;
    _preferences: any;
    prefsWindow: any;
    constructor(options?: ElectronPreferencesOptions);
    readonly dataStore: any;
    readonly defaults: any;
    preferences: any;
    readonly windowOptions: any;
    save(): void;
    value(key: any, value: any): any;
    broadcast(): void;
    show(): void;
}
