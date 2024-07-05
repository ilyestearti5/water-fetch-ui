import { useColorMerge } from "models/system/colors.model";
export function Line() {
  const colorMerge = useColorMerge();
  return (
    <div
      className="h-[1px] w-full"
      style={{
        ...colorMerge("borders"),
      }}
    />
  );
}
