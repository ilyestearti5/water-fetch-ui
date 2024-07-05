import { isLike } from "utils/index";
import { store } from "@/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
const name = "keyboard";
export interface KeyState extends Record<Parameters<React.KeyboardEvent<HTMLElement>["getModifierState"]>[0], boolean> {
  Key?: string;
}
const initialState: KeyState = {
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
const select = (state: { [name: string]: KeyState }) => state[name];
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
export function useKeyboard<T extends keyof KeyState>(name: T): KeyState[T] {
  const keyPanding = useSelector(select, (a, b) => isLike(a[name], b[name]));
  return keyPanding[name];
}
export function setModifier<T extends keyof KeyState>(modifierName: T, value: KeyState[T]) {
  store.dispatch(keyboardSlice.actions.setModifier({ modifierName, value }));
}
export function initHandelKeyboard() {
  React.useEffect(() => {
    const handel = (e: KeyboardEvent) => {
      if (!e.repeat) {
        setModifier("Shift", e.getModifierState("Shift"));
        setModifier("Alt", e.getModifierState("Alt"));
        setModifier("Control", e.getModifierState("Control"));
        setModifier("SymbolLock", e.getModifierState("SymbolLock"));
        setModifier("AltGraph", e.getModifierState("AltGraph"));
        setModifier("CapsLock", e.getModifierState("CapsLock"));
        setModifier("Fn", e.getModifierState("Fn"));
        setModifier("FnLock", e.getModifierState("FnLock"));
        setModifier("Hyper", e.getModifierState("Hyper"));
        setModifier("Meta", e.getModifierState("Meta"));
        setModifier("NumLock", e.getModifierState("NumLock"));
        setModifier("Super", e.getModifierState("Super"));
        setModifier("ScrollLock", e.getModifierState("ScrollLock"));
        setModifier("Symbol", e.getModifierState("Symbol"));
        setModifier("Key", e.key);
      }
    };
    addEventListener("keydown", handel);
    addEventListener("keyup", handel);
    return () => {
      removeEventListener("keydown", handel);
      removeEventListener("keyup", handel);
    };
  }, []);
}
