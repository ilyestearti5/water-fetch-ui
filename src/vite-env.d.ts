/// <reference types="vite/client" />
import { store } from "@/store";
type FullStateManagment = ReturnType<typeof store.getState>;
