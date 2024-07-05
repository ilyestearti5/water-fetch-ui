import { tw } from "@/functions/react-utils";
import { ReactElement, pos } from "@/types/global";

export interface ViewPanelProps extends ReactElement {
  position: pos;
}
export function ViewPanel({ ref, position: [left, top] = [0, 0], children, style, className, ...props }: ViewPanelProps) {
  return (
    <div
      ref={ref}
      {...props}
      style={{
        ...style,
        left,
        top,
      }}
      className={tw("transition-[left,top] duration-300", className, "fixed")}
    >
      {children}
    </div>
  );
}
