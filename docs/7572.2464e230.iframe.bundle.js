(self.webpackChunk_gwiyeomgo_react_toolkit =
  self.webpackChunk_gwiyeomgo_react_toolkit || []).push([
  [7572],
  {
    './node_modules/browser-image-compression/dist/browser-image-compression.mjs':
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        let c;
        function _mergeNamespaces(e, t1) {
          return (
            t1.forEach(function (t1) {
              t1 &&
                'string' != typeof t1 &&
                !Array.isArray(t1) &&
                Object.keys(t1).forEach(function (r) {
                  if ('default' !== r && !(r in e)) {
                    var i = Object.getOwnPropertyDescriptor(t1, r);
                    Object.defineProperty(
                      e,
                      r,
                      i.get
                        ? i
                        : {
                            enumerable: !0,
                            get: function () {
                              return t1[r];
                            },
                          },
                    );
                  }
                });
            }),
            Object.freeze(e)
          );
        }
        function copyExifWithoutOrientation(e, t1) {
          return new Promise(function (r, i) {
            let o;
            return getApp1Segment(e).then(function (e) {
              try {
                return (
                  (o = e),
                  r(
                    new Blob([t1.slice(0, 2), o, t1.slice(2)], {
                      type: 'image/jpeg',
                    }),
                  )
                );
              } catch (e) {
                return i(e);
              }
            }, i);
          });
        }
        __webpack_require__.d(__webpack_exports__, {
          A: () => imageCompression,
        });
        let getApp1Segment = (e) =>
          new Promise((t1, r) => {
            let i = new FileReader();
            i.addEventListener('load', ({ target: { result: e } }) => {
              let i = new DataView(e),
                o = 0;
              if (65496 !== i.getUint16(o)) return r('not a valid JPEG');
              for (o += 2; ; ) {
                let a = i.getUint16(o);
                if (65498 === a) break;
                let s = i.getUint16(o + 2);
                if (65505 === a && 1165519206 === i.getUint32(o + 4)) {
                  let f;
                  let a = o + 10;
                  switch (i.getUint16(a)) {
                    case 18761:
                      f = !0;
                      break;
                    case 19789:
                      f = !1;
                      break;
                    default:
                      return r('TIFF header contains invalid endian');
                  }
                  if (42 !== i.getUint16(a + 2, f))
                    return r('TIFF header contains invalid version');
                  let l = i.getUint32(a + 4, f),
                    c = a + l + 2 + 12 * i.getUint16(a + l, f);
                  for (let e = a + l + 2; e < c; e += 12)
                    if (274 == i.getUint16(e, f)) {
                      if (3 !== i.getUint16(e + 2, f))
                        return r('Orientation data type is invalid');
                      if (1 !== i.getUint32(e + 4, f))
                        return r('Orientation data count is invalid');
                      i.setUint16(e + 8, 1, f);
                      break;
                    }
                  return t1(e.slice(o, o + 2 + s));
                }
                o += 2 + s;
              }
              return t1(new Blob());
            }),
              i.readAsArrayBuffer(e);
          });
        var e = {},
          t1 = {
            get exports() {
              return e;
            },
            set exports(t) {
              e = t;
            },
          };
        !(function (e) {
          var r,
            i,
            UZIP = {};
          (t1.exports = UZIP),
            (UZIP.parse = function (e, t1) {
              for (
                var r = UZIP.bin.readUshort,
                  i = UZIP.bin.readUint,
                  o = 0,
                  a = {},
                  s = new Uint8Array(e),
                  f = s.length - 4;
                101010256 != i(s, f);

              )
                f--;
              var l = r(s, (o = f + 4 + 4));
              r(s, (o += 2));
              var c = i(s, (o += 2)),
                u = i(s, (o += 4));
              (o += 4), (o = u);
              for (var h = 0; h < l; h++) {
                i(s, o), i(s, (o += 16)), (c = i(s, (o += 4)));
                var d = i(s, (o += 4)),
                  A = r(s, (o += 4)),
                  g = r(s, o + 2),
                  p = r(s, o + 4),
                  m = i(s, (o += 14));
                (o += 4 + (A + g + p)), UZIP._readLocal(s, m, a, c, d, t1);
              }
              return a;
            }),
            (UZIP._readLocal = function (e, t1, r, i, o, a) {
              var s = UZIP.bin.readUshort,
                f = UZIP.bin.readUint;
              f(e, t1), s(e, (t1 += 4)), s(e, (t1 += 2));
              var l = s(e, (t1 += 2));
              f(e, (t1 += 2)), f(e, (t1 += 4));
              var c = s(e, (t1 += 12)),
                u = s(e, (t1 += 2));
              t1 += 2;
              var h = UZIP.bin.readUTF8(e, t1, c);
              if (((t1 += c + u), a)) r[h] = { size: o, csize: i };
              else {
                var d = new Uint8Array(e.buffer, t1);
                if (0 == l) r[h] = new Uint8Array(d.buffer.slice(t1, t1 + i));
                else {
                  if (8 != l) throw 'unknown compression method: ' + l;
                  var A = new Uint8Array(o);
                  UZIP.inflateRaw(d, A), (r[h] = A);
                }
              }
            }),
            (UZIP.inflateRaw = function (e, t1) {
              return UZIP.F.inflate(e, t1);
            }),
            (UZIP.inflate = function (e, t1) {
              return (
                e[0],
                e[1],
                UZIP.inflateRaw(
                  new Uint8Array(e.buffer, e.byteOffset + 2, e.length - 6),
                  t1,
                )
              );
            }),
            (UZIP.deflate = function (e, t1) {
              null == t1 && (t1 = { level: 6 });
              var r = 0,
                i = new Uint8Array(50 + Math.floor(1.1 * e.length));
              (i[r] = 120),
                (i[r + 1] = 156),
                (r += 2),
                (r = UZIP.F.deflateRaw(e, i, r, t1.level));
              var o = UZIP.adler(e, 0, e.length);
              return (
                (i[r + 0] = (o >>> 24) & 255),
                (i[r + 1] = (o >>> 16) & 255),
                (i[r + 2] = (o >>> 8) & 255),
                (i[r + 3] = (o >>> 0) & 255),
                new Uint8Array(i.buffer, 0, r + 4)
              );
            }),
            (UZIP.deflateRaw = function (e, t1) {
              null == t1 && (t1 = { level: 6 });
              var r = new Uint8Array(50 + Math.floor(1.1 * e.length)),
                i = UZIP.F.deflateRaw(e, r, i, t1.level);
              return new Uint8Array(r.buffer, 0, i);
            }),
            (UZIP.encode = function (e, t1) {
              null == t1 && (t1 = !1);
              var r = 0,
                i = UZIP.bin.writeUint,
                o = UZIP.bin.writeUshort,
                a = {};
              for (var s in e) {
                var f = !UZIP._noNeed(s) && !t1,
                  l = e[s],
                  c = UZIP.crc.crc(l, 0, l.length);
                a[s] = {
                  cpr: f,
                  usize: l.length,
                  crc: c,
                  file: f ? UZIP.deflateRaw(l) : l,
                };
              }
              for (var s in a)
                r += a[s].file.length + 30 + 46 + 2 * UZIP.bin.sizeUTF8(s);
              var u = new Uint8Array((r += 22)),
                h = 0,
                d = [];
              for (var s in a) {
                var A = a[s];
                d.push(h), (h = UZIP._writeHeader(u, h, s, A, 0));
              }
              var g = 0,
                p = h;
              for (var s in a)
                (A = a[s]),
                  d.push(h),
                  (h = UZIP._writeHeader(u, h, s, A, 1, d[g++]));
              var m = h - p;
              return (
                i(u, h, 101010256),
                o(u, (h += 8), g),
                o(u, (h += 2), g),
                i(u, (h += 2), m),
                i(u, (h += 4), p),
                (h += 6),
                u.buffer
              );
            }),
            (UZIP._noNeed = function (e) {
              var t1 = e.split('.').pop().toLowerCase();
              return -1 != 'png,jpg,jpeg,zip'.indexOf(t1);
            }),
            (UZIP._writeHeader = function (e, t1, r, i, o, a) {
              var s = UZIP.bin.writeUint,
                f = UZIP.bin.writeUshort,
                l = i.file;
              return (
                s(e, t1, 0 == o ? 67324752 : 33639248),
                (t1 += 4),
                1 == o && (t1 += 2),
                f(e, t1, 20),
                f(e, (t1 += 2), 0),
                f(e, (t1 += 2), i.cpr ? 8 : 0),
                s(e, (t1 += 2), 0),
                s(e, (t1 += 4), i.crc),
                s(e, (t1 += 4), l.length),
                s(e, (t1 += 4), i.usize),
                f(e, (t1 += 4), UZIP.bin.sizeUTF8(r)),
                f(e, (t1 += 2), 0),
                (t1 += 2),
                1 == o && (s(e, (t1 += 10), a), (t1 += 4)),
                (t1 += UZIP.bin.writeUTF8(e, t1, r)),
                0 == o && (e.set(l, t1), (t1 += l.length)),
                t1
              );
            }),
            (UZIP.crc = {
              table: (function () {
                for (var e = new Uint32Array(256), t1 = 0; t1 < 256; t1++) {
                  for (var r = t1, i = 0; i < 8; i++)
                    1 & r ? (r = 3988292384 ^ (r >>> 1)) : (r >>>= 1);
                  e[t1] = r;
                }
                return e;
              })(),
              update: function (e, t1, r, i) {
                for (var o = 0; o < i; o++)
                  e = UZIP.crc.table[255 & (e ^ t1[r + o])] ^ (e >>> 8);
                return e;
              },
              crc: function (e, t1, r) {
                return 4294967295 ^ UZIP.crc.update(4294967295, e, t1, r);
              },
            }),
            (UZIP.adler = function (e, t1, r) {
              for (var i = 1, o = 0, a = t1, s = t1 + r; a < s; ) {
                for (var f = Math.min(a + 5552, s); a < f; ) o += i += e[a++];
                (i %= 65521), (o %= 65521);
              }
              return (o << 16) | i;
            }),
            (UZIP.bin = {
              readUshort: function (e, t1) {
                return e[t1] | (e[t1 + 1] << 8);
              },
              writeUshort: function (e, t1, r) {
                (e[t1] = 255 & r), (e[t1 + 1] = (r >> 8) & 255);
              },
              readUint: function (e, t1) {
                return (
                  16777216 * e[t1 + 3] +
                  ((e[t1 + 2] << 16) | (e[t1 + 1] << 8) | e[t1])
                );
              },
              writeUint: function (e, t1, r) {
                (e[t1] = 255 & r),
                  (e[t1 + 1] = (r >> 8) & 255),
                  (e[t1 + 2] = (r >> 16) & 255),
                  (e[t1 + 3] = (r >> 24) & 255);
              },
              readASCII: function (e, t1, r) {
                for (var i = '', o = 0; o < r; o++)
                  i += String.fromCharCode(e[t1 + o]);
                return i;
              },
              writeASCII: function (e, t1, r) {
                for (var i = 0; i < r.length; i++) e[t1 + i] = r.charCodeAt(i);
              },
              pad: function (e) {
                return e.length < 2 ? '0' + e : e;
              },
              readUTF8: function (e, t1, r) {
                for (var i, o = '', a = 0; a < r; a++)
                  o += '%' + UZIP.bin.pad(e[t1 + a].toString(16));
                try {
                  i = decodeURIComponent(o);
                } catch (i) {
                  return UZIP.bin.readASCII(e, t1, r);
                }
                return i;
              },
              writeUTF8: function (e, t1, r) {
                for (var i = r.length, o = 0, a = 0; a < i; a++) {
                  var s = r.charCodeAt(a);
                  if (0 == (4294967168 & s)) (e[t1 + o] = s), o++;
                  else if (0 == (4294965248 & s))
                    (e[t1 + o] = 192 | (s >> 6)),
                      (e[t1 + o + 1] = 128 | ((s >> 0) & 63)),
                      (o += 2);
                  else if (0 == (4294901760 & s))
                    (e[t1 + o] = 224 | (s >> 12)),
                      (e[t1 + o + 1] = 128 | ((s >> 6) & 63)),
                      (e[t1 + o + 2] = 128 | ((s >> 0) & 63)),
                      (o += 3);
                  else {
                    if (0 != (4292870144 & s)) throw 'e';
                    (e[t1 + o] = 240 | (s >> 18)),
                      (e[t1 + o + 1] = 128 | ((s >> 12) & 63)),
                      (e[t1 + o + 2] = 128 | ((s >> 6) & 63)),
                      (e[t1 + o + 3] = 128 | ((s >> 0) & 63)),
                      (o += 4);
                  }
                }
                return o;
              },
              sizeUTF8: function (e) {
                for (var t1 = e.length, r = 0, i = 0; i < t1; i++) {
                  var o = e.charCodeAt(i);
                  if (0 == (4294967168 & o)) r++;
                  else if (0 == (4294965248 & o)) r += 2;
                  else if (0 == (4294901760 & o)) r += 3;
                  else {
                    if (0 != (4292870144 & o)) throw 'e';
                    r += 4;
                  }
                }
                return r;
              },
            }),
            (UZIP.F = {}),
            (UZIP.F.deflateRaw = function (e, t1, r, i) {
              var o = [
                  [0, 0, 0, 0, 0],
                  [4, 4, 8, 4, 0],
                  [4, 5, 16, 8, 0],
                  [4, 6, 16, 16, 0],
                  [4, 10, 16, 32, 0],
                  [8, 16, 32, 32, 0],
                  [8, 16, 128, 128, 0],
                  [8, 32, 128, 256, 0],
                  [32, 128, 258, 1024, 1],
                  [32, 258, 258, 4096, 1],
                ][i],
                a = UZIP.F.U,
                s = UZIP.F._goodIndex;
              UZIP.F._hash;
              var f = UZIP.F._putsE,
                l = 0,
                c = r << 3,
                u = 0,
                h = e.length;
              if (0 == i) {
                for (; l < h; )
                  f(t1, c, l + (_ = Math.min(65535, h - l)) == h ? 1 : 0),
                    (c = UZIP.F._copyExact(e, l, _, t1, c + 8)),
                    (l += _);
                return c >>> 3;
              }
              var d = a.lits,
                A = a.strt,
                g = a.prev,
                p = 0,
                m = 0,
                w = 0,
                v = 0,
                b = 0,
                y = 0;
              for (
                h > 2 && (A[(y = UZIP.F._hash(e, 0))] = 0), l = 0;
                l < h;
                l++
              ) {
                if (((b = y), l + 1 < h - 2)) {
                  y = UZIP.F._hash(e, l + 1);
                  var E = (l + 1) & 32767;
                  (g[E] = A[y]), (A[y] = E);
                }
                if (u <= l) {
                  (p > 14e3 || m > 26697) &&
                    h - l > 100 &&
                    (u < l && ((d[p] = l - u), (p += 2), (u = l)),
                    (c = UZIP.F._writeBlock(
                      l == h - 1 || u == h ? 1 : 0,
                      d,
                      p,
                      v,
                      e,
                      w,
                      l - w,
                      t1,
                      c,
                    )),
                    (p = m = v = 0),
                    (w = l));
                  var F = 0;
                  l < h - 2 &&
                    (F = UZIP.F._bestMatch(
                      e,
                      l,
                      g,
                      b,
                      Math.min(o[2], h - l),
                      o[3],
                    ));
                  var _ = F >>> 16,
                    B = 65535 & F;
                  if (0 != F) {
                    B = 65535 & F;
                    var U = s((_ = F >>> 16), a.of0);
                    a.lhst[257 + U]++;
                    var C = s(B, a.df0);
                    a.dhst[C]++,
                      (v += a.exb[U] + a.dxb[C]),
                      (d[p] = (_ << 23) | (l - u)),
                      (d[p + 1] = (B << 16) | (U << 8) | C),
                      (p += 2),
                      (u = l + _);
                  } else a.lhst[e[l]]++;
                  m++;
                }
              }
              for (
                (w == l && 0 != e.length) ||
                (u < l && ((d[p] = l - u), (p += 2), (u = l)),
                (c = UZIP.F._writeBlock(1, d, p, v, e, w, l - w, t1, c)),
                (p = 0),
                (m = 0),
                (p = m = v = 0),
                (w = l));
                0 != (7 & c);

              )
                c++;
              return c >>> 3;
            }),
            (UZIP.F._bestMatch = function (e, t1, r, i, o, a) {
              var s = 32767 & t1,
                f = r[s],
                l = (s - f + 32768) & 32767;
              if (f == s || i != UZIP.F._hash(e, t1 - l)) return 0;
              for (
                var c = 0, u = 0, h = Math.min(32767, t1);
                l <= h && 0 != --a && f != s;

              ) {
                if (0 == c || e[t1 + c] == e[t1 + c - l]) {
                  var d = UZIP.F._howLong(e, t1, l);
                  if (d > c) {
                    if (((u = l), (c = d) >= o)) break;
                    l + 2 < d && (d = l + 2);
                    for (var A = 0, g = 0; g < d - 2; g++) {
                      var p = (t1 - l + g + 32768) & 32767,
                        m = (p - r[p] + 32768) & 32767;
                      m > A && ((A = m), (f = p));
                    }
                  }
                }
                l += ((s = f) - (f = r[s]) + 32768) & 32767;
              }
              return (c << 16) | u;
            }),
            (UZIP.F._howLong = function (e, t1, r) {
              if (
                e[t1] != e[t1 - r] ||
                e[t1 + 1] != e[t1 + 1 - r] ||
                e[t1 + 2] != e[t1 + 2 - r]
              )
                return 0;
              var i = t1,
                o = Math.min(e.length, t1 + 258);
              for (t1 += 3; t1 < o && e[t1] == e[t1 - r]; ) t1++;
              return t1 - i;
            }),
            (UZIP.F._hash = function (e, t1) {
              return (((e[t1] << 8) | e[t1 + 1]) + (e[t1 + 2] << 4)) & 65535;
            }),
            (UZIP.saved = 0),
            (UZIP.F._writeBlock = function (e, t1, r, i, o, a, s, f, l) {
              var C,
                I,
                c,
                u,
                h,
                d,
                A,
                g,
                p,
                m,
                w,
                v = UZIP.F.U,
                b = UZIP.F._putsF,
                y = UZIP.F._putsE;
              v.lhst[256]++,
                (u = (c = UZIP.F.getTrees())[0]),
                (h = c[1]),
                (d = c[2]),
                (A = c[3]),
                (g = c[4]),
                (p = c[5]),
                (m = c[6]),
                (w = c[7]);
              var E =
                  32 + (0 == ((l + 3) & 7) ? 0 : 8 - ((l + 3) & 7)) + (s << 3),
                F =
                  i +
                  UZIP.F.contSize(v.fltree, v.lhst) +
                  UZIP.F.contSize(v.fdtree, v.dhst),
                _ =
                  i +
                  UZIP.F.contSize(v.ltree, v.lhst) +
                  UZIP.F.contSize(v.dtree, v.dhst);
              _ +=
                14 +
                3 * p +
                UZIP.F.contSize(v.itree, v.ihst) +
                (2 * v.ihst[16] + 3 * v.ihst[17] + 7 * v.ihst[18]);
              for (var B = 0; B < 286; B++) v.lhst[B] = 0;
              for (B = 0; B < 30; B++) v.dhst[B] = 0;
              for (B = 0; B < 19; B++) v.ihst[B] = 0;
              var U = E < F && E < _ ? 0 : F < _ ? 1 : 2;
              if ((b(f, l, e), b(f, l + 1, U), (l += 3), 0 == U)) {
                for (; 0 != (7 & l); ) l++;
                l = UZIP.F._copyExact(o, a, s, f, l);
              } else {
                if ((1 == U && ((C = v.fltree), (I = v.fdtree)), 2 == U)) {
                  UZIP.F.makeCodes(v.ltree, u),
                    UZIP.F.revCodes(v.ltree, u),
                    UZIP.F.makeCodes(v.dtree, h),
                    UZIP.F.revCodes(v.dtree, h),
                    UZIP.F.makeCodes(v.itree, d),
                    UZIP.F.revCodes(v.itree, d),
                    (C = v.ltree),
                    (I = v.dtree),
                    y(f, l, A - 257),
                    y(f, (l += 5), g - 1),
                    y(f, (l += 5), p - 4),
                    (l += 4);
                  for (var Q = 0; Q < p; Q++)
                    y(f, l + 3 * Q, v.itree[1 + (v.ordr[Q] << 1)]);
                  (l += 3 * p),
                    (l = UZIP.F._codeTiny(m, v.itree, f, l)),
                    (l = UZIP.F._codeTiny(w, v.itree, f, l));
                }
                for (var M = a, x = 0; x < r; x += 2) {
                  for (
                    var S = t1[x], R = S >>> 23, T = M + (8388607 & S);
                    M < T;

                  )
                    l = UZIP.F._writeLit(o[M++], C, f, l);
                  if (0 != R) {
                    var O = t1[x + 1],
                      P = O >> 16,
                      H = (O >> 8) & 255,
                      L = 255 & O;
                    y(
                      f,
                      (l = UZIP.F._writeLit(257 + H, C, f, l)),
                      R - v.of0[H],
                    ),
                      (l += v.exb[H]),
                      b(f, (l = UZIP.F._writeLit(L, I, f, l)), P - v.df0[L]),
                      (l += v.dxb[L]),
                      (M += R);
                  }
                }
                l = UZIP.F._writeLit(256, C, f, l);
              }
              return l;
            }),
            (UZIP.F._copyExact = function (e, t1, r, i, o) {
              var a = o >>> 3;
              return (
                (i[a] = r),
                (i[a + 1] = r >>> 8),
                (i[a + 2] = 255 - i[a]),
                (i[a + 3] = 255 - i[a + 1]),
                (a += 4),
                i.set(new Uint8Array(e.buffer, t1, r), a),
                o + ((r + 4) << 3)
              );
            }),
            (UZIP.F.getTrees = function () {
              for (
                var e = UZIP.F.U,
                  t1 = UZIP.F._hufTree(e.lhst, e.ltree, 15),
                  r = UZIP.F._hufTree(e.dhst, e.dtree, 15),
                  i = [],
                  o = UZIP.F._lenCodes(e.ltree, i),
                  a = [],
                  s = UZIP.F._lenCodes(e.dtree, a),
                  f = 0;
                f < i.length;
                f += 2
              )
                e.ihst[i[f]]++;
              for (f = 0; f < a.length; f += 2) e.ihst[a[f]]++;
              for (
                var l = UZIP.F._hufTree(e.ihst, e.itree, 7), c = 19;
                c > 4 && 0 == e.itree[1 + (e.ordr[c - 1] << 1)];

              )
                c--;
              return [t1, r, l, o, s, c, i, a];
            }),
            (UZIP.F.getSecond = function (e) {
              for (var t1 = [], r = 0; r < e.length; r += 2) t1.push(e[r + 1]);
              return t1;
            }),
            (UZIP.F.nonZero = function (e) {
              for (var t1 = '', r = 0; r < e.length; r += 2)
                0 != e[r + 1] && (t1 += (r >> 1) + ',');
              return t1;
            }),
            (UZIP.F.contSize = function (e, t1) {
              for (var r = 0, i = 0; i < t1.length; i++)
                r += t1[i] * e[1 + (i << 1)];
              return r;
            }),
            (UZIP.F._codeTiny = function (e, t1, r, i) {
              for (var o = 0; o < e.length; o += 2) {
                var a = e[o],
                  s = e[o + 1];
                i = UZIP.F._writeLit(a, t1, r, i);
                var f = 16 == a ? 2 : 17 == a ? 3 : 7;
                a > 15 && (UZIP.F._putsE(r, i, s, f), (i += f));
              }
              return i;
            }),
            (UZIP.F._lenCodes = function (e, t1) {
              for (var r = e.length; 2 != r && 0 == e[r - 1]; ) r -= 2;
              for (var i = 0; i < r; i += 2) {
                var o = e[i + 1],
                  a = i + 3 < r ? e[i + 3] : -1,
                  s = i + 5 < r ? e[i + 5] : -1,
                  f = 0 == i ? -1 : e[i - 1];
                if (0 == o && a == o && s == o) {
                  for (var l = i + 5; l + 2 < r && e[l + 2] == o; ) l += 2;
                  (c = Math.min((l + 1 - i) >>> 1, 138)) < 11
                    ? t1.push(17, c - 3)
                    : t1.push(18, c - 11),
                    (i += 2 * c - 2);
                } else if (o == f && a == o && s == o) {
                  for (l = i + 5; l + 2 < r && e[l + 2] == o; ) l += 2;
                  var c = Math.min((l + 1 - i) >>> 1, 6);
                  t1.push(16, c - 3), (i += 2 * c - 2);
                } else t1.push(o, 0);
              }
              return r >>> 1;
            }),
            (UZIP.F._hufTree = function (e, t1, r) {
              var i = [],
                o = e.length,
                a = t1.length,
                s = 0;
              for (s = 0; s < a; s += 2) (t1[s] = 0), (t1[s + 1] = 0);
              for (s = 0; s < o; s++) 0 != e[s] && i.push({ lit: s, f: e[s] });
              var f = i.length,
                l = i.slice(0);
              if (0 == f) return 0;
              if (1 == f) {
                var c = i[0].lit;
                return (
                  (l = 0 == c ? 1 : 0),
                  (t1[1 + (c << 1)] = 1),
                  (t1[1 + (l << 1)] = 1),
                  1
                );
              }
              i.sort(function (e, t1) {
                return e.f - t1.f;
              });
              var u = i[0],
                h = i[1],
                d = 0,
                A = 1,
                g = 2;
              for (
                i[0] = { lit: -1, f: u.f + h.f, l: u, r: h, d: 0 };
                A != f - 1;

              )
                (u = d != A && (g == f || i[d].f < i[g].f) ? i[d++] : i[g++]),
                  (h = d != A && (g == f || i[d].f < i[g].f) ? i[d++] : i[g++]),
                  (i[A++] = { lit: -1, f: u.f + h.f, l: u, r: h });
              var p = UZIP.F.setDepth(i[A - 1], 0);
              for (
                p > r && (UZIP.F.restrictDepth(l, r, p), (p = r)), s = 0;
                s < f;
                s++
              )
                t1[1 + (l[s].lit << 1)] = l[s].d;
              return p;
            }),
            (UZIP.F.setDepth = function (e, t1) {
              return -1 != e.lit
                ? ((e.d = t1), t1)
                : Math.max(
                    UZIP.F.setDepth(e.l, t1 + 1),
                    UZIP.F.setDepth(e.r, t1 + 1),
                  );
            }),
            (UZIP.F.restrictDepth = function (e, t1, r) {
              var i = 0,
                o = 1 << (r - t1),
                a = 0;
              for (
                e.sort(function (e, t1) {
                  return t1.d == e.d ? e.f - t1.f : t1.d - e.d;
                }),
                  i = 0;
                i < e.length && e[i].d > t1;
                i++
              ) {
                var s = e[i].d;
                (e[i].d = t1), (a += o - (1 << (r - s)));
              }
              for (a >>>= r - t1; a > 0; )
                (s = e[i].d) < t1 ? (e[i].d++, (a -= 1 << (t1 - s - 1))) : i++;
              for (; i >= 0; i--) e[i].d == t1 && a < 0 && (e[i].d--, a++);
              0 != a && console.log('debt left');
            }),
            (UZIP.F._goodIndex = function (e, t1) {
              var r = 0;
              return (
                t1[16] <= e && (r |= 16),
                t1[8 | r] <= e && (r |= 8),
                t1[4 | r] <= e && (r |= 4),
                t1[2 | r] <= e && (r |= 2),
                t1[1 | r] <= e && (r |= 1),
                r
              );
            }),
            (UZIP.F._writeLit = function (e, t1, r, i) {
              return UZIP.F._putsF(r, i, t1[e << 1]), i + t1[1 + (e << 1)];
            }),
            (UZIP.F.inflate = function (e, t1) {
              var r = Uint8Array;
              if (3 == e[0] && 0 == e[1]) return t1 || new r(0);
              var i = UZIP.F,
                o = i._bitsF,
                a = i._bitsE,
                s = i._decodeTiny,
                f = i.makeCodes,
                l = i.codes2map,
                c = i._get17,
                u = i.U,
                h = null == t1;
              h && (t1 = new r((e.length >>> 2) << 3));
              for (
                var d,
                  A,
                  g = 0,
                  p = 0,
                  m = 0,
                  w = 0,
                  v = 0,
                  b = 0,
                  y = 0,
                  E = 0,
                  F = 0;
                0 == g;

              )
                if (
                  ((g = o(e, F, 1)), (p = o(e, F + 1, 2)), (F += 3), 0 != p)
                ) {
                  if (
                    (h && (t1 = UZIP.F._check(t1, E + 131072)),
                    1 == p &&
                      ((d = u.flmap), (A = u.fdmap), (b = 511), (y = 31)),
                    2 == p)
                  ) {
                    (m = a(e, F, 5) + 257),
                      (w = a(e, F + 5, 5) + 1),
                      (v = a(e, F + 10, 4) + 4),
                      (F += 14);
                    for (var _ = 0; _ < 38; _ += 2)
                      (u.itree[_] = 0), (u.itree[_ + 1] = 0);
                    var B = 1;
                    for (_ = 0; _ < v; _++) {
                      var U = a(e, F + 3 * _, 3);
                      (u.itree[1 + (u.ordr[_] << 1)] = U), U > B && (B = U);
                    }
                    (F += 3 * v),
                      f(u.itree, B),
                      l(u.itree, B, u.imap),
                      (d = u.lmap),
                      (A = u.dmap),
                      (F = s(u.imap, (1 << B) - 1, m + w, e, F, u.ttree));
                    var C = i._copyOut(u.ttree, 0, m, u.ltree);
                    b = (1 << C) - 1;
                    var I = i._copyOut(u.ttree, m, w, u.dtree);
                    (y = (1 << I) - 1),
                      f(u.ltree, C),
                      l(u.ltree, C, d),
                      f(u.dtree, I),
                      l(u.dtree, I, A);
                  }
                  for (;;) {
                    var Q = d[c(e, F) & b];
                    F += 15 & Q;
                    var M = Q >>> 4;
                    if (M >>> 8 == 0) t1[E++] = M;
                    else {
                      if (256 == M) break;
                      var x = E + M - 254;
                      if (M > 264) {
                        var S = u.ldef[M - 257];
                        (x = E + (S >>> 3) + a(e, F, 7 & S)), (F += 7 & S);
                      }
                      var R = A[c(e, F) & y];
                      F += 15 & R;
                      var T = R >>> 4,
                        O = u.ddef[T],
                        P = (O >>> 4) + o(e, F, 15 & O);
                      for (
                        F += 15 & O, h && (t1 = UZIP.F._check(t1, E + 131072));
                        E < x;

                      )
                        (t1[E] = t1[E++ - P]),
                          (t1[E] = t1[E++ - P]),
                          (t1[E] = t1[E++ - P]),
                          (t1[E] = t1[E++ - P]);
                      E = x;
                    }
                  }
                } else {
                  0 != (7 & F) && (F += 8 - (7 & F));
                  var H = 4 + (F >>> 3),
                    L = e[H - 4] | (e[H - 3] << 8);
                  h && (t1 = UZIP.F._check(t1, E + L)),
                    t1.set(new r(e.buffer, e.byteOffset + H, L), E),
                    (F = (H + L) << 3),
                    (E += L);
                }
              return t1.length == E ? t1 : t1.slice(0, E);
            }),
            (UZIP.F._check = function (e, t1) {
              var r = e.length;
              if (t1 <= r) return e;
              var i = new Uint8Array(Math.max(r << 1, t1));
              return i.set(e, 0), i;
            }),
            (UZIP.F._decodeTiny = function (e, t1, r, i, o, a) {
              for (var s = UZIP.F._bitsE, f = UZIP.F._get17, l = 0; l < r; ) {
                var c = e[f(i, o) & t1];
                o += 15 & c;
                var u = c >>> 4;
                if (u <= 15) (a[l] = u), l++;
                else {
                  var h = 0,
                    d = 0;
                  16 == u
                    ? ((d = 3 + s(i, o, 2)), (o += 2), (h = a[l - 1]))
                    : 17 == u
                      ? ((d = 3 + s(i, o, 3)), (o += 3))
                      : 18 == u && ((d = 11 + s(i, o, 7)), (o += 7));
                  for (var A = l + d; l < A; ) (a[l] = h), l++;
                }
              }
              return o;
            }),
            (UZIP.F._copyOut = function (e, t1, r, i) {
              for (var o = 0, a = 0, s = i.length >>> 1; a < r; ) {
                var f = e[a + t1];
                (i[a << 1] = 0), (i[1 + (a << 1)] = f), f > o && (o = f), a++;
              }
              for (; a < s; ) (i[a << 1] = 0), (i[1 + (a << 1)] = 0), a++;
              return o;
            }),
            (UZIP.F.makeCodes = function (e, t1) {
              for (
                var r,
                  i,
                  o,
                  a,
                  s = UZIP.F.U,
                  f = e.length,
                  l = s.bl_count,
                  c = 0;
                c <= t1;
                c++
              )
                l[c] = 0;
              for (c = 1; c < f; c += 2) l[e[c]]++;
              var u = s.next_code;
              for (r = 0, l[0] = 0, i = 1; i <= t1; i++)
                (r = (r + l[i - 1]) << 1), (u[i] = r);
              for (o = 0; o < f; o += 2)
                0 != (a = e[o + 1]) && ((e[o] = u[a]), u[a]++);
            }),
            (UZIP.F.codes2map = function (e, t1, r) {
              for (var i = e.length, o = UZIP.F.U.rev15, a = 0; a < i; a += 2)
                if (0 != e[a + 1])
                  for (
                    var s = a >> 1,
                      f = e[a + 1],
                      l = (s << 4) | f,
                      c = t1 - f,
                      u = e[a] << c,
                      h = u + (1 << c);
                    u != h;

                  )
                    (r[o[u] >>> (15 - t1)] = l), u++;
            }),
            (UZIP.F.revCodes = function (e, t1) {
              for (
                var r = UZIP.F.U.rev15, i = 15 - t1, o = 0;
                o < e.length;
                o += 2
              ) {
                var a = e[o] << (t1 - e[o + 1]);
                e[o] = r[a] >>> i;
              }
            }),
            (UZIP.F._putsE = function (e, t1, r) {
              r <<= 7 & t1;
              var i = t1 >>> 3;
              (e[i] |= r), (e[i + 1] |= r >>> 8);
            }),
            (UZIP.F._putsF = function (e, t1, r) {
              r <<= 7 & t1;
              var i = t1 >>> 3;
              (e[i] |= r), (e[i + 1] |= r >>> 8), (e[i + 2] |= r >>> 16);
            }),
            (UZIP.F._bitsE = function (e, t1, r) {
              return (
                ((e[t1 >>> 3] | (e[1 + (t1 >>> 3)] << 8)) >>> (7 & t1)) &
                ((1 << r) - 1)
              );
            }),
            (UZIP.F._bitsF = function (e, t1, r) {
              return (
                ((e[t1 >>> 3] |
                  (e[1 + (t1 >>> 3)] << 8) |
                  (e[2 + (t1 >>> 3)] << 16)) >>>
                  (7 & t1)) &
                ((1 << r) - 1)
              );
            }),
            (UZIP.F._get17 = function (e, t1) {
              return (
                (e[t1 >>> 3] |
                  (e[1 + (t1 >>> 3)] << 8) |
                  (e[2 + (t1 >>> 3)] << 16)) >>>
                (7 & t1)
              );
            }),
            (UZIP.F._get25 = function (e, t1) {
              return (
                (e[t1 >>> 3] |
                  (e[1 + (t1 >>> 3)] << 8) |
                  (e[2 + (t1 >>> 3)] << 16) |
                  (e[3 + (t1 >>> 3)] << 24)) >>>
                (7 & t1)
              );
            }),
            (UZIP.F.U =
              ((r = Uint16Array),
              (i = Uint32Array),
              {
                next_code: new r(16),
                bl_count: new r(16),
                ordr: [
                  16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1,
                  15,
                ],
                of0: [
                  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35,
                  43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999,
                  999, 999,
                ],
                exb: [
                  0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4,
                  4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0,
                ],
                ldef: new r(32),
                df0: [
                  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
                  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193,
                  12289, 16385, 24577, 65535, 65535,
                ],
                dxb: [
                  0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9,
                  9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0,
                ],
                ddef: new i(32),
                flmap: new r(512),
                fltree: [],
                fdmap: new r(32),
                fdtree: [],
                lmap: new r(32768),
                ltree: [],
                ttree: [],
                dmap: new r(32768),
                dtree: [],
                imap: new r(512),
                itree: [],
                rev15: new r(32768),
                lhst: new i(286),
                dhst: new i(30),
                ihst: new i(19),
                lits: new i(15e3),
                strt: new r(65536),
                prev: new r(32768),
              })),
            (function () {
              for (var e = UZIP.F.U, t1 = 0; t1 < 32768; t1++) {
                var r = t1;
                (r =
                  ((4278255360 &
                    (r =
                      ((4042322160 &
                        (r =
                          ((3435973836 &
                            (r =
                              ((2863311530 & r) >>> 1) |
                              ((1431655765 & r) << 1))) >>>
                            2) |
                          ((858993459 & r) << 2))) >>>
                        4) |
                      ((252645135 & r) << 4))) >>>
                    8) |
                  ((16711935 & r) << 8)),
                  (e.rev15[t1] = ((r >>> 16) | (r << 16)) >>> 17);
              }
              function pushV(e, t1, r) {
                for (; 0 != t1--; ) e.push(0, r);
              }
              for (t1 = 0; t1 < 32; t1++)
                (e.ldef[t1] = (e.of0[t1] << 3) | e.exb[t1]),
                  (e.ddef[t1] = (e.df0[t1] << 4) | e.dxb[t1]);
              pushV(e.fltree, 144, 8),
                pushV(e.fltree, 112, 9),
                pushV(e.fltree, 24, 7),
                pushV(e.fltree, 8, 8),
                UZIP.F.makeCodes(e.fltree, 9),
                UZIP.F.codes2map(e.fltree, 9, e.flmap),
                UZIP.F.revCodes(e.fltree, 9),
                pushV(e.fdtree, 32, 5),
                UZIP.F.makeCodes(e.fdtree, 5),
                UZIP.F.codes2map(e.fdtree, 5, e.fdmap),
                UZIP.F.revCodes(e.fdtree, 5),
                pushV(e.itree, 19, 0),
                pushV(e.ltree, 286, 0),
                pushV(e.dtree, 30, 0),
                pushV(e.ttree, 320, 0);
            })();
        })();
        var UZIP = _mergeNamespaces({ __proto__: null, default: e }, [e]);
        let UPNG = (function () {
          var e = {
            nextZero(e, t1) {
              for (; 0 != e[t1]; ) t1++;
              return t1;
            },
            readUshort: (e, t1) => (e[t1] << 8) | e[t1 + 1],
            writeUshort(e, t1, r) {
              (e[t1] = (r >> 8) & 255), (e[t1 + 1] = 255 & r);
            },
            readUint: (e, t1) =>
              16777216 * e[t1] +
              ((e[t1 + 1] << 16) | (e[t1 + 2] << 8) | e[t1 + 3]),
            writeUint(e, t1, r) {
              (e[t1] = (r >> 24) & 255),
                (e[t1 + 1] = (r >> 16) & 255),
                (e[t1 + 2] = (r >> 8) & 255),
                (e[t1 + 3] = 255 & r);
            },
            readASCII(e, t1, r) {
              let i = '';
              for (let o = 0; o < r; o++) i += String.fromCharCode(e[t1 + o]);
              return i;
            },
            writeASCII(e, t1, r) {
              for (let i = 0; i < r.length; i++) e[t1 + i] = r.charCodeAt(i);
            },
            readBytes(e, t1, r) {
              let i = [];
              for (let o = 0; o < r; o++) i.push(e[t1 + o]);
              return i;
            },
            pad: (e) => (e.length < 2 ? `0${e}` : e),
            readUTF8(t1, r, i) {
              let o,
                a = '';
              for (let o = 0; o < i; o++)
                a += `%${e.pad(t1[r + o].toString(16))}`;
              try {
                o = decodeURIComponent(a);
              } catch (o) {
                return e.readASCII(t1, r, i);
              }
              return o;
            },
          };
          function decodeImage(t1, r, i, o) {
            let a = r * i,
              f = Math.ceil((r * _getBPP(o)) / 8),
              l = new Uint8Array(4 * a),
              c = new Uint32Array(l.buffer),
              { ctype: u } = o,
              { depth: h } = o,
              d = e.readUshort;
            if (6 == u) {
              let e = a << 2;
              if (8 == h)
                for (var A = 0; A < e; A += 4)
                  (l[A] = t1[A]),
                    (l[A + 1] = t1[A + 1]),
                    (l[A + 2] = t1[A + 2]),
                    (l[A + 3] = t1[A + 3]);
              if (16 == h) for (A = 0; A < e; A++) l[A] = t1[A << 1];
            } else if (2 == u) {
              let e = o.tabs.tRNS;
              if (null == e) {
                if (8 == h)
                  for (A = 0; A < a; A++) {
                    var g = 3 * A;
                    c[A] =
                      -16777216 | (t1[g + 2] << 16) | (t1[g + 1] << 8) | t1[g];
                  }
                if (16 == h)
                  for (A = 0; A < a; A++)
                    (g = 6 * A),
                      (c[A] =
                        -16777216 |
                        (t1[g + 4] << 16) |
                        (t1[g + 2] << 8) |
                        t1[g]);
              } else {
                var p = e[0];
                let r = e[1],
                  i = e[2];
                if (8 == h)
                  for (A = 0; A < a; A++) {
                    var m = A << 2;
                    (g = 3 * A),
                      (c[A] =
                        -16777216 |
                        (t1[g + 2] << 16) |
                        (t1[g + 1] << 8) |
                        t1[g]),
                      t1[g] == p &&
                        t1[g + 1] == r &&
                        t1[g + 2] == i &&
                        (l[m + 3] = 0);
                  }
                if (16 == h)
                  for (A = 0; A < a; A++)
                    (m = A << 2),
                      (g = 6 * A),
                      (c[A] =
                        -16777216 |
                        (t1[g + 4] << 16) |
                        (t1[g + 2] << 8) |
                        t1[g]),
                      d(t1, g) == p &&
                        d(t1, g + 2) == r &&
                        d(t1, g + 4) == i &&
                        (l[m + 3] = 0);
              }
            } else if (3 == u) {
              let e = o.tabs.PLTE,
                s = o.tabs.tRNS,
                c = s ? s.length : 0;
              if (1 == h)
                for (var E, w = 0; w < i; w++) {
                  var v = w * f,
                    b = w * r;
                  for (A = 0; A < r; A++) {
                    m = (b + A) << 2;
                    var y =
                      3 * (E = (t1[v + (A >> 3)] >> (7 - ((7 & A) << 0))) & 1);
                    (l[m] = e[y]),
                      (l[m + 1] = e[y + 1]),
                      (l[m + 2] = e[y + 2]),
                      (l[m + 3] = E < c ? s[E] : 255);
                  }
                }
              if (2 == h)
                for (w = 0; w < i; w++)
                  for (v = w * f, b = w * r, A = 0; A < r; A++)
                    (m = (b + A) << 2),
                      (y =
                        3 *
                        (E = (t1[v + (A >> 2)] >> (6 - ((3 & A) << 1))) & 3)),
                      (l[m] = e[y]),
                      (l[m + 1] = e[y + 1]),
                      (l[m + 2] = e[y + 2]),
                      (l[m + 3] = E < c ? s[E] : 255);
              if (4 == h)
                for (w = 0; w < i; w++)
                  for (v = w * f, b = w * r, A = 0; A < r; A++)
                    (m = (b + A) << 2),
                      (y =
                        3 *
                        (E = (t1[v + (A >> 1)] >> (4 - ((1 & A) << 2))) & 15)),
                      (l[m] = e[y]),
                      (l[m + 1] = e[y + 1]),
                      (l[m + 2] = e[y + 2]),
                      (l[m + 3] = E < c ? s[E] : 255);
              if (8 == h)
                for (A = 0; A < a; A++)
                  (m = A << 2),
                    (y = 3 * (E = t1[A])),
                    (l[m] = e[y]),
                    (l[m + 1] = e[y + 1]),
                    (l[m + 2] = e[y + 2]),
                    (l[m + 3] = E < c ? s[E] : 255);
            } else if (4 == u) {
              if (8 == h)
                for (A = 0; A < a; A++) {
                  m = A << 2;
                  var _,
                    F = t1[(_ = A << 1)];
                  (l[m] = F),
                    (l[m + 1] = F),
                    (l[m + 2] = F),
                    (l[m + 3] = t1[_ + 1]);
                }
              if (16 == h)
                for (A = 0; A < a; A++)
                  (m = A << 2),
                    (F = t1[(_ = A << 2)]),
                    (l[m] = F),
                    (l[m + 1] = F),
                    (l[m + 2] = F),
                    (l[m + 3] = t1[_ + 2]);
            } else if (0 == u)
              for (p = o.tabs.tRNS ? o.tabs.tRNS : -1, w = 0; w < i; w++) {
                let e = w * f,
                  i = w * r;
                if (1 == h)
                  for (var B = 0; B < r; B++) {
                    var U =
                      (F = 255 * ((t1[e + (B >>> 3)] >>> (7 - (7 & B))) & 1)) ==
                      255 * p
                        ? 0
                        : 255;
                    c[i + B] = (U << 24) | (F << 16) | (F << 8) | F;
                  }
                else if (2 == h)
                  for (B = 0; B < r; B++)
                    (U =
                      (F =
                        85 *
                        ((t1[e + (B >>> 2)] >>> (6 - ((3 & B) << 1))) & 3)) ==
                      85 * p
                        ? 0
                        : 255),
                      (c[i + B] = (U << 24) | (F << 16) | (F << 8) | F);
                else if (4 == h)
                  for (B = 0; B < r; B++)
                    (U =
                      (F =
                        17 *
                        ((t1[e + (B >>> 1)] >>> (4 - ((1 & B) << 2))) & 15)) ==
                      17 * p
                        ? 0
                        : 255),
                      (c[i + B] = (U << 24) | (F << 16) | (F << 8) | F);
                else if (8 == h)
                  for (B = 0; B < r; B++)
                    (U = (F = t1[e + B]) == p ? 0 : 255),
                      (c[i + B] = (U << 24) | (F << 16) | (F << 8) | F);
                else if (16 == h)
                  for (B = 0; B < r; B++)
                    (F = t1[e + (B << 1)]),
                      (U = d(t1, e + (B << 1)) == p ? 0 : 255),
                      (c[i + B] = (U << 24) | (F << 16) | (F << 8) | F);
              }
            return l;
          }
          function _decompress(e, r, i, o) {
            let f = new Uint8Array(
              (Math.ceil((i * _getBPP(e)) / 8) + 1 + e.interlace) * o,
            );
            return (
              (r = e.tabs.CgBI ? t1(r, f) : _inflate(r, f)),
              0 == e.interlace
                ? (r = _filterZero(r, e, 0, i, o))
                : 1 == e.interlace &&
                  (r = (function _readInterlace(e, t1) {
                    let r = t1.width,
                      i = t1.height,
                      o = _getBPP(t1),
                      a = o >> 3,
                      s = Math.ceil((r * o) / 8),
                      f = new Uint8Array(i * s),
                      l = 0,
                      c = [0, 0, 4, 0, 2, 0, 1],
                      u = [0, 4, 0, 2, 0, 1, 0],
                      h = [8, 8, 8, 4, 4, 2, 2],
                      d = [8, 8, 4, 4, 2, 2, 1],
                      A = 0;
                    for (; A < 7; ) {
                      let p = h[A],
                        m = d[A],
                        w = 0,
                        v = 0,
                        b = c[A];
                      for (; b < i; ) (b += p), v++;
                      let y = u[A];
                      for (; y < r; ) (y += m), w++;
                      let E = Math.ceil((w * o) / 8);
                      _filterZero(e, t1, l, w, v);
                      let F = 0,
                        _ = c[A];
                      for (; _ < i; ) {
                        let t1 = u[A],
                          i = (l + F * E) << 3;
                        for (; t1 < r; ) {
                          var g;
                          if (
                            (1 == o &&
                              ((g = ((g = e[i >> 3]) >> (7 - (7 & i))) & 1),
                              (f[_ * s + (t1 >> 3)] |=
                                g << (7 - ((7 & t1) << 0)))),
                            2 == o &&
                              ((g = ((g = e[i >> 3]) >> (6 - (7 & i))) & 3),
                              (f[_ * s + (t1 >> 2)] |=
                                g << (6 - ((3 & t1) << 1)))),
                            4 == o &&
                              ((g = ((g = e[i >> 3]) >> (4 - (7 & i))) & 15),
                              (f[_ * s + (t1 >> 1)] |=
                                g << (4 - ((1 & t1) << 2)))),
                            o >= 8)
                          ) {
                            let r = _ * s + t1 * a;
                            for (let t1 = 0; t1 < a; t1++)
                              f[r + t1] = e[(i >> 3) + t1];
                          }
                          (i += o), (t1 += m);
                        }
                        F++, (_ += p);
                      }
                      w * v != 0 && (l += v * (1 + E)), (A += 1);
                    }
                    return f;
                  })(r, e)),
              r
            );
          }
          function _inflate(e, r) {
            return t1(new Uint8Array(e.buffer, 2, e.length - 6), r);
          }
          var t1 = (function () {
            let e = { H: {} };
            return (
              (e.H.N = function (t1, r) {
                let i = Uint8Array,
                  o,
                  a,
                  s = 0,
                  f = 0,
                  l = 0,
                  c = 0,
                  u = 0,
                  h = 0,
                  d = 0,
                  A = 0,
                  g = 0;
                if (3 == t1[0] && 0 == t1[1]) return r || new i(0);
                let p = e.H,
                  m = p.b,
                  w = p.e,
                  v = p.R,
                  b = p.n,
                  y = p.A,
                  E = p.Z,
                  F = p.m,
                  _ = null == r;
                for (_ && (r = new i((t1.length >>> 2) << 5)); 0 == s; )
                  if (
                    ((s = m(t1, g, 1)), (f = m(t1, g + 1, 2)), (g += 3), 0 != f)
                  ) {
                    if (
                      (_ && (r = e.H.W(r, A + 131072)),
                      1 == f && ((o = F.J), (a = F.h), (h = 511), (d = 31)),
                      2 == f)
                    ) {
                      (l = w(t1, g, 5) + 257),
                        (c = w(t1, g + 5, 5) + 1),
                        (u = w(t1, g + 10, 4) + 4),
                        (g += 14);
                      let e = 1;
                      for (var B = 0; B < 38; B += 2)
                        (F.Q[B] = 0), (F.Q[B + 1] = 0);
                      for (B = 0; B < u; B++) {
                        let r = w(t1, g + 3 * B, 3);
                        (F.Q[1 + (F.X[B] << 1)] = r), r > e && (e = r);
                      }
                      (g += 3 * u),
                        b(F.Q, e),
                        y(F.Q, e, F.u),
                        (o = F.w),
                        (a = F.d),
                        (g = v(F.u, (1 << e) - 1, l + c, t1, g, F.v));
                      let r = p.V(F.v, 0, l, F.C);
                      h = (1 << r) - 1;
                      let i = p.V(F.v, l, c, F.D);
                      (d = (1 << i) - 1),
                        b(F.C, r),
                        y(F.C, r, o),
                        b(F.D, i),
                        y(F.D, i, a);
                    }
                    for (;;) {
                      let e = o[E(t1, g) & h];
                      g += 15 & e;
                      let i = e >>> 4;
                      if (i >>> 8 == 0) r[A++] = i;
                      else {
                        if (256 == i) break;
                        {
                          let e = A + i - 254;
                          if (i > 264) {
                            let r = F.q[i - 257];
                            (e = A + (r >>> 3) + w(t1, g, 7 & r)), (g += 7 & r);
                          }
                          let o = a[E(t1, g) & d];
                          g += 15 & o;
                          let s = o >>> 4,
                            f = F.c[s],
                            l = (f >>> 4) + m(t1, g, 15 & f);
                          for (g += 15 & f; A < e; )
                            (r[A] = r[A++ - l]),
                              (r[A] = r[A++ - l]),
                              (r[A] = r[A++ - l]),
                              (r[A] = r[A++ - l]);
                          A = e;
                        }
                      }
                    }
                  } else {
                    0 != (7 & g) && (g += 8 - (7 & g));
                    let o = 4 + (g >>> 3),
                      a = t1[o - 4] | (t1[o - 3] << 8);
                    _ && (r = e.H.W(r, A + a)),
                      r.set(new i(t1.buffer, t1.byteOffset + o, a), A),
                      (g = (o + a) << 3),
                      (A += a);
                  }
                return r.length == A ? r : r.slice(0, A);
              }),
              (e.H.W = function (e, t1) {
                let r = e.length;
                if (t1 <= r) return e;
                let i = new Uint8Array(r << 1);
                return i.set(e, 0), i;
              }),
              (e.H.R = function (t1, r, i, o, a, s) {
                let f = e.H.e,
                  l = e.H.Z,
                  c = 0;
                for (; c < i; ) {
                  let e = t1[l(o, a) & r];
                  a += 15 & e;
                  let i = e >>> 4;
                  if (i <= 15) (s[c] = i), c++;
                  else {
                    let e = 0,
                      t1 = 0;
                    16 == i
                      ? ((t1 = 3 + f(o, a, 2)), (a += 2), (e = s[c - 1]))
                      : 17 == i
                        ? ((t1 = 3 + f(o, a, 3)), (a += 3))
                        : 18 == i && ((t1 = 11 + f(o, a, 7)), (a += 7));
                    let r = c + t1;
                    for (; c < r; ) (s[c] = e), c++;
                  }
                }
                return a;
              }),
              (e.H.V = function (e, t1, r, i) {
                let o = 0,
                  a = 0,
                  s = i.length >>> 1;
                for (; a < r; ) {
                  let r = e[a + t1];
                  (i[a << 1] = 0), (i[1 + (a << 1)] = r), r > o && (o = r), a++;
                }
                for (; a < s; ) (i[a << 1] = 0), (i[1 + (a << 1)] = 0), a++;
                return o;
              }),
              (e.H.n = function (t1, r) {
                let a, s, f, l;
                let i = e.H.m,
                  o = t1.length,
                  c = i.j;
                for (var u = 0; u <= r; u++) c[u] = 0;
                for (u = 1; u < o; u += 2) c[t1[u]]++;
                let h = i.K;
                for (a = 0, c[0] = 0, s = 1; s <= r; s++)
                  (a = (a + c[s - 1]) << 1), (h[s] = a);
                for (f = 0; f < o; f += 2)
                  0 != (l = t1[f + 1]) && ((t1[f] = h[l]), h[l]++);
              }),
              (e.H.A = function (t1, r, i) {
                let o = t1.length,
                  a = e.H.m.r;
                for (let e = 0; e < o; e += 2)
                  if (0 != t1[e + 1]) {
                    let o = e >> 1,
                      s = t1[e + 1],
                      f = (o << 4) | s,
                      l = r - s,
                      c = t1[e] << l,
                      u = c + (1 << l);
                    for (; c != u; ) (i[a[c] >>> (15 - r)] = f), c++;
                  }
              }),
              (e.H.l = function (t1, r) {
                let i = e.H.m.r,
                  o = 15 - r;
                for (let e = 0; e < t1.length; e += 2) {
                  let a = t1[e] << (r - t1[e + 1]);
                  t1[e] = i[a] >>> o;
                }
              }),
              (e.H.M = function (e, t1, r) {
                r <<= 7 & t1;
                let i = t1 >>> 3;
                (e[i] |= r), (e[i + 1] |= r >>> 8);
              }),
              (e.H.I = function (e, t1, r) {
                r <<= 7 & t1;
                let i = t1 >>> 3;
                (e[i] |= r), (e[i + 1] |= r >>> 8), (e[i + 2] |= r >>> 16);
              }),
              (e.H.e = function (e, t1, r) {
                return (
                  ((e[t1 >>> 3] | (e[1 + (t1 >>> 3)] << 8)) >>> (7 & t1)) &
                  ((1 << r) - 1)
                );
              }),
              (e.H.b = function (e, t1, r) {
                return (
                  ((e[t1 >>> 3] |
                    (e[1 + (t1 >>> 3)] << 8) |
                    (e[2 + (t1 >>> 3)] << 16)) >>>
                    (7 & t1)) &
                  ((1 << r) - 1)
                );
              }),
              (e.H.Z = function (e, t1) {
                return (
                  (e[t1 >>> 3] |
                    (e[1 + (t1 >>> 3)] << 8) |
                    (e[2 + (t1 >>> 3)] << 16)) >>>
                  (7 & t1)
                );
              }),
              (e.H.i = function (e, t1) {
                return (
                  (e[t1 >>> 3] |
                    (e[1 + (t1 >>> 3)] << 8) |
                    (e[2 + (t1 >>> 3)] << 16) |
                    (e[3 + (t1 >>> 3)] << 24)) >>>
                  (7 & t1)
                );
              }),
              (e.H.m = (function () {
                let e = Uint16Array,
                  t1 = Uint32Array;
                return {
                  K: new e(16),
                  j: new e(16),
                  X: [
                    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14,
                    1, 15,
                  ],
                  S: [
                    3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35,
                    43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999,
                    999, 999,
                  ],
                  T: [
                    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3,
                    4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0,
                  ],
                  q: new e(32),
                  p: [
                    1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
                    257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
                    8193, 12289, 16385, 24577, 65535, 65535,
                  ],
                  z: [
                    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8,
                    9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0,
                  ],
                  c: new t1(32),
                  J: new e(512),
                  _: [],
                  h: new e(32),
                  $: [],
                  w: new e(32768),
                  C: [],
                  v: [],
                  d: new e(32768),
                  D: [],
                  u: new e(512),
                  Q: [],
                  r: new e(32768),
                  s: new t1(286),
                  Y: new t1(30),
                  a: new t1(19),
                  t: new t1(15e3),
                  k: new e(65536),
                  g: new e(32768),
                };
              })()),
              (function () {
                let t1 = e.H.m;
                for (var r = 0; r < 32768; r++) {
                  let e = r;
                  (e =
                    ((4278255360 &
                      (e =
                        ((4042322160 &
                          (e =
                            ((3435973836 &
                              (e =
                                ((2863311530 & e) >>> 1) |
                                ((1431655765 & e) << 1))) >>>
                              2) |
                            ((858993459 & e) << 2))) >>>
                          4) |
                        ((252645135 & e) << 4))) >>>
                      8) |
                    ((16711935 & e) << 8)),
                    (t1.r[r] = ((e >>> 16) | (e << 16)) >>> 17);
                }
                function n(e, t1, r) {
                  for (; 0 != t1--; ) e.push(0, r);
                }
                for (r = 0; r < 32; r++)
                  (t1.q[r] = (t1.S[r] << 3) | t1.T[r]),
                    (t1.c[r] = (t1.p[r] << 4) | t1.z[r]);
                n(t1._, 144, 8),
                  n(t1._, 112, 9),
                  n(t1._, 24, 7),
                  n(t1._, 8, 8),
                  e.H.n(t1._, 9),
                  e.H.A(t1._, 9, t1.J),
                  e.H.l(t1._, 9),
                  n(t1.$, 32, 5),
                  e.H.n(t1.$, 5),
                  e.H.A(t1.$, 5, t1.h),
                  e.H.l(t1.$, 5),
                  n(t1.Q, 19, 0),
                  n(t1.C, 286, 0),
                  n(t1.D, 30, 0),
                  n(t1.v, 320, 0);
              })(),
              e.H.N
            );
          })();
          function _getBPP(e) {
            return [1, null, 3, 1, 2, null, 4][e.ctype] * e.depth;
          }
          function _filterZero(e, t1, r, i, o) {
            let f,
              l,
              a = _getBPP(t1),
              s = Math.ceil((i * a) / 8);
            a = Math.ceil(a / 8);
            let c = e[r],
              u = 0;
            if ((c > 1 && (e[r] = [0, 0, 1][c - 2]), 3 == c))
              for (u = a; u < s; u++)
                e[u + 1] = (e[u + 1] + (e[u + 1 - a] >>> 1)) & 255;
            for (let t1 = 0; t1 < o; t1++)
              if (
                ((c = e[(l = (f = r + t1 * s) + t1 + 1) - 1]), (u = 0), 0 == c)
              )
                for (; u < s; u++) e[f + u] = e[l + u];
              else if (1 == c) {
                for (; u < a; u++) e[f + u] = e[l + u];
                for (; u < s; u++) e[f + u] = e[l + u] + e[f + u - a];
              } else if (2 == c)
                for (; u < s; u++) e[f + u] = e[l + u] + e[f + u - s];
              else if (3 == c) {
                for (; u < a; u++) e[f + u] = e[l + u] + (e[f + u - s] >>> 1);
                for (; u < s; u++)
                  e[f + u] = e[l + u] + ((e[f + u - s] + e[f + u - a]) >>> 1);
              } else {
                for (; u < a; u++)
                  e[f + u] = e[l + u] + _paeth(0, e[f + u - s], 0);
                for (; u < s; u++)
                  e[f + u] =
                    e[l + u] +
                    _paeth(e[f + u - a], e[f + u - s], e[f + u - a - s]);
              }
            return e;
          }
          function _paeth(e, t1, r) {
            let i = e + t1 - r,
              o = i - e,
              a = i - t1,
              s = i - r;
            return o * o <= a * a && o * o <= s * s
              ? e
              : a * a <= s * s
                ? t1
                : r;
          }
          function _IHDR(t1, r, i) {
            (i.width = e.readUint(t1, r)),
              (r += 4),
              (i.height = e.readUint(t1, r)),
              (r += 4),
              (i.depth = t1[r]),
              r++,
              (i.ctype = t1[r]),
              r++,
              (i.compress = t1[r]),
              r++,
              (i.filter = t1[r]),
              r++,
              (i.interlace = t1[r]),
              r++;
          }
          function _copyTile(e, t1, r, i, o, a, s, f, l) {
            let c = Math.min(t1, o),
              u = Math.min(r, a),
              h = 0,
              d = 0;
            for (let r = 0; r < u; r++)
              for (let a = 0; a < c; a++)
                if (
                  (s >= 0 && f >= 0
                    ? ((h = (r * t1 + a) << 2),
                      (d = ((f + r) * o + s + a) << 2))
                    : ((h = ((-f + r) * t1 - s + a) << 2),
                      (d = (r * o + a) << 2)),
                  0 == l)
                )
                  (i[d] = e[h]),
                    (i[d + 1] = e[h + 1]),
                    (i[d + 2] = e[h + 2]),
                    (i[d + 3] = e[h + 3]);
                else if (1 == l) {
                  var A = e[h + 3] * (1 / 255),
                    g = e[h] * A,
                    p = e[h + 1] * A,
                    m = e[h + 2] * A,
                    w = i[d + 3] * (1 / 255),
                    v = i[d] * w,
                    b = i[d + 1] * w,
                    y = i[d + 2] * w;
                  let t1 = 1 - A,
                    r = A + w * t1,
                    o = 0 == r ? 0 : 1 / r;
                  (i[d + 3] = 255 * r),
                    (i[d + 0] = (g + v * t1) * o),
                    (i[d + 1] = (p + b * t1) * o),
                    (i[d + 2] = (m + y * t1) * o);
                } else if (2 == l)
                  (A = e[h + 3]),
                    (g = e[h]),
                    (p = e[h + 1]),
                    (m = e[h + 2]),
                    (w = i[d + 3]),
                    (v = i[d]),
                    (b = i[d + 1]),
                    (y = i[d + 2]),
                    A == w && g == v && p == b && m == y
                      ? ((i[d] = 0),
                        (i[d + 1] = 0),
                        (i[d + 2] = 0),
                        (i[d + 3] = 0))
                      : ((i[d] = g),
                        (i[d + 1] = p),
                        (i[d + 2] = m),
                        (i[d + 3] = A));
                else if (3 == l) {
                  if (
                    ((A = e[h + 3]),
                    (g = e[h]),
                    (p = e[h + 1]),
                    (m = e[h + 2]),
                    (w = i[d + 3]),
                    (v = i[d]),
                    (b = i[d + 1]),
                    (y = i[d + 2]),
                    A == w && g == v && p == b && m == y)
                  )
                    continue;
                  if (A < 220 && w > 20) return !1;
                }
            return !0;
          }
          return {
            decode: function decode(r) {
              let i = new Uint8Array(r),
                o = 8,
                s = e.readUshort,
                f = e.readUint,
                l = { tabs: {}, frames: [] },
                c = new Uint8Array(i.length),
                u,
                h = 0,
                d = 0,
                A = [137, 80, 78, 71, 13, 10, 26, 10];
              for (var E, g = 0; g < 8; g++)
                if (i[g] != A[g]) throw 'The input is not a PNG file!';
              for (; o < i.length; ) {
                let e1 = e.readUint(i, o);
                o += 4;
                let r = e.readASCII(i, o, 4);
                if (((o += 4), 'IHDR' == r)) _IHDR(i, o, l);
                else if ('iCCP' == r) {
                  for (var y, p = o; 0 != i[p]; ) p++;
                  e.readASCII(i, o, p - o), i[p + 1];
                  let s = i.slice(p + 2, o + e1),
                    f = null;
                  try {
                    f = _inflate(s);
                  } catch (e) {
                    f = t1(s);
                  }
                  l.tabs[r] = f;
                } else if ('CgBI' == r) l.tabs[r] = i.slice(o, o + 4);
                else if ('IDAT' == r) {
                  for (g = 0; g < e1; g++) c[h + g] = i[o + g];
                  h += e1;
                } else if ('acTL' == r)
                  (l.tabs[r] = { num_frames: f(i, o), num_plays: f(i, o + 4) }),
                    (u = new Uint8Array(i.length));
                else if ('fcTL' == r) {
                  0 != d &&
                    (((E = l.frames[l.frames.length - 1]).data = _decompress(
                      l,
                      u.slice(0, d),
                      E.rect.width,
                      E.rect.height,
                    )),
                    (d = 0));
                  let e = {
                      x: f(i, o + 12),
                      y: f(i, o + 16),
                      width: f(i, o + 4),
                      height: f(i, o + 8),
                    },
                    t1 = s(i, o + 22),
                    r = {
                      rect: e,
                      delay: Math.round(
                        1e3 * (t1 = s(i, o + 20) / (0 == t1 ? 100 : t1)),
                      ),
                      dispose: i[o + 24],
                      blend: i[o + 25],
                    };
                  l.frames.push(r);
                } else if ('fdAT' == r) {
                  for (g = 0; g < e1 - 4; g++) u[d + g] = i[o + g + 4];
                  d += e1 - 4;
                } else if ('pHYs' == r)
                  l.tabs[r] = [
                    e.readUint(i, o),
                    e.readUint(i, o + 4),
                    i[o + 8],
                  ];
                else if ('cHRM' == r)
                  for (g = 0, l.tabs[r] = []; g < 8; g++)
                    l.tabs[r].push(e.readUint(i, o + 4 * g));
                else if ('tEXt' == r || 'zTXt' == r) {
                  null == l.tabs[r] && (l.tabs[r] = {});
                  var m = e.nextZero(i, o),
                    w = e.readASCII(i, o, m - o),
                    v = o + e1 - m - 1;
                  if ('tEXt' == r) y = e.readASCII(i, m + 1, v);
                  else {
                    var b = _inflate(i.slice(m + 2, m + 2 + v));
                    y = e.readUTF8(b, 0, b.length);
                  }
                  l.tabs[r][w] = y;
                } else if ('iTXt' == r) {
                  null == l.tabs[r] && (l.tabs[r] = {}),
                    (m = 0),
                    (p = o),
                    (m = e.nextZero(i, p)),
                    (w = e.readASCII(i, p, m - p));
                  let t1 = i[(p = m + 1)];
                  i[p + 1],
                    (p += 2),
                    (m = e.nextZero(i, p)),
                    e.readASCII(i, p, m - p),
                    (p = m + 1),
                    (m = e.nextZero(i, p)),
                    e.readUTF8(i, p, m - p),
                    (v = e1 - ((p = m + 1) - o)),
                    0 == t1
                      ? (y = e.readUTF8(i, p, v))
                      : ((b = _inflate(i.slice(p, p + v))),
                        (y = e.readUTF8(b, 0, b.length))),
                    (l.tabs[r][w] = y);
                } else if ('PLTE' == r) l.tabs[r] = e.readBytes(i, o, e1);
                else if ('hIST' == r) {
                  let e = l.tabs.PLTE.length / 3;
                  for (g = 0, l.tabs[r] = []; g < e; g++)
                    l.tabs[r].push(s(i, o + 2 * g));
                } else if ('tRNS' == r)
                  3 == l.ctype
                    ? (l.tabs[r] = e.readBytes(i, o, e1))
                    : 0 == l.ctype
                      ? (l.tabs[r] = s(i, o))
                      : 2 == l.ctype &&
                        (l.tabs[r] = [s(i, o), s(i, o + 2), s(i, o + 4)]);
                else if ('gAMA' == r) l.tabs[r] = e.readUint(i, o) / 1e5;
                else if ('sRGB' == r) l.tabs[r] = i[o];
                else if ('bKGD' == r)
                  0 == l.ctype || 4 == l.ctype
                    ? (l.tabs[r] = [s(i, o)])
                    : 2 == l.ctype || 6 == l.ctype
                      ? (l.tabs[r] = [s(i, o), s(i, o + 2), s(i, o + 4)])
                      : 3 == l.ctype && (l.tabs[r] = i[o]);
                else if ('IEND' == r) break;
                (o += e1), e.readUint(i, o), (o += 4);
              }
              return (
                0 != d &&
                  ((E = l.frames[l.frames.length - 1]).data = _decompress(
                    l,
                    u.slice(0, d),
                    E.rect.width,
                    E.rect.height,
                  )),
                (l.data = _decompress(l, c, l.width, l.height)),
                delete l.compress,
                delete l.interlace,
                delete l.filter,
                l
              );
            },
            toRGBA8: function toRGBA8(e) {
              let t1 = e.width,
                r = e.height;
              if (null == e.tabs.acTL)
                return [decodeImage(e.data, t1, r, e).buffer];
              let i = [];
              null == e.frames[0].data && (e.frames[0].data = e.data);
              let o = t1 * r * 4,
                a = new Uint8Array(o),
                s = new Uint8Array(o),
                f = new Uint8Array(o);
              for (let c = 0; c < e.frames.length; c++) {
                let u = e.frames[c],
                  h = u.rect.x,
                  d = u.rect.y,
                  A = u.rect.width,
                  g = u.rect.height,
                  p = decodeImage(u.data, A, g, e);
                if (0 != c) for (var l = 0; l < o; l++) f[l] = a[l];
                if (
                  (0 == u.blend
                    ? _copyTile(p, A, g, a, t1, r, h, d, 0)
                    : 1 == u.blend && _copyTile(p, A, g, a, t1, r, h, d, 1),
                  i.push(a.buffer.slice(0)),
                  0 == u.dispose)
                );
                else if (1 == u.dispose) _copyTile(s, A, g, a, t1, r, h, d, 0);
                else if (2 == u.dispose) for (l = 0; l < o; l++) a[l] = f[l];
              }
              return i;
            },
            _paeth: _paeth,
            _copyTile: _copyTile,
            _bin: e,
          };
        })();
        !(function () {
          let { _copyTile: e } = UPNG,
            { _bin: t1 } = UPNG,
            r = UPNG._paeth;
          var i = {
            table: (function () {
              let e = new Uint32Array(256);
              for (let t1 = 0; t1 < 256; t1++) {
                let r = t1;
                for (let e = 0; e < 8; e++)
                  1 & r ? (r = 3988292384 ^ (r >>> 1)) : (r >>>= 1);
                e[t1] = r;
              }
              return e;
            })(),
            update(e, t1, r, o) {
              for (let a = 0; a < o; a++)
                e = i.table[255 & (e ^ t1[r + a])] ^ (e >>> 8);
              return e;
            },
            crc: (e, t1, r) => 4294967295 ^ i.update(4294967295, e, t1, r),
          };
          function addErr(e, t1, r, i) {
            (t1[r] += (e[0] * i) >> 4),
              (t1[r + 1] += (e[1] * i) >> 4),
              (t1[r + 2] += (e[2] * i) >> 4),
              (t1[r + 3] += (e[3] * i) >> 4);
          }
          function N(e) {
            return Math.max(0, Math.min(255, e));
          }
          function D(e, t1) {
            let r = e[0] - t1[0],
              i = e[1] - t1[1],
              o = e[2] - t1[2],
              a = e[3] - t1[3];
            return r * r + i * i + o * o + a * a;
          }
          function dither(e, t1, r, i, o, a, s) {
            null == s && (s = 1);
            let f = i.length,
              l = [];
            for (var m, c = 0; c < f; c++) {
              let e = i[c];
              l.push([
                (e >>> 0) & 255,
                (e >>> 8) & 255,
                (e >>> 16) & 255,
                (e >>> 24) & 255,
              ]);
            }
            for (c = 0; c < f; c++) {
              let e = 4294967295;
              for (var u = 0, h = 0; h < f; h++) {
                var d = D(l[c], l[h]);
                h != c && d < e && ((e = d), (u = h));
              }
            }
            let A = new Uint32Array(o.buffer),
              g = new Int16Array(t1 * r * 4),
              p = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
            for (c = 0; c < p.length; c++)
              p[c] = 255 * ((p[c] + 0.5) / 16 - 0.5);
            for (let o = 0; o < r; o++)
              for (let w = 0; w < t1; w++) {
                (c = 4 * (o * t1 + w)),
                  2 != s
                    ? (m = [
                        N(e[c] + g[c]),
                        N(e[c + 1] + g[c + 1]),
                        N(e[c + 2] + g[c + 2]),
                        N(e[c + 3] + g[c + 3]),
                      ])
                    : ((d = p[4 * (3 & o) + (3 & w)]),
                      (m = [
                        N(e[c] + d),
                        N(e[c + 1] + d),
                        N(e[c + 2] + d),
                        N(e[c + 3] + d),
                      ])),
                  (u = 0);
                let v = 16777215;
                for (h = 0; h < f; h++) {
                  let e = D(m, l[h]);
                  e < v && ((v = e), (u = h));
                }
                let b = l[u],
                  y = [m[0] - b[0], m[1] - b[1], m[2] - b[2], m[3] - b[3]];
                1 == s &&
                  (w != t1 - 1 && addErr(y, g, c + 4, 7),
                  o != r - 1 &&
                    (0 != w && addErr(y, g, c + 4 * t1 - 4, 3),
                    addErr(y, g, c + 4 * t1, 5),
                    w != t1 - 1 && addErr(y, g, c + 4 * t1 + 4, 1))),
                  (a[c >> 2] = u),
                  (A[c >> 2] = i[u]);
              }
          }
          function _main(e, r, o, a, s) {
            null == s && (s = {});
            let { crc: f } = i,
              l = t1.writeUint,
              c = t1.writeUshort,
              u = t1.writeASCII,
              h = 8,
              d = e.frames.length > 1,
              A,
              g = !1,
              p = 33 + (d ? 20 : 0);
            if (
              (null != s.sRGB && (p += 13),
              null != s.pHYs && (p += 21),
              null != s.iCCP &&
                (p += 21 + (A = pako.deflate(s.iCCP)).length + 4),
              3 == e.ctype)
            ) {
              for (var m = e.plte.length, w = 0; w < m; w++)
                e.plte[w] >>> 24 != 255 && (g = !0);
              p += 8 + 3 * m + 4 + (g ? 8 + 1 * m + 4 : 0);
            }
            for (var v = 0; v < e.frames.length; v++)
              d && (p += 38),
                (p += (F = e.frames[v]).cimg.length + 12),
                0 != v && (p += 4);
            let b = new Uint8Array((p += 12)),
              y = [137, 80, 78, 71, 13, 10, 26, 10];
            for (w = 0; w < 8; w++) b[w] = y[w];
            if (
              (l(b, h, 13),
              u(b, (h += 4), 'IHDR'),
              l(b, (h += 4), r),
              l(b, (h += 4), o),
              (b[(h += 4)] = e.depth),
              (b[++h] = e.ctype),
              (b[++h] = 0),
              (b[++h] = 0),
              (b[++h] = 0),
              l(b, ++h, f(b, h - 17, 17)),
              (h += 4),
              null != s.sRGB &&
                (l(b, h, 1),
                u(b, (h += 4), 'sRGB'),
                (b[(h += 4)] = s.sRGB),
                l(b, ++h, f(b, h - 5, 5)),
                (h += 4)),
              null != s.iCCP)
            ) {
              let e = 13 + A.length;
              l(b, h, e),
                u(b, (h += 4), 'iCCP'),
                u(b, (h += 4), 'ICC profile'),
                (h += 13),
                b.set(A, h),
                l(b, (h += A.length), f(b, h - (e + 4), e + 4)),
                (h += 4);
            }
            if (
              (null != s.pHYs &&
                (l(b, h, 9),
                u(b, (h += 4), 'pHYs'),
                l(b, (h += 4), s.pHYs[0]),
                l(b, (h += 4), s.pHYs[1]),
                (b[(h += 4)] = s.pHYs[2]),
                l(b, ++h, f(b, h - 13, 13)),
                (h += 4)),
              d &&
                (l(b, h, 8),
                u(b, (h += 4), 'acTL'),
                l(b, (h += 4), e.frames.length),
                l(b, (h += 4), null != s.loop ? s.loop : 0),
                l(b, (h += 4), f(b, h - 12, 12)),
                (h += 4)),
              3 == e.ctype)
            ) {
              for (
                l(b, h, 3 * (m = e.plte.length)),
                  u(b, (h += 4), 'PLTE'),
                  h += 4,
                  w = 0;
                w < m;
                w++
              ) {
                let t1 = 3 * w,
                  r = e.plte[w],
                  i = 255 & r,
                  o = (r >>> 8) & 255,
                  a = (r >>> 16) & 255;
                (b[h + t1 + 0] = i), (b[h + t1 + 1] = o), (b[h + t1 + 2] = a);
              }
              if (
                (l(b, (h += 3 * m), f(b, h - 3 * m - 4, 3 * m + 4)),
                (h += 4),
                g)
              ) {
                for (
                  l(b, h, m), u(b, (h += 4), 'tRNS'), h += 4, w = 0;
                  w < m;
                  w++
                )
                  b[h + w] = (e.plte[w] >>> 24) & 255;
                l(b, (h += m), f(b, h - m - 4, m + 4)), (h += 4);
              }
            }
            let E = 0;
            for (v = 0; v < e.frames.length; v++) {
              var F = e.frames[v];
              d &&
                (l(b, h, 26),
                u(b, (h += 4), 'fcTL'),
                l(b, (h += 4), E++),
                l(b, (h += 4), F.rect.width),
                l(b, (h += 4), F.rect.height),
                l(b, (h += 4), F.rect.x),
                l(b, (h += 4), F.rect.y),
                c(b, (h += 4), a[v]),
                c(b, (h += 2), 1e3),
                (b[(h += 2)] = F.dispose),
                (b[++h] = F.blend),
                l(b, ++h, f(b, h - 30, 30)),
                (h += 4));
              let t1 = F.cimg;
              l(b, h, (m = t1.length) + (0 == v ? 0 : 4));
              let r = (h += 4);
              u(b, h, 0 == v ? 'IDAT' : 'fdAT'),
                (h += 4),
                0 != v && (l(b, h, E++), (h += 4)),
                b.set(t1, h),
                l(b, (h += m), f(b, r, h - r)),
                (h += 4);
            }
            return (
              l(b, h, 0),
              u(b, (h += 4), 'IEND'),
              l(b, (h += 4), f(b, h - 4, 4)),
              (h += 4),
              b.buffer
            );
          }
          function compressPNG(e, t1, r) {
            for (let i = 0; i < e.frames.length; i++) {
              let o = e.frames[i];
              o.rect.width;
              let a = o.rect.height,
                s = new Uint8Array(a * o.bpl + a);
              o.cimg = _filterZero(o.img, a, o.bpp, o.bpl, s, t1, r);
            }
          }
          function compress(t1, r, i, o, a) {
            let s = a[0],
              f = a[1],
              l = a[2],
              c = a[3],
              u = a[4],
              h = a[5],
              d = 6,
              A = 8,
              g = 255;
            for (var p = 0; p < t1.length; p++) {
              let e = new Uint8Array(t1[p]);
              for (var m = e.length, w = 0; w < m; w += 4) g &= e[w + 3];
            }
            let v = 255 != g,
              b = (function framize(t1, r, i, o, a, s) {
                let f = [];
                for (var A, l = 0; l < t1.length; l++) {
                  let h = new Uint8Array(t1[l]),
                    A = new Uint32Array(h.buffer),
                    g = 0,
                    p = 0,
                    m = r,
                    w = i,
                    v = o ? 1 : 0;
                  if (0 != l) {
                    let b = s || o || 1 == l || 0 != f[l - 2].dispose ? 1 : 2,
                      y = 0,
                      E = 1e9;
                    for (let e = 0; e < b; e++) {
                      var c,
                        u = new Uint8Array(t1[l - 1 - e]);
                      let o = new Uint32Array(t1[l - 1 - e]),
                        s = r,
                        f = i,
                        c1 = -1,
                        h = -1;
                      for (let e = 0; e < i; e++)
                        for (let t1 = 0; t1 < r; t1++)
                          A[(d = e * r + t1)] != o[d] &&
                            (t1 < s && (s = t1),
                            t1 > c1 && (c1 = t1),
                            e < f && (f = e),
                            e > h && (h = e));
                      -1 == c1 && (s = f = c1 = h = 0),
                        a && (1 == (1 & s) && s--, 1 == (1 & f) && f--);
                      let v = (c1 - s + 1) * (h - f + 1);
                      v < E &&
                        ((E = v),
                        (y = e),
                        (g = s),
                        (p = f),
                        (m = c1 - s + 1),
                        (w = h - f + 1));
                    }
                    (u = new Uint8Array(t1[l - 1 - y])),
                      1 == y && (f[l - 1].dispose = 2),
                      e(
                        u,
                        r,
                        i,
                        (c = new Uint8Array(m * w * 4)),
                        m,
                        w,
                        -g,
                        -p,
                        0,
                      ),
                      1 == (v = e(h, r, i, c, m, w, -g, -p, 3) ? 1 : 0)
                        ? _prepareDiff(h, r, i, c, {
                            x: g,
                            y: p,
                            width: m,
                            height: w,
                          })
                        : e(h, r, i, c, m, w, -g, -p, 0);
                  } else c = h.slice(0);
                  f.push({
                    rect: { x: g, y: p, width: m, height: w },
                    img: c,
                    blend: v,
                    dispose: 0,
                  });
                }
                if (o)
                  for (l = 0; l < f.length; l++) {
                    if (1 == (A = f[l]).blend) continue;
                    let e = A.rect,
                      o = f[l - 1].rect,
                      s = Math.min(e.x, o.x),
                      c = Math.min(e.y, o.y),
                      u = {
                        x: s,
                        y: c,
                        width: Math.max(e.x + e.width, o.x + o.width) - s,
                        height: Math.max(e.y + e.height, o.y + o.height) - c,
                      };
                    (f[l - 1].dispose = 1),
                      l - 1 != 0 && _updateFrame(t1, r, i, f, l - 1, u, a),
                      _updateFrame(t1, r, i, f, l, u, a);
                  }
                if (1 != t1.length)
                  for (var d = 0; d < f.length; d++)
                    (A = f[d]).rect.width, A.rect.height;
                return f;
              })(t1, r, i, s, f, l),
              y = {},
              E = [],
              F = [];
            if (0 != o) {
              let e = [];
              for (w = 0; w < b.length; w++) e.push(b[w].img.buffer);
              let r = quantize(
                (function concatRGBA(e) {
                  let t1 = 0;
                  for (var r = 0; r < e.length; r++) t1 += e[r].byteLength;
                  let i = new Uint8Array(t1),
                    o = 0;
                  for (r = 0; r < e.length; r++) {
                    let t1 = new Uint8Array(e[r]),
                      a = t1.length;
                    for (let e = 0; e < a; e += 4) {
                      let r = t1[e],
                        a = t1[e + 1],
                        s = t1[e + 2],
                        f = t1[e + 3];
                      0 == f && (r = a = s = 0),
                        (i[o + e] = r),
                        (i[o + e + 1] = a),
                        (i[o + e + 2] = s),
                        (i[o + e + 3] = f);
                    }
                    o += a;
                  }
                  return i.buffer;
                })(e),
                o,
              );
              for (w = 0; w < r.plte.length; w++) E.push(r.plte[w].est.rgba);
              let i = 0;
              for (w = 0; w < b.length; w++) {
                let e = (B = b[w]).img.length;
                var _ = new Uint8Array(r.inds.buffer, i >> 2, e >> 2);
                F.push(_);
                let t1 = new Uint8Array(r.abuf, i, e);
                h && dither(B.img, B.rect.width, B.rect.height, E, t1, _),
                  B.img.set(t1),
                  (i += e);
              }
            } else
              for (p = 0; p < b.length; p++) {
                var B = b[p];
                let e = new Uint32Array(B.img.buffer);
                var U = B.rect.width;
                for (
                  _ = new Uint8Array((m = e.length)), F.push(_), w = 0;
                  w < m;
                  w++
                ) {
                  let t1 = e[w];
                  if (0 != w && t1 == e[w - 1]) _[w] = _[w - 1];
                  else if (w > U && t1 == e[w - U]) _[w] = _[w - U];
                  else {
                    let e = y[t1];
                    if (
                      null == e &&
                      ((y[t1] = e = E.length), E.push(t1), E.length >= 300)
                    )
                      break;
                    _[w] = e;
                  }
                }
              }
            let C = E.length;
            for (
              C <= 256 &&
                0 == u &&
                (A = Math.max(
                  (A = C <= 2 ? 1 : C <= 4 ? 2 : C <= 16 ? 4 : 8),
                  c,
                )),
                p = 0;
              p < b.length;
              p++
            ) {
              (B = b[p]).rect.x, B.rect.y, (U = B.rect.width);
              let e = B.rect.height,
                t1 = B.img;
              new Uint32Array(t1.buffer);
              let r = 4 * U,
                i = 4;
              if (C <= 256 && 0 == u) {
                var I = new Uint8Array((r = Math.ceil((A * U) / 8)) * e);
                let o = F[p];
                for (let t1 = 0; t1 < e; t1++) {
                  w = t1 * r;
                  let e = t1 * U;
                  if (8 == A) for (var Q = 0; Q < U; Q++) I[w + Q] = o[e + Q];
                  else if (4 == A)
                    for (Q = 0; Q < U; Q++)
                      I[w + (Q >> 1)] |= o[e + Q] << (4 - 4 * (1 & Q));
                  else if (2 == A)
                    for (Q = 0; Q < U; Q++)
                      I[w + (Q >> 2)] |= o[e + Q] << (6 - 2 * (3 & Q));
                  else if (1 == A)
                    for (Q = 0; Q < U; Q++)
                      I[w + (Q >> 3)] |= o[e + Q] << (7 - 1 * (7 & Q));
                }
                (t1 = I), (d = 3), (i = 1);
              } else if (0 == v && 1 == b.length) {
                I = new Uint8Array(U * e * 3);
                let o = U * e;
                for (w = 0; w < o; w++) {
                  let e = 3 * w,
                    r = 4 * w;
                  (I[e] = t1[r]),
                    (I[e + 1] = t1[r + 1]),
                    (I[e + 2] = t1[r + 2]);
                }
                (t1 = I), (d = 2), (i = 3), (r = 3 * U);
              }
              (B.img = t1), (B.bpl = r), (B.bpp = i);
            }
            return { ctype: d, depth: A, plte: E, frames: b };
          }
          function _updateFrame(t1, r, i, o, a, s, f) {
            let l = Uint8Array,
              c = Uint32Array,
              u = new l(t1[a - 1]),
              h = new c(t1[a - 1]),
              d = a + 1 < t1.length ? new l(t1[a + 1]) : null,
              A = new l(t1[a]),
              g = new c(A.buffer),
              p = r,
              m = i,
              w = -1,
              v = -1;
            for (let e = 0; e < s.height; e++)
              for (let t1 = 0; t1 < s.width; t1++) {
                let i = s.x + t1,
                  f = s.y + e,
                  l = f * r + i,
                  c = g[l];
                0 == c ||
                  (0 == o[a - 1].dispose &&
                    h[l] == c &&
                    (null == d || 0 != d[4 * l + 3])) ||
                  (i < p && (p = i),
                  i > w && (w = i),
                  f < m && (m = f),
                  f > v && (v = f));
              }
            -1 == w && (p = m = w = v = 0),
              f && (1 == (1 & p) && p--, 1 == (1 & m) && m--),
              (s = { x: p, y: m, width: w - p + 1, height: v - m + 1 });
            let b = o[a];
            (b.rect = s),
              (b.blend = 1),
              (b.img = new Uint8Array(s.width * s.height * 4)),
              0 == o[a - 1].dispose
                ? (e(u, r, i, b.img, s.width, s.height, -s.x, -s.y, 0),
                  _prepareDiff(A, r, i, b.img, s))
                : e(A, r, i, b.img, s.width, s.height, -s.x, -s.y, 0);
          }
          function _prepareDiff(t1, r, i, o, a) {
            e(t1, r, i, o, a.width, a.height, -a.x, -a.y, 2);
          }
          function _filterZero(e, t1, r, i, o, a, s) {
            let f = [],
              l,
              c = [0, 1, 2, 3, 4];
            -1 != a ? (c = [a]) : (t1 * i > 5e5 || 1 == r) && (c = [0]),
              s && (l = { level: 0 });
            for (var h = 0; h < c.length; h++) {
              for (let a = 0; a < t1; a++) _filterLine(o, e, a, i, r, c[h]);
              f.push(UZIP.deflate(o, l));
            }
            let d,
              A = 1e9;
            for (h = 0; h < f.length; h++)
              f[h].length < A && ((d = h), (A = f[h].length));
            return f[d];
          }
          function _filterLine(e, t1, i, o, a, s) {
            let f = i * o,
              l = f + i;
            if (((e[l] = s), l++, 0 == s)) {
              if (o < 500) for (var c = 0; c < o; c++) e[l + c] = t1[f + c];
              else e.set(new Uint8Array(t1.buffer, f, o), l);
            } else if (1 == s) {
              for (c = 0; c < a; c++) e[l + c] = t1[f + c];
              for (c = a; c < o; c++)
                e[l + c] = (t1[f + c] - t1[f + c - a] + 256) & 255;
            } else if (0 == i) {
              for (c = 0; c < a; c++) e[l + c] = t1[f + c];
              if (2 == s) for (c = a; c < o; c++) e[l + c] = t1[f + c];
              if (3 == s)
                for (c = a; c < o; c++)
                  e[l + c] = (t1[f + c] - (t1[f + c - a] >> 1) + 256) & 255;
              if (4 == s)
                for (c = a; c < o; c++)
                  e[l + c] = (t1[f + c] - r(t1[f + c - a], 0, 0) + 256) & 255;
            } else {
              if (2 == s)
                for (c = 0; c < o; c++)
                  e[l + c] = (t1[f + c] + 256 - t1[f + c - o]) & 255;
              if (3 == s) {
                for (c = 0; c < a; c++)
                  e[l + c] = (t1[f + c] + 256 - (t1[f + c - o] >> 1)) & 255;
                for (c = a; c < o; c++)
                  e[l + c] =
                    (t1[f + c] + 256 - ((t1[f + c - o] + t1[f + c - a]) >> 1)) &
                    255;
              }
              if (4 == s) {
                for (c = 0; c < a; c++)
                  e[l + c] = (t1[f + c] + 256 - r(0, t1[f + c - o], 0)) & 255;
                for (c = a; c < o; c++)
                  e[l + c] =
                    (t1[f + c] +
                      256 -
                      r(t1[f + c - a], t1[f + c - o], t1[f + c - a - o])) &
                    255;
              }
            }
          }
          function quantize(e, t1) {
            let u;
            let r = new Uint8Array(e),
              i = r.slice(0),
              o = new Uint32Array(i.buffer),
              a = getKDtree(i, t1),
              s = a[0],
              f = a[1],
              l = r.length,
              c = new Uint8Array(l >> 2);
            if (r.length < 2e7)
              for (var h = 0; h < l; h += 4)
                (u = getNearest(
                  s,
                  (d = r[h] * (1 / 255)),
                  (A = r[h + 1] * (1 / 255)),
                  (g = r[h + 2] * (1 / 255)),
                  (p = r[h + 3] * (1 / 255)),
                )),
                  (c[h >> 2] = u.ind),
                  (o[h >> 2] = u.est.rgba);
            else
              for (h = 0; h < l; h += 4) {
                var d = r[h] * (1 / 255),
                  A = r[h + 1] * (1 / 255),
                  g = r[h + 2] * (1 / 255),
                  p = r[h + 3] * (1 / 255);
                for (u = s; u.left; )
                  u = 0 >= planeDst(u.est, d, A, g, p) ? u.left : u.right;
                (c[h >> 2] = u.ind), (o[h >> 2] = u.est.rgba);
              }
            return { abuf: i.buffer, inds: c, plte: f };
          }
          function getKDtree(e, t1, r) {
            null == r && (r = 1e-4);
            let i = new Uint32Array(e.buffer),
              o = {
                i0: 0,
                i1: e.length,
                bst: null,
                est: null,
                tdst: 0,
                left: null,
                right: null,
              };
            (o.bst = stats(e, o.i0, o.i1)), (o.est = estats(o.bst));
            let a = [o];
            for (; a.length < t1; ) {
              let t1 = 0,
                o = 0;
              for (var s = 0; s < a.length; s++)
                a[s].est.L > t1 && ((t1 = a[s].est.L), (o = s));
              if (t1 < r) break;
              let f = a[o],
                l = splitPixels(e, i, f.i0, f.i1, f.est.e, f.est.eMq255);
              if (f.i0 >= l || f.i1 <= l) {
                f.est.L = 0;
                continue;
              }
              let c = {
                i0: f.i0,
                i1: l,
                bst: null,
                est: null,
                tdst: 0,
                left: null,
                right: null,
              };
              (c.bst = stats(e, c.i0, c.i1)), (c.est = estats(c.bst));
              let u = {
                i0: l,
                i1: f.i1,
                bst: null,
                est: null,
                tdst: 0,
                left: null,
                right: null,
              };
              for (
                s = 0, u.bst = { R: [], m: [], N: f.bst.N - c.bst.N };
                s < 16;
                s++
              )
                u.bst.R[s] = f.bst.R[s] - c.bst.R[s];
              for (s = 0; s < 4; s++) u.bst.m[s] = f.bst.m[s] - c.bst.m[s];
              (u.est = estats(u.bst)),
                (f.left = c),
                (f.right = u),
                (a[o] = c),
                a.push(u);
            }
            for (
              a.sort((e, t1) => t1.bst.N - e.bst.N), s = 0;
              s < a.length;
              s++
            )
              a[s].ind = s;
            return [o, a];
          }
          function getNearest(e, t1, r, i, o) {
            if (null == e.left)
              return (
                (e.tdst = (function dist(e, t1, r, i, o) {
                  let a = t1 - e[0],
                    s = r - e[1],
                    f = i - e[2],
                    l = o - e[3];
                  return a * a + s * s + f * f + l * l;
                })(e.est.q, t1, r, i, o)),
                e
              );
            let a = planeDst(e.est, t1, r, i, o),
              s = e.left,
              f = e.right;
            a > 0 && ((s = e.right), (f = e.left));
            let l = getNearest(s, t1, r, i, o);
            if (l.tdst <= a * a) return l;
            let c = getNearest(f, t1, r, i, o);
            return c.tdst < l.tdst ? c : l;
          }
          function planeDst(e, t1, r, i, o) {
            let { e: a } = e;
            return a[0] * t1 + a[1] * r + a[2] * i + a[3] * o - e.eMq;
          }
          function splitPixels(e, t1, r, i, o, a) {
            for (i -= 4; r < i; ) {
              for (; vecDot(e, r, o) <= a; ) r += 4;
              for (; vecDot(e, i, o) > a; ) i -= 4;
              if (r >= i) break;
              let s = t1[r >> 2];
              (t1[r >> 2] = t1[i >> 2]), (t1[i >> 2] = s), (r += 4), (i -= 4);
            }
            for (; vecDot(e, r, o) > a; ) r -= 4;
            return r + 4;
          }
          function vecDot(e, t1, r) {
            return (
              e[t1] * r[0] +
              e[t1 + 1] * r[1] +
              e[t1 + 2] * r[2] +
              e[t1 + 3] * r[3]
            );
          }
          function stats(e, t1, r) {
            let i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              o = [0, 0, 0, 0];
            for (let a = t1; a < r; a += 4) {
              let t1 = e[a] * (1 / 255),
                r = e[a + 1] * (1 / 255),
                s = e[a + 2] * (1 / 255),
                f = e[a + 3] * (1 / 255);
              (o[0] += t1),
                (o[1] += r),
                (o[2] += s),
                (o[3] += f),
                (i[0] += t1 * t1),
                (i[1] += t1 * r),
                (i[2] += t1 * s),
                (i[3] += t1 * f),
                (i[5] += r * r),
                (i[6] += r * s),
                (i[7] += r * f),
                (i[10] += s * s),
                (i[11] += s * f),
                (i[15] += f * f);
            }
            return (
              (i[4] = i[1]),
              (i[8] = i[2]),
              (i[9] = i[6]),
              (i[12] = i[3]),
              (i[13] = i[7]),
              (i[14] = i[11]),
              { R: i, m: o, N: (r - t1) >> 2 }
            );
          }
          function estats(e) {
            let { R: t1 } = e,
              { m: r } = e,
              { N: i } = e,
              a = r[0],
              s = r[1],
              f = r[2],
              l = r[3],
              c = 0 == i ? 0 : 1 / i,
              u = [
                t1[0] - a * a * c,
                t1[1] - a * s * c,
                t1[2] - a * f * c,
                t1[3] - a * l * c,
                t1[4] - s * a * c,
                t1[5] - s * s * c,
                t1[6] - s * f * c,
                t1[7] - s * l * c,
                t1[8] - f * a * c,
                t1[9] - f * s * c,
                t1[10] - f * f * c,
                t1[11] - f * l * c,
                t1[12] - l * a * c,
                t1[13] - l * s * c,
                t1[14] - l * f * c,
                t1[15] - l * l * c,
              ],
              A = [Math.random(), Math.random(), Math.random(), Math.random()],
              g = 0,
              p = 0;
            if (0 != i)
              for (
                let e = 0;
                e < 16 &&
                ((A = o.multVec(u, A)),
                (p = Math.sqrt(o.dot(A, A))),
                (A = o.sml(1 / p, A)),
                !(0 != e && 1e-9 > Math.abs(p - g)));
                e++
              )
                g = p;
            let m = [a * c, s * c, f * c, l * c];
            return {
              Cov: u,
              q: m,
              e: A,
              L: g,
              eMq255: o.dot(o.sml(255, m), A),
              eMq: o.dot(A, m),
              rgba:
                ((Math.round(255 * m[3]) << 24) |
                  (Math.round(255 * m[2]) << 16) |
                  (Math.round(255 * m[1]) << 8) |
                  (Math.round(255 * m[0]) << 0)) >>>
                0,
            };
          }
          var o = {
            multVec: (e, t1) => [
              e[0] * t1[0] + e[1] * t1[1] + e[2] * t1[2] + e[3] * t1[3],
              e[4] * t1[0] + e[5] * t1[1] + e[6] * t1[2] + e[7] * t1[3],
              e[8] * t1[0] + e[9] * t1[1] + e[10] * t1[2] + e[11] * t1[3],
              e[12] * t1[0] + e[13] * t1[1] + e[14] * t1[2] + e[15] * t1[3],
            ],
            dot: (e, t1) =>
              e[0] * t1[0] + e[1] * t1[1] + e[2] * t1[2] + e[3] * t1[3],
            sml: (e, t1) => [e * t1[0], e * t1[1], e * t1[2], e * t1[3]],
          };
          (UPNG.encode = function encode(e, t1, r, i, o, a, s) {
            null == i && (i = 0), null == s && (s = !1);
            let f = compress(e, t1, r, i, [!1, !1, !1, 0, s, !1]);
            return compressPNG(f, -1), _main(f, t1, r, o, a);
          }),
            (UPNG.encodeLL = function encodeLL(e, t1, r, i, o, a, s, f) {
              let l = {
                  ctype: 0 + (1 == i ? 0 : 2) + (0 == o ? 0 : 4),
                  depth: a,
                  frames: [],
                },
                c = (i + o) * a,
                u = c * t1;
              for (let i = 0; i < e.length; i++)
                l.frames.push({
                  rect: { x: 0, y: 0, width: t1, height: r },
                  img: new Uint8Array(e[i]),
                  blend: 0,
                  dispose: 1,
                  bpp: Math.ceil(c / 8),
                  bpl: Math.ceil(u / 8),
                });
              return compressPNG(l, 0, !0), _main(l, t1, r, s, f);
            }),
            (UPNG.encode.compress = compress),
            (UPNG.encode.dither = dither),
            (UPNG.quantize = quantize),
            (UPNG.quantize.getKDtree = getKDtree),
            (UPNG.quantize.getNearest = getNearest);
        })();
        let r = {
          toArrayBuffer(e, t1) {
            let i = e.width,
              o = e.height,
              a = i << 2,
              f = new Uint32Array(
                e.getContext('2d').getImageData(0, 0, i, o).data.buffer,
              ),
              l = ((32 * i + 31) / 32) << 2,
              c = l * o,
              u = 122 + c,
              h = new ArrayBuffer(u),
              d = new DataView(h),
              g,
              p,
              m,
              w,
              v = 1048576,
              b = 0,
              y = 0,
              E = 0;
            function set16(e) {
              d.setUint16(y, e, !0), (y += 2);
            }
            function set32(e) {
              d.setUint32(y, e, !0), (y += 4);
            }
            set16(19778),
              set32(u),
              (y += 4),
              set32(122),
              set32(108),
              set32(i),
              set32(-o >>> 0),
              set16(1),
              set16(32),
              set32(3),
              set32(c),
              set32(2835),
              set32(2835),
              (y += 8),
              set32(16711680),
              set32(65280),
              set32(255),
              set32(4278190080),
              set32(1466527264),
              (function convert() {
                for (; b < o && v > 0; ) {
                  for (w = 122 + b * l, g = 0; g < a; )
                    v--,
                      (m = (p = f[E++]) >>> 24),
                      d.setUint32(w + g, (p << 8) | m),
                      (g += 4);
                  b++;
                }
                E < f.length
                  ? ((v = 1048576), setTimeout(convert, r._dly))
                  : t1(h);
              })();
          },
          toBlob(e, t1) {
            this.toArrayBuffer(e, (e) => {
              t1(new Blob([e], { type: 'image/bmp' }));
            });
          },
          _dly: 9,
        };
        var i = {
            CHROME: 'CHROME',
            FIREFOX: 'FIREFOX',
            DESKTOP_SAFARI: 'DESKTOP_SAFARI',
            IE: 'IE',
            IOS: 'IOS',
            ETC: 'ETC',
          },
          o = {
            [i.CHROME]: 16384,
            [i.FIREFOX]: 11180,
            [i.DESKTOP_SAFARI]: 16384,
            [i.IE]: 8192,
            [i.IOS]: 4096,
            [i.ETC]: 8192,
          };
        let a = 'undefined' != typeof window,
          s =
            'undefined' != typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope,
          f =
            a &&
            window.cordova &&
            window.cordova.require &&
            window.cordova.require('cordova/modulemapper'),
          CustomFile =
            (a || s) &&
            ((f && f.getOriginalSymbol(window, 'File')) ||
              ('undefined' != typeof File && File)),
          CustomFileReader =
            (a || s) &&
            ((f && f.getOriginalSymbol(window, 'FileReader')) ||
              ('undefined' != typeof FileReader && FileReader));
        function getFilefromDataUrl(e, t1, r = Date.now()) {
          return new Promise((i) => {
            let o = e.split(','),
              a = o[0].match(/:(.*?);/)[1],
              s = globalThis.atob(o[1]),
              f = s.length,
              l = new Uint8Array(f);
            for (; f--; ) l[f] = s.charCodeAt(f);
            let c = new Blob([l], { type: a });
            (c.name = t1), (c.lastModified = r), i(c);
          });
        }
        function getDataUrlFromFile(e) {
          return new Promise((t1, r) => {
            let i = new CustomFileReader();
            (i.onload = () => t1(i.result)),
              (i.onerror = (e) => r(e)),
              i.readAsDataURL(e);
          });
        }
        function loadImage(e) {
          return new Promise((t1, r) => {
            let i = new Image();
            (i.onload = () => t1(i)), (i.onerror = (e) => r(e)), (i.src = e);
          });
        }
        function getBrowserName() {
          if (void 0 !== getBrowserName.cachedResult)
            return getBrowserName.cachedResult;
          let e = i.ETC,
            { userAgent: t1 } = navigator;
          return (
            /Chrom(e|ium)/i.test(t1)
              ? (e = i.CHROME)
              : /iP(ad|od|hone)/i.test(t1) && /WebKit/i.test(t1)
                ? (e = i.IOS)
                : /Safari/i.test(t1)
                  ? (e = i.DESKTOP_SAFARI)
                  : /Firefox/i.test(t1)
                    ? (e = i.FIREFOX)
                    : (/MSIE/i.test(t1) || !0 == !!document.documentMode) &&
                      (e = i.IE),
            (getBrowserName.cachedResult = e),
            getBrowserName.cachedResult
          );
        }
        function approximateBelowMaximumCanvasSizeOfBrowser(e, t1) {
          let i = o[getBrowserName()],
            a = e,
            s = t1,
            f = a * s,
            l = a > s ? s / a : a / s;
          for (; f > i * i; ) {
            let e = (i + a) / 2,
              t1 = (i + s) / 2;
            e < t1 ? ((s = t1), (a = t1 * l)) : ((s = e * l), (a = e)),
              (f = a * s);
          }
          return { width: a, height: s };
        }
        function getNewCanvasAndCtx(e, t1) {
          let r, i;
          try {
            if (
              ((i = (r = new OffscreenCanvas(e, t1)).getContext('2d')),
              null === i)
            )
              throw Error('getContext of OffscreenCanvas returns null');
          } catch (e) {
            i = (r = document.createElement('canvas')).getContext('2d');
          }
          return (r.width = e), (r.height = t1), [r, i];
        }
        function drawImageInCanvas(e, t1) {
          let { width: r, height: i } =
              approximateBelowMaximumCanvasSizeOfBrowser(e.width, e.height),
            [o, a] = getNewCanvasAndCtx(r, i);
          return (
            t1 &&
              /jpe?g/.test(t1) &&
              ((a.fillStyle = 'white'), a.fillRect(0, 0, o.width, o.height)),
            a.drawImage(e, 0, 0, o.width, o.height),
            o
          );
        }
        function isIOS() {
          return (
            void 0 !== isIOS.cachedResult ||
              (isIOS.cachedResult =
                [
                  'iPad Simulator',
                  'iPhone Simulator',
                  'iPod Simulator',
                  'iPad',
                  'iPhone',
                  'iPod',
                ].includes(navigator.platform) ||
                (navigator.userAgent.includes('Mac') &&
                  'undefined' != typeof document &&
                  'ontouchend' in document)),
            isIOS.cachedResult
          );
        }
        function drawFileInCanvas(e, t1 = {}) {
          return new Promise(function (r, o) {
            let a, s;
            var $Try_2_Post = function () {
                try {
                  return (
                    (s = drawImageInCanvas(a, t1.fileType || e.type)), r([a, s])
                  );
                } catch (e) {
                  return o(e);
                }
              },
              $Try_2_Catch = function (t1) {
                try {
                  var $Try_3_Catch = function (e) {
                    try {
                      throw e;
                    } catch (e) {
                      return o(e);
                    }
                  };
                  try {
                    let t1;
                    return getDataUrlFromFile(e).then(function (e) {
                      try {
                        return (
                          (t1 = e),
                          loadImage(t1).then(function (e) {
                            try {
                              return (
                                (a = e),
                                (function () {
                                  try {
                                    return $Try_2_Post();
                                  } catch (e) {
                                    return o(e);
                                  }
                                })()
                              );
                            } catch (e) {
                              return $Try_3_Catch(e);
                            }
                          }, $Try_3_Catch)
                        );
                      } catch (e) {
                        return $Try_3_Catch(e);
                      }
                    }, $Try_3_Catch);
                  } catch (e) {
                    $Try_3_Catch(e);
                  }
                } catch (e) {
                  return o(e);
                }
              };
            try {
              if (
                isIOS() ||
                [i.DESKTOP_SAFARI, i.MOBILE_SAFARI].includes(getBrowserName())
              )
                throw Error('Skip createImageBitmap on IOS and Safari');
              return createImageBitmap(e).then(function (e) {
                try {
                  return (a = e), $Try_2_Post();
                } catch (e) {
                  return $Try_2_Catch();
                }
              }, $Try_2_Catch);
            } catch (e) {
              $Try_2_Catch();
            }
          });
        }
        function canvasToFile(e, t1, i, o, a = 1) {
          return new Promise(function (s, f) {
            let l;
            if ('image/png' === t1) {
              let c, u;
              return (
                (c = e.getContext('2d')),
                ({ data: u } = c.getImageData(0, 0, e.width, e.height)),
                ((l = new Blob(
                  [UPNG.encode([u.buffer], e.width, e.height, 4096 * a)],
                  { type: t1 },
                )).name = i),
                (l.lastModified = o),
                $If_4.call(this)
              );
            }
            if ('image/bmp' === t1)
              return new Promise((t1) => r.toBlob(e, t1)).then(
                function (e) {
                  try {
                    return (
                      ((l = e).name = i), (l.lastModified = o), $If_5.call(this)
                    );
                  } catch (e) {
                    return f(e);
                  }
                }.bind(this),
                f,
              );
            if (
              'function' == typeof OffscreenCanvas &&
              e instanceof OffscreenCanvas
            )
              return e.convertToBlob({ type: t1, quality: a }).then(
                function (e) {
                  try {
                    return (
                      ((l = e).name = i), (l.lastModified = o), $If_6.call(this)
                    );
                  } catch (e) {
                    return f(e);
                  }
                }.bind(this),
                f,
              );
            return getFilefromDataUrl(e.toDataURL(t1, a), i, o).then(
              function (e) {
                try {
                  return (l = e), $If_6.call(this);
                } catch (e) {
                  return f(e);
                }
              }.bind(this),
              f,
            );
            function $If_6() {
              return $If_5.call(this);
            }
            function $If_5() {
              return $If_4.call(this);
            }
            function $If_4() {
              return s(l);
            }
          });
        }
        function cleanupCanvasMemory(e) {
          (e.width = 0), (e.height = 0);
        }
        function isAutoOrientationInBrowser() {
          return new Promise(function (e, t1) {
            let i, o, a, s;
            return void 0 !== isAutoOrientationInBrowser.cachedResult
              ? e(isAutoOrientationInBrowser.cachedResult)
              : getFilefromDataUrl(
                  'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==',
                  'test.jpg',
                  Date.now(),
                ).then(function (r) {
                  try {
                    return (
                      (i = r),
                      drawFileInCanvas(i).then(function (r) {
                        try {
                          return (
                            (o = r[1]),
                            canvasToFile(
                              o,
                              i.type,
                              i.name,
                              i.lastModified,
                            ).then(function (r) {
                              try {
                                return (
                                  (a = r),
                                  cleanupCanvasMemory(o),
                                  drawFileInCanvas(a).then(function (r) {
                                    try {
                                      return (
                                        (s = r[0]),
                                        (isAutoOrientationInBrowser.cachedResult =
                                          1 === s.width && 2 === s.height),
                                        e(
                                          isAutoOrientationInBrowser.cachedResult,
                                        )
                                      );
                                    } catch (e) {
                                      return t1(e);
                                    }
                                  }, t1)
                                );
                              } catch (e) {
                                return t1(e);
                              }
                            }, t1)
                          );
                        } catch (e) {
                          return t1(e);
                        }
                      }, t1)
                    );
                  } catch (e) {
                    return t1(e);
                  }
                }, t1);
          });
        }
        function getExifOrientation(e) {
          return new Promise((t1, r) => {
            let i = new CustomFileReader();
            (i.onload = (e) => {
              let r = new DataView(e.target.result);
              if (65496 != r.getUint16(0, !1)) return t1(-2);
              let i = r.byteLength,
                o = 2;
              for (; o < i && !(8 >= r.getUint16(o + 2, !1)); ) {
                let e = r.getUint16(o, !1);
                if (((o += 2), 65505 == e)) {
                  if (1165519206 != r.getUint32((o += 2), !1)) return t1(-1);
                  let e = 18761 == r.getUint16((o += 6), !1);
                  o += r.getUint32(o + 4, e);
                  let i = r.getUint16(o, e);
                  o += 2;
                  for (let a = 0; a < i; a++)
                    if (274 == r.getUint16(o + 12 * a, e))
                      return t1(r.getUint16(o + 12 * a + 8, e));
                } else {
                  if (65280 != (65280 & e)) break;
                  o += r.getUint16(o, !1);
                }
              }
              return t1(-1);
            }),
              (i.onerror = (e) => r(e)),
              i.readAsArrayBuffer(e);
          });
        }
        function handleMaxWidthOrHeight(e, t1) {
          let { width: r } = e,
            { height: i } = e,
            { maxWidthOrHeight: o } = t1,
            a,
            s = e;
          return (
            isFinite(o) &&
              (r > o || i > o) &&
              (([s, a] = getNewCanvasAndCtx(r, i)),
              r > i
                ? ((s.width = o), (s.height = (i / r) * o))
                : ((s.width = (r / i) * o), (s.height = o)),
              a.drawImage(e, 0, 0, s.width, s.height),
              cleanupCanvasMemory(e)),
            s
          );
        }
        function followExifOrientation(e, t1) {
          let { width: r } = e,
            { height: i } = e,
            [o, a] = getNewCanvasAndCtx(r, i);
          switch (
            (t1 > 4 && t1 < 9
              ? ((o.width = i), (o.height = r))
              : ((o.width = r), (o.height = i)),
            t1)
          ) {
            case 2:
              a.transform(-1, 0, 0, 1, r, 0);
              break;
            case 3:
              a.transform(-1, 0, 0, -1, r, i);
              break;
            case 4:
              a.transform(1, 0, 0, -1, 0, i);
              break;
            case 5:
              a.transform(0, 1, 1, 0, 0, 0);
              break;
            case 6:
              a.transform(0, 1, -1, 0, i, 0);
              break;
            case 7:
              a.transform(0, -1, -1, 0, i, r);
              break;
            case 8:
              a.transform(0, -1, 1, 0, 0, r);
          }
          return a.drawImage(e, 0, 0, r, i), cleanupCanvasMemory(e), o;
        }
        function compress(e, t1, r = 0) {
          return new Promise(function (i, o) {
            let a, s, f, l, c, u, h, d, A, g, p, m, w, v, b, y, E, F, _, B;
            function incProgress(e = 5) {
              if (t1.signal && t1.signal.aborted) throw t1.signal.reason;
              (a += e), t1.onProgress(Math.min(a, 100));
            }
            function setProgress(e) {
              if (t1.signal && t1.signal.aborted) throw t1.signal.reason;
              (a = Math.min(Math.max(e, a), 100)), t1.onProgress(a);
            }
            return (
              (a = r),
              (s = t1.maxIteration || 10),
              (f = 1024 * t1.maxSizeMB * 1024),
              incProgress(),
              drawFileInCanvas(e, t1).then(
                function (r) {
                  try {
                    return (
                      ([, l] = r),
                      incProgress(),
                      (c = handleMaxWidthOrHeight(l, t1)),
                      incProgress(),
                      new Promise(function (r, i) {
                        var o;
                        if (!(o = t1.exifOrientation))
                          return getExifOrientation(e).then(
                            function (e) {
                              try {
                                return (o = e), $If_2.call(this);
                              } catch (e) {
                                return i(e);
                              }
                            }.bind(this),
                            i,
                          );
                        function $If_2() {
                          return r(o);
                        }
                        return $If_2.call(this);
                      }).then(
                        function (r) {
                          try {
                            return (
                              (u = r),
                              incProgress(),
                              isAutoOrientationInBrowser().then(
                                function (r) {
                                  try {
                                    return (
                                      (h = r ? c : followExifOrientation(c, u)),
                                      incProgress(),
                                      (d = t1.initialQuality || 1),
                                      (A = t1.fileType || e.type),
                                      canvasToFile(
                                        h,
                                        A,
                                        e.name,
                                        e.lastModified,
                                        d,
                                      ).then(
                                        function (r) {
                                          try {
                                            var a;
                                            if (
                                              ((g = r),
                                              incProgress(),
                                              (p = g.size > f),
                                              (m = g.size > e.size),
                                              !p && !m)
                                            )
                                              return setProgress(100), i(g);
                                            function $Loop_3() {
                                              if (s-- && (b > f || b > w)) {
                                                let t1, r;
                                                return (
                                                  (t1 = B
                                                    ? 0.95 * _.width
                                                    : _.width),
                                                  (r = B
                                                    ? 0.95 * _.height
                                                    : _.height),
                                                  ([E, F] = getNewCanvasAndCtx(
                                                    t1,
                                                    r,
                                                  )),
                                                  F.drawImage(_, 0, 0, t1, r),
                                                  (d *=
                                                    'image/png' === A
                                                      ? 0.85
                                                      : 0.95),
                                                  canvasToFile(
                                                    E,
                                                    A,
                                                    e.name,
                                                    e.lastModified,
                                                    d,
                                                  ).then(function (e) {
                                                    try {
                                                      return (
                                                        (y = e),
                                                        cleanupCanvasMemory(_),
                                                        (_ = E),
                                                        (b = y.size),
                                                        setProgress(
                                                          Math.min(
                                                            99,
                                                            Math.floor(
                                                              ((v - b) /
                                                                (v - f)) *
                                                                100,
                                                            ),
                                                          ),
                                                        ),
                                                        $Loop_3
                                                      );
                                                    } catch (e) {
                                                      return o(e);
                                                    }
                                                  }, o)
                                                );
                                              }
                                              return [1];
                                            }
                                            return (
                                              (w = e.size),
                                              (b = v = g.size),
                                              (_ = h),
                                              (B =
                                                !t1.alwaysKeepResolution && p),
                                              (a = function (e) {
                                                for (; e; ) {
                                                  if (e.then)
                                                    return void e.then(a, o);
                                                  try {
                                                    if (e.pop) {
                                                      if (e.length)
                                                        return e.pop()
                                                          ? $Loop_3_exit.call(
                                                              this,
                                                            )
                                                          : e;
                                                      e = $Loop_3;
                                                    } else e = e.call(this);
                                                  } catch (e) {
                                                    return o(e);
                                                  }
                                                }
                                              }.bind(this))($Loop_3)
                                            );
                                            function $Loop_3_exit() {
                                              return (
                                                cleanupCanvasMemory(_),
                                                cleanupCanvasMemory(E),
                                                cleanupCanvasMemory(c),
                                                cleanupCanvasMemory(h),
                                                cleanupCanvasMemory(l),
                                                setProgress(100),
                                                i(y)
                                              );
                                            }
                                          } catch (u) {
                                            return o(u);
                                          }
                                        }.bind(this),
                                        o,
                                      )
                                    );
                                  } catch (e) {
                                    return o(e);
                                  }
                                }.bind(this),
                                o,
                              )
                            );
                          } catch (e) {
                            return o(e);
                          }
                        }.bind(this),
                        o,
                      )
                    );
                  } catch (e) {
                    return o(e);
                  }
                }.bind(this),
                o,
              )
            );
          });
        }
        function compressOnWebWorker(e, t1) {
          return new Promise((r, i) => {
            c ||
              (c = (function createWorkerScriptURL(e) {
                let t1 = [];
                return (
                  'function' == typeof e ? t1.push(`(${e})()`) : t1.push(e),
                  URL.createObjectURL(new Blob(t1))
                );
              })(
                "\nlet scriptImported = false\nself.addEventListener('message', async (e) => {\n  const { file, id, imageCompressionLibUrl, options } = e.data\n  options.onProgress = (progress) => self.postMessage({ progress, id })\n  try {\n    if (!scriptImported) {\n      // console.log('[worker] importScripts', imageCompressionLibUrl)\n      self.importScripts(imageCompressionLibUrl)\n      scriptImported = true\n    }\n    // console.log('[worker] self', self)\n    const compressedFile = await imageCompression(file, options)\n    self.postMessage({ file: compressedFile, id })\n  } catch (e) {\n    // console.error('[worker] error', e)\n    self.postMessage({ error: e.message + '\\n' + e.stack, id })\n  }\n})\n",
              ));
            let o = new Worker(c);
            o.addEventListener('message', function handler(e) {
              if (t1.signal && t1.signal.aborted) o.terminate();
              else if (void 0 === e.data.progress) {
                if (e.data.error)
                  return i(Error(e.data.error)), void o.terminate();
                r(e.data.file), o.terminate();
              } else t1.onProgress(e.data.progress);
            }),
              o.addEventListener('error', i),
              t1.signal &&
                t1.signal.addEventListener('abort', () => {
                  i(t1.signal.reason), o.terminate();
                }),
              o.postMessage({
                file: e,
                imageCompressionLibUrl: t1.libURL,
                options: { ...t1, onProgress: void 0, signal: void 0 },
              });
          });
        }
        function imageCompression(e, t1) {
          return new Promise(function (r, i) {
            let o, a, s, f, l, c;
            if (
              ((o = { ...t1 }),
              (s = 0),
              ({ onProgress: f } = o),
              (o.maxSizeMB = o.maxSizeMB || Number.POSITIVE_INFINITY),
              (l = 'boolean' != typeof o.useWebWorker || o.useWebWorker),
              delete o.useWebWorker,
              (o.onProgress = (e) => {
                (s = e), 'function' == typeof f && f(s);
              }),
              !(e instanceof Blob || e instanceof CustomFile))
            )
              return i(
                Error('The file given is not an instance of Blob or File'),
              );
            if (!/^image/.test(e.type))
              return i(Error('The file given is not an image'));
            if (
              ((c =
                'undefined' != typeof WorkerGlobalScope &&
                self instanceof WorkerGlobalScope),
              !l || 'function' != typeof Worker || c)
            )
              return compress(e, o).then(
                function (e) {
                  try {
                    return (a = e), $If_4.call(this);
                  } catch (e) {
                    return i(e);
                  }
                }.bind(this),
                i,
              );
            var u = function () {
                try {
                  return $If_4.call(this);
                } catch (e) {
                  return i(e);
                }
              }.bind(this),
              $Try_1_Catch = function (t1) {
                try {
                  return compress(e, o).then(function (e) {
                    try {
                      return (a = e), u();
                    } catch (e) {
                      return i(e);
                    }
                  }, i);
                } catch (e) {
                  return i(e);
                }
              };
            try {
              return (
                (o.libURL =
                  o.libURL ||
                  'https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js'),
                compressOnWebWorker(e, o).then(function (e) {
                  try {
                    return (a = e), u();
                  } catch (e) {
                    return $Try_1_Catch();
                  }
                }, $Try_1_Catch)
              );
            } catch (e) {
              $Try_1_Catch();
            }
            function $If_4() {
              try {
                (a.name = e.name), (a.lastModified = e.lastModified);
              } catch (e) {}
              try {
                o.preserveExif &&
                  'image/jpeg' === e.type &&
                  (!o.fileType || (o.fileType && o.fileType === e.type)) &&
                  (a = copyExifWithoutOrientation(e, a));
              } catch (e) {}
              return r(a);
            }
          });
        }
        (imageCompression.getDataUrlFromFile = getDataUrlFromFile),
          (imageCompression.getFilefromDataUrl = getFilefromDataUrl),
          (imageCompression.loadImage = loadImage),
          (imageCompression.drawImageInCanvas = drawImageInCanvas),
          (imageCompression.drawFileInCanvas = drawFileInCanvas),
          (imageCompression.canvasToFile = canvasToFile),
          (imageCompression.getExifOrientation = getExifOrientation),
          (imageCompression.handleMaxWidthOrHeight = handleMaxWidthOrHeight),
          (imageCompression.followExifOrientation = followExifOrientation),
          (imageCompression.cleanupCanvasMemory = cleanupCanvasMemory),
          (imageCompression.isAutoOrientationInBrowser =
            isAutoOrientationInBrowser),
          (imageCompression.approximateBelowMaximumCanvasSizeOfBrowser =
            approximateBelowMaximumCanvasSizeOfBrowser),
          (imageCompression.copyExifWithoutOrientation =
            copyExifWithoutOrientation),
          (imageCompression.getBrowserName = getBrowserName),
          (imageCompression.version = '2.0.2');
      },
    './node_modules/heic2any/dist/heic2any.js': function (module, exports) {
      var __WEBPACK_AMD_DEFINE_RESULT__, factory;
      !(function (e, t1, r, i) {
        'use strict';
        function n() {
          return C.isValid();
        }
        function o() {
          return C.isValid();
        }
        function a() {
          return C.isValid({ getUserMedia: !0 });
        }
        function s(e) {
          var t1 = !1;
          if (w.isArray(e) && e.length) {
            if (
              (w.each(e, function (e, r) {
                w.isSupported.videoCodecs[r] && (t1 = !0);
              }),
              !t1)
            )
              return !1;
          } else if (w.isString(e) && e.length && !w.isSupported.videoCodecs[e])
            return !1;
          return C.isValid({ getUserMedia: !0 });
        }
        function d() {
          function t1() {
            for (var e = [], t1 = Array(h), r = 0; h > r; r++) t1[f[r][3]] = r;
            for (var i = 0, n = 0; h > n; n++) {
              var o = t1[n];
              (e[i++] = f[o][0]), (e[i++] = f[o][1]), (e[i++] = f[o][2]);
            }
            return e;
          }
          function r() {
            var e, t1, r, i, n, o, a, s;
            for (a = 0, s = 0, e = 0; h > e; e++) {
              for (n = f[e], r = e, i = n[1], t1 = e + 1; h > t1; t1++)
                (o = f[t1])[1] < i && ((r = t1), (i = o[1]));
              if (
                ((o = f[r]),
                e != r &&
                  ((t1 = o[0]),
                  (o[0] = n[0]),
                  (n[0] = t1),
                  (t1 = o[1]),
                  (o[1] = n[1]),
                  (n[1] = t1),
                  (t1 = o[2]),
                  (o[2] = n[2]),
                  (n[2] = t1),
                  (t1 = o[3]),
                  (o[3] = n[3]),
                  (n[3] = t1)),
                i != a)
              ) {
                for (P[a] = (s + e) >> 1, t1 = a + 1; i > t1; t1++) P[t1] = e;
                (a = i), (s = e);
              }
            }
            for (P[a] = (s + C) >> 1, t1 = a + 1; 256 > t1; t1++) P[t1] = C;
          }
          function i() {
            var e, t1, r, i, n, o, a, f, h, C, x, F, W, O;
            for (
              y > m && (g = 1),
                l = 30 + (g - 1) / 3,
                F = u,
                W = 0,
                O = m,
                C = ((x = m / (3 * g)) / S) | 0,
                f = V,
                1 >= (a = (o = T) >> U) && (a = 0),
                e = 0;
              a > e;
              e++
            )
              N[e] = (((a * a - e * e) * z) / (a * a)) * f;
            for (
              h =
                y > m
                  ? 3
                  : m % p != 0
                    ? 3 * p
                    : m % v != 0
                      ? 3 * v
                      : m % b != 0
                        ? 3 * b
                        : 3 * w,
                e = 0;
              x > e;

            )
              if (
                (d(
                  f,
                  (t1 = c(
                    (r = (255 & F[W + 0]) << k),
                    (i = (255 & F[W + 1]) << k),
                    (n = (255 & F[W + 2]) << k),
                  )),
                  r,
                  i,
                  n,
                ),
                0 !== a && s(a, t1, r, i, n),
                (W += h) >= O && (W -= m),
                0 === C && (C = 1),
                ++e % C == 0)
              )
                for (
                  f -= f / l, o -= o / I, a = o >> U, 1 >= a && (a = 0), t1 = 0;
                  a > t1;
                  t1++
                )
                  N[t1] = (((a * a - t1 * t1) * z) / (a * a)) * f;
          }
          function n(e, t1, r) {
            var i, n, o, a, s, d, c;
            for (s = 1e3, c = -1, n = (i = P[t1]) - 1; h > i || n >= 0; )
              h > i &&
                ((o = (d = f[i])[1] - t1) >= s
                  ? (i = h)
                  : (i++,
                    0 > o && (o = -o),
                    0 > (a = d[0] - e) && (a = -a),
                    s > (o += a) &&
                      (0 > (a = d[2] - r) && (a = -a),
                      s > (o += a) && ((s = o), (c = d[3]))))),
                n >= 0 &&
                  ((o = t1 - (d = f[n])[1]) >= s
                    ? (n = -1)
                    : (n--,
                      0 > o && (o = -o),
                      0 > (a = d[0] - e) && (a = -a),
                      s > (o += a) &&
                        (0 > (a = d[2] - r) && (a = -a),
                        s > (o += a) && ((s = o), (c = d[3])))));
            return c;
          }
          function o() {
            return i(), a(), r(), t1();
          }
          function a() {
            var e;
            for (e = 0; h > e; e++)
              (f[e][0] >>= k), (f[e][1] >>= k), (f[e][2] >>= k), (f[e][3] = e);
          }
          function s(e, t1, r, i, n) {
            var o, a, s, d, c, l, u;
            for (
              -1 > (s = t1 - e) && (s = -1),
                (d = t1 + e) > h && (d = h),
                o = t1 + 1,
                a = t1 - 1,
                l = 1;
              d > o || a > s;

            ) {
              if (((c = N[l++]), d > o)) {
                u = f[o++];
                try {
                  (u[0] -= ((c * (u[0] - r)) / B) | 0),
                    (u[1] -= ((c * (u[1] - i)) / B) | 0),
                    (u[2] -= ((c * (u[2] - n)) / B) | 0);
                } catch (m) {}
              }
              if (a > s) {
                u = f[a--];
                try {
                  (u[0] -= ((c * (u[0] - r)) / B) | 0),
                    (u[1] -= ((c * (u[1] - i)) / B) | 0),
                    (u[2] -= ((c * (u[2] - n)) / B) | 0);
                } catch (m$1) {}
              }
            }
          }
          function d(e, t1, r, i, n) {
            var o = f[t1],
              a = e / V;
            (o[0] -= (a * (o[0] - r)) | 0),
              (o[1] -= (a * (o[1] - i)) | 0),
              (o[2] -= (a * (o[2] - n)) | 0);
          }
          function c(e, t1, r) {
            var i, n, o, a, s, d, c, l, u, m;
            for (u = l = 2147483647, c = d = -1, i = 0; h > i; i++)
              0 > (n = (m = f[i])[0] - e) && (n = -n),
                0 > (o = m[1] - t1) && (o = -o),
                (n += o),
                0 > (o = m[2] - r) && (o = -o),
                l > (n += o) && ((l = n), (d = i)),
                u > (a = n - (G[i] >> (x - k))) && ((u = a), (c = i)),
                (s = D[i] >> O),
                (D[i] -= s),
                (G[i] += s << W);
            return (D[d] += E), (G[d] -= M), c;
          }
          var l,
            u,
            m,
            g,
            f,
            h = 256,
            p = 499,
            v = 491,
            b = 487,
            w = 503,
            y = 1509,
            C = 255,
            k = 4,
            S = 100,
            x = 16,
            W = 10,
            O = 10,
            E = 64,
            M = 65536,
            U = 6,
            T = 2048,
            I = 30,
            V = 1024,
            z = 256,
            B = 262144,
            P = [],
            G = [],
            D = [],
            N = [];
          (function e(e, t1, r) {
            var i, n;
            for (u = e, m = t1, g = r, f = Array(h), i = 0; h > i; i++)
              (f[i] = [, , , ,]),
                ((n = f[i])[0] = n[1] = n[2] = ((i << (k + 8)) / h) | 0),
                (D[i] = (65536 / h) | 0),
                (G[i] = 0);
          }).apply(this, arguments);
          var q = {};
          return (q.map = n), (q.process = o), q;
        }
        function c() {
          try {
            this.onmessage = function (e) {
              var t1,
                i = e.data || {};
              i.gifshot && ((t1 = r.run(i)), postMessage(t1));
            };
          } catch (t1) {}
          var r = {
            dataToRGB: function (e, t1, r) {
              for (var i = t1 * r * 4, n = 0, o = []; i > n; )
                o.push(e[n++]), o.push(e[n++]), o.push(e[n++]), n++;
              return o;
            },
            componentizedPaletteToArray: function (e) {
              e = e || [];
              for (var t1 = [], r = 0; r < e.length; r += 3) {
                var i = e[r],
                  n = e[r + 1],
                  o = e[r + 2];
                t1.push((i << 16) | (n << 8) | o);
              }
              return t1;
            },
            processFrameWithQuantizer: function (e, t1, r, i) {
              for (
                var n = this.dataToRGB(e, t1, r),
                  o = new d(n, n.length, i),
                  a = o.process(),
                  s = new Uint32Array(this.componentizedPaletteToArray(a)),
                  c = t1 * r,
                  l = new Uint8Array(c),
                  u = 0,
                  m = 0;
                c > m;
                m++
              ) {
                var g = n[u++],
                  f = n[u++],
                  h = n[u++];
                l[m] = o.map(g, f, h);
              }
              return { pixels: l, palette: s };
            },
            run: function (e) {
              var t1 = (e = e || {}),
                r = t1.height,
                i = (t1.palette, t1.sampleInterval),
                n = t1.width,
                o = e.data;
              return this.processFrameWithQuantizer(o, n, r, i);
            },
          };
          return r;
        }
        function l(e, t1, r, n) {
          function o(e) {
            var t1 = e.length;
            if (2 > t1 || t1 > 256 || t1 & (t1 - 1))
              throw 'Invalid code/color length, must be power of 2 and 2 .. 256.';
            return t1;
          }
          function a(e, t1, r, n) {
            function o(r) {
              for (; g >= r; )
                (e[t1++] = 255 & f),
                  (f >>= 8),
                  (g -= 8),
                  t1 === s + 256 && ((e[s] = 255), (s = t1++));
            }
            function a(e) {
              (f |= e << g), (g += m), o(8);
            }
            e[t1++] = r;
            var s = t1++,
              d = 1 << r,
              c = d - 1,
              l = d + 1,
              u = l + 1,
              m = r + 1,
              g = 0,
              f = 0,
              h = n[0] & c,
              p = {};
            a(d);
            for (var v = 1, b = n.length; b > v; ++v) {
              var w = n[v] & c,
                y = (h << 8) | w,
                C = p[y];
              if (C === i) {
                for (f |= h << g, g += m; g >= 8; )
                  (e[t1++] = 255 & f),
                    (f >>= 8),
                    (g -= 8),
                    t1 === s + 256 && ((e[s] = 255), (s = t1++));
                4096 === u
                  ? (a(d), (u = l + 1), (m = r + 1), (p = {}))
                  : (u >= 1 << m && ++m, (p[y] = u++)),
                  (h = w);
              } else h = C;
            }
            return (
              a(h),
              a(l),
              o(1),
              s + 1 === t1 ? (e[s] = 0) : ((e[s] = t1 - s - 1), (e[t1++] = 0)),
              t1
            );
          }
          var s = 0,
            d = (n = n === i ? {} : n).loop === i ? null : n.loop,
            c = n.palette === i ? null : n.palette;
          if (0 >= t1 || 0 >= r || t1 > 65535 || r > 65535)
            throw 'Width/Height invalid.';
          if (
            ((e[s++] = 71),
            (e[s++] = 73),
            (e[s++] = 70),
            (e[s++] = 56),
            (e[s++] = 57),
            (e[s++] = 97),
            (e[s++] = 255 & t1),
            (e[s++] = (t1 >> 8) & 255),
            (e[s++] = 255 & r),
            (e[s++] = (r >> 8) & 255),
            (e[s++] = (null !== c ? 128 : 0) | 0),
            (e[s++] = 0),
            (e[s++] = 0),
            null !== d)
          ) {
            if (0 > d || d > 65535) throw 'Loop count invalid.';
            (e[s++] = 33),
              (e[s++] = 255),
              (e[s++] = 11),
              (e[s++] = 78),
              (e[s++] = 69),
              (e[s++] = 84),
              (e[s++] = 83),
              (e[s++] = 67),
              (e[s++] = 65),
              (e[s++] = 80),
              (e[s++] = 69),
              (e[s++] = 50),
              (e[s++] = 46),
              (e[s++] = 48),
              (e[s++] = 3),
              (e[s++] = 1),
              (e[s++] = 255 & d),
              (e[s++] = (d >> 8) & 255),
              (e[s++] = 0);
          }
          var m = !1;
          (this.addFrame = function (t1, r, n, d, l, u) {
            if (
              (!0 === m && (--s, (m = !1)),
              (u = u === i ? {} : u),
              0 > t1 || 0 > r || t1 > 65535 || r > 65535)
            )
              throw 'x/y invalid.';
            if (0 >= n || 0 >= d || n > 65535 || d > 65535)
              throw 'Width/Height invalid.';
            if (l.length < n * d) throw 'Not enough pixels for the frame size.';
            var g = !0,
              f = u.palette;
            if (
              ((f === i || null === f) && ((g = !1), (f = c)),
              f === i || null === f)
            )
              throw 'Must supply either a local or global palette.';
            for (var h = o(f), p = 0; (h >>= 1); ) ++p;
            h = 1 << p;
            var v = u.delay === i ? 0 : u.delay,
              b = u.disposal === i ? 0 : u.disposal;
            if (0 > b || b > 3) throw 'Disposal out of range.';
            var w = !1,
              y = 0;
            if (
              u.transparent !== i &&
              null !== u.transparent &&
              ((w = !0), 0 > (y = u.transparent) || y >= h)
            )
              throw 'Transparent color index.';
            if (
              ((0 !== b || w || 0 !== v) &&
                ((e[s++] = 33),
                (e[s++] = 249),
                (e[s++] = 4),
                (e[s++] = (b << 2) | (!0 === w ? 1 : 0)),
                (e[s++] = 255 & v),
                (e[s++] = (v >> 8) & 255),
                (e[s++] = y),
                (e[s++] = 0)),
              (e[s++] = 44),
              (e[s++] = 255 & t1),
              (e[s++] = (t1 >> 8) & 255),
              (e[s++] = 255 & r),
              (e[s++] = (r >> 8) & 255),
              (e[s++] = 255 & n),
              (e[s++] = (n >> 8) & 255),
              (e[s++] = 255 & d),
              (e[s++] = (d >> 8) & 255),
              (e[s++] = !0 === g ? 128 | (p - 1) : 0),
              !0 === g)
            )
              for (var C = 0, k = f.length; k > C; ++C) {
                var S = f[C];
                (e[s++] = (S >> 16) & 255),
                  (e[s++] = (S >> 8) & 255),
                  (e[s++] = 255 & S);
              }
            s = a(e, s, 2 > p ? 2 : p, l);
          }),
            (this.end = function () {
              return !1 === m && ((e[s++] = 59), (m = !0)), s;
            });
        }
        function u(e, t1) {
          e.getBase64GIF(function (e) {
            t1({ error: !1, errorCode: '', errorMsg: '', image: e });
          });
        }
        function m() {
          function e() {
            w.each(l, function (e, t1) {
              t1 &&
                (t1.text ? f.addFrame(t1.img, a, t1.text) : f.addFrame(t1, a));
            }),
              u(f, n);
          }
          var r =
              arguments.length > 0 && arguments[0] !== i ? arguments[0] : {},
            n = r.callback,
            o = r.images,
            a = r.options,
            s = r.imagesLength,
            c = C.validate({ getUserMedia: !0, 'window.URL': !0 }),
            l = [],
            m = 0,
            g = void 0,
            f = void 0;
          return c.error
            ? n(c)
            : ((f = new O(a)),
              void w.each(o, function (r, i) {
                var t2,
                  o = i;
                i.src && (o = o.src),
                  w.isElement(o)
                    ? (a.crossOrigin && (o.crossOrigin = a.crossOrigin),
                      (l[r] = o),
                      (m += 1) === s && e())
                    : w.isString(o) &&
                      ((g = new Image()),
                      a.crossOrigin && (g.crossOrigin = a.crossOrigin),
                      (t2 = g),
                      i.text && (t2.text = i.text),
                      (t2.onerror = function () {
                        var e = void 0;
                        return 0 == --s
                          ? (((e = {}).error =
                              'None of the requested images was capable of being retrieved'),
                            n(e))
                          : void 0;
                      }),
                      (t2.onload = function () {
                        (l[r] = i.text ? { img: t2, text: t2.text } : t2),
                          (m += 1) === s && e(),
                          w.removeElement(t2);
                      }),
                      (t2.src = o),
                      w.setCSSAttr(g, { position: 'fixed', opacity: '0' }),
                      t1.body.appendChild(g));
              }));
        }
        function g(e) {
          (e = w.isObject(e) ? e : {}), A.stopVideoStreaming(e);
        }
        function f(e, r) {
          var i = e.options || {},
            n = i.images,
            o = i.video,
            a = Number(i.gifWidth),
            s = Number(i.gifHeight),
            d = (i.numFrames, e.cameraStream),
            c = e.videoElement,
            l = e.videoWidth,
            u = e.videoHeight,
            m = M.getCropDimensions({
              videoWidth: l,
              videoHeight: u,
              gifHeight: s,
              gifWidth: a,
            });
          (i.crop = m),
            (i.videoElement = c),
            (i.videoWidth = l),
            (i.videoHeight = u),
            (i.cameraStream = d),
            w.isElement(c) &&
              ((c.width = a + m.width),
              (c.height = s + m.height),
              i.webcamVideoElement ||
                (w.setCSSAttr(c, { position: 'fixed', opacity: '0' }),
                t1.body.appendChild(c)),
              c.play(),
              M.getGIF(i, function (e) {
                (n && n.length) || (o && o.length) || g(e), r(e);
              }));
        }
        function h() {
          var e =
              arguments.length > 0 && arguments[0] !== i ? arguments[0] : {},
            t1 = e.callback,
            r = e.existingVideo,
            n = e.options,
            a = C.validate({ getUserMedia: !0, 'window.URL': !0 }),
            s = void 0,
            d = void 0;
          if (a.error) return t1(a);
          if (w.isElement(r) && r.src) {
            if (
              ((d = r.src),
              (s = w.getExtension(d)),
              !w.isSupported.videoCodecs[s])
            )
              return t1(C.messages.videoCodecs);
          } else
            w.isArray(r) &&
              w.each(r, function (e, t1) {
                return (
                  (s =
                    t1 instanceof Blob
                      ? t1.type.substr(t1.type.lastIndexOf('/') + 1, t1.length)
                      : t1.substr(t1.lastIndexOf('.') + 1, t1.length)),
                  w.isSupported.videoCodecs[s] ? ((r = t1), !1) : void 0
                );
              });
          A.startStreaming({
            completed: function (e) {
              (e.options = n || {}), f(e, t1);
            },
            existingVideo: r,
            crossOrigin: n.crossOrigin,
            options: n,
          });
        }
        function p() {
          var e =
              arguments.length > 0 && arguments[0] !== i ? arguments[0] : {},
            t1 = e.callback,
            r = e.lastCameraStream,
            n = e.options,
            a = e.webcamVideoElement;
          return o()
            ? n.savedRenderingContexts.length
              ? void M.getGIF(n, function (e) {
                  t1(e);
                })
              : void A.startVideoStreaming(
                  function () {
                    var e =
                      arguments.length > 0 && arguments[0] !== i
                        ? arguments[0]
                        : {};
                    (e.options = n || {}), f(e, t1);
                  },
                  {
                    lastCameraStream: r,
                    callback: t1,
                    webcamVideoElement: a,
                    crossOrigin: n.crossOrigin,
                  },
                )
            : t1(C.validate());
        }
        function v(e, t1) {
          if (
            ((t1 = w.isFunction(e) ? e : t1),
            (e = w.isObject(e) ? e : {}),
            w.isFunction(t1))
          ) {
            var r = w.mergeOptions(x, e) || {},
              i = e.cameraStream,
              n = r.images,
              o = n ? n.length : 0,
              a = r.video,
              s = r.webcamVideoElement;
            (r = w.mergeOptions(r, {
              gifWidth: Math.floor(r.gifWidth),
              gifHeight: Math.floor(r.gifHeight),
            })),
              o
                ? m({ images: n, imagesLength: o, callback: t1, options: r })
                : a
                  ? h({ existingVideo: a, callback: t1, options: r })
                  : p({
                      lastCameraStream: i,
                      callback: t1,
                      webcamVideoElement: s,
                      options: r,
                    });
          }
        }
        function b(e, t1) {
          if (
            ((t1 = w.isFunction(e) ? e : t1),
            (e = w.isObject(e) ? e : {}),
            w.isFunction(t1))
          ) {
            var r = w.mergeOptions(x, e);
            v(
              w.mergeOptions(r, {
                interval: 0.1,
                numFrames: 1,
                gifWidth: Math.floor(r.gifWidth),
                gifHeight: Math.floor(r.gifHeight),
              }),
              t1,
            );
          }
        }
        var e1,
          w = {
            URL: e.URL || e.webkitURL || e.mozURL || e.msURL,
            getUserMedia: (e1 =
              r.getUserMedia ||
              r.webkitGetUserMedia ||
              r.mozGetUserMedia ||
              r.msGetUserMedia)
              ? e1.bind(r)
              : e1,
            requestAnimFrame:
              e.requestAnimationFrame ||
              e.webkitRequestAnimationFrame ||
              e.mozRequestAnimationFrame ||
              e.oRequestAnimationFrame ||
              e.msRequestAnimationFrame,
            requestTimeout: function (e, t1) {
              if (((e = e || w.noop), (t1 = t1 || 0), !w.requestAnimFrame))
                return setTimeout(e, t1);
              var r = new Date().getTime(),
                i = {},
                n = w.requestAnimFrame;
              return (
                (i.value = n(function a() {
                  new Date().getTime() - r >= t1 ? e.call() : (i.value = n(a));
                })),
                i
              );
            },
            Blob:
              e.Blob ||
              e.BlobBuilder ||
              e.WebKitBlobBuilder ||
              e.MozBlobBuilder ||
              e.MSBlobBuilder,
            btoa: (
              e.btoa ||
              function (e) {
                for (
                  var t1 = '',
                    r = 0,
                    i = e.length,
                    n =
                      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
                    o = void 0,
                    a = void 0,
                    s = void 0,
                    d = void 0,
                    c = void 0,
                    l = void 0,
                    u = void 0;
                  i > r;

                )
                  (o = e.charCodeAt(r++)),
                    (a = e.charCodeAt(r++)),
                    (s = e.charCodeAt(r++)),
                    (d = o >> 2),
                    (c = ((3 & o) << 4) | (a >> 4)),
                    (l = ((15 & a) << 2) | (s >> 6)),
                    (u = 63 & s),
                    isNaN(a) ? (l = u = 64) : isNaN(s) && (u = 64),
                    (t1 =
                      t1 +
                      n.charAt(d) +
                      n.charAt(c) +
                      n.charAt(l) +
                      n.charAt(u));
                return t1;
              }
            ).bind(e),
            isObject: function (e) {
              return (
                e && '[object Object]' === Object.prototype.toString.call(e)
              );
            },
            isEmptyObject: function (e) {
              return w.isObject(e) && !Object.keys(e).length;
            },
            isArray: function (e) {
              return e && Array.isArray(e);
            },
            isFunction: function (e) {
              return e && 'function' == typeof e;
            },
            isElement: function (e) {
              return e && 1 === e.nodeType;
            },
            isString: function (e) {
              return (
                'string' == typeof e ||
                '[object String]' === Object.prototype.toString.call(e)
              );
            },
            isSupported: {
              canvas: function () {
                var e = t1.createElement('canvas');
                return e && e.getContext && e.getContext('2d');
              },
              webworkers: function () {
                return e.Worker;
              },
              blob: function () {
                return w.Blob;
              },
              Uint8Array: function () {
                return e.Uint8Array;
              },
              Uint32Array: function () {
                return e.Uint32Array;
              },
              videoCodecs: (function () {
                var e = t1.createElement('video'),
                  r = { mp4: !1, h264: !1, ogv: !1, ogg: !1, webm: !1 };
                try {
                  e &&
                    e.canPlayType &&
                    ((r.mp4 =
                      '' !== e.canPlayType('video/mp4; codecs="mp4v.20.8"')),
                    (r.h264 =
                      '' !==
                      (e.canPlayType('video/mp4; codecs="avc1.42E01E"') ||
                        e.canPlayType(
                          'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
                        ))),
                    (r.ogv =
                      '' !== e.canPlayType('video/ogg; codecs="theora"')),
                    (r.ogg =
                      '' !== e.canPlayType('video/ogg; codecs="theora"')),
                    (r.webm =
                      -1 !==
                      e.canPlayType('video/webm; codecs="vp8, vorbis"')));
                } catch (i) {}
                return r;
              })(),
            },
            noop: function () {},
            each: function (e, t1) {
              var r = void 0,
                i = void 0;
              if (w.isArray(e))
                for (r = -1, i = e.length; ++r < i && !1 !== t1(r, e[r]); );
              else if (w.isObject(e)) {
                for (r in e)
                  if (e.hasOwnProperty(r) && !1 === t1(r, e[r])) break;
              }
            },
            mergeOptions: function (e, t1) {
              if (w.isObject(e) && w.isObject(t1) && Object.keys) {
                var r = {};
                return (
                  w.each(e, function (t1) {
                    r[t1] = e[t1];
                  }),
                  w.each(t1, function (i) {
                    var n = t1[i];
                    r[i] = w.isObject(n) && e[i] ? w.mergeOptions(e[i], n) : n;
                  }),
                  r
                );
              }
            },
            setCSSAttr: function (e, t1, r) {
              w.isElement(e) &&
                (w.isString(t1) && w.isString(r)
                  ? (e.style[t1] = r)
                  : w.isObject(t1) &&
                    w.each(t1, function (t1, r) {
                      e.style[t1] = r;
                    }));
            },
            removeElement: function (e) {
              w.isElement(e) && e.parentNode && e.parentNode.removeChild(e);
            },
            createWebWorker: function (e) {
              if (!w.isString(e)) return {};
              try {
                var t1 = new w.Blob([e], { type: 'text/javascript' }),
                  r = w.URL.createObjectURL(t1),
                  i = new Worker(r);
                return { objectUrl: r, worker: i };
              } catch (n) {
                return '' + n;
              }
            },
            getExtension: function (e) {
              return e.substr(e.lastIndexOf('.') + 1, e.length);
            },
            getFontSize: function () {
              var e =
                arguments.length > 0 && arguments[0] !== i ? arguments[0] : {};
              if (!t1.body || !1 === e.resizeFont) return e.fontSize;
              var r = e.text,
                n = e.gifWidth,
                o = parseInt(e.fontSize, 10),
                a = parseInt(e.minFontSize, 10),
                s = t1.createElement('div'),
                d = t1.createElement('span');
              for (
                s.setAttribute('width', n),
                  s.appendChild(d),
                  d.innerHTML = r,
                  d.style.fontSize = o + 'px',
                  d.style.textIndent = '-9999px',
                  d.style.visibility = 'hidden',
                  t1.body.appendChild(d);
                d.offsetWidth > n && o >= a;

              )
                d.style.fontSize = --o + 'px';
              return t1.body.removeChild(d), o + 'px';
            },
            webWorkerError: !1,
          },
          y = Object.freeze({ default: w }),
          C = {
            validate: function (e) {
              e = w.isObject(e) ? e : {};
              var t1 = {};
              return (
                w.each(C.validators, function (r, i) {
                  return e[i.errorCode] || i.condition
                    ? void 0
                    : (((t1 = i).error = !0), !1);
                }),
                delete t1.condition,
                t1
              );
            },
            isValid: function R(e) {
              return !0 !== C.validate(e).error;
            },
            validators: [
              {
                condition: w.isFunction(w.getUserMedia),
                errorCode: 'getUserMedia',
                errorMsg:
                  'The getUserMedia API is not supported in your browser',
              },
              {
                condition: w.isSupported.canvas(),
                errorCode: 'canvas',
                errorMsg: 'Canvas elements are not supported in your browser',
              },
              {
                condition: w.isSupported.webworkers(),
                errorCode: 'webworkers',
                errorMsg:
                  'The Web Workers API is not supported in your browser',
              },
              {
                condition: w.isFunction(w.URL),
                errorCode: 'window.URL',
                errorMsg: 'The window.URL API is not supported in your browser',
              },
              {
                condition: w.isSupported.blob(),
                errorCode: 'window.Blob',
                errorMsg:
                  'The window.Blob File API is not supported in your browser',
              },
              {
                condition: w.isSupported.Uint8Array(),
                errorCode: 'window.Uint8Array',
                errorMsg:
                  'The window.Uint8Array function constructor is not supported in your browser',
              },
              {
                condition: w.isSupported.Uint32Array(),
                errorCode: 'window.Uint32Array',
                errorMsg:
                  'The window.Uint32Array function constructor is not supported in your browser',
              },
            ],
            messages: {
              videoCodecs: {
                errorCode: 'videocodec',
                errorMsg:
                  'The video codec you are trying to use is not supported in your browser',
              },
            },
          },
          k = Object.freeze({ default: C }),
          S = function () {},
          x = {
            sampleInterval: 10,
            numWorkers: 2,
            filter: '',
            gifWidth: 200,
            gifHeight: 200,
            interval: 0.1,
            numFrames: 10,
            frameDuration: 1,
            keepCameraOn: !1,
            images: [],
            video: null,
            webcamVideoElement: null,
            cameraStream: null,
            text: '',
            fontWeight: 'normal',
            fontSize: '16px',
            minFontSize: '10px',
            resizeFont: !1,
            fontFamily: 'sans-serif',
            fontColor: '#ffffff',
            textAlign: 'center',
            textBaseline: 'bottom',
            textXCoordinate: null,
            textYCoordinate: null,
            progressCallback: S,
            completeCallback: S,
            saveRenderingContexts: !1,
            savedRenderingContexts: [],
            showFrameText: !0,
            crossOrigin: 'Anonymous',
            waterMark: null,
            waterMarkHeight: null,
            waterMarkWidth: null,
            waterMarkXCoordinate: 1,
            waterMarkYCoordinate: 1,
          },
          F = Object.freeze({ default: x }),
          W = function () {},
          O = function (e) {
            (this.canvas = null),
              (this.ctx = null),
              (this.repeat = 0),
              (this.frames = []),
              (this.numRenderedFrames = 0),
              (this.onRenderCompleteCallback = W),
              (this.onRenderProgressCallback = W),
              (this.workers = []),
              (this.availableWorkers = []),
              (this.generatingGIF = !1),
              (this.options = e),
              this.initializeWebWorkers(e);
          };
        O.prototype = {
          workerMethods: c(),
          initializeWebWorkers: function (e) {
            var i = d.toString() + '(' + c.toString() + '());',
              n = void 0,
              o = void 0,
              a = void 0,
              s = void 0,
              l = -1,
              u = '';
            for (s = e.numWorkers; ++l < s; )
              (n = w.createWebWorker(i)),
                w.isObject(n)
                  ? ((o = n.objectUrl),
                    (a = n.worker),
                    this.workers.push({ worker: a, objectUrl: o }),
                    this.availableWorkers.push(a))
                  : ((u = n), (w.webWorkerError = !!n));
            (this.workerError = u),
              (this.canvas = t1.createElement('canvas')),
              (this.canvas.width = e.gifWidth),
              (this.canvas.height = e.gifHeight),
              (this.ctx = this.canvas.getContext('2d')),
              (this.frames = []);
          },
          getWorker: function () {
            return this.availableWorkers.pop();
          },
          freeWorker: function (e) {
            this.availableWorkers.push(e);
          },
          byteMap: (function () {
            for (var e = [], t1 = 0; 256 > t1; t1++)
              e[t1] = String.fromCharCode(t1);
            return e;
          })(),
          bufferToString: function (e) {
            for (var t1 = e.length, r = '', i = -1; ++i < t1; )
              r += this.byteMap[e[i]];
            return r;
          },
          onFrameFinished: function (e) {
            var t1 = this,
              r = t1.frames,
              n = !!(t1.options.images || []).length,
              o = r.every(function (e) {
                return !e.beingProcessed && e.done;
              });
            t1.numRenderedFrames++,
              n && e(t1.numRenderedFrames / r.length),
              t1.onRenderProgressCallback(
                (0.75 * t1.numRenderedFrames) / r.length,
              ),
              o
                ? t1.generatingGIF ||
                  t1.generateGIF(r, t1.onRenderCompleteCallback)
                : w.requestTimeout(function () {
                    t1.processNextFrame();
                  }, 1);
          },
          processFrame: function (e) {
            var t1 = this,
              r = (this.options, this.options),
              n = r.progressCallback,
              o = r.sampleInterval,
              a = this.frames,
              s = void 0,
              d = void 0,
              c = function () {
                var e =
                    arguments.length > 0 && arguments[0] !== i
                      ? arguments[0]
                      : {},
                  r = e.data;
                delete s.data,
                  (s.pixels = Array.prototype.slice.call(r.pixels)),
                  (s.palette = Array.prototype.slice.call(r.palette)),
                  (s.done = !0),
                  (s.beingProcessed = !1),
                  t1.freeWorker(d),
                  t1.onFrameFinished(n);
              };
            return (s = a[e]).beingProcessed || s.done
              ? void this.onFrameFinished()
              : ((s.sampleInterval = o),
                (s.beingProcessed = !0),
                (s.gifshot = !0),
                void ((d = this.getWorker())
                  ? ((d.onmessage = c), d.postMessage(s))
                  : c({ data: t1.workerMethods.run(s) })));
          },
          startRendering: function (e) {
            this.onRenderCompleteCallback = e;
            for (
              var t1 = 0;
              t1 < this.options.numWorkers && t1 < this.frames.length;
              t1++
            )
              this.processFrame(t1);
          },
          processNextFrame: function () {
            for (var e = -1, t1 = 0; t1 < this.frames.length; t1++) {
              var r = this.frames[t1];
              if (!r.done && !r.beingProcessed) {
                e = t1;
                break;
              }
            }
            e >= 0 && this.processFrame(e);
          },
          generateGIF: function (e, t1) {
            var r = [],
              i = { loop: this.repeat },
              n = this.options,
              o = n.interval,
              a = n.frameDuration,
              d = !!n.images.length,
              c = n.gifHeight,
              u = n.gifWidth,
              m = new l(r, u, c, i),
              g = this.onRenderProgressCallback,
              f = d ? 100 * o : 0,
              h = void 0;
            (this.generatingGIF = !0),
              w.each(e, function (t1, r) {
                var i = r.palette;
                g(0.75 + (0.25 * r.position * 1) / e.length);
                for (var n = 0; a > n; n++)
                  m.addFrame(0, 0, u, c, r.pixels, { palette: i, delay: f });
              }),
              m.end(),
              g(1),
              (this.frames = []),
              (this.generatingGIF = !1),
              w.isFunction(t1) &&
                ((h = this.bufferToString(r)),
                t1('data:image/gif;base64,' + w.btoa(h)));
          },
          setRepeat: function (e) {
            this.repeat = e;
          },
          addFrame: function (e, t1, r) {
            t1 = w.isObject(t1) ? t1 : {};
            var n = this.ctx,
              o = this.options,
              a = o.gifWidth,
              s = o.gifHeight,
              d = w.getFontSize(t1),
              c = t1,
              l = c.filter,
              u = c.fontColor,
              m = c.fontFamily,
              g = c.fontWeight,
              f = (c.gifHeight, c.gifWidth, c.text),
              h = c.textAlign,
              p = c.textBaseline,
              v = c.waterMark,
              b = c.waterMarkHeight,
              y = c.waterMarkWidth,
              C = c.waterMarkXCoordinate,
              k = c.waterMarkYCoordinate,
              S = t1.textXCoordinate
                ? t1.textXCoordinate
                : 'left' === h
                  ? 1
                  : 'right' === h
                    ? a
                    : a / 2,
              x = t1.textYCoordinate
                ? t1.textYCoordinate
                : 'top' === p
                  ? 1
                  : 'center' === p
                    ? s / 2
                    : s,
              W = r && t1.showFrameText ? r : f,
              O = void 0;
            try {
              (n.filter = l),
                n.drawImage(e, 0, 0, a, s),
                W &&
                  ((n.font = g + ' ' + d + ' ' + m),
                  (n.fillStyle = u),
                  (n.textAlign = h),
                  (n.textBaseline = p),
                  n.fillText(W, S, x)),
                v && n.drawImage(v, C, k, y, b),
                (O = n.getImageData(0, 0, a, s)),
                this.addFrameImageData(O);
            } catch (E) {
              return '' + E;
            }
          },
          addFrameImageData: function () {
            var e =
                arguments.length > 0 && arguments[0] !== i ? arguments[0] : {},
              t1 = this.frames,
              r = e.data;
            this.frames.push({
              data: r,
              width: e.width,
              height: e.height,
              palette: null,
              dithering: null,
              done: !1,
              beingProcessed: !1,
              position: t1.length,
            });
          },
          onRenderProgress: function (e) {
            this.onRenderProgressCallback = e;
          },
          isRendering: function () {
            return this.generatingGIF;
          },
          getBase64GIF: function (e) {
            var t1 = this;
            t1.startRendering(function (r) {
              t1.destroyWorkers(),
                w.requestTimeout(function () {
                  e(r);
                }, 0);
            });
          },
          destroyWorkers: function () {
            if (!this.workerError) {
              var e = this.workers;
              w.each(e, function (e, t1) {
                var r = t1.worker,
                  i = t1.objectUrl;
                r.terminate(), w.URL.revokeObjectURL(i);
              });
            }
          },
        };
        var E = function () {},
          M = {
            getGIF: function () {
              var e =
                  arguments.length > 0 && arguments[0] !== i
                    ? arguments[0]
                    : {},
                r = arguments[1];
              r = w.isFunction(r) ? r : E;
              var n = t1.createElement('canvas'),
                o = void 0,
                s = !!e.images.length,
                d = e.cameraStream,
                c = e.crop,
                l = e.filter,
                u = e.fontColor,
                m = e.fontFamily,
                g = e.fontWeight,
                f = e.keepCameraOn,
                h = (e.numWorkers, e.progressCallback),
                p = e.saveRenderingContexts,
                v = e.savedRenderingContexts,
                b = e.text,
                y = e.textAlign,
                C = e.textBaseline,
                k = e.videoElement,
                S = e.videoHeight,
                x = e.videoWidth,
                F = e.webcamVideoElement,
                W = e.waterMark,
                M = e.waterMarkHeight,
                A = e.waterMarkWidth,
                U = e.waterMarkXCoordinate,
                R = e.waterMarkYCoordinate,
                T = Number(e.gifWidth),
                I = Number(e.gifHeight),
                j = Number(e.interval),
                V = (e.sampleInterval, s ? 0 : 1e3 * j),
                H = [],
                z = v.length ? v.length : e.numFrames,
                L = z,
                B = new O(e),
                P = w.getFontSize(e),
                G = e.textXCoordinate
                  ? e.textXCoordinate
                  : 'left' === y
                    ? 1
                    : 'right' === y
                      ? T
                      : T / 2,
                D = e.textYCoordinate
                  ? e.textYCoordinate
                  : 'top' === C
                    ? 1
                    : 'center' === C
                      ? I / 2
                      : I,
                N = g + ' ' + P + ' ' + m,
                q = c ? Math.floor(c.scaledWidth / 2) : 0,
                X = c ? x - c.scaledWidth : 0,
                Y = c ? Math.floor(c.scaledHeight / 2) : 0,
                Q = c ? S - c.scaledHeight : 0,
                _ = function K() {
                  function e() {
                    try {
                      X > x && (X = x),
                        Q > S && (Q = S),
                        0 > q && (q = 0),
                        0 > Y && (Y = 0),
                        (o.filter = l),
                        o.drawImage(k, q, Y, X, Q, 0, 0, T, I),
                        t1();
                    } catch (r) {
                      if ('NS_ERROR_NOT_AVAILABLE' !== r.name) throw r;
                      w.requestTimeout(e, 100);
                    }
                  }
                  function t1() {
                    var e = void 0;
                    p && H.push(o.getImageData(0, 0, T, I)),
                      W && o.drawImage(W, U, R, A, M),
                      b &&
                        ((o.font = N),
                        (o.fillStyle = u),
                        (o.textAlign = y),
                        (o.textBaseline = C),
                        o.fillText(b, G, D)),
                      (e = o.getImageData(0, 0, T, I)),
                      B.addFrameImageData(e),
                      h((z - (L = i)) / z),
                      i > 0 && w.requestTimeout(K, V),
                      L ||
                        B.getBase64GIF(function (e) {
                          r({
                            error: !1,
                            errorCode: '',
                            errorMsg: '',
                            image: e,
                            cameraStream: d,
                            videoElement: k,
                            webcamVideoElement: F,
                            savedRenderingContexts: H,
                            keepCameraOn: f,
                          });
                        });
                  }
                  var i = L - 1;
                  v.length ? (o.putImageData(v[z - L], 0, 0), t1()) : e();
                };
              (z = z !== i ? z : 10),
                (j = j !== i ? j : 0.1),
                (n.width = T),
                (n.height = I),
                (o = n.getContext('2d')),
                (function J() {
                  return v.length || 0 !== k.currentTime
                    ? void _()
                    : void w.requestTimeout(J, 100);
                })();
            },
            getCropDimensions: function () {
              var e =
                  arguments.length > 0 && arguments[0] !== i
                    ? arguments[0]
                    : {},
                t1 = e.videoWidth,
                r = e.videoHeight,
                n = e.gifWidth,
                o = e.gifHeight,
                a = { width: 0, height: 0, scaledWidth: 0, scaledHeight: 0 };
              return (
                t1 > r
                  ? ((a.width = Math.round((o / r) * t1) - n),
                    (a.scaledWidth = Math.round(a.width * (r / o))))
                  : ((a.height = Math.round((n / t1) * r) - o),
                    (a.scaledHeight = Math.round(a.height * (t1 / n)))),
                a
              );
            },
          },
          A = {
            loadedData: !1,
            defaultVideoDimensions: { width: 640, height: 480 },
            findVideoSize: function T(e) {
              T.attempts = T.attempts || 0;
              var t1 = e.cameraStream,
                r = e.completedCallback,
                i = e.videoElement;
              i &&
                (i.videoWidth > 0 && i.videoHeight > 0
                  ? (i.removeEventListener('loadeddata', A.findVideoSize),
                    r({
                      videoElement: i,
                      cameraStream: t1,
                      videoWidth: i.videoWidth,
                      videoHeight: i.videoHeight,
                    }))
                  : T.attempts < 10
                    ? ((T.attempts += 1),
                      w.requestTimeout(function () {
                        A.findVideoSize(e);
                      }, 400))
                    : r({
                        videoElement: i,
                        cameraStream: t1,
                        videoWidth: A.defaultVideoDimensions.width,
                        videoHeight: A.defaultVideoDimensions.height,
                      }));
            },
            onStreamingTimeout: function (e) {
              w.isFunction(e) &&
                e({
                  error: !0,
                  errorCode: 'getUserMedia',
                  errorMsg:
                    'There was an issue with the getUserMedia API - Timed out while trying to start streaming',
                  image: null,
                  cameraStream: {},
                });
            },
            stream: function (e) {
              var t1 = w.isArray(e.existingVideo)
                  ? e.existingVideo[0]
                  : e.existingVideo,
                r = e.cameraStream,
                i = e.completedCallback,
                n = e.streamedCallback,
                o = e.videoElement;
              if ((w.isFunction(n) && n(), t1)) {
                if (w.isString(t1))
                  (o.src = t1),
                    (o.innerHTML =
                      '<source src="' +
                      t1 +
                      '" type="video/' +
                      w.getExtension(t1) +
                      '" />');
                else if (t1 instanceof Blob) {
                  try {
                    o.src = w.URL.createObjectURL(t1);
                  } catch (a) {}
                  o.innerHTML =
                    '<source src="' + t1 + '" type="' + t1.type + '" />';
                }
              } else if (o.mozSrcObject) o.mozSrcObject = r;
              else if (w.URL)
                try {
                  (o.srcObject = r), (o.src = w.URL.createObjectURL(r));
                } catch (a$1) {
                  o.srcObject = r;
                }
              o.play(),
                w.requestTimeout(function s() {
                  (s.count = s.count || 0),
                    !0 === A.loadedData
                      ? (A.findVideoSize({
                          videoElement: o,
                          cameraStream: r,
                          completedCallback: i,
                        }),
                        (A.loadedData = !1))
                      : ((s.count += 1),
                        s.count > 10
                          ? A.findVideoSize({
                              videoElement: o,
                              cameraStream: r,
                              completedCallback: i,
                            })
                          : s());
                }, 0);
            },
            startStreaming: function (e) {
              var r = w.isFunction(e.error) ? e.error : w.noop,
                i = w.isFunction(e.streamed) ? e.streamed : w.noop,
                n = w.isFunction(e.completed) ? e.completed : w.noop,
                o = e.crossOrigin,
                a = e.existingVideo,
                s = e.lastCameraStream,
                d = e.options,
                c = e.webcamVideoElement,
                l = w.isElement(a) ? a : c || t1.createElement('video');
              o && (l.crossOrigin = d.crossOrigin),
                (l.autoplay = !0),
                (l.loop = !0),
                (l.muted = !0),
                l.addEventListener('loadeddata', function () {
                  (A.loadedData = !0), d.offset && (l.currentTime = d.offset);
                }),
                a
                  ? A.stream({
                      videoElement: l,
                      existingVideo: a,
                      completedCallback: n,
                    })
                  : s
                    ? A.stream({
                        videoElement: l,
                        cameraStream: s,
                        streamedCallback: i,
                        completedCallback: n,
                      })
                    : w.getUserMedia(
                        { video: !0 },
                        function (e) {
                          A.stream({
                            videoElement: l,
                            cameraStream: e,
                            streamedCallback: i,
                            completedCallback: n,
                          });
                        },
                        r,
                      );
            },
            startVideoStreaming: function (e) {
              var t1 =
                  arguments.length > 1 && arguments[1] !== i
                    ? arguments[1]
                    : {},
                r = t1.timeout !== i ? t1.timeout : 0,
                n = t1.callback,
                o = t1.webcamVideoElement,
                a = void 0;
              r > 0 &&
                (a = w.requestTimeout(function () {
                  A.onStreamingTimeout(n);
                }, 1e4)),
                A.startStreaming({
                  error: function () {
                    n({
                      error: !0,
                      errorCode: 'getUserMedia',
                      errorMsg:
                        'There was an issue with the getUserMedia API - the user probably denied permission',
                      image: null,
                      cameraStream: {},
                    });
                  },
                  streamed: function () {
                    clearTimeout(a);
                  },
                  completed: function () {
                    var t1 =
                      arguments.length > 0 && arguments[0] !== i
                        ? arguments[0]
                        : {};
                    e({
                      cameraStream: t1.cameraStream,
                      videoElement: t1.videoElement,
                      videoHeight: t1.videoHeight,
                      videoWidth: t1.videoWidth,
                    });
                  },
                  lastCameraStream: t1.lastCameraStream,
                  webcamVideoElement: o,
                  crossOrigin: t1.crossOrigin,
                  options: t1,
                });
            },
            stopVideoStreaming: function (e) {
              var t1 = (e = w.isObject(e) ? e : {}),
                r = t1.keepCameraOn,
                i = t1.videoElement,
                n = t1.webcamVideoElement,
                o = e.cameraStream || {},
                a = (o.getTracks && o.getTracks()) || [],
                s = !!a.length,
                d = a[0];
              !r && s && w.isFunction(d.stop) && d.stop(),
                w.isElement(i) &&
                  !n &&
                  (i.pause(),
                  w.isFunction(w.URL.revokeObjectURL) &&
                    !w.webWorkerError &&
                    i.src &&
                    w.URL.revokeObjectURL(i.src),
                  w.removeElement(i));
            },
          },
          U = {
            utils: y,
            error: k,
            defaultOptions: F,
            createGIF: v,
            takeSnapShot: b,
            stopVideoStreaming: g,
            isSupported: n,
            isWebCamGIFSupported: o,
            isExistingVideoGIFSupported: s,
            isExistingImagesGIFSupported: a,
            VERSION: '0.4.5',
          };
        void 0 !==
          (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return U;
          }.apply(exports, [])) &&
          (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
      })(
        'undefined' != typeof window ? window : {},
        'undefined' != typeof document
          ? document
          : { createElement: function () {} },
        'undefined' != typeof window ? window.navigator : {},
      ),
        (factory = function () {
          'use strict';
          var blob = new Blob(
            [
            ],
            { type: 'application/javascript' },
          );
          window.__heic2any__worker = new Worker(URL.createObjectURL(blob));
          var supportedMIMETypes = ['image/png', 'image/jpeg', 'image/gif'],
            utils = {
              blobToDataURL: function (blob) {
                return new Promise(function (resolve, reject) {
                  var reader = new FileReader();
                  (reader.onerror = function () {
                    reject('ERR_DOM Error on converting blob to data URL');
                  }),
                    (reader.onload = function (e) {
                      resolve(reader.result);
                    }),
                    reader.readAsDataURL(blob);
                });
              },
              dataURItoBlob: function (dataURI) {
                try {
                  for (
                    var byteString = atob(dataURI.split(',')[1]),
                      mimeString = dataURI
                        .split(',')[0]
                        .split(':')[1]
                        .split(';')[0],
                      ab = new ArrayBuffer(byteString.length),
                      ia = new Uint8Array(ab),
                      i = 0;
                    i < byteString.length;
                    i++
                  )
                    ia[i] = byteString.charCodeAt(i);
                  return new Blob([ab], { type: mimeString });
                } catch (e) {
                  return e.toString ? e.toString() : e;
                }
              },
              imageDataToBlob: function (ref) {
                var imageData = ref.imageData,
                  toType = ref.toType;
                void 0 === toType && (toType = 'image/png');
                var quality = ref.quality;
                return (
                  void 0 === quality && (quality = 0.92),
                  (quality > 1 || quality < 0) && (quality = 0.92),
                  -1 === supportedMIMETypes.indexOf(toType) &&
                    (toType = 'image/png'),
                  new Promise(function (resolve, reject) {
                    var canvas = null;
                    try {
                      canvas = document.createElement('canvas');
                    } catch (e) {}
                    if (!canvas)
                      return reject(
                        'ERR_CANVAS Error on converting imagedata to blob: Could not create canvas element',
                      );
                    (canvas.width = imageData.width),
                      (canvas.height = imageData.height);
                    var ctx = canvas.getContext('2d');
                    if (!ctx)
                      return reject(
                        'ERR_CANVAS Error on converting imagedata to blob: Could not get canvas context',
                      );
                    ctx.putImageData(imageData, 0, 0),
                      canvas.toBlob(
                        function (blob) {
                          return blob
                            ? resolve(blob)
                            : reject(
                                'ERR_CANVAS Error on converting imagedata to blob: Could not get blob from canvas',
                              );
                        },
                        toType,
                        quality,
                      );
                  })
                );
              },
              imagesToGif: function (ref) {
                var images = ref.images,
                  interval = ref.interval,
                  gifHeight = ref.gifHeight,
                  gifWidth = ref.gifWidth;
                return new Promise(function (resolve, reject) {
                  gifshot.createGIF(
                    {
                      images: images,
                      interval: interval,
                      gifHeight: gifHeight,
                      gifWidth: gifWidth,
                    },
                    function (res) {
                      return (
                        res.error &&
                          reject(
                            'ERR_GIF ' + res.errorCode + ' ' + res.errorMessage,
                          ),
                        resolve(res.image)
                      );
                    },
                  );
                });
              },
              otherImageType: function (buffer) {
                for (
                  var arr = new Uint8Array(buffer).subarray(0, 4),
                    header = '',
                    i = 0;
                  i < arr.length;
                  i++
                )
                  header += arr[i].toString(16);
                switch (header) {
                  case '89504e47':
                    return 'image/png';
                  case '47494638':
                    return 'image/gif';
                  case 'ffd8ffe0':
                  case 'ffd8ffe1':
                  case 'ffd8ffe2':
                  case 'ffd8ffe3':
                  case 'ffd8ffe8':
                    return 'image/jpeg';
                  default:
                    return !1;
                }
              },
              error: function (message) {
                var code = 0;
                message
                  ? 'string' != typeof message &&
                    (message = message.toString
                      ? message.toString()
                      : JSON.stringify(message))
                  : (message = 'ERR_UNKNOWN');
                for (
                  var headers = [
                      'ERR_USER',
                      'ERR_LIBHEIF',
                      'ERR_GIF',
                      'ERR_DOM',
                      'ERR_CANVAS',
                    ],
                    index = 0;
                  index < headers.length;
                  index++
                ) {
                  var header = headers[index];
                  0 === message.indexOf(header) && (code = index + 1);
                }
                return { code: code, message: message };
              },
            };
          function decodeBuffer(buffer) {
            return new Promise(function (resolve, reject) {
              var id = (Math.random() * new Date().getTime()).toString();
              window.__heic2any__worker.postMessage({ id: id, buffer: buffer }),
                window.__heic2any__worker.addEventListener(
                  'message',
                  function (message) {
                    if (message.data.id === id)
                      return message.data.error
                        ? reject(message.data.error)
                        : resolve(message.data.imageDataArr);
                  },
                );
            });
          }
          return function heic2any(ref) {
            var blob = ref.blob,
              toType = ref.toType;
            void 0 === toType && (toType = 'image/png');
            var quality = ref.quality;
            void 0 === quality && (quality = 0.92);
            var gifInterval = ref.gifInterval;
            void 0 === gifInterval && (gifInterval = 0.4);
            var multiple = ref.multiple;
            return (
              void 0 === multiple && (multiple = void 0),
              new Promise(function (resolve, reject) {
                blob instanceof Blob ||
                  utils.error('ERR_USER library only accepts BLOBs as input'),
                  'boolean' != typeof multiple &&
                    utils.error(
                      'ERR_USER "multiple" parameter should be of type "boolean"',
                    ),
                  'number' != typeof quality &&
                    utils.error(
                      'ERR_USER "quality" parameter should be of type "number"',
                    ),
                  'number' != typeof gifInterval &&
                    utils.error(
                      'ERR_USER "gifInterval" parameter should be of type "number"',
                    );
                var reader = new FileReader();
                (reader.onload = function (e) {
                  var gifWidth = 0,
                    gifHeight = 0,
                    buffer = e.target.result,
                    otherImageType = utils.otherImageType(buffer);
                  if (otherImageType)
                    return reject(
                      utils.error(
                        'ERR_USER Image is already browser readable: ' +
                          otherImageType,
                      ),
                    );
                  decodeBuffer(buffer)
                    .then(function (imageDataArr) {
                      return (
                        (gifWidth = imageDataArr[0].width),
                        (gifHeight = imageDataArr[0].height),
                        Promise.all(
                          imageDataArr.map(function (imageData) {
                            return utils.imageDataToBlob({
                              imageData: imageData,
                              toType: toType,
                              quality: quality,
                            });
                          }),
                        )
                      );
                    })
                    .then(function (blobs) {
                      return 'image/gif' === toType
                        ? Promise.all(
                            blobs.map(function (blob) {
                              return utils.blobToDataURL(blob);
                            }),
                          )
                        : (multiple ? resolve(blobs) : resolve(blobs[0]), ['']);
                    })
                    .then(function (dataURIs) {
                      return 'image/gif' === toType && dataURIs
                        ? utils.imagesToGif({
                            images: dataURIs,
                            interval: gifInterval,
                            gifWidth: gifWidth,
                            gifHeight: gifHeight,
                          })
                        : '';
                    })
                    .then(function (resultingGif) {
                      if ('image/gif' === toType && resultingGif) {
                        var blob = utils.dataURItoBlob(resultingGif);
                        'string' == typeof blob
                          ? reject(utils.error(blob))
                          : resolve(blob);
                      }
                    })
                    .catch(function (e) {
                      reject(utils.error(e));
                    });
                }),
                  reader.readAsArrayBuffer(blob);
              })
            );
          };
        }),
        (module.exports = factory()),
        (module.exports.default = factory());
    },
  },
]);