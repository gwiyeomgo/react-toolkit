import { render } from '@testing-library/react';
import React from 'react';
import { AnalogClock } from './analogClock';

it('Clock 렌더링', () => {
  render(<AnalogClock />);
});
