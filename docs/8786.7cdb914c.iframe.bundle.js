'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [8786],
  {
    './src/lib/Icon/assets/menu-burger.svg': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ReactComponent: () => ForwardRef,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _g,
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
      function SvgMenuBurger(_ref, svgRef) {
        let { title, titleId, ...props } = _ref;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          'svg',
          _extends(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              id: 'Capa_1',
              x: '0px',
              y: '0px',
              viewBox: '0 0 512 512',
              style: { enableBackground: 'new 0 0 512 512' },
              xmlSpace: 'preserve',
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
          _g ||
            (_g = react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'g',
              null,
              react__WEBPACK_IMPORTED_MODULE_0__.createElement('path', {
                d: 'M480,224H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,224,480,224z',
              }),
              react__WEBPACK_IMPORTED_MODULE_0__.createElement('path', {
                d: 'M32,138.667h448c17.673,0,32-14.327,32-32s-14.327-32-32-32H32c-17.673,0-32,14.327-32,32S14.327,138.667,32,138.667z',
              }),
              react__WEBPACK_IMPORTED_MODULE_0__.createElement('path', {
                d: 'M480,373.333H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,373.333,480,373.333z',
              }),
            )),
        );
      }
      let ForwardRef =
          react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgMenuBurger),
        __WEBPACK_DEFAULT_EXPORT__ =
          __webpack_require__.p +
          'static/media/menu-burger.e7df60578a2261989aa8230bbacd3f1e.svg';
    },
  },
]);
