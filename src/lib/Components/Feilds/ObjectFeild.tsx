import { List } from "@/hooks/list.hooks";
import React from "react";
import { Button, Tip } from "@/Components/Helpers/Buttons";
import { useInput } from "hooks/input.hooks";
import { Shortcut } from "@/functions/react-utils";
import { tw } from "@/functions/react-utils";
import { useCopyState } from "@/functions/react-utils";
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useColorMerge } from "models/system/colors.model";
import { FeildGeneralProps } from "./Types";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
import { execAction, useAction } from "@/data/system/actions.model";
import { Focus } from "../Helpers/Focus";
import { getSlotData } from "@/data/system/slot.slice";
export const objectIfPrefix = (id: string) => {
  return `object_${id}`;
};
export type ObjectFeildProps = FeildGeneralProps<Record<string, string> | undefined, SettingConfig["object"]>;
// render object feild element
export function ObjectFeild({ state, id }: ObjectFeildProps) {
  const addItem = useCopyState(false);
  // array of data
  const tableData = React.useMemo(() => {
    const data = Object.entries(state.get || {});
    return data;
  }, [state.get]);
  const submitPanding = React.useMemo(() => new Shortcut("enter"), []);
  const escapePanding = React.useMemo(() => new Shortcut("escape"), []);
  const {
    InputElement: NewKeyInput,
    inputRef: keyRef,
    value: key,
  } = useInput({
    attributes: {
      placeholder: "write key..",
      className: "p-1",
      onKeyDown(e) {
        if (submitPanding.test(e as any)) {
          valueRef.current?.focus();
        }
      },
    },
  });
  const newId = React.useMemo(() => objectIfPrefix(id), [id]);
  const elementFocused = getSlotData(tableData, newId, "focused");
  const {
    InputElement: NewValueInput,
    inputRef: valueRef,
    value,
  } = useInput({
    attributes: {
      className: "p-1",
      onKeyDown(e) {
        if (submitPanding.test(e as any)) {
          state.set((s) => {
            return {
              ...s,
              [key.get!]: value.get!,
            };
          });
          key.set("");
          value.set("");
          addItem.set(false);
        }
      },
      placeholder: "value ...",
    },
  });
  React.useEffect(() => {
    addItem.get && keyRef.current?.focus();
  }, [addItem.get]);
  useAction(
    "object.deleteProp",
    (props: { key: string; slotId: string }) => {
      if (newId == props.slotId) {
        state.set((prev) => {
          if (!prev?.[props.key]) {
            return prev;
          }
          const { [props.key]: _, ...reset } = prev;
          return reset;
        });
      }
    },
    [tableData, newId],
  );
  return (
    <div>
      <Focus className="rounded-md" ignoreOutline={!elementFocused}>
        <List
          component={({ handelFocus, handelSubmit, index, item: [key, value], status }) => {
            const hover = useCopyState(false);
            const { InputElement: UpdateKeyInput, inputRef: keyUpdateRef } = useInput({
              attributes: {
                value: key,
                className: "p-0",
              },
            });
            const {
              InputElement: UpdateValueInput,
              inputRef: valueUpdateRef,
              value: valueUpdated,
            } = useInput({
              attributes: {
                value,
                onKeyDown(e) {
                  if (submitPanding.test(e as any)) {
                    state.set((s) => {
                      const shadowCopy = { ...s };
                      shadowCopy[key] = valueUpdated.get!;
                      return shadowCopy;
                    });
                    update.set(null);
                  } else if (escapePanding.test(e as any)) {
                    update.set(null);
                  }
                },
                onBlur() {
                  update.set(null);
                },
                className: "p-0",
              },
            });
            const update = useCopyState<"key" | "value" | null>(null);
            React.useEffect(() => {
              if (update.get == "key") {
                keyUpdateRef.current?.focus();
                keyUpdateRef.current?.select();
              } else if (update.get == "value") {
                valueUpdateRef.current?.focus();
                valueUpdateRef.current?.select();
              }
            }, [update.get]);
            const colorMerge = useColorMerge();
            return (
              <div
                onMouseEnter={(_e) => hover.set(true)}
                onMouseLeave={(_e) => hover.set(false)}
                onClick={handelSubmit()}
                onPointerDown={handelFocus()}
                className={tw("row rounded-md")}
                style={{
                  ...colorMerge(
                    index % 2 ? "primary.background" : "secondry.background",
                    status.isFocused && {
                      borderColor: "primary",
                    },
                    status.isSubmited && "primary",
                    status.isSubmited && {
                      color: "primary.content",
                    },
                  ),
                }}
              >
                <div>
                  <div
                    onMouseEnter={(_e) => hover.set(true)}
                    onMouseLeave={(_e) => hover.set(false)}
                    className={tw("w-[100px] flex gap-1 items-center justify-end px-2 invisible", (hover.get || status.isFocused || status.isSubmited) && "visible")}
                  >
                    <Tip
                      icon={faXmark}
                      onClick={() => {
                        execAction("object.deleteProp", {
                          key,
                          slotId: objectIfPrefix(id),
                        });
                      }}
                    />
                    <Tip
                      icon={faPen}
                      onClick={() => {
                        update.set("value");
                      }}
                    />
                  </div>
                </div>
                {update.get == "key" ? (
                  UpdateKeyInput
                ) : (
                  <div className="w-full truncate" onDoubleClick={() => {}}>
                    {key}
                  </div>
                )}
                {update.get == "value" ? (
                  UpdateValueInput
                ) : (
                  <div
                    className="w-full truncate"
                    onDoubleClick={() => {
                      update.set("value");
                    }}
                  >
                    {value}
                  </div>
                )}
              </div>
            );
          }}
          data={tableData}
          slotId={objectIfPrefix(id)}
        />
        {addItem.get && (
          <div className="flex items-stretch w-full">
            <div>
              <div className="w-[100px]"></div>
            </div>
            {NewKeyInput}
            {NewValueInput}
          </div>
        )}
      </Focus>
      <div className="flex justify-end p-1">
        <Button
          id={id}
          className="px-3 py-1 rounded-md capitalize"
          onClick={() => {
            if (addItem.get) {
            } else {
              addItem.set(true);
            }
          }}
        >
          {addItem.get ? "ok" : "add"}
        </Button>
      </div>
    </div>
  );
}
