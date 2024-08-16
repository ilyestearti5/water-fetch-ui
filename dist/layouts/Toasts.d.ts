import { ToastType } from "@/data/system/toasts.model";
export interface ToastItemProps {
    item: ToastType;
    index: number;
}
export declare const ToastItem: ({ item, index }: ToastItemProps) => import("react/jsx-runtime").JSX.Element;
export declare const Toasts: () => import("react/jsx-runtime").JSX.Element;
