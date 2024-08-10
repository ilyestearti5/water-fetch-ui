import { useColorMerge } from "@/data/system/colors.model";
import { Line } from "@/components/Line";
import { Card } from "./Card";
import { Feild } from "./Feild";
export const LeftSideView = () => {
  const colorMerge = useColorMerge();
  return (
    <div className="w-full">
      <div className="p-2">
        <Feild placeholder="Search Component Type" inputName="search-component-type" />
      </div>
      <Line />
      <div className="flex flex-col gap-y-1 p-2">
        {[
          {
            value: "text",
            content: "Text",
          },
          {
            value: "inrow-view",
            content: "InRow View",
          },
          {
            value: "inline-view",
            content: "Inline View",
          },
          {
            value: "button",
            content: "Button",
          },
          {
            value: "card",
            content: "Card",
          },
          {
            value: "image",
            content: "Image",
          },
          {
            value: "feild",
            content: "Feild",
          },
          {
            value: "line",
            content: "Line",
          },
        ].map(({ content, value }, index) => {
          return (
            <Card
              key={index}
              draggable
              onDrag={(e) => {
                e.dataTransfer.setData("viewId", value);
              }}
              className="w-full cursor-move"
            >
              <div className="p-1 h-[70px]">
                <div
                  style={{
                    ...colorMerge("gray.opacity"),
                  }}
                  className="rounded-2xl w-full h-full"
                >
                  <img />
                </div>
              </div>
              <Line />
              <p className="p-1 w-full text-center">{content}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
