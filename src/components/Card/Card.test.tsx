import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  test('renders and is visible', () => {
    render(<Card title="Test Card" content="Test Content" />);
    const element = screen.getByTestId('card');
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
  });

  test('changes background colour when disabled', () => {
    const { rerender } = render(
      <Card
        title="Test Card"
        content="Test Content"
        backgroundColor="#ffffff"
      />
    );
    const element = screen.getByTestId('card');

    expect(element).toHaveStyle('background-color: #ffffff');

    rerender(
      <Card
        title="Test Card"
        content="Test Content"
        backgroundColor="#ffffff"
        disabled={true}
      />
    );
    expect(element).toHaveStyle('background-color: #cccccc');
  });
});
