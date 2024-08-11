import { useColorMerge } from "@/hooks";
export function Line() {
  const colorMerge = useColorMerge();
  return (
    <div
      className="w-full h-[1px]"
      style={{
        ...colorMerge("borders"),
      }}
    />
  );
}
