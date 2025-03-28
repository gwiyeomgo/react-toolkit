'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [8460],
  {
    './src/stories/test/ShoppingCartExample.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => ShoppingCartExample_stories,
        });
      var react = __webpack_require__('./node_modules/react/index.js'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      let CartContext = (0, react.createContext)(void 0),
        shoppingCart = {
          Provider: (_ref) => {
            let { children } = _ref,
              [cart, setCart] = (0, react.useState)([]);
            return (0, jsx_runtime.jsx)(CartContext.Provider, {
              value: {
                cart,
                addItem: (item) => {
                  setCart((prev) =>
                    prev.find((cartItem) => cartItem.id === item.id)
                      ? prev.map((cartItem) =>
                          cartItem.id === item.id
                            ? {
                                ...cartItem,
                                quantity: cartItem.quantity + item.quantity,
                              }
                            : cartItem,
                        )
                      : [...prev, item],
                  );
                },
                removeItem: (id) => {
                  setCart((prev) => {
                    let existingItem = prev.find(
                      (cartItem) => cartItem.id === id,
                    );
                    return existingItem && existingItem.quantity > 1
                      ? prev.map((cartItem) =>
                          cartItem.id === id
                            ? { ...cartItem, quantity: cartItem.quantity - 1 }
                            : cartItem,
                        )
                      : prev.filter((cartItem) => cartItem.id !== id);
                  });
                },
                clearCart: () => {
                  setCart([]);
                },
                applyDiscount: () => {
                  setCart((prev) =>
                    prev.map((item) => ({
                      ...item,
                      price: parseFloat((0.9 * item.price).toFixed(2)),
                    })),
                  );
                },
              },
              children: children,
            });
          },
          useCart: () => {
            let context = (0, react.useContext)(CartContext);
            if (!context)
              throw Error('useCart must be used within a CartProvider');
            return context;
          },
        },
        FruitStore = (_ref) => {
          let { items } = _ref,
            { addItem } = shoppingCart.useCart();
          return (0, jsx_runtime.jsxs)('div', {
            style: { padding: '20px' },
            children: [
              (0, jsx_runtime.jsx)('h1', { children: '과일가게' }),
              (0, jsx_runtime.jsx)('div', {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                },
                children: items.map((item) =>
                  (0, jsx_runtime.jsxs)(
                    'div',
                    {
                      style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        border: '1px solid #ccc',
                        padding: '10px',
                        borderRadius: '5px',
                      },
                      children: [
                        (0, jsx_runtime.jsxs)('span', {
                          children: [item.name, ' - ', item.price, '원'],
                        }),
                        (0, jsx_runtime.jsx)('button', {
                          onClick: () => addItem(item),
                          style: {
                            padding: '5px 10px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                          },
                          children: '담기',
                        }),
                      ],
                    },
                    item.id,
                  ),
                ),
              }),
            ],
          });
        },
        CartDisplay = () => {
          let { cart, removeItem, clearCart } = shoppingCart.useCart(),
            total = cart.reduce(
              (sum, item) => sum + item.price * item.quantity,
              0,
            );
          return (0, jsx_runtime.jsxs)('div', {
            style: { marginTop: '20px' },
            children: [
              (0, jsx_runtime.jsx)('ul', {
                style: { listStyleType: 'none', padding: 0 },
                children: cart.map((item) =>
                  (0, jsx_runtime.jsxs)(
                    'li',
                    {
                      style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '10px',
                      },
                      children: [
                        (0, jsx_runtime.jsxs)('span', {
                          children: [
                            item.name,
                            ' - ',
                            item.price,
                            ' - ',
                            item.quantity,
                          ],
                        }),
                        (0, jsx_runtime.jsx)('button', {
                          onClick: () => removeItem(item.id),
                          style: {
                            padding: '5px 10px',
                            backgroundColor: '#dc3545',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                          },
                          children: '-',
                        }),
                      ],
                    },
                    item.id,
                  ),
                ),
              }),
              (0, jsx_runtime.jsxs)('p', {
                children: [
                  (0, jsx_runtime.jsx)('strong', { children: '총:' }),
                  ' ',
                  total,
                  ' 원',
                ],
              }),
              (0, jsx_runtime.jsx)('div', {
                children: (0, jsx_runtime.jsx)('button', {
                  onClick: clearCart,
                  style: {
                    padding: '5px 10px',
                    backgroundColor: '#6c757d',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                  },
                  children: '장바구니 비우기',
                }),
              }),
            ],
          });
        },
        ShoppingCartExample_stories = {
          title: '5.Test/ShoppingCartExample',
          component: () =>
            (0, jsx_runtime.jsxs)(shoppingCart.Provider, {
              children: [
                (0, jsx_runtime.jsx)(FruitStore, {
                  items: [
                    { id: '1', name: '사과', price: 1e3, quantity: 1 },
                    { id: '2', name: '바나나', price: 5e3, quantity: 1 },
                    { id: '3', name: '오렌지', price: 500, quantity: 1 },
                  ],
                }),
                (0, jsx_runtime.jsx)(CartDisplay, {}),
              ],
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
//# sourceMappingURL=stories-test-ShoppingCartExample-stories.502787b3.iframe.bundle.js.map
