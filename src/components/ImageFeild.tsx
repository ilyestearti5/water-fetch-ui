import React from "react";
import { FeildGeneralProps } from "@/types/global";
import { SettingConfig, SettingValueType } from "@/reducers/Settings/SettingConfig";
import { openDialog } from "@/functions/app/web/web-utils";
import { useColorMerge, useSettingValue, useCopyState, handelShadowColor, openCamera, showToast } from "@/hooks";
import { tw } from "@/utils";
import { faXmark, faFileUpload, faCamera } from "@fortawesome/free-solid-svg-icons";
import { Tip } from "./Tip";
import { Image } from "./Image";
type ImageFeildProps = FeildGeneralProps<SettingValueType["image"], SettingConfig["image"]>;
// term of use is when you have state contain array and you want to update the state from
export function ImageFeild({ state, config }: ImageFeildProps) {
  // render ArrayFeild element component
  const colorMerge = useColorMerge();
  const isAnimation = useSettingValue("preferences/animation.boolean");
  const hoverState = useCopyState(false);
  const src = state.get;
  const callback = React.useCallback(
    async (dataURL: string | null) => {
      if (!state.set) {
        return;
      }
      if (!dataURL) {
        return state.set(null);
      }
      try {
        state.set(dataURL);
      } catch {
        state.set(null);
      }
    },
    [state.set],
  );
  return (
    <div className="flex justify-center">
      <Image
        onMouseEnter={() => {
          hoverState.set(true);
        }}
        onMouseLeave={() => {
          hoverState.set(false);
        }}
        className={tw("mb-1 border border-transparent border-solid rounded-2xl text-center text-xl italic", config?.rounded && "rounded-full")}
        style={{
          ...colorMerge({
            borderColor: "borders",
            boxShadow: handelShadowColor([
              {
                colorId: "shadow.color",
                blur: 26,
                size: 1,
                x: 0,
                y: 2,
              },
            ]),
          }),
        }}
        alt={config?.alt}
        src={src ?? undefined}
      >
        <div
          className={tw(
            `
            flex
            opacity-100
            absolute
            left-1/2
            transform
            -translate-x-1/2
            bottom-0
            items-center
          `,
          )}
        >
          <div
            className={tw(
              `
            inline-flex
            items-center
            rounded-ss-xl
            rounded-se-xl
            p-1
            text-xs
            border-solid
            border-t
            border-x            
            border-transparent
          `,
              !hoverState.get && `translate-y-full pointer-events-none`,
              isAnimation && `transition-transform`,
            )}
            style={{
              ...colorMerge("secondry.background", {
                borderColor: "borders",
              }),
            }}
          >
            {src && (
              <Tip
                onClick={async () => {
                  const { response } = await openDialog({
                    message: "do you want to recenlty this image",
                    title: "confirmation",
                    type: "warning",
                    buttons: ["no", "yes"],
                    defaultId: 1,
                  });
                  if (response) {
                    callback(null);
                  }
                }}
                style={{
                  ...colorMerge({
                    color: "error",
                  }),
                }}
                icon={faXmark}
              />
            )}
            <Tip
              onClick={async () => {
                if (src) {
                  const { response } = await openDialog({
                    message: "do you want to recenlty this image",
                    title: "confirmation",
                    type: "warning",
                    buttons: ["no", "yes"],
                    defaultId: 1,
                  });
                  if (!response) {
                    return;
                  }
                }
                const fileElement = document.createElement("input");
                fileElement.type = "file";
                fileElement.accept = "image/*";
                fileElement.onchange = async () => {
                  if (fileElement.files?.length) {
                    const file = fileElement.files[0];
                    const reader = new FileReader();
                    reader.onload = () => {
                      callback(reader.result?.toString() || null);
                    };
                    reader.readAsDataURL(file);
                  }
                };
                fileElement.click();
              }}
              style={{
                ...colorMerge(
                  src && {
                    color: "notifay.warning",
                  },
                  !src && {
                    color: "primary",
                  },
                ),
              }}
              icon={faFileUpload}
            />
            <Tip
              style={{
                ...colorMerge(
                  src && {
                    color: "notifay.warning",
                  },
                  !src && {
                    color: "primary",
                  },
                ),
              }}
              onClick={async () => {
                if (src) {
                  const { response } = await openDialog({
                    message: "do you want to recenlty this image",
                    title: "confirmation",
                    type: "warning",
                    buttons: ["no", "yes"],
                    defaultId: 1,
                  });
                  if (!response) {
                    return;
                  }
                }
                try {
                  const result = await openCamera("take");
                  state.set?.(result);
                } catch (e: any) {
                  showToast(e, "error");
                }
              }}
              icon={faCamera}
            />
          </div>
        </div>
      </Image>
    </div>
  );
}
