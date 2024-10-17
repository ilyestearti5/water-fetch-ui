import { Test } from "@/layouts/Test";
import { startApplication } from "../app/application";
import { BrowserRouter } from "react-router-dom";
import "../server";
startApplication({
  app: (
    <BrowserRouter>
      <Test />
    </BrowserRouter>
  ),
  isDev: import.meta.env.DEV,
});
