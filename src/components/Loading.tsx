import { handelGradientColor, useColorMerge } from "@/hooks";
import { tw, range } from "@/utils";
import { ReactElement } from "@/types/global";
export function LineLoading() {
  const colorMerge = useColorMerge();
  return (
    <div
      className="relative bg-opacity-10 h-[2px] w-full pointer-events-none"
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

interface BallLoadingProps extends ReactElement {
  balls?: number;
  ballClassName?: string;
}

export const BallLoading = ({ balls = 3, ballClassName = "" }: BallLoadingProps) => {
  const colorMerge = useColorMerge();
  return (
    <div className="flex">
      {range(1, balls).map((index) => {
        return (
          <span
            key={index}
            className="inline-block animate-ty w-[40px] h-[40px] rounded-full"
            style={{
              ...colorMerge("primary"),
              animationDelay: `${(index / balls) * 1}s`,
            }}
          />
        );
      })}
    </div>
  );
};
