import cash from "@/apis/cash";
import { defineTable } from "../pkg/table.def";
import { TableDefConfig } from "@/types/global";
const { data } = cash;
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
