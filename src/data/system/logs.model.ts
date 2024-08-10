import { nanoid } from "@reduxjs/toolkit";
import { defineTable } from "@/data/pkg/table.def";
import { TableDefConfig } from "@/types/global";
export interface Log {
  logId?: string;
  title: string;
  createdAt?: string;
  showDesc?: boolean;
  desc?: string;
  type?: "INFO" | "SUCC" | "ERR" | "WARN";
  category?: string;
}
const initConfig: TableDefConfig<Log, "logId", "logs"> = {
  id: "logId",
  name: "logs",
  data: {},
  default: () => {
    return {
      logId: nanoid(10),
      desc: "",
      type: "INFO",
      category: "window",
      showDesc: false,
      createdAt: new Date().toISOString(),
    };
  },
};
export const { entity: logEntity, slice: logSlice, init: initLogs, hooks: logHooks } = defineTable(initConfig);
