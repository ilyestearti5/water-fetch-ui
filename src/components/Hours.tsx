import { useColorMerge } from "@/hooks";
import { tw } from "@/utils";
import { useCopyState } from "@/hooks";
import { settingHooks, getSettingValue } from "@/hooks";
import React from "react";
import { Text } from "./Text";
import { EmptyComponent } from "./EmptyComponent";
const Time = ({ time }: { time: number }) => {
  return <span className={"font-mono"}>{time >= 10 ? time : `0${time}`}</span>;
};
const timerVisibility = "visibility/timer.boolean";
export function Hours() {
  const visibility = getSettingValue(timerVisibility);
  const date = useCopyState<Date | null>(null);
  React.useEffect(() => {
    const timer = setInterval(() => {
      const d = new Date();
      date.set(d);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const isAnimation = getSettingValue("preferences/animation.boolean");
  const colorMerge = useColorMerge();
  const styles = {
    ...colorMerge("secondry.background", {
      borderColor: "borders",
      color: "focus.text",
    }),
  };
  return (
    <div
      className={tw(
        `
        absolute
        cursor-pointer
        left-0
        top-1/2
        -translate-y-1/2
        w-fit
        not-italic
        font-mono
        text-3xl
        py-2
        rounded-ee-lg
        rounded-se-lg
        border-y
        border-r
        border-solid
        border-transparent
        z-[100]
        shadow-lg
        transform
        px-4
      `,
        !visibility && "-translate-x-[92%]",
        isAnimation &&
          `
          transition-[transform]
          duration-200
        `,
      )}
      onClick={() => {
        settingHooks.setOneFeild(timerVisibility, "value", !visibility);
      }}
      style={styles}
    >
      {date.get && (
        <EmptyComponent>
          <Time time={date.get.getHours()} />:
          <Time time={date.get.getMinutes()} />:
          <Time time={date.get.getSeconds()} />
        </EmptyComponent>
      )}
      {!date.get && <Text content="loading" />}
    </div>
  );
}
