import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/computer-distributor/", // Ref: https://vitejs.dev/guide/static-deploy#github-pages
  plugins: [react()],
  server: {
    port: 3000,
  },
});
