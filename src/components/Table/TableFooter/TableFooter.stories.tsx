import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableFooter } from './TableFooter';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/Table/TableFooter',
  component: TableFooter,
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
type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {
  args: {
    disabled: false,
    children: (
      <>
        <td>TableFooter #1</td>
        <td>TableFooter #2</td>
        <td>TableFooter #3</td>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <td>DisabledFooter #1</td>
        <td>DisabledFooter #2</td>
        <td>DisabledFooter #3</td>
      </>
    ),
  },
};