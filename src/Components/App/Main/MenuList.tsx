import React from "react";
import { mergeObject } from "main/src/functions/react-utils";
import { BlurOverlay } from "main/src/Components/Helpers/Overlays";
import { Line } from "main/src/Components/Helpers/Line";
import { KeyPanding } from "main/src/Components/Helpers/KeyPanding";
import { handelShadowColor, useColorMerge } from "@/data/system/colors.model";
import { menuTemp } from "@/reducers/Object/allTemps";
import { pos } from "@/types/global";
import { List, ListItemProps } from "main/src/hooks/list.hooks";
import { Icon } from "main/src/Components/Helpers/Buttons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { slotHooks } from "@/data/system/slot.slice";
import { PositionView } from "../Header/PositionView";
import { positionsHooks } from "@/data/system/positions.model";
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
  const menuPosition = menuTemp.getTemp<pos>("position");
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
    <BlurOverlay hidden={!menuId}>
      <PositionView
        positionId="menu-list"
        ref={elementRef}
        className="absolute py-1 border border-transparent border-solid rounded-md w-[350px]"
        style={{
          ...colorMerge("secondry.background", {
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