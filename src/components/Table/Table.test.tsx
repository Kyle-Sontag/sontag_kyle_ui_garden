import { render, screen } from '@testing-library/react';
import { Table } from './Table';

describe('Table', () => {
  test('renders and is visible', () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Test</td>
          </tr>
        </tbody>
      </Table>
    );
    const element = screen.getByTestId('table');
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
  });

  test('changes background colour when disabled', () => {
    const { rerender } = render(
      <Table backgroundColor="#ffffff">
        <tbody>
          <tr>
            <td>Test</td>
          </tr>
        </tbody>
      </Table>
    );
    const element = screen.getByTestId('table');

    expect(element).toHaveStyle('background-color: #ffffff');

    rerender(
      <Table backgroundColor="#ffffff" disabled={true}>
        <tbody>
          <tr>
            <td>Test</td>
          </tr>
        </tbody>
      </Table>
    );
    expect(element).toHaveStyle('background-color: #cccccc');
  });
});
