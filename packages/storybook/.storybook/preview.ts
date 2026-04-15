import { definePreview } from "@storybook/react-vite";
import addonThemes from "@storybook/addon-themes";
import addonA11y from "@storybook/addon-a11y";
import addonDocs from "@storybook/addon-docs";
import uiTheme from "./uiTheme";

// import "@crypto-currency/styles.scss";

export default definePreview({
  addons: [addonDocs(), addonA11y(), addonThemes()],
  parameters: {
    options: {
      storySort: {
        order: ["Overview", ["Introduction", "Colors"], "Components"],
        locales: "en-US",
      },
    },

    initialGlobals: {
      backgrounds: { value: "dark" },
    },

    docs: {
      theme: uiTheme,
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
});
