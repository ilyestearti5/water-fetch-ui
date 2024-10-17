import React from "react";
import { useColorMerge, useSettingValue, useCopyState, openCamera, showToast } from "@/hooks";
import { mergeObject, tw } from "@/utils";
import { Tip } from "../Tip";
import { SettingConfig, SettingValueType } from "@/reducers/Settings/SettingConfig";
import { openDialog } from "@/functions/app/web/web-utils";
import { Image } from "../Image";
import { FeildGeneralProps } from "@/types/global";
import { faXmark, faFileUpload, faCamera } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../Icon";
import { allIcons } from "@/apis";
import { EmptyComponent } from "../EmptyComponent";
import { BlurOverlay } from "../Overlays";
import { Tab } from "../Tab";
import { Card } from "../Card";
import { Line } from "../Line";
import { Button } from "../Button";
import { Translate } from "../Translate";
import { CircleTip } from "../CircleTip";
type ImageFeildProps = FeildGeneralProps<SettingValueType["image"], SettingConfig["image"]>;
// term of use is when you have state contain array and you want to update the state from
export function ImageFeild({ state, config }: ImageFeildProps) {
  // render ArrayFeild element component
  const colorMerge = useColorMerge();
  const isAnimation = useSettingValue("preferences/animation.boolean");
  const clicked = useCopyState(false);
  const src = state.get;
  const callback = React.useCallback(
    async (dataURL: string | null) => {
      if (!state.set) {
        return;
      }
      state.set(dataURL);
      clicked.set(false);
    },
    [state.set],
  );

  const elementRef = React.createRef<HTMLDivElement>();
  return (
    <div className="flex justify-center">
      <div className="relative">
        <div
          onClick={() => {
            clicked.set(true);
          }}
          className={tw("cursor-pointer overflow-hidden border border-transparent border-solid rounded-2xl text-center text-xl italic", config?.rounded && "rounded-full")}
          style={{
            ...colorMerge("gray.opacity", {
              borderColor: "borders",
            }),
            ...mergeObject(
              {
                width: 100,
                height: 100,
              },
              config?.size && {
                width: config.size,
                height: config.size,
              },
            ),
          }}
        >
          {src && (
            <EmptyComponent>
              <img src={src} className="w-full h-full object-cover" />
            </EmptyComponent>
          )}
          {!src && (
            <div className="flex flex-col justify-center items-center gap-1 w-full h-full">
              <Icon icon={allIcons.solid.faCamera} />
              {config?.alt && <span className="w-1/2 text-xs truncate">{config.alt}</span>}
            </div>
          )}
        </div>
      </div>
      <div
        ref={elementRef}
        className={tw("top-1/2 left-1/2 z-[100000000000000000] fixed transform -translate-x-1/2 -translate-y-1/2 scale-0", isAnimation && "transition-transform", clicked.get && "scale-100")}
      >
        <Card className="w-fit">
          <div className="flex justify-between items-center p-3">
            <h1 className="text-xl">
              <Translate content="Upload Image" />
            </h1>
            <span>
              <CircleTip
                icon={allIcons.solid.faXmark}
                onClick={() => {
                  clicked.set(false);
                }}
              />
            </span>
          </div>
          <Line />
          <div className="flex gap-3 p-3">
            {src && (
              <Tab
                className="w-[80px] h-[80px]"
                iconClassName="w-[40px] h-[40px]"
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
                icon={faXmark}
              />
            )}
            <Tab
              className="w-[80px] h-[80px]"
              iconClassName="w-[40px] h-[40px]"
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
              icon={faFileUpload}
            />
            <Tab
              className="w-[80px] h-[80px]"
              iconClassName="w-[40px] h-[40px]"
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
                  callback(result);
                } catch (e: any) {
                  showToast(e, "error");
                }
              }}
              icon={faCamera}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
