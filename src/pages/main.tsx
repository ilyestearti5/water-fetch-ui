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
  async onPrepare() {
    return {
      colors: [
        {
          colorId: "primary",
          dark: undefined,
          light: undefined,
          default: "#F44",
        },
      ],
      settings: [],
    };
  },
  isDev: import.meta.env.DEV,
});
