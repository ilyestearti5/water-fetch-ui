export interface CenterWindowDragProps {
  children?: React.ReactNode;
}
export function CenterWindowDrag({ children }: CenterWindowDragProps) {
  return <div className="flex justify-center items-center px-3 w-full window-dragged h-full text-center capitalize overflow-hidden">{children}</div>;
}
