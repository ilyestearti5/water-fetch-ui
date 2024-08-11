import React from "react";
import { defineTable } from "@/data/pkg/table.def";
import { TableDefConfig } from "@/types/global";
import { Command, CommandIds, execCommand, isExist } from "./command.model";
import { Shortcut, getFocus } from "@/utils";
import { store } from "@/store";
import { Db } from "@/utils";
import { nanoid } from "@reduxjs/toolkit";
import { con } from "@/utils/index";
import keys from "@/apis/keys";
import { getTemp } from "@/reducers/Object/object.slice";
import { Action } from "./actions.model";
import { FullStateManagment } from "@/types/global";
import { useEffectDelay } from "@/hooks";
const { data } = keys;
export interface Key {
  value?: string;
  keyId?: string;
  command?: Command["commandId"];
  only?: boolean;
  when?: string;
  preventDefault?: boolean;
  repeation?: boolean;
  type?: "up" | "down";
  private?: boolean;
  action?: Action["actionId"];
}
const initConfig: TableDefConfig<Key, "keyId", "keys"> = {
  name: "keys",
  id: "keyId",
  data: Object.entries(data).map(([keyId, props]) => {
    return {
      keyId,
      ...props,
    };
  }),
  default: () => ({
    repeation: true,
    type: "down",
    only: true,
    preventDefault: true,
    keyId: `key_${nanoid()}`,
  }),
};
export const { init, hooks: keyHooks, slice: keySlice } = defineTable(initConfig);
//
export const windowId = "_" + nanoid().replaceAll(/[^0-9A-Za-z$_]+/gi, "_");
//
export function test(when: string) {
  return Function(`
    return ({ state , focused })=> {
      ${windowId}_window = window;
      window = null;
      let ${windowId} = ${when};
      window = ${windowId}_window;
      return ${windowId}
    }
  `)() as (props: { state: FullStateManagment; focused: string | null }) => boolean;
}
//
export function initKeys() {
  init();
  const all = keyHooks.getAll();
  const isBlocked = getTemp("commands.isBlocked");
  const handelKeyPandingFunctions = React.useMemo(() => {
    if (isBlocked) {
      return [];
    }
    return all
      .filter(({ value, command: commandId }) => value && commandId)
      .map((key) => {
        const { value = "", when, repeation = true, type = "down", only = true, preventDefault = true } = key;
        const shortcut = new Shortcut(value);
        const fn = async (e: KeyboardEvent) => {
          if (!repeation && e.repeat) {
            return;
          }
          if (!shortcut.test(e)) {
            return;
          }
          const state = store.getState();
          if (when) {
            const focused = getFocus();
            const tryTest = test(when);
            try {
              if (!tryTest({ state, focused })) {
                return;
              }
            } catch (e) {
              return;
            }
          }
          only && e.stopImmediatePropagation();
          preventDefault && e.preventDefault();
          con.inf(`KEYID       = ${key.keyId}`);
          con.inf(`RUN         = ${key.command || "no command run"}`);
          con.inf(`COMB        = (${key.value})`);
          con.inf(`WHEN        = ${key.when || "no provide"}`);
          key.command && isExist(key.command, state) ? con.succ("EXISTS") : con.warn("COMMAND NOT FOUND");
          execCommand(key.command as any, state);
        };
        return {
          fn,
          type,
        };
      });
  }, [all, isBlocked]);
  useEffectDelay(
    () => {
      handelKeyPandingFunctions.forEach(({ fn, type }) => {
        document.addEventListener(`key${type}`, fn);
      });
      return () => {
        handelKeyPandingFunctions.forEach(({ fn, type }) => {
          document.removeEventListener(`key${type}`, fn);
        });
      };
    },
    [handelKeyPandingFunctions],
    1000,
  );
}
