import { getTemp, getTempFromStore, setTemp, useTemp } from "./object.slice";
import { FullStoreManagment } from "@/Components/Feilds/Types";
export class Temp {
  static allTemps: Record<string, Temp> = {};
  constructor(
    public name: string,
    public parent: Temp | null = null,
  ) {
    if (this.name.includes(".") || Temp.allTemps[this.name]) {
      throw `temp name ${this.name} exists before`;
    }
    Temp.allTemps[this.name] = this;
  }
  getTemp<T>(direction: string) {
    const result = getTemp<T>([this.name, direction].join("."));
    return result;
  }
  getTempFromStore<T>(direction: string, s?: FullStoreManagment) {
    return getTempFromStore<T>([this.name, direction].join("."), s);
  }
  setTemp<T>(direction: string, value: T) {
    setTemp([this.name, direction].join("."), value);
  }
  useTemp<T>(direction: string) {
    return useTemp<T>([this.name, direction].join("."));
  }
  get childsTemps() {
    return Object.values(Temp.allTemps).filter(({ parent }) => parent == this);
  }
}
