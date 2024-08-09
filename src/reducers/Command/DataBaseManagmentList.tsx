import React from "react";
import { useColorMerge } from "@/data/system/colors.model";
import { FastList } from "main/src/Components/Performnce";
import { feildHooks } from "@/data/system/feild.model";
import { include } from "utils/index";
import { execCommand } from "@/data/system/command.model";
import { setFocused, tw, useCopyState } from "main/src/functions/react-utils";
import { getSlotData, slotHooks } from "@/data/system/slot.slice";
import { Icon, Tip } from "main/src/Components/Helpers/Buttons";
import { getTemp, setTemp } from "../Object/object.slice";
import { KeyPanding } from "main/src/Components/Helpers/KeyPanding";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Text } from "main/src/Components/Text";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { MarkDown } from "main/src/Components/Helpers/MarkDown";
//
export interface CommandLine {
  id: string;
  content?: string;
  keyPanding?: string | string[];
  tools?: { onClick: () => void; icon?: IconProp }[];
  checked?: boolean;
  sub?: string;
}
export interface DataBaseManagmentListProps {
  data: Record<
    string,
    {
      onSubmit?: (line: CommandLine) => void;
      lines?: CommandLine[];
    }
  >;
}
export function DataBaseManagmentList({ data }: DataBaseManagmentListProps) {
  // desc:
  const searchCommandType = getTemp<string>("commandId");
  // desc:
  const findValue = feildHooks.getOneFeild("findCommand", "value");
  //
  const info = React.useMemo(() => {
    if (!searchCommandType) {
      return;
    }
    return data[searchCommandType];
  }, [searchCommandType]);
  const fullList = React.useMemo(() => {
    return info?.lines || [];
  }, [info]);
  // desc:
  const filterdList = React.useMemo(() => {
    return fullList.filter(({ content }) => include(content, findValue));
  }, [findValue, fullList]);
  //
  React.useEffect(() => {
    slotHooks.setOneFeild("cmds/list", "focused", fullList?.length ? 0 : null);
  }, [fullList]);
  //
  const submitedItem = getSlotData(filterdList, "cmds/list", "submited");
  //
  React.useEffect(() => {
    if (!submitedItem) {
      return;
    }
    execCommand("commands.close");
    feildHooks.setOneFeild("findCommand", "value", "");
    info?.onSubmit?.(submitedItem);
    slotHooks.setOneFeild("cmds/list", "submited", null);
  }, [submitedItem, info]);
  const colorMerge = useColorMerge();
  return (
    <div
      className="relative py-1 h-[50vh]"
      onClick={(e) => {
        e.currentTarget.contains(e.target as HTMLElement) && setFocused("findCommand");
      }}
    >
      {!filterdList.length && (
        <div
          style={{
            ...colorMerge({
              color: "gray.opacity.2",
            }),
          }}
          className="top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2"
        >
          <Text content="no result" />
        </div>
      )}
      <FastList
        data={filterdList}
        itemSize={30}
        focusId="cmds/list"
        slotId="cmds/list"
        countLastItems={-1}
        component={({ data, status, handel, style }) => {
          const hover = useCopyState(false);

          const elementRef = React.createRef<HTMLSpanElement>();

          // desc:
          return (
            <div
              onMouseEnter={() => {
                hover.set(true);
              }}
              onMouseLeave={() => {
                hover.set(false);
              }}
              style={{
                ...style,
                ...colorMerge(hover.get && "gray.opacity", status.isFocused && "secondry", status.isFocused && { color: "secondry.content" }),
              }}
              onClick={(e) => {
                !elementRef.current?.contains(e.target as HTMLElement) && handel.submit();
              }}
              className={tw(`
                flex
                border
                cursor-pointer
                border-transparent
                border-solid
                items-center
                justify-between
                mx-2
                px-3
                py-1
                rounded-md
              `)}
            >
              <div className="flex justify-between items-center gap-2 truncate">
                {data.checked && <Icon icon={faCheck} />}
                <span>{data.content}</span>
                {data.sub && (
                  <div
                    className="inline-block mt-2 text-[10px]"
                    style={{
                      ...colorMerge({
                        color: "gray.opacity.2",
                      }),
                    }}
                  >
                    <MarkDown value={data.sub} />
                  </div>
                )}
              </div>
              <span className="inline-flex tools">
                {data.keyPanding && <KeyPanding shortcut={data.keyPanding} />}
                <span ref={elementRef}>
                  {(hover.get || status.isFocused) &&
                    data.tools?.map(({ icon, onClick }, index) => (
                      <Tip
                        key={index}
                        icon={icon}
                        onClick={async () => {
                          const res = onClick?.() as any;
                          setFocused("findCommand");
                          if (res instanceof Promise) {
                            setTemp("commands.isLoading", true);
                            try {
                              await res;
                            } catch {}
                            setTemp("commands.isLoading", false);
                          }
                        }}
                      />
                    ))}
                </span>
              </span>
            </div>
          );
        }}
      />
    </div>
  );
}