import React from "react";
import { FindCommandInput } from "./FindCommandInput";
import { settingHooks, getSettingValue, getPublicSettings, Setting } from "@/reducers/Settings/settings.model";
import { handelGradientColor, useColorMerge } from "models/system/colors.model";
import { mergeObject, setFocused, tw } from "@/functions/react-utils";
import { BlurOverlay } from "@/Components/Helpers/Overlays";
import { Db } from "@/functions/classes";
import { Line } from "@/Components/Helpers/Line";
import { execCommand } from "models/system/command.model";
import { showSetting, usePublicCommands } from "@/hooks/db.hooks";
import { getKeys, test } from "models/system/keys.model";
import { store } from "@/store";
import { DataBaseManagmentList, DataBaseManagmentListProps } from "./DataBaseManagmentList";
import { getTemp, setTemp } from "../Object/object.slice";
import { feildHooks } from "@/data/system/feild.model";
import { slotHooks } from "@/data/system/slot.slice";
import { actionHooks, execAction } from "@/data/system/actions.model";
import { CircleLoading } from "@/Components/Helpers/Loading";
import { transformCase } from "utils/index";
export function Commands() {
  const colorMerge = useColorMerge();
  const keys = getKeys();
  const commands = usePublicCommands();
  const finalCommands = React.useMemo(() => {
    const state = store.getState();
    return commands
      .map((command) => {
        return {
          command,
          keys: Db.join(command, keys, "commandId->command"),
        };
      })
      .filter((cmd) => {
        const s = cmd.keys.filter((key) => {
          if (!key.when) {
            return true;
          }
          try {
            const testeur = test(key.when);
            return testeur({
              state,
              focused: null,
            });
          } catch {
            return false;
          }
        });
        return s.length || !cmd.keys.length;
      });
  }, [keys, commands]);
  const settingsList = getPublicSettings();
  const commandId = getTemp<string>("commandId");
  const prefixes = getSettingValue("commands/enum/prefixes.object");
  const isLoading = getTemp<boolean>("commands.isLoading");
  const actions = actionHooks.getAll();
  const views: DataBaseManagmentListProps["data"] = React.useMemo(() => {
    // desc: "commands/enum/prefixes.object"
    const pre = Object.entries(prefixes || {}).map(([key, value]) => ({
      key,
      settingKey: `${value}.enum`,
      value,
    }));
    // desc: "commands/enum/prefixes.object"
    const moreManger: DataBaseManagmentListProps["data"] = {};
    // desc: "commands/enum/prefixes.object"
    Db.fullJoinOne(pre, settingsList, "settingKey->settingId").forEach(({ data, joinTo }) => {
      moreManger[data.key] = {
        lines: (joinTo as Setting<"enum">)?.config?.list?.map(({ value, content }) => {
          return {
            id: value,
            content,
            checked: joinTo?.value == value,
          };
        }),
        // desc: "commands/enum/prefixes.object"
        onSubmit(line) {
          settingHooks.setOneFeild(data.settingKey, "value", line.id);
        },
      };
    });
    return mergeObject(
      {
        commands: {
          lines: finalCommands.map(({ command, keys }) => {
            return {
              content: command.label || command.commandId,
              keyPanding: keys.map(({ value }) => value!),
              id: command.commandId,
            };
          }),
          onSubmit(line) {
            execCommand(line.id as any);
          },
        },
        settings: {
          lines: settingsList.map(({ name, settingId, desc }) => {
            return {
              id: settingId,
              tools: [],
              content: name || settingId,
              sub: desc,
            };
          }),
          onSubmit(line) {
            showSetting(line.id as any);
          },
        },
        actions: {
          lines: actions.map(({ actionId, status }) => {
            return {
              content: `${transformCase(actionId.replaceAll(/[^a-z0-9A-Z]/gi, " ").replaceAll(/ +/gi, " "), undefined, "normal")} ${status ? "[running...]" : ""}`,
              id: actionId,
            };
          }),
          onSubmit(line) {
            line.id && execAction(line.id as any);
          },
        },
      },
      moreManger,
    );
  }, [finalCommands, settingsList, prefixes, actions]);
  const findCommandValue = feildHooks.getOneFeild("findCommand", "value");
  const isHelp = React.useMemo(() => !!findCommandValue?.match(/^ *\?/), [findCommandValue]);
  const list: DataBaseManagmentListProps["data"] = React.useMemo(() => {
    return mergeObject(
      isHelp && {
        help: {
          lines: Object.entries(views).map(([id]) => {
            return {
              id,
              content: id,
            };
          }),
          onSubmit(line) {
            setTemp("commandId", line.id);
          },
        },
      },
      !isHelp && views,
    );
  }, [views, findCommandValue, isHelp]);
  // Hooks
  React.useEffect(() => {
    if (commandId && isHelp) {
      setTemp("commandId", "help");
    }
  }, [commandId, findCommandValue, isHelp]);
  React.useEffect(() => {
    slotHooks.setOneFeild("cmds/list", "focused", 0);
  }, [findCommandValue]);
  /*
   *  desc: "commands/enum/prefixes.object"
   */
  // Render Component
  return (
    <BlurOverlay
      onLoadContent={() => {
        setFocused("findCommand");
      }}
      onPointerDown={(e) => {
        if (e.currentTarget == e.target) {
          setTemp("commandId", null);
        }
      }}
      hidden={!commandId}
    >
      <div
        style={{
          ...colorMerge({
            backgroundColor: "secondry.background",
            borderColor: "borders",
          }),
        }}
        className={tw(`absolute top-[37px] left-1/2 rounded-xl transform -translate-x-1/2 w-[max(50vw,400px)] shadow-lg border border-solid border-transparent overflow-hidden`)}
      >
        <div
          className="transition-[height]"
          style={mergeObject(
            commandId && {
              height: "40px",
            },
            !commandId && {
              height: "0px",
            },
          )}
        >
          <div
            className="p-2 text-center uppercase"
            style={{
              ...colorMerge({
                background: handelGradientColor("to right", "gray.opacity", "transparent", "gray.opacity"),
              }),
            }}
          >
            {commandId}
          </div>
          <Line />
        </div>
        <div
          className="flex justify-between items-center gap-3 p-2"
          onClick={() => {
            setFocused("findCommand");
          }}
        >
          <FindCommandInput />
          {isLoading && <CircleLoading />}
        </div>
        <Line />
        <DataBaseManagmentList data={list} />
      </div>
    </BlurOverlay>
  );
}