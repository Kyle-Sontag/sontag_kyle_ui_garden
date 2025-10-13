import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableRow } from './TableRow';
import { TableCell } from '../TableCell/TableCell'

const meta: Meta<typeof TableRow> = {
  title: 'Components/Table/TableRow',
  component: TableRow,
  argTypes: {
    backgroundColor: { control: 'color'},
    disabled: { control: 'boolean'},
  },
  decorators: [
    (Story) => (
      <table>
        <tbody>
            <Story />
        </tbody>
      </table>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  args: {
    disabled: false,
    children: (
      <>
        <TableCell>Cell #1</TableCell>
        <TableCell>Cell #2</TableCell>
        <TableCell>Cell #3</TableCell>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <TableCell>Cell #1</TableCell>
        <TableCell>Cell #2</TableCell>
        <TableCell>Cell #3</TableCell>
      </>
    ),
  },
};