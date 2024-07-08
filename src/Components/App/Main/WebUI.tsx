import { EmptyComponent } from "@/Components/Helpers/EmptyComponent";
import { Button, CircleTip, Tip } from "@/Components/Helpers/Buttons";
import { Text } from "@/Components/Text";
import { getIcon, mergeObject, tw } from "@/functions/react-utils";
import { Card } from "./Card";
import { AsyncComponent } from "@/Components/Helpers/AsyncComponent";
import { delay } from "main/utils";
import { CircleLoading } from "@/Components/Helpers/Loading";
import { Feild } from "@/Components/Feilds/Feild";
import { Line } from "@/Components/Helpers/Line";
export interface WebUIProps {
  viewId: string;
  metaData: Record<string, any>;
  childContent?: WebUIProps[];
  path?: number[];
  fullList?: WebUIProps;
  onNewChange?: (newData: WebUIProps) => void;
}
export const WebUI = ({
  viewId,
  metaData,
  childContent = [],
  path = [],
  fullList = {
    viewId,
    metaData,
    childContent,
    path,
  },
}: WebUIProps) => {
  let element: JSX.Element | null = null;
  const childContentResult = (
    <AsyncComponent
      loading={<CircleLoading />}
      render={async () => {
        await delay(200);
        return (
          <EmptyComponent>
            {childContent
              ? childContent.map((childContent, index) => (
                  <WebUI path={[...path, index]} metaData={childContent.metaData} viewId={childContent.viewId} childContent={childContent.childContent} fullList={fullList} key={index} />
                ))
              : null}
          </EmptyComponent>
        );
      }}
    />
  );
  if (viewId == "text") {
    element = (
      <p className={tw(metaData.className)} style={mergeObject(metaData.style)}>
        <Text content={metaData.content} />
      </p>
    );
  } else if (viewId == "inline-view") {
    element = (
      <span className={tw(metaData.className)} style={mergeObject(metaData.style)}>
        {metaData.content}
        {childContentResult}
      </span>
    );
  } else if (viewId == "inrow-view") {
    element = (
      <div
        onDragEnd={(e) => {
          const info = e.dataTransfer.getData("viewId");
          console.log(info);
        }}
        className={tw(metaData.className)}
        style={mergeObject(metaData.style)}
      >
        {metaData.content}
        {childContentResult}
        {metaData.content}
      </div>
    );
  } else if (viewId == "button") {
    element = (
      <Button icon={metaData.icon ? getIcon(metaData.iconType || "solid", metaData.icon) : undefined} className={tw(metaData.className)} style={mergeObject(metaData.style)}>
        {metaData.content}
        {childContentResult}
      </Button>
    );
  } else if (viewId == "card") {
    element = (
      <Card className={tw(metaData.className)} style={mergeObject(metaData.style)}>
        {metaData.content}
        {childContentResult}
      </Card>
    );
  } else if (viewId == "feild") {
    element = (
      <div>
        <Feild placeholder={metaData.placeholder} className={tw(metaData.className)} style={mergeObject(metaData.style)} inputName={metaData.id} />
      </div>
    );
  } else if (viewId == "image") {
    element = <img src={metaData.src} alt={metaData.alt} className={tw(metaData.className)} style={mergeObject(metaData.style)} />;
  } else if (viewId == "line") {
    element = <Line />;
  } else if (viewId == "tip") {
    element = (
      <Tip className={tw(metaData.className)} style={mergeObject(metaData.style)} icon={metaData.icon ? getIcon(metaData.iconType || "solid", metaData.icon) : undefined} content={metaData.content} />
    );
  } else if (viewId == "circle-tip") {
    element = (
      <CircleTip
        className={tw(metaData.className)}
        style={mergeObject(metaData.style)}
        icon={metaData.icon ? getIcon(metaData.iconType || "solid", metaData.icon) : undefined}
        content={metaData.content}
      />
    );
  }
  return <EmptyComponent>{element}</EmptyComponent>;
};
