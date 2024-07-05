import "pdfmake/build/vfs_fonts";
// Requietrs
import { store } from "@/store";
// Components
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "Components/App/Main/App";
import { Provider } from "react-redux";
// Deps
import "@/scss/index.scss";
import { execAction } from "@/data/system/actions.model";
import { execCommand } from "@/data/system/command.model";
import { BrowserRouter } from "react-router-dom";
export const defineGlobal = (configName: string, config: any) => {
  (window as any)[configName] = config;
};
if (import.meta.env.DEV) {
  defineGlobal("store", store);
  defineGlobal("execAction", execAction);
  defineGlobal("execCommand", execCommand);
}
const rootElement = document.createElement("div");
rootElement.classList.add("window");
//
document.body.appendChild(rootElement);
// render react elements inside the rootElement
createRoot(rootElement).render(
  <React.StrictMode>
    {/* provide the storage */}
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
