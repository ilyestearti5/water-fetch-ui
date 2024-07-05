import React from "react";
import { defineTable } from "models/pkg/table.def";
import { TableDefConfig } from "models/pkg/types";
import { feildHooks } from "models/system/feild.model";
import { PayloadAction } from "@reduxjs/toolkit";
import { getSeparateSearchInput, include, isLike } from "utils/index";
import { data } from "api/settings.json";
import { SettingConfig, SettingValueType } from "./SettingConfig";
import { viewHooks } from "models/system/views.model";
import { Db } from "@/functions/classes";
import { setTemp } from "../Object/object.slice";
import { mergeArray } from "@/functions/react-utils";
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
export function getSettingValue<ID extends keyof SettingConfig>(settingId: Setting<ID>["settingId"]) {
  const setting = getSettingById(settingId);
  return setting?.value;
}
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
export function getSettingById<ID extends keyof SettingValueType>(settingId: `${string}.${ID}`): Setting<ID> | null {
  const setting = settingHooks.getOne(settingId);
  const result = React.useMemo(() => {
    return setting ? setting : null;
  }, [setting]) as any;
  return result;
}
export function getPublicSettings() {
  const settings = settingHooks.getAll();
  const result = React.useMemo(() => settings.filter(({ private: prev = false }) => !prev), [settings]);
  return result;
}
export function getSettingConfig<ID extends keyof SettingValueType>(settingId: `${string}.${ID}`): SettingConfig[ID] | null {
  const setting = settingHooks.getOneFeild(settingId, "config");
  const result = React.useMemo(() => {
    return setting ? setting : null;
  }, [setting]) as any;
  return result;
}
export function getPublicSettingsFilter() {
  // all public settings
  const settings = getPublicSettings();
  // get value of what search for
  const value = feildHooks.getOneFeild("findConfigurations", "value");
  // get the choised view
  const viewSetting = viewHooks.getOneFeild("settings.viewType", "focused") as "list" | "tree" | undefined;
  // search using setting id
  const sortedSetting = React.useMemo(() => {
    if (viewSetting == "list") {
      return Db.orderBy(settings, "name", "asc");
    } else if (viewSetting) {
      return Db.orderBy(settings, "settingId", "asc");
    } else {
      return settings;
    }
  }, [viewSetting, settings]);
  const findBy = getSettingValue("settings/findBy.enum") as keyof Setting<keyof SettingConfig> | "nice" | undefined;
  //
  const separateSearchInput = React.useMemo(() => {
    return Object.entries(getSeparateSearchInput(String(value))).map(([key, value]) => [key, value.join(" ")]);
  }, [value]);
  // thr true result
  const result = React.useMemo(() => {
    return sortedSetting.filter((setting) => {
      return separateSearchInput.every(([keySearch, valueSearch]) => {
        switch (keySearch) {
          case "id": {
            return include(setting.settingId, valueSearch);
          }
          case "name": {
            return typeof setting.name == "string" && include(setting.name, valueSearch);
          }
          case "changed": {
            return !isLike(setting.def, setting.value);
          }
          case "type": {
            const id = setting.settingId.match(/\.[a-z]+$/gi)?.[0].slice(1);
            if (typeof id == "string") {
              return include(valueSearch, id);
            }
            return false;
          }
          case "default value": {
            if (findBy == "nice") {
              return include(mergeArray(setting.name, setting.desc, setting.settingId).join(" "), valueSearch);
            }
            return findBy && include(String(setting[findBy]), valueSearch);
          }
        }
      });
    });
  }, [separateSearchInput, sortedSetting, findBy]);
  React.useEffect(() => {
    setTemp("configurations.found.length", result.length);
  }, [result]);
  // get settings sorted and
  return result;
}
export function setSettingConfig<ID extends keyof SettingValueType>(settingId: `${string}.${ID}`, config: SettingConfig[ID]) {
  settingHooks.setOneFeild(settingId, "config", config);
}
