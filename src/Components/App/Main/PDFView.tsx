import { viewTemps } from "@/reducers/Object/allTemps";
import { BlurOverlay } from "main/src/Components/Helpers/Overlays";
import { SeparatedViewsLine, SeparatedViewsLineTitle } from "main/src/Components/Helpers/SimpleComponents";
import { Tip } from "main/src/Components/Helpers/Buttons";
import { TitleView } from "main/src/Components/Helpers/Title";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ResizeView } from "main/src/Components/Helpers/ResizeView";
export const PDFView = () => {
  const baseUrl64Uri = viewTemps.getTemp<string>("pdf");
  return (
    <BlurOverlay hidden={!baseUrl64Uri}>
      <div>
        <ResizeView className="h-[70vh]" position="right" temp="pdf" min={400} max={() => innerWidth - 30}>
          <SeparatedViewsLine
            className="h-full overflow-hidden"
            list={[
              <SeparatedViewsLineTitle
                title="PDF.."
                rightSide={
                  <div className="flex tools">
                    <TitleView title="close view">
                      <Tip
                        icon={faXmark}
                        onClick={() => {
                          viewTemps.setTemp("pdf", null);
                        }}
                      />
                    </TitleView>
                  </div>
                }
              />,
              <div className="h-full">{baseUrl64Uri && <embed src={baseUrl64Uri} className="w-full h-full" />}</div>,
            ]}
          />
        </ResizeView>
      </div>
    </BlurOverlay>
  );
};
