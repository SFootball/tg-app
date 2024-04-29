import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import basicSsl from "@vitejs/plugin-basic-ssl";
// import fs from "node:fs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  // plugins: [react(), basicSsl()],
  // server: {
  //   port: 443,
  //   host: "0.0.0.0",
  //   hmr: {
  //     host: "tg-mini-app.local",
  //     port: 443,
  //   },
  //   https: {
  //     key: fs.readFileSync("./.cert/localhost-key.pem"),
  //     cert: fs.readFileSync("./.cert/localhost.pem"),
  //   },
  // },
});
