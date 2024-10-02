// main React package
import React from "react";
// Tip for add tips in Array file
// configure keypanding
import { setFocused, Shortcut, tw } from "@/utils";
// use slot function for configure slot
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FeildGeneralProps } from "@/types/global";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
import { useColorMerge } from "@/hooks";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { keyHooks } from "@/data/system/keys.model";
import { Translate } from "./Translate";
import { useCopyState } from "@/hooks";
import { Button } from "@/components/Button";
import { Tip } from "@/components/Tip";
import { Input } from "./Input";
export type ArrayFeildProps = FeildGeneralProps<string[] | undefined, SettingConfig["array"]>;
// term of use is when you have state contain array and you want to update the state from
export function ArrayFeild({ state, id }: ArrayFeildProps) {
  // full input element for append new items in array field
  const inputValue = useCopyState("");
  // transform the array to unqiue data (ilyes,ilyes,aymen,akrem) => (ilyes,aymen,akrem)
  const uniqueData = React.useMemo(() => Array.from(new Set(state.get)), [state.get]);
  const colorMerge = useColorMerge();
  const add = React.useCallback(() => {
    if (uniqueData.includes(inputValue.get) || inputValue.get === "") {
      return;
    }
    state.set([...uniqueData, inputValue.get]);
    inputValue.set("");
    setFocused(id);
  }, [inputValue.get, uniqueData, inputValue.set, state.set]);
  // render ArrayFeild element component
  return (
    <div className="array-field">
      <div className="items">
        {uniqueData.map((item, index) => {
          return (
            <div
              key={index}
              className={tw(`
                group
                flex
                items-center
                gap-1
                px-2 py-1
                border
                border-solid
                duration-200
                rounded-sm
              `)}
              style={{
                ...colorMerge("gray.opacity", {
                  borderColor: "borders",
                }),
              }}
            >
              <span>{item}</span>
              <span className="flex items-center">
                <Tip
                  className="opacity-0 group-hover:opacity-100 transition-[opacity] duration-200"
                  onClick={async () => {
                    await navigator.clipboard.writeText(item);
                  }}
                  icon={faCopy}
                />
                <Tip
                  className="opacity-0 group-hover:opacity-100 transition-[opacity] duration-200"
                  onClick={() => {
                    uniqueData.splice(index, 1);
                    state.set(uniqueData);
                  }}
                  icon={faXmark}
                />
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-2">
        <div className="w-full">
          <Input
            value={inputValue.get}
            placeholder="write item..."
            id={id}
            onKeyDown={(e) => {
              const shortcut = new Shortcut("enter");
              if (!shortcut.test(e)) {
                return;
              }
              add();
            }}
            spellCheck={false}
            onValueChange={inputValue.set}
          />
        </div>
        {inputValue.get && (
          <Button onClick={add} className="w-fit">
            <Translate content="add" />
          </Button>
        )}
      </div>
    </div>
  );
}
