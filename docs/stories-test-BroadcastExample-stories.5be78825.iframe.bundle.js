'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [1101, 4691, 945],
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
        lib = __webpack_require__('./src/lib/index.ts'),
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
            let [sendMemberInfo] = (0, lib.Di)(lib.UN, (memberInfo) => {
                console.log('Received event:', memberInfo),
                  setMember(memberInfo);
              }),
              [sendLikedEvent] = (0, lib.Di)(lib.J6, (likedInfo) => {
                let updatedMemberData = { ...member },
                  indexOfThree = updatedMemberData.likedPosts.indexOf(
                    likedInfo.id,
                  );
                -1 !== indexOfThree
                  ? updatedMemberData.likedPosts.splice(indexOfThree, 1)
                  : updatedMemberData.likedPosts.push(likedInfo.id),
                  sendMemberInfo(updatedMemberData);
              });
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
  },
]);
