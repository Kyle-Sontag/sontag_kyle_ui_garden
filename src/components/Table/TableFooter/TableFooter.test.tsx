import { render, screen } from '@testing-library/react';
import { TableFooter } from './TableFooter';

describe('TableFooter', () => {
  test('renders and is visible', () => {
    render(
      <table>
        <TableFooter>
          <td>Test</td>
        </TableFooter>
      </table>
    );
    const element = screen.getByTestId('table-footer');
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
  });

  test('changes background colour when disabled', () => {
    const { rerender } = render(
      <table>
        <TableFooter backgroundColor="#f0f0f0">
          <td>Test</td>
        </TableFooter>
      </table>
    );
    const element = screen.getByTestId('table-footer');

    expect(element).toHaveStyle('background-color: #f0f0f0');

    rerender(
      <table>
        <TableFooter backgroundColor="#f0f0f0" disabled={true}>
          <td>Test</td>
        </TableFooter>
      </table>
    );
    expect(element).toHaveStyle('background-color: #cccccc');
  });
});
