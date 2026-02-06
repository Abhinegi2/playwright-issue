import { defineConfig } from "@playwright/test";
import "tsx/esm";

export default defineConfig({
  testDir: "./tests",
  build: { external: ["*"] },
});
