import { store } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { isLike } from "utils/index";
export interface TitleInitState {
  content: string | number | null | undefined;
  position: null | [number, number];
  x: "left" | "right" | "center";
  y: "top" | "bottom" | "center";
}
export const initialState: TitleInitState = {
  content: null,
  position: null,
  x: "left",
  y: "bottom",
};
export const titleSlice = createSlice({
  initialState,
  name: "title",
  reducers: {
    // actions
    setContent(state, { payload }: PayloadAction<TitleInitState["content"]>) {
      state.content = payload;
    },
    setPosition(state, { payload }: PayloadAction<TitleInitState["position"]>) {
      state.position = payload;
    },
    setX(state, { payload }: PayloadAction<TitleInitState["x"]>) {
      state.x = payload;
    },
    setY(state, { payload }: PayloadAction<TitleInitState["y"]>) {
      state.y = payload;
    },
  },
});
export function setTitle(title: TitleInitState["content"]) {
  store.dispatch(titleSlice.actions.setContent(title));
}
export function getTitle() {
  const title = useSelector((state: { [k: string]: TitleInitState }) => {
    return state.title.content;
  }, isLike);
  return title;
}
export function setPosition(position: TitleInitState["position"]) {
  store.dispatch(titleSlice.actions.setPosition(position));
}
export function getPosition() {
  const position = useSelector((state: { [k: string]: TitleInitState }) => {
    return state.title.position;
  }, isLike);
  return position;
}
export function setX(origin: TitleInitState["x"] = "left") {
  store.dispatch(titleSlice.actions.setX(origin));
}
export function getX() {
  const origin = useSelector((state: { [k: string]: TitleInitState }) => {
    return state.title.x;
  }, isLike);
  return origin;
}
export function setY(origin: TitleInitState["y"] = "bottom") {
  store.dispatch(titleSlice.actions.setY(origin));
}
export function getY() {
  const origin = useSelector((state: { [k: string]: TitleInitState }) => {
    return state.title.y;
  }, isLike);
  return origin;
}
