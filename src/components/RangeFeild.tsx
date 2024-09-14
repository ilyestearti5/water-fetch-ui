import React from "react";
import { tw, range, Shortcut } from "@/utils";
import { FeildGeneralProps } from "@/types/global";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
import { useSettingValue, useColorMerge, useCopyState } from "@/hooks";
export type RangeFeildProps = FeildGeneralProps<number, SettingConfig["range"]>;
export function RangeFeild({ state, config = {}, id }: RangeFeildProps) {
  const [min, max] = React.useMemo(() => {
    let min = config.min || 0;
    let max = 10;
    if (typeof config.max == "number") {
      max = config.max;
    }
    return [min, max];
  }, [config]);
  React.useEffect(() => {
    if (typeof state.get !== "number") return;
    if (config.max && config.max < state.get) {
      state.set(config.max);
    } else if (config.min && config.min > state.get) {
      state.set(config.min);
    }
  }, [config.max, config.min, state.get]);
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const colorMerge = useColorMerge();
  const rangeList = React.useMemo(() => range(min, max), [min, max]);
  const isAnimated = useSettingValue("preferences/animation.boolean");
  // Handle mouse dragging
  const handleMouseMove = (e: MouseEvent) => {
    if (!sliderRef.current) return;
    const { left, width } = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - left; // Mouse X relative to slider
    const percentage = Math.max(0, Math.min(x / width, 1)); // Clamp between 0 and 1
    const newValue = min + percentage * (max - min); // Calculate the value
    state.set(config.isFloat ? newValue : Math.round(newValue)); // Set state
  };
  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMouseMove(e.nativeEvent); // Update immediately
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  const focused = useCopyState(false);
  return (
    <div
      id={id}
      tabIndex={1}
      onKeyDown={(e) => {
        const arrowLeft = new Shortcut("arrowleft");
        if (arrowLeft.test(e)) {
          state.set((s) => {
            const r = s - (!!config.isFloat ? 0.5 : 1);
            if (r <= min) {
              return 0;
            } else {
              return r;
            }
          });
        }
        const arrowRight = new Shortcut("arrowright");
        if (arrowRight.test(e)) {
          state.set((s) => {
            const r = s + (!!config.isFloat ? 0.5 : 1);
            if (r >= max) {
              return max;
            } else {
              return r;
            }
          });
        }
      }}
      className={tw("relative rounded-md flex items-center justify-center gap-1 w-full")}
      style={{
        ...colorMerge(focused.get && "primary"),
      }}
      onFocus={() => {
        focused.set(true);
      }}
      onBlur={() => {
        focused.set(false);
      }}
    >
      <div className="relative flex items-center rounded-full w-[300px] h-[2px]" style={colorMerge("gray.opacity")} ref={sliderRef} onMouseDown={handleMouseDown}>
        <span className="top-full left-0 absolute text-center translate-y-1/2">{min}</span>
        {rangeList.map((key, index) => (
          <span
            key={index}
            style={{
              left: `${(key / rangeList.length) * 100}%`,
              width: `${(1 / rangeList.length) * 100}%`,
            }}
            className="flex justify-center h-[10px]"
          >
            <span className="inline-block w-[1px] h-full" style={colorMerge("gray.opacity", focused.get && "primary")} />
          </span>
        ))}
        <span className="top-full right-0 absolute text-center translate-y-1/2">{max}</span>
        <span
          style={{
            left: `${((state.get - min) / rangeList.length) * 100}%`,
            width: `${(1 / rangeList.length) * 100}%`,
          }}
          className={tw("absolute flex justify-center h-[20px]", isAnimated && "transition-[left]")}
        >
          <span
            className={tw("inline-flex items-center justify-center rounded-full h-full", config.showValue && "px-3 w-fit", !config.showValue && "w-[20px]")}
            style={colorMerge(
              "gray.opacity",
              focused.get && "primary",
              focused.get && {
                color: "primary.content",
              },
            )}
          >
            {config.showValue && state.get.toFixed(1)}
          </span>
        </span>
      </div>
    </div>
  );
}
