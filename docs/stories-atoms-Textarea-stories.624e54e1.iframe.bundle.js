'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [1658],
  {
    './src/stories/atoms/Textarea.stories.tsx': (
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
          title: '1.Atoms/Textarea',
          component: __webpack_require__('./src/lib/Textarea/textarea.tsx').T,
          tags: ['autodocs'],
        },
        Default = { args: {} };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: '{\n  args: {}\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      };
      let __namedExportsOrder = ['Default'];
    },
    './src/lib/Textarea/textarea.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { T: () => Textarea });
      var _templateObject,
        _Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js',
          );
      __webpack_require__('./node_modules/react/index.js');
      var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      let StyledTextarea =
          styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.textarea(
            _templateObject ||
              (_templateObject = (0,
              _Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
                [
                  '\n  width: calc(100% - 32px);\n  outline: none;\n  border-radius: 10px;\n  ',
                  '\n  padding:20px;\n  font-size: 16px;\n  line-height: 20px;\n  border: 0px;\n  box-shadow:\n    rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n',
                ],
              )),
            (props) =>
              props.height && ' height: '.concat(props.height, 'px;\n    '),
          ),
        Textarea = (props) => {
          let { height, value, onChange } = props;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            StyledTextarea,
            {
              className: props.className,
              style: props.style,
              height: height,
              value: value,
              onChange: onChange,
            },
          );
        };
      try {
        (Textarea.displayName = 'Textarea'),
          (Textarea.__docgenInfo = {
            description: '',
            displayName: 'Textarea',
            props: {
              height: {
                defaultValue: null,
                description: '',
                name: 'height',
                required: !1,
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
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !1,
                type: { name: 'string' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: 'ChangeEventHandler<HTMLTextAreaElement>' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/lib/Textarea/textarea.tsx#Textarea'] =
              {
                docgenInfo: Textarea.__docgenInfo,
                name: 'Textarea',
                path: 'src/lib/Textarea/textarea.tsx#Textarea',
              });
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
]);
