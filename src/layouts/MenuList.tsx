import React from "react";
import { isSorted, mergeObject } from "@/utils";
import { BlurOverlay } from "@/components/Overlays";
import { Line } from "@/components/Line";
import { KeyPanding } from "@/components/KeyPanding";
import { menuTemp } from "@/reducers/Object/allTemps";
import { ListItemProps, position } from "@/types/global";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { slotHooks } from "@/data/system/slot.slice";
import { PositionView } from "../components/PositionView";
import { positionsHooks } from "@/data/system/positions.model";
import { Icon } from "@/components/Icon";
import { List } from "@/components/List";
import { handelShadowColor, useColorMerge } from "@/hooks";
export const MenuRecord = ({ item: props, status, handelFocus, handelSubmit }: ListItemProps<Partial<Electron.MenuItem>>) => {
  if (props.type == "separator") {
    return (
      <div className="my-1">
        <Line />
      </div>
    );
  }
  const colorMerge = useColorMerge();
  const elementRef = React.createRef<HTMLDivElement>();
  return (
    <div className="px-1">
      <div
        ref={elementRef}
        tabIndex={1}
        style={{
          ...colorMerge(
            status.isFocused && "primary",
            status.isFocused && {
              color: "primary.content",
            },
          ),
        }}
        onMouseEnter={handelFocus()}
        onMouseLeave={() => {
          slotHooks.setOneFeild("menu-list", "focused", null);
        }}
        onClick={handelSubmit()}
        className={"cursor-pointer flex items-center rounded-md px-4 py-1 w-full"}
      >
        <div className="w-[30px]">{props.checked && <Icon icon={faCheck} />}</div>
        <div className="flex justify-between items-center gap-1 w-full">
          {props.label && <span>{props.label}</span>}
          {props.accelerator && <KeyPanding shortcut={props.accelerator} />}
        </div>
        <div className="w-[30px]" />
      </div>
    </div>
  );
};
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
export const MenuList = () => {
  const colorMerge = useColorMerge();
  const menuList = menuTemp.getTemp<Partial<Electron.MenuItem>[]>("list");
  const menuPosition = menuTemp.getTemp<position>("position");
  const menuId = menuTemp.getTemp<string>("id");
  const elementRef = React.createRef<HTMLDivElement>();
  const submited = slotHooks.getOneFeild("menu-list", "submited");
  React.useEffect(() => {
    if (menuId && typeof submited == "number") {
      menuTemp.setTemp("result", submited);
      slotHooks.setOneFeild("menu-list", "submited", null);
    }
  }, [submited, menuId]);
  const menuDim = positionsHooks.getOne("menu-list");
  return (
    <BlurOverlay
      hidden={!menuId}
      style={{
        backgroundColor: "transparent",
      }}
    >
      <PositionView
        positionId="menu-list"
        ref={elementRef}
        className="absolute py-1 border border-transparent border-solid rounded-md w-[350px] max-md:w-[150px]"
        style={{
          ...colorMerge("secondary.background", {
            borderColor: "borders",
            boxShadow: handelShadowColor([
              {
                colorId: "shadow.color",
                blur: 10,
                size: 1,
                x: 0,
                y: 5,
              },
            ]),
          }),
          ...mergeObject<React.CSSProperties>(
            menuPosition &&
              menuDim?.width &&
              (innerWidth > menuPosition[0] + menuDim.width
                ? {
                    left: menuPosition[0],
                  }
                : {
                    right: innerWidth - menuPosition[0],
                  }),
            menuPosition &&
              menuDim?.height &&
              (innerHeight > menuPosition[1] + menuDim.height
                ? {
                    top: menuPosition[1],
                  }
                : {
                    bottom: innerHeight - menuPosition[1],
                  }),
          ),
        }}
      >
        <List skipFn={({ enabled = true, type }) => type == "separator" || !enabled} slotId="menu-list" component={MenuRecord} data={menuList || []} />
      </PositionView>
    </BlurOverlay>
  );
};
