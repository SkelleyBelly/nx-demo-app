import { render } from '@testing-library/react';

import { Primary } from './greetings.stories'; //👈 Our stories imported here.

it('Checks if the form is valid', () => {
  const {  getByText } = render(<Primary name="Nathan"/>);

  const name = getByText("Hello there, Nathan")

  expect(name).toBeTruthy()
});