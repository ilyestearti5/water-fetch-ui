import React from "react";
import { initNewTree, TreeType } from "@/data/system/tree.model";
import { treeHooks } from "@/hooks";
import { TreeProps } from "@/types/global";
import { EmptyComponent } from "@/components/EmptyComponent";
export function Tree<T>({ treeId, tree = [], component, level = 0, position = "", parent }: TreeProps<T>) {
  const Component = React.useMemo(() => component, []);
  const treeConfig = treeHooks.getOne(treeId) as TreeType | null;
  if (level == 0) {
    initNewTree(treeId);
  }
  React.useEffect(() => {
    if (!treeConfig) {
      return;
    }
    const a = Array.from(new Set(treeConfig.ends));
    const newEnd = `${position}${treeConfig.separator}${tree.length}`;
    if (a.includes(newEnd)) {
      return;
    }
    treeHooks.setOneFeild(treeId, "ends", [...a, newEnd]);
  }, [tree, treeConfig]);
  return (
    <EmptyComponent>
      {tree.map(({ data, innerTree }, index) => {
        const pos = `${position}${treeConfig?.separator}${index}`;
        const parentConfig = {
          data,
          parent,
        };
        const status = {
          isFocused: pos == treeConfig?.focused,
          isSelected: Boolean(treeConfig?.selected?.[pos]),
          isSubmited: treeConfig?.submited == pos,
          isExpanded: Boolean(treeConfig?.expanded?.[pos]),
        };
        return (
          <div key={index}>
            <Component
              status={status}
              handels={{
                focus() {
                  treeConfig && treeHooks.setOneFeild(treeId, "focused", pos);
                },
                select(only, value) {
                  treeConfig &&
                    treeHooks.setOneFeild(
                      treeId,
                      "selected",
                      only
                        ? {
                            [pos]: value,
                          }
                        : {
                            ...treeConfig.selected,
                            [pos]: value,
                          },
                    );
                },
                submit() {
                  if (!treeConfig) {
                    return;
                  }
                  treeHooks.setOneFeild(treeId, "submited", pos);
                },
                expand(only, value) {
                  if (!treeConfig) {
                    return;
                  }
                  treeHooks.setOneFeild(treeId, "expanded", {
                    ...(!only ? treeConfig.expanded || {} : {}),
                    [pos]: value,
                  });
                },
              }}
              level={level}
              isFins={!innerTree}
              position={pos}
              data={data}
              index={index}
              parent={parentConfig}
              innerTree={innerTree}
            />
            {Array.isArray(innerTree) && status.isExpanded && (
              <div>
                <Tree position={pos} component={component} tree={innerTree} treeId={treeId} level={level + 1} parent={parentConfig} />
              </div>
            )}
          </div>
        );
      })}
    </EmptyComponent>
  );
}
