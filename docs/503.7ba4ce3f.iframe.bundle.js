(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [503],
  {
    './node_modules/@storybook/addon-docs/dist/DocsRenderer-NNNQARDV.mjs': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        DocsRenderer: () => DocsRenderer,
      });
      var react = __webpack_require__('./node_modules/react/index.js'),
        react_18 = __webpack_require__(
          './node_modules/@storybook/react-dom-shim/dist/react-18.mjs',
        ),
        dist = __webpack_require__(
          './node_modules/@storybook/blocks/dist/index.mjs',
        ),
        defaultComponents = { code: dist.XA, a: dist.zE, ...dist.Sw },
        ErrorBoundary = class extends react.Component {
          constructor() {
            super(...arguments), (this.state = { hasError: !1 });
          }
          static getDerivedStateFromError() {
            return { hasError: !0 };
          }
          componentDidCatch(err) {
            let { showException } = this.props;
            showException(err);
          }
          render() {
            let { hasError } = this.state,
              { children } = this.props;
            return hasError
              ? null
              : react.createElement(react.Fragment, null, children);
          }
        },
        DocsRenderer = class {
          constructor() {
            (this.render = async (context, docsParameter, element) => {
              let components = {
                  ...defaultComponents,
                  ...docsParameter?.components,
                },
                TDocs = dist.kQ;
              return new Promise((resolve, reject) => {
                __webpack_require__
                  .e(294)
                  .then(
                    __webpack_require__.bind(
                      __webpack_require__,
                      './node_modules/@mdx-js/react/index.js',
                    ),
                  )
                  .then(({ MDXProvider }) =>
                    (0, react_18.d)(
                      react.createElement(
                        ErrorBoundary,
                        { showException: reject, key: Math.random() },
                        react.createElement(
                          MDXProvider,
                          { components },
                          react.createElement(TDocs, {
                            context,
                            docsParameter,
                          }),
                        ),
                      ),
                      element,
                    ),
                  )
                  .then(() => resolve());
              });
            }),
              (this.unmount = (element) => {
                (0, react_18.H)(element);
              });
          }
        };
    },
    './node_modules/memoizerific sync recursive': (module) => {
      function webpackEmptyContext(req) {
        var e = Error("Cannot find module '" + req + "'");
        throw ((e.code = 'MODULE_NOT_FOUND'), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = './node_modules/memoizerific sync recursive'),
        (module.exports = webpackEmptyContext);
    },
  },
]);
