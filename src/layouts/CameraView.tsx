import React from "react";
import { SeparatedViewsLine, SeparatedViewsLineTitle, CircleTip, TitleView } from "@/components";
import { openMenu, useColorMerge, useCopyState } from "@/hooks";
import { execAction, useAction } from "@/data/system/actions.model";
import { cameraTemp } from "@/reducers/Object/allTemps";
import { CameraOptions, Nothing } from "@/types/global";
import { BlurOverlay } from "../components/Overlays";
import { allIcons } from "@/apis";
export interface CameraDeviceInfo {
  label: string;
  id: string;
}
export function CameraView() {
  const cameraType = cameraTemp.getTemp<CameraOptions["type"]>("type");
  const cameraId = cameraTemp.getTemp<string | Nothing>("id");
  const videoElementRef = React.useRef<HTMLVideoElement>(null);
  const cameraTracks = useCopyState<Omit<MediaDeviceInfo, "toJSON">[]>([]);
  const currentStream = useCopyState<MediaStream | null>(null);
  const stopTracking = React.useCallback((media: MediaStream) => {
    media.getTracks().forEach((track) => track.stop());
  }, []);
  const switchCameraDevice = React.useCallback(
    async (deviceId: string) => {
      try {
        if (currentStream.get) {
          stopTracking(currentStream.get);
        }
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { deviceId: { exact: deviceId } },
        });
        if (videoElementRef.current) {
          videoElementRef.current.srcObject = stream;
          currentStream.set(stream);
        }
      } catch (error) {
        console.error("Error switching camera: ", error);
      }
    },
    [currentStream.get, stopTracking],
  );
  const colorMerge = useColorMerge();
  // Capture an image from the video feed
  useAction(
    "camera-take",
    async () => {
      if (cameraId && currentStream.get && cameraType === "take" && videoElementRef.current) {
        const canvas = document.createElement("canvas");
        canvas.width = videoElementRef.current.videoWidth;
        canvas.height = videoElementRef.current.videoHeight;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(videoElementRef.current, 0, 0, canvas.width, canvas.height);
        const base64String = canvas.toDataURL("image/jpeg");
        stopTracking(currentStream.get);
        cameraTemp.setTemp("result", base64String);
      }
    },
    [cameraType, cameraId, videoElementRef, currentStream.get, stopTracking],
  );
  // Initialize the camera and get available devices
  React.useEffect(() => {
    const initializeCamera = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter((device) => device.kind === "videoinput");
        cameraTracks.set(videoDevices);
        if (videoDevices.length > 0) {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: { deviceId: { exact: videoDevices[0].deviceId } },
          });
          if (videoElementRef.current) {
            videoElementRef.current.srcObject = stream;
            currentStream.set(stream);
          }
        }
      } catch (error) {
        // error
      }
    };
    if (cameraId) {
      initializeCamera();
    }
    return () => {
      // Clean up when component unmounts or camera closes
      if (currentStream.get) {
        currentStream.get.getTracks().forEach((track) => track.stop());
      }
    };
  }, [cameraId]);

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
                  cameraTemp.setTemp("error", "Escape Take Image");
                  if (currentStream.get) stopTracking(currentStream.get);
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
              {cameraType && cameraId && <video autoPlay ref={videoElementRef} id="video-streaming" className="w-full h-full" />}
            </div>
          </div>,
          cameraType === "take" && (
            <div className="flex justify-evenly p-4 w-full h-[70px] text-2xl">
              {cameraTracks.get.length > 1 && (
                <TitleView title="Change Camera Device">
                  <CircleTip
                    icon={allIcons.solid.faCameraRotate}
                    onClick={({ clientX, clientY }) => {
                      openMenu({
                        x: clientX,
                        y: clientY,
                        menu: cameraTracks.get.map(({ label, deviceId }) => ({
                          label,
                          async click() {
                            await switchCameraDevice(deviceId);
                          },
                        })),
                      });
                    }}
                  />
                </TitleView>
              )}
              <TitleView title="Take Image">
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
