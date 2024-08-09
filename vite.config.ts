import path from "node:path";
import react from "@vitejs/plugin-react";
import pkg from "./package.json";
import { defineConfig } from "vite";
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
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
    },
  },
  build: {
    lib: {
      entry: "src/index.ts", // Entry point for your library
      name: pkg.name, // The name of the library
      fileName: (format) => `index.${format}.js`, // Output file naming
    },
    rollupOptions: {
      // Ensure external dependencies are not bundled into your library
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        format: "umd", // Universal Module Definition
      },
    },
    sourcemap: true, // Optional: Generate source maps
  },
});
// export default defineConfig(() => {
//   let server: ServerOptions | undefined = undefined;
//   if (process.env.VSCODE_DEBUG) {
//     const url = new URL(pkg.debug.env.VITE_DEV_SERVER_URL);
//     server = {
//       host: url.hostname,
//       port: +url.port,
//     };
//   }
//   const plugins: PluginOption[] = [react({})];
//   return {
//     resolve: {
//       alias: {
//         "@": path.resolve("./src/lib"),
//         Components: path.resolve("./src/lib/Components"),
//         database: path.resolve("./src/lib/data/db"),
//         models: path.resolve("./src/lib/data"),
//         hooks: path.resolve("./src/lib/hooks"),
//         api: path.resolve("./src/lib/apis"),
//         utils: path.resolve("./utils"),
//         main: path.resolve("./"),
//         assets: path.resolve("./src/lib/assets"),
//         "pdfmake/build/vfs_fonts": "pdfmake/build/vfs_fonts",
//       },
//     },
//     build: {
//       rollupOptions: {
//         input: {
//           index: "index.html",
//         },
//       },
//     },
//     plugins,
//     server,
//     clearScreen: false,
//   };
// });
