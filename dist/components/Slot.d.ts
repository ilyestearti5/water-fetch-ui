import { FunctionComponentListItem } from "@/types/global";
import { FocusProps } from "./Focus";
export interface SlotProps<T> extends FocusProps {
    slotId: string;
    data: T[];
    direction?: (keyof T)[];
    component?: FunctionComponentListItem<T> | (keyof T)[];
    handelSkipedItem?: (data: T) => boolean;
    type?: "horizontal" | "vertical";
}
export declare function Slot<T>({ data, slotId, focusId, component: compo, children, handelSkipedItem, className, direction, ref, type, ...props }: SlotProps<T>): import("react/jsx-runtime").JSX.Element;
