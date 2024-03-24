'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [996],
  {
    './src/stories/templates/ViewCaptureButton.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => ViewCaptureButton_stories,
        });
      var lib = __webpack_require__('./src/lib/index.ts');
      __webpack_require__('./node_modules/react/index.js');
      let img_namespaceObject =
        __webpack_require__.p + '3920f10b50b290469932.png';
      var jsx_runtime = __webpack_require__(
        './node_modules/react/jsx-runtime.js',
      );
      let ViewCaptureButton_stories = {
          title: '4.Templates/ViewCaptureButton',
          component: lib.s_,
          tags: ['autodocs'],
        },
        Default = {
          args: {
            downloadFileName: 'test',
            downloadButtonName: 'download',
            children: (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)('img', {
                  src: img_namespaceObject,
                  style: { width: '300px' },
                }),
                (0, jsx_runtime.jsx)('div', {
                  style: { padding: 0, backgroundColor: 'skyblue' },
                  children: 'test 데이터 입니다.',
                }),
              ],
            }),
          },
        };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    downloadFileName: 'test',\n    downloadButtonName: 'download',\n    children: <>\n        <img src={imageUrl} style={{\n        width: '300px'\n      }} />\n        <div style={{\n        padding: 0,\n        backgroundColor: 'skyblue'\n      }}>\n          {'test 데이터 입니다.'}\n        </div>\n      </>\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      };
      let __namedExportsOrder = ['Default'];
    },
  },
]);
