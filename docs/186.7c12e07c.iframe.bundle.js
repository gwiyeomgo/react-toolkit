'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [186],
  {
    './src/lib/Icon/assets/arrow-left.svg': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ReactComponent: () => ForwardRef,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _path,
        _path2,
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js',
        );
      function _extends() {
        return (_extends = Object.assign
          ? Object.assign.bind()
          : function (n) {
              for (var e = 1; e < arguments.length; e++) {
                var t = arguments[e];
                for (var r in t)
                  ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
              }
              return n;
            }).apply(null, arguments);
      }
      function SvgArrowLeft(_ref, svgRef) {
        let { title, titleId, ...props } = _ref;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          'svg',
          _extends(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              id: 'Outline',
              viewBox: '0 0 24 24',
              height: 50,
              ref: svgRef,
              'aria-labelledby': titleId,
            },
            props,
          ),
          title
            ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                'title',
                { id: titleId },
                title,
              )
            : null,
          _path ||
            (_path = react__WEBPACK_IMPORTED_MODULE_0__.createElement('path', {
              d: 'M10.48,19a1,1,0,0,1-.7-.29L5.19,14.12a3,3,0,0,1,0-4.24L9.78,5.29a1,1,0,0,1,1.41,0,1,1,0,0,1,0,1.42L6.6,11.29a1,1,0,0,0,0,1.42l4.59,4.58a1,1,0,0,1,0,1.42A1,1,0,0,1,10.48,19Z',
            })),
          _path2 ||
            (_path2 = react__WEBPACK_IMPORTED_MODULE_0__.createElement('path', {
              d: 'M17.48,19a1,1,0,0,1-.7-.29l-6-6a1,1,0,0,1,0-1.42l6-6a1,1,0,0,1,1.41,0,1,1,0,0,1,0,1.42L12.9,12l5.29,5.29a1,1,0,0,1,0,1.42A1,1,0,0,1,17.48,19Z',
            })),
        );
      }
      let ForwardRef =
          react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgArrowLeft),
        __WEBPACK_DEFAULT_EXPORT__ =
          __webpack_require__.p +
          'static/media/arrow-left.e90d0c5dc9f6cab3a338f69d1b7e3565.svg';
    },
  },
]);
