import { defineTable } from "@/data/pkg/table.def";
import { TableDefConfig } from "@/types/global";
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
