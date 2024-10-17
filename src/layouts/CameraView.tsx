import { execAction, useAction } from "@/data/system/actions.model";
import { cameraTemp } from "@/reducers/Object/allTemps";
import { BlurOverlay } from "../components/Overlays";
import { CameraOptions, Nothing } from "@/types/global";
import { openMenu, useAsyncEffect, useAsyncMemo, useColorMerge } from "@/hooks";
import { SeparatedViewsLine, SeparatedViewsLineTitle, CircleTip, TitleView } from "@/components";
import { tw } from "@/utils";
import QrCodeReader from "react-qrcode-reader";
import { allIcons } from "@/apis";
import React from "react";
// Scan And Dispatch A Event
export interface CameraDeviceInfo {
  label: string;
  id: string;
}
export function CameraView() {
  const cameraType = cameraTemp.getTemp<CameraOptions["type"]>("type");
  // time for loading camera qr code scanner view
  const cameraId = cameraTemp.getTemp<string | Nothing>("id");
  useAction(
    "camera-take",
    () => {
      if (cameraId && cameraType == "take") {
        const element = document.querySelector<HTMLVideoElement>("#camera-view video");
        if (!element) {
          return;
        }
        const canvas = document.createElement("canvas");
        canvas.width = element.videoWidth;
        canvas.height = element.videoHeight;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(element, 0, 0, canvas.width, canvas.height);
        const base64String = canvas.toDataURL("image/jpeg");
        cameraTemp.setTemp("result", base64String);
      }
    },
    [cameraType, cameraId],
  );
  const cameraTracks = cameraTemp.getTemp<Omit<MediaDeviceInfo, "toJSON">[]>("tracks");
  const isLoading = useAsyncEffect(async () => {
    if (cameraId) {
      /// get list of camera devices
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter((device) => device.kind === "videoinput");
      cameraTemp.setTemp(
        "tracks",
        videoDevices.map(({ deviceId, groupId, kind, label }) => ({
          deviceId,
          groupId,
          kind,
          label,
        })),
      );
    }
  }, [cameraId]);
  const stopTracking = React.useCallback((media: MediaStream) => {
    media.getTracks().forEach((track) => {
      track.stop();
    });
  }, []);
  React.useEffect(() => {
    if (!cameraId) {
      const element = document.querySelector<HTMLVideoElement>("#camera-view video");
      if (element) {
        element.srcObject = null;
      }
    }
  }, [cameraId]);
  // render element for image
  const colorMerge = useColorMerge();
  return (
    <BlurOverlay hidden={!cameraId}>
      <SeparatedViewsLine
        className="flex flex-col justify-between max-md:rounded-none w-[70vw] max-md:w-full h-[80vh] max-md:h-full"
        list={[
          <SeparatedViewsLineTitle
            title={cameraType || "Work Off"}
            rightSide={
              <CircleTip
                icon={allIcons.solid.faXmark}
                onClick={() => {
                  // stoping camera
                  cameraTemp.setTemp("error", "Escape Take Image");
                }}
              />
            }
          />,
          <div className={`p-2 relative overflow-hidden flex items-center`}>
            <div
              className="border border-transparent border-solid rounded-[10px] w-full h-full overflow-hidden"
              style={{
                ...colorMerge("secondary.background", {
                  borderColor: "borders",
                }),
              }}
            >
              {cameraType && cameraId && <QrCodeReader onRead={() => {}} delay={200} width={400} height={400} videoConstraints />}
            </div>
          </div>,
          cameraType == "take" && (
            <div className="flex justify-evenly p-4 w-full h-[70px] text-2xl">
              <TitleView title="change camera device">
                <CircleTip
                  icon={allIcons.solid.faCameraRotate}
                  onClick={({ clientX, clientY }) => {
                    if (cameraTracks && !isLoading) {
                      openMenu({
                        x: clientX,
                        y: clientY,
                        menu: cameraTracks.map(({ label, deviceId }) => {
                          return {
                            label,
                            async click() {
                              // switch camera device
                              const videoElement = document.querySelector<HTMLVideoElement>("#camera-view video");
                              if (videoElement) {
                                if (videoElement.srcObject instanceof MediaStream) {
                                  stopTracking(videoElement.srcObject);
                                }
                                const stream = await navigator.mediaDevices.getUserMedia({
                                  video: {
                                    deviceId: { exact: deviceId },
                                  },
                                });
                                videoElement.srcObject = stream;
                              }
                            },
                          };
                        }),
                      });
                    }
                  }}
                />
              </TitleView>
              <TitleView title="take image">
                <CircleTip
                  onClick={() => {
                    execAction("camera-take");
                  }}
                  icon={allIcons.solid.faCamera}
                />
              </TitleView>
            </div>
          ),
        ]}
        tabIndex={1}
        id="camera-view"
        style={{
          ...colorMerge("primary.background", {
            borderColor: "borders",
          }),
        }}
      />
    </BlurOverlay>
  );
}
