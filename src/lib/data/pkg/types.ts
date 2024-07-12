import { EntityState } from "@reduxjs/toolkit";
import { QueryStatus } from "react-query";
//
export type InitState<T extends object, I extends keyof T> = EntityState<T, EntityId> & {
  status: QueryStatus;
  id: I;
  changed: boolean;
  name: string;
  loadingTime: number;
  writeStatus: QueryStatus | "ready";
};
//
export type OptinalKeys<T> = {
  [K in keyof T]-?: undefined extends T[K] ? K : never;
}[keyof T];
export type GetOptinal<T extends object> = Partial<{
  [key in OptinalKeys<T>]: T[key];
}>;
import { EntityId } from "@reduxjs/toolkit";
import { FullStateManagment } from "@/vite-env";
export interface TableDefConfig<T extends object = any, I extends keyof T = any, N extends string = any, A extends object = {}> {
  name: N;
  id: I;
  actions?: A;
  section?: string;
  default?: GetOptinal<T> | ((state: InitState<T, I>, arg: T) => GetOptinal<T>);
  uniques?: ((keyof T)[] | keyof T)[];
  data?: Record<EntityId, any>;
  onSave?: (state: Record<EntityId, T>, config: TableDefConfig<T, I, N, A>, fullState: FullStateManagment) => Promise<void> | void;
  onRead?: () => Promise<T[]> | T[];
}
