import React from "react";
import { EntityId, PayloadAction, Update } from "@reduxjs/toolkit";
import { GetOptinal, InitState, TableDefConfig } from "@/types/global";
export declare function defineTable<T extends object, I extends keyof T, N extends string, A extends object, O extends GetOptinal<T> = any>(config: TableDefConfig<T, I, N, A>): {
    slice: import("@reduxjs/toolkit").Slice<import("@reduxjs/toolkit").EntityState<T, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: I;
        name: N;
        loadingTime: number;
        changed: boolean;
    }, {
        set(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<T, EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: I;
            name: N;
            loadingTime: number;
            changed: boolean;
        }>, { payload }: {
            payload: Record<EntityId, T> | readonly T[];
            type: string;
        }): void;
        add(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<T, EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: I;
            name: N;
            loadingTime: number;
            changed: boolean;
        }>, { payload }: {
            payload: Record<EntityId, T> | readonly T[];
            type: string;
        }): void;
        remove(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<T, EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: I;
            name: N;
            loadingTime: number;
            changed: boolean;
        }>, { payload }: PayloadAction<readonly EntityId[]>): void;
        update(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<T, EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: I;
            name: N;
            loadingTime: number;
            changed: boolean;
        }>, { payload }: PayloadAction<readonly Update<T, EntityId>[]>): void;
        reset(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<T, EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: I;
            name: N;
            loadingTime: number;
            changed: boolean;
        }>): void;
        upsert(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<T, EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: I;
            name: N;
            loadingTime: number;
            changed: boolean;
        }>, { payload }: {
            payload: Record<EntityId, T> | readonly T[];
            type: string;
        }): void;
        changeStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<T, EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: I;
            name: N;
            loadingTime: number;
            changed: boolean;
        }>, { payload }: PayloadAction<InitState<T, I>["status"]>): void;
        setLoadingTime(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<T, EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: I;
            name: N;
            loadingTime: number;
            changed: boolean;
        }>, { payload }: PayloadAction<number>): void;
        setChanged(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<T, EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: I;
            name: N;
            loadingTime: number;
            changed: boolean;
        }>, { payload }: PayloadAction<boolean>): void;
        changeWriteStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<T, EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: I;
            name: N;
            loadingTime: number;
            changed: boolean;
        }>, { payload }: PayloadAction<InitState<T, I>["writeStatus"]>): void;
    }, N, N, import("@reduxjs/toolkit").SliceSelectors<import("@reduxjs/toolkit").EntityState<T, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: I;
        name: N;
        loadingTime: number;
        changed: boolean;
    }>>;
    entity: import("@reduxjs/toolkit").EntityAdapter<T, EntityId>;
    hooks: {
        getFull(): { [name in N]: InitState<T & O, I>; }[N];
        getIds(): EntityId[];
        getId(): I;
        remove(ids: EntityId[]): void;
        add(data: T[]): void;
        upsert(data: T[]): void;
        getOne(id: EntityId): { [K in keyof T]: T[K]; } | undefined;
        setOne(id: EntityId, changes: Update<T, EntityId>["changes"]): void;
        setWriteStatus(status?: InitState<T, I>["writeStatus"]): void;
        useOne(id: EntityId): {
            get: { [K in keyof T]: T[K]; } | undefined;
            set: React.Dispatch<React.SetStateAction<{ [K in keyof T]: T[K]; } | undefined>>;
        };
        getOneFeild<F extends keyof T>(recordId: EntityId, field: F): ({ [K in keyof T]: T[K]; }[F] & ({} | null)) | undefined;
        setOneFeild<F extends keyof T>(id: EntityId, field: F, value: T[F]): void;
        useOneFeild<F extends keyof T>(recordeId: EntityId, field: F): {
            get: ({ [K in keyof T]: T[K]; }[F] & ({} | null)) | undefined;
            set: React.Dispatch<React.SetStateAction<({ [K in keyof T]: T[K]; }[F] & ({} | null)) | undefined>>;
        };
        getOneFeilds<F extends keyof T>(id: EntityId, fields: F[]): { [key in F]: T[F]; } | undefined;
        getAll(): T[];
        setAll(data: Record<EntityId, T> | readonly T[]): void;
        useAll(): {
            get: T[];
            set: React.Dispatch<React.SetStateAction<T[]>>;
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
        getEntity(): Record<EntityId, T>;
        getLoadingTime(): number;
        setLoadingTime(time: number): void;
        useLoadingTime(): void;
        getChanged(): boolean;
        setChanged(value: boolean): void;
        useChanged(): void;
    };
    entitySelect: import("@reduxjs/toolkit").EntitySelectors<T, import("@reduxjs/toolkit").EntityState<T, EntityId>, EntityId>;
    initialState: import("@reduxjs/toolkit").EntityState<T, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: I;
        name: N;
        loadingTime: number;
        changed: boolean;
    };
    init: () => {
        id: I;
        saved: "ready" | import("react-query").QueryStatus;
        status: import("react-query").QueryStatus;
        timeLoading: number;
    };
    select: (state: { [name in string]: InitState<T, I>; }) => InitState<T, I>;
};
