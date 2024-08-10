import { con, valueFromString } from "@/utils";
import { store } from "./store";
import { FullStateManagment } from "./types/global";
export const onceState = <T extends object | string | number | boolean | null>(stateDir: string, comparedValue: T | ((val: T | undefined) => boolean), on?: (state: FullStateManagment) => void) => {
  const callback = () => {
    const state = store.getState();
    const { value } = valueFromString<T>(state, stateDir);
    const result = typeof comparedValue == "function" ? comparedValue(value) : value == comparedValue;
    if (result) {
      un();
      on?.(state);
    }
  };
  const un = store.subscribe(callback);
  return un;
};
export const onState = <T extends object | string | number | boolean | null>(stateDir: string, comparedValue: T | ((val: T | undefined) => boolean), on?: (state: FullStateManagment) => void) => {
  const callback = () => {
    const state = store.getState();
    const { value, isValide } = valueFromString<T>(state, stateDir);
    if (!isValide) {
      con.warn("Invalid State Dir", stateDir);
      return;
    }
    const result = typeof comparedValue == "function" ? comparedValue(value) : value == comparedValue;
    if (result) {
      on?.(state);
    }
  };
  return store.subscribe(callback);
};
