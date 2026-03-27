// vite.config.ts
import path from "path";
import { defineConfig, loadEnv } from "file:///C:/Users/%ED%99%A9%EB%8B%A4%ED%98%9C/Desktop/etribe_local/dabom_proposal_kblife/dabom-strategy-proposal/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/%ED%99%A9%EB%8B%A4%ED%98%9C/Desktop/etribe_local/dabom_proposal_kblife/dabom-strategy-proposal/node_modules/@vitejs/plugin-react/dist/index.js";
import { viteSingleFile } from "file:///C:/Users/%ED%99%A9%EB%8B%A4%ED%98%9C/Desktop/etribe_local/dabom_proposal_kblife/dabom-strategy-proposal/node_modules/vite-plugin-singlefile/dist/esm/index.js";
import tailwindcss from "file:///C:/Users/%ED%99%A9%EB%8B%A4%ED%98%9C/Desktop/etribe_local/dabom_proposal_kblife/dabom-strategy-proposal/node_modules/@tailwindcss/vite/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\\uD669\uB2E4\uD61C\\Desktop\\etribe_local\\dabom_proposal_kblife\\dabom-strategy-proposal";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    base: "./",
    server: {
      port: 3e3,
      host: "0.0.0.0"
    },
    plugins: [react(), tailwindcss(), ...mode === "production" ? [viteSingleFile()] : []],
    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, ".")
      }
    },
    build: {
      outDir: "dist",
      assetsInlineLimit: 1e8
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxcdUQ2NjlcdUIyRTRcdUQ2MUNcXFxcRGVza3RvcFxcXFxldHJpYmVfbG9jYWxcXFxcZGFib21fcHJvcG9zYWxfa2JsaWZlXFxcXGRhYm9tLXN0cmF0ZWd5LXByb3Bvc2FsXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxcdUQ2NjlcdUIyRTRcdUQ2MUNcXFxcRGVza3RvcFxcXFxldHJpYmVfbG9jYWxcXFxcZGFib21fcHJvcG9zYWxfa2JsaWZlXFxcXGRhYm9tLXN0cmF0ZWd5LXByb3Bvc2FsXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy8lRUQlOTklQTklRUIlOEIlQTQlRUQlOTglOUMvRGVza3RvcC9ldHJpYmVfbG9jYWwvZGFib21fcHJvcG9zYWxfa2JsaWZlL2RhYm9tLXN0cmF0ZWd5LXByb3Bvc2FsL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xyXG5pbXBvcnQgeyB2aXRlU2luZ2xlRmlsZSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXNpbmdsZWZpbGUnO1xyXG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSAnQHRhaWx3aW5kY3NzL3ZpdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgJy4nLCAnJyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGJhc2U6ICcuLycsXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgcG9ydDogMzAwMCxcclxuICAgICAgaG9zdDogJzAuMC4wLjAnLFxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IFtyZWFjdCgpLCB0YWlsd2luZGNzcygpLCAuLi4obW9kZSA9PT0gJ3Byb2R1Y3Rpb24nID8gW3ZpdGVTaW5nbGVGaWxlKCldIDogW10pXSxcclxuICAgIGRlZmluZToge1xyXG4gICAgICAncHJvY2Vzcy5lbnYuQVBJX0tFWSc6IEpTT04uc3RyaW5naWZ5KGVudi5HRU1JTklfQVBJX0tFWSksXHJcbiAgICAgICdwcm9jZXNzLmVudi5HRU1JTklfQVBJX0tFWSc6IEpTT04uc3RyaW5naWZ5KGVudi5HRU1JTklfQVBJX0tFWSlcclxuICAgIH0sXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLicpLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgb3V0RGlyOiAnZGlzdCcsXHJcbiAgICAgIGFzc2V0c0lubGluZUxpbWl0OiAxMDAwMDAwMDAsXHJcbiAgICB9XHJcbiAgfTtcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcWMsT0FBTyxVQUFVO0FBQ3RkLFNBQVMsY0FBYyxlQUFlO0FBQ3RDLE9BQU8sV0FBVztBQUNsQixTQUFTLHNCQUFzQjtBQUMvQixPQUFPLGlCQUFpQjtBQUp4QixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN4QyxRQUFNLE1BQU0sUUFBUSxNQUFNLEtBQUssRUFBRTtBQUNqQyxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsU0FBUyxDQUFDLE1BQU0sR0FBRyxZQUFZLEdBQUcsR0FBSSxTQUFTLGVBQWUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUU7QUFBQSxJQUN0RixRQUFRO0FBQUEsTUFDTix1QkFBdUIsS0FBSyxVQUFVLElBQUksY0FBYztBQUFBLE1BQ3hELDhCQUE4QixLQUFLLFVBQVUsSUFBSSxjQUFjO0FBQUEsSUFDakU7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLEdBQUc7QUFBQSxNQUNsQztBQUFBLElBQ0Y7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLG1CQUFtQjtBQUFBLElBQ3JCO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
