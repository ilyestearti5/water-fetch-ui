import React from "react";
import { Setting, SettingIds } from "@/reducers/Settings/settings.model";
import { feildHooks } from "models/system/feild.model";
import { include, getSeparateSearchInput } from "utils/index";
import { Db } from "@/functions/classes";
import { setTemp } from "@/reducers/Object/object.slice";
import { commandsHooks } from "@/data/system/command.model";
import { getKeys } from "@/data/system/keys.model";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
// payments
export const showSetting = (settingId: SettingIds | Setting<keyof SettingConfig>["settingId"] | null) => setTemp("settings.config.id", settingId?.toString());
export function usePublicCommands() {
  const commands = commandsHooks.getAll();
  return React.useMemo(() => commands.filter((cmd) => !cmd.private), [commands]);
}
export function usePublicCommandsFilter() {
  const commands = usePublicCommands();
  const v = feildHooks.getOneFeild("findConfigurations", "value");
  const allKeys = getKeys();
  const commandsAndKeys = React.useMemo(() => {
    const data = Db.fullJoin(commands, allKeys, "commandId->command").map(({ childs, data }) => {
      return {
        ...data,
        keys: childs,
      };
    });
    return data;
  }, [commands, allKeys]);
  const r = React.useMemo(() => {
    if (!v) {
      return commandsAndKeys;
    }
    const props = Object.entries(getSeparateSearchInput(v)).map(([key, value]) => {
      return {
        prop: key,
        value: value.join(" "),
      };
    });
    return commandsAndKeys.filter(({ commandId, label, keys }) => {
      return props.every(({ prop, value }) => {
        switch (prop) {
          case "key": {
            return include(keys.map(({ value }) => value).join(" "), value);
          }
          case "label": {
            return include(label, value);
          }
          case "commandId": {
            return commandId.startsWith(value);
          }
          default: {
            return include([label, ...keys.map(({ value }) => value)].join(" "), value);
          }
        }
      });
    });
  }, [v, commandsAndKeys]);
  React.useEffect(() => {
    setTemp("configurations.found.length", r.length);
  }, [r]);
  return r;
}
