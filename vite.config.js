import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const require = createRequire(import.meta.url);
const vitePrerender = require("vite-plugin-prerender");

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.join(__dirname, "dist"),
      routes: ["/", "/about", "/resume", "/portfolios", "/contact"],
    }),
  ],

  server: {
    port: 5181, // Set your desired port
    // strictPort: true, // Optional: Exit if port 3000 is unavailable
  },
});
