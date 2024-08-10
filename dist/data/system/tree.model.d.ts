import { PayloadAction } from "@reduxjs/toolkit";
import { ReactElement } from "@/types/global";
import { TableDefConfig } from "@/types/global";
import React from "react";
export declare const initState: TableDefConfig<Tree, "treeId", "tree">;
export declare const initTrees: () => {
    id: "treeId";
    saved: "ready" | import("react-query").QueryStatus;
    status: import("react-query").QueryStatus;
    timeLoading: number;
}, treeHooks: {
    getFull(): import("@/types/global").InitState<any, "treeId">;
    getIds(): import("@reduxjs/toolkit").EntityId[];
    getId(): "treeId";
    remove(ids: import("@reduxjs/toolkit").EntityId[]): void;
    add(data: Tree[]): void;
    upsert(data: Tree[]): void;
    getOne(id: import("@reduxjs/toolkit").EntityId): {
        ends: string[];
        treeId: string;
        focused?: string | null;
        submited?: string;
        selected?: Record<string, boolean>;
        skiped?: Record<string, boolean>;
        expanded?: Record<string, boolean>;
        separator?: string;
    } | undefined;
    setOne(id: import("@reduxjs/toolkit").EntityId, changes: Partial<Tree>): void;
    setWriteStatus(status?: import("@/types/global").InitState<Tree, "treeId">["writeStatus"]): void;
    useOne(id: import("@reduxjs/toolkit").EntityId): {
        get: {
            ends: string[];
            treeId: string;
            focused?: string | null;
            submited?: string;
            selected?: Record<string, boolean>;
            skiped?: Record<string, boolean>;
            expanded?: Record<string, boolean>;
            separator?: string;
        } | undefined;
        set: React.Dispatch<React.SetStateAction<{
            ends: string[];
            treeId: string;
            focused?: string | null;
            submited?: string;
            selected?: Record<string, boolean>;
            skiped?: Record<string, boolean>;
            expanded?: Record<string, boolean>;
            separator?: string;
        } | undefined>>;
    };
    getOneFeild<F extends keyof Tree>(recordId: import("@reduxjs/toolkit").EntityId, feild: F): ({
        ends: string[];
        treeId: string;
        focused?: string | null;
        submited?: string;
        selected?: Record<string, boolean>;
        skiped?: Record<string, boolean>;
        expanded?: Record<string, boolean>;
        separator?: string;
    }[F] & ({} | null)) | undefined;
    setOneFeild<F extends keyof Tree>(id: import("@reduxjs/toolkit").EntityId, feild: F, value: Tree[F]): void;
    useOneFeild<F extends keyof Tree>(recordeId: import("@reduxjs/toolkit").EntityId, feild: F): {
        get: ({
            ends: string[];
            treeId: string;
            focused?: string | null;
            submited?: string;
            selected?: Record<string, boolean>;
            skiped?: Record<string, boolean>;
            expanded?: Record<string, boolean>;
            separator?: string;
        }[F] & ({} | null)) | undefined;
        set: React.Dispatch<React.SetStateAction<({
            ends: string[];
            treeId: string;
            focused?: string | null;
            submited?: string;
            selected?: Record<string, boolean>;
            skiped?: Record<string, boolean>;
            expanded?: Record<string, boolean>;
            separator?: string;
        }[F] & ({} | null)) | undefined>>;
    };
    getOneFeilds<F extends keyof Tree>(id: import("@reduxjs/toolkit").EntityId, feilds: F[]): (F extends infer T extends keyof Tree ? { [key in T]: Tree[F]; } : never) | undefined;
    getAll(): Tree[];
    setAll(data: Record<import("@reduxjs/toolkit").EntityId, Tree> | readonly Tree[]): void;
    useAll(): {
        get: Tree[];
        set: React.Dispatch<React.SetStateAction<Tree[]>>;
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
    getEntity(): Record<import("@reduxjs/toolkit").EntityId, Tree>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
}, treeSlice: import("@reduxjs/toolkit").Slice<import("@reduxjs/toolkit").EntityState<Tree, import("@reduxjs/toolkit").EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "treeId";
    name: "tree";
    loadingTime: number;
    changed: boolean;
}, {
    set(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Tree, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "treeId";
        name: "tree";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Tree> | readonly Tree[];
        type: string;
    }): void;
    add(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Tree, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "treeId";
        name: "tree";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Tree> | readonly Tree[];
        type: string;
    }): void;
    remove(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Tree, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "treeId";
        name: "tree";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<readonly import("@reduxjs/toolkit").EntityId[]>): void;
    update(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Tree, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "treeId";
        name: "tree";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: readonly import("@reduxjs/toolkit").Update<Tree, import("@reduxjs/toolkit").EntityId>[];
        type: string;
    }): void;
    reset(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Tree, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "treeId";
        name: "tree";
        loadingTime: number;
        changed: boolean;
    }>): void;
    upsert(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Tree, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "treeId";
        name: "tree";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Tree> | readonly Tree[];
        type: string;
    }): void;
    changeStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Tree, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "treeId";
        name: "tree";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<import("@/types/global").InitState<Tree, "treeId">["status"]>): void;
    setLoadingTime(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Tree, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "treeId";
        name: "tree";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<number>): void;
    setChanged(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Tree, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "treeId";
        name: "tree";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<boolean>): void;
    changeWriteStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Tree, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "treeId";
        name: "tree";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<import("@/types/global").InitState<Tree, "treeId">["writeStatus"]>): void;
}, "tree", "tree", import("@reduxjs/toolkit").SliceSelectors<import("@reduxjs/toolkit").EntityState<Tree, import("@reduxjs/toolkit").EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "treeId";
    name: "tree";
    loadingTime: number;
    changed: boolean;
}>>;
export interface Tree {
    ends: string[];
    treeId: string;
    focused?: string | null;
    submited?: string;
    selected?: Record<string, boolean>;
    skiped?: Record<string, boolean>;
    expanded?: Record<string, boolean>;
    separator?: string;
}
export interface TreeComponentProps<T> extends ReactElement {
    position: string;
    data: T;
    index: number;
    handels: {
        expand: (only: boolean, value: boolean) => any;
        focus: Function;
        select: (only: boolean, value: boolean) => any;
        submit: Function;
    };
    status: Record<`is${"Submited" | "Selected" | "Focused" | "Expanded"}`, boolean>;
    parent?: TreeProps<T>["parent"];
    isFins: boolean;
    innerTree: TreeProps<T>["tree"];
    level: number;
}
export interface TreeProps<T> {
    treeId: string;
    tree?: {
        data: T;
        innerTree?: TreeProps<T>["tree"] | undefined;
    }[];
    component: (props: TreeComponentProps<T>) => JSX.Element;
    level?: number;
    size?: string;
    position?: string;
    parent?: {
        data: T;
        parent: TreeProps<T>["parent"];
    };
}
export declare function initNewTree(treeId: string): void;
export declare function toLinear<T>(tree: TreeProps<T>["tree"], level?: number): {
    data: T;
    level: number;
}[];
export declare function toTree<T>(_linearTree: ReturnType<typeof toLinear<T>>): {
    data: T;
    innerTree?: any[] | undefined;
}[];
export declare function Tree<T>({ treeId, tree, component, level, position, parent }: TreeProps<T>): import("react/jsx-runtime").JSX.Element;
