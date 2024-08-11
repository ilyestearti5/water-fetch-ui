import React from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import * as bradIcons from "@fortawesome/free-brands-svg-icons";
import * as regIcons from "@fortawesome/free-regular-svg-icons";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import * as dateFns from "date-fns";
import { cases, Exact, IncludeParam, Nothing } from "../types/global";
import { KeysType } from "@/types/global";
import { TreeProps } from "@/types/global";
/**
 * Returns only the words from a string.
 * @param string - The string to get the words from.
 * @returns The words from the string.
 * @example
 * ```ts
 * const string = "Hello, world!";
 * const result = getWordsOnly(string);
 * console.log(result); // "Hello world"
 * ```
 */
export const getWordsOnly = (string: string) =>
  string
    .replace(/[^a-zA-Z0-9:]+/gi, "")
    .replaceAll(/ +/gi, " ")
    .trim();

/**
 * Returns if the string includes the find string.
 * @param string - The string to search.
 * @param find - The string to find.
 * @returns A boolean indicating whether the string includes the find string.
 * @example
 * ```ts
 * const string = "package.json";
 * const result = include(string, "pkg.json");
 * console.log(result); // true
 * ```
 */

export const include = (string?: IncludeParam, find?: IncludeParam) => {
  const stringOnly = getWordsOnly(String(string));
  const findOnly = getWordsOnly(String(find)).toLowerCase();
  return fuzzySearch(findOnly, stringOnly);
};
/**
 * Returnes range of numbers.
 * @param from - The start of the range.
 * @param to - The end of the range.
 * @param steps - The steps between each number.
 * @returns The range of numbers.
 * @example
 * ```ts
 * const result = range(1, 5);
 * console.log(result); // [1, 2, 3, 4, 5]
 * ```
 * @example
 * ```ts
 * const result = range(1, 10, 2);
 * console.log(result); // [1, 3, 5, 7, 9]
 * ```
 */
export const range = (from = 0, to = 1, steps = 1) => {
  if (!steps) {
    throw Error("cannot be give steps value 0 (infinite loop hapens)");
  }
  if ((from > to && steps > 0) || (from <= to && steps < 0)) {
    [to, from] = [from, to];
  }
  const res = [];
  for (let i = from; i <= to; i += steps) {
    res.push(i);
  }
  return res;
};
/**
 * Returns a random number between two numbers.
 * @param min - The minimum number.
 * @param max - The maximum number.
 * @returns The random number.
 * @example
 * ```ts
 * const result = between(1, 10);
 * console.log(result); // 5.123456789
 * ```
 */
export const between = (min = 0, max = 10) => Math.random() * (max - min) + min;
/**
 * Returns a random integer between two numbers.
 * @param min - The minimum number.
 * @param max - The maximum number.
 * @returns The random integer.
 * @example
 * ```ts
 * const result = betweenInt(1, 10);
 * console.log(result); // 5
 * ```
 */
export const betweenInt = (min = 0, max = 10) => Math.floor(between(min, max));
/**
 * Returnes if the numbers are sorted.
 * @param nums - The numbers to check.
 * @returns A boolean indicating whether the numbers are sorted.
 * @example
 * ```ts
 * const result = isSorted(1, 2, 3, 4, 5);
 * console.log(result); // true
 * ```
 * @example
 * ```ts
 * const result = isSorted(1, 2, 3, 5, 4);
 * console.log(result); // false
 * ```
 */
export const isSorted = (...nums: number[]) => {
  let n1 = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (n1 > nums[i]) {
      return false;
    }
    n1 = nums[i];
  }
  return true;
};
/**
 * Returns the camel case of a string.
 * @param string - The string to convert to camel case.
 * @returns The camel case of the string.
 * @example
 * ```ts
 * const result = camelCase("hello", "world");
 * console.log(result); // "helloWorld"
 * ```
 */
export function camelCase(...string: string[]) {
  return string.join(" ").replaceAll(/ +[a-zA-Z]/g, (s) => `${s.match(/[a-z]/gi)?.[0].toUpperCase()}`);
}
/**
 * Checks if two objects are similar.
 * @param a - The first object to compare.
 * @param b - The second object to compare.
 * @returns A boolean indicating whether the two objects are similar.
 * @example
 * ```ts
 * const a = { a: 1, b: 2, c: 3 };
 * const b = { a: 1, b: 2, c: 3 };
 * const result = isLike(a, b);
 * console.log(result); // true
 * ```
 * @example
 * ```ts
 * const a = { a: 1, b: 2, c: 3 };
 * const b = { a: 1, b: 2, c: 4 };
 * const result = isLike(a, b);
 * console.log(result); // false
 * ```
 */
export function isLike(a: any, b: any): boolean {
  const checkTwo = [a, b];
  if (!a || !b) {
    return a === b;
  }
  if (checkTwo.every((item) => typeof item == "object")) {
    if (checkTwo.every(Array.isArray)) {
      const length = a.length;
      if (length != b.length) {
        return false;
      } else {
        for (let i = 0; i < length; i++) {
          if (!isLike(a[i], b[i])) {
            return false;
          }
        }
        return true;
      }
    } else {
      return Object.keys({ ...a, ...b }).every((key) => isLike(a[key], b[key]));
    }
  } else {
    return a === b;
  }
}
/**
 * Checks if two objects are similar.
 * @param a - The first object to compare.
 * @param b - The second object to compare.
 * @returns A boolean indicating whether the two objects are similar.
 * @example
 * ```ts
 * const a = { a: 1, b: 2, c: 3 };
 * const b = { a: 1, b: 2, c: 3 };
 * const result = isLikeFast(a, b);
 * console.log(result); // true
 * ```
 * @example
 * ```ts
 * const a = { a: 1, b: 2, c: 3 };
 * const b = { a: 1, b: 2, c: 4 };
 * const result = isLikeFast(a, b);
 * console.log(result); // false
 * ```
 */
export function isLikeFast(a: any, b: any): boolean {
  return JSON.stringify(a) == JSON.stringify(b);
}
/**
 * Returns the value of an object from a string.
 * @param object - The object to get the value from.
 * @param string - The string to get the value from.
 * @returns An object containing the value and a boolean indicating whether the value is valid.
 * @example
 * ```ts
 * const object = { a: { b: { c: 1 } } };
 * const result = valueFromString(object, "a.b.c");
 * console.log(result); // { isValide: true, value: 1 }
 * ```
 */
export function valueFromString<T>(object: any, string: string) {
  let o = object;
  const array = string.split(/ *\. */gi).filter(Boolean);
  for (const i in array) {
    const ele = array[i];
    if (!(ele in o)) {
      return {
        isValide: false,
        value: undefined,
      };
    }
    o = o[ele];
  }
  return {
    isValide: true,
    value: o as T,
  };
}
/**
 * Delays the execution of the function.
 * @example
 * ```ts
 * const delayTime = new Delay();
 * delayTime.start(1000).then(() => {
 *   console.log("Hello, world!");
 *   delayTime.clear();
 * });
 * ```
 */
export class Delay {
  #timerCounter: NodeJS.Timeout | undefined;
  constructor() {}
  /**
   * The timer counter.
   */
  get timer() {
    return this.#timerCounter;
  }
  /**
   * Starts the delay.
   * @param timeout - The time to delay the execution in milliseconds.
   * @returns The promise that resolves after the delay.
   */
  start(timeout: number) {
    return new Promise((res) => {
      this.clear();
      this.#timerCounter = setTimeout(() => {
        res(undefined);
        this.clear();
      }, timeout);
    });
  }
  /**
   * Clears the delay.
   */
  clear() {
    clearTimeout(this.#timerCounter);
  }
}
/**
 * Delays the execution of the function.
 * @param timeout - The time to delay the execution in milliseconds.
 * @returns The promise that resolves after the delay.
 * @example
 * ```ts
 * await delay(1000);
 * console.log("Hello, world!");
 * ```
 */
export async function delay(timeout = 0) {
  const dl = new Delay();
  return await dl.start(timeout);
}
/**
 * Returns a random item from an array.
 * @param array - The array to get the random item from.
 * @returns An object containing the index and value of the random item.
 * @example
 * ```ts
 * const array = [1, 2, 3, 4, 5];
 * const result = randomItem(array);
 * console.log(result); // { index: 2, value: 3 }
 * ```
 */
export const randomItem = <T>(array: T[]) => {
  const index = betweenInt(0, array.length);
  return {
    index,
    value: array.at(index),
  };
};
/**
 * Randomizes an array.
 * @param array - The array to randomize.
 * @returns change the order of the array.
 * @example
 * ```ts
 * const array = [1, 2, 3, 4, 5];
 * const result = randomizeArray(array);
 * console.log(result); // [3, 1, 5, 2, 4]
 * ```
 */
export const randomizeArray = <T>(array: T[]) => {
  const shadowCopyArray = [...array];
  const result: T[] = [];
  while (shadowCopyArray.length) {
    const item = randomItem(shadowCopyArray);
    if (item.value != undefined) {
      result.push(item.value);
      shadowCopyArray.splice(item.index, 1);
    }
  }
  return result;
};
/**
 * Filters an array into two separate arrays based on a callback function.
 * @param array - The array to filter.
 * @param callback - The callback function to filter the array with.
 * @returns An array containing two arrays. The first array contains the values that passed the callback function, and the second array contains the values that did not pass the callback function.
 * @example
 * ```ts
 * const array = [1, 2, 3, 4, 5];
 * const [even, odd] = doubleFilter(array, (value) => value % 2 == 0);
 * console.log(even); // [2, 4]
 * console.log(odd); // [1, 3, 5]
 * ```
 */
export function doubleFilter<T>(array: T[], callback: (value: T, index: number) => boolean): [T[], T[]] {
  const result1: T[] = [];
  const result2: T[] = [];
  for (let i = 0; i < array.length; i++) (callback(array[i], i) ? result1 : result2).push(array[i]);
  return [result1, result2];
}
/**
 * Returns the Default value if the value is undefined.
 * @param object - The object to check.
 * @param defaultValue - The default value to return if the object is undefined.
 * @returns The object or the default value.
 * @example
 * ```ts
 * const object = { a: 1, b: 2, c: 3 };
 * const result = defaultObject(object, { a: 0, b: 0, c: 0 });
 * console.log(result); // { a: 1, b: 2, c: 3 }
 * ```
 * @example
 * ```ts
 * const object = { a: 1, b: 2 };
 * const result = defaultObject(object, { a: 0, b: 0, c: 0 });
 * console.log(result); // { a: 1, b: 2, c: 0 }
 * ```
 */
export function defaultObject<T extends object>(object: T, defaultValue: Partial<T>): T {
  if (!defaultValue) return object;
  const rs: T = Object.create(null);
  const all = { ...defaultValue, ...object } as T;
  for (const prop in all) {
    const item = object[prop];
    const d = defaultValue[prop];
    if (typeof item == "object" && !Array.isArray(item)) {
      rs[prop] = defaultObject(item as any, d as any) as any;
    } else {
      rs[prop] = item == undefined ? d : (item as any);
    }
  }
  return rs;
}
/**
 * Transforms a string from one case to another.
 * @param string - The string to transform.
 * @param from - The case to transform from. Default is "camel".
 * @param to - The case to transform to. Default is "normal".
 * @returns The transformed string.
 * @example
 * ```ts
 * const string = "helloWorld";
 * const result = transformCase(string, "camel", "cabab");
 * console.log(result); // "hello-world"
 * ```
 * @example
 * ```ts
 * const string = "hello-world";
 * const result = transformCase(string, "cabab", "camel");
 * console.log(result); // "helloWorld"
 * ```
 */
export function transformCase<T extends string>(string: T, from: cases = "camel", to: cases = "normal") {
  if (typeof string != "string") {
    return string;
  }
  if (from == to) {
    return string;
  }
  let normal: string;
  if (from == "camel") {
    normal = string.replaceAll(/[A-Z]+/g, (s) => ` ${s.toLowerCase()}`).trim();
  } else if (from == "cabab") {
    normal = string.replaceAll(/-+/g, " ");
  } else {
    normal = string;
  }
  // normal is the string in the normal state
  if (to == "cabab") {
    normal = normal.replaceAll(/ +/g, "-");
  } else if (to == "camel") {
    normal = normal.replaceAll(/ +[a-z]/g, (s) => s.trimStart().toUpperCase()).trim();
  }
  return normal;
}
/**
 * Returns the keys of an object.
 * @param input - The object to get the keys from.
 * @returns The keys of the object.
 */
export function values<T extends object>(input: T) {
  return Object.values(input) as Exact<Required<T>[keyof T]>[];
}
/**
 * Maps an array asynchronously.
 * @param array - The array to map.
 * @param callback - The callback function to map the array with.
 * @returns The mapped array.
 * @example
 * ```ts
 * const array = [1, 2, 3];
 * const result = await mapAsync(array, (item) => {
 *    return new Promise((resolve) => {
 *      setTimeout(() => {
 *          resolve(item * 2);
 *      }, 1000);
 *    });
 * });
 * console.log(result); // get [2, 4, 6] after 3 seconds
 * ```
 */
export async function mapAsync<T, R>(array: T[], callback: (item: T, index: number) => Promise<R> | R): Promise<R[]> {
  const list: R[] = [];
  for (let i = 0; i < array.length; i++) {
    let rs = callback(array[i], i);
    if (rs instanceof Promise) {
      rs = await rs;
    }
    list.push(rs);
  }
  return list;
}
/**
 * Renames the values of an object.
 * @param object - The object to rename the values of.
 * @param replaceTo - The function to replace the values with.
 * @returns The object with the renamed values.
 * @example
 * ```ts
 * const object = { a: 1, b: 2, c: 3 };
 * const result = renameValues(object, (value, key) => key + value);
 * console.log(result); // { a: "a1", b: "b2", c: "c3" }
 * ```
 */
export const renameValues = <T extends Record<string | number, any>, R>(object: T, replaceTo: <C extends keyof T>(value: T[C], key: C) => R) => {
  const result = {} as Record<keyof T, R>;
  for (const key in object) {
    const value = object[key];
    result[key] = replaceTo(value, key);
  }
  return result;
};
export const con = {
  inf(...data: any[]) {
    import.meta.env.DEV && console.log(`%c[INFO] ${dateFns.format(new Date(), "HH:mm:ss")}`, "color: #38F", ...data);
  },
  err(...data: any[]) {
    import.meta.env.DEV && console.log(`%c[ERR] ${dateFns.format(new Date(), "HH:mm:ss")}`, "color: #F33", ...data);
  },
  succ(...data: any[]) {
    import.meta.env.DEV && console.log(`%c[SUCC] ${dateFns.format(new Date(), "HH:mm:ss")}`, "color: #4fec1e", ...data);
  },
  warn(...data: any[]) {
    import.meta.env.DEV && console.log(`%c[WARNING] ${dateFns.format(new Date(), "HH:mm:ss")}`, "color: #f5540e", ...data);
  },
};
/**
 * Splits a string into separate search inputs based on a specified delimiter.
 *
 * @param string - The string to be split.
 * @param using - The delimiter to split the string by. Default is "@".
 * @returns An object containing the default value and additional search inputs.
 */
export function getSeparateSearchInput(string: string, using = "@") {
  const a = string.split(using);
  const result: { "default value": string[] } & Record<string, string[]> = {
    "default value": String(a[0]).split(/ +/gi),
  };
  a.slice(1).forEach((str) => {
    const [id, ...params] = str.split(/ +/gi);
    result[id] = params;
  });
  return result;
}
/**
 * Returns the date in a specific format.
 * @param date - The date to format.
 * @returns The formatted date.
 * @example
 * ```ts
 * const date = new Date();
 * const result = saveDate(date);
 * console.log(result); // "01/01/2022 00:00:00"
 * ```
 */
export const saveDate = (date = new Date()) => {
  return dateFns.format(date, "MM/dd/yyyy HH:mm:ss", {});
};
/**
 * Returns a formated string from an object.
 * @param object - The object to format.
 * @param format - The format to use. Default is "K=V".
 * @param joinBy - The string to join the formatted object by. Default is ",".
 * @returns The formatted object.
 * @example
 * ```ts
 * const object = { a: 1, b: 2, c: 3 };
 * const result = formatObject(object, "K: V", ";");
 * console.log(result); // "a: 1;b: 2;c: 3"
 * ```
 */
export const formatObject = <T extends object>(object: T, format = "K=V", joinBy = ",") => {
  return Object.entries(object)
    .map(([key, value]) => {
      return format.replaceAll("K", key).replaceAll("V", value);
    })
    .join(joinBy);
};
/**
 * Returns if the
 */
export const fuzzySearch = function (query: string, string: string) {
  const haystack = string.toLowerCase();
  let i = 0,
    n = -1,
    l;
  query = query.toLowerCase();
  for (; (l = query[i++]); ) {
    if (!~(n = haystack.indexOf(l, n + 1))) {
      return false;
    }
  }
  return true;
};
/**
 * Returns If The Dates Are Sorted.
 * @param dates - The dates to check.
 * @returns A boolean indicating whether the dates are sorted.
 * @example
 * ```ts
 * const dates = [new Date(2022, 1, 1), new Date(2022, 1, 2), new Date(2022, 1, 3)];
 * const result = isSortedDate(dates);
 * console.log(result); // true
 * ```
 */
export function isSortedDate(dates: (Date | string | number)[]) {
  for (let i = 1; i < dates.length; i++) {
    if (dateFns.isBefore(dates[i], dates[i - 1])) {
      return false;
    }
  }
  return true;
}
/**
 * Returnes the sum of the numbers in the array.
 * @param array - The array to sum.
 * @returns The sum of the numbers in the array.
 * @example
 * ```ts
 * const array = [1, 2, 3, 4, 5];
 * const result = someArray(...array);
 * console.log(result); // 15
 * ```
 */
export const someArray = (...array: (Nothing | number)[]) => {
  return array.reduce<number>((prv, current) => prv + (typeof current == "number" ? current : 0), 0);
};
/**
 * Make a list of the values that are my list structor
 * @param list - The list to check.
 * @param as - The list to check.
 * @returns The list of the values that are in the list.
 * @example
 * ```ts
 * const list = [1, 2, 3, 4, 5];
 * const as = [1, 3, 5, 7, 9];
 * const result = ori(list, as);
 * console.log(result); // [1, 3, 5]
 * ```
 */
export function ori(list: (string | number)[], as: (string | number)[]) {
  return as.filter((value) => list.includes(value));
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
export function setFocused<E extends HTMLElement>(id: string | null) {
  if (id == null) {
    const element = document.activeElement as E | null;
    element?.blur();
    return element;
  }
  const ele = document.getElementById(id);
  ele?.focus({
    preventScroll: true,
  });
  return ele as E;
}
export function getFocus() {
  const element = document.activeElement as HTMLElement | null;
  return element?.id || null;
}
export const isVisible = (element: HTMLElement | null): boolean => {
  if (!element) return false;
  const { parentElement } = element;
  if (!parentElement) return true;
  const { left: eL, right: eR, top: eT, bottom: eB } = element.getBoundingClientRect();
  const { left: pL, right: pR, top: pT, bottom: pB } = parentElement.getBoundingClientRect();
  return pT <= eT && eB <= pB && pL <= eL && eR <= pR;
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
export class Db {
  static join<P extends object, PK extends keyof P, C extends object, CK extends keyof C>(
    parentData: P,
    childData: C[],
    join: `${PK extends string | number ? PK : string}->${CK extends string | number ? CK : string}`,
  ) {
    const [parentKey, childKey] = join.split("->") as [PK, CK];
    return childData.filter((data) => String(parentData[parentKey]) === String(data[childKey]));
  }
  static joinOne<P extends object, PK extends keyof P, C extends object, CK extends keyof C>(
    childData: C,
    parentData: P[],
    join: `${CK extends string | number ? CK : string}->${PK extends string | number ? PK : string}`,
  ) {
    const [childKey, parentKey] = join.split("->") as [CK, PK];
    return parentData.find((data) => String(childData[childKey]) == String(data[parentKey]));
  }
  static fullJoin<P extends object, PK extends keyof P, C extends object, CK extends keyof C>(
    parentData: P[],
    childData: C[],
    join: `${PK extends string | number ? PK : string}->${CK extends string | number ? CK : string}`,
  ) {
    let copyChildData = [...childData];
    const [parentKey, childKey] = join.split("->") as [PK, CK];
    return parentData.map((data) => {
      const [childs, extra] = doubleFilter(copyChildData, (val) => String(data[parentKey]) === String(val[childKey]));
      copyChildData = [...extra];
      return {
        data,
        childs,
      };
    });
  }
  static fullJoinOne<P extends object, PK extends keyof P, C extends object, CK extends keyof C>(
    parentData: P[],
    childData: C[],
    join: `${PK extends string | number ? PK : string}->${CK extends string | number ? CK : string}`,
  ) {
    const copyChildData = [...childData];
    const [parentKey, childKey] = join.split("->") as [PK, CK];
    return parentData.map((data) => {
      const joinTo = copyChildData.find((val) => String(data[parentKey]) === String(val[childKey]));
      joinTo && copyChildData.splice(copyChildData.indexOf(joinTo), 1);
      return {
        data,
        joinTo,
      };
    });
  }
  static orderBy<T extends object, B extends keyof T>(data: T[], prop: B, dir: "asc" | "desc" = "asc") {
    if (dir == "asc") {
      return data.sort((prev, next) => (prev[prop] < next[prop] ? -1 : 1));
    } else {
      return data.sort((prev, next) => (prev[prop] > next[prop] ? -1 : 1));
    }
  }
  static between<T extends object, B extends keyof T>(data: T[], keyCheck: B, from?: T[B], to?: T[B]) {
    if (from == undefined && to == undefined) {
      return data;
    } else if (from == undefined) {
      return data.filter((item) => {
        const itemChecked = item[keyCheck];
        return itemChecked < to!;
      });
    } else if (to == undefined) {
      return data.filter((item) => {
        const itemChecked = item[keyCheck];
        return from < itemChecked;
      });
    } else {
      return data.filter((item) => {
        const itemChecked = item[keyCheck];
        return from! < itemChecked && itemChecked < to!;
      });
    }
  }
}
export const prefixId = (a: string | number, b: number | string) => `slot_${a}_${b}`;
export function toLinear<T>(tree: TreeProps<T>["tree"], level = 0) {
  const result: { data: T; level: number }[] = [];
  tree?.map(({ data, innerTree }) => {
    result.push({ data, level }, ...toLinear(innerTree, level + 1));
  });
  return result;
}
export function toTree<T>(_linearTree: ReturnType<typeof toLinear<T>>) {
  const result: TreeProps<T>["tree"] = [];
  return result;
}
