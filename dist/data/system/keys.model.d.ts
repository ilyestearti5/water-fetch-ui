import React from "react";
import { Command, CommandIds } from "./command.model";
import { Action } from "./actions.model";
import { FullStateManagment } from "@/types/global";
export interface Key {
    value?: string;
    keyId?: string;
    command?: Command["commandId"];
    only?: boolean;
    when?: string;
    preventDefault?: boolean;
    repeation?: boolean;
    type?: "up" | "down";
    private?: boolean;
    action?: Action["actionId"];
}
export declare const init: () => {
    id: "keyId";
    saved: "ready" | import("react-query").QueryStatus;
    status: import("react-query").QueryStatus;
    timeLoading: number;
}, keyHooks: {
    getFull(): import("@/types/global").InitState<any, "keyId">;
    getIds(): import("@reduxjs/toolkit").EntityId[];
    getId(): "keyId";
    remove(ids: import("@reduxjs/toolkit").EntityId[]): void;
    add(data: Key[]): void;
    upsert(data: Key[]): void;
    getOne(id: import("@reduxjs/toolkit").EntityId): {
        value?: string;
        keyId?: string;
        command?: Command["commandId"];
        only?: boolean;
        when?: string;
        preventDefault?: boolean;
        repeation?: boolean;
        type?: "up" | "down";
        private?: boolean;
        action?: Action["actionId"];
    } | undefined;
    setOne(id: import("@reduxjs/toolkit").EntityId, changes: Partial<Key>): void;
    setWriteStatus(status?: import("@/types/global").InitState<Key, "keyId">["writeStatus"]): void;
    useOne(id: import("@reduxjs/toolkit").EntityId): {
        get: {
            value?: string;
            keyId?: string;
            command?: Command["commandId"];
            only?: boolean;
            when?: string;
            preventDefault?: boolean;
            repeation?: boolean;
            type?: "up" | "down";
            private?: boolean;
            action?: Action["actionId"];
        } | undefined;
        set: React.Dispatch<React.SetStateAction<{
            value?: string;
            keyId?: string;
            command?: Command["commandId"];
            only?: boolean;
            when?: string;
            preventDefault?: boolean;
            repeation?: boolean;
            type?: "up" | "down";
            private?: boolean;
            action?: Action["actionId"];
        } | undefined>>;
    };
    getOneFeild<F extends keyof Key>(recordId: import("@reduxjs/toolkit").EntityId, feild: F): ({
        value?: string;
        keyId?: string;
        command?: Command["commandId"];
        only?: boolean;
        when?: string;
        preventDefault?: boolean;
        repeation?: boolean;
        type?: "up" | "down";
        private?: boolean;
        action?: Action["actionId"];
    }[F] & {}) | undefined;
    setOneFeild<F extends keyof Key>(id: import("@reduxjs/toolkit").EntityId, feild: F, value: Key[F]): void;
    useOneFeild<F extends keyof Key>(recordeId: import("@reduxjs/toolkit").EntityId, feild: F): {
        get: ({
            value?: string;
            keyId?: string;
            command?: Command["commandId"];
            only?: boolean;
            when?: string;
            preventDefault?: boolean;
            repeation?: boolean;
            type?: "up" | "down";
            private?: boolean;
            action?: Action["actionId"];
        }[F] & {}) | undefined;
        set: React.Dispatch<React.SetStateAction<({
            value?: string;
            keyId?: string;
            command?: Command["commandId"];
            only?: boolean;
            when?: string;
            preventDefault?: boolean;
            repeation?: boolean;
            type?: "up" | "down";
            private?: boolean;
            action?: Action["actionId"];
        }[F] & {}) | undefined>>;
    };
    getOneFeilds<F extends keyof Key>(id: import("@reduxjs/toolkit").EntityId, feilds: F[]): (F extends infer T extends keyof Key ? { [key in T]: Key[F]; } : never) | undefined;
    getAll(): Key[];
    setAll(data: Record<import("@reduxjs/toolkit").EntityId, Key> | readonly Key[]): void;
    useAll(): {
        get: Key[];
        set: React.Dispatch<React.SetStateAction<Key[]>>;
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
    getEntity(): Record<import("@reduxjs/toolkit").EntityId, Key>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
}, keySlice: import("@reduxjs/toolkit").Slice<import("@reduxjs/toolkit").EntityState<Key, import("@reduxjs/toolkit").EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "keyId";
    name: "keys";
    loadingTime: number;
    changed: boolean;
}, {
    set(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Key, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "keyId";
        name: "keys";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Key> | readonly Key[];
        type: string;
    }): void;
    add(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Key, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "keyId";
        name: "keys";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Key> | readonly Key[];
        type: string;
    }): void;
    remove(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Key, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "keyId";
        name: "keys";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<readonly import("@reduxjs/toolkit").EntityId[]>): void;
    update(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Key, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "keyId";
        name: "keys";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: readonly import("@reduxjs/toolkit").Update<Key, import("@reduxjs/toolkit").EntityId>[];
        type: string;
    }): void;
    reset(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Key, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "keyId";
        name: "keys";
        loadingTime: number;
        changed: boolean;
    }>): void;
    upsert(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Key, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "keyId";
        name: "keys";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Key> | readonly Key[];
        type: string;
    }): void;
    changeStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Key, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "keyId";
        name: "keys";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<import("@/types/global").InitState<Key, "keyId">["status"]>): void;
    setLoadingTime(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Key, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "keyId";
        name: "keys";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<number>): void;
    setChanged(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Key, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "keyId";
        name: "keys";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<boolean>): void;
    changeWriteStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Key, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "keyId";
        name: "keys";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<import("@/types/global").InitState<Key, "keyId">["writeStatus"]>): void;
}, "keys", "keys", import("@reduxjs/toolkit").SliceSelectors<import("@reduxjs/toolkit").EntityState<Key, import("@reduxjs/toolkit").EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "keyId";
    name: "keys";
    loadingTime: number;
    changed: boolean;
}>>;
export declare const windowId: string;
export declare function test(when: string): (props: {
    state: FullStateManagment;
    focused: string | null;
}) => boolean;
export declare function initKeys(): void;
export declare function getKeyOf(commandId: CommandIds | string): Key[];
export declare function getKeys(): Key[];
export declare function shortcutOf(actionName: string): Key[];
