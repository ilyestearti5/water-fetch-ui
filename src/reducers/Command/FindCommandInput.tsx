import { getText } from "@/Components/Text";
import { Feild } from "Components/Feilds/Feild";
export function FindCommandInput() {
  const hint = getText("press ? for help");
  return <Feild aria-multiline={false} placeholder={`${hint} 😊`} inputName="findCommand" />;
}
