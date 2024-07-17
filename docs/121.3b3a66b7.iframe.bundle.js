'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [121],
  {
    './node_modules/@babel/runtime/helpers/esm/extends.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => _extends });
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
    },
    './node_modules/@babel/runtime/helpers/esm/inheritsLoose.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => _inheritsLoose });
      var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js',
      );
      function _inheritsLoose(t, o) {
        (t.prototype = Object.create(o.prototype)),
          (t.prototype.constructor = t),
          (0, _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(t, o);
      }
    },
    './node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { A: () => _setPrototypeOf });
      function _setPrototypeOf(t, e) {
        return (_setPrototypeOf = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
    },
    './node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var reactIs = __webpack_require__('./node_modules/react-is/index.js'),
          REACT_STATICS = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          KNOWN_STATICS = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          MEMO_STATICS = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          TYPE_STATICS = {};
        function getStatics(component) {
          return reactIs.isMemo(component)
            ? MEMO_STATICS
            : TYPE_STATICS[component.$$typeof] || REACT_STATICS;
        }
        (TYPE_STATICS[reactIs.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (TYPE_STATICS[reactIs.Memo] = MEMO_STATICS);
        var defineProperty = Object.defineProperty,
          getOwnPropertyNames = Object.getOwnPropertyNames,
          getOwnPropertySymbols = Object.getOwnPropertySymbols,
          getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
          getPrototypeOf = Object.getPrototypeOf,
          objectPrototype = Object.prototype;
        function hoistNonReactStatics(
          targetComponent,
          sourceComponent,
          blacklist,
        ) {
          if ('string' != typeof sourceComponent) {
            if (objectPrototype) {
              var inheritedComponent = getPrototypeOf(sourceComponent);
              inheritedComponent &&
                inheritedComponent !== objectPrototype &&
                hoistNonReactStatics(
                  targetComponent,
                  inheritedComponent,
                  blacklist,
                );
            }
            var keys = getOwnPropertyNames(sourceComponent);
            getOwnPropertySymbols &&
              (keys = keys.concat(getOwnPropertySymbols(sourceComponent)));
            for (
              var targetStatics = getStatics(targetComponent),
                sourceStatics = getStatics(sourceComponent),
                i = 0;
              i < keys.length;
              ++i
            ) {
              var key = keys[i];
              if (
                !KNOWN_STATICS[key] &&
                !(blacklist && blacklist[key]) &&
                !(sourceStatics && sourceStatics[key]) &&
                !(targetStatics && targetStatics[key])
              ) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                  defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
              }
            }
          }
          return targetComponent;
        }
        module.exports = hoistNonReactStatics;
      },
    './node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        JY: () => DragDropContext,
        sx: () => PublicDraggable,
        gL: () => ConnectedDroppable,
      });
      var _preventedKeys,
        _scrollJumpKeys,
        react = __webpack_require__('./node_modules/react/index.js'),
        inheritsLoose = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/inheritsLoose.js',
        ),
        esm_extends = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/extends.js',
        );
      function _typeof(o) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (o) {
                return typeof o;
              }
            : function (o) {
                return o &&
                  'function' == typeof Symbol &&
                  o.constructor === Symbol &&
                  o !== Symbol.prototype
                  ? 'symbol'
                  : typeof o;
              })(o);
      }
      function toPrimitive(t, r) {
        if ('object' != _typeof(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var i = e.call(t, r || 'default');
          if ('object' != _typeof(i)) return i;
          throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === r ? String : Number)(t);
      }
      function toPropertyKey(t) {
        var i = toPrimitive(t, 'string');
        return 'symbol' == _typeof(i) ? i : i + '';
      }
      function _defineProperty(e, r, t) {
        return (
          (r = toPropertyKey(r)) in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r &&
            (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function _objectSpread2(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ownKeys(Object(t), !0).forEach(function (r) {
                _defineProperty(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : ownKeys(Object(t)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(t, r),
                  );
                });
        }
        return e;
      }
      function formatProdErrorMessage(code) {
        return (
          'Minified Redux error #' +
          code +
          '; visit https://redux.js.org/Errors?code=' +
          code +
          ' for the full message or use the non-minified dev environment for full errors. '
        );
      }
      var $$observable =
          ('function' == typeof Symbol && Symbol.observable) || '@@observable',
        randomString = function randomString() {
          return Math.random().toString(36).substring(7).split('').join('.');
        },
        ActionTypes = {
          INIT: '@@redux/INIT' + randomString(),
          REPLACE: '@@redux/REPLACE' + randomString(),
          PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
            return '@@redux/PROBE_UNKNOWN_ACTION' + randomString();
          },
        };
      function isPlainObject(obj) {
        if ('object' != typeof obj || null === obj) return !1;
        for (var proto = obj; null !== Object.getPrototypeOf(proto); )
          proto = Object.getPrototypeOf(proto);
        return Object.getPrototypeOf(obj) === proto;
      }
      function createStore(reducer, preloadedState, enhancer) {
        if (
          ('function' == typeof preloadedState &&
            'function' == typeof enhancer) ||
          ('function' == typeof enhancer && 'function' == typeof arguments[3])
        )
          throw Error(formatProdErrorMessage(0));
        if (
          ('function' == typeof preloadedState &&
            void 0 === enhancer &&
            ((enhancer = preloadedState), (preloadedState = void 0)),
          void 0 !== enhancer)
        ) {
          if ('function' != typeof enhancer)
            throw Error(formatProdErrorMessage(1));
          return enhancer(createStore)(reducer, preloadedState);
        }
        if ('function' != typeof reducer)
          throw Error(formatProdErrorMessage(2));
        var _ref2,
          currentReducer = reducer,
          currentState = preloadedState,
          currentListeners = [],
          nextListeners = currentListeners,
          isDispatching = !1;
        function ensureCanMutateNextListeners() {
          nextListeners === currentListeners &&
            (nextListeners = currentListeners.slice());
        }
        function getState() {
          if (isDispatching) throw Error(formatProdErrorMessage(3));
          return currentState;
        }
        function subscribe(listener) {
          if ('function' != typeof listener)
            throw Error(formatProdErrorMessage(4));
          if (isDispatching) throw Error(formatProdErrorMessage(5));
          var isSubscribed = !0;
          return (
            ensureCanMutateNextListeners(),
            nextListeners.push(listener),
            function unsubscribe() {
              if (isSubscribed) {
                if (isDispatching) throw Error(formatProdErrorMessage(6));
                (isSubscribed = !1), ensureCanMutateNextListeners();
                var index = nextListeners.indexOf(listener);
                nextListeners.splice(index, 1), (currentListeners = null);
              }
            }
          );
        }
        function dispatch(action) {
          if (!isPlainObject(action)) throw Error(formatProdErrorMessage(7));
          if (void 0 === action.type) throw Error(formatProdErrorMessage(8));
          if (isDispatching) throw Error(formatProdErrorMessage(9));
          try {
            (isDispatching = !0),
              (currentState = currentReducer(currentState, action));
          } finally {
            isDispatching = !1;
          }
          for (
            var listeners = (currentListeners = nextListeners), i = 0;
            i < listeners.length;
            i++
          )
            (0, listeners[i])();
          return action;
        }
        function replaceReducer(nextReducer) {
          if ('function' != typeof nextReducer)
            throw Error(formatProdErrorMessage(10));
          (currentReducer = nextReducer),
            dispatch({ type: ActionTypes.REPLACE });
        }
        function observable() {
          var _ref,
            outerSubscribe = subscribe;
          return (
            ((_ref = {
              subscribe: function subscribe(observer) {
                if ('object' != typeof observer || null === observer)
                  throw Error(formatProdErrorMessage(11));
                function observeState() {
                  observer.next && observer.next(getState());
                }
                return (
                  observeState(), { unsubscribe: outerSubscribe(observeState) }
                );
              },
            })[$$observable] = function () {
              return this;
            }),
            _ref
          );
        }
        return (
          dispatch({ type: ActionTypes.INIT }),
          ((_ref2 = {
            dispatch: dispatch,
            subscribe: subscribe,
            getState: getState,
            replaceReducer: replaceReducer,
          })[$$observable] = observable),
          _ref2
        );
      }
      function bindActionCreator(actionCreator, dispatch) {
        return function () {
          return dispatch(actionCreator.apply(this, arguments));
        };
      }
      function bindActionCreators(actionCreators, dispatch) {
        if ('function' == typeof actionCreators)
          return bindActionCreator(actionCreators, dispatch);
        if ('object' != typeof actionCreators || null === actionCreators)
          throw Error(formatProdErrorMessage(16));
        var boundActionCreators = {};
        for (var key in actionCreators) {
          var actionCreator = actionCreators[key];
          'function' == typeof actionCreator &&
            (boundActionCreators[key] = bindActionCreator(
              actionCreator,
              dispatch,
            ));
        }
        return boundActionCreators;
      }
      function compose() {
        for (
          var _len = arguments.length, funcs = Array(_len), _key = 0;
          _key < _len;
          _key++
        )
          funcs[_key] = arguments[_key];
        return 0 === funcs.length
          ? function (arg) {
              return arg;
            }
          : 1 === funcs.length
            ? funcs[0]
            : funcs.reduce(function (a, b) {
                return function () {
                  return a(b.apply(void 0, arguments));
                };
              });
      }
      function applyMiddleware() {
        for (
          var _len = arguments.length, middlewares = Array(_len), _key = 0;
          _key < _len;
          _key++
        )
          middlewares[_key] = arguments[_key];
        return function (createStore) {
          return function () {
            var store = createStore.apply(void 0, arguments),
              _dispatch = function dispatch() {
                throw Error(formatProdErrorMessage(15));
              },
              middlewareAPI = {
                getState: store.getState,
                dispatch: function dispatch() {
                  return _dispatch.apply(void 0, arguments);
                },
              },
              chain = middlewares.map(function (middleware) {
                return middleware(middlewareAPI);
              });
            return (
              (_dispatch = compose.apply(void 0, chain)(store.dispatch)),
              _objectSpread2(
                _objectSpread2({}, store),
                {},
                { dispatch: _dispatch },
              )
            );
          };
        };
      }
      var Context_ReactReduxContext = react.createContext(null),
        batch = function defaultNoopBatch(callback) {
          callback();
        };
      function createListenerCollection() {
        var batch1 = batch,
          first = null,
          last = null;
        return {
          clear: function clear() {
            (first = null), (last = null);
          },
          notify: function notify() {
            batch1(function () {
              for (var listener = first; listener; )
                listener.callback(), (listener = listener.next);
            });
          },
          get: function get() {
            for (var listeners = [], listener = first; listener; )
              listeners.push(listener), (listener = listener.next);
            return listeners;
          },
          subscribe: function subscribe(callback) {
            var isSubscribed = !0,
              listener = (last = {
                callback: callback,
                next: null,
                prev: last,
              });
            return (
              listener.prev
                ? (listener.prev.next = listener)
                : (first = listener),
              function unsubscribe() {
                isSubscribed &&
                  null !== first &&
                  ((isSubscribed = !1),
                  listener.next
                    ? (listener.next.prev = listener.prev)
                    : (last = listener.prev),
                  listener.prev
                    ? (listener.prev.next = listener.next)
                    : (first = listener.next));
              }
            );
          },
        };
      }
      var nullListeners = {
        notify: function notify() {},
        get: function get() {
          return [];
        },
      };
      function Subscription_createSubscription(store, parentSub) {
        var unsubscribe,
          listeners = nullListeners;
        function handleChangeWrapper() {
          subscription.onStateChange && subscription.onStateChange();
        }
        function trySubscribe() {
          unsubscribe ||
            ((unsubscribe = parentSub
              ? parentSub.addNestedSub(handleChangeWrapper)
              : store.subscribe(handleChangeWrapper)),
            (listeners = createListenerCollection()));
        }
        var subscription = {
          addNestedSub: function addNestedSub(listener) {
            return trySubscribe(), listeners.subscribe(listener);
          },
          notifyNestedSubs: function notifyNestedSubs() {
            listeners.notify();
          },
          handleChangeWrapper: handleChangeWrapper,
          isSubscribed: function isSubscribed() {
            return !!unsubscribe;
          },
          trySubscribe: trySubscribe,
          tryUnsubscribe: function tryUnsubscribe() {
            unsubscribe &&
              (unsubscribe(),
              (unsubscribe = void 0),
              listeners.clear(),
              (listeners = nullListeners));
          },
          getListeners: function getListeners() {
            return listeners;
          },
        };
        return subscription;
      }
      var useIsomorphicLayoutEffect_useIsomorphicLayoutEffect =
        'undefined' != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement
          ? react.useLayoutEffect
          : react.useEffect;
      let components_Provider = function Provider(_ref) {
        var store = _ref.store,
          context = _ref.context,
          children = _ref.children,
          contextValue = (0, react.useMemo)(
            function () {
              var subscription = Subscription_createSubscription(store);
              return { store: store, subscription: subscription };
            },
            [store],
          ),
          previousState = (0, react.useMemo)(
            function () {
              return store.getState();
            },
            [store],
          );
        return (
          useIsomorphicLayoutEffect_useIsomorphicLayoutEffect(
            function () {
              var subscription = contextValue.subscription;
              return (
                (subscription.onStateChange = subscription.notifyNestedSubs),
                subscription.trySubscribe(),
                previousState !== store.getState() &&
                  subscription.notifyNestedSubs(),
                function () {
                  subscription.tryUnsubscribe(),
                    (subscription.onStateChange = null);
                }
              );
            },
            [contextValue, previousState],
          ),
          react.createElement(
            (context || Context_ReactReduxContext).Provider,
            { value: contextValue },
            children,
          )
        );
      };
      function _objectWithoutPropertiesLoose(r, e) {
        if (null == r) return {};
        var t = {};
        for (var n in r)
          if ({}.hasOwnProperty.call(r, n)) {
            if (e.includes(n)) continue;
            t[n] = r[n];
          }
        return t;
      }
      var hoist_non_react_statics_cjs = __webpack_require__(
          './node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js',
        ),
        hoist_non_react_statics_cjs_default = __webpack_require__.n(
          hoist_non_react_statics_cjs,
        ),
        react_is = __webpack_require__(
          './node_modules/react-redux/node_modules/react-is/index.js',
        ),
        _excluded = [
          'getDisplayName',
          'methodName',
          'renderCountProp',
          'shouldHandleStateChanges',
          'storeKey',
          'withRef',
          'forwardRef',
          'context',
        ],
        _excluded2 = ['reactReduxForwardedRef'],
        EMPTY_ARRAY = [],
        NO_SUBSCRIPTION_ARRAY = [null, null];
      function storeStateUpdatesReducer(state, action) {
        var updateCount = state[1];
        return [action.payload, updateCount + 1];
      }
      function useIsomorphicLayoutEffectWithArgs(
        effectFunc,
        effectArgs,
        dependencies,
      ) {
        useIsomorphicLayoutEffect_useIsomorphicLayoutEffect(function () {
          return effectFunc.apply(void 0, effectArgs);
        }, dependencies);
      }
      function captureWrapperProps(
        lastWrapperProps,
        lastChildProps,
        renderIsScheduled,
        wrapperProps,
        actualChildProps,
        childPropsFromStoreUpdate,
        notifyNestedSubs,
      ) {
        (lastWrapperProps.current = wrapperProps),
          (lastChildProps.current = actualChildProps),
          (renderIsScheduled.current = !1),
          childPropsFromStoreUpdate.current &&
            ((childPropsFromStoreUpdate.current = null), notifyNestedSubs());
      }
      function subscribeUpdates(
        shouldHandleStateChanges,
        store,
        subscription,
        childPropsSelector,
        lastWrapperProps,
        lastChildProps,
        renderIsScheduled,
        childPropsFromStoreUpdate,
        notifyNestedSubs,
        forceComponentUpdateDispatch,
      ) {
        if (shouldHandleStateChanges) {
          var didUnsubscribe = !1,
            lastThrownError = null,
            checkForUpdates = function checkForUpdates() {
              if (!didUnsubscribe) {
                var newChildProps,
                  error,
                  latestStoreState = store.getState();
                try {
                  newChildProps = childPropsSelector(
                    latestStoreState,
                    lastWrapperProps.current,
                  );
                } catch (e) {
                  (error = e), (lastThrownError = e);
                }
                error || (lastThrownError = null),
                  newChildProps === lastChildProps.current
                    ? renderIsScheduled.current || notifyNestedSubs()
                    : ((lastChildProps.current = newChildProps),
                      (childPropsFromStoreUpdate.current = newChildProps),
                      (renderIsScheduled.current = !0),
                      forceComponentUpdateDispatch({
                        type: 'STORE_UPDATED',
                        payload: { error: error },
                      }));
              }
            };
          return (
            (subscription.onStateChange = checkForUpdates),
            subscription.trySubscribe(),
            checkForUpdates(),
            function unsubscribeWrapper() {
              if (
                ((didUnsubscribe = !0),
                subscription.tryUnsubscribe(),
                (subscription.onStateChange = null),
                lastThrownError)
              )
                throw lastThrownError;
            }
          );
        }
      }
      var initStateUpdates = function initStateUpdates() {
        return [null, 0];
      };
      function connectAdvanced(selectorFactory, _ref) {
        void 0 === _ref && (_ref = {});
        var _ref2 = _ref,
          _ref2$getDisplayName = _ref2.getDisplayName,
          getDisplayName =
            void 0 === _ref2$getDisplayName
              ? function (name) {
                  return 'ConnectAdvanced(' + name + ')';
                }
              : _ref2$getDisplayName,
          _ref2$methodName = _ref2.methodName,
          methodName =
            void 0 === _ref2$methodName ? 'connectAdvanced' : _ref2$methodName,
          _ref2$renderCountProp = _ref2.renderCountProp,
          renderCountProp =
            void 0 === _ref2$renderCountProp ? void 0 : _ref2$renderCountProp,
          _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
          shouldHandleStateChanges =
            void 0 === _ref2$shouldHandleSta || _ref2$shouldHandleSta,
          _ref2$storeKey = _ref2.storeKey,
          storeKey = void 0 === _ref2$storeKey ? 'store' : _ref2$storeKey,
          _ref2$forwardRef = (_ref2.withRef, _ref2.forwardRef),
          forwardRef = void 0 !== _ref2$forwardRef && _ref2$forwardRef,
          _ref2$context = _ref2.context,
          connectOptions = _objectWithoutPropertiesLoose(_ref2, _excluded),
          Context =
            void 0 === _ref2$context
              ? Context_ReactReduxContext
              : _ref2$context;
        return function wrapWithConnect(WrappedComponent) {
          var wrappedComponentName =
              WrappedComponent.displayName ||
              WrappedComponent.name ||
              'Component',
            displayName = getDisplayName(wrappedComponentName),
            selectorFactoryOptions = (0, esm_extends.A)({}, connectOptions, {
              getDisplayName: getDisplayName,
              methodName: methodName,
              renderCountProp: renderCountProp,
              shouldHandleStateChanges: shouldHandleStateChanges,
              storeKey: storeKey,
              displayName: displayName,
              wrappedComponentName: wrappedComponentName,
              WrappedComponent: WrappedComponent,
            }),
            pure = connectOptions.pure;
          function createChildSelector(store) {
            return selectorFactory(store.dispatch, selectorFactoryOptions);
          }
          var usePureOnlyMemo = pure
            ? react.useMemo
            : function (callback) {
                return callback();
              };
          function ConnectFunction(props) {
            var _useMemo = (0, react.useMemo)(
                function () {
                  var reactReduxForwardedRef = props.reactReduxForwardedRef,
                    wrapperProps = _objectWithoutPropertiesLoose(
                      props,
                      _excluded2,
                    );
                  return [props.context, reactReduxForwardedRef, wrapperProps];
                },
                [props],
              ),
              propsContext = _useMemo[0],
              reactReduxForwardedRef = _useMemo[1],
              wrapperProps = _useMemo[2],
              ContextToUse = (0, react.useMemo)(
                function () {
                  return propsContext &&
                    propsContext.Consumer &&
                    (0, react_is.isContextConsumer)(
                      react.createElement(propsContext.Consumer, null),
                    )
                    ? propsContext
                    : Context;
                },
                [propsContext, Context],
              ),
              contextValue = (0, react.useContext)(ContextToUse),
              didStoreComeFromProps =
                !!props.store &&
                !!props.store.getState &&
                !!props.store.dispatch;
            contextValue && contextValue.store;
            var store = didStoreComeFromProps
                ? props.store
                : contextValue.store,
              childPropsSelector = (0, react.useMemo)(
                function () {
                  return createChildSelector(store);
                },
                [store],
              ),
              _useMemo2 = (0, react.useMemo)(
                function () {
                  if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY;
                  var subscription = Subscription_createSubscription(
                      store,
                      didStoreComeFromProps ? null : contextValue.subscription,
                    ),
                    notifyNestedSubs =
                      subscription.notifyNestedSubs.bind(subscription);
                  return [subscription, notifyNestedSubs];
                },
                [store, didStoreComeFromProps, contextValue],
              ),
              subscription = _useMemo2[0],
              notifyNestedSubs = _useMemo2[1],
              overriddenContextValue = (0, react.useMemo)(
                function () {
                  return didStoreComeFromProps
                    ? contextValue
                    : (0, esm_extends.A)({}, contextValue, {
                        subscription: subscription,
                      });
                },
                [didStoreComeFromProps, contextValue, subscription],
              ),
              _useReducer = (0, react.useReducer)(
                storeStateUpdatesReducer,
                EMPTY_ARRAY,
                initStateUpdates,
              ),
              previousStateUpdateResult = _useReducer[0][0],
              forceComponentUpdateDispatch = _useReducer[1];
            if (previousStateUpdateResult && previousStateUpdateResult.error)
              throw previousStateUpdateResult.error;
            var lastChildProps = (0, react.useRef)(),
              lastWrapperProps = (0, react.useRef)(wrapperProps),
              childPropsFromStoreUpdate = (0, react.useRef)(),
              renderIsScheduled = (0, react.useRef)(!1),
              actualChildProps = usePureOnlyMemo(
                function () {
                  return childPropsFromStoreUpdate.current &&
                    wrapperProps === lastWrapperProps.current
                    ? childPropsFromStoreUpdate.current
                    : childPropsSelector(store.getState(), wrapperProps);
                },
                [store, previousStateUpdateResult, wrapperProps],
              );
            useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [
              lastWrapperProps,
              lastChildProps,
              renderIsScheduled,
              wrapperProps,
              actualChildProps,
              childPropsFromStoreUpdate,
              notifyNestedSubs,
            ]),
              useIsomorphicLayoutEffectWithArgs(
                subscribeUpdates,
                [
                  shouldHandleStateChanges,
                  store,
                  subscription,
                  childPropsSelector,
                  lastWrapperProps,
                  lastChildProps,
                  renderIsScheduled,
                  childPropsFromStoreUpdate,
                  notifyNestedSubs,
                  forceComponentUpdateDispatch,
                ],
                [store, subscription, childPropsSelector],
              );
            var renderedWrappedComponent = (0, react.useMemo)(
              function () {
                return react.createElement(
                  WrappedComponent,
                  (0, esm_extends.A)({}, actualChildProps, {
                    ref: reactReduxForwardedRef,
                  }),
                );
              },
              [reactReduxForwardedRef, WrappedComponent, actualChildProps],
            );
            return (0, react.useMemo)(
              function () {
                return shouldHandleStateChanges
                  ? react.createElement(
                      ContextToUse.Provider,
                      { value: overriddenContextValue },
                      renderedWrappedComponent,
                    )
                  : renderedWrappedComponent;
              },
              [ContextToUse, renderedWrappedComponent, overriddenContextValue],
            );
          }
          var Connect = pure ? react.memo(ConnectFunction) : ConnectFunction;
          if (
            ((Connect.WrappedComponent = WrappedComponent),
            (Connect.displayName = ConnectFunction.displayName = displayName),
            forwardRef)
          ) {
            var forwarded = react.forwardRef(
              function forwardConnectRef(props, ref) {
                return react.createElement(
                  Connect,
                  (0, esm_extends.A)({}, props, {
                    reactReduxForwardedRef: ref,
                  }),
                );
              },
            );
            return (
              (forwarded.displayName = displayName),
              (forwarded.WrappedComponent = WrappedComponent),
              hoist_non_react_statics_cjs_default()(forwarded, WrappedComponent)
            );
          }
          return hoist_non_react_statics_cjs_default()(
            Connect,
            WrappedComponent,
          );
        };
      }
      function is(x, y) {
        return x === y
          ? 0 !== x || 0 !== y || 1 / x == 1 / y
          : x != x && y != y;
      }
      function shallowEqual(objA, objB) {
        if (is(objA, objB)) return !0;
        if (
          'object' != typeof objA ||
          null === objA ||
          'object' != typeof objB ||
          null === objB
        )
          return !1;
        var keysA = Object.keys(objA),
          keysB = Object.keys(objB);
        if (keysA.length !== keysB.length) return !1;
        for (var i = 0; i < keysA.length; i++)
          if (
            !Object.prototype.hasOwnProperty.call(objB, keysA[i]) ||
            !is(objA[keysA[i]], objB[keysA[i]])
          )
            return !1;
        return !0;
      }
      function bindActionCreators_bindActionCreators(actionCreators, dispatch) {
        var boundActionCreators = {};
        for (var key in actionCreators)
          !(function _loop(key) {
            var actionCreator = actionCreators[key];
            'function' == typeof actionCreator &&
              (boundActionCreators[key] = function () {
                return dispatch(actionCreator.apply(void 0, arguments));
              });
          })(key);
        return boundActionCreators;
      }
      function wrapMapToPropsConstant(getConstant) {
        return function initConstantSelector(dispatch, options) {
          var constant = getConstant(dispatch, options);
          function constantSelector() {
            return constant;
          }
          return (constantSelector.dependsOnOwnProps = !1), constantSelector;
        };
      }
      function getDependsOnOwnProps(mapToProps) {
        return null !== mapToProps.dependsOnOwnProps &&
          void 0 !== mapToProps.dependsOnOwnProps
          ? !!mapToProps.dependsOnOwnProps
          : 1 !== mapToProps.length;
      }
      function wrapMapToPropsFunc(mapToProps, methodName) {
        return function initProxySelector(dispatch, _ref) {
          _ref.displayName;
          var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
            return proxy.dependsOnOwnProps
              ? proxy.mapToProps(stateOrDispatch, ownProps)
              : proxy.mapToProps(stateOrDispatch);
          };
          return (
            (proxy.dependsOnOwnProps = !0),
            (proxy.mapToProps = function detectFactoryAndVerify(
              stateOrDispatch,
              ownProps,
            ) {
              (proxy.mapToProps = mapToProps),
                (proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps));
              var props = proxy(stateOrDispatch, ownProps);
              return (
                'function' == typeof props &&
                  ((proxy.mapToProps = props),
                  (proxy.dependsOnOwnProps = getDependsOnOwnProps(props)),
                  (props = proxy(stateOrDispatch, ownProps))),
                props
              );
            }),
            proxy
          );
        };
      }
      let mapDispatchToProps = [
          function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
            return 'function' == typeof mapDispatchToProps
              ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps')
              : void 0;
          },
          function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
            return mapDispatchToProps
              ? void 0
              : wrapMapToPropsConstant(function (dispatch) {
                  return { dispatch: dispatch };
                });
          },
          function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
            return mapDispatchToProps && 'object' == typeof mapDispatchToProps
              ? wrapMapToPropsConstant(function (dispatch) {
                  return bindActionCreators_bindActionCreators(
                    mapDispatchToProps,
                    dispatch,
                  );
                })
              : void 0;
          },
        ],
        mapStateToProps = [
          function whenMapStateToPropsIsFunction(mapStateToProps) {
            return 'function' == typeof mapStateToProps
              ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps')
              : void 0;
          },
          function whenMapStateToPropsIsMissing(mapStateToProps) {
            return mapStateToProps
              ? void 0
              : wrapMapToPropsConstant(function () {
                  return {};
                });
          },
        ];
      function defaultMergeProps(stateProps, dispatchProps, ownProps) {
        return (0, esm_extends.A)({}, ownProps, stateProps, dispatchProps);
      }
      function wrapMergePropsFunc(mergeProps) {
        return function initMergePropsProxy(dispatch, _ref) {
          _ref.displayName;
          var mergedProps,
            pure = _ref.pure,
            areMergedPropsEqual = _ref.areMergedPropsEqual,
            hasRunOnce = !1;
          return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
            var nextMergedProps = mergeProps(
              stateProps,
              dispatchProps,
              ownProps,
            );
            return (
              hasRunOnce
                ? (pure && areMergedPropsEqual(nextMergedProps, mergedProps)) ||
                  (mergedProps = nextMergedProps)
                : ((hasRunOnce = !0), (mergedProps = nextMergedProps)),
              mergedProps
            );
          };
        };
      }
      let mergeProps = [
        function whenMergePropsIsFunction(mergeProps) {
          return 'function' == typeof mergeProps
            ? wrapMergePropsFunc(mergeProps)
            : void 0;
        },
        function whenMergePropsIsOmitted(mergeProps) {
          return mergeProps
            ? void 0
            : function () {
                return defaultMergeProps;
              };
        },
      ];
      var selectorFactory_excluded = [
        'initMapStateToProps',
        'initMapDispatchToProps',
        'initMergeProps',
      ];
      function impureFinalPropsSelectorFactory(
        mapStateToProps,
        mapDispatchToProps,
        mergeProps,
        dispatch,
      ) {
        return function impureFinalPropsSelector(state, ownProps) {
          return mergeProps(
            mapStateToProps(state, ownProps),
            mapDispatchToProps(dispatch, ownProps),
            ownProps,
          );
        };
      }
      function pureFinalPropsSelectorFactory(
        mapStateToProps,
        mapDispatchToProps,
        mergeProps,
        dispatch,
        _ref,
      ) {
        var state,
          ownProps,
          stateProps,
          dispatchProps,
          mergedProps,
          areStatesEqual = _ref.areStatesEqual,
          areOwnPropsEqual = _ref.areOwnPropsEqual,
          areStatePropsEqual = _ref.areStatePropsEqual,
          hasRunAtLeastOnce = !1;
        function handleFirstCall(firstState, firstOwnProps) {
          return (
            (stateProps = mapStateToProps(
              (state = firstState),
              (ownProps = firstOwnProps),
            )),
            (dispatchProps = mapDispatchToProps(dispatch, ownProps)),
            (mergedProps = mergeProps(stateProps, dispatchProps, ownProps)),
            (hasRunAtLeastOnce = !0),
            mergedProps
          );
        }
        function handleNewPropsAndNewState() {
          return (
            (stateProps = mapStateToProps(state, ownProps)),
            mapDispatchToProps.dependsOnOwnProps &&
              (dispatchProps = mapDispatchToProps(dispatch, ownProps)),
            (mergedProps = mergeProps(stateProps, dispatchProps, ownProps))
          );
        }
        function handleNewProps() {
          return (
            mapStateToProps.dependsOnOwnProps &&
              (stateProps = mapStateToProps(state, ownProps)),
            mapDispatchToProps.dependsOnOwnProps &&
              (dispatchProps = mapDispatchToProps(dispatch, ownProps)),
            (mergedProps = mergeProps(stateProps, dispatchProps, ownProps))
          );
        }
        function handleNewState() {
          var nextStateProps = mapStateToProps(state, ownProps),
            statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
          return (
            (stateProps = nextStateProps),
            statePropsChanged &&
              (mergedProps = mergeProps(stateProps, dispatchProps, ownProps)),
            mergedProps
          );
        }
        function handleSubsequentCalls(nextState, nextOwnProps) {
          var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps),
            stateChanged = !areStatesEqual(
              nextState,
              state,
              nextOwnProps,
              ownProps,
            );
          return ((state = nextState),
          (ownProps = nextOwnProps),
          propsChanged && stateChanged)
            ? handleNewPropsAndNewState()
            : propsChanged
              ? handleNewProps()
              : stateChanged
                ? handleNewState()
                : mergedProps;
        }
        return function pureFinalPropsSelector(nextState, nextOwnProps) {
          return hasRunAtLeastOnce
            ? handleSubsequentCalls(nextState, nextOwnProps)
            : handleFirstCall(nextState, nextOwnProps);
        };
      }
      function finalPropsSelectorFactory(dispatch, _ref2) {
        var initMapStateToProps = _ref2.initMapStateToProps,
          initMapDispatchToProps = _ref2.initMapDispatchToProps,
          initMergeProps = _ref2.initMergeProps,
          options = _objectWithoutPropertiesLoose(
            _ref2,
            selectorFactory_excluded,
          ),
          mapStateToProps = initMapStateToProps(dispatch, options),
          mapDispatchToProps = initMapDispatchToProps(dispatch, options),
          mergeProps = initMergeProps(dispatch, options);
        return (
          options.pure
            ? pureFinalPropsSelectorFactory
            : impureFinalPropsSelectorFactory
        )(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
      }
      var connect_excluded = [
        'pure',
        'areStatesEqual',
        'areOwnPropsEqual',
        'areStatePropsEqual',
        'areMergedPropsEqual',
      ];
      function match(arg, factories, name) {
        for (var i = factories.length - 1; i >= 0; i--) {
          var result = factories[i](arg);
          if (result) return result;
        }
        return function (dispatch, options) {
          throw Error(
            'Invalid value of type ' +
              typeof arg +
              ' for ' +
              name +
              ' argument when connecting component ' +
              options.wrappedComponentName +
              '.',
          );
        };
      }
      function strictEqual(a, b) {
        return a === b;
      }
      let connect = (function createConnect(_temp) {
        var _ref = {},
          _ref$connectHOC = _ref.connectHOC,
          connectHOC =
            void 0 === _ref$connectHOC ? connectAdvanced : _ref$connectHOC,
          _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
          mapStateToPropsFactories =
            void 0 === _ref$mapStateToPropsF
              ? mapStateToProps
              : _ref$mapStateToPropsF,
          _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
          mapDispatchToPropsFactories =
            void 0 === _ref$mapDispatchToPro
              ? mapDispatchToProps
              : _ref$mapDispatchToPro,
          _ref$mergePropsFactor = _ref.mergePropsFactories,
          mergePropsFactories =
            void 0 === _ref$mergePropsFactor
              ? mergeProps
              : _ref$mergePropsFactor,
          _ref$selectorFactory = _ref.selectorFactory,
          selectorFactory =
            void 0 === _ref$selectorFactory
              ? finalPropsSelectorFactory
              : _ref$selectorFactory;
        return function connect(
          mapStateToProps,
          mapDispatchToProps,
          mergeProps,
          _ref2,
        ) {
          void 0 === _ref2 && (_ref2 = {});
          var _ref3 = _ref2,
            _ref3$pure = _ref3.pure,
            _ref3$areStatesEqual = _ref3.areStatesEqual,
            _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
            areOwnPropsEqual =
              void 0 === _ref3$areOwnPropsEqua
                ? shallowEqual
                : _ref3$areOwnPropsEqua,
            _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
            areStatePropsEqual =
              void 0 === _ref3$areStatePropsEq
                ? shallowEqual
                : _ref3$areStatePropsEq,
            _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
            areMergedPropsEqual =
              void 0 === _ref3$areMergedPropsE
                ? shallowEqual
                : _ref3$areMergedPropsE,
            extraOptions = _objectWithoutPropertiesLoose(
              _ref3,
              connect_excluded,
            ),
            initMapStateToProps = match(
              mapStateToProps,
              mapStateToPropsFactories,
              'mapStateToProps',
            ),
            initMapDispatchToProps = match(
              mapDispatchToProps,
              mapDispatchToPropsFactories,
              'mapDispatchToProps',
            ),
            initMergeProps = match(
              mergeProps,
              mergePropsFactories,
              'mergeProps',
            );
          return connectHOC(
            selectorFactory,
            (0, esm_extends.A)(
              {
                methodName: 'connect',
                getDisplayName: function getDisplayName(name) {
                  return 'Connect(' + name + ')';
                },
                shouldHandleStateChanges: !!mapStateToProps,
                initMapStateToProps: initMapStateToProps,
                initMapDispatchToProps: initMapDispatchToProps,
                initMergeProps: initMergeProps,
                pure: void 0 === _ref3$pure || _ref3$pure,
                areStatesEqual:
                  void 0 === _ref3$areStatesEqual
                    ? strictEqual
                    : _ref3$areStatesEqual,
                areOwnPropsEqual: areOwnPropsEqual,
                areStatePropsEqual: areStatePropsEqual,
                areMergedPropsEqual: areMergedPropsEqual,
              },
              extraOptions,
            ),
          );
        };
      })();
      var react_dom = __webpack_require__('./node_modules/react-dom/index.js');
      function areInputsEqual(newInputs, lastInputs) {
        if (newInputs.length !== lastInputs.length) return !1;
        for (var i = 0; i < newInputs.length; i++)
          if (newInputs[i] !== lastInputs[i]) return !1;
        return !0;
      }
      function useMemoOne(getResult, inputs) {
        var initial = (0, react.useState)(function () {
            return { inputs: inputs, result: getResult() };
          })[0],
          isFirstRun = (0, react.useRef)(!0),
          committed = (0, react.useRef)(initial),
          cache =
            isFirstRun.current ||
            (inputs &&
              committed.current.inputs &&
              areInputsEqual(inputs, committed.current.inputs))
              ? committed.current
              : { inputs: inputs, result: getResult() };
        return (
          (0, react.useEffect)(
            function () {
              (isFirstRun.current = !1), (committed.current = cache);
            },
            [cache],
          ),
          cache.result
        );
      }
      function useCallbackOne(callback, inputs) {
        return useMemoOne(function () {
          return callback;
        }, inputs);
      }
      batch = react_dom.unstable_batchedUpdates;
      var use_memo_one_esm_useMemo = useMemoOne,
        useCallback = useCallbackOne,
        tiny_invariant = __webpack_require__(
          './node_modules/tiny-invariant/dist/esm/tiny-invariant.js',
        ),
        getRect = function getRect(_ref) {
          var top = _ref.top,
            right = _ref.right,
            bottom = _ref.bottom,
            left = _ref.left;
          return {
            top: top,
            right: right,
            bottom: bottom,
            left: left,
            width: right - left,
            height: bottom - top,
            x: left,
            y: top,
            center: { x: (right + left) / 2, y: (bottom + top) / 2 },
          };
        },
        expand = function expand(target, expandBy) {
          return {
            top: target.top - expandBy.top,
            left: target.left - expandBy.left,
            bottom: target.bottom + expandBy.bottom,
            right: target.right + expandBy.right,
          };
        },
        shrink = function shrink(target, shrinkBy) {
          return {
            top: target.top + shrinkBy.top,
            left: target.left + shrinkBy.left,
            bottom: target.bottom - shrinkBy.bottom,
            right: target.right - shrinkBy.right,
          };
        },
        noSpacing = { top: 0, right: 0, bottom: 0, left: 0 },
        createBox = function createBox(_ref2) {
          var borderBox = _ref2.borderBox,
            _ref2$margin = _ref2.margin,
            margin = void 0 === _ref2$margin ? noSpacing : _ref2$margin,
            _ref2$border = _ref2.border,
            border = void 0 === _ref2$border ? noSpacing : _ref2$border,
            _ref2$padding = _ref2.padding,
            padding = void 0 === _ref2$padding ? noSpacing : _ref2$padding,
            marginBox = getRect(expand(borderBox, margin)),
            paddingBox = getRect(shrink(borderBox, border)),
            contentBox = getRect(shrink(paddingBox, padding));
          return {
            marginBox: marginBox,
            borderBox: getRect(borderBox),
            paddingBox: paddingBox,
            contentBox: contentBox,
            margin: margin,
            border: border,
            padding: padding,
          };
        },
        parse = function parse(raw) {
          var value = raw.slice(0, -2);
          if ('px' !== raw.slice(-2)) return 0;
          var result = Number(value);
          return isNaN(result) && (0, tiny_invariant.A)(!1), result;
        },
        offset = function offset(original, change) {
          var borderBox = original.borderBox,
            border = original.border,
            margin = original.margin,
            padding = original.padding;
          return createBox({
            borderBox: {
              top: borderBox.top + change.y,
              left: borderBox.left + change.x,
              bottom: borderBox.bottom + change.y,
              right: borderBox.right + change.x,
            },
            border: border,
            margin: margin,
            padding: padding,
          });
        },
        withScroll = function withScroll(original, scroll) {
          return (
            void 0 === scroll &&
              (scroll = { x: window.pageXOffset, y: window.pageYOffset }),
            offset(original, scroll)
          );
        },
        calculateBox = function calculateBox(borderBox, styles) {
          return createBox({
            borderBox: borderBox,
            margin: {
              top: parse(styles.marginTop),
              right: parse(styles.marginRight),
              bottom: parse(styles.marginBottom),
              left: parse(styles.marginLeft),
            },
            padding: {
              top: parse(styles.paddingTop),
              right: parse(styles.paddingRight),
              bottom: parse(styles.paddingBottom),
              left: parse(styles.paddingLeft),
            },
            border: {
              top: parse(styles.borderTopWidth),
              right: parse(styles.borderRightWidth),
              bottom: parse(styles.borderBottomWidth),
              left: parse(styles.borderLeftWidth),
            },
          });
        },
        getBox = function getBox(el) {
          return calculateBox(
            el.getBoundingClientRect(),
            window.getComputedStyle(el),
          );
        },
        safeIsNaN =
          Number.isNaN ||
          function ponyfill(value) {
            return 'number' == typeof value && value != value;
          };
      function isEqual(first, second) {
        return !!(first === second || (safeIsNaN(first) && safeIsNaN(second)));
      }
      function memoize_one_esm_areInputsEqual(newInputs, lastInputs) {
        if (newInputs.length !== lastInputs.length) return !1;
        for (var i = 0; i < newInputs.length; i++)
          if (!isEqual(newInputs[i], lastInputs[i])) return !1;
        return !0;
      }
      let memoize_one_esm = function memoizeOne(resultFn, isEqual) {
          void 0 === isEqual && (isEqual = memoize_one_esm_areInputsEqual);
          var lastThis,
            lastResult,
            lastArgs = [],
            calledOnce = !1;
          return function memoized() {
            for (var newArgs = [], _i = 0; _i < arguments.length; _i++)
              newArgs[_i] = arguments[_i];
            return (
              (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) ||
                ((lastResult = resultFn.apply(this, newArgs)),
                (calledOnce = !0),
                (lastThis = this),
                (lastArgs = newArgs)),
              lastResult
            );
          };
        },
        raf_schd_esm = function rafSchd(fn) {
          var lastArgs = [],
            frameId = null,
            wrapperFn = function wrapperFn() {
              for (
                var _len = arguments.length, args = Array(_len), _key = 0;
                _key < _len;
                _key++
              )
                args[_key] = arguments[_key];
              (lastArgs = args),
                frameId ||
                  (frameId = requestAnimationFrame(function () {
                    (frameId = null), fn.apply(void 0, lastArgs);
                  }));
            };
          return (
            (wrapperFn.cancel = function () {
              frameId && (cancelAnimationFrame(frameId), (frameId = null));
            }),
            wrapperFn
          );
        };
      var spacesAndTabs = /[ \t]{2,}/g,
        lineStartWithSpaces = /^[ \t]*/gm;
      function log(type, message) {}
      function noop() {}
      function getOptions(shared, fromBinding) {
        return (0, esm_extends.A)({}, shared, {}, fromBinding);
      }
      function bindEvents(el, bindings, sharedOptions) {
        var unbindings = bindings.map(function (binding) {
          var options = getOptions(sharedOptions, binding.options);
          return (
            el.addEventListener(binding.eventName, binding.fn, options),
            function unbind() {
              el.removeEventListener(binding.eventName, binding.fn, options);
            }
          );
        });
        return function unbindAll() {
          unbindings.forEach(function (unbind) {
            unbind();
          });
        };
      }
      function RbdInvariant(message) {
        this.message = message;
      }
      function invariant(condition, message) {
        if (!condition) throw new RbdInvariant('Invariant failed');
      }
      log.bind(null, 'warn'),
        log.bind(null, 'error'),
        (RbdInvariant.prototype.toString = function toString() {
          return this.message;
        });
      var ErrorBoundary = (function (_React$Component) {
          function ErrorBoundary() {
            for (
              var _this, _len = arguments.length, args = Array(_len), _key = 0;
              _key < _len;
              _key++
            )
              args[_key] = arguments[_key];
            return (
              ((_this =
                _React$Component.call.apply(
                  _React$Component,
                  [this].concat(args),
                ) || this).callbacks = null),
              (_this.unbind = noop),
              (_this.onWindowError = function (event) {
                var callbacks = _this.getCallbacks();
                callbacks.isDragging() && callbacks.tryAbort(),
                  event.error instanceof RbdInvariant && event.preventDefault();
              }),
              (_this.getCallbacks = function () {
                if (!_this.callbacks)
                  throw Error(
                    'Unable to find AppCallbacks in <ErrorBoundary/>',
                  );
                return _this.callbacks;
              }),
              (_this.setCallbacks = function (callbacks) {
                _this.callbacks = callbacks;
              }),
              _this
            );
          }
          (0, inheritsLoose.A)(ErrorBoundary, _React$Component);
          var _proto = ErrorBoundary.prototype;
          return (
            (_proto.componentDidMount = function componentDidMount() {
              this.unbind = bindEvents(window, [
                { eventName: 'error', fn: this.onWindowError },
              ]);
            }),
            (_proto.componentDidCatch = function componentDidCatch(err) {
              if (err instanceof RbdInvariant) {
                this.setState({});
                return;
              }
              throw err;
            }),
            (_proto.componentWillUnmount = function componentWillUnmount() {
              this.unbind();
            }),
            (_proto.render = function render() {
              return this.props.children(this.setCallbacks);
            }),
            ErrorBoundary
          );
        })(react.Component),
        position = function position(index) {
          return index + 1;
        },
        withLocation = function withLocation(source, destination) {
          var isInHomeList = source.droppableId === destination.droppableId,
            startPosition = position(source.index),
            endPosition = position(destination.index);
          return isInHomeList
            ? '\n      You have moved the item from position ' +
                startPosition +
                '\n      to position ' +
                endPosition +
                '\n    '
            : '\n    You have moved the item from position ' +
                startPosition +
                '\n    in list ' +
                source.droppableId +
                '\n    to list ' +
                destination.droppableId +
                '\n    in position ' +
                endPosition +
                '\n  ';
        },
        withCombine = function withCombine(id, source, combine) {
          return source.droppableId === combine.droppableId
            ? '\n      The item ' +
                id +
                '\n      has been combined with ' +
                combine.draggableId
            : '\n      The item ' +
                id +
                '\n      in list ' +
                source.droppableId +
                '\n      has been combined with ' +
                combine.draggableId +
                '\n      in list ' +
                combine.droppableId +
                '\n    ';
        },
        returnedToStart = function returnedToStart(source) {
          return (
            '\n  The item has returned to its starting position\n  of ' +
            position(source.index) +
            '\n'
          );
        },
        preset = {
          dragHandleUsageInstructions:
            '\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n',
          onDragStart: function onDragStart(start) {
            return (
              '\n  You have lifted an item in position ' +
              position(start.source.index) +
              '\n'
            );
          },
          onDragUpdate: function onDragUpdate(update) {
            var location = update.destination;
            if (location) return withLocation(update.source, location);
            var combine = update.combine;
            return combine
              ? withCombine(update.draggableId, update.source, combine)
              : 'You are over an area that cannot be dropped on';
          },
          onDragEnd: function onDragEnd(result) {
            if ('CANCEL' === result.reason)
              return (
                '\n      Movement cancelled.\n      ' +
                returnedToStart(result.source) +
                '\n    '
              );
            var location = result.destination,
              combine = result.combine;
            return location
              ? '\n      You have dropped the item.\n      ' +
                  withLocation(result.source, location) +
                  '\n    '
              : combine
                ? '\n      You have dropped the item.\n      ' +
                  withCombine(result.draggableId, result.source, combine) +
                  '\n    '
                : '\n    The item has been dropped while not over a drop area.\n    ' +
                  returnedToStart(result.source) +
                  '\n  ';
          },
        },
        origin = { x: 0, y: 0 },
        add = function add(point1, point2) {
          return { x: point1.x + point2.x, y: point1.y + point2.y };
        },
        subtract = function subtract(point1, point2) {
          return { x: point1.x - point2.x, y: point1.y - point2.y };
        },
        react_beautiful_dnd_esm_isEqual = function isEqual(point1, point2) {
          return point1.x === point2.x && point1.y === point2.y;
        },
        negate = function negate(point) {
          return {
            x: 0 !== point.x ? -point.x : 0,
            y: 0 !== point.y ? -point.y : 0,
          };
        },
        patch = function patch(line, value, otherValue) {
          var _ref;
          return (
            void 0 === otherValue && (otherValue = 0),
            ((_ref = {})[line] = value),
            (_ref['x' === line ? 'y' : 'x'] = otherValue),
            _ref
          );
        },
        distance = function distance(point1, point2) {
          return Math.sqrt(
            Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2),
          );
        },
        closest = function closest(target, points) {
          return Math.min.apply(
            Math,
            points.map(function (point) {
              return distance(target, point);
            }),
          );
        },
        apply = function apply(fn) {
          return function (point) {
            return { x: fn(point.x), y: fn(point.y) };
          };
        },
        executeClip = function (frame, subject) {
          var result = getRect({
            top: Math.max(subject.top, frame.top),
            right: Math.min(subject.right, frame.right),
            bottom: Math.min(subject.bottom, frame.bottom),
            left: Math.max(subject.left, frame.left),
          });
          return result.width <= 0 || result.height <= 0 ? null : result;
        },
        offsetByPosition = function offsetByPosition(spacing, point) {
          return {
            top: spacing.top + point.y,
            left: spacing.left + point.x,
            bottom: spacing.bottom + point.y,
            right: spacing.right + point.x,
          };
        },
        getCorners = function getCorners(spacing) {
          return [
            { x: spacing.left, y: spacing.top },
            { x: spacing.right, y: spacing.top },
            { x: spacing.left, y: spacing.bottom },
            { x: spacing.right, y: spacing.bottom },
          ];
        },
        increase = function increase(target, axis, withPlaceholder) {
          if (withPlaceholder && withPlaceholder.increasedBy) {
            var _extends2;
            return (0, esm_extends.A)(
              {},
              target,
              (((_extends2 = {})[axis.end] =
                target[axis.end] + withPlaceholder.increasedBy[axis.line]),
              _extends2),
            );
          }
          return target;
        },
        getSubject = function (_ref) {
          var target,
            target1,
            page = _ref.page,
            withPlaceholder = _ref.withPlaceholder,
            axis = _ref.axis,
            frame = _ref.frame,
            clipped =
              ((target1 = increase(
                ((target = page.marginBox),
                frame
                  ? offsetByPosition(target, frame.scroll.diff.displacement)
                  : target),
                axis,
                withPlaceholder,
              )),
              frame && frame.shouldClipSubject
                ? executeClip(frame.pageMarginBox, target1)
                : getRect(target1));
          return {
            page: page,
            withPlaceholder: withPlaceholder,
            active: clipped,
          };
        },
        scrollDroppable = function (droppable, newScroll) {
          droppable.frame || invariant(!1);
          var scrollable = droppable.frame,
            scrollDiff = subtract(newScroll, scrollable.scroll.initial),
            scrollDisplacement = negate(scrollDiff),
            frame = (0, esm_extends.A)({}, scrollable, {
              scroll: {
                initial: scrollable.scroll.initial,
                current: newScroll,
                diff: { value: scrollDiff, displacement: scrollDisplacement },
                max: scrollable.scroll.max,
              },
            }),
            subject = getSubject({
              page: droppable.subject.page,
              withPlaceholder: droppable.subject.withPlaceholder,
              axis: droppable.axis,
              frame: frame,
            });
          return (0, esm_extends.A)({}, droppable, {
            frame: frame,
            subject: subject,
          });
        };
      function isInteger(value) {
        return Number.isInteger
          ? Number.isInteger(value)
          : 'number' == typeof value &&
              isFinite(value) &&
              Math.floor(value) === value;
      }
      function values(map) {
        return Object.values
          ? Object.values(map)
          : Object.keys(map).map(function (key) {
              return map[key];
            });
      }
      function findIndex(list, predicate) {
        if (list.findIndex) return list.findIndex(predicate);
        for (var i = 0; i < list.length; i++) if (predicate(list[i])) return i;
        return -1;
      }
      function find(list, predicate) {
        if (list.find) return list.find(predicate);
        var index = findIndex(list, predicate);
        if (-1 !== index) return list[index];
      }
      function toArray(list) {
        return Array.prototype.slice.call(list);
      }
      var toDroppableMap = memoize_one_esm(function (droppables) {
          return droppables.reduce(function (previous, current) {
            return (previous[current.descriptor.id] = current), previous;
          }, {});
        }),
        toDraggableMap = memoize_one_esm(function (draggables) {
          return draggables.reduce(function (previous, current) {
            return (previous[current.descriptor.id] = current), previous;
          }, {});
        }),
        toDroppableList = memoize_one_esm(function (droppables) {
          return values(droppables);
        }),
        toDraggableList = memoize_one_esm(function (draggables) {
          return values(draggables);
        }),
        getDraggablesInsideDroppable = memoize_one_esm(
          function (droppableId, draggables) {
            return toDraggableList(draggables)
              .filter(function (draggable) {
                return droppableId === draggable.descriptor.droppableId;
              })
              .sort(function (a, b) {
                return a.descriptor.index - b.descriptor.index;
              });
          },
        );
      function tryGetDestination(impact) {
        return impact.at && 'REORDER' === impact.at.type
          ? impact.at.destination
          : null;
      }
      function tryGetCombine(impact) {
        return impact.at && 'COMBINE' === impact.at.type
          ? impact.at.combine
          : null;
      }
      var removeDraggableFromList = memoize_one_esm(function (remove, list) {
          return list.filter(function (item) {
            return item.descriptor.id !== remove.descriptor.id;
          });
        }),
        moveToNextCombine = function (_ref) {
          var isMovingForward = _ref.isMovingForward,
            draggable = _ref.draggable,
            destination = _ref.destination,
            insideDestination = _ref.insideDestination,
            previousImpact = _ref.previousImpact;
          if (
            !destination.isCombineEnabled ||
            !tryGetDestination(previousImpact)
          )
            return null;
          function getImpact(target) {
            var at = {
              type: 'COMBINE',
              combine: {
                draggableId: target,
                droppableId: destination.descriptor.id,
              },
            };
            return (0, esm_extends.A)({}, previousImpact, { at: at });
          }
          var all = previousImpact.displaced.all,
            closestId = all.length ? all[0] : null;
          if (isMovingForward) return closestId ? getImpact(closestId) : null;
          var withoutDraggable = removeDraggableFromList(
            draggable,
            insideDestination,
          );
          if (!closestId)
            return withoutDraggable.length
              ? getImpact(
                  withoutDraggable[withoutDraggable.length - 1].descriptor.id,
                )
              : null;
          var indexOfClosest = findIndex(withoutDraggable, function (d) {
            return d.descriptor.id === closestId;
          });
          -1 !== indexOfClosest || invariant(!1);
          var proposedIndex = indexOfClosest - 1;
          return proposedIndex < 0
            ? null
            : getImpact(withoutDraggable[proposedIndex].descriptor.id);
        },
        isHomeOf = function (draggable, destination) {
          return draggable.descriptor.droppableId === destination.descriptor.id;
        },
        noDisplacedBy = { point: origin, value: 0 },
        emptyGroups = { invisible: {}, visible: {}, all: [] },
        noImpact = {
          displaced: emptyGroups,
          displacedBy: noDisplacedBy,
          at: null,
        },
        isWithin = function (lowerBound, upperBound) {
          return function (value) {
            return lowerBound <= value && value <= upperBound;
          };
        },
        isPartiallyVisibleThroughFrame = function (frame) {
          var isWithinVertical = isWithin(frame.top, frame.bottom),
            isWithinHorizontal = isWithin(frame.left, frame.right);
          return function (subject) {
            if (
              isWithinVertical(subject.top) &&
              isWithinVertical(subject.bottom) &&
              isWithinHorizontal(subject.left) &&
              isWithinHorizontal(subject.right)
            )
              return !0;
            var isPartiallyVisibleVertically =
                isWithinVertical(subject.top) ||
                isWithinVertical(subject.bottom),
              isPartiallyVisibleHorizontally =
                isWithinHorizontal(subject.left) ||
                isWithinHorizontal(subject.right);
            if (isPartiallyVisibleVertically && isPartiallyVisibleHorizontally)
              return !0;
            var isBiggerVertically =
                subject.top < frame.top && subject.bottom > frame.bottom,
              isBiggerHorizontally =
                subject.left < frame.left && subject.right > frame.right;
            return (
              (!!isBiggerVertically && !!isBiggerHorizontally) ||
              (isBiggerVertically && isPartiallyVisibleHorizontally) ||
              (isBiggerHorizontally && isPartiallyVisibleVertically)
            );
          };
        },
        isTotallyVisibleThroughFrame = function (frame) {
          var isWithinVertical = isWithin(frame.top, frame.bottom),
            isWithinHorizontal = isWithin(frame.left, frame.right);
          return function (subject) {
            return (
              isWithinVertical(subject.top) &&
              isWithinVertical(subject.bottom) &&
              isWithinHorizontal(subject.left) &&
              isWithinHorizontal(subject.right)
            );
          };
        },
        vertical = {
          direction: 'vertical',
          line: 'y',
          crossAxisLine: 'x',
          start: 'top',
          end: 'bottom',
          size: 'height',
          crossAxisStart: 'left',
          crossAxisEnd: 'right',
          crossAxisSize: 'width',
        },
        horizontal = {
          direction: 'horizontal',
          line: 'x',
          crossAxisLine: 'y',
          start: 'left',
          end: 'right',
          size: 'width',
          crossAxisStart: 'top',
          crossAxisEnd: 'bottom',
          crossAxisSize: 'height',
        },
        isVisible = function isVisible(_ref) {
          var toBeDisplaced = _ref.target,
            destination = _ref.destination,
            viewport = _ref.viewport,
            withDroppableDisplacement = _ref.withDroppableDisplacement,
            isVisibleThroughFrameFn = _ref.isVisibleThroughFrameFn,
            displacedTarget = withDroppableDisplacement
              ? offsetByPosition(
                  toBeDisplaced,
                  destination.frame
                    ? destination.frame.scroll.diff.displacement
                    : origin,
                )
              : toBeDisplaced;
          return (
            !!destination.subject.active &&
            isVisibleThroughFrameFn(destination.subject.active)(
              displacedTarget,
            ) &&
            isVisibleThroughFrameFn(viewport)(displacedTarget)
          );
        },
        isTotallyVisible = function isTotallyVisible(args) {
          return isVisible(
            (0, esm_extends.A)({}, args, {
              isVisibleThroughFrameFn: isTotallyVisibleThroughFrame,
            }),
          );
        },
        isTotallyVisibleOnAxis = function isTotallyVisibleOnAxis(args) {
          var axis;
          return isVisible(
            (0, esm_extends.A)({}, args, {
              isVisibleThroughFrameFn:
                ((axis = args.destination.axis),
                function (frame) {
                  var isWithinVertical = isWithin(frame.top, frame.bottom),
                    isWithinHorizontal = isWithin(frame.left, frame.right);
                  return function (subject) {
                    return axis === vertical
                      ? isWithinVertical(subject.top) &&
                          isWithinVertical(subject.bottom)
                      : isWithinHorizontal(subject.left) &&
                          isWithinHorizontal(subject.right);
                  };
                }),
            }),
          );
        },
        getShouldAnimate = function getShouldAnimate(
          id,
          last,
          forceShouldAnimate,
        ) {
          if ('boolean' == typeof forceShouldAnimate) return forceShouldAnimate;
          if (!last) return !0;
          var invisible = last.invisible,
            visible = last.visible;
          if (invisible[id]) return !1;
          var previous = visible[id];
          return !previous || previous.shouldAnimate;
        };
      function getTarget(draggable, displacedBy) {
        return getRect(
          expand(draggable.page.marginBox, {
            top: displacedBy.point.y,
            right: 0,
            bottom: 0,
            left: displacedBy.point.x,
          }),
        );
      }
      function getDisplacementGroups(_ref) {
        var afterDragging = _ref.afterDragging,
          destination = _ref.destination,
          displacedBy = _ref.displacedBy,
          viewport = _ref.viewport,
          forceShouldAnimate = _ref.forceShouldAnimate,
          last = _ref.last;
        return afterDragging.reduce(
          function process(groups, draggable) {
            var args,
              target = getTarget(draggable, displacedBy),
              id = draggable.descriptor.id;
            if (
              (groups.all.push(id),
              (args = {
                target: target,
                destination: destination,
                viewport: viewport,
                withDroppableDisplacement: !0,
              }),
              !isVisible(
                (0, esm_extends.A)({}, args, {
                  isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame,
                }),
              ))
            )
              return (groups.invisible[draggable.descriptor.id] = !0), groups;
            var shouldAnimate = getShouldAnimate(id, last, forceShouldAnimate);
            return (
              (groups.visible[id] = {
                draggableId: id,
                shouldAnimate: shouldAnimate,
              }),
              groups
            );
          },
          { all: [], visible: {}, invisible: {} },
        );
      }
      function getIndexOfLastItem(draggables, options) {
        if (!draggables.length) return 0;
        var indexOfLastItem =
          draggables[draggables.length - 1].descriptor.index;
        return options.inHomeList ? indexOfLastItem : indexOfLastItem + 1;
      }
      function goAtEnd(_ref) {
        var insideDestination = _ref.insideDestination,
          inHomeList = _ref.inHomeList,
          displacedBy = _ref.displacedBy,
          destination = _ref.destination,
          newIndex = getIndexOfLastItem(insideDestination, {
            inHomeList: inHomeList,
          });
        return {
          displaced: emptyGroups,
          displacedBy: displacedBy,
          at: {
            type: 'REORDER',
            destination: {
              droppableId: destination.descriptor.id,
              index: newIndex,
            },
          },
        };
      }
      function calculateReorderImpact(_ref2) {
        var draggable = _ref2.draggable,
          insideDestination = _ref2.insideDestination,
          destination = _ref2.destination,
          viewport = _ref2.viewport,
          displacedBy = _ref2.displacedBy,
          last = _ref2.last,
          index = _ref2.index,
          forceShouldAnimate = _ref2.forceShouldAnimate,
          inHomeList = isHomeOf(draggable, destination);
        if (null == index)
          return goAtEnd({
            insideDestination: insideDestination,
            inHomeList: inHomeList,
            displacedBy: displacedBy,
            destination: destination,
          });
        var match = find(insideDestination, function (item) {
          return item.descriptor.index === index;
        });
        if (!match)
          return goAtEnd({
            insideDestination: insideDestination,
            inHomeList: inHomeList,
            displacedBy: displacedBy,
            destination: destination,
          });
        var withoutDragging = removeDraggableFromList(
            draggable,
            insideDestination,
          ),
          sliceFrom = insideDestination.indexOf(match);
        return {
          displaced: getDisplacementGroups({
            afterDragging: withoutDragging.slice(sliceFrom),
            destination: destination,
            displacedBy: displacedBy,
            last: last,
            viewport: viewport.frame,
            forceShouldAnimate: forceShouldAnimate,
          }),
          displacedBy: displacedBy,
          at: {
            type: 'REORDER',
            destination: {
              droppableId: destination.descriptor.id,
              index: index,
            },
          },
        };
      }
      function didStartAfterCritical(draggableId, afterCritical) {
        return !!afterCritical.effected[draggableId];
      }
      var fromCombine = function (_ref) {
          var isMovingForward = _ref.isMovingForward,
            destination = _ref.destination,
            draggables = _ref.draggables,
            combine = _ref.combine,
            afterCritical = _ref.afterCritical;
          if (!destination.isCombineEnabled) return null;
          var combineId = combine.draggableId,
            combineWithIndex = draggables[combineId].descriptor.index;
          return didStartAfterCritical(combineId, afterCritical)
            ? isMovingForward
              ? combineWithIndex
              : combineWithIndex - 1
            : isMovingForward
              ? combineWithIndex + 1
              : combineWithIndex;
        },
        fromReorder = function (_ref) {
          var isMovingForward = _ref.isMovingForward,
            isInHomeList = _ref.isInHomeList,
            insideDestination = _ref.insideDestination,
            location = _ref.location;
          if (!insideDestination.length) return null;
          var currentIndex = location.index,
            proposedIndex = isMovingForward
              ? currentIndex + 1
              : currentIndex - 1,
            firstIndex = insideDestination[0].descriptor.index,
            lastIndex =
              insideDestination[insideDestination.length - 1].descriptor.index;
          return proposedIndex < firstIndex ||
            proposedIndex > (isInHomeList ? lastIndex : lastIndex + 1)
            ? null
            : proposedIndex;
        },
        moveToNextIndex = function (_ref) {
          var isMovingForward = _ref.isMovingForward,
            isInHomeList = _ref.isInHomeList,
            draggable = _ref.draggable,
            draggables = _ref.draggables,
            destination = _ref.destination,
            insideDestination = _ref.insideDestination,
            previousImpact = _ref.previousImpact,
            viewport = _ref.viewport,
            afterCritical = _ref.afterCritical,
            wasAt = previousImpact.at;
          if ((wasAt || invariant(!1), 'REORDER' === wasAt.type)) {
            var _newIndex = fromReorder({
              isMovingForward: isMovingForward,
              isInHomeList: isInHomeList,
              location: wasAt.destination,
              insideDestination: insideDestination,
            });
            return null == _newIndex
              ? null
              : calculateReorderImpact({
                  draggable: draggable,
                  insideDestination: insideDestination,
                  destination: destination,
                  viewport: viewport,
                  last: previousImpact.displaced,
                  displacedBy: previousImpact.displacedBy,
                  index: _newIndex,
                });
          }
          var newIndex = fromCombine({
            isMovingForward: isMovingForward,
            destination: destination,
            displaced: previousImpact.displaced,
            draggables: draggables,
            combine: wasAt.combine,
            afterCritical: afterCritical,
          });
          return null == newIndex
            ? null
            : calculateReorderImpact({
                draggable: draggable,
                insideDestination: insideDestination,
                destination: destination,
                viewport: viewport,
                last: previousImpact.displaced,
                displacedBy: previousImpact.displacedBy,
                index: newIndex,
              });
        },
        getCombinedItemDisplacement = function (_ref) {
          var displaced = _ref.displaced,
            afterCritical = _ref.afterCritical,
            combineWith = _ref.combineWith,
            displacedBy = _ref.displacedBy,
            isDisplaced = !!(
              displaced.visible[combineWith] || displaced.invisible[combineWith]
            );
          return didStartAfterCritical(combineWith, afterCritical)
            ? isDisplaced
              ? origin
              : negate(displacedBy.point)
            : isDisplaced
              ? displacedBy.point
              : origin;
        },
        whenCombining = function (_ref) {
          var afterCritical = _ref.afterCritical,
            impact = _ref.impact,
            draggables = _ref.draggables,
            combine = tryGetCombine(impact);
          combine || invariant(!1);
          var combineWith = combine.draggableId;
          return add(
            draggables[combineWith].page.borderBox.center,
            getCombinedItemDisplacement({
              displaced: impact.displaced,
              afterCritical: afterCritical,
              combineWith: combineWith,
              displacedBy: impact.displacedBy,
            }),
          );
        },
        distanceFromStartToBorderBoxCenter =
          function distanceFromStartToBorderBoxCenter(axis, box) {
            return box.margin[axis.start] + box.borderBox[axis.size] / 2;
          },
        getCrossAxisBorderBoxCenter = function getCrossAxisBorderBoxCenter(
          axis,
          target,
          isMoving,
        ) {
          return (
            target[axis.crossAxisStart] +
            isMoving.margin[axis.crossAxisStart] +
            isMoving.borderBox[axis.crossAxisSize] / 2
          );
        },
        goAfter = function goAfter(_ref) {
          var axis = _ref.axis,
            moveRelativeTo = _ref.moveRelativeTo,
            isMoving = _ref.isMoving;
          return patch(
            axis.line,
            moveRelativeTo.marginBox[axis.end] +
              distanceFromStartToBorderBoxCenter(axis, isMoving),
            getCrossAxisBorderBoxCenter(
              axis,
              moveRelativeTo.marginBox,
              isMoving,
            ),
          );
        },
        goBefore = function goBefore(_ref2) {
          var axis = _ref2.axis,
            moveRelativeTo = _ref2.moveRelativeTo,
            isMoving = _ref2.isMoving;
          return patch(
            axis.line,
            moveRelativeTo.marginBox[axis.start] -
              (isMoving.margin[axis.end] + isMoving.borderBox[axis.size] / 2),
            getCrossAxisBorderBoxCenter(
              axis,
              moveRelativeTo.marginBox,
              isMoving,
            ),
          );
        },
        goIntoStart = function goIntoStart(_ref3) {
          var axis = _ref3.axis,
            moveInto = _ref3.moveInto,
            isMoving = _ref3.isMoving;
          return patch(
            axis.line,
            moveInto.contentBox[axis.start] +
              distanceFromStartToBorderBoxCenter(axis, isMoving),
            getCrossAxisBorderBoxCenter(axis, moveInto.contentBox, isMoving),
          );
        },
        whenReordering = function (_ref) {
          var impact = _ref.impact,
            draggable = _ref.draggable,
            draggables = _ref.draggables,
            droppable = _ref.droppable,
            afterCritical = _ref.afterCritical,
            insideDestination = getDraggablesInsideDroppable(
              droppable.descriptor.id,
              draggables,
            ),
            draggablePage = draggable.page,
            axis = droppable.axis;
          if (!insideDestination.length)
            return goIntoStart({
              axis: axis,
              moveInto: droppable.page,
              isMoving: draggablePage,
            });
          var displaced = impact.displaced,
            displacedBy = impact.displacedBy,
            closestAfter = displaced.all[0];
          if (closestAfter) {
            var closest = draggables[closestAfter];
            return didStartAfterCritical(closestAfter, afterCritical)
              ? goBefore({
                  axis: axis,
                  moveRelativeTo: closest.page,
                  isMoving: draggablePage,
                })
              : goBefore({
                  axis: axis,
                  moveRelativeTo: offset(closest.page, displacedBy.point),
                  isMoving: draggablePage,
                });
          }
          var last = insideDestination[insideDestination.length - 1];
          return last.descriptor.id === draggable.descriptor.id
            ? draggablePage.borderBox.center
            : didStartAfterCritical(last.descriptor.id, afterCritical)
              ? goAfter({
                  axis: axis,
                  moveRelativeTo: offset(
                    last.page,
                    negate(afterCritical.displacedBy.point),
                  ),
                  isMoving: draggablePage,
                })
              : goAfter({
                  axis: axis,
                  moveRelativeTo: last.page,
                  isMoving: draggablePage,
                });
        },
        withDroppableDisplacement = function (droppable, point) {
          var frame = droppable.frame;
          return frame ? add(point, frame.scroll.diff.displacement) : point;
        },
        getResultWithoutDroppableDisplacement =
          function getResultWithoutDroppableDisplacement(_ref) {
            var impact = _ref.impact,
              draggable = _ref.draggable,
              droppable = _ref.droppable,
              draggables = _ref.draggables,
              afterCritical = _ref.afterCritical,
              original = draggable.page.borderBox.center,
              at = impact.at;
            return droppable && at
              ? 'REORDER' === at.type
                ? whenReordering({
                    impact: impact,
                    draggable: draggable,
                    draggables: draggables,
                    droppable: droppable,
                    afterCritical: afterCritical,
                  })
                : whenCombining({
                    impact: impact,
                    draggables: draggables,
                    afterCritical: afterCritical,
                  })
              : original;
          },
        getPageBorderBoxCenterFromImpact = function (args) {
          var withoutDisplacement = getResultWithoutDroppableDisplacement(args),
            droppable = args.droppable;
          return droppable
            ? withDroppableDisplacement(droppable, withoutDisplacement)
            : withoutDisplacement;
        },
        scrollViewport = function (viewport, newScroll) {
          var diff = subtract(newScroll, viewport.scroll.initial),
            displacement = negate(diff);
          return {
            frame: getRect({
              top: newScroll.y,
              bottom: newScroll.y + viewport.frame.height,
              left: newScroll.x,
              right: newScroll.x + viewport.frame.width,
            }),
            scroll: {
              initial: viewport.scroll.initial,
              max: viewport.scroll.max,
              current: newScroll,
              diff: { value: diff, displacement: displacement },
            },
          };
        };
      function getDraggables(ids, draggables) {
        return ids.map(function (id) {
          return draggables[id];
        });
      }
      function tryGetVisible(id, groups) {
        for (var i = 0; i < groups.length; i++) {
          var displacement = groups[i].visible[id];
          if (displacement) return displacement;
        }
        return null;
      }
      var speculativelyIncrease = function (_ref) {
          var impact = _ref.impact,
            viewport = _ref.viewport,
            destination = _ref.destination,
            draggables = _ref.draggables,
            maxScrollChange = _ref.maxScrollChange,
            scrolledViewport = scrollViewport(
              viewport,
              add(viewport.scroll.current, maxScrollChange),
            ),
            scrolledDroppable = destination.frame
              ? scrollDroppable(
                  destination,
                  add(destination.frame.scroll.current, maxScrollChange),
                )
              : destination,
            last = impact.displaced,
            withViewportScroll = getDisplacementGroups({
              afterDragging: getDraggables(last.all, draggables),
              destination: destination,
              displacedBy: impact.displacedBy,
              viewport: scrolledViewport.frame,
              last: last,
              forceShouldAnimate: !1,
            }),
            withDroppableScroll = getDisplacementGroups({
              afterDragging: getDraggables(last.all, draggables),
              destination: scrolledDroppable,
              displacedBy: impact.displacedBy,
              viewport: viewport.frame,
              last: last,
              forceShouldAnimate: !1,
            }),
            invisible = {},
            visible = {},
            groups = [last, withViewportScroll, withDroppableScroll];
          return (
            last.all.forEach(function (id) {
              var displacement = tryGetVisible(id, groups);
              if (displacement) {
                visible[id] = displacement;
                return;
              }
              invisible[id] = !0;
            }),
            (0, esm_extends.A)({}, impact, {
              displaced: {
                all: last.all,
                invisible: invisible,
                visible: visible,
              },
            })
          );
        },
        getClientFromPageBorderBoxCenter = function (_ref) {
          var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
            draggable = _ref.draggable,
            offset = subtract(
              add(_ref.viewport.scroll.diff.displacement, pageBorderBoxCenter),
              draggable.page.borderBox.center,
            );
          return add(draggable.client.borderBox.center, offset);
        },
        isTotallyVisibleInNewLocation = function (_ref) {
          var draggable = _ref.draggable,
            destination = _ref.destination,
            newPageBorderBoxCenter = _ref.newPageBorderBoxCenter,
            viewport = _ref.viewport,
            withDroppableDisplacement = _ref.withDroppableDisplacement,
            _ref$onlyOnMainAxis = _ref.onlyOnMainAxis,
            changeNeeded = subtract(
              newPageBorderBoxCenter,
              draggable.page.borderBox.center,
            ),
            args = {
              target: offsetByPosition(draggable.page.borderBox, changeNeeded),
              destination: destination,
              withDroppableDisplacement: withDroppableDisplacement,
              viewport: viewport,
            };
          return void 0 !== _ref$onlyOnMainAxis && _ref$onlyOnMainAxis
            ? isTotallyVisibleOnAxis(args)
            : isTotallyVisible(args);
        },
        moveToNextPlace = function (_ref) {
          var isMovingForward = _ref.isMovingForward,
            draggable = _ref.draggable,
            destination = _ref.destination,
            draggables = _ref.draggables,
            previousImpact = _ref.previousImpact,
            viewport = _ref.viewport,
            previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
            previousClientSelection = _ref.previousClientSelection,
            afterCritical = _ref.afterCritical;
          if (!destination.isEnabled) return null;
          var insideDestination = getDraggablesInsideDroppable(
              destination.descriptor.id,
              draggables,
            ),
            isInHomeList = isHomeOf(draggable, destination),
            impact =
              moveToNextCombine({
                isMovingForward: isMovingForward,
                draggable: draggable,
                destination: destination,
                insideDestination: insideDestination,
                previousImpact: previousImpact,
              }) ||
              moveToNextIndex({
                isMovingForward: isMovingForward,
                isInHomeList: isInHomeList,
                draggable: draggable,
                draggables: draggables,
                destination: destination,
                insideDestination: insideDestination,
                previousImpact: previousImpact,
                viewport: viewport,
                afterCritical: afterCritical,
              });
          if (!impact) return null;
          var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
            impact: impact,
            draggable: draggable,
            droppable: destination,
            draggables: draggables,
            afterCritical: afterCritical,
          });
          if (
            isTotallyVisibleInNewLocation({
              draggable: draggable,
              destination: destination,
              newPageBorderBoxCenter: pageBorderBoxCenter,
              viewport: viewport.frame,
              withDroppableDisplacement: !1,
              onlyOnMainAxis: !0,
            })
          )
            return {
              clientSelection: getClientFromPageBorderBoxCenter({
                pageBorderBoxCenter: pageBorderBoxCenter,
                draggable: draggable,
                viewport: viewport,
              }),
              impact: impact,
              scrollJumpRequest: null,
            };
          var distance = subtract(
            pageBorderBoxCenter,
            previousPageBorderBoxCenter,
          );
          return {
            clientSelection: previousClientSelection,
            impact: speculativelyIncrease({
              impact: impact,
              viewport: viewport,
              destination: destination,
              draggables: draggables,
              maxScrollChange: distance,
            }),
            scrollJumpRequest: distance,
          };
        },
        getKnownActive = function getKnownActive(droppable) {
          var rect = droppable.subject.active;
          return rect || invariant(!1), rect;
        },
        getBestCrossAxisDroppable = function (_ref) {
          var isMovingForward = _ref.isMovingForward,
            pageBorderBoxCenter = _ref.pageBorderBoxCenter,
            source = _ref.source,
            droppables = _ref.droppables,
            viewport = _ref.viewport,
            active = source.subject.active;
          if (!active) return null;
          var axis = source.axis,
            isBetweenSourceClipped = isWithin(
              active[axis.start],
              active[axis.end],
            ),
            candidates = toDroppableList(droppables)
              .filter(function (droppable) {
                return droppable !== source;
              })
              .filter(function (droppable) {
                return droppable.isEnabled;
              })
              .filter(function (droppable) {
                return !!droppable.subject.active;
              })
              .filter(function (droppable) {
                return isPartiallyVisibleThroughFrame(viewport.frame)(
                  getKnownActive(droppable),
                );
              })
              .filter(function (droppable) {
                var activeOfTarget = getKnownActive(droppable);
                return isMovingForward
                  ? active[axis.crossAxisEnd] <
                      activeOfTarget[axis.crossAxisEnd]
                  : activeOfTarget[axis.crossAxisStart] <
                      active[axis.crossAxisStart];
              })
              .filter(function (droppable) {
                var activeOfTarget = getKnownActive(droppable),
                  isBetweenDestinationClipped = isWithin(
                    activeOfTarget[axis.start],
                    activeOfTarget[axis.end],
                  );
                return (
                  isBetweenSourceClipped(activeOfTarget[axis.start]) ||
                  isBetweenSourceClipped(activeOfTarget[axis.end]) ||
                  isBetweenDestinationClipped(active[axis.start]) ||
                  isBetweenDestinationClipped(active[axis.end])
                );
              })
              .sort(function (a, b) {
                var first = getKnownActive(a)[axis.crossAxisStart],
                  second = getKnownActive(b)[axis.crossAxisStart];
                return isMovingForward ? first - second : second - first;
              })
              .filter(function (droppable, index, array) {
                return (
                  getKnownActive(droppable)[axis.crossAxisStart] ===
                  getKnownActive(array[0])[axis.crossAxisStart]
                );
              });
          if (!candidates.length) return null;
          if (1 === candidates.length) return candidates[0];
          var contains = candidates.filter(function (droppable) {
            return isWithin(
              getKnownActive(droppable)[axis.start],
              getKnownActive(droppable)[axis.end],
            )(pageBorderBoxCenter[axis.line]);
          });
          return 1 === contains.length
            ? contains[0]
            : contains.length > 1
              ? contains.sort(function (a, b) {
                  return (
                    getKnownActive(a)[axis.start] -
                    getKnownActive(b)[axis.start]
                  );
                })[0]
              : candidates.sort(function (a, b) {
                  var first = closest(
                      pageBorderBoxCenter,
                      getCorners(getKnownActive(a)),
                    ),
                    second = closest(
                      pageBorderBoxCenter,
                      getCorners(getKnownActive(b)),
                    );
                  return first !== second
                    ? first - second
                    : getKnownActive(a)[axis.start] -
                        getKnownActive(b)[axis.start];
                })[0];
        },
        getCurrentPageBorderBoxCenter = function getCurrentPageBorderBoxCenter(
          draggable,
          afterCritical,
        ) {
          var original = draggable.page.borderBox.center;
          return didStartAfterCritical(draggable.descriptor.id, afterCritical)
            ? subtract(original, afterCritical.displacedBy.point)
            : original;
        },
        getCurrentPageBorderBox = function getCurrentPageBorderBox(
          draggable,
          afterCritical,
        ) {
          var original = draggable.page.borderBox;
          return didStartAfterCritical(draggable.descriptor.id, afterCritical)
            ? offsetByPosition(
                original,
                negate(afterCritical.displacedBy.point),
              )
            : original;
        },
        getClosestDraggable = function (_ref) {
          var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
            viewport = _ref.viewport,
            destination = _ref.destination,
            insideDestination = _ref.insideDestination,
            afterCritical = _ref.afterCritical;
          return (
            insideDestination
              .filter(function (draggable) {
                return isTotallyVisible({
                  target: getCurrentPageBorderBox(draggable, afterCritical),
                  destination: destination,
                  viewport: viewport.frame,
                  withDroppableDisplacement: !0,
                });
              })
              .sort(function (a, b) {
                var distanceToA = distance(
                    pageBorderBoxCenter,
                    withDroppableDisplacement(
                      destination,
                      getCurrentPageBorderBoxCenter(a, afterCritical),
                    ),
                  ),
                  distanceToB = distance(
                    pageBorderBoxCenter,
                    withDroppableDisplacement(
                      destination,
                      getCurrentPageBorderBoxCenter(b, afterCritical),
                    ),
                  );
                return distanceToA < distanceToB
                  ? -1
                  : distanceToB < distanceToA
                    ? 1
                    : a.descriptor.index - b.descriptor.index;
              })[0] || null
          );
        },
        getDisplacedBy = memoize_one_esm(
          function getDisplacedBy(axis, displaceBy) {
            var displacement = displaceBy[axis.line];
            return {
              value: displacement,
              point: patch(axis.line, displacement),
            };
          },
        ),
        getRequiredGrowthForPlaceholder =
          function getRequiredGrowthForPlaceholder(
            droppable,
            placeholderSize,
            draggables,
          ) {
            var axis = droppable.axis;
            if ('virtual' === droppable.descriptor.mode)
              return patch(axis.line, placeholderSize[axis.line]);
            var availableSpace = droppable.subject.page.contentBox[axis.size],
              needsToGrowBy =
                getDraggablesInsideDroppable(
                  droppable.descriptor.id,
                  draggables,
                ).reduce(function (sum, dimension) {
                  return sum + dimension.client.marginBox[axis.size];
                }, 0) +
                placeholderSize[axis.line] -
                availableSpace;
            return needsToGrowBy <= 0 ? null : patch(axis.line, needsToGrowBy);
          },
        withMaxScroll = function withMaxScroll(frame, max) {
          return (0, esm_extends.A)({}, frame, {
            scroll: (0, esm_extends.A)({}, frame.scroll, { max: max }),
          });
        },
        addPlaceholder = function addPlaceholder(
          droppable,
          draggable,
          draggables,
        ) {
          var frame = droppable.frame;
          isHomeOf(draggable, droppable) && invariant(!1),
            droppable.subject.withPlaceholder && invariant(!1);
          var placeholderSize = getDisplacedBy(
              droppable.axis,
              draggable.displaceBy,
            ).point,
            requiredGrowth = getRequiredGrowthForPlaceholder(
              droppable,
              placeholderSize,
              draggables,
            ),
            added = {
              placeholderSize: placeholderSize,
              increasedBy: requiredGrowth,
              oldFrameMaxScroll: droppable.frame
                ? droppable.frame.scroll.max
                : null,
            };
          if (!frame) {
            var _subject = getSubject({
              page: droppable.subject.page,
              withPlaceholder: added,
              axis: droppable.axis,
              frame: droppable.frame,
            });
            return (0, esm_extends.A)({}, droppable, { subject: _subject });
          }
          var maxScroll = requiredGrowth
              ? add(frame.scroll.max, requiredGrowth)
              : frame.scroll.max,
            newFrame = withMaxScroll(frame, maxScroll),
            subject = getSubject({
              page: droppable.subject.page,
              withPlaceholder: added,
              axis: droppable.axis,
              frame: newFrame,
            });
          return (0, esm_extends.A)({}, droppable, {
            subject: subject,
            frame: newFrame,
          });
        },
        removePlaceholder = function removePlaceholder(droppable) {
          var added = droppable.subject.withPlaceholder;
          added || invariant(!1);
          var frame = droppable.frame;
          if (!frame) {
            var _subject2 = getSubject({
              page: droppable.subject.page,
              axis: droppable.axis,
              frame: null,
              withPlaceholder: null,
            });
            return (0, esm_extends.A)({}, droppable, { subject: _subject2 });
          }
          var oldMaxScroll = added.oldFrameMaxScroll;
          oldMaxScroll || invariant(!1);
          var newFrame = withMaxScroll(frame, oldMaxScroll),
            subject = getSubject({
              page: droppable.subject.page,
              axis: droppable.axis,
              frame: newFrame,
              withPlaceholder: null,
            });
          return (0, esm_extends.A)({}, droppable, {
            subject: subject,
            frame: newFrame,
          });
        },
        moveToNewDroppable = function (_ref) {
          var relativeTo,
            previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
            moveRelativeTo = _ref.moveRelativeTo,
            insideDestination = _ref.insideDestination,
            draggable = _ref.draggable,
            draggables = _ref.draggables,
            destination = _ref.destination,
            viewport = _ref.viewport,
            afterCritical = _ref.afterCritical;
          if (!moveRelativeTo) {
            if (insideDestination.length) return null;
            var proposed = {
                displaced: emptyGroups,
                displacedBy: noDisplacedBy,
                at: {
                  type: 'REORDER',
                  destination: {
                    droppableId: destination.descriptor.id,
                    index: 0,
                  },
                },
              },
              proposedPageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
                impact: proposed,
                draggable: draggable,
                droppable: destination,
                draggables: draggables,
                afterCritical: afterCritical,
              }),
              withPlaceholder = isHomeOf(draggable, destination)
                ? destination
                : addPlaceholder(destination, draggable, draggables);
            return isTotallyVisibleInNewLocation({
              draggable: draggable,
              destination: withPlaceholder,
              newPageBorderBoxCenter: proposedPageBorderBoxCenter,
              viewport: viewport.frame,
              withDroppableDisplacement: !1,
              onlyOnMainAxis: !0,
            })
              ? proposed
              : null;
          }
          var isGoingBeforeTarget =
              previousPageBorderBoxCenter[destination.axis.line] <=
              moveRelativeTo.page.borderBox.center[destination.axis.line],
            proposedIndex =
              ((relativeTo = moveRelativeTo.descriptor.index),
              moveRelativeTo.descriptor.id === draggable.descriptor.id ||
              isGoingBeforeTarget
                ? relativeTo
                : relativeTo + 1),
            displacedBy = getDisplacedBy(
              destination.axis,
              draggable.displaceBy,
            );
          return calculateReorderImpact({
            draggable: draggable,
            insideDestination: insideDestination,
            destination: destination,
            viewport: viewport,
            displacedBy: displacedBy,
            last: emptyGroups,
            index: proposedIndex,
          });
        },
        moveCrossAxis = function (_ref) {
          var isMovingForward = _ref.isMovingForward,
            previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
            draggable = _ref.draggable,
            isOver = _ref.isOver,
            draggables = _ref.draggables,
            droppables = _ref.droppables,
            viewport = _ref.viewport,
            afterCritical = _ref.afterCritical,
            destination = getBestCrossAxisDroppable({
              isMovingForward: isMovingForward,
              pageBorderBoxCenter: previousPageBorderBoxCenter,
              source: isOver,
              droppables: droppables,
              viewport: viewport,
            });
          if (!destination) return null;
          var insideDestination = getDraggablesInsideDroppable(
              destination.descriptor.id,
              draggables,
            ),
            moveRelativeTo = getClosestDraggable({
              pageBorderBoxCenter: previousPageBorderBoxCenter,
              viewport: viewport,
              destination: destination,
              insideDestination: insideDestination,
              afterCritical: afterCritical,
            }),
            impact = moveToNewDroppable({
              previousPageBorderBoxCenter: previousPageBorderBoxCenter,
              destination: destination,
              draggable: draggable,
              draggables: draggables,
              moveRelativeTo: moveRelativeTo,
              insideDestination: insideDestination,
              viewport: viewport,
              afterCritical: afterCritical,
            });
          return impact
            ? {
                clientSelection: getClientFromPageBorderBoxCenter({
                  pageBorderBoxCenter: getPageBorderBoxCenterFromImpact({
                    impact: impact,
                    draggable: draggable,
                    droppable: destination,
                    draggables: draggables,
                    afterCritical: afterCritical,
                  }),
                  draggable: draggable,
                  viewport: viewport,
                }),
                impact: impact,
                scrollJumpRequest: null,
              }
            : null;
        },
        whatIsDraggedOver = function (impact) {
          var at = impact.at;
          return at
            ? 'REORDER' === at.type
              ? at.destination.droppableId
              : at.combine.droppableId
            : null;
        },
        getDroppableOver = function getDroppableOver(impact, droppables) {
          var id = whatIsDraggedOver(impact);
          return id ? droppables[id] : null;
        },
        moveInDirection = function (_ref) {
          var state = _ref.state,
            type = _ref.type,
            isActuallyOver = getDroppableOver(
              state.impact,
              state.dimensions.droppables,
            ),
            isMainAxisMovementAllowed = !!isActuallyOver,
            home = state.dimensions.droppables[state.critical.droppable.id],
            isOver = isActuallyOver || home,
            direction = isOver.axis.direction,
            isMovingOnMainAxis =
              ('vertical' === direction &&
                ('MOVE_UP' === type || 'MOVE_DOWN' === type)) ||
              ('horizontal' === direction &&
                ('MOVE_LEFT' === type || 'MOVE_RIGHT' === type));
          if (isMovingOnMainAxis && !isMainAxisMovementAllowed) return null;
          var isMovingForward = 'MOVE_DOWN' === type || 'MOVE_RIGHT' === type,
            draggable =
              state.dimensions.draggables[state.critical.draggable.id],
            previousPageBorderBoxCenter = state.current.page.borderBoxCenter,
            _state$dimensions = state.dimensions,
            draggables = _state$dimensions.draggables,
            droppables = _state$dimensions.droppables;
          return isMovingOnMainAxis
            ? moveToNextPlace({
                isMovingForward: isMovingForward,
                previousPageBorderBoxCenter: previousPageBorderBoxCenter,
                draggable: draggable,
                destination: isOver,
                draggables: draggables,
                viewport: state.viewport,
                previousClientSelection: state.current.client.selection,
                previousImpact: state.impact,
                afterCritical: state.afterCritical,
              })
            : moveCrossAxis({
                isMovingForward: isMovingForward,
                previousPageBorderBoxCenter: previousPageBorderBoxCenter,
                draggable: draggable,
                isOver: isOver,
                draggables: draggables,
                droppables: droppables,
                viewport: state.viewport,
                afterCritical: state.afterCritical,
              });
        };
      function isMovementAllowed(state) {
        return 'DRAGGING' === state.phase || 'COLLECTING' === state.phase;
      }
      function isPositionInFrame(frame) {
        var isWithinVertical = isWithin(frame.top, frame.bottom),
          isWithinHorizontal = isWithin(frame.left, frame.right);
        return function run(point) {
          return isWithinVertical(point.y) && isWithinHorizontal(point.x);
        };
      }
      function getHasOverlap(first, second) {
        return (
          first.left < second.right &&
          first.right > second.left &&
          first.top < second.bottom &&
          first.bottom > second.top
        );
      }
      function getFurthestAway(_ref) {
        var pageBorderBox = _ref.pageBorderBox,
          draggable = _ref.draggable,
          candidates = _ref.candidates,
          startCenter = draggable.page.borderBox.center,
          sorted = candidates
            .map(function (candidate) {
              var axis = candidate.axis,
                target = patch(
                  candidate.axis.line,
                  pageBorderBox.center[axis.line],
                  candidate.page.borderBox.center[axis.crossAxisLine],
                );
              return {
                id: candidate.descriptor.id,
                distance: distance(startCenter, target),
              };
            })
            .sort(function (a, b) {
              return b.distance - a.distance;
            });
        return sorted[0] ? sorted[0].id : null;
      }
      function getDroppableOver$1(_ref2) {
        var pageBorderBox = _ref2.pageBorderBox,
          draggable = _ref2.draggable,
          candidates = toDroppableList(_ref2.droppables).filter(
            function (item) {
              if (!item.isEnabled) return !1;
              var active = item.subject.active;
              if (!active || !getHasOverlap(pageBorderBox, active)) return !1;
              if (isPositionInFrame(active)(pageBorderBox.center)) return !0;
              var axis = item.axis,
                childCenter = active.center[axis.crossAxisLine],
                crossAxisStart = pageBorderBox[axis.crossAxisStart],
                crossAxisEnd = pageBorderBox[axis.crossAxisEnd],
                isContained = isWithin(
                  active[axis.crossAxisStart],
                  active[axis.crossAxisEnd],
                ),
                isStartContained = isContained(crossAxisStart),
                isEndContained = isContained(crossAxisEnd);
              return (
                (!isStartContained && !isEndContained) ||
                (isStartContained
                  ? crossAxisStart < childCenter
                  : crossAxisEnd > childCenter)
              );
            },
          );
        return candidates.length
          ? 1 === candidates.length
            ? candidates[0].descriptor.id
            : getFurthestAway({
                pageBorderBox: pageBorderBox,
                draggable: draggable,
                candidates: candidates,
              })
          : null;
      }
      var offsetRectByPosition = function offsetRectByPosition(rect, point) {
          return getRect(offsetByPosition(rect, point));
        },
        withDroppableScroll = function (droppable, area) {
          var frame = droppable.frame;
          return frame
            ? offsetRectByPosition(area, frame.scroll.diff.value)
            : area;
        };
      function getIsDisplaced(_ref) {
        var displaced = _ref.displaced,
          id = _ref.id;
        return !!(displaced.visible[id] || displaced.invisible[id]);
      }
      function atIndex(_ref) {
        var draggable = _ref.draggable,
          closest = _ref.closest,
          inHomeList = _ref.inHomeList;
        return closest
          ? inHomeList && closest.descriptor.index > draggable.descriptor.index
            ? closest.descriptor.index - 1
            : closest.descriptor.index
          : null;
      }
      var getReorderImpact = function (_ref2) {
          var targetRect = _ref2.pageBorderBoxWithDroppableScroll,
            draggable = _ref2.draggable,
            destination = _ref2.destination,
            insideDestination = _ref2.insideDestination,
            last = _ref2.last,
            viewport = _ref2.viewport,
            afterCritical = _ref2.afterCritical,
            axis = destination.axis,
            displacedBy = getDisplacedBy(
              destination.axis,
              draggable.displaceBy,
            ),
            displacement = displacedBy.value,
            targetStart = targetRect[axis.start],
            targetEnd = targetRect[axis.end],
            closest = find(
              removeDraggableFromList(draggable, insideDestination),
              function (child) {
                var id = child.descriptor.id,
                  childCenter = child.page.borderBox.center[axis.line],
                  didStartAfterCritical$1 = didStartAfterCritical(
                    id,
                    afterCritical,
                  ),
                  isDisplaced = getIsDisplaced({ displaced: last, id: id });
                return didStartAfterCritical$1
                  ? isDisplaced
                    ? targetEnd <= childCenter
                    : targetStart < childCenter - displacement
                  : isDisplaced
                    ? targetEnd <= childCenter + displacement
                    : targetStart < childCenter;
              },
            ),
            newIndex = atIndex({
              draggable: draggable,
              closest: closest,
              inHomeList: isHomeOf(draggable, destination),
            });
          return calculateReorderImpact({
            draggable: draggable,
            insideDestination: insideDestination,
            destination: destination,
            viewport: viewport,
            last: last,
            displacedBy: displacedBy,
            index: newIndex,
          });
        },
        getCombineImpact = function (_ref) {
          var draggable = _ref.draggable,
            targetRect = _ref.pageBorderBoxWithDroppableScroll,
            previousImpact = _ref.previousImpact,
            destination = _ref.destination,
            insideDestination = _ref.insideDestination,
            afterCritical = _ref.afterCritical;
          if (!destination.isCombineEnabled) return null;
          var axis = destination.axis,
            displacedBy = getDisplacedBy(
              destination.axis,
              draggable.displaceBy,
            ),
            displacement = displacedBy.value,
            targetStart = targetRect[axis.start],
            targetEnd = targetRect[axis.end],
            combineWith = find(
              removeDraggableFromList(draggable, insideDestination),
              function (child) {
                var id = child.descriptor.id,
                  childRect = child.page.borderBox,
                  threshold = childRect[axis.size] / 4,
                  didStartAfterCritical$1 = didStartAfterCritical(
                    id,
                    afterCritical,
                  ),
                  isDisplaced = getIsDisplaced({
                    displaced: previousImpact.displaced,
                    id: id,
                  });
                return didStartAfterCritical$1
                  ? isDisplaced
                    ? targetEnd > childRect[axis.start] + threshold &&
                      targetEnd < childRect[axis.end] - threshold
                    : targetStart >
                        childRect[axis.start] - displacement + threshold &&
                      targetStart <
                        childRect[axis.end] - displacement - threshold
                  : isDisplaced
                    ? targetEnd >
                        childRect[axis.start] + displacement + threshold &&
                      targetEnd < childRect[axis.end] + displacement - threshold
                    : targetStart > childRect[axis.start] + threshold &&
                      targetStart < childRect[axis.end] - threshold;
              },
            );
          return combineWith
            ? {
                displacedBy: displacedBy,
                displaced: previousImpact.displaced,
                at: {
                  type: 'COMBINE',
                  combine: {
                    draggableId: combineWith.descriptor.id,
                    droppableId: destination.descriptor.id,
                  },
                },
              }
            : null;
        },
        getDragImpact = function (_ref) {
          var pageOffset = _ref.pageOffset,
            draggable = _ref.draggable,
            draggables = _ref.draggables,
            droppables = _ref.droppables,
            previousImpact = _ref.previousImpact,
            viewport = _ref.viewport,
            afterCritical = _ref.afterCritical,
            pageBorderBox = offsetRectByPosition(
              draggable.page.borderBox,
              pageOffset,
            ),
            destinationId = getDroppableOver$1({
              pageBorderBox: pageBorderBox,
              draggable: draggable,
              droppables: droppables,
            });
          if (!destinationId) return noImpact;
          var destination = droppables[destinationId],
            insideDestination = getDraggablesInsideDroppable(
              destination.descriptor.id,
              draggables,
            ),
            pageBorderBoxWithDroppableScroll = withDroppableScroll(
              destination,
              pageBorderBox,
            );
          return (
            getCombineImpact({
              pageBorderBoxWithDroppableScroll:
                pageBorderBoxWithDroppableScroll,
              draggable: draggable,
              previousImpact: previousImpact,
              destination: destination,
              insideDestination: insideDestination,
              afterCritical: afterCritical,
            }) ||
            getReorderImpact({
              pageBorderBoxWithDroppableScroll:
                pageBorderBoxWithDroppableScroll,
              draggable: draggable,
              destination: destination,
              insideDestination: insideDestination,
              last: previousImpact.displaced,
              viewport: viewport,
              afterCritical: afterCritical,
            })
          );
        },
        patchDroppableMap = function (droppables, updated) {
          var _extends2;
          return (0, esm_extends.A)(
            {},
            droppables,
            (((_extends2 = {})[updated.descriptor.id] = updated), _extends2),
          );
        },
        clearUnusedPlaceholder = function clearUnusedPlaceholder(_ref) {
          var previousImpact = _ref.previousImpact,
            impact = _ref.impact,
            droppables = _ref.droppables,
            last = whatIsDraggedOver(previousImpact),
            now = whatIsDraggedOver(impact);
          if (!last || last === now) return droppables;
          var lastDroppable = droppables[last];
          return lastDroppable.subject.withPlaceholder
            ? patchDroppableMap(droppables, removePlaceholder(lastDroppable))
            : droppables;
        },
        recomputePlaceholders = function (_ref2) {
          var draggable = _ref2.draggable,
            draggables = _ref2.draggables,
            droppables = _ref2.droppables,
            previousImpact = _ref2.previousImpact,
            impact = _ref2.impact,
            cleaned = clearUnusedPlaceholder({
              previousImpact: previousImpact,
              impact: impact,
              droppables: droppables,
            }),
            isOver = whatIsDraggedOver(impact);
          if (!isOver) return cleaned;
          var droppable = droppables[isOver];
          return isHomeOf(draggable, droppable) ||
            droppable.subject.withPlaceholder
            ? cleaned
            : patchDroppableMap(
                cleaned,
                addPlaceholder(droppable, draggable, draggables),
              );
        },
        update = function (_ref) {
          var state = _ref.state,
            forcedClientSelection = _ref.clientSelection,
            forcedDimensions = _ref.dimensions,
            forcedViewport = _ref.viewport,
            forcedImpact = _ref.impact,
            scrollJumpRequest = _ref.scrollJumpRequest,
            viewport = forcedViewport || state.viewport,
            dimensions = forcedDimensions || state.dimensions,
            clientSelection =
              forcedClientSelection || state.current.client.selection,
            offset = subtract(clientSelection, state.initial.client.selection),
            client = {
              offset: offset,
              selection: clientSelection,
              borderBoxCenter: add(
                state.initial.client.borderBoxCenter,
                offset,
              ),
            },
            page = {
              selection: add(client.selection, viewport.scroll.current),
              borderBoxCenter: add(
                client.borderBoxCenter,
                viewport.scroll.current,
              ),
              offset: add(client.offset, viewport.scroll.diff.value),
            },
            current = { client: client, page: page };
          if ('COLLECTING' === state.phase)
            return (0, esm_extends.A)({ phase: 'COLLECTING' }, state, {
              dimensions: dimensions,
              viewport: viewport,
              current: current,
            });
          var draggable = dimensions.draggables[state.critical.draggable.id],
            newImpact =
              forcedImpact ||
              getDragImpact({
                pageOffset: page.offset,
                draggable: draggable,
                draggables: dimensions.draggables,
                droppables: dimensions.droppables,
                previousImpact: state.impact,
                viewport: viewport,
                afterCritical: state.afterCritical,
              }),
            withUpdatedPlaceholders = recomputePlaceholders({
              draggable: draggable,
              impact: newImpact,
              previousImpact: state.impact,
              draggables: dimensions.draggables,
              droppables: dimensions.droppables,
            });
          return (0, esm_extends.A)({}, state, {
            current: current,
            dimensions: {
              draggables: dimensions.draggables,
              droppables: withUpdatedPlaceholders,
            },
            impact: newImpact,
            viewport: viewport,
            scrollJumpRequest: scrollJumpRequest || null,
            forceShouldAnimate: !scrollJumpRequest && null,
          });
        };
      function getDraggables$1(ids, draggables) {
        return ids.map(function (id) {
          return draggables[id];
        });
      }
      var recompute = function (_ref) {
          var impact = _ref.impact,
            viewport = _ref.viewport,
            draggables = _ref.draggables,
            destination = _ref.destination,
            forceShouldAnimate = _ref.forceShouldAnimate,
            last = impact.displaced,
            displaced = getDisplacementGroups({
              afterDragging: getDraggables$1(last.all, draggables),
              destination: destination,
              displacedBy: impact.displacedBy,
              viewport: viewport.frame,
              forceShouldAnimate: forceShouldAnimate,
              last: last,
            });
          return (0, esm_extends.A)({}, impact, { displaced: displaced });
        },
        getClientBorderBoxCenter = function (_ref) {
          var impact = _ref.impact,
            draggable = _ref.draggable,
            droppable = _ref.droppable,
            draggables = _ref.draggables,
            viewport = _ref.viewport;
          return getClientFromPageBorderBoxCenter({
            pageBorderBoxCenter: getPageBorderBoxCenterFromImpact({
              impact: impact,
              draggable: draggable,
              draggables: draggables,
              droppable: droppable,
              afterCritical: _ref.afterCritical,
            }),
            draggable: draggable,
            viewport: viewport,
          });
        },
        refreshSnap = function (_ref) {
          var state = _ref.state,
            forcedDimensions = _ref.dimensions,
            forcedViewport = _ref.viewport;
          'SNAP' !== state.movementMode && invariant(!1);
          var needsVisibilityCheck = state.impact,
            viewport = forcedViewport || state.viewport,
            dimensions = forcedDimensions || state.dimensions,
            draggables = dimensions.draggables,
            droppables = dimensions.droppables,
            draggable = draggables[state.critical.draggable.id],
            isOver = whatIsDraggedOver(needsVisibilityCheck);
          isOver || invariant(!1);
          var destination = droppables[isOver],
            impact = recompute({
              impact: needsVisibilityCheck,
              viewport: viewport,
              destination: destination,
              draggables: draggables,
            }),
            clientSelection = getClientBorderBoxCenter({
              impact: impact,
              draggable: draggable,
              droppable: destination,
              draggables: draggables,
              viewport: viewport,
              afterCritical: state.afterCritical,
            });
          return update({
            impact: impact,
            clientSelection: clientSelection,
            state: state,
            dimensions: dimensions,
            viewport: viewport,
          });
        },
        getLiftEffect = function (_ref) {
          var descriptor,
            draggable = _ref.draggable,
            home = _ref.home,
            draggables = _ref.draggables,
            viewport = _ref.viewport,
            displacedBy = getDisplacedBy(home.axis, draggable.displaceBy),
            insideHome = getDraggablesInsideDroppable(
              home.descriptor.id,
              draggables,
            ),
            rawIndex = insideHome.indexOf(draggable);
          -1 !== rawIndex || invariant(!1);
          var afterDragging = insideHome.slice(rawIndex + 1),
            effected = afterDragging.reduce(function (previous, item) {
              return (previous[item.descriptor.id] = !0), previous;
            }, {}),
            afterCritical = {
              inVirtualList: 'virtual' === home.descriptor.mode,
              displacedBy: displacedBy,
              effected: effected,
            };
          return {
            impact: {
              displaced: getDisplacementGroups({
                afterDragging: afterDragging,
                destination: home,
                displacedBy: displacedBy,
                last: null,
                viewport: viewport.frame,
                forceShouldAnimate: !1,
              }),
              displacedBy: displacedBy,
              at: {
                type: 'REORDER',
                destination: {
                  index: (descriptor = draggable.descriptor).index,
                  droppableId: descriptor.droppableId,
                },
              },
            },
            afterCritical: afterCritical,
          };
        },
        start = function start(key) {},
        finish = function finish(key) {},
        offsetDraggable = function (_ref) {
          var draggable = _ref.draggable,
            offset$1 = _ref.offset,
            initialWindowScroll = _ref.initialWindowScroll,
            client = offset(draggable.client, offset$1),
            page = withScroll(client, initialWindowScroll);
          return (0, esm_extends.A)({}, draggable, {
            placeholder: (0, esm_extends.A)({}, draggable.placeholder, {
              client: client,
            }),
            client: client,
            page: page,
          });
        },
        getFrame = function (droppable) {
          var frame = droppable.frame;
          return frame || invariant(!1), frame;
        },
        adjustAdditionsForScrollChanges = function (_ref) {
          var additions = _ref.additions,
            updatedDroppables = _ref.updatedDroppables,
            viewport = _ref.viewport,
            windowScrollChange = viewport.scroll.diff.value;
          return additions.map(function (draggable) {
            var totalChange = add(
              windowScrollChange,
              getFrame(updatedDroppables[draggable.descriptor.droppableId])
                .scroll.diff.value,
            );
            return offsetDraggable({
              draggable: draggable,
              offset: totalChange,
              initialWindowScroll: viewport.scroll.initial,
            });
          });
        },
        publishWhileDraggingInVirtual = function (_ref) {
          var state = _ref.state,
            published = _ref.published;
          start();
          var withScrollChange = published.modified.map(function (update) {
              return scrollDroppable(
                state.dimensions.droppables[update.droppableId],
                update.scroll,
              );
            }),
            droppables = (0, esm_extends.A)(
              {},
              state.dimensions.droppables,
              {},
              toDroppableMap(withScrollChange),
            ),
            updatedAdditions = toDraggableMap(
              adjustAdditionsForScrollChanges({
                additions: published.additions,
                updatedDroppables: droppables,
                viewport: state.viewport,
              }),
            ),
            draggables = (0, esm_extends.A)(
              {},
              state.dimensions.draggables,
              {},
              updatedAdditions,
            );
          published.removals.forEach(function (id) {
            delete draggables[id];
          });
          var dimensions = { droppables: droppables, draggables: draggables },
            wasOverId = whatIsDraggedOver(state.impact),
            wasOver = wasOverId ? dimensions.droppables[wasOverId] : null,
            _getLiftEffect = getLiftEffect({
              draggable: dimensions.draggables[state.critical.draggable.id],
              home: dimensions.droppables[state.critical.droppable.id],
              draggables: draggables,
              viewport: state.viewport,
            }),
            onLiftImpact = _getLiftEffect.impact,
            afterCritical = _getLiftEffect.afterCritical,
            previousImpact =
              wasOver && wasOver.isCombineEnabled ? state.impact : onLiftImpact,
            impact = getDragImpact({
              pageOffset: state.current.page.offset,
              draggable: dimensions.draggables[state.critical.draggable.id],
              draggables: dimensions.draggables,
              droppables: dimensions.droppables,
              previousImpact: previousImpact,
              viewport: state.viewport,
              afterCritical: afterCritical,
            });
          finish();
          var draggingState = (0, esm_extends.A)({ phase: 'DRAGGING' }, state, {
            phase: 'DRAGGING',
            impact: impact,
            onLiftImpact: onLiftImpact,
            dimensions: dimensions,
            afterCritical: afterCritical,
            forceShouldAnimate: !1,
          });
          return 'COLLECTING' === state.phase
            ? draggingState
            : (0, esm_extends.A)({ phase: 'DROP_PENDING' }, draggingState, {
                phase: 'DROP_PENDING',
                reason: state.reason,
                isWaiting: !1,
              });
        },
        isSnapping = function isSnapping(state) {
          return 'SNAP' === state.movementMode;
        },
        postDroppableChange = function postDroppableChange(
          state,
          updated,
          isEnabledChanging,
        ) {
          var dimensions,
            dimensions1 = {
              draggables: (dimensions = state.dimensions).draggables,
              droppables: patchDroppableMap(dimensions.droppables, updated),
            };
          return !isSnapping(state) || isEnabledChanging
            ? update({ state: state, dimensions: dimensions1 })
            : refreshSnap({ state: state, dimensions: dimensions1 });
        };
      function removeScrollJumpRequest(state) {
        return state.isDragging && 'SNAP' === state.movementMode
          ? (0, esm_extends.A)({ phase: 'DRAGGING' }, state, {
              scrollJumpRequest: null,
            })
          : state;
      }
      var idle = { phase: 'IDLE', completed: null, shouldFlush: !1 },
        reducer = function (state, action) {
          if ((void 0 === state && (state = idle), 'FLUSH' === action.type))
            return (0, esm_extends.A)({}, idle, { shouldFlush: !0 });
          if ('INITIAL_PUBLISH' === action.type) {
            'IDLE' !== state.phase && invariant(!1);
            var _action$payload = action.payload,
              critical = _action$payload.critical,
              clientSelection = _action$payload.clientSelection,
              viewport = _action$payload.viewport,
              dimensions = _action$payload.dimensions,
              movementMode = _action$payload.movementMode,
              draggable = dimensions.draggables[critical.draggable.id],
              home = dimensions.droppables[critical.droppable.id],
              client = {
                selection: clientSelection,
                borderBoxCenter: draggable.client.borderBox.center,
                offset: origin,
              },
              initial = {
                client: client,
                page: {
                  selection: add(client.selection, viewport.scroll.initial),
                  borderBoxCenter: add(
                    client.selection,
                    viewport.scroll.initial,
                  ),
                  offset: add(client.selection, viewport.scroll.diff.value),
                },
              },
              isWindowScrollAllowed = toDroppableList(
                dimensions.droppables,
              ).every(function (item) {
                return !item.isFixedOnPage;
              }),
              _getLiftEffect = getLiftEffect({
                draggable: draggable,
                home: home,
                draggables: dimensions.draggables,
                viewport: viewport,
              }),
              impact = _getLiftEffect.impact;
            return {
              phase: 'DRAGGING',
              isDragging: !0,
              critical: critical,
              movementMode: movementMode,
              dimensions: dimensions,
              initial: initial,
              current: initial,
              isWindowScrollAllowed: isWindowScrollAllowed,
              impact: impact,
              afterCritical: _getLiftEffect.afterCritical,
              onLiftImpact: impact,
              viewport: viewport,
              scrollJumpRequest: null,
              forceShouldAnimate: null,
            };
          }
          if ('COLLECTION_STARTING' === action.type)
            return 'COLLECTING' === state.phase ||
              'DROP_PENDING' === state.phase
              ? state
              : ('DRAGGING' !== state.phase && invariant(!1),
                (0, esm_extends.A)({ phase: 'COLLECTING' }, state, {
                  phase: 'COLLECTING',
                }));
          if ('PUBLISH_WHILE_DRAGGING' === action.type)
            return (
              'COLLECTING' === state.phase ||
                'DROP_PENDING' === state.phase ||
                invariant(!1),
              publishWhileDraggingInVirtual({
                state: state,
                published: action.payload,
              })
            );
          if ('MOVE' === action.type) {
            if ('DROP_PENDING' === state.phase) return state;
            isMovementAllowed(state) || invariant(!1);
            var _clientSelection = action.payload.client;
            return react_beautiful_dnd_esm_isEqual(
              _clientSelection,
              state.current.client.selection,
            )
              ? state
              : update({
                  state: state,
                  clientSelection: _clientSelection,
                  impact: isSnapping(state) ? state.impact : null,
                });
          }
          if ('UPDATE_DROPPABLE_SCROLL' === action.type) {
            if ('DROP_PENDING' === state.phase || 'COLLECTING' === state.phase)
              return removeScrollJumpRequest(state);
            isMovementAllowed(state) || invariant(!1);
            var _action$payload2 = action.payload,
              id = _action$payload2.id,
              newScroll = _action$payload2.newScroll,
              target = state.dimensions.droppables[id];
            return target
              ? postDroppableChange(
                  state,
                  scrollDroppable(target, newScroll),
                  !1,
                )
              : state;
          }
          if ('UPDATE_DROPPABLE_IS_ENABLED' === action.type) {
            if ('DROP_PENDING' === state.phase) return state;
            isMovementAllowed(state) || invariant(!1);
            var _action$payload3 = action.payload,
              _id = _action$payload3.id,
              isEnabled = _action$payload3.isEnabled,
              _target = state.dimensions.droppables[_id];
            return (
              _target || invariant(!1),
              _target.isEnabled !== isEnabled || invariant(!1),
              postDroppableChange(
                state,
                (0, esm_extends.A)({}, _target, { isEnabled: isEnabled }),
                !0,
              )
            );
          }
          if ('UPDATE_DROPPABLE_IS_COMBINE_ENABLED' === action.type) {
            if ('DROP_PENDING' === state.phase) return state;
            isMovementAllowed(state) || invariant(!1);
            var _action$payload4 = action.payload,
              _id2 = _action$payload4.id,
              isCombineEnabled = _action$payload4.isCombineEnabled,
              _target2 = state.dimensions.droppables[_id2];
            return (
              _target2 || invariant(!1),
              _target2.isCombineEnabled !== isCombineEnabled || invariant(!1),
              postDroppableChange(
                state,
                (0, esm_extends.A)({}, _target2, {
                  isCombineEnabled: isCombineEnabled,
                }),
                !0,
              )
            );
          }
          if ('MOVE_BY_WINDOW_SCROLL' === action.type) {
            if (
              'DROP_PENDING' === state.phase ||
              'DROP_ANIMATING' === state.phase
            )
              return state;
            isMovementAllowed(state) || invariant(!1),
              state.isWindowScrollAllowed || invariant(!1);
            var _newScroll = action.payload.newScroll;
            if (
              react_beautiful_dnd_esm_isEqual(
                state.viewport.scroll.current,
                _newScroll,
              )
            )
              return removeScrollJumpRequest(state);
            var _viewport = scrollViewport(state.viewport, _newScroll);
            return isSnapping(state)
              ? refreshSnap({ state: state, viewport: _viewport })
              : update({ state: state, viewport: _viewport });
          }
          if ('UPDATE_VIEWPORT_MAX_SCROLL' === action.type) {
            if (!isMovementAllowed(state)) return state;
            var maxScroll = action.payload.maxScroll;
            if (
              react_beautiful_dnd_esm_isEqual(
                maxScroll,
                state.viewport.scroll.max,
              )
            )
              return state;
            var withMaxScroll = (0, esm_extends.A)({}, state.viewport, {
              scroll: (0, esm_extends.A)({}, state.viewport.scroll, {
                max: maxScroll,
              }),
            });
            return (0, esm_extends.A)({ phase: 'DRAGGING' }, state, {
              viewport: withMaxScroll,
            });
          }
          if (
            'MOVE_UP' === action.type ||
            'MOVE_DOWN' === action.type ||
            'MOVE_LEFT' === action.type ||
            'MOVE_RIGHT' === action.type
          ) {
            if ('COLLECTING' === state.phase || 'DROP_PENDING' === state.phase)
              return state;
            'DRAGGING' !== state.phase && invariant(!1);
            var _result2 = moveInDirection({ state: state, type: action.type });
            return _result2
              ? update({
                  state: state,
                  impact: _result2.impact,
                  clientSelection: _result2.clientSelection,
                  scrollJumpRequest: _result2.scrollJumpRequest,
                })
              : state;
          }
          if ('DROP_PENDING' === action.type) {
            var reason = action.payload.reason;
            return (
              'COLLECTING' !== state.phase && invariant(!1),
              (0, esm_extends.A)({ phase: 'DROP_PENDING' }, state, {
                phase: 'DROP_PENDING',
                isWaiting: !0,
                reason: reason,
              })
            );
          }
          if ('DROP_ANIMATE' === action.type) {
            var _action$payload5 = action.payload,
              completed = _action$payload5.completed,
              dropDuration = _action$payload5.dropDuration,
              newHomeClientOffset = _action$payload5.newHomeClientOffset;
            return (
              'DRAGGING' === state.phase ||
                'DROP_PENDING' === state.phase ||
                invariant(!1),
              {
                phase: 'DROP_ANIMATING',
                completed: completed,
                dropDuration: dropDuration,
                newHomeClientOffset: newHomeClientOffset,
                dimensions: state.dimensions,
              }
            );
          }
          return 'DROP_COMPLETE' === action.type
            ? {
                phase: 'IDLE',
                completed: action.payload.completed,
                shouldFlush: !1,
              }
            : state;
        },
        publishWhileDragging = function publishWhileDragging(args) {
          return { type: 'PUBLISH_WHILE_DRAGGING', payload: args };
        },
        collectionStarting = function collectionStarting() {
          return { type: 'COLLECTION_STARTING', payload: null };
        },
        updateDroppableScroll = function updateDroppableScroll(args) {
          return { type: 'UPDATE_DROPPABLE_SCROLL', payload: args };
        },
        updateDroppableIsEnabled = function updateDroppableIsEnabled(args) {
          return { type: 'UPDATE_DROPPABLE_IS_ENABLED', payload: args };
        },
        updateDroppableIsCombineEnabled =
          function updateDroppableIsCombineEnabled(args) {
            return {
              type: 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED',
              payload: args,
            };
          },
        move = function move(args) {
          return { type: 'MOVE', payload: args };
        },
        moveUp = function moveUp() {
          return { type: 'MOVE_UP', payload: null };
        },
        moveDown = function moveDown() {
          return { type: 'MOVE_DOWN', payload: null };
        },
        moveRight = function moveRight() {
          return { type: 'MOVE_RIGHT', payload: null };
        },
        moveLeft = function moveLeft() {
          return { type: 'MOVE_LEFT', payload: null };
        },
        flush = function flush() {
          return { type: 'FLUSH', payload: null };
        },
        completeDrop = function completeDrop(args) {
          return { type: 'DROP_COMPLETE', payload: args };
        },
        drop = function drop(args) {
          return { type: 'DROP', payload: args };
        },
        dropAnimationFinished = function dropAnimationFinished() {
          return { type: 'DROP_ANIMATION_FINISHED', payload: null };
        },
        curves = {
          outOfTheWay: 'cubic-bezier(0.2, 0, 0, 1)',
          drop: 'cubic-bezier(.2,1,.1,1)',
        },
        combine = {
          opacity: { drop: 0, combining: 0.7 },
          scale: { drop: 0.75 },
        },
        timings = { outOfTheWay: 0.2, minDropTime: 0.33, maxDropTime: 0.55 },
        outOfTheWayTiming = timings.outOfTheWay + 's ' + curves.outOfTheWay,
        transitions = {
          fluid: 'opacity ' + outOfTheWayTiming,
          snap:
            'transform ' + outOfTheWayTiming + ', opacity ' + outOfTheWayTiming,
          drop: function drop(duration) {
            var timing = duration + 's ' + curves.drop;
            return 'transform ' + timing + ', opacity ' + timing;
          },
          outOfTheWay: 'transform ' + outOfTheWayTiming,
          placeholder:
            'height ' +
            outOfTheWayTiming +
            ', width ' +
            outOfTheWayTiming +
            ', margin ' +
            outOfTheWayTiming,
        },
        moveTo = function moveTo(offset) {
          return react_beautiful_dnd_esm_isEqual(offset, origin)
            ? null
            : 'translate(' + offset.x + 'px, ' + offset.y + 'px)';
        },
        transforms = {
          moveTo: moveTo,
          drop: function drop(offset, isCombining) {
            var translate = moveTo(offset);
            return translate
              ? isCombining
                ? translate + ' scale(' + combine.scale.drop + ')'
                : translate
              : null;
          },
        },
        minDropTime = timings.minDropTime,
        maxDropTime = timings.maxDropTime,
        dropTimeRange = maxDropTime - minDropTime,
        getDropDuration = function (_ref) {
          var current = _ref.current,
            destination = _ref.destination,
            reason = _ref.reason,
            distance$1 = distance(current, destination);
          if (distance$1 <= 0) return minDropTime;
          if (distance$1 >= 1500) return maxDropTime;
          var duration = minDropTime + (distance$1 / 1500) * dropTimeRange;
          return Number(
            ('CANCEL' === reason ? 0.6 * duration : duration).toFixed(2),
          );
        },
        getNewHomeClientOffset = function (_ref) {
          var impact = _ref.impact,
            draggable = _ref.draggable,
            dimensions = _ref.dimensions,
            viewport = _ref.viewport,
            afterCritical = _ref.afterCritical,
            draggables = dimensions.draggables,
            droppables = dimensions.droppables,
            droppableId = whatIsDraggedOver(impact),
            destination = droppableId ? droppables[droppableId] : null,
            home = droppables[draggable.descriptor.droppableId];
          return subtract(
            getClientBorderBoxCenter({
              impact: impact,
              draggable: draggable,
              draggables: draggables,
              afterCritical: afterCritical,
              droppable: destination || home,
              viewport: viewport,
            }),
            draggable.client.borderBox.center,
          );
        },
        getDropImpact = function (_ref) {
          var draggables = _ref.draggables,
            reason = _ref.reason,
            lastImpact = _ref.lastImpact,
            home = _ref.home,
            viewport = _ref.viewport,
            onLiftImpact = _ref.onLiftImpact;
          return lastImpact.at && 'DROP' === reason
            ? 'REORDER' === lastImpact.at.type
              ? { impact: lastImpact, didDropInsideDroppable: !0 }
              : {
                  impact: (0, esm_extends.A)({}, lastImpact, {
                    displaced: emptyGroups,
                  }),
                  didDropInsideDroppable: !0,
                }
            : {
                impact: recompute({
                  draggables: draggables,
                  impact: onLiftImpact,
                  destination: home,
                  viewport: viewport,
                  forceShouldAnimate: !0,
                }),
                didDropInsideDroppable: !1,
              };
        },
        drop$1 = function (_ref) {
          var getState = _ref.getState,
            dispatch = _ref.dispatch;
          return function (next) {
            return function (action) {
              if ('DROP' !== action.type) {
                next(action);
                return;
              }
              var state = getState(),
                reason = action.payload.reason;
              if ('COLLECTING' === state.phase) {
                dispatch({ type: 'DROP_PENDING', payload: { reason: reason } });
                return;
              }
              if ('IDLE' !== state.phase) {
                'DROP_PENDING' === state.phase &&
                  state.isWaiting &&
                  invariant(!1),
                  'DRAGGING' === state.phase ||
                    'DROP_PENDING' === state.phase ||
                    invariant(!1);
                var critical = state.critical,
                  dimensions = state.dimensions,
                  draggable =
                    dimensions.draggables[state.critical.draggable.id],
                  _getDropImpact = getDropImpact({
                    reason: reason,
                    lastImpact: state.impact,
                    afterCritical: state.afterCritical,
                    onLiftImpact: state.onLiftImpact,
                    home: state.dimensions.droppables[
                      state.critical.droppable.id
                    ],
                    viewport: state.viewport,
                    draggables: state.dimensions.draggables,
                  }),
                  impact = _getDropImpact.impact,
                  didDropInsideDroppable =
                    _getDropImpact.didDropInsideDroppable,
                  destination = didDropInsideDroppable
                    ? tryGetDestination(impact)
                    : null,
                  combine = didDropInsideDroppable
                    ? tryGetCombine(impact)
                    : null,
                  source = {
                    index: critical.draggable.index,
                    droppableId: critical.droppable.id,
                  },
                  result = {
                    draggableId: draggable.descriptor.id,
                    type: draggable.descriptor.type,
                    source: source,
                    reason: reason,
                    mode: state.movementMode,
                    destination: destination,
                    combine: combine,
                  },
                  newHomeClientOffset = getNewHomeClientOffset({
                    impact: impact,
                    draggable: draggable,
                    dimensions: dimensions,
                    viewport: state.viewport,
                    afterCritical: state.afterCritical,
                  }),
                  completed = {
                    critical: state.critical,
                    afterCritical: state.afterCritical,
                    result: result,
                    impact: impact,
                  };
                if (
                  !(
                    !react_beautiful_dnd_esm_isEqual(
                      state.current.client.offset,
                      newHomeClientOffset,
                    ) || result.combine
                  )
                ) {
                  dispatch(completeDrop({ completed: completed }));
                  return;
                }
                var dropDuration = getDropDuration({
                  current: state.current.client.offset,
                  destination: newHomeClientOffset,
                  reason: reason,
                });
                dispatch({
                  type: 'DROP_ANIMATE',
                  payload: {
                    newHomeClientOffset: newHomeClientOffset,
                    dropDuration: dropDuration,
                    completed: completed,
                  },
                });
              }
            };
          };
        },
        react_beautiful_dnd_esm_getWindowScroll = function () {
          return { x: window.pageXOffset, y: window.pageYOffset };
        };
      function getWindowScrollBinding(update) {
        return {
          eventName: 'scroll',
          options: { passive: !0, capture: !1 },
          fn: function fn(event) {
            (event.target === window || event.target === window.document) &&
              update();
          },
        };
      }
      function getScrollListener(_ref) {
        var onWindowScroll = _ref.onWindowScroll,
          scheduled = raf_schd_esm(function updateScroll() {
            onWindowScroll(react_beautiful_dnd_esm_getWindowScroll());
          }),
          binding = getWindowScrollBinding(scheduled),
          unbind = noop;
        function isActive() {
          return unbind !== noop;
        }
        return {
          start: function start() {
            isActive() && invariant(!1),
              (unbind = bindEvents(window, [binding]));
          },
          stop: function stop() {
            isActive() || invariant(!1),
              scheduled.cancel(),
              unbind(),
              (unbind = noop);
          },
          isActive: isActive,
        };
      }
      var scrollListener = function (store) {
          var listener = getScrollListener({
            onWindowScroll: function onWindowScroll(newScroll) {
              store.dispatch({
                type: 'MOVE_BY_WINDOW_SCROLL',
                payload: { newScroll: newScroll },
              });
            },
          });
          return function (next) {
            return function (action) {
              listener.isActive() ||
                'INITIAL_PUBLISH' !== action.type ||
                listener.start(),
                listener.isActive() &&
                  ('DROP_COMPLETE' === action.type ||
                    'DROP_ANIMATE' === action.type ||
                    'FLUSH' === action.type) &&
                  listener.stop(),
                next(action);
            };
          };
        },
        getExpiringAnnounce = function (announce) {
          var wasCalled = !1,
            isExpired = !1,
            timeoutId = setTimeout(function () {
              isExpired = !0;
            }),
            result = function result(message) {
              wasCalled ||
                isExpired ||
                ((wasCalled = !0), announce(message), clearTimeout(timeoutId));
            };
          return (
            (result.wasCalled = function () {
              return wasCalled;
            }),
            result
          );
        },
        getAsyncMarshal = function () {
          var entries = [],
            execute = function execute(timerId) {
              var index = findIndex(entries, function (item) {
                return item.timerId === timerId;
              });
              -1 !== index || invariant(!1),
                entries.splice(index, 1)[0].callback();
            };
          return {
            add: function add(fn) {
              var timerId = setTimeout(function () {
                return execute(timerId);
              });
              entries.push({ timerId: timerId, callback: fn });
            },
            flush: function flush() {
              if (entries.length) {
                var shallow = [].concat(entries);
                (entries.length = 0),
                  shallow.forEach(function (entry) {
                    clearTimeout(entry.timerId), entry.callback();
                  });
              }
            },
          };
        },
        isCriticalEqual = function isCriticalEqual(first, second) {
          if (first === second) return !0;
          var isDraggableEqual =
              first.draggable.id === second.draggable.id &&
              first.draggable.droppableId === second.draggable.droppableId &&
              first.draggable.type === second.draggable.type &&
              first.draggable.index === second.draggable.index,
            isDroppableEqual =
              first.droppable.id === second.droppable.id &&
              first.droppable.type === second.droppable.type;
          return isDraggableEqual && isDroppableEqual;
        },
        withTimings = function withTimings(key, fn) {
          start(), fn(), finish();
        },
        getDragStart = function getDragStart(critical, mode) {
          return {
            draggableId: critical.draggable.id,
            type: critical.droppable.type,
            source: {
              droppableId: critical.droppable.id,
              index: critical.draggable.index,
            },
            mode: mode,
          };
        },
        execute = function execute(
          responder,
          data,
          announce,
          getDefaultMessage,
        ) {
          if (!responder) {
            announce(getDefaultMessage(data));
            return;
          }
          var willExpire = getExpiringAnnounce(announce);
          responder(data, { announce: willExpire }),
            willExpire.wasCalled() || announce(getDefaultMessage(data));
        },
        getPublisher = function (getResponders, announce) {
          var asyncMarshal = getAsyncMarshal(),
            dragging = null,
            drop = function drop(result) {
              dragging || invariant(!1),
                (dragging = null),
                withTimings('onDragEnd', function () {
                  return execute(
                    getResponders().onDragEnd,
                    result,
                    announce,
                    preset.onDragEnd,
                  );
                });
            };
          return {
            beforeCapture: function beforeCapture(draggableId, mode) {
              dragging && invariant(!1),
                withTimings('onBeforeCapture', function () {
                  var fn = getResponders().onBeforeCapture;
                  fn && fn({ draggableId: draggableId, mode: mode });
                });
            },
            beforeStart: function beforeStart(critical, mode) {
              dragging && invariant(!1),
                withTimings('onBeforeDragStart', function () {
                  var fn = getResponders().onBeforeDragStart;
                  fn && fn(getDragStart(critical, mode));
                });
            },
            start: function start(critical, mode) {
              dragging && invariant(!1);
              var data = getDragStart(critical, mode);
              (dragging = {
                mode: mode,
                lastCritical: critical,
                lastLocation: data.source,
                lastCombine: null,
              }),
                asyncMarshal.add(function () {
                  withTimings('onDragStart', function () {
                    return execute(
                      getResponders().onDragStart,
                      data,
                      announce,
                      preset.onDragStart,
                    );
                  });
                });
            },
            update: function update(critical, impact) {
              var first,
                first1,
                location = tryGetDestination(impact),
                combine = tryGetCombine(impact);
              dragging || invariant(!1);
              var hasCriticalChanged = !isCriticalEqual(
                critical,
                dragging.lastCritical,
              );
              hasCriticalChanged && (dragging.lastCritical = critical);
              var hasLocationChanged =
                (null != (first = dragging.lastLocation) || null != location) &&
                (null == first ||
                  null == location ||
                  first.droppableId !== location.droppableId ||
                  first.index !== location.index);
              hasLocationChanged && (dragging.lastLocation = location);
              var hasGroupingChanged =
                (null != (first1 = dragging.lastCombine) || null != combine) &&
                (null == first1 ||
                  null == combine ||
                  first1.draggableId !== combine.draggableId ||
                  first1.droppableId !== combine.droppableId);
              if (
                (hasGroupingChanged && (dragging.lastCombine = combine),
                hasCriticalChanged || hasLocationChanged || hasGroupingChanged)
              ) {
                var data = (0, esm_extends.A)(
                  {},
                  getDragStart(critical, dragging.mode),
                  { combine: combine, destination: location },
                );
                asyncMarshal.add(function () {
                  withTimings('onDragUpdate', function () {
                    return execute(
                      getResponders().onDragUpdate,
                      data,
                      announce,
                      preset.onDragUpdate,
                    );
                  });
                });
              }
            },
            flush: function flush() {
              dragging || invariant(!1), asyncMarshal.flush();
            },
            drop: drop,
            abort: function abort() {
              dragging &&
                drop(
                  (0, esm_extends.A)(
                    {},
                    getDragStart(dragging.lastCritical, dragging.mode),
                    { combine: null, destination: null, reason: 'CANCEL' },
                  ),
                );
            },
          };
        },
        responders = function (getResponders, announce) {
          var publisher = getPublisher(getResponders, announce);
          return function (store) {
            return function (next) {
              return function (action) {
                if ('BEFORE_INITIAL_CAPTURE' === action.type) {
                  publisher.beforeCapture(
                    action.payload.draggableId,
                    action.payload.movementMode,
                  );
                  return;
                }
                if ('INITIAL_PUBLISH' === action.type) {
                  var critical = action.payload.critical;
                  publisher.beforeStart(critical, action.payload.movementMode),
                    next(action),
                    publisher.start(critical, action.payload.movementMode);
                  return;
                }
                if ('DROP_COMPLETE' === action.type) {
                  var result = action.payload.completed.result;
                  publisher.flush(), next(action), publisher.drop(result);
                  return;
                }
                if ((next(action), 'FLUSH' === action.type)) {
                  publisher.abort();
                  return;
                }
                var state = store.getState();
                'DRAGGING' === state.phase &&
                  publisher.update(state.critical, state.impact);
              };
            };
          };
        },
        dropAnimationFinish = function (store) {
          return function (next) {
            return function (action) {
              if ('DROP_ANIMATION_FINISHED' !== action.type) {
                next(action);
                return;
              }
              var state = store.getState();
              'DROP_ANIMATING' !== state.phase && invariant(!1),
                store.dispatch(completeDrop({ completed: state.completed }));
            };
          };
        },
        dropAnimationFlushOnScroll = function (store) {
          var unbind = null,
            frameId = null;
          function clear() {
            frameId && (cancelAnimationFrame(frameId), (frameId = null)),
              unbind && (unbind(), (unbind = null));
          }
          return function (next) {
            return function (action) {
              if (
                (('FLUSH' === action.type ||
                  'DROP_COMPLETE' === action.type ||
                  'DROP_ANIMATION_FINISHED' === action.type) &&
                  clear(),
                next(action),
                'DROP_ANIMATE' === action.type)
              ) {
                var binding = {
                  eventName: 'scroll',
                  options: { capture: !0, passive: !1, once: !0 },
                  fn: function flushDropAnimation() {
                    'DROP_ANIMATING' === store.getState().phase &&
                      store.dispatch(dropAnimationFinished());
                  },
                };
                frameId = requestAnimationFrame(function () {
                  (frameId = null), (unbind = bindEvents(window, [binding]));
                });
              }
            };
          };
        },
        react_beautiful_dnd_esm_focus = function (marshal) {
          var isWatching = !1;
          return function () {
            return function (next) {
              return function (action) {
                if ('INITIAL_PUBLISH' === action.type) {
                  (isWatching = !0),
                    marshal.tryRecordFocus(
                      action.payload.critical.draggable.id,
                    ),
                    next(action),
                    marshal.tryRestoreFocusRecorded();
                  return;
                }
                if ((next(action), isWatching)) {
                  if ('FLUSH' === action.type) {
                    (isWatching = !1), marshal.tryRestoreFocusRecorded();
                    return;
                  }
                  if ('DROP_COMPLETE' === action.type) {
                    isWatching = !1;
                    var result = action.payload.completed.result;
                    result.combine &&
                      marshal.tryShiftRecord(
                        result.draggableId,
                        result.combine.draggableId,
                      ),
                      marshal.tryRestoreFocusRecorded();
                  }
                }
              };
            };
          };
        },
        pendingDrop = function (store) {
          return function (next) {
            return function (action) {
              if ((next(action), 'PUBLISH_WHILE_DRAGGING' === action.type)) {
                var postActionState = store.getState();
                'DROP_PENDING' !== postActionState.phase ||
                  postActionState.isWaiting ||
                  store.dispatch(drop({ reason: postActionState.reason }));
              }
            };
          };
        },
        composeEnhancers = compose,
        react_beautiful_dnd_esm_createStore = function (_ref) {
          var dimensionMarshal = _ref.dimensionMarshal,
            focusMarshal = _ref.focusMarshal,
            styleMarshal = _ref.styleMarshal,
            getResponders = _ref.getResponders,
            announce = _ref.announce,
            autoScroller = _ref.autoScroller;
          return createStore(
            reducer,
            composeEnhancers(
              applyMiddleware(
                function () {
                  return function (next) {
                    return function (action) {
                      'INITIAL_PUBLISH' === action.type &&
                        styleMarshal.dragging(),
                        'DROP_ANIMATE' === action.type &&
                          styleMarshal.dropping(
                            action.payload.completed.result.reason,
                          ),
                        ('FLUSH' === action.type ||
                          'DROP_COMPLETE' === action.type) &&
                          styleMarshal.resting(),
                        next(action);
                    };
                  };
                },
                function () {
                  return function (next) {
                    return function (action) {
                      ('DROP_COMPLETE' === action.type ||
                        'FLUSH' === action.type ||
                        'DROP_ANIMATE' === action.type) &&
                        dimensionMarshal.stopPublishing(),
                        next(action);
                    };
                  };
                },
                function (_ref) {
                  var getState = _ref.getState,
                    dispatch = _ref.dispatch;
                  return function (next) {
                    return function (action) {
                      if ('LIFT' !== action.type) {
                        next(action);
                        return;
                      }
                      var _action$payload = action.payload,
                        id = _action$payload.id,
                        clientSelection = _action$payload.clientSelection,
                        movementMode = _action$payload.movementMode,
                        initial = getState();
                      'DROP_ANIMATING' === initial.phase &&
                        dispatch(
                          completeDrop({ completed: initial.completed }),
                        ),
                        'IDLE' !== getState().phase && invariant(!1),
                        dispatch(flush()),
                        dispatch({
                          type: 'BEFORE_INITIAL_CAPTURE',
                          payload: {
                            draggableId: id,
                            movementMode: movementMode,
                          },
                        });
                      var _marshal$startPublish =
                        dimensionMarshal.startPublishing({
                          draggableId: id,
                          scrollOptions: {
                            shouldPublishImmediately: 'SNAP' === movementMode,
                          },
                        });
                      dispatch({
                        type: 'INITIAL_PUBLISH',
                        payload: {
                          critical: _marshal$startPublish.critical,
                          dimensions: _marshal$startPublish.dimensions,
                          clientSelection: clientSelection,
                          movementMode: movementMode,
                          viewport: _marshal$startPublish.viewport,
                        },
                      });
                    };
                  };
                },
                drop$1,
                dropAnimationFinish,
                dropAnimationFlushOnScroll,
                pendingDrop,
                function (store) {
                  return function (next) {
                    return function (action) {
                      if (
                        'DROP_COMPLETE' === action.type ||
                        'DROP_ANIMATE' === action.type ||
                        'FLUSH' === action.type
                      ) {
                        autoScroller.stop(), next(action);
                        return;
                      }
                      if ('INITIAL_PUBLISH' === action.type) {
                        next(action);
                        var state = store.getState();
                        'DRAGGING' !== state.phase && invariant(!1),
                          autoScroller.start(state);
                        return;
                      }
                      next(action), autoScroller.scroll(store.getState());
                    };
                  };
                },
                scrollListener,
                react_beautiful_dnd_esm_focus(focusMarshal),
                responders(getResponders, announce),
              ),
            ),
          );
        },
        clean$1 = function clean() {
          return { additions: {}, removals: {}, modified: {} };
        };
      function createPublisher(_ref) {
        var registry = _ref.registry,
          callbacks = _ref.callbacks,
          staging = clean$1(),
          frameId = null,
          collect = function collect() {
            frameId ||
              (callbacks.collectionStarting(),
              (frameId = requestAnimationFrame(function () {
                (frameId = null), start();
                var _staging = staging,
                  additions = _staging.additions,
                  removals = _staging.removals,
                  modified = _staging.modified,
                  added = Object.keys(additions)
                    .map(function (id) {
                      return registry.draggable
                        .getById(id)
                        .getDimension(origin);
                    })
                    .sort(function (a, b) {
                      return a.descriptor.index - b.descriptor.index;
                    }),
                  updated = Object.keys(modified).map(function (id) {
                    var scroll = registry.droppable
                      .getById(id)
                      .callbacks.getScrollWhileDragging();
                    return { droppableId: id, scroll: scroll };
                  }),
                  result = {
                    additions: added,
                    removals: Object.keys(removals),
                    modified: updated,
                  };
                (staging = clean$1()), finish(), callbacks.publish(result);
              })));
          };
        return {
          add: function add(entry) {
            var id = entry.descriptor.id;
            (staging.additions[id] = entry),
              (staging.modified[entry.descriptor.droppableId] = !0),
              staging.removals[id] && delete staging.removals[id],
              collect();
          },
          remove: function remove(entry) {
            var descriptor = entry.descriptor;
            (staging.removals[descriptor.id] = !0),
              (staging.modified[descriptor.droppableId] = !0),
              staging.additions[descriptor.id] &&
                delete staging.additions[descriptor.id],
              collect();
          },
          stop: function stop() {
            frameId &&
              (cancelAnimationFrame(frameId),
              (frameId = null),
              (staging = clean$1()));
          },
        };
      }
      var getMaxScroll = function (_ref) {
          var scrollHeight = _ref.scrollHeight,
            scrollWidth = _ref.scrollWidth,
            height = _ref.height,
            maxScroll = subtract(
              { x: scrollWidth, y: scrollHeight },
              { x: _ref.width, y: height },
            );
          return { x: Math.max(0, maxScroll.x), y: Math.max(0, maxScroll.y) };
        },
        getDocumentElement = function () {
          var doc = document.documentElement;
          return doc || invariant(!1), doc;
        },
        getMaxWindowScroll = function () {
          var doc = getDocumentElement();
          return getMaxScroll({
            scrollHeight: doc.scrollHeight,
            scrollWidth: doc.scrollWidth,
            width: doc.clientWidth,
            height: doc.clientHeight,
          });
        },
        getViewport = function () {
          var scroll = react_beautiful_dnd_esm_getWindowScroll(),
            maxScroll = getMaxWindowScroll(),
            top = scroll.y,
            left = scroll.x,
            doc = getDocumentElement();
          return {
            frame: getRect({
              top: top,
              left: left,
              right: left + doc.clientWidth,
              bottom: top + doc.clientHeight,
            }),
            scroll: {
              initial: scroll,
              current: scroll,
              max: maxScroll,
              diff: { value: origin, displacement: origin },
            },
          };
        },
        getInitialPublish = function (_ref) {
          var critical = _ref.critical,
            scrollOptions = _ref.scrollOptions,
            registry = _ref.registry;
          start();
          var viewport = getViewport(),
            windowScroll = viewport.scroll.current,
            home = critical.droppable,
            droppables = registry.droppable
              .getAllByType(home.type)
              .map(function (entry) {
                return entry.callbacks.getDimensionAndWatchScroll(
                  windowScroll,
                  scrollOptions,
                );
              }),
            dimensions = {
              draggables: toDraggableMap(
                registry.draggable
                  .getAllByType(critical.draggable.type)
                  .map(function (entry) {
                    return entry.getDimension(windowScroll);
                  }),
              ),
              droppables: toDroppableMap(droppables),
            };
          return (
            finish(),
            { dimensions: dimensions, critical: critical, viewport: viewport }
          );
        };
      function shouldPublishUpdate(registry, dragging, entry) {
        return (
          entry.descriptor.id !== dragging.id &&
          entry.descriptor.type === dragging.type &&
          'virtual' ===
            registry.droppable.getById(entry.descriptor.droppableId).descriptor
              .mode
        );
      }
      var createDimensionMarshal = function (registry, callbacks) {
          var collection = null,
            publisher = createPublisher({
              callbacks: {
                publish: callbacks.publishWhileDragging,
                collectionStarting: callbacks.collectionStarting,
              },
              registry: registry,
            }),
            subscriber = function subscriber(event) {
              collection || invariant(!1);
              var dragging = collection.critical.draggable;
              'ADDITION' === event.type &&
                shouldPublishUpdate(registry, dragging, event.value) &&
                publisher.add(event.value),
                'REMOVAL' === event.type &&
                  shouldPublishUpdate(registry, dragging, event.value) &&
                  publisher.remove(event.value);
            };
          return {
            updateDroppableIsEnabled: function updateDroppableIsEnabled(
              id,
              isEnabled,
            ) {
              registry.droppable.exists(id) || invariant(!1),
                collection &&
                  callbacks.updateDroppableIsEnabled({
                    id: id,
                    isEnabled: isEnabled,
                  });
            },
            updateDroppableIsCombineEnabled:
              function updateDroppableIsCombineEnabled(id, isCombineEnabled) {
                collection &&
                  (registry.droppable.exists(id) || invariant(!1),
                  callbacks.updateDroppableIsCombineEnabled({
                    id: id,
                    isCombineEnabled: isCombineEnabled,
                  }));
              },
            scrollDroppable: function scrollDroppable(id, change) {
              collection &&
                registry.droppable.getById(id).callbacks.scroll(change);
            },
            updateDroppableScroll: function updateDroppableScroll(
              id,
              newScroll,
            ) {
              collection &&
                (registry.droppable.exists(id) || invariant(!1),
                callbacks.updateDroppableScroll({
                  id: id,
                  newScroll: newScroll,
                }));
            },
            startPublishing: function startPublishing(request) {
              collection && invariant(!1);
              var entry = registry.draggable.getById(request.draggableId),
                home = registry.droppable.getById(entry.descriptor.droppableId),
                critical = {
                  draggable: entry.descriptor,
                  droppable: home.descriptor,
                };
              return (
                (collection = {
                  critical: critical,
                  unsubscribe: registry.subscribe(subscriber),
                }),
                getInitialPublish({
                  critical: critical,
                  registry: registry,
                  scrollOptions: request.scrollOptions,
                })
              );
            },
            stopPublishing: function stopPublishing() {
              if (collection) {
                publisher.stop();
                var home = collection.critical.droppable;
                registry.droppable
                  .getAllByType(home.type)
                  .forEach(function (entry) {
                    return entry.callbacks.dragStopped();
                  }),
                  collection.unsubscribe(),
                  (collection = null);
              }
            },
          };
        },
        canStartDrag = function (state, id) {
          return (
            'IDLE' === state.phase ||
            ('DROP_ANIMATING' === state.phase &&
              state.completed.result.draggableId !== id &&
              'DROP' === state.completed.result.reason)
          );
        },
        scrollWindow = function (change) {
          window.scrollBy(change.x, change.y);
        },
        getScrollableDroppables = memoize_one_esm(function (droppables) {
          return toDroppableList(droppables).filter(function (droppable) {
            return !!droppable.isEnabled && !!droppable.frame;
          });
        }),
        getBestScrollableDroppable = function (_ref) {
          var center = _ref.center,
            destination = _ref.destination,
            droppables = _ref.droppables;
          if (destination) {
            var _dimension = droppables[destination];
            return _dimension.frame ? _dimension : null;
          }
          return find(
            getScrollableDroppables(droppables),
            function (droppable) {
              return (
                droppable.frame || invariant(!1),
                isPositionInFrame(droppable.frame.pageMarginBox)(center)
              );
            },
          );
        },
        config = {
          startFromPercentage: 0.25,
          maxScrollAtPercentage: 0.05,
          maxPixelScroll: 28,
          ease: function ease(percentage) {
            return Math.pow(percentage, 2);
          },
          durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
        },
        getPercentage = function (_ref) {
          var startOfRange = _ref.startOfRange,
            endOfRange = _ref.endOfRange,
            current = _ref.current,
            range = endOfRange - startOfRange;
          return 0 === range ? 0 : (current - startOfRange) / range;
        },
        getValueFromDistance = function (distanceToEdge, thresholds) {
          if (distanceToEdge > thresholds.startScrollingFrom) return 0;
          if (distanceToEdge <= thresholds.maxScrollValueAt)
            return config.maxPixelScroll;
          if (distanceToEdge === thresholds.startScrollingFrom) return 1;
          var percentageFromMaxScrollValueAt = getPercentage({
            startOfRange: thresholds.maxScrollValueAt,
            endOfRange: thresholds.startScrollingFrom,
            current: distanceToEdge,
          });
          return Math.ceil(
            config.maxPixelScroll *
              config.ease(1 - percentageFromMaxScrollValueAt),
          );
        },
        accelerateAt = config.durationDampening.accelerateAt,
        stopAt = config.durationDampening.stopDampeningAt,
        dampenValueByTime = function (proposedScroll, dragStartTime) {
          var runTime = Date.now() - dragStartTime;
          if (runTime >= stopAt) return proposedScroll;
          if (runTime < accelerateAt) return 1;
          var betweenAccelerateAtAndStopAtPercentage = getPercentage({
            startOfRange: accelerateAt,
            endOfRange: stopAt,
            current: runTime,
          });
          return Math.ceil(
            proposedScroll *
              config.ease(betweenAccelerateAtAndStopAtPercentage),
          );
        },
        getValue = function (_ref) {
          var distanceToEdge = _ref.distanceToEdge,
            thresholds = _ref.thresholds,
            dragStartTime = _ref.dragStartTime,
            shouldUseTimeDampening = _ref.shouldUseTimeDampening,
            scroll = getValueFromDistance(distanceToEdge, thresholds);
          return 0 === scroll
            ? 0
            : shouldUseTimeDampening
              ? Math.max(dampenValueByTime(scroll, dragStartTime), 1)
              : scroll;
        },
        getScrollOnAxis = function (_ref) {
          var container = _ref.container,
            distanceToEdges = _ref.distanceToEdges,
            dragStartTime = _ref.dragStartTime,
            axis = _ref.axis,
            shouldUseTimeDampening = _ref.shouldUseTimeDampening,
            thresholds = {
              startScrollingFrom:
                container[axis.size] * config.startFromPercentage,
              maxScrollValueAt:
                container[axis.size] * config.maxScrollAtPercentage,
            };
          return distanceToEdges[axis.end] < distanceToEdges[axis.start]
            ? getValue({
                distanceToEdge: distanceToEdges[axis.end],
                thresholds: thresholds,
                dragStartTime: dragStartTime,
                shouldUseTimeDampening: shouldUseTimeDampening,
              })
            : -1 *
                getValue({
                  distanceToEdge: distanceToEdges[axis.start],
                  thresholds: thresholds,
                  dragStartTime: dragStartTime,
                  shouldUseTimeDampening: shouldUseTimeDampening,
                });
        },
        adjustForSizeLimits = function (_ref) {
          var container = _ref.container,
            subject = _ref.subject,
            proposedScroll = _ref.proposedScroll,
            isTooBigVertically = subject.height > container.height,
            isTooBigHorizontally = subject.width > container.width;
          return isTooBigHorizontally || isTooBigVertically
            ? isTooBigHorizontally && isTooBigVertically
              ? null
              : {
                  x: isTooBigHorizontally ? 0 : proposedScroll.x,
                  y: isTooBigVertically ? 0 : proposedScroll.y,
                }
            : proposedScroll;
        },
        clean$2 = apply(function (value) {
          return 0 === value ? 0 : value;
        }),
        getScroll = function (_ref) {
          var dragStartTime = _ref.dragStartTime,
            container = _ref.container,
            subject = _ref.subject,
            center = _ref.center,
            shouldUseTimeDampening = _ref.shouldUseTimeDampening,
            distanceToEdges = {
              top: center.y - container.top,
              right: container.right - center.x,
              bottom: container.bottom - center.y,
              left: center.x - container.left,
            },
            y = getScrollOnAxis({
              container: container,
              distanceToEdges: distanceToEdges,
              dragStartTime: dragStartTime,
              axis: vertical,
              shouldUseTimeDampening: shouldUseTimeDampening,
            }),
            required = clean$2({
              x: getScrollOnAxis({
                container: container,
                distanceToEdges: distanceToEdges,
                dragStartTime: dragStartTime,
                axis: horizontal,
                shouldUseTimeDampening: shouldUseTimeDampening,
              }),
              y: y,
            });
          if (react_beautiful_dnd_esm_isEqual(required, origin)) return null;
          var limited = adjustForSizeLimits({
            container: container,
            subject: subject,
            proposedScroll: required,
          });
          return limited
            ? react_beautiful_dnd_esm_isEqual(limited, origin)
              ? null
              : limited
            : null;
        },
        smallestSigned = apply(function (value) {
          return 0 === value ? 0 : value > 0 ? 1 : -1;
        }),
        getOverlap = (function () {
          var getRemainder = function getRemainder(target, max) {
            return target < 0 ? target : target > max ? target - max : 0;
          };
          return function (_ref) {
            var current = _ref.current,
              max = _ref.max,
              targetScroll = add(current, _ref.change),
              overlap = {
                x: getRemainder(targetScroll.x, max.x),
                y: getRemainder(targetScroll.y, max.y),
              };
            return react_beautiful_dnd_esm_isEqual(overlap, origin)
              ? null
              : overlap;
          };
        })(),
        canPartiallyScroll = function canPartiallyScroll(_ref2) {
          var rawMax = _ref2.max,
            current = _ref2.current,
            change = _ref2.change,
            max = {
              x: Math.max(current.x, rawMax.x),
              y: Math.max(current.y, rawMax.y),
            },
            smallestChange = smallestSigned(change),
            overlap = getOverlap({
              max: max,
              current: current,
              change: smallestChange,
            });
          return (
            !overlap ||
            (0 !== smallestChange.x && 0 === overlap.x) ||
            (0 !== smallestChange.y && 0 === overlap.y)
          );
        },
        canScrollWindow = function canScrollWindow(viewport, change) {
          return canPartiallyScroll({
            current: viewport.scroll.current,
            max: viewport.scroll.max,
            change: change,
          });
        },
        getWindowOverlap = function getWindowOverlap(viewport, change) {
          if (!canScrollWindow(viewport, change)) return null;
          var max = viewport.scroll.max;
          return getOverlap({
            current: viewport.scroll.current,
            max: max,
            change: change,
          });
        },
        canScrollDroppable = function canScrollDroppable(droppable, change) {
          var frame = droppable.frame;
          return (
            !!frame &&
            canPartiallyScroll({
              current: frame.scroll.current,
              max: frame.scroll.max,
              change: change,
            })
          );
        },
        getDroppableOverlap = function getDroppableOverlap(droppable, change) {
          var frame = droppable.frame;
          return frame && canScrollDroppable(droppable, change)
            ? getOverlap({
                current: frame.scroll.current,
                max: frame.scroll.max,
                change: change,
              })
            : null;
        },
        getWindowScrollChange = function (_ref) {
          var viewport = _ref.viewport,
            subject = _ref.subject,
            center = _ref.center,
            dragStartTime = _ref.dragStartTime,
            shouldUseTimeDampening = _ref.shouldUseTimeDampening,
            scroll = getScroll({
              dragStartTime: dragStartTime,
              container: viewport.frame,
              subject: subject,
              center: center,
              shouldUseTimeDampening: shouldUseTimeDampening,
            });
          return scroll && canScrollWindow(viewport, scroll) ? scroll : null;
        },
        getDroppableScrollChange = function (_ref) {
          var droppable = _ref.droppable,
            subject = _ref.subject,
            center = _ref.center,
            dragStartTime = _ref.dragStartTime,
            shouldUseTimeDampening = _ref.shouldUseTimeDampening,
            frame = droppable.frame;
          if (!frame) return null;
          var scroll = getScroll({
            dragStartTime: dragStartTime,
            container: frame.pageMarginBox,
            subject: subject,
            center: center,
            shouldUseTimeDampening: shouldUseTimeDampening,
          });
          return scroll && canScrollDroppable(droppable, scroll)
            ? scroll
            : null;
        },
        scroll$1 = function (_ref) {
          var state = _ref.state,
            dragStartTime = _ref.dragStartTime,
            shouldUseTimeDampening = _ref.shouldUseTimeDampening,
            scrollWindow = _ref.scrollWindow,
            scrollDroppable = _ref.scrollDroppable,
            center = state.current.page.borderBoxCenter,
            subject =
              state.dimensions.draggables[state.critical.draggable.id].page
                .marginBox;
          if (state.isWindowScrollAllowed) {
            var _change = getWindowScrollChange({
              dragStartTime: dragStartTime,
              viewport: state.viewport,
              subject: subject,
              center: center,
              shouldUseTimeDampening: shouldUseTimeDampening,
            });
            if (_change) {
              scrollWindow(_change);
              return;
            }
          }
          var droppable = getBestScrollableDroppable({
            center: center,
            destination: whatIsDraggedOver(state.impact),
            droppables: state.dimensions.droppables,
          });
          if (droppable) {
            var change = getDroppableScrollChange({
              dragStartTime: dragStartTime,
              droppable: droppable,
              subject: subject,
              center: center,
              shouldUseTimeDampening: shouldUseTimeDampening,
            });
            change && scrollDroppable(droppable.descriptor.id, change);
          }
        },
        createFluidScroller = function (_ref) {
          var scrollWindow = _ref.scrollWindow,
            scrollDroppable = _ref.scrollDroppable,
            scheduleWindowScroll = raf_schd_esm(scrollWindow),
            scheduleDroppableScroll = raf_schd_esm(scrollDroppable),
            dragging = null,
            tryScroll = function tryScroll(state) {
              dragging || invariant(!1);
              var _dragging = dragging,
                shouldUseTimeDampening = _dragging.shouldUseTimeDampening;
              scroll$1({
                state: state,
                scrollWindow: scheduleWindowScroll,
                scrollDroppable: scheduleDroppableScroll,
                dragStartTime: _dragging.dragStartTime,
                shouldUseTimeDampening: shouldUseTimeDampening,
              });
            };
          return {
            start: function start$1(state) {
              start(), dragging && invariant(!1);
              var dragStartTime = Date.now(),
                wasScrollNeeded = !1,
                fakeScrollCallback = function fakeScrollCallback() {
                  wasScrollNeeded = !0;
                };
              scroll$1({
                state: state,
                dragStartTime: 0,
                shouldUseTimeDampening: !1,
                scrollWindow: fakeScrollCallback,
                scrollDroppable: fakeScrollCallback,
              }),
                (dragging = {
                  dragStartTime: dragStartTime,
                  shouldUseTimeDampening: wasScrollNeeded,
                }),
                finish(),
                wasScrollNeeded && tryScroll(state);
            },
            stop: function stop() {
              dragging &&
                (scheduleWindowScroll.cancel(),
                scheduleDroppableScroll.cancel(),
                (dragging = null));
            },
            scroll: tryScroll,
          };
        },
        createJumpScroller = function (_ref) {
          var move = _ref.move,
            scrollDroppable = _ref.scrollDroppable,
            scrollWindow = _ref.scrollWindow,
            moveByOffset = function moveByOffset(state, offset) {
              move({ client: add(state.current.client.selection, offset) });
            },
            scrollDroppableAsMuchAsItCan =
              function scrollDroppableAsMuchAsItCan(droppable, change) {
                if (!canScrollDroppable(droppable, change)) return change;
                var overlap = getDroppableOverlap(droppable, change);
                if (!overlap)
                  return scrollDroppable(droppable.descriptor.id, change), null;
                var whatTheDroppableCanScroll = subtract(change, overlap);
                return (
                  scrollDroppable(
                    droppable.descriptor.id,
                    whatTheDroppableCanScroll,
                  ),
                  subtract(change, whatTheDroppableCanScroll)
                );
              },
            scrollWindowAsMuchAsItCan = function scrollWindowAsMuchAsItCan(
              isWindowScrollAllowed,
              viewport,
              change,
            ) {
              if (!isWindowScrollAllowed || !canScrollWindow(viewport, change))
                return change;
              var overlap = getWindowOverlap(viewport, change);
              if (!overlap) return scrollWindow(change), null;
              var whatTheWindowCanScroll = subtract(change, overlap);
              return (
                scrollWindow(whatTheWindowCanScroll),
                subtract(change, whatTheWindowCanScroll)
              );
            };
          return function jumpScroller(state) {
            var request = state.scrollJumpRequest;
            if (request) {
              var destination = whatIsDraggedOver(state.impact);
              destination || invariant(!1);
              var droppableRemainder = scrollDroppableAsMuchAsItCan(
                state.dimensions.droppables[destination],
                request,
              );
              if (droppableRemainder) {
                var viewport = state.viewport,
                  windowRemainder = scrollWindowAsMuchAsItCan(
                    state.isWindowScrollAllowed,
                    viewport,
                    droppableRemainder,
                  );
                windowRemainder && moveByOffset(state, windowRemainder);
              }
            }
          };
        },
        createAutoScroller = function (_ref) {
          var scrollDroppable = _ref.scrollDroppable,
            scrollWindow = _ref.scrollWindow,
            move = _ref.move,
            fluidScroller = createFluidScroller({
              scrollWindow: scrollWindow,
              scrollDroppable: scrollDroppable,
            }),
            jumpScroll = createJumpScroller({
              move: move,
              scrollWindow: scrollWindow,
              scrollDroppable: scrollDroppable,
            });
          return {
            scroll: function scroll(state) {
              if ('DRAGGING' === state.phase) {
                if ('FLUID' === state.movementMode) {
                  fluidScroller.scroll(state);
                  return;
                }
                state.scrollJumpRequest && jumpScroll(state);
              }
            },
            start: fluidScroller.start,
            stop: fluidScroller.stop,
          };
        },
        prefix$1 = 'data-rbd',
        dragHandle = (function () {
          var base = prefix$1 + '-drag-handle';
          return {
            base: base,
            draggableId: base + '-draggable-id',
            contextId: base + '-context-id',
          };
        })(),
        draggable = (function () {
          var base = prefix$1 + '-draggable';
          return {
            base: base,
            contextId: base + '-context-id',
            id: base + '-id',
          };
        })(),
        droppable = (function () {
          var base = prefix$1 + '-droppable';
          return {
            base: base,
            contextId: base + '-context-id',
            id: base + '-id',
          };
        })(),
        scrollContainer = {
          contextId: prefix$1 + '-scroll-container-context-id',
        },
        getStyles = function getStyles(rules, property) {
          return rules
            .map(function (rule) {
              var value = rule.styles[property];
              return value ? rule.selector + ' { ' + value + ' }' : '';
            })
            .join(' ');
        },
        getStyles$1 = function (contextId) {
          var grabCursor,
            transition,
            getSelector = function (attribute) {
              return '[' + attribute + '="' + contextId + '"]';
            },
            dragHandle$1 =
              ((grabCursor =
                '\n      cursor: -webkit-grab;\n      cursor: grab;\n    '),
              {
                selector: getSelector(dragHandle.contextId),
                styles: {
                  always:
                    '\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ',
                  resting: grabCursor,
                  dragging: 'pointer-events: none;',
                  dropAnimating: grabCursor,
                },
              }),
            rules = [
              ((transition =
                '\n      transition: ' + transitions.outOfTheWay + ';\n    '),
              {
                selector: getSelector(draggable.contextId),
                styles: {
                  dragging: transition,
                  dropAnimating: transition,
                  userCancel: transition,
                },
              }),
              dragHandle$1,
              {
                selector: getSelector(droppable.contextId),
                styles: { always: 'overflow-anchor: none;' },
              },
              {
                selector: 'body',
                styles: {
                  dragging:
                    '\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      ',
                },
              },
            ];
          return {
            always: getStyles(rules, 'always'),
            resting: getStyles(rules, 'resting'),
            dragging: getStyles(rules, 'dragging'),
            dropAnimating: getStyles(rules, 'dropAnimating'),
            userCancel: getStyles(rules, 'userCancel'),
          };
        },
        react_beautiful_dnd_esm_useIsomorphicLayoutEffect =
          'undefined' != typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement
            ? react.useLayoutEffect
            : react.useEffect,
        getHead = function getHead() {
          var head = document.querySelector('head');
          return head || invariant(!1), head;
        },
        createStyleEl = function createStyleEl(nonce) {
          var el = document.createElement('style');
          return (
            nonce && el.setAttribute('nonce', nonce), (el.type = 'text/css'), el
          );
        };
      function useStyleMarshal(contextId, nonce) {
        var styles = use_memo_one_esm_useMemo(
            function () {
              return getStyles$1(contextId);
            },
            [contextId],
          ),
          alwaysRef = (0, react.useRef)(null),
          dynamicRef = (0, react.useRef)(null),
          setDynamicStyle = useCallback(
            memoize_one_esm(function (proposed) {
              var el = dynamicRef.current;
              el || invariant(!1), (el.textContent = proposed);
            }),
            [],
          ),
          setAlwaysStyle = useCallback(function (proposed) {
            var el = alwaysRef.current;
            el || invariant(!1), (el.textContent = proposed);
          }, []);
        react_beautiful_dnd_esm_useIsomorphicLayoutEffect(
          function () {
            (alwaysRef.current || dynamicRef.current) && invariant(!1);
            var always = createStyleEl(nonce),
              dynamic = createStyleEl(nonce);
            return (
              (alwaysRef.current = always),
              (dynamicRef.current = dynamic),
              always.setAttribute(prefix$1 + '-always', contextId),
              dynamic.setAttribute(prefix$1 + '-dynamic', contextId),
              getHead().appendChild(always),
              getHead().appendChild(dynamic),
              setAlwaysStyle(styles.always),
              setDynamicStyle(styles.resting),
              function () {
                var remove = function remove(ref) {
                  var current = ref.current;
                  current || invariant(!1),
                    getHead().removeChild(current),
                    (ref.current = null);
                };
                remove(alwaysRef), remove(dynamicRef);
              }
            );
          },
          [
            nonce,
            setAlwaysStyle,
            setDynamicStyle,
            styles.always,
            styles.resting,
            contextId,
          ],
        );
        var dragging = useCallback(
            function () {
              return setDynamicStyle(styles.dragging);
            },
            [setDynamicStyle, styles.dragging],
          ),
          dropping = useCallback(
            function (reason) {
              if ('DROP' === reason) {
                setDynamicStyle(styles.dropAnimating);
                return;
              }
              setDynamicStyle(styles.userCancel);
            },
            [setDynamicStyle, styles.dropAnimating, styles.userCancel],
          ),
          resting = useCallback(
            function () {
              dynamicRef.current && setDynamicStyle(styles.resting);
            },
            [setDynamicStyle, styles.resting],
          );
        return use_memo_one_esm_useMemo(
          function () {
            return { dragging: dragging, dropping: dropping, resting: resting };
          },
          [dragging, dropping, resting],
        );
      }
      var getWindowFromEl = function (el) {
        return el && el.ownerDocument ? el.ownerDocument.defaultView : window;
      };
      function isHtmlElement(el) {
        return el instanceof getWindowFromEl(el).HTMLElement;
      }
      function findDragHandle(contextId, draggableId) {
        var selector = '[' + dragHandle.contextId + '="' + contextId + '"]',
          possible = toArray(document.querySelectorAll(selector));
        if (!possible.length) return null;
        var handle = find(possible, function (el) {
          return el.getAttribute(dragHandle.draggableId) === draggableId;
        });
        return handle && isHtmlElement(handle) ? handle : null;
      }
      function useFocusMarshal(contextId) {
        var entriesRef = (0, react.useRef)({}),
          recordRef = (0, react.useRef)(null),
          restoreFocusFrameRef = (0, react.useRef)(null),
          isMountedRef = (0, react.useRef)(!1),
          register = useCallback(function register(id, focus) {
            var entry = { id: id, focus: focus };
            return (
              (entriesRef.current[id] = entry),
              function unregister() {
                var entries = entriesRef.current;
                entries[id] !== entry && delete entries[id];
              }
            );
          }, []),
          tryGiveFocus = useCallback(
            function tryGiveFocus(tryGiveFocusTo) {
              var handle = findDragHandle(contextId, tryGiveFocusTo);
              handle && handle !== document.activeElement && handle.focus();
            },
            [contextId],
          ),
          tryShiftRecord = useCallback(function tryShiftRecord(
            previous,
            redirectTo,
          ) {
            recordRef.current === previous && (recordRef.current = redirectTo);
          }, []),
          tryRestoreFocusRecorded = useCallback(
            function tryRestoreFocusRecorded() {
              !restoreFocusFrameRef.current &&
                isMountedRef.current &&
                (restoreFocusFrameRef.current = requestAnimationFrame(
                  function () {
                    restoreFocusFrameRef.current = null;
                    var record = recordRef.current;
                    record && tryGiveFocus(record);
                  },
                ));
            },
            [tryGiveFocus],
          ),
          tryRecordFocus = useCallback(function tryRecordFocus(id) {
            recordRef.current = null;
            var focused = document.activeElement;
            focused &&
              focused.getAttribute(dragHandle.draggableId) === id &&
              (recordRef.current = id);
          }, []);
        return (
          react_beautiful_dnd_esm_useIsomorphicLayoutEffect(function () {
            return (
              (isMountedRef.current = !0),
              function clearFrameOnUnmount() {
                isMountedRef.current = !1;
                var frameId = restoreFocusFrameRef.current;
                frameId && cancelAnimationFrame(frameId);
              }
            );
          }, []),
          use_memo_one_esm_useMemo(
            function () {
              return {
                register: register,
                tryRecordFocus: tryRecordFocus,
                tryRestoreFocusRecorded: tryRestoreFocusRecorded,
                tryShiftRecord: tryShiftRecord,
              };
            },
            [register, tryRecordFocus, tryRestoreFocusRecorded, tryShiftRecord],
          )
        );
      }
      function createRegistry() {
        var entries = { draggables: {}, droppables: {} },
          subscribers = [];
        function notify(event) {
          subscribers.length &&
            subscribers.forEach(function (cb) {
              return cb(event);
            });
        }
        function findDraggableById(id) {
          return entries.draggables[id] || null;
        }
        function findDroppableById(id) {
          return entries.droppables[id] || null;
        }
        return {
          draggable: {
            register: function register(entry) {
              (entries.draggables[entry.descriptor.id] = entry),
                notify({ type: 'ADDITION', value: entry });
            },
            update: function update(entry, last) {
              var current = entries.draggables[last.descriptor.id];
              current &&
                current.uniqueId === entry.uniqueId &&
                (delete entries.draggables[last.descriptor.id],
                (entries.draggables[entry.descriptor.id] = entry));
            },
            unregister: function unregister(entry) {
              var draggableId = entry.descriptor.id,
                current = findDraggableById(draggableId);
              current &&
                entry.uniqueId === current.uniqueId &&
                (delete entries.draggables[draggableId],
                notify({ type: 'REMOVAL', value: entry }));
            },
            getById: function getDraggableById(id) {
              var entry = findDraggableById(id);
              return entry || invariant(!1), entry;
            },
            findById: findDraggableById,
            exists: function exists(id) {
              return !!findDraggableById(id);
            },
            getAllByType: function getAllByType(type) {
              return values(entries.draggables).filter(function (entry) {
                return entry.descriptor.type === type;
              });
            },
          },
          droppable: {
            register: function register(entry) {
              entries.droppables[entry.descriptor.id] = entry;
            },
            unregister: function unregister(entry) {
              var current = findDroppableById(entry.descriptor.id);
              current &&
                entry.uniqueId === current.uniqueId &&
                delete entries.droppables[entry.descriptor.id];
            },
            getById: function getDroppableById(id) {
              var entry = findDroppableById(id);
              return entry || invariant(!1), entry;
            },
            findById: findDroppableById,
            exists: function exists(id) {
              return !!findDroppableById(id);
            },
            getAllByType: function getAllByType(type) {
              return values(entries.droppables).filter(function (entry) {
                return entry.descriptor.type === type;
              });
            },
          },
          subscribe: function subscribe(cb) {
            return (
              subscribers.push(cb),
              function unsubscribe() {
                var index = subscribers.indexOf(cb);
                -1 !== index && subscribers.splice(index, 1);
              }
            );
          },
          clean: function clean() {
            (entries.draggables = {}),
              (entries.droppables = {}),
              (subscribers.length = 0);
          },
        };
      }
      function useRegistry() {
        var registry = use_memo_one_esm_useMemo(createRegistry, []);
        return (
          (0, react.useEffect)(
            function () {
              return function unmount() {
                requestAnimationFrame(registry.clean);
              };
            },
            [registry],
          ),
          registry
        );
      }
      var StoreContext = react.createContext(null),
        getBodyElement = function () {
          var body = document.body;
          return body || invariant(!1), body;
        },
        visuallyHidden = {
          position: 'absolute',
          width: '1px',
          height: '1px',
          margin: '-1px',
          border: '0',
          padding: '0',
          overflow: 'hidden',
          clip: 'rect(0 0 0 0)',
          'clip-path': 'inset(100%)',
        };
      function useAnnouncer(contextId) {
        var id = use_memo_one_esm_useMemo(
            function () {
              return 'rbd-announcement-' + contextId;
            },
            [contextId],
          ),
          ref = (0, react.useRef)(null);
        return (
          (0, react.useEffect)(
            function setup() {
              var el = document.createElement('div');
              return (
                (ref.current = el),
                (el.id = id),
                el.setAttribute('aria-live', 'assertive'),
                el.setAttribute('aria-atomic', 'true'),
                (0, esm_extends.A)(el.style, visuallyHidden),
                getBodyElement().appendChild(el),
                function cleanup() {
                  setTimeout(function remove() {
                    var body = getBodyElement();
                    body.contains(el) && body.removeChild(el),
                      el === ref.current && (ref.current = null);
                  });
                }
              );
            },
            [id],
          ),
          useCallback(function (message) {
            var el = ref.current;
            if (el) {
              el.textContent = message;
              return;
            }
          }, [])
        );
      }
      var count = 0,
        defaults = { separator: '::' };
      function useUniqueId(prefix, options) {
        return (
          void 0 === options && (options = defaults),
          use_memo_one_esm_useMemo(
            function () {
              return '' + prefix + options.separator + count++;
            },
            [options.separator, prefix],
          )
        );
      }
      function getElementId(_ref) {
        return 'rbd-hidden-text-' + _ref.contextId + '-' + _ref.uniqueId;
      }
      function useHiddenTextElement(_ref2) {
        var contextId = _ref2.contextId,
          text = _ref2.text,
          uniqueId = useUniqueId('hidden-text', { separator: '-' }),
          id = use_memo_one_esm_useMemo(
            function () {
              return getElementId({ contextId: contextId, uniqueId: uniqueId });
            },
            [uniqueId, contextId],
          );
        return (
          (0, react.useEffect)(
            function mount() {
              var el = document.createElement('div');
              return (
                (el.id = id),
                (el.textContent = text),
                (el.style.display = 'none'),
                getBodyElement().appendChild(el),
                function unmount() {
                  var body = getBodyElement();
                  body.contains(el) && body.removeChild(el);
                }
              );
            },
            [id, text],
          ),
          id
        );
      }
      var AppContext = react.createContext(null),
        peerDependencies = { react: '^16.8.5 || ^17.0.0 || ^18.0.0' },
        semver = /(\d+)\.(\d+)\.(\d+)/,
        getVersion = function getVersion(value) {
          var result = semver.exec(value);
          return (
            null != result || invariant(!1),
            {
              major: Number(result[1]),
              minor: Number(result[2]),
              patch: Number(result[3]),
              raw: value,
            }
          );
        },
        checkReactVersion = function (peerDepValue, actualValue) {
          var peerDep = getVersion(peerDepValue),
            actual = getVersion(actualValue);
          if (
            actual.major > peerDep.major ||
            (!(actual.major < peerDep.major) &&
              (actual.minor > peerDep.minor ||
                (!(actual.minor < peerDep.minor) &&
                  actual.patch >= peerDep.patch)))
          )
            return;
        },
        checkDoctype = function (doc) {
          var doctype = doc.doctype;
          doctype && (doctype.name.toLowerCase(), doctype.publicId);
        };
      function useDevSetupWarning(fn, inputs) {}
      function useStartupValidation() {}
      function usePrevious(current) {
        var ref = (0, react.useRef)(current);
        return (
          (0, react.useEffect)(function () {
            ref.current = current;
          }),
          ref
        );
      }
      function create() {
        var lock = null;
        function release() {
          lock || invariant(!1), (lock = null);
        }
        function tryAbandon() {
          lock && (lock.abandon(), release());
        }
        return {
          isClaimed: function isClaimed() {
            return !!lock;
          },
          isActive: function isActive(value) {
            return value === lock;
          },
          claim: function claim(abandon) {
            lock && invariant(!1);
            var newLock = { abandon: abandon };
            return (lock = newLock), newLock;
          },
          release: release,
          tryAbandon: tryAbandon,
        };
      }
      var preventedKeys =
          (((_preventedKeys = {})[13] = !0),
          (_preventedKeys[9] = !0),
          _preventedKeys),
        preventStandardKeyEvents = function (event) {
          preventedKeys[event.keyCode] && event.preventDefault();
        },
        supportedEventName = (function () {
          var base = 'visibilitychange';
          return 'undefined' == typeof document
            ? base
            : find(
                [base, 'ms' + base, 'webkit' + base, 'moz' + base, 'o' + base],
                function (eventName) {
                  return 'on' + eventName in document;
                },
              ) || base;
        })();
      function isSloppyClickThresholdExceeded(original, current) {
        return (
          Math.abs(current.x - original.x) >= 5 ||
          Math.abs(current.y - original.y) >= 5
        );
      }
      var idle$1 = { type: 'IDLE' };
      function getCaptureBindings(_ref) {
        var cancel = _ref.cancel,
          completed = _ref.completed,
          getPhase = _ref.getPhase,
          setPhase = _ref.setPhase;
        return [
          {
            eventName: 'mousemove',
            fn: function fn(event) {
              var button = event.button,
                clientX = event.clientX,
                clientY = event.clientY;
              if (0 === button) {
                var point = { x: clientX, y: clientY },
                  phase = getPhase();
                if ('DRAGGING' === phase.type) {
                  event.preventDefault(), phase.actions.move(point);
                  return;
                }
                'PENDING' !== phase.type && invariant(!1),
                  isSloppyClickThresholdExceeded(phase.point, point) &&
                    (event.preventDefault(),
                    setPhase({
                      type: 'DRAGGING',
                      actions: phase.actions.fluidLift(point),
                    }));
              }
            },
          },
          {
            eventName: 'mouseup',
            fn: function fn(event) {
              var phase = getPhase();
              if ('DRAGGING' !== phase.type) {
                cancel();
                return;
              }
              event.preventDefault(),
                phase.actions.drop({ shouldBlockNextClick: !0 }),
                completed();
            },
          },
          {
            eventName: 'mousedown',
            fn: function fn(event) {
              'DRAGGING' === getPhase().type && event.preventDefault(),
                cancel();
            },
          },
          {
            eventName: 'keydown',
            fn: function fn(event) {
              if ('PENDING' === getPhase().type) {
                cancel();
                return;
              }
              if (27 === event.keyCode) {
                event.preventDefault(), cancel();
                return;
              }
              preventStandardKeyEvents(event);
            },
          },
          { eventName: 'resize', fn: cancel },
          {
            eventName: 'scroll',
            options: { passive: !0, capture: !1 },
            fn: function fn() {
              'PENDING' === getPhase().type && cancel();
            },
          },
          {
            eventName: 'webkitmouseforcedown',
            fn: function fn(event) {
              var phase = getPhase();
              if (
                ('IDLE' !== phase.type || invariant(!1),
                phase.actions.shouldRespectForcePress())
              ) {
                cancel();
                return;
              }
              event.preventDefault();
            },
          },
          { eventName: supportedEventName, fn: cancel },
        ];
      }
      function useMouseSensor(api) {
        var phaseRef = (0, react.useRef)(idle$1),
          unbindEventsRef = (0, react.useRef)(noop),
          startCaptureBinding = use_memo_one_esm_useMemo(
            function () {
              return {
                eventName: 'mousedown',
                fn: function onMouseDown(event) {
                  if (
                    !event.defaultPrevented &&
                    0 === event.button &&
                    !event.ctrlKey &&
                    !event.metaKey &&
                    !event.shiftKey &&
                    !event.altKey
                  ) {
                    var draggableId = api.findClosestDraggableId(event);
                    if (draggableId) {
                      var actions = api.tryGetLock(draggableId, stop, {
                        sourceEvent: event,
                      });
                      if (actions) {
                        event.preventDefault();
                        var point = { x: event.clientX, y: event.clientY };
                        unbindEventsRef.current(),
                          startPendingDrag(actions, point);
                      }
                    }
                  }
                },
              };
            },
            [api],
          ),
          preventForcePressBinding = use_memo_one_esm_useMemo(
            function () {
              return {
                eventName: 'webkitmouseforcewillbegin',
                fn: function fn(event) {
                  if (!event.defaultPrevented) {
                    var id = api.findClosestDraggableId(event);
                    if (id) {
                      var options = api.findOptionsForDraggable(id);
                      options &&
                        !options.shouldRespectForcePress &&
                        api.canGetLock(id) &&
                        event.preventDefault();
                    }
                  }
                },
              };
            },
            [api],
          ),
          listenForCapture = useCallback(
            function listenForCapture() {
              unbindEventsRef.current = bindEvents(
                window,
                [preventForcePressBinding, startCaptureBinding],
                { passive: !1, capture: !0 },
              );
            },
            [preventForcePressBinding, startCaptureBinding],
          ),
          stop = useCallback(
            function () {
              'IDLE' !== phaseRef.current.type &&
                ((phaseRef.current = idle$1),
                unbindEventsRef.current(),
                listenForCapture());
            },
            [listenForCapture],
          ),
          cancel = useCallback(
            function () {
              var phase = phaseRef.current;
              stop(),
                'DRAGGING' === phase.type &&
                  phase.actions.cancel({ shouldBlockNextClick: !0 }),
                'PENDING' === phase.type && phase.actions.abort();
            },
            [stop],
          ),
          bindCapturingEvents = useCallback(
            function bindCapturingEvents() {
              var bindings = getCaptureBindings({
                cancel: cancel,
                completed: stop,
                getPhase: function getPhase() {
                  return phaseRef.current;
                },
                setPhase: function setPhase(phase) {
                  phaseRef.current = phase;
                },
              });
              unbindEventsRef.current = bindEvents(window, bindings, {
                capture: !0,
                passive: !1,
              });
            },
            [cancel, stop],
          ),
          startPendingDrag = useCallback(
            function startPendingDrag(actions, point) {
              'IDLE' !== phaseRef.current.type && invariant(!1),
                (phaseRef.current = {
                  type: 'PENDING',
                  point: point,
                  actions: actions,
                }),
                bindCapturingEvents();
            },
            [bindCapturingEvents],
          );
        react_beautiful_dnd_esm_useIsomorphicLayoutEffect(
          function mount() {
            return (
              listenForCapture(),
              function unmount() {
                unbindEventsRef.current();
              }
            );
          },
          [listenForCapture],
        );
      }
      function noop$1() {}
      var scrollJumpKeys =
        (((_scrollJumpKeys = {})[34] = !0),
        (_scrollJumpKeys[33] = !0),
        (_scrollJumpKeys[36] = !0),
        (_scrollJumpKeys[35] = !0),
        _scrollJumpKeys);
      function getDraggingBindings(actions, stop) {
        function cancel() {
          stop(), actions.cancel();
        }
        function drop() {
          stop(), actions.drop();
        }
        return [
          {
            eventName: 'keydown',
            fn: function fn(event) {
              if (27 === event.keyCode) {
                event.preventDefault(), cancel();
                return;
              }
              if (32 === event.keyCode) {
                event.preventDefault(), drop();
                return;
              }
              if (40 === event.keyCode) {
                event.preventDefault(), actions.moveDown();
                return;
              }
              if (38 === event.keyCode) {
                event.preventDefault(), actions.moveUp();
                return;
              }
              if (39 === event.keyCode) {
                event.preventDefault(), actions.moveRight();
                return;
              }
              if (37 === event.keyCode) {
                event.preventDefault(), actions.moveLeft();
                return;
              }
              if (scrollJumpKeys[event.keyCode]) {
                event.preventDefault();
                return;
              }
              preventStandardKeyEvents(event);
            },
          },
          { eventName: 'mousedown', fn: cancel },
          { eventName: 'mouseup', fn: cancel },
          { eventName: 'click', fn: cancel },
          { eventName: 'touchstart', fn: cancel },
          { eventName: 'resize', fn: cancel },
          { eventName: 'wheel', fn: cancel, options: { passive: !0 } },
          { eventName: supportedEventName, fn: cancel },
        ];
      }
      function useKeyboardSensor(api) {
        var unbindEventsRef = (0, react.useRef)(noop$1),
          startCaptureBinding = use_memo_one_esm_useMemo(
            function () {
              return {
                eventName: 'keydown',
                fn: function onKeyDown(event) {
                  if (!event.defaultPrevented && 32 === event.keyCode) {
                    var draggableId = api.findClosestDraggableId(event);
                    if (draggableId) {
                      var preDrag = api.tryGetLock(draggableId, stop, {
                        sourceEvent: event,
                      });
                      if (preDrag) {
                        event.preventDefault();
                        var isCapturing = !0,
                          actions = preDrag.snapLift();
                        unbindEventsRef.current(),
                          (unbindEventsRef.current = bindEvents(
                            window,
                            getDraggingBindings(actions, stop),
                            { capture: !0, passive: !1 },
                          ));
                      }
                    }
                  }
                  function stop() {
                    isCapturing || invariant(!1),
                      (isCapturing = !1),
                      unbindEventsRef.current(),
                      listenForCapture();
                  }
                },
              };
            },
            [api],
          ),
          listenForCapture = useCallback(
            function tryStartCapture() {
              unbindEventsRef.current = bindEvents(
                window,
                [startCaptureBinding],
                { passive: !1, capture: !0 },
              );
            },
            [startCaptureBinding],
          );
        react_beautiful_dnd_esm_useIsomorphicLayoutEffect(
          function mount() {
            return (
              listenForCapture(),
              function unmount() {
                unbindEventsRef.current();
              }
            );
          },
          [listenForCapture],
        );
      }
      var idle$2 = { type: 'IDLE' };
      function getWindowBindings(_ref) {
        var cancel = _ref.cancel,
          getPhase = _ref.getPhase;
        return [
          { eventName: 'orientationchange', fn: cancel },
          { eventName: 'resize', fn: cancel },
          {
            eventName: 'contextmenu',
            fn: function fn(event) {
              event.preventDefault();
            },
          },
          {
            eventName: 'keydown',
            fn: function fn(event) {
              if ('DRAGGING' !== getPhase().type) {
                cancel();
                return;
              }
              27 === event.keyCode && event.preventDefault(), cancel();
            },
          },
          { eventName: supportedEventName, fn: cancel },
        ];
      }
      function getHandleBindings(_ref2) {
        var cancel = _ref2.cancel,
          completed = _ref2.completed,
          getPhase = _ref2.getPhase;
        return [
          {
            eventName: 'touchmove',
            options: { capture: !1 },
            fn: function fn(event) {
              var phase = getPhase();
              if ('DRAGGING' !== phase.type) {
                cancel();
                return;
              }
              phase.hasMoved = !0;
              var _event$touches$ = event.touches[0],
                clientX = _event$touches$.clientX,
                clientY = _event$touches$.clientY;
              event.preventDefault(),
                phase.actions.move({ x: clientX, y: clientY });
            },
          },
          {
            eventName: 'touchend',
            fn: function fn(event) {
              var phase = getPhase();
              if ('DRAGGING' !== phase.type) {
                cancel();
                return;
              }
              event.preventDefault(),
                phase.actions.drop({ shouldBlockNextClick: !0 }),
                completed();
            },
          },
          {
            eventName: 'touchcancel',
            fn: function fn(event) {
              if ('DRAGGING' !== getPhase().type) {
                cancel();
                return;
              }
              event.preventDefault(), cancel();
            },
          },
          {
            eventName: 'touchforcechange',
            fn: function fn(event) {
              var phase = getPhase();
              'IDLE' !== phase.type || invariant(!1);
              var touch = event.touches[0];
              if (touch && touch.force >= 0.15) {
                var shouldRespect = phase.actions.shouldRespectForcePress();
                if ('PENDING' === phase.type) {
                  shouldRespect && cancel();
                  return;
                }
                if (shouldRespect) {
                  if (phase.hasMoved) {
                    event.preventDefault();
                    return;
                  }
                  cancel();
                  return;
                }
                event.preventDefault();
              }
            },
          },
          { eventName: supportedEventName, fn: cancel },
        ];
      }
      function useTouchSensor(api) {
        var phaseRef = (0, react.useRef)(idle$2),
          unbindEventsRef = (0, react.useRef)(noop),
          getPhase = useCallback(function getPhase() {
            return phaseRef.current;
          }, []),
          setPhase = useCallback(function setPhase(phase) {
            phaseRef.current = phase;
          }, []),
          startCaptureBinding = use_memo_one_esm_useMemo(
            function () {
              return {
                eventName: 'touchstart',
                fn: function onTouchStart(event) {
                  if (!event.defaultPrevented) {
                    var draggableId = api.findClosestDraggableId(event);
                    if (draggableId) {
                      var actions = api.tryGetLock(draggableId, stop, {
                        sourceEvent: event,
                      });
                      if (actions) {
                        var touch = event.touches[0],
                          clientX = touch.clientX,
                          clientY = touch.clientY;
                        unbindEventsRef.current(),
                          startPendingDrag(actions, { x: clientX, y: clientY });
                      }
                    }
                  }
                },
              };
            },
            [api],
          ),
          listenForCapture = useCallback(
            function listenForCapture() {
              unbindEventsRef.current = bindEvents(
                window,
                [startCaptureBinding],
                { capture: !0, passive: !1 },
              );
            },
            [startCaptureBinding],
          ),
          stop = useCallback(
            function () {
              var current = phaseRef.current;
              'IDLE' !== current.type &&
                ('PENDING' === current.type &&
                  clearTimeout(current.longPressTimerId),
                setPhase(idle$2),
                unbindEventsRef.current(),
                listenForCapture());
            },
            [listenForCapture, setPhase],
          ),
          cancel = useCallback(
            function () {
              var phase = phaseRef.current;
              stop(),
                'DRAGGING' === phase.type &&
                  phase.actions.cancel({ shouldBlockNextClick: !0 }),
                'PENDING' === phase.type && phase.actions.abort();
            },
            [stop],
          ),
          bindCapturingEvents = useCallback(
            function bindCapturingEvents() {
              var options = { capture: !0, passive: !1 },
                args = { cancel: cancel, completed: stop, getPhase: getPhase },
                unbindTarget = bindEvents(
                  window,
                  getHandleBindings(args),
                  options,
                ),
                unbindWindow = bindEvents(
                  window,
                  getWindowBindings(args),
                  options,
                );
              unbindEventsRef.current = function unbindAll() {
                unbindTarget(), unbindWindow();
              };
            },
            [cancel, getPhase, stop],
          ),
          startDragging = useCallback(
            function startDragging() {
              var phase = getPhase();
              'PENDING' !== phase.type && invariant(!1),
                setPhase({
                  type: 'DRAGGING',
                  actions: phase.actions.fluidLift(phase.point),
                  hasMoved: !1,
                });
            },
            [getPhase, setPhase],
          ),
          startPendingDrag = useCallback(
            function startPendingDrag(actions, point) {
              'IDLE' !== getPhase().type && invariant(!1),
                setPhase({
                  type: 'PENDING',
                  point: point,
                  actions: actions,
                  longPressTimerId: setTimeout(startDragging, 120),
                }),
                bindCapturingEvents();
            },
            [bindCapturingEvents, getPhase, setPhase, startDragging],
          );
        react_beautiful_dnd_esm_useIsomorphicLayoutEffect(
          function mount() {
            return (
              listenForCapture(),
              function unmount() {
                unbindEventsRef.current();
                var phase = getPhase();
                'PENDING' === phase.type &&
                  (clearTimeout(phase.longPressTimerId), setPhase(idle$2));
              }
            );
          },
          [getPhase, listenForCapture, setPhase],
        ),
          react_beautiful_dnd_esm_useIsomorphicLayoutEffect(
            function webkitHack() {
              return bindEvents(window, [
                {
                  eventName: 'touchmove',
                  fn: function fn() {},
                  options: { capture: !1, passive: !1 },
                },
              ]);
            },
            [],
          );
      }
      function useValidateSensorHooks(sensorHooks) {}
      var interactiveTagNames = {
        input: !0,
        button: !0,
        textarea: !0,
        select: !0,
        option: !0,
        optgroup: !0,
        video: !0,
        audio: !0,
      };
      function isAnInteractiveElement(parent, current) {
        if (null == current) return !1;
        if (interactiveTagNames[current.tagName.toLowerCase()]) return !0;
        var attribute = current.getAttribute('contenteditable');
        return (
          'true' === attribute ||
          '' === attribute ||
          (current !== parent &&
            isAnInteractiveElement(parent, current.parentElement))
        );
      }
      function isEventInInteractiveElement(draggable, event) {
        var target = event.target;
        return (
          !!isHtmlElement(target) && isAnInteractiveElement(draggable, target)
        );
      }
      function isElement(el) {
        return el instanceof getWindowFromEl(el).Element;
      }
      var supportedMatchesName = (function () {
        var base = 'matches';
        return 'undefined' == typeof document
          ? base
          : find(
              [base, 'msMatchesSelector', 'webkitMatchesSelector'],
              function (name) {
                return name in Element.prototype;
              },
            ) || base;
      })();
      function closestPonyfill(el, selector) {
        return null == el
          ? null
          : el[supportedMatchesName](selector)
            ? el
            : closestPonyfill(el.parentElement, selector);
      }
      function closest$1(el, selector) {
        return el.closest
          ? el.closest(selector)
          : closestPonyfill(el, selector);
      }
      function getSelector(contextId) {
        return '[' + dragHandle.contextId + '="' + contextId + '"]';
      }
      function findClosestDragHandleFromEvent(contextId, event) {
        var target = event.target;
        if (!isElement(target)) return null;
        var handle = closest$1(target, getSelector(contextId));
        return handle && isHtmlElement(handle) ? handle : null;
      }
      function tryGetClosestDraggableIdFromEvent(contextId, event) {
        var handle = findClosestDragHandleFromEvent(contextId, event);
        return handle ? handle.getAttribute(dragHandle.draggableId) : null;
      }
      function findDraggable(contextId, draggableId) {
        var selector = '[' + draggable.contextId + '="' + contextId + '"]',
          draggable$1 = find(
            toArray(document.querySelectorAll(selector)),
            function (el) {
              return el.getAttribute(draggable.id) === draggableId;
            },
          );
        return draggable$1 && isHtmlElement(draggable$1) ? draggable$1 : null;
      }
      function preventDefault(event) {
        event.preventDefault();
      }
      function _isActive(_ref) {
        var expected = _ref.expected,
          phase = _ref.phase,
          isLockActive = _ref.isLockActive;
        return _ref.shouldWarn, !!isLockActive() && expected === phase;
      }
      function canStart(_ref2) {
        var lockAPI = _ref2.lockAPI,
          store = _ref2.store,
          registry = _ref2.registry,
          draggableId = _ref2.draggableId;
        if (lockAPI.isClaimed()) return !1;
        var entry = registry.draggable.findById(draggableId);
        return !!(
          entry &&
          entry.options.isEnabled &&
          canStartDrag(store.getState(), draggableId)
        );
      }
      function tryStart(_ref3) {
        var lockAPI = _ref3.lockAPI,
          contextId = _ref3.contextId,
          store = _ref3.store,
          registry = _ref3.registry,
          draggableId = _ref3.draggableId,
          forceSensorStop = _ref3.forceSensorStop,
          sourceEvent = _ref3.sourceEvent;
        if (
          !canStart({
            lockAPI: lockAPI,
            store: store,
            registry: registry,
            draggableId: draggableId,
          })
        )
          return null;
        var entry = registry.draggable.getById(draggableId),
          el = findDraggable(contextId, entry.descriptor.id);
        if (
          !el ||
          (sourceEvent &&
            !entry.options.canDragInteractiveElements &&
            isEventInInteractiveElement(el, sourceEvent))
        )
          return null;
        var lock = lockAPI.claim(forceSensorStop || noop),
          phase = 'PRE_DRAG';
        function getShouldRespectForcePress() {
          return entry.options.shouldRespectForcePress;
        }
        function isLockActive() {
          return lockAPI.isActive(lock);
        }
        var tryDispatchWhenDragging = function tryDispatch(
          expected,
          getAction,
        ) {
          _isActive({
            expected: expected,
            phase: phase,
            isLockActive: isLockActive,
            shouldWarn: !0,
          }) && store.dispatch(getAction());
        }.bind(null, 'DRAGGING');
        function lift$1(args) {
          function completed() {
            lockAPI.release(), (phase = 'COMPLETED');
          }
          function finish(reason, options) {
            void 0 === options && (options = { shouldBlockNextClick: !1 }),
              args.cleanup(),
              options.shouldBlockNextClick &&
                setTimeout(
                  bindEvents(window, [
                    {
                      eventName: 'click',
                      fn: preventDefault,
                      options: { once: !0, passive: !1, capture: !0 },
                    },
                  ]),
                ),
              completed(),
              store.dispatch(drop({ reason: reason }));
          }
          return (
            'PRE_DRAG' !== phase &&
              (completed(), 'PRE_DRAG' !== phase && invariant(!1)),
            store.dispatch({ type: 'LIFT', payload: args.liftActionArgs }),
            (phase = 'DRAGGING'),
            (0, esm_extends.A)(
              {
                isActive: function isActive() {
                  return _isActive({
                    expected: 'DRAGGING',
                    phase: phase,
                    isLockActive: isLockActive,
                    shouldWarn: !1,
                  });
                },
                shouldRespectForcePress: getShouldRespectForcePress,
                drop: function drop(options) {
                  return finish('DROP', options);
                },
                cancel: function cancel(options) {
                  return finish('CANCEL', options);
                },
              },
              args.actions,
            )
          );
        }
        return {
          isActive: function isActive() {
            return _isActive({
              expected: 'PRE_DRAG',
              phase: phase,
              isLockActive: isLockActive,
              shouldWarn: !1,
            });
          },
          shouldRespectForcePress: getShouldRespectForcePress,
          fluidLift: function fluidLift(clientSelection) {
            var move$1 = raf_schd_esm(function (client) {
                tryDispatchWhenDragging(function () {
                  return move({ client: client });
                });
              }),
              api = lift$1({
                liftActionArgs: {
                  id: draggableId,
                  clientSelection: clientSelection,
                  movementMode: 'FLUID',
                },
                cleanup: function cleanup() {
                  return move$1.cancel();
                },
                actions: { move: move$1 },
              });
            return (0, esm_extends.A)({}, api, { move: move$1 });
          },
          snapLift: function snapLift() {
            return lift$1({
              liftActionArgs: {
                id: draggableId,
                clientSelection: getRect(el.getBoundingClientRect()).center,
                movementMode: 'SNAP',
              },
              cleanup: noop,
              actions: {
                moveUp: function moveUp$1() {
                  return tryDispatchWhenDragging(moveUp);
                },
                moveRight: function moveRight$1() {
                  return tryDispatchWhenDragging(moveRight);
                },
                moveDown: function moveDown$1() {
                  return tryDispatchWhenDragging(moveDown);
                },
                moveLeft: function moveLeft$1() {
                  return tryDispatchWhenDragging(moveLeft);
                },
              },
            });
          },
          abort: function abortPreDrag() {
            _isActive({
              expected: 'PRE_DRAG',
              phase: phase,
              isLockActive: isLockActive,
              shouldWarn: !0,
            }) && lockAPI.release();
          },
        };
      }
      var defaultSensors = [useMouseSensor, useKeyboardSensor, useTouchSensor];
      function useSensorMarshal(_ref4) {
        var contextId = _ref4.contextId,
          store = _ref4.store,
          registry = _ref4.registry,
          customSensors = _ref4.customSensors,
          useSensors = [].concat(
            _ref4.enableDefaultSensors ? defaultSensors : [],
            customSensors || [],
          ),
          lockAPI = (0, react.useState)(function () {
            return create();
          })[0],
          tryAbandonLock = useCallback(
            function tryAbandonLock(previous, current) {
              previous.isDragging &&
                !current.isDragging &&
                lockAPI.tryAbandon();
            },
            [lockAPI],
          );
        react_beautiful_dnd_esm_useIsomorphicLayoutEffect(
          function listenToStore() {
            var previous = store.getState();
            return store.subscribe(function () {
              var current = store.getState();
              tryAbandonLock(previous, current), (previous = current);
            });
          },
          [lockAPI, store, tryAbandonLock],
        ),
          react_beautiful_dnd_esm_useIsomorphicLayoutEffect(
            function () {
              return lockAPI.tryAbandon;
            },
            [lockAPI.tryAbandon],
          );
        for (
          var canGetLock = useCallback(
              function (draggableId) {
                return canStart({
                  lockAPI: lockAPI,
                  registry: registry,
                  store: store,
                  draggableId: draggableId,
                });
              },
              [lockAPI, registry, store],
            ),
            tryGetLock = useCallback(
              function (draggableId, forceStop, options) {
                return tryStart({
                  lockAPI: lockAPI,
                  registry: registry,
                  contextId: contextId,
                  store: store,
                  draggableId: draggableId,
                  forceSensorStop: forceStop,
                  sourceEvent:
                    options && options.sourceEvent ? options.sourceEvent : null,
                });
              },
              [contextId, lockAPI, registry, store],
            ),
            findClosestDraggableId = useCallback(
              function (event) {
                return tryGetClosestDraggableIdFromEvent(contextId, event);
              },
              [contextId],
            ),
            findOptionsForDraggable = useCallback(
              function (id) {
                var entry = registry.draggable.findById(id);
                return entry ? entry.options : null;
              },
              [registry.draggable],
            ),
            tryReleaseLock = useCallback(
              function tryReleaseLock() {
                lockAPI.isClaimed() &&
                  (lockAPI.tryAbandon(),
                  'IDLE' !== store.getState().phase && store.dispatch(flush()));
              },
              [lockAPI, store],
            ),
            isLockClaimed = useCallback(lockAPI.isClaimed, [lockAPI]),
            api = use_memo_one_esm_useMemo(
              function () {
                return {
                  canGetLock: canGetLock,
                  tryGetLock: tryGetLock,
                  findClosestDraggableId: findClosestDraggableId,
                  findOptionsForDraggable: findOptionsForDraggable,
                  tryReleaseLock: tryReleaseLock,
                  isLockClaimed: isLockClaimed,
                };
              },
              [
                canGetLock,
                tryGetLock,
                findClosestDraggableId,
                findOptionsForDraggable,
                tryReleaseLock,
                isLockClaimed,
              ],
            ),
            i = 0;
          i < useSensors.length;
          i++
        )
          useSensors[i](api);
      }
      function getStore(lazyRef) {
        return lazyRef.current || invariant(!1), lazyRef.current;
      }
      function App(props) {
        var contextId = props.contextId,
          setCallbacks = props.setCallbacks,
          sensors = props.sensors,
          nonce = props.nonce,
          dragHandleUsageInstructions = props.dragHandleUsageInstructions,
          lazyStoreRef = (0, react.useRef)(null);
        useStartupValidation();
        var lastPropsRef = usePrevious(props),
          getResponders = useCallback(
            function () {
              var props;
              return {
                onBeforeCapture: (props = lastPropsRef.current).onBeforeCapture,
                onBeforeDragStart: props.onBeforeDragStart,
                onDragStart: props.onDragStart,
                onDragEnd: props.onDragEnd,
                onDragUpdate: props.onDragUpdate,
              };
            },
            [lastPropsRef],
          ),
          announce = useAnnouncer(contextId),
          dragHandleUsageInstructionsId = useHiddenTextElement({
            contextId: contextId,
            text: dragHandleUsageInstructions,
          }),
          styleMarshal = useStyleMarshal(contextId, nonce),
          lazyDispatch = useCallback(function (action) {
            getStore(lazyStoreRef).dispatch(action);
          }, []),
          marshalCallbacks = use_memo_one_esm_useMemo(
            function () {
              return bindActionCreators(
                {
                  publishWhileDragging: publishWhileDragging,
                  updateDroppableScroll: updateDroppableScroll,
                  updateDroppableIsEnabled: updateDroppableIsEnabled,
                  updateDroppableIsCombineEnabled:
                    updateDroppableIsCombineEnabled,
                  collectionStarting: collectionStarting,
                },
                lazyDispatch,
              );
            },
            [lazyDispatch],
          ),
          registry = useRegistry(),
          dimensionMarshal = use_memo_one_esm_useMemo(
            function () {
              return createDimensionMarshal(registry, marshalCallbacks);
            },
            [registry, marshalCallbacks],
          ),
          autoScroller = use_memo_one_esm_useMemo(
            function () {
              return createAutoScroller(
                (0, esm_extends.A)(
                  {
                    scrollWindow: scrollWindow,
                    scrollDroppable: dimensionMarshal.scrollDroppable,
                  },
                  bindActionCreators({ move: move }, lazyDispatch),
                ),
              );
            },
            [dimensionMarshal.scrollDroppable, lazyDispatch],
          ),
          focusMarshal = useFocusMarshal(contextId),
          store = use_memo_one_esm_useMemo(
            function () {
              return react_beautiful_dnd_esm_createStore({
                announce: announce,
                autoScroller: autoScroller,
                dimensionMarshal: dimensionMarshal,
                focusMarshal: focusMarshal,
                getResponders: getResponders,
                styleMarshal: styleMarshal,
              });
            },
            [
              announce,
              autoScroller,
              dimensionMarshal,
              focusMarshal,
              getResponders,
              styleMarshal,
            ],
          );
        lazyStoreRef.current = store;
        var tryResetStore = useCallback(function () {
            var current = getStore(lazyStoreRef);
            'IDLE' !== current.getState().phase && current.dispatch(flush());
          }, []),
          isDragging = useCallback(function () {
            var state = getStore(lazyStoreRef).getState();
            return state.isDragging || 'DROP_ANIMATING' === state.phase;
          }, []);
        setCallbacks(
          use_memo_one_esm_useMemo(
            function () {
              return { isDragging: isDragging, tryAbort: tryResetStore };
            },
            [isDragging, tryResetStore],
          ),
        );
        var getCanLift = useCallback(function (id) {
            return canStartDrag(getStore(lazyStoreRef).getState(), id);
          }, []),
          getIsMovementAllowed = useCallback(function () {
            return isMovementAllowed(getStore(lazyStoreRef).getState());
          }, []),
          appContext = use_memo_one_esm_useMemo(
            function () {
              return {
                marshal: dimensionMarshal,
                focus: focusMarshal,
                contextId: contextId,
                canLift: getCanLift,
                isMovementAllowed: getIsMovementAllowed,
                dragHandleUsageInstructionsId: dragHandleUsageInstructionsId,
                registry: registry,
              };
            },
            [
              contextId,
              dimensionMarshal,
              dragHandleUsageInstructionsId,
              focusMarshal,
              getCanLift,
              getIsMovementAllowed,
              registry,
            ],
          );
        return (
          useSensorMarshal({
            contextId: contextId,
            store: store,
            registry: registry,
            customSensors: sensors,
            enableDefaultSensors: !1 !== props.enableDefaultSensors,
          }),
          (0, react.useEffect)(
            function () {
              return tryResetStore;
            },
            [tryResetStore],
          ),
          react.createElement(
            AppContext.Provider,
            { value: appContext },
            react.createElement(
              components_Provider,
              { context: StoreContext, store: store },
              props.children,
            ),
          )
        );
      }
      var count$1 = 0;
      function useInstanceCount() {
        return use_memo_one_esm_useMemo(function () {
          return '' + count$1++;
        }, []);
      }
      function DragDropContext(props) {
        var contextId = useInstanceCount(),
          dragHandleUsageInstructions =
            props.dragHandleUsageInstructions ||
            preset.dragHandleUsageInstructions;
        return react.createElement(
          ErrorBoundary,
          null,
          function (setCallbacks) {
            return react.createElement(
              App,
              {
                nonce: props.nonce,
                contextId: contextId,
                setCallbacks: setCallbacks,
                dragHandleUsageInstructions: dragHandleUsageInstructions,
                enableDefaultSensors: props.enableDefaultSensors,
                sensors: props.sensors,
                onBeforeCapture: props.onBeforeCapture,
                onBeforeDragStart: props.onBeforeDragStart,
                onDragStart: props.onDragStart,
                onDragUpdate: props.onDragUpdate,
                onDragEnd: props.onDragEnd,
              },
              props.children,
            );
          },
        );
      }
      var isEqual$1 = function isEqual(base) {
          return function (value) {
            return base === value;
          };
        },
        isScroll = isEqual$1('scroll'),
        isAuto = isEqual$1('auto');
      isEqual$1('visible');
      var isEither = function isEither(overflow, fn) {
          return fn(overflow.overflowX) || fn(overflow.overflowY);
        },
        isElementScrollable = function isElementScrollable(el) {
          var style = window.getComputedStyle(el),
            overflow = {
              overflowX: style.overflowX,
              overflowY: style.overflowY,
            };
          return isEither(overflow, isScroll) || isEither(overflow, isAuto);
        },
        getScroll$1 = function (el) {
          return { x: el.scrollLeft, y: el.scrollTop };
        },
        getDroppableDimension = function (_ref) {
          var descriptor = _ref.descriptor,
            isEnabled = _ref.isEnabled,
            isCombineEnabled = _ref.isCombineEnabled,
            isFixedOnPage = _ref.isFixedOnPage,
            direction = _ref.direction,
            client = _ref.client,
            page = _ref.page,
            closest = _ref.closest,
            frame = (function () {
              if (!closest) return null;
              var scrollSize = closest.scrollSize,
                frameClient = closest.client,
                maxScroll = getMaxScroll({
                  scrollHeight: scrollSize.scrollHeight,
                  scrollWidth: scrollSize.scrollWidth,
                  height: frameClient.paddingBox.height,
                  width: frameClient.paddingBox.width,
                });
              return {
                pageMarginBox: closest.page.marginBox,
                frameClient: frameClient,
                scrollSize: scrollSize,
                shouldClipSubject: closest.shouldClipSubject,
                scroll: {
                  initial: closest.scroll,
                  current: closest.scroll,
                  max: maxScroll,
                  diff: { value: origin, displacement: origin },
                },
              };
            })(),
            axis = 'vertical' === direction ? vertical : horizontal,
            subject = getSubject({
              page: page,
              withPlaceholder: null,
              axis: axis,
              frame: frame,
            });
          return {
            descriptor: descriptor,
            isCombineEnabled: isCombineEnabled,
            isFixedOnPage: isFixedOnPage,
            axis: axis,
            isEnabled: isEnabled,
            client: client,
            page: page,
            frame: frame,
            subject: subject,
          };
        },
        getClient = function getClient(targetRef, closestScrollable) {
          var base = getBox(targetRef);
          if (!closestScrollable || targetRef !== closestScrollable)
            return base;
          var top = base.paddingBox.top - closestScrollable.scrollTop,
            left = base.paddingBox.left - closestScrollable.scrollLeft,
            bottom = top + closestScrollable.scrollHeight;
          return createBox({
            borderBox: expand(
              {
                top: top,
                right: left + closestScrollable.scrollWidth,
                bottom: bottom,
                left: left,
              },
              base.border,
            ),
            margin: base.margin,
            border: base.border,
            padding: base.padding,
          });
        },
        getDimension = function (_ref) {
          var ref = _ref.ref,
            descriptor = _ref.descriptor,
            env = _ref.env,
            windowScroll = _ref.windowScroll,
            direction = _ref.direction,
            isDropDisabled = _ref.isDropDisabled,
            isCombineEnabled = _ref.isCombineEnabled,
            shouldClipSubject = _ref.shouldClipSubject,
            closestScrollable = env.closestScrollable,
            client = getClient(ref, closestScrollable),
            page = withScroll(client, windowScroll),
            closest = (function () {
              if (!closestScrollable) return null;
              var frameClient = getBox(closestScrollable),
                scrollSize = {
                  scrollHeight: closestScrollable.scrollHeight,
                  scrollWidth: closestScrollable.scrollWidth,
                };
              return {
                client: frameClient,
                page: withScroll(frameClient, windowScroll),
                scroll: getScroll$1(closestScrollable),
                scrollSize: scrollSize,
                shouldClipSubject: shouldClipSubject,
              };
            })();
          return getDroppableDimension({
            descriptor: descriptor,
            isEnabled: !isDropDisabled,
            isCombineEnabled: isCombineEnabled,
            isFixedOnPage: env.isFixedOnPage,
            direction: direction,
            client: client,
            page: page,
            closest: closest,
          });
        },
        immediate = { passive: !1 },
        delayed = { passive: !0 },
        getListenerOptions = function (options) {
          return options.shouldPublishImmediately ? immediate : delayed;
        };
      function useRequiredContext(Context) {
        var result = (0, react.useContext)(Context);
        return result || invariant(!1), result;
      }
      var getClosestScrollableFromDrag = function getClosestScrollableFromDrag(
        dragging,
      ) {
        return (dragging && dragging.env.closestScrollable) || null;
      };
      function useDroppablePublisher(args) {
        var whileDraggingRef = (0, react.useRef)(null),
          appContext = useRequiredContext(AppContext),
          uniqueId = useUniqueId('droppable'),
          registry = appContext.registry,
          marshal = appContext.marshal,
          previousRef = usePrevious(args),
          descriptor = use_memo_one_esm_useMemo(
            function () {
              return { id: args.droppableId, type: args.type, mode: args.mode };
            },
            [args.droppableId, args.mode, args.type],
          ),
          publishedDescriptorRef = (0, react.useRef)(descriptor),
          memoizedUpdateScroll = use_memo_one_esm_useMemo(
            function () {
              return memoize_one_esm(function (x, y) {
                whileDraggingRef.current || invariant(!1),
                  marshal.updateDroppableScroll(descriptor.id, { x: x, y: y });
              });
            },
            [descriptor.id, marshal],
          ),
          getClosestScroll = useCallback(function () {
            var dragging = whileDraggingRef.current;
            return dragging && dragging.env.closestScrollable
              ? getScroll$1(dragging.env.closestScrollable)
              : origin;
          }, []),
          updateScroll = useCallback(
            function () {
              var scroll = getClosestScroll();
              memoizedUpdateScroll(scroll.x, scroll.y);
            },
            [getClosestScroll, memoizedUpdateScroll],
          ),
          scheduleScrollUpdate = use_memo_one_esm_useMemo(
            function () {
              return raf_schd_esm(updateScroll);
            },
            [updateScroll],
          ),
          onClosestScroll = useCallback(
            function () {
              var dragging = whileDraggingRef.current,
                closest = getClosestScrollableFromDrag(dragging);
              if (
                ((dragging && closest) || invariant(!1),
                dragging.scrollOptions.shouldPublishImmediately)
              ) {
                updateScroll();
                return;
              }
              scheduleScrollUpdate();
            },
            [scheduleScrollUpdate, updateScroll],
          ),
          getDimensionAndWatchScroll = useCallback(
            function (windowScroll, options) {
              whileDraggingRef.current && invariant(!1);
              var previous = previousRef.current,
                ref = previous.getDroppableRef();
              ref || invariant(!1);
              var env = {
                  closestScrollable: (function getClosestScrollable(el) {
                    return null == el
                      ? null
                      : el === document.body
                        ? null
                        : el === document.documentElement
                          ? null
                          : isElementScrollable(el)
                            ? el
                            : getClosestScrollable(el.parentElement);
                  })(ref),
                  isFixedOnPage: (function getIsFixed(el) {
                    return (
                      !!el &&
                      ('fixed' === window.getComputedStyle(el).position ||
                        getIsFixed(el.parentElement))
                    );
                  })(ref),
                },
                dragging = {
                  ref: ref,
                  descriptor: descriptor,
                  env: env,
                  scrollOptions: options,
                };
              whileDraggingRef.current = dragging;
              var dimension = getDimension({
                  ref: ref,
                  descriptor: descriptor,
                  env: env,
                  windowScroll: windowScroll,
                  direction: previous.direction,
                  isDropDisabled: previous.isDropDisabled,
                  isCombineEnabled: previous.isCombineEnabled,
                  shouldClipSubject: !previous.ignoreContainerClipping,
                }),
                scrollable = env.closestScrollable;
              return (
                scrollable &&
                  (scrollable.setAttribute(
                    scrollContainer.contextId,
                    appContext.contextId,
                  ),
                  scrollable.addEventListener(
                    'scroll',
                    onClosestScroll,
                    getListenerOptions(dragging.scrollOptions),
                  )),
                dimension
              );
            },
            [appContext.contextId, descriptor, onClosestScroll, previousRef],
          ),
          getScrollWhileDragging = useCallback(function () {
            var dragging = whileDraggingRef.current,
              closest = getClosestScrollableFromDrag(dragging);
            return (dragging && closest) || invariant(!1), getScroll$1(closest);
          }, []),
          dragStopped = useCallback(
            function () {
              var dragging = whileDraggingRef.current;
              dragging || invariant(!1);
              var closest = getClosestScrollableFromDrag(dragging);
              (whileDraggingRef.current = null),
                closest &&
                  (scheduleScrollUpdate.cancel(),
                  closest.removeAttribute(scrollContainer.contextId),
                  closest.removeEventListener(
                    'scroll',
                    onClosestScroll,
                    getListenerOptions(dragging.scrollOptions),
                  ));
            },
            [onClosestScroll, scheduleScrollUpdate],
          ),
          scroll = useCallback(function (change) {
            var dragging = whileDraggingRef.current;
            dragging || invariant(!1);
            var closest = getClosestScrollableFromDrag(dragging);
            closest || invariant(!1),
              (closest.scrollTop += change.y),
              (closest.scrollLeft += change.x);
          }, []),
          callbacks = use_memo_one_esm_useMemo(
            function () {
              return {
                getDimensionAndWatchScroll: getDimensionAndWatchScroll,
                getScrollWhileDragging: getScrollWhileDragging,
                dragStopped: dragStopped,
                scroll: scroll,
              };
            },
            [
              dragStopped,
              getDimensionAndWatchScroll,
              getScrollWhileDragging,
              scroll,
            ],
          ),
          entry = use_memo_one_esm_useMemo(
            function () {
              return {
                uniqueId: uniqueId,
                descriptor: descriptor,
                callbacks: callbacks,
              };
            },
            [callbacks, descriptor, uniqueId],
          );
        react_beautiful_dnd_esm_useIsomorphicLayoutEffect(
          function () {
            return (
              (publishedDescriptorRef.current = entry.descriptor),
              registry.droppable.register(entry),
              function () {
                whileDraggingRef.current && dragStopped(),
                  registry.droppable.unregister(entry);
              }
            );
          },
          [
            callbacks,
            descriptor,
            dragStopped,
            entry,
            marshal,
            registry.droppable,
          ],
        ),
          react_beautiful_dnd_esm_useIsomorphicLayoutEffect(
            function () {
              whileDraggingRef.current &&
                marshal.updateDroppableIsEnabled(
                  publishedDescriptorRef.current.id,
                  !args.isDropDisabled,
                );
            },
            [args.isDropDisabled, marshal],
          ),
          react_beautiful_dnd_esm_useIsomorphicLayoutEffect(
            function () {
              whileDraggingRef.current &&
                marshal.updateDroppableIsCombineEnabled(
                  publishedDescriptorRef.current.id,
                  args.isCombineEnabled,
                );
            },
            [args.isCombineEnabled, marshal],
          );
      }
      function noop$2() {}
      var empty = {
          width: 0,
          height: 0,
          margin: { top: 0, right: 0, bottom: 0, left: 0 },
        },
        getSize = function getSize(_ref) {
          var isAnimatingOpenOnMount = _ref.isAnimatingOpenOnMount,
            placeholder = _ref.placeholder,
            animate = _ref.animate;
          return isAnimatingOpenOnMount || 'close' === animate
            ? empty
            : {
                height: placeholder.client.borderBox.height,
                width: placeholder.client.borderBox.width,
                margin: placeholder.client.margin,
              };
        },
        getStyle = function getStyle(_ref2) {
          var isAnimatingOpenOnMount = _ref2.isAnimatingOpenOnMount,
            placeholder = _ref2.placeholder,
            animate = _ref2.animate,
            size = getSize({
              isAnimatingOpenOnMount: isAnimatingOpenOnMount,
              placeholder: placeholder,
              animate: animate,
            });
          return {
            display: placeholder.display,
            boxSizing: 'border-box',
            width: size.width,
            height: size.height,
            marginTop: size.margin.top,
            marginRight: size.margin.right,
            marginBottom: size.margin.bottom,
            marginLeft: size.margin.left,
            flexShrink: '0',
            flexGrow: '0',
            pointerEvents: 'none',
            transition: 'none' !== animate ? transitions.placeholder : null,
          };
        };
      function Placeholder(props) {
        var animateOpenTimerRef = (0, react.useRef)(null),
          tryClearAnimateOpenTimer = useCallback(function () {
            animateOpenTimerRef.current &&
              (clearTimeout(animateOpenTimerRef.current),
              (animateOpenTimerRef.current = null));
          }, []),
          animate = props.animate,
          onTransitionEnd = props.onTransitionEnd,
          onClose = props.onClose,
          contextId = props.contextId,
          _useState = (0, react.useState)('open' === props.animate),
          isAnimatingOpenOnMount = _useState[0],
          setIsAnimatingOpenOnMount = _useState[1];
        (0, react.useEffect)(
          function () {
            return isAnimatingOpenOnMount
              ? 'open' !== animate
                ? (tryClearAnimateOpenTimer(),
                  setIsAnimatingOpenOnMount(!1),
                  noop$2)
                : animateOpenTimerRef.current
                  ? noop$2
                  : ((animateOpenTimerRef.current = setTimeout(function () {
                      (animateOpenTimerRef.current = null),
                        setIsAnimatingOpenOnMount(!1);
                    })),
                    tryClearAnimateOpenTimer)
              : noop$2;
          },
          [animate, isAnimatingOpenOnMount, tryClearAnimateOpenTimer],
        );
        var onSizeChangeEnd = useCallback(
            function (event) {
              'height' === event.propertyName &&
                (onTransitionEnd(), 'close' === animate && onClose());
            },
            [animate, onClose, onTransitionEnd],
          ),
          style = getStyle({
            isAnimatingOpenOnMount: isAnimatingOpenOnMount,
            animate: props.animate,
            placeholder: props.placeholder,
          });
        return react.createElement(props.placeholder.tagName, {
          style: style,
          'data-rbd-placeholder-context-id': contextId,
          onTransitionEnd: onSizeChangeEnd,
          ref: props.innerRef,
        });
      }
      var Placeholder$1 = react.memo(Placeholder),
        DroppableContext = react.createContext(null);
      function checkIsValidInnerRef(el) {
        (el && isHtmlElement(el)) || invariant(!1);
      }
      function isBoolean(value) {
        return 'boolean' == typeof value;
      }
      function runChecks(args, checks) {
        checks.forEach(function (check) {
          return check(args);
        });
      }
      var shared = [
          function required(_ref) {
            var props = _ref.props;
            props.droppableId || invariant(!1),
              'string' != typeof props.droppableId && invariant(!1);
          },
          function _boolean(_ref2) {
            var props = _ref2.props;
            isBoolean(props.isDropDisabled) || invariant(!1),
              isBoolean(props.isCombineEnabled) || invariant(!1),
              isBoolean(props.ignoreContainerClipping) || invariant(!1);
          },
          function ref(_ref3) {
            checkIsValidInnerRef((0, _ref3.getDroppableRef)());
          },
        ],
        standard = [
          function placeholder(_ref4) {
            var props = _ref4.props,
              getPlaceholderRef = _ref4.getPlaceholderRef;
            if (!props.placeholder || getPlaceholderRef()) return;
          },
        ],
        virtual = [
          function hasClone(_ref5) {
            _ref5.props.renderClone || invariant(!1);
          },
          function hasNoPlaceholder(_ref6) {
            (0, _ref6.getPlaceholderRef)() && invariant(!1);
          },
        ];
      function useValidation(args) {}
      var AnimateInOut = (function (_React$PureComponent) {
          function AnimateInOut() {
            for (
              var _this, _len = arguments.length, args = Array(_len), _key = 0;
              _key < _len;
              _key++
            )
              args[_key] = arguments[_key];
            return (
              ((_this =
                _React$PureComponent.call.apply(
                  _React$PureComponent,
                  [this].concat(args),
                ) || this).state = {
                isVisible: !!_this.props.on,
                data: _this.props.on,
                animate:
                  _this.props.shouldAnimate && _this.props.on ? 'open' : 'none',
              }),
              (_this.onClose = function () {
                'close' === _this.state.animate &&
                  _this.setState({ isVisible: !1 });
              }),
              _this
            );
          }
          return (
            (0, inheritsLoose.A)(AnimateInOut, _React$PureComponent),
            (AnimateInOut.getDerivedStateFromProps =
              function getDerivedStateFromProps(props, state) {
                return props.shouldAnimate
                  ? props.on
                    ? { isVisible: !0, data: props.on, animate: 'open' }
                    : state.isVisible
                      ? { isVisible: !0, data: state.data, animate: 'close' }
                      : { isVisible: !1, animate: 'close', data: null }
                  : { isVisible: !!props.on, data: props.on, animate: 'none' };
              }),
            (AnimateInOut.prototype.render = function render() {
              if (!this.state.isVisible) return null;
              var provided = {
                onClose: this.onClose,
                data: this.state.data,
                animate: this.state.animate,
              };
              return this.props.children(provided);
            }),
            AnimateInOut
          );
        })(react.PureComponent),
        zIndexOptions = { dragging: 5e3, dropAnimating: 4500 };
      function getDraggingStyle(dragging) {
        var box = dragging.dimension.client,
          offset = dragging.offset,
          combineWith = dragging.combineWith,
          dropping = dragging.dropping,
          isCombining = !!combineWith,
          shouldAnimate =
            null != dragging.forceShouldAnimate
              ? dragging.forceShouldAnimate
              : 'SNAP' === dragging.mode,
          isDropAnimating = !!dropping,
          transform = isDropAnimating
            ? transforms.drop(offset, isCombining)
            : transforms.moveTo(offset);
        return {
          position: 'fixed',
          top: box.marginBox.top,
          left: box.marginBox.left,
          boxSizing: 'border-box',
          width: box.borderBox.width,
          height: box.borderBox.height,
          transition: dropping
            ? transitions.drop(dropping.duration)
            : shouldAnimate
              ? transitions.snap
              : transitions.fluid,
          transform: transform,
          opacity: isCombining
            ? isDropAnimating
              ? combine.opacity.drop
              : combine.opacity.combining
            : null,
          zIndex: isDropAnimating
            ? zIndexOptions.dropAnimating
            : zIndexOptions.dragging,
          pointerEvents: 'none',
        };
      }
      function getSecondaryStyle(secondary) {
        return {
          transform: transforms.moveTo(secondary.offset),
          transition: secondary.shouldAnimateDisplacement ? null : 'none',
        };
      }
      function getStyle$1(mapped) {
        return 'DRAGGING' === mapped.type
          ? getDraggingStyle(mapped)
          : getSecondaryStyle(mapped);
      }
      function getDimension$1(descriptor, el, windowScroll) {
        void 0 === windowScroll && (windowScroll = origin);
        var computedStyles = window.getComputedStyle(el),
          client = calculateBox(el.getBoundingClientRect(), computedStyles),
          page = withScroll(client, windowScroll);
        return {
          descriptor: descriptor,
          placeholder: {
            client: client,
            tagName: el.tagName.toLowerCase(),
            display: computedStyles.display,
          },
          displaceBy: { x: client.marginBox.width, y: client.marginBox.height },
          client: client,
          page: page,
        };
      }
      function useDraggablePublisher(args) {
        var uniqueId = useUniqueId('draggable'),
          descriptor = args.descriptor,
          registry = args.registry,
          getDraggableRef = args.getDraggableRef,
          canDragInteractiveElements = args.canDragInteractiveElements,
          shouldRespectForcePress = args.shouldRespectForcePress,
          isEnabled = args.isEnabled,
          options = use_memo_one_esm_useMemo(
            function () {
              return {
                canDragInteractiveElements: canDragInteractiveElements,
                shouldRespectForcePress: shouldRespectForcePress,
                isEnabled: isEnabled,
              };
            },
            [canDragInteractiveElements, isEnabled, shouldRespectForcePress],
          ),
          getDimension = useCallback(
            function (windowScroll) {
              var el = getDraggableRef();
              return (
                el || invariant(!1),
                getDimension$1(descriptor, el, windowScroll)
              );
            },
            [descriptor, getDraggableRef],
          ),
          entry = use_memo_one_esm_useMemo(
            function () {
              return {
                uniqueId: uniqueId,
                descriptor: descriptor,
                options: options,
                getDimension: getDimension,
              };
            },
            [descriptor, getDimension, options, uniqueId],
          ),
          publishedRef = (0, react.useRef)(entry),
          isFirstPublishRef = (0, react.useRef)(!0);
        react_beautiful_dnd_esm_useIsomorphicLayoutEffect(
          function () {
            return (
              registry.draggable.register(publishedRef.current),
              function () {
                return registry.draggable.unregister(publishedRef.current);
              }
            );
          },
          [registry.draggable],
        ),
          react_beautiful_dnd_esm_useIsomorphicLayoutEffect(
            function () {
              if (isFirstPublishRef.current) {
                isFirstPublishRef.current = !1;
                return;
              }
              var last = publishedRef.current;
              (publishedRef.current = entry),
                registry.draggable.update(entry, last);
            },
            [entry, registry.draggable],
          );
      }
      function useValidation$1(props, contextId, getRef) {}
      function useClonePropValidation(isClone) {}
      function preventHtml5Dnd(event) {
        event.preventDefault();
      }
      function Draggable(props) {
        var ref = (0, react.useRef)(null),
          setRef = useCallback(function (el) {
            ref.current = el;
          }, []),
          getRef = useCallback(function () {
            return ref.current;
          }, []),
          _useRequiredContext = useRequiredContext(AppContext),
          contextId = _useRequiredContext.contextId,
          dragHandleUsageInstructionsId =
            _useRequiredContext.dragHandleUsageInstructionsId,
          registry = _useRequiredContext.registry,
          _useRequiredContext2 = useRequiredContext(DroppableContext),
          type = _useRequiredContext2.type,
          droppableId = _useRequiredContext2.droppableId,
          descriptor = use_memo_one_esm_useMemo(
            function () {
              return {
                id: props.draggableId,
                index: props.index,
                type: type,
                droppableId: droppableId,
              };
            },
            [props.draggableId, props.index, type, droppableId],
          ),
          children = props.children,
          draggableId = props.draggableId,
          isEnabled = props.isEnabled,
          shouldRespectForcePress = props.shouldRespectForcePress,
          canDragInteractiveElements = props.canDragInteractiveElements,
          isClone = props.isClone,
          mapped = props.mapped,
          dropAnimationFinishedAction = props.dropAnimationFinished;
        useValidation$1(props, contextId, getRef),
          isClone ||
            useDraggablePublisher(
              use_memo_one_esm_useMemo(
                function () {
                  return {
                    descriptor: descriptor,
                    registry: registry,
                    getDraggableRef: getRef,
                    canDragInteractiveElements: canDragInteractiveElements,
                    shouldRespectForcePress: shouldRespectForcePress,
                    isEnabled: isEnabled,
                  };
                },
                [
                  descriptor,
                  registry,
                  getRef,
                  canDragInteractiveElements,
                  shouldRespectForcePress,
                  isEnabled,
                ],
              ),
            );
        var dragHandleProps = use_memo_one_esm_useMemo(
            function () {
              return isEnabled
                ? {
                    tabIndex: 0,
                    role: 'button',
                    'aria-describedby': dragHandleUsageInstructionsId,
                    'data-rbd-drag-handle-draggable-id': draggableId,
                    'data-rbd-drag-handle-context-id': contextId,
                    draggable: !1,
                    onDragStart: preventHtml5Dnd,
                  }
                : null;
            },
            [contextId, dragHandleUsageInstructionsId, draggableId, isEnabled],
          ),
          onMoveEnd = useCallback(
            function (event) {
              'DRAGGING' === mapped.type &&
                mapped.dropping &&
                'transform' === event.propertyName &&
                dropAnimationFinishedAction();
            },
            [dropAnimationFinishedAction, mapped],
          ),
          provided = use_memo_one_esm_useMemo(
            function () {
              return {
                innerRef: setRef,
                draggableProps: {
                  'data-rbd-draggable-context-id': contextId,
                  'data-rbd-draggable-id': draggableId,
                  style: getStyle$1(mapped),
                  onTransitionEnd:
                    'DRAGGING' === mapped.type && mapped.dropping
                      ? onMoveEnd
                      : null,
                },
                dragHandleProps: dragHandleProps,
              };
            },
            [
              contextId,
              dragHandleProps,
              draggableId,
              mapped,
              onMoveEnd,
              setRef,
            ],
          ),
          rubric = use_memo_one_esm_useMemo(
            function () {
              return {
                draggableId: descriptor.id,
                type: descriptor.type,
                source: {
                  index: descriptor.index,
                  droppableId: descriptor.droppableId,
                },
              };
            },
            [
              descriptor.droppableId,
              descriptor.id,
              descriptor.index,
              descriptor.type,
            ],
          );
        return children(provided, mapped.snapshot, rubric);
      }
      var isStrictEqual = function (a, b) {
          return a === b;
        },
        whatIsDraggedOverFromResult = function (result) {
          var combine = result.combine,
            destination = result.destination;
          return destination
            ? destination.droppableId
            : combine
              ? combine.droppableId
              : null;
        };
      function getDraggableSelector() {
        var memoizedOffset = memoize_one_esm(function (x, y) {
            return { x: x, y: y };
          }),
          getMemoizedSnapshot = memoize_one_esm(
            function (mode, isClone, draggingOver, combineWith, dropping) {
              return {
                isDragging: !0,
                isClone: isClone,
                isDropAnimating: !!dropping,
                dropAnimation: dropping,
                mode: mode,
                draggingOver: draggingOver,
                combineWith: combineWith,
                combineTargetFor: null,
              };
            },
          ),
          getMemoizedProps = memoize_one_esm(
            function (
              offset,
              mode,
              dimension,
              isClone,
              draggingOver,
              combineWith,
              forceShouldAnimate,
            ) {
              return {
                mapped: {
                  type: 'DRAGGING',
                  dropping: null,
                  draggingOver: draggingOver,
                  combineWith: combineWith,
                  mode: mode,
                  offset: offset,
                  dimension: dimension,
                  forceShouldAnimate: forceShouldAnimate,
                  snapshot: getMemoizedSnapshot(
                    mode,
                    isClone,
                    draggingOver,
                    combineWith,
                    null,
                  ),
                },
              };
            },
          );
        return function selector(state, ownProps) {
          if (state.isDragging) {
            if (state.critical.draggable.id !== ownProps.draggableId)
              return null;
            var impact,
              offset = state.current.client.offset,
              dimension = state.dimensions.draggables[ownProps.draggableId],
              draggingOver = whatIsDraggedOver(state.impact),
              combineWith =
                (impact = state.impact).at && 'COMBINE' === impact.at.type
                  ? impact.at.combine.draggableId
                  : null,
              forceShouldAnimate = state.forceShouldAnimate;
            return getMemoizedProps(
              memoizedOffset(offset.x, offset.y),
              state.movementMode,
              dimension,
              ownProps.isClone,
              draggingOver,
              combineWith,
              forceShouldAnimate,
            );
          }
          if ('DROP_ANIMATING' === state.phase) {
            var completed = state.completed;
            if (completed.result.draggableId !== ownProps.draggableId)
              return null;
            var isClone = ownProps.isClone,
              _dimension = state.dimensions.draggables[ownProps.draggableId],
              result = completed.result,
              mode = result.mode,
              _draggingOver = whatIsDraggedOverFromResult(result),
              _combineWith = result.combine ? result.combine.draggableId : null,
              dropping = {
                duration: state.dropDuration,
                curve: curves.drop,
                moveTo: state.newHomeClientOffset,
                opacity: _combineWith ? combine.opacity.drop : null,
                scale: _combineWith ? combine.scale.drop : null,
              };
            return {
              mapped: {
                type: 'DRAGGING',
                offset: state.newHomeClientOffset,
                dimension: _dimension,
                dropping: dropping,
                draggingOver: _draggingOver,
                combineWith: _combineWith,
                mode: mode,
                forceShouldAnimate: null,
                snapshot: getMemoizedSnapshot(
                  mode,
                  isClone,
                  _draggingOver,
                  _combineWith,
                  dropping,
                ),
              },
            };
          }
          return null;
        };
      }
      function getSecondarySnapshot(combineTargetFor) {
        return {
          isDragging: !1,
          isDropAnimating: !1,
          isClone: !1,
          dropAnimation: null,
          mode: null,
          draggingOver: null,
          combineTargetFor: combineTargetFor,
          combineWith: null,
        };
      }
      var atRest = {
        mapped: {
          type: 'SECONDARY',
          offset: origin,
          combineTargetFor: null,
          shouldAnimateDisplacement: !0,
          snapshot: getSecondarySnapshot(null),
        },
      };
      function getSecondarySelector() {
        var memoizedOffset = memoize_one_esm(function (x, y) {
            return { x: x, y: y };
          }),
          getMemoizedSnapshot = memoize_one_esm(getSecondarySnapshot),
          getMemoizedProps = memoize_one_esm(
            function (offset, combineTargetFor, shouldAnimateDisplacement) {
              return (
                void 0 === combineTargetFor && (combineTargetFor = null),
                {
                  mapped: {
                    type: 'SECONDARY',
                    offset: offset,
                    combineTargetFor: combineTargetFor,
                    shouldAnimateDisplacement: shouldAnimateDisplacement,
                    snapshot: getMemoizedSnapshot(combineTargetFor),
                  },
                }
              );
            },
          ),
          getFallback = function getFallback(combineTargetFor) {
            return combineTargetFor
              ? getMemoizedProps(origin, combineTargetFor, !0)
              : null;
          },
          getProps = function getProps(
            ownId,
            draggingId,
            impact,
            afterCritical,
          ) {
            var visualDisplacement = impact.displaced.visible[ownId],
              isAfterCriticalInVirtualList = !!(
                afterCritical.inVirtualList && afterCritical.effected[ownId]
              ),
              combine = tryGetCombine(impact),
              combineTargetFor =
                combine && combine.draggableId === ownId ? draggingId : null;
            if (!visualDisplacement) {
              if (!isAfterCriticalInVirtualList)
                return getFallback(combineTargetFor);
              if (impact.displaced.invisible[ownId]) return null;
              var change = negate(afterCritical.displacedBy.point);
              return getMemoizedProps(
                memoizedOffset(change.x, change.y),
                combineTargetFor,
                !0,
              );
            }
            if (isAfterCriticalInVirtualList)
              return getFallback(combineTargetFor);
            var displaceBy = impact.displacedBy.point;
            return getMemoizedProps(
              memoizedOffset(displaceBy.x, displaceBy.y),
              combineTargetFor,
              visualDisplacement.shouldAnimate,
            );
          };
        return function selector(state, ownProps) {
          if (state.isDragging)
            return state.critical.draggable.id === ownProps.draggableId
              ? null
              : getProps(
                  ownProps.draggableId,
                  state.critical.draggable.id,
                  state.impact,
                  state.afterCritical,
                );
          if ('DROP_ANIMATING' === state.phase) {
            var completed = state.completed;
            return completed.result.draggableId === ownProps.draggableId
              ? null
              : getProps(
                  ownProps.draggableId,
                  completed.result.draggableId,
                  completed.impact,
                  completed.afterCritical,
                );
          }
          return null;
        };
      }
      var ConnectedDraggable = connect(
        function makeMapStateToProps() {
          var draggingSelector = getDraggableSelector(),
            secondarySelector = getSecondarySelector();
          return function selector(state, ownProps) {
            return (
              draggingSelector(state, ownProps) ||
              secondarySelector(state, ownProps) ||
              atRest
            );
          };
        },
        { dropAnimationFinished: dropAnimationFinished },
        null,
        { context: StoreContext, pure: !0, areStatePropsEqual: isStrictEqual },
      )(Draggable);
      function PrivateDraggable(props) {
        return useRequiredContext(DroppableContext).isUsingCloneFor !==
          props.draggableId || props.isClone
          ? react.createElement(ConnectedDraggable, props)
          : null;
      }
      function PublicDraggable(props) {
        var isEnabled =
            'boolean' != typeof props.isDragDisabled || !props.isDragDisabled,
          canDragInteractiveElements =
            !!props.disableInteractiveElementBlocking,
          shouldRespectForcePress = !!props.shouldRespectForcePress;
        return react.createElement(
          PrivateDraggable,
          (0, esm_extends.A)({}, props, {
            isClone: !1,
            isEnabled: isEnabled,
            canDragInteractiveElements: canDragInteractiveElements,
            shouldRespectForcePress: shouldRespectForcePress,
          }),
        );
      }
      function Droppable(props) {
        var appContext = (0, react.useContext)(AppContext);
        appContext || invariant(!1);
        var contextId = appContext.contextId,
          isMovementAllowed = appContext.isMovementAllowed,
          droppableRef = (0, react.useRef)(null),
          placeholderRef = (0, react.useRef)(null),
          children = props.children,
          droppableId = props.droppableId,
          type = props.type,
          mode = props.mode,
          direction = props.direction,
          ignoreContainerClipping = props.ignoreContainerClipping,
          isDropDisabled = props.isDropDisabled,
          isCombineEnabled = props.isCombineEnabled,
          snapshot = props.snapshot,
          useClone = props.useClone,
          updateViewportMaxScroll = props.updateViewportMaxScroll,
          getContainerForClone = props.getContainerForClone,
          getDroppableRef = useCallback(function () {
            return droppableRef.current;
          }, []),
          setDroppableRef = useCallback(function (value) {
            droppableRef.current = value;
          }, []),
          getPlaceholderRef = useCallback(function () {
            return placeholderRef.current;
          }, []),
          setPlaceholderRef = useCallback(function (value) {
            placeholderRef.current = value;
          }, []);
        useValidation({
          props: props,
          getDroppableRef: getDroppableRef,
          getPlaceholderRef: getPlaceholderRef,
        });
        var onPlaceholderTransitionEnd = useCallback(
          function () {
            isMovementAllowed() &&
              updateViewportMaxScroll({ maxScroll: getMaxWindowScroll() });
          },
          [isMovementAllowed, updateViewportMaxScroll],
        );
        useDroppablePublisher({
          droppableId: droppableId,
          type: type,
          mode: mode,
          direction: direction,
          isDropDisabled: isDropDisabled,
          isCombineEnabled: isCombineEnabled,
          ignoreContainerClipping: ignoreContainerClipping,
          getDroppableRef: getDroppableRef,
        });
        var placeholder = react.createElement(
            AnimateInOut,
            {
              on: props.placeholder,
              shouldAnimate: props.shouldAnimatePlaceholder,
            },
            function (_ref) {
              var onClose = _ref.onClose,
                data = _ref.data,
                animate = _ref.animate;
              return react.createElement(Placeholder$1, {
                placeholder: data,
                onClose: onClose,
                innerRef: setPlaceholderRef,
                animate: animate,
                contextId: contextId,
                onTransitionEnd: onPlaceholderTransitionEnd,
              });
            },
          ),
          provided = use_memo_one_esm_useMemo(
            function () {
              return {
                innerRef: setDroppableRef,
                placeholder: placeholder,
                droppableProps: {
                  'data-rbd-droppable-id': droppableId,
                  'data-rbd-droppable-context-id': contextId,
                },
              };
            },
            [contextId, droppableId, placeholder, setDroppableRef],
          ),
          isUsingCloneFor = useClone ? useClone.dragging.draggableId : null,
          droppableContext = use_memo_one_esm_useMemo(
            function () {
              return {
                droppableId: droppableId,
                type: type,
                isUsingCloneFor: isUsingCloneFor,
              };
            },
            [droppableId, isUsingCloneFor, type],
          );
        function getClone() {
          if (!useClone) return null;
          var dragging = useClone.dragging,
            render = useClone.render,
            node = react.createElement(
              PrivateDraggable,
              {
                draggableId: dragging.draggableId,
                index: dragging.source.index,
                isClone: !0,
                isEnabled: !0,
                shouldRespectForcePress: !1,
                canDragInteractiveElements: !0,
              },
              function (draggableProvided, draggableSnapshot) {
                return render(draggableProvided, draggableSnapshot, dragging);
              },
            );
          return react_dom.createPortal(node, getContainerForClone());
        }
        return react.createElement(
          DroppableContext.Provider,
          { value: droppableContext },
          children(provided, snapshot),
          getClone(),
        );
      }
      var isMatchingType = function isMatchingType(type, critical) {
          return type === critical.droppable.type;
        },
        getDraggable = function getDraggable(critical, dimensions) {
          return dimensions.draggables[critical.draggable.id];
        };
      function getBody() {
        return document.body || invariant(!1), document.body;
      }
      var ConnectedDroppable = connect(
        function makeMapStateToProps() {
          var idleWithAnimation = {
              placeholder: null,
              shouldAnimatePlaceholder: !0,
              snapshot: {
                isDraggingOver: !1,
                draggingOverWith: null,
                draggingFromThisWith: null,
                isUsingPlaceholder: !1,
              },
              useClone: null,
            },
            idleWithoutAnimation = (0, esm_extends.A)({}, idleWithAnimation, {
              shouldAnimatePlaceholder: !1,
            }),
            getDraggableRubric = memoize_one_esm(function (descriptor) {
              return {
                draggableId: descriptor.id,
                type: descriptor.type,
                source: {
                  index: descriptor.index,
                  droppableId: descriptor.droppableId,
                },
              };
            }),
            getMapProps = memoize_one_esm(
              function (
                id,
                isEnabled,
                isDraggingOverForConsumer,
                isDraggingOverForImpact,
                dragging,
                renderClone,
              ) {
                var draggableId = dragging.descriptor.id;
                if (dragging.descriptor.droppableId === id) {
                  var useClone = renderClone
                    ? {
                        render: renderClone,
                        dragging: getDraggableRubric(dragging.descriptor),
                      }
                    : null;
                  return {
                    placeholder: dragging.placeholder,
                    shouldAnimatePlaceholder: !1,
                    snapshot: {
                      isDraggingOver: isDraggingOverForConsumer,
                      draggingOverWith: isDraggingOverForConsumer
                        ? draggableId
                        : null,
                      draggingFromThisWith: draggableId,
                      isUsingPlaceholder: !0,
                    },
                    useClone: useClone,
                  };
                }
                return isEnabled
                  ? isDraggingOverForImpact
                    ? {
                        placeholder: dragging.placeholder,
                        shouldAnimatePlaceholder: !0,
                        snapshot: {
                          isDraggingOver: isDraggingOverForConsumer,
                          draggingOverWith: draggableId,
                          draggingFromThisWith: null,
                          isUsingPlaceholder: !0,
                        },
                        useClone: null,
                      }
                    : idleWithAnimation
                  : idleWithoutAnimation;
              },
            );
          return function selector(state, ownProps) {
            var id = ownProps.droppableId,
              type = ownProps.type,
              isEnabled = !ownProps.isDropDisabled,
              renderClone = ownProps.renderClone;
            if (state.isDragging) {
              var critical = state.critical;
              if (!isMatchingType(type, critical)) return idleWithoutAnimation;
              var dragging = getDraggable(critical, state.dimensions),
                isDraggingOver = whatIsDraggedOver(state.impact) === id;
              return getMapProps(
                id,
                isEnabled,
                isDraggingOver,
                isDraggingOver,
                dragging,
                renderClone,
              );
            }
            if ('DROP_ANIMATING' === state.phase) {
              var completed = state.completed;
              if (!isMatchingType(type, completed.critical))
                return idleWithoutAnimation;
              var _dragging = getDraggable(
                completed.critical,
                state.dimensions,
              );
              return getMapProps(
                id,
                isEnabled,
                whatIsDraggedOverFromResult(completed.result) === id,
                whatIsDraggedOver(completed.impact) === id,
                _dragging,
                renderClone,
              );
            }
            if (
              'IDLE' === state.phase &&
              state.completed &&
              !state.shouldFlush
            ) {
              var _completed = state.completed;
              if (!isMatchingType(type, _completed.critical))
                return idleWithoutAnimation;
              var wasOver = whatIsDraggedOver(_completed.impact) === id,
                wasCombining = !!(
                  _completed.impact.at &&
                  'COMBINE' === _completed.impact.at.type
                ),
                isHome = _completed.critical.droppable.id === id;
              if (wasOver)
                return wasCombining ? idleWithAnimation : idleWithoutAnimation;
              if (isHome) return idleWithAnimation;
            }
            return idleWithoutAnimation;
          };
        },
        {
          updateViewportMaxScroll: function updateViewportMaxScroll(args) {
            return { type: 'UPDATE_VIEWPORT_MAX_SCROLL', payload: args };
          },
        },
        null,
        { context: StoreContext, pure: !0, areStatePropsEqual: isStrictEqual },
      )(Droppable);
      ConnectedDroppable.defaultProps = {
        mode: 'standard',
        type: 'DEFAULT',
        direction: 'vertical',
        isDropDisabled: !1,
        isCombineEnabled: !1,
        ignoreContainerClipping: !1,
        renderClone: null,
        getContainerForClone: getBody,
      };
    },
    './node_modules/react-is/cjs/react-is.production.min.js': (
      __unused_webpack_module,
      exports,
    ) => {
      /** @license React v16.13.1
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var b = 'function' == typeof Symbol && Symbol.for,
        c = b ? Symbol.for('react.element') : 60103,
        d = b ? Symbol.for('react.portal') : 60106,
        e = b ? Symbol.for('react.fragment') : 60107,
        f = b ? Symbol.for('react.strict_mode') : 60108,
        g = b ? Symbol.for('react.profiler') : 60114,
        h = b ? Symbol.for('react.provider') : 60109,
        k = b ? Symbol.for('react.context') : 60110,
        l = b ? Symbol.for('react.async_mode') : 60111,
        m = b ? Symbol.for('react.concurrent_mode') : 60111,
        n = b ? Symbol.for('react.forward_ref') : 60112,
        p = b ? Symbol.for('react.suspense') : 60113,
        q = b ? Symbol.for('react.suspense_list') : 60120,
        r = b ? Symbol.for('react.memo') : 60115,
        t = b ? Symbol.for('react.lazy') : 60116,
        v = b ? Symbol.for('react.block') : 60121,
        w = b ? Symbol.for('react.fundamental') : 60117,
        x = b ? Symbol.for('react.responder') : 60118,
        y = b ? Symbol.for('react.scope') : 60119;
      function z(a) {
        if ('object' == typeof a && null !== a) {
          var u = a.$$typeof;
          switch (u) {
            case c:
              switch ((a = a.type)) {
                case l:
                case m:
                case e:
                case g:
                case f:
                case p:
                  return a;
                default:
                  switch ((a = a && a.$$typeof)) {
                    case k:
                    case n:
                    case t:
                    case r:
                    case h:
                      return a;
                    default:
                      return u;
                  }
              }
            case d:
              return u;
          }
        }
      }
      function A(a) {
        return z(a) === m;
      }
      (exports.AsyncMode = l),
        (exports.ConcurrentMode = m),
        (exports.ContextConsumer = k),
        (exports.ContextProvider = h),
        (exports.Element = c),
        (exports.ForwardRef = n),
        (exports.Fragment = e),
        (exports.Lazy = t),
        (exports.Memo = r),
        (exports.Portal = d),
        (exports.Profiler = g),
        (exports.StrictMode = f),
        (exports.Suspense = p),
        (exports.isAsyncMode = function (a) {
          return A(a) || z(a) === l;
        }),
        (exports.isConcurrentMode = A),
        (exports.isContextConsumer = function (a) {
          return z(a) === k;
        }),
        (exports.isContextProvider = function (a) {
          return z(a) === h;
        }),
        (exports.isElement = function (a) {
          return 'object' == typeof a && null !== a && a.$$typeof === c;
        }),
        (exports.isForwardRef = function (a) {
          return z(a) === n;
        }),
        (exports.isFragment = function (a) {
          return z(a) === e;
        }),
        (exports.isLazy = function (a) {
          return z(a) === t;
        }),
        (exports.isMemo = function (a) {
          return z(a) === r;
        }),
        (exports.isPortal = function (a) {
          return z(a) === d;
        }),
        (exports.isProfiler = function (a) {
          return z(a) === g;
        }),
        (exports.isStrictMode = function (a) {
          return z(a) === f;
        }),
        (exports.isSuspense = function (a) {
          return z(a) === p;
        }),
        (exports.isValidElementType = function (a) {
          return (
            'string' == typeof a ||
            'function' == typeof a ||
            a === e ||
            a === m ||
            a === g ||
            a === f ||
            a === p ||
            a === q ||
            ('object' == typeof a &&
              null !== a &&
              (a.$$typeof === t ||
                a.$$typeof === r ||
                a.$$typeof === h ||
                a.$$typeof === k ||
                a.$$typeof === n ||
                a.$$typeof === w ||
                a.$$typeof === x ||
                a.$$typeof === y ||
                a.$$typeof === v))
          );
        }),
        (exports.typeOf = z);
    },
    './node_modules/react-is/index.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__,
    ) => {
      module.exports = __webpack_require__(
        './node_modules/react-is/cjs/react-is.production.min.js',
      );
    },
    './node_modules/react-redux/node_modules/react-is/cjs/react-is.production.min.js':
      (__unused_webpack_module, exports) => {
        /** @license React v17.0.2
         * react-is.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ var b = 60103,
          c = 60106,
          d = 60107,
          e = 60108,
          f = 60114,
          g = 60109,
          h = 60110,
          k = 60112,
          l = 60113,
          m = 60120,
          n = 60115,
          p = 60116;
        if ('function' == typeof Symbol && Symbol.for) {
          var x = Symbol.for;
          (b = x('react.element')),
            (c = x('react.portal')),
            (d = x('react.fragment')),
            (e = x('react.strict_mode')),
            (f = x('react.profiler')),
            (g = x('react.provider')),
            (h = x('react.context')),
            (k = x('react.forward_ref')),
            (l = x('react.suspense')),
            (m = x('react.suspense_list')),
            (n = x('react.memo')),
            (p = x('react.lazy')),
            x('react.block'),
            x('react.server.block'),
            x('react.fundamental'),
            x('react.debug_trace_mode'),
            x('react.legacy_hidden');
        }
        function y(a) {
          if ('object' == typeof a && null !== a) {
            var t = a.$$typeof;
            switch (t) {
              case b:
                switch ((a = a.type)) {
                  case d:
                  case f:
                  case e:
                  case l:
                  case m:
                    return a;
                  default:
                    switch ((a = a && a.$$typeof)) {
                      case h:
                      case k:
                      case p:
                      case n:
                      case g:
                        return a;
                      default:
                        return t;
                    }
                }
              case c:
                return t;
            }
          }
        }
        exports.isContextConsumer = function (a) {
          return y(a) === h;
        };
      },
    './node_modules/react-redux/node_modules/react-is/index.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__,
    ) => {
      module.exports = __webpack_require__(
        './node_modules/react-redux/node_modules/react-is/cjs/react-is.production.min.js',
      );
    },
  },
]);
//# sourceMappingURL=121.3b3a66b7.iframe.bundle.js.map
