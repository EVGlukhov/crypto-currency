import type { Meta, StoryObj } from '@storybook/react-vite';
import Button, { type Props as ButtonProps } from './Button';

const meta = {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained']
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    disabled: {
      control: 'boolean'
    }
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  args: {
    variant: 'contained',
    size: 'small',
    disabled: false
  },
  render: (args: ButtonProps) => <Button {...args}>Place bid</Button>
};