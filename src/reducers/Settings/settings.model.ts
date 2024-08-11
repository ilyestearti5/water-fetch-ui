import { defineTable } from "@/data/pkg/table.def";
import { TableDefConfig } from "@/types/global";
import { PayloadAction } from "@reduxjs/toolkit";
import settings from "@/apis/settings";
import { SettingConfig, SettingValueType } from "./SettingConfig";
const { data } = settings;
//
export type SettingIds = keyof typeof data;
//
export interface Setting<T extends keyof SettingConfig> {
  settingId: `${string}.${T}`;
  name?: string;
  desc?: string;
  private?: boolean;
  value: SettingValueType[T];
  config?: SettingConfig[T];
  deperacted?: boolean;
  def?: SettingValueType[T];
  readonly?: boolean;
}
//
// init
const initConfig: TableDefConfig<Setting<keyof SettingConfig>, "settingId", "settings"> = {
  name: "settings",
  id: "settingId",
  default(_, { def }) {
    return {
      private: false,
      deperacted: false,
      config: {},
      value: def,
    };
  },
  actions: {
    toggle(state: any, { payload }: PayloadAction<string>) {
      const setting = state.entities[payload];
      if (setting) {
        setting.value = !setting.value;
      }
    },
  },
  data,
};
export const { hooks: settingHooks, slice: settingSlice, init: initSettings, entitySelect: settingEntitySelect } = defineTable(initConfig);
