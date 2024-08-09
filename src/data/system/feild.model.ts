import React from "react";
import { defineTable } from "@/data/pkg/table.def";
import { TableDefConfig } from "@/data/pkg/types";
import { data } from "@/apis/feilds.json";
import { TextAreaProps } from "main/src/Components/ReactComponentOnly/TextArea";
import { store } from "@/store";
import { FullStoreManagment } from "main/src/Components/Feilds/Types";
type FeildIds = keyof typeof data;
export interface Feild {
  feildId: string;
  selection: TextAreaProps["selection"];
  value: string;
  controls: Record<string, { succ?: string; err?: string }>;
  history?: string[];
}
// Init Client Config
const initFeildModel: TableDefConfig<Feild, "feildId", "feilds"> = {
  name: "feilds",
  id: "feildId",
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
// create feild model
export const { entity: feildEntity, slice: feildSlice, hooks: feildHooks, entitySelect: feildEntitySelect, init: initFeilds } = defineTable(initFeildModel);
// init all feilds
export type FeildRecord<T extends string | number> = Record<T, FeildIds>;
export function getManyFeilds<S extends string | number, T extends FeildRecord<S>>(feilds: T, deps: any = []): Record<keyof T, string | undefined> {
  const e = Object.entries<FeildIds>(feilds);
  const allFeilds = e.map(([, feildId]) => feildHooks.getOneFeild(feildId, "value"));
  return React.useMemo(() => {
    const result: any = {};
    e.forEach(([name], index) => {
      const value = allFeilds[index];
      result[name] = value;
    });
    return result as T;
  }, [...allFeilds, ...deps]);
}
export function resetManyFeilds<T extends FeildIds>(feilds: T[]) {
  feilds.forEach((feildId) => {
    feildHooks.setOneFeild(feildId, "value", "");
  });
}
export function initNewFeild(feildId: string) {
  const feild = feildHooks.getOne(feildId);
  React.useEffect(() => {
    if (feild) {
      return;
    }
    feildHooks.add([
      {
        feildId,
        selection: {
          direction: "forward",
          end: 0,
          start: 0,
        },
        value: "",
        controls: {},
      },
    ]);
  }, [feild]);
}
export function getPrevious(value: string | undefined, selection: TextAreaProps["selection"]) {
  const previousString = React.useMemo(() => {
    if (!selection) {
      return value || "";
    }
    const min = Math.min(selection.start, selection.end);
    return value?.slice(0, min) || "";
  }, [value, selection]);
  return previousString;
}
//
export function getNext(value: string | undefined, selection: TextAreaProps["selection"]) {
  const nextString = React.useMemo(() => {
    if (!selection) {
      return value || "";
    }
    const max = Math.max(selection.start, selection.end);
    return value?.slice(max) || "";
  }, [value, selection]);
  return nextString;
}
//
export function getSelected(value: string | undefined, selection: TextAreaProps["selection"]) {
  const selectedString = React.useMemo(() => {
    if (!selection) {
      return value || "";
    }
    const min = Math.min(selection.start, selection.end);
    const max = Math.max(selection.start, selection.end);
    return value?.slice(min, max) || "";
  }, [value, selection]);
  return selectedString;
}
export function initNewFeilds(inputNames: string[]) {
  inputNames.forEach(initNewFeild);
}
//
export function getFeildPrevious(feildId: string) {
  const value = feildHooks.getOneFeild(feildId, "value");
  const cursor = feildHooks.getOneFeild(feildId, "selection");
  return getPrevious(value, cursor);
}
export function getFeildNext(feildId: string) {
  const value = feildHooks.getOneFeild(feildId, "value");
  const cursor = feildHooks.getOneFeild(feildId, "selection");
  return getNext(value, cursor);
}
export function getFeildSelected(feildId: string) {
  const value = feildHooks.getOneFeild(feildId, "value");
  const cursor = feildHooks.getOneFeild(feildId, "selection");
  return getSelected(value, cursor);
}
export const feildElement = (id: string) => document.getElementById(id) as HTMLTextAreaElement | null;
export function checkFormByFeilds(feilds: string[], state: FullStoreManagment = store.getState()) {
  const controls = feilds.map((feildName) => {
    const feildInfo = state.feilds.entities[feildName];
    const controls = Object.keys(feildInfo?.controls || {});
    if (!feildInfo || !controls.length) {
      return {
        response: [],
        isValide: true,
      };
    }
    const value = feildInfo.value;
    const response = controls.map((exp) => value.match(new RegExp(exp, "ig")));
    return { response, isValide: response.every(Boolean), feildName };
  });
  return {
    controls,
    isValide: controls.every(({ isValide }) => isValide),
  };
}
