'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [9647],
  {
    './src/lib/Icon/assets/empty-heart.svg': (
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
      function SvgEmptyHeart(_ref, svgRef) {
        let { title, titleId, ...props } = _ref;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          'svg',
          _extends(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              id: 'Isolation_Mode',
              'data-name': 'Isolation Mode',
              viewBox: '0 0 24 24',
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
              d: 'M12,23.462l-.866-.612C9.994,22.044,0,14.783,0,8.15A7.036,7.036,0,0,1,6.75.875,6.57,6.57,0,0,1,12,3.582,6.57,6.57,0,0,1,17.25.875,7.036,7.036,0,0,1,24,8.15c0,6.633-9.994,13.894-11.134,14.7ZM6.75,3.875A4.043,4.043,0,0,0,3,8.15c0,3.916,5.863,9.21,9,11.611,3.137-2.4,9-7.695,9-11.611a4.043,4.043,0,0,0-3.75-4.275A4.043,4.043,0,0,0,13.5,8.15h-3A4.043,4.043,0,0,0,6.75,3.875Z',
            })),
        );
      }
      let ForwardRef =
          react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgEmptyHeart),
        __WEBPACK_DEFAULT_EXPORT__ =
          __webpack_require__.p +
          'static/media/empty-heart.57a79d02e48dca04e3e4b8e4e89e996c.svg';
    },
  },
]);
