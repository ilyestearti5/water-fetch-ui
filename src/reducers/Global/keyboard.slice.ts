import React from "react";
import { isLike } from "@/utils/index";
import { store } from "@/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const name = "keyboard";
export interface KeyState extends Record<Parameters<React.KeyboardEvent<HTMLElement>["getModifierState"]>[0], boolean> {
  Key?: string;
}
export const initialState: KeyState = {
  Shift: false,
  Alt: false,
  Control: false,
  SymbolLock: false,
  AltGraph: false,
  CapsLock: false,
  Fn: false,
  FnLock: false,
  Hyper: false,
  Meta: false,
  NumLock: false,
  Super: false,
  ScrollLock: false,
  Symbol: false,
  Key: undefined,
};
export const selectKeyboard = (state: { [name: string]: KeyState }) => state[name];
export const keyboardSlice = createSlice({
  name,
  initialState,
  reducers: {
    // actions
    setModifier<T extends keyof KeyState>(state: KeyState, { payload }: PayloadAction<{ modifierName: T; value: KeyState[T] }>) {
      try {
        state[payload.modifierName] = payload.value;
      } catch (e) {}
    },
  },
});
export function useModifier<T extends keyof KeyState>(name: T): KeyState[T] {
  const keyPanding = useSelector(selectKeyboard, (a, b) => isLike(a[name], b[name]));
  return keyPanding[name];
}
export function setModifier<T extends keyof KeyState>(modifierName: T, value: KeyState[T]) {
  store.dispatch(keyboardSlice.actions.setModifier({ modifierName, value }));
}
