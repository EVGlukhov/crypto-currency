import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(), 
    libInjectCss(),
    dts()
  ],
  build: {
    outDir: 'build',
    reportCompressedSize: true,
    copyPublicDir: false,
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ui",
      fileName: "ui",
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "React-dom",
        },
      },
      treeshake: {
        moduleSideEffects: false
      }
    },
  },
});
