"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FirebaseModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseModule = void 0;
const common_1 = require("@nestjs/common");
const firebase_constants_1 = require("./firebase.constants");
const util_1 = require("./util");
let FirebaseModule = FirebaseModule_1 = class FirebaseModule {
    static forRoot() {
        const provider = {
            provide: firebase_constants_1.FirebaseConstants.FIREBASE_TOKEN,
            useValue: (0, util_1.getFirebaseAdmin)(),
        };
        return {
            exports: [provider],
            module: FirebaseModule_1,
            providers: [provider],
        };
    }
    static forRootAsync(options) {
        const firebaseProvider = {
            inject: [firebase_constants_1.FirebaseConstants.FIREBASE_MODULE],
            provide: firebase_constants_1.FirebaseConstants.FIREBASE_TOKEN,
            useFactory: () => (0, util_1.getFirebaseAdmin)(),
        };
        const asyncProviders = this.createAsyncProviders(options);
        return {
            module: FirebaseModule_1,
            imports: [...(options.imports || [])],
            providers: [...asyncProviders, firebaseProvider],
            exports: [firebaseProvider],
        };
    }
    static createAsyncProviders(options) {
        if (options.useFactory || options.useExisting) {
            return [this.createAsyncOptionsProvider(options)];
        }
        return [
            this.createAsyncOptionsProvider(options),
            {
                provide: options.useClass,
                useClass: options.useClass,
                inject: options.inject,
            },
        ];
    }
    static createAsyncOptionsProvider(options) {
        if (options.useFactory) {
            return {
                provide: firebase_constants_1.FirebaseConstants.FIREBASE_MODULE,
                useFactory: options.useFactory,
                inject: options.inject || [],
            };
        }
        return {
            provide: firebase_constants_1.FirebaseConstants.FIREBASE_MODULE,
            useFactory: async (optionsFactory) => await optionsFactory.createFirebaseModuleOptions(),
            inject: options.useClass ? [options.useClass] : [],
        };
    }
};
FirebaseModule = FirebaseModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({})
], FirebaseModule);
exports.FirebaseModule = FirebaseModule;
//# sourceMappingURL=firebase.module.js.map