import React from "react";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import * as regularIcons from "@fortawesome/free-regular-svg-icons";
import * as bradIcons from "@fortawesome/free-brands-svg-icons";
import { Tip } from "@/components/Tip";
import { transformCase } from "@/utils/index";
import { include } from "@/utils";
import { tw } from "@/utils";
import { useCopyState } from "@/hooks";
import { FastList } from "./FastList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Db } from "@/utils";
import { useColorMerge } from "@/hooks";
import { fieldHooks } from "@/data/system/field.model";
import { setTemp } from "@/reducers/Object/object.slice";
import { EmptyComponent } from "@/components/EmptyComponent";
export function Icons() {
  const findConfigurationsValue = fieldHooks.getOneFeild("findConfigurations", "value");
  const allIconsList = React.useMemo(() => {
    // solid icons
    const solidList = Object.entries(solidIcons).map(([iconName, icon]) => ({
      iconName,
      icon,
      type: "solid",
    }));
    // regular icons
    const regularList = Object.entries(regularIcons).map(([iconName, icon]) => ({ iconName, icon, type: "regular" }));
    // brad icons
    const bradList = Object.entries(bradIcons).map(([iconName, icon]) => ({
      iconName,
      icon,
      type: "brad",
    }));
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
    return Db.orderBy([...solidList, ...regularList, ...bradList], "iconName", "asc") as {
      iconName: string;
      icon: solidIcons.IconDefinition;
      type: "solid" | "regular" | "brad";
    }[];
  }, []);
  const filterdIcons = React.useMemo(() => {
    return typeof findConfigurationsValue == "string" ? allIconsList.filter(({ iconName }) => include(iconName, findConfigurationsValue)) : allIconsList;
  }, [allIconsList, findConfigurationsValue]);
  React.useEffect(() => {
    setTemp("configurations.found.length", filterdIcons.length);
  }, [filterdIcons]);
  // Render Component
  return (
    <FastList
      countLastItems={-1}
      focusId="icons-list"
      slotId="icons-list"
      data={filterdIcons}
      itemSize={50}
      component={({ data, style, status, index, handel }) => {
        const hover = useCopyState(false);
        const colorMerge = useColorMerge();
        // tools
        const visibleTools = React.useMemo(() => {
          return [hover.get, status.isFocused, status.isSubmited].some(Boolean);
        }, [hover.get, status]);
        const copyed = useCopyState(false);
        return (
          <div
            onMouseEnter={() => hover.set(true)}
            onMouseLeave={() => hover.set(false)}
            style={{
              ...style,
              ...colorMerge(
                index % 2 && "primary.background",
                hover.get && "gray.opacity",
                status.isFocused && { borderColor: "primary" },
                status.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content",
                },
              ),
            }}
            className={tw(`
              flex
              justify-between
              items-center
              p-3
              gap-2
              border
              border-solid
              border-transparent
            `)}
            onClick={() => {
              handel.focus();
              handel.submit();
            }}
          >
            <div className="flex items-center gap-x-2">
              <div className="flex justify-end w-[100px]">
                {visibleTools && (
                  <EmptyComponent>
                    <Tip
                      onMouseLeave={() => {
                        copyed.set(false);
                      }}
                      icon={copyed.get ? solidIcons.faCheck : regularIcons.faCopy}
                      onClick={async () => {
                        const { icon, ...props } = data;
                        await navigator.clipboard.writeText(props.iconName);
                        copyed.set(true);
                      }}
                    />
                  </EmptyComponent>
                )}
              </div>
              <span className="capitalize">
                <span
                  className="px-1 rounded-md"
                  style={{
                    ...colorMerge("gray.opacity"),
                  }}
                >
                  {data.type}
                </span>
                <span> / </span>
                {transformCase(data.iconName.slice(2), "camel", "normal")}
              </span>
            </div>
            <FontAwesomeIcon className="text-3xl" icon={data.icon} />
          </div>
        );
      }}
    />
  );
}
