import type { Preview } from "@storybook/react-vite";
import uiTheme from "./uiTheme";

const preview: Preview = {
  parameters: {
    docs: {
      theme: uiTheme,
    },
  },
};

export default preview;
