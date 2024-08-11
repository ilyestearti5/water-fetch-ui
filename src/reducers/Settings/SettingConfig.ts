import { OpenDialogOptions } from "electron";
export interface FileProps extends OpenDialogOptions {
  nullable: boolean;
}
// setting configurations
export interface SettingConfig {
  date: Partial<{
    format?: "date" | "time" | "month" | "datetime-local";
    goToCurrent?: boolean;
  }>;
  pin: Partial<{
    length: number;
    nullable: boolean;
    match: string;
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
    uncancable: boolean;
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
    noConfirm: boolean;
    center: boolean;
    size: "small" | "large";
  }>;
  regexp: Partial<{}>;
  file: Partial<FileProps>;
  array: Partial<{}>;
  filter: Partial<{
    list: string[];
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
  }>;
}
// nesisary values
export interface SettingValueType extends Record<keyof SettingConfig, any> {
  string: string;
  boolean: boolean;
  number: number;
  array: string[];
  enum: string;
  file: string | null;
  filter: string[];
  password: string | null;
  object: Record<string, string>;
  date: string | null;
  regexp: string;
  audio: string | null;
  pin: number | null;
  image: string | null;
}
