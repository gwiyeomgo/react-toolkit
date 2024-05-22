import { render } from '@testing-library/react';
import { Message } from './message';
import React from 'react';
it('Message 렌더링', () => {
  render(React.createElement(Message, { id: 1 }));
});
