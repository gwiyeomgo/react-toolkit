'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [6673, 4691, 945],
  {
    './src/stories/organisms/Counter.stories.tsx': (
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
          title: '3.Organisms/Counter',
          component: __webpack_require__('./src/lib/Counter/counter.tsx').p,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
        },
        Default = {
          args: {
            getDebouncedResult: (value) => {
              try {
                console.log(' debounced value:', value);
              } catch (error) {
                console.error('Error calling API:', error);
              }
            },
          },
        };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    getDebouncedResult: value => {\n      try {\n        console.log(' debounced value:', value);\n      } catch (error) {\n        console.error('Error calling API:', error);\n      }\n    }\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      };
      let __namedExportsOrder = ['Default'];
    },
  },
]);
