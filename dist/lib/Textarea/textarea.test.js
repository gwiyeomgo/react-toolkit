import { render } from '@testing-library/react';
import { Textarea } from '../Textarea/textarea';
import React from 'react';
it('Textarea 렌더링', () => {
  render(React.createElement(Textarea, { height: 10 }));
});
