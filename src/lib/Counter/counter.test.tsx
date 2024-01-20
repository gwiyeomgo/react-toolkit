import { render } from '@testing-library/react';
import { Counter } from '../Counter/counter';
import React from 'react';

it('Counter 렌더링', () => {
  render(
    <Counter
      getDebouncedResult={(r) => {
        console.log(r);
      }}
    />,
  );
});
