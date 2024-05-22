import * as React from 'react';
type TimeLineItemProps = {
  url?: string;
  tag?: string;
  title?: string;
  contents?: string;
};
declare const Timeline: {
  List: ({ children }: { children?: React.ReactNode }) => React.JSX.Element;
  Item: ({ url, tag, title, contents }: TimeLineItemProps) => React.JSX.Element;
};
export { Timeline };
