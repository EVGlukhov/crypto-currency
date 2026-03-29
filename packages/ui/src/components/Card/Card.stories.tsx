 
 import type { Meta, StoryObj } from '@storybook/react-vite';

import Card from './Card';

const meta = {
  component: Card,
  title: 'Card',
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Sun-Glass',
    bid: 1.75,
    timestamp: new Date()
  },
};
