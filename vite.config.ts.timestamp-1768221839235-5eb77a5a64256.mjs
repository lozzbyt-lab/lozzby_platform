// vite.config.ts
import { defineConfig } from "file:///root/app/code/node_modules/vite/dist/node/index.js";
import react from "file:///root/app/code/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
var __vite_injected_original_dirname = "/root/app/code";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [".onrender.com", ".builderio.xyz"],
    hmr: process.env.VITE_HMR_HOST ? {
      host: process.env.VITE_HMR_HOST,
      protocol: process.env.VITE_HMR_PROTOCOL || "wss",
      port: process.env.VITE_HMR_PORT ? parseInt(process.env.VITE_HMR_PORT) : 443
    } : void 0
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
    target: "esnext",
    // 🔥 MINIMAL RENDER CSS FIX (doesn't break Builder)
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]"
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__vite_injected_original_dirname, "./src") }
  },
  base: "/"
  // Builder.io needs root base
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvcm9vdC9hcHAvY29kZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3Jvb3QvYXBwL2NvZGUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3Jvb3QvYXBwL2NvZGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6IFwiOjpcIixcbiAgICBwb3J0OiA4MDgwLFxuICAgIGFsbG93ZWRIb3N0czogW1wiLm9ucmVuZGVyLmNvbVwiLCBcIi5idWlsZGVyaW8ueHl6XCJdLFxuICAgIGhtcjogcHJvY2Vzcy5lbnYuVklURV9ITVJfSE9TVFxuICAgICAgPyB7XG4gICAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuVklURV9ITVJfSE9TVCxcbiAgICAgICAgICBwcm90b2NvbDogcHJvY2Vzcy5lbnYuVklURV9ITVJfUFJPVE9DT0wgfHwgXCJ3c3NcIixcbiAgICAgICAgICBwb3J0OiBwcm9jZXNzLmVudi5WSVRFX0hNUl9QT1JUID8gcGFyc2VJbnQocHJvY2Vzcy5lbnYuVklURV9ITVJfUE9SVCkgOiA0NDMsXG4gICAgICAgIH1cbiAgICAgIDogdW5kZWZpbmVkLFxuICB9LFxuICBidWlsZDoge1xuICAgIG91dERpcjogXCJkaXN0XCIsXG4gICAgc291cmNlbWFwOiBmYWxzZSxcbiAgICBtaW5pZnk6IFwidGVyc2VyXCIsXG4gICAgdGFyZ2V0OiBcImVzbmV4dFwiLFxuICAgIC8vIFx1RDgzRFx1REQyNSBNSU5JTUFMIFJFTkRFUiBDU1MgRklYIChkb2Vzbid0IGJyZWFrIEJ1aWxkZXIpXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiBcImFzc2V0cy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdXCJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7IFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpIH1cbiAgfSxcbiAgYmFzZTogXCIvXCIgIC8vIEJ1aWxkZXIuaW8gbmVlZHMgcm9vdCBiYXNlXG59KSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTROLFNBQVMsb0JBQW9CO0FBQ3pQLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFGakIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE9BQU87QUFBQSxFQUN6QyxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixjQUFjLENBQUMsaUJBQWlCLGdCQUFnQjtBQUFBLElBQ2hELEtBQUssUUFBUSxJQUFJLGdCQUNiO0FBQUEsTUFDRSxNQUFNLFFBQVEsSUFBSTtBQUFBLE1BQ2xCLFVBQVUsUUFBUSxJQUFJLHFCQUFxQjtBQUFBLE1BQzNDLE1BQU0sUUFBUSxJQUFJLGdCQUFnQixTQUFTLFFBQVEsSUFBSSxhQUFhLElBQUk7QUFBQSxJQUMxRSxJQUNBO0FBQUEsRUFDTjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBO0FBQUEsSUFFUixlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsU0FBUztBQUFBLElBQ1AsT0FBTyxFQUFFLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU8sRUFBRTtBQUFBLEVBQ2pEO0FBQUEsRUFDQSxNQUFNO0FBQUE7QUFDUixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
