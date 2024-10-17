import { handelGradientColor, useColorMerge } from "@/hooks";
import { tw, range, mergeObject } from "@/utils";
import { ReactElement } from "@/types/global";
import { Icon, IconProps } from "./Icon";
export function LineLoading() {
  const colorMerge = useColorMerge();
  return (
    <div
      className="relative bg-opacity-10 w-full h-[2px] pointer-events-none"
      style={{
        ...colorMerge("gray.opacity"),
      }}
    >
      <div
        className={tw(`absolute h-full left-0 transform animate-loading`)}
        style={{
          ...colorMerge({
            background: handelGradientColor("to right", "transparent", "primary"),
          }),
        }}
      />
      <div
        className={tw(`absolute h-full right-0 transform animate-loading`)}
        style={{
          ...colorMerge({
            background: handelGradientColor("to right", "primary", "transparent"),
          }),
        }}
      />
    </div>
  );
}
interface CircleLoadingProps extends ReactElement {
  circleClassName?: string;
}
export const CircleLoading = ({ className, circleClassName, ...props }: CircleLoadingProps) => {
  const colorMerge = useColorMerge();
  return (
    <span>
      <span className={tw("relative inline-flex items-center justify-center text-xs w-[25px] h-[25px]", className)} {...props}>
        <span
          className={tw("absolute inline-block w-full h-full rounded-full border-[2px] border-solid border-transparent animate-spin", circleClassName)}
          style={{
            ...colorMerge({
              borderTopColor: "primary",
              borderLeftColor: "primary",
              borderRightColor: "primary",
            }),
          }}
        />
      </span>
    </span>
  );
};

export interface BallLoadingProps extends ReactElement {
  balls?: number;
  ballClassName?: string;
  ballStyle?: React.CSSProperties;
  icon?: IconProps["icon"];
  iconClassName?: string;
}

export const BallLoading = ({ balls = 3, ballClassName = "", ballStyle, icon, iconClassName }: BallLoadingProps) => {
  const colorMerge = useColorMerge();
  return (
    <div className="flex">
      {range(1, balls).map((index) => {
        return (
          <span
            key={index}
            className={tw("inline-flex items-center justify-center animate-ty w-[30px] h-[30px] rounded-full", ballClassName)}
            style={{
              ...colorMerge("primary", {
                color: "primary.content",
              }),
              animationDelay: `${(index / balls) * 1}s`,
              ...mergeObject(ballStyle),
            }}
          >
            <Icon icon={icon} iconClassName={tw("w-1/2 h-1/2", iconClassName)} />
          </span>
        );
      })}
    </div>
  );
};
