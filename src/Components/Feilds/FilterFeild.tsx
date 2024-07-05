import { useColorMerge, handelGradientColor } from "models/system/colors.model";
import { isLike } from "utils/index";
import { tw, useCopyState } from "@/functions/react-utils";
import { List } from "@/hooks/list.hooks";
import React from "react";
import { FeildGeneralProps } from "./Types";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
import { slotHooks } from "models/system/slot.slice";
import { Icon } from "../Helpers/Buttons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
//
const filterPrefixSlotId = (id: string) => `filter_${id}`;
//
type FilterFeildProps = FeildGeneralProps<string[] | undefined, SettingConfig["filter"]>
//
export function FilterFeild({ id, config = {}, state }: FilterFeildProps) {
  const slotId = filterPrefixSlotId(id);
  const allList = React.useMemo(() => {
    const list = config?.list;
    return (Array.isArray(list) ? list : []).toSorted();
  }, []);
  //
  const selectedFilter = slotHooks.useOneFeild(slotId, "selected");
  //
  React.useEffect(() => {
    if (!selectedFilter.get) {
      return;
    }
    state.set(
      Object.keys(selectedFilter.get)
        .filter((index) => selectedFilter.get?.[+index])
        .map((index) => allList[+index]),
    );
  }, [selectedFilter.get, allList]);
  //
  React.useEffect(() => {
    if (!state.get) {
      return;
    }
    const o: any = {};
    allList.forEach((item, index) => {
      o[index] = state.get?.includes(item);
    });
    !isLike(o, selectedFilter.get) && selectedFilter.set(o);
  }, [state.get, allList]);
  // Render Component Output
  return (
    <div className="flex flex-wrap gap-1 p-1 overflow-x-auto" tabIndex={1}>
      <List
        slotId={slotId}
        component={({ item, status, index }) => {
          const hover = useCopyState(false);
          const colorMerge = useColorMerge();
          const selected = slotHooks.getOneFeild(slotId, "selected");
          return (
            <button
              onMouseEnter={() => hover.set(true)}
              onMouseLeave={() => hover.set(false)}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-nowrap cursor-pointer"
              tabIndex={-1}
              style={{
                ...colorMerge(
                  {
                    background: "gray.opacity",
                  },
                  hover.get && {
                    background: "gray.opacity.2",
                  },
                  status.isSelected && {
                    background: handelGradientColor("to right", "secondry", "primary"),
                    color: "secondry.content",
                  },
                ),
              }}
              onClick={() => {
                if (!selected) {
                  return;
                }
                let unAllows = config.extra
                  ?.filter((data) => data.includes(item))
                  .flat()
                  .filter((s) => s != item);
                if (unAllows?.length) {
                  unAllows = Array.from(new Set(unAllows));
                }
                slotHooks.setOneFeild(slotId, "selected", {
                  ...selected,
                  [index]: !selected?.[index],
                });
              }}
            >
              <Icon
                icon={faCheck}
                iconClassName={tw(
                  `
                    transition-transform
                    duration-300
                    transform
                    scale-0
                  `,
                  status.isSelected && `scale-100`,
                )}
              />
              {item}
            </button>
          );
        }}
        data={allList}
      />
    </div>
  );
}
