declare const data: {
    activity: {};
    keyboardShortcuts: {};
    menuBar: {};
    menuBars: {};
    profile: {};
    title: {};
    userSettings: {};
};
export interface Positions extends Partial<Omit<DOMRect, "toJSON">> {
    positionId: string;
}
export type PositionsIds = keyof typeof data;
export declare const positionsEntity: import("@reduxjs/toolkit").EntityAdapter<Positions, import("@reduxjs/toolkit").EntityId>, positionsSlice: import("@reduxjs/toolkit").Slice<import("@reduxjs/toolkit").EntityState<Positions, import("@reduxjs/toolkit").EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "positionId";
    name: "positions";
    loadingTime: number;
    changed: boolean;
}, {
    set(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Positions, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "positionId";
        name: "positions";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Positions> | readonly Positions[];
        type: string;
    }): void;
    add(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Positions, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "positionId";
        name: "positions";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Positions> | readonly Positions[];
        type: string;
    }): void;
    remove(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Positions, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "positionId";
        name: "positions";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<readonly import("@reduxjs/toolkit").EntityId[]>): void;
    update(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Positions, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "positionId";
        name: "positions";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: readonly import("@reduxjs/toolkit").Update<Positions, import("@reduxjs/toolkit").EntityId>[];
        type: string;
    }): void;
    reset(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Positions, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "positionId";
        name: "positions";
        loadingTime: number;
        changed: boolean;
    }>): void;
    upsert(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Positions, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "positionId";
        name: "positions";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Positions> | readonly Positions[];
        type: string;
    }): void;
    changeStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Positions, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "positionId";
        name: "positions";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<import("@/types/global").InitState<Positions, "positionId">["status"]>): void;
    setLoadingTime(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Positions, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "positionId";
        name: "positions";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<number>): void;
    setChanged(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Positions, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "positionId";
        name: "positions";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<boolean>): void;
    changeWriteStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Positions, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "positionId";
        name: "positions";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<import("@/types/global").InitState<Positions, "positionId">["writeStatus"]>): void;
}, "positions", "positions", import("@reduxjs/toolkit").SliceSelectors<import("@reduxjs/toolkit").EntityState<Positions, import("@reduxjs/toolkit").EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "positionId";
    name: "positions";
    loadingTime: number;
    changed: boolean;
}>>, positionsHooks: {
    getFull(): import("@/types/global").InitState<any, "positionId">;
    getIds(): import("@reduxjs/toolkit").EntityId[];
    getId(): "positionId";
    remove(ids: import("@reduxjs/toolkit").EntityId[]): void;
    add(data: Positions[]): void;
    upsert(data: Positions[]): void;
    getOne(id: import("@reduxjs/toolkit").EntityId): {
        positionId: string;
        height?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        readonly right?: number | undefined;
        readonly left?: number | undefined;
        readonly top?: number | undefined;
        readonly bottom?: number | undefined;
    } | undefined;
    setOne(id: import("@reduxjs/toolkit").EntityId, changes: Partial<Positions>): void;
    setWriteStatus(status?: import("@/types/global").InitState<Positions, "positionId">["writeStatus"]): void;
    useOne(id: import("@reduxjs/toolkit").EntityId): {
        get: {
            positionId: string;
            height?: number | undefined;
            width?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            readonly right?: number | undefined;
            readonly left?: number | undefined;
            readonly top?: number | undefined;
            readonly bottom?: number | undefined;
        } | undefined;
        set: import("react").Dispatch<import("react").SetStateAction<{
            positionId: string;
            height?: number | undefined;
            width?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            readonly right?: number | undefined;
            readonly left?: number | undefined;
            readonly top?: number | undefined;
            readonly bottom?: number | undefined;
        } | undefined>>;
    };
    getOneFeild<F extends keyof Positions>(recordId: import("@reduxjs/toolkit").EntityId, feild: F): ({
        positionId: string;
        height?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        readonly right?: number | undefined;
        readonly left?: number | undefined;
        readonly top?: number | undefined;
        readonly bottom?: number | undefined;
    }[F] & {}) | undefined;
    setOneFeild<F extends keyof Positions>(id: import("@reduxjs/toolkit").EntityId, feild: F, value: Positions[F]): void;
    useOneFeild<F extends keyof Positions>(recordeId: import("@reduxjs/toolkit").EntityId, feild: F): {
        get: ({
            positionId: string;
            height?: number | undefined;
            width?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            readonly right?: number | undefined;
            readonly left?: number | undefined;
            readonly top?: number | undefined;
            readonly bottom?: number | undefined;
        }[F] & {}) | undefined;
        set: import("react").Dispatch<import("react").SetStateAction<({
            positionId: string;
            height?: number | undefined;
            width?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            readonly right?: number | undefined;
            readonly left?: number | undefined;
            readonly top?: number | undefined;
            readonly bottom?: number | undefined;
        }[F] & {}) | undefined>>;
    };
    getOneFeilds<F extends keyof Positions>(id: import("@reduxjs/toolkit").EntityId, feilds: F[]): (F extends infer T extends keyof Positions ? { [key in T]: Positions[F]; } : never) | undefined;
    getAll(): Positions[];
    setAll(data: Record<import("@reduxjs/toolkit").EntityId, Positions> | readonly Positions[]): void;
    useAll(): {
        get: Positions[];
        set: import("react").Dispatch<import("react").SetStateAction<Positions[]>>;
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
    getEntity(): Record<import("@reduxjs/toolkit").EntityId, Positions>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
}, positionsEntitySelect: import("@reduxjs/toolkit").EntitySelectors<Positions, import("@reduxjs/toolkit").EntityState<Positions, import("@reduxjs/toolkit").EntityId>, import("@reduxjs/toolkit").EntityId>, initPositions: () => {
    id: "positionId";
    saved: "ready" | import("react-query").QueryStatus;
    status: import("react-query").QueryStatus;
    timeLoading: number;
};
export {};
