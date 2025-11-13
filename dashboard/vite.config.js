import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: "https://dashboard.filipe-motta.com/",
    server: {
        hmr: {
            host: "https://portfoliobackend-c34d.onrender.com",
        },
    },
});
