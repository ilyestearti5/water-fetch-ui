import { recaptchaTemp } from "@/reducers/Object/allTemps";
import { BlurOverlay, Card } from "@/components";
export const Capatcha = () => {
  const id = recaptchaTemp.getTemp<boolean | null>("open");
  return (
    <BlurOverlay hidden={!id}>
      <Card className="p-1 w-fit">
        <div id="capatcha-view" />
      </Card>
    </BlurOverlay>
  );
};
