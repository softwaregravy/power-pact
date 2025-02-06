import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

test('renders without crashing', () => {
  render(<div>Test Component</div>);
  expect(screen.getByText('Test Component')).toBeInTheDocument();
});
