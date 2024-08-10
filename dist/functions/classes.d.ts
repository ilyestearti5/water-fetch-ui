export declare class Db {
    static join<P extends object, PK extends keyof P, C extends object, CK extends keyof C>(parentData: P, childData: C[], join: `${PK extends string | number ? PK : string}->${CK extends string | number ? CK : string}`): C[];
    static joinOne<P extends object, PK extends keyof P, C extends object, CK extends keyof C>(childData: C, parentData: P[], join: `${CK extends string | number ? CK : string}->${PK extends string | number ? PK : string}`): P | undefined;
    static fullJoin<P extends object, PK extends keyof P, C extends object, CK extends keyof C>(parentData: P[], childData: C[], join: `${PK extends string | number ? PK : string}->${CK extends string | number ? CK : string}`): {
        data: P;
        childs: C[];
    }[];
    static fullJoinOne<P extends object, PK extends keyof P, C extends object, CK extends keyof C>(parentData: P[], childData: C[], join: `${PK extends string | number ? PK : string}->${CK extends string | number ? CK : string}`): {
        data: P;
        joinTo: C | undefined;
    }[];
    static orderBy<T extends object, B extends keyof T>(data: T[], prop: B, dir?: "asc" | "desc"): T[];
    static between<T extends object, B extends keyof T>(data: T[], keyCheck: B, from?: T[B], to?: T[B]): T[];
}
