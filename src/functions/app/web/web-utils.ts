import { DialogProps, SendEmailProps, SendTelProps, SendSmsProps, SetProgressProps, OpenMenuProps } from "@/types/global";
import { onceState, onState } from "@/hooks";
import { dialogTemps, menuTemp, progressTemp } from "@/reducers/Object/allTemps";
import { nanoid } from "@reduxjs/toolkit";
import { mapAsync } from "@/utils";
import { getTempFromStore, setTemp } from "@/reducers/Object/object.slice";
import { store } from "@/store";
// desc
export const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "svg", "webp", "tiff", "ico", "jfif"];
export function openDialog(props: DialogProps) {
  const id = nanoid();
  return new Promise<Electron.MessageBoxReturnValue>((res, rej) => {
    if (!props.buttons?.length) {
      rej("Need Minimum One Button");
      return;
    }
    dialogTemps.setTemp("id", id);
    dialogTemps.setTemp("params", props);
    const callback = async () => {
      const { slot, object } = store.getState();
      const response = slot.entities["dialog-list"]?.submited;
      if (typeof response == "number") {
        res({
          response,
          checkboxChecked: object.data?.dialog?.checked || false,
        });
        un();
        setTemp("dialog.id", null);
      }
    };
    const un = store.subscribe(callback);
  });
}
export async function getWindowData() {
  const { screenX, screenY, innerWidth, innerHeight } = window;
  return {
    x: screenX,
    y: screenY,
    width: innerWidth,
    height: innerHeight,
  };
}
export async function getLocalAdressIp() {
  return await fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      return data.ip as string | null;
    });
}
export const getImageFileType = (filePath: string) => {
  // Extract the file extension from the file path
  const fileExtension = filePath
    .match(/\.[a-z]+$/gi)?.[0]
    .slice(1)
    .toLowerCase();
  // Map common file extensions to image types (adjust as needed)
  let imageTypes: Record<string, string> = {};
  imageExtensions.forEach((extension) => {
    imageTypes[extension] = extension;
  });
  imageTypes = {
    ...imageTypes,
    jpg: "jpeg",
    svg: "svg+xml",
  };
  return fileExtension ? imageTypes[fileExtension] : "png"; // Default to PNG if type is not recognized
};
export const sendEmail = async ({ to, subject = "", body = "" }: SendEmailProps) => {
  const a = document.createElement("a");
  a.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  a.target = "_blank";
  a.click();
};
export const sendTel = ({ tel }: SendTelProps) => {
  const a = document.createElement("a");
  a.href = `tel:${tel}`;
  a.target = "_blank";
  a.click();
};
export const sendSms = ({ to, body = "" }: SendSmsProps) => {
  const a = document.createElement("a");
  a.href = `sms:${to}?body=${encodeURIComponent(body)}`;
  a.target = "_blank";
  a.click();
};
const callbacks: Map<string, (ev: Event) => void> = new Map();
export const on = (event: string, callback: () => boolean | void | Promise<boolean | void>) => {
  const call = async () => {
    const result = callback();
    result instanceof Promise ? await result : result;
  };
  callbacks.set(event, call);
  document.addEventListener(event, call);
};
export const off = (event: string) => {
  const call = callbacks.get(event);
  if (call) {
    document.removeEventListener(event, call);
    callbacks.delete(event);
  }
};
export const setProgress = async ({ options, value }: SetProgressProps) => {
  progressTemp.setTemp("main", value);
  progressTemp.setTemp("main-mode", options?.mode);
};
export const openMenu = (config: OpenMenuProps) => {
  menuTemp.setTemp("position", [config.x, config.y]);
  const previousMenuId = getTempFromStore<string>("menu.id");
  if (typeof previousMenuId == "string") {
    throw "menu defined before";
  }
  const menuId = nanoid();
  menuTemp.setTemp("id", menuId);
  menuTemp.setTemp(
    "list",
    config.menu.map(({ click, ...props }) => props),
  );
  onceState(
    "object.data.menu.result",
    (result) => typeof result == "number",
    (state) => {
      const menu = state.object.data?.menu;
      if (typeof menu == "object" && typeof menu.result == "number" && menu.id == menuId) {
        menuTemp.setTemp("id", null);
        menuTemp.setTemp("list", []);
        menuTemp.setTemp("result", null);
        const item = config.menu[menu.result];
        item.click?.();
      }
    },
  );
};
export const openPath = (config: Electron.OpenDialogOptions) => {
  return new Promise<string[]>((resolve, rej) => {
    const fileElement = document.createElement("input");
    fileElement.type = "file";
    if (config.filters) {
      fileElement.accept = config.filters.map(({ name, extensions }) => `${name}.{${extensions.join(",")}`).join(",");
    } else {
      fileElement.accept = "*";
    }
    fileElement.multiple = !!config.properties?.includes("multiSelections");
    fileElement.onchange = async () => {
      if (fileElement.files?.length) {
        const files: File[] = [];
        for (let i = 0; i < fileElement.files.length; i++) {
          const file = fileElement.files.item(i);
          if (file) {
            files.push(file);
          }
        }
        const allFiles = await mapAsync<File, string>(files, async (file) => {
          return new Promise((res) => {
            const reader = new FileReader();
            reader.onload = () => {
              if (reader.result) {
                res(reader.result.toString());
              }
            };
            reader.readAsDataURL(file);
          });
        });
        resolve(allFiles);
      }
    };
    fileElement.click();
    fileElement.onerror = rej;
  });
};
export const confirmation = async (config: Omit<DialogProps, "buttons">) => {
  const res = await openDialog({
    ...config,
    buttons: ["Yes", "No"],
  });
  return res.response === 0;
};
export interface DatePickerTimeOptions {
  properties: ["year", "month", "minutes", "hours", "seconds", "milliseconds"];
  init: number | Date;
}
export interface DatePickerTimeResult {
  time: number;
  canceled: boolean;
  id: string;
}
export const openDatePicker = async (config: Partial<DatePickerTimeOptions>): Promise<DatePickerTimeResult> => {
  let id = nanoid();
  setTemp("date-layout-time.init", config.init instanceof Date ? config.init.getTime() : config.init);
  setTemp("date-layout-time.id", id);
  return new Promise((res) => {
    let un = onState(
      "date-layout-time.id",
      (layoutId) => layoutId == id,
      (state) => {
        const datePickerTimeState = getTempFromStore<{ result?: number; id: string; canceled?: boolean }>("date-layout-time", state);
        if (typeof datePickerTimeState?.result == "number") {
          res({
            id,
            time: datePickerTimeState.result,
            canceled: datePickerTimeState.canceled || false,
          });
          setTemp("date-layout-time", null);
          un();
        }
      },
    );
  });
};
