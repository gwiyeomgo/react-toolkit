import React from 'react';
type TimelinesProps = {
  id: number;
  url?: string;
  tag?: string;
  title?: string;
  contents?: string;
};
declare const Timelines: React.FC<{
  data: TimelinesProps[];
}>;
export { Timelines, TimelinesProps };
