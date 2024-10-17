import { useSettingValue, useColorMerge, useCopyState, useIdleStatus, useAsyncEffect } from "@/hooks";
import { faXmark, faXmarksLines } from "@fortawesome/free-solid-svg-icons";
import { FeildGeneralProps } from "@/types/global";
import { SettingConfig, SettingValueType } from "@/reducers/Settings/SettingConfig";
import { Anchor } from "../Anchor";
import { Tip } from "../Tip";
import { openPath } from "@/functions/app/web/web-utils";
import { Translate } from "../Translate";
import { tw, delay } from "@/utils";
import { QueryStatus } from "react-query";
import { IconProps } from "../Icon";
import { allIcons } from "@/apis";
export type FileFeildProps = FeildGeneralProps<SettingValueType["file"], SettingConfig["file"]>;
export const iconsFileFeild: Record<QueryStatus | "ready", IconProps["icon"]> = {
  loading: allIcons.solid.faRotate,
  error: allIcons.solid.faXmark,
  success: allIcons.solid.faCheck,
  ready: allIcons.solid.faFileUpload,
  idle: undefined,
};
export function FileFeild({ state, config = {}, id }: FileFeildProps) {
  const colorMerge = useColorMerge();
  const hover = useCopyState(false);
  const isAnimation = useSettingValue("preferences/animation.boolean");
  const { status } = useIdleStatus(async () => {
    const data = await openPath(config);
    state.set((prev) => {
      if (prev) {
        return [...new Set([...prev, ...data])];
      } else {
        return data;
      }
    });
  }, [config]);

  useAsyncEffect(async () => {
    if (["success", "error"].includes(status.get)) {
      await delay(1000);
      status.set("ready");
    }
  }, [status.get]);

  return (
    <div
      className={tw("relative border border-solid border-transparent flex items-center gap-1 w-full p-2 rounded-md", isAnimation && "transition-[background-color] duration-200")}
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
                <Translate content="file" /> - ({index + 1})
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
            <Translate content="no files choised" />
          </span>
        )}
      </div>
      <div className="flex items-center gap-x-1">
        {config.nullable && (
          <Tip
            onClick={() => {
              state.set(null);
            }}
            icon={faXmarksLines}
          />
        )}
        <Tip
          onClick={async () => {
            if (status.get == "loading") {
              return;
            }
            status.set("idle");
          }}
          id={id}
          iconClassName={tw(status.get == "loading" && "animate-spin")}
          icon={iconsFileFeild[status.get]}
        />
      </div>
    </div>
  );
}
