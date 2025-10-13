import { render, screen } from '@testing-library/react';
import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  test('renders and is visible', () => {
    render(<RadioButton label="Test Radio" name="Test" value="Test value"/>);
    const element = screen.getByTestId('radio-button');
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
  });

  test('changes background colour when disabled', () => {
    const { rerender } = render(<RadioButton label="Test Radio" name="Test" value="Test value" backgroundColor="transparent"/>);
    const element = screen.getByTestId('radio-button');

    expect(element).toHaveStyle('background-color: transparent');

    rerender(<RadioButton label="Test Radio" name="Test" value="Test value" backgroundColor="transparent" disabled={true}/>);
    expect(element).toHaveStyle('background-color: #cccccc');
  });
});