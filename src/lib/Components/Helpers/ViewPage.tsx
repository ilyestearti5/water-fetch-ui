import { viewHooks } from "models/system/views.model";
import { EmptyComponent } from "./EmptyComponent";
interface ViewPageProps {
  views: Partial<Record<string, () => JSX.Element>>;
  viewId: string;
}
export function ViewPage({ views, viewId }: ViewPageProps) {
  const focusedView = viewHooks.getOneFeild(viewId, "focused");
  const Component = focusedView && views[focusedView];
  return <div className="flex flex-col w-full h-full overflow-hidden">{Component ? <Component /> : <EmptyComponent />}</div>;
}
