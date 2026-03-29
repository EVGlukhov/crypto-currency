import { addons } from 'storybook/manager-api';
import UITheme from './uiTheme';
 
addons.setConfig({
  theme: UITheme,
});