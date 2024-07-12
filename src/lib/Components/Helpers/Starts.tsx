import { range } from "utils/index";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStartOutLine } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useColorMerge } from "models/system/colors.model";
import { EmptyComponent } from "./EmptyComponent";
interface StartsProps {
  length?: number;
  starts?: number;
  onSubmit?: (e: number) => any;
}
export function Starts({ length = 4, starts = length, onSubmit }: StartsProps) {
  const colorMerge = useColorMerge();
  return (
    <EmptyComponent>
      {range(length).map((val, index) => {
        return (
          <FontAwesomeIcon
            style={{
              ...colorMerge({
                color: "starts.color",
              }),
            }}
            onClick={(_e) => {
              onSubmit?.(index);
            }}
            key={val}
            className="transform hover:scale-150 transition-tansform duration-200"
            icon={starts < val ? faStartOutLine : faStar}
          />
        );
      })}
    </EmptyComponent>
  );
}
