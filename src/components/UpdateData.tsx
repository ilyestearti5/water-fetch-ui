import { Delay } from "@/utils/index";
import { setFocused } from "@/utils";
import { useCopyState } from "@/hooks";
import { execAction, useAction } from "@/data/system/actions.model";
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Feild as FeildProps, fieldHooks } from "@/data/system/field.model";
import { useColorMerge } from "@/hooks";
import { Feild } from "./Fields/Field";
import { CircleTip } from "@/components/CircleTip";
export interface UpdateDataProps {
  inputName: string;
  visibility: boolean;
  setVisibility: (value: boolean) => void;
  value: string;
  setValue: (value: string) => void;
  defaultContent: string;
  controls?: FeildProps["controls"];
  placeholder?: string;
}
export function UpdateData({ inputName, defaultContent, value, setValue, visibility, setVisibility, controls, placeholder }: UpdateDataProps) {
  //
  const error = useCopyState(false);
  const focusAction = `focus-input-update-${inputName}`;
  const escapeAction = `escape-input-update-${inputName}`;
  //
  useAction(
    focusAction,
    async () => {
      setVisibility(true);
      fieldHooks.setOneFeild(inputName, "value", value || "");
      await new Delay().start(100);
      setFocused(inputName);
      (document.getElementById(inputName) as HTMLInputElement | null)?.select();
    },
    [value, setVisibility],
  );
  const inputContent = fieldHooks.getOneFeild(inputName, "value");
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
      setVisibility(false);
      setValue(inputContent);
    },
    [inputContent, controls],
  );
  const colorMerge = useColorMerge();
  return (
    <div className="p-2 group">
      <div className="flex items-center gap-1">
        <h1 className="truncate" hidden={!!visibility}>
          {value || defaultContent}
        </h1>
        {visibility && (
          <Feild
            placeholder={placeholder}
            controls={controls}
            className="p-1"
            inputName={inputName}
            onBlur={() => {
              execAction(escapeAction);
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
        )}
        <span>
          <CircleTip
            className="group-hover:visible invisible"
            icon={visibility ? faXmark : faPen}
            onPointerDown={() => {
              if (!visibility) {
                execAction(focusAction);
              } else {
                execAction(escapeAction);
              }
            }}
          />
        </span>
      </div>
    </div>
  );
}
