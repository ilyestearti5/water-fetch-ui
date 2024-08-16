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
export interface SetSmallStateProps {
    force?: boolean;
    direction: string;
    value: any;
}
export interface SetProgressProps {
    value?: number;
    options?: globalThis.Electron.ProgressBarOptions | undefined;
}
export interface SendEmailProps {
    to: string;
    subject?: string;
    body?: string;
}
export interface SendTelProps {
    tel: string;
}
export interface SendSmsProps {
    to: string;
    body?: string;
}
export interface OpenMenuProps {
    menu: Partial<Electron.MenuItem>[];
    x: number;
    y: number;
}
export interface DialogProps extends Electron.MessageBoxOptions {
    force?: boolean;
}
export interface ListItemProps<T> extends ReactElement {
    handelSubmit: (fn?: Function) => (e?: any) => void;
    handelFocus: (fn?: Function) => (e?: any) => void;
    handelSelect: (fn?: Function) => (e?: any) => void;
    item: T;
    index: number;
    status: {
        isFocused: boolean;
        isSelected: boolean;
        isSubmited: boolean;
        isSkiped: boolean;
    };
}
export type FunctionComponentListItem<T> = (props: ListItemProps<T>) => JSX.Element;
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
export interface CameraOptions {
    type: keyof FullCameraResult;
}
export interface FullCameraResult {
    scanner: string;
    take: string;
}
export type CameraResult<T extends keyof FullCameraResult> = FullCameraResult[T];
export interface CameraConfig<T extends keyof FullCameraResult> {
    result?: CameraResult<T>;
    error?: string;
    id?: string;
}
export type CssColorKeys = "background" | "backgroundColor" | "color" | "borderColor" | "outlineColor" | "borderLeftColor" | "borderRightColor" | "borderBottomColor" | "borderTopColor" | "boxShadow" | "caretColor" | "fill" | "stroke";
