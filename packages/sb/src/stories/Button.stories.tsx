import type { StoryObj } from '@storybook/react-vite';
import { Button } from '@crypto-currency/ui';

const meta = {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    variant: 'contained',
    size: 'small',
    disabled: false,
    children: 'Place bid'
  }
};