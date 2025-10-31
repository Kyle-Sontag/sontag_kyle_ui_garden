import { render, screen } from '@testing-library/react';
import { TableHeader } from './TableHeader';

describe('TableHeader', () => {
  test('renders and is visible', () => {
    render(
      <table>
        <TableHeader>
          <th>Test</th>
        </TableHeader>
      </table>
    );
    const element = screen.getByTestId('table-header');
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
  });

  test('changes background colour when disabled', () => {
    const { rerender } = render(
      <table>
        <TableHeader backgroundColor="#f0f0f0">
          <th>Test</th>
        </TableHeader>
      </table>
    );
    const element = screen.getByTestId('table-header');

    expect(element).toHaveStyle('background-color: #f0f0f0');

    rerender(
      <table>
        <TableHeader backgroundColor="#f0f0f0" disabled={true}>
          <th>Test</th>
        </TableHeader>
      </table>
    );
    expect(element).toHaveStyle('background-color: #cccccc');
  });
});
