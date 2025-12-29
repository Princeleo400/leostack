import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5180, // Set your desired port
    // strictPort: true, // Optional: Exit if port 3000 is unavailable
  },
})
