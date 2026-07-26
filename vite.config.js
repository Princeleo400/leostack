import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { PrerenderPlugin } from "vite-plugin-prerender";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    PrerenderPlugin({
      staticDir: "dist",
      routes: ["/", "/about", "/resume", "/portfolios", "/contact"],
    }),
  ],

  server: {
    port: 5181, // Set your desired port
    // strictPort: true, // Optional: Exit if port 3000 is unavailable
  },
});
