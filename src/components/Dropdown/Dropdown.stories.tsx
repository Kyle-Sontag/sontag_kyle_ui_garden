import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    disabled: false,
    options: ['Option1', 'Option2', 'Option3'],
    placeholder: 'Select an option',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options: ['Option1', 'Option2', 'Option3'],
    placeholder: 'Disabled dropdown',
  },
};

export const Selected: Story = {
  args: {
    disabled: false,
    options: ['1', '2', '3'],
    placeholder: 'Select a number',
    value: '2',
  },
};
