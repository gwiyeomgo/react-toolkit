try {
  (() => {
    var Jy = Object.create;
    var ma = Object.defineProperty;
    var Xy = Object.getOwnPropertyDescriptor;
    var Qy = Object.getOwnPropertyNames;
    var Zy = Object.getPrototypeOf,
      e2 = Object.prototype.hasOwnProperty;
    var ir = ((e) =>
      typeof require < 'u'
        ? require
        : typeof Proxy < 'u'
          ? new Proxy(e, {
              get: (t, r) => (typeof require < 'u' ? require : t)[r],
            })
          : e)(function (e) {
      if (typeof require < 'u') return require.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    });
    var Ye = (e, t) => () => (e && (t = e((e = 0))), t);
    var S = (e, t) => () => (
        t || e((t = { exports: {} }).exports, t), t.exports
      ),
      Xi = (e, t) => {
        for (var r in t) ma(e, r, { get: t[r], enumerable: !0 });
      },
      t2 = (e, t, r, n) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let a of Qy(t))
            !e2.call(e, a) &&
              a !== r &&
              ma(e, a, {
                get: () => t[a],
                enumerable: !(n = Xy(t, a)) || n.enumerable,
              });
        return e;
      };
    var pe = (e, t, r) => (
      (r = e != null ? Jy(Zy(e)) : {}),
      t2(
        t || !e || !e.__esModule
          ? ma(r, 'default', { value: e, enumerable: !0 })
          : r,
        e,
      )
    );
    var l = Ye(() => {});
    var c = Ye(() => {});
    var d = Ye(() => {});
    var h,
      Qi,
      Qe,
      Zi,
      yI,
      bI,
      EI,
      eu,
      AI,
      fe,
      ur,
      ga,
      vI,
      DI,
      CI,
      xI,
      tu,
      SI,
      ge,
      Hr,
      FI,
      he,
      wI,
      ru,
      Ze,
      BI,
      Fe,
      te,
      TI,
      Ft = Ye(() => {
        l();
        c();
        d();
        (h = __REACT__),
          ({
            Children: Qi,
            Component: Qe,
            Fragment: Zi,
            Profiler: yI,
            PureComponent: bI,
            StrictMode: EI,
            Suspense: eu,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: AI,
            cloneElement: fe,
            createContext: ur,
            createElement: ga,
            createFactory: vI,
            createRef: DI,
            forwardRef: CI,
            isValidElement: xI,
            lazy: tu,
            memo: SI,
            useCallback: ge,
            useContext: Hr,
            useDebugValue: FI,
            useEffect: he,
            useImperativeHandle: wI,
            useLayoutEffect: ru,
            useMemo: Ze,
            useReducer: BI,
            useRef: Fe,
            useState: te,
            version: TI,
          } = __REACT__);
      });
    var fu = {};
    Xi(fu, {
      A: () => a2,
      ActionBar: () => Ea,
      AddonPanel: () => Aa,
      Badge: () => va,
      Bar: () => o2,
      Blockquote: () => i2,
      Button: () => u2,
      ClipboardCode: () => s2,
      Code: () => su,
      DL: () => l2,
      Div: () => c2,
      DocumentWrapper: () => d2,
      ErrorFormatter: () => lu,
      FlexBar: () => Da,
      Form: () => Te,
      H1: () => p2,
      H2: () => Ca,
      H3: () => cu,
      H4: () => f2,
      H5: () => h2,
      H6: () => m2,
      HR: () => g2,
      IconButton: () => pt,
      IconButtonSkeleton: () => xa,
      Icons: () => we,
      Img: () => y2,
      LI: () => b2,
      Link: () => ft,
      ListItem: () => E2,
      Loader: () => du,
      OL: () => A2,
      P: () => v2,
      Placeholder: () => D2,
      Pre: () => C2,
      ResetWrapper: () => Sa,
      ScrollArea: () => x2,
      Separator: () => S2,
      Spaced: () => Fa,
      Span: () => F2,
      StorybookIcon: () => w2,
      StorybookLogo: () => B2,
      Symbols: () => T2,
      SyntaxHighlighter: () => Gr,
      TT: () => _2,
      TabBar: () => O2,
      TabButton: () => R2,
      TabWrapper: () => P2,
      Table: () => I2,
      Tabs: () => k2,
      TabsState: () => wa,
      TooltipLinkList: () => N2,
      TooltipMessage: () => L2,
      TooltipNote: () => Ba,
      UL: () => q2,
      WithTooltip: () => Wr,
      WithTooltipPure: () => Ta,
      Zoom: () => _a,
      codeCommon: () => wt,
      components: () => Oa,
      createCopyToClipboardFunction: () => j2,
      default: () => n2,
      getStoryHref: () => pu,
      icons: () => M2,
      interleaveSeparators: () => $2,
      nameSpaceClassNames: () => Ra,
      resetComponents: () => U2,
      withReset: () => Bt,
    });
    var n2,
      a2,
      Ea,
      Aa,
      va,
      o2,
      i2,
      u2,
      s2,
      su,
      l2,
      c2,
      d2,
      lu,
      Da,
      Te,
      p2,
      Ca,
      cu,
      f2,
      h2,
      m2,
      g2,
      pt,
      xa,
      we,
      y2,
      b2,
      ft,
      E2,
      du,
      A2,
      v2,
      D2,
      C2,
      Sa,
      x2,
      S2,
      Fa,
      F2,
      w2,
      B2,
      T2,
      Gr,
      _2,
      O2,
      R2,
      P2,
      I2,
      k2,
      wa,
      N2,
      L2,
      Ba,
      q2,
      Wr,
      Ta,
      _a,
      wt,
      Oa,
      j2,
      pu,
      M2,
      $2,
      Ra,
      U2,
      Bt,
      sr = Ye(() => {
        l();
        c();
        d();
        (n2 = __STORYBOOK_COMPONENTS__),
          ({
            A: a2,
            ActionBar: Ea,
            AddonPanel: Aa,
            Badge: va,
            Bar: o2,
            Blockquote: i2,
            Button: u2,
            ClipboardCode: s2,
            Code: su,
            DL: l2,
            Div: c2,
            DocumentWrapper: d2,
            ErrorFormatter: lu,
            FlexBar: Da,
            Form: Te,
            H1: p2,
            H2: Ca,
            H3: cu,
            H4: f2,
            H5: h2,
            H6: m2,
            HR: g2,
            IconButton: pt,
            IconButtonSkeleton: xa,
            Icons: we,
            Img: y2,
            LI: b2,
            Link: ft,
            ListItem: E2,
            Loader: du,
            OL: A2,
            P: v2,
            Placeholder: D2,
            Pre: C2,
            ResetWrapper: Sa,
            ScrollArea: x2,
            Separator: S2,
            Spaced: Fa,
            Span: F2,
            StorybookIcon: w2,
            StorybookLogo: B2,
            Symbols: T2,
            SyntaxHighlighter: Gr,
            TT: _2,
            TabBar: O2,
            TabButton: R2,
            TabWrapper: P2,
            Table: I2,
            Tabs: k2,
            TabsState: wa,
            TooltipLinkList: N2,
            TooltipMessage: L2,
            TooltipNote: Ba,
            UL: q2,
            WithTooltip: Wr,
            WithTooltipPure: Ta,
            Zoom: _a,
            codeCommon: wt,
            components: Oa,
            createCopyToClipboardFunction: j2,
            getStoryHref: pu,
            icons: M2,
            interleaveSeparators: $2,
            nameSpaceClassNames: Ra,
            resetComponents: U2,
            withReset: Bt,
          } = __STORYBOOK_COMPONENTS__);
      });
    var _e,
      lr,
      Pa = Ye(() => {
        l();
        c();
        d();
        (_e = (e) => `control-${e.replace(/\s+/g, '-')}`),
          (lr = (e) => `set-${e.replace(/\s+/g, '-')}`);
      });
    var hk,
      mk,
      gk,
      yk,
      hu,
      bk,
      Ek,
      mu,
      Ak,
      vk,
      Dk,
      Ck,
      xk,
      Sk,
      z2,
      gu,
      Fk,
      wk,
      Bk,
      Tk,
      q,
      Ia,
      _k,
      yu,
      Ok,
      ka = Ye(() => {
        l();
        c();
        d();
        (hk = __STORYBOOK_THEMING__),
          ({
            CacheProvider: mk,
            ClassNames: gk,
            Global: yk,
            ThemeProvider: hu,
            background: bk,
            color: Ek,
            convert: mu,
            create: Ak,
            createCache: vk,
            createGlobal: Dk,
            createReset: Ck,
            css: xk,
            darken: Sk,
            ensure: z2,
            ignoreSsrWarning: gu,
            isPropValid: Fk,
            jsx: wk,
            keyframes: Bk,
            lighten: Tk,
            styled: q,
            themes: Ia,
            typography: _k,
            useTheme: yu,
            withTheme: Ok,
          } = __STORYBOOK_THEMING__);
      });
    var Ua = S((Z7, Bu) => {
      l();
      c();
      d();
      function B1(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
          a[r] = t(e[r], r, e);
        return a;
      }
      Bu.exports = B1;
    });
    var _u = S((nN, Tu) => {
      l();
      c();
      d();
      function T1() {
        (this.__data__ = []), (this.size = 0);
      }
      Tu.exports = T1;
    });
    var Jr = S((uN, Ou) => {
      l();
      c();
      d();
      function _1(e, t) {
        return e === t || (e !== e && t !== t);
      }
      Ou.exports = _1;
    });
    var pr = S((dN, Ru) => {
      l();
      c();
      d();
      var O1 = Jr();
      function R1(e, t) {
        for (var r = e.length; r--; ) if (O1(e[r][0], t)) return r;
        return -1;
      }
      Ru.exports = R1;
    });
    var Iu = S((mN, Pu) => {
      l();
      c();
      d();
      var P1 = pr(),
        I1 = Array.prototype,
        k1 = I1.splice;
      function N1(e) {
        var t = this.__data__,
          r = P1(t, e);
        if (r < 0) return !1;
        var n = t.length - 1;
        return r == n ? t.pop() : k1.call(t, r, 1), --this.size, !0;
      }
      Pu.exports = N1;
    });
    var Nu = S((EN, ku) => {
      l();
      c();
      d();
      var L1 = pr();
      function q1(e) {
        var t = this.__data__,
          r = L1(t, e);
        return r < 0 ? void 0 : t[r][1];
      }
      ku.exports = q1;
    });
    var qu = S((CN, Lu) => {
      l();
      c();
      d();
      var j1 = pr();
      function M1(e) {
        return j1(this.__data__, e) > -1;
      }
      Lu.exports = M1;
    });
    var Mu = S((wN, ju) => {
      l();
      c();
      d();
      var $1 = pr();
      function U1(e, t) {
        var r = this.__data__,
          n = $1(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
      }
      ju.exports = U1;
    });
    var fr = S((ON, $u) => {
      l();
      c();
      d();
      var z1 = _u(),
        H1 = Iu(),
        G1 = Nu(),
        W1 = qu(),
        V1 = Mu();
      function Ot(e) {
        var t = -1,
          r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      Ot.prototype.clear = z1;
      Ot.prototype.delete = H1;
      Ot.prototype.get = G1;
      Ot.prototype.has = W1;
      Ot.prototype.set = V1;
      $u.exports = Ot;
    });
    var zu = S((kN, Uu) => {
      l();
      c();
      d();
      var K1 = fr();
      function Y1() {
        (this.__data__ = new K1()), (this.size = 0);
      }
      Uu.exports = Y1;
    });
    var Gu = S((jN, Hu) => {
      l();
      c();
      d();
      function J1(e) {
        var t = this.__data__,
          r = t.delete(e);
        return (this.size = t.size), r;
      }
      Hu.exports = J1;
    });
    var Vu = S((zN, Wu) => {
      l();
      c();
      d();
      function X1(e) {
        return this.__data__.get(e);
      }
      Wu.exports = X1;
    });
    var Yu = S((VN, Ku) => {
      l();
      c();
      d();
      function Q1(e) {
        return this.__data__.has(e);
      }
      Ku.exports = Q1;
    });
    var za = S((XN, Ju) => {
      l();
      c();
      d();
      var Z1 =
        typeof window == 'object' &&
        window &&
        window.Object === Object &&
        window;
      Ju.exports = Z1;
    });
    var Le = S((tL, Xu) => {
      l();
      c();
      d();
      var eb = za(),
        tb = typeof self == 'object' && self && self.Object === Object && self,
        rb = eb || tb || Function('return this')();
      Xu.exports = rb;
    });
    var mt = S((oL, Qu) => {
      l();
      c();
      d();
      var nb = Le(),
        ab = nb.Symbol;
      Qu.exports = ab;
    });
    var rs = S((lL, ts) => {
      l();
      c();
      d();
      var Zu = mt(),
        es = Object.prototype,
        ob = es.hasOwnProperty,
        ib = es.toString,
        hr = Zu ? Zu.toStringTag : void 0;
      function ub(e) {
        var t = ob.call(e, hr),
          r = e[hr];
        try {
          e[hr] = void 0;
          var n = !0;
        } catch {}
        var a = ib.call(e);
        return n && (t ? (e[hr] = r) : delete e[hr]), a;
      }
      ts.exports = ub;
    });
    var as = S((fL, ns) => {
      l();
      c();
      d();
      var sb = Object.prototype,
        lb = sb.toString;
      function cb(e) {
        return lb.call(e);
      }
      ns.exports = cb;
    });
    var gt = S((yL, us) => {
      l();
      c();
      d();
      var os = mt(),
        db = rs(),
        pb = as(),
        fb = '[object Null]',
        hb = '[object Undefined]',
        is = os ? os.toStringTag : void 0;
      function mb(e) {
        return e == null
          ? e === void 0
            ? hb
            : fb
          : is && is in Object(e)
            ? db(e)
            : pb(e);
      }
      us.exports = mb;
    });
    var $e = S((vL, ss) => {
      l();
      c();
      d();
      function gb(e) {
        var t = typeof e;
        return e != null && (t == 'object' || t == 'function');
      }
      ss.exports = gb;
    });
    var Ha = S((SL, ls) => {
      l();
      c();
      d();
      var yb = gt(),
        bb = $e(),
        Eb = '[object AsyncFunction]',
        Ab = '[object Function]',
        vb = '[object GeneratorFunction]',
        Db = '[object Proxy]';
      function Cb(e) {
        if (!bb(e)) return !1;
        var t = yb(e);
        return t == Ab || t == vb || t == Eb || t == Db;
      }
      ls.exports = Cb;
    });
    var ds = S((TL, cs) => {
      l();
      c();
      d();
      var xb = Le(),
        Sb = xb['__core-js_shared__'];
      cs.exports = Sb;
    });
    var hs = S((PL, fs) => {
      l();
      c();
      d();
      var Ga = ds(),
        ps = (function () {
          var e = /[^.]+$/.exec((Ga && Ga.keys && Ga.keys.IE_PROTO) || '');
          return e ? 'Symbol(src)_1.' + e : '';
        })();
      function Fb(e) {
        return !!ps && ps in e;
      }
      fs.exports = Fb;
    });
    var Wa = S((LL, ms) => {
      l();
      c();
      d();
      var wb = Function.prototype,
        Bb = wb.toString;
      function Tb(e) {
        if (e != null) {
          try {
            return Bb.call(e);
          } catch {}
          try {
            return e + '';
          } catch {}
        }
        return '';
      }
      ms.exports = Tb;
    });
    var ys = S(($L, gs) => {
      l();
      c();
      d();
      var _b = Ha(),
        Ob = hs(),
        Rb = $e(),
        Pb = Wa(),
        Ib = /[\\^$.*+?()[\]{}|]/g,
        kb = /^\[object .+?Constructor\]$/,
        Nb = Function.prototype,
        Lb = Object.prototype,
        qb = Nb.toString,
        jb = Lb.hasOwnProperty,
        Mb = RegExp(
          '^' +
            qb
              .call(jb)
              .replace(Ib, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?',
              ) +
            '$',
        );
      function $b(e) {
        if (!Rb(e) || Ob(e)) return !1;
        var t = _b(e) ? Mb : kb;
        return t.test(Pb(e));
      }
      gs.exports = $b;
    });
    var Es = S((GL, bs) => {
      l();
      c();
      d();
      function Ub(e, t) {
        return e?.[t];
      }
      bs.exports = Ub;
    });
    var at = S((YL, As) => {
      l();
      c();
      d();
      var zb = ys(),
        Hb = Es();
      function Gb(e, t) {
        var r = Hb(e, t);
        return zb(r) ? r : void 0;
      }
      As.exports = Gb;
    });
    var Xr = S((ZL, vs) => {
      l();
      c();
      d();
      var Wb = at(),
        Vb = Le(),
        Kb = Wb(Vb, 'Map');
      vs.exports = Kb;
    });
    var mr = S((nq, Ds) => {
      l();
      c();
      d();
      var Yb = at(),
        Jb = Yb(Object, 'create');
      Ds.exports = Jb;
    });
    var Ss = S((uq, xs) => {
      l();
      c();
      d();
      var Cs = mr();
      function Xb() {
        (this.__data__ = Cs ? Cs(null) : {}), (this.size = 0);
      }
      xs.exports = Xb;
    });
    var ws = S((dq, Fs) => {
      l();
      c();
      d();
      function Qb(e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      }
      Fs.exports = Qb;
    });
    var Ts = S((mq, Bs) => {
      l();
      c();
      d();
      var Zb = mr(),
        eE = '__lodash_hash_undefined__',
        tE = Object.prototype,
        rE = tE.hasOwnProperty;
      function nE(e) {
        var t = this.__data__;
        if (Zb) {
          var r = t[e];
          return r === eE ? void 0 : r;
        }
        return rE.call(t, e) ? t[e] : void 0;
      }
      Bs.exports = nE;
    });
    var Os = S((Eq, _s) => {
      l();
      c();
      d();
      var aE = mr(),
        oE = Object.prototype,
        iE = oE.hasOwnProperty;
      function uE(e) {
        var t = this.__data__;
        return aE ? t[e] !== void 0 : iE.call(t, e);
      }
      _s.exports = uE;
    });
    var Ps = S((Cq, Rs) => {
      l();
      c();
      d();
      var sE = mr(),
        lE = '__lodash_hash_undefined__';
      function cE(e, t) {
        var r = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (r[e] = sE && t === void 0 ? lE : t),
          this
        );
      }
      Rs.exports = cE;
    });
    var ks = S((wq, Is) => {
      l();
      c();
      d();
      var dE = Ss(),
        pE = ws(),
        fE = Ts(),
        hE = Os(),
        mE = Ps();
      function Rt(e) {
        var t = -1,
          r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      Rt.prototype.clear = dE;
      Rt.prototype.delete = pE;
      Rt.prototype.get = fE;
      Rt.prototype.has = hE;
      Rt.prototype.set = mE;
      Is.exports = Rt;
    });
    var qs = S((Oq, Ls) => {
      l();
      c();
      d();
      var Ns = ks(),
        gE = fr(),
        yE = Xr();
      function bE() {
        (this.size = 0),
          (this.__data__ = {
            hash: new Ns(),
            map: new (yE || gE)(),
            string: new Ns(),
          });
      }
      Ls.exports = bE;
    });
    var Ms = S((kq, js) => {
      l();
      c();
      d();
      function EE(e) {
        var t = typeof e;
        return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
          ? e !== '__proto__'
          : e === null;
      }
      js.exports = EE;
    });
    var gr = S((jq, $s) => {
      l();
      c();
      d();
      var AE = Ms();
      function vE(e, t) {
        var r = e.__data__;
        return AE(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
      }
      $s.exports = vE;
    });
    var zs = S((zq, Us) => {
      l();
      c();
      d();
      var DE = gr();
      function CE(e) {
        var t = DE(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      }
      Us.exports = CE;
    });
    var Gs = S((Vq, Hs) => {
      l();
      c();
      d();
      var xE = gr();
      function SE(e) {
        return xE(this, e).get(e);
      }
      Hs.exports = SE;
    });
    var Vs = S((Xq, Ws) => {
      l();
      c();
      d();
      var FE = gr();
      function wE(e) {
        return FE(this, e).has(e);
      }
      Ws.exports = wE;
    });
    var Ys = S((tj, Ks) => {
      l();
      c();
      d();
      var BE = gr();
      function TE(e, t) {
        var r = BE(this, e),
          n = r.size;
        return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
      }
      Ks.exports = TE;
    });
    var Qr = S((oj, Js) => {
      l();
      c();
      d();
      var _E = qs(),
        OE = zs(),
        RE = Gs(),
        PE = Vs(),
        IE = Ys();
      function Pt(e) {
        var t = -1,
          r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      Pt.prototype.clear = _E;
      Pt.prototype.delete = OE;
      Pt.prototype.get = RE;
      Pt.prototype.has = PE;
      Pt.prototype.set = IE;
      Js.exports = Pt;
    });
    var Qs = S((lj, Xs) => {
      l();
      c();
      d();
      var kE = fr(),
        NE = Xr(),
        LE = Qr(),
        qE = 200;
      function jE(e, t) {
        var r = this.__data__;
        if (r instanceof kE) {
          var n = r.__data__;
          if (!NE || n.length < qE - 1)
            return n.push([e, t]), (this.size = ++r.size), this;
          r = this.__data__ = new LE(n);
        }
        return r.set(e, t), (this.size = r.size), this;
      }
      Xs.exports = jE;
    });
    var Zr = S((fj, Zs) => {
      l();
      c();
      d();
      var ME = fr(),
        $E = zu(),
        UE = Gu(),
        zE = Vu(),
        HE = Yu(),
        GE = Qs();
      function It(e) {
        var t = (this.__data__ = new ME(e));
        this.size = t.size;
      }
      It.prototype.clear = $E;
      It.prototype.delete = UE;
      It.prototype.get = zE;
      It.prototype.has = HE;
      It.prototype.set = GE;
      Zs.exports = It;
    });
    var tl = S((yj, el) => {
      l();
      c();
      d();
      var WE = '__lodash_hash_undefined__';
      function VE(e) {
        return this.__data__.set(e, WE), this;
      }
      el.exports = VE;
    });
    var nl = S((vj, rl) => {
      l();
      c();
      d();
      function KE(e) {
        return this.__data__.has(e);
      }
      rl.exports = KE;
    });
    var Va = S((Sj, al) => {
      l();
      c();
      d();
      var YE = Qr(),
        JE = tl(),
        XE = nl();
      function en(e) {
        var t = -1,
          r = e == null ? 0 : e.length;
        for (this.__data__ = new YE(); ++t < r; ) this.add(e[t]);
      }
      en.prototype.add = en.prototype.push = JE;
      en.prototype.has = XE;
      al.exports = en;
    });
    var il = S((Tj, ol) => {
      l();
      c();
      d();
      function QE(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
          if (t(e[r], r, e)) return !0;
        return !1;
      }
      ol.exports = QE;
    });
    var Ka = S((Pj, ul) => {
      l();
      c();
      d();
      function ZE(e, t) {
        return e.has(t);
      }
      ul.exports = ZE;
    });
    var Ya = S((Lj, sl) => {
      l();
      c();
      d();
      var eA = Va(),
        tA = il(),
        rA = Ka(),
        nA = 1,
        aA = 2;
      function oA(e, t, r, n, a, o) {
        var i = r & nA,
          u = e.length,
          s = t.length;
        if (u != s && !(i && s > u)) return !1;
        var p = o.get(e),
          y = o.get(t);
        if (p && y) return p == t && y == e;
        var E = -1,
          m = !0,
          g = r & aA ? new eA() : void 0;
        for (o.set(e, t), o.set(t, e); ++E < u; ) {
          var A = e[E],
            b = t[E];
          if (n) var x = i ? n(b, A, E, t, e, o) : n(A, b, E, e, t, o);
          if (x !== void 0) {
            if (x) continue;
            m = !1;
            break;
          }
          if (g) {
            if (
              !tA(t, function (w, R) {
                if (!rA(g, R) && (A === w || a(A, w, r, n, o)))
                  return g.push(R);
              })
            ) {
              m = !1;
              break;
            }
          } else if (!(A === b || a(A, b, r, n, o))) {
            m = !1;
            break;
          }
        }
        return o.delete(e), o.delete(t), m;
      }
      sl.exports = oA;
    });
    var Ja = S(($j, ll) => {
      l();
      c();
      d();
      var iA = Le(),
        uA = iA.Uint8Array;
      ll.exports = uA;
    });
    var dl = S((Gj, cl) => {
      l();
      c();
      d();
      function sA(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (n, a) {
            r[++t] = [a, n];
          }),
          r
        );
      }
      cl.exports = sA;
    });
    var tn = S((Yj, pl) => {
      l();
      c();
      d();
      function lA(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (n) {
            r[++t] = n;
          }),
          r
        );
      }
      pl.exports = lA;
    });
    var yl = S((Zj, gl) => {
      l();
      c();
      d();
      var fl = mt(),
        hl = Ja(),
        cA = Jr(),
        dA = Ya(),
        pA = dl(),
        fA = tn(),
        hA = 1,
        mA = 2,
        gA = '[object Boolean]',
        yA = '[object Date]',
        bA = '[object Error]',
        EA = '[object Map]',
        AA = '[object Number]',
        vA = '[object RegExp]',
        DA = '[object Set]',
        CA = '[object String]',
        xA = '[object Symbol]',
        SA = '[object ArrayBuffer]',
        FA = '[object DataView]',
        ml = fl ? fl.prototype : void 0,
        Xa = ml ? ml.valueOf : void 0;
      function wA(e, t, r, n, a, o, i) {
        switch (r) {
          case FA:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            (e = e.buffer), (t = t.buffer);
          case SA:
            return !(e.byteLength != t.byteLength || !o(new hl(e), new hl(t)));
          case gA:
          case yA:
          case AA:
            return cA(+e, +t);
          case bA:
            return e.name == t.name && e.message == t.message;
          case vA:
          case CA:
            return e == t + '';
          case EA:
            var u = pA;
          case DA:
            var s = n & hA;
            if ((u || (u = fA), e.size != t.size && !s)) return !1;
            var p = i.get(e);
            if (p) return p == t;
            (n |= mA), i.set(e, t);
            var y = dA(u(e), u(t), n, a, o, i);
            return i.delete(e), y;
          case xA:
            if (Xa) return Xa.call(e) == Xa.call(t);
        }
        return !1;
      }
      gl.exports = wA;
    });
    var rn = S((nM, bl) => {
      l();
      c();
      d();
      function BA(e, t) {
        for (var r = -1, n = t.length, a = e.length; ++r < n; ) e[a + r] = t[r];
        return e;
      }
      bl.exports = BA;
    });
    var Ue = S((uM, El) => {
      l();
      c();
      d();
      var TA = Array.isArray;
      El.exports = TA;
    });
    var Qa = S((dM, Al) => {
      l();
      c();
      d();
      var _A = rn(),
        OA = Ue();
      function RA(e, t, r) {
        var n = t(e);
        return OA(e) ? n : _A(n, r(e));
      }
      Al.exports = RA;
    });
    var Dl = S((mM, vl) => {
      l();
      c();
      d();
      function PA(e, t) {
        for (
          var r = -1, n = e == null ? 0 : e.length, a = 0, o = [];
          ++r < n;

        ) {
          var i = e[r];
          t(i, r, e) && (o[a++] = i);
        }
        return o;
      }
      vl.exports = PA;
    });
    var Za = S((EM, Cl) => {
      l();
      c();
      d();
      function IA() {
        return [];
      }
      Cl.exports = IA;
    });
    var nn = S((CM, Sl) => {
      l();
      c();
      d();
      var kA = Dl(),
        NA = Za(),
        LA = Object.prototype,
        qA = LA.propertyIsEnumerable,
        xl = Object.getOwnPropertySymbols,
        jA = xl
          ? function (e) {
              return e == null
                ? []
                : ((e = Object(e)),
                  kA(xl(e), function (t) {
                    return qA.call(e, t);
                  }));
            }
          : NA;
      Sl.exports = jA;
    });
    var wl = S((wM, Fl) => {
      l();
      c();
      d();
      function MA(e, t) {
        for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
        return n;
      }
      Fl.exports = MA;
    });
    var Je = S((OM, Bl) => {
      l();
      c();
      d();
      function $A(e) {
        return e != null && typeof e == 'object';
      }
      Bl.exports = $A;
    });
    var _l = S((kM, Tl) => {
      l();
      c();
      d();
      var UA = gt(),
        zA = Je(),
        HA = '[object Arguments]';
      function GA(e) {
        return zA(e) && UA(e) == HA;
      }
      Tl.exports = GA;
    });
    var an = S((jM, Pl) => {
      l();
      c();
      d();
      var Ol = _l(),
        WA = Je(),
        Rl = Object.prototype,
        VA = Rl.hasOwnProperty,
        KA = Rl.propertyIsEnumerable,
        YA = Ol(
          (function () {
            return arguments;
          })(),
        )
          ? Ol
          : function (e) {
              return WA(e) && VA.call(e, 'callee') && !KA.call(e, 'callee');
            };
      Pl.exports = YA;
    });
    var kl = S((zM, Il) => {
      l();
      c();
      d();
      function JA() {
        return !1;
      }
      Il.exports = JA;
    });
    var on = S((yr, kt) => {
      l();
      c();
      d();
      var XA = Le(),
        QA = kl(),
        ql = typeof yr == 'object' && yr && !yr.nodeType && yr,
        Nl = ql && typeof kt == 'object' && kt && !kt.nodeType && kt,
        ZA = Nl && Nl.exports === ql,
        Ll = ZA ? XA.Buffer : void 0,
        ev = Ll ? Ll.isBuffer : void 0,
        tv = ev || QA;
      kt.exports = tv;
    });
    var un = S((JM, jl) => {
      l();
      c();
      d();
      var rv = 9007199254740991,
        nv = /^(?:0|[1-9]\d*)$/;
      function av(e, t) {
        var r = typeof e;
        return (
          (t = t ?? rv),
          !!t &&
            (r == 'number' || (r != 'symbol' && nv.test(e))) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
        );
      }
      jl.exports = av;
    });
    var sn = S((e$, Ml) => {
      l();
      c();
      d();
      var ov = 9007199254740991;
      function iv(e) {
        return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= ov;
      }
      Ml.exports = iv;
    });
    var Ul = S((a$, $l) => {
      l();
      c();
      d();
      var uv = gt(),
        sv = sn(),
        lv = Je(),
        cv = '[object Arguments]',
        dv = '[object Array]',
        pv = '[object Boolean]',
        fv = '[object Date]',
        hv = '[object Error]',
        mv = '[object Function]',
        gv = '[object Map]',
        yv = '[object Number]',
        bv = '[object Object]',
        Ev = '[object RegExp]',
        Av = '[object Set]',
        vv = '[object String]',
        Dv = '[object WeakMap]',
        Cv = '[object ArrayBuffer]',
        xv = '[object DataView]',
        Sv = '[object Float32Array]',
        Fv = '[object Float64Array]',
        wv = '[object Int8Array]',
        Bv = '[object Int16Array]',
        Tv = '[object Int32Array]',
        _v = '[object Uint8Array]',
        Ov = '[object Uint8ClampedArray]',
        Rv = '[object Uint16Array]',
        Pv = '[object Uint32Array]',
        le = {};
      le[Sv] =
        le[Fv] =
        le[wv] =
        le[Bv] =
        le[Tv] =
        le[_v] =
        le[Ov] =
        le[Rv] =
        le[Pv] =
          !0;
      le[cv] =
        le[dv] =
        le[Cv] =
        le[pv] =
        le[xv] =
        le[fv] =
        le[hv] =
        le[mv] =
        le[gv] =
        le[yv] =
        le[bv] =
        le[Ev] =
        le[Av] =
        le[vv] =
        le[Dv] =
          !1;
      function Iv(e) {
        return lv(e) && sv(e.length) && !!le[uv(e)];
      }
      $l.exports = Iv;
    });
    var ln = S((s$, zl) => {
      l();
      c();
      d();
      function kv(e) {
        return function (t) {
          return e(t);
        };
      }
      zl.exports = kv;
    });
    var cn = S((br, Nt) => {
      l();
      c();
      d();
      var Nv = za(),
        Hl = typeof br == 'object' && br && !br.nodeType && br,
        Er = Hl && typeof Nt == 'object' && Nt && !Nt.nodeType && Nt,
        Lv = Er && Er.exports === Hl,
        eo = Lv && Nv.process,
        qv = (function () {
          try {
            var e = Er && Er.require && Er.require('util').types;
            return e || (eo && eo.binding && eo.binding('util'));
          } catch {}
        })();
      Nt.exports = qv;
    });
    var to = S((m$, Vl) => {
      l();
      c();
      d();
      var jv = Ul(),
        Mv = ln(),
        Gl = cn(),
        Wl = Gl && Gl.isTypedArray,
        $v = Wl ? Mv(Wl) : jv;
      Vl.exports = $v;
    });
    var ro = S((E$, Kl) => {
      l();
      c();
      d();
      var Uv = wl(),
        zv = an(),
        Hv = Ue(),
        Gv = on(),
        Wv = un(),
        Vv = to(),
        Kv = Object.prototype,
        Yv = Kv.hasOwnProperty;
      function Jv(e, t) {
        var r = Hv(e),
          n = !r && zv(e),
          a = !r && !n && Gv(e),
          o = !r && !n && !a && Vv(e),
          i = r || n || a || o,
          u = i ? Uv(e.length, String) : [],
          s = u.length;
        for (var p in e)
          (t || Yv.call(e, p)) &&
            !(
              i &&
              (p == 'length' ||
                (a && (p == 'offset' || p == 'parent')) ||
                (o &&
                  (p == 'buffer' || p == 'byteLength' || p == 'byteOffset')) ||
                Wv(p, s))
            ) &&
            u.push(p);
        return u;
      }
      Kl.exports = Jv;
    });
    var dn = S((C$, Yl) => {
      l();
      c();
      d();
      var Xv = Object.prototype;
      function Qv(e) {
        var t = e && e.constructor,
          r = (typeof t == 'function' && t.prototype) || Xv;
        return e === r;
      }
      Yl.exports = Qv;
    });
    var no = S((w$, Jl) => {
      l();
      c();
      d();
      function Zv(e, t) {
        return function (r) {
          return e(t(r));
        };
      }
      Jl.exports = Zv;
    });
    var Ql = S((O$, Xl) => {
      l();
      c();
      d();
      var eD = no(),
        tD = eD(Object.keys, Object);
      Xl.exports = tD;
    });
    var ec = S((k$, Zl) => {
      l();
      c();
      d();
      var rD = dn(),
        nD = Ql(),
        aD = Object.prototype,
        oD = aD.hasOwnProperty;
      function iD(e) {
        if (!rD(e)) return nD(e);
        var t = [];
        for (var r in Object(e))
          oD.call(e, r) && r != 'constructor' && t.push(r);
        return t;
      }
      Zl.exports = iD;
    });
    var ao = S((j$, tc) => {
      l();
      c();
      d();
      var uD = Ha(),
        sD = sn();
      function lD(e) {
        return e != null && sD(e.length) && !uD(e);
      }
      tc.exports = lD;
    });
    var Lt = S((z$, rc) => {
      l();
      c();
      d();
      var cD = ro(),
        dD = ec(),
        pD = ao();
      function fD(e) {
        return pD(e) ? cD(e) : dD(e);
      }
      rc.exports = fD;
    });
    var oo = S((V$, nc) => {
      l();
      c();
      d();
      var hD = Qa(),
        mD = nn(),
        gD = Lt();
      function yD(e) {
        return hD(e, gD, mD);
      }
      nc.exports = yD;
    });
    var ic = S((X$, oc) => {
      l();
      c();
      d();
      var ac = oo(),
        bD = 1,
        ED = Object.prototype,
        AD = ED.hasOwnProperty;
      function vD(e, t, r, n, a, o) {
        var i = r & bD,
          u = ac(e),
          s = u.length,
          p = ac(t),
          y = p.length;
        if (s != y && !i) return !1;
        for (var E = s; E--; ) {
          var m = u[E];
          if (!(i ? m in t : AD.call(t, m))) return !1;
        }
        var g = o.get(e),
          A = o.get(t);
        if (g && A) return g == t && A == e;
        var b = !0;
        o.set(e, t), o.set(t, e);
        for (var x = i; ++E < s; ) {
          m = u[E];
          var w = e[m],
            R = t[m];
          if (n) var I = i ? n(R, w, m, t, e, o) : n(w, R, m, e, t, o);
          if (!(I === void 0 ? w === R || a(w, R, r, n, o) : I)) {
            b = !1;
            break;
          }
          x || (x = m == 'constructor');
        }
        if (b && !x) {
          var M = e.constructor,
            F = t.constructor;
          M != F &&
            'constructor' in e &&
            'constructor' in t &&
            !(
              typeof M == 'function' &&
              M instanceof M &&
              typeof F == 'function' &&
              F instanceof F
            ) &&
            (b = !1);
        }
        return o.delete(e), o.delete(t), b;
      }
      oc.exports = vD;
    });
    var sc = S((tU, uc) => {
      l();
      c();
      d();
      var DD = at(),
        CD = Le(),
        xD = DD(CD, 'DataView');
      uc.exports = xD;
    });
    var cc = S((oU, lc) => {
      l();
      c();
      d();
      var SD = at(),
        FD = Le(),
        wD = SD(FD, 'Promise');
      lc.exports = wD;
    });
    var io = S((lU, dc) => {
      l();
      c();
      d();
      var BD = at(),
        TD = Le(),
        _D = BD(TD, 'Set');
      dc.exports = _D;
    });
    var fc = S((fU, pc) => {
      l();
      c();
      d();
      var OD = at(),
        RD = Le(),
        PD = OD(RD, 'WeakMap');
      pc.exports = PD;
    });
    var Ar = S((yU, Ac) => {
      l();
      c();
      d();
      var uo = sc(),
        so = Xr(),
        lo = cc(),
        co = io(),
        po = fc(),
        Ec = gt(),
        qt = Wa(),
        hc = '[object Map]',
        ID = '[object Object]',
        mc = '[object Promise]',
        gc = '[object Set]',
        yc = '[object WeakMap]',
        bc = '[object DataView]',
        kD = qt(uo),
        ND = qt(so),
        LD = qt(lo),
        qD = qt(co),
        jD = qt(po),
        yt = Ec;
      ((uo && yt(new uo(new ArrayBuffer(1))) != bc) ||
        (so && yt(new so()) != hc) ||
        (lo && yt(lo.resolve()) != mc) ||
        (co && yt(new co()) != gc) ||
        (po && yt(new po()) != yc)) &&
        (yt = function (e) {
          var t = Ec(e),
            r = t == ID ? e.constructor : void 0,
            n = r ? qt(r) : '';
          if (n)
            switch (n) {
              case kD:
                return bc;
              case ND:
                return hc;
              case LD:
                return mc;
              case qD:
                return gc;
              case jD:
                return yc;
            }
          return t;
        });
      Ac.exports = yt;
    });
    var Bc = S((vU, wc) => {
      l();
      c();
      d();
      var fo = Zr(),
        MD = Ya(),
        $D = yl(),
        UD = ic(),
        vc = Ar(),
        Dc = Ue(),
        Cc = on(),
        zD = to(),
        HD = 1,
        xc = '[object Arguments]',
        Sc = '[object Array]',
        pn = '[object Object]',
        GD = Object.prototype,
        Fc = GD.hasOwnProperty;
      function WD(e, t, r, n, a, o) {
        var i = Dc(e),
          u = Dc(t),
          s = i ? Sc : vc(e),
          p = u ? Sc : vc(t);
        (s = s == xc ? pn : s), (p = p == xc ? pn : p);
        var y = s == pn,
          E = p == pn,
          m = s == p;
        if (m && Cc(e)) {
          if (!Cc(t)) return !1;
          (i = !0), (y = !1);
        }
        if (m && !y)
          return (
            o || (o = new fo()),
            i || zD(e) ? MD(e, t, r, n, a, o) : $D(e, t, s, r, n, a, o)
          );
        if (!(r & HD)) {
          var g = y && Fc.call(e, '__wrapped__'),
            A = E && Fc.call(t, '__wrapped__');
          if (g || A) {
            var b = g ? e.value() : e,
              x = A ? t.value() : t;
            return o || (o = new fo()), a(b, x, r, n, o);
          }
        }
        return m ? (o || (o = new fo()), UD(e, t, r, n, a, o)) : !1;
      }
      wc.exports = WD;
    });
    var ho = S((SU, Oc) => {
      l();
      c();
      d();
      var VD = Bc(),
        Tc = Je();
      function _c(e, t, r, n, a) {
        return e === t
          ? !0
          : e == null || t == null || (!Tc(e) && !Tc(t))
            ? e !== e && t !== t
            : VD(e, t, r, n, _c, a);
      }
      Oc.exports = _c;
    });
    var Pc = S((TU, Rc) => {
      l();
      c();
      d();
      var KD = Zr(),
        YD = ho(),
        JD = 1,
        XD = 2;
      function QD(e, t, r, n) {
        var a = r.length,
          o = a,
          i = !n;
        if (e == null) return !o;
        for (e = Object(e); a--; ) {
          var u = r[a];
          if (i && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
        }
        for (; ++a < o; ) {
          u = r[a];
          var s = u[0],
            p = e[s],
            y = u[1];
          if (i && u[2]) {
            if (p === void 0 && !(s in e)) return !1;
          } else {
            var E = new KD();
            if (n) var m = n(p, y, s, e, t, E);
            if (!(m === void 0 ? YD(y, p, JD | XD, n, E) : m)) return !1;
          }
        }
        return !0;
      }
      Rc.exports = QD;
    });
    var mo = S((PU, Ic) => {
      l();
      c();
      d();
      var ZD = $e();
      function eC(e) {
        return e === e && !ZD(e);
      }
      Ic.exports = eC;
    });
    var Nc = S((LU, kc) => {
      l();
      c();
      d();
      var tC = mo(),
        rC = Lt();
      function nC(e) {
        for (var t = rC(e), r = t.length; r--; ) {
          var n = t[r],
            a = e[n];
          t[r] = [n, a, tC(a)];
        }
        return t;
      }
      kc.exports = nC;
    });
    var go = S(($U, Lc) => {
      l();
      c();
      d();
      function aC(e, t) {
        return function (r) {
          return r == null
            ? !1
            : r[e] === t && (t !== void 0 || e in Object(r));
        };
      }
      Lc.exports = aC;
    });
    var jc = S((GU, qc) => {
      l();
      c();
      d();
      var oC = Pc(),
        iC = Nc(),
        uC = go();
      function sC(e) {
        var t = iC(e);
        return t.length == 1 && t[0][2]
          ? uC(t[0][0], t[0][1])
          : function (r) {
              return r === e || oC(r, e, t);
            };
      }
      qc.exports = sC;
    });
    var vr = S((YU, Mc) => {
      l();
      c();
      d();
      var lC = gt(),
        cC = Je(),
        dC = '[object Symbol]';
      function pC(e) {
        return typeof e == 'symbol' || (cC(e) && lC(e) == dC);
      }
      Mc.exports = pC;
    });
    var fn = S((ZU, $c) => {
      l();
      c();
      d();
      var fC = Ue(),
        hC = vr(),
        mC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        gC = /^\w*$/;
      function yC(e, t) {
        if (fC(e)) return !1;
        var r = typeof e;
        return r == 'number' ||
          r == 'symbol' ||
          r == 'boolean' ||
          e == null ||
          hC(e)
          ? !0
          : gC.test(e) || !mC.test(e) || (t != null && e in Object(t));
      }
      $c.exports = yC;
    });
    var Hc = S((nz, zc) => {
      l();
      c();
      d();
      var Uc = Qr(),
        bC = 'Expected a function';
      function yo(e, t) {
        if (typeof e != 'function' || (t != null && typeof t != 'function'))
          throw new TypeError(bC);
        var r = function () {
          var n = arguments,
            a = t ? t.apply(this, n) : n[0],
            o = r.cache;
          if (o.has(a)) return o.get(a);
          var i = e.apply(this, n);
          return (r.cache = o.set(a, i) || o), i;
        };
        return (r.cache = new (yo.Cache || Uc)()), r;
      }
      yo.Cache = Uc;
      zc.exports = yo;
    });
    var Wc = S((uz, Gc) => {
      l();
      c();
      d();
      var EC = Hc(),
        AC = 500;
      function vC(e) {
        var t = EC(e, function (n) {
            return r.size === AC && r.clear(), n;
          }),
          r = t.cache;
        return t;
      }
      Gc.exports = vC;
    });
    var Kc = S((dz, Vc) => {
      l();
      c();
      d();
      var DC = Wc(),
        CC =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        xC = /\\(\\)?/g,
        SC = DC(function (e) {
          var t = [];
          return (
            e.charCodeAt(0) === 46 && t.push(''),
            e.replace(CC, function (r, n, a, o) {
              t.push(a ? o.replace(xC, '$1') : n || r);
            }),
            t
          );
        });
      Vc.exports = SC;
    });
    var ed = S((mz, Zc) => {
      l();
      c();
      d();
      var Yc = mt(),
        FC = Ua(),
        wC = Ue(),
        BC = vr(),
        TC = 1 / 0,
        Jc = Yc ? Yc.prototype : void 0,
        Xc = Jc ? Jc.toString : void 0;
      function Qc(e) {
        if (typeof e == 'string') return e;
        if (wC(e)) return FC(e, Qc) + '';
        if (BC(e)) return Xc ? Xc.call(e) : '';
        var t = e + '';
        return t == '0' && 1 / e == -TC ? '-0' : t;
      }
      Zc.exports = Qc;
    });
    var rd = S((Ez, td) => {
      l();
      c();
      d();
      var _C = ed();
      function OC(e) {
        return e == null ? '' : _C(e);
      }
      td.exports = OC;
    });
    var Dr = S((Cz, nd) => {
      l();
      c();
      d();
      var RC = Ue(),
        PC = fn(),
        IC = Kc(),
        kC = rd();
      function NC(e, t) {
        return RC(e) ? e : PC(e, t) ? [e] : IC(kC(e));
      }
      nd.exports = NC;
    });
    var jt = S((wz, ad) => {
      l();
      c();
      d();
      var LC = vr(),
        qC = 1 / 0;
      function jC(e) {
        if (typeof e == 'string' || LC(e)) return e;
        var t = e + '';
        return t == '0' && 1 / e == -qC ? '-0' : t;
      }
      ad.exports = jC;
    });
    var hn = S((Oz, od) => {
      l();
      c();
      d();
      var MC = Dr(),
        $C = jt();
      function UC(e, t) {
        t = MC(t, e);
        for (var r = 0, n = t.length; e != null && r < n; ) e = e[$C(t[r++])];
        return r && r == n ? e : void 0;
      }
      od.exports = UC;
    });
    var ud = S((kz, id) => {
      l();
      c();
      d();
      var zC = hn();
      function HC(e, t, r) {
        var n = e == null ? void 0 : zC(e, t);
        return n === void 0 ? r : n;
      }
      id.exports = HC;
    });
    var ld = S((jz, sd) => {
      l();
      c();
      d();
      function GC(e, t) {
        return e != null && t in Object(e);
      }
      sd.exports = GC;
    });
    var dd = S((zz, cd) => {
      l();
      c();
      d();
      var WC = Dr(),
        VC = an(),
        KC = Ue(),
        YC = un(),
        JC = sn(),
        XC = jt();
      function QC(e, t, r) {
        t = WC(t, e);
        for (var n = -1, a = t.length, o = !1; ++n < a; ) {
          var i = XC(t[n]);
          if (!(o = e != null && r(e, i))) break;
          e = e[i];
        }
        return o || ++n != a
          ? o
          : ((a = e == null ? 0 : e.length),
            !!a && JC(a) && YC(i, a) && (KC(e) || VC(e)));
      }
      cd.exports = QC;
    });
    var bo = S((Vz, pd) => {
      l();
      c();
      d();
      var ZC = ld(),
        ex = dd();
      function tx(e, t) {
        return e != null && ex(e, t, ZC);
      }
      pd.exports = tx;
    });
    var hd = S((Xz, fd) => {
      l();
      c();
      d();
      var rx = ho(),
        nx = ud(),
        ax = bo(),
        ox = fn(),
        ix = mo(),
        ux = go(),
        sx = jt(),
        lx = 1,
        cx = 2;
      function dx(e, t) {
        return ox(e) && ix(t)
          ? ux(sx(e), t)
          : function (r) {
              var n = nx(r, e);
              return n === void 0 && n === t ? ax(r, e) : rx(t, n, lx | cx);
            };
      }
      fd.exports = dx;
    });
    var Eo = S((tH, md) => {
      l();
      c();
      d();
      function px(e) {
        return e;
      }
      md.exports = px;
    });
    var yd = S((oH, gd) => {
      l();
      c();
      d();
      function fx(e) {
        return function (t) {
          return t?.[e];
        };
      }
      gd.exports = fx;
    });
    var Ed = S((lH, bd) => {
      l();
      c();
      d();
      var hx = hn();
      function mx(e) {
        return function (t) {
          return hx(t, e);
        };
      }
      bd.exports = mx;
    });
    var vd = S((fH, Ad) => {
      l();
      c();
      d();
      var gx = yd(),
        yx = Ed(),
        bx = fn(),
        Ex = jt();
      function Ax(e) {
        return bx(e) ? gx(Ex(e)) : yx(e);
      }
      Ad.exports = Ax;
    });
    var Ao = S((yH, Dd) => {
      l();
      c();
      d();
      var vx = jc(),
        Dx = hd(),
        Cx = Eo(),
        xx = Ue(),
        Sx = vd();
      function Fx(e) {
        return typeof e == 'function'
          ? e
          : e == null
            ? Cx
            : typeof e == 'object'
              ? xx(e)
                ? Dx(e[0], e[1])
                : vx(e)
              : Sx(e);
      }
      Dd.exports = Fx;
    });
    var vo = S((vH, Cd) => {
      l();
      c();
      d();
      var wx = at(),
        Bx = (function () {
          try {
            var e = wx(Object, 'defineProperty');
            return e({}, '', {}), e;
          } catch {}
        })();
      Cd.exports = Bx;
    });
    var mn = S((SH, Sd) => {
      l();
      c();
      d();
      var xd = vo();
      function Tx(e, t, r) {
        t == '__proto__' && xd
          ? xd(e, t, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0,
            })
          : (e[t] = r);
      }
      Sd.exports = Tx;
    });
    var gn = S((TH, Fd) => {
      l();
      c();
      d();
      var _x = mn(),
        Ox = Jr(),
        Rx = Object.prototype,
        Px = Rx.hasOwnProperty;
      function Ix(e, t, r) {
        var n = e[t];
        (!(Px.call(e, t) && Ox(n, r)) || (r === void 0 && !(t in e))) &&
          _x(e, t, r);
      }
      Fd.exports = Ix;
    });
    var Td = S((PH, Bd) => {
      l();
      c();
      d();
      var kx = gn(),
        Nx = Dr(),
        Lx = un(),
        wd = $e(),
        qx = jt();
      function jx(e, t, r, n) {
        if (!wd(e)) return e;
        t = Nx(t, e);
        for (
          var a = -1, o = t.length, i = o - 1, u = e;
          u != null && ++a < o;

        ) {
          var s = qx(t[a]),
            p = r;
          if (s === '__proto__' || s === 'constructor' || s === 'prototype')
            return e;
          if (a != i) {
            var y = u[s];
            (p = n ? n(y, s, u) : void 0),
              p === void 0 && (p = wd(y) ? y : Lx(t[a + 1]) ? [] : {});
          }
          kx(u, s, p), (u = u[s]);
        }
        return e;
      }
      Bd.exports = jx;
    });
    var Do = S((LH, _d) => {
      l();
      c();
      d();
      var Mx = hn(),
        $x = Td(),
        Ux = Dr();
      function zx(e, t, r) {
        for (var n = -1, a = t.length, o = {}; ++n < a; ) {
          var i = t[n],
            u = Mx(e, i);
          r(u, i) && $x(o, Ux(i, e), u);
        }
        return o;
      }
      _d.exports = zx;
    });
    var yn = S(($H, Od) => {
      l();
      c();
      d();
      var Hx = no(),
        Gx = Hx(Object.getPrototypeOf, Object);
      Od.exports = Gx;
    });
    var Co = S((GH, Rd) => {
      l();
      c();
      d();
      var Wx = rn(),
        Vx = yn(),
        Kx = nn(),
        Yx = Za(),
        Jx = Object.getOwnPropertySymbols,
        Xx = Jx
          ? function (e) {
              for (var t = []; e; ) Wx(t, Kx(e)), (e = Vx(e));
              return t;
            }
          : Yx;
      Rd.exports = Xx;
    });
    var Id = S((YH, Pd) => {
      l();
      c();
      d();
      function Qx(e) {
        var t = [];
        if (e != null) for (var r in Object(e)) t.push(r);
        return t;
      }
      Pd.exports = Qx;
    });
    var Nd = S((ZH, kd) => {
      l();
      c();
      d();
      var Zx = $e(),
        eS = dn(),
        tS = Id(),
        rS = Object.prototype,
        nS = rS.hasOwnProperty;
      function aS(e) {
        if (!Zx(e)) return tS(e);
        var t = eS(e),
          r = [];
        for (var n in e)
          (n == 'constructor' && (t || !nS.call(e, n))) || r.push(n);
        return r;
      }
      kd.exports = aS;
    });
    var bn = S((nG, Ld) => {
      l();
      c();
      d();
      var oS = ro(),
        iS = Nd(),
        uS = ao();
      function sS(e) {
        return uS(e) ? oS(e, !0) : iS(e);
      }
      Ld.exports = sS;
    });
    var xo = S((uG, qd) => {
      l();
      c();
      d();
      var lS = Qa(),
        cS = Co(),
        dS = bn();
      function pS(e) {
        return lS(e, dS, cS);
      }
      qd.exports = pS;
    });
    var So = S((dG, jd) => {
      l();
      c();
      d();
      var fS = Ua(),
        hS = Ao(),
        mS = Do(),
        gS = xo();
      function yS(e, t) {
        if (e == null) return {};
        var r = fS(gS(e), function (n) {
          return [n];
        });
        return (
          (t = hS(t)),
          mS(e, r, function (n, a) {
            return t(n, a[0]);
          })
        );
      }
      jd.exports = yS;
    });
    var Cn = S((bp, ko) => {
      l();
      c();
      d();
      (function (e) {
        if (typeof bp == 'object' && typeof ko < 'u') ko.exports = e();
        else if (typeof define == 'function' && define.amd) define([], e);
        else {
          var t;
          typeof window < 'u' || typeof window < 'u'
            ? (t = window)
            : typeof self < 'u'
              ? (t = self)
              : (t = this),
            (t.memoizerific = e());
        }
      })(function () {
        var e, t, r;
        return (function n(a, o, i) {
          function u(y, E) {
            if (!o[y]) {
              if (!a[y]) {
                var m = typeof ir == 'function' && ir;
                if (!E && m) return m(y, !0);
                if (s) return s(y, !0);
                var g = new Error("Cannot find module '" + y + "'");
                throw ((g.code = 'MODULE_NOT_FOUND'), g);
              }
              var A = (o[y] = { exports: {} });
              a[y][0].call(
                A.exports,
                function (b) {
                  var x = a[y][1][b];
                  return u(x || b);
                },
                A,
                A.exports,
                n,
                a,
                o,
                i,
              );
            }
            return o[y].exports;
          }
          for (var s = typeof ir == 'function' && ir, p = 0; p < i.length; p++)
            u(i[p]);
          return u;
        })(
          {
            1: [
              function (n, a, o) {
                a.exports = function (i) {
                  if (typeof Map != 'function' || i) {
                    var u = n('./similar');
                    return new u();
                  } else return new Map();
                };
              },
              { './similar': 2 },
            ],
            2: [
              function (n, a, o) {
                function i() {
                  return (
                    (this.list = []),
                    (this.lastItem = void 0),
                    (this.size = 0),
                    this
                  );
                }
                (i.prototype.get = function (u) {
                  var s;
                  if (this.lastItem && this.isEqual(this.lastItem.key, u))
                    return this.lastItem.val;
                  if (((s = this.indexOf(u)), s >= 0))
                    return (this.lastItem = this.list[s]), this.list[s].val;
                }),
                  (i.prototype.set = function (u, s) {
                    var p;
                    return this.lastItem && this.isEqual(this.lastItem.key, u)
                      ? ((this.lastItem.val = s), this)
                      : ((p = this.indexOf(u)),
                        p >= 0
                          ? ((this.lastItem = this.list[p]),
                            (this.list[p].val = s),
                            this)
                          : ((this.lastItem = { key: u, val: s }),
                            this.list.push(this.lastItem),
                            this.size++,
                            this));
                  }),
                  (i.prototype.delete = function (u) {
                    var s;
                    if (
                      (this.lastItem &&
                        this.isEqual(this.lastItem.key, u) &&
                        (this.lastItem = void 0),
                      (s = this.indexOf(u)),
                      s >= 0)
                    )
                      return this.size--, this.list.splice(s, 1)[0];
                  }),
                  (i.prototype.has = function (u) {
                    var s;
                    return this.lastItem && this.isEqual(this.lastItem.key, u)
                      ? !0
                      : ((s = this.indexOf(u)),
                        s >= 0 ? ((this.lastItem = this.list[s]), !0) : !1);
                  }),
                  (i.prototype.forEach = function (u, s) {
                    var p;
                    for (p = 0; p < this.size; p++)
                      u.call(
                        s || this,
                        this.list[p].val,
                        this.list[p].key,
                        this,
                      );
                  }),
                  (i.prototype.indexOf = function (u) {
                    var s;
                    for (s = 0; s < this.size; s++)
                      if (this.isEqual(this.list[s].key, u)) return s;
                    return -1;
                  }),
                  (i.prototype.isEqual = function (u, s) {
                    return u === s || (u !== u && s !== s);
                  }),
                  (a.exports = i);
              },
              {},
            ],
            3: [
              function (n, a, o) {
                var i = n('map-or-similar');
                a.exports = function (y) {
                  var E = new i(!1),
                    m = [];
                  return function (g) {
                    var A = function () {
                      var b = E,
                        x,
                        w,
                        R = arguments.length - 1,
                        I = Array(R + 1),
                        M = !0,
                        F;
                      if ((A.numArgs || A.numArgs === 0) && A.numArgs !== R + 1)
                        throw new Error(
                          'Memoizerific functions should always be called with the same number of arguments',
                        );
                      for (F = 0; F < R; F++) {
                        if (
                          ((I[F] = { cacheItem: b, arg: arguments[F] }),
                          b.has(arguments[F]))
                        ) {
                          b = b.get(arguments[F]);
                          continue;
                        }
                        (M = !1),
                          (x = new i(!1)),
                          b.set(arguments[F], x),
                          (b = x);
                      }
                      return (
                        M &&
                          (b.has(arguments[R])
                            ? (w = b.get(arguments[R]))
                            : (M = !1)),
                        M ||
                          ((w = g.apply(null, arguments)),
                          b.set(arguments[R], w)),
                        y > 0 &&
                          ((I[R] = { cacheItem: b, arg: arguments[R] }),
                          M ? u(m, I) : m.push(I),
                          m.length > y && s(m.shift())),
                        (A.wasMemoized = M),
                        (A.numArgs = R + 1),
                        w
                      );
                    };
                    return (
                      (A.limit = y),
                      (A.wasMemoized = !1),
                      (A.cache = E),
                      (A.lru = m),
                      A
                    );
                  };
                };
                function u(y, E) {
                  var m = y.length,
                    g = E.length,
                    A,
                    b,
                    x;
                  for (b = 0; b < m; b++) {
                    for (A = !0, x = 0; x < g; x++)
                      if (!p(y[b][x].arg, E[x].arg)) {
                        A = !1;
                        break;
                      }
                    if (A) break;
                  }
                  y.push(y.splice(b, 1)[0]);
                }
                function s(y) {
                  var E = y.length,
                    m = y[E - 1],
                    g,
                    A;
                  for (
                    m.cacheItem.delete(m.arg), A = E - 2;
                    A >= 0 &&
                    ((m = y[A]), (g = m.cacheItem.get(m.arg)), !g || !g.size);
                    A--
                  )
                    m.cacheItem.delete(m.arg);
                }
                function p(y, E) {
                  return y === E || (y !== y && E !== E);
                }
              },
              { 'map-or-similar': 1 },
            ],
          },
          {},
          [3],
        )(3);
      });
    });
    var Ap = S((PG, Ep) => {
      l();
      c();
      d();
      function _F(e, t, r, n) {
        for (var a = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < a; )
          if (t(e[o], o, e)) return o;
        return -1;
      }
      Ep.exports = _F;
    });
    var Dp = S((LG, vp) => {
      l();
      c();
      d();
      function OF(e) {
        return e !== e;
      }
      vp.exports = OF;
    });
    var xp = S(($G, Cp) => {
      l();
      c();
      d();
      function RF(e, t, r) {
        for (var n = r - 1, a = e.length; ++n < a; ) if (e[n] === t) return n;
        return -1;
      }
      Cp.exports = RF;
    });
    var Fp = S((GG, Sp) => {
      l();
      c();
      d();
      var PF = Ap(),
        IF = Dp(),
        kF = xp();
      function NF(e, t, r) {
        return t === t ? kF(e, t, r) : PF(e, IF, r);
      }
      Sp.exports = NF;
    });
    var Bp = S((YG, wp) => {
      l();
      c();
      d();
      var LF = Fp();
      function qF(e, t) {
        var r = e == null ? 0 : e.length;
        return !!r && LF(e, t, 0) > -1;
      }
      wp.exports = qF;
    });
    var _p = S((ZG, Tp) => {
      l();
      c();
      d();
      function jF(e, t, r) {
        for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
          if (r(t, e[n])) return !0;
        return !1;
      }
      Tp.exports = jF;
    });
    var Rp = S((nW, Op) => {
      l();
      c();
      d();
      function MF() {}
      Op.exports = MF;
    });
    var Ip = S((uW, Pp) => {
      l();
      c();
      d();
      var No = io(),
        $F = Rp(),
        UF = tn(),
        zF = 1 / 0,
        HF =
          No && 1 / UF(new No([, -0]))[1] == zF
            ? function (e) {
                return new No(e);
              }
            : $F;
      Pp.exports = HF;
    });
    var Np = S((dW, kp) => {
      l();
      c();
      d();
      var GF = Va(),
        WF = Bp(),
        VF = _p(),
        KF = Ka(),
        YF = Ip(),
        JF = tn(),
        XF = 200;
      function QF(e, t, r) {
        var n = -1,
          a = WF,
          o = e.length,
          i = !0,
          u = [],
          s = u;
        if (r) (i = !1), (a = VF);
        else if (o >= XF) {
          var p = t ? null : YF(e);
          if (p) return JF(p);
          (i = !1), (a = KF), (s = new GF());
        } else s = t ? [] : u;
        e: for (; ++n < o; ) {
          var y = e[n],
            E = t ? t(y) : y;
          if (((y = r || y !== 0 ? y : 0), i && E === E)) {
            for (var m = s.length; m--; ) if (s[m] === E) continue e;
            t && s.push(E), u.push(y);
          } else a(s, E, r) || (s !== u && s.push(E), u.push(y));
        }
        return u;
      }
      kp.exports = QF;
    });
    var qp = S((mW, Lp) => {
      l();
      c();
      d();
      var ZF = Np();
      function ew(e) {
        return e && e.length ? ZF(e) : [];
      }
      Lp.exports = ew;
    });
    var Mp = S((EW, jp) => {
      l();
      c();
      d();
      function tw(e, t) {
        for (
          var r = -1, n = e == null ? 0 : e.length;
          ++r < n && t(e[r], r, e) !== !1;

        );
        return e;
      }
      jp.exports = tw;
    });
    var xr = S((CW, $p) => {
      l();
      c();
      d();
      var rw = gn(),
        nw = mn();
      function aw(e, t, r, n) {
        var a = !r;
        r || (r = {});
        for (var o = -1, i = t.length; ++o < i; ) {
          var u = t[o],
            s = n ? n(r[u], e[u], u, r, e) : void 0;
          s === void 0 && (s = e[u]), a ? nw(r, u, s) : rw(r, u, s);
        }
        return r;
      }
      $p.exports = aw;
    });
    var zp = S((wW, Up) => {
      l();
      c();
      d();
      var ow = xr(),
        iw = Lt();
      function uw(e, t) {
        return e && ow(t, iw(t), e);
      }
      Up.exports = uw;
    });
    var Gp = S((OW, Hp) => {
      l();
      c();
      d();
      var sw = xr(),
        lw = bn();
      function cw(e, t) {
        return e && sw(t, lw(t), e);
      }
      Hp.exports = cw;
    });
    var Jp = S((Sr, $t) => {
      l();
      c();
      d();
      var dw = Le(),
        Yp = typeof Sr == 'object' && Sr && !Sr.nodeType && Sr,
        Wp = Yp && typeof $t == 'object' && $t && !$t.nodeType && $t,
        pw = Wp && Wp.exports === Yp,
        Vp = pw ? dw.Buffer : void 0,
        Kp = Vp ? Vp.allocUnsafe : void 0;
      function fw(e, t) {
        if (t) return e.slice();
        var r = e.length,
          n = Kp ? Kp(r) : new e.constructor(r);
        return e.copy(n), n;
      }
      $t.exports = fw;
    });
    var Qp = S((qW, Xp) => {
      l();
      c();
      d();
      function hw(e, t) {
        var r = -1,
          n = e.length;
        for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
        return t;
      }
      Xp.exports = hw;
    });
    var ef = S((UW, Zp) => {
      l();
      c();
      d();
      var mw = xr(),
        gw = nn();
      function yw(e, t) {
        return mw(e, gw(e), t);
      }
      Zp.exports = yw;
    });
    var rf = S((WW, tf) => {
      l();
      c();
      d();
      var bw = xr(),
        Ew = Co();
      function Aw(e, t) {
        return bw(e, Ew(e), t);
      }
      tf.exports = Aw;
    });
    var af = S((JW, nf) => {
      l();
      c();
      d();
      var vw = Object.prototype,
        Dw = vw.hasOwnProperty;
      function Cw(e) {
        var t = e.length,
          r = new e.constructor(t);
        return (
          t &&
            typeof e[0] == 'string' &&
            Dw.call(e, 'index') &&
            ((r.index = e.index), (r.input = e.input)),
          r
        );
      }
      nf.exports = Cw;
    });
    var xn = S((eV, uf) => {
      l();
      c();
      d();
      var of = Ja();
      function xw(e) {
        var t = new e.constructor(e.byteLength);
        return new of(t).set(new of(e)), t;
      }
      uf.exports = xw;
    });
    var lf = S((aV, sf) => {
      l();
      c();
      d();
      var Sw = xn();
      function Fw(e, t) {
        var r = t ? Sw(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength);
      }
      sf.exports = Fw;
    });
    var df = S((sV, cf) => {
      l();
      c();
      d();
      var ww = /\w*$/;
      function Bw(e) {
        var t = new e.constructor(e.source, ww.exec(e));
        return (t.lastIndex = e.lastIndex), t;
      }
      cf.exports = Bw;
    });
    var gf = S((pV, mf) => {
      l();
      c();
      d();
      var pf = mt(),
        ff = pf ? pf.prototype : void 0,
        hf = ff ? ff.valueOf : void 0;
      function Tw(e) {
        return hf ? Object(hf.call(e)) : {};
      }
      mf.exports = Tw;
    });
    var bf = S((gV, yf) => {
      l();
      c();
      d();
      var _w = xn();
      function Ow(e, t) {
        var r = t ? _w(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length);
      }
      yf.exports = Ow;
    });
    var Af = S((AV, Ef) => {
      l();
      c();
      d();
      var Rw = xn(),
        Pw = lf(),
        Iw = df(),
        kw = gf(),
        Nw = bf(),
        Lw = '[object Boolean]',
        qw = '[object Date]',
        jw = '[object Map]',
        Mw = '[object Number]',
        $w = '[object RegExp]',
        Uw = '[object Set]',
        zw = '[object String]',
        Hw = '[object Symbol]',
        Gw = '[object ArrayBuffer]',
        Ww = '[object DataView]',
        Vw = '[object Float32Array]',
        Kw = '[object Float64Array]',
        Yw = '[object Int8Array]',
        Jw = '[object Int16Array]',
        Xw = '[object Int32Array]',
        Qw = '[object Uint8Array]',
        Zw = '[object Uint8ClampedArray]',
        e5 = '[object Uint16Array]',
        t5 = '[object Uint32Array]';
      function r5(e, t, r) {
        var n = e.constructor;
        switch (t) {
          case Gw:
            return Rw(e);
          case Lw:
          case qw:
            return new n(+e);
          case Ww:
            return Pw(e, r);
          case Vw:
          case Kw:
          case Yw:
          case Jw:
          case Xw:
          case Qw:
          case Zw:
          case e5:
          case t5:
            return Nw(e, r);
          case jw:
            return new n();
          case Mw:
          case zw:
            return new n(e);
          case $w:
            return Iw(e);
          case Uw:
            return new n();
          case Hw:
            return kw(e);
        }
      }
      Ef.exports = r5;
    });
    var Cf = S((xV, Df) => {
      l();
      c();
      d();
      var n5 = $e(),
        vf = Object.create,
        a5 = (function () {
          function e() {}
          return function (t) {
            if (!n5(t)) return {};
            if (vf) return vf(t);
            e.prototype = t;
            var r = new e();
            return (e.prototype = void 0), r;
          };
        })();
      Df.exports = a5;
    });
    var Sf = S((BV, xf) => {
      l();
      c();
      d();
      var o5 = Cf(),
        i5 = yn(),
        u5 = dn();
      function s5(e) {
        return typeof e.constructor == 'function' && !u5(e) ? o5(i5(e)) : {};
      }
      xf.exports = s5;
    });
    var wf = S((RV, Ff) => {
      l();
      c();
      d();
      var l5 = Ar(),
        c5 = Je(),
        d5 = '[object Map]';
      function p5(e) {
        return c5(e) && l5(e) == d5;
      }
      Ff.exports = p5;
    });
    var Of = S((NV, _f) => {
      l();
      c();
      d();
      var f5 = wf(),
        h5 = ln(),
        Bf = cn(),
        Tf = Bf && Bf.isMap,
        m5 = Tf ? h5(Tf) : f5;
      _f.exports = m5;
    });
    var Pf = S((MV, Rf) => {
      l();
      c();
      d();
      var g5 = Ar(),
        y5 = Je(),
        b5 = '[object Set]';
      function E5(e) {
        return y5(e) && g5(e) == b5;
      }
      Rf.exports = E5;
    });
    var Lf = S((HV, Nf) => {
      l();
      c();
      d();
      var A5 = Pf(),
        v5 = ln(),
        If = cn(),
        kf = If && If.isSet,
        D5 = kf ? v5(kf) : A5;
      Nf.exports = D5;
    });
    var Uf = S((KV, $f) => {
      l();
      c();
      d();
      var C5 = Zr(),
        x5 = Mp(),
        S5 = gn(),
        F5 = zp(),
        w5 = Gp(),
        B5 = Jp(),
        T5 = Qp(),
        _5 = ef(),
        O5 = rf(),
        R5 = oo(),
        P5 = xo(),
        I5 = Ar(),
        k5 = af(),
        N5 = Af(),
        L5 = Sf(),
        q5 = Ue(),
        j5 = on(),
        M5 = Of(),
        $5 = $e(),
        U5 = Lf(),
        z5 = Lt(),
        H5 = bn(),
        G5 = 1,
        W5 = 2,
        V5 = 4,
        qf = '[object Arguments]',
        K5 = '[object Array]',
        Y5 = '[object Boolean]',
        J5 = '[object Date]',
        X5 = '[object Error]',
        jf = '[object Function]',
        Q5 = '[object GeneratorFunction]',
        Z5 = '[object Map]',
        e3 = '[object Number]',
        Mf = '[object Object]',
        t3 = '[object RegExp]',
        r3 = '[object Set]',
        n3 = '[object String]',
        a3 = '[object Symbol]',
        o3 = '[object WeakMap]',
        i3 = '[object ArrayBuffer]',
        u3 = '[object DataView]',
        s3 = '[object Float32Array]',
        l3 = '[object Float64Array]',
        c3 = '[object Int8Array]',
        d3 = '[object Int16Array]',
        p3 = '[object Int32Array]',
        f3 = '[object Uint8Array]',
        h3 = '[object Uint8ClampedArray]',
        m3 = '[object Uint16Array]',
        g3 = '[object Uint32Array]',
        ue = {};
      ue[qf] =
        ue[K5] =
        ue[i3] =
        ue[u3] =
        ue[Y5] =
        ue[J5] =
        ue[s3] =
        ue[l3] =
        ue[c3] =
        ue[d3] =
        ue[p3] =
        ue[Z5] =
        ue[e3] =
        ue[Mf] =
        ue[t3] =
        ue[r3] =
        ue[n3] =
        ue[a3] =
        ue[f3] =
        ue[h3] =
        ue[m3] =
        ue[g3] =
          !0;
      ue[X5] = ue[jf] = ue[o3] = !1;
      function Sn(e, t, r, n, a, o) {
        var i,
          u = t & G5,
          s = t & W5,
          p = t & V5;
        if ((r && (i = a ? r(e, n, a, o) : r(e)), i !== void 0)) return i;
        if (!$5(e)) return e;
        var y = q5(e);
        if (y) {
          if (((i = k5(e)), !u)) return T5(e, i);
        } else {
          var E = I5(e),
            m = E == jf || E == Q5;
          if (j5(e)) return B5(e, u);
          if (E == Mf || E == qf || (m && !a)) {
            if (((i = s || m ? {} : L5(e)), !u))
              return s ? O5(e, w5(i, e)) : _5(e, F5(i, e));
          } else {
            if (!ue[E]) return a ? e : {};
            i = N5(e, E, u);
          }
        }
        o || (o = new C5());
        var g = o.get(e);
        if (g) return g;
        o.set(e, i),
          U5(e)
            ? e.forEach(function (x) {
                i.add(Sn(x, t, r, x, e, o));
              })
            : M5(e) &&
              e.forEach(function (x, w) {
                i.set(w, Sn(x, t, r, w, e, o));
              });
        var A = p ? (s ? P5 : R5) : s ? H5 : z5,
          b = y ? void 0 : A(e);
        return (
          x5(b || e, function (x, w) {
            b && ((w = x), (x = e[w])), S5(i, w, Sn(x, t, r, w, e, o));
          }),
          i
        );
      }
      $f.exports = Sn;
    });
    var Hf = S((QV, zf) => {
      l();
      c();
      d();
      var y3 = Uf(),
        b3 = 1,
        E3 = 4;
      function A3(e) {
        return y3(e, b3 | E3);
      }
      zf.exports = A3;
    });
    var Zf = S((jK, Qf) => {
      l();
      c();
      d();
      function Q3(e) {
        return function (t, r, n) {
          for (var a = -1, o = Object(t), i = n(t), u = i.length; u--; ) {
            var s = i[e ? u : ++a];
            if (r(o[s], s, o) === !1) break;
          }
          return t;
        };
      }
      Qf.exports = Q3;
    });
    var t0 = S((zK, e0) => {
      l();
      c();
      d();
      var Z3 = Zf(),
        eB = Z3();
      e0.exports = eB;
    });
    var n0 = S((VK, r0) => {
      l();
      c();
      d();
      var tB = t0(),
        rB = Lt();
      function nB(e, t) {
        return e && tB(e, t, rB);
      }
      r0.exports = nB;
    });
    var On = S((XK, a0) => {
      l();
      c();
      d();
      var aB = mn(),
        oB = n0(),
        iB = Ao();
      function uB(e, t) {
        var r = {};
        return (
          (t = iB(t, 3)),
          oB(e, function (n, a, o) {
            aB(r, a, t(n, a, o));
          }),
          r
        );
      }
      a0.exports = uB;
    });
    var i0 = S((tY, o0) => {
      l();
      c();
      d();
      var sB = Do(),
        lB = bo();
      function cB(e, t) {
        return sB(e, t, function (r, n) {
          return lB(e, n);
        });
      }
      o0.exports = cB;
    });
    var c0 = S((oY, l0) => {
      l();
      c();
      d();
      var u0 = mt(),
        dB = an(),
        pB = Ue(),
        s0 = u0 ? u0.isConcatSpreadable : void 0;
      function fB(e) {
        return pB(e) || dB(e) || !!(s0 && e && e[s0]);
      }
      l0.exports = fB;
    });
    var f0 = S((lY, p0) => {
      l();
      c();
      d();
      var hB = rn(),
        mB = c0();
      function d0(e, t, r, n, a) {
        var o = -1,
          i = e.length;
        for (r || (r = mB), a || (a = []); ++o < i; ) {
          var u = e[o];
          t > 0 && r(u)
            ? t > 1
              ? d0(u, t - 1, r, n, a)
              : hB(a, u)
            : n || (a[a.length] = u);
        }
        return a;
      }
      p0.exports = d0;
    });
    var m0 = S((fY, h0) => {
      l();
      c();
      d();
      var gB = f0();
      function yB(e) {
        var t = e == null ? 0 : e.length;
        return t ? gB(e, 1) : [];
      }
      h0.exports = yB;
    });
    var y0 = S((yY, g0) => {
      l();
      c();
      d();
      function bB(e, t, r) {
        switch (r.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, r[0]);
          case 2:
            return e.call(t, r[0], r[1]);
          case 3:
            return e.call(t, r[0], r[1], r[2]);
        }
        return e.apply(t, r);
      }
      g0.exports = bB;
    });
    var A0 = S((vY, E0) => {
      l();
      c();
      d();
      var EB = y0(),
        b0 = Math.max;
      function AB(e, t, r) {
        return (
          (t = b0(t === void 0 ? e.length - 1 : t, 0)),
          function () {
            for (
              var n = arguments, a = -1, o = b0(n.length - t, 0), i = Array(o);
              ++a < o;

            )
              i[a] = n[t + a];
            a = -1;
            for (var u = Array(t + 1); ++a < t; ) u[a] = n[a];
            return (u[t] = r(i)), EB(e, this, u);
          }
        );
      }
      E0.exports = AB;
    });
    var D0 = S((SY, v0) => {
      l();
      c();
      d();
      function vB(e) {
        return function () {
          return e;
        };
      }
      v0.exports = vB;
    });
    var S0 = S((TY, x0) => {
      l();
      c();
      d();
      var DB = D0(),
        C0 = vo(),
        CB = Eo(),
        xB = C0
          ? function (e, t) {
              return C0(e, 'toString', {
                configurable: !0,
                enumerable: !1,
                value: DB(t),
                writable: !0,
              });
            }
          : CB;
      x0.exports = xB;
    });
    var w0 = S((PY, F0) => {
      l();
      c();
      d();
      var SB = 800,
        FB = 16,
        wB = Date.now;
      function BB(e) {
        var t = 0,
          r = 0;
        return function () {
          var n = wB(),
            a = FB - (n - r);
          if (((r = n), a > 0)) {
            if (++t >= SB) return arguments[0];
          } else t = 0;
          return e.apply(void 0, arguments);
        };
      }
      F0.exports = BB;
    });
    var T0 = S((LY, B0) => {
      l();
      c();
      d();
      var TB = S0(),
        _B = w0(),
        OB = _B(TB);
      B0.exports = OB;
    });
    var O0 = S(($Y, _0) => {
      l();
      c();
      d();
      var RB = m0(),
        PB = A0(),
        IB = T0();
      function kB(e) {
        return IB(PB(e, void 0, RB), e + '');
      }
      _0.exports = kB;
    });
    var P0 = S((GY, R0) => {
      l();
      c();
      d();
      var NB = i0(),
        LB = O0(),
        qB = LB(function (e, t) {
          return e == null ? {} : NB(e, t);
        });
      R0.exports = qB;
    });
    var Pn = S((YY, j0) => {
      'use strict';
      l();
      c();
      d();
      function Rn(e) {
        return Array.prototype.slice.apply(e);
      }
      var L0 = 'pending',
        I0 = 'resolved',
        k0 = 'rejected';
      function re(e) {
        (this.status = L0),
          (this._continuations = []),
          (this._parent = null),
          (this._paused = !1),
          e &&
            e.call(
              this,
              this._continueWith.bind(this),
              this._failWith.bind(this),
            );
      }
      function Fr(e) {
        return e && typeof e.then == 'function';
      }
      function jB(e) {
        return e;
      }
      re.prototype = {
        then: function (e, t) {
          var r = re.unresolved()._setParent(this);
          if (this._isRejected()) {
            if (this._paused)
              return (
                this._continuations.push({ promise: r, nextFn: e, catchFn: t }),
                r
              );
            if (t)
              try {
                var n = t(this._error);
                return Fr(n)
                  ? (this._chainPromiseData(n, r), r)
                  : re.resolve(n)._setParent(this);
              } catch (a) {
                return re.reject(a)._setParent(this);
              }
            return re.reject(this._error)._setParent(this);
          }
          return (
            this._continuations.push({ promise: r, nextFn: e, catchFn: t }),
            this._runResolutions(),
            r
          );
        },
        catch: function (e) {
          if (this._isResolved())
            return re.resolve(this._data)._setParent(this);
          var t = re.unresolved()._setParent(this);
          return (
            this._continuations.push({ promise: t, catchFn: e }),
            this._runRejections(),
            t
          );
        },
        finally: function (e) {
          var t = !1;
          function r(n, a) {
            if (!t) {
              (t = !0), e || (e = jB);
              var o = e(n);
              return Fr(o)
                ? o.then(function () {
                    if (a) throw a;
                    return n;
                  })
                : n;
            }
          }
          return this.then(function (n) {
            return r(n);
          }).catch(function (n) {
            return r(null, n);
          });
        },
        pause: function () {
          return (this._paused = !0), this;
        },
        resume: function () {
          var e = this._findFirstPaused();
          return (
            e && ((e._paused = !1), e._runResolutions(), e._runRejections()),
            this
          );
        },
        _findAncestry: function () {
          return this._continuations.reduce(function (e, t) {
            if (t.promise) {
              var r = {
                promise: t.promise,
                children: t.promise._findAncestry(),
              };
              e.push(r);
            }
            return e;
          }, []);
        },
        _setParent: function (e) {
          if (this._parent) throw new Error('parent already set');
          return (this._parent = e), this;
        },
        _continueWith: function (e) {
          var t = this._findFirstPending();
          t && ((t._data = e), t._setResolved());
        },
        _findFirstPending: function () {
          return this._findFirstAncestor(function (e) {
            return e._isPending && e._isPending();
          });
        },
        _findFirstPaused: function () {
          return this._findFirstAncestor(function (e) {
            return e._paused;
          });
        },
        _findFirstAncestor: function (e) {
          for (var t = this, r; t; ) e(t) && (r = t), (t = t._parent);
          return r;
        },
        _failWith: function (e) {
          var t = this._findFirstPending();
          t && ((t._error = e), t._setRejected());
        },
        _takeContinuations: function () {
          return this._continuations.splice(0, this._continuations.length);
        },
        _runRejections: function () {
          if (!(this._paused || !this._isRejected())) {
            var e = this._error,
              t = this._takeContinuations(),
              r = this;
            t.forEach(function (n) {
              if (n.catchFn)
                try {
                  var a = n.catchFn(e);
                  r._handleUserFunctionResult(a, n.promise);
                } catch (o) {
                  n.promise.reject(o);
                }
              else n.promise.reject(e);
            });
          }
        },
        _runResolutions: function () {
          if (!(this._paused || !this._isResolved() || this._isPending())) {
            var e = this._takeContinuations(),
              t = this._data,
              r = this;
            if (
              (e.forEach(function (n) {
                if (n.nextFn)
                  try {
                    var a = n.nextFn(t);
                    r._handleUserFunctionResult(a, n.promise);
                  } catch (o) {
                    r._handleResolutionError(o, n);
                  }
                else n.promise && n.promise.resolve(t);
              }),
              Fr(this._data))
            )
              return this._handleWhenResolvedDataIsPromise(this._data);
          }
        },
        _handleResolutionError: function (e, t) {
          if ((this._setRejected(), t.catchFn))
            try {
              t.catchFn(e);
              return;
            } catch (r) {
              e = r;
            }
          t.promise && t.promise.reject(e);
        },
        _handleWhenResolvedDataIsPromise: function (e) {
          var t = this;
          return e
            .then(function (r) {
              (t._data = r), t._runResolutions();
            })
            .catch(function (r) {
              (t._error = r), t._setRejected(), t._runRejections();
            });
        },
        _handleUserFunctionResult: function (e, t) {
          Fr(e) ? this._chainPromiseData(e, t) : t.resolve(e);
        },
        _chainPromiseData: function (e, t) {
          e.then(function (r) {
            t.resolve(r);
          }).catch(function (r) {
            t.reject(r);
          });
        },
        _setResolved: function () {
          (this.status = I0), this._paused || this._runResolutions();
        },
        _setRejected: function () {
          (this.status = k0), this._paused || this._runRejections();
        },
        _isPending: function () {
          return this.status === L0;
        },
        _isResolved: function () {
          return this.status === I0;
        },
        _isRejected: function () {
          return this.status === k0;
        },
      };
      re.resolve = function (e) {
        return new re(function (t, r) {
          Fr(e)
            ? e
                .then(function (n) {
                  t(n);
                })
                .catch(function (n) {
                  r(n);
                })
            : t(e);
        });
      };
      re.reject = function (e) {
        return new re(function (t, r) {
          r(e);
        });
      };
      re.unresolved = function () {
        return new re(function (e, t) {
          (this.resolve = e), (this.reject = t);
        });
      };
      re.all = function () {
        var e = Rn(arguments);
        return (
          Array.isArray(e[0]) && (e = e[0]),
          e.length
            ? new re(function (t, r) {
                var n = [],
                  a = 0,
                  o = function () {
                    a === e.length && t(n);
                  },
                  i = !1,
                  u = function (s) {
                    i || ((i = !0), r(s));
                  };
                e.forEach(function (s, p) {
                  re.resolve(s)
                    .then(function (y) {
                      (n[p] = y), (a += 1), o();
                    })
                    .catch(function (y) {
                      u(y);
                    });
                });
              })
            : re.resolve([])
        );
      };
      function N0(e) {
        return typeof window < 'u' && 'AggregateError' in window
          ? new window.AggregateError(e)
          : { errors: e };
      }
      re.any = function () {
        var e = Rn(arguments);
        return (
          Array.isArray(e[0]) && (e = e[0]),
          e.length
            ? new re(function (t, r) {
                var n = [],
                  a = 0,
                  o = function () {
                    a === e.length && r(N0(n));
                  },
                  i = !1,
                  u = function (s) {
                    i || ((i = !0), t(s));
                  };
                e.forEach(function (s, p) {
                  re.resolve(s)
                    .then(function (y) {
                      u(y);
                    })
                    .catch(function (y) {
                      (n[p] = y), (a += 1), o();
                    });
                });
              })
            : re.reject(N0([]))
        );
      };
      re.allSettled = function () {
        var e = Rn(arguments);
        return (
          Array.isArray(e[0]) && (e = e[0]),
          e.length
            ? new re(function (t) {
                var r = [],
                  n = 0,
                  a = function () {
                    (n += 1), n === e.length && t(r);
                  };
                e.forEach(function (o, i) {
                  re.resolve(o)
                    .then(function (u) {
                      (r[i] = { status: 'fulfilled', value: u }), a();
                    })
                    .catch(function (u) {
                      (r[i] = { status: 'rejected', reason: u }), a();
                    });
                });
              })
            : re.resolve([])
        );
      };
      if (Promise === re)
        throw new Error(
          'Please use SynchronousPromise.installGlobally() to install globally',
        );
      var q0 = Promise;
      re.installGlobally = function (e) {
        if (Promise === re) return e;
        var t = MB(e);
        return (Promise = re), t;
      };
      re.uninstallGlobally = function () {
        Promise === re && (Promise = q0);
      };
      function MB(e) {
        if (typeof e > 'u' || e.__patched) return e;
        var t = e;
        return (
          (e = function () {
            var r = q0;
            t.apply(this, Rn(arguments));
          }),
          (e.__patched = !0),
          e
        );
      }
      j0.exports = { SynchronousPromise: re };
    });
    var Mo = S((bJ, $0) => {
      l();
      c();
      d();
      var UB = gt(),
        zB = yn(),
        HB = Je(),
        GB = '[object Object]',
        WB = Function.prototype,
        VB = Object.prototype,
        M0 = WB.toString,
        KB = VB.hasOwnProperty,
        YB = M0.call(Object);
      function JB(e) {
        if (!HB(e) || UB(e) != GB) return !1;
        var t = zB(e);
        if (t === null) return !0;
        var r = KB.call(t, 'constructor') && t.constructor;
        return typeof r == 'function' && r instanceof r && M0.call(r) == YB;
      }
      $0.exports = JB;
    });
    var z0 = S((DJ, U0) => {
      l();
      c();
      d();
      U0.exports = XB;
      function XB(e, t) {
        if ($o('noDeprecation')) return e;
        var r = !1;
        function n() {
          if (!r) {
            if ($o('throwDeprecation')) throw new Error(t);
            $o('traceDeprecation') ? console.trace(t) : console.warn(t),
              (r = !0);
          }
          return e.apply(this, arguments);
        }
        return n;
      }
      function $o(e) {
        try {
          if (!window.localStorage) return !1;
        } catch {
          return !1;
        }
        var t = window.localStorage[e];
        return t == null ? !1 : String(t).toLowerCase() === 'true';
      }
    });
    var J0 = S((GJ, Y0) => {
      'use strict';
      l();
      c();
      d();
      Y0.exports = Error;
    });
    var Q0 = S((YJ, X0) => {
      'use strict';
      l();
      c();
      d();
      X0.exports = EvalError;
    });
    var eh = S((ZJ, Z0) => {
      'use strict';
      l();
      c();
      d();
      Z0.exports = RangeError;
    });
    var rh = S((nX, th) => {
      'use strict';
      l();
      c();
      d();
      th.exports = ReferenceError;
    });
    var Go = S((uX, nh) => {
      'use strict';
      l();
      c();
      d();
      nh.exports = SyntaxError;
    });
    var zt = S((dX, ah) => {
      'use strict';
      l();
      c();
      d();
      ah.exports = TypeError;
    });
    var ih = S((mX, oh) => {
      'use strict';
      l();
      c();
      d();
      oh.exports = URIError;
    });
    var sh = S((EX, uh) => {
      'use strict';
      l();
      c();
      d();
      uh.exports = function () {
        if (
          typeof Symbol != 'function' ||
          typeof Object.getOwnPropertySymbols != 'function'
        )
          return !1;
        if (typeof Symbol.iterator == 'symbol') return !0;
        var t = {},
          r = Symbol('test'),
          n = Object(r);
        if (
          typeof r == 'string' ||
          Object.prototype.toString.call(r) !== '[object Symbol]' ||
          Object.prototype.toString.call(n) !== '[object Symbol]'
        )
          return !1;
        var a = 42;
        t[r] = a;
        for (r in t) return !1;
        if (
          (typeof Object.keys == 'function' && Object.keys(t).length !== 0) ||
          (typeof Object.getOwnPropertyNames == 'function' &&
            Object.getOwnPropertyNames(t).length !== 0)
        )
          return !1;
        var o = Object.getOwnPropertySymbols(t);
        if (
          o.length !== 1 ||
          o[0] !== r ||
          !Object.prototype.propertyIsEnumerable.call(t, r)
        )
          return !1;
        if (typeof Object.getOwnPropertyDescriptor == 'function') {
          var i = Object.getOwnPropertyDescriptor(t, r);
          if (i.value !== a || i.enumerable !== !0) return !1;
        }
        return !0;
      };
    });
    var dh = S((CX, ch) => {
      'use strict';
      l();
      c();
      d();
      var lh = typeof Symbol < 'u' && Symbol,
        fT = sh();
      ch.exports = function () {
        return typeof lh != 'function' ||
          typeof Symbol != 'function' ||
          typeof lh('foo') != 'symbol' ||
          typeof Symbol('bar') != 'symbol'
          ? !1
          : fT();
      };
    });
    var fh = S((wX, ph) => {
      'use strict';
      l();
      c();
      d();
      var Wo = { __proto__: null, foo: {} },
        hT = Object;
      ph.exports = function () {
        return { __proto__: Wo }.foo === Wo.foo && !(Wo instanceof hT);
      };
    });
    var gh = S((OX, mh) => {
      'use strict';
      l();
      c();
      d();
      var mT = 'Function.prototype.bind called on incompatible ',
        gT = Object.prototype.toString,
        yT = Math.max,
        bT = '[object Function]',
        hh = function (t, r) {
          for (var n = [], a = 0; a < t.length; a += 1) n[a] = t[a];
          for (var o = 0; o < r.length; o += 1) n[o + t.length] = r[o];
          return n;
        },
        ET = function (t, r) {
          for (var n = [], a = r || 0, o = 0; a < t.length; a += 1, o += 1)
            n[o] = t[a];
          return n;
        },
        AT = function (e, t) {
          for (var r = '', n = 0; n < e.length; n += 1)
            (r += e[n]), n + 1 < e.length && (r += t);
          return r;
        };
      mh.exports = function (t) {
        var r = this;
        if (typeof r != 'function' || gT.apply(r) !== bT)
          throw new TypeError(mT + r);
        for (
          var n = ET(arguments, 1),
            a,
            o = function () {
              if (this instanceof a) {
                var y = r.apply(this, hh(n, arguments));
                return Object(y) === y ? y : this;
              }
              return r.apply(t, hh(n, arguments));
            },
            i = yT(0, r.length - n.length),
            u = [],
            s = 0;
          s < i;
          s++
        )
          u[s] = '$' + s;
        if (
          ((a = Function(
            'binder',
            'return function (' +
              AT(u, ',') +
              '){ return binder.apply(this,arguments); }',
          )(o)),
          r.prototype)
        ) {
          var p = function () {};
          (p.prototype = r.prototype),
            (a.prototype = new p()),
            (p.prototype = null);
        }
        return a;
      };
    });
    var qn = S((kX, yh) => {
      'use strict';
      l();
      c();
      d();
      var vT = gh();
      yh.exports = Function.prototype.bind || vT;
    });
    var Eh = S((jX, bh) => {
      'use strict';
      l();
      c();
      d();
      var DT = Function.prototype.call,
        CT = Object.prototype.hasOwnProperty,
        xT = qn();
      bh.exports = xT.call(DT, CT);
    });
    var Dt = S((zX, xh) => {
      'use strict';
      l();
      c();
      d();
      var Z,
        ST = J0(),
        FT = Q0(),
        wT = eh(),
        BT = rh(),
        Vt = Go(),
        Wt = zt(),
        TT = ih(),
        Ch = Function,
        Vo = function (e) {
          try {
            return Ch('"use strict"; return (' + e + ').constructor;')();
          } catch {}
        },
        At = Object.getOwnPropertyDescriptor;
      if (At)
        try {
          At({}, '');
        } catch {
          At = null;
        }
      var Ko = function () {
          throw new Wt();
        },
        _T = At
          ? (function () {
              try {
                return arguments.callee, Ko;
              } catch {
                try {
                  return At(arguments, 'callee').get;
                } catch {
                  return Ko;
                }
              }
            })()
          : Ko,
        Ht = dh()(),
        OT = fh()(),
        ve =
          Object.getPrototypeOf ||
          (OT
            ? function (e) {
                return e.__proto__;
              }
            : null),
        Gt = {},
        RT = typeof Uint8Array > 'u' || !ve ? Z : ve(Uint8Array),
        vt = {
          __proto__: null,
          '%AggregateError%': typeof AggregateError > 'u' ? Z : AggregateError,
          '%Array%': Array,
          '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? Z : ArrayBuffer,
          '%ArrayIteratorPrototype%': Ht && ve ? ve([][Symbol.iterator]()) : Z,
          '%AsyncFromSyncIteratorPrototype%': Z,
          '%AsyncFunction%': Gt,
          '%AsyncGenerator%': Gt,
          '%AsyncGeneratorFunction%': Gt,
          '%AsyncIteratorPrototype%': Gt,
          '%Atomics%': typeof Atomics > 'u' ? Z : Atomics,
          '%BigInt%': typeof BigInt > 'u' ? Z : BigInt,
          '%BigInt64Array%': typeof BigInt64Array > 'u' ? Z : BigInt64Array,
          '%BigUint64Array%': typeof BigUint64Array > 'u' ? Z : BigUint64Array,
          '%Boolean%': Boolean,
          '%DataView%': typeof DataView > 'u' ? Z : DataView,
          '%Date%': Date,
          '%decodeURI%': decodeURI,
          '%decodeURIComponent%': decodeURIComponent,
          '%encodeURI%': encodeURI,
          '%encodeURIComponent%': encodeURIComponent,
          '%Error%': ST,
          '%eval%': eval,
          '%EvalError%': FT,
          '%Float32Array%': typeof Float32Array > 'u' ? Z : Float32Array,
          '%Float64Array%': typeof Float64Array > 'u' ? Z : Float64Array,
          '%FinalizationRegistry%':
            typeof FinalizationRegistry > 'u' ? Z : FinalizationRegistry,
          '%Function%': Ch,
          '%GeneratorFunction%': Gt,
          '%Int8Array%': typeof Int8Array > 'u' ? Z : Int8Array,
          '%Int16Array%': typeof Int16Array > 'u' ? Z : Int16Array,
          '%Int32Array%': typeof Int32Array > 'u' ? Z : Int32Array,
          '%isFinite%': isFinite,
          '%isNaN%': isNaN,
          '%IteratorPrototype%': Ht && ve ? ve(ve([][Symbol.iterator]())) : Z,
          '%JSON%': typeof JSON == 'object' ? JSON : Z,
          '%Map%': typeof Map > 'u' ? Z : Map,
          '%MapIteratorPrototype%':
            typeof Map > 'u' || !Ht || !ve
              ? Z
              : ve(new Map()[Symbol.iterator]()),
          '%Math%': Math,
          '%Number%': Number,
          '%Object%': Object,
          '%parseFloat%': parseFloat,
          '%parseInt%': parseInt,
          '%Promise%': typeof Promise > 'u' ? Z : Promise,
          '%Proxy%': typeof Proxy > 'u' ? Z : Proxy,
          '%RangeError%': wT,
          '%ReferenceError%': BT,
          '%Reflect%': typeof Reflect > 'u' ? Z : Reflect,
          '%RegExp%': RegExp,
          '%Set%': typeof Set > 'u' ? Z : Set,
          '%SetIteratorPrototype%':
            typeof Set > 'u' || !Ht || !ve
              ? Z
              : ve(new Set()[Symbol.iterator]()),
          '%SharedArrayBuffer%':
            typeof SharedArrayBuffer > 'u' ? Z : SharedArrayBuffer,
          '%String%': String,
          '%StringIteratorPrototype%': Ht && ve ? ve(''[Symbol.iterator]()) : Z,
          '%Symbol%': Ht ? Symbol : Z,
          '%SyntaxError%': Vt,
          '%ThrowTypeError%': _T,
          '%TypedArray%': RT,
          '%TypeError%': Wt,
          '%Uint8Array%': typeof Uint8Array > 'u' ? Z : Uint8Array,
          '%Uint8ClampedArray%':
            typeof Uint8ClampedArray > 'u' ? Z : Uint8ClampedArray,
          '%Uint16Array%': typeof Uint16Array > 'u' ? Z : Uint16Array,
          '%Uint32Array%': typeof Uint32Array > 'u' ? Z : Uint32Array,
          '%URIError%': TT,
          '%WeakMap%': typeof WeakMap > 'u' ? Z : WeakMap,
          '%WeakRef%': typeof WeakRef > 'u' ? Z : WeakRef,
          '%WeakSet%': typeof WeakSet > 'u' ? Z : WeakSet,
        };
      if (ve)
        try {
          null.error;
        } catch (e) {
          (Ah = ve(ve(e))), (vt['%Error.prototype%'] = Ah);
        }
      var Ah,
        PT = function e(t) {
          var r;
          if (t === '%AsyncFunction%') r = Vo('async function () {}');
          else if (t === '%GeneratorFunction%') r = Vo('function* () {}');
          else if (t === '%AsyncGeneratorFunction%')
            r = Vo('async function* () {}');
          else if (t === '%AsyncGenerator%') {
            var n = e('%AsyncGeneratorFunction%');
            n && (r = n.prototype);
          } else if (t === '%AsyncIteratorPrototype%') {
            var a = e('%AsyncGenerator%');
            a && ve && (r = ve(a.prototype));
          }
          return (vt[t] = r), r;
        },
        vh = {
          __proto__: null,
          '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
          '%ArrayPrototype%': ['Array', 'prototype'],
          '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
          '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
          '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
          '%ArrayProto_values%': ['Array', 'prototype', 'values'],
          '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
          '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
          '%AsyncGeneratorPrototype%': [
            'AsyncGeneratorFunction',
            'prototype',
            'prototype',
          ],
          '%BooleanPrototype%': ['Boolean', 'prototype'],
          '%DataViewPrototype%': ['DataView', 'prototype'],
          '%DatePrototype%': ['Date', 'prototype'],
          '%ErrorPrototype%': ['Error', 'prototype'],
          '%EvalErrorPrototype%': ['EvalError', 'prototype'],
          '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
          '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
          '%FunctionPrototype%': ['Function', 'prototype'],
          '%Generator%': ['GeneratorFunction', 'prototype'],
          '%GeneratorPrototype%': [
            'GeneratorFunction',
            'prototype',
            'prototype',
          ],
          '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
          '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
          '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
          '%JSONParse%': ['JSON', 'parse'],
          '%JSONStringify%': ['JSON', 'stringify'],
          '%MapPrototype%': ['Map', 'prototype'],
          '%NumberPrototype%': ['Number', 'prototype'],
          '%ObjectPrototype%': ['Object', 'prototype'],
          '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
          '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
          '%PromisePrototype%': ['Promise', 'prototype'],
          '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
          '%Promise_all%': ['Promise', 'all'],
          '%Promise_reject%': ['Promise', 'reject'],
          '%Promise_resolve%': ['Promise', 'resolve'],
          '%RangeErrorPrototype%': ['RangeError', 'prototype'],
          '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
          '%RegExpPrototype%': ['RegExp', 'prototype'],
          '%SetPrototype%': ['Set', 'prototype'],
          '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
          '%StringPrototype%': ['String', 'prototype'],
          '%SymbolPrototype%': ['Symbol', 'prototype'],
          '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
          '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
          '%TypeErrorPrototype%': ['TypeError', 'prototype'],
          '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
          '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
          '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
          '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
          '%URIErrorPrototype%': ['URIError', 'prototype'],
          '%WeakMapPrototype%': ['WeakMap', 'prototype'],
          '%WeakSetPrototype%': ['WeakSet', 'prototype'],
        },
        Or = qn(),
        jn = Eh(),
        IT = Or.call(Function.call, Array.prototype.concat),
        kT = Or.call(Function.apply, Array.prototype.splice),
        Dh = Or.call(Function.call, String.prototype.replace),
        Mn = Or.call(Function.call, String.prototype.slice),
        NT = Or.call(Function.call, RegExp.prototype.exec),
        LT =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        qT = /\\(\\)?/g,
        jT = function (t) {
          var r = Mn(t, 0, 1),
            n = Mn(t, -1);
          if (r === '%' && n !== '%')
            throw new Vt('invalid intrinsic syntax, expected closing `%`');
          if (n === '%' && r !== '%')
            throw new Vt('invalid intrinsic syntax, expected opening `%`');
          var a = [];
          return (
            Dh(t, LT, function (o, i, u, s) {
              a[a.length] = u ? Dh(s, qT, '$1') : i || o;
            }),
            a
          );
        },
        MT = function (t, r) {
          var n = t,
            a;
          if ((jn(vh, n) && ((a = vh[n]), (n = '%' + a[0] + '%')), jn(vt, n))) {
            var o = vt[n];
            if ((o === Gt && (o = PT(n)), typeof o > 'u' && !r))
              throw new Wt(
                'intrinsic ' +
                  t +
                  ' exists, but is not available. Please file an issue!',
              );
            return { alias: a, name: n, value: o };
          }
          throw new Vt('intrinsic ' + t + ' does not exist!');
        };
      xh.exports = function (t, r) {
        if (typeof t != 'string' || t.length === 0)
          throw new Wt('intrinsic name must be a non-empty string');
        if (arguments.length > 1 && typeof r != 'boolean')
          throw new Wt('"allowMissing" argument must be a boolean');
        if (NT(/^%?[^%]*%?$/, t) === null)
          throw new Vt(
            '`%` may not be present anywhere but at the beginning and end of the intrinsic name',
          );
        var n = jT(t),
          a = n.length > 0 ? n[0] : '',
          o = MT('%' + a + '%', r),
          i = o.name,
          u = o.value,
          s = !1,
          p = o.alias;
        p && ((a = p[0]), kT(n, IT([0, 1], p)));
        for (var y = 1, E = !0; y < n.length; y += 1) {
          var m = n[y],
            g = Mn(m, 0, 1),
            A = Mn(m, -1);
          if (
            (g === '"' ||
              g === "'" ||
              g === '`' ||
              A === '"' ||
              A === "'" ||
              A === '`') &&
            g !== A
          )
            throw new Vt(
              'property names with quotes must have matching quotes',
            );
          if (
            ((m === 'constructor' || !E) && (s = !0),
            (a += '.' + m),
            (i = '%' + a + '%'),
            jn(vt, i))
          )
            u = vt[i];
          else if (u != null) {
            if (!(m in u)) {
              if (!r)
                throw new Wt(
                  'base intrinsic for ' +
                    t +
                    ' exists, but the property is not available.',
                );
              return;
            }
            if (At && y + 1 >= n.length) {
              var b = At(u, m);
              (E = !!b),
                E && 'get' in b && !('originalValue' in b.get)
                  ? (u = b.get)
                  : (u = u[m]);
            } else (E = jn(u, m)), (u = u[m]);
            E && !s && (vt[i] = u);
          }
        }
        return u;
      };
    });
    var Un = S((VX, Sh) => {
      'use strict';
      l();
      c();
      d();
      var $T = Dt(),
        $n = $T('%Object.defineProperty%', !0) || !1;
      if ($n)
        try {
          $n({}, 'a', { value: 1 });
        } catch {
          $n = !1;
        }
      Sh.exports = $n;
    });
    var Yo = S((XX, Fh) => {
      'use strict';
      l();
      c();
      d();
      var UT = Dt(),
        zn = UT('%Object.getOwnPropertyDescriptor%', !0);
      if (zn)
        try {
          zn([], 'length');
        } catch {
          zn = null;
        }
      Fh.exports = zn;
    });
    var _h = S((tQ, Th) => {
      'use strict';
      l();
      c();
      d();
      var wh = Un(),
        zT = Go(),
        Kt = zt(),
        Bh = Yo();
      Th.exports = function (t, r, n) {
        if (!t || (typeof t != 'object' && typeof t != 'function'))
          throw new Kt('`obj` must be an object or a function`');
        if (typeof r != 'string' && typeof r != 'symbol')
          throw new Kt('`property` must be a string or a symbol`');
        if (
          arguments.length > 3 &&
          typeof arguments[3] != 'boolean' &&
          arguments[3] !== null
        )
          throw new Kt(
            '`nonEnumerable`, if provided, must be a boolean or null',
          );
        if (
          arguments.length > 4 &&
          typeof arguments[4] != 'boolean' &&
          arguments[4] !== null
        )
          throw new Kt('`nonWritable`, if provided, must be a boolean or null');
        if (
          arguments.length > 5 &&
          typeof arguments[5] != 'boolean' &&
          arguments[5] !== null
        )
          throw new Kt(
            '`nonConfigurable`, if provided, must be a boolean or null',
          );
        if (arguments.length > 6 && typeof arguments[6] != 'boolean')
          throw new Kt('`loose`, if provided, must be a boolean');
        var a = arguments.length > 3 ? arguments[3] : null,
          o = arguments.length > 4 ? arguments[4] : null,
          i = arguments.length > 5 ? arguments[5] : null,
          u = arguments.length > 6 ? arguments[6] : !1,
          s = !!Bh && Bh(t, r);
        if (wh)
          wh(t, r, {
            configurable: i === null && s ? s.configurable : !i,
            enumerable: a === null && s ? s.enumerable : !a,
            value: n,
            writable: o === null && s ? s.writable : !o,
          });
        else if (u || (!a && !o && !i)) t[r] = n;
        else
          throw new zT(
            'This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.',
          );
      };
    });
    var Ph = S((oQ, Rh) => {
      'use strict';
      l();
      c();
      d();
      var Jo = Un(),
        Oh = function () {
          return !!Jo;
        };
      Oh.hasArrayLengthDefineBug = function () {
        if (!Jo) return null;
        try {
          return Jo([], 'length', { value: 1 }).length !== 1;
        } catch {
          return !0;
        }
      };
      Rh.exports = Oh;
    });
    var qh = S((lQ, Lh) => {
      'use strict';
      l();
      c();
      d();
      var HT = Dt(),
        Ih = _h(),
        GT = Ph()(),
        kh = Yo(),
        Nh = zt(),
        WT = HT('%Math.floor%');
      Lh.exports = function (t, r) {
        if (typeof t != 'function') throw new Nh('`fn` is not a function');
        if (typeof r != 'number' || r < 0 || r > 4294967295 || WT(r) !== r)
          throw new Nh('`length` must be a positive 32-bit integer');
        var n = arguments.length > 2 && !!arguments[2],
          a = !0,
          o = !0;
        if ('length' in t && kh) {
          var i = kh(t, 'length');
          i && !i.configurable && (a = !1), i && !i.writable && (o = !1);
        }
        return (
          (a || o || !n) &&
            (GT ? Ih(t, 'length', r, !0, !0) : Ih(t, 'length', r)),
          t
        );
      };
    });
    var Hh = S((fQ, Hn) => {
      'use strict';
      l();
      c();
      d();
      var Xo = qn(),
        Gn = Dt(),
        VT = qh(),
        KT = zt(),
        $h = Gn('%Function.prototype.apply%'),
        Uh = Gn('%Function.prototype.call%'),
        zh = Gn('%Reflect.apply%', !0) || Xo.call(Uh, $h),
        jh = Un(),
        YT = Gn('%Math.max%');
      Hn.exports = function (t) {
        if (typeof t != 'function') throw new KT('a function is required');
        var r = zh(Xo, Uh, arguments);
        return VT(r, 1 + YT(0, t.length - (arguments.length - 1)), !0);
      };
      var Mh = function () {
        return zh(Xo, $h, arguments);
      };
      jh ? jh(Hn.exports, 'apply', { value: Mh }) : (Hn.exports.apply = Mh);
    });
    var Kh = S((yQ, Vh) => {
      'use strict';
      l();
      c();
      d();
      var Gh = Dt(),
        Wh = Hh(),
        JT = Wh(Gh('String.prototype.indexOf'));
      Vh.exports = function (t, r) {
        var n = Gh(t, !!r);
        return typeof n == 'function' && JT(t, '.prototype.') > -1 ? Wh(n) : n;
      };
    });
    var Yh = S(() => {
      l();
      c();
      d();
    });
    var mm = S((FQ, hm) => {
      l();
      c();
      d();
      var ui = typeof Map == 'function' && Map.prototype,
        Qo =
          Object.getOwnPropertyDescriptor && ui
            ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
            : null,
        Vn = ui && Qo && typeof Qo.get == 'function' ? Qo.get : null,
        Jh = ui && Map.prototype.forEach,
        si = typeof Set == 'function' && Set.prototype,
        Zo =
          Object.getOwnPropertyDescriptor && si
            ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
            : null,
        Kn = si && Zo && typeof Zo.get == 'function' ? Zo.get : null,
        Xh = si && Set.prototype.forEach,
        XT = typeof WeakMap == 'function' && WeakMap.prototype,
        Pr = XT ? WeakMap.prototype.has : null,
        QT = typeof WeakSet == 'function' && WeakSet.prototype,
        Ir = QT ? WeakSet.prototype.has : null,
        ZT = typeof WeakRef == 'function' && WeakRef.prototype,
        Qh = ZT ? WeakRef.prototype.deref : null,
        e8 = Boolean.prototype.valueOf,
        t8 = Object.prototype.toString,
        r8 = Function.prototype.toString,
        n8 = String.prototype.match,
        li = String.prototype.slice,
        st = String.prototype.replace,
        a8 = String.prototype.toUpperCase,
        Zh = String.prototype.toLowerCase,
        sm = RegExp.prototype.test,
        em = Array.prototype.concat,
        Ge = Array.prototype.join,
        o8 = Array.prototype.slice,
        tm = Math.floor,
        ri = typeof BigInt == 'function' ? BigInt.prototype.valueOf : null,
        ei = Object.getOwnPropertySymbols,
        ni =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? Symbol.prototype.toString
            : null,
        Yt = typeof Symbol == 'function' && typeof Symbol.iterator == 'object',
        Ce =
          typeof Symbol == 'function' &&
          Symbol.toStringTag &&
          (typeof Symbol.toStringTag === Yt || 'symbol')
            ? Symbol.toStringTag
            : null,
        lm = Object.prototype.propertyIsEnumerable,
        rm =
          (typeof Reflect == 'function'
            ? Reflect.getPrototypeOf
            : Object.getPrototypeOf) ||
          ([].__proto__ === Array.prototype
            ? function (e) {
                return e.__proto__;
              }
            : null);
      function nm(e, t) {
        if (
          e === 1 / 0 ||
          e === -1 / 0 ||
          e !== e ||
          (e && e > -1e3 && e < 1e3) ||
          sm.call(/e/, t)
        )
          return t;
        var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof e == 'number') {
          var n = e < 0 ? -tm(-e) : tm(e);
          if (n !== e) {
            var a = String(n),
              o = li.call(t, a.length + 1);
            return (
              st.call(a, r, '$&_') +
              '.' +
              st.call(st.call(o, /([0-9]{3})/g, '$&_'), /_$/, '')
            );
          }
        }
        return st.call(t, r, '$&_');
      }
      var ai = Yh(),
        am = ai.custom,
        om = dm(am) ? am : null;
      hm.exports = function e(t, r, n, a) {
        var o = r || {};
        if (
          ut(o, 'quoteStyle') &&
          o.quoteStyle !== 'single' &&
          o.quoteStyle !== 'double'
        )
          throw new TypeError(
            'option "quoteStyle" must be "single" or "double"',
          );
        if (
          ut(o, 'maxStringLength') &&
          (typeof o.maxStringLength == 'number'
            ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0
            : o.maxStringLength !== null)
        )
          throw new TypeError(
            'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`',
          );
        var i = ut(o, 'customInspect') ? o.customInspect : !0;
        if (typeof i != 'boolean' && i !== 'symbol')
          throw new TypeError(
            'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`',
          );
        if (
          ut(o, 'indent') &&
          o.indent !== null &&
          o.indent !== '	' &&
          !(parseInt(o.indent, 10) === o.indent && o.indent > 0)
        )
          throw new TypeError(
            'option "indent" must be "\\t", an integer > 0, or `null`',
          );
        if (ut(o, 'numericSeparator') && typeof o.numericSeparator != 'boolean')
          throw new TypeError(
            'option "numericSeparator", if provided, must be `true` or `false`',
          );
        var u = o.numericSeparator;
        if (typeof t > 'u') return 'undefined';
        if (t === null) return 'null';
        if (typeof t == 'boolean') return t ? 'true' : 'false';
        if (typeof t == 'string') return fm(t, o);
        if (typeof t == 'number') {
          if (t === 0) return 1 / 0 / t > 0 ? '0' : '-0';
          var s = String(t);
          return u ? nm(t, s) : s;
        }
        if (typeof t == 'bigint') {
          var p = String(t) + 'n';
          return u ? nm(t, p) : p;
        }
        var y = typeof o.depth > 'u' ? 5 : o.depth;
        if (
          (typeof n > 'u' && (n = 0), n >= y && y > 0 && typeof t == 'object')
        )
          return oi(t) ? '[Array]' : '[Object]';
        var E = C8(o, n);
        if (typeof a > 'u') a = [];
        else if (pm(a, t) >= 0) return '[Circular]';
        function m(J, O, T) {
          if ((O && ((a = o8.call(a)), a.push(O)), T)) {
            var j = { depth: o.depth };
            return (
              ut(o, 'quoteStyle') && (j.quoteStyle = o.quoteStyle),
              e(J, j, n + 1, a)
            );
          }
          return e(J, o, n + 1, a);
        }
        if (typeof t == 'function' && !im(t)) {
          var g = h8(t),
            A = Wn(t, m);
          return (
            '[Function' +
            (g ? ': ' + g : ' (anonymous)') +
            ']' +
            (A.length > 0 ? ' { ' + Ge.call(A, ', ') + ' }' : '')
          );
        }
        if (dm(t)) {
          var b = Yt
            ? st.call(String(t), /^(Symbol\(.*\))_[^)]*$/, '$1')
            : ni.call(t);
          return typeof t == 'object' && !Yt ? Rr(b) : b;
        }
        if (A8(t)) {
          for (
            var x = '<' + Zh.call(String(t.nodeName)),
              w = t.attributes || [],
              R = 0;
            R < w.length;
            R++
          )
            x += ' ' + w[R].name + '=' + cm(i8(w[R].value), 'double', o);
          return (
            (x += '>'),
            t.childNodes && t.childNodes.length && (x += '...'),
            (x += '</' + Zh.call(String(t.nodeName)) + '>'),
            x
          );
        }
        if (oi(t)) {
          if (t.length === 0) return '[]';
          var I = Wn(t, m);
          return E && !D8(I)
            ? '[' + ii(I, E) + ']'
            : '[ ' + Ge.call(I, ', ') + ' ]';
        }
        if (s8(t)) {
          var M = Wn(t, m);
          return !('cause' in Error.prototype) &&
            'cause' in t &&
            !lm.call(t, 'cause')
            ? '{ [' +
                String(t) +
                '] ' +
                Ge.call(em.call('[cause]: ' + m(t.cause), M), ', ') +
                ' }'
            : M.length === 0
              ? '[' + String(t) + ']'
              : '{ [' + String(t) + '] ' + Ge.call(M, ', ') + ' }';
        }
        if (typeof t == 'object' && i) {
          if (om && typeof t[om] == 'function' && ai)
            return ai(t, { depth: y - n });
          if (i !== 'symbol' && typeof t.inspect == 'function')
            return t.inspect();
        }
        if (m8(t)) {
          var F = [];
          return (
            Jh &&
              Jh.call(t, function (J, O) {
                F.push(m(O, t, !0) + ' => ' + m(J, t));
              }),
            um('Map', Vn.call(t), F, E)
          );
        }
        if (b8(t)) {
          var L = [];
          return (
            Xh &&
              Xh.call(t, function (J) {
                L.push(m(J, t));
              }),
            um('Set', Kn.call(t), L, E)
          );
        }
        if (g8(t)) return ti('WeakMap');
        if (E8(t)) return ti('WeakSet');
        if (y8(t)) return ti('WeakRef');
        if (c8(t)) return Rr(m(Number(t)));
        if (p8(t)) return Rr(m(ri.call(t)));
        if (d8(t)) return Rr(e8.call(t));
        if (l8(t)) return Rr(m(String(t)));
        if (typeof window < 'u' && t === window) return '{ [object Window] }';
        if (
          (typeof globalThis < 'u' && t === globalThis) ||
          (typeof window < 'u' && t === window)
        )
          return '{ [object globalThis] }';
        if (!u8(t) && !im(t)) {
          var k = Wn(t, m),
            z = rm
              ? rm(t) === Object.prototype
              : t instanceof Object || t.constructor === Object,
            K = t instanceof Object ? '' : 'null prototype',
            U =
              !z && Ce && Object(t) === t && Ce in t
                ? li.call(lt(t), 8, -1)
                : K
                  ? 'Object'
                  : '',
            se =
              z || typeof t.constructor != 'function'
                ? ''
                : t.constructor.name
                  ? t.constructor.name + ' '
                  : '',
            ee =
              se +
              (U || K
                ? '[' + Ge.call(em.call([], U || [], K || []), ': ') + '] '
                : '');
          return k.length === 0
            ? ee + '{}'
            : E
              ? ee + '{' + ii(k, E) + '}'
              : ee + '{ ' + Ge.call(k, ', ') + ' }';
        }
        return String(t);
      };
      function cm(e, t, r) {
        var n = (r.quoteStyle || t) === 'double' ? '"' : "'";
        return n + e + n;
      }
      function i8(e) {
        return st.call(String(e), /"/g, '&quot;');
      }
      function oi(e) {
        return (
          lt(e) === '[object Array]' &&
          (!Ce || !(typeof e == 'object' && Ce in e))
        );
      }
      function u8(e) {
        return (
          lt(e) === '[object Date]' &&
          (!Ce || !(typeof e == 'object' && Ce in e))
        );
      }
      function im(e) {
        return (
          lt(e) === '[object RegExp]' &&
          (!Ce || !(typeof e == 'object' && Ce in e))
        );
      }
      function s8(e) {
        return (
          lt(e) === '[object Error]' &&
          (!Ce || !(typeof e == 'object' && Ce in e))
        );
      }
      function l8(e) {
        return (
          lt(e) === '[object String]' &&
          (!Ce || !(typeof e == 'object' && Ce in e))
        );
      }
      function c8(e) {
        return (
          lt(e) === '[object Number]' &&
          (!Ce || !(typeof e == 'object' && Ce in e))
        );
      }
      function d8(e) {
        return (
          lt(e) === '[object Boolean]' &&
          (!Ce || !(typeof e == 'object' && Ce in e))
        );
      }
      function dm(e) {
        if (Yt) return e && typeof e == 'object' && e instanceof Symbol;
        if (typeof e == 'symbol') return !0;
        if (!e || typeof e != 'object' || !ni) return !1;
        try {
          return ni.call(e), !0;
        } catch {}
        return !1;
      }
      function p8(e) {
        if (!e || typeof e != 'object' || !ri) return !1;
        try {
          return ri.call(e), !0;
        } catch {}
        return !1;
      }
      var f8 =
        Object.prototype.hasOwnProperty ||
        function (e) {
          return e in this;
        };
      function ut(e, t) {
        return f8.call(e, t);
      }
      function lt(e) {
        return t8.call(e);
      }
      function h8(e) {
        if (e.name) return e.name;
        var t = n8.call(r8.call(e), /^function\s*([\w$]+)/);
        return t ? t[1] : null;
      }
      function pm(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
        return -1;
      }
      function m8(e) {
        if (!Vn || !e || typeof e != 'object') return !1;
        try {
          Vn.call(e);
          try {
            Kn.call(e);
          } catch {
            return !0;
          }
          return e instanceof Map;
        } catch {}
        return !1;
      }
      function g8(e) {
        if (!Pr || !e || typeof e != 'object') return !1;
        try {
          Pr.call(e, Pr);
          try {
            Ir.call(e, Ir);
          } catch {
            return !0;
          }
          return e instanceof WeakMap;
        } catch {}
        return !1;
      }
      function y8(e) {
        if (!Qh || !e || typeof e != 'object') return !1;
        try {
          return Qh.call(e), !0;
        } catch {}
        return !1;
      }
      function b8(e) {
        if (!Kn || !e || typeof e != 'object') return !1;
        try {
          Kn.call(e);
          try {
            Vn.call(e);
          } catch {
            return !0;
          }
          return e instanceof Set;
        } catch {}
        return !1;
      }
      function E8(e) {
        if (!Ir || !e || typeof e != 'object') return !1;
        try {
          Ir.call(e, Ir);
          try {
            Pr.call(e, Pr);
          } catch {
            return !0;
          }
          return e instanceof WeakSet;
        } catch {}
        return !1;
      }
      function A8(e) {
        return !e || typeof e != 'object'
          ? !1
          : typeof HTMLElement < 'u' && e instanceof HTMLElement
            ? !0
            : typeof e.nodeName == 'string' &&
              typeof e.getAttribute == 'function';
      }
      function fm(e, t) {
        if (e.length > t.maxStringLength) {
          var r = e.length - t.maxStringLength,
            n = '... ' + r + ' more character' + (r > 1 ? 's' : '');
          return fm(li.call(e, 0, t.maxStringLength), t) + n;
        }
        var a = st.call(st.call(e, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, v8);
        return cm(a, 'single', t);
      }
      function v8(e) {
        var t = e.charCodeAt(0),
          r = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[t];
        return r
          ? '\\' + r
          : '\\x' + (t < 16 ? '0' : '') + a8.call(t.toString(16));
      }
      function Rr(e) {
        return 'Object(' + e + ')';
      }
      function ti(e) {
        return e + ' { ? }';
      }
      function um(e, t, r, n) {
        var a = n ? ii(r, n) : Ge.call(r, ', ');
        return e + ' (' + t + ') {' + a + '}';
      }
      function D8(e) {
        for (var t = 0; t < e.length; t++)
          if (
            pm(
              e[t],
              `
`,
            ) >= 0
          )
            return !1;
        return !0;
      }
      function C8(e, t) {
        var r;
        if (e.indent === '	') r = '	';
        else if (typeof e.indent == 'number' && e.indent > 0)
          r = Ge.call(Array(e.indent + 1), ' ');
        else return null;
        return { base: r, prev: Ge.call(Array(t + 1), r) };
      }
      function ii(e, t) {
        if (e.length === 0) return '';
        var r =
          `
` +
          t.prev +
          t.base;
        return (
          r +
          Ge.call(e, ',' + r) +
          `
` +
          t.prev
        );
      }
      function Wn(e, t) {
        var r = oi(e),
          n = [];
        if (r) {
          n.length = e.length;
          for (var a = 0; a < e.length; a++) n[a] = ut(e, a) ? t(e[a], e) : '';
        }
        var o = typeof ei == 'function' ? ei(e) : [],
          i;
        if (Yt) {
          i = {};
          for (var u = 0; u < o.length; u++) i['$' + o[u]] = o[u];
        }
        for (var s in e)
          ut(e, s) &&
            ((r && String(Number(s)) === s && s < e.length) ||
              (Yt && i['$' + s] instanceof Symbol) ||
              (sm.call(/[^\w$]/, s)
                ? n.push(t(s, e) + ': ' + t(e[s], e))
                : n.push(s + ': ' + t(e[s], e))));
        if (typeof ei == 'function')
          for (var p = 0; p < o.length; p++)
            lm.call(e, o[p]) && n.push('[' + t(o[p]) + ']: ' + t(e[o[p]], e));
        return n;
      }
    });
    var bm = S((_Q, ym) => {
      'use strict';
      l();
      c();
      d();
      var gm = Dt(),
        Jt = Kh(),
        x8 = mm(),
        S8 = zt(),
        Yn = gm('%WeakMap%', !0),
        Jn = gm('%Map%', !0),
        F8 = Jt('WeakMap.prototype.get', !0),
        w8 = Jt('WeakMap.prototype.set', !0),
        B8 = Jt('WeakMap.prototype.has', !0),
        T8 = Jt('Map.prototype.get', !0),
        _8 = Jt('Map.prototype.set', !0),
        O8 = Jt('Map.prototype.has', !0),
        ci = function (e, t) {
          for (var r = e, n; (n = r.next) !== null; r = n)
            if (n.key === t)
              return (r.next = n.next), (n.next = e.next), (e.next = n), n;
        },
        R8 = function (e, t) {
          var r = ci(e, t);
          return r && r.value;
        },
        P8 = function (e, t, r) {
          var n = ci(e, t);
          n ? (n.value = r) : (e.next = { key: t, next: e.next, value: r });
        },
        I8 = function (e, t) {
          return !!ci(e, t);
        };
      ym.exports = function () {
        var t,
          r,
          n,
          a = {
            assert: function (o) {
              if (!a.has(o))
                throw new S8('Side channel does not contain ' + x8(o));
            },
            get: function (o) {
              if (Yn && o && (typeof o == 'object' || typeof o == 'function')) {
                if (t) return F8(t, o);
              } else if (Jn) {
                if (r) return T8(r, o);
              } else if (n) return R8(n, o);
            },
            has: function (o) {
              if (Yn && o && (typeof o == 'object' || typeof o == 'function')) {
                if (t) return B8(t, o);
              } else if (Jn) {
                if (r) return O8(r, o);
              } else if (n) return I8(n, o);
              return !1;
            },
            set: function (o, i) {
              Yn && o && (typeof o == 'object' || typeof o == 'function')
                ? (t || (t = new Yn()), w8(t, o, i))
                : Jn
                  ? (r || (r = new Jn()), _8(r, o, i))
                  : (n || (n = { key: {}, next: null }), P8(n, o, i));
            },
          };
        return a;
      };
    });
    var Xn = S((IQ, Em) => {
      'use strict';
      l();
      c();
      d();
      var k8 = String.prototype.replace,
        N8 = /%20/g,
        di = { RFC1738: 'RFC1738', RFC3986: 'RFC3986' };
      Em.exports = {
        default: di.RFC3986,
        formatters: {
          RFC1738: function (e) {
            return k8.call(e, N8, '+');
          },
          RFC3986: function (e) {
            return String(e);
          },
        },
        RFC1738: di.RFC1738,
        RFC3986: di.RFC3986,
      };
    });
    var hi = S((qQ, vm) => {
      'use strict';
      l();
      c();
      d();
      var L8 = Xn(),
        pi = Object.prototype.hasOwnProperty,
        Ct = Array.isArray,
        We = (function () {
          for (var e = [], t = 0; t < 256; ++t)
            e.push('%' + ((t < 16 ? '0' : '') + t.toString(16)).toUpperCase());
          return e;
        })(),
        q8 = function (t) {
          for (; t.length > 1; ) {
            var r = t.pop(),
              n = r.obj[r.prop];
            if (Ct(n)) {
              for (var a = [], o = 0; o < n.length; ++o)
                typeof n[o] < 'u' && a.push(n[o]);
              r.obj[r.prop] = a;
            }
          }
        },
        Am = function (t, r) {
          for (
            var n = r && r.plainObjects ? Object.create(null) : {}, a = 0;
            a < t.length;
            ++a
          )
            typeof t[a] < 'u' && (n[a] = t[a]);
          return n;
        },
        j8 = function e(t, r, n) {
          if (!r) return t;
          if (typeof r != 'object') {
            if (Ct(t)) t.push(r);
            else if (t && typeof t == 'object')
              ((n && (n.plainObjects || n.allowPrototypes)) ||
                !pi.call(Object.prototype, r)) &&
                (t[r] = !0);
            else return [t, r];
            return t;
          }
          if (!t || typeof t != 'object') return [t].concat(r);
          var a = t;
          return (
            Ct(t) && !Ct(r) && (a = Am(t, n)),
            Ct(t) && Ct(r)
              ? (r.forEach(function (o, i) {
                  if (pi.call(t, i)) {
                    var u = t[i];
                    u && typeof u == 'object' && o && typeof o == 'object'
                      ? (t[i] = e(u, o, n))
                      : t.push(o);
                  } else t[i] = o;
                }),
                t)
              : Object.keys(r).reduce(function (o, i) {
                  var u = r[i];
                  return pi.call(o, i) ? (o[i] = e(o[i], u, n)) : (o[i] = u), o;
                }, a)
          );
        },
        M8 = function (t, r) {
          return Object.keys(r).reduce(function (n, a) {
            return (n[a] = r[a]), n;
          }, t);
        },
        $8 = function (e, t, r) {
          var n = e.replace(/\+/g, ' ');
          if (r === 'iso-8859-1') return n.replace(/%[0-9a-f]{2}/gi, unescape);
          try {
            return decodeURIComponent(n);
          } catch {
            return n;
          }
        },
        fi = 1024,
        U8 = function (t, r, n, a, o) {
          if (t.length === 0) return t;
          var i = t;
          if (
            (typeof t == 'symbol'
              ? (i = Symbol.prototype.toString.call(t))
              : typeof t != 'string' && (i = String(t)),
            n === 'iso-8859-1')
          )
            return escape(i).replace(/%u[0-9a-f]{4}/gi, function (g) {
              return '%26%23' + parseInt(g.slice(2), 16) + '%3B';
            });
          for (var u = '', s = 0; s < i.length; s += fi) {
            for (
              var p = i.length >= fi ? i.slice(s, s + fi) : i, y = [], E = 0;
              E < p.length;
              ++E
            ) {
              var m = p.charCodeAt(E);
              if (
                m === 45 ||
                m === 46 ||
                m === 95 ||
                m === 126 ||
                (m >= 48 && m <= 57) ||
                (m >= 65 && m <= 90) ||
                (m >= 97 && m <= 122) ||
                (o === L8.RFC1738 && (m === 40 || m === 41))
              ) {
                y[y.length] = p.charAt(E);
                continue;
              }
              if (m < 128) {
                y[y.length] = We[m];
                continue;
              }
              if (m < 2048) {
                y[y.length] = We[192 | (m >> 6)] + We[128 | (m & 63)];
                continue;
              }
              if (m < 55296 || m >= 57344) {
                y[y.length] =
                  We[224 | (m >> 12)] +
                  We[128 | ((m >> 6) & 63)] +
                  We[128 | (m & 63)];
                continue;
              }
              (E += 1),
                (m = 65536 + (((m & 1023) << 10) | (p.charCodeAt(E) & 1023))),
                (y[y.length] =
                  We[240 | (m >> 18)] +
                  We[128 | ((m >> 12) & 63)] +
                  We[128 | ((m >> 6) & 63)] +
                  We[128 | (m & 63)]);
            }
            u += y.join('');
          }
          return u;
        },
        z8 = function (t) {
          for (
            var r = [{ obj: { o: t }, prop: 'o' }], n = [], a = 0;
            a < r.length;
            ++a
          )
            for (
              var o = r[a], i = o.obj[o.prop], u = Object.keys(i), s = 0;
              s < u.length;
              ++s
            ) {
              var p = u[s],
                y = i[p];
              typeof y == 'object' &&
                y !== null &&
                n.indexOf(y) === -1 &&
                (r.push({ obj: i, prop: p }), n.push(y));
            }
          return q8(r), t;
        },
        H8 = function (t) {
          return Object.prototype.toString.call(t) === '[object RegExp]';
        },
        G8 = function (t) {
          return !t || typeof t != 'object'
            ? !1
            : !!(
                t.constructor &&
                t.constructor.isBuffer &&
                t.constructor.isBuffer(t)
              );
        },
        W8 = function (t, r) {
          return [].concat(t, r);
        },
        V8 = function (t, r) {
          if (Ct(t)) {
            for (var n = [], a = 0; a < t.length; a += 1) n.push(r(t[a]));
            return n;
          }
          return r(t);
        };
      vm.exports = {
        arrayToObject: Am,
        assign: M8,
        combine: W8,
        compact: z8,
        decode: $8,
        encode: U8,
        isBuffer: G8,
        isRegExp: H8,
        maybeMap: V8,
        merge: j8,
      };
    });
    var wm = S((UQ, Fm) => {
      'use strict';
      l();
      c();
      d();
      var Cm = bm(),
        Qn = hi(),
        kr = Xn(),
        K8 = Object.prototype.hasOwnProperty,
        xm = {
          brackets: function (t) {
            return t + '[]';
          },
          comma: 'comma',
          indices: function (t, r) {
            return t + '[' + r + ']';
          },
          repeat: function (t) {
            return t;
          },
        },
        Ve = Array.isArray,
        Y8 = Array.prototype.push,
        Sm = function (e, t) {
          Y8.apply(e, Ve(t) ? t : [t]);
        },
        J8 = Date.prototype.toISOString,
        Dm = kr.default,
        ye = {
          addQueryPrefix: !1,
          allowDots: !1,
          allowEmptyArrays: !1,
          arrayFormat: 'indices',
          charset: 'utf-8',
          charsetSentinel: !1,
          delimiter: '&',
          encode: !0,
          encodeDotInKeys: !1,
          encoder: Qn.encode,
          encodeValuesOnly: !1,
          format: Dm,
          formatter: kr.formatters[Dm],
          indices: !1,
          serializeDate: function (t) {
            return J8.call(t);
          },
          skipNulls: !1,
          strictNullHandling: !1,
        },
        X8 = function (t) {
          return (
            typeof t == 'string' ||
            typeof t == 'number' ||
            typeof t == 'boolean' ||
            typeof t == 'symbol' ||
            typeof t == 'bigint'
          );
        },
        mi = {},
        Q8 = function e(t, r, n, a, o, i, u, s, p, y, E, m, g, A, b, x, w, R) {
          for (
            var I = t, M = R, F = 0, L = !1;
            (M = M.get(mi)) !== void 0 && !L;

          ) {
            var k = M.get(t);
            if (((F += 1), typeof k < 'u')) {
              if (k === F) throw new RangeError('Cyclic object value');
              L = !0;
            }
            typeof M.get(mi) > 'u' && (F = 0);
          }
          if (
            (typeof y == 'function'
              ? (I = y(r, I))
              : I instanceof Date
                ? (I = g(I))
                : n === 'comma' &&
                  Ve(I) &&
                  (I = Qn.maybeMap(I, function (Q) {
                    return Q instanceof Date ? g(Q) : Q;
                  })),
            I === null)
          ) {
            if (i) return p && !x ? p(r, ye.encoder, w, 'key', A) : r;
            I = '';
          }
          if (X8(I) || Qn.isBuffer(I)) {
            if (p) {
              var z = x ? r : p(r, ye.encoder, w, 'key', A);
              return [b(z) + '=' + b(p(I, ye.encoder, w, 'value', A))];
            }
            return [b(r) + '=' + b(String(I))];
          }
          var K = [];
          if (typeof I > 'u') return K;
          var U;
          if (n === 'comma' && Ve(I))
            x && p && (I = Qn.maybeMap(I, p)),
              (U = [{ value: I.length > 0 ? I.join(',') || null : void 0 }]);
          else if (Ve(y)) U = y;
          else {
            var se = Object.keys(I);
            U = E ? se.sort(E) : se;
          }
          var ee = s ? r.replace(/\./g, '%2E') : r,
            J = a && Ve(I) && I.length === 1 ? ee + '[]' : ee;
          if (o && Ve(I) && I.length === 0) return J + '[]';
          for (var O = 0; O < U.length; ++O) {
            var T = U[O],
              j = typeof T == 'object' && typeof T.value < 'u' ? T.value : I[T];
            if (!(u && j === null)) {
              var G = m && s ? T.replace(/\./g, '%2E') : T,
                Y = Ve(I)
                  ? typeof n == 'function'
                    ? n(J, G)
                    : J
                  : J + (m ? '.' + G : '[' + G + ']');
              R.set(t, F);
              var V = Cm();
              V.set(mi, R),
                Sm(
                  K,
                  e(
                    j,
                    Y,
                    n,
                    a,
                    o,
                    i,
                    u,
                    s,
                    n === 'comma' && x && Ve(I) ? null : p,
                    y,
                    E,
                    m,
                    g,
                    A,
                    b,
                    x,
                    w,
                    V,
                  ),
                );
            }
          }
          return K;
        },
        Z8 = function (t) {
          if (!t) return ye;
          if (
            typeof t.allowEmptyArrays < 'u' &&
            typeof t.allowEmptyArrays != 'boolean'
          )
            throw new TypeError(
              '`allowEmptyArrays` option can only be `true` or `false`, when provided',
            );
          if (
            typeof t.encodeDotInKeys < 'u' &&
            typeof t.encodeDotInKeys != 'boolean'
          )
            throw new TypeError(
              '`encodeDotInKeys` option can only be `true` or `false`, when provided',
            );
          if (
            t.encoder !== null &&
            typeof t.encoder < 'u' &&
            typeof t.encoder != 'function'
          )
            throw new TypeError('Encoder has to be a function.');
          var r = t.charset || ye.charset;
          if (
            typeof t.charset < 'u' &&
            t.charset !== 'utf-8' &&
            t.charset !== 'iso-8859-1'
          )
            throw new TypeError(
              'The charset option must be either utf-8, iso-8859-1, or undefined',
            );
          var n = kr.default;
          if (typeof t.format < 'u') {
            if (!K8.call(kr.formatters, t.format))
              throw new TypeError('Unknown format option provided.');
            n = t.format;
          }
          var a = kr.formatters[n],
            o = ye.filter;
          (typeof t.filter == 'function' || Ve(t.filter)) && (o = t.filter);
          var i;
          if (
            (t.arrayFormat in xm
              ? (i = t.arrayFormat)
              : 'indices' in t
                ? (i = t.indices ? 'indices' : 'repeat')
                : (i = ye.arrayFormat),
            'commaRoundTrip' in t && typeof t.commaRoundTrip != 'boolean')
          )
            throw new TypeError(
              '`commaRoundTrip` must be a boolean, or absent',
            );
          var u =
            typeof t.allowDots > 'u'
              ? t.encodeDotInKeys === !0
                ? !0
                : ye.allowDots
              : !!t.allowDots;
          return {
            addQueryPrefix:
              typeof t.addQueryPrefix == 'boolean'
                ? t.addQueryPrefix
                : ye.addQueryPrefix,
            allowDots: u,
            allowEmptyArrays:
              typeof t.allowEmptyArrays == 'boolean'
                ? !!t.allowEmptyArrays
                : ye.allowEmptyArrays,
            arrayFormat: i,
            charset: r,
            charsetSentinel:
              typeof t.charsetSentinel == 'boolean'
                ? t.charsetSentinel
                : ye.charsetSentinel,
            commaRoundTrip: t.commaRoundTrip,
            delimiter: typeof t.delimiter > 'u' ? ye.delimiter : t.delimiter,
            encode: typeof t.encode == 'boolean' ? t.encode : ye.encode,
            encodeDotInKeys:
              typeof t.encodeDotInKeys == 'boolean'
                ? t.encodeDotInKeys
                : ye.encodeDotInKeys,
            encoder: typeof t.encoder == 'function' ? t.encoder : ye.encoder,
            encodeValuesOnly:
              typeof t.encodeValuesOnly == 'boolean'
                ? t.encodeValuesOnly
                : ye.encodeValuesOnly,
            filter: o,
            format: n,
            formatter: a,
            serializeDate:
              typeof t.serializeDate == 'function'
                ? t.serializeDate
                : ye.serializeDate,
            skipNulls:
              typeof t.skipNulls == 'boolean' ? t.skipNulls : ye.skipNulls,
            sort: typeof t.sort == 'function' ? t.sort : null,
            strictNullHandling:
              typeof t.strictNullHandling == 'boolean'
                ? t.strictNullHandling
                : ye.strictNullHandling,
          };
        };
      Fm.exports = function (e, t) {
        var r = e,
          n = Z8(t),
          a,
          o;
        typeof n.filter == 'function'
          ? ((o = n.filter), (r = o('', r)))
          : Ve(n.filter) && ((o = n.filter), (a = o));
        var i = [];
        if (typeof r != 'object' || r === null) return '';
        var u = xm[n.arrayFormat],
          s = u === 'comma' && n.commaRoundTrip;
        a || (a = Object.keys(r)), n.sort && a.sort(n.sort);
        for (var p = Cm(), y = 0; y < a.length; ++y) {
          var E = a[y];
          (n.skipNulls && r[E] === null) ||
            Sm(
              i,
              Q8(
                r[E],
                E,
                u,
                s,
                n.allowEmptyArrays,
                n.strictNullHandling,
                n.skipNulls,
                n.encodeDotInKeys,
                n.encode ? n.encoder : null,
                n.filter,
                n.sort,
                n.allowDots,
                n.serializeDate,
                n.format,
                n.formatter,
                n.encodeValuesOnly,
                n.charset,
                p,
              ),
            );
        }
        var m = i.join(n.delimiter),
          g = n.addQueryPrefix === !0 ? '?' : '';
        return (
          n.charsetSentinel &&
            (n.charset === 'iso-8859-1'
              ? (g += 'utf8=%26%2310003%3B&')
              : (g += 'utf8=%E2%9C%93&')),
          m.length > 0 ? g + m : ''
        );
      };
    });
    var _m = S((WQ, Tm) => {
      'use strict';
      l();
      c();
      d();
      var Xt = hi(),
        gi = Object.prototype.hasOwnProperty,
        e_ = Array.isArray,
        me = {
          allowDots: !1,
          allowEmptyArrays: !1,
          allowPrototypes: !1,
          allowSparse: !1,
          arrayLimit: 20,
          charset: 'utf-8',
          charsetSentinel: !1,
          comma: !1,
          decodeDotInKeys: !1,
          decoder: Xt.decode,
          delimiter: '&',
          depth: 5,
          duplicates: 'combine',
          ignoreQueryPrefix: !1,
          interpretNumericEntities: !1,
          parameterLimit: 1e3,
          parseArrays: !0,
          plainObjects: !1,
          strictNullHandling: !1,
        },
        t_ = function (e) {
          return e.replace(/&#(\d+);/g, function (t, r) {
            return String.fromCharCode(parseInt(r, 10));
          });
        },
        Bm = function (e, t) {
          return e && typeof e == 'string' && t.comma && e.indexOf(',') > -1
            ? e.split(',')
            : e;
        },
        r_ = 'utf8=%26%2310003%3B',
        n_ = 'utf8=%E2%9C%93',
        a_ = function (t, r) {
          var n = { __proto__: null },
            a = r.ignoreQueryPrefix ? t.replace(/^\?/, '') : t;
          a = a.replace(/%5B/gi, '[').replace(/%5D/gi, ']');
          var o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
            i = a.split(r.delimiter, o),
            u = -1,
            s,
            p = r.charset;
          if (r.charsetSentinel)
            for (s = 0; s < i.length; ++s)
              i[s].indexOf('utf8=') === 0 &&
                (i[s] === n_
                  ? (p = 'utf-8')
                  : i[s] === r_ && (p = 'iso-8859-1'),
                (u = s),
                (s = i.length));
          for (s = 0; s < i.length; ++s)
            if (s !== u) {
              var y = i[s],
                E = y.indexOf(']='),
                m = E === -1 ? y.indexOf('=') : E + 1,
                g,
                A;
              m === -1
                ? ((g = r.decoder(y, me.decoder, p, 'key')),
                  (A = r.strictNullHandling ? null : ''))
                : ((g = r.decoder(y.slice(0, m), me.decoder, p, 'key')),
                  (A = Xt.maybeMap(Bm(y.slice(m + 1), r), function (x) {
                    return r.decoder(x, me.decoder, p, 'value');
                  }))),
                A &&
                  r.interpretNumericEntities &&
                  p === 'iso-8859-1' &&
                  (A = t_(A)),
                y.indexOf('[]=') > -1 && (A = e_(A) ? [A] : A);
              var b = gi.call(n, g);
              b && r.duplicates === 'combine'
                ? (n[g] = Xt.combine(n[g], A))
                : (!b || r.duplicates === 'last') && (n[g] = A);
            }
          return n;
        },
        o_ = function (e, t, r, n) {
          for (var a = n ? t : Bm(t, r), o = e.length - 1; o >= 0; --o) {
            var i,
              u = e[o];
            if (u === '[]' && r.parseArrays)
              i =
                r.allowEmptyArrays &&
                (a === '' || (r.strictNullHandling && a === null))
                  ? []
                  : [].concat(a);
            else {
              i = r.plainObjects ? Object.create(null) : {};
              var s =
                  u.charAt(0) === '[' && u.charAt(u.length - 1) === ']'
                    ? u.slice(1, -1)
                    : u,
                p = r.decodeDotInKeys ? s.replace(/%2E/g, '.') : s,
                y = parseInt(p, 10);
              !r.parseArrays && p === ''
                ? (i = { 0: a })
                : !isNaN(y) &&
                    u !== p &&
                    String(y) === p &&
                    y >= 0 &&
                    r.parseArrays &&
                    y <= r.arrayLimit
                  ? ((i = []), (i[y] = a))
                  : p !== '__proto__' && (i[p] = a);
            }
            a = i;
          }
          return a;
        },
        i_ = function (t, r, n, a) {
          if (t) {
            var o = n.allowDots ? t.replace(/\.([^.[]+)/g, '[$1]') : t,
              i = /(\[[^[\]]*])/,
              u = /(\[[^[\]]*])/g,
              s = n.depth > 0 && i.exec(o),
              p = s ? o.slice(0, s.index) : o,
              y = [];
            if (p) {
              if (
                !n.plainObjects &&
                gi.call(Object.prototype, p) &&
                !n.allowPrototypes
              )
                return;
              y.push(p);
            }
            for (
              var E = 0;
              n.depth > 0 && (s = u.exec(o)) !== null && E < n.depth;

            ) {
              if (
                ((E += 1),
                !n.plainObjects &&
                  gi.call(Object.prototype, s[1].slice(1, -1)) &&
                  !n.allowPrototypes)
              )
                return;
              y.push(s[1]);
            }
            return s && y.push('[' + o.slice(s.index) + ']'), o_(y, r, n, a);
          }
        },
        u_ = function (t) {
          if (!t) return me;
          if (
            typeof t.allowEmptyArrays < 'u' &&
            typeof t.allowEmptyArrays != 'boolean'
          )
            throw new TypeError(
              '`allowEmptyArrays` option can only be `true` or `false`, when provided',
            );
          if (
            typeof t.decodeDotInKeys < 'u' &&
            typeof t.decodeDotInKeys != 'boolean'
          )
            throw new TypeError(
              '`decodeDotInKeys` option can only be `true` or `false`, when provided',
            );
          if (
            t.decoder !== null &&
            typeof t.decoder < 'u' &&
            typeof t.decoder != 'function'
          )
            throw new TypeError('Decoder has to be a function.');
          if (
            typeof t.charset < 'u' &&
            t.charset !== 'utf-8' &&
            t.charset !== 'iso-8859-1'
          )
            throw new TypeError(
              'The charset option must be either utf-8, iso-8859-1, or undefined',
            );
          var r = typeof t.charset > 'u' ? me.charset : t.charset,
            n = typeof t.duplicates > 'u' ? me.duplicates : t.duplicates;
          if (n !== 'combine' && n !== 'first' && n !== 'last')
            throw new TypeError(
              'The duplicates option must be either combine, first, or last',
            );
          var a =
            typeof t.allowDots > 'u'
              ? t.decodeDotInKeys === !0
                ? !0
                : me.allowDots
              : !!t.allowDots;
          return {
            allowDots: a,
            allowEmptyArrays:
              typeof t.allowEmptyArrays == 'boolean'
                ? !!t.allowEmptyArrays
                : me.allowEmptyArrays,
            allowPrototypes:
              typeof t.allowPrototypes == 'boolean'
                ? t.allowPrototypes
                : me.allowPrototypes,
            allowSparse:
              typeof t.allowSparse == 'boolean'
                ? t.allowSparse
                : me.allowSparse,
            arrayLimit:
              typeof t.arrayLimit == 'number' ? t.arrayLimit : me.arrayLimit,
            charset: r,
            charsetSentinel:
              typeof t.charsetSentinel == 'boolean'
                ? t.charsetSentinel
                : me.charsetSentinel,
            comma: typeof t.comma == 'boolean' ? t.comma : me.comma,
            decodeDotInKeys:
              typeof t.decodeDotInKeys == 'boolean'
                ? t.decodeDotInKeys
                : me.decodeDotInKeys,
            decoder: typeof t.decoder == 'function' ? t.decoder : me.decoder,
            delimiter:
              typeof t.delimiter == 'string' || Xt.isRegExp(t.delimiter)
                ? t.delimiter
                : me.delimiter,
            depth:
              typeof t.depth == 'number' || t.depth === !1
                ? +t.depth
                : me.depth,
            duplicates: n,
            ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
            interpretNumericEntities:
              typeof t.interpretNumericEntities == 'boolean'
                ? t.interpretNumericEntities
                : me.interpretNumericEntities,
            parameterLimit:
              typeof t.parameterLimit == 'number'
                ? t.parameterLimit
                : me.parameterLimit,
            parseArrays: t.parseArrays !== !1,
            plainObjects:
              typeof t.plainObjects == 'boolean'
                ? t.plainObjects
                : me.plainObjects,
            strictNullHandling:
              typeof t.strictNullHandling == 'boolean'
                ? t.strictNullHandling
                : me.strictNullHandling,
          };
        };
      Tm.exports = function (e, t) {
        var r = u_(t);
        if (e === '' || e === null || typeof e > 'u')
          return r.plainObjects ? Object.create(null) : {};
        for (
          var n = typeof e == 'string' ? a_(e, r) : e,
            a = r.plainObjects ? Object.create(null) : {},
            o = Object.keys(n),
            i = 0;
          i < o.length;
          ++i
        ) {
          var u = o[i],
            s = i_(u, n[u], r, typeof e == 'string');
          a = Xt.merge(a, s, r);
        }
        return r.allowSparse === !0 ? a : Xt.compact(a);
      };
    });
    var yi = S((JQ, Om) => {
      'use strict';
      l();
      c();
      d();
      var s_ = wm(),
        l_ = _m(),
        c_ = Xn();
      Om.exports = { formats: c_, parse: l_, stringify: s_ };
    });
    var Lm = S((kee, Nm) => {
      l();
      c();
      d();
      (function () {
        'use strict';
        function e(i) {
          if (i == null) return !1;
          switch (i.type) {
            case 'ArrayExpression':
            case 'AssignmentExpression':
            case 'BinaryExpression':
            case 'CallExpression':
            case 'ConditionalExpression':
            case 'FunctionExpression':
            case 'Identifier':
            case 'Literal':
            case 'LogicalExpression':
            case 'MemberExpression':
            case 'NewExpression':
            case 'ObjectExpression':
            case 'SequenceExpression':
            case 'ThisExpression':
            case 'UnaryExpression':
            case 'UpdateExpression':
              return !0;
          }
          return !1;
        }
        function t(i) {
          if (i == null) return !1;
          switch (i.type) {
            case 'DoWhileStatement':
            case 'ForInStatement':
            case 'ForStatement':
            case 'WhileStatement':
              return !0;
          }
          return !1;
        }
        function r(i) {
          if (i == null) return !1;
          switch (i.type) {
            case 'BlockStatement':
            case 'BreakStatement':
            case 'ContinueStatement':
            case 'DebuggerStatement':
            case 'DoWhileStatement':
            case 'EmptyStatement':
            case 'ExpressionStatement':
            case 'ForInStatement':
            case 'ForStatement':
            case 'IfStatement':
            case 'LabeledStatement':
            case 'ReturnStatement':
            case 'SwitchStatement':
            case 'ThrowStatement':
            case 'TryStatement':
            case 'VariableDeclaration':
            case 'WhileStatement':
            case 'WithStatement':
              return !0;
          }
          return !1;
        }
        function n(i) {
          return r(i) || (i != null && i.type === 'FunctionDeclaration');
        }
        function a(i) {
          switch (i.type) {
            case 'IfStatement':
              return i.alternate != null ? i.alternate : i.consequent;
            case 'LabeledStatement':
            case 'ForStatement':
            case 'ForInStatement':
            case 'WhileStatement':
            case 'WithStatement':
              return i.body;
          }
          return null;
        }
        function o(i) {
          var u;
          if (i.type !== 'IfStatement' || i.alternate == null) return !1;
          u = i.consequent;
          do {
            if (u.type === 'IfStatement' && u.alternate == null) return !0;
            u = a(u);
          } while (u);
          return !1;
        }
        Nm.exports = {
          isExpression: e,
          isStatement: r,
          isIterationStatement: t,
          isSourceElement: n,
          isProblematicIfStatement: o,
          trailingStatement: a,
        };
      })();
    });
    var bi = S((jee, qm) => {
      l();
      c();
      d();
      (function () {
        'use strict';
        var e, t, r, n, a, o;
        (t = {
          NonAsciiIdentifierStart:
            /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
          NonAsciiIdentifierPart:
            /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        }),
          (e = {
            NonAsciiIdentifierStart:
              /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
            NonAsciiIdentifierPart:
              /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
          });
        function i(x) {
          return 48 <= x && x <= 57;
        }
        function u(x) {
          return (
            (48 <= x && x <= 57) ||
            (97 <= x && x <= 102) ||
            (65 <= x && x <= 70)
          );
        }
        function s(x) {
          return x >= 48 && x <= 55;
        }
        r = [
          5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201,
          8202, 8239, 8287, 12288, 65279,
        ];
        function p(x) {
          return (
            x === 32 ||
            x === 9 ||
            x === 11 ||
            x === 12 ||
            x === 160 ||
            (x >= 5760 && r.indexOf(x) >= 0)
          );
        }
        function y(x) {
          return x === 10 || x === 13 || x === 8232 || x === 8233;
        }
        function E(x) {
          if (x <= 65535) return String.fromCharCode(x);
          var w = String.fromCharCode(Math.floor((x - 65536) / 1024) + 55296),
            R = String.fromCharCode(((x - 65536) % 1024) + 56320);
          return w + R;
        }
        for (n = new Array(128), o = 0; o < 128; ++o)
          n[o] =
            (o >= 97 && o <= 122) ||
            (o >= 65 && o <= 90) ||
            o === 36 ||
            o === 95;
        for (a = new Array(128), o = 0; o < 128; ++o)
          a[o] =
            (o >= 97 && o <= 122) ||
            (o >= 65 && o <= 90) ||
            (o >= 48 && o <= 57) ||
            o === 36 ||
            o === 95;
        function m(x) {
          return x < 128 ? n[x] : t.NonAsciiIdentifierStart.test(E(x));
        }
        function g(x) {
          return x < 128 ? a[x] : t.NonAsciiIdentifierPart.test(E(x));
        }
        function A(x) {
          return x < 128 ? n[x] : e.NonAsciiIdentifierStart.test(E(x));
        }
        function b(x) {
          return x < 128 ? a[x] : e.NonAsciiIdentifierPart.test(E(x));
        }
        qm.exports = {
          isDecimalDigit: i,
          isHexDigit: u,
          isOctalDigit: s,
          isWhiteSpace: p,
          isLineTerminator: y,
          isIdentifierStartES5: m,
          isIdentifierPartES5: g,
          isIdentifierStartES6: A,
          isIdentifierPartES6: b,
        };
      })();
    });
    var Mm = S((zee, jm) => {
      l();
      c();
      d();
      (function () {
        'use strict';
        var e = bi();
        function t(m) {
          switch (m) {
            case 'implements':
            case 'interface':
            case 'package':
            case 'private':
            case 'protected':
            case 'public':
            case 'static':
            case 'let':
              return !0;
            default:
              return !1;
          }
        }
        function r(m, g) {
          return !g && m === 'yield' ? !1 : n(m, g);
        }
        function n(m, g) {
          if (g && t(m)) return !0;
          switch (m.length) {
            case 2:
              return m === 'if' || m === 'in' || m === 'do';
            case 3:
              return m === 'var' || m === 'for' || m === 'new' || m === 'try';
            case 4:
              return (
                m === 'this' ||
                m === 'else' ||
                m === 'case' ||
                m === 'void' ||
                m === 'with' ||
                m === 'enum'
              );
            case 5:
              return (
                m === 'while' ||
                m === 'break' ||
                m === 'catch' ||
                m === 'throw' ||
                m === 'const' ||
                m === 'yield' ||
                m === 'class' ||
                m === 'super'
              );
            case 6:
              return (
                m === 'return' ||
                m === 'typeof' ||
                m === 'delete' ||
                m === 'switch' ||
                m === 'export' ||
                m === 'import'
              );
            case 7:
              return m === 'default' || m === 'finally' || m === 'extends';
            case 8:
              return m === 'function' || m === 'continue' || m === 'debugger';
            case 10:
              return m === 'instanceof';
            default:
              return !1;
          }
        }
        function a(m, g) {
          return m === 'null' || m === 'true' || m === 'false' || r(m, g);
        }
        function o(m, g) {
          return m === 'null' || m === 'true' || m === 'false' || n(m, g);
        }
        function i(m) {
          return m === 'eval' || m === 'arguments';
        }
        function u(m) {
          var g, A, b;
          if (
            m.length === 0 ||
            ((b = m.charCodeAt(0)), !e.isIdentifierStartES5(b))
          )
            return !1;
          for (g = 1, A = m.length; g < A; ++g)
            if (((b = m.charCodeAt(g)), !e.isIdentifierPartES5(b))) return !1;
          return !0;
        }
        function s(m, g) {
          return (m - 55296) * 1024 + (g - 56320) + 65536;
        }
        function p(m) {
          var g, A, b, x, w;
          if (m.length === 0) return !1;
          for (w = e.isIdentifierStartES6, g = 0, A = m.length; g < A; ++g) {
            if (((b = m.charCodeAt(g)), 55296 <= b && b <= 56319)) {
              if (
                (++g,
                g >= A || ((x = m.charCodeAt(g)), !(56320 <= x && x <= 57343)))
              )
                return !1;
              b = s(b, x);
            }
            if (!w(b)) return !1;
            w = e.isIdentifierPartES6;
          }
          return !0;
        }
        function y(m, g) {
          return u(m) && !a(m, g);
        }
        function E(m, g) {
          return p(m) && !o(m, g);
        }
        jm.exports = {
          isKeywordES5: r,
          isKeywordES6: n,
          isReservedWordES5: a,
          isReservedWordES6: o,
          isRestrictedWord: i,
          isIdentifierNameES5: u,
          isIdentifierNameES6: p,
          isIdentifierES5: y,
          isIdentifierES6: E,
        };
      })();
    });
    var Ei = S((Zn) => {
      l();
      c();
      d();
      (function () {
        'use strict';
        (Zn.ast = Lm()), (Zn.code = bi()), (Zn.keyword = Mm());
      })();
    });
    var $m = S((Xee, T_) => {
      T_.exports = {
        name: 'doctrine',
        description: 'JSDoc parser',
        homepage: 'https://github.com/eslint/doctrine',
        main: 'lib/doctrine.js',
        version: '3.0.0',
        engines: { node: '>=6.0.0' },
        directories: { lib: './lib' },
        files: ['lib'],
        maintainers: [
          {
            name: 'Nicholas C. Zakas',
            email: 'nicholas+npm@nczconsulting.com',
            web: 'https://www.nczonline.net',
          },
          {
            name: 'Yusuke Suzuki',
            email: 'utatane.tea@gmail.com',
            web: 'https://github.com/Constellation',
          },
        ],
        repository: 'eslint/doctrine',
        devDependencies: {
          coveralls: '^3.0.1',
          dateformat: '^1.0.11',
          eslint: '^1.10.3',
          'eslint-release': '^1.0.0',
          linefix: '^0.1.1',
          mocha: '^3.4.2',
          'npm-license': '^0.3.1',
          nyc: '^10.3.2',
          semver: '^5.0.3',
          shelljs: '^0.5.3',
          'shelljs-nodecli': '^0.1.1',
          should: '^5.0.1',
        },
        license: 'Apache-2.0',
        scripts: {
          pretest: 'npm run lint',
          test: 'nyc mocha',
          coveralls: 'nyc report --reporter=text-lcov | coveralls',
          lint: 'eslint lib/',
          'generate-release': 'eslint-generate-release',
          'generate-alpharelease': 'eslint-generate-prerelease alpha',
          'generate-betarelease': 'eslint-generate-prerelease beta',
          'generate-rcrelease': 'eslint-generate-prerelease rc',
          'publish-release': 'eslint-publish-release',
        },
        dependencies: { esutils: '^2.0.2' },
      };
    });
    var zm = S((Qee, Um) => {
      l();
      c();
      d();
      function __(e, t) {
        if (!e) throw new Error(t || 'unknown assertion error');
      }
      Um.exports = __;
    });
    var Ai = S((Nr) => {
      l();
      c();
      d();
      (function () {
        'use strict';
        var e;
        (e = $m().version), (Nr.VERSION = e);
        function t(n) {
          (this.name = 'DoctrineError'), (this.message = n);
        }
        (t.prototype = (function () {
          var n = function () {};
          return (n.prototype = Error.prototype), new n();
        })()),
          (t.prototype.constructor = t),
          (Nr.DoctrineError = t);
        function r(n) {
          throw new t(n);
        }
        (Nr.throwError = r), (Nr.assert = zm());
      })();
    });
    var Hm = S((Lr) => {
      l();
      c();
      d();
      (function () {
        'use strict';
        var e, t, r, n, a, o, i, u, s, p, y, E;
        (s = Ei()),
          (p = Ai()),
          (e = {
            NullableLiteral: 'NullableLiteral',
            AllLiteral: 'AllLiteral',
            NullLiteral: 'NullLiteral',
            UndefinedLiteral: 'UndefinedLiteral',
            VoidLiteral: 'VoidLiteral',
            UnionType: 'UnionType',
            ArrayType: 'ArrayType',
            RecordType: 'RecordType',
            FieldType: 'FieldType',
            FunctionType: 'FunctionType',
            ParameterType: 'ParameterType',
            RestType: 'RestType',
            NonNullableType: 'NonNullableType',
            OptionalType: 'OptionalType',
            NullableType: 'NullableType',
            NameExpression: 'NameExpression',
            TypeApplication: 'TypeApplication',
            StringLiteralType: 'StringLiteralType',
            NumericLiteralType: 'NumericLiteralType',
            BooleanLiteralType: 'BooleanLiteralType',
          }),
          (t = {
            ILLEGAL: 0,
            DOT_LT: 1,
            REST: 2,
            LT: 3,
            GT: 4,
            LPAREN: 5,
            RPAREN: 6,
            LBRACE: 7,
            RBRACE: 8,
            LBRACK: 9,
            RBRACK: 10,
            COMMA: 11,
            COLON: 12,
            STAR: 13,
            PIPE: 14,
            QUESTION: 15,
            BANG: 16,
            EQUAL: 17,
            NAME: 18,
            STRING: 19,
            NUMBER: 20,
            EOF: 21,
          });
        function m(B) {
          return (
            '><(){}[],:*|?!='.indexOf(String.fromCharCode(B)) === -1 &&
            !s.code.isWhiteSpace(B) &&
            !s.code.isLineTerminator(B)
          );
        }
        function g(B, P, N, _) {
          (this._previous = B),
            (this._index = P),
            (this._token = N),
            (this._value = _);
        }
        (g.prototype.restore = function () {
          (o = this._previous),
            (a = this._index),
            (i = this._token),
            (u = this._value);
        }),
          (g.save = function () {
            return new g(o, a, i, u);
          });
        function A(B, P) {
          return E && (B.range = [P[0] + y, P[1] + y]), B;
        }
        function b() {
          var B = r.charAt(a);
          return (a += 1), B;
        }
        function x(B) {
          var P,
            N,
            _,
            $ = 0;
          for (N = B === 'u' ? 4 : 2, P = 0; P < N; ++P)
            if (a < n && s.code.isHexDigit(r.charCodeAt(a)))
              (_ = b()),
                ($ = $ * 16 + '0123456789abcdef'.indexOf(_.toLowerCase()));
            else return '';
          return String.fromCharCode($);
        }
        function w() {
          var B = '',
            P,
            N,
            _,
            $,
            H;
          for (P = r.charAt(a), ++a; a < n; )
            if (((N = b()), N === P)) {
              P = '';
              break;
            } else if (N === '\\')
              if (((N = b()), s.code.isLineTerminator(N.charCodeAt(0))))
                N === '\r' && r.charCodeAt(a) === 10 && ++a;
              else
                switch (N) {
                  case 'n':
                    B += `
`;
                    break;
                  case 'r':
                    B += '\r';
                    break;
                  case 't':
                    B += '	';
                    break;
                  case 'u':
                  case 'x':
                    (H = a), ($ = x(N)), $ ? (B += $) : ((a = H), (B += N));
                    break;
                  case 'b':
                    B += '\b';
                    break;
                  case 'f':
                    B += '\f';
                    break;
                  case 'v':
                    B += '\v';
                    break;
                  default:
                    s.code.isOctalDigit(N.charCodeAt(0))
                      ? ((_ = '01234567'.indexOf(N)),
                        a < n &&
                          s.code.isOctalDigit(r.charCodeAt(a)) &&
                          ((_ = _ * 8 + '01234567'.indexOf(b())),
                          '0123'.indexOf(N) >= 0 &&
                            a < n &&
                            s.code.isOctalDigit(r.charCodeAt(a)) &&
                            (_ = _ * 8 + '01234567'.indexOf(b()))),
                        (B += String.fromCharCode(_)))
                      : (B += N);
                    break;
                }
            else {
              if (s.code.isLineTerminator(N.charCodeAt(0))) break;
              B += N;
            }
          return (
            P !== '' && p.throwError('unexpected quote'), (u = B), t.STRING
          );
        }
        function R() {
          var B, P;
          if (((B = ''), (P = r.charCodeAt(a)), P !== 46)) {
            if (((B = b()), (P = r.charCodeAt(a)), B === '0')) {
              if (P === 120 || P === 88) {
                for (
                  B += b();
                  a < n && ((P = r.charCodeAt(a)), !!s.code.isHexDigit(P));

                )
                  B += b();
                return (
                  B.length <= 2 && p.throwError('unexpected token'),
                  a < n &&
                    ((P = r.charCodeAt(a)),
                    s.code.isIdentifierStartES5(P) &&
                      p.throwError('unexpected token')),
                  (u = parseInt(B, 16)),
                  t.NUMBER
                );
              }
              if (s.code.isOctalDigit(P)) {
                for (
                  B += b();
                  a < n && ((P = r.charCodeAt(a)), !!s.code.isOctalDigit(P));

                )
                  B += b();
                return (
                  a < n &&
                    ((P = r.charCodeAt(a)),
                    (s.code.isIdentifierStartES5(P) ||
                      s.code.isDecimalDigit(P)) &&
                      p.throwError('unexpected token')),
                  (u = parseInt(B, 8)),
                  t.NUMBER
                );
              }
              s.code.isDecimalDigit(P) && p.throwError('unexpected token');
            }
            for (
              ;
              a < n && ((P = r.charCodeAt(a)), !!s.code.isDecimalDigit(P));

            )
              B += b();
          }
          if (P === 46)
            for (
              B += b();
              a < n && ((P = r.charCodeAt(a)), !!s.code.isDecimalDigit(P));

            )
              B += b();
          if (P === 101 || P === 69)
            if (
              ((B += b()),
              (P = r.charCodeAt(a)),
              (P === 43 || P === 45) && (B += b()),
              (P = r.charCodeAt(a)),
              s.code.isDecimalDigit(P))
            )
              for (
                B += b();
                a < n && ((P = r.charCodeAt(a)), !!s.code.isDecimalDigit(P));

              )
                B += b();
            else p.throwError('unexpected token');
          return (
            a < n &&
              ((P = r.charCodeAt(a)),
              s.code.isIdentifierStartES5(P) &&
                p.throwError('unexpected token')),
            (u = parseFloat(B)),
            t.NUMBER
          );
        }
        function I() {
          var B, P;
          for (u = b(); a < n && m(r.charCodeAt(a)); ) {
            if (((B = r.charCodeAt(a)), B === 46)) {
              if (a + 1 >= n) return t.ILLEGAL;
              if (((P = r.charCodeAt(a + 1)), P === 60)) break;
            }
            u += b();
          }
          return t.NAME;
        }
        function M() {
          var B;
          for (o = a; a < n && s.code.isWhiteSpace(r.charCodeAt(a)); ) b();
          if (a >= n) return (i = t.EOF), i;
          switch (((B = r.charCodeAt(a)), B)) {
            case 39:
            case 34:
              return (i = w()), i;
            case 58:
              return b(), (i = t.COLON), i;
            case 44:
              return b(), (i = t.COMMA), i;
            case 40:
              return b(), (i = t.LPAREN), i;
            case 41:
              return b(), (i = t.RPAREN), i;
            case 91:
              return b(), (i = t.LBRACK), i;
            case 93:
              return b(), (i = t.RBRACK), i;
            case 123:
              return b(), (i = t.LBRACE), i;
            case 125:
              return b(), (i = t.RBRACE), i;
            case 46:
              if (a + 1 < n) {
                if (((B = r.charCodeAt(a + 1)), B === 60))
                  return b(), b(), (i = t.DOT_LT), i;
                if (B === 46 && a + 2 < n && r.charCodeAt(a + 2) === 46)
                  return b(), b(), b(), (i = t.REST), i;
                if (s.code.isDecimalDigit(B)) return (i = R()), i;
              }
              return (i = t.ILLEGAL), i;
            case 60:
              return b(), (i = t.LT), i;
            case 62:
              return b(), (i = t.GT), i;
            case 42:
              return b(), (i = t.STAR), i;
            case 124:
              return b(), (i = t.PIPE), i;
            case 63:
              return b(), (i = t.QUESTION), i;
            case 33:
              return b(), (i = t.BANG), i;
            case 61:
              return b(), (i = t.EQUAL), i;
            case 45:
              return (i = R()), i;
            default:
              return s.code.isDecimalDigit(B)
                ? ((i = R()), i)
                : (p.assert(m(B)), (i = I()), i);
          }
        }
        function F(B, P) {
          p.assert(i === B, P || 'consumed token not matched'), M();
        }
        function L(B, P) {
          i !== B && p.throwError(P || 'unexpected token'), M();
        }
        function k() {
          var B,
            P = a - 1;
          if (
            (F(t.LPAREN, 'UnionType should start with ('),
            (B = []),
            i !== t.RPAREN)
          )
            for (; B.push(V()), i !== t.RPAREN; ) L(t.PIPE);
          return (
            F(t.RPAREN, 'UnionType should end with )'),
            A({ type: e.UnionType, elements: B }, [P, o])
          );
        }
        function z() {
          var B,
            P = a - 1,
            N;
          for (
            F(t.LBRACK, 'ArrayType should start with ['), B = [];
            i !== t.RBRACK;

          ) {
            if (i === t.REST) {
              (N = a - 3),
                F(t.REST),
                B.push(A({ type: e.RestType, expression: V() }, [N, o]));
              break;
            } else B.push(V());
            i !== t.RBRACK && L(t.COMMA);
          }
          return L(t.RBRACK), A({ type: e.ArrayType, elements: B }, [P, o]);
        }
        function K() {
          var B = u;
          if (i === t.NAME || i === t.STRING) return M(), B;
          if (i === t.NUMBER) return F(t.NUMBER), String(B);
          p.throwError('unexpected token');
        }
        function U() {
          var B,
            P = o;
          return (
            (B = K()),
            i === t.COLON
              ? (F(t.COLON),
                A({ type: e.FieldType, key: B, value: V() }, [P, o]))
              : A({ type: e.FieldType, key: B, value: null }, [P, o])
          );
        }
        function se() {
          var B,
            P = a - 1,
            N;
          if (
            (F(t.LBRACE, 'RecordType should start with {'),
            (B = []),
            i === t.COMMA)
          )
            F(t.COMMA);
          else
            for (; i !== t.RBRACE; ) B.push(U()), i !== t.RBRACE && L(t.COMMA);
          return (
            (N = a), L(t.RBRACE), A({ type: e.RecordType, fields: B }, [P, N])
          );
        }
        function ee() {
          var B = u,
            P = a - B.length;
          return (
            L(t.NAME),
            i === t.COLON &&
              (B === 'module' || B === 'external' || B === 'event') &&
              (F(t.COLON), (B += ':' + u), L(t.NAME)),
            A({ type: e.NameExpression, name: B }, [P, o])
          );
        }
        function J() {
          var B = [];
          for (B.push(Q()); i === t.COMMA; ) F(t.COMMA), B.push(Q());
          return B;
        }
        function O() {
          var B,
            P,
            N = a - u.length;
          return (
            (B = ee()),
            i === t.DOT_LT || i === t.LT
              ? (M(),
                (P = J()),
                L(t.GT),
                A({ type: e.TypeApplication, expression: B, applications: P }, [
                  N,
                  o,
                ]))
              : B
          );
        }
        function T() {
          return (
            F(t.COLON, 'ResultType should start with :'),
            i === t.NAME && u === 'void'
              ? (F(t.NAME), { type: e.VoidLiteral })
              : V()
          );
        }
        function j() {
          for (
            var B = [], P = !1, N, _ = !1, $, H = a - 3, de;
            i !== t.RPAREN;

          )
            i === t.REST && (F(t.REST), (_ = !0)),
              ($ = o),
              (N = V()),
              N.type === e.NameExpression &&
                i === t.COLON &&
                ((de = o - N.name.length),
                F(t.COLON),
                (N = A(
                  { type: e.ParameterType, name: N.name, expression: V() },
                  [de, o],
                ))),
              i === t.EQUAL
                ? (F(t.EQUAL),
                  (N = A({ type: e.OptionalType, expression: N }, [$, o])),
                  (P = !0))
                : P && p.throwError('unexpected token'),
              _ && (N = A({ type: e.RestType, expression: N }, [H, o])),
              B.push(N),
              i !== t.RPAREN && L(t.COMMA);
          return B;
        }
        function G() {
          var B,
            P,
            N,
            _,
            $,
            H = a - u.length;
          return (
            p.assert(
              i === t.NAME && u === 'function',
              "FunctionType should start with 'function'",
            ),
            F(t.NAME),
            L(t.LPAREN),
            (B = !1),
            (N = []),
            (P = null),
            i !== t.RPAREN &&
              (i === t.NAME && (u === 'this' || u === 'new')
                ? ((B = u === 'new'),
                  F(t.NAME),
                  L(t.COLON),
                  (P = O()),
                  i === t.COMMA && (F(t.COMMA), (N = j())))
                : (N = j())),
            L(t.RPAREN),
            (_ = null),
            i === t.COLON && (_ = T()),
            ($ = A({ type: e.FunctionType, params: N, result: _ }, [H, o])),
            P && (($.this = P), B && ($.new = !0)),
            $
          );
        }
        function Y() {
          var B, P;
          switch (i) {
            case t.STAR:
              return F(t.STAR), A({ type: e.AllLiteral }, [o - 1, o]);
            case t.LPAREN:
              return k();
            case t.LBRACK:
              return z();
            case t.LBRACE:
              return se();
            case t.NAME:
              if (((P = a - u.length), u === 'null'))
                return F(t.NAME), A({ type: e.NullLiteral }, [P, o]);
              if (u === 'undefined')
                return F(t.NAME), A({ type: e.UndefinedLiteral }, [P, o]);
              if (u === 'true' || u === 'false')
                return (
                  F(t.NAME),
                  A({ type: e.BooleanLiteralType, value: u === 'true' }, [P, o])
                );
              if (((B = g.save()), u === 'function'))
                try {
                  return G();
                } catch {
                  B.restore();
                }
              return O();
            case t.STRING:
              return (
                M(),
                A({ type: e.StringLiteralType, value: u }, [
                  o - u.length - 2,
                  o,
                ])
              );
            case t.NUMBER:
              return (
                M(),
                A({ type: e.NumericLiteralType, value: u }, [
                  o - String(u).length,
                  o,
                ])
              );
            default:
              p.throwError('unexpected token');
          }
        }
        function V() {
          var B, P;
          return i === t.QUESTION
            ? ((P = a - 1),
              F(t.QUESTION),
              i === t.COMMA ||
              i === t.EQUAL ||
              i === t.RBRACE ||
              i === t.RPAREN ||
              i === t.PIPE ||
              i === t.EOF ||
              i === t.RBRACK ||
              i === t.GT
                ? A({ type: e.NullableLiteral }, [P, o])
                : A({ type: e.NullableType, expression: Y(), prefix: !0 }, [
                    P,
                    o,
                  ]))
            : i === t.BANG
              ? ((P = a - 1),
                F(t.BANG),
                A({ type: e.NonNullableType, expression: Y(), prefix: !0 }, [
                  P,
                  o,
                ]))
              : ((P = o),
                (B = Y()),
                i === t.BANG
                  ? (F(t.BANG),
                    A({ type: e.NonNullableType, expression: B, prefix: !1 }, [
                      P,
                      o,
                    ]))
                  : i === t.QUESTION
                    ? (F(t.QUESTION),
                      A({ type: e.NullableType, expression: B, prefix: !1 }, [
                        P,
                        o,
                      ]))
                    : i === t.LBRACK
                      ? (F(t.LBRACK),
                        L(
                          t.RBRACK,
                          'expected an array-style type declaration (' +
                            u +
                            '[])',
                        ),
                        A(
                          {
                            type: e.TypeApplication,
                            expression: A(
                              { type: e.NameExpression, name: 'Array' },
                              [P, o],
                            ),
                            applications: [B],
                          },
                          [P, o],
                        ))
                      : B);
        }
        function Q() {
          var B, P;
          if (((B = V()), i !== t.PIPE)) return B;
          for (P = [B], F(t.PIPE); P.push(V()), i === t.PIPE; ) F(t.PIPE);
          return A({ type: e.UnionType, elements: P }, [0, a]);
        }
        function ie() {
          var B;
          return i === t.REST
            ? (F(t.REST), A({ type: e.RestType, expression: Q() }, [0, a]))
            : ((B = Q()),
              i === t.EQUAL
                ? (F(t.EQUAL),
                  A({ type: e.OptionalType, expression: B }, [0, a]))
                : B);
        }
        function Re(B, P) {
          var N;
          return (
            (r = B),
            (n = r.length),
            (a = 0),
            (o = 0),
            (E = P && P.range),
            (y = (P && P.startIndex) || 0),
            M(),
            (N = Q()),
            P && P.midstream
              ? { expression: N, index: o }
              : (i !== t.EOF && p.throwError('not reach to EOF'), N)
          );
        }
        function Pe(B, P) {
          var N;
          return (
            (r = B),
            (n = r.length),
            (a = 0),
            (o = 0),
            (E = P && P.range),
            (y = (P && P.startIndex) || 0),
            M(),
            (N = ie()),
            P && P.midstream
              ? { expression: N, index: o }
              : (i !== t.EOF && p.throwError('not reach to EOF'), N)
          );
        }
        function X(B, P, N) {
          var _, $, H;
          switch (B.type) {
            case e.NullableLiteral:
              _ = '?';
              break;
            case e.AllLiteral:
              _ = '*';
              break;
            case e.NullLiteral:
              _ = 'null';
              break;
            case e.UndefinedLiteral:
              _ = 'undefined';
              break;
            case e.VoidLiteral:
              _ = 'void';
              break;
            case e.UnionType:
              for (
                N ? (_ = '') : (_ = '('), $ = 0, H = B.elements.length;
                $ < H;
                ++$
              )
                (_ += X(B.elements[$], P)),
                  $ + 1 !== H && (_ += P ? '|' : ' | ');
              N || (_ += ')');
              break;
            case e.ArrayType:
              for (_ = '[', $ = 0, H = B.elements.length; $ < H; ++$)
                (_ += X(B.elements[$], P)),
                  $ + 1 !== H && (_ += P ? ',' : ', ');
              _ += ']';
              break;
            case e.RecordType:
              for (_ = '{', $ = 0, H = B.fields.length; $ < H; ++$)
                (_ += X(B.fields[$], P)), $ + 1 !== H && (_ += P ? ',' : ', ');
              _ += '}';
              break;
            case e.FieldType:
              B.value
                ? (_ = B.key + (P ? ':' : ': ') + X(B.value, P))
                : (_ = B.key);
              break;
            case e.FunctionType:
              for (
                _ = P ? 'function(' : 'function (',
                  B.this &&
                    (B.new
                      ? (_ += P ? 'new:' : 'new: ')
                      : (_ += P ? 'this:' : 'this: '),
                    (_ += X(B.this, P)),
                    B.params.length !== 0 && (_ += P ? ',' : ', ')),
                  $ = 0,
                  H = B.params.length;
                $ < H;
                ++$
              )
                (_ += X(B.params[$], P)), $ + 1 !== H && (_ += P ? ',' : ', ');
              (_ += ')'), B.result && (_ += (P ? ':' : ': ') + X(B.result, P));
              break;
            case e.ParameterType:
              _ = B.name + (P ? ':' : ': ') + X(B.expression, P);
              break;
            case e.RestType:
              (_ = '...'), B.expression && (_ += X(B.expression, P));
              break;
            case e.NonNullableType:
              B.prefix
                ? (_ = '!' + X(B.expression, P))
                : (_ = X(B.expression, P) + '!');
              break;
            case e.OptionalType:
              _ = X(B.expression, P) + '=';
              break;
            case e.NullableType:
              B.prefix
                ? (_ = '?' + X(B.expression, P))
                : (_ = X(B.expression, P) + '?');
              break;
            case e.NameExpression:
              _ = B.name;
              break;
            case e.TypeApplication:
              for (
                _ = X(B.expression, P) + '.<', $ = 0, H = B.applications.length;
                $ < H;
                ++$
              )
                (_ += X(B.applications[$], P)),
                  $ + 1 !== H && (_ += P ? ',' : ', ');
              _ += '>';
              break;
            case e.StringLiteralType:
              _ = '"' + B.value + '"';
              break;
            case e.NumericLiteralType:
              _ = String(B.value);
              break;
            case e.BooleanLiteralType:
              _ = String(B.value);
              break;
            default:
              p.throwError('Unknown type ' + B.type);
          }
          return _;
        }
        function qe(B, P) {
          return P == null && (P = {}), X(B, P.compact, P.topLevel);
        }
        (Lr.parseType = Re),
          (Lr.parseParamType = Pe),
          (Lr.stringify = qe),
          (Lr.Syntax = e);
      })();
    });
    var Gm = S((Ke) => {
      l();
      c();
      d();
      (function () {
        'use strict';
        var e, t, r, n, a;
        (n = Ei()), (e = Hm()), (t = Ai());
        function o(F, L, k) {
          return F.slice(L, k);
        }
        a = (function () {
          var F = Object.prototype.hasOwnProperty;
          return function (k, z) {
            return F.call(k, z);
          };
        })();
        function i(F) {
          var L = {},
            k;
          for (k in F) F.hasOwnProperty(k) && (L[k] = F[k]);
          return L;
        }
        function u(F) {
          return (
            (F >= 97 && F <= 122) ||
            (F >= 65 && F <= 90) ||
            (F >= 48 && F <= 57)
          );
        }
        function s(F) {
          return F === 'param' || F === 'argument' || F === 'arg';
        }
        function p(F) {
          return F === 'return' || F === 'returns';
        }
        function y(F) {
          return F === 'property' || F === 'prop';
        }
        function E(F) {
          return (
            s(F) ||
            y(F) ||
            F === 'alias' ||
            F === 'this' ||
            F === 'mixes' ||
            F === 'requires'
          );
        }
        function m(F) {
          return E(F) || F === 'const' || F === 'constant';
        }
        function g(F) {
          return y(F) || s(F);
        }
        function A(F) {
          return y(F) || s(F);
        }
        function b(F) {
          return (
            s(F) ||
            p(F) ||
            F === 'define' ||
            F === 'enum' ||
            F === 'implements' ||
            F === 'this' ||
            F === 'type' ||
            F === 'typedef' ||
            y(F)
          );
        }
        function x(F) {
          return (
            b(F) ||
            F === 'throws' ||
            F === 'const' ||
            F === 'constant' ||
            F === 'namespace' ||
            F === 'member' ||
            F === 'var' ||
            F === 'module' ||
            F === 'constructor' ||
            F === 'class' ||
            F === 'extends' ||
            F === 'augments' ||
            F === 'public' ||
            F === 'private' ||
            F === 'protected'
          );
        }
        var w =
            '[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]',
          R =
            '(' +
            w +
            '*(?:\\*' +
            w +
            `?)?)(.+|[\r
\u2028\u2029])`;
        function I(F) {
          return F.replace(/^\/\*\*?/, '')
            .replace(/\*\/$/, '')
            .replace(new RegExp(R, 'g'), '$2')
            .replace(/\s*$/, '');
        }
        function M(F, L) {
          for (
            var k = F.replace(/^\/\*\*?/, ''), z = 0, K = new RegExp(R, 'g'), U;
            (U = K.exec(k));

          )
            if (((z += U[1].length), U.index + U[0].length > L + z))
              return L + z + F.length - k.length;
          return F.replace(/\*\/$/, '').replace(/\s*$/, '').length;
        }
        (function (F) {
          var L, k, z, K, U, se, ee, J, O;
          function T() {
            var N = U.charCodeAt(k);
            return (
              (k += 1),
              n.code.isLineTerminator(N) &&
                !(N === 13 && U.charCodeAt(k) === 10) &&
                (z += 1),
              String.fromCharCode(N)
            );
          }
          function j() {
            var N = '';
            for (T(); k < K && u(U.charCodeAt(k)); ) N += T();
            return N;
          }
          function G() {
            var N,
              _,
              $ = k;
            for (_ = !1; $ < K; ) {
              if (
                ((N = U.charCodeAt($)),
                n.code.isLineTerminator(N) &&
                  !(N === 13 && U.charCodeAt($ + 1) === 10))
              )
                _ = !0;
              else if (_) {
                if (N === 64) break;
                n.code.isWhiteSpace(N) || (_ = !1);
              }
              $ += 1;
            }
            return $;
          }
          function Y(N, _, $) {
            for (var H, de, ne, ae, Ae = !1; k < _; )
              if (((H = U.charCodeAt(k)), n.code.isWhiteSpace(H))) T();
              else if (H === 123) {
                T();
                break;
              } else {
                Ae = !0;
                break;
              }
            if (Ae) return null;
            for (de = 1, ne = ''; k < _; )
              if (((H = U.charCodeAt(k)), n.code.isLineTerminator(H))) T();
              else {
                if (H === 125) {
                  if (((de -= 1), de === 0)) {
                    T();
                    break;
                  }
                } else H === 123 && (de += 1);
                ne === '' && (ae = k), (ne += T());
              }
            return de !== 0
              ? t.throwError('Braces are not balanced')
              : A(N)
                ? e.parseParamType(ne, { startIndex: Pe(ae), range: $ })
                : e.parseType(ne, { startIndex: Pe(ae), range: $ });
          }
          function V(N) {
            var _;
            if (
              !n.code.isIdentifierStartES5(U.charCodeAt(k)) &&
              !U[k].match(/[0-9]/)
            )
              return null;
            for (
              _ = T();
              k < N && n.code.isIdentifierPartES5(U.charCodeAt(k));

            )
              _ += T();
            return _;
          }
          function Q(N) {
            for (
              ;
              k < N &&
              (n.code.isWhiteSpace(U.charCodeAt(k)) ||
                n.code.isLineTerminator(U.charCodeAt(k)));

            )
              T();
          }
          function ie(N, _, $) {
            var H = '',
              de,
              ne;
            if ((Q(N), k >= N)) return null;
            if (U.charCodeAt(k) === 91)
              if (_) (de = !0), (H = T());
              else return null;
            if (((H += V(N)), $))
              for (
                U.charCodeAt(k) === 58 &&
                  (H === 'module' || H === 'external' || H === 'event') &&
                  ((H += T()), (H += V(N))),
                  U.charCodeAt(k) === 91 &&
                    U.charCodeAt(k + 1) === 93 &&
                    ((H += T()), (H += T()));
                U.charCodeAt(k) === 46 ||
                U.charCodeAt(k) === 47 ||
                U.charCodeAt(k) === 35 ||
                U.charCodeAt(k) === 45 ||
                U.charCodeAt(k) === 126;

              )
                (H += T()), (H += V(N));
            if (de) {
              if ((Q(N), U.charCodeAt(k) === 61)) {
                (H += T()), Q(N);
                for (var ae, Ae = 1; k < N; ) {
                  if (
                    ((ae = U.charCodeAt(k)),
                    n.code.isWhiteSpace(ae) &&
                      (ne || (Q(N), (ae = U.charCodeAt(k)))),
                    ae === 39 && (ne ? ne === "'" && (ne = '') : (ne = "'")),
                    ae === 34 && (ne ? ne === '"' && (ne = '') : (ne = '"')),
                    ae === 91)
                  )
                    Ae++;
                  else if (ae === 93 && --Ae === 0) break;
                  H += T();
                }
              }
              if ((Q(N), k >= N || U.charCodeAt(k) !== 93)) return null;
              H += T();
            }
            return H;
          }
          function Re() {
            for (; k < K && U.charCodeAt(k) !== 64; ) T();
            return k >= K ? !1 : (t.assert(U.charCodeAt(k) === 64), !0);
          }
          function Pe(N) {
            return U === se ? N : M(se, N);
          }
          function X(N, _) {
            (this._options = N),
              (this._title = _.toLowerCase()),
              (this._tag = { title: _, description: null }),
              this._options.lineNumbers && (this._tag.lineNumber = z),
              (this._first = k - _.length - 1),
              (this._last = 0),
              (this._extra = {});
          }
          (X.prototype.addError = function (_) {
            var $ = Array.prototype.slice.call(arguments, 1),
              H = _.replace(/%(\d)/g, function (de, ne) {
                return (
                  t.assert(ne < $.length, 'Message reference must be in range'),
                  $[ne]
                );
              });
            return (
              this._tag.errors || (this._tag.errors = []),
              O && t.throwError(H),
              this._tag.errors.push(H),
              ee
            );
          }),
            (X.prototype.parseType = function () {
              if (b(this._title))
                try {
                  if (
                    ((this._tag.type = Y(
                      this._title,
                      this._last,
                      this._options.range,
                    )),
                    !this._tag.type &&
                      !s(this._title) &&
                      !p(this._title) &&
                      !this.addError('Missing or invalid tag type'))
                  )
                    return !1;
                } catch (N) {
                  if (((this._tag.type = null), !this.addError(N.message)))
                    return !1;
                }
              else if (x(this._title))
                try {
                  this._tag.type = Y(
                    this._title,
                    this._last,
                    this._options.range,
                  );
                } catch {}
              return !0;
            }),
            (X.prototype._parseNamePath = function (N) {
              var _;
              return (
                (_ = ie(this._last, J && A(this._title), !0)),
                !_ && !N && !this.addError('Missing or invalid tag name')
                  ? !1
                  : ((this._tag.name = _), !0)
              );
            }),
            (X.prototype.parseNamePath = function () {
              return this._parseNamePath(!1);
            }),
            (X.prototype.parseNamePathOptional = function () {
              return this._parseNamePath(!0);
            }),
            (X.prototype.parseName = function () {
              var N, _;
              if (m(this._title))
                if (
                  ((this._tag.name = ie(
                    this._last,
                    J && A(this._title),
                    g(this._title),
                  )),
                  this._tag.name)
                )
                  (_ = this._tag.name),
                    _.charAt(0) === '[' &&
                      _.charAt(_.length - 1) === ']' &&
                      ((N = _.substring(1, _.length - 1).split('=')),
                      N.length > 1 &&
                        (this._tag.default = N.slice(1).join('=')),
                      (this._tag.name = N[0]),
                      this._tag.type &&
                        this._tag.type.type !== 'OptionalType' &&
                        (this._tag.type = {
                          type: 'OptionalType',
                          expression: this._tag.type,
                        }));
                else {
                  if (!E(this._title)) return !0;
                  if (s(this._title) && this._tag.type && this._tag.type.name)
                    (this._extra.name = this._tag.type),
                      (this._tag.name = this._tag.type.name),
                      (this._tag.type = null);
                  else if (!this.addError('Missing or invalid tag name'))
                    return !1;
                }
              return !0;
            }),
            (X.prototype.parseDescription = function () {
              var _ = o(U, k, this._last).trim();
              return (
                _ &&
                  (/^-\s+/.test(_) && (_ = _.substring(2)),
                  (this._tag.description = _)),
                !0
              );
            }),
            (X.prototype.parseCaption = function () {
              var _ = o(U, k, this._last).trim(),
                $ = '<caption>',
                H = '</caption>',
                de = _.indexOf($),
                ne = _.indexOf(H);
              return (
                de >= 0 && ne >= 0
                  ? ((this._tag.caption = _.substring(
                      de + $.length,
                      ne,
                    ).trim()),
                    (this._tag.description = _.substring(ne + H.length).trim()))
                  : (this._tag.description = _),
                !0
              );
            }),
            (X.prototype.parseKind = function () {
              var _, $;
              return (
                ($ = {
                  class: !0,
                  constant: !0,
                  event: !0,
                  external: !0,
                  file: !0,
                  function: !0,
                  member: !0,
                  mixin: !0,
                  module: !0,
                  namespace: !0,
                  typedef: !0,
                }),
                (_ = o(U, k, this._last).trim()),
                (this._tag.kind = _),
                !(!a($, _) && !this.addError("Invalid kind name '%0'", _))
              );
            }),
            (X.prototype.parseAccess = function () {
              var _;
              return (
                (_ = o(U, k, this._last).trim()),
                (this._tag.access = _),
                !(
                  _ !== 'private' &&
                  _ !== 'protected' &&
                  _ !== 'public' &&
                  !this.addError("Invalid access name '%0'", _)
                )
              );
            }),
            (X.prototype.parseThis = function () {
              var _ = o(U, k, this._last).trim();
              if (_ && _.charAt(0) === '{') {
                var $ = this.parseType();
                return ($ && this._tag.type.type === 'NameExpression') ||
                  this._tag.type.type === 'UnionType'
                  ? ((this._tag.name = this._tag.type.name), !0)
                  : this.addError('Invalid name for this');
              } else return this.parseNamePath();
            }),
            (X.prototype.parseVariation = function () {
              var _, $;
              return (
                ($ = o(U, k, this._last).trim()),
                (_ = parseFloat($, 10)),
                (this._tag.variation = _),
                !(isNaN(_) && !this.addError("Invalid variation '%0'", $))
              );
            }),
            (X.prototype.ensureEnd = function () {
              var N = o(U, k, this._last).trim();
              return !(N && !this.addError("Unknown content '%0'", N));
            }),
            (X.prototype.epilogue = function () {
              var _;
              return (
                (_ = this._tag.description),
                !(
                  A(this._title) &&
                  !this._tag.type &&
                  _ &&
                  _.charAt(0) === '[' &&
                  ((this._tag.type = this._extra.name),
                  this._tag.name || (this._tag.name = void 0),
                  !J && !this.addError('Missing or invalid tag name'))
                )
              );
            }),
            (L = {
              access: ['parseAccess'],
              alias: ['parseNamePath', 'ensureEnd'],
              augments: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
              constructor: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
              class: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
              extends: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
              example: ['parseCaption'],
              deprecated: ['parseDescription'],
              global: ['ensureEnd'],
              inner: ['ensureEnd'],
              instance: ['ensureEnd'],
              kind: ['parseKind'],
              mixes: ['parseNamePath', 'ensureEnd'],
              mixin: ['parseNamePathOptional', 'ensureEnd'],
              member: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
              method: ['parseNamePathOptional', 'ensureEnd'],
              module: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
              func: ['parseNamePathOptional', 'ensureEnd'],
              function: ['parseNamePathOptional', 'ensureEnd'],
              var: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
              name: ['parseNamePath', 'ensureEnd'],
              namespace: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
              private: ['parseType', 'parseDescription'],
              protected: ['parseType', 'parseDescription'],
              public: ['parseType', 'parseDescription'],
              readonly: ['ensureEnd'],
              requires: ['parseNamePath', 'ensureEnd'],
              since: ['parseDescription'],
              static: ['ensureEnd'],
              summary: ['parseDescription'],
              this: ['parseThis', 'ensureEnd'],
              todo: ['parseDescription'],
              typedef: ['parseType', 'parseNamePathOptional'],
              variation: ['parseVariation'],
              version: ['parseDescription'],
            }),
            (X.prototype.parse = function () {
              var _, $, H, de;
              if (!this._title && !this.addError('Missing or invalid title'))
                return null;
              for (
                this._last = G(this._title),
                  this._options.range &&
                    (this._tag.range = [
                      this._first,
                      U.slice(0, this._last).replace(/\s*$/, '').length,
                    ].map(Pe)),
                  a(L, this._title)
                    ? (H = L[this._title])
                    : (H = [
                        'parseType',
                        'parseName',
                        'parseDescription',
                        'epilogue',
                      ]),
                  _ = 0,
                  $ = H.length;
                _ < $;
                ++_
              )
                if (((de = H[_]), !this[de]())) return null;
              return this._tag;
            });
          function qe(N) {
            var _, $, H;
            if (!Re()) return null;
            for (_ = j(), $ = new X(N, _), H = $.parse(); k < $._last; ) T();
            return H;
          }
          function B(N) {
            var _ = '',
              $,
              H;
            for (H = !0; k < K && (($ = U.charCodeAt(k)), !(H && $ === 64)); )
              n.code.isLineTerminator($)
                ? (H = !0)
                : H && !n.code.isWhiteSpace($) && (H = !1),
                (_ += T());
            return N ? _ : _.trim();
          }
          function P(N, _) {
            var $ = [],
              H,
              de,
              ne,
              ae,
              Ae;
            if (
              (_ === void 0 && (_ = {}),
              typeof _.unwrap == 'boolean' && _.unwrap ? (U = I(N)) : (U = N),
              (se = N),
              _.tags)
            )
              if (Array.isArray(_.tags))
                for (ne = {}, ae = 0, Ae = _.tags.length; ae < Ae; ae++)
                  typeof _.tags[ae] == 'string'
                    ? (ne[_.tags[ae]] = !0)
                    : t.throwError('Invalid "tags" parameter: ' + _.tags);
              else t.throwError('Invalid "tags" parameter: ' + _.tags);
            for (
              K = U.length,
                k = 0,
                z = 0,
                ee = _.recoverable,
                J = _.sloppy,
                O = _.strict,
                de = B(_.preserveWhitespace);
              (H = qe(_)), !!H;

            )
              (!ne || ne.hasOwnProperty(H.title)) && $.push(H);
            return { description: de, tags: $ };
          }
          F.parse = P;
        })((r = {})),
          (Ke.version = t.VERSION),
          (Ke.parse = r.parse),
          (Ke.parseType = e.parseType),
          (Ke.parseParamType = e.parseParamType),
          (Ke.unwrapComment = I),
          (Ke.Syntax = i(e.Syntax)),
          (Ke.Error = t.DoctrineError),
          (Ke.type = {
            Syntax: Ke.Syntax,
            parseType: e.parseType,
            parseParamType: e.parseParamType,
            stringify: e.stringify,
          });
      })();
    });
    function xt() {
      return (xt =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    function Oi(e, t) {
      if (e == null) return {};
      var r,
        n,
        a = {},
        o = Object.keys(e);
      for (n = 0; n < o.length; n++)
        t.indexOf((r = o[n])) >= 0 || (a[r] = e[r]);
      return a;
    }
    function wi(e) {
      var t = Fe(e),
        r = Fe(function (n) {
          t.current && t.current(n);
        });
      return (t.current = e), r.current;
    }
    function xg(e, t, r) {
      var n = wi(r),
        a = te(function () {
          return e.toHsva(t);
        }),
        o = a[0],
        i = a[1],
        u = Fe({ color: t, hsva: o });
      he(
        function () {
          if (!e.equal(t, u.current.color)) {
            var p = e.toHsva(t);
            (u.current = { hsva: p, color: t }), i(p);
          }
        },
        [t, e],
      ),
        he(
          function () {
            var p;
            Dg(o, u.current.hsva) ||
              e.equal((p = e.fromHsva(o)), u.current.color) ||
              ((u.current = { hsva: o, color: p }), n(p));
          },
          [o, e, n],
        );
      var s = ge(function (p) {
        i(function (y) {
          return Object.assign({}, y, p);
        });
      }, []);
      return [o, s];
    }
    var rr,
      Mr,
      Bi,
      hg,
      mg,
      Ri,
      $r,
      Pi,
      De,
      wR,
      BR,
      Ti,
      TR,
      _R,
      OR,
      RR,
      yg,
      _i,
      oa,
      bg,
      PR,
      aa,
      IR,
      Eg,
      Ag,
      vg,
      Dg,
      Cg,
      kR,
      NR,
      LR,
      qR,
      gg,
      Sg,
      jR,
      MR,
      Fg,
      $R,
      wg,
      UR,
      Bg,
      zR,
      Tg,
      _g = Ye(() => {
        l();
        c();
        d();
        Ft();
        (rr = function (e, t, r) {
          return (
            t === void 0 && (t = 0),
            r === void 0 && (r = 1),
            e > r ? r : e < t ? t : e
          );
        }),
          (Mr = function (e) {
            return 'touches' in e;
          }),
          (Bi = function (e) {
            return (e && e.ownerDocument.defaultView) || self;
          }),
          (hg = function (e, t, r) {
            var n = e.getBoundingClientRect(),
              a = Mr(t)
                ? (function (o, i) {
                    for (var u = 0; u < o.length; u++)
                      if (o[u].identifier === i) return o[u];
                    return o[0];
                  })(t.touches, r)
                : t;
            return {
              left: rr((a.pageX - (n.left + Bi(e).pageXOffset)) / n.width),
              top: rr((a.pageY - (n.top + Bi(e).pageYOffset)) / n.height),
            };
          }),
          (mg = function (e) {
            !Mr(e) && e.preventDefault();
          }),
          (Ri = h.memo(function (e) {
            var t = e.onMove,
              r = e.onKey,
              n = Oi(e, ['onMove', 'onKey']),
              a = Fe(null),
              o = wi(t),
              i = wi(r),
              u = Fe(null),
              s = Fe(!1),
              p = Ze(
                function () {
                  var g = function (x) {
                      mg(x),
                        (Mr(x) ? x.touches.length > 0 : x.buttons > 0) &&
                        a.current
                          ? o(hg(a.current, x, u.current))
                          : b(!1);
                    },
                    A = function () {
                      return b(!1);
                    };
                  function b(x) {
                    var w = s.current,
                      R = Bi(a.current),
                      I = x ? R.addEventListener : R.removeEventListener;
                    I(w ? 'touchmove' : 'mousemove', g),
                      I(w ? 'touchend' : 'mouseup', A);
                  }
                  return [
                    function (x) {
                      var w = x.nativeEvent,
                        R = a.current;
                      if (
                        R &&
                        (mg(w),
                        !(function (M, F) {
                          return F && !Mr(M);
                        })(w, s.current) && R)
                      ) {
                        if (Mr(w)) {
                          s.current = !0;
                          var I = w.changedTouches || [];
                          I.length && (u.current = I[0].identifier);
                        }
                        R.focus(), o(hg(R, w, u.current)), b(!0);
                      }
                    },
                    function (x) {
                      var w = x.which || x.keyCode;
                      w < 37 ||
                        w > 40 ||
                        (x.preventDefault(),
                        i({
                          left: w === 39 ? 0.05 : w === 37 ? -0.05 : 0,
                          top: w === 40 ? 0.05 : w === 38 ? -0.05 : 0,
                        }));
                    },
                    b,
                  ];
                },
                [i, o],
              ),
              y = p[0],
              E = p[1],
              m = p[2];
            return (
              he(
                function () {
                  return m;
                },
                [m],
              ),
              h.createElement(
                'div',
                xt({}, n, {
                  onTouchStart: y,
                  onMouseDown: y,
                  className: 'react-colorful__interactive',
                  ref: a,
                  onKeyDown: E,
                  tabIndex: 0,
                  role: 'slider',
                }),
              )
            );
          })),
          ($r = function (e) {
            return e.filter(Boolean).join(' ');
          }),
          (Pi = function (e) {
            var t = e.color,
              r = e.left,
              n = e.top,
              a = n === void 0 ? 0.5 : n,
              o = $r(['react-colorful__pointer', e.className]);
            return h.createElement(
              'div',
              {
                className: o,
                style: { top: 100 * a + '%', left: 100 * r + '%' },
              },
              h.createElement('div', {
                className: 'react-colorful__pointer-fill',
                style: { backgroundColor: t },
              }),
            );
          }),
          (De = function (e, t, r) {
            return (
              t === void 0 && (t = 0),
              r === void 0 && (r = Math.pow(10, t)),
              Math.round(r * e) / r
            );
          }),
          (wR = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }),
          (BR = function (e) {
            return Eg(Ti(e));
          }),
          (Ti = function (e) {
            return (
              e[0] === '#' && (e = e.substring(1)),
              e.length < 6
                ? {
                    r: parseInt(e[0] + e[0], 16),
                    g: parseInt(e[1] + e[1], 16),
                    b: parseInt(e[2] + e[2], 16),
                    a:
                      e.length === 4
                        ? De(parseInt(e[3] + e[3], 16) / 255, 2)
                        : 1,
                  }
                : {
                    r: parseInt(e.substring(0, 2), 16),
                    g: parseInt(e.substring(2, 4), 16),
                    b: parseInt(e.substring(4, 6), 16),
                    a:
                      e.length === 8
                        ? De(parseInt(e.substring(6, 8), 16) / 255, 2)
                        : 1,
                  }
            );
          }),
          (TR = function (e, t) {
            return t === void 0 && (t = 'deg'), Number(e) * (wR[t] || 1);
          }),
          (_R = function (e) {
            var t =
              /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
                e,
              );
            return t
              ? OR({
                  h: TR(t[1], t[2]),
                  s: Number(t[3]),
                  l: Number(t[4]),
                  a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1),
                })
              : { h: 0, s: 0, v: 0, a: 1 };
          }),
          (OR = function (e) {
            var t = e.s,
              r = e.l;
            return {
              h: e.h,
              s:
                (t *= (r < 50 ? r : 100 - r) / 100) > 0
                  ? ((2 * t) / (r + t)) * 100
                  : 0,
              v: r + t,
              a: e.a,
            };
          }),
          (RR = function (e) {
            return IR(bg(e));
          }),
          (yg = function (e) {
            var t = e.s,
              r = e.v,
              n = e.a,
              a = ((200 - t) * r) / 100;
            return {
              h: De(e.h),
              s: De(
                a > 0 && a < 200
                  ? ((t * r) / 100 / (a <= 100 ? a : 200 - a)) * 100
                  : 0,
              ),
              l: De(a / 2),
              a: De(n, 2),
            };
          }),
          (_i = function (e) {
            var t = yg(e);
            return 'hsl(' + t.h + ', ' + t.s + '%, ' + t.l + '%)';
          }),
          (oa = function (e) {
            var t = yg(e);
            return 'hsla(' + t.h + ', ' + t.s + '%, ' + t.l + '%, ' + t.a + ')';
          }),
          (bg = function (e) {
            var t = e.h,
              r = e.s,
              n = e.v,
              a = e.a;
            (t = (t / 360) * 6), (r /= 100), (n /= 100);
            var o = Math.floor(t),
              i = n * (1 - r),
              u = n * (1 - (t - o) * r),
              s = n * (1 - (1 - t + o) * r),
              p = o % 6;
            return {
              r: De(255 * [n, u, i, i, s, n][p]),
              g: De(255 * [s, n, n, u, i, i][p]),
              b: De(255 * [i, i, s, n, n, u][p]),
              a: De(a, 2),
            };
          }),
          (PR = function (e) {
            var t =
              /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
                e,
              );
            return t
              ? Eg({
                  r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                  g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                  b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                  a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
                })
              : { h: 0, s: 0, v: 0, a: 1 };
          }),
          (aa = function (e) {
            var t = e.toString(16);
            return t.length < 2 ? '0' + t : t;
          }),
          (IR = function (e) {
            var t = e.r,
              r = e.g,
              n = e.b,
              a = e.a,
              o = a < 1 ? aa(De(255 * a)) : '';
            return '#' + aa(t) + aa(r) + aa(n) + o;
          }),
          (Eg = function (e) {
            var t = e.r,
              r = e.g,
              n = e.b,
              a = e.a,
              o = Math.max(t, r, n),
              i = o - Math.min(t, r, n),
              u = i
                ? o === t
                  ? (r - n) / i
                  : o === r
                    ? 2 + (n - t) / i
                    : 4 + (t - r) / i
                : 0;
            return {
              h: De(60 * (u < 0 ? u + 6 : u)),
              s: De(o ? (i / o) * 100 : 0),
              v: De((o / 255) * 100),
              a,
            };
          }),
          (Ag = h.memo(function (e) {
            var t = e.hue,
              r = e.onChange,
              n = $r(['react-colorful__hue', e.className]);
            return h.createElement(
              'div',
              { className: n },
              h.createElement(
                Ri,
                {
                  onMove: function (a) {
                    r({ h: 360 * a.left });
                  },
                  onKey: function (a) {
                    r({ h: rr(t + 360 * a.left, 0, 360) });
                  },
                  'aria-label': 'Hue',
                  'aria-valuenow': De(t),
                  'aria-valuemax': '360',
                  'aria-valuemin': '0',
                },
                h.createElement(Pi, {
                  className: 'react-colorful__hue-pointer',
                  left: t / 360,
                  color: _i({ h: t, s: 100, v: 100, a: 1 }),
                }),
              ),
            );
          })),
          (vg = h.memo(function (e) {
            var t = e.hsva,
              r = e.onChange,
              n = { backgroundColor: _i({ h: t.h, s: 100, v: 100, a: 1 }) };
            return h.createElement(
              'div',
              { className: 'react-colorful__saturation', style: n },
              h.createElement(
                Ri,
                {
                  onMove: function (a) {
                    r({ s: 100 * a.left, v: 100 - 100 * a.top });
                  },
                  onKey: function (a) {
                    r({
                      s: rr(t.s + 100 * a.left, 0, 100),
                      v: rr(t.v - 100 * a.top, 0, 100),
                    });
                  },
                  'aria-label': 'Color',
                  'aria-valuetext':
                    'Saturation ' + De(t.s) + '%, Brightness ' + De(t.v) + '%',
                },
                h.createElement(Pi, {
                  className: 'react-colorful__saturation-pointer',
                  top: 1 - t.v / 100,
                  left: t.s / 100,
                  color: _i(t),
                }),
              ),
            );
          })),
          (Dg = function (e, t) {
            if (e === t) return !0;
            for (var r in e) if (e[r] !== t[r]) return !1;
            return !0;
          }),
          (Cg = function (e, t) {
            return e.replace(/\s/g, '') === t.replace(/\s/g, '');
          }),
          (kR = function (e, t) {
            return e.toLowerCase() === t.toLowerCase() || Dg(Ti(e), Ti(t));
          });
        (LR = typeof window < 'u' ? ru : he),
          (qR = function () {
            return (
              NR ||
              (typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : void 0)
            );
          }),
          (gg = new Map()),
          (Sg = function (e) {
            LR(function () {
              var t = e.current ? e.current.ownerDocument : document;
              if (t !== void 0 && !gg.has(t)) {
                var r = t.createElement('style');
                (r.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`),
                  gg.set(t, r);
                var n = qR();
                n && r.setAttribute('nonce', n), t.head.appendChild(r);
              }
            }, []);
          }),
          (jR = function (e) {
            var t = e.className,
              r = e.colorModel,
              n = e.color,
              a = n === void 0 ? r.defaultColor : n,
              o = e.onChange,
              i = Oi(e, ['className', 'colorModel', 'color', 'onChange']),
              u = Fe(null);
            Sg(u);
            var s = xg(r, a, o),
              p = s[0],
              y = s[1],
              E = $r(['react-colorful', t]);
            return h.createElement(
              'div',
              xt({}, i, { ref: u, className: E }),
              h.createElement(vg, { hsva: p, onChange: y }),
              h.createElement(Ag, {
                hue: p.h,
                onChange: y,
                className: 'react-colorful__last-control',
              }),
            );
          }),
          (MR = {
            defaultColor: '000',
            toHsva: BR,
            fromHsva: function (e) {
              return RR({ h: e.h, s: e.s, v: e.v, a: 1 });
            },
            equal: kR,
          }),
          (Fg = function (e) {
            return h.createElement(jR, xt({}, e, { colorModel: MR }));
          }),
          ($R = function (e) {
            var t = e.className,
              r = e.hsva,
              n = e.onChange,
              a = {
                backgroundImage:
                  'linear-gradient(90deg, ' +
                  oa(Object.assign({}, r, { a: 0 })) +
                  ', ' +
                  oa(Object.assign({}, r, { a: 1 })) +
                  ')',
              },
              o = $r(['react-colorful__alpha', t]),
              i = De(100 * r.a);
            return h.createElement(
              'div',
              { className: o },
              h.createElement('div', {
                className: 'react-colorful__alpha-gradient',
                style: a,
              }),
              h.createElement(
                Ri,
                {
                  onMove: function (u) {
                    n({ a: u.left });
                  },
                  onKey: function (u) {
                    n({ a: rr(r.a + u.left) });
                  },
                  'aria-label': 'Alpha',
                  'aria-valuetext': i + '%',
                  'aria-valuenow': i,
                  'aria-valuemin': '0',
                  'aria-valuemax': '100',
                },
                h.createElement(Pi, {
                  className: 'react-colorful__alpha-pointer',
                  left: r.a,
                  color: oa(r),
                }),
              ),
            );
          }),
          (wg = function (e) {
            var t = e.className,
              r = e.colorModel,
              n = e.color,
              a = n === void 0 ? r.defaultColor : n,
              o = e.onChange,
              i = Oi(e, ['className', 'colorModel', 'color', 'onChange']),
              u = Fe(null);
            Sg(u);
            var s = xg(r, a, o),
              p = s[0],
              y = s[1],
              E = $r(['react-colorful', t]);
            return h.createElement(
              'div',
              xt({}, i, { ref: u, className: E }),
              h.createElement(vg, { hsva: p, onChange: y }),
              h.createElement(Ag, { hue: p.h, onChange: y }),
              h.createElement($R, {
                hsva: p,
                onChange: y,
                className: 'react-colorful__last-control',
              }),
            );
          }),
          (UR = {
            defaultColor: 'hsla(0, 0%, 0%, 1)',
            toHsva: _R,
            fromHsva: oa,
            equal: Cg,
          }),
          (Bg = function (e) {
            return h.createElement(wg, xt({}, e, { colorModel: UR }));
          }),
          (zR = {
            defaultColor: 'rgba(0, 0, 0, 1)',
            toHsva: PR,
            fromHsva: function (e) {
              var t = bg(e);
              return 'rgba(' + t.r + ', ' + t.g + ', ' + t.b + ', ' + t.a + ')';
            },
            equal: Cg,
          }),
          (Tg = function (e) {
            return h.createElement(wg, xt({}, e, { colorModel: zR }));
          });
      });
    var Rg = S((Are, Og) => {
      'use strict';
      l();
      c();
      d();
      Og.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50],
      };
    });
    var Ii = S((xre, Ig) => {
      l();
      c();
      d();
      var Ur = Rg(),
        Pg = {};
      for (let e of Object.keys(Ur)) Pg[Ur[e]] = e;
      var W = {
        rgb: { channels: 3, labels: 'rgb' },
        hsl: { channels: 3, labels: 'hsl' },
        hsv: { channels: 3, labels: 'hsv' },
        hwb: { channels: 3, labels: 'hwb' },
        cmyk: { channels: 4, labels: 'cmyk' },
        xyz: { channels: 3, labels: 'xyz' },
        lab: { channels: 3, labels: 'lab' },
        lch: { channels: 3, labels: 'lch' },
        hex: { channels: 1, labels: ['hex'] },
        keyword: { channels: 1, labels: ['keyword'] },
        ansi16: { channels: 1, labels: ['ansi16'] },
        ansi256: { channels: 1, labels: ['ansi256'] },
        hcg: { channels: 3, labels: ['h', 'c', 'g'] },
        apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
        gray: { channels: 1, labels: ['gray'] },
      };
      Ig.exports = W;
      for (let e of Object.keys(W)) {
        if (!('channels' in W[e]))
          throw new Error('missing channels property: ' + e);
        if (!('labels' in W[e]))
          throw new Error('missing channel labels property: ' + e);
        if (W[e].labels.length !== W[e].channels)
          throw new Error('channel and label counts mismatch: ' + e);
        let { channels: t, labels: r } = W[e];
        delete W[e].channels,
          delete W[e].labels,
          Object.defineProperty(W[e], 'channels', { value: t }),
          Object.defineProperty(W[e], 'labels', { value: r });
      }
      W.rgb.hsl = function (e) {
        let t = e[0] / 255,
          r = e[1] / 255,
          n = e[2] / 255,
          a = Math.min(t, r, n),
          o = Math.max(t, r, n),
          i = o - a,
          u,
          s;
        o === a
          ? (u = 0)
          : t === o
            ? (u = (r - n) / i)
            : r === o
              ? (u = 2 + (n - t) / i)
              : n === o && (u = 4 + (t - r) / i),
          (u = Math.min(u * 60, 360)),
          u < 0 && (u += 360);
        let p = (a + o) / 2;
        return (
          o === a
            ? (s = 0)
            : p <= 0.5
              ? (s = i / (o + a))
              : (s = i / (2 - o - a)),
          [u, s * 100, p * 100]
        );
      };
      W.rgb.hsv = function (e) {
        let t,
          r,
          n,
          a,
          o,
          i = e[0] / 255,
          u = e[1] / 255,
          s = e[2] / 255,
          p = Math.max(i, u, s),
          y = p - Math.min(i, u, s),
          E = function (m) {
            return (p - m) / 6 / y + 1 / 2;
          };
        return (
          y === 0
            ? ((a = 0), (o = 0))
            : ((o = y / p),
              (t = E(i)),
              (r = E(u)),
              (n = E(s)),
              i === p
                ? (a = n - r)
                : u === p
                  ? (a = 1 / 3 + t - n)
                  : s === p && (a = 2 / 3 + r - t),
              a < 0 ? (a += 1) : a > 1 && (a -= 1)),
          [a * 360, o * 100, p * 100]
        );
      };
      W.rgb.hwb = function (e) {
        let t = e[0],
          r = e[1],
          n = e[2],
          a = W.rgb.hsl(e)[0],
          o = (1 / 255) * Math.min(t, Math.min(r, n));
        return (
          (n = 1 - (1 / 255) * Math.max(t, Math.max(r, n))),
          [a, o * 100, n * 100]
        );
      };
      W.rgb.cmyk = function (e) {
        let t = e[0] / 255,
          r = e[1] / 255,
          n = e[2] / 255,
          a = Math.min(1 - t, 1 - r, 1 - n),
          o = (1 - t - a) / (1 - a) || 0,
          i = (1 - r - a) / (1 - a) || 0,
          u = (1 - n - a) / (1 - a) || 0;
        return [o * 100, i * 100, u * 100, a * 100];
      };
      function HR(e, t) {
        return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2;
      }
      W.rgb.keyword = function (e) {
        let t = Pg[e];
        if (t) return t;
        let r = 1 / 0,
          n;
        for (let a of Object.keys(Ur)) {
          let o = Ur[a],
            i = HR(e, o);
          i < r && ((r = i), (n = a));
        }
        return n;
      };
      W.keyword.rgb = function (e) {
        return Ur[e];
      };
      W.rgb.xyz = function (e) {
        let t = e[0] / 255,
          r = e[1] / 255,
          n = e[2] / 255;
        (t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92),
          (r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92),
          (n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92);
        let a = t * 0.4124 + r * 0.3576 + n * 0.1805,
          o = t * 0.2126 + r * 0.7152 + n * 0.0722,
          i = t * 0.0193 + r * 0.1192 + n * 0.9505;
        return [a * 100, o * 100, i * 100];
      };
      W.rgb.lab = function (e) {
        let t = W.rgb.xyz(e),
          r = t[0],
          n = t[1],
          a = t[2];
        (r /= 95.047),
          (n /= 100),
          (a /= 108.883),
          (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
          (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116),
          (a = a > 0.008856 ? a ** (1 / 3) : 7.787 * a + 16 / 116);
        let o = 116 * n - 16,
          i = 500 * (r - n),
          u = 200 * (n - a);
        return [o, i, u];
      };
      W.hsl.rgb = function (e) {
        let t = e[0] / 360,
          r = e[1] / 100,
          n = e[2] / 100,
          a,
          o,
          i;
        if (r === 0) return (i = n * 255), [i, i, i];
        n < 0.5 ? (a = n * (1 + r)) : (a = n + r - n * r);
        let u = 2 * n - a,
          s = [0, 0, 0];
        for (let p = 0; p < 3; p++)
          (o = t + (1 / 3) * -(p - 1)),
            o < 0 && o++,
            o > 1 && o--,
            6 * o < 1
              ? (i = u + (a - u) * 6 * o)
              : 2 * o < 1
                ? (i = a)
                : 3 * o < 2
                  ? (i = u + (a - u) * (2 / 3 - o) * 6)
                  : (i = u),
            (s[p] = i * 255);
        return s;
      };
      W.hsl.hsv = function (e) {
        let t = e[0],
          r = e[1] / 100,
          n = e[2] / 100,
          a = r,
          o = Math.max(n, 0.01);
        (n *= 2), (r *= n <= 1 ? n : 2 - n), (a *= o <= 1 ? o : 2 - o);
        let i = (n + r) / 2,
          u = n === 0 ? (2 * a) / (o + a) : (2 * r) / (n + r);
        return [t, u * 100, i * 100];
      };
      W.hsv.rgb = function (e) {
        let t = e[0] / 60,
          r = e[1] / 100,
          n = e[2] / 100,
          a = Math.floor(t) % 6,
          o = t - Math.floor(t),
          i = 255 * n * (1 - r),
          u = 255 * n * (1 - r * o),
          s = 255 * n * (1 - r * (1 - o));
        switch (((n *= 255), a)) {
          case 0:
            return [n, s, i];
          case 1:
            return [u, n, i];
          case 2:
            return [i, n, s];
          case 3:
            return [i, u, n];
          case 4:
            return [s, i, n];
          case 5:
            return [n, i, u];
        }
      };
      W.hsv.hsl = function (e) {
        let t = e[0],
          r = e[1] / 100,
          n = e[2] / 100,
          a = Math.max(n, 0.01),
          o,
          i;
        i = (2 - r) * n;
        let u = (2 - r) * a;
        return (
          (o = r * a),
          (o /= u <= 1 ? u : 2 - u),
          (o = o || 0),
          (i /= 2),
          [t, o * 100, i * 100]
        );
      };
      W.hwb.rgb = function (e) {
        let t = e[0] / 360,
          r = e[1] / 100,
          n = e[2] / 100,
          a = r + n,
          o;
        a > 1 && ((r /= a), (n /= a));
        let i = Math.floor(6 * t),
          u = 1 - n;
        (o = 6 * t - i), i & 1 && (o = 1 - o);
        let s = r + o * (u - r),
          p,
          y,
          E;
        switch (i) {
          default:
          case 6:
          case 0:
            (p = u), (y = s), (E = r);
            break;
          case 1:
            (p = s), (y = u), (E = r);
            break;
          case 2:
            (p = r), (y = u), (E = s);
            break;
          case 3:
            (p = r), (y = s), (E = u);
            break;
          case 4:
            (p = s), (y = r), (E = u);
            break;
          case 5:
            (p = u), (y = r), (E = s);
            break;
        }
        return [p * 255, y * 255, E * 255];
      };
      W.cmyk.rgb = function (e) {
        let t = e[0] / 100,
          r = e[1] / 100,
          n = e[2] / 100,
          a = e[3] / 100,
          o = 1 - Math.min(1, t * (1 - a) + a),
          i = 1 - Math.min(1, r * (1 - a) + a),
          u = 1 - Math.min(1, n * (1 - a) + a);
        return [o * 255, i * 255, u * 255];
      };
      W.xyz.rgb = function (e) {
        let t = e[0] / 100,
          r = e[1] / 100,
          n = e[2] / 100,
          a,
          o,
          i;
        return (
          (a = t * 3.2406 + r * -1.5372 + n * -0.4986),
          (o = t * -0.9689 + r * 1.8758 + n * 0.0415),
          (i = t * 0.0557 + r * -0.204 + n * 1.057),
          (a = a > 0.0031308 ? 1.055 * a ** (1 / 2.4) - 0.055 : a * 12.92),
          (o = o > 0.0031308 ? 1.055 * o ** (1 / 2.4) - 0.055 : o * 12.92),
          (i = i > 0.0031308 ? 1.055 * i ** (1 / 2.4) - 0.055 : i * 12.92),
          (a = Math.min(Math.max(0, a), 1)),
          (o = Math.min(Math.max(0, o), 1)),
          (i = Math.min(Math.max(0, i), 1)),
          [a * 255, o * 255, i * 255]
        );
      };
      W.xyz.lab = function (e) {
        let t = e[0],
          r = e[1],
          n = e[2];
        (t /= 95.047),
          (r /= 100),
          (n /= 108.883),
          (t = t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116),
          (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
          (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116);
        let a = 116 * r - 16,
          o = 500 * (t - r),
          i = 200 * (r - n);
        return [a, o, i];
      };
      W.lab.xyz = function (e) {
        let t = e[0],
          r = e[1],
          n = e[2],
          a,
          o,
          i;
        (o = (t + 16) / 116), (a = r / 500 + o), (i = o - n / 200);
        let u = o ** 3,
          s = a ** 3,
          p = i ** 3;
        return (
          (o = u > 0.008856 ? u : (o - 16 / 116) / 7.787),
          (a = s > 0.008856 ? s : (a - 16 / 116) / 7.787),
          (i = p > 0.008856 ? p : (i - 16 / 116) / 7.787),
          (a *= 95.047),
          (o *= 100),
          (i *= 108.883),
          [a, o, i]
        );
      };
      W.lab.lch = function (e) {
        let t = e[0],
          r = e[1],
          n = e[2],
          a;
        (a = (Math.atan2(n, r) * 360) / 2 / Math.PI), a < 0 && (a += 360);
        let i = Math.sqrt(r * r + n * n);
        return [t, i, a];
      };
      W.lch.lab = function (e) {
        let t = e[0],
          r = e[1],
          a = (e[2] / 360) * 2 * Math.PI,
          o = r * Math.cos(a),
          i = r * Math.sin(a);
        return [t, o, i];
      };
      W.rgb.ansi16 = function (e, t = null) {
        let [r, n, a] = e,
          o = t === null ? W.rgb.hsv(e)[2] : t;
        if (((o = Math.round(o / 50)), o === 0)) return 30;
        let i =
          30 +
          ((Math.round(a / 255) << 2) |
            (Math.round(n / 255) << 1) |
            Math.round(r / 255));
        return o === 2 && (i += 60), i;
      };
      W.hsv.ansi16 = function (e) {
        return W.rgb.ansi16(W.hsv.rgb(e), e[2]);
      };
      W.rgb.ansi256 = function (e) {
        let t = e[0],
          r = e[1],
          n = e[2];
        return t === r && r === n
          ? t < 8
            ? 16
            : t > 248
              ? 231
              : Math.round(((t - 8) / 247) * 24) + 232
          : 16 +
              36 * Math.round((t / 255) * 5) +
              6 * Math.round((r / 255) * 5) +
              Math.round((n / 255) * 5);
      };
      W.ansi16.rgb = function (e) {
        let t = e % 10;
        if (t === 0 || t === 7)
          return e > 50 && (t += 3.5), (t = (t / 10.5) * 255), [t, t, t];
        let r = (~~(e > 50) + 1) * 0.5,
          n = (t & 1) * r * 255,
          a = ((t >> 1) & 1) * r * 255,
          o = ((t >> 2) & 1) * r * 255;
        return [n, a, o];
      };
      W.ansi256.rgb = function (e) {
        if (e >= 232) {
          let o = (e - 232) * 10 + 8;
          return [o, o, o];
        }
        e -= 16;
        let t,
          r = (Math.floor(e / 36) / 5) * 255,
          n = (Math.floor((t = e % 36) / 6) / 5) * 255,
          a = ((t % 6) / 5) * 255;
        return [r, n, a];
      };
      W.rgb.hex = function (e) {
        let r = (
          ((Math.round(e[0]) & 255) << 16) +
          ((Math.round(e[1]) & 255) << 8) +
          (Math.round(e[2]) & 255)
        )
          .toString(16)
          .toUpperCase();
        return '000000'.substring(r.length) + r;
      };
      W.hex.rgb = function (e) {
        let t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!t) return [0, 0, 0];
        let r = t[0];
        t[0].length === 3 &&
          (r = r
            .split('')
            .map((u) => u + u)
            .join(''));
        let n = parseInt(r, 16),
          a = (n >> 16) & 255,
          o = (n >> 8) & 255,
          i = n & 255;
        return [a, o, i];
      };
      W.rgb.hcg = function (e) {
        let t = e[0] / 255,
          r = e[1] / 255,
          n = e[2] / 255,
          a = Math.max(Math.max(t, r), n),
          o = Math.min(Math.min(t, r), n),
          i = a - o,
          u,
          s;
        return (
          i < 1 ? (u = o / (1 - i)) : (u = 0),
          i <= 0
            ? (s = 0)
            : a === t
              ? (s = ((r - n) / i) % 6)
              : a === r
                ? (s = 2 + (n - t) / i)
                : (s = 4 + (t - r) / i),
          (s /= 6),
          (s %= 1),
          [s * 360, i * 100, u * 100]
        );
      };
      W.hsl.hcg = function (e) {
        let t = e[1] / 100,
          r = e[2] / 100,
          n = r < 0.5 ? 2 * t * r : 2 * t * (1 - r),
          a = 0;
        return n < 1 && (a = (r - 0.5 * n) / (1 - n)), [e[0], n * 100, a * 100];
      };
      W.hsv.hcg = function (e) {
        let t = e[1] / 100,
          r = e[2] / 100,
          n = t * r,
          a = 0;
        return n < 1 && (a = (r - n) / (1 - n)), [e[0], n * 100, a * 100];
      };
      W.hcg.rgb = function (e) {
        let t = e[0] / 360,
          r = e[1] / 100,
          n = e[2] / 100;
        if (r === 0) return [n * 255, n * 255, n * 255];
        let a = [0, 0, 0],
          o = (t % 1) * 6,
          i = o % 1,
          u = 1 - i,
          s = 0;
        switch (Math.floor(o)) {
          case 0:
            (a[0] = 1), (a[1] = i), (a[2] = 0);
            break;
          case 1:
            (a[0] = u), (a[1] = 1), (a[2] = 0);
            break;
          case 2:
            (a[0] = 0), (a[1] = 1), (a[2] = i);
            break;
          case 3:
            (a[0] = 0), (a[1] = u), (a[2] = 1);
            break;
          case 4:
            (a[0] = i), (a[1] = 0), (a[2] = 1);
            break;
          default:
            (a[0] = 1), (a[1] = 0), (a[2] = u);
        }
        return (
          (s = (1 - r) * n),
          [(r * a[0] + s) * 255, (r * a[1] + s) * 255, (r * a[2] + s) * 255]
        );
      };
      W.hcg.hsv = function (e) {
        let t = e[1] / 100,
          r = e[2] / 100,
          n = t + r * (1 - t),
          a = 0;
        return n > 0 && (a = t / n), [e[0], a * 100, n * 100];
      };
      W.hcg.hsl = function (e) {
        let t = e[1] / 100,
          n = (e[2] / 100) * (1 - t) + 0.5 * t,
          a = 0;
        return (
          n > 0 && n < 0.5
            ? (a = t / (2 * n))
            : n >= 0.5 && n < 1 && (a = t / (2 * (1 - n))),
          [e[0], a * 100, n * 100]
        );
      };
      W.hcg.hwb = function (e) {
        let t = e[1] / 100,
          r = e[2] / 100,
          n = t + r * (1 - t);
        return [e[0], (n - t) * 100, (1 - n) * 100];
      };
      W.hwb.hcg = function (e) {
        let t = e[1] / 100,
          n = 1 - e[2] / 100,
          a = n - t,
          o = 0;
        return a < 1 && (o = (n - a) / (1 - a)), [e[0], a * 100, o * 100];
      };
      W.apple.rgb = function (e) {
        return [
          (e[0] / 65535) * 255,
          (e[1] / 65535) * 255,
          (e[2] / 65535) * 255,
        ];
      };
      W.rgb.apple = function (e) {
        return [
          (e[0] / 255) * 65535,
          (e[1] / 255) * 65535,
          (e[2] / 255) * 65535,
        ];
      };
      W.gray.rgb = function (e) {
        return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255];
      };
      W.gray.hsl = function (e) {
        return [0, 0, e[0]];
      };
      W.gray.hsv = W.gray.hsl;
      W.gray.hwb = function (e) {
        return [0, 100, e[0]];
      };
      W.gray.cmyk = function (e) {
        return [0, 0, 0, e[0]];
      };
      W.gray.lab = function (e) {
        return [e[0], 0, 0];
      };
      W.gray.hex = function (e) {
        let t = Math.round((e[0] / 100) * 255) & 255,
          n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
        return '000000'.substring(n.length) + n;
      };
      W.rgb.gray = function (e) {
        return [((e[0] + e[1] + e[2]) / 3 / 255) * 100];
      };
    });
    var Ng = S((Bre, kg) => {
      l();
      c();
      d();
      var ia = Ii();
      function GR() {
        let e = {},
          t = Object.keys(ia);
        for (let r = t.length, n = 0; n < r; n++)
          e[t[n]] = { distance: -1, parent: null };
        return e;
      }
      function WR(e) {
        let t = GR(),
          r = [e];
        for (t[e].distance = 0; r.length; ) {
          let n = r.pop(),
            a = Object.keys(ia[n]);
          for (let o = a.length, i = 0; i < o; i++) {
            let u = a[i],
              s = t[u];
            s.distance === -1 &&
              ((s.distance = t[n].distance + 1), (s.parent = n), r.unshift(u));
          }
        }
        return t;
      }
      function VR(e, t) {
        return function (r) {
          return t(e(r));
        };
      }
      function KR(e, t) {
        let r = [t[e].parent, e],
          n = ia[t[e].parent][e],
          a = t[e].parent;
        for (; t[a].parent; )
          r.unshift(t[a].parent),
            (n = VR(ia[t[a].parent][a], n)),
            (a = t[a].parent);
        return (n.conversion = r), n;
      }
      kg.exports = function (e) {
        let t = WR(e),
          r = {},
          n = Object.keys(t);
        for (let a = n.length, o = 0; o < a; o++) {
          let i = n[o];
          t[i].parent !== null && (r[i] = KR(i, t));
        }
        return r;
      };
    });
    var qg = S((Rre, Lg) => {
      l();
      c();
      d();
      var ki = Ii(),
        YR = Ng(),
        nr = {},
        JR = Object.keys(ki);
      function XR(e) {
        let t = function (...r) {
          let n = r[0];
          return n == null ? n : (n.length > 1 && (r = n), e(r));
        };
        return 'conversion' in e && (t.conversion = e.conversion), t;
      }
      function QR(e) {
        let t = function (...r) {
          let n = r[0];
          if (n == null) return n;
          n.length > 1 && (r = n);
          let a = e(r);
          if (typeof a == 'object')
            for (let o = a.length, i = 0; i < o; i++) a[i] = Math.round(a[i]);
          return a;
        };
        return 'conversion' in e && (t.conversion = e.conversion), t;
      }
      JR.forEach((e) => {
        (nr[e] = {}),
          Object.defineProperty(nr[e], 'channels', { value: ki[e].channels }),
          Object.defineProperty(nr[e], 'labels', { value: ki[e].labels });
        let t = YR(e);
        Object.keys(t).forEach((n) => {
          let a = t[n];
          (nr[e][n] = QR(a)), (nr[e][n].raw = XR(a));
        });
      });
      Lg.exports = nr;
    });
    var Mg = S((Nre, jg) => {
      l();
      c();
      d();
      var ZR = Le(),
        e4 = function () {
          return ZR.Date.now();
        };
      jg.exports = e4;
    });
    var Ug = S((Mre, $g) => {
      l();
      c();
      d();
      var t4 = /\s/;
      function r4(e) {
        for (var t = e.length; t-- && t4.test(e.charAt(t)); );
        return t;
      }
      $g.exports = r4;
    });
    var Hg = S((Hre, zg) => {
      l();
      c();
      d();
      var n4 = Ug(),
        a4 = /^\s+/;
      function o4(e) {
        return e && e.slice(0, n4(e) + 1).replace(a4, '');
      }
      zg.exports = o4;
    });
    var Kg = S((Kre, Vg) => {
      l();
      c();
      d();
      var i4 = Hg(),
        Gg = $e(),
        u4 = vr(),
        Wg = 0 / 0,
        s4 = /^[-+]0x[0-9a-f]+$/i,
        l4 = /^0b[01]+$/i,
        c4 = /^0o[0-7]+$/i,
        d4 = parseInt;
      function p4(e) {
        if (typeof e == 'number') return e;
        if (u4(e)) return Wg;
        if (Gg(e)) {
          var t = typeof e.valueOf == 'function' ? e.valueOf() : e;
          e = Gg(t) ? t + '' : t;
        }
        if (typeof e != 'string') return e === 0 ? e : +e;
        e = i4(e);
        var r = l4.test(e);
        return r || c4.test(e)
          ? d4(e.slice(2), r ? 2 : 8)
          : s4.test(e)
            ? Wg
            : +e;
      }
      Vg.exports = p4;
    });
    var Xg = S((Qre, Jg) => {
      l();
      c();
      d();
      var f4 = $e(),
        Ni = Mg(),
        Yg = Kg(),
        h4 = 'Expected a function',
        m4 = Math.max,
        g4 = Math.min;
      function y4(e, t, r) {
        var n,
          a,
          o,
          i,
          u,
          s,
          p = 0,
          y = !1,
          E = !1,
          m = !0;
        if (typeof e != 'function') throw new TypeError(h4);
        (t = Yg(t) || 0),
          f4(r) &&
            ((y = !!r.leading),
            (E = 'maxWait' in r),
            (o = E ? m4(Yg(r.maxWait) || 0, t) : o),
            (m = 'trailing' in r ? !!r.trailing : m));
        function g(L) {
          var k = n,
            z = a;
          return (n = a = void 0), (p = L), (i = e.apply(z, k)), i;
        }
        function A(L) {
          return (p = L), (u = setTimeout(w, t)), y ? g(L) : i;
        }
        function b(L) {
          var k = L - s,
            z = L - p,
            K = t - k;
          return E ? g4(K, o - z) : K;
        }
        function x(L) {
          var k = L - s,
            z = L - p;
          return s === void 0 || k >= t || k < 0 || (E && z >= o);
        }
        function w() {
          var L = Ni();
          if (x(L)) return R(L);
          u = setTimeout(w, b(L));
        }
        function R(L) {
          return (u = void 0), m && n ? g(L) : ((n = a = void 0), i);
        }
        function I() {
          u !== void 0 && clearTimeout(u), (p = 0), (n = s = a = u = void 0);
        }
        function M() {
          return u === void 0 ? i : R(Ni());
        }
        function F() {
          var L = Ni(),
            k = x(L);
          if (((n = arguments), (a = this), (s = L), k)) {
            if (u === void 0) return A(s);
            if (E) return clearTimeout(u), (u = setTimeout(w, t)), g(s);
          }
          return u === void 0 && (u = setTimeout(w, t)), i;
        }
        return (F.cancel = I), (F.flush = M), F;
      }
      Jg.exports = y4;
    });
    var Zg = S((rne, Qg) => {
      l();
      c();
      d();
      var b4 = Xg(),
        E4 = $e(),
        A4 = 'Expected a function';
      function v4(e, t, r) {
        var n = !0,
          a = !0;
        if (typeof e != 'function') throw new TypeError(A4);
        return (
          E4(r) &&
            ((n = 'leading' in r ? !!r.leading : n),
            (a = 'trailing' in r ? !!r.trailing : a)),
          b4(e, t, { leading: n, maxWait: t, trailing: a })
        );
      }
      Qg.exports = v4;
    });
    var oy = {};
    Xi(oy, { ColorControl: () => ay, default: () => j4 });
    var Ne,
      ry,
      D4,
      C4,
      x4,
      S4,
      F4,
      w4,
      B4,
      ey,
      T4,
      _4,
      ny,
      ua,
      O4,
      R4,
      P4,
      Li,
      I4,
      k4,
      sa,
      ty,
      ar,
      N4,
      L4,
      la,
      q4,
      ay,
      j4,
      iy = Ye(() => {
        l();
        c();
        d();
        Pa();
        Ft();
        _g();
        (Ne = pe(qg(), 1)), (ry = pe(Zg(), 1));
        ka();
        sr();
        (D4 = q.div({ position: 'relative', maxWidth: 250 })),
          (C4 = q(Wr)({ position: 'absolute', zIndex: 1, top: 4, left: 4 })),
          (x4 = q.div({
            width: 200,
            margin: 5,
            '.react-colorful__saturation': { borderRadius: '4px 4px 0 0' },
            '.react-colorful__hue': {
              boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 5%)',
            },
            '.react-colorful__last-control': { borderRadius: '0 0 4px 4px' },
          })),
          (S4 = q(Ba)(({ theme: e }) => ({
            fontFamily: e.typography.fonts.base,
          }))),
          (F4 = q.div({
            display: 'grid',
            gridTemplateColumns: 'repeat(9, 16px)',
            gap: 6,
            padding: 3,
            marginTop: 5,
            width: 200,
          })),
          (w4 = q.div(({ theme: e, active: t }) => ({
            width: 16,
            height: 16,
            boxShadow: t
              ? `${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`
              : `${e.appBorderColor} 0 0 0 1px inset`,
            borderRadius: e.appBorderRadius,
          }))),
          (B4 = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`),
          (ey = ({ value: e, active: t, onClick: r, style: n, ...a }) => {
            let o = `linear-gradient(${e}, ${e}), ${B4}, linear-gradient(#fff, #fff)`;
            return h.createElement(w4, {
              ...a,
              active: t,
              onClick: r,
              style: { ...n, backgroundImage: o },
            });
          }),
          (T4 = q(Te.Input)(({ theme: e }) => ({
            width: '100%',
            paddingLeft: 30,
            paddingRight: 30,
            boxSizing: 'border-box',
            fontFamily: e.typography.fonts.base,
          }))),
          (_4 = q(we)(({ theme: e }) => ({
            position: 'absolute',
            zIndex: 1,
            top: 6,
            right: 7,
            width: 20,
            height: 20,
            padding: 4,
            boxSizing: 'border-box',
            cursor: 'pointer',
            color: e.input.color,
          }))),
          (ny = ((e) => ((e.RGB = 'rgb'), (e.HSL = 'hsl'), (e.HEX = 'hex'), e))(
            ny || {},
          )),
          (ua = Object.values(ny)),
          (O4 = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/),
          (R4 =
            /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i),
          (P4 =
            /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i),
          (Li = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i),
          (I4 = /^\s*#?([0-9a-f]{3})\s*$/i),
          (k4 = { hex: Fg, rgb: Tg, hsl: Bg }),
          (sa = {
            hex: 'transparent',
            rgb: 'rgba(0, 0, 0, 0)',
            hsl: 'hsla(0, 0%, 0%, 0)',
          }),
          (ty = (e) => {
            let t = e?.match(O4);
            if (!t) return [0, 0, 0, 1];
            let [, r, n, a, o = 1] = t;
            return [r, n, a, o].map(Number);
          }),
          (ar = (e) => {
            if (!e) return;
            let t = !0;
            if (R4.test(e)) {
              let [i, u, s, p] = ty(e),
                [y, E, m] = Ne.default.rgb.hsl([i, u, s]) || [0, 0, 0];
              return {
                valid: t,
                value: e,
                keyword: Ne.default.rgb.keyword([i, u, s]),
                colorSpace: 'rgb',
                rgb: e,
                hsl: `hsla(${y}, ${E}%, ${m}%, ${p})`,
                hex: `#${Ne.default.rgb.hex([i, u, s]).toLowerCase()}`,
              };
            }
            if (P4.test(e)) {
              let [i, u, s, p] = ty(e),
                [y, E, m] = Ne.default.hsl.rgb([i, u, s]) || [0, 0, 0];
              return {
                valid: t,
                value: e,
                keyword: Ne.default.hsl.keyword([i, u, s]),
                colorSpace: 'hsl',
                rgb: `rgba(${y}, ${E}, ${m}, ${p})`,
                hsl: e,
                hex: `#${Ne.default.hsl.hex([i, u, s]).toLowerCase()}`,
              };
            }
            let r = e.replace('#', ''),
              n = Ne.default.keyword.rgb(r) || Ne.default.hex.rgb(r),
              a = Ne.default.rgb.hsl(n),
              o = e;
            if (
              (/[^#a-f0-9]/i.test(e) ? (o = r) : Li.test(e) && (o = `#${r}`),
              o.startsWith('#'))
            )
              t = Li.test(o);
            else
              try {
                Ne.default.keyword.hex(o);
              } catch {
                t = !1;
              }
            return {
              valid: t,
              value: o,
              keyword: Ne.default.rgb.keyword(n),
              colorSpace: 'hex',
              rgb: `rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,
              hsl: `hsla(${a[0]}, ${a[1]}%, ${a[2]}%, 1)`,
              hex: o,
            };
          }),
          (N4 = (e, t, r) => {
            if (!e || !t?.valid) return sa[r];
            if (r !== 'hex') return t?.[r] || sa[r];
            if (!t.hex.startsWith('#'))
              try {
                return `#${Ne.default.keyword.hex(t.hex)}`;
              } catch {
                return sa.hex;
              }
            let n = t.hex.match(I4);
            if (!n) return Li.test(t.hex) ? t.hex : sa.hex;
            let [a, o, i] = n[1].split('');
            return `#${a}${a}${o}${o}${i}${i}`;
          }),
          (L4 = (e, t) => {
            let [r, n] = te(e || ''),
              [a, o] = te(() => ar(r)),
              [i, u] = te(a?.colorSpace || 'hex');
            he(() => {
              let E = e || '',
                m = ar(E);
              n(E), o(m), u(m?.colorSpace || 'hex');
            }, [e]);
            let s = Ze(() => N4(r, a, i).toLowerCase(), [r, a, i]),
              p = ge(
                (E) => {
                  let m = ar(E),
                    g = m?.value || E || '';
                  n(g),
                    g === '' && (o(void 0), t(void 0)),
                    m && (o(m), u(m.colorSpace), t(m.value));
                },
                [t],
              ),
              y = ge(() => {
                let E = ua.indexOf(i) + 1;
                E >= ua.length && (E = 0), u(ua[E]);
                let m = a?.[ua[E]] || '';
                n(m), t(m);
              }, [a, i, t]);
            return {
              value: r,
              realValue: s,
              updateValue: p,
              color: a,
              colorSpace: i,
              cycleColorSpace: y,
            };
          }),
          (la = (e) => e.replace(/\s*/, '').toLowerCase()),
          (q4 = (e, t, r) => {
            let [n, a] = te(t?.valid ? [t] : []);
            he(() => {
              t === void 0 && a([]);
            }, [t]);
            let o = Ze(
                () =>
                  (e || [])
                    .map((u) =>
                      typeof u == 'string'
                        ? ar(u)
                        : u.title
                          ? { ...ar(u.color), keyword: u.title }
                          : ar(u.color),
                    )
                    .concat(n)
                    .filter(Boolean)
                    .slice(-27),
                [e, n],
              ),
              i = ge(
                (u) => {
                  u?.valid &&
                    (o.some((s) => la(s[r]) === la(u[r])) ||
                      a((s) => s.concat(u)));
                },
                [r, o],
              );
            return { presets: o, addPreset: i };
          }),
          (ay = ({
            name: e,
            value: t,
            onChange: r,
            onFocus: n,
            onBlur: a,
            presetColors: o,
            startOpen: i = !1,
          }) => {
            let u = ge((0, ry.default)(r, 200), [r]),
              {
                value: s,
                realValue: p,
                updateValue: y,
                color: E,
                colorSpace: m,
                cycleColorSpace: g,
              } = L4(t, u),
              { presets: A, addPreset: b } = q4(o, E, m),
              x = k4[m];
            return h.createElement(
              D4,
              null,
              h.createElement(
                C4,
                {
                  startOpen: i,
                  closeOnOutsideClick: !0,
                  onVisibleChange: () => b(E),
                  tooltip: h.createElement(
                    x4,
                    null,
                    h.createElement(x, {
                      color: p === 'transparent' ? '#000000' : p,
                      onChange: y,
                      onFocus: n,
                      onBlur: a,
                    }),
                    A.length > 0 &&
                      h.createElement(
                        F4,
                        null,
                        A.map((w, R) =>
                          h.createElement(
                            Wr,
                            {
                              key: `${w.value}-${R}`,
                              hasChrome: !1,
                              tooltip: h.createElement(S4, {
                                note: w.keyword || w.value,
                              }),
                            },
                            h.createElement(ey, {
                              value: w[m],
                              active: E && la(w[m]) === la(E[m]),
                              onClick: () => y(w.value),
                            }),
                          ),
                        ),
                      ),
                  ),
                },
                h.createElement(ey, { value: p, style: { margin: 4 } }),
              ),
              h.createElement(T4, {
                id: _e(e),
                value: s,
                onChange: (w) => y(w.target.value),
                onFocus: (w) => w.target.select(),
                placeholder: 'Choose color...',
              }),
              s ? h.createElement(_4, { icon: 'markup', onClick: g }) : null,
            );
          }),
          (j4 = ay);
      });
    l();
    c();
    d();
    l();
    c();
    d();
    l();
    c();
    d();
    Ft();
    l();
    c();
    d();
    var PI = __STORYBOOK_API__,
      {
        ActiveTabs: II,
        Consumer: kI,
        ManagerContext: NI,
        Provider: LI,
        addons: ya,
        combineParameters: qI,
        controlOrMetaKey: jI,
        controlOrMetaSymbol: MI,
        eventMatchesShortcut: $I,
        eventToShortcut: UI,
        isMacLike: zI,
        isShortcutTaken: HI,
        keyToSymbol: GI,
        merge: WI,
        mockChannel: VI,
        optionOrAltSymbol: KI,
        shortcutMatchesShortcut: YI,
        shortcutToHumanString: JI,
        types: nu,
        useAddonState: XI,
        useArgTypes: ba,
        useArgs: au,
        useChannel: QI,
        useGlobalTypes: ZI,
        useGlobals: ou,
        useParameter: iu,
        useSharedState: ek,
        useStoryPrepared: tk,
        useStorybookApi: rk,
        useStorybookState: uu,
      } = __STORYBOOK_API__;
    sr();
    l();
    c();
    d();
    Pa();
    ka();
    Ft();
    sr();
    l();
    c();
    d();
    l();
    c();
    d();
    function Be() {
      return (
        (Be = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
        Be.apply(null, arguments)
      );
    }
    l();
    c();
    d();
    function bu(e) {
      if (e === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return e;
    }
    l();
    c();
    d();
    l();
    c();
    d();
    function et(e, t) {
      return (
        (et = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (r, n) {
              return (r.__proto__ = n), r;
            }),
        et(e, t)
      );
    }
    function Eu(e, t) {
      (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        et(e, t);
    }
    l();
    c();
    d();
    l();
    c();
    d();
    function Vr(e) {
      return (
        (Vr = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        Vr(e)
      );
    }
    l();
    c();
    d();
    function Au(e) {
      try {
        return Function.toString.call(e).indexOf('[native code]') !== -1;
      } catch {
        return typeof e == 'function';
      }
    }
    l();
    c();
    d();
    l();
    c();
    d();
    function Na() {
      try {
        var e = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch {}
      return (Na = function () {
        return !!e;
      })();
    }
    function vu(e, t, r) {
      if (Na()) return Reflect.construct.apply(null, arguments);
      var n = [null];
      n.push.apply(n, t);
      var a = new (e.bind.apply(e, n))();
      return r && et(a, r.prototype), a;
    }
    function Kr(e) {
      var t = typeof Map == 'function' ? new Map() : void 0;
      return (
        (Kr = function (n) {
          if (n === null || !Au(n)) return n;
          if (typeof n != 'function')
            throw new TypeError(
              'Super expression must either be null or a function',
            );
          if (t !== void 0) {
            if (t.has(n)) return t.get(n);
            t.set(n, a);
          }
          function a() {
            return vu(n, arguments, Vr(this).constructor);
          }
          return (
            (a.prototype = Object.create(n.prototype, {
              constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            et(a, n)
          );
        }),
        Kr(e)
      );
    }
    l();
    c();
    d();
    var Oe = (function (e) {
      Eu(t, e);
      function t(r) {
        var n;
        if (!0)
          n =
            e.call(
              this,
              'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
                r +
                ' for more information.',
            ) || this;
        else for (var a, o, i; i < a; i++);
        return bu(n);
      }
      return t;
    })(Kr(Error));
    function Du(e, t) {
      return e.substr(-t.length) === t;
    }
    var H2 = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
    function Cu(e) {
      if (typeof e != 'string') return e;
      var t = e.match(H2);
      return t ? parseFloat(e) : e;
    }
    var G2 = function (t) {
        return function (r, n) {
          n === void 0 && (n = '16px');
          var a = r,
            o = n;
          if (typeof r == 'string') {
            if (!Du(r, 'px')) throw new Oe(69, t, r);
            a = Cu(r);
          }
          if (typeof n == 'string') {
            if (!Du(n, 'px')) throw new Oe(70, t, n);
            o = Cu(n);
          }
          if (typeof a == 'string') throw new Oe(71, r, t);
          if (typeof o == 'string') throw new Oe(72, n, t);
          return '' + a / o + t;
        };
      },
      Su = G2,
      k7 = Su('em');
    var N7 = Su('rem');
    function La(e) {
      return Math.round(e * 255);
    }
    function W2(e, t, r) {
      return La(e) + ',' + La(t) + ',' + La(r);
    }
    function cr(e, t, r, n) {
      if ((n === void 0 && (n = W2), t === 0)) return n(r, r, r);
      var a = (((e % 360) + 360) % 360) / 60,
        o = (1 - Math.abs(2 * r - 1)) * t,
        i = o * (1 - Math.abs((a % 2) - 1)),
        u = 0,
        s = 0,
        p = 0;
      a >= 0 && a < 1
        ? ((u = o), (s = i))
        : a >= 1 && a < 2
          ? ((u = i), (s = o))
          : a >= 2 && a < 3
            ? ((s = o), (p = i))
            : a >= 3 && a < 4
              ? ((s = i), (p = o))
              : a >= 4 && a < 5
                ? ((u = i), (p = o))
                : a >= 5 && a < 6 && ((u = o), (p = i));
      var y = r - o / 2,
        E = u + y,
        m = s + y,
        g = p + y;
      return n(E, m, g);
    }
    var xu = {
      aliceblue: 'f0f8ff',
      antiquewhite: 'faebd7',
      aqua: '00ffff',
      aquamarine: '7fffd4',
      azure: 'f0ffff',
      beige: 'f5f5dc',
      bisque: 'ffe4c4',
      black: '000',
      blanchedalmond: 'ffebcd',
      blue: '0000ff',
      blueviolet: '8a2be2',
      brown: 'a52a2a',
      burlywood: 'deb887',
      cadetblue: '5f9ea0',
      chartreuse: '7fff00',
      chocolate: 'd2691e',
      coral: 'ff7f50',
      cornflowerblue: '6495ed',
      cornsilk: 'fff8dc',
      crimson: 'dc143c',
      cyan: '00ffff',
      darkblue: '00008b',
      darkcyan: '008b8b',
      darkgoldenrod: 'b8860b',
      darkgray: 'a9a9a9',
      darkgreen: '006400',
      darkgrey: 'a9a9a9',
      darkkhaki: 'bdb76b',
      darkmagenta: '8b008b',
      darkolivegreen: '556b2f',
      darkorange: 'ff8c00',
      darkorchid: '9932cc',
      darkred: '8b0000',
      darksalmon: 'e9967a',
      darkseagreen: '8fbc8f',
      darkslateblue: '483d8b',
      darkslategray: '2f4f4f',
      darkslategrey: '2f4f4f',
      darkturquoise: '00ced1',
      darkviolet: '9400d3',
      deeppink: 'ff1493',
      deepskyblue: '00bfff',
      dimgray: '696969',
      dimgrey: '696969',
      dodgerblue: '1e90ff',
      firebrick: 'b22222',
      floralwhite: 'fffaf0',
      forestgreen: '228b22',
      fuchsia: 'ff00ff',
      gainsboro: 'dcdcdc',
      ghostwhite: 'f8f8ff',
      gold: 'ffd700',
      goldenrod: 'daa520',
      gray: '808080',
      green: '008000',
      greenyellow: 'adff2f',
      grey: '808080',
      honeydew: 'f0fff0',
      hotpink: 'ff69b4',
      indianred: 'cd5c5c',
      indigo: '4b0082',
      ivory: 'fffff0',
      khaki: 'f0e68c',
      lavender: 'e6e6fa',
      lavenderblush: 'fff0f5',
      lawngreen: '7cfc00',
      lemonchiffon: 'fffacd',
      lightblue: 'add8e6',
      lightcoral: 'f08080',
      lightcyan: 'e0ffff',
      lightgoldenrodyellow: 'fafad2',
      lightgray: 'd3d3d3',
      lightgreen: '90ee90',
      lightgrey: 'd3d3d3',
      lightpink: 'ffb6c1',
      lightsalmon: 'ffa07a',
      lightseagreen: '20b2aa',
      lightskyblue: '87cefa',
      lightslategray: '789',
      lightslategrey: '789',
      lightsteelblue: 'b0c4de',
      lightyellow: 'ffffe0',
      lime: '0f0',
      limegreen: '32cd32',
      linen: 'faf0e6',
      magenta: 'f0f',
      maroon: '800000',
      mediumaquamarine: '66cdaa',
      mediumblue: '0000cd',
      mediumorchid: 'ba55d3',
      mediumpurple: '9370db',
      mediumseagreen: '3cb371',
      mediumslateblue: '7b68ee',
      mediumspringgreen: '00fa9a',
      mediumturquoise: '48d1cc',
      mediumvioletred: 'c71585',
      midnightblue: '191970',
      mintcream: 'f5fffa',
      mistyrose: 'ffe4e1',
      moccasin: 'ffe4b5',
      navajowhite: 'ffdead',
      navy: '000080',
      oldlace: 'fdf5e6',
      olive: '808000',
      olivedrab: '6b8e23',
      orange: 'ffa500',
      orangered: 'ff4500',
      orchid: 'da70d6',
      palegoldenrod: 'eee8aa',
      palegreen: '98fb98',
      paleturquoise: 'afeeee',
      palevioletred: 'db7093',
      papayawhip: 'ffefd5',
      peachpuff: 'ffdab9',
      peru: 'cd853f',
      pink: 'ffc0cb',
      plum: 'dda0dd',
      powderblue: 'b0e0e6',
      purple: '800080',
      rebeccapurple: '639',
      red: 'f00',
      rosybrown: 'bc8f8f',
      royalblue: '4169e1',
      saddlebrown: '8b4513',
      salmon: 'fa8072',
      sandybrown: 'f4a460',
      seagreen: '2e8b57',
      seashell: 'fff5ee',
      sienna: 'a0522d',
      silver: 'c0c0c0',
      skyblue: '87ceeb',
      slateblue: '6a5acd',
      slategray: '708090',
      slategrey: '708090',
      snow: 'fffafa',
      springgreen: '00ff7f',
      steelblue: '4682b4',
      tan: 'd2b48c',
      teal: '008080',
      thistle: 'd8bfd8',
      tomato: 'ff6347',
      turquoise: '40e0d0',
      violet: 'ee82ee',
      wheat: 'f5deb3',
      white: 'fff',
      whitesmoke: 'f5f5f5',
      yellow: 'ff0',
      yellowgreen: '9acd32',
    };
    function V2(e) {
      if (typeof e != 'string') return e;
      var t = e.toLowerCase();
      return xu[t] ? '#' + xu[t] : e;
    }
    var K2 = /^#[a-fA-F0-9]{6}$/,
      Y2 = /^#[a-fA-F0-9]{8}$/,
      J2 = /^#[a-fA-F0-9]{3}$/,
      X2 = /^#[a-fA-F0-9]{4}$/,
      qa =
        /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
      Q2 =
        /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
      Z2 =
        /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
      e1 =
        /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
    function Tt(e) {
      if (typeof e != 'string') throw new Oe(3);
      var t = V2(e);
      if (t.match(K2))
        return {
          red: parseInt('' + t[1] + t[2], 16),
          green: parseInt('' + t[3] + t[4], 16),
          blue: parseInt('' + t[5] + t[6], 16),
        };
      if (t.match(Y2)) {
        var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2));
        return {
          red: parseInt('' + t[1] + t[2], 16),
          green: parseInt('' + t[3] + t[4], 16),
          blue: parseInt('' + t[5] + t[6], 16),
          alpha: r,
        };
      }
      if (t.match(J2))
        return {
          red: parseInt('' + t[1] + t[1], 16),
          green: parseInt('' + t[2] + t[2], 16),
          blue: parseInt('' + t[3] + t[3], 16),
        };
      if (t.match(X2)) {
        var n = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2));
        return {
          red: parseInt('' + t[1] + t[1], 16),
          green: parseInt('' + t[2] + t[2], 16),
          blue: parseInt('' + t[3] + t[3], 16),
          alpha: n,
        };
      }
      var a = qa.exec(t);
      if (a)
        return {
          red: parseInt('' + a[1], 10),
          green: parseInt('' + a[2], 10),
          blue: parseInt('' + a[3], 10),
        };
      var o = Q2.exec(t.substring(0, 50));
      if (o)
        return {
          red: parseInt('' + o[1], 10),
          green: parseInt('' + o[2], 10),
          blue: parseInt('' + o[3], 10),
          alpha:
            parseFloat('' + o[4]) > 1
              ? parseFloat('' + o[4]) / 100
              : parseFloat('' + o[4]),
        };
      var i = Z2.exec(t);
      if (i) {
        var u = parseInt('' + i[1], 10),
          s = parseInt('' + i[2], 10) / 100,
          p = parseInt('' + i[3], 10) / 100,
          y = 'rgb(' + cr(u, s, p) + ')',
          E = qa.exec(y);
        if (!E) throw new Oe(4, t, y);
        return {
          red: parseInt('' + E[1], 10),
          green: parseInt('' + E[2], 10),
          blue: parseInt('' + E[3], 10),
        };
      }
      var m = e1.exec(t.substring(0, 50));
      if (m) {
        var g = parseInt('' + m[1], 10),
          A = parseInt('' + m[2], 10) / 100,
          b = parseInt('' + m[3], 10) / 100,
          x = 'rgb(' + cr(g, A, b) + ')',
          w = qa.exec(x);
        if (!w) throw new Oe(4, t, x);
        return {
          red: parseInt('' + w[1], 10),
          green: parseInt('' + w[2], 10),
          blue: parseInt('' + w[3], 10),
          alpha:
            parseFloat('' + m[4]) > 1
              ? parseFloat('' + m[4]) / 100
              : parseFloat('' + m[4]),
        };
      }
      throw new Oe(5);
    }
    function t1(e) {
      var t = e.red / 255,
        r = e.green / 255,
        n = e.blue / 255,
        a = Math.max(t, r, n),
        o = Math.min(t, r, n),
        i = (a + o) / 2;
      if (a === o)
        return e.alpha !== void 0
          ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
          : { hue: 0, saturation: 0, lightness: i };
      var u,
        s = a - o,
        p = i > 0.5 ? s / (2 - a - o) : s / (a + o);
      switch (a) {
        case t:
          u = (r - n) / s + (r < n ? 6 : 0);
          break;
        case r:
          u = (n - t) / s + 2;
          break;
        default:
          u = (t - r) / s + 4;
          break;
      }
      return (
        (u *= 60),
        e.alpha !== void 0
          ? { hue: u, saturation: p, lightness: i, alpha: e.alpha }
          : { hue: u, saturation: p, lightness: i }
      );
    }
    function tt(e) {
      return t1(Tt(e));
    }
    var r1 = function (t) {
        return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6]
          ? '#' + t[1] + t[3] + t[5]
          : t;
      },
      Ma = r1;
    function ht(e) {
      var t = e.toString(16);
      return t.length === 1 ? '0' + t : t;
    }
    function ja(e) {
      return ht(Math.round(e * 255));
    }
    function n1(e, t, r) {
      return Ma('#' + ja(e) + ja(t) + ja(r));
    }
    function Yr(e, t, r) {
      return cr(e, t, r, n1);
    }
    function a1(e, t, r) {
      if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
        return Yr(e, t, r);
      if (typeof e == 'object' && t === void 0 && r === void 0)
        return Yr(e.hue, e.saturation, e.lightness);
      throw new Oe(1);
    }
    function o1(e, t, r, n) {
      if (
        typeof e == 'number' &&
        typeof t == 'number' &&
        typeof r == 'number' &&
        typeof n == 'number'
      )
        return n >= 1 ? Yr(e, t, r) : 'rgba(' + cr(e, t, r) + ',' + n + ')';
      if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
        return e.alpha >= 1
          ? Yr(e.hue, e.saturation, e.lightness)
          : 'rgba(' +
              cr(e.hue, e.saturation, e.lightness) +
              ',' +
              e.alpha +
              ')';
      throw new Oe(2);
    }
    function $a(e, t, r) {
      if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
        return Ma('#' + ht(e) + ht(t) + ht(r));
      if (typeof e == 'object' && t === void 0 && r === void 0)
        return Ma('#' + ht(e.red) + ht(e.green) + ht(e.blue));
      throw new Oe(6);
    }
    function je(e, t, r, n) {
      if (typeof e == 'string' && typeof t == 'number') {
        var a = Tt(e);
        return 'rgba(' + a.red + ',' + a.green + ',' + a.blue + ',' + t + ')';
      } else {
        if (
          typeof e == 'number' &&
          typeof t == 'number' &&
          typeof r == 'number' &&
          typeof n == 'number'
        )
          return n >= 1
            ? $a(e, t, r)
            : 'rgba(' + e + ',' + t + ',' + r + ',' + n + ')';
        if (
          typeof e == 'object' &&
          t === void 0 &&
          r === void 0 &&
          n === void 0
        )
          return e.alpha >= 1
            ? $a(e.red, e.green, e.blue)
            : 'rgba(' +
                e.red +
                ',' +
                e.green +
                ',' +
                e.blue +
                ',' +
                e.alpha +
                ')';
      }
      throw new Oe(7);
    }
    var i1 = function (t) {
        return (
          typeof t.red == 'number' &&
          typeof t.green == 'number' &&
          typeof t.blue == 'number' &&
          (typeof t.alpha != 'number' || typeof t.alpha > 'u')
        );
      },
      u1 = function (t) {
        return (
          typeof t.red == 'number' &&
          typeof t.green == 'number' &&
          typeof t.blue == 'number' &&
          typeof t.alpha == 'number'
        );
      },
      s1 = function (t) {
        return (
          typeof t.hue == 'number' &&
          typeof t.saturation == 'number' &&
          typeof t.lightness == 'number' &&
          (typeof t.alpha != 'number' || typeof t.alpha > 'u')
        );
      },
      l1 = function (t) {
        return (
          typeof t.hue == 'number' &&
          typeof t.saturation == 'number' &&
          typeof t.lightness == 'number' &&
          typeof t.alpha == 'number'
        );
      };
    function rt(e) {
      if (typeof e != 'object') throw new Oe(8);
      if (u1(e)) return je(e);
      if (i1(e)) return $a(e);
      if (l1(e)) return o1(e);
      if (s1(e)) return a1(e);
      throw new Oe(8);
    }
    function Fu(e, t, r) {
      return function () {
        var a = r.concat(Array.prototype.slice.call(arguments));
        return a.length >= t ? e.apply(this, a) : Fu(e, t, a);
      };
    }
    function Ie(e) {
      return Fu(e, e.length, []);
    }
    function c1(e, t) {
      if (t === 'transparent') return t;
      var r = tt(t);
      return rt(Be({}, r, { hue: r.hue + parseFloat(e) }));
    }
    var L7 = Ie(c1);
    function _t(e, t, r) {
      return Math.max(e, Math.min(t, r));
    }
    function d1(e, t) {
      if (t === 'transparent') return t;
      var r = tt(t);
      return rt(
        Be({}, r, { lightness: _t(0, 1, r.lightness - parseFloat(e)) }),
      );
    }
    var p1 = Ie(d1),
      Me = p1;
    function f1(e, t) {
      if (t === 'transparent') return t;
      var r = tt(t);
      return rt(
        Be({}, r, { saturation: _t(0, 1, r.saturation - parseFloat(e)) }),
      );
    }
    var q7 = Ie(f1);
    function h1(e, t) {
      if (t === 'transparent') return t;
      var r = tt(t);
      return rt(
        Be({}, r, { lightness: _t(0, 1, r.lightness + parseFloat(e)) }),
      );
    }
    var m1 = Ie(h1),
      nt = m1;
    function g1(e, t, r) {
      if (t === 'transparent') return r;
      if (r === 'transparent') return t;
      if (e === 0) return r;
      var n = Tt(t),
        a = Be({}, n, { alpha: typeof n.alpha == 'number' ? n.alpha : 1 }),
        o = Tt(r),
        i = Be({}, o, { alpha: typeof o.alpha == 'number' ? o.alpha : 1 }),
        u = a.alpha - i.alpha,
        s = parseFloat(e) * 2 - 1,
        p = s * u === -1 ? s : s + u,
        y = 1 + s * u,
        E = (p / y + 1) / 2,
        m = 1 - E,
        g = {
          red: Math.floor(a.red * E + i.red * m),
          green: Math.floor(a.green * E + i.green * m),
          blue: Math.floor(a.blue * E + i.blue * m),
          alpha: a.alpha * parseFloat(e) + i.alpha * (1 - parseFloat(e)),
        };
      return je(g);
    }
    var y1 = Ie(g1),
      wu = y1;
    function b1(e, t) {
      if (t === 'transparent') return t;
      var r = Tt(t),
        n = typeof r.alpha == 'number' ? r.alpha : 1,
        a = Be({}, r, {
          alpha: _t(0, 1, (n * 100 + parseFloat(e) * 100) / 100),
        });
      return je(a);
    }
    var E1 = Ie(b1),
      dr = E1;
    function A1(e, t) {
      if (t === 'transparent') return t;
      var r = tt(t);
      return rt(
        Be({}, r, { saturation: _t(0, 1, r.saturation + parseFloat(e)) }),
      );
    }
    var j7 = Ie(A1);
    function v1(e, t) {
      return t === 'transparent'
        ? t
        : rt(Be({}, tt(t), { hue: parseFloat(e) }));
    }
    var M7 = Ie(v1);
    function D1(e, t) {
      return t === 'transparent'
        ? t
        : rt(Be({}, tt(t), { lightness: parseFloat(e) }));
    }
    var $7 = Ie(D1);
    function C1(e, t) {
      return t === 'transparent'
        ? t
        : rt(Be({}, tt(t), { saturation: parseFloat(e) }));
    }
    var U7 = Ie(C1);
    function x1(e, t) {
      return t === 'transparent' ? t : wu(parseFloat(e), 'rgb(0, 0, 0)', t);
    }
    var z7 = Ie(x1);
    function S1(e, t) {
      return t === 'transparent'
        ? t
        : wu(parseFloat(e), 'rgb(255, 255, 255)', t);
    }
    var H7 = Ie(S1);
    function F1(e, t) {
      if (t === 'transparent') return t;
      var r = Tt(t),
        n = typeof r.alpha == 'number' ? r.alpha : 1,
        a = Be({}, r, {
          alpha: _t(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
        });
      return je(a);
    }
    var w1 = Ie(F1),
      ce = w1;
    l();
    c();
    d();
    var oe = (() => {
      let e;
      return (
        typeof window < 'u'
          ? (e = window)
          : typeof globalThis < 'u'
            ? (e = globalThis)
            : typeof window < 'u'
              ? (e = window)
              : typeof self < 'u'
                ? (e = self)
                : (e = {}),
        e
      );
    })();
    var vy = pe(So(), 1);
    l();
    c();
    d();
    var bS = Object.create,
      $d = Object.defineProperty,
      ES = Object.getOwnPropertyDescriptor,
      AS = Object.getOwnPropertyNames,
      vS = Object.getPrototypeOf,
      DS = Object.prototype.hasOwnProperty,
      CS = (e, t) => () => (
        t || e((t = { exports: {} }).exports, t), t.exports
      ),
      xS = (e, t, r, n) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let a of AS(t))
            !DS.call(e, a) &&
              a !== r &&
              $d(e, a, {
                get: () => t[a],
                enumerable: !(n = ES(t, a)) || n.enumerable,
              });
        return e;
      },
      SS = (e, t, r) => (
        (r = e != null ? bS(vS(e)) : {}),
        xS(
          t || !e || !e.__esModule
            ? $d(r, 'default', { value: e, enumerable: !0 })
            : r,
          e,
        )
      ),
      FS = CS((e) => {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.isEqual = (function () {
            var t = Object.prototype.toString,
              r = Object.getPrototypeOf,
              n = Object.getOwnPropertySymbols
                ? function (a) {
                    return Object.keys(a).concat(
                      Object.getOwnPropertySymbols(a),
                    );
                  }
                : Object.keys;
            return function (a, o) {
              return (function i(u, s, p) {
                var y,
                  E,
                  m,
                  g = t.call(u),
                  A = t.call(s);
                if (u === s) return !0;
                if (u == null || s == null) return !1;
                if (p.indexOf(u) > -1 && p.indexOf(s) > -1) return !0;
                if (
                  (p.push(u, s),
                  g != A ||
                    ((y = n(u)),
                    (E = n(s)),
                    y.length != E.length ||
                      y.some(function (b) {
                        return !i(u[b], s[b], p);
                      })))
                )
                  return !1;
                switch (g.slice(8, -1)) {
                  case 'Symbol':
                    return u.valueOf() == s.valueOf();
                  case 'Date':
                  case 'Number':
                    return +u == +s || (+u != +u && +s != +s);
                  case 'RegExp':
                  case 'Function':
                  case 'String':
                  case 'Boolean':
                    return '' + u == '' + s;
                  case 'Set':
                  case 'Map':
                    (y = u.entries()), (E = s.entries());
                    do
                      if (!i((m = y.next()).value, E.next().value, p))
                        return !1;
                    while (!m.done);
                    return !0;
                  case 'ArrayBuffer':
                    (u = new Uint8Array(u)), (s = new Uint8Array(s));
                  case 'DataView':
                    (u = new Uint8Array(u.buffer)),
                      (s = new Uint8Array(s.buffer));
                  case 'Float32Array':
                  case 'Float64Array':
                  case 'Int8Array':
                  case 'Int16Array':
                  case 'Int32Array':
                  case 'Uint8Array':
                  case 'Uint16Array':
                  case 'Uint32Array':
                  case 'Uint8ClampedArray':
                  case 'Arguments':
                  case 'Array':
                    if (u.length != s.length) return !1;
                    for (m = 0; m < u.length; m++)
                      if (
                        (m in u || m in s) &&
                        (m in u != m in s || !i(u[m], s[m], p))
                      )
                        return !1;
                    return !0;
                  case 'Object':
                    return i(r(u), r(s), p);
                  default:
                    return !1;
                }
              })(a, o, []);
            };
          })());
      });
    var Md = SS(FS()),
      Ud = (e) => e.map((t) => typeof t < 'u').filter(Boolean).length,
      wS = (e, t) => {
        let { exists: r, eq: n, neq: a, truthy: o } = e;
        if (Ud([r, n, a, o]) > 1)
          throw new Error(
            `Invalid conditional test ${JSON.stringify({ exists: r, eq: n, neq: a })}`,
          );
        if (typeof n < 'u') return (0, Md.isEqual)(t, n);
        if (typeof a < 'u') return !(0, Md.isEqual)(t, a);
        if (typeof r < 'u') {
          let i = typeof t < 'u';
          return r ? i : !i;
        }
        return typeof o > 'u' || o ? !!t : !t;
      },
      Fo = (e, t, r) => {
        if (!e.if) return !0;
        let { arg: n, global: a } = e.if;
        if (Ud([n, a]) !== 1)
          throw new Error(
            `Invalid conditional value ${JSON.stringify({ arg: n, global: a })}`,
          );
        let o = n ? t[n] : r[a];
        return wS(e.if, o);
      };
    l();
    c();
    d();
    var EG = __STORYBOOK_CLIENT_LOGGER__,
      {
        deprecate: En,
        logger: ze,
        once: An,
        pretty: AG,
      } = __STORYBOOK_CLIENT_LOGGER__;
    l();
    c();
    d();
    Ft();
    function bt() {
      return (
        (bt = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
        bt.apply(this, arguments)
      );
    }
    var BS = ['children', 'options'],
      zd,
      Hd;
    (function (e) {
      (e.blockQuote = '0'),
        (e.breakLine = '1'),
        (e.breakThematic = '2'),
        (e.codeBlock = '3'),
        (e.codeFenced = '4'),
        (e.codeInline = '5'),
        (e.footnote = '6'),
        (e.footnoteReference = '7'),
        (e.gfmTask = '8'),
        (e.heading = '9'),
        (e.headingSetext = '10'),
        (e.htmlBlock = '11'),
        (e.htmlComment = '12'),
        (e.htmlSelfClosing = '13'),
        (e.image = '14'),
        (e.link = '15'),
        (e.linkAngleBraceStyleDetector = '16'),
        (e.linkBareUrlDetector = '17'),
        (e.linkMailtoDetector = '18'),
        (e.newlineCoalescer = '19'),
        (e.orderedList = '20'),
        (e.paragraph = '21'),
        (e.ref = '22'),
        (e.refImage = '23'),
        (e.refLink = '24'),
        (e.table = '25'),
        (e.tableSeparator = '26'),
        (e.text = '27'),
        (e.textBolded = '28'),
        (e.textEmphasized = '29'),
        (e.textEscaped = '30'),
        (e.textMarked = '31'),
        (e.textStrikethroughed = '32'),
        (e.unorderedList = '33');
    })(zd || (zd = {})),
      (function (e) {
        (e[(e.MAX = 0)] = 'MAX'),
          (e[(e.HIGH = 1)] = 'HIGH'),
          (e[(e.MED = 2)] = 'MED'),
          (e[(e.LOW = 3)] = 'LOW'),
          (e[(e.MIN = 4)] = 'MIN');
      })(Hd || (Hd = {}));
    var Gd = [
        'allowFullScreen',
        'allowTransparency',
        'autoComplete',
        'autoFocus',
        'autoPlay',
        'cellPadding',
        'cellSpacing',
        'charSet',
        'className',
        'classId',
        'colSpan',
        'contentEditable',
        'contextMenu',
        'crossOrigin',
        'encType',
        'formAction',
        'formEncType',
        'formMethod',
        'formNoValidate',
        'formTarget',
        'frameBorder',
        'hrefLang',
        'inputMode',
        'keyParams',
        'keyType',
        'marginHeight',
        'marginWidth',
        'maxLength',
        'mediaGroup',
        'minLength',
        'noValidate',
        'radioGroup',
        'readOnly',
        'rowSpan',
        'spellCheck',
        'srcDoc',
        'srcLang',
        'srcSet',
        'tabIndex',
        'useMap',
      ].reduce((e, t) => ((e[t.toLowerCase()] = t), e), { for: 'htmlFor' }),
      Wd = {
        amp: '&',
        apos: "'",
        gt: '>',
        lt: '<',
        nbsp: '\xA0',
        quot: '\u201C',
      },
      TS = ['style', 'script'],
      _S =
        /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
      OS = /mailto:/i,
      RS = /\n{2,}$/,
      Qd = /^(\s*>[\s\S]*?)(?=\n{2,})/,
      PS = /^ *> ?/gm,
      IS = /^ {2,}\n/,
      kS = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
      Zd = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
      ep = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
      NS = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
      LS = /^(?:\n *)*\n/,
      qS = /\r\n?/g,
      jS = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,
      MS = /^\[\^([^\]]+)]/,
      $S = /\f/g,
      US = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,
      zS = /^\s*?\[(x|\s)\]/,
      tp = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
      rp = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
      np = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
      Oo =
        /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,
      HS = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
      ap = /^<!--[\s\S]*?(?:-->)/,
      GS = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
      Ro =
        /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
      WS = /^\{.*\}$/,
      VS = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
      KS = /^<([^ >]+@[^ >]+)>/,
      YS = /^<([^ >]+:\/[^ >]+)>/,
      JS = /-([a-z])?/gi,
      op = /^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,
      XS = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
      QS = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
      ZS = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
      eF = /(\[|\])/g,
      tF = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
      rF = /\t/g,
      nF = /(^ *\||\| *$)/g,
      aF = /^ *:-+: *$/,
      oF = /^ *:-+ *$/,
      iF = /^ *-+: *$/,
      Dn =
        '((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)',
      uF = new RegExp(`^([*_])\\1${Dn}\\1\\1(?!\\1)`),
      sF = new RegExp(`^([*_])${Dn}\\1(?!\\1|\\w)`),
      lF = new RegExp(`^==${Dn}==`),
      cF = new RegExp(`^~~${Dn}~~`),
      dF = /^\\([^0-9A-Za-z\s])/,
      pF =
        /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
      fF = /^\n+/,
      hF = /^([ \t]*)/,
      mF = /\\([^\\])/g,
      Vd = / *\n+$/,
      gF = /(?:^|\n)( *)$/,
      Po = '(?:\\d+\\.)',
      Io = '(?:[*+-])';
    function ip(e) {
      return '( *)(' + (e === 1 ? Po : Io) + ') +';
    }
    var up = ip(1),
      sp = ip(2);
    function lp(e) {
      return new RegExp('^' + (e === 1 ? up : sp));
    }
    var yF = lp(1),
      bF = lp(2);
    function cp(e) {
      return new RegExp(
        '^' +
          (e === 1 ? up : sp) +
          '[^\\n]*(?:\\n(?!\\1' +
          (e === 1 ? Po : Io) +
          ' )[^\\n]*)*(\\n|$)',
        'gm',
      );
    }
    var dp = cp(1),
      pp = cp(2);
    function fp(e) {
      let t = e === 1 ? Po : Io;
      return new RegExp(
        '^( *)(' +
          t +
          ') [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1' +
          t +
          ' (?!' +
          t +
          ' ))\\n*|\\s*\\n*$)',
      );
    }
    var hp = fp(1),
      mp = fp(2);
    function Kd(e, t) {
      let r = t === 1,
        n = r ? hp : mp,
        a = r ? dp : pp,
        o = r ? yF : bF;
      return {
        match(i, u, s) {
          let p = gF.exec(s);
          return p && (u.list || (!u.inline && !u.simple))
            ? n.exec((i = p[1] + i))
            : null;
        },
        order: 1,
        parse(i, u, s) {
          let p = r ? +i[2] : void 0,
            y = i[0]
              .replace(
                RS,
                `
`,
              )
              .match(a),
            E = !1;
          return {
            items: y.map(function (m, g) {
              let A = o.exec(m)[0].length,
                b = new RegExp('^ {1,' + A + '}', 'gm'),
                x = m.replace(b, '').replace(o, ''),
                w = g === y.length - 1,
                R =
                  x.indexOf(`

`) !== -1 ||
                  (w && E);
              E = R;
              let I = s.inline,
                M = s.list,
                F;
              (s.list = !0),
                R
                  ? ((s.inline = !1),
                    (F = x.replace(
                      Vd,
                      `

`,
                    )))
                  : ((s.inline = !0), (F = x.replace(Vd, '')));
              let L = u(F, s);
              return (s.inline = I), (s.list = M), L;
            }),
            ordered: r,
            start: p,
          };
        },
        render: (i, u, s) =>
          e(
            i.ordered ? 'ol' : 'ul',
            { key: s.key, start: i.type === '20' ? i.start : void 0 },
            i.items.map(function (p, y) {
              return e('li', { key: y }, u(p, s));
            }),
          ),
      };
    }
    var EF = new RegExp(
        `^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`,
      ),
      AF = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
      gp = [Qd, Zd, ep, tp, np, rp, ap, op, dp, hp, pp, mp],
      vF = [...gp, /^[^\n]+(?:  \n|\n{2,})/, Oo, Ro];
    function DF(e) {
      return e
        .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, 'a')
        .replace(/[çÇ]/g, 'c')
        .replace(/[ðÐ]/g, 'd')
        .replace(/[ÈÉÊËéèêë]/g, 'e')
        .replace(/[ÏïÎîÍíÌì]/g, 'i')
        .replace(/[Ññ]/g, 'n')
        .replace(/[øØœŒÕõÔôÓóÒò]/g, 'o')
        .replace(/[ÜüÛûÚúÙù]/g, 'u')
        .replace(/[ŸÿÝý]/g, 'y')
        .replace(/[^a-z0-9- ]/gi, '')
        .replace(/ /gi, '-')
        .toLowerCase();
    }
    function CF(e) {
      return iF.test(e)
        ? 'right'
        : aF.test(e)
          ? 'center'
          : oF.test(e)
            ? 'left'
            : null;
    }
    function Yd(e, t, r, n) {
      let a = r.inTable;
      r.inTable = !0;
      let o = e
        .trim()
        .split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/)
        .reduce(
          (u, s) => (
            s.trim() === '|'
              ? u.push(n ? { type: '26' } : { type: '27', text: s })
              : s !== '' && u.push.apply(u, t(s, r)),
            u
          ),
          [],
        );
      r.inTable = a;
      let i = [[]];
      return (
        o.forEach(function (u, s) {
          u.type === '26'
            ? s !== 0 && s !== o.length - 1 && i.push([])
            : (u.type !== '27' ||
                (o[s + 1] != null && o[s + 1].type !== '26') ||
                (u.text = u.text.trimEnd()),
              i[i.length - 1].push(u));
        }),
        i
      );
    }
    function xF(e, t, r) {
      r.inline = !0;
      let n = e[2] ? e[2].replace(nF, '').split('|').map(CF) : [],
        a = e[3]
          ? (function (i, u, s) {
              return i
                .trim()
                .split(
                  `
`,
                )
                .map(function (p) {
                  return Yd(p, u, s, !0);
                });
            })(e[3], t, r)
          : [],
        o = Yd(e[1], t, r, !!a.length);
      return (
        (r.inline = !1),
        a.length
          ? { align: n, cells: a, header: o, type: '25' }
          : { children: o, type: '21' }
      );
    }
    function Jd(e, t) {
      return e.align[t] == null ? {} : { textAlign: e.align[t] };
    }
    function ot(e) {
      return function (t, r) {
        return r.inline ? e.exec(t) : null;
      };
    }
    function it(e) {
      return function (t, r) {
        return r.inline || r.simple ? e.exec(t) : null;
      };
    }
    function Xe(e) {
      return function (t, r) {
        return r.inline || r.simple ? null : e.exec(t);
      };
    }
    function Cr(e) {
      return function (t) {
        return e.exec(t);
      };
    }
    function SF(e, t, r) {
      if (
        t.inline ||
        t.simple ||
        (r &&
          !r.endsWith(`
`))
      )
        return null;
      let n = '';
      e.split(
        `
`,
      ).every(
        (o) =>
          !gp.some((i) => i.test(o)) &&
          ((n +=
            o +
            `
`),
          o.trim()),
      );
      let a = n.trimEnd();
      return a == '' ? null : [n, a];
    }
    function Mt(e) {
      try {
        if (
          decodeURIComponent(e)
            .replace(/[^A-Za-z0-9/:]/g, '')
            .match(/^\s*(javascript|vbscript|data(?!:image)):/i)
        )
          return;
      } catch {
        return null;
      }
      return e;
    }
    function Xd(e) {
      return e.replace(mF, '$1');
    }
    function vn(e, t, r) {
      let n = r.inline || !1,
        a = r.simple || !1;
      (r.inline = !0), (r.simple = !0);
      let o = e(t, r);
      return (r.inline = n), (r.simple = a), o;
    }
    function FF(e, t, r) {
      let n = r.inline || !1,
        a = r.simple || !1;
      (r.inline = !1), (r.simple = !0);
      let o = e(t, r);
      return (r.inline = n), (r.simple = a), o;
    }
    function wF(e, t, r) {
      let n = r.inline || !1;
      r.inline = !1;
      let a = e(t, r);
      return (r.inline = n), a;
    }
    var wo = (e, t, r) => ({ children: vn(t, e[1], r) });
    function Bo() {
      return {};
    }
    function To() {
      return null;
    }
    function BF(...e) {
      return e.filter(Boolean).join(' ');
    }
    function _o(e, t, r) {
      let n = e,
        a = t.split('.');
      for (; a.length && ((n = n[a[0]]), n !== void 0); ) a.shift();
      return n || r;
    }
    function TF(e = '', t = {}) {
      (t.overrides = t.overrides || {}),
        (t.slugify = t.slugify || DF),
        (t.namedCodesToUnicode = t.namedCodesToUnicode
          ? bt({}, Wd, t.namedCodesToUnicode)
          : Wd);
      let r = t.createElement || ga;
      function n(g, A, ...b) {
        let x = _o(t.overrides, `${g}.props`, {});
        return r(
          (function (w, R) {
            let I = _o(R, w);
            return I
              ? typeof I == 'function' ||
                (typeof I == 'object' && 'render' in I)
                ? I
                : _o(R, `${w}.component`, w)
              : w;
          })(g, t.overrides),
          bt({}, A, x, { className: BF(A?.className, x.className) || void 0 }),
          ...b,
        );
      }
      function a(g) {
        g = g.replace(US, '');
        let A = !1;
        t.forceInline ? (A = !0) : t.forceBlock || (A = tF.test(g) === !1);
        let b = y(
          p(
            A
              ? g
              : `${g.trimEnd().replace(fF, '')}

`,
            { inline: A },
          ),
        );
        for (; typeof b[b.length - 1] == 'string' && !b[b.length - 1].trim(); )
          b.pop();
        if (t.wrapper === null) return b;
        let x = t.wrapper || (A ? 'span' : 'div'),
          w;
        if (b.length > 1 || t.forceWrapper) w = b;
        else {
          if (b.length === 1)
            return (
              (w = b[0]),
              typeof w == 'string' ? n('span', { key: 'outer' }, w) : w
            );
          w = null;
        }
        return ga(x, { key: 'outer' }, w);
      }
      function o(g) {
        let A = g.match(_S);
        return A
          ? A.reduce(function (b, x, w) {
              let R = x.indexOf('=');
              if (R !== -1) {
                let I = (function (k) {
                    return (
                      k.indexOf('-') !== -1 &&
                        k.match(GS) === null &&
                        (k = k.replace(JS, function (z, K) {
                          return K.toUpperCase();
                        })),
                      k
                    );
                  })(x.slice(0, R)).trim(),
                  M = (function (k) {
                    let z = k[0];
                    return (z === '"' || z === "'") &&
                      k.length >= 2 &&
                      k[k.length - 1] === z
                      ? k.slice(1, -1)
                      : k;
                  })(x.slice(R + 1).trim()),
                  F = Gd[I] || I,
                  L = (b[F] = (function (k, z) {
                    return k === 'style'
                      ? z.split(/;\s?/).reduce(function (K, U) {
                          let se = U.slice(0, U.indexOf(':'));
                          return (
                            (K[
                              se
                                .trim()
                                .replace(/(-[a-z])/g, (ee) =>
                                  ee[1].toUpperCase(),
                                )
                            ] = U.slice(se.length + 1).trim()),
                            K
                          );
                        }, {})
                      : k === 'href' || k === 'src'
                        ? Mt(z)
                        : (z.match(WS) && (z = z.slice(1, z.length - 1)),
                          z === 'true' || (z !== 'false' && z));
                  })(I, M));
                typeof L == 'string' &&
                  (Oo.test(L) || Ro.test(L)) &&
                  (b[F] = fe(a(L.trim()), { key: w }));
              } else x !== 'style' && (b[Gd[x] || x] = !0);
              return b;
            }, {})
          : null;
      }
      let i = [],
        u = {},
        s = {
          0: {
            match: Xe(Qd),
            order: 1,
            parse: (g, A, b) => ({ children: A(g[0].replace(PS, ''), b) }),
            render: (g, A, b) =>
              n('blockquote', { key: b.key }, A(g.children, b)),
          },
          1: {
            match: Cr(IS),
            order: 1,
            parse: Bo,
            render: (g, A, b) => n('br', { key: b.key }),
          },
          2: {
            match: Xe(kS),
            order: 1,
            parse: Bo,
            render: (g, A, b) => n('hr', { key: b.key }),
          },
          3: {
            match: Xe(ep),
            order: 0,
            parse: (g) => ({
              lang: void 0,
              text: g[0].replace(/^ {4}/gm, '').replace(/\n+$/, ''),
            }),
            render: (g, A, b) =>
              n(
                'pre',
                { key: b.key },
                n(
                  'code',
                  bt({}, g.attrs, {
                    className: g.lang ? `lang-${g.lang}` : '',
                  }),
                  g.text,
                ),
              ),
          },
          4: {
            match: Xe(Zd),
            order: 0,
            parse: (g) => ({
              attrs: o(g[3] || ''),
              lang: g[2] || void 0,
              text: g[4],
              type: '3',
            }),
          },
          5: {
            match: it(NS),
            order: 3,
            parse: (g) => ({ text: g[2] }),
            render: (g, A, b) => n('code', { key: b.key }, g.text),
          },
          6: {
            match: Xe(jS),
            order: 0,
            parse: (g) => (i.push({ footnote: g[2], identifier: g[1] }), {}),
            render: To,
          },
          7: {
            match: ot(MS),
            order: 1,
            parse: (g) => ({ target: `#${t.slugify(g[1])}`, text: g[1] }),
            render: (g, A, b) =>
              n(
                'a',
                { key: b.key, href: Mt(g.target) },
                n('sup', { key: b.key }, g.text),
              ),
          },
          8: {
            match: ot(zS),
            order: 1,
            parse: (g) => ({ completed: g[1].toLowerCase() === 'x' }),
            render: (g, A, b) =>
              n('input', {
                checked: g.completed,
                key: b.key,
                readOnly: !0,
                type: 'checkbox',
              }),
          },
          9: {
            match: Xe(t.enforceAtxHeadings ? rp : tp),
            order: 1,
            parse: (g, A, b) => ({
              children: vn(A, g[2], b),
              id: t.slugify(g[2]),
              level: g[1].length,
            }),
            render: (g, A, b) =>
              n(`h${g.level}`, { id: g.id, key: b.key }, A(g.children, b)),
          },
          10: {
            match: Xe(np),
            order: 0,
            parse: (g, A, b) => ({
              children: vn(A, g[1], b),
              level: g[2] === '=' ? 1 : 2,
              type: '9',
            }),
          },
          11: {
            match: Cr(Oo),
            order: 1,
            parse(g, A, b) {
              let [, x] = g[3].match(hF),
                w = new RegExp(`^${x}`, 'gm'),
                R = g[3].replace(w, ''),
                I = ((M = R), vF.some((z) => z.test(M)) ? wF : vn);
              var M;
              let F = g[1].toLowerCase(),
                L = TS.indexOf(F) !== -1,
                k = {
                  attrs: o(g[2]),
                  noInnerParse: L,
                  tag: (L ? F : g[1]).trim(),
                };
              return (
                (b.inAnchor = b.inAnchor || F === 'a'),
                L ? (k.text = g[3]) : (k.children = I(A, R, b)),
                (b.inAnchor = !1),
                k
              );
            },
            render: (g, A, b) =>
              n(g.tag, bt({ key: b.key }, g.attrs), g.text || A(g.children, b)),
          },
          13: {
            match: Cr(Ro),
            order: 1,
            parse: (g) => ({ attrs: o(g[2] || ''), tag: g[1].trim() }),
            render: (g, A, b) => n(g.tag, bt({}, g.attrs, { key: b.key })),
          },
          12: { match: Cr(ap), order: 1, parse: () => ({}), render: To },
          14: {
            match: it(AF),
            order: 1,
            parse: (g) => ({ alt: g[1], target: Xd(g[2]), title: g[3] }),
            render: (g, A, b) =>
              n('img', {
                key: b.key,
                alt: g.alt || void 0,
                title: g.title || void 0,
                src: Mt(g.target),
              }),
          },
          15: {
            match: ot(EF),
            order: 3,
            parse: (g, A, b) => ({
              children: FF(A, g[1], b),
              target: Xd(g[2]),
              title: g[3],
            }),
            render: (g, A, b) =>
              n(
                'a',
                { key: b.key, href: Mt(g.target), title: g.title },
                A(g.children, b),
              ),
          },
          16: {
            match: ot(YS),
            order: 0,
            parse: (g) => ({
              children: [{ text: g[1], type: '27' }],
              target: g[1],
              type: '15',
            }),
          },
          17: {
            match: (g, A) => (A.inAnchor ? null : ot(VS)(g, A)),
            order: 0,
            parse: (g) => ({
              children: [{ text: g[1], type: '27' }],
              target: g[1],
              title: void 0,
              type: '15',
            }),
          },
          18: {
            match: ot(KS),
            order: 0,
            parse(g) {
              let A = g[1],
                b = g[1];
              return (
                OS.test(b) || (b = 'mailto:' + b),
                {
                  children: [{ text: A.replace('mailto:', ''), type: '27' }],
                  target: b,
                  type: '15',
                }
              );
            },
          },
          20: Kd(n, 1),
          33: Kd(n, 2),
          19: {
            match: Xe(LS),
            order: 3,
            parse: Bo,
            render: () => `
`,
          },
          21: {
            match: SF,
            order: 3,
            parse: wo,
            render: (g, A, b) => n('p', { key: b.key }, A(g.children, b)),
          },
          22: {
            match: ot(XS),
            order: 0,
            parse: (g) => ((u[g[1]] = { target: g[2], title: g[4] }), {}),
            render: To,
          },
          23: {
            match: it(QS),
            order: 0,
            parse: (g) => ({ alt: g[1] || void 0, ref: g[2] }),
            render: (g, A, b) =>
              u[g.ref]
                ? n('img', {
                    key: b.key,
                    alt: g.alt,
                    src: Mt(u[g.ref].target),
                    title: u[g.ref].title,
                  })
                : null,
          },
          24: {
            match: ot(ZS),
            order: 0,
            parse: (g, A, b) => ({
              children: A(g[1], b),
              fallbackChildren: A(g[0].replace(eF, '\\$1'), b),
              ref: g[2],
            }),
            render: (g, A, b) =>
              u[g.ref]
                ? n(
                    'a',
                    {
                      key: b.key,
                      href: Mt(u[g.ref].target),
                      title: u[g.ref].title,
                    },
                    A(g.children, b),
                  )
                : n('span', { key: b.key }, A(g.fallbackChildren, b)),
          },
          25: {
            match: Xe(op),
            order: 1,
            parse: xF,
            render(g, A, b) {
              let x = g;
              return n(
                'table',
                { key: b.key },
                n(
                  'thead',
                  null,
                  n(
                    'tr',
                    null,
                    x.header.map(function (w, R) {
                      return n('th', { key: R, style: Jd(x, R) }, A(w, b));
                    }),
                  ),
                ),
                n(
                  'tbody',
                  null,
                  x.cells.map(function (w, R) {
                    return n(
                      'tr',
                      { key: R },
                      w.map(function (I, M) {
                        return n('td', { key: M, style: Jd(x, M) }, A(I, b));
                      }),
                    );
                  }),
                ),
              );
            },
          },
          27: {
            match: Cr(pF),
            order: 4,
            parse: (g) => ({
              text: g[0].replace(HS, (A, b) =>
                t.namedCodesToUnicode[b] ? t.namedCodesToUnicode[b] : A,
              ),
            }),
            render: (g) => g.text,
          },
          28: {
            match: it(uF),
            order: 2,
            parse: (g, A, b) => ({ children: A(g[2], b) }),
            render: (g, A, b) => n('strong', { key: b.key }, A(g.children, b)),
          },
          29: {
            match: it(sF),
            order: 3,
            parse: (g, A, b) => ({ children: A(g[2], b) }),
            render: (g, A, b) => n('em', { key: b.key }, A(g.children, b)),
          },
          30: {
            match: it(dF),
            order: 1,
            parse: (g) => ({ text: g[1], type: '27' }),
          },
          31: {
            match: it(lF),
            order: 3,
            parse: wo,
            render: (g, A, b) => n('mark', { key: b.key }, A(g.children, b)),
          },
          32: {
            match: it(cF),
            order: 3,
            parse: wo,
            render: (g, A, b) => n('del', { key: b.key }, A(g.children, b)),
          },
        };
      t.disableParsingRawHTML === !0 && (delete s[11], delete s[13]);
      let p = (function (g) {
          let A = Object.keys(g);
          function b(x, w) {
            let R = [],
              I = '';
            for (; x; ) {
              let M = 0;
              for (; M < A.length; ) {
                let F = A[M],
                  L = g[F],
                  k = L.match(x, w, I);
                if (k) {
                  let z = k[0];
                  x = x.substring(z.length);
                  let K = L.parse(k, b, w);
                  K.type == null && (K.type = F), R.push(K), (I = z);
                  break;
                }
                M++;
              }
            }
            return R;
          }
          return (
            A.sort(function (x, w) {
              let R = g[x].order,
                I = g[w].order;
              return R !== I ? R - I : x < w ? -1 : 1;
            }),
            function (x, w) {
              return b(
                (function (R) {
                  return R.replace(
                    qS,
                    `
`,
                  )
                    .replace($S, '')
                    .replace(rF, '    ');
                })(x),
                w,
              );
            }
          );
        })(s),
        y =
          ((E = (function (g, A) {
            return function (b, x, w) {
              let R = g[b.type].render;
              return A ? A(() => R(b, x, w), b, x, w) : R(b, x, w);
            };
          })(s, t.renderRule)),
          function g(A, b = {}) {
            if (Array.isArray(A)) {
              let x = b.key,
                w = [],
                R = !1;
              for (let I = 0; I < A.length; I++) {
                b.key = I;
                let M = g(A[I], b),
                  F = typeof M == 'string';
                F && R ? (w[w.length - 1] += M) : M !== null && w.push(M),
                  (R = F);
              }
              return (b.key = x), w;
            }
            return E(A, g, b);
          });
      var E;
      let m = a(e);
      return i.length
        ? n(
            'div',
            null,
            m,
            n(
              'footer',
              { key: 'footer' },
              i.map(function (g) {
                return n(
                  'div',
                  { id: t.slugify(g.identifier), key: g.identifier },
                  g.identifier,
                  y(p(g.footnote, { inline: !0 })),
                );
              }),
            ),
          )
        : m;
    }
    var yp = (e) => {
      let { children: t = '', options: r } = e,
        n = (function (a, o) {
          if (a == null) return {};
          var i,
            u,
            s = {},
            p = Object.keys(a);
          for (u = 0; u < p.length; u++)
            o.indexOf((i = p[u])) >= 0 || (s[i] = a[i]);
          return s;
        })(e, BS);
      return fe(TF(t, r), n);
    };
    var Dy = pe(Cn(), 1),
      Cy = pe(qp(), 1),
      xy = pe(Hf(), 1);
    l();
    c();
    d();
    l();
    c();
    d();
    l();
    c();
    d();
    l();
    c();
    d();
    l();
    c();
    d();
    l();
    c();
    d();
    var rK = __STORYBOOK_CHANNELS__,
      {
        Channel: Lo,
        PostMessageTransport: nK,
        WebsocketTransport: aK,
        createBrowserChannel: v3,
        createPostMessageChannel: oK,
        createWebSocketChannel: iK,
      } = __STORYBOOK_CHANNELS__;
    l();
    c();
    d();
    var dK = __STORYBOOK_CORE_EVENTS__,
      {
        CHANNEL_CREATED: pK,
        CONFIG_ERROR: D3,
        CURRENT_STORY_WAS_SET: C3,
        DOCS_PREPARED: x3,
        DOCS_RENDERED: S3,
        FORCE_REMOUNT: F3,
        FORCE_RE_RENDER: qo,
        GLOBALS_UPDATED: Fn,
        IGNORED_EXCEPTION: fK,
        NAVIGATE_URL: Gf,
        PLAY_FUNCTION_THREW_EXCEPTION: w3,
        PRELOAD_ENTRIES: B3,
        PREVIEW_BUILDER_PROGRESS: hK,
        PREVIEW_KEYDOWN: T3,
        REGISTER_SUBSCRIPTION: mK,
        REQUEST_WHATS_NEW_DATA: gK,
        RESET_STORY_ARGS: wn,
        RESULT_WHATS_NEW_DATA: yK,
        SELECT_STORY: bK,
        SET_CONFIG: EK,
        SET_CURRENT_STORY: _3,
        SET_GLOBALS: O3,
        SET_INDEX: R3,
        SET_STORIES: AK,
        SET_WHATS_NEW_CACHE: vK,
        SHARED_STATE_CHANGED: P3,
        SHARED_STATE_SET: I3,
        STORIES_COLLAPSE_ALL: DK,
        STORIES_EXPAND_ALL: CK,
        STORY_ARGS_UPDATED: Bn,
        STORY_CHANGED: k3,
        STORY_ERRORED: N3,
        STORY_INDEX_INVALIDATED: L3,
        STORY_MISSING: q3,
        STORY_PREPARED: j3,
        STORY_RENDERED: Wf,
        STORY_RENDER_PHASE_CHANGED: M3,
        STORY_SPECIFIED: $3,
        STORY_THREW_EXCEPTION: U3,
        STORY_UNCHANGED: z3,
        TELEMETRY_ERROR: xK,
        TOGGLE_WHATS_NEW_NOTIFICATIONS: SK,
        UPDATE_GLOBALS: Vf,
        UPDATE_QUERY_PARAMS: H3,
        UPDATE_STORY_ARGS: Tn,
      } = __STORYBOOK_CORE_EVENTS__;
    var G3 = Object.create,
      Kf = Object.defineProperty,
      W3 = Object.getOwnPropertyDescriptor,
      Yf = Object.getOwnPropertyNames,
      V3 = Object.getPrototypeOf,
      K3 = Object.prototype.hasOwnProperty,
      He = (e, t) =>
        function () {
          return (
            t || (0, e[Yf(e)[0]])((t = { exports: {} }).exports, t), t.exports
          );
        },
      Y3 = (e, t, r, n) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let a of Yf(t))
            !K3.call(e, a) &&
              a !== r &&
              Kf(e, a, {
                get: () => t[a],
                enumerable: !(n = W3(t, a)) || n.enumerable,
              });
        return e;
      },
      Jf = (e, t, r) => (
        (r = e != null ? G3(V3(e)) : {}),
        Y3(
          t || !e || !e.__esModule
            ? Kf(r, 'default', { value: e, enumerable: !0 })
            : r,
          e,
        )
      );
    function Xf() {
      let e = { setHandler: () => {}, send: () => {} };
      return new Lo({ transport: e });
    }
    var J3 = class {
        constructor() {
          (this.getChannel = () => {
            if (!this.channel) {
              let e = Xf();
              return this.setChannel(e), e;
            }
            return this.channel;
          }),
            (this.getServerChannel = () => {
              if (!this.serverChannel)
                throw new Error('Accessing non-existent serverChannel');
              return this.serverChannel;
            }),
            (this.ready = () => this.promise),
            (this.hasChannel = () => !!this.channel),
            (this.hasServerChannel = () => !!this.serverChannel),
            (this.setChannel = (e) => {
              (this.channel = e), this.resolve();
            }),
            (this.setServerChannel = (e) => {
              this.serverChannel = e;
            }),
            (this.promise = new Promise((e) => {
              this.resolve = () => e(this.getChannel());
            }));
        }
      },
      jo = '__STORYBOOK_ADDONS_PREVIEW';
    function X3() {
      return oe[jo] || (oe[jo] = new J3()), oe[jo];
    }
    var _n = X3();
    var G0 = pe(Cn(), 1),
      Br = pe(On(), 1),
      sT = pe(P0(), 1),
      lT = pe(Pn(), 1);
    l();
    c();
    d();
    l();
    c();
    d();
    l();
    c();
    d();
    function Ut(e) {
      for (var t = [], r = 1; r < arguments.length; r++)
        t[r - 1] = arguments[r];
      var n = Array.from(typeof e == 'string' ? [e] : e);
      n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, '');
      var a = n.reduce(function (u, s) {
        var p = s.match(/\n([\t ]+|(?!\s).)/g);
        return p
          ? u.concat(
              p.map(function (y) {
                var E, m;
                return (m =
                  (E = y.match(/[\t ]/g)) === null || E === void 0
                    ? void 0
                    : E.length) !== null && m !== void 0
                  ? m
                  : 0;
              }),
            )
          : u;
      }, []);
      if (a.length) {
        var o = new RegExp(
          `
[	 ]{` +
            Math.min.apply(Math, a) +
            '}',
          'g',
        );
        n = n.map(function (u) {
          return u.replace(
            o,
            `
`,
          );
        });
      }
      n[0] = n[0].replace(/^\r?\n/, '');
      var i = n[0];
      return (
        t.forEach(function (u, s) {
          var p = i.match(/(?:^|\n)( *)$/),
            y = p ? p[1] : '',
            E = u;
          typeof u == 'string' &&
            u.includes(`
`) &&
            (E = String(u)
              .split(
                `
`,
              )
              .map(function (m, g) {
                return g === 0 ? m : '' + y + m;
              }).join(`
`)),
            (i += E + n[s + 1]);
        }),
        i
      );
    }
    var wr = Ut;
    var $B = ((e) => (
      (e.PREVIEW_CLIENT_LOGGER = 'PREVIEW_CLIENT-LOGGER'),
      (e.PREVIEW_CHANNELS = 'PREVIEW_CHANNELS'),
      (e.PREVIEW_CORE_EVENTS = 'PREVIEW_CORE-EVENTS'),
      (e.PREVIEW_INSTRUMENTER = 'PREVIEW_INSTRUMENTER'),
      (e.PREVIEW_API = 'PREVIEW_API'),
      (e.PREVIEW_REACT_DOM_SHIM = 'PREVIEW_REACT-DOM-SHIM'),
      (e.PREVIEW_ROUTER = 'PREVIEW_ROUTER'),
      (e.PREVIEW_THEMING = 'PREVIEW_THEMING'),
      (e.RENDERER_HTML = 'RENDERER_HTML'),
      (e.RENDERER_PREACT = 'RENDERER_PREACT'),
      (e.RENDERER_REACT = 'RENDERER_REACT'),
      (e.RENDERER_SERVER = 'RENDERER_SERVER'),
      (e.RENDERER_SVELTE = 'RENDERER_SVELTE'),
      (e.RENDERER_VUE = 'RENDERER_VUE'),
      (e.RENDERER_VUE3 = 'RENDERER_VUE3'),
      (e.RENDERER_WEB_COMPONENTS = 'RENDERER_WEB-COMPONENTS'),
      e
    ))($B || {});
    l();
    c();
    d();
    var Ln = pe(Mo(), 1);
    var W0 = pe(z0(), 1);
    var V0 = pe(So(), 1);
    var NJ = (0, G0.default)(1)((e) =>
      Object.values(e).reduce(
        (t, r) => ((t[r.importPath] = t[r.importPath] || r), t),
        {},
      ),
    );
    var LJ = Symbol('incompatible');
    var qJ = Symbol('Deeply equal');
    var cT = Ut`
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`,
      jJ = (0, W0.default)(() => {}, cT);
    var Et = (...e) => {
      let t = {},
        r = e.filter(Boolean),
        n = r.reduce(
          (a, o) => (
            Object.entries(o).forEach(([i, u]) => {
              let s = a[i];
              Array.isArray(u) || typeof s > 'u'
                ? (a[i] = u)
                : (0, Ln.default)(u) && (0, Ln.default)(s)
                  ? (t[i] = !0)
                  : typeof u < 'u' && (a[i] = u);
            }),
            a
          ),
          {},
        );
      return (
        Object.keys(t).forEach((a) => {
          let o = r
            .filter(Boolean)
            .map((i) => i[a])
            .filter((i) => typeof i < 'u');
          o.every((i) => (0, Ln.default)(i))
            ? (n[a] = Et(...o))
            : (n[a] = o[o.length - 1]);
        }),
        n
      );
    };
    var Uo = (e, t, r) => {
        let n = typeof e;
        switch (n) {
          case 'boolean':
          case 'string':
          case 'number':
          case 'function':
          case 'symbol':
            return { name: n };
        }
        return e
          ? r.has(e)
            ? (ze.warn(Ut`
        We've detected a cycle in arg '${t}'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/react/essentials/controls#fully-custom-args
      `),
              { name: 'other', value: 'cyclic object' })
            : (r.add(e),
              Array.isArray(e)
                ? {
                    name: 'array',
                    value:
                      e.length > 0
                        ? Uo(e[0], t, new Set(r))
                        : { name: 'other', value: 'unknown' },
                  }
                : {
                    name: 'object',
                    value: (0, Br.default)(e, (a) => Uo(a, t, new Set(r))),
                  })
          : { name: 'object', value: {} };
      },
      dT = (e) => {
        let { id: t, argTypes: r = {}, initialArgs: n = {} } = e,
          a = (0, Br.default)(n, (i, u) => ({
            name: u,
            type: Uo(i, `${t}.${u}`, new Set()),
          })),
          o = (0, Br.default)(r, (i, u) => ({ name: u }));
        return Et(a, o, r);
      };
    dT.secondPass = !0;
    var H0 = (e, t) => (Array.isArray(t) ? t.includes(e) : e.match(t)),
      _r = (e, t, r) =>
        !t && !r
          ? e
          : e &&
            (0, V0.default)(e, (n, a) => {
              let o = n.name || a;
              return (!t || H0(o, t)) && (!r || !H0(o, r));
            }),
      pT = (e, t, r) => {
        let { type: n, options: a } = e;
        if (n) {
          if (r.color && r.color.test(t)) {
            let o = n.name;
            if (o === 'string') return { control: { type: 'color' } };
            o !== 'enum' &&
              ze.warn(
                `Addon controls: Control of type color only supports string, received "${o}" instead`,
              );
          }
          if (r.date && r.date.test(t)) return { control: { type: 'date' } };
          switch (n.name) {
            case 'array':
              return { control: { type: 'object' } };
            case 'boolean':
              return { control: { type: 'boolean' } };
            case 'string':
              return { control: { type: 'text' } };
            case 'number':
              return { control: { type: 'number' } };
            case 'enum': {
              let { value: o } = n;
              return {
                control: { type: o?.length <= 5 ? 'radio' : 'select' },
                options: o,
              };
            }
            case 'function':
            case 'symbol':
              return null;
            default:
              return { control: { type: a ? 'select' : 'object' } };
          }
        }
      },
      K0 = (e) => {
        let {
          argTypes: t,
          parameters: {
            __isArgsStory: r,
            controls: {
              include: n = null,
              exclude: a = null,
              matchers: o = {},
            } = {},
          },
        } = e;
        if (!r) return t;
        let i = _r(t, n, a),
          u = (0, Br.default)(i, (s, p) => s?.type && pT(s, p, o));
        return Et(u, i);
      };
    K0.secondPass = !0;
    function zo(e) {
      return async (t, r, n) => {
        await e.reduceRight(
          (a, o) => async () => o(t, a, n),
          async () => r(n),
        )();
      };
    }
    function Tr(e, t) {
      return e.map((r) => r.default?.[t] ?? r[t]).filter(Boolean);
    }
    function In(e, t, r = {}) {
      return Tr(e, t).reduce(
        (n, a) => (r.reverseFileOrder ? [...a, ...n] : [...n, ...a]),
        [],
      );
    }
    function kn(e, t) {
      return Object.assign({}, ...Tr(e, t));
    }
    function Nn(e, t) {
      return Tr(e, t).pop();
    }
    function Ho(e) {
      let t = In(e, 'argTypesEnhancers'),
        r = Tr(e, 'runStep');
      return {
        parameters: Et(...Tr(e, 'parameters')),
        decorators: In(e, 'decorators', {
          reverseFileOrder: !(oe.FEATURES?.legacyDecoratorFileOrder ?? !1),
        }),
        args: kn(e, 'args'),
        argsEnhancers: In(e, 'argsEnhancers'),
        argTypes: kn(e, 'argTypes'),
        argTypesEnhancers: [
          ...t.filter((n) => !n.secondPass),
          ...t.filter((n) => n.secondPass),
        ],
        globals: kn(e, 'globals'),
        globalTypes: kn(e, 'globalTypes'),
        loaders: In(e, 'loaders'),
        render: Nn(e, 'render'),
        renderToCanvas: Nn(e, 'renderToCanvas'),
        renderToDOM: Nn(e, 'renderToDOM'),
        applyDecorators: Nn(e, 'applyDecorators'),
        runStep: zo(r),
      };
    }
    var MJ = Ho([]);
    var p_ = pe(Pn(), 1),
      f_ = pe(yi(), 1);
    l();
    c();
    d();
    var m_ = pe(Pn(), 1);
    var g_ = pe(yi(), 1),
      y_ = pe(Mo(), 1),
      Im = He({
        '../../node_modules/ansi-to-html/node_modules/entities/lib/maps/entities.json'(
          e,
          t,
        ) {
          t.exports = {
            Aacute: '\xC1',
            aacute: '\xE1',
            Abreve: '\u0102',
            abreve: '\u0103',
            ac: '\u223E',
            acd: '\u223F',
            acE: '\u223E\u0333',
            Acirc: '\xC2',
            acirc: '\xE2',
            acute: '\xB4',
            Acy: '\u0410',
            acy: '\u0430',
            AElig: '\xC6',
            aelig: '\xE6',
            af: '\u2061',
            Afr: '\u{1D504}',
            afr: '\u{1D51E}',
            Agrave: '\xC0',
            agrave: '\xE0',
            alefsym: '\u2135',
            aleph: '\u2135',
            Alpha: '\u0391',
            alpha: '\u03B1',
            Amacr: '\u0100',
            amacr: '\u0101',
            amalg: '\u2A3F',
            amp: '&',
            AMP: '&',
            andand: '\u2A55',
            And: '\u2A53',
            and: '\u2227',
            andd: '\u2A5C',
            andslope: '\u2A58',
            andv: '\u2A5A',
            ang: '\u2220',
            ange: '\u29A4',
            angle: '\u2220',
            angmsdaa: '\u29A8',
            angmsdab: '\u29A9',
            angmsdac: '\u29AA',
            angmsdad: '\u29AB',
            angmsdae: '\u29AC',
            angmsdaf: '\u29AD',
            angmsdag: '\u29AE',
            angmsdah: '\u29AF',
            angmsd: '\u2221',
            angrt: '\u221F',
            angrtvb: '\u22BE',
            angrtvbd: '\u299D',
            angsph: '\u2222',
            angst: '\xC5',
            angzarr: '\u237C',
            Aogon: '\u0104',
            aogon: '\u0105',
            Aopf: '\u{1D538}',
            aopf: '\u{1D552}',
            apacir: '\u2A6F',
            ap: '\u2248',
            apE: '\u2A70',
            ape: '\u224A',
            apid: '\u224B',
            apos: "'",
            ApplyFunction: '\u2061',
            approx: '\u2248',
            approxeq: '\u224A',
            Aring: '\xC5',
            aring: '\xE5',
            Ascr: '\u{1D49C}',
            ascr: '\u{1D4B6}',
            Assign: '\u2254',
            ast: '*',
            asymp: '\u2248',
            asympeq: '\u224D',
            Atilde: '\xC3',
            atilde: '\xE3',
            Auml: '\xC4',
            auml: '\xE4',
            awconint: '\u2233',
            awint: '\u2A11',
            backcong: '\u224C',
            backepsilon: '\u03F6',
            backprime: '\u2035',
            backsim: '\u223D',
            backsimeq: '\u22CD',
            Backslash: '\u2216',
            Barv: '\u2AE7',
            barvee: '\u22BD',
            barwed: '\u2305',
            Barwed: '\u2306',
            barwedge: '\u2305',
            bbrk: '\u23B5',
            bbrktbrk: '\u23B6',
            bcong: '\u224C',
            Bcy: '\u0411',
            bcy: '\u0431',
            bdquo: '\u201E',
            becaus: '\u2235',
            because: '\u2235',
            Because: '\u2235',
            bemptyv: '\u29B0',
            bepsi: '\u03F6',
            bernou: '\u212C',
            Bernoullis: '\u212C',
            Beta: '\u0392',
            beta: '\u03B2',
            beth: '\u2136',
            between: '\u226C',
            Bfr: '\u{1D505}',
            bfr: '\u{1D51F}',
            bigcap: '\u22C2',
            bigcirc: '\u25EF',
            bigcup: '\u22C3',
            bigodot: '\u2A00',
            bigoplus: '\u2A01',
            bigotimes: '\u2A02',
            bigsqcup: '\u2A06',
            bigstar: '\u2605',
            bigtriangledown: '\u25BD',
            bigtriangleup: '\u25B3',
            biguplus: '\u2A04',
            bigvee: '\u22C1',
            bigwedge: '\u22C0',
            bkarow: '\u290D',
            blacklozenge: '\u29EB',
            blacksquare: '\u25AA',
            blacktriangle: '\u25B4',
            blacktriangledown: '\u25BE',
            blacktriangleleft: '\u25C2',
            blacktriangleright: '\u25B8',
            blank: '\u2423',
            blk12: '\u2592',
            blk14: '\u2591',
            blk34: '\u2593',
            block: '\u2588',
            bne: '=\u20E5',
            bnequiv: '\u2261\u20E5',
            bNot: '\u2AED',
            bnot: '\u2310',
            Bopf: '\u{1D539}',
            bopf: '\u{1D553}',
            bot: '\u22A5',
            bottom: '\u22A5',
            bowtie: '\u22C8',
            boxbox: '\u29C9',
            boxdl: '\u2510',
            boxdL: '\u2555',
            boxDl: '\u2556',
            boxDL: '\u2557',
            boxdr: '\u250C',
            boxdR: '\u2552',
            boxDr: '\u2553',
            boxDR: '\u2554',
            boxh: '\u2500',
            boxH: '\u2550',
            boxhd: '\u252C',
            boxHd: '\u2564',
            boxhD: '\u2565',
            boxHD: '\u2566',
            boxhu: '\u2534',
            boxHu: '\u2567',
            boxhU: '\u2568',
            boxHU: '\u2569',
            boxminus: '\u229F',
            boxplus: '\u229E',
            boxtimes: '\u22A0',
            boxul: '\u2518',
            boxuL: '\u255B',
            boxUl: '\u255C',
            boxUL: '\u255D',
            boxur: '\u2514',
            boxuR: '\u2558',
            boxUr: '\u2559',
            boxUR: '\u255A',
            boxv: '\u2502',
            boxV: '\u2551',
            boxvh: '\u253C',
            boxvH: '\u256A',
            boxVh: '\u256B',
            boxVH: '\u256C',
            boxvl: '\u2524',
            boxvL: '\u2561',
            boxVl: '\u2562',
            boxVL: '\u2563',
            boxvr: '\u251C',
            boxvR: '\u255E',
            boxVr: '\u255F',
            boxVR: '\u2560',
            bprime: '\u2035',
            breve: '\u02D8',
            Breve: '\u02D8',
            brvbar: '\xA6',
            bscr: '\u{1D4B7}',
            Bscr: '\u212C',
            bsemi: '\u204F',
            bsim: '\u223D',
            bsime: '\u22CD',
            bsolb: '\u29C5',
            bsol: '\\',
            bsolhsub: '\u27C8',
            bull: '\u2022',
            bullet: '\u2022',
            bump: '\u224E',
            bumpE: '\u2AAE',
            bumpe: '\u224F',
            Bumpeq: '\u224E',
            bumpeq: '\u224F',
            Cacute: '\u0106',
            cacute: '\u0107',
            capand: '\u2A44',
            capbrcup: '\u2A49',
            capcap: '\u2A4B',
            cap: '\u2229',
            Cap: '\u22D2',
            capcup: '\u2A47',
            capdot: '\u2A40',
            CapitalDifferentialD: '\u2145',
            caps: '\u2229\uFE00',
            caret: '\u2041',
            caron: '\u02C7',
            Cayleys: '\u212D',
            ccaps: '\u2A4D',
            Ccaron: '\u010C',
            ccaron: '\u010D',
            Ccedil: '\xC7',
            ccedil: '\xE7',
            Ccirc: '\u0108',
            ccirc: '\u0109',
            Cconint: '\u2230',
            ccups: '\u2A4C',
            ccupssm: '\u2A50',
            Cdot: '\u010A',
            cdot: '\u010B',
            cedil: '\xB8',
            Cedilla: '\xB8',
            cemptyv: '\u29B2',
            cent: '\xA2',
            centerdot: '\xB7',
            CenterDot: '\xB7',
            cfr: '\u{1D520}',
            Cfr: '\u212D',
            CHcy: '\u0427',
            chcy: '\u0447',
            check: '\u2713',
            checkmark: '\u2713',
            Chi: '\u03A7',
            chi: '\u03C7',
            circ: '\u02C6',
            circeq: '\u2257',
            circlearrowleft: '\u21BA',
            circlearrowright: '\u21BB',
            circledast: '\u229B',
            circledcirc: '\u229A',
            circleddash: '\u229D',
            CircleDot: '\u2299',
            circledR: '\xAE',
            circledS: '\u24C8',
            CircleMinus: '\u2296',
            CirclePlus: '\u2295',
            CircleTimes: '\u2297',
            cir: '\u25CB',
            cirE: '\u29C3',
            cire: '\u2257',
            cirfnint: '\u2A10',
            cirmid: '\u2AEF',
            cirscir: '\u29C2',
            ClockwiseContourIntegral: '\u2232',
            CloseCurlyDoubleQuote: '\u201D',
            CloseCurlyQuote: '\u2019',
            clubs: '\u2663',
            clubsuit: '\u2663',
            colon: ':',
            Colon: '\u2237',
            Colone: '\u2A74',
            colone: '\u2254',
            coloneq: '\u2254',
            comma: ',',
            commat: '@',
            comp: '\u2201',
            compfn: '\u2218',
            complement: '\u2201',
            complexes: '\u2102',
            cong: '\u2245',
            congdot: '\u2A6D',
            Congruent: '\u2261',
            conint: '\u222E',
            Conint: '\u222F',
            ContourIntegral: '\u222E',
            copf: '\u{1D554}',
            Copf: '\u2102',
            coprod: '\u2210',
            Coproduct: '\u2210',
            copy: '\xA9',
            COPY: '\xA9',
            copysr: '\u2117',
            CounterClockwiseContourIntegral: '\u2233',
            crarr: '\u21B5',
            cross: '\u2717',
            Cross: '\u2A2F',
            Cscr: '\u{1D49E}',
            cscr: '\u{1D4B8}',
            csub: '\u2ACF',
            csube: '\u2AD1',
            csup: '\u2AD0',
            csupe: '\u2AD2',
            ctdot: '\u22EF',
            cudarrl: '\u2938',
            cudarrr: '\u2935',
            cuepr: '\u22DE',
            cuesc: '\u22DF',
            cularr: '\u21B6',
            cularrp: '\u293D',
            cupbrcap: '\u2A48',
            cupcap: '\u2A46',
            CupCap: '\u224D',
            cup: '\u222A',
            Cup: '\u22D3',
            cupcup: '\u2A4A',
            cupdot: '\u228D',
            cupor: '\u2A45',
            cups: '\u222A\uFE00',
            curarr: '\u21B7',
            curarrm: '\u293C',
            curlyeqprec: '\u22DE',
            curlyeqsucc: '\u22DF',
            curlyvee: '\u22CE',
            curlywedge: '\u22CF',
            curren: '\xA4',
            curvearrowleft: '\u21B6',
            curvearrowright: '\u21B7',
            cuvee: '\u22CE',
            cuwed: '\u22CF',
            cwconint: '\u2232',
            cwint: '\u2231',
            cylcty: '\u232D',
            dagger: '\u2020',
            Dagger: '\u2021',
            daleth: '\u2138',
            darr: '\u2193',
            Darr: '\u21A1',
            dArr: '\u21D3',
            dash: '\u2010',
            Dashv: '\u2AE4',
            dashv: '\u22A3',
            dbkarow: '\u290F',
            dblac: '\u02DD',
            Dcaron: '\u010E',
            dcaron: '\u010F',
            Dcy: '\u0414',
            dcy: '\u0434',
            ddagger: '\u2021',
            ddarr: '\u21CA',
            DD: '\u2145',
            dd: '\u2146',
            DDotrahd: '\u2911',
            ddotseq: '\u2A77',
            deg: '\xB0',
            Del: '\u2207',
            Delta: '\u0394',
            delta: '\u03B4',
            demptyv: '\u29B1',
            dfisht: '\u297F',
            Dfr: '\u{1D507}',
            dfr: '\u{1D521}',
            dHar: '\u2965',
            dharl: '\u21C3',
            dharr: '\u21C2',
            DiacriticalAcute: '\xB4',
            DiacriticalDot: '\u02D9',
            DiacriticalDoubleAcute: '\u02DD',
            DiacriticalGrave: '`',
            DiacriticalTilde: '\u02DC',
            diam: '\u22C4',
            diamond: '\u22C4',
            Diamond: '\u22C4',
            diamondsuit: '\u2666',
            diams: '\u2666',
            die: '\xA8',
            DifferentialD: '\u2146',
            digamma: '\u03DD',
            disin: '\u22F2',
            div: '\xF7',
            divide: '\xF7',
            divideontimes: '\u22C7',
            divonx: '\u22C7',
            DJcy: '\u0402',
            djcy: '\u0452',
            dlcorn: '\u231E',
            dlcrop: '\u230D',
            dollar: '$',
            Dopf: '\u{1D53B}',
            dopf: '\u{1D555}',
            Dot: '\xA8',
            dot: '\u02D9',
            DotDot: '\u20DC',
            doteq: '\u2250',
            doteqdot: '\u2251',
            DotEqual: '\u2250',
            dotminus: '\u2238',
            dotplus: '\u2214',
            dotsquare: '\u22A1',
            doublebarwedge: '\u2306',
            DoubleContourIntegral: '\u222F',
            DoubleDot: '\xA8',
            DoubleDownArrow: '\u21D3',
            DoubleLeftArrow: '\u21D0',
            DoubleLeftRightArrow: '\u21D4',
            DoubleLeftTee: '\u2AE4',
            DoubleLongLeftArrow: '\u27F8',
            DoubleLongLeftRightArrow: '\u27FA',
            DoubleLongRightArrow: '\u27F9',
            DoubleRightArrow: '\u21D2',
            DoubleRightTee: '\u22A8',
            DoubleUpArrow: '\u21D1',
            DoubleUpDownArrow: '\u21D5',
            DoubleVerticalBar: '\u2225',
            DownArrowBar: '\u2913',
            downarrow: '\u2193',
            DownArrow: '\u2193',
            Downarrow: '\u21D3',
            DownArrowUpArrow: '\u21F5',
            DownBreve: '\u0311',
            downdownarrows: '\u21CA',
            downharpoonleft: '\u21C3',
            downharpoonright: '\u21C2',
            DownLeftRightVector: '\u2950',
            DownLeftTeeVector: '\u295E',
            DownLeftVectorBar: '\u2956',
            DownLeftVector: '\u21BD',
            DownRightTeeVector: '\u295F',
            DownRightVectorBar: '\u2957',
            DownRightVector: '\u21C1',
            DownTeeArrow: '\u21A7',
            DownTee: '\u22A4',
            drbkarow: '\u2910',
            drcorn: '\u231F',
            drcrop: '\u230C',
            Dscr: '\u{1D49F}',
            dscr: '\u{1D4B9}',
            DScy: '\u0405',
            dscy: '\u0455',
            dsol: '\u29F6',
            Dstrok: '\u0110',
            dstrok: '\u0111',
            dtdot: '\u22F1',
            dtri: '\u25BF',
            dtrif: '\u25BE',
            duarr: '\u21F5',
            duhar: '\u296F',
            dwangle: '\u29A6',
            DZcy: '\u040F',
            dzcy: '\u045F',
            dzigrarr: '\u27FF',
            Eacute: '\xC9',
            eacute: '\xE9',
            easter: '\u2A6E',
            Ecaron: '\u011A',
            ecaron: '\u011B',
            Ecirc: '\xCA',
            ecirc: '\xEA',
            ecir: '\u2256',
            ecolon: '\u2255',
            Ecy: '\u042D',
            ecy: '\u044D',
            eDDot: '\u2A77',
            Edot: '\u0116',
            edot: '\u0117',
            eDot: '\u2251',
            ee: '\u2147',
            efDot: '\u2252',
            Efr: '\u{1D508}',
            efr: '\u{1D522}',
            eg: '\u2A9A',
            Egrave: '\xC8',
            egrave: '\xE8',
            egs: '\u2A96',
            egsdot: '\u2A98',
            el: '\u2A99',
            Element: '\u2208',
            elinters: '\u23E7',
            ell: '\u2113',
            els: '\u2A95',
            elsdot: '\u2A97',
            Emacr: '\u0112',
            emacr: '\u0113',
            empty: '\u2205',
            emptyset: '\u2205',
            EmptySmallSquare: '\u25FB',
            emptyv: '\u2205',
            EmptyVerySmallSquare: '\u25AB',
            emsp13: '\u2004',
            emsp14: '\u2005',
            emsp: '\u2003',
            ENG: '\u014A',
            eng: '\u014B',
            ensp: '\u2002',
            Eogon: '\u0118',
            eogon: '\u0119',
            Eopf: '\u{1D53C}',
            eopf: '\u{1D556}',
            epar: '\u22D5',
            eparsl: '\u29E3',
            eplus: '\u2A71',
            epsi: '\u03B5',
            Epsilon: '\u0395',
            epsilon: '\u03B5',
            epsiv: '\u03F5',
            eqcirc: '\u2256',
            eqcolon: '\u2255',
            eqsim: '\u2242',
            eqslantgtr: '\u2A96',
            eqslantless: '\u2A95',
            Equal: '\u2A75',
            equals: '=',
            EqualTilde: '\u2242',
            equest: '\u225F',
            Equilibrium: '\u21CC',
            equiv: '\u2261',
            equivDD: '\u2A78',
            eqvparsl: '\u29E5',
            erarr: '\u2971',
            erDot: '\u2253',
            escr: '\u212F',
            Escr: '\u2130',
            esdot: '\u2250',
            Esim: '\u2A73',
            esim: '\u2242',
            Eta: '\u0397',
            eta: '\u03B7',
            ETH: '\xD0',
            eth: '\xF0',
            Euml: '\xCB',
            euml: '\xEB',
            euro: '\u20AC',
            excl: '!',
            exist: '\u2203',
            Exists: '\u2203',
            expectation: '\u2130',
            exponentiale: '\u2147',
            ExponentialE: '\u2147',
            fallingdotseq: '\u2252',
            Fcy: '\u0424',
            fcy: '\u0444',
            female: '\u2640',
            ffilig: '\uFB03',
            fflig: '\uFB00',
            ffllig: '\uFB04',
            Ffr: '\u{1D509}',
            ffr: '\u{1D523}',
            filig: '\uFB01',
            FilledSmallSquare: '\u25FC',
            FilledVerySmallSquare: '\u25AA',
            fjlig: 'fj',
            flat: '\u266D',
            fllig: '\uFB02',
            fltns: '\u25B1',
            fnof: '\u0192',
            Fopf: '\u{1D53D}',
            fopf: '\u{1D557}',
            forall: '\u2200',
            ForAll: '\u2200',
            fork: '\u22D4',
            forkv: '\u2AD9',
            Fouriertrf: '\u2131',
            fpartint: '\u2A0D',
            frac12: '\xBD',
            frac13: '\u2153',
            frac14: '\xBC',
            frac15: '\u2155',
            frac16: '\u2159',
            frac18: '\u215B',
            frac23: '\u2154',
            frac25: '\u2156',
            frac34: '\xBE',
            frac35: '\u2157',
            frac38: '\u215C',
            frac45: '\u2158',
            frac56: '\u215A',
            frac58: '\u215D',
            frac78: '\u215E',
            frasl: '\u2044',
            frown: '\u2322',
            fscr: '\u{1D4BB}',
            Fscr: '\u2131',
            gacute: '\u01F5',
            Gamma: '\u0393',
            gamma: '\u03B3',
            Gammad: '\u03DC',
            gammad: '\u03DD',
            gap: '\u2A86',
            Gbreve: '\u011E',
            gbreve: '\u011F',
            Gcedil: '\u0122',
            Gcirc: '\u011C',
            gcirc: '\u011D',
            Gcy: '\u0413',
            gcy: '\u0433',
            Gdot: '\u0120',
            gdot: '\u0121',
            ge: '\u2265',
            gE: '\u2267',
            gEl: '\u2A8C',
            gel: '\u22DB',
            geq: '\u2265',
            geqq: '\u2267',
            geqslant: '\u2A7E',
            gescc: '\u2AA9',
            ges: '\u2A7E',
            gesdot: '\u2A80',
            gesdoto: '\u2A82',
            gesdotol: '\u2A84',
            gesl: '\u22DB\uFE00',
            gesles: '\u2A94',
            Gfr: '\u{1D50A}',
            gfr: '\u{1D524}',
            gg: '\u226B',
            Gg: '\u22D9',
            ggg: '\u22D9',
            gimel: '\u2137',
            GJcy: '\u0403',
            gjcy: '\u0453',
            gla: '\u2AA5',
            gl: '\u2277',
            glE: '\u2A92',
            glj: '\u2AA4',
            gnap: '\u2A8A',
            gnapprox: '\u2A8A',
            gne: '\u2A88',
            gnE: '\u2269',
            gneq: '\u2A88',
            gneqq: '\u2269',
            gnsim: '\u22E7',
            Gopf: '\u{1D53E}',
            gopf: '\u{1D558}',
            grave: '`',
            GreaterEqual: '\u2265',
            GreaterEqualLess: '\u22DB',
            GreaterFullEqual: '\u2267',
            GreaterGreater: '\u2AA2',
            GreaterLess: '\u2277',
            GreaterSlantEqual: '\u2A7E',
            GreaterTilde: '\u2273',
            Gscr: '\u{1D4A2}',
            gscr: '\u210A',
            gsim: '\u2273',
            gsime: '\u2A8E',
            gsiml: '\u2A90',
            gtcc: '\u2AA7',
            gtcir: '\u2A7A',
            gt: '>',
            GT: '>',
            Gt: '\u226B',
            gtdot: '\u22D7',
            gtlPar: '\u2995',
            gtquest: '\u2A7C',
            gtrapprox: '\u2A86',
            gtrarr: '\u2978',
            gtrdot: '\u22D7',
            gtreqless: '\u22DB',
            gtreqqless: '\u2A8C',
            gtrless: '\u2277',
            gtrsim: '\u2273',
            gvertneqq: '\u2269\uFE00',
            gvnE: '\u2269\uFE00',
            Hacek: '\u02C7',
            hairsp: '\u200A',
            half: '\xBD',
            hamilt: '\u210B',
            HARDcy: '\u042A',
            hardcy: '\u044A',
            harrcir: '\u2948',
            harr: '\u2194',
            hArr: '\u21D4',
            harrw: '\u21AD',
            Hat: '^',
            hbar: '\u210F',
            Hcirc: '\u0124',
            hcirc: '\u0125',
            hearts: '\u2665',
            heartsuit: '\u2665',
            hellip: '\u2026',
            hercon: '\u22B9',
            hfr: '\u{1D525}',
            Hfr: '\u210C',
            HilbertSpace: '\u210B',
            hksearow: '\u2925',
            hkswarow: '\u2926',
            hoarr: '\u21FF',
            homtht: '\u223B',
            hookleftarrow: '\u21A9',
            hookrightarrow: '\u21AA',
            hopf: '\u{1D559}',
            Hopf: '\u210D',
            horbar: '\u2015',
            HorizontalLine: '\u2500',
            hscr: '\u{1D4BD}',
            Hscr: '\u210B',
            hslash: '\u210F',
            Hstrok: '\u0126',
            hstrok: '\u0127',
            HumpDownHump: '\u224E',
            HumpEqual: '\u224F',
            hybull: '\u2043',
            hyphen: '\u2010',
            Iacute: '\xCD',
            iacute: '\xED',
            ic: '\u2063',
            Icirc: '\xCE',
            icirc: '\xEE',
            Icy: '\u0418',
            icy: '\u0438',
            Idot: '\u0130',
            IEcy: '\u0415',
            iecy: '\u0435',
            iexcl: '\xA1',
            iff: '\u21D4',
            ifr: '\u{1D526}',
            Ifr: '\u2111',
            Igrave: '\xCC',
            igrave: '\xEC',
            ii: '\u2148',
            iiiint: '\u2A0C',
            iiint: '\u222D',
            iinfin: '\u29DC',
            iiota: '\u2129',
            IJlig: '\u0132',
            ijlig: '\u0133',
            Imacr: '\u012A',
            imacr: '\u012B',
            image: '\u2111',
            ImaginaryI: '\u2148',
            imagline: '\u2110',
            imagpart: '\u2111',
            imath: '\u0131',
            Im: '\u2111',
            imof: '\u22B7',
            imped: '\u01B5',
            Implies: '\u21D2',
            incare: '\u2105',
            in: '\u2208',
            infin: '\u221E',
            infintie: '\u29DD',
            inodot: '\u0131',
            intcal: '\u22BA',
            int: '\u222B',
            Int: '\u222C',
            integers: '\u2124',
            Integral: '\u222B',
            intercal: '\u22BA',
            Intersection: '\u22C2',
            intlarhk: '\u2A17',
            intprod: '\u2A3C',
            InvisibleComma: '\u2063',
            InvisibleTimes: '\u2062',
            IOcy: '\u0401',
            iocy: '\u0451',
            Iogon: '\u012E',
            iogon: '\u012F',
            Iopf: '\u{1D540}',
            iopf: '\u{1D55A}',
            Iota: '\u0399',
            iota: '\u03B9',
            iprod: '\u2A3C',
            iquest: '\xBF',
            iscr: '\u{1D4BE}',
            Iscr: '\u2110',
            isin: '\u2208',
            isindot: '\u22F5',
            isinE: '\u22F9',
            isins: '\u22F4',
            isinsv: '\u22F3',
            isinv: '\u2208',
            it: '\u2062',
            Itilde: '\u0128',
            itilde: '\u0129',
            Iukcy: '\u0406',
            iukcy: '\u0456',
            Iuml: '\xCF',
            iuml: '\xEF',
            Jcirc: '\u0134',
            jcirc: '\u0135',
            Jcy: '\u0419',
            jcy: '\u0439',
            Jfr: '\u{1D50D}',
            jfr: '\u{1D527}',
            jmath: '\u0237',
            Jopf: '\u{1D541}',
            jopf: '\u{1D55B}',
            Jscr: '\u{1D4A5}',
            jscr: '\u{1D4BF}',
            Jsercy: '\u0408',
            jsercy: '\u0458',
            Jukcy: '\u0404',
            jukcy: '\u0454',
            Kappa: '\u039A',
            kappa: '\u03BA',
            kappav: '\u03F0',
            Kcedil: '\u0136',
            kcedil: '\u0137',
            Kcy: '\u041A',
            kcy: '\u043A',
            Kfr: '\u{1D50E}',
            kfr: '\u{1D528}',
            kgreen: '\u0138',
            KHcy: '\u0425',
            khcy: '\u0445',
            KJcy: '\u040C',
            kjcy: '\u045C',
            Kopf: '\u{1D542}',
            kopf: '\u{1D55C}',
            Kscr: '\u{1D4A6}',
            kscr: '\u{1D4C0}',
            lAarr: '\u21DA',
            Lacute: '\u0139',
            lacute: '\u013A',
            laemptyv: '\u29B4',
            lagran: '\u2112',
            Lambda: '\u039B',
            lambda: '\u03BB',
            lang: '\u27E8',
            Lang: '\u27EA',
            langd: '\u2991',
            langle: '\u27E8',
            lap: '\u2A85',
            Laplacetrf: '\u2112',
            laquo: '\xAB',
            larrb: '\u21E4',
            larrbfs: '\u291F',
            larr: '\u2190',
            Larr: '\u219E',
            lArr: '\u21D0',
            larrfs: '\u291D',
            larrhk: '\u21A9',
            larrlp: '\u21AB',
            larrpl: '\u2939',
            larrsim: '\u2973',
            larrtl: '\u21A2',
            latail: '\u2919',
            lAtail: '\u291B',
            lat: '\u2AAB',
            late: '\u2AAD',
            lates: '\u2AAD\uFE00',
            lbarr: '\u290C',
            lBarr: '\u290E',
            lbbrk: '\u2772',
            lbrace: '{',
            lbrack: '[',
            lbrke: '\u298B',
            lbrksld: '\u298F',
            lbrkslu: '\u298D',
            Lcaron: '\u013D',
            lcaron: '\u013E',
            Lcedil: '\u013B',
            lcedil: '\u013C',
            lceil: '\u2308',
            lcub: '{',
            Lcy: '\u041B',
            lcy: '\u043B',
            ldca: '\u2936',
            ldquo: '\u201C',
            ldquor: '\u201E',
            ldrdhar: '\u2967',
            ldrushar: '\u294B',
            ldsh: '\u21B2',
            le: '\u2264',
            lE: '\u2266',
            LeftAngleBracket: '\u27E8',
            LeftArrowBar: '\u21E4',
            leftarrow: '\u2190',
            LeftArrow: '\u2190',
            Leftarrow: '\u21D0',
            LeftArrowRightArrow: '\u21C6',
            leftarrowtail: '\u21A2',
            LeftCeiling: '\u2308',
            LeftDoubleBracket: '\u27E6',
            LeftDownTeeVector: '\u2961',
            LeftDownVectorBar: '\u2959',
            LeftDownVector: '\u21C3',
            LeftFloor: '\u230A',
            leftharpoondown: '\u21BD',
            leftharpoonup: '\u21BC',
            leftleftarrows: '\u21C7',
            leftrightarrow: '\u2194',
            LeftRightArrow: '\u2194',
            Leftrightarrow: '\u21D4',
            leftrightarrows: '\u21C6',
            leftrightharpoons: '\u21CB',
            leftrightsquigarrow: '\u21AD',
            LeftRightVector: '\u294E',
            LeftTeeArrow: '\u21A4',
            LeftTee: '\u22A3',
            LeftTeeVector: '\u295A',
            leftthreetimes: '\u22CB',
            LeftTriangleBar: '\u29CF',
            LeftTriangle: '\u22B2',
            LeftTriangleEqual: '\u22B4',
            LeftUpDownVector: '\u2951',
            LeftUpTeeVector: '\u2960',
            LeftUpVectorBar: '\u2958',
            LeftUpVector: '\u21BF',
            LeftVectorBar: '\u2952',
            LeftVector: '\u21BC',
            lEg: '\u2A8B',
            leg: '\u22DA',
            leq: '\u2264',
            leqq: '\u2266',
            leqslant: '\u2A7D',
            lescc: '\u2AA8',
            les: '\u2A7D',
            lesdot: '\u2A7F',
            lesdoto: '\u2A81',
            lesdotor: '\u2A83',
            lesg: '\u22DA\uFE00',
            lesges: '\u2A93',
            lessapprox: '\u2A85',
            lessdot: '\u22D6',
            lesseqgtr: '\u22DA',
            lesseqqgtr: '\u2A8B',
            LessEqualGreater: '\u22DA',
            LessFullEqual: '\u2266',
            LessGreater: '\u2276',
            lessgtr: '\u2276',
            LessLess: '\u2AA1',
            lesssim: '\u2272',
            LessSlantEqual: '\u2A7D',
            LessTilde: '\u2272',
            lfisht: '\u297C',
            lfloor: '\u230A',
            Lfr: '\u{1D50F}',
            lfr: '\u{1D529}',
            lg: '\u2276',
            lgE: '\u2A91',
            lHar: '\u2962',
            lhard: '\u21BD',
            lharu: '\u21BC',
            lharul: '\u296A',
            lhblk: '\u2584',
            LJcy: '\u0409',
            ljcy: '\u0459',
            llarr: '\u21C7',
            ll: '\u226A',
            Ll: '\u22D8',
            llcorner: '\u231E',
            Lleftarrow: '\u21DA',
            llhard: '\u296B',
            lltri: '\u25FA',
            Lmidot: '\u013F',
            lmidot: '\u0140',
            lmoustache: '\u23B0',
            lmoust: '\u23B0',
            lnap: '\u2A89',
            lnapprox: '\u2A89',
            lne: '\u2A87',
            lnE: '\u2268',
            lneq: '\u2A87',
            lneqq: '\u2268',
            lnsim: '\u22E6',
            loang: '\u27EC',
            loarr: '\u21FD',
            lobrk: '\u27E6',
            longleftarrow: '\u27F5',
            LongLeftArrow: '\u27F5',
            Longleftarrow: '\u27F8',
            longleftrightarrow: '\u27F7',
            LongLeftRightArrow: '\u27F7',
            Longleftrightarrow: '\u27FA',
            longmapsto: '\u27FC',
            longrightarrow: '\u27F6',
            LongRightArrow: '\u27F6',
            Longrightarrow: '\u27F9',
            looparrowleft: '\u21AB',
            looparrowright: '\u21AC',
            lopar: '\u2985',
            Lopf: '\u{1D543}',
            lopf: '\u{1D55D}',
            loplus: '\u2A2D',
            lotimes: '\u2A34',
            lowast: '\u2217',
            lowbar: '_',
            LowerLeftArrow: '\u2199',
            LowerRightArrow: '\u2198',
            loz: '\u25CA',
            lozenge: '\u25CA',
            lozf: '\u29EB',
            lpar: '(',
            lparlt: '\u2993',
            lrarr: '\u21C6',
            lrcorner: '\u231F',
            lrhar: '\u21CB',
            lrhard: '\u296D',
            lrm: '\u200E',
            lrtri: '\u22BF',
            lsaquo: '\u2039',
            lscr: '\u{1D4C1}',
            Lscr: '\u2112',
            lsh: '\u21B0',
            Lsh: '\u21B0',
            lsim: '\u2272',
            lsime: '\u2A8D',
            lsimg: '\u2A8F',
            lsqb: '[',
            lsquo: '\u2018',
            lsquor: '\u201A',
            Lstrok: '\u0141',
            lstrok: '\u0142',
            ltcc: '\u2AA6',
            ltcir: '\u2A79',
            lt: '<',
            LT: '<',
            Lt: '\u226A',
            ltdot: '\u22D6',
            lthree: '\u22CB',
            ltimes: '\u22C9',
            ltlarr: '\u2976',
            ltquest: '\u2A7B',
            ltri: '\u25C3',
            ltrie: '\u22B4',
            ltrif: '\u25C2',
            ltrPar: '\u2996',
            lurdshar: '\u294A',
            luruhar: '\u2966',
            lvertneqq: '\u2268\uFE00',
            lvnE: '\u2268\uFE00',
            macr: '\xAF',
            male: '\u2642',
            malt: '\u2720',
            maltese: '\u2720',
            Map: '\u2905',
            map: '\u21A6',
            mapsto: '\u21A6',
            mapstodown: '\u21A7',
            mapstoleft: '\u21A4',
            mapstoup: '\u21A5',
            marker: '\u25AE',
            mcomma: '\u2A29',
            Mcy: '\u041C',
            mcy: '\u043C',
            mdash: '\u2014',
            mDDot: '\u223A',
            measuredangle: '\u2221',
            MediumSpace: '\u205F',
            Mellintrf: '\u2133',
            Mfr: '\u{1D510}',
            mfr: '\u{1D52A}',
            mho: '\u2127',
            micro: '\xB5',
            midast: '*',
            midcir: '\u2AF0',
            mid: '\u2223',
            middot: '\xB7',
            minusb: '\u229F',
            minus: '\u2212',
            minusd: '\u2238',
            minusdu: '\u2A2A',
            MinusPlus: '\u2213',
            mlcp: '\u2ADB',
            mldr: '\u2026',
            mnplus: '\u2213',
            models: '\u22A7',
            Mopf: '\u{1D544}',
            mopf: '\u{1D55E}',
            mp: '\u2213',
            mscr: '\u{1D4C2}',
            Mscr: '\u2133',
            mstpos: '\u223E',
            Mu: '\u039C',
            mu: '\u03BC',
            multimap: '\u22B8',
            mumap: '\u22B8',
            nabla: '\u2207',
            Nacute: '\u0143',
            nacute: '\u0144',
            nang: '\u2220\u20D2',
            nap: '\u2249',
            napE: '\u2A70\u0338',
            napid: '\u224B\u0338',
            napos: '\u0149',
            napprox: '\u2249',
            natural: '\u266E',
            naturals: '\u2115',
            natur: '\u266E',
            nbsp: '\xA0',
            nbump: '\u224E\u0338',
            nbumpe: '\u224F\u0338',
            ncap: '\u2A43',
            Ncaron: '\u0147',
            ncaron: '\u0148',
            Ncedil: '\u0145',
            ncedil: '\u0146',
            ncong: '\u2247',
            ncongdot: '\u2A6D\u0338',
            ncup: '\u2A42',
            Ncy: '\u041D',
            ncy: '\u043D',
            ndash: '\u2013',
            nearhk: '\u2924',
            nearr: '\u2197',
            neArr: '\u21D7',
            nearrow: '\u2197',
            ne: '\u2260',
            nedot: '\u2250\u0338',
            NegativeMediumSpace: '\u200B',
            NegativeThickSpace: '\u200B',
            NegativeThinSpace: '\u200B',
            NegativeVeryThinSpace: '\u200B',
            nequiv: '\u2262',
            nesear: '\u2928',
            nesim: '\u2242\u0338',
            NestedGreaterGreater: '\u226B',
            NestedLessLess: '\u226A',
            NewLine: `
`,
            nexist: '\u2204',
            nexists: '\u2204',
            Nfr: '\u{1D511}',
            nfr: '\u{1D52B}',
            ngE: '\u2267\u0338',
            nge: '\u2271',
            ngeq: '\u2271',
            ngeqq: '\u2267\u0338',
            ngeqslant: '\u2A7E\u0338',
            nges: '\u2A7E\u0338',
            nGg: '\u22D9\u0338',
            ngsim: '\u2275',
            nGt: '\u226B\u20D2',
            ngt: '\u226F',
            ngtr: '\u226F',
            nGtv: '\u226B\u0338',
            nharr: '\u21AE',
            nhArr: '\u21CE',
            nhpar: '\u2AF2',
            ni: '\u220B',
            nis: '\u22FC',
            nisd: '\u22FA',
            niv: '\u220B',
            NJcy: '\u040A',
            njcy: '\u045A',
            nlarr: '\u219A',
            nlArr: '\u21CD',
            nldr: '\u2025',
            nlE: '\u2266\u0338',
            nle: '\u2270',
            nleftarrow: '\u219A',
            nLeftarrow: '\u21CD',
            nleftrightarrow: '\u21AE',
            nLeftrightarrow: '\u21CE',
            nleq: '\u2270',
            nleqq: '\u2266\u0338',
            nleqslant: '\u2A7D\u0338',
            nles: '\u2A7D\u0338',
            nless: '\u226E',
            nLl: '\u22D8\u0338',
            nlsim: '\u2274',
            nLt: '\u226A\u20D2',
            nlt: '\u226E',
            nltri: '\u22EA',
            nltrie: '\u22EC',
            nLtv: '\u226A\u0338',
            nmid: '\u2224',
            NoBreak: '\u2060',
            NonBreakingSpace: '\xA0',
            nopf: '\u{1D55F}',
            Nopf: '\u2115',
            Not: '\u2AEC',
            not: '\xAC',
            NotCongruent: '\u2262',
            NotCupCap: '\u226D',
            NotDoubleVerticalBar: '\u2226',
            NotElement: '\u2209',
            NotEqual: '\u2260',
            NotEqualTilde: '\u2242\u0338',
            NotExists: '\u2204',
            NotGreater: '\u226F',
            NotGreaterEqual: '\u2271',
            NotGreaterFullEqual: '\u2267\u0338',
            NotGreaterGreater: '\u226B\u0338',
            NotGreaterLess: '\u2279',
            NotGreaterSlantEqual: '\u2A7E\u0338',
            NotGreaterTilde: '\u2275',
            NotHumpDownHump: '\u224E\u0338',
            NotHumpEqual: '\u224F\u0338',
            notin: '\u2209',
            notindot: '\u22F5\u0338',
            notinE: '\u22F9\u0338',
            notinva: '\u2209',
            notinvb: '\u22F7',
            notinvc: '\u22F6',
            NotLeftTriangleBar: '\u29CF\u0338',
            NotLeftTriangle: '\u22EA',
            NotLeftTriangleEqual: '\u22EC',
            NotLess: '\u226E',
            NotLessEqual: '\u2270',
            NotLessGreater: '\u2278',
            NotLessLess: '\u226A\u0338',
            NotLessSlantEqual: '\u2A7D\u0338',
            NotLessTilde: '\u2274',
            NotNestedGreaterGreater: '\u2AA2\u0338',
            NotNestedLessLess: '\u2AA1\u0338',
            notni: '\u220C',
            notniva: '\u220C',
            notnivb: '\u22FE',
            notnivc: '\u22FD',
            NotPrecedes: '\u2280',
            NotPrecedesEqual: '\u2AAF\u0338',
            NotPrecedesSlantEqual: '\u22E0',
            NotReverseElement: '\u220C',
            NotRightTriangleBar: '\u29D0\u0338',
            NotRightTriangle: '\u22EB',
            NotRightTriangleEqual: '\u22ED',
            NotSquareSubset: '\u228F\u0338',
            NotSquareSubsetEqual: '\u22E2',
            NotSquareSuperset: '\u2290\u0338',
            NotSquareSupersetEqual: '\u22E3',
            NotSubset: '\u2282\u20D2',
            NotSubsetEqual: '\u2288',
            NotSucceeds: '\u2281',
            NotSucceedsEqual: '\u2AB0\u0338',
            NotSucceedsSlantEqual: '\u22E1',
            NotSucceedsTilde: '\u227F\u0338',
            NotSuperset: '\u2283\u20D2',
            NotSupersetEqual: '\u2289',
            NotTilde: '\u2241',
            NotTildeEqual: '\u2244',
            NotTildeFullEqual: '\u2247',
            NotTildeTilde: '\u2249',
            NotVerticalBar: '\u2224',
            nparallel: '\u2226',
            npar: '\u2226',
            nparsl: '\u2AFD\u20E5',
            npart: '\u2202\u0338',
            npolint: '\u2A14',
            npr: '\u2280',
            nprcue: '\u22E0',
            nprec: '\u2280',
            npreceq: '\u2AAF\u0338',
            npre: '\u2AAF\u0338',
            nrarrc: '\u2933\u0338',
            nrarr: '\u219B',
            nrArr: '\u21CF',
            nrarrw: '\u219D\u0338',
            nrightarrow: '\u219B',
            nRightarrow: '\u21CF',
            nrtri: '\u22EB',
            nrtrie: '\u22ED',
            nsc: '\u2281',
            nsccue: '\u22E1',
            nsce: '\u2AB0\u0338',
            Nscr: '\u{1D4A9}',
            nscr: '\u{1D4C3}',
            nshortmid: '\u2224',
            nshortparallel: '\u2226',
            nsim: '\u2241',
            nsime: '\u2244',
            nsimeq: '\u2244',
            nsmid: '\u2224',
            nspar: '\u2226',
            nsqsube: '\u22E2',
            nsqsupe: '\u22E3',
            nsub: '\u2284',
            nsubE: '\u2AC5\u0338',
            nsube: '\u2288',
            nsubset: '\u2282\u20D2',
            nsubseteq: '\u2288',
            nsubseteqq: '\u2AC5\u0338',
            nsucc: '\u2281',
            nsucceq: '\u2AB0\u0338',
            nsup: '\u2285',
            nsupE: '\u2AC6\u0338',
            nsupe: '\u2289',
            nsupset: '\u2283\u20D2',
            nsupseteq: '\u2289',
            nsupseteqq: '\u2AC6\u0338',
            ntgl: '\u2279',
            Ntilde: '\xD1',
            ntilde: '\xF1',
            ntlg: '\u2278',
            ntriangleleft: '\u22EA',
            ntrianglelefteq: '\u22EC',
            ntriangleright: '\u22EB',
            ntrianglerighteq: '\u22ED',
            Nu: '\u039D',
            nu: '\u03BD',
            num: '#',
            numero: '\u2116',
            numsp: '\u2007',
            nvap: '\u224D\u20D2',
            nvdash: '\u22AC',
            nvDash: '\u22AD',
            nVdash: '\u22AE',
            nVDash: '\u22AF',
            nvge: '\u2265\u20D2',
            nvgt: '>\u20D2',
            nvHarr: '\u2904',
            nvinfin: '\u29DE',
            nvlArr: '\u2902',
            nvle: '\u2264\u20D2',
            nvlt: '<\u20D2',
            nvltrie: '\u22B4\u20D2',
            nvrArr: '\u2903',
            nvrtrie: '\u22B5\u20D2',
            nvsim: '\u223C\u20D2',
            nwarhk: '\u2923',
            nwarr: '\u2196',
            nwArr: '\u21D6',
            nwarrow: '\u2196',
            nwnear: '\u2927',
            Oacute: '\xD3',
            oacute: '\xF3',
            oast: '\u229B',
            Ocirc: '\xD4',
            ocirc: '\xF4',
            ocir: '\u229A',
            Ocy: '\u041E',
            ocy: '\u043E',
            odash: '\u229D',
            Odblac: '\u0150',
            odblac: '\u0151',
            odiv: '\u2A38',
            odot: '\u2299',
            odsold: '\u29BC',
            OElig: '\u0152',
            oelig: '\u0153',
            ofcir: '\u29BF',
            Ofr: '\u{1D512}',
            ofr: '\u{1D52C}',
            ogon: '\u02DB',
            Ograve: '\xD2',
            ograve: '\xF2',
            ogt: '\u29C1',
            ohbar: '\u29B5',
            ohm: '\u03A9',
            oint: '\u222E',
            olarr: '\u21BA',
            olcir: '\u29BE',
            olcross: '\u29BB',
            oline: '\u203E',
            olt: '\u29C0',
            Omacr: '\u014C',
            omacr: '\u014D',
            Omega: '\u03A9',
            omega: '\u03C9',
            Omicron: '\u039F',
            omicron: '\u03BF',
            omid: '\u29B6',
            ominus: '\u2296',
            Oopf: '\u{1D546}',
            oopf: '\u{1D560}',
            opar: '\u29B7',
            OpenCurlyDoubleQuote: '\u201C',
            OpenCurlyQuote: '\u2018',
            operp: '\u29B9',
            oplus: '\u2295',
            orarr: '\u21BB',
            Or: '\u2A54',
            or: '\u2228',
            ord: '\u2A5D',
            order: '\u2134',
            orderof: '\u2134',
            ordf: '\xAA',
            ordm: '\xBA',
            origof: '\u22B6',
            oror: '\u2A56',
            orslope: '\u2A57',
            orv: '\u2A5B',
            oS: '\u24C8',
            Oscr: '\u{1D4AA}',
            oscr: '\u2134',
            Oslash: '\xD8',
            oslash: '\xF8',
            osol: '\u2298',
            Otilde: '\xD5',
            otilde: '\xF5',
            otimesas: '\u2A36',
            Otimes: '\u2A37',
            otimes: '\u2297',
            Ouml: '\xD6',
            ouml: '\xF6',
            ovbar: '\u233D',
            OverBar: '\u203E',
            OverBrace: '\u23DE',
            OverBracket: '\u23B4',
            OverParenthesis: '\u23DC',
            para: '\xB6',
            parallel: '\u2225',
            par: '\u2225',
            parsim: '\u2AF3',
            parsl: '\u2AFD',
            part: '\u2202',
            PartialD: '\u2202',
            Pcy: '\u041F',
            pcy: '\u043F',
            percnt: '%',
            period: '.',
            permil: '\u2030',
            perp: '\u22A5',
            pertenk: '\u2031',
            Pfr: '\u{1D513}',
            pfr: '\u{1D52D}',
            Phi: '\u03A6',
            phi: '\u03C6',
            phiv: '\u03D5',
            phmmat: '\u2133',
            phone: '\u260E',
            Pi: '\u03A0',
            pi: '\u03C0',
            pitchfork: '\u22D4',
            piv: '\u03D6',
            planck: '\u210F',
            planckh: '\u210E',
            plankv: '\u210F',
            plusacir: '\u2A23',
            plusb: '\u229E',
            pluscir: '\u2A22',
            plus: '+',
            plusdo: '\u2214',
            plusdu: '\u2A25',
            pluse: '\u2A72',
            PlusMinus: '\xB1',
            plusmn: '\xB1',
            plussim: '\u2A26',
            plustwo: '\u2A27',
            pm: '\xB1',
            Poincareplane: '\u210C',
            pointint: '\u2A15',
            popf: '\u{1D561}',
            Popf: '\u2119',
            pound: '\xA3',
            prap: '\u2AB7',
            Pr: '\u2ABB',
            pr: '\u227A',
            prcue: '\u227C',
            precapprox: '\u2AB7',
            prec: '\u227A',
            preccurlyeq: '\u227C',
            Precedes: '\u227A',
            PrecedesEqual: '\u2AAF',
            PrecedesSlantEqual: '\u227C',
            PrecedesTilde: '\u227E',
            preceq: '\u2AAF',
            precnapprox: '\u2AB9',
            precneqq: '\u2AB5',
            precnsim: '\u22E8',
            pre: '\u2AAF',
            prE: '\u2AB3',
            precsim: '\u227E',
            prime: '\u2032',
            Prime: '\u2033',
            primes: '\u2119',
            prnap: '\u2AB9',
            prnE: '\u2AB5',
            prnsim: '\u22E8',
            prod: '\u220F',
            Product: '\u220F',
            profalar: '\u232E',
            profline: '\u2312',
            profsurf: '\u2313',
            prop: '\u221D',
            Proportional: '\u221D',
            Proportion: '\u2237',
            propto: '\u221D',
            prsim: '\u227E',
            prurel: '\u22B0',
            Pscr: '\u{1D4AB}',
            pscr: '\u{1D4C5}',
            Psi: '\u03A8',
            psi: '\u03C8',
            puncsp: '\u2008',
            Qfr: '\u{1D514}',
            qfr: '\u{1D52E}',
            qint: '\u2A0C',
            qopf: '\u{1D562}',
            Qopf: '\u211A',
            qprime: '\u2057',
            Qscr: '\u{1D4AC}',
            qscr: '\u{1D4C6}',
            quaternions: '\u210D',
            quatint: '\u2A16',
            quest: '?',
            questeq: '\u225F',
            quot: '"',
            QUOT: '"',
            rAarr: '\u21DB',
            race: '\u223D\u0331',
            Racute: '\u0154',
            racute: '\u0155',
            radic: '\u221A',
            raemptyv: '\u29B3',
            rang: '\u27E9',
            Rang: '\u27EB',
            rangd: '\u2992',
            range: '\u29A5',
            rangle: '\u27E9',
            raquo: '\xBB',
            rarrap: '\u2975',
            rarrb: '\u21E5',
            rarrbfs: '\u2920',
            rarrc: '\u2933',
            rarr: '\u2192',
            Rarr: '\u21A0',
            rArr: '\u21D2',
            rarrfs: '\u291E',
            rarrhk: '\u21AA',
            rarrlp: '\u21AC',
            rarrpl: '\u2945',
            rarrsim: '\u2974',
            Rarrtl: '\u2916',
            rarrtl: '\u21A3',
            rarrw: '\u219D',
            ratail: '\u291A',
            rAtail: '\u291C',
            ratio: '\u2236',
            rationals: '\u211A',
            rbarr: '\u290D',
            rBarr: '\u290F',
            RBarr: '\u2910',
            rbbrk: '\u2773',
            rbrace: '}',
            rbrack: ']',
            rbrke: '\u298C',
            rbrksld: '\u298E',
            rbrkslu: '\u2990',
            Rcaron: '\u0158',
            rcaron: '\u0159',
            Rcedil: '\u0156',
            rcedil: '\u0157',
            rceil: '\u2309',
            rcub: '}',
            Rcy: '\u0420',
            rcy: '\u0440',
            rdca: '\u2937',
            rdldhar: '\u2969',
            rdquo: '\u201D',
            rdquor: '\u201D',
            rdsh: '\u21B3',
            real: '\u211C',
            realine: '\u211B',
            realpart: '\u211C',
            reals: '\u211D',
            Re: '\u211C',
            rect: '\u25AD',
            reg: '\xAE',
            REG: '\xAE',
            ReverseElement: '\u220B',
            ReverseEquilibrium: '\u21CB',
            ReverseUpEquilibrium: '\u296F',
            rfisht: '\u297D',
            rfloor: '\u230B',
            rfr: '\u{1D52F}',
            Rfr: '\u211C',
            rHar: '\u2964',
            rhard: '\u21C1',
            rharu: '\u21C0',
            rharul: '\u296C',
            Rho: '\u03A1',
            rho: '\u03C1',
            rhov: '\u03F1',
            RightAngleBracket: '\u27E9',
            RightArrowBar: '\u21E5',
            rightarrow: '\u2192',
            RightArrow: '\u2192',
            Rightarrow: '\u21D2',
            RightArrowLeftArrow: '\u21C4',
            rightarrowtail: '\u21A3',
            RightCeiling: '\u2309',
            RightDoubleBracket: '\u27E7',
            RightDownTeeVector: '\u295D',
            RightDownVectorBar: '\u2955',
            RightDownVector: '\u21C2',
            RightFloor: '\u230B',
            rightharpoondown: '\u21C1',
            rightharpoonup: '\u21C0',
            rightleftarrows: '\u21C4',
            rightleftharpoons: '\u21CC',
            rightrightarrows: '\u21C9',
            rightsquigarrow: '\u219D',
            RightTeeArrow: '\u21A6',
            RightTee: '\u22A2',
            RightTeeVector: '\u295B',
            rightthreetimes: '\u22CC',
            RightTriangleBar: '\u29D0',
            RightTriangle: '\u22B3',
            RightTriangleEqual: '\u22B5',
            RightUpDownVector: '\u294F',
            RightUpTeeVector: '\u295C',
            RightUpVectorBar: '\u2954',
            RightUpVector: '\u21BE',
            RightVectorBar: '\u2953',
            RightVector: '\u21C0',
            ring: '\u02DA',
            risingdotseq: '\u2253',
            rlarr: '\u21C4',
            rlhar: '\u21CC',
            rlm: '\u200F',
            rmoustache: '\u23B1',
            rmoust: '\u23B1',
            rnmid: '\u2AEE',
            roang: '\u27ED',
            roarr: '\u21FE',
            robrk: '\u27E7',
            ropar: '\u2986',
            ropf: '\u{1D563}',
            Ropf: '\u211D',
            roplus: '\u2A2E',
            rotimes: '\u2A35',
            RoundImplies: '\u2970',
            rpar: ')',
            rpargt: '\u2994',
            rppolint: '\u2A12',
            rrarr: '\u21C9',
            Rrightarrow: '\u21DB',
            rsaquo: '\u203A',
            rscr: '\u{1D4C7}',
            Rscr: '\u211B',
            rsh: '\u21B1',
            Rsh: '\u21B1',
            rsqb: ']',
            rsquo: '\u2019',
            rsquor: '\u2019',
            rthree: '\u22CC',
            rtimes: '\u22CA',
            rtri: '\u25B9',
            rtrie: '\u22B5',
            rtrif: '\u25B8',
            rtriltri: '\u29CE',
            RuleDelayed: '\u29F4',
            ruluhar: '\u2968',
            rx: '\u211E',
            Sacute: '\u015A',
            sacute: '\u015B',
            sbquo: '\u201A',
            scap: '\u2AB8',
            Scaron: '\u0160',
            scaron: '\u0161',
            Sc: '\u2ABC',
            sc: '\u227B',
            sccue: '\u227D',
            sce: '\u2AB0',
            scE: '\u2AB4',
            Scedil: '\u015E',
            scedil: '\u015F',
            Scirc: '\u015C',
            scirc: '\u015D',
            scnap: '\u2ABA',
            scnE: '\u2AB6',
            scnsim: '\u22E9',
            scpolint: '\u2A13',
            scsim: '\u227F',
            Scy: '\u0421',
            scy: '\u0441',
            sdotb: '\u22A1',
            sdot: '\u22C5',
            sdote: '\u2A66',
            searhk: '\u2925',
            searr: '\u2198',
            seArr: '\u21D8',
            searrow: '\u2198',
            sect: '\xA7',
            semi: ';',
            seswar: '\u2929',
            setminus: '\u2216',
            setmn: '\u2216',
            sext: '\u2736',
            Sfr: '\u{1D516}',
            sfr: '\u{1D530}',
            sfrown: '\u2322',
            sharp: '\u266F',
            SHCHcy: '\u0429',
            shchcy: '\u0449',
            SHcy: '\u0428',
            shcy: '\u0448',
            ShortDownArrow: '\u2193',
            ShortLeftArrow: '\u2190',
            shortmid: '\u2223',
            shortparallel: '\u2225',
            ShortRightArrow: '\u2192',
            ShortUpArrow: '\u2191',
            shy: '\xAD',
            Sigma: '\u03A3',
            sigma: '\u03C3',
            sigmaf: '\u03C2',
            sigmav: '\u03C2',
            sim: '\u223C',
            simdot: '\u2A6A',
            sime: '\u2243',
            simeq: '\u2243',
            simg: '\u2A9E',
            simgE: '\u2AA0',
            siml: '\u2A9D',
            simlE: '\u2A9F',
            simne: '\u2246',
            simplus: '\u2A24',
            simrarr: '\u2972',
            slarr: '\u2190',
            SmallCircle: '\u2218',
            smallsetminus: '\u2216',
            smashp: '\u2A33',
            smeparsl: '\u29E4',
            smid: '\u2223',
            smile: '\u2323',
            smt: '\u2AAA',
            smte: '\u2AAC',
            smtes: '\u2AAC\uFE00',
            SOFTcy: '\u042C',
            softcy: '\u044C',
            solbar: '\u233F',
            solb: '\u29C4',
            sol: '/',
            Sopf: '\u{1D54A}',
            sopf: '\u{1D564}',
            spades: '\u2660',
            spadesuit: '\u2660',
            spar: '\u2225',
            sqcap: '\u2293',
            sqcaps: '\u2293\uFE00',
            sqcup: '\u2294',
            sqcups: '\u2294\uFE00',
            Sqrt: '\u221A',
            sqsub: '\u228F',
            sqsube: '\u2291',
            sqsubset: '\u228F',
            sqsubseteq: '\u2291',
            sqsup: '\u2290',
            sqsupe: '\u2292',
            sqsupset: '\u2290',
            sqsupseteq: '\u2292',
            square: '\u25A1',
            Square: '\u25A1',
            SquareIntersection: '\u2293',
            SquareSubset: '\u228F',
            SquareSubsetEqual: '\u2291',
            SquareSuperset: '\u2290',
            SquareSupersetEqual: '\u2292',
            SquareUnion: '\u2294',
            squarf: '\u25AA',
            squ: '\u25A1',
            squf: '\u25AA',
            srarr: '\u2192',
            Sscr: '\u{1D4AE}',
            sscr: '\u{1D4C8}',
            ssetmn: '\u2216',
            ssmile: '\u2323',
            sstarf: '\u22C6',
            Star: '\u22C6',
            star: '\u2606',
            starf: '\u2605',
            straightepsilon: '\u03F5',
            straightphi: '\u03D5',
            strns: '\xAF',
            sub: '\u2282',
            Sub: '\u22D0',
            subdot: '\u2ABD',
            subE: '\u2AC5',
            sube: '\u2286',
            subedot: '\u2AC3',
            submult: '\u2AC1',
            subnE: '\u2ACB',
            subne: '\u228A',
            subplus: '\u2ABF',
            subrarr: '\u2979',
            subset: '\u2282',
            Subset: '\u22D0',
            subseteq: '\u2286',
            subseteqq: '\u2AC5',
            SubsetEqual: '\u2286',
            subsetneq: '\u228A',
            subsetneqq: '\u2ACB',
            subsim: '\u2AC7',
            subsub: '\u2AD5',
            subsup: '\u2AD3',
            succapprox: '\u2AB8',
            succ: '\u227B',
            succcurlyeq: '\u227D',
            Succeeds: '\u227B',
            SucceedsEqual: '\u2AB0',
            SucceedsSlantEqual: '\u227D',
            SucceedsTilde: '\u227F',
            succeq: '\u2AB0',
            succnapprox: '\u2ABA',
            succneqq: '\u2AB6',
            succnsim: '\u22E9',
            succsim: '\u227F',
            SuchThat: '\u220B',
            sum: '\u2211',
            Sum: '\u2211',
            sung: '\u266A',
            sup1: '\xB9',
            sup2: '\xB2',
            sup3: '\xB3',
            sup: '\u2283',
            Sup: '\u22D1',
            supdot: '\u2ABE',
            supdsub: '\u2AD8',
            supE: '\u2AC6',
            supe: '\u2287',
            supedot: '\u2AC4',
            Superset: '\u2283',
            SupersetEqual: '\u2287',
            suphsol: '\u27C9',
            suphsub: '\u2AD7',
            suplarr: '\u297B',
            supmult: '\u2AC2',
            supnE: '\u2ACC',
            supne: '\u228B',
            supplus: '\u2AC0',
            supset: '\u2283',
            Supset: '\u22D1',
            supseteq: '\u2287',
            supseteqq: '\u2AC6',
            supsetneq: '\u228B',
            supsetneqq: '\u2ACC',
            supsim: '\u2AC8',
            supsub: '\u2AD4',
            supsup: '\u2AD6',
            swarhk: '\u2926',
            swarr: '\u2199',
            swArr: '\u21D9',
            swarrow: '\u2199',
            swnwar: '\u292A',
            szlig: '\xDF',
            Tab: '	',
            target: '\u2316',
            Tau: '\u03A4',
            tau: '\u03C4',
            tbrk: '\u23B4',
            Tcaron: '\u0164',
            tcaron: '\u0165',
            Tcedil: '\u0162',
            tcedil: '\u0163',
            Tcy: '\u0422',
            tcy: '\u0442',
            tdot: '\u20DB',
            telrec: '\u2315',
            Tfr: '\u{1D517}',
            tfr: '\u{1D531}',
            there4: '\u2234',
            therefore: '\u2234',
            Therefore: '\u2234',
            Theta: '\u0398',
            theta: '\u03B8',
            thetasym: '\u03D1',
            thetav: '\u03D1',
            thickapprox: '\u2248',
            thicksim: '\u223C',
            ThickSpace: '\u205F\u200A',
            ThinSpace: '\u2009',
            thinsp: '\u2009',
            thkap: '\u2248',
            thksim: '\u223C',
            THORN: '\xDE',
            thorn: '\xFE',
            tilde: '\u02DC',
            Tilde: '\u223C',
            TildeEqual: '\u2243',
            TildeFullEqual: '\u2245',
            TildeTilde: '\u2248',
            timesbar: '\u2A31',
            timesb: '\u22A0',
            times: '\xD7',
            timesd: '\u2A30',
            tint: '\u222D',
            toea: '\u2928',
            topbot: '\u2336',
            topcir: '\u2AF1',
            top: '\u22A4',
            Topf: '\u{1D54B}',
            topf: '\u{1D565}',
            topfork: '\u2ADA',
            tosa: '\u2929',
            tprime: '\u2034',
            trade: '\u2122',
            TRADE: '\u2122',
            triangle: '\u25B5',
            triangledown: '\u25BF',
            triangleleft: '\u25C3',
            trianglelefteq: '\u22B4',
            triangleq: '\u225C',
            triangleright: '\u25B9',
            trianglerighteq: '\u22B5',
            tridot: '\u25EC',
            trie: '\u225C',
            triminus: '\u2A3A',
            TripleDot: '\u20DB',
            triplus: '\u2A39',
            trisb: '\u29CD',
            tritime: '\u2A3B',
            trpezium: '\u23E2',
            Tscr: '\u{1D4AF}',
            tscr: '\u{1D4C9}',
            TScy: '\u0426',
            tscy: '\u0446',
            TSHcy: '\u040B',
            tshcy: '\u045B',
            Tstrok: '\u0166',
            tstrok: '\u0167',
            twixt: '\u226C',
            twoheadleftarrow: '\u219E',
            twoheadrightarrow: '\u21A0',
            Uacute: '\xDA',
            uacute: '\xFA',
            uarr: '\u2191',
            Uarr: '\u219F',
            uArr: '\u21D1',
            Uarrocir: '\u2949',
            Ubrcy: '\u040E',
            ubrcy: '\u045E',
            Ubreve: '\u016C',
            ubreve: '\u016D',
            Ucirc: '\xDB',
            ucirc: '\xFB',
            Ucy: '\u0423',
            ucy: '\u0443',
            udarr: '\u21C5',
            Udblac: '\u0170',
            udblac: '\u0171',
            udhar: '\u296E',
            ufisht: '\u297E',
            Ufr: '\u{1D518}',
            ufr: '\u{1D532}',
            Ugrave: '\xD9',
            ugrave: '\xF9',
            uHar: '\u2963',
            uharl: '\u21BF',
            uharr: '\u21BE',
            uhblk: '\u2580',
            ulcorn: '\u231C',
            ulcorner: '\u231C',
            ulcrop: '\u230F',
            ultri: '\u25F8',
            Umacr: '\u016A',
            umacr: '\u016B',
            uml: '\xA8',
            UnderBar: '_',
            UnderBrace: '\u23DF',
            UnderBracket: '\u23B5',
            UnderParenthesis: '\u23DD',
            Union: '\u22C3',
            UnionPlus: '\u228E',
            Uogon: '\u0172',
            uogon: '\u0173',
            Uopf: '\u{1D54C}',
            uopf: '\u{1D566}',
            UpArrowBar: '\u2912',
            uparrow: '\u2191',
            UpArrow: '\u2191',
            Uparrow: '\u21D1',
            UpArrowDownArrow: '\u21C5',
            updownarrow: '\u2195',
            UpDownArrow: '\u2195',
            Updownarrow: '\u21D5',
            UpEquilibrium: '\u296E',
            upharpoonleft: '\u21BF',
            upharpoonright: '\u21BE',
            uplus: '\u228E',
            UpperLeftArrow: '\u2196',
            UpperRightArrow: '\u2197',
            upsi: '\u03C5',
            Upsi: '\u03D2',
            upsih: '\u03D2',
            Upsilon: '\u03A5',
            upsilon: '\u03C5',
            UpTeeArrow: '\u21A5',
            UpTee: '\u22A5',
            upuparrows: '\u21C8',
            urcorn: '\u231D',
            urcorner: '\u231D',
            urcrop: '\u230E',
            Uring: '\u016E',
            uring: '\u016F',
            urtri: '\u25F9',
            Uscr: '\u{1D4B0}',
            uscr: '\u{1D4CA}',
            utdot: '\u22F0',
            Utilde: '\u0168',
            utilde: '\u0169',
            utri: '\u25B5',
            utrif: '\u25B4',
            uuarr: '\u21C8',
            Uuml: '\xDC',
            uuml: '\xFC',
            uwangle: '\u29A7',
            vangrt: '\u299C',
            varepsilon: '\u03F5',
            varkappa: '\u03F0',
            varnothing: '\u2205',
            varphi: '\u03D5',
            varpi: '\u03D6',
            varpropto: '\u221D',
            varr: '\u2195',
            vArr: '\u21D5',
            varrho: '\u03F1',
            varsigma: '\u03C2',
            varsubsetneq: '\u228A\uFE00',
            varsubsetneqq: '\u2ACB\uFE00',
            varsupsetneq: '\u228B\uFE00',
            varsupsetneqq: '\u2ACC\uFE00',
            vartheta: '\u03D1',
            vartriangleleft: '\u22B2',
            vartriangleright: '\u22B3',
            vBar: '\u2AE8',
            Vbar: '\u2AEB',
            vBarv: '\u2AE9',
            Vcy: '\u0412',
            vcy: '\u0432',
            vdash: '\u22A2',
            vDash: '\u22A8',
            Vdash: '\u22A9',
            VDash: '\u22AB',
            Vdashl: '\u2AE6',
            veebar: '\u22BB',
            vee: '\u2228',
            Vee: '\u22C1',
            veeeq: '\u225A',
            vellip: '\u22EE',
            verbar: '|',
            Verbar: '\u2016',
            vert: '|',
            Vert: '\u2016',
            VerticalBar: '\u2223',
            VerticalLine: '|',
            VerticalSeparator: '\u2758',
            VerticalTilde: '\u2240',
            VeryThinSpace: '\u200A',
            Vfr: '\u{1D519}',
            vfr: '\u{1D533}',
            vltri: '\u22B2',
            vnsub: '\u2282\u20D2',
            vnsup: '\u2283\u20D2',
            Vopf: '\u{1D54D}',
            vopf: '\u{1D567}',
            vprop: '\u221D',
            vrtri: '\u22B3',
            Vscr: '\u{1D4B1}',
            vscr: '\u{1D4CB}',
            vsubnE: '\u2ACB\uFE00',
            vsubne: '\u228A\uFE00',
            vsupnE: '\u2ACC\uFE00',
            vsupne: '\u228B\uFE00',
            Vvdash: '\u22AA',
            vzigzag: '\u299A',
            Wcirc: '\u0174',
            wcirc: '\u0175',
            wedbar: '\u2A5F',
            wedge: '\u2227',
            Wedge: '\u22C0',
            wedgeq: '\u2259',
            weierp: '\u2118',
            Wfr: '\u{1D51A}',
            wfr: '\u{1D534}',
            Wopf: '\u{1D54E}',
            wopf: '\u{1D568}',
            wp: '\u2118',
            wr: '\u2240',
            wreath: '\u2240',
            Wscr: '\u{1D4B2}',
            wscr: '\u{1D4CC}',
            xcap: '\u22C2',
            xcirc: '\u25EF',
            xcup: '\u22C3',
            xdtri: '\u25BD',
            Xfr: '\u{1D51B}',
            xfr: '\u{1D535}',
            xharr: '\u27F7',
            xhArr: '\u27FA',
            Xi: '\u039E',
            xi: '\u03BE',
            xlarr: '\u27F5',
            xlArr: '\u27F8',
            xmap: '\u27FC',
            xnis: '\u22FB',
            xodot: '\u2A00',
            Xopf: '\u{1D54F}',
            xopf: '\u{1D569}',
            xoplus: '\u2A01',
            xotime: '\u2A02',
            xrarr: '\u27F6',
            xrArr: '\u27F9',
            Xscr: '\u{1D4B3}',
            xscr: '\u{1D4CD}',
            xsqcup: '\u2A06',
            xuplus: '\u2A04',
            xutri: '\u25B3',
            xvee: '\u22C1',
            xwedge: '\u22C0',
            Yacute: '\xDD',
            yacute: '\xFD',
            YAcy: '\u042F',
            yacy: '\u044F',
            Ycirc: '\u0176',
            ycirc: '\u0177',
            Ycy: '\u042B',
            ycy: '\u044B',
            yen: '\xA5',
            Yfr: '\u{1D51C}',
            yfr: '\u{1D536}',
            YIcy: '\u0407',
            yicy: '\u0457',
            Yopf: '\u{1D550}',
            yopf: '\u{1D56A}',
            Yscr: '\u{1D4B4}',
            yscr: '\u{1D4CE}',
            YUcy: '\u042E',
            yucy: '\u044E',
            yuml: '\xFF',
            Yuml: '\u0178',
            Zacute: '\u0179',
            zacute: '\u017A',
            Zcaron: '\u017D',
            zcaron: '\u017E',
            Zcy: '\u0417',
            zcy: '\u0437',
            Zdot: '\u017B',
            zdot: '\u017C',
            zeetrf: '\u2128',
            ZeroWidthSpace: '\u200B',
            Zeta: '\u0396',
            zeta: '\u03B6',
            zfr: '\u{1D537}',
            Zfr: '\u2128',
            ZHcy: '\u0416',
            zhcy: '\u0436',
            zigrarr: '\u21DD',
            zopf: '\u{1D56B}',
            Zopf: '\u2124',
            Zscr: '\u{1D4B5}',
            zscr: '\u{1D4CF}',
            zwj: '\u200D',
            zwnj: '\u200C',
          };
        },
      }),
      b_ = He({
        '../../node_modules/ansi-to-html/node_modules/entities/lib/maps/legacy.json'(
          e,
          t,
        ) {
          t.exports = {
            Aacute: '\xC1',
            aacute: '\xE1',
            Acirc: '\xC2',
            acirc: '\xE2',
            acute: '\xB4',
            AElig: '\xC6',
            aelig: '\xE6',
            Agrave: '\xC0',
            agrave: '\xE0',
            amp: '&',
            AMP: '&',
            Aring: '\xC5',
            aring: '\xE5',
            Atilde: '\xC3',
            atilde: '\xE3',
            Auml: '\xC4',
            auml: '\xE4',
            brvbar: '\xA6',
            Ccedil: '\xC7',
            ccedil: '\xE7',
            cedil: '\xB8',
            cent: '\xA2',
            copy: '\xA9',
            COPY: '\xA9',
            curren: '\xA4',
            deg: '\xB0',
            divide: '\xF7',
            Eacute: '\xC9',
            eacute: '\xE9',
            Ecirc: '\xCA',
            ecirc: '\xEA',
            Egrave: '\xC8',
            egrave: '\xE8',
            ETH: '\xD0',
            eth: '\xF0',
            Euml: '\xCB',
            euml: '\xEB',
            frac12: '\xBD',
            frac14: '\xBC',
            frac34: '\xBE',
            gt: '>',
            GT: '>',
            Iacute: '\xCD',
            iacute: '\xED',
            Icirc: '\xCE',
            icirc: '\xEE',
            iexcl: '\xA1',
            Igrave: '\xCC',
            igrave: '\xEC',
            iquest: '\xBF',
            Iuml: '\xCF',
            iuml: '\xEF',
            laquo: '\xAB',
            lt: '<',
            LT: '<',
            macr: '\xAF',
            micro: '\xB5',
            middot: '\xB7',
            nbsp: '\xA0',
            not: '\xAC',
            Ntilde: '\xD1',
            ntilde: '\xF1',
            Oacute: '\xD3',
            oacute: '\xF3',
            Ocirc: '\xD4',
            ocirc: '\xF4',
            Ograve: '\xD2',
            ograve: '\xF2',
            ordf: '\xAA',
            ordm: '\xBA',
            Oslash: '\xD8',
            oslash: '\xF8',
            Otilde: '\xD5',
            otilde: '\xF5',
            Ouml: '\xD6',
            ouml: '\xF6',
            para: '\xB6',
            plusmn: '\xB1',
            pound: '\xA3',
            quot: '"',
            QUOT: '"',
            raquo: '\xBB',
            reg: '\xAE',
            REG: '\xAE',
            sect: '\xA7',
            shy: '\xAD',
            sup1: '\xB9',
            sup2: '\xB2',
            sup3: '\xB3',
            szlig: '\xDF',
            THORN: '\xDE',
            thorn: '\xFE',
            times: '\xD7',
            Uacute: '\xDA',
            uacute: '\xFA',
            Ucirc: '\xDB',
            ucirc: '\xFB',
            Ugrave: '\xD9',
            ugrave: '\xF9',
            uml: '\xA8',
            Uuml: '\xDC',
            uuml: '\xFC',
            Yacute: '\xDD',
            yacute: '\xFD',
            yen: '\xA5',
            yuml: '\xFF',
          };
        },
      }),
      km = He({
        '../../node_modules/ansi-to-html/node_modules/entities/lib/maps/xml.json'(
          e,
          t,
        ) {
          t.exports = { amp: '&', apos: "'", gt: '>', lt: '<', quot: '"' };
        },
      }),
      E_ = He({
        '../../node_modules/ansi-to-html/node_modules/entities/lib/maps/decode.json'(
          e,
          t,
        ) {
          t.exports = {
            0: 65533,
            128: 8364,
            130: 8218,
            131: 402,
            132: 8222,
            133: 8230,
            134: 8224,
            135: 8225,
            136: 710,
            137: 8240,
            138: 352,
            139: 8249,
            140: 338,
            142: 381,
            145: 8216,
            146: 8217,
            147: 8220,
            148: 8221,
            149: 8226,
            150: 8211,
            151: 8212,
            152: 732,
            153: 8482,
            154: 353,
            155: 8250,
            156: 339,
            158: 382,
            159: 376,
          };
        },
      }),
      A_ = He({
        '../../node_modules/ansi-to-html/node_modules/entities/lib/decode_codepoint.js'(
          e,
        ) {
          var t =
            (e && e.__importDefault) ||
            function (o) {
              return o && o.__esModule ? o : { default: o };
            };
          Object.defineProperty(e, '__esModule', { value: !0 });
          var r = t(E_()),
            n =
              String.fromCodePoint ||
              function (o) {
                var i = '';
                return (
                  o > 65535 &&
                    ((o -= 65536),
                    (i += String.fromCharCode(((o >>> 10) & 1023) | 55296)),
                    (o = 56320 | (o & 1023))),
                  (i += String.fromCharCode(o)),
                  i
                );
              };
          function a(o) {
            return (o >= 55296 && o <= 57343) || o > 1114111
              ? '\uFFFD'
              : (o in r.default && (o = r.default[o]), n(o));
          }
          e.default = a;
        },
      }),
      Rm = He({
        '../../node_modules/ansi-to-html/node_modules/entities/lib/decode.js'(
          e,
        ) {
          var t =
            (e && e.__importDefault) ||
            function (y) {
              return y && y.__esModule ? y : { default: y };
            };
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.decodeHTML = e.decodeHTMLStrict = e.decodeXML = void 0);
          var r = t(Im()),
            n = t(b_()),
            a = t(km()),
            o = t(A_()),
            i = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
          (e.decodeXML = u(a.default)), (e.decodeHTMLStrict = u(r.default));
          function u(y) {
            var E = p(y);
            return function (m) {
              return String(m).replace(i, E);
            };
          }
          var s = function (y, E) {
            return y < E ? 1 : -1;
          };
          e.decodeHTML = (function () {
            for (
              var y = Object.keys(n.default).sort(s),
                E = Object.keys(r.default).sort(s),
                m = 0,
                g = 0;
              m < E.length;
              m++
            )
              y[g] === E[m] ? ((E[m] += ';?'), g++) : (E[m] += ';');
            var A = new RegExp(
                '&(?:' + E.join('|') + '|#[xX][\\da-fA-F]+;?|#\\d+;?)',
                'g',
              ),
              b = p(r.default);
            function x(w) {
              return w.substr(-1) !== ';' && (w += ';'), b(w);
            }
            return function (w) {
              return String(w).replace(A, x);
            };
          })();
          function p(y) {
            return function (E) {
              if (E.charAt(1) === '#') {
                var m = E.charAt(2);
                return m === 'X' || m === 'x'
                  ? o.default(parseInt(E.substr(3), 16))
                  : o.default(parseInt(E.substr(2), 10));
              }
              return y[E.slice(1, -1)] || E;
            };
          }
        },
      }),
      Pm = He({
        '../../node_modules/ansi-to-html/node_modules/entities/lib/encode.js'(
          e,
        ) {
          var t =
            (e && e.__importDefault) ||
            function (R) {
              return R && R.__esModule ? R : { default: R };
            };
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.escapeUTF8 =
              e.escape =
              e.encodeNonAsciiHTML =
              e.encodeHTML =
              e.encodeXML =
                void 0);
          var r = t(km()),
            n = s(r.default),
            a = p(n);
          e.encodeXML = w(n);
          var o = t(Im()),
            i = s(o.default),
            u = p(i);
          (e.encodeHTML = g(i, u)), (e.encodeNonAsciiHTML = w(i));
          function s(R) {
            return Object.keys(R)
              .sort()
              .reduce(function (I, M) {
                return (I[R[M]] = '&' + M + ';'), I;
              }, {});
          }
          function p(R) {
            for (
              var I = [], M = [], F = 0, L = Object.keys(R);
              F < L.length;
              F++
            ) {
              var k = L[F];
              k.length === 1 ? I.push('\\' + k) : M.push(k);
            }
            I.sort();
            for (var z = 0; z < I.length - 1; z++) {
              for (
                var K = z;
                K < I.length - 1 &&
                I[K].charCodeAt(1) + 1 === I[K + 1].charCodeAt(1);

              )
                K += 1;
              var U = 1 + K - z;
              U < 3 || I.splice(z, U, I[z] + '-' + I[K]);
            }
            return (
              M.unshift('[' + I.join('') + ']'), new RegExp(M.join('|'), 'g')
            );
          }
          var y =
              /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
            E =
              String.prototype.codePointAt != null
                ? function (R) {
                    return R.codePointAt(0);
                  }
                : function (R) {
                    return (
                      (R.charCodeAt(0) - 55296) * 1024 +
                      R.charCodeAt(1) -
                      56320 +
                      65536
                    );
                  };
          function m(R) {
            return (
              '&#x' +
              (R.length > 1 ? E(R) : R.charCodeAt(0))
                .toString(16)
                .toUpperCase() +
              ';'
            );
          }
          function g(R, I) {
            return function (M) {
              return M.replace(I, function (F) {
                return R[F];
              }).replace(y, m);
            };
          }
          var A = new RegExp(a.source + '|' + y.source, 'g');
          function b(R) {
            return R.replace(A, m);
          }
          e.escape = b;
          function x(R) {
            return R.replace(a, m);
          }
          e.escapeUTF8 = x;
          function w(R) {
            return function (I) {
              return I.replace(A, function (M) {
                return R[M] || m(M);
              });
            };
          }
        },
      }),
      v_ = He({
        '../../node_modules/ansi-to-html/node_modules/entities/lib/index.js'(
          e,
        ) {
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.decodeXMLStrict =
              e.decodeHTML5Strict =
              e.decodeHTML4Strict =
              e.decodeHTML5 =
              e.decodeHTML4 =
              e.decodeHTMLStrict =
              e.decodeHTML =
              e.decodeXML =
              e.encodeHTML5 =
              e.encodeHTML4 =
              e.escapeUTF8 =
              e.escape =
              e.encodeNonAsciiHTML =
              e.encodeHTML =
              e.encodeXML =
              e.encode =
              e.decodeStrict =
              e.decode =
                void 0);
          var t = Rm(),
            r = Pm();
          function n(s, p) {
            return (!p || p <= 0 ? t.decodeXML : t.decodeHTML)(s);
          }
          e.decode = n;
          function a(s, p) {
            return (!p || p <= 0 ? t.decodeXML : t.decodeHTMLStrict)(s);
          }
          e.decodeStrict = a;
          function o(s, p) {
            return (!p || p <= 0 ? r.encodeXML : r.encodeHTML)(s);
          }
          e.encode = o;
          var i = Pm();
          Object.defineProperty(e, 'encodeXML', {
            enumerable: !0,
            get: function () {
              return i.encodeXML;
            },
          }),
            Object.defineProperty(e, 'encodeHTML', {
              enumerable: !0,
              get: function () {
                return i.encodeHTML;
              },
            }),
            Object.defineProperty(e, 'encodeNonAsciiHTML', {
              enumerable: !0,
              get: function () {
                return i.encodeNonAsciiHTML;
              },
            }),
            Object.defineProperty(e, 'escape', {
              enumerable: !0,
              get: function () {
                return i.escape;
              },
            }),
            Object.defineProperty(e, 'escapeUTF8', {
              enumerable: !0,
              get: function () {
                return i.escapeUTF8;
              },
            }),
            Object.defineProperty(e, 'encodeHTML4', {
              enumerable: !0,
              get: function () {
                return i.encodeHTML;
              },
            }),
            Object.defineProperty(e, 'encodeHTML5', {
              enumerable: !0,
              get: function () {
                return i.encodeHTML;
              },
            });
          var u = Rm();
          Object.defineProperty(e, 'decodeXML', {
            enumerable: !0,
            get: function () {
              return u.decodeXML;
            },
          }),
            Object.defineProperty(e, 'decodeHTML', {
              enumerable: !0,
              get: function () {
                return u.decodeHTML;
              },
            }),
            Object.defineProperty(e, 'decodeHTMLStrict', {
              enumerable: !0,
              get: function () {
                return u.decodeHTMLStrict;
              },
            }),
            Object.defineProperty(e, 'decodeHTML4', {
              enumerable: !0,
              get: function () {
                return u.decodeHTML;
              },
            }),
            Object.defineProperty(e, 'decodeHTML5', {
              enumerable: !0,
              get: function () {
                return u.decodeHTML;
              },
            }),
            Object.defineProperty(e, 'decodeHTML4Strict', {
              enumerable: !0,
              get: function () {
                return u.decodeHTMLStrict;
              },
            }),
            Object.defineProperty(e, 'decodeHTML5Strict', {
              enumerable: !0,
              get: function () {
                return u.decodeHTMLStrict;
              },
            }),
            Object.defineProperty(e, 'decodeXMLStrict', {
              enumerable: !0,
              get: function () {
                return u.decodeXML;
              },
            });
        },
      }),
      D_ = He({
        '../../node_modules/ansi-to-html/lib/ansi_to_html.js'(e, t) {
          function r(O, T) {
            if (!(O instanceof T))
              throw new TypeError('Cannot call a class as a function');
          }
          function n(O, T) {
            for (var j = 0; j < T.length; j++) {
              var G = T[j];
              (G.enumerable = G.enumerable || !1),
                (G.configurable = !0),
                'value' in G && (G.writable = !0),
                Object.defineProperty(O, G.key, G);
            }
          }
          function a(O, T, j) {
            return T && n(O.prototype, T), j && n(O, j), O;
          }
          function o(O) {
            if (typeof Symbol > 'u' || O[Symbol.iterator] == null) {
              if (Array.isArray(O) || (O = i(O))) {
                var T = 0,
                  j = function () {};
                return {
                  s: j,
                  n: function () {
                    return T >= O.length
                      ? { done: !0 }
                      : { done: !1, value: O[T++] };
                  },
                  e: function (ie) {
                    throw ie;
                  },
                  f: j,
                };
              }
              throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }
            var G,
              Y = !0,
              V = !1,
              Q;
            return {
              s: function () {
                G = O[Symbol.iterator]();
              },
              n: function () {
                var ie = G.next();
                return (Y = ie.done), ie;
              },
              e: function (ie) {
                (V = !0), (Q = ie);
              },
              f: function () {
                try {
                  !Y && G.return != null && G.return();
                } finally {
                  if (V) throw Q;
                }
              },
            };
          }
          function i(O, T) {
            if (O) {
              if (typeof O == 'string') return u(O, T);
              var j = Object.prototype.toString.call(O).slice(8, -1);
              if (
                (j === 'Object' && O.constructor && (j = O.constructor.name),
                j === 'Map' || j === 'Set')
              )
                return Array.from(j);
              if (
                j === 'Arguments' ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j)
              )
                return u(O, T);
            }
          }
          function u(O, T) {
            (T == null || T > O.length) && (T = O.length);
            for (var j = 0, G = new Array(T); j < T; j++) G[j] = O[j];
            return G;
          }
          var s = v_(),
            p = {
              fg: '#FFF',
              bg: '#000',
              newline: !1,
              escapeXML: !1,
              stream: !1,
              colors: y(),
            };
          function y() {
            var O = {
              0: '#000',
              1: '#A00',
              2: '#0A0',
              3: '#A50',
              4: '#00A',
              5: '#A0A',
              6: '#0AA',
              7: '#AAA',
              8: '#555',
              9: '#F55',
              10: '#5F5',
              11: '#FF5',
              12: '#55F',
              13: '#F5F',
              14: '#5FF',
              15: '#FFF',
            };
            return (
              R(0, 5).forEach(function (T) {
                R(0, 5).forEach(function (j) {
                  R(0, 5).forEach(function (G) {
                    return E(T, j, G, O);
                  });
                });
              }),
              R(0, 23).forEach(function (T) {
                var j = T + 232,
                  G = m(T * 10 + 8);
                O[j] = '#' + G + G + G;
              }),
              O
            );
          }
          function E(O, T, j, G) {
            var Y = 16 + O * 36 + T * 6 + j,
              V = O > 0 ? O * 40 + 55 : 0,
              Q = T > 0 ? T * 40 + 55 : 0,
              ie = j > 0 ? j * 40 + 55 : 0;
            G[Y] = g([V, Q, ie]);
          }
          function m(O) {
            for (var T = O.toString(16); T.length < 2; ) T = '0' + T;
            return T;
          }
          function g(O) {
            var T = [],
              j = o(O),
              G;
            try {
              for (j.s(); !(G = j.n()).done; ) {
                var Y = G.value;
                T.push(m(Y));
              }
            } catch (V) {
              j.e(V);
            } finally {
              j.f();
            }
            return '#' + T.join('');
          }
          function A(O, T, j, G) {
            var Y;
            return (
              T === 'text'
                ? (Y = F(j, G))
                : T === 'display'
                  ? (Y = x(O, j, G))
                  : T === 'xterm256'
                    ? (Y = z(O, G.colors[j]))
                    : T === 'rgb' && (Y = b(O, j)),
              Y
            );
          }
          function b(O, T) {
            T = T.substring(2).slice(0, -1);
            var j = +T.substr(0, 2),
              G = T.substring(5).split(';'),
              Y = G.map(function (V) {
                return ('0' + Number(V).toString(16)).substr(-2);
              }).join('');
            return k(O, (j === 38 ? 'color:#' : 'background-color:#') + Y);
          }
          function x(O, T, j) {
            T = parseInt(T, 10);
            var G = {
                '-1': function () {
                  return '<br/>';
                },
                0: function () {
                  return O.length && w(O);
                },
                1: function () {
                  return L(O, 'b');
                },
                3: function () {
                  return L(O, 'i');
                },
                4: function () {
                  return L(O, 'u');
                },
                8: function () {
                  return k(O, 'display:none');
                },
                9: function () {
                  return L(O, 'strike');
                },
                22: function () {
                  return k(
                    O,
                    'font-weight:normal;text-decoration:none;font-style:normal',
                  );
                },
                23: function () {
                  return U(O, 'i');
                },
                24: function () {
                  return U(O, 'u');
                },
                39: function () {
                  return z(O, j.fg);
                },
                49: function () {
                  return K(O, j.bg);
                },
                53: function () {
                  return k(O, 'text-decoration:overline');
                },
              },
              Y;
            return (
              G[T]
                ? (Y = G[T]())
                : 4 < T && T < 7
                  ? (Y = L(O, 'blink'))
                  : 29 < T && T < 38
                    ? (Y = z(O, j.colors[T - 30]))
                    : 39 < T && T < 48
                      ? (Y = K(O, j.colors[T - 40]))
                      : 89 < T && T < 98
                        ? (Y = z(O, j.colors[8 + (T - 90)]))
                        : 99 < T &&
                          T < 108 &&
                          (Y = K(O, j.colors[8 + (T - 100)])),
              Y
            );
          }
          function w(O) {
            var T = O.slice(0);
            return (
              (O.length = 0),
              T.reverse()
                .map(function (j) {
                  return '</' + j + '>';
                })
                .join('')
            );
          }
          function R(O, T) {
            for (var j = [], G = O; G <= T; G++) j.push(G);
            return j;
          }
          function I(O) {
            return function (T) {
              return (O === null || T.category !== O) && O !== 'all';
            };
          }
          function M(O) {
            O = parseInt(O, 10);
            var T = null;
            return (
              O === 0
                ? (T = 'all')
                : O === 1
                  ? (T = 'bold')
                  : 2 < O && O < 5
                    ? (T = 'underline')
                    : 4 < O && O < 7
                      ? (T = 'blink')
                      : O === 8
                        ? (T = 'hide')
                        : O === 9
                          ? (T = 'strike')
                          : (29 < O && O < 38) || O === 39 || (89 < O && O < 98)
                            ? (T = 'foreground-color')
                            : ((39 < O && O < 48) ||
                                O === 49 ||
                                (99 < O && O < 108)) &&
                              (T = 'background-color'),
              T
            );
          }
          function F(O, T) {
            return T.escapeXML ? s.encodeXML(O) : O;
          }
          function L(O, T, j) {
            return (
              j || (j = ''),
              O.push(T),
              '<'.concat(T).concat(j ? ' style="'.concat(j, '"') : '', '>')
            );
          }
          function k(O, T) {
            return L(O, 'span', T);
          }
          function z(O, T) {
            return L(O, 'span', 'color:' + T);
          }
          function K(O, T) {
            return L(O, 'span', 'background-color:' + T);
          }
          function U(O, T) {
            var j;
            if ((O.slice(-1)[0] === T && (j = O.pop()), j))
              return '</' + T + '>';
          }
          function se(O, T, j) {
            var G = !1,
              Y = 3;
            function V() {
              return '';
            }
            function Q(ae, Ae) {
              return j('xterm256', Ae), '';
            }
            function ie(ae) {
              return T.newline ? j('display', -1) : j('text', ae), '';
            }
            function Re(ae, Ae) {
              (G = !0),
                Ae.trim().length === 0 && (Ae = '0'),
                (Ae = Ae.trimRight(';').split(';'));
              var zr = o(Ae),
                Ji;
              try {
                for (zr.s(); !(Ji = zr.n()).done; ) {
                  var Ky = Ji.value;
                  j('display', Ky);
                }
              } catch (Yy) {
                zr.e(Yy);
              } finally {
                zr.f();
              }
              return '';
            }
            function Pe(ae) {
              return j('text', ae), '';
            }
            function X(ae) {
              return j('rgb', ae), '';
            }
            var qe = [
              { pattern: /^\x08+/, sub: V },
              { pattern: /^\x1b\[[012]?K/, sub: V },
              { pattern: /^\x1b\[\(B/, sub: V },
              { pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: X },
              { pattern: /^\x1b\[38;5;(\d+)m/, sub: Q },
              { pattern: /^\n/, sub: ie },
              { pattern: /^\r+\n/, sub: ie },
              { pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: Re },
              { pattern: /^\x1b\[\d?J/, sub: V },
              { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: V },
              { pattern: /^\x1b\[?[\d;]{0,3}/, sub: V },
              { pattern: /^(([^\x1b\x08\r\n])+)/, sub: Pe },
            ];
            function B(ae, Ae) {
              (Ae > Y && G) || ((G = !1), (O = O.replace(ae.pattern, ae.sub)));
            }
            var P = [],
              N = O,
              _ = N.length;
            e: for (; _ > 0; ) {
              for (var $ = 0, H = 0, de = qe.length; H < de; $ = ++H) {
                var ne = qe[$];
                if ((B(ne, $), O.length !== _)) {
                  _ = O.length;
                  continue e;
                }
              }
              if (O.length === _) break;
              P.push(0), (_ = O.length);
            }
            return P;
          }
          function ee(O, T, j) {
            return (
              T !== 'text' &&
                ((O = O.filter(I(M(j)))),
                O.push({ token: T, data: j, category: M(j) })),
              O
            );
          }
          var J = (function () {
            function O(T) {
              r(this, O),
                (T = T || {}),
                T.colors && (T.colors = Object.assign({}, p.colors, T.colors)),
                (this.options = Object.assign({}, p, T)),
                (this.stack = []),
                (this.stickyStack = []);
            }
            return (
              a(O, [
                {
                  key: 'toHtml',
                  value: function (T) {
                    var j = this;
                    T = typeof T == 'string' ? [T] : T;
                    var G = this.stack,
                      Y = this.options,
                      V = [];
                    return (
                      this.stickyStack.forEach(function (Q) {
                        var ie = A(G, Q.token, Q.data, Y);
                        ie && V.push(ie);
                      }),
                      se(T.join(''), Y, function (Q, ie) {
                        var Re = A(G, Q, ie, Y);
                        Re && V.push(Re),
                          Y.stream &&
                            (j.stickyStack = ee(j.stickyStack, Q, ie));
                      }),
                      G.length && V.push(w(G)),
                      V.join('')
                    );
                  },
                },
              ]),
              O
            );
          })();
          t.exports = J;
        },
      }),
      yZ = new Error('prepareAborted'),
      { AbortController: bZ } = globalThis;
    var { fetch: EZ } = oe;
    var { history: AZ, document: vZ } = oe;
    var C_ = Jf(D_()),
      { document: DZ } = oe;
    var x_ = ((e) => (
      (e.MAIN = 'MAIN'),
      (e.NOPREVIEW = 'NOPREVIEW'),
      (e.PREPARING_STORY = 'PREPARING_STORY'),
      (e.PREPARING_DOCS = 'PREPARING_DOCS'),
      (e.ERROR = 'ERROR'),
      e
    ))(x_ || {});
    var CZ = new C_.default({ escapeXML: !0 });
    var { document: xZ } = oe;
    var { FEATURES: NZ } = oe;
    l();
    c();
    d();
    var Sy = pe(On(), 1);
    l();
    c();
    d();
    var O_ = pe(On(), 1),
      R_ = pe(Gm(), 1);
    var P_ = ((e) => (
      (e.JAVASCRIPT = 'JavaScript'),
      (e.FLOW = 'Flow'),
      (e.TYPESCRIPT = 'TypeScript'),
      (e.UNKNOWN = 'Unknown'),
      e
    ))(P_ || {});
    var Wm = 'storybook/docs',
      mte = `${Wm}/panel`;
    var I_ = `${Wm}/snippet-rendered`,
      Vm = ((e) => (
        (e.AUTO = 'auto'), (e.CODE = 'code'), (e.DYNAMIC = 'dynamic'), e
      ))(Vm || {});
    l();
    c();
    d();
    l();
    c();
    d();
    var k_ = Object.create,
      Km = Object.defineProperty,
      N_ = Object.getOwnPropertyDescriptor,
      Ym = Object.getOwnPropertyNames,
      L_ = Object.getPrototypeOf,
      q_ = Object.prototype.hasOwnProperty,
      ke = (e, t) =>
        function () {
          return (
            t || (0, e[Ym(e)[0]])((t = { exports: {} }).exports, t), t.exports
          );
        },
      j_ = (e, t, r, n) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let a of Ym(t))
            !q_.call(e, a) &&
              a !== r &&
              Km(e, a, {
                get: () => t[a],
                enumerable: !(n = N_(t, a)) || n.enumerable,
              });
        return e;
      },
      ea = (e, t, r) => (
        (r = e != null ? k_(L_(e)) : {}),
        j_(
          t || !e || !e.__esModule
            ? Km(r, 'default', { value: e, enumerable: !0 })
            : r,
          e,
        )
      ),
      M_ = [
        'bubbles',
        'cancelBubble',
        'cancelable',
        'composed',
        'currentTarget',
        'defaultPrevented',
        'eventPhase',
        'isTrusted',
        'returnValue',
        'srcElement',
        'target',
        'timeStamp',
        'type',
      ],
      $_ = ['detail'];
    function Jm(e) {
      let t = M_.filter((r) => e[r] !== void 0).reduce(
        (r, n) => ({ ...r, [n]: e[n] }),
        {},
      );
      return (
        e instanceof CustomEvent &&
          $_.filter((r) => e[r] !== void 0).forEach((r) => {
            t[r] = e[r];
          }),
        t
      );
    }
    var dg = pe(Cn(), 1),
      rg = ke({
        'node_modules/has-symbols/shams.js'(e, t) {
          'use strict';
          t.exports = function () {
            if (
              typeof Symbol != 'function' ||
              typeof Object.getOwnPropertySymbols != 'function'
            )
              return !1;
            if (typeof Symbol.iterator == 'symbol') return !0;
            var n = {},
              a = Symbol('test'),
              o = Object(a);
            if (
              typeof a == 'string' ||
              Object.prototype.toString.call(a) !== '[object Symbol]' ||
              Object.prototype.toString.call(o) !== '[object Symbol]'
            )
              return !1;
            var i = 42;
            n[a] = i;
            for (a in n) return !1;
            if (
              (typeof Object.keys == 'function' &&
                Object.keys(n).length !== 0) ||
              (typeof Object.getOwnPropertyNames == 'function' &&
                Object.getOwnPropertyNames(n).length !== 0)
            )
              return !1;
            var u = Object.getOwnPropertySymbols(n);
            if (
              u.length !== 1 ||
              u[0] !== a ||
              !Object.prototype.propertyIsEnumerable.call(n, a)
            )
              return !1;
            if (typeof Object.getOwnPropertyDescriptor == 'function') {
              var s = Object.getOwnPropertyDescriptor(n, a);
              if (s.value !== i || s.enumerable !== !0) return !1;
            }
            return !0;
          };
        },
      }),
      ng = ke({
        'node_modules/has-symbols/index.js'(e, t) {
          'use strict';
          var r = typeof Symbol < 'u' && Symbol,
            n = rg();
          t.exports = function () {
            return typeof r != 'function' ||
              typeof Symbol != 'function' ||
              typeof r('foo') != 'symbol' ||
              typeof Symbol('bar') != 'symbol'
              ? !1
              : n();
          };
        },
      }),
      U_ = ke({
        'node_modules/function-bind/implementation.js'(e, t) {
          'use strict';
          var r = 'Function.prototype.bind called on incompatible ',
            n = Array.prototype.slice,
            a = Object.prototype.toString,
            o = '[object Function]';
          t.exports = function (u) {
            var s = this;
            if (typeof s != 'function' || a.call(s) !== o)
              throw new TypeError(r + s);
            for (
              var p = n.call(arguments, 1),
                y,
                E = function () {
                  if (this instanceof y) {
                    var x = s.apply(this, p.concat(n.call(arguments)));
                    return Object(x) === x ? x : this;
                  } else return s.apply(u, p.concat(n.call(arguments)));
                },
                m = Math.max(0, s.length - p.length),
                g = [],
                A = 0;
              A < m;
              A++
            )
              g.push('$' + A);
            if (
              ((y = Function(
                'binder',
                'return function (' +
                  g.join(',') +
                  '){ return binder.apply(this,arguments); }',
              )(E)),
              s.prototype)
            ) {
              var b = function () {};
              (b.prototype = s.prototype),
                (y.prototype = new b()),
                (b.prototype = null);
            }
            return y;
          };
        },
      }),
      Di = ke({
        'node_modules/function-bind/index.js'(e, t) {
          'use strict';
          var r = U_();
          t.exports = Function.prototype.bind || r;
        },
      }),
      z_ = ke({
        'node_modules/has/src/index.js'(e, t) {
          'use strict';
          var r = Di();
          t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
        },
      }),
      ag = ke({
        'node_modules/get-intrinsic/index.js'(e, t) {
          'use strict';
          var r,
            n = SyntaxError,
            a = Function,
            o = TypeError,
            i = function (ee) {
              try {
                return a('"use strict"; return (' + ee + ').constructor;')();
              } catch {}
            },
            u = Object.getOwnPropertyDescriptor;
          if (u)
            try {
              u({}, '');
            } catch {
              u = null;
            }
          var s = function () {
              throw new o();
            },
            p = u
              ? (function () {
                  try {
                    return arguments.callee, s;
                  } catch {
                    try {
                      return u(arguments, 'callee').get;
                    } catch {
                      return s;
                    }
                  }
                })()
              : s,
            y = ng()(),
            E =
              Object.getPrototypeOf ||
              function (ee) {
                return ee.__proto__;
              },
            m = {},
            g = typeof Uint8Array > 'u' ? r : E(Uint8Array),
            A = {
              '%AggregateError%':
                typeof AggregateError > 'u' ? r : AggregateError,
              '%Array%': Array,
              '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? r : ArrayBuffer,
              '%ArrayIteratorPrototype%': y ? E([][Symbol.iterator]()) : r,
              '%AsyncFromSyncIteratorPrototype%': r,
              '%AsyncFunction%': m,
              '%AsyncGenerator%': m,
              '%AsyncGeneratorFunction%': m,
              '%AsyncIteratorPrototype%': m,
              '%Atomics%': typeof Atomics > 'u' ? r : Atomics,
              '%BigInt%': typeof BigInt > 'u' ? r : BigInt,
              '%Boolean%': Boolean,
              '%DataView%': typeof DataView > 'u' ? r : DataView,
              '%Date%': Date,
              '%decodeURI%': decodeURI,
              '%decodeURIComponent%': decodeURIComponent,
              '%encodeURI%': encodeURI,
              '%encodeURIComponent%': encodeURIComponent,
              '%Error%': Error,
              '%eval%': eval,
              '%EvalError%': EvalError,
              '%Float32Array%': typeof Float32Array > 'u' ? r : Float32Array,
              '%Float64Array%': typeof Float64Array > 'u' ? r : Float64Array,
              '%FinalizationRegistry%':
                typeof FinalizationRegistry > 'u' ? r : FinalizationRegistry,
              '%Function%': a,
              '%GeneratorFunction%': m,
              '%Int8Array%': typeof Int8Array > 'u' ? r : Int8Array,
              '%Int16Array%': typeof Int16Array > 'u' ? r : Int16Array,
              '%Int32Array%': typeof Int32Array > 'u' ? r : Int32Array,
              '%isFinite%': isFinite,
              '%isNaN%': isNaN,
              '%IteratorPrototype%': y ? E(E([][Symbol.iterator]())) : r,
              '%JSON%': typeof JSON == 'object' ? JSON : r,
              '%Map%': typeof Map > 'u' ? r : Map,
              '%MapIteratorPrototype%':
                typeof Map > 'u' || !y ? r : E(new Map()[Symbol.iterator]()),
              '%Math%': Math,
              '%Number%': Number,
              '%Object%': Object,
              '%parseFloat%': parseFloat,
              '%parseInt%': parseInt,
              '%Promise%': typeof Promise > 'u' ? r : Promise,
              '%Proxy%': typeof Proxy > 'u' ? r : Proxy,
              '%RangeError%': RangeError,
              '%ReferenceError%': ReferenceError,
              '%Reflect%': typeof Reflect > 'u' ? r : Reflect,
              '%RegExp%': RegExp,
              '%Set%': typeof Set > 'u' ? r : Set,
              '%SetIteratorPrototype%':
                typeof Set > 'u' || !y ? r : E(new Set()[Symbol.iterator]()),
              '%SharedArrayBuffer%':
                typeof SharedArrayBuffer > 'u' ? r : SharedArrayBuffer,
              '%String%': String,
              '%StringIteratorPrototype%': y ? E(''[Symbol.iterator]()) : r,
              '%Symbol%': y ? Symbol : r,
              '%SyntaxError%': n,
              '%ThrowTypeError%': p,
              '%TypedArray%': g,
              '%TypeError%': o,
              '%Uint8Array%': typeof Uint8Array > 'u' ? r : Uint8Array,
              '%Uint8ClampedArray%':
                typeof Uint8ClampedArray > 'u' ? r : Uint8ClampedArray,
              '%Uint16Array%': typeof Uint16Array > 'u' ? r : Uint16Array,
              '%Uint32Array%': typeof Uint32Array > 'u' ? r : Uint32Array,
              '%URIError%': URIError,
              '%WeakMap%': typeof WeakMap > 'u' ? r : WeakMap,
              '%WeakRef%': typeof WeakRef > 'u' ? r : WeakRef,
              '%WeakSet%': typeof WeakSet > 'u' ? r : WeakSet,
            },
            b = function ee(J) {
              var O;
              if (J === '%AsyncFunction%') O = i('async function () {}');
              else if (J === '%GeneratorFunction%') O = i('function* () {}');
              else if (J === '%AsyncGeneratorFunction%')
                O = i('async function* () {}');
              else if (J === '%AsyncGenerator%') {
                var T = ee('%AsyncGeneratorFunction%');
                T && (O = T.prototype);
              } else if (J === '%AsyncIteratorPrototype%') {
                var j = ee('%AsyncGenerator%');
                j && (O = E(j.prototype));
              }
              return (A[J] = O), O;
            },
            x = {
              '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
              '%ArrayPrototype%': ['Array', 'prototype'],
              '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
              '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
              '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
              '%ArrayProto_values%': ['Array', 'prototype', 'values'],
              '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
              '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
              '%AsyncGeneratorPrototype%': [
                'AsyncGeneratorFunction',
                'prototype',
                'prototype',
              ],
              '%BooleanPrototype%': ['Boolean', 'prototype'],
              '%DataViewPrototype%': ['DataView', 'prototype'],
              '%DatePrototype%': ['Date', 'prototype'],
              '%ErrorPrototype%': ['Error', 'prototype'],
              '%EvalErrorPrototype%': ['EvalError', 'prototype'],
              '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
              '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
              '%FunctionPrototype%': ['Function', 'prototype'],
              '%Generator%': ['GeneratorFunction', 'prototype'],
              '%GeneratorPrototype%': [
                'GeneratorFunction',
                'prototype',
                'prototype',
              ],
              '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
              '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
              '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
              '%JSONParse%': ['JSON', 'parse'],
              '%JSONStringify%': ['JSON', 'stringify'],
              '%MapPrototype%': ['Map', 'prototype'],
              '%NumberPrototype%': ['Number', 'prototype'],
              '%ObjectPrototype%': ['Object', 'prototype'],
              '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
              '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
              '%PromisePrototype%': ['Promise', 'prototype'],
              '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
              '%Promise_all%': ['Promise', 'all'],
              '%Promise_reject%': ['Promise', 'reject'],
              '%Promise_resolve%': ['Promise', 'resolve'],
              '%RangeErrorPrototype%': ['RangeError', 'prototype'],
              '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
              '%RegExpPrototype%': ['RegExp', 'prototype'],
              '%SetPrototype%': ['Set', 'prototype'],
              '%SharedArrayBufferPrototype%': [
                'SharedArrayBuffer',
                'prototype',
              ],
              '%StringPrototype%': ['String', 'prototype'],
              '%SymbolPrototype%': ['Symbol', 'prototype'],
              '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
              '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
              '%TypeErrorPrototype%': ['TypeError', 'prototype'],
              '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
              '%Uint8ClampedArrayPrototype%': [
                'Uint8ClampedArray',
                'prototype',
              ],
              '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
              '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
              '%URIErrorPrototype%': ['URIError', 'prototype'],
              '%WeakMapPrototype%': ['WeakMap', 'prototype'],
              '%WeakSetPrototype%': ['WeakSet', 'prototype'],
            },
            w = Di(),
            R = z_(),
            I = w.call(Function.call, Array.prototype.concat),
            M = w.call(Function.apply, Array.prototype.splice),
            F = w.call(Function.call, String.prototype.replace),
            L = w.call(Function.call, String.prototype.slice),
            k = w.call(Function.call, RegExp.prototype.exec),
            z =
              /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
            K = /\\(\\)?/g,
            U = function (J) {
              var O = L(J, 0, 1),
                T = L(J, -1);
              if (O === '%' && T !== '%')
                throw new n('invalid intrinsic syntax, expected closing `%`');
              if (T === '%' && O !== '%')
                throw new n('invalid intrinsic syntax, expected opening `%`');
              var j = [];
              return (
                F(J, z, function (G, Y, V, Q) {
                  j[j.length] = V ? F(Q, K, '$1') : Y || G;
                }),
                j
              );
            },
            se = function (J, O) {
              var T = J,
                j;
              if ((R(x, T) && ((j = x[T]), (T = '%' + j[0] + '%')), R(A, T))) {
                var G = A[T];
                if ((G === m && (G = b(T)), typeof G > 'u' && !O))
                  throw new o(
                    'intrinsic ' +
                      J +
                      ' exists, but is not available. Please file an issue!',
                  );
                return { alias: j, name: T, value: G };
              }
              throw new n('intrinsic ' + J + ' does not exist!');
            };
          t.exports = function (J, O) {
            if (typeof J != 'string' || J.length === 0)
              throw new o('intrinsic name must be a non-empty string');
            if (arguments.length > 1 && typeof O != 'boolean')
              throw new o('"allowMissing" argument must be a boolean');
            if (k(/^%?[^%]*%?$/, J) === null)
              throw new n(
                '`%` may not be present anywhere but at the beginning and end of the intrinsic name',
              );
            var T = U(J),
              j = T.length > 0 ? T[0] : '',
              G = se('%' + j + '%', O),
              Y = G.name,
              V = G.value,
              Q = !1,
              ie = G.alias;
            ie && ((j = ie[0]), M(T, I([0, 1], ie)));
            for (var Re = 1, Pe = !0; Re < T.length; Re += 1) {
              var X = T[Re],
                qe = L(X, 0, 1),
                B = L(X, -1);
              if (
                (qe === '"' ||
                  qe === "'" ||
                  qe === '`' ||
                  B === '"' ||
                  B === "'" ||
                  B === '`') &&
                qe !== B
              )
                throw new n(
                  'property names with quotes must have matching quotes',
                );
              if (
                ((X === 'constructor' || !Pe) && (Q = !0),
                (j += '.' + X),
                (Y = '%' + j + '%'),
                R(A, Y))
              )
                V = A[Y];
              else if (V != null) {
                if (!(X in V)) {
                  if (!O)
                    throw new o(
                      'base intrinsic for ' +
                        J +
                        ' exists, but the property is not available.',
                    );
                  return;
                }
                if (u && Re + 1 >= T.length) {
                  var P = u(V, X);
                  (Pe = !!P),
                    Pe && 'get' in P && !('originalValue' in P.get)
                      ? (V = P.get)
                      : (V = V[X]);
                } else (Pe = R(V, X)), (V = V[X]);
                Pe && !Q && (A[Y] = V);
              }
            }
            return V;
          };
        },
      }),
      H_ = ke({
        'node_modules/call-bind/index.js'(e, t) {
          'use strict';
          var r = Di(),
            n = ag(),
            a = n('%Function.prototype.apply%'),
            o = n('%Function.prototype.call%'),
            i = n('%Reflect.apply%', !0) || r.call(o, a),
            u = n('%Object.getOwnPropertyDescriptor%', !0),
            s = n('%Object.defineProperty%', !0),
            p = n('%Math.max%');
          if (s)
            try {
              s({}, 'a', { value: 1 });
            } catch {
              s = null;
            }
          t.exports = function (m) {
            var g = i(r, o, arguments);
            if (u && s) {
              var A = u(g, 'length');
              A.configurable &&
                s(g, 'length', {
                  value: 1 + p(0, m.length - (arguments.length - 1)),
                });
            }
            return g;
          };
          var y = function () {
            return i(r, a, arguments);
          };
          s ? s(t.exports, 'apply', { value: y }) : (t.exports.apply = y);
        },
      }),
      G_ = ke({
        'node_modules/call-bind/callBound.js'(e, t) {
          'use strict';
          var r = ag(),
            n = H_(),
            a = n(r('String.prototype.indexOf'));
          t.exports = function (i, u) {
            var s = r(i, !!u);
            return typeof s == 'function' && a(i, '.prototype.') > -1
              ? n(s)
              : s;
          };
        },
      }),
      W_ = ke({
        'node_modules/has-tostringtag/shams.js'(e, t) {
          'use strict';
          var r = rg();
          t.exports = function () {
            return r() && !!Symbol.toStringTag;
          };
        },
      }),
      V_ = ke({
        'node_modules/is-regex/index.js'(e, t) {
          'use strict';
          var r = G_(),
            n = W_()(),
            a,
            o,
            i,
            u;
          n &&
            ((a = r('Object.prototype.hasOwnProperty')),
            (o = r('RegExp.prototype.exec')),
            (i = {}),
            (s = function () {
              throw i;
            }),
            (u = { toString: s, valueOf: s }),
            typeof Symbol.toPrimitive == 'symbol' &&
              (u[Symbol.toPrimitive] = s));
          var s,
            p = r('Object.prototype.toString'),
            y = Object.getOwnPropertyDescriptor,
            E = '[object RegExp]';
          t.exports = n
            ? function (g) {
                if (!g || typeof g != 'object') return !1;
                var A = y(g, 'lastIndex'),
                  b = A && a(A, 'value');
                if (!b) return !1;
                try {
                  o(g, u);
                } catch (x) {
                  return x === i;
                }
              }
            : function (g) {
                return !g || (typeof g != 'object' && typeof g != 'function')
                  ? !1
                  : p(g) === E;
              };
        },
      }),
      K_ = ke({
        'node_modules/is-function/index.js'(e, t) {
          t.exports = n;
          var r = Object.prototype.toString;
          function n(a) {
            if (!a) return !1;
            var o = r.call(a);
            return (
              o === '[object Function]' ||
              (typeof a == 'function' && o !== '[object RegExp]') ||
              (typeof window < 'u' &&
                (a === window.setTimeout ||
                  a === window.alert ||
                  a === window.confirm ||
                  a === window.prompt))
            );
          }
        },
      }),
      Y_ = ke({
        'node_modules/is-symbol/index.js'(e, t) {
          'use strict';
          var r = Object.prototype.toString,
            n = ng()();
          n
            ? ((a = Symbol.prototype.toString),
              (o = /^Symbol\(.*\)$/),
              (i = function (s) {
                return typeof s.valueOf() != 'symbol' ? !1 : o.test(a.call(s));
              }),
              (t.exports = function (s) {
                if (typeof s == 'symbol') return !0;
                if (r.call(s) !== '[object Symbol]') return !1;
                try {
                  return i(s);
                } catch {
                  return !1;
                }
              }))
            : (t.exports = function (s) {
                return !1;
              });
          var a, o, i;
        },
      }),
      J_ = ea(V_()),
      X_ = ea(K_()),
      Q_ = ea(Y_());
    function Z_(e) {
      return e != null && typeof e == 'object' && Array.isArray(e) === !1;
    }
    var eO =
        typeof window == 'object' &&
        window &&
        window.Object === Object &&
        window,
      tO = eO,
      rO = typeof self == 'object' && self && self.Object === Object && self,
      nO = tO || rO || Function('return this')(),
      Ci = nO,
      aO = Ci.Symbol,
      Qt = aO,
      og = Object.prototype,
      oO = og.hasOwnProperty,
      iO = og.toString,
      qr = Qt ? Qt.toStringTag : void 0;
    function uO(e) {
      var t = oO.call(e, qr),
        r = e[qr];
      try {
        e[qr] = void 0;
        var n = !0;
      } catch {}
      var a = iO.call(e);
      return n && (t ? (e[qr] = r) : delete e[qr]), a;
    }
    var sO = uO,
      lO = Object.prototype,
      cO = lO.toString;
    function dO(e) {
      return cO.call(e);
    }
    var pO = dO,
      fO = '[object Null]',
      hO = '[object Undefined]',
      Xm = Qt ? Qt.toStringTag : void 0;
    function mO(e) {
      return e == null
        ? e === void 0
          ? hO
          : fO
        : Xm && Xm in Object(e)
          ? sO(e)
          : pO(e);
    }
    var ig = mO;
    function gO(e) {
      return e != null && typeof e == 'object';
    }
    var yO = gO,
      bO = '[object Symbol]';
    function EO(e) {
      return typeof e == 'symbol' || (yO(e) && ig(e) == bO);
    }
    var xi = EO;
    function AO(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
        a[r] = t(e[r], r, e);
      return a;
    }
    var vO = AO,
      DO = Array.isArray,
      Si = DO,
      CO = 1 / 0,
      Qm = Qt ? Qt.prototype : void 0,
      Zm = Qm ? Qm.toString : void 0;
    function ug(e) {
      if (typeof e == 'string') return e;
      if (Si(e)) return vO(e, ug) + '';
      if (xi(e)) return Zm ? Zm.call(e) : '';
      var t = e + '';
      return t == '0' && 1 / e == -CO ? '-0' : t;
    }
    var xO = ug;
    function SO(e) {
      var t = typeof e;
      return e != null && (t == 'object' || t == 'function');
    }
    var sg = SO,
      FO = '[object AsyncFunction]',
      wO = '[object Function]',
      BO = '[object GeneratorFunction]',
      TO = '[object Proxy]';
    function _O(e) {
      if (!sg(e)) return !1;
      var t = ig(e);
      return t == wO || t == BO || t == FO || t == TO;
    }
    var OO = _O,
      RO = Ci['__core-js_shared__'],
      vi = RO,
      eg = (function () {
        var e = /[^.]+$/.exec((vi && vi.keys && vi.keys.IE_PROTO) || '');
        return e ? 'Symbol(src)_1.' + e : '';
      })();
    function PO(e) {
      return !!eg && eg in e;
    }
    var IO = PO,
      kO = Function.prototype,
      NO = kO.toString;
    function LO(e) {
      if (e != null) {
        try {
          return NO.call(e);
        } catch {}
        try {
          return e + '';
        } catch {}
      }
      return '';
    }
    var qO = LO,
      jO = /[\\^$.*+?()[\]{}|]/g,
      MO = /^\[object .+?Constructor\]$/,
      $O = Function.prototype,
      UO = Object.prototype,
      zO = $O.toString,
      HO = UO.hasOwnProperty,
      GO = RegExp(
        '^' +
          zO
            .call(HO)
            .replace(jO, '\\$&')
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              '$1.*?',
            ) +
          '$',
      );
    function WO(e) {
      if (!sg(e) || IO(e)) return !1;
      var t = OO(e) ? GO : MO;
      return t.test(qO(e));
    }
    var VO = WO;
    function KO(e, t) {
      return e?.[t];
    }
    var YO = KO;
    function JO(e, t) {
      var r = YO(e, t);
      return VO(r) ? r : void 0;
    }
    var lg = JO;
    function XO(e, t) {
      return e === t || (e !== e && t !== t);
    }
    var QO = XO,
      ZO = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      e6 = /^\w*$/;
    function t6(e, t) {
      if (Si(e)) return !1;
      var r = typeof e;
      return r == 'number' ||
        r == 'symbol' ||
        r == 'boolean' ||
        e == null ||
        xi(e)
        ? !0
        : e6.test(e) || !ZO.test(e) || (t != null && e in Object(t));
    }
    var r6 = t6,
      n6 = lg(Object, 'create'),
      jr = n6;
    function a6() {
      (this.__data__ = jr ? jr(null) : {}), (this.size = 0);
    }
    var o6 = a6;
    function i6(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    var u6 = i6,
      s6 = '__lodash_hash_undefined__',
      l6 = Object.prototype,
      c6 = l6.hasOwnProperty;
    function d6(e) {
      var t = this.__data__;
      if (jr) {
        var r = t[e];
        return r === s6 ? void 0 : r;
      }
      return c6.call(t, e) ? t[e] : void 0;
    }
    var p6 = d6,
      f6 = Object.prototype,
      h6 = f6.hasOwnProperty;
    function m6(e) {
      var t = this.__data__;
      return jr ? t[e] !== void 0 : h6.call(t, e);
    }
    var g6 = m6,
      y6 = '__lodash_hash_undefined__';
    function b6(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = jr && t === void 0 ? y6 : t),
        this
      );
    }
    var E6 = b6;
    function Zt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Zt.prototype.clear = o6;
    Zt.prototype.delete = u6;
    Zt.prototype.get = p6;
    Zt.prototype.has = g6;
    Zt.prototype.set = E6;
    var tg = Zt;
    function A6() {
      (this.__data__ = []), (this.size = 0);
    }
    var v6 = A6;
    function D6(e, t) {
      for (var r = e.length; r--; ) if (QO(e[r][0], t)) return r;
      return -1;
    }
    var ra = D6,
      C6 = Array.prototype,
      x6 = C6.splice;
    function S6(e) {
      var t = this.__data__,
        r = ra(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : x6.call(t, r, 1), --this.size, !0;
    }
    var F6 = S6;
    function w6(e) {
      var t = this.__data__,
        r = ra(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    var B6 = w6;
    function T6(e) {
      return ra(this.__data__, e) > -1;
    }
    var _6 = T6;
    function O6(e, t) {
      var r = this.__data__,
        n = ra(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    var R6 = O6;
    function er(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    er.prototype.clear = v6;
    er.prototype.delete = F6;
    er.prototype.get = B6;
    er.prototype.has = _6;
    er.prototype.set = R6;
    var P6 = er,
      I6 = lg(Ci, 'Map'),
      k6 = I6;
    function N6() {
      (this.size = 0),
        (this.__data__ = {
          hash: new tg(),
          map: new (k6 || P6)(),
          string: new tg(),
        });
    }
    var L6 = N6;
    function q6(e) {
      var t = typeof e;
      return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
        ? e !== '__proto__'
        : e === null;
    }
    var j6 = q6;
    function M6(e, t) {
      var r = e.__data__;
      return j6(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
    }
    var na = M6;
    function $6(e) {
      var t = na(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    var U6 = $6;
    function z6(e) {
      return na(this, e).get(e);
    }
    var H6 = z6;
    function G6(e) {
      return na(this, e).has(e);
    }
    var W6 = G6;
    function V6(e, t) {
      var r = na(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    var K6 = V6;
    function tr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    tr.prototype.clear = L6;
    tr.prototype.delete = U6;
    tr.prototype.get = H6;
    tr.prototype.has = W6;
    tr.prototype.set = K6;
    var cg = tr,
      Y6 = 'Expected a function';
    function Fi(e, t) {
      if (typeof e != 'function' || (t != null && typeof t != 'function'))
        throw new TypeError(Y6);
      var r = function () {
        var n = arguments,
          a = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(a)) return o.get(a);
        var i = e.apply(this, n);
        return (r.cache = o.set(a, i) || o), i;
      };
      return (r.cache = new (Fi.Cache || cg)()), r;
    }
    Fi.Cache = cg;
    var J6 = Fi,
      X6 = 500;
    function Q6(e) {
      var t = J6(e, function (n) {
          return r.size === X6 && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    var Z6 = Q6,
      eR =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      tR = /\\(\\)?/g,
      rR = Z6(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(''),
          e.replace(eR, function (r, n, a, o) {
            t.push(a ? o.replace(tR, '$1') : n || r);
          }),
          t
        );
      }),
      nR = rR;
    function aR(e) {
      return e == null ? '' : xO(e);
    }
    var oR = aR;
    function iR(e, t) {
      return Si(e) ? e : r6(e, t) ? [e] : nR(oR(e));
    }
    var uR = iR,
      sR = 1 / 0;
    function lR(e) {
      if (typeof e == 'string' || xi(e)) return e;
      var t = e + '';
      return t == '0' && 1 / e == -sR ? '-0' : t;
    }
    var cR = lR;
    function dR(e, t) {
      t = uR(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[cR(t[r++])];
      return r && r == n ? e : void 0;
    }
    var pR = dR;
    function fR(e, t, r) {
      var n = e == null ? void 0 : pR(e, t);
      return n === void 0 ? r : n;
    }
    var hR = fR,
      ta = Z_,
      mR = (e) => {
        let t = null,
          r = !1,
          n = !1,
          a = !1,
          o = '';
        if (e.indexOf('//') >= 0 || e.indexOf('/*') >= 0)
          for (let i = 0; i < e.length; i += 1)
            !t && !r && !n && !a
              ? e[i] === '"' || e[i] === "'" || e[i] === '`'
                ? (t = e[i])
                : e[i] === '/' && e[i + 1] === '*'
                  ? (r = !0)
                  : e[i] === '/' && e[i + 1] === '/'
                    ? (n = !0)
                    : e[i] === '/' && e[i + 1] !== '/' && (a = !0)
              : (t &&
                  ((e[i] === t && e[i - 1] !== '\\') ||
                    (e[i] ===
                      `
` &&
                      t !== '`')) &&
                  (t = null),
                a &&
                  ((e[i] === '/' && e[i - 1] !== '\\') ||
                    e[i] ===
                      `
`) &&
                  (a = !1),
                r && e[i - 1] === '/' && e[i - 2] === '*' && (r = !1),
                n &&
                  e[i] ===
                    `
` &&
                  (n = !1)),
              !r && !n && (o += e[i]);
        else o = e;
        return o;
      },
      gR = (0, dg.default)(1e4)((e) => mR(e).replace(/\n\s*/g, '').trim()),
      yR = function (t, r) {
        let n = r.slice(0, r.indexOf('{')),
          a = r.slice(r.indexOf('{'));
        if (n.includes('=>') || n.includes('function')) return r;
        let o = n;
        return (o = o.replace(t, 'function')), o + a;
      },
      bR = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/,
      ER = (e) => e.match(/^[\[\{\"\}].*[\]\}\"]$/);
    function pg(e) {
      if (!ta(e)) return e;
      let t = e,
        r = !1;
      return (
        typeof Event < 'u' && e instanceof Event && ((t = Jm(t)), (r = !0)),
        (t = Object.keys(t).reduce((n, a) => {
          try {
            t[a] && t[a].toJSON, (n[a] = t[a]);
          } catch {
            r = !0;
          }
          return n;
        }, {})),
        r ? t : e
      );
    }
    var AR = function (t) {
        let r, n, a, o;
        return function (u, s) {
          try {
            if (u === '')
              return (
                (o = []),
                (r = new Map([[s, '[]']])),
                (n = new Map()),
                (a = []),
                s
              );
            let p = n.get(this) || this;
            for (; a.length && p !== a[0]; ) a.shift(), o.pop();
            if (typeof s == 'boolean') return s;
            if (s === void 0) return t.allowUndefined ? '_undefined_' : void 0;
            if (s === null) return null;
            if (typeof s == 'number')
              return s === -1 / 0
                ? '_-Infinity_'
                : s === 1 / 0
                  ? '_Infinity_'
                  : Number.isNaN(s)
                    ? '_NaN_'
                    : s;
            if (typeof s == 'bigint') return `_bigint_${s.toString()}`;
            if (typeof s == 'string')
              return bR.test(s) ? (t.allowDate ? `_date_${s}` : void 0) : s;
            if ((0, J_.default)(s))
              return t.allowRegExp ? `_regexp_${s.flags}|${s.source}` : void 0;
            if ((0, X_.default)(s)) {
              if (!t.allowFunction) return;
              let { name: E } = s,
                m = s.toString();
              return m.match(
                /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/,
              )
                ? `_function_${E}|${(() => {}).toString()}`
                : `_function_${E}|${gR(yR(u, m))}`;
            }
            if ((0, Q_.default)(s)) {
              if (!t.allowSymbol) return;
              let E = Symbol.keyFor(s);
              return E !== void 0
                ? `_gsymbol_${E}`
                : `_symbol_${s.toString().slice(7, -1)}`;
            }
            if (a.length >= t.maxDepth)
              return Array.isArray(s) ? `[Array(${s.length})]` : '[Object]';
            if (s === this) return `_duplicate_${JSON.stringify(o)}`;
            if (s instanceof Error && t.allowError)
              return {
                __isConvertedError__: !0,
                errorProperties: {
                  ...(s.cause ? { cause: s.cause } : {}),
                  ...s,
                  name: s.name,
                  message: s.message,
                  stack: s.stack,
                  '_constructor-name_': s.constructor.name,
                },
              };
            if (
              s.constructor &&
              s.constructor.name &&
              s.constructor.name !== 'Object' &&
              !Array.isArray(s) &&
              !t.allowClass
            )
              return;
            let y = r.get(s);
            if (!y) {
              let E = Array.isArray(s) ? s : pg(s);
              if (
                s.constructor &&
                s.constructor.name &&
                s.constructor.name !== 'Object' &&
                !Array.isArray(s) &&
                t.allowClass
              )
                try {
                  Object.assign(E, {
                    '_constructor-name_': s.constructor.name,
                  });
                } catch {}
              return (
                o.push(u),
                a.unshift(E),
                r.set(s, JSON.stringify(o)),
                s !== E && n.set(s, E),
                E
              );
            }
            return `_duplicate_${y}`;
          } catch {
            return;
          }
        };
      },
      vR = function reviver(options) {
        let refs = [],
          root;
        return function revive(key, value) {
          if (
            (key === '' &&
              ((root = value),
              refs.forEach(({ target: e, container: t, replacement: r }) => {
                let n = ER(r) ? JSON.parse(r) : r.split('.');
                n.length === 0 ? (t[e] = root) : (t[e] = hR(root, n));
              })),
            key === '_constructor-name_')
          )
            return value;
          if (ta(value) && value.__isConvertedError__) {
            let { message: e, ...t } = value.errorProperties,
              r = new Error(e);
            return Object.assign(r, t), r;
          }
          if (
            ta(value) &&
            value['_constructor-name_'] &&
            options.allowFunction
          ) {
            let e = value['_constructor-name_'];
            if (e !== 'Object') {
              let t = new Function(
                `return function ${e.replace(/[^a-zA-Z0-9$_]+/g, '')}(){}`,
              )();
              Object.setPrototypeOf(value, new t());
            }
            return delete value['_constructor-name_'], value;
          }
          if (
            typeof value == 'string' &&
            value.startsWith('_function_') &&
            options.allowFunction
          ) {
            let [, name, source] = value.match(/_function_([^|]*)\|(.*)/) || [],
              sourceSanitized = source.replace(/[(\(\))|\\| |\]|`]*$/, '');
            if (!options.lazyEval) return eval(`(${sourceSanitized})`);
            let result = (...args) => {
              let f = eval(`(${sourceSanitized})`);
              return f(...args);
            };
            return (
              Object.defineProperty(result, 'toString', {
                value: () => sourceSanitized,
              }),
              Object.defineProperty(result, 'name', { value: name }),
              result
            );
          }
          if (
            typeof value == 'string' &&
            value.startsWith('_regexp_') &&
            options.allowRegExp
          ) {
            let [, e, t] = value.match(/_regexp_([^|]*)\|(.*)/) || [];
            return new RegExp(t, e);
          }
          return typeof value == 'string' &&
            value.startsWith('_date_') &&
            options.allowDate
            ? new Date(value.replace('_date_', ''))
            : typeof value == 'string' && value.startsWith('_duplicate_')
              ? (refs.push({
                  target: key,
                  container: this,
                  replacement: value.replace(/^_duplicate_/, ''),
                }),
                null)
              : typeof value == 'string' &&
                  value.startsWith('_symbol_') &&
                  options.allowSymbol
                ? Symbol(value.replace('_symbol_', ''))
                : typeof value == 'string' &&
                    value.startsWith('_gsymbol_') &&
                    options.allowSymbol
                  ? Symbol.for(value.replace('_gsymbol_', ''))
                  : typeof value == 'string' && value === '_-Infinity_'
                    ? -1 / 0
                    : typeof value == 'string' && value === '_Infinity_'
                      ? 1 / 0
                      : typeof value == 'string' && value === '_NaN_'
                        ? NaN
                        : typeof value == 'string' &&
                            value.startsWith('_bigint_') &&
                            typeof BigInt == 'function'
                          ? BigInt(value.replace('_bigint_', ''))
                          : value;
        };
      },
      fg = {
        maxDepth: 10,
        space: void 0,
        allowFunction: !0,
        allowRegExp: !0,
        allowDate: !0,
        allowClass: !0,
        allowError: !0,
        allowUndefined: !0,
        allowSymbol: !0,
        lazyEval: !0,
      },
      DR = (e, t = {}) => {
        let r = { ...fg, ...t };
        return JSON.stringify(pg(e), AR(r), t.space);
      },
      CR = () => {
        let e = new Map();
        return function t(r) {
          ta(r) &&
            Object.entries(r).forEach(([n, a]) => {
              a === '_undefined_'
                ? (r[n] = void 0)
                : e.get(a) || (e.set(a, !0), t(a));
            }),
            Array.isArray(r) &&
              r.forEach((n, a) => {
                n === '_undefined_'
                  ? (e.set(n, !0), (r[a] = void 0))
                  : e.get(n) || (e.set(n, !0), t(n));
              });
        };
      },
      Ste = (e, t = {}) => {
        let r = { ...fg, ...t },
          n = JSON.parse(e, vR(r));
        return CR()(n), n;
      };
    l();
    c();
    d();
    l();
    c();
    d();
    l();
    c();
    d();
    l();
    c();
    d();
    l();
    c();
    d();
    l();
    c();
    d();
    l();
    c();
    d();
    var M4 = q.div(Bt, ({ theme: e }) => ({
        backgroundColor:
          e.base === 'light' ? 'rgba(0,0,0,.01)' : 'rgba(255,255,255,.01)',
        borderRadius: e.appBorderRadius,
        border: `1px dashed ${e.appBorderColor}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        margin: '25px 0 40px',
        color: ce(0.3, e.color.defaultText),
        fontSize: e.typography.size.s2,
      })),
      Fy = (e) =>
        h.createElement(M4, {
          ...e,
          className: 'docblock-emptyblock sb-unstyled',
        }),
      $4 = q(Gr)(({ theme: e }) => ({
        fontSize: `${e.typography.size.s2 - 1}px`,
        lineHeight: '19px',
        margin: '25px 0 40px',
        borderRadius: e.appBorderRadius,
        boxShadow:
          e.base === 'light'
            ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
            : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
        'pre.prismjs': { padding: 20, background: 'inherit' },
      })),
      U4 = q.div(({ theme: e }) => ({
        background: e.background.content,
        borderRadius: e.appBorderRadius,
        border: `1px solid ${e.appBorderColor}`,
        boxShadow:
          e.base === 'light'
            ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
            : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
        margin: '25px 0 40px',
        padding: '20px 20px 20px 22px',
      })),
      ca = q.div(({ theme: e }) => ({
        animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
        background: e.appBorderColor,
        height: 17,
        marginTop: 1,
        width: '60%',
        [`&:first-child${gu}`]: { margin: 0 },
      })),
      z4 = () =>
        h.createElement(
          U4,
          null,
          h.createElement(ca, null),
          h.createElement(ca, { style: { width: '80%' } }),
          h.createElement(ca, { style: { width: '30%' } }),
          h.createElement(ca, { style: { width: '80%' } }),
        ),
      wy = ({
        isLoading: e,
        error: t,
        language: r,
        code: n,
        dark: a,
        format: o,
        ...i
      }) => {
        if (e) return h.createElement(z4, null);
        if (t) return h.createElement(Fy, null, t);
        let u = h.createElement(
          $4,
          {
            bordered: !0,
            copyable: !0,
            format: o,
            language: r,
            className: 'docblock-source sb-unstyled',
            ...i,
          },
          n,
        );
        if (typeof a > 'u') return u;
        let s = a ? Ia.dark : Ia.light;
        return h.createElement(hu, { theme: mu(s) }, u);
      };
    wy.defaultProps = { format: !1 };
    var be = (e) =>
        `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`,
      Gi = 600,
      _ne = q.h1(Bt, ({ theme: e }) => ({
        color: e.color.defaultText,
        fontSize: e.typography.size.m3,
        fontWeight: e.typography.weight.bold,
        lineHeight: '32px',
        [`@media (min-width: ${Gi}px)`]: {
          fontSize: e.typography.size.l1,
          lineHeight: '36px',
          marginBottom: '16px',
        },
      })),
      One = q.h2(Bt, ({ theme: e }) => ({
        fontWeight: e.typography.weight.regular,
        fontSize: e.typography.size.s3,
        lineHeight: '20px',
        borderBottom: 'none',
        marginBottom: 15,
        [`@media (min-width: ${Gi}px)`]: {
          fontSize: e.typography.size.m1,
          lineHeight: '28px',
          marginBottom: 24,
        },
        color: ce(0.25, e.color.defaultText),
      })),
      Rne = q.div(({ theme: e }) => {
        let t = {
            fontFamily: e.typography.fonts.base,
            fontSize: e.typography.size.s3,
            margin: 0,
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
            WebkitOverflowScrolling: 'touch',
          },
          r = {
            margin: '20px 0 8px',
            padding: 0,
            cursor: 'text',
            position: 'relative',
            color: e.color.defaultText,
            '&:first-of-type': { marginTop: 0, paddingTop: 0 },
            '&:hover a.anchor': { textDecoration: 'none' },
            '& code': { fontSize: 'inherit' },
          },
          n = {
            lineHeight: 1,
            margin: '0 2px',
            padding: '3px 5px',
            whiteSpace: 'nowrap',
            borderRadius: 3,
            fontSize: e.typography.size.s2 - 1,
            border:
              e.base === 'light'
                ? `1px solid ${e.color.mediumlight}`
                : `1px solid ${e.color.darker}`,
            color:
              e.base === 'light'
                ? ce(0.1, e.color.defaultText)
                : ce(0.3, e.color.defaultText),
            backgroundColor:
              e.base === 'light' ? e.color.lighter : e.color.border,
          };
        return {
          maxWidth: 1e3,
          width: '100%',
          [be('a')]: {
            ...t,
            fontSize: 'inherit',
            lineHeight: '24px',
            color: e.color.secondary,
            textDecoration: 'none',
            '&.absent': { color: '#cc0000' },
            '&.anchor': {
              display: 'block',
              paddingLeft: 30,
              marginLeft: -30,
              cursor: 'pointer',
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
            },
          },
          [be('blockquote')]: {
            ...t,
            margin: '16px 0',
            borderLeft: `4px solid ${e.color.medium}`,
            padding: '0 15px',
            color: e.color.dark,
            '& > :first-of-type': { marginTop: 0 },
            '& > :last-child': { marginBottom: 0 },
          },
          [be('div')]: t,
          [be('dl')]: {
            ...t,
            margin: '16px 0',
            padding: 0,
            '& dt': {
              fontSize: '14px',
              fontWeight: 'bold',
              fontStyle: 'italic',
              padding: 0,
              margin: '16px 0 4px',
            },
            '& dt:first-of-type': { padding: 0 },
            '& dt > :first-of-type': { marginTop: 0 },
            '& dt > :last-child': { marginBottom: 0 },
            '& dd': { margin: '0 0 16px', padding: '0 15px' },
            '& dd > :first-of-type': { marginTop: 0 },
            '& dd > :last-child': { marginBottom: 0 },
          },
          [be('h1')]: {
            ...t,
            ...r,
            fontSize: `${e.typography.size.l1}px`,
            fontWeight: e.typography.weight.bold,
          },
          [be('h2')]: {
            ...t,
            ...r,
            fontSize: `${e.typography.size.m2}px`,
            paddingBottom: 4,
            borderBottom: `1px solid ${e.appBorderColor}`,
          },
          [be('h3')]: {
            ...t,
            ...r,
            fontSize: `${e.typography.size.m1}px`,
            fontWeight: e.typography.weight.bold,
          },
          [be('h4')]: { ...t, ...r, fontSize: `${e.typography.size.s3}px` },
          [be('h5')]: { ...t, ...r, fontSize: `${e.typography.size.s2}px` },
          [be('h6')]: {
            ...t,
            ...r,
            fontSize: `${e.typography.size.s2}px`,
            color: e.color.dark,
          },
          [be('hr')]: {
            border: '0 none',
            borderTop: `1px solid ${e.appBorderColor}`,
            height: 4,
            padding: 0,
          },
          [be('img')]: { maxWidth: '100%' },
          [be('li')]: {
            ...t,
            fontSize: e.typography.size.s2,
            color: e.color.defaultText,
            lineHeight: '24px',
            '& + li': { marginTop: '.25em' },
            '& ul, & ol': { marginTop: '.25em', marginBottom: 0 },
            '& code': n,
          },
          [be('ol')]: {
            ...t,
            margin: '16px 0',
            paddingLeft: 30,
            '& :first-of-type': { marginTop: 0 },
            '& :last-child': { marginBottom: 0 },
          },
          [be('p')]: {
            ...t,
            margin: '16px 0',
            fontSize: e.typography.size.s2,
            lineHeight: '24px',
            color: e.color.defaultText,
            '& code': n,
          },
          [be('pre')]: {
            ...t,
            fontFamily: e.typography.fonts.mono,
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            lineHeight: '18px',
            padding: '11px 1rem',
            whiteSpace: 'pre-wrap',
            color: 'inherit',
            borderRadius: 3,
            margin: '1rem 0',
            '&:not(.prismjs)': {
              background: 'transparent',
              border: 'none',
              borderRadius: 0,
              padding: 0,
              margin: 0,
            },
            '& pre, &.prismjs': {
              padding: 15,
              margin: 0,
              whiteSpace: 'pre-wrap',
              color: 'inherit',
              fontSize: '13px',
              lineHeight: '19px',
              code: { color: 'inherit', fontSize: 'inherit' },
            },
            '& code': { whiteSpace: 'pre' },
            '& code, & tt': { border: 'none' },
          },
          [be('span')]: {
            ...t,
            '&.frame': {
              display: 'block',
              overflow: 'hidden',
              '& > span': {
                border: `1px solid ${e.color.medium}`,
                display: 'block',
                float: 'left',
                overflow: 'hidden',
                margin: '13px 0 0',
                padding: 7,
                width: 'auto',
              },
              '& span img': { display: 'block', float: 'left' },
              '& span span': {
                clear: 'both',
                color: e.color.darkest,
                display: 'block',
                padding: '5px 0 0',
              },
            },
            '&.align-center': {
              display: 'block',
              overflow: 'hidden',
              clear: 'both',
              '& > span': {
                display: 'block',
                overflow: 'hidden',
                margin: '13px auto 0',
                textAlign: 'center',
              },
              '& span img': { margin: '0 auto', textAlign: 'center' },
            },
            '&.align-right': {
              display: 'block',
              overflow: 'hidden',
              clear: 'both',
              '& > span': {
                display: 'block',
                overflow: 'hidden',
                margin: '13px 0 0',
                textAlign: 'right',
              },
              '& span img': { margin: 0, textAlign: 'right' },
            },
            '&.float-left': {
              display: 'block',
              marginRight: 13,
              overflow: 'hidden',
              float: 'left',
              '& span': { margin: '13px 0 0' },
            },
            '&.float-right': {
              display: 'block',
              marginLeft: 13,
              overflow: 'hidden',
              float: 'right',
              '& > span': {
                display: 'block',
                overflow: 'hidden',
                margin: '13px auto 0',
                textAlign: 'right',
              },
            },
          },
          [be('table')]: {
            ...t,
            margin: '16px 0',
            fontSize: e.typography.size.s2,
            lineHeight: '24px',
            padding: 0,
            borderCollapse: 'collapse',
            '& tr': {
              borderTop: `1px solid ${e.appBorderColor}`,
              backgroundColor: e.appContentBg,
              margin: 0,
              padding: 0,
            },
            '& tr:nth-of-type(2n)': {
              backgroundColor:
                e.base === 'dark' ? e.color.darker : e.color.lighter,
            },
            '& tr th': {
              fontWeight: 'bold',
              color: e.color.defaultText,
              border: `1px solid ${e.appBorderColor}`,
              margin: 0,
              padding: '6px 13px',
            },
            '& tr td': {
              border: `1px solid ${e.appBorderColor}`,
              color: e.color.defaultText,
              margin: 0,
              padding: '6px 13px',
            },
            '& tr th :first-of-type, & tr td :first-of-type': { marginTop: 0 },
            '& tr th :last-child, & tr td :last-child': { marginBottom: 0 },
          },
          [be('ul')]: {
            ...t,
            margin: '16px 0',
            paddingLeft: 30,
            '& :first-of-type': { marginTop: 0 },
            '& :last-child': { marginBottom: 0 },
            listStyle: 'disc',
          },
        };
      }),
      Pne = q.div(({ theme: e }) => ({
        background: e.background.content,
        display: 'flex',
        justifyContent: 'center',
        padding: '4rem 20px',
        minHeight: '100vh',
        boxSizing: 'border-box',
        gap: '3rem',
        [`@media (min-width: ${Gi}px)`]: {},
      }));
    var fa = (e) => ({
        borderRadius: e.appBorderRadius,
        background: e.background.content,
        boxShadow:
          e.base === 'light'
            ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
            : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
        border: `1px solid ${e.appBorderColor}`,
      }),
      H4 = ({ zoom: e, resetZoom: t }) =>
        h.createElement(
          h.Fragment,
          null,
          h.createElement(
            pt,
            {
              key: 'zoomin',
              onClick: (r) => {
                r.preventDefault(), e(0.8);
              },
              title: 'Zoom in',
            },
            h.createElement(we, { icon: 'zoom' }),
          ),
          h.createElement(
            pt,
            {
              key: 'zoomout',
              onClick: (r) => {
                r.preventDefault(), e(1.25);
              },
              title: 'Zoom out',
            },
            h.createElement(we, { icon: 'zoomout' }),
          ),
          h.createElement(
            pt,
            {
              key: 'zoomreset',
              onClick: (r) => {
                r.preventDefault(), t();
              },
              title: 'Reset zoom',
            },
            h.createElement(we, { icon: 'zoomreset' }),
          ),
        ),
      G4 = q(Da)({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        transition: 'transform .2s linear',
      }),
      W4 = ({
        isLoading: e,
        storyId: t,
        baseUrl: r,
        zoom: n,
        resetZoom: a,
        ...o
      }) =>
        h.createElement(
          G4,
          { ...o },
          h.createElement(
            Zi,
            { key: 'left' },
            e
              ? [1, 2, 3].map((i) => h.createElement(xa, { key: i }))
              : h.createElement(H4, { zoom: n, resetZoom: a }),
          ),
        ),
      V4 = ur({ scale: 1 }),
      { window: Ine } = oe;
    var { PREVIEW_URL: kne } = oe;
    var K4 = q.div(
        ({ isColumn: e, columns: t, layout: r }) => ({
          display: e || !t ? 'block' : 'flex',
          position: 'relative',
          flexWrap: 'wrap',
          overflow: 'auto',
          flexDirection: e ? 'column' : 'row',
          '& .innerZoomElementWrapper > *': e
            ? {
                width: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
                display: 'block',
              }
            : {
                maxWidth: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
                display: 'inline-block',
              },
        }),
        ({ layout: e = 'padded' }) =>
          e === 'centered' || e === 'padded'
            ? {
                padding: '30px 20px',
                '& .innerZoomElementWrapper > *': {
                  width: 'auto',
                  border: '10px solid transparent!important',
                },
              }
            : {},
        ({ layout: e = 'padded' }) =>
          e === 'centered'
            ? {
                display: 'flex',
                justifyContent: 'center',
                justifyItems: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }
            : {},
        ({ columns: e }) =>
          e && e > 1
            ? {
                '.innerZoomElementWrapper > *': {
                  minWidth: `calc(100% / ${e} - 20px)`,
                },
              }
            : {},
      ),
      uy = q(wy)(({ theme: e }) => ({
        margin: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: e.appBorderRadius,
        borderBottomRightRadius: e.appBorderRadius,
        border: 'none',
        background:
          e.base === 'light'
            ? 'rgba(0, 0, 0, 0.85)'
            : Me(0.05, e.background.content),
        color: e.color.lightest,
        button: {
          background:
            e.base === 'light'
              ? 'rgba(0, 0, 0, 0.85)'
              : Me(0.05, e.background.content),
        },
      })),
      Y4 = q.div(
        ({ theme: e, withSource: t, isExpanded: r }) => ({
          position: 'relative',
          overflow: 'hidden',
          margin: '25px 0 40px',
          ...fa(e),
          borderBottomLeftRadius: t && r && 0,
          borderBottomRightRadius: t && r && 0,
          borderBottomWidth: r && 0,
          'h3 + &': { marginTop: '16px' },
        }),
        ({ withToolbar: e }) => e && { paddingTop: 40 },
      ),
      J4 = (e, t, r) => {
        switch (!0) {
          case !!(e && e.error):
            return {
              source: null,
              actionItem: {
                title: 'No code available',
                className:
                  'docblock-code-toggle docblock-code-toggle--disabled',
                disabled: !0,
                onClick: () => r(!1),
              },
            };
          case t:
            return {
              source: h.createElement(uy, { ...e, dark: !0 }),
              actionItem: {
                title: 'Hide code',
                className:
                  'docblock-code-toggle docblock-code-toggle--expanded',
                onClick: () => r(!1),
              },
            };
          default:
            return {
              source: h.createElement(uy, { ...e, dark: !0 }),
              actionItem: {
                title: 'Show code',
                className: 'docblock-code-toggle',
                onClick: () => r(!0),
              },
            };
        }
      };
    function X4(e) {
      if (Qi.count(e) === 1) {
        let t = e;
        if (t.props) return t.props.id;
      }
      return null;
    }
    var Q4 = q(W4)({
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 40,
      }),
      Z4 = q.div({ overflow: 'hidden', position: 'relative' }),
      e9 = ({
        isLoading: e,
        isColumn: t,
        columns: r,
        children: n,
        withSource: a,
        withToolbar: o = !1,
        isExpanded: i = !1,
        additionalActions: u,
        className: s,
        layout: p = 'padded',
        ...y
      }) => {
        let [E, m] = te(i),
          { source: g, actionItem: A } = J4(a, E, m),
          [b, x] = te(1),
          w = [s].concat(['sbdocs', 'sbdocs-preview', 'sb-unstyled']),
          R = a ? [A] : [],
          [I, M] = te(u ? [...u] : []),
          F = [...R, ...I],
          { window: L } = oe,
          k = ge(async (K) => {
            let { createCopyToClipboardFunction: U } =
              await Promise.resolve().then(() => (sr(), fu));
            U();
          }, []),
          z = (K) => {
            let U = L.getSelection();
            (U && U.type === 'Range') ||
              (K.preventDefault(),
              I.filter((se) => se.title === 'Copied').length === 0 &&
                k(g.props.code).then(() => {
                  M([...I, { title: 'Copied', onClick: () => {} }]),
                    L.setTimeout(
                      () => M(I.filter((se) => se.title !== 'Copied')),
                      1500,
                    );
                }));
          };
        return h.createElement(
          Y4,
          { withSource: a, withToolbar: o, ...y, className: w.join(' ') },
          o &&
            h.createElement(Q4, {
              isLoading: e,
              border: !0,
              zoom: (K) => x(b * K),
              resetZoom: () => x(1),
              storyId: X4(n),
              baseUrl: './iframe.html',
            }),
          h.createElement(
            V4.Provider,
            { value: { scale: b } },
            h.createElement(
              Z4,
              { className: 'docs-story', onCopyCapture: a && z },
              h.createElement(
                K4,
                { isColumn: t || !Array.isArray(n), columns: r, layout: p },
                h.createElement(
                  _a.Element,
                  { scale: b },
                  Array.isArray(n)
                    ? n.map((K, U) => h.createElement('div', { key: U }, K))
                    : h.createElement('div', null, n),
                ),
              ),
              h.createElement(Ea, { actionItems: F }),
            ),
          ),
          a && E && g,
        );
      },
      Nne = q(e9)(() => ({
        '.docs-story': { paddingTop: 32, paddingBottom: 40 },
      }));
    var t9 = q.table(({ theme: e }) => ({
        '&&': {
          borderCollapse: 'collapse',
          borderSpacing: 0,
          border: 'none',
          tr: { border: 'none !important', background: 'none' },
          'td, th': { padding: 0, border: 'none', width: 'auto!important' },
          marginTop: 0,
          marginBottom: 0,
          'th:first-of-type, td:first-of-type': { paddingLeft: 0 },
          'th:last-of-type, td:last-of-type': { paddingRight: 0 },
          td: {
            paddingTop: 0,
            paddingBottom: 4,
            '&:not(:first-of-type)': { paddingLeft: 10, paddingRight: 0 },
          },
          tbody: { boxShadow: 'none', border: 'none' },
          code: wt({ theme: e }),
          div: { span: { fontWeight: 'bold' } },
          '& code': {
            margin: 0,
            display: 'inline-block',
            fontSize: e.typography.size.s1,
          },
        },
      })),
      r9 = ({ tags: e }) => {
        let t = (e.params || []).filter((o) => o.description),
          r = t.length !== 0,
          n = e.deprecated != null,
          a = e.returns != null && e.returns.description != null;
        return !r && !a && !n
          ? null
          : h.createElement(
              h.Fragment,
              null,
              h.createElement(
                t9,
                null,
                h.createElement(
                  'tbody',
                  null,
                  n &&
                    h.createElement(
                      'tr',
                      { key: 'deprecated' },
                      h.createElement(
                        'td',
                        { colSpan: 2 },
                        h.createElement('strong', null, 'Deprecated'),
                        ': ',
                        e.deprecated,
                      ),
                    ),
                  r &&
                    t.map((o) =>
                      h.createElement(
                        'tr',
                        { key: o.name },
                        h.createElement(
                          'td',
                          null,
                          h.createElement('code', null, o.name),
                        ),
                        h.createElement('td', null, o.description),
                      ),
                    ),
                  a &&
                    h.createElement(
                      'tr',
                      { key: 'returns' },
                      h.createElement(
                        'td',
                        null,
                        h.createElement('code', null, 'Returns'),
                      ),
                      h.createElement('td', null, e.returns.description),
                    ),
                ),
              ),
            );
      },
      $i = 8,
      sy = q.div(({ isExpanded: e }) => ({
        display: 'flex',
        flexDirection: e ? 'column' : 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginBottom: '-4px',
        minWidth: 100,
      })),
      n9 = q.span(wt, ({ theme: e, simple: t = !1 }) => ({
        flex: '0 0 auto',
        fontFamily: e.typography.fonts.mono,
        fontSize: e.typography.size.s1,
        wordBreak: 'break-word',
        whiteSpace: 'normal',
        maxWidth: '100%',
        margin: 0,
        marginRight: '4px',
        marginBottom: '4px',
        paddingTop: '2px',
        paddingBottom: '2px',
        lineHeight: '13px',
        ...(t && {
          background: 'transparent',
          border: '0 none',
          paddingLeft: 0,
        }),
      })),
      a9 = q.button(({ theme: e }) => ({
        fontFamily: e.typography.fonts.mono,
        color: e.color.secondary,
        marginBottom: '4px',
        background: 'none',
        border: 'none',
      })),
      o9 = q.div(wt, ({ theme: e }) => ({
        fontFamily: e.typography.fonts.mono,
        color: e.color.secondary,
        fontSize: e.typography.size.s1,
        margin: 0,
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
      })),
      i9 = q.div(({ theme: e, width: t }) => ({
        width: t,
        minWidth: 200,
        maxWidth: 800,
        padding: 15,
        fontFamily: e.typography.fonts.mono,
        fontSize: e.typography.size.s1,
        boxSizing: 'content-box',
        '& code': { padding: '0 !important' },
      })),
      u9 = q(we)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 }),
      s9 = () => h.createElement('span', null, '-'),
      By = ({ text: e, simple: t }) => h.createElement(n9, { simple: t }, e),
      l9 = (0, Dy.default)(1e3)((e) => {
        let t = e.split(/\r?\n/);
        return `${Math.max(...t.map((r) => r.length))}ch`;
      }),
      c9 = (e) => {
        if (!e) return [e];
        let t = e.split('|').map((r) => r.trim());
        return (0, Cy.default)(t);
      },
      ly = (e, t = !0) => {
        let r = e;
        return (
          t || (r = e.slice(0, $i)),
          r.map((n) =>
            h.createElement(By, { key: n, text: n === '' ? '""' : n }),
          )
        );
      },
      d9 = ({ value: e, initialExpandedArgs: t }) => {
        let { summary: r, detail: n } = e,
          [a, o] = te(!1),
          [i, u] = te(t || !1);
        if (r == null) return null;
        let s = typeof r.toString == 'function' ? r.toString() : r;
        if (n == null) {
          if (/[(){}[\]<>]/.test(s)) return h.createElement(By, { text: s });
          let p = c9(s),
            y = p.length;
          return y > $i
            ? h.createElement(
                sy,
                { isExpanded: i },
                ly(p, i),
                h.createElement(
                  a9,
                  { onClick: () => u(!i) },
                  i ? 'Show less...' : `Show ${y - $i} more...`,
                ),
              )
            : h.createElement(sy, null, ly(p));
        }
        return h.createElement(
          Ta,
          {
            closeOnOutsideClick: !0,
            placement: 'bottom',
            visible: a,
            onVisibleChange: (p) => {
              o(p);
            },
            tooltip: h.createElement(
              i9,
              { width: l9(n) },
              h.createElement(Gr, { language: 'jsx', format: !1 }, n),
            ),
          },
          h.createElement(
            o9,
            { className: 'sbdocs-expandable' },
            h.createElement('span', null, s),
            h.createElement(u9, { icon: a ? 'arrowup' : 'arrowdown' }),
          ),
        );
      },
      qi = ({ value: e, initialExpandedArgs: t }) =>
        e == null
          ? h.createElement(s9, null)
          : h.createElement(d9, { value: e, initialExpandedArgs: t }),
      p9 = q.label(({ theme: e }) => ({
        lineHeight: '18px',
        alignItems: 'center',
        marginBottom: 8,
        display: 'inline-block',
        position: 'relative',
        whiteSpace: 'nowrap',
        background: e.boolean.background,
        borderRadius: '3em',
        padding: 1,
        input: {
          appearance: 'none',
          width: '100%',
          height: '100%',
          position: 'absolute',
          left: 0,
          top: 0,
          margin: 0,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          borderRadius: '3em',
          '&:focus': {
            outline: 'none',
            boxShadow: `${e.color.secondary} 0 0 0 1px inset !important`,
          },
        },
        span: {
          textAlign: 'center',
          fontSize: e.typography.size.s1,
          fontWeight: e.typography.weight.bold,
          lineHeight: '1',
          cursor: 'pointer',
          display: 'inline-block',
          padding: '7px 15px',
          transition: 'all 100ms ease-out',
          userSelect: 'none',
          borderRadius: '3em',
          color: ce(0.5, e.color.defaultText),
          background: 'transparent',
          '&:hover': {
            boxShadow: `${dr(0.3, e.appBorderColor)} 0 0 0 1px inset`,
          },
          '&:active': {
            boxShadow: `${dr(0.05, e.appBorderColor)} 0 0 0 2px inset`,
            color: dr(1, e.appBorderColor),
          },
          '&:first-of-type': { paddingRight: 8 },
          '&:last-of-type': { paddingLeft: 8 },
        },
        'input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type':
          {
            background: e.boolean.selectedBackground,
            boxShadow:
              e.base === 'light'
                ? `${dr(0.1, e.appBorderColor)} 0 0 2px`
                : `${e.appBorderColor} 0 0 0 1px`,
            color: e.color.defaultText,
            padding: '7px 15px',
          },
      })),
      f9 = (e) => e === 'true',
      h9 = ({ name: e, value: t, onChange: r, onBlur: n, onFocus: a }) => {
        let o = ge(() => r(!1), [r]);
        if (t === void 0)
          return h.createElement(
            Te.Button,
            { id: lr(e), onClick: o },
            'Set boolean',
          );
        let i = _e(e),
          u = typeof t == 'string' ? f9(t) : t;
        return h.createElement(
          p9,
          { htmlFor: i, 'aria-label': e },
          h.createElement('input', {
            id: i,
            type: 'checkbox',
            onChange: (s) => r(s.target.checked),
            checked: u,
            role: 'switch',
            name: e,
            onBlur: n,
            onFocus: a,
          }),
          h.createElement('span', { 'aria-hidden': 'true' }, 'False'),
          h.createElement('span', { 'aria-hidden': 'true' }, 'True'),
        );
      },
      m9 = (e) => {
        let [t, r, n] = e.split('-'),
          a = new Date();
        return (
          a.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(n, 10)),
          a
        );
      },
      g9 = (e) => {
        let [t, r] = e.split(':'),
          n = new Date();
        return n.setHours(parseInt(t, 10)), n.setMinutes(parseInt(r, 10)), n;
      },
      y9 = (e) => {
        let t = new Date(e),
          r = `000${t.getFullYear()}`.slice(-4),
          n = `0${t.getMonth() + 1}`.slice(-2),
          a = `0${t.getDate()}`.slice(-2);
        return `${r}-${n}-${a}`;
      },
      b9 = (e) => {
        let t = new Date(e),
          r = `0${t.getHours()}`.slice(-2),
          n = `0${t.getMinutes()}`.slice(-2);
        return `${r}:${n}`;
      },
      E9 = q.div(({ theme: e }) => ({
        flex: 1,
        display: 'flex',
        input: {
          marginLeft: 10,
          flex: 1,
          height: 32,
          '&::-webkit-calendar-picker-indicator': {
            opacity: 0.5,
            height: 12,
            filter: e.base === 'light' ? void 0 : 'invert(1)',
          },
        },
        'input:first-of-type': { marginLeft: 0, flexGrow: 4 },
        'input:last-of-type': { flexGrow: 3 },
      })),
      A9 = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: a }) => {
        let [o, i] = te(!0),
          u = Fe(),
          s = Fe();
        he(() => {
          o !== !1 &&
            (u && u.current && (u.current.value = y9(t)),
            s && s.current && (s.current.value = b9(t)));
        }, [t]);
        let p = (m) => {
            let g = m9(m.target.value),
              A = new Date(t);
            A.setFullYear(g.getFullYear(), g.getMonth(), g.getDate());
            let b = A.getTime();
            b && r(b), i(!!b);
          },
          y = (m) => {
            let g = g9(m.target.value),
              A = new Date(t);
            A.setHours(g.getHours()), A.setMinutes(g.getMinutes());
            let b = A.getTime();
            b && r(b), i(!!b);
          },
          E = _e(e);
        return h.createElement(
          E9,
          null,
          h.createElement(Te.Input, {
            type: 'date',
            max: '9999-12-31',
            ref: u,
            id: `${E}-date`,
            name: `${E}-date`,
            onChange: p,
            onFocus: n,
            onBlur: a,
          }),
          h.createElement(Te.Input, {
            type: 'time',
            id: `${E}-time`,
            name: `${E}-time`,
            ref: s,
            onChange: y,
            onFocus: n,
            onBlur: a,
          }),
          o ? null : h.createElement('div', null, 'invalid'),
        );
      },
      v9 = q.label({ display: 'flex' }),
      D9 = (e) => {
        let t = parseFloat(e);
        return Number.isNaN(t) ? void 0 : t;
      };
    var C9 = ({
        name: e,
        value: t,
        onChange: r,
        min: n,
        max: a,
        step: o,
        onBlur: i,
        onFocus: u,
      }) => {
        let [s, p] = te(typeof t == 'number' ? t : ''),
          [y, E] = te(!1),
          [m, g] = te(null),
          A = ge(
            (w) => {
              p(w.target.value);
              let R = parseFloat(w.target.value);
              Number.isNaN(R)
                ? g(new Error(`'${w.target.value}' is not a number`))
                : (r(R), g(null));
            },
            [r, g],
          ),
          b = ge(() => {
            p('0'), r(0), E(!0);
          }, [E]),
          x = Fe(null);
        return (
          he(() => {
            y && x.current && x.current.select();
          }, [y]),
          he(() => {
            s !== (typeof t == 'number' ? t : '') && p(t);
          }, [t]),
          !y && t === void 0
            ? h.createElement(
                Te.Button,
                { id: lr(e), onClick: b },
                'Set number',
              )
            : h.createElement(
                v9,
                null,
                h.createElement(Te.Input, {
                  ref: x,
                  id: _e(e),
                  type: 'number',
                  onChange: A,
                  size: 'flex',
                  placeholder: 'Edit number...',
                  value: s,
                  valid: m ? 'error' : null,
                  autoFocus: y,
                  name: e,
                  min: n,
                  max: a,
                  step: o,
                  onFocus: u,
                  onBlur: i,
                }),
              )
        );
      },
      Ty = (e, t) => {
        let r = t && Object.entries(t).find(([n, a]) => a === e);
        return r ? r[0] : void 0;
      },
      Ui = (e, t) =>
        e && t
          ? Object.entries(t)
              .filter((r) => e.includes(r[1]))
              .map((r) => r[0])
          : [],
      _y = (e, t) => e && t && e.map((r) => t[r]),
      x9 = q.div(({ isInline: e }) =>
        e
          ? {
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              label: { display: 'inline-flex', marginRight: 15 },
            }
          : { label: { display: 'flex' } },
      ),
      S9 = q.span({}),
      F9 = q.label({
        lineHeight: '20px',
        alignItems: 'center',
        marginBottom: 8,
        '&:last-child': { marginBottom: 0 },
        input: { margin: 0, marginRight: 6 },
      }),
      cy = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
        if (!t)
          return (
            ze.warn(`Checkbox with no options: ${e}`),
            h.createElement(h.Fragment, null, '-')
          );
        let o = Ui(r, t),
          [i, u] = te(o),
          s = (y) => {
            let E = y.target.value,
              m = [...i];
            m.includes(E) ? m.splice(m.indexOf(E), 1) : m.push(E),
              n(_y(m, t)),
              u(m);
          };
        he(() => {
          u(Ui(r, t));
        }, [r]);
        let p = _e(e);
        return h.createElement(
          x9,
          { isInline: a },
          Object.keys(t).map((y, E) => {
            let m = `${p}-${E}`;
            return h.createElement(
              F9,
              { key: m, htmlFor: m },
              h.createElement('input', {
                type: 'checkbox',
                id: m,
                name: m,
                value: y,
                onChange: s,
                checked: i?.includes(y),
              }),
              h.createElement(S9, null, y),
            );
          }),
        );
      },
      w9 = q.div(({ isInline: e }) =>
        e
          ? {
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              label: { display: 'inline-flex', marginRight: 15 },
            }
          : { label: { display: 'flex' } },
      ),
      B9 = q.span({}),
      T9 = q.label({
        lineHeight: '20px',
        alignItems: 'center',
        marginBottom: 8,
        '&:last-child': { marginBottom: 0 },
        input: { margin: 0, marginRight: 6 },
      }),
      dy = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
        if (!t)
          return (
            ze.warn(`Radio with no options: ${e}`),
            h.createElement(h.Fragment, null, '-')
          );
        let o = Ty(r, t),
          i = _e(e);
        return h.createElement(
          w9,
          { isInline: a },
          Object.keys(t).map((u, s) => {
            let p = `${i}-${s}`;
            return h.createElement(
              T9,
              { key: p, htmlFor: p },
              h.createElement('input', {
                type: 'radio',
                id: p,
                name: p,
                value: u,
                onChange: (y) => n(t[y.currentTarget.value]),
                checked: u === o,
              }),
              h.createElement(B9, null, u),
            );
          }),
        );
      },
      _9 = {
        appearance: 'none',
        border: '0 none',
        boxSizing: 'inherit',
        display: ' block',
        margin: ' 0',
        background: 'transparent',
        padding: 0,
        fontSize: 'inherit',
        position: 'relative',
      },
      Oy = q.select(_9, ({ theme: e }) => ({
        boxSizing: 'border-box',
        position: 'relative',
        padding: '6px 10px',
        width: '100%',
        color: e.input.color || 'inherit',
        background: e.input.background,
        borderRadius: e.input.borderRadius,
        boxShadow: `${e.input.border} 0 0 0 1px inset`,
        fontSize: e.typography.size.s2 - 1,
        lineHeight: '20px',
        '&:focus': {
          boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
          outline: 'none',
        },
        '&[disabled]': { cursor: 'not-allowed', opacity: 0.5 },
        '::placeholder': { color: e.textMutedColor },
        '&[multiple]': {
          overflow: 'auto',
          padding: 0,
          option: {
            display: 'block',
            padding: '6px 10px',
            marginLeft: 1,
            marginRight: 1,
          },
        },
      })),
      Ry = q.span(({ theme: e }) => ({
        display: 'inline-block',
        lineHeight: 'normal',
        overflow: 'hidden',
        position: 'relative',
        verticalAlign: 'top',
        width: '100%',
        svg: {
          position: 'absolute',
          zIndex: 1,
          pointerEvents: 'none',
          height: '12px',
          marginTop: '-6px',
          right: '12px',
          top: '50%',
          fill: e.textMutedColor,
          path: { fill: e.textMutedColor },
        },
      })),
      py = 'Choose option...',
      O9 = ({ name: e, value: t, options: r, onChange: n }) => {
        let a = (u) => {
            n(r[u.currentTarget.value]);
          },
          o = Ty(t, r) || py,
          i = _e(e);
        return h.createElement(
          Ry,
          null,
          h.createElement(we, { icon: 'arrowdown' }),
          h.createElement(
            Oy,
            { id: i, value: o, onChange: a },
            h.createElement(
              'option',
              { key: 'no-selection', disabled: !0 },
              py,
            ),
            Object.keys(r).map((u) =>
              h.createElement('option', { key: u, value: u }, u),
            ),
          ),
        );
      },
      R9 = ({ name: e, value: t, options: r, onChange: n }) => {
        let a = (u) => {
            let s = Array.from(u.currentTarget.options)
              .filter((p) => p.selected)
              .map((p) => p.value);
            n(_y(s, r));
          },
          o = Ui(t, r),
          i = _e(e);
        return h.createElement(
          Ry,
          null,
          h.createElement(
            Oy,
            { id: i, multiple: !0, value: o, onChange: a },
            Object.keys(r).map((u) =>
              h.createElement('option', { key: u, value: u }, u),
            ),
          ),
        );
      },
      fy = (e) => {
        let { name: t, options: r } = e;
        return r
          ? e.isMulti
            ? h.createElement(R9, { ...e })
            : h.createElement(O9, { ...e })
          : (ze.warn(`Select with no options: ${t}`),
            h.createElement(h.Fragment, null, '-'));
      },
      P9 = (e, t) =>
        Array.isArray(e)
          ? e.reduce((r, n) => ((r[t?.[n] || String(n)] = n), r), {})
          : e,
      I9 = {
        check: cy,
        'inline-check': cy,
        radio: dy,
        'inline-radio': dy,
        select: fy,
        'multi-select': fy,
      },
      or = (e) => {
        let { type: t = 'select', labels: r, argType: n } = e,
          a = {
            ...e,
            options: n ? P9(n.options, r) : {},
            isInline: t.includes('inline'),
            isMulti: t.includes('multi'),
          },
          o = I9[t];
        if (o) return h.createElement(o, { ...a });
        throw new Error(`Unknown options type: ${t}`);
      },
      Wi = 'value',
      k9 = 'key',
      N9 = 'Error',
      L9 = 'Object',
      q9 = 'Array',
      j9 = 'String',
      M9 = 'Number',
      $9 = 'Boolean',
      U9 = 'Date',
      z9 = 'Null',
      H9 = 'Undefined',
      G9 = 'Function',
      W9 = 'Symbol',
      Py = 'ADD_DELTA_TYPE',
      Iy = 'REMOVE_DELTA_TYPE',
      ky = 'UPDATE_DELTA_TYPE';
    function dt(e) {
      return e !== null &&
        typeof e == 'object' &&
        !Array.isArray(e) &&
        typeof e[Symbol.iterator] == 'function'
        ? 'Iterable'
        : Object.prototype.toString.call(e).slice(8, -1);
    }
    function Ny(e, t) {
      let r = dt(e),
        n = dt(t);
      return (r === 'Function' || n === 'Function') && n !== r;
    }
    var Vi = class extends Qe {
      constructor(e) {
        super(e),
          (this.state = { inputRefKey: null, inputRefValue: null }),
          (this.refInputValue = this.refInputValue.bind(this)),
          (this.refInputKey = this.refInputKey.bind(this)),
          (this.onKeydown = this.onKeydown.bind(this)),
          (this.onSubmit = this.onSubmit.bind(this));
      }
      componentDidMount() {
        let { inputRefKey: e, inputRefValue: t } = this.state,
          { onlyValue: r } = this.props;
        e && typeof e.focus == 'function' && e.focus(),
          r && t && typeof t.focus == 'function' && t.focus(),
          document.addEventListener('keydown', this.onKeydown);
      }
      componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeydown);
      }
      onKeydown(e) {
        e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.repeat ||
          ((e.code === 'Enter' || e.key === 'Enter') &&
            (e.preventDefault(), this.onSubmit()),
          (e.code === 'Escape' || e.key === 'Escape') &&
            (e.preventDefault(), this.props.handleCancel()));
      }
      onSubmit() {
        let {
            handleAdd: e,
            onlyValue: t,
            onSubmitValueParser: r,
            keyPath: n,
            deep: a,
          } = this.props,
          { inputRefKey: o, inputRefValue: i } = this.state,
          u = {};
        if (!t) {
          if (!o.value) return;
          u.key = o.value;
        }
        (u.newValue = r(!1, n, a, u.key, i.value)), e(u);
      }
      refInputKey(e) {
        this.state.inputRefKey = e;
      }
      refInputValue(e) {
        this.state.inputRefValue = e;
      }
      render() {
        let {
            handleCancel: e,
            onlyValue: t,
            addButtonElement: r,
            cancelButtonElement: n,
            inputElementGenerator: a,
            keyPath: o,
            deep: i,
          } = this.props,
          u = fe(r, { onClick: this.onSubmit }),
          s = fe(n, { onClick: e }),
          p = a(Wi, o, i),
          y = fe(p, { placeholder: 'Value', ref: this.refInputValue }),
          E = null;
        if (!t) {
          let m = a(k9, o, i);
          E = fe(m, { placeholder: 'Key', ref: this.refInputKey });
        }
        return h.createElement(
          'span',
          { className: 'rejt-add-value-node' },
          E,
          y,
          s,
          u,
        );
      }
    };
    Vi.defaultProps = {
      onlyValue: !1,
      addButtonElement: h.createElement('button', null, '+'),
      cancelButtonElement: h.createElement('button', null, 'c'),
    };
    var Ly = class extends Qe {
      constructor(e) {
        super(e);
        let t = [...e.keyPath, e.name];
        (this.state = {
          data: e.data,
          name: e.name,
          keyPath: t,
          deep: e.deep,
          nextDeep: e.deep + 1,
          collapsed: e.isCollapsed(t, e.deep, e.data),
          addFormVisible: !1,
        }),
          (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
          (this.handleRemoveItem = this.handleRemoveItem.bind(this)),
          (this.handleAddMode = this.handleAddMode.bind(this)),
          (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
          (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
          (this.handleEditValue = this.handleEditValue.bind(this)),
          (this.onChildUpdate = this.onChildUpdate.bind(this)),
          (this.renderCollapsed = this.renderCollapsed.bind(this)),
          (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
      }
      static getDerivedStateFromProps(e, t) {
        return e.data !== t.data ? { data: e.data } : null;
      }
      onChildUpdate(e, t) {
        let { data: r, keyPath: n } = this.state;
        (r[e] = t), this.setState({ data: r });
        let { onUpdate: a } = this.props,
          o = n.length;
        a(n[o - 1], r);
      }
      handleAddMode() {
        this.setState({ addFormVisible: !0 });
      }
      handleCollapseMode() {
        this.setState((e) => ({ collapsed: !e.collapsed }));
      }
      handleRemoveItem(e) {
        return () => {
          let { beforeRemoveAction: t, logger: r } = this.props,
            { data: n, keyPath: a, nextDeep: o } = this.state,
            i = n[e];
          t(e, a, o, i)
            .then(() => {
              let u = { keyPath: a, deep: o, key: e, oldValue: i, type: Iy };
              n.splice(e, 1), this.setState({ data: n });
              let { onUpdate: s, onDeltaUpdate: p } = this.props;
              s(a[a.length - 1], n), p(u);
            })
            .catch(r.error);
        };
      }
      handleAddValueAdd({ newValue: e }) {
        let { data: t, keyPath: r, nextDeep: n } = this.state,
          { beforeAddAction: a, logger: o } = this.props;
        a(t.length, r, n, e)
          .then(() => {
            let i = [...t, e];
            this.setState({ data: i }), this.handleAddValueCancel();
            let { onUpdate: u, onDeltaUpdate: s } = this.props;
            u(r[r.length - 1], i),
              s({
                type: Py,
                keyPath: r,
                deep: n,
                key: i.length - 1,
                newValue: e,
              });
          })
          .catch(o.error);
      }
      handleAddValueCancel() {
        this.setState({ addFormVisible: !1 });
      }
      handleEditValue({ key: e, value: t }) {
        return new Promise((r, n) => {
          let { beforeUpdateAction: a } = this.props,
            { data: o, keyPath: i, nextDeep: u } = this.state,
            s = o[e];
          a(e, i, u, s, t)
            .then(() => {
              (o[e] = t), this.setState({ data: o });
              let { onUpdate: p, onDeltaUpdate: y } = this.props;
              p(i[i.length - 1], o),
                y({
                  type: ky,
                  keyPath: i,
                  deep: u,
                  key: e,
                  newValue: t,
                  oldValue: s,
                }),
                r(void 0);
            })
            .catch(n);
        });
      }
      renderCollapsed() {
        let { name: e, data: t, keyPath: r, deep: n } = this.state,
          {
            handleRemove: a,
            readOnly: o,
            getStyle: i,
            dataType: u,
            minusMenuElement: s,
          } = this.props,
          { minus: p, collapsed: y } = i(e, t, r, n, u),
          E = o(e, t, r, n, u),
          m = fe(s, { onClick: a, className: 'rejt-minus-menu', style: p });
        return h.createElement(
          'span',
          { className: 'rejt-collapsed' },
          h.createElement(
            'span',
            {
              className: 'rejt-collapsed-text',
              style: y,
              onClick: this.handleCollapseMode,
            },
            '[...] ',
            t.length,
            ' ',
            t.length === 1 ? 'item' : 'items',
          ),
          !E && m,
        );
      }
      renderNotCollapsed() {
        let {
            name: e,
            data: t,
            keyPath: r,
            deep: n,
            addFormVisible: a,
            nextDeep: o,
          } = this.state,
          {
            isCollapsed: i,
            handleRemove: u,
            onDeltaUpdate: s,
            readOnly: p,
            getStyle: y,
            dataType: E,
            addButtonElement: m,
            cancelButtonElement: g,
            editButtonElement: A,
            inputElementGenerator: b,
            textareaElementGenerator: x,
            minusMenuElement: w,
            plusMenuElement: R,
            beforeRemoveAction: I,
            beforeAddAction: M,
            beforeUpdateAction: F,
            logger: L,
            onSubmitValueParser: k,
          } = this.props,
          {
            minus: z,
            plus: K,
            delimiter: U,
            ul: se,
            addForm: ee,
          } = y(e, t, r, n, E),
          J = p(e, t, r, n, E),
          O = fe(R, {
            onClick: this.handleAddMode,
            className: 'rejt-plus-menu',
            style: K,
          }),
          T = fe(w, { onClick: u, className: 'rejt-minus-menu', style: z }),
          j = !0,
          G = '[',
          Y = ']';
        return h.createElement(
          'span',
          { className: 'rejt-not-collapsed' },
          h.createElement(
            'span',
            { className: 'rejt-not-collapsed-delimiter', style: U },
            G,
          ),
          !a && O,
          h.createElement(
            'ul',
            { className: 'rejt-not-collapsed-list', style: se },
            t.map((V, Q) =>
              h.createElement(ha, {
                key: Q,
                name: Q.toString(),
                data: V,
                keyPath: r,
                deep: o,
                isCollapsed: i,
                handleRemove: this.handleRemoveItem(Q),
                handleUpdateValue: this.handleEditValue,
                onUpdate: this.onChildUpdate,
                onDeltaUpdate: s,
                readOnly: p,
                getStyle: y,
                addButtonElement: m,
                cancelButtonElement: g,
                editButtonElement: A,
                inputElementGenerator: b,
                textareaElementGenerator: x,
                minusMenuElement: w,
                plusMenuElement: R,
                beforeRemoveAction: I,
                beforeAddAction: M,
                beforeUpdateAction: F,
                logger: L,
                onSubmitValueParser: k,
              }),
            ),
          ),
          !J &&
            a &&
            h.createElement(
              'div',
              { className: 'rejt-add-form', style: ee },
              h.createElement(Vi, {
                handleAdd: this.handleAddValueAdd,
                handleCancel: this.handleAddValueCancel,
                onlyValue: j,
                addButtonElement: m,
                cancelButtonElement: g,
                inputElementGenerator: b,
                keyPath: r,
                deep: n,
                onSubmitValueParser: k,
              }),
            ),
          h.createElement(
            'span',
            { className: 'rejt-not-collapsed-delimiter', style: U },
            Y,
          ),
          !J && T,
        );
      }
      render() {
        let {
            name: e,
            collapsed: t,
            data: r,
            keyPath: n,
            deep: a,
          } = this.state,
          { dataType: o, getStyle: i } = this.props,
          u = t ? this.renderCollapsed() : this.renderNotCollapsed(),
          s = i(e, r, n, a, o);
        return h.createElement(
          'div',
          { className: 'rejt-array-node' },
          h.createElement(
            'span',
            { onClick: this.handleCollapseMode },
            h.createElement(
              'span',
              { className: 'rejt-name', style: s.name },
              e,
              ' :',
              ' ',
            ),
          ),
          u,
        );
      }
    };
    Ly.defaultProps = {
      keyPath: [],
      deep: 0,
      minusMenuElement: h.createElement('span', null, ' - '),
      plusMenuElement: h.createElement('span', null, ' + '),
    };
    var qy = class extends Qe {
      constructor(e) {
        super(e);
        let t = [...e.keyPath, e.name];
        (this.state = {
          value: e.value,
          name: e.name,
          keyPath: t,
          deep: e.deep,
          editEnabled: !1,
          inputRef: null,
        }),
          (this.handleEditMode = this.handleEditMode.bind(this)),
          (this.refInput = this.refInput.bind(this)),
          (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
          (this.handleEdit = this.handleEdit.bind(this)),
          (this.onKeydown = this.onKeydown.bind(this));
      }
      static getDerivedStateFromProps(e, t) {
        return e.value !== t.value ? { value: e.value } : null;
      }
      componentDidUpdate() {
        let {
            editEnabled: e,
            inputRef: t,
            name: r,
            value: n,
            keyPath: a,
            deep: o,
          } = this.state,
          { readOnly: i, dataType: u } = this.props,
          s = i(r, n, a, o, u);
        e && !s && typeof t.focus == 'function' && t.focus();
      }
      componentDidMount() {
        document.addEventListener('keydown', this.onKeydown);
      }
      componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeydown);
      }
      onKeydown(e) {
        e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.repeat ||
          ((e.code === 'Enter' || e.key === 'Enter') &&
            (e.preventDefault(), this.handleEdit()),
          (e.code === 'Escape' || e.key === 'Escape') &&
            (e.preventDefault(), this.handleCancelEdit()));
      }
      handleEdit() {
        let {
            handleUpdateValue: e,
            originalValue: t,
            logger: r,
            onSubmitValueParser: n,
            keyPath: a,
          } = this.props,
          { inputRef: o, name: i, deep: u } = this.state;
        if (!o) return;
        let s = n(!0, a, u, i, o.value);
        e({ value: s, key: i })
          .then(() => {
            Ny(t, s) || this.handleCancelEdit();
          })
          .catch(r.error);
      }
      handleEditMode() {
        this.setState({ editEnabled: !0 });
      }
      refInput(e) {
        this.state.inputRef = e;
      }
      handleCancelEdit() {
        this.setState({ editEnabled: !1 });
      }
      render() {
        let {
            name: e,
            value: t,
            editEnabled: r,
            keyPath: n,
            deep: a,
          } = this.state,
          {
            handleRemove: o,
            originalValue: i,
            readOnly: u,
            dataType: s,
            getStyle: p,
            editButtonElement: y,
            cancelButtonElement: E,
            textareaElementGenerator: m,
            minusMenuElement: g,
            keyPath: A,
          } = this.props,
          b = p(e, i, n, a, s),
          x = null,
          w = null,
          R = u(e, i, n, a, s);
        if (r && !R) {
          let I = m(Wi, A, a, e, i, s),
            M = fe(y, { onClick: this.handleEdit }),
            F = fe(E, { onClick: this.handleCancelEdit }),
            L = fe(I, { ref: this.refInput, defaultValue: i });
          (x = h.createElement(
            'span',
            { className: 'rejt-edit-form', style: b.editForm },
            L,
            ' ',
            F,
            M,
          )),
            (w = null);
        } else {
          x = h.createElement(
            'span',
            {
              className: 'rejt-value',
              style: b.value,
              onClick: R ? null : this.handleEditMode,
            },
            t,
          );
          let I = fe(g, {
            onClick: o,
            className: 'rejt-minus-menu',
            style: b.minus,
          });
          w = R ? null : I;
        }
        return h.createElement(
          'li',
          { className: 'rejt-function-value-node', style: b.li },
          h.createElement(
            'span',
            { className: 'rejt-name', style: b.name },
            e,
            ' :',
            ' ',
          ),
          x,
          w,
        );
      }
    };
    qy.defaultProps = {
      keyPath: [],
      deep: 0,
      handleUpdateValue: () => {},
      editButtonElement: h.createElement('button', null, 'e'),
      cancelButtonElement: h.createElement('button', null, 'c'),
      minusMenuElement: h.createElement('span', null, ' - '),
    };
    var ha = class extends Qe {
      constructor(e) {
        super(e),
          (this.state = {
            data: e.data,
            name: e.name,
            keyPath: e.keyPath,
            deep: e.deep,
          });
      }
      static getDerivedStateFromProps(e, t) {
        return e.data !== t.data ? { data: e.data } : null;
      }
      render() {
        let { data: e, name: t, keyPath: r, deep: n } = this.state,
          {
            isCollapsed: a,
            handleRemove: o,
            handleUpdateValue: i,
            onUpdate: u,
            onDeltaUpdate: s,
            readOnly: p,
            getStyle: y,
            addButtonElement: E,
            cancelButtonElement: m,
            editButtonElement: g,
            inputElementGenerator: A,
            textareaElementGenerator: b,
            minusMenuElement: x,
            plusMenuElement: w,
            beforeRemoveAction: R,
            beforeAddAction: I,
            beforeUpdateAction: M,
            logger: F,
            onSubmitValueParser: L,
          } = this.props,
          k = () => !0,
          z = dt(e);
        switch (z) {
          case N9:
            return h.createElement(zi, {
              data: e,
              name: t,
              isCollapsed: a,
              keyPath: r,
              deep: n,
              handleRemove: o,
              onUpdate: u,
              onDeltaUpdate: s,
              readOnly: k,
              dataType: z,
              getStyle: y,
              addButtonElement: E,
              cancelButtonElement: m,
              editButtonElement: g,
              inputElementGenerator: A,
              textareaElementGenerator: b,
              minusMenuElement: x,
              plusMenuElement: w,
              beforeRemoveAction: R,
              beforeAddAction: I,
              beforeUpdateAction: M,
              logger: F,
              onSubmitValueParser: L,
            });
          case L9:
            return h.createElement(zi, {
              data: e,
              name: t,
              isCollapsed: a,
              keyPath: r,
              deep: n,
              handleRemove: o,
              onUpdate: u,
              onDeltaUpdate: s,
              readOnly: p,
              dataType: z,
              getStyle: y,
              addButtonElement: E,
              cancelButtonElement: m,
              editButtonElement: g,
              inputElementGenerator: A,
              textareaElementGenerator: b,
              minusMenuElement: x,
              plusMenuElement: w,
              beforeRemoveAction: R,
              beforeAddAction: I,
              beforeUpdateAction: M,
              logger: F,
              onSubmitValueParser: L,
            });
          case q9:
            return h.createElement(Ly, {
              data: e,
              name: t,
              isCollapsed: a,
              keyPath: r,
              deep: n,
              handleRemove: o,
              onUpdate: u,
              onDeltaUpdate: s,
              readOnly: p,
              dataType: z,
              getStyle: y,
              addButtonElement: E,
              cancelButtonElement: m,
              editButtonElement: g,
              inputElementGenerator: A,
              textareaElementGenerator: b,
              minusMenuElement: x,
              plusMenuElement: w,
              beforeRemoveAction: R,
              beforeAddAction: I,
              beforeUpdateAction: M,
              logger: F,
              onSubmitValueParser: L,
            });
          case j9:
            return h.createElement(ct, {
              name: t,
              value: `"${e}"`,
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: o,
              handleUpdateValue: i,
              readOnly: p,
              dataType: z,
              getStyle: y,
              cancelButtonElement: m,
              editButtonElement: g,
              inputElementGenerator: A,
              minusMenuElement: x,
              logger: F,
              onSubmitValueParser: L,
            });
          case M9:
            return h.createElement(ct, {
              name: t,
              value: e,
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: o,
              handleUpdateValue: i,
              readOnly: p,
              dataType: z,
              getStyle: y,
              cancelButtonElement: m,
              editButtonElement: g,
              inputElementGenerator: A,
              minusMenuElement: x,
              logger: F,
              onSubmitValueParser: L,
            });
          case $9:
            return h.createElement(ct, {
              name: t,
              value: e ? 'true' : 'false',
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: o,
              handleUpdateValue: i,
              readOnly: p,
              dataType: z,
              getStyle: y,
              cancelButtonElement: m,
              editButtonElement: g,
              inputElementGenerator: A,
              minusMenuElement: x,
              logger: F,
              onSubmitValueParser: L,
            });
          case U9:
            return h.createElement(ct, {
              name: t,
              value: e.toISOString(),
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: o,
              handleUpdateValue: i,
              readOnly: k,
              dataType: z,
              getStyle: y,
              cancelButtonElement: m,
              editButtonElement: g,
              inputElementGenerator: A,
              minusMenuElement: x,
              logger: F,
              onSubmitValueParser: L,
            });
          case z9:
            return h.createElement(ct, {
              name: t,
              value: 'null',
              originalValue: 'null',
              keyPath: r,
              deep: n,
              handleRemove: o,
              handleUpdateValue: i,
              readOnly: p,
              dataType: z,
              getStyle: y,
              cancelButtonElement: m,
              editButtonElement: g,
              inputElementGenerator: A,
              minusMenuElement: x,
              logger: F,
              onSubmitValueParser: L,
            });
          case H9:
            return h.createElement(ct, {
              name: t,
              value: 'undefined',
              originalValue: 'undefined',
              keyPath: r,
              deep: n,
              handleRemove: o,
              handleUpdateValue: i,
              readOnly: p,
              dataType: z,
              getStyle: y,
              cancelButtonElement: m,
              editButtonElement: g,
              inputElementGenerator: A,
              minusMenuElement: x,
              logger: F,
              onSubmitValueParser: L,
            });
          case G9:
            return h.createElement(qy, {
              name: t,
              value: e.toString(),
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: o,
              handleUpdateValue: i,
              readOnly: p,
              dataType: z,
              getStyle: y,
              cancelButtonElement: m,
              editButtonElement: g,
              textareaElementGenerator: b,
              minusMenuElement: x,
              logger: F,
              onSubmitValueParser: L,
            });
          case W9:
            return h.createElement(ct, {
              name: t,
              value: e.toString(),
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: o,
              handleUpdateValue: i,
              readOnly: k,
              dataType: z,
              getStyle: y,
              cancelButtonElement: m,
              editButtonElement: g,
              inputElementGenerator: A,
              minusMenuElement: x,
              logger: F,
              onSubmitValueParser: L,
            });
          default:
            return null;
        }
      }
    };
    ha.defaultProps = { keyPath: [], deep: 0 };
    var zi = class extends Qe {
      constructor(e) {
        super(e);
        let t = e.deep === -1 ? [] : [...e.keyPath, e.name];
        (this.state = {
          name: e.name,
          data: e.data,
          keyPath: t,
          deep: e.deep,
          nextDeep: e.deep + 1,
          collapsed: e.isCollapsed(t, e.deep, e.data),
          addFormVisible: !1,
        }),
          (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
          (this.handleRemoveValue = this.handleRemoveValue.bind(this)),
          (this.handleAddMode = this.handleAddMode.bind(this)),
          (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
          (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
          (this.handleEditValue = this.handleEditValue.bind(this)),
          (this.onChildUpdate = this.onChildUpdate.bind(this)),
          (this.renderCollapsed = this.renderCollapsed.bind(this)),
          (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
      }
      static getDerivedStateFromProps(e, t) {
        return e.data !== t.data ? { data: e.data } : null;
      }
      onChildUpdate(e, t) {
        let { data: r, keyPath: n } = this.state;
        (r[e] = t), this.setState({ data: r });
        let { onUpdate: a } = this.props,
          o = n.length;
        a(n[o - 1], r);
      }
      handleAddMode() {
        this.setState({ addFormVisible: !0 });
      }
      handleAddValueCancel() {
        this.setState({ addFormVisible: !1 });
      }
      handleAddValueAdd({ key: e, newValue: t }) {
        let { data: r, keyPath: n, nextDeep: a } = this.state,
          { beforeAddAction: o, logger: i } = this.props;
        o(e, n, a, t)
          .then(() => {
            (r[e] = t), this.setState({ data: r }), this.handleAddValueCancel();
            let { onUpdate: u, onDeltaUpdate: s } = this.props;
            u(n[n.length - 1], r),
              s({ type: Py, keyPath: n, deep: a, key: e, newValue: t });
          })
          .catch(i.error);
      }
      handleRemoveValue(e) {
        return () => {
          let { beforeRemoveAction: t, logger: r } = this.props,
            { data: n, keyPath: a, nextDeep: o } = this.state,
            i = n[e];
          t(e, a, o, i)
            .then(() => {
              let u = { keyPath: a, deep: o, key: e, oldValue: i, type: Iy };
              delete n[e], this.setState({ data: n });
              let { onUpdate: s, onDeltaUpdate: p } = this.props;
              s(a[a.length - 1], n), p(u);
            })
            .catch(r.error);
        };
      }
      handleCollapseMode() {
        this.setState((e) => ({ collapsed: !e.collapsed }));
      }
      handleEditValue({ key: e, value: t }) {
        return new Promise((r, n) => {
          let { beforeUpdateAction: a } = this.props,
            { data: o, keyPath: i, nextDeep: u } = this.state,
            s = o[e];
          a(e, i, u, s, t)
            .then(() => {
              (o[e] = t), this.setState({ data: o });
              let { onUpdate: p, onDeltaUpdate: y } = this.props;
              p(i[i.length - 1], o),
                y({
                  type: ky,
                  keyPath: i,
                  deep: u,
                  key: e,
                  newValue: t,
                  oldValue: s,
                }),
                r();
            })
            .catch(n);
        });
      }
      renderCollapsed() {
        let { name: e, keyPath: t, deep: r, data: n } = this.state,
          {
            handleRemove: a,
            readOnly: o,
            dataType: i,
            getStyle: u,
            minusMenuElement: s,
          } = this.props,
          { minus: p, collapsed: y } = u(e, n, t, r, i),
          E = Object.getOwnPropertyNames(n),
          m = o(e, n, t, r, i),
          g = fe(s, { onClick: a, className: 'rejt-minus-menu', style: p });
        return h.createElement(
          'span',
          { className: 'rejt-collapsed' },
          h.createElement(
            'span',
            {
              className: 'rejt-collapsed-text',
              style: y,
              onClick: this.handleCollapseMode,
            },
            '{...}',
            ' ',
            E.length,
            ' ',
            E.length === 1 ? 'key' : 'keys',
          ),
          !m && g,
        );
      }
      renderNotCollapsed() {
        let {
            name: e,
            data: t,
            keyPath: r,
            deep: n,
            nextDeep: a,
            addFormVisible: o,
          } = this.state,
          {
            isCollapsed: i,
            handleRemove: u,
            onDeltaUpdate: s,
            readOnly: p,
            getStyle: y,
            dataType: E,
            addButtonElement: m,
            cancelButtonElement: g,
            editButtonElement: A,
            inputElementGenerator: b,
            textareaElementGenerator: x,
            minusMenuElement: w,
            plusMenuElement: R,
            beforeRemoveAction: I,
            beforeAddAction: M,
            beforeUpdateAction: F,
            logger: L,
            onSubmitValueParser: k,
          } = this.props,
          {
            minus: z,
            plus: K,
            addForm: U,
            ul: se,
            delimiter: ee,
          } = y(e, t, r, n, E),
          J = Object.getOwnPropertyNames(t),
          O = p(e, t, r, n, E),
          T = fe(R, {
            onClick: this.handleAddMode,
            className: 'rejt-plus-menu',
            style: K,
          }),
          j = fe(w, { onClick: u, className: 'rejt-minus-menu', style: z }),
          G = J.map((Q) =>
            h.createElement(ha, {
              key: Q,
              name: Q,
              data: t[Q],
              keyPath: r,
              deep: a,
              isCollapsed: i,
              handleRemove: this.handleRemoveValue(Q),
              handleUpdateValue: this.handleEditValue,
              onUpdate: this.onChildUpdate,
              onDeltaUpdate: s,
              readOnly: p,
              getStyle: y,
              addButtonElement: m,
              cancelButtonElement: g,
              editButtonElement: A,
              inputElementGenerator: b,
              textareaElementGenerator: x,
              minusMenuElement: w,
              plusMenuElement: R,
              beforeRemoveAction: I,
              beforeAddAction: M,
              beforeUpdateAction: F,
              logger: L,
              onSubmitValueParser: k,
            }),
          ),
          Y = '{',
          V = '}';
        return h.createElement(
          'span',
          { className: 'rejt-not-collapsed' },
          h.createElement(
            'span',
            { className: 'rejt-not-collapsed-delimiter', style: ee },
            Y,
          ),
          !O && T,
          h.createElement(
            'ul',
            { className: 'rejt-not-collapsed-list', style: se },
            G,
          ),
          !O &&
            o &&
            h.createElement(
              'div',
              { className: 'rejt-add-form', style: U },
              h.createElement(Vi, {
                handleAdd: this.handleAddValueAdd,
                handleCancel: this.handleAddValueCancel,
                addButtonElement: m,
                cancelButtonElement: g,
                inputElementGenerator: b,
                keyPath: r,
                deep: n,
                onSubmitValueParser: k,
              }),
            ),
          h.createElement(
            'span',
            { className: 'rejt-not-collapsed-delimiter', style: ee },
            V,
          ),
          !O && j,
        );
      }
      render() {
        let {
            name: e,
            collapsed: t,
            data: r,
            keyPath: n,
            deep: a,
          } = this.state,
          { getStyle: o, dataType: i } = this.props,
          u = t ? this.renderCollapsed() : this.renderNotCollapsed(),
          s = o(e, r, n, a, i);
        return h.createElement(
          'div',
          { className: 'rejt-object-node' },
          h.createElement(
            'span',
            { onClick: this.handleCollapseMode },
            h.createElement(
              'span',
              { className: 'rejt-name', style: s.name },
              e,
              ' :',
              ' ',
            ),
          ),
          u,
        );
      }
    };
    zi.defaultProps = {
      keyPath: [],
      deep: 0,
      minusMenuElement: h.createElement('span', null, ' - '),
      plusMenuElement: h.createElement('span', null, ' + '),
    };
    var ct = class extends Qe {
      constructor(e) {
        super(e);
        let t = [...e.keyPath, e.name];
        (this.state = {
          value: e.value,
          name: e.name,
          keyPath: t,
          deep: e.deep,
          editEnabled: !1,
          inputRef: null,
        }),
          (this.handleEditMode = this.handleEditMode.bind(this)),
          (this.refInput = this.refInput.bind(this)),
          (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
          (this.handleEdit = this.handleEdit.bind(this)),
          (this.onKeydown = this.onKeydown.bind(this));
      }
      static getDerivedStateFromProps(e, t) {
        return e.value !== t.value ? { value: e.value } : null;
      }
      componentDidUpdate() {
        let {
            editEnabled: e,
            inputRef: t,
            name: r,
            value: n,
            keyPath: a,
            deep: o,
          } = this.state,
          { readOnly: i, dataType: u } = this.props,
          s = i(r, n, a, o, u);
        e && !s && typeof t.focus == 'function' && t.focus();
      }
      componentDidMount() {
        document.addEventListener('keydown', this.onKeydown);
      }
      componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeydown);
      }
      onKeydown(e) {
        e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.repeat ||
          ((e.code === 'Enter' || e.key === 'Enter') &&
            (e.preventDefault(), this.handleEdit()),
          (e.code === 'Escape' || e.key === 'Escape') &&
            (e.preventDefault(), this.handleCancelEdit()));
      }
      handleEdit() {
        let {
            handleUpdateValue: e,
            originalValue: t,
            logger: r,
            onSubmitValueParser: n,
            keyPath: a,
          } = this.props,
          { inputRef: o, name: i, deep: u } = this.state;
        if (!o) return;
        let s = n(!0, a, u, i, o.value);
        e({ value: s, key: i })
          .then(() => {
            Ny(t, s) || this.handleCancelEdit();
          })
          .catch(r.error);
      }
      handleEditMode() {
        this.setState({ editEnabled: !0 });
      }
      refInput(e) {
        this.state.inputRef = e;
      }
      handleCancelEdit() {
        this.setState({ editEnabled: !1 });
      }
      render() {
        let {
            name: e,
            value: t,
            editEnabled: r,
            keyPath: n,
            deep: a,
          } = this.state,
          {
            handleRemove: o,
            originalValue: i,
            readOnly: u,
            dataType: s,
            getStyle: p,
            editButtonElement: y,
            cancelButtonElement: E,
            inputElementGenerator: m,
            minusMenuElement: g,
            keyPath: A,
          } = this.props,
          b = p(e, i, n, a, s),
          x = u(e, i, n, a, s),
          w = r && !x,
          R = m(Wi, A, a, e, i, s),
          I = fe(y, { onClick: this.handleEdit }),
          M = fe(E, { onClick: this.handleCancelEdit }),
          F = fe(R, { ref: this.refInput, defaultValue: JSON.stringify(i) }),
          L = fe(g, {
            onClick: o,
            className: 'rejt-minus-menu',
            style: b.minus,
          });
        return h.createElement(
          'li',
          { className: 'rejt-value-node', style: b.li },
          h.createElement(
            'span',
            { className: 'rejt-name', style: b.name },
            e,
            ' : ',
          ),
          w
            ? h.createElement(
                'span',
                { className: 'rejt-edit-form', style: b.editForm },
                F,
                ' ',
                M,
                I,
              )
            : h.createElement(
                'span',
                {
                  className: 'rejt-value',
                  style: b.value,
                  onClick: x ? null : this.handleEditMode,
                },
                String(t),
              ),
          !x && !w && L,
        );
      }
    };
    ct.defaultProps = {
      keyPath: [],
      deep: 0,
      handleUpdateValue: () => Promise.resolve(),
      editButtonElement: h.createElement('button', null, 'e'),
      cancelButtonElement: h.createElement('button', null, 'c'),
      minusMenuElement: h.createElement('span', null, ' - '),
    };
    var V9 = {
        minus: { color: 'red' },
        plus: { color: 'green' },
        collapsed: { color: 'grey' },
        delimiter: {},
        ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
        name: { color: '#2287CD' },
        addForm: {},
      },
      K9 = {
        minus: { color: 'red' },
        plus: { color: 'green' },
        collapsed: { color: 'grey' },
        delimiter: {},
        ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
        name: { color: '#2287CD' },
        addForm: {},
      },
      Y9 = {
        minus: { color: 'red' },
        editForm: {},
        value: { color: '#7bba3d' },
        li: { minHeight: '22px', lineHeight: '22px', outline: '0px' },
        name: { color: '#2287CD' },
      };
    function J9(e) {
      let t = e;
      if (t.indexOf('function') === 0) return (0, eval)(`(${t})`);
      try {
        t = JSON.parse(e);
      } catch {}
      return t;
    }
    var jy = class extends Qe {
      constructor(e) {
        super(e),
          (this.state = { data: e.data, rootName: e.rootName }),
          (this.onUpdate = this.onUpdate.bind(this)),
          (this.removeRoot = this.removeRoot.bind(this));
      }
      static getDerivedStateFromProps(e, t) {
        return e.data !== t.data || e.rootName !== t.rootName
          ? { data: e.data, rootName: e.rootName }
          : null;
      }
      onUpdate(e, t) {
        this.setState({ data: t }), this.props.onFullyUpdate(t);
      }
      removeRoot() {
        this.onUpdate(null, null);
      }
      render() {
        let { data: e, rootName: t } = this.state,
          {
            isCollapsed: r,
            onDeltaUpdate: n,
            readOnly: a,
            getStyle: o,
            addButtonElement: i,
            cancelButtonElement: u,
            editButtonElement: s,
            inputElement: p,
            textareaElement: y,
            minusMenuElement: E,
            plusMenuElement: m,
            beforeRemoveAction: g,
            beforeAddAction: A,
            beforeUpdateAction: b,
            logger: x,
            onSubmitValueParser: w,
            fallback: R = null,
          } = this.props,
          I = dt(e),
          M = a;
        dt(a) === 'Boolean' && (M = () => a);
        let F = p;
        p && dt(p) !== 'Function' && (F = () => p);
        let L = y;
        return (
          y && dt(y) !== 'Function' && (L = () => y),
          I === 'Object' || I === 'Array'
            ? h.createElement(
                'div',
                { className: 'rejt-tree' },
                h.createElement(ha, {
                  data: e,
                  name: t,
                  deep: -1,
                  isCollapsed: r,
                  onUpdate: this.onUpdate,
                  onDeltaUpdate: n,
                  readOnly: M,
                  getStyle: o,
                  addButtonElement: i,
                  cancelButtonElement: u,
                  editButtonElement: s,
                  inputElementGenerator: F,
                  textareaElementGenerator: L,
                  minusMenuElement: E,
                  plusMenuElement: m,
                  handleRemove: this.removeRoot,
                  beforeRemoveAction: g,
                  beforeAddAction: A,
                  beforeUpdateAction: b,
                  logger: x,
                  onSubmitValueParser: w,
                }),
              )
            : R
        );
      }
    };
    jy.defaultProps = {
      rootName: 'root',
      isCollapsed: (e, t) => t !== -1,
      getStyle: (e, t, r, n, a) => {
        switch (a) {
          case 'Object':
          case 'Error':
            return V9;
          case 'Array':
            return K9;
          default:
            return Y9;
        }
      },
      readOnly: () => !1,
      onFullyUpdate: () => {},
      onDeltaUpdate: () => {},
      beforeRemoveAction: () => Promise.resolve(),
      beforeAddAction: () => Promise.resolve(),
      beforeUpdateAction: () => Promise.resolve(),
      logger: { error: () => {} },
      onSubmitValueParser: (e, t, r, n, a) => J9(a),
      inputElement: () => h.createElement('input', null),
      textareaElement: () => h.createElement('textarea', null),
      fallback: null,
    };
    var { window: X9 } = oe,
      Q9 = q.div(({ theme: e }) => ({
        position: 'relative',
        display: 'flex',
        '.rejt-tree': { marginLeft: '1rem', fontSize: '13px' },
        '.rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed':
          { '& > svg': { opacity: 0, transition: 'opacity 0.2s' } },
        '.rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed':
          { '& > svg': { opacity: 1 } },
        '.rejt-edit-form button': { display: 'none' },
        '.rejt-add-form': { marginLeft: 10 },
        '.rejt-add-value-node': {
          display: 'inline-flex',
          alignItems: 'center',
        },
        '.rejt-name': { lineHeight: '22px' },
        '.rejt-not-collapsed-delimiter': { lineHeight: '22px' },
        '.rejt-plus-menu': { marginLeft: 5 },
        '.rejt-object-node > span > *, .rejt-array-node > span > *': {
          position: 'relative',
          zIndex: 2,
        },
        '.rejt-object-node, .rejt-array-node': { position: 'relative' },
        '.rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before':
          {
            content: '""',
            position: 'absolute',
            top: 0,
            display: 'block',
            width: '100%',
            marginLeft: '-1rem',
            padding: '0 4px 0 1rem',
            height: 22,
          },
        '.rejt-collapsed::before, .rejt-not-collapsed::before': {
          zIndex: 1,
          background: 'transparent',
          borderRadius: 4,
          transition: 'background 0.2s',
          pointerEvents: 'none',
          opacity: 0.1,
        },
        '.rejt-object-node:hover, .rejt-array-node:hover': {
          '& > .rejt-collapsed::before, & > .rejt-not-collapsed::before': {
            background: e.color.secondary,
          },
        },
        '.rejt-collapsed::after, .rejt-not-collapsed::after': {
          content: '""',
          position: 'absolute',
          display: 'inline-block',
          pointerEvents: 'none',
          width: 0,
          height: 0,
        },
        '.rejt-collapsed::after': {
          left: -8,
          top: 8,
          borderTop: '3px solid transparent',
          borderBottom: '3px solid transparent',
          borderLeft: '3px solid rgba(153,153,153,0.6)',
        },
        '.rejt-not-collapsed::after': {
          left: -10,
          top: 10,
          borderTop: '3px solid rgba(153,153,153,0.6)',
          borderLeft: '3px solid transparent',
          borderRight: '3px solid transparent',
        },
        '.rejt-value': {
          display: 'inline-block',
          border: '1px solid transparent',
          borderRadius: 4,
          margin: '1px 0',
          padding: '0 4px',
          cursor: 'text',
          color: e.color.defaultText,
        },
        '.rejt-value-node:hover > .rejt-value': {
          background: e.color.lighter,
          borderColor: e.appBorderColor,
        },
      })),
      ji = q.button(({ theme: e, primary: t }) => ({
        border: 0,
        height: 20,
        margin: 1,
        borderRadius: 4,
        background: t ? e.color.secondary : 'transparent',
        color: t ? e.color.lightest : e.color.dark,
        fontWeight: t ? 'bold' : 'normal',
        cursor: 'pointer',
        order: t ? 'initial' : 9,
      })),
      hy = q(we)(({ theme: e, icon: t, disabled: r }) => ({
        display: 'inline-block',
        verticalAlign: 'middle',
        width: 15,
        height: 15,
        padding: 3,
        marginLeft: 5,
        cursor: r ? 'not-allowed' : 'pointer',
        color: e.textMutedColor,
        '&:hover': r
          ? {}
          : { color: t === 'subtract' ? e.color.negative : e.color.ancillary },
        'svg + &': { marginLeft: 0 },
      })),
      my = q.input(({ theme: e, placeholder: t }) => ({
        outline: 0,
        margin: t ? 1 : '1px 0',
        padding: '3px 4px',
        color: e.color.defaultText,
        background: e.background.app,
        border: `1px solid ${e.appBorderColor}`,
        borderRadius: 4,
        lineHeight: '14px',
        width: t === 'Key' ? 80 : 120,
        '&:focus': { border: `1px solid ${e.color.secondary}` },
      })),
      Z9 = q(pt)(({ theme: e }) => ({
        position: 'absolute',
        zIndex: 2,
        top: 2,
        right: 2,
        height: 21,
        padding: '0 3px',
        background: e.background.bar,
        border: `1px solid ${e.appBorderColor}`,
        borderRadius: 3,
        color: e.textMutedColor,
        fontSize: '9px',
        fontWeight: 'bold',
        textDecoration: 'none',
        span: { marginLeft: 3, marginTop: 1 },
      })),
      eP = q(Te.Textarea)(({ theme: e }) => ({
        flex: 1,
        padding: '7px 6px',
        fontFamily: e.typography.fonts.mono,
        fontSize: '12px',
        lineHeight: '18px',
        '&::placeholder': {
          fontFamily: e.typography.fonts.base,
          fontSize: '13px',
        },
        '&:placeholder-shown': { padding: '7px 10px' },
      })),
      tP = {
        bubbles: !0,
        cancelable: !0,
        key: 'Enter',
        code: 'Enter',
        keyCode: 13,
      },
      rP = (e) => {
        e.currentTarget.dispatchEvent(new X9.KeyboardEvent('keydown', tP));
      },
      nP = (e) => {
        e.currentTarget.select();
      },
      aP = (e) => () => ({
        name: { color: e.color.secondary },
        collapsed: { color: e.color.dark },
        ul: { listStyle: 'none', margin: '0 0 0 1rem', padding: 0 },
        li: { outline: 0 },
      }),
      gy = ({ name: e, value: t, onChange: r }) => {
        let n = yu(),
          a = Ze(() => t && (0, xy.default)(t), [t]),
          o = a != null,
          [i, u] = te(!o),
          [s, p] = te(null),
          y = ge(
            (x) => {
              try {
                x && r(JSON.parse(x)), p(void 0);
              } catch (w) {
                p(w);
              }
            },
            [r],
          ),
          [E, m] = te(!1),
          g = ge(() => {
            r({}), m(!0);
          }, [m]),
          A = Fe(null);
        if (
          (he(() => {
            E && A.current && A.current.select();
          }, [E]),
          !o)
        )
          return h.createElement(
            Te.Button,
            { id: lr(e), onClick: g },
            'Set object',
          );
        let b = h.createElement(eP, {
          ref: A,
          id: _e(e),
          name: e,
          defaultValue: t === null ? '' : JSON.stringify(t, null, 2),
          onBlur: (x) => y(x.target.value),
          placeholder: 'Edit JSON string...',
          autoFocus: E,
          valid: s ? 'error' : null,
        });
        return h.createElement(
          Q9,
          null,
          ['Object', 'Array'].includes(dt(a)) &&
            h.createElement(
              Z9,
              {
                href: '#',
                onClick: (x) => {
                  x.preventDefault(), u((w) => !w);
                },
              },
              h.createElement(we, { icon: i ? 'eyeclose' : 'eye' }),
              h.createElement('span', null, 'RAW'),
            ),
          i
            ? b
            : h.createElement(jy, {
                data: a,
                rootName: e,
                onFullyUpdate: r,
                getStyle: aP(n),
                cancelButtonElement: h.createElement(
                  ji,
                  { type: 'button' },
                  'Cancel',
                ),
                editButtonElement: h.createElement(
                  ji,
                  { type: 'submit' },
                  'Save',
                ),
                addButtonElement: h.createElement(
                  ji,
                  { type: 'submit', primary: !0 },
                  'Save',
                ),
                plusMenuElement: h.createElement(hy, { icon: 'add' }),
                minusMenuElement: h.createElement(hy, { icon: 'subtract' }),
                inputElement: (x, w, R, I) =>
                  I
                    ? h.createElement(my, { onFocus: nP, onBlur: rP })
                    : h.createElement(my, null),
                fallback: b,
              }),
        );
      },
      oP = q.input(({ theme: e, min: t, max: r, value: n }) => ({
        '&': {
          width: '100%',
          backgroundColor: 'transparent',
          appearance: 'none',
        },
        '&::-webkit-slider-runnable-track': {
          background:
            e.base === 'light'
              ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${Me(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Me(0.02, e.input.background)} 100%)`
              : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${nt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${nt(0.02, e.input.background)} 100%)`,
          boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
          borderRadius: 6,
          width: '100%',
          height: 6,
          cursor: 'pointer',
        },
        '&::-webkit-slider-thumb': {
          marginTop: '-6px',
          width: 16,
          height: 16,
          border: `1px solid ${je(e.appBorderColor, 0.2)}`,
          borderRadius: '50px',
          boxShadow: `0 1px 3px 0px ${je(e.appBorderColor, 0.2)}`,
          cursor: 'grab',
          appearance: 'none',
          background: `${e.input.background}`,
          transition: 'all 150ms ease-out',
          '&:hover': {
            background: `${Me(0.05, e.input.background)}`,
            transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
            transition: 'all 50ms ease-out',
          },
          '&:active': {
            background: `${e.input.background}`,
            transform: 'scale3d(1, 1, 1) translateY(0px)',
            cursor: 'grabbing',
          },
        },
        '&:focus': {
          outline: 'none',
          '&::-webkit-slider-runnable-track': {
            borderColor: je(e.color.secondary, 0.4),
          },
          '&::-webkit-slider-thumb': {
            borderColor: e.color.secondary,
            boxShadow: `0 0px 5px 0px ${e.color.secondary}`,
          },
        },
        '&::-moz-range-track': {
          background:
            e.base === 'light'
              ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${Me(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Me(0.02, e.input.background)} 100%)`
              : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${nt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${nt(0.02, e.input.background)} 100%)`,
          boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
          borderRadius: 6,
          width: '100%',
          height: 6,
          cursor: 'pointer',
          outline: 'none',
        },
        '&::-moz-range-thumb': {
          width: 16,
          height: 16,
          border: `1px solid ${je(e.appBorderColor, 0.2)}`,
          borderRadius: '50px',
          boxShadow: `0 1px 3px 0px ${je(e.appBorderColor, 0.2)}`,
          cursor: 'grab',
          background: `${e.input.background}`,
          transition: 'all 150ms ease-out',
          '&:hover': {
            background: `${Me(0.05, e.input.background)}`,
            transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
            transition: 'all 50ms ease-out',
          },
          '&:active': {
            background: `${e.input.background}`,
            transform: 'scale3d(1, 1, 1) translateY(0px)',
            cursor: 'grabbing',
          },
        },
        '&::-ms-track': {
          background:
            e.base === 'light'
              ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${Me(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Me(0.02, e.input.background)} 100%)`
              : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${nt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${nt(0.02, e.input.background)} 100%)`,
          boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
          color: 'transparent',
          width: '100%',
          height: '6px',
          cursor: 'pointer',
        },
        '&::-ms-fill-lower': { borderRadius: 6 },
        '&::-ms-fill-upper': { borderRadius: 6 },
        '&::-ms-thumb': {
          width: 16,
          height: 16,
          background: `${e.input.background}`,
          border: `1px solid ${je(e.appBorderColor, 0.2)}`,
          borderRadius: 50,
          cursor: 'grab',
          marginTop: 0,
        },
        '@supports (-ms-ime-align:auto)': {
          'input[type=range]': { margin: '0' },
        },
      })),
      My = q.span({
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 12,
        whiteSpace: 'nowrap',
        fontFeatureSettings: 'tnum',
        fontVariantNumeric: 'tabular-nums',
      }),
      iP = q(My)(({ numberOFDecimalsPlaces: e, max: t }) => ({
        width: `${e + t.toString().length * 2 + 3}ch`,
        textAlign: 'right',
        flexShrink: 0,
      })),
      uP = q.div({ display: 'flex', alignItems: 'center', width: '100%' });
    function sP(e) {
      let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
      return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
    }
    var lP = ({
        name: e,
        value: t,
        onChange: r,
        min: n = 0,
        max: a = 100,
        step: o = 1,
        onBlur: i,
        onFocus: u,
      }) => {
        let s = (E) => {
            r(D9(E.target.value));
          },
          p = t !== void 0,
          y = Ze(() => sP(o), [o]);
        return h.createElement(
          uP,
          null,
          h.createElement(My, null, n),
          h.createElement(oP, {
            id: _e(e),
            type: 'range',
            onChange: s,
            name: e,
            value: t,
            min: n,
            max: a,
            step: o,
            onFocus: u,
            onBlur: i,
          }),
          h.createElement(
            iP,
            { numberOFDecimalsPlaces: y, max: a },
            p ? t.toFixed(y) : '--',
            ' / ',
            a,
          ),
        );
      },
      cP = q.label({ display: 'flex' }),
      dP = q.div(({ isMaxed: e }) => ({
        marginLeft: '0.75rem',
        paddingTop: '0.35rem',
        color: e ? 'red' : void 0,
      })),
      pP = ({
        name: e,
        value: t,
        onChange: r,
        onFocus: n,
        onBlur: a,
        maxLength: o,
      }) => {
        let i = (E) => {
            r(E.target.value);
          },
          [u, s] = te(!1),
          p = ge(() => {
            r(''), s(!0);
          }, [s]);
        if (t === void 0)
          return h.createElement(
            Te.Button,
            { id: lr(e), onClick: p },
            'Set string',
          );
        let y = typeof t == 'string';
        return h.createElement(
          cP,
          null,
          h.createElement(Te.Textarea, {
            id: _e(e),
            maxLength: o,
            onChange: i,
            size: 'flex',
            placeholder: 'Edit string...',
            autoFocus: u,
            valid: y ? null : 'error',
            name: e,
            value: y ? t : '',
            onFocus: n,
            onBlur: a,
          }),
          o &&
            h.createElement(
              dP,
              { isMaxed: t?.length === o },
              t?.length ?? 0,
              ' / ',
              o,
            ),
        );
      },
      fP = q(Te.Input)({ padding: 10 });
    function hP(e) {
      e.forEach((t) => {
        t.startsWith('blob:') && URL.revokeObjectURL(t);
      });
    }
    var mP = ({ onChange: e, name: t, accept: r = 'image/*', value: n }) => {
        let a = Fe(null);
        function o(i) {
          if (!i.target.files) return;
          let u = Array.from(i.target.files).map((s) => URL.createObjectURL(s));
          e(u), hP(n);
        }
        return (
          he(() => {
            n == null && a.current && (a.current.value = null);
          }, [n, t]),
          h.createElement(fP, {
            ref: a,
            id: _e(t),
            type: 'file',
            name: t,
            multiple: !0,
            onChange: o,
            accept: r,
            size: 'flex',
          })
        );
      },
      gP = tu(() => Promise.resolve().then(() => (iy(), oy))),
      yP = (e) =>
        h.createElement(
          eu,
          { fallback: h.createElement('div', null) },
          h.createElement(gP, { ...e }),
        ),
      bP = {
        array: gy,
        object: gy,
        boolean: h9,
        color: yP,
        date: A9,
        number: C9,
        check: or,
        'inline-check': or,
        radio: or,
        'inline-radio': or,
        select: or,
        'multi-select': or,
        range: lP,
        text: pP,
        file: mP,
      },
      yy = () => h.createElement(h.Fragment, null, '-'),
      EP = ({ row: e, arg: t, updateArgs: r, isHovered: n }) => {
        let { key: a, control: o } = e,
          [i, u] = te(!1),
          [s, p] = te({ value: t });
        he(() => {
          i || p({ value: t });
        }, [i, t]);
        let y = ge((b) => (p({ value: b }), r({ [a]: b }), b), [r, a]),
          E = ge(() => u(!1), []),
          m = ge(() => u(!0), []);
        if (!o || o.disable)
          return n
            ? h.createElement(
                ft,
                {
                  href: 'https://storybook.js.org/docs/react/essentials/controls',
                  target: '_blank',
                  withArrow: !0,
                },
                'Setup controls',
              )
            : h.createElement(yy, null);
        let g = {
            name: a,
            argType: e,
            value: s.value,
            onChange: y,
            onBlur: E,
            onFocus: m,
          },
          A = bP[o.type] || yy;
        return h.createElement(A, { ...g, ...o, controlType: o.type });
      },
      AP = q.span({ fontWeight: 'bold' }),
      vP = q.span(({ theme: e }) => ({
        color: e.color.negative,
        fontFamily: e.typography.fonts.mono,
        cursor: 'help',
      })),
      DP = q.div(({ theme: e }) => ({
        '&&': { p: { margin: '0 0 10px 0' }, a: { color: e.color.secondary } },
        code: {
          ...wt({ theme: e }),
          fontSize: 12,
          fontFamily: e.typography.fonts.mono,
        },
        '& code': { margin: 0, display: 'inline-block' },
        '& pre > code': { whiteSpace: 'pre-wrap' },
      })),
      CP = q.div(({ theme: e, hasDescription: t }) => ({
        color:
          e.base === 'light'
            ? ce(0.1, e.color.defaultText)
            : ce(0.2, e.color.defaultText),
        marginTop: t ? 4 : 0,
      })),
      xP = q.div(({ theme: e, hasDescription: t }) => ({
        color:
          e.base === 'light'
            ? ce(0.1, e.color.defaultText)
            : ce(0.2, e.color.defaultText),
        marginTop: t ? 12 : 0,
        marginBottom: 12,
      })),
      SP = q.td(({ theme: e, expandable: t }) => ({
        paddingLeft: t ? '40px !important' : '20px !important',
      })),
      da = (e) => {
        let [t, r] = te(!1),
          {
            row: n,
            updateArgs: a,
            compact: o,
            expandable: i,
            initialExpandedArgs: u,
          } = e,
          { name: s, description: p } = n,
          y = n.table || {},
          E = y.type || n.type,
          m = y.defaultValue || n.defaultValue,
          g = n.type?.required,
          A = p != null && p !== '';
        return h.createElement(
          'tr',
          { onMouseEnter: () => r(!0), onMouseLeave: () => r(!1) },
          h.createElement(
            SP,
            { expandable: i },
            h.createElement(AP, null, s),
            g ? h.createElement(vP, { title: 'Required' }, '*') : null,
          ),
          o
            ? null
            : h.createElement(
                'td',
                null,
                A && h.createElement(DP, null, h.createElement(yp, null, p)),
                y.jsDocTags != null
                  ? h.createElement(
                      h.Fragment,
                      null,
                      h.createElement(
                        xP,
                        { hasDescription: A },
                        h.createElement(qi, {
                          value: E,
                          initialExpandedArgs: u,
                        }),
                      ),
                      h.createElement(r9, { tags: y.jsDocTags }),
                    )
                  : h.createElement(
                      CP,
                      { hasDescription: A },
                      h.createElement(qi, { value: E, initialExpandedArgs: u }),
                    ),
              ),
          o
            ? null
            : h.createElement(
                'td',
                null,
                h.createElement(qi, { value: m, initialExpandedArgs: u }),
              ),
          a
            ? h.createElement(
                'td',
                null,
                h.createElement(EP, { ...e, isHovered: t }),
              )
            : null,
        );
      },
      FP = q(we)(({ theme: e }) => ({
        marginRight: 8,
        marginLeft: -10,
        marginTop: -2,
        height: 12,
        width: 12,
        color:
          e.base === 'light'
            ? ce(0.25, e.color.defaultText)
            : ce(0.3, e.color.defaultText),
        border: 'none',
        display: 'inline-block',
      })),
      wP = q.span(({ theme: e }) => ({
        display: 'flex',
        lineHeight: '20px',
        alignItems: 'center',
      })),
      BP = q.td(({ theme: e }) => ({
        position: 'relative',
        letterSpacing: '0.35em',
        textTransform: 'uppercase',
        fontWeight: e.typography.weight.bold,
        fontSize: e.typography.size.s1 - 1,
        color:
          e.base === 'light'
            ? ce(0.4, e.color.defaultText)
            : ce(0.6, e.color.defaultText),
        background: `${e.background.app} !important`,
        '& ~ td': { background: `${e.background.app} !important` },
      })),
      TP = q.td(({ theme: e }) => ({
        position: 'relative',
        fontWeight: e.typography.weight.bold,
        fontSize: e.typography.size.s2 - 1,
        background: e.background.app,
      })),
      _P = q.td(() => ({ position: 'relative' })),
      OP = q.tr(({ theme: e }) => ({
        '&:hover > td': {
          backgroundColor: `${nt(0.005, e.background.app)} !important`,
          boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`,
          cursor: 'row-resize',
        },
      })),
      by = q.button(() => ({
        background: 'none',
        border: 'none',
        padding: '0',
        font: 'inherit',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: '100%',
        width: '100%',
        color: 'transparent',
        cursor: 'row-resize !important',
      })),
      Mi = ({
        level: e = 'section',
        label: t,
        children: r,
        initialExpanded: n = !0,
        colSpan: a = 3,
      }) => {
        let [o, i] = te(n),
          u = e === 'subsection' ? TP : BP,
          s = r?.length || 0,
          p = e === 'subsection' ? `${s} item${s !== 1 ? 's' : ''}` : '',
          y = o ? 'arrowdown' : 'arrowright',
          E = `${o ? 'Hide' : 'Show'} ${e === 'subsection' ? s : t} item${s !== 1 ? 's' : ''}`;
        return h.createElement(
          h.Fragment,
          null,
          h.createElement(
            OP,
            { title: E },
            h.createElement(
              u,
              { colSpan: 1 },
              h.createElement(by, { onClick: (m) => i(!o), tabIndex: 0 }, E),
              h.createElement(wP, null, h.createElement(FP, { icon: y }), t),
            ),
            h.createElement(
              _P,
              { colSpan: a - 1 },
              h.createElement(
                by,
                {
                  onClick: (m) => i(!o),
                  tabIndex: -1,
                  style: { outline: 'none' },
                },
                E,
              ),
              o ? null : p,
            ),
          ),
          o ? r : null,
        );
      },
      pa = q.div(({ theme: e }) => ({
        display: 'flex',
        gap: 16,
        borderBottom: `1px solid ${e.appBorderColor}`,
        '&:last-child': { borderBottom: 0 },
      })),
      xe = q.div(({ numColumn: e }) => ({
        display: 'flex',
        flexDirection: 'column',
        flex: e || 1,
        gap: 5,
        padding: '12px 20px',
      })),
      Ee = q.div(({ theme: e, width: t, height: r }) => ({
        animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
        background: e.appBorderColor,
        width: t || '100%',
        height: r || 16,
        borderRadius: 3,
      })),
      Se = [2, 4, 2, 2],
      RP = () =>
        h.createElement(
          h.Fragment,
          null,
          h.createElement(
            pa,
            null,
            h.createElement(
              xe,
              { numColumn: Se[0] },
              h.createElement(Ee, { width: '60%' }),
            ),
            h.createElement(
              xe,
              { numColumn: Se[1] },
              h.createElement(Ee, { width: '30%' }),
            ),
            h.createElement(
              xe,
              { numColumn: Se[2] },
              h.createElement(Ee, { width: '60%' }),
            ),
            h.createElement(
              xe,
              { numColumn: Se[3] },
              h.createElement(Ee, { width: '60%' }),
            ),
          ),
          h.createElement(
            pa,
            null,
            h.createElement(
              xe,
              { numColumn: Se[0] },
              h.createElement(Ee, { width: '60%' }),
            ),
            h.createElement(
              xe,
              { numColumn: Se[1] },
              h.createElement(Ee, { width: '80%' }),
              h.createElement(Ee, { width: '30%' }),
            ),
            h.createElement(
              xe,
              { numColumn: Se[2] },
              h.createElement(Ee, { width: '60%' }),
            ),
            h.createElement(
              xe,
              { numColumn: Se[3] },
              h.createElement(Ee, { width: '60%' }),
            ),
          ),
          h.createElement(
            pa,
            null,
            h.createElement(
              xe,
              { numColumn: Se[0] },
              h.createElement(Ee, { width: '60%' }),
            ),
            h.createElement(
              xe,
              { numColumn: Se[1] },
              h.createElement(Ee, { width: '80%' }),
              h.createElement(Ee, { width: '30%' }),
            ),
            h.createElement(
              xe,
              { numColumn: Se[2] },
              h.createElement(Ee, { width: '60%' }),
            ),
            h.createElement(
              xe,
              { numColumn: Se[3] },
              h.createElement(Ee, { width: '60%' }),
            ),
          ),
          h.createElement(
            pa,
            null,
            h.createElement(
              xe,
              { numColumn: Se[0] },
              h.createElement(Ee, { width: '60%' }),
            ),
            h.createElement(
              xe,
              { numColumn: Se[1] },
              h.createElement(Ee, { width: '80%' }),
              h.createElement(Ee, { width: '30%' }),
            ),
            h.createElement(
              xe,
              { numColumn: Se[2] },
              h.createElement(Ee, { width: '60%' }),
            ),
            h.createElement(
              xe,
              { numColumn: Se[3] },
              h.createElement(Ee, { width: '60%' }),
            ),
          ),
        ),
      PP = q.div(({ inAddonPanel: e, theme: t }) => ({
        height: e ? '100%' : 'auto',
        display: 'flex',
        border: e ? 'none' : `1px solid ${t.appBorderColor}`,
        borderRadius: e ? 0 : t.appBorderRadius,
        padding: e ? 0 : 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 15,
        background: t.background.content,
        boxShadow: 'rgba(0, 0, 0, 0.10) 0 1px 3px 0',
      })),
      IP = q.div({
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        maxWidth: 415,
      }),
      kP = q.div(({ theme: e }) => ({
        fontWeight: e.typography.weight.bold,
        fontSize: e.typography.size.s2 - 1,
        textAlign: 'center',
        color: e.textColor,
      })),
      NP = q.div(({ theme: e }) => ({
        fontWeight: e.typography.weight.regular,
        fontSize: e.typography.size.s2 - 1,
        textAlign: 'center',
        color: e.textMutedColor,
      })),
      LP = q.div(({ theme: e }) => ({
        display: 'flex',
        fontSize: e.typography.size.s2 - 1,
        gap: 25,
      })),
      qP = q.div(({ theme: e }) => ({
        width: 1,
        height: 16,
        backgroundColor: e.appBorderColor,
      })),
      jP = ({ inAddonPanel: e }) => {
        let [t, r] = te(!0);
        return (
          he(() => {
            let n = setTimeout(() => {
              r(!1);
            }, 100);
            return () => clearTimeout(n);
          }, []),
          t
            ? null
            : h.createElement(
                PP,
                { inAddonPanel: e },
                h.createElement(
                  IP,
                  null,
                  h.createElement(
                    kP,
                    null,
                    e
                      ? 'Interactive story playground'
                      : "Args table with interactive controls couldn't be auto-generated",
                  ),
                  h.createElement(
                    NP,
                    null,
                    "Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically.",
                  ),
                ),
                h.createElement(
                  LP,
                  null,
                  e &&
                    h.createElement(
                      h.Fragment,
                      null,
                      h.createElement(
                        ft,
                        {
                          href: 'https://youtu.be/0gOfS6K0x0E',
                          target: '_blank',
                          withArrow: !0,
                        },
                        h.createElement(we, { icon: 'video' }),
                        ' Watch 5m video',
                      ),
                      h.createElement(qP, null),
                      h.createElement(
                        ft,
                        {
                          href: 'https://storybook.js.org/docs/react/essentials/controls',
                          target: '_blank',
                          withArrow: !0,
                        },
                        'Read docs',
                      ),
                    ),
                  !e &&
                    h.createElement(
                      ft,
                      {
                        href: 'https://storybook.js.org/docs/react/essentials/controls',
                        target: '_blank',
                        withArrow: !0,
                      },
                      'Learn how to set that up',
                    ),
                ),
              )
        );
      },
      MP = q.table(({ theme: e, compact: t, inAddonPanel: r }) => ({
        '&&': {
          borderSpacing: 0,
          color: e.color.defaultText,
          'td, th': {
            padding: 0,
            border: 'none',
            verticalAlign: 'top',
            textOverflow: 'ellipsis',
          },
          fontSize: e.typography.size.s2 - 1,
          lineHeight: '20px',
          textAlign: 'left',
          width: '100%',
          marginTop: r ? 0 : 25,
          marginBottom: r ? 0 : 40,
          'thead th:first-of-type, td:first-of-type': { width: '25%' },
          'th:first-of-type, td:first-of-type': { paddingLeft: 20 },
          'th:nth-of-type(2), td:nth-of-type(2)': {
            ...(t ? null : { width: '35%' }),
          },
          'td:nth-of-type(3)': { ...(t ? null : { width: '15%' }) },
          'th:last-of-type, td:last-of-type': {
            paddingRight: 20,
            ...(t ? null : { width: '25%' }),
          },
          th: {
            color:
              e.base === 'light'
                ? ce(0.25, e.color.defaultText)
                : ce(0.45, e.color.defaultText),
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 15,
            paddingRight: 15,
          },
          td: {
            paddingTop: '10px',
            paddingBottom: '10px',
            '&:not(:first-of-type)': { paddingLeft: 15, paddingRight: 15 },
            '&:last-of-type': { paddingRight: 20 },
          },
          marginLeft: r ? 0 : 1,
          marginRight: r ? 0 : 1,
          tbody: {
            ...(r
              ? null
              : {
                  filter:
                    e.base === 'light'
                      ? 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))'
                      : 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))',
                }),
            '> tr > *': {
              background: e.background.content,
              borderTop: `1px solid ${e.appBorderColor}`,
            },
            ...(r
              ? null
              : {
                  '> tr:first-of-type > *': {
                    borderBlockStart: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr:last-of-type > *': {
                    borderBlockEnd: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr > *:first-of-type': {
                    borderInlineStart: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr > *:last-of-type': {
                    borderInlineEnd: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr:first-of-type > td:first-of-type': {
                    borderTopLeftRadius: e.appBorderRadius,
                  },
                  '> tr:first-of-type > td:last-of-type': {
                    borderTopRightRadius: e.appBorderRadius,
                  },
                  '> tr:last-of-type > td:first-of-type': {
                    borderBottomLeftRadius: e.appBorderRadius,
                  },
                  '> tr:last-of-type > td:last-of-type': {
                    borderBottomRightRadius: e.appBorderRadius,
                  },
                }),
          },
        },
      })),
      $P = q(pt)(({ theme: e }) => ({
        color: e.barTextColor,
        margin: '-4px -12px -4px 0',
      })),
      UP = q.span({ display: 'flex', justifyContent: 'space-between' }),
      zP = {
        alpha: (e, t) => e.name.localeCompare(t.name),
        requiredFirst: (e, t) =>
          +!!t.type?.required - +!!e.type?.required ||
          e.name.localeCompare(t.name),
        none: void 0,
      },
      HP = (e, t) => {
        let r = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
        if (!e) return r;
        Object.entries(e).forEach(([o, i]) => {
          let { category: u, subcategory: s } = i?.table || {};
          if (u) {
            let p = r.sections[u] || { ungrouped: [], subsections: {} };
            if (!s) p.ungrouped.push({ key: o, ...i });
            else {
              let y = p.subsections[s] || [];
              y.push({ key: o, ...i }), (p.subsections[s] = y);
            }
            r.sections[u] = p;
          } else if (s) {
            let p = r.ungroupedSubsections[s] || [];
            p.push({ key: o, ...i }), (r.ungroupedSubsections[s] = p);
          } else r.ungrouped.push({ key: o, ...i });
        });
        let n = zP[t],
          a = (o) =>
            n
              ? Object.keys(o).reduce(
                  (i, u) => ({ ...i, [u]: o[u].sort(n) }),
                  {},
                )
              : o;
        return {
          ungrouped: r.ungrouped.sort(n),
          ungroupedSubsections: a(r.ungroupedSubsections),
          sections: Object.keys(r.sections).reduce(
            (o, i) => ({
              ...o,
              [i]: {
                ungrouped: r.sections[i].ungrouped.sort(n),
                subsections: a(r.sections[i].subsections),
              },
            }),
            {},
          ),
        };
      },
      GP = (e, t, r) => {
        try {
          return Fo(e, t, r);
        } catch (n) {
          return An.warn(n.message), !1;
        }
      },
      St = (e) => {
        let {
          updateArgs: t,
          resetArgs: r,
          compact: n,
          inAddonPanel: a,
          initialExpandedArgs: o,
          sort: i = 'none',
          isLoading: u,
        } = e;
        if ('error' in e) {
          let { error: R } = e;
          return h.createElement(
            Fy,
            null,
            R,
            '\xA0',
            h.createElement(
              ft,
              {
                href: 'http://storybook.js.org/docs/',
                target: '_blank',
                withArrow: !0,
              },
              'Read the docs',
            ),
          );
        }
        if (u) return h.createElement(RP, null);
        let { rows: s, args: p, globals: y } = 'rows' in e && e,
          E = HP(
            (0, vy.default)(
              s,
              (R) => !R?.table?.disable && GP(R, p || {}, y || {}),
            ),
            i,
          ),
          m = E.ungrouped.length === 0,
          g = Object.entries(E.sections).length === 0,
          A = Object.entries(E.ungroupedSubsections).length === 0;
        if (m && g && A) return h.createElement(jP, { inAddonPanel: a });
        let b = 1;
        t && (b += 1), n || (b += 2);
        let x = Object.keys(E.sections).length > 0,
          w = {
            updateArgs: t,
            compact: n,
            inAddonPanel: a,
            initialExpandedArgs: o,
          };
        return h.createElement(
          Sa,
          null,
          h.createElement(
            MP,
            {
              compact: n,
              inAddonPanel: a,
              className: 'docblock-argstable sb-unstyled',
            },
            h.createElement(
              'thead',
              { className: 'docblock-argstable-head' },
              h.createElement(
                'tr',
                null,
                h.createElement(
                  'th',
                  null,
                  h.createElement('span', null, 'Name'),
                ),
                n
                  ? null
                  : h.createElement(
                      'th',
                      null,
                      h.createElement('span', null, 'Description'),
                    ),
                n
                  ? null
                  : h.createElement(
                      'th',
                      null,
                      h.createElement('span', null, 'Default'),
                    ),
                t
                  ? h.createElement(
                      'th',
                      null,
                      h.createElement(
                        UP,
                        null,
                        'Control',
                        ' ',
                        !u &&
                          r &&
                          h.createElement(
                            $P,
                            { onClick: () => r(), title: 'Reset controls' },
                            h.createElement(we, {
                              icon: 'undo',
                              'aria-hidden': !0,
                            }),
                          ),
                      ),
                    )
                  : null,
              ),
            ),
            h.createElement(
              'tbody',
              { className: 'docblock-argstable-body' },
              E.ungrouped.map((R) =>
                h.createElement(da, {
                  key: R.key,
                  row: R,
                  arg: p && p[R.key],
                  ...w,
                }),
              ),
              Object.entries(E.ungroupedSubsections).map(([R, I]) =>
                h.createElement(
                  Mi,
                  { key: R, label: R, level: 'subsection', colSpan: b },
                  I.map((M) =>
                    h.createElement(da, {
                      key: M.key,
                      row: M,
                      arg: p && p[M.key],
                      expandable: x,
                      ...w,
                    }),
                  ),
                ),
              ),
              Object.entries(E.sections).map(([R, I]) =>
                h.createElement(
                  Mi,
                  { key: R, label: R, level: 'section', colSpan: b },
                  I.ungrouped.map((M) =>
                    h.createElement(da, {
                      key: M.key,
                      row: M,
                      arg: p && p[M.key],
                      ...w,
                    }),
                  ),
                  Object.entries(I.subsections).map(([M, F]) =>
                    h.createElement(
                      Mi,
                      { key: M, label: M, level: 'subsection', colSpan: b },
                      F.map((L) =>
                        h.createElement(da, {
                          key: L.key,
                          row: L,
                          arg: p && p[L.key],
                          expandable: x,
                          ...w,
                        }),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      },
      $y = ({ tabs: e, ...t }) => {
        let r = Object.entries(e);
        return r.length === 1
          ? h.createElement(St, { ...r[0][1], ...t })
          : h.createElement(
              wa,
              null,
              r.map((n) => {
                let [a, o] = n,
                  i = `prop_table_div_${a}`;
                return h.createElement(
                  'div',
                  { key: i, id: i, title: a },
                  ({ active: u }) =>
                    u
                      ? h.createElement(St, {
                          key: `prop_table_${a}`,
                          ...o,
                          ...t,
                        })
                      : null,
                );
              }),
            );
      },
      Lne = q.div(({ theme: e }) => ({
        marginRight: 30,
        fontSize: `${e.typography.size.s1}px`,
        color:
          e.base === 'light'
            ? ce(0.4, e.color.defaultText)
            : ce(0.6, e.color.defaultText),
      })),
      qne = q.div({
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      }),
      jne = q.div({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        '&:not(:last-child)': { marginBottom: '1rem' },
      }),
      Mne = q.div(Bt, ({ theme: e }) => ({
        ...fa(e),
        margin: '25px 0 40px',
        padding: '30px 20px',
      }));
    var $ne = q.div(({ theme: e }) => ({
        fontWeight: e.typography.weight.bold,
        color: e.color.defaultText,
      })),
      Une = q.div(({ theme: e }) => ({
        color:
          e.base === 'light'
            ? ce(0.2, e.color.defaultText)
            : ce(0.6, e.color.defaultText),
      })),
      zne = q.div({ flex: '0 0 30%', lineHeight: '20px', marginTop: 5 }),
      Hne = q.div(({ theme: e }) => ({
        flex: 1,
        textAlign: 'center',
        fontFamily: e.typography.fonts.mono,
        fontSize: e.typography.size.s1,
        lineHeight: 1,
        overflow: 'hidden',
        color:
          e.base === 'light'
            ? ce(0.4, e.color.defaultText)
            : ce(0.6, e.color.defaultText),
        '> div': {
          display: 'inline-block',
          overflow: 'hidden',
          maxWidth: '100%',
          textOverflow: 'ellipsis',
        },
        span: { display: 'block', marginTop: 2 },
      })),
      Gne = q.div({ display: 'flex', flexDirection: 'row' }),
      Wne = q.div(({ background: e }) => ({
        position: 'relative',
        flex: 1,
        '&::before': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: e,
          content: '""',
        },
      })),
      Vne = q.div(({ theme: e }) => ({
        ...fa(e),
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        marginBottom: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        backgroundImage:
          'repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)',
        backgroundClip: 'padding-box',
      })),
      Kne = q.div({
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        position: 'relative',
        marginBottom: 30,
      }),
      Yne = q.div({ flex: 1, display: 'flex', flexDirection: 'row' }),
      Jne = q.div({ display: 'flex', alignItems: 'flex-start' }),
      Xne = q.div({ flex: '0 0 30%' }),
      Qne = q.div({ flex: 1 }),
      Zne = q.div(({ theme: e }) => ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20,
        fontWeight: e.typography.weight.bold,
        color:
          e.base === 'light'
            ? ce(0.4, e.color.defaultText)
            : ce(0.6, e.color.defaultText),
      })),
      eae = q.div(({ theme: e }) => ({
        fontSize: e.typography.size.s2,
        lineHeight: '20px',
        display: 'flex',
        flexDirection: 'column',
      }));
    var tae = q.div(({ theme: e }) => ({
        fontFamily: e.typography.fonts.base,
        fontSize: e.typography.size.s2,
        color: e.color.defaultText,
        marginLeft: 10,
        lineHeight: 1.2,
      })),
      rae = q.div(({ theme: e }) => ({
        ...fa(e),
        overflow: 'hidden',
        height: 40,
        width: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none',
        '> img, > svg': { width: 20, height: 20 },
      })),
      nae = q.div({
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        flex: '0 1 calc(20% - 10px)',
        minWidth: 120,
        margin: '0px 10px 30px 0',
      }),
      aae = q.div({ display: 'flex', flexFlow: 'row wrap' });
    oe &&
      oe.__DOCS_CONTEXT__ === void 0 &&
      ((oe.__DOCS_CONTEXT__ = ur(null)),
      (oe.__DOCS_CONTEXT__.displayName = 'DocsContext'));
    var Ki = oe ? oe.__DOCS_CONTEXT__ : ur(null);
    var Yi = '^',
      WP = (e) =>
        e
          .split('-')
          .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
          .join(''),
      Uy = (e) => {
        if (e)
          return typeof e == 'string'
            ? e.includes('-')
              ? WP(e)
              : e
            : e.__docgenInfo && e.__docgenInfo.displayName
              ? e.__docgenInfo.displayName
              : e.name;
      };
    function VP(e, t) {
      let r = KP([e], t);
      return r && r[0];
    }
    function KP(e, t) {
      let [r, n] = te({});
      return (
        he(() => {
          Promise.all(
            e.map(async (a) => {
              let o = await t.loadStory(a);
              n((i) => (i[a] === o ? i : { ...i, [a]: o }));
            }),
          );
        }),
        e.map((a) => {
          if (r[a]) return r[a];
          try {
            return t.storyById(a);
          } catch {
            return null;
          }
        })
      );
    }
    var YP = (e, t) => {
        let r = t.getStoryContext(t.storyById()),
          [n, a] = te(r.args);
        he(() => {
          let u = (s) => {
            s.storyId === e && a(s.args);
          };
          return t.channel.on(Bn, u), () => t.channel.off(Bn, u);
        }, [e]);
        let o = ge(
            (u) => t.channel.emit(Tn, { storyId: e, updatedArgs: u }),
            [e],
          ),
          i = ge((u) => t.channel.emit(wn, { storyId: e, argNames: u }), [e]);
        return [n, o, i];
      },
      JP = (e) => {
        let t = e.getStoryContext(e.storyById()),
          [r, n] = te(t.globals);
        return (
          he(() => {
            let a = (o) => {
              n(o.globals);
            };
            return e.channel.on(Fn, a), () => e.channel.off(Fn, a);
          }, []),
          [r]
        );
      },
      zy = (e, t, r, n) => {
        let { extractArgTypes: a } = t.docs || {};
        if (!a)
          throw new Error(
            'Args unsupported. See Args documentation for your framework.',
          );
        let o = a(e);
        return (o = _r(o, r, n)), o;
      },
      Ey = (e) => e && [Yi].includes(e),
      XP = (e = {}, t) => {
        let { of: r } = e,
          { story: n } = e;
        if (Ey(r) || Ey(n)) return t || null;
        if (!r) throw new Error('No component found.');
        return r;
      },
      Hi = (e, t, r, n, a, o) => ({
        ...e,
        ...(0, Sy.default)(t, (i) => ({ rows: zy(i, r, n, a), sort: o })),
      }),
      QP = (e) => {
        let t = Hr(Ki),
          {
            story: r,
            component: n,
            subcomponents: a,
            showComponent: o,
            include: i,
            exclude: u,
            sort: s,
          } = e;
        try {
          let p;
          switch (r) {
            case Yi: {
              p = t.storyById().id;
              break;
            }
            default:
              p = t.storyIdByName(r);
          }
          let y = VP(p, t),
            [E, m, g] = YP(p, t),
            [A] = JP(t);
          if (!y)
            return h.createElement(St, {
              isLoading: !0,
              updateArgs: m,
              resetArgs: g,
            });
          let b = _r(y.argTypes, i, u),
            x = Uy(n) || 'Story',
            w = {
              [x]: {
                rows: b,
                args: E,
                globals: A,
                updateArgs: m,
                resetArgs: g,
              },
            },
            R = b && Object.values(b).find((I) => !!I?.control);
          if (
            (R || ((m = null), (g = null), (w = {})),
            n && (!R || o) && (w = Hi(w, { [x]: n }, y.parameters, i, u)),
            a)
          ) {
            if (Array.isArray(a))
              throw new Error(
                'Unexpected subcomponents array. Expected an object whose keys are tab labels and whose values are components.',
              );
            w = Hi(w, a, y.parameters, i, u);
          }
          return h.createElement($y, { tabs: w, sort: s });
        } catch (p) {
          return h.createElement(St, { error: p.message });
        }
      },
      Ay = (e) => {
        let {
            components: t,
            include: r,
            exclude: n,
            sort: a,
            parameters: o,
          } = e,
          i = Hi({}, t, o, r, n);
        return h.createElement($y, { tabs: i, sort: a });
      },
      ZP = (e) => {
        En(wr`The ArgsTable doc block is deprecated. Instead use the ArgTypes doc block for static tables or the Controls doc block for tables with controls.
    
  Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#argstable-block
  `);
        let t = Hr(Ki),
          r,
          n,
          a;
        try {
          ({ parameters: r, component: n, subcomponents: a } = t.storyById());
        } catch {
          let { of: g } = e;
          if ('of' in e && g === void 0)
            throw new Error(
              'Unexpected `of={undefined}`, did you mistype a CSF file reference?',
            );
          ({
            projectAnnotations: { parameters: r },
          } = t.resolveOf(g, ['component']));
        }
        let { include: o, exclude: i, components: u, sort: s } = e,
          { story: p } = e,
          y = s || r.controls?.sort,
          E = XP(e, n);
        if (p)
          return h.createElement(QP, {
            ...e,
            component: E,
            subcomponents: a,
            sort: y,
          });
        if (!u && !a) {
          let g;
          try {
            g = { rows: zy(E, r, o, i) };
          } catch (A) {
            g = { error: A.message };
          }
          return h.createElement(St, { ...g, sort: y });
        }
        if (u)
          return h.createElement(Ay, {
            ...e,
            components: u,
            sort: y,
            parameters: r,
          });
        let m = Uy(E);
        return h.createElement(Ay, {
          ...e,
          components: { [m]: E, ...a },
          sort: y,
          parameters: r,
        });
      };
    ZP.defaultProps = { of: Yi };
    var oae = ur({ sources: {} });
    var eI = ((e) => (
      (e.OPEN = 'open'), (e.CLOSED = 'closed'), (e.NONE = 'none'), e
    ))(eI || {});
    var { document: tI } = oe;
    function rI(e, t) {
      e.channel.emit(Gf, t);
    }
    var iae = Oa.a;
    var Hy = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      nI = Hy.reduce(
        (e, t) => ({
          ...e,
          [t]: q(t)({
            '& svg': {
              position: 'relative',
              top: '-0.1em',
              visibility: 'hidden',
            },
            '&:hover svg': { visibility: 'visible' },
          }),
        }),
        {},
      ),
      aI = q.a(() => ({
        float: 'left',
        lineHeight: 'inherit',
        paddingRight: '10px',
        marginLeft: '-24px',
        color: 'inherit',
      })),
      oI = ({ as: e, id: t, children: r, ...n }) => {
        let a = Hr(Ki),
          o = nI[e],
          i = `#${t}`;
        return h.createElement(
          o,
          { id: t, ...n },
          h.createElement(
            aI,
            {
              'aria-hidden': 'true',
              href: i,
              tabIndex: -1,
              target: '_self',
              onClick: (u) => {
                tI.getElementById(t) && rI(a, i);
              },
            },
            h.createElement(we, { icon: 'link' }),
          ),
          r,
        );
      },
      Gy = (e) => {
        let { as: t, id: r, children: n, ...a } = e;
        if (r) return h.createElement(oI, { as: t, id: r, ...a }, n);
        let o = t,
          { as: i, ...u } = e;
        return h.createElement(o, { ...Ra(u, t) });
      },
      uae = Hy.reduce(
        (e, t) => ({ ...e, [t]: (r) => h.createElement(Gy, { as: t, ...r }) }),
        {},
      );
    var iI = ((e) => (
      (e.INFO = 'info'),
      (e.NOTES = 'notes'),
      (e.DOCGEN = 'docgen'),
      (e.AUTO = 'auto'),
      e
    ))(iI || {});
    var sae = q.div(({ theme: e }) => ({
        width: '10rem',
        '@media (max-width: 768px)': { display: 'none' },
      })),
      lae = q.div(({ theme: e }) => ({
        position: 'fixed',
        bottom: 0,
        top: 0,
        width: '10rem',
        paddingTop: '4rem',
        paddingBottom: '2rem',
        overflowY: 'auto',
        fontFamily: e.typography.fonts.base,
        fontSize: e.typography.size.s2,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        WebkitOverflowScrolling: 'touch',
        '& *': { boxSizing: 'border-box' },
        '& > .toc-wrapper > .toc-list': {
          paddingLeft: 0,
          borderLeft: `solid 2px ${e.color.mediumlight}`,
          '.toc-list': {
            paddingLeft: 0,
            borderLeft: `solid 2px ${e.color.mediumlight}`,
            '.toc-list': {
              paddingLeft: 0,
              borderLeft: `solid 2px ${e.color.mediumlight}`,
            },
          },
        },
        '& .toc-list-item': {
          position: 'relative',
          listStyleType: 'none',
          marginLeft: 20,
          paddingTop: 3,
          paddingBottom: 3,
        },
        '& .toc-list-item::before': {
          content: '""',
          position: 'absolute',
          height: '100%',
          top: 0,
          left: 0,
          transform: 'translateX(calc(-2px - 20px))',
          borderLeft: `solid 2px ${e.color.mediumdark}`,
          opacity: 0,
          transition: 'opacity 0.2s',
        },
        '& .toc-list-item.is-active-li::before': { opacity: 1 },
        '& .toc-list-item > a': {
          color: e.color.defaultText,
          textDecoration: 'none',
        },
        '& .toc-list-item.is-active-li > a': {
          fontWeight: 600,
          color: e.color.secondary,
          textDecoration: 'none',
        },
      })),
      cae = q.p(({ theme: e }) => ({
        fontWeight: 600,
        fontSize: '0.875em',
        color: e.textColor,
        textTransform: 'uppercase',
        marginBottom: 10,
      }));
    var { document: dae, window: pae } = oe;
    var uI = ({ children: e, disableAnchor: t, ...r }) => {
        if (t || typeof e != 'string') return h.createElement(Ca, null, e);
        let n = e.toLowerCase().replace(/[^a-z0-9]/gi, '-');
        return h.createElement(Gy, { as: 'h2', id: n, ...r }, e);
      },
      fae = q(uI)(({ theme: e }) => ({
        fontSize: `${e.typography.size.s2 - 1}px`,
        fontWeight: e.typography.weight.bold,
        lineHeight: '16px',
        letterSpacing: '0.35em',
        textTransform: 'uppercase',
        color: e.textMutedColor,
        border: 0,
        marginBottom: '12px',
        '&:first-of-type': { marginTop: '56px' },
      }));
    var Wy = 'addon-controls',
      Vy = 'controls',
      sI = () => {
        let [e, t] = te(!0),
          [r, n, a] = au(),
          [o] = ou(),
          i = ba(),
          { expanded: u, sort: s, presetColors: p } = iu(Vy, {}),
          { path: y, previewInitialized: E } = uu();
        he(() => {
          E && t(!1);
        }, [E]);
        let m = Object.values(i).some((A) => A?.control),
          g = Object.entries(i).reduce(
            (A, [b, x]) => (
              x?.control?.type !== 'color' || x?.control?.presetColors
                ? (A[b] = x)
                : (A[b] = { ...x, control: { ...x.control, presetColors: p } }),
              A
            ),
            {},
          );
        return h.createElement(St, {
          key: y,
          compact: !u && m,
          rows: g,
          args: r,
          globals: o,
          updateArgs: n,
          resetArgs: a,
          inAddonPanel: !0,
          sort: s,
          isLoading: e,
        });
      };
    function lI() {
      let e = ba(),
        t = Object.values(e).filter(
          (r) => r?.control && !r?.table?.disable,
        ).length;
      return h.createElement(
        'div',
        null,
        h.createElement(
          Fa,
          { col: 1 },
          h.createElement(
            'span',
            { style: { display: 'inline-block', verticalAlign: 'middle' } },
            'Controls',
          ),
          t === 0 ? '' : h.createElement(va, { status: 'neutral' }, t),
        ),
      );
    }
    ya.register(Wy, (e) => {
      ya.add(Wy, {
        title: lI,
        type: nu.PANEL,
        paramKey: Vy,
        render: ({ active: t }) =>
          !t || !e.getCurrentStoryData()
            ? null
            : h.createElement(Aa, { active: t }, h.createElement(sI, null)),
      });
    });
  })();
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e,
  );
}
