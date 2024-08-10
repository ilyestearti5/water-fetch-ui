import React from "react";
import { TableDefConfig } from "@/types/global";
import { PayloadAction } from "@reduxjs/toolkit";
import { QueryStatus } from "react-query";
export interface Action {
    actionId: string;
    status: QueryStatus | "ready";
    args?: any;
    output?: any;
}
export declare const initActionConfig: TableDefConfig<Action, "actionId", "actions">;
export declare const actionEntity: import("@reduxjs/toolkit").EntityAdapter<Action, import("@reduxjs/toolkit").EntityId>, actionSlice: import("@reduxjs/toolkit").Slice<import("@reduxjs/toolkit").EntityState<Action, import("@reduxjs/toolkit").EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "actionId";
    name: "actions";
    loadingTime: number;
    changed: boolean;
}, {
    set(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Action, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "actionId";
        name: "actions";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Action> | readonly Action[];
        type: string;
    }): void;
    add(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Action, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "actionId";
        name: "actions";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Action> | readonly Action[];
        type: string;
    }): void;
    remove(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Action, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "actionId";
        name: "actions";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<readonly import("@reduxjs/toolkit").EntityId[]>): void;
    update(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Action, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "actionId";
        name: "actions";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: readonly import("@reduxjs/toolkit").Update<Action, import("@reduxjs/toolkit").EntityId>[];
        type: string;
    }): void;
    reset(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Action, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "actionId";
        name: "actions";
        loadingTime: number;
        changed: boolean;
    }>): void;
    upsert(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Action, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "actionId";
        name: "actions";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Action> | readonly Action[];
        type: string;
    }): void;
    changeStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Action, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "actionId";
        name: "actions";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<import("@/types/global").InitState<Action, "actionId">["status"]>): void;
    setLoadingTime(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Action, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "actionId";
        name: "actions";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<number>): void;
    setChanged(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Action, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "actionId";
        name: "actions";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<boolean>): void;
    changeWriteStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Action, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "actionId";
        name: "actions";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<import("@/types/global").InitState<Action, "actionId">["writeStatus"]>): void;
}, "actions", "actions", import("@reduxjs/toolkit").SliceSelectors<import("@reduxjs/toolkit").EntityState<Action, import("@reduxjs/toolkit").EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "actionId";
    name: "actions";
    loadingTime: number;
    changed: boolean;
}>>, actionHooks: {
    getFull(): import("@/types/global").InitState<any, "actionId">;
    getIds(): import("@reduxjs/toolkit").EntityId[];
    getId(): "actionId";
    remove(ids: import("@reduxjs/toolkit").EntityId[]): void;
    add(data: Action[]): void;
    upsert(data: Action[]): void;
    getOne(id: import("@reduxjs/toolkit").EntityId): {
        actionId: string;
        status: QueryStatus | "ready";
        args?: any;
        output?: any;
    } | undefined;
    setOne(id: import("@reduxjs/toolkit").EntityId, changes: Partial<Action>): void;
    setWriteStatus(status?: import("@/types/global").InitState<Action, "actionId">["writeStatus"]): void;
    useOne(id: import("@reduxjs/toolkit").EntityId): {
        get: {
            actionId: string;
            status: QueryStatus | "ready";
            args?: any;
            output?: any;
        } | undefined;
        set: React.Dispatch<React.SetStateAction<{
            actionId: string;
            status: QueryStatus | "ready";
            args?: any;
            output?: any;
        } | undefined>>;
    };
    getOneFeild<F extends keyof Action>(recordId: import("@reduxjs/toolkit").EntityId, feild: F): ({
        actionId: string;
        status: QueryStatus | "ready";
        args?: any;
        output?: any;
    }[F] & ({} | null)) | undefined;
    setOneFeild<F extends keyof Action>(id: import("@reduxjs/toolkit").EntityId, feild: F, value: Action[F]): void;
    useOneFeild<F extends keyof Action>(recordeId: import("@reduxjs/toolkit").EntityId, feild: F): {
        get: ({
            actionId: string;
            status: QueryStatus | "ready";
            args?: any;
            output?: any;
        }[F] & ({} | null)) | undefined;
        set: React.Dispatch<React.SetStateAction<({
            actionId: string;
            status: QueryStatus | "ready";
            args?: any;
            output?: any;
        }[F] & ({} | null)) | undefined>>;
    };
    getOneFeilds<F extends keyof Action>(id: import("@reduxjs/toolkit").EntityId, feilds: F[]): (F extends infer T extends keyof Action ? { [key in T]: Action[F]; } : never) | undefined;
    getAll(): Action[];
    setAll(data: Record<import("@reduxjs/toolkit").EntityId, Action> | readonly Action[]): void;
    useAll(): {
        get: Action[];
        set: React.Dispatch<React.SetStateAction<Action[]>>;
    };
    getWriteStatus(): "ready" | QueryStatus;
    useWriteStatus(): {
        get: "idle" | "ready" | "loading" | "error" | "success";
        set: React.Dispatch<React.SetStateAction<"idle" | "ready" | "loading" | "error" | "success">>;
    };
    getStatus(): QueryStatus;
    setStatus(value: ReturnType<() => QueryStatus>): void;
    useStatus(): {
        get: "idle" | "loading" | "error" | "success";
        set: React.Dispatch<React.SetStateAction<"idle" | "loading" | "error" | "success">>;
    };
    getEntity(): Record<import("@reduxjs/toolkit").EntityId, Action>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
}, actionEntitySelect: import("@reduxjs/toolkit").EntitySelectors<Action, import("@reduxjs/toolkit").EntityState<Action, import("@reduxjs/toolkit").EntityId>, import("@reduxjs/toolkit").EntityId>;
export declare function initAction(actionId: string): void;
export declare function useAction<T extends string, ARGS, S>(actionId: T, fn: (args: ARGS) => S | Promise<S>, deps?: any[], complete?: (output: S) => void): {
    actionId: string;
    status: QueryStatus | "ready";
    args?: any;
    output?: any;
} | undefined;
export declare function execAction<ID extends string, A>(actionId: ID, args?: A): Promise<unknown>;
