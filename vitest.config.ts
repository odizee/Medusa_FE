import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"], // Create this file
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});