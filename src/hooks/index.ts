import React from "react";
import { Delay } from "@/utils/index";
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
