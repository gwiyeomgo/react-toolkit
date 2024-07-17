(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [3887, 4691, 945],
  {
    './src/stories/templates/MessageGroup.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      let __WEBPACK_DEFAULT_EXPORT__ = {
          title: '4.Templates/Messages',
          component: __webpack_require__('./src/lib/Messages/messageGroup.tsx')
            .$,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
          argTypes: {
            list: { description: '버튼 유형 선택' },
            delay: { control: 'select', options: [1e3, 2e3, 3e3] },
            addMessage: { control: 'select', options: [!0, !1] },
          },
        },
        Default = {
          args: {
            addMessage: !0,
            delay: 3e3,
            list: [
              { id: 1, message: '안녕하세요', style: { color: '#619290' } },
              { id: 2, message: '메시지가', style: { color: '#79B6B4' } },
              {
                id: 3,
                message: '1000초 간격으로 새로운 메시지가 보입니다.',
                style: { color: '#00bdb4' },
              },
            ],
          },
        };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    addMessage: true,\n    delay: 3000,\n    list: [{\n      id: 1,\n      message: '안녕하세요',\n      style: {\n        color: '#619290'\n      }\n    }, {\n      id: 2,\n      message: '메시지가',\n      style: {\n        color: '#79B6B4'\n      }\n    }, {\n      id: 3,\n      message: '1000초 간격으로 새로운 메시지가 보입니다.',\n      style: {\n        color: '#00bdb4'\n      }\n    }]\n  }\n}",
            ...Default.parameters?.docs?.source,
          },
        },
      };
      let __namedExportsOrder = ['Default'];
    },
    './node_modules/classnames/bind.js': (module, exports) => {
      var __WEBPACK_AMD_DEFINE_RESULT__;
      /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !(function () {
        'use strict';
        var hasOwn = {}.hasOwnProperty;
        function classNames() {
          for (var classes = '', i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            arg && (classes = appendClass(classes, parseValue.call(this, arg)));
          }
          return classes;
        }
        function parseValue(arg) {
          if ('string' == typeof arg || 'number' == typeof arg)
            return (this && this[arg]) || arg;
          if ('object' != typeof arg) return '';
          if (Array.isArray(arg)) return classNames.apply(this, arg);
          if (
            arg.toString !== Object.prototype.toString &&
            !arg.toString.toString().includes('[native code]')
          )
            return arg.toString();
          var classes = '';
          for (var key in arg)
            hasOwn.call(arg, key) &&
              arg[key] &&
              (classes = appendClass(classes, (this && this[key]) || key));
          return classes;
        }
        function appendClass(value, newClass) {
          return newClass
            ? value
              ? value + ' ' + newClass
              : value + newClass
            : value;
        }
        module.exports
          ? ((classNames.default = classNames), (module.exports = classNames))
          : void 0 !==
              (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return classNames;
              }.apply(exports, [])) &&
            (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
      })();
    },
    './node_modules/classnames/index.js': (module, exports) => {
      var __WEBPACK_AMD_DEFINE_RESULT__;
      /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !(function () {
        'use strict';
        var hasOwn = {}.hasOwnProperty;
        function classNames() {
          for (var classes = '', i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            arg && (classes = appendClass(classes, parseValue(arg)));
          }
          return classes;
        }
        function parseValue(arg) {
          if ('string' == typeof arg || 'number' == typeof arg) return arg;
          if ('object' != typeof arg) return '';
          if (Array.isArray(arg)) return classNames.apply(null, arg);
          if (
            arg.toString !== Object.prototype.toString &&
            !arg.toString.toString().includes('[native code]')
          )
            return arg.toString();
          var classes = '';
          for (var key in arg)
            hasOwn.call(arg, key) &&
              arg[key] &&
              (classes = appendClass(classes, key));
          return classes;
        }
        function appendClass(value, newClass) {
          return newClass
            ? value
              ? value + ' ' + newClass
              : value + newClass
            : value;
        }
        module.exports
          ? ((classNames.default = classNames), (module.exports = classNames))
          : void 0 !==
              (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return classNames;
              }.apply(exports, [])) &&
            (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
      })();
    },
  },
]);
//# sourceMappingURL=stories-templates-MessageGroup-stories.5cb5dd1b.iframe.bundle.js.map
