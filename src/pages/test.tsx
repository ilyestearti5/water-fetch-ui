import { store } from "@/store";
import React from "react";
import { createRoot } from "react-dom/client";
import "../scss/index.scss";
import { App } from "@/Components/App/Main/App";
import { Provider } from "react-redux";
const rootElement = document.createElement("div");
rootElement.classList.add("window");
//
document.body.appendChild(rootElement);
// render react elements inside the rootElement
createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store} children={<App />} />
  </React.StrictMode>,
);
