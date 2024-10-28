import { ReactElement } from "@/app";
import { OpenDialogOptions } from "electron";
export interface FileProps extends OpenDialogOptions {
  nullable: boolean;
}
// setting configurations
export interface SettingConfig {
  date: Partial<{
    format: "date" | "time" | "month" | "datetime-local";
    goToCurrent: boolean;
  }>;
  pin: Partial<{
    length: number;
    match: string;
    size: number;
  }>;
  enum: Partial<{
    position: "bottom" | "left" | "top" | "right";
    list: { value: string; content?: string; desc?: string }[];
    nullable: boolean;
    expandIcon: boolean;
  }>;
  string: Partial<{
    maxLength: number;
    minLength: number;
    help: string[];
    locked: boolean;
    hint: string;
    autoChange: boolean;
    mode: ReactElement["inputMode"];
  }>;
  boolean: Partial<{
    onActive: string;
    onDisactive: string;
    style: "checkbox" | "switch";
  }>;
  number: Partial<{
    max: number;
    min: number;
    placeholder: string;
    autoChange: boolean;
    center: boolean;
    size: "small" | "large";
    selectOnFocus: boolean;
  }>;
  regexp: Partial<{}>;
  file: Partial<FileProps>;
  array: Partial<{
    controls:
      | Record<
          string,
          {
            succ?: string;
            err?: string;
          }
        >
      | undefined;
    addText: string;
  }>;
  filter: Partial<{
    list: { content: string; value: string }[];
    extra: string[][];
  }>;
  password: Partial<{
    canEmpty: string;
  }>;
  object: Partial<{
    proposition: "path";
  }>;
  audio: Partial<{}>;
  image: Partial<{
    filter: string[];
    alt: string;
    rounded: boolean;
    size: number;
  }>;
  range: Partial<{
    min: number;
    max: number;
    isFloat: boolean;
    showValue: boolean;
    marked: Record<number, string>;
    steps: number;
  }>;
}
// nesisary values
export interface SettingValueType extends Record<keyof SettingConfig, any> {
  string: string;
  boolean: boolean;
  number: number;
  array: string[];
  enum: string;
  file: string[] | null;
  filter: string[];
  password: string | null;
  object: Record<string, string>;
  date: string | null;
  regexp: string;
  audio: string | null;
  pin: number | null;
  image: string | null;
  range: number;
}
