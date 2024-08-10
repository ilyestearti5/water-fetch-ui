import React from "react";
import { PayloadAction } from "@reduxjs/toolkit";
export interface KeyState extends Record<Parameters<React.KeyboardEvent<HTMLElement>["getModifierState"]>[0], boolean> {
    Key?: string;
}
export declare const initialState: KeyState;
export declare const select: (state: {
    [name: string]: KeyState;
}) => KeyState;
export declare const keyboardSlice: import("@reduxjs/toolkit").Slice<KeyState, {
    setModifier<T extends keyof KeyState>(state: KeyState, { payload }: PayloadAction<{
        modifierName: T;
        value: KeyState[T];
    }>): void;
}, "keyboard", "keyboard", import("@reduxjs/toolkit").SliceSelectors<KeyState>>;
export declare function getModifier<T extends keyof KeyState>(name: T): KeyState[T];
export declare function setModifier<T extends keyof KeyState>(modifierName: T, value: KeyState[T]): void;
export declare function initHandelKeyboard(): void;
