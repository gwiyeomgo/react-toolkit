import { render } from '@testing-library/react';
import { Timeline } from './timeline';
import React from 'react';
it('타임라인테스트', () => {
  render(
    React.createElement(
      React.Fragment,
      null,
      React.createElement(
        Timeline.List,
        null,
        React.createElement(Timeline.Item, {
          url: '/test/2020',
          tag: '2020',
          title: '2020',
          contents: '2020\uB144',
        }),
      ),
    ),
  );
});
//hover
//click
