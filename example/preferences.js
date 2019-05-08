'use strict';

const electron = require('electron');
const app = electron.app;
const path = require('path');
const os = require('os');
const ElectronPreferences = require('../dist/main').default;
const ping = require('ping');
const { from, interval } = require('rxjs');
const { map, take, switchMap } = require('rxjs/operators');

const preferences = new ElectronPreferences({
  dataStore: path.resolve(__dirname, 'preferences.json'),
  defaults: {
    notes: {
      folder: path.resolve(os.homedir(), 'Notes')
    },
    markdown: {
      auto_format_links: true,
      show_gutter: false
    },
    preview: {
      show: true
    },
    drawer: {
      show: true
    },
    about: {
      first_name: 'hello',
      last_name: 'lastname'
    }
  },
  onLoad: data => {
    console.log('data', data);

    return data;
  },
  afterLoad: ({ preferences }) => {
    console.log('afterLoad', preferences);
  },
  webPreferences: {
    devTools: true
  },
  validators: {
    validate_me: val => {
      console.log('run validator validate_me', val);
      if (val === 'test') {
        return true;
      }
      return false;
    },
    async_ping$: val => {
      return interval(1000).pipe(
        take(1),
        switchMap(() => from(ping.promise.probe(val))),
        map(({ alive, avg }) => {
          console.log('async_ping$', alive, avg);
          if (!alive) {
            console.warn(`Host "${val}" is unreachable`);
            return false;
          }
          return true;
        })
      );
    }
  },
  validationOn: 'submit', // blur | submit
  actions: {
    btn_action: form => {
      console.log('run action btn_action', form);
      return 'My message is huhu';
    },
    btn_action$: form => {
      console.log('run action btn_action$', form);
      const domain = 'www.google.com';
      return interval(1000).pipe(
        take(1),
        switchMap(() => from(ping.promise.probe(domain))),
        map(({ alive, avg }) => {
          console.log('btn_action$', alive, avg);
          if (!alive) {
            return `I couldnt ping ${domain}`;
          }
          return `I pinged ${domain} and avg=${avg}`;
        })
      );
    },
    btn_actionObject$: form => {
      console.log('run action btn_action$', form);
      const domain = 'www.google.com';
      return interval(1000).pipe(
        take(1),
        switchMap(() => from(ping.promise.probe(domain))),
        map(({ alive, avg }) => {
          console.log('btn_action$', alive, avg);
          if (!alive) {
            return { message: `I couldnt ping ${domain}`, color: 'red' };
          }
          return { message: `I pinged ${domain} and avg=${avg}`, color: 'green' };
        })
      );
    }
  },
  sections: [
    {
      name: 'about',
      label: 'About You',
      icon: 'globe',
      form: {
        groups: [
          {
            label: 'About You',
            fields: [
              {
                label: 'First Name',
                name: 'first_name',
                type: 'text',
                help: 'What is your first name?'
              },
              {
                label: 'Last Name',
                name: 'last_name',
                type: 'text',
                fixedValue: os.hostname(),
                readonly: true,
                help: 'What is your last name?'
              },
              {
                label: 'Gender',
                name: 'gender',
                type: 'dropdown',
                options: [
                  { label: 'Male', value: 'male' },
                  { label: 'Female', value: 'female' },
                  { label: 'Unspecified', value: 'unspecified' }
                ],
                help: 'What is your gender?'
              },
              {
                label: 'Age',
                name: 'age',
                type: 'text',
                inputType: 'number'
              },
              {
                label: 'Which of the following foods do you like?',
                name: 'foods',
                type: 'checkbox',
                options: [
                  { label: 'Ice Cream', value: 'ice_cream' },
                  { label: 'Carrots', value: 'carrots' },
                  { label: 'Cake', value: 'cake' },
                  { label: 'Spinach', value: 'spinach' }
                ],
                help: 'Select one or more foods that you like.'
              }
            ]
          }
        ]
      }
    },
    {
      name: 'valandaction',
      label: 'Validator and Actions',
      icon: 'certificate',
      form: {
        groups: [
          {
            label: 'Stuff',
            fields: [
              {
                label: 'Validate me',
                name: 'validate_me',
                type: 'text',
                required: true,
                help: 'field must be "test"',
                validator: 'validate_me',
                errorMessage: 'Field value is not "test"!'
              },
              /*{
                label: 'Async Ping test',
                name: 'async_validate',
                type: 'text',
                required: true,
                help: 'Provide a domain to make a ping test',
                validator: 'async_ping$',
                errorMessage: 'Field value is not "test"!'
              },*/
              {
                label: 'Test button',
                name: 'button',
                type: 'button',
                action: 'btn_action',
                help: 'Click me to do something'
              },
              {
                label: 'Test button$',
                name: 'button',
                type: 'spinner-button',
                action: 'btn_action$',
                help: 'Ping me'
              },
              {
                label: 'Test object button$',
                name: 'button',
                type: 'spinner-button',
                action: 'btn_actionObject$',
                help: 'Ping me'
              }
            ]
          }
        ]
      }
    },
    {
      name: 'notes',
      label: 'Notes',
      icon: 'certificate',
      form: {
        groups: [
          {
            label: 'Stuff',
            fields: [
              {
                label: 'Read notes from folder',
                name: 'folder',
                type: 'directory',
                help: 'The location where your notes will be stored.'
              },
              {
                heading: 'Important Message',
                content:
                  '<p>The quick brown fox jumps over the long white fence. The quick brown fox jumps over the long white fence. The quick brown fox jumps over the long white fence. The quick brown fox jumps over the long white fence.</p>',
                type: 'message'
              }
            ]
          }
        ]
      }
    },
    {
      name: 'space',
      label: 'Other Settings',
      icon: 'folder',
      form: {
        groups: [
          {
            label: 'Other Settings',
            fields: [
              {
                label: 'Enable',
                name: 'enable_debug',
                type: 'boolean',
                help: 'Do you want to enable the debug mode?'
              },
              {
                label: 'Phone Number',
                name: 'phone_number',
                type: 'text',
                help: 'What is your phone number?'
              },
              {
                label: 'Foo or Bar?',
                name: 'foobar',
                type: 'radio',
                options: [
                  { label: 'Foo', value: 'foo' },
                  { label: 'Bar', value: 'bar' },
                  { label: 'FooBar', value: 'foobar' }
                ],
                help: 'Foo? Bar?'
              },
              {
                label: 'Shortcut',
                name: 'shortcut',
                type: 'shortcut',
                help: 'Shortcut field'
              },
            ]
          }
        ]
      }
    }
  ]
});

module.exports = preferences;
