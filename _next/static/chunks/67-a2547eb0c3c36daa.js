(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [67],
  {
    3816: (t) => {
      "use strict";
      var e = Object.prototype.hasOwnProperty,
        n = "~";
      function r() {}
      function i(t, e, n) {
        (this.fn = t), (this.context = e), (this.once = n || !1);
      }
      function s(t, e, r, s, o) {
        if ("function" != typeof r)
          throw TypeError("The listener must be a function");
        var a = new i(r, s || t, o),
          l = n ? n + e : e;
        return (
          t._events[l]
            ? t._events[l].fn
              ? (t._events[l] = [t._events[l], a])
              : t._events[l].push(a)
            : ((t._events[l] = a), t._eventsCount++),
          t
        );
      }
      function o(t, e) {
        0 == --t._eventsCount ? (t._events = new r()) : delete t._events[e];
      }
      function a() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create &&
        ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
        (a.prototype.eventNames = function () {
          var t,
            r,
            i = [];
          if (0 === this._eventsCount) return i;
          for (r in (t = this._events))
            e.call(t, r) && i.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols
            ? i.concat(Object.getOwnPropertySymbols(t))
            : i;
        }),
        (a.prototype.listeners = function (t) {
          var e = n ? n + t : t,
            r = this._events[e];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var i = 0, s = r.length, o = Array(s); i < s; i++)
            o[i] = r[i].fn;
          return o;
        }),
        (a.prototype.listenerCount = function (t) {
          var e = n ? n + t : t,
            r = this._events[e];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (a.prototype.emit = function (t, e, r, i, s, o) {
          var a = n ? n + t : t;
          if (!this._events[a]) return !1;
          var l,
            u,
            c = this._events[a],
            d = arguments.length;
          if (c.fn) {
            switch ((c.once && this.removeListener(t, c.fn, void 0, !0), d)) {
              case 1:
                return c.fn.call(c.context), !0;
              case 2:
                return c.fn.call(c.context, e), !0;
              case 3:
                return c.fn.call(c.context, e, r), !0;
              case 4:
                return c.fn.call(c.context, e, r, i), !0;
              case 5:
                return c.fn.call(c.context, e, r, i, s), !0;
              case 6:
                return c.fn.call(c.context, e, r, i, s, o), !0;
            }
            for (u = 1, l = Array(d - 1); u < d; u++) l[u - 1] = arguments[u];
            c.fn.apply(c.context, l);
          } else {
            var h,
              p = c.length;
            for (u = 0; u < p; u++)
              switch (
                (c[u].once && this.removeListener(t, c[u].fn, void 0, !0), d)
              ) {
                case 1:
                  c[u].fn.call(c[u].context);
                  break;
                case 2:
                  c[u].fn.call(c[u].context, e);
                  break;
                case 3:
                  c[u].fn.call(c[u].context, e, r);
                  break;
                case 4:
                  c[u].fn.call(c[u].context, e, r, i);
                  break;
                default:
                  if (!l)
                    for (h = 1, l = Array(d - 1); h < d; h++)
                      l[h - 1] = arguments[h];
                  c[u].fn.apply(c[u].context, l);
              }
          }
          return !0;
        }),
        (a.prototype.on = function (t, e, n) {
          return s(this, t, e, n, !1);
        }),
        (a.prototype.once = function (t, e, n) {
          return s(this, t, e, n, !0);
        }),
        (a.prototype.removeListener = function (t, e, r, i) {
          var s = n ? n + t : t;
          if (!this._events[s]) return this;
          if (!e) return o(this, s), this;
          var a = this._events[s];
          if (a.fn)
            a.fn !== e ||
              (i && !a.once) ||
              (r && a.context !== r) ||
              o(this, s);
          else {
            for (var l = 0, u = [], c = a.length; l < c; l++)
              (a[l].fn !== e ||
                (i && !a[l].once) ||
                (r && a[l].context !== r)) &&
                u.push(a[l]);
            u.length
              ? (this._events[s] = 1 === u.length ? u[0] : u)
              : o(this, s);
          }
          return this;
        }),
        (a.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = n ? n + t : t), this._events[e] && o(this, e))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.addListener = a.prototype.on),
        (a.prefixed = n),
        (a.EventEmitter = a),
        (t.exports = a);
    },
    7965: (t, e, n) => {
      "use strict";
      var r = n(6426),
        i = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      t.exports = function (t, e) {
        var n,
          s,
          o,
          a,
          l,
          u,
          c,
          d,
          h = !1;
        e || (e = {}), (o = e.debug || !1);
        try {
          if (
            ((l = r()),
            (u = document.createRange()),
            (c = document.getSelection()),
            ((d = document.createElement("span")).textContent = t),
            (d.ariaHidden = "true"),
            (d.style.all = "unset"),
            (d.style.position = "fixed"),
            (d.style.top = 0),
            (d.style.clip = "rect(0, 0, 0, 0)"),
            (d.style.whiteSpace = "pre"),
            (d.style.webkitUserSelect = "text"),
            (d.style.MozUserSelect = "text"),
            (d.style.msUserSelect = "text"),
            (d.style.userSelect = "text"),
            d.addEventListener("copy", function (n) {
              if ((n.stopPropagation(), e.format)) {
                if ((n.preventDefault(), void 0 === n.clipboardData)) {
                  o && console.warn("unable to use e.clipboardData"),
                    o && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var r = i[e.format] || i.default;
                  window.clipboardData.setData(r, t);
                } else
                  n.clipboardData.clearData(),
                    n.clipboardData.setData(e.format, t);
              }
              e.onCopy && (n.preventDefault(), e.onCopy(n.clipboardData));
            }),
            document.body.appendChild(d),
            u.selectNodeContents(d),
            c.addRange(u),
            !document.execCommand("copy"))
          )
            throw Error("copy command was unsuccessful");
          h = !0;
        } catch (r) {
          o && console.error("unable to copy using execCommand: ", r),
            o && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(e.format || "text", t),
              e.onCopy && e.onCopy(window.clipboardData),
              (h = !0);
          } catch (r) {
            o && console.error("unable to copy using clipboardData: ", r),
              o && console.error("falling back to prompt"),
              (n =
                "message" in e
                  ? e.message
                  : "Copy to clipboard: #{key}, Enter"),
              (s =
                (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C"),
              (a = n.replace(/#{\s*key\s*}/g, s)),
              window.prompt(a, t);
          }
        } finally {
          c &&
            ("function" == typeof c.removeRange
              ? c.removeRange(u)
              : c.removeAllRanges()),
            d && document.body.removeChild(d),
            l();
        }
        return h;
      };
    },
    6247: (t, e, n) => {
      "use strict";
      function r() {
        throw Error(
          "`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "forbidden", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(3167).HTTP_ERROR_FALLBACK_ERROR_CODE,
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    958: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          DynamicServerError: function () {
            return r;
          },
          isDynamicServerError: function () {
            return i;
          },
        });
      let n = "DYNAMIC_SERVER_USAGE";
      class r extends Error {
        constructor(t) {
          super("Dynamic server usage: " + t),
            (this.description = t),
            (this.digest = n);
        }
      }
      function i(t) {
        return (
          "object" == typeof t &&
          null !== t &&
          "digest" in t &&
          "string" == typeof t.digest &&
          t.digest === n
        );
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    3750: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          ReadonlyURLSearchParams: function () {
            return l.ReadonlyURLSearchParams;
          },
          RedirectType: function () {
            return l.RedirectType;
          },
          ServerInsertedHTMLContext: function () {
            return c.ServerInsertedHTMLContext;
          },
          forbidden: function () {
            return l.forbidden;
          },
          notFound: function () {
            return l.notFound;
          },
          permanentRedirect: function () {
            return l.permanentRedirect;
          },
          redirect: function () {
            return l.redirect;
          },
          unauthorized: function () {
            return l.unauthorized;
          },
          unstable_rethrow: function () {
            return l.unstable_rethrow;
          },
          useParams: function () {
            return f;
          },
          usePathname: function () {
            return h;
          },
          useRouter: function () {
            return p;
          },
          useSearchParams: function () {
            return d;
          },
          useSelectedLayoutSegment: function () {
            return y;
          },
          useSelectedLayoutSegments: function () {
            return m;
          },
          useServerInsertedHTML: function () {
            return c.useServerInsertedHTML;
          },
        });
      let r = n(6540),
        i = n(9258),
        s = n(8519),
        o = n(4365),
        a = n(274),
        l = n(4531),
        u = n(8228),
        c = n(465);
      function d() {
        let t = (0, r.useContext)(s.SearchParamsContext);
        return (0, r.useMemo)(
          () => (t ? new l.ReadonlyURLSearchParams(t) : null),
          [t]
        );
      }
      function h() {
        return (
          (0, u.useDynamicRouteParams)("usePathname()"),
          (0, r.useContext)(s.PathnameContext)
        );
      }
      function p() {
        let t = (0, r.useContext)(i.AppRouterContext);
        if (null === t)
          throw Error("invariant expected app router to be mounted");
        return t;
      }
      function f() {
        return (
          (0, u.useDynamicRouteParams)("useParams()"),
          (0, r.useContext)(s.PathParamsContext)
        );
      }
      function m(t) {
        void 0 === t && (t = "children"),
          (0, u.useDynamicRouteParams)("useSelectedLayoutSegments()");
        let e = (0, r.useContext)(i.LayoutRouterContext);
        return e
          ? (function t(e, n, r, i) {
              let s;
              if ((void 0 === r && (r = !0), void 0 === i && (i = []), r))
                s = e[1][n];
              else {
                var l;
                let t = e[1];
                s = null != (l = t.children) ? l : Object.values(t)[0];
              }
              if (!s) return i;
              let u = s[0],
                c = (0, o.getSegmentValue)(u);
              return !c || c.startsWith(a.PAGE_SEGMENT_KEY)
                ? i
                : (i.push(c), t(s, n, !1, i));
            })(e.tree, t)
          : null;
      }
      function y(t) {
        void 0 === t && (t = "children"),
          (0, u.useDynamicRouteParams)("useSelectedLayoutSegment()");
        let e = m(t);
        if (!e || 0 === e.length) return null;
        let n = "children" === t ? e[0] : e[e.length - 1];
        return n === a.DEFAULT_SEGMENT_KEY ? null : n;
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    4531: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          ReadonlyURLSearchParams: function () {
            return c;
          },
          RedirectType: function () {
            return i.RedirectType;
          },
          forbidden: function () {
            return o.forbidden;
          },
          notFound: function () {
            return s.notFound;
          },
          permanentRedirect: function () {
            return r.permanentRedirect;
          },
          redirect: function () {
            return r.redirect;
          },
          unauthorized: function () {
            return a.unauthorized;
          },
          unstable_rethrow: function () {
            return l.unstable_rethrow;
          },
        });
      let r = n(8600),
        i = n(8923),
        s = n(7966),
        o = n(6247),
        a = n(4730),
        l = n(8542);
      class u extends Error {
        constructor() {
          super(
            "Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams"
          );
        }
      }
      class c extends URLSearchParams {
        append() {
          throw new u();
        }
        delete() {
          throw new u();
        }
        set() {
          throw new u();
        }
        sort() {
          throw new u();
        }
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    7966: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "notFound", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = "" + n(3167).HTTP_ERROR_FALLBACK_ERROR_CODE + ";404";
      function i() {
        let t = Error(r);
        throw ((t.digest = r), t);
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    8600: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          getRedirectError: function () {
            return o;
          },
          getRedirectStatusCodeFromError: function () {
            return d;
          },
          getRedirectTypeFromError: function () {
            return c;
          },
          getURLFromRedirectError: function () {
            return u;
          },
          permanentRedirect: function () {
            return l;
          },
          redirect: function () {
            return a;
          },
        });
      let r = n(7860),
        i = n(4357),
        s = n(8923);
      function o(t, e, n) {
        void 0 === n && (n = i.RedirectStatusCode.TemporaryRedirect);
        let r = Error(s.REDIRECT_ERROR_CODE);
        return (
          (r.digest =
            s.REDIRECT_ERROR_CODE + ";" + e + ";" + t + ";" + n + ";"),
          r
        );
      }
      function a(t, e) {
        let n = r.actionAsyncStorage.getStore();
        throw o(
          t,
          e ||
            ((null == n ? void 0 : n.isAction)
              ? s.RedirectType.push
              : s.RedirectType.replace),
          i.RedirectStatusCode.TemporaryRedirect
        );
      }
      function l(t, e) {
        throw (
          (void 0 === e && (e = s.RedirectType.replace),
          o(t, e, i.RedirectStatusCode.PermanentRedirect))
        );
      }
      function u(t) {
        return (0, s.isRedirectError)(t)
          ? t.digest.split(";").slice(2, -2).join(";")
          : null;
      }
      function c(t) {
        if (!(0, s.isRedirectError)(t)) throw Error("Not a redirect error");
        return t.digest.split(";", 2)[1];
      }
      function d(t) {
        if (!(0, s.isRedirectError)(t)) throw Error("Not a redirect error");
        return Number(t.digest.split(";").at(-2));
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    4365: (t, e) => {
      "use strict";
      function n(t) {
        return Array.isArray(t) ? t[1] : t;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getSegmentValue", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    1480: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          StaticGenBailoutError: function () {
            return r;
          },
          isStaticGenBailoutError: function () {
            return i;
          },
        });
      let n = "NEXT_STATIC_GEN_BAILOUT";
      class r extends Error {
        constructor(...t) {
          super(...t), (this.code = n);
        }
      }
      function i(t) {
        return (
          "object" == typeof t && null !== t && "code" in t && t.code === n
        );
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    4730: (t, e, n) => {
      "use strict";
      function r() {
        throw Error(
          "`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "unauthorized", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(3167).HTTP_ERROR_FALLBACK_ERROR_CODE,
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    8542: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "unstable_rethrow", {
          enumerable: !0,
          get: function () {
            return function t(e) {
              if (
                (0, o.isNextRouterError)(e) ||
                (0, s.isBailoutToCSRError)(e) ||
                (0, r.isDynamicUsageError)(e) ||
                (0, i.isPostpone)(e)
              )
                throw e;
              e instanceof Error && "cause" in e && t(e.cause);
            };
          },
        });
      let r = n(8837),
        i = n(9222),
        s = n(8431),
        o = n(7643);
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    5157: (t, e, n) => {
      "use strict";
      function r(t, e, n, r) {
        return !1;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(2063),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    6526: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "Image", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let r = n(7677),
        i = n(544),
        s = n(4848),
        o = i._(n(6540)),
        a = r._(n(961)),
        l = r._(n(6085)),
        u = n(7282),
        c = n(2105),
        d = n(9641);
      n(7679);
      let h = n(7644),
        p = r._(n(5472)),
        f = n(1903),
        m = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function y(t, e, n, r, i, s, o) {
        let a = null == t ? void 0 : t.src;
        t &&
          t["data-loaded-src"] !== a &&
          ((t["data-loaded-src"] = a),
          ("decode" in t ? t.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (t.parentElement && t.isConnected) {
                if (("empty" !== e && i(!0), null == n ? void 0 : n.current)) {
                  let e = new Event("load");
                  Object.defineProperty(e, "target", {
                    writable: !1,
                    value: t,
                  });
                  let r = !1,
                    i = !1;
                  n.current({
                    ...e,
                    nativeEvent: e,
                    currentTarget: t,
                    target: t,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => i,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), e.preventDefault();
                    },
                    stopPropagation: () => {
                      (i = !0), e.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(t);
              }
            }));
      }
      function v(t) {
        return o.use ? { fetchPriority: t } : { fetchpriority: t };
      }
      let g = (0, o.forwardRef)((t, e) => {
        let {
            src: n,
            srcSet: r,
            sizes: i,
            height: a,
            width: l,
            decoding: u,
            className: c,
            style: d,
            fetchPriority: h,
            placeholder: p,
            loading: m,
            unoptimized: g,
            fill: b,
            onLoadRef: w,
            onLoadingCompleteRef: x,
            setBlurComplete: A,
            setShowAltText: P,
            sizesInput: S,
            onLoad: T,
            onError: E,
            ...k
          } = t,
          C = (0, o.useCallback)(
            (t) => {
              t && (E && (t.src = t.src), t.complete && y(t, p, w, x, A, g, S));
            },
            [n, p, w, x, A, E, g, S]
          ),
          R = (0, f.useMergedRef)(e, C);
        return (0, s.jsx)("img", {
          ...k,
          ...v(h),
          loading: m,
          width: l,
          height: a,
          decoding: u,
          "data-nimg": b ? "fill" : "1",
          className: c,
          style: d,
          sizes: i,
          srcSet: r,
          src: n,
          ref: R,
          onLoad: (t) => {
            y(t.currentTarget, p, w, x, A, g, S);
          },
          onError: (t) => {
            P(!0), "empty" !== p && A(!0), E && E(t);
          },
        });
      });
      function b(t) {
        let { isAppRouter: e, imgAttributes: n } = t,
          r = {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...v(n.fetchPriority),
          };
        return e && a.default.preload
          ? (a.default.preload(n.src, r), null)
          : (0, s.jsx)(l.default, {
              children: (0, s.jsx)(
                "link",
                { rel: "preload", href: n.srcSet ? void 0 : n.src, ...r },
                "__nimg-" + n.src + n.srcSet + n.sizes
              ),
            });
      }
      let w = (0, o.forwardRef)((t, e) => {
        let n = (0, o.useContext)(h.RouterContext),
          r = (0, o.useContext)(d.ImageConfigContext),
          i = (0, o.useMemo)(() => {
            var t;
            let e = m || r || c.imageConfigDefault,
              n = [...e.deviceSizes, ...e.imageSizes].sort((t, e) => t - e),
              i = e.deviceSizes.sort((t, e) => t - e),
              s = null == (t = e.qualities) ? void 0 : t.sort((t, e) => t - e);
            return { ...e, allSizes: n, deviceSizes: i, qualities: s };
          }, [r]),
          { onLoad: a, onLoadingComplete: l } = t,
          f = (0, o.useRef)(a);
        (0, o.useEffect)(() => {
          f.current = a;
        }, [a]);
        let y = (0, o.useRef)(l);
        (0, o.useEffect)(() => {
          y.current = l;
        }, [l]);
        let [v, w] = (0, o.useState)(!1),
          [x, A] = (0, o.useState)(!1),
          { props: P, meta: S } = (0, u.getImgProps)(t, {
            defaultLoader: p.default,
            imgConf: i,
            blurComplete: v,
            showAltText: x,
          });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(g, {
              ...P,
              unoptimized: S.unoptimized,
              placeholder: S.placeholder,
              fill: S.fill,
              onLoadRef: f,
              onLoadingCompleteRef: y,
              setBlurComplete: w,
              setShowAltText: A,
              sizesInput: t.sizes,
              ref: e,
            }),
            S.priority
              ? (0, s.jsx)(b, { isAppRouter: !n, imgAttributes: P })
              : null,
          ],
        });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    6397: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let r = n(7677),
        i = n(4848),
        s = r._(n(6540)),
        o = n(6847),
        a = n(7785),
        l = n(2772),
        u = n(1278),
        c = n(6185),
        d = n(7644),
        h = n(6334),
        p = n(5157),
        f = n(296),
        m = n(1903),
        y = new Set();
      function v(t, e, n, r) {
        if ((0, a.isLocalURL)(e)) {
          if (!r.bypassPrefetchedCheck) {
            let i =
              e +
              "%" +
              n +
              "%" +
              (void 0 !== r.locale
                ? r.locale
                : "locale" in t
                ? t.locale
                : void 0);
            if (y.has(i)) return;
            y.add(i);
          }
          t.prefetch(e, n, r).catch((t) => {});
        }
      }
      function g(t) {
        return "string" == typeof t ? t : (0, l.formatUrl)(t);
      }
      let b = s.default.forwardRef(function (t, e) {
        let n, r;
        let {
          href: l,
          as: y,
          children: b,
          prefetch: w = null,
          passHref: x,
          replace: A,
          shallow: P,
          scroll: S,
          locale: T,
          onClick: E,
          onMouseEnter: k,
          onTouchStart: C,
          legacyBehavior: R = !1,
          ...D
        } = t;
        (n = b),
          R &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = (0, i.jsx)("a", { children: n }));
        let j = s.default.useContext(d.RouterContext),
          M = !1 !== w,
          { href: O, as: L } = s.default.useMemo(() => {
            if (!j) {
              let t = g(l);
              return { href: t, as: y ? g(y) : t };
            }
            let [t, e] = (0, o.resolveHref)(j, l, !0);
            return { href: t, as: y ? (0, o.resolveHref)(j, y) : e || t };
          }, [j, l, y]),
          _ = s.default.useRef(O),
          V = s.default.useRef(L);
        R && (r = s.default.Children.only(n));
        let I = R ? r && "object" == typeof r && r.ref : e,
          [F, B, U] = (0, h.useIntersection)({ rootMargin: "200px" }),
          W = s.default.useCallback(
            (t) => {
              (V.current !== L || _.current !== O) &&
                (U(), (V.current = L), (_.current = O)),
                F(t);
            },
            [L, O, U, F]
          ),
          N = (0, m.useMergedRef)(W, I);
        s.default.useEffect(() => {
          j && B && M && v(j, O, L, { locale: T });
        }, [L, O, B, T, M, null == j ? void 0 : j.locale, j]);
        let G = {
          ref: N,
          onClick(t) {
            R || "function" != typeof E || E(t),
              R &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(t),
              j &&
                !t.defaultPrevented &&
                (function (t, e, n, r, i, s, o, l) {
                  let { nodeName: u } = t.currentTarget;
                  ("A" === u.toUpperCase() &&
                    ((function (t) {
                      let e = t.currentTarget.getAttribute("target");
                      return (
                        (e && "_self" !== e) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which)
                      );
                    })(t) ||
                      !(0, a.isLocalURL)(n))) ||
                    (t.preventDefault(),
                    (() => {
                      let t = null == o || o;
                      "beforePopState" in e
                        ? e[i ? "replace" : "push"](n, r, {
                            shallow: s,
                            locale: l,
                            scroll: t,
                          })
                        : e[i ? "replace" : "push"](r || n, { scroll: t });
                    })());
                })(t, j, O, L, A, P, S, T);
          },
          onMouseEnter(t) {
            R || "function" != typeof k || k(t),
              R &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(t),
              j &&
                v(j, O, L, {
                  locale: T,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
          onTouchStart: function (t) {
            R || "function" != typeof C || C(t),
              R &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(t),
              j &&
                v(j, O, L, {
                  locale: T,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
        };
        if ((0, u.isAbsoluteUrl)(L)) G.href = L;
        else if (!R || x || ("a" === r.type && !("href" in r.props))) {
          let t = void 0 !== T ? T : null == j ? void 0 : j.locale,
            e =
              (null == j ? void 0 : j.isLocaleDomain) &&
              (0, p.getDomainLocale)(
                L,
                t,
                null == j ? void 0 : j.locales,
                null == j ? void 0 : j.domainLocales
              );
          G.href =
            e ||
            (0, f.addBasePath)(
              (0, c.addLocale)(L, t, null == j ? void 0 : j.defaultLocale)
            );
        }
        return R
          ? s.default.cloneElement(r, G)
          : (0, i.jsx)("a", { ...D, ...G, children: n });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    6334: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = n(6540),
        i = n(4959),
        s = "function" == typeof IntersectionObserver,
        o = new Map(),
        a = [];
      function l(t) {
        let { rootRef: e, rootMargin: n, disabled: l } = t,
          u = l || !s,
          [c, d] = (0, r.useState)(!1),
          h = (0, r.useRef)(null),
          p = (0, r.useCallback)((t) => {
            h.current = t;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (s) {
              if (u || c) return;
              let t = h.current;
              if (t && t.tagName)
                return (function (t, e, n) {
                  let {
                    id: r,
                    observer: i,
                    elements: s,
                  } = (function (t) {
                    let e;
                    let n = {
                        root: t.root || null,
                        margin: t.rootMargin || "",
                      },
                      r = a.find(
                        (t) => t.root === n.root && t.margin === n.margin
                      );
                    if (r && (e = o.get(r))) return e;
                    let i = new Map();
                    return (
                      (e = {
                        id: n,
                        observer: new IntersectionObserver((t) => {
                          t.forEach((t) => {
                            let e = i.get(t.target),
                              n = t.isIntersecting || t.intersectionRatio > 0;
                            e && n && e(n);
                          });
                        }, t),
                        elements: i,
                      }),
                      a.push(n),
                      o.set(n, e),
                      e
                    );
                  })(n);
                  return (
                    s.set(t, e),
                    i.observe(t),
                    function () {
                      if ((s.delete(t), i.unobserve(t), 0 === s.size)) {
                        i.disconnect(), o.delete(r);
                        let t = a.findIndex(
                          (t) => t.root === r.root && t.margin === r.margin
                        );
                        t > -1 && a.splice(t, 1);
                      }
                    }
                  );
                })(t, (t) => t && d(t), {
                  root: null == e ? void 0 : e.current,
                  rootMargin: n,
                });
            } else if (!c) {
              let t = (0, i.requestIdleCallback)(() => d(!0));
              return () => (0, i.cancelIdleCallback)(t);
            }
          }, [u, n, e, c, h.current]),
          [
            p,
            c,
            (0, r.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    1903: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(6540);
      function i(t, e) {
        let n = (0, r.useRef)(() => {}),
          i = (0, r.useRef)(() => {});
        return (0, r.useMemo)(
          () =>
            t && e
              ? (r) => {
                  null === r
                    ? (n.current(), i.current())
                    : ((n.current = s(t, r)), (i.current = s(e, r)));
                }
              : t || e,
          [t, e]
        );
      }
      function s(t, e) {
        if ("function" != typeof t)
          return (
            (t.current = e),
            () => {
              t.current = null;
            }
          );
        {
          let n = t(e);
          return "function" == typeof n ? n : () => t(null);
        }
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    7282: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        n(7679);
      let r = n(9197),
        i = n(2105);
      function s(t) {
        return void 0 !== t.default;
      }
      function o(t) {
        return void 0 === t
          ? t
          : "number" == typeof t
          ? Number.isFinite(t)
            ? t
            : NaN
          : "string" == typeof t && /^[0-9]+$/.test(t)
          ? parseInt(t, 10)
          : NaN;
      }
      function a(t, e) {
        var n, a;
        let l,
          u,
          c,
          {
            src: d,
            sizes: h,
            unoptimized: p = !1,
            priority: f = !1,
            loading: m,
            className: y,
            quality: v,
            width: g,
            height: b,
            fill: w = !1,
            style: x,
            overrideSrc: A,
            onLoad: P,
            onLoadingComplete: S,
            placeholder: T = "empty",
            blurDataURL: E,
            fetchPriority: k,
            decoding: C = "async",
            layout: R,
            objectFit: D,
            objectPosition: j,
            lazyBoundary: M,
            lazyRoot: O,
            ...L
          } = t,
          { imgConf: _, showAltText: V, blurComplete: I, defaultLoader: F } = e,
          B = _ || i.imageConfigDefault;
        if ("allSizes" in B) l = B;
        else {
          let t = [...B.deviceSizes, ...B.imageSizes].sort((t, e) => t - e),
            e = B.deviceSizes.sort((t, e) => t - e),
            r = null == (n = B.qualities) ? void 0 : n.sort((t, e) => t - e);
          l = { ...B, allSizes: t, deviceSizes: e, qualities: r };
        }
        if (void 0 === F)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let U = L.loader || F;
        delete L.loader, delete L.srcSet;
        let W = "__next_img_default" in U;
        if (W) {
          if ("custom" === l.loader)
            throw Error(
              'Image with src "' +
                d +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let t = U;
          U = (e) => {
            let { config: n, ...r } = e;
            return t(r);
          };
        }
        if (R) {
          "fill" === R && (w = !0);
          let t = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[R];
          t && (x = { ...x, ...t });
          let e = { responsive: "100vw", fill: "100vw" }[R];
          e && !h && (h = e);
        }
        let N = "",
          G = o(g),
          q = o(b);
        if ((a = d) && "object" == typeof a && (s(a) || void 0 !== a.src)) {
          let t = s(d) ? d.default : d;
          if (!t.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(t)
            );
          if (!t.height || !t.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(t)
            );
          if (
            ((u = t.blurWidth),
            (c = t.blurHeight),
            (E = E || t.blurDataURL),
            (N = t.src),
            !w)
          ) {
            if (G || q) {
              if (G && !q) {
                let e = G / t.width;
                q = Math.round(t.height * e);
              } else if (!G && q) {
                let e = q / t.height;
                G = Math.round(t.width * e);
              }
            } else (G = t.width), (q = t.height);
          }
        }
        let z = !f && ("lazy" === m || void 0 === m);
        (!(d = "string" == typeof d ? d : N) ||
          d.startsWith("data:") ||
          d.startsWith("blob:")) &&
          ((p = !0), (z = !1)),
          l.unoptimized && (p = !0),
          W &&
            !l.dangerouslyAllowSVG &&
            d.split("?", 1)[0].endsWith(".svg") &&
            (p = !0);
        let H = o(v),
          K = Object.assign(
            w
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: D,
                  objectPosition: j,
                }
              : {},
            V ? {} : { color: "transparent" },
            x
          ),
          X =
            I || "empty" === T
              ? null
              : "blur" === T
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, r.getImageBlurSvg)({
                  widthInt: G,
                  heightInt: q,
                  blurWidth: u,
                  blurHeight: c,
                  blurDataURL: E || "",
                  objectFit: K.objectFit,
                }) +
                '")'
              : 'url("' + T + '")',
          Y = X
            ? {
                backgroundSize: K.objectFit || "cover",
                backgroundPosition: K.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: X,
              }
            : {},
          Q = (function (t) {
            let {
              config: e,
              src: n,
              unoptimized: r,
              width: i,
              quality: s,
              sizes: o,
              loader: a,
            } = t;
            if (r) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (t, e, n) {
                let { deviceSizes: r, allSizes: i } = t;
                if (n) {
                  let t = /(^|\s)(1?\d?\d)vw/g,
                    e = [];
                  for (let r; (r = t.exec(n)); r) e.push(parseInt(r[2]));
                  if (e.length) {
                    let t = 0.01 * Math.min(...e);
                    return {
                      widths: i.filter((e) => e >= r[0] * t),
                      kind: "w",
                    };
                  }
                  return { widths: i, kind: "w" };
                }
                return "number" != typeof e
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [e, 2 * e].map(
                            (t) => i.find((e) => e >= t) || i[i.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(e, i, o),
              c = l.length - 1;
            return {
              sizes: o || "w" !== u ? o : "100vw",
              srcSet: l
                .map(
                  (t, r) =>
                    a({ config: e, src: n, quality: s, width: t }) +
                    " " +
                    ("w" === u ? t : r + 1) +
                    u
                )
                .join(", "),
              src: a({ config: e, src: n, quality: s, width: l[c] }),
            };
          })({
            config: l,
            src: d,
            unoptimized: p,
            width: G,
            quality: H,
            sizes: h,
            loader: U,
          });
        return {
          props: {
            ...L,
            loading: z ? "lazy" : m,
            fetchPriority: k,
            width: G,
            height: q,
            decoding: C,
            className: y,
            style: { ...K, ...Y },
            sizes: Q.sizes,
            srcSet: Q.srcSet,
            src: A || Q.src,
          },
          meta: { unoptimized: p, priority: f, placeholder: T, fill: w },
        };
      }
    },
    9197: (t, e) => {
      "use strict";
      function n(t) {
        let {
            widthInt: e,
            heightInt: n,
            blurWidth: r,
            blurHeight: i,
            blurDataURL: s,
            objectFit: o,
          } = t,
          a = r ? 40 * r : e,
          l = i ? 40 * i : n,
          u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === o
            ? "xMidYMid"
            : "cover" === o
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          s +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    2364: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return a;
          },
        });
      let r = n(7677),
        i = n(7282),
        s = n(6526),
        o = r._(n(5472));
      function a(t) {
        let { props: e } = (0, i.getImgProps)(t, {
          defaultLoader: o.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [t, n] of Object.entries(e)) void 0 === n && delete e[t];
        return { props: e };
      }
      let l = s.Image;
    },
    5472: (t, e) => {
      "use strict";
      function n(t) {
        var e;
        let { config: n, src: r, width: i, quality: s } = t,
          o =
            s ||
            (null == (e = n.qualities)
              ? void 0
              : e.reduce((t, e) =>
                  Math.abs(e - 75) < Math.abs(t - 75) ? e : t
                )) ||
            75;
        return (
          n.path +
          "?url=" +
          encodeURIComponent(r) +
          "&w=" +
          i +
          "&q=" +
          o +
          (r.startsWith("/_next/static/media/"), "")
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (n.__next_img_default = !0);
      let r = n;
    },
    465: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          ServerInsertedHTMLContext: function () {
            return i;
          },
          useServerInsertedHTML: function () {
            return s;
          },
        });
      let r = n(544)._(n(6540)),
        i = r.default.createContext(null);
      function s(t) {
        let e = (0, r.useContext)(i);
        e && e(t);
      }
    },
    1787: () => {},
    8837: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isDynamicUsageError", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = n(958),
        i = n(8431),
        s = n(7643),
        o = n(8228),
        a = (t) =>
          (0, r.isDynamicServerError)(t) ||
          (0, i.isBailoutToCSRError)(t) ||
          (0, s.isNextRouterError)(t) ||
          (0, o.isDynamicPostpone)(t);
    },
    8126: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          METADATA_BOUNDARY_NAME: function () {
            return n;
          },
          OUTLET_BOUNDARY_NAME: function () {
            return i;
          },
          VIEWPORT_BOUNDARY_NAME: function () {
            return r;
          },
        });
      let n = "__next_metadata_boundary__",
        r = "__next_viewport_boundary__",
        i = "__next_outlet_boundary__";
    },
    1913: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "actionAsyncStorageInstance", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = (0, n(8626).createAsyncLocalStorage)();
    },
    7860: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "actionAsyncStorage", {
          enumerable: !0,
          get: function () {
            return r.actionAsyncStorageInstance;
          },
        });
      let r = n(1913);
    },
    8626: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          bindSnapshot: function () {
            return o;
          },
          createAsyncLocalStorage: function () {
            return s;
          },
          createSnapshot: function () {
            return a;
          },
        });
      let n = Error(
        "Invariant: AsyncLocalStorage accessed in runtime where it is not available"
      );
      class r {
        disable() {
          throw n;
        }
        getStore() {}
        run() {
          throw n;
        }
        exit() {
          throw n;
        }
        enterWith() {
          throw n;
        }
        static bind(t) {
          return t;
        }
      }
      let i = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;
      function s() {
        return i ? new i() : new r();
      }
      function o(t) {
        return i ? i.bind(t) : r.bind(t);
      }
      function a() {
        return i
          ? i.snapshot()
          : function (t, ...e) {
              return t(...e);
            };
      }
    },
    8228: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          Postpone: function () {
            return P;
          },
          abortAndThrowOnSynchronousRequestDataAccess: function () {
            return x;
          },
          abortOnSynchronousPlatformIOAccess: function () {
            return b;
          },
          accessedDynamicData: function () {
            return j;
          },
          annotateDynamicAccess: function () {
            return V;
          },
          consumeDynamicAccess: function () {
            return M;
          },
          createDynamicTrackingState: function () {
            return d;
          },
          createDynamicValidationState: function () {
            return h;
          },
          createPostponedAbortSignal: function () {
            return _;
          },
          formatDynamicAPIAccesses: function () {
            return O;
          },
          getFirstDynamicReason: function () {
            return p;
          },
          isDynamicPostpone: function () {
            return E;
          },
          isPrerenderInterruptedError: function () {
            return D;
          },
          markCurrentScopeAsDynamic: function () {
            return f;
          },
          postponeWithTracking: function () {
            return S;
          },
          throwIfDisallowedDynamic: function () {
            return G;
          },
          throwToInterruptStaticGeneration: function () {
            return y;
          },
          trackAllowedDynamicAccess: function () {
            return N;
          },
          trackDynamicDataInDynamicRender: function () {
            return v;
          },
          trackFallbackParamAccessed: function () {
            return m;
          },
          trackSynchronousPlatformIOAccessInDev: function () {
            return w;
          },
          trackSynchronousRequestDataAccessInDev: function () {
            return A;
          },
          useDynamicRouteParams: function () {
            return I;
          },
        });
      let r = (function (t) {
          return t && t.__esModule ? t : { default: t };
        })(n(6540)),
        i = n(958),
        s = n(1480),
        o = n(3074),
        a = n(7305),
        l = n(2249),
        u = n(8126),
        c = "function" == typeof r.default.unstable_postpone;
      function d(t) {
        return {
          isDebugDynamicAccesses: t,
          dynamicAccesses: [],
          syncDynamicExpression: void 0,
          syncDynamicErrorWithStack: null,
        };
      }
      function h() {
        return {
          hasSuspendedDynamic: !1,
          hasDynamicMetadata: !1,
          hasDynamicViewport: !1,
          hasSyncDynamicErrors: !1,
          dynamicErrors: [],
        };
      }
      function p(t) {
        var e;
        return null == (e = t.dynamicAccesses[0]) ? void 0 : e.expression;
      }
      function f(t, e, n) {
        if (
          (!e || ("cache" !== e.type && "unstable-cache" !== e.type)) &&
          !t.forceDynamic &&
          !t.forceStatic
        ) {
          if (t.dynamicShouldError)
            throw new s.StaticGenBailoutError(
              `Route ${t.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${n}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`
            );
          if (e) {
            if ("prerender-ppr" === e.type) S(t.route, n, e.dynamicTracking);
            else if ("prerender-legacy" === e.type) {
              e.revalidate = 0;
              let r = new i.DynamicServerError(
                `Route ${t.route} couldn't be rendered statically because it used ${n}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`
              );
              throw (
                ((t.dynamicUsageDescription = n),
                (t.dynamicUsageStack = r.stack),
                r)
              );
            }
          }
        }
      }
      function m(t, e) {
        let n = o.workUnitAsyncStorage.getStore();
        n && "prerender-ppr" === n.type && S(t.route, e, n.dynamicTracking);
      }
      function y(t, e, n) {
        let r = new i.DynamicServerError(
          `Route ${e.route} couldn't be rendered statically because it used \`${t}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`
        );
        throw (
          ((n.revalidate = 0),
          (e.dynamicUsageDescription = t),
          (e.dynamicUsageStack = r.stack),
          r)
        );
      }
      function v(t, e) {
        e &&
          "cache" !== e.type &&
          "unstable-cache" !== e.type &&
          ("prerender" === e.type || "prerender-legacy" === e.type) &&
          (e.revalidate = 0);
      }
      function g(t, e, n) {
        let r = R(
          `Route ${t} needs to bail out of prerendering at this point because it used ${e}.`
        );
        n.controller.abort(r);
        let i = n.dynamicTracking;
        i &&
          i.dynamicAccesses.push({
            stack: i.isDebugDynamicAccesses ? Error().stack : void 0,
            expression: e,
          });
      }
      function b(t, e, n, r) {
        let i = r.dynamicTracking;
        return (
          i &&
            null === i.syncDynamicErrorWithStack &&
            ((i.syncDynamicExpression = e), (i.syncDynamicErrorWithStack = n)),
          g(t, e, r)
        );
      }
      function w(t) {
        t.prerenderPhase = !1;
      }
      function x(t, e, n, r) {
        let i = r.dynamicTracking;
        throw (
          (i &&
            null === i.syncDynamicErrorWithStack &&
            ((i.syncDynamicExpression = e),
            (i.syncDynamicErrorWithStack = n),
            !0 === r.validating && (i.syncDynamicLogged = !0)),
          g(t, e, r),
          R(
            `Route ${t} needs to bail out of prerendering at this point because it used ${e}.`
          ))
        );
      }
      let A = w;
      function P({ reason: t, route: e }) {
        let n = o.workUnitAsyncStorage.getStore();
        S(e, t, n && "prerender-ppr" === n.type ? n.dynamicTracking : null);
      }
      function S(t, e, n) {
        L(),
          n &&
            n.dynamicAccesses.push({
              stack: n.isDebugDynamicAccesses ? Error().stack : void 0,
              expression: e,
            }),
          r.default.unstable_postpone(T(t, e));
      }
      function T(t, e) {
        return `Route ${t} needs to bail out of prerendering at this point because it used ${e}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
      }
      function E(t) {
        return (
          "object" == typeof t &&
          null !== t &&
          "string" == typeof t.message &&
          k(t.message)
        );
      }
      function k(t) {
        return (
          t.includes(
            "needs to bail out of prerendering at this point because it used"
          ) &&
          t.includes(
            "Learn more: https://nextjs.org/docs/messages/ppr-caught-error"
          )
        );
      }
      if (!1 === k(T("%%%", "^^^")))
        throw Error(
          "Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"
        );
      let C = "NEXT_PRERENDER_INTERRUPTED";
      function R(t) {
        let e = Error(t);
        return (e.digest = C), e;
      }
      function D(t) {
        return (
          "object" == typeof t &&
          null !== t &&
          t.digest === C &&
          "name" in t &&
          "message" in t &&
          t instanceof Error
        );
      }
      function j(t) {
        return t.length > 0;
      }
      function M(t, e) {
        return t.dynamicAccesses.push(...e.dynamicAccesses), t.dynamicAccesses;
      }
      function O(t) {
        return t
          .filter((t) => "string" == typeof t.stack && t.stack.length > 0)
          .map(
            ({ expression: t, stack: e }) => (
              (e = e
                .split("\n")
                .slice(4)
                .filter(
                  (t) =>
                    !(
                      t.includes("node_modules/next/") ||
                      t.includes(" (<anonymous>)") ||
                      t.includes(" (node:")
                    )
                )
                .join("\n")),
              `Dynamic API Usage Debug - ${t}:
${e}`
            )
          );
      }
      function L() {
        if (!c)
          throw Error(
            "Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"
          );
      }
      function _(t) {
        L();
        let e = new AbortController();
        try {
          r.default.unstable_postpone(t);
        } catch (t) {
          e.abort(t);
        }
        return e.signal;
      }
      function V(t, e) {
        let n = e.dynamicTracking;
        n &&
          n.dynamicAccesses.push({
            stack: n.isDebugDynamicAccesses ? Error().stack : void 0,
            expression: t,
          });
      }
      function I(t) {
        if ("undefined" == typeof window) {
          let e = a.workAsyncStorage.getStore();
          if (
            e &&
            e.isStaticGeneration &&
            e.fallbackRouteParams &&
            e.fallbackRouteParams.size > 0
          ) {
            let n = o.workUnitAsyncStorage.getStore();
            n &&
              ("prerender" === n.type
                ? r.default.use((0, l.makeHangingPromise)(n.renderSignal, t))
                : "prerender-ppr" === n.type
                ? S(e.route, t, n.dynamicTracking)
                : "prerender-legacy" === n.type && y(t, e, n));
          }
        }
      }
      let F = /\n\s+at Suspense \(<anonymous>\)/,
        B = RegExp(`\\n\\s+at ${u.METADATA_BOUNDARY_NAME}[\\n\\s]`),
        U = RegExp(`\\n\\s+at ${u.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`),
        W = RegExp(`\\n\\s+at ${u.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
      function N(t, e, n, r, i) {
        if (!W.test(e)) {
          if (B.test(e)) {
            n.hasDynamicMetadata = !0;
            return;
          }
          if (U.test(e)) {
            n.hasDynamicViewport = !0;
            return;
          }
          if (F.test(e)) {
            n.hasSuspendedDynamic = !0;
            return;
          }
          if (r.syncDynamicErrorWithStack || i.syncDynamicErrorWithStack) {
            n.hasSyncDynamicErrors = !0;
            return;
          } else {
            let r = (function (t, e) {
              let n = Error(t);
              return (n.stack = "Error: " + t + e), n;
            })(
              `Route "${t}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. We don't have the exact line number added to error messages yet but you can see which component in the stack below. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`,
              e
            );
            n.dynamicErrors.push(r);
            return;
          }
        }
      }
      function G(t, e, n, r) {
        let i, o, a;
        if (
          (n.syncDynamicErrorWithStack
            ? ((i = n.syncDynamicErrorWithStack),
              (o = n.syncDynamicExpression),
              (a = !0 === n.syncDynamicLogged))
            : r.syncDynamicErrorWithStack
            ? ((i = r.syncDynamicErrorWithStack),
              (o = r.syncDynamicExpression),
              (a = !0 === r.syncDynamicLogged))
            : ((i = null), (o = void 0), (a = !1)),
          e.hasSyncDynamicErrors && i)
        )
          throw (a || console.error(i), new s.StaticGenBailoutError());
        let l = e.dynamicErrors;
        if (l.length) {
          for (let t = 0; t < l.length; t++) console.error(l[t]);
          throw new s.StaticGenBailoutError();
        }
        if (!e.hasSuspendedDynamic) {
          if (e.hasDynamicMetadata) {
            if (i)
              throw (
                (console.error(i),
                new s.StaticGenBailoutError(
                  `Route "${t}" has a \`generateMetadata\` that could not finish rendering before ${o} was used. Follow the instructions in the error for this expression to resolve.`
                ))
              );
            throw new s.StaticGenBailoutError(
              `Route "${t}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`
            );
          }
          if (e.hasDynamicViewport) {
            if (i)
              throw (
                (console.error(i),
                new s.StaticGenBailoutError(
                  `Route "${t}" has a \`generateViewport\` that could not finish rendering before ${o} was used. Follow the instructions in the error for this expression to resolve.`
                ))
              );
            throw new s.StaticGenBailoutError(
              `Route "${t}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`
            );
          }
        }
      }
    },
    2528: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "workAsyncStorageInstance", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = (0, n(8626).createAsyncLocalStorage)();
    },
    7305: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "workAsyncStorage", {
          enumerable: !0,
          get: function () {
            return r.workAsyncStorageInstance;
          },
        });
      let r = n(2528);
    },
    8379: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "workUnitAsyncStorageInstance", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = (0, n(8626).createAsyncLocalStorage)();
    },
    3074: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          getExpectedRequestStore: function () {
            return i;
          },
          getPrerenderResumeDataCache: function () {
            return s;
          },
          getRenderResumeDataCache: function () {
            return o;
          },
          workUnitAsyncStorage: function () {
            return r.workUnitAsyncStorageInstance;
          },
        });
      let r = n(8379);
      function i(t) {
        let e = r.workUnitAsyncStorageInstance.getStore();
        if (e) {
          if ("request" === e.type) return e;
          if (
            "prerender" === e.type ||
            "prerender-ppr" === e.type ||
            "prerender-legacy" === e.type
          )
            throw Error(
              `\`${t}\` cannot be called inside a prerender. This is a bug in Next.js.`
            );
          if ("cache" === e.type)
            throw Error(
              `\`${t}\` cannot be called inside "use cache". Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/messages/next-request-in-use-cache`
            );
          if ("unstable-cache" === e.type)
            throw Error(
              `\`${t}\` cannot be called inside unstable_cache. Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`
            );
        }
        throw Error(
          `\`${t}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`
        );
      }
      function s(t) {
        return "prerender" === t.type || "prerender-ppr" === t.type
          ? t.prerenderResumeDataCache
          : null;
      }
      function o(t) {
        return "prerender-legacy" !== t.type &&
          "cache" !== t.type &&
          "unstable-cache" !== t.type
          ? "request" === t.type
            ? t.renderResumeDataCache
            : t.prerenderResumeDataCache
          : null;
      }
    },
    2249: (t, e) => {
      "use strict";
      function n(t, e) {
        let n = new Promise((n, r) => {
          t.addEventListener(
            "abort",
            () => {
              r(
                Error(
                  `During prerendering, ${e} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${e} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context.`
                )
              );
            },
            { once: !0 }
          );
        });
        return n.catch(r), n;
      }
      function r() {}
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "makeHangingPromise", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    9222: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isPostpone", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let n = Symbol.for("react.postpone");
      function r(t) {
        return "object" == typeof t && null !== t && t.$$typeof === n;
      }
    },
    9965: (t, e, n) => {
      t.exports = n(2364);
    },
    1106: (t, e, n) => {
      t.exports = n(6397);
    },
    6424: (t, e, n) => {
      t.exports = n(3750);
    },
    5264: (t, e, n) => {
      "use strict";
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.CopyToClipboard = void 0);
      var i = a(n(6540)),
        s = a(n(7965)),
        o = ["text", "onCopy", "options", "children"];
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function l(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(n), !0).forEach(function (e) {
                p(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function c(t, e) {
        return (c =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function d(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function h(t) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function p(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var f = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && c(t, e);
        })(l, t);
        var e,
          n,
          a =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = h(l);
              return (
                (t = e
                  ? Reflect.construct(n, arguments, h(this).constructor)
                  : n.apply(this, arguments)),
                (function (t, e) {
                  if (e && ("object" === r(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return d(t);
                })(this, t)
              );
            });
        function l() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw TypeError("Cannot call a class as a function");
          })(this, l);
          for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            p(
              d((t = a.call.apply(a, [this].concat(n)))),
              "onClick",
              function (e) {
                var n = t.props,
                  r = n.text,
                  o = n.onCopy,
                  a = n.children,
                  l = n.options,
                  u = i.default.Children.only(a),
                  c = (0, s.default)(r, l);
                o && o(r, c),
                  u &&
                    u.props &&
                    "function" == typeof u.props.onClick &&
                    u.props.onClick(e);
              }
            ),
            t
          );
        }
        return (
          (n = [
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = (t.text, t.onCopy, t.options, t.children),
                  n = (function (t, e) {
                    if (null == t) return {};
                    var n,
                      r,
                      i = (function (t, e) {
                        if (null == t) return {};
                        var n,
                          r,
                          i = {},
                          s = Object.keys(t);
                        for (r = 0; r < s.length; r++)
                          (n = s[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                        return i;
                      })(t, e);
                    if (Object.getOwnPropertySymbols) {
                      var s = Object.getOwnPropertySymbols(t);
                      for (r = 0; r < s.length; r++)
                        (n = s[r]),
                          !(e.indexOf(n) >= 0) &&
                            Object.prototype.propertyIsEnumerable.call(t, n) &&
                            (i[n] = t[n]);
                    }
                    return i;
                  })(t, o),
                  r = i.default.Children.only(e);
                return i.default.cloneElement(
                  r,
                  u(u({}, n), {}, { onClick: this.onClick })
                );
              },
            },
          ]),
          (function (t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          })(l.prototype, n),
          Object.defineProperty(l, "prototype", { writable: !1 }),
          l
        );
      })(i.default.PureComponent);
      (e.CopyToClipboard = f),
        p(f, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    9399: (t, e, n) => {
      "use strict";
      var r = n(5264).CopyToClipboard;
      (r.CopyToClipboard = r), (t.exports = r);
    },
    6426: (t) => {
      t.exports = function () {
        var t = document.getSelection();
        if (!t.rangeCount) return function () {};
        for (
          var e = document.activeElement, n = [], r = 0;
          r < t.rangeCount;
          r++
        )
          n.push(t.getRangeAt(r));
        switch (e.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            e.blur();
            break;
          default:
            e = null;
        }
        return (
          t.removeAllRanges(),
          function () {
            "Caret" === t.type && t.removeAllRanges(),
              t.rangeCount ||
                n.forEach(function (e) {
                  t.addRange(e);
                }),
              e && e.focus();
          }
        );
      };
    },
    6942: (t, e) => {
      var n;
      !(function () {
        "use strict";
        var r = {}.hasOwnProperty;
        function i() {
          for (var t = "", e = 0; e < arguments.length; e++) {
            var n = arguments[e];
            n &&
              (t = s(
                t,
                (function (t) {
                  if ("string" == typeof t || "number" == typeof t) return t;
                  if ("object" != typeof t) return "";
                  if (Array.isArray(t)) return i.apply(null, t);
                  if (
                    t.toString !== Object.prototype.toString &&
                    !t.toString.toString().includes("[native code]")
                  )
                    return t.toString();
                  var e = "";
                  for (var n in t) r.call(t, n) && t[n] && (e = s(e, n));
                  return e;
                })(n)
              ));
          }
          return t;
        }
        function s(t, e) {
          return e ? (t ? t + " " + e : t + e) : t;
        }
        t.exports
          ? ((i.default = i), (t.exports = i))
          : void 0 !==
              (n = function () {
                return i;
              }.apply(e, [])) && (t.exports = n);
      })();
    },
    6781: (t, e, n) => {
      "use strict";
      n.d(e, { Fq: () => P }),
        (function (t) {
          (t.Mainnet = "Mainnet"),
            (t.Shasta = "Shasta"),
            (t.Nile = "Nile"),
            (t.Unknown = "Unknown");
        })(r || (r = {})),
        (function (t) {
          (t.Mainnet = "Mainnet"), (t.Shasta = "Shasta"), (t.Nile = "Nile");
        })(i || (i = {}));
      var r,
        i,
        s,
        o,
        a = n(3816);
      !(function (t) {
        (t.Loading = "Loading"), (t.NotFound = "NotFound"), (t.Found = "Found");
      })(s || (s = {})),
        (function (t) {
          (t.Loading = "Loading"),
            (t.NotFound = "NotFound"),
            (t.Disconnect = "Disconnected"),
            (t.Connected = "Connected");
        })(o || (o = {}));
      class l extends a {
        get connected() {
          return this.state === o.Connected;
        }
        disconnect() {
          return (
            console.info(
              "The current adapter doesn't support disconnect by DApp."
            ),
            Promise.resolve()
          );
        }
        multiSign(...t) {
          return Promise.reject(
            "The current wallet doesn't support multiSign."
          );
        }
        switchChain(t) {
          return Promise.reject(
            "The current wallet doesn't support switch chain."
          );
        }
      }
      function u() {
        return (
          "undefined" != typeof window &&
          "undefined" != typeof document &&
          "undefined" != typeof navigator
        );
      }
      function c() {
        return (
          "undefined" != typeof navigator &&
          navigator.userAgent.match(
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i
          )
        );
      }
      class d extends Error {
        constructor(t, e) {
          super(t), (this.error = e);
        }
      }
      class h extends d {
        constructor() {
          super(...arguments),
            (this.name = "WalletNotFoundError"),
            (this.message = "The wallet is not found.");
        }
      }
      class p extends d {
        constructor() {
          super(...arguments),
            (this.name = "WalletDisconnectedError"),
            (this.message =
              "The wallet is disconnected. Please connect first.");
        }
      }
      class f extends d {
        constructor() {
          super(...arguments), (this.name = "WalletConnectionError");
        }
      }
      class m extends d {
        constructor() {
          super(...arguments), (this.name = "WalletSignMessageError");
        }
      }
      class y extends d {
        constructor() {
          super(...arguments), (this.name = "WalletSignTransactionError");
        }
      }
      class v extends d {
        constructor() {
          super(...arguments), (this.name = "WalletSwitchChainError");
        }
      }
      class g extends d {
        constructor() {
          super(...arguments), (this.name = "WalletGetNetworkError");
        }
      }
      function b() {
        return !!(window.tron && window.tron.isTronLink);
      }
      function w() {
        return !!(b() || window.tronLink || window.tronWeb);
      }
      var x = function (t, e, n, r) {
        return new (n || (n = Promise))(function (i, s) {
          function o(t) {
            try {
              l(r.next(t));
            } catch (t) {
              s(t);
            }
          }
          function a(t) {
            try {
              l(r.throw(t));
            } catch (t) {
              s(t);
            }
          }
          function l(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value) instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })
                ).then(o, a);
          }
          l((r = r.apply(t, e || [])).next());
        });
      };
      let A = {
        "0x2b6653dc": r.Mainnet,
        "0x94a9059e": r.Shasta,
        "0xcd8690dc": r.Nile,
      };
      class P extends l {
        constructor(t = {}) {
          super(),
            (this.name = "TronLink"),
            (this.url = "https://www.tronlink.org/"),
            (this.icon =
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABdCAYAAADHcWrDAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABdoAMABAAAAAEAAABdAAAAAMkTBfIAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Chle4QcAABZhSURBVHgB7V0JlBTVuf6runtWllkA2QeYQQRBZHNFxZjw4jFqMEFxCWIS1yOaTeJ76nk5Lyc5CUZNfCoa0BgUxRh3QD2CJs8lELaIgOCw78sszN4z0131vu/W1NDTfbtneqa7Zx5v/nN6prrq1q2q77//ev9bbUgcNHjm/sya7PIiIxA43TCNUbYEcw3bsOLo4v98U9sWAxSwbbvYI7LDCDZ+dezl847G82BGWxrnzVl/nmF5bhCxviG2FBoen0+Ep9ptOf0UbOPAZlsNhOCYmOYawzaXirfynZLnpla19sAxQc+5ac14jyf9IbHsqw1vute2GoF78P8x2Bo4DVMME2OQqAQDW8W2flv64oQXMCijjsiooOfP3jAXvf0SHfa2A/XsUnXc/ScGAgAfqgfgB18zGqvvKVk69ZCudSTot63z5fvNRw0z7W7bCpB9uvO698VAwPBmAraGzXbQuq5sycSt4U3NljtsA4D/wfBk3I2TugFvCU6bv9mBOigJ71jTY7zd++Z1heEntgA976b1P8YIv9MO+NGuW52EgxXPdzsIlexJK/Ra5uK+d23pEXpuM+h9blo30TS9/6WMZTfgoRi1e5uD1/BmXGBV1j0Y2okD+i9smGDjV2L6smF9Q493b3cQATXiTc/c3BvXjXO7UqD32bn2Itv0TlcN3CPd/xODAAax4UnP8pjmvW6HCnTbNm+B4sd2tx53gUnkfw5mW6wZUOED2K+ZM2djDoLLy+wgAp9uSg4CarRn5Ikpl/ICpinWGfBvBnXr8uTg3dwrIlfkbS5yQLdkPNxEBEndqqUZoGRsqCDTHK1At2yZZnd7LMmAuUWfDsZ236LLV6SbGPXZ3aO8BT7J/OLx98iBSre79UoyUW7RN3Jh/O4ERy2OdH9JNgLdoCcbYU3/3aBrQEn2rm7Qk42wpn+vZl/cuzgTUtvgJMo8piEesNLE/8gZkri7PiVP6DDojUFb5s0YIIPz02TDzhr58oBf9hyrl9KqgGIEZq/ABEOY2UEFQTcjMIw6DHoAoO891iAPfHeg3HxpH4a6cryyUXYfrZdNe+tk055aMKJO9h5vUIyog0ScZASYQGackuM5+kN1GPR0nykrN1XIobIGGZiXpgDt19sn/Jx7ujNhgqhXjlU4jPhiby0YUdfEiHopg0TUNbKYxJUIgwmhU5o6DDo0hhw90Sjvb6yQWy7rqwWLbfrn+NTn/FEnGcHzdh7xyxeQCDKDqmlficOI+iZGeHGyxwNGnELi0GHQiTIBeWNNucz5Wl81YrXIh+3kOQNyfeozdXRPdTQIkThWEZAdh/1QTY5EbD9YB0Y0SFl1QBpOEUYkBPQ0WMm1xTVCgM4YnBkGb9u/0uC6jLhojMMI2gxKxI4j9UoaaCO2HfTLfjCinIwIOKrJC2ng+WRmV6eEgE59XFEblHfWnugQ6DqwCOYgeEb8XHLmSUYcLm+U4kNQTfsc1bTdZURNQBq7OCMSAjrB8gGcd9adkHuv7C9p3uQONzJiSJ809fnaWb0Ur+i6HgEjviIjqJrwISMOQCJO1ASFxykFtA+dLREJBX0zRt16+OqusdSN3GTtI9NdRlzWxAiqHkrEV4coDScl4kCpwwiqrs5gRMJAp7Ptr7fkzdXlnQK6jpmUuIK+aerzjfG9VRN6RXRvt0MiNkMayAxKBxlBFekywrURVJ2JpsSBjjvjQ77/rwp5YOZA6ZWF6u02Ui2YRXvQI9OUcUOz4O/7hA+dDEr3GTL8tHT1+eYElxGWHCxrVOqIqsllxEEyoi4owSaJSBQjEgo6b2oXItGPv6ySKybltBmzrHRTRgCIW5/ardTBqEEZws+4giwZOzRTRg7IkP5wL6lCkkEM8Hh9fi6f6DDCj8iZo9+RCETWYAYN90FISWWtJXRvGcSpOAI6Kh6JMPJnr38LtV9XCSt0E0AM82dNzZdn7x4ed29MFcx5fJd8AqZRaphS4P/cHl6lr88AI84a1sSIgRlyGgIuPnSqiM9GV5UGevM+RyJcRlTVtcIIE+PbDmzLrKufmHDQLSQb83p65ONfj1E+d7yAlFQG1IhnhEsJIDGNQBEPYMNlRB4YMRT6mnHBuIJMSESWnE5G9PaqDGe8121ve6pGMmIbYhSqJTKj+FC9shvVfqgm4KEkwusTjxHcluVPAui8eY6IBbcPk9lIgLWHqv2WzF24R175pEwyAbxuLIczgrqajCjomw5GQCKgms6EaiqCako1I2pw/4yiGSwqGwGvrvhIQI6W1W3zVPsTP9IJcn2jJV+Ht/D6/SO1gG3YVQs9nS49M6MbW7p7//7Cfnnm/WNCndsWnUkpozRQ31IiyIj8ng4jRkMixg/LBCOypLB/uvRFQi6FmkmofpB53bNkU81ZCTWk7qhmWmDNV9XK8FDkw6myNiB3PH1YnoI09I7i5VCX/27OUKXP579xWHkzrYFEMU5TjU7KBrOYzOesxv2QERlppmLEMKim0UOomhwb4TLi5Jnhd92x7z3hmcE58BTu8FO7J544KhkF0g386dX9Iy5wwRk9Zd6f98u1D++QxfeOUAYxohF2sJ8H4X7m9fDIgy8dVCOY0WQ8xBks4Mze1GnAXUqR72c+57Pt1WofJalPL68M65cuY5ptRCa8mQxIROIgYgxA8mSNv/16zCSMSnQtI7unSN14cb4Ku9XVmv4QuEr4vwveOyb/RKLskrG91IgObRO6PWVkDxXgrNxUqRJcBLK9xDO5GIv3QBdUuaHYWQOjR4O4DhH1uxsqlD1Z+kmpLENqYyPUISNbgkYpdg18vPeAnFDlF/vqFySOjWF34IN6oCXfsLtGzgVo4fStybny6NtHZO2OGvnub4vlT/eMgM7NCm/W/H3WRfmSA0N5x4LdSPMGlSvZfLCDG2QEmcC53VCJ4MQLwf5kK5aGolEmRKavKxFQTXRfx8FYD4N/TyPeVkraSOeD0J3KyfLCqDpJqdCbooH7eGu1mk8liO/CRTx7eJbyPkLbhW7TE+Fs1EdfVCKtG0xa1Mpr8v5NVyIwgCgRjvQG1dQjJXTF+hNKIuhlrYB0fL67Vo6CUXQTacTJpFAKBqVy0z7/gqSBzotRJxPQG6BiqDdDicfq4aFQfGncqG64TcOrM77uuUxqXQp1xKiXWcVkpQvc64X+1zICnKjCve/GPDGdBz4D1dJfwAgOJOb/jyH2AAvBNKuy5EjjgoQHR6E3yW26fq/8rKg5vA49fhj5jqn/sVUxhqLt6sxHbhki35sW28ffe7xebvnv3bIGxpC+fFciekkW/gSwBFelC8Ct7Kx0yc+2vyrq0zgh6XfLi76xpkyLyQAktqZh1DYEII8gjtpGyOY9i/bJH5bFfscBgyAyczqSVlRjXYkoxbQRVDE0upRkDqhD5Y3Wxi0NWFWXZKK//dEXVcpF011qxnm5CI8puA7xZvn1wSUH5BdLD6oR4x4L/0+jRpfzuql5qsaGOrerEp/JVYVJB50gMn+98vMKLR4XYy50BCJERpIu4RTlnTz85mH50bP7xI8INxoxqn3mzuFyx7/1k3qkHyjaXZ2SDjoBIJdfX3NCCwjz7tPP7q1m+kPB4jm0/os+OC63Prkb6dTo7yigND2C6PX+7wxU03Ih/AvtstO3OXd74ABNagqIAcVqGDzWuOhoxrm5Su/pBil14mv/KJcbH9sZVUWxT6WSEL3+5nuD8c3Jv+iu1Vn7mI+aMDw77aNFRU44kOwbobpguQTdKR1NKspWkxVumBzehsB/iGiUaQNOksSiuy4/TZ68bZhyUaP1F+v8ZByjoZ8Fu/PKzwp9PTP6pgZ0PgiNyNvIxeiAoHr41uQcVToR7aHpFq7fheh1frHyfaO14/7rEb0+P3eE9M72KJc1VttkHqN9YZr7tun95KnbhkpOthfPUJ4a9cIHY1qAgcK/ELXp6MopOSrjGMsQZiDA4kzNTIx4zi7Fom9i2m3pT4tkENxSTkanmmhX6AqzovnR7w9FROvEIbyPlOh0XggaRvnTb6L8TkejBmXKlJHZrY5MRraMRG94dGdUdeX2z1KQV+eNFE7zcc4zVeTk82351U1D5D+vGxSRt08Z6HxgqpH3EBozoxdO1Ps0qIzkWiNKDb2ZHzyxW174W0nM5pzY/uvPi+QcJN0o6skmqk/maR7/YYHcc8Vp2sulFHTqdaqHT7c5eezwO6LryMlmzgC1RuyLKYZ7Fu2Vx9sSvd5XKNMxm5XM6JUuIeOGZ+8eETONkVLQCSSDIFb46oj1igyW3LSArk3oProBzI2fjF5Dj7bc7tvLJ4t/1BS9wptoXZ5ant/aNw6AfjleWfLjQqF9ikUpB50qhu4fc9U6mnFenvK5dcd0+6iWqG6c6HWvmp/VteM+Fb3ekfjolREzC5heva9ILm4qctXdgw+5GFLKQWdagEU8qwC8jliZywcITQvo2oXuC41ef9ha9IoHf+SWofLzaxITvdJOcPLltXlFmA/Aiv8Y9MHnlf4nH14bSDnovCeC9AZqHnWUA99alxbQtQ3fF0/0+tC1jF6HqC7obbSHaB+oDukhcYIlFj31fqnM/v3O4KaqCqtTQGda4B9IC+yKkhb4NtMCcA3bA4WKXjGz1LbotZ88cWuBpON+dEFbLBAJOHX3Sz8plIEo+YtGfIZf//UQykkOqGnowYMHp1698Oaoh7nkcfl6feZxCtICY4ZkxA2E++BMlLFkm3OvDMhiEWe1nsf8bFujV4JYB8A5yfInRL0s+YtGarnn8/sV6PS2zKYyn04Z6bxJJy1QrgWWAdAVraQFoj2ou58TB8WH69scvb78E0avaTENMUMIJq7mwv9+8raCmFUBrPK68+k98uR7RyUd90KV6lKngU6PgykB1v/p6Kopuarcug2xku50tY8zN270ujxKss09+YIzGL0WoSAoUxtEudVjD84cJL+ZPaR5QsI9P/Q/C5xYCPvS/5RKFgEPPYjtTgOdN8LREC0twDK4yYWtpwXCnifiqxu9fv+JXfLi31uPXumFsGQkNHqloeVInQ+w779GvXAu4jruDnpmsx7ZKcs3nIgqCZ0GOm+SPvsK3JwuSmSJHA1qsCNDvQkJN3qdu7AN0SuqvJCCFa7c4H1RL9OoL7hjmNyO2alYxBLqmfN3IOKuUiOcbWkDLDCNwVPz+xOSVeEV6+bcY6zUYmn0+SizY0F+OLHIk6UM/qb1o+HH4/nOGham3eArKwAuHtOrhZ4N7Ss7w6Nsyh6UVVA9PYew/upzckObRGzTcDMJxwXIzL0Q5AA+XFiWhxqfsQXZMu3MHhWXFHj+GN30RnSbnB0cSfTZv960OCv0KqxxoR/8+uoyNbMUeqw92/SaKF2MXjmpMv/moWrGXtcXo9enMbqpLmLV4fDc5Sg6cqcUaYwL+qE4VdVEOuXaHFDMKUFo0579sNzT6aC7aQGOeBZxhtOM83OjlnCEt23Ldw54ejYLMffKQih6IdHWR9Hnbw1wLiT+++YqFLoOUhVqnGQ/DRIa6q2491UDdUWKfEq3RYr+My2wv7RePmRAc2FexFWnIS1QAD17EMWdFNVEEHtxotcyrKgLyMK7hketHG7tekWos59/sxPZttbWPd6phtS9CVqbaGkBBh80aizBSzQR+FXQ8df+bgfK4mLPvUa7dnvWPHUJ0NPgHdDiR3twTm6kwedOPOwo8+DcKyqHv8PoFSvoUkFdAnQaOOr0d2GQdHQOpvFYrB9vfkTXl26fil6xOIvuXmtzr7rz27rPrbnsEqDzppFzkrf+iWoBTcaPoHBdKmdmkkWMXlmLfj3cvk9bmfSO5x6YNuDrtT74vFp+/86RhpWfHg52uiF1H8AH1DeixGIz0gKsUw+nq87JkceXH1WjXecZhLdvz3d6UiVNr8K6sOkdNPH0Q4BRJKqmJJne4Mo6Lv51Vl6jODbQ2JhvNXYd0AkklzK+vbZcC/oYrHyYWJiFUVitfO14wIinLdO8g/tEBmrhfbC6gKunnYW8dbJlP94xAPeR+yo0b93web0ImiDOSDV5YZ26zCvkONKWr6uQ+64eEFFzTtfy24gK6ROzXTKIGQdmBHXxAq/H1Rer8L4yBTBG8CHU17MqgbaGdsl9rQnzPfxEI6TA7MSsT492hTj2M0fCBa+ri/XVApdPzFEvZNOo/TiuEr0pLUY2vBkuzdERl1Y+gBJuvumDo5q5GQ4Aup60Owz/CX4Msr3Z9bZpW57PDDe7HqN1qg65aQHd9bgs/UKkYNtaLaDrI9Y+JqZyUfrGFEA48VhpVaP0RF6GAKtJidgAt+jC4LsQxa7Y8/y0euSBrA34obsWDTrzC0cOly4yJ60jLiKI41l1XUTdRwlicoqjPZyqMaqZNmhlJIefdvI7QbfNYiTdbNMTSNuCtzOUqrdSnmzSaVvU3fvwNowPN+urBS4d1wtvxEhXa3kSfZMczXyPgM474gt4KvB+ML5Ftb1kiPUZzzWPvTzuKK7yqfvzju3tMLHnOZlHXZ/Ut1wimYyiUI50ZgN1pF5ji9HeLsjBRfzsTq0R9Kxi30qO8GuCLzjpdt3lUr+P1QKMDLmCTkcqLRDDO9Cd09Z9fEWhjo6jOIr5H50U6NqH7jM8aYDXXnX8pQlQL02g9/L1WQZObFQHQ1t30jYl+DheosDl4jriAl6++YhGN5FEQJkP1xEnM9qXhsAotwKWYdiPuf2qkb7n+eF+6PmH8LvJSPi2S4Dc/hL2n7r9LdQ86gqB6KJ1tFpAd6N0+aKpF/rk7Zk5xA8G4rzAKyWLJ3/kXrPZTJf8efJysRueMXyxK5XcE5P9n17MBqQFGIjoiNUCPTJQkJSgwa4CI2Q7+WJmHTEvE7dqwS/x2kH/Pgn65oX22Qw6d5p1mfPwc46r+MuxnU18QL5F4x0kwXQ0Fq+QmjAC1QIJUjHkXTaYyFdh6ehweUN8oKu3uliVhhW8uWzJ+AOhfbYA/firZ1Y3NFqzwJ0PDS+TTp2rahhKc/4xtBzCvXlOHnCymO/2SgTRXeQLf3RTdzx2HKnn0EXGMa9Jwyn2CSMYuKHkxSl/C2/bAnQerHp5cgl+6niGHax7Tsitpl8KDz8xFd8Z9fGF93x5so4un9Rb5Uno6nWU2AdfH5KVHjnSObdZjmBNBZWxLoQGSkvYwS3A8IqSF6GyNRQBOtuULTmvsnTxxB9YVuB6VG1sxW9O4zc1wb24lZrminHsopzRH482lTccc6eszEpEWoDLbmhEdbEPk1p8U5NTxqF5AAxORyUbVWI1PNbQEJhW9uI5n2laql36zE5T6/IXJi7Nu3H1CsO0r4OmmY2M5CT8oGmmw3IMjURZsWh3h/3pGbas3OKXE5hJy4lMs8s1WESwbAMOejwdUoaIVaR/nt6JKK1GoVAQDEF61lG4+Ks2GPRgQbId3InZl7cxQBeWLJ70ZYzHUYdigs4WHPX4txA9L8qfs34UfM7J2B6NFVmDxLB6i92q0KkLtfcPhX0vSqq3H6geC/98RHg/VwL0MW8e/hjvVy/Xim34CVG+21h+ePawjAk4HDG1byFN4q+r/dQH74aaDGOtFvnw4wC+2BJzo8db/XnJc1Njr7EMua7DuJAdXXXTrq8fI2lpUyPvz8LSjjXLjCEXHIw8Ft8eu65sqmTkjok4K+AvNnyZH0Xsb+eO/wWrg46Do/7gYAAAAABJRU5ErkJggg=="),
            (this._readyState = u() ? s.Loading : s.NotFound),
            (this._state = o.Loading),
            (this._supportNewTronProtocol = !1),
            (this._tronLinkMessageHandler = (t) => {
              var e, n, r, i, s;
              let a =
                null === (e = t.data) || void 0 === e ? void 0 : e.message;
              if (a) {
                if ("accountsChanged" === a.action)
                  setTimeout(() => {
                    var t;
                    let e = this.address || "";
                    if (
                      null === (t = this._wallet) || void 0 === t
                        ? void 0
                        : t.ready
                    ) {
                      let t = a.data.address;
                      this.setAddress(t), this.setState(o.Connected);
                    } else this.setAddress(null), this.setState(o.Disconnect);
                    this.emit("accountsChanged", this.address || "", e),
                      !e && this.address
                        ? this.emit("connect", this.address)
                        : e && !this.address && this.emit("disconnect");
                  }, 200);
                else if ("setNode" === a.action)
                  this.emit("chainChanged", {
                    chainId:
                      (null ===
                        (r =
                          null === (n = a.data) || void 0 === n
                            ? void 0
                            : n.node) || void 0 === r
                        ? void 0
                        : r.chainId) || "",
                  });
                else if ("connect" === a.action) {
                  let t =
                    (null ===
                      (s =
                        null === (i = this._wallet.tronWeb) || void 0 === i
                          ? void 0
                          : i.defaultAddress) || void 0 === s
                      ? void 0
                      : s.base58) || "";
                  this.setAddress(t),
                    this.setState(o.Connected),
                    this.emit("connect", t);
                } else
                  "disconnect" === a.action &&
                    (this.setAddress(null),
                    this.setState(o.Disconnect),
                    this.emit("disconnect"));
              }
            }),
            (this._onChainChanged = (t) => {
              this.emit("chainChanged", t);
            }),
            (this._onAccountsChanged = () => {
              var t, e, n;
              let r = this.address || "",
                i =
                  ((null === (t = this._wallet) || void 0 === t
                    ? void 0
                    : t.tronWeb) &&
                    (null ===
                      (n =
                        null === (e = this._wallet) || void 0 === e
                          ? void 0
                          : e.tronWeb.defaultAddress) || void 0 === n
                      ? void 0
                      : n.base58)) ||
                  "";
              i
                ? (this.setAddress(i), this.setState(o.Connected))
                : (this.setAddress(null), this.setState(o.Disconnect)),
                this.emit("accountsChanged", this.address || "", r),
                !r && this.address
                  ? this.emit("connect", this.address)
                  : r && !this.address && this.emit("disconnect");
            }),
            (this._checkPromise = null),
            (this._updateWallet = () => {
              var t, e, n, r, i, s, a, l;
              let u = this.state,
                d = this.address;
              c()
                ? (window.tronLink
                    ? (this._wallet = window.tronLink)
                    : (this._wallet = {
                        ready: !!(null === (t = window.tronWeb) || void 0 === t
                          ? void 0
                          : t.defaultAddress),
                        tronWeb: window.tronWeb,
                        request: () => Promise.resolve(!0),
                      }),
                  (u = (d =
                    (null ===
                      (n =
                        null === (e = this._wallet.tronWeb) || void 0 === e
                          ? void 0
                          : e.defaultAddress) || void 0 === n
                      ? void 0
                      : n.base58) || null)
                    ? o.Connected
                    : o.Disconnect))
                : window.tron && window.tron.isTronLink
                ? ((this._supportNewTronProtocol = !0),
                  (this._wallet = window.tron),
                  this._listenTronEvent(),
                  (u = (d =
                    (this._wallet.tronWeb &&
                      (null ===
                        (i =
                          null === (r = this._wallet.tronWeb) || void 0 === r
                            ? void 0
                            : r.defaultAddress) || void 0 === i
                        ? void 0
                        : i.base58)) ||
                    null)
                    ? o.Connected
                    : o.Disconnect))
                : window.tronLink
                ? ((this._wallet = window.tronLink),
                  this._listenTronLinkEvent(),
                  (d =
                    (null ===
                      (a =
                        null === (s = this._wallet.tronWeb) || void 0 === s
                          ? void 0
                          : s.defaultAddress) || void 0 === a
                      ? void 0
                      : a.base58) || null),
                  (u = this._wallet.ready ? o.Connected : o.Disconnect))
                : window.tronWeb
                ? ((this._wallet = {
                    ready: window.tronWeb.ready,
                    tronWeb: window.tronWeb,
                    request: () => Promise.resolve(!0),
                  }),
                  (d =
                    (null === (l = this._wallet.tronWeb.defaultAddress) ||
                    void 0 === l
                      ? void 0
                      : l.base58) || null),
                  (u = this._wallet.ready ? o.Connected : o.Disconnect))
                : ((this._wallet = null), (d = null), (u = o.NotFound)),
                c() && u === o.Disconnect && this.checkForWalletReadyForApp(),
                this.setAddress(d),
                this.setState(u);
            }),
            (this.checkReadyInterval = null);
          let {
            checkTimeout: e = 3e4,
            dappIcon: n = "",
            dappName: r = "",
            openUrlWhenWalletNotFound: i = !0,
            openTronLinkAppOnMobile: a = !0,
          } = t;
          if ("number" != typeof e)
            throw Error(
              "[TronLinkAdapter] config.checkTimeout should be a number"
            );
          if (
            ((this.config = {
              checkTimeout: e,
              openTronLinkAppOnMobile: a,
              openUrlWhenWalletNotFound: i,
              dappIcon: n,
              dappName: r,
            }),
            (this._connecting = !1),
            (this._wallet = null),
            (this._address = null),
            !u())
          ) {
            (this._readyState = s.NotFound), this.setState(o.NotFound);
            return;
          }
          b() || (c() && (window.tronLink || window.tronWeb))
            ? ((this._readyState = s.Found), this._updateWallet())
            : this._checkWallet().then(() => {
                this.connected && this.emit("connect", this.address || "");
              });
        }
        get address() {
          return this._address;
        }
        get state() {
          return this._state;
        }
        get readyState() {
          return this._readyState;
        }
        get connecting() {
          return this._connecting;
        }
        network() {
          return x(this, void 0, void 0, function* () {
            var t;
            try {
              if ((yield this._checkWallet(), this.state !== o.Connected))
                throw new p();
              let e =
                (null === (t = this._wallet) || void 0 === t
                  ? void 0
                  : t.tronWeb) || window.tronWeb;
              if (!e) throw new p();
              try {
                return yield (function (t) {
                  return x(this, void 0, void 0, function* () {
                    var e, n, i;
                    let { blockID: s = "" } = yield t.trx.getBlockByNumber(0),
                      o = `0x${s.slice(-8)}`;
                    return {
                      networkType: A[o] || r.Unknown,
                      chainId: o,
                      fullNode:
                        (null === (e = t.fullNode) || void 0 === e
                          ? void 0
                          : e.host) || "",
                      solidityNode:
                        (null === (n = t.solidityNode) || void 0 === n
                          ? void 0
                          : n.host) || "",
                      eventServer:
                        (null === (i = t.eventServer) || void 0 === i
                          ? void 0
                          : i.host) || "",
                    };
                  });
                })(e);
              } catch (t) {
                throw new g(null == t ? void 0 : t.message, t);
              }
            } catch (t) {
              throw (this.emit("error", t), t);
            }
          });
        }
        connect() {
          return x(this, void 0, void 0, function* () {
            var t, e;
            try {
              if (
                (this.checkIfOpenTronLink(), this.connected || this.connecting)
              )
                return;
              if ((yield this._checkWallet(), this.state === o.NotFound))
                throw (
                  (!1 !== this.config.openUrlWhenWalletNotFound &&
                    u() &&
                    window.open(this.url, "_blank"),
                  new h())
                );
              if (!this._wallet) return;
              if (((this._connecting = !0), this._supportNewTronProtocol)) {
                let t = this._wallet;
                try {
                  let e = (yield t.request({
                    method: "eth_requestAccounts",
                  }))[0];
                  this.setAddress(e),
                    this.setState(o.Connected),
                    this._listenTronEvent(),
                    this._wallet.tronWeb ||
                      (yield (function (t) {
                        var e, n, r, i;
                        return (
                          (e = this),
                          (n = void 0),
                          (r = void 0),
                          (i = function* () {
                            return new Promise((e, n) => {
                              let r = setInterval(() => {
                                  t.tronWeb &&
                                    (clearInterval(r), clearTimeout(i), e());
                                }, 50),
                                i = setTimeout(() => {
                                  clearInterval(r),
                                    n("`window.tron.tronweb` is not ready.");
                                }, 2e3);
                            });
                          }),
                          new (r || (r = Promise))(function (t, s) {
                            function o(t) {
                              try {
                                l(i.next(t));
                              } catch (t) {
                                s(t);
                              }
                            }
                            function a(t) {
                              try {
                                l(i.throw(t));
                              } catch (t) {
                                s(t);
                              }
                            }
                            function l(e) {
                              var n;
                              e.done
                                ? t(e.value)
                                : ((n = e.value) instanceof r
                                    ? n
                                    : new r(function (t) {
                                        t(n);
                                      })
                                  ).then(o, a);
                            }
                            l((i = i.apply(e, n || [])).next());
                          })
                        );
                      })(this._wallet));
                } catch (e) {
                  let t =
                    (null == e ? void 0 : e.message) ||
                    e ||
                    "Connect TronLink wallet failed.";
                  throw (
                    (-32002 === e.code &&
                      (t =
                        "The same DApp has already initiated a request to connect to TronLink wallet, and the pop-up window has not been closed."),
                    4001 === e.code && (t = "The user rejected connection."),
                    new f(t, e))
                  );
                }
              } else if (window.tronLink) {
                let e = this._wallet;
                try {
                  let t = yield e.request({ method: "tron_requestAccounts" });
                  if (!t)
                    throw new f(
                      "TronLink wallet is locked or no wallet account is avaliable."
                    );
                  if (4e3 === t.code)
                    throw new f(
                      "The same DApp has already initiated a request to connect to TronLink wallet, and the pop-up window has not been closed."
                    );
                  if (4001 === t.code)
                    throw new f("The user rejected connection.");
                } catch (t) {
                  throw new f(null == t ? void 0 : t.message, t);
                }
                let n =
                  (null === (t = e.tronWeb.defaultAddress) || void 0 === t
                    ? void 0
                    : t.base58) || "";
                this.setAddress(n),
                  this.setState(o.Connected),
                  this._listenTronLinkEvent();
              } else if (window.tronWeb) {
                let t = this._wallet,
                  n =
                    (null === (e = t.tronWeb.defaultAddress) || void 0 === e
                      ? void 0
                      : e.base58) || "";
                this.setAddress(n), this.setState(o.Connected);
              } else throw new f("Cannot connect wallet.");
              this.connected && this.emit("connect", this.address || "");
            } catch (t) {
              throw (this.emit("error", t), t);
            } finally {
              this._connecting = !1;
            }
          });
        }
        disconnect() {
          return x(this, void 0, void 0, function* () {
            this._supportNewTronProtocol
              ? this._stopListenTronEvent()
              : this._stopListenTronLinkEvent(),
              this.state === o.Connected &&
                (this.setAddress(null),
                this.setState(o.Disconnect),
                this.emit("disconnect"));
          });
        }
        signTransaction(t, e) {
          return x(this, void 0, void 0, function* () {
            try {
              let n = yield this.checkAndGetWallet();
              try {
                return yield n.tronWeb.trx.sign(t, e);
              } catch (t) {
                if (t instanceof Error) throw new y(t.message, t);
                throw new y(t, Error(t));
              }
            } catch (t) {
              throw (this.emit("error", t), t);
            }
          });
        }
        multiSign(t, e, n) {
          return x(this, void 0, void 0, function* () {
            try {
              let r = yield this.checkAndGetWallet();
              try {
                return yield r.tronWeb.trx.multiSign(t, e, n);
              } catch (t) {
                if (t instanceof Error) throw new y(t.message, t);
                throw new y(t, Error(t));
              }
            } catch (t) {
              throw (this.emit("error", t), t);
            }
          });
        }
        signMessage(t, e) {
          return x(this, void 0, void 0, function* () {
            try {
              let n = yield this.checkAndGetWallet();
              try {
                return yield n.tronWeb.trx.signMessageV2(t, e);
              } catch (t) {
                if (t instanceof Error) throw new m(t.message, t);
                throw new m(t, Error(t));
              }
            } catch (t) {
              throw (this.emit("error", t), t);
            }
          });
        }
        switchChain(t) {
          return x(this, void 0, void 0, function* () {
            try {
              if ((yield this._checkWallet(), this.state === o.NotFound))
                throw (
                  (!1 !== this.config.openUrlWhenWalletNotFound &&
                    u() &&
                    window.open(this.url, "_blank"),
                  new h())
                );
              if (!this._supportNewTronProtocol)
                throw new v(
                  "Current version of TronLink doesn't support switch chain operation."
                );
              let e = this._wallet;
              try {
                yield e.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: t }],
                });
              } catch (t) {
                throw new v(
                  (null == t ? void 0 : t.message) || t,
                  t instanceof Error ? t : Error(t)
                );
              }
            } catch (t) {
              throw (this.emit("error", t), t);
            }
          });
        }
        checkAndGetWallet() {
          return x(this, void 0, void 0, function* () {
            if (
              (this.checkIfOpenTronLink(),
              yield this._checkWallet(),
              this.state !== o.Connected)
            )
              throw new p();
            let t = this._wallet;
            if (!t || !t.tronWeb) throw new p();
            return t;
          });
        }
        _listenTronLinkEvent() {
          this._stopListenTronLinkEvent(),
            window.addEventListener("message", this._tronLinkMessageHandler);
        }
        _stopListenTronLinkEvent() {
          window.removeEventListener("message", this._tronLinkMessageHandler);
        }
        checkIfOpenTronLink() {
          let { dappName: t = "", dappIcon: e = "" } = this.config;
          if (
            !1 !== this.config.openTronLinkAppOnMobile &&
            (function (
              { dappIcon: t, dappName: e } = { dappIcon: "", dappName: "" }
            ) {
              if (!w() && c() && !(u() && void 0 !== window.iTron)) {
                let n = "",
                  r = "";
                try {
                  n = document.title;
                  let t = document.querySelector('link[rel*="icon"]');
                  t &&
                    (r = new URL(
                      t.getAttribute("href") || "",
                      location.href
                    ).toString());
                } catch (t) {}
                let {
                    origin: i,
                    pathname: s,
                    search: o,
                    hash: a,
                  } = window.location,
                  l = i + s + o + (a.includes("?") ? a : `${a}?_=1`),
                  u = {
                    action: "open",
                    actionId: Date.now() + "",
                    callbackUrl: "http://someurl.com",
                    dappIcon: t || r,
                    dappName: e || n,
                    url: l,
                    protocol: "TronLink",
                    version: "1.0",
                    chainId: "0x2b6653dc",
                  };
                return (
                  (window.location.href = `tronlinkoutside://pull.activity?param=${encodeURIComponent(
                    JSON.stringify(u)
                  )}`),
                  !0
                );
              }
              return !1;
            })({ dappIcon: e, dappName: t })
          )
            throw new h();
        }
        _listenTronEvent() {
          this._stopListenTronEvent(), this._stopListenTronLinkEvent();
          let t = this._wallet;
          t.on("chainChanged", this._onChainChanged),
            t.on("accountsChanged", this._onAccountsChanged);
        }
        _stopListenTronEvent() {
          let t = this._wallet;
          t.removeListener("chainChanged", this._onChainChanged),
            t.removeListener("accountsChanged", this._onAccountsChanged);
        }
        _checkWallet() {
          if (this.readyState === s.Found) return Promise.resolve(!0);
          if (this._checkPromise) return this._checkPromise;
          let t = Math.floor(20),
            e = Math.floor(this.config.checkTimeout / 100),
            n = 0,
            r;
          return (
            (this._checkPromise = new Promise((i) => {
              let o = () => {
                let o = ++n < t && !c() ? b() : w();
                (o || n > e) &&
                  (r && clearInterval(r),
                  (this._readyState = o ? s.Found : s.NotFound),
                  this._updateWallet(),
                  this.emit("readyStateChanged", this.readyState),
                  i(o));
              };
              (r = setInterval(o, 100)), o();
            })),
            this._checkPromise
          );
        }
        checkForWalletReadyForApp() {
          if (this.checkReadyInterval) return;
          let t = 0,
            e = Math.floor(this.config.checkTimeout / 200);
          this.checkReadyInterval = setInterval(() => {
            var n, r;
            (
              window.tronLink
                ? null === (n = window.tronLink.tronWeb) || void 0 === n
                  ? void 0
                  : n.defaultAddress
                : null === (r = window.tronWeb) || void 0 === r
                ? void 0
                : r.defaultAddress
            )
              ? (this.checkReadyInterval &&
                  clearInterval(this.checkReadyInterval),
                (this.checkReadyInterval = null),
                this._updateWallet(),
                this.emit("connect", this.address || ""))
              : t > e
              ? (this.checkReadyInterval &&
                  clearInterval(this.checkReadyInterval),
                (this.checkReadyInterval = null))
              : t++;
          }, 200);
        }
        setAddress(t) {
          this._address = t;
        }
        setState(t) {
          t !== this.state && ((this._state = t), this.emit("stateChanged", t));
        }
      }
    },
    4342: (t, e, n) => {
      "use strict";
      n.d(e, { A: () => r });
      let r = (function (t) {
        if (t.length >= 255) throw TypeError("Alphabet too long");
        let e = new Uint8Array(256);
        for (let t = 0; t < e.length; t++) e[t] = 255;
        for (let n = 0; n < t.length; n++) {
          let r = t.charAt(n),
            i = r.charCodeAt(0);
          if (255 !== e[i]) throw TypeError(r + " is ambiguous");
          e[i] = n;
        }
        let n = t.length,
          r = t.charAt(0),
          i = Math.log(n) / Math.log(256),
          s = Math.log(256) / Math.log(n);
        function o(t) {
          if ("string" != typeof t) throw TypeError("Expected String");
          if (0 === t.length) return new Uint8Array();
          let s = 0,
            o = 0,
            a = 0;
          for (; t[s] === r; ) o++, s++;
          let l = ((t.length - s) * i + 1) >>> 0,
            u = new Uint8Array(l);
          for (; s < t.length; ) {
            let r = t.charCodeAt(s);
            if (r > 255) return;
            let i = e[r];
            if (255 === i) return;
            let o = 0;
            for (let t = l - 1; (0 !== i || o < a) && -1 !== t; t--, o++)
              (i += (n * u[t]) >>> 0),
                (u[t] = i % 256 >>> 0),
                (i = (i / 256) >>> 0);
            if (0 !== i) throw Error("Non-zero carry");
            (a = o), s++;
          }
          let c = l - a;
          for (; c !== l && 0 === u[c]; ) c++;
          let d = new Uint8Array(o + (l - c)),
            h = o;
          for (; c !== l; ) d[h++] = u[c++];
          return d;
        }
        return {
          encode: function (e) {
            if (
              (e instanceof Uint8Array ||
                (ArrayBuffer.isView(e)
                  ? (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength))
                  : Array.isArray(e) && (e = Uint8Array.from(e))),
              !(e instanceof Uint8Array))
            )
              throw TypeError("Expected Uint8Array");
            if (0 === e.length) return "";
            let i = 0,
              o = 0,
              a = 0,
              l = e.length;
            for (; a !== l && 0 === e[a]; ) a++, i++;
            let u = ((l - a) * s + 1) >>> 0,
              c = new Uint8Array(u);
            for (; a !== l; ) {
              let t = e[a],
                r = 0;
              for (let e = u - 1; (0 !== t || r < o) && -1 !== e; e--, r++)
                (t += (256 * c[e]) >>> 0),
                  (c[e] = t % n >>> 0),
                  (t = (t / n) >>> 0);
              if (0 !== t) throw Error("Non-zero carry");
              (o = r), a++;
            }
            let d = u - o;
            for (; d !== u && 0 === c[d]; ) d++;
            let h = r.repeat(i);
            for (; d < u; ++d) h += t.charAt(c[d]);
            return h;
          },
          decodeUnsafe: o,
          decode: function (t) {
            let e = o(t);
            if (e) return e;
            throw Error("Non-base" + n + " character");
          },
        };
      })("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
    },
    2386: (t, e, n) => {
      "use strict";
      n.d(e, { f: () => tE });
      var r = n(3033),
        i = n(7331),
        s = n(104),
        o = n(4668);
      let a = { current: !1 };
      var l = n(1533);
      let u = (t, e, n) =>
        (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
      function c(t, e, n, r) {
        if (t === e && n === r) return l.l;
        let i = (e) =>
          (function (t, e, n, r, i) {
            let s, o;
            let a = 0;
            do (s = u((o = e + (n - e) / 2), r, i) - t) > 0 ? (n = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, n);
        return (t) => (0 === t || 1 === t ? t : u(i(t), e, r));
      }
      var d = n(3041),
        h = n(2946);
      let p = c(0.33, 1.53, 0.69, 0.99),
        f = (0, h.G)(p),
        m = (0, d.V)(f),
        y = (t) =>
          (t *= 2) < 1 ? 0.5 * f(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
      var v = n(4868),
        g = n(4721),
        b = n(4582),
        w = n(4835),
        x = n(8104),
        A = n(615);
      let P = (t, e) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (A.f.test(t) || "0" === t) &&
              !t.startsWith("url("))
          ),
        S = (t) => null !== t;
      function T(t, { repeat: e, repeatType: n = "loop" }, r) {
        let i = t.filter(S),
          s = e && "loop" !== n && e % 2 == 1 ? 0 : i.length - 1;
        return s && void 0 !== r ? r : i[s];
      }
      class E {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: n = "keyframes",
          repeat: r = 0,
          repeatDelay: i = 0,
          repeatType: s = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = b.k.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: n,
              repeat: r,
              repeatDelay: i,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, w.q)(),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = b.k.now()), (this.hasAttemptedResolve = !0);
          let {
            name: n,
            type: i,
            velocity: s,
            delay: o,
            onComplete: l,
            onUpdate: u,
            isGenerator: c,
          } = this.options;
          if (
            !c &&
            !(function (t, e, n, i) {
              let s = t[0];
              if (null === s) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let o = t[t.length - 1],
                a = P(s, e),
                l = P(o, e);
              return (
                (0, x.$)(
                  a === l,
                  `You are trying to animate ${e} from "${s}" to "${o}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${o} via the \`style\` property.`
                ),
                !!a &&
                  !!l &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let n = 0; n < t.length; n++)
                      if (t[n] !== e) return !0;
                  })(t) ||
                    (("spring" === n || (0, r.WH)(n)) && i))
              );
            })(t, n, i, s)
          ) {
            if (a.current || !o) {
              u && u(T(t, this.options, e)),
                l && l(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let d = this.initPlayback(t, e);
          !1 !== d &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...d }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        flatten() {
          (this.options.type = "keyframes"), (this.options.ease = "linear");
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      var k = n(2464),
        C = n(9713);
      function R(t, e, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? t + (e - t) * 6 * n
          : n < 0.5
          ? e
          : n < 2 / 3
          ? t + (e - t) * (2 / 3 - n) * 6
          : t;
      }
      var D = n(5252),
        j = n(3735),
        M = n(2027);
      function O(t, e) {
        return (n) => (n > 0 ? e : t);
      }
      let L = (t, e, n) => {
          let r = t * t,
            i = n * (e * e - r) + r;
          return i < 0 ? 0 : Math.sqrt(i);
        },
        _ = [D.u, j.B, M.V],
        V = (t) => _.find((e) => e.test(t));
      function I(t) {
        let e = V(t);
        if (
          ((0, x.$)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let n = e.parse(t);
        return (
          e === M.V &&
            (n = (function ({ hue: t, saturation: e, lightness: n, alpha: r }) {
              (t /= 360), (n /= 100);
              let i = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let r = n < 0.5 ? n * (1 + e) : n + e - n * e,
                  a = 2 * n - r;
                (i = R(a, r, t + 1 / 3)),
                  (s = R(a, r, t)),
                  (o = R(a, r, t - 1 / 3));
              } else i = s = o = n;
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: r,
              };
            })(n)),
          n
        );
      }
      let F = (t, e) => {
        let n = I(t),
          r = I(e);
        if (!n || !r) return O(t, e);
        let i = { ...n };
        return (t) => (
          (i.red = L(n.red, r.red, t)),
          (i.green = L(n.green, r.green, t)),
          (i.blue = L(n.blue, r.blue, t)),
          (i.alpha = (0, C.k)(n.alpha, r.alpha, t)),
          j.B.transform(i)
        );
      };
      var B = n(1339),
        U = n(7739),
        W = n(568);
      let N = new Set(["none", "hidden"]);
      function G(t, e) {
        return (n) => (0, C.k)(t, e, n);
      }
      function q(t) {
        return "number" == typeof t
          ? G
          : "string" == typeof t
          ? (0, W.p)(t)
            ? O
            : U.y.test(t)
            ? F
            : K
          : Array.isArray(t)
          ? z
          : "object" == typeof t
          ? U.y.test(t)
            ? F
            : H
          : O;
      }
      function z(t, e) {
        let n = [...t],
          r = n.length,
          i = t.map((t, n) => q(t)(t, e[n]));
        return (t) => {
          for (let e = 0; e < r; e++) n[e] = i[e](t);
          return n;
        };
      }
      function H(t, e) {
        let n = { ...t, ...e },
          r = {};
        for (let i in n)
          void 0 !== t[i] && void 0 !== e[i] && (r[i] = q(t[i])(t[i], e[i]));
        return (t) => {
          for (let e in r) n[e] = r[e](t);
          return n;
        };
      }
      let K = (t, e) => {
        let n = A.f.createTransformer(e),
          r = (0, A.V)(t),
          i = (0, A.V)(e);
        return r.indexes.var.length === i.indexes.var.length &&
          r.indexes.color.length === i.indexes.color.length &&
          r.indexes.number.length >= i.indexes.number.length
          ? (N.has(t) && !i.values.length) || (N.has(e) && !r.values.length)
            ? (function (t, e) {
                return N.has(t)
                  ? (n) => (n <= 0 ? t : e)
                  : (n) => (n >= 1 ? e : t);
              })(t, e)
            : (0, B.F)(
                z(
                  (function (t, e) {
                    var n;
                    let r = [],
                      i = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let o = e.types[s],
                        a = t.indexes[o][i[o]],
                        l = null !== (n = t.values[a]) && void 0 !== n ? n : 0;
                      (r[s] = l), i[o]++;
                    }
                    return r;
                  })(r, i),
                  i.values
                ),
                n
              )
          : ((0, x.$)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            O(t, e));
      };
      function X(t, e, n) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof n
          ? (0, C.k)(t, e, n)
          : q(t)(t, e);
      }
      var Y = n(7177);
      function Q(t, e, n) {
        let r = Math.max(e - 5, 0);
        return (0, Y.f)(n - t(r), e - r);
      }
      let Z = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function J(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let $ = ["duration", "bounce"],
        tt = ["stiffness", "damping", "mass"];
      function te(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function tn(t = Z.visualDuration, e = Z.bounce) {
        let n;
        let s =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: o, restDelta: a } = s,
          l = s.keyframes[0],
          u = s.keyframes[s.keyframes.length - 1],
          c = { done: !1, value: l },
          {
            stiffness: d,
            damping: h,
            mass: p,
            duration: f,
            velocity: m,
            isResolvedFromDuration: y,
          } = (function (t) {
            let e = {
              velocity: Z.velocity,
              stiffness: Z.stiffness,
              damping: Z.damping,
              mass: Z.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!te(t, tt) && te(t, $)) {
              if (t.visualDuration) {
                let n = (2 * Math.PI) / (1.2 * t.visualDuration),
                  r = n * n,
                  i = 2 * (0, k.q)(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(r);
                e = { ...e, mass: Z.mass, stiffness: r, damping: i };
              } else {
                let n = (function ({
                  duration: t = Z.duration,
                  bounce: e = Z.bounce,
                  velocity: n = Z.velocity,
                  mass: r = Z.mass,
                }) {
                  let s, o;
                  (0, x.$)(
                    t <= (0, i.f)(Z.maxDuration),
                    "Spring duration must be 10 seconds or less"
                  );
                  let a = 1 - e;
                  (a = (0, k.q)(Z.minDamping, Z.maxDamping, a)),
                    (t = (0, k.q)(Z.minDuration, Z.maxDuration, (0, i.X)(t))),
                    a < 1
                      ? ((s = (e) => {
                          let r = e * a,
                            i = r * t;
                          return 0.001 - ((r - n) / J(e, a)) * Math.exp(-i);
                        }),
                        (o = (e) => {
                          let r = e * a * t,
                            i = Math.pow(a, 2) * Math.pow(e, 2) * t,
                            o = Math.exp(-r),
                            l = J(Math.pow(e, 2), a);
                          return (
                            ((r * n + n - i) *
                              o *
                              (-s(e) + 0.001 > 0 ? -1 : 1)) /
                            l
                          );
                        }))
                      : ((s = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - n) * t + 1)),
                        (o = (e) => t * t * (n - e) * Math.exp(-e * t)));
                  let l = (function (t, e, n) {
                    let r = n;
                    for (let n = 1; n < 12; n++) r -= t(r) / e(r);
                    return r;
                  })(s, o, 5 / t);
                  if (((t = (0, i.f)(t)), isNaN(l)))
                    return {
                      stiffness: Z.stiffness,
                      damping: Z.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(l, 2) * r;
                    return {
                      stiffness: e,
                      damping: 2 * a * Math.sqrt(r * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...n, mass: Z.mass }).isResolvedFromDuration = !0;
              }
            }
            return e;
          })({ ...s, velocity: -(0, i.X)(s.velocity || 0) }),
          v = m || 0,
          g = h / (2 * Math.sqrt(d * p)),
          b = u - l,
          w = (0, i.X)(Math.sqrt(d / p)),
          A = 5 > Math.abs(b);
        if (
          (o || (o = A ? Z.restSpeed.granular : Z.restSpeed.default),
          a || (a = A ? Z.restDelta.granular : Z.restDelta.default),
          g < 1)
        ) {
          let t = J(w, g);
          n = (e) =>
            u -
            Math.exp(-g * w * e) *
              (((v + g * w * b) / t) * Math.sin(t * e) + b * Math.cos(t * e));
        } else if (1 === g)
          n = (t) => u - Math.exp(-w * t) * (b + (v + w * b) * t);
        else {
          let t = w * Math.sqrt(g * g - 1);
          n = (e) => {
            let n = Math.exp(-g * w * e),
              r = Math.min(t * e, 300);
            return (
              u -
              (n * ((v + g * w * b) * Math.sinh(r) + t * b * Math.cosh(r))) / t
            );
          };
        }
        let P = {
          calculatedDuration: (y && f) || null,
          next: (t) => {
            let e = n(t);
            if (y) c.done = t >= f;
            else {
              let r = 0;
              g < 1 && (r = 0 === t ? (0, i.f)(v) : Q(n, t, e));
              let s = Math.abs(r) <= o,
                l = Math.abs(u - e) <= a;
              c.done = s && l;
            }
            return (c.value = c.done ? u : e), c;
          },
          toString: () => {
            let t = Math.min((0, r.tu)(P), r.YE),
              e = (0, r.KZ)((e) => P.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
        };
        return P;
      }
      function tr({
        keyframes: t,
        velocity: e = 0,
        power: n = 0.8,
        timeConstant: r = 325,
        bounceDamping: i = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: c,
      }) {
        let d, h;
        let p = t[0],
          f = { done: !1, value: p },
          m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          y = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          v = n * e,
          g = p + v,
          b = void 0 === o ? g : o(g);
        b !== g && (v = b - p);
        let w = (t) => -v * Math.exp(-t / r),
          x = (t) => b + w(t),
          A = (t) => {
            let e = w(t),
              n = x(t);
            (f.done = Math.abs(e) <= u), (f.value = f.done ? b : n);
          },
          P = (t) => {
            m(f.value) &&
              ((d = t),
              (h = tn({
                keyframes: [f.value, y(f.value)],
                velocity: Q(x, t, f.value),
                damping: i,
                stiffness: s,
                restDelta: u,
                restSpeed: c,
              })));
          };
        return (
          P(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (h || void 0 !== d || ((e = !0), A(t), P(t)),
              void 0 !== d && t >= d)
                ? h.next(t - d)
                : (e || A(t), f);
            },
          }
        );
      }
      let ti = c(0.42, 0, 1, 1),
        ts = c(0, 0, 0.58, 1),
        to = c(0.42, 0, 0.58, 1),
        ta = (t) => Array.isArray(t) && "number" != typeof t[0],
        tl = {
          linear: l.l,
          easeIn: ti,
          easeInOut: to,
          easeOut: ts,
          circIn: v.po,
          circInOut: v.tn,
          circOut: v.yT,
          backIn: f,
          backInOut: m,
          backOut: p,
          anticipate: y,
        },
        tu = (t) => {
          if ((0, r.DW)(t)) {
            (0, x.V)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, n, r, i] = t;
            return c(e, n, r, i);
          }
          return "string" == typeof t
            ? ((0, x.V)(void 0 !== tl[t], `Invalid easing type '${t}'`), tl[t])
            : t;
        };
      var tc = n(6896);
      function td({
        duration: t = 300,
        keyframes: e,
        times: n,
        ease: r = "easeInOut",
      }) {
        let i = ta(r) ? r.map(tu) : tu(r),
          s = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: n = !0, ease: r, mixer: i } = {}) {
            let s = t.length;
            if (
              ((0, x.V)(
                s === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === s)
            )
              return () => e[0];
            if (2 === s && e[0] === e[1]) return () => e[1];
            let o = t[0] === t[1];
            t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let a = (function (t, e, n) {
                let r = [],
                  i = n || X,
                  s = t.length - 1;
                for (let n = 0; n < s; n++) {
                  let s = i(t[n], t[n + 1]);
                  if (e) {
                    let t = Array.isArray(e) ? e[n] || l.l : e;
                    s = (0, B.F)(t, s);
                  }
                  r.push(s);
                }
                return r;
              })(e, r, i),
              u = a.length,
              c = (n) => {
                if (o && n < t[0]) return e[0];
                let r = 0;
                if (u > 1) for (; r < t.length - 2 && !(n < t[r + 1]); r++);
                let i = (0, tc.q)(t[r], t[r + 1], n);
                return a[r](i);
              };
            return n ? (e) => c((0, k.q)(t[0], t[s - 1], e)) : c;
          })(
            (n && n.length === e.length
              ? n
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let n = t[t.length - 1];
                      for (let r = 1; r <= e; r++) {
                        let i = (0, tc.q)(0, e, r);
                        t.push((0, C.k)(n, 1, i));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(i)
                ? i
                : e.map(() => i || to).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = o(e)), (s.done = e >= t), s),
        };
      }
      let th = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => s.Gt.update(e, !0),
            stop: () => (0, s.WG)(e),
            now: () => (s.uv.isProcessing ? s.uv.timestamp : b.k.now()),
          };
        },
        tp = { decay: tr, inertia: tr, tween: td, keyframes: td, spring: tn },
        tf = (t) => t / 100;
      class tm extends E {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: n,
              element: r,
              keyframes: i,
            } = this.options,
            s = (null == r ? void 0 : r.KeyframeResolver) || w.h;
          (this.resolver = new s(
            i,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            n,
            r
          )),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes)
              );
        }
        initPlayback(t) {
          let e, n;
          let {
              type: i = "keyframes",
              repeat: s = 0,
              repeatDelay: o = 0,
              repeatType: a,
              velocity: l = 0,
            } = this.options,
            u = (0, r.WH)(i) ? i : tp[i] || td;
          u !== td &&
            "number" != typeof t[0] &&
            ((e = (0, B.F)(tf, X(t[0], t[1]))), (t = [0, 100]));
          let c = u({ ...this.options, keyframes: t });
          "mirror" === a &&
            (n = u({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -l,
            })),
            null === c.calculatedDuration &&
              (c.calculatedDuration = (0, r.tu)(c));
          let { calculatedDuration: d } = c,
            h = d + o;
          return {
            generator: c,
            mirroredGenerator: n,
            mapPercentToKeyframes: e,
            calculatedDuration: d,
            resolvedDuration: h,
            totalDuration: h * (s + 1) - o,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: n } = this;
          if (!n) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: r,
            generator: i,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: c,
          } = n;
          if (null === this.startTime) return i.next(0);
          let {
            delay: d,
            repeat: h,
            repeatType: p,
            repeatDelay: f,
            onUpdate: m,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let y = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            v = this.speed >= 0 ? y < 0 : y > u;
          (this.currentTime = Math.max(y, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let g = this.currentTime,
            b = i;
          if (h) {
            let t = Math.min(this.currentTime, u) / c,
              e = Math.floor(t),
              n = t % 1;
            !n && t >= 1 && (n = 1),
              1 === n && e--,
              (e = Math.min(e, h + 1)) % 2 &&
                ("reverse" === p
                  ? ((n = 1 - n), f && (n -= f / c))
                  : "mirror" === p && (b = s)),
              (g = (0, k.q)(0, 1, n) * c);
          }
          let w = v ? { done: !1, value: a[0] } : b.next(g);
          o && (w.value = o(w.value));
          let { done: x } = w;
          v ||
            null === l ||
            (x =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let A =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && x));
          return (
            A && void 0 !== r && (w.value = T(a, this.options, r)),
            m && m(w.value),
            A && this.finish(),
            w
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, i.X)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, i.X)(this.currentTime);
        }
        set time(t) {
          (t = (0, i.f)(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t),
            e && (this.time = (0, i.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = th, onPlay: e, startTime: n } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let r = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = r - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = r)
            : (this.startTime = null != n ? n : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let ty = new Set(["opacity", "clipPath", "filter", "transform"]),
        tv = (0, n(4435).p)(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        tg = { anticipate: y, backInOut: m, circInOut: v.tn };
      class tb extends E {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: n,
            element: r,
            keyframes: i,
          } = this.options;
          (this.resolver = new g.K(
            i,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            n,
            r
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var n;
          let {
            duration: i = 300,
            times: s,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
            startTime: c,
          } = this.options;
          if (!l.owner || !l.owner.current) return !1;
          if (
            ("string" == typeof o && (0, r.nL)() && o in tg && (o = tg[o]),
            (n = this.options),
            (0, r.WH)(n.type) || "spring" === n.type || !(0, r.yL)(n.ease))
          ) {
            let {
                onComplete: e,
                onUpdate: n,
                motionValue: r,
                element: l,
                ...u
              } = this.options,
              c = (function (t, e) {
                let n = new tm({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  r = { done: !1, value: t[0] },
                  i = [],
                  s = 0;
                for (; !r.done && s < 2e4; )
                  i.push((r = n.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: i,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = c.keyframes).length && (t[1] = t[0]),
              (i = c.duration),
              (s = c.times),
              (o = c.ease),
              (a = "keyframes");
          }
          let d = (function (
            t,
            e,
            n,
            {
              delay: i = 0,
              duration: s = 300,
              repeat: o = 0,
              repeatType: a = "loop",
              ease: l = "easeInOut",
              times: u,
            } = {}
          ) {
            let c = { [e]: n };
            u && (c.offset = u);
            let d = (0, r.TU)(l, s);
            return (
              Array.isArray(d) && (c.easing = d),
              t.animate(c, {
                delay: i,
                duration: s,
                easing: Array.isArray(d) ? "linear" : d,
                fill: "both",
                iterations: o + 1,
                direction: "reverse" === a ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: i,
            times: s,
            ease: o,
          });
          return (
            (d.startTime = null != c ? c : this.calcStartTime()),
            this.pendingTimeline
              ? ((0, r.vG)(d, this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (d.onfinish = () => {
                  let { onComplete: n } = this.options;
                  l.set(T(t, this.options, e)),
                    n && n(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: d,
              duration: i,
              times: s,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return (0, i.X)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, i.X)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: n } = e;
          n.currentTime = (0, i.f)(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: n } = e;
          n.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return l.l;
            let { animation: n } = e;
            (0, r.vG)(n, t);
          } else this.pendingTimeline = t;
          return l.l;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: n,
            duration: r,
            type: s,
            ease: o,
            times: a,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: l,
                element: u,
                ...c
              } = this.options,
              d = new tm({
                ...c,
                keyframes: n,
                duration: r,
                type: s,
                ease: o,
                times: a,
                isGenerator: !0,
              }),
              h = (0, i.f)(this.time);
            t.setWithVelocity(d.sample(h - 10).value, d.sample(h).value, 10);
          }
          let { onStop: l } = this.options;
          l && l(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: n,
            repeatDelay: r,
            repeatType: i,
            damping: s,
            type: o,
          } = t;
          if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
            return !1;
          let { onUpdate: a, transformTemplate: l } = e.owner.getProps();
          return (
            tv() &&
            n &&
            ty.has(n) &&
            !a &&
            !l &&
            !r &&
            "mirror" !== i &&
            0 !== s &&
            "inertia" !== o
          );
        }
      }
      var tw = n(2443);
      let tx = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        tA = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        tP = { type: "keyframes", duration: 0.8 },
        tS = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        tT = (t, { keyframes: e }) =>
          e.length > 2
            ? tP
            : tw.f.has(t)
            ? t.startsWith("scale")
              ? tA(e[1])
              : tx
            : tS,
        tE =
          (t, e, n, l = {}, u, c) =>
          (d) => {
            let h = (0, r.rU)(l, t) || {},
              p = h.delay || l.delay || 0,
              { elapsed: f = 0 } = l;
            f -= (0, i.f)(p);
            let m = {
              keyframes: Array.isArray(n) ? n : [null, n],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...h,
              delay: -f,
              onUpdate: (t) => {
                e.set(t), h.onUpdate && h.onUpdate(t);
              },
              onComplete: () => {
                d(), h.onComplete && h.onComplete();
              },
              name: t,
              motionValue: e,
              element: c ? void 0 : u,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: n,
              staggerChildren: r,
              staggerDirection: i,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...c
            }) {
              return !!Object.keys(c).length;
            })(h) && (m = { ...m, ...tT(t, m) }),
              m.duration && (m.duration = (0, i.f)(m.duration)),
              m.repeatDelay && (m.repeatDelay = (0, i.f)(m.repeatDelay)),
              void 0 !== m.from && (m.keyframes[0] = m.from);
            let y = !1;
            if (
              ((!1 !== m.type && (0 !== m.duration || m.repeatDelay)) ||
                ((m.duration = 0), 0 !== m.delay || (y = !0)),
              (a.current || o.W.skipAnimations) &&
                ((y = !0), (m.duration = 0), (m.delay = 0)),
              y && !c && void 0 !== e.get())
            ) {
              let t = T(m.keyframes, h);
              if (void 0 !== t)
                return (
                  s.Gt.update(() => {
                    m.onUpdate(t), m.onComplete();
                  }),
                  new r.P6([])
                );
            }
            return !c && tb.supports(m) ? new tb(m) : new tm(m);
          };
    },
    1358: (t, e, n) => {
      "use strict";
      n.d(e, { _: () => f });
      var r = n(4737),
        i = n(3033),
        s = n(5972),
        o = n(4714),
        a = n(9194),
        l = n(4458),
        u = n(2386),
        c = n(104);
      function d(t, e, { delay: n = 0, transitionOverride: r, type: h } = {}) {
        var p;
        let {
          transition: f = t.getDefaultTransition(),
          transitionEnd: m,
          ...y
        } = e;
        r && (f = r);
        let v = [],
          g = h && t.animationState && t.animationState.getState()[h];
        for (let e in y) {
          let r = t.getValue(
              e,
              null !== (p = t.latestValues[e]) && void 0 !== p ? p : null
            ),
            o = y[e];
          if (
            void 0 === o ||
            (g &&
              (function ({ protectedKeys: t, needsAnimating: e }, n) {
                let r = t.hasOwnProperty(n) && !0 !== e[n];
                return (e[n] = !1), r;
              })(g, e))
          )
            continue;
          let d = { delay: n, ...(0, i.rU)(f || {}, e) },
            h = !1;
          if (window.MotionHandoffAnimation) {
            let n = (0, l.P)(t);
            if (n) {
              let t = window.MotionHandoffAnimation(n, e, c.Gt);
              null !== t && ((d.startTime = t), (h = !0));
            }
          }
          (0, a.g)(t, e),
            r.start(
              (0, u.f)(
                e,
                r,
                o,
                t.shouldReduceMotion && s.$.has(e) ? { type: !1 } : d,
                t,
                h
              )
            );
          let m = r.animation;
          m && v.push(m);
        }
        return (
          m &&
            Promise.all(v).then(() => {
              c.Gt.update(() => {
                m && (0, o.U)(t, m);
              });
            }),
          v
        );
      }
      function h(t, e, n = {}) {
        var i;
        let s = (0, r.K)(
            t,
            e,
            "exit" === n.type
              ? null === (i = t.presenceContext) || void 0 === i
                ? void 0
                : i.custom
              : void 0
          ),
          { transition: o = t.getDefaultTransition() || {} } = s || {};
        n.transitionOverride && (o = n.transitionOverride);
        let a = s ? () => Promise.all(d(t, s, n)) : () => Promise.resolve(),
          l =
            t.variantChildren && t.variantChildren.size
              ? (r = 0) => {
                  let {
                    delayChildren: i = 0,
                    staggerChildren: s,
                    staggerDirection: a,
                  } = o;
                  return (function (t, e, n = 0, r = 0, i = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * r,
                      l = 1 === i ? (t = 0) => t * r : (t = 0) => a - t * r;
                    return (
                      Array.from(t.variantChildren)
                        .sort(p)
                        .forEach((t, r) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              h(t, e, { ...s, delay: n + l(r) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, i + r, s, a, n);
                }
              : () => Promise.resolve(),
          { when: u } = o;
        if (!u) return Promise.all([a(), l(n.delay)]);
        {
          let [t, e] = "beforeChildren" === u ? [a, l] : [l, a];
          return t().then(() => e());
        }
      }
      function p(t, e) {
        return t.sortNodePosition(e);
      }
      function f(t, e, n = {}) {
        let i;
        if ((t.notify("AnimationStart", e), Array.isArray(e)))
          i = Promise.all(e.map((e) => h(t, e, n)));
        else if ("string" == typeof e) i = h(t, e, n);
        else {
          let s = "function" == typeof e ? (0, r.K)(t, e, n.custom) : e;
          i = Promise.all(d(t, s, n));
        }
        return i.then(() => {
          t.notify("AnimationComplete", e);
        });
      }
    },
    2392: (t, e, n) => {
      "use strict";
      n.d(e, { n: () => r });
      let r = "data-" + (0, n(8062).I)("framerAppearId");
    },
    4458: (t, e, n) => {
      "use strict";
      n.d(e, { P: () => i });
      var r = n(2392);
      function i(t) {
        return t.props[r.n];
      }
    },
    1712: (t, e, n) => {
      "use strict";
      n.d(e, { p: () => r });
      let r = (t) => Array.isArray(t);
    },
    9120: (t, e, n) => {
      "use strict";
      n.d(e, { xQ: () => s });
      var r = n(6540),
        i = n(6719);
      function s(t = !0) {
        let e = (0, r.useContext)(i.t);
        if (null === e) return [!0, null];
        let { isPresent: n, onExitComplete: o, register: a } = e,
          l = (0, r.useId)();
        (0, r.useEffect)(() => {
          t && a(l);
        }, [t]);
        let u = (0, r.useCallback)(() => t && o && o(l), [l, o, t]);
        return !n && o ? [!1, u] : [!0];
      }
    },
    9473: (t, e, n) => {
      "use strict";
      n.d(e, { L: () => r });
      let r = (0, n(6540).createContext)({});
    },
    5446: (t, e, n) => {
      "use strict";
      n.d(e, { Q: () => r });
      let r = (0, n(6540).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    6719: (t, e, n) => {
      "use strict";
      n.d(e, { t: () => r });
      let r = (0, n(6540).createContext)(null);
    },
    4868: (t, e, n) => {
      "use strict";
      n.d(e, { po: () => s, tn: () => a, yT: () => o });
      var r = n(3041),
        i = n(2946);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, i.G)(s),
        a = (0, r.V)(s);
    },
    3041: (t, e, n) => {
      "use strict";
      n.d(e, { V: () => r });
      let r = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    2946: (t, e, n) => {
      "use strict";
      n.d(e, { G: () => r });
      let r = (t) => (e) => 1 - t(1 - e);
    },
    5489: (t, e, n) => {
      "use strict";
      n.d(e, { I: () => s });
      var r = n(4668);
      let i = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function s(t, e) {
        let n = !1,
          s = !0,
          o = { delta: 0, timestamp: 0, isProcessing: !1 },
          a = () => (n = !0),
          l = i.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  n = new Set(),
                  r = !1,
                  i = !1,
                  s = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  s.has(e) && (l.schedule(e), t()), e(o);
                }
                let l = {
                  schedule: (t, i = !1, o = !1) => {
                    let a = o && r ? e : n;
                    return i && s.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    n.delete(t), s.delete(t);
                  },
                  process: (t) => {
                    if (((o = t), r)) {
                      i = !0;
                      return;
                    }
                    (r = !0),
                      ([e, n] = [n, e]),
                      e.forEach(a),
                      e.clear(),
                      (r = !1),
                      i && ((i = !1), l.process(t));
                  },
                };
                return l;
              })(a)),
              t
            ),
            {}
          ),
          {
            read: u,
            resolveKeyframes: c,
            update: d,
            preRender: h,
            render: p,
            postRender: f,
          } = l,
          m = () => {
            let i = r.W.useManualTiming ? o.timestamp : performance.now();
            (n = !1),
              (o.delta = s
                ? 1e3 / 60
                : Math.max(Math.min(i - o.timestamp, 40), 1)),
              (o.timestamp = i),
              (o.isProcessing = !0),
              u.process(o),
              c.process(o),
              d.process(o),
              h.process(o),
              p.process(o),
              f.process(o),
              (o.isProcessing = !1),
              n && e && ((s = !1), t(m));
          },
          y = () => {
            (n = !0), (s = !0), o.isProcessing || t(m);
          };
        return {
          schedule: i.reduce((t, e) => {
            let r = l[e];
            return (
              (t[e] = (t, e = !1, i = !1) => (n || y(), r.schedule(t, e, i))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < i.length; e++) l[i[e]].cancel(t);
          },
          state: o,
          steps: l,
        };
      }
    },
    104: (t, e, n) => {
      "use strict";
      n.d(e, { Gt: () => i, PP: () => a, WG: () => s, uv: () => o });
      var r = n(1533);
      let {
        schedule: i,
        cancel: s,
        state: o,
        steps: a,
      } = (0, n(5489).I)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : r.l,
        !0
      );
    },
    4582: (t, e, n) => {
      "use strict";
      let r;
      n.d(e, { k: () => a });
      var i = n(4668),
        s = n(104);
      function o() {
        r = void 0;
      }
      let a = {
        now: () => (
          void 0 === r &&
            a.set(
              s.uv.isProcessing || i.W.useManualTiming
                ? s.uv.timestamp
                : performance.now()
            ),
          r
        ),
        set: (t) => {
          (r = t), queueMicrotask(o);
        },
      };
    },
    4655: (t, e, n) => {
      "use strict";
      function r(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      n.d(e, { P: () => n1 });
      var i,
        s,
        o = n(1712);
      function a(t, e) {
        if (!Array.isArray(e)) return !1;
        let n = e.length;
        if (n !== t.length) return !1;
        for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function l(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      var u = n(4737);
      let c = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        d = ["initial", ...c];
      var h = n(1358);
      let p = d.length,
        f = [...c].reverse(),
        m = c.length;
      function y(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function v() {
        return {
          animate: y(!0),
          whileInView: y(),
          whileHover: y(),
          whileTap: y(),
          whileDrag: y(),
          whileFocus: y(),
          exit: y(),
        };
      }
      class g {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class b extends g {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: n }) => (0, h._)(t, e, n))
                    ),
                  n = v(),
                  i = !0,
                  s = (e) => (n, r) => {
                    var i;
                    let s = (0, u.K)(
                      t,
                      r,
                      "exit" === e
                        ? null === (i = t.presenceContext) || void 0 === i
                          ? void 0
                          : i.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...r } = s;
                      n = { ...n, ...r, ...e };
                    }
                    return n;
                  };
                function c(u) {
                  let { props: c } = t,
                    h =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let n = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (n.initial = e.props.initial),
                            n
                          );
                        }
                        let n = {};
                        for (let t = 0; t < p; t++) {
                          let r = d[t],
                            i = e.props[r];
                          (l(i) || !1 === i) && (n[r] = i);
                        }
                        return n;
                      })(t.parent) || {},
                    y = [],
                    v = new Set(),
                    g = {},
                    b = 1 / 0;
                  for (let e = 0; e < m; e++) {
                    var w;
                    let d = f[e],
                      p = n[d],
                      m = void 0 !== c[d] ? c[d] : h[d],
                      x = l(m),
                      A = d === u ? p.isActive : null;
                    !1 === A && (b = e);
                    let P = m === h[d] && m !== c[d] && x;
                    if (
                      (P && i && t.manuallyAnimateOnMount && (P = !1),
                      (p.protectedKeys = { ...g }),
                      (!p.isActive && null === A) ||
                        (!m && !p.prevProp) ||
                        r(m) ||
                        "boolean" == typeof m)
                    )
                      continue;
                    let S =
                        ((w = p.prevProp),
                        "string" == typeof m
                          ? m !== w
                          : !!Array.isArray(m) && !a(m, w)),
                      T =
                        S || (d === u && p.isActive && !P && x) || (e > b && x),
                      E = !1,
                      k = Array.isArray(m) ? m : [m],
                      C = k.reduce(s(d), {});
                    !1 === A && (C = {});
                    let { prevResolvedValues: R = {} } = p,
                      D = { ...R, ...C },
                      j = (e) => {
                        (T = !0),
                          v.has(e) && ((E = !0), v.delete(e)),
                          (p.needsAnimating[e] = !0);
                        let n = t.getValue(e);
                        n && (n.liveStyle = !1);
                      };
                    for (let t in D) {
                      let e = C[t],
                        n = R[t];
                      if (!g.hasOwnProperty(t))
                        ((0, o.p)(e) && (0, o.p)(n) ? a(e, n) : e === n)
                          ? void 0 !== e && v.has(t)
                            ? j(t)
                            : (p.protectedKeys[t] = !0)
                          : null != e
                          ? j(t)
                          : v.add(t);
                    }
                    (p.prevProp = m),
                      (p.prevResolvedValues = C),
                      p.isActive && (g = { ...g, ...C }),
                      i && t.blockInitialAnimation && (T = !1);
                    let M = !(P && S) || E;
                    T &&
                      M &&
                      y.push(
                        ...k.map((t) => ({
                          animation: t,
                          options: { type: d },
                        }))
                      );
                  }
                  if (v.size) {
                    let e = {};
                    v.forEach((n) => {
                      let r = t.getBaseTarget(n),
                        i = t.getValue(n);
                      i && (i.liveStyle = !0), (e[n] = null != r ? r : null);
                    }),
                      y.push({ animation: e });
                  }
                  let x = !!y.length;
                  return (
                    i &&
                      (!1 === c.initial || c.initial === c.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (x = !1),
                    (i = !1),
                    x ? e(y) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: c,
                  setActive: function (e, r) {
                    var i;
                    if (n[e].isActive === r) return Promise.resolve();
                    null === (i = t.variantChildren) ||
                      void 0 === i ||
                      i.forEach((t) => {
                        var n;
                        return null === (n = t.animationState) || void 0 === n
                          ? void 0
                          : n.setActive(e, r);
                      }),
                      (n[e].isActive = r);
                    let s = c(e);
                    for (let t in n) n[t].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (n) {
                    e = n(t);
                  },
                  getState: () => n,
                  reset: () => {
                    (n = v()), (i = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          r(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let w = 0;
      class x extends g {
        constructor() {
          super(...arguments), (this.id = w++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === n) return;
          let r = this.node.animationState.setActive("exit", !t);
          e && !t && r.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      var A = n(1533),
        P = n(8104),
        S = n(3033),
        T = n(7331);
      function E(t, e, n, r = { passive: !0 }) {
        return t.addEventListener(e, n, r), () => t.removeEventListener(e, n);
      }
      function k(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let C = (t) => (e) => (0, S.Mc)(e) && t(e, k(e));
      function R(t, e, n, r) {
        return E(t, e, C(n), r);
      }
      let D = (t, e) => Math.abs(t - e);
      var j = n(1339),
        M = n(104);
      class O {
        constructor(
          t,
          e,
          {
            transformPagePoint: n,
            contextWindow: r,
            dragSnapToOrigin: i = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = V(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                n =
                  (function (t, e) {
                    return Math.sqrt(D(t.x, e.x) ** 2 + D(t.y, e.y) ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !n) return;
              let { point: r } = t,
                { timestamp: i } = M.uv;
              this.history.push({ ...r, timestamp: i });
              let { onStart: s, onMove: o } = this.handlers;
              e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = L(e, this.transformPagePoint)),
                M.Gt.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: n,
                onSessionEnd: r,
                resumeAnimation: i,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && i && i(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = V(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : L(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && n && n(t, s), r && r(t, s);
            }),
            !(0, S.Mc)(t))
          )
            return;
          (this.dragSnapToOrigin = i),
            (this.handlers = e),
            (this.transformPagePoint = n),
            (this.contextWindow = r || window);
          let s = L(k(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = M.uv;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, V(s, this.history)),
            (this.removeListeners = (0, j.F)(
              R(this.contextWindow, "pointermove", this.handlePointerMove),
              R(this.contextWindow, "pointerup", this.handlePointerUp),
              R(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, M.WG)(this.updatePoint);
        }
      }
      function L(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function _(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function V({ point: t }, e) {
        return {
          point: t,
          delta: _(t, I(e)),
          offset: _(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let n = t.length - 1,
              r = null,
              i = I(t);
            for (
              ;
              n >= 0 &&
              ((r = t[n]), !(i.timestamp - r.timestamp > (0, T.f)(0.1)));

            )
              n--;
            if (!r) return { x: 0, y: 0 };
            let s = (0, T.X)(i.timestamp - r.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function I(t) {
        return t[t.length - 1];
      }
      function F(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      var B = n(6896),
        U = n(9713);
      function W(t) {
        return t.max - t.min;
      }
      function N(t, e, n, r = 0.5) {
        (t.origin = r),
          (t.originPoint = (0, U.k)(e.min, e.max, t.origin)),
          (t.scale = W(n) / W(e)),
          (t.translate = (0, U.k)(n.min, n.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function G(t, e, n, r) {
        N(t.x, e.x, n.x, r ? r.originX : void 0),
          N(t.y, e.y, n.y, r ? r.originY : void 0);
      }
      function q(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + W(e));
      }
      function z(t, e, n) {
        (t.min = e.min - n.min), (t.max = t.min + W(e));
      }
      function H(t, e, n) {
        z(t.x, e.x, n.x), z(t.y, e.y, n.y);
      }
      var K = n(2464);
      function X(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function Y(t, e) {
        let n = e.min - t.min,
          r = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([n, r] = [r, n]), { min: n, max: r }
        );
      }
      function Q(t, e, n) {
        return { min: Z(t, e), max: Z(t, n) };
      }
      function Z(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let J = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        $ = () => ({ x: J(), y: J() }),
        tt = () => ({ min: 0, max: 0 }),
        te = () => ({ x: tt(), y: tt() });
      function tn(t) {
        return [t("x"), t("y")];
      }
      function tr({ top: t, left: e, right: n, bottom: r }) {
        return { x: { min: e, max: n }, y: { min: t, max: r } };
      }
      function ti(t) {
        return void 0 === t || 1 === t;
      }
      function ts({ scale: t, scaleX: e, scaleY: n }) {
        return !ti(t) || !ti(e) || !ti(n);
      }
      function to(t) {
        return (
          ts(t) ||
          ta(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function ta(t) {
        var e, n;
        return ((e = t.x) && "0%" !== e) || ((n = t.y) && "0%" !== n);
      }
      function tl(t, e, n, r, i) {
        return void 0 !== i && (t = r + i * (t - r)), r + n * (t - r) + e;
      }
      function tu(t, e = 0, n = 1, r, i) {
        (t.min = tl(t.min, e, n, r, i)), (t.max = tl(t.max, e, n, r, i));
      }
      function tc(t, { x: e, y: n }) {
        tu(t.x, e.translate, e.scale, e.originPoint),
          tu(t.y, n.translate, n.scale, n.originPoint);
      }
      function td(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function th(t, e, n, r, i = 0.5) {
        let s = (0, U.k)(t.min, t.max, i);
        tu(t, e, n, s, r);
      }
      function tp(t, e) {
        th(t.x, e.x, e.scaleX, e.scale, e.originX),
          th(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function tf(t, e) {
        return tr(
          (function (t, e) {
            if (!e) return t;
            let n = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      var tm = n(5269),
        ty = n(2386);
      let tv = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      var tg = n(9194);
      let tb = new WeakMap();
      class tw {
        constructor(t) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = te()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: n } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          let { dragSnapToOrigin: r } = this.getProps();
          this.panSession = new O(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: n } = this.getProps();
                n ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(k(t).point);
              },
              onStart: (t, e) => {
                let {
                  drag: n,
                  dragPropagation: r,
                  onDragStart: i,
                } = this.getProps();
                if (
                  n &&
                  !r &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock = (0, S.Wp)(n)),
                  !this.openDragLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  tn((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (tm.KN.test(e)) {
                      let { projection: n } = this.visualElement;
                      if (n && n.layout) {
                        let r = n.layout.layoutBox[t];
                        r && (e = W(r) * (parseFloat(e) / 100));
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  i && M.Gt.postRender(() => i(t, e)),
                  (0, tg.g)(this.visualElement, "transform");
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: n,
                  dragDirectionLock: r,
                  onDirectionLock: i,
                  onDrag: s,
                } = this.getProps();
                if (!n && !this.openDragLock) return;
                let { offset: o } = e;
                if (r && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let n = null;
                    return (
                      Math.abs(t.y) > e
                        ? (n = "y")
                        : Math.abs(t.x) > e && (n = "x"),
                      n
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      i &&
                      i(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                tn((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: r,
              contextWindow: tv(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let n = this.isDragging;
          if ((this.cancel(), !n)) return;
          let { velocity: r } = e;
          this.startAnimation(r);
          let { onDragEnd: i } = this.getProps();
          i && M.Gt.postRender(() => i(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: n } = this.getProps();
          !n &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, n) {
          let { drag: r } = this.getProps();
          if (!n || !tx(t, r, this.currentDirection)) return;
          let i = this.getAxisMotionValue(t),
            s = this.originPoint[t] + n[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: n }, r) {
              return (
                void 0 !== e && t < e
                  ? (t = r ? (0, U.k)(e, t, r.min) : Math.max(t, e))
                  : void 0 !== n &&
                    t > n &&
                    (t = r ? (0, U.k)(n, t, r.max) : Math.min(t, n)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            i.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: n } = this.getProps(),
            r =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            i = this.constraints;
          e && F(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && r
            ? (this.constraints = (function (
                t,
                { top: e, left: n, bottom: r, right: i }
              ) {
                return { x: X(t.x, n, i), y: X(t.y, e, r) };
              })(r.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: Q(t, "left", "right"), y: Q(t, "top", "bottom") }
              );
            })(n)),
            i !== this.constraints &&
              r &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              tn((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let n = {};
                    return (
                      void 0 !== e.min && (n.min = e.min - t.min),
                      void 0 !== e.max && (n.max = e.max - t.min),
                      n
                    );
                  })(r.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: n } =
            this.getProps();
          if (!e || !F(e)) return !1;
          let r = e.current;
          (0, P.V)(
            null !== r,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: i } = this.visualElement;
          if (!i || !i.layout) return !1;
          let s = (function (t, e, n) {
              let r = tf(t, n),
                { scroll: i } = e;
              return i && (td(r.x, i.offset.x), td(r.y, i.offset.y)), r;
            })(r, i.root, this.visualElement.getTransformPagePoint()),
            o = { x: Y((t = i.layout.layoutBox).x, s.x), y: Y(t.y, s.y) };
          if (n) {
            let t = n(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = tr(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: n,
              dragElastic: r,
              dragTransition: i,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            tn((o) => {
              if (!tx(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: n ? t[o] : 0,
                bounceStiffness: r ? 200 : 1e6,
                bounceDamping: r ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let n = this.getAxisMotionValue(t);
          return (
            (0, tg.g)(this.visualElement, t),
            n.start((0, ty.f)(t, n, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          tn((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          tn((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            n = this.visualElement.getProps();
          return (
            n[e] ||
            this.visualElement.getValue(
              t,
              (n.initial ? n.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          tn((e) => {
            let { drag: n } = this.getProps();
            if (!tx(e, n, this.currentDirection)) return;
            let { projection: r } = this.visualElement,
              i = this.getAxisMotionValue(e);
            if (r && r.layout) {
              let { min: n, max: s } = r.layout.layoutBox[e];
              i.set(t[e] - (0, U.k)(n, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: n } = this.visualElement;
          if (!F(e) || !n || !this.constraints) return;
          this.stopAnimation();
          let r = { x: 0, y: 0 };
          tn((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let n = e.get();
              r[t] = (function (t, e) {
                let n = 0.5,
                  r = W(t),
                  i = W(e);
                return (
                  i > r
                    ? (n = (0, B.q)(e.min, e.max - r, t.min))
                    : r > i && (n = (0, B.q)(t.min, t.max - i, e.min)),
                  (0, K.q)(0, 1, n)
                );
              })({ min: n, max: n }, this.constraints[t]);
            }
          });
          let { transformTemplate: i } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
            n.root && n.root.updateScroll(),
            n.updateLayout(),
            this.resolveConstraints(),
            tn((e) => {
              if (!tx(e, t, null)) return;
              let n = this.getAxisMotionValue(e),
                { min: i, max: s } = this.constraints[e];
              n.set((0, U.k)(i, s, r[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          tb.set(this.visualElement, this);
          let t = R(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: n = !0 } = this.getProps();
              e && n && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              F(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            r = n.addEventListener("measure", e);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
            M.Gt.read(e);
          let i = E(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = n.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (tn((e) => {
                    let n = this.getAxisMotionValue(e);
                    n &&
                      ((this.originPoint[e] += t[e].translate),
                      n.set(n.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            i(), t(), r(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: n = !1,
              dragPropagation: r = !1,
              dragConstraints: i = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: r,
            dragConstraints: i,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function tx(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      class tA extends g {
        constructor(t) {
          super(t),
            (this.removeGroupControls = A.l),
            (this.removeListeners = A.l),
            (this.controls = new tw(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || A.l);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let tP = (t) => (e, n) => {
        t && M.Gt.postRender(() => t(e, n));
      };
      class tS extends g {
        constructor() {
          super(...arguments), (this.removePointerDownListener = A.l);
        }
        onPointerDown(t) {
          this.session = new O(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: tv(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: n,
            onPanEnd: r,
          } = this.node.getProps();
          return {
            onSessionStart: tP(t),
            onStart: tP(e),
            onMove: n,
            onEnd: (t, e) => {
              delete this.session, r && M.Gt.postRender(() => r(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = R(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var tT = n(4848),
        tE = n(6540),
        tk = n(9120),
        tC = n(9473);
      let tR = (0, tE.createContext)({}),
        tD = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function tj(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let tM = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!tm.px.test(t)) return t;
            t = parseFloat(t);
          }
          let n = tj(t, e.target.x),
            r = tj(t, e.target.y);
          return `${n}% ${r}%`;
        },
      };
      var tO = n(615);
      let tL = {},
        { schedule: t_, cancel: tV } = (0, n(5489).I)(queueMicrotask, !1);
      class tI extends tE.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: n,
              layoutId: r,
            } = this.props,
            { projection: i } = t;
          Object.assign(tL, tB),
            i &&
              (e.group && e.group.add(i),
              n && n.register && r && n.register(i),
              i.root.didUpdate(),
              i.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              i.setOptions({
                ...i.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (tD.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: n,
              drag: r,
              isPresent: i,
            } = this.props,
            s = n.projection;
          return (
            s &&
              ((s.isPresent = i),
              r || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === i ||
                (i
                  ? s.promote()
                  : s.relegate() ||
                    M.Gt.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            t_.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: n,
            } = this.props,
            { projection: r } = t;
          r &&
            (r.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(r),
            n && n.deregister && n.deregister(r));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function tF(t) {
        let [e, n] = (0, tk.xQ)(),
          r = (0, tE.useContext)(tC.L);
        return (0, tT.jsx)(tI, {
          ...t,
          layoutGroup: r,
          switchLayoutGroup: (0, tE.useContext)(tR),
          isPresent: e,
          safeToRemove: n,
        });
      }
      let tB = {
        borderRadius: {
          ...tM,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: tM,
        borderTopRightRadius: tM,
        borderBottomLeftRadius: tM,
        borderBottomRightRadius: tM,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: n }) => {
            let r = tO.f.parse(t);
            if (r.length > 5) return t;
            let i = tO.f.createTransformer(t),
              s = "number" != typeof r[0] ? 1 : 0,
              o = n.x.scale * e.x,
              a = n.y.scale * e.y;
            (r[0 + s] /= o), (r[1 + s] /= a);
            let l = (0, U.k)(o, a, 0.5);
            return (
              "number" == typeof r[2 + s] && (r[2 + s] /= l),
              "number" == typeof r[3 + s] && (r[3 + s] /= l),
              i(r)
            );
          },
        },
      };
      var tU = n(4785),
        tW = n(9896),
        tN = n(4458),
        tG = n(4582),
        tq = n(2358);
      let tz = (t, e) => t.depth - e.depth;
      class tH {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, tq.Kq)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, tq.Ai)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(tz),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      var tK = n(2606),
        tX = n(7365);
      function tY(t) {
        let e = (0, tW.S)(t) ? t.get() : t;
        return (0, tX.B)(e) ? e.toValue() : e;
      }
      var tQ = n(4868);
      let tZ = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        tJ = tZ.length,
        t$ = (t) => ("string" == typeof t ? parseFloat(t) : t),
        t0 = (t) => "number" == typeof t || tm.px.test(t);
      function t1(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let t4 = t2(0, 0.5, tQ.yT),
        t5 = t2(0.5, 0.95, A.l);
      function t2(t, e, n) {
        return (r) => (r < t ? 0 : r > e ? 1 : n((0, B.q)(t, e, r)));
      }
      function t6(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function t3(t, e) {
        t6(t.x, e.x), t6(t.y, e.y);
      }
      function t8(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function t9(t, e, n, r, i) {
        return (
          (t -= e),
          (t = r + (1 / n) * (t - r)),
          void 0 !== i && (t = r + (1 / i) * (t - r)),
          t
        );
      }
      function t7(t, e, [n, r, i], s, o) {
        !(function (t, e = 0, n = 1, r = 0.5, i, s = t, o = t) {
          if (
            (tm.KN.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, U.k)(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, U.k)(s.min, s.max, r);
          t === s && (a -= e),
            (t.min = t9(t.min, e, n, a, i)),
            (t.max = t9(t.max, e, n, a, i));
        })(t, e[n], e[r], e[i], e.scale, s, o);
      }
      let et = ["x", "scaleX", "originX"],
        ee = ["y", "scaleY", "originY"];
      function en(t, e, n, r) {
        t7(t.x, e, et, n ? n.x : void 0, r ? r.x : void 0),
          t7(t.y, e, ee, n ? n.y : void 0, r ? r.y : void 0);
      }
      function er(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function ei(t) {
        return er(t.x) && er(t.y);
      }
      function es(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function eo(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function ea(t, e) {
        return eo(t.x, e.x) && eo(t.y, e.y);
      }
      function el(t) {
        return W(t.x) / W(t.y);
      }
      function eu(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class ec {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, tq.Kq)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, tq.Ai)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let n = this.members.findIndex((e) => t === e);
          if (0 === n) return !1;
          for (let t = n; t >= 0; t--) {
            let n = this.members[t];
            if (!1 !== n.isPresent) {
              e = n;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let n = this.lead;
          if (t !== n && ((this.prevLead = n), (this.lead = t), t.show(), n)) {
            n.instance && n.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = n),
              e && (t.resumeFrom.preserveOpacity = !0),
              n.snapshot &&
                ((t.snapshot = n.snapshot),
                (t.snapshot.latestValues =
                  n.animationValues || n.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: r } = t.options;
            !1 === r && n.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: n } = t;
            e.onExitComplete && e.onExitComplete(),
              n && n.options.onExitComplete && n.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let ed = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        eh = "undefined" != typeof window && void 0 !== window.MotionDebug,
        ep = ["", "X", "Y", "Z"],
        ef = { visibility: "hidden" },
        em = 0;
      function ey(t, e, n, r) {
        let { latestValues: i } = e;
        i[t] && ((n[t] = i[t]), e.setStaticValue(t, 0), r && (r[t] = 0));
      }
      function ev({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: r,
        resetTransform: i,
      }) {
        return class {
          constructor(t = {}, n = null == e ? void 0 : e()) {
            (this.id = em++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  eh &&
                    (ed.totalNodes =
                      ed.resolvedTargetDeltas =
                      ed.recalculatedProjection =
                        0),
                  this.nodes.forEach(ew),
                  this.nodes.forEach(ek),
                  this.nodes.forEach(eC),
                  this.nodes.forEach(ex),
                  eh && window.MotionDebug.record(ed);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = n ? n.root || n : this),
              (this.path = n ? [...n.path, n] : []),
              (this.parent = n),
              (this.depth = n ? n.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new tH());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new tK.v()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let n = this.eventHandlers.get(t);
            n && n.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, n = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: r, layout: i, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              n && (i || r) && (this.isLayoutDirty = !0),
              t)
            ) {
              let n;
              let r = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  n && n(),
                  (n = (function (t, e) {
                    let n = tG.k.now(),
                      r = ({ timestamp: e }) => {
                        let i = e - n;
                        i >= 250 && ((0, M.WG)(r), t(i - 250));
                      };
                    return M.Gt.read(r, !0), () => (0, M.WG)(r);
                  })(r, 250)),
                  tD.hasAnimatedSinceResize &&
                    ((tD.hasAnimatedSinceResize = !1), this.nodes.forEach(eE));
              });
            }
            r && this.root.registerSharedNode(r, this),
              !1 !== this.options.animate &&
                s &&
                (r || i) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: n,
                    layout: r,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let i =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        eL,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !ea(this.targetLayout, r) || n,
                      u = !e && n;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = {
                        ...(0, S.rU)(i, "layout"),
                        onPlay: o,
                        onComplete: a,
                      };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || eE(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = r;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, M.WG)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(eR),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: n } = e.options;
                  if (!n) return;
                  let r = (0, tN.P)(n);
                  if (window.MotionHasOptimisedAnimation(r, "transform")) {
                    let { layout: t, layoutId: n } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      r,
                      "transform",
                      M.Gt,
                      !(t || n)
                    );
                  }
                  let { parent: i } = e;
                  i && !i.hasCheckedOptimisedAppear && t(i);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: n } = this.options;
            if (void 0 === e && !n) return;
            let r = this.getTransformTemplate();
            (this.prevTransformTemplateValue = r
              ? r(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(eP);
              return;
            }
            this.isUpdating || this.nodes.forEach(eS),
              (this.isUpdating = !1),
              this.nodes.forEach(eT),
              this.nodes.forEach(eg),
              this.nodes.forEach(eb),
              this.clearAllSnapshots();
            let t = tG.k.now();
            (M.uv.delta = (0, K.q)(0, 1e3 / 60, t - M.uv.timestamp)),
              (M.uv.timestamp = t),
              (M.uv.isProcessing = !0),
              M.PP.update.process(M.uv),
              M.PP.preRender.process(M.uv),
              M.PP.render.process(M.uv),
              (M.uv.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), t_.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(eA), this.sharedNodes.forEach(eD);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              M.Gt.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            M.Gt.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = te()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = r(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: n(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!i) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !ei(this.projectionDelta),
              n = this.getTransformTemplate(),
              r = n ? n(this.latestValues, "") : void 0,
              s = r !== this.prevTransformTemplateValue;
            t &&
              (e || to(this.latestValues) || s) &&
              (i(this.instance, r),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let n = this.measurePageBox(),
              r = this.removeElementScroll(n);
            return (
              t && (r = this.removeTransform(r)),
              eI((e = r).x),
              eI(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: n,
                layoutBox: r,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return te();
            let n = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(eB)
              )
            ) {
              let { scroll: t } = this.root;
              t && (td(n.x, t.offset.x), td(n.y, t.offset.y));
            }
            return n;
          }
          removeElementScroll(t) {
            var e;
            let n = te();
            if (
              (t3(n, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return n;
            for (let e = 0; e < this.path.length; e++) {
              let r = this.path[e],
                { scroll: i, options: s } = r;
              r !== this.root &&
                i &&
                s.layoutScroll &&
                (i.wasRoot && t3(n, t),
                td(n.x, i.offset.x),
                td(n.y, i.offset.y));
            }
            return n;
          }
          applyTransform(t, e = !1) {
            let n = te();
            t3(n, t);
            for (let t = 0; t < this.path.length; t++) {
              let r = this.path[t];
              !e &&
                r.options.layoutScroll &&
                r.scroll &&
                r !== r.root &&
                tp(n, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                to(r.latestValues) && tp(n, r.latestValues);
            }
            return to(this.latestValues) && tp(n, this.latestValues), n;
          }
          removeTransform(t) {
            let e = te();
            t3(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              if (!n.instance || !to(n.latestValues)) continue;
              ts(n.latestValues) && n.updateSnapshot();
              let r = te();
              t3(r, n.measurePageBox()),
                en(
                  e,
                  n.latestValues,
                  n.snapshot ? n.snapshot.layoutBox : void 0,
                  r
                );
            }
            return to(this.latestValues) && en(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== M.uv.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, n, r, i;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = M.uv.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = te()),
                    (this.relativeTargetOrigin = te()),
                    H(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    t3(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = te()), (this.targetWithTransforms = te())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (n = this.target),
                      (r = this.relativeTarget),
                      (i = this.relativeParent.target),
                      q(n.x, r.x, i.x),
                      q(n.y, r.y, i.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : t3(this.target, this.layout.layoutBox),
                      tc(this.target, this.targetDelta))
                    : t3(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = te()),
                      (this.relativeTargetOrigin = te()),
                      H(this.relativeTargetOrigin, this.target, t.target),
                      t3(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                eh && ed.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              ts(this.parent.latestValues) ||
              ta(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              n = !!this.resumingFrom || this !== e,
              r = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (r = !1),
              n &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (r = !1),
              this.resolvedRelativeTargetAt === M.uv.timestamp && (r = !1),
              r)
            )
              return;
            let { layout: i, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(i || s))
            )
              return;
            t3(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, n, r = !1) {
              let i, s;
              let o = n.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (i = n[a]).projectionDelta;
                  let { visualElement: o } = i.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (r &&
                      i.options.layoutScroll &&
                      i.scroll &&
                      i !== i.root &&
                      tp(t, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), tc(t, s)),
                    r && to(i.latestValues) && tp(t, i.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, n),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = te()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (t8(this.prevProjectionDelta.x, this.projectionDelta.x),
                t8(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              G(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                eu(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                eu(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              eh && ed.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = $()),
              (this.projectionDelta = $()),
              (this.projectionDeltaWithTransform = $());
          }
          setAnimationOrigin(t, e = !1) {
            let n;
            let r = this.snapshot,
              i = r ? r.latestValues : {},
              s = { ...this.latestValues },
              o = $();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = te(),
              l =
                (r ? r.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              c = !u || u.members.length <= 1,
              d = !!(
                l &&
                !c &&
                !0 === this.options.crossfade &&
                !this.path.some(eO)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let r = e / 1e3;
                if (
                  (ej(o.x, t.x, r),
                  ej(o.y, t.y, r),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, h, p, f;
                  H(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    eM(p.x, f.x, a.x, r),
                    eM(p.y, f.y, a.y, r),
                    n &&
                      ((u = this.relativeTarget),
                      (h = n),
                      es(u.x, h.x) && es(u.y, h.y)) &&
                      (this.isProjectionDirty = !1),
                    n || (n = te()),
                    t3(n, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, n, r, i, s) {
                    i
                      ? ((t.opacity = (0, U.k)(
                          0,
                          void 0 !== n.opacity ? n.opacity : 1,
                          t4(r)
                        )),
                        (t.opacityExit = (0, U.k)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          t5(r)
                        )))
                      : s &&
                        (t.opacity = (0, U.k)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== n.opacity ? n.opacity : 1,
                          r
                        ));
                    for (let i = 0; i < tJ; i++) {
                      let s = `border${tZ[i]}Radius`,
                        o = t1(e, s),
                        a = t1(n, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || t0(o) === t0(a)
                          ? ((t[s] = Math.max((0, U.k)(t$(o), t$(a), r), 0)),
                            (tm.KN.test(a) || tm.KN.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || n.rotate) &&
                      (t.rotate = (0, U.k)(e.rotate || 0, n.rotate || 0, r));
                  })(s, i, this.latestValues, r, d, c)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = r);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, M.WG)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = M.Gt.update(() => {
                (tD.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, n) {
                    let r = (0, tW.S)(0) ? 0 : (0, tU.OQ)(0);
                    return r.start((0, ty.f)("", r, 1e3, n)), r.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: n,
                layout: r,
                latestValues: i,
              } = t;
            if (e && n && r) {
              if (
                this !== t &&
                this.layout &&
                r &&
                eF(
                  this.options.animationType,
                  this.layout.layoutBox,
                  r.layoutBox
                )
              ) {
                n = this.target || te();
                let e = W(this.layout.layoutBox.x);
                (n.x.min = t.target.x.min), (n.x.max = n.x.min + e);
                let r = W(this.layout.layoutBox.y);
                (n.y.min = t.target.y.min), (n.y.max = n.y.min + r);
              }
              t3(e, n),
                tp(e, i),
                G(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  i
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new ec()),
              this.sharedNodes.get(t).add(e);
            let n = e.options.initialPromotionConfig;
            e.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity:
                n && n.shouldPreserveFollowOpacity
                  ? n.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: n,
          } = {}) {
            let r = this.getStack();
            r && r.promote(this, n),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: n } = t;
            if (
              ((n.z ||
                n.rotate ||
                n.rotateX ||
                n.rotateY ||
                n.rotateZ ||
                n.skewX ||
                n.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let r = {};
            n.z && ey("z", t, r, this.animationValues);
            for (let e = 0; e < ep.length; e++)
              ey(`rotate${ep[e]}`, t, r, this.animationValues),
                ey(`skew${ep[e]}`, t, r, this.animationValues);
            for (let e in (t.render(), r))
              t.setStaticValue(e, r[e]),
                this.animationValues && (this.animationValues[e] = r[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, n;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return ef;
            let r = { visibility: "" },
              i = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (r.opacity = ""),
                (r.pointerEvents =
                  tY(null == t ? void 0 : t.pointerEvents) || ""),
                (r.transform = i ? i(this.latestValues, "") : "none"),
                r
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    tY(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !to(this.latestValues) &&
                  ((e.transform = i ? i({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (r.transform = (function (t, e, n) {
                let r = "",
                  i = t.x.translate / e.x,
                  s = t.y.translate / e.y,
                  o = (null == n ? void 0 : n.z) || 0;
                if (
                  ((i || s || o) &&
                    (r = `translate3d(${i}px, ${s}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (r += `scale(${1 / e.x}, ${1 / e.y}) `),
                  n)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: i,
                    rotateY: s,
                    skewX: o,
                    skewY: a,
                  } = n;
                  t && (r = `perspective(${t}px) ${r}`),
                    e && (r += `rotate(${e}deg) `),
                    i && (r += `rotateX(${i}deg) `),
                    s && (r += `rotateY(${s}deg) `),
                    o && (r += `skewX(${o}deg) `),
                    a && (r += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (r += `scale(${a}, ${l})`),
                  r || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              i && (r.transform = i(o, r.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((r.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (r.opacity =
                  s === this
                    ? null !==
                        (n =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== n
                      ? n
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (r.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            tL)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: n } = tL[t],
                i = "none" === r.transform ? o[t] : e(o[t], s);
              if (n) {
                let t = n.length;
                for (let e = 0; e < t; e++) r[n[e]] = i;
              } else r[t] = i;
            }
            return (
              this.options.layoutId &&
                (r.pointerEvents =
                  s === this
                    ? tY(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              r
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(eP),
              this.root.sharedNodes.clear();
          }
        };
      }
      function eg(t) {
        t.updateLayout();
      }
      function eb(t) {
        var e;
        let n =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: r } = t.layout,
            { animationType: i } = t.options,
            s = n.source !== t.layout.source;
          "size" === i
            ? tn((t) => {
                let r = s ? n.measuredBox[t] : n.layoutBox[t],
                  i = W(r);
                (r.min = e[t].min), (r.max = r.min + i);
              })
            : eF(i, n.layoutBox, e) &&
              tn((r) => {
                let i = s ? n.measuredBox[r] : n.layoutBox[r],
                  o = W(e[r]);
                (i.max = i.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[r].max = t.relativeTarget[r].min + o));
              });
          let o = $();
          G(o, e, n.layoutBox);
          let a = $();
          s
            ? G(a, t.applyTransform(r, !0), n.measuredBox)
            : G(a, e, n.layoutBox);
          let l = !ei(o),
            u = !1;
          if (!t.resumeFrom) {
            let r = t.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
              let { snapshot: i, layout: s } = r;
              if (i && s) {
                let o = te();
                H(o, n.layoutBox, i.layoutBox);
                let a = te();
                H(a, e, s.layoutBox),
                  ea(o, a) || (u = !0),
                  r.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = r));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: n,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function ew(t) {
        eh && ed.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function ex(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function eA(t) {
        t.clearSnapshot();
      }
      function eP(t) {
        t.clearMeasurements();
      }
      function eS(t) {
        t.isLayoutDirty = !1;
      }
      function eT(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function eE(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function ek(t) {
        t.resolveTargetDelta();
      }
      function eC(t) {
        t.calcProjection();
      }
      function eR(t) {
        t.resetSkewAndRotation();
      }
      function eD(t) {
        t.removeLeadSnapshot();
      }
      function ej(t, e, n) {
        (t.translate = (0, U.k)(e.translate, 0, n)),
          (t.scale = (0, U.k)(e.scale, 1, n)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function eM(t, e, n, r) {
        (t.min = (0, U.k)(e.min, n.min, r)),
          (t.max = (0, U.k)(e.max, n.max, r));
      }
      function eO(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let eL = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        e_ = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        eV = e_("applewebkit/") && !e_("chrome/") ? Math.round : A.l;
      function eI(t) {
        (t.min = eV(t.min)), (t.max = eV(t.max));
      }
      function eF(t, e, n) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(el(e) - el(n))))
        );
      }
      function eB(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let eU = ev({
          attachResizeListener: (t, e) => E(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        eW = { current: void 0 },
        eN = ev({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!eW.current) {
              let t = new eU({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (eW.current = t);
            }
            return eW.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function eG(t, e, n) {
        let { props: r } = t;
        t.animationState &&
          r.whileHover &&
          t.animationState.setActive("whileHover", "Start" === n);
        let i = r["onHover" + n];
        i && M.Gt.postRender(() => i(e, k(e)));
      }
      class eq extends g {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (0, S.PT)(
              t,
              (t) => (eG(this.node, t, "Start"), (t) => eG(this.node, t, "End"))
            ));
        }
        unmount() {}
      }
      class ez extends g {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, j.F)(
            E(this.node.current, "focus", () => this.onFocus()),
            E(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      function eH(t, e, n) {
        let { props: r } = t;
        t.animationState &&
          r.whileTap &&
          t.animationState.setActive("whileTap", "Start" === n);
        let i = r["onTap" + ("End" === n ? "" : n)];
        i && M.Gt.postRender(() => i(e, k(e)));
      }
      class eK extends g {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (0, S.c$)(
              t,
              (t) => (
                eH(this.node, t, "Start"),
                (t, { success: e }) => eH(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget }
            ));
        }
        unmount() {}
      }
      let eX = new WeakMap(),
        eY = new WeakMap(),
        eQ = (t) => {
          let e = eX.get(t.target);
          e && e(t);
        },
        eZ = (t) => {
          t.forEach(eQ);
        },
        eJ = { some: 0, all: 1 };
      class e$ extends g {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: n, amount: r = "some", once: i } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: n,
              threshold: "number" == typeof r ? r : eJ[r],
            };
          return (function (t, e, n) {
            let r = (function ({ root: t, ...e }) {
              let n = t || document;
              eY.has(n) || eY.set(n, {});
              let r = eY.get(n),
                i = JSON.stringify(e);
              return (
                r[i] ||
                  (r[i] = new IntersectionObserver(eZ, { root: t, ...e })),
                r[i]
              );
            })(e);
            return (
              eX.set(t, n),
              r.observe(t),
              () => {
                eX.delete(t), r.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), i && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: n, onViewportLeave: r } =
                this.node.getProps(),
              s = e ? n : r;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (n) => t[n] !== e[n];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let e0 = (0, tE.createContext)({ strict: !1 });
      var e1 = n(5446);
      let e4 = (0, tE.createContext)({});
      function e5(t) {
        return r(t.animate) || d.some((e) => l(t[e]));
      }
      function e2(t) {
        return !!(e5(t) || t.variants);
      }
      function e6(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var e3 = n(8288);
      let e8 = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        e9 = {};
      for (let t in e8) e9[t] = { isEnabled: (e) => e8[t].some((t) => !!e[t]) };
      let e7 = Symbol.for("motionComponentSymbol");
      var nt = n(6719),
        ne = n(5128),
        nn = n(2392);
      let nr = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function ni(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (nr.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      var ns = n(3141),
        no = n(8601);
      let na = (t) => (e, n) => {
        let i = (0, tE.useContext)(e4),
          s = (0, tE.useContext)(nt.t),
          o = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onUpdate: n,
              },
              i,
              s,
              o
            ) {
              let a = {
                latestValues: (function (t, e, n, i) {
                  let s = {},
                    o = i(t, {});
                  for (let t in o) s[t] = tY(o[t]);
                  let { initial: a, animate: l } = t,
                    u = e5(t),
                    c = e2(t);
                  e &&
                    c &&
                    !u &&
                    !1 !== t.inherit &&
                    (void 0 === a && (a = e.initial),
                    void 0 === l && (l = e.animate));
                  let d = !!n && !1 === n.initial,
                    h = (d = d || !1 === a) ? l : a;
                  if (h && "boolean" != typeof h && !r(h)) {
                    let e = Array.isArray(h) ? h : [h];
                    for (let n = 0; n < e.length; n++) {
                      let r = (0, ns.a)(t, e[n]);
                      if (r) {
                        let { transitionEnd: t, transition: e, ...n } = r;
                        for (let t in n) {
                          let e = n[t];
                          if (Array.isArray(e)) {
                            let t = d ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (s[t] = e);
                        }
                        for (let e in t) s[e] = t[e];
                      }
                    }
                  }
                  return s;
                })(i, s, o, t),
                renderState: e(),
              };
              return (
                n &&
                  ((a.onMount = (t) => n({ props: i, current: t, ...a })),
                  (a.onUpdate = (t) => n(t))),
                a
              );
            })(t, e, i, s);
        return n ? o() : (0, no.M)(o);
      };
      var nl = n(2443),
        nu = n(568);
      let nc = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var nd = n(6763);
      let nh = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        np = nl.U.length;
      function nf(t, e, n) {
        let { style: r, vars: i, transformOrigin: s } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let n = e[t];
          if (nl.f.has(t)) {
            o = !0;
            continue;
          }
          if ((0, nu.j)(t)) {
            i[t] = n;
            continue;
          }
          {
            let e = nc(n, nd.W[t]);
            t.startsWith("origin") ? ((a = !0), (s[t] = e)) : (r[t] = e);
          }
        }
        if (
          (!e.transform &&
            (o || n
              ? (r.transform = (function (t, e, n) {
                  let r = "",
                    i = !0;
                  for (let s = 0; s < np; s++) {
                    let o = nl.U[s],
                      a = t[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof a
                          ? a === (o.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(a)) ||
                      n
                    ) {
                      let t = nc(a, nd.W[o]);
                      if (!l) {
                        i = !1;
                        let e = nh[o] || o;
                        r += `${e}(${t}) `;
                      }
                      n && (e[o] = t);
                    }
                  }
                  return (
                    (r = r.trim()),
                    n ? (r = n(e, i ? "" : r)) : i && (r = "none"),
                    r
                  );
                })(e, t.transform, n))
              : r.transform && (r.transform = "none")),
          a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: n = 0 } = s;
          r.transformOrigin = `${t} ${e} ${n}`;
        }
      }
      let nm = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        ny = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function nv(t, e, n) {
        return "string" == typeof t ? t : tm.px.transform(e + n * t);
      }
      function ng(
        t,
        {
          attrX: e,
          attrY: n,
          attrScale: r,
          originX: i,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        c,
        d
      ) {
        if ((nf(t, u, d), c)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: h, style: p, dimensions: f } = t;
        h.transform && (f && (p.transform = h.transform), delete h.transform),
          f &&
            (void 0 !== i || void 0 !== s || p.transform) &&
            (p.transformOrigin = (function (t, e, n) {
              let r = nv(e, t.x, t.width),
                i = nv(n, t.y, t.height);
              return `${r} ${i}`;
            })(f, void 0 !== i ? i : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (h.x = e),
          void 0 !== n && (h.y = n),
          void 0 !== r && (h.scale = r),
          void 0 !== o &&
            (function (t, e, n = 1, r = 0, i = !0) {
              t.pathLength = 1;
              let s = i ? nm : ny;
              t[s.offset] = tm.px.transform(-r);
              let o = tm.px.transform(e),
                a = tm.px.transform(n);
              t[s.array] = `${o} ${a}`;
            })(h, o, a, l, !1);
      }
      let nb = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        nw = () => ({ ...nb(), attrs: {} }),
        nx = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      var nA = n(8062);
      function nP(t, { style: e, vars: n }, r, i) {
        for (let s in (Object.assign(t.style, e, i && i.getProjectionStyles(r)),
        n))
          t.style.setProperty(s, n[s]);
      }
      let nS = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function nT(t, e, n, r) {
        for (let n in (nP(t, e, void 0, r), e.attrs))
          t.setAttribute(nS.has(n) ? n : (0, nA.I)(n), e.attrs[n]);
      }
      function nE(t, { layout: e, layoutId: n }) {
        return (
          nl.f.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== n) && (!!tL[t] || "opacity" === t))
        );
      }
      function nk(t, e, n) {
        var r;
        let { style: i } = t,
          s = {};
        for (let o in i)
          ((0, tW.S)(i[o]) ||
            (e.style && (0, tW.S)(e.style[o])) ||
            nE(o, t) ||
            (null === (r = null == n ? void 0 : n.getValue(o)) || void 0 === r
              ? void 0
              : r.liveStyle) !== void 0) &&
            (s[o] = i[o]);
        return s;
      }
      function nC(t, e, n) {
        let r = nk(t, e, n);
        for (let n in t)
          ((0, tW.S)(t[n]) || (0, tW.S)(e[n])) &&
            (r[
              -1 !== nl.U.indexOf(n)
                ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
                : n
            ] = t[n]);
        return r;
      }
      let nR = ["x", "y", "width", "height", "cx", "cy", "r"],
        nD = {
          useVisualState: na({
            scrapeMotionValuesFromProps: nC,
            createRenderState: nw,
            onUpdate: ({
              props: t,
              prevProps: e,
              current: n,
              renderState: r,
              latestValues: i,
            }) => {
              if (!n) return;
              let s = !!t.drag;
              if (!s) {
                for (let t in i)
                  if (nl.f.has(t)) {
                    s = !0;
                    break;
                  }
              }
              if (!s) return;
              let o = !e;
              if (e)
                for (let n = 0; n < nR.length; n++) {
                  let r = nR[n];
                  t[r] !== e[r] && (o = !0);
                }
              o &&
                M.Gt.read(() => {
                  !(function (t, e) {
                    try {
                      e.dimensions =
                        "function" == typeof t.getBBox
                          ? t.getBBox()
                          : t.getBoundingClientRect();
                    } catch (t) {
                      e.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                    }
                  })(n, r),
                    M.Gt.render(() => {
                      ng(r, i, nx(n.tagName), t.transformTemplate), nT(n, r);
                    });
                });
            },
          }),
        },
        nj = {
          useVisualState: na({
            scrapeMotionValuesFromProps: nk,
            createRenderState: nb,
          }),
        };
      function nM(t, e, n) {
        for (let r in e) (0, tW.S)(e[r]) || nE(r, n) || (t[r] = e[r]);
      }
      let nO = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function nL(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          nO.has(t)
        );
      }
      let n_ = (t) => !nL(t);
      try {
        !(function (t) {
          t && (n_ = (e) => (e.startsWith("on") ? !nL(e) : t(e)));
        })(require("@emotion/is-prop-valid").default);
      } catch (t) {}
      var nV = n(9652),
        nI = n(7312);
      let nF = { current: null },
        nB = { current: !1 };
      var nU = n(5320),
        nW = n(7739),
        nN = n(5141),
        nG = n(1969);
      let nq = [...nN.T, nW.y, tO.f],
        nz = (t) => nq.find((0, nG.w)(t)),
        nH = new WeakMap();
      var nK = n(4835);
      let nX = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ];
      class nY {
        scrapeMotionValuesFromProps(t, e, n) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: n,
            reducedMotionConfig: r,
            blockInitialAnimation: i,
            visualState: s,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = nK.h),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = tG.k.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                M.Gt.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l, onUpdate: u } = s;
          (this.onUpdate = u),
            (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = n),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.options = o),
            (this.blockInitialAnimation = !!i),
            (this.isControllingVariants = e5(e)),
            (this.isVariantNode = e2(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in d) {
            let e = d[t];
            void 0 !== a[t] && (0, tW.S)(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            nH.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            nB.current ||
              (function () {
                if (((nB.current = !0), e3.B)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (nF.current = t.matches);
                    t.addListener(e), e();
                  } else nF.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || nF.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (nH.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, M.WG)(this.notifyUpdate),
          (0, M.WG)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let n;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let r = nl.f.has(t),
            i = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && M.Gt.preRender(this.notifyUpdate),
                r && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (n = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              i(), s(), n && n(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in e9) {
            let e = e9[t];
            if (!e) continue;
            let { isEnabled: n, Feature: r } = e;
            if (
              (!this.features[t] &&
                r &&
                n(this.props) &&
                (this.features[t] = new r(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : te();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < nX.length; e++) {
            let n = nX[e];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](),
              delete this.propEventSubscriptions[n]);
            let r = t["on" + n];
            r && (this.propEventSubscriptions[n] = this.on(n, r));
          }
          (this.prevMotionValues = (function (t, e, n) {
            for (let r in e) {
              let i = e[r],
                s = n[r];
              if ((0, tW.S)(i)) t.addValue(r, i);
              else if ((0, tW.S)(s)) t.addValue(r, (0, tU.OQ)(i, { owner: t }));
              else if (s !== i) {
                if (t.hasValue(r)) {
                  let e = t.getValue(r);
                  !0 === e.liveStyle ? e.jump(i) : e.hasAnimated || e.set(i);
                } else {
                  let e = t.getStaticValue(r);
                  t.addValue(r, (0, tU.OQ)(void 0 !== e ? e : i, { owner: t }));
                }
              }
            }
            for (let r in n) void 0 === e[r] && t.removeValue(r);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue(),
            this.onUpdate && this.onUpdate(this);
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let n = this.values.get(t);
          e !== n &&
            (n && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let n = this.values.get(t);
          return (
            void 0 === n &&
              void 0 !== e &&
              ((n = (0, tU.OQ)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, n)),
            n
          );
        }
        readValue(t, e) {
          var n;
          let r =
            void 0 === this.latestValues[t] && this.current
              ? null !== (n = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== n
                ? n
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != r &&
              ("string" == typeof r && ((0, nV.i)(r) || (0, nI.$)(r))
                ? (r = parseFloat(r))
                : !nz(r) && tO.f.test(e) && (r = (0, nU.J)(t, e)),
              this.setBaseTarget(t, (0, tW.S)(r) ? r.get() : r)),
            (0, tW.S)(r) ? r.get() : r
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let n;
          let { initial: r } = this.props;
          if ("string" == typeof r || "object" == typeof r) {
            let i = (0, ns.a)(
              this.props,
              r,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            i && (n = i[t]);
          }
          if (r && void 0 !== n) return n;
          let i = this.getBaseTargetFromProps(this.props, t);
          return void 0 === i || (0, tW.S)(i)
            ? void 0 !== this.initialValues[t] && void 0 === n
              ? void 0
              : this.baseTarget[t]
            : i;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new tK.v()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      var nQ = n(4721);
      class nZ extends nY {
        constructor() {
          super(...arguments), (this.KeyframeResolver = nQ.K);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: n }) {
          delete e[t], delete n[t];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, tW.S)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      var nJ = n(1619);
      class n$ extends nZ {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = nP);
        }
        readValueFromInstance(t, e) {
          if (nl.f.has(e)) {
            let t = (0, nJ.D)(e);
            return (t && t.default) || 0;
          }
          {
            let n = window.getComputedStyle(t),
              r = ((0, nu.j)(e) ? n.getPropertyValue(e) : n[e]) || 0;
            return "string" == typeof r ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return tf(t, e);
        }
        build(t, e, n) {
          nf(t, e, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return nk(t, e, n);
        }
      }
      class n0 extends nZ {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = te);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (nl.f.has(e)) {
            let t = (0, nJ.D)(e);
            return (t && t.default) || 0;
          }
          return (e = nS.has(e) ? e : (0, nA.I)(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return nC(t, e, n);
        }
        build(t, e, n) {
          ng(t, e, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(t, e, n, r) {
          nT(t, e, n, r);
        }
        mount(t) {
          (this.isSVGTag = nx(t.tagName)), super.mount(t);
        }
      }
      let n1 = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (n, r) =>
            "create" === r ? t : (e.has(r) || e.set(r, t(r)), e.get(r)),
        });
      })(
        ((i = {
          animation: { Feature: b },
          exit: { Feature: x },
          inView: { Feature: e$ },
          tap: { Feature: eK },
          focus: { Feature: ez },
          hover: { Feature: eq },
          pan: { Feature: tS },
          drag: { Feature: tA, ProjectionNode: eN, MeasureLayout: tF },
          layout: { ProjectionNode: eN, MeasureLayout: tF },
        }),
        (s = (t, e) =>
          ni(t)
            ? new n0(e)
            : new n$(e, { allowProjection: t !== tE.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function ({
            preloadedFeatures: t,
            createVisualElement: e,
            useRender: n,
            useVisualState: r,
            Component: i,
          }) {
            var s, o;
            function a(t, s) {
              var o;
              let a;
              let u = {
                  ...(0, tE.useContext)(e1.Q),
                  ...t,
                  layoutId: (function ({ layoutId: t }) {
                    let e = (0, tE.useContext)(tC.L).id;
                    return e && void 0 !== t ? e + "-" + t : t;
                  })(t),
                },
                { isStatic: c } = u,
                d = (function (t) {
                  let { initial: e, animate: n } = (function (t, e) {
                    if (e5(t)) {
                      let { initial: e, animate: n } = t;
                      return {
                        initial: !1 === e || l(e) ? e : void 0,
                        animate: l(n) ? n : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, tE.useContext)(e4));
                  return (0, tE.useMemo)(
                    () => ({ initial: e, animate: n }),
                    [e6(e), e6(n)]
                  );
                })(t),
                h = r(t, c);
              if (!c && e3.B) {
                (0, tE.useContext)(e0).strict;
                let t = (function (t) {
                  let { drag: e, layout: n } = e9;
                  if (!e && !n) return {};
                  let r = { ...e, ...n };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == n ? void 0 : n.isEnabled(t))
                        ? r.MeasureLayout
                        : void 0,
                    ProjectionNode: r.ProjectionNode,
                  };
                })(u);
                (a = t.MeasureLayout),
                  (d.visualElement = (function (t, e, n, r, i) {
                    var s, o;
                    let { visualElement: a } = (0, tE.useContext)(e4),
                      l = (0, tE.useContext)(e0),
                      u = (0, tE.useContext)(nt.t),
                      c = (0, tE.useContext)(e1.Q).reducedMotion,
                      d = (0, tE.useRef)(null);
                    (r = r || l.renderer),
                      !d.current &&
                        r &&
                        (d.current = r(t, {
                          visualState: e,
                          parent: a,
                          props: n,
                          presenceContext: u,
                          blockInitialAnimation: !!u && !1 === u.initial,
                          reducedMotionConfig: c,
                        }));
                    let h = d.current,
                      p = (0, tE.useContext)(tR);
                    h &&
                      !h.projection &&
                      i &&
                      ("html" === h.type || "svg" === h.type) &&
                      (function (t, e, n, r) {
                        let {
                          layoutId: i,
                          layout: s,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = e;
                        (t.projection = new n(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: i,
                            layout: s,
                            alwaysMeasureLayout: !!o || (a && F(a)),
                            visualElement: t,
                            animationType: "string" == typeof s ? s : "both",
                            initialPromotionConfig: r,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(d.current, n, i, p);
                    let f = (0, tE.useRef)(!1);
                    (0, tE.useInsertionEffect)(() => {
                      h && f.current && h.update(n, u);
                    });
                    let m = n[nn.n],
                      y = (0, tE.useRef)(
                        !!m &&
                          !(null === (s = window.MotionHandoffIsComplete) ||
                          void 0 === s
                            ? void 0
                            : s.call(window, m)) &&
                          (null === (o = window.MotionHasOptimisedAnimation) ||
                          void 0 === o
                            ? void 0
                            : o.call(window, m))
                      );
                    return (
                      (0, ne.E)(() => {
                        h &&
                          ((f.current = !0),
                          (window.MotionIsMounted = !0),
                          h.updateFeatures(),
                          t_.render(h.render),
                          y.current &&
                            h.animationState &&
                            h.animationState.animateChanges());
                      }),
                      (0, tE.useEffect)(() => {
                        h &&
                          (!y.current &&
                            h.animationState &&
                            h.animationState.animateChanges(),
                          y.current &&
                            (queueMicrotask(() => {
                              var t;
                              null ===
                                (t = window.MotionHandoffMarkAsComplete) ||
                                void 0 === t ||
                                t.call(window, m);
                            }),
                            (y.current = !1)));
                      }),
                      h
                    );
                  })(i, h, u, e, t.ProjectionNode));
              }
              return (0, tT.jsxs)(e4.Provider, {
                value: d,
                children: [
                  a && d.visualElement
                    ? (0, tT.jsx)(a, { visualElement: d.visualElement, ...u })
                    : null,
                  n(
                    i,
                    t,
                    ((o = d.visualElement),
                    (0, tE.useCallback)(
                      (t) => {
                        t && h.onMount && h.onMount(t),
                          o && (t ? o.mount(t) : o.unmount()),
                          s &&
                            ("function" == typeof s
                              ? s(t)
                              : F(s) && (s.current = t));
                      },
                      [o]
                    )),
                    h,
                    c,
                    d.visualElement
                  ),
                ],
              });
            }
            t &&
              (function (t) {
                for (let e in t) e9[e] = { ...e9[e], ...t[e] };
              })(t),
              (a.displayName = `motion.${
                "string" == typeof i
                  ? i
                  : `create(${
                      null !==
                        (o =
                          null !== (s = i.displayName) && void 0 !== s
                            ? s
                            : i.name) && void 0 !== o
                        ? o
                        : ""
                    })`
              }`);
            let u = (0, tE.forwardRef)(a);
            return (u[e7] = i), u;
          })({
            ...(ni(t) ? nD : nj),
            preloadedFeatures: i,
            useRender: (function (t = !1) {
              return (e, n, r, { latestValues: i }, s) => {
                let o = (
                    ni(e)
                      ? function (t, e, n, r) {
                          let i = (0, tE.useMemo)(() => {
                            let n = nw();
                            return (
                              ng(n, e, nx(r), t.transformTemplate),
                              { ...n.attrs, style: { ...n.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            nM(e, t.style, t), (i.style = { ...e, ...i.style });
                          }
                          return i;
                        }
                      : function (t, e) {
                          let n = {},
                            r = (function (t, e) {
                              let n = t.style || {},
                                r = {};
                              return (
                                nM(r, n, t),
                                Object.assign(
                                  r,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, tE.useMemo)(() => {
                                      let n = nb();
                                      return (
                                        nf(n, e, t),
                                        Object.assign({}, n.vars, n.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                r
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((n.draggable = !1),
                              (r.userSelect =
                                r.WebkitUserSelect =
                                r.WebkitTouchCallout =
                                  "none"),
                              (r.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (n.tabIndex = 0),
                            (n.style = r),
                            n
                          );
                        }
                  )(n, i, s, e),
                  a = (function (t, e, n) {
                    let r = {};
                    for (let i in t)
                      ("values" !== i || "object" != typeof t.values) &&
                        (n_(i) ||
                          (!0 === n && nL(i)) ||
                          (!e && !nL(i)) ||
                          (t.draggable && i.startsWith("onDrag"))) &&
                        (r[i] = t[i]);
                    return r;
                  })(n, "string" == typeof e, t),
                  l = e !== tE.Fragment ? { ...a, ...o, ref: r } : {},
                  { children: u } = n,
                  c = (0, tE.useMemo)(() => ((0, tW.S)(u) ? u.get() : u), [u]);
                return (0, tE.createElement)(e, { ...l, children: c });
              };
            })(e),
            createVisualElement: s,
            Component: t,
          });
        })
      );
    },
    4721: (t, e, n) => {
      "use strict";
      n.d(e, { K: () => m });
      var r = n(7312),
        i = n(5972),
        s = n(615),
        o = n(5320);
      let a = new Set(["auto", "none", "0"]);
      var l = n(4835),
        u = n(8104),
        c = n(9652),
        d = n(568);
      let h = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var p = n(3420),
        f = n(5141);
      class m extends l.h {
        constructor(t, e, n, r, i) {
          super(t, e, n, r, i, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: n } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let n = 0; n < t.length; n++) {
            let r = t[n];
            if ("string" == typeof r && ((r = r.trim()), (0, d.p)(r))) {
              let i = (function t(e, n, r = 1) {
                (0, u.V)(
                  r <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [i, s] = (function (t) {
                  let e = h.exec(t);
                  if (!e) return [,];
                  let [, n, r, i] = e;
                  return [`--${null != n ? n : r}`, i];
                })(e);
                if (!i) return;
                let o = window.getComputedStyle(n).getPropertyValue(i);
                if (o) {
                  let t = o.trim();
                  return (0, c.i)(t) ? parseFloat(t) : t;
                }
                return (0, d.p)(s) ? t(s, n, r + 1) : s;
              })(r, e.current);
              void 0 !== i && (t[n] = i),
                n === t.length - 1 && (this.finalKeyframe = r);
            }
          }
          if ((this.resolveNoneKeyframes(), !i.$.has(n) || 2 !== t.length))
            return;
          let [r, s] = t,
            o = (0, f.n)(r),
            a = (0, f.n)(s);
          if (o !== a) {
            if ((0, p.E4)(o) && (0, p.E4)(a))
              for (let e = 0; e < t.length; e++) {
                let n = t[e];
                "string" == typeof n && (t[e] = parseFloat(n));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            n = [];
          for (let e = 0; e < t.length; e++) {
            var i;
            ("number" == typeof (i = t[e])
              ? 0 === i
              : null === i || "none" === i || "0" === i || (0, r.$)(i)) &&
              n.push(e);
          }
          n.length &&
            (function (t, e, n) {
              let r,
                i = 0;
              for (; i < t.length && !r; ) {
                let e = t[i];
                "string" == typeof e &&
                  !a.has(e) &&
                  (0, s.V)(e).values.length &&
                  (r = t[i]),
                  i++;
              }
              if (r && n) for (let i of e) t[i] = (0, o.J)(n, r);
            })(t, n, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: n } = this;
          if (!t || !t.current) return;
          "height" === n && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = p.Hr[n](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let r = e[e.length - 1];
          void 0 !== r && t.getValue(n, r).jump(r, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: n, unresolvedKeyframes: r } = this;
          if (!e || !e.current) return;
          let i = e.getValue(n);
          i && i.jump(this.measuredOrigin, !1);
          let s = r.length - 1,
            o = r[s];
          (r[s] = p.Hr[n](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, n]) => {
                e.getValue(t).set(n);
              }),
            this.resolveNoneKeyframes();
        }
      }
    },
    8062: (t, e, n) => {
      "use strict";
      n.d(e, { I: () => r });
      let r = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    568: (t, e, n) => {
      "use strict";
      n.d(e, { j: () => i, p: () => o });
      let r = (t) => (e) => "string" == typeof e && e.startsWith(t),
        i = r("--"),
        s = r("var(--"),
        o = (t) => !!s(t) && a.test(t.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    3420: (t, e, n) => {
      "use strict";
      n.d(e, { E4: () => o, Hr: () => h, W9: () => d });
      var r = n(2944),
        i = n(5269),
        s = n(2443);
      let o = (t) => t === r.ai || t === i.px,
        a = (t, e) => parseFloat(t.split(", ")[e]),
        l =
          (t, e) =>
          (n, { transform: r }) => {
            if ("none" === r || !r) return 0;
            let i = r.match(/^matrix3d\((.+)\)$/u);
            if (i) return a(i[1], e);
            {
              let e = r.match(/^matrix\((.+)\)$/u);
              return e ? a(e[1], t) : 0;
            }
          },
        u = new Set(["x", "y", "z"]),
        c = s.U.filter((t) => !u.has(t));
      function d(t) {
        let e = [];
        return (
          c.forEach((n) => {
            let r = t.getValue(n);
            void 0 !== r &&
              (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
          }),
          e
        );
      }
      let h = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(n),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(n),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: l(4, 13),
        y: l(5, 14),
      };
      (h.translateX = h.x), (h.translateY = h.y);
    },
    5320: (t, e, n) => {
      "use strict";
      n.d(e, { J: () => o });
      var r = n(615),
        i = n(6044),
        s = n(1619);
      function o(t, e) {
        let n = (0, s.D)(t);
        return (
          n !== i.p && (n = r.f),
          n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
        );
      }
    },
    1619: (t, e, n) => {
      "use strict";
      n.d(e, { D: () => o });
      var r = n(7739),
        i = n(6044);
      let s = {
          ...n(6763).W,
          color: r.y,
          backgroundColor: r.y,
          outlineColor: r.y,
          fill: r.y,
          stroke: r.y,
          borderColor: r.y,
          borderTopColor: r.y,
          borderRightColor: r.y,
          borderBottomColor: r.y,
          borderLeftColor: r.y,
          filter: i.p,
          WebkitFilter: i.p,
        },
        o = (t) => s[t];
    },
    5141: (t, e, n) => {
      "use strict";
      n.d(e, { T: () => o, n: () => a });
      var r = n(2944),
        i = n(5269),
        s = n(1969);
      let o = [
          r.ai,
          i.px,
          i.KN,
          i.uj,
          i.vw,
          i.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        a = (t) => o.find((0, s.w)(t));
    },
    6763: (t, e, n) => {
      "use strict";
      n.d(e, { W: () => l });
      var r = n(2944),
        i = n(5269);
      let s = {
          borderWidth: i.px,
          borderTopWidth: i.px,
          borderRightWidth: i.px,
          borderBottomWidth: i.px,
          borderLeftWidth: i.px,
          borderRadius: i.px,
          radius: i.px,
          borderTopLeftRadius: i.px,
          borderTopRightRadius: i.px,
          borderBottomRightRadius: i.px,
          borderBottomLeftRadius: i.px,
          width: i.px,
          maxWidth: i.px,
          height: i.px,
          maxHeight: i.px,
          top: i.px,
          right: i.px,
          bottom: i.px,
          left: i.px,
          padding: i.px,
          paddingTop: i.px,
          paddingRight: i.px,
          paddingBottom: i.px,
          paddingLeft: i.px,
          margin: i.px,
          marginTop: i.px,
          marginRight: i.px,
          marginBottom: i.px,
          marginLeft: i.px,
          backgroundPositionX: i.px,
          backgroundPositionY: i.px,
        },
        o = {
          rotate: i.uj,
          rotateX: i.uj,
          rotateY: i.uj,
          rotateZ: i.uj,
          scale: r.hs,
          scaleX: r.hs,
          scaleY: r.hs,
          scaleZ: r.hs,
          skew: i.uj,
          skewX: i.uj,
          skewY: i.uj,
          distance: i.px,
          translateX: i.px,
          translateY: i.px,
          translateZ: i.px,
          x: i.px,
          y: i.px,
          z: i.px,
          perspective: i.px,
          transformPerspective: i.px,
          opacity: r.X4,
          originX: i.gQ,
          originY: i.gQ,
          originZ: i.px,
        },
        a = { ...r.ai, transform: Math.round },
        l = {
          ...s,
          ...o,
          zIndex: a,
          size: i.px,
          fillOpacity: r.X4,
          strokeOpacity: r.X4,
          numOctaves: a,
        };
    },
    1969: (t, e, n) => {
      "use strict";
      n.d(e, { w: () => r });
      let r = (t) => (e) => e.test(t);
    },
    5972: (t, e, n) => {
      "use strict";
      n.d(e, { $: () => r });
      let r = new Set([
        "width",
        "height",
        "top",
        "left",
        "right",
        "bottom",
        ...n(2443).U,
      ]);
    },
    2443: (t, e, n) => {
      "use strict";
      n.d(e, { U: () => r, f: () => i });
      let r = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        i = new Set(r);
    },
    4835: (t, e, n) => {
      "use strict";
      n.d(e, { h: () => d, q: () => c });
      var r = n(3420),
        i = n(104);
      let s = new Set(),
        o = !1,
        a = !1;
      function l() {
        if (a) {
          let t = Array.from(s).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            n = new Map();
          e.forEach((t) => {
            let e = (0, r.W9)(t);
            e.length && (n.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = n.get(t);
              e &&
                e.forEach(([e, n]) => {
                  var r;
                  null === (r = t.getValue(e)) || void 0 === r || r.set(n);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (a = !1), (o = !1), s.forEach((t) => t.complete()), s.clear();
      }
      function u() {
        s.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (a = !0);
        });
      }
      function c() {
        u(), l();
      }
      class d {
        constructor(t, e, n, r, i, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = n),
            (this.motionValue = r),
            (this.element = i),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (s.add(this),
                o || ((o = !0), i.Gt.read(u), i.Gt.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: n,
            motionValue: r,
          } = this;
          for (let i = 0; i < t.length; i++)
            if (null === t[i]) {
              if (0 === i) {
                let i = null == r ? void 0 : r.get(),
                  s = t[t.length - 1];
                if (void 0 !== i) t[0] = i;
                else if (n && e) {
                  let r = n.readValue(e, s);
                  null != r && (t[0] = r);
                }
                void 0 === t[0] && (t[0] = s), r && void 0 === i && r.set(t[0]);
              } else t[i] = t[i - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            s.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), s.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    4737: (t, e, n) => {
      "use strict";
      n.d(e, { K: () => i });
      var r = n(3141);
      function i(t, e, n) {
        let i = t.getProps();
        return (0, r.a)(i, e, void 0 !== n ? n : i.custom, t);
      }
    },
    3141: (t, e, n) => {
      "use strict";
      function r(t, e, n, r) {
        if (
          "function" == typeof e ||
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [i, s] = (function (t) {
            let e = [{}, {}];
            return (
              null == t ||
                t.values.forEach((t, n) => {
                  (e[0][n] = t.get()), (e[1][n] = t.getVelocity());
                }),
              e
            );
          })(r);
          e = e(void 0 !== n ? n : t.custom, i, s);
        }
        return e;
      }
      n.d(e, { a: () => r });
    },
    4714: (t, e, n) => {
      "use strict";
      n.d(e, { U: () => o });
      var r = n(7365),
        i = n(4785),
        s = n(4737);
      function o(t, e) {
        let {
          transitionEnd: n = {},
          transition: o = {},
          ...a
        } = (0, s.K)(t, e) || {};
        for (let e in (a = { ...a, ...n })) {
          let n = (0, r.K)(a[e]);
          t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, (0, i.OQ)(n));
        }
      }
    },
    4668: (t, e, n) => {
      "use strict";
      n.d(e, { W: () => r });
      let r = { skipAnimations: !1, useManualTiming: !1 };
    },
    2358: (t, e, n) => {
      "use strict";
      function r(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function i(t, e) {
        let n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      n.d(e, { Ai: () => i, Kq: () => r });
    },
    2464: (t, e, n) => {
      "use strict";
      n.d(e, { q: () => r });
      let r = (t, e, n) => (n > e ? e : n < t ? t : n);
    },
    8288: (t, e, n) => {
      "use strict";
      n.d(e, { B: () => r });
      let r = "undefined" != typeof window;
    },
    9652: (t, e, n) => {
      "use strict";
      n.d(e, { i: () => r });
      let r = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    },
    7312: (t, e, n) => {
      "use strict";
      n.d(e, { $: () => r });
      let r = (t) => /^0[^.\s]+$/u.test(t);
    },
    9713: (t, e, n) => {
      "use strict";
      n.d(e, { k: () => r });
      let r = (t, e, n) => t + (e - t) * n;
    },
    1339: (t, e, n) => {
      "use strict";
      n.d(e, { F: () => i });
      let r = (t, e) => (n) => e(t(n)),
        i = (...t) => t.reduce(r);
    },
    7365: (t, e, n) => {
      "use strict";
      n.d(e, { B: () => i, K: () => s });
      var r = n(1712);
      let i = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        s = (t) => ((0, r.p)(t) ? t[t.length - 1] || 0 : t);
    },
    2606: (t, e, n) => {
      "use strict";
      n.d(e, { v: () => i });
      var r = n(2358);
      class i {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, r.Kq)(this.subscriptions, t),
            () => (0, r.Ai)(this.subscriptions, t)
          );
        }
        notify(t, e, n) {
          let r = this.subscriptions.length;
          if (r) {
            if (1 === r) this.subscriptions[0](t, e, n);
            else
              for (let i = 0; i < r; i++) {
                let r = this.subscriptions[i];
                r && r(t, e, n);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    8601: (t, e, n) => {
      "use strict";
      n.d(e, { M: () => i });
      var r = n(6540);
      function i(t) {
        let e = (0, r.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    5128: (t, e, n) => {
      "use strict";
      n.d(e, { E: () => i });
      var r = n(6540);
      let i = n(8288).B ? r.useLayoutEffect : r.useEffect;
    },
    7177: (t, e, n) => {
      "use strict";
      function r(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
      n.d(e, { f: () => r });
    },
    4785: (t, e, n) => {
      "use strict";
      n.d(e, { OQ: () => c });
      var r = n(4582),
        i = n(2606),
        s = n(7177),
        o = n(104);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = "11.18.2"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let n = r.k.now();
              this.updatedAt !== n && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = r.k.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = a(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new i.v());
          let n = this.events[t].add(e);
          return "change" === t
            ? () => {
                n(),
                  o.Gt.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : n;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, n) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - n);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = r.k.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, s.f)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function c(t, e) {
        return new u(t, e);
      }
    },
    5252: (t, e, n) => {
      "use strict";
      n.d(e, { u: () => i });
      var r = n(3735);
      let i = {
        test: (0, n(8521).$)("#"),
        parse: function (t) {
          let e = "",
            n = "",
            r = "",
            i = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (n = t.substring(3, 5)),
                (r = t.substring(5, 7)),
                (i = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (n = t.substring(2, 3)),
                (r = t.substring(3, 4)),
                (i = t.substring(4, 5)),
                (e += e),
                (n += n),
                (r += r),
                (i += i)),
            {
              red: parseInt(e, 16),
              green: parseInt(n, 16),
              blue: parseInt(r, 16),
              alpha: i ? parseInt(i, 16) / 255 : 1,
            }
          );
        },
        transform: r.B.transform,
      };
    },
    2027: (t, e, n) => {
      "use strict";
      n.d(e, { V: () => a });
      var r = n(2944),
        i = n(5269),
        s = n(6046),
        o = n(8521);
      let a = {
        test: (0, o.$)("hsl", "hue"),
        parse: (0, o.q)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: n, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          i.KN.transform((0, s.a)(e)) +
          ", " +
          i.KN.transform((0, s.a)(n)) +
          ", " +
          (0, s.a)(r.X4.transform(o)) +
          ")",
      };
    },
    7739: (t, e, n) => {
      "use strict";
      n.d(e, { y: () => o });
      var r = n(5252),
        i = n(2027),
        s = n(3735);
      let o = {
        test: (t) => s.B.test(t) || r.u.test(t) || i.V.test(t),
        parse: (t) =>
          s.B.test(t)
            ? s.B.parse(t)
            : i.V.test(t)
            ? i.V.parse(t)
            : r.u.parse(t),
        transform: (t) =>
          "string" == typeof t
            ? t
            : t.hasOwnProperty("red")
            ? s.B.transform(t)
            : i.V.transform(t),
      };
    },
    3735: (t, e, n) => {
      "use strict";
      n.d(e, { B: () => u });
      var r = n(2464),
        i = n(2944),
        s = n(6046),
        o = n(8521);
      let a = (t) => (0, r.q)(0, 255, t),
        l = { ...i.ai, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.$)("rgb", "red"),
          parse: (0, o.q)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(n) +
            ", " +
            (0, s.a)(i.X4.transform(r)) +
            ")",
        };
    },
    8521: (t, e, n) => {
      "use strict";
      n.d(e, { $: () => s, q: () => o });
      var r = n(849);
      let i =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        s = (t, e) => (n) =>
          !!(
            ("string" == typeof n && i.test(n) && n.startsWith(t)) ||
            (e && null != n && Object.prototype.hasOwnProperty.call(n, e))
          ),
        o = (t, e, n) => (i) => {
          if ("string" != typeof i) return i;
          let [s, o, a, l] = i.match(r.S);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [n]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    6044: (t, e, n) => {
      "use strict";
      n.d(e, { p: () => l });
      var r = n(615),
        i = n(849);
      let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function o(t) {
        let [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [r] = n.match(i.S) || [];
        if (!r) return t;
        let o = n.replace(r, ""),
          a = s.has(e) ? 1 : 0;
        return r !== n && (a *= 100), e + "(" + a + o + ")";
      }
      let a = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...r.f,
          getAnimatableNone: (t) => {
            let e = t.match(a);
            return e ? e.map(o).join(" ") : t;
          },
        };
    },
    615: (t, e, n) => {
      "use strict";
      n.d(e, { V: () => c, f: () => f });
      var r = n(7739);
      let i =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      var s = n(849),
        o = n(6046);
      let a = "number",
        l = "color",
        u =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function c(t) {
        let e = t.toString(),
          n = [],
          i = { color: [], number: [], var: [] },
          s = [],
          o = 0,
          c = e
            .replace(
              u,
              (t) => (
                r.y.test(t)
                  ? (i.color.push(o), s.push(l), n.push(r.y.parse(t)))
                  : t.startsWith("var(")
                  ? (i.var.push(o), s.push("var"), n.push(t))
                  : (i.number.push(o), s.push(a), n.push(parseFloat(t))),
                ++o,
                "${}"
              )
            )
            .split("${}");
        return { values: n, split: c, indexes: i, types: s };
      }
      function d(t) {
        return c(t).values;
      }
      function h(t) {
        let { split: e, types: n } = c(t),
          i = e.length;
        return (t) => {
          let s = "";
          for (let u = 0; u < i; u++)
            if (((s += e[u]), void 0 !== t[u])) {
              let e = n[u];
              e === a
                ? (s += (0, o.a)(t[u]))
                : e === l
                ? (s += r.y.transform(t[u]))
                : (s += t[u]);
            }
          return s;
        };
      }
      let p = (t) => ("number" == typeof t ? 0 : t),
        f = {
          test: function (t) {
            var e, n;
            return (
              isNaN(t) &&
              "string" == typeof t &&
              ((null === (e = t.match(s.S)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (n = t.match(i)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: d,
          createTransformer: h,
          getAnimatableNone: function (t) {
            let e = d(t);
            return h(t)(e.map(p));
          },
        };
    },
    2944: (t, e, n) => {
      "use strict";
      n.d(e, { X4: () => s, ai: () => i, hs: () => o });
      var r = n(2464);
      let i = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...i, transform: (t) => (0, r.q)(0, 1, t) },
        o = { ...i, default: 1 };
    },
    5269: (t, e, n) => {
      "use strict";
      n.d(e, {
        KN: () => s,
        gQ: () => u,
        px: () => o,
        uj: () => i,
        vh: () => a,
        vw: () => l,
      });
      let r = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        i = r("deg"),
        s = r("%"),
        o = r("px"),
        a = r("vh"),
        l = r("vw"),
        u = {
          ...s,
          parse: (t) => s.parse(t) / 100,
          transform: (t) => s.transform(100 * t),
        };
    },
    849: (t, e, n) => {
      "use strict";
      n.d(e, { S: () => r });
      let r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    },
    6046: (t, e, n) => {
      "use strict";
      n.d(e, { a: () => r });
      let r = (t) => Math.round(1e5 * t) / 1e5;
    },
    9194: (t, e, n) => {
      "use strict";
      n.d(e, { g: () => i });
      var r = n(9896);
      function i(t, e) {
        let n = t.getValue("willChange");
        if ((0, r.S)(n) && n.add) return n.add(e);
      }
    },
    9896: (t, e, n) => {
      "use strict";
      n.d(e, { S: () => r });
      let r = (t) => !!(t && t.getVelocity);
    },
    3033: (t, e, n) => {
      "use strict";
      n.d(e, {
        P6: () => o,
        vG: () => d,
        tu: () => u,
        KZ: () => y,
        rU: () => a,
        PT: () => S,
        DW: () => h,
        WH: () => c,
        Mc: () => E,
        yL: () => v,
        TU: () =>
          function t(e, n) {
            if (e)
              return "function" == typeof e && f()
                ? y(e, n)
                : h(e)
                ? g(e)
                : Array.isArray(e)
                ? e.map((e) => t(e, n) || b.easeOut)
                : b[e];
          },
        YE: () => l,
        c$: () => O,
        KJ: () => x,
        Wp: () => L,
        nL: () => f,
      });
      var r = n(4435);
      let i = (0, r.p)(() => void 0 !== window.ScrollTimeline);
      class s {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        get finished() {
          return Promise.all(
            this.animations.map((t) => ("finished" in t ? t.finished : t))
          );
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let n = 0; n < this.animations.length; n++)
            this.animations[n][t] = e;
        }
        attachTimeline(t, e) {
          let n = this.animations.map((n) =>
            i() && n.attachTimeline
              ? n.attachTimeline(t)
              : "function" == typeof e
              ? e(n)
              : void 0
          );
          return () => {
            n.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      class o extends s {
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
      }
      function a(t, e) {
        return t ? t[e] || t.default || t : void 0;
      }
      let l = 2e4;
      function u(t) {
        let e = 0,
          n = t.next(e);
        for (; !n.done && e < l; ) (e += 50), (n = t.next(e));
        return e >= l ? 1 / 0 : e;
      }
      function c(t) {
        return "function" == typeof t;
      }
      function d(t, e) {
        (t.timeline = e), (t.onfinish = null);
      }
      let h = (t) => Array.isArray(t) && "number" == typeof t[0],
        p = { linearEasing: void 0 },
        f = (function (t, e) {
          let n = (0, r.p)(t);
          return () => {
            var t;
            return null !== (t = p[e]) && void 0 !== t ? t : n();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing");
      var m = n(6896);
      let y = (t, e, n = 10) => {
        let r = "",
          i = Math.max(Math.round(e / n), 2);
        for (let e = 0; e < i; e++) r += t((0, m.q)(0, i - 1, e)) + ", ";
        return `linear(${r.substring(0, r.length - 2)})`;
      };
      function v(t) {
        return !!(
          ("function" == typeof t && f()) ||
          !t ||
          ("string" == typeof t && (t in b || f())) ||
          h(t) ||
          (Array.isArray(t) && t.every(v))
        );
      }
      let g = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`,
        b = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: g([0, 0.65, 0.55, 1]),
          circOut: g([0.55, 0, 1, 0.45]),
          backIn: g([0.31, 0.01, 0.66, -0.59]),
          backOut: g([0.33, 1.53, 0.69, 0.99]),
        },
        w = { x: !1, y: !1 };
      function x(t, e, n) {
        var r;
        if (t instanceof Element) return [t];
        if ("string" == typeof t) {
          let i = document;
          e && (i = e.current);
          let s =
            null !== (r = null == n ? void 0 : n[t]) && void 0 !== r
              ? r
              : i.querySelectorAll(t);
          return s ? Array.from(s) : [];
        }
        return Array.from(t);
      }
      function A(t, e) {
        let n = x(t),
          r = new AbortController();
        return [n, { passive: !0, ...e, signal: r.signal }, () => r.abort()];
      }
      function P(t) {
        return (e) => {
          "touch" === e.pointerType || w.x || w.y || t(e);
        };
      }
      function S(t, e, n = {}) {
        let [r, i, s] = A(t, n),
          o = P((t) => {
            let { target: n } = t,
              r = e(t);
            if ("function" != typeof r || !n) return;
            let s = P((t) => {
              r(t), n.removeEventListener("pointerleave", s);
            });
            n.addEventListener("pointerleave", s, i);
          });
        return (
          r.forEach((t) => {
            t.addEventListener("pointerenter", o, i);
          }),
          s
        );
      }
      let T = (t, e) => !!e && (t === e || T(t, e.parentElement)),
        E = (t) =>
          "mouse" === t.pointerType
            ? "number" != typeof t.button || t.button <= 0
            : !1 !== t.isPrimary,
        k = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        C = new WeakSet();
      function R(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function D(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
        );
      }
      let j = (t, e) => {
        let n = t.currentTarget;
        if (!n) return;
        let r = R(() => {
          if (C.has(n)) return;
          D(n, "down");
          let t = R(() => {
            D(n, "up");
          });
          n.addEventListener("keyup", t, e),
            n.addEventListener("blur", () => D(n, "cancel"), e);
        });
        n.addEventListener("keydown", r, e),
          n.addEventListener(
            "blur",
            () => n.removeEventListener("keydown", r),
            e
          );
      };
      function M(t) {
        return E(t) && !(w.x || w.y);
      }
      function O(t, e, n = {}) {
        let [r, i, s] = A(t, n),
          o = (t) => {
            let r = t.currentTarget;
            if (!M(t) || C.has(r)) return;
            C.add(r);
            let s = e(t),
              o = (t, e) => {
                window.removeEventListener("pointerup", a),
                  window.removeEventListener("pointercancel", l),
                  M(t) &&
                    C.has(r) &&
                    (C.delete(r),
                    "function" == typeof s && s(t, { success: e }));
              },
              a = (t) => {
                o(t, n.useGlobalTarget || T(r, t.target));
              },
              l = (t) => {
                o(t, !1);
              };
            window.addEventListener("pointerup", a, i),
              window.addEventListener("pointercancel", l, i);
          };
        return (
          r.forEach((t) => {
            k.has(t.tagName) ||
              -1 !== t.tabIndex ||
              null !== t.getAttribute("tabindex") ||
              (t.tabIndex = 0),
              (n.useGlobalTarget ? window : t).addEventListener(
                "pointerdown",
                o,
                i
              ),
              t.addEventListener("focus", (t) => j(t, i), i);
          }),
          s
        );
      }
      function L(t) {
        return "x" === t || "y" === t
          ? w[t]
            ? null
            : ((w[t] = !0),
              () => {
                w[t] = !1;
              })
          : w.x || w.y
          ? null
          : ((w.x = w.y = !0),
            () => {
              w.x = w.y = !1;
            });
      }
      n(7331), n(1533);
    },
    8104: (t, e, n) => {
      "use strict";
      n.d(e, { $: () => i, V: () => s });
      var r = n(1533);
      let i = r.l,
        s = r.l;
    },
    4435: (t, e, n) => {
      "use strict";
      function r(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      n.d(e, { p: () => r });
    },
    1533: (t, e, n) => {
      "use strict";
      n.d(e, { l: () => r });
      let r = (t) => t;
    },
    6896: (t, e, n) => {
      "use strict";
      n.d(e, { q: () => r });
      let r = (t, e, n) => {
        let r = e - t;
        return 0 === r ? 1 : (n - t) / r;
      };
    },
    7331: (t, e, n) => {
      "use strict";
      n.d(e, { X: () => i, f: () => r });
      let r = (t) => 1e3 * t,
        i = (t) => t / 1e3;
    },
  },
]);
