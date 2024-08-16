import { FunctionComponentListItem } from "@/types/global";
export interface ListProps<T> {
    slotId: string;
    data: T[];
    component: FunctionComponentListItem<T>;
    skipFn?: (item: T, index: number) => boolean;
}
export declare function List<T>({ slotId, component, data, skipFn }: ListProps<T>): import("react/jsx-runtime").JSX.Element;
