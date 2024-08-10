import { delay } from "@/utils/index";
import { tw } from "@/utils";
import { useCopyState } from "@/hooks";
import { Feild, feildHooks, getPrevious } from "@/data/system/feild.model";
import React from "react";
import { useColorMerge } from "@/data/system/colors.model";
import { State } from "@/types/global";
interface UseInputHookProps {
  attributes?: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
  extends?: string;
}
export function useInput({
  extends: ext, // extends value from main redux store
  attributes: { value: _v = "", ref: _r, onChange, onFocus, onBlur, "aria-multiline": ariaMultiLine = false, onKeyDown, className, ...props } = {},
}: UseInputHookProps) {
  type ValueType = State<Feild["value"] | undefined>;
  type CursorType = State<Feild["selection"] | undefined>;
  let value: ValueType;
  let cursor: CursorType;
  const focused = useCopyState(false);
  let cursorValue: string | undefined = "";
  if (ext) {
    value = feildHooks.useOneFeild(ext, "value");
    cursor = feildHooks.useOneFeild(ext, "selection");
    cursorValue = getPrevious(value.get, cursor.get);
  } else {
    value = useCopyState<ValueType["get"]>(String(_v));
    cursor = useCopyState<CursorType["get"]>({
      start: 0,
      end: 0,
      direction: "forward",
    });
    cursorValue = React.useMemo(() => value.get?.slice(0, cursor.get?.end), [value.get, cursor.get]);
  }
  // focus element when focused is true else blur
  React.useEffect(() => {
    if (!ariaMultiLine && value.get?.includes("\n")) {
      value.set(value.get?.replaceAll("\n", ""));
    }
  }, [value.get]);
  // input Ref
  const inputRef = React.createRef<HTMLTextAreaElement>();
  // make value of input not can be undefined
  const v = React.useMemo(() => value.get || "", [value.get]);
  // merging colors
  const colorMerge = useColorMerge();
  // render Input Element
  const InputElement = (
    <div className="relative flex items-center w-full">
      <textarea
        id={ext}
        ref={inputRef}
        rows={v.split("\n").length || 1}
        {...props}
        className={tw(
          `
            p-2
            border
            border-solid
            border-transparent
            font-[inherit]
            resize-none
            whitespace-nowrap
            rounded-sm
            w-full
            text-xs
          `,
          className,
        )}
        onFocus={(e) => {
          focused.set(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          focused.set(false);
          onBlur?.(e);
        }}
        onChange={(e) => {
          value.set(e.target.value);
          onChange?.(e);
        }}
        onKeyDown={async (e) => {
          onKeyDown?.(e);
          await delay(200);
          const { selectionStart: start, selectionEnd: end, selectionDirection: direction } = e.target as HTMLTextAreaElement;
          cursor.set({
            start,
            end,
            direction: direction == "forward" ? "forward" : "backward",
          });
        }}
        value={v}
        style={{
          ...colorMerge({
            borderColor: focused.get ? "primary" : "borders",
            backgroundColor: "feild.background",
          }),
          ...props.style,
        }}
      />
    </div>
  );
  // return sum configurations
  return {
    InputElement,
    value,
    focused,
    inputRef,
    cursorValue,
    cursor,
  };
}
interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  onValueChange?: (value: string) => any;
}
export function Input({ onValueChange, ...props }: InputProps) {
  const { InputElement, value } = useInput({
    attributes: {
      ...props,
    },
  });
  React.useEffect(() => {
    props.value && onValueChange?.(String(props.value));
  }, [props.value]);
  React.useEffect(() => {
    onValueChange?.(value.get || "");
  }, [value.get]);
  return InputElement;
}
