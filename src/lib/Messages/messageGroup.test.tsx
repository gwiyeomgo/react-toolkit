import { render } from '@testing-library/react';
import React from 'react';
import { MessageGroup } from './messageGroup';

const list = [
  {
    id: 1,
    message: '안녕하세요',
    style: {
      color: '#619290',
    },
  },
];
it('Message 렌더링', () => {
  render(<MessageGroup delay={2000} list={list} />);
});
