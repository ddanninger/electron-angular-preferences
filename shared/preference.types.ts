export interface Section {
  name: string;
  icon: string;
  label: string;
  form: SectionForm;
  enabled: boolean;
}

export interface SectionForm {
  groups: Group[];
}

export interface Group {
  label: string;
  id?: string;
  fields: Field[];
}

export interface Field {
  label?: string;
  name?: string;
  heading?: string;
  content?: string;
  type: string;
  help?: string;
  options?: OptionItem[];
  required?: boolean;
  readonly?: boolean;
  fixedValue?: string;
  errorMessage?: string;
  validator?: string;
  action?: string;
}

export interface OptionItem {
  label: string;
  value: string;
  checked?: boolean;
}

export interface PreferenceOptions {
  sections: Section[];
  validationOn?: string;
  [prop: string]: any;
}
