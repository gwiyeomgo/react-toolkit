import { render } from '@testing-library/react';
import { Avatar } from './avatar';
import React from 'react';
it('Avatar 렌더링', () => {
  render(React.createElement(Avatar, { src: '' }));
});
it('Avatar imageBorderRadius 렌더링', () => {
  render(React.createElement(Avatar, { src: '', imageBorderRadius: 10 }));
});
