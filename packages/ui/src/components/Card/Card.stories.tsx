import type { Meta, StoryObj } from '@storybook/react-vite';
import Card from './Card';

const meta = {
  component: Card,
  title: 'Card',
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    name: 'Sun-Glass',
    bid: 1.75,
    timestamp: new Date(),
    size: 'small'
  },
};

export const Medium: Story = {
  args: {
    name: 'Sun-Glass',
    bid: 1.75,
    timestamp: new Date(),
    size: 'medium'
  },
};  

export const Large: Story = { 
  args: {
    name: 'Sun-Glass',
    bid: 1.75,
    timestamp: new Date(),
    size: 'large'
  },
};