(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [1191, 4691, 945],
  {
    './src/stories/molecules/CountDownTimer.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          ExpiredTimer: () => ExpiredTimer,
          OnlyTimer: () => OnlyTimer,
          TimerWithSuffix: () => TimerWithSuffix,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _lib_CountdownTimer_countdownTimer__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__('./src/lib/CountdownTimer/countdownTimer.tsx'),
        dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/dayjs/dayjs.min.js',
        ),
        dayjs__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          dayjs__WEBPACK_IMPORTED_MODULE_1__,
        );
      let __WEBPACK_DEFAULT_EXPORT__ = {
          title: '2.Molecules/CountdownTimer',
          component:
            _lib_CountdownTimer_countdownTimer__WEBPACK_IMPORTED_MODULE_0__.r,
          tags: ['autodocs'],
          argTypes: {
            type: { control: 'select', options: ['default', 'suffix', 'none'] },
          },
        },
        getTimeNextWeek = (weeks) =>
          dayjs__WEBPACK_IMPORTED_MODULE_1___default()()
            .add(weeks, 'week')
            .format('YYYYMMDDHHmmss'),
        Default = { args: { targetTime: getTimeNextWeek(7), fontSize: 20 } },
        TimerWithSuffix = {
          args: {
            type: 'suffix',
            targetTime: getTimeNextWeek(7),
            fontSize: 30,
          },
        },
        OnlyTimer = {
          args: { type: 'none', targetTime: getTimeNextWeek(7), fontSize: 40 },
        },
        ExpiredTimer = {
          args: { type: 'none', targetTime: '20240729000000', fontSize: 40 },
        };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    targetTime: getTimeNextWeek(7),\n    fontSize: 20\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (TimerWithSuffix.parameters = {
          ...TimerWithSuffix.parameters,
          docs: {
            ...TimerWithSuffix.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    type: 'suffix',\n    targetTime: getTimeNextWeek(7),\n    fontSize: 30\n  }\n}",
              ...TimerWithSuffix.parameters?.docs?.source,
            },
          },
        }),
        (OnlyTimer.parameters = {
          ...OnlyTimer.parameters,
          docs: {
            ...OnlyTimer.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    type: 'none',\n    targetTime: getTimeNextWeek(7),\n    fontSize: 40\n  }\n}",
              ...OnlyTimer.parameters?.docs?.source,
            },
          },
        }),
        (ExpiredTimer.parameters = {
          ...ExpiredTimer.parameters,
          docs: {
            ...ExpiredTimer.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    type: 'none',\n    targetTime: '20240729000000',\n    fontSize: 40\n  }\n}",
              ...ExpiredTimer.parameters?.docs?.source,
            },
          },
        });
      let __namedExportsOrder = [
        'Default',
        'TimerWithSuffix',
        'OnlyTimer',
        'ExpiredTimer',
      ];
    },
    './src/lib/CountdownTimer/countdownTimer.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { r: () => CountdownTimer });
      var _templateObject,
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js',
        ),
        react = __webpack_require__('./node_modules/react/index.js');
      Date.prototype.YYYYMMDDHHMMSS = function () {
        let yyyy = this.getFullYear().toString(),
          MM = pad(this.getMonth() + 1, 2),
          dd = pad(this.getDate(), 2);
        return (
          yyyy +
          MM +
          dd +
          pad(this.getHours(), 2) +
          pad(this.getMinutes(), 2) +
          pad(this.getSeconds(), 2)
        );
      };
      let pad = (number, length) => {
          let str = '' + number;
          for (; str.length < length; ) str = '0' + str;
          return str;
        },
        yyyyMMddHHmmssRegex = /^\d{4}\d{2}\d{2}\d{2}\d{2}\d{2}$/,
        convertStringToDate = (stringTime) => {
          if (!yyyyMMddHHmmssRegex.test(stringTime))
            throw Error('yyyyMMddHHmmss 형식이 아닙니다.');
          let year = Math.floor(Number(stringTime) / 1e10),
            month = Math.floor((Number(stringTime) % 1e10) / 1e8),
            day = Math.floor((Number(stringTime) % 1e8) / 1e6);
          return new Date(
            year,
            month - 1,
            day,
            Math.floor((Number(stringTime) % 1e6) / 1e4),
            Math.floor((Number(stringTime) % 1e4) / 100),
            Number(stringTime) % 100,
          );
        },
        getFormattedTimeObject = (milliseconds) => {
          if (!Number.isInteger(milliseconds) || milliseconds < 0)
            throw Error('양의 정수가 아닙니다.');
          let seconds = Math.floor((milliseconds / 1e3) % 60),
            minutes = Math.floor((milliseconds / 1e3 / 60) % 60),
            hours = Math.floor((milliseconds / 1e3 / 60 / 60) % 24),
            days = Math.floor(milliseconds / 864e5);
          return {
            seconds: seconds.toString().padStart(2, '0'),
            minutes: minutes.toString().padStart(2, '0'),
            hours: hours.toString().padStart(2, '0'),
            days: days.toString(),
          };
        };
      try {
        (convertStringToDate.displayName = 'convertStringToDate'),
          (convertStringToDate.__docgenInfo = {
            description: '문자열 시간을 Date 객체로 반환',
            displayName: 'convertStringToDate',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/lib/Util/convert.tsx#convertStringToDate'
            ] = {
              docgenInfo: convertStringToDate.__docgenInfo,
              name: 'convertStringToDate',
              path: 'src/lib/Util/convert.tsx#convertStringToDate',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (getFormattedTimeObject.displayName = 'getFormattedTimeObject'),
          (getFormattedTimeObject.__docgenInfo = {
            description: '디지털 카운트다운 타이머',
            displayName: 'getFormattedTimeObject',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/lib/Util/convert.tsx#getFormattedTimeObject'
            ] = {
              docgenInfo: getFormattedTimeObject.__docgenInfo,
              name: 'getFormattedTimeObject',
              path: 'src/lib/Util/convert.tsx#getFormattedTimeObject',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function useIntervalCall(callback, delay) {
        let savedCallback = (0, react.useRef)();
        (0, react.useEffect)(() => {
          if ('function' == typeof callback) savedCallback.current = callback;
          else
            throw Error(
              '실행 함수를 입력해 주세요 (callback:'.concat(
                typeof callback,
                ')',
              ),
            );
        }, [callback]),
          (0, react.useEffect)(() => {
            if (0 === delay || null == delay)
              throw Error('delay 값을 입력해 주세요.');
            let intervalId = setInterval(() => {
              savedCallback.current && savedCallback.current();
            }, delay);
            return () => clearInterval(intervalId);
          }, [delay]);
      }
      var styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js',
        ),
        styles_module = __webpack_require__('./src/lib/styles.module.css'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        );
      let TimerContainer = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              '\n  width: 10rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n',
            ])),
        ),
        TimeUnitDefault = {
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
          suffix: ':',
        },
        CountdownTimer = (_ref) => {
          let { fontSize = 60, targetTime, type = 'default' } = _ref,
            [remainingTime, setRemainingTime] = (0, react.useState)(0),
            [time, setTime] = react.useState(TimeUnitDefault),
            [keys, setKeys] = (0, react.useState)([]);
          if (
            ((0, react.useEffect)(() => {
              let keyList = [
                'days',
                'suffix',
                'hours',
                'suffix',
                'minutes',
                'suffix',
                'seconds',
              ];
              setKeys(
                'suffix' === type
                  ? keyList
                      .filter((item) => 'suffix' !== item)
                      .flatMap((item) => [item, item])
                  : keyList,
              );
            }, [type]),
            !yyyyMMddHHmmssRegex.test(targetTime))
          )
            throw Error('yyyyMMddHHmmss 형식이 아닙니다.');
          let timeDifference = Math.max(
            +convertStringToDate(targetTime) - +new Date(),
            0,
          );
          return (
            (0, react.useEffect)(() => {
              setRemainingTime(timeDifference);
            }, [targetTime]),
            useIntervalCall(() => setRemainingTime(timeDifference), 1e3),
            (0, react.useEffect)(
              () =>
                setTime({
                  ...getFormattedTimeObject(remainingTime),
                  suffix: 'default' === type ? ':' : '',
                }),
              [remainingTime],
            ),
            (0, jsx_runtime.jsx)(TimerContainer, {
              children: keys.map((key, index) =>
                (0, jsx_runtime.jsx)(
                  'div',
                  {
                    className: styles_module.A.timerItem,
                    children: (0, jsx_runtime.jsx)('div', {
                      className: styles_module.A.timerValue,
                      style: {
                        minWidth: ''.concat(fontSize, 'px'),
                        textAlign: 'center',
                        fontSize:
                          'suffix' === type && index % 2 == 1
                            ? ''.concat(fontSize / 3, 'px')
                            : ''.concat(fontSize, 'px'),
                      },
                      children: (0, jsx_runtime.jsx)('p', {
                        style: {
                          paddingBlockStart:
                            'suffix' === type && index % 2 == 1
                              ? '80%'
                              : void 0,
                          margin: 'auto',
                        },
                        children:
                          'suffix' === type && index % 2 == 1 ? key : time[key],
                      }),
                    }),
                  },
                  index,
                ),
              ),
            })
          );
        };
      try {
        (CountdownTimer.displayName = 'CountdownTimer'),
          (CountdownTimer.__docgenInfo = {
            description: '',
            displayName: 'CountdownTimer',
            props: {
              fontSize: {
                defaultValue: { value: '60' },
                description: '',
                name: 'fontSize',
                required: !1,
                type: { name: 'number' },
              },
              targetTime: {
                defaultValue: null,
                description: '',
                name: 'targetTime',
                required: !0,
                type: { name: 'string' },
              },
              type: {
                defaultValue: { value: 'default' },
                description: '',
                name: 'type',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"default"' },
                    { value: '"suffix"' },
                    { value: '"none"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/lib/CountdownTimer/countdownTimer.tsx#CountdownTimer'
            ] = {
              docgenInfo: CountdownTimer.__docgenInfo,
              name: 'CountdownTimer',
              path: 'src/lib/CountdownTimer/countdownTimer.tsx#CountdownTimer',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './node_modules/dayjs/dayjs.min.js': function (module) {
      var e;
      (e = function () {
        'use strict';
        var r = 'millisecond',
          i = 'second',
          s = 'minute',
          u = 'hour',
          o = 'week',
          c = 'month',
          f = 'quarter',
          h = 'year',
          d = 'date',
          l = 'Invalid Date',
          $ =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          y =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          m = function (t, e, n) {
            var r = String(t);
            return !r || r.length >= e
              ? t
              : '' + Array(e + 1 - r.length).join(n) + t;
          },
          g = 'en',
          D = {};
        D[g] = {
          name: 'en',
          weekdays:
            'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
              '_',
            ),
          months:
            'January_February_March_April_May_June_July_August_September_October_November_December'.split(
              '_',
            ),
          ordinal: function (t) {
            var e = ['th', 'st', 'nd', 'rd'],
              n = t % 100;
            return '[' + t + (e[(n - 20) % 10] || e[n] || 'th') + ']';
          },
        };
        var p = '$isDayjsObject',
          S = function (t) {
            return t instanceof _ || !(!t || !t[p]);
          },
          w = function t(e, n, r) {
            var i;
            if (!e) return g;
            if ('string' == typeof e) {
              var s = e.toLowerCase();
              D[s] && (i = s), n && ((D[s] = n), (i = s));
              var u = e.split('-');
              if (!i && u.length > 1) return t(u[0]);
            } else {
              var a = e.name;
              (D[a] = e), (i = a);
            }
            return !r && i && (g = i), i || (!r && g);
          },
          O = function (t, e) {
            if (S(t)) return t.clone();
            var n = 'object' == typeof e ? e : {};
            return (n.date = t), (n.args = arguments), new _(n);
          },
          b = {
            s: m,
            z: function (t) {
              var e = -t.utcOffset(),
                n = Math.abs(e);
              return (
                (e <= 0 ? '+' : '-') +
                m(Math.floor(n / 60), 2, '0') +
                ':' +
                m(n % 60, 2, '0')
              );
            },
            m: function t(e, n) {
              if (e.date() < n.date()) return -t(n, e);
              var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                i = e.clone().add(r, c),
                s = n - i < 0,
                u = e.clone().add(r + (s ? -1 : 1), c);
              return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
            },
            a: function (t) {
              return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
            },
            p: function (t) {
              return (
                {
                  M: c,
                  y: h,
                  w: o,
                  d: 'day',
                  D: d,
                  h: u,
                  m: s,
                  s: i,
                  ms: r,
                  Q: f,
                }[t] ||
                String(t || '')
                  .toLowerCase()
                  .replace(/s$/, '')
              );
            },
            u: function (t) {
              return void 0 === t;
            },
          };
        (b.l = w),
          (b.i = S),
          (b.w = function (t, e) {
            return O(t, {
              locale: e.$L,
              utc: e.$u,
              x: e.$x,
              $offset: e.$offset,
            });
          });
        var _ = (function () {
            function M(t) {
              (this.$L = w(t.locale, null, !0)),
                this.parse(t),
                (this.$x = this.$x || t.x || {}),
                (this[p] = !0);
            }
            var m = M.prototype;
            return (
              (m.parse = function (t) {
                (this.$d = (function (t) {
                  var e = t.date,
                    n = t.utc;
                  if (null === e) return new Date(NaN);
                  if (b.u(e)) return new Date();
                  if (e instanceof Date) return new Date(e);
                  if ('string' == typeof e && !/Z$/i.test(e)) {
                    var r = e.match($);
                    if (r) {
                      var i = r[2] - 1 || 0,
                        s = (r[7] || '0').substring(0, 3);
                      return n
                        ? new Date(
                            Date.UTC(
                              r[1],
                              i,
                              r[3] || 1,
                              r[4] || 0,
                              r[5] || 0,
                              r[6] || 0,
                              s,
                            ),
                          )
                        : new Date(
                            r[1],
                            i,
                            r[3] || 1,
                            r[4] || 0,
                            r[5] || 0,
                            r[6] || 0,
                            s,
                          );
                    }
                  }
                  return new Date(e);
                })(t)),
                  this.init();
              }),
              (m.init = function () {
                var t = this.$d;
                (this.$y = t.getFullYear()),
                  (this.$M = t.getMonth()),
                  (this.$D = t.getDate()),
                  (this.$W = t.getDay()),
                  (this.$H = t.getHours()),
                  (this.$m = t.getMinutes()),
                  (this.$s = t.getSeconds()),
                  (this.$ms = t.getMilliseconds());
              }),
              (m.$utils = function () {
                return b;
              }),
              (m.isValid = function () {
                return this.$d.toString() !== l;
              }),
              (m.isSame = function (t, e) {
                var n = O(t);
                return this.startOf(e) <= n && n <= this.endOf(e);
              }),
              (m.isAfter = function (t, e) {
                return O(t) < this.startOf(e);
              }),
              (m.isBefore = function (t, e) {
                return this.endOf(e) < O(t);
              }),
              (m.$g = function (t, e, n) {
                return b.u(t) ? this[e] : this.set(n, t);
              }),
              (m.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (m.valueOf = function () {
                return this.$d.getTime();
              }),
              (m.startOf = function (t, e) {
                var n = this,
                  r = !!b.u(e) || e,
                  f = b.p(t),
                  l = function (t, e) {
                    var i = b.w(
                      n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t),
                      n,
                    );
                    return r ? i : i.endOf('day');
                  },
                  $ = function (t, e) {
                    return b.w(
                      n
                        .toDate()
                        [
                          t
                        ].apply(n.toDate('s'), (r ? [0, 0, 0, 0] : [23, 59, 59,
                                999]).slice(e)),
                      n,
                    );
                  },
                  y = this.$W,
                  M = this.$M,
                  m = this.$D,
                  v = 'set' + (this.$u ? 'UTC' : '');
                switch (f) {
                  case h:
                    return r ? l(1, 0) : l(31, 11);
                  case c:
                    return r ? l(1, M) : l(0, M + 1);
                  case o:
                    var g = this.$locale().weekStart || 0,
                      D = (y < g ? y + 7 : y) - g;
                    return l(r ? m - D : m + (6 - D), M);
                  case 'day':
                  case d:
                    return $(v + 'Hours', 0);
                  case u:
                    return $(v + 'Minutes', 1);
                  case s:
                    return $(v + 'Seconds', 2);
                  case i:
                    return $(v + 'Milliseconds', 3);
                  default:
                    return this.clone();
                }
              }),
              (m.endOf = function (t) {
                return this.startOf(t, !1);
              }),
              (m.$set = function (t, e) {
                var n,
                  o = b.p(t),
                  f = 'set' + (this.$u ? 'UTC' : ''),
                  l = (((n = {}).day = f + 'Date'),
                  (n[d] = f + 'Date'),
                  (n[c] = f + 'Month'),
                  (n[h] = f + 'FullYear'),
                  (n[u] = f + 'Hours'),
                  (n[s] = f + 'Minutes'),
                  (n[i] = f + 'Seconds'),
                  (n[r] = f + 'Milliseconds'),
                  n)[o],
                  $ = 'day' === o ? this.$D + (e - this.$W) : e;
                if (o === c || o === h) {
                  var y = this.clone().set(d, 1);
                  y.$d[l]($),
                    y.init(),
                    (this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d);
                } else l && this.$d[l]($);
                return this.init(), this;
              }),
              (m.set = function (t, e) {
                return this.clone().$set(t, e);
              }),
              (m.get = function (t) {
                return this[b.p(t)]();
              }),
              (m.add = function (r, f) {
                var d,
                  l = this;
                r = Number(r);
                var $ = b.p(f),
                  y = function (t) {
                    var e = O(l);
                    return b.w(e.date(e.date() + Math.round(t * r)), l);
                  };
                if ($ === c) return this.set(c, this.$M + r);
                if ($ === h) return this.set(h, this.$y + r);
                if ('day' === $) return y(1);
                if ($ === o) return y(7);
                var M =
                    (((d = {})[s] = 6e4), (d[u] = 36e5), (d[i] = 1e3), d)[$] ||
                    1,
                  m = this.$d.getTime() + r * M;
                return b.w(m, this);
              }),
              (m.subtract = function (t, e) {
                return this.add(-1 * t, e);
              }),
              (m.format = function (t) {
                var e = this,
                  n = this.$locale();
                if (!this.isValid()) return n.invalidDate || l;
                var r = t || 'YYYY-MM-DDTHH:mm:ssZ',
                  i = b.z(this),
                  s = this.$H,
                  u = this.$m,
                  a = this.$M,
                  o = n.weekdays,
                  c = n.months,
                  f = n.meridiem,
                  h = function (t, n, i, s) {
                    return (t && (t[n] || t(e, r))) || i[n].slice(0, s);
                  },
                  d = function (t) {
                    return b.s(s % 12 || 12, t, '0');
                  },
                  $ =
                    f ||
                    function (t, e, n) {
                      var r = t < 12 ? 'AM' : 'PM';
                      return n ? r.toLowerCase() : r;
                    };
                return r.replace(y, function (t, r) {
                  return (
                    r ||
                    (function (t) {
                      switch (t) {
                        case 'YY':
                          return String(e.$y).slice(-2);
                        case 'YYYY':
                          return b.s(e.$y, 4, '0');
                        case 'M':
                          return a + 1;
                        case 'MM':
                          return b.s(a + 1, 2, '0');
                        case 'MMM':
                          return h(n.monthsShort, a, c, 3);
                        case 'MMMM':
                          return h(c, a);
                        case 'D':
                          return e.$D;
                        case 'DD':
                          return b.s(e.$D, 2, '0');
                        case 'd':
                          return String(e.$W);
                        case 'dd':
                          return h(n.weekdaysMin, e.$W, o, 2);
                        case 'ddd':
                          return h(n.weekdaysShort, e.$W, o, 3);
                        case 'dddd':
                          return o[e.$W];
                        case 'H':
                          return String(s);
                        case 'HH':
                          return b.s(s, 2, '0');
                        case 'h':
                          return d(1);
                        case 'hh':
                          return d(2);
                        case 'a':
                          return $(s, u, !0);
                        case 'A':
                          return $(s, u, !1);
                        case 'm':
                          return String(u);
                        case 'mm':
                          return b.s(u, 2, '0');
                        case 's':
                          return String(e.$s);
                        case 'ss':
                          return b.s(e.$s, 2, '0');
                        case 'SSS':
                          return b.s(e.$ms, 3, '0');
                        case 'Z':
                          return i;
                      }
                      return null;
                    })(t) ||
                    i.replace(':', '')
                  );
                });
              }),
              (m.utcOffset = function () {
                return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
              }),
              (m.diff = function (r, d, l) {
                var $,
                  y = this,
                  M = b.p(d),
                  m = O(r),
                  v = (m.utcOffset() - this.utcOffset()) * 6e4,
                  g = this - m,
                  D = function () {
                    return b.m(y, m);
                  };
                switch (M) {
                  case h:
                    $ = D() / 12;
                    break;
                  case c:
                    $ = D();
                    break;
                  case f:
                    $ = D() / 3;
                    break;
                  case o:
                    $ = (g - v) / 6048e5;
                    break;
                  case 'day':
                    $ = (g - v) / 864e5;
                    break;
                  case u:
                    $ = g / 36e5;
                    break;
                  case s:
                    $ = g / 6e4;
                    break;
                  case i:
                    $ = g / 1e3;
                    break;
                  default:
                    $ = g;
                }
                return l ? $ : b.a($);
              }),
              (m.daysInMonth = function () {
                return this.endOf(c).$D;
              }),
              (m.$locale = function () {
                return D[this.$L];
              }),
              (m.locale = function (t, e) {
                if (!t) return this.$L;
                var n = this.clone(),
                  r = w(t, e, !0);
                return r && (n.$L = r), n;
              }),
              (m.clone = function () {
                return b.w(this.$d, this);
              }),
              (m.toDate = function () {
                return new Date(this.valueOf());
              }),
              (m.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (m.toISOString = function () {
                return this.$d.toISOString();
              }),
              (m.toString = function () {
                return this.$d.toUTCString();
              }),
              M
            );
          })(),
          k = _.prototype;
        return (
          (O.prototype = k),
          [
            ['$ms', r],
            ['$s', i],
            ['$m', s],
            ['$H', u],
            ['$W', 'day'],
            ['$M', c],
            ['$y', h],
            ['$D', d],
          ].forEach(function (t) {
            k[t[1]] = function (e) {
              return this.$g(e, t[0], t[1]);
            };
          }),
          (O.extend = function (t, e) {
            return t.$i || (t(e, _, O), (t.$i = !0)), O;
          }),
          (O.locale = w),
          (O.isDayjs = S),
          (O.unix = function (t) {
            return O(1e3 * t);
          }),
          (O.en = D[g]),
          (O.Ls = D),
          (O.p = {}),
          O
        );
      }),
        (module.exports = e());
    },
    './src/lib/styles.module.css': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
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
        clockContainer: 'styles_clockContainer__GYKrr',
        hour: 'styles_hour__UH6bM',
        minute: 'styles_minute__MDO2v',
        second: 'styles_second__zAH3x',
        arrowsRight: 'styles_arrowsRight__BxJ21',
        arrowsLeft: 'styles_arrowsLeft__6czBo',
      };
    },
  },
]);
