"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.User = void 0;
var core_1 = require("@angular/core");
var child_1 = require("./child");
var User = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-user',
            template: " Username: {{ username }} ",
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var User = _classThis = /** @class */ (function () {
        function User_1() {
            this.username = 'youngTech';
        }
        return User_1;
    }());
    __setFunctionName(_classThis, "User");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
}();
exports.User = User;
var App = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-root',
            template: "\n    @if (isServerRunning) {\n      <span>Yes, the server is running</span>\n    } @else {\n      <span>No, the server is not running</span>\n    }\n    <section>\n      <app-user />\n    </section>\n\n    @for (user of users; track user.id) {\n      <p>{{ user.name }}</p>\n    }\n\n    <div [contentEditable]=\"isEditable\"></div>\n\n    <section (mouseover)=\"showSecretMessage()\">\n      There's a secret message for you, hover to reveal:\n      {{ message }}\n    </section>\n\n    <app-child (addItemEvent)=\"addItem($event)\"/>\n    <p>\uD83D\uDC22 all the way down {{ items.length }}</p>\n  ",
            imports: [User, child_1.Child],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var App = _classThis = /** @class */ (function () {
        function App_1() {
            this.isServerRunning = true;
            this.users = [
                { id: 0, name: 'Sarah' },
                { id: 1, name: 'Amy' },
                { id: 2, name: 'Rachel' },
                { id: 3, name: 'Jessica' },
                { id: 4, name: 'Poornima' },
            ];
            this.isEditable = true;
            this.message = '';
            this.items = new Array();
        }
        App_1.prototype.showSecretMessage = function () {
            this.message = 'Way to go 🚀';
        };
        App_1.prototype.addItem = function (item) {
            this.items.push(item);
        };
        return App_1;
    }());
    __setFunctionName(_classThis, "App");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        App = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return App = _classThis;
}();
exports.App = App;
