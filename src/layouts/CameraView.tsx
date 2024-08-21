import { useAction } from "@/data/system/actions.model";
import { ContentOfImageView } from "../components/ContentOfImageView";
import { cameraTemp } from "@/reducers/Object/allTemps";
import { BlurOverlay } from "../components/Overlays";
import { CameraOptions, Nothing } from "@/types/global";
// Scan And Dispatch A Event
export function CameraView() {
  // time for loading camera qr code scanner view
  const cameraType = cameraTemp.getTemp<CameraOptions["type"]>("type");
  const cameraId = cameraTemp.getTemp<string | Nothing>("id");
  useAction(
    "camera-take",
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
      <ContentOfImageView />
    </BlurOverlay>
  );
}
