(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [668, 4691, 945],
  {
    './src/stories/templates/DaumAdressSearch.stories.tsx': (
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
        }),
        __webpack_require__('./node_modules/react/index.js');
      var _lib_DaumAdressSearch_daumAdressSearch__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            './src/lib/DaumAdressSearch/daumAdressSearch.tsx',
          ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      let __WEBPACK_DEFAULT_EXPORT__ = {
          title: '4.Templates/DaumAdressSearch',
          component: () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
              style: { height: '30rem' },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _lib_DaumAdressSearch_daumAdressSearch__WEBPACK_IMPORTED_MODULE_1__.G,
                {
                  name: '검색버튼',
                  customFullAdrress: (data) => {
                    let fullAddress = data.roadAddress;
                    fullAddress =
                      null != fullAddress && '' !== fullAddress
                        ? data.roadAddress
                        : data.autoRoadAddress;
                    let extraAddr = '';
                    return (
                      console.log(
                        'bname',
                        data.hname
                          ? data.hname
                          : data.bname1
                            ? data.bname1
                            : data.bname,
                      ),
                      'R' === data.addressType &&
                        ('' !== data.bname && (extraAddr += data.bname),
                        '' !== data.buildingName &&
                          (extraAddr +=
                            '' !== extraAddr
                              ? ', '.concat(data.buildingName)
                              : data.buildingName),
                        (fullAddress +=
                          '' !== extraAddr ? '('.concat(extraAddr, ')') : '')),
                      fullAddress
                    );
                  },
                },
              ),
            }),
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
    './src/lib/DaumAdressSearch/daumAdressSearch.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { G: () => DaumAdressSearch });
      var _templateObject,
        _templateObject2,
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js',
        ),
        react = __webpack_require__('./node_modules/react/index.js'),
        Buttton_button = __webpack_require__('./src/lib/Buttton/button.tsx'),
        input = __webpack_require__('./src/lib/Input/input.tsx'),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js',
        ),
        react_dom = __webpack_require__('./node_modules/react-dom/index.js'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      let PortalContext = (0, react.createContext)(null),
        GlobalPortal = {
          Provider: function PortalProvider(_ref) {
            let { children } = _ref,
              [portalContainerRef, setPortalContainerRef] = (0, react.useState)(
                null,
              );
            return (0, jsx_runtime.jsxs)(PortalContext.Provider, {
              value: portalContainerRef,
              children: [
                children,
                (0, jsx_runtime.jsx)('div', {
                  id: 'portal-container',
                  ref: (elem) => {
                    null === portalContainerRef &&
                      null !== elem &&
                      setPortalContainerRef(elem);
                  },
                }),
              ],
            });
          },
          Consumer: function PortalConsumer(_ref2) {
            let { children } = _ref2;
            return (0, jsx_runtime.jsx)(PortalContext.Consumer, {
              children: (portalContainerRef) =>
                null === portalContainerRef
                  ? null
                  : (0, react_dom.createPortal)(children, portalContainerRef),
            });
          },
        };
      var icon = __webpack_require__('./src/lib/Icon/icon.tsx');
      let FixedCenterModal = (0, react.forwardRef)(
        function FixedCenterModal(props, ref) {
          return props.isOpen
            ? (0, jsx_runtime.jsx)(GlobalPortal.Consumer, {
                children: (0, jsx_runtime.jsxs)('div', {
                  className: 'modal',
                  style: {
                    ...props.modalStyle,
                    backgroundColor: 'white',
                    position: 'fixed',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    margin: 'auto',
                    width: 'fit-content',
                    height: 'fit-content',
                  },
                  children: [
                    (0, jsx_runtime.jsx)(Buttton_button.$, {
                      ...props,
                      onClick: props.onClose,
                      ref: ref,
                      children: (0, jsx_runtime.jsx)(icon.I, {
                        icon: 'Cross',
                        color: 'white',
                        width: '1rem',
                        height: '1rem',
                      }),
                    }),
                    props.children,
                  ],
                }),
              })
            : (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {});
        },
      );
      try {
        (fixedCenterModal.displayName = 'fixedCenterModal'),
          (fixedCenterModal.__docgenInfo = {
            description: '',
            displayName: 'fixedCenterModal',
            props: {
              type: {
                defaultValue: null,
                description: '',
                name: 'type',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"primary"' }, { value: '"secondary"' }],
                },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: {
                  name: '((e: MouseEvent<HTMLElement, MouseEvent>) => void)',
                },
              },
              icon: {
                defaultValue: null,
                description: '',
                name: 'icon',
                required: !1,
                type: { name: 'ReactNode' },
              },
              loading: {
                defaultValue: null,
                description: '',
                name: 'loading',
                required: !1,
                type: { name: 'boolean' },
              },
              isSearchButton: {
                defaultValue: null,
                description: '',
                name: 'isSearchButton',
                required: !1,
                type: { name: 'boolean' },
              },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              danger: {
                defaultValue: null,
                description: '',
                name: 'danger',
                required: !1,
                type: { name: 'boolean' },
              },
              isOpen: {
                defaultValue: null,
                description: '',
                name: 'isOpen',
                required: !1,
                type: { name: 'boolean' },
              },
              onClose: {
                defaultValue: null,
                description: '',
                name: 'onClose',
                required: !1,
                type: { name: '(() => void)' },
              },
              modalStyle: {
                defaultValue: null,
                description: '',
                name: 'modalStyle',
                required: !1,
                type: { name: 'CSSProperties' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/lib/Modal/fixedCenterModal.tsx#fixedCenterModal'
            ] = {
              docgenInfo: fixedCenterModal.__docgenInfo,
              name: 'fixedCenterModal',
              path: 'src/lib/Modal/fixedCenterModal.tsx#fixedCenterModal',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var lib = __webpack_require__(
        './node_modules/react-daum-postcode/lib/index.js',
      );
      let Row = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              '\n  display: table;\n  width: 100%; /*Optional*/\n  table-layout: fixed; /*Optional*/\n  border-spacing: 10px; /*Optional*/\n',
            ])),
        ),
        Column = styled_components_browser_esm.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              '\n  display: table-cell;\n',
            ])),
        ),
        DaumAdressSearch = (props) => {
          let [address, setAddress] = (0, react.useState)(''),
            [postNo, setPostNo] = (0, react.useState)(''),
            [isOpen, setIsOpen] = (0, react.useState)(!1),
            closeModal = () => {
              setIsOpen(!1);
            };
          return (0, jsx_runtime.jsx)(GlobalPortal.Provider, {
            children: (0, jsx_runtime.jsxs)('div', {
              children: [
                (0, jsx_runtime.jsxs)(Row, {
                  children: [
                    (0, jsx_runtime.jsx)(Column, {
                      children: (0, jsx_runtime.jsx)(input.p, {
                        value: postNo,
                        readOnly: !0,
                      }),
                    }),
                    (0, jsx_runtime.jsx)(Column, {
                      children: (0, jsx_runtime.jsx)(Buttton_button.$, {
                        onClick: () => {
                          setIsOpen(!0);
                        },
                        children: props.name,
                      }),
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)(Row, {
                  children: (0, jsx_runtime.jsx)(input.p, {
                    value: address,
                    readOnly: !0,
                  }),
                }),
                (0, jsx_runtime.jsx)(FixedCenterModal, {
                  isOpen: isOpen,
                  onClose: closeModal,
                  children: (0, jsx_runtime.jsx)(lib.Ay, {
                    autoClose: !0,
                    onComplete: (data) => {
                      setAddress(props.customFullAdrress(data)),
                        setPostNo(data.zonecode),
                        closeModal();
                    },
                    showMoreHName: !0,
                  }),
                }),
              ],
            }),
          });
        };
      try {
        (DaumAdressSearch.displayName = 'DaumAdressSearch'),
          (DaumAdressSearch.__docgenInfo = {
            description: '',
            displayName: 'DaumAdressSearch',
            props: {
              name: {
                defaultValue: null,
                description: '',
                name: 'name',
                required: !0,
                type: { name: 'string' },
              },
              customFullAdrress: {
                defaultValue: null,
                description: '',
                name: 'customFullAdrress',
                required: !0,
                type: { name: '(d: any) => string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/lib/DaumAdressSearch/daumAdressSearch.tsx#DaumAdressSearch'
            ] = {
              docgenInfo: DaumAdressSearch.__docgenInfo,
              name: 'DaumAdressSearch',
              path: 'src/lib/DaumAdressSearch/daumAdressSearch.tsx#DaumAdressSearch',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/lib/Icon/icon.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { I: () => Icon });
      var react = __webpack_require__('./node_modules/react/index.js');
      function lazy(importFn) {
        return (0, react.lazy)(async () => ({
          default: (await importFn()).ReactComponent,
        }));
      }
      let icons = {
        Cross: lazy(async () =>
          __webpack_require__
            .e(2355)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/cross.svg',
              ),
            ),
        ),
        Download: lazy(async () =>
          __webpack_require__
            .e(5469)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/download.svg',
              ),
            ),
        ),
        Degrees360: lazy(async () =>
          __webpack_require__
            .e(5278)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/360-degrees.svg',
              ),
            ),
        ),
        MenuBurger: lazy(async () =>
          __webpack_require__
            .e(8786)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/menu-burger.svg',
              ),
            ),
        ),
        Star: lazy(async () =>
          __webpack_require__
            .e(7525)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/star.svg',
              ),
            ),
        ),
        Search: lazy(async () =>
          __webpack_require__
            .e(2049)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/search.svg',
              ),
            ),
        ),
        Heart: lazy(async () =>
          __webpack_require__
            .e(3763)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/heart.svg',
              ),
            ),
        ),
        Minus: lazy(async () =>
          __webpack_require__
            .e(955)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/minus.svg',
              ),
            ),
        ),
        Plus: lazy(async () =>
          __webpack_require__
            .e(8205)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/plus.svg',
              ),
            ),
        ),
        EmptyHeart: lazy(async () =>
          __webpack_require__
            .e(9647)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/empty-heart.svg',
              ),
            ),
        ),
        ArrowRight: lazy(async () =>
          __webpack_require__
            .e(5201)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/arrow-right.svg',
              ),
            ),
        ),
        ArrowLeft: lazy(async () =>
          __webpack_require__
            .e(186)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/arrow-left.svg',
              ),
            ),
        ),
      };
      var jsx_runtime = __webpack_require__(
        './node_modules/react/jsx-runtime.js',
      );
      let Icon = (_ref) => {
        let { icon, className, rotate, width, height, color, ...rest } = _ref,
          SvgIcon = (0, react.useMemo)(() => icons[icon], [icon]);
        return SvgIcon
          ? (0, jsx_runtime.jsx)('div', {
              className: className,
              'aria-label': icon,
              role: 'img',
              style: {
                width: width,
                height: height,
                fill: color,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transform: rotate ? 'rotate('.concat(rotate, 'deg)') : void 0,
              },
              ...rest,
              children: (0, jsx_runtime.jsx)(react.Suspense, {
                fallback: null,
                children: (0, jsx_runtime.jsx)(SvgIcon, {}),
              }),
            })
          : null;
      };
      try {
        (Icon.displayName = 'Icon'),
          (Icon.__docgenInfo = {
            description: '',
            displayName: 'Icon',
            props: {
              icon: {
                defaultValue: null,
                description: '',
                name: 'icon',
                required: !0,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"Cross"' },
                    { value: '"Download"' },
                    { value: '"Degrees360"' },
                    { value: '"MenuBurger"' },
                    { value: '"Star"' },
                    { value: '"Search"' },
                    { value: '"Heart"' },
                    { value: '"Minus"' },
                    { value: '"Plus"' },
                    { value: '"EmptyHeart"' },
                    { value: '"ArrowRight"' },
                    { value: '"ArrowLeft"' },
                  ],
                },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              rotate: {
                defaultValue: null,
                description: '',
                name: 'rotate',
                required: !1,
                type: { name: 'number' },
              },
              width: {
                defaultValue: null,
                description: '',
                name: 'width',
                required: !1,
                type: { name: 'string' },
              },
              height: {
                defaultValue: null,
                description: '',
                name: 'height',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/lib/Icon/icon.tsx#Icon'] = {
              docgenInfo: Icon.__docgenInfo,
              name: 'Icon',
              path: 'src/lib/Icon/icon.tsx#Icon',
            });
      } catch (__react_docgen_typescript_loader_error) {}
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
    './node_modules/react-daum-postcode/lib/DaumPostcodeEmbed.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) => {
      'use strict';
      function _typeof(a) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (a) {
                return typeof a;
              }
            : function (a) {
                return a &&
                  'function' == typeof Symbol &&
                  a.constructor === Symbol &&
                  a !== Symbol.prototype
                  ? 'symbol'
                  : typeof a;
              })(a);
      }
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _react = _interopRequireWildcard(
          __webpack_require__('./node_modules/react/index.js'),
        ),
        _loadPostcode = _interopRequireWildcard(
          __webpack_require__(
            './node_modules/react-daum-postcode/lib/loadPostcode.js',
          ),
        ),
        _excluded = [
          'scriptUrl',
          'className',
          'style',
          'defaultQuery',
          'autoClose',
          'errorMessage',
          'onComplete',
          'onClose',
          'onResize',
          'onSearch',
        ];
      function _getRequireWildcardCache(a) {
        if ('function' != typeof WeakMap) return null;
        var b = new WeakMap(),
          c = new WeakMap();
        return (_getRequireWildcardCache = function (a) {
          return a ? c : b;
        })(a);
      }
      function _interopRequireWildcard(a, b) {
        if (!b && a && a.__esModule) return a;
        if (null === a || ('object' !== _typeof(a) && 'function' != typeof a))
          return { default: a };
        var c = _getRequireWildcardCache(b);
        if (c && c.has(a)) return c.get(a);
        var d = {},
          e = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var f in a)
          if ('default' != f && Object.prototype.hasOwnProperty.call(a, f)) {
            var g = e ? Object.getOwnPropertyDescriptor(a, f) : null;
            g && (g.get || g.set)
              ? Object.defineProperty(d, f, g)
              : (d[f] = a[f]);
          }
        return (d.default = a), c && c.set(a, d), d;
      }
      function ownKeys(a, b) {
        var c = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(a);
          b &&
            (d = d.filter(function (b) {
              return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })),
            c.push.apply(c, d);
        }
        return c;
      }
      function _objectSpread(a) {
        for (var b, c = 1; c < arguments.length; c++)
          (b = null == arguments[c] ? {} : arguments[c]),
            c % 2
              ? ownKeys(Object(b), !0).forEach(function (c) {
                  _defineProperty(a, c, b[c]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    a,
                    Object.getOwnPropertyDescriptors(b),
                  )
                : ownKeys(Object(b)).forEach(function (c) {
                    Object.defineProperty(
                      a,
                      c,
                      Object.getOwnPropertyDescriptor(b, c),
                    );
                  });
        return a;
      }
      function _objectWithoutProperties(a, b) {
        if (null == a) return {};
        var c,
          d,
          e = _objectWithoutPropertiesLoose(a, b);
        if (Object.getOwnPropertySymbols) {
          var f = Object.getOwnPropertySymbols(a);
          for (d = 0; d < f.length; d++)
            (c = f[d]),
              0 <= b.indexOf(c) ||
                (Object.prototype.propertyIsEnumerable.call(a, c) &&
                  (e[c] = a[c]));
        }
        return e;
      }
      function _objectWithoutPropertiesLoose(a, b) {
        if (null == a) return {};
        var c,
          d,
          e = {},
          f = Object.keys(a);
        for (d = 0; d < f.length; d++)
          (c = f[d]), 0 <= b.indexOf(c) || (e[c] = a[c]);
        return e;
      }
      function _classCallCheck(a, b) {
        if (!(a instanceof b))
          throw TypeError('Cannot call a class as a function');
      }
      function _defineProperties(a, b) {
        for (var c, d = 0; d < b.length; d++)
          ((c = b[d]).enumerable = c.enumerable || !1),
            (c.configurable = !0),
            'value' in c && (c.writable = !0),
            Object.defineProperty(a, c.key, c);
      }
      function _createClass(a, b, c) {
        return (
          b && _defineProperties(a.prototype, b),
          c && _defineProperties(a, c),
          a
        );
      }
      function _inherits(a, b) {
        if ('function' != typeof b && null !== b)
          throw TypeError('Super expression must either be null or a function');
        (a.prototype = Object.create(b && b.prototype, {
          constructor: { value: a, writable: !0, configurable: !0 },
        })),
          b && _setPrototypeOf(a, b);
      }
      function _setPrototypeOf(a, b) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function (a, b) {
            return (a.__proto__ = b), a;
          })(a, b);
      }
      function _createSuper(a) {
        var b = _isNativeReflectConstruct();
        return function () {
          var c,
            d = _getPrototypeOf(a);
          return (
            (c = b
              ? Reflect.construct(
                  d,
                  arguments,
                  _getPrototypeOf(this).constructor,
                )
              : d.apply(this, arguments)),
            _possibleConstructorReturn(this, c)
          );
        };
      }
      function _possibleConstructorReturn(a, b) {
        return b && ('object' === _typeof(b) || 'function' == typeof b)
          ? b
          : _assertThisInitialized(a);
      }
      function _assertThisInitialized(a) {
        if (void 0 === a)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return a;
      }
      function _isNativeReflectConstruct() {
        if (
          'undefined' == typeof Reflect ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (a) {
          return !1;
        }
      }
      function _getPrototypeOf(a) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (a) {
              return a.__proto__ || Object.getPrototypeOf(a);
            })(a);
      }
      function _defineProperty(a, b, c) {
        return (
          b in a
            ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (a[b] = c),
          a
        );
      }
      var defaultErrorMessage = _react.default.createElement(
          'p',
          null,
          '현재 Daum 우편번호 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해주세요.',
        ),
        defaultStyle = { width: '100%', height: 400 },
        defaultProps = {
          scriptUrl: _loadPostcode.postcodeScriptUrl,
          errorMessage: defaultErrorMessage,
          autoClose: !0,
        },
        DaumPostcodeEmbed = (function (a) {
          function b() {
            var a;
            _classCallCheck(this, b);
            for (var d = arguments.length, e = Array(d), f = 0; f < d; f++)
              e[f] = arguments[f];
            return (
              _defineProperty(
                _assertThisInitialized((a = c.call.apply(c, [this].concat(e)))),
                'mounted',
                !1,
              ),
              _defineProperty(
                _assertThisInitialized(a),
                'wrap',
                (0, _react.createRef)(),
              ),
              _defineProperty(_assertThisInitialized(a), 'state', {
                hasError: !1,
              }),
              _defineProperty(
                _assertThisInitialized(a),
                'initiate',
                function (b) {
                  if (a.wrap.current) {
                    var c = a.props,
                      g = (c.scriptUrl, c.className, c.style, c.defaultQuery),
                      h = c.autoClose,
                      j = (c.errorMessage, c.onComplete),
                      k = c.onClose,
                      l = c.onResize,
                      m = c.onSearch;
                    new b(
                      _objectSpread(
                        _objectSpread(
                          {},
                          _objectWithoutProperties(c, _excluded),
                        ),
                        {},
                        {
                          oncomplete: function oncomplete(b) {
                            j && j(b),
                              h && a.wrap.current && a.wrap.current.remove();
                          },
                          onsearch: m,
                          onresize: l,
                          onclose: k,
                          width: '100%',
                          height: '100%',
                        },
                      ),
                    ).embed(a.wrap.current, { q: g, autoClose: h });
                  }
                },
              ),
              _defineProperty(
                _assertThisInitialized(a),
                'onError',
                function (b) {
                  console.error(b), a.setState({ hasError: !0 });
                },
              ),
              a
            );
          }
          _inherits(b, a);
          var c = _createSuper(b);
          return (
            _createClass(b, [
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  var a = this.initiate,
                    b = this.onError,
                    c = this.props.scriptUrl;
                  c &&
                    (this.mounted ||
                      ((0, _loadPostcode.default)(c).then(a).catch(b),
                      (this.mounted = !0)));
                },
              },
              {
                key: 'render',
                value: function render() {
                  var a = this.props,
                    b = a.className,
                    c = a.style,
                    d = a.errorMessage,
                    e = this.state.hasError;
                  return _react.default.createElement(
                    'div',
                    {
                      ref: this.wrap,
                      className: b,
                      style: _objectSpread(_objectSpread({}, defaultStyle), c),
                    },
                    e && d,
                  );
                },
              },
            ]),
            b
          );
        })(_react.Component);
      _defineProperty(DaumPostcodeEmbed, 'defaultProps', defaultProps),
        (exports.default = DaumPostcodeEmbed);
    },
    './node_modules/react-daum-postcode/lib/index.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) => {
      'use strict';
      exports.Ay = void 0;
      var _DaumPostcodeEmbed = _interopRequireDefault(
        __webpack_require__(
          './node_modules/react-daum-postcode/lib/DaumPostcodeEmbed.js',
        ),
      );
      function _interopRequireDefault(a) {
        return a && a.__esModule ? a : { default: a };
      }
      _interopRequireDefault(
        __webpack_require__(
          './node_modules/react-daum-postcode/lib/useDaumPostcodePopup.js',
        ),
      ),
        _interopRequireDefault(
          __webpack_require__(
            './node_modules/react-daum-postcode/lib/loadPostcode.js',
          ),
        );
      var _default = _DaumPostcodeEmbed.default;
      exports.Ay = _default;
    },
    './node_modules/react-daum-postcode/lib/loadPostcode.js': (
      __unused_webpack_module,
      exports,
    ) => {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = exports.postcodeScriptUrl = void 0),
        (exports.postcodeScriptUrl =
          'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js');
      var loadPostcode = (function () {
        var a = null;
        return function () {
          var b =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
          return (
            a ||
            (a = new Promise(function (a, c) {
              var d = document.createElement('script');
              (d.src = b),
                (d.onload = function () {
                  var b, d;
                  return null !== (b = window) &&
                    void 0 !== b &&
                    null !== (d = b.daum) &&
                    void 0 !== d &&
                    d.Postcode
                    ? a(window.daum.Postcode)
                    : void c(
                        Error(
                          'Script is loaded successfully, but cannot find Postcode module. Check your scriptURL property.',
                        ),
                      );
                }),
                (d.onerror = function (a) {
                  return c(a);
                }),
                (d.id = 'daum_postcode_script'),
                document.body.appendChild(d);
            }))
          );
        };
      })();
      exports.default = loadPostcode;
    },
    './node_modules/react-daum-postcode/lib/useDaumPostcodePopup.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) => {
      'use strict';
      function _typeof(a) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (a) {
                return typeof a;
              }
            : function (a) {
                return a &&
                  'function' == typeof Symbol &&
                  a.constructor === Symbol &&
                  a !== Symbol.prototype
                  ? 'symbol'
                  : typeof a;
              })(a);
      }
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _react = __webpack_require__('./node_modules/react/index.js'),
        _loadPostcode = _interopRequireWildcard(
          __webpack_require__(
            './node_modules/react-daum-postcode/lib/loadPostcode.js',
          ),
        ),
        _excluded = [
          'defaultQuery',
          'left',
          'top',
          'popupKey',
          'popupTitle',
          'autoClose',
          'onComplete',
          'onResize',
          'onClose',
          'onSearch',
          'onError',
        ];
      function _getRequireWildcardCache(a) {
        if ('function' != typeof WeakMap) return null;
        var b = new WeakMap(),
          c = new WeakMap();
        return (_getRequireWildcardCache = function (a) {
          return a ? c : b;
        })(a);
      }
      function _interopRequireWildcard(a, b) {
        if (!b && a && a.__esModule) return a;
        if (null === a || ('object' !== _typeof(a) && 'function' != typeof a))
          return { default: a };
        var c = _getRequireWildcardCache(b);
        if (c && c.has(a)) return c.get(a);
        var d = {},
          e = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var f in a)
          if ('default' != f && Object.prototype.hasOwnProperty.call(a, f)) {
            var g = e ? Object.getOwnPropertyDescriptor(a, f) : null;
            g && (g.get || g.set)
              ? Object.defineProperty(d, f, g)
              : (d[f] = a[f]);
          }
        return (d.default = a), c && c.set(a, d), d;
      }
      function ownKeys(a, b) {
        var c = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(a);
          b &&
            (d = d.filter(function (b) {
              return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })),
            c.push.apply(c, d);
        }
        return c;
      }
      function _objectSpread(a) {
        for (var b, c = 1; c < arguments.length; c++)
          (b = null == arguments[c] ? {} : arguments[c]),
            c % 2
              ? ownKeys(Object(b), !0).forEach(function (c) {
                  _defineProperty(a, c, b[c]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    a,
                    Object.getOwnPropertyDescriptors(b),
                  )
                : ownKeys(Object(b)).forEach(function (c) {
                    Object.defineProperty(
                      a,
                      c,
                      Object.getOwnPropertyDescriptor(b, c),
                    );
                  });
        return a;
      }
      function _defineProperty(a, b, c) {
        return (
          b in a
            ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (a[b] = c),
          a
        );
      }
      function _objectWithoutProperties(a, b) {
        if (null == a) return {};
        var c,
          d,
          e = _objectWithoutPropertiesLoose(a, b);
        if (Object.getOwnPropertySymbols) {
          var f = Object.getOwnPropertySymbols(a);
          for (d = 0; d < f.length; d++)
            (c = f[d]),
              0 <= b.indexOf(c) ||
                (Object.prototype.propertyIsEnumerable.call(a, c) &&
                  (e[c] = a[c]));
        }
        return e;
      }
      function _objectWithoutPropertiesLoose(a, b) {
        if (null == a) return {};
        var c,
          d,
          e = {},
          f = Object.keys(a);
        for (d = 0; d < f.length; d++)
          (c = f[d]), 0 <= b.indexOf(c) || (e[c] = a[c]);
        return e;
      }
      exports.default = function useDaumPostcodePopup() {
        var a =
          0 < arguments.length && void 0 !== arguments[0]
            ? arguments[0]
            : _loadPostcode.postcodeScriptUrl;
        return (
          (0, _react.useEffect)(
            function () {
              (0, _loadPostcode.default)(a);
            },
            [a],
          ),
          (0, _react.useCallback)(
            function (b) {
              var c = _objectSpread({}, b),
                d = c.defaultQuery,
                e = c.left,
                f = c.top,
                g = c.popupKey,
                h = c.popupTitle,
                i = c.autoClose,
                j = c.onComplete,
                k = c.onResize,
                l = c.onClose,
                m = c.onSearch,
                n = c.onError,
                o = _objectWithoutProperties(c, _excluded);
              return (0, _loadPostcode.default)(a)
                .then(function (a) {
                  new a(
                    _objectSpread(
                      _objectSpread({}, o),
                      {},
                      { oncomplete: j, onsearch: m, onresize: k, onclose: l },
                    ),
                  ).open({
                    q: d,
                    left: e,
                    top: f,
                    popupTitle: h,
                    popupKey: g,
                    autoClose: i,
                  });
                })
                .catch(n);
            },
            [a],
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=stories-templates-DaumAdressSearch-stories.afdc6cf6.iframe.bundle.js.map
