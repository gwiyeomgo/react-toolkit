'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [1307],
  {
    './src/stories/test/ConnectUserExample.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => ConnectUserExample_stories,
        });
      var react = __webpack_require__('./node_modules/react/index.js'),
        eventBroadcaster = __webpack_require__(
          './src/lib/Util/eventBroadcaster.tsx',
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      let ConnectedUsersContext = (0, react.createContext)(void 0),
        ConnectedUsersProvider = (_ref) => {
          let { children } = _ref,
            [connectedUsers, setConnectedUsers] = (0, react.useState)(0);
          return (
            (0, react.useEffect)(() => {
              console.log('connectedUsers', connectedUsers);
              let unsubscribeUserConnected = eventBroadcaster.N_.on(
                'userConnected',
                () => {
                  console.log('handleUserConnected', connectedUsers + 1),
                    setConnectedUsers((prevCount) => prevCount + 1);
                },
              );
              return (
                eventBroadcaster.N_.broadcast('userConnected', connectedUsers),
                () => {
                  unsubscribeUserConnected();
                }
              );
            }, []),
            (0, jsx_runtime.jsx)(ConnectedUsersContext.Provider, {
              value: { connectedUsers },
              children: children,
            })
          );
        };
      try {
        (ConnectedUsersProvider.displayName = 'ConnectedUsersProvider'),
          (ConnectedUsersProvider.__docgenInfo = {
            description: '',
            displayName: 'ConnectedUsersProvider',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/lib/Util/connectedUser.tsx#ConnectedUsersProvider'
            ] = {
              docgenInfo: ConnectedUsersProvider.__docgenInfo,
              name: 'ConnectedUsersProvider',
              path: 'src/lib/Util/connectedUser.tsx#ConnectedUsersProvider',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      let ConnectedUsers = () => {
          let context = (0, react.useContext)(ConnectedUsersContext);
          return (console.log('ConnectedUsers', context),
          context && context.connectedUsers)
            ? (0, jsx_runtime.jsx)('div', {
                children: (0, jsx_runtime.jsxs)('h2', {
                  children: ['현재 동시 접속자 수: ', context.connectedUsers],
                }),
              })
            : null;
        },
        ConnectUserExample_stories = {
          title: '5.Test/ConnectUserExample',
          component: () =>
            (0, jsx_runtime.jsx)(ConnectedUsersProvider, {
              children: (0, jsx_runtime.jsx)(ConnectedUsers, {}),
            }),
          tags: ['autodocs'],
        },
        Default = { args: {} };
      Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: '{\n  args: {}\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      };
      let __namedExportsOrder = ['Default'];
    },
    './src/lib/Util/eventBroadcaster.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        J6: () => LIKE_EVENT_TOPIC,
        N_: () => EventBroadcaster,
        UN: () => MEMBER_CHANGE_TOPIC,
      });
      var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/uuid/dist/esm-browser/v4.js',
      );
      let topics = {},
        LIKE_EVENT_TOPIC = 'LIKE_EVENT',
        MEMBER_CHANGE_TOPIC = 'MEMBER_CHANGE';
      class EventBroadcaster {}
      (EventBroadcaster.broadcast = (topic, args) => {
        topics[topic] &&
          Object.values(topics[topic]).forEach((fn) => {
            'function' == typeof fn && fn(args);
          });
      }),
        (EventBroadcaster.on = (topic, fn) => {
          topics[topic] || (topics[topic] = {});
          let id = (0, uuid__WEBPACK_IMPORTED_MODULE_0__.A)();
          return (
            (topics[topic][id] = fn),
            () => {
              (topics[topic][id] = null), delete topics[topic][id];
            }
          );
        });
      try {
        (EventBroadcaster.displayName = 'EventBroadcaster'),
          (EventBroadcaster.__docgenInfo = {
            description:
              '*\n이벤트 브로드캐스터(Event Broadcaster)\n컴포넌트 간에 데이터를 주고받기 위해 이벤트를 사용 (각 컴포넌트가 직접 통신할 필요 없이 이벤트를 발행하고 구독)\n전역 상태를 관리에 활용 가능(여러 컴포넌트가 상태를 구독하고 변경 사항을 수신)\n느슨하게 결합된 컴포넌트를 유지\n*',
            displayName: 'EventBroadcaster',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/lib/Util/eventBroadcaster.tsx#EventBroadcaster'
            ] = {
              docgenInfo: EventBroadcaster.__docgenInfo,
              name: 'EventBroadcaster',
              path: 'src/lib/Util/eventBroadcaster.tsx#EventBroadcaster',
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
//# sourceMappingURL=stories-test-ConnectUserExample-stories.045fa5c0.iframe.bundle.js.map
