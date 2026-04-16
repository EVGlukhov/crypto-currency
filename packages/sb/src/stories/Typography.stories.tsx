import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from '@crypto-currency/ui';

const meta = {
  component: Typography,
  title: 'Components/Typography',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    children: 'Hello world',
  },
  render: (args) => {
    return <Typography {...args} />
  }
} satisfies Story;
