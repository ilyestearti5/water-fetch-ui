export type cases = "camel" | "normal" | "cabab";
export type Nothing = false | 0 | null | "" | undefined;
export type Exact<T> = T extends undefined ? never : T;
export type IncludeParam = string | number | (string | number)[];
