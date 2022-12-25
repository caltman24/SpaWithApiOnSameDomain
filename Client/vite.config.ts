import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from "dns";
import { resolve } from 'path';
import {readFileSync} from "fs"

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    https: {
      cert: readFileSync(resolve("localhost.pem")),
      key: readFileSync(resolve("localhost-key.pem"))
    }
  }
})
