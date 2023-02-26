import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WrappedApp } from './App';

describe('App', () => {
  it('renders Welcome', () => {
    // Arrange - get our tests setup
    // ACT - Do the things that user does
    // EXPECT - Assert the output
    render(<WrappedApp />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello, React TypeScript Vite');
  });
});
