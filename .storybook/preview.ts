import type { Preview } from '@storybook/react';

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
