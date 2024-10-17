import React, { useMemo, useCallback } from "react";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
import { FeildGeneralProps } from "@/types/global";
import { JoinComponentBy } from "../JoinComponentBy";
import { EmptyComponent } from "../EmptyComponent";
import { setFocused, tw } from "@/utils";
import { handelShadowColor, useColorMerge, useCopyState } from "@/hooks";
// Define the props for SquareComponent
export type PinFieldProps = FeildGeneralProps<string | undefined, SettingConfig["pin"]>;
// SquareComponent with React.memo and custom comparison function for performance
export const PinField = React.memo(
  ({ id, config, state }: PinFieldProps) => {
    const colorMerge = useColorMerge();
    const matchers = useMemo(() => (config?.match || ".").split("-"), [config?.match]);
    const stateInString = state.get?.toString() || "";
    const focused = useCopyState(false);
    const handleFocus = useCallback(() => setFocused(id), [id]);
    const handleInputFocus = () => focused.set(true);
    const handleInputBlur = () => focused.set(false);
    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only digits
        state.set(value || undefined);
      },
      [state],
    );
    const handlePaste = useCallback(async () => {
      const text = (await navigator.clipboard.readText()).replace(/[^0-9]/g, "");
      state.set(text || undefined);
    }, [state]);
    return (
      <div tabIndex={1} onFocus={handleFocus}>
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          type="text"
          inputMode="numeric"
          onChange={handleInputChange}
          onPaste={handlePaste}
          id={id}
          value={stateInString}
          className="absolute opacity-0 w-0 h-0" // Invisible but accessible for events
        />
        <div className="flex flex-wrap items-center gap-1 rounded-lg w-fit">
          <JoinComponentBy
            list={matchers.map((num, i) => {
              const segments = Array.from(num);
              const length = matchers.slice(0, i).reduce((prev, curr) => prev + curr.length, 0);
              return (
                <div className="flex" key={i}>
                  {segments.map((_, j) => {
                    const squareNumber = length + j;
                    // Compute styles once per render
                    const width = config?.size || 50;
                    return (
                      <div
                        key={j}
                        className={tw(
                          "border-solid border-transparent text-lg border-y border-r flex items-center justify-center",
                          j === 0 && "rounded-ss-lg rounded-es-lg border-l",
                          j + 1 === segments.length && "rounded-se-lg rounded-ee-lg",
                        )}
                        style={{
                          ...colorMerge({ borderColor: "borders" }, focused.get && { borderColor: "primary" }, {
                            boxShadow: handelShadowColor([{ colorId: "shadow.color", blur: 4, size: 0, x: 0, y: 5 }]),
                          }),
                          width,
                          height: width,
                        }}
                      >
                        {stateInString?.[squareNumber] || "."}
                      </div>
                    );
                  })}
                </div>
              );
            })}
            joinComponent={<EmptyComponent>-</EmptyComponent>}
          />
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.state.get === nextProps.state.get && prevProps.config === nextProps.config,
);
