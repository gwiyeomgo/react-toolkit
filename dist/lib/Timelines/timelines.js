import { Timeline } from './timeline';
import React from 'react';
const Timelines = ({ data }) => {
  return React.createElement(
    Timeline.List,
    null,
    data.map((item) =>
      React.createElement(Timeline.Item, {
        key: item.id,
        url: item.url,
        tag: item.tag,
        title: item.title,
        contents: item.contents,
      }),
    ),
  );
};
export { Timelines };
