import { tw } from "@/utils";
import { ReactElement, position } from "@/types/global";

export interface ViewPanelProps extends ReactElement {
  position: position;
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
