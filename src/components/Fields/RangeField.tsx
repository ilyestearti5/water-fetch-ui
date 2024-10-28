import React from "react";
import { FeildGeneralProps } from "@/types/global";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
import { useColorMerge, useCopyState } from "@/hooks";
import { Shortcut } from "@/utils";
export type RangeFeildProps = FeildGeneralProps<number, SettingConfig["range"]>;
export const RangeFeild: React.FC<RangeFeildProps> = ({ state, config = {}, id }) => {
  const rangeRef = React.useRef<HTMLDivElement>(null);
  const dragging = useCopyState(false); // Dragging state
  const min = config.min || 0;
  const max = config.max || 100;
  const isFloat = config.isFloat || false;
  // Memoize rect to avoid recalculating it multiple times during dragging
  const rect = React.useMemo(() => rangeRef.current?.getBoundingClientRect(), [dragging.get]);
  const updateValue = React.useCallback(
    (offsetX: number) => {
      if (rect) {
        const percent = Math.max(0, Math.min(1, offsetX / rect.width));
        let newValue = min + percent * (max - min);
        newValue = isFloat ? +newValue.toFixed(2) : Math.round(newValue); // Round based on isFloat
        state.set(newValue);
      }
    },
    [min, max, isFloat, rect, state],
  );
  const handleTouchMove = React.useCallback(
    (e: TouchEvent) => {
      if (!dragging.get) return;
      const offsetX = e.touches[0].clientX - (rect?.left || 0);
      updateValue(offsetX);
    },
    [dragging.get, updateValue, rect],
  );
  const handleMouseMove = React.useCallback(
    (e: MouseEvent) => {
      if (!dragging.get) return;
      const offsetX = e.clientX - (rect?.left || 0);
      updateValue(offsetX);
    },
    [dragging.get, updateValue, rect],
  );
  const handleTouchStart = React.useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      dragging.set(true);
      handleTouchMove(e.nativeEvent); // Call once to set the initial value
    },
    [handleTouchMove],
  );
  const handleMouseDown = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      dragging.set(true);
      handleMouseMove(e.nativeEvent); // Call once to set the initial value
    },
    [handleMouseMove],
  );
  const handleTouchEnd = React.useCallback(() => dragging.set(false), []);
  const handleMouseUp = React.useCallback(() => dragging.set(false), []);
  React.useEffect(() => {
    if (dragging.get) {
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchend", handleTouchEnd);
      window.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "grabbing"; // Set cursor to grabbing when dragging
    } else {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "auto"; // Reset cursor when not dragging
    }
    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "auto"; // Clean up cursor style
    };
  }, [dragging.get, handleTouchMove, handleMouseMove, handleTouchEnd, handleMouseUp]);
  const colorMerge = useColorMerge();
  const stringed = React.useMemo(() => state.get.toString(), [state.get]);
  const result = React.useMemo(() => ((state.get - min) / (max - min)) * 100, [state.get, min, max]);
  const markedListPrepared = React.useMemo(() => {
    const markedList = config.marked || {};
    const keys = Object.keys(markedList)
      .map(Number)
      .sort((a, b) => a - b);
    return keys.map((key) => ({
      key,
      value: markedList[key],
      left: ((key - min) / (max - min)) * 100,
    }));
  }, [config.marked, min, max]);
  React.useEffect(() => {
    if (state.get < min) {
      state.set(min);
    } else if (state.get > max) {
      state.set(max);
    }
  }, [min, max, state.get]);
  const focused = useCopyState(false);
  return (
    <div
      tabIndex={1}
      onFocus={() => focused.set(true)}
      onBlur={() => focused.set(false)}
      onKeyDown={(e) => {
        const a = new Shortcut("arrowright");
        const b = new Shortcut("arrowleft");
        if (a.test(e) && state.get < max) {
          state.set(state.get + (config.steps || 1));
        } else if (b.test(e) && state.get > min) {
          state.set(state.get - (config.steps || 1));
        }
      }}
      className="flex flex-col items-center w-full min-w-[150px] select-none"
    >
      <div
        ref={rangeRef}
        id={id}
        style={{
          ...colorMerge(
            "gray.opacity",
            focused.get && {
              outlineColor: "primary",
            },
          ),
        }}
        className={`relative outline-1 outline-offset-1 outline-solid rounded-lg w-full h-[2px] cursor-${dragging.get ? "grabbing" : "grab"}`}
        onTouchStart={handleTouchStart}
        onMouseDown={handleMouseDown}
      >
        <div className="absolute rounded-lg h-[2px]" style={{ ...colorMerge("primary"), width: `${result}%` }} />
        <div
          className="top-1/2 absolute rounded-full w-4 h-4 transform -translate-y-1/2"
          style={{ ...colorMerge("primary"), left: `calc(${Math.max(result, 0)}% - 8px)` }} // Center the knob
        />
        {markedListPrepared.map((props, index) => (
          <div
            className="top-1/2 absolute rounded-full w-[3px] h-4 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              backgroundColor: props.value,
              left: props.left + "%",
            }}
            key={index}
          />
        ))}
      </div>
      {config.showValue && <div className="mt-2">{stringed}</div>}
    </div>
  );
};
