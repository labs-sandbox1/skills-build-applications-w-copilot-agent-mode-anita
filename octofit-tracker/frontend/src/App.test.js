
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders OctoFit Tracker navbar brand', () => {
  render(<App />);
  expect(screen.getByText(/OctoFit Tracker/i)).toBeInTheDocument();
});


test('renders Activities heading and table', () => {
  render(<App />);
  const headings = screen.getAllByRole('heading', { name: /Activities/i });
  expect(headings.length).toBeGreaterThan(0);
  expect(screen.getByText(/Morning Run/i)).toBeInTheDocument();
});


test('navigation switches to Leaderboard view', () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Leaderboard/i));
  const headings = screen.getAllByRole('heading', { name: /Leaderboard/i });
  expect(headings.length).toBeGreaterThan(0);
  expect(screen.getByText(/alice/i)).toBeInTheDocument();
});
