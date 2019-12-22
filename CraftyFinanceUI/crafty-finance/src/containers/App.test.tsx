import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders asset section', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Assets/i);
  expect(linkElement).toBeInTheDocument();
});
