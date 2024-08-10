import { FullStateManagment } from "@/types/global";
export declare class Temp {
    name: string;
    parent: Temp | null;
    static allTemps: Record<string, Temp>;
    constructor(name: string, parent?: Temp | null);
    getTemp<T>(direction: string): T | null;
    getTempFromStore<T>(direction: string, s?: FullStateManagment): T | null;
    setTemp<T>(direction: string, value: T): void;
    useTemp<T>(direction: string): {
        get: T | null;
        set: import("react").Dispatch<import("react").SetStateAction<T | null>>;
    };
    get childsTemps(): Temp[];
}
