import { SettingConfig } from "@/reducers/Settings/SettingConfig";
import { FeildGeneralProps } from "./Types";
import { JoinComponentBy } from "../Helpers/JoinComponentBy";
import { EmptyComponent } from "../Helpers/EmptyComponent";
import { Shortcut, tw, useCopyState } from "@/functions/react-utils";
import { useColorMerge } from "@/data/system/colors.model";
import { Focus } from "../Helpers/Focus";
type PinFeildProps = FeildGeneralProps<number | undefined, SettingConfig["pin"]>;
export function PinFeild({ id, config }: PinFeildProps) {
  const colorMerge = useColorMerge();
  const list = (config?.match || ".").split("-");
  const cursor = useCopyState<string | null>(null);
  return (
    <Focus onKeyDown={() => {}} focusId={id} className="flex items-center gap-2 rounded-lg w-fit" ignoreOutline>
      <JoinComponentBy
        list={list.map((num, i) => {
          const s = num.split("");
          const l = s.length;
          return (
            <div className="flex">
              <JoinComponentBy
                key={i}
                list={s.map((_, j) => {
                  return (
                    <div
                      className={tw(
                        `
                          w-[40px]
                          h-[40px]
                          border-solid
                          border-transparent
                          text-lg
                          text-center
                          border-y
                          border-r
                        `,
                        j == 0 && `rounded-ss-lg rounded-es-lg border-l`,
                        j + 1 == l && `rounded-se-lg rounded-ee-lg`,
                      )}
                      style={{
                        ...colorMerge(
                          {
                            borderColor: "borders",
                          },
                          cursor.get === `${i}-${j}` && {
                            borderColor: "primary",
                          },
                        ),
                      }}
                      onKeyDown={(e) => {
                        const s = new Shortcut("backspace");
                        if (s.test(e)) {
                          e.preventDefault();
                        }
                      }}
                      key={j}
                    />
                  );
                })}
                joinComponent={<EmptyComponent />}
              />
            </div>
          );
        })}
        joinComponent={<EmptyComponent>-</EmptyComponent>}
      />
    </Focus>
  );
}
