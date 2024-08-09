import { TableDefConfig } from "../pkg/types";
import data from "@/apis/cash.json";
import { defineTable } from "../pkg/table.def";
export interface Casher {
  linkId: string;
  response?: string;
  status?: "error" | "success" | "idle";
}
const initConfig: TableDefConfig<Casher, "linkId", "cahser"> = {
  id: "linkId",
  name: "cahser",
  data,
  default() {
    return {
      status: "idle",
    };
  },
};
export const { init: initCashing, hooks: cashHook, slice: cashSlice } = defineTable(initConfig);
