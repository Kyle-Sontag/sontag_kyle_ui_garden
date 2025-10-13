import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color'},
    disabled: { control: 'boolean'},
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    disabled: false,
    title: 'Card Title',
    content: 'This is the content for the card',
    imageUrl: 'https://placehold.co/400x200'
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    title: 'Disabled Card',
    content: 'Content of a disabled card',
    imageUrl: 'https://placehold.co/400x200',
  },
};

export const WithoutImage: Story = {
  args: {
    disabled: false,
    title: 'Card With no Image',
    content: 'This is a card without an image',
  }
}