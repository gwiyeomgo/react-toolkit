'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [4678, 4691, 945],
  {
    './src/stories/atoms/Clock.stories.tsx': (
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
          title: '1.Atoms/Clock',
          component: __webpack_require__('./src/lib/index.ts').zD,
          tags: ['autodocs'],
        },
        Default = { args: { date: new Date() } };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: '{\n  args: {\n    date: new Date()\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      };
      let __namedExportsOrder = ['Default'];
    },
  },
]);
