import { getTemp, setTemp } from "@/reducers/Object/object.slice";
import { Delay } from "utils/index";
import { setFocused } from "@/functions/react-utils";
import { useCopyState } from "@/functions/react-utils";
import { settingHooks, getSettingValue } from "@/reducers/Settings/settings.model";
import { Tip } from "@/Components/Helpers/Buttons";
import { execAction, useAction } from "models/system/actions.model";
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Feild as FeildProps, feildHooks } from "models/system/feild.model";
import { useColorMerge } from "models/system/colors.model";
import { Feild } from "Components/Feilds/Feild";
export interface UpdateDataProps {
  inputName: string;
  visibilityId: `${string}.boolean`;
  tempDirection: string;
  focusAction: string;
  escapeAction: string;
  defaultContent: string;
  controls?: FeildProps["controls"];
  placeholder?: string;
}
export function UpdateData({ inputName, defaultContent, escapeAction, focusAction, tempDirection, visibilityId, controls, placeholder }: UpdateDataProps) {
  const updateInputContent = getSettingValue(visibilityId);
  //
  const name = getTemp<string>(tempDirection);
  const error = useCopyState(false);
  //
  useAction(
    focusAction,
    async () => {
      settingHooks.setOneFeild(visibilityId, "value", true);
      feildHooks.setOneFeild(inputName, "value", name || "");
      await new Delay().start(100);
      setFocused(inputName);
      (document.getElementById(inputName) as HTMLInputElement | null)?.select();
    },
    [name],
  );
  const inputContent = feildHooks.getOneFeild(inputName, "value");
  useAction(
    escapeAction,
    () => {
      if (inputContent == undefined) {
        return;
      }
      const allMatched = Object.keys(controls || {}).every((key) => {
        try {
          const exp = new RegExp(key);
          return !!inputContent.match(exp);
        } catch {
          return true;
        }
      });
      if (!allMatched) {
        setFocused(inputName);
        return;
      }
      settingHooks.setOneFeild(visibilityId, "value", false);
      setTemp(tempDirection, inputContent);
    },
    [inputContent, controls],
  );
  const colorMerge = useColorMerge();
  return (
    <div className="p-2 group">
      <div className="flex items-center gap-1">
        <span hidden={!!updateInputContent}>{name || defaultContent}</span>
        <Feild
          placeholder={placeholder}
          controls={controls}
          className="p-1"
          inputName={inputName}
          hidden={!updateInputContent}
          onBlur={() => {
            execAction(escapeAction, { save: true });
          }}
          style={{
            ...colorMerge(error.get && { borderColor: "error" }),
          }}
          onKeyDown={(e) => {
            e.key = e.key.toLowerCase();
            if (["enter", "tab"].includes(e.key)) {
              e.stopPropagation();
              e.preventDefault();
              e.currentTarget.blur();
            }
          }}
        />
        <Tip
          className="group-hover:visible invisible"
          icon={updateInputContent ? faXmark : faPen}
          onPointerDown={() => {
            if (!updateInputContent) {
              execAction(focusAction);
            } else {
              execAction(escapeAction);
            }
          }}
        />
      </div>
    </div>
  );
}
