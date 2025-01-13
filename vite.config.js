import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/test_task_react/", // Укажите имя вашего репозитория на GitHub
});
