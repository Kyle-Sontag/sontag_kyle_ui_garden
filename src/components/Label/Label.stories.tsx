import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    backgroundColor: { control: 'color'},
    disabled: { control: 'boolean'},
    fontSize: { control: 'text'},
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    disabled: false,
    backgroundColor: '#333333',
    children: 'Form Label',
    fontSize: '14px',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Label',
  },
};