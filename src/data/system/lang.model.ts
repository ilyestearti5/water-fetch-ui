import { defineTable } from "@/data/pkg/table.def";
import { TableDefConfig } from "@/types/global";
export type AllLangs = "ar" | "fr" | "en" | "es" | "de" | "it" | "ja" | "ko" | "pt" | "ru" | "zh";

export interface Lang extends Record<string, string> {
  word: string;
}
export const initConfig: TableDefConfig<Lang, "word", "langs"> = {
  id: "word",
  name: "langs",
};
export const cashLangs = () => langHooks.setWriteStatus("idle");
export const { init: initLangs, hooks: langHooks, entity: langEntity, slice: langsSlice } = defineTable(initConfig);
