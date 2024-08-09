import { PayloadAction } from "@reduxjs/toolkit";
import { ReactElement } from "@/types/global";
import { defineTable } from "@/data/pkg/table.def";
import { TableDefConfig } from "@/data/pkg/types";
import React from "react";
import { EmptyComponent } from "main/src/Components/Helpers/EmptyComponent";
export const initState: TableDefConfig<Tree, "treeId", "tree"> = {
  id: "treeId",
  name: "tree",
  default: {
    expanded: {},
    separator: "/",
  },
  actions: {
    next(state: any, { payload }: PayloadAction<string>) {
      const tr = state.entities[payload] as Tree | undefined;
      if (!tr) {
        return;
      }
    },
    back(state: any, { payload }: PayloadAction<string>) {
      const tr = state.entities[payload] as Tree | undefined;
      if (!tr) {
        return;
      }
    },
    toggleExpand(state: any, { payload }: PayloadAction<string>) {
      const tr = state.entities[payload] as Tree | undefined;
      if (tr && tr.focused) {
        tr.expanded = {
          ...(tr.expanded || {}),
          [tr.focused]: !tr.expanded?.[tr.focused],
        };
      }
    },
    expandMore(state: any, { payload }: PayloadAction<string>) {
      const tr = state.entities[payload] as Tree | undefined;
      if (tr && tr.focused) {
        tr.expanded = {
          ...(tr.expanded || {}),
          [tr.focused]: true,
        };
      }
    },
    expandLess(state: any, { payload }: PayloadAction<string>) {
      const tr = state.entities[payload] as Tree | undefined;
      if (tr && tr.focused) {
        tr.expanded = {
          ...(tr.expanded || {}),
          [tr.focused]: false,
        };
      }
    },
    focusParent(state: any, { payload }: PayloadAction<string>) {
      const tr = state.entities[payload] as Tree | undefined;
      if (tr && tr.focused && tr.separator) {
        const newFocused = tr.focused.split(tr.separator).slice(0, -1).join(tr.separator);
        tr.focused = newFocused || null;
      }
    },
    focusLeft(state: any, { payload }: PayloadAction<string>) {
      const tr = state.entities[payload] as Tree | undefined;
      if (tr && tr.focused && tr.separator) {
        const expanded = tr.expanded?.[tr.focused];
        if (expanded) {
          tr.expanded = {
            ...(tr.expanded || {}),
            [tr.focused]: false,
          };
        } else {
          const newFocused = tr.focused.split(tr.separator).slice(0, -1).join(tr.separator);
          tr.focused = newFocused || null;
        }
      }
    },
    focusRight(state: any, { payload }: PayloadAction<string>) {
      const tr = state.entities[payload] as Tree | undefined;
      if (tr && tr.focused && tr.separator) {
        const expanded = tr.expanded?.[tr.focused];
        if (!expanded) {
          tr.expanded = {
            ...(tr.expanded || {}),
            [tr.focused]: true,
          };
        } else {
          const newFocused = [...tr.focused.split(tr.separator), "0"].join(tr.separator);
          tr.focused = newFocused;
        }
      }
    },
  },
  data: {},
};
export const { init: initTrees, hooks: treeHooks, slice: treeSlice } = defineTable(initState);
export interface Tree {
  ends: string[];
  treeId: string;
  focused?: string | null;
  submited?: string;
  selected?: Record<string, boolean>;
  skiped?: Record<string, boolean>;
  expanded?: Record<string, boolean>;
  separator?: string;
}
export interface TreeComponentProps<T> extends ReactElement {
  position: string;
  data: T;
  index: number;
  handels: {
    expand: (only: boolean, value: boolean) => any;
    focus: Function;
    select: (only: boolean, value: boolean) => any;
    submit: Function;
  };
  status: Record<`is${"Submited" | "Selected" | "Focused" | "Expanded"}`, boolean>;
  parent?: TreeProps<T>["parent"];
  isFins: boolean;
  innerTree: TreeProps<T>["tree"];
  level: number;
}
export interface TreeProps<T> {
  treeId: string;
  tree?: {
    data: T;
    innerTree?: TreeProps<T>["tree"] | undefined;
  }[];
  component: (props: TreeComponentProps<T>) => JSX.Element;
  level?: number;
  size?: string;
  position?: string;
  parent?: {
    data: T;
    parent: TreeProps<T>["parent"];
  };
}
export function initNewTree(treeId: string) {
  const tr = treeHooks.getOne(treeId);
  React.useEffect(() => {
    if (tr) {
      return;
    }
    treeHooks.add([
      {
        treeId,
        ends: [],
      },
    ]);
  }, [tr]);
}
export function toLinear<T>(tree: TreeProps<T>["tree"], level = 0) {
  const result: { data: T; level: number }[] = [];
  tree?.map(({ data, innerTree }) => {
    result.push({ data, level }, ...toLinear(innerTree, level + 1));
  });
  return result;
}
export function toTree<T>(_linearTree: ReturnType<typeof toLinear<T>>) {
  const result: TreeProps<T>["tree"] = [];
  return result;
}
export function Tree<T>({ treeId, tree = [], component, level = 0, position = "", parent }: TreeProps<T>) {
  const Component = React.useMemo(() => component, []);
  const treeConfig = treeHooks.getOne(treeId) as Tree | null;
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
