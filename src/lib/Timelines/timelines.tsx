import { Timeline } from './timeline';
import React from 'react';

type TimelinesProps = {
  id: number;
  url?: string;
  tag?: string;
  title?: string;
  contents?: string;
};

const Timelines: React.FC<{ data: TimelinesProps[] }> = ({ data }) => {
  return (
    <Timeline.List>
      {data.map((item) => (
        <Timeline.Item
          key={item.id}
          url={item.url}
          tag={item.tag}
          title={item.title}
          contents={item.contents}
        />
      ))}
    </Timeline.List>
  );
};

export { Timelines, TimelinesProps };
