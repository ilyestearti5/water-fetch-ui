import { commandsHooks } from "models/system/command.model";
import React from "react";
import { useColorMerge } from "models/system/colors.model";
import { isLike, transformCase } from "utils/index";
import { setFocused } from "@/functions/react-utils";
import { Shortcut } from "@/functions/react-utils";
import { tw } from "@/functions/react-utils";
import { useCopyState } from "@/functions/react-utils";
import { getTemp, setTemp } from "@/reducers/Object/object.slice";
import { BlurOverlay } from "Components/Helpers/Overlays";
import { KeyPanding } from "Components/Helpers/KeyPanding";
import { Anchor, Tip } from "@/Components/Helpers/Buttons";
import { Line } from "Components/Helpers/Line";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPen, faRepeat, faXmark } from "@fortawesome/free-solid-svg-icons";
import { JoinComponentBy } from "@/Components/Helpers/JoinComponentBy";
import { Key, keyHooks } from "models/system/keys.model";
import { Db } from "@/functions/classes";
import { nanoid } from "@reduxjs/toolkit";
import { faCopy, faHandPointDown, faHandPointUp } from "@fortawesome/free-regular-svg-icons";
import { Input } from "@/hooks/input.hooks";
import { TitleView } from "@/Components/Helpers/Title";
import { Text } from "@/Components/Text";
const direction = {
  commandId: "keyboard.commandId",
  position: "keyboard.editingPosition",
};
const feildUpdateWhen = "key.changeWhen";
interface KeyboardTitleProps {
  commandId: string;
}
const KeyboardTitle = React.memo(({ commandId }: KeyboardTitleProps) => {
  return (
    <JoinComponentBy
      joinComponent={<FontAwesomeIcon icon={faArrowRight} />}
      list={commandId.split(".").map((id, index) => (
        <span key={index} className="font-bold text-xl capitalize">
          {transformCase(id, "camel", "normal")}
        </span>
      ))}
    />
  );
}, isLike);
interface KeyPandingLineProps {
  keyPanding: Key;
}
const KeyPandingLine = ({ keyPanding }: KeyPandingLineProps) => {
  const { when, value, keyId } = keyPanding;
  const state = useCopyState(false);
  const whenState = useCopyState("");
  const colorMerge = useColorMerge();
  const hover = useCopyState(false);
  React.useEffect(() => {
    if (state.get) {
      setFocused(feildUpdateWhen);
    }
  }, [state.get]);
  //
  return (
    <div
      onMouseEnter={() => hover.set(true)}
      onMouseLeave={() => hover.set(false)}
      className={tw(`
        flex
        group
        items-center
        justify-center
        gap-x-1
        cursor-pointer
        w-full
        px-2
        group
        relative
      `)}
      style={{
        ...colorMerge(hover.get && "gray.opacity"),
      }}
    >
      <div>
        <div className="flex justify-end w-[150px]">
          <div
            className={tw(`
              tools
              flex
              items-center
              gap-1
              invisible
              group-hover:visible
              border-r
              border-solid
              border-transparent
            `)}
            style={{
              ...colorMerge({
                borderColor: "borders",
              }),
            }}
          >
            <TitleView title={"remove this keypanding"}>
              <Tip
                onClick={() => {
                  keyHooks.remove([keyId!]);
                  setFocused("edit-keyPanding");
                }}
                icon={faXmark}
              />
            </TitleView>
            <TitleView title="copy when value">
              <Tip
                icon={faCopy}
                onClick={async () => {
                  when && (await navigator.clipboard.writeText(when));
                }}
              />
            </TitleView>
            <TitleView title={"edit when"}>
              <Tip
                onClick={() => {
                  state.set(true);
                  when && whenState.set(when);
                }}
                icon={faPen}
              />
            </TitleView>
            <TitleView title={`change to ${keyPanding.repeation ? "unrepeated" : "repeated"} key pending`}>
              <Tip
                onClick={() => {
                  keyHooks.setOneFeild(keyId!, "repeation", !keyPanding.repeation);
                }}
                icon={keyPanding.repeation ? faRepeat : faArrowRight}
              />
            </TitleView>
            <TitleView title={keyPanding.type == "up" ? "switch to down press" : "switch to up press"}>
              <Tip
                onClick={() => {
                  keyPanding.keyId && keyHooks.setOneFeild(keyPanding.keyId, "type", keyPanding.type == "up" ? "down" : "up");
                }}
                icon={keyPanding.type == "up" ? faHandPointUp : faHandPointDown}
              />
            </TitleView>
          </div>
        </div>
      </div>
      <div className="px-2">{value && <KeyPanding shortcut={value} />}</div>
      <div className="text-xs col">
        {!state.get && (when || " - ")}
        {state.get && (
          <Input
            style={{
              backgroundColor: "transparent",
              borderColor: "0px",
            }}
            value={whenState.get}
            onValueChange={whenState.set}
            id={feildUpdateWhen}
            onFocus={(e) => {
              e.currentTarget.select();
            }}
            onKeyDown={(e) => {
              if (e.key.toLowerCase() != "enter") {
                return;
              }
              e.currentTarget.blur();
            }}
            onBlur={(e) => {
              keyHooks.setOneFeild(keyId!, "when", e.currentTarget.value);
              state.set(false);
            }}
            className="p-0"
            placeholder="when expression..."
          />
        )}
      </div>
    </div>
  );
};
export function UpdateKeyboardShortcut() {
  //
  const cmdId = getTemp<string>(direction.commandId);
  //
  const currentKeyPanding = useCopyState("");
  //
  const commands = commandsHooks.getAll();
  //
  const allCommands = commandsHooks.getEntity();
  //
  const cmd = React.useMemo(() => {
    if (!cmdId) {
      return null;
    }
    return allCommands[cmdId] || null;
  }, [allCommands, cmdId]);
  //
  const allKeys = keyHooks.getAll();
  //
  const filterdKeys = React.useMemo(() => {
    return allKeys.filter(({ value }) => value);
  }, [allKeys]);
  //
  const cmdKeys = React.useMemo(() => {
    if (!cmd) {
      return null;
    }
    return Db.join(cmd, allKeys, "commandId->command");
  }, [cmd, allKeys]);
  const commandsAndKeys = React.useMemo(() => {
    return commands.map((command) => {
      return {
        command,
        keys: Db.join(command, allKeys, "commandId->command"),
      };
    });
  }, [filterdKeys]);
  const commandsLike = React.useMemo(() => {
    return commandsAndKeys.filter(({ keys }) => keys.some(({ value }) => value == currentKeyPanding.get));
  }, [commandsAndKeys, currentKeyPanding]);
  // merge colorize
  const colorMerge = useColorMerge();
  // list unqiue of commands
  React.useEffect(() => {
    currentKeyPanding.set("");
  }, [cmd]);
  return (
    <BlurOverlay
      hidden={!cmd}
      onClick={(e) => {
        if (e.currentTarget != e.target) {
          return;
        }
        setTemp(direction.commandId, null);
        setTemp(direction.position, null);
      }}
      onLoadContent={() => {
        cmd && setFocused("edit-keyPanding");
      }}
    >
      <div
        style={{
          ...colorMerge("primary.background", {
            borderColor: "borders",
          }),
        }}
        className={tw(
          `
            rounded-lg
            border
            border-solid
            border-transparent
            min-w-[500px]
            w-[60vw]
          `,
        )}
        tabIndex={cmd ? 1 : -1}
        id="edit-keyPanding"
        onKeyDown={(e) => {
          if (e.currentTarget != e.target || !cmd) {
            return;
          }
          e.stopPropagation();
          e.preventDefault();
          e.key = e.key.toLowerCase();
          const metaPressed = [e.ctrlKey, e.altKey, e.shiftKey].filter(Boolean).length;
          if (!metaPressed && ["escape", "backspace"].includes(e.key)) {
            if (currentKeyPanding.get) {
              currentKeyPanding.set("");
              return;
            }
          } else if (!metaPressed && e.key == "enter") {
            if (currentKeyPanding.get) {
              keyHooks.add([
                {
                  command: cmd.commandId,
                  value: currentKeyPanding.get,
                  keyId: nanoid(),
                },
              ]);
              currentKeyPanding.set("");
              return;
            }
          }
          const short = Shortcut.fromEvent(e);
          currentKeyPanding.set(short);
        }}
      >
        <div className="relative flex justify-center items-center gap-3 p-2">
          {cmd?.commandId && <KeyboardTitle commandId={cmd.commandId} />}
          <Tip
            className={tw(`
              absolute
              right-2
              top-1/2
              transform
              -translate-y-1/2
            `)}
            onClick={async () => {
              setTemp(direction.commandId, null);
              setTemp(direction.position, null);
              setFocused("findConfigurations");
            }}
            icon={faXmark}
          />
        </div>
        <Line />
        <div className="flex flex-col flex-wrap items-center">
          {cmdKeys?.map((keyPanding, index) => <KeyPandingLine key={index} keyPanding={keyPanding} />)}
          {!cmdKeys?.length && <div className="py-2">no combinition defined</div>}
        </div>
        <Line />
        <div className="flex justify-center items-center p-2 text-4xl">
          <KeyPanding shortcut={currentKeyPanding.get} />
        </div>
        {Boolean(commandsLike.length) && (
          <div>
            <Line />
            <div className="flex justify-center p-2">
              <Anchor>
                <Text content="existe" /> ({commandsLike.length})
              </Anchor>
            </div>
          </div>
        )}
      </div>
    </BlurOverlay>
  );
}
