import { SettingConfig } from "@/reducers/Settings/SettingConfig";
import { FeildGeneralProps } from "@/types/global";
import { JoinComponentBy } from "./JoinComponentBy";
import { EmptyComponent } from "./EmptyComponent";
import { setFocused, tw } from "@/utils";
import { useColorMerge } from "@/hooks";
import React from "react";
export type PinFeildProps = FeildGeneralProps<number | undefined, SettingConfig["pin"]>;
export function PinFeild({ id, config, state }: PinFeildProps) {
  const colorMerge = useColorMerge();
  const matchers = (config?.match || ".").split("-");
  const getSqaureNumber = (i: number, j: number) => {
    const length = matchers.slice(0, i).reduce((prv, curr) => prv + curr.length, 0);
    return length + j;
  };

  const getIndexes = (squareNumber: number): [number, number] | null => {
    let k = 0;
    for (let i = 0; i < matchers.length; i++) {
      const string = matchers[i];
      for (let j = 0; j < string.length; j++) {
        if (squareNumber == k) {
          return [i, j];
        }
        k++;
      }
    }
    return null;
  };

  const stateInString = React.useMemo(() => {
    if (state.get) {
      return state.get.toString();
    }
    return undefined;
  }, [state.get]);

  return (
    <div
      tabIndex={1}
      onFocus={() => {
        setFocused(id);
      }}
      className="flex items-center gap-2 rounded-lg w-fit"
    >
      <input
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
        className="w-[0px] h-[0px]"
        value={state.get}
      />
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
                        ...colorMerge({
                          borderColor: "borders",
                        }),
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
  );
}
