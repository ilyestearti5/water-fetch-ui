import React from "react";
import { Setting, settingHooks } from "@/reducers/Settings/settings.model";
import { tw, useCopyState } from "main/src/functions/react-utils";
import { ArrayFeild } from "main/src/Components/Feilds/ArrayFeild";
import { BooleanFeild } from "main/src/Components/Feilds/BooleanFeild";
import { EnumFeild } from "main/src/Components/Feilds/EnumFeild";
import { FileFeild } from "main/src/Components/Feilds/FileFeild";
import { NumberFeild } from "main/src/Components/Feilds/NumberFeild";
import { ObjectFeild } from "main/src/Components/Feilds/ObjectFeild";
import { StringFeild } from "main/src/Components/Feilds/StringFeild";
import { FilterFeild } from "main/src/Components/Feilds/FilterFeild";
import { PasswordFeild } from "main/src/Components/Feilds/PasswordFeild";
import { DateFeild } from "main/src/Components/Feilds/DateFeild";
import { RegexpFeild } from "main/src/Components/Feilds/RegexpFeild";
import { RecorderFeild } from "main/src/Components/Feilds/RecorderFeild";
import { ImageFeild } from "main/src/Components/Feilds/ImageFeild";
import { useColorMerge } from "@/data/system/colors.model";
export interface SettingUpdatingProps {
  settingId: string;
}
export function SettingUpdating({ settingId }: SettingUpdatingProps) {
  const setting = settingHooks.getOne(settingId) as Setting<any> | undefined;
  const value = React.useMemo(() => setting?.value, [setting]);
  const config = React.useMemo(() => setting?.config, [setting]);
  const state = useCopyState(setting?.value);
  //
  React.useEffect(() => {
    settingHooks.setOneFeild(settingId, "value", state.get);
  }, [state.get]);
  //
  React.useEffect(() => {
    state.set(value);
  }, [setting]);
  const id = React.useMemo(() => {
    return `setting:${setting?.settingId || ""}`;
  }, [setting]);
  const type = React.useMemo(() => {
    const string = id.match(/\.[a-zA-Z0-9]+$/gi)?.[0].slice(1);
    if (!string) {
      return null;
    }
    return string;
  }, [id]);
  const colorMerge = useColorMerge();
  return (
    <div
      className={tw(setting?.readonly && "cursor-not-allowed")}
      style={{
        ...colorMerge(setting?.readonly && "primary.background"),
      }}
    >
      <div className={tw(setting?.readonly && "pointer-events-none")}>
        {type == "boolean" && <BooleanFeild id={id} state={state} config={config} />}
        {type == "array" && <ArrayFeild id={id} state={state} config={config} />}
        {type == "enum" && <EnumFeild id={id} state={state} config={config} />}
        {type == "object" && <ObjectFeild id={id} state={state} config={config} />}
        {type == "string" && <StringFeild id={id} state={state} config={config} />}
        {type == "number" && <NumberFeild id={id} state={state} config={config} />}
        {type == "file" && <FileFeild id={id} state={state} config={config} />}
        {type == "filter" && <FilterFeild id={id} state={state} config={config} />}
        {type == "password" && <PasswordFeild id={id} state={state} config={config} />}
        {type == "date" && <DateFeild id={id} state={state} config={config} />}
        {type == "regexp" && <RegexpFeild id={id} state={state} />}
        {type == "audio" && <RecorderFeild id={id} state={state} config={config} />}
        {type == "image" && <ImageFeild id={id} state={state} config={config} />}
      </div>
    </div>
  );
}
