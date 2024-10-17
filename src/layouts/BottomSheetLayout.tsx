import React from "react";
import { EmptyComponent } from "../components/EmptyComponent";
import { useColorMerge, useCopyState, viewTemps } from "@/hooks";
import { mergeObject, tw } from "@/utils";
import { Line } from "../components/Line";
import { ChangableComponent } from "../components/PositionView";
export type size = "px" | "rem" | "em" | "vh" | "vw" | "vmin" | "vmax";
export interface BottomSheetLayoutProps {
  children?: React.ReactNode;
  min?: number | `${number}${size}`;
  max?: number | `${number}${size}`;
}
export const BottomSheetLayout = ({ children, min, max }: BottomSheetLayoutProps) => {
  const isOpen = viewTemps.useTemp<boolean>("bottomSheet");
  const colorMerge = useColorMerge();
  const transformState = useCopyState<null | number>(null);
  React.useEffect(() => {
    if (isOpen.get) {
      transformState.set(0);
    }
  }, [isOpen.get]);
  const height = useCopyState<null | number>(null);
  const start = useCopyState(false);
  const touchMove = useCopyState(false);
  React.useEffect(() => {
    if (!start.get) {
      return;
    }
    const move = (e: MouseEvent) => {
      const { clientY } = e;
      const h = innerHeight - (height.get ?? 0);
      const value = -h + clientY - 28 / 2;
      transformState.set(value);
    };
    const up = () => {
      start.set(false);
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
    };
  }, [start.get]);
  return (
    <EmptyComponent>
      {isOpen.get && (
        <div
          className="fixed inset-0"
          style={{
            ...colorMerge("shadow.color"),
          }}
          onClick={() => {
            isOpen.set(false);
            transformState.set(10000);
          }}
        />
      )}
      <ChangableComponent
        onContentChange={(props) => {
          height.set(props.height);
        }}
        style={{
          ...colorMerge("secondary.background", {
            borderColor: "borders",
          }),
          ...mergeObject(
            isOpen.get &&
              typeof transformState.get == "number" && {
                transform: `translateY(${Math.max(transformState.get, 0)}px)`,
              },
            min != undefined && {
              minHeight: min,
            },
            max != undefined && {
              maxHeight: max,
            },
          ),
        }}
        className={tw(
          `fixed overflow-hidden z-[1000] flex-none min-h-[100px] flex flex-col max-h-[60vh] inset-x-0 bottom-0 border-x border-t border-solid border-transparent shadow-lg transform translate-y-full rounded-ss-3xl rounded-se-3xl`,
          isOpen.get && "translate-y-0",
          !touchMove.get && "transition-transform duration-300",
        )}
      >
        <div
          onTouchStart={() => {
            touchMove.set(false);
          }}
          // for mobile
          onTouchMove={(e) => {
            touchMove.set(true);
            const { clientY } = e.touches[0];
            const h = innerHeight - (height.get ?? 0);
            const value = -h + clientY - 28 / 2;
            transformState.set(value);
          }}
          onTouchEnd={() => {
            touchMove.set(false);
            const value = transformState.get;
            if (value) {
              if (value >= (height.get ?? 0) / 3) {
                transformState.set(10000);
                isOpen.set(false);
              } else {
                transformState.set(0);
              }
            }
          }}
          // for desktop & start state
          onMouseDown={(e) => {
            start.set(true);
            e.preventDefault();
          }}
        >
          <div
            style={{
              ...colorMerge("secondary.background"),
            }}
            className="z-[1000] flex justify-center items-center h-[28px]"
          >
            <div
              className="rounded-full w-[70px] h-1.5 cursor-row-resize"
              style={{
                ...colorMerge("gray.opacity"),
              }}
            />
          </div>
        </div>
        <Line />
        <div className="h-full overflow-hidden">{children}</div>
      </ChangableComponent>
    </EmptyComponent>
  );
};
