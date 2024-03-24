'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [984],
  {
    './src/stories/atoms/SortableList.stories.tsx': (
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
          title: '1.Atoms/SortableList',
          component: __webpack_require__(
            './src/lib/SortableList/sortableList.tsx',
          ).b,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
        },
        Default = {
          args: {
            initialList: ['1', '@', '#', 'A', '🤩'],
            height: 100,
            width: 60,
          },
        };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    initialList: ['1', '@', '#', 'A', '\uD83E\uDD29'],\n    height: 100,\n    width: 60\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      };
      let __namedExportsOrder = ['Default'];
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
        sortableList: 'styles_sortableList__peis4',
      };
    },
    './src/lib/SortableList/sortableList.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { b: () => SortableList });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js',
        ),
        _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/lib/styles.module.css',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      let reducer = (state, action) => {
          let newList;
          switch (action.type) {
            case 'SET_DRAG_ITEM':
              return { ...state, dragItem: action.position };
            case 'SET_DRAG_OVER_ITEM':
              return { ...state, dragOverItem: action.position };
            case 'MOVE_ITEM':
              if (
                ((newList = [...state.list]),
                null !== state.dragItem && null !== state.dragOverItem)
              ) {
                let dragItemIndex = state.dragItem,
                  dragOverItemIndex = state.dragOverItem,
                  dragItemValue = newList[dragItemIndex];
                newList.splice(dragItemIndex, 1),
                  newList.splice(dragOverItemIndex, 0, dragItemValue);
              }
              return {
                ...state,
                list: newList,
                dragItem: null,
                dragOverItem: null,
              };
            default:
              return state;
          }
        },
        SortableList = (_ref) => {
          let { initialList, height, width } = _ref,
            [state, dispatch] = (0,
            react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, {
              list: initialList,
              dragItem: null,
              dragOverItem: null,
            }),
            [clientY, setClientY] = (0,
            react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
            dragStart = (position) => {
              dispatch({ type: 'SET_DRAG_ITEM', position });
            },
            dragEnter = (position) => {
              dispatch({ type: 'SET_DRAG_OVER_ITEM', position });
            },
            drop = () => {
              dispatch({ type: 'MOVE_ITEM' });
            },
            getIndexOfDivByClientY = (clientY) => {
              let index = Array.from(
                document.querySelectorAll('.draggable-div'),
              )
                .map((div) => div.getBoundingClientRect())
                .findIndex(
                  (rect) => clientY >= rect.top && clientY <= rect.bottom,
                );
              return -1 !== index ? index : null;
            };
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            'div',
            {
              className:
                _styles_module_css__WEBPACK_IMPORTED_MODULE_1__.A.sortableList,
              style: { width: width, height: height },
              children:
                state.list.length > 0 &&
                state.list.map((item, idx) =>
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    'div',
                    {
                      className: 'draggable-div',
                      onTouchMove: (e) => {
                        setClientY(e.targetTouches[0].clientY);
                      },
                      onTouchEnd: () => {
                        let changedIdx = getIndexOfDivByClientY(clientY);
                        changedIdx && (dragEnter(changedIdx), drop());
                      },
                      onTouchStart: () => {
                        dragStart(idx);
                      },
                      style: {
                        backgroundColor: 'lightblue',
                        border: '1px solid black',
                        width: '100%',
                        height: height / state.list.length,
                      },
                      draggable: !0,
                      onDragStart: () => dragStart(idx),
                      onDragEnter: () => dragEnter(idx),
                      onDragEnd: drop,
                      onDragOver: (e) => e.preventDefault(),
                      children: item,
                    },
                    idx,
                  ),
                ),
            },
          );
        };
      try {
        (SortableList.displayName = 'SortableList'),
          (SortableList.__docgenInfo = {
            description: '',
            displayName: 'SortableList',
            props: {
              initialList: {
                defaultValue: null,
                description: '',
                name: 'initialList',
                required: !0,
                type: { name: 'string[]' },
              },
              height: {
                defaultValue: null,
                description: '',
                name: 'height',
                required: !0,
                type: { name: 'number' },
              },
              width: {
                defaultValue: null,
                description: '',
                name: 'width',
                required: !0,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/lib/SortableList/sortableList.tsx#SortableList'
            ] = {
              docgenInfo: SortableList.__docgenInfo,
              name: 'SortableList',
              path: 'src/lib/SortableList/sortableList.tsx#SortableList',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './node_modules/react/cjs/react-jsx-runtime.production.min.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) => {
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var f = __webpack_require__('./node_modules/react/index.js'),
        k = Symbol.for('react.element'),
        l = Symbol.for('react.fragment'),
        m = Object.prototype.hasOwnProperty,
        n =
          f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        p = { key: !0, ref: !0, __self: !0, __source: !0 };
      function q(c, a, g) {
        var b,
          d = {},
          e = null,
          h = null;
        for (b in (void 0 !== g && (e = '' + g),
        void 0 !== a.key && (e = '' + a.key),
        void 0 !== a.ref && (h = a.ref),
        a))
          m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
        if (c && c.defaultProps)
          for (b in (a = c.defaultProps)) void 0 === d[b] && (d[b] = a[b]);
        return {
          $$typeof: k,
          type: c,
          key: e,
          ref: h,
          props: d,
          _owner: n.current,
        };
      }
      (exports.Fragment = l), (exports.jsx = q), (exports.jsxs = q);
    },
    './node_modules/react/jsx-runtime.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__,
    ) => {
      module.exports = __webpack_require__(
        './node_modules/react/cjs/react-jsx-runtime.production.min.js',
      );
    },
  },
]);
//# sourceMappingURL=stories-atoms-SortableList-stories.2cde6c9d.iframe.bundle.js.map
