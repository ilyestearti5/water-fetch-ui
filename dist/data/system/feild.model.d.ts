import React from "react";
import { TextAreaProps } from "@/components/TextArea";
import { FullStateManagment } from "@/types/global";
declare const data: {
    appPassword: {};
    colorDarkValue: {};
    colorDefaultValue: {};
    colorLightValue: {};
    colorName: {};
    findCommand: {};
    "findConfigurations-local": {};
    number: {};
    "password/def": {};
    "setting/number": {};
    updateConfigSetting: {};
    "window/password": {};
};
export type FeildIds = keyof typeof data;
export interface Feild {
    feildId: string;
    selection: TextAreaProps["selection"];
    value: string;
    controls: Record<string, {
        succ?: string;
        err?: string;
    }>;
    history?: string[];
}
export declare const feildEntity: import("@reduxjs/toolkit").EntityAdapter<Feild, import("@reduxjs/toolkit").EntityId>, feildSlice: import("@reduxjs/toolkit").Slice<import("@reduxjs/toolkit").EntityState<Feild, import("@reduxjs/toolkit").EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "feildId";
    name: "feilds";
    loadingTime: number;
    changed: boolean;
}, {
    set(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Feild, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "feildId";
        name: "feilds";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Feild> | readonly Feild[];
        type: string;
    }): void;
    add(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Feild, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "feildId";
        name: "feilds";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Feild> | readonly Feild[];
        type: string;
    }): void;
    remove(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Feild, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "feildId";
        name: "feilds";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<readonly import("@reduxjs/toolkit").EntityId[]>): void;
    update(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Feild, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "feildId";
        name: "feilds";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: readonly import("@reduxjs/toolkit").Update<Feild, import("@reduxjs/toolkit").EntityId>[];
        type: string;
    }): void;
    reset(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Feild, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "feildId";
        name: "feilds";
        loadingTime: number;
        changed: boolean;
    }>): void;
    upsert(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Feild, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "feildId";
        name: "feilds";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Feild> | readonly Feild[];
        type: string;
    }): void;
    changeStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Feild, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "feildId";
        name: "feilds";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<import("@/types/global").InitState<Feild, "feildId">["status"]>): void;
    setLoadingTime(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Feild, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "feildId";
        name: "feilds";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<number>): void;
    setChanged(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Feild, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "feildId";
        name: "feilds";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<boolean>): void;
    changeWriteStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Feild, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "feildId";
        name: "feilds";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<import("@/types/global").InitState<Feild, "feildId">["writeStatus"]>): void;
}, "feilds", "feilds", import("@reduxjs/toolkit").SliceSelectors<import("@reduxjs/toolkit").EntityState<Feild, import("@reduxjs/toolkit").EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "feildId";
    name: "feilds";
    loadingTime: number;
    changed: boolean;
}>>, feildHooks: {
    getFull(): import("@/types/global").InitState<any, "feildId">;
    getIds(): import("@reduxjs/toolkit").EntityId[];
    getId(): "feildId";
    remove(ids: import("@reduxjs/toolkit").EntityId[]): void;
    add(data: Feild[]): void;
    upsert(data: Feild[]): void;
    getOne(id: import("@reduxjs/toolkit").EntityId): {
        feildId: string;
        selection: TextAreaProps["selection"];
        value: string;
        controls: Record<string, {
            succ?: string;
            err?: string;
        }>;
        history?: string[];
    } | undefined;
    setOne(id: import("@reduxjs/toolkit").EntityId, changes: Partial<Feild>): void;
    setWriteStatus(status?: import("@/types/global").InitState<Feild, "feildId">["writeStatus"]): void;
    useOne(id: import("@reduxjs/toolkit").EntityId): {
        get: {
            feildId: string;
            selection: TextAreaProps["selection"];
            value: string;
            controls: Record<string, {
                succ?: string;
                err?: string;
            }>;
            history?: string[];
        } | undefined;
        set: React.Dispatch<React.SetStateAction<{
            feildId: string;
            selection: TextAreaProps["selection"];
            value: string;
            controls: Record<string, {
                succ?: string;
                err?: string;
            }>;
            history?: string[];
        } | undefined>>;
    };
    getOneFeild<F extends keyof Feild>(recordId: import("@reduxjs/toolkit").EntityId, feild: F): ({
        feildId: string;
        selection: TextAreaProps["selection"];
        value: string;
        controls: Record<string, {
            succ?: string;
            err?: string;
        }>;
        history?: string[];
    }[F] & ({} | null)) | undefined;
    setOneFeild<F extends keyof Feild>(id: import("@reduxjs/toolkit").EntityId, feild: F, value: Feild[F]): void;
    useOneFeild<F extends keyof Feild>(recordeId: import("@reduxjs/toolkit").EntityId, feild: F): {
        get: ({
            feildId: string;
            selection: TextAreaProps["selection"];
            value: string;
            controls: Record<string, {
                succ?: string;
                err?: string;
            }>;
            history?: string[];
        }[F] & ({} | null)) | undefined;
        set: React.Dispatch<React.SetStateAction<({
            feildId: string;
            selection: TextAreaProps["selection"];
            value: string;
            controls: Record<string, {
                succ?: string;
                err?: string;
            }>;
            history?: string[];
        }[F] & ({} | null)) | undefined>>;
    };
    getOneFeilds<F extends keyof Feild>(id: import("@reduxjs/toolkit").EntityId, feilds: F[]): (F extends infer T extends keyof Feild ? { [key in T]: Feild[F]; } : never) | undefined;
    getAll(): Feild[];
    setAll(data: Record<import("@reduxjs/toolkit").EntityId, Feild> | readonly Feild[]): void;
    useAll(): {
        get: Feild[];
        set: React.Dispatch<React.SetStateAction<Feild[]>>;
    };
    getWriteStatus(): "ready" | import("react-query").QueryStatus;
    useWriteStatus(): {
        get: "idle" | "ready" | "loading" | "error" | "success";
        set: React.Dispatch<React.SetStateAction<"idle" | "ready" | "loading" | "error" | "success">>;
    };
    getStatus(): import("react-query").QueryStatus;
    setStatus(value: ReturnType<() => import("react-query").QueryStatus>): void;
    useStatus(): {
        get: "idle" | "loading" | "error" | "success";
        set: React.Dispatch<React.SetStateAction<"idle" | "loading" | "error" | "success">>;
    };
    getEntity(): Record<import("@reduxjs/toolkit").EntityId, Feild>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
}, feildEntitySelect: import("@reduxjs/toolkit").EntitySelectors<Feild, import("@reduxjs/toolkit").EntityState<Feild, import("@reduxjs/toolkit").EntityId>, import("@reduxjs/toolkit").EntityId>, initFeilds: () => {
    id: "feildId";
    saved: "ready" | import("react-query").QueryStatus;
    status: import("react-query").QueryStatus;
    timeLoading: number;
};
export type FeildRecord<T extends string | number> = Record<T, FeildIds>;
export declare function getManyFeilds<S extends string | number, T extends FeildRecord<S>>(feilds: T, deps?: any): Record<keyof T, string | undefined>;
export declare function resetManyFeilds<T extends FeildIds>(feilds: T[]): void;
export declare function initNewFeild(feildId: string): void;
export declare function getPrevious(value: string | undefined, selection: TextAreaProps["selection"]): string;
export declare function getNext(value: string | undefined, selection: TextAreaProps["selection"]): string;
export declare function getSelected(value: string | undefined, selection: TextAreaProps["selection"]): string;
export declare function initNewFeilds(inputNames: string[]): void;
export declare function getFeildPrevious(feildId: string): string;
export declare function getFeildNext(feildId: string): string;
export declare function getFeildSelected(feildId: string): string;
export declare const feildElement: (id: string) => HTMLTextAreaElement | null;
export declare function checkFormByFeilds(feilds: string[], state?: FullStateManagment): {
    controls: ({
        response: never[];
        isValide: boolean;
        feildName?: undefined;
    } | {
        response: (RegExpMatchArray | null)[];
        isValide: boolean;
        feildName: string;
    })[];
    isValide: boolean;
};
export {};
