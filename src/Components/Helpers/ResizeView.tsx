import React from "react";
import { useColorMerge } from "models/system/colors.model";
import { tw, useMemoDelay } from "@/functions/react-utils";
import { useCopyState } from "@/functions/react-utils";
import { ReactElement } from "@/types/global";
import { getTempFromStore, setTemp } from "@/reducers/Object/object.slice";
import { getSettingValue } from "@/reducers/Settings/settings.model";
export interface ResizeViewProps extends ReactElement {
  position?: "top" | "left" | "right" | "bottom"; // position of resize bar
  max?: number | ((change: number) => number); // max change or height of element resized (accept function)
  min?: number | ((change: number) => number); // max change or height of element resized (accept function)
  handelResize?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> & {
      size: number;
      min: number;
      max: number;
    },
  ) => any; // evenet handeler for when resize
  temp?: string;
  animited?: boolean;
}
export function ResizeView({ temp, animited, style, children, max = 0, min = 600, position = "left", hidden = false, handelResize, className, ...props }: ResizeViewProps) {
  const state = useCopyState<number | null>(null);
  React.useEffect(() => {
    const value = getTempFromStore<number>(`resizeData.${temp}`);
    state.set(value);
  }, []);
  useMemoDelay(
    () => {
      setTemp(`resizeData.${temp}`, state.get);
    },
    [state.get],
    1000,
  );
  const elementRef = React.createRef<HTMLDivElement>();
  const pos = ["left", "right"].includes(position) ? "width" : "height";
  let size = 0;
  // check of a resizing is in max position or min or between (null)
  const on = useCopyState<null | "min" | "max">(null);
  const isAnimited = typeof animited == "boolean" ? animited : getSettingValue("preferences/animation.boolean");
  // start resizing
  const start = useCopyState<null | DOMRect>(null);
  // handel event
  React.useEffect(() => {
    const resize = () => {
      if (!state.get) return;
      const minSize = typeof min == "number" ? min : min(state.get);
      const maxSize = typeof max == "number" ? max : max(state.get);
      if (minSize >= state.get) {
        on.set("min");
        state.set(minSize);
      } else if (state.get >= maxSize) {
        on.set("max");
        state.set(maxSize);
      } else {
        on.set(null);
        state.set(state.get);
      }
      size = state.get;
    };
    const handelEnd = () => {
      start.set(null);
    };
    addEventListener("resize", resize);
    addEventListener("pointerup", handelEnd);
    return () => {
      removeEventListener("resize", resize);
      removeEventListener("pointerup", handelEnd);
    };
  }, [state.get, min, max]);
  const colorMerge = useColorMerge();
  React.useEffect(() => {
    const minSize = typeof min == "function" ? min(state.get || 0) : min;
    if (!state.get) {
      state.set(minSize);
      return;
    }
  }, [state.get, min, max]);
  const status = React.useMemo(() => {
    return start.get ? "start" : "end";
  }, [start.get]);
  return (
    <div className="relative h-full">
      <div
        style={{
          [pos]: !hidden ? `${state.get}px` : "0px",
          ...style,
        }}
        {...props}
        className={tw("overflow-hidden", className, isAnimited && status == "end" && `transition-[width]`)}
        ref={elementRef}
      >
        {children}
      </div>
      <div
        className={tw(`resize-bar absolute transition-all opacity-0 cursor-e-resize z-[1000000] hover:opacity-100`, position)}
        onPointerDown={(e) => {
          const { currentTarget } = e;
          start.set(currentTarget.getBoundingClientRect());
        }}
        style={{
          ...colorMerge({
            backgroundColor: "primary",
          }),
        }}
      >
        {/* creation of full view for can be resize in all screen */}
        <div
          hidden={!start.get}
          onMouseMove={(e) => {
            e.preventDefault();
            const { pageX, pageY } = e;
            if (!state) {
              return;
            }
            const elementPosition = elementRef?.current?.getBoundingClientRect();
            let change = 0;
            // get the change of element need to resize
            switch (position) {
              case "right": {
                change = pageX - Number(elementPosition?.left);
                break;
              }
              case "left": {
                change = -pageX + Number(elementPosition?.right);
                break;
              }
              case "top": {
                change = Number(elementPosition?.bottom) - pageY;
                break;
              }
              case "bottom": {
                change = pageY - Number(elementPosition?.top);
                break;
              }
            }
            const minSize = typeof min == "number" ? min : min(change);
            const maxSize = typeof max == "number" ? max : max(change);
            if (minSize >= change) {
              on.set("min");
              state.set(minSize);
            } else if (change >= maxSize) {
              on.set("max");
              state.set(maxSize);
            } else {
              on.set(null);
              state.set(change);
            }
            size = change;
            handelResize && handelResize({ ...e, size, min: minSize, max: maxSize });
          }}
          className="resize-overview"
        />
      </div>
    </div>
  );
}
