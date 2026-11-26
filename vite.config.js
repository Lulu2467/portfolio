import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Local: http://localhost:5173/
// GitHub Pages: https://lulu2467.github.io/portfolio/
export default defineConfig({
  base: process.env.GITHUB_PAGES === "true" ? "/portfolio/" : "/",
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
  },
});
