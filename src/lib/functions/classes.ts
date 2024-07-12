import { doubleFilter } from "utils/index";
export class Db {
  static join<P extends object, PK extends keyof P, C extends object, CK extends keyof C>(
    parentData: P,
    childData: C[],
    join: `${PK extends string | number ? PK : string}->${CK extends string | number ? CK : string}`,
  ) {
    const [parentKey, childKey] = join.split("->") as [PK, CK];
    return childData.filter((data) => String(parentData[parentKey]) === String(data[childKey]));
  }
  static joinOne<P extends object, PK extends keyof P, C extends object, CK extends keyof C>(
    childData: C,
    parentData: P[],
    join: `${CK extends string | number ? CK : string}->${PK extends string | number ? PK : string}`,
  ) {
    const [childKey, parentKey] = join.split("->") as [CK, PK];
    return parentData.find((data) => String(childData[childKey]) == String(data[parentKey]));
  }
  static fullJoin<P extends object, PK extends keyof P, C extends object, CK extends keyof C>(
    parentData: P[],
    childData: C[],
    join: `${PK extends string | number ? PK : string}->${CK extends string | number ? CK : string}`,
  ) {
    let copyChildData = [...childData];
    const [parentKey, childKey] = join.split("->") as [PK, CK];
    return parentData.map((data) => {
      const [childs, extra] = doubleFilter(copyChildData, (val) => String(data[parentKey]) === String(val[childKey]));
      copyChildData = [...extra];
      return {
        data,
        childs,
      };
    });
  }
  static fullJoinOne<P extends object, PK extends keyof P, C extends object, CK extends keyof C>(
    parentData: P[],
    childData: C[],
    join: `${PK extends string | number ? PK : string}->${CK extends string | number ? CK : string}`,
  ) {
    const copyChildData = [...childData];
    const [parentKey, childKey] = join.split("->") as [PK, CK];
    return parentData.map((data) => {
      const joinTo = copyChildData.find((val) => String(data[parentKey]) === String(val[childKey]));
      joinTo && copyChildData.splice(copyChildData.indexOf(joinTo), 1);
      return {
        data,
        joinTo,
      };
    });
  }
  static orderBy<T extends object, B extends keyof T>(data: T[], prop: B, dir: "asc" | "desc" = "asc") {
    if (dir == "asc") {
      return data.sort((prev, next) => (prev[prop] < next[prop] ? -1 : 1));
    } else {
      return data.sort((prev, next) => (prev[prop] > next[prop] ? -1 : 1));
    }
  }
  static between<T extends object, B extends keyof T>(data: T[], keyCheck: B, from?: T[B], to?: T[B]) {
    if (from == undefined && to == undefined) {
      return data;
    } else if (from == undefined) {
      return data.filter((item) => {
        const itemChecked = item[keyCheck];
        return itemChecked < to!;
      });
    } else if (to == undefined) {
      return data.filter((item) => {
        const itemChecked = item[keyCheck];
        return from < itemChecked;
      });
    } else {
      return data.filter((item) => {
        const itemChecked = item[keyCheck];
        return from! < itemChecked && itemChecked < to!;
      });
    }
  }
}
