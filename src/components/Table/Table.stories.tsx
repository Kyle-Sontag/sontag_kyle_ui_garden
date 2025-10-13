import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Table } from './Table';
import { TableHeader } from './TableHeader/TableHeader'
import { TableFooter } from './TableFooter/TableFooter'
import { TableRow } from './TableRow/TableRow'
import {TableCell} from './TableCell/TableCell'

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color'},
    disabled: { control: 'boolean'},
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    disabled: false,
    children: (
      <>
        <TableHeader>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Kyle</TableCell>
            <TableCell>23</TableCell>
            <TableCell>Male</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Mila</TableCell>
            <TableCell>23</TableCell>
            <TableCell>Female</TableCell>
          </TableRow>
        </tbody>
        <TableFooter>
          <td colSpan={3}>2 Entries</td>
        </TableFooter>
      </>
    )
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <TableHeader>
          <th>Header 1</th>
          <th>Header 2</th>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Disabled</TableCell>
            <TableCell>Disabled</TableCell>
          </TableRow>
        </tbody>
        <TableFooter>
          <td colSpan={2}>Disbaled Data</td>
        </TableFooter>
      </>
    )
  },
};