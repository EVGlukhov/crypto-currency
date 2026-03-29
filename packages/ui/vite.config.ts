import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(), 
    libInjectCss(),
    dts({
      exclude: ['**/*.stories.tsx'],
    })
  ],
  build: {
    outDir: 'build',
    reportCompressedSize: true,
    copyPublicDir: false,
    cssCodeSplit: true,
    watch: {
      include: 'src/**',
    },
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ui",
      fileName: "ui",
      formats: ['es', 'umd'],
    },
    rolldownOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "React-dom",
          "react/jsx-runtime": "react/jsx-runtime"
        },
      },
      treeshake: {
        moduleSideEffects: false
      }
    },
  },
} satisfies UserConfig);
