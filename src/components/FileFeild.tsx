import React from "react";
import { useColorMerge } from "@/data/system/colors.model";
import { faFileUpload, faXmarksLines } from "@fortawesome/free-solid-svg-icons";
import { FeildGeneralProps } from "@/types/global";
import { SettingConfig, SettingValueType } from "@/reducers/Settings/SettingConfig";
import { Anchor } from "./Anchor";
import { Tip } from "./Tip";
export type FileFeildProps = FeildGeneralProps<SettingValueType["file"], SettingConfig["file"]>;
export function FileFeild({ state, config = {}, id }: FileFeildProps) {
  const colorMerge = useColorMerge();
  const isDirectory = config.properties?.includes("openDirectory");
  const isFile = config.properties?.includes("openFile");
  React.useEffect(() => {
    try {
      if (!state.get) {
        return;
      }
      state.set(null);
    } catch {}
  }, [state.get, isFile, isDirectory]);
  return (
    <div className="relative flex items-center gap-1 w-full">
      <div className="relative w-full">
        <span
          className="inline-block px-2 py-1 rounded-md"
          style={{
            ...colorMerge("gray.opacity"),
          }}
        >
          <Anchor href={state.get ?? undefined}>{state.get || "no provided"}</Anchor>
        </span>
      </div>
      <div className="flex items-center gap-x-1 tools">
        {config.nullable && (
          <Tip
            onClick={() => {
              state.set(null);
            }}
            icon={faXmarksLines}
          />
        )}
        <Tip
          id={`${id}:select`}
          icon={faFileUpload}
          onClick={async () => {
            const s: string[] = [];
            if (isFile) {
              s.push("file");
            }
            if (isDirectory) {
              s.push("dirctory");
            }
          }}
        />
      </div>
    </div>
  );
}
