'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [662],
  {
    './src/stories/atoms/Badge.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          BadgeWithAvatar: () => BadgeWithAvatar,
          BadgeWithNumber: () => BadgeWithNumber,
          BadgeWithNumber2: () => BadgeWithNumber2,
          BadgeWithText: () => BadgeWithText,
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _lib_Badge_badge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/lib/Badge/badge.tsx',
        ),
        _lib_Avatar_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/lib/Avatar/avatar.tsx',
        );
      __webpack_require__('./node_modules/react/index.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        './node_modules/react/jsx-runtime.js',
      );
      let __WEBPACK_DEFAULT_EXPORT__ = {
          title: '1.Atoms/Badge',
          component: _lib_Badge_badge__WEBPACK_IMPORTED_MODULE_0__.E,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: {
            count: {
              control: { type: 'number', min: 0 },
              description: '배찌 안에 숫자 값',
            },
            color: { control: 'color' },
            text: {
              control: { type: 'string' },
              description: '배찌 오른쪽에 위치하는 문자',
            },
            moveLeft: { control: { type: 'number', min: 0, max: 50 } },
            moveBottom: { control: { type: 'number', min: 0, max: 50 } },
            className: { control: { type: 'string' } },
            style: {},
            textStyle: {},
          },
        },
        Default = { args: { color: '#ff4d4f' } },
        BadgeWithText = { args: { text: '안녕하세요', color: 'blue' } },
        BadgeWithNumber = { args: { count: 20, color: '#ff4d4f' } },
        BadgeWithNumber2 = { args: { count: 223230 } },
        BadgeWithAvatar = {
          args: {
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _lib_Avatar_avatar__WEBPACK_IMPORTED_MODULE_1__.e,
              {
                src: 'data:image/jpeg;base64,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',
              },
            ),
            count: 20,
            color: 'orange',
            moveBottom: 30,
            moveLeft: 30,
          },
        };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: "{\n  args: {\n    color: '#ff4d4f'\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (BadgeWithText.parameters = {
          ...BadgeWithText.parameters,
          docs: {
            ...BadgeWithText.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    text: '안녕하세요',\n    color: 'blue'\n  }\n}",
              ...BadgeWithText.parameters?.docs?.source,
            },
          },
        }),
        (BadgeWithNumber.parameters = {
          ...BadgeWithNumber.parameters,
          docs: {
            ...BadgeWithNumber.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    count: 20,\n    color: '#ff4d4f'\n  }\n}",
              ...BadgeWithNumber.parameters?.docs?.source,
            },
          },
        }),
        (BadgeWithNumber2.parameters = {
          ...BadgeWithNumber2.parameters,
          docs: {
            ...BadgeWithNumber2.parameters?.docs,
            source: {
              originalSource: '{\n  args: {\n    count: 223230\n  }\n}',
              ...BadgeWithNumber2.parameters?.docs?.source,
            },
          },
        }),
        (BadgeWithAvatar.parameters = {
          ...BadgeWithAvatar.parameters,
          docs: {
            ...BadgeWithAvatar.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    children: <Avatar src={'data:image/jpeg;base64,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'} />,\n    count: 20,\n    color: 'orange',\n    moveBottom: 30,\n    moveLeft: 30\n  }\n}",
              ...BadgeWithAvatar.parameters?.docs?.source,
            },
          },
        });
      let __namedExportsOrder = [
        'Default',
        'BadgeWithText',
        'BadgeWithNumber',
        'BadgeWithNumber2',
        'BadgeWithAvatar',
      ];
    },
  },
]);
