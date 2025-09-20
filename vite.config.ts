import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	base: "/Mix-Animations-and-Effects-10/",
	plugins: [react(), tailwindcss()],
});
