import { defineTable } from "@/data/pkg/table.def";
import { TableDefConfig } from "@/types/global";
import positions from "@/apis/positions";
const { data } = positions;
export interface Positions extends Partial<Omit<DOMRect, "toJSON">> {
  positionId: string;
}
// Init Client Config
const initPositionsConfig: TableDefConfig<Positions, "positionId", "positions"> = {
  name: "positions",
  id: "positionId",
  default: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  },
};
export type PositionsIds = keyof typeof data;
// create view model
export const { entity: positionsEntity, slice: positionsSlice, hooks: positionsHooks, entitySelect: positionsEntitySelect, init: initPositions } = defineTable(initPositionsConfig);
// init all views
