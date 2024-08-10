import { ReactElement } from "@/types/global";
import { FocusProps } from "@/components/Focus";
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
export interface FunctionComponentListItem<T> {
    (props: ListItemProps<T>): JSX.Element;
}
export interface SlotProps<T> extends FocusProps {
    slotId: string;
    data: T[];
    direction?: (keyof T)[];
    component?: FunctionComponentListItem<T> | (keyof T)[];
    handelSkipedItem?: (data: T) => boolean;
    type?: "horizontal" | "vertical";
}
export interface ListProps<T> {
    slotId: string;
    data: T[];
    component: FunctionComponentListItem<T>;
    skipFn?: (item: T, index: number) => boolean;
}
export declare const prefixId: (a: string | number, b: number | string) => string;
export declare function List<T>({ slotId, component, data, skipFn }: ListProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function Slot<T>({ data, slotId, focusId, component: compo, children, handelSkipedItem, className, direction, ref, type, ...props }: SlotProps<T>): import("react/jsx-runtime").JSX.Element;
