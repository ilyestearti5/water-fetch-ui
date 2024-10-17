import React from "react";
import { tw } from "@/utils";
import { enumTemp, onState, useColorMerge } from "@/hooks";
import { FeildGeneralProps } from "@/types/global";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useCopyState } from "@/hooks";
import { nanoid } from "@reduxjs/toolkit";
export type EnumFeildProps = FeildGeneralProps<string | undefined, SettingConfig["enum"]>;
//
export const slotId = "enum/list";
// render enum list
export function EnumFeild({ config = {}, id, state }: EnumFeildProps) {
  const elementRef = React.createRef<HTMLDivElement>();
  const colorMerge = useColorMerge();
  const focused = useCopyState(false);
  /*
   ******************************************************************************************************************************************************
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   ******************************************************************************************************************************************************
   */
  const choised = React.useMemo(() => {
    return config.list?.find(({ value }) => value == state.get);
  }, [config, state.get]);
  const complexeId = React.useMemo(() => {
    return id + "-" + nanoid() + "-" + crypto.randomUUID();
  }, [id]);
  const selectedId = enumTemp.getTemp<string>("id");
  return (
    <div className="relative w-full">
      <div
        id={id}
        ref={elementRef}
        tabIndex={1}
        onClick={() => {
          enumTemp.setTemp("id", complexeId);
          enumTemp.setTemp("list", config.list || []);
          enumTemp.setTemp("choised", state.get);
          const un = onState("object.data.enum.result", Boolean, (fullState) => {
            const enumConfig = fullState.object.data.enum;
            if (!enumConfig.id || enumConfig.id == complexeId) {
              if (enumConfig.id == complexeId) {
                state.set(enumConfig.result);
              }
              enumTemp.setTemp("result", null);
              enumTemp.setTemp("id", null);
              un();
            }
          });
        }}
        onFocus={() => {
          focused.set(true);
        }}
        onBlur={() => {
          focused.set(false);
        }}
        className={tw(`
          border
          border-solid
          border-transparent
          px-2
          py-1
          cursor-pointer
          rounded-md
          min-w-[80px]
          flex
          justify-between
          items-center
        `)}
        style={{
          ...colorMerge(
            "gray.opacity",
            {
              borderColor: "borders",
            },
            focused.get && {
              borderColor: "primary",
              backgroundColor: "gray.opacity.2",
            },
          ),
        }}
      >
        <div className="w-full text-center">{choised?.content || choised?.value || "no option choised"}</div>
        {config.expandIcon !== false && Boolean(config.list?.length) && <FontAwesomeIcon icon={complexeId == selectedId ? faAngleUp : faAngleDown} />}
      </div>
    </div>
  );
}
