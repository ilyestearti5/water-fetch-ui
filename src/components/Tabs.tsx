import { useColorMerge, handelShadowColor } from "@/hooks";
import { Button } from "./Button";
import { IconProps } from "./Icon";
import { JoinComponentBy } from "./JoinComponentBy";
import { ReactElement, State } from "@/types/global";
import { EmptyComponent } from "./EmptyComponent";
import { mergeObject, tw } from "@/utils";
export interface TabsProps extends ReactElement {
  buttonClassName?: string;
  state: State<string>;
  tabs?: { label: string; value: string; icon?: IconProps["icon"] }[];
  hideLabelWhereSmalled?: boolean;
}
export const Tabs = ({ state, tabs = [], hideLabelWhereSmalled = true, buttonClassName, className, style, ...props }: TabsProps) => {
  const colorMerge = useColorMerge();
  // const index = React.useMemo(() => {
  //   return tabs.map(({ value }) => value).indexOf(state.get);
  // }, [state.get, tabs]);
  // const animation = useSettingValue("preferences/animation.boolean");
  return (
    <div
      className={tw("flex items-stretch gap-2 p-2 border border-transparent border-solid rounded-full overflow-hidden", className)}
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
        ...mergeObject(style),
      }}
      {...props}
    >
      <JoinComponentBy
        list={tabs.map(({ label, icon, value }) => {
          const isActive = state.get == value;
          return (
            <Button
              className={tw("rounded-full w-fit px-7 py-4", isActive && "font-bold", buttonClassName)}
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
              <span className={tw(hideLabelWhereSmalled && "max-sm:hidden")}>{label}</span>
            </Button>
          );
        })}
        joinComponent={<EmptyComponent />}
      />
    </div>
  );
};
