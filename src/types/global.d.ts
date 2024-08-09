export type ReactElement<T = HTMLDivElement> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;
export type State<T = undefined> = {
  get: T;
  set: React.Dispatch<React.SetStateAction<T>>;
};
export type pos = [number, number] | undefined;
