import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableHeader } from './TableHeader';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/Table/TableHeader',
  component: TableHeader,
  argTypes: {
    backgroundColor: { control: 'color'},
    disabled: { control: 'boolean'},
  },
  decorators: [
    (Story) => (
      <table>
          <Story />
      </table>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: {
    disabled: false,
    children: (
      <>
        <th>TableHeader #1</th>
        <th>TableHeader #2</th>
        <th>TableHeader #3</th>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <th>TableHeader #1</th>
        <th>TableHeader #2</th>
        <th>TableHeader #3</th>
      </>
    ),
  },
};