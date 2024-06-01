import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
// import basicSsl from "@vitejs/plugin-basic-ssl";
// import fs from "node:fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const VITE_API_URL = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    resolve: {
      alias: {
        src: "/src",
      },
    },
    server: {
      // host: true,
      port: 3000,
      proxy: {
        // "/api": "http://127.0.0.1:5050",

        "/api": VITE_API_URL,
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
  };
});
