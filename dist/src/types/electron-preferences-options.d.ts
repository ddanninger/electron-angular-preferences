import { WebPreferences, BrowserWindowConstructorOptions } from 'electron';
import { SectionForm } from 'projects/electron-ng-preferences/src/lib/types/preference.types';
export interface ElectronPreferencesValidators {
    [prop: string]: Function;
}
export interface ElectronPreferencesActions {
    [prop: string]: Function;
}
export interface ElectronPreferencesSections {
    name: string;
    label: string;
    icon: string;
    form: SectionForm;
}
export interface ElectronPreferencesOptions {
    dataStore: string;
    defaults: any;
    onLoad?: Function;
    afterLoad?: Function;
    webPreferences: WebPreferences;
    validators?: ElectronPreferencesValidators;
    validationOn?: string;
    actions?: ElectronPreferencesValidators;
    sections: ElectronPreferencesSections[];
    window: BrowserWindowConstructorOptions;
}
