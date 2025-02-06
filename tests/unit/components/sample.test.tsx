import { render, screen } from '@testing-library/react';
import { describe, expect,it } from 'vitest';

describe('Sample Component', () => {
  it('should render hello world', () => {
    render(<div>Hello World</div>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
