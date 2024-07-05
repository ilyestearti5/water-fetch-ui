import { DialogProps, SendEmailProps, SendTelProps, SendSmsProps, AddRecentDocumentsProps, GoogleAuthCodeProps, SetProgressProps, OpenMenuProps } from "../types";
import * as appUtils from "@/functions/app-utils";
import { onceState } from "@/onceState";
import { menuTemp, progressTemp } from "@/reducers/Object/allTemps";
import { nanoid } from "@reduxjs/toolkit";
// desc
export const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "svg", "webp", "tiff", "ico", "jfif"];
export function openDialog(config: DialogProps) {
  return appUtils.openDialog(config);
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
  a.click();
};
export const sendTel = ({ tel }: SendTelProps) => {
  const a = document.createElement("a");
  a.href = `tel:${tel}`;
  a.click();
};
export const sendSms = ({ to, body = "" }: SendSmsProps) => {
  const a = document.createElement("a");
  a.href = `sms:${to}?body=${encodeURIComponent(body)}`;
  a.click();
};
export const addToRecentDocuments = (_config: AddRecentDocumentsProps) => {};
export const clearRecentDocuments = () => {};
export const setJumpList = (_config: Electron.JumpListCategory[] | null) => {};
export const getJumpListSettings = () => {};
export const getGoogleAuthCode = (_config: GoogleAuthCodeProps) => {};
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
export const openPath = async () => {};
