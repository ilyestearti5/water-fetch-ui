import { useAction } from "@/data/system/actions.model";
import { ResizeView } from "./Helpers/ResizeView";
import { Nothing } from "main/utils/interfaces";
import { ContentOfImageView } from "./ContentOfImageView";
import { cameraTemp } from "@/reducers/Object/allTemps";
import { CameraOptions } from "@/functions/app-utils";
import { BlurOverlay } from "./Helpers/Overlays";
// Scan And Dispatch A Event
export function CameraView() {
  // time for loading camera qr code scanner view
  const cameraType = cameraTemp.getTemp<CameraOptions["type"]>("type");
  const cameraId = cameraTemp.getTemp<string | Nothing>("id");
  useAction(
    "camera.take",
    () => {
      if (cameraId && cameraType == "take") {
        const element = document.querySelector<HTMLVideoElement>("#camera-view  video");
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
  // render element for image
  return (
    <BlurOverlay hidden={!cameraId}>
      <div>
        <ResizeView temp="camera" max={() => innerHeight} min={() => 200} position="right">
          <ContentOfImageView />
        </ResizeView>
      </div>
    </BlurOverlay>
  );
}
