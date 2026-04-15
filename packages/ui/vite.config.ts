import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import dts from 'vite-plugin-dts'
import cleanPlugin from 'vite-plugin-clean'

export default defineConfig({
  plugins: [
    cleanPlugin(),
    react(), 
    libInjectCss(),
    dts({
      rollupTypes: true,
      exclude: ['node_modules/**']
    })
  ],
  build: {
    outDir: 'build',
    reportCompressedSize: true,
    cssCodeSplit: false,
    lib: {
      entry: resolve(import.meta.dirname, "./src/index.ts"),
      name: "ui",
      fileName: "ui",
      formats: ['es', 'umd'],
    },
    rolldownOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        assetFileNames: 'ui.[ext]',
        preserveModules: false,
        codeSplitting: false,
        minify: false,
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
  resolve: {
    tsconfigPaths: true,
    alias: {
      '@': resolve(import.meta.dirname, './src'),
    },
  },
  publicDir: 'public'
} satisfies UserConfig);
