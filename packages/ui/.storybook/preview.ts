import { definePreview } from '@storybook/react-vite'
import addonDocs from '@storybook/addon-docs';
import uiTheme from './uiTheme'

export default definePreview({
  addons: [addonDocs()],
  parameters: {
    initialGlobals: {
      backgrounds: { value: 'dark' },
    },
    docs: {
      theme: uiTheme,
    },
  },
})