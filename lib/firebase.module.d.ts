import { DynamicModule } from "@nestjs/common";
import { FirebaseModuleAsyncOptions } from "./firebase.interface";
export declare class FirebaseModule {
    static forRoot(): DynamicModule;
    static forRootAsync(options: FirebaseModuleAsyncOptions): DynamicModule;
    private static createAsyncProviders;
    private static createAsyncOptionsProvider;
}
