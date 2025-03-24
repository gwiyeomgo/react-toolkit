'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [1736, 4691, 945],
  {
    './src/stories/atoms/Button.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ButtonWithDanger: () => ButtonWithDanger,
          ButtonWithLoading: () => ButtonWithLoading,
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      let __WEBPACK_DEFAULT_EXPORT__ = {
          title: '1.Atoms/Button',
          component: __webpack_require__('./src/lib/index.ts').$n,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: {
            type: {
              control: 'select',
              options: ['primary', 'secondary'],
              description: '버튼 유형 선택',
            },
            disabled: { control: 'select', options: [!0, !1] },
            danger: { control: 'select', options: [!0, !1] },
          },
        },
        Default = { args: { type: 'primary', children: '버튼', disabled: !1 } },
        ButtonWithLoading = {
          args: {
            type: 'secondary',
            children: '버튼',
            loading: !0,
            disabled: !1,
          },
        },
        ButtonWithDanger = {
          args: { type: 'secondary', danger: !0, children: '버튼' },
        };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    type: 'primary',\n    children: '버튼',\n    disabled: false\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (ButtonWithLoading.parameters = {
          ...ButtonWithLoading.parameters,
          docs: {
            ...ButtonWithLoading.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    type: 'secondary',\n    children: '버튼',\n    loading: true,\n    disabled: false\n  }\n}",
              ...ButtonWithLoading.parameters?.docs?.source,
            },
          },
        }),
        (ButtonWithDanger.parameters = {
          ...ButtonWithDanger.parameters,
          docs: {
            ...ButtonWithDanger.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    type: 'secondary',\n    danger: true,\n    children: '버튼'\n  }\n}",
              ...ButtonWithDanger.parameters?.docs?.source,
            },
          },
        });
      let __namedExportsOrder = [
        'Default',
        'ButtonWithLoading',
        'ButtonWithDanger',
      ];
    },
  },
]);
