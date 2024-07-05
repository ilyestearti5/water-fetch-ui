import * as dateFns from "date-fns";
import { cases, Exact, IncludeParam, Nothing } from "./interfaces";
export const getWordsOnly = (string: string) =>
  string
    .replace(/[^a-zA-Z0-9:]+/gi, "")
    .replaceAll(/ +/gi, " ")
    .trim();
export const include = (string?: IncludeParam, find?: IncludeParam) => {
  const stringOnly = getWordsOnly(String(string));
  const findOnly = getWordsOnly(String(find)).toLowerCase();
  return fuzzySearch(findOnly, stringOnly);
};
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
export const between = (min = 0, max = 10) => Math.random() * (max - min) + min;
export const betweenInt = (min = 0, max = 10) => Math.floor(between(min, max));
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
export function camelCase(...string: string[]) {
  return string
    .join(" ")
    .replaceAll(
      / +[a-zA-Z]/g,
      (s) => `${s.match(/[a-z]/gi)?.[0].toUpperCase()}`
    );
}
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
export function isLikeFast(a: any, b: any): boolean {
  return JSON.stringify(a) == JSON.stringify(b);
}
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
export class Delay {
  #timerCounter: NodeJS.Timeout | undefined;
  constructor() {}
  get timer() {
    return this.#timerCounter;
  }
  start(timeout: number) {
    return new Promise((res) => {
      this.clear();
      this.#timerCounter = setTimeout(() => {
        res(undefined);
        this.clear();
      }, timeout);
    });
  }
  clear() {
    clearTimeout(this.#timerCounter);
  }
}
export async function delay(timeout = 0) {
  const dl = new Delay();
  return await dl.start(timeout);
}
export const randomItem = <T>(array: T[]) => {
  const index = betweenInt(0, array.length);
  return {
    index,
    value: array.at(index),
  };
};
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
export function doubleFilter<T>(
  array: T[],
  callback: (value: T, index: number) => boolean
): [T[], T[]] {
  const result1: T[] = [];
  const result2: T[] = [];
  for (let i = 0; i < array.length; i++)
    (callback(array[i], i) ? result1 : result2).push(array[i]);
  return [result1, result2];
}
export function defaultObject<T extends object>(o: T, def: Partial<T>): T {
  if (!def) return o;
  const rs: T = Object.create(null);
  const all = { ...def, ...o } as T;
  for (const prop in all) {
    const item = o[prop];
    const d = def[prop];
    if (typeof item == "object" && !Array.isArray(item)) {
      rs[prop] = defaultObject(item as any, d as any) as any;
    } else {
      rs[prop] = item == undefined ? d : (item as any);
    }
  }
  return rs;
}
export function transformCase<T extends string>(
  string: T,
  from: cases = "camel",
  to: cases = "normal"
) {
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
    normal = normal
      .replaceAll(/ +[a-z]/g, (s) => s.trimStart().toUpperCase())
      .trim();
  }
  return normal;
}
export function values<T extends object>(input: T) {
  return Object.values(input) as Exact<Required<T>[keyof T]>[];
}
export async function mapAsync<T, R>(
  array: T[],
  callback: (item: T, index: number) => Promise<R> | R
): Promise<R[]> {
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
export const renameValues = <T extends Record<string | number, any>, R>(
  object: T,
  replaceTo: (value: T[keyof T], key: keyof T) => R
) => {
  const result = {} as Record<keyof T, R>;
  for (const key in object) {
    const value = object[key];
    result[key] = replaceTo(value, key);
  }
  return result;
};
export const con = {
  inf(...data: any[]) {
    import.meta.env.DEV &&
      console.log(
        `%c[INFO] ${dateFns.format(new Date(), "HH:mm:ss")}`,
        "color: #38F",
        ...data
      );
  },
  err(...data: any[]) {
    import.meta.env.DEV &&
      console.log(
        `%c[ERR] ${dateFns.format(new Date(), "HH:mm:ss")}`,
        "color: #F33",
        ...data
      );
  },
  succ(...data: any[]) {
    import.meta.env.DEV &&
      console.log(
        `%c[SUCC] ${dateFns.format(new Date(), "HH:mm:ss")}`,
        "color: #4fec1e",
        ...data
      );
  },
  warn(...data: any[]) {
    import.meta.env.DEV &&
      console.log(
        `%c[WARNING] ${dateFns.format(new Date(), "HH:mm:ss")}`,
        "color: #f5540e",
        ...data
      );
  },
};
//
export function linear<T>(mat: (T[] | T)[] = []) {
  const a: T[] = [];
  mat.forEach((item) => {
    if (Array.isArray(item)) {
      a.push(...item);
    } else {
      a.push(item);
    }
  });
  return a;
}
//
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
export const saveDate = (date = new Date()) => {
  return dateFns.format(date, "MM/dd/yyyy HH:mm:ss", {});
};
export const formatObject = <T extends object>(
  object: T,
  format = "K=V",
  joinBy = ","
) => {
  return Object.entries(object)
    .map(([key, value]) => {
      return format.replaceAll("K", key).replaceAll("V", value);
    })
    .join(joinBy);
};
export const fuzzySearch = function (query: string, str: string) {
  const haystack = str.toLowerCase();
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
// Example usage
export function isSortedDate(dates: (Date | string | number)[]) {
  for (let i = 1; i < dates.length; i++) {
    if (dateFns.isBefore(dates[i], dates[i - 1])) {
      return false;
    }
  }
  return true;
}
export const someArray = (...array: (Nothing | number)[]) => {
  return array.reduce<number>(
    (prv, current) => prv + (typeof current == "number" ? current : 0),
    0
  );
};
export function ori(list: (string | number)[], as: (string | number)[]) {
  return as.filter((value) => list.includes(value));
}
