import { defineTable } from "models/pkg/table.def";
import { TableDefConfig } from "models/pkg/types";
import { nanoid } from "@reduxjs/toolkit";
export interface ToastType {
  id?: string;
  message: string | number;
  type?: "info" | "warning" | "error" | "success";
  time?: number;
}
const initConfig: TableDefConfig<ToastType, "id", "toasts"> = {
  id: "id",
  name: "toasts",
  default: () => {
    return {
      id: nanoid(),
      type: "info",
    };
  },
};
export const { hooks: toastHooks, init: initToasts, select: selectToasts, slice: taostsSlice, entity: toastsEntity } = defineTable(initConfig);

export function showToast(message: ToastType["message"], type: ToastType["type"], id = nanoid(), time: number = ToastTime.short) {
  toastHooks.add([
    {
      message,
      type,
      time,
      id,
    },
  ]);
  return id;
}
export enum ToastTime {
  short = 5,
  long = 5,
}
