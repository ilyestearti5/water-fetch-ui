import { handelShadowColor, useColorMerge } from "@/hooks";
import { tw } from "@/utils";
import { ReactElement, position } from "@/types/global";
export interface PanelSideProps extends ReactElement {
  position: position;
}
export function PanelSide({ position, style, className, children, ...props }: PanelSideProps) {
  const colorMerge = useColorMerge();
  return (
    <div
      style={{
        left: position ? `${position[0]}px` : "",
        top: position ? `${position[1]}px` : "",
      }}
      className={tw(
        `
          transition-all
          duration-300
          -translate-y-1/2
          fixed
          w-[500px]
          z-[1000]
        `,
        !position && "hidden",
      )}
    >
      <div
        {...props}
        tabIndex={1}
        className={tw(
          `
            ml-[-3px]
            rounded-lg
            border
            border-solid
            border-transparent
            relative
          `,
          className,
        )}
        style={{
          ...colorMerge({
            borderColor: "borders",
            backgroundColor: "secondry.background",
            boxShadow: handelShadowColor([
              {
                colorId: "shadow.color",
                blur: 5,
                size: 2,
                x: 0,
                y: 0,
              },
            ]),
          }),
        }}
      >
        {children}
        <span
          className={tw(`
            absolute
            top-1/2
            right-full
            -translate-y-1/2
            inline-block
            w-0
            h-0
            border-8
            border-solid
            border-l-transparent
            border-y-transparent
          `)}
          style={{
            ...colorMerge({
              borderRightColor: "secondry.background",
            }),
          }}
        />
      </div>
    </div>
  );
}
