import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text', () => {
  test('renders and is visible', () => {
    render(<Text>Test Text</Text>);
    const element = screen.getByTestId('text');
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
  });

  test('changes background colour when disabled', () => {
    const { rerender } = render(<Text backgroundColor="transparent">Test Text</Text>);
    const element = screen.getByTestId('text');

    expect(element).toHaveStyle('background-color: transparent');

    rerender(<Text backgroundColor="transparent" disabled={true}>Test Text</Text>);
    expect(element).toHaveStyle('background-color: #cccccc');
  });
});