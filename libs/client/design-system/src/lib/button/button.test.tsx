import { render, screen } from '@testing-library/react';
import { ButtonProps } from './button';

import { Primary } from './button.stories'; //👈 Our stories imported here.

const defaultProps: ButtonProps = {
  children: 'Click me',
  onClick: jest.fn(),
};

describe('Button component', () => {
  it('should render with the correct content', () => {
    render(<Primary {...defaultProps} />);

    expect(screen.getByRole('button', { name: 'Click me' })).toBeTruthy();
  });

  it.todo('should call onClick when clicked');
});
