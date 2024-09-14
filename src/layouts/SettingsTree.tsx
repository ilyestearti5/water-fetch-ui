import React from "react";
import { Tip } from "@/components/Tip";
import { faChevronDown, faChevronRight, faGear } from "@fortawesome/free-solid-svg-icons";
import { Scroll } from "@/components/Scroll";
import { useColorMerge } from "@/hooks";
import { usePublicSettingsFilter, showSetting, useCopyState } from "@/hooks";
import { Tree } from "@/components/Tree";
export interface TreeReturn {
  data: string;
  innerTree?: TreeReturn[];
}
export function getTree(inputs: string[] = [], sep = "."): TreeReturn[] {
  const parents = inputs
    .filter(Boolean)
    .map((input) => input.split(sep))
    .filter((array) => array.length);
  const uniqueParents = Array.from(new Set(parents.map(([parentName]) => parentName)));
  return uniqueParents.map((name) => {
    return {
      data: name,
      innerTree: getTree(
        parents.filter(([parentName]) => parentName == name).map(([, ...props]) => props.join(sep)),
        sep,
      ),
    };
  });
}
export function SettingsTree() {
  const settings = usePublicSettingsFilter();
  const settingsIds = React.useMemo(() => {
    return settings.map(({ settingId }) => settingId);
  }, [settings]);
  return (
    <div id="settings.tree.view" className="flex flex-col h-full overflow-hidden" tabIndex={1}>
      <Scroll>
        <Tree
          treeId={"setting-tree-layout"}
          tree={getTree(settingsIds as string[], "/")}
          component={({ data, status, parent, isFins, innerTree, level, handels }) => {
            // merging color
            const colorMerge = useColorMerge();
            // get name of setting with the setting type
            const [settingName, settingType] = data.split(".");
            // hovering system
            const hover = useCopyState(false);
            // get unique id
            const id = React.useMemo(() => {
              const id: string[] = [];
              let p = parent;
              while (p) {
                id.push(p.data);
                p = p.parent;
              }
              return id.reverse().join("/");
            }, [isFins]);
            // Render Component
            return (
              <div
                aria-level={level}
                onMouseEnter={() => hover.set(true)}
                onMouseLeave={() => hover.set(false)}
                className="flex items-center px-1 border border-transparent border-solid h-[30px]"
                onClick={async () => {
                  handels.focus(true);
                }}
                style={{
                  ...colorMerge(
                    hover.get && "gray.opacity",
                    status.isFocused && {
                      borderColor: "primary",
                    },
                  ),
                  paddingLeft: `${level * 50}px`,
                }}
              >
                {!settingType && (
                  <div className="mx-1 tools">
                    <Tip
                      iconClassName="text-xs"
                      tabIndex={-1}
                      icon={status.isExpanded ? faChevronDown : faChevronRight}
                      style={{
                        outlineColor: "transparent",
                      }}
                      onClick={() => {
                        handels.expand(false, !status.isExpanded);
                      }}
                    />
                  </div>
                )}
                <div className="flex justify-between items-center w-full">
                  <div>
                    {isFins && settingName}
                    {!isFins && <b>{settingName}</b>}
                    <b
                      className="ml-1"
                      style={{
                        ...colorMerge({
                          color: "primary",
                        }),
                      }}
                    >
                      {Boolean(innerTree?.length) && `(${innerTree?.length})`}
                    </b>
                  </div>
                  {settingType && (
                    <div className="flex items-center gap-2">
                      <span
                        className="px-2 py-1 rounded-md"
                        style={{
                          ...colorMerge("gray.opacity"),
                        }}
                      >
                        {settingType}
                      </span>
                      <Tip
                        onClick={() => {
                          showSetting(id as any);
                        }}
                        icon={faGear}
                        hidden={!hover.get}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          }}
        />
      </Scroll>
    </div>
  );
}
