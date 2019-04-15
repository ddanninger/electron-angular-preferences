"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var fs = require("fs-extra");
var _ = require("lodash");
var eventemitter2_1 = require("eventemitter2");
var rxjs_1 = require("rxjs");
var main_1 = require("rx-ipc-electron-six/lib/main");
var ElectronPreferences = /** @class */ (function (_super) {
    __extends(ElectronPreferences, _super);
    function ElectronPreferences(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        options = __assign({ sections: [], webPreferences: {
                devTools: false
            } }, options);
        options.sections.forEach(function (section, sectionIdx) {
            section = __assign({ form: {
                    groups: []
                } }, section);
            section.form.groups = section.form.groups.map(function (group, groupIdx) {
                group.id = 'group' + sectionIdx + groupIdx;
                return group;
            });
        });
        _this.options = options;
        if (!_this.dataStore) {
            throw new Error("The 'dataStore' option is required.");
        }
        fs.ensureFileSync(_this.dataStore);
        _this.preferences = fs.readJsonSync(_this.dataStore, {
            throws: false
        });
        if (!_this.preferences) {
            _this.preferences = _this.defaults;
        }
        else {
            // if config file gets populated from other sources as well the file exists already therefore
            // set default properties before preferences
            _this.preferences = _.merge(_this.defaults, _this.preferences);
        }
        if (options.onLoad instanceof Function) {
            _this.preferences = options.onLoad(_this.preferences);
        }
        _this.save();
        electron_1.ipcMain.on('showPreferences', function (event) {
            _this.show();
        });
        electron_1.ipcMain.on('getPreferenceOptions', function (event) {
            event.returnValue = _this.options;
        });
        electron_1.ipcMain.on('restoreDefaults', function (event, value) {
            _this.preferences = _this.defaults;
            _this.save();
            _this.broadcast();
        });
        electron_1.ipcMain.on('getDefaults', function (event, value) {
            event.returnValue = _this.defaults;
        });
        electron_1.ipcMain.on('getPreferences', function (event, value) {
            event.returnValue = _this.preferences;
        });
        electron_1.ipcMain.on('setPreferences', function (event, value) {
            console.log('setPreferences', value);
            _this.preferences = __assign({}, _this.preferences, value);
            _this.save();
            _this.broadcast();
            _this.emit('save', Object.freeze(_.cloneDeep(_this.preferences)));
            event.returnValue = null;
        });
        electron_1.ipcMain.on('runValidator', function (event, name, value) {
            if (_this.options.validators && _this.options.validators[name]) {
                var result = _this.options.validators[name](value);
                event.returnValue = result;
            }
            event.returnValue = true;
        });
        main_1.default.registerListener('runObservableValidator', function (name, value) {
            console.log('runObservableValidator', name, value);
            if (_this.options.validators && _this.options.validators[name]) {
                return _this.options.validators[name](value);
            }
            return rxjs_1.of({});
        });
        main_1.default.registerListener('runObservableAction', function (name, value) {
            console.log('runObservableAction', name, value);
            if (_this.options.actions && _this.options.actions[name]) {
                return _this.options.actions[name](value);
            }
            return rxjs_1.of({});
        });
        electron_1.ipcMain.on('runAction', function (event, name, form) {
            if (_this.options.actions && _this.options.actions[name]) {
                var result = _this.options.actions[name](form);
                event.returnValue = result;
            }
            event.returnValue = null;
        });
        if (_.isFunction(options.afterLoad)) {
            options.afterLoad(_this);
        }
        return _this;
    }
    Object.defineProperty(ElectronPreferences.prototype, "dataStore", {
        get: function () {
            return this.options.dataStore;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronPreferences.prototype, "defaults", {
        get: function () {
            return this.options.defaults || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronPreferences.prototype, "preferences", {
        get: function () {
            return this._preferences;
        },
        set: function (value) {
            this._preferences = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronPreferences.prototype, "windowOptions", {
        get: function () {
            return this.options.window || {};
        },
        enumerable: true,
        configurable: true
    });
    ElectronPreferences.prototype.save = function () {
        var jsonFile = fs.readJsonSync(this.dataStore, {
            throws: false
        });
        if (!jsonFile) {
            jsonFile = {};
        }
        fs.writeJsonSync(this.dataStore, __assign({}, jsonFile, this.preferences), {
            spaces: 4
        });
    };
    ElectronPreferences.prototype.value = function (key, value) {
        var _this = this;
        if (Array.isArray(key)) {
            // tslint:disable-next-line:no-shadowed-variable
            key.forEach(function (_a) {
                var key = _a.key, value = _a.value;
                _.set(_this.preferences, key, value);
            });
            this.save();
            this.broadcast();
        }
        else if (!_.isUndefined(key) && !_.isUndefined(value)) {
            _.set(this.preferences, key, value);
            this.save();
            this.broadcast();
        }
        else if (!_.isUndefined(key)) {
            return _.cloneDeep(_.get(this.preferences, key));
        }
        else {
            return _.cloneDeep(this.preferences);
        }
    };
    ElectronPreferences.prototype.broadcast = function () {
        var _this = this;
        electron_1.webContents.getAllWebContents().forEach(function (wc) {
            wc.send('preferencesUpdated', _this.preferences);
        });
    };
    ElectronPreferences.prototype.show = function () {
        var _this = this;
        if (this.prefsWindow) {
            return;
        }
        this.prefsWindow = new electron_1.BrowserWindow(__assign({ title: 'Preferences', width: 800, maxWidth: 800, height: 600, maxHeight: 600, resizable: false, acceptFirstMouse: true, maximizable: false, backgroundColor: '#E7E7E7', show: true, webPreferences: this.options.webPreferences }, this.windowOptions));
        this.prefsWindow.loadURL(url.format({
            pathname: path.join(__dirname, 'electron-angular-preferences/index.html'),
            protocol: 'file:',
            slashes: true
        }));
        this.prefsWindow.on('closed', function () {
            _this.prefsWindow = null;
        });
    };
    return ElectronPreferences;
}(eventemitter2_1.EventEmitter2));
exports.default = ElectronPreferences;
//# sourceMappingURL=main.js.map