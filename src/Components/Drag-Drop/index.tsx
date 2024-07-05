import { tw } from "@/functions/react-utils";
import { getDragOn, setDragOn } from "@/reducers/Global/drag.slice";
import { ReactElement } from "@/types/global";
import React from "react";
export interface OverDragViewProps extends ReactElement {
  dragId: string;
  onEnd: (string: string) => string;
}
export function OverDragView({ dragId, ...props }: OverDragViewProps) {
  return <div {...props} onDragEnd={() => {}} />;
}
export interface DragViewProps extends ReactElement {
  dragId: string;
  value: string;
}
export function DragView({ dragId, value, children, className, ...props }: DragViewProps) {
  const dragOn = getDragOn();
  const isDragging = React.useMemo(() => dragOn === dragId, [dragOn, dragId]);
  return (
    <div
      draggable
      onDragStart={() => {
        dragId && setDragOn(dragId);
      }}
      onDragEnd={() => {
        setDragOn(undefined);
      }}
      className="relative"
    >
      {/* Your draggable element */}
      <div {...props} className={tw(className, isDragging && `invisible`)}>
        {children}
      </div>
      {/* Blue corner or indicator */}
      {isDragging && (
        <div
          style={{
            position: "absolute",
            top: "-10px",
            left: "-10px",
            width: "10px",
            height: "10px",
            backgroundColor: "blue",
          }}
        />
      )}
    </div>
  );
}
