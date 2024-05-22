import { render } from '@testing-library/react';
import { SelectBox } from '../SelectBox/selectBox';
import React from 'react';
it('SelectBox 렌더링', () => {
  render(
    React.createElement(SelectBox, {
      data: [
        {
          id: 1,
          value: 'A',
          label: 'Option 1',
        },
      ],
    }),
  );
});
