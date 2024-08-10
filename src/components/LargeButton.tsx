import { useColorMerge, handelGradientColor } from "@/data/system/colors.model";
import { useCopyState } from "@/hooks";
import { ClickProps } from "@/types/global";
import { tw } from "@/utils";
import { Icon } from "./Icon";
export type LargeButtonProps = ClickProps<HTMLButtonElement>;
export function LargeButton({
  "aria-selected": selected,
  children,
  className,
  icon,
  iconClassName,
  onBlur,
  onFocus,
  onMouseEnter,
  onMouseLeave,
  onPointerDown,
  onPointerUp,
  style,
  ...props
}: LargeButtonProps) {
  const hoverState = useCopyState(false);
  const colorMerge = useColorMerge();
  const focused = useCopyState(false);
  const clicked = useCopyState(false);
  return (
    <button
      onMouseEnter={(e) => {
        onMouseEnter?.(e);
        hoverState.set(true);
      }}
      onMouseLeave={(e) => {
        onMouseLeave?.(e);
        hoverState.set(false);
        clicked.set(false);
      }}
      onFocus={(e) => {
        onFocus?.(e);
        focused.set(true);
      }}
      onBlur={(e) => {
        onBlur?.(e);
        focused.set(false);
      }}
      onPointerDown={(e) => {
        onPointerDown?.(e);
        clicked.set(true);
      }}
      onPointerUp={(e) => {
        onPointerUp?.(e);
        clicked.get && clicked.set(false);
      }}
      {...props}
      style={{
        ...colorMerge(
          clicked.get && "gray.opacity.2",
          hoverState.get && "gray.opacity",
          focused.get && {
            outlineColor: "primary",
          },
        ),
        ...style,
      }}
      className={tw(
        `
        outline-transparent
        -outline-offset-1
        outline-1
        p-3
        w-full
        flex
        items-center
        gap-4
        relative
        overflow-hidden
      `,
        className,
      )}
    >
      <Icon iconClassName={iconClassName} icon={icon} />
      {children}
      <div
        className={tw(
          `
          absolute
          -top-[100px]
          h-[400px]
          pointer-events-none
          transition-[left]
          duration-1000
          -left-1/4
          w-1/4
          transform
          -rotate-45
        `,
          hoverState.get && `left-full`,
        )}
        style={{
          ...colorMerge({
            background: handelGradientColor("to right", "transparent", "gray.opacity", "transparent"),
          }),
        }}
      />
    </button>
  );
}
