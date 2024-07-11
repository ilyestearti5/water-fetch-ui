import { AliasOptions } from "vite/";
import path from "node:path";
export const aliasOptions: AliasOptions = {
  "@": path.resolve("./src"),
  Components: path.resolve("./src/Components"),
  database: path.resolve("./src/data/db"),
  models: path.resolve("./src/data"),
  hooks: path.resolve("./src/hooks"),
  api: path.resolve("./src/apis"),
  utils: path.resolve("./utils"),
  main: path.resolve("./"),
  assets: path.resolve("./src/assets"),
  "pdfmake/build/vfs_fonts": "pdfmake/build/vfs_fonts",
};
