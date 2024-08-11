import { ClassNameValue } from 'tailwind-merge';
import { default as default_2 } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

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
export declare const between: (min?: number, max?: number) => number;

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
export declare const betweenInt: (min?: number, max?: number) => number;

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
export declare function camelCase(...string: string[]): string;

declare type cases = "camel" | "normal" | "cabab";

export declare const con: {
    inf(...data: any[]): void;
    err(...data: any[]): void;
    succ(...data: any[]): void;
    warn(...data: any[]): void;
};

export declare class Db {
    static join<P extends object, PK extends keyof P, C extends object, CK extends keyof C>(parentData: P, childData: C[], join: `${PK extends string | number ? PK : string}->${CK extends string | number ? CK : string}`): C[];
    static joinOne<P extends object, PK extends keyof P, C extends object, CK extends keyof C>(childData: C, parentData: P[], join: `${CK extends string | number ? CK : string}->${PK extends string | number ? PK : string}`): P | undefined;
    static fullJoin<P extends object, PK extends keyof P, C extends object, CK extends keyof C>(parentData: P[], childData: C[], join: `${PK extends string | number ? PK : string}->${CK extends string | number ? CK : string}`): {
        data: P;
        childs: C[];
    }[];
    static fullJoinOne<P extends object, PK extends keyof P, C extends object, CK extends keyof C>(parentData: P[], childData: C[], join: `${PK extends string | number ? PK : string}->${CK extends string | number ? CK : string}`): {
        data: P;
        joinTo: C | undefined;
    }[];
    static orderBy<T extends object, B extends keyof T>(data: T[], prop: B, dir?: "asc" | "desc"): T[];
    static between<T extends object, B extends keyof T>(data: T[], keyCheck: B, from?: T[B], to?: T[B]): T[];
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
export declare function defaultObject<T extends object>(object: T, defaultValue: Partial<T>): T;

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
export declare class Delay {
    #private;
    constructor();
    /**
     * The timer counter.
     */
    get timer(): NodeJS.Timeout | undefined;
    /**
     * Starts the delay.
     * @param timeout - The time to delay the execution in milliseconds.
     * @returns The promise that resolves after the delay.
     */
    start(timeout: number): Promise<unknown>;
    /**
     * Clears the delay.
     */
    clear(): void;
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
export declare function delay(timeout?: number): Promise<unknown>;

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
export declare function doubleFilter<T>(array: T[], callback: (value: T, index: number) => boolean): [T[], T[]];

declare type Exact<T> = T extends undefined ? never : T;

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
export declare const formatObject: <T extends object>(object: T, format?: string, joinBy?: string) => string;

/**
 * Returns if the
 */
export declare const fuzzySearch: (query: string, string: string) => boolean;

export declare function getFocus(): string | null;

export declare function getIcon(type: ("solid" | "normal" | "brad") | undefined, value: string): IconDefinition;

/**
 * Splits a string into separate search inputs based on a specified delimiter.
 *
 * @param string - The string to be split.
 * @param using - The delimiter to split the string by. Default is "@".
 * @returns An object containing the default value and additional search inputs.
 */
export declare function getSeparateSearchInput(string: string, using?: string): {
    "default value": string[];
} & Record<string, string[]>;

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
export declare const getWordsOnly: (string: string) => string;

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
export declare const include: (string?: IncludeParam, find?: IncludeParam) => boolean;

declare type IncludeParam = string | number | (string | number)[];

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
export declare function isLike(a: any, b: any): boolean;

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
export declare function isLikeFast(a: any, b: any): boolean;

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
export declare const isSorted: (...nums: number[]) => boolean;

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
export declare function isSortedDate(dates: (Date | string | number)[]): boolean;

export declare const isVisible: (element: HTMLElement | null) => boolean;

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
export declare function mapAsync<T, R>(array: T[], callback: (item: T, index: number) => Promise<R> | R): Promise<R[]>;

export declare function mergeArray<T>(...args: (Nothing | T)[]): T[];

export declare function mergeObject<T extends object | undefined = default_2.CSSProperties>(...args: (Nothing | T)[]): T;

declare type Nothing = false | 0 | null | "" | undefined;

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
export declare function ori(list: (string | number)[], as: (string | number)[]): (string | number)[];

export declare const prefixId: (a: string | number, b: number | string) => string;

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
export declare const randomItem: <T>(array: T[]) => {
    index: number;
    value: T | undefined;
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
export declare const randomizeArray: <T>(array: T[]) => T[];

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
export declare const range: (from?: number, to?: number, steps?: number) => number[];

declare type ReactElement<T = HTMLDivElement> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;

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
export declare const renameValues: <T extends Record<string | number, any>, R>(object: T, replaceTo: <C extends keyof T>(value: T[C], key: C) => R) => Record<keyof T, R>;

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
export declare const saveDate: (date?: Date) => string;

export declare function scrollToElement(element: HTMLElement | null, index?: number): void;

export declare function setFocused<E extends HTMLElement>(id: string | null): E | null;

export declare class Shortcut {
    keyPanding: string;
    propertys: {
        control?: boolean;
        shift?: boolean;
        alt?: boolean;
        keys?: string[];
    };
    static overreadProps: Record<string, string>;
    constructor(keyPanding: string);
    static toProps(string: string): Shortcut["propertys"];
    static toString(props: Shortcut["propertys"]): string;
    static fromEvent({ key, ctrlKey: control, shiftKey: shift, altKey: alt }: default_2.KeyboardEvent<HTMLElement> | KeyboardEvent): string;
    test(e: KeyboardEvent | default_2.KeyboardEvent<HTMLElement>): boolean;
    static dispatch(...strings: string[]): void;
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
export declare const someArray: (...array: (Nothing | number)[]) => number;

export declare function toLinear<T>(tree: TreeProps<T>["tree"], level?: number): {
    data: T;
    level: number;
}[];

export declare function toTree<T>(_linearTree: ReturnType<typeof toLinear<T>>): {
    data: T;
    innerTree?: any[] | undefined;
}[];

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
export declare function transformCase<T extends string>(string: T, from?: cases, to?: cases): string;

declare interface TreeComponentProps<T> extends ReactElement {
    position: string;
    data: T;
    index: number;
    handels: {
        expand: (only: boolean, value: boolean) => any;
        focus: Function;
        select: (only: boolean, value: boolean) => any;
        submit: Function;
    };
    status: Record<`is${"Submited" | "Selected" | "Focused" | "Expanded"}`, boolean>;
    parent?: TreeProps<T>["parent"];
    isFins: boolean;
    innerTree: TreeProps<T>["tree"];
    level: number;
}

declare interface TreeProps<T> {
    treeId: string;
    tree?: {
        data: T;
        innerTree?: TreeProps<T>["tree"] | undefined;
    }[];
    component: (props: TreeComponentProps<T>) => JSX.Element;
    level?: number;
    size?: string;
    position?: string;
    parent?: {
        data: T;
        parent: TreeProps<T>["parent"];
    };
}

export declare const tw: (...string: ClassNameValue[]) => string;

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
export declare function valueFromString<T>(object: any, string: string): {
    isValide: boolean;
    value: undefined;
} | {
    isValide: boolean;
    value: T;
};

/**
 * Returns the keys of an object.
 * @param input - The object to get the keys from.
 * @returns The keys of the object.
 */
export declare function values<T extends object>(input: T): Exact<Required<T>[keyof T]>[];

export { }
