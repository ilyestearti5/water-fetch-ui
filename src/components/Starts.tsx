import { range, tw } from "@/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ColorIds, useColorMerge } from "@/hooks";
import { IconProps } from "./Icon";
import { allIcons } from "@/apis";
export interface StartsProps {
  length?: number;
  starts?: number;
  onSubmit?: (e: number) => any;
  color?: ColorIds;
  choisedIcon?: IconProps["icon"];
  unchoisedIcon?: IconProps["icon"];
  direction?: "vertical" | "horizontal";
}
export function Starts({ length = 4, direction = "vertical", color, choisedIcon = allIcons.solid.faStar, unchoisedIcon = allIcons.regular.faStar, starts = length, onSubmit }: StartsProps) {
  const colorMerge = useColorMerge();
  return (
    <div className={tw("flex", direction == "horizontal" && "flex-col")}>
      {range(length).map((val, index) => {
        return (
          <FontAwesomeIcon
            style={{
              ...colorMerge(
                {
                  color: "starts.color",
                },
                color && { color },
              ),
            }}
            onClick={(_e) => {
              onSubmit?.(index);
            }}
            key={val}
            className="transform hover:scale-125 transition-tansform duration-200"
            icon={starts >= val ? choisedIcon : unchoisedIcon}
          />
        );
      })}
    </div>
  );
}
