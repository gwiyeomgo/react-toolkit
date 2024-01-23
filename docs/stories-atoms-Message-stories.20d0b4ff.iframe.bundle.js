'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [587],
  {
    './src/stories/atoms/Message.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          StyledMessage: () => StyledMessage,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      let __WEBPACK_DEFAULT_EXPORT__ = {
          title: '1.Atoms/Message',
          component: __webpack_require__('./src/lib/Messages/message.tsx').v,
          tags: ['autodocs'],
        },
        Default = { args: { id: 1, children: '안녕하세요.' } },
        StyledMessage = {
          args: {
            id: 2,
            children: 'Hi..안녕하세요.',
            style: {
              backgroundColor: '#62E5C2',
              fontFamily: ' Roboto, Helvetica, Arial, sans-serif',
              fontWeight: 100,
            },
          },
        };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    id: 1,\n    children: '안녕하세요.'\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (StyledMessage.parameters = {
          ...StyledMessage.parameters,
          docs: {
            ...StyledMessage.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    id: 2,\n    children: 'Hi..안녕하세요.',\n    style: {\n      backgroundColor: '#62E5C2',\n      fontFamily: ' Roboto, Helvetica, Arial, sans-serif',\n      fontWeight: 100\n    }\n  }\n}",
              ...StyledMessage.parameters?.docs?.source,
            },
          },
        });
      let __namedExportsOrder = ['Default', 'StyledMessage'];
    },
    './src/lib/Messages/message.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { v: () => Message });
      var _templateObject,
        _templateObject2,
        _Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js',
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js',
        );
      __webpack_require__('./node_modules/react/index.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        './node_modules/react/jsx-runtime.js',
      );
      let Container = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              [
                '\n  margin: 10px 30px;\n  padding: 10px;\n  font-family: sans-serif;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-radius: 10px;\n  background-color: #ffffff;\n  border-radius: 10px;\n  width: max-content; /* 수정: min-content 대신 max-content 사용 */\n  max-width: 300px; /* 추가: 부모 요소 크기를 넘지 않도록 최대 너비 설정 */\n  box-shadow:\n    rgba(0, 0, 0, 0.12) 0px 1px 3px,\n    rgba(0, 0, 0, 0.24) 0px 1px 2px;\n  outline: none;\n',
              ],
            )),
        ),
        Text = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              [
                '\n  color: #000000;\n  margin: 0 5px;\n  text-align: left;\n  font-size: 16px;\n  width: 100%;\n  word-wrap: break-word; /* 추가 */\n  max-width: 200px; /* 추가 */\n',
              ],
            )),
        ),
        Message = (_ref) => {
          let { children, className, style } = _ref;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            Container,
            {
              className: className,
              style: style,
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                Text,
                { children: children },
              ),
            },
          );
        };
      try {
        (Message.displayName = 'Message'),
          (Message.__docgenInfo = {
            description: '',
            displayName: 'Message',
            props: {
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !0,
                type: { name: 'number' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/lib/Messages/message.tsx#Message'] = {
              docgenInfo: Message.__docgenInfo,
              name: 'Message',
              path: 'src/lib/Messages/message.tsx#Message',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
]);
