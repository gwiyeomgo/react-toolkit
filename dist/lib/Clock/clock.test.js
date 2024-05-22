import { render } from '@testing-library/react';
import { Clock } from '../Clock/clock';
import React from 'react';
it('Clock 렌더링', () => {
  render(React.createElement(Clock, { date: new Date() }));
});
