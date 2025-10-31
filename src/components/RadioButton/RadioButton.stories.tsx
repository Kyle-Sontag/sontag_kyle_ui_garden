import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    disabled: false,
    label: 'options',
    name: 'radio button',
    value: 'option',
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'disabled options',
    name: 'disabled radio button',
    value: 'diabled option',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    disabled: false,
    label: 'options',
    name: 'radio button',
    value: 'selected',
    checked: true,
  },
};
