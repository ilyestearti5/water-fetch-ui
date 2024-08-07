import React from "react";
import { tw, useCopyState } from "@/functions/react-utils";
import { Tip } from "@/Components/Helpers/Buttons";
import { faCamera, faFileUpload, faXmark } from "@fortawesome/free-solid-svg-icons";
import { handelShadowColor, useColorMerge } from "models/system/colors.model";
import { Image } from "@/Components/Helpers/Image";
import { getSettingValue } from "@/reducers/Settings/settings.model";
import { openCamera } from "@/functions/app-utils";
import { showToast } from "@/data/system/toasts.model";
import { webApi } from "@/functions/app/web";
export type ImageParam = {
  dataURL?: string;
};
export interface ImageChoiserProps {
  onChange?: (input: ImageParam | null) => void;
  alt?: any;
  src?: ImageParam["dataURL"];
}
export function ImageChoiser({ onChange, alt, src }: ImageChoiserProps) {
  const colorMerge = useColorMerge();
  const isAnimation = getSettingValue("preferences/animation.boolean");
  const hoverState = useCopyState(false);
  const callback = React.useCallback(
    async (dataURL: string | null) => {
      if (!onChange) {
        return;
      }
      if (!dataURL) {
        return onChange(null);
      }
      try {
        onChange({
          dataURL,
        });
      } catch {
        onChange(null);
      }
    },
    [onChange],
  );
  return (
    <Image
      onMouseEnter={() => {
        hoverState.set(true);
      }}
      onMouseLeave={() => {
        hoverState.set(false);
      }}
      className="mb-1 border border-transparent border-solid rounded-2xl text-center text-xl italic"
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
      alt={alt}
      src={src}
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
                const { response } = await webApi.openDialog({
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
                const { response } = await webApi.openDialog({
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
                const { response } = await webApi.openDialog({
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
                onChange?.({
                  dataURL: result,
                });
              } catch (e: any) {
                showToast(e, "error");
              }
            }}
            icon={faCamera}
          />
        </div>
      </div>
    </Image>
  );
}
