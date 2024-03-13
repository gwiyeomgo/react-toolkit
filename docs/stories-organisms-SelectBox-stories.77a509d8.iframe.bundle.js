'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [250],
  {
    './src/stories/organisms/SelectBox.stories.ts': (
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
          title: '3.Organisms/SelectBox',
          component: __webpack_require__('./src/lib/SelectBox/selectBox.tsx').a,
          tags: ['autodocs'],
        },
        Default = {
          args: {
            data: [
              { id: 1, value: 'A', label: 'Option 1' },
              { id: 2, value: 'B', label: 'Option 2' },
              { id: 3, value: 'C', label: 'Option 3' },
            ],
          },
        };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    data: [{\n      id: 1,\n      value: 'A',\n      label: 'Option 1'\n    }, {\n      id: 2,\n      value: 'B',\n      label: 'Option 2'\n    }, {\n      id: 3,\n      value: 'C',\n      label: 'Option 3'\n    }]\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      };
      let __namedExportsOrder = ['Default'];
    },
    './src/lib/SelectBox/collection.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Ge: () => useCollection,
        pM: () => Collection,
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js',
        ),
        _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/lib/styles.module.css',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      let CollectionContext = (0,
      react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);
      function useCollection() {
        let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
          CollectionContext,
        );
        if (!context)
          throw Error(
            'useCollection 는 Collection.Provider 내부에서 사용되어야 합니다',
          );
        return {
          getItems: () =>
            Array.from(context.itemMap.current).map((item, index) => ({
              index: index,
              value: item[1].value,
              ref: item[1].ref,
            })),
          focusItem: (v) => {
            context.itemMap.current.forEach((item) => {
              item.value === v
                ? (item.ref.current.focus(),
                  item.ref.current.classList.add(
                    _styles_module_css__WEBPACK_IMPORTED_MODULE_1__.A.selected,
                  ))
                : item.ref.current.classList.remove(
                    _styles_module_css__WEBPACK_IMPORTED_MODULE_1__.A.selected,
                  );
            });
          },
        };
      }
      let Collection = {
        Provider: (_ref) => {
          let { children } = _ref,
            itemMap = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map());
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            CollectionContext.Provider,
            { value: { itemMap }, children: children },
          );
        },
        Item: function CollectionItem(_ref2) {
          let { index, value, children, onSelectValue } = _ref2,
            context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
              CollectionContext,
            );
          if (!context)
            throw Error(
              'CollectionItem 는 Collection.Provider 내부에서 사용되어야 합니다',
            );
          let ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
          return (
            (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
              () => (
                context.itemMap.current.set(ref, { ref, value }),
                () => {
                  context.itemMap.current.delete(ref);
                }
              ),
              [context, value],
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
              'data-collection-item': index,
              ref: ref,
              onClick: () => {
                context.itemMap.current.forEach((item) => {
                  var _item$ref,
                    _item$ref$current,
                    _item$ref2,
                    _item$ref2$current;
                  item && item.ref === ref
                    ? (onSelectValue && onSelectValue(item.value),
                      null === (_item$ref = item.ref) ||
                        void 0 === _item$ref ||
                        null === (_item$ref$current = _item$ref.current) ||
                        void 0 === _item$ref$current ||
                        _item$ref$current.classList.add(
                          _styles_module_css__WEBPACK_IMPORTED_MODULE_1__.A
                            .selected,
                        ))
                    : null === (_item$ref2 = item.ref) ||
                      void 0 === _item$ref2 ||
                      null === (_item$ref2$current = _item$ref2.current) ||
                      void 0 === _item$ref2$current ||
                      _item$ref2$current.classList.remove(
                        _styles_module_css__WEBPACK_IMPORTED_MODULE_1__.A
                          .selected,
                      );
                });
              },
              onKeyDown: (e) => {
                var _ref$current, _ref$current2;
                if ('ArrowDown' === e.key) {
                  e.preventDefault();
                  let items = Array.from(context.itemMap.current.values()),
                    currentIndex = items.findIndex((item) => item.ref === ref),
                    nextIndex =
                      currentIndex + 1 < items.length ? currentIndex + 1 : 0,
                    nextItem = items[nextIndex];
                  nextItem &&
                    (nextItem.ref.current.focus(),
                    nextItem.ref.current.classList.add(
                      _styles_module_css__WEBPACK_IMPORTED_MODULE_1__.A
                        .selected,
                    ),
                    null == ref ||
                      null === (_ref$current = ref.current) ||
                      void 0 === _ref$current ||
                      _ref$current.classList.remove(
                        _styles_module_css__WEBPACK_IMPORTED_MODULE_1__.A
                          .selected,
                      ));
                }
                if ('ArrowUp' === e.key) {
                  e.preventDefault();
                  let items = Array.from(context.itemMap.current.values()),
                    currentIndex = items.findIndex((item) => item.ref === ref),
                    prevIndex =
                      currentIndex - 1 >= 0
                        ? currentIndex - 1
                        : items.length - 1,
                    prevItem = items[prevIndex];
                  prevItem &&
                    (prevItem.ref.current.focus(),
                    prevItem.ref.current.classList.add(
                      _styles_module_css__WEBPACK_IMPORTED_MODULE_1__.A
                        .selected,
                    ),
                    null == ref ||
                      null === (_ref$current2 = ref.current) ||
                      void 0 === _ref$current2 ||
                      _ref$current2.classList.remove(
                        _styles_module_css__WEBPACK_IMPORTED_MODULE_1__.A
                          .selected,
                      ));
                }
                if ('Enter' === e.key) {
                  let items = Array.from(context.itemMap.current.values()),
                    currentIndex = items.findIndex((item) => item.ref === ref);
                  onSelectValue && onSelectValue(items[currentIndex].value);
                }
              },
              tabIndex: index,
              role: 'listitem',
              children: children,
            })
          );
        },
      };
    },
    './src/lib/SelectBox/select.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { l: () => Select });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js',
          ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js',
        ),
        _collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/lib/SelectBox/collection.tsx',
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      let TriggerButton =
          styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.button(
            _templateObject ||
              (_templateObject = (0,
              _Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
                [
                  "\n  position: relative;\n  padding: 10px;\n  background-color: white;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  font-size: 16px;\n  span {\n    display: inline-block;\n    vertical-align: middle;\n  }\n  box-shadow:\n    rgba(0, 0, 0, 0.07) 0px 1px 2px,\n    rgba(0, 0, 0, 0.07) 0px 2px 4px,\n    rgba(0, 0, 0, 0.07) 0px 4px 8px,\n    rgba(0, 0, 0, 0.07) 0px 8px 16px,\n    rgba(0, 0, 0, 0.07) 0px 16px 32px,\n    rgba(0, 0, 0, 0.07) 0px 32px 64px;\n  &::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    right: 10px;\n    transform: translateY(-50%);\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 5px solid #000;\n  }\n\n  &[aria-expanded='true']::after {\n    border-top: none;\n    border-bottom: 5px solid #000;\n    transform: translateY(-50%) rotate(180deg);\n  }\n",
                ],
              )),
          ),
        SelectContext = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(
          void 0,
        ),
        useSelectContext = () => {
          let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
            SelectContext,
          );
          if (!context)
            throw Error(
              'SelectContext은 SelectBox.Provider 내에서 사용되어야 합니다',
            );
          return context;
        },
        Ul = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.ul(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                '\n  display: ',
                ';\n  width: ',
                ';\n  margin: auto;\n  padding: 0;\n  border-radius: 0px 0px 10px 10px;\n  background-color: white;\n  position: absolute;\n  border-radius: 10px;\n  box-shadow:\n    rgb(204, 219, 232) 3px 3px 6px 0px inset,\n    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;\n',
              ],
            )),
          (props) => (props.open ? 'block' : 'none'),
          (props) => props.width,
        ),
        Li = styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.li(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(
              [
                '\n  display: flex;\n  width:  ',
                ';\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: space-between;\n  align-items: center;\n  padding: 9px 14px;x\n  border-bottom: 2px solid #d2d2d2;\n  border-top: none;\n  border-radius: 10px;\n  color: #d2d2d2;\n  &:hover {\n    color: black;\n    cursor: pointer;\n }\n  &:last-child {\n    border-bottom: none;\n  }\n',
              ],
            )),
          (props) => props.width,
        ),
        Select = {
          Option: (_ref4) => {
            let { index, value, children, context, width } = _ref4,
              options = (0, _collection__WEBPACK_IMPORTED_MODULE_1__.Ge)();
            return (
              (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                context &&
                  context.open &&
                  value === context.value &&
                  options.focusItem(value);
              }, [context, options, value]),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _collection__WEBPACK_IMPORTED_MODULE_1__.pM.Item,
                {
                  value: value,
                  index: index,
                  onSelectValue: (v) => {
                    context && context.onValueChange(v),
                      context && context.onOpenChange(!1);
                  },
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Li, {
                    tabIndex: index,
                    width: width || '112px',
                    children: children,
                  }),
                },
              )
            );
          },
          OptionList: (_ref3) => {
            let { children, width } = _ref3,
              context = useSelectContext();
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Ul, {
              open: context.open,
              width: width || '140px',
              role: 'listbox',
              children:
                context.open &&
                react__WEBPACK_IMPORTED_MODULE_0__.Children.map(
                  children,
                  (child, index) => {
                    if (
                      react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(
                        child,
                      ) &&
                      index > -1
                    )
                      return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(
                        child,
                        { ...child.props, index, context },
                      );
                  },
                ),
            });
          },
          Provider: (_ref2) => {
            let { children, defaultValue } = _ref2,
              [open, setOpen] = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
              [value, setValue] = (0,
              react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              SelectContext.Provider,
              {
                value: {
                  open,
                  onOpenChange: setOpen,
                  value,
                  onValueChange: setValue,
                },
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _collection__WEBPACK_IMPORTED_MODULE_1__.pM.Provider,
                  { children: children },
                ),
              },
            );
          },
          Trigger: (_ref) => {
            let { data } = _ref,
              context = useSelectContext(),
              onKeyDown = (e) => {
                let { keyCode } = e;
                40 !== keyCode ||
                  (e.preventDefault(),
                  context.open || context.onOpenChange(!0));
              },
              filteredData =
                data && data.filter((obj) => obj.value === context.value);
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              TriggerButton,
              {
                onClick: () => {
                  context.onOpenChange(!context.open);
                },
                role: 'combobox',
                'aria-expanded': context.open,
                children:
                  filteredData &&
                  filteredData.map((item) =>
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      'span',
                      {
                        onKeyDown: onKeyDown,
                        tabIndex: 0,
                        style: { width: '120px' },
                        children: item.label,
                      },
                      item.id,
                    ),
                  ),
              },
            );
          },
        };
    },
    './src/lib/SelectBox/selectBox.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { a: () => SelectBox });
      var _lib_SelectBox_select__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__('./src/lib/SelectBox/select.tsx');
      __webpack_require__('./node_modules/react/index.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        './node_modules/react/jsx-runtime.js',
      );
      let SelectBox = (_ref) => {
        let { data } = _ref;
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            _lib_SelectBox_select__WEBPACK_IMPORTED_MODULE_0__.l.Provider,
            {
              defaultValue: data[0].value,
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _lib_SelectBox_select__WEBPACK_IMPORTED_MODULE_0__.l.Trigger,
                  { data: data },
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _lib_SelectBox_select__WEBPACK_IMPORTED_MODULE_0__.l
                    .OptionList,
                  {
                    children: data.map((obj) =>
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                        _lib_SelectBox_select__WEBPACK_IMPORTED_MODULE_0__.l
                          .Option,
                        {
                          index: obj.id,
                          value: obj.value,
                          children: obj.label,
                        },
                        obj.id,
                      ),
                    ),
                  },
                ),
              ],
            },
          ),
        });
      };
      try {
        (SelectBox.displayName = 'SelectBox'),
          (SelectBox.__docgenInfo = {
            description: '',
            displayName: 'SelectBox',
            props: {
              data: {
                defaultValue: null,
                description: '',
                name: 'data',
                required: !0,
                type: { name: 'SelectTriggerProps[]' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/lib/SelectBox/selectBox.tsx#SelectBox'
            ] = {
              docgenInfo: SelectBox.__docgenInfo,
              name: 'SelectBox',
              path: 'src/lib/SelectBox/selectBox.tsx#SelectBox',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/lib/styles.module.css': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
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
      };
    },
  },
]);
