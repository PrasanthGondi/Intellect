/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    includeSource: ["src/**/*.{js,ts}"],
    coverage: {
      reporter: ["text", "html"],
    },
  },
  server: {
    port: 3000,
  },
});
