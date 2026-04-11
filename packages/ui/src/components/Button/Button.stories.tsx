import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from './Button';

const meta = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const ContainedSmall: Story = {
  render: () => <Button variant='contained' size='small'>Place bid</Button>
};

export const ContainedMedium: Story = {
  render: () => <Button variant='contained' size='medium'>Place bid</Button>
};

export const ContainedLarge: Story = {
  render: () => <Button variant='contained' size='large'>Place bid</Button>
};