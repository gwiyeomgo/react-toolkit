'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [1101],
  {
    './src/stories/test/BroadcastExample.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => BroadcastExample_stories,
        });
      var react = __webpack_require__('./node_modules/react/index.js'),
        likeButton = __webpack_require__('./src/lib/Buttton/likeButton.tsx'),
        useBroadcast = __webpack_require__(
          './src/lib/Util/hooks/useBroadcast.tsx',
        ),
        eventBroadcaster = __webpack_require__(
          './src/lib/Util/eventBroadcaster.tsx',
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      let BroadcastExample_stories = {
          title: '5.Test/UseBroadcastExample',
          component: () => {
            let [member, setMember] = (0, react.useState)({
                userId: '',
                likedPosts: [],
              }),
              list = [
                { id: 1, title: 'test', liked: !0 },
                { id: 2, title: 'atet', liked: !1 },
                { id: 1, title: 'zzzz', liked: !1 },
              ];
            (0, react.useEffect)(() => {
              setMember({
                userId: '1123',
                likedPosts: list.filter((v) => v.liked).map((v) => v.id),
              });
            }, []);
            let [sendMemberInfo] = (0, useBroadcast.D)(
                eventBroadcaster.UN,
                (memberInfo) => {
                  console.log('Received event:', memberInfo),
                    setMember(memberInfo);
                },
              ),
              [sendLikedEvent] = (0, useBroadcast.D)(
                eventBroadcaster.J6,
                (likedInfo) => {
                  let updatedMemberData = { ...member },
                    indexOfThree = updatedMemberData.likedPosts.indexOf(
                      likedInfo.id,
                    );
                  -1 !== indexOfThree
                    ? updatedMemberData.likedPosts.splice(indexOfThree, 1)
                    : updatedMemberData.likedPosts.push(likedInfo.id),
                    sendMemberInfo(updatedMemberData);
                },
              );
            return (0, jsx_runtime.jsxs)('div', {
              children: [
                (0, jsx_runtime.jsx)('span', {
                  children: '회원번호 :'
                    .concat(member.userId, ' (좋아요 표시: 총 ')
                    .concat(member.likedPosts.length, ' 건)'),
                }),
                (0, jsx_runtime.jsx)('div', {
                  children: list.map((v, index) =>
                    (0, jsx_runtime.jsx)(
                      likeButton.c,
                      {
                        color: '#F75BA0',
                        onClick: (data) => {
                          sendLikedEvent({ id: index + 1, liked: data.liked });
                        },
                        initLiked: v.liked,
                      },
                      index,
                    ),
                  ),
                }),
              ],
            });
          },
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
    './src/lib/Buttton/likeButton.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { c: () => LikeButton });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js',
        ),
        _Icon_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/lib/Icon/icon.tsx',
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      let LikeButton = (_ref) => {
        let {
            onClick,
            width = '20px',
            height = '20px',
            initLiked,
            color = '#F75BA0',
          } = _ref,
          [liked, setLiked] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(
            initLiked,
          );
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          'button',
          {
            style: {
              border: 0,
              outline: 0,
              background: 'transparent',
              cursor: 'pointer',
            },
            onClick: () => {
              setLiked(!liked), onClick({ liked: !liked });
            },
            children: liked
              ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Icon_icon__WEBPACK_IMPORTED_MODULE_1__.I,
                  {
                    width: '20px',
                    height: '20px',
                    color: color,
                    icon: 'Heart',
                  },
                )
              : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Icon_icon__WEBPACK_IMPORTED_MODULE_1__.I,
                  {
                    width: width,
                    height: height,
                    color: color,
                    icon: 'EmptyHeart',
                  },
                ),
          },
        );
      };
      try {
        (LikeButton.displayName = 'LikeButton'),
          (LikeButton.__docgenInfo = {
            description: '',
            displayName: 'LikeButton',
            props: {
              initLiked: {
                defaultValue: null,
                description: '',
                name: 'initLiked',
                required: !1,
                type: { name: 'boolean' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !0,
                type: { name: '(data: any) => void' },
              },
              color: {
                defaultValue: { value: '#F75BA0' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              width: {
                defaultValue: { value: '20px' },
                description: '',
                name: 'width',
                required: !1,
                type: { name: 'string' },
              },
              height: {
                defaultValue: { value: '20px' },
                description: '',
                name: 'height',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/lib/Buttton/likeButton.tsx#LikeButton'
            ] = {
              docgenInfo: LikeButton.__docgenInfo,
              name: 'LikeButton',
              path: 'src/lib/Buttton/likeButton.tsx#LikeButton',
            });
      } catch (__react_docgen_typescript_loader_error) {}
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
            .e(2355)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/cross.svg',
              ),
            ),
        ),
        Download: lazy(async () =>
          __webpack_require__
            .e(5469)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/download.svg',
              ),
            ),
        ),
        Degrees360: lazy(async () =>
          __webpack_require__
            .e(5278)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/360-degrees.svg',
              ),
            ),
        ),
        MenuBurger: lazy(async () =>
          __webpack_require__
            .e(8786)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/menu-burger.svg',
              ),
            ),
        ),
        Star: lazy(async () =>
          __webpack_require__
            .e(7525)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/star.svg',
              ),
            ),
        ),
        Search: lazy(async () =>
          __webpack_require__
            .e(2049)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/search.svg',
              ),
            ),
        ),
        Heart: lazy(async () =>
          __webpack_require__
            .e(3763)
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
            .e(8205)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/plus.svg',
              ),
            ),
        ),
        EmptyHeart: lazy(async () =>
          __webpack_require__
            .e(9647)
            .then(
              __webpack_require__.bind(
                __webpack_require__,
                './src/lib/Icon/assets/empty-heart.svg',
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
                    { value: '"EmptyHeart"' },
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
    './src/lib/Util/hooks/useBroadcast.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { D: () => useBroadcast });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js',
        ),
        _Util_eventBroadcaster__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./src/lib/Util/eventBroadcaster.tsx');
      let useBroadcast = (topic, fn) => (
        (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
          let unsubscribeEvent =
            _Util_eventBroadcaster__WEBPACK_IMPORTED_MODULE_1__.N_.on(
              topic,
              fn,
            );
          return () => {
            unsubscribeEvent();
          };
        }, [topic, fn]),
        [
          (args) => {
            _Util_eventBroadcaster__WEBPACK_IMPORTED_MODULE_1__.N_.broadcast(
              topic,
              args,
            );
          },
        ]
      );
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
//# sourceMappingURL=stories-test-BroadcastExample-stories.81d39e28.iframe.bundle.js.map
