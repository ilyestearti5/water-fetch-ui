import React from "react";
import { Feild as FeildType, feildHooks, initNewFeild } from "@/data/system/feild.model";
import { TextArea, TextAreaProps } from "./TextArea";
import { tw } from "@/utils";
import { useColorMerge } from "@/data/system/colors.model";
import { con } from "@/utils/index";
import { JoinComponentBy } from "./JoinComponentBy";
import { Line } from "@/components/Line";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faWarning } from "@fortawesome/free-solid-svg-icons";
import { MarkDown } from "./MarkDown";
import { useCopyState, useMemoDelay } from "@/hooks";
export interface FeildProps extends TextAreaProps {
  inputName: string;
  selectWhenFocusIn?: boolean;
  help?: any;
  controls?: FeildType["controls"];
  controlsPosition?: "top" | "bottom";
  maxRows?: number;
  minRows?: number;
  acceptHistory?: boolean;
  propositions?: string[];
}
export function Feild({
  inputName,
  selectWhenFocusIn,
  placeholder,
  controlsPosition = "bottom",
  className,
  value: _v,
  rows,
  style,
  controls,
  onFocus,
  onBlur,
  acceptHistory,
  propositions,
  ...props
}: FeildProps) {
  const value = feildHooks.getOneFeild(inputName, "value");
  const selection = feildHooks.getOneFeild(inputName, "selection");
  const hists = feildHooks.useOneFeild(inputName, "history");
  const colorMerge = useColorMerge();
  const focused = useCopyState(false);
  useMemoDelay(
    () => {
      if (!acceptHistory && !value) {
        return;
      }
      hists.set((prv) => {
        if (!prv) {
          return [value!];
        } else {
          return [...prv, value!];
        }
      });
    },
    [value, acceptHistory],
    2000,
  );
  initNewFeild(inputName);
  //
  React.useEffect(() => {
    feildHooks.setOneFeild(inputName, "controls", controls || {});
  }, [controls, inputName]);
  const controlsArray = React.useMemo(() => {
    return Object.entries(controls || {})
      .map(([expString, result]) => {
        try {
          const out = value?.match(new RegExp(expString, "ig"));
          const type = out ? "succ" : "err";
          if (!result[type]) {
            return undefined;
          }
          return {
            type,
            content: result[type],
          };
        } catch (e) {
          con.warn("expression not correct", e);
          return undefined;
        }
      })
      .filter(Boolean)
      .map((config) => config!);
  }, [value, controls]);
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
  return (
    <div className="relative flex items-center w-full h-full">
      <TextArea
        placeholder={`${placeholder || ""}${focused.get ? "..." : ""}`}
        propositions={propositions}
        className={tw(
          `
            p-2
            border
            border-solid
            border-transparent
            font-[inherit]
            resize-none
            rounded-sm
            w-full
            text-xs
          `,
          className,
        )}
        onFocus={(e) => {
          if (selectWhenFocusIn) {
            e.currentTarget.select();
          }
          focused.set(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          focused.set(false);
          onBlur?.(e);
        }}
        value={value}
        onValueChange={(val) => {
          feildHooks.setOneFeild(inputName, "value", val);
        }}
        selection={selection}
        onSelectionChange={(sel) => {
          feildHooks.setOneFeild(inputName, "selection", sel);
        }}
        style={{
          ...colorMerge({
            borderColor: focused.get ? "primary" : "borders",
            backgroundColor: "feild.background",
          }),
          ...style,
        }}
        title={import.meta.env.DEV ? inputName : undefined}
        rows={rows || 1}
        id={inputName}
        {...props}
      />
      {focused.get && Boolean(controlsArray.length) && (
        <div
          className={tw(
            `
              z-[100000000000000000000000000000000000000]
              rounded-md
              absolute
              right-0
              border
              border-solid
              border-transparent
              text-xs
              my-1
              max-w-full
              w-fit
            `,
            controlsPosition == "top" ? "bottom-full" : "top-full",
          )}
          style={{
            ...colorMerge("primary.background", {
              borderColor: "borders",
            }),
          }}
        >
          <JoinComponentBy
            list={controlsArray.map(({ content, type }, index) => {
              const icon = type == "err" ? faWarning : faCheck;
              return (
                <div key={index} className="flex items-center gap-x-2 p-2">
                  <FontAwesomeIcon
                    style={{
                      ...colorMerge(
                        type == "err" && {
                          color: "warning.text",
                        },
                        type == "succ" && {
                          color: "success.text",
                        },
                      ),
                    }}
                    icon={icon}
                  />
                  {content && <MarkDown value={content} />}
                </div>
              );
            })}
            joinComponent={<Line />}
          />
        </div>
      )}
    </div>
  );
}
