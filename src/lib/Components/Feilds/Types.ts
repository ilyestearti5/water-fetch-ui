import { store } from "@/store";
import { State } from "@/types/global";
export interface FeildGeneralProps<T, C extends object> {
  id: string;
  state: State<T>;
  config?: C;
}
export type FullStoreManagment = ReturnType<typeof store.getState>;
