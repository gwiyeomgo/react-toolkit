import type { Preview } from '@storybook/react';
import ReactGA from "react-ga4";

ReactGA.initialize('G-1F4HHWF098', {
  gtagOptions: {
    debug_mode: true,
    content_group: 'storybook'
  }
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    previewTabs: {
      canvas: {
        hidden: true, // Canvas는 선택할 수 없도록 막습니다.
      },
    },
  },
};

export default preview;
