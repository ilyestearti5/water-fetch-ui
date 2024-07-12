import path from "node:path";
import react from "@vitejs/plugin-react";
import pkg from "./package.json";
import { PluginOption, ServerOptions, defineConfig } from "vite";
export default defineConfig(() => {
  let server: ServerOptions | undefined = undefined;
  if (process.env.VSCODE_DEBUG) {
    const url = new URL(pkg.debug.env.VITE_DEV_SERVER_URL);
    server = {
      host: url.hostname,
      port: +url.port,
    };
  }
  const plugins: PluginOption[] = [react({})];
  return {
    resolve: {
      alias: {
        "@": path.resolve("./src/lib"),
        Components: path.resolve("./src/lib/Components"),
        database: path.resolve("./src/lib/data/db"),
        models: path.resolve("./src/lib/data"),
        hooks: path.resolve("./src/lib/hooks"),
        api: path.resolve("./src/lib/apis"),
        utils: path.resolve("./utils"),
        main: path.resolve("./"),
        assets: path.resolve("./src/lib/assets"),
        "pdfmake/build/vfs_fonts": "pdfmake/build/vfs_fonts",
      },
    },
    build: {
      rollupOptions: {
        input: {
          index: "index.html",
        },
      },
    },
    plugins,
    server,
    clearScreen: false,
  };
});
