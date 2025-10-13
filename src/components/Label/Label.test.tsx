import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label', () => {
  test('renders and is visible', () => {
    render(<Label>Test Label</Label>);
    const element = screen.getByTestId('label');
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
  });

  test('changes background colour when disabled', () => {
    const { rerender } = render(<Label backgroundColor="#333333">Test Label</Label>);
    const element = screen.getByTestId('label');

    expect(element).toHaveStyle('background-color: #333333');

    rerender(<Label backgroundColor="#333333" disabled={true}>Test Label</Label>);
    expect(element).toHaveStyle('background-color: #cccccc');
  });
});