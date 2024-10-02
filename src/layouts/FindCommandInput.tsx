import { Feild } from "@/components/Feild";
import { useTranslate } from "@/components/Translate";
export function FindCommandInput() {
  const [hint] = useTranslate("press ? for help");
  return <Feild aria-multiline={false} placeholder={`${hint} 😊`} inputName="findCommand" />;
}
