import { render, screen } from '@testing-library/react';
import { HeroImage } from './HeroImage';

describe('HeroImage', () => {
  test('renders and is visible', () => {
    render(<HeroImage src="https://placehold.co/1200x400" alt="Test Hero" />);
    const element = screen.getByTestId('hero-image');
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
  });

  test('changes background colour when disabled', () => {
    const { rerender } = render(
      <HeroImage
        src="https://placehold.co/1200x400"
        alt="Test Hero"
        backgroundColor="#000000"
      />
    );
    const element = screen.getByTestId('hero-image');

    expect(element).toHaveStyle('background-color: #000000');

    rerender(
      <HeroImage
        src="https://placehold.co/1200x400"
        alt="Test Hero"
        backgroundColor="#000000"
        disabled={true}
      />
    );
    expect(element).toHaveStyle('background-color: #cccccc');
  });
});
