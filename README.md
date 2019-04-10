# Electron Angular Preferences

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Initializing the Preferences Service](#initializing-the-preferences-service)
- [Interacting with the Preferences Service from the Main Process](#interacting-with-the-preferences-service-from-the-main-process)
- [Interacting with the Preferences Service from the Renderer Process](#interacting-with-the-preferences-service-from-the-renderer-process)
- [Field Types](#field-types)
- [Icons](#icons)

## Inspiration & Base code

Thank you to -> [Electron Preferences](https://github.com/tkambler/electron-preferences) for the inspiration

## Introduction

Provides [Electron](https://electronjs.org/) developers with with a simple, consistent interface for managing user preferences. It includes two primary components:

- A GUI interface within which the users of your application can manage their preferences.
- An API for interacting with the service.

Using the API, developers can:

- Define default preferences
- Create custom validations
- Read / write values on demand
- Define the layout of the preferences window.

To see the library in action, clone this repository and see the demo application that is included within the `example` folder:

    $ git clone https://github.com/ddanninger/electron-angular-preferences.git
    $ cd electron-preferences
    $ npm i
    $ npm run build
    $ npm run example

## Getting Started

### Initializing the Preferences Service

Within your application's main process, create a new instance of the `ElectronPreferences` class, as shown below.

```
const electron = require('electron');
const app = electron.app;
const path = require('path');
const os = require('os');
const ElectronPreferences = require('electron-angular-preferences');

const preferences = new ElectronPreferences({
    /**
     * Where should preferences be saved?
     */
    'dataStore': path.resolve(app.getPath('userData'), 'preferences.json'),
    /**
     * Default values.
     */
    'defaults': {
        'notes': {
            'folder': path.resolve(os.homedir(), 'Notes')
        },
        'markdown': {
            'auto_format_links': true,
            'show_gutter': false
        },
        'preview': {
            'show': true
        },
        'drawer': {
            'show': true
        }
    },
    /**
     * If the `onLoad` method is specified, this function will be called immediately after
     * preferences are loaded for the first time. The return value of this method will be stored as the
     * preferences object.
     */
    'onLoad': (preferences) => {
        // ...
        return preferences;
    },
    /**
     * Extend the BrowserWindow of the Preference Window
     */
     window: {
         'icon': 'path-to-icon.png'
     },
    /**
     * The preferences window is divided into sections. Each section has a label, an icon, and one or
     * more fields associated with it. Each section should also be given a unique ID.
     */
    'sections': [
        {
            'id': 'about',
            'label': 'About You',
            /**
             * See the list of available icons below.
             */
            'icon': 'single-01',
            'form': {
                'groups': [
                    {
                        /**
                         * Group heading is optional.
                         */
                        'label': 'About You',
                        'fields': [
                            {
                                'label': 'First Name',
                                'key': 'first_name',
                                'type': 'text',
                                /**
                                 * Optional text to be displayed beneath the field.
                                 */
                                'help': 'What is your first name?'
                            },
                            {
                                'label': 'Last Name',
                                'key': 'last_name',
                                'type': 'text',
                                'help': 'What is your last name?'
                            },
                            {
                                'label': 'Gender',
                                'key': 'gender',
                                'type': 'dropdown',
                                'options': [
                                    {'label': 'Male', 'value': 'male'},
                                    {'label': 'Female', 'value': 'female'},
                                    {'label': 'Unspecified', 'value': 'unspecified'},
                                ],
                                'help': 'What is your gender?'
                            },
                            {
                                'label': 'Which of the following foods do you like?',
                                'key': 'foods',
                                'type': 'checkbox',
                                'options': [
                                    { 'label': 'Ice Cream', 'value': 'ice_cream' },
                                    { 'label': 'Carrots', 'value': 'carrots' },
                                    { 'label': 'Cake', 'value': 'cake' },
                                    { 'label': 'Spinach', 'value': 'spinach' }
                                ],
                                'help': 'Select one or more foods that you like.'
                            },
                            {
                                'label': 'Coolness',
                                'key': 'coolness',
                                'type': 'slider',
                                'min': 0,
                                'max': 9001
                            },
                            {
                                'label': 'Eye Color',
                               'key': 'eye_color',
                                'type': 'color',
                                'format': 'hex', // can be hex, hsl or rgb
                                'help': 'Your eye color'
                            },
                            {
                                'label': 'Hair Color',
                                'key': 'hair_color',
                                'type': 'color',
                                'format': 'rgb',
                                'help': 'Your hair color'
                            }
                        ]
                    }
                ]
            }
        },
        {
            'id': 'notes',
            'label': 'Notes',
            'icon': 'folder-15',
            'form': {
                'groups': [
                    {
                        'label': 'Stuff',
                        'fields': [
                            {
                                'label': 'Read notes from folder',
                                'key': 'folder',
                                'type': 'directory',
                                'help': 'The location where your notes will be stored.'
                            },
                            {
                                'heading': 'Important Message',
                                'content': '<p>The quick brown fox jumps over the long white fence. The quick brown fox jumps over the long white fence. The quick brown fox jumps over the long white fence. The quick brown fox jumps over the long white fence.</p>',
                                'type': 'message',
                            }
                        ]
                    }
                ]
            }
        },
        {
            'id': 'space',
            'label': 'Other Settings',
            'icon': 'spaceship',
            'form': {
                'groups': [
                    {
                        'label': 'Other Settings',
                        'fields': [
                            {
                                'label': 'Phone Number',
                                'key': 'phone_number',
                                'type': 'text',
                                'help': 'What is your phone number?'
                            },
                            {
                                'label': "Foo or Bar?",
                                'key': 'foobar',
                                'type': 'radio',
                                'options': [
                                    {'label': 'Foo', 'value': 'foo'},
                                    {'label': 'Bar', 'value': 'bar'},
                                    {'label': 'FooBar', 'value': 'foobar'},
                                ],
                                'help': 'Foo? Bar?'
                            }
                        ]
                    }
                ]
            }
        }
    ]
});
```

### Interacting with the Preferences Service from the Main Process

```
// Show the preferences window on demand.
preferences.show();

// Get a value from the preferences data store
const myPref = preferences.value('some.nested.key');

// Save a value within the preferences data store
preferences.value('some.nested.key', 'my-value');

// Subscribing to preference changes.
preferences.on('save', (preferences) => {
    console.log(`Preferences were saved.`, JSON.stringify(preferences, null, 4));
});
```

### Interacting with the Preferences Service from the Renderer Process

```
const { ipcRenderer, remote } = require('electron');

// Fetch the preferences object
const preferences = ipcRenderer.sendSync('getPreferences');

// Display the preferences window
ipcRenderer.send('showPreferences');

// Listen to the `preferencesUpdated` event to be notified when preferences are changed.
ipcRenderer.on('preferencesUpdated', (e, preferences) => {
    console.log('Preferences were updated', preferences);
});

// Instruct the preferences service to update the preferences object from within the renderer.
ipcRenderer.sendSync('setPreferences', { ... });
```

## Field Types

The library includes built-in support for the following field types:

- Text ( text )
- Dropdown ( dropdown )
- Message ( message )
- Folder selection ( directory )
- Checkbox ( checkbox )
- Radio ( radio )
- Switch ( boolean )
- Button ( button )

## Icons

[Font Awesome 5](https://fontawesome.com/icons?d=&s=solid&m=free) Free, Solid icons can be used