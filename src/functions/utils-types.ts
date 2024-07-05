import { Shortcut } from "./react-utils";
export type Exact<T> = T extends undefined ? never : T;
export type KeysType = (keyof Omit<Shortcut["propertys"], "keys">)[];
