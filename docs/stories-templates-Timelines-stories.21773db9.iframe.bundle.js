'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [523, 4691, 945],
  {
    './src/stories/templates/Timelines.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      let __WEBPACK_DEFAULT_EXPORT__ = {
          title: '4.Templates/TimeLines',
          component: __webpack_require__('./src/lib/index.ts').zw,
          tags: ['autodocs'],
        },
        Default = {
          args: {
            data: [
              {
                id: 1,
                url: '/test/2020',
                tag: '2020',
                title: '입사',
                contents: '2020년 ** 에 입사했습니다.',
              },
              {
                id: 2,
                url: '/test/2021',
                tag: '2021',
                title: '1년차 회고',
                contents: '1년차 개발자가 되었습니다.',
              },
              {
                id: 3,
                url: '/test/2022',
                tag: '2022',
                title: '꾸준하게 공부 하자!!!',
                contents: '배울게 너무 많다...',
              },
            ],
          },
        };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: '{\n  args: {\n    data: data\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      };
      let __namedExportsOrder = ['Default'];
    },
  },
]);
