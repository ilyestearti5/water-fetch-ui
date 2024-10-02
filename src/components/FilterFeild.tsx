import React from "react";
import { isLike } from "@/utils/index";
import { tw } from "@/utils";
import { handelGradientColor, useColorMerge, useCopyState } from "@/hooks";
import { FeildGeneralProps } from "@/types/global";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
import { slotHooks } from "@/data/system/slot.slice";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./Icon";

interface FilterListItemProps {
  isSelected: boolean;
  item: string;
  toggle: Function;
}

const FilterListItem = ({ isSelected, item, toggle }: FilterListItemProps) => {
  const hover = useCopyState(false);
  const colorMerge = useColorMerge();
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
          isSelected && {
            background: handelGradientColor("to right", "secondary", "primary"),
            color: "secondary.content",
          },
        ),
      }}
      onClick={() => {
        toggle();
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
          isSelected && `scale-100`,
        )}
      />
      {item}
    </button>
  );
};

//
type FilterFeildProps = FeildGeneralProps<string[] | undefined, SettingConfig["filter"]>;
//
export function FilterFeild({ id, config = {}, state }: FilterFeildProps) {
  return (
    <div id={id} className="flex flex-wrap gap-1 p-1 overflow-x-auto" tabIndex={1}>
      {config.list?.map((item, index) => {
        const isSelected = !!state.get?.includes(item);
        return (
          <FilterListItem
            item={item}
            key={index}
            isSelected={isSelected}
            toggle={() => {
              if (isSelected) {
                state.set(state.get?.filter((i) => i != item));
              } else {
                state.set([...(state.get || []), item]);
              }
            }}
          />
        );
      })}
    </div>
  );
}
