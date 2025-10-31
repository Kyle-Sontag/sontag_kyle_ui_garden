import { render, screen } from '@testing-library/react';
import { TableCell } from './TableCell';

describe('TableCell', () => {
  test('renders and is visible', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Test Cell</TableCell>
          </tr>
        </tbody>
      </table>
    );
    const element = screen.getByTestId('table-cell');
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
  });

  test('changes background colour when disabled', () => {
    const { rerender } = render(
      <table>
        <tbody>
          <tr>
            <TableCell backgroundColor="transparent">Test Cell</TableCell>
          </tr>
        </tbody>
      </table>
    );
    const element = screen.getByTestId('table-cell');

    expect(element).toHaveStyle('background-color: transparent');

    rerender(
      <table>
        <tbody>
          <tr>
            <TableCell backgroundColor="transparent" disabled={true}>
              Test Cell
            </TableCell>
          </tr>
        </tbody>
      </table>
    );
    expect(element).toHaveStyle('background-color: #cccccc');
  });
});
