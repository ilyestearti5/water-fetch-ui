import React from "react";
import { viewHooks } from "@/data/system/views.model";
import { transformCase } from "@/utils/index";
import { getIcon } from "@/utils";
import { useAllKeys, useCopyState } from "@/hooks";
import { List } from "@/components/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ResizeView } from "@/components/ResizeView";
import { useColorMerge } from "@/hooks";
import { Db } from "@/utils";
import { TitleView } from "@/components/TitleView";
import { useTranslate } from "@/components/Translate";
import { Note } from "../components/Note";
function SettingSideList() {
  const view = viewHooks.getOne("settings");
  const list = React.useMemo(() => {
    return Object.entries(view?.tabs || {}).map(([id, prop]) => {
      return {
        id,
        ...prop,
        isFocused: view?.focused == id,
      };
    });
  }, [view]);
  const colorMerge = useColorMerge();
  return (
    <div
      className="border-transparent border-r border-solid w-full h-full overflow-hidden"
      style={{
        ...colorMerge({
          borderColor: "borders",
        }),
      }}
    >
      <List
        slotId="configurations.side.list"
        data={list}
        component={({ item }) => {
          const { id, news, isFocused, icon } = item;
          const cmdId = React.useMemo(() => {
            return `settings.${id}.show`;
          }, [id]);
          const allKeys = useAllKeys();
          const keys = React.useMemo(() => {
            return Db.join({ cmdId }, allKeys, "cmdId->command").map(({ value }) => value!);
          }, [cmdId, allKeys]);
          //
          const [label] = useTranslate(transformCase(id, "camel", "normal"));
          //
          const hover = useCopyState(false);
          //
          const colorMerge = useColorMerge();
          /*
           ******************************************************************************************************************************************************
           *                                                                                                                                                    *
           *                                                                                                                                                    *
           *                                                                                                                                                    *
           *                                                                                                                                                    *
           *                                                                                                                                                    *
           *                                                                                                                                                    *
           *                                                                                                                                                    *
           *                                                                                                                                                    *
           *                                                                                                                                                    *
           *                                                                                                                                                    *
           *                                                                                                                                                    *
           *                                                                                                                                                    *
           ******************************************************************************************************************************************************
           */
          return (
            <TitleView
              onMouseEnter={() => hover.set(true)}
              onMouseLeave={() => hover.set(false)}
              draggable
              key={id}
              title={`press ${keys.map((s) => "`" + s + "`").join(" or ")}`}
              onClick={() => {
                !isFocused && viewHooks.setOneFeild("settings", "focused", item.id);
              }}
              style={{
                ...colorMerge((isFocused || hover.get) && "primary.background"),
              }}
              className="relative truncate cursor-pointer"
            >
              {isFocused && <span className="left-0 absolute inset-y-0 w-[2px]" style={{ ...colorMerge("primary") }} />}
              <div className="flex items-center gap-2 p-2">
                {icon?.value && <FontAwesomeIcon icon={getIcon(icon.type, icon.value)} />}
                {label}
                {news && (
                  <Note>
                    <FontAwesomeIcon icon={getIcon(news.type, news.value)} />
                  </Note>
                )}
              </div>
            </TitleView>
          );
        }}
      />
    </div>
  );
}
export function SettingsSide() {
  return (
    <ResizeView position="right" min={() => innerWidth / 7} max={() => innerWidth / 3} className="h-full">
      <SettingSideList />
    </ResizeView>
  );
}
