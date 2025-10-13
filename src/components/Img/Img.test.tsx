import { render, screen } from '@testing-library/react';
import { Img } from './Img';

describe('Img', () => {
  test('renders and is visible', () => {
    render(<Img src="https://placehold.co/400x300" alt="Test Image" />);
    const element = screen.getByTestId('img');
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
  });

  test('changes background colour when disabled', () => {
    const { rerender } = render(<Img src="https://placehold.co/400x300" alt="Test Image" backgroundColor="transparent"/>);
    const element = screen.getByTestId('img');

    expect(element).toHaveStyle('background-color: transparent');

    rerender(<Img src="https://placehold.co/400x300" alt="Test Image" backgroundColor="transparent" disabled={true} />);
    expect(element).toHaveStyle('background-color: #cccccc');
  });
});