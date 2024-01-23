'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [464],
  {
    './node_modules/@mdx-js/react/index.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          MDXContext: () => _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.pC,
          MDXProvider: () => _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.Zo,
          useMDXComponents: () => _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.ah,
          withMDXComponents: () =>
            _lib_index_js__WEBPACK_IMPORTED_MODULE_0__.NF,
        });
      var _lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/@mdx-js/react/lib/index.js',
      );
    },
    './node_modules/@mdx-js/react/lib/index.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        NF: () => withMDXComponents,
        Zo: () => MDXProvider,
        ah: () => useMDXComponents,
        pC: () => MDXContext,
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/react/index.js',
      );
      let MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
      function withMDXComponents(Component) {
        return boundMDXComponent;
        function boundMDXComponent(props) {
          let allComponents = useMDXComponents(props.components);
          return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, {
            ...props,
            allComponents,
          });
        }
      }
      function useMDXComponents(components) {
        let contextComponents =
          react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
        return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
          () =>
            'function' == typeof components
              ? components(contextComponents)
              : { ...contextComponents, ...components },
          [contextComponents, components],
        );
      }
      let emptyObject = {};
      function MDXProvider({ components, children, disableParentContext }) {
        let allComponents;
        return (
          (allComponents = disableParentContext
            ? 'function' == typeof components
              ? components({})
              : components || emptyObject
            : useMDXComponents(components)),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            MDXContext.Provider,
            { value: allComponents },
            children,
          )
        );
      }
    },
  },
]);
