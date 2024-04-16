'use strict';
(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [1191],
  {
    './src/stories/molecules/CountDownTimer.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          OnlyTimer: () => OnlyTimer,
          TimerWithSuffix: () => TimerWithSuffix,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      let __WEBPACK_DEFAULT_EXPORT__ = {
          title: '2.Molecules/CountdownTimer',
          component: __webpack_require__(
            './src/lib/CountdownTimer/countdownTimer.tsx',
          ).r,
          tags: ['autodocs'],
          argTypes: {
            type: { control: 'select', options: ['default', 'suffix', 'none'] },
          },
        },
        Default = { args: { targetTime: '20241224120000', fontSize: 20 } },
        TimerWithSuffix = {
          args: { type: 'suffix', targetTime: '20241224120000', fontSize: 30 },
        },
        OnlyTimer = {
          args: { type: 'none', targetTime: '20241224120000', fontSize: 40 },
        };
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    targetTime: '20241224120000',\n    fontSize: 20\n  }\n}",
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
                "{\n  args: {\n    type: 'suffix',\n    targetTime: '20241224120000',\n    fontSize: 30\n  }\n}",
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
                "{\n  args: {\n    type: 'none',\n    targetTime: '20241224120000',\n    fontSize: 40\n  }\n}",
              ...OnlyTimer.parameters?.docs?.source,
            },
          },
        });
      let __namedExportsOrder = ['Default', 'TimerWithSuffix', 'OnlyTimer'];
    },
    './src/lib/CountdownTimer/countdownTimer.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
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
          return {
            seconds: Math.floor((milliseconds / 1e3) % 60)
              .toString()
              .padStart(2, '0'),
            minutes: Math.floor((milliseconds / 1e3 / 60) % 60)
              .toString()
              .padStart(2, '0'),
            hours: Math.floor((milliseconds / 1e3 / 60 / 60) % 24)
              .toString()
              .padStart(2, '0'),
            days: Math.floor(milliseconds / 864e5).toString(),
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
          let timeDifference = +convertStringToDate(targetTime) - +new Date();
          if (timeDifference <= 0) throw Error('목표 시간이 이미 지났습니다.');
          return (
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
  },
]);
