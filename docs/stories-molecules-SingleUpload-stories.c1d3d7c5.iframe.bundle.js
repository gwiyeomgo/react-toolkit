'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [344],
  {
    './src/stories/molecules/SingleUpload.stories.tsx': (
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
          title: '2.Molecules/SingleUpload',
          component: __webpack_require__('./src/lib/Upload/singleUplaod.tsx').o,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: {
            isImageFile: {
              control: { type: 'boolean' },
              description: '이미지 파일만 업로드',
            },
          },
        },
        Default = {
          args: {
            isImageFile: !0,
            onSave: async (file) => {
              console.log('Default :', file);
            },
          },
        };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    isImageFile: true,\n    onSave: async file => {\n      console.log('Default :', file);\n    }\n  }\n}",
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
        touched: 'styles_touched__YgpJR',
      };
    },
    './src/lib/Icon/icon.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { I: () => Icon });
      var react = __webpack_require__('./node_modules/react/index.js');
      function lazy(importFn) {
        return (0, react.lazy)(async () => ({
          default: (await importFn()).ReactComponent,
        }));
      }
      let icons = {
        Cross: lazy(async () =>
          __webpack_require__
            .e(355)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/cross.svg',
              ),
            ),
        ),
        Download: lazy(async () =>
          __webpack_require__
            .e(469)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/download.svg',
              ),
            ),
        ),
        Degrees360: lazy(async () =>
          __webpack_require__
            .e(278)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/360-degrees.svg',
              ),
            ),
        ),
        MenuBurger: lazy(async () =>
          __webpack_require__
            .e(786)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/menu-burger.svg',
              ),
            ),
        ),
        Star: lazy(async () =>
          __webpack_require__
            .e(525)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/star.svg',
              ),
            ),
        ),
        Search: lazy(async () =>
          __webpack_require__
            .e(49)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/search.svg',
              ),
            ),
        ),
        Heart: lazy(async () =>
          __webpack_require__
            .e(763)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/heart.svg',
              ),
            ),
        ),
        Minus: lazy(async () =>
          __webpack_require__
            .e(955)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/minus.svg',
              ),
            ),
        ),
        Plus: lazy(async () =>
          __webpack_require__
            .e(205)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/plus.svg',
              ),
            ),
        ),
      };
      var jsx_runtime = __webpack_require__(
        './node_modules/react/jsx-runtime.js',
      );
      let Icon = (_ref) => {
        let { icon, className, rotate, width, height, color, ...rest } = _ref,
          SvgIcon = (0, react.useMemo)(() => icons[icon], [icon]);
        return SvgIcon
          ? (0, jsx_runtime.jsx)('div', {
              className: className,
              'aria-label': icon,
              role: 'img',
              style: {
                width: width,
                height: height,
                fill: color,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transform: rotate ? 'rotate('.concat(rotate, 'deg)') : void 0,
              },
              ...rest,
              children: (0, jsx_runtime.jsx)(react.Suspense, {
                fallback: null,
                children: (0, jsx_runtime.jsx)(SvgIcon, {}),
              }),
            })
          : null;
      };
      try {
        (Icon.displayName = 'Icon'),
          (Icon.__docgenInfo = {
            description: '',
            displayName: 'Icon',
            props: {
              icon: {
                defaultValue: null,
                description: '',
                name: 'icon',
                required: !0,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"Cross"' },
                    { value: '"Download"' },
                    { value: '"Degrees360"' },
                    { value: '"MenuBurger"' },
                    { value: '"Star"' },
                    { value: '"Search"' },
                    { value: '"Heart"' },
                    { value: '"Minus"' },
                    { value: '"Plus"' },
                  ],
                },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              rotate: {
                defaultValue: null,
                description: '',
                name: 'rotate',
                required: !1,
                type: { name: 'number' },
              },
              width: {
                defaultValue: null,
                description: '',
                name: 'width',
                required: !1,
                type: { name: 'string' },
              },
              height: {
                defaultValue: null,
                description: '',
                name: 'height',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/lib/Icon/icon.tsx#Icon'] = {
              docgenInfo: Icon.__docgenInfo,
              name: 'Icon',
              path: 'src/lib/Icon/icon.tsx#Icon',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/lib/Upload/fileUpload.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { e: () => FileUpload });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js',
        ),
        _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/lib/styles.module.css',
        ),
        heic2any__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/heic2any/dist/heic2any.js',
        ),
        heic2any__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          heic2any__WEBPACK_IMPORTED_MODULE_2__,
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      let FileUpload = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
        (props, ref) => {
          let { selectFile, placeholder } = props,
            inputRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),
            [fileName, setFileName] = (0,
            react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
            [accept, setAccept] = (0,
            react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
            changeAccept = (str) => setAccept(str),
            clear = () => {
              inputRef.current &&
                ((inputRef.current.value = ''),
                selectFile(null, ''),
                setFileName(''));
            },
            onSuccess = () => {
              console.log('upload 완료');
            },
            onError = () => {
              console.log('error');
            },
            changeFile = (file) => {
              console.log('type', file.type),
                file.type.startsWith('image/')
                  ? blobToObjectURL(file).then((src) => {
                      selectFile(file, src);
                    })
                  : selectFile(file, ''),
                setFileName(file.name);
            },
            uploadFail = (maxSize, type) => {
              alert(
                ' '
                  .concat(type, ' Maximum upload size:')
                  .concat(maxSize / 1048576, 'MB'),
              ),
                selectFile(null, ''),
                setFileName('');
            },
            blobToObjectURL = async (blob) => {
              let src = '';
              if ('image/heic' !== blob.type) return URL.createObjectURL(blob);
              {
                let imageBlob =
                  await heic2any__WEBPACK_IMPORTED_MODULE_2___default()({
                    blob: blob,
                  });
                if (imageBlob) {
                  if (Array.isArray(imageBlob)) return '';
                  src = URL.createObjectURL(imageBlob);
                }
              }
              return src;
            };
          return (
            (0, react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(
              ref,
              () => ({
                clear,
                onSuccess,
                onError,
                changeAccept,
                input: inputRef.current,
              }),
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)('div', {
              className:
                _styles_module_css__WEBPACK_IMPORTED_MODULE_1__.A.upload,
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  'input',
                  {
                    className:
                      _styles_module_css__WEBPACK_IMPORTED_MODULE_1__.A.name,
                    value: fileName,
                    placeholder: placeholder,
                  },
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  'label',
                  { htmlFor: 'file', children: '파일찾기' },
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  'input',
                  {
                    'data-testid': 'Upload',
                    type: 'file',
                    id: 'file',
                    accept: accept,
                    ref: inputRef,
                    onChange: (event) => {
                      let file = event.target.files && event.target.files[0];
                      file &&
                        (file.size > 10485760
                          ? uploadFail(10485760, file.type)
                          : changeFile(file));
                    },
                  },
                ),
              ],
            })
          );
        },
      );
      FileUpload.displayName = 'FileUpload';
      try {
        (FileUpload.displayName = 'FileUpload'),
          (FileUpload.__docgenInfo = {
            description: '',
            displayName: 'FileUpload',
            props: {
              selectFile: {
                defaultValue: null,
                description: '',
                name: 'selectFile',
                required: !0,
                type: { name: '(p: File, s: string) => void' },
              },
              placeholder: {
                defaultValue: null,
                description: '',
                name: 'placeholder',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/lib/Upload/fileUpload.tsx#FileUpload'
            ] = {
              docgenInfo: FileUpload.__docgenInfo,
              name: 'FileUpload',
              path: 'src/lib/Upload/fileUpload.tsx#FileUpload',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/lib/Upload/singleUplaod.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { o: () => SingleUpload });
      var react = __webpack_require__('./node_modules/react/index.js'),
        Upload_fileUpload = __webpack_require__(
          './src/lib/Upload/fileUpload.tsx',
        ),
        styles_module = __webpack_require__('./src/lib/styles.module.css'),
        icon = __webpack_require__('./src/lib/Icon/icon.tsx'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      let Upload_displayImage = (_ref) => {
        let { src, remove } = _ref;
        return (0, jsx_runtime.jsxs)('div', {
          className: styles_module.A.squareImg,
          children: [
            (0, jsx_runtime.jsx)('button', {
              className: styles_module.A.xButton,
              onClick: remove,
              children: (0, jsx_runtime.jsx)(icon.I, {
                icon: 'Cross',
                color: 'white',
                width: '1rem',
                height: '1rem',
              }),
            }),
            (0, jsx_runtime.jsx)('img', {
              className: styles_module.A.image,
              alt: 'not found',
              width: '100%',
              src: src,
            }),
          ],
        });
      };
      try {
        (displayImage.displayName = 'displayImage'),
          (displayImage.__docgenInfo = {
            description: '',
            displayName: 'displayImage',
            props: {
              src: {
                defaultValue: null,
                description: '',
                name: 'src',
                required: !0,
                type: { name: 'string' },
              },
              remove: {
                defaultValue: null,
                description: '',
                name: 'remove',
                required: !0,
                type: { name: '() => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/lib/Upload/displayImage.tsx#displayImage'
            ] = {
              docgenInfo: displayImage.__docgenInfo,
              name: 'displayImage',
              path: 'src/lib/Upload/displayImage.tsx#displayImage',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      let SingleUpload = (props) => {
        let { imageFileOnly = !1, onSave } = props,
          [selectedFile, setSelectedFile] = (0, react.useState)(null),
          [src, setSrc] = (0, react.useState)(''),
          ref = react.createRef();
        return (
          (0, react.useEffect)(() => {
            let accept = imageFileOnly ? 'image/*' : '';
            if (null != accept) {
              var _ref$current;
              null === (_ref$current = ref.current) ||
                void 0 === _ref$current ||
                _ref$current.changeAccept(accept);
            }
          }, [imageFileOnly]),
          (0, jsx_runtime.jsxs)('div', {
            style: { display: 'inline-block' },
            children: [
              (0, jsx_runtime.jsx)(Upload_fileUpload.e, {
                ref: ref,
                selectFile: (image, src) => {
                  setSelectedFile(image),
                    setSrc(src),
                    onSave(image)
                      .then(() => {
                        var _ref$current3;
                        return null === (_ref$current3 = ref.current) ||
                          void 0 === _ref$current3
                          ? void 0
                          : _ref$current3.onSuccess();
                      })
                      .catch((reason) => {
                        var _ref$current4;
                        return null === (_ref$current4 = ref.current) ||
                          void 0 === _ref$current4
                          ? void 0
                          : _ref$current4.onError(reason);
                      });
                },
              }),
              (0, jsx_runtime.jsx)('br', {}),
              selectedFile &&
                selectedFile.type.startsWith('image/') &&
                (0, jsx_runtime.jsx)(Upload_displayImage, {
                  src: src,
                  remove: () => {
                    var _ref$current2;
                    setSelectedFile(null),
                      null === (_ref$current2 = ref.current) ||
                        void 0 === _ref$current2 ||
                        _ref$current2.clear();
                  },
                }),
            ],
          })
        );
      };
      try {
        (SingleUpload.displayName = 'SingleUpload'),
          (SingleUpload.__docgenInfo = {
            description: '',
            displayName: 'SingleUpload',
            props: {
              imageFileOnly: {
                defaultValue: null,
                description: '',
                name: 'imageFileOnly',
                required: !1,
                type: { name: 'boolean' },
              },
              onSave: {
                defaultValue: null,
                description: '',
                name: 'onSave',
                required: !0,
                type: { name: '(file: File) => Promise<void | null>' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/lib/Upload/singleUplaod.tsx#SingleUpload'
            ] = {
              docgenInfo: SingleUpload.__docgenInfo,
              name: 'SingleUpload',
              path: 'src/lib/Upload/singleUplaod.tsx#SingleUpload',
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
//# sourceMappingURL=stories-molecules-SingleUpload-stories.c1d3d7c5.iframe.bundle.js.map
