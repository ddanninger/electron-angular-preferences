import { WebPreferences, BrowserWindowConstructorOptions } from 'electron';
import { SectionForm } from './preference.types';

export interface ElectronPreferencesValidators {
  // tslint:disable-next-line:ban-types
  [prop: string]: Function;
}

export interface ElectronPreferencesActions {
  // tslint:disable-next-line:ban-types
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
  // tslint:disable-next-line:ban-types
  onLoad?: Function;
  // tslint:disable-next-line:ban-types
  afterLoad?: Function;
  webPreferences: WebPreferences;
  validators?: ElectronPreferencesValidators;
  validationOn?: string;
  messages?: ElectronPreferencesMessages;
  actions?: ElectronPreferencesValidators;
  sections: ElectronPreferencesSections[];
  window?: BrowserWindowConstructorOptions;
}

export interface ElectronPreferencesMessages {
  save?: string;
  saved?: string;
  invalid?: string;
  chooseFolder?: string;
  required?: string;
  validating?: string;
}
