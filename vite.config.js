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
      rendererOptions: {
        // // wait for React to fully mount before capturing HTML
        // renderAfterTime: 2000, // wait 2 seconds after page load
        // // OR more reliably, wait for a specific element:
        renderAfterDocumentEvent: "render-complete",
      },

      postProcess(renderedRoute) {
        // fix any absolute URLs that got baked in
        renderedRoute.html = renderedRoute.html.replace(
          /http:\/\/localhost:\d+\//g,
          "/",
        );
        return renderedRoute;
      },
    }),
  ],

  server: {
    port: 5181, // Set your desired port
    // strictPort: true, // Optional: Exit if port 3000 is unavailable
  },
});
