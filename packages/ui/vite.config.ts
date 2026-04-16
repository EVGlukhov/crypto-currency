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
    assetsInlineLimit: 0,
    reportCompressedSize: true,
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: {
        ui: "./src/main.ts",
        styles: "./src/styles.scss",
      },
      formats: ['es'],
    },
    rolldownOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        assetFileNames: '[name].[ext]',
        preserveModules: false,
        codeSplitting: true,
        minify: true,
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
