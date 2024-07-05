import React from "react";
import { Nothing } from "utils/interfaces";
import { Delay } from "utils/index";
import { ClassNameValue, twMerge } from "tailwind-merge";
import { KeysType } from "./utils-types";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import * as bradIcons from "@fortawesome/free-brands-svg-icons";
import * as regIcons from "@fortawesome/free-regular-svg-icons";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import { QueryStatus } from "react-query";
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
export function mergeObject<T extends object | undefined = React.CSSProperties>(...args: (Nothing | T)[]) {
  let result = {} as T;
  args.forEach((arg) => {
    if (arg) {
      result = {
        ...result,
        ...arg,
      };
    }
  });
  return result;
}
export function mergeArray<T>(...args: (Nothing | T)[]) {
  let result = [] as T[];
  args.forEach((arg) => {
    if (arg) {
      result = [...result, arg];
    }
  });
  return result;
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
export function scrollToElement(element: HTMLElement | null, index = 0) {
  if (!element) return;
  const { parentElement } = element;
  if (!parentElement) return;
  const { x: eX, y: eY, height: eH, width: eW } = element.getBoundingClientRect();
  const { x: pX, y: pY, height: pH, width: pW } = parentElement.getBoundingClientRect();
  const topY = eY - pY - eH * index + parentElement.scrollTop;
  const leftX = eX - pX - eW * index + parentElement.scrollLeft;
  parentElement.scroll({
    top: topY - (index >= 0 ? 0 : pH),
    left: leftX - (index >= 0 ? 0 : pW),
  });
}
export function getIcon(type: "solid" | "normal" | "brad" = "solid", value: string) {
  const data = type == "brad" ? bradIcons : type == "normal" ? regIcons : solidIcons;
  return data[value as keyof typeof data] as IconDefinition;
}
export function setFocused<ELE extends HTMLElement>(id: string | null) {
  if (id == null) {
    const element = document.activeElement as ELE | null;
    element?.blur();
    return element;
  }
  const ele = document.getElementById(id);
  ele?.focus({
    preventScroll: true,
  });
  return ele as ELE;
}
export function getFocus() {
  const element = document.activeElement as HTMLElement | null;
  return element?.id || null;
}
export var isVisible = (element: HTMLElement | null): boolean => {
  if (!element) return false;
  const { parentElement } = element;
  if (!parentElement) return true;
  const { left: eL, right: eR, top: eT, bottom: eB } = element.getBoundingClientRect();
  const { left: pL, right: pR, top: pT, bottom: pB } = parentElement.getBoundingClientRect();
  return pT <= eT && eB <= pB && pL <= eL && eR <= pR;
};
export const ariaAttributes = {
  boolean(val?: React.AriaAttributes["aria-disabled"]) {
    return typeof val == "string" ? (val == "true" ? true : false) : val == undefined ? false : val;
  },
};
export const tw = (...string: ClassNameValue[]) => {
  return twMerge(...string)
    .replaceAll("\n", " ")
    .replaceAll("\t", " ")
    .replaceAll(/ {2,}/gi, " ");
};
export class Shortcut {
  public propertys: {
    control?: boolean;
    shift?: boolean;
    alt?: boolean;
    keys?: string[];
  } = {};
  static overreadProps: Record<string, string> = {
    "+": "plus",
    " ": "space",
    "*": "mul",
    "/": "div",
    audiovolumemute: "mute",
    audiovolumedown: "audio down",
    audiovolumeup: "audio up",
    mediaplaypause: "video play/pause",
    mediatrackprevious: "video previous",
    mediatracknext: "video next",
  };
  constructor(public keyPanding: string) {
    this.propertys = Shortcut.toProps(this.keyPanding);
  }
  static toProps(string: string): Shortcut["propertys"] {
    const keyPanding: string[] = string.split("+").map((s) => s.trim());
    //
    const findControl = keyPanding.find((s) => /control\??/i.test(s));
    const findShift = keyPanding.find((s) => /shift\??/i.test(s));
    const findAlt = keyPanding.find((s) => /alt\??/i.test(s));
    //
    const control = findControl ? (/control\?/i.test(findControl) ? undefined : true) : false;
    //
    const shift = findShift ? (/shift\?/i.test(findShift) ? undefined : true) : false;
    //
    const alt = findAlt ? (/alt\?/i.test(findAlt) ? undefined : true) : false;
    //
    return {
      control,
      shift,
      alt,
      keys: keyPanding
        .find((s) => !/(control|shift|alt)\??/i.test(s))
        ?.split("|")
        .filter((ke) => Boolean(ke)),
    };
  }
  static toString(props: Shortcut["propertys"]) {
    const metaKeys = ["control", "shift", "alt"] as KeysType;
    let result = metaKeys
      .map((meta) => {
        return props[meta] ? `${meta}` : props[meta] == undefined ? `${meta}?` : "";
      })
      .filter(Boolean);
    // props
    if (props.keys) {
      const possibleKeyMetaPressed = [...metaKeys, ...metaKeys.map((key) => key + "?")];
      const keys = props.keys.filter((k) => k && !possibleKeyMetaPressed.includes(k));
      if (keys.length) {
        result = [...result, keys.join("|")];
      }
    }
    return result.join("+");
  }
  static fromEvent({ key, ctrlKey: control, shiftKey: shift, altKey: alt }: React.KeyboardEvent<HTMLElement> | KeyboardEvent) {
    const k = key.toLowerCase();
    const tempK = this.overreadProps[k];
    const keys = [tempK || k];
    return this.toString({
      control,
      shift,
      alt,
      keys,
    });
  }
  test(e: KeyboardEvent | React.KeyboardEvent<HTMLElement>) {
    const { control, shift, alt, keys } = this.propertys;
    if (typeof control == "boolean" && control != e.ctrlKey) {
      return false;
    }
    if (typeof shift == "boolean" && shift != e.shiftKey) {
      return false;
    }
    if (typeof alt == "boolean" && alt != e.altKey) {
      return false;
    }
    if (!keys) {
      return true;
    }
    //
    const tempK = Shortcut.overreadProps[e.key];
    //
    const k = (tempK || e.key).toLowerCase();
    const str = k.match(/(control|shift|alt)/gi) ? undefined : k;
    return Boolean(str && keys.includes(str));
  }
  static dispatch(...strings: string[]) {
    strings.forEach((string) => {
      const short = new this(string);
      const keys = short.propertys.keys?.map((k) => Shortcut.overreadProps[k] || k);
      dispatchEvent(
        new KeyboardEvent("keydown", {
          ctrlKey: short.propertys.control,
          altKey: short.propertys.alt,
          shiftKey: short.propertys.shift,
          key: keys?.[0],
        }),
      );
    });
  }
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
