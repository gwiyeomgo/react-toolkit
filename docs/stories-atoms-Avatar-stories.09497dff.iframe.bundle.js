'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [691],
  {
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
        touched: 'styles_touched__YgpJR',
      };
    },
    './src/lib/Avatar/avatar.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { e: () => Avatar }),
        __webpack_require__('./node_modules/react/index.js');
      var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/lib/styles.module.css',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      let Avatar = (props) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
          className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1__.A.avatar,
          style: { ...props.style },
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            'img',
            {
              src: props.src,
              style: {
                width: '100%',
                height: '100%',
                borderRadius: props.imageBorderRadius
                  ? props.imageBorderRadius
                  : 50,
              },
              alt: 'avatar',
            },
          ),
        });
      try {
        (Avatar.displayName = 'Avatar'),
          (Avatar.__docgenInfo = {
            description: '',
            displayName: 'Avatar',
            props: {
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              src: {
                defaultValue: null,
                description: '',
                name: 'src',
                required: !1,
                type: { name: 'string' },
              },
              imageBorderRadius: {
                defaultValue: null,
                description: '',
                name: 'imageBorderRadius',
                required: !1,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/lib/Avatar/avatar.tsx#Avatar'] = {
              docgenInfo: Avatar.__docgenInfo,
              name: 'Avatar',
              path: 'src/lib/Avatar/avatar.tsx#Avatar',
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
//# sourceMappingURL=stories-atoms-Avatar-stories.09497dff.iframe.bundle.js.map
