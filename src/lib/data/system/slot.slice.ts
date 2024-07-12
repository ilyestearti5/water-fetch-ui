import { PayloadAction } from "@reduxjs/toolkit";
import { defineTable } from "models/pkg/table.def";
import { TableDefConfig } from "models/pkg/types";
import { nanoid } from "@reduxjs/toolkit";
import { range } from "utils/index";
import { store } from "@/store";
import config from "api/slot.json";
import React from "react";
export type SlotIds = keyof typeof config.data;
export interface SlotType {
  slotId?: string;
  focused?: number | null;
  submited?: number | null;
  selected?: {
    [x: number]: boolean;
  };
  skiped?: {
    [x: number]: boolean;
  };
  length?: number;
  direction?: "forward" | "backward" | null;
  redirect?: boolean;
}
const slotConfig: TableDefConfig<SlotType, "slotId", "slot"> = {
  id: "slotId",
  name: "slot",
  default: {
    slotId: nanoid(14),
    focused: null,
    submited: null,
    selected: {},
    skiped: {},
    length: 0,
    direction: null,
    redirect: true,
  },
  actions: {
    changeSelectIndexs(
      state: any,
      {
        payload: { name, items = {} },
      }: PayloadAction<{
        name: string;
        items: { [number: number]: boolean };
      }>,
    ) {
      const a = state.entities[name];
      if (a) {
        a.selected = { ...items };
      }
    },
    removeSelection(state: any, { payload }: PayloadAction<string>) {
      if (state.entities[payload]) {
        slotEntity.updateOne(state, {
          id: payload,
          changes: {
            ...state.entities[payload],
            selected: {},
          },
        });
      }
    },
    next(state: any, { payload }: PayloadAction<string>) {
      const a = state.entities[payload] as SlotType | null;
      if (!a || !a.length) {
        if (a) {
          a.focused = null;
        }
        return;
      }
      const { redirect = true } = a;
      a.direction = "forward";
      if (typeof a.focused != "number") {
        a.focused = -1;
      }
      do {
        a.focused++;
        if (redirect) {
          a.focused = Math.abs(a.focused) % a.length;
        } else if (a.focused >= a.length) {
          a.focused--;
        }
      } while (a.skiped?.[a.focused]);
    },
    back(state: any, { payload }: PayloadAction<string>) {
      const a = state.entities[payload] as SlotType | null;
      if (!a || !a.length) {
        if (a) {
          a.focused = null;
        }
        return;
      }
      const { redirect = true } = a;
      a.direction = "backward";
      if (typeof a.focused != "number") {
        a.focused = a.length;
      }
      do {
        a.focused--;
        if (a.focused < 0 && redirect) {
          a.focused = a.length - 1;
        } else if (a.focused < 0) {
          a.focused = 0;
        }
      } while (a.skiped?.[a.focused]);
    },
    submit(state: any, { payload }: PayloadAction<string>) {
      const ele = state.entities[payload];
      if (ele) {
        ele.submited = ele.focused;
      }
    },
    submitNext(state: any, { payload }: PayloadAction<string>) {
      const a = state.entities[payload] as SlotType | null;
      if (!a || !a.length) {
        if (a) {
          a.submited = null;
        }
        return;
      }
      const { redirect = true } = a;
      a.direction = "forward";
      if (typeof a.submited != "number") {
        a.submited = -1;
      }
      do {
        a.submited++;
        if (redirect) {
          a.submited = a.submited % a.length;
        }
      } while (a.skiped?.[a.submited]);
    },
    submitBack(state: any, { payload }: PayloadAction<string>) {
      const a = state.entities[payload] as SlotType | null;
      if (!a || !a.length) {
        if (a) {
          a.submited = null;
        }
        return;
      }
      const { redirect = true } = a;
      a.direction = "backward";
      if (typeof a.submited != "number") {
        a.submited = a.length;
      }
      do {
        a.submited--;
        if (redirect) {
          a.submited = a.submited % a.length;
        }
        if (a.submited < 0) {
          a.submited = a.length - 1;
        }
      } while (a.skiped?.[a.submited]);
    },
    submitForce(state: any, { payload: { name, index = null } }: PayloadAction<{ name: string; index?: number | null }>) {
      const ele = state.entities[name];
      if (!ele) {
        return;
      }
      ele.focused = index;
      ele.submited = index;
    },
    escape(state: any, { payload }: PayloadAction<string>) {
      const ele = state.entities[payload] as SlotType | undefined;
      if (!ele) return;
      ele.selected = {};
      ele.focused = null;
      ele.direction = null;
      ele.submited = null;
    },
    selectAll(state: any, { payload }: PayloadAction<string>) {
      const ele = state.entities[payload] as SlotType | undefined;
      if (!ele) {
        return;
      }
      const o: { [number: number]: boolean } = {};
      range(0, Number(ele.length) - 1, 1).forEach((index) => {
        o[index] = true;
      });
      ele.selected = o;
      ele.direction = null;
    },
  },
};
export const { hooks: slotHooks, slice: slotSlice, entity: slotEntity, init: initSlot } = defineTable(slotConfig);
export function next(slotId: SlotType["slotId"]) {
  store.dispatch({
    type: `${slotConfig.name}/next`,
    payload: slotId,
  });
}
export function back(slotId: SlotType["slotId"]) {
  return store.dispatch({
    type: `${slotConfig.name}/back`,
    payload: slotId,
  });
}
export function escape(slotId: SlotType["slotId"]) {
  return store.dispatch({
    type: `${slotConfig.name}/escape`,
    payload: slotId,
  });
}
export function submit(slotId: SlotType["slotId"]) {
  store.dispatch({ type: `${slotConfig.name}/submit`, payload: slotId });
}
export function submitNext(slotId: SlotType["slotId"]) {
  store.dispatch({ type: `${slotConfig.name}/submitNext`, payload: slotId });
}
export function submitBack(slotId: SlotType["slotId"]) {
  store.dispatch({ type: `${slotConfig.name}/submitBack`, payload: slotId });
}
export function initNewList(slotId: string, data: any[]) {
  const config = slotHooks.getOne(slotId);
  //
  React.useEffect(() => {
    if (config) {
      return;
    }
    slotHooks.upsert([
      {
        slotId,
        length: data.length,
      },
    ]);
  }, [config, data]);
  //
  React.useEffect(() => {
    slotHooks.setOneFeild(slotId, "length", data.length);
  }, [data]);
}
export function getSlotData<T>(data: T[], slotId: string, get: "focused" | "submited" = "submited") {
  const getted = slotHooks.getOneFeild(slotId, get);
  return React.useMemo(() => {
    if (typeof getted != "number") {
      return null;
    }
    return data[getted] || null;
  }, [getted, data]);
}
