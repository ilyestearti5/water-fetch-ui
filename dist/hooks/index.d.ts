import React from "react";
import { QueryStatus } from "react-query";
export declare function useAsyncMemo<T>(callback: () => Promise<T>, deps?: any[], cleanUp?: (deps: any[]) => void): T | null;
export declare function useAsyncEffect(callback: () => Promise<void>, deps?: any[], cleanUp?: (deps: any[]) => void): void;
export declare function useCopyState<T>(initData: T | (() => T)): {
    get: T;
    set: React.Dispatch<React.SetStateAction<T>>;
};
export declare function useDref<T>(firstState: T, upload: (val: T) => any, download?: (val: T) => T): {
    get: T;
    set: React.Dispatch<React.SetStateAction<T>>;
};
export declare function useMemoDelay<G>(fn: () => G, deps?: any[], time?: number): [boolean, G | null];
export declare function useEffectDelay(fn: () => Promise<void> | void | (() => Promise<void> | void), deps?: any[], time?: number): boolean;
export declare const useIdleStatus: <T>(fn: () => Promise<T>, deps?: any[]) => {
    status: {
        get: "ready" | QueryStatus;
        set: React.Dispatch<React.SetStateAction<"ready" | QueryStatus>>;
    };
    data: {
        get: T | null;
        set: React.Dispatch<React.SetStateAction<T | null>>;
    };
    error: {
        get: any;
        set: React.Dispatch<any>;
    };
};
