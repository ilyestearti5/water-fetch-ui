import { defineTable } from "models/pkg/table.def";
import { TableDefConfig } from "models/pkg/types";
import { data } from "api/langs.json";
export type LangIds = keyof typeof data;
export interface Lang {
  langId: string;
  value: string;
}
export const initConfig: TableDefConfig<Lang, "langId", "langs"> = {
  id: "langId",
  name: "langs",
  data,
};
export const cashLangs = () => langHooks.setWriteStatus("idle");
export const { init: initLangs, hooks: langHooks, entity: langEntity, slice: langsSlice } = defineTable(initConfig);
