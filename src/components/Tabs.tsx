import { useColorMerge, handelShadowColor, useSettingValue } from "@/hooks";
import { Button } from "./Button";
import { IconProps } from "./Icon";
import { JoinComponentBy } from "./JoinComponentBy";
import { State } from "@/types/global";
import { EmptyComponent } from "./EmptyComponent";
import React from "react";
import { tw } from "@/utils";
export interface TabsProps {
  state: State<string>;
  tabs: { label: string; value: string; icon: IconProps["icon"] }[];
}
export const Tabs = ({ state, tabs }: TabsProps) => {
  const colorMerge = useColorMerge();
  const index = React.useMemo(() => {
    return tabs.map(({ value }) => value).indexOf(state.get);
  }, [state.get, tabs]);
  const animation = useSettingValue("preferences/animation.boolean");
  return (
    <div
      className="flex items-stretch gap-2 p-2 border border-transparent border-solid rounded-2xl w-full overflow-hidden"
      style={{
        ...colorMerge("secondary.background", {
          borderColor: "borders",
          boxShadow: handelShadowColor([
            {
              blur: 5,
              size: 0,
              colorId: "shadow.color",
              x: 0,
              y: 4,
            },
          ]),
        }),
      }}
    >
      <JoinComponentBy
        list={tabs.map(({ label, icon, value }) => {
          const isActive = state.get == value;
          return (
            <Button
              className={tw("rounded-xl px-7 py-4", isActive && "font-bold", animation && "transition-all duration-300")}
              style={{
                ...colorMerge(
                  !isActive && "transparent",
                  !isActive && {
                    color: "text.color",
                  },
                ),
              }}
              key={value}
              icon={icon}
              onClick={() => {
                state.set(value);
              }}
            >
              {label}
            </Button>
          );
        })}
        joinComponent={<EmptyComponent />}
      />
    </div>
  );
};
