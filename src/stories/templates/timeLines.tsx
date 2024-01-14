import { Timeline } from '../../lib/TimeLine/timeLine';
import React from 'react';
const TimeLines = () => {
  return (
    <Timeline.List>
      <Timeline.Item
        url="/test/2020"
        tag="2020"
        title="입사"
        contents="2020년 ** 에 입사했습니다."
      />
      <Timeline.Item
        url="/test/2021"
        tag="2021"
        title="1년차 회고"
        contents="1년차 개발자가 되었습니다."
      />
      <Timeline.Item
        url="/test/2022"
        tag="2022"
        title="꾸준하게 공부 하자!!!"
        contents="배울게 너무 많다..."
      />
    </Timeline.List>
  );
};

export default TimeLines;
