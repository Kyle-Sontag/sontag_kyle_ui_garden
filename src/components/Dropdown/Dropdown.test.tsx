import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  test('renders and is visible', () => {
    render(<Dropdown options={['Option1', 'Option2', 'Option3']} />);
    const element = screen.getByTestId('dropdown');
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
  });

  test('changes background colour when disabled', () => {
    const { rerender } = render(
      <Dropdown
        options={['Option1', 'Option2', 'Option3']}
        backgroundColor="#ffffff"
      />
    );
    const element = screen.getByTestId('dropdown');

    expect(element).toHaveStyle('background-color: #ffffff');

    rerender(
      <Dropdown
        options={['Option1', 'Option2', 'Option3']}
        backgroundColor="#ffffff"
        disabled={true}
      />
    );
    expect(element).toHaveStyle('background-color: #cccccc');
  });
});
