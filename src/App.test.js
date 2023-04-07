import { render, screen } from '@testing-library/react';
import App from './App';
import {Home} from './components/exports'

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/check My dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
