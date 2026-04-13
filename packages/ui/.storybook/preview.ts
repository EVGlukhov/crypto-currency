import { definePreview } from "@storybook/react-vite";
// import addonThemes from "@storybook/addon-themes";
// import addonA11y from "@storybook/addon-a11y";
import addonDocs from "@storybook/addon-docs";
import uiTheme from "./uiTheme";

// import '@ui/styles/reset.scss';
// import '@ui/styles/storybook.scss';

export default definePreview({
  addons: [addonDocs()],
  parameters: {
    options: {
      storySort: {
        order: ['Overview', ['Introduction', 'Colors'], 'Components'],
        locales: 'en-US',
      },
    },
    initialGlobals: {
      backgrounds: { value: "dark" },
    },
    docs: {
      theme: uiTheme,
    },
  },
});
