(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [1606],
  {
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
    './node_modules/html2canvas/dist/html2canvas.js': function (module) {
      var factory;
      (factory = function () {
        'use strict';
        /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ var buffer,
          view32,
          view16,
          index,
          start,
          end,
          data,
          BACKGROUND_SIZE,
          LINE_BREAK,
          WORD_BREAK,
          buffer1,
          view321,
          view161,
          index1,
          start1,
          end1,
          data1,
          PseudoElementType,
          CORNER,
          BACKGROUND_SIZE1,
          LINE_BREAK1,
          WORD_BREAK1,
          PseudoElementType1,
          CORNER1,
          extendStatics = function (d, b) {
            return (extendStatics =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (d, b) {
                  d.__proto__ = b;
                }) ||
              function (d, b) {
                for (var p in b)
                  Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
              })(d, b);
          };
        function __extends(d, b) {
          if ('function' != typeof b && null !== b)
            throw TypeError(
              'Class extends value ' +
                String(b) +
                ' is not a constructor or null',
            );
          function __() {
            this.constructor = d;
          }
          extendStatics(d, b),
            (d.prototype =
              null === b
                ? Object.create(b)
                : ((__.prototype = b.prototype), new __()));
        }
        var __assign = function () {
          return (__assign =
            Object.assign ||
            function __assign(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++)
                for (var p in (s = arguments[i]))
                  Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
              return t;
            }).apply(this, arguments);
        };
        function __awaiter(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P
              ? value
              : new P(function (resolve) {
                  resolve(value);
                });
          }
          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator.throw(value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done
                ? resolve(result.value)
                : adopt(result.value).then(fulfilled, rejected);
            }
            step(
              (generator = generator.apply(thisArg, _arguments || [])).next(),
            );
          });
        }
        function __generator(thisArg, body) {
          var f,
            y,
            t,
            g,
            _ = {
              label: 0,
              sent: function () {
                if (1 & t[0]) throw t[1];
                return t[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            'function' == typeof Symbol &&
              (g[Symbol.iterator] = function () {
                return this;
              }),
            g
          );
          function verb(n) {
            return function (v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f) throw TypeError('Generator is already executing.');
            for (; _; )
              try {
                if (
                  ((f = 1),
                  y &&
                    (t =
                      2 & op[0]
                        ? y.return
                        : op[0]
                          ? y.throw || ((t = y.return) && t.call(y), 0)
                          : y.next) &&
                    !(t = t.call(y, op[1])).done)
                )
                  return t;
                switch (((y = 0), t && (op = [2 & op[0], t.value]), op[0])) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    return _.label++, { value: op[1], done: !1 };
                  case 5:
                    _.label++, (y = op[1]), (op = [0]);
                    continue;
                  case 7:
                    (op = _.ops.pop()), _.trys.pop();
                    continue;
                  default:
                    if (
                      !(t = (t = _.trys).length > 0 && t[t.length - 1]) &&
                      (6 === op[0] || 2 === op[0])
                    ) {
                      _ = 0;
                      continue;
                    }
                    if (3 === op[0] && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                      _.label = op[1];
                      break;
                    }
                    if (6 === op[0] && _.label < t[1]) {
                      (_.label = t[1]), (t = op);
                      break;
                    }
                    if (t && _.label < t[2]) {
                      (_.label = t[2]), _.ops.push(op);
                      break;
                    }
                    t[2] && _.ops.pop(), _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                (op = [6, e]), (y = 0);
              } finally {
                f = t = 0;
              }
            if (5 & op[0]) throw op[1];
            return { value: op[0] ? op[1] : void 0, done: !0 };
          }
        }
        function __spreadArray(to, from, pack) {
          if (pack || 2 == arguments.length)
            for (var ar, i = 0, l = from.length; i < l; i++)
              (!ar && i in from) ||
                (ar || (ar = Array.prototype.slice.call(from, 0, i)),
                (ar[i] = from[i]));
          return to.concat(ar || from);
        }
        for (
          var Bounds = (function () {
              function Bounds(left, top, width, height) {
                (this.left = left),
                  (this.top = top),
                  (this.width = width),
                  (this.height = height);
              }
              return (
                (Bounds.prototype.add = function (x, y, w, h) {
                  return new Bounds(
                    this.left + x,
                    this.top + y,
                    this.width + w,
                    this.height + h,
                  );
                }),
                (Bounds.fromClientRect = function (context, clientRect) {
                  return new Bounds(
                    clientRect.left + context.windowBounds.left,
                    clientRect.top + context.windowBounds.top,
                    clientRect.width,
                    clientRect.height,
                  );
                }),
                (Bounds.fromDOMRectList = function (context, domRectList) {
                  var domRect = Array.from(domRectList).find(function (rect) {
                    return 0 !== rect.width;
                  });
                  return domRect
                    ? new Bounds(
                        domRect.left + context.windowBounds.left,
                        domRect.top + context.windowBounds.top,
                        domRect.width,
                        domRect.height,
                      )
                    : Bounds.EMPTY;
                }),
                (Bounds.EMPTY = new Bounds(0, 0, 0, 0)),
                Bounds
              );
            })(),
            parseBounds = function (context, node) {
              return Bounds.fromClientRect(
                context,
                node.getBoundingClientRect(),
              );
            },
            parseDocumentSize = function (document1) {
              var body = document1.body,
                documentElement = document1.documentElement;
              if (!body || !documentElement)
                throw Error('Unable to get document size');
              return new Bounds(
                0,
                0,
                Math.max(
                  Math.max(body.scrollWidth, documentElement.scrollWidth),
                  Math.max(body.offsetWidth, documentElement.offsetWidth),
                  Math.max(body.clientWidth, documentElement.clientWidth),
                ),
                Math.max(
                  Math.max(body.scrollHeight, documentElement.scrollHeight),
                  Math.max(body.offsetHeight, documentElement.offsetHeight),
                  Math.max(body.clientHeight, documentElement.clientHeight),
                ),
              );
            },
            toCodePoints$1 = function (str) {
              for (
                var codePoints = [], i = 0, length = str.length;
                i < length;

              ) {
                var value = str.charCodeAt(i++);
                if (value >= 55296 && value <= 56319 && i < length) {
                  var extra = str.charCodeAt(i++);
                  (64512 & extra) == 56320
                    ? codePoints.push(
                        ((1023 & value) << 10) + (1023 & extra) + 65536,
                      )
                    : (codePoints.push(value), i--);
                } else codePoints.push(value);
              }
              return codePoints;
            },
            fromCodePoint$1 = function () {
              for (var codePoints = [], _i = 0; _i < arguments.length; _i++)
                codePoints[_i] = arguments[_i];
              if (String.fromCodePoint)
                return String.fromCodePoint.apply(String, codePoints);
              var length = codePoints.length;
              if (!length) return '';
              for (
                var codeUnits = [], index = -1, result = '';
                ++index < length;

              ) {
                var codePoint = codePoints[index];
                codePoint <= 65535
                  ? codeUnits.push(codePoint)
                  : ((codePoint -= 65536),
                    codeUnits.push(
                      (codePoint >> 10) + 55296,
                      (codePoint % 1024) + 56320,
                    )),
                  (index + 1 === length || codeUnits.length > 16384) &&
                    ((result += String.fromCharCode.apply(String, codeUnits)),
                    (codeUnits.length = 0));
              }
              return result;
            },
            chars$2 =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            lookup$2 =
              'undefined' == typeof Uint8Array ? [] : new Uint8Array(256),
            i$2 = 0;
          i$2 < chars$2.length;
          i$2++
        )
          lookup$2[chars$2.charCodeAt(i$2)] = i$2;
        for (
          var chars$1$1 =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            lookup$1$1 =
              'undefined' == typeof Uint8Array ? [] : new Uint8Array(256),
            i$1$1 = 0;
          i$1$1 < chars$1$1.length;
          i$1$1++
        )
          lookup$1$1[chars$1$1.charCodeAt(i$1$1)] = i$1$1;
        for (
          var slice16$1 = function (view, start, end) {
              return view.slice
                ? view.slice(start, end)
                : new Uint16Array(Array.prototype.slice.call(view, start, end));
            },
            Trie$1 = (function () {
              function Trie(
                initialValue,
                errorValue,
                highStart,
                highValueIndex,
                index,
                data,
              ) {
                (this.initialValue = initialValue),
                  (this.errorValue = errorValue),
                  (this.highStart = highStart),
                  (this.highValueIndex = highValueIndex),
                  (this.index = index),
                  (this.data = data);
              }
              return (
                (Trie.prototype.get = function (codePoint) {
                  var ix;
                  if (codePoint >= 0) {
                    if (
                      codePoint < 55296 ||
                      (codePoint > 56319 && codePoint <= 65535)
                    )
                      return (
                        (ix =
                          ((ix = this.index[codePoint >> 5]) << 2) +
                          (31 & codePoint)),
                        this.data[ix]
                      );
                    if (codePoint <= 65535)
                      return (
                        (ix =
                          ((ix =
                            this.index[2048 + ((codePoint - 55296) >> 5)]) <<
                            2) +
                          (31 & codePoint)),
                        this.data[ix]
                      );
                    if (codePoint < this.highStart)
                      return (
                        (ix = 2080 + (codePoint >> 11)),
                        (ix = this.index[ix] + ((codePoint >> 5) & 63)),
                        (ix = ((ix = this.index[ix]) << 2) + (31 & codePoint)),
                        this.data[ix]
                      );
                    if (codePoint <= 1114111)
                      return this.data[this.highValueIndex];
                  }
                  return this.errorValue;
                }),
                Trie
              );
            })(),
            chars$3 =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            lookup$3 =
              'undefined' == typeof Uint8Array ? [] : new Uint8Array(256),
            i$3 = 0;
          i$3 < chars$3.length;
          i$3++
        )
          lookup$3[chars$3.charCodeAt(i$3)] = i$3;
        var ea_OP = [9001, 65288],
          UnicodeTrie$1 =
            ((view32 = Array.isArray(
              (buffer = (function (base64) {
                var i,
                  encoded1,
                  encoded2,
                  encoded3,
                  encoded4,
                  bufferLength = 0.75 * base64.length,
                  len = base64.length,
                  p = 0;
                '=' === base64[base64.length - 1] &&
                  (bufferLength--,
                  '=' === base64[base64.length - 2] && bufferLength--);
                var buffer =
                    'undefined' != typeof ArrayBuffer &&
                    'undefined' != typeof Uint8Array &&
                    void 0 !== Uint8Array.prototype.slice
                      ? new ArrayBuffer(bufferLength)
                      : Array(bufferLength),
                  bytes = Array.isArray(buffer)
                    ? buffer
                    : new Uint8Array(buffer);
                for (i = 0; i < len; i += 4)
                  (encoded1 = lookup$1$1[base64.charCodeAt(i)]),
                    (encoded2 = lookup$1$1[base64.charCodeAt(i + 1)]),
                    (encoded3 = lookup$1$1[base64.charCodeAt(i + 2)]),
                    (encoded4 = lookup$1$1[base64.charCodeAt(i + 3)]),
                    (bytes[p++] = (encoded1 << 2) | (encoded2 >> 4)),
                    (bytes[p++] = ((15 & encoded2) << 4) | (encoded3 >> 2)),
                    (bytes[p++] = ((3 & encoded3) << 6) | (63 & encoded4));
                return buffer;
              })(
                'KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==',
              )),
            )
              ? (function (buffer) {
                  for (
                    var length = buffer.length, bytes = [], i = 0;
                    i < length;
                    i += 4
                  )
                    bytes.push(
                      (buffer[i + 3] << 24) |
                        (buffer[i + 2] << 16) |
                        (buffer[i + 1] << 8) |
                        buffer[i],
                    );
                  return bytes;
                })(buffer)
              : new Uint32Array(buffer)),
            (index = slice16$1(
              (view16 = Array.isArray(buffer)
                ? (function (buffer) {
                    for (
                      var length = buffer.length, bytes = [], i = 0;
                      i < length;
                      i += 2
                    )
                      bytes.push((buffer[i + 1] << 8) | buffer[i]);
                    return bytes;
                  })(buffer)
                : new Uint16Array(buffer)),
              12,
              view32[4] / 2,
            )),
            (data =
              2 === view32[5]
                ? slice16$1(view16, (24 + view32[4]) / 2)
                : ((start = Math.ceil((24 + view32[4]) / 4)),
                  view32.slice
                    ? view32.slice(start, void 0)
                    : new Uint32Array(
                        Array.prototype.slice.call(view32, start, end),
                      ))),
            new Trie$1(
              view32[0],
              view32[1],
              view32[2],
              view32[3],
              index,
              data,
            )),
          ALPHABETICS = [30, 36],
          HARD_LINE_BREAKS = [1, 2, 3, 5],
          SPACE$1 = [10, 8],
          PREFIX_POSTFIX = [27, 26],
          LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE$1),
          KOREAN_SYLLABLE_BLOCK = [38, 39, 40, 34, 35],
          HYPHEN = [15, 13],
          codePointsToCharacterClasses = function (codePoints, lineBreak) {
            void 0 === lineBreak && (lineBreak = 'strict');
            var types = [],
              indices = [],
              categories = [];
            return (
              codePoints.forEach(function (codePoint, index) {
                var classType = UnicodeTrie$1.get(codePoint);
                if (
                  (classType > 50
                    ? (categories.push(!0), (classType -= 50))
                    : categories.push(!1),
                  -1 !== ['normal', 'auto', 'loose'].indexOf(lineBreak) &&
                    -1 !== [8208, 8211, 12316, 12448].indexOf(codePoint))
                )
                  return indices.push(index), types.push(16);
                if (4 === classType || 11 === classType) {
                  if (0 === index) return indices.push(index), types.push(30);
                  var prev = types[index - 1];
                  return -1 === LINE_BREAKS.indexOf(prev)
                    ? (indices.push(indices[index - 1]), types.push(prev))
                    : (indices.push(index), types.push(30));
                }
                return (indices.push(index), 31 === classType)
                  ? types.push('strict' === lineBreak ? 21 : 37)
                  : 42 === classType || 29 === classType
                    ? types.push(30)
                    : 43 === classType
                      ? (codePoint >= 131072 && codePoint <= 196605) ||
                        (codePoint >= 196608 && codePoint <= 262141)
                        ? types.push(37)
                        : types.push(30)
                      : void types.push(classType);
              }),
              [indices, types, categories]
            );
          },
          isAdjacentWithSpaceIgnored = function (
            a,
            b,
            currentIndex,
            classTypes,
          ) {
            var current = classTypes[currentIndex];
            if (Array.isArray(a) ? -1 !== a.indexOf(current) : a === current)
              for (var i = currentIndex; i <= classTypes.length; ) {
                var next = classTypes[++i];
                if (next === b) return !0;
                if (10 !== next) break;
              }
            if (10 === current)
              for (var i = currentIndex; i > 0; ) {
                var prev = classTypes[--i];
                if (Array.isArray(a) ? -1 !== a.indexOf(prev) : a === prev)
                  for (var n = currentIndex; n <= classTypes.length; ) {
                    var next = classTypes[++n];
                    if (next === b) return !0;
                    if (10 !== next) break;
                  }
                if (10 !== prev) break;
              }
            return !1;
          },
          previousNonSpaceClassType = function (currentIndex, classTypes) {
            for (var i = currentIndex; i >= 0; ) {
              var type = classTypes[i];
              if (10 !== type) return type;
              i--;
            }
            return 0;
          },
          _lineBreakAtIndex = function (
            codePoints,
            classTypes,
            indicies,
            index,
            forbiddenBreaks,
          ) {
            if (0 === indicies[index]) return '×';
            var currentIndex = index - 1;
            if (
              Array.isArray(forbiddenBreaks) &&
              !0 === forbiddenBreaks[currentIndex]
            )
              return '×';
            var beforeIndex = currentIndex - 1,
              afterIndex = currentIndex + 1,
              current = classTypes[currentIndex],
              before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0,
              next = classTypes[afterIndex];
            if (2 === current && 3 === next) return '×';
            if (-1 !== HARD_LINE_BREAKS.indexOf(current)) return '!';
            if (
              -1 !== HARD_LINE_BREAKS.indexOf(next) ||
              -1 !== SPACE$1.indexOf(next)
            )
              return '×';
            if (8 === previousNonSpaceClassType(currentIndex, classTypes))
              return '÷';
            if (
              11 === UnicodeTrie$1.get(codePoints[currentIndex]) ||
              ((32 === current || 33 === current) &&
                11 === UnicodeTrie$1.get(codePoints[afterIndex])) ||
              7 === current ||
              7 === next ||
              9 === current ||
              (-1 === [10, 13, 15].indexOf(current) && 9 === next) ||
              -1 !== [17, 18, 19, 24, 28].indexOf(next) ||
              22 === previousNonSpaceClassType(currentIndex, classTypes) ||
              isAdjacentWithSpaceIgnored(23, 22, currentIndex, classTypes) ||
              isAdjacentWithSpaceIgnored(
                [17, 18],
                21,
                currentIndex,
                classTypes,
              ) ||
              isAdjacentWithSpaceIgnored(12, 12, currentIndex, classTypes)
            )
              return '×';
            if (10 === current) return '÷';
            if (23 === current || 23 === next) return '×';
            if (16 === next || 16 === current) return '÷';
            if (
              -1 !== [13, 15, 21].indexOf(next) ||
              14 === current ||
              (36 === before && -1 !== HYPHEN.indexOf(current)) ||
              (28 === current && 36 === next) ||
              20 === next ||
              (-1 !== ALPHABETICS.indexOf(next) && 25 === current) ||
              (-1 !== ALPHABETICS.indexOf(current) && 25 === next) ||
              (27 === current && -1 !== [37, 32, 33].indexOf(next)) ||
              (-1 !== [37, 32, 33].indexOf(current) && 26 === next) ||
              (-1 !== ALPHABETICS.indexOf(current) &&
                -1 !== PREFIX_POSTFIX.indexOf(next)) ||
              (-1 !== PREFIX_POSTFIX.indexOf(current) &&
                -1 !== ALPHABETICS.indexOf(next)) ||
              (-1 !== [27, 26].indexOf(current) &&
                (25 === next ||
                  (-1 !== [22, 15].indexOf(next) &&
                    25 === classTypes[afterIndex + 1]))) ||
              (-1 !== [22, 15].indexOf(current) && 25 === next) ||
              (25 === current && -1 !== [25, 28, 24].indexOf(next))
            )
              return '×';
            if (-1 !== [25, 28, 24, 17, 18].indexOf(next))
              for (var prevIndex = currentIndex; prevIndex >= 0; ) {
                var type = classTypes[prevIndex];
                if (25 === type) return '×';
                if (-1 !== [28, 24].indexOf(type)) prevIndex--;
                else break;
              }
            if (-1 !== [27, 26].indexOf(next))
              for (
                var prevIndex =
                  -1 !== [17, 18].indexOf(current) ? beforeIndex : currentIndex;
                prevIndex >= 0;

              ) {
                var type = classTypes[prevIndex];
                if (25 === type) return '×';
                if (-1 !== [28, 24].indexOf(type)) prevIndex--;
                else break;
              }
            if (
              (38 === current && -1 !== [38, 39, 34, 35].indexOf(next)) ||
              (-1 !== [39, 34].indexOf(current) &&
                -1 !== [39, 40].indexOf(next)) ||
              (-1 !== [40, 35].indexOf(current) && 40 === next) ||
              (-1 !== KOREAN_SYLLABLE_BLOCK.indexOf(current) &&
                -1 !== [20, 26].indexOf(next)) ||
              (-1 !== KOREAN_SYLLABLE_BLOCK.indexOf(next) && 27 === current) ||
              (-1 !== ALPHABETICS.indexOf(current) &&
                -1 !== ALPHABETICS.indexOf(next)) ||
              (24 === current && -1 !== ALPHABETICS.indexOf(next)) ||
              (-1 !== ALPHABETICS.concat(25).indexOf(current) &&
                22 === next &&
                -1 === ea_OP.indexOf(codePoints[afterIndex])) ||
              (-1 !== ALPHABETICS.concat(25).indexOf(next) && 18 === current)
            )
              return '×';
            if (41 === current && 41 === next) {
              for (var i = indicies[currentIndex], count = 1; i > 0; )
                if (41 === classTypes[--i]) count++;
                else break;
              if (count % 2 != 0) return '×';
            }
            return 32 === current && 33 === next ? '×' : '÷';
          },
          cssFormattedClasses = function (codePoints, options) {
            options || (options = { lineBreak: 'normal', wordBreak: 'normal' });
            var _a = codePointsToCharacterClasses(
                codePoints,
                options.lineBreak,
              ),
              indicies = _a[0],
              classTypes = _a[1],
              isLetterNumber = _a[2];
            return (
              ('break-all' === options.wordBreak ||
                'break-word' === options.wordBreak) &&
                (classTypes = classTypes.map(function (type) {
                  return -1 !== [25, 30, 42].indexOf(type) ? 37 : type;
                })),
              [
                indicies,
                classTypes,
                'keep-all' === options.wordBreak
                  ? isLetterNumber.map(function (letterNumber, i) {
                      return (
                        letterNumber &&
                        codePoints[i] >= 19968 &&
                        codePoints[i] <= 40959
                      );
                    })
                  : void 0,
              ]
            );
          },
          Break = (function () {
            function Break(codePoints, lineBreak, start, end) {
              (this.codePoints = codePoints),
                (this.required = '!' === lineBreak),
                (this.start = start),
                (this.end = end);
            }
            return (
              (Break.prototype.slice = function () {
                return fromCodePoint$1.apply(
                  void 0,
                  this.codePoints.slice(this.start, this.end),
                );
              }),
              Break
            );
          })(),
          LineBreaker = function (str, options) {
            var codePoints = toCodePoints$1(str),
              _a = cssFormattedClasses(codePoints, options),
              indicies = _a[0],
              classTypes = _a[1],
              forbiddenBreakpoints = _a[2],
              length = codePoints.length,
              lastEnd = 0,
              nextIndex = 0;
            return {
              next: function () {
                if (nextIndex >= length) return { done: !0, value: null };
                for (
                  var lineBreak = '×';
                  nextIndex < length &&
                  '×' ===
                    (lineBreak = _lineBreakAtIndex(
                      codePoints,
                      classTypes,
                      indicies,
                      ++nextIndex,
                      forbiddenBreakpoints,
                    ));

                );
                if ('×' !== lineBreak || nextIndex === length) {
                  var value = new Break(
                    codePoints,
                    lineBreak,
                    lastEnd,
                    nextIndex,
                  );
                  return (lastEnd = nextIndex), { value: value, done: !1 };
                }
                return { done: !0, value: null };
              },
            };
          },
          isDigit = function (codePoint) {
            return codePoint >= 48 && codePoint <= 57;
          },
          isHex = function (codePoint) {
            return (
              isDigit(codePoint) ||
              (codePoint >= 65 && codePoint <= 70) ||
              (codePoint >= 97 && codePoint <= 102)
            );
          },
          isWhiteSpace = function (codePoint) {
            return 10 === codePoint || 9 === codePoint || 32 === codePoint;
          },
          isNameStartCodePoint = function (codePoint) {
            var codePoint1;
            return (
              ((codePoint1 = codePoint) >= 97 && codePoint1 <= 122) ||
              (codePoint1 >= 65 && codePoint1 <= 90) ||
              codePoint >= 128 ||
              95 === codePoint
            );
          },
          isNameCodePoint = function (codePoint) {
            return (
              isNameStartCodePoint(codePoint) ||
              isDigit(codePoint) ||
              45 === codePoint
            );
          },
          isValidEscape = function (c1, c2) {
            return 92 === c1 && 10 !== c2;
          },
          isIdentifierStart = function (c1, c2, c3) {
            return 45 === c1
              ? isNameStartCodePoint(c2) || isValidEscape(c2, c3)
              : !!(
                  isNameStartCodePoint(c1) ||
                  (92 === c1 && isValidEscape(c1, c2))
                );
          },
          isNumberStart = function (c1, c2, c3) {
            return 43 === c1 || 45 === c1
              ? !!isDigit(c2) || (46 === c2 && isDigit(c3))
              : 46 === c1
                ? isDigit(c2)
                : isDigit(c1);
          },
          stringToNumber = function (codePoints) {
            var c = 0,
              sign = 1;
            (43 === codePoints[0] || 45 === codePoints[c]) &&
              (45 === codePoints[c] && (sign = -1), c++);
            for (var integers = []; isDigit(codePoints[c]); )
              integers.push(codePoints[c++]);
            var int = integers.length
              ? parseInt(fromCodePoint$1.apply(void 0, integers), 10)
              : 0;
            46 === codePoints[c] && c++;
            for (var fraction = []; isDigit(codePoints[c]); )
              fraction.push(codePoints[c++]);
            var fracd = fraction.length,
              frac = fracd
                ? parseInt(fromCodePoint$1.apply(void 0, fraction), 10)
                : 0;
            (69 === codePoints[c] || 101 === codePoints[c]) && c++;
            var expsign = 1;
            (43 === codePoints[c] || 45 === codePoints[c]) &&
              (45 === codePoints[c] && (expsign = -1), c++);
            for (var exponent = []; isDigit(codePoints[c]); )
              exponent.push(codePoints[c++]);
            return (
              sign *
              (int + frac * Math.pow(10, -fracd)) *
              Math.pow(
                10,
                expsign *
                  (exponent.length
                    ? parseInt(fromCodePoint$1.apply(void 0, exponent), 10)
                    : 0),
              )
            );
          },
          LEFT_PARENTHESIS_TOKEN = { type: 2 },
          RIGHT_PARENTHESIS_TOKEN = { type: 3 },
          COMMA_TOKEN = { type: 4 },
          SUFFIX_MATCH_TOKEN = { type: 13 },
          PREFIX_MATCH_TOKEN = { type: 8 },
          COLUMN_TOKEN = { type: 21 },
          DASH_MATCH_TOKEN = { type: 9 },
          INCLUDE_MATCH_TOKEN = { type: 10 },
          LEFT_CURLY_BRACKET_TOKEN = { type: 11 },
          RIGHT_CURLY_BRACKET_TOKEN = { type: 12 },
          SUBSTRING_MATCH_TOKEN = { type: 14 },
          BAD_URL_TOKEN = { type: 23 },
          BAD_STRING_TOKEN = { type: 1 },
          CDO_TOKEN = { type: 25 },
          CDC_TOKEN = { type: 24 },
          COLON_TOKEN = { type: 26 },
          SEMICOLON_TOKEN = { type: 27 },
          LEFT_SQUARE_BRACKET_TOKEN = { type: 28 },
          RIGHT_SQUARE_BRACKET_TOKEN = { type: 29 },
          WHITESPACE_TOKEN = { type: 31 },
          EOF_TOKEN = { type: 32 },
          Tokenizer = (function () {
            function Tokenizer() {
              this._value = [];
            }
            return (
              (Tokenizer.prototype.write = function (chunk) {
                this._value = this._value.concat(toCodePoints$1(chunk));
              }),
              (Tokenizer.prototype.read = function () {
                for (
                  var tokens = [], token = this.consumeToken();
                  token !== EOF_TOKEN;

                )
                  tokens.push(token), (token = this.consumeToken());
                return tokens;
              }),
              (Tokenizer.prototype.consumeToken = function () {
                var codePoint = this.consumeCodePoint();
                switch (codePoint) {
                  case 34:
                    return this.consumeStringToken(34);
                  case 35:
                    var c1 = this.peekCodePoint(0),
                      c2 = this.peekCodePoint(1),
                      c3 = this.peekCodePoint(2);
                    if (isNameCodePoint(c1) || isValidEscape(c2, c3)) {
                      var flags = isIdentifierStart(c1, c2, c3) ? 2 : 1,
                        value = this.consumeName();
                      return { type: 5, value: value, flags: flags };
                    }
                    break;
                  case 36:
                    if (61 === this.peekCodePoint(0))
                      return this.consumeCodePoint(), SUFFIX_MATCH_TOKEN;
                    break;
                  case 39:
                    return this.consumeStringToken(39);
                  case 40:
                    return LEFT_PARENTHESIS_TOKEN;
                  case 41:
                    return RIGHT_PARENTHESIS_TOKEN;
                  case 42:
                    if (61 === this.peekCodePoint(0))
                      return this.consumeCodePoint(), SUBSTRING_MATCH_TOKEN;
                    break;
                  case 43:
                  case 46:
                    if (
                      isNumberStart(
                        codePoint,
                        this.peekCodePoint(0),
                        this.peekCodePoint(1),
                      )
                    )
                      return (
                        this.reconsumeCodePoint(codePoint),
                        this.consumeNumericToken()
                      );
                    break;
                  case 44:
                    return COMMA_TOKEN;
                  case 45:
                    var e2 = this.peekCodePoint(0),
                      e3 = this.peekCodePoint(1);
                    if (isNumberStart(codePoint, e2, e3))
                      return (
                        this.reconsumeCodePoint(codePoint),
                        this.consumeNumericToken()
                      );
                    if (isIdentifierStart(codePoint, e2, e3))
                      return (
                        this.reconsumeCodePoint(codePoint),
                        this.consumeIdentLikeToken()
                      );
                    if (45 === e2 && 62 === e3)
                      return (
                        this.consumeCodePoint(),
                        this.consumeCodePoint(),
                        CDC_TOKEN
                      );
                    break;
                  case 47:
                    if (42 === this.peekCodePoint(0))
                      for (this.consumeCodePoint(); ; ) {
                        var c = this.consumeCodePoint();
                        if (
                          (42 === c && 47 === (c = this.consumeCodePoint())) ||
                          -1 === c
                        )
                          return this.consumeToken();
                      }
                    break;
                  case 58:
                    return COLON_TOKEN;
                  case 59:
                    return SEMICOLON_TOKEN;
                  case 60:
                    if (
                      33 === this.peekCodePoint(0) &&
                      45 === this.peekCodePoint(1) &&
                      45 === this.peekCodePoint(2)
                    )
                      return (
                        this.consumeCodePoint(),
                        this.consumeCodePoint(),
                        CDO_TOKEN
                      );
                    break;
                  case 64:
                    if (
                      isIdentifierStart(
                        this.peekCodePoint(0),
                        this.peekCodePoint(1),
                        this.peekCodePoint(2),
                      )
                    ) {
                      var value = this.consumeName();
                      return { type: 7, value: value };
                    }
                    break;
                  case 91:
                    return LEFT_SQUARE_BRACKET_TOKEN;
                  case 92:
                    if (isValidEscape(codePoint, this.peekCodePoint(0)))
                      return (
                        this.reconsumeCodePoint(codePoint),
                        this.consumeIdentLikeToken()
                      );
                    break;
                  case 93:
                    return RIGHT_SQUARE_BRACKET_TOKEN;
                  case 61:
                    if (61 === this.peekCodePoint(0))
                      return this.consumeCodePoint(), PREFIX_MATCH_TOKEN;
                    break;
                  case 123:
                    return LEFT_CURLY_BRACKET_TOKEN;
                  case 125:
                    return RIGHT_CURLY_BRACKET_TOKEN;
                  case 117:
                  case 85:
                    var u1 = this.peekCodePoint(0),
                      u2 = this.peekCodePoint(1);
                    return (
                      43 === u1 &&
                        (isHex(u2) || 63 === u2) &&
                        (this.consumeCodePoint(),
                        this.consumeUnicodeRangeToken()),
                      this.reconsumeCodePoint(codePoint),
                      this.consumeIdentLikeToken()
                    );
                  case 124:
                    if (61 === this.peekCodePoint(0))
                      return this.consumeCodePoint(), DASH_MATCH_TOKEN;
                    if (124 === this.peekCodePoint(0))
                      return this.consumeCodePoint(), COLUMN_TOKEN;
                    break;
                  case 126:
                    if (61 === this.peekCodePoint(0))
                      return this.consumeCodePoint(), INCLUDE_MATCH_TOKEN;
                    break;
                  case -1:
                    return EOF_TOKEN;
                }
                return isWhiteSpace(codePoint)
                  ? (this.consumeWhiteSpace(), WHITESPACE_TOKEN)
                  : isDigit(codePoint)
                    ? (this.reconsumeCodePoint(codePoint),
                      this.consumeNumericToken())
                    : isNameStartCodePoint(codePoint)
                      ? (this.reconsumeCodePoint(codePoint),
                        this.consumeIdentLikeToken())
                      : { type: 6, value: fromCodePoint$1(codePoint) };
              }),
              (Tokenizer.prototype.consumeCodePoint = function () {
                var value = this._value.shift();
                return void 0 === value ? -1 : value;
              }),
              (Tokenizer.prototype.reconsumeCodePoint = function (codePoint) {
                this._value.unshift(codePoint);
              }),
              (Tokenizer.prototype.peekCodePoint = function (delta) {
                return delta >= this._value.length ? -1 : this._value[delta];
              }),
              (Tokenizer.prototype.consumeUnicodeRangeToken = function () {
                for (
                  var digits = [], codePoint = this.consumeCodePoint();
                  isHex(codePoint) && digits.length < 6;

                )
                  digits.push(codePoint), (codePoint = this.consumeCodePoint());
                for (
                  var questionMarks = !1;
                  63 === codePoint && digits.length < 6;

                )
                  digits.push(codePoint),
                    (codePoint = this.consumeCodePoint()),
                    (questionMarks = !0);
                if (questionMarks) {
                  var start_1 = parseInt(
                      fromCodePoint$1.apply(
                        void 0,
                        digits.map(function (digit) {
                          return 63 === digit ? 48 : digit;
                        }),
                      ),
                      16,
                    ),
                    end = parseInt(
                      fromCodePoint$1.apply(
                        void 0,
                        digits.map(function (digit) {
                          return 63 === digit ? 70 : digit;
                        }),
                      ),
                      16,
                    );
                  return { type: 30, start: start_1, end: end };
                }
                var start = parseInt(fromCodePoint$1.apply(void 0, digits), 16);
                if (
                  !(
                    45 === this.peekCodePoint(0) && isHex(this.peekCodePoint(1))
                  )
                )
                  return { type: 30, start: start, end: start };
                this.consumeCodePoint(), (codePoint = this.consumeCodePoint());
                for (
                  var endDigits = [];
                  isHex(codePoint) && endDigits.length < 6;

                )
                  endDigits.push(codePoint),
                    (codePoint = this.consumeCodePoint());
                var end = parseInt(
                  fromCodePoint$1.apply(void 0, endDigits),
                  16,
                );
                return { type: 30, start: start, end: end };
              }),
              (Tokenizer.prototype.consumeIdentLikeToken = function () {
                var value = this.consumeName();
                return 'url' === value.toLowerCase() &&
                  40 === this.peekCodePoint(0)
                  ? (this.consumeCodePoint(), this.consumeUrlToken())
                  : 40 === this.peekCodePoint(0)
                    ? (this.consumeCodePoint(), { type: 19, value: value })
                    : { type: 20, value: value };
              }),
              (Tokenizer.prototype.consumeUrlToken = function () {
                var value = [];
                if ((this.consumeWhiteSpace(), -1 === this.peekCodePoint(0)))
                  return { type: 22, value: '' };
                var next = this.peekCodePoint(0);
                if (39 === next || 34 === next) {
                  var stringToken = this.consumeStringToken(
                    this.consumeCodePoint(),
                  );
                  return 0 === stringToken.type &&
                    (this.consumeWhiteSpace(),
                    -1 === this.peekCodePoint(0) ||
                      41 === this.peekCodePoint(0))
                    ? (this.consumeCodePoint(),
                      { type: 22, value: stringToken.value })
                    : (this.consumeBadUrlRemnants(), BAD_URL_TOKEN);
                }
                for (;;) {
                  var codePoint,
                    codePoint1 = this.consumeCodePoint();
                  if (-1 === codePoint1 || 41 === codePoint1)
                    return {
                      type: 22,
                      value: fromCodePoint$1.apply(void 0, value),
                    };
                  if (isWhiteSpace(codePoint1)) {
                    if (
                      (this.consumeWhiteSpace(),
                      -1 === this.peekCodePoint(0) ||
                        41 === this.peekCodePoint(0))
                    )
                      return (
                        this.consumeCodePoint(),
                        {
                          type: 22,
                          value: fromCodePoint$1.apply(void 0, value),
                        }
                      );
                    return this.consumeBadUrlRemnants(), BAD_URL_TOKEN;
                  }
                  if (
                    34 === codePoint1 ||
                    39 === codePoint1 ||
                    40 === codePoint1 ||
                    ((codePoint = codePoint1) >= 0 && codePoint <= 8) ||
                    11 === codePoint ||
                    (codePoint >= 14 && codePoint <= 31) ||
                    127 === codePoint
                  )
                    return this.consumeBadUrlRemnants(), BAD_URL_TOKEN;
                  if (92 === codePoint1) {
                    if (!isValidEscape(codePoint1, this.peekCodePoint(0)))
                      return this.consumeBadUrlRemnants(), BAD_URL_TOKEN;
                    value.push(this.consumeEscapedCodePoint());
                  } else value.push(codePoint1);
                }
              }),
              (Tokenizer.prototype.consumeWhiteSpace = function () {
                for (; isWhiteSpace(this.peekCodePoint(0)); )
                  this.consumeCodePoint();
              }),
              (Tokenizer.prototype.consumeBadUrlRemnants = function () {
                for (;;) {
                  var codePoint = this.consumeCodePoint();
                  if (41 === codePoint || -1 === codePoint) return;
                  isValidEscape(codePoint, this.peekCodePoint(0)) &&
                    this.consumeEscapedCodePoint();
                }
              }),
              (Tokenizer.prototype.consumeStringSlice = function (count) {
                for (var value = ''; count > 0; ) {
                  var amount = Math.min(5e4, count);
                  (value += fromCodePoint$1.apply(
                    void 0,
                    this._value.splice(0, amount),
                  )),
                    (count -= amount);
                }
                return this._value.shift(), value;
              }),
              (Tokenizer.prototype.consumeStringToken = function (
                endingCodePoint,
              ) {
                for (var value = '', i = 0; ; ) {
                  var codePoint = this._value[i];
                  if (
                    -1 === codePoint ||
                    void 0 === codePoint ||
                    codePoint === endingCodePoint
                  )
                    return {
                      type: 0,
                      value: (value += this.consumeStringSlice(i)),
                    };
                  if (10 === codePoint)
                    return this._value.splice(0, i), BAD_STRING_TOKEN;
                  if (92 === codePoint) {
                    var next = this._value[i + 1];
                    -1 !== next &&
                      void 0 !== next &&
                      (10 === next
                        ? ((value += this.consumeStringSlice(i)),
                          (i = -1),
                          this._value.shift())
                        : isValidEscape(codePoint, next) &&
                          ((value +=
                            this.consumeStringSlice(i) +
                            fromCodePoint$1(this.consumeEscapedCodePoint())),
                          (i = -1)));
                  }
                  i++;
                }
              }),
              (Tokenizer.prototype.consumeNumber = function () {
                var repr = [],
                  type = 4,
                  c1 = this.peekCodePoint(0);
                for (
                  (43 === c1 || 45 === c1) &&
                  repr.push(this.consumeCodePoint());
                  isDigit(this.peekCodePoint(0));

                )
                  repr.push(this.consumeCodePoint());
                c1 = this.peekCodePoint(0);
                var c2 = this.peekCodePoint(1);
                if (46 === c1 && isDigit(c2))
                  for (
                    repr.push(this.consumeCodePoint(), this.consumeCodePoint()),
                      type = 8;
                    isDigit(this.peekCodePoint(0));

                  )
                    repr.push(this.consumeCodePoint());
                (c1 = this.peekCodePoint(0)), (c2 = this.peekCodePoint(1));
                var c3 = this.peekCodePoint(2);
                if (
                  (69 === c1 || 101 === c1) &&
                  (((43 === c2 || 45 === c2) && isDigit(c3)) || isDigit(c2))
                )
                  for (
                    repr.push(this.consumeCodePoint(), this.consumeCodePoint()),
                      type = 8;
                    isDigit(this.peekCodePoint(0));

                  )
                    repr.push(this.consumeCodePoint());
                return [stringToNumber(repr), type];
              }),
              (Tokenizer.prototype.consumeNumericToken = function () {
                var _a = this.consumeNumber(),
                  number = _a[0],
                  flags = _a[1],
                  c1 = this.peekCodePoint(0);
                return isIdentifierStart(
                  c1,
                  this.peekCodePoint(1),
                  this.peekCodePoint(2),
                )
                  ? {
                      type: 15,
                      number: number,
                      flags: flags,
                      unit: this.consumeName(),
                    }
                  : 37 === c1
                    ? (this.consumeCodePoint(),
                      { type: 16, number: number, flags: flags })
                    : { type: 17, number: number, flags: flags };
              }),
              (Tokenizer.prototype.consumeEscapedCodePoint = function () {
                var codePoint = this.consumeCodePoint();
                if (isHex(codePoint)) {
                  for (
                    var hex = fromCodePoint$1(codePoint);
                    isHex(this.peekCodePoint(0)) && hex.length < 6;

                  )
                    hex += fromCodePoint$1(this.consumeCodePoint());
                  isWhiteSpace(this.peekCodePoint(0)) &&
                    this.consumeCodePoint();
                  var hexCodePoint = parseInt(hex, 16);
                  return 0 === hexCodePoint ||
                    (hexCodePoint >= 55296 && hexCodePoint <= 57343) ||
                    hexCodePoint > 1114111
                    ? 65533
                    : hexCodePoint;
                }
                return -1 === codePoint ? 65533 : codePoint;
              }),
              (Tokenizer.prototype.consumeName = function () {
                for (var result = ''; ; ) {
                  var codePoint = this.consumeCodePoint();
                  if (isNameCodePoint(codePoint))
                    result += fromCodePoint$1(codePoint);
                  else {
                    if (!isValidEscape(codePoint, this.peekCodePoint(0)))
                      return this.reconsumeCodePoint(codePoint), result;
                    result += fromCodePoint$1(this.consumeEscapedCodePoint());
                  }
                }
              }),
              Tokenizer
            );
          })(),
          Parser = (function () {
            function Parser(tokens) {
              this._tokens = tokens;
            }
            return (
              (Parser.create = function (value) {
                var tokenizer = new Tokenizer();
                return tokenizer.write(value), new Parser(tokenizer.read());
              }),
              (Parser.parseValue = function (value) {
                return Parser.create(value).parseComponentValue();
              }),
              (Parser.parseValues = function (value) {
                return Parser.create(value).parseComponentValues();
              }),
              (Parser.prototype.parseComponentValue = function () {
                for (var token = this.consumeToken(); 31 === token.type; )
                  token = this.consumeToken();
                if (32 === token.type)
                  throw SyntaxError(
                    'Error parsing CSS component value, unexpected EOF',
                  );
                this.reconsumeToken(token);
                var value = this.consumeComponentValue();
                do token = this.consumeToken();
                while (31 === token.type);
                if (32 === token.type) return value;
                throw SyntaxError(
                  'Error parsing CSS component value, multiple values found when expecting only one',
                );
              }),
              (Parser.prototype.parseComponentValues = function () {
                for (var values = []; ; ) {
                  var value = this.consumeComponentValue();
                  if (32 === value.type) return values;
                  values.push(value), values.push();
                }
              }),
              (Parser.prototype.consumeComponentValue = function () {
                var token = this.consumeToken();
                switch (token.type) {
                  case 11:
                  case 28:
                  case 2:
                    return this.consumeSimpleBlock(token.type);
                  case 19:
                    return this.consumeFunction(token);
                }
                return token;
              }),
              (Parser.prototype.consumeSimpleBlock = function (type) {
                for (
                  var block = { type: type, values: [] },
                    token = this.consumeToken();
                  ;

                ) {
                  if (32 === token.type || isEndingTokenFor(token, type))
                    return block;
                  this.reconsumeToken(token),
                    block.values.push(this.consumeComponentValue()),
                    (token = this.consumeToken());
                }
              }),
              (Parser.prototype.consumeFunction = function (functionToken) {
                for (
                  var cssFunction = {
                    name: functionToken.value,
                    values: [],
                    type: 18,
                  };
                  ;

                ) {
                  var token = this.consumeToken();
                  if (32 === token.type || 3 === token.type) return cssFunction;
                  this.reconsumeToken(token),
                    cssFunction.values.push(this.consumeComponentValue());
                }
              }),
              (Parser.prototype.consumeToken = function () {
                var token = this._tokens.shift();
                return void 0 === token ? EOF_TOKEN : token;
              }),
              (Parser.prototype.reconsumeToken = function (token) {
                this._tokens.unshift(token);
              }),
              Parser
            );
          })(),
          isDimensionToken = function (token) {
            return 15 === token.type;
          },
          isNumberToken = function (token) {
            return 17 === token.type;
          },
          isIdentToken = function (token) {
            return 20 === token.type;
          },
          isStringToken = function (token) {
            return 0 === token.type;
          },
          isIdentWithValue = function (token, value) {
            return isIdentToken(token) && token.value === value;
          },
          nonWhiteSpace = function (token) {
            return 31 !== token.type;
          },
          nonFunctionArgSeparator = function (token) {
            return 31 !== token.type && 4 !== token.type;
          },
          parseFunctionArgs = function (tokens) {
            var args = [],
              arg = [];
            return (
              tokens.forEach(function (token) {
                if (4 === token.type) {
                  if (0 === arg.length)
                    throw Error(
                      'Error parsing function args, zero tokens for arg',
                    );
                  args.push(arg), (arg = []);
                  return;
                }
                31 !== token.type && arg.push(token);
              }),
              arg.length && args.push(arg),
              args
            );
          },
          isEndingTokenFor = function (token, type) {
            return (
              (11 === type && 12 === token.type) ||
              (28 === type && 29 === token.type) ||
              (2 === type && 3 === token.type)
            );
          },
          isLength = function (token) {
            return 17 === token.type || 15 === token.type;
          },
          isLengthPercentage = function (token) {
            return 16 === token.type || isLength(token);
          },
          parseLengthPercentageTuple = function (tokens) {
            return tokens.length > 1 ? [tokens[0], tokens[1]] : [tokens[0]];
          },
          ZERO_LENGTH = { type: 17, number: 0, flags: 4 },
          FIFTY_PERCENT = { type: 16, number: 50, flags: 4 },
          HUNDRED_PERCENT = { type: 16, number: 100, flags: 4 },
          getAbsoluteValueForTuple = function (tuple, width, height) {
            var x = tuple[0],
              y = tuple[1];
            return [
              getAbsoluteValue(x, width),
              getAbsoluteValue(void 0 !== y ? y : x, height),
            ];
          },
          getAbsoluteValue = function (token, parent) {
            if (16 === token.type) return (token.number / 100) * parent;
            if (isDimensionToken(token))
              switch (token.unit) {
                case 'rem':
                case 'em':
                  return 16 * token.number;
              }
            return token.number;
          },
          GRAD = 'grad',
          TURN = 'turn',
          angle = {
            parse: function (_context, value) {
              if (15 === value.type)
                switch (value.unit) {
                  case 'deg':
                    return (Math.PI * value.number) / 180;
                  case GRAD:
                    return (Math.PI / 200) * value.number;
                  case 'rad':
                    return value.number;
                  case TURN:
                    return 2 * Math.PI * value.number;
                }
              throw Error('Unsupported angle type');
            },
          },
          isAngle = function (value) {
            return (
              15 === value.type &&
              ('deg' === value.unit ||
                value.unit === GRAD ||
                'rad' === value.unit ||
                value.unit === TURN)
            );
          },
          parseNamedSide = function (tokens) {
            switch (
              tokens
                .filter(isIdentToken)
                .map(function (ident) {
                  return ident.value;
                })
                .join(' ')
            ) {
              case 'to bottom right':
              case 'to right bottom':
              case 'left top':
              case 'top left':
                return [ZERO_LENGTH, ZERO_LENGTH];
              case 'to top':
              case 'bottom':
                return deg(0);
              case 'to bottom left':
              case 'to left bottom':
              case 'right top':
              case 'top right':
                return [ZERO_LENGTH, HUNDRED_PERCENT];
              case 'to right':
              case 'left':
                return deg(90);
              case 'to top left':
              case 'to left top':
              case 'right bottom':
              case 'bottom right':
                return [HUNDRED_PERCENT, HUNDRED_PERCENT];
              case 'to bottom':
              case 'top':
                return deg(180);
              case 'to top right':
              case 'to right top':
              case 'left bottom':
              case 'bottom left':
                return [HUNDRED_PERCENT, ZERO_LENGTH];
              case 'to left':
              case 'right':
                return deg(270);
            }
            return 0;
          },
          deg = function (deg) {
            return (Math.PI * deg) / 180;
          },
          color$1 = {
            parse: function (context, value) {
              if (18 === value.type) {
                var colorFunction = SUPPORTED_COLOR_FUNCTIONS[value.name];
                if (void 0 === colorFunction)
                  throw Error(
                    'Attempting to parse an unsupported color function "' +
                      value.name +
                      '"',
                  );
                return colorFunction(context, value.values);
              }
              if (5 === value.type) {
                if (3 === value.value.length) {
                  var r = value.value.substring(0, 1),
                    g = value.value.substring(1, 2),
                    b = value.value.substring(2, 3);
                  return pack(
                    parseInt(r + r, 16),
                    parseInt(g + g, 16),
                    parseInt(b + b, 16),
                    1,
                  );
                }
                if (4 === value.value.length) {
                  var r = value.value.substring(0, 1),
                    g = value.value.substring(1, 2),
                    b = value.value.substring(2, 3),
                    a = value.value.substring(3, 4);
                  return pack(
                    parseInt(r + r, 16),
                    parseInt(g + g, 16),
                    parseInt(b + b, 16),
                    parseInt(a + a, 16) / 255,
                  );
                }
                if (6 === value.value.length) {
                  var r = value.value.substring(0, 2),
                    g = value.value.substring(2, 4),
                    b = value.value.substring(4, 6);
                  return pack(
                    parseInt(r, 16),
                    parseInt(g, 16),
                    parseInt(b, 16),
                    1,
                  );
                }
                if (8 === value.value.length) {
                  var r = value.value.substring(0, 2),
                    g = value.value.substring(2, 4),
                    b = value.value.substring(4, 6),
                    a = value.value.substring(6, 8);
                  return pack(
                    parseInt(r, 16),
                    parseInt(g, 16),
                    parseInt(b, 16),
                    parseInt(a, 16) / 255,
                  );
                }
              }
              if (20 === value.type) {
                var namedColor = COLORS[value.value.toUpperCase()];
                if (void 0 !== namedColor) return namedColor;
              }
              return COLORS.TRANSPARENT;
            },
          },
          isTransparent = function (color) {
            return (255 & color) == 0;
          },
          asString = function (color) {
            var alpha = 255 & color,
              blue = 255 & (color >> 8),
              green = 255 & (color >> 16),
              red = 255 & (color >> 24);
            return alpha < 255
              ? 'rgba(' +
                  red +
                  ',' +
                  green +
                  ',' +
                  blue +
                  ',' +
                  alpha / 255 +
                  ')'
              : 'rgb(' + red + ',' + green + ',' + blue + ')';
          },
          pack = function (r, g, b, a) {
            return (
              ((r << 24) |
                (g << 16) |
                (b << 8) |
                (Math.round(255 * a) << 0)) >>>
              0
            );
          },
          getTokenColorValue = function (token, i) {
            if (17 === token.type) return token.number;
            if (16 === token.type) {
              var max = 3 === i ? 1 : 255;
              return 3 === i
                ? (token.number / 100) * max
                : Math.round((token.number / 100) * max);
            }
            return 0;
          },
          rgb = function (_context, args) {
            var tokens = args.filter(nonFunctionArgSeparator);
            if (3 === tokens.length) {
              var _a = tokens.map(getTokenColorValue),
                r = _a[0],
                g = _a[1],
                b = _a[2];
              return pack(r, g, b, 1);
            }
            if (4 === tokens.length) {
              var _b = tokens.map(getTokenColorValue),
                r = _b[0],
                g = _b[1],
                b = _b[2];
              return pack(r, g, b, _b[3]);
            }
            return 0;
          };
        function hue2rgb(t1, t2, hue) {
          return (hue < 0 && (hue += 1), hue >= 1 && (hue -= 1), hue < 1 / 6)
            ? (t2 - t1) * hue * 6 + t1
            : hue < 0.5
              ? t2
              : hue < 2 / 3
                ? (t2 - t1) * 6 * (2 / 3 - hue) + t1
                : t1;
        }
        var hsl = function (context, args) {
            var tokens = args.filter(nonFunctionArgSeparator),
              hue = tokens[0],
              saturation = tokens[1],
              lightness = tokens[2],
              alpha = tokens[3],
              h =
                (17 === hue.type
                  ? deg(hue.number)
                  : angle.parse(context, hue)) /
                (2 * Math.PI),
              s = isLengthPercentage(saturation) ? saturation.number / 100 : 0,
              l = isLengthPercentage(lightness) ? lightness.number / 100 : 0,
              a =
                void 0 !== alpha && isLengthPercentage(alpha)
                  ? getAbsoluteValue(alpha, 1)
                  : 1;
            if (0 === s) return pack(255 * l, 255 * l, 255 * l, 1);
            var t2 = l <= 0.5 ? l * (s + 1) : l + s - l * s,
              t1 = 2 * l - t2;
            return pack(
              255 * hue2rgb(t1, t2, h + 1 / 3),
              255 * hue2rgb(t1, t2, h),
              255 * hue2rgb(t1, t2, h - 1 / 3),
              a,
            );
          },
          SUPPORTED_COLOR_FUNCTIONS = {
            hsl: hsl,
            hsla: hsl,
            rgb: rgb,
            rgba: rgb,
          },
          parseColor = function (context, value) {
            return color$1.parse(
              context,
              Parser.create(value).parseComponentValue(),
            );
          },
          COLORS = {
            ALICEBLUE: 4042850303,
            ANTIQUEWHITE: 4209760255,
            AQUA: 16777215,
            AQUAMARINE: 2147472639,
            AZURE: 4043309055,
            BEIGE: 4126530815,
            BISQUE: 4293182719,
            BLACK: 255,
            BLANCHEDALMOND: 4293643775,
            BLUE: 65535,
            BLUEVIOLET: 2318131967,
            BROWN: 2771004159,
            BURLYWOOD: 3736635391,
            CADETBLUE: 1604231423,
            CHARTREUSE: 2147418367,
            CHOCOLATE: 3530104575,
            CORAL: 4286533887,
            CORNFLOWERBLUE: 1687547391,
            CORNSILK: 4294499583,
            CRIMSON: 3692313855,
            CYAN: 16777215,
            DARKBLUE: 35839,
            DARKCYAN: 9145343,
            DARKGOLDENROD: 3095837695,
            DARKGRAY: 2846468607,
            DARKGREEN: 6553855,
            DARKGREY: 2846468607,
            DARKKHAKI: 3182914559,
            DARKMAGENTA: 2332068863,
            DARKOLIVEGREEN: 1433087999,
            DARKORANGE: 4287365375,
            DARKORCHID: 2570243327,
            DARKRED: 2332033279,
            DARKSALMON: 3918953215,
            DARKSEAGREEN: 2411499519,
            DARKSLATEBLUE: 1211993087,
            DARKSLATEGRAY: 793726975,
            DARKSLATEGREY: 793726975,
            DARKTURQUOISE: 13554175,
            DARKVIOLET: 2483082239,
            DEEPPINK: 4279538687,
            DEEPSKYBLUE: 12582911,
            DIMGRAY: 1768516095,
            DIMGREY: 1768516095,
            DODGERBLUE: 512819199,
            FIREBRICK: 2988581631,
            FLORALWHITE: 4294635775,
            FORESTGREEN: 579543807,
            FUCHSIA: 4278255615,
            GAINSBORO: 3705462015,
            GHOSTWHITE: 4177068031,
            GOLD: 4292280575,
            GOLDENROD: 3668254975,
            GRAY: 2155905279,
            GREEN: 8388863,
            GREENYELLOW: 2919182335,
            GREY: 2155905279,
            HONEYDEW: 4043305215,
            HOTPINK: 4285117695,
            INDIANRED: 3445382399,
            INDIGO: 1258324735,
            IVORY: 4294963455,
            KHAKI: 4041641215,
            LAVENDER: 3873897215,
            LAVENDERBLUSH: 4293981695,
            LAWNGREEN: 2096890111,
            LEMONCHIFFON: 4294626815,
            LIGHTBLUE: 2916673279,
            LIGHTCORAL: 4034953471,
            LIGHTCYAN: 3774873599,
            LIGHTGOLDENRODYELLOW: 4210742015,
            LIGHTGRAY: 3553874943,
            LIGHTGREEN: 2431553791,
            LIGHTGREY: 3553874943,
            LIGHTPINK: 4290167295,
            LIGHTSALMON: 4288707327,
            LIGHTSEAGREEN: 548580095,
            LIGHTSKYBLUE: 2278488831,
            LIGHTSLATEGRAY: 2005441023,
            LIGHTSLATEGREY: 2005441023,
            LIGHTSTEELBLUE: 2965692159,
            LIGHTYELLOW: 4294959359,
            LIME: 16711935,
            LIMEGREEN: 852308735,
            LINEN: 4210091775,
            MAGENTA: 4278255615,
            MAROON: 2147483903,
            MEDIUMAQUAMARINE: 1724754687,
            MEDIUMBLUE: 52735,
            MEDIUMORCHID: 3126187007,
            MEDIUMPURPLE: 2473647103,
            MEDIUMSEAGREEN: 1018393087,
            MEDIUMSLATEBLUE: 2070474495,
            MEDIUMSPRINGGREEN: 16423679,
            MEDIUMTURQUOISE: 1221709055,
            MEDIUMVIOLETRED: 3340076543,
            MIDNIGHTBLUE: 421097727,
            MINTCREAM: 4127193855,
            MISTYROSE: 4293190143,
            MOCCASIN: 4293178879,
            NAVAJOWHITE: 4292783615,
            NAVY: 33023,
            OLDLACE: 4260751103,
            OLIVE: 2155872511,
            OLIVEDRAB: 1804477439,
            ORANGE: 4289003775,
            ORANGERED: 4282712319,
            ORCHID: 3664828159,
            PALEGOLDENROD: 4008225535,
            PALEGREEN: 2566625535,
            PALETURQUOISE: 2951671551,
            PALEVIOLETRED: 3681588223,
            PAPAYAWHIP: 4293907967,
            PEACHPUFF: 4292524543,
            PERU: 3448061951,
            PINK: 4290825215,
            PLUM: 3718307327,
            POWDERBLUE: 2967529215,
            PURPLE: 2147516671,
            REBECCAPURPLE: 1714657791,
            RED: 4278190335,
            ROSYBROWN: 3163525119,
            ROYALBLUE: 1097458175,
            SADDLEBROWN: 2336560127,
            SALMON: 4202722047,
            SANDYBROWN: 4104413439,
            SEAGREEN: 780883967,
            SEASHELL: 4294307583,
            SIENNA: 2689740287,
            SILVER: 3233857791,
            SKYBLUE: 2278484991,
            SLATEBLUE: 1784335871,
            SLATEGRAY: 1887473919,
            SLATEGREY: 1887473919,
            SNOW: 4294638335,
            SPRINGGREEN: 16744447,
            STEELBLUE: 1182971135,
            TAN: 3535047935,
            TEAL: 8421631,
            THISTLE: 3636451583,
            TOMATO: 4284696575,
            TRANSPARENT: 0,
            TURQUOISE: 1088475391,
            VIOLET: 4001558271,
            WHEAT: 4125012991,
            WHITE: 4294967295,
            WHITESMOKE: 4126537215,
            YELLOW: 4294902015,
            YELLOWGREEN: 2597139199,
          },
          backgroundClip = {
            name: 'background-clip',
            initialValue: 'border-box',
            prefix: !1,
            type: 1,
            parse: function (_context, tokens) {
              return tokens.map(function (token) {
                if (isIdentToken(token))
                  switch (token.value) {
                    case 'padding-box':
                      return 1;
                    case 'content-box':
                      return 2;
                  }
                return 0;
              });
            },
          },
          backgroundColor = {
            name: 'background-color',
            initialValue: 'transparent',
            prefix: !1,
            type: 3,
            format: 'color',
          },
          parseColorStop = function (context, args) {
            var color = color$1.parse(context, args[0]),
              stop = args[1];
            return stop && isLengthPercentage(stop)
              ? { color: color, stop: stop }
              : { color: color, stop: null };
          },
          processColorStops = function (stops, lineLength) {
            var first = stops[0],
              last = stops[stops.length - 1];
            null === first.stop && (first.stop = ZERO_LENGTH),
              null === last.stop && (last.stop = HUNDRED_PERCENT);
            for (
              var processStops = [], previous = 0, i = 0;
              i < stops.length;
              i++
            ) {
              var stop_1 = stops[i].stop;
              if (null !== stop_1) {
                var absoluteValue = getAbsoluteValue(stop_1, lineLength);
                absoluteValue > previous
                  ? processStops.push(absoluteValue)
                  : processStops.push(previous),
                  (previous = absoluteValue);
              } else processStops.push(null);
            }
            for (var gapBegin = null, i = 0; i < processStops.length; i++) {
              var stop_2 = processStops[i];
              if (null === stop_2) null === gapBegin && (gapBegin = i);
              else if (null !== gapBegin) {
                for (
                  var gapLength = i - gapBegin,
                    gapValue =
                      (stop_2 - processStops[gapBegin - 1]) / (gapLength + 1),
                    g = 1;
                  g <= gapLength;
                  g++
                )
                  processStops[gapBegin + g - 1] = gapValue * g;
                gapBegin = null;
              }
            }
            return stops.map(function (_a, i) {
              return {
                color: _a.color,
                stop: Math.max(Math.min(1, processStops[i] / lineLength), 0),
              };
            });
          },
          getAngleFromCorner = function (corner, width, height) {
            var centerX = width / 2,
              centerY = height / 2,
              x = getAbsoluteValue(corner[0], width) - centerX;
            return (
              (Math.atan2(centerY - getAbsoluteValue(corner[1], height), x) +
                2 * Math.PI) %
              (2 * Math.PI)
            );
          },
          calculateGradientDirection = function (angle, width, height) {
            var radian =
                'number' == typeof angle
                  ? angle
                  : getAngleFromCorner(angle, width, height),
              lineLength =
                Math.abs(width * Math.sin(radian)) +
                Math.abs(height * Math.cos(radian)),
              halfWidth = width / 2,
              halfHeight = height / 2,
              halfLineLength = lineLength / 2,
              yDiff = Math.sin(radian - Math.PI / 2) * halfLineLength,
              xDiff = Math.cos(radian - Math.PI / 2) * halfLineLength;
            return [
              lineLength,
              halfWidth - xDiff,
              halfWidth + xDiff,
              halfHeight - yDiff,
              halfHeight + yDiff,
            ];
          },
          distance = function (a, b) {
            return Math.sqrt(a * a + b * b);
          },
          findCorner = function (width, height, x, y, closest) {
            return [
              [0, 0],
              [0, height],
              [width, 0],
              [width, height],
            ].reduce(
              function (stat, corner) {
                var d = distance(x - corner[0], y - corner[1]);
                return (
                  closest ? d < stat.optimumDistance : d > stat.optimumDistance
                )
                  ? { optimumCorner: corner, optimumDistance: d }
                  : stat;
              },
              {
                optimumDistance: closest ? 1 / 0 : -1 / 0,
                optimumCorner: null,
              },
            ).optimumCorner;
          },
          calculateRadius = function (gradient, x, y, width, height) {
            var rx = 0,
              ry = 0;
            switch (gradient.size) {
              case 0:
                0 === gradient.shape
                  ? (rx = ry =
                      Math.min(
                        Math.abs(x),
                        Math.abs(x - width),
                        Math.abs(y),
                        Math.abs(y - height),
                      ))
                  : 1 === gradient.shape &&
                    ((rx = Math.min(Math.abs(x), Math.abs(x - width))),
                    (ry = Math.min(Math.abs(y), Math.abs(y - height))));
                break;
              case 2:
                if (0 === gradient.shape)
                  rx = ry = Math.min(
                    distance(x, y),
                    distance(x, y - height),
                    distance(x - width, y),
                    distance(x - width, y - height),
                  );
                else if (1 === gradient.shape) {
                  var c =
                      Math.min(Math.abs(y), Math.abs(y - height)) /
                      Math.min(Math.abs(x), Math.abs(x - width)),
                    _a = findCorner(width, height, x, y, !0),
                    cx = _a[0],
                    cy = _a[1];
                  (rx = distance(cx - x, (cy - y) / c)), (ry = c * rx);
                }
                break;
              case 1:
                0 === gradient.shape
                  ? (rx = ry =
                      Math.max(
                        Math.abs(x),
                        Math.abs(x - width),
                        Math.abs(y),
                        Math.abs(y - height),
                      ))
                  : 1 === gradient.shape &&
                    ((rx = Math.max(Math.abs(x), Math.abs(x - width))),
                    (ry = Math.max(Math.abs(y), Math.abs(y - height))));
                break;
              case 3:
                if (0 === gradient.shape)
                  rx = ry = Math.max(
                    distance(x, y),
                    distance(x, y - height),
                    distance(x - width, y),
                    distance(x - width, y - height),
                  );
                else if (1 === gradient.shape) {
                  var c =
                      Math.max(Math.abs(y), Math.abs(y - height)) /
                      Math.max(Math.abs(x), Math.abs(x - width)),
                    _b = findCorner(width, height, x, y, !1),
                    cx = _b[0],
                    cy = _b[1];
                  (rx = distance(cx - x, (cy - y) / c)), (ry = c * rx);
                }
            }
            return (
              Array.isArray(gradient.size) &&
                ((rx = getAbsoluteValue(gradient.size[0], width)),
                (ry =
                  2 === gradient.size.length
                    ? getAbsoluteValue(gradient.size[1], height)
                    : rx)),
              [rx, ry]
            );
          },
          prefixLinearGradient = function (context, tokens) {
            var angle$1 = deg(180),
              stops = [];
            return (
              parseFunctionArgs(tokens).forEach(function (arg, i) {
                if (0 === i) {
                  var firstToken = arg[0];
                  if (
                    20 === firstToken.type &&
                    -1 !==
                      ['top', 'left', 'right', 'bottom'].indexOf(
                        firstToken.value,
                      )
                  ) {
                    angle$1 = parseNamedSide(arg);
                    return;
                  }
                  if (isAngle(firstToken)) {
                    angle$1 =
                      (angle.parse(context, firstToken) + deg(270)) % deg(360);
                    return;
                  }
                }
                var colorStop = parseColorStop(context, arg);
                stops.push(colorStop);
              }),
              { angle: angle$1, stops: stops, type: 1 }
            );
          },
          CLOSEST_SIDE = 'closest-side',
          FARTHEST_SIDE = 'farthest-side',
          CLOSEST_CORNER = 'closest-corner',
          FARTHEST_CORNER = 'farthest-corner',
          CIRCLE = 'circle',
          ELLIPSE = 'ellipse',
          COVER = 'cover',
          CONTAIN = 'contain',
          prefixRadialGradient = function (context, tokens) {
            var shape = 0,
              size = 3,
              stops = [],
              position = [];
            return (
              parseFunctionArgs(tokens).forEach(function (arg, i) {
                var isColorStop = !0;
                if (
                  (0 === i
                    ? (isColorStop = arg.reduce(function (acc, token) {
                        if (isIdentToken(token))
                          switch (token.value) {
                            case 'center':
                              return position.push(FIFTY_PERCENT), !1;
                            case 'top':
                            case 'left':
                              return position.push(ZERO_LENGTH), !1;
                            case 'right':
                            case 'bottom':
                              return position.push(HUNDRED_PERCENT), !1;
                          }
                        else if (isLengthPercentage(token) || isLength(token))
                          return position.push(token), !1;
                        return acc;
                      }, isColorStop))
                    : 1 === i &&
                      (isColorStop = arg.reduce(function (acc, token) {
                        if (isIdentToken(token))
                          switch (token.value) {
                            case CIRCLE:
                              return (shape = 0), !1;
                            case ELLIPSE:
                              return (shape = 1), !1;
                            case CONTAIN:
                            case CLOSEST_SIDE:
                              return (size = 0), !1;
                            case FARTHEST_SIDE:
                              return (size = 1), !1;
                            case CLOSEST_CORNER:
                              return (size = 2), !1;
                            case COVER:
                            case FARTHEST_CORNER:
                              return (size = 3), !1;
                          }
                        else if (isLength(token) || isLengthPercentage(token))
                          return (
                            Array.isArray(size) || (size = []),
                            size.push(token),
                            !1
                          );
                        return acc;
                      }, isColorStop)),
                  isColorStop)
                ) {
                  var colorStop = parseColorStop(context, arg);
                  stops.push(colorStop);
                }
              }),
              {
                size: size,
                shape: shape,
                stops: stops,
                position: position,
                type: 2,
              }
            );
          },
          image = {
            parse: function (context, value) {
              if (22 === value.type) {
                var image_1 = { url: value.value, type: 0 };
                return context.cache.addImage(value.value), image_1;
              }
              if (18 === value.type) {
                var imageFunction = SUPPORTED_IMAGE_FUNCTIONS[value.name];
                if (void 0 === imageFunction)
                  throw Error(
                    'Attempting to parse an unsupported image function "' +
                      value.name +
                      '"',
                  );
                return imageFunction(context, value.values);
              }
              throw Error('Unsupported image type ' + value.type);
            },
          };
        function isSupportedImage(value) {
          return (
            !(20 === value.type && 'none' === value.value) &&
            (18 !== value.type || !!SUPPORTED_IMAGE_FUNCTIONS[value.name])
          );
        }
        var SUPPORTED_IMAGE_FUNCTIONS = {
            'linear-gradient': function (context, tokens) {
              var angle$1 = deg(180),
                stops = [];
              return (
                parseFunctionArgs(tokens).forEach(function (arg, i) {
                  if (0 === i) {
                    var firstToken = arg[0];
                    if (20 === firstToken.type && 'to' === firstToken.value) {
                      angle$1 = parseNamedSide(arg);
                      return;
                    }
                    if (isAngle(firstToken)) {
                      angle$1 = angle.parse(context, firstToken);
                      return;
                    }
                  }
                  var colorStop = parseColorStop(context, arg);
                  stops.push(colorStop);
                }),
                { angle: angle$1, stops: stops, type: 1 }
              );
            },
            '-moz-linear-gradient': prefixLinearGradient,
            '-ms-linear-gradient': prefixLinearGradient,
            '-o-linear-gradient': prefixLinearGradient,
            '-webkit-linear-gradient': prefixLinearGradient,
            'radial-gradient': function (context, tokens) {
              var shape = 0,
                size = 3,
                stops = [],
                position = [];
              return (
                parseFunctionArgs(tokens).forEach(function (arg, i) {
                  var isColorStop = !0;
                  if (0 === i) {
                    var isAtPosition_1 = !1;
                    isColorStop = arg.reduce(function (acc, token) {
                      if (isAtPosition_1) {
                        if (isIdentToken(token))
                          switch (token.value) {
                            case 'center':
                              position.push(FIFTY_PERCENT);
                              break;
                            case 'top':
                            case 'left':
                              position.push(ZERO_LENGTH);
                              break;
                            case 'right':
                            case 'bottom':
                              position.push(HUNDRED_PERCENT);
                          }
                        else
                          (isLengthPercentage(token) || isLength(token)) &&
                            position.push(token);
                      } else if (isIdentToken(token))
                        switch (token.value) {
                          case CIRCLE:
                            return (shape = 0), !1;
                          case ELLIPSE:
                            return (shape = 1), !1;
                          case 'at':
                            return (isAtPosition_1 = !0), !1;
                          case CLOSEST_SIDE:
                            return (size = 0), !1;
                          case COVER:
                          case FARTHEST_SIDE:
                            return (size = 1), !1;
                          case CONTAIN:
                          case CLOSEST_CORNER:
                            return (size = 2), !1;
                          case FARTHEST_CORNER:
                            return (size = 3), !1;
                        }
                      else if (isLength(token) || isLengthPercentage(token))
                        return (
                          Array.isArray(size) || (size = []),
                          size.push(token),
                          !1
                        );
                      return acc;
                    }, isColorStop);
                  }
                  if (isColorStop) {
                    var colorStop = parseColorStop(context, arg);
                    stops.push(colorStop);
                  }
                }),
                {
                  size: size,
                  shape: shape,
                  stops: stops,
                  position: position,
                  type: 2,
                }
              );
            },
            '-moz-radial-gradient': prefixRadialGradient,
            '-ms-radial-gradient': prefixRadialGradient,
            '-o-radial-gradient': prefixRadialGradient,
            '-webkit-radial-gradient': prefixRadialGradient,
            '-webkit-gradient': function (context, tokens) {
              var angle = deg(180),
                stops = [],
                type = 1;
              return (
                parseFunctionArgs(tokens).forEach(function (arg, i) {
                  var firstToken = arg[0];
                  if (0 === i) {
                    if (
                      isIdentToken(firstToken) &&
                      'linear' === firstToken.value
                    ) {
                      type = 1;
                      return;
                    }
                    if (
                      isIdentToken(firstToken) &&
                      'radial' === firstToken.value
                    ) {
                      type = 2;
                      return;
                    }
                  }
                  if (18 === firstToken.type) {
                    if ('from' === firstToken.name) {
                      var color = color$1.parse(context, firstToken.values[0]);
                      stops.push({ stop: ZERO_LENGTH, color: color });
                    } else if ('to' === firstToken.name) {
                      var color = color$1.parse(context, firstToken.values[0]);
                      stops.push({ stop: HUNDRED_PERCENT, color: color });
                    } else if ('color-stop' === firstToken.name) {
                      var values = firstToken.values.filter(
                        nonFunctionArgSeparator,
                      );
                      if (2 === values.length) {
                        var color = color$1.parse(context, values[1]),
                          stop_1 = values[0];
                        isNumberToken(stop_1) &&
                          stops.push({
                            stop: {
                              type: 16,
                              number: 100 * stop_1.number,
                              flags: stop_1.flags,
                            },
                            color: color,
                          });
                      }
                    }
                  }
                }),
                1 === type
                  ? {
                      angle: (angle + deg(180)) % deg(360),
                      stops: stops,
                      type: type,
                    }
                  : {
                      size: 3,
                      shape: 0,
                      stops: stops,
                      position: [],
                      type: type,
                    }
              );
            },
          },
          backgroundImage = {
            name: 'background-image',
            initialValue: 'none',
            type: 1,
            prefix: !1,
            parse: function (context, tokens) {
              if (0 === tokens.length) return [];
              var first = tokens[0];
              return 20 === first.type && 'none' === first.value
                ? []
                : tokens
                    .filter(function (value) {
                      return (
                        nonFunctionArgSeparator(value) &&
                        isSupportedImage(value)
                      );
                    })
                    .map(function (value) {
                      return image.parse(context, value);
                    });
            },
          },
          backgroundOrigin = {
            name: 'background-origin',
            initialValue: 'border-box',
            prefix: !1,
            type: 1,
            parse: function (_context, tokens) {
              return tokens.map(function (token) {
                if (isIdentToken(token))
                  switch (token.value) {
                    case 'padding-box':
                      return 1;
                    case 'content-box':
                      return 2;
                  }
                return 0;
              });
            },
          },
          backgroundPosition = {
            name: 'background-position',
            initialValue: '0% 0%',
            type: 1,
            prefix: !1,
            parse: function (_context, tokens) {
              return parseFunctionArgs(tokens)
                .map(function (values) {
                  return values.filter(isLengthPercentage);
                })
                .map(parseLengthPercentageTuple);
            },
          },
          backgroundRepeat = {
            name: 'background-repeat',
            initialValue: 'repeat',
            prefix: !1,
            type: 1,
            parse: function (_context, tokens) {
              return parseFunctionArgs(tokens)
                .map(function (values) {
                  return values
                    .filter(isIdentToken)
                    .map(function (token) {
                      return token.value;
                    })
                    .join(' ');
                })
                .map(parseBackgroundRepeat);
            },
          },
          parseBackgroundRepeat = function (value) {
            switch (value) {
              case 'no-repeat':
                return 1;
              case 'repeat-x':
              case 'repeat no-repeat':
                return 2;
              case 'repeat-y':
              case 'no-repeat repeat':
                return 3;
              default:
                return 0;
            }
          };
        ((BACKGROUND_SIZE = BACKGROUND_SIZE1 || (BACKGROUND_SIZE1 = {})).AUTO =
          'auto'),
          (BACKGROUND_SIZE.CONTAIN = 'contain'),
          (BACKGROUND_SIZE.COVER = 'cover');
        var backgroundSize = {
            name: 'background-size',
            initialValue: '0',
            prefix: !1,
            type: 1,
            parse: function (_context, tokens) {
              return parseFunctionArgs(tokens).map(function (values) {
                return values.filter(isBackgroundSizeInfoToken);
              });
            },
          },
          isBackgroundSizeInfoToken = function (value) {
            return isIdentToken(value) || isLengthPercentage(value);
          },
          borderColorForSide = function (side) {
            return {
              name: 'border-' + side + '-color',
              initialValue: 'transparent',
              prefix: !1,
              type: 3,
              format: 'color',
            };
          },
          borderTopColor = borderColorForSide('top'),
          borderRightColor = borderColorForSide('right'),
          borderBottomColor = borderColorForSide('bottom'),
          borderLeftColor = borderColorForSide('left'),
          borderRadiusForSide = function (side) {
            return {
              name: 'border-radius-' + side,
              initialValue: '0 0',
              prefix: !1,
              type: 1,
              parse: function (_context, tokens) {
                return parseLengthPercentageTuple(
                  tokens.filter(isLengthPercentage),
                );
              },
            };
          },
          borderTopLeftRadius = borderRadiusForSide('top-left'),
          borderTopRightRadius = borderRadiusForSide('top-right'),
          borderBottomRightRadius = borderRadiusForSide('bottom-right'),
          borderBottomLeftRadius = borderRadiusForSide('bottom-left'),
          borderStyleForSide = function (side) {
            return {
              name: 'border-' + side + '-style',
              initialValue: 'solid',
              prefix: !1,
              type: 2,
              parse: function (_context, style) {
                switch (style) {
                  case 'none':
                    return 0;
                  case 'dashed':
                    return 2;
                  case 'dotted':
                    return 3;
                  case 'double':
                    return 4;
                }
                return 1;
              },
            };
          },
          borderTopStyle = borderStyleForSide('top'),
          borderRightStyle = borderStyleForSide('right'),
          borderBottomStyle = borderStyleForSide('bottom'),
          borderLeftStyle = borderStyleForSide('left'),
          borderWidthForSide = function (side) {
            return {
              name: 'border-' + side + '-width',
              initialValue: '0',
              type: 0,
              prefix: !1,
              parse: function (_context, token) {
                return isDimensionToken(token) ? token.number : 0;
              },
            };
          },
          borderTopWidth = borderWidthForSide('top'),
          borderRightWidth = borderWidthForSide('right'),
          borderBottomWidth = borderWidthForSide('bottom'),
          borderLeftWidth = borderWidthForSide('left'),
          color = {
            name: 'color',
            initialValue: 'transparent',
            prefix: !1,
            type: 3,
            format: 'color',
          },
          direction = {
            name: 'direction',
            initialValue: 'ltr',
            prefix: !1,
            type: 2,
            parse: function (_context, direction) {
              return 'rtl' === direction ? 1 : 0;
            },
          },
          display = {
            name: 'display',
            initialValue: 'inline-block',
            prefix: !1,
            type: 1,
            parse: function (_context, tokens) {
              return tokens.filter(isIdentToken).reduce(function (bit, token) {
                return bit | parseDisplayValue(token.value);
              }, 0);
            },
          },
          parseDisplayValue = function (display) {
            switch (display) {
              case 'block':
              case '-webkit-box':
                return 2;
              case 'inline':
                return 4;
              case 'run-in':
                return 8;
              case 'flow':
                return 16;
              case 'flow-root':
                return 32;
              case 'table':
                return 64;
              case 'flex':
              case '-webkit-flex':
                return 128;
              case 'grid':
              case '-ms-grid':
                return 256;
              case 'ruby':
                return 512;
              case 'subgrid':
                return 1024;
              case 'list-item':
                return 2048;
              case 'table-row-group':
                return 4096;
              case 'table-header-group':
                return 8192;
              case 'table-footer-group':
                return 16384;
              case 'table-row':
                return 32768;
              case 'table-cell':
                return 65536;
              case 'table-column-group':
                return 131072;
              case 'table-column':
                return 262144;
              case 'table-caption':
                return 524288;
              case 'ruby-base':
                return 1048576;
              case 'ruby-text':
                return 2097152;
              case 'ruby-base-container':
                return 4194304;
              case 'ruby-text-container':
                return 8388608;
              case 'contents':
                return 16777216;
              case 'inline-block':
                return 33554432;
              case 'inline-list-item':
                return 67108864;
              case 'inline-table':
                return 134217728;
              case 'inline-flex':
                return 268435456;
              case 'inline-grid':
                return 536870912;
            }
            return 0;
          },
          float = {
            name: 'float',
            initialValue: 'none',
            prefix: !1,
            type: 2,
            parse: function (_context, float) {
              switch (float) {
                case 'left':
                  return 1;
                case 'right':
                  return 2;
                case 'inline-start':
                  return 3;
                case 'inline-end':
                  return 4;
              }
              return 0;
            },
          },
          letterSpacing = {
            name: 'letter-spacing',
            initialValue: '0',
            prefix: !1,
            type: 0,
            parse: function (_context, token) {
              return 20 === token.type && 'normal' === token.value
                ? 0
                : 17 === token.type || 15 === token.type
                  ? token.number
                  : 0;
            },
          };
        ((LINE_BREAK = LINE_BREAK1 || (LINE_BREAK1 = {})).NORMAL = 'normal'),
          (LINE_BREAK.STRICT = 'strict');
        var lineBreak = {
            name: 'line-break',
            initialValue: 'normal',
            prefix: !1,
            type: 2,
            parse: function (_context, lineBreak) {
              return 'strict' === lineBreak
                ? LINE_BREAK1.STRICT
                : LINE_BREAK1.NORMAL;
            },
          },
          lineHeight = {
            name: 'line-height',
            initialValue: 'normal',
            prefix: !1,
            type: 4,
          },
          computeLineHeight = function (token, fontSize) {
            return isIdentToken(token) && 'normal' === token.value
              ? 1.2 * fontSize
              : 17 === token.type
                ? fontSize * token.number
                : isLengthPercentage(token)
                  ? getAbsoluteValue(token, fontSize)
                  : fontSize;
          },
          listStyleImage = {
            name: 'list-style-image',
            initialValue: 'none',
            type: 0,
            prefix: !1,
            parse: function (context, token) {
              return 20 === token.type && 'none' === token.value
                ? null
                : image.parse(context, token);
            },
          },
          listStylePosition = {
            name: 'list-style-position',
            initialValue: 'outside',
            prefix: !1,
            type: 2,
            parse: function (_context, position) {
              return 'inside' === position ? 0 : 1;
            },
          },
          listStyleType = {
            name: 'list-style-type',
            initialValue: 'none',
            prefix: !1,
            type: 2,
            parse: function (_context, type) {
              switch (type) {
                case 'disc':
                  return 0;
                case 'circle':
                  return 1;
                case 'square':
                  return 2;
                case 'decimal':
                  return 3;
                case 'cjk-decimal':
                  return 4;
                case 'decimal-leading-zero':
                  return 5;
                case 'lower-roman':
                  return 6;
                case 'upper-roman':
                  return 7;
                case 'lower-greek':
                  return 8;
                case 'lower-alpha':
                  return 9;
                case 'upper-alpha':
                  return 10;
                case 'arabic-indic':
                  return 11;
                case 'armenian':
                  return 12;
                case 'bengali':
                  return 13;
                case 'cambodian':
                  return 14;
                case 'cjk-earthly-branch':
                  return 15;
                case 'cjk-heavenly-stem':
                  return 16;
                case 'cjk-ideographic':
                  return 17;
                case 'devanagari':
                  return 18;
                case 'ethiopic-numeric':
                  return 19;
                case 'georgian':
                  return 20;
                case 'gujarati':
                  return 21;
                case 'gurmukhi':
                case 'hebrew':
                  return 22;
                case 'hiragana':
                  return 23;
                case 'hiragana-iroha':
                  return 24;
                case 'japanese-formal':
                  return 25;
                case 'japanese-informal':
                  return 26;
                case 'kannada':
                  return 27;
                case 'katakana':
                  return 28;
                case 'katakana-iroha':
                  return 29;
                case 'khmer':
                  return 30;
                case 'korean-hangul-formal':
                  return 31;
                case 'korean-hanja-formal':
                  return 32;
                case 'korean-hanja-informal':
                  return 33;
                case 'lao':
                  return 34;
                case 'lower-armenian':
                  return 35;
                case 'malayalam':
                  return 36;
                case 'mongolian':
                  return 37;
                case 'myanmar':
                  return 38;
                case 'oriya':
                  return 39;
                case 'persian':
                  return 40;
                case 'simp-chinese-formal':
                  return 41;
                case 'simp-chinese-informal':
                  return 42;
                case 'tamil':
                  return 43;
                case 'telugu':
                  return 44;
                case 'thai':
                  return 45;
                case 'tibetan':
                  return 46;
                case 'trad-chinese-formal':
                  return 47;
                case 'trad-chinese-informal':
                  return 48;
                case 'upper-armenian':
                  return 49;
                case 'disclosure-open':
                  return 50;
                case 'disclosure-closed':
                  return 51;
                default:
                  return -1;
              }
            },
          },
          marginForSide = function (side) {
            return {
              name: 'margin-' + side,
              initialValue: '0',
              prefix: !1,
              type: 4,
            };
          },
          marginTop = marginForSide('top'),
          marginRight = marginForSide('right'),
          marginBottom = marginForSide('bottom'),
          marginLeft = marginForSide('left'),
          overflow = {
            name: 'overflow',
            initialValue: 'visible',
            prefix: !1,
            type: 1,
            parse: function (_context, tokens) {
              return tokens.filter(isIdentToken).map(function (overflow) {
                switch (overflow.value) {
                  case 'hidden':
                    return 1;
                  case 'scroll':
                    return 2;
                  case 'clip':
                    return 3;
                  case 'auto':
                    return 4;
                  default:
                    return 0;
                }
              });
            },
          },
          overflowWrap = {
            name: 'overflow-wrap',
            initialValue: 'normal',
            prefix: !1,
            type: 2,
            parse: function (_context, overflow) {
              return 'break-word' === overflow ? 'break-word' : 'normal';
            },
          },
          paddingForSide = function (side) {
            return {
              name: 'padding-' + side,
              initialValue: '0',
              prefix: !1,
              type: 3,
              format: 'length-percentage',
            };
          },
          paddingTop = paddingForSide('top'),
          paddingRight = paddingForSide('right'),
          paddingBottom = paddingForSide('bottom'),
          paddingLeft = paddingForSide('left'),
          textAlign = {
            name: 'text-align',
            initialValue: 'left',
            prefix: !1,
            type: 2,
            parse: function (_context, textAlign) {
              switch (textAlign) {
                case 'right':
                  return 2;
                case 'center':
                case 'justify':
                  return 1;
                default:
                  return 0;
              }
            },
          },
          position = {
            name: 'position',
            initialValue: 'static',
            prefix: !1,
            type: 2,
            parse: function (_context, position) {
              switch (position) {
                case 'relative':
                  return 1;
                case 'absolute':
                  return 2;
                case 'fixed':
                  return 3;
                case 'sticky':
                  return 4;
              }
              return 0;
            },
          },
          textShadow = {
            name: 'text-shadow',
            initialValue: 'none',
            type: 1,
            prefix: !1,
            parse: function (context, tokens) {
              return 1 === tokens.length && isIdentWithValue(tokens[0], 'none')
                ? []
                : parseFunctionArgs(tokens).map(function (values) {
                    for (
                      var shadow = {
                          color: COLORS.TRANSPARENT,
                          offsetX: ZERO_LENGTH,
                          offsetY: ZERO_LENGTH,
                          blur: ZERO_LENGTH,
                        },
                        c = 0,
                        i = 0;
                      i < values.length;
                      i++
                    ) {
                      var token = values[i];
                      isLength(token)
                        ? (0 === c
                            ? (shadow.offsetX = token)
                            : 1 === c
                              ? (shadow.offsetY = token)
                              : (shadow.blur = token),
                          c++)
                        : (shadow.color = color$1.parse(context, token));
                    }
                    return shadow;
                  });
            },
          },
          textTransform = {
            name: 'text-transform',
            initialValue: 'none',
            prefix: !1,
            type: 2,
            parse: function (_context, textTransform) {
              switch (textTransform) {
                case 'uppercase':
                  return 2;
                case 'lowercase':
                  return 1;
                case 'capitalize':
                  return 3;
              }
              return 0;
            },
          },
          transform$1 = {
            name: 'transform',
            initialValue: 'none',
            prefix: !0,
            type: 0,
            parse: function (_context, token) {
              if (20 === token.type && 'none' === token.value) return null;
              if (18 === token.type) {
                var transformFunction =
                  SUPPORTED_TRANSFORM_FUNCTIONS[token.name];
                if (void 0 === transformFunction)
                  throw Error(
                    'Attempting to parse an unsupported transform function "' +
                      token.name +
                      '"',
                  );
                return transformFunction(token.values);
              }
              return null;
            },
          },
          SUPPORTED_TRANSFORM_FUNCTIONS = {
            matrix: function (args) {
              var values = args
                .filter(function (arg) {
                  return 17 === arg.type;
                })
                .map(function (arg) {
                  return arg.number;
                });
              return 6 === values.length ? values : null;
            },
            matrix3d: function (args) {
              var values = args
                  .filter(function (arg) {
                    return 17 === arg.type;
                  })
                  .map(function (arg) {
                    return arg.number;
                  }),
                a1 = values[0],
                b1 = values[1];
              values[2], values[3];
              var a2 = values[4],
                b2 = values[5];
              values[6],
                values[7],
                values[8],
                values[9],
                values[10],
                values[11];
              var a4 = values[12],
                b4 = values[13];
              return (
                values[14],
                values[15],
                16 === values.length ? [a1, b1, a2, b2, a4, b4] : null
              );
            },
          },
          DEFAULT_VALUE = { type: 16, number: 50, flags: 4 },
          DEFAULT = [DEFAULT_VALUE, DEFAULT_VALUE],
          transformOrigin = {
            name: 'transform-origin',
            initialValue: '50% 50%',
            prefix: !0,
            type: 1,
            parse: function (_context, tokens) {
              var origins = tokens.filter(isLengthPercentage);
              return 2 !== origins.length ? DEFAULT : [origins[0], origins[1]];
            },
          },
          visibility = {
            name: 'visible',
            initialValue: 'none',
            prefix: !1,
            type: 2,
            parse: function (_context, visibility) {
              switch (visibility) {
                case 'hidden':
                  return 1;
                case 'collapse':
                  return 2;
                default:
                  return 0;
              }
            },
          };
        ((WORD_BREAK = WORD_BREAK1 || (WORD_BREAK1 = {})).NORMAL = 'normal'),
          (WORD_BREAK.BREAK_ALL = 'break-all'),
          (WORD_BREAK.KEEP_ALL = 'keep-all');
        for (
          var wordBreak = {
              name: 'word-break',
              initialValue: 'normal',
              prefix: !1,
              type: 2,
              parse: function (_context, wordBreak) {
                switch (wordBreak) {
                  case 'break-all':
                    return WORD_BREAK1.BREAK_ALL;
                  case 'keep-all':
                    return WORD_BREAK1.KEEP_ALL;
                  default:
                    return WORD_BREAK1.NORMAL;
                }
              },
            },
            zIndex = {
              name: 'z-index',
              initialValue: 'auto',
              prefix: !1,
              type: 0,
              parse: function (_context, token) {
                if (20 === token.type) return { auto: !0, order: 0 };
                if (isNumberToken(token))
                  return { auto: !1, order: token.number };
                throw Error('Invalid z-index number parsed');
              },
            },
            time = {
              parse: function (_context, value) {
                if (15 === value.type)
                  switch (value.unit.toLowerCase()) {
                    case 's':
                      return 1e3 * value.number;
                    case 'ms':
                      return value.number;
                  }
                throw Error('Unsupported time type');
              },
            },
            opacity = {
              name: 'opacity',
              initialValue: '1',
              type: 0,
              prefix: !1,
              parse: function (_context, token) {
                return isNumberToken(token) ? token.number : 1;
              },
            },
            textDecorationColor = {
              name: 'text-decoration-color',
              initialValue: 'transparent',
              prefix: !1,
              type: 3,
              format: 'color',
            },
            textDecorationLine = {
              name: 'text-decoration-line',
              initialValue: 'none',
              prefix: !1,
              type: 1,
              parse: function (_context, tokens) {
                return tokens
                  .filter(isIdentToken)
                  .map(function (token) {
                    switch (token.value) {
                      case 'underline':
                        return 1;
                      case 'overline':
                        return 2;
                      case 'line-through':
                        return 3;
                      case 'none':
                        return 4;
                    }
                    return 0;
                  })
                  .filter(function (line) {
                    return 0 !== line;
                  });
              },
            },
            fontFamily = {
              name: 'font-family',
              initialValue: '',
              prefix: !1,
              type: 1,
              parse: function (_context, tokens) {
                var accumulator = [],
                  results = [];
                return (
                  tokens.forEach(function (token) {
                    switch (token.type) {
                      case 20:
                      case 0:
                        accumulator.push(token.value);
                        break;
                      case 17:
                        accumulator.push(token.number.toString());
                        break;
                      case 4:
                        results.push(accumulator.join(' ')),
                          (accumulator.length = 0);
                    }
                  }),
                  accumulator.length && results.push(accumulator.join(' ')),
                  results.map(function (result) {
                    return -1 === result.indexOf(' ')
                      ? result
                      : "'" + result + "'";
                  })
                );
              },
            },
            fontSize = {
              name: 'font-size',
              initialValue: '0',
              prefix: !1,
              type: 3,
              format: 'length',
            },
            fontWeight = {
              name: 'font-weight',
              initialValue: 'normal',
              type: 0,
              prefix: !1,
              parse: function (_context, token) {
                return isNumberToken(token)
                  ? token.number
                  : isIdentToken(token) && 'bold' === token.value
                    ? 700
                    : 400;
              },
            },
            fontVariant = {
              name: 'font-variant',
              initialValue: 'none',
              type: 1,
              prefix: !1,
              parse: function (_context, tokens) {
                return tokens.filter(isIdentToken).map(function (token) {
                  return token.value;
                });
              },
            },
            fontStyle = {
              name: 'font-style',
              initialValue: 'normal',
              prefix: !1,
              type: 2,
              parse: function (_context, overflow) {
                switch (overflow) {
                  case 'oblique':
                    return 'oblique';
                  case 'italic':
                    return 'italic';
                  default:
                    return 'normal';
                }
              },
            },
            contains = function (bit, value) {
              return (bit & value) != 0;
            },
            content = {
              name: 'content',
              initialValue: 'none',
              type: 1,
              prefix: !1,
              parse: function (_context, tokens) {
                if (0 === tokens.length) return [];
                var first = tokens[0];
                return 20 === first.type && 'none' === first.value
                  ? []
                  : tokens;
              },
            },
            counterIncrement = {
              name: 'counter-increment',
              initialValue: 'none',
              prefix: !0,
              type: 1,
              parse: function (_context, tokens) {
                if (0 === tokens.length) return null;
                var first = tokens[0];
                if (20 === first.type && 'none' === first.value) return null;
                for (
                  var increments = [],
                    filtered = tokens.filter(nonWhiteSpace),
                    i = 0;
                  i < filtered.length;
                  i++
                ) {
                  var counter = filtered[i],
                    next = filtered[i + 1];
                  if (20 === counter.type) {
                    var increment =
                      next && isNumberToken(next) ? next.number : 1;
                    increments.push({
                      counter: counter.value,
                      increment: increment,
                    });
                  }
                }
                return increments;
              },
            },
            counterReset = {
              name: 'counter-reset',
              initialValue: 'none',
              prefix: !0,
              type: 1,
              parse: function (_context, tokens) {
                if (0 === tokens.length) return [];
                for (
                  var resets = [],
                    filtered = tokens.filter(nonWhiteSpace),
                    i = 0;
                  i < filtered.length;
                  i++
                ) {
                  var counter = filtered[i],
                    next = filtered[i + 1];
                  if (isIdentToken(counter) && 'none' !== counter.value) {
                    var reset = next && isNumberToken(next) ? next.number : 0;
                    resets.push({ counter: counter.value, reset: reset });
                  }
                }
                return resets;
              },
            },
            duration = {
              name: 'duration',
              initialValue: '0s',
              prefix: !1,
              type: 1,
              parse: function (context, tokens) {
                return tokens.filter(isDimensionToken).map(function (token) {
                  return time.parse(context, token);
                });
              },
            },
            quotes = {
              name: 'quotes',
              initialValue: 'none',
              prefix: !0,
              type: 1,
              parse: function (_context, tokens) {
                if (0 === tokens.length) return null;
                var first = tokens[0];
                if (20 === first.type && 'none' === first.value) return null;
                var quotes = [],
                  filtered = tokens.filter(isStringToken);
                if (filtered.length % 2 != 0) return null;
                for (var i = 0; i < filtered.length; i += 2) {
                  var open_1 = filtered[i].value,
                    close_1 = filtered[i + 1].value;
                  quotes.push({ open: open_1, close: close_1 });
                }
                return quotes;
              },
            },
            getQuote = function (quotes, depth, open) {
              if (!quotes) return '';
              var quote = quotes[Math.min(depth, quotes.length - 1)];
              return quote ? (open ? quote.open : quote.close) : '';
            },
            boxShadow = {
              name: 'box-shadow',
              initialValue: 'none',
              type: 1,
              prefix: !1,
              parse: function (context, tokens) {
                return 1 === tokens.length &&
                  isIdentWithValue(tokens[0], 'none')
                  ? []
                  : parseFunctionArgs(tokens).map(function (values) {
                      for (
                        var shadow = {
                            color: 255,
                            offsetX: ZERO_LENGTH,
                            offsetY: ZERO_LENGTH,
                            blur: ZERO_LENGTH,
                            spread: ZERO_LENGTH,
                            inset: !1,
                          },
                          c = 0,
                          i = 0;
                        i < values.length;
                        i++
                      ) {
                        var token = values[i];
                        isIdentWithValue(token, 'inset')
                          ? (shadow.inset = !0)
                          : isLength(token)
                            ? (0 === c
                                ? (shadow.offsetX = token)
                                : 1 === c
                                  ? (shadow.offsetY = token)
                                  : 2 === c
                                    ? (shadow.blur = token)
                                    : (shadow.spread = token),
                              c++)
                            : (shadow.color = color$1.parse(context, token));
                      }
                      return shadow;
                    });
              },
            },
            paintOrder = {
              name: 'paint-order',
              initialValue: 'normal',
              prefix: !1,
              type: 1,
              parse: function (_context, tokens) {
                var layers = [];
                return (
                  tokens.filter(isIdentToken).forEach(function (token) {
                    switch (token.value) {
                      case 'stroke':
                        layers.push(1);
                        break;
                      case 'fill':
                        layers.push(0);
                        break;
                      case 'markers':
                        layers.push(2);
                    }
                  }),
                  [0, 1, 2].forEach(function (value) {
                    -1 === layers.indexOf(value) && layers.push(value);
                  }),
                  layers
                );
              },
            },
            webkitTextStrokeColor = {
              name: '-webkit-text-stroke-color',
              initialValue: 'currentcolor',
              prefix: !1,
              type: 3,
              format: 'color',
            },
            webkitTextStrokeWidth = {
              name: '-webkit-text-stroke-width',
              initialValue: '0',
              type: 0,
              prefix: !1,
              parse: function (_context, token) {
                return isDimensionToken(token) ? token.number : 0;
              },
            },
            CSSParsedDeclaration = (function () {
              function CSSParsedDeclaration(context, declaration) {
                (this.animationDuration = parse(
                  context,
                  duration,
                  declaration.animationDuration,
                )),
                  (this.backgroundClip = parse(
                    context,
                    backgroundClip,
                    declaration.backgroundClip,
                  )),
                  (this.backgroundColor = parse(
                    context,
                    backgroundColor,
                    declaration.backgroundColor,
                  )),
                  (this.backgroundImage = parse(
                    context,
                    backgroundImage,
                    declaration.backgroundImage,
                  )),
                  (this.backgroundOrigin = parse(
                    context,
                    backgroundOrigin,
                    declaration.backgroundOrigin,
                  )),
                  (this.backgroundPosition = parse(
                    context,
                    backgroundPosition,
                    declaration.backgroundPosition,
                  )),
                  (this.backgroundRepeat = parse(
                    context,
                    backgroundRepeat,
                    declaration.backgroundRepeat,
                  )),
                  (this.backgroundSize = parse(
                    context,
                    backgroundSize,
                    declaration.backgroundSize,
                  )),
                  (this.borderTopColor = parse(
                    context,
                    borderTopColor,
                    declaration.borderTopColor,
                  )),
                  (this.borderRightColor = parse(
                    context,
                    borderRightColor,
                    declaration.borderRightColor,
                  )),
                  (this.borderBottomColor = parse(
                    context,
                    borderBottomColor,
                    declaration.borderBottomColor,
                  )),
                  (this.borderLeftColor = parse(
                    context,
                    borderLeftColor,
                    declaration.borderLeftColor,
                  )),
                  (this.borderTopLeftRadius = parse(
                    context,
                    borderTopLeftRadius,
                    declaration.borderTopLeftRadius,
                  )),
                  (this.borderTopRightRadius = parse(
                    context,
                    borderTopRightRadius,
                    declaration.borderTopRightRadius,
                  )),
                  (this.borderBottomRightRadius = parse(
                    context,
                    borderBottomRightRadius,
                    declaration.borderBottomRightRadius,
                  )),
                  (this.borderBottomLeftRadius = parse(
                    context,
                    borderBottomLeftRadius,
                    declaration.borderBottomLeftRadius,
                  )),
                  (this.borderTopStyle = parse(
                    context,
                    borderTopStyle,
                    declaration.borderTopStyle,
                  )),
                  (this.borderRightStyle = parse(
                    context,
                    borderRightStyle,
                    declaration.borderRightStyle,
                  )),
                  (this.borderBottomStyle = parse(
                    context,
                    borderBottomStyle,
                    declaration.borderBottomStyle,
                  )),
                  (this.borderLeftStyle = parse(
                    context,
                    borderLeftStyle,
                    declaration.borderLeftStyle,
                  )),
                  (this.borderTopWidth = parse(
                    context,
                    borderTopWidth,
                    declaration.borderTopWidth,
                  )),
                  (this.borderRightWidth = parse(
                    context,
                    borderRightWidth,
                    declaration.borderRightWidth,
                  )),
                  (this.borderBottomWidth = parse(
                    context,
                    borderBottomWidth,
                    declaration.borderBottomWidth,
                  )),
                  (this.borderLeftWidth = parse(
                    context,
                    borderLeftWidth,
                    declaration.borderLeftWidth,
                  )),
                  (this.boxShadow = parse(
                    context,
                    boxShadow,
                    declaration.boxShadow,
                  )),
                  (this.color = parse(context, color, declaration.color)),
                  (this.direction = parse(
                    context,
                    direction,
                    declaration.direction,
                  )),
                  (this.display = parse(context, display, declaration.display)),
                  (this.float = parse(context, float, declaration.cssFloat)),
                  (this.fontFamily = parse(
                    context,
                    fontFamily,
                    declaration.fontFamily,
                  )),
                  (this.fontSize = parse(
                    context,
                    fontSize,
                    declaration.fontSize,
                  )),
                  (this.fontStyle = parse(
                    context,
                    fontStyle,
                    declaration.fontStyle,
                  )),
                  (this.fontVariant = parse(
                    context,
                    fontVariant,
                    declaration.fontVariant,
                  )),
                  (this.fontWeight = parse(
                    context,
                    fontWeight,
                    declaration.fontWeight,
                  )),
                  (this.letterSpacing = parse(
                    context,
                    letterSpacing,
                    declaration.letterSpacing,
                  )),
                  (this.lineBreak = parse(
                    context,
                    lineBreak,
                    declaration.lineBreak,
                  )),
                  (this.lineHeight = parse(
                    context,
                    lineHeight,
                    declaration.lineHeight,
                  )),
                  (this.listStyleImage = parse(
                    context,
                    listStyleImage,
                    declaration.listStyleImage,
                  )),
                  (this.listStylePosition = parse(
                    context,
                    listStylePosition,
                    declaration.listStylePosition,
                  )),
                  (this.listStyleType = parse(
                    context,
                    listStyleType,
                    declaration.listStyleType,
                  )),
                  (this.marginTop = parse(
                    context,
                    marginTop,
                    declaration.marginTop,
                  )),
                  (this.marginRight = parse(
                    context,
                    marginRight,
                    declaration.marginRight,
                  )),
                  (this.marginBottom = parse(
                    context,
                    marginBottom,
                    declaration.marginBottom,
                  )),
                  (this.marginLeft = parse(
                    context,
                    marginLeft,
                    declaration.marginLeft,
                  )),
                  (this.opacity = parse(context, opacity, declaration.opacity));
                var _a,
                  _b,
                  overflowTuple = parse(
                    context,
                    overflow,
                    declaration.overflow,
                  );
                (this.overflowX = overflowTuple[0]),
                  (this.overflowY =
                    overflowTuple[overflowTuple.length > 1 ? 1 : 0]),
                  (this.overflowWrap = parse(
                    context,
                    overflowWrap,
                    declaration.overflowWrap,
                  )),
                  (this.paddingTop = parse(
                    context,
                    paddingTop,
                    declaration.paddingTop,
                  )),
                  (this.paddingRight = parse(
                    context,
                    paddingRight,
                    declaration.paddingRight,
                  )),
                  (this.paddingBottom = parse(
                    context,
                    paddingBottom,
                    declaration.paddingBottom,
                  )),
                  (this.paddingLeft = parse(
                    context,
                    paddingLeft,
                    declaration.paddingLeft,
                  )),
                  (this.paintOrder = parse(
                    context,
                    paintOrder,
                    declaration.paintOrder,
                  )),
                  (this.position = parse(
                    context,
                    position,
                    declaration.position,
                  )),
                  (this.textAlign = parse(
                    context,
                    textAlign,
                    declaration.textAlign,
                  )),
                  (this.textDecorationColor = parse(
                    context,
                    textDecorationColor,
                    null !== (_a = declaration.textDecorationColor) &&
                      void 0 !== _a
                      ? _a
                      : declaration.color,
                  )),
                  (this.textDecorationLine = parse(
                    context,
                    textDecorationLine,
                    null !== (_b = declaration.textDecorationLine) &&
                      void 0 !== _b
                      ? _b
                      : declaration.textDecoration,
                  )),
                  (this.textShadow = parse(
                    context,
                    textShadow,
                    declaration.textShadow,
                  )),
                  (this.textTransform = parse(
                    context,
                    textTransform,
                    declaration.textTransform,
                  )),
                  (this.transform = parse(
                    context,
                    transform$1,
                    declaration.transform,
                  )),
                  (this.transformOrigin = parse(
                    context,
                    transformOrigin,
                    declaration.transformOrigin,
                  )),
                  (this.visibility = parse(
                    context,
                    visibility,
                    declaration.visibility,
                  )),
                  (this.webkitTextStrokeColor = parse(
                    context,
                    webkitTextStrokeColor,
                    declaration.webkitTextStrokeColor,
                  )),
                  (this.webkitTextStrokeWidth = parse(
                    context,
                    webkitTextStrokeWidth,
                    declaration.webkitTextStrokeWidth,
                  )),
                  (this.wordBreak = parse(
                    context,
                    wordBreak,
                    declaration.wordBreak,
                  )),
                  (this.zIndex = parse(context, zIndex, declaration.zIndex));
              }
              return (
                (CSSParsedDeclaration.prototype.isVisible = function () {
                  return (
                    this.display > 0 &&
                    this.opacity > 0 &&
                    0 === this.visibility
                  );
                }),
                (CSSParsedDeclaration.prototype.isTransparent = function () {
                  return isTransparent(this.backgroundColor);
                }),
                (CSSParsedDeclaration.prototype.isTransformed = function () {
                  return null !== this.transform;
                }),
                (CSSParsedDeclaration.prototype.isPositioned = function () {
                  return 0 !== this.position;
                }),
                (CSSParsedDeclaration.prototype.isPositionedWithZIndex =
                  function () {
                    return this.isPositioned() && !this.zIndex.auto;
                  }),
                (CSSParsedDeclaration.prototype.isFloating = function () {
                  return 0 !== this.float;
                }),
                (CSSParsedDeclaration.prototype.isInlineLevel = function () {
                  return (
                    contains(this.display, 4) ||
                    contains(this.display, 33554432) ||
                    contains(this.display, 268435456) ||
                    contains(this.display, 536870912) ||
                    contains(this.display, 67108864) ||
                    contains(this.display, 134217728)
                  );
                }),
                CSSParsedDeclaration
              );
            })(),
            CSSParsedPseudoDeclaration = function CSSParsedPseudoDeclaration(
              context,
              declaration,
            ) {
              (this.content = parse(context, content, declaration.content)),
                (this.quotes = parse(context, quotes, declaration.quotes));
            },
            CSSParsedCounterDeclaration = function CSSParsedCounterDeclaration(
              context,
              declaration,
            ) {
              (this.counterIncrement = parse(
                context,
                counterIncrement,
                declaration.counterIncrement,
              )),
                (this.counterReset = parse(
                  context,
                  counterReset,
                  declaration.counterReset,
                ));
            },
            parse = function (context, descriptor, style) {
              var tokenizer = new Tokenizer(),
                value =
                  null != style ? style.toString() : descriptor.initialValue;
              tokenizer.write(value);
              var parser = new Parser(tokenizer.read());
              switch (descriptor.type) {
                case 2:
                  var token = parser.parseComponentValue();
                  return descriptor.parse(
                    context,
                    isIdentToken(token) ? token.value : descriptor.initialValue,
                  );
                case 0:
                  return descriptor.parse(
                    context,
                    parser.parseComponentValue(),
                  );
                case 1:
                  return descriptor.parse(
                    context,
                    parser.parseComponentValues(),
                  );
                case 4:
                  return parser.parseComponentValue();
                case 3:
                  switch (descriptor.format) {
                    case 'angle':
                      return angle.parse(context, parser.parseComponentValue());
                    case 'color':
                      return color$1.parse(
                        context,
                        parser.parseComponentValue(),
                      );
                    case 'image':
                      return image.parse(context, parser.parseComponentValue());
                    case 'length':
                      var length_1 = parser.parseComponentValue();
                      return isLength(length_1) ? length_1 : ZERO_LENGTH;
                    case 'length-percentage':
                      var value_1 = parser.parseComponentValue();
                      return isLengthPercentage(value_1)
                        ? value_1
                        : ZERO_LENGTH;
                    case 'time':
                      return time.parse(context, parser.parseComponentValue());
                  }
              }
            },
            getElementDebugType = function (element) {
              switch (element.getAttribute('data-html2canvas-debug')) {
                case 'all':
                  return 1;
                case 'clone':
                  return 2;
                case 'parse':
                  return 3;
                case 'render':
                  return 4;
                default:
                  return 0;
              }
            },
            isDebugging = function (element, type) {
              var elementType = getElementDebugType(element);
              return 1 === elementType || type === elementType;
            },
            ElementContainer = function ElementContainer(context, element) {
              (this.context = context),
                (this.textNodes = []),
                (this.elements = []),
                (this.flags = 0),
                isDebugging(element, 3),
                (this.styles = new CSSParsedDeclaration(
                  context,
                  window.getComputedStyle(element, null),
                )),
                isHTMLElementNode(element) &&
                  (this.styles.animationDuration.some(function (duration) {
                    return duration > 0;
                  }) && (element.style.animationDuration = '0s'),
                  null !== this.styles.transform &&
                    (element.style.transform = 'none')),
                (this.bounds = parseBounds(this.context, element)),
                isDebugging(element, 4) && (this.flags |= 16);
            },
            chars$1 =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            lookup$1 =
              'undefined' == typeof Uint8Array ? [] : new Uint8Array(256),
            i$1 = 0;
          i$1 < chars$1.length;
          i$1++
        )
          lookup$1[chars$1.charCodeAt(i$1)] = i$1;
        for (
          var slice16 = function (view, start, end) {
              return view.slice
                ? view.slice(start, end)
                : new Uint16Array(Array.prototype.slice.call(view, start, end));
            },
            Trie = (function () {
              function Trie(
                initialValue,
                errorValue,
                highStart,
                highValueIndex,
                index,
                data,
              ) {
                (this.initialValue = initialValue),
                  (this.errorValue = errorValue),
                  (this.highStart = highStart),
                  (this.highValueIndex = highValueIndex),
                  (this.index = index),
                  (this.data = data);
              }
              return (
                (Trie.prototype.get = function (codePoint) {
                  var ix;
                  if (codePoint >= 0) {
                    if (
                      codePoint < 55296 ||
                      (codePoint > 56319 && codePoint <= 65535)
                    )
                      return (
                        (ix =
                          ((ix = this.index[codePoint >> 5]) << 2) +
                          (31 & codePoint)),
                        this.data[ix]
                      );
                    if (codePoint <= 65535)
                      return (
                        (ix =
                          ((ix =
                            this.index[2048 + ((codePoint - 55296) >> 5)]) <<
                            2) +
                          (31 & codePoint)),
                        this.data[ix]
                      );
                    if (codePoint < this.highStart)
                      return (
                        (ix = 2080 + (codePoint >> 11)),
                        (ix = this.index[ix] + ((codePoint >> 5) & 63)),
                        (ix = ((ix = this.index[ix]) << 2) + (31 & codePoint)),
                        this.data[ix]
                      );
                    if (codePoint <= 1114111)
                      return this.data[this.highValueIndex];
                  }
                  return this.errorValue;
                }),
                Trie
              );
            })(),
            chars =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            lookup =
              'undefined' == typeof Uint8Array ? [] : new Uint8Array(256),
            i = 0;
          i < chars.length;
          i++
        )
          lookup[chars.charCodeAt(i)] = i;
        var toCodePoints = function (str) {
            for (
              var codePoints = [], i = 0, length = str.length;
              i < length;

            ) {
              var value = str.charCodeAt(i++);
              if (value >= 55296 && value <= 56319 && i < length) {
                var extra = str.charCodeAt(i++);
                (64512 & extra) == 56320
                  ? codePoints.push(
                      ((1023 & value) << 10) + (1023 & extra) + 65536,
                    )
                  : (codePoints.push(value), i--);
              } else codePoints.push(value);
            }
            return codePoints;
          },
          fromCodePoint = function () {
            for (var codePoints = [], _i = 0; _i < arguments.length; _i++)
              codePoints[_i] = arguments[_i];
            if (String.fromCodePoint)
              return String.fromCodePoint.apply(String, codePoints);
            var length = codePoints.length;
            if (!length) return '';
            for (
              var codeUnits = [], index = -1, result = '';
              ++index < length;

            ) {
              var codePoint = codePoints[index];
              codePoint <= 65535
                ? codeUnits.push(codePoint)
                : ((codePoint -= 65536),
                  codeUnits.push(
                    (codePoint >> 10) + 55296,
                    (codePoint % 1024) + 56320,
                  )),
                (index + 1 === length || codeUnits.length > 16384) &&
                  ((result += String.fromCharCode.apply(String, codeUnits)),
                  (codeUnits.length = 0));
            }
            return result;
          },
          UnicodeTrie =
            ((view321 = Array.isArray(
              (buffer1 = (function (base64) {
                var i,
                  encoded1,
                  encoded2,
                  encoded3,
                  encoded4,
                  bufferLength = 0.75 * base64.length,
                  len = base64.length,
                  p = 0;
                '=' === base64[base64.length - 1] &&
                  (bufferLength--,
                  '=' === base64[base64.length - 2] && bufferLength--);
                var buffer =
                    'undefined' != typeof ArrayBuffer &&
                    'undefined' != typeof Uint8Array &&
                    void 0 !== Uint8Array.prototype.slice
                      ? new ArrayBuffer(bufferLength)
                      : Array(bufferLength),
                  bytes = Array.isArray(buffer)
                    ? buffer
                    : new Uint8Array(buffer);
                for (i = 0; i < len; i += 4)
                  (encoded1 = lookup$1[base64.charCodeAt(i)]),
                    (encoded2 = lookup$1[base64.charCodeAt(i + 1)]),
                    (encoded3 = lookup$1[base64.charCodeAt(i + 2)]),
                    (encoded4 = lookup$1[base64.charCodeAt(i + 3)]),
                    (bytes[p++] = (encoded1 << 2) | (encoded2 >> 4)),
                    (bytes[p++] = ((15 & encoded2) << 4) | (encoded3 >> 2)),
                    (bytes[p++] = ((3 & encoded3) << 6) | (63 & encoded4));
                return buffer;
              })(
                'AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=',
              )),
            )
              ? (function (buffer) {
                  for (
                    var length = buffer.length, bytes = [], i = 0;
                    i < length;
                    i += 4
                  )
                    bytes.push(
                      (buffer[i + 3] << 24) |
                        (buffer[i + 2] << 16) |
                        (buffer[i + 1] << 8) |
                        buffer[i],
                    );
                  return bytes;
                })(buffer1)
              : new Uint32Array(buffer1)),
            (index1 = slice16(
              (view161 = Array.isArray(buffer1)
                ? (function (buffer) {
                    for (
                      var length = buffer.length, bytes = [], i = 0;
                      i < length;
                      i += 2
                    )
                      bytes.push((buffer[i + 1] << 8) | buffer[i]);
                    return bytes;
                  })(buffer1)
                : new Uint16Array(buffer1)),
              12,
              view321[4] / 2,
            )),
            (data1 =
              2 === view321[5]
                ? slice16(view161, (24 + view321[4]) / 2)
                : ((start1 = Math.ceil((24 + view321[4]) / 4)),
                  view321.slice
                    ? view321.slice(start1, void 0)
                    : new Uint32Array(
                        Array.prototype.slice.call(view321, start1, end1),
                      ))),
            new Trie(
              view321[0],
              view321[1],
              view321[2],
              view321[3],
              index1,
              data1,
            )),
          codePointToClass = function (codePoint) {
            return UnicodeTrie.get(codePoint);
          },
          _graphemeBreakAtIndex = function (_codePoints, classTypes, index) {
            var prevIndex = index - 2,
              prev = classTypes[prevIndex],
              current = classTypes[index - 1],
              next = classTypes[index];
            if (2 === current && 3 === next) return '×';
            if (
              2 === current ||
              3 === current ||
              4 === current ||
              2 === next ||
              3 === next ||
              4 === next
            )
              return '÷';
            if (
              (8 === current && -1 !== [8, 9, 11, 12].indexOf(next)) ||
              ((11 === current || 9 === current) &&
                (9 === next || 10 === next)) ||
              ((12 === current || 10 === current) && 10 === next) ||
              13 === next ||
              5 === next ||
              7 === next ||
              1 === current
            )
              return '×';
            if (13 === current && 14 === next) {
              for (; 5 === prev; ) prev = classTypes[--prevIndex];
              if (14 === prev) return '×';
            }
            if (15 === current && 15 === next) {
              for (var countRI = 0; 15 === prev; )
                countRI++, (prev = classTypes[--prevIndex]);
              if (countRI % 2 == 0) return '×';
            }
            return '÷';
          },
          GraphemeBreaker = function (str) {
            var codePoints = toCodePoints(str),
              length = codePoints.length,
              index = 0,
              lastEnd = 0,
              classTypes = codePoints.map(codePointToClass);
            return {
              next: function () {
                if (index >= length) return { done: !0, value: null };
                for (
                  var graphemeBreak = '×';
                  index < length &&
                  '×' ===
                    (graphemeBreak = _graphemeBreakAtIndex(
                      codePoints,
                      classTypes,
                      ++index,
                    ));

                );
                if ('×' !== graphemeBreak || index === length) {
                  var value = fromCodePoint.apply(
                    null,
                    codePoints.slice(lastEnd, index),
                  );
                  return (lastEnd = index), { value: value, done: !1 };
                }
                return { done: !0, value: null };
              },
            };
          },
          splitGraphemes = function (str) {
            for (
              var bk, breaker = GraphemeBreaker(str), graphemes = [];
              !(bk = breaker.next()).done;

            )
              bk.value && graphemes.push(bk.value.slice());
            return graphemes;
          },
          testRangeBounds = function (document1) {
            if (document1.createRange) {
              var range = document1.createRange();
              if (range.getBoundingClientRect) {
                var testElement = document1.createElement('boundtest');
                (testElement.style.height = '123px'),
                  (testElement.style.display = 'block'),
                  document1.body.appendChild(testElement),
                  range.selectNode(testElement);
                var rangeHeight = Math.round(
                  range.getBoundingClientRect().height,
                );
                if (
                  (document1.body.removeChild(testElement), 123 === rangeHeight)
                )
                  return !0;
              }
            }
            return !1;
          },
          testIOSLineBreak = function (document1) {
            var testElement = document1.createElement('boundtest');
            (testElement.style.width = '50px'),
              (testElement.style.display = 'block'),
              (testElement.style.fontSize = '12px'),
              (testElement.style.letterSpacing = '0px'),
              (testElement.style.wordSpacing = '0px'),
              document1.body.appendChild(testElement);
            var range = document1.createRange();
            testElement.innerHTML =
              'function' == typeof ''.repeat ? '&#128104;'.repeat(10) : '';
            var node = testElement.firstChild,
              textList = toCodePoints$1(node.data).map(function (i) {
                return fromCodePoint$1(i);
              }),
              offset = 0,
              prev = {},
              supports = textList.every(function (text, i) {
                range.setStart(node, offset),
                  range.setEnd(node, offset + text.length);
                var rect = range.getBoundingClientRect();
                offset += text.length;
                var boundAhead = rect.x > prev.x || rect.y > prev.y;
                return (prev = rect), 0 === i || boundAhead;
              });
            return document1.body.removeChild(testElement), supports;
          },
          testSVG = function (document1) {
            var img = new Image(),
              canvas = document1.createElement('canvas'),
              ctx = canvas.getContext('2d');
            if (!ctx) return !1;
            img.src =
              "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
            try {
              ctx.drawImage(img, 0, 0), canvas.toDataURL();
            } catch (e) {
              return !1;
            }
            return !0;
          },
          isGreenPixel = function (data) {
            return (
              0 === data[0] &&
              255 === data[1] &&
              0 === data[2] &&
              255 === data[3]
            );
          },
          testForeignObject = function (document1) {
            var canvas = document1.createElement('canvas');
            (canvas.width = 100), (canvas.height = 100);
            var ctx = canvas.getContext('2d');
            if (!ctx) return Promise.reject(!1);
            (ctx.fillStyle = 'rgb(0, 255, 0)'), ctx.fillRect(0, 0, 100, 100);
            var img = new Image(),
              greenImageSrc = canvas.toDataURL();
            img.src = greenImageSrc;
            var svg = createForeignObjectSVG(100, 100, 0, 0, img);
            return (
              (ctx.fillStyle = 'red'),
              ctx.fillRect(0, 0, 100, 100),
              loadSerializedSVG$1(svg)
                .then(function (img) {
                  ctx.drawImage(img, 0, 0);
                  var data = ctx.getImageData(0, 0, 100, 100).data;
                  (ctx.fillStyle = 'red'), ctx.fillRect(0, 0, 100, 100);
                  var node = document1.createElement('div');
                  return (
                    (node.style.backgroundImage = 'url(' + greenImageSrc + ')'),
                    (node.style.height = '100px'),
                    isGreenPixel(data)
                      ? loadSerializedSVG$1(
                          createForeignObjectSVG(100, 100, 0, 0, node),
                        )
                      : Promise.reject(!1)
                  );
                })
                .then(function (img) {
                  return (
                    ctx.drawImage(img, 0, 0),
                    isGreenPixel(ctx.getImageData(0, 0, 100, 100).data)
                  );
                })
                .catch(function () {
                  return !1;
                })
            );
          },
          createForeignObjectSVG = function (width, height, x, y, node) {
            var xmlns = 'http://www.w3.org/2000/svg',
              svg = document.createElementNS(xmlns, 'svg'),
              foreignObject = document.createElementNS(xmlns, 'foreignObject');
            return (
              svg.setAttributeNS(null, 'width', width.toString()),
              svg.setAttributeNS(null, 'height', height.toString()),
              foreignObject.setAttributeNS(null, 'width', '100%'),
              foreignObject.setAttributeNS(null, 'height', '100%'),
              foreignObject.setAttributeNS(null, 'x', x.toString()),
              foreignObject.setAttributeNS(null, 'y', y.toString()),
              foreignObject.setAttributeNS(
                null,
                'externalResourcesRequired',
                'true',
              ),
              svg.appendChild(foreignObject),
              foreignObject.appendChild(node),
              svg
            );
          },
          loadSerializedSVG$1 = function (svg) {
            return new Promise(function (resolve, reject) {
              var img = new Image();
              (img.onload = function () {
                return resolve(img);
              }),
                (img.onerror = reject),
                (img.src =
                  'data:image/svg+xml;charset=utf-8,' +
                  encodeURIComponent(
                    new XMLSerializer().serializeToString(svg),
                  ));
            });
          },
          FEATURES = {
            get SUPPORT_RANGE_BOUNDS() {
              var value = testRangeBounds(document);
              return (
                Object.defineProperty(FEATURES, 'SUPPORT_RANGE_BOUNDS', {
                  value: value,
                }),
                value
              );
            },
            get SUPPORT_WORD_BREAKING() {
              var value1 =
                FEATURES.SUPPORT_RANGE_BOUNDS && testIOSLineBreak(document);
              return (
                Object.defineProperty(FEATURES, 'SUPPORT_WORD_BREAKING', {
                  value: value1,
                }),
                value1
              );
            },
            get SUPPORT_SVG_DRAWING() {
              var value2 = testSVG(document);
              return (
                Object.defineProperty(FEATURES, 'SUPPORT_SVG_DRAWING', {
                  value: value2,
                }),
                value2
              );
            },
            get SUPPORT_FOREIGNOBJECT_DRAWING() {
              var value3 =
                'function' == typeof Array.from &&
                'function' == typeof window.fetch
                  ? testForeignObject(document)
                  : Promise.resolve(!1);
              return (
                Object.defineProperty(
                  FEATURES,
                  'SUPPORT_FOREIGNOBJECT_DRAWING',
                  { value: value3 },
                ),
                value3
              );
            },
            get SUPPORT_CORS_IMAGES() {
              var value4 = void 0 !== new Image().crossOrigin;
              return (
                Object.defineProperty(FEATURES, 'SUPPORT_CORS_IMAGES', {
                  value: value4,
                }),
                value4
              );
            },
            get SUPPORT_RESPONSE_TYPE() {
              var value5 = 'string' == typeof new XMLHttpRequest().responseType;
              return (
                Object.defineProperty(FEATURES, 'SUPPORT_RESPONSE_TYPE', {
                  value: value5,
                }),
                value5
              );
            },
            get SUPPORT_CORS_XHR() {
              var value6 = 'withCredentials' in new XMLHttpRequest();
              return (
                Object.defineProperty(FEATURES, 'SUPPORT_CORS_XHR', {
                  value: value6,
                }),
                value6
              );
            },
            get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
              var value7 = !!('undefined' != typeof Intl && Intl.Segmenter);
              return (
                Object.defineProperty(
                  FEATURES,
                  'SUPPORT_NATIVE_TEXT_SEGMENTATION',
                  { value: value7 },
                ),
                value7
              );
            },
          },
          TextBounds = function TextBounds(text, bounds) {
            (this.text = text), (this.bounds = bounds);
          },
          parseTextBounds = function (context, value, styles, node) {
            var textList = breakText(value, styles),
              textBounds = [],
              offset = 0;
            return (
              textList.forEach(function (text) {
                if (
                  styles.textDecorationLine.length ||
                  text.trim().length > 0
                ) {
                  if (FEATURES.SUPPORT_RANGE_BOUNDS) {
                    var clientRects = createRange(
                      node,
                      offset,
                      text.length,
                    ).getClientRects();
                    if (clientRects.length > 1) {
                      var subSegments = segmentGraphemes(text),
                        subOffset_1 = 0;
                      subSegments.forEach(function (subSegment) {
                        textBounds.push(
                          new TextBounds(
                            subSegment,
                            Bounds.fromDOMRectList(
                              context,
                              createRange(
                                node,
                                subOffset_1 + offset,
                                subSegment.length,
                              ).getClientRects(),
                            ),
                          ),
                        ),
                          (subOffset_1 += subSegment.length);
                      });
                    } else
                      textBounds.push(
                        new TextBounds(
                          text,
                          Bounds.fromDOMRectList(context, clientRects),
                        ),
                      );
                  } else {
                    var replacementNode = node.splitText(text.length);
                    textBounds.push(
                      new TextBounds(text, getWrapperBounds(context, node)),
                    ),
                      (node = replacementNode);
                  }
                } else
                  FEATURES.SUPPORT_RANGE_BOUNDS ||
                    (node = node.splitText(text.length));
                offset += text.length;
              }),
              textBounds
            );
          },
          getWrapperBounds = function (context, node) {
            var ownerDocument = node.ownerDocument;
            if (ownerDocument) {
              var wrapper = ownerDocument.createElement('html2canvaswrapper');
              wrapper.appendChild(node.cloneNode(!0));
              var parentNode = node.parentNode;
              if (parentNode) {
                parentNode.replaceChild(wrapper, node);
                var bounds = parseBounds(context, wrapper);
                return (
                  wrapper.firstChild &&
                    parentNode.replaceChild(wrapper.firstChild, wrapper),
                  bounds
                );
              }
            }
            return Bounds.EMPTY;
          },
          createRange = function (node, offset, length) {
            var ownerDocument = node.ownerDocument;
            if (!ownerDocument) throw Error('Node has no owner document');
            var range = ownerDocument.createRange();
            return (
              range.setStart(node, offset),
              range.setEnd(node, offset + length),
              range
            );
          },
          segmentGraphemes = function (value) {
            return FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION
              ? Array.from(
                  new Intl.Segmenter(void 0, {
                    granularity: 'grapheme',
                  }).segment(value),
                ).map(function (segment) {
                  return segment.segment;
                })
              : splitGraphemes(value);
          },
          breakText = function (value, styles) {
            return 0 !== styles.letterSpacing
              ? segmentGraphemes(value)
              : FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION
                ? Array.from(
                    new Intl.Segmenter(void 0, { granularity: 'word' }).segment(
                      value,
                    ),
                  ).map(function (segment) {
                    return segment.segment;
                  })
                : breakWords(value, styles);
          },
          wordSeparators = [32, 160, 4961, 65792, 65793, 4153, 4241],
          breakWords = function (str, styles) {
            for (
              var bk,
                breaker = LineBreaker(str, {
                  lineBreak: styles.lineBreak,
                  wordBreak:
                    'break-word' === styles.overflowWrap
                      ? 'break-word'
                      : styles.wordBreak,
                }),
                words = [];
              !(bk = breaker.next()).done;

            )
              !(function () {
                if (bk.value) {
                  var codePoints = toCodePoints$1(bk.value.slice()),
                    word_1 = '';
                  codePoints.forEach(function (codePoint) {
                    -1 === wordSeparators.indexOf(codePoint)
                      ? (word_1 += fromCodePoint$1(codePoint))
                      : (word_1.length && words.push(word_1),
                        words.push(fromCodePoint$1(codePoint)),
                        (word_1 = ''));
                  }),
                    word_1.length && words.push(word_1);
                }
              })();
            return words;
          },
          TextContainer = function TextContainer(context, node, styles) {
            (this.text = transform(node.data, styles.textTransform)),
              (this.textBounds = parseTextBounds(
                context,
                this.text,
                styles,
                node,
              ));
          },
          transform = function (text, transform) {
            switch (transform) {
              case 1:
                return text.toLowerCase();
              case 3:
                return text.replace(CAPITALIZE, capitalize);
              case 2:
                return text.toUpperCase();
              default:
                return text;
            }
          },
          CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g,
          capitalize = function (m, p1, p2) {
            return m.length > 0 ? p1 + p2.toUpperCase() : m;
          },
          ImageElementContainer = (function (_super) {
            function ImageElementContainer(context, img) {
              var _this = _super.call(this, context, img) || this;
              return (
                (_this.src = img.currentSrc || img.src),
                (_this.intrinsicWidth = img.naturalWidth),
                (_this.intrinsicHeight = img.naturalHeight),
                _this.context.cache.addImage(_this.src),
                _this
              );
            }
            return (
              __extends(ImageElementContainer, _super), ImageElementContainer
            );
          })(ElementContainer),
          CanvasElementContainer = (function (_super) {
            function CanvasElementContainer(context, canvas) {
              var _this = _super.call(this, context, canvas) || this;
              return (
                (_this.canvas = canvas),
                (_this.intrinsicWidth = canvas.width),
                (_this.intrinsicHeight = canvas.height),
                _this
              );
            }
            return (
              __extends(CanvasElementContainer, _super), CanvasElementContainer
            );
          })(ElementContainer),
          SVGElementContainer = (function (_super) {
            function SVGElementContainer(context, img) {
              var _this = _super.call(this, context, img) || this,
                s = new XMLSerializer(),
                bounds = parseBounds(context, img);
              return (
                img.setAttribute('width', bounds.width + 'px'),
                img.setAttribute('height', bounds.height + 'px'),
                (_this.svg =
                  'data:image/svg+xml,' +
                  encodeURIComponent(s.serializeToString(img))),
                (_this.intrinsicWidth = img.width.baseVal.value),
                (_this.intrinsicHeight = img.height.baseVal.value),
                _this.context.cache.addImage(_this.svg),
                _this
              );
            }
            return __extends(SVGElementContainer, _super), SVGElementContainer;
          })(ElementContainer),
          LIElementContainer = (function (_super) {
            function LIElementContainer(context, element) {
              var _this = _super.call(this, context, element) || this;
              return (_this.value = element.value), _this;
            }
            return __extends(LIElementContainer, _super), LIElementContainer;
          })(ElementContainer),
          OLElementContainer = (function (_super) {
            function OLElementContainer(context, element) {
              var _this = _super.call(this, context, element) || this;
              return (
                (_this.start = element.start),
                (_this.reversed =
                  'boolean' == typeof element.reversed &&
                  !0 === element.reversed),
                _this
              );
            }
            return __extends(OLElementContainer, _super), OLElementContainer;
          })(ElementContainer),
          CHECKBOX_BORDER_RADIUS = [
            { type: 15, flags: 0, unit: 'px', number: 3 },
          ],
          RADIO_BORDER_RADIUS = [{ type: 16, flags: 0, number: 50 }],
          getInputValue = function (node) {
            var value =
              node.type === PASSWORD
                ? Array(node.value.length + 1).join('•')
                : node.value;
            return 0 === value.length ? node.placeholder || '' : value;
          },
          CHECKBOX = 'checkbox',
          RADIO = 'radio',
          PASSWORD = 'password',
          InputElementContainer = (function (_super) {
            function InputElementContainer(context, input) {
              var bounds,
                _this = _super.call(this, context, input) || this;
              switch (
                ((_this.type = input.type.toLowerCase()),
                (_this.checked = input.checked),
                (_this.value = getInputValue(input)),
                (_this.type === CHECKBOX || _this.type === RADIO) &&
                  ((_this.styles.backgroundColor = 3739148031),
                  (_this.styles.borderTopColor =
                    _this.styles.borderRightColor =
                    _this.styles.borderBottomColor =
                    _this.styles.borderLeftColor =
                      2779096575),
                  (_this.styles.borderTopWidth =
                    _this.styles.borderRightWidth =
                    _this.styles.borderBottomWidth =
                    _this.styles.borderLeftWidth =
                      1),
                  (_this.styles.borderTopStyle =
                    _this.styles.borderRightStyle =
                    _this.styles.borderBottomStyle =
                    _this.styles.borderLeftStyle =
                      1),
                  (_this.styles.backgroundClip = [0]),
                  (_this.styles.backgroundOrigin = [0]),
                  (_this.bounds =
                    (bounds = _this.bounds).width > bounds.height
                      ? new Bounds(
                          bounds.left + (bounds.width - bounds.height) / 2,
                          bounds.top,
                          bounds.height,
                          bounds.height,
                        )
                      : bounds.width < bounds.height
                        ? new Bounds(
                            bounds.left,
                            bounds.top + (bounds.height - bounds.width) / 2,
                            bounds.width,
                            bounds.width,
                          )
                        : bounds)),
                _this.type)
              ) {
                case CHECKBOX:
                  _this.styles.borderTopRightRadius =
                    _this.styles.borderTopLeftRadius =
                    _this.styles.borderBottomRightRadius =
                    _this.styles.borderBottomLeftRadius =
                      CHECKBOX_BORDER_RADIUS;
                  break;
                case RADIO:
                  _this.styles.borderTopRightRadius =
                    _this.styles.borderTopLeftRadius =
                    _this.styles.borderBottomRightRadius =
                    _this.styles.borderBottomLeftRadius =
                      RADIO_BORDER_RADIUS;
              }
              return _this;
            }
            return (
              __extends(InputElementContainer, _super), InputElementContainer
            );
          })(ElementContainer),
          SelectElementContainer = (function (_super) {
            function SelectElementContainer(context, element) {
              var _this = _super.call(this, context, element) || this,
                option = element.options[element.selectedIndex || 0];
              return (_this.value = (option && option.text) || ''), _this;
            }
            return (
              __extends(SelectElementContainer, _super), SelectElementContainer
            );
          })(ElementContainer),
          TextareaElementContainer = (function (_super) {
            function TextareaElementContainer(context, element) {
              var _this = _super.call(this, context, element) || this;
              return (_this.value = element.value), _this;
            }
            return (
              __extends(TextareaElementContainer, _super),
              TextareaElementContainer
            );
          })(ElementContainer),
          IFrameElementContainer = (function (_super) {
            function IFrameElementContainer(context, iframe) {
              var _this = _super.call(this, context, iframe) || this;
              (_this.src = iframe.src),
                (_this.width = parseInt(iframe.width, 10) || 0),
                (_this.height = parseInt(iframe.height, 10) || 0),
                (_this.backgroundColor = _this.styles.backgroundColor);
              try {
                if (
                  iframe.contentWindow &&
                  iframe.contentWindow.document &&
                  iframe.contentWindow.document.documentElement
                ) {
                  _this.tree = parseTree(
                    context,
                    iframe.contentWindow.document.documentElement,
                  );
                  var documentBackgroundColor = iframe.contentWindow.document
                      .documentElement
                      ? parseColor(
                          context,
                          getComputedStyle(
                            iframe.contentWindow.document.documentElement,
                          ).backgroundColor,
                        )
                      : COLORS.TRANSPARENT,
                    bodyBackgroundColor = iframe.contentWindow.document.body
                      ? parseColor(
                          context,
                          getComputedStyle(iframe.contentWindow.document.body)
                            .backgroundColor,
                        )
                      : COLORS.TRANSPARENT;
                  _this.backgroundColor = isTransparent(documentBackgroundColor)
                    ? isTransparent(bodyBackgroundColor)
                      ? _this.styles.backgroundColor
                      : bodyBackgroundColor
                    : documentBackgroundColor;
                }
              } catch (e) {}
              return _this;
            }
            return (
              __extends(IFrameElementContainer, _super), IFrameElementContainer
            );
          })(ElementContainer),
          LIST_OWNERS = ['OL', 'UL', 'MENU'],
          parseNodeTree = function (context, node, parent, root) {
            for (
              var childNode = node.firstChild, nextNode = void 0;
              childNode;
              childNode = nextNode
            )
              if (
                ((nextNode = childNode.nextSibling),
                isTextNode(childNode) && childNode.data.trim().length > 0)
              )
                parent.textNodes.push(
                  new TextContainer(context, childNode, parent.styles),
                );
              else if (isElementNode(childNode)) {
                if (isSlotElement(childNode) && childNode.assignedNodes)
                  childNode.assignedNodes().forEach(function (childNode) {
                    return parseNodeTree(context, childNode, parent, root);
                  });
                else {
                  var container = createContainer(context, childNode);
                  !container.styles.isVisible() ||
                    (createsRealStackingContext(childNode, container, root)
                      ? (container.flags |= 4)
                      : createsStackingContext(container.styles) &&
                        (container.flags |= 2),
                    -1 !== LIST_OWNERS.indexOf(childNode.tagName) &&
                      (container.flags |= 8),
                    parent.elements.push(container),
                    childNode.slot,
                    childNode.shadowRoot
                      ? parseNodeTree(
                          context,
                          childNode.shadowRoot,
                          container,
                          root,
                        )
                      : isTextareaElement(childNode) ||
                        isSVGElement(childNode) ||
                        isSelectElement(childNode) ||
                        parseNodeTree(context, childNode, container, root));
                }
              }
          },
          createContainer = function (context, element) {
            return isImageElement(element)
              ? new ImageElementContainer(context, element)
              : isCanvasElement(element)
                ? new CanvasElementContainer(context, element)
                : isSVGElement(element)
                  ? new SVGElementContainer(context, element)
                  : isLIElement(element)
                    ? new LIElementContainer(context, element)
                    : isOLElement(element)
                      ? new OLElementContainer(context, element)
                      : isInputElement(element)
                        ? new InputElementContainer(context, element)
                        : isSelectElement(element)
                          ? new SelectElementContainer(context, element)
                          : isTextareaElement(element)
                            ? new TextareaElementContainer(context, element)
                            : isIFrameElement(element)
                              ? new IFrameElementContainer(context, element)
                              : new ElementContainer(context, element);
          },
          parseTree = function (context, element) {
            var container = createContainer(context, element);
            return (
              (container.flags |= 4),
              parseNodeTree(context, element, container, container),
              container
            );
          },
          createsRealStackingContext = function (node, container, root) {
            return (
              container.styles.isPositionedWithZIndex() ||
              container.styles.opacity < 1 ||
              container.styles.isTransformed() ||
              (isBodyElement(node) && root.styles.isTransparent())
            );
          },
          createsStackingContext = function (styles) {
            return styles.isPositioned() || styles.isFloating();
          },
          isTextNode = function (node) {
            return node.nodeType === Node.TEXT_NODE;
          },
          isElementNode = function (node) {
            return node.nodeType === Node.ELEMENT_NODE;
          },
          isHTMLElementNode = function (node) {
            return (
              isElementNode(node) &&
              void 0 !== node.style &&
              !isSVGElementNode(node)
            );
          },
          isSVGElementNode = function (element) {
            return 'object' == typeof element.className;
          },
          isLIElement = function (node) {
            return 'LI' === node.tagName;
          },
          isOLElement = function (node) {
            return 'OL' === node.tagName;
          },
          isInputElement = function (node) {
            return 'INPUT' === node.tagName;
          },
          isSVGElement = function (node) {
            return 'svg' === node.tagName;
          },
          isBodyElement = function (node) {
            return 'BODY' === node.tagName;
          },
          isCanvasElement = function (node) {
            return 'CANVAS' === node.tagName;
          },
          isVideoElement = function (node) {
            return 'VIDEO' === node.tagName;
          },
          isImageElement = function (node) {
            return 'IMG' === node.tagName;
          },
          isIFrameElement = function (node) {
            return 'IFRAME' === node.tagName;
          },
          isStyleElement = function (node) {
            return 'STYLE' === node.tagName;
          },
          isTextareaElement = function (node) {
            return 'TEXTAREA' === node.tagName;
          },
          isSelectElement = function (node) {
            return 'SELECT' === node.tagName;
          },
          isSlotElement = function (node) {
            return 'SLOT' === node.tagName;
          },
          isCustomElement = function (node) {
            return node.tagName.indexOf('-') > 0;
          },
          CounterState = (function () {
            function CounterState() {
              this.counters = {};
            }
            return (
              (CounterState.prototype.getCounterValue = function (name) {
                var counter = this.counters[name];
                return counter && counter.length
                  ? counter[counter.length - 1]
                  : 1;
              }),
              (CounterState.prototype.getCounterValues = function (name) {
                return this.counters[name] || [];
              }),
              (CounterState.prototype.pop = function (counters) {
                var _this = this;
                counters.forEach(function (counter) {
                  return _this.counters[counter].pop();
                });
              }),
              (CounterState.prototype.parse = function (style) {
                var _this = this,
                  counterIncrement = style.counterIncrement,
                  counterReset = style.counterReset,
                  canReset = !0;
                null !== counterIncrement &&
                  counterIncrement.forEach(function (entry) {
                    var counter = _this.counters[entry.counter];
                    counter &&
                      0 !== entry.increment &&
                      ((canReset = !1),
                      counter.length || counter.push(1),
                      (counter[Math.max(0, counter.length - 1)] +=
                        entry.increment));
                  });
                var counterNames = [];
                return (
                  canReset &&
                    counterReset.forEach(function (entry) {
                      var counter = _this.counters[entry.counter];
                      counterNames.push(entry.counter),
                        counter ||
                          (counter = _this.counters[entry.counter] = []),
                        counter.push(entry.reset);
                    }),
                  counterNames
                );
              }),
              CounterState
            );
          })(),
          ROMAN_UPPER = {
            integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
            values: [
              'M',
              'CM',
              'D',
              'CD',
              'C',
              'XC',
              'L',
              'XL',
              'X',
              'IX',
              'V',
              'IV',
              'I',
            ],
          },
          ARMENIAN = {
            integers: [
              9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600,
              500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8,
              7, 6, 5, 4, 3, 2, 1,
            ],
            values: [
              'Ք',
              'Փ',
              'Ւ',
              'Ց',
              'Ր',
              'Տ',
              'Վ',
              'Ս',
              'Ռ',
              'Ջ',
              'Պ',
              'Չ',
              'Ո',
              'Շ',
              'Ն',
              'Յ',
              'Մ',
              'Ճ',
              'Ղ',
              'Ձ',
              'Հ',
              'Կ',
              'Ծ',
              'Խ',
              'Լ',
              'Ի',
              'Ժ',
              'Թ',
              'Ը',
              'Է',
              'Զ',
              'Ե',
              'Դ',
              'Գ',
              'Բ',
              'Ա',
            ],
          },
          HEBREW = {
            integers: [
              1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200,
              100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8,
              7, 6, 5, 4, 3, 2, 1,
            ],
            values: [
              'י׳',
              'ט׳',
              'ח׳',
              'ז׳',
              'ו׳',
              'ה׳',
              'ד׳',
              'ג׳',
              'ב׳',
              'א׳',
              'ת',
              'ש',
              'ר',
              'ק',
              'צ',
              'פ',
              'ע',
              'ס',
              'נ',
              'מ',
              'ל',
              'כ',
              'יט',
              'יח',
              'יז',
              'טז',
              'טו',
              'י',
              'ט',
              'ח',
              'ז',
              'ו',
              'ה',
              'ד',
              'ג',
              'ב',
              'א',
            ],
          },
          GEORGIAN = {
            integers: [
              1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700,
              600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10,
              9, 8, 7, 6, 5, 4, 3, 2, 1,
            ],
            values: [
              'ჵ',
              'ჰ',
              'ჯ',
              'ჴ',
              'ხ',
              'ჭ',
              'წ',
              'ძ',
              'ც',
              'ჩ',
              'შ',
              'ყ',
              'ღ',
              'ქ',
              'ფ',
              'ჳ',
              'ტ',
              'ს',
              'რ',
              'ჟ',
              'პ',
              'ო',
              'ჲ',
              'ნ',
              'მ',
              'ლ',
              'კ',
              'ი',
              'თ',
              'ჱ',
              'ზ',
              'ვ',
              'ე',
              'დ',
              'გ',
              'ბ',
              'ა',
            ],
          },
          createAdditiveCounter = function (
            value,
            min,
            max,
            symbols,
            fallback,
            suffix,
          ) {
            return value < min || value > max
              ? createCounterText(value, fallback, suffix.length > 0)
              : symbols.integers.reduce(function (string, integer, index) {
                  for (; value >= integer; )
                    (value -= integer), (string += symbols.values[index]);
                  return string;
                }, '') + suffix;
          },
          createCounterStyleWithSymbolResolver = function (
            value,
            codePointRangeLength,
            isNumeric,
            resolver,
          ) {
            var string = '';
            do
              !isNumeric && value--,
                (string = resolver(value) + string),
                (value /= codePointRangeLength);
            while (value * codePointRangeLength >= codePointRangeLength);
            return string;
          },
          createCounterStyleFromRange = function (
            value,
            codePointRangeStart,
            codePointRangeEnd,
            isNumeric,
            suffix,
          ) {
            var codePointRangeLength =
              codePointRangeEnd - codePointRangeStart + 1;
            return (
              (value < 0 ? '-' : '') +
              (createCounterStyleWithSymbolResolver(
                Math.abs(value),
                codePointRangeLength,
                isNumeric,
                function (codePoint) {
                  return fromCodePoint$1(
                    Math.floor(codePoint % codePointRangeLength) +
                      codePointRangeStart,
                  );
                },
              ) +
                suffix)
            );
          },
          createCounterStyleFromSymbols = function (value, symbols, suffix) {
            void 0 === suffix && (suffix = '. ');
            var codePointRangeLength = symbols.length;
            return (
              createCounterStyleWithSymbolResolver(
                Math.abs(value),
                codePointRangeLength,
                !1,
                function (codePoint) {
                  return symbols[Math.floor(codePoint % codePointRangeLength)];
                },
              ) + suffix
            );
          },
          createCJKCounter = function (
            value,
            numbers,
            multipliers,
            negativeSign,
            suffix,
            flags,
          ) {
            if (value < -9999 || value > 9999)
              return createCounterText(value, 4, suffix.length > 0);
            var tmp = Math.abs(value),
              string = suffix;
            if (0 === tmp) return numbers[0] + string;
            for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
              var coefficient = tmp % 10;
              0 === coefficient && contains(flags, 1) && '' !== string
                ? (string = numbers[coefficient] + string)
                : coefficient > 1 ||
                    (1 === coefficient && 0 === digit) ||
                    (1 === coefficient && 1 === digit && contains(flags, 2)) ||
                    (1 === coefficient &&
                      1 === digit &&
                      contains(flags, 4) &&
                      value > 100) ||
                    (1 === coefficient && digit > 1 && contains(flags, 8))
                  ? (string =
                      numbers[coefficient] +
                      (digit > 0 ? multipliers[digit - 1] : '') +
                      string)
                  : 1 === coefficient &&
                    digit > 0 &&
                    (string = multipliers[digit - 1] + string),
                (tmp = Math.floor(tmp / 10));
            }
            return (value < 0 ? negativeSign : '') + string;
          },
          CHINESE_INFORMAL_MULTIPLIERS = '十百千萬',
          CHINESE_FORMAL_MULTIPLIERS = '拾佰仟萬',
          JAPANESE_NEGATIVE = 'マイナス',
          KOREAN_NEGATIVE = '마이너스',
          createCounterText = function (value, type, appendSuffix) {
            var defaultSuffix = appendSuffix ? '. ' : '',
              cjkSuffix = appendSuffix ? '、' : '',
              koreanSuffix = appendSuffix ? ', ' : '',
              spaceSuffix = appendSuffix ? ' ' : '';
            switch (type) {
              case 0:
                return '•' + spaceSuffix;
              case 1:
                return '◦' + spaceSuffix;
              case 2:
                return '◾' + spaceSuffix;
              case 5:
                var string = createCounterStyleFromRange(
                  value,
                  48,
                  57,
                  !0,
                  defaultSuffix,
                );
                return string.length < 4 ? '0' + string : string;
              case 4:
                return createCounterStyleFromSymbols(
                  value,
                  '〇一二三四五六七八九',
                  cjkSuffix,
                );
              case 6:
                return createAdditiveCounter(
                  value,
                  1,
                  3999,
                  ROMAN_UPPER,
                  3,
                  defaultSuffix,
                ).toLowerCase();
              case 7:
                return createAdditiveCounter(
                  value,
                  1,
                  3999,
                  ROMAN_UPPER,
                  3,
                  defaultSuffix,
                );
              case 8:
                return createCounterStyleFromRange(
                  value,
                  945,
                  969,
                  !1,
                  defaultSuffix,
                );
              case 9:
                return createCounterStyleFromRange(
                  value,
                  97,
                  122,
                  !1,
                  defaultSuffix,
                );
              case 10:
                return createCounterStyleFromRange(
                  value,
                  65,
                  90,
                  !1,
                  defaultSuffix,
                );
              case 11:
                return createCounterStyleFromRange(
                  value,
                  1632,
                  1641,
                  !0,
                  defaultSuffix,
                );
              case 12:
              case 49:
                return createAdditiveCounter(
                  value,
                  1,
                  9999,
                  ARMENIAN,
                  3,
                  defaultSuffix,
                );
              case 35:
                return createAdditiveCounter(
                  value,
                  1,
                  9999,
                  ARMENIAN,
                  3,
                  defaultSuffix,
                ).toLowerCase();
              case 13:
                return createCounterStyleFromRange(
                  value,
                  2534,
                  2543,
                  !0,
                  defaultSuffix,
                );
              case 14:
              case 30:
                return createCounterStyleFromRange(
                  value,
                  6112,
                  6121,
                  !0,
                  defaultSuffix,
                );
              case 15:
                return createCounterStyleFromSymbols(
                  value,
                  '子丑寅卯辰巳午未申酉戌亥',
                  cjkSuffix,
                );
              case 16:
                return createCounterStyleFromSymbols(
                  value,
                  '甲乙丙丁戊己庚辛壬癸',
                  cjkSuffix,
                );
              case 17:
              case 48:
                return createCJKCounter(
                  value,
                  '零一二三四五六七八九',
                  CHINESE_INFORMAL_MULTIPLIERS,
                  '負',
                  cjkSuffix,
                  14,
                );
              case 47:
                return createCJKCounter(
                  value,
                  '零壹貳參肆伍陸柒捌玖',
                  CHINESE_FORMAL_MULTIPLIERS,
                  '負',
                  cjkSuffix,
                  15,
                );
              case 42:
                return createCJKCounter(
                  value,
                  '零一二三四五六七八九',
                  CHINESE_INFORMAL_MULTIPLIERS,
                  '负',
                  cjkSuffix,
                  14,
                );
              case 41:
                return createCJKCounter(
                  value,
                  '零壹贰叁肆伍陆柒捌玖',
                  CHINESE_FORMAL_MULTIPLIERS,
                  '负',
                  cjkSuffix,
                  15,
                );
              case 26:
                return createCJKCounter(
                  value,
                  '〇一二三四五六七八九',
                  '十百千万',
                  JAPANESE_NEGATIVE,
                  cjkSuffix,
                  0,
                );
              case 25:
                return createCJKCounter(
                  value,
                  '零壱弐参四伍六七八九',
                  '拾百千万',
                  JAPANESE_NEGATIVE,
                  cjkSuffix,
                  7,
                );
              case 31:
                return createCJKCounter(
                  value,
                  '영일이삼사오육칠팔구',
                  '십백천만',
                  KOREAN_NEGATIVE,
                  koreanSuffix,
                  7,
                );
              case 33:
                return createCJKCounter(
                  value,
                  '零一二三四五六七八九',
                  '十百千萬',
                  KOREAN_NEGATIVE,
                  koreanSuffix,
                  0,
                );
              case 32:
                return createCJKCounter(
                  value,
                  '零壹貳參四五六七八九',
                  '拾百千',
                  KOREAN_NEGATIVE,
                  koreanSuffix,
                  7,
                );
              case 18:
                return createCounterStyleFromRange(
                  value,
                  2406,
                  2415,
                  !0,
                  defaultSuffix,
                );
              case 20:
                return createAdditiveCounter(
                  value,
                  1,
                  19999,
                  GEORGIAN,
                  3,
                  defaultSuffix,
                );
              case 21:
                return createCounterStyleFromRange(
                  value,
                  2790,
                  2799,
                  !0,
                  defaultSuffix,
                );
              case 22:
                return createCounterStyleFromRange(
                  value,
                  2662,
                  2671,
                  !0,
                  defaultSuffix,
                );
              case 22:
                return createAdditiveCounter(
                  value,
                  1,
                  10999,
                  HEBREW,
                  3,
                  defaultSuffix,
                );
              case 23:
                return createCounterStyleFromSymbols(
                  value,
                  'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん',
                );
              case 24:
                return createCounterStyleFromSymbols(
                  value,
                  'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす',
                );
              case 27:
                return createCounterStyleFromRange(
                  value,
                  3302,
                  3311,
                  !0,
                  defaultSuffix,
                );
              case 28:
                return createCounterStyleFromSymbols(
                  value,
                  'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン',
                  cjkSuffix,
                );
              case 29:
                return createCounterStyleFromSymbols(
                  value,
                  'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス',
                  cjkSuffix,
                );
              case 34:
                return createCounterStyleFromRange(
                  value,
                  3792,
                  3801,
                  !0,
                  defaultSuffix,
                );
              case 37:
                return createCounterStyleFromRange(
                  value,
                  6160,
                  6169,
                  !0,
                  defaultSuffix,
                );
              case 38:
                return createCounterStyleFromRange(
                  value,
                  4160,
                  4169,
                  !0,
                  defaultSuffix,
                );
              case 39:
                return createCounterStyleFromRange(
                  value,
                  2918,
                  2927,
                  !0,
                  defaultSuffix,
                );
              case 40:
                return createCounterStyleFromRange(
                  value,
                  1776,
                  1785,
                  !0,
                  defaultSuffix,
                );
              case 43:
                return createCounterStyleFromRange(
                  value,
                  3046,
                  3055,
                  !0,
                  defaultSuffix,
                );
              case 44:
                return createCounterStyleFromRange(
                  value,
                  3174,
                  3183,
                  !0,
                  defaultSuffix,
                );
              case 45:
                return createCounterStyleFromRange(
                  value,
                  3664,
                  3673,
                  !0,
                  defaultSuffix,
                );
              case 46:
                return createCounterStyleFromRange(
                  value,
                  3872,
                  3881,
                  !0,
                  defaultSuffix,
                );
              default:
                return createCounterStyleFromRange(
                  value,
                  48,
                  57,
                  !0,
                  defaultSuffix,
                );
            }
          },
          IGNORE_ATTRIBUTE = 'data-html2canvas-ignore',
          DocumentCloner = (function () {
            function DocumentCloner(context, element, options) {
              if (
                ((this.context = context),
                (this.options = options),
                (this.scrolledElements = []),
                (this.referenceElement = element),
                (this.counters = new CounterState()),
                (this.quoteDepth = 0),
                !element.ownerDocument)
              )
                throw Error('Cloned element does not have an owner document');
              this.documentElement = this.cloneNode(
                element.ownerDocument.documentElement,
                !1,
              );
            }
            return (
              (DocumentCloner.prototype.toIFrame = function (
                ownerDocument,
                windowSize,
              ) {
                var _this = this,
                  iframe = createIFrameContainer(ownerDocument, windowSize);
                if (!iframe.contentWindow)
                  return Promise.reject('Unable to find iframe window');
                var scrollX = ownerDocument.defaultView.pageXOffset,
                  scrollY = ownerDocument.defaultView.pageYOffset,
                  cloneWindow = iframe.contentWindow,
                  documentClone = cloneWindow.document,
                  iframeLoad = iframeLoader(iframe).then(function () {
                    return __awaiter(_this, void 0, void 0, function () {
                      var onclone, referenceElement;
                      return __generator(this, function (_a) {
                        switch (_a.label) {
                          case 0:
                            if (
                              (this.scrolledElements.forEach(restoreNodeScroll),
                              cloneWindow &&
                                (cloneWindow.scrollTo(
                                  windowSize.left,
                                  windowSize.top,
                                ),
                                /(iPad|iPhone|iPod)/g.test(
                                  navigator.userAgent,
                                ) &&
                                  (cloneWindow.scrollY !== windowSize.top ||
                                    cloneWindow.scrollX !== windowSize.left) &&
                                  (this.context.logger.warn(
                                    'Unable to restore scroll position for cloned document',
                                  ),
                                  (this.context.windowBounds =
                                    this.context.windowBounds.add(
                                      cloneWindow.scrollX - windowSize.left,
                                      cloneWindow.scrollY - windowSize.top,
                                      0,
                                      0,
                                    )))),
                              (onclone = this.options.onclone),
                              void 0 ===
                                (referenceElement =
                                  this.clonedReferenceElement))
                            )
                              return [
                                2,
                                Promise.reject(
                                  'Error finding the ' +
                                    this.referenceElement.nodeName +
                                    ' in the cloned document',
                                ),
                              ];
                            if (
                              !(
                                documentClone.fonts && documentClone.fonts.ready
                              )
                            )
                              return [3, 2];
                            return [4, documentClone.fonts.ready];
                          case 1:
                            _a.sent(), (_a.label = 2);
                          case 2:
                            if (!/(AppleWebKit)/g.test(navigator.userAgent))
                              return [3, 4];
                            return [4, imagesReady(documentClone)];
                          case 3:
                            _a.sent(), (_a.label = 4);
                          case 4:
                            if ('function' == typeof onclone)
                              return [
                                2,
                                Promise.resolve()
                                  .then(function () {
                                    return onclone(
                                      documentClone,
                                      referenceElement,
                                    );
                                  })
                                  .then(function () {
                                    return iframe;
                                  }),
                              ];
                            return [2, iframe];
                        }
                      });
                    });
                  });
                return (
                  documentClone.open(),
                  documentClone.write(
                    serializeDoctype(document.doctype) + '<html></html>',
                  ),
                  restoreOwnerScroll(
                    this.referenceElement.ownerDocument,
                    scrollX,
                    scrollY,
                  ),
                  documentClone.replaceChild(
                    documentClone.adoptNode(this.documentElement),
                    documentClone.documentElement,
                  ),
                  documentClone.close(),
                  iframeLoad
                );
              }),
              (DocumentCloner.prototype.createElementClone = function (node) {
                if ((isDebugging(node, 2), isCanvasElement(node)))
                  return this.createCanvasClone(node);
                if (isVideoElement(node)) return this.createVideoClone(node);
                if (isStyleElement(node)) return this.createStyleClone(node);
                var clone = node.cloneNode(!1);
                return (isImageElement(clone) &&
                  (isImageElement(node) &&
                    node.currentSrc &&
                    node.currentSrc !== node.src &&
                    ((clone.src = node.currentSrc), (clone.srcset = '')),
                  'lazy' === clone.loading && (clone.loading = 'eager')),
                isCustomElement(clone))
                  ? this.createCustomElementClone(clone)
                  : clone;
              }),
              (DocumentCloner.prototype.createCustomElementClone = function (
                node,
              ) {
                var clone = document.createElement('html2canvascustomelement');
                return copyCSSStyles(node.style, clone), clone;
              }),
              (DocumentCloner.prototype.createStyleClone = function (node) {
                try {
                  var sheet = node.sheet;
                  if (sheet && sheet.cssRules) {
                    var css = [].slice.call(sheet.cssRules, 0).reduce(function (
                        css,
                        rule,
                      ) {
                        return rule && 'string' == typeof rule.cssText
                          ? css + rule.cssText
                          : css;
                      }, ''),
                      style = node.cloneNode(!1);
                    return (style.textContent = css), style;
                  }
                } catch (e) {
                  if (
                    (this.context.logger.error(
                      'Unable to access cssRules property',
                      e,
                    ),
                    'SecurityError' !== e.name)
                  )
                    throw e;
                }
                return node.cloneNode(!1);
              }),
              (DocumentCloner.prototype.createCanvasClone = function (canvas) {
                if (this.options.inlineImages && canvas.ownerDocument) {
                  var _a,
                    img = canvas.ownerDocument.createElement('img');
                  try {
                    return (img.src = canvas.toDataURL()), img;
                  } catch (e) {
                    this.context.logger.info(
                      'Unable to inline canvas contents, canvas is tainted',
                      canvas,
                    );
                  }
                }
                var clonedCanvas = canvas.cloneNode(!1);
                try {
                  (clonedCanvas.width = canvas.width),
                    (clonedCanvas.height = canvas.height);
                  var ctx = canvas.getContext('2d'),
                    clonedCtx = clonedCanvas.getContext('2d');
                  if (clonedCtx) {
                    if (!this.options.allowTaint && ctx)
                      clonedCtx.putImageData(
                        ctx.getImageData(0, 0, canvas.width, canvas.height),
                        0,
                        0,
                      );
                    else {
                      var gl =
                        null !== (_a = canvas.getContext('webgl2')) &&
                        void 0 !== _a
                          ? _a
                          : canvas.getContext('webgl');
                      if (gl) {
                        var attribs = gl.getContextAttributes();
                        (null == attribs
                          ? void 0
                          : attribs.preserveDrawingBuffer) === !1 &&
                          this.context.logger.warn(
                            'Unable to clone WebGL context as it has preserveDrawingBuffer=false',
                            canvas,
                          );
                      }
                      clonedCtx.drawImage(canvas, 0, 0);
                    }
                  }
                } catch (e) {
                  this.context.logger.info(
                    'Unable to clone canvas as it is tainted',
                    canvas,
                  );
                }
                return clonedCanvas;
              }),
              (DocumentCloner.prototype.createVideoClone = function (video) {
                var canvas = video.ownerDocument.createElement('canvas');
                (canvas.width = video.offsetWidth),
                  (canvas.height = video.offsetHeight);
                var ctx = canvas.getContext('2d');
                try {
                  return (
                    ctx &&
                      (ctx.drawImage(video, 0, 0, canvas.width, canvas.height),
                      this.options.allowTaint ||
                        ctx.getImageData(0, 0, canvas.width, canvas.height)),
                    canvas
                  );
                } catch (e) {
                  this.context.logger.info(
                    'Unable to clone video as it is tainted',
                    video,
                  );
                }
                var blankCanvas = video.ownerDocument.createElement('canvas');
                return (
                  (blankCanvas.width = video.offsetWidth),
                  (blankCanvas.height = video.offsetHeight),
                  blankCanvas
                );
              }),
              (DocumentCloner.prototype.appendChildNode = function (
                clone,
                child,
                copyStyles,
              ) {
                (!isElementNode(child) ||
                  ('SCRIPT' !== child.tagName &&
                    !child.hasAttribute(IGNORE_ATTRIBUTE) &&
                    ('function' != typeof this.options.ignoreElements ||
                      !this.options.ignoreElements(child)))) &&
                  ((this.options.copyStyles &&
                    isElementNode(child) &&
                    isStyleElement(child)) ||
                    clone.appendChild(this.cloneNode(child, copyStyles)));
              }),
              (DocumentCloner.prototype.cloneChildNodes = function (
                node,
                clone,
                copyStyles,
              ) {
                for (
                  var _this = this,
                    child = node.shadowRoot
                      ? node.shadowRoot.firstChild
                      : node.firstChild;
                  child;
                  child = child.nextSibling
                )
                  if (
                    isElementNode(child) &&
                    isSlotElement(child) &&
                    'function' == typeof child.assignedNodes
                  ) {
                    var assignedNodes = child.assignedNodes();
                    assignedNodes.length &&
                      assignedNodes.forEach(function (assignedNode) {
                        return _this.appendChildNode(
                          clone,
                          assignedNode,
                          copyStyles,
                        );
                      });
                  } else this.appendChildNode(clone, child, copyStyles);
              }),
              (DocumentCloner.prototype.cloneNode = function (
                node,
                copyStyles,
              ) {
                if (isTextNode(node)) return document.createTextNode(node.data);
                if (!node.ownerDocument) return node.cloneNode(!1);
                var window1 = node.ownerDocument.defaultView;
                if (
                  window1 &&
                  isElementNode(node) &&
                  (isHTMLElementNode(node) || isSVGElementNode(node))
                ) {
                  var clone = this.createElementClone(node);
                  clone.style.transitionProperty = 'none';
                  var style = window1.getComputedStyle(node),
                    styleBefore = window1.getComputedStyle(node, ':before'),
                    styleAfter = window1.getComputedStyle(node, ':after');
                  this.referenceElement === node &&
                    isHTMLElementNode(clone) &&
                    (this.clonedReferenceElement = clone),
                    isBodyElement(clone) && createPseudoHideStyles(clone);
                  var counters = this.counters.parse(
                      new CSSParsedCounterDeclaration(this.context, style),
                    ),
                    before = this.resolvePseudoContent(
                      node,
                      clone,
                      styleBefore,
                      PseudoElementType1.BEFORE,
                    );
                  isCustomElement(node) && (copyStyles = !0),
                    isVideoElement(node) ||
                      this.cloneChildNodes(node, clone, copyStyles),
                    before && clone.insertBefore(before, clone.firstChild);
                  var after = this.resolvePseudoContent(
                    node,
                    clone,
                    styleAfter,
                    PseudoElementType1.AFTER,
                  );
                  return (
                    after && clone.appendChild(after),
                    this.counters.pop(counters),
                    ((style &&
                      (this.options.copyStyles || isSVGElementNode(node)) &&
                      !isIFrameElement(node)) ||
                      copyStyles) &&
                      copyCSSStyles(style, clone),
                    (0 !== node.scrollTop || 0 !== node.scrollLeft) &&
                      this.scrolledElements.push([
                        clone,
                        node.scrollLeft,
                        node.scrollTop,
                      ]),
                    (isTextareaElement(node) || isSelectElement(node)) &&
                      (isTextareaElement(clone) || isSelectElement(clone)) &&
                      (clone.value = node.value),
                    clone
                  );
                }
                return node.cloneNode(!1);
              }),
              (DocumentCloner.prototype.resolvePseudoContent = function (
                node,
                clone,
                style,
                pseudoElt,
              ) {
                var _this = this;
                if (style) {
                  var value = style.content,
                    document1 = clone.ownerDocument;
                  if (
                    document1 &&
                    value &&
                    'none' !== value &&
                    '-moz-alt-content' !== value &&
                    'none' !== style.display
                  ) {
                    this.counters.parse(
                      new CSSParsedCounterDeclaration(this.context, style),
                    );
                    var declaration = new CSSParsedPseudoDeclaration(
                        this.context,
                        style,
                      ),
                      anonymousReplacedElement = document1.createElement(
                        'html2canvaspseudoelement',
                      );
                    copyCSSStyles(style, anonymousReplacedElement),
                      declaration.content.forEach(function (token) {
                        if (0 === token.type)
                          anonymousReplacedElement.appendChild(
                            document1.createTextNode(token.value),
                          );
                        else if (22 === token.type) {
                          var img = document1.createElement('img');
                          (img.src = token.value),
                            (img.style.opacity = '1'),
                            anonymousReplacedElement.appendChild(img);
                        } else if (18 === token.type) {
                          if ('attr' === token.name) {
                            var attr = token.values.filter(isIdentToken);
                            attr.length &&
                              anonymousReplacedElement.appendChild(
                                document1.createTextNode(
                                  node.getAttribute(attr[0].value) || '',
                                ),
                              );
                          } else if ('counter' === token.name) {
                            var _a = token.values.filter(
                                nonFunctionArgSeparator,
                              ),
                              counter = _a[0],
                              counterStyle = _a[1];
                            if (counter && isIdentToken(counter)) {
                              var counterState = _this.counters.getCounterValue(
                                  counter.value,
                                ),
                                counterType =
                                  counterStyle && isIdentToken(counterStyle)
                                    ? listStyleType.parse(
                                        _this.context,
                                        counterStyle.value,
                                      )
                                    : 3;
                              anonymousReplacedElement.appendChild(
                                document1.createTextNode(
                                  createCounterText(
                                    counterState,
                                    counterType,
                                    !1,
                                  ),
                                ),
                              );
                            }
                          } else if ('counters' === token.name) {
                            var _b = token.values.filter(
                                nonFunctionArgSeparator,
                              ),
                              counter = _b[0],
                              delim = _b[1],
                              counterStyle = _b[2];
                            if (counter && isIdentToken(counter)) {
                              var counterStates =
                                  _this.counters.getCounterValues(
                                    counter.value,
                                  ),
                                counterType_1 =
                                  counterStyle && isIdentToken(counterStyle)
                                    ? listStyleType.parse(
                                        _this.context,
                                        counterStyle.value,
                                      )
                                    : 3,
                                separator =
                                  delim && 0 === delim.type ? delim.value : '',
                                text = counterStates
                                  .map(function (value) {
                                    return createCounterText(
                                      value,
                                      counterType_1,
                                      !1,
                                    );
                                  })
                                  .join(separator);
                              anonymousReplacedElement.appendChild(
                                document1.createTextNode(text),
                              );
                            }
                          }
                        } else if (20 === token.type)
                          switch (token.value) {
                            case 'open-quote':
                              anonymousReplacedElement.appendChild(
                                document1.createTextNode(
                                  getQuote(
                                    declaration.quotes,
                                    _this.quoteDepth++,
                                    !0,
                                  ),
                                ),
                              );
                              break;
                            case 'close-quote':
                              anonymousReplacedElement.appendChild(
                                document1.createTextNode(
                                  getQuote(
                                    declaration.quotes,
                                    --_this.quoteDepth,
                                    !1,
                                  ),
                                ),
                              );
                              break;
                            default:
                              anonymousReplacedElement.appendChild(
                                document1.createTextNode(token.value),
                              );
                          }
                      }),
                      (anonymousReplacedElement.className =
                        PSEUDO_HIDE_ELEMENT_CLASS_BEFORE +
                        ' ' +
                        PSEUDO_HIDE_ELEMENT_CLASS_AFTER);
                    var newClassName =
                      pseudoElt === PseudoElementType1.BEFORE
                        ? ' ' + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE
                        : ' ' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
                    return (
                      isSVGElementNode(clone)
                        ? (clone.className.baseValue += newClassName)
                        : (clone.className += newClassName),
                      anonymousReplacedElement
                    );
                  }
                }
              }),
              (DocumentCloner.destroy = function (container) {
                return (
                  !!container.parentNode &&
                  (container.parentNode.removeChild(container), !0)
                );
              }),
              DocumentCloner
            );
          })();
        ((PseudoElementType = PseudoElementType1 || (PseudoElementType1 = {}))[
          (PseudoElementType.BEFORE = 0)
        ] = 'BEFORE'),
          (PseudoElementType[(PseudoElementType.AFTER = 1)] = 'AFTER');
        var createIFrameContainer = function (ownerDocument, bounds) {
            var cloneIframeContainer = ownerDocument.createElement('iframe');
            return (
              (cloneIframeContainer.className = 'html2canvas-container'),
              (cloneIframeContainer.style.visibility = 'hidden'),
              (cloneIframeContainer.style.position = 'fixed'),
              (cloneIframeContainer.style.left = '-10000px'),
              (cloneIframeContainer.style.top = '0px'),
              (cloneIframeContainer.style.border = '0'),
              (cloneIframeContainer.width = bounds.width.toString()),
              (cloneIframeContainer.height = bounds.height.toString()),
              (cloneIframeContainer.scrolling = 'no'),
              cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, 'true'),
              ownerDocument.body.appendChild(cloneIframeContainer),
              cloneIframeContainer
            );
          },
          imageReady = function (img) {
            return new Promise(function (resolve) {
              if (img.complete || !img.src) {
                resolve();
                return;
              }
              (img.onload = resolve), (img.onerror = resolve);
            });
          },
          imagesReady = function (document1) {
            return Promise.all(
              [].slice.call(document1.images, 0).map(imageReady),
            );
          },
          iframeLoader = function (iframe) {
            return new Promise(function (resolve, reject) {
              var cloneWindow = iframe.contentWindow;
              if (!cloneWindow) return reject('No window assigned for iframe');
              var documentClone = cloneWindow.document;
              cloneWindow.onload = iframe.onload = function () {
                cloneWindow.onload = iframe.onload = null;
                var interval = setInterval(function () {
                  documentClone.body.childNodes.length > 0 &&
                    'complete' === documentClone.readyState &&
                    (clearInterval(interval), resolve(iframe));
                }, 50);
              };
            });
          },
          ignoredStyleProperties = ['all', 'd', 'content'],
          copyCSSStyles = function (style, target) {
            for (var i = style.length - 1; i >= 0; i--) {
              var property = style.item(i);
              -1 === ignoredStyleProperties.indexOf(property) &&
                target.style.setProperty(
                  property,
                  style.getPropertyValue(property),
                );
            }
            return target;
          },
          serializeDoctype = function (doctype) {
            var str = '';
            return (
              doctype &&
                ((str += '<!DOCTYPE '),
                doctype.name && (str += doctype.name),
                doctype.internalSubset && (str += doctype.internalSubset),
                doctype.publicId && (str += '"' + doctype.publicId + '"'),
                doctype.systemId && (str += '"' + doctype.systemId + '"'),
                (str += '>')),
              str
            );
          },
          restoreOwnerScroll = function (ownerDocument, x, y) {
            ownerDocument &&
              ownerDocument.defaultView &&
              (x !== ownerDocument.defaultView.pageXOffset ||
                y !== ownerDocument.defaultView.pageYOffset) &&
              ownerDocument.defaultView.scrollTo(x, y);
          },
          restoreNodeScroll = function (_a) {
            var element = _a[0],
              x = _a[1],
              y = _a[2];
            (element.scrollLeft = x), (element.scrollTop = y);
          },
          PSEUDO_HIDE_ELEMENT_CLASS_BEFORE =
            '___html2canvas___pseudoelement_before',
          PSEUDO_HIDE_ELEMENT_CLASS_AFTER =
            '___html2canvas___pseudoelement_after',
          PSEUDO_HIDE_ELEMENT_STYLE =
            '{\n    content: "" !important;\n    display: none !important;\n}',
          createPseudoHideStyles = function (body) {
            createStyles(
              body,
              '.' +
                PSEUDO_HIDE_ELEMENT_CLASS_BEFORE +
                ':before' +
                PSEUDO_HIDE_ELEMENT_STYLE +
                '\n         .' +
                PSEUDO_HIDE_ELEMENT_CLASS_AFTER +
                ':after' +
                PSEUDO_HIDE_ELEMENT_STYLE,
            );
          },
          createStyles = function (body, styles) {
            var document1 = body.ownerDocument;
            if (document1) {
              var style = document1.createElement('style');
              (style.textContent = styles), body.appendChild(style);
            }
          },
          CacheStorage = (function () {
            function CacheStorage() {}
            return (
              (CacheStorage.getOrigin = function (url) {
                var link = CacheStorage._link;
                return link
                  ? ((link.href = url),
                    (link.href = link.href),
                    link.protocol + link.hostname + link.port)
                  : 'about:blank';
              }),
              (CacheStorage.isSameOrigin = function (src) {
                return CacheStorage.getOrigin(src) === CacheStorage._origin;
              }),
              (CacheStorage.setContext = function (window1) {
                (CacheStorage._link = window1.document.createElement('a')),
                  (CacheStorage._origin = CacheStorage.getOrigin(
                    window1.location.href,
                  ));
              }),
              (CacheStorage._origin = 'about:blank'),
              CacheStorage
            );
          })(),
          Cache = (function () {
            function Cache(context, _options) {
              (this.context = context),
                (this._options = _options),
                (this._cache = {});
            }
            return (
              (Cache.prototype.addImage = function (src) {
                var result = Promise.resolve();
                return (
                  this.has(src) ||
                    ((isBlobImage(src) || isRenderable(src)) &&
                      (this._cache[src] = this.loadImage(src)).catch(
                        function () {},
                      )),
                  result
                );
              }),
              (Cache.prototype.match = function (src) {
                return this._cache[src];
              }),
              (Cache.prototype.loadImage = function (key) {
                return __awaiter(this, void 0, void 0, function () {
                  var isSameOrigin,
                    useCORS,
                    useProxy,
                    src,
                    _this = this;
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        if (
                          ((isSameOrigin = CacheStorage.isSameOrigin(key)),
                          (useCORS =
                            !isInlineImage(key) &&
                            !0 === this._options.useCORS &&
                            FEATURES.SUPPORT_CORS_IMAGES &&
                            !isSameOrigin),
                          (useProxy =
                            !isInlineImage(key) &&
                            !isSameOrigin &&
                            !isBlobImage(key) &&
                            'string' == typeof this._options.proxy &&
                            FEATURES.SUPPORT_CORS_XHR &&
                            !useCORS),
                          !isSameOrigin &&
                            !1 === this._options.allowTaint &&
                            !isInlineImage(key) &&
                            !isBlobImage(key) &&
                            !useProxy &&
                            !useCORS)
                        )
                          return [2];
                        if (((src = key), !useProxy)) return [3, 2];
                        return [4, this.proxy(src)];
                      case 1:
                        (src = _a.sent()), (_a.label = 2);
                      case 2:
                        return (
                          this.context.logger.debug(
                            'Added image ' + key.substring(0, 256),
                          ),
                          [
                            4,
                            new Promise(function (resolve, reject) {
                              var img = new Image();
                              (img.onload = function () {
                                return resolve(img);
                              }),
                                (img.onerror = reject),
                                (isInlineBase64Image(src) || useCORS) &&
                                  (img.crossOrigin = 'anonymous'),
                                (img.src = src),
                                !0 === img.complete &&
                                  setTimeout(function () {
                                    return resolve(img);
                                  }, 500),
                                _this._options.imageTimeout > 0 &&
                                  setTimeout(function () {
                                    return reject(
                                      'Timed out (' +
                                        _this._options.imageTimeout +
                                        'ms) loading image',
                                    );
                                  }, _this._options.imageTimeout);
                            }),
                          ]
                        );
                      case 3:
                        return [2, _a.sent()];
                    }
                  });
                });
              }),
              (Cache.prototype.has = function (key) {
                return void 0 !== this._cache[key];
              }),
              (Cache.prototype.keys = function () {
                return Promise.resolve(Object.keys(this._cache));
              }),
              (Cache.prototype.proxy = function (src) {
                var _this = this,
                  proxy = this._options.proxy;
                if (!proxy) throw Error('No proxy defined');
                var key = src.substring(0, 256);
                return new Promise(function (resolve, reject) {
                  var responseType = FEATURES.SUPPORT_RESPONSE_TYPE
                      ? 'blob'
                      : 'text',
                    xhr = new XMLHttpRequest();
                  (xhr.onload = function () {
                    if (200 === xhr.status) {
                      if ('text' === responseType) resolve(xhr.response);
                      else {
                        var reader_1 = new FileReader();
                        reader_1.addEventListener(
                          'load',
                          function () {
                            return resolve(reader_1.result);
                          },
                          !1,
                        ),
                          reader_1.addEventListener(
                            'error',
                            function (e) {
                              return reject(e);
                            },
                            !1,
                          ),
                          reader_1.readAsDataURL(xhr.response);
                      }
                    } else
                      reject(
                        'Failed to proxy resource ' +
                          key +
                          ' with status code ' +
                          xhr.status,
                      );
                  }),
                    (xhr.onerror = reject);
                  var queryString = proxy.indexOf('?') > -1 ? '&' : '?';
                  if (
                    (xhr.open(
                      'GET',
                      '' +
                        proxy +
                        queryString +
                        'url=' +
                        encodeURIComponent(src) +
                        '&responseType=' +
                        responseType,
                    ),
                    'text' !== responseType &&
                      xhr instanceof XMLHttpRequest &&
                      (xhr.responseType = responseType),
                    _this._options.imageTimeout)
                  ) {
                    var timeout_1 = _this._options.imageTimeout;
                    (xhr.timeout = timeout_1),
                      (xhr.ontimeout = function () {
                        return reject(
                          'Timed out (' + timeout_1 + 'ms) proxying ' + key,
                        );
                      });
                  }
                  xhr.send();
                });
              }),
              Cache
            );
          })(),
          INLINE_SVG = /^data:image\/svg\+xml/i,
          INLINE_BASE64 = /^data:image\/.*;base64,/i,
          INLINE_IMG = /^data:image\/.*/i,
          isRenderable = function (src) {
            return FEATURES.SUPPORT_SVG_DRAWING || !isSVG(src);
          },
          isInlineImage = function (src) {
            return INLINE_IMG.test(src);
          },
          isInlineBase64Image = function (src) {
            return INLINE_BASE64.test(src);
          },
          isBlobImage = function (src) {
            return 'blob' === src.substr(0, 4);
          },
          isSVG = function (src) {
            return (
              'svg' === src.substr(-3).toLowerCase() || INLINE_SVG.test(src)
            );
          },
          Vector = (function () {
            function Vector(x, y) {
              (this.type = 0), (this.x = x), (this.y = y);
            }
            return (
              (Vector.prototype.add = function (deltaX, deltaY) {
                return new Vector(this.x + deltaX, this.y + deltaY);
              }),
              Vector
            );
          })(),
          lerp = function (a, b, t) {
            return new Vector(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
          },
          BezierCurve = (function () {
            function BezierCurve(start, startControl, endControl, end) {
              (this.type = 1),
                (this.start = start),
                (this.startControl = startControl),
                (this.endControl = endControl),
                (this.end = end);
            }
            return (
              (BezierCurve.prototype.subdivide = function (t, firstHalf) {
                var ab = lerp(this.start, this.startControl, t),
                  bc = lerp(this.startControl, this.endControl, t),
                  cd = lerp(this.endControl, this.end, t),
                  abbc = lerp(ab, bc, t),
                  bccd = lerp(bc, cd, t),
                  dest = lerp(abbc, bccd, t);
                return firstHalf
                  ? new BezierCurve(this.start, ab, abbc, dest)
                  : new BezierCurve(dest, bccd, cd, this.end);
              }),
              (BezierCurve.prototype.add = function (deltaX, deltaY) {
                return new BezierCurve(
                  this.start.add(deltaX, deltaY),
                  this.startControl.add(deltaX, deltaY),
                  this.endControl.add(deltaX, deltaY),
                  this.end.add(deltaX, deltaY),
                );
              }),
              (BezierCurve.prototype.reverse = function () {
                return new BezierCurve(
                  this.end,
                  this.endControl,
                  this.startControl,
                  this.start,
                );
              }),
              BezierCurve
            );
          })(),
          isBezierCurve = function (path) {
            return 1 === path.type;
          },
          BoundCurves = function BoundCurves(element) {
            var styles = element.styles,
              bounds = element.bounds,
              _a = getAbsoluteValueForTuple(
                styles.borderTopLeftRadius,
                bounds.width,
                bounds.height,
              ),
              tlh = _a[0],
              tlv = _a[1],
              _b = getAbsoluteValueForTuple(
                styles.borderTopRightRadius,
                bounds.width,
                bounds.height,
              ),
              trh = _b[0],
              trv = _b[1],
              _c = getAbsoluteValueForTuple(
                styles.borderBottomRightRadius,
                bounds.width,
                bounds.height,
              ),
              brh = _c[0],
              brv = _c[1],
              _d = getAbsoluteValueForTuple(
                styles.borderBottomLeftRadius,
                bounds.width,
                bounds.height,
              ),
              blh = _d[0],
              blv = _d[1],
              factors = [];
            factors.push((tlh + trh) / bounds.width),
              factors.push((blh + brh) / bounds.width),
              factors.push((tlv + blv) / bounds.height),
              factors.push((trv + brv) / bounds.height);
            var maxFactor = Math.max.apply(Math, factors);
            maxFactor > 1 &&
              ((tlh /= maxFactor),
              (tlv /= maxFactor),
              (trh /= maxFactor),
              (trv /= maxFactor),
              (brh /= maxFactor),
              (brv /= maxFactor),
              (blh /= maxFactor),
              (blv /= maxFactor));
            var topWidth = bounds.width - trh,
              rightHeight = bounds.height - brv,
              bottomWidth = bounds.width - brh,
              leftHeight = bounds.height - blv,
              borderTopWidth = styles.borderTopWidth,
              borderRightWidth = styles.borderRightWidth,
              borderBottomWidth = styles.borderBottomWidth,
              borderLeftWidth = styles.borderLeftWidth,
              paddingTop = getAbsoluteValue(
                styles.paddingTop,
                element.bounds.width,
              ),
              paddingRight = getAbsoluteValue(
                styles.paddingRight,
                element.bounds.width,
              ),
              paddingBottom = getAbsoluteValue(
                styles.paddingBottom,
                element.bounds.width,
              ),
              paddingLeft = getAbsoluteValue(
                styles.paddingLeft,
                element.bounds.width,
              );
            (this.topLeftBorderDoubleOuterBox =
              tlh > 0 || tlv > 0
                ? getCurvePoints(
                    bounds.left + borderLeftWidth / 3,
                    bounds.top + borderTopWidth / 3,
                    tlh - borderLeftWidth / 3,
                    tlv - borderTopWidth / 3,
                    CORNER1.TOP_LEFT,
                  )
                : new Vector(
                    bounds.left + borderLeftWidth / 3,
                    bounds.top + borderTopWidth / 3,
                  )),
              (this.topRightBorderDoubleOuterBox =
                tlh > 0 || tlv > 0
                  ? getCurvePoints(
                      bounds.left + topWidth,
                      bounds.top + borderTopWidth / 3,
                      trh - borderRightWidth / 3,
                      trv - borderTopWidth / 3,
                      CORNER1.TOP_RIGHT,
                    )
                  : new Vector(
                      bounds.left + bounds.width - borderRightWidth / 3,
                      bounds.top + borderTopWidth / 3,
                    )),
              (this.bottomRightBorderDoubleOuterBox =
                brh > 0 || brv > 0
                  ? getCurvePoints(
                      bounds.left + bottomWidth,
                      bounds.top + rightHeight,
                      brh - borderRightWidth / 3,
                      brv - borderBottomWidth / 3,
                      CORNER1.BOTTOM_RIGHT,
                    )
                  : new Vector(
                      bounds.left + bounds.width - borderRightWidth / 3,
                      bounds.top + bounds.height - borderBottomWidth / 3,
                    )),
              (this.bottomLeftBorderDoubleOuterBox =
                blh > 0 || blv > 0
                  ? getCurvePoints(
                      bounds.left + borderLeftWidth / 3,
                      bounds.top + leftHeight,
                      blh - borderLeftWidth / 3,
                      blv - borderBottomWidth / 3,
                      CORNER1.BOTTOM_LEFT,
                    )
                  : new Vector(
                      bounds.left + borderLeftWidth / 3,
                      bounds.top + bounds.height - borderBottomWidth / 3,
                    )),
              (this.topLeftBorderDoubleInnerBox =
                tlh > 0 || tlv > 0
                  ? getCurvePoints(
                      bounds.left + (2 * borderLeftWidth) / 3,
                      bounds.top + (2 * borderTopWidth) / 3,
                      tlh - (2 * borderLeftWidth) / 3,
                      tlv - (2 * borderTopWidth) / 3,
                      CORNER1.TOP_LEFT,
                    )
                  : new Vector(
                      bounds.left + (2 * borderLeftWidth) / 3,
                      bounds.top + (2 * borderTopWidth) / 3,
                    )),
              (this.topRightBorderDoubleInnerBox =
                tlh > 0 || tlv > 0
                  ? getCurvePoints(
                      bounds.left + topWidth,
                      bounds.top + (2 * borderTopWidth) / 3,
                      trh - (2 * borderRightWidth) / 3,
                      trv - (2 * borderTopWidth) / 3,
                      CORNER1.TOP_RIGHT,
                    )
                  : new Vector(
                      bounds.left + bounds.width - (2 * borderRightWidth) / 3,
                      bounds.top + (2 * borderTopWidth) / 3,
                    )),
              (this.bottomRightBorderDoubleInnerBox =
                brh > 0 || brv > 0
                  ? getCurvePoints(
                      bounds.left + bottomWidth,
                      bounds.top + rightHeight,
                      brh - (2 * borderRightWidth) / 3,
                      brv - (2 * borderBottomWidth) / 3,
                      CORNER1.BOTTOM_RIGHT,
                    )
                  : new Vector(
                      bounds.left + bounds.width - (2 * borderRightWidth) / 3,
                      bounds.top + bounds.height - (2 * borderBottomWidth) / 3,
                    )),
              (this.bottomLeftBorderDoubleInnerBox =
                blh > 0 || blv > 0
                  ? getCurvePoints(
                      bounds.left + (2 * borderLeftWidth) / 3,
                      bounds.top + leftHeight,
                      blh - (2 * borderLeftWidth) / 3,
                      blv - (2 * borderBottomWidth) / 3,
                      CORNER1.BOTTOM_LEFT,
                    )
                  : new Vector(
                      bounds.left + (2 * borderLeftWidth) / 3,
                      bounds.top + bounds.height - (2 * borderBottomWidth) / 3,
                    )),
              (this.topLeftBorderStroke =
                tlh > 0 || tlv > 0
                  ? getCurvePoints(
                      bounds.left + borderLeftWidth / 2,
                      bounds.top + borderTopWidth / 2,
                      tlh - borderLeftWidth / 2,
                      tlv - borderTopWidth / 2,
                      CORNER1.TOP_LEFT,
                    )
                  : new Vector(
                      bounds.left + borderLeftWidth / 2,
                      bounds.top + borderTopWidth / 2,
                    )),
              (this.topRightBorderStroke =
                tlh > 0 || tlv > 0
                  ? getCurvePoints(
                      bounds.left + topWidth,
                      bounds.top + borderTopWidth / 2,
                      trh - borderRightWidth / 2,
                      trv - borderTopWidth / 2,
                      CORNER1.TOP_RIGHT,
                    )
                  : new Vector(
                      bounds.left + bounds.width - borderRightWidth / 2,
                      bounds.top + borderTopWidth / 2,
                    )),
              (this.bottomRightBorderStroke =
                brh > 0 || brv > 0
                  ? getCurvePoints(
                      bounds.left + bottomWidth,
                      bounds.top + rightHeight,
                      brh - borderRightWidth / 2,
                      brv - borderBottomWidth / 2,
                      CORNER1.BOTTOM_RIGHT,
                    )
                  : new Vector(
                      bounds.left + bounds.width - borderRightWidth / 2,
                      bounds.top + bounds.height - borderBottomWidth / 2,
                    )),
              (this.bottomLeftBorderStroke =
                blh > 0 || blv > 0
                  ? getCurvePoints(
                      bounds.left + borderLeftWidth / 2,
                      bounds.top + leftHeight,
                      blh - borderLeftWidth / 2,
                      blv - borderBottomWidth / 2,
                      CORNER1.BOTTOM_LEFT,
                    )
                  : new Vector(
                      bounds.left + borderLeftWidth / 2,
                      bounds.top + bounds.height - borderBottomWidth / 2,
                    )),
              (this.topLeftBorderBox =
                tlh > 0 || tlv > 0
                  ? getCurvePoints(
                      bounds.left,
                      bounds.top,
                      tlh,
                      tlv,
                      CORNER1.TOP_LEFT,
                    )
                  : new Vector(bounds.left, bounds.top)),
              (this.topRightBorderBox =
                trh > 0 || trv > 0
                  ? getCurvePoints(
                      bounds.left + topWidth,
                      bounds.top,
                      trh,
                      trv,
                      CORNER1.TOP_RIGHT,
                    )
                  : new Vector(bounds.left + bounds.width, bounds.top)),
              (this.bottomRightBorderBox =
                brh > 0 || brv > 0
                  ? getCurvePoints(
                      bounds.left + bottomWidth,
                      bounds.top + rightHeight,
                      brh,
                      brv,
                      CORNER1.BOTTOM_RIGHT,
                    )
                  : new Vector(
                      bounds.left + bounds.width,
                      bounds.top + bounds.height,
                    )),
              (this.bottomLeftBorderBox =
                blh > 0 || blv > 0
                  ? getCurvePoints(
                      bounds.left,
                      bounds.top + leftHeight,
                      blh,
                      blv,
                      CORNER1.BOTTOM_LEFT,
                    )
                  : new Vector(bounds.left, bounds.top + bounds.height)),
              (this.topLeftPaddingBox =
                tlh > 0 || tlv > 0
                  ? getCurvePoints(
                      bounds.left + borderLeftWidth,
                      bounds.top + borderTopWidth,
                      Math.max(0, tlh - borderLeftWidth),
                      Math.max(0, tlv - borderTopWidth),
                      CORNER1.TOP_LEFT,
                    )
                  : new Vector(
                      bounds.left + borderLeftWidth,
                      bounds.top + borderTopWidth,
                    )),
              (this.topRightPaddingBox =
                trh > 0 || trv > 0
                  ? getCurvePoints(
                      bounds.left +
                        Math.min(topWidth, bounds.width - borderRightWidth),
                      bounds.top + borderTopWidth,
                      topWidth > bounds.width + borderRightWidth
                        ? 0
                        : Math.max(0, trh - borderRightWidth),
                      Math.max(0, trv - borderTopWidth),
                      CORNER1.TOP_RIGHT,
                    )
                  : new Vector(
                      bounds.left + bounds.width - borderRightWidth,
                      bounds.top + borderTopWidth,
                    )),
              (this.bottomRightPaddingBox =
                brh > 0 || brv > 0
                  ? getCurvePoints(
                      bounds.left +
                        Math.min(bottomWidth, bounds.width - borderLeftWidth),
                      bounds.top +
                        Math.min(
                          rightHeight,
                          bounds.height - borderBottomWidth,
                        ),
                      Math.max(0, brh - borderRightWidth),
                      Math.max(0, brv - borderBottomWidth),
                      CORNER1.BOTTOM_RIGHT,
                    )
                  : new Vector(
                      bounds.left + bounds.width - borderRightWidth,
                      bounds.top + bounds.height - borderBottomWidth,
                    )),
              (this.bottomLeftPaddingBox =
                blh > 0 || blv > 0
                  ? getCurvePoints(
                      bounds.left + borderLeftWidth,
                      bounds.top +
                        Math.min(leftHeight, bounds.height - borderBottomWidth),
                      Math.max(0, blh - borderLeftWidth),
                      Math.max(0, blv - borderBottomWidth),
                      CORNER1.BOTTOM_LEFT,
                    )
                  : new Vector(
                      bounds.left + borderLeftWidth,
                      bounds.top + bounds.height - borderBottomWidth,
                    )),
              (this.topLeftContentBox =
                tlh > 0 || tlv > 0
                  ? getCurvePoints(
                      bounds.left + borderLeftWidth + paddingLeft,
                      bounds.top + borderTopWidth + paddingTop,
                      Math.max(0, tlh - (borderLeftWidth + paddingLeft)),
                      Math.max(0, tlv - (borderTopWidth + paddingTop)),
                      CORNER1.TOP_LEFT,
                    )
                  : new Vector(
                      bounds.left + borderLeftWidth + paddingLeft,
                      bounds.top + borderTopWidth + paddingTop,
                    )),
              (this.topRightContentBox =
                trh > 0 || trv > 0
                  ? getCurvePoints(
                      bounds.left +
                        Math.min(
                          topWidth,
                          bounds.width + borderLeftWidth + paddingLeft,
                        ),
                      bounds.top + borderTopWidth + paddingTop,
                      topWidth > bounds.width + borderLeftWidth + paddingLeft
                        ? 0
                        : trh - borderLeftWidth + paddingLeft,
                      trv - (borderTopWidth + paddingTop),
                      CORNER1.TOP_RIGHT,
                    )
                  : new Vector(
                      bounds.left +
                        bounds.width -
                        (borderRightWidth + paddingRight),
                      bounds.top + borderTopWidth + paddingTop,
                    )),
              (this.bottomRightContentBox =
                brh > 0 || brv > 0
                  ? getCurvePoints(
                      bounds.left +
                        Math.min(
                          bottomWidth,
                          bounds.width - (borderLeftWidth + paddingLeft),
                        ),
                      bounds.top +
                        Math.min(
                          rightHeight,
                          bounds.height + borderTopWidth + paddingTop,
                        ),
                      Math.max(0, brh - (borderRightWidth + paddingRight)),
                      brv - (borderBottomWidth + paddingBottom),
                      CORNER1.BOTTOM_RIGHT,
                    )
                  : new Vector(
                      bounds.left +
                        bounds.width -
                        (borderRightWidth + paddingRight),
                      bounds.top +
                        bounds.height -
                        (borderBottomWidth + paddingBottom),
                    )),
              (this.bottomLeftContentBox =
                blh > 0 || blv > 0
                  ? getCurvePoints(
                      bounds.left + borderLeftWidth + paddingLeft,
                      bounds.top + leftHeight,
                      Math.max(0, blh - (borderLeftWidth + paddingLeft)),
                      blv - (borderBottomWidth + paddingBottom),
                      CORNER1.BOTTOM_LEFT,
                    )
                  : new Vector(
                      bounds.left + borderLeftWidth + paddingLeft,
                      bounds.top +
                        bounds.height -
                        (borderBottomWidth + paddingBottom),
                    ));
          };
        ((CORNER = CORNER1 || (CORNER1 = {}))[(CORNER.TOP_LEFT = 0)] =
          'TOP_LEFT'),
          (CORNER[(CORNER.TOP_RIGHT = 1)] = 'TOP_RIGHT'),
          (CORNER[(CORNER.BOTTOM_RIGHT = 2)] = 'BOTTOM_RIGHT'),
          (CORNER[(CORNER.BOTTOM_LEFT = 3)] = 'BOTTOM_LEFT');
        var getCurvePoints = function (x, y, r1, r2, position) {
            var kappa = ((Math.sqrt(2) - 1) / 3) * 4,
              ox = r1 * kappa,
              oy = r2 * kappa,
              xm = x + r1,
              ym = y + r2;
            switch (position) {
              case CORNER1.TOP_LEFT:
                return new BezierCurve(
                  new Vector(x, ym),
                  new Vector(x, ym - oy),
                  new Vector(xm - ox, y),
                  new Vector(xm, y),
                );
              case CORNER1.TOP_RIGHT:
                return new BezierCurve(
                  new Vector(x, y),
                  new Vector(x + ox, y),
                  new Vector(xm, ym - oy),
                  new Vector(xm, ym),
                );
              case CORNER1.BOTTOM_RIGHT:
                return new BezierCurve(
                  new Vector(xm, y),
                  new Vector(xm, y + oy),
                  new Vector(x + ox, ym),
                  new Vector(x, ym),
                );
              case CORNER1.BOTTOM_LEFT:
              default:
                return new BezierCurve(
                  new Vector(xm, ym),
                  new Vector(xm - ox, ym),
                  new Vector(x, y + oy),
                  new Vector(x, y),
                );
            }
          },
          calculateBorderBoxPath = function (curves) {
            return [
              curves.topLeftBorderBox,
              curves.topRightBorderBox,
              curves.bottomRightBorderBox,
              curves.bottomLeftBorderBox,
            ];
          },
          calculatePaddingBoxPath = function (curves) {
            return [
              curves.topLeftPaddingBox,
              curves.topRightPaddingBox,
              curves.bottomRightPaddingBox,
              curves.bottomLeftPaddingBox,
            ];
          },
          TransformEffect = function TransformEffect(offsetX, offsetY, matrix) {
            (this.offsetX = offsetX),
              (this.offsetY = offsetY),
              (this.matrix = matrix),
              (this.type = 0),
              (this.target = 6);
          },
          ClipEffect = function ClipEffect(path, target) {
            (this.path = path), (this.target = target), (this.type = 1);
          },
          OpacityEffect = function OpacityEffect(opacity) {
            (this.opacity = opacity), (this.type = 2), (this.target = 6);
          },
          isClipEffect = function (effect) {
            return 1 === effect.type;
          },
          equalPath = function (a, b) {
            return (
              a.length === b.length &&
              a.some(function (v, i) {
                return v === b[i];
              })
            );
          },
          StackingContext = function StackingContext(container) {
            (this.element = container),
              (this.inlineLevel = []),
              (this.nonInlineLevel = []),
              (this.negativeZIndex = []),
              (this.zeroOrAutoZIndexOrTransformedOrOpacity = []),
              (this.positiveZIndex = []),
              (this.nonPositionedFloats = []),
              (this.nonPositionedInlineLevel = []);
          },
          ElementPaint = (function () {
            function ElementPaint(container, parent) {
              if (
                ((this.container = container),
                (this.parent = parent),
                (this.effects = []),
                (this.curves = new BoundCurves(this.container)),
                this.container.styles.opacity < 1 &&
                  this.effects.push(
                    new OpacityEffect(this.container.styles.opacity),
                  ),
                null !== this.container.styles.transform)
              ) {
                var offsetX =
                    this.container.bounds.left +
                    this.container.styles.transformOrigin[0].number,
                  offsetY =
                    this.container.bounds.top +
                    this.container.styles.transformOrigin[1].number,
                  matrix = this.container.styles.transform;
                this.effects.push(
                  new TransformEffect(offsetX, offsetY, matrix),
                );
              }
              if (0 !== this.container.styles.overflowX) {
                var borderBox = calculateBorderBoxPath(this.curves),
                  paddingBox = calculatePaddingBoxPath(this.curves);
                equalPath(borderBox, paddingBox)
                  ? this.effects.push(new ClipEffect(borderBox, 6))
                  : (this.effects.push(new ClipEffect(borderBox, 2)),
                    this.effects.push(new ClipEffect(paddingBox, 4)));
              }
            }
            return (
              (ElementPaint.prototype.getEffects = function (target) {
                for (
                  var inFlow =
                      -1 === [2, 3].indexOf(this.container.styles.position),
                    parent = this.parent,
                    effects = this.effects.slice(0);
                  parent;

                ) {
                  var croplessEffects = parent.effects.filter(
                    function (effect) {
                      return !isClipEffect(effect);
                    },
                  );
                  if (
                    inFlow ||
                    0 !== parent.container.styles.position ||
                    !parent.parent
                  ) {
                    if (
                      (effects.unshift.apply(effects, croplessEffects),
                      (inFlow =
                        -1 ===
                        [2, 3].indexOf(parent.container.styles.position)),
                      0 !== parent.container.styles.overflowX)
                    ) {
                      var borderBox = calculateBorderBoxPath(parent.curves),
                        paddingBox = calculatePaddingBoxPath(parent.curves);
                      equalPath(borderBox, paddingBox) ||
                        effects.unshift(new ClipEffect(paddingBox, 6));
                    }
                  } else effects.unshift.apply(effects, croplessEffects);
                  parent = parent.parent;
                }
                return effects.filter(function (effect) {
                  return contains(effect.target, target);
                });
              }),
              ElementPaint
            );
          })(),
          parseStackTree = function (
            parent,
            stackingContext,
            realStackingContext,
            listItems,
          ) {
            parent.container.elements.forEach(function (child) {
              var treatAsRealStackingContext = contains(child.flags, 4),
                createsStackingContext = contains(child.flags, 2),
                paintContainer = new ElementPaint(child, parent);
              contains(child.styles.display, 2048) &&
                listItems.push(paintContainer);
              var listOwnerItems = contains(child.flags, 8) ? [] : listItems;
              if (treatAsRealStackingContext || createsStackingContext) {
                var parentStack =
                    treatAsRealStackingContext || child.styles.isPositioned()
                      ? realStackingContext
                      : stackingContext,
                  stack = new StackingContext(paintContainer);
                if (
                  child.styles.isPositioned() ||
                  child.styles.opacity < 1 ||
                  child.styles.isTransformed()
                ) {
                  var order_1 = child.styles.zIndex.order;
                  if (order_1 < 0) {
                    var index_1 = 0;
                    parentStack.negativeZIndex.some(function (current, i) {
                      if (
                        order_1 > current.element.container.styles.zIndex.order
                      )
                        index_1 = i;
                      else if (index_1 > 0) return !0;
                      return !1;
                    }),
                      parentStack.negativeZIndex.splice(index_1, 0, stack);
                  } else if (order_1 > 0) {
                    var index_2 = 0;
                    parentStack.positiveZIndex.some(function (current, i) {
                      if (
                        order_1 >= current.element.container.styles.zIndex.order
                      )
                        index_2 = i + 1;
                      else if (index_2 > 0) return !0;
                      return !1;
                    }),
                      parentStack.positiveZIndex.splice(index_2, 0, stack);
                  } else
                    parentStack.zeroOrAutoZIndexOrTransformedOrOpacity.push(
                      stack,
                    );
                } else
                  child.styles.isFloating()
                    ? parentStack.nonPositionedFloats.push(stack)
                    : parentStack.nonPositionedInlineLevel.push(stack);
                parseStackTree(
                  paintContainer,
                  stack,
                  treatAsRealStackingContext ? stack : realStackingContext,
                  listOwnerItems,
                );
              } else
                child.styles.isInlineLevel()
                  ? stackingContext.inlineLevel.push(paintContainer)
                  : stackingContext.nonInlineLevel.push(paintContainer),
                  parseStackTree(
                    paintContainer,
                    stackingContext,
                    realStackingContext,
                    listOwnerItems,
                  );
              contains(child.flags, 8) &&
                processListItems(child, listOwnerItems);
            });
          },
          processListItems = function (owner, elements) {
            for (
              var numbering =
                  owner instanceof OLElementContainer ? owner.start : 1,
                reversed =
                  owner instanceof OLElementContainer && owner.reversed,
                i = 0;
              i < elements.length;
              i++
            ) {
              var item = elements[i];
              item.container instanceof LIElementContainer &&
                'number' == typeof item.container.value &&
                0 !== item.container.value &&
                (numbering = item.container.value),
                (item.listValue = createCounterText(
                  numbering,
                  item.container.styles.listStyleType,
                  !0,
                )),
                (numbering += reversed ? -1 : 1);
            }
          },
          parseStackingContexts = function (container) {
            var paintContainer = new ElementPaint(container, null),
              root = new StackingContext(paintContainer),
              listItems = [];
            return (
              parseStackTree(paintContainer, root, root, listItems),
              processListItems(paintContainer.container, listItems),
              root
            );
          },
          parsePathForBorder = function (curves, borderSide) {
            switch (borderSide) {
              case 0:
                return createPathFromCurves(
                  curves.topLeftBorderBox,
                  curves.topLeftPaddingBox,
                  curves.topRightBorderBox,
                  curves.topRightPaddingBox,
                );
              case 1:
                return createPathFromCurves(
                  curves.topRightBorderBox,
                  curves.topRightPaddingBox,
                  curves.bottomRightBorderBox,
                  curves.bottomRightPaddingBox,
                );
              case 2:
                return createPathFromCurves(
                  curves.bottomRightBorderBox,
                  curves.bottomRightPaddingBox,
                  curves.bottomLeftBorderBox,
                  curves.bottomLeftPaddingBox,
                );
              default:
                return createPathFromCurves(
                  curves.bottomLeftBorderBox,
                  curves.bottomLeftPaddingBox,
                  curves.topLeftBorderBox,
                  curves.topLeftPaddingBox,
                );
            }
          },
          parsePathForBorderDoubleOuter = function (curves, borderSide) {
            switch (borderSide) {
              case 0:
                return createPathFromCurves(
                  curves.topLeftBorderBox,
                  curves.topLeftBorderDoubleOuterBox,
                  curves.topRightBorderBox,
                  curves.topRightBorderDoubleOuterBox,
                );
              case 1:
                return createPathFromCurves(
                  curves.topRightBorderBox,
                  curves.topRightBorderDoubleOuterBox,
                  curves.bottomRightBorderBox,
                  curves.bottomRightBorderDoubleOuterBox,
                );
              case 2:
                return createPathFromCurves(
                  curves.bottomRightBorderBox,
                  curves.bottomRightBorderDoubleOuterBox,
                  curves.bottomLeftBorderBox,
                  curves.bottomLeftBorderDoubleOuterBox,
                );
              default:
                return createPathFromCurves(
                  curves.bottomLeftBorderBox,
                  curves.bottomLeftBorderDoubleOuterBox,
                  curves.topLeftBorderBox,
                  curves.topLeftBorderDoubleOuterBox,
                );
            }
          },
          parsePathForBorderDoubleInner = function (curves, borderSide) {
            switch (borderSide) {
              case 0:
                return createPathFromCurves(
                  curves.topLeftBorderDoubleInnerBox,
                  curves.topLeftPaddingBox,
                  curves.topRightBorderDoubleInnerBox,
                  curves.topRightPaddingBox,
                );
              case 1:
                return createPathFromCurves(
                  curves.topRightBorderDoubleInnerBox,
                  curves.topRightPaddingBox,
                  curves.bottomRightBorderDoubleInnerBox,
                  curves.bottomRightPaddingBox,
                );
              case 2:
                return createPathFromCurves(
                  curves.bottomRightBorderDoubleInnerBox,
                  curves.bottomRightPaddingBox,
                  curves.bottomLeftBorderDoubleInnerBox,
                  curves.bottomLeftPaddingBox,
                );
              default:
                return createPathFromCurves(
                  curves.bottomLeftBorderDoubleInnerBox,
                  curves.bottomLeftPaddingBox,
                  curves.topLeftBorderDoubleInnerBox,
                  curves.topLeftPaddingBox,
                );
            }
          },
          parsePathForBorderStroke = function (curves, borderSide) {
            switch (borderSide) {
              case 0:
                return createStrokePathFromCurves(
                  curves.topLeftBorderStroke,
                  curves.topRightBorderStroke,
                );
              case 1:
                return createStrokePathFromCurves(
                  curves.topRightBorderStroke,
                  curves.bottomRightBorderStroke,
                );
              case 2:
                return createStrokePathFromCurves(
                  curves.bottomRightBorderStroke,
                  curves.bottomLeftBorderStroke,
                );
              default:
                return createStrokePathFromCurves(
                  curves.bottomLeftBorderStroke,
                  curves.topLeftBorderStroke,
                );
            }
          },
          createStrokePathFromCurves = function (outer1, outer2) {
            var path = [];
            return (
              isBezierCurve(outer1)
                ? path.push(outer1.subdivide(0.5, !1))
                : path.push(outer1),
              isBezierCurve(outer2)
                ? path.push(outer2.subdivide(0.5, !0))
                : path.push(outer2),
              path
            );
          },
          createPathFromCurves = function (outer1, inner1, outer2, inner2) {
            var path = [];
            return (
              isBezierCurve(outer1)
                ? path.push(outer1.subdivide(0.5, !1))
                : path.push(outer1),
              isBezierCurve(outer2)
                ? path.push(outer2.subdivide(0.5, !0))
                : path.push(outer2),
              isBezierCurve(inner2)
                ? path.push(inner2.subdivide(0.5, !0).reverse())
                : path.push(inner2),
              isBezierCurve(inner1)
                ? path.push(inner1.subdivide(0.5, !1).reverse())
                : path.push(inner1),
              path
            );
          },
          paddingBox = function (element) {
            var bounds = element.bounds,
              styles = element.styles;
            return bounds.add(
              styles.borderLeftWidth,
              styles.borderTopWidth,
              -(styles.borderRightWidth + styles.borderLeftWidth),
              -(styles.borderTopWidth + styles.borderBottomWidth),
            );
          },
          contentBox = function (element) {
            var styles = element.styles,
              bounds = element.bounds,
              paddingLeft = getAbsoluteValue(styles.paddingLeft, bounds.width),
              paddingRight = getAbsoluteValue(
                styles.paddingRight,
                bounds.width,
              ),
              paddingTop = getAbsoluteValue(styles.paddingTop, bounds.width),
              paddingBottom = getAbsoluteValue(
                styles.paddingBottom,
                bounds.width,
              );
            return bounds.add(
              paddingLeft + styles.borderLeftWidth,
              paddingTop + styles.borderTopWidth,
              -(
                styles.borderRightWidth +
                styles.borderLeftWidth +
                paddingLeft +
                paddingRight
              ),
              -(
                styles.borderTopWidth +
                styles.borderBottomWidth +
                paddingTop +
                paddingBottom
              ),
            );
          },
          calculateBackgroundRendering = function (
            container,
            index,
            intrinsicSize,
          ) {
            var backgroundOrigin,
              backgroundClip,
              backgroundPositioningArea =
                0 ===
                (backgroundOrigin = getBackgroundValueForIndex(
                  container.styles.backgroundOrigin,
                  index,
                ))
                  ? container.bounds
                  : 2 === backgroundOrigin
                    ? contentBox(container)
                    : paddingBox(container),
              backgroundPaintingArea =
                0 ===
                (backgroundClip = getBackgroundValueForIndex(
                  container.styles.backgroundClip,
                  index,
                ))
                  ? container.bounds
                  : 2 === backgroundClip
                    ? contentBox(container)
                    : paddingBox(container),
              backgroundImageSize = calculateBackgroundSize(
                getBackgroundValueForIndex(
                  container.styles.backgroundSize,
                  index,
                ),
                intrinsicSize,
                backgroundPositioningArea,
              ),
              sizeWidth = backgroundImageSize[0],
              sizeHeight = backgroundImageSize[1],
              position = getAbsoluteValueForTuple(
                getBackgroundValueForIndex(
                  container.styles.backgroundPosition,
                  index,
                ),
                backgroundPositioningArea.width - sizeWidth,
                backgroundPositioningArea.height - sizeHeight,
              );
            return [
              calculateBackgroundRepeatPath(
                getBackgroundValueForIndex(
                  container.styles.backgroundRepeat,
                  index,
                ),
                position,
                backgroundImageSize,
                backgroundPositioningArea,
                backgroundPaintingArea,
              ),
              Math.round(backgroundPositioningArea.left + position[0]),
              Math.round(backgroundPositioningArea.top + position[1]),
              sizeWidth,
              sizeHeight,
            ];
          },
          isAuto = function (token) {
            return isIdentToken(token) && token.value === BACKGROUND_SIZE1.AUTO;
          },
          hasIntrinsicValue = function (value) {
            return 'number' == typeof value;
          },
          calculateBackgroundSize = function (size, _a, bounds) {
            var intrinsicWidth = _a[0],
              intrinsicHeight = _a[1],
              intrinsicProportion = _a[2],
              first = size[0],
              second = size[1];
            if (!first) return [0, 0];
            if (
              isLengthPercentage(first) &&
              second &&
              isLengthPercentage(second)
            )
              return [
                getAbsoluteValue(first, bounds.width),
                getAbsoluteValue(second, bounds.height),
              ];
            var hasIntrinsicProportion = hasIntrinsicValue(intrinsicProportion);
            if (
              isIdentToken(first) &&
              (first.value === BACKGROUND_SIZE1.CONTAIN ||
                first.value === BACKGROUND_SIZE1.COVER)
            )
              return hasIntrinsicValue(intrinsicProportion)
                ? bounds.width / bounds.height < intrinsicProportion !=
                  (first.value === BACKGROUND_SIZE1.COVER)
                  ? [bounds.width, bounds.width / intrinsicProportion]
                  : [bounds.height * intrinsicProportion, bounds.height]
                : [bounds.width, bounds.height];
            var hasIntrinsicWidth = hasIntrinsicValue(intrinsicWidth),
              hasIntrinsicHeight = hasIntrinsicValue(intrinsicHeight),
              hasIntrinsicDimensions = hasIntrinsicWidth || hasIntrinsicHeight;
            if (isAuto(first) && (!second || isAuto(second)))
              return hasIntrinsicWidth && hasIntrinsicHeight
                ? [intrinsicWidth, intrinsicHeight]
                : hasIntrinsicProportion || hasIntrinsicDimensions
                  ? hasIntrinsicDimensions && hasIntrinsicProportion
                    ? [
                        hasIntrinsicWidth
                          ? intrinsicWidth
                          : intrinsicHeight * intrinsicProportion,
                        hasIntrinsicHeight
                          ? intrinsicHeight
                          : intrinsicWidth / intrinsicProportion,
                      ]
                    : [
                        hasIntrinsicWidth ? intrinsicWidth : bounds.width,
                        hasIntrinsicHeight ? intrinsicHeight : bounds.height,
                      ]
                  : [bounds.width, bounds.height];
            if (hasIntrinsicProportion) {
              var width_3 = 0,
                height_3 = 0;
              return (
                isLengthPercentage(first)
                  ? (width_3 = getAbsoluteValue(first, bounds.width))
                  : isLengthPercentage(second) &&
                    (height_3 = getAbsoluteValue(second, bounds.height)),
                isAuto(first)
                  ? (width_3 = height_3 * intrinsicProportion)
                  : (!second || isAuto(second)) &&
                    (height_3 = width_3 / intrinsicProportion),
                [width_3, height_3]
              );
            }
            var width = null,
              height = null;
            if (
              (isLengthPercentage(first)
                ? (width = getAbsoluteValue(first, bounds.width))
                : second &&
                  isLengthPercentage(second) &&
                  (height = getAbsoluteValue(second, bounds.height)),
              null !== width &&
                (!second || isAuto(second)) &&
                (height =
                  hasIntrinsicWidth && hasIntrinsicHeight
                    ? (width / intrinsicWidth) * intrinsicHeight
                    : bounds.height),
              null !== height &&
                isAuto(first) &&
                (width =
                  hasIntrinsicWidth && hasIntrinsicHeight
                    ? (height / intrinsicHeight) * intrinsicWidth
                    : bounds.width),
              null !== width && null !== height)
            )
              return [width, height];
            throw Error('Unable to calculate background-size for element');
          },
          getBackgroundValueForIndex = function (values, index) {
            var value = values[index];
            return void 0 === value ? values[0] : value;
          },
          calculateBackgroundRepeatPath = function (
            repeat,
            _a,
            _b,
            backgroundPositioningArea,
            backgroundPaintingArea,
          ) {
            var x = _a[0],
              y = _a[1],
              width = _b[0],
              height = _b[1];
            switch (repeat) {
              case 2:
                return [
                  new Vector(
                    Math.round(backgroundPositioningArea.left),
                    Math.round(backgroundPositioningArea.top + y),
                  ),
                  new Vector(
                    Math.round(
                      backgroundPositioningArea.left +
                        backgroundPositioningArea.width,
                    ),
                    Math.round(backgroundPositioningArea.top + y),
                  ),
                  new Vector(
                    Math.round(
                      backgroundPositioningArea.left +
                        backgroundPositioningArea.width,
                    ),
                    Math.round(height + backgroundPositioningArea.top + y),
                  ),
                  new Vector(
                    Math.round(backgroundPositioningArea.left),
                    Math.round(height + backgroundPositioningArea.top + y),
                  ),
                ];
              case 3:
                return [
                  new Vector(
                    Math.round(backgroundPositioningArea.left + x),
                    Math.round(backgroundPositioningArea.top),
                  ),
                  new Vector(
                    Math.round(backgroundPositioningArea.left + x + width),
                    Math.round(backgroundPositioningArea.top),
                  ),
                  new Vector(
                    Math.round(backgroundPositioningArea.left + x + width),
                    Math.round(
                      backgroundPositioningArea.height +
                        backgroundPositioningArea.top,
                    ),
                  ),
                  new Vector(
                    Math.round(backgroundPositioningArea.left + x),
                    Math.round(
                      backgroundPositioningArea.height +
                        backgroundPositioningArea.top,
                    ),
                  ),
                ];
              case 1:
                return [
                  new Vector(
                    Math.round(backgroundPositioningArea.left + x),
                    Math.round(backgroundPositioningArea.top + y),
                  ),
                  new Vector(
                    Math.round(backgroundPositioningArea.left + x + width),
                    Math.round(backgroundPositioningArea.top + y),
                  ),
                  new Vector(
                    Math.round(backgroundPositioningArea.left + x + width),
                    Math.round(backgroundPositioningArea.top + y + height),
                  ),
                  new Vector(
                    Math.round(backgroundPositioningArea.left + x),
                    Math.round(backgroundPositioningArea.top + y + height),
                  ),
                ];
              default:
                return [
                  new Vector(
                    Math.round(backgroundPaintingArea.left),
                    Math.round(backgroundPaintingArea.top),
                  ),
                  new Vector(
                    Math.round(
                      backgroundPaintingArea.left +
                        backgroundPaintingArea.width,
                    ),
                    Math.round(backgroundPaintingArea.top),
                  ),
                  new Vector(
                    Math.round(
                      backgroundPaintingArea.left +
                        backgroundPaintingArea.width,
                    ),
                    Math.round(
                      backgroundPaintingArea.height +
                        backgroundPaintingArea.top,
                    ),
                  ),
                  new Vector(
                    Math.round(backgroundPaintingArea.left),
                    Math.round(
                      backgroundPaintingArea.height +
                        backgroundPaintingArea.top,
                    ),
                  ),
                ];
            }
          },
          SAMPLE_TEXT = 'Hidden Text',
          FontMetrics = (function () {
            function FontMetrics(document1) {
              (this._data = {}), (this._document = document1);
            }
            return (
              (FontMetrics.prototype.parseMetrics = function (
                fontFamily,
                fontSize,
              ) {
                var container = this._document.createElement('div'),
                  img = this._document.createElement('img'),
                  span = this._document.createElement('span'),
                  body = this._document.body;
                (container.style.visibility = 'hidden'),
                  (container.style.fontFamily = fontFamily),
                  (container.style.fontSize = fontSize),
                  (container.style.margin = '0'),
                  (container.style.padding = '0'),
                  (container.style.whiteSpace = 'nowrap'),
                  body.appendChild(container),
                  (img.src =
                    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'),
                  (img.width = 1),
                  (img.height = 1),
                  (img.style.margin = '0'),
                  (img.style.padding = '0'),
                  (img.style.verticalAlign = 'baseline'),
                  (span.style.fontFamily = fontFamily),
                  (span.style.fontSize = fontSize),
                  (span.style.margin = '0'),
                  (span.style.padding = '0'),
                  span.appendChild(this._document.createTextNode(SAMPLE_TEXT)),
                  container.appendChild(span),
                  container.appendChild(img);
                var baseline = img.offsetTop - span.offsetTop + 2;
                container.removeChild(span),
                  container.appendChild(
                    this._document.createTextNode(SAMPLE_TEXT),
                  ),
                  (container.style.lineHeight = 'normal'),
                  (img.style.verticalAlign = 'super');
                var middle = img.offsetTop - container.offsetTop + 2;
                return (
                  body.removeChild(container),
                  { baseline: baseline, middle: middle }
                );
              }),
              (FontMetrics.prototype.getMetrics = function (
                fontFamily,
                fontSize,
              ) {
                var key = fontFamily + ' ' + fontSize;
                return (
                  void 0 === this._data[key] &&
                    (this._data[key] = this.parseMetrics(fontFamily, fontSize)),
                  this._data[key]
                );
              }),
              FontMetrics
            );
          })(),
          Renderer = function Renderer(context, options) {
            (this.context = context), (this.options = options);
          },
          CanvasRenderer = (function (_super) {
            function CanvasRenderer(context, options) {
              var _this = _super.call(this, context, options) || this;
              return (
                (_this._activeEffects = []),
                (_this.canvas = options.canvas
                  ? options.canvas
                  : document.createElement('canvas')),
                (_this.ctx = _this.canvas.getContext('2d')),
                options.canvas ||
                  ((_this.canvas.width = Math.floor(
                    options.width * options.scale,
                  )),
                  (_this.canvas.height = Math.floor(
                    options.height * options.scale,
                  )),
                  (_this.canvas.style.width = options.width + 'px'),
                  (_this.canvas.style.height = options.height + 'px')),
                (_this.fontMetrics = new FontMetrics(document)),
                _this.ctx.scale(_this.options.scale, _this.options.scale),
                _this.ctx.translate(-options.x, -options.y),
                (_this.ctx.textBaseline = 'bottom'),
                (_this._activeEffects = []),
                _this.context.logger.debug(
                  'Canvas renderer initialized (' +
                    options.width +
                    'x' +
                    options.height +
                    ') with scale ' +
                    options.scale,
                ),
                _this
              );
            }
            return (
              __extends(CanvasRenderer, _super),
              (CanvasRenderer.prototype.applyEffects = function (effects) {
                for (var _this = this; this._activeEffects.length; )
                  this.popEffect();
                effects.forEach(function (effect) {
                  return _this.applyEffect(effect);
                });
              }),
              (CanvasRenderer.prototype.applyEffect = function (effect) {
                this.ctx.save(),
                  2 === effect.type && (this.ctx.globalAlpha = effect.opacity),
                  0 === effect.type &&
                    (this.ctx.translate(effect.offsetX, effect.offsetY),
                    this.ctx.transform(
                      effect.matrix[0],
                      effect.matrix[1],
                      effect.matrix[2],
                      effect.matrix[3],
                      effect.matrix[4],
                      effect.matrix[5],
                    ),
                    this.ctx.translate(-effect.offsetX, -effect.offsetY)),
                  isClipEffect(effect) &&
                    (this.path(effect.path), this.ctx.clip()),
                  this._activeEffects.push(effect);
              }),
              (CanvasRenderer.prototype.popEffect = function () {
                this._activeEffects.pop(), this.ctx.restore();
              }),
              (CanvasRenderer.prototype.renderStack = function (stack) {
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        if (!stack.element.container.styles.isVisible())
                          return [3, 2];
                        return [4, this.renderStackContent(stack)];
                      case 1:
                        _a.sent(), (_a.label = 2);
                      case 2:
                        return [2];
                    }
                  });
                });
              }),
              (CanvasRenderer.prototype.renderNode = function (paint) {
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        if (
                          (contains(paint.container.flags, 16),
                          !paint.container.styles.isVisible())
                        )
                          return [3, 3];
                        return [4, this.renderNodeBackgroundAndBorders(paint)];
                      case 1:
                        return _a.sent(), [4, this.renderNodeContent(paint)];
                      case 2:
                        _a.sent(), (_a.label = 3);
                      case 3:
                        return [2];
                    }
                  });
                });
              }),
              (CanvasRenderer.prototype.renderTextWithLetterSpacing = function (
                text,
                letterSpacing,
                baseline,
              ) {
                var _this = this;
                0 === letterSpacing
                  ? this.ctx.fillText(
                      text.text,
                      text.bounds.left,
                      text.bounds.top + baseline,
                    )
                  : segmentGraphemes(text.text).reduce(function (left, letter) {
                      return (
                        _this.ctx.fillText(
                          letter,
                          left,
                          text.bounds.top + baseline,
                        ),
                        left + _this.ctx.measureText(letter).width
                      );
                    }, text.bounds.left);
              }),
              (CanvasRenderer.prototype.createFontStyle = function (styles) {
                var fontVariant = styles.fontVariant
                    .filter(function (variant) {
                      return 'normal' === variant || 'small-caps' === variant;
                    })
                    .join(''),
                  fontFamily = fixIOSSystemFonts(styles.fontFamily).join(', '),
                  fontSize = isDimensionToken(styles.fontSize)
                    ? '' + styles.fontSize.number + styles.fontSize.unit
                    : styles.fontSize.number + 'px';
                return [
                  [
                    styles.fontStyle,
                    fontVariant,
                    styles.fontWeight,
                    fontSize,
                    fontFamily,
                  ].join(' '),
                  fontFamily,
                  fontSize,
                ];
              }),
              (CanvasRenderer.prototype.renderTextNode = function (
                text,
                styles,
              ) {
                return __awaiter(this, void 0, void 0, function () {
                  var _a,
                    font,
                    fontFamily,
                    fontSize,
                    _b,
                    baseline,
                    middle,
                    paintOrder,
                    _this = this;
                  return __generator(this, function (_c) {
                    return (
                      (font = (_a = this.createFontStyle(styles))[0]),
                      (fontFamily = _a[1]),
                      (fontSize = _a[2]),
                      (this.ctx.font = font),
                      (this.ctx.direction =
                        1 === styles.direction ? 'rtl' : 'ltr'),
                      (this.ctx.textAlign = 'left'),
                      (this.ctx.textBaseline = 'alphabetic'),
                      (baseline = (_b = this.fontMetrics.getMetrics(
                        fontFamily,
                        fontSize,
                      )).baseline),
                      (middle = _b.middle),
                      (paintOrder = styles.paintOrder),
                      text.textBounds.forEach(function (text) {
                        paintOrder.forEach(function (paintOrderLayer) {
                          switch (paintOrderLayer) {
                            case 0:
                              (_this.ctx.fillStyle = asString(styles.color)),
                                _this.renderTextWithLetterSpacing(
                                  text,
                                  styles.letterSpacing,
                                  baseline,
                                );
                              var textShadows = styles.textShadow;
                              textShadows.length &&
                                text.text.trim().length &&
                                (textShadows
                                  .slice(0)
                                  .reverse()
                                  .forEach(function (textShadow) {
                                    (_this.ctx.shadowColor = asString(
                                      textShadow.color,
                                    )),
                                      (_this.ctx.shadowOffsetX =
                                        textShadow.offsetX.number *
                                        _this.options.scale),
                                      (_this.ctx.shadowOffsetY =
                                        textShadow.offsetY.number *
                                        _this.options.scale),
                                      (_this.ctx.shadowBlur =
                                        textShadow.blur.number),
                                      _this.renderTextWithLetterSpacing(
                                        text,
                                        styles.letterSpacing,
                                        baseline,
                                      );
                                  }),
                                (_this.ctx.shadowColor = ''),
                                (_this.ctx.shadowOffsetX = 0),
                                (_this.ctx.shadowOffsetY = 0),
                                (_this.ctx.shadowBlur = 0)),
                                styles.textDecorationLine.length &&
                                  ((_this.ctx.fillStyle = asString(
                                    styles.textDecorationColor || styles.color,
                                  )),
                                  styles.textDecorationLine.forEach(
                                    function (textDecorationLine) {
                                      switch (textDecorationLine) {
                                        case 1:
                                          _this.ctx.fillRect(
                                            text.bounds.left,
                                            Math.round(
                                              text.bounds.top + baseline,
                                            ),
                                            text.bounds.width,
                                            1,
                                          );
                                          break;
                                        case 2:
                                          _this.ctx.fillRect(
                                            text.bounds.left,
                                            Math.round(text.bounds.top),
                                            text.bounds.width,
                                            1,
                                          );
                                          break;
                                        case 3:
                                          _this.ctx.fillRect(
                                            text.bounds.left,
                                            Math.ceil(text.bounds.top + middle),
                                            text.bounds.width,
                                            1,
                                          );
                                      }
                                    },
                                  ));
                              break;
                            case 1:
                              styles.webkitTextStrokeWidth &&
                                text.text.trim().length &&
                                ((_this.ctx.strokeStyle = asString(
                                  styles.webkitTextStrokeColor,
                                )),
                                (_this.ctx.lineWidth =
                                  styles.webkitTextStrokeWidth),
                                (_this.ctx.lineJoin = window.chrome
                                  ? 'miter'
                                  : 'round'),
                                _this.ctx.strokeText(
                                  text.text,
                                  text.bounds.left,
                                  text.bounds.top + baseline,
                                )),
                                (_this.ctx.strokeStyle = ''),
                                (_this.ctx.lineWidth = 0),
                                (_this.ctx.lineJoin = 'miter');
                          }
                        });
                      }),
                      [2]
                    );
                  });
                });
              }),
              (CanvasRenderer.prototype.renderReplacedElement = function (
                container,
                curves,
                image,
              ) {
                if (
                  image &&
                  container.intrinsicWidth > 0 &&
                  container.intrinsicHeight > 0
                ) {
                  var box = contentBox(container),
                    path = calculatePaddingBoxPath(curves);
                  this.path(path),
                    this.ctx.save(),
                    this.ctx.clip(),
                    this.ctx.drawImage(
                      image,
                      0,
                      0,
                      container.intrinsicWidth,
                      container.intrinsicHeight,
                      box.left,
                      box.top,
                      box.width,
                      box.height,
                    ),
                    this.ctx.restore();
                }
              }),
              (CanvasRenderer.prototype.renderNodeContent = function (paint) {
                return __awaiter(this, void 0, void 0, function () {
                  var container,
                    curves,
                    styles,
                    _i,
                    _a,
                    child,
                    image,
                    canvas,
                    size,
                    _b,
                    fontFamily,
                    fontSize,
                    baseline,
                    bounds,
                    x,
                    textBounds,
                    img,
                    url;
                  return __generator(this, function (_c) {
                    switch (_c.label) {
                      case 0:
                        this.applyEffects(paint.getEffects(4)),
                          (container = paint.container),
                          (curves = paint.curves),
                          (styles = container.styles),
                          (_i = 0),
                          (_a = container.textNodes),
                          (_c.label = 1);
                      case 1:
                        if (!(_i < _a.length)) return [3, 4];
                        return (
                          (child = _a[_i]),
                          [4, this.renderTextNode(child, styles)]
                        );
                      case 2:
                        _c.sent(), (_c.label = 3);
                      case 3:
                        return _i++, [3, 1];
                      case 4:
                        if (!(container instanceof ImageElementContainer))
                          return [3, 8];
                        _c.label = 5;
                      case 5:
                        return (
                          _c.trys.push([5, 7, , 8]),
                          [4, this.context.cache.match(container.src)]
                        );
                      case 6:
                        return (
                          (image = _c.sent()),
                          this.renderReplacedElement(container, curves, image),
                          [3, 8]
                        );
                      case 7:
                        return (
                          _c.sent(),
                          this.context.logger.error(
                            'Error loading image ' + container.src,
                          ),
                          [3, 8]
                        );
                      case 8:
                        if (
                          (container instanceof CanvasElementContainer &&
                            this.renderReplacedElement(
                              container,
                              curves,
                              container.canvas,
                            ),
                          !(container instanceof SVGElementContainer))
                        )
                          return [3, 12];
                        _c.label = 9;
                      case 9:
                        return (
                          _c.trys.push([9, 11, , 12]),
                          [4, this.context.cache.match(container.svg)]
                        );
                      case 10:
                        return (
                          (image = _c.sent()),
                          this.renderReplacedElement(container, curves, image),
                          [3, 12]
                        );
                      case 11:
                        return (
                          _c.sent(),
                          this.context.logger.error(
                            'Error loading svg ' +
                              container.svg.substring(0, 255),
                          ),
                          [3, 12]
                        );
                      case 12:
                        if (
                          !(
                            container instanceof IFrameElementContainer &&
                            container.tree
                          )
                        )
                          return [3, 14];
                        return [
                          4,
                          new CanvasRenderer(this.context, {
                            scale: this.options.scale,
                            backgroundColor: container.backgroundColor,
                            x: 0,
                            y: 0,
                            width: container.width,
                            height: container.height,
                          }).render(container.tree),
                        ];
                      case 13:
                        (canvas = _c.sent()),
                          container.width &&
                            container.height &&
                            this.ctx.drawImage(
                              canvas,
                              0,
                              0,
                              container.width,
                              container.height,
                              container.bounds.left,
                              container.bounds.top,
                              container.bounds.width,
                              container.bounds.height,
                            ),
                          (_c.label = 14);
                      case 14:
                        if (
                          (container instanceof InputElementContainer &&
                            ((size = Math.min(
                              container.bounds.width,
                              container.bounds.height,
                            )),
                            container.type === CHECKBOX
                              ? container.checked &&
                                (this.ctx.save(),
                                this.path([
                                  new Vector(
                                    container.bounds.left + 0.39363 * size,
                                    container.bounds.top + 0.79 * size,
                                  ),
                                  new Vector(
                                    container.bounds.left + 0.16 * size,
                                    container.bounds.top + 0.5549 * size,
                                  ),
                                  new Vector(
                                    container.bounds.left + 0.27347 * size,
                                    container.bounds.top + 0.44071 * size,
                                  ),
                                  new Vector(
                                    container.bounds.left + 0.39694 * size,
                                    container.bounds.top + 0.5649 * size,
                                  ),
                                  new Vector(
                                    container.bounds.left + 0.72983 * size,
                                    container.bounds.top + 0.23 * size,
                                  ),
                                  new Vector(
                                    container.bounds.left + 0.84 * size,
                                    container.bounds.top + 0.34085 * size,
                                  ),
                                  new Vector(
                                    container.bounds.left + 0.39363 * size,
                                    container.bounds.top + 0.79 * size,
                                  ),
                                ]),
                                (this.ctx.fillStyle = asString(707406591)),
                                this.ctx.fill(),
                                this.ctx.restore())
                              : container.type === RADIO &&
                                container.checked &&
                                (this.ctx.save(),
                                this.ctx.beginPath(),
                                this.ctx.arc(
                                  container.bounds.left + size / 2,
                                  container.bounds.top + size / 2,
                                  size / 4,
                                  0,
                                  2 * Math.PI,
                                  !0,
                                ),
                                (this.ctx.fillStyle = asString(707406591)),
                                this.ctx.fill(),
                                this.ctx.restore())),
                          isTextInputElement(container) &&
                            container.value.length)
                        ) {
                          switch (
                            ((fontFamily = (_b =
                              this.createFontStyle(styles))[0]),
                            (fontSize = _b[1]),
                            (baseline = this.fontMetrics.getMetrics(
                              fontFamily,
                              fontSize,
                            ).baseline),
                            (this.ctx.font = fontFamily),
                            (this.ctx.fillStyle = asString(styles.color)),
                            (this.ctx.textBaseline = 'alphabetic'),
                            (this.ctx.textAlign = canvasTextAlign(
                              container.styles.textAlign,
                            )),
                            (bounds = contentBox(container)),
                            (x = 0),
                            container.styles.textAlign)
                          ) {
                            case 1:
                              x += bounds.width / 2;
                              break;
                            case 2:
                              x += bounds.width;
                          }
                          (textBounds = bounds.add(
                            x,
                            0,
                            0,
                            -bounds.height / 2 + 1,
                          )),
                            this.ctx.save(),
                            this.path([
                              new Vector(bounds.left, bounds.top),
                              new Vector(
                                bounds.left + bounds.width,
                                bounds.top,
                              ),
                              new Vector(
                                bounds.left + bounds.width,
                                bounds.top + bounds.height,
                              ),
                              new Vector(
                                bounds.left,
                                bounds.top + bounds.height,
                              ),
                            ]),
                            this.ctx.clip(),
                            this.renderTextWithLetterSpacing(
                              new TextBounds(container.value, textBounds),
                              styles.letterSpacing,
                              baseline,
                            ),
                            this.ctx.restore(),
                            (this.ctx.textBaseline = 'alphabetic'),
                            (this.ctx.textAlign = 'left');
                        }
                        if (!contains(container.styles.display, 2048))
                          return [3, 20];
                        if (!(null !== container.styles.listStyleImage))
                          return [3, 19];
                        if (0 !== (img = container.styles.listStyleImage).type)
                          return [3, 18];
                        (image = void 0), (url = img.url), (_c.label = 15);
                      case 15:
                        return (
                          _c.trys.push([15, 17, , 18]),
                          [4, this.context.cache.match(url)]
                        );
                      case 16:
                        return (
                          (image = _c.sent()),
                          this.ctx.drawImage(
                            image,
                            container.bounds.left - (image.width + 10),
                            container.bounds.top,
                          ),
                          [3, 18]
                        );
                      case 17:
                        return (
                          _c.sent(),
                          this.context.logger.error(
                            'Error loading list-style-image ' + url,
                          ),
                          [3, 18]
                        );
                      case 18:
                        return [3, 20];
                      case 19:
                        paint.listValue &&
                          -1 !== container.styles.listStyleType &&
                          ((fontFamily = this.createFontStyle(styles)[0]),
                          (this.ctx.font = fontFamily),
                          (this.ctx.fillStyle = asString(styles.color)),
                          (this.ctx.textBaseline = 'middle'),
                          (this.ctx.textAlign = 'right'),
                          (bounds = new Bounds(
                            container.bounds.left,
                            container.bounds.top +
                              getAbsoluteValue(
                                container.styles.paddingTop,
                                container.bounds.width,
                              ),
                            container.bounds.width,
                            computeLineHeight(
                              styles.lineHeight,
                              styles.fontSize.number,
                            ) /
                              2 +
                              1,
                          )),
                          this.renderTextWithLetterSpacing(
                            new TextBounds(paint.listValue, bounds),
                            styles.letterSpacing,
                            computeLineHeight(
                              styles.lineHeight,
                              styles.fontSize.number,
                            ) /
                              2 +
                              2,
                          ),
                          (this.ctx.textBaseline = 'bottom'),
                          (this.ctx.textAlign = 'left')),
                          (_c.label = 20);
                      case 20:
                        return [2];
                    }
                  });
                });
              }),
              (CanvasRenderer.prototype.renderStackContent = function (stack) {
                return __awaiter(this, void 0, void 0, function () {
                  var _i,
                    _a,
                    child,
                    _b,
                    _c,
                    _d,
                    _e,
                    _f,
                    _g,
                    _h,
                    _j,
                    _k,
                    _l,
                    _m,
                    _o;
                  return __generator(this, function (_p) {
                    switch (_p.label) {
                      case 0:
                        return (
                          contains(stack.element.container.flags, 16),
                          [
                            4,
                            this.renderNodeBackgroundAndBorders(stack.element),
                          ]
                        );
                      case 1:
                        _p.sent(),
                          (_i = 0),
                          (_a = stack.negativeZIndex),
                          (_p.label = 2);
                      case 2:
                        if (!(_i < _a.length)) return [3, 5];
                        return (child = _a[_i]), [4, this.renderStack(child)];
                      case 3:
                        _p.sent(), (_p.label = 4);
                      case 4:
                        return _i++, [3, 2];
                      case 5:
                        return [4, this.renderNodeContent(stack.element)];
                      case 6:
                        _p.sent(),
                          (_b = 0),
                          (_c = stack.nonInlineLevel),
                          (_p.label = 7);
                      case 7:
                        if (!(_b < _c.length)) return [3, 10];
                        return (child = _c[_b]), [4, this.renderNode(child)];
                      case 8:
                        _p.sent(), (_p.label = 9);
                      case 9:
                        return _b++, [3, 7];
                      case 10:
                        (_d = 0),
                          (_e = stack.nonPositionedFloats),
                          (_p.label = 11);
                      case 11:
                        if (!(_d < _e.length)) return [3, 14];
                        return (child = _e[_d]), [4, this.renderStack(child)];
                      case 12:
                        _p.sent(), (_p.label = 13);
                      case 13:
                        return _d++, [3, 11];
                      case 14:
                        (_f = 0),
                          (_g = stack.nonPositionedInlineLevel),
                          (_p.label = 15);
                      case 15:
                        if (!(_f < _g.length)) return [3, 18];
                        return (child = _g[_f]), [4, this.renderStack(child)];
                      case 16:
                        _p.sent(), (_p.label = 17);
                      case 17:
                        return _f++, [3, 15];
                      case 18:
                        (_h = 0), (_j = stack.inlineLevel), (_p.label = 19);
                      case 19:
                        if (!(_h < _j.length)) return [3, 22];
                        return (child = _j[_h]), [4, this.renderNode(child)];
                      case 20:
                        _p.sent(), (_p.label = 21);
                      case 21:
                        return _h++, [3, 19];
                      case 22:
                        (_k = 0),
                          (_l = stack.zeroOrAutoZIndexOrTransformedOrOpacity),
                          (_p.label = 23);
                      case 23:
                        if (!(_k < _l.length)) return [3, 26];
                        return (child = _l[_k]), [4, this.renderStack(child)];
                      case 24:
                        _p.sent(), (_p.label = 25);
                      case 25:
                        return _k++, [3, 23];
                      case 26:
                        (_m = 0), (_o = stack.positiveZIndex), (_p.label = 27);
                      case 27:
                        if (!(_m < _o.length)) return [3, 30];
                        return (child = _o[_m]), [4, this.renderStack(child)];
                      case 28:
                        _p.sent(), (_p.label = 29);
                      case 29:
                        return _m++, [3, 27];
                      case 30:
                        return [2];
                    }
                  });
                });
              }),
              (CanvasRenderer.prototype.mask = function (paths) {
                this.ctx.beginPath(),
                  this.ctx.moveTo(0, 0),
                  this.ctx.lineTo(this.canvas.width, 0),
                  this.ctx.lineTo(this.canvas.width, this.canvas.height),
                  this.ctx.lineTo(0, this.canvas.height),
                  this.ctx.lineTo(0, 0),
                  this.formatPath(paths.slice(0).reverse()),
                  this.ctx.closePath();
              }),
              (CanvasRenderer.prototype.path = function (paths) {
                this.ctx.beginPath(),
                  this.formatPath(paths),
                  this.ctx.closePath();
              }),
              (CanvasRenderer.prototype.formatPath = function (paths) {
                var _this = this;
                paths.forEach(function (point, index) {
                  var start = isBezierCurve(point) ? point.start : point;
                  0 === index
                    ? _this.ctx.moveTo(start.x, start.y)
                    : _this.ctx.lineTo(start.x, start.y),
                    isBezierCurve(point) &&
                      _this.ctx.bezierCurveTo(
                        point.startControl.x,
                        point.startControl.y,
                        point.endControl.x,
                        point.endControl.y,
                        point.end.x,
                        point.end.y,
                      );
                });
              }),
              (CanvasRenderer.prototype.renderRepeat = function (
                path,
                pattern,
                offsetX,
                offsetY,
              ) {
                this.path(path),
                  (this.ctx.fillStyle = pattern),
                  this.ctx.translate(offsetX, offsetY),
                  this.ctx.fill(),
                  this.ctx.translate(-offsetX, -offsetY);
              }),
              (CanvasRenderer.prototype.resizeImage = function (
                image,
                width,
                height,
              ) {
                if (image.width === width && image.height === height)
                  return image;
                var _a,
                  canvas = (
                    null !== (_a = this.canvas.ownerDocument) && void 0 !== _a
                      ? _a
                      : document
                  ).createElement('canvas');
                return (
                  (canvas.width = Math.max(1, width)),
                  (canvas.height = Math.max(1, height)),
                  canvas
                    .getContext('2d')
                    .drawImage(
                      image,
                      0,
                      0,
                      image.width,
                      image.height,
                      0,
                      0,
                      width,
                      height,
                    ),
                  canvas
                );
              }),
              (CanvasRenderer.prototype.renderBackgroundImage = function (
                container,
              ) {
                return __awaiter(this, void 0, void 0, function () {
                  var index, _loop_1, this_1, _i, _a, backgroundImage;
                  return __generator(this, function (_b) {
                    switch (_b.label) {
                      case 0:
                        (index = container.styles.backgroundImage.length - 1),
                          (_loop_1 = function (backgroundImage) {
                            var image,
                              url,
                              _c,
                              path,
                              x,
                              y,
                              width,
                              height,
                              pattern,
                              _d,
                              _e,
                              lineLength,
                              x0,
                              x1,
                              y0,
                              y1,
                              canvas,
                              ctx,
                              gradient_1,
                              _f,
                              left,
                              top_1,
                              position,
                              _g,
                              rx,
                              ry,
                              radialGradient_1,
                              midX,
                              midY,
                              f,
                              invF;
                            return __generator(this, function (_h) {
                              switch (_h.label) {
                                case 0:
                                  if (0 !== backgroundImage.type) return [3, 5];
                                  (image = void 0),
                                    (url = backgroundImage.url),
                                    (_h.label = 1);
                                case 1:
                                  return (
                                    _h.trys.push([1, 3, , 4]),
                                    [4, this_1.context.cache.match(url)]
                                  );
                                case 2:
                                  return (image = _h.sent()), [3, 4];
                                case 3:
                                  return (
                                    _h.sent(),
                                    this_1.context.logger.error(
                                      'Error loading background-image ' + url,
                                    ),
                                    [3, 4]
                                  );
                                case 4:
                                  return (
                                    image &&
                                      ((path = (_c =
                                        calculateBackgroundRendering(
                                          container,
                                          index,
                                          [
                                            image.width,
                                            image.height,
                                            image.width / image.height,
                                          ],
                                        ))[0]),
                                      (x = _c[1]),
                                      (y = _c[2]),
                                      (width = _c[3]),
                                      (height = _c[4]),
                                      (pattern = this_1.ctx.createPattern(
                                        this_1.resizeImage(
                                          image,
                                          width,
                                          height,
                                        ),
                                        'repeat',
                                      )),
                                      this_1.renderRepeat(path, pattern, x, y)),
                                    [3, 6]
                                  );
                                case 5:
                                  1 === backgroundImage.type
                                    ? ((path = (_d =
                                        calculateBackgroundRendering(
                                          container,
                                          index,
                                          [null, null, null],
                                        ))[0]),
                                      (x = _d[1]),
                                      (y = _d[2]),
                                      (width = _d[3]),
                                      (height = _d[4]),
                                      (lineLength = (_e =
                                        calculateGradientDirection(
                                          backgroundImage.angle,
                                          width,
                                          height,
                                        ))[0]),
                                      (x0 = _e[1]),
                                      (x1 = _e[2]),
                                      (y0 = _e[3]),
                                      (y1 = _e[4]),
                                      ((canvas =
                                        document.createElement(
                                          'canvas',
                                        )).width = width),
                                      (canvas.height = height),
                                      (gradient_1 = (ctx =
                                        canvas.getContext(
                                          '2d',
                                        )).createLinearGradient(
                                        x0,
                                        y0,
                                        x1,
                                        y1,
                                      )),
                                      processColorStops(
                                        backgroundImage.stops,
                                        lineLength,
                                      ).forEach(function (colorStop) {
                                        return gradient_1.addColorStop(
                                          colorStop.stop,
                                          asString(colorStop.color),
                                        );
                                      }),
                                      (ctx.fillStyle = gradient_1),
                                      ctx.fillRect(0, 0, width, height),
                                      width > 0 &&
                                        height > 0 &&
                                        ((pattern = this_1.ctx.createPattern(
                                          canvas,
                                          'repeat',
                                        )),
                                        this_1.renderRepeat(
                                          path,
                                          pattern,
                                          x,
                                          y,
                                        )))
                                    : 2 === backgroundImage.type &&
                                      ((path = (_f =
                                        calculateBackgroundRendering(
                                          container,
                                          index,
                                          [null, null, null],
                                        ))[0]),
                                      (left = _f[1]),
                                      (top_1 = _f[2]),
                                      (width = _f[3]),
                                      (height = _f[4]),
                                      (x = getAbsoluteValue(
                                        (position =
                                          0 === backgroundImage.position.length
                                            ? [FIFTY_PERCENT]
                                            : backgroundImage.position)[0],
                                        width,
                                      )),
                                      (y = getAbsoluteValue(
                                        position[position.length - 1],
                                        height,
                                      )),
                                      (rx = (_g = calculateRadius(
                                        backgroundImage,
                                        x,
                                        y,
                                        width,
                                        height,
                                      ))[0]),
                                      (ry = _g[1]),
                                      rx > 0 &&
                                        ry > 0 &&
                                        ((radialGradient_1 =
                                          this_1.ctx.createRadialGradient(
                                            left + x,
                                            top_1 + y,
                                            0,
                                            left + x,
                                            top_1 + y,
                                            rx,
                                          )),
                                        processColorStops(
                                          backgroundImage.stops,
                                          2 * rx,
                                        ).forEach(function (colorStop) {
                                          return radialGradient_1.addColorStop(
                                            colorStop.stop,
                                            asString(colorStop.color),
                                          );
                                        }),
                                        this_1.path(path),
                                        (this_1.ctx.fillStyle =
                                          radialGradient_1),
                                        rx !== ry
                                          ? ((midX =
                                              container.bounds.left +
                                              0.5 * container.bounds.width),
                                            (midY =
                                              container.bounds.top +
                                              0.5 * container.bounds.height),
                                            (invF = 1 / (f = ry / rx)),
                                            this_1.ctx.save(),
                                            this_1.ctx.translate(midX, midY),
                                            this_1.ctx.transform(
                                              1,
                                              0,
                                              0,
                                              f,
                                              0,
                                              0,
                                            ),
                                            this_1.ctx.translate(-midX, -midY),
                                            this_1.ctx.fillRect(
                                              left,
                                              invF * (top_1 - midY) + midY,
                                              width,
                                              height * invF,
                                            ),
                                            this_1.ctx.restore())
                                          : this_1.ctx.fill())),
                                    (_h.label = 6);
                                case 6:
                                  return index--, [2];
                              }
                            });
                          }),
                          (this_1 = this),
                          (_i = 0),
                          (_a = container.styles.backgroundImage
                            .slice(0)
                            .reverse()),
                          (_b.label = 1);
                      case 1:
                        if (!(_i < _a.length)) return [3, 4];
                        return (
                          (backgroundImage = _a[_i]),
                          [5, _loop_1(backgroundImage)]
                        );
                      case 2:
                        _b.sent(), (_b.label = 3);
                      case 3:
                        return _i++, [3, 1];
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (CanvasRenderer.prototype.renderSolidBorder = function (
                color,
                side,
                curvePoints,
              ) {
                return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    return (
                      this.path(parsePathForBorder(curvePoints, side)),
                      (this.ctx.fillStyle = asString(color)),
                      this.ctx.fill(),
                      [2]
                    );
                  });
                });
              }),
              (CanvasRenderer.prototype.renderDoubleBorder = function (
                color,
                width,
                side,
                curvePoints,
              ) {
                return __awaiter(this, void 0, void 0, function () {
                  var outerPaths, innerPaths;
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        if (!(width < 3)) return [3, 2];
                        return [
                          4,
                          this.renderSolidBorder(color, side, curvePoints),
                        ];
                      case 1:
                        return _a.sent(), [2];
                      case 2:
                        return (
                          (outerPaths = parsePathForBorderDoubleOuter(
                            curvePoints,
                            side,
                          )),
                          this.path(outerPaths),
                          (this.ctx.fillStyle = asString(color)),
                          this.ctx.fill(),
                          (innerPaths = parsePathForBorderDoubleInner(
                            curvePoints,
                            side,
                          )),
                          this.path(innerPaths),
                          this.ctx.fill(),
                          [2]
                        );
                    }
                  });
                });
              }),
              (CanvasRenderer.prototype.renderNodeBackgroundAndBorders =
                function (paint) {
                  return __awaiter(this, void 0, void 0, function () {
                    var styles,
                      hasBackground,
                      borders,
                      backgroundPaintingArea,
                      side,
                      _i,
                      borders_1,
                      border,
                      _this = this;
                    return __generator(this, function (_a) {
                      switch (_a.label) {
                        case 0:
                          if (
                            (this.applyEffects(paint.getEffects(2)),
                            (hasBackground =
                              !isTransparent(
                                (styles = paint.container.styles)
                                  .backgroundColor,
                              ) || styles.backgroundImage.length),
                            (borders = [
                              {
                                style: styles.borderTopStyle,
                                color: styles.borderTopColor,
                                width: styles.borderTopWidth,
                              },
                              {
                                style: styles.borderRightStyle,
                                color: styles.borderRightColor,
                                width: styles.borderRightWidth,
                              },
                              {
                                style: styles.borderBottomStyle,
                                color: styles.borderBottomColor,
                                width: styles.borderBottomWidth,
                              },
                              {
                                style: styles.borderLeftStyle,
                                color: styles.borderLeftColor,
                                width: styles.borderLeftWidth,
                              },
                            ]),
                            (backgroundPaintingArea =
                              calculateBackgroundCurvedPaintingArea(
                                getBackgroundValueForIndex(
                                  styles.backgroundClip,
                                  0,
                                ),
                                paint.curves,
                              )),
                            !(hasBackground || styles.boxShadow.length))
                          )
                            return [3, 2];
                          return (
                            this.ctx.save(),
                            this.path(backgroundPaintingArea),
                            this.ctx.clip(),
                            isTransparent(styles.backgroundColor) ||
                              ((this.ctx.fillStyle = asString(
                                styles.backgroundColor,
                              )),
                              this.ctx.fill()),
                            [4, this.renderBackgroundImage(paint.container)]
                          );
                        case 1:
                          _a.sent(),
                            this.ctx.restore(),
                            styles.boxShadow
                              .slice(0)
                              .reverse()
                              .forEach(function (shadow) {
                                _this.ctx.save();
                                var deltaX,
                                  deltaY,
                                  deltaW,
                                  deltaH,
                                  borderBoxArea = calculateBorderBoxPath(
                                    paint.curves,
                                  ),
                                  maskOffset = shadow.inset ? 0 : 1e4,
                                  shadowPaintingArea =
                                    ((deltaX =
                                      -maskOffset +
                                      (shadow.inset ? 1 : -1) *
                                        shadow.spread.number),
                                    (deltaY =
                                      (shadow.inset ? 1 : -1) *
                                      shadow.spread.number),
                                    (deltaW =
                                      shadow.spread.number *
                                      (shadow.inset ? -2 : 2)),
                                    (deltaH =
                                      shadow.spread.number *
                                      (shadow.inset ? -2 : 2)),
                                    borderBoxArea.map(function (point, index) {
                                      switch (index) {
                                        case 0:
                                          return point.add(deltaX, deltaY);
                                        case 1:
                                          return point.add(
                                            deltaX + deltaW,
                                            deltaY,
                                          );
                                        case 2:
                                          return point.add(
                                            deltaX + deltaW,
                                            deltaY + deltaH,
                                          );
                                        case 3:
                                          return point.add(
                                            deltaX,
                                            deltaY + deltaH,
                                          );
                                      }
                                      return point;
                                    }));
                                shadow.inset
                                  ? (_this.path(borderBoxArea),
                                    _this.ctx.clip(),
                                    _this.mask(shadowPaintingArea))
                                  : (_this.mask(borderBoxArea),
                                    _this.ctx.clip(),
                                    _this.path(shadowPaintingArea)),
                                  (_this.ctx.shadowOffsetX =
                                    shadow.offsetX.number + maskOffset),
                                  (_this.ctx.shadowOffsetY =
                                    shadow.offsetY.number),
                                  (_this.ctx.shadowColor = asString(
                                    shadow.color,
                                  )),
                                  (_this.ctx.shadowBlur = shadow.blur.number),
                                  (_this.ctx.fillStyle = shadow.inset
                                    ? asString(shadow.color)
                                    : 'rgba(0,0,0,1)'),
                                  _this.ctx.fill(),
                                  _this.ctx.restore();
                              }),
                            (_a.label = 2);
                        case 2:
                          (side = 0),
                            (_i = 0),
                            (borders_1 = borders),
                            (_a.label = 3);
                        case 3:
                          if (!(_i < borders_1.length)) return [3, 13];
                          if (
                            !(
                              0 !== (border = borders_1[_i]).style &&
                              !isTransparent(border.color) &&
                              border.width > 0
                            )
                          )
                            return [3, 11];
                          if (2 !== border.style) return [3, 5];
                          return [
                            4,
                            this.renderDashedDottedBorder(
                              border.color,
                              border.width,
                              side,
                              paint.curves,
                              2,
                            ),
                          ];
                        case 4:
                        case 6:
                        case 8:
                          return _a.sent(), [3, 11];
                        case 5:
                          if (3 !== border.style) return [3, 7];
                          return [
                            4,
                            this.renderDashedDottedBorder(
                              border.color,
                              border.width,
                              side,
                              paint.curves,
                              3,
                            ),
                          ];
                        case 7:
                          if (4 !== border.style) return [3, 9];
                          return [
                            4,
                            this.renderDoubleBorder(
                              border.color,
                              border.width,
                              side,
                              paint.curves,
                            ),
                          ];
                        case 9:
                          return [
                            4,
                            this.renderSolidBorder(
                              border.color,
                              side,
                              paint.curves,
                            ),
                          ];
                        case 10:
                          _a.sent(), (_a.label = 11);
                        case 11:
                          side++, (_a.label = 12);
                        case 12:
                          return _i++, [3, 3];
                        case 13:
                          return [2];
                      }
                    });
                  });
                }),
              (CanvasRenderer.prototype.renderDashedDottedBorder = function (
                color,
                width,
                side,
                curvePoints,
                style,
              ) {
                return __awaiter(this, void 0, void 0, function () {
                  var strokePaths,
                    boxPaths,
                    startX,
                    startY,
                    endX,
                    endY,
                    length,
                    dashLength,
                    spaceLength,
                    useLineDash,
                    multiplier,
                    numberOfDashes,
                    minSpace,
                    maxSpace,
                    path1,
                    path2;
                  return __generator(this, function (_a) {
                    return (
                      this.ctx.save(),
                      (strokePaths = parsePathForBorderStroke(
                        curvePoints,
                        side,
                      )),
                      (boxPaths = parsePathForBorder(curvePoints, side)),
                      2 === style && (this.path(boxPaths), this.ctx.clip()),
                      isBezierCurve(boxPaths[0])
                        ? ((startX = boxPaths[0].start.x),
                          (startY = boxPaths[0].start.y))
                        : ((startX = boxPaths[0].x), (startY = boxPaths[0].y)),
                      isBezierCurve(boxPaths[1])
                        ? ((endX = boxPaths[1].end.x),
                          (endY = boxPaths[1].end.y))
                        : ((endX = boxPaths[1].x), (endY = boxPaths[1].y)),
                      (length =
                        0 === side || 2 === side
                          ? Math.abs(startX - endX)
                          : Math.abs(startY - endY)),
                      this.ctx.beginPath(),
                      3 === style
                        ? this.formatPath(strokePaths)
                        : this.formatPath(boxPaths.slice(0, 2)),
                      (dashLength = width < 3 ? 3 * width : 2 * width),
                      (spaceLength = width < 3 ? 2 * width : width),
                      3 === style &&
                        ((dashLength = width), (spaceLength = width)),
                      (useLineDash = !0),
                      length <= 2 * dashLength
                        ? (useLineDash = !1)
                        : length <= 2 * dashLength + spaceLength
                          ? ((multiplier =
                              length / (2 * dashLength + spaceLength)),
                            (dashLength *= multiplier),
                            (spaceLength *= multiplier))
                          : ((numberOfDashes = Math.floor(
                              (length + spaceLength) /
                                (dashLength + spaceLength),
                            )),
                            (minSpace =
                              (length - numberOfDashes * dashLength) /
                              (numberOfDashes - 1)),
                            (spaceLength =
                              (maxSpace =
                                (length - (numberOfDashes + 1) * dashLength) /
                                numberOfDashes) <= 0 ||
                              Math.abs(spaceLength - minSpace) <
                                Math.abs(spaceLength - maxSpace)
                                ? minSpace
                                : maxSpace)),
                      useLineDash &&
                        (3 === style
                          ? this.ctx.setLineDash([0, dashLength + spaceLength])
                          : this.ctx.setLineDash([dashLength, spaceLength])),
                      3 === style
                        ? ((this.ctx.lineCap = 'round'),
                          (this.ctx.lineWidth = width))
                        : (this.ctx.lineWidth = 2 * width + 1.1),
                      (this.ctx.strokeStyle = asString(color)),
                      this.ctx.stroke(),
                      this.ctx.setLineDash([]),
                      2 === style &&
                        (isBezierCurve(boxPaths[0]) &&
                          ((path1 = boxPaths[3]),
                          (path2 = boxPaths[0]),
                          this.ctx.beginPath(),
                          this.formatPath([
                            new Vector(path1.end.x, path1.end.y),
                            new Vector(path2.start.x, path2.start.y),
                          ]),
                          this.ctx.stroke()),
                        isBezierCurve(boxPaths[1]) &&
                          ((path1 = boxPaths[1]),
                          (path2 = boxPaths[2]),
                          this.ctx.beginPath(),
                          this.formatPath([
                            new Vector(path1.end.x, path1.end.y),
                            new Vector(path2.start.x, path2.start.y),
                          ]),
                          this.ctx.stroke())),
                      this.ctx.restore(),
                      [2]
                    );
                  });
                });
              }),
              (CanvasRenderer.prototype.render = function (element) {
                return __awaiter(this, void 0, void 0, function () {
                  var stack;
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return (
                          this.options.backgroundColor &&
                            ((this.ctx.fillStyle = asString(
                              this.options.backgroundColor,
                            )),
                            this.ctx.fillRect(
                              this.options.x,
                              this.options.y,
                              this.options.width,
                              this.options.height,
                            )),
                          (stack = parseStackingContexts(element)),
                          [4, this.renderStack(stack)]
                        );
                      case 1:
                        return (
                          _a.sent(), this.applyEffects([]), [2, this.canvas]
                        );
                    }
                  });
                });
              }),
              CanvasRenderer
            );
          })(Renderer),
          isTextInputElement = function (container) {
            return (
              container instanceof TextareaElementContainer ||
              container instanceof SelectElementContainer ||
              (container instanceof InputElementContainer &&
                container.type !== RADIO &&
                container.type !== CHECKBOX)
            );
          },
          calculateBackgroundCurvedPaintingArea = function (clip, curves) {
            switch (clip) {
              case 0:
                return calculateBorderBoxPath(curves);
              case 2:
                return [
                  curves.topLeftContentBox,
                  curves.topRightContentBox,
                  curves.bottomRightContentBox,
                  curves.bottomLeftContentBox,
                ];
              default:
                return calculatePaddingBoxPath(curves);
            }
          },
          canvasTextAlign = function (textAlign) {
            switch (textAlign) {
              case 1:
                return 'center';
              case 2:
                return 'right';
              default:
                return 'left';
            }
          },
          iOSBrokenFonts = ['-apple-system', 'system-ui'],
          fixIOSSystemFonts = function (fontFamilies) {
            return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent)
              ? fontFamilies.filter(function (fontFamily) {
                  return -1 === iOSBrokenFonts.indexOf(fontFamily);
                })
              : fontFamilies;
          },
          ForeignObjectRenderer = (function (_super) {
            function ForeignObjectRenderer(context, options) {
              var _this = _super.call(this, context, options) || this;
              return (
                (_this.canvas = options.canvas
                  ? options.canvas
                  : document.createElement('canvas')),
                (_this.ctx = _this.canvas.getContext('2d')),
                (_this.options = options),
                (_this.canvas.width = Math.floor(
                  options.width * options.scale,
                )),
                (_this.canvas.height = Math.floor(
                  options.height * options.scale,
                )),
                (_this.canvas.style.width = options.width + 'px'),
                (_this.canvas.style.height = options.height + 'px'),
                _this.ctx.scale(_this.options.scale, _this.options.scale),
                _this.ctx.translate(-options.x, -options.y),
                _this.context.logger.debug(
                  'EXPERIMENTAL ForeignObject renderer initialized (' +
                    options.width +
                    'x' +
                    options.height +
                    ' at ' +
                    options.x +
                    ',' +
                    options.y +
                    ') with scale ' +
                    options.scale,
                ),
                _this
              );
            }
            return (
              __extends(ForeignObjectRenderer, _super),
              (ForeignObjectRenderer.prototype.render = function (element) {
                return __awaiter(this, void 0, void 0, function () {
                  var img;
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [
                          4,
                          loadSerializedSVG(
                            createForeignObjectSVG(
                              this.options.width * this.options.scale,
                              this.options.height * this.options.scale,
                              this.options.scale,
                              this.options.scale,
                              element,
                            ),
                          ),
                        ];
                      case 1:
                        return (
                          (img = _a.sent()),
                          this.options.backgroundColor &&
                            ((this.ctx.fillStyle = asString(
                              this.options.backgroundColor,
                            )),
                            this.ctx.fillRect(
                              0,
                              0,
                              this.options.width * this.options.scale,
                              this.options.height * this.options.scale,
                            )),
                          this.ctx.drawImage(
                            img,
                            -this.options.x * this.options.scale,
                            -this.options.y * this.options.scale,
                          ),
                          [2, this.canvas]
                        );
                    }
                  });
                });
              }),
              ForeignObjectRenderer
            );
          })(Renderer),
          loadSerializedSVG = function (svg) {
            return new Promise(function (resolve, reject) {
              var img = new Image();
              (img.onload = function () {
                resolve(img);
              }),
                (img.onerror = reject),
                (img.src =
                  'data:image/svg+xml;charset=utf-8,' +
                  encodeURIComponent(
                    new XMLSerializer().serializeToString(svg),
                  ));
            });
          },
          Logger = (function () {
            function Logger(_a) {
              var id = _a.id,
                enabled = _a.enabled;
              (this.id = id),
                (this.enabled = enabled),
                (this.start = Date.now());
            }
            return (
              (Logger.prototype.debug = function () {
                for (var args = [], _i = 0; _i < arguments.length; _i++)
                  args[_i] = arguments[_i];
                this.enabled &&
                  ('undefined' != typeof window &&
                  window.console &&
                  'function' == typeof console.debug
                    ? console.debug.apply(
                        console,
                        __spreadArray([this.id, this.getTime() + 'ms'], args),
                      )
                    : this.info.apply(this, args));
              }),
              (Logger.prototype.getTime = function () {
                return Date.now() - this.start;
              }),
              (Logger.prototype.info = function () {
                for (var args = [], _i = 0; _i < arguments.length; _i++)
                  args[_i] = arguments[_i];
                this.enabled &&
                  'undefined' != typeof window &&
                  window.console &&
                  'function' == typeof console.info &&
                  console.info.apply(
                    console,
                    __spreadArray([this.id, this.getTime() + 'ms'], args),
                  );
              }),
              (Logger.prototype.warn = function () {
                for (var args = [], _i = 0; _i < arguments.length; _i++)
                  args[_i] = arguments[_i];
                this.enabled &&
                  ('undefined' != typeof window &&
                  window.console &&
                  'function' == typeof console.warn
                    ? console.warn.apply(
                        console,
                        __spreadArray([this.id, this.getTime() + 'ms'], args),
                      )
                    : this.info.apply(this, args));
              }),
              (Logger.prototype.error = function () {
                for (var args = [], _i = 0; _i < arguments.length; _i++)
                  args[_i] = arguments[_i];
                this.enabled &&
                  ('undefined' != typeof window &&
                  window.console &&
                  'function' == typeof console.error
                    ? console.error.apply(
                        console,
                        __spreadArray([this.id, this.getTime() + 'ms'], args),
                      )
                    : this.info.apply(this, args));
              }),
              (Logger.instances = {}),
              Logger
            );
          })(),
          Context = (function () {
            function Context(options, windowBounds) {
              var _a;
              (this.windowBounds = windowBounds),
                (this.instanceName = '#' + Context.instanceCount++),
                (this.logger = new Logger({
                  id: this.instanceName,
                  enabled: options.logging,
                })),
                (this.cache =
                  null !== (_a = options.cache) && void 0 !== _a
                    ? _a
                    : new Cache(this, options));
            }
            return (Context.instanceCount = 1), Context;
          })();
        'undefined' != typeof window && CacheStorage.setContext(window);
        var parseBackgroundColor = function (
          context,
          element,
          backgroundColorOverride,
        ) {
          var ownerDocument = element.ownerDocument,
            documentBackgroundColor = ownerDocument.documentElement
              ? parseColor(
                  context,
                  getComputedStyle(ownerDocument.documentElement)
                    .backgroundColor,
                )
              : COLORS.TRANSPARENT,
            bodyBackgroundColor = ownerDocument.body
              ? parseColor(
                  context,
                  getComputedStyle(ownerDocument.body).backgroundColor,
                )
              : COLORS.TRANSPARENT,
            defaultBackgroundColor =
              'string' == typeof backgroundColorOverride
                ? parseColor(context, backgroundColorOverride)
                : null === backgroundColorOverride
                  ? COLORS.TRANSPARENT
                  : 4294967295;
          return element === ownerDocument.documentElement
            ? isTransparent(documentBackgroundColor)
              ? isTransparent(bodyBackgroundColor)
                ? defaultBackgroundColor
                : bodyBackgroundColor
              : documentBackgroundColor
            : defaultBackgroundColor;
        };
        return function (element, options) {
          var opts;
          return (
            void 0 === options && (options = {}),
            (opts = options),
            __awaiter(void 0, void 0, void 0, function () {
              var ownerDocument,
                defaultView,
                resourceOptions,
                windowOptions,
                windowBounds,
                context,
                foreignObjectRendering,
                cloneOptions,
                documentCloner,
                clonedElement,
                container,
                _a,
                width,
                height,
                left,
                top,
                backgroundColor,
                renderOptions,
                canvas,
                root,
                _b,
                _c,
                _d,
                _e,
                _f,
                _g,
                _h,
                _j,
                _k,
                _l,
                _m,
                _o,
                _p,
                _q,
                _r,
                _s,
                _t;
              return __generator(this, function (_u) {
                switch (_u.label) {
                  case 0:
                    if (!element || 'object' != typeof element)
                      return [
                        2,
                        Promise.reject(
                          'Invalid element provided as first argument',
                        ),
                      ];
                    if (!(ownerDocument = element.ownerDocument))
                      throw Error('Element is not attached to a Document');
                    if (!(defaultView = ownerDocument.defaultView))
                      throw Error('Document is not attached to a Window');
                    if (
                      ((resourceOptions = {
                        allowTaint:
                          null !== (_b = opts.allowTaint) &&
                          void 0 !== _b &&
                          _b,
                        imageTimeout:
                          null !== (_c = opts.imageTimeout) && void 0 !== _c
                            ? _c
                            : 15e3,
                        proxy: opts.proxy,
                        useCORS:
                          null !== (_d = opts.useCORS) && void 0 !== _d && _d,
                      }),
                      (context = new Context(
                        __assign(
                          {
                            logging:
                              null === (_e = opts.logging) ||
                              void 0 === _e ||
                              _e,
                            cache: opts.cache,
                          },
                          resourceOptions,
                        ),
                        (windowBounds = new Bounds(
                          (windowOptions = {
                            windowWidth:
                              null !== (_f = opts.windowWidth) && void 0 !== _f
                                ? _f
                                : defaultView.innerWidth,
                            windowHeight:
                              null !== (_g = opts.windowHeight) && void 0 !== _g
                                ? _g
                                : defaultView.innerHeight,
                            scrollX:
                              null !== (_h = opts.scrollX) && void 0 !== _h
                                ? _h
                                : defaultView.pageXOffset,
                            scrollY:
                              null !== (_j = opts.scrollY) && void 0 !== _j
                                ? _j
                                : defaultView.pageYOffset,
                          }).scrollX,
                          windowOptions.scrollY,
                          windowOptions.windowWidth,
                          windowOptions.windowHeight,
                        )),
                      )),
                      (foreignObjectRendering =
                        null !== (_k = opts.foreignObjectRendering) &&
                        void 0 !== _k &&
                        _k),
                      (cloneOptions = {
                        allowTaint:
                          null !== (_l = opts.allowTaint) &&
                          void 0 !== _l &&
                          _l,
                        onclone: opts.onclone,
                        ignoreElements: opts.ignoreElements,
                        inlineImages: foreignObjectRendering,
                        copyStyles: foreignObjectRendering,
                      }),
                      context.logger.debug(
                        'Starting document clone with size ' +
                          windowBounds.width +
                          'x' +
                          windowBounds.height +
                          ' scrolled to ' +
                          -windowBounds.left +
                          ',' +
                          -windowBounds.top,
                      ),
                      !(clonedElement = (documentCloner = new DocumentCloner(
                        context,
                        element,
                        cloneOptions,
                      )).clonedReferenceElement))
                    )
                      return [
                        2,
                        Promise.reject(
                          'Unable to find element in cloned iframe',
                        ),
                      ];
                    return [
                      4,
                      documentCloner.toIFrame(ownerDocument, windowBounds),
                    ];
                  case 1:
                    if (
                      ((container = _u.sent()),
                      (width = (_a =
                        isBodyElement(clonedElement) ||
                        'HTML' === clonedElement.tagName
                          ? parseDocumentSize(clonedElement.ownerDocument)
                          : parseBounds(context, clonedElement)).width),
                      (height = _a.height),
                      (left = _a.left),
                      (top = _a.top),
                      (backgroundColor = parseBackgroundColor(
                        context,
                        clonedElement,
                        opts.backgroundColor,
                      )),
                      (renderOptions = {
                        canvas: opts.canvas,
                        backgroundColor: backgroundColor,
                        scale:
                          null !==
                            (_o =
                              null !== (_m = opts.scale) && void 0 !== _m
                                ? _m
                                : defaultView.devicePixelRatio) && void 0 !== _o
                            ? _o
                            : 1,
                        x:
                          (null !== (_p = opts.x) && void 0 !== _p ? _p : 0) +
                          left,
                        y:
                          (null !== (_q = opts.y) && void 0 !== _q ? _q : 0) +
                          top,
                        width:
                          null !== (_r = opts.width) && void 0 !== _r
                            ? _r
                            : Math.ceil(width),
                        height:
                          null !== (_s = opts.height) && void 0 !== _s
                            ? _s
                            : Math.ceil(height),
                      }),
                      !foreignObjectRendering)
                    )
                      return [3, 3];
                    return (
                      context.logger.debug(
                        'Document cloned, using foreign object rendering',
                      ),
                      [
                        4,
                        new ForeignObjectRenderer(
                          context,
                          renderOptions,
                        ).render(clonedElement),
                      ]
                    );
                  case 2:
                    return (canvas = _u.sent()), [3, 5];
                  case 3:
                    return (
                      context.logger.debug(
                        'Document cloned, element located at ' +
                          left +
                          ',' +
                          top +
                          ' with size ' +
                          width +
                          'x' +
                          height +
                          ' using computed rendering',
                      ),
                      context.logger.debug('Starting DOM parsing'),
                      (root = parseTree(context, clonedElement)),
                      backgroundColor === root.styles.backgroundColor &&
                        (root.styles.backgroundColor = COLORS.TRANSPARENT),
                      context.logger.debug(
                        'Starting renderer for element at ' +
                          renderOptions.x +
                          ',' +
                          renderOptions.y +
                          ' with size ' +
                          renderOptions.width +
                          'x' +
                          renderOptions.height,
                      ),
                      [
                        4,
                        new CanvasRenderer(context, renderOptions).render(root),
                      ]
                    );
                  case 4:
                    (canvas = _u.sent()), (_u.label = 5);
                  case 5:
                    return (
                      (null === (_t = opts.removeContainer) ||
                        void 0 === _t ||
                        _t) &&
                        !DocumentCloner.destroy(container) &&
                        context.logger.error(
                          'Cannot detach cloned iframe as it is not in the DOM anymore',
                        ),
                      context.logger.debug('Finished rendering'),
                      [2, canvas]
                    );
                }
              });
            })
          );
        };
      }),
        (module.exports = factory());
    },
    './node_modules/react-csv/index.js': (
      module,
      __unused_webpack_exports,
      __webpack_require__,
    ) => {
      module.exports = __webpack_require__(
        './node_modules/react-csv/lib/index.js',
      );
    },
    './node_modules/react-csv/lib/components/Download.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) => {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 });
      var _createClass = (function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              (descriptor.enumerable = descriptor.enumerable || !1),
                (descriptor.configurable = !0),
                'value' in descriptor && (descriptor.writable = !0),
                Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function (Constructor, protoProps, staticProps) {
            return (
              protoProps && defineProperties(Constructor.prototype, protoProps),
              staticProps && defineProperties(Constructor, staticProps),
              Constructor
            );
          };
        })(),
        _react2 = _interopRequireDefault(
          __webpack_require__('./node_modules/react/index.js'),
        ),
        _core = __webpack_require__('./node_modules/react-csv/lib/core.js'),
        _metaProps = __webpack_require__(
          './node_modules/react-csv/lib/metaProps.js',
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw TypeError('Cannot call a class as a function');
      }
      function _possibleConstructorReturn(self1, call) {
        if (!self1)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return call && ('object' == typeof call || 'function' == typeof call)
          ? call
          : self1;
      }
      function _inherits(subClass, superClass) {
        if ('function' != typeof superClass && null !== superClass)
          throw TypeError(
            'Super expression must either be null or a function, not ' +
              typeof superClass,
          );
        (subClass.prototype = Object.create(
          superClass && superClass.prototype,
          {
            constructor: {
              value: subClass,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          },
        )),
          superClass &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass));
      }
      var CSVDownload = (function (_React$Component) {
        function CSVDownload(props) {
          _classCallCheck(this, CSVDownload);
          var _this = _possibleConstructorReturn(
            this,
            (CSVDownload.__proto__ || Object.getPrototypeOf(CSVDownload)).call(
              this,
              props,
            ),
          );
          return (_this.state = {}), _this;
        }
        return (
          _inherits(CSVDownload, _React$Component),
          _createClass(CSVDownload, [
            {
              key: 'buildURI',
              value: function buildURI() {
                return _core.buildURI.apply(void 0, arguments);
              },
            },
            {
              key: 'componentDidMount',
              value: function componentDidMount() {
                var _props = this.props,
                  data = _props.data,
                  headers = _props.headers,
                  separator = _props.separator,
                  enclosingCharacter = _props.enclosingCharacter,
                  uFEFF = _props.uFEFF,
                  target = _props.target,
                  specs = _props.specs,
                  replace = _props.replace;
                this.state.page = window.open(
                  this.buildURI(
                    data,
                    uFEFF,
                    headers,
                    separator,
                    enclosingCharacter,
                  ),
                  target,
                  specs,
                  replace,
                );
              },
            },
            {
              key: 'getWindow',
              value: function getWindow() {
                return this.state.page;
              },
            },
            {
              key: 'render',
              value: function render() {
                return null;
              },
            },
          ]),
          CSVDownload
        );
      })(_react2.default.Component);
      (CSVDownload.defaultProps = Object.assign(_metaProps.defaultProps, {
        target: '_blank',
      })),
        (CSVDownload.propTypes = _metaProps.propTypes),
        (exports.default = CSVDownload);
    },
    './node_modules/react-csv/lib/components/Link.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) => {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 });
      var _extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          },
        _createClass = (function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              (descriptor.enumerable = descriptor.enumerable || !1),
                (descriptor.configurable = !0),
                'value' in descriptor && (descriptor.writable = !0),
                Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function (Constructor, protoProps, staticProps) {
            return (
              protoProps && defineProperties(Constructor.prototype, protoProps),
              staticProps && defineProperties(Constructor, staticProps),
              Constructor
            );
          };
        })(),
        _react2 = _interopRequireDefault(
          __webpack_require__('./node_modules/react/index.js'),
        ),
        _core = __webpack_require__('./node_modules/react-csv/lib/core.js'),
        _metaProps = __webpack_require__(
          './node_modules/react-csv/lib/metaProps.js',
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj)
          !(keys.indexOf(i) >= 0) &&
            Object.prototype.hasOwnProperty.call(obj, i) &&
            (target[i] = obj[i]);
        return target;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw TypeError('Cannot call a class as a function');
      }
      function _possibleConstructorReturn(self1, call) {
        if (!self1)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return call && ('object' == typeof call || 'function' == typeof call)
          ? call
          : self1;
      }
      function _inherits(subClass, superClass) {
        if ('function' != typeof superClass && null !== superClass)
          throw TypeError(
            'Super expression must either be null or a function, not ' +
              typeof superClass,
          );
        (subClass.prototype = Object.create(
          superClass && superClass.prototype,
          {
            constructor: {
              value: subClass,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          },
        )),
          superClass &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass));
      }
      var CSVLink = (function (_React$Component) {
        function CSVLink(props) {
          _classCallCheck(this, CSVLink);
          var _this = _possibleConstructorReturn(
            this,
            (CSVLink.__proto__ || Object.getPrototypeOf(CSVLink)).call(
              this,
              props,
            ),
          );
          return (_this.buildURI = _this.buildURI.bind(_this)), _this;
        }
        return (
          _inherits(CSVLink, _React$Component),
          _createClass(CSVLink, [
            {
              key: 'buildURI',
              value: function buildURI() {
                return _core.buildURI.apply(void 0, arguments);
              },
            },
            {
              key: 'handleLegacy',
              value: function handleLegacy(event) {
                var isAsync =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                if (window.navigator.msSaveOrOpenBlob) {
                  event.preventDefault();
                  var _props = this.props,
                    data = _props.data,
                    headers = _props.headers,
                    separator = _props.separator,
                    filename = _props.filename,
                    enclosingCharacter = _props.enclosingCharacter,
                    uFEFF = _props.uFEFF,
                    csvData =
                      isAsync && 'function' == typeof data ? data() : data,
                    blob = new Blob([
                      uFEFF ? '\uFEFF' : '',
                      (0, _core.toCSV)(
                        csvData,
                        headers,
                        separator,
                        enclosingCharacter,
                      ),
                    ]);
                  return window.navigator.msSaveBlob(blob, filename), !1;
                }
              },
            },
            {
              key: 'handleAsyncClick',
              value: function handleAsyncClick(event) {
                var _this2 = this;
                this.props.onClick(event, function done(proceed) {
                  if (!1 === proceed) {
                    event.preventDefault();
                    return;
                  }
                  _this2.handleLegacy(event, !0);
                });
              },
            },
            {
              key: 'handleSyncClick',
              value: function handleSyncClick(event) {
                if (!1 === this.props.onClick(event)) {
                  event.preventDefault();
                  return;
                }
                this.handleLegacy(event);
              },
            },
            {
              key: 'handleClick',
              value: function handleClick() {
                var _this3 = this;
                return function (event) {
                  if ('function' == typeof _this3.props.onClick)
                    return _this3.props.asyncOnClick
                      ? _this3.handleAsyncClick(event)
                      : _this3.handleSyncClick(event);
                  _this3.handleLegacy(event);
                };
              },
            },
            {
              key: 'render',
              value: function render() {
                var _this4 = this,
                  _props2 = this.props,
                  data = _props2.data,
                  headers = _props2.headers,
                  separator = _props2.separator,
                  filename = _props2.filename,
                  uFEFF = _props2.uFEFF,
                  children = _props2.children,
                  enclosingCharacter =
                    (_props2.onClick,
                    _props2.asyncOnClick,
                    _props2.enclosingCharacter),
                  rest = _objectWithoutProperties(_props2, [
                    'data',
                    'headers',
                    'separator',
                    'filename',
                    'uFEFF',
                    'children',
                    'onClick',
                    'asyncOnClick',
                    'enclosingCharacter',
                  ]),
                  href =
                    'undefined' == typeof window
                      ? ''
                      : this.buildURI(
                          data,
                          uFEFF,
                          headers,
                          separator,
                          enclosingCharacter,
                        );
                return _react2.default.createElement(
                  'a',
                  _extends({ download: filename }, rest, {
                    ref: function ref(link) {
                      return (_this4.link = link);
                    },
                    target: '_self',
                    href: href,
                    onClick: this.handleClick(),
                  }),
                  children,
                );
              },
            },
          ]),
          CSVLink
        );
      })(_react2.default.Component);
      (CSVLink.defaultProps = _metaProps.defaultProps),
        (CSVLink.propTypes = _metaProps.propTypes),
        (exports.default = CSVLink);
    },
    './node_modules/react-csv/lib/core.js': (
      __unused_webpack_module,
      exports,
    ) => {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 });
      var _typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj;
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj;
            };
      function _toConsumableArray(arr) {
        if (!Array.isArray(arr)) return Array.from(arr);
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      var isSafari = (exports.isSafari = function isSafari() {
          return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        }),
        isJsons = (exports.isJsons = function isJsons(array) {
          return (
            Array.isArray(array) &&
            array.every(function (row) {
              return (
                (void 0 === row ? 'undefined' : _typeof(row)) === 'object' &&
                !(row instanceof Array)
              );
            })
          );
        }),
        isArrays = (exports.isArrays = function isArrays(array) {
          return (
            Array.isArray(array) &&
            array.every(function (row) {
              return Array.isArray(row);
            })
          );
        }),
        jsonsHeaders = (exports.jsonsHeaders = function jsonsHeaders(array) {
          return Array.from(
            array
              .map(function (json) {
                return Object.keys(json);
              })
              .reduce(function (a, b) {
                return new Set(
                  [].concat(_toConsumableArray(a), _toConsumableArray(b)),
                );
              }, []),
          );
        }),
        jsons2arrays = (exports.jsons2arrays = function jsons2arrays(
          jsons,
          headers,
        ) {
          var headerLabels = (headers = headers || jsonsHeaders(jsons)),
            headerKeys = headers;
          return (
            isJsons(headers) &&
              ((headerLabels = headers.map(function (header) {
                return header.label;
              })),
              (headerKeys = headers.map(function (header) {
                return header.key;
              }))),
            [headerLabels].concat(
              _toConsumableArray(
                jsons.map(function (object) {
                  return headerKeys.map(function (header) {
                    return getHeaderValue(header, object);
                  });
                }),
              ),
            )
          );
        }),
        getHeaderValue = (exports.getHeaderValue = function getHeaderValue(
          property,
          obj,
        ) {
          var foundValue = property
            .replace(/\[([^\]]+)]/g, '.$1')
            .split('.')
            .reduce(function (o, p, i, arr) {
              var value = o[p];
              if (null != value) return value;
              arr.splice(1);
            }, obj);
          return void 0 === foundValue
            ? property in obj
              ? obj[property]
              : ''
            : foundValue;
        }),
        elementOrEmpty = (exports.elementOrEmpty = function elementOrEmpty(
          element,
        ) {
          return null == element ? '' : element;
        }),
        joiner = (exports.joiner = function joiner(data) {
          var separator =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : ',',
            enclosingCharacter =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : '"';
          return data
            .filter(function (e) {
              return e;
            })
            .map(function (row) {
              return row
                .map(function (element) {
                  return elementOrEmpty(element);
                })
                .map(function (column) {
                  return '' + enclosingCharacter + column + enclosingCharacter;
                })
                .join(separator);
            })
            .join('\n');
        }),
        arrays2csv = (exports.arrays2csv = function arrays2csv(
          data,
          headers,
          separator,
          enclosingCharacter,
        ) {
          return joiner(
            headers ? [headers].concat(_toConsumableArray(data)) : data,
            separator,
            enclosingCharacter,
          );
        }),
        jsons2csv = (exports.jsons2csv = function jsons2csv(
          data,
          headers,
          separator,
          enclosingCharacter,
        ) {
          return joiner(
            jsons2arrays(data, headers),
            separator,
            enclosingCharacter,
          );
        }),
        string2csv = (exports.string2csv = function string2csv(
          data,
          headers,
          separator,
          enclosingCharacter,
        ) {
          return headers
            ? headers.join(separator) + '\n' + data
            : data.replace(/"/g, '""');
        }),
        toCSV = (exports.toCSV = function toCSV(
          data,
          headers,
          separator,
          enclosingCharacter,
        ) {
          if (isJsons(data))
            return jsons2csv(data, headers, separator, enclosingCharacter);
          if (isArrays(data))
            return arrays2csv(data, headers, separator, enclosingCharacter);
          if ('string' == typeof data)
            return string2csv(data, headers, separator);
          throw TypeError(
            'Data should be a "String", "Array of arrays" OR "Array of objects" ',
          );
        });
      exports.buildURI = function buildURI(
        data,
        uFEFF,
        headers,
        separator,
        enclosingCharacter,
      ) {
        var csv = toCSV(data, headers, separator, enclosingCharacter),
          type = isSafari() ? 'application/csv' : 'text/csv',
          blob = new Blob([uFEFF ? '\uFEFF' : '', csv], { type: type }),
          dataURI =
            'data:' + type + ';charset=utf-8,' + (uFEFF ? '\uFEFF' : '') + csv,
          URL = window.URL || window.webkitURL;
        return void 0 === URL.createObjectURL
          ? dataURI
          : URL.createObjectURL(blob);
      };
    },
    './node_modules/react-csv/lib/index.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) => {
      'use strict';
      exports.CSVLink = void 0;
      var _Download2 = _interopRequireDefault(
          __webpack_require__(
            './node_modules/react-csv/lib/components/Download.js',
          ),
        ),
        _Link2 = _interopRequireDefault(
          __webpack_require__(
            './node_modules/react-csv/lib/components/Link.js',
          ),
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      _Download2.default, (exports.CSVLink = _Link2.default);
    },
    './node_modules/react-csv/lib/metaProps.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) => {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.PropsNotForwarded =
          exports.defaultProps =
          exports.propTypes =
            void 0),
        _interopRequireDefault(
          __webpack_require__('./node_modules/react/index.js'),
        );
      var _propTypes = __webpack_require__(
        './node_modules/prop-types/index.js',
      );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      (exports.propTypes = {
        data: (0, _propTypes.oneOfType)([
          _propTypes.string,
          _propTypes.array,
          _propTypes.func,
        ]).isRequired,
        headers: _propTypes.array,
        target: _propTypes.string,
        separator: _propTypes.string,
        filename: _propTypes.string,
        uFEFF: _propTypes.bool,
        onClick: _propTypes.func,
        asyncOnClick: _propTypes.bool,
        enclosingCharacter: _propTypes.string,
      }),
        (exports.defaultProps = {
          separator: ',',
          filename: 'generatedBy_react-csv.csv',
          uFEFF: !0,
          asyncOnClick: !1,
          enclosingCharacter: '"',
        }),
        (exports.PropsNotForwarded = ['data', 'headers']);
    },
    './node_modules/react-daum-postcode/lib/DaumPostcodeEmbed.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) => {
      'use strict';
      function _typeof(a) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (a) {
                return typeof a;
              }
            : function (a) {
                return a &&
                  'function' == typeof Symbol &&
                  a.constructor === Symbol &&
                  a !== Symbol.prototype
                  ? 'symbol'
                  : typeof a;
              })(a);
      }
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _react = _interopRequireWildcard(
          __webpack_require__('./node_modules/react/index.js'),
        ),
        _loadPostcode = _interopRequireWildcard(
          __webpack_require__(
            './node_modules/react-daum-postcode/lib/loadPostcode.js',
          ),
        ),
        _excluded = [
          'scriptUrl',
          'className',
          'style',
          'defaultQuery',
          'autoClose',
          'errorMessage',
          'onComplete',
          'onClose',
          'onResize',
          'onSearch',
        ];
      function _getRequireWildcardCache(a) {
        if ('function' != typeof WeakMap) return null;
        var b = new WeakMap(),
          c = new WeakMap();
        return (_getRequireWildcardCache = function (a) {
          return a ? c : b;
        })(a);
      }
      function _interopRequireWildcard(a, b) {
        if (!b && a && a.__esModule) return a;
        if (null === a || ('object' !== _typeof(a) && 'function' != typeof a))
          return { default: a };
        var c = _getRequireWildcardCache(b);
        if (c && c.has(a)) return c.get(a);
        var d = {},
          e = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var f in a)
          if ('default' != f && Object.prototype.hasOwnProperty.call(a, f)) {
            var g = e ? Object.getOwnPropertyDescriptor(a, f) : null;
            g && (g.get || g.set)
              ? Object.defineProperty(d, f, g)
              : (d[f] = a[f]);
          }
        return (d.default = a), c && c.set(a, d), d;
      }
      function ownKeys(a, b) {
        var c = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(a);
          b &&
            (d = d.filter(function (b) {
              return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })),
            c.push.apply(c, d);
        }
        return c;
      }
      function _objectSpread(a) {
        for (var b, c = 1; c < arguments.length; c++)
          (b = null == arguments[c] ? {} : arguments[c]),
            c % 2
              ? ownKeys(Object(b), !0).forEach(function (c) {
                  _defineProperty(a, c, b[c]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    a,
                    Object.getOwnPropertyDescriptors(b),
                  )
                : ownKeys(Object(b)).forEach(function (c) {
                    Object.defineProperty(
                      a,
                      c,
                      Object.getOwnPropertyDescriptor(b, c),
                    );
                  });
        return a;
      }
      function _objectWithoutProperties(a, b) {
        if (null == a) return {};
        var c,
          d,
          e = _objectWithoutPropertiesLoose(a, b);
        if (Object.getOwnPropertySymbols) {
          var f = Object.getOwnPropertySymbols(a);
          for (d = 0; d < f.length; d++)
            (c = f[d]),
              0 <= b.indexOf(c) ||
                (Object.prototype.propertyIsEnumerable.call(a, c) &&
                  (e[c] = a[c]));
        }
        return e;
      }
      function _objectWithoutPropertiesLoose(a, b) {
        if (null == a) return {};
        var c,
          d,
          e = {},
          f = Object.keys(a);
        for (d = 0; d < f.length; d++)
          (c = f[d]), 0 <= b.indexOf(c) || (e[c] = a[c]);
        return e;
      }
      function _classCallCheck(a, b) {
        if (!(a instanceof b))
          throw TypeError('Cannot call a class as a function');
      }
      function _defineProperties(a, b) {
        for (var c, d = 0; d < b.length; d++)
          ((c = b[d]).enumerable = c.enumerable || !1),
            (c.configurable = !0),
            'value' in c && (c.writable = !0),
            Object.defineProperty(a, c.key, c);
      }
      function _createClass(a, b, c) {
        return (
          b && _defineProperties(a.prototype, b),
          c && _defineProperties(a, c),
          a
        );
      }
      function _inherits(a, b) {
        if ('function' != typeof b && null !== b)
          throw TypeError('Super expression must either be null or a function');
        (a.prototype = Object.create(b && b.prototype, {
          constructor: { value: a, writable: !0, configurable: !0 },
        })),
          b && _setPrototypeOf(a, b);
      }
      function _setPrototypeOf(a, b) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function (a, b) {
            return (a.__proto__ = b), a;
          })(a, b);
      }
      function _createSuper(a) {
        var b = _isNativeReflectConstruct();
        return function () {
          var c,
            d = _getPrototypeOf(a);
          return (
            (c = b
              ? Reflect.construct(
                  d,
                  arguments,
                  _getPrototypeOf(this).constructor,
                )
              : d.apply(this, arguments)),
            _possibleConstructorReturn(this, c)
          );
        };
      }
      function _possibleConstructorReturn(a, b) {
        return b && ('object' === _typeof(b) || 'function' == typeof b)
          ? b
          : _assertThisInitialized(a);
      }
      function _assertThisInitialized(a) {
        if (void 0 === a)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return a;
      }
      function _isNativeReflectConstruct() {
        if (
          'undefined' == typeof Reflect ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (a) {
          return !1;
        }
      }
      function _getPrototypeOf(a) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (a) {
              return a.__proto__ || Object.getPrototypeOf(a);
            })(a);
      }
      function _defineProperty(a, b, c) {
        return (
          b in a
            ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (a[b] = c),
          a
        );
      }
      var defaultErrorMessage = _react.default.createElement(
          'p',
          null,
          '현재 Daum 우편번호 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해주세요.',
        ),
        defaultStyle = { width: '100%', height: 400 },
        defaultProps = {
          scriptUrl: _loadPostcode.postcodeScriptUrl,
          errorMessage: defaultErrorMessage,
          autoClose: !0,
        },
        DaumPostcodeEmbed = (function (a) {
          function b() {
            var a;
            _classCallCheck(this, b);
            for (var d = arguments.length, e = Array(d), f = 0; f < d; f++)
              e[f] = arguments[f];
            return (
              _defineProperty(
                _assertThisInitialized((a = c.call.apply(c, [this].concat(e)))),
                'mounted',
                !1,
              ),
              _defineProperty(
                _assertThisInitialized(a),
                'wrap',
                (0, _react.createRef)(),
              ),
              _defineProperty(_assertThisInitialized(a), 'state', {
                hasError: !1,
              }),
              _defineProperty(
                _assertThisInitialized(a),
                'initiate',
                function (b) {
                  if (a.wrap.current) {
                    var c = a.props,
                      g = (c.scriptUrl, c.className, c.style, c.defaultQuery),
                      h = c.autoClose,
                      j = (c.errorMessage, c.onComplete),
                      k = c.onClose,
                      l = c.onResize,
                      m = c.onSearch;
                    new b(
                      _objectSpread(
                        _objectSpread(
                          {},
                          _objectWithoutProperties(c, _excluded),
                        ),
                        {},
                        {
                          oncomplete: function oncomplete(b) {
                            j && j(b),
                              h && a.wrap.current && a.wrap.current.remove();
                          },
                          onsearch: m,
                          onresize: l,
                          onclose: k,
                          width: '100%',
                          height: '100%',
                        },
                      ),
                    ).embed(a.wrap.current, { q: g, autoClose: h });
                  }
                },
              ),
              _defineProperty(
                _assertThisInitialized(a),
                'onError',
                function (b) {
                  console.error(b), a.setState({ hasError: !0 });
                },
              ),
              a
            );
          }
          _inherits(b, a);
          var c = _createSuper(b);
          return (
            _createClass(b, [
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  var a = this.initiate,
                    b = this.onError,
                    c = this.props.scriptUrl;
                  c &&
                    (this.mounted ||
                      ((0, _loadPostcode.default)(c).then(a).catch(b),
                      (this.mounted = !0)));
                },
              },
              {
                key: 'render',
                value: function render() {
                  var a = this.props,
                    b = a.className,
                    c = a.style,
                    d = a.errorMessage,
                    e = this.state.hasError;
                  return _react.default.createElement(
                    'div',
                    {
                      ref: this.wrap,
                      className: b,
                      style: _objectSpread(_objectSpread({}, defaultStyle), c),
                    },
                    e && d,
                  );
                },
              },
            ]),
            b
          );
        })(_react.Component);
      _defineProperty(DaumPostcodeEmbed, 'defaultProps', defaultProps),
        (exports.default = DaumPostcodeEmbed);
    },
    './node_modules/react-daum-postcode/lib/index.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) => {
      'use strict';
      exports.Ay = void 0;
      var _DaumPostcodeEmbed = _interopRequireDefault(
        __webpack_require__(
          './node_modules/react-daum-postcode/lib/DaumPostcodeEmbed.js',
        ),
      );
      function _interopRequireDefault(a) {
        return a && a.__esModule ? a : { default: a };
      }
      _interopRequireDefault(
        __webpack_require__(
          './node_modules/react-daum-postcode/lib/useDaumPostcodePopup.js',
        ),
      ),
        _interopRequireDefault(
          __webpack_require__(
            './node_modules/react-daum-postcode/lib/loadPostcode.js',
          ),
        );
      var _default = _DaumPostcodeEmbed.default;
      exports.Ay = _default;
    },
    './node_modules/react-daum-postcode/lib/loadPostcode.js': (
      __unused_webpack_module,
      exports,
    ) => {
      'use strict';
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = exports.postcodeScriptUrl = void 0),
        (exports.postcodeScriptUrl =
          'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js');
      var loadPostcode = (function () {
        var a = null;
        return function () {
          var b =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
          return (
            a ||
            (a = new Promise(function (a, c) {
              var d = document.createElement('script');
              (d.src = b),
                (d.onload = function () {
                  var b, d;
                  return null !== (b = window) &&
                    void 0 !== b &&
                    null !== (d = b.daum) &&
                    void 0 !== d &&
                    d.Postcode
                    ? a(window.daum.Postcode)
                    : void c(
                        Error(
                          'Script is loaded successfully, but cannot find Postcode module. Check your scriptURL property.',
                        ),
                      );
                }),
                (d.onerror = function (a) {
                  return c(a);
                }),
                (d.id = 'daum_postcode_script'),
                document.body.appendChild(d);
            }))
          );
        };
      })();
      exports.default = loadPostcode;
    },
    './node_modules/react-daum-postcode/lib/useDaumPostcodePopup.js': (
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) => {
      'use strict';
      function _typeof(a) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (a) {
                return typeof a;
              }
            : function (a) {
                return a &&
                  'function' == typeof Symbol &&
                  a.constructor === Symbol &&
                  a !== Symbol.prototype
                  ? 'symbol'
                  : typeof a;
              })(a);
      }
      Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.default = void 0);
      var _react = __webpack_require__('./node_modules/react/index.js'),
        _loadPostcode = _interopRequireWildcard(
          __webpack_require__(
            './node_modules/react-daum-postcode/lib/loadPostcode.js',
          ),
        ),
        _excluded = [
          'defaultQuery',
          'left',
          'top',
          'popupKey',
          'popupTitle',
          'autoClose',
          'onComplete',
          'onResize',
          'onClose',
          'onSearch',
          'onError',
        ];
      function _getRequireWildcardCache(a) {
        if ('function' != typeof WeakMap) return null;
        var b = new WeakMap(),
          c = new WeakMap();
        return (_getRequireWildcardCache = function (a) {
          return a ? c : b;
        })(a);
      }
      function _interopRequireWildcard(a, b) {
        if (!b && a && a.__esModule) return a;
        if (null === a || ('object' !== _typeof(a) && 'function' != typeof a))
          return { default: a };
        var c = _getRequireWildcardCache(b);
        if (c && c.has(a)) return c.get(a);
        var d = {},
          e = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var f in a)
          if ('default' != f && Object.prototype.hasOwnProperty.call(a, f)) {
            var g = e ? Object.getOwnPropertyDescriptor(a, f) : null;
            g && (g.get || g.set)
              ? Object.defineProperty(d, f, g)
              : (d[f] = a[f]);
          }
        return (d.default = a), c && c.set(a, d), d;
      }
      function ownKeys(a, b) {
        var c = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(a);
          b &&
            (d = d.filter(function (b) {
              return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })),
            c.push.apply(c, d);
        }
        return c;
      }
      function _objectSpread(a) {
        for (var b, c = 1; c < arguments.length; c++)
          (b = null == arguments[c] ? {} : arguments[c]),
            c % 2
              ? ownKeys(Object(b), !0).forEach(function (c) {
                  _defineProperty(a, c, b[c]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    a,
                    Object.getOwnPropertyDescriptors(b),
                  )
                : ownKeys(Object(b)).forEach(function (c) {
                    Object.defineProperty(
                      a,
                      c,
                      Object.getOwnPropertyDescriptor(b, c),
                    );
                  });
        return a;
      }
      function _defineProperty(a, b, c) {
        return (
          b in a
            ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (a[b] = c),
          a
        );
      }
      function _objectWithoutProperties(a, b) {
        if (null == a) return {};
        var c,
          d,
          e = _objectWithoutPropertiesLoose(a, b);
        if (Object.getOwnPropertySymbols) {
          var f = Object.getOwnPropertySymbols(a);
          for (d = 0; d < f.length; d++)
            (c = f[d]),
              0 <= b.indexOf(c) ||
                (Object.prototype.propertyIsEnumerable.call(a, c) &&
                  (e[c] = a[c]));
        }
        return e;
      }
      function _objectWithoutPropertiesLoose(a, b) {
        if (null == a) return {};
        var c,
          d,
          e = {},
          f = Object.keys(a);
        for (d = 0; d < f.length; d++)
          (c = f[d]), 0 <= b.indexOf(c) || (e[c] = a[c]);
        return e;
      }
      exports.default = function useDaumPostcodePopup() {
        var a =
          0 < arguments.length && void 0 !== arguments[0]
            ? arguments[0]
            : _loadPostcode.postcodeScriptUrl;
        return (
          (0, _react.useEffect)(
            function () {
              (0, _loadPostcode.default)(a);
            },
            [a],
          ),
          (0, _react.useCallback)(
            function (b) {
              var c = _objectSpread({}, b),
                d = c.defaultQuery,
                e = c.left,
                f = c.top,
                g = c.popupKey,
                h = c.popupTitle,
                i = c.autoClose,
                j = c.onComplete,
                k = c.onResize,
                l = c.onClose,
                m = c.onSearch,
                n = c.onError,
                o = _objectWithoutProperties(c, _excluded);
              return (0, _loadPostcode.default)(a)
                .then(function (a) {
                  new a(
                    _objectSpread(
                      _objectSpread({}, o),
                      {},
                      { oncomplete: j, onsearch: m, onresize: k, onclose: l },
                    ),
                  ).open({
                    q: d,
                    left: e,
                    top: f,
                    popupTitle: h,
                    popupKey: g,
                    autoClose: i,
                  });
                })
                .catch(n);
            },
            [a],
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=1606.59659ae3.iframe.bundle.js.map
