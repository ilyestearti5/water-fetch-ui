import { getTitle, getPosition, getX, getY, setPosition } from "@/reducers/Global/title.slice";
import { tw, mergeObject } from "@/utils";
import { MarkDown } from "./MarkDown";
import { handelShadowColor, useColorMerge } from "@/hooks";
export function TitleProvider() {
  const title = getTitle();
  const position = getPosition();
  const x = getX();
  const y = getY();
  const colorMerge = useColorMerge();
  return (
    <div
      onTransitionEnd={() => {
        if (!title) {
          setPosition(null);
        }
      }}
      className={tw(
        `
          fixed
          z-[1000000000000000000000]
          pointer-events-none
          opacity-0
          transition-opacity
          delay-300
          duration-500
        `,
        position && "opacity-100",
        x == "left" && "-translate-x-full",
        x == "center" && "-translate-x-1/2",
        y == "top" && "-translate-y-full",
        y == "center" && "-translate-y-1/2",
        (title || title == 0) && "opacity-100",
      )}
      style={{
        ...mergeObject(
          {
            left: "-1000px",
            top: "-2000px",
          },
          position && {
            left: `${position[0]}px`,
            top: `${position[1]}px`,
          },
        ),
      }}
    >
      <span
        style={{
          ...colorMerge({}),
        }}
        className={tw("inline-block absolute border-8 border-transparent border-solid w-[0px] h-[0px] transform")}
      />
      <div
        className={tw(`
            border
            border-solid
            border-transparent
            rounded-lg
            py-1
            px-2
          `)}
        style={{
          ...colorMerge("secondary.background", {
            borderColor: "borders",
            boxShadow: handelShadowColor([{ colorId: "shadow.color", blur: 30, size: 1, x: 0, y: 10 }]),
          }),
        }}
      >
        <MarkDown value={String(title)} />
      </div>
    </div>
  );
}
