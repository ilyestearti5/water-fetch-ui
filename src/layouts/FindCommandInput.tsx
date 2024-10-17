import { Feild } from "@/components/Fields/Field";
import { useTranslate } from "@/components/Translate";
export function FindCommandInput() {
  const [hint] = useTranslate("press ? for help");
  return <Feild aria-multiline={false} placeholder={`${hint} 😊`} inputName="findCommand" />;
}
