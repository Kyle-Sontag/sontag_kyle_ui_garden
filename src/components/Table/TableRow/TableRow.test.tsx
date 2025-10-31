import { render, screen } from '@testing-library/react';
import { TableRow } from './TableRow';

describe('TableRow', () => {
  test('renders and is visible', () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <td>Test</td>
          </TableRow>
        </tbody>
      </table>
    );
    const element = screen.getByTestId('table-row');
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
  });

  test('changes background colour when disabled', () => {
    const { rerender } = render(
      <table>
        <tbody>
          <TableRow backgroundColor="transparent">
            <td>Test</td>
          </TableRow>
        </tbody>
      </table>
    );
    const element = screen.getByTestId('table-row');

    expect(element).toHaveStyle('background-color: transparent');

    rerender(
      <table>
        <tbody>
          <TableRow backgroundColor="transparent" disabled={true}>
            <td>Test</td>
          </TableRow>
        </tbody>
      </table>
    );
    expect(element).toHaveStyle('background-color: #cccccc');
  });
});
