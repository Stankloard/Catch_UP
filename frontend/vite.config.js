import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		// Get rid of the CORS error
		proxy: {
			"/api": {
				target: "https://catch-up-tfxn.onrender.com",
				changeOrigin: true,
				secure: false,
			},
		},
	},
});
