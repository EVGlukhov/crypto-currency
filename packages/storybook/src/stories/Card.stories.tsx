import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '@crypto-currency/ui';

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

export const Basic = {
  args: {
    name: 'Sun-Glass',
    bid: 1.75,
    timestamp: new Date(),
    size: 'small'
  },
  render: (args: React.ComponentProps<typeof Card>) => {
    return <Card {...args} />
  }
} satisfies Story;
