import { useCopyState } from "@/hooks";
import { Button, ButtonProps } from "./Button";
import { tw } from "@/utils";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

export interface WaitableButtonProps<T> extends ButtonProps {
  onPress: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<T> | T;
  text?: string;
}

export function WaitableButton<T>({ icon, onClick, text = "", onPress, children, ...props }: WaitableButtonProps<T>) {
  const isLoading = useCopyState(false);
  return (
    <Button
      {...props}
      icon={isLoading.get ? faRotate : icon}
      iconClassName={tw(isLoading.get && "animate-spin")}
      onClick={async (e) => {
        try {
          onClick?.(e);
        } catch {}
        isLoading.set(true);
        try {
          const result = onPress(e);
          if (result instanceof Promise) {
            await result;
          }
        } catch {}
        isLoading.set(false);
      }}
    >
      {text}
      {children}
    </Button>
  );
}
