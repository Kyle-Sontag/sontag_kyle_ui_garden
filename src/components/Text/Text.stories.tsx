import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
    fontSize: { control: 'text' },
    fontWeight: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    disabled: false,
    children: 'This is text',
    fontSize: '16px',
    fontWeight: '400',
    color: '#333333',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Text',
  },
};
