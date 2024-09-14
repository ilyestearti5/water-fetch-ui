import React from "react";
import { KeyPanding } from "@/components/KeyPanding";
import { useColorMerge } from "@/hooks";
import { Delay } from "@/utils/index";
import { setFocused } from "@/utils";
import { tw } from "@/utils";
import { fieldHooks, useShortcutsOfCommand, useCopyState, usePublicCommandsFilter } from "@/hooks";
import { getModifier } from "@/reducers/Global/keyboard.slice";
import { FastList } from "@/components/FastList";
import { Tip } from "@/components/Tip";
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import { setTemp } from "@/reducers/Object/object.slice";
import { useAction } from "@/data/system/actions.model";
import { slotHooks } from "@/data/system/slot.slice";
import { keyHooks } from "@/data/system/keys.model";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
export function KeyboardShortcuts() {
  const filtredCommands = usePublicCommandsFilter();
  const focused = slotHooks.getOneFeild("keyboardShortcuts", "focused");
  useAction(
    "keyboard/update",
    () => {
      if (focused == null) {
        return;
      }
      const command = filtredCommands[focused];
      if (!command) {
        return;
      }
      slotHooks.setOneFeild("keyboardShortcuts", "submited", focused);
      setTemp("keyboard.commandId", command.commandId);
      setFocused("edit-keyPanding");
    },
    [focused, filtredCommands],
  );
  return (
    <FastList
      itemSize={30}
      countLastItems={1}
      focusId="keyboardShortcuts"
      slotId="keyboardShortcuts"
      data={filtredCommands}
      overflow={{
        top: 3,
        bottom: 3,
      }}
      component={({ data: command, index, status, handel, style }) => {
        const { commandId, label = "" } = command;
        const keys = useShortcutsOfCommand(commandId);
        const ref = React.createRef<HTMLDivElement>();
        const colorMerge = useColorMerge();
        const isControl = getModifier("Control");
        const hover = useCopyState(false);
        const onlyKeys = React.useMemo(() => {
          return keys.filter(({ value }) => value!).map(({ value }) => value!);
        }, [keys]);
        return (
          <div
            onMouseEnter={() => hover.set(true)}
            onMouseLeave={() => hover.set(false)}
            onClick={() => {
              handel.focus();
              handel.submit();
            }}
            ref={ref}
            className="px-3 text-xs group row"
            style={{
              ...colorMerge(
                index % 2 && "primary.background",
                hover.get && "gray.opacity",
                status.isFocused && { borderColor: "primary" },
                status.isSubmited && {
                  backgroundColor: "secondry",
                  color: "secondry.content",
                },
              ),
              ...style,
            }}
          >
            <div
              className={tw(`
                w-[150px]
                flex
                justify-end
                px-2
              `)}
            >
              {(hover.get || status.isFocused || status.isSubmited) && (
                <div className="flex justify-between items-center">
                  <Tip
                    onClick={async () => {
                      const content = JSON.stringify(command);
                      await navigator.clipboard.writeText(content);
                    }}
                    icon={faCopy}
                  />
                  <Tip
                    icon={faPen}
                    onClick={(_e) => {
                      setTemp("keyboard.commandId", commandId);
                      setFocused("edit-keyPanding");
                    }}
                  />
                  {!!keys.length && (
                    <Tip
                      tabIndex={-1}
                      icon={faXmark}
                      onClick={() => {
                        keyHooks.remove(keys.map(({ keyId }) => keyId!));
                      }}
                    />
                  )}
                </div>
              )}
            </div>
            <div
              className={tw(`capitalize col`, isControl && "hover:underline cursor-pointer")}
              onPointerDown={async () => {
                if (isControl) {
                  fieldHooks.setOneFeild("findConfigurations", "value", `@commandId: ${commandId}`);
                  const dl = new Delay();
                  await dl.start(100);
                  setFocused("findConfigurations");
                }
              }}
            >
              {label || commandId}
            </div>
            <div className={tw("col justify-end truncate")}>
              <KeyPanding shortcut={onlyKeys} />
            </div>
          </div>
        );
      }}
    />
  );
}
