import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { defineMain } from '@storybook/react-vite/node';
import { mergeConfig } from 'vite';

export default defineMain({
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@storybook/addon-vitest")
  ],
  framework: getAbsolutePath("@storybook/react-vite"),
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      base: resolve(process.cwd(), '../src/'),
      tsconfigPaths: true,
    }) 
  },
})

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
} 