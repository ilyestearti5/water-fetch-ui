import { defineTable } from "@/data/pkg/table.def";
import { TableDefConfig } from "@/data/pkg/types";
import { EntityId, nanoid } from "@reduxjs/toolkit";
import { data } from "@/apis/views.json";
import React from "react";
export type ViewIds = keyof typeof data;
export interface View {
  viewId: string;
  label: string;
  focused: string | null;
  tabs: {
    [label: string]: {
      icon?: {
        type: "solid" | "normal" | "brad";
        value: string;
      };
      news?: View["tabs"][string]["icon"];
      label?: string;
    };
  };
}
const initConfig: TableDefConfig<View, "viewId", "views"> = {
  name: "views",
  id: "viewId",
  default(_, record) {
    const tabs = record.tabs || {};
    for (const tab in tabs) {
      if (!tabs[tab].label) {
        tabs[tab].label = tab;
      }
    }
    return {
      viewId: nanoid(),
      focused: null,
      tabs,
    };
  },
  data,
};
export const { hooks: viewHooks, slice: viewSlice, init: initViews, select } = defineTable(initConfig);
export function useFocusedTab(id: EntityId) {
  const view = viewHooks.getOne(id);
  return React.useMemo(() => {
    return typeof view?.focused == "number" ? view?.tabs?.[view.focused] : null;
  }, [view]);
}
