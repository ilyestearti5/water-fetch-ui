import { handelGradientColor, handelShadowColor, useColorMerge } from "@/data/system/colors.model";
import { mergeObject, tw } from "main/src/functions/react-utils";
import { ariaAttributes } from "main/src/functions/react-utils";
import { useCopyState } from "main/src/functions/react-utils";
import { ReactElement } from "@/types/global";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import React from "react";
import { EmptyComponent } from "./EmptyComponent";
import { twMerge } from "tailwind-merge";
export interface IconProps {
  icon?: FontAwesomeIconProps["icon"];
  iconClassName?: ReactElement["className"];
}
export type ClickProps<T> = ReactElement<T> & IconProps;
export type TipProps = ClickProps<HTMLSpanElement>;
export type ButtonProps = ClickProps<HTMLButtonElement>;
export interface TabProps extends ClickProps<HTMLSpanElement> {
  isActive?: boolean;
}
export type LargeButtonProps = ClickProps<HTMLButtonElement>;
export type NoteProps = ClickProps<HTMLSpanElement>;
export type AnchorProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
export const Icon = ({ icon, iconClassName }: IconProps) => {
  return icon ? <FontAwesomeIcon icon={icon} className={tw("pointer-events-none", iconClassName)} /> : <EmptyComponent />;
};
export function Tip({
  icon,
  className,
  children,
  "aria-checked": checked,
  iconClassName,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
  onPointerDown,
  onPointerUp,
  onPointerLeave,
  style,
  ...props
}: TipProps) {
  const colorMerge = useColorMerge();
  const hover = useCopyState(false);
  const focused = useCopyState(false);
  const active = useCopyState(false);
  React.useEffect(() => {
    return () => {
      active.set(false);
      focused.set(false);
      hover.set(false);
    };
  }, []);
  return (
    <span
      onFocus={(e) => {
        focused.set(true);
        onFocus?.(e);
      }}
      onPointerDown={(e) => {
        active.set(true);
        onPointerDown?.(e);
      }}
      onPointerUp={(e) => {
        active.set(false);
        onPointerUp?.(e);
      }}
      onPointerLeave={(e) => {
        active.set(false);
        onPointerLeave?.(e);
      }}
      onBlur={(e) => {
        focused.set(false);
        onBlur?.(e);
      }}
      onMouseEnter={(e) => {
        hover.set(true);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        hover.set(false);
        onMouseLeave?.(e);
      }}
      className={tw(
        `
          rounded-md
          p-1
          inline-flex
          items-center
          justify-center
          -outline-offset-1
          outline-1
          outline-transparent
          cursor-pointer
        `,
        props["aria-disabled"] && `pointer-events-none`,
        className,
      )}
      style={{
        ...colorMerge(
          hover.get && {
            backgroundColor: "gray.opacity",
          },
          props["aria-disabled"] && {
            color: "gray.opacity.2",
          },
          checked && "primary",
          checked && {
            color: "primary.content",
          },
          focused.get && {
            outlineColor: "primary",
          },
        ),
        ...style,
      }}
      {...props}
    >
      <Icon iconClassName={iconClassName} icon={icon} />
      {children}
    </span>
  );
}
export function Button({ children, className, icon, style, iconClassName, onPointerDown, onPointerLeave, onPointerUp, onMouseEnter, onMouseLeave, ...props }: ButtonProps) {
  const colorMerge = useColorMerge();
  const focused = useCopyState(false);
  const active = useCopyState(false);
  const hover = useCopyState(false);
  React.useEffect(() => {
    return () => {
      focused.set(false);
      active.set(false);
      hover.set(false);
    };
  }, []);
  const fullStyle = React.useMemo(() => {
    return {
      ...colorMerge(
        "primary",
        props["aria-disabled"] && "gray.opacity",
        !props["aria-disabled"] && {
          color: "primary.content",
        },
        focused.get && {
          boxShadow: handelShadowColor([
            {
              colorId: "shadow.color",
              isInset: true,
              blur: 1,
            },
          ]),
        },
      ),
      ...style,
    };
  }, [colorMerge, props, focused.get, handelShadowColor, style, active.get]);
  return (
    <button
      onFocus={() => focused.set(true)}
      onBlur={() => focused.set(false)}
      onMouseEnter={(e) => {
        hover.set(true);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        hover.set(false);
        onMouseLeave?.(e);
      }}
      onPointerDown={(e) => {
        active.set(true);
        onPointerDown?.(e);
      }}
      onPointerUp={(e) => {
        active.set(false);
        onPointerUp?.(e);
      }}
      onPointerLeave={(e) => {
        active.set(false);
        onPointerLeave?.(e);
      }}
      className={tw(
        `
        p-2
        rounded-[4px]
        gap-2
        flex
        items-center
        outline-2
        outline-offset-1
        outline-transparent
        truncate
        justify-center
      `,
        ariaAttributes.boolean(props["aria-disabled"]) && `cursor-not-allowed`,
        className,
        `relative`,
      )}
      type="button"
      style={mergeObject(fullStyle, focused.get && { outlineColor: fullStyle.backgroundColor?.toString() })}
      {...props}
    >
      <span
        className={tw(`absolute inset-0 opacity-0 transition-[opacity] inline-block pointer-events-none`, hover.get && `opacity-60`)}
        style={{
          ...colorMerge("shadow.color", active.get && "gray.opacity.toLight"),
        }}
      />
      <Icon iconClassName={iconClassName} icon={icon} />
      {children}
    </button>
  );
}
export function Tab({ children, icon, iconClassName, isActive, style, ...props }: TabProps) {
  const hover = useCopyState(false);
  React.useEffect(() => {
    return () => {
      hover.set(false);
    };
  }, []);
  const colorMerge = useColorMerge();
  return (
    <span
      onMouseEnter={() => {
        hover.set(true);
      }}
      onMouseLeave={() => {
        hover.set(false);
      }}
      style={{
        ...colorMerge(
          isActive && "primary",
          isActive && {
            color: "primary.content",
          },
        ),
        ...style,
      }}
      className={tw(`relative inline-flex items-center gap-1 px-3 cursor-pointer h-[35px] capitalize outline-1 -outline-offset-1 outline-transparent rounded-lg`)}
      {...props}
    >
      <div
        className={tw("transition-[width,height,box-shadow] duration-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 rounded-lg -translate-y-1/2 w-full h-full pointer-events-none z-[-10]")}
        style={{
          ...colorMerge(
            "secondry.background",
            hover.get && "gray.opacity.2",
            isActive && "primary",
            isActive && {
              boxShadow: handelShadowColor([
                {
                  colorId: "shadow.color",
                  x: 0,
                  y: 5,
                  blur: 6,
                  size: 0,
                },
              ]),
            },
          ),
        }}
      />
      <Icon iconClassName={iconClassName} icon={icon} />
      {children}
    </span>
  );
}
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
export function Note({ onClick, className, children, iconClassName, ...props }: NoteProps) {
  const colorMerge = useColorMerge();
  return (
    <span
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);
      }}
      className={tw(
        className,
        `
          absolute
          top-0
          right-0
          rounded-xl
          flex
          min-w-[22px]
          h-[22px]
          justify-center
          items-center
          overflow-hidden
        `,
      )}
      {...props}
      style={{
        ...colorMerge("primary", {
          color: "primary.content",
        }),
      }}
    >
      {children}
    </span>
  );
}
export function Anchor({ className, style, ...props }: AnchorProps) {
  const colorMerge = useColorMerge();
  const hover = useCopyState(false);
  return (
    <a
      onMouseEnter={() => hover.set(true)}
      onMouseLeave={() => hover.set(false)}
      className={tw(className, `hover:underline`)}
      style={{
        ...colorMerge(
          hover.get && {
            color: "primary",
          },
        ),
      }}
      {...props}
    />
  );
}

export function CircleTip({ children, className, icon, style, iconClassName, onPointerDown, onPointerLeave, onPointerUp, onMouseEnter, onMouseLeave, ...props }: ButtonProps) {
  const colorMerge = useColorMerge();
  const active = useCopyState(false);
  const hover = useCopyState(false);
  React.useEffect(() => {
    return () => {
      active.set(false);
      hover.set(false);
    };
  }, []);
  return (
    <button
      onMouseEnter={(e) => {
        hover.set(true);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        hover.set(false);
        onMouseLeave?.(e);
      }}
      onPointerDown={(e) => {
        active.set(true);
        onPointerDown?.(e);
      }}
      onPointerUp={(e) => {
        active.set(false);
        onPointerUp?.(e);
      }}
      onPointerLeave={(e) => {
        active.set(false);
        onPointerLeave?.(e);
      }}
      className={tw(
        `
        rounded-full
        w-[40px]
        h-[40px]
        gap-2
        flex
        items-center
        justify-center
        outline-2
        outline-offset-1
        outline-transparent
        truncate
      `,
        className,
        `relative`,
      )}
      type="button"
      style={{
        ...colorMerge(hover.get && "gray.opacity", active.get && "gray.opacity.2"),
      }}
      {...props}
    >
      <Icon iconClassName={twMerge("text-xl", iconClassName)} icon={icon} />
      {children}
    </button>
  );
}
