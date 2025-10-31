import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Img } from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    disabled: false,
    src: 'https://placehold.co/400x300',
    alt: 'Placeholder image',
    width: '400px',
    height: '300px',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    src: 'https://placehold.co/400x300',
    alt: 'Disabled image',
  },
};
