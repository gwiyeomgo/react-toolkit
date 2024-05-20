import { render } from '@testing-library/react';
import React from 'react';
import { Calculator } from './calculator';

it('Calculator 렌더링', async () => {
  render(<Calculator />);
});
