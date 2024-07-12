import { BlurOverlay } from "./Helpers/Overlays";
import { Button, Tip } from "./Helpers/Buttons";
import { SeparatedViewsLine } from "./Helpers/SimpleComponents";
import { EmptyComponent } from "./Helpers/EmptyComponent";
import { useColorMerge } from "@/data/system/colors.model";
import { faChevronDown, faChevronUp, faInfoCircle, faWarning } from "@fortawesome/free-solid-svg-icons";
import { useAsyncEffect, useCopyState } from "@/functions/react-utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { Image } from "./Helpers/Image";
import { BooleanFeild } from "./Feilds/BooleanFeild";
import { dialogTemps } from "@/reducers/Object/allTemps";
import { List } from "@/hooks/list.hooks";
import { Focus } from "./Helpers/Focus";
import React from "react";
import { slotHooks } from "@/data/system/slot.slice";
import { useAction } from "@/data/system/actions.model";
import { DialogProps } from "@/functions/app/types";
import dialogOpenSrc from "assets/audios/dialog-open.wav";
import { MarkDown } from "./Helpers/MarkDown";
import { Scroll } from "./Helpers/Scroll";
export const DialogBox = () => {
  const config = dialogTemps.getTemp<DialogProps>("params");
  const confirmId = dialogTemps.getTemp<string>("id");
  const colorMerge = useColorMerge();
  const showMore = useCopyState(false);
  const checked = dialogTemps.useTemp<boolean>("checked");
  React.useEffect(() => {
    if (typeof config?.checkboxChecked == "boolean") {
      checked.set(config.checkboxChecked);
    }
  }, [config]);
  React.useEffect(() => {
    slotHooks.setOneFeild("dialog-list", "submited", null);
  }, [confirmId]);
  React.useEffect(() => {
    slotHooks.setOneFeild("dialog-list", "focused", config?.defaultId || 0);
  }, [config]);
  useAction(
    "dialog.cancel",
    () => {
      if (typeof config?.cancelId == "number") {
        slotHooks.setOneFeild("dialog-list", "submited", config.cancelId);
      }
    },
    [config],
  );

  const srcPlay = React.useMemo(() => {
    if (!confirmId) {
      return null;
    }
    return dialogOpenSrc;
  }, [confirmId, config]);

  useAsyncEffect(async () => {
    if (!srcPlay) {
      return;
    }
    const audio = document.createElement("audio");
    audio.src = srcPlay;
    await audio.play();
  }, [confirmId, config]);

  return (
    <BlurOverlay hidden={!confirmId}>
      <SeparatedViewsLine
        className="lg:w-1/2 max-lg:w-2/3"
        list={[
          config?.title && (
            <div className="p-2">
              <h1 className="text-2xl">{config?.title}</h1>
            </div>
          ),
          config && (
            <div className="flex gap-5 p-2">
              {!config.icon && (
                <EmptyComponent>
                  {config.type == "question" && <FontAwesomeIcon icon={faQuestionCircle} className="text-4xl" />}
                  {config.type == "info" && (
                    <FontAwesomeIcon
                      style={{
                        ...colorMerge({
                          color: "notifay.info",
                        }),
                      }}
                      icon={faInfoCircle}
                      className="text-4xl"
                    />
                  )}
                  {config.type == "warning" && (
                    <FontAwesomeIcon
                      style={{
                        ...colorMerge({
                          color: "notifay.warning",
                        }),
                      }}
                      icon={faWarning}
                      className="text-4xl"
                    />
                  )}
                </EmptyComponent>
              )}
              {typeof config.icon == "string" && <Image src={config.icon} />}
              <div className="inline-flex items-center w-full">
                <span>{config.message}</span>
                {config.detail && (
                  <Tip
                    className="ml-2"
                    onClick={() => {
                      showMore.set(!showMore.get);
                    }}
                    icon={showMore.get ? faChevronUp : faChevronDown}
                  />
                )}
              </div>
            </div>
          ),
          showMore.get && config?.detail && (
            <Scroll className="p-2 h-[30vh] overflow-y-auto">
              <MarkDown value={config.detail} />
            </Scroll>
          ),
          config && (
            <Focus focusId="dialog-list-focusable" className="flex justify-between items-center p-2">
              <div>
                {config.checkboxLabel && (
                  <BooleanFeild
                    id="check"
                    state={checked}
                    config={{
                      style: "checkbox",
                      onActive: `${config.checkboxLabel}`,
                      onDisactive: `${config.checkboxLabel}`,
                    }}
                  />
                )}
              </div>
              {config.buttons && (
                <div className="flex gap-1">
                  <List
                    slotId="dialog-list"
                    data={config.buttons}
                    component={({ item: button, index, status, handelSubmit, handelFocus }) => {
                      return (
                        <Button
                          className="px-4"
                          key={index}
                          style={{
                            ...colorMerge(
                              index != config.defaultId && "gray.opacity",
                              index != config.defaultId && { color: "text.color" },
                              status.isFocused && {
                                outlineColor: "primary",
                              },
                              status.isSubmited && {
                                backgroundColor: "primary",
                                color: "primary.content",
                              },
                            ),
                          }}
                          onPointerDown={handelFocus()}
                          onClick={handelSubmit()}
                        >
                          {button}
                        </Button>
                      );
                    }}
                  ></List>
                </div>
              )}
            </Focus>
          ),
        ]}
      />
    </BlurOverlay>
  );
};
