import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows access from the local network
    port: 5173, // Optional: specify the port
  },
});

