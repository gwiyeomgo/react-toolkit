import { render } from '@testing-library/react';
import { Timeline } from './timeline';
import React from 'react';

it('타임라인테스트', () => {
  render(
    <>
      <Timeline.List>
        <Timeline.Item
          url="/test/2020"
          tag="2020"
          title="2020"
          contents="2020년"
        />
      </Timeline.List>
    </>,
  );
});
//hover

//click
