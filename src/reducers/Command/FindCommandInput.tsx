import { getText } from "main/src/Components/Text";
import { Feild } from "main/src/Components/Feilds/Feild";
export function FindCommandInput() {
  const hint = getText("press ? for help");
  return <Feild aria-multiline={false} placeholder={`${hint} 😊`} inputName="findCommand" />;
}
