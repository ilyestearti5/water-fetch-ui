import React from "react";
import { tw, mergeObject } from "@/utils";
import { position } from "@/app";
import { MarkDown } from "./MarkDown";
import { handelShadowColor, useColorMerge, useCopyState } from "@/hooks";
import { getTitle, getPosition, getX, getY, setPosition } from "@/reducers/Global/title.slice";
export function TitleProvider() {
  const title = getTitle();
  const position = getPosition();
  const x = getX();
  const y = getY();
  const transPosition = useCopyState<position | null>(null);
  React.useEffect(() => {
    transPosition.set(null);
    const timer = setTimeout(() => {
      transPosition.set(position);
    }, 500);
    return () => {
      transPosition.set(null);
      clearTimeout(timer);
    };
  }, [x, y, position]);
  const colorMerge = useColorMerge();
  return (
    <div
      onTransitionEnd={() => {
        if (!title) {
          setPosition(null);
        }
      }}
      className={tw(
        `fixed z-[1000000000000000000000] pointer-events-none opacity-0 transition-opacity delay-300 duration-500 p-4`,
        transPosition.get && "opacity-100",
        x == "left" && "-translate-x-full",
        x == "center" && "-translate-x-1/2",
        y == "top" && "-translate-y-full",
        y == "center" && "-translate-y-1/2",
      )}
      style={{
        ...mergeObject(
          {
            left: "-1000px",
            top: "-2000px",
          },
          transPosition.get && {
            left: `${transPosition.get[0]}px`,
            top: `${transPosition.get[1]}px`,
          },
        ),
      }}
    >
      <span className={"inline-block absolute border-8 border-transparent border-solid w-[0px] h-[0px] transform"} />
      <div
        className={`border border-solid border-transparent rounded-full py-1 px-2`}
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
