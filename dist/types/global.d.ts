import { EntityId } from "@reduxjs/toolkit";
import { store } from "@/store";
export type FullStateManagment = ReturnType<typeof store.getState>;
export type ReactElement<T = HTMLDivElement> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;
export type State<T = undefined> = {
    get: T;
    set: React.Dispatch<React.SetStateAction<T>>;
};
export type position = [number, number] | undefined;
export type Exact<T> = T extends undefined ? never : T;
export type KeysType = ("control" | "shift" | "alt")[];
export type cases = "camel" | "normal" | "cabab";
export type Nothing = false | 0 | null | "" | undefined;
export type IncludeParam = string | number | (string | number)[];
export interface FeildGeneralProps<T, C extends object> {
    id: string;
    state: State<T>;
    config?: C;
}
import { EntityState } from "@reduxjs/toolkit";
import { QueryStatus } from "react-query";
import { IconProps } from "@/components/Icon";
export type InitState<T extends object, I extends keyof T> = EntityState<T, EntityId> & {
    status: QueryStatus;
    id: I;
    changed: boolean;
    name: string;
    loadingTime: number;
    writeStatus: QueryStatus | "ready";
};
export type OptinalKeys<T> = {
    [K in keyof T]-?: undefined extends T[K] ? K : never;
}[keyof T];
export type GetOptinal<T extends object> = Partial<{
    [key in OptinalKeys<T>]: T[key];
}>;
export interface TableDefConfig<T extends object = any, I extends keyof T = any, N extends string = any, A extends object = {}> {
    name: N;
    id: I;
    actions?: A;
    default?: GetOptinal<T> | ((state: InitState<T, I>, arg: T) => GetOptinal<T>);
    uniques?: ((keyof T)[] | keyof T)[];
    data?: Record<EntityId, any>;
    onSave?: (state: Record<EntityId, T>, config: TableDefConfig<T, I, N, A>, fullState: FullStateManagment) => Promise<void> | void;
    onRead?: () => Promise<T[]> | T[];
}
export type ClickProps<T> = ReactElement<T> & IconProps;
