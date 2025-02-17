import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",

  server: {
    fs: {
      strict: false,
    },
  },

  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
