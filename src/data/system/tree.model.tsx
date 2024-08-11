import { PayloadAction } from "@reduxjs/toolkit";
import { defineTable } from "@/data/pkg/table.def";
import { TableDefConfig } from "@/types/global";
import React from "react";
export const initState: TableDefConfig<TreeType, "treeId", "tree"> = {
  id: "treeId",
  name: "tree",
  default: {
    expanded: {},
    separator: "/",
  },
  actions: {
    next(state: any, { payload }: PayloadAction<string>) {
      const tr = state.entities[payload] as TreeType | undefined;
      if (!tr) {
        return;
      }
    },
    back(state: any, { payload }: PayloadAction<string>) {
      const tr = state.entities[payload] as TreeType | undefined;
      if (!tr) {
        return;
      }
    },
    toggleExpand(state: any, { payload }: PayloadAction<string>) {
      const tr = state.entities[payload] as TreeType | undefined;
      if (tr && tr.focused) {
        tr.expanded = {
          ...(tr.expanded || {}),
          [tr.focused]: !tr.expanded?.[tr.focused],
        };
      }
    },
    expandMore(state: any, { payload }: PayloadAction<string>) {
      const tr = state.entities[payload] as TreeType | undefined;
      if (tr && tr.focused) {
        tr.expanded = {
          ...(tr.expanded || {}),
          [tr.focused]: true,
        };
      }
    },
    expandLess(state: any, { payload }: PayloadAction<string>) {
      const tr = state.entities[payload] as TreeType | undefined;
      if (tr && tr.focused) {
        tr.expanded = {
          ...(tr.expanded || {}),
          [tr.focused]: false,
        };
      }
    },
    focusParent(state: any, { payload }: PayloadAction<string>) {
      const tr = state.entities[payload] as TreeType | undefined;
      if (tr && tr.focused && tr.separator) {
        const newFocused = tr.focused.split(tr.separator).slice(0, -1).join(tr.separator);
        tr.focused = newFocused || null;
      }
    },
    focusLeft(state: any, { payload }: PayloadAction<string>) {
      const tr = state.entities[payload] as TreeType | undefined;
      if (tr && tr.focused && tr.separator) {
        const expanded = tr.expanded?.[tr.focused];
        if (expanded) {
          tr.expanded = {
            ...(tr.expanded || {}),
            [tr.focused]: false,
          };
        } else {
          const newFocused = tr.focused.split(tr.separator).slice(0, -1).join(tr.separator);
          tr.focused = newFocused || null;
        }
      }
    },
    focusRight(state: any, { payload }: PayloadAction<string>) {
      const tr = state.entities[payload] as TreeType | undefined;
      if (tr && tr.focused && tr.separator) {
        const expanded = tr.expanded?.[tr.focused];
        if (!expanded) {
          tr.expanded = {
            ...(tr.expanded || {}),
            [tr.focused]: true,
          };
        } else {
          const newFocused = [...tr.focused.split(tr.separator), "0"].join(tr.separator);
          tr.focused = newFocused;
        }
      }
    },
  },
  data: {},
};
export const { init: initTrees, hooks: treeHooks, slice: treeSlice } = defineTable(initState);
export interface TreeType {
  ends: string[];
  treeId: string;
  focused?: string | null;
  submited?: string;
  selected?: Record<string, boolean>;
  skiped?: Record<string, boolean>;
  expanded?: Record<string, boolean>;
  separator?: string;
}
export function initNewTree(treeId: string) {
  const tr = treeHooks.getOne(treeId);
  React.useEffect(() => {
    if (tr) {
      return;
    }
    treeHooks.add([
      {
        treeId,
        ends: [],
      },
    ]);
  }, [tr]);
}
