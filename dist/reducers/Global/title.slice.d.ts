import { PayloadAction } from "@reduxjs/toolkit";
export interface TitleInitState {
    content: string | number | null | undefined;
    position: null | [number, number];
    x: "left" | "right" | "center";
    y: "top" | "bottom" | "center";
}
export declare const initialState: TitleInitState;
export declare const titleSlice: import("@reduxjs/toolkit").Slice<TitleInitState, {
    setContent(state: import("immer").WritableDraft<TitleInitState>, { payload }: PayloadAction<TitleInitState["content"]>): void;
    setPosition(state: import("immer").WritableDraft<TitleInitState>, { payload }: PayloadAction<TitleInitState["position"]>): void;
    setX(state: import("immer").WritableDraft<TitleInitState>, { payload }: PayloadAction<TitleInitState["x"]>): void;
    setY(state: import("immer").WritableDraft<TitleInitState>, { payload }: PayloadAction<TitleInitState["y"]>): void;
}, "title", "title", import("@reduxjs/toolkit").SliceSelectors<TitleInitState>>;
export declare function setTitle(title: TitleInitState["content"]): void;
export declare function getTitle(): string | number | null | undefined;
export declare function setPosition(position: TitleInitState["position"]): void;
export declare function getPosition(): [number, number] | null;
export declare function setX(origin?: TitleInitState["x"]): void;
export declare function getX(): "right" | "left" | "center";
export declare function setY(origin?: TitleInitState["y"]): void;
export declare function getY(): "center" | "top" | "bottom";
