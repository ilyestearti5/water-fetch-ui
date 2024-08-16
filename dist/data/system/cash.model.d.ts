export interface Casher {
    linkId: string;
    response?: string;
    status?: "error" | "success" | "idle";
}
export declare const initCashing: () => {
    id: "linkId";
    saved: "ready" | import("react-query").QueryStatus;
    status: import("react-query").QueryStatus;
    timeLoading: number;
}, cashHook: {
    getFull(): import("@/types/global").InitState<any, "linkId">;
    getIds(): import("@reduxjs/toolkit").EntityId[];
    getId(): "linkId";
    remove(ids: import("@reduxjs/toolkit").EntityId[]): void;
    add(data: Casher[]): void;
    upsert(data: Casher[]): void;
    getOne(id: import("@reduxjs/toolkit").EntityId): {
        linkId: string;
        response?: string;
        status?: "error" | "success" | "idle";
    } | undefined;
    setOne(id: import("@reduxjs/toolkit").EntityId, changes: Partial<Casher>): void;
    setWriteStatus(status?: import("@/types/global").InitState<Casher, "linkId">["writeStatus"]): void;
    useOne(id: import("@reduxjs/toolkit").EntityId): {
        get: {
            linkId: string;
            response?: string;
            status?: "error" | "success" | "idle";
        } | undefined;
        set: import("react").Dispatch<import("react").SetStateAction<{
            linkId: string;
            response?: string;
            status?: "error" | "success" | "idle";
        } | undefined>>;
    };
    getOneFeild<F extends keyof Casher>(recordId: import("@reduxjs/toolkit").EntityId, field: F): ({
        linkId: string;
        response?: string;
        status?: "error" | "success" | "idle";
    }[F] & {}) | undefined;
    setOneFeild<F extends keyof Casher>(id: import("@reduxjs/toolkit").EntityId, field: F, value: Casher[F]): void;
    useOneFeild<F extends keyof Casher>(recordeId: import("@reduxjs/toolkit").EntityId, field: F): {
        get: ({
            linkId: string;
            response?: string;
            status?: "error" | "success" | "idle";
        }[F] & {}) | undefined;
        set: import("react").Dispatch<import("react").SetStateAction<({
            linkId: string;
            response?: string;
            status?: "error" | "success" | "idle";
        }[F] & {}) | undefined>>;
    };
    getOneFeilds<F extends keyof Casher>(id: import("@reduxjs/toolkit").EntityId, fields: F[]): (F extends infer T extends keyof Casher ? { [key in T]: Casher[F]; } : never) | undefined;
    getAll(): Casher[];
    setAll(data: Record<import("@reduxjs/toolkit").EntityId, Casher> | readonly Casher[]): void;
    useAll(): {
        get: Casher[];
        set: import("react").Dispatch<import("react").SetStateAction<Casher[]>>;
    };
    getWriteStatus(): "ready" | import("react-query").QueryStatus;
    useWriteStatus(): {
        get: "idle" | "ready" | "loading" | "error" | "success";
        set: import("react").Dispatch<import("react").SetStateAction<"idle" | "ready" | "loading" | "error" | "success">>;
    };
    getStatus(): import("react-query").QueryStatus;
    setStatus(value: ReturnType<() => import("react-query").QueryStatus>): void;
    useStatus(): {
        get: "idle" | "loading" | "error" | "success";
        set: import("react").Dispatch<import("react").SetStateAction<"idle" | "loading" | "error" | "success">>;
    };
    getEntity(): Record<import("@reduxjs/toolkit").EntityId, Casher>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
}, cashSlice: import("@reduxjs/toolkit").Slice<import("@reduxjs/toolkit").EntityState<Casher, import("@reduxjs/toolkit").EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "linkId";
    name: "cahser";
    loadingTime: number;
    changed: boolean;
}, {
    set(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Casher, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "linkId";
        name: "cahser";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Casher> | readonly Casher[];
        type: string;
    }): void;
    add(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Casher, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "linkId";
        name: "cahser";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Casher> | readonly Casher[];
        type: string;
    }): void;
    remove(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Casher, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "linkId";
        name: "cahser";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<readonly import("@reduxjs/toolkit").EntityId[]>): void;
    update(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Casher, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "linkId";
        name: "cahser";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: readonly import("@reduxjs/toolkit").Update<Casher, import("@reduxjs/toolkit").EntityId>[];
        type: string;
    }): void;
    reset(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Casher, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "linkId";
        name: "cahser";
        loadingTime: number;
        changed: boolean;
    }>): void;
    upsert(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Casher, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "linkId";
        name: "cahser";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Casher> | readonly Casher[];
        type: string;
    }): void;
    changeStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Casher, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "linkId";
        name: "cahser";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<import("@/types/global").InitState<Casher, "linkId">["status"]>): void;
    setLoadingTime(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Casher, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "linkId";
        name: "cahser";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<number>): void;
    setChanged(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Casher, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "linkId";
        name: "cahser";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<boolean>): void;
    changeWriteStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Casher, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "linkId";
        name: "cahser";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<import("@/types/global").InitState<Casher, "linkId">["writeStatus"]>): void;
}, "cahser", "cahser", import("@reduxjs/toolkit").SliceSelectors<import("@reduxjs/toolkit").EntityState<Casher, import("@reduxjs/toolkit").EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "linkId";
    name: "cahser";
    loadingTime: number;
    changed: boolean;
}>>;
