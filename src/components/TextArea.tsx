import React from "react";
import { Shortcut, tw } from "@/utils";
import { useColorMerge } from "@/data/system/colors.model";
import { KeyPanding } from "@/components/KeyPanding";
import { getKeys } from "@/data/system/keys.model";
import { Db } from "main/src/functions/classes";
import { setTemp } from "@/reducers/Object/object.slice";
import { useAction } from "@/data/system/actions.model";
import { randomItem } from "@/utils/index";
import { EmptyComponent } from "./EmptyComponent";
import { useCopyState } from "@/hooks";
export interface TextAreaProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  propositions?: string[];
  selection?: {
    direction: HTMLTextAreaElement["selectionDirection"];
    end: HTMLTextAreaElement["selectionEnd"];
    start: HTMLTextAreaElement["selectionStart"];
  };
  onSelectionChange?: (selection?: TextAreaProps["selection"]) => void;
  onValueChange?: (value: string) => any;
  tabSize?: number;
  supportTab?: boolean;
  multiLines?: boolean;
  acceptKeys?: string[];
  pattern?: string | RegExp;
}
/*
 ******************************************************************************************************************************************************
 *                                                                                                                                                    *
 *                                                                                                                                                    *
 *                                                                                                                                                    *
 *                                                                                                                                                    *
 *                                                                                                                                                    *
 *                                                                                                                                                    *
 *                                                                                                                                                    *
 *                                                                                                                                                    *
 *                                                                                                                                                    *
 *                                                                                                                                                    *
 *                                                                                                                                                    *
 *                                                                                                                                                    *
 ******************************************************************************************************************************************************
 */
export function TextArea({
  className,
  multiLines = false,
  onChange,
  onKeyDown,
  onSelect,
  onSelectionChange,
  onValueChange,
  onFocus,
  onBlur,
  propositions,
  selection,
  style,
  tabSize = 4,
  supportTab = false,
  hidden,
  acceptKeys,
  pattern,
  ...props
}: TextAreaProps) {
  const elementRef = React.createRef<HTMLTextAreaElement>(),
    allKeys = getKeys(),
    autoCompleteInput = React.useMemo(() => {
      return Db.join({ commandId: "input.completeWord" }, allKeys, "commandId->command");
    }, [allKeys]),
    colorMerge = useColorMerge(),
    ref = React.createRef<HTMLDivElement>(),
    scroll = useCopyState(0),
    lastWord = React.useMemo(() => {
      return props.value?.toString().match(/[^ ]*$/gi)?.[0];
    }, [props.value]),
    proposition = React.useMemo(() => {
      const result = propositions?.filter((word) => lastWord && word.length != lastWord?.length && word.startsWith(lastWord)) || [];
      return randomItem(result).value;
    }, [propositions, lastWord]),
    focused = useCopyState(false);
  /*
   ******************************************************************************************************************************************************
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   ******************************************************************************************************************************************************
   */
  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = scroll.get;
    }
  }, [scroll.get]);
  React.useEffect(() => {
    return () => {
      setTemp("input.focusedHasProposition", false);
      setTemp("input.supportTab", false);
      focused.set(false);
    };
  }, []);
  React.useEffect(() => {
    if (!elementRef.current || !selection) {
      return;
    }
    elementRef.current.setSelectionRange(selection.start, selection.end, selection.direction);
  }, [elementRef.current, selection]);
  const handelSelectionChange = React.useCallback((e: React.SyntheticEvent<HTMLTextAreaElement, Event>) => {
    onSelectionChange?.({
      start: e.currentTarget.selectionStart,
      end: e.currentTarget.selectionEnd,
      direction: e.currentTarget.selectionDirection,
    });
  }, []);
  React.useEffect(() => {
    setTemp("input.focusedHasProposition", Boolean(focused.get && proposition));
  }, [focused.get, proposition]);
  React.useEffect(() => {
    setTemp("input.supportTab", focused.get && supportTab);
  }, [supportTab, focused.get]);
  /*
   ******************************************************************************************************************************************************
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   ******************************************************************************************************************************************************
   */
  useAction(
    "input.tab",
    () => {
      if (!focused.get) return;
      const element = elementRef.current;
      if (!element) return;
      const { selectionStart, selectionEnd, value } = element;
      const start = selectionStart;
      const end = selectionEnd;
      const before = value.slice(0, selectionStart);
      const after = value.slice(selectionEnd);
      const tab = " ".repeat(tabSize);
      element.value = before + tab + after;
      element.setSelectionRange(start + tabSize, end + tabSize, "forward");
      onValueChange?.(element.value);
      onSelectionChange?.({
        start: element.selectionStart,
        end: element.selectionEnd,
        direction: element.selectionDirection,
      });
    },
    [elementRef, focused.get, onSelectionChange, onValueChange],
  );
  useAction(
    "input.completeWord",
    () => {
      if (!focused.get) return;
      if (elementRef.current) {
        elementRef.current.value = elementRef.current.value.replace(/[^ ]+$/gi, "") + proposition + " ";
        onValueChange?.(elementRef.current.value);
      }
    },
    [elementRef, focused.get, proposition, onValueChange],
  );
  useAction(
    "input.selectLine",
    () => {
      if (!focused.get) return;
      if (!elementRef.current) {
        return;
      }
      const element = elementRef.current;
      const { selectionStart, selectionEnd, value } = element;
      const before = value.slice(0, selectionStart);
      const after = value.slice(selectionEnd);
      const lineStart = before.lastIndexOf("\n") + 1;
      let lineEnd = after.indexOf("\n");
      if (lineEnd === -1) {
        lineEnd = after.length;
      }
      element.setSelectionRange(lineStart, selectionEnd + lineEnd, "forward");
      onSelectionChange?.({
        start: element.selectionStart,
        end: element.selectionEnd,
        direction: element.selectionDirection,
      });
    },
    [elementRef, focused.get, onSelectionChange],
  );
  useAction(
    "input.addLineBellow",
    () => {
      if (!focused.get) return;
      const element = elementRef.current;
      if (!element) return;
      const { selectionStart, selectionEnd, value } = element;
      const before = value.slice(0, selectionStart);
      const after = value.slice(selectionEnd);
      const lineStart = before.lastIndexOf("\n") + 1;
      let lineEnd = after.indexOf("\n");
      if (lineEnd === -1) {
        lineEnd = after.length;
      }
      const line = value.slice(lineStart, selectionEnd + lineEnd);
      element.value = before + "\n" + line + after;
      element.setSelectionRange(selectionStart + line.length + 1, selectionEnd + line.length + 1, "forward");
      onValueChange?.(element.value);
      onSelectionChange?.({
        start: element.selectionStart,
        end: element.selectionEnd,
        direction: element.selectionDirection,
      });
    },
    [elementRef, focused.get, onSelectionChange, onValueChange],
  );
  return (
    <div className="relative flex w-full h-full" hidden={hidden}>
      <textarea
        onScroll={(e) => {
          scroll.set(e.currentTarget.scrollTop);
        }}
        {...props}
        onFocus={(e) => {
          focused.set(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          focused.set(false);
          onBlur?.(e);
        }}
        style={{
          ...style,
          ...colorMerge({
            caretColor: "text.color",
          }),
          color: "transparent",
        }}
        className={tw(className, `font-[inherit] selection:text-transparent selection:bg-transparent`)}
        spellCheck={false}
        onSelect={(e) => {
          handelSelectionChange(e);
          onSelect?.(e);
        }}
        ref={elementRef}
        onKeyDown={(e) => {
          if (!multiLines && e.key == "Enter") {
            e.preventDefault();
          }
          const shortcut = Shortcut.fromEvent(e);
          if (acceptKeys && acceptKeys.some((string) => new RegExp(string, "igm").test(shortcut))) {
            e.preventDefault();
          }
          onKeyDown?.(e);
        }}
        onChange={(e) => {
          onChange?.(e);
          onValueChange?.(e.currentTarget.value);
        }}
      />
      <div ref={ref} className={tw(className, `absolute inset-0 pointer-events-none overflow-y-auto overflow-x-hidden`)}>
        <pre
          className="font-[inherit] text-wrap"
          style={{
            ...colorMerge({
              color: "text.color",
            }),
          }}
        >
          <span>{props.value?.toString().slice(0, selection?.start)}</span>
          {selection && (
            <span
              className="rounded-sm"
              style={{
                ...colorMerge("bg.selection", {
                  color: "text.selection",
                }),
              }}
            >
              {props.value?.toString().slice(selection?.start, selection?.end)}
            </span>
          )}
          {selection && <span>{props.value?.toString().slice(selection.end)}</span>}
          {typeof lastWord == "string" && proposition && (
            <EmptyComponent>
              <span
                style={{
                  ...colorMerge({
                    color: "autoCompleteInput",
                  }),
                }}
              >
                {proposition.replace(lastWord, "")}
              </span>
              {Boolean(autoCompleteInput.length) && <KeyPanding shortcut={autoCompleteInput.map(({ value }) => value!)} />}
            </EmptyComponent>
          )}
        </pre>
      </div>
    </div>
  );
}
