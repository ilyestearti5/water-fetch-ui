import React from "react";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
import { FeildGeneralProps } from "@/types/global";
import { JoinComponentBy } from "./JoinComponentBy";
import { EmptyComponent } from "./EmptyComponent";
import { setFocused, tw } from "@/utils";
import { handelShadowColor, useColorMerge, useCopyState } from "@/hooks";
export type PinFeildProps = FeildGeneralProps<number | undefined, SettingConfig["pin"]>;
export function PinFeild({ id, config, state }: PinFeildProps) {
  const colorMerge = useColorMerge();
  const matchers = (config?.match || ".").split("-");
  const getSqaureNumber = (i: number, j: number) => {
    const length = matchers.slice(0, i).reduce((prv, curr) => prv + curr.length, 0);
    return length + j;
  };
  const stateInString = React.useMemo(() => {
    if (state.get) {
      return state.get.toString();
    }
    return undefined;
  }, [state.get]);
  const focused = useCopyState(false);
  return (
    <div
      tabIndex={1}
      onFocus={() => {
        setFocused(id);
      }}
    >
      <input
        onFocus={() => {
          focused.set(true);
        }}
        onBlur={() => {
          focused.set(false);
        }}
        type="number"
        onInput={(e) => {
          const string = e.currentTarget.value;
          console.log(string.includes("e"));
          if (["e", "."].some((s) => string.includes(s))) {
            return;
          }
          const value = +string;
          if (isNaN(value)) {
            return;
          }
          if (!value) {
            state.set(undefined);
            return;
          }
          let sum = matchers.reduce((prev, curre) => prev + curre.length, 0);
          if (string.length <= sum) {
            state.set(+parseInt(string));
          }
        }}
        onPaste={async () => {
          const text = navigator.clipboard.readText();
          const value = +text;
          if (isNaN(value)) {
            return;
          }
          if (!value) {
            state.set(undefined);
            return;
          }
          const string = value.toString();
          if (["e", "."].some((s) => string.includes(s))) {
            return;
          }
          let sum = matchers.reduce((prev, curre) => prev + curre.length, 0);
          if (string.length <= sum) {
            state.set(+parseInt(string));
          }
        }}
        id={id}
        value={state.get}
        className="w-[0px] h-[0px]"
      />
      <div
        style={{
          ...colorMerge({
            boxShadow: handelShadowColor([
              {
                colorId: "shadow.color",
                blur: 4,
                size: 0,
                x: 0,
                y: 5,
              },
            ]),
          }),
        }}
        className="flex items-center gap-2 rounded-lg w-fit"
      >
        <JoinComponentBy
          list={matchers.map((num, i) => {
            const s = num.split("");
            const l = s.length;
            return (
              <div className="flex">
                <JoinComponentBy
                  key={i}
                  list={s.map((_, j) => {
                    return (
                      <div
                        className={tw(
                          `
                          w-[40px]
                          h-[40px]
                          border-solid
                          border-transparent
                          text-lg
                          border-y
                          border-r
                          flex items-center justify-center
                        `,
                          j == 0 && `rounded-ss-lg rounded-es-lg border-l`,
                          j + 1 == l && `rounded-se-lg rounded-ee-lg`,
                        )}
                        style={{
                          ...colorMerge(
                            {
                              borderColor: "borders",
                            },
                            focused.get && {
                              color: "primary",
                            },
                          ),
                        }}
                        key={j}
                      >
                        {stateInString?.[getSqaureNumber(i, j)] || "."}
                      </div>
                    );
                  })}
                  joinComponent={<EmptyComponent />}
                />
              </div>
            );
          })}
          joinComponent={<EmptyComponent>-</EmptyComponent>}
        />
      </div>
    </div>
  );
}
