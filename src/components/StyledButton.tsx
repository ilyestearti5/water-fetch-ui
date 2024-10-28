import { useSettingValue, handelShadowColor, useColorMerge } from "@/hooks";
import { tw } from "@/utils";
import { ClickProps } from "@/types/global";
export const StyledButton = ({ className, children, ...props }: ClickProps<HTMLButtonElement>) => {
  const colorMerge = useColorMerge();
  const isAnimated = useSettingValue("preferences/animation.boolean");
  return (
    <button
      {...props}
      style={{
        ...colorMerge({}),
      }}
      className={tw("styled-btn", isAnimated && "transition-transform", className)}
    >
      <span className={tw("styled-btn-content", isAnimated && "transition-all duration-[0.5s]")}>
        <span className={tw("before", isAnimated && "transition-all duration-[0.5s]")} />
        <span className={tw("after", isAnimated && "transition-all duration-[0.5s]")} />
        {children}
      </span>
      <span
        style={{
          ...colorMerge("primary", {
            boxShadow: handelShadowColor(
              [5, 15, 30, 60].map((blur) => ({
                colorId: "primary",
                blur,
              })),
            ),
          }),
        }}
        className={tw("styled-btn-before", isAnimated && "transition-all duration-[0.5s]")}
      />
      <span
        className={tw("styled-btn-after", isAnimated && "transition-all duration-[0.5s]")}
        style={{
          ...colorMerge("secondary", {
            boxShadow: handelShadowColor(
              [5, 15, 30, 60].map((blur) => ({
                colorId: "secondary",
                blur,
              })),
            ),
          }),
        }}
      />
    </button>
  );
};
