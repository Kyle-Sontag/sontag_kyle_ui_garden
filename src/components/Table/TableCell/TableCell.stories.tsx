import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableCell } from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'Components/Table/TableCell',
  component: TableCell,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    Story => (
      <table>
        <tbody>
          <tr>
            <Story />
          </tr>
        </tbody>
      </table>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
  args: {
    disabled: false,
    children: 'Table cells',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled cells',
  },
};
