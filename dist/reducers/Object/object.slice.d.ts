import { store } from "@/store";
import { PayloadAction } from "@reduxjs/toolkit";
import React from "react";
import { QueryStatus } from "react-query";
export type TempState = Record<typeof objectName, typeof initialState>;
export declare const objectName = "object";
export interface ObjectTemp {
    data: any;
    settings: {
        saved: boolean;
        status: QueryStatus;
        reloaded: boolean;
        watch: boolean;
        ignoreAccess: {
            dir: string;
            pass: string;
        }[];
    };
}
export declare const initialState: ObjectTemp;
export declare const objectSlice: import("@reduxjs/toolkit").Slice<ObjectTemp, {
    setValue(state: import("immer").WritableDraft<ObjectTemp>, { payload }: PayloadAction<{
        value: any;
        direction: string;
        force: boolean;
        pass?: string;
    }>): void;
    save(state: import("immer").WritableDraft<ObjectTemp>, { payload }: PayloadAction<boolean>): void;
    reload(state: import("immer").WritableDraft<ObjectTemp>, { payload }: PayloadAction<boolean>): void;
    addIgnoreAccess(state: import("immer").WritableDraft<ObjectTemp>, { payload }: PayloadAction<ObjectTemp["settings"]["ignoreAccess"]>): void;
    removeIgnoreAccess(state: import("immer").WritableDraft<ObjectTemp>, { payload }: PayloadAction<ObjectTemp["settings"]["ignoreAccess"]>): void;
}, "object", "object", import("@reduxjs/toolkit").SliceSelectors<ObjectTemp>>;
export declare const getSaved: () => boolean;
export declare const getWatch: () => boolean;
export declare const getReloaded: () => boolean;
export declare const getStatus: () => QueryStatus;
export declare const startReloadTemps: () => void;
export declare const endReloadTemps: () => void;
export declare const startSaveTemps: () => void;
export declare const endSaveTemps: () => void;
export declare function getTemp<T>(direction: string): T | null;
export declare function setTemp<T>(direction: string, value: T): void;
export declare function useTemp<T>(direction: string): {
    get: T | null;
    set: React.Dispatch<React.SetStateAction<T | null>>;
};
export declare function getTempFromStore<T>(direction: string, s?: ReturnType<typeof store.getState>): T | null;
