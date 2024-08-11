import { useColorMerge } from "@/hooks";
import { tw } from "@/utils";
import { getTemp } from "@/reducers/Object/object.slice";
import { EmptyComponent } from "@/components/EmptyComponent";
function DevReadingHTML() {
  const temp = getTemp<{ x: number; y: number; width: number; height: number }>("dev.html.hoverPosition");
  const colorMerge = useColorMerge();
  return (
    <EmptyComponent>
      {temp && (
        <div
          className={tw(`
            z-[100000000000000000000000000000000000000000]
            fixed
            pointer-events-none
            transition-[width,left,height,top]
            duration-75
          `)}
          style={{
            ...colorMerge("htmlContentHover"),
            left: `${temp.x}px`,
            top: `${temp.y}px`,
            width: `${temp.width}px`,
            height: `${temp.height}px`,
          }}
        />
      )}
    </EmptyComponent>
  );
}
export { DevReadingHTML };
