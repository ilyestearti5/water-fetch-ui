import { startApplication } from "../app/application";
import { Test } from "@/layouts/Test";
import "../server";
import { BrowserRouter } from "react-router-dom";
startApplication(
  <BrowserRouter>
    <Test />
  </BrowserRouter>,
);
