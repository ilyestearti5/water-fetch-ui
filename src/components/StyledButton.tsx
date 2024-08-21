import { handelShadowColor, useColorMerge } from "@/hooks";
import { ClickProps } from "@/types/global";
import { tw } from "@/utils";
export const StyledButton = ({ className, ...props }: ClickProps<HTMLButtonElement>) => {
  const colorMerge = useColorMerge();
  return (
    <button
      {...props}
      style={{
        ...colorMerge({
          color: "primary",
        }),
      }}
      className={tw("styled-btn", className)}
    >
      <span className="styled-btn-content">
        <span className="styled-btn-content-before" />
        <span className="styled-btn-content-after" />
        Hello
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
        className="styled-btn-before"
      />
      <span
        className="styled-btn-after"
        style={{
          ...colorMerge("secondry", {
            boxShadow: handelShadowColor(
              [5, 15, 30, 60].map((blur) => ({
                colorId: "secondry",
                blur,
              })),
            ),
          }),
        }}
      />
    </button>
  );
};
