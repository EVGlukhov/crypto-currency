import type { Meta, StoryObj } from '@storybook/react-vite';
import Card from './Card';

const meta = {
  component: Card,
  title: 'Components/Card',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: 'Sun-Glass',
    bid: 1.75,
    timestamp: new Date(),
    size: 'small'
  },
};
