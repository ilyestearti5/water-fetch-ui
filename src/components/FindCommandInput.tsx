import { Feild } from "@/components/Feild";
import { getText } from "@/components/Text";
export function FindCommandInput() {
  const hint = getText("press ? for help");
  return <Feild aria-multiline={false} placeholder={`${hint} 😊`} inputName="findCommand" />;
}
