import * as React from 'react';
import { Timeline } from '@gwiyeomgo/react-toolkit';

const App = () => {
  return (
    <Timeline.List>
      <Timeline.Item
        url="/test/2020"
        tag="2020"
        title="2020"
        contents="2020년"
      />
      <Timeline.Item
        url="/test/2021"
        tag="2021"
        title="2021"
        contents="2021년"
      />
      <Timeline.Item
        url="/test/2022"
        tag="2022"
        title="2022"
        contents="2022년"
      />
    </Timeline.List>
  );
};

export default App;
