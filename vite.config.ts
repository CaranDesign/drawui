import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"

export default defineConfig(({ command }) => ({
  plugins: [
    react(),

    // create i .d.ts only in build
    command === "build" &&
      dts({
        entryRoot: "src",
        outDir: "dist",
        insertTypesEntry: true
      })
  ],

  // use playground only in dev
  root: command === "serve" ? "playground" : undefined,

  build: {
    lib: {
      entry: "src/index.ts",
      name: "DrawUI",
      fileName: (format) => `drawui.${format}.js`,
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: ["react", "react-dom"]
    }
  }
}))
