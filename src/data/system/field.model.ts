import React from "react";
import { defineTable } from "@/data/pkg/table.def";
import { TableDefConfig } from "@/types/global";
import fields from "@/apis/fields";
import { store } from "@/store";
import { TextAreaProps } from "@/components/TextArea";
import { FullStateManagment } from "@/types/global";
const { data } = fields;
export type FeildIds = keyof typeof data;
export interface Feild {
  fieldId: string;
  selection: TextAreaProps["selection"];
  value: string;
  controls: Record<string, { succ?: string; err?: string }>;
  history?: string[];
}
// Init Client Config
const initFeildModel: TableDefConfig<Feild, "fieldId", "fields"> = {
  name: "fields",
  id: "fieldId",
  default: () => ({
    selection: {
      direction: "forward",
      end: 0,
      start: 0,
    },
    value: "",
  }),
  data,
};
// create field model
export const { entity: fieldEntity, slice: fieldSlice, hooks: fieldHooks, entitySelect: fieldEntitySelect, init: initFeilds } = defineTable(initFeildModel);
// init all fields
export type FeildRecord<T extends string | number> = Record<T, string>;
