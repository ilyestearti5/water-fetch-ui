import { getSettingValue, useColorMerge, useCopyState } from "@/hooks";
import { faFileUpload, faXmark, faXmarksLines } from "@fortawesome/free-solid-svg-icons";
import { FeildGeneralProps } from "@/types/global";
import { SettingConfig, SettingValueType } from "@/reducers/Settings/SettingConfig";
import { Anchor } from "./Anchor";
import { Tip } from "./Tip";
import { openPath } from "@/functions/app/web/web-utils";
import { Text } from "./Text";
import { tw } from "@/utils";
export type FileFeildProps = FeildGeneralProps<SettingValueType["file"], SettingConfig["file"]>;
export function FileFeild({ state, config = {}, id }: FileFeildProps) {
  const colorMerge = useColorMerge();
  const hover = useCopyState(false);
  const isAnimation = getSettingValue("preferences/animation.boolean");
  return (
    <div
      className={tw("relative border border-solid border-transparent flex items-center gap-1 w-full px-3 py-1 rounded-md", isAnimation && "transition-[background-color] duration-200")}
      onMouseEnter={() => hover.set(true)}
      onMouseLeave={() => hover.set(false)}
      style={{
        ...colorMerge("gray.opacity", hover.get && "gray.opacity.2", {
          borderColor: "borders",
        }),
      }}
    >
      <div className="relative flex flex-wrap gap-1 w-full">
        {state.get?.map((href, index) => {
          return (
            <span
              className="inline-flex justify-between items-center px-2 py-1 rounded-md"
              style={{
                ...colorMerge("gray.opacity"),
              }}
              key={index}
            >
              <Anchor href={href} className="max-w-[50px] truncate">
                {href}
              </Anchor>
              <Tip
                onClick={() => {
                  state.set(state.get?.filter((file) => file != href) || null);
                }}
                icon={faXmark}
              />
            </span>
          );
        })}
        {!state.get?.length && (
          <span className="capitalize">
            <Text content="no files choised" />
          </span>
        )}
      </div>
      <div className="flex items-center gap-x-1 tools">
        {config.nullable && (
          <Tip
            onClick={() => {
              state.set(null);
            }}
            icon={faXmarksLines}
          />
        )}
        <Tip
          id={`${id}:select`}
          icon={faFileUpload}
          onClick={async () => {
            const data = await openPath(config);
            state.set((prev) => {
              if (prev) {
                return [...new Set([...prev, ...data])];
              } else {
                return data;
              }
            });
          }}
        />
      </div>
    </div>
  );
}
