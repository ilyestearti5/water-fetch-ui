import { viewSlice } from "@/data/system/views.model";
import { treeSlice } from "@/data/system/tree.model";
import { titleSlice } from "./reducers/Global/title.slice";
import { taostsSlice } from "./data/system/toasts.model";
import { slotSlice } from "@/data/system/slot.slice";
import { settingSlice } from "@/reducers/Settings/settings.model";
import { positionsSlice } from "@/data/system/positions.model";
import { objectSlice } from "@/reducers/Object/object.slice";
import { notifaySlice } from "@/data/system/notifications.model";
import { logSlice } from "@/data/system/logs.model";
import { langsSlice } from "./data/system/lang.model";
import { keySlice } from "@/data/system/keys.model";
import { keyboardSlice } from "@/reducers/Global/keyboard.slice";
import { feildSlice } from "@/data/system/feild.model";
import { configureStore } from "@reduxjs/toolkit";
import { commandsSlice } from "@/data/system/command.model";
import { colorSlice } from "@/data/system/colors.model";
import { cashSlice } from "./data/system/cash.model";
import { actionSlice } from "@/data/system/actions.model";
export const store = configureStore({
  reducer: {
    // normal reducers
    [keyboardSlice.name]: keyboardSlice.reducer,
    [objectSlice.name]: objectSlice.reducer,
    [titleSlice.name]: titleSlice.reducer,
    // system space
    [commandsSlice.name]: commandsSlice.reducer,
    [keySlice.name]: keySlice.reducer,
    [notifaySlice.name]: notifaySlice.reducer,
    [viewSlice.name]: viewSlice.reducer,
    [positionsSlice.name]: positionsSlice.reducer,
    [slotSlice.name]: slotSlice.reducer,
    [settingSlice.name]: settingSlice.reducer,
    [feildSlice.name]: feildSlice.reducer,
    [actionSlice.name]: actionSlice.reducer,
    [colorSlice.name]: colorSlice.reducer,
    [treeSlice.name]: treeSlice.reducer,
    [logSlice.name]: logSlice.reducer,
    [langsSlice.name]: langsSlice.reducer,
    [cashSlice.name]: cashSlice.reducer,
    [taostsSlice.name]: taostsSlice.reducer,
    /* main database */
  },
});
