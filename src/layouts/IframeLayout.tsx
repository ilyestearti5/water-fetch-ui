import React from "react";
import { closeFrame, iframeTemp } from "@/hooks";
import { BlurOverlay, Card } from "@/components";
export const IframeLayout = () => {
  const id = iframeTemp.getTemp<string>("id");
  const src = iframeTemp.getTemp<string>("src");
  const elementRef = React.createRef<HTMLIFrameElement>();
  React.useEffect(() => {
    if (elementRef.current) {
      elementRef.current.onclose = () => {
        closeFrame();
      };
    }
  }, [elementRef.current]);
  return (
    <BlurOverlay hidden={!id}>
      {src && id && (
        <Card className="w-[70vw] h-[70vh] overflow-hidden">
          <iframe ref={elementRef} className="w-full h-full" id={id} src={src} />
        </Card>
      )}
    </BlurOverlay>
  );
};
