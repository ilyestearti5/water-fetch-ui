import React from "react";
import { defineTable } from "@/data/pkg/table.def";
import { TableDefConfig } from "@/data/pkg/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { store } from "@/store";
import { QueryStatus } from "react-query";
import { useAsyncEffect } from "main/src/functions/react-utils";
import { onceState } from "main/src/onceState";
export interface Action {
  actionId: string;
  status: QueryStatus | "ready";
  args?: any;
  output?: any;
}
// Init Client Config
export const initActionConfig: TableDefConfig<Action, "actionId", "actions"> = {
  name: "actions",
  id: "actionId",
  data: {},
  default() {
    return {
      status: "ready",
      args: null,
    };
  },
  actions: {
    exec(state: any, { payload }: PayloadAction<[Action["actionId"], any]>) {
      const [actionId, actionArgs] = payload;
      const a = state.entities[actionId] as Action | null;
      if (!a) return;
      a.args = actionArgs;
      a.status = "idle";
    },
  },
};
// create action model
export const { entity: actionEntity, slice: actionSlice, hooks: actionHooks, entitySelect: actionEntitySelect } = defineTable(initActionConfig);
export function initAction(actionId: string) {
  const act = actionHooks.getOne(actionId);
  React.useEffect(() => {
    if (!act) {
      actionHooks.upsert([
        {
          actionId,
          status: "ready",
          args: null,
        },
      ]);
    }
  }, [act]);
}
// init all actions
export function useAction<T extends string, ARGS, S>(actionId: T, fn: (args: ARGS) => S | Promise<S>, deps: any[] = [], complete: (output: S) => void = () => {}) {
  React.useEffect(() => {
    return () => {
      actionHooks.remove([actionId]);
    };
  }, []);
  initAction(actionId);
  const act = actionHooks.getOne(actionId);
  useAsyncEffect(async () => {
    if (!act) {
      return;
    }
    const { status } = act;
    if (status == "idle") {
      const { args } = act;
      actionHooks.setOneFeild(actionId, "status", "loading");
      try {
        let result: Promise<S> | S | null = null;
        let s: S | null = null;
        result = fn(args);
        if (result instanceof Promise) {
          s = await result;
        } else {
          s = result;
        }
        actionHooks.setOneFeild(actionId, "output", s);
        actionHooks.setOneFeild(actionId, "status", "success");
        if (s) {
          complete(s);
        }
      } catch {
        actionHooks.setOneFeild(actionId, "output", null);
        actionHooks.setOneFeild(actionId, "status", "error");
      }
      actionHooks.setOneFeild(actionId, "args", null);
    }
  }, [act, ...deps]);
  return act;
}
export function execAction<ID extends string, A>(actionId: ID, args?: A) {
  return new Promise((res, rej) => {
    store.dispatch({ type: "actions/exec", payload: [actionId, args] });
    const onSuccessFn = onceState(`${initActionConfig.name}.entities.` + actionId + ".status", "success", (state) => {
      onErrorFn();
      res({
        output: state[initActionConfig.name].entities[actionId].output,
        state,
      });
    });
    const onErrorFn = onceState(`${initActionConfig.name}.entities.` + actionId + ".status", "error", (state) => {
      onSuccessFn();
      rej(state);
    });
  });
}
