import React from "react";
import { store } from "@/store";
import { EntityId, nanoid } from "@reduxjs/toolkit";
import { QueryStatus } from "react-query";
import { con, Db, delay, Delay, getSeparateSearchInput, include, isLike, mergeArray, valueFromString } from "@/utils/index";
import { getTemp, setTemp } from "@/reducers/Object/object.slice";
import { SettingValueType, SettingConfig } from "@/reducers/Settings/SettingConfig";
import { Setting, settingHooks, SettingIds } from "@/reducers/Settings/settings.model";
import { CommandIds, commandsHooks } from "@/data/system/command.model";
import { keyHooks } from "@/data/system/keys.model";
import { cameraTemp, recaptchaTemp, viewTemps } from "@/reducers/Object/allTemps";
import { TextAreaProps } from "@/components/TextArea";
import { CameraConfig, CameraResult, CssColorKeys, FullCameraResult, FullStateManagment, Nothing } from "@/types/global";
import { slotHooks } from "@/data/system/slot.slice";
import { langHooks } from "@/data/system/lang.model";
import { treeHooks } from "@/data/system/tree.model";
import { Color, colorHooks, ColorIds } from "@/data/system/colors.model";
import { toastHooks, ToastType } from "@/data/system/toasts.model";
import { logHooks } from "@/data/system/logs.model";
import { positionsHooks } from "@/data/system/positions.model";
import { actionHooks } from "@/data/system/actions.model";
import { notifayHooks } from "@/data/system/notifications.model";
import { FeildIds, FeildRecord, fieldHooks } from "@/data/system/field.model";
import { viewHooks } from "@/data/system/views.model";
import { auth, db } from "@/apis/firebase";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { onAuthStateChanged, onIdTokenChanged, RecaptchaVerifier, updatePhoneNumber, updateProfile, User } from "firebase/auth";
export { slotHooks, langHooks, settingHooks, treeHooks, logHooks, positionsHooks, actionHooks, notifayHooks, fieldHooks, viewHooks, colorHooks, toastHooks };
export function useAsyncMemo<T>(callback: () => Promise<T>, deps: any[] = [], cleanUp?: (deps: any[]) => void): T | null {
  const state = useCopyState<T | null>(null);
  React.useEffect(() => {
    callback().then(state.set);
    return () => {
      cleanUp?.(deps);
    };
  }, deps);
  return state.get;
}
export function useAsyncEffect(callback: () => Promise<void>, deps: any[] = [], cleanUp: (deps: any[]) => void = () => {}) {
  React.useEffect(() => {
    callback().then();
    return () => cleanUp(deps);
  }, deps);
}
export function useCopyState<T>(initData: T | (() => T)) {
  const [get, set] = React.useState(initData);
  return {
    get,
    set,
  };
}
export function useDref<T>(firstState: T, upload: (val: T) => any, download: (val: T) => T = (v) => v) {
  const state = useCopyState(download(firstState));
  const draf = React.useDeferredValue(state.get);
  React.useEffect(() => {
    upload(draf);
  }, [draf]);
  React.useEffect(() => {
    state.set(download(firstState));
  }, [firstState]);
  return state;
}
export function useMemoDelay<G>(fn: () => G, deps: any[] = [], time = 1000): [boolean, G | null] {
  const state = useCopyState<null | G>(null);
  const loading = useCopyState(false);
  React.useEffect(() => {
    const dl = new Delay();
    loading.set(true);
    dl.start(time).then(() => {
      state.set(fn());
      loading.set(false);
    });
    return () => {
      dl.clear();
      loading.set(false);
    };
  }, [...deps, time]);
  return [loading.get, state.get];
}
export function useEffectDelay(fn: () => Promise<void> | void | (() => Promise<void> | void), deps: any[] = [], time = 1000) {
  const isLoading = useCopyState(false);
  React.useEffect(() => {
    const dl = new Delay();
    isLoading.set(true);
    let cleanUp: ReturnType<typeof fn>;
    dl.start(time).then(async () => {
      cleanUp = fn();
      if (cleanUp instanceof Promise) {
        await cleanUp;
      }
      isLoading.set(false);
    });
    return () => {
      dl.clear();
      typeof cleanUp == "function" && cleanUp();
      isLoading.set(false);
    };
  }, [...deps, time]);
  return isLoading.get;
}
export const useIdleStatus = <T>(fn: () => Promise<T>, deps: any[] = []) => {
  const status = useCopyState<QueryStatus | "ready">("ready");
  const data = useCopyState<T | null>(null);
  const error = useCopyState<any | null>(null);
  useAsyncEffect(async () => {
    if (status.get == "idle") {
      status.set("loading");
      try {
        const result = await fn();
        data.set(result);
        error.set(null);
        status.set("success");
      } catch (e: any) {
        data.set(null);
        error.set(e);
        status.set("error");
      }
    }
  }, [status.get, ...deps]);
  return {
    status,
    data,
    error,
  };
};
// settings
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
  const value = fieldHooks.getOneFeild("findConfigurations", "value");
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
export function setSettingValue<ID extends keyof SettingValueType>(settingId: `${string}.${ID}`, value: SettingValueType[ID]) {
  settingHooks.setOneFeild(settingId, "value", value);
}
export function getSettingValue<ID extends keyof SettingConfig>(settingId: Setting<ID>["settingId"]) {
  const setting = getSettingById(settingId);
  return setting?.value;
}
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// keys
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
export function getShortcutsOfCommand(commandId: CommandIds | string) {
  const allKeys = keyHooks.getAll();
  const keys = React.useMemo(() => {
    return Db.join({ commandId }, allKeys, "commandId->command");
  }, [commandId, allKeys]);
  return keys;
}
export function getAllKeys() {
  const allKeys = keyHooks.getAll();
  return React.useMemo(() => {
    return allKeys.filter(({ value }) => value);
  }, [allKeys]);
}
export function getShortcutsOfAction(actionName: string) {
  const allKeys = getAllKeys();
  return React.useMemo(() => {
    return Db.join({ actionName }, allKeys, "actionName->action");
  }, [allKeys]);
}
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
export const showSetting = (settingId: SettingIds | Setting<keyof SettingConfig>["settingId"] | null) => viewTemps.setTemp("settings", settingId?.toString());
export function usePublicCommands() {
  const commands = commandsHooks.getAll();
  return React.useMemo(() => commands.filter((cmd) => !cmd.private), [commands]);
}
export function usePublicCommandsFilter() {
  const commands = usePublicCommands();
  const v = fieldHooks.getOneFeild("findConfigurations", "value");
  const allKeys = getAllKeys();
  const commandsAndKeys = React.useMemo(() => {
    const data = Db.fullJoin(commands, allKeys, "commandId->command").map(({ childs, data }) => {
      return {
        ...data,
        keys: childs,
      };
    });
    return data;
  }, [commands, allKeys]);
  const r = React.useMemo(() => {
    if (!v) {
      return commandsAndKeys;
    }
    const props = Object.entries(getSeparateSearchInput(v)).map(([key, value]) => {
      return {
        prop: key,
        value: value.join(" "),
      };
    });
    return commandsAndKeys.filter(({ commandId, label, keys }) => {
      return props.every(({ prop, value }) => {
        switch (prop) {
          case "key": {
            return include(keys.map(({ value }) => value).join(" "), value);
          }
          case "label": {
            return include(label, value);
          }
          case "commandId": {
            return commandId.startsWith(value);
          }
          default: {
            return include([label, ...keys.map(({ value }) => value)].join(" "), value);
          }
        }
      });
    });
  }, [v, commandsAndKeys]);
  React.useEffect(() => {
    setTemp("configurations.found.length", r.length);
  }, [r]);
  return r;
}
//
// -------------------
export function getManyFeilds<S extends string | number, T extends FeildRecord<S>>(fields: T, deps: any = []): Record<keyof T, string | undefined> {
  const e = Object.entries<FeildIds>(fields);
  const allFeilds = e.map(([, fieldId]) => fieldHooks.getOneFeild(fieldId, "value"));
  return React.useMemo(() => {
    const result: any = {};
    e.forEach(([name], index) => {
      const value = allFeilds[index];
      result[name] = value;
    });
    return result as T;
  }, [...allFeilds, ...deps]);
}
export function resetManyFeilds<T extends FeildIds>(fields: T[]) {
  fields.forEach((fieldId) => {
    fieldHooks.setOneFeild(fieldId, "value", "");
  });
}
export function initNewFeild(fieldId: string) {
  const field = fieldHooks.getOne(fieldId);
  React.useEffect(() => {
    if (field) {
      return;
    }
    fieldHooks.add([
      {
        fieldId,
        selection: {
          direction: "forward",
          end: 0,
          start: 0,
        },
        value: "",
        controls: {},
      },
    ]);
  }, [field]);
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
export function getFeildPrevious(fieldId: string) {
  const value = fieldHooks.getOneFeild(fieldId, "value");
  const cursor = fieldHooks.getOneFeild(fieldId, "selection");
  return getPrevious(value, cursor);
}
export function getFeildNext(fieldId: string) {
  const value = fieldHooks.getOneFeild(fieldId, "value");
  const cursor = fieldHooks.getOneFeild(fieldId, "selection");
  return getNext(value, cursor);
}
export function getFeildSelected(fieldId: string) {
  const value = fieldHooks.getOneFeild(fieldId, "value");
  const cursor = fieldHooks.getOneFeild(fieldId, "selection");
  return getSelected(value, cursor);
}
export function checkFormByFeilds(fields: string[], state: FullStateManagment = store.getState()) {
  const controls = fields.map((fieldName) => {
    const fieldInfo = state.fields.entities[fieldName];
    const controls = Object.keys(fieldInfo?.controls || {});
    if (!fieldInfo || !controls.length) {
      return {
        response: [],
        isValide: true,
      };
    }
    const value = fieldInfo.value;
    const response = controls.map((exp) => value.match(new RegExp(exp, "ig")));
    return { response, isValide: response.every(Boolean), fieldName };
  });
  return {
    controls,
    isValide: controls.every(({ isValide }) => isValide),
  };
}
export function showToast(message: ToastType["message"], type: ToastType["type"], id = nanoid(), time: number = ToastTime.short) {
  toastHooks.add([
    {
      message,
      type,
      time,
      id,
    },
  ]);
  return id;
}
export enum ToastTime {
  short = 5,
  long = 5,
}
export const scanQr = async () => {
  const id = nanoid();
  cameraTemp.setTemp("id", id);
  cameraTemp.setTemp("type", "scanQr");
  return new Promise(async (res) => {
    const un = onState(
      "object.data.view.result",
      (result) => !!result,
      async ({ object }) => {
        const info = object.data?.camera;
        if (info?.id == id) {
          un();
          res(info.result);
        }
      },
    );
  });
};
export function openCamera<T extends keyof FullCameraResult>(type: T) {
  return new Promise<CameraResult<T>>(async (res, rej) => {
    const isOpendBefore = store.getState().object.data?.camera?.id;
    if (isOpendBefore) {
      rej("Camera Is Work Now");
      return;
    }
    const id = nanoid();
    cameraTemp.setTemp("id", id);
    cameraTemp.setTemp("type", type);
    cameraTemp.setTemp("result", null);
    cameraTemp.setTemp("error", null);
    const un = onState<CameraConfig<T>>(
      "object.data.camera",
      (camera) => Boolean(camera?.result || camera?.error),
      async ({ object }) => {
        const info = object.data?.camera as CameraConfig<T> | null;
        if (info?.id == id) {
          if (info.result) {
            res(info.result);
          } else {
            rej(info.error);
          }
          ["id", "type", "result"].forEach((key) => {
            cameraTemp.setTemp(key, null);
          });
          un();
        }
      },
    );
  });
}
// This Values Represent No Value
export function useColorMerge<T extends Partial<Record<CssColorKeys, ColorIds | ReturnColorHandelFunction>>>() {
  const allColors = colorHooks.getEntity();
  const isDark = getSettingValue("window/dark.boolean");
  return React.useCallback(
    (...args: (Nothing | ColorIds | T)[]) => {
      const firstResult: any = {};
      type Ret = Partial<Record<keyof T, string>>;
      const result: Ret = {};
      if (isDark == undefined) {
        return result;
      }
      args.forEach((css) => {
        if (css) {
          if (typeof css == "string") {
            firstResult.backgroundColor = css;
            return;
          }
          Object.entries(css).forEach(([cssProp, colorIdOrFn]) => {
            if (typeof colorIdOrFn == "function") {
              firstResult[cssProp] = colorIdOrFn;
              return;
            }
            firstResult[cssProp] = colorIdOrFn;
          });
        }
      });
      for (const prop in firstResult as Ret) {
        const itemInCss = firstResult[prop];
        if (typeof itemInCss == "function") {
          result[prop] = itemInCss(allColors, isDark);
        } else if (typeof itemInCss == "string") {
          const color = allColors[itemInCss];
          if (color) result[prop] = getColor(isDark, color);
        }
      }
      return result;
    },
    [isDark, allColors],
  );
}
export type ReturnColorHandelFunction = (allColors: Record<EntityId, Color>, isDark: boolean) => string;
export function handelGradientColor(direction: string, ...colors: ColorIds[]): ReturnColorHandelFunction {
  return (allColors, isDark) => {
    return `linear-gradient(${direction} , ${colors
      .filter((colorId) => allColors[colorId])
      .map((colorId) => {
        const clr = allColors[colorId]!;
        return getColor(isDark, clr);
      })
      .join(" , ")})`;
  };
}
export function getColor(isDark: boolean, color: Color) {
  if (isDark) {
    return color.dark || color.default;
  } else {
    return color.light || color.default;
  }
}
export function handelShadowColor(
  array: {
    colorId: ColorIds;
    x?: number;
    y?: number;
    size?: number;
    blur?: number;
    isInset?: boolean;
  }[] = [],
): ReturnColorHandelFunction {
  return (allColors, isDark) =>
    array
      .filter((item) => {
        return allColors[item.colorId];
      })
      .map(({ colorId, x = 0, y = 0, blur = 3, size = 1, isInset = false }) => {
        const color = allColors[colorId]!;
        return `${x}px ${y}px ${blur}px ${size}px ${getColor(isDark, color)} ${isInset ? "inset" : ""}`;
      })
      .join(" , ");
}
export const onceState = <T extends object | string | number | boolean | null>(stateDir: string, comparedValue: T | ((val: T | undefined) => boolean), on: (state: FullStateManagment) => void) => {
  const callback = () => {
    const state = store.getState();
    const { value } = valueFromString<T>(state, stateDir);
    const result = typeof comparedValue == "function" ? comparedValue(value) : value == comparedValue;
    if (result) {
      un();
      on(state);
    }
  };
  const un = store.subscribe(callback);
  return un;
};
export const onState = <T extends object | string | number | boolean | null>(stateDir: string, comparedValue: T | ((val: T | undefined) => boolean), on?: (state: FullStateManagment) => void) => {
  const callback = () => {
    const state = store.getState();
    const { value, isValide } = valueFromString<T>(state, stateDir);
    if (!isValide) {
      con.warn("Invalid State Dir", stateDir);
      return;
    }
    const result = typeof comparedValue == "function" ? comparedValue(value) : value == comparedValue;
    if (result) {
      on?.(state);
    }
  };
  return store.subscribe(callback);
};
export { store };

export type UserDB = Partial<{
  name: string | null;
  email: string | null;
  phone: string | null;
  photo: string | null;
}>;
export const getUserFromDB = () => getTemp<UserDB>("userInfo");
export const initUser = () => {
  const user = getUser();
  useAsyncEffect(async () => {
    if (user?.uid) {
      const col = collection(db, "users");
      const userDoc = doc(col, user.uid);
      const userInfo: Partial<UserDB> = {
        photo: user.photoURL,
        phone: user.phoneNumber,
        name: user.displayName,
        email: user.email,
      };
      setTemp("userInfo", userInfo);
      await setDoc(userDoc, userInfo, { merge: true });
    } else {
      setTemp("userInfo", null);
    }
  }, [user]);

  const userDb = getUserFromDB();

  useAsyncEffect(async () => {
    if (user && userDb) {
      let updatedData: Partial<{ displayName: string | null; photoURL: string | null }> = {};
      if (user.displayName != userDb.name) {
        updatedData.displayName = userDb.name;
      }
      if (user.photoURL != userDb.photo) {
        updatedData.photoURL = userDb.photo;
      }
      await updateProfile(user, updatedData);
    }
  }, [userDb, user]);

  React.useEffect(() => {
    if (!user) {
      return;
    }
    return onSnapshot(doc(collection(db, "users"), user.uid), (doc) => {
      if (doc.exists()) {
        setTemp("userInfo", doc.data());
      }
    });
  }, [user]);
};
export const getUser = () => {
  const user = useCopyState<User | null>(auth.currentUser);
  // on user change
  React.useEffect(() => {
    user.set(auth.currentUser);
    const unAuth = onAuthStateChanged(auth, user.set);
    const unIdToken = onIdTokenChanged(auth, user.set);
    return () => {
      unAuth();
      unIdToken();
    };
  }, []);
  return user.get;
};
export const verifieCapatcha = async () => {
  recaptchaTemp.setTemp("open", true);
  await delay(1000);
  const element = document.getElementById("capatcha-view");
  if (!element) {
    throw Error("capatcha view element is not exists");
  }
  const capatcha = new RecaptchaVerifier(auth, element);
  return capatcha;
};

export const showProfile = () => {
  viewTemps.setTemp("profile-view", true);
};
