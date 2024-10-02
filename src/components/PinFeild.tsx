import React, { useMemo, useCallback, FC } from "react";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
import { FeildGeneralProps } from "@/types/global";
import { JoinComponentBy } from "./JoinComponentBy";
import { EmptyComponent } from "./EmptyComponent";
import { setFocused, tw } from "@/utils";
import { handelShadowColor, useColorMerge, useCopyState } from "@/hooks";
// Define the props for SquareComponent
interface SquareComponentProps {
  index: number;
  length: number;
  stateInString: string | undefined;
  focused: boolean;
  colorMerge: Function;
  totalLength: number;
}
export type PinFieldProps = FeildGeneralProps<string | undefined, SettingConfig["pin"]>;
// SquareComponent with React.memo and custom comparison function for performance
const SquareComponent: FC<SquareComponentProps> = React.memo(
  ({ index, length, stateInString, focused, colorMerge, totalLength }) => {
    const squareNumber = length + index;
    // Compute styles once per render
    const style = useMemo(
      () =>
        colorMerge({ borderColor: "borders" }, focused && { borderColor: "primary" }, {
          boxShadow: handelShadowColor([{ colorId: "shadow.color", blur: 4, size: 0, x: 0, y: 5 }]),
        }),
      [focused, colorMerge],
    );
    return (
      <div
        className={tw(
          "w-[40px] h-[40px] border-solid border-transparent text-lg border-y border-r flex items-center justify-center",
          index === 0 && "rounded-ss-lg rounded-es-lg border-l",
          index + 1 === totalLength && "rounded-se-lg rounded-ee-lg",
        )}
        style={style}
      >
        {stateInString?.[squareNumber] || "."}
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.stateInString === nextProps.stateInString && prevProps.focused === nextProps.focused && prevProps.index === nextProps.index,
);
export const PinField: FC<PinFieldProps> = React.memo(
  ({ id, config, state }) => {
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
        <div className="flex items-center gap-2 rounded-lg w-fit">
          <JoinComponentBy
            list={matchers.map((num, i) => {
              const segments = Array.from(num);
              const length = matchers.slice(0, i).reduce((prev, curr) => prev + curr.length, 0);
              return (
                <div className="flex gap-0" key={i}>
                  {segments.map((_, j) => (
                    <SquareComponent key={j} index={j} totalLength={segments.length} length={length} stateInString={stateInString} colorMerge={colorMerge} focused={focused.get} />
                  ))}
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
