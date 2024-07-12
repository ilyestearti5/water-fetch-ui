import { PayloadAction } from "@reduxjs/toolkit";
import { store } from "@/store";
import { Delay, con, transformCase } from "utils/index";
import { defineTable } from "models/pkg/table.def";
import { TableDefConfig } from "models/pkg/types";
import { data } from "api/commands.json";
import { FullStoreManagment } from "@/Components/Feilds/Types";
export type CommandIds = string;
// Data Rendering Of One Command
export interface Command {
  commandId: string;
  label?: string;
  commands?: (Command["commandId"] | PayloadAction<any> | number)[];
  private?: boolean;
  blocked?: boolean;
}
export const name = "commands";
export function execList(cmdId: CommandIds, state: FullStoreManagment = store.getState()): (PayloadAction<any> | number)[] {
  //
  const { [name]: cmds } = state;
  //
  const payloadList: (PayloadAction<any> | number)[] = [];
  //
  const cmd = cmds.entities[cmdId];
  const commands = cmd?.commands;
  if (cmd?.blocked) {
    return [];
  }
  //
  commands?.forEach((payloadAction) => {
    if (typeof payloadAction == "string") {
      payloadList.push(...execList(payloadAction as any));
    } else if (typeof payloadAction != "number") {
      payloadList.push(payloadAction);
    }
  });
  return payloadList;
}
export function isExist(cmd: string, state: FullStoreManagment = store.getState()) {
  return !!state?.commands.entities[cmd];
}
export async function execCommand(cmd: CommandIds, state: ReturnType<typeof store.getState> = store.getState()) {
  const str = cmd.toString();
  con.inf(`start invoke command : `, str);
  state = state || store.getState();
  const array = execList(cmd, state);
  const dl = new Delay();
  for (let i = 0; i < array.length; i++) {
    const ele = array[i];
    if (typeof ele == "number") await dl.start(ele);
    else store.dispatch(ele);
  }
  con.succ("end invoking command : ", str);
}
export const initCommandsConfig: TableDefConfig<Command, "commandId", "commands"> = {
  id: "commandId",
  name: "commands",
  data,
  default: (_, recorde) => {
    if (!recorde.commandId) {
      return {};
    }
    const [section = "", ...names] = recorde.commandId.split(".");
    const label = `${transformCase(section, "camel", "normal")} : ${names.map((string) => transformCase(string, undefined, "normal")).join(" ")}`;
    return {
      label,
    };
  },
};
export const { hooks: commandsHooks, slice: commandsSlice, entitySelect: commandSelect, init: initCommands } = defineTable(initCommandsConfig);
