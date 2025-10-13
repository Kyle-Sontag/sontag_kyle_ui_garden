import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('renders and is visible', () => {
    render(<Button>Test Button</Button>);
    const element = screen.getByTestId('button');
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
  });

  test('changes background colour when disabled', () => {
    const { rerender } = render(<Button backgroundColor="#007bff">Test Button</Button>);
    const element = screen.getByTestId('button');

    expect(element).toHaveStyle('background-color: #007bff');

    rerender(<Button backgroundColor="#007bff" disabled={true}>Test Button</Button>);
    expect(element).toHaveStyle('background-color: #cccccc');
  });
});