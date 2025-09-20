import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, "src/module.ts"),
      name: "hsot",
      formats: ["es"],
      fileName: () => "module.js",
    },
    rollupOptions: {
      external: ["foundry"],
    },
  },
});
