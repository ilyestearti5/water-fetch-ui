import React from "react";
import { closeApplications, useColorMerge, useTemp, viewTemps } from "@/hooks";
import { Card, CircleTip, DownOverlay, Line, Scroll, Translate } from "@/components";
import { allIcons, getMainCloud, ProjectConfig } from "@/apis";
// Example usage
export const ApplicationsLayout = () => {
  const visibility = viewTemps.getTemp("applications");
  const apps = useTemp<ProjectConfig[]>("list.applications");
  React.useEffect(() => {
    return getMainCloud().app.database.onCollectionSnapshot<ProjectConfig>("projects", (props) => {
      apps.set(
        props.map(({ id, data }) => {
          return {
            label: data.label,
            imageUrl: data.imageUrl,
            site: data.site,
            id: id,
          };
        }),
      );
    });
  }, []);
  const colorMerge = useColorMerge();
  return (
    <DownOverlay hidden={!visibility}>
      <Card className="w-[90vw] max-h-[90vh]">
        <div className="flex justify-between items-center p-2">
          <h1 className="text-3xl capitalize">water fetch applications</h1>
          <span>
            <CircleTip
              icon={allIcons.solid.faXmark}
              onClick={() => {
                closeApplications();
              }}
            />
          </span>
        </div>
        <Line />
        <Scroll>
          <div className="flex flex-wrap justify-center gap-2 p-2">
            {apps.get && !apps.get.length && <Translate content="no project's detected" />}
            {apps.get?.map(({ label, imageUrl, site }, index) => {
              return (
                <a href={site} target="_blank" key={index}>
                  <Card className="w-fit">
                    <div className="flex justify-center items-center p-3">
                      <div
                        className="flex justify-center items-center border border-transparent border-solid rounded-full w-[100px] h-[100px] overflow-hidden"
                        style={{
                          ...colorMerge("primary.background", {
                            borderColor: "borders",
                          }),
                        }}
                      >
                        <img loading="lazy" src={imageUrl ?? undefined} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <Line />
                    <div className="p-3">
                      <p className="text-center text-xl max-md:text-md">{label}</p>
                    </div>
                  </Card>
                </a>
              );
            })}
          </div>
        </Scroll>
      </Card>
    </DownOverlay>
  );
};
