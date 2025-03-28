(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [8712, 4691, 945],
  {
    './src/stories/organisms/ExcelDownloadButton.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      let __WEBPACK_DEFAULT_EXPORT__ = {
          title: '3.Organisms/ExcelDownloadButton',
          component: __webpack_require__(
            './src/lib/Buttton/excelDownloadButton.tsx',
          ).Y,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
        },
        Default = {
          args: {
            headers: [
              { label: 'User ID', key: 'userId' },
              { label: 'ID', key: 'id' },
              { label: 'Title', key: 'title' },
              { label: 'Body', key: 'body' },
            ],
            fileName: 'text.csv',
            fetchData: async () => {
              try {
                await new Promise((resolve) => setTimeout(resolve, 3e3));
                let response = await fetch(
                  'https://jsonplaceholder.typicode.com/posts',
                );
                return await response.json();
              } catch (error) {
                throw (console.error('Error fetching data:', error), error);
              }
            },
            buttonName: '다운로드',
          },
        };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    headers: headers,\n    fileName: 'text.csv',\n    fetchData: fetchData,\n    buttonName: '다운로드'\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      };
      let __namedExportsOrder = ['Default'];
    },
    './src/lib/Buttton/button.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { $: () => Button });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js',
        ),
        _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/lib/styles.module.css',
        ),
        classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/classnames/bind.js',
        ),
        classnames_bind__WEBPACK_IMPORTED_MODULE_2___default =
          __webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__),
        _Loading_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/lib/Loading/loading.tsx',
        ),
        classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './node_modules/classnames/index.js',
        ),
        classnames__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          classnames__WEBPACK_IMPORTED_MODULE_4__,
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      let cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default().bind(
          _styles_module_css__WEBPACK_IMPORTED_MODULE_1__.A,
        ),
        Button = (props) => {
          let {
              onClick,
              children,
              type,
              loading = !1,
              icon,
              disabled,
              isSearchButton,
              danger = !1,
              ...rest
            } = props,
            [innerLoading, setInnerLoading] = (0,
            react__WEBPACK_IMPORTED_MODULE_0__.useState)(loading);
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            setInnerLoading(loading);
          }, [loading]);
          let iconNode = innerLoading
              ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                  _Loading_loading__WEBPACK_IMPORTED_MODULE_3__.R,
                  {},
                )
              : icon,
            childClass = cx({ 'child-space': iconNode }),
            buttonClass = cx('btn', type, { 'icon-container': iconNode });
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
            'button',
            {
              role: 'button',
              'aria-label': 'default-button',
              className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(
                buttonClass,
                {
                  [_styles_module_css__WEBPACK_IMPORTED_MODULE_1__.A
                    .searchButton]: isSearchButton,
                  [_styles_module_css__WEBPACK_IMPORTED_MODULE_1__.A.danger]:
                    danger,
                },
              ),
              onClick: (e) => {
                if (innerLoading) {
                  e.preventDefault();
                  return;
                }
                null == onClick || onClick(e);
              },
              disabled: disabled,
              ...rest,
              children: [
                iconNode,
                null != children &&
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                    'span',
                    { className: childClass, children: children },
                  ),
              ],
            },
          );
        };
    },
    './src/lib/Buttton/excelDownloadButton.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        Y: () => ExcelDownloadButton,
      });
      var react_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react-csv/index.js',
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/index.js',
        ),
        _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/lib/Buttton/button.tsx',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      let ChildCSVLink = (0, react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(
          (props, ref) =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              react_csv__WEBPACK_IMPORTED_MODULE_0__.CSVLink,
              { ...props, ref: ref },
            ),
        ),
        ExcelDownloadButton = (props) => {
          let {
              headers,
              fileName,
              buttonName,
              fetchData,
              style,
              type,
              ...rest
            } = props,
            csvLinkRef = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),
            [data, setData] = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(
              [],
            ),
            [loading, setLoading] = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
            handleExport = async () => {
              try {
                var _csvLinkRef$current;
                setLoading(!0);
                let data = await fetchData();
                setData(data),
                  setLoading(!1),
                  null == csvLinkRef ||
                    null === (_csvLinkRef$current = csvLinkRef.current) ||
                    void 0 === _csvLinkRef$current ||
                    _csvLinkRef$current.link.click();
              } catch (error) {
                console.log('Failed:', error);
              }
            };
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
            'div',
            {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _button__WEBPACK_IMPORTED_MODULE_2__.$,
                  {
                    type: type,
                    onClick: handleExport,
                    style: { ...style },
                    loading: loading,
                    ...rest,
                    children: buttonName,
                  },
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  ChildCSVLink,
                  {
                    data: data,
                    headers: headers,
                    filename: fileName,
                    ref: csvLinkRef,
                    target: '_blank',
                  },
                ),
              ],
            },
          );
        };
      (ChildCSVLink.displayName = 'ChildCSVLink'),
        (ExcelDownloadButton.displayName = 'ExcelDownloadButton');
      try {
        (ChildCSVLink.displayName = 'ChildCSVLink'),
          (ChildCSVLink.__docgenInfo = {
            description: '',
            displayName: 'ChildCSVLink',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/lib/Buttton/excelDownloadButton.tsx#ChildCSVLink'
            ] = {
              docgenInfo: ChildCSVLink.__docgenInfo,
              name: 'ChildCSVLink',
              path: 'src/lib/Buttton/excelDownloadButton.tsx#ChildCSVLink',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/lib/Loading/loading.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { R: () => Loading });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
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
      let rotation = (0, styled_components__WEBPACK_IMPORTED_MODULE_2__.i7)(
          _templateObject ||
            (_templateObject = (0,
            _Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                '\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n',
              ],
            )),
        ),
        load = (0, styled_components__WEBPACK_IMPORTED_MODULE_2__.i7)(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                '\n  0%,\n  100% {\n    opacity: 0;\n    transform: scale(0.5);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n',
              ],
            )),
        ),
        DefaultSpan = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.span(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                '\n  padding: 10px;\n  width: ',
                'px;\n  height: ',
                'px;\n  border-radius: 50%;\n  box-sizing: border-box;\n  display: inline-block;\n  ',
                '\n',
              ],
            )),
          (_ref) => {
            let { size } = _ref;
            return size;
          },
          (_ref2) => {
            let { size } = _ref2;
            return size;
          },
          (_ref3) => {
            let { type, speed, color, colorPalette } = _ref3;
            return 'line' === type
              ? (0, styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(
                  _templateObject4 ||
                    (_templateObject4 = (0,
                    _Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
                      [
                        '\n          background-color: grey;\n          box-shadow:\n            rgba(0, 0, 0, 0.07) 0px 1px 2px,\n            rgba(0, 0, 0, 0.07) 0px 2px 4px,\n            rgba(0, 0, 0, 0.07) 0px 4px 8px,\n            rgba(0, 0, 0, 0.07) 0px 8px 16px,\n            rgba(0, 0, 0, 0.07) 0px 16px 32px,\n            rgba(0, 0, 0, 0.07) 0px 32px 64px;\n          &:nth-child(1) {\n            animation-delay: 0s;\n            background-color: ',
                        ';\n          }\n\n          &:nth-child(2) {\n            animation-delay: 0.5s;\n            background-color: ',
                        ';\n          }\n\n          &:nth-child(3) {\n            animation-delay: 1s;\n            background-color: ',
                        ';\n          }\n          animation: ',
                        ' ',
                        's linear infinite;\n        ',
                      ],
                    )),
                  colorPalette && colorPalette[1],
                  colorPalette && colorPalette[2],
                  colorPalette && colorPalette[3],
                  load,
                  speed,
                )
              : (0, styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(
                  _templateObject5 ||
                    (_templateObject5 = (0,
                    _Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
                      [
                        '\n          border: 3px solid ',
                        ';\n          border-bottom-color: transparent;\n          animation: ',
                        ' ',
                        's linear infinite;\n        ',
                      ],
                    )),
                  color || '#fff',
                  rotation,
                  speed,
                );
          },
        ),
        defaultColors = ['#ffc2e1', '#ffb4be', '#ff97bb', '#ff7cb4'],
        Loading = (props) => {
          let {
            type = 'default',
            size = 10,
            color,
            speed = 2,
            colorPalette = defaultColors,
            ...rest
          } = props;
          return 'default' === type
            ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                DefaultSpan,
                { ...rest, speed: speed, color: color, type: type, size: size },
              )
            : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('div', {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    DefaultSpan,
                    {
                      ...rest,
                      colorPalette: colorPalette,
                      speed: speed,
                      type: type,
                      size: size,
                    },
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    DefaultSpan,
                    {
                      ...rest,
                      colorPalette: colorPalette,
                      speed: speed,
                      type: type,
                      size: size,
                    },
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    DefaultSpan,
                    {
                      ...rest,
                      colorPalette: colorPalette,
                      speed: speed,
                      type: type,
                      size: size,
                    },
                  ),
                ],
              });
        };
      try {
        (Loading.displayName = 'Loading'),
          (Loading.__docgenInfo = {
            description: '',
            displayName: 'Loading',
            props: {
              type: {
                defaultValue: null,
                description: '',
                name: 'type',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"default"' }, { value: '"line"' }],
                },
              },
              size: {
                defaultValue: null,
                description: '',
                name: 'size',
                required: !1,
                type: { name: 'number' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              speed: {
                defaultValue: null,
                description: '',
                name: 'speed',
                required: !1,
                type: { name: 'number' },
              },
              colorPalette: {
                defaultValue: null,
                description: '',
                name: 'colorPalette',
                required: !1,
                type: { name: 'string[]' },
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
            (STORYBOOK_REACT_CLASSES['src/lib/Loading/loading.tsx#Loading'] = {
              docgenInfo: Loading.__docgenInfo,
              name: 'Loading',
              path: 'src/lib/Loading/loading.tsx#Loading',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './node_modules/classnames/bind.js': (module, exports) => {
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
            arg && (classes = appendClass(classes, parseValue.call(this, arg)));
          }
          return classes;
        }
        function parseValue(arg) {
          if ('string' == typeof arg || 'number' == typeof arg)
            return (this && this[arg]) || arg;
          if ('object' != typeof arg) return '';
          if (Array.isArray(arg)) return classNames.apply(this, arg);
          if (
            arg.toString !== Object.prototype.toString &&
            !arg.toString.toString().includes('[native code]')
          )
            return arg.toString();
          var classes = '';
          for (var key in arg)
            hasOwn.call(arg, key) &&
              arg[key] &&
              (classes = appendClass(classes, (this && this[key]) || key));
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
    './node_modules/react-csv/index.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__,
    ) => {
      module.exports = __webpack_require__(
        './node_modules/react-csv/lib/index.js',
      );
    },
    './node_modules/react-csv/lib/components/Download.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) => {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 });
      var _createClass = (function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              (descriptor.enumerable = descriptor.enumerable || !1),
                (descriptor.configurable = !0),
                'value' in descriptor && (descriptor.writable = !0),
                Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function (Constructor, protoProps, staticProps) {
            return (
              protoProps && defineProperties(Constructor.prototype, protoProps),
              staticProps && defineProperties(Constructor, staticProps),
              Constructor
            );
          };
        })(),
        _react2 = _interopRequireDefault(
          __webpack_require__('./node_modules/react/index.js'),
        ),
        _core = __webpack_require__('./node_modules/react-csv/lib/core.js'),
        _metaProps = __webpack_require__(
          './node_modules/react-csv/lib/metaProps.js',
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw TypeError('Cannot call a class as a function');
      }
      function _possibleConstructorReturn(self1, call) {
        if (!self1)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return call && ('object' == typeof call || 'function' == typeof call)
          ? call
          : self1;
      }
      function _inherits(subClass, superClass) {
        if ('function' != typeof superClass && null !== superClass)
          throw TypeError(
            'Super expression must either be null or a function, not ' +
              typeof superClass,
          );
        (subClass.prototype = Object.create(
          superClass && superClass.prototype,
          {
            constructor: {
              value: subClass,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          },
        )),
          superClass &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass));
      }
      var CSVDownload = (function (_React$Component) {
        function CSVDownload(props) {
          _classCallCheck(this, CSVDownload);
          var _this = _possibleConstructorReturn(
            this,
            (CSVDownload.__proto__ || Object.getPrototypeOf(CSVDownload)).call(
              this,
              props,
            ),
          );
          return (_this.state = {}), _this;
        }
        return (
          _inherits(CSVDownload, _React$Component),
          _createClass(CSVDownload, [
            {
              key: 'buildURI',
              value: function buildURI() {
                return _core.buildURI.apply(void 0, arguments);
              },
            },
            {
              key: 'componentDidMount',
              value: function componentDidMount() {
                var _props = this.props,
                  data = _props.data,
                  headers = _props.headers,
                  separator = _props.separator,
                  enclosingCharacter = _props.enclosingCharacter,
                  uFEFF = _props.uFEFF,
                  target = _props.target,
                  specs = _props.specs,
                  replace = _props.replace;
                this.state.page = window.open(
                  this.buildURI(
                    data,
                    uFEFF,
                    headers,
                    separator,
                    enclosingCharacter,
                  ),
                  target,
                  specs,
                  replace,
                );
              },
            },
            {
              key: 'getWindow',
              value: function getWindow() {
                return this.state.page;
              },
            },
            {
              key: 'render',
              value: function render() {
                return null;
              },
            },
          ]),
          CSVDownload
        );
      })(_react2.default.Component);
      (CSVDownload.defaultProps = Object.assign(_metaProps.defaultProps, {
        target: '_blank',
      })),
        (CSVDownload.propTypes = _metaProps.propTypes),
        (exports.default = CSVDownload);
    },
    './node_modules/react-csv/lib/components/Link.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) => {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 });
      var _extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          },
        _createClass = (function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              (descriptor.enumerable = descriptor.enumerable || !1),
                (descriptor.configurable = !0),
                'value' in descriptor && (descriptor.writable = !0),
                Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function (Constructor, protoProps, staticProps) {
            return (
              protoProps && defineProperties(Constructor.prototype, protoProps),
              staticProps && defineProperties(Constructor, staticProps),
              Constructor
            );
          };
        })(),
        _react2 = _interopRequireDefault(
          __webpack_require__('./node_modules/react/index.js'),
        ),
        _core = __webpack_require__('./node_modules/react-csv/lib/core.js'),
        _metaProps = __webpack_require__(
          './node_modules/react-csv/lib/metaProps.js',
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj)
          !(keys.indexOf(i) >= 0) &&
            Object.prototype.hasOwnProperty.call(obj, i) &&
            (target[i] = obj[i]);
        return target;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw TypeError('Cannot call a class as a function');
      }
      function _possibleConstructorReturn(self1, call) {
        if (!self1)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return call && ('object' == typeof call || 'function' == typeof call)
          ? call
          : self1;
      }
      function _inherits(subClass, superClass) {
        if ('function' != typeof superClass && null !== superClass)
          throw TypeError(
            'Super expression must either be null or a function, not ' +
              typeof superClass,
          );
        (subClass.prototype = Object.create(
          superClass && superClass.prototype,
          {
            constructor: {
              value: subClass,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          },
        )),
          superClass &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass));
      }
      var CSVLink = (function (_React$Component) {
        function CSVLink(props) {
          _classCallCheck(this, CSVLink);
          var _this = _possibleConstructorReturn(
            this,
            (CSVLink.__proto__ || Object.getPrototypeOf(CSVLink)).call(
              this,
              props,
            ),
          );
          return (_this.buildURI = _this.buildURI.bind(_this)), _this;
        }
        return (
          _inherits(CSVLink, _React$Component),
          _createClass(CSVLink, [
            {
              key: 'buildURI',
              value: function buildURI() {
                return _core.buildURI.apply(void 0, arguments);
              },
            },
            {
              key: 'handleLegacy',
              value: function handleLegacy(event) {
                var isAsync =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                if (window.navigator.msSaveOrOpenBlob) {
                  event.preventDefault();
                  var _props = this.props,
                    data = _props.data,
                    headers = _props.headers,
                    separator = _props.separator,
                    filename = _props.filename,
                    enclosingCharacter = _props.enclosingCharacter,
                    uFEFF = _props.uFEFF,
                    csvData =
                      isAsync && 'function' == typeof data ? data() : data,
                    blob = new Blob([
                      uFEFF ? '\uFEFF' : '',
                      (0, _core.toCSV)(
                        csvData,
                        headers,
                        separator,
                        enclosingCharacter,
                      ),
                    ]);
                  return window.navigator.msSaveBlob(blob, filename), !1;
                }
              },
            },
            {
              key: 'handleAsyncClick',
              value: function handleAsyncClick(event) {
                var _this2 = this;
                this.props.onClick(event, function done(proceed) {
                  if (!1 === proceed) {
                    event.preventDefault();
                    return;
                  }
                  _this2.handleLegacy(event, !0);
                });
              },
            },
            {
              key: 'handleSyncClick',
              value: function handleSyncClick(event) {
                if (!1 === this.props.onClick(event)) {
                  event.preventDefault();
                  return;
                }
                this.handleLegacy(event);
              },
            },
            {
              key: 'handleClick',
              value: function handleClick() {
                var _this3 = this;
                return function (event) {
                  if ('function' == typeof _this3.props.onClick)
                    return _this3.props.asyncOnClick
                      ? _this3.handleAsyncClick(event)
                      : _this3.handleSyncClick(event);
                  _this3.handleLegacy(event);
                };
              },
            },
            {
              key: 'render',
              value: function render() {
                var _this4 = this,
                  _props2 = this.props,
                  data = _props2.data,
                  headers = _props2.headers,
                  separator = _props2.separator,
                  filename = _props2.filename,
                  uFEFF = _props2.uFEFF,
                  children = _props2.children,
                  enclosingCharacter =
                    (_props2.onClick,
                    _props2.asyncOnClick,
                    _props2.enclosingCharacter),
                  rest = _objectWithoutProperties(_props2, [
                    'data',
                    'headers',
                    'separator',
                    'filename',
                    'uFEFF',
                    'children',
                    'onClick',
                    'asyncOnClick',
                    'enclosingCharacter',
                  ]),
                  href =
                    'undefined' == typeof window
                      ? ''
                      : this.buildURI(
                          data,
                          uFEFF,
                          headers,
                          separator,
                          enclosingCharacter,
                        );
                return _react2.default.createElement(
                  'a',
                  _extends({ download: filename }, rest, {
                    ref: function ref(link) {
                      return (_this4.link = link);
                    },
                    target: '_self',
                    href: href,
                    onClick: this.handleClick(),
                  }),
                  children,
                );
              },
            },
          ]),
          CSVLink
        );
      })(_react2.default.Component);
      (CSVLink.defaultProps = _metaProps.defaultProps),
        (CSVLink.propTypes = _metaProps.propTypes),
        (exports.default = CSVLink);
    },
    './node_modules/react-csv/lib/core.js': (
      __unused_webpack_module,
      exports,
    ) => {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 });
      var _typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj;
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj;
            };
      function _toConsumableArray(arr) {
        if (!Array.isArray(arr)) return Array.from(arr);
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      var isSafari = (exports.isSafari = function isSafari() {
          return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        }),
        isJsons = (exports.isJsons = function isJsons(array) {
          return (
            Array.isArray(array) &&
            array.every(function (row) {
              return (
                (void 0 === row ? 'undefined' : _typeof(row)) === 'object' &&
                !(row instanceof Array)
              );
            })
          );
        }),
        isArrays = (exports.isArrays = function isArrays(array) {
          return (
            Array.isArray(array) &&
            array.every(function (row) {
              return Array.isArray(row);
            })
          );
        }),
        jsonsHeaders = (exports.jsonsHeaders = function jsonsHeaders(array) {
          return Array.from(
            array
              .map(function (json) {
                return Object.keys(json);
              })
              .reduce(function (a, b) {
                return new Set(
                  [].concat(_toConsumableArray(a), _toConsumableArray(b)),
                );
              }, []),
          );
        }),
        jsons2arrays = (exports.jsons2arrays = function jsons2arrays(
          jsons,
          headers,
        ) {
          var headerLabels = (headers = headers || jsonsHeaders(jsons)),
            headerKeys = headers;
          return (
            isJsons(headers) &&
              ((headerLabels = headers.map(function (header) {
                return header.label;
              })),
              (headerKeys = headers.map(function (header) {
                return header.key;
              }))),
            [headerLabels].concat(
              _toConsumableArray(
                jsons.map(function (object) {
                  return headerKeys.map(function (header) {
                    return getHeaderValue(header, object);
                  });
                }),
              ),
            )
          );
        }),
        getHeaderValue = (exports.getHeaderValue = function getHeaderValue(
          property,
          obj,
        ) {
          var foundValue = property
            .replace(/\[([^\]]+)]/g, '.$1')
            .split('.')
            .reduce(function (o, p, i, arr) {
              var value = o[p];
              if (null != value) return value;
              arr.splice(1);
            }, obj);
          return void 0 === foundValue
            ? property in obj
              ? obj[property]
              : ''
            : foundValue;
        }),
        elementOrEmpty = (exports.elementOrEmpty = function elementOrEmpty(
          element,
        ) {
          return null == element ? '' : element;
        }),
        joiner = (exports.joiner = function joiner(data) {
          var separator =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : ',',
            enclosingCharacter =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : '"';
          return data
            .filter(function (e) {
              return e;
            })
            .map(function (row) {
              return row
                .map(function (element) {
                  return elementOrEmpty(element);
                })
                .map(function (column) {
                  return '' + enclosingCharacter + column + enclosingCharacter;
                })
                .join(separator);
            })
            .join('\n');
        }),
        arrays2csv = (exports.arrays2csv = function arrays2csv(
          data,
          headers,
          separator,
          enclosingCharacter,
        ) {
          return joiner(
            headers ? [headers].concat(_toConsumableArray(data)) : data,
            separator,
            enclosingCharacter,
          );
        }),
        jsons2csv = (exports.jsons2csv = function jsons2csv(
          data,
          headers,
          separator,
          enclosingCharacter,
        ) {
          return joiner(
            jsons2arrays(data, headers),
            separator,
            enclosingCharacter,
          );
        }),
        string2csv = (exports.string2csv = function string2csv(
          data,
          headers,
          separator,
          enclosingCharacter,
        ) {
          return headers
            ? headers.join(separator) + '\n' + data
            : data.replace(/"/g, '""');
        }),
        toCSV = (exports.toCSV = function toCSV(
          data,
          headers,
          separator,
          enclosingCharacter,
        ) {
          if (isJsons(data))
            return jsons2csv(data, headers, separator, enclosingCharacter);
          if (isArrays(data))
            return arrays2csv(data, headers, separator, enclosingCharacter);
          if ('string' == typeof data)
            return string2csv(data, headers, separator);
          throw TypeError(
            'Data should be a "String", "Array of arrays" OR "Array of objects" ',
          );
        });
      exports.buildURI = function buildURI(
        data,
        uFEFF,
        headers,
        separator,
        enclosingCharacter,
      ) {
        var csv = toCSV(data, headers, separator, enclosingCharacter),
          type = isSafari() ? 'application/csv' : 'text/csv',
          blob = new Blob([uFEFF ? '\uFEFF' : '', csv], { type: type }),
          dataURI =
            'data:' + type + ';charset=utf-8,' + (uFEFF ? '\uFEFF' : '') + csv,
          URL = window.URL || window.webkitURL;
        return void 0 === URL.createObjectURL
          ? dataURI
          : URL.createObjectURL(blob);
      };
    },
    './node_modules/react-csv/lib/index.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) => {
      'use strict';
      exports.CSVLink = void 0;
      var _Download2 = _interopRequireDefault(
          __webpack_require__(
            './node_modules/react-csv/lib/components/Download.js',
          ),
        ),
        _Link2 = _interopRequireDefault(
          __webpack_require__(
            './node_modules/react-csv/lib/components/Link.js',
          ),
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      _Download2.default, (exports.CSVLink = _Link2.default);
    },
    './node_modules/react-csv/lib/metaProps.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) => {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.PropsNotForwarded =
          exports.defaultProps =
          exports.propTypes =
            void 0),
        _interopRequireDefault(
          __webpack_require__('./node_modules/react/index.js'),
        );
      var _propTypes = __webpack_require__(
        './node_modules/prop-types/index.js',
      );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      (exports.propTypes = {
        data: (0, _propTypes.oneOfType)([
          _propTypes.string,
          _propTypes.array,
          _propTypes.func,
        ]).isRequired,
        headers: _propTypes.array,
        target: _propTypes.string,
        separator: _propTypes.string,
        filename: _propTypes.string,
        uFEFF: _propTypes.bool,
        onClick: _propTypes.func,
        asyncOnClick: _propTypes.bool,
        enclosingCharacter: _propTypes.string,
      }),
        (exports.defaultProps = {
          separator: ',',
          filename: 'generatedBy_react-csv.csv',
          uFEFF: !0,
          asyncOnClick: !1,
          enclosingCharacter: '"',
        }),
        (exports.PropsNotForwarded = ['data', 'headers']);
    },
  },
]);
//# sourceMappingURL=stories-organisms-ExcelDownloadButton-stories.35604615.iframe.bundle.js.map
