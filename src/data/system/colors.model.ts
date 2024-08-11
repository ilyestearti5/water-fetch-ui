import { TableDefConfig } from "@/types/global";
import { EntityId } from "@reduxjs/toolkit";
import { defineTable } from "@/data/pkg/table.def";
import colors from "@/apis/color";
const { data } = colors;
export type ColorIds = keyof typeof data;
// Each Record Of One Color
export interface Color {
  colorId: string;
  dark?: string;
  light?: string;
  default?: string;
  propositions?: string[];
}
const initConfig: TableDefConfig<Color, "colorId", "color"> = {
  id: "colorId",
  name: "color",
  data,
};
export const { hooks: colorHooks, slice: colorSlice, init: initColors, select: selectColors, entity: colorEntity, entitySelect: colorSelectors } = defineTable(initConfig);
