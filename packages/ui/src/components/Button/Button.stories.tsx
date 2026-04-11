import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from './Button';

const meta = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  render: () => (
    <div  style={{ width: '80vw', display: 'flex', justifyContent: 'space-between' }}>
      <Button variant='contained' size='small'>Place bid</Button>
      <Button variant='contained' size='medium'>Place bid</Button>
      <Button variant='contained' size='large'>Place bid</Button>
    </div>
    
  )
};