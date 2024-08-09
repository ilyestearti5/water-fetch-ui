import { handelGradientColor, useColorMerge } from "@/data/system/colors.model";
import { tw } from "main/src/functions/react-utils";
import { ReactElement } from "@/types/global";
export function LineLoading() {
  const colorMerge = useColorMerge();
  return (
    <div
      className="relative bg-opacity-10 h-[2px] pointer-events-none"
      style={{
        ...colorMerge("gray.opacity"),
      }}
    >
      <div
        className={tw(`absolute h-full left-1/2 transform -translate-x-1/2 animate-loading`)}
        style={{
          ...colorMerge({
            background: handelGradientColor("to right", "transparent", "primary", "primary", "primary", "transparent"),
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
