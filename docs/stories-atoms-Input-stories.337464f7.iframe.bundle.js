(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [6144, 4691, 945],
  {
    './src/stories/atoms/Input.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          LabelInput: () => LabelInput,
          LabelInputReadOnly: () => LabelInputReadOnly,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      let __WEBPACK_DEFAULT_EXPORT__ = {
          title: '1.Atoms/Input',
          component: __webpack_require__('./src/lib/Input/input.tsx').p,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: {
            value: { control: {}, description: '입력값' },
            label: { control: { type: 'string' } },
            placeholder: { control: { type: 'string' } },
            labelStyle: {},
            readOnly: { type: 'boolean' },
          },
        },
        Default = { args: {} },
        LabelInput = {
          args: {
            label: '이름',
            placeholder: '이름을 입력해 주세요',
            labelStyle: { color: 'red' },
          },
        },
        LabelInputReadOnly = {
          args: { label: '이름은몇자까지들', value: '홍길동', readOnly: !0 },
        };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: '{\n  args: {}\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (LabelInput.parameters = {
          ...LabelInput.parameters,
          docs: {
            ...LabelInput.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    label: '이름',\n    placeholder: '이름을 입력해 주세요',\n    labelStyle: {\n      color: 'red'\n    }\n  }\n}",
              ...LabelInput.parameters?.docs?.source,
            },
          },
        }),
        (LabelInputReadOnly.parameters = {
          ...LabelInputReadOnly.parameters,
          docs: {
            ...LabelInputReadOnly.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    label: '이름은몇자까지들',\n    value: '홍길동',\n    readOnly: true\n  }\n}",
              ...LabelInputReadOnly.parameters?.docs?.source,
            },
          },
        });
      let __namedExportsOrder = ['Default', 'LabelInput', 'LabelInputReadOnly'];
    },
    './src/lib/Input/input.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { p: () => Input });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js',
          ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js',
        ),
        _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/lib/styles.module.css',
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js',
        ),
        classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/classnames/index.js',
        ),
        classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_2__,
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      let InputRoot = styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              [
                '\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  font-weight: 50px;\n  line-height: 1.1em;\n  letter-spacing: 0.00938em;\n  color: black;\n  box-sizing: border-box;\n  cursor: text;\n  align-items: left;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n',
              ],
            )),
        ),
        Label = styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.label(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              [
                '\n  white-space: nowrap;\n  overflow: hidden; /* 내용이 넘칠 경우 숨김 */\n  text-overflow: ellipsis; /* 넘친 부분에 대해 ...으로 표시 */\n',
              ],
            )),
        ),
        InputComponent =
          styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.input(
            _templateObject3 ||
              (_templateObject3 = (0,
              _Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                [
                  '\n  width: 100%;\n  font-size: 1rem;\n  padding: ',
                  ';\n  padding-inline-end: ',
                  ';\n',
                ],
              )),
            (props) => props.padding,
            (props) => props.paddinginlineend,
          ),
        ClearButton = styled_components__WEBPACK_IMPORTED_MODULE_4__.Ay.button(
          _templateObject4 ||
            (_templateObject4 = (0,
            _Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.A)(
              [
                '\n  width: 20px;\n  height: 20px;\n  display: flex;\n  position: relative;\n  padding: 10px;\n  background-color: lightgrey;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  color: white;\n  border-radius: 10px;\n  align-items: center;\n  justify-content: center;\n  margin-right: 10px;\n',
              ],
            )),
        ),
        Input = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
          (props, ref) => {
            let {
                onChange,
                label,
                labelPosition = 'outer',
                labelStyle,
                value,
                typeSearch = !1,
                readOnly,
                ...inputProps
              } = props,
              valid = 'inner' === labelPosition,
              inputRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),
              [inputValue, setInputValue] = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
            (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
              setInputValue(null == value ? '' : String(value));
            }, [value]);
            let clearInputValue = () => {
              inputRef.current &&
                (setInputValue(''), (inputRef.current.value = ''));
            };
            return (
              (0, react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(
                ref,
                () => ({
                  focus,
                  blur: () => {
                    var _inputRef$current;
                    null === (_inputRef$current = inputRef.current) ||
                      void 0 === _inputRef$current ||
                      _inputRef$current.blur();
                  },
                  clear: clearInputValue,
                  setSelectionRange: (start, end, direction) => {
                    var _inputRef$current2;
                    null === (_inputRef$current2 = inputRef.current) ||
                      void 0 === _inputRef$current2 ||
                      _inputRef$current2.setSelectionRange(
                        start,
                        end,
                        direction,
                      );
                  },
                  select: () => {
                    var _inputRef$current3;
                    null === (_inputRef$current3 = inputRef.current) ||
                      void 0 === _inputRef$current3 ||
                      _inputRef$current3.select();
                  },
                  input: inputRef.current,
                }),
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
                InputRoot,
                {
                  children: [
                    label &&
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                        Label,
                        {
                          style: { ...labelStyle },
                          className:
                            classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                              _styles_module_css__WEBPACK_IMPORTED_MODULE_1__.A
                                .defaultLabel,
                              {
                                [_styles_module_css__WEBPACK_IMPORTED_MODULE_1__
                                  .A.innerLabel]: valid,
                              },
                              {
                                [_styles_module_css__WEBPACK_IMPORTED_MODULE_1__
                                  .A.backgroundWhite]: valid,
                              },
                            ),
                          children: label,
                        },
                      ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
                      'div',
                      {
                        className:
                          classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                            _styles_module_css__WEBPACK_IMPORTED_MODULE_1__.A
                              .inputRoot,
                            {
                              [_styles_module_css__WEBPACK_IMPORTED_MODULE_1__.A
                                .searchInputRoot]: typeSearch,
                            },
                          ),
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                            InputComponent,
                            {
                              'aria-label': label || 'input-field',
                              disabled: readOnly,
                              value: inputValue,
                              ref: inputRef,
                              onChange: (e) => {
                                setInputValue(e.target.value),
                                  null == onChange || onChange(e);
                              },
                              className:
                                classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                                  _styles_module_css__WEBPACK_IMPORTED_MODULE_1__
                                    .A.defaultInput,
                                  {
                                    [_styles_module_css__WEBPACK_IMPORTED_MODULE_1__
                                      .A.expandInput]: valid,
                                    [_styles_module_css__WEBPACK_IMPORTED_MODULE_1__
                                      .A.searchInput]: typeSearch,
                                  },
                                ),
                              type: 'text',
                              padding: typeSearch ? '18px' : '10px',
                              paddinginlineend: typeSearch ? '12px' : '10px',
                              ...inputProps,
                            },
                          ),
                          !readOnly &&
                            inputValue.length > 0 &&
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                              ClearButton,
                              { onClick: clearInputValue, children: 'X' },
                            ),
                        ],
                      },
                    ),
                  ],
                },
              )
            );
          },
        );
      Input.displayName = 'Input';
      try {
        (Input.displayName = 'Input'),
          (Input.__docgenInfo = {
            description: '',
            displayName: 'Input',
            props: {
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
                type: { name: 'ValueType' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: {
                  name: '((text: ChangeEvent<HTMLInputElement>) => void)',
                },
              },
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !1,
                type: { name: 'string' },
              },
              labelPosition: {
                defaultValue: null,
                description: '',
                name: 'labelPosition',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"outer"' }, { value: '"inner"' }],
                },
              },
              labelStyle: {
                defaultValue: null,
                description: '',
                name: 'labelStyle',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              placeholder: {
                defaultValue: null,
                description: '',
                name: 'placeholder',
                required: !1,
                type: { name: 'string' },
              },
              readOnly: {
                defaultValue: null,
                description: '',
                name: 'readOnly',
                required: !1,
                type: { name: 'boolean' },
              },
              typeSearch: {
                defaultValue: null,
                description: '',
                name: 'typeSearch',
                required: !1,
                type: { name: 'boolean' },
              },
              autoFocus: {
                defaultValue: null,
                description: '',
                name: 'autoFocus',
                required: !1,
                type: { name: 'boolean' },
              },
              onFocus: {
                defaultValue: null,
                description: '',
                name: 'onFocus',
                required: !1,
                type: {
                  name: '((event: FocusEvent<HTMLInputElement, Element>) => void)',
                },
              },
              onBlur: {
                defaultValue: null,
                description: '',
                name: 'onBlur',
                required: !1,
                type: {
                  name: '((event: FocusEvent<HTMLInputElement, Element>) => void)',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/lib/Input/input.tsx#Input'] = {
              docgenInfo: Input.__docgenInfo,
              name: 'Input',
              path: 'src/lib/Input/input.tsx#Input',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './node_modules/classnames/index.js': (module, exports) => {
      var __WEBPACK_AMD_DEFINE_RESULT__;
      /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !(function () {
        'use strict';
        var hasOwn = {}.hasOwnProperty;
        function classNames() {
          for (var classes = '', i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            arg && (classes = appendClass(classes, parseValue(arg)));
          }
          return classes;
        }
        function parseValue(arg) {
          if ('string' == typeof arg || 'number' == typeof arg) return arg;
          if ('object' != typeof arg) return '';
          if (Array.isArray(arg)) return classNames.apply(null, arg);
          if (
            arg.toString !== Object.prototype.toString &&
            !arg.toString.toString().includes('[native code]')
          )
            return arg.toString();
          var classes = '';
          for (var key in arg)
            hasOwn.call(arg, key) &&
              arg[key] &&
              (classes = appendClass(classes, key));
          return classes;
        }
        function appendClass(value, newClass) {
          return newClass
            ? value
              ? value + ' ' + newClass
              : value + newClass
            : value;
        }
        module.exports
          ? ((classNames.default = classNames), (module.exports = classNames))
          : void 0 !==
              (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return classNames;
              }.apply(exports, [])) &&
            (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
      })();
    },
    './src/lib/styles.module.css': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        A: () => __WEBPACK_DEFAULT_EXPORT__,
      });
      let __WEBPACK_DEFAULT_EXPORT__ = {
        selected: 'styles_selected__G1NE3',
        badgeAboveChildren: 'styles_badgeAboveChildren__zUTJ0',
        badge: 'styles_badge__xbdGE',
        inputRoot: 'styles_inputRoot__Y9q3y',
        defaultInput: 'styles_defaultInput__nenXm',
        innerLabel: 'styles_innerLabel__1Oc3o',
        defaultLabel: 'styles_defaultLabel__jfDHF',
        expandInput: 'styles_expandInput__d0pZ5',
        btn: 'styles_btn__249Fp',
        primary: 'styles_primary__YtPEi',
        danger: 'styles_danger__GSoGL',
        secondary: 'styles_secondary__En3EG',
        'icon-container': 'styles_icon-container__W3WbO',
        'child-space': 'styles_child-space__BlMfr',
        avatar: 'styles_avatar__Vftca',
        search: 'styles_search__2ZphF',
        searchButton: 'styles_searchButton__hidCY',
        searchInputRoot: 'styles_searchInputRoot__fjMNS',
        searchInput: 'styles_searchInput__j+HYR',
        timerItem: 'styles_timerItem__KCvSb',
        timerValue: 'styles_timerValue__lvDhX',
        timerLabel: 'styles_timerLabel__1k2tC',
        header: 'styles_header__AHkbM',
        username: 'styles_username__ypccv',
        upload: 'styles_upload__-uG3S',
        name: 'styles_name__6D7hu',
        squareImg: 'styles_squareImg__jwxMy',
        xButton: 'styles_xButton__n5Ydk',
        image: 'styles_image__D9uY6',
        sortableList: 'styles_sortableList__peis4',
        touched: 'styles_touched__YgpJR',
        clockContainer: 'styles_clockContainer__GYKrr',
        hour: 'styles_hour__UH6bM',
        minute: 'styles_minute__MDO2v',
        second: 'styles_second__zAH3x',
        arrowsRight: 'styles_arrowsRight__BxJ21',
        arrowsLeft: 'styles_arrowsLeft__6czBo',
      };
    },
  },
]);
//# sourceMappingURL=stories-atoms-Input-stories.337464f7.iframe.bundle.js.map
