import { con, isLike, valueFromString } from "utils/index";
import { useCopyState } from "@/functions/react-utils";
import { store } from "@/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { QueryStatus } from "react-query";
export type TempState = Record<typeof objectName, typeof initialState>;
export const objectName = "object";
export interface ObjectTemp {
  data: any;
  settings: {
    saved: boolean;
    status: QueryStatus;
    reloaded: boolean;
    watch: boolean;
    ignoreAccess: { dir: string; pass: string }[];
  };
}
export const initialState: ObjectTemp = {
  data: {} as any,
  settings: {
    saved: true,
    status: "idle",
    reloaded: true,
    watch: true,
    ignoreAccess: [],
  },
};
export const objectSlice = createSlice({
  initialState,
  name: objectName,
  reducers: {
    setValue(state, { payload }: PayloadAction<{ value: any; direction: string; force: boolean; pass?: string }>) {
      const found = state.settings.ignoreAccess.find(({ dir }) => payload.direction == dir);
      if (found && found.pass != payload.pass) {
        con.warn(`Cannot Access Direction ${payload.direction}`);
        return;
      }
      const directions = payload.direction.split(".").filter(Boolean);
      if (!directions.length) {
        state.data = payload.value;
        return;
      }
      let s = state.data;
      directions.slice(0, -1).forEach((item) => {
        let o: any = s[item];
        if (o == undefined) {
          if (payload.force) {
            s[item] = {};
            o = s[item];
          }
        }
        s = o;
      });
      const key = directions.at(-1)!;
      s[key] = payload.value;
    },
    save(state, { payload = false }: PayloadAction<boolean>) {
      state.settings.saved = payload;
    },
    reload(state, { payload = false }: PayloadAction<boolean>) {
      state.settings.reloaded = payload;
    },
    addIgnoreAccess(state, { payload }: PayloadAction<ObjectTemp["settings"]["ignoreAccess"]>) {
      payload.forEach(({ dir, pass }) => {
        const find = state.settings.ignoreAccess.find((aa) => aa.dir == dir && pass == aa.pass);
        if (find) {
          return;
        }
        state.settings.ignoreAccess.push({
          dir,
          pass,
        });
      });
    },
    removeIgnoreAccess(state, { payload }: PayloadAction<ObjectTemp["settings"]["ignoreAccess"]>) {
      payload.forEach(({ dir, pass }) => {
        const findIndex = state.settings.ignoreAccess.findIndex((aa) => aa.dir == dir && pass == aa.pass);
        if (findIndex >= 0) {
          // maket access normaly
          state.settings.ignoreAccess.splice(findIndex, 1);
        }
      });
    },
  },
});
export const getSaved = () => {
  const saved = useSelector((state: TempState) => state.object.settings.saved);
  return saved;
};
export const getWatch = () => {
  const watch = useSelector((state: TempState) => state.object.settings.watch);
  return watch;
};
export const getReloaded = () => {
  const reloaded = useSelector((state: TempState) => state.object.settings.reloaded);
  return reloaded;
};
export const getStatus = () => {
  const status = useSelector((state: TempState) => state.object.settings.status);
  return status;
};
export const startReloadTemps = () => {
  store.dispatch(objectSlice.actions.reload(false));
};
export const endReloadTemps = () => {
  store.dispatch(objectSlice.actions.reload(true));
};
export const startSaveTemps = () => {
  store.dispatch(objectSlice.actions.save(false));
};
export const endSaveTemps = () => {
  store.dispatch(objectSlice.actions.save(true));
};
export function getTemp<T>(direction: string) {
  const data = useSelector((state: TempState) => {
    const { isValide, value } = valueFromString(state.object.data, direction);
    return isValide ? value : null;
  }, isLike) as T | null;
  return data;
}
export function setTemp<T>(direction: string, value: T) {
  store.dispatch(
    objectSlice.actions.setValue({
      value,
      direction,
      force: true,
    }),
  );
}
export function useTemp<T>(direction: string) {
  const data = getTemp<T>(direction);
  const state = useCopyState(data);
  React.useEffect(() => {
    setTemp(direction, state.get);
  }, [state.get]);
  React.useEffect(() => {
    state.set(data);
  }, [data]);
  return state;
}
export function getTempFromStore<T>(direction: string, s?: ReturnType<typeof store.getState>) {
  const fullyState = (s || store.getState()).object.data;
  const { isValide, value } = valueFromString(fullyState, direction);
  return isValide ? (value as T) : null;
}
