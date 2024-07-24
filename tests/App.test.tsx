import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';

import App from '../src/App';
import React from 'react';

describe('App', () => {
  it('renders the App component', () => {
    render(<App />);

    screen.debug();
  });
});
