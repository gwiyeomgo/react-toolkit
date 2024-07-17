'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [7525],
  {
    './src/lib/Icon/assets/star.svg': (
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
      function SvgStar(_ref, svgRef) {
        let { title, titleId, ...props } = _ref;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          'svg',
          _extends(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              id: 'Outline',
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
              d: 'M23.836,8.794a3.179,3.179,0,0,0-3.067-2.226H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832L4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6A3.177,3.177,0,0,0,23.836,8.794Zm-2.343,1.991-4.144,3.029a1,1,0,0,0-.362,1.116L18.562,19.8a1.227,1.227,0,0,1-1.895,1.365l-4.075-3a1,1,0,0,0-1.184,0l-4.075,3a1.227,1.227,0,0,1-1.9-1.365L7.013,14.93a1,1,0,0,0-.362-1.116L2.507,10.785a1.227,1.227,0,0,1,.724-2.217h5.1a1,1,0,0,0,.952-.694l1.55-4.831a1.227,1.227,0,0,1,2.336,0l1.55,4.831a1,1,0,0,0,.952.694h5.1a1.227,1.227,0,0,1,.724,2.217Z',
            })),
        );
      }
      let ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgStar),
        __WEBPACK_DEFAULT_EXPORT__ =
          __webpack_require__.p +
          'static/media/star.64cf0da9762e5a2178cc9c7cce85533a.svg';
    },
  },
]);
