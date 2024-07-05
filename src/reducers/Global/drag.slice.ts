import { store } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { isLike } from "utils/index";
export interface DragInitState {
  dragOn?: string;
  dragged?: string;
  value?: string;
}
const initialState: DragInitState = {};
export const dragSlice = createSlice({
  initialState,
  name: "drag",
  reducers: {
    // actions
    serDragOn(state, { payload }: PayloadAction<DragInitState["dragOn"]>) {
      state.dragOn = payload;
    },
    setDragged(state, { payload }: PayloadAction<DragInitState["dragged"]>) {
      state.dragged = payload;
    },
    setValueue(state, { payload }: PayloadAction<DragInitState["value"]>) {
      state.value = payload;
    },
  },
});

export function setDragOn(dragOn: DragInitState["dragOn"]) {
  store.dispatch(dragSlice.actions.serDragOn(dragOn));
}
export function getDragOn() {
  const dragOn = useSelector((state: { [k: string]: DragInitState }) => {
    return state.drag.dragOn;
  }, isLike);
  return dragOn;
}
export function setDragged(dragged: DragInitState["dragged"]) {
  store.dispatch(dragSlice.actions.setDragged(dragged));
}
export function getDragged() {
  const dragged = useSelector((state: { [k: string]: DragInitState }) => {
    return state.drag.dragged;
  }, isLike);
  return dragged;
}
export function setDragValue(value: DragInitState["value"]) {
  store.dispatch(dragSlice.actions.setValueue(value));
}
export function getDragValue() {
  const value = useSelector((state: { [k: string]: DragInitState }) => {
    return state.drag.value;
  }, isLike);
  return value;
}
