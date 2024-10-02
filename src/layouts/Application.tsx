import React from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { closeApplications, useColorMerge, useTemp, viewTemps } from "@/hooks";
import { Card, CircleTip, DownOverlay, Line, Scroll } from "@/components";
import { allIcons, Server } from "@/apis";
// Example usage
export const ApplicationsLayout = () => {
  const visibility = viewTemps.getTemp("applications");
  const apps = useTemp<{ label: string; imageUrl: string; site?: string }[]>("list.applications");
  React.useEffect(() => {
    if (!Server.server?.db) {
      return;
    }
    const q = query(collection(Server.server.db, "projects"), where("label", "!=", null));
    return onSnapshot(q, ({ docs }) => {
      apps.set(
        docs.map((props) => {
          const data = props.data();
          return {
            label: data.label,
            imageUrl: data.imageUrl,
            site: data.site,
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
                        <img src={imageUrl ?? undefined} className="w-full h-full object-cover" />
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
