import { store } from "@/store";
import { onState } from "main/src/onceState";
import { nanoid } from "@reduxjs/toolkit";
import { setTemp } from "@/reducers/Object/object.slice";
import { DialogProps } from "./app/types";
import { cameraTemp, dialogTemps, passwordTemp } from "@/reducers/Object/allTemps";
export const openDialog = (props: DialogProps) => {
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
};
export interface PasswordConfig {
  canCancel?: boolean;
  title?: string;
  after?: number;
  lockable?: boolean;
  closeOnTrue?: boolean;
}
export interface PasswordResult {
  result: boolean;
}
export const confirmUsingPassword = (config: PasswordConfig = {}) => {
  return new Promise<PasswordResult>(async (res) => {
    const state = store.getState();
    const value = state.settings.entities["app/window/password.password"]?.value;
    const stop = () => {
      passwordTemp.setTemp("result", null);
      passwordTemp.setTemp("id", null);
      passwordTemp.setTemp("config", null);
    };
    if (!value) {
      res({
        result: true,
      });
      stop();
    }
    const id = nanoid();
    passwordTemp.setTemp("result", null);
    passwordTemp.setTemp("id", id);
    passwordTemp.setTemp("config", config);
    const callback = async () => {
      const state = store.getState();
      const result = passwordTemp.getTempFromStore<PasswordResult>("result", state);
      const gettedId = passwordTemp.getTempFromStore("id", state);
      if (gettedId == id && result) {
        res(result);
        stop();
        un();
      }
    };
    const un = store.subscribe(callback);
  });
};
export const scanQr = async () => {
  const id = nanoid();
  cameraTemp.setTemp("id", id);
  cameraTemp.setTemp("type", "scanQr");
  return new Promise(async (res) => {
    const un = onState(
      "object.data.view.result",
      (result) => !!result,
      async ({ object }) => {
        const info = object.data?.camera;
        if (info?.id == id) {
          un();
          res(info.result);
        }
      },
    );
  });
};
export interface CameraOptions {
  type: keyof FullCameraResult;
}
export interface FullCameraResult {
  scanner: string;
  take: string;
}
export type CameraResult<T extends keyof FullCameraResult> = FullCameraResult[T];
export interface CameraConfig<T extends keyof FullCameraResult> {
  result?: CameraResult<T>;
  error?: string;
  id?: string;
}
export function openCamera<T extends keyof FullCameraResult>(type: T) {
  return new Promise<CameraResult<T>>(async (res, rej) => {
    const isOpendBefore = store.getState().object.data?.camera?.id;
    if (isOpendBefore) {
      rej("Camera Is Work Now");
      return;
    }
    const id = nanoid();
    cameraTemp.setTemp("id", id);
    cameraTemp.setTemp("type", type);
    cameraTemp.setTemp("result", null);
    cameraTemp.setTemp("error", null);
    const un = onState<CameraConfig<T>>(
      "object.data.camera",
      (camera) => Boolean(camera?.result || camera?.error),
      async ({ object }) => {
        const info = object.data?.camera as CameraConfig<T> | null;
        if (info?.id == id) {
          if (info.result) {
            res(info.result);
          } else {
            rej(info.error);
          }
          ["id", "type", "result"].forEach((key) => {
            cameraTemp.setTemp(key, null);
          });
          un();
        }
      },
    );
  });
}
