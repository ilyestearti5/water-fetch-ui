import "highlight.js/styles/xcode.css";
import { BooleanFeild } from "./Fields/BooleanField";
import { handelShadowColor, useColorMerge, useSettingValue } from "@/hooks";
import { Line } from "./Line";
import { nanoid } from "@reduxjs/toolkit";
import { tw } from "@/utils";
import { useCopyState } from "@/hooks";
import Component from "markdown-to-jsx";
import highlight from "highlight.js/lib/common";
import React from "react";
export interface MarkDownProps {
  value?: string;
}
export function MarkDown({ value = "" }: MarkDownProps) {
  const colorMerge = useColorMerge();
  // const isDark = useSettingValue("window/dark.boolean");
  return (
    <div>
      <Component
        options={{
          overrides: {
            hr() {
              return (
                <div className="my-2">
                  <Line />
                </div>
              );
            },
            h1(content) {
              return <h1 className="md:text-5xl max-md:text-4xl">{content?.children}</h1>;
            },
            h2(content) {
              return <h1 className="md:text-4xl max-md:text-3xl">{content?.children}</h1>;
            },
            h3(content) {
              return <h1 className="md:text-3xl max-md:text-2xl">{content?.children}</h1>;
            },
            h4(content) {
              return <h1 className="md:text-2xl max-md:text-xl">{content?.children}</h1>;
            },
            h5(content) {
              return <h1 className="md:text-xl max-md:text-lg">{content?.children}</h1>;
            },
            h6(content) {
              return <h1 className="md:text-lg max-md:text-md">{content?.children}</h1>;
            },
            code(content) {
              let __html: string = content.children;
              const isSpecified = content.className?.includes("lang-");
              if (isSpecified) {
                __html = highlight.highlightAuto(String(content.children)).value;
              }
              return (
                <div
                  className={tw("m-1 px-2 py-1 border border-transparent border-solid rounded-md leading-[26px]", !isSpecified && "inline-block")}
                  style={{
                    ...colorMerge("gray.opacity", {
                      borderColor: "borders",
                    }),
                  }}
                  dangerouslySetInnerHTML={{
                    __html,
                  }}
                />
              );
            },
            input(content) {
              const state = useCopyState<boolean | null>(content?.checked || false);
              if (content?.type === "checkbox") {
                return (
                  <BooleanFeild
                    id={nanoid()}
                    state={state}
                    config={{
                      style: "checkbox",
                    }}
                  />
                );
              }
              return <input {...content} />;
            },
            img(content) {
              return (
                <div className="flex justify-center">
                  <div
                    className="rounded-lg sahdow-lg w-fit overflow-hidden"
                    style={{
                      ...colorMerge({
                        boxShadow: handelShadowColor([
                          {
                            colorId: "shadow.color",
                          },
                        ]),
                      }),
                    }}
                  >
                    <img {...content} />
                  </div>
                </div>
              );
            },
            p(content) {
              return <p className="p-2">{content?.children}</p>;
            },
            a(content) {
              return (
                <a
                  href={content?.href}
                  className="hover:underline"
                  style={{
                    ...colorMerge({
                      color: "primary",
                    }),
                  }}
                >
                  {content.children}
                </a>
              );
            },
            table(content) {
              return (
                <div
                  className={tw(`
                    w-full
                    overflow-hidden
                    border
                    border-solid
                    border-transparent
                    my-2
                  `)}
                  style={{
                    ...colorMerge("gray.opacity", {
                      borderColor: "gray.opacity.2",
                    }),
                  }}
                >
                  {content.children}
                </div>
              );
            },
            tr(props) {
              const ref = React.createRef<HTMLDivElement>();
              const index = React.useMemo(() => {
                let ele = ref.current as Element | null;
                let i = 0;
                while (ele) {
                  i++;
                  ele = ele.previousElementSibling;
                }
                return i;
              }, [ref.current]);
              return (
                <div
                  ref={ref}
                  style={{
                    ...colorMerge(index % 2 && "gray.opacity"),
                  }}
                  className="flex justify-between items-center gap-x-1 px-1 py-1 border border-transparent border-solid w-full"
                >
                  {props.children}
                </div>
              );
            },
            td(content) {
              return <div className="w-full">{content?.children}</div>;
            },
            tbody(content) {
              return <div>{content?.children}</div>;
            },
            thead(content) {
              return <div>{content?.children}</div>;
            },
            th(content) {
              return <div className="w-full">{content?.children}</div>;
            },
          },
          namedCodesToUnicode: { le: "\u2264" },
        }}
      >
        {value}
      </Component>
    </div>
  );
}
