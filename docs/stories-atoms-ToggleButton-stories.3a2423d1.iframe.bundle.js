'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [740],
  {
    './src/stories/atoms/ToggleButton.stories.tsx': (
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
          title: '1.Atoms/ToggleButton',
          component: __webpack_require__('./src/lib/index.ts').ff,
          tags: ['autodocs'],
          argTypes: {
            id: { type: 'string' },
            toggled: { control: 'select', options: [!0, !1] },
          },
        },
        Default = { args: { id: 'test-switch', toggled: !0 } };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    id: 'test-switch',\n    toggled: true\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      };
      let __namedExportsOrder = ['Default'];
    },
  },
]);
