import { FullStateManagment } from "./types/global";
export declare const onceState: <T extends object | string | number | boolean | null>(stateDir: string, comparedValue: T | ((val: T | undefined) => boolean), on?: (state: FullStateManagment) => void) => import("redux").Unsubscribe;
export declare const onState: <T extends object | string | number | boolean | null>(stateDir: string, comparedValue: T | ((val: T | undefined) => boolean), on?: (state: FullStateManagment) => void) => import("redux").Unsubscribe;
