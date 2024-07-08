import "pdfmake/build/vfs_fonts";
import { startApplication } from "../index";
import { App } from "@/Components/App/Main/App";
import { BrowserRouter } from "react-router-dom";
startApplication(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
