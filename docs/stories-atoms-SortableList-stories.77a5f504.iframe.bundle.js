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
        Default = { args: { initialList: ['1', '@', '#', 'A', '🤩'] } };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    initialList: ['1', '@', '#', 'A', '\uD83E\uDD29']\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      };
      let __namedExportsOrder = ['Default'];
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
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
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
          let { initialList } = _ref,
            [state, dispatch] = (0,
            react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, {
              list: initialList,
              dragItem: null,
              dragOverItem: null,
            }),
            dragStart = (position) => {
              dispatch({ type: 'SET_DRAG_ITEM', position });
            },
            dragEnter = (position) => {
              dispatch({ type: 'SET_DRAG_OVER_ITEM', position });
            },
            drop = () => {
              dispatch({ type: 'MOVE_ITEM' });
            };
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
            {
              children:
                state.list.length > 0 &&
                state.list.map((item, idx) =>
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    'div',
                    {
                      style: {
                        backgroundColor: 'lightblue',
                        margin: '20px 25%',
                        textAlign: 'center',
                        fontSize: '40px',
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
//# sourceMappingURL=stories-atoms-SortableList-stories.77a5f504.iframe.bundle.js.map
