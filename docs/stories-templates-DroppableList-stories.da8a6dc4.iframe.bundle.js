'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [5590],
  {
    './src/stories/templates/DroppableList.stories.tsx': (
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
          title: '4.Templates/DroppableList',
          component: __webpack_require__(
            './src/lib/SortableList/droppableList.tsx',
          ).s,
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
    './src/lib/SortableList/droppableList.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { s: () => DroppableList });
      var _templateObject,
        _templateObject2,
        _Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js',
          ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js',
        ),
        react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js',
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      let getItems = (count) =>
          Array.from({ length: count }, (_, k) => ({
            id: 'item-'.concat(k),
            content: 'item '.concat(k),
          })),
        reorder = (list, startIndex, endIndex) => {
          let result = Array.from(list),
            [removed] = result.splice(startIndex, 1);
          return result.splice(endIndex, 0, removed), result;
        },
        Item = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              [
                '\n  user-select: none;\n  padding: ',
                'px;\n  margin: 0 0 ',
                'px 0;\n',
              ],
            )),
          16,
          8,
        ),
        List = styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_gwiyeom_Documents_react_react_toolkit_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.A)(
              ['\n  padding: ', 'px;\n  width: 250px;\n'],
            )),
          8,
        ),
        DroppableList = (props) => {
          let { count = 10 } = props,
            [items, setItems] = (0,
            react__WEBPACK_IMPORTED_MODULE_0__.useState)(getItems(count));
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.JY,
            {
              onDragEnd: (result) => {
                result.destination &&
                  setItems(
                    reorder(
                      items,
                      result.source.index,
                      result.destination.index,
                    ),
                  );
              },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.gL,
                {
                  droppableId: 'droppable',
                  children: (provided) =>
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                      List,
                      {
                        ...provided.droppableProps,
                        ref: provided.innerRef,
                        children: [
                          items.map((item, index) =>
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                              react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.sx,
                              {
                                draggableId: item.id,
                                index: index,
                                children: (provided) =>
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                    Item,
                                    {
                                      ref: provided.innerRef,
                                      ...provided.draggableProps,
                                      ...provided.dragHandleProps,
                                      children: item.content,
                                    },
                                  ),
                              },
                              item.id,
                            ),
                          ),
                          provided.placeholder,
                        ],
                      },
                    ),
                },
              ),
            },
          );
        };
      try {
        (DroppableList.displayName = 'DroppableList'),
          (DroppableList.__docgenInfo = {
            description: '',
            displayName: 'DroppableList',
            props: {
              count: {
                defaultValue: null,
                description: '',
                name: 'count',
                required: !1,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/lib/SortableList/droppableList.tsx#DroppableList'
            ] = {
              docgenInfo: DroppableList.__docgenInfo,
              name: 'DroppableList',
              path: 'src/lib/SortableList/droppableList.tsx#DroppableList',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
]);
