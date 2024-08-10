import { Tip } from "@/components/Tip";
import { Line } from "@/components/Line";
import { TitleView } from "@/components/Title";
import { handelShadowColor, useColorMerge } from "@/data/system/colors.model";
import { feildHooks, initNewFeilds } from "@/data/system/feild.model";
import { mergeObject, tw } from "@/utils";
import { getModifier } from "@/reducers/Global/keyboard.slice";
import { settingHooks } from "@/reducers/Settings/settings.model";
import { ReactElement, position } from "@/types/global";
import { faAngleDown, faGripVertical } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useCopyState, useEffectDelay } from "@/hooks";
export interface KeyboardButtonProps extends ReactElement<HTMLSpanElement> {
  isActive?: boolean;
}
export const KeyboardButton = ({ isActive, className, ...props }: KeyboardButtonProps) => {
  const colorMerge = useColorMerge();
  return (
    <span
      className={tw(`w-[35px] h-[35px] gap-2 rounded-md inline-flex items-center justify-center border border-solid border-transparent`, className)}
      style={{
        ...colorMerge(
          "secondry.background",
          {
            borderColor: "borders",
          },
          isActive && "primary",
          isActive && {
            color: "primary.content",
          },
          {
            boxShadow: handelShadowColor([
              {
                colorId: "shadow.color",
                y: 4,
                x: 0,
                blur: 10,
                size: 4,
              },
            ]),
          },
        ),
      }}
      {...props}
    />
  );
};
export const dataKeyboard = [
  [
    { normal: "1", shift: "&", alt: "!" },
    { normal: "2", shift: "é", alt: "~" },
    { normal: "3", alt: "#", shift: '"' },
    { normal: "4", alt: "{", shift: "'" },
    { normal: "5", alt: "[", shift: "(" },
    { normal: "6", alt: "|", shift: "-" },
    { normal: "7", alt: "`", shift: "è" },
    { normal: "8", alt: "\\", shift: "_" },
    { normal: "9", alt: "^", shift: "ç" },
    { normal: "9", alt: "@", shift: "0" },
  ],
  [
    { normal: "a", shift: "A", alt: "à" },
    { normal: "z", shift: "Z", alt: "æ" },
    { normal: "e", shift: "E", alt: "€" },
    { normal: "r", shift: "R", alt: "®" },
    { normal: "t", shift: "T", alt: "™" },
    { normal: "y", shift: "Y", alt: "¥" },
    { normal: "u", shift: "U", alt: "µ" },
    { normal: "i", shift: "I", alt: "°" },
    { normal: "o", shift: "O", alt: "ø" },
    { normal: "p", shift: "P", alt: "þ" },
  ],
  [
    { normal: "q", shift: "Q", alt: "œ" },
    { normal: "s", shift: "S", alt: "ß" },
    { normal: "d", shift: "D", alt: "ð" },
    { normal: "f", shift: "F", alt: "đ" },
    { normal: "g", shift: "G", alt: "ħ" },
    { normal: "h", shift: "H", alt: "." },
    { normal: "j", shift: "J", alt: "*" },
    { normal: "k", shift: "K", alt: "-" },
    { normal: "l", shift: "L", alt: "/" },
    { normal: "m", shift: "M", alt: "+" },
  ],
  [
    { normal: "w", shift: "W", alt: "=" },
    { normal: "x", shift: "X", alt: ")" },
    { normal: "c", shift: "C", alt: "]" },
    { normal: "v", shift: "V", alt: "}" },
    { normal: "b", shift: "B", alt: ";" },
    { normal: "n", shift: "N", alt: "," },
  ],
];
const duration = 200;
export const KeyboardView = () => {
  const colorMerge = useColorMerge();
  const shiftKey = useCopyState(false);
  const controlKey = useCopyState(false);
  const altKey = useCopyState(false);
  const shiftGlobalState = getModifier("Shift");
  const forceShiftGlobalState = useCopyState(false);
  const controlGlobalState = getModifier("Control");
  const altGlobalState = getModifier("AltGraph");
  React.useEffect(() => {
    controlKey.set(controlGlobalState);
  }, [controlGlobalState]);
  React.useEffect(() => {
    shiftKey.set(shiftGlobalState);
  }, [shiftGlobalState]);
  React.useEffect(() => {
    altKey.set(altGlobalState);
  }, [altGlobalState]);
  const clickedPosition = useCopyState<position>([-100, -100]);
  const startAnimation = useCopyState(false);
  useEffectDelay(
    () => {
      startAnimation.get && startAnimation.set(false);
    },
    [startAnimation.get],
    duration,
  );
  initNewFeilds(["keyboard-view"]);
  const value = feildHooks.useOneFeild("keyboard-view", "value");
  const position = useCopyState<position>([0, innerHeight - 300]);
  return (
    <div
      className="z-[100000000000000000000000000000] fixed flex flex-col border border-transparent border-solid rounded-xl w-1/2 max-md:w-2/3 h-[300px] overflow-hidden"
      style={{
        ...colorMerge("primary.background", {
          borderColor: "borders",
          boxShadow: handelShadowColor([
            {
              colorId: "shadow.color",
              y: 4,
              x: 0,
              blur: 10,
              size: 4,
            },
          ]),
        }),
        ...mergeObject(
          position.get && {
            left: `${position.get[0]}px`,
            top: `${position.get[1]}px`,
          },
        ),
      }}
    >
      <div className="flex justify-between p-2">
        <div>
          <Tip
            onPointerDown={() => {
              const mouseMoveCall = (e: MouseEvent) => {
                position.set([e.pageX, e.pageY]);
              };
              document.addEventListener("mousemove", mouseMoveCall);
              const callback = () => {
                document.removeEventListener("pointerup", callback);
                document.removeEventListener("mousemove", mouseMoveCall);
              };
              document.addEventListener("pointerup", callback);
            }}
            icon={faGripVertical}
            className="cursor-grab"
          />
        </div>
        <div className="propositions">
          {value.get ? (
            <pre
              className="px-2 py-1 border border-transparent border-solid rounded-md font-[inherit]"
              style={{
                ...colorMerge("secondry.background", {
                  borderColor: "borders",
                }),
              }}
            >
              {value.get}
            </pre>
          ) : (
            <div className="px-2 py-1">
              <span>Empty Value</span>
            </div>
          )}
        </div>
        <TitleView
          title="close view"
          position={{
            x: "left",
          }}
        >
          <Tip
            onClick={() => {
              settingHooks.setOneFeild("window/mode.enum", "value", "desktop");
            }}
            icon={faAngleDown}
          />
        </TitleView>
      </div>
      <Line />
      <div className="flex justify-center items-stretch h-full overflow-hidden">
        <div className="flex flex-col flex-1 justify-center items-center gap-1 p-2 w-[200px] h-full overflow-hidden">
          {[
            {
              name: "shift",
              state: shiftKey,
            },
            {
              name: "alt gr",
              state: altKey,
            },
            {
              name: "control",
              state: controlKey,
            },
          ].map(({ state, name }, i) => {
            return (
              <KeyboardButton
                key={i}
                isActive={state.get}
                className="w-full max-lg:w-full"
                onPointerDown={() => {
                  state.set((s) => !s);
                }}
              >
                {name}
              </KeyboardButton>
            );
          })}
        </div>
        <div
          className="relative flex flex-col justify-between gap-3 border-x p-2 border-transparent border-solid h-full overflow-hidden"
          style={{
            ...colorMerge({
              borderColor: "borders",
            }),
          }}
          onClick={(e) => {
            const x = e.pageX;
            const y = e.pageY;
            const { left, top } = e.currentTarget.getBoundingClientRect();
            clickedPosition.set([x - left, y - top]);
            startAnimation.set(true);
          }}
        >
          {clickedPosition.get && (
            <span
              className={tw(
                `opacity-0 blur-xl transition-[opacity] duration-[${duration}] absolute pointer-events-none inline-block w-[100px] h-[100px] transform -translate-x-1/2 -translate-y-1/2 rounded-full`,
                startAnimation.get && "opacity-100",
              )}
              style={{
                ...colorMerge("gray.opacity"),
                ...mergeObject(
                  clickedPosition.get && {
                    left: `${clickedPosition.get[0]}px`,
                    top: `${clickedPosition.get[1]}px`,
                  },
                ),
              }}
            />
          )}
          <div className="flex flex-col gap-3">
            {dataKeyboard.map((list, i) => {
              return (
                <div className="flex justify-center gap-3" key={i}>
                  {list.map((c, j) => {
                    return (
                      <KeyboardButton
                        onPointerDown={() => {
                          const v = shiftKey.get ? c.shift : altKey.get ? c.alt : c.normal;
                          // v && value.set((string) => string?.concat(v) || v);
                          // !forceShiftGlobalState.get && shiftKey.get && shiftKey.set(false);
                          const element = document.activeElement;
                          if (element && (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement)) {
                            element.value = element.value.concat(v);
                          }
                        }}
                        className="relative"
                        key={j}
                      >
                        {shiftKey.get ? c.shift : altKey.get ? c.alt : c.normal}
                        {!shiftKey.get && (
                          <span
                            className="right-1 bottom-1 absolute text-xs"
                            style={{
                              ...colorMerge({ color: "gray.opacity.2" }),
                            }}
                          >
                            {altKey.get ? c.normal : c.alt}
                          </span>
                        )}
                      </KeyboardButton>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <KeyboardButton
            className="w-full max-lg:w-full"
            onPointerDown={() => {
              value.set((s) => s + " ");
              !forceShiftGlobalState.get && shiftKey.get && shiftKey.set(false);
            }}
            children={"space"}
          />
        </div>
        <div className="flex flex-col flex-1 justify-center items-center gap-1 p-2 w-[200px] h-full overflow-hidden">
          {[
            {
              name: "backspace",
              onClick() {
                value.set((s) => s?.slice(0, -1));
              },
            },
            {
              name: "clean",
              onClick() {
                value.set("");
              },
            },
          ].map(({ onClick, name }, i) => {
            return (
              <KeyboardButton
                key={i}
                className="w-full max-lg:w-full"
                onPointerDown={() => {
                  onClick?.();
                }}
              >
                {name}
              </KeyboardButton>
            );
          })}
        </div>
      </div>
    </div>
  );
};
