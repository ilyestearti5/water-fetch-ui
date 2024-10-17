import React from "react";
import { StringFeild } from "./StringField";
import { SettingValueType, SettingConfig, Setting, useCopyState, useSettingValue } from "@/hooks";
import { tw } from "@/utils";
import { RegexpFeild } from "./RegexpField";
import { RecorderFeild } from "./RecorderField";
import { PinField } from "./PinField";
import { PasswordFeild } from "./PasswordField";
import { ObjectFeild } from "./ObjectField";
import { NumberFeild } from "./NumberField";
import { ImageFeild } from "./ImageField";
import { FilterFeild } from "./FilterField";
import { FileFeild } from "./FileField";
import { EnumFeild } from "./EnumField";
import { DateFeild } from "./DateField";
import { BooleanFeild } from "./BooleanField";
import { ArrayFeild } from "./ArrayField";
import { allIcons } from "@/apis";
import { State } from "@/types/global";
import { CircleTip } from "../CircleTip";
import { IconProps, Icon } from "../Icon";
import { JoinComponentBy } from "../JoinComponentBy";
import { Line } from "../Line";
export interface FullFieldRecordNextCallbackParams {
  stop(): void;
  currentIndex: number;
  state: FullFieldProps["state"]["get"];
  currentValue: FullFieldRecordNextCallbackParams["state"][string];
}
export interface FullFieldProps {
  list: Record<
    string,
    {
      label: string;
      type: keyof SettingValueType;
      config: SettingConfig[keyof SettingValueType];
      onNext?(prop: FullFieldRecordNextCallbackParams): any;
      icon?: IconProps["icon"];
    }
  >;
  state: State<Record<string, Setting<keyof SettingValueType>["value"]>>;
  id: string;
}
export interface FullFieldRecordProps<T extends keyof SettingValueType> {
  onChange: React.Dispatch<React.SetStateAction<Setting<T>["value"]>>;
  value: Setting<T>["value"];
  id: string;
  config: SettingConfig[T];
  type: T;
}
export function FullFieldRecord<T extends keyof SettingValueType>({ value, onChange, type, config: aConfig, id }: FullFieldRecordProps<T>) {
  const config: any = aConfig;
  const state: any = {
    get: value,
    set: onChange,
  };
  return (
    <div className="p-2">
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
      {type == "pin" && <PinField id={id} state={state} config={config} />}
    </div>
  );
}
export const FullField = ({ list, id: parentId, state }: FullFieldProps) => {
  const preparedList = Object.entries(list).map(([id, value]) => ({ id, ...value }));
  const currentIndex = useCopyState(0);
  React.useEffect(() => {
    currentIndex.set(0);
  }, []);
  const animated = useSettingValue("preferences/animation.boolean");
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <JoinComponentBy
        list={preparedList.map((data, index) => {
          const { label, icon, type, id, config, onNext } = data;
          const value = state.get[id] as any;
          return (
            <div className="w-full" key={id}>
              <div className="flex justify-between items-center p-2">
                <div className="flex items-center gap-1">
                  {icon && <Icon icon={icon} />}
                  <label htmlFor={`${id}-${index}`} className="capitalize">
                    {label} :
                  </label>
                </div>
                {currentIndex.get == index && (
                  <div className="flex items-center gap-1">
                    {index > 0 && (
                      <CircleTip
                        onClick={() => {
                          currentIndex.set(index - 1);
                        }}
                        icon={allIcons.solid.faChevronUp}
                      />
                    )}
                    {index + 1 < preparedList.length && (
                      <CircleTip
                        onClick={() => {
                          let stop = false;
                          const props: FullFieldRecordNextCallbackParams = {
                            currentIndex: currentIndex.get,
                            state: state.get,
                            stop() {
                              stop = true;
                            },
                            currentValue: value,
                          };
                          onNext?.(props);
                          if (stop) {
                            return;
                          }
                          currentIndex.set(index + 1);
                        }}
                        icon={allIcons.solid.faChevronDown}
                      />
                    )}
                  </div>
                )}
              </div>
              <div className={tw("h-[0px] flex justify-center overflow-hidden", animated && "transition-[height]", index == currentIndex.get && "h-[150px]")}>
                <FullFieldRecord
                  key={index}
                  type={type}
                  onChange={(result) => {
                    let newValue = typeof result == "function" ? result(value) : result;
                    state.set((prev) => {
                      return {
                        ...prev,
                        [id]: newValue,
                      } as any;
                    });
                  }}
                  id={`list-${parentId}-${id}`}
                  config={config}
                  value={value}
                />
              </div>
            </div>
          );
        })}
        joinComponent={<Line />}
      />
    </div>
  );
};
