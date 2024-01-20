import { render } from '@testing-library/react';
import React from 'react';
import { Timelines } from './timelines';
//import userEvent from '@testing-library/user-event';

const data = [
  {
    id: 1,
    url: '/test/2020',
    tag: '2020',
    title: '입사',
    contents: '2020년 ** 에 입사했습니다.',
  },
];
it('Timelines 테스트', () => {
  render(
    <>
      <Timelines data={data} />
    </>,
  );
});
