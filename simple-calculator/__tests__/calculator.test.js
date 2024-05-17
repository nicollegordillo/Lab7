import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../src/app/page';

test('renders calculator', () => {
  render(<Calculator />);
  expect(screen.getByTestId('display').textContent).toBe('0');
});

test('handles number input', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('2'));
  expect(screen.getByTestId('display').textContent).toBe('12');
});

test('handles addition', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('3'));
  fireEvent.click(screen.getByText('='));
  expect(screen.getByTestId('display').textContent).toBe('8');
});

test('shows ERROR for overflow', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByTestId('button-9'));
  fireEvent.click(screen.getByTestId('button-9'));
  fireEvent.click(screen.getByTestId('button-9'));
  fireEvent.click(screen.getByTestId('button-9'));
  fireEvent.click(screen.getByTestId('button-9'));
  fireEvent.click(screen.getByTestId('button-9'));
  fireEvent.click(screen.getByTestId('button-9'));
  fireEvent.click(screen.getByTestId('button-9'));
  fireEvent.click(screen.getByTestId('button-9'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByTestId('button-1'));
  fireEvent.click(screen.getByText('='));
  expect(screen.getByTestId('display').textContent).toBe('ERROR');
});

test('handles up to 9 numbers', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByTestId('button-9'));
  fireEvent.click(screen.getByTestId('button-9'));
  fireEvent.click(screen.getByTestId('button-9'));
  fireEvent.click(screen.getByTestId('button-9'));
  fireEvent.click(screen.getByTestId('button-9'));
  fireEvent.click(screen.getByTestId('button-9'));
  fireEvent.click(screen.getByTestId('button-9'));
  fireEvent.click(screen.getByTestId('button-9'));
  fireEvent.click(screen.getByTestId('button-8'));
  fireEvent.click(screen.getByTestId('button-1'));
  expect(screen.getByTestId('display').textContent).toBe('999999998');
});

test('shows ERROR for negatives', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByTestId('button-9'));
  fireEvent.click(screen.getByText('-'));
  fireEvent.click(screen.getByTestId('button-9'));
  fireEvent.click(screen.getByText('-'));
  fireEvent.click(screen.getByTestId('button-1'));
  fireEvent.click(screen.getByText('='));
  expect(screen.getByTestId('display').textContent).toBe('ERROR');
});
