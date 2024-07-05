import { TextAnimation } from "Components/Animations/TextAnimation";
import { viewHooks } from "models/system/views.model";
import { getTemp } from "@/reducers/Object/object.slice";
import { getText } from "Components/Text";
import { EmptyComponent } from "@/Components/Helpers/EmptyComponent";
export function CenterWindowDrag() {
  const focusedTab = viewHooks.getOneFeild("window", "focused");
  const baseUrl = getTemp<string>("project.name");
  // get configur lang
  const textTranslated = getText("no base url choised");
  const contentFocusedTab = getText(String(focusedTab));
  const systemIsInited = getTemp<boolean>("setup.user.inited");
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
  return (
    <div className="flex justify-center items-center px-3 w-full window-dragged h-full text-center capitalize overflow-hidden">
      {systemIsInited && (
        <EmptyComponent>
          <span className="truncate">
            <TextAnimation time={2} content={String(contentFocusedTab)} />
            {" ~ "}
            <TextAnimation time={2} content={baseUrl ?? textTranslated} />
          </span>
        </EmptyComponent>
      )}
    </div>
  );
}
