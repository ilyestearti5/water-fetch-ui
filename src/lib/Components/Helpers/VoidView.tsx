import { tw } from "@/functions/react-utils";
import { useCopyState } from "@/functions/react-utils";
import { execCommand, commandsHooks } from "models/system/command.model";
import { getSettingValue } from "@/reducers/Settings/settings.model";
import { TextAnimation } from "@/Components/Animations/TextAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useColorMerge } from "models/system/colors.model";
import { getKeys } from "models/system/keys.model";
import { Db } from "@/functions/classes";
import { KeyPanding } from "./KeyPanding";
import { positionsHooks } from "@/data/system/positions.model";
interface VoidViewProps {
  title?: string;
  settingId: `${string}.array`;
  src?: string;
}
function ItemViewCommand({ commandId }: { commandId: string }) {
  const cmd = commandsHooks.getOne(commandId);
  const allKeys = getKeys();
  const keys = React.useMemo(() => {
    if (!cmd) {
      return [];
    }
    return Db.join(cmd, allKeys, "commandId->command").map(({ value }) => value!);
  }, [allKeys, cmd]);
  //
  const hover = useCopyState(false);
  const isAnimation = getSettingValue("preferences/animation.boolean");
  //
  const widthWindowPosition = positionsHooks.getOneFeild("window", "width") || 10;
  const colorMerge = useColorMerge();
  return (
    <div
      onClick={async () => {
        await execCommand(commandId as any);
      }}
      onMouseEnter={() => hover.set(true)}
      onMouseLeave={() => hover.set(false)}
      className={tw(`capitalize cursor-pointer rounded-lg p-2 flex items-center truncate max-lg:text-xs`)}
      style={{
        ...colorMerge(
          hover.get && {
            backgroundColor: "gray.opacity",
          },
        ),
      }}
    >
      <span className="inline-block w-[50px]">
        <FontAwesomeIcon icon={faChevronRight} className={tw(`w-0`, isAnimation && "transition-[width]", hover.get && "w-[40px]")} />
      </span>
      <div className={tw("flex justify-between items-center gap-2 w-full", widthWindowPosition <= 400 && "flex-col")}>
        <span>{cmd?.label || cmd?.commandId || `no command with id ${commandId}`}</span>
        <KeyPanding shortcut={keys} />
      </div>
    </div>
  );
}
export function VoidView({ src, title = "not found", settingId }: VoidViewProps) {
  const commandsIds = getSettingValue(settingId);
  const widthWindowPosition = positionsHooks.getOneFeild("window", "width") || 10;
  return (
    <div
      className={tw(`
        flex
        justify-center
        items-center
        flex-col
        h-full
        overflow-x-hidden
        overflow-y-auto
        gap-5
      `)}
    >
      {src && <img draggable={false} className={tw("opacity-50 w-fit max-h-[30vh] object-cover")} hidden={widthWindowPosition < 300} src={src} />}
      <h1 className="text-2xl text-center capitalize">
        <TextAnimation content={title.toLowerCase()} />
      </h1>
      <div className={tw(`h-1/3 flex flex-col max-h-[600px]`)}>{Boolean(commandsIds?.length) && commandsIds?.map((commandId) => <ItemViewCommand commandId={commandId} key={commandId} />)}</div>
    </div>
  );
}
