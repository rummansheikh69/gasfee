(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [636],
  {
    5610: (t, e, r) => {
      "use strict";
      r.d(e, { Rj: () => s, Kq: () => a });
      var n = r(7457);
      r(8471);
      var i = r(9121);
      let o = new (r(8366).Vy)("abstract-provider/5.8.0");
      class s extends i.VY {
        static isForkEvent(t) {
          return !!(t && t._isForkEvent);
        }
      }
      class a {
        constructor() {
          o.checkAbstract(new.target, a), (0, i.yY)(this, "_isProvider", !0);
        }
        getFeeData() {
          var t, e, r, o;
          return (
            (t = this),
            (e = void 0),
            (r = void 0),
            (o = function* () {
              let { block: t, gasPrice: e } = yield (0, i.k_)({
                  block: this.getBlock("latest"),
                  gasPrice: this.getGasPrice().catch((t) => null),
                }),
                r = null,
                o = null,
                s = null;
              return (
                t &&
                  t.baseFeePerGas &&
                  ((r = t.baseFeePerGas),
                  (s = n.gH.from("1500000000")),
                  (o = t.baseFeePerGas.mul(2).add(s))),
                {
                  lastBaseFeePerGas: r,
                  maxFeePerGas: o,
                  maxPriorityFeePerGas: s,
                  gasPrice: e,
                }
              );
            }),
            new (r || (r = Promise))(function (n, i) {
              function s(t) {
                try {
                  l(o.next(t));
                } catch (t) {
                  i(t);
                }
              }
              function a(t) {
                try {
                  l(o.throw(t));
                } catch (t) {
                  i(t);
                }
              }
              function l(t) {
                var e;
                t.done
                  ? n(t.value)
                  : ((e = t.value) instanceof r
                      ? e
                      : new r(function (t) {
                          t(e);
                        })
                    ).then(s, a);
              }
              l((o = o.apply(t, e || [])).next());
            })
          );
        }
        addListener(t, e) {
          return this.on(t, e);
        }
        removeListener(t, e) {
          return this.off(t, e);
        }
        static isProvider(t) {
          return !!(t && t._isProvider);
        }
      }
    },
    9099: (t, e, r) => {
      "use strict";
      r.d(e, { l: () => u, J: () => f });
      var n = r(9121),
        i = r(8366),
        o = function (t, e, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function s(t) {
              try {
                l(n.next(t));
              } catch (t) {
                o(t);
              }
            }
            function a(t) {
              try {
                l(n.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function l(t) {
              var e;
              t.done
                ? i(t.value)
                : ((e = t.value) instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      })
                  ).then(s, a);
            }
            l((n = n.apply(t, e || [])).next());
          });
        };
      let s = new i.Vy("abstract-signer/5.8.0"),
        a = [
          "accessList",
          "ccipReadEnabled",
          "chainId",
          "customData",
          "data",
          "from",
          "gasLimit",
          "gasPrice",
          "maxFeePerGas",
          "maxPriorityFeePerGas",
          "nonce",
          "to",
          "type",
          "value",
        ],
        l = [
          i.Vy.errors.INSUFFICIENT_FUNDS,
          i.Vy.errors.NONCE_EXPIRED,
          i.Vy.errors.REPLACEMENT_UNDERPRICED,
        ];
      class u {
        constructor() {
          s.checkAbstract(new.target, u), (0, n.yY)(this, "_isSigner", !0);
        }
        getBalance(t) {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getBalance"),
              yield this.provider.getBalance(this.getAddress(), t)
            );
          });
        }
        getTransactionCount(t) {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getTransactionCount"),
              yield this.provider.getTransactionCount(this.getAddress(), t)
            );
          });
        }
        estimateGas(t) {
          return o(this, void 0, void 0, function* () {
            this._checkProvider("estimateGas");
            let e = yield (0, n.k_)(this.checkTransaction(t));
            return yield this.provider.estimateGas(e);
          });
        }
        call(t, e) {
          return o(this, void 0, void 0, function* () {
            this._checkProvider("call");
            let r = yield (0, n.k_)(this.checkTransaction(t));
            return yield this.provider.call(r, e);
          });
        }
        sendTransaction(t) {
          return o(this, void 0, void 0, function* () {
            this._checkProvider("sendTransaction");
            let e = yield this.populateTransaction(t),
              r = yield this.signTransaction(e);
            return yield this.provider.sendTransaction(r);
          });
        }
        getChainId() {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getChainId"),
              (yield this.provider.getNetwork()).chainId
            );
          });
        }
        getGasPrice() {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getGasPrice"),
              yield this.provider.getGasPrice()
            );
          });
        }
        getFeeData() {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getFeeData"),
              yield this.provider.getFeeData()
            );
          });
        }
        resolveName(t) {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("resolveName"),
              yield this.provider.resolveName(t)
            );
          });
        }
        checkTransaction(t) {
          for (let e in t)
            -1 === a.indexOf(e) &&
              s.throwArgumentError(
                "invalid transaction key: " + e,
                "transaction",
                t
              );
          let e = (0, n.Ic)(t);
          return (
            null == e.from
              ? (e.from = this.getAddress())
              : (e.from = Promise.all([
                  Promise.resolve(e.from),
                  this.getAddress(),
                ]).then(
                  (e) => (
                    e[0].toLowerCase() !== e[1].toLowerCase() &&
                      s.throwArgumentError(
                        "from address mismatch",
                        "transaction",
                        t
                      ),
                    e[0]
                  )
                )),
            e
          );
        }
        populateTransaction(t) {
          return o(this, void 0, void 0, function* () {
            let e = yield (0, n.k_)(this.checkTransaction(t));
            null != e.to &&
              ((e.to = Promise.resolve(e.to).then((t) =>
                o(this, void 0, void 0, function* () {
                  if (null == t) return null;
                  let e = yield this.resolveName(t);
                  return (
                    null == e &&
                      s.throwArgumentError(
                        "provided ENS name resolves to null",
                        "tx.to",
                        t
                      ),
                    e
                  );
                })
              )),
              e.to.catch((t) => {}));
            let r = null != e.maxFeePerGas || null != e.maxPriorityFeePerGas;
            if (
              (null != e.gasPrice && (2 === e.type || r)
                ? s.throwArgumentError(
                    "eip-1559 transaction do not support gasPrice",
                    "transaction",
                    t
                  )
                : (0 === e.type || 1 === e.type) &&
                  r &&
                  s.throwArgumentError(
                    "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas",
                    "transaction",
                    t
                  ),
              (2 === e.type || null == e.type) &&
                null != e.maxFeePerGas &&
                null != e.maxPriorityFeePerGas)
            )
              e.type = 2;
            else if (0 === e.type || 1 === e.type)
              null == e.gasPrice && (e.gasPrice = this.getGasPrice());
            else {
              let t = yield this.getFeeData();
              if (null == e.type) {
                if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas) {
                  if (((e.type = 2), null != e.gasPrice)) {
                    let t = e.gasPrice;
                    delete e.gasPrice,
                      (e.maxFeePerGas = t),
                      (e.maxPriorityFeePerGas = t);
                  } else
                    null == e.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas),
                      null == e.maxPriorityFeePerGas &&
                        (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas);
                } else
                  null != t.gasPrice
                    ? (r &&
                        s.throwError(
                          "network does not support EIP-1559",
                          i.Vy.errors.UNSUPPORTED_OPERATION,
                          { operation: "populateTransaction" }
                        ),
                      null == e.gasPrice && (e.gasPrice = t.gasPrice),
                      (e.type = 0))
                    : s.throwError(
                        "failed to get consistent fee data",
                        i.Vy.errors.UNSUPPORTED_OPERATION,
                        { operation: "signer.getFeeData" }
                      );
              } else
                2 === e.type &&
                  (null == e.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas),
                  null == e.maxPriorityFeePerGas &&
                    (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas));
            }
            return (
              null == e.nonce &&
                (e.nonce = this.getTransactionCount("pending")),
              null == e.gasLimit &&
                (e.gasLimit = this.estimateGas(e).catch((t) => {
                  if (l.indexOf(t.code) >= 0) throw t;
                  return s.throwError(
                    "cannot estimate gas; transaction may fail or may require manual gas limit",
                    i.Vy.errors.UNPREDICTABLE_GAS_LIMIT,
                    { error: t, tx: e }
                  );
                })),
              null == e.chainId
                ? (e.chainId = this.getChainId())
                : (e.chainId = Promise.all([
                    Promise.resolve(e.chainId),
                    this.getChainId(),
                  ]).then(
                    (e) => (
                      0 !== e[1] &&
                        e[0] !== e[1] &&
                        s.throwArgumentError(
                          "chainId address mismatch",
                          "transaction",
                          t
                        ),
                      e[0]
                    )
                  )),
              yield (0, n.k_)(e)
            );
          });
        }
        _checkProvider(t) {
          this.provider ||
            s.throwError(
              "missing provider",
              i.Vy.errors.UNSUPPORTED_OPERATION,
              { operation: t || "_checkProvider" }
            );
        }
        static isSigner(t) {
          return !!(t && t._isSigner);
        }
      }
      class f extends u {
        constructor(t, e) {
          super(),
            (0, n.yY)(this, "address", t),
            (0, n.yY)(this, "provider", e || null);
        }
        getAddress() {
          return Promise.resolve(this.address);
        }
        _fail(t, e) {
          return Promise.resolve().then(() => {
            s.throwError(t, i.Vy.errors.UNSUPPORTED_OPERATION, {
              operation: e,
            });
          });
        }
        signMessage(t) {
          return this._fail("VoidSigner cannot sign messages", "signMessage");
        }
        signTransaction(t) {
          return this._fail(
            "VoidSigner cannot sign transactions",
            "signTransaction"
          );
        }
        _signTypedData(t, e, r) {
          return this._fail(
            "VoidSigner cannot sign typed data",
            "signTypedData"
          );
        }
        connect(t) {
          return new f(this.address, t);
        }
      }
    },
    8402: (t, e, r) => {
      "use strict";
      r.d(e, { bv: () => h, RZ: () => c });
      var n = r(8471),
        i = r(7457),
        o = r(234),
        s = r(7196);
      let a = new (r(8366).Vy)("address/5.8.0");
      function l(t) {
        (0, n.Lo)(t, 20) ||
          a.throwArgumentError("invalid address", "address", t);
        let e = (t = t.toLowerCase()).substring(2).split(""),
          r = new Uint8Array(40);
        for (let t = 0; t < 40; t++) r[t] = e[t].charCodeAt(0);
        let i = (0, n.k9)((0, o.S)(r));
        for (let t = 0; t < 40; t += 2)
          i[t >> 1] >> 4 >= 8 && (e[t] = e[t].toUpperCase()),
            (15 & i[t >> 1]) >= 8 && (e[t + 1] = e[t + 1].toUpperCase());
        return "0x" + e.join("");
      }
      let u = {};
      for (let t = 0; t < 10; t++) u[String(t)] = String(t);
      for (let t = 0; t < 26; t++)
        u[String.fromCharCode(65 + t)] = String(10 + t);
      let f = Math.floor(
        Math.log10
          ? Math.log10(0x1fffffffffffff)
          : Math.log(0x1fffffffffffff) / Math.LN10
      );
      function h(t) {
        let e = null;
        if (
          ("string" != typeof t &&
            a.throwArgumentError("invalid address", "address", t),
          t.match(/^(0x)?[0-9a-fA-F]{40}$/))
        )
          "0x" !== t.substring(0, 2) && (t = "0x" + t),
            (e = l(t)),
            t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
              e !== t &&
              a.throwArgumentError("bad address checksum", "address", t);
        else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          for (
            t.substring(2, 4) !==
              (function (t) {
                let e = (t =
                  (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00")
                  .split("")
                  .map((t) => u[t])
                  .join("");
                for (; e.length >= f; ) {
                  let t = e.substring(0, f);
                  e = (parseInt(t, 10) % 97) + e.substring(t.length);
                }
                let r = String(98 - (parseInt(e, 10) % 97));
                for (; r.length < 2; ) r = "0" + r;
                return r;
              })(t) && a.throwArgumentError("bad icap checksum", "address", t),
              e = (0, i.Os)(t.substring(4));
            e.length < 40;

          )
            e = "0" + e;
          e = l("0x" + e);
        } else a.throwArgumentError("invalid address", "address", t);
        return e;
      }
      function c(t) {
        let e = null;
        try {
          e = h(t.from);
        } catch (e) {
          a.throwArgumentError("missing from address", "transaction", t);
        }
        let r = (0, n.gr)((0, n.k9)(i.gH.from(t.nonce).toHexString()));
        return h((0, n.Ab)((0, o.S)((0, s.l)([e, r])), 12));
      }
    },
    6667: (t, e, r) => {
      "use strict";
      r.d(e, { r: () => n });
      let n = "bignumber/5.8.0";
    },
    7457: (t, e, r) => {
      "use strict";
      r.d(e, { Os: () => v, YR: () => h, gH: () => d });
      var n = r(9404),
        i = r.n(n),
        o = r(8471),
        s = r(8366),
        a = r(6667),
        l = i().BN;
      let u = new s.Vy(a.r),
        f = {};
      function h(t) {
        return (
          null != t &&
          (d.isBigNumber(t) ||
            ("number" == typeof t && t % 1 == 0) ||
            ("string" == typeof t && !!t.match(/^-?[0-9]+$/)) ||
            (0, o.Lo)(t) ||
            "bigint" == typeof t ||
            (0, o.aY)(t))
        );
      }
      let c = !1;
      class d {
        constructor(t, e) {
          t !== f &&
            u.throwError(
              "cannot call constructor directly; use BigNumber.from",
              s.Vy.errors.UNSUPPORTED_OPERATION,
              { operation: "new (BigNumber)" }
            ),
            (this._hex = e),
            (this._isBigNumber = !0),
            Object.freeze(this);
        }
        fromTwos(t) {
          return g(m(this).fromTwos(t));
        }
        toTwos(t) {
          return g(m(this).toTwos(t));
        }
        abs() {
          return "-" === this._hex[0] ? d.from(this._hex.substring(1)) : this;
        }
        add(t) {
          return g(m(this).add(m(t)));
        }
        sub(t) {
          return g(m(this).sub(m(t)));
        }
        div(t) {
          return (
            d.from(t).isZero() && y("division-by-zero", "div"),
            g(m(this).div(m(t)))
          );
        }
        mul(t) {
          return g(m(this).mul(m(t)));
        }
        mod(t) {
          let e = m(t);
          return e.isNeg() && y("division-by-zero", "mod"), g(m(this).umod(e));
        }
        pow(t) {
          let e = m(t);
          return e.isNeg() && y("negative-power", "pow"), g(m(this).pow(e));
        }
        and(t) {
          let e = m(t);
          return (
            (this.isNegative() || e.isNeg()) &&
              y("unbound-bitwise-result", "and"),
            g(m(this).and(e))
          );
        }
        or(t) {
          let e = m(t);
          return (
            (this.isNegative() || e.isNeg()) &&
              y("unbound-bitwise-result", "or"),
            g(m(this).or(e))
          );
        }
        xor(t) {
          let e = m(t);
          return (
            (this.isNegative() || e.isNeg()) &&
              y("unbound-bitwise-result", "xor"),
            g(m(this).xor(e))
          );
        }
        mask(t) {
          return (
            (this.isNegative() || t < 0) && y("negative-width", "mask"),
            g(m(this).maskn(t))
          );
        }
        shl(t) {
          return (
            (this.isNegative() || t < 0) && y("negative-width", "shl"),
            g(m(this).shln(t))
          );
        }
        shr(t) {
          return (
            (this.isNegative() || t < 0) && y("negative-width", "shr"),
            g(m(this).shrn(t))
          );
        }
        eq(t) {
          return m(this).eq(m(t));
        }
        lt(t) {
          return m(this).lt(m(t));
        }
        lte(t) {
          return m(this).lte(m(t));
        }
        gt(t) {
          return m(this).gt(m(t));
        }
        gte(t) {
          return m(this).gte(m(t));
        }
        isNegative() {
          return "-" === this._hex[0];
        }
        isZero() {
          return m(this).isZero();
        }
        toNumber() {
          try {
            return m(this).toNumber();
          } catch (t) {
            y("overflow", "toNumber", this.toString());
          }
          return null;
        }
        toBigInt() {
          try {
            return BigInt(this.toString());
          } catch (t) {}
          return u.throwError(
            "this platform does not support BigInt",
            s.Vy.errors.UNSUPPORTED_OPERATION,
            { value: this.toString() }
          );
        }
        toString() {
          return (
            arguments.length > 0 &&
              (10 === arguments[0]
                ? c ||
                  ((c = !0),
                  u.warn(
                    "BigNumber.toString does not accept any parameters; base-10 is assumed"
                  ))
                : 16 === arguments[0]
                ? u.throwError(
                    "BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",
                    s.Vy.errors.UNEXPECTED_ARGUMENT,
                    {}
                  )
                : u.throwError(
                    "BigNumber.toString does not accept parameters",
                    s.Vy.errors.UNEXPECTED_ARGUMENT,
                    {}
                  )),
            m(this).toString(10)
          );
        }
        toHexString() {
          return this._hex;
        }
        toJSON(t) {
          return { type: "BigNumber", hex: this.toHexString() };
        }
        static from(t) {
          if (t instanceof d) return t;
          if ("string" == typeof t)
            return t.match(/^-?0x[0-9a-f]+$/i)
              ? new d(f, p(t))
              : t.match(/^-?[0-9]+$/)
              ? new d(f, p(new l(t)))
              : u.throwArgumentError("invalid BigNumber string", "value", t);
          if ("number" == typeof t)
            return (
              t % 1 && y("underflow", "BigNumber.from", t),
              (t >= 0x1fffffffffffff || t <= -0x1fffffffffffff) &&
                y("overflow", "BigNumber.from", t),
              d.from(String(t))
            );
          if ("bigint" == typeof t) return d.from(t.toString());
          if ((0, o.aY)(t)) return d.from((0, o.c$)(t));
          if (t) {
            if (t.toHexString) {
              let e = t.toHexString();
              if ("string" == typeof e) return d.from(e);
            } else {
              let e = t._hex;
              if (
                (null == e && "BigNumber" === t.type && (e = t.hex),
                "string" == typeof e &&
                  ((0, o.Lo)(e) || ("-" === e[0] && (0, o.Lo)(e.substring(1)))))
              )
                return d.from(e);
            }
          }
          return u.throwArgumentError("invalid BigNumber value", "value", t);
        }
        static isBigNumber(t) {
          return !!(t && t._isBigNumber);
        }
      }
      function p(t) {
        if ("string" != typeof t) return p(t.toString(16));
        if ("-" === t[0])
          return ("-" === (t = t.substring(1))[0] &&
            u.throwArgumentError("invalid hex", "value", t),
          "0x00" === (t = p(t)))
            ? t
            : "-" + t;
        if (("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t))
          return "0x00";
        for (
          t.length % 2 && (t = "0x0" + t.substring(2));
          t.length > 4 && "0x00" === t.substring(0, 4);

        )
          t = "0x" + t.substring(4);
        return t;
      }
      function g(t) {
        return d.from(p(t));
      }
      function m(t) {
        let e = d.from(t).toHexString();
        return "-" === e[0]
          ? new l("-" + e.substring(3), 16)
          : new l(e.substring(2), 16);
      }
      function y(t, e, r) {
        let n = { fault: t, operation: e };
        return (
          null != r && (n.value = r),
          u.throwError(t, s.Vy.errors.NUMERIC_FAULT, n)
        );
      }
      function v(t) {
        return new l(t, 36).toString(16);
      }
    },
    8471: (t, e, r) => {
      "use strict";
      r.d(e, {
        k9: () => u,
        xW: () => f,
        qn: () => y,
        cm: () => g,
        Ab: () => m,
        Fh: () => v,
        bj: () => b,
        c$: () => p,
        aY: () => l,
        f: () => s,
        Lo: () => c,
        Pc: () => w,
        gr: () => h,
      });
      let n = new (r(8366).Vy)("bytes/5.8.0");
      function i(t) {
        return !!t.toHexString;
      }
      function o(t) {
        return (
          t.slice ||
            (t.slice = function () {
              let e = Array.prototype.slice.call(arguments);
              return o(new Uint8Array(Array.prototype.slice.apply(t, e)));
            }),
          t
        );
      }
      function s(t) {
        return (c(t) && !(t.length % 2)) || l(t);
      }
      function a(t) {
        return "number" == typeof t && t == t && t % 1 == 0;
      }
      function l(t) {
        if (null == t) return !1;
        if (t.constructor === Uint8Array) return !0;
        if ("string" == typeof t || !a(t.length) || t.length < 0) return !1;
        for (let e = 0; e < t.length; e++) {
          let r = t[e];
          if (!a(r) || r < 0 || r >= 256) return !1;
        }
        return !0;
      }
      function u(t, e) {
        if ((e || (e = {}), "number" == typeof t)) {
          n.checkSafeUint53(t, "invalid arrayify value");
          let e = [];
          for (; t; ) e.unshift(255 & t), (t = parseInt(String(t / 256)));
          return 0 === e.length && e.push(0), o(new Uint8Array(e));
        }
        if (
          (e.allowMissingPrefix &&
            "string" == typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          i(t) && (t = t.toHexString()),
          c(t))
        ) {
          let r = t.substring(2);
          r.length % 2 &&
            ("left" === e.hexPad
              ? (r = "0" + r)
              : "right" === e.hexPad
              ? (r += "0")
              : n.throwArgumentError("hex data is odd-length", "value", t));
          let i = [];
          for (let t = 0; t < r.length; t += 2)
            i.push(parseInt(r.substring(t, t + 2), 16));
          return o(new Uint8Array(i));
        }
        return l(t)
          ? o(new Uint8Array(t))
          : n.throwArgumentError("invalid arrayify value", "value", t);
      }
      function f(t) {
        let e = t.map((t) => u(t)),
          r = new Uint8Array(e.reduce((t, e) => t + e.length, 0));
        return e.reduce((t, e) => (r.set(e, t), t + e.length), 0), o(r);
      }
      function h(t) {
        let e = u(t);
        if (0 === e.length) return e;
        let r = 0;
        for (; r < e.length && 0 === e[r]; ) r++;
        return r && (e = e.slice(r)), e;
      }
      function c(t, e) {
        return (
          "string" == typeof t &&
          !!t.match(/^0x[0-9A-Fa-f]*$/) &&
          (!e || t.length === 2 + 2 * e)
        );
      }
      let d = "0123456789abcdef";
      function p(t, e) {
        if ((e || (e = {}), "number" == typeof t)) {
          n.checkSafeUint53(t, "invalid hexlify value");
          let e = "";
          for (; t; ) (e = d[15 & t] + e), (t = Math.floor(t / 16));
          return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00";
        }
        if ("bigint" == typeof t)
          return (t = t.toString(16)).length % 2 ? "0x0" + t : "0x" + t;
        if (
          (e.allowMissingPrefix &&
            "string" == typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          i(t))
        )
          return t.toHexString();
        if (c(t))
          return (
            t.length % 2 &&
              ("left" === e.hexPad
                ? (t = "0x0" + t.substring(2))
                : "right" === e.hexPad
                ? (t += "0")
                : n.throwArgumentError("hex data is odd-length", "value", t)),
            t.toLowerCase()
          );
        if (l(t)) {
          let e = "0x";
          for (let r = 0; r < t.length; r++) {
            let n = t[r];
            e += d[(240 & n) >> 4] + d[15 & n];
          }
          return e;
        }
        return n.throwArgumentError("invalid hexlify value", "value", t);
      }
      function g(t) {
        if ("string" != typeof t) t = p(t);
        else if (!c(t) || t.length % 2) return null;
        return (t.length - 2) / 2;
      }
      function m(t, e, r) {
        return ("string" != typeof t
          ? (t = p(t))
          : (!c(t) || t.length % 2) &&
            n.throwArgumentError("invalid hexData", "value", t),
        (e = 2 + 2 * e),
        null != r)
          ? "0x" + t.substring(e, 2 + 2 * r)
          : "0x" + t.substring(e);
      }
      function y(t) {
        let e = "0x";
        return (
          t.forEach((t) => {
            e += p(t).substring(2);
          }),
          e
        );
      }
      function v(t) {
        let e = (function (t) {
          "string" != typeof t && (t = p(t)),
            c(t) || n.throwArgumentError("invalid hex string", "value", t),
            (t = t.substring(2));
          let e = 0;
          for (; e < t.length && "0" === t[e]; ) e++;
          return "0x" + t.substring(e);
        })(p(t, { hexPad: "left" }));
        return "0x" === e ? "0x0" : e;
      }
      function b(t, e) {
        for (
          "string" != typeof t
            ? (t = p(t))
            : c(t) || n.throwArgumentError("invalid hex string", "value", t),
            t.length > 2 * e + 2 &&
              n.throwArgumentError("value out of range", "value", arguments[1]);
          t.length < 2 * e + 2;

        )
          t = "0x0" + t.substring(2);
        return t;
      }
      function w(t) {
        let e = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if (s(t)) {
          let r = u(t);
          64 === r.length
            ? ((e.v = 27 + (r[32] >> 7)),
              (r[32] &= 127),
              (e.r = p(r.slice(0, 32))),
              (e.s = p(r.slice(32, 64))))
            : 65 === r.length
            ? ((e.r = p(r.slice(0, 32))),
              (e.s = p(r.slice(32, 64))),
              (e.v = r[64]))
            : n.throwArgumentError("invalid signature string", "signature", t),
            e.v < 27 &&
              (0 === e.v || 1 === e.v
                ? (e.v += 27)
                : n.throwArgumentError(
                    "signature invalid v byte",
                    "signature",
                    t
                  )),
            (e.recoveryParam = 1 - (e.v % 2)),
            e.recoveryParam && (r[32] |= 128),
            (e._vs = p(r.slice(32, 64)));
        } else {
          if (
            ((e.r = t.r),
            (e.s = t.s),
            (e.v = t.v),
            (e.recoveryParam = t.recoveryParam),
            (e._vs = t._vs),
            null != e._vs)
          ) {
            let r = (function (t, e) {
              (t = u(t)).length > e &&
                n.throwArgumentError(
                  "value out of range",
                  "value",
                  arguments[0]
                );
              let r = new Uint8Array(e);
              return r.set(t, e - t.length), o(r);
            })(u(e._vs), 32);
            e._vs = p(r);
            let i = r[0] >= 128 ? 1 : 0;
            null == e.recoveryParam
              ? (e.recoveryParam = i)
              : e.recoveryParam !== i &&
                n.throwArgumentError(
                  "signature recoveryParam mismatch _vs",
                  "signature",
                  t
                ),
              (r[0] &= 127);
            let s = p(r);
            null == e.s
              ? (e.s = s)
              : e.s !== s &&
                n.throwArgumentError(
                  "signature v mismatch _vs",
                  "signature",
                  t
                );
          }
          if (null == e.recoveryParam)
            null == e.v
              ? n.throwArgumentError(
                  "signature missing v and recoveryParam",
                  "signature",
                  t
                )
              : 0 === e.v || 1 === e.v
              ? (e.recoveryParam = e.v)
              : (e.recoveryParam = 1 - (e.v % 2));
          else if (null == e.v) e.v = 27 + e.recoveryParam;
          else {
            let r = 0 === e.v || 1 === e.v ? e.v : 1 - (e.v % 2);
            e.recoveryParam !== r &&
              n.throwArgumentError(
                "signature recoveryParam mismatch v",
                "signature",
                t
              );
          }
          null != e.r && c(e.r)
            ? (e.r = b(e.r, 32))
            : n.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                t
              ),
            null != e.s && c(e.s)
              ? (e.s = b(e.s, 32))
              : n.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  t
                );
          let r = u(e.s);
          r[0] >= 128 &&
            n.throwArgumentError("signature s out of range", "signature", t),
            e.recoveryParam && (r[0] |= 128);
          let i = p(r);
          e._vs &&
            (c(e._vs) ||
              n.throwArgumentError("signature invalid _vs", "signature", t),
            (e._vs = b(e._vs, 32))),
            null == e._vs
              ? (e._vs = i)
              : e._vs !== i &&
                n.throwArgumentError(
                  "signature _vs mismatch v and s",
                  "signature",
                  t
                );
        }
        return (
          (e.yParityAndS = e._vs),
          (e.compact = e.r + e.yParityAndS.substring(2)),
          e
        );
      }
    },
    3514: (t, e, r) => {
      "use strict";
      r.d(e, { Is: () => a, XK: () => o, eR: () => i, pD: () => s });
      var n = r(7457);
      let i = n.gH.from(-1),
        o = n.gH.from(0),
        s = n.gH.from(1),
        a = n.gH.from(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        );
    },
    8392: (t, e, r) => {
      "use strict";
      r.d(e, { id: () => o });
      var n = r(234),
        i = r(1414);
      function o(t) {
        return (0, n.S)((0, i.YW)(t));
      }
    },
    234: (t, e, r) => {
      "use strict";
      r.d(e, { S: () => s });
      var n = r(1176),
        i = r.n(n),
        o = r(8471);
      function s(t) {
        return "0x" + i().keccak_256((0, o.k9)(t));
      }
    },
    8366: (t, e, r) => {
      "use strict";
      var n, i;
      r.d(e, { Vy: () => c });
      let o = !1,
        s = !1,
        a = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 },
        l = a.default,
        u = null,
        f = (function () {
          try {
            let t = [];
            if (
              (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
                try {
                  if ("test" !== "test".normalize(e))
                    throw Error("bad normalize");
                } catch (r) {
                  t.push(e);
                }
              }),
              t.length)
            )
              throw Error("missing " + t.join(", "));
            if (
              String.fromCharCode(233).normalize("NFD") !==
              String.fromCharCode(101, 769)
            )
              throw Error("broken implementation");
          } catch (t) {
            return t.message;
          }
          return null;
        })();
      !(function (t) {
        (t.DEBUG = "DEBUG"),
          (t.INFO = "INFO"),
          (t.WARNING = "WARNING"),
          (t.ERROR = "ERROR"),
          (t.OFF = "OFF");
      })(n || (n = {})),
        (function (t) {
          (t.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
            (t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
            (t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
            (t.NETWORK_ERROR = "NETWORK_ERROR"),
            (t.SERVER_ERROR = "SERVER_ERROR"),
            (t.TIMEOUT = "TIMEOUT"),
            (t.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
            (t.NUMERIC_FAULT = "NUMERIC_FAULT"),
            (t.MISSING_NEW = "MISSING_NEW"),
            (t.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
            (t.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
            (t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
            (t.CALL_EXCEPTION = "CALL_EXCEPTION"),
            (t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
            (t.NONCE_EXPIRED = "NONCE_EXPIRED"),
            (t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
            (t.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
            (t.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
            (t.ACTION_REJECTED = "ACTION_REJECTED");
        })(i || (i = {}));
      let h = "0123456789abcdef";
      class c {
        constructor(t) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: t,
            writable: !1,
          });
        }
        _log(t, e) {
          let r = t.toLowerCase();
          null == a[r] &&
            this.throwArgumentError("invalid log level name", "logLevel", t),
            l > a[r] || console.log.apply(console, e);
        }
        debug(...t) {
          this._log(c.levels.DEBUG, t);
        }
        info(...t) {
          this._log(c.levels.INFO, t);
        }
        warn(...t) {
          this._log(c.levels.WARNING, t);
        }
        makeError(t, e, r) {
          if (s) return this.makeError("censored error", e, {});
          e || (e = c.errors.UNKNOWN_ERROR), r || (r = {});
          let n = [];
          Object.keys(r).forEach((t) => {
            let e = r[t];
            try {
              if (e instanceof Uint8Array) {
                let r = "";
                for (let t = 0; t < e.length; t++)
                  (r += h[e[t] >> 4]), (r += h[15 & e[t]]);
                n.push(t + "=Uint8Array(0x" + r + ")");
              } else n.push(t + "=" + JSON.stringify(e));
            } catch (e) {
              n.push(t + "=" + JSON.stringify(r[t].toString()));
            }
          }),
            n.push(`code=${e}`),
            n.push(`version=${this.version}`);
          let o = t,
            a = "";
          switch (e) {
            case i.NUMERIC_FAULT: {
              a = "NUMERIC_FAULT";
              let e = t;
              switch (e) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  a += "-" + e;
                  break;
                case "negative-power":
                case "negative-width":
                  a += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  a += "-unbound-result";
              }
              break;
            }
            case i.CALL_EXCEPTION:
            case i.INSUFFICIENT_FUNDS:
            case i.MISSING_NEW:
            case i.NONCE_EXPIRED:
            case i.REPLACEMENT_UNDERPRICED:
            case i.TRANSACTION_REPLACED:
            case i.UNPREDICTABLE_GAS_LIMIT:
              a = e;
          }
          a && (t += " [ See: https://links.ethers.org/v5-errors-" + a + " ]"),
            n.length && (t += " (" + n.join(", ") + ")");
          let l = Error(t);
          return (
            (l.reason = o),
            (l.code = e),
            Object.keys(r).forEach(function (t) {
              l[t] = r[t];
            }),
            l
          );
        }
        throwError(t, e, r) {
          throw this.makeError(t, e, r);
        }
        throwArgumentError(t, e, r) {
          return this.throwError(t, c.errors.INVALID_ARGUMENT, {
            argument: e,
            value: r,
          });
        }
        assert(t, e, r, n) {
          t || this.throwError(e, r, n);
        }
        assertArgument(t, e, r, n) {
          t || this.throwArgumentError(e, r, n);
        }
        checkNormalize(t) {
          null == t && (t = "platform missing String.prototype.normalize"),
            f &&
              this.throwError(
                "platform missing String.prototype.normalize",
                c.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: f }
              );
        }
        checkSafeUint53(t, e) {
          "number" == typeof t &&
            (null == e && (e = "value not safe"),
            (t < 0 || t >= 0x1fffffffffffff) &&
              this.throwError(e, c.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: t,
              }),
            t % 1 &&
              this.throwError(e, c.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: t,
              }));
        }
        checkArgumentCount(t, e, r) {
          (r = r ? ": " + r : ""),
            t < e &&
              this.throwError(
                "missing argument" + r,
                c.errors.MISSING_ARGUMENT,
                { count: t, expectedCount: e }
              ),
            t > e &&
              this.throwError(
                "too many arguments" + r,
                c.errors.UNEXPECTED_ARGUMENT,
                { count: t, expectedCount: e }
              );
        }
        checkNew(t, e) {
          (t === Object || null == t) &&
            this.throwError("missing new", c.errors.MISSING_NEW, {
              name: e.name,
            });
        }
        checkAbstract(t, e) {
          t === e
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(e.name) +
                  " directly; use a sub-class",
                c.errors.UNSUPPORTED_OPERATION,
                { name: t.name, operation: "new" }
              )
            : (t === Object || null == t) &&
              this.throwError("missing new", c.errors.MISSING_NEW, {
                name: e.name,
              });
        }
        static globalLogger() {
          return u || (u = new c("logger/5.8.0")), u;
        }
        static setCensorship(t, e) {
          if (
            (!t &&
              e &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                c.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            o)
          ) {
            if (!t) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              c.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (s = !!t), (o = !!e);
        }
        static setLogLevel(t) {
          let e = a[t.toLowerCase()];
          if (null == e) {
            c.globalLogger().warn("invalid log level - " + t);
            return;
          }
          l = e;
        }
        static from(t) {
          return new c(t);
        }
      }
      (c.errors = i), (c.levels = n);
    },
    9121: (t, e, r) => {
      "use strict";
      r.d(e, {
        VY: () => h,
        qN: () => a,
        A4: () => f,
        yY: () => i,
        $J: () => o,
        k_: () => s,
        Ic: () => l,
      });
      let n = new (r(8366).Vy)("properties/5.8.0");
      function i(t, e, r) {
        Object.defineProperty(t, e, { enumerable: !0, value: r, writable: !1 });
      }
      function o(t, e) {
        for (let r = 0; r < 32; r++) {
          if (t[e]) return t[e];
          if (!t.prototype || "object" != typeof t.prototype) break;
          t = Object.getPrototypeOf(t.prototype).constructor;
        }
        return null;
      }
      function s(t) {
        var e, r, n, i;
        return (
          (e = this),
          (r = void 0),
          (n = void 0),
          (i = function* () {
            let e = Object.keys(t).map((e) =>
              Promise.resolve(t[e]).then((t) => ({ key: e, value: t }))
            );
            return (yield Promise.all(e)).reduce(
              (t, e) => ((t[e.key] = e.value), t),
              {}
            );
          }),
          new (n || (n = Promise))(function (t, o) {
            function s(t) {
              try {
                l(i.next(t));
              } catch (t) {
                o(t);
              }
            }
            function a(t) {
              try {
                l(i.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function l(e) {
              var r;
              e.done
                ? t(e.value)
                : ((r = e.value) instanceof n
                    ? r
                    : new n(function (t) {
                        t(r);
                      })
                  ).then(s, a);
            }
            l((i = i.apply(e, r || [])).next());
          })
        );
      }
      function a(t, e) {
        (t && "object" == typeof t) ||
          n.throwArgumentError("invalid object", "object", t),
          Object.keys(t).forEach((r) => {
            e[r] ||
              n.throwArgumentError(
                "invalid object key - " + r,
                "transaction:" + r,
                t
              );
          });
      }
      function l(t) {
        let e = {};
        for (let r in t) e[r] = t[r];
        return e;
      }
      let u = { bigint: !0, boolean: !0, function: !0, number: !0, string: !0 };
      function f(t) {
        return (function (t) {
          if (
            (function t(e) {
              if (null == e || u[typeof e]) return !0;
              if (Array.isArray(e) || "object" == typeof e) {
                if (!Object.isFrozen(e)) return !1;
                let r = Object.keys(e);
                for (let n = 0; n < r.length; n++) {
                  let i = null;
                  try {
                    i = e[r[n]];
                  } catch (t) {
                    continue;
                  }
                  if (!t(i)) return !1;
                }
                return !0;
              }
              return n.throwArgumentError(
                `Cannot deepCopy ${typeof e}`,
                "object",
                e
              );
            })(t)
          )
            return t;
          if (Array.isArray(t)) return Object.freeze(t.map((t) => f(t)));
          if ("object" == typeof t) {
            let e = {};
            for (let r in t) {
              let n = t[r];
              void 0 !== n && i(e, r, f(n));
            }
            return e;
          }
          return n.throwArgumentError(
            `Cannot deepCopy ${typeof t}`,
            "object",
            t
          );
        })(t);
      }
      class h {
        constructor(t) {
          for (let e in t) this[e] = f(t[e]);
        }
      }
    },
    7196: (t, e, r) => {
      "use strict";
      r.d(e, { D: () => h, l: () => l });
      var n = r(8471),
        i = r(8366);
      let o = new i.Vy("rlp/5.8.0");
      function s(t) {
        let e = [];
        for (; t; ) e.unshift(255 & t), (t >>= 8);
        return e;
      }
      function a(t, e, r) {
        let n = 0;
        for (let i = 0; i < r; i++) n = 256 * n + t[e + i];
        return n;
      }
      function l(t) {
        return (0, n.c$)(
          (function t(e) {
            if (Array.isArray(e)) {
              let r = [];
              if (
                (e.forEach(function (e) {
                  r = r.concat(t(e));
                }),
                r.length <= 55)
              )
                return r.unshift(192 + r.length), r;
              let n = s(r.length);
              return n.unshift(247 + n.length), n.concat(r);
            }
            (0, n.f)(e) ||
              o.throwArgumentError("RLP object must be BytesLike", "object", e);
            let r = Array.prototype.slice.call((0, n.k9)(e));
            if (1 === r.length && r[0] <= 127) return r;
            if (r.length <= 55) return r.unshift(128 + r.length), r;
            let i = s(r.length);
            return i.unshift(183 + i.length), i.concat(r);
          })(t)
        );
      }
      function u(t, e, r, n) {
        let s = [];
        for (; r < e + 1 + n; ) {
          let a = f(t, r);
          s.push(a.result),
            (r += a.consumed) > e + 1 + n &&
              o.throwError(
                "child data too short",
                i.Vy.errors.BUFFER_OVERRUN,
                {}
              );
        }
        return { consumed: 1 + n, result: s };
      }
      function f(t, e) {
        if (
          (0 === t.length &&
            o.throwError("data too short", i.Vy.errors.BUFFER_OVERRUN, {}),
          t[e] >= 248)
        ) {
          let r = t[e] - 247;
          e + 1 + r > t.length &&
            o.throwError(
              "data short segment too short",
              i.Vy.errors.BUFFER_OVERRUN,
              {}
            );
          let n = a(t, e + 1, r);
          return (
            e + 1 + r + n > t.length &&
              o.throwError(
                "data long segment too short",
                i.Vy.errors.BUFFER_OVERRUN,
                {}
              ),
            u(t, e, e + 1 + r, r + n)
          );
        }
        if (t[e] >= 192) {
          let r = t[e] - 192;
          return (
            e + 1 + r > t.length &&
              o.throwError(
                "data array too short",
                i.Vy.errors.BUFFER_OVERRUN,
                {}
              ),
            u(t, e, e + 1, r)
          );
        }
        if (t[e] >= 184) {
          let r = t[e] - 183;
          e + 1 + r > t.length &&
            o.throwError(
              "data array too short",
              i.Vy.errors.BUFFER_OVERRUN,
              {}
            );
          let s = a(t, e + 1, r);
          e + 1 + r + s > t.length &&
            o.throwError(
              "data array too short",
              i.Vy.errors.BUFFER_OVERRUN,
              {}
            );
          let l = (0, n.c$)(t.slice(e + 1 + r, e + 1 + r + s));
          return { consumed: 1 + r + s, result: l };
        }
        if (t[e] >= 128) {
          let r = t[e] - 128;
          e + 1 + r > t.length &&
            o.throwError("data too short", i.Vy.errors.BUFFER_OVERRUN, {});
          let s = (0, n.c$)(t.slice(e + 1, e + 1 + r));
          return { consumed: 1 + r, result: s };
        }
        return { consumed: 1, result: (0, n.c$)(t[e]) };
      }
      function h(t) {
        let e = (0, n.k9)(t),
          r = f(e, 0);
        return (
          r.consumed !== e.length &&
            o.throwArgumentError("invalid rlp data", "data", t),
          r.result
        );
      }
    },
    1414: (t, e, r) => {
      "use strict";
      r.d(e, { YW: () => f, dg: () => c, _v: () => h });
      var n,
        i,
        o = r(8471);
      let s = new (r(8366).Vy)("strings/5.8.0");
      function a(t, e, r, n, o) {
        if (t === i.BAD_PREFIX || t === i.UNEXPECTED_CONTINUE) {
          let t = 0;
          for (let n = e + 1; n < r.length && r[n] >> 6 == 2; n++) t++;
          return t;
        }
        return t === i.OVERRUN ? r.length - e - 1 : 0;
      }
      !(function (t) {
        (t.current = ""),
          (t.NFC = "NFC"),
          (t.NFD = "NFD"),
          (t.NFKC = "NFKC"),
          (t.NFKD = "NFKD");
      })(n || (n = {})),
        (function (t) {
          (t.UNEXPECTED_CONTINUE = "unexpected continuation byte"),
            (t.BAD_PREFIX = "bad codepoint prefix"),
            (t.OVERRUN = "string overrun"),
            (t.MISSING_CONTINUE = "missing continuation byte"),
            (t.OUT_OF_RANGE = "out of UTF-8 range"),
            (t.UTF16_SURROGATE = "UTF-16 surrogate"),
            (t.OVERLONG = "overlong representation");
        })(i || (i = {}));
      let l = Object.freeze({
        error: function (t, e, r, n, i) {
          return s.throwArgumentError(
            `invalid codepoint at offset ${e}; ${t}`,
            "bytes",
            r
          );
        },
        ignore: a,
        replace: function (t, e, r, n, o) {
          return t === i.OVERLONG
            ? (n.push(o), 0)
            : (n.push(65533), a(t, e, r, n, o));
        },
      });
      function u(t, e) {
        null == e && (e = l.error), (t = (0, o.k9)(t));
        let r = [],
          n = 0;
        for (; n < t.length; ) {
          let o = t[n++];
          if (o >> 7 == 0) {
            r.push(o);
            continue;
          }
          let s = null,
            a = null;
          if ((224 & o) == 192) (s = 1), (a = 127);
          else if ((240 & o) == 224) (s = 2), (a = 2047);
          else if ((248 & o) == 240) (s = 3), (a = 65535);
          else {
            (192 & o) == 128
              ? (n += e(i.UNEXPECTED_CONTINUE, n - 1, t, r))
              : (n += e(i.BAD_PREFIX, n - 1, t, r));
            continue;
          }
          if (n - 1 + s >= t.length) {
            n += e(i.OVERRUN, n - 1, t, r);
            continue;
          }
          let l = o & ((1 << (8 - s - 1)) - 1);
          for (let o = 0; o < s; o++) {
            let o = t[n];
            if ((192 & o) != 128) {
              (n += e(i.MISSING_CONTINUE, n, t, r)), (l = null);
              break;
            }
            (l = (l << 6) | (63 & o)), n++;
          }
          if (null !== l) {
            if (l > 1114111) {
              n += e(i.OUT_OF_RANGE, n - 1 - s, t, r, l);
              continue;
            }
            if (l >= 55296 && l <= 57343) {
              n += e(i.UTF16_SURROGATE, n - 1 - s, t, r, l);
              continue;
            }
            if (l <= a) {
              n += e(i.OVERLONG, n - 1 - s, t, r, l);
              continue;
            }
            r.push(l);
          }
        }
        return r;
      }
      function f(t, e = n.current) {
        e != n.current && (s.checkNormalize(), (t = t.normalize(e)));
        let r = [];
        for (let e = 0; e < t.length; e++) {
          let n = t.charCodeAt(e);
          if (n < 128) r.push(n);
          else if (n < 2048) r.push((n >> 6) | 192), r.push((63 & n) | 128);
          else if ((64512 & n) == 55296) {
            e++;
            let i = t.charCodeAt(e);
            if (e >= t.length || (64512 & i) != 56320)
              throw Error("invalid utf-8 string");
            let o = 65536 + ((1023 & n) << 10) + (1023 & i);
            r.push((o >> 18) | 240),
              r.push(((o >> 12) & 63) | 128),
              r.push(((o >> 6) & 63) | 128),
              r.push((63 & o) | 128);
          } else
            r.push((n >> 12) | 224),
              r.push(((n >> 6) & 63) | 128),
              r.push((63 & n) | 128);
        }
        return (0, o.k9)(r);
      }
      function h(t, e) {
        return u(t, e)
          .map((t) =>
            t <= 65535
              ? String.fromCharCode(t)
              : String.fromCharCode(
                  (((t -= 65536) >> 10) & 1023) + 55296,
                  (1023 & t) + 56320
                )
          )
          .join("");
      }
      function c(t, e = n.current) {
        return u(f(t, e));
      }
    },
    5718: (t, e, r) => {
      "use strict";
      r.d(e, { $2: () => tn, qg: () => tl });
      var n,
        i = r(8402),
        o = r(7457),
        s = r(8471),
        a = r(3514),
        l = r(234),
        u = r(7196),
        f = r(9404),
        h = r.n(f),
        c = r(7952),
        d = r.n(c);
      function p(t, e, r) {
        return (
          t(
            (r = {
              path: e,
              exports: {},
              require: function (t, e) {
                return (function () {
                  throw Error(
                    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                  );
                })(t, null == e ? r.path : e);
              },
            }),
            r.exports
          ),
          r.exports
        );
      }
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : void 0 !== r.g
        ? r.g
        : "undefined" != typeof self && self;
      var g = m;
      function m(t, e) {
        if (!t) throw Error(e || "Assertion failed");
      }
      m.equal = function (t, e, r) {
        if (t != e) throw Error(r || "Assertion failed: " + t + " != " + e);
      };
      var y = p(function (t, e) {
          function r(t) {
            return 1 === t.length ? "0" + t : t;
          }
          function n(t) {
            for (var e = "", n = 0; n < t.length; n++)
              e += r(t[n].toString(16));
            return e;
          }
          (e.toArray = function (t, e) {
            if (Array.isArray(t)) return t.slice();
            if (!t) return [];
            var r = [];
            if ("string" != typeof t) {
              for (var n = 0; n < t.length; n++) r[n] = 0 | t[n];
              return r;
            }
            if ("hex" === e) {
              (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 &&
                (t = "0" + t);
              for (var n = 0; n < t.length; n += 2)
                r.push(parseInt(t[n] + t[n + 1], 16));
            } else
              for (var n = 0; n < t.length; n++) {
                var i = t.charCodeAt(n),
                  o = i >> 8,
                  s = 255 & i;
                o ? r.push(o, s) : r.push(s);
              }
            return r;
          }),
            (e.zero2 = r),
            (e.toHex = n),
            (e.encode = function (t, e) {
              return "hex" === e ? n(t) : t;
            });
        }),
        v = p(function (t, e) {
          (e.assert = g),
            (e.toArray = y.toArray),
            (e.zero2 = y.zero2),
            (e.toHex = y.toHex),
            (e.encode = y.encode),
            (e.getNAF = function (t, e, r) {
              var n = Array(Math.max(t.bitLength(), r) + 1);
              for (s = 0; s < n.length; s += 1) n[s] = 0;
              var i = 1 << (e + 1),
                o = t.clone();
              for (s = 0; s < n.length; s++) {
                var s,
                  a,
                  l = o.andln(i - 1);
                o.isOdd()
                  ? ((a = l > (i >> 1) - 1 ? (i >> 1) - l : l), o.isubn(a))
                  : (a = 0),
                  (n[s] = a),
                  o.iushrn(1);
              }
              return n;
            }),
            (e.getJSF = function (t, e) {
              var r = [[], []];
              (t = t.clone()), (e = e.clone());
              for (var n = 0, i = 0; t.cmpn(-n) > 0 || e.cmpn(-i) > 0; ) {
                var o,
                  s,
                  a,
                  l = (t.andln(3) + n) & 3,
                  u = (e.andln(3) + i) & 3;
                3 === l && (l = -1),
                  3 === u && (u = -1),
                  (s =
                    (1 & l) == 0
                      ? 0
                      : (3 == (o = (t.andln(7) + n) & 7) || 5 === o) && 2 === u
                      ? -l
                      : l),
                  r[0].push(s),
                  (a =
                    (1 & u) == 0
                      ? 0
                      : (3 == (o = (e.andln(7) + i) & 7) || 5 === o) && 2 === l
                      ? -u
                      : u),
                  r[1].push(a),
                  2 * n === s + 1 && (n = 1 - n),
                  2 * i === a + 1 && (i = 1 - i),
                  t.iushrn(1),
                  e.iushrn(1);
              }
              return r;
            }),
            (e.cachedProperty = function (t, e, r) {
              var n = "_" + e;
              t.prototype[e] = function () {
                return void 0 !== this[n] ? this[n] : (this[n] = r.call(this));
              };
            }),
            (e.parseBytes = function (t) {
              return "string" == typeof t ? e.toArray(t, "hex") : t;
            }),
            (e.intFromLE = function (t) {
              return new (h())(t, "hex", "le");
            });
        }),
        b = v.getNAF,
        w = v.getJSF,
        A = v.assert;
      function E(t, e) {
        (this.type = t),
          (this.p = new (h())(e.p, 16)),
          (this.red = e.prime ? h().red(e.prime) : h().mont(this.p)),
          (this.zero = new (h())(0).toRed(this.red)),
          (this.one = new (h())(1).toRed(this.red)),
          (this.two = new (h())(2).toRed(this.red)),
          (this.n = e.n && new (h())(e.n, 16)),
          (this.g = e.g && this.pointFromJSON(e.g, e.gRed)),
          (this._wnafT1 = [, , , ,]),
          (this._wnafT2 = [, , , ,]),
          (this._wnafT3 = [, , , ,]),
          (this._wnafT4 = [, , , ,]),
          (this._bitLength = this.n ? this.n.bitLength() : 0);
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      function x(t, e) {
        (this.curve = t), (this.type = e), (this.precomputed = null);
      }
      (E.prototype.point = function () {
        throw Error("Not implemented");
      }),
        (E.prototype.validate = function () {
          throw Error("Not implemented");
        }),
        (E.prototype._fixedNafMul = function (t, e) {
          A(t.precomputed);
          var r,
            n,
            i = t._getDoubles(),
            o = b(e, 1, this._bitLength),
            s = (1 << (i.step + 1)) - (i.step % 2 == 0 ? 2 : 1);
          s /= 3;
          var a = [];
          for (r = 0; r < o.length; r += i.step) {
            n = 0;
            for (var l = r + i.step - 1; l >= r; l--) n = (n << 1) + o[l];
            a.push(n);
          }
          for (
            var u = this.jpoint(null, null, null),
              f = this.jpoint(null, null, null),
              h = s;
            h > 0;
            h--
          ) {
            for (r = 0; r < a.length; r++)
              (n = a[r]) === h
                ? (f = f.mixedAdd(i.points[r]))
                : n === -h && (f = f.mixedAdd(i.points[r].neg()));
            u = u.add(f);
          }
          return u.toP();
        }),
        (E.prototype._wnafMul = function (t, e) {
          var r = 4,
            n = t._getNAFPoints(r);
          r = n.wnd;
          for (
            var i = n.points,
              o = b(e, r, this._bitLength),
              s = this.jpoint(null, null, null),
              a = o.length - 1;
            a >= 0;
            a--
          ) {
            for (var l = 0; a >= 0 && 0 === o[a]; a--) l++;
            if ((a >= 0 && l++, (s = s.dblp(l)), a < 0)) break;
            var u = o[a];
            A(0 !== u),
              (s =
                "affine" === t.type
                  ? u > 0
                    ? s.mixedAdd(i[(u - 1) >> 1])
                    : s.mixedAdd(i[(-u - 1) >> 1].neg())
                  : u > 0
                  ? s.add(i[(u - 1) >> 1])
                  : s.add(i[(-u - 1) >> 1].neg()));
          }
          return "affine" === t.type ? s.toP() : s;
        }),
        (E.prototype._wnafMulAdd = function (t, e, r, n, i) {
          var o,
            s,
            a,
            l = this._wnafT1,
            u = this._wnafT2,
            f = this._wnafT3,
            h = 0;
          for (o = 0; o < n; o++) {
            var c = (a = e[o])._getNAFPoints(t);
            (l[o] = c.wnd), (u[o] = c.points);
          }
          for (o = n - 1; o >= 1; o -= 2) {
            var d = o - 1,
              p = o;
            if (1 !== l[d] || 1 !== l[p]) {
              (f[d] = b(r[d], l[d], this._bitLength)),
                (f[p] = b(r[p], l[p], this._bitLength)),
                (h = Math.max(f[d].length, h)),
                (h = Math.max(f[p].length, h));
              continue;
            }
            var g = [e[d], null, null, e[p]];
            0 === e[d].y.cmp(e[p].y)
              ? ((g[1] = e[d].add(e[p])),
                (g[2] = e[d].toJ().mixedAdd(e[p].neg())))
              : 0 === e[d].y.cmp(e[p].y.redNeg())
              ? ((g[1] = e[d].toJ().mixedAdd(e[p])),
                (g[2] = e[d].add(e[p].neg())))
              : ((g[1] = e[d].toJ().mixedAdd(e[p])),
                (g[2] = e[d].toJ().mixedAdd(e[p].neg())));
            var m = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
              y = w(r[d], r[p]);
            for (
              s = 0,
                h = Math.max(y[0].length, h),
                f[d] = Array(h),
                f[p] = Array(h);
              s < h;
              s++
            ) {
              var v = 0 | y[0][s],
                A = 0 | y[1][s];
              (f[d][s] = m[(v + 1) * 3 + (A + 1)]), (f[p][s] = 0), (u[d] = g);
            }
          }
          var E = this.jpoint(null, null, null),
            x = this._wnafT4;
          for (o = h; o >= 0; o--) {
            for (var _ = 0; o >= 0; ) {
              var k = !0;
              for (s = 0; s < n; s++)
                (x[s] = 0 | f[s][o]), 0 !== x[s] && (k = !1);
              if (!k) break;
              _++, o--;
            }
            if ((o >= 0 && _++, (E = E.dblp(_)), o < 0)) break;
            for (s = 0; s < n; s++) {
              var N = x[s];
              0 !== N &&
                (N > 0
                  ? (a = u[s][(N - 1) >> 1])
                  : N < 0 && (a = u[s][(-N - 1) >> 1].neg()),
                (E = "affine" === a.type ? E.mixedAdd(a) : E.add(a)));
            }
          }
          for (o = 0; o < n; o++) u[o] = null;
          return i ? E : E.toP();
        }),
        (E.BasePoint = x),
        (x.prototype.eq = function () {
          throw Error("Not implemented");
        }),
        (x.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (E.prototype.decodePoint = function (t, e) {
          t = v.toArray(t, e);
          var r = this.p.byteLength();
          if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r)
            return (
              6 === t[0]
                ? A(t[t.length - 1] % 2 == 0)
                : 7 === t[0] && A(t[t.length - 1] % 2 == 1),
              this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r))
            );
          if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r)
            return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
          throw Error("Unknown point format");
        }),
        (x.prototype.encodeCompressed = function (t) {
          return this.encode(t, !0);
        }),
        (x.prototype._encode = function (t) {
          var e = this.curve.p.byteLength(),
            r = this.getX().toArray("be", e);
          return t
            ? [this.getY().isEven() ? 2 : 3].concat(r)
            : [4].concat(r, this.getY().toArray("be", e));
        }),
        (x.prototype.encode = function (t, e) {
          return v.encode(this._encode(e), t);
        }),
        (x.prototype.precompute = function (t) {
          if (this.precomputed) return this;
          var e = { doubles: null, naf: null, beta: null };
          return (
            (e.naf = this._getNAFPoints(8)),
            (e.doubles = this._getDoubles(4, t)),
            (e.beta = this._getBeta()),
            (this.precomputed = e),
            this
          );
        }),
        (x.prototype._hasDoubles = function (t) {
          if (!this.precomputed) return !1;
          var e = this.precomputed.doubles;
          return (
            !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
          );
        }),
        (x.prototype._getDoubles = function (t, e) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var r = [this], n = this, i = 0; i < e; i += t) {
            for (var o = 0; o < t; o++) n = n.dbl();
            r.push(n);
          }
          return { step: t, points: r };
        }),
        (x.prototype._getNAFPoints = function (t) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
          for (
            var e = [this],
              r = (1 << t) - 1,
              n = 1 === r ? null : this.dbl(),
              i = 1;
            i < r;
            i++
          )
            e[i] = e[i - 1].add(n);
          return { wnd: t, points: e };
        }),
        (x.prototype._getBeta = function () {
          return null;
        }),
        (x.prototype.dblp = function (t) {
          for (var e = this, r = 0; r < t; r++) e = e.dbl();
          return e;
        });
      var _ = p(function (t) {
          "function" == typeof Object.create
            ? (t.exports = function (t, e) {
                e &&
                  ((t.super_ = e),
                  (t.prototype = Object.create(e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })));
              })
            : (t.exports = function (t, e) {
                if (e) {
                  t.super_ = e;
                  var r = function () {};
                  (r.prototype = e.prototype),
                    (t.prototype = new r()),
                    (t.prototype.constructor = t);
                }
              });
        }),
        k = v.assert;
      function N(t) {
        E.call(this, "short", t),
          (this.a = new (h())(t.a, 16).toRed(this.red)),
          (this.b = new (h())(t.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(t)),
          (this._endoWnafT1 = [, , , ,]),
          (this._endoWnafT2 = [, , , ,]);
      }
      function S(t, e, r, n) {
        E.BasePoint.call(this, t, "affine"),
          null === e && null === r
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new (h())(e, 16)),
              (this.y = new (h())(r, 16)),
              n &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function M(t, e, r, n) {
        E.BasePoint.call(this, t, "jacobian"),
          null === e && null === r && null === n
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new (h())(0)))
            : ((this.x = new (h())(e, 16)),
              (this.y = new (h())(r, 16)),
              (this.z = new (h())(n, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      _(N, E),
        (N.prototype._getEndomorphism = function (t) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            if (t.beta) e = new (h())(t.beta, 16).toRed(this.red);
            else {
              var e,
                r,
                n,
                i = this._getEndoRoots(this.p);
              e = (e = 0 > i[0].cmp(i[1]) ? i[0] : i[1]).toRed(this.red);
            }
            if (t.lambda) r = new (h())(t.lambda, 16);
            else {
              var o = this._getEndoRoots(this.n);
              0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(e))
                ? (r = o[0])
                : ((r = o[1]),
                  k(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))));
            }
            return (
              (n = t.basis
                ? t.basis.map(function (t) {
                    return { a: new (h())(t.a, 16), b: new (h())(t.b, 16) };
                  })
                : this._getEndoBasis(r)),
              { beta: e, lambda: r, basis: n }
            );
          }
        }),
        (N.prototype._getEndoRoots = function (t) {
          var e = t === this.p ? this.red : h().mont(t),
            r = new (h())(2).toRed(e).redInvm(),
            n = r.redNeg(),
            i = new (h())(3).toRed(e).redNeg().redSqrt().redMul(r);
          return [n.redAdd(i).fromRed(), n.redSub(i).fromRed()];
        }),
        (N.prototype._getEndoBasis = function (t) {
          for (
            var e,
              r,
              n,
              i,
              o,
              s,
              a,
              l,
              u,
              f = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              c = t,
              d = this.n.clone(),
              p = new (h())(1),
              g = new (h())(0),
              m = new (h())(0),
              y = new (h())(1),
              v = 0;
            0 !== c.cmpn(0);

          ) {
            var b = d.div(c);
            (l = d.sub(b.mul(c))), (u = m.sub(b.mul(p)));
            var w = y.sub(b.mul(g));
            if (!n && 0 > l.cmp(f))
              (e = a.neg()), (r = p), (n = l.neg()), (i = u);
            else if (n && 2 == ++v) break;
            (a = l), (d = c), (c = l), (m = p), (p = u), (y = g), (g = w);
          }
          (o = l.neg()), (s = u);
          var A = n.sqr().add(i.sqr());
          return (
            o.sqr().add(s.sqr()).cmp(A) >= 0 && ((o = e), (s = r)),
            n.negative && ((n = n.neg()), (i = i.neg())),
            o.negative && ((o = o.neg()), (s = s.neg())),
            [
              { a: n, b: i },
              { a: o, b: s },
            ]
          );
        }),
        (N.prototype._endoSplit = function (t) {
          var e = this.endo.basis,
            r = e[0],
            n = e[1],
            i = n.b.mul(t).divRound(this.n),
            o = r.b.neg().mul(t).divRound(this.n),
            s = i.mul(r.a),
            a = o.mul(n.a),
            l = i.mul(r.b),
            u = o.mul(n.b);
          return { k1: t.sub(s).sub(a), k2: l.add(u).neg() };
        }),
        (N.prototype.pointFromX = function (t, e) {
          (t = new (h())(t, 16)).red || (t = t.toRed(this.red));
          var r = t
              .redSqr()
              .redMul(t)
              .redIAdd(t.redMul(this.a))
              .redIAdd(this.b),
            n = r.redSqrt();
          if (0 !== n.redSqr().redSub(r).cmp(this.zero))
            throw Error("invalid point");
          var i = n.fromRed().isOdd();
          return ((e && !i) || (!e && i)) && (n = n.redNeg()), this.point(t, n);
        }),
        (N.prototype.validate = function (t) {
          if (t.inf) return !0;
          var e = t.x,
            r = t.y,
            n = this.a.redMul(e),
            i = e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);
          return 0 === r.redSqr().redISub(i).cmpn(0);
        }),
        (N.prototype._endoWnafMulAdd = function (t, e, r) {
          for (
            var n = this._endoWnafT1, i = this._endoWnafT2, o = 0;
            o < t.length;
            o++
          ) {
            var s = this._endoSplit(e[o]),
              a = t[o],
              l = a._getBeta();
            s.k1.negative && (s.k1.ineg(), (a = a.neg(!0))),
              s.k2.negative && (s.k2.ineg(), (l = l.neg(!0))),
              (n[2 * o] = a),
              (n[2 * o + 1] = l),
              (i[2 * o] = s.k1),
              (i[2 * o + 1] = s.k2);
          }
          for (
            var u = this._wnafMulAdd(1, n, i, 2 * o, r), f = 0;
            f < 2 * o;
            f++
          )
            (n[f] = null), (i[f] = null);
          return u;
        }),
        _(S, E.BasePoint),
        (N.prototype.point = function (t, e, r) {
          return new S(this, t, e, r);
        }),
        (N.prototype.pointFromJSON = function (t, e) {
          return S.fromJSON(this, t, e);
        }),
        (S.prototype._getBeta = function () {
          if (this.curve.endo) {
            var t = this.precomputed;
            if (t && t.beta) return t.beta;
            var e = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y
            );
            if (t) {
              var r = this.curve,
                n = function (t) {
                  return r.point(t.x.redMul(r.endo.beta), t.y);
                };
              (t.beta = e),
                (e.precomputed = {
                  beta: null,
                  naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(n) },
                  doubles: t.doubles && {
                    step: t.doubles.step,
                    points: t.doubles.points.map(n),
                  },
                });
            }
            return e;
          }
        }),
        (S.prototype.toJSON = function () {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1),
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1),
                  },
                },
              ]
            : [this.x, this.y];
        }),
        (S.fromJSON = function (t, e, r) {
          "string" == typeof e && (e = JSON.parse(e));
          var n = t.point(e[0], e[1], r);
          if (!e[2]) return n;
          function i(e) {
            return t.point(e[0], e[1], r);
          }
          var o = e[2];
          return (
            (n.precomputed = {
              beta: null,
              doubles: o.doubles && {
                step: o.doubles.step,
                points: [n].concat(o.doubles.points.map(i)),
              },
              naf: o.naf && {
                wnd: o.naf.wnd,
                points: [n].concat(o.naf.points.map(i)),
              },
            }),
            n
          );
        }),
        (S.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                ">";
        }),
        (S.prototype.isInfinity = function () {
          return this.inf;
        }),
        (S.prototype.add = function (t) {
          if (this.inf) return t;
          if (t.inf) return this;
          if (this.eq(t)) return this.dbl();
          if (this.neg().eq(t) || 0 === this.x.cmp(t.x))
            return this.curve.point(null, null);
          var e = this.y.redSub(t.y);
          0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
          var r = e.redSqr().redISub(this.x).redISub(t.x),
            n = e.redMul(this.x.redSub(r)).redISub(this.y);
          return this.curve.point(r, n);
        }),
        (S.prototype.dbl = function () {
          if (this.inf) return this;
          var t = this.y.redAdd(this.y);
          if (0 === t.cmpn(0)) return this.curve.point(null, null);
          var e = this.curve.a,
            r = this.x.redSqr(),
            n = t.redInvm(),
            i = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(n),
            o = i.redSqr().redISub(this.x.redAdd(this.x)),
            s = i.redMul(this.x.redSub(o)).redISub(this.y);
          return this.curve.point(o, s);
        }),
        (S.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (S.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (S.prototype.mul = function (t) {
          return ((t = new (h())(t, 16)), this.isInfinity())
            ? this
            : this._hasDoubles(t)
            ? this.curve._fixedNafMul(this, t)
            : this.curve.endo
            ? this.curve._endoWnafMulAdd([this], [t])
            : this.curve._wnafMul(this, t);
        }),
        (S.prototype.mulAdd = function (t, e, r) {
          var n = [this, e],
            i = [t, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i)
            : this.curve._wnafMulAdd(1, n, i, 2);
        }),
        (S.prototype.jmulAdd = function (t, e, r) {
          var n = [this, e],
            i = [t, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i, !0)
            : this.curve._wnafMulAdd(1, n, i, 2, !0);
        }),
        (S.prototype.eq = function (t) {
          return (
            this === t ||
            (this.inf === t.inf &&
              (this.inf || (0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))))
          );
        }),
        (S.prototype.neg = function (t) {
          if (this.inf) return this;
          var e = this.curve.point(this.x, this.y.redNeg());
          if (t && this.precomputed) {
            var r = this.precomputed,
              n = function (t) {
                return t.neg();
              };
            e.precomputed = {
              naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(n) },
              doubles: r.doubles && {
                step: r.doubles.step,
                points: r.doubles.points.map(n),
              },
            };
          }
          return e;
        }),
        (S.prototype.toJ = function () {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        _(M, E.BasePoint),
        (N.prototype.jpoint = function (t, e, r) {
          return new M(this, t, e, r);
        }),
        (M.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var t = this.z.redInvm(),
            e = t.redSqr(),
            r = this.x.redMul(e),
            n = this.y.redMul(e).redMul(t);
          return this.curve.point(r, n);
        }),
        (M.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (M.prototype.add = function (t) {
          if (this.isInfinity()) return t;
          if (t.isInfinity()) return this;
          var e = t.z.redSqr(),
            r = this.z.redSqr(),
            n = this.x.redMul(e),
            i = t.x.redMul(r),
            o = this.y.redMul(e.redMul(t.z)),
            s = t.y.redMul(r.redMul(this.z)),
            a = n.redSub(i),
            l = o.redSub(s);
          if (0 === a.cmpn(0))
            return 0 !== l.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var u = a.redSqr(),
            f = u.redMul(a),
            h = n.redMul(u),
            c = l.redSqr().redIAdd(f).redISub(h).redISub(h),
            d = l.redMul(h.redISub(c)).redISub(o.redMul(f)),
            p = this.z.redMul(t.z).redMul(a);
          return this.curve.jpoint(c, d, p);
        }),
        (M.prototype.mixedAdd = function (t) {
          if (this.isInfinity()) return t.toJ();
          if (t.isInfinity()) return this;
          var e = this.z.redSqr(),
            r = this.x,
            n = t.x.redMul(e),
            i = this.y,
            o = t.y.redMul(e).redMul(this.z),
            s = r.redSub(n),
            a = i.redSub(o);
          if (0 === s.cmpn(0))
            return 0 !== a.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var l = s.redSqr(),
            u = l.redMul(s),
            f = r.redMul(l),
            h = a.redSqr().redIAdd(u).redISub(f).redISub(f),
            c = a.redMul(f.redISub(h)).redISub(i.redMul(u)),
            d = this.z.redMul(s);
          return this.curve.jpoint(h, c, d);
        }),
        (M.prototype.dblp = function (t) {
          if (0 === t || this.isInfinity()) return this;
          if (!t) return this.dbl();
          if (this.curve.zeroA || this.curve.threeA) {
            var e,
              r = this;
            for (e = 0; e < t; e++) r = r.dbl();
            return r;
          }
          var n = this.curve.a,
            i = this.curve.tinv,
            o = this.x,
            s = this.y,
            a = this.z,
            l = a.redSqr().redSqr(),
            u = s.redAdd(s);
          for (e = 0; e < t; e++) {
            var f = o.redSqr(),
              h = u.redSqr(),
              c = h.redSqr(),
              d = f.redAdd(f).redIAdd(f).redIAdd(n.redMul(l)),
              p = o.redMul(h),
              g = d.redSqr().redISub(p.redAdd(p)),
              m = p.redISub(g),
              y = d.redMul(m);
            y = y.redIAdd(y).redISub(c);
            var v = u.redMul(a);
            e + 1 < t && (l = l.redMul(c)), (o = g), (a = v), (u = y);
          }
          return this.curve.jpoint(o, u.redMul(i), a);
        }),
        (M.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl();
        }),
        (M.prototype._zeroDbl = function () {
          if (this.zOne) {
            var t,
              e,
              r,
              n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
            s = s.redIAdd(s);
            var a = n.redAdd(n).redIAdd(n),
              l = a.redSqr().redISub(s).redISub(s),
              u = o.redIAdd(o);
            (u = (u = u.redIAdd(u)).redIAdd(u)),
              (t = l),
              (e = a.redMul(s.redISub(l)).redISub(u)),
              (r = this.y.redAdd(this.y));
          } else {
            var f = this.x.redSqr(),
              h = this.y.redSqr(),
              c = h.redSqr(),
              d = this.x.redAdd(h).redSqr().redISub(f).redISub(c);
            d = d.redIAdd(d);
            var p = f.redAdd(f).redIAdd(f),
              g = p.redSqr(),
              m = c.redIAdd(c);
            (m = (m = m.redIAdd(m)).redIAdd(m)),
              (t = g.redISub(d).redISub(d)),
              (e = p.redMul(d.redISub(t)).redISub(m)),
              (r = (r = this.y.redMul(this.z)).redIAdd(r));
          }
          return this.curve.jpoint(t, e, r);
        }),
        (M.prototype._threeDbl = function () {
          if (this.zOne) {
            var t,
              e,
              r,
              n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
            s = s.redIAdd(s);
            var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
              l = a.redSqr().redISub(s).redISub(s);
            t = l;
            var u = o.redIAdd(o);
            (u = (u = u.redIAdd(u)).redIAdd(u)),
              (e = a.redMul(s.redISub(l)).redISub(u)),
              (r = this.y.redAdd(this.y));
          } else {
            var f = this.z.redSqr(),
              h = this.y.redSqr(),
              c = this.x.redMul(h),
              d = this.x.redSub(f).redMul(this.x.redAdd(f));
            d = d.redAdd(d).redIAdd(d);
            var p = c.redIAdd(c),
              g = (p = p.redIAdd(p)).redAdd(p);
            (t = d.redSqr().redISub(g)),
              (r = this.y.redAdd(this.z).redSqr().redISub(h).redISub(f));
            var m = h.redSqr();
            (m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m)),
              (e = d.redMul(p.redISub(t)).redISub(m));
          }
          return this.curve.jpoint(t, e, r);
        }),
        (M.prototype._dbl = function () {
          var t = this.curve.a,
            e = this.x,
            r = this.y,
            n = this.z,
            i = n.redSqr().redSqr(),
            o = e.redSqr(),
            s = r.redSqr(),
            a = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i)),
            l = e.redAdd(e),
            u = (l = l.redIAdd(l)).redMul(s),
            f = a.redSqr().redISub(u.redAdd(u)),
            h = u.redISub(f),
            c = s.redSqr();
          c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
          var d = a.redMul(h).redISub(c),
            p = r.redAdd(r).redMul(n);
          return this.curve.jpoint(f, d, p);
        }),
        (M.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var t = this.x.redSqr(),
            e = this.y.redSqr(),
            r = this.z.redSqr(),
            n = e.redSqr(),
            i = t.redAdd(t).redIAdd(t),
            o = i.redSqr(),
            s = this.x.redAdd(e).redSqr().redISub(t).redISub(n),
            a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(
              o
            )).redSqr(),
            l = n.redIAdd(n);
          l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l);
          var u = i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(l),
            f = e.redMul(u);
          f = (f = f.redIAdd(f)).redIAdd(f);
          var h = this.x.redMul(a).redISub(f);
          h = (h = h.redIAdd(h)).redIAdd(h);
          var c = this.y.redMul(u.redMul(l.redISub(u)).redISub(s.redMul(a)));
          c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
          var d = this.z.redAdd(s).redSqr().redISub(r).redISub(a);
          return this.curve.jpoint(h, c, d);
        }),
        (M.prototype.mul = function (t, e) {
          return (t = new (h())(t, e)), this.curve._wnafMul(this, t);
        }),
        (M.prototype.eq = function (t) {
          if ("affine" === t.type) return this.eq(t.toJ());
          if (this === t) return !0;
          var e = this.z.redSqr(),
            r = t.z.redSqr();
          if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
          var n = e.redMul(this.z),
            i = r.redMul(t.z);
          return 0 === this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0);
        }),
        (M.prototype.eqXToP = function (t) {
          var e = this.z.redSqr(),
            r = t.toRed(this.curve.red).redMul(e);
          if (0 === this.x.cmp(r)) return !0;
          for (var n = t.clone(), i = this.curve.redN.redMul(e); ; ) {
            if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1;
            if ((r.redIAdd(i), 0 === this.x.cmp(r))) return !0;
          }
        }),
        (M.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC JPoint Infinity>"
            : "<EC JPoint x: " +
                this.x.toString(16, 2) +
                " y: " +
                this.y.toString(16, 2) +
                " z: " +
                this.z.toString(16, 2) +
                ">";
        }),
        (M.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        });
      var I = p(function (t, e) {
          (e.base = E), (e.short = N), (e.mont = null), (e.edwards = null);
        }),
        R = p(function (t, e) {
          var r,
            n = v.assert;
          function i(t) {
            "short" === t.type
              ? (this.curve = new I.short(t))
              : "edwards" === t.type
              ? (this.curve = new I.edwards(t))
              : (this.curve = new I.mont(t)),
              (this.g = this.curve.g),
              (this.n = this.curve.n),
              (this.hash = t.hash),
              n(this.g.validate(), "Invalid curve"),
              n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
          }
          function o(t, r) {
            Object.defineProperty(e, t, {
              configurable: !0,
              enumerable: !0,
              get: function () {
                var n = new i(r);
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                  }),
                  n
                );
              },
            });
          }
          (e.PresetCurve = i),
            o("p192", {
              type: "short",
              prime: "p192",
              p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
              b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
              n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
              hash: d().sha256,
              gRed: !1,
              g: [
                "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
                "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
              ],
            }),
            o("p224", {
              type: "short",
              prime: "p224",
              p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
              b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
              n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
              hash: d().sha256,
              gRed: !1,
              g: [
                "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
                "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
              ],
            }),
            o("p256", {
              type: "short",
              prime: null,
              p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
              a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
              b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
              n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
              hash: d().sha256,
              gRed: !1,
              g: [
                "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
                "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
              ],
            }),
            o("p384", {
              type: "short",
              prime: null,
              p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
              a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
              b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
              n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
              hash: d().sha384,
              gRed: !1,
              g: [
                "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
                "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
              ],
            }),
            o("p521", {
              type: "short",
              prime: null,
              p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
              a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
              b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
              n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
              hash: d().sha512,
              gRed: !1,
              g: [
                "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
                "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
              ],
            }),
            o("curve25519", {
              type: "mont",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "76d06",
              b: "1",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: d().sha256,
              gRed: !1,
              g: ["9"],
            }),
            o("ed25519", {
              type: "edwards",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "-1",
              c: "1",
              d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: d().sha256,
              gRed: !1,
              g: [
                "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
                "6666666666666666666666666666666666666666666666666666666666666658",
              ],
            });
          try {
            r = null.crash();
          } catch (t) {
            r = void 0;
          }
          o("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: d().sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda:
              "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [
              {
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3",
              },
              {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15",
              },
            ],
            gRed: !1,
            g: [
              "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
              "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
              r,
            ],
          });
        });
      function T(t) {
        if (!(this instanceof T)) return new T(t);
        (this.hash = t.hash),
          (this.predResist = !!t.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = t.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var e = y.toArray(t.entropy, t.entropyEnc || "hex"),
          r = y.toArray(t.nonce, t.nonceEnc || "hex"),
          n = y.toArray(t.pers, t.persEnc || "hex");
        g(
          e.length >= this.minEntropy / 8,
          "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
        ),
          this._init(e, r, n);
      }
      (T.prototype._init = function (t, e, r) {
        var n = t.concat(e).concat(r);
        (this.K = Array(this.outLen / 8)), (this.V = Array(this.outLen / 8));
        for (var i = 0; i < this.V.length; i++)
          (this.K[i] = 0), (this.V[i] = 1);
        this._update(n),
          (this._reseed = 1),
          (this.reseedInterval = 0x1000000000000);
      }),
        (T.prototype._hmac = function () {
          return new (d().hmac)(this.hash, this.K);
        }),
        (T.prototype._update = function (t) {
          var e = this._hmac().update(this.V).update([0]);
          t && (e = e.update(t)),
            (this.K = e.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            t &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(t)
                .digest()),
              (this.V = this._hmac().update(this.V).digest()));
        }),
        (T.prototype.reseed = function (t, e, r, n) {
          "string" != typeof e && ((n = r), (r = e), (e = null)),
            (t = y.toArray(t, e)),
            (r = y.toArray(r, n)),
            g(
              t.length >= this.minEntropy / 8,
              "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
            ),
            this._update(t.concat(r || [])),
            (this._reseed = 1);
        }),
        (T.prototype.generate = function (t, e, r, n) {
          if (this._reseed > this.reseedInterval)
            throw Error("Reseed is required");
          "string" != typeof e && ((n = r), (r = e), (e = null)),
            r && ((r = y.toArray(r, n || "hex")), this._update(r));
          for (var i = []; i.length < t; )
            (this.V = this._hmac().update(this.V).digest()),
              (i = i.concat(this.V));
          var o = i.slice(0, t);
          return this._update(r), this._reseed++, y.encode(o, e);
        });
      var P = v.assert;
      function O(t, e) {
        (this.ec = t),
          (this.priv = null),
          (this.pub = null),
          e.priv && this._importPrivate(e.priv, e.privEnc),
          e.pub && this._importPublic(e.pub, e.pubEnc);
      }
      (O.fromPublic = function (t, e, r) {
        return e instanceof O ? e : new O(t, { pub: e, pubEnc: r });
      }),
        (O.fromPrivate = function (t, e, r) {
          return e instanceof O ? e : new O(t, { priv: e, privEnc: r });
        }),
        (O.prototype.validate = function () {
          var t = this.getPublic();
          return t.isInfinity()
            ? { result: !1, reason: "Invalid public key" }
            : t.validate()
            ? t.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: "Public key * N != O" }
            : { result: !1, reason: "Public key is not a point" };
        }),
        (O.prototype.getPublic = function (t, e) {
          return ("string" == typeof t && ((e = t), (t = null)),
          this.pub || (this.pub = this.ec.g.mul(this.priv)),
          e)
            ? this.pub.encode(e, t)
            : this.pub;
        }),
        (O.prototype.getPrivate = function (t) {
          return "hex" === t ? this.priv.toString(16, 2) : this.priv;
        }),
        (O.prototype._importPrivate = function (t, e) {
          (this.priv = new (h())(t, e || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (O.prototype._importPublic = function (t, e) {
          if (t.x || t.y) {
            "mont" === this.ec.curve.type
              ? P(t.x, "Need x coordinate")
              : ("short" === this.ec.curve.type ||
                  "edwards" === this.ec.curve.type) &&
                P(t.x && t.y, "Need both x and y coordinate"),
              (this.pub = this.ec.curve.point(t.x, t.y));
            return;
          }
          this.pub = this.ec.curve.decodePoint(t, e);
        }),
        (O.prototype.derive = function (t) {
          return (
            t.validate() || P(t.validate(), "public point not validated"),
            t.mul(this.priv).getX()
          );
        }),
        (O.prototype.sign = function (t, e, r) {
          return this.ec.sign(t, this, e, r);
        }),
        (O.prototype.verify = function (t, e, r) {
          return this.ec.verify(t, e, this, void 0, r);
        }),
        (O.prototype.inspect = function () {
          return (
            "<Key priv: " +
            (this.priv && this.priv.toString(16, 2)) +
            " pub: " +
            (this.pub && this.pub.inspect()) +
            " >"
          );
        });
      var B = v.assert;
      function C(t, e) {
        if (t instanceof C) return t;
        this._importDER(t, e) ||
          (B(t.r && t.s, "Signature without r or s"),
          (this.r = new (h())(t.r, 16)),
          (this.s = new (h())(t.s, 16)),
          void 0 === t.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = t.recoveryParam));
      }
      function L() {
        this.place = 0;
      }
      function U(t, e) {
        var r = t[e.place++];
        if (!(128 & r)) return r;
        var n = 15 & r;
        if (0 === n || n > 4 || 0 === t[e.place]) return !1;
        for (var i = 0, o = 0, s = e.place; o < n; o++, s++)
          (i <<= 8), (i |= t[s]), (i >>>= 0);
        return !(i <= 127) && ((e.place = s), i);
      }
      function F(t) {
        for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r; )
          e++;
        return 0 === e ? t : t.slice(e);
      }
      function D(t, e) {
        if (e < 128) {
          t.push(e);
          return;
        }
        var r = 1 + ((Math.log(e) / Math.LN2) >>> 3);
        for (t.push(128 | r); --r; ) t.push((e >>> (r << 3)) & 255);
        t.push(e);
      }
      (C.prototype._importDER = function (t, e) {
        t = v.toArray(t, e);
        var r = new L();
        if (48 !== t[r.place++]) return !1;
        var n = U(t, r);
        if (!1 === n || n + r.place !== t.length || 2 !== t[r.place++])
          return !1;
        var i = U(t, r);
        if (!1 === i || (128 & t[r.place]) != 0) return !1;
        var o = t.slice(r.place, i + r.place);
        if (((r.place += i), 2 !== t[r.place++])) return !1;
        var s = U(t, r);
        if (!1 === s || t.length !== s + r.place || (128 & t[r.place]) != 0)
          return !1;
        var a = t.slice(r.place, s + r.place);
        if (0 === o[0]) {
          if (!(128 & o[1])) return !1;
          o = o.slice(1);
        }
        if (0 === a[0]) {
          if (!(128 & a[1])) return !1;
          a = a.slice(1);
        }
        return (
          (this.r = new (h())(o)),
          (this.s = new (h())(a)),
          (this.recoveryParam = null),
          !0
        );
      }),
        (C.prototype.toDER = function (t) {
          var e = this.r.toArray(),
            r = this.s.toArray();
          for (
            128 & e[0] && (e = [0].concat(e)),
              128 & r[0] && (r = [0].concat(r)),
              e = F(e),
              r = F(r);
            !r[0] && !(128 & r[1]);

          )
            r = r.slice(1);
          var n = [2];
          D(n, e.length), (n = n.concat(e)).push(2), D(n, r.length);
          var i = n.concat(r),
            o = [48];
          return D(o, i.length), (o = o.concat(i)), v.encode(o, t);
        });
      var j = function () {
          throw Error("unsupported");
        },
        q = v.assert;
      function H(t) {
        if (!(this instanceof H)) return new H(t);
        "string" == typeof t &&
          (q(Object.prototype.hasOwnProperty.call(R, t), "Unknown curve " + t),
          (t = R[t])),
          t instanceof R.PresetCurve && (t = { curve: t }),
          (this.curve = t.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = t.curve.g),
          this.g.precompute(t.curve.n.bitLength() + 1),
          (this.hash = t.hash || t.curve.hash);
      }
      (H.prototype.keyPair = function (t) {
        return new O(this, t);
      }),
        (H.prototype.keyFromPrivate = function (t, e) {
          return O.fromPrivate(this, t, e);
        }),
        (H.prototype.keyFromPublic = function (t, e) {
          return O.fromPublic(this, t, e);
        }),
        (H.prototype.genKeyPair = function (t) {
          t || (t = {});
          for (
            var e = new T({
                hash: this.hash,
                pers: t.pers,
                persEnc: t.persEnc || "utf8",
                entropy: t.entropy || j(this.hash.hmacStrength),
                entropyEnc: (t.entropy && t.entropyEnc) || "utf8",
                nonce: this.n.toArray(),
              }),
              r = this.n.byteLength(),
              n = this.n.sub(new (h())(2));
            ;

          ) {
            var i = new (h())(e.generate(r));
            if (!(i.cmp(n) > 0)) return i.iaddn(1), this.keyFromPrivate(i);
          }
        }),
        (H.prototype._truncateToN = function (t, e, r) {
          if (h().isBN(t) || "number" == typeof t)
            n = (t = new (h())(t, 16)).byteLength();
          else if ("object" == typeof t) (n = t.length), (t = new (h())(t, 16));
          else {
            var n,
              i = t.toString();
            (n = (i.length + 1) >>> 1), (t = new (h())(i, 16));
          }
          "number" != typeof r && (r = 8 * n);
          var o = r - this.n.bitLength();
          return (o > 0 && (t = t.ushrn(o)), !e && t.cmp(this.n) >= 0)
            ? t.sub(this.n)
            : t;
        }),
        (H.prototype.sign = function (t, e, r, n) {
          if (
            ("object" == typeof r && ((n = r), (r = null)),
            n || (n = {}),
            "string" != typeof t && "number" != typeof t && !h().isBN(t))
          ) {
            q(
              "object" == typeof t && t && "number" == typeof t.length,
              "Expected message to be an array-like, a hex string, or a BN instance"
            ),
              q(t.length >>> 0 === t.length);
            for (var i = 0; i < t.length; i++) q((255 & t[i]) === t[i]);
          }
          (e = this.keyFromPrivate(e, r)),
            q(
              !(t = this._truncateToN(t, !1, n.msgBitLength)).isNeg(),
              "Can not sign a negative message"
            );
          var o = this.n.byteLength(),
            s = e.getPrivate().toArray("be", o),
            a = t.toArray("be", o);
          q(new (h())(a).eq(t), "Can not sign message");
          for (
            var l = new T({
                hash: this.hash,
                entropy: s,
                nonce: a,
                pers: n.pers,
                persEnc: n.persEnc || "utf8",
              }),
              u = this.n.sub(new (h())(1)),
              f = 0;
            ;
            f++
          ) {
            var c = n.k ? n.k(f) : new (h())(l.generate(this.n.byteLength()));
            if (
              !(0 >= (c = this._truncateToN(c, !0)).cmpn(1) || c.cmp(u) >= 0)
            ) {
              var d = this.g.mul(c);
              if (!d.isInfinity()) {
                var p = d.getX(),
                  g = p.umod(this.n);
                if (0 !== g.cmpn(0)) {
                  var m = c.invm(this.n).mul(g.mul(e.getPrivate()).iadd(t));
                  if (0 !== (m = m.umod(this.n)).cmpn(0)) {
                    var y =
                      (d.getY().isOdd() ? 1 : 0) | (0 !== p.cmp(g) ? 2 : 0);
                    return (
                      n.canonical &&
                        m.cmp(this.nh) > 0 &&
                        ((m = this.n.sub(m)), (y ^= 1)),
                      new C({ r: g, s: m, recoveryParam: y })
                    );
                  }
                }
              }
            }
          }
        }),
        (H.prototype.verify = function (t, e, r, n, i) {
          i || (i = {}),
            (t = this._truncateToN(t, !1, i.msgBitLength)),
            (r = this.keyFromPublic(r, n));
          var o,
            s = (e = new C(e, "hex")).r,
            a = e.s;
          if (
            0 > s.cmpn(1) ||
            s.cmp(this.n) >= 0 ||
            0 > a.cmpn(1) ||
            a.cmp(this.n) >= 0
          )
            return !1;
          var l = a.invm(this.n),
            u = l.mul(t).umod(this.n),
            f = l.mul(s).umod(this.n);
          return this.curve._maxwellTrick
            ? !(o = this.g.jmulAdd(u, r.getPublic(), f)).isInfinity() &&
                o.eqXToP(s)
            : !(o = this.g.mulAdd(u, r.getPublic(), f)).isInfinity() &&
                0 === o.getX().umod(this.n).cmp(s);
        }),
        (H.prototype.recoverPubKey = function (t, e, r, n) {
          q((3 & r) === r, "The recovery param is more than two bits"),
            (e = new C(e, n));
          var i = this.n,
            o = new (h())(t),
            s = e.r,
            a = e.s,
            l = 1 & r,
            u = r >> 1;
          if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u)
            throw Error("Unable to find sencond key candinate");
          s = u
            ? this.curve.pointFromX(s.add(this.curve.n), l)
            : this.curve.pointFromX(s, l);
          var f = e.r.invm(i),
            c = i.sub(o).mul(f).umod(i),
            d = a.mul(f).umod(i);
          return this.g.mulAdd(c, s, d);
        }),
        (H.prototype.getKeyRecoveryParam = function (t, e, r, n) {
          if (null !== (e = new C(e, n)).recoveryParam) return e.recoveryParam;
          for (var i, o = 0; o < 4; o++) {
            try {
              i = this.recoverPubKey(t, e, o);
            } catch (t) {
              continue;
            }
            if (i.eq(r)) return o;
          }
          throw Error("Unable to find valid recovery factor");
        });
      var z = p(function (t, e) {
          (e.version = "6.6.1"),
            (e.utils = v),
            (e.rand = function () {
              throw Error("unsupported");
            }),
            (e.curve = I),
            (e.curves = R),
            (e.ec = H),
            (e.eddsa = null);
        }).ec,
        G = r(9121),
        V = r(8366);
      let Y = new V.Vy("signing-key/5.8.0"),
        J = null;
      function K() {
        return J || (J = new z("secp256k1")), J;
      }
      class W {
        constructor(t) {
          (0, G.yY)(this, "curve", "secp256k1"),
            (0, G.yY)(this, "privateKey", (0, s.c$)(t)),
            32 !== (0, s.cm)(this.privateKey) &&
              Y.throwArgumentError(
                "invalid private key",
                "privateKey",
                "[[ REDACTED ]]"
              );
          let e = K().keyFromPrivate((0, s.k9)(this.privateKey));
          (0, G.yY)(this, "publicKey", "0x" + e.getPublic(!1, "hex")),
            (0, G.yY)(
              this,
              "compressedPublicKey",
              "0x" + e.getPublic(!0, "hex")
            ),
            (0, G.yY)(this, "_isSigningKey", !0);
        }
        _addPoint(t) {
          let e = K().keyFromPublic((0, s.k9)(this.publicKey)),
            r = K().keyFromPublic((0, s.k9)(t));
          return "0x" + e.pub.add(r.pub).encodeCompressed("hex");
        }
        signDigest(t) {
          let e = K().keyFromPrivate((0, s.k9)(this.privateKey)),
            r = (0, s.k9)(t);
          32 !== r.length &&
            Y.throwArgumentError("bad digest length", "digest", t);
          let n = e.sign(r, { canonical: !0 });
          return (0, s.Pc)({
            recoveryParam: n.recoveryParam,
            r: (0, s.bj)("0x" + n.r.toString(16), 32),
            s: (0, s.bj)("0x" + n.s.toString(16), 32),
          });
        }
        computeSharedSecret(t) {
          let e = K().keyFromPrivate((0, s.k9)(this.privateKey)),
            r = K().keyFromPublic((0, s.k9)(Q(t)));
          return (0, s.bj)("0x" + e.derive(r.getPublic()).toString(16), 32);
        }
        static isSigningKey(t) {
          return !!(t && t._isSigningKey);
        }
      }
      function Q(t, e) {
        let r = (0, s.k9)(t);
        if (32 === r.length) {
          let t = new W(r);
          return e
            ? "0x" + K().keyFromPrivate(r).getPublic(!0, "hex")
            : t.publicKey;
        }
        return 33 === r.length
          ? e
            ? (0, s.c$)(r)
            : "0x" + K().keyFromPublic(r).getPublic(!1, "hex")
          : 65 === r.length
          ? e
            ? "0x" + K().keyFromPublic(r).getPublic(!0, "hex")
            : (0, s.c$)(r)
          : Y.throwArgumentError(
              "invalid public or private key",
              "key",
              "[REDACTED]"
            );
      }
      let X = new V.Vy("transactions/5.8.0");
      function Z(t) {
        return "0x" === t ? null : (0, i.bv)(t);
      }
      function $(t) {
        return "0x" === t ? a.XK : o.gH.from(t);
      }
      function tt(t, e) {
        return (function (t) {
          let e = Q(t);
          return (0, i.bv)((0, s.Ab)((0, l.S)((0, s.Ab)(e, 1)), 12));
        })(
          (function (t, e) {
            let r = (0, s.Pc)(e),
              n = { r: (0, s.k9)(r.r), s: (0, s.k9)(r.s) };
            return (
              "0x" +
              K()
                .recoverPubKey((0, s.k9)(t), n, r.recoveryParam)
                .encode("hex", !1)
            );
          })((0, s.k9)(t), e)
        );
      }
      function te(t, e) {
        let r = (0, s.gr)(o.gH.from(t).toHexString());
        return (
          r.length > 32 &&
            X.throwArgumentError(
              "invalid length for " + e,
              "transaction:" + e,
              t
            ),
          r
        );
      }
      function tr(t, e) {
        return {
          address: (0, i.bv)(t),
          storageKeys: (e || []).map(
            (e, r) => (
              32 !== (0, s.cm)(e) &&
                X.throwArgumentError(
                  "invalid access list storageKey",
                  `accessList[${t}:${r}]`,
                  e
                ),
              e.toLowerCase()
            )
          ),
        };
      }
      function tn(t) {
        if (Array.isArray(t))
          return t.map((t, e) =>
            Array.isArray(t)
              ? (t.length > 2 &&
                  X.throwArgumentError(
                    "access list expected to be [ address, storageKeys[] ]",
                    `value[${e}]`,
                    t
                  ),
                tr(t[0], t[1]))
              : tr(t.address, t.storageKeys)
          );
        let e = Object.keys(t).map((e) => {
          let r = t[e].reduce((t, e) => ((t[e] = !0), t), {});
          return tr(e, Object.keys(r).sort());
        });
        return e.sort((t, e) => t.address.localeCompare(e.address)), e;
      }
      function ti(t) {
        return tn(t).map((t) => [t.address, t.storageKeys]);
      }
      function to(t, e) {
        if (null != t.gasPrice) {
          let e = o.gH.from(t.gasPrice),
            r = o.gH.from(t.maxFeePerGas || 0);
          e.eq(r) ||
            X.throwArgumentError(
              "mismatch EIP-1559 gasPrice != maxFeePerGas",
              "tx",
              { gasPrice: e, maxFeePerGas: r }
            );
        }
        let r = [
          te(t.chainId || 0, "chainId"),
          te(t.nonce || 0, "nonce"),
          te(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
          te(t.maxFeePerGas || 0, "maxFeePerGas"),
          te(t.gasLimit || 0, "gasLimit"),
          null != t.to ? (0, i.bv)(t.to) : "0x",
          te(t.value || 0, "value"),
          t.data || "0x",
          ti(t.accessList || []),
        ];
        if (e) {
          let t = (0, s.Pc)(e);
          r.push(te(t.recoveryParam, "recoveryParam")),
            r.push((0, s.gr)(t.r)),
            r.push((0, s.gr)(t.s));
        }
        return (0, s.qn)(["0x02", u.l(r)]);
      }
      function ts(t, e) {
        let r = [
          te(t.chainId || 0, "chainId"),
          te(t.nonce || 0, "nonce"),
          te(t.gasPrice || 0, "gasPrice"),
          te(t.gasLimit || 0, "gasLimit"),
          null != t.to ? (0, i.bv)(t.to) : "0x",
          te(t.value || 0, "value"),
          t.data || "0x",
          ti(t.accessList || []),
        ];
        if (e) {
          let t = (0, s.Pc)(e);
          r.push(te(t.recoveryParam, "recoveryParam")),
            r.push((0, s.gr)(t.r)),
            r.push((0, s.gr)(t.s));
        }
        return (0, s.qn)(["0x01", u.l(r)]);
      }
      function ta(t, e, r) {
        try {
          let r = $(e[0]).toNumber();
          if (0 !== r && 1 !== r) throw Error("bad recid");
          t.v = r;
        } catch (t) {
          X.throwArgumentError("invalid v for transaction type: 1", "v", e[0]);
        }
        (t.r = (0, s.bj)(e[1], 32)), (t.s = (0, s.bj)(e[2], 32));
        try {
          let e = (0, l.S)(r(t));
          t.from = tt(e, { r: t.r, s: t.s, recoveryParam: t.v });
        } catch (t) {}
      }
      function tl(t) {
        let e = (0, s.k9)(t);
        if (e[0] > 127)
          return (function (t) {
            let e = u.D(t);
            9 !== e.length &&
              6 !== e.length &&
              X.throwArgumentError(
                "invalid raw transaction",
                "rawTransaction",
                t
              );
            let r = {
              nonce: $(e[0]).toNumber(),
              gasPrice: $(e[1]),
              gasLimit: $(e[2]),
              to: Z(e[3]),
              value: $(e[4]),
              data: e[5],
              chainId: 0,
            };
            if (6 === e.length) return r;
            try {
              r.v = o.gH.from(e[6]).toNumber();
            } catch (t) {
              return r;
            }
            if (
              ((r.r = (0, s.bj)(e[7], 32)),
              (r.s = (0, s.bj)(e[8], 32)),
              o.gH.from(r.r).isZero() && o.gH.from(r.s).isZero())
            )
              (r.chainId = r.v), (r.v = 0);
            else {
              (r.chainId = Math.floor((r.v - 35) / 2)),
                r.chainId < 0 && (r.chainId = 0);
              let n = r.v - 27,
                i = e.slice(0, 6);
              0 !== r.chainId &&
                (i.push((0, s.c$)(r.chainId)),
                i.push("0x"),
                i.push("0x"),
                (n -= 2 * r.chainId + 8));
              let o = (0, l.S)(u.l(i));
              try {
                r.from = tt(o, {
                  r: (0, s.c$)(r.r),
                  s: (0, s.c$)(r.s),
                  recoveryParam: n,
                });
              } catch (t) {}
              r.hash = (0, l.S)(t);
            }
            return (r.type = null), r;
          })(e);
        switch (e[0]) {
          case 1:
            return (function (t) {
              let e = u.D(t.slice(1));
              8 !== e.length &&
                11 !== e.length &&
                X.throwArgumentError(
                  "invalid component count for transaction type: 1",
                  "payload",
                  (0, s.c$)(t)
                );
              let r = {
                type: 1,
                chainId: $(e[0]).toNumber(),
                nonce: $(e[1]).toNumber(),
                gasPrice: $(e[2]),
                gasLimit: $(e[3]),
                to: Z(e[4]),
                value: $(e[5]),
                data: e[6],
                accessList: tn(e[7]),
              };
              return (
                8 === e.length ||
                  ((r.hash = (0, l.S)(t)), ta(r, e.slice(8), ts)),
                r
              );
            })(e);
          case 2:
            return (function (t) {
              let e = u.D(t.slice(1));
              9 !== e.length &&
                12 !== e.length &&
                X.throwArgumentError(
                  "invalid component count for transaction type: 2",
                  "payload",
                  (0, s.c$)(t)
                );
              let r = $(e[2]),
                n = $(e[3]),
                i = {
                  type: 2,
                  chainId: $(e[0]).toNumber(),
                  nonce: $(e[1]).toNumber(),
                  maxPriorityFeePerGas: r,
                  maxFeePerGas: n,
                  gasPrice: null,
                  gasLimit: $(e[4]),
                  to: Z(e[5]),
                  value: $(e[6]),
                  data: e[7],
                  accessList: tn(e[8]),
                };
              return (
                9 === e.length ||
                  ((i.hash = (0, l.S)(t)), ta(i, e.slice(9), to)),
                i
              );
            })(e);
        }
        return X.throwError(
          `unsupported transaction type: ${e[0]}`,
          V.Vy.errors.UNSUPPORTED_OPERATION,
          { operation: "parseTransaction", transactionType: e[0] }
        );
      }
      !(function (t) {
        (t[(t.legacy = 0)] = "legacy"),
          (t[(t.eip2930 = 1)] = "eip2930"),
          (t[(t.eip1559 = 2)] = "eip1559");
      })(n || (n = {}));
    },
    7526: (t, e) => {
      "use strict";
      (e.byteLength = function (t) {
        var e = l(t),
          r = e[0],
          n = e[1];
        return ((r + n) * 3) / 4 - n;
      }),
        (e.toByteArray = function (t) {
          var e,
            r,
            o = l(t),
            s = o[0],
            a = o[1],
            u = new i(((s + a) * 3) / 4 - a),
            f = 0,
            h = a > 0 ? s - 4 : s;
          for (r = 0; r < h; r += 4)
            (e =
              (n[t.charCodeAt(r)] << 18) |
              (n[t.charCodeAt(r + 1)] << 12) |
              (n[t.charCodeAt(r + 2)] << 6) |
              n[t.charCodeAt(r + 3)]),
              (u[f++] = (e >> 16) & 255),
              (u[f++] = (e >> 8) & 255),
              (u[f++] = 255 & e);
          return (
            2 === a &&
              ((e = (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)),
              (u[f++] = 255 & e)),
            1 === a &&
              ((e =
                (n[t.charCodeAt(r)] << 10) |
                (n[t.charCodeAt(r + 1)] << 4) |
                (n[t.charCodeAt(r + 2)] >> 2)),
              (u[f++] = (e >> 8) & 255),
              (u[f++] = 255 & e)),
            u
          );
        }),
        (e.fromByteArray = function (t) {
          for (
            var e, n = t.length, i = n % 3, o = [], s = 0, a = n - i;
            s < a;
            s += 16383
          )
            o.push(
              (function (t, e, n) {
                for (var i, o = [], s = e; s < n; s += 3)
                  o.push(
                    r[
                      ((i =
                        ((t[s] << 16) & 0xff0000) +
                        ((t[s + 1] << 8) & 65280) +
                        (255 & t[s + 2])) >>
                        18) &
                        63
                    ] +
                      r[(i >> 12) & 63] +
                      r[(i >> 6) & 63] +
                      r[63 & i]
                  );
                return o.join("");
              })(t, s, s + 16383 > a ? a : s + 16383)
            );
          return (
            1 === i
              ? o.push(r[(e = t[n - 1]) >> 2] + r[(e << 4) & 63] + "==")
              : 2 === i &&
                o.push(
                  r[(e = (t[n - 2] << 8) + t[n - 1]) >> 10] +
                    r[(e >> 4) & 63] +
                    r[(e << 2) & 63] +
                    "="
                ),
            o.join("")
          );
        });
      for (
        var r = [],
          n = [],
          i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          o =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          s = 0,
          a = o.length;
        s < a;
        ++s
      )
        (r[s] = o[s]), (n[o.charCodeAt(s)] = s);
      function l(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw Error("Invalid string. Length must be a multiple of 4");
        var r = t.indexOf("=");
        -1 === r && (r = e);
        var n = r === e ? 0 : 4 - (r % 4);
        return [r, n];
      }
      (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
    },
    9674: (t) => {
      "use strict";
      for (
        var e = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", r = {}, n = 0;
        n < e.length;
        n++
      ) {
        var i = e.charAt(n);
        if (void 0 !== r[i]) throw TypeError(i + " is ambiguous");
        r[i] = n;
      }
      function o(t) {
        var e = t >> 25;
        return (
          ((0x1ffffff & t) << 5) ^
          (0x3b6a57b2 & -((e >> 0) & 1)) ^
          (0x26508e6d & -((e >> 1) & 1)) ^
          (0x1ea119fa & -((e >> 2) & 1)) ^
          (0x3d4233dd & -((e >> 3) & 1)) ^
          (0x2a1462b3 & -((e >> 4) & 1))
        );
      }
      function s(t) {
        for (var e = 1, r = 0; r < t.length; ++r) {
          var n = t.charCodeAt(r);
          if (n < 33 || n > 126) return "Invalid prefix (" + t + ")";
          e = o(e) ^ (n >> 5);
        }
        for (r = 0, e = o(e); r < t.length; ++r) {
          var i = t.charCodeAt(r);
          e = o(e) ^ (31 & i);
        }
        return e;
      }
      function a(t, e) {
        if (((e = e || 90), t.length < 8)) return t + " too short";
        if (t.length > e) return "Exceeds length limit";
        var n = t.toLowerCase(),
          i = t.toUpperCase();
        if (t !== n && t !== i) return "Mixed-case string " + t;
        var a = (t = n).lastIndexOf("1");
        if (-1 === a) return "No separator character for " + t;
        if (0 === a) return "Missing prefix for " + t;
        var l = t.slice(0, a),
          u = t.slice(a + 1);
        if (u.length < 6) return "Data too short";
        var f = s(l);
        if ("string" == typeof f) return f;
        for (var h = [], c = 0; c < u.length; ++c) {
          var d = u.charAt(c),
            p = r[d];
          if (void 0 === p) return "Unknown character " + d;
          (f = o(f) ^ p), c + 6 >= u.length || h.push(p);
        }
        return 1 !== f ? "Invalid checksum for " + t : { prefix: l, words: h };
      }
      function l(t, e, r, n) {
        for (
          var i = 0, o = 0, s = (1 << r) - 1, a = [], l = 0;
          l < t.length;
          ++l
        )
          for (i = (i << e) | t[l], o += e; o >= r; )
            a.push((i >> (o -= r)) & s);
        if (n) o > 0 && a.push((i << (r - o)) & s);
        else {
          if (o >= e) return "Excess padding";
          if ((i << (r - o)) & s) return "Non-zero padding";
        }
        return a;
      }
      t.exports = {
        decodeUnsafe: function () {
          var t = a.apply(null, arguments);
          if ("object" == typeof t) return t;
        },
        decode: function (t) {
          var e = a.apply(null, arguments);
          if ("object" == typeof e) return e;
          throw Error(e);
        },
        encode: function (t, r, n) {
          if (((n = n || 90), t.length + 7 + r.length > n))
            throw TypeError("Exceeds length limit");
          var i = s((t = t.toLowerCase()));
          if ("string" == typeof i) throw Error(i);
          for (var a = t + "1", l = 0; l < r.length; ++l) {
            var u = r[l];
            if (u >> 5 != 0) throw Error("Non 5-bit word");
            (i = o(i) ^ u), (a += e.charAt(u));
          }
          for (l = 0; l < 6; ++l) i = o(i);
          for (i ^= 1, l = 0; l < 6; ++l) {
            var f = (i >> ((5 - l) * 5)) & 31;
            a += e.charAt(f);
          }
          return a;
        },
        toWordsUnsafe: function (t) {
          var e = l(t, 8, 5, !0);
          if (Array.isArray(e)) return e;
        },
        toWords: function (t) {
          var e = l(t, 8, 5, !0);
          if (Array.isArray(e)) return e;
          throw Error(e);
        },
        fromWordsUnsafe: function (t) {
          var e = l(t, 5, 8, !1);
          if (Array.isArray(e)) return e;
        },
        fromWords: function (t) {
          var e = l(t, 5, 8, !1);
          if (Array.isArray(e)) return e;
          throw Error(e);
        },
      };
    },
    9404: function (t, e, r) {
      !(function (t, e) {
        "use strict";
        function n(t, e) {
          if (!t) throw Error(e || "Assertion failed");
        }
        function i(t, e) {
          t.super_ = e;
          var r = function () {};
          (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t);
        }
        function o(t, e, r) {
          if (o.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" === e || "be" === e) && ((r = e), (e = 10)),
              this._init(t || 0, e || 10, r || "be"));
        }
        "object" == typeof t ? (t.exports = o) : (e.BN = o),
          (o.BN = o),
          (o.wordSize = 26);
        try {
          h =
            "undefined" != typeof window && void 0 !== window.Buffer
              ? window.Buffer
              : r(7790).Buffer;
        } catch (t) {}
        function s(t, e) {
          var r = t.charCodeAt(e);
          return r >= 48 && r <= 57
            ? r - 48
            : r >= 65 && r <= 70
            ? r - 55
            : r >= 97 && r <= 102
            ? r - 87
            : void n(!1, "Invalid character in " + t);
        }
        function a(t, e, r) {
          var n = s(t, r);
          return r - 1 >= e && (n |= s(t, r - 1) << 4), n;
        }
        function l(t, e, r, i) {
          for (var o = 0, s = 0, a = Math.min(t.length, r), l = e; l < a; l++) {
            var u = t.charCodeAt(l) - 48;
            (o *= i),
              (s = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u),
              n(u >= 0 && s < i, "Invalid character"),
              (o += s);
          }
          return o;
        }
        function u(t, e) {
          (t.words = e.words),
            (t.length = e.length),
            (t.negative = e.negative),
            (t.red = e.red);
        }
        if (
          ((o.isBN = function (t) {
            return (
              t instanceof o ||
              (null !== t &&
                "object" == typeof t &&
                t.constructor.wordSize === o.wordSize &&
                Array.isArray(t.words))
            );
          }),
          (o.max = function (t, e) {
            return t.cmp(e) > 0 ? t : e;
          }),
          (o.min = function (t, e) {
            return 0 > t.cmp(e) ? t : e;
          }),
          (o.prototype._init = function (t, e, r) {
            if ("number" == typeof t) return this._initNumber(t, e, r);
            if ("object" == typeof t) return this._initArray(t, e, r);
            "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
            var i = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
              (i++, (this.negative = 1)),
              i < t.length &&
                (16 === e
                  ? this._parseHex(t, i, r)
                  : (this._parseBase(t, e, i),
                    "le" === r && this._initArray(this.toArray(), e, r)));
          }),
          (o.prototype._initNumber = function (t, e, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 0x4000000
                ? ((this.words = [0x3ffffff & t]), (this.length = 1))
                : t < 0x10000000000000
                ? ((this.words = [0x3ffffff & t, (t / 0x4000000) & 0x3ffffff]),
                  (this.length = 2))
                : (n(t < 0x20000000000000),
                  (this.words = [
                    0x3ffffff & t,
                    (t / 0x4000000) & 0x3ffffff,
                    1,
                  ]),
                  (this.length = 3)),
              "le" === r && this._initArray(this.toArray(), e, r);
          }),
          (o.prototype._initArray = function (t, e, r) {
            if ((n("number" == typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = Array(this.length));
            for (var i, o, s = 0; s < this.length; s++) this.words[s] = 0;
            var a = 0;
            if ("be" === r)
              for (s = t.length - 1, i = 0; s >= 0; s -= 3)
                (o = t[s] | (t[s - 1] << 8) | (t[s - 2] << 16)),
                  (this.words[i] |= (o << a) & 0x3ffffff),
                  (this.words[i + 1] = (o >>> (26 - a)) & 0x3ffffff),
                  (a += 24) >= 26 && ((a -= 26), i++);
            else if ("le" === r)
              for (s = 0, i = 0; s < t.length; s += 3)
                (o = t[s] | (t[s + 1] << 8) | (t[s + 2] << 16)),
                  (this.words[i] |= (o << a) & 0x3ffffff),
                  (this.words[i + 1] = (o >>> (26 - a)) & 0x3ffffff),
                  (a += 24) >= 26 && ((a -= 26), i++);
            return this._strip();
          }),
          (o.prototype._parseHex = function (t, e, r) {
            (this.length = Math.ceil((t.length - e) / 6)),
              (this.words = Array(this.length));
            for (var n, i = 0; i < this.length; i++) this.words[i] = 0;
            var o = 0,
              s = 0;
            if ("be" === r)
              for (i = t.length - 1; i >= e; i -= 2)
                (n = a(t, e, i) << o),
                  (this.words[s] |= 0x3ffffff & n),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                    : (o += 8);
            else
              for (
                i = (t.length - e) % 2 == 0 ? e + 1 : e;
                i < t.length;
                i += 2
              )
                (n = a(t, e, i) << o),
                  (this.words[s] |= 0x3ffffff & n),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                    : (o += 8);
            this._strip();
          }),
          (o.prototype._parseBase = function (t, e, r) {
            (this.words = [0]), (this.length = 1);
            for (var n = 0, i = 1; i <= 0x3ffffff; i *= e) n++;
            n--, (i = (i / e) | 0);
            for (
              var o = t.length - r,
                s = o % n,
                a = Math.min(o, o - s) + r,
                u = 0,
                f = r;
              f < a;
              f += n
            )
              (u = l(t, f, f + n, e)),
                this.imuln(i),
                this.words[0] + u < 0x4000000
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            if (0 !== s) {
              var h = 1;
              for (u = l(t, f, t.length, e), f = 0; f < s; f++) h *= e;
              this.imuln(h),
                this.words[0] + u < 0x4000000
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            }
            this._strip();
          }),
          (o.prototype.copy = function (t) {
            t.words = Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (o.prototype._move = function (t) {
            u(t, this);
          }),
          (o.prototype.clone = function () {
            var t = new o(null);
            return this.copy(t), t;
          }),
          (o.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          "undefined" != typeof Symbol && "function" == typeof Symbol.for)
        )
          try {
            o.prototype[Symbol.for("nodejs.util.inspect.custom")] = f;
          } catch (t) {
            o.prototype.inspect = f;
          }
        else o.prototype.inspect = f;
        function f() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var h,
          c = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          d = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          p = [
            0, 0, 0x2000000, 0x290d741, 0x1000000, 0x2e90edd, 0x39aa400,
            0x267bf47, 0x1000000, 0x290d741, 1e7, 0x12959c3, 0x222c000,
            0x3bd7765, 7529536, 0xadcea1, 0x1000000, 0x1704f61, 0x206fc40,
            0x2cddcf9, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625,
            0xb54ba0, 0xdaf26b, 0x1069c00, 0x138f9ad, 243e5, 0x1b4d89f,
            0x2000000, 0x25528a1, 0x2b54a20, 0x3216b93, 0x39aa400,
          ];
        function g(t, e, r) {
          r.negative = e.negative ^ t.negative;
          var n = (t.length + e.length) | 0;
          (r.length = n), (n = (n - 1) | 0);
          var i = 0 | t.words[0],
            o = 0 | e.words[0],
            s = i * o,
            a = 0x3ffffff & s,
            l = (s / 0x4000000) | 0;
          r.words[0] = a;
          for (var u = 1; u < n; u++) {
            for (
              var f = l >>> 26,
                h = 0x3ffffff & l,
                c = Math.min(u, e.length - 1),
                d = Math.max(0, u - t.length + 1);
              d <= c;
              d++
            ) {
              var p = (u - d) | 0;
              (f +=
                ((s = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + h) /
                  0x4000000) |
                0),
                (h = 0x3ffffff & s);
            }
            (r.words[u] = 0 | h), (l = 0 | f);
          }
          return 0 !== l ? (r.words[u] = 0 | l) : r.length--, r._strip();
        }
        (o.prototype.toString = function (t, e) {
          if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
            r = "";
            for (var r, i = 0, o = 0, s = 0; s < this.length; s++) {
              var a = this.words[s],
                l = (((a << i) | o) & 0xffffff).toString(16);
              (o = (a >>> (24 - i)) & 0xffffff),
                (i += 2) >= 26 && ((i -= 26), s--),
                (r =
                  0 !== o || s !== this.length - 1
                    ? c[6 - l.length] + l + r
                    : l + r);
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % e != 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var u = d[t],
              f = p[t];
            r = "";
            var h = this.clone();
            for (h.negative = 0; !h.isZero(); ) {
              var g = h.modrn(f).toString(t);
              r = (h = h.idivn(f)).isZero() ? g + r : c[u - g.length] + g + r;
            }
            for (this.isZero() && (r = "0" + r); r.length % e != 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          n(!1, "Base should be between 2 and 36");
        }),
          (o.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 0x4000000 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 0x10000000000000 + 0x4000000 * this.words[1])
                : this.length > 2 &&
                  n(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16, 2);
          }),
          h &&
            (o.prototype.toBuffer = function (t, e) {
              return this.toArrayLike(h, t, e);
            }),
          (o.prototype.toArray = function (t, e) {
            return this.toArrayLike(Array, t, e);
          }),
          (o.prototype.toArrayLike = function (t, e, r) {
            this._strip();
            var i = this.byteLength(),
              o = r || Math.max(1, i);
            n(i <= o, "byte array longer than desired length"),
              n(o > 0, "Requested array length <= 0");
            var s = t.allocUnsafe ? t.allocUnsafe(o) : new t(o);
            return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](s, i), s;
          }),
          (o.prototype._toArrayLikeLE = function (t, e) {
            for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
              var s = (this.words[i] << o) | n;
              (t[r++] = 255 & s),
                r < t.length && (t[r++] = (s >> 8) & 255),
                r < t.length && (t[r++] = (s >> 16) & 255),
                6 === o
                  ? (r < t.length && (t[r++] = (s >> 24) & 255),
                    (n = 0),
                    (o = 0))
                  : ((n = s >>> 24), (o += 2));
            }
            if (r < t.length) for (t[r++] = n; r < t.length; ) t[r++] = 0;
          }),
          (o.prototype._toArrayLikeBE = function (t, e) {
            for (
              var r = t.length - 1, n = 0, i = 0, o = 0;
              i < this.length;
              i++
            ) {
              var s = (this.words[i] << o) | n;
              (t[r--] = 255 & s),
                r >= 0 && (t[r--] = (s >> 8) & 255),
                r >= 0 && (t[r--] = (s >> 16) & 255),
                6 === o
                  ? (r >= 0 && (t[r--] = (s >> 24) & 255), (n = 0), (o = 0))
                  : ((n = s >>> 24), (o += 2));
            }
            if (r >= 0) for (t[r--] = n; r >= 0; ) t[r--] = 0;
          }),
          Math.clz32
            ? (o.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (o.prototype._countBits = function (t) {
                var e = t,
                  r = 0;
                return (
                  e >= 4096 && ((r += 13), (e >>>= 13)),
                  e >= 64 && ((r += 7), (e >>>= 7)),
                  e >= 8 && ((r += 4), (e >>>= 4)),
                  e >= 2 && ((r += 2), (e >>>= 2)),
                  r + e
                );
              }),
          (o.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var e = t,
              r = 0;
            return (
              (8191 & e) == 0 && ((r += 13), (e >>>= 13)),
              (127 & e) == 0 && ((r += 7), (e >>>= 7)),
              (15 & e) == 0 && ((r += 4), (e >>>= 4)),
              (3 & e) == 0 && ((r += 2), (e >>>= 2)),
              (1 & e) == 0 && r++,
              r
            );
          }),
          (o.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              e = this._countBits(t);
            return (this.length - 1) * 26 + e;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
              var r = this._zeroBits(this.words[e]);
              if (((t += r), 26 !== r)) break;
            }
            return t;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (o.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e];
            return this._strip();
          }),
          (o.prototype.ior = function (t) {
            return n((this.negative | t.negative) == 0), this.iuor(t);
          }),
          (o.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (o.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (o.prototype.iuand = function (t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var r = 0; r < e.length; r++)
              this.words[r] = this.words[r] & t.words[r];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.iand = function (t) {
            return n((this.negative | t.negative) == 0), this.iuand(t);
          }),
          (o.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (o.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (t) {
            this.length > t.length
              ? ((e = this), (r = t))
              : ((e = t), (r = this));
            for (var e, r, n = 0; n < r.length; n++)
              this.words[n] = e.words[n] ^ r.words[n];
            if (this !== e)
              for (; n < e.length; n++) this.words[n] = e.words[n];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.ixor = function (t) {
            return n((this.negative | t.negative) == 0), this.iuxor(t);
          }),
          (o.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (o.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (t) {
            n("number" == typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
              r = t % 26;
            this._expand(e), r > 0 && e--;
            for (var i = 0; i < e; i++)
              this.words[i] = 0x3ffffff & ~this.words[i];
            return (
              r > 0 &&
                (this.words[i] = ~this.words[i] & (0x3ffffff >> (26 - r))),
              this._strip()
            );
          }),
          (o.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (o.prototype.setn = function (t, e) {
            n("number" == typeof t && t >= 0);
            var r = (t / 26) | 0,
              i = t % 26;
            return (
              this._expand(r + 1),
              e
                ? (this.words[r] = this.words[r] | (1 << i))
                : (this.words[r] = this.words[r] & ~(1 << i)),
              this._strip()
            );
          }),
          (o.prototype.iadd = function (t) {
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              );
            this.length > t.length
              ? ((r = this), (n = t))
              : ((r = t), (n = this));
            for (var e, r, n, i = 0, o = 0; o < n.length; o++)
              (e = (0 | r.words[o]) + (0 | n.words[o]) + i),
                (this.words[o] = 0x3ffffff & e),
                (i = e >>> 26);
            for (; 0 !== i && o < r.length; o++)
              (e = (0 | r.words[o]) + i),
                (this.words[o] = 0x3ffffff & e),
                (i = e >>> 26);
            if (((this.length = r.length), 0 !== i))
              (this.words[this.length] = i), this.length++;
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o];
            return this;
          }),
          (o.prototype.add = function (t) {
            var e;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (o.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var e,
                r,
                n = this.iadd(t);
              return (t.negative = 1), n._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var i = this.cmp(t);
            if (0 === i)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            i > 0 ? ((e = this), (r = t)) : ((e = t), (r = this));
            for (var o = 0, s = 0; s < r.length; s++)
              (o = (n = (0 | e.words[s]) - (0 | r.words[s]) + o) >> 26),
                (this.words[s] = 0x3ffffff & n);
            for (; 0 !== o && s < e.length; s++)
              (o = (n = (0 | e.words[s]) + o) >> 26),
                (this.words[s] = 0x3ffffff & n);
            if (0 === o && s < e.length && e !== this)
              for (; s < e.length; s++) this.words[s] = e.words[s];
            return (
              (this.length = Math.max(this.length, s)),
              e !== this && (this.negative = 1),
              this._strip()
            );
          }),
          (o.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var m = function (t, e, r) {
          var n,
            i,
            o,
            s = t.words,
            a = e.words,
            l = r.words,
            u = 0,
            f = 0 | s[0],
            h = 8191 & f,
            c = f >>> 13,
            d = 0 | s[1],
            p = 8191 & d,
            g = d >>> 13,
            m = 0 | s[2],
            y = 8191 & m,
            v = m >>> 13,
            b = 0 | s[3],
            w = 8191 & b,
            A = b >>> 13,
            E = 0 | s[4],
            x = 8191 & E,
            _ = E >>> 13,
            k = 0 | s[5],
            N = 8191 & k,
            S = k >>> 13,
            M = 0 | s[6],
            I = 8191 & M,
            R = M >>> 13,
            T = 0 | s[7],
            P = 8191 & T,
            O = T >>> 13,
            B = 0 | s[8],
            C = 8191 & B,
            L = B >>> 13,
            U = 0 | s[9],
            F = 8191 & U,
            D = U >>> 13,
            j = 0 | a[0],
            q = 8191 & j,
            H = j >>> 13,
            z = 0 | a[1],
            G = 8191 & z,
            V = z >>> 13,
            Y = 0 | a[2],
            J = 8191 & Y,
            K = Y >>> 13,
            W = 0 | a[3],
            Q = 8191 & W,
            X = W >>> 13,
            Z = 0 | a[4],
            $ = 8191 & Z,
            tt = Z >>> 13,
            te = 0 | a[5],
            tr = 8191 & te,
            tn = te >>> 13,
            ti = 0 | a[6],
            to = 8191 & ti,
            ts = ti >>> 13,
            ta = 0 | a[7],
            tl = 8191 & ta,
            tu = ta >>> 13,
            tf = 0 | a[8],
            th = 8191 & tf,
            tc = tf >>> 13,
            td = 0 | a[9],
            tp = 8191 & td,
            tg = td >>> 13;
          (r.negative = t.negative ^ e.negative), (r.length = 19);
          var tm =
            (((u + (n = Math.imul(h, q))) | 0) +
              ((8191 & (i = ((i = Math.imul(h, H)) + Math.imul(c, q)) | 0)) <<
                13)) |
            0;
          (u = ((((o = Math.imul(c, H)) + (i >>> 13)) | 0) + (tm >>> 26)) | 0),
            (tm &= 0x3ffffff),
            (n = Math.imul(p, q)),
            (i = ((i = Math.imul(p, H)) + Math.imul(g, q)) | 0),
            (o = Math.imul(g, H));
          var ty =
            (((u + (n = (n + Math.imul(h, G)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, V)) | 0) + Math.imul(c, G)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(c, V)) | 0) + (i >>> 13)) | 0) +
              (ty >>> 26)) |
            0),
            (ty &= 0x3ffffff),
            (n = Math.imul(y, q)),
            (i = ((i = Math.imul(y, H)) + Math.imul(v, q)) | 0),
            (o = Math.imul(v, H)),
            (n = (n + Math.imul(p, G)) | 0),
            (i = ((i = (i + Math.imul(p, V)) | 0) + Math.imul(g, G)) | 0),
            (o = (o + Math.imul(g, V)) | 0);
          var tv =
            (((u + (n = (n + Math.imul(h, J)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, K)) | 0) + Math.imul(c, J)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(c, K)) | 0) + (i >>> 13)) | 0) +
              (tv >>> 26)) |
            0),
            (tv &= 0x3ffffff),
            (n = Math.imul(w, q)),
            (i = ((i = Math.imul(w, H)) + Math.imul(A, q)) | 0),
            (o = Math.imul(A, H)),
            (n = (n + Math.imul(y, G)) | 0),
            (i = ((i = (i + Math.imul(y, V)) | 0) + Math.imul(v, G)) | 0),
            (o = (o + Math.imul(v, V)) | 0),
            (n = (n + Math.imul(p, J)) | 0),
            (i = ((i = (i + Math.imul(p, K)) | 0) + Math.imul(g, J)) | 0),
            (o = (o + Math.imul(g, K)) | 0);
          var tb =
            (((u + (n = (n + Math.imul(h, Q)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, X)) | 0) + Math.imul(c, Q)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(c, X)) | 0) + (i >>> 13)) | 0) +
              (tb >>> 26)) |
            0),
            (tb &= 0x3ffffff),
            (n = Math.imul(x, q)),
            (i = ((i = Math.imul(x, H)) + Math.imul(_, q)) | 0),
            (o = Math.imul(_, H)),
            (n = (n + Math.imul(w, G)) | 0),
            (i = ((i = (i + Math.imul(w, V)) | 0) + Math.imul(A, G)) | 0),
            (o = (o + Math.imul(A, V)) | 0),
            (n = (n + Math.imul(y, J)) | 0),
            (i = ((i = (i + Math.imul(y, K)) | 0) + Math.imul(v, J)) | 0),
            (o = (o + Math.imul(v, K)) | 0),
            (n = (n + Math.imul(p, Q)) | 0),
            (i = ((i = (i + Math.imul(p, X)) | 0) + Math.imul(g, Q)) | 0),
            (o = (o + Math.imul(g, X)) | 0);
          var tw =
            (((u + (n = (n + Math.imul(h, $)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, tt)) | 0) + Math.imul(c, $)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(c, tt)) | 0) + (i >>> 13)) | 0) +
              (tw >>> 26)) |
            0),
            (tw &= 0x3ffffff),
            (n = Math.imul(N, q)),
            (i = ((i = Math.imul(N, H)) + Math.imul(S, q)) | 0),
            (o = Math.imul(S, H)),
            (n = (n + Math.imul(x, G)) | 0),
            (i = ((i = (i + Math.imul(x, V)) | 0) + Math.imul(_, G)) | 0),
            (o = (o + Math.imul(_, V)) | 0),
            (n = (n + Math.imul(w, J)) | 0),
            (i = ((i = (i + Math.imul(w, K)) | 0) + Math.imul(A, J)) | 0),
            (o = (o + Math.imul(A, K)) | 0),
            (n = (n + Math.imul(y, Q)) | 0),
            (i = ((i = (i + Math.imul(y, X)) | 0) + Math.imul(v, Q)) | 0),
            (o = (o + Math.imul(v, X)) | 0),
            (n = (n + Math.imul(p, $)) | 0),
            (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(g, $)) | 0),
            (o = (o + Math.imul(g, tt)) | 0);
          var tA =
            (((u + (n = (n + Math.imul(h, tr)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, tn)) | 0) + Math.imul(c, tr)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(c, tn)) | 0) + (i >>> 13)) | 0) +
              (tA >>> 26)) |
            0),
            (tA &= 0x3ffffff),
            (n = Math.imul(I, q)),
            (i = ((i = Math.imul(I, H)) + Math.imul(R, q)) | 0),
            (o = Math.imul(R, H)),
            (n = (n + Math.imul(N, G)) | 0),
            (i = ((i = (i + Math.imul(N, V)) | 0) + Math.imul(S, G)) | 0),
            (o = (o + Math.imul(S, V)) | 0),
            (n = (n + Math.imul(x, J)) | 0),
            (i = ((i = (i + Math.imul(x, K)) | 0) + Math.imul(_, J)) | 0),
            (o = (o + Math.imul(_, K)) | 0),
            (n = (n + Math.imul(w, Q)) | 0),
            (i = ((i = (i + Math.imul(w, X)) | 0) + Math.imul(A, Q)) | 0),
            (o = (o + Math.imul(A, X)) | 0),
            (n = (n + Math.imul(y, $)) | 0),
            (i = ((i = (i + Math.imul(y, tt)) | 0) + Math.imul(v, $)) | 0),
            (o = (o + Math.imul(v, tt)) | 0),
            (n = (n + Math.imul(p, tr)) | 0),
            (i = ((i = (i + Math.imul(p, tn)) | 0) + Math.imul(g, tr)) | 0),
            (o = (o + Math.imul(g, tn)) | 0);
          var tE =
            (((u + (n = (n + Math.imul(h, to)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, ts)) | 0) + Math.imul(c, to)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(c, ts)) | 0) + (i >>> 13)) | 0) +
              (tE >>> 26)) |
            0),
            (tE &= 0x3ffffff),
            (n = Math.imul(P, q)),
            (i = ((i = Math.imul(P, H)) + Math.imul(O, q)) | 0),
            (o = Math.imul(O, H)),
            (n = (n + Math.imul(I, G)) | 0),
            (i = ((i = (i + Math.imul(I, V)) | 0) + Math.imul(R, G)) | 0),
            (o = (o + Math.imul(R, V)) | 0),
            (n = (n + Math.imul(N, J)) | 0),
            (i = ((i = (i + Math.imul(N, K)) | 0) + Math.imul(S, J)) | 0),
            (o = (o + Math.imul(S, K)) | 0),
            (n = (n + Math.imul(x, Q)) | 0),
            (i = ((i = (i + Math.imul(x, X)) | 0) + Math.imul(_, Q)) | 0),
            (o = (o + Math.imul(_, X)) | 0),
            (n = (n + Math.imul(w, $)) | 0),
            (i = ((i = (i + Math.imul(w, tt)) | 0) + Math.imul(A, $)) | 0),
            (o = (o + Math.imul(A, tt)) | 0),
            (n = (n + Math.imul(y, tr)) | 0),
            (i = ((i = (i + Math.imul(y, tn)) | 0) + Math.imul(v, tr)) | 0),
            (o = (o + Math.imul(v, tn)) | 0),
            (n = (n + Math.imul(p, to)) | 0),
            (i = ((i = (i + Math.imul(p, ts)) | 0) + Math.imul(g, to)) | 0),
            (o = (o + Math.imul(g, ts)) | 0);
          var tx =
            (((u + (n = (n + Math.imul(h, tl)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, tu)) | 0) + Math.imul(c, tl)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(c, tu)) | 0) + (i >>> 13)) | 0) +
              (tx >>> 26)) |
            0),
            (tx &= 0x3ffffff),
            (n = Math.imul(C, q)),
            (i = ((i = Math.imul(C, H)) + Math.imul(L, q)) | 0),
            (o = Math.imul(L, H)),
            (n = (n + Math.imul(P, G)) | 0),
            (i = ((i = (i + Math.imul(P, V)) | 0) + Math.imul(O, G)) | 0),
            (o = (o + Math.imul(O, V)) | 0),
            (n = (n + Math.imul(I, J)) | 0),
            (i = ((i = (i + Math.imul(I, K)) | 0) + Math.imul(R, J)) | 0),
            (o = (o + Math.imul(R, K)) | 0),
            (n = (n + Math.imul(N, Q)) | 0),
            (i = ((i = (i + Math.imul(N, X)) | 0) + Math.imul(S, Q)) | 0),
            (o = (o + Math.imul(S, X)) | 0),
            (n = (n + Math.imul(x, $)) | 0),
            (i = ((i = (i + Math.imul(x, tt)) | 0) + Math.imul(_, $)) | 0),
            (o = (o + Math.imul(_, tt)) | 0),
            (n = (n + Math.imul(w, tr)) | 0),
            (i = ((i = (i + Math.imul(w, tn)) | 0) + Math.imul(A, tr)) | 0),
            (o = (o + Math.imul(A, tn)) | 0),
            (n = (n + Math.imul(y, to)) | 0),
            (i = ((i = (i + Math.imul(y, ts)) | 0) + Math.imul(v, to)) | 0),
            (o = (o + Math.imul(v, ts)) | 0),
            (n = (n + Math.imul(p, tl)) | 0),
            (i = ((i = (i + Math.imul(p, tu)) | 0) + Math.imul(g, tl)) | 0),
            (o = (o + Math.imul(g, tu)) | 0);
          var t_ =
            (((u + (n = (n + Math.imul(h, th)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, tc)) | 0) + Math.imul(c, th)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(c, tc)) | 0) + (i >>> 13)) | 0) +
              (t_ >>> 26)) |
            0),
            (t_ &= 0x3ffffff),
            (n = Math.imul(F, q)),
            (i = ((i = Math.imul(F, H)) + Math.imul(D, q)) | 0),
            (o = Math.imul(D, H)),
            (n = (n + Math.imul(C, G)) | 0),
            (i = ((i = (i + Math.imul(C, V)) | 0) + Math.imul(L, G)) | 0),
            (o = (o + Math.imul(L, V)) | 0),
            (n = (n + Math.imul(P, J)) | 0),
            (i = ((i = (i + Math.imul(P, K)) | 0) + Math.imul(O, J)) | 0),
            (o = (o + Math.imul(O, K)) | 0),
            (n = (n + Math.imul(I, Q)) | 0),
            (i = ((i = (i + Math.imul(I, X)) | 0) + Math.imul(R, Q)) | 0),
            (o = (o + Math.imul(R, X)) | 0),
            (n = (n + Math.imul(N, $)) | 0),
            (i = ((i = (i + Math.imul(N, tt)) | 0) + Math.imul(S, $)) | 0),
            (o = (o + Math.imul(S, tt)) | 0),
            (n = (n + Math.imul(x, tr)) | 0),
            (i = ((i = (i + Math.imul(x, tn)) | 0) + Math.imul(_, tr)) | 0),
            (o = (o + Math.imul(_, tn)) | 0),
            (n = (n + Math.imul(w, to)) | 0),
            (i = ((i = (i + Math.imul(w, ts)) | 0) + Math.imul(A, to)) | 0),
            (o = (o + Math.imul(A, ts)) | 0),
            (n = (n + Math.imul(y, tl)) | 0),
            (i = ((i = (i + Math.imul(y, tu)) | 0) + Math.imul(v, tl)) | 0),
            (o = (o + Math.imul(v, tu)) | 0),
            (n = (n + Math.imul(p, th)) | 0),
            (i = ((i = (i + Math.imul(p, tc)) | 0) + Math.imul(g, th)) | 0),
            (o = (o + Math.imul(g, tc)) | 0);
          var tk =
            (((u + (n = (n + Math.imul(h, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(h, tg)) | 0) + Math.imul(c, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(c, tg)) | 0) + (i >>> 13)) | 0) +
              (tk >>> 26)) |
            0),
            (tk &= 0x3ffffff),
            (n = Math.imul(F, G)),
            (i = ((i = Math.imul(F, V)) + Math.imul(D, G)) | 0),
            (o = Math.imul(D, V)),
            (n = (n + Math.imul(C, J)) | 0),
            (i = ((i = (i + Math.imul(C, K)) | 0) + Math.imul(L, J)) | 0),
            (o = (o + Math.imul(L, K)) | 0),
            (n = (n + Math.imul(P, Q)) | 0),
            (i = ((i = (i + Math.imul(P, X)) | 0) + Math.imul(O, Q)) | 0),
            (o = (o + Math.imul(O, X)) | 0),
            (n = (n + Math.imul(I, $)) | 0),
            (i = ((i = (i + Math.imul(I, tt)) | 0) + Math.imul(R, $)) | 0),
            (o = (o + Math.imul(R, tt)) | 0),
            (n = (n + Math.imul(N, tr)) | 0),
            (i = ((i = (i + Math.imul(N, tn)) | 0) + Math.imul(S, tr)) | 0),
            (o = (o + Math.imul(S, tn)) | 0),
            (n = (n + Math.imul(x, to)) | 0),
            (i = ((i = (i + Math.imul(x, ts)) | 0) + Math.imul(_, to)) | 0),
            (o = (o + Math.imul(_, ts)) | 0),
            (n = (n + Math.imul(w, tl)) | 0),
            (i = ((i = (i + Math.imul(w, tu)) | 0) + Math.imul(A, tl)) | 0),
            (o = (o + Math.imul(A, tu)) | 0),
            (n = (n + Math.imul(y, th)) | 0),
            (i = ((i = (i + Math.imul(y, tc)) | 0) + Math.imul(v, th)) | 0),
            (o = (o + Math.imul(v, tc)) | 0);
          var tN =
            (((u + (n = (n + Math.imul(p, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(p, tg)) | 0) + Math.imul(g, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(g, tg)) | 0) + (i >>> 13)) | 0) +
              (tN >>> 26)) |
            0),
            (tN &= 0x3ffffff),
            (n = Math.imul(F, J)),
            (i = ((i = Math.imul(F, K)) + Math.imul(D, J)) | 0),
            (o = Math.imul(D, K)),
            (n = (n + Math.imul(C, Q)) | 0),
            (i = ((i = (i + Math.imul(C, X)) | 0) + Math.imul(L, Q)) | 0),
            (o = (o + Math.imul(L, X)) | 0),
            (n = (n + Math.imul(P, $)) | 0),
            (i = ((i = (i + Math.imul(P, tt)) | 0) + Math.imul(O, $)) | 0),
            (o = (o + Math.imul(O, tt)) | 0),
            (n = (n + Math.imul(I, tr)) | 0),
            (i = ((i = (i + Math.imul(I, tn)) | 0) + Math.imul(R, tr)) | 0),
            (o = (o + Math.imul(R, tn)) | 0),
            (n = (n + Math.imul(N, to)) | 0),
            (i = ((i = (i + Math.imul(N, ts)) | 0) + Math.imul(S, to)) | 0),
            (o = (o + Math.imul(S, ts)) | 0),
            (n = (n + Math.imul(x, tl)) | 0),
            (i = ((i = (i + Math.imul(x, tu)) | 0) + Math.imul(_, tl)) | 0),
            (o = (o + Math.imul(_, tu)) | 0),
            (n = (n + Math.imul(w, th)) | 0),
            (i = ((i = (i + Math.imul(w, tc)) | 0) + Math.imul(A, th)) | 0),
            (o = (o + Math.imul(A, tc)) | 0);
          var tS =
            (((u + (n = (n + Math.imul(y, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(y, tg)) | 0) + Math.imul(v, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(v, tg)) | 0) + (i >>> 13)) | 0) +
              (tS >>> 26)) |
            0),
            (tS &= 0x3ffffff),
            (n = Math.imul(F, Q)),
            (i = ((i = Math.imul(F, X)) + Math.imul(D, Q)) | 0),
            (o = Math.imul(D, X)),
            (n = (n + Math.imul(C, $)) | 0),
            (i = ((i = (i + Math.imul(C, tt)) | 0) + Math.imul(L, $)) | 0),
            (o = (o + Math.imul(L, tt)) | 0),
            (n = (n + Math.imul(P, tr)) | 0),
            (i = ((i = (i + Math.imul(P, tn)) | 0) + Math.imul(O, tr)) | 0),
            (o = (o + Math.imul(O, tn)) | 0),
            (n = (n + Math.imul(I, to)) | 0),
            (i = ((i = (i + Math.imul(I, ts)) | 0) + Math.imul(R, to)) | 0),
            (o = (o + Math.imul(R, ts)) | 0),
            (n = (n + Math.imul(N, tl)) | 0),
            (i = ((i = (i + Math.imul(N, tu)) | 0) + Math.imul(S, tl)) | 0),
            (o = (o + Math.imul(S, tu)) | 0),
            (n = (n + Math.imul(x, th)) | 0),
            (i = ((i = (i + Math.imul(x, tc)) | 0) + Math.imul(_, th)) | 0),
            (o = (o + Math.imul(_, tc)) | 0);
          var tM =
            (((u + (n = (n + Math.imul(w, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(w, tg)) | 0) + Math.imul(A, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(A, tg)) | 0) + (i >>> 13)) | 0) +
              (tM >>> 26)) |
            0),
            (tM &= 0x3ffffff),
            (n = Math.imul(F, $)),
            (i = ((i = Math.imul(F, tt)) + Math.imul(D, $)) | 0),
            (o = Math.imul(D, tt)),
            (n = (n + Math.imul(C, tr)) | 0),
            (i = ((i = (i + Math.imul(C, tn)) | 0) + Math.imul(L, tr)) | 0),
            (o = (o + Math.imul(L, tn)) | 0),
            (n = (n + Math.imul(P, to)) | 0),
            (i = ((i = (i + Math.imul(P, ts)) | 0) + Math.imul(O, to)) | 0),
            (o = (o + Math.imul(O, ts)) | 0),
            (n = (n + Math.imul(I, tl)) | 0),
            (i = ((i = (i + Math.imul(I, tu)) | 0) + Math.imul(R, tl)) | 0),
            (o = (o + Math.imul(R, tu)) | 0),
            (n = (n + Math.imul(N, th)) | 0),
            (i = ((i = (i + Math.imul(N, tc)) | 0) + Math.imul(S, th)) | 0),
            (o = (o + Math.imul(S, tc)) | 0);
          var tI =
            (((u + (n = (n + Math.imul(x, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(x, tg)) | 0) + Math.imul(_, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(_, tg)) | 0) + (i >>> 13)) | 0) +
              (tI >>> 26)) |
            0),
            (tI &= 0x3ffffff),
            (n = Math.imul(F, tr)),
            (i = ((i = Math.imul(F, tn)) + Math.imul(D, tr)) | 0),
            (o = Math.imul(D, tn)),
            (n = (n + Math.imul(C, to)) | 0),
            (i = ((i = (i + Math.imul(C, ts)) | 0) + Math.imul(L, to)) | 0),
            (o = (o + Math.imul(L, ts)) | 0),
            (n = (n + Math.imul(P, tl)) | 0),
            (i = ((i = (i + Math.imul(P, tu)) | 0) + Math.imul(O, tl)) | 0),
            (o = (o + Math.imul(O, tu)) | 0),
            (n = (n + Math.imul(I, th)) | 0),
            (i = ((i = (i + Math.imul(I, tc)) | 0) + Math.imul(R, th)) | 0),
            (o = (o + Math.imul(R, tc)) | 0);
          var tR =
            (((u + (n = (n + Math.imul(N, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(N, tg)) | 0) + Math.imul(S, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(S, tg)) | 0) + (i >>> 13)) | 0) +
              (tR >>> 26)) |
            0),
            (tR &= 0x3ffffff),
            (n = Math.imul(F, to)),
            (i = ((i = Math.imul(F, ts)) + Math.imul(D, to)) | 0),
            (o = Math.imul(D, ts)),
            (n = (n + Math.imul(C, tl)) | 0),
            (i = ((i = (i + Math.imul(C, tu)) | 0) + Math.imul(L, tl)) | 0),
            (o = (o + Math.imul(L, tu)) | 0),
            (n = (n + Math.imul(P, th)) | 0),
            (i = ((i = (i + Math.imul(P, tc)) | 0) + Math.imul(O, th)) | 0),
            (o = (o + Math.imul(O, tc)) | 0);
          var tT =
            (((u + (n = (n + Math.imul(I, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(I, tg)) | 0) + Math.imul(R, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(R, tg)) | 0) + (i >>> 13)) | 0) +
              (tT >>> 26)) |
            0),
            (tT &= 0x3ffffff),
            (n = Math.imul(F, tl)),
            (i = ((i = Math.imul(F, tu)) + Math.imul(D, tl)) | 0),
            (o = Math.imul(D, tu)),
            (n = (n + Math.imul(C, th)) | 0),
            (i = ((i = (i + Math.imul(C, tc)) | 0) + Math.imul(L, th)) | 0),
            (o = (o + Math.imul(L, tc)) | 0);
          var tP =
            (((u + (n = (n + Math.imul(P, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(P, tg)) | 0) + Math.imul(O, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(O, tg)) | 0) + (i >>> 13)) | 0) +
              (tP >>> 26)) |
            0),
            (tP &= 0x3ffffff),
            (n = Math.imul(F, th)),
            (i = ((i = Math.imul(F, tc)) + Math.imul(D, th)) | 0),
            (o = Math.imul(D, tc));
          var tO =
            (((u + (n = (n + Math.imul(C, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(C, tg)) | 0) + Math.imul(L, tp)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(L, tg)) | 0) + (i >>> 13)) | 0) +
              (tO >>> 26)) |
            0),
            (tO &= 0x3ffffff);
          var tB =
            (((u + (n = Math.imul(F, tp))) | 0) +
              ((8191 & (i = ((i = Math.imul(F, tg)) + Math.imul(D, tp)) | 0)) <<
                13)) |
            0;
          return (
            (u =
              ((((o = Math.imul(D, tg)) + (i >>> 13)) | 0) + (tB >>> 26)) | 0),
            (tB &= 0x3ffffff),
            (l[0] = tm),
            (l[1] = ty),
            (l[2] = tv),
            (l[3] = tb),
            (l[4] = tw),
            (l[5] = tA),
            (l[6] = tE),
            (l[7] = tx),
            (l[8] = t_),
            (l[9] = tk),
            (l[10] = tN),
            (l[11] = tS),
            (l[12] = tM),
            (l[13] = tI),
            (l[14] = tR),
            (l[15] = tT),
            (l[16] = tP),
            (l[17] = tO),
            (l[18] = tB),
            0 !== u && ((l[19] = u), r.length++),
            r
          );
        };
        function y(t, e, r) {
          (r.negative = e.negative ^ t.negative),
            (r.length = t.length + e.length);
          for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
            var s = i;
            i = 0;
            for (
              var a = 0x3ffffff & n,
                l = Math.min(o, e.length - 1),
                u = Math.max(0, o - t.length + 1);
              u <= l;
              u++
            ) {
              var f = o - u,
                h = (0 | t.words[f]) * (0 | e.words[u]),
                c = 0x3ffffff & h;
              (s = (s + ((h / 0x4000000) | 0)) | 0),
                (a = 0x3ffffff & (c = (c + a) | 0)),
                (i += (s = (s + (c >>> 26)) | 0) >>> 26),
                (s &= 0x3ffffff);
            }
            (r.words[o] = a), (n = s), (s = i);
          }
          return 0 !== n ? (r.words[o] = n) : r.length--, r._strip();
        }
        function v(t, e) {
          (this.x = t), (this.y = e);
        }
        Math.imul || (m = g),
          (o.prototype.mulTo = function (t, e) {
            var r,
              n = this.length + t.length;
            return 10 === this.length && 10 === t.length
              ? m(this, t, e)
              : n < 63
              ? g(this, t, e)
              : y(this, t, e);
          }),
          (v.prototype.makeRBT = function (t) {
            for (
              var e = Array(t), r = o.prototype._countBits(t) - 1, n = 0;
              n < t;
              n++
            )
              e[n] = this.revBin(n, r, t);
            return e;
          }),
          (v.prototype.revBin = function (t, e, r) {
            if (0 === t || t === r - 1) return t;
            for (var n = 0, i = 0; i < e; i++)
              (n |= (1 & t) << (e - i - 1)), (t >>= 1);
            return n;
          }),
          (v.prototype.permute = function (t, e, r, n, i, o) {
            for (var s = 0; s < o; s++) (n[s] = e[t[s]]), (i[s] = r[t[s]]);
          }),
          (v.prototype.transform = function (t, e, r, n, i, o) {
            this.permute(o, t, e, r, n, i);
            for (var s = 1; s < i; s <<= 1)
              for (
                var a = s << 1,
                  l = Math.cos((2 * Math.PI) / a),
                  u = Math.sin((2 * Math.PI) / a),
                  f = 0;
                f < i;
                f += a
              )
                for (var h = l, c = u, d = 0; d < s; d++) {
                  var p = r[f + d],
                    g = n[f + d],
                    m = r[f + d + s],
                    y = n[f + d + s],
                    v = h * m - c * y;
                  (y = h * y + c * m),
                    (m = v),
                    (r[f + d] = p + m),
                    (n[f + d] = g + y),
                    (r[f + d + s] = p - m),
                    (n[f + d + s] = g - y),
                    d !== a &&
                      ((v = l * h - u * c), (c = l * c + u * h), (h = v));
                }
          }),
          (v.prototype.guessLen13b = function (t, e) {
            var r = 1 | Math.max(e, t),
              n = 1 & r,
              i = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) i++;
            return 1 << (i + 1 + n);
          }),
          (v.prototype.conjugate = function (t, e, r) {
            if (!(r <= 1))
              for (var n = 0; n < r / 2; n++) {
                var i = t[n];
                (t[n] = t[r - n - 1]),
                  (t[r - n - 1] = i),
                  (i = e[n]),
                  (e[n] = -e[r - n - 1]),
                  (e[r - n - 1] = -i);
              }
          }),
          (v.prototype.normalize13b = function (t, e) {
            for (var r = 0, n = 0; n < e / 2; n++) {
              var i =
                8192 * Math.round(t[2 * n + 1] / e) +
                Math.round(t[2 * n] / e) +
                r;
              (t[n] = 0x3ffffff & i),
                (r = i < 0x4000000 ? 0 : (i / 0x4000000) | 0);
            }
            return t;
          }),
          (v.prototype.convert13b = function (t, e, r, i) {
            for (var o = 0, s = 0; s < e; s++)
              (o += 0 | t[s]),
                (r[2 * s] = 8191 & o),
                (o >>>= 13),
                (r[2 * s + 1] = 8191 & o),
                (o >>>= 13);
            for (s = 2 * e; s < i; ++s) r[s] = 0;
            n(0 === o), n((-8192 & o) == 0);
          }),
          (v.prototype.stub = function (t) {
            for (var e = Array(t), r = 0; r < t; r++) e[r] = 0;
            return e;
          }),
          (v.prototype.mulp = function (t, e, r) {
            var n = 2 * this.guessLen13b(t.length, e.length),
              i = this.makeRBT(n),
              o = this.stub(n),
              s = Array(n),
              a = Array(n),
              l = Array(n),
              u = Array(n),
              f = Array(n),
              h = Array(n),
              c = r.words;
            (c.length = n),
              this.convert13b(t.words, t.length, s, n),
              this.convert13b(e.words, e.length, u, n),
              this.transform(s, o, a, l, n, i),
              this.transform(u, o, f, h, n, i);
            for (var d = 0; d < n; d++) {
              var p = a[d] * f[d] - l[d] * h[d];
              (l[d] = a[d] * h[d] + l[d] * f[d]), (a[d] = p);
            }
            return (
              this.conjugate(a, l, n),
              this.transform(a, l, c, o, n, i),
              this.conjugate(c, o, n),
              this.normalize13b(c, n),
              (r.negative = t.negative ^ e.negative),
              (r.length = t.length + e.length),
              r._strip()
            );
          }),
          (o.prototype.mul = function (t) {
            var e = new o(null);
            return (e.words = Array(this.length + t.length)), this.mulTo(t, e);
          }),
          (o.prototype.mulf = function (t) {
            var e = new o(null);
            return (e.words = Array(this.length + t.length)), y(this, t, e);
          }),
          (o.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (o.prototype.imuln = function (t) {
            var e = t < 0;
            e && (t = -t), n("number" == typeof t), n(t < 0x4000000);
            for (var r = 0, i = 0; i < this.length; i++) {
              var o = (0 | this.words[i]) * t,
                s = (0x3ffffff & o) + (0x3ffffff & r);
              (r >>= 26),
                (r += ((o / 0x4000000) | 0) + (s >>> 26)),
                (this.words[i] = 0x3ffffff & s);
            }
            return (
              0 !== r && ((this.words[i] = r), this.length++),
              e ? this.ineg() : this
            );
          }),
          (o.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (t) {
            var e = (function (t) {
              for (var e = Array(t.bitLength()), r = 0; r < e.length; r++) {
                var n = (r / 26) | 0,
                  i = r % 26;
                e[r] = (t.words[n] >>> i) & 1;
              }
              return e;
            })(t);
            if (0 === e.length) return new o(1);
            for (
              var r = this, n = 0;
              n < e.length && 0 === e[n];
              n++, r = r.sqr()
            );
            if (++n < e.length)
              for (var i = r.sqr(); n < e.length; n++, i = i.sqr())
                0 !== e[n] && (r = r.mul(i));
            return r;
          }),
          (o.prototype.iushln = function (t) {
            n("number" == typeof t && t >= 0);
            var e,
              r = t % 26,
              i = (t - r) / 26,
              o = (0x3ffffff >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var s = 0;
              for (e = 0; e < this.length; e++) {
                var a = this.words[e] & o,
                  l = ((0 | this.words[e]) - a) << r;
                (this.words[e] = l | s), (s = a >>> (26 - r));
              }
              s && ((this.words[e] = s), this.length++);
            }
            if (0 !== i) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + i] = this.words[e];
              for (e = 0; e < i; e++) this.words[e] = 0;
              this.length += i;
            }
            return this._strip();
          }),
          (o.prototype.ishln = function (t) {
            return n(0 === this.negative), this.iushln(t);
          }),
          (o.prototype.iushrn = function (t, e, r) {
            n("number" == typeof t && t >= 0),
              (i = e ? (e - (e % 26)) / 26 : 0);
            var i,
              o = t % 26,
              s = Math.min((t - o) / 26, this.length),
              a = 0x3ffffff ^ ((0x3ffffff >>> o) << o);
            if (((i -= s), (i = Math.max(0, i)), r)) {
              for (var l = 0; l < s; l++) r.words[l] = this.words[l];
              r.length = s;
            }
            if (0 === s);
            else if (this.length > s)
              for (this.length -= s, l = 0; l < this.length; l++)
                this.words[l] = this.words[l + s];
            else (this.words[0] = 0), (this.length = 1);
            var u = 0;
            for (l = this.length - 1; l >= 0 && (0 !== u || l >= i); l--) {
              var f = 0 | this.words[l];
              (this.words[l] = (u << (26 - o)) | (f >>> o)), (u = f & a);
            }
            return (
              r && 0 !== u && (r.words[r.length++] = u),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this._strip()
            );
          }),
          (o.prototype.ishrn = function (t, e, r) {
            return n(0 === this.negative), this.iushrn(t, e, r);
          }),
          (o.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (o.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (o.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (o.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (o.prototype.testn = function (t) {
            n("number" == typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            return !(this.length <= r) && !!(this.words[r] & (1 << e));
          }),
          (o.prototype.imaskn = function (t) {
            n("number" == typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            return (n(
              0 === this.negative,
              "imaskn works only with positive numbers"
            ),
            this.length <= r)
              ? this
              : (0 !== e && r++,
                (this.length = Math.min(r, this.length)),
                0 !== e &&
                  (this.words[this.length - 1] &=
                    0x3ffffff ^ ((0x3ffffff >>> e) << e)),
                this._strip());
          }),
          (o.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (o.prototype.iaddn = function (t) {
            return (n("number" == typeof t), n(t < 0x4000000), t < 0)
              ? this.isubn(-t)
              : 0 !== this.negative
              ? (1 === this.length && (0 | this.words[0]) <= t
                  ? ((this.words[0] = t - (0 | this.words[0])),
                    (this.negative = 0))
                  : ((this.negative = 0), this.isubn(t), (this.negative = 1)),
                this)
              : this._iaddn(t);
          }),
          (o.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 0x4000000; e++)
              (this.words[e] -= 0x4000000),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++;
            return (this.length = Math.max(this.length, e + 1)), this;
          }),
          (o.prototype.isubn = function (t) {
            if ((n("number" == typeof t), n(t < 0x4000000), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 0x4000000), (this.words[e + 1] -= 1);
            return this._strip();
          }),
          (o.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (o.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (t, e, r) {
            var i,
              o,
              s = t.length + r;
            this._expand(s);
            var a = 0;
            for (i = 0; i < t.length; i++) {
              o = (0 | this.words[i + r]) + a;
              var l = (0 | t.words[i]) * e;
              (o -= 0x3ffffff & l),
                (a = (o >> 26) - ((l / 0x4000000) | 0)),
                (this.words[i + r] = 0x3ffffff & o);
            }
            for (; i < this.length - r; i++)
              (a = (o = (0 | this.words[i + r]) + a) >> 26),
                (this.words[i + r] = 0x3ffffff & o);
            if (0 === a) return this._strip();
            for (n(-1 === a), a = 0, i = 0; i < this.length; i++)
              (a = (o = -(0 | this.words[i]) + a) >> 26),
                (this.words[i] = 0x3ffffff & o);
            return (this.negative = 1), this._strip();
          }),
          (o.prototype._wordDiv = function (t, e) {
            var r,
              n = this.length - t.length,
              i = this.clone(),
              s = t,
              a = 0 | s.words[s.length - 1];
            0 != (n = 26 - this._countBits(a)) &&
              ((s = s.ushln(n)), i.iushln(n), (a = 0 | s.words[s.length - 1]));
            var l = i.length - s.length;
            if ("mod" !== e) {
              ((r = new o(null)).length = l + 1), (r.words = Array(r.length));
              for (var u = 0; u < r.length; u++) r.words[u] = 0;
            }
            var f = i.clone()._ishlnsubmul(s, 1, l);
            0 === f.negative && ((i = f), r && (r.words[l] = 1));
            for (var h = l - 1; h >= 0; h--) {
              var c =
                (0 | i.words[s.length + h]) * 0x4000000 +
                (0 | i.words[s.length + h - 1]);
              for (
                c = Math.min((c / a) | 0, 0x3ffffff), i._ishlnsubmul(s, c, h);
                0 !== i.negative;

              )
                c--,
                  (i.negative = 0),
                  i._ishlnsubmul(s, 1, h),
                  i.isZero() || (i.negative ^= 1);
              r && (r.words[h] = c);
            }
            return (
              r && r._strip(),
              i._strip(),
              "div" !== e && 0 !== n && i.iushrn(n),
              { div: r || null, mod: i }
            );
          }),
          (o.prototype.divmod = function (t, e, r) {
            var i, s, a;
            return (n(!t.isZero()), this.isZero())
              ? { div: new o(0), mod: new o(0) }
              : 0 !== this.negative && 0 === t.negative
              ? ((a = this.neg().divmod(t, e)),
                "mod" !== e && (i = a.div.neg()),
                "div" !== e &&
                  ((s = a.mod.neg()), r && 0 !== s.negative && s.iadd(t)),
                { div: i, mod: s })
              : 0 === this.negative && 0 !== t.negative
              ? ((a = this.divmod(t.neg(), e)),
                "mod" !== e && (i = a.div.neg()),
                { div: i, mod: a.mod })
              : (this.negative & t.negative) != 0
              ? ((a = this.neg().divmod(t.neg(), e)),
                "div" !== e &&
                  ((s = a.mod.neg()), r && 0 !== s.negative && s.isub(t)),
                { div: a.div, mod: s })
              : t.length > this.length || 0 > this.cmp(t)
              ? { div: new o(0), mod: this }
              : 1 === t.length
              ? "div" === e
                ? { div: this.divn(t.words[0]), mod: null }
                : "mod" === e
                ? { div: null, mod: new o(this.modrn(t.words[0])) }
                : {
                    div: this.divn(t.words[0]),
                    mod: new o(this.modrn(t.words[0])),
                  }
              : this._wordDiv(t, e);
          }),
          (o.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (o.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (o.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (o.prototype.divRound = function (t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              n = t.ushrn(1),
              i = t.andln(1),
              o = r.cmp(n);
            return o < 0 || (1 === i && 0 === o)
              ? e.div
              : 0 !== e.div.negative
              ? e.div.isubn(1)
              : e.div.iaddn(1);
          }),
          (o.prototype.modrn = function (t) {
            var e = t < 0;
            e && (t = -t), n(t <= 0x3ffffff);
            for (var r = 0x4000000 % t, i = 0, o = this.length - 1; o >= 0; o--)
              i = (r * i + (0 | this.words[o])) % t;
            return e ? -i : i;
          }),
          (o.prototype.modn = function (t) {
            return this.modrn(t);
          }),
          (o.prototype.idivn = function (t) {
            var e = t < 0;
            e && (t = -t), n(t <= 0x3ffffff);
            for (var r = 0, i = this.length - 1; i >= 0; i--) {
              var o = (0 | this.words[i]) + 0x4000000 * r;
              (this.words[i] = (o / t) | 0), (r = o % t);
            }
            return this._strip(), e ? this.ineg() : this;
          }),
          (o.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (o.prototype.egcd = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var i = new o(1), s = new o(0), a = new o(0), l = new o(1), u = 0;
              e.isEven() && r.isEven();

            )
              e.iushrn(1), r.iushrn(1), ++u;
            for (var f = r.clone(), h = e.clone(); !e.isZero(); ) {
              for (
                var c = 0, d = 1;
                (e.words[0] & d) == 0 && c < 26;
                ++c, d <<= 1
              );
              if (c > 0)
                for (e.iushrn(c); c-- > 0; )
                  (i.isOdd() || s.isOdd()) && (i.iadd(f), s.isub(h)),
                    i.iushrn(1),
                    s.iushrn(1);
              for (
                var p = 0, g = 1;
                (r.words[0] & g) == 0 && p < 26;
                ++p, g <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (a.isOdd() || l.isOdd()) && (a.iadd(f), l.isub(h)),
                    a.iushrn(1),
                    l.iushrn(1);
              e.cmp(r) >= 0
                ? (e.isub(r), i.isub(a), s.isub(l))
                : (r.isub(e), a.isub(i), l.isub(s));
            }
            return { a: a, b: l, gcd: r.iushln(u) };
          }),
          (o.prototype._invmp = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e,
              r = this,
              i = t.clone();
            r = 0 !== r.negative ? r.umod(t) : r.clone();
            for (
              var s = new o(1), a = new o(0), l = i.clone();
              r.cmpn(1) > 0 && i.cmpn(1) > 0;

            ) {
              for (
                var u = 0, f = 1;
                (r.words[0] & f) == 0 && u < 26;
                ++u, f <<= 1
              );
              if (u > 0)
                for (r.iushrn(u); u-- > 0; )
                  s.isOdd() && s.iadd(l), s.iushrn(1);
              for (
                var h = 0, c = 1;
                (i.words[0] & c) == 0 && h < 26;
                ++h, c <<= 1
              );
              if (h > 0)
                for (i.iushrn(h); h-- > 0; )
                  a.isOdd() && a.iadd(l), a.iushrn(1);
              r.cmp(i) >= 0 ? (r.isub(i), s.isub(a)) : (i.isub(r), a.isub(s));
            }
            return 0 > (e = 0 === r.cmpn(1) ? s : a).cmpn(0) && e.iadd(t), e;
          }),
          (o.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
              r = t.clone();
            (e.negative = 0), (r.negative = 0);
            for (var n = 0; e.isEven() && r.isEven(); n++)
              e.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var i = e.cmp(r);
              if (i < 0) {
                var o = e;
                (e = r), (r = o);
              } else if (0 === i || 0 === r.cmpn(1)) break;
              e.isub(r);
            }
            return r.iushln(n);
          }),
          (o.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (o.prototype.isEven = function () {
            return (1 & this.words[0]) == 0;
          }),
          (o.prototype.isOdd = function () {
            return (1 & this.words[0]) == 1;
          }),
          (o.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (o.prototype.bincn = function (t) {
            n("number" == typeof t);
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e;
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= i), this;
            for (var o = i, s = r; 0 !== o && s < this.length; s++) {
              var a = 0 | this.words[s];
              (a += o), (o = a >>> 26), (a &= 0x3ffffff), (this.words[s] = a);
            }
            return 0 !== o && ((this.words[s] = o), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (t) {
            var e,
              r = t < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this._strip(), this.length > 1)) e = 1;
            else {
              r && (t = -t), n(t <= 0x3ffffff, "Number is too big");
              var i = 0 | this.words[0];
              e = i === t ? 0 : i < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var n = 0 | this.words[r],
                i = 0 | t.words[r];
              if (n !== i) {
                n < i ? (e = -1) : n > i && (e = 1);
                break;
              }
            }
            return e;
          }),
          (o.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (o.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (o.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (o.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (o.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (o.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (o.prototype.lten = function (t) {
            return 0 >= this.cmpn(t);
          }),
          (o.prototype.lte = function (t) {
            return 0 >= this.cmp(t);
          }),
          (o.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (o.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (o.red = function (t) {
            return new k(t);
          }),
          (o.prototype.toRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              n(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (o.prototype.fromRed = function () {
            return (
              n(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (o.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (o.prototype.forceRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (o.prototype.redAdd = function (t) {
            return (
              n(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (o.prototype.redIAdd = function (t) {
            return (
              n(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (o.prototype.redSub = function (t) {
            return (
              n(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (o.prototype.redISub = function (t) {
            return (
              n(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (o.prototype.redShl = function (t) {
            return (
              n(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (o.prototype.redMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (o.prototype.redIMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (o.prototype.redSqr = function () {
            return (
              n(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (o.prototype.redISqr = function () {
            return (
              n(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (o.prototype.redSqrt = function () {
            return (
              n(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (o.prototype.redInvm = function () {
            return (
              n(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (o.prototype.redNeg = function () {
            return (
              n(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (o.prototype.redPow = function (t) {
            return (
              n(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var b = { k256: null, p224: null, p192: null, p25519: null };
        function w(t, e) {
          (this.name = t),
            (this.p = new o(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function A() {
          w.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function E() {
          w.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function x() {
          w.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function _() {
          w.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function k(t) {
          if ("string" == typeof t) {
            var e = o._prime(t);
            (this.m = e.p), (this.prime = e);
          } else
            n(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function N(t) {
          k.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (w.prototype._tmp = function () {
          var t = new o(null);
          return (t.words = Array(Math.ceil(this.n / 13))), t;
        }),
          (w.prototype.ireduce = function (t) {
            var e,
              r = t;
            do
              this.split(r, this.tmp),
                (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            while (e > this.n);
            var n = e < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === n
                ? ((r.words[0] = 0), (r.length = 1))
                : n > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            );
          }),
          (w.prototype.split = function (t, e) {
            t.iushrn(this.n, 0, e);
          }),
          (w.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          i(A, w),
          (A.prototype.split = function (t, e) {
            for (var r = Math.min(t.length, 9), n = 0; n < r; n++)
              e.words[n] = t.words[n];
            if (((e.length = r), t.length <= 9)) {
              (t.words[0] = 0), (t.length = 1);
              return;
            }
            var i = t.words[9];
            for (n = 10, e.words[e.length++] = 4194303 & i; n < t.length; n++) {
              var o = 0 | t.words[n];
              (t.words[n - 10] = ((4194303 & o) << 4) | (i >>> 22)), (i = o);
            }
            (i >>>= 22),
              (t.words[n - 10] = i),
              0 === i && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (A.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 0 | t.words[r];
              (e += 977 * n),
                (t.words[r] = 0x3ffffff & e),
                (e = 64 * n + ((e / 0x4000000) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          i(E, w),
          i(x, w),
          i(_, w),
          (_.prototype.imulK = function (t) {
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = (0 | t.words[r]) * 19 + e,
                i = 0x3ffffff & n;
              (n >>>= 26), (t.words[r] = i), (e = n);
            }
            return 0 !== e && (t.words[t.length++] = e), t;
          }),
          (o._prime = function (t) {
            var e;
            if (b[t]) return b[t];
            if ("k256" === t) e = new A();
            else if ("p224" === t) e = new E();
            else if ("p192" === t) e = new x();
            else if ("p25519" === t) e = new _();
            else throw Error("Unknown prime " + t);
            return (b[t] = e), e;
          }),
          (k.prototype._verify1 = function (t) {
            n(0 === t.negative, "red works only with positives"),
              n(t.red, "red works only with red numbers");
          }),
          (k.prototype._verify2 = function (t, e) {
            n((t.negative | e.negative) == 0, "red works only with positives"),
              n(t.red && t.red === e.red, "red works only with red numbers");
          }),
          (k.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : (u(t, t.umod(this.m)._forceRed(this)), t);
          }),
          (k.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (k.prototype.add = function (t, e) {
            this._verify2(t, e);
            var r = t.add(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (k.prototype.iadd = function (t, e) {
            this._verify2(t, e);
            var r = t.iadd(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (k.prototype.sub = function (t, e) {
            this._verify2(t, e);
            var r = t.sub(e);
            return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this);
          }),
          (k.prototype.isub = function (t, e) {
            this._verify2(t, e);
            var r = t.isub(e);
            return 0 > r.cmpn(0) && r.iadd(this.m), r;
          }),
          (k.prototype.shl = function (t, e) {
            return this._verify1(t), this.imod(t.ushln(e));
          }),
          (k.prototype.imul = function (t, e) {
            return this._verify2(t, e), this.imod(t.imul(e));
          }),
          (k.prototype.mul = function (t, e) {
            return this._verify2(t, e), this.imod(t.mul(e));
          }),
          (k.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (k.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (k.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if ((n(e % 2 == 1), 3 === e)) {
              var r = this.m.add(new o(1)).iushrn(2);
              return this.pow(t, r);
            }
            for (
              var i = this.m.subn(1), s = 0;
              !i.isZero() && 0 === i.andln(1);

            )
              s++, i.iushrn(1);
            n(!i.isZero());
            var a = new o(1).toRed(this),
              l = a.redNeg(),
              u = this.m.subn(1).iushrn(1),
              f = this.m.bitLength();
            for (
              f = new o(2 * f * f).toRed(this);
              0 !== this.pow(f, u).cmp(l);

            )
              f.redIAdd(l);
            for (
              var h = this.pow(f, i),
                c = this.pow(t, i.addn(1).iushrn(1)),
                d = this.pow(t, i),
                p = s;
              0 !== d.cmp(a);

            ) {
              for (var g = d, m = 0; 0 !== g.cmp(a); m++) g = g.redSqr();
              n(m < p);
              var y = this.pow(h, new o(1).iushln(p - m - 1));
              (c = c.redMul(y)), (h = y.redSqr()), (d = d.redMul(h)), (p = m);
            }
            return c;
          }),
          (k.prototype.invm = function (t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e);
          }),
          (k.prototype.pow = function (t, e) {
            if (e.isZero()) return new o(1).toRed(this);
            if (0 === e.cmpn(1)) return t.clone();
            var r = Array(16);
            (r[0] = new o(1).toRed(this)), (r[1] = t);
            for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
            var i = r[0],
              s = 0,
              a = 0,
              l = e.bitLength() % 26;
            for (0 === l && (l = 26), n = e.length - 1; n >= 0; n--) {
              for (var u = e.words[n], f = l - 1; f >= 0; f--) {
                var h = (u >> f) & 1;
                if ((i !== r[0] && (i = this.sqr(i)), 0 === h && 0 === s)) {
                  a = 0;
                  continue;
                }
                (s <<= 1),
                  (s |= h),
                  (4 == ++a || (0 === n && 0 === f)) &&
                    ((i = this.mul(i, r[s])), (a = 0), (s = 0));
              }
              l = 26;
            }
            return i;
          }),
          (k.prototype.convertTo = function (t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e;
          }),
          (k.prototype.convertFrom = function (t) {
            var e = t.clone();
            return (e.red = null), e;
          }),
          (o.mont = function (t) {
            return new N(t);
          }),
          i(N, k),
          (N.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (N.prototype.convertFrom = function (t) {
            var e = this.imod(t.mul(this.rinv));
            return (e.red = null), e;
          }),
          (N.prototype.imul = function (t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var r = t.imul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              o = i;
            return (
              i.cmp(this.m) >= 0
                ? (o = i.isub(this.m))
                : 0 > i.cmpn(0) && (o = i.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (N.prototype.mul = function (t, e) {
            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
            var r = t.mul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              s = i;
            return (
              i.cmp(this.m) >= 0
                ? (s = i.isub(this.m))
                : 0 > i.cmpn(0) && (s = i.iadd(this.m)),
              s._forceRed(this)
            );
          }),
          (N.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = r.nmd(t)), this);
    },
    8287: (t, e, r) => {
      "use strict";
      let n = r(7526),
        i = r(251),
        o =
          "function" == typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      function s(t) {
        if (t > 0x7fffffff)
          throw RangeError(
            'The value "' + t + '" is invalid for option "size"'
          );
        let e = new Uint8Array(t);
        return Object.setPrototypeOf(e, a.prototype), e;
      }
      function a(t, e, r) {
        if ("number" == typeof t) {
          if ("string" == typeof e)
            throw TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return f(t);
        }
        return l(t, e, r);
      }
      function l(t, e, r) {
        if ("string" == typeof t)
          return (function (t, e) {
            if (
              (("string" != typeof e || "" === e) && (e = "utf8"),
              !a.isEncoding(e))
            )
              throw TypeError("Unknown encoding: " + e);
            let r = 0 | p(t, e),
              n = s(r),
              i = n.write(t, e);
            return i !== r && (n = n.slice(0, i)), n;
          })(t, e);
        if (ArrayBuffer.isView(t))
          return (function (t) {
            if (U(t, Uint8Array)) {
              let e = new Uint8Array(t);
              return c(e.buffer, e.byteOffset, e.byteLength);
            }
            return h(t);
          })(t);
        if (null == t)
          throw TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof t
          );
        if (
          U(t, ArrayBuffer) ||
          (t && U(t.buffer, ArrayBuffer)) ||
          ("undefined" != typeof SharedArrayBuffer &&
            (U(t, SharedArrayBuffer) || (t && U(t.buffer, SharedArrayBuffer))))
        )
          return c(t, e, r);
        if ("number" == typeof t)
          throw TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        let n = t.valueOf && t.valueOf();
        if (null != n && n !== t) return a.from(n, e, r);
        let i = (function (t) {
          var e;
          if (a.isBuffer(t)) {
            let e = 0 | d(t.length),
              r = s(e);
            return 0 === r.length || t.copy(r, 0, 0, e), r;
          }
          return void 0 !== t.length
            ? "number" != typeof t.length || (e = t.length) != e
              ? s(0)
              : h(t)
            : "Buffer" === t.type && Array.isArray(t.data)
            ? h(t.data)
            : void 0;
        })(t);
        if (i) return i;
        if (
          "undefined" != typeof Symbol &&
          null != Symbol.toPrimitive &&
          "function" == typeof t[Symbol.toPrimitive]
        )
          return a.from(t[Symbol.toPrimitive]("string"), e, r);
        throw TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof t
        );
      }
      function u(t) {
        if ("number" != typeof t)
          throw TypeError('"size" argument must be of type number');
        if (t < 0)
          throw RangeError(
            'The value "' + t + '" is invalid for option "size"'
          );
      }
      function f(t) {
        return u(t), s(t < 0 ? 0 : 0 | d(t));
      }
      function h(t) {
        let e = t.length < 0 ? 0 : 0 | d(t.length),
          r = s(e);
        for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
        return r;
      }
      function c(t, e, r) {
        let n;
        if (e < 0 || t.byteLength < e)
          throw RangeError('"offset" is outside of buffer bounds');
        if (t.byteLength < e + (r || 0))
          throw RangeError('"length" is outside of buffer bounds');
        return (
          Object.setPrototypeOf(
            (n =
              void 0 === e && void 0 === r
                ? new Uint8Array(t)
                : void 0 === r
                ? new Uint8Array(t, e)
                : new Uint8Array(t, e, r)),
            a.prototype
          ),
          n
        );
      }
      function d(t) {
        if (t >= 0x7fffffff)
          throw RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
          );
        return 0 | t;
      }
      function p(t, e) {
        if (a.isBuffer(t)) return t.length;
        if (ArrayBuffer.isView(t) || U(t, ArrayBuffer)) return t.byteLength;
        if ("string" != typeof t)
          throw TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof t
          );
        let r = t.length,
          n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        let i = !1;
        for (;;)
          switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
              return B(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return C(t).length;
            default:
              if (i) return n ? -1 : B(t).length;
              (e = ("" + e).toLowerCase()), (i = !0);
          }
      }
      function g(t, e, r) {
        let i = !1;
        if (
          ((void 0 === e || e < 0) && (e = 0),
          e > this.length ||
            ((void 0 === r || r > this.length) && (r = this.length),
            r <= 0 || (r >>>= 0) <= (e >>>= 0)))
        )
          return "";
        for (t || (t = "utf8"); ; )
          switch (t) {
            case "hex":
              return (function (t, e, r) {
                let n = t.length;
                (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                let i = "";
                for (let n = e; n < r; ++n) i += F[t[n]];
                return i;
              })(this, e, r);
            case "utf8":
            case "utf-8":
              return b(this, e, r);
            case "ascii":
              return (function (t, e, r) {
                let n = "";
                r = Math.min(t.length, r);
                for (let i = e; i < r; ++i)
                  n += String.fromCharCode(127 & t[i]);
                return n;
              })(this, e, r);
            case "latin1":
            case "binary":
              return (function (t, e, r) {
                let n = "";
                r = Math.min(t.length, r);
                for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                return n;
              })(this, e, r);
            case "base64":
              var o, s;
              return (
                (o = e),
                (s = r),
                0 === o && s === this.length
                  ? n.fromByteArray(this)
                  : n.fromByteArray(this.slice(o, s))
              );
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return (function (t, e, r) {
                let n = t.slice(e, r),
                  i = "";
                for (let t = 0; t < n.length - 1; t += 2)
                  i += String.fromCharCode(n[t] + 256 * n[t + 1]);
                return i;
              })(this, e, r);
            default:
              if (i) throw TypeError("Unknown encoding: " + t);
              (t = (t + "").toLowerCase()), (i = !0);
          }
      }
      function m(t, e, r) {
        let n = t[e];
        (t[e] = t[r]), (t[r] = n);
      }
      function y(t, e, r, n, i) {
        var o;
        if (0 === t.length) return -1;
        if (
          ("string" == typeof r
            ? ((n = r), (r = 0))
            : r > 0x7fffffff
            ? (r = 0x7fffffff)
            : r < -0x80000000 && (r = -0x80000000),
          (o = r = +r) != o && (r = i ? 0 : t.length - 1),
          r < 0 && (r = t.length + r),
          r >= t.length)
        ) {
          if (i) return -1;
          r = t.length - 1;
        } else if (r < 0) {
          if (!i) return -1;
          r = 0;
        }
        if (("string" == typeof e && (e = a.from(e, n)), a.isBuffer(e)))
          return 0 === e.length ? -1 : v(t, e, r, n, i);
        if ("number" == typeof e)
          return ((e &= 255), "function" == typeof Uint8Array.prototype.indexOf)
            ? i
              ? Uint8Array.prototype.indexOf.call(t, e, r)
              : Uint8Array.prototype.lastIndexOf.call(t, e, r)
            : v(t, [e], r, n, i);
        throw TypeError("val must be string, number or Buffer");
      }
      function v(t, e, r, n, i) {
        let o,
          s = 1,
          a = t.length,
          l = e.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (t.length < 2 || e.length < 2) return -1;
          (s = 2), (a /= 2), (l /= 2), (r /= 2);
        }
        function u(t, e) {
          return 1 === s ? t[e] : t.readUInt16BE(e * s);
        }
        if (i) {
          let n = -1;
          for (o = r; o < a; o++)
            if (u(t, o) === u(e, -1 === n ? 0 : o - n)) {
              if ((-1 === n && (n = o), o - n + 1 === l)) return n * s;
            } else -1 !== n && (o -= o - n), (n = -1);
        } else
          for (r + l > a && (r = a - l), o = r; o >= 0; o--) {
            let r = !0;
            for (let n = 0; n < l; n++)
              if (u(t, o + n) !== u(e, n)) {
                r = !1;
                break;
              }
            if (r) return o;
          }
        return -1;
      }
      function b(t, e, r) {
        r = Math.min(t.length, r);
        let n = [],
          i = e;
        for (; i < r; ) {
          let e = t[i],
            o = null,
            s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
          if (i + s <= r) {
            let r, n, a, l;
            switch (s) {
              case 1:
                e < 128 && (o = e);
                break;
              case 2:
                (192 & (r = t[i + 1])) == 128 &&
                  (l = ((31 & e) << 6) | (63 & r)) > 127 &&
                  (o = l);
                break;
              case 3:
                (r = t[i + 1]),
                  (n = t[i + 2]),
                  (192 & r) == 128 &&
                    (192 & n) == 128 &&
                    (l = ((15 & e) << 12) | ((63 & r) << 6) | (63 & n)) >
                      2047 &&
                    (l < 55296 || l > 57343) &&
                    (o = l);
                break;
              case 4:
                (r = t[i + 1]),
                  (n = t[i + 2]),
                  (a = t[i + 3]),
                  (192 & r) == 128 &&
                    (192 & n) == 128 &&
                    (192 & a) == 128 &&
                    (l =
                      ((15 & e) << 18) |
                      ((63 & r) << 12) |
                      ((63 & n) << 6) |
                      (63 & a)) > 65535 &&
                    l < 1114112 &&
                    (o = l);
            }
          }
          null === o
            ? ((o = 65533), (s = 1))
            : o > 65535 &&
              ((o -= 65536),
              n.push(((o >>> 10) & 1023) | 55296),
              (o = 56320 | (1023 & o))),
            n.push(o),
            (i += s);
        }
        return (function (t) {
          let e = t.length;
          if (e <= 4096) return String.fromCharCode.apply(String, t);
          let r = "",
            n = 0;
          for (; n < e; )
            r += String.fromCharCode.apply(String, t.slice(n, (n += 4096)));
          return r;
        })(n);
      }
      function w(t, e, r) {
        if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
        if (t + e > r)
          throw RangeError("Trying to access beyond buffer length");
      }
      function A(t, e, r, n, i, o) {
        if (!a.isBuffer(t))
          throw TypeError('"buffer" argument must be a Buffer instance');
        if (e > i || e < o)
          throw RangeError('"value" argument is out of bounds');
        if (r + n > t.length) throw RangeError("Index out of range");
      }
      function E(t, e, r, n, i) {
        R(e, n, i, t, r, 7);
        let o = Number(e & BigInt(0xffffffff));
        (t[r++] = o),
          (o >>= 8),
          (t[r++] = o),
          (o >>= 8),
          (t[r++] = o),
          (o >>= 8),
          (t[r++] = o);
        let s = Number((e >> BigInt(32)) & BigInt(0xffffffff));
        return (
          (t[r++] = s),
          (s >>= 8),
          (t[r++] = s),
          (s >>= 8),
          (t[r++] = s),
          (s >>= 8),
          (t[r++] = s),
          r
        );
      }
      function x(t, e, r, n, i) {
        R(e, n, i, t, r, 7);
        let o = Number(e & BigInt(0xffffffff));
        (t[r + 7] = o),
          (o >>= 8),
          (t[r + 6] = o),
          (o >>= 8),
          (t[r + 5] = o),
          (o >>= 8),
          (t[r + 4] = o);
        let s = Number((e >> BigInt(32)) & BigInt(0xffffffff));
        return (
          (t[r + 3] = s),
          (s >>= 8),
          (t[r + 2] = s),
          (s >>= 8),
          (t[r + 1] = s),
          (s >>= 8),
          (t[r] = s),
          r + 8
        );
      }
      function _(t, e, r, n, i, o) {
        if (r + n > t.length || r < 0) throw RangeError("Index out of range");
      }
      function k(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || _(t, e, r, 4, 34028234663852886e22, -34028234663852886e22),
          i.write(t, e, r, n, 23, 4),
          r + 4
        );
      }
      function N(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || _(t, e, r, 8, 17976931348623157e292, -17976931348623157e292),
          i.write(t, e, r, n, 52, 8),
          r + 8
        );
      }
      (e.Buffer = a),
        (e.SlowBuffer = function (t) {
          return +t != t && (t = 0), a.alloc(+t);
        }),
        (e.INSPECT_MAX_BYTES = 50),
        (e.kMaxLength = 0x7fffffff),
        (a.TYPED_ARRAY_SUPPORT = (function () {
          try {
            let t = new Uint8Array(1),
              e = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(e, Uint8Array.prototype),
              Object.setPrototypeOf(t, e),
              42 === t.foo()
            );
          } catch (t) {
            return !1;
          }
        })()),
        a.TYPED_ARRAY_SUPPORT ||
          "undefined" == typeof console ||
          "function" != typeof console.error ||
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
          ),
        Object.defineProperty(a.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(a.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.byteOffset;
          },
        }),
        (a.poolSize = 8192),
        (a.from = function (t, e, r) {
          return l(t, e, r);
        }),
        Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(a, Uint8Array),
        (a.alloc = function (t, e, r) {
          return (u(t), t <= 0)
            ? s(t)
            : void 0 !== e
            ? "string" == typeof r
              ? s(t).fill(e, r)
              : s(t).fill(e)
            : s(t);
        }),
        (a.allocUnsafe = function (t) {
          return f(t);
        }),
        (a.allocUnsafeSlow = function (t) {
          return f(t);
        }),
        (a.isBuffer = function (t) {
          return null != t && !0 === t._isBuffer && t !== a.prototype;
        }),
        (a.compare = function (t, e) {
          if (
            (U(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
            U(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
            !a.isBuffer(t) || !a.isBuffer(e))
          )
            throw TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (t === e) return 0;
          let r = t.length,
            n = e.length;
          for (let i = 0, o = Math.min(r, n); i < o; ++i)
            if (t[i] !== e[i]) {
              (r = t[i]), (n = e[i]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (a.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (a.concat = function (t, e) {
          let r;
          if (!Array.isArray(t))
            throw TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return a.alloc(0);
          if (void 0 === e)
            for (r = 0, e = 0; r < t.length; ++r) e += t[r].length;
          let n = a.allocUnsafe(e),
            i = 0;
          for (r = 0; r < t.length; ++r) {
            let e = t[r];
            if (U(e, Uint8Array))
              i + e.length > n.length
                ? (a.isBuffer(e) || (e = a.from(e)), e.copy(n, i))
                : Uint8Array.prototype.set.call(n, e, i);
            else if (a.isBuffer(e)) e.copy(n, i);
            else throw TypeError('"list" argument must be an Array of Buffers');
            i += e.length;
          }
          return n;
        }),
        (a.byteLength = p),
        (a.prototype._isBuffer = !0),
        (a.prototype.swap16 = function () {
          let t = this.length;
          if (t % 2 != 0)
            throw RangeError("Buffer size must be a multiple of 16-bits");
          for (let e = 0; e < t; e += 2) m(this, e, e + 1);
          return this;
        }),
        (a.prototype.swap32 = function () {
          let t = this.length;
          if (t % 4 != 0)
            throw RangeError("Buffer size must be a multiple of 32-bits");
          for (let e = 0; e < t; e += 4)
            m(this, e, e + 3), m(this, e + 1, e + 2);
          return this;
        }),
        (a.prototype.swap64 = function () {
          let t = this.length;
          if (t % 8 != 0)
            throw RangeError("Buffer size must be a multiple of 64-bits");
          for (let e = 0; e < t; e += 8)
            m(this, e, e + 7),
              m(this, e + 1, e + 6),
              m(this, e + 2, e + 5),
              m(this, e + 3, e + 4);
          return this;
        }),
        (a.prototype.toString = function () {
          let t = this.length;
          return 0 === t
            ? ""
            : 0 == arguments.length
            ? b(this, 0, t)
            : g.apply(this, arguments);
        }),
        (a.prototype.toLocaleString = a.prototype.toString),
        (a.prototype.equals = function (t) {
          if (!a.isBuffer(t)) throw TypeError("Argument must be a Buffer");
          return this === t || 0 === a.compare(this, t);
        }),
        (a.prototype.inspect = function () {
          let t = "",
            r = e.INSPECT_MAX_BYTES;
          return (
            (t = this.toString("hex", 0, r)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > r && (t += " ... "),
            "<Buffer " + t + ">"
          );
        }),
        o && (a.prototype[o] = a.prototype.inspect),
        (a.prototype.compare = function (t, e, r, n, i) {
          if (
            (U(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
            !a.isBuffer(t))
          )
            throw TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof t
            );
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            e < 0 || r > t.length || n < 0 || i > this.length)
          )
            throw RangeError("out of range index");
          if (n >= i && e >= r) return 0;
          if (n >= i) return -1;
          if (e >= r) return 1;
          if (((e >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === t))
            return 0;
          let o = i - n,
            s = r - e,
            l = Math.min(o, s),
            u = this.slice(n, i),
            f = t.slice(e, r);
          for (let t = 0; t < l; ++t)
            if (u[t] !== f[t]) {
              (o = u[t]), (s = f[t]);
              break;
            }
          return o < s ? -1 : s < o ? 1 : 0;
        }),
        (a.prototype.includes = function (t, e, r) {
          return -1 !== this.indexOf(t, e, r);
        }),
        (a.prototype.indexOf = function (t, e, r) {
          return y(this, t, e, r, !0);
        }),
        (a.prototype.lastIndexOf = function (t, e, r) {
          return y(this, t, e, r, !1);
        }),
        (a.prototype.write = function (t, e, r, n) {
          var i, o, s, a, l, u, f, h;
          if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
          else if (void 0 === r && "string" == typeof e)
            (n = e), (r = this.length), (e = 0);
          else if (isFinite(e))
            (e >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                : ((n = r), (r = void 0));
          else
            throw Error(
              "Buffer.write(string, encoding, offset[, length]) is no longer supported"
            );
          let c = this.length - e;
          if (
            ((void 0 === r || r > c) && (r = c),
            (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
          )
            throw RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          let d = !1;
          for (;;)
            switch (n) {
              case "hex":
                return (function (t, e, r, n) {
                  let i;
                  r = Number(r) || 0;
                  let o = t.length - r;
                  n ? (n = Number(n)) > o && (n = o) : (n = o);
                  let s = e.length;
                  for (n > s / 2 && (n = s / 2), i = 0; i < n; ++i) {
                    let n = parseInt(e.substr(2 * i, 2), 16);
                    if (n != n) break;
                    t[r + i] = n;
                  }
                  return i;
                })(this, t, e, r);
              case "utf8":
              case "utf-8":
                return (i = e), (o = r), L(B(t, this.length - i), this, i, o);
              case "ascii":
              case "latin1":
              case "binary":
                return (
                  (s = e),
                  (a = r),
                  L(
                    (function (t) {
                      let e = [];
                      for (let r = 0; r < t.length; ++r)
                        e.push(255 & t.charCodeAt(r));
                      return e;
                    })(t),
                    this,
                    s,
                    a
                  )
                );
              case "base64":
                return (l = e), (u = r), L(C(t), this, l, u);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return (
                  (f = e),
                  (h = r),
                  L(
                    (function (t, e) {
                      let r, n;
                      let i = [];
                      for (let o = 0; o < t.length && !((e -= 2) < 0); ++o)
                        (n = (r = t.charCodeAt(o)) >> 8),
                          i.push(r % 256),
                          i.push(n);
                      return i;
                    })(t, this.length - f),
                    this,
                    f,
                    h
                  )
                );
              default:
                if (d) throw TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (d = !0);
            }
        }),
        (a.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        }),
        (a.prototype.slice = function (t, e) {
          let r = this.length;
          (t = ~~t),
            (e = void 0 === e ? r : ~~e),
            t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            e < t && (e = t);
          let n = this.subarray(t, e);
          return Object.setPrototypeOf(n, a.prototype), n;
        }),
        (a.prototype.readUintLE = a.prototype.readUIntLE =
          function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || w(t, e, this.length);
            let n = this[t],
              i = 1,
              o = 0;
            for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
            return n;
          }),
        (a.prototype.readUintBE = a.prototype.readUIntBE =
          function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || w(t, e, this.length);
            let n = this[t + --e],
              i = 1;
            for (; e > 0 && (i *= 256); ) n += this[t + --e] * i;
            return n;
          }),
        (a.prototype.readUint8 = a.prototype.readUInt8 =
          function (t, e) {
            return (t >>>= 0), e || w(t, 1, this.length), this[t];
          }),
        (a.prototype.readUint16LE = a.prototype.readUInt16LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || w(t, 2, this.length),
              this[t] | (this[t + 1] << 8)
            );
          }),
        (a.prototype.readUint16BE = a.prototype.readUInt16BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || w(t, 2, this.length),
              (this[t] << 8) | this[t + 1]
            );
          }),
        (a.prototype.readUint32LE = a.prototype.readUInt32LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || w(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                0x1000000 * this[t + 3]
            );
          }),
        (a.prototype.readUint32BE = a.prototype.readUInt32BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || w(t, 4, this.length),
              0x1000000 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
        (a.prototype.readBigUInt64LE = D(function (t) {
          T((t >>>= 0), "offset");
          let e = this[t],
            r = this[t + 7];
          (void 0 === e || void 0 === r) && P(t, this.length - 8);
          let n =
              e + 256 * this[++t] + 65536 * this[++t] + 0x1000000 * this[++t],
            i = this[++t] + 256 * this[++t] + 65536 * this[++t] + 0x1000000 * r;
          return BigInt(n) + (BigInt(i) << BigInt(32));
        })),
        (a.prototype.readBigUInt64BE = D(function (t) {
          T((t >>>= 0), "offset");
          let e = this[t],
            r = this[t + 7];
          (void 0 === e || void 0 === r) && P(t, this.length - 8);
          let n =
              0x1000000 * e + 65536 * this[++t] + 256 * this[++t] + this[++t],
            i = 0x1000000 * this[++t] + 65536 * this[++t] + 256 * this[++t] + r;
          return (BigInt(n) << BigInt(32)) + BigInt(i);
        })),
        (a.prototype.readIntLE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || w(t, e, this.length);
          let n = this[t],
            i = 1,
            o = 0;
          for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
          return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
        }),
        (a.prototype.readIntBE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || w(t, e, this.length);
          let n = e,
            i = 1,
            o = this[t + --n];
          for (; n > 0 && (i *= 256); ) o += this[t + --n] * i;
          return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
        }),
        (a.prototype.readInt8 = function (t, e) {
          return ((t >>>= 0), e || w(t, 1, this.length), 128 & this[t])
            ? -((255 - this[t] + 1) * 1)
            : this[t];
        }),
        (a.prototype.readInt16LE = function (t, e) {
          (t >>>= 0), e || w(t, 2, this.length);
          let r = this[t] | (this[t + 1] << 8);
          return 32768 & r ? 0xffff0000 | r : r;
        }),
        (a.prototype.readInt16BE = function (t, e) {
          (t >>>= 0), e || w(t, 2, this.length);
          let r = this[t + 1] | (this[t] << 8);
          return 32768 & r ? 0xffff0000 | r : r;
        }),
        (a.prototype.readInt32LE = function (t, e) {
          return (
            (t >>>= 0),
            e || w(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          );
        }),
        (a.prototype.readInt32BE = function (t, e) {
          return (
            (t >>>= 0),
            e || w(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          );
        }),
        (a.prototype.readBigInt64LE = D(function (t) {
          T((t >>>= 0), "offset");
          let e = this[t],
            r = this[t + 7];
          return (
            (void 0 === e || void 0 === r) && P(t, this.length - 8),
            (BigInt(
              this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24)
            ) <<
              BigInt(32)) +
              BigInt(
                e + 256 * this[++t] + 65536 * this[++t] + 0x1000000 * this[++t]
              )
          );
        })),
        (a.prototype.readBigInt64BE = D(function (t) {
          T((t >>>= 0), "offset");
          let e = this[t],
            r = this[t + 7];
          return (
            (void 0 === e || void 0 === r) && P(t, this.length - 8),
            (BigInt(
              (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t]
            ) <<
              BigInt(32)) +
              BigInt(
                0x1000000 * this[++t] + 65536 * this[++t] + 256 * this[++t] + r
              )
          );
        })),
        (a.prototype.readFloatLE = function (t, e) {
          return (
            (t >>>= 0), e || w(t, 4, this.length), i.read(this, t, !0, 23, 4)
          );
        }),
        (a.prototype.readFloatBE = function (t, e) {
          return (
            (t >>>= 0), e || w(t, 4, this.length), i.read(this, t, !1, 23, 4)
          );
        }),
        (a.prototype.readDoubleLE = function (t, e) {
          return (
            (t >>>= 0), e || w(t, 8, this.length), i.read(this, t, !0, 52, 8)
          );
        }),
        (a.prototype.readDoubleBE = function (t, e) {
          return (
            (t >>>= 0), e || w(t, 8, this.length), i.read(this, t, !1, 52, 8)
          );
        }),
        (a.prototype.writeUintLE = a.prototype.writeUIntLE =
          function (t, e, r, n) {
            if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
              let n = Math.pow(2, 8 * r) - 1;
              A(this, t, e, r, n, 0);
            }
            let i = 1,
              o = 0;
            for (this[e] = 255 & t; ++o < r && (i *= 256); )
              this[e + o] = (t / i) & 255;
            return e + r;
          }),
        (a.prototype.writeUintBE = a.prototype.writeUIntBE =
          function (t, e, r, n) {
            if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
              let n = Math.pow(2, 8 * r) - 1;
              A(this, t, e, r, n, 0);
            }
            let i = r - 1,
              o = 1;
            for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
              this[e + i] = (t / o) & 255;
            return e + r;
          }),
        (a.prototype.writeUint8 = a.prototype.writeUInt8 =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || A(this, t, e, 1, 255, 0),
              (this[e] = 255 & t),
              e + 1
            );
          }),
        (a.prototype.writeUint16LE = a.prototype.writeUInt16LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || A(this, t, e, 2, 65535, 0),
              (this[e] = 255 & t),
              (this[e + 1] = t >>> 8),
              e + 2
            );
          }),
        (a.prototype.writeUint16BE = a.prototype.writeUInt16BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || A(this, t, e, 2, 65535, 0),
              (this[e] = t >>> 8),
              (this[e + 1] = 255 & t),
              e + 2
            );
          }),
        (a.prototype.writeUint32LE = a.prototype.writeUInt32LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || A(this, t, e, 4, 0xffffffff, 0),
              (this[e + 3] = t >>> 24),
              (this[e + 2] = t >>> 16),
              (this[e + 1] = t >>> 8),
              (this[e] = 255 & t),
              e + 4
            );
          }),
        (a.prototype.writeUint32BE = a.prototype.writeUInt32BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || A(this, t, e, 4, 0xffffffff, 0),
              (this[e] = t >>> 24),
              (this[e + 1] = t >>> 16),
              (this[e + 2] = t >>> 8),
              (this[e + 3] = 255 & t),
              e + 4
            );
          }),
        (a.prototype.writeBigUInt64LE = D(function (t, e = 0) {
          return E(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (a.prototype.writeBigUInt64BE = D(function (t, e = 0) {
          return x(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (a.prototype.writeIntLE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            let n = Math.pow(2, 8 * r - 1);
            A(this, t, e, r, n - 1, -n);
          }
          let i = 0,
            o = 1,
            s = 0;
          for (this[e] = 255 & t; ++i < r && (o *= 256); )
            t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1),
              (this[e + i] = (((t / o) >> 0) - s) & 255);
          return e + r;
        }),
        (a.prototype.writeIntBE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            let n = Math.pow(2, 8 * r - 1);
            A(this, t, e, r, n - 1, -n);
          }
          let i = r - 1,
            o = 1,
            s = 0;
          for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
            t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1),
              (this[e + i] = (((t / o) >> 0) - s) & 255);
          return e + r;
        }),
        (a.prototype.writeInt8 = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || A(this, t, e, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (a.prototype.writeInt16LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || A(this, t, e, 2, 32767, -32768),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          );
        }),
        (a.prototype.writeInt16BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || A(this, t, e, 2, 32767, -32768),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          );
        }),
        (a.prototype.writeInt32LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || A(this, t, e, 4, 0x7fffffff, -0x80000000),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            (this[e + 2] = t >>> 16),
            (this[e + 3] = t >>> 24),
            e + 4
          );
        }),
        (a.prototype.writeInt32BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || A(this, t, e, 4, 0x7fffffff, -0x80000000),
            t < 0 && (t = 0xffffffff + t + 1),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          );
        }),
        (a.prototype.writeBigInt64LE = D(function (t, e = 0) {
          return E(
            this,
            t,
            e,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (a.prototype.writeBigInt64BE = D(function (t, e = 0) {
          return x(
            this,
            t,
            e,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (a.prototype.writeFloatLE = function (t, e, r) {
          return k(this, t, e, !0, r);
        }),
        (a.prototype.writeFloatBE = function (t, e, r) {
          return k(this, t, e, !1, r);
        }),
        (a.prototype.writeDoubleLE = function (t, e, r) {
          return N(this, t, e, !0, r);
        }),
        (a.prototype.writeDoubleBE = function (t, e, r) {
          return N(this, t, e, !1, r);
        }),
        (a.prototype.copy = function (t, e, r, n) {
          if (!a.isBuffer(t)) throw TypeError("argument should be a Buffer");
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r || 0 === t.length || 0 === this.length)
          )
            return 0;
          if (e < 0) throw RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length) throw RangeError("Index out of range");
          if (n < 0) throw RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length),
            t.length - e < n - r && (n = t.length - e + r);
          let i = n - r;
          return (
            this === t && "function" == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(e, r, n)
              : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
            i
          );
        }),
        (a.prototype.fill = function (t, e, r, n) {
          let i;
          if ("string" == typeof t) {
            if (
              ("string" == typeof e
                ? ((n = e), (e = 0), (r = this.length))
                : "string" == typeof r && ((n = r), (r = this.length)),
              void 0 !== n && "string" != typeof n)
            )
              throw TypeError("encoding must be a string");
            if ("string" == typeof n && !a.isEncoding(n))
              throw TypeError("Unknown encoding: " + n);
            if (1 === t.length) {
              let e = t.charCodeAt(0);
              (("utf8" === n && e < 128) || "latin1" === n) && (t = e);
            }
          } else
            "number" == typeof t
              ? (t &= 255)
              : "boolean" == typeof t && (t = Number(t));
          if (e < 0 || this.length < e || this.length < r)
            throw RangeError("Out of range index");
          if (r <= e) return this;
          if (
            ((e >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            t || (t = 0),
            "number" == typeof t)
          )
            for (i = e; i < r; ++i) this[i] = t;
          else {
            let o = a.isBuffer(t) ? t : a.from(t, n),
              s = o.length;
            if (0 === s)
              throw TypeError(
                'The value "' + t + '" is invalid for argument "value"'
              );
            for (i = 0; i < r - e; ++i) this[i + e] = o[i % s];
          }
          return this;
        });
      let S = {};
      function M(t, e, r) {
        S[t] = class extends r {
          constructor() {
            super(),
              Object.defineProperty(this, "message", {
                value: e.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = `${this.name} [${t}]`),
              this.stack,
              delete this.name;
          }
          get code() {
            return t;
          }
          set code(t) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: t,
              writable: !0,
            });
          }
          toString() {
            return `${this.name} [${t}]: ${this.message}`;
          }
        };
      }
      function I(t) {
        let e = "",
          r = t.length,
          n = "-" === t[0] ? 1 : 0;
        for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
        return `${t.slice(0, r)}${e}`;
      }
      function R(t, e, r, n, i, o) {
        if (t > r || t < e) {
          let n;
          let i = "bigint" == typeof e ? "n" : "";
          throw (
            ((n =
              o > 3
                ? 0 === e || e === BigInt(0)
                  ? `>= 0${i} and < 2${i} ** ${(o + 1) * 8}${i}`
                  : `>= -(2${i} ** ${(o + 1) * 8 - 1}${i}) and < 2 ** ${
                      (o + 1) * 8 - 1
                    }${i}`
                : `>= ${e}${i} and <= ${r}${i}`),
            new S.ERR_OUT_OF_RANGE("value", n, t))
          );
        }
        T(i, "offset"),
          (void 0 === n[i] || void 0 === n[i + o]) && P(i, n.length - (o + 1));
      }
      function T(t, e) {
        if ("number" != typeof t)
          throw new S.ERR_INVALID_ARG_TYPE(e, "number", t);
      }
      function P(t, e, r) {
        if (Math.floor(t) !== t)
          throw (
            (T(t, r), new S.ERR_OUT_OF_RANGE(r || "offset", "an integer", t))
          );
        if (e < 0) throw new S.ERR_BUFFER_OUT_OF_BOUNDS();
        throw new S.ERR_OUT_OF_RANGE(
          r || "offset",
          `>= ${r ? 1 : 0} and <= ${e}`,
          t
        );
      }
      M(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function (t) {
          return t
            ? `${t} is outside of buffer bounds`
            : "Attempt to access memory outside buffer bounds";
        },
        RangeError
      ),
        M(
          "ERR_INVALID_ARG_TYPE",
          function (t, e) {
            return `The "${t}" argument must be of type number. Received type ${typeof e}`;
          },
          TypeError
        ),
        M(
          "ERR_OUT_OF_RANGE",
          function (t, e, r) {
            let n = `The value of "${t}" is out of range.`,
              i = r;
            return (
              Number.isInteger(r) && Math.abs(r) > 0x100000000
                ? (i = I(String(r)))
                : "bigint" == typeof r &&
                  ((i = String(r)),
                  (r > BigInt(2) ** BigInt(32) ||
                    r < -(BigInt(2) ** BigInt(32))) &&
                    (i = I(i)),
                  (i += "n")),
              (n += ` It must be ${e}. Received ${i}`)
            );
          },
          RangeError
        );
      let O = /[^+/0-9A-Za-z-_]/g;
      function B(t, e) {
        let r;
        e = e || 1 / 0;
        let n = t.length,
          i = null,
          o = [];
        for (let s = 0; s < n; ++s) {
          if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319 || s + 1 === n) {
                (e -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
              continue;
            }
            r = (((i - 55296) << 10) | (r - 56320)) + 65536;
          } else i && (e -= 3) > -1 && o.push(239, 191, 189);
          if (((i = null), r < 128)) {
            if ((e -= 1) < 0) break;
            o.push(r);
          } else if (r < 2048) {
            if ((e -= 2) < 0) break;
            o.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((e -= 3) < 0) break;
            o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else if (r < 1114112) {
            if ((e -= 4) < 0) break;
            o.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          } else throw Error("Invalid code point");
        }
        return o;
      }
      function C(t) {
        return n.toByteArray(
          (function (t) {
            if ((t = (t = t.split("=")[0]).trim().replace(O, "")).length < 2)
              return "";
            for (; t.length % 4 != 0; ) t += "=";
            return t;
          })(t)
        );
      }
      function L(t, e, r, n) {
        let i;
        for (i = 0; i < n && !(i + r >= e.length) && !(i >= t.length); ++i)
          e[i + r] = t[i];
        return i;
      }
      function U(t, e) {
        return (
          t instanceof e ||
          (null != t &&
            null != t.constructor &&
            null != t.constructor.name &&
            t.constructor.name === e.name)
        );
      }
      let F = (function () {
        let t = "0123456789abcdef",
          e = Array(256);
        for (let r = 0; r < 16; ++r) {
          let n = 16 * r;
          for (let i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
        }
        return e;
      })();
      function D(t) {
        return "undefined" == typeof BigInt ? j : t;
      }
      function j() {
        throw Error("BigInt not supported");
      }
    },
    7952: (t, e, r) => {
      (e.utils = r(7426)),
        (e.common = r(6166)),
        (e.sha = r(6229)),
        (e.ripemd = r(6784)),
        (e.hmac = r(8948)),
        (e.sha1 = e.sha.sha1),
        (e.sha256 = e.sha.sha256),
        (e.sha224 = e.sha.sha224),
        (e.sha384 = e.sha.sha384),
        (e.sha512 = e.sha.sha512),
        (e.ripemd160 = e.ripemd.ripemd160);
    },
    6166: (t, e, r) => {
      "use strict";
      var n = r(7426),
        i = r(3349);
      function o() {
        (this.pending = null),
          (this.pendingTotal = 0),
          (this.blockSize = this.constructor.blockSize),
          (this.outSize = this.constructor.outSize),
          (this.hmacStrength = this.constructor.hmacStrength),
          (this.padLength = this.constructor.padLength / 8),
          (this.endian = "big"),
          (this._delta8 = this.blockSize / 8),
          (this._delta32 = this.blockSize / 32);
      }
      (e.BlockHash = o),
        (o.prototype.update = function (t, e) {
          if (
            ((t = n.toArray(t, e)),
            this.pending
              ? (this.pending = this.pending.concat(t))
              : (this.pending = t),
            (this.pendingTotal += t.length),
            this.pending.length >= this._delta8)
          ) {
            var r = (t = this.pending).length % this._delta8;
            (this.pending = t.slice(t.length - r, t.length)),
              0 === this.pending.length && (this.pending = null),
              (t = n.join32(t, 0, t.length - r, this.endian));
            for (var i = 0; i < t.length; i += this._delta32)
              this._update(t, i, i + this._delta32);
          }
          return this;
        }),
        (o.prototype.digest = function (t) {
          return (
            this.update(this._pad()), i(null === this.pending), this._digest(t)
          );
        }),
        (o.prototype._pad = function () {
          var t = this.pendingTotal,
            e = this._delta8,
            r = e - ((t + this.padLength) % e),
            n = Array(r + this.padLength);
          n[0] = 128;
          for (var i = 1; i < r; i++) n[i] = 0;
          if (((t <<= 3), "big" === this.endian)) {
            for (var o = 8; o < this.padLength; o++) n[i++] = 0;
            (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = (t >>> 24) & 255),
              (n[i++] = (t >>> 16) & 255),
              (n[i++] = (t >>> 8) & 255),
              (n[i++] = 255 & t);
          } else
            for (
              o = 8,
                n[i++] = 255 & t,
                n[i++] = (t >>> 8) & 255,
                n[i++] = (t >>> 16) & 255,
                n[i++] = (t >>> 24) & 255,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0;
              o < this.padLength;
              o++
            )
              n[i++] = 0;
          return n;
        });
    },
    8948: (t, e, r) => {
      "use strict";
      var n = r(7426),
        i = r(3349);
      function o(t, e, r) {
        if (!(this instanceof o)) return new o(t, e, r);
        (this.Hash = t),
          (this.blockSize = t.blockSize / 8),
          (this.outSize = t.outSize / 8),
          (this.inner = null),
          (this.outer = null),
          this._init(n.toArray(e, r));
      }
      (t.exports = o),
        (o.prototype._init = function (t) {
          t.length > this.blockSize && (t = new this.Hash().update(t).digest()),
            i(t.length <= this.blockSize);
          for (var e = t.length; e < this.blockSize; e++) t.push(0);
          for (e = 0; e < t.length; e++) t[e] ^= 54;
          for (e = 0, this.inner = new this.Hash().update(t); e < t.length; e++)
            t[e] ^= 106;
          this.outer = new this.Hash().update(t);
        }),
        (o.prototype.update = function (t, e) {
          return this.inner.update(t, e), this;
        }),
        (o.prototype.digest = function (t) {
          return this.outer.update(this.inner.digest()), this.outer.digest(t);
        });
    },
    6784: (t, e, r) => {
      "use strict";
      var n = r(7426),
        i = r(6166),
        o = n.rotl32,
        s = n.sum32,
        a = n.sum32_3,
        l = n.sum32_4,
        u = i.BlockHash;
      function f() {
        if (!(this instanceof f)) return new f();
        u.call(this),
          (this.h = [
            0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0,
          ]),
          (this.endian = "little");
      }
      function h(t, e, r, n) {
        return t <= 15
          ? e ^ r ^ n
          : t <= 31
          ? (e & r) | (~e & n)
          : t <= 47
          ? (e | ~r) ^ n
          : t <= 63
          ? (e & n) | (r & ~n)
          : e ^ (r | ~n);
      }
      n.inherits(f, u),
        (e.ripemd160 = f),
        (f.blockSize = 512),
        (f.outSize = 160),
        (f.hmacStrength = 192),
        (f.padLength = 64),
        (f.prototype._update = function (t, e) {
          for (
            var r = this.h[0],
              n = this.h[1],
              i = this.h[2],
              u = this.h[3],
              f = this.h[4],
              m = r,
              y = n,
              v = i,
              b = u,
              w = f,
              A = 0;
            A < 80;
            A++
          ) {
            var E,
              x,
              _ = s(
                o(
                  l(
                    r,
                    h(A, n, i, u),
                    t[c[A] + e],
                    (E = A) <= 15
                      ? 0
                      : E <= 31
                      ? 0x5a827999
                      : E <= 47
                      ? 0x6ed9eba1
                      : E <= 63
                      ? 0x8f1bbcdc
                      : 0xa953fd4e
                  ),
                  p[A]
                ),
                f
              );
            (r = f),
              (f = u),
              (u = o(i, 10)),
              (i = n),
              (n = _),
              (_ = s(
                o(
                  l(
                    m,
                    h(79 - A, y, v, b),
                    t[d[A] + e],
                    (x = A) <= 15
                      ? 0x50a28be6
                      : x <= 31
                      ? 0x5c4dd124
                      : x <= 47
                      ? 0x6d703ef3
                      : x <= 63
                      ? 0x7a6d76e9
                      : 0
                  ),
                  g[A]
                ),
                w
              )),
              (m = w),
              (w = b),
              (b = o(v, 10)),
              (v = y),
              (y = _);
          }
          (_ = a(this.h[1], i, b)),
            (this.h[1] = a(this.h[2], u, w)),
            (this.h[2] = a(this.h[3], f, m)),
            (this.h[3] = a(this.h[4], r, y)),
            (this.h[4] = a(this.h[0], n, v)),
            (this.h[0] = _);
        }),
        (f.prototype._digest = function (t) {
          return "hex" === t
            ? n.toHex32(this.h, "little")
            : n.split32(this.h, "little");
        });
      var c = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10,
          6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7,
          0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5,
          6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
        ],
        d = [
          5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0,
          13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8,
          12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10,
          14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
        ],
        p = [
          11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13,
          11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13,
          15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5,
          6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5,
          6,
        ],
        g = [
          8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7,
          12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14,
          12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9,
          12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
        ];
    },
    6229: (t, e, r) => {
      "use strict";
      (e.sha1 = r(3917)),
        (e.sha224 = r(7714)),
        (e.sha256 = r(2287)),
        (e.sha384 = r(1911)),
        (e.sha512 = r(7766));
    },
    3917: (t, e, r) => {
      "use strict";
      var n = r(7426),
        i = r(6166),
        o = r(6225),
        s = n.rotl32,
        a = n.sum32,
        l = n.sum32_5,
        u = o.ft_1,
        f = i.BlockHash,
        h = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
      function c() {
        if (!(this instanceof c)) return new c();
        f.call(this),
          (this.h = [
            0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0,
          ]),
          (this.W = Array(80));
      }
      n.inherits(c, f),
        (t.exports = c),
        (c.blockSize = 512),
        (c.outSize = 160),
        (c.hmacStrength = 80),
        (c.padLength = 64),
        (c.prototype._update = function (t, e) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
          for (; n < r.length; n++)
            r[n] = s(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
          var i = this.h[0],
            o = this.h[1],
            f = this.h[2],
            c = this.h[3],
            d = this.h[4];
          for (n = 0; n < r.length; n++) {
            var p = ~~(n / 20),
              g = l(s(i, 5), u(p, o, f, c), d, r[n], h[p]);
            (d = c), (c = f), (f = s(o, 30)), (o = i), (i = g);
          }
          (this.h[0] = a(this.h[0], i)),
            (this.h[1] = a(this.h[1], o)),
            (this.h[2] = a(this.h[2], f)),
            (this.h[3] = a(this.h[3], c)),
            (this.h[4] = a(this.h[4], d));
        }),
        (c.prototype._digest = function (t) {
          return "hex" === t
            ? n.toHex32(this.h, "big")
            : n.split32(this.h, "big");
        });
    },
    7714: (t, e, r) => {
      "use strict";
      var n = r(7426),
        i = r(2287);
      function o() {
        if (!(this instanceof o)) return new o();
        i.call(this),
          (this.h = [
            0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31,
            0x68581511, 0x64f98fa7, 0xbefa4fa4,
          ]);
      }
      n.inherits(o, i),
        (t.exports = o),
        (o.blockSize = 512),
        (o.outSize = 224),
        (o.hmacStrength = 192),
        (o.padLength = 64),
        (o.prototype._digest = function (t) {
          return "hex" === t
            ? n.toHex32(this.h.slice(0, 7), "big")
            : n.split32(this.h.slice(0, 7), "big");
        });
    },
    2287: (t, e, r) => {
      "use strict";
      var n = r(7426),
        i = r(6166),
        o = r(6225),
        s = r(3349),
        a = n.sum32,
        l = n.sum32_4,
        u = n.sum32_5,
        f = o.ch32,
        h = o.maj32,
        c = o.s0_256,
        d = o.s1_256,
        p = o.g0_256,
        g = o.g1_256,
        m = i.BlockHash,
        y = [
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
          0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
          0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
          0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d,
          0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967,
          0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
          0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
          0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
          0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee,
          0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb,
          0xbef9a3f7, 0xc67178f2,
        ];
      function v() {
        if (!(this instanceof v)) return new v();
        m.call(this),
          (this.h = [
            0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
            0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
          ]),
          (this.k = y),
          (this.W = Array(64));
      }
      n.inherits(v, m),
        (t.exports = v),
        (v.blockSize = 512),
        (v.outSize = 256),
        (v.hmacStrength = 192),
        (v.padLength = 64),
        (v.prototype._update = function (t, e) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
          for (; n < r.length; n++)
            r[n] = l(g(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
          var i = this.h[0],
            o = this.h[1],
            m = this.h[2],
            y = this.h[3],
            v = this.h[4],
            b = this.h[5],
            w = this.h[6],
            A = this.h[7];
          for (s(this.k.length === r.length), n = 0; n < r.length; n++) {
            var E = u(A, d(v), f(v, b, w), this.k[n], r[n]),
              x = a(c(i), h(i, o, m));
            (A = w),
              (w = b),
              (b = v),
              (v = a(y, E)),
              (y = m),
              (m = o),
              (o = i),
              (i = a(E, x));
          }
          (this.h[0] = a(this.h[0], i)),
            (this.h[1] = a(this.h[1], o)),
            (this.h[2] = a(this.h[2], m)),
            (this.h[3] = a(this.h[3], y)),
            (this.h[4] = a(this.h[4], v)),
            (this.h[5] = a(this.h[5], b)),
            (this.h[6] = a(this.h[6], w)),
            (this.h[7] = a(this.h[7], A));
        }),
        (v.prototype._digest = function (t) {
          return "hex" === t
            ? n.toHex32(this.h, "big")
            : n.split32(this.h, "big");
        });
    },
    1911: (t, e, r) => {
      "use strict";
      var n = r(7426),
        i = r(7766);
      function o() {
        if (!(this instanceof o)) return new o();
        i.call(this),
          (this.h = [
            0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a,
            0x3070dd17, 0x152fecd8, 0xf70e5939, 0x67332667, 0xffc00b31,
            0x8eb44a87, 0x68581511, 0xdb0c2e0d, 0x64f98fa7, 0x47b5481d,
            0xbefa4fa4,
          ]);
      }
      n.inherits(o, i),
        (t.exports = o),
        (o.blockSize = 1024),
        (o.outSize = 384),
        (o.hmacStrength = 192),
        (o.padLength = 128),
        (o.prototype._digest = function (t) {
          return "hex" === t
            ? n.toHex32(this.h.slice(0, 12), "big")
            : n.split32(this.h.slice(0, 12), "big");
        });
    },
    7766: (t, e, r) => {
      "use strict";
      var n = r(7426),
        i = r(6166),
        o = r(3349),
        s = n.rotr64_hi,
        a = n.rotr64_lo,
        l = n.shr64_hi,
        u = n.shr64_lo,
        f = n.sum64,
        h = n.sum64_hi,
        c = n.sum64_lo,
        d = n.sum64_4_hi,
        p = n.sum64_4_lo,
        g = n.sum64_5_hi,
        m = n.sum64_5_lo,
        y = i.BlockHash,
        v = [
          0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf,
          0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538,
          0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5,
          0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
          0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74,
          0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235,
          0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786,
          0x384f25e3, 0xfc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f,
          0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4,
          0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d,
          0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
          0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x6ca6351, 0xe003826f,
          0x14292967, 0xa0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
          0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354,
          0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6,
          0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b,
          0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x654be30, 0xd192e819,
          0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a,
          0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08,
          0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
          0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f,
          0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc,
          0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208,
          0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
          0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece,
          0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e,
          0xf57d4f7f, 0xee6ed178, 0x6f067aa, 0x72176fba, 0xa637dc5, 0xa2c898a6,
          0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5,
          0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc,
          0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c,
          0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817,
        ];
      function b() {
        if (!(this instanceof b)) return new b();
        y.call(this),
          (this.h = [
            0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372,
            0xfe94f82b, 0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1,
            0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19,
            0x137e2179,
          ]),
          (this.k = v),
          (this.W = Array(160));
      }
      n.inherits(b, y),
        (t.exports = b),
        (b.blockSize = 1024),
        (b.outSize = 512),
        (b.hmacStrength = 192),
        (b.padLength = 128),
        (b.prototype._prepareBlock = function (t, e) {
          for (var r = this.W, n = 0; n < 32; n++) r[n] = t[e + n];
          for (; n < r.length; n += 2) {
            var i = (function (t, e) {
                var r = s(t, e, 19) ^ s(e, t, 29) ^ l(t, e, 6);
                return r < 0 && (r += 0x100000000), r;
              })(r[n - 4], r[n - 3]),
              o = (function (t, e) {
                var r = a(t, e, 19) ^ a(e, t, 29) ^ u(t, e, 6);
                return r < 0 && (r += 0x100000000), r;
              })(r[n - 4], r[n - 3]),
              f = r[n - 14],
              h = r[n - 13],
              c = (function (t, e) {
                var r = s(t, e, 1) ^ s(t, e, 8) ^ l(t, e, 7);
                return r < 0 && (r += 0x100000000), r;
              })(r[n - 30], r[n - 29]),
              g = (function (t, e) {
                var r = a(t, e, 1) ^ a(t, e, 8) ^ u(t, e, 7);
                return r < 0 && (r += 0x100000000), r;
              })(r[n - 30], r[n - 29]),
              m = r[n - 32],
              y = r[n - 31];
            (r[n] = d(i, o, f, h, c, g, m, y)),
              (r[n + 1] = p(i, o, f, h, c, g, m, y));
          }
        }),
        (b.prototype._update = function (t, e) {
          this._prepareBlock(t, e);
          var r = this.W,
            n = this.h[0],
            i = this.h[1],
            l = this.h[2],
            u = this.h[3],
            d = this.h[4],
            p = this.h[5],
            y = this.h[6],
            v = this.h[7],
            b = this.h[8],
            w = this.h[9],
            A = this.h[10],
            E = this.h[11],
            x = this.h[12],
            _ = this.h[13],
            k = this.h[14],
            N = this.h[15];
          o(this.k.length === r.length);
          for (var S = 0; S < r.length; S += 2) {
            var M = k,
              I = N,
              R = (function (t, e) {
                var r = s(t, e, 14) ^ s(t, e, 18) ^ s(e, t, 9);
                return r < 0 && (r += 0x100000000), r;
              })(b, w),
              T = (function (t, e) {
                var r = a(t, e, 14) ^ a(t, e, 18) ^ a(e, t, 9);
                return r < 0 && (r += 0x100000000), r;
              })(b, w),
              P = (function (t, e, r, n, i) {
                var o = (t & r) ^ (~t & i);
                return o < 0 && (o += 0x100000000), o;
              })(b, 0, A, 0, x, _),
              O = (function (t, e, r, n, i, o) {
                var s = (e & n) ^ (~e & o);
                return s < 0 && (s += 0x100000000), s;
              })(0, w, 0, E, 0, _),
              B = this.k[S],
              C = this.k[S + 1],
              L = r[S],
              U = r[S + 1],
              F = g(M, I, R, T, P, O, B, C, L, U),
              D = m(M, I, R, T, P, O, B, C, L, U);
            M = (function (t, e) {
              var r = s(t, e, 28) ^ s(e, t, 2) ^ s(e, t, 7);
              return r < 0 && (r += 0x100000000), r;
            })(n, i);
            var j = h(
                M,
                (I = (function (t, e) {
                  var r = a(t, e, 28) ^ a(e, t, 2) ^ a(e, t, 7);
                  return r < 0 && (r += 0x100000000), r;
                })(n, i)),
                (R = (function (t, e, r, n, i) {
                  var o = (t & r) ^ (t & i) ^ (r & i);
                  return o < 0 && (o += 0x100000000), o;
                })(n, 0, l, 0, d, p)),
                (T = (function (t, e, r, n, i, o) {
                  var s = (e & n) ^ (e & o) ^ (n & o);
                  return s < 0 && (s += 0x100000000), s;
                })(0, i, 0, u, 0, p))
              ),
              q = c(M, I, R, T);
            (k = x),
              (N = _),
              (x = A),
              (_ = E),
              (A = b),
              (E = w),
              (b = h(y, v, F, D)),
              (w = c(v, v, F, D)),
              (y = d),
              (v = p),
              (d = l),
              (p = u),
              (l = n),
              (u = i),
              (n = h(F, D, j, q)),
              (i = c(F, D, j, q));
          }
          f(this.h, 0, n, i),
            f(this.h, 2, l, u),
            f(this.h, 4, d, p),
            f(this.h, 6, y, v),
            f(this.h, 8, b, w),
            f(this.h, 10, A, E),
            f(this.h, 12, x, _),
            f(this.h, 14, k, N);
        }),
        (b.prototype._digest = function (t) {
          return "hex" === t
            ? n.toHex32(this.h, "big")
            : n.split32(this.h, "big");
        });
    },
    6225: (t, e, r) => {
      "use strict";
      var n = r(7426).rotr32;
      function i(t, e, r) {
        return (t & e) ^ (t & r) ^ (e & r);
      }
      (e.ft_1 = function (t, e, r, n) {
        return 0 === t
          ? (e & r) ^ (~e & n)
          : 1 === t || 3 === t
          ? e ^ r ^ n
          : 2 === t
          ? i(e, r, n)
          : void 0;
      }),
        (e.ch32 = function (t, e, r) {
          return (t & e) ^ (~t & r);
        }),
        (e.maj32 = i),
        (e.p32 = function (t, e, r) {
          return t ^ e ^ r;
        }),
        (e.s0_256 = function (t) {
          return n(t, 2) ^ n(t, 13) ^ n(t, 22);
        }),
        (e.s1_256 = function (t) {
          return n(t, 6) ^ n(t, 11) ^ n(t, 25);
        }),
        (e.g0_256 = function (t) {
          return n(t, 7) ^ n(t, 18) ^ (t >>> 3);
        }),
        (e.g1_256 = function (t) {
          return n(t, 17) ^ n(t, 19) ^ (t >>> 10);
        });
    },
    7426: (t, e, r) => {
      "use strict";
      var n = r(3349),
        i = r(6698);
      function o(t) {
        return (
          ((t >>> 24) |
            ((t >>> 8) & 65280) |
            ((t << 8) & 0xff0000) |
            ((255 & t) << 24)) >>>
          0
        );
      }
      function s(t) {
        return 1 === t.length ? "0" + t : t;
      }
      function a(t) {
        if (7 === t.length) return "0" + t;
        if (6 === t.length) return "00" + t;
        if (5 === t.length) return "000" + t;
        if (4 === t.length) return "0000" + t;
        if (3 === t.length) return "00000" + t;
        if (2 === t.length) return "000000" + t;
        if (1 === t.length) return "0000000" + t;
        else return t;
      }
      (e.inherits = i),
        (e.toArray = function (t, e) {
          if (Array.isArray(t)) return t.slice();
          if (!t) return [];
          var r = [];
          if ("string" == typeof t) {
            if (e) {
              if ("hex" === e)
                for (
                  (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 &&
                    (t = "0" + t),
                    i = 0;
                  i < t.length;
                  i += 2
                )
                  r.push(parseInt(t[i] + t[i + 1], 16));
            } else
              for (var n = 0, i = 0; i < t.length; i++) {
                var o,
                  s,
                  a = t.charCodeAt(i);
                a < 128
                  ? (r[n++] = a)
                  : (a < 2048
                      ? (r[n++] = (a >> 6) | 192)
                      : (((o = t),
                        (s = i),
                        (64512 & o.charCodeAt(s)) != 55296 ||
                        s < 0 ||
                        s + 1 >= o.length
                          ? 1
                          : (64512 & o.charCodeAt(s + 1)) != 56320)
                          ? (r[n++] = (a >> 12) | 224)
                          : ((a =
                              65536 +
                              ((1023 & a) << 10) +
                              (1023 & t.charCodeAt(++i))),
                            (r[n++] = (a >> 18) | 240),
                            (r[n++] = ((a >> 12) & 63) | 128)),
                        (r[n++] = ((a >> 6) & 63) | 128)),
                    (r[n++] = (63 & a) | 128));
              }
          } else for (i = 0; i < t.length; i++) r[i] = 0 | t[i];
          return r;
        }),
        (e.toHex = function (t) {
          for (var e = "", r = 0; r < t.length; r++) e += s(t[r].toString(16));
          return e;
        }),
        (e.htonl = o),
        (e.toHex32 = function (t, e) {
          for (var r = "", n = 0; n < t.length; n++) {
            var i = t[n];
            "little" === e && (i = o(i)), (r += a(i.toString(16)));
          }
          return r;
        }),
        (e.zero2 = s),
        (e.zero8 = a),
        (e.join32 = function (t, e, r, i) {
          var o,
            s = r - e;
          n(s % 4 == 0);
          for (var a = Array(s / 4), l = 0, u = e; l < a.length; l++, u += 4)
            (o =
              "big" === i
                ? (t[u] << 24) | (t[u + 1] << 16) | (t[u + 2] << 8) | t[u + 3]
                : (t[u + 3] << 24) | (t[u + 2] << 16) | (t[u + 1] << 8) | t[u]),
              (a[l] = o >>> 0);
          return a;
        }),
        (e.split32 = function (t, e) {
          for (
            var r = Array(4 * t.length), n = 0, i = 0;
            n < t.length;
            n++, i += 4
          ) {
            var o = t[n];
            "big" === e
              ? ((r[i] = o >>> 24),
                (r[i + 1] = (o >>> 16) & 255),
                (r[i + 2] = (o >>> 8) & 255),
                (r[i + 3] = 255 & o))
              : ((r[i + 3] = o >>> 24),
                (r[i + 2] = (o >>> 16) & 255),
                (r[i + 1] = (o >>> 8) & 255),
                (r[i] = 255 & o));
          }
          return r;
        }),
        (e.rotr32 = function (t, e) {
          return (t >>> e) | (t << (32 - e));
        }),
        (e.rotl32 = function (t, e) {
          return (t << e) | (t >>> (32 - e));
        }),
        (e.sum32 = function (t, e) {
          return (t + e) >>> 0;
        }),
        (e.sum32_3 = function (t, e, r) {
          return (t + e + r) >>> 0;
        }),
        (e.sum32_4 = function (t, e, r, n) {
          return (t + e + r + n) >>> 0;
        }),
        (e.sum32_5 = function (t, e, r, n, i) {
          return (t + e + r + n + i) >>> 0;
        }),
        (e.sum64 = function (t, e, r, n) {
          var i = t[e],
            o = (n + t[e + 1]) >>> 0;
          (t[e] = ((o < n ? 1 : 0) + r + i) >>> 0), (t[e + 1] = o);
        }),
        (e.sum64_hi = function (t, e, r, n) {
          return (((e + n) >>> 0 < e ? 1 : 0) + t + r) >>> 0;
        }),
        (e.sum64_lo = function (t, e, r, n) {
          return (e + n) >>> 0;
        }),
        (e.sum64_4_hi = function (t, e, r, n, i, o, s, a) {
          var l,
            u = e;
          return (
            (t +
              r +
              i +
              s +
              (0 +
                ((u = (u + n) >>> 0) < e ? 1 : 0) +
                ((u = (u + o) >>> 0) < o ? 1 : 0) +
                ((u = (u + a) >>> 0) < a ? 1 : 0))) >>>
            0
          );
        }),
        (e.sum64_4_lo = function (t, e, r, n, i, o, s, a) {
          return (e + n + o + a) >>> 0;
        }),
        (e.sum64_5_hi = function (t, e, r, n, i, o, s, a, l, u) {
          var f,
            h = e;
          return (
            (t +
              r +
              i +
              s +
              l +
              (0 +
                ((h = (h + n) >>> 0) < e ? 1 : 0) +
                ((h = (h + o) >>> 0) < o ? 1 : 0) +
                ((h = (h + a) >>> 0) < a ? 1 : 0) +
                ((h = (h + u) >>> 0) < u ? 1 : 0))) >>>
            0
          );
        }),
        (e.sum64_5_lo = function (t, e, r, n, i, o, s, a, l, u) {
          return (e + n + o + a + u) >>> 0;
        }),
        (e.rotr64_hi = function (t, e, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0;
        }),
        (e.rotr64_lo = function (t, e, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0;
        }),
        (e.shr64_hi = function (t, e, r) {
          return t >>> r;
        }),
        (e.shr64_lo = function (t, e, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0;
        });
    },
    251: (t, e) => {
      (e.read = function (t, e, r, n, i) {
        var o,
          s,
          a = 8 * i - n - 1,
          l = (1 << a) - 1,
          u = l >> 1,
          f = -7,
          h = r ? i - 1 : 0,
          c = r ? -1 : 1,
          d = t[e + h];
        for (
          h += c, o = d & ((1 << -f) - 1), d >>= -f, f += a;
          f > 0;
          o = 256 * o + t[e + h], h += c, f -= 8
        );
        for (
          s = o & ((1 << -f) - 1), o >>= -f, f += n;
          f > 0;
          s = 256 * s + t[e + h], h += c, f -= 8
        );
        if (0 === o) o = 1 - u;
        else {
          if (o === l) return s ? NaN : (1 / 0) * (d ? -1 : 1);
          (s += Math.pow(2, n)), (o -= u);
        }
        return (d ? -1 : 1) * s * Math.pow(2, o - n);
      }),
        (e.write = function (t, e, r, n, i, o) {
          var s,
            a,
            l,
            u = 8 * o - i - 1,
            f = (1 << u) - 1,
            h = f >> 1,
            c = 23 === i ? 5960464477539062e-23 : 0,
            d = n ? 0 : o - 1,
            p = n ? 1 : -1,
            g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            isNaN((e = Math.abs(e))) || e === 1 / 0
              ? ((a = isNaN(e) ? 1 : 0), (s = f))
              : ((s = Math.floor(Math.log(e) / Math.LN2)),
                e * (l = Math.pow(2, -s)) < 1 && (s--, (l *= 2)),
                s + h >= 1 ? (e += c / l) : (e += c * Math.pow(2, 1 - h)),
                e * l >= 2 && (s++, (l /= 2)),
                s + h >= f
                  ? ((a = 0), (s = f))
                  : s + h >= 1
                  ? ((a = (e * l - 1) * Math.pow(2, i)), (s += h))
                  : ((a = e * Math.pow(2, h - 1) * Math.pow(2, i)), (s = 0)));
            i >= 8;
            t[r + d] = 255 & a, d += p, a /= 256, i -= 8
          );
          for (
            s = (s << i) | a, u += i;
            u > 0;
            t[r + d] = 255 & s, d += p, s /= 256, u -= 8
          );
          t[r + d - p] |= 128 * g;
        });
    },
    6698: (t) => {
      "function" == typeof Object.create
        ? (t.exports = function (t, e) {
            e &&
              ((t.super_ = e),
              (t.prototype = Object.create(e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (t.exports = function (t, e) {
            if (e) {
              t.super_ = e;
              var r = function () {};
              (r.prototype = e.prototype),
                (t.prototype = new r()),
                (t.prototype.constructor = t);
            }
          });
    },
    1176: (t, e, r) => {
      var n,
        i = r(7836);
      !(function () {
        "use strict";
        var o = "input is invalid type",
          s = "object" == typeof window,
          a = s ? window : {};
        a.JS_SHA3_NO_WINDOW && (s = !1);
        var l = !s && "object" == typeof self;
        !a.JS_SHA3_NO_NODE_JS &&
        "object" == typeof i &&
        i.versions &&
        i.versions.node
          ? (a = r.g)
          : l && (a = self);
        var u = !a.JS_SHA3_NO_COMMON_JS && t.exports,
          f = r.amdO,
          h = !a.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
          c = "0123456789abcdef".split(""),
          d = [4, 1024, 262144, 0x4000000],
          p = [0, 8, 16, 24],
          g = [
            1, 0, 32898, 0, 32906, 0x80000000, 0x80008000, 0x80000000, 32907, 0,
            0x80000001, 0, 0x80008081, 0x80000000, 32777, 0x80000000, 138, 0,
            136, 0, 0x80008009, 0, 0x8000000a, 0, 0x8000808b, 0, 139,
            0x80000000, 32905, 0x80000000, 32771, 0x80000000, 32770, 0x80000000,
            128, 0x80000000, 32778, 0, 0x8000000a, 0x80000000, 0x80008081,
            0x80000000, 32896, 0x80000000, 0x80000001, 0, 0x80008008,
            0x80000000,
          ],
          m = [224, 256, 384, 512],
          y = [128, 256],
          v = ["hex", "buffer", "arrayBuffer", "array", "digest"],
          b = { 128: 168, 256: 136 };
        (a.JS_SHA3_NO_NODE_JS || !Array.isArray) &&
          (Array.isArray = function (t) {
            return "[object Array]" === Object.prototype.toString.call(t);
          }),
          h &&
            (a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
            (ArrayBuffer.isView = function (t) {
              return (
                "object" == typeof t &&
                t.buffer &&
                t.buffer.constructor === ArrayBuffer
              );
            });
        for (
          var w = function (t, e, r) {
              return function (n) {
                return new C(t, e, t).update(n)[r]();
              };
            },
            A = function (t, e, r) {
              return function (n, i) {
                return new C(t, e, i).update(n)[r]();
              };
            },
            E = function (t, e, r) {
              return function (e, n, i, o) {
                return S["cshake" + t].update(e, n, i, o)[r]();
              };
            },
            x = function (t, e, r) {
              return function (e, n, i, o) {
                return S["kmac" + t].update(e, n, i, o)[r]();
              };
            },
            _ = function (t, e, r, n) {
              for (var i = 0; i < v.length; ++i) {
                var o = v[i];
                t[o] = e(r, n, o);
              }
              return t;
            },
            k = function (t, e) {
              var r = w(t, e, "hex");
              return (
                (r.create = function () {
                  return new C(t, e, t);
                }),
                (r.update = function (t) {
                  return r.create().update(t);
                }),
                _(r, w, t, e)
              );
            },
            N = [
              {
                name: "keccak",
                padding: [1, 256, 65536, 0x1000000],
                bits: m,
                createMethod: k,
              },
              {
                name: "sha3",
                padding: [6, 1536, 393216, 0x6000000],
                bits: m,
                createMethod: k,
              },
              {
                name: "shake",
                padding: [31, 7936, 2031616, 0x1f000000],
                bits: y,
                createMethod: function (t, e) {
                  var r = A(t, e, "hex");
                  return (
                    (r.create = function (r) {
                      return new C(t, e, r);
                    }),
                    (r.update = function (t, e) {
                      return r.create(e).update(t);
                    }),
                    _(r, A, t, e)
                  );
                },
              },
              {
                name: "cshake",
                padding: d,
                bits: y,
                createMethod: function (t, e) {
                  var r = b[t],
                    n = E(t, e, "hex");
                  return (
                    (n.create = function (n, i, o) {
                      return i || o
                        ? new C(t, e, n).bytepad([i, o], r)
                        : S["shake" + t].create(n);
                    }),
                    (n.update = function (t, e, r, i) {
                      return n.create(e, r, i).update(t);
                    }),
                    _(n, E, t, e)
                  );
                },
              },
              {
                name: "kmac",
                padding: d,
                bits: y,
                createMethod: function (t, e) {
                  var r = b[t],
                    n = x(t, e, "hex");
                  return (
                    (n.create = function (n, i, o) {
                      return new L(t, e, i)
                        .bytepad(["KMAC", o], r)
                        .bytepad([n], r);
                    }),
                    (n.update = function (t, e, r, i) {
                      return n.create(t, r, i).update(e);
                    }),
                    _(n, x, t, e)
                  );
                },
              },
            ],
            S = {},
            M = [],
            I = 0;
          I < N.length;
          ++I
        )
          for (var R = N[I], T = R.bits, P = 0; P < T.length; ++P) {
            var O = R.name + "_" + T[P];
            if (
              (M.push(O),
              (S[O] = R.createMethod(T[P], R.padding)),
              "sha3" !== R.name)
            ) {
              var B = R.name + T[P];
              M.push(B), (S[B] = S[O]);
            }
          }
        function C(t, e, r) {
          (this.blocks = []),
            (this.s = []),
            (this.padding = e),
            (this.outputBits = r),
            (this.reset = !0),
            (this.finalized = !1),
            (this.block = 0),
            (this.start = 0),
            (this.blockCount = (1600 - (t << 1)) >> 5),
            (this.byteCount = this.blockCount << 2),
            (this.outputBlocks = r >> 5),
            (this.extraBytes = (31 & r) >> 3);
          for (var n = 0; n < 50; ++n) this.s[n] = 0;
        }
        function L(t, e, r) {
          C.call(this, t, e, r);
        }
        (C.prototype.update = function (t) {
          if (this.finalized) throw Error("finalize already called");
          var e,
            r = typeof t;
          if ("string" !== r) {
            if ("object" === r) {
              if (null === t) throw Error(o);
              if (h && t.constructor === ArrayBuffer) t = new Uint8Array(t);
              else if (!Array.isArray(t) && (!h || !ArrayBuffer.isView(t)))
                throw Error(o);
            } else throw Error(o);
            e = !0;
          }
          for (
            var n,
              i,
              s = this.blocks,
              a = this.byteCount,
              l = t.length,
              u = this.blockCount,
              f = 0,
              c = this.s;
            f < l;

          ) {
            if (this.reset)
              for (n = 1, this.reset = !1, s[0] = this.block; n < u + 1; ++n)
                s[n] = 0;
            if (e)
              for (n = this.start; f < l && n < a; ++f)
                s[n >> 2] |= t[f] << p[3 & n++];
            else
              for (n = this.start; f < l && n < a; ++f)
                (i = t.charCodeAt(f)) < 128
                  ? (s[n >> 2] |= i << p[3 & n++])
                  : (i < 2048
                      ? (s[n >> 2] |= (192 | (i >> 6)) << p[3 & n++])
                      : (i < 55296 || i >= 57344
                          ? (s[n >> 2] |= (224 | (i >> 12)) << p[3 & n++])
                          : ((i =
                              65536 +
                              (((1023 & i) << 10) |
                                (1023 & t.charCodeAt(++f)))),
                            (s[n >> 2] |= (240 | (i >> 18)) << p[3 & n++]),
                            (s[n >> 2] |=
                              (128 | ((i >> 12) & 63)) << p[3 & n++])),
                        (s[n >> 2] |= (128 | ((i >> 6) & 63)) << p[3 & n++])),
                    (s[n >> 2] |= (128 | (63 & i)) << p[3 & n++]));
            if (((this.lastByteIndex = n), n >= a)) {
              for (this.start = n - a, this.block = s[u], n = 0; n < u; ++n)
                c[n] ^= s[n];
              U(c), (this.reset = !0);
            } else this.start = n;
          }
          return this;
        }),
          (C.prototype.encode = function (t, e) {
            var r = 255 & t,
              n = 1,
              i = [r];
            for (t >>= 8, r = 255 & t; r > 0; )
              i.unshift(r), (t >>= 8), (r = 255 & t), ++n;
            return e ? i.push(n) : i.unshift(n), this.update(i), i.length;
          }),
          (C.prototype.encodeString = function (t) {
            var e,
              r = typeof t;
            if ("string" !== r) {
              if ("object" === r) {
                if (null === t) throw Error(o);
                if (h && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                else if (!Array.isArray(t) && (!h || !ArrayBuffer.isView(t)))
                  throw Error(o);
              } else throw Error(o);
              e = !0;
            }
            var n = 0,
              i = t.length;
            if (e) n = i;
            else
              for (var s = 0; s < t.length; ++s) {
                var a = t.charCodeAt(s);
                a < 128
                  ? (n += 1)
                  : a < 2048
                  ? (n += 2)
                  : a < 55296 || a >= 57344
                  ? (n += 3)
                  : ((a =
                      65536 +
                      (((1023 & a) << 10) | (1023 & t.charCodeAt(++s)))),
                    (n += 4));
              }
            return (n += this.encode(8 * n)), this.update(t), n;
          }),
          (C.prototype.bytepad = function (t, e) {
            for (var r = this.encode(e), n = 0; n < t.length; ++n)
              r += this.encodeString(t[n]);
            var i = e - (r % e),
              o = [];
            return (o.length = i), this.update(o), this;
          }),
          (C.prototype.finalize = function () {
            if (!this.finalized) {
              this.finalized = !0;
              var t = this.blocks,
                e = this.lastByteIndex,
                r = this.blockCount,
                n = this.s;
              if (
                ((t[e >> 2] |= this.padding[3 & e]),
                this.lastByteIndex === this.byteCount)
              )
                for (e = 1, t[0] = t[r]; e < r + 1; ++e) t[e] = 0;
              for (t[r - 1] |= 0x80000000, e = 0; e < r; ++e) n[e] ^= t[e];
              U(n);
            }
          }),
          (C.prototype.toString = C.prototype.hex =
            function () {
              this.finalize();
              for (
                var t,
                  e = this.blockCount,
                  r = this.s,
                  n = this.outputBlocks,
                  i = this.extraBytes,
                  o = 0,
                  s = 0,
                  a = "";
                s < n;

              ) {
                for (o = 0; o < e && s < n; ++o, ++s)
                  a +=
                    c[((t = r[o]) >> 4) & 15] +
                    c[15 & t] +
                    c[(t >> 12) & 15] +
                    c[(t >> 8) & 15] +
                    c[(t >> 20) & 15] +
                    c[(t >> 16) & 15] +
                    c[(t >> 28) & 15] +
                    c[(t >> 24) & 15];
                s % e == 0 && (U(r), (o = 0));
              }
              return (
                i &&
                  ((a += c[((t = r[o]) >> 4) & 15] + c[15 & t]),
                  i > 1 && (a += c[(t >> 12) & 15] + c[(t >> 8) & 15]),
                  i > 2 && (a += c[(t >> 20) & 15] + c[(t >> 16) & 15])),
                a
              );
            }),
          (C.prototype.arrayBuffer = function () {
            this.finalize();
            for (
              var t,
                e = this.blockCount,
                r = this.s,
                n = this.outputBlocks,
                i = this.extraBytes,
                o = 0,
                s = 0,
                a = this.outputBits >> 3,
                l = new Uint32Array(
                  (t = new ArrayBuffer(i ? (n + 1) << 2 : a))
                );
              s < n;

            ) {
              for (o = 0; o < e && s < n; ++o, ++s) l[s] = r[o];
              s % e == 0 && U(r);
            }
            return i && ((l[o] = r[o]), (t = t.slice(0, a))), t;
          }),
          (C.prototype.buffer = C.prototype.arrayBuffer),
          (C.prototype.digest = C.prototype.array =
            function () {
              this.finalize();
              for (
                var t,
                  e,
                  r = this.blockCount,
                  n = this.s,
                  i = this.outputBlocks,
                  o = this.extraBytes,
                  s = 0,
                  a = 0,
                  l = [];
                a < i;

              ) {
                for (s = 0; s < r && a < i; ++s, ++a)
                  (t = a << 2),
                    (e = n[s]),
                    (l[t] = 255 & e),
                    (l[t + 1] = (e >> 8) & 255),
                    (l[t + 2] = (e >> 16) & 255),
                    (l[t + 3] = (e >> 24) & 255);
                a % r == 0 && U(n);
              }
              return (
                o &&
                  ((t = a << 2),
                  (e = n[s]),
                  (l[t] = 255 & e),
                  o > 1 && (l[t + 1] = (e >> 8) & 255),
                  o > 2 && (l[t + 2] = (e >> 16) & 255)),
                l
              );
            }),
          (L.prototype = new C()),
          (L.prototype.finalize = function () {
            return (
              this.encode(this.outputBits, !0), C.prototype.finalize.call(this)
            );
          });
        var U = function (t) {
          var e,
            r,
            n,
            i,
            o,
            s,
            a,
            l,
            u,
            f,
            h,
            c,
            d,
            p,
            m,
            y,
            v,
            b,
            w,
            A,
            E,
            x,
            _,
            k,
            N,
            S,
            M,
            I,
            R,
            T,
            P,
            O,
            B,
            C,
            L,
            U,
            F,
            D,
            j,
            q,
            H,
            z,
            G,
            V,
            Y,
            J,
            K,
            W,
            Q,
            X,
            Z,
            $,
            tt,
            te,
            tr,
            tn,
            ti,
            to,
            ts,
            ta,
            tl,
            tu,
            tf;
          for (n = 0; n < 48; n += 2)
            (i = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40]),
              (o = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41]),
              (s = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42]),
              (a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43]),
              (l = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44]),
              (u = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45]),
              (f = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46]),
              (h = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47]),
              (c = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]),
              (d = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]),
              (e = c ^ ((s << 1) | (a >>> 31))),
              (r = d ^ ((a << 1) | (s >>> 31))),
              (t[0] ^= e),
              (t[1] ^= r),
              (t[10] ^= e),
              (t[11] ^= r),
              (t[20] ^= e),
              (t[21] ^= r),
              (t[30] ^= e),
              (t[31] ^= r),
              (t[40] ^= e),
              (t[41] ^= r),
              (e = i ^ ((l << 1) | (u >>> 31))),
              (r = o ^ ((u << 1) | (l >>> 31))),
              (t[2] ^= e),
              (t[3] ^= r),
              (t[12] ^= e),
              (t[13] ^= r),
              (t[22] ^= e),
              (t[23] ^= r),
              (t[32] ^= e),
              (t[33] ^= r),
              (t[42] ^= e),
              (t[43] ^= r),
              (e = s ^ ((f << 1) | (h >>> 31))),
              (r = a ^ ((h << 1) | (f >>> 31))),
              (t[4] ^= e),
              (t[5] ^= r),
              (t[14] ^= e),
              (t[15] ^= r),
              (t[24] ^= e),
              (t[25] ^= r),
              (t[34] ^= e),
              (t[35] ^= r),
              (t[44] ^= e),
              (t[45] ^= r),
              (e = l ^ ((c << 1) | (d >>> 31))),
              (r = u ^ ((d << 1) | (c >>> 31))),
              (t[6] ^= e),
              (t[7] ^= r),
              (t[16] ^= e),
              (t[17] ^= r),
              (t[26] ^= e),
              (t[27] ^= r),
              (t[36] ^= e),
              (t[37] ^= r),
              (t[46] ^= e),
              (t[47] ^= r),
              (e = f ^ ((i << 1) | (o >>> 31))),
              (r = h ^ ((o << 1) | (i >>> 31))),
              (t[8] ^= e),
              (t[9] ^= r),
              (t[18] ^= e),
              (t[19] ^= r),
              (t[28] ^= e),
              (t[29] ^= r),
              (t[38] ^= e),
              (t[39] ^= r),
              (t[48] ^= e),
              (t[49] ^= r),
              (p = t[0]),
              (m = t[1]),
              (J = (t[11] << 4) | (t[10] >>> 28)),
              (K = (t[10] << 4) | (t[11] >>> 28)),
              (I = (t[20] << 3) | (t[21] >>> 29)),
              (R = (t[21] << 3) | (t[20] >>> 29)),
              (ta = (t[31] << 9) | (t[30] >>> 23)),
              (tl = (t[30] << 9) | (t[31] >>> 23)),
              (z = (t[40] << 18) | (t[41] >>> 14)),
              (G = (t[41] << 18) | (t[40] >>> 14)),
              (C = (t[2] << 1) | (t[3] >>> 31)),
              (L = (t[3] << 1) | (t[2] >>> 31)),
              (y = (t[13] << 12) | (t[12] >>> 20)),
              (v = (t[12] << 12) | (t[13] >>> 20)),
              (W = (t[22] << 10) | (t[23] >>> 22)),
              (Q = (t[23] << 10) | (t[22] >>> 22)),
              (T = (t[33] << 13) | (t[32] >>> 19)),
              (P = (t[32] << 13) | (t[33] >>> 19)),
              (tu = (t[42] << 2) | (t[43] >>> 30)),
              (tf = (t[43] << 2) | (t[42] >>> 30)),
              (te = (t[5] << 30) | (t[4] >>> 2)),
              (tr = (t[4] << 30) | (t[5] >>> 2)),
              (U = (t[14] << 6) | (t[15] >>> 26)),
              (F = (t[15] << 6) | (t[14] >>> 26)),
              (b = (t[25] << 11) | (t[24] >>> 21)),
              (w = (t[24] << 11) | (t[25] >>> 21)),
              (X = (t[34] << 15) | (t[35] >>> 17)),
              (Z = (t[35] << 15) | (t[34] >>> 17)),
              (O = (t[45] << 29) | (t[44] >>> 3)),
              (B = (t[44] << 29) | (t[45] >>> 3)),
              (k = (t[6] << 28) | (t[7] >>> 4)),
              (N = (t[7] << 28) | (t[6] >>> 4)),
              (tn = (t[17] << 23) | (t[16] >>> 9)),
              (ti = (t[16] << 23) | (t[17] >>> 9)),
              (D = (t[26] << 25) | (t[27] >>> 7)),
              (j = (t[27] << 25) | (t[26] >>> 7)),
              (A = (t[36] << 21) | (t[37] >>> 11)),
              (E = (t[37] << 21) | (t[36] >>> 11)),
              ($ = (t[47] << 24) | (t[46] >>> 8)),
              (tt = (t[46] << 24) | (t[47] >>> 8)),
              (V = (t[8] << 27) | (t[9] >>> 5)),
              (Y = (t[9] << 27) | (t[8] >>> 5)),
              (S = (t[18] << 20) | (t[19] >>> 12)),
              (M = (t[19] << 20) | (t[18] >>> 12)),
              (to = (t[29] << 7) | (t[28] >>> 25)),
              (ts = (t[28] << 7) | (t[29] >>> 25)),
              (q = (t[38] << 8) | (t[39] >>> 24)),
              (H = (t[39] << 8) | (t[38] >>> 24)),
              (x = (t[48] << 14) | (t[49] >>> 18)),
              (_ = (t[49] << 14) | (t[48] >>> 18)),
              (t[0] = p ^ (~y & b)),
              (t[1] = m ^ (~v & w)),
              (t[10] = k ^ (~S & I)),
              (t[11] = N ^ (~M & R)),
              (t[20] = C ^ (~U & D)),
              (t[21] = L ^ (~F & j)),
              (t[30] = V ^ (~J & W)),
              (t[31] = Y ^ (~K & Q)),
              (t[40] = te ^ (~tn & to)),
              (t[41] = tr ^ (~ti & ts)),
              (t[2] = y ^ (~b & A)),
              (t[3] = v ^ (~w & E)),
              (t[12] = S ^ (~I & T)),
              (t[13] = M ^ (~R & P)),
              (t[22] = U ^ (~D & q)),
              (t[23] = F ^ (~j & H)),
              (t[32] = J ^ (~W & X)),
              (t[33] = K ^ (~Q & Z)),
              (t[42] = tn ^ (~to & ta)),
              (t[43] = ti ^ (~ts & tl)),
              (t[4] = b ^ (~A & x)),
              (t[5] = w ^ (~E & _)),
              (t[14] = I ^ (~T & O)),
              (t[15] = R ^ (~P & B)),
              (t[24] = D ^ (~q & z)),
              (t[25] = j ^ (~H & G)),
              (t[34] = W ^ (~X & $)),
              (t[35] = Q ^ (~Z & tt)),
              (t[44] = to ^ (~ta & tu)),
              (t[45] = ts ^ (~tl & tf)),
              (t[6] = A ^ (~x & p)),
              (t[7] = E ^ (~_ & m)),
              (t[16] = T ^ (~O & k)),
              (t[17] = P ^ (~B & N)),
              (t[26] = q ^ (~z & C)),
              (t[27] = H ^ (~G & L)),
              (t[36] = X ^ (~$ & V)),
              (t[37] = Z ^ (~tt & Y)),
              (t[46] = ta ^ (~tu & te)),
              (t[47] = tl ^ (~tf & tr)),
              (t[8] = x ^ (~p & y)),
              (t[9] = _ ^ (~m & v)),
              (t[18] = O ^ (~k & S)),
              (t[19] = B ^ (~N & M)),
              (t[28] = z ^ (~C & U)),
              (t[29] = G ^ (~L & F)),
              (t[38] = $ ^ (~V & J)),
              (t[39] = tt ^ (~Y & K)),
              (t[48] = tu ^ (~te & tn)),
              (t[49] = tf ^ (~tr & ti)),
              (t[0] ^= g[n]),
              (t[1] ^= g[n + 1]);
        };
        if (u) t.exports = S;
        else {
          for (I = 0; I < M.length; ++I) a[M[I]] = S[M[I]];
          f &&
            void 0 !==
              (n = function () {
                return S;
              }.call(e, r, e, t)) &&
            (t.exports = n);
        }
      })();
    },
    3349: (t) => {
      function e(t, e) {
        if (!t) throw Error(e || "Assertion failed");
      }
      (t.exports = e),
        (e.equal = function (t, e, r) {
          if (t != e) throw Error(r || "Assertion failed: " + t + " != " + e);
        });
    },
    8424: (t, e, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(9274);
        },
      ]);
    },
    5962: (t, e, r) => {
      "use strict";
      var n, i, o;
      r.d(e, {
        Zb: () => f,
        ol: () => a,
        C5: () => h,
        lw: () => l,
        ke: () => u,
      });
      let s = JSON.parse(
        '{"address":"4ZoGoSMbiCqaQALfB6A6cv6XRAU3EvhFSmScFxUc4o7Y","metadata":{"name":"solana_pay","version":"0.1.0","spec":"0.1.0","description":"Created with Anchor"},"instructions":[{"name":"pay","discriminator":[119,18,216,65,192,117,122,220],"accounts":[{"name":"payer","writable":true,"signer":true},{"name":"pay_mint"},{"name":"pay_account","writable":true},{"name":"receiver","writable":true,"address":"JrfSFkStsF3kbowa8v9DHADCUvhY6ar3N5jjx811NRM"},{"name":"receive_account","writable":true,"pda":{"seeds":[{"kind":"account","path":"receiver"},{"kind":"const","value":[6,221,246,225,215,101,161,147,217,203,225,70,206,235,121,172,28,180,133,237,95,91,55,145,58,140,245,133,126,255,0,169]},{"kind":"account","path":"pay_mint"}],"program":{"kind":"const","value":[140,151,37,143,78,36,137,241,187,61,16,41,20,142,13,131,11,90,19,153,218,255,16,132,4,142,123,216,219,233,248,89]}}},{"name":"associated_token_program","docs":["associated program"],"address":"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},{"name":"token_program","docs":["SPL Token Program"],"address":"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"},{"name":"system_program","docs":["solana system program"],"address":"11111111111111111111111111111111"},{"name":"rent","address":"SysvarRent111111111111111111111111111111111"}],"args":[{"name":"amount","type":"u64"}]},{"name":"withdraw","discriminator":[183,18,70,156,148,109,161,34],"accounts":[{"name":"admin","writable":true,"signer":true,"address":"JrfSFkStsF3kbowa8v9DHADCUvhY6ar3N5jjx811NRM"},{"name":"mint"},{"name":"pay_account","writable":true},{"name":"receive_account","writable":true,"pda":{"seeds":[{"kind":"account","path":"admin"},{"kind":"const","value":[6,221,246,225,215,101,161,147,217,203,225,70,206,235,121,172,28,180,133,237,95,91,55,145,58,140,245,133,126,255,0,169]},{"kind":"account","path":"mint"}],"program":{"kind":"const","value":[140,151,37,143,78,36,137,241,187,61,16,41,20,142,13,131,11,90,19,153,218,255,16,132,4,142,123,216,219,233,248,89]}}},{"name":"program","signer":true},{"name":"associated_token_program","docs":["associated program"],"address":"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},{"name":"token_program","docs":["SPL Token Program"],"address":"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"},{"name":"system_program","docs":["solana system program"],"address":"11111111111111111111111111111111"},{"name":"rent","address":"SysvarRent111111111111111111111111111111111"}],"args":[]}],"events":[{"name":"PayEvent","discriminator":[92,5,251,93,163,50,39,162]}],"errors":[{"code":6000,"name":"MinimumRechargeWrong","msg":"The minimum recharge amount is 0.01"},{"code":6001,"name":"ProgramIncorrect","msg":"The program address is incorrect"},{"code":6002,"name":"TokenNotExist","msg":"Token does not exist"}],"types":[{"name":"PayEvent","type":{"kind":"struct","fields":[{"name":"user","type":"pubkey"},{"name":"amount","type":"u64"},{"name":"coin","type":"pubkey"}]}}],"constants":[{"name":"ADMIN","type":"pubkey","value":"JrfSFkStsF3kbowa8v9DHADCUvhY6ar3N5jjx811NRM"},{"name":"TREASURY","type":"pubkey","value":"JrfSFkStsF3kbowa8v9DHADCUvhY6ar3N5jjx811NRM"},{"name":"USDC","type":"pubkey","value":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"},{"name":"USDT","type":"pubkey","value":"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"}]}'
      );
      null === (n = s.constants.find((t) => "TREASURY" === t.name)) ||
        void 0 === n ||
        n.value,
        null === (i = s.constants.find((t) => "USDT" === t.name)) ||
          void 0 === i ||
          i.value,
        null === (o = s.constants.find((t) => "USDC" === t.name)) ||
          void 0 === o ||
          o.value,
        s.address;
      let a = {
          56: {
            chainName: "Binance Smart Chain",
            rpcUrls: ["https://bsc-dataseed.binance.org"],
            nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
            blockExplorerUrls: ["https://bscscan.com"],
          },
          1: {
            chainName: "Ethereum",
            rpcUrls: ["https://mainnet.infura.io/v3/"],
            nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
            blockExplorerUrls: ["https://etherscan.io"],
          },
          0x2b6653dc: {
            chainName: "Tron Mainnet",
            rpcUrls: ["https://rpc.ankr.com/tron_jsonrpc"],
            nativeCurrency: { name: "TRX", symbol: "TRX", decimals: 6 },
            blockExplorerUrls: ["https://tronscan.org"],
          },
        },
        l =
          "You hereby confirm that you are the owner of this connected wallet. This is a safe and gasless transaction to verify your ownership. Signing this message will not give ByteNova permission to make transactions with your wallet.",
        u = {
          MetaMask:
            "https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=zh-CN&utm_source=ext_sidebar",
          Bybit:
            "https://chromewebstore.google.com/detail/bybit-wallet/pdliaogehgdbhbnmkklieghmmjkpigpa?hl=zh-CN&utm_source=ext_sidebar",
          "OKX Wallet":
            "https://chromewebstore.google.com/detail/%E6%AC%A7%E6%98%93-web3-%E9%92%B1%E5%8C%85/mcohilncbfahbmgdjkbpemcciiolgcge?hl=zh-CN&utm_source=ext_sidebar",
          Martian:
            "https://chromewebstore.google.com/detail/martian-aptos-sui-wallet/efbglgofoippbgcjepnhiblaibcnclgk?hl=zh-CN&utm_source=ext_sidebar",
          "Coinbase Wallet":
            "https://chromewebstore.google.com/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad?hl=zh-CN&utm_source=ext_sidebar",
          Rainbow:
            "https://chromewebstore.google.com/detail/rainbow/opfgelmcmbiajamepnmloijbpoleiama?hl=zh-CN&utm_source=ext_sidebar",
          Petra:
            "https://chromewebstore.google.com/detail/petra-aptos-wallet/ejjladinnckdgjemekebdpeokbikhfci?hl=zh-CN&utm_source=ext_sidebar",
          TronLink:
            "https://chromewebstore.google.com/detail/TronLink/ibnejdfjmmkpcnlpebklmnkoeoihofec?hl=zh-CN&utm_source=ext_sidebar",
          TokenPocket:
            "https://chromewebstore.google.com/detail/tokenpocket-web3-nostr-%E9%92%B1%E5%8C%85/mfgccjchihfkkindfppnaooecgfneiii?hl=zh-CN&utm_source=ext_sidebar",
          Phantom:
            "https://chromewebstore.google.com/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa?hl=zh-CN&utm_source=ext_sidebar",
          Gate: "https://chromewebstore.google.com/detail/gate-wallet/cpmkedoipcpimgecpmgpldfpohjplkpp?hl=zh-CN&utm_source=ext_sidebar",
        },
        f =
          "0xe63780c1d8f66aa2a5f30cc920af21fc82c4707225756c765bd12a2f7da61383",
        h = "0xd615eb3ea3db2f994dce7d471a02d521b8e1d22d",
        c = (t) => {
          let e = "";
          switch (t) {
            case "BNB":
            case "ETH":
              e = "0x3DE6Ba3ce9B6f057fFeA939A336a9EEBbe194da0";
              break;
            case "APT":
              e =
                "0xec68f7e0cec59927f641a6a918d0e0073d49c83fdf864cc10c6a22d56db0c7f6::topup_v1";
              break;
            case "TRX":
              e = "TWauBjbYSsAkd24TeiyEaHv3eCMYdbeQ17";
          }
          return e;
        };
      c("BNB"), c("ETH"), c("APT"), c("TRX");
    },
    7493: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => u });
      var n = r(6540),
        i = r(4335),
        o = r(9087),
        s = r(9304),
        a = r(400),
        l = r(1468);
      let u = (t) => {
        let [e, r] = (0, n.useState)(t),
          [u, f] = (0, n.useState)(null),
          [h, c] = (0, n.useState)(null),
          [d, p] = (0, n.useState)(!1),
          g = (0, l.wA)(),
          m = () => {
            (0, s.I5)(), g((0, a.Gd)("", "", !1, ""));
          };
        return (
          (i.A.defaults.headers.common["Content-Type"] =
            "application/x-www-form-urlencoded"),
          (i.A.defaults.timeout = 2e4),
          {
            data: u,
            error: h,
            loading: d,
            fetchData: (0, n.useCallback)(
              async function () {
                let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null;
                p(!0), c(null);
                let r = (0, o.c7)("token");
                try {
                  (e.data = { ...e.data, ...t }),
                    (e.headers = { ...e.headers, Authorization: r });
                  let n = await (0, i.A)(e);
                  f(n.data), c(null);
                } catch (e) {
                  var n, s;
                  let t = String(
                    null == e
                      ? void 0
                      : null === (n = e.response) || void 0 === n
                      ? void 0
                      : n.status
                  );
                  if ("401" == t) return m();
                  if (t.startsWith("5"))
                    try {
                      let t = await (0, i.A)({
                        url: "/backend/get_status",
                        method: "POST",
                      });
                      null == t ||
                        null === (s = t.data) ||
                        void 0 === s ||
                        s.code;
                    } catch (t) {
                      console.log(t);
                    }
                  f(null), console.log(e), c(e.response);
                } finally {
                  p(!1);
                }
              },
              [e]
            ),
            setConfig: r,
          }
        );
      };
    },
    4295: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => o });
      var n = r(6540),
        i = r(7493);
      let o = () => {
        let [t, e] = (0, n.useState)(null),
          {
            data: r,
            error: o,
            loading: s,
            fetchData: a,
          } = (0, i.A)({ url: "/api/credit_refresh", method: "POST" });
        return (
          (0, n.useEffect)(() => {
            !s && r && 0 === r.code && e(r.data);
          }, [s]),
          {
            oauthInfo: t,
            fetchOauthRefreshData: (0, n.useCallback)((t) => {
              a({ wallet: t });
            }, []),
          }
        );
      };
    },
    4678: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => o });
      var n = r(6540),
        i = r(7493);
      let o = () => {
        let [t, e] = (0, n.useState)(null),
          {
            data: r,
            loading: o,
            fetchData: s,
          } = (0, i.A)({ url: "/api/invite_list", method: "POST" });
        return (
          (0, n.useEffect)(() => {
            !o && r && 0 === r.code && e(r.data);
          }, [o]),
          {
            inviteList: t,
            fetchInviteData: (0, n.useCallback)((t) => {
              s({ wallet: t });
            }, []),
          }
        );
      };
    },
    812: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => s });
      var n = r(6540),
        i = r(9304),
        o = r(9087);
      let s = () => {
        let [t, e] = (0, n.useState)(!1);
        return {
          isLoginOut: t,
          loginOut: (0, n.useCallback)(async () => {
            try {
              let t = (0, o.c7)("wallet_type");
              if (!t) {
                e(!0);
                return;
              }
              let r = (0, i.zg)(t),
                n = (0, i.YS)(t);
              (0, i.He)()
                ? null == r || r.disconnect()
                : (await n.request({
                    method: "wallet_revokePermissions",
                    params: [{ eth_accounts: {} }],
                  }),
                  null == r || r.removeAllListeners()),
                e(!0);
            } catch (t) {
              e(!0);
            }
          }, []),
        };
      };
    },
    7391: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => u });
      var n = r(6540),
        i = r(7493),
        o = r(400),
        s = r(9304),
        a = r(1468),
        l = r(812);
      let u = () => {
        let { loginOut: t } = (0, l.A)(),
          [e, r] = (0, n.useState)(null),
          u = (0, a.wA)(),
          {
            data: f,
            error: h,
            loading: c,
            fetchData: d,
          } = (0, i.A)({ url: "/api/login_refresh", method: "POST" });
        return (
          (0, n.useEffect)(() => {
            if (!c && f && 0 === f.code) {
              let e = f.data,
                n = null == e ? void 0 : e.is_banned;
              n &&
                (u((0, o.VH)({ banned_info: n })),
                (0, s.I5)(),
                u((0, o.Gd)("", "", !1, "")),
                t()),
                r(e);
            }
          }, [c]),
          {
            userInfo: e,
            fetchLoginRefreshData: (0, n.useCallback)((t) => {
              d({ wallet: t });
            }, []),
          }
        );
      };
    },
    9274: (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, { default: () => tS });
      var n,
        i = r(4848);
      r(4472);
      var o = r(6540);
      let s = (0, o.createContext)(void 0),
        a = (t) => {
          let { children: e } = t,
            [r, n] = (0, o.useState)(!1);
          (0, o.useEffect)(() => {
            let { ethereum: t } = window;
            if (t)
              return (
                t
                  .request({ method: "eth_accounts" })
                  .then((t) => {
                    n(t.length > 0);
                  })
                  .catch((t) => {
                    console.log("Error checking wallet connection", t);
                  }),
                t.on("accountsChanged", a),
                t.on("disconnect", l),
                () => {
                  t.removeListener &&
                    (t.removeListener("accountsChanged", a),
                    t.removeListener("disconnect", l));
                }
              );
          }, []);
          let a = (t) => {
              0 === t.length ? n(!1) : n(!0);
            },
            l = () => {
              n(!1);
            };
          return (0, i.jsx)(s.Provider, {
            value: { isConnected: r },
            children: e,
          });
        };
      function l(t) {
        return `Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
      }
      var u =
          ("function" == typeof Symbol && Symbol.observable) || "@@observable",
        f = () => Math.random().toString(36).substring(7).split("").join("."),
        h = {
          INIT: `@@redux/INIT${f()}`,
          REPLACE: `@@redux/REPLACE${f()}`,
          PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${f()}`,
        };
      function c(t) {
        if ("object" != typeof t || null === t) return !1;
        let e = t;
        for (; null !== Object.getPrototypeOf(e); )
          e = Object.getPrototypeOf(e);
        return (
          Object.getPrototypeOf(t) === e || null === Object.getPrototypeOf(t)
        );
      }
      function d(...t) {
        return 0 === t.length
          ? (t) => t
          : 1 === t.length
          ? t[0]
          : t.reduce(
              (t, e) =>
                (...r) =>
                  t(e(...r))
            );
      }
      function p(t) {
        return ({ dispatch: e, getState: r }) =>
          (n) =>
          (i) =>
            "function" == typeof i ? i(e, r, t) : n(i);
      }
      var g = p();
      r(7836);
      var m =
        "undefined" != typeof window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
          ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
          : function () {
              if (0 != arguments.length)
                return "object" == typeof arguments[0]
                  ? d
                  : d.apply(null, arguments);
            };
      "undefined" != typeof window &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__;
      var y = (t) => t && "function" == typeof t.match;
      function v(t, e) {
        function r(...n) {
          if (e) {
            let r = e(...n);
            if (!r) throw Error(G(0));
            return {
              type: t,
              payload: r.payload,
              ...("meta" in r && { meta: r.meta }),
              ...("error" in r && { error: r.error }),
            };
          }
          return { type: t, payload: n[0] };
        }
        return (
          (r.toString = () => `${t}`),
          (r.type = t),
          (r.match = (e) =>
            c(e) && "type" in e && "string" == typeof e.type && e.type === t),
          r
        );
      }
      function b(t) {
        return ["type", "payload", "error", "meta"].indexOf(t) > -1;
      }
      var w = class t extends Array {
          constructor(...e) {
            super(...e), Object.setPrototypeOf(this, t.prototype);
          }
          static get [Symbol.species]() {
            return t;
          }
          concat(...t) {
            return super.concat.apply(this, t);
          }
          prepend(...e) {
            return 1 === e.length && Array.isArray(e[0])
              ? new t(...e[0].concat(this))
              : new t(...e.concat(this));
          }
        },
        A = () =>
          function (t) {
            let {
                thunk: e = !0,
                immutableCheck: r = !0,
                serializableCheck: n = !0,
                actionCreatorCheck: i = !0,
              } = t ?? {},
              o = new w();
            return (
              e &&
                ("boolean" == typeof e
                  ? o.push(g)
                  : o.push(p(e.extraArgument))),
              o
            );
          },
        E = (t) => (e) => {
          setTimeout(e, t);
        },
        x =
          (t = { type: "raf" }) =>
          (e) =>
          (...r) => {
            let n = e(...r),
              i = !0,
              o = !1,
              s = !1,
              a = new Set(),
              l =
                "tick" === t.type
                  ? queueMicrotask
                  : "raf" === t.type
                  ? "undefined" != typeof window && window.requestAnimationFrame
                    ? window.requestAnimationFrame
                    : E(10)
                  : "callback" === t.type
                  ? t.queueNotification
                  : E(t.timeout),
              u = () => {
                (s = !1), o && ((o = !1), a.forEach((t) => t()));
              };
            return Object.assign({}, n, {
              subscribe(t) {
                let e = n.subscribe(() => i && t());
                return (
                  a.add(t),
                  () => {
                    e(), a.delete(t);
                  }
                );
              },
              dispatch(t) {
                try {
                  return (
                    (o = !(i = !t?.meta?.RTK_autoBatch)) &&
                      !s &&
                      ((s = !0), l(u)),
                    n.dispatch(t)
                  );
                } finally {
                  i = !0;
                }
              },
            });
          },
        _ = (t) =>
          function (e) {
            let { autoBatch: r = !0 } = e ?? {},
              n = new w(t);
            return r && n.push(x("object" == typeof r ? r : void 0)), n;
          },
        k = (t, e) => (y(t) ? t.match(e) : t(e)),
        N = (t = 21) => {
          let e = "",
            r = t;
          for (; r--; )
            e +=
              "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[
                (64 * Math.random()) | 0
              ];
          return e;
        },
        S = ["name", "message", "stack", "code"],
        M = ((t) => (
          (t.reducer = "reducer"),
          (t.reducerWithPrepare = "reducerWithPrepare"),
          (t.asyncThunk = "asyncThunk"),
          t
        ))(M || {}),
        I = class {
          constructor(t) {
            (this.code = t), (this.message = `task cancelled (reason: ${t})`);
          }
          name = "TaskAbortError";
          message;
        },
        R = (t, e) => {
          if ("function" != typeof t) throw TypeError(G(32));
        },
        T = () => {},
        P = (t, e = T) => (t.catch(e), t),
        O = (t, e) => (
          t.addEventListener("abort", e, { once: !0 }),
          () => t.removeEventListener("abort", e)
        ),
        B = (t, e) => {
          let r = t.signal;
          r.aborted ||
            ("reason" in r ||
              Object.defineProperty(r, "reason", {
                enumerable: !0,
                value: e,
                configurable: !0,
                writable: !0,
              }),
            t.abort(e));
        },
        C = (t) => {
          if (t.aborted) {
            let { reason: e } = t;
            throw new I(e);
          }
        },
        L = (t) => (e) =>
          P(
            (function (t, e) {
              let r = T;
              return new Promise((n, i) => {
                let o = () => i(new I(t.reason));
                if (t.aborted) {
                  o();
                  return;
                }
                (r = O(t, o)), e.finally(() => r()).then(n, i);
              }).finally(() => {
                r = T;
              });
            })(t, e).then((e) => (C(t), e))
          ),
        { assign: U } = Object,
        F = "listenerMiddleware",
        D = (t) => {
          let {
            type: e,
            actionCreator: r,
            matcher: n,
            predicate: i,
            effect: o,
          } = t;
          if (e) i = v(e).match;
          else if (r) (e = r.type), (i = r.match);
          else if (n) i = n;
          else if (i);
          else throw Error(G(21));
          return R(o, "options.listener"), { predicate: i, type: e, effect: o };
        },
        j = U(
          (t) => {
            let { type: e, predicate: r, effect: n } = D(t);
            return {
              id: N(),
              effect: n,
              type: e,
              predicate: r,
              pending: new Set(),
              unsubscribe: () => {
                throw Error(G(22));
              },
            };
          },
          { withTypes: () => j }
        ),
        q = U(v(`${F}/add`), { withTypes: () => q }),
        H = U(v(`${F}/remove`), { withTypes: () => H }),
        z = Symbol.for("rtk-state-proxy-original");
      function G(t) {
        return `Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
      }
      var V = r(1468),
        Y = r(6715),
        J = function () {
          return (J =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var i in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        },
        K = function (t, e, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function s(t) {
              try {
                l(n.next(t));
              } catch (t) {
                o(t);
              }
            }
            function a(t) {
              try {
                l(n.throw(t));
              } catch (t) {
                o(t);
              }
            }
            function l(t) {
              var e;
              t.done
                ? i(t.value)
                : ((e = t.value) instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      })
                  ).then(s, a);
            }
            l((n = n.apply(t, e || [])).next());
          });
        },
        W = function (t, e) {
          var r,
            n,
            i,
            o,
            s = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: a(0), throw: a(1), return: a(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function a(o) {
            return function (a) {
              return (function (o) {
                if (r) throw TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n.return
                            : o[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    )
                      return i;
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return s.label++, { value: o[1], done: !1 };
                      case 5:
                        s.label++, (n = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                          (6 === o[0] || 2 === o[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                          (s.label = i[1]), (i = o);
                          break;
                        }
                        if (i && s.label < i[2]) {
                          (s.label = i[2]), s.ops.push(o);
                          break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    o = e.call(t, s);
                  } catch (t) {
                    (o = [6, t]), (n = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, a]);
            };
          }
        },
        Q = function (t, e) {
          var r = {};
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) &&
              0 > e.indexOf(n) &&
              (r[n] = t[n]);
          if (null != t && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var i = 0, n = Object.getOwnPropertySymbols(t);
              i < n.length;
              i++
            )
              0 > e.indexOf(n[i]) &&
                Object.prototype.propertyIsEnumerable.call(t, n[i]) &&
                (r[n[i]] = t[n[i]]);
          return r;
        },
        X = function () {
          return "undefined" == typeof window;
        },
        Z = function (t, e) {
          var r = (void 0 === e ? {} : e).deserializeState;
          return r ? r(t) : t;
        },
        $ = function (t, e) {
          var r = (void 0 === e ? {} : e).serializeState;
          return r ? r(t) : t;
        },
        tt = function (t) {
          var e,
            r = t.makeStore,
            i = t.context,
            o = void 0 === i ? {} : i,
            s = function () {
              return r(o);
            };
          if (X()) {
            var a =
              (null == o ? void 0 : o.req) ||
              (null === (e = null == o ? void 0 : o.ctx) || void 0 === e
                ? void 0
                : e.req);
            return a
              ? (a.__nextReduxWrapperStore || (a.__nextReduxWrapperStore = s()),
                a.__nextReduxWrapperStore)
              : s();
          }
          return n || (n = s()), n;
        },
        te = function (t, e) {
          void 0 === e && (e = {});
          var r = function (r) {
              var n = r.callback,
                i = r.context,
                o = r.addStoreToContext,
                s = void 0 !== o && o;
              return K(void 0, void 0, void 0, function () {
                var r, o, a, l, u;
                return W(this, function (f) {
                  switch (f.label) {
                    case 0:
                      if (
                        ((r = tt({ context: i, makeStore: t })),
                        e.debug &&
                          console.log(
                            "1. getProps created store with state",
                            r.getState()
                          ),
                        s && (i.ctx ? (i.ctx.store = r) : (i.store = r)),
                        !(l = o = n && n(r)))
                      )
                        return [3, 2];
                      return [4, o(i)];
                    case 1:
                      (l = f.sent()), (f.label = 2);
                    case 2:
                      return (
                        (a = l || {}),
                        e.debug &&
                          console.log(
                            "3. getProps after dispatches has store state",
                            r.getState()
                          ),
                        (u = r.getState()),
                        [
                          2,
                          { initialProps: a, initialState: X() ? $(u, e) : u },
                        ]
                      );
                  }
                });
              });
            },
            n = function (t) {
              return function (e) {
                return K(void 0, void 0, void 0, function () {
                  var n, i, o;
                  return W(this, function (s) {
                    switch (s.label) {
                      case 0:
                        return [4, r({ callback: t, context: e })];
                      case 1:
                        return (
                          (i = (n = s.sent()).initialProps),
                          (o = n.initialState),
                          [
                            2,
                            J(J({}, i), {
                              props: J(J({}, i.props), { initialState: o }),
                            }),
                          ]
                        );
                    }
                  });
                });
              };
            },
            i = function (t, r) {
              r &&
                t.dispatch({
                  type: "__NEXT_REDUX_WRAPPER_HYDRATE__",
                  payload: Z(r, e),
                });
            },
            s = function (t, e, r, n, o) {
              var s;
              r
                ? (i(t, e), i(t, r))
                : (n || o || e) &&
                  i(
                    t,
                    null !== (s = null != n ? n : o) && void 0 !== s ? s : e
                  );
            },
            a = function (t, e, r, n, i) {
              var a = (0, Y.useRouter)().events,
                l = (0, o.useRef)(!0);
              (0, o.useEffect)(
                function () {
                  var t = function () {
                    l.current = !0;
                  };
                  return (
                    null == a || a.on("routeChangeStart", t),
                    function () {
                      null == a || a.off("routeChangeStart", t);
                    }
                  );
                },
                [a]
              ),
                (0, o.useMemo)(
                  function () {
                    l.current && (s(t, e, r, n, i), (l.current = !1));
                  },
                  [t, e, r, n, i]
                );
            },
            l = function (r, n) {
              void 0 === n && (n = "useWrappedStore");
              var i,
                s,
                l,
                u,
                f,
                h,
                c = r.initialState,
                d = r.initialProps,
                p = Q(r, ["initialState", "initialProps"]),
                g = (null == p ? void 0 : p.__N_SSG)
                  ? null === (i = null == p ? void 0 : p.pageProps) ||
                    void 0 === i
                    ? void 0
                    : i.initialState
                  : null,
                m = (null == p ? void 0 : p.__N_SSP)
                  ? null === (s = null == p ? void 0 : p.pageProps) ||
                    void 0 === s
                    ? void 0
                    : s.initialState
                  : null,
                y =
                  g || m
                    ? null
                    : null !==
                        (u =
                          null === (l = null == p ? void 0 : p.pageProps) ||
                          void 0 === l
                            ? void 0
                            : l.initialState) && void 0 !== u
                    ? u
                    : null;
              e.debug &&
                console.log("4.", n, "created new store with", {
                  giapState: c,
                  gspState: g,
                  gsspState: m,
                  gippState: y,
                });
              var v = (0, o.useMemo)(function () {
                return tt({ makeStore: t });
              }, []);
              a(v, c, g, m, y);
              var b = p;
              return (
                d &&
                  d.pageProps &&
                  (b.pageProps = J(J({}, d.pageProps), p.pageProps)),
                (null === (f = null == p ? void 0 : p.pageProps) || void 0 === f
                  ? void 0
                  : f.initialState) &&
                  ((b = J(J({}, p), { pageProps: J({}, p.pageProps) })),
                  delete b.pageProps.initialState),
                (null === (h = null == b ? void 0 : b.pageProps) || void 0 === h
                  ? void 0
                  : h.initialProps) &&
                  ((b.pageProps = J(
                    J({}, b.pageProps),
                    b.pageProps.initialProps
                  )),
                  delete b.pageProps.initialProps),
                { store: v, props: J(J({}, d), b) }
              );
            };
          return {
            getServerSideProps: function (t) {
              return function (e) {
                return K(void 0, void 0, void 0, function () {
                  return W(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return [4, n(t)(e)];
                      case 1:
                        return [2, r.sent()];
                    }
                  });
                });
              };
            },
            getStaticProps: n,
            getInitialAppProps: function (t) {
              return function (e) {
                return K(void 0, void 0, void 0, function () {
                  var n, i, o;
                  return W(this, function (s) {
                    switch (s.label) {
                      case 0:
                        return [
                          4,
                          r({ callback: t, context: e, addStoreToContext: !0 }),
                        ];
                      case 1:
                        return (
                          (i = (n = s.sent()).initialProps),
                          (o = n.initialState),
                          [2, J(J({}, i), { initialState: o })]
                        );
                    }
                  });
                });
              };
            },
            getInitialPageProps: function (t) {
              return function (e) {
                return K(void 0, void 0, void 0, function () {
                  return W(this, function (n) {
                    switch (n.label) {
                      case 0:
                        if ("getState" in e) return [2, t && t(e)];
                        return [
                          4,
                          r({ callback: t, context: e, addStoreToContext: !0 }),
                        ];
                      case 1:
                        return [2, n.sent()];
                    }
                  });
                });
              };
            },
            withRedux: function (t) {
              console.warn(
                "/!\\ You are using legacy implementation. Please update your code: use createWrapper() and wrapper.useWrappedStore()."
              );
              var e = function (r) {
                var n = l(r, e.displayName),
                  i = n.store,
                  s = n.props;
                return o.createElement(
                  V.Kq,
                  { store: i },
                  o.createElement(t, J({}, s))
                );
              };
              return (
                (e.displayName = "withRedux(".concat(
                  t.displayName || t.name || "Component",
                  ")"
                )),
                "getInitialProps" in t &&
                  (e.getInitialProps = t.getInitialProps),
                e
              );
            },
            useWrappedStore: l,
          };
        };
      let tr = {
          address: null,
          network: null,
          isConnected: !1,
          walletConnectLoading: !0,
          walletType: "metamask",
          userName: "",
          userAvatar: "/images/dapp/profile/byte1.png",
        },
        tn = function () {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : tr,
            e = arguments.length > 1 ? arguments[1] : void 0,
            { payload: r } = e;
          switch (e.type) {
            case "SET_WALLET_INFO":
            case "SET_WALLET_LOADING":
              return { ...t, ...r };
            default:
              return t;
          }
        },
        ti = {
          display_name: "",
          avatar: "/images/dapp/profile/byte1.png",
          bytenova_email: "",
          bytenova_id: "",
          discord_id: "",
          discord_name: "",
          is_bind_discord: !1,
          is_bind_twitter: !1,
          is_follow_discord: !1,
          is_follow_twitter: !1,
          twitter_id: "",
          twitter_name: "",
          current_rank: 0,
          is_banned: !1,
          email: "",
          is_bind_email: !1,
        },
        to = function () {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ti,
            { type: e, payload: r } =
              arguments.length > 1 ? arguments[1] : void 0;
          return "SET_USER_INFO" === e ? { ...t, ...r } : t;
        },
        ts = {
          banned_info: !1,
          referal_tip: "",
          notice_popup: !1,
          mobile_social_link: "",
        },
        ta = function () {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ts,
            { type: e, payload: r } =
              arguments.length > 1 ? arguments[1] : void 0;
          switch (e) {
            case "SET_BANNED_INFO":
            case "SET_REFERAL_TIP":
            case "SET_NOTICE_POPUP":
            case "SET_MOBILE_SOCIAL_LINK":
              return { ...t, ...r };
            default:
              return t;
          }
        },
        tl = {
          bind_credit_twitter: 0,
          follow_credit_twitter: 0,
          bind_credit_discord: 0,
          follow_credit_discord: 0,
          signInPoints: 0,
          tweet_credit: 0,
        },
        tu = function () {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : tl,
            { type: e, payload: r } =
              arguments.length > 1 ? arguments[1] : void 0;
          switch (e) {
            case "SET_OAUTH_INFO":
              return { ...t, ...r };
            case "SET_SIGNIN_POINTS":
              return { ...t, signInPoints: r.signInPoints };
            default:
              return t;
          }
        },
        tf = {
          total_credit: 0,
          total_invite_count: 0,
          success_invite_count: 0,
          self_code: "",
          parent_code: "",
        },
        th = function () {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : tf,
            e = arguments.length > 1 ? arguments[1] : void 0,
            { type: r, payload: n } = e;
          return "SET_INVITE_POINTS" === e.type ? { ...t, ...n } : t;
        },
        tc = { displayMenu: "", searchText: "" },
        td = function () {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : tc,
            { type: e, payload: r } =
              arguments.length > 1 ? arguments[1] : void 0;
          return "SET_MENU_INFO" === e ? { ...t, ...r } : t;
        },
        tp = {
          icon: "/assets/images/chain/bnb.svg",
          name: "BNB Chain",
          value: "BNB",
        },
        tg = function () {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : tp,
            e = arguments.length > 1 ? arguments[1] : void 0,
            { type: r, payload: n } = e;
          return "SET_CURRENT_NETWORK" === e.type ? { ...t, ...n } : t;
        },
        tm = {
          balance: 0,
          total_buy_count: 0,
          total_reward_all: 0,
          total_reward_today: 0,
          total_reward_invite: 0,
        },
        ty = function () {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : tm,
            { type: e, payload: r } =
              arguments.length > 1 ? arguments[1] : void 0;
          return "SET_USER_ASSETS_INFO" === e ? { ...t, ...r } : t;
        },
        tv = {
          address: null,
          network: null,
          isConnected: !1,
          walletType: "MetaMask",
        },
        tb = function () {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : tv,
            e = arguments.length > 1 ? arguments[1] : void 0,
            { type: r, payload: n } = e;
          return "SET_MINT_WALLET_INFO" === e.type ? { ...t, ...n } : t;
        },
        tw = () =>
          (function (t) {
            let e, r;
            let n = A(),
              {
                reducer: i,
                middleware: o,
                devTools: s = !0,
                preloadedState: a,
                enhancers: f,
              } = t || {};
            if ("function" == typeof i) e = i;
            else if (c(i))
              e = (function (t) {
                let e;
                let r = Object.keys(t),
                  n = {};
                for (let e = 0; e < r.length; e++) {
                  let i = r[e];
                  "function" == typeof t[i] && (n[i] = t[i]);
                }
                let i = Object.keys(n);
                try {
                  !(function (t) {
                    Object.keys(t).forEach((e) => {
                      let r = t[e];
                      if (void 0 === r(void 0, { type: h.INIT }))
                        throw Error(l(12));
                      if (
                        void 0 === r(void 0, { type: h.PROBE_UNKNOWN_ACTION() })
                      )
                        throw Error(l(13));
                    });
                  })(n);
                } catch (t) {
                  e = t;
                }
                return function (t = {}, r) {
                  if (e) throw e;
                  let o = !1,
                    s = {};
                  for (let e = 0; e < i.length; e++) {
                    let a = i[e],
                      u = n[a],
                      f = t[a],
                      h = u(f, r);
                    if (void 0 === h) throw (r && r.type, Error(l(14)));
                    (s[a] = h), (o = o || h !== f);
                  }
                  return (o = o || i.length !== Object.keys(t).length) ? s : t;
                };
              })(i);
            else throw Error(G(1));
            r = "function" == typeof o ? o(n) : n();
            let p = d;
            s && (p = m({ trace: !1, ...("object" == typeof s && s) }));
            let g = _(
              (function (...t) {
                return (e) => (r, n) => {
                  let i = e(r, n),
                    o = () => {
                      throw Error(l(15));
                    },
                    s = {
                      getState: i.getState,
                      dispatch: (t, ...e) => o(t, ...e),
                    };
                  return (
                    (o = d(...t.map((t) => t(s)))(i.dispatch)),
                    { ...i, dispatch: o }
                  );
                };
              })(...r)
            );
            return (function t(e, r, n) {
              if ("function" != typeof e) throw Error(l(2));
              if (
                ("function" == typeof r && "function" == typeof n) ||
                ("function" == typeof n && "function" == typeof arguments[3])
              )
                throw Error(l(0));
              if (
                ("function" == typeof r &&
                  void 0 === n &&
                  ((n = r), (r = void 0)),
                void 0 !== n)
              ) {
                if ("function" != typeof n) throw Error(l(1));
                return n(t)(e, r);
              }
              let i = e,
                o = r,
                s = new Map(),
                a = s,
                f = 0,
                d = !1;
              function p() {
                a === s &&
                  ((a = new Map()),
                  s.forEach((t, e) => {
                    a.set(e, t);
                  }));
              }
              function g() {
                if (d) throw Error(l(3));
                return o;
              }
              function m(t) {
                if ("function" != typeof t) throw Error(l(4));
                if (d) throw Error(l(5));
                let e = !0;
                p();
                let r = f++;
                return (
                  a.set(r, t),
                  function () {
                    if (e) {
                      if (d) throw Error(l(6));
                      (e = !1), p(), a.delete(r), (s = null);
                    }
                  }
                );
              }
              function y(t) {
                if (!c(t)) throw Error(l(7));
                if (void 0 === t.type) throw Error(l(8));
                if ("string" != typeof t.type) throw Error(l(17));
                if (d) throw Error(l(9));
                try {
                  (d = !0), (o = i(o, t));
                } finally {
                  d = !1;
                }
                return (
                  (s = a).forEach((t) => {
                    t();
                  }),
                  t
                );
              }
              return (
                y({ type: h.INIT }),
                {
                  dispatch: y,
                  subscribe: m,
                  getState: g,
                  replaceReducer: function (t) {
                    if ("function" != typeof t) throw Error(l(10));
                    (i = t), y({ type: h.REPLACE });
                  },
                  [u]: function () {
                    return {
                      subscribe(t) {
                        if ("object" != typeof t || null === t)
                          throw Error(l(11));
                        function e() {
                          t.next && t.next(g());
                        }
                        return e(), { unsubscribe: m(e) };
                      },
                      [u]() {
                        return this;
                      },
                    };
                  },
                }
              );
            })(e, a, p(...("function" == typeof f ? f(g) : g())));
          })({
            reducer: {
              wallet: tn,
              userInfo: to,
              bannedInfo: ta,
              oauth: tu,
              invite: th,
              menu: td,
              currentNetwork: tg,
              assets: ty,
              mintWallet: tb,
            },
          }),
        tA = te(tw);
      te(tw, { debug: !0 });
      var tE = r(400),
        tx = r(7391),
        t_ = r(4295),
        tk = r(4678),
        tN = r(9087);
      let tS = tA.withRedux(function (t) {
        let { Component: e, pageProps: r } = t,
          n = (0, V.wA)(),
          { fetchLoginRefreshData: s, userInfo: l } = (0, tx.A)(),
          { fetchOauthRefreshData: u, oauthInfo: f } = (0, t_.A)(),
          { fetchInviteData: h, inviteList: c } = (0, tk.A)();
        return (
          (0, o.useEffect)(() => {
            l && n((0, tE.iA)(l));
          }, [l]),
          (0, o.useEffect)(() => {
            f && n((0, tE.u$)(f));
          }, [f]),
          (0, o.useEffect)(() => {
            c && n((0, tE.EY)(c));
          }, [c]),
          (0, o.useEffect)(() => {
            let t = (0, tN.c7)("original_evm_wallet_type"),
              e = (0, tN.c7)("original_aptos_wallet_type");
            t || (0, tN.cT)("original_evm_wallet_type", "MetaMask"),
              e || (0, tN.cT)("original_aptos_wallet_type", "Petra");
            let r = (0, tN.c7)("address"),
              i = (0, tN.c7)("network"),
              o = (0, tN.c7)("isConnected"),
              a = (0, tN.c7)("token"),
              l = (0, tN.c7)("wallet_type");
            o && n((0, tE.Gd)(r || null, i || null, "true" == o, l)),
              r && a && (s(r), u(r), h(r));
          }, []),
          (0, i.jsx)(a, { children: (0, i.jsx)(e, { ...r }) })
        );
      });
    },
    400: (t, e, r) => {
      "use strict";
      r.d(e, {
        B: () => l,
        EY: () => u,
        Gd: () => n,
        VH: () => s,
        WP: () => f,
        iA: () => o,
        qL: () => i,
        u$: () => a,
        uB: () => h,
      });
      let n = function (t, e, r) {
          let n =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : "MetaMask";
          return {
            type: "SET_WALLET_INFO",
            payload: { address: t, network: e, isConnected: r, walletType: n },
          };
        },
        i = () => ({
          type: "SET_WALLET_LOADING",
          payload: { walletConnectLoading: !1 },
        }),
        o = (t) => ({ type: "SET_USER_INFO", payload: { ...t } }),
        s = (t) => ({
          type: "SET_BANNED_INFO",
          payload: { banned_info: t.banned_info },
        }),
        a = (t) => ({ type: "SET_OAUTH_INFO", payload: { ...t } }),
        l = (t) => ({ type: "SET_SIGNIN_POINTS", payload: { ...t } }),
        u = (t) => ({ type: "SET_INVITE_POINTS", payload: { ...t } }),
        f = (t) => ({ type: "SET_CURRENT_NETWORK", payload: { ...t } }),
        h = (t) => ({ type: "SET_USER_ASSETS_INFO", payload: { ...t } });
    },
    9087: (t, e, r) => {
      "use strict";
      r.d(e, {
        sR: () => w,
        ZI: () => x,
        I_: () => E,
        c7: () => v,
        Hq: () => m,
        Fr: () => A,
        Od: () => b,
        cT: () => y,
      });
      var n = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
        i = Math.ceil,
        o = Math.floor,
        s = "[BigNumber Error] ",
        a = s + "Number primitive has more than 15 significant digits: ",
        l = [
          1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13,
        ];
      function u(t) {
        var e = 0 | t;
        return t > 0 || t === e ? e : e - 1;
      }
      function f(t) {
        for (var e, r, n = 1, i = t.length, o = t[0] + ""; n < i; ) {
          for (r = 14 - (e = t[n++] + "").length; r--; e = "0" + e);
          o += e;
        }
        for (i = o.length; 48 === o.charCodeAt(--i); );
        return o.slice(0, i + 1 || 1);
      }
      function h(t, e) {
        var r,
          n,
          i = t.c,
          o = e.c,
          s = t.s,
          a = e.s,
          l = t.e,
          u = e.e;
        if (!s || !a) return null;
        if (((r = i && !i[0]), (n = o && !o[0]), r || n))
          return r ? (n ? 0 : -a) : s;
        if (s != a) return s;
        if (((r = s < 0), (n = l == u), !i || !o))
          return n ? 0 : !i ^ r ? 1 : -1;
        if (!n) return (l > u) ^ r ? 1 : -1;
        for (s = 0, a = (l = i.length) < (u = o.length) ? l : u; s < a; s++)
          if (i[s] != o[s]) return (i[s] > o[s]) ^ r ? 1 : -1;
        return l == u ? 0 : (l > u) ^ r ? 1 : -1;
      }
      function c(t, e, r, n) {
        if (t < e || t > r || t !== o(t))
          throw Error(
            s +
              (n || "Argument") +
              ("number" == typeof t
                ? t < e || t > r
                  ? " out of range: "
                  : " not an integer: "
                : " not a primitive number: ") +
              String(t)
          );
      }
      function d(t) {
        var e = t.c.length - 1;
        return u(t.e / 14) == e && t.c[e] % 2 != 0;
      }
      function p(t, e) {
        return (
          (t.length > 1 ? t.charAt(0) + "." + t.slice(1) : t) +
          (e < 0 ? "e" : "e+") +
          e
        );
      }
      function g(t, e, r) {
        var n, i;
        if (e < 0) {
          for (i = r + "."; ++e; i += r);
          t = i + t;
        } else if (((n = t.length), ++e > n)) {
          for (i = r, e -= n; --e; i += r);
          t += i;
        } else e < n && (t = t.slice(0, e) + "." + t.slice(e));
        return t;
      }
      !(function t(e) {
        var r,
          m,
          y,
          v,
          b,
          w,
          A,
          E,
          x,
          _ = (F.prototype = { constructor: F, toString: null, valueOf: null }),
          k = new F(1),
          N = 20,
          S = 4,
          M = -7,
          I = 21,
          R = -1e7,
          T = 1e7,
          P = !1,
          O = 1,
          B = 0,
          C = {
            prefix: "",
            groupSize: 3,
            secondaryGroupSize: 0,
            groupSeparator: ",",
            decimalSeparator: ".",
            fractionGroupSize: 0,
            fractionGroupSeparator: "\xa0",
            suffix: "",
          },
          L = "0123456789abcdefghijklmnopqrstuvwxyz",
          U = !0;
        function F(t, e) {
          var r,
            i,
            s,
            l,
            u,
            f,
            h,
            d,
            p = this;
          if (!(p instanceof F)) return new F(t, e);
          if (null == e) {
            if (t && !0 === t._isBigNumber) {
              (p.s = t.s),
                !t.c || t.e > T
                  ? (p.c = p.e = null)
                  : t.e < R
                  ? (p.c = [(p.e = 0)])
                  : ((p.e = t.e), (p.c = t.c.slice()));
              return;
            }
            if ((f = "number" == typeof t) && 0 * t == 0) {
              if (((p.s = 1 / t < 0 ? ((t = -t), -1) : 1), t === ~~t)) {
                for (l = 0, u = t; u >= 10; u /= 10, l++);
                l > T ? (p.c = p.e = null) : ((p.e = l), (p.c = [t]));
                return;
              }
              d = String(t);
            } else {
              if (!n.test((d = String(t)))) return x(p, d, f);
              p.s = 45 == d.charCodeAt(0) ? ((d = d.slice(1)), -1) : 1;
            }
            (l = d.indexOf(".")) > -1 && (d = d.replace(".", "")),
              (u = d.search(/e/i)) > 0
                ? (l < 0 && (l = u),
                  (l += +d.slice(u + 1)),
                  (d = d.substring(0, u)))
                : l < 0 && (l = d.length);
          } else {
            if ((c(e, 2, L.length, "Base"), 10 == e && U))
              return H((p = new F(t)), N + p.e + 1, S);
            if (((d = String(t)), (f = "number" == typeof t))) {
              if (0 * t != 0) return x(p, d, f, e);
              if (
                ((p.s = 1 / t < 0 ? ((d = d.slice(1)), -1) : 1),
                F.DEBUG && d.replace(/^0\.0*|\./, "").length > 15)
              )
                throw Error(a + t);
            } else p.s = 45 === d.charCodeAt(0) ? ((d = d.slice(1)), -1) : 1;
            for (r = L.slice(0, e), l = u = 0, h = d.length; u < h; u++)
              if (0 > r.indexOf((i = d.charAt(u)))) {
                if ("." == i) {
                  if (u > l) {
                    l = h;
                    continue;
                  }
                } else if (
                  !s &&
                  ((d == d.toUpperCase() && (d = d.toLowerCase())) ||
                    (d == d.toLowerCase() && (d = d.toUpperCase())))
                ) {
                  (s = !0), (u = -1), (l = 0);
                  continue;
                }
                return x(p, String(t), f, e);
              }
            (f = !1),
              (l = (d = E(d, e, 10, p.s)).indexOf(".")) > -1
                ? (d = d.replace(".", ""))
                : (l = d.length);
          }
          for (u = 0; 48 === d.charCodeAt(u); u++);
          for (h = d.length; 48 === d.charCodeAt(--h); );
          if ((d = d.slice(u, ++h))) {
            if (
              ((h -= u),
              f && F.DEBUG && h > 15 && (t > 0x1fffffffffffff || t !== o(t)))
            )
              throw Error(a + p.s * t);
            if ((l = l - u - 1) > T) p.c = p.e = null;
            else if (l < R) p.c = [(p.e = 0)];
            else {
              if (
                ((p.e = l),
                (p.c = []),
                (u = (l + 1) % 14),
                l < 0 && (u += 14),
                u < h)
              ) {
                for (u && p.c.push(+d.slice(0, u)), h -= 14; u < h; )
                  p.c.push(+d.slice(u, (u += 14)));
                u = 14 - (d = d.slice(u)).length;
              } else u -= h;
              for (; u--; d += "0");
              p.c.push(+d);
            }
          } else p.c = [(p.e = 0)];
        }
        function D(t, e, r, n) {
          var i, o, s, a, l;
          if ((null == r ? (r = S) : c(r, 0, 8), !t.c)) return t.toString();
          if (((i = t.c[0]), (s = t.e), null == e))
            (l = f(t.c)),
              (l =
                1 == n || (2 == n && (s <= M || s >= I))
                  ? p(l, s)
                  : g(l, s, "0"));
          else if (
            ((o = (t = H(new F(t), e, r)).e),
            (a = (l = f(t.c)).length),
            1 == n || (2 == n && (e <= o || o <= M)))
          ) {
            for (; a < e; l += "0", a++);
            l = p(l, o);
          } else if (((e -= s), (l = g(l, o, "0")), o + 1 > a)) {
            if (--e > 0) for (l += "."; e--; l += "0");
          } else if ((e += o - a) > 0)
            for (o + 1 == a && (l += "."); e--; l += "0");
          return t.s < 0 && i ? "-" + l : l;
        }
        function j(t, e) {
          for (var r, n, i = 1, o = new F(t[0]); i < t.length; i++)
            ((n = new F(t[i])).s &&
              (r = h(o, n)) !== e &&
              (0 !== r || o.s !== e)) ||
              (o = n);
          return o;
        }
        function q(t, e, r) {
          for (var n = 1, i = e.length; !e[--i]; e.pop());
          for (i = e[0]; i >= 10; i /= 10, n++);
          return (
            (r = n + 14 * r - 1) > T
              ? (t.c = t.e = null)
              : r < R
              ? (t.c = [(t.e = 0)])
              : ((t.e = r), (t.c = e)),
            t
          );
        }
        function H(t, e, r, n) {
          var s,
            a,
            u,
            f,
            h,
            c,
            d,
            p = t.c;
          if (p) {
            t: {
              for (s = 1, f = p[0]; f >= 10; f /= 10, s++);
              if ((a = e - s) < 0)
                (a += 14),
                  (u = e),
                  (d = o(((h = p[(c = 0)]) / l[s - u - 1]) % 10));
              else if ((c = i((a + 1) / 14)) >= p.length) {
                if (n) {
                  for (; p.length <= c; p.push(0));
                  (h = d = 0), (s = 1), (a %= 14), (u = a - 14 + 1);
                } else break t;
              } else {
                for (s = 1, h = f = p[c]; f >= 10; f /= 10, s++);
                (a %= 14),
                  (d = (u = a - 14 + s) < 0 ? 0 : o((h / l[s - u - 1]) % 10));
              }
              if (
                ((n =
                  n ||
                  e < 0 ||
                  null != p[c + 1] ||
                  (u < 0 ? h : h % l[s - u - 1])),
                (n =
                  r < 4
                    ? (d || n) && (0 == r || r == (t.s < 0 ? 3 : 2))
                    : d > 5 ||
                      (5 == d &&
                        (4 == r ||
                          n ||
                          (6 == r &&
                            (a > 0 ? (u > 0 ? h / l[s - u] : 0) : p[c - 1]) %
                              10 &
                              1) ||
                          r == (t.s < 0 ? 8 : 7)))),
                e < 1 || !p[0])
              )
                return (
                  (p.length = 0),
                  n
                    ? ((e -= t.e + 1),
                      (p[0] = l[(14 - (e % 14)) % 14]),
                      (t.e = -e || 0))
                    : (p[0] = t.e = 0),
                  t
                );
              if (
                (0 == a
                  ? ((p.length = c), (f = 1), c--)
                  : ((p.length = c + 1),
                    (f = l[14 - a]),
                    (p[c] = u > 0 ? o((h / l[s - u]) % l[u]) * f : 0)),
                n)
              )
                for (;;) {
                  if (0 == c) {
                    for (a = 1, u = p[0]; u >= 10; u /= 10, a++);
                    for (u = p[0] += f, f = 1; u >= 10; u /= 10, f++);
                    a != f && (t.e++, 1e14 == p[0] && (p[0] = 1));
                    break;
                  }
                  if (((p[c] += f), 1e14 != p[c])) break;
                  (p[c--] = 0), (f = 1);
                }
              for (a = p.length; 0 === p[--a]; p.pop());
            }
            t.e > T ? (t.c = t.e = null) : t.e < R && (t.c = [(t.e = 0)]);
          }
          return t;
        }
        function z(t) {
          var e,
            r = t.e;
          return null === r
            ? t.toString()
            : ((e = f(t.c)),
              (e = r <= M || r >= I ? p(e, r) : g(e, r, "0")),
              t.s < 0 ? "-" + e : e);
        }
        return (
          (F.clone = t),
          (F.ROUND_UP = 0),
          (F.ROUND_DOWN = 1),
          (F.ROUND_CEIL = 2),
          (F.ROUND_FLOOR = 3),
          (F.ROUND_HALF_UP = 4),
          (F.ROUND_HALF_DOWN = 5),
          (F.ROUND_HALF_EVEN = 6),
          (F.ROUND_HALF_CEIL = 7),
          (F.ROUND_HALF_FLOOR = 8),
          (F.EUCLID = 9),
          (F.config = F.set =
            function (t) {
              var e, r;
              if (null != t) {
                if ("object" == typeof t) {
                  if (
                    (t.hasOwnProperty((e = "DECIMAL_PLACES")) &&
                      (c((r = t[e]), 0, 1e9, e), (N = r)),
                    t.hasOwnProperty((e = "ROUNDING_MODE")) &&
                      (c((r = t[e]), 0, 8, e), (S = r)),
                    t.hasOwnProperty((e = "EXPONENTIAL_AT")) &&
                      ((r = t[e]) && r.pop
                        ? (c(r[0], -1e9, 0, e),
                          c(r[1], 0, 1e9, e),
                          (M = r[0]),
                          (I = r[1]))
                        : (c(r, -1e9, 1e9, e), (M = -(I = r < 0 ? -r : r)))),
                    t.hasOwnProperty((e = "RANGE")))
                  ) {
                    if ((r = t[e]) && r.pop)
                      c(r[0], -1e9, -1, e),
                        c(r[1], 1, 1e9, e),
                        (R = r[0]),
                        (T = r[1]);
                    else if ((c(r, -1e9, 1e9, e), r)) R = -(T = r < 0 ? -r : r);
                    else throw Error(s + e + " cannot be zero: " + r);
                  }
                  if (t.hasOwnProperty((e = "CRYPTO"))) {
                    if (!!(r = t[e]) === r) {
                      if (r) {
                        if (
                          "undefined" != typeof crypto &&
                          crypto &&
                          (crypto.getRandomValues || crypto.randomBytes)
                        )
                          P = r;
                        else throw ((P = !r), Error(s + "crypto unavailable"));
                      } else P = r;
                    } else throw Error(s + e + " not true or false: " + r);
                  }
                  if (
                    (t.hasOwnProperty((e = "MODULO_MODE")) &&
                      (c((r = t[e]), 0, 9, e), (O = r)),
                    t.hasOwnProperty((e = "POW_PRECISION")) &&
                      (c((r = t[e]), 0, 1e9, e), (B = r)),
                    t.hasOwnProperty((e = "FORMAT")))
                  ) {
                    if ("object" == typeof (r = t[e])) C = r;
                    else throw Error(s + e + " not an object: " + r);
                  }
                  if (t.hasOwnProperty((e = "ALPHABET"))) {
                    if (
                      "string" != typeof (r = t[e]) ||
                      /^.?$|[+\-.\s]|(.).*\1/.test(r)
                    )
                      throw Error(s + e + " invalid: " + r);
                    (U = "0123456789" == r.slice(0, 10)), (L = r);
                  }
                } else throw Error(s + "Object expected: " + t);
              }
              return {
                DECIMAL_PLACES: N,
                ROUNDING_MODE: S,
                EXPONENTIAL_AT: [M, I],
                RANGE: [R, T],
                CRYPTO: P,
                MODULO_MODE: O,
                POW_PRECISION: B,
                FORMAT: C,
                ALPHABET: L,
              };
            }),
          (F.isBigNumber = function (t) {
            if (!t || !0 !== t._isBigNumber) return !1;
            if (!F.DEBUG) return !0;
            var e,
              r,
              n = t.c,
              i = t.e,
              a = t.s;
            t: if ("[object Array]" == {}.toString.call(n)) {
              if (
                (1 === a || -1 === a) &&
                i >= -1e9 &&
                i <= 1e9 &&
                i === o(i)
              ) {
                if (0 === n[0]) {
                  if (0 === i && 1 === n.length) return !0;
                  break t;
                }
                if (
                  ((e = (i + 1) % 14) < 1 && (e += 14),
                  String(n[0]).length == e)
                ) {
                  for (e = 0; e < n.length; e++)
                    if ((r = n[e]) < 0 || r >= 1e14 || r !== o(r)) break t;
                  if (0 !== r) return !0;
                }
              }
            } else if (
              null === n &&
              null === i &&
              (null === a || 1 === a || -1 === a)
            )
              return !0;
            throw Error(s + "Invalid BigNumber: " + t);
          }),
          (F.maximum = F.max =
            function () {
              return j(arguments, -1);
            }),
          (F.minimum = F.min =
            function () {
              return j(arguments, 1);
            }),
          (F.random =
            ((r =
              (0x20000000000000 * Math.random()) & 2097151
                ? function () {
                    return o(0x20000000000000 * Math.random());
                  }
                : function () {
                    return (
                      ((0x40000000 * Math.random()) | 0) * 8388608 +
                      ((8388608 * Math.random()) | 0)
                    );
                  }),
            function (t) {
              var e,
                n,
                a,
                u,
                f,
                h = 0,
                d = [],
                p = new F(k);
              if ((null == t ? (t = N) : c(t, 0, 1e9), (u = i(t / 14)), P)) {
                if (crypto.getRandomValues) {
                  for (
                    e = crypto.getRandomValues(new Uint32Array((u *= 2)));
                    h < u;

                  )
                    (f = 131072 * e[h] + (e[h + 1] >>> 11)) >= 9e15
                      ? ((n = crypto.getRandomValues(new Uint32Array(2))),
                        (e[h] = n[0]),
                        (e[h + 1] = n[1]))
                      : (d.push(f % 1e14), (h += 2));
                  h = u / 2;
                } else if (crypto.randomBytes) {
                  for (e = crypto.randomBytes((u *= 7)); h < u; )
                    (f =
                      (31 & e[h]) * 0x1000000000000 +
                      0x10000000000 * e[h + 1] +
                      0x100000000 * e[h + 2] +
                      0x1000000 * e[h + 3] +
                      (e[h + 4] << 16) +
                      (e[h + 5] << 8) +
                      e[h + 6]) >= 9e15
                      ? crypto.randomBytes(7).copy(e, h)
                      : (d.push(f % 1e14), (h += 7));
                  h = u / 7;
                } else throw ((P = !1), Error(s + "crypto unavailable"));
              }
              if (!P) for (; h < u; ) (f = r()) < 9e15 && (d[h++] = f % 1e14);
              for (
                u = d[--h],
                  t %= 14,
                  u && t && ((f = l[14 - t]), (d[h] = o(u / f) * f));
                0 === d[h];
                d.pop(), h--
              );
              if (h < 0) d = [(a = 0)];
              else {
                for (a = -1; 0 === d[0]; d.splice(0, 1), a -= 14);
                for (h = 1, f = d[0]; f >= 10; f /= 10, h++);
                h < 14 && (a -= 14 - h);
              }
              return (p.e = a), (p.c = d), p;
            })),
          (F.sum = function () {
            for (var t = 1, e = arguments, r = new F(e[0]); t < e.length; )
              r = r.plus(e[t++]);
            return r;
          }),
          (E = (function () {
            var t = "0123456789";
            function e(t, e, r, n) {
              for (var i, o, s = [0], a = 0, l = t.length; a < l; ) {
                for (o = s.length; o--; s[o] *= e);
                for (s[0] += n.indexOf(t.charAt(a++)), i = 0; i < s.length; i++)
                  s[i] > r - 1 &&
                    (null == s[i + 1] && (s[i + 1] = 0),
                    (s[i + 1] += (s[i] / r) | 0),
                    (s[i] %= r));
              }
              return s.reverse();
            }
            return function (r, n, i, o, s) {
              var a,
                l,
                u,
                h,
                c,
                d,
                p,
                m,
                y = r.indexOf("."),
                v = N,
                b = S;
              for (
                y >= 0 &&
                  ((h = B),
                  (B = 0),
                  (r = r.replace(".", "")),
                  (d = (m = new F(n)).pow(r.length - y)),
                  (B = h),
                  (m.c = e(g(f(d.c), d.e, "0"), 10, i, t)),
                  (m.e = m.c.length)),
                  u = h =
                    (p = e(r, n, i, s ? ((a = L), t) : ((a = t), L))).length;
                0 == p[--h];
                p.pop()
              );
              if (!p[0]) return a.charAt(0);
              if (
                (y < 0
                  ? --u
                  : ((d.c = p),
                    (d.e = u),
                    (d.s = o),
                    (p = (d = A(d, m, v, b, i)).c),
                    (c = d.r),
                    (u = d.e)),
                (y = p[(l = u + v + 1)]),
                (h = i / 2),
                (c = c || l < 0 || null != p[l + 1]),
                (c =
                  b < 4
                    ? (null != y || c) && (0 == b || b == (d.s < 0 ? 3 : 2))
                    : y > h ||
                      (y == h &&
                        (4 == b ||
                          c ||
                          (6 == b && 1 & p[l - 1]) ||
                          b == (d.s < 0 ? 8 : 7)))),
                l < 1 || !p[0])
              )
                r = c ? g(a.charAt(1), -v, a.charAt(0)) : a.charAt(0);
              else {
                if (((p.length = l), c))
                  for (--i; ++p[--l] > i; )
                    (p[l] = 0), l || (++u, (p = [1].concat(p)));
                for (h = p.length; !p[--h]; );
                for (y = 0, r = ""; y <= h; r += a.charAt(p[y++]));
                r = g(r, u, a.charAt(0));
              }
              return r;
            };
          })()),
          (A = (function () {
            function t(t, e, r) {
              var n,
                i,
                o,
                s,
                a = 0,
                l = t.length,
                u = e % 1e7,
                f = (e / 1e7) | 0;
              for (t = t.slice(); l--; )
                (n = f * (o = t[l] % 1e7) + (s = (t[l] / 1e7) | 0) * u),
                  (a =
                    (((i = u * o + (n % 1e7) * 1e7 + a) / r) | 0) +
                    ((n / 1e7) | 0) +
                    f * s),
                  (t[l] = i % r);
              return a && (t = [a].concat(t)), t;
            }
            function e(t, e, r, n) {
              var i, o;
              if (r != n) o = r > n ? 1 : -1;
              else
                for (i = o = 0; i < r; i++)
                  if (t[i] != e[i]) {
                    o = t[i] > e[i] ? 1 : -1;
                    break;
                  }
              return o;
            }
            function r(t, e, r, n) {
              for (var i = 0; r--; )
                (t[r] -= i),
                  (i = t[r] < e[r] ? 1 : 0),
                  (t[r] = i * n + t[r] - e[r]);
              for (; !t[0] && t.length > 1; t.splice(0, 1));
            }
            return function (n, i, s, a, l) {
              var f,
                h,
                c,
                d,
                p,
                g,
                m,
                y,
                v,
                b,
                w,
                A,
                E,
                x,
                _,
                k,
                N,
                S = n.s == i.s ? 1 : -1,
                M = n.c,
                I = i.c;
              if (!M || !M[0] || !I || !I[0])
                return new F(
                  n.s && i.s && (M ? !I || M[0] != I[0] : I)
                    ? (M && 0 == M[0]) || !I
                      ? 0 * S
                      : S / 0
                    : NaN
                );
              for (
                v = (y = new F(S)).c = [],
                  S = s + (h = n.e - i.e) + 1,
                  l ||
                    ((l = 1e14),
                    (h = u(n.e / 14) - u(i.e / 14)),
                    (S = (S / 14) | 0)),
                  c = 0;
                I[c] == (M[c] || 0);
                c++
              );
              if ((I[c] > (M[c] || 0) && h--, S < 0)) v.push(1), (d = !0);
              else {
                for (
                  x = M.length,
                    k = I.length,
                    c = 0,
                    S += 2,
                    (p = o(l / (I[0] + 1))) > 1 &&
                      ((I = t(I, p, l)),
                      (M = t(M, p, l)),
                      (k = I.length),
                      (x = M.length)),
                    E = k,
                    w = (b = M.slice(0, k)).length;
                  w < k;
                  b[w++] = 0
                );
                (N = [0].concat((N = I.slice()))),
                  (_ = I[0]),
                  I[1] >= l / 2 && _++;
                do {
                  if (((p = 0), (f = e(I, b, k, w)) < 0)) {
                    if (
                      ((A = b[0]),
                      k != w && (A = A * l + (b[1] || 0)),
                      (p = o(A / _)) > 1)
                    )
                      for (
                        p >= l && (p = l - 1),
                          m = (g = t(I, p, l)).length,
                          w = b.length;
                        1 == e(g, b, m, w);

                      )
                        p--, r(g, k < m ? N : I, m, l), (m = g.length), (f = 1);
                    else 0 == p && (f = p = 1), (m = (g = I.slice()).length);
                    if (
                      (m < w && (g = [0].concat(g)),
                      r(b, g, w, l),
                      (w = b.length),
                      -1 == f)
                    )
                      for (; 1 > e(I, b, k, w); )
                        p++, r(b, k < w ? N : I, w, l), (w = b.length);
                  } else 0 === f && (p++, (b = [0]));
                  (v[c++] = p),
                    b[0] ? (b[w++] = M[E] || 0) : ((b = [M[E]]), (w = 1));
                } while ((E++ < x || null != b[0]) && S--);
                (d = null != b[0]), v[0] || v.splice(0, 1);
              }
              if (1e14 == l) {
                for (c = 1, S = v[0]; S >= 10; S /= 10, c++);
                H(y, s + (y.e = c + 14 * h - 1) + 1, a, d);
              } else (y.e = h), (y.r = +d);
              return y;
            };
          })()),
          (m = /^(-?)0([xbo])(?=\w[\w.]*$)/i),
          (y = /^([^.]+)\.$/),
          (v = /^\.([^.]+)$/),
          (b = /^-?(Infinity|NaN)$/),
          (w = /^\s*\+(?=[\w.])|^\s+|\s+$/g),
          (x = function (t, e, r, n) {
            var i,
              o = r ? e : e.replace(w, "");
            if (b.test(o)) t.s = isNaN(o) ? null : o < 0 ? -1 : 1;
            else {
              if (
                !r &&
                ((o = o.replace(m, function (t, e, r) {
                  return (
                    (i = "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8),
                    n && n != i ? t : e
                  );
                })),
                n && ((i = n), (o = o.replace(y, "$1").replace(v, "0.$1"))),
                e != o)
              )
                return new F(o, i);
              if (F.DEBUG)
                throw Error(
                  s + "Not a" + (n ? " base " + n : "") + " number: " + e
                );
              t.s = null;
            }
            t.c = t.e = null;
          }),
          (_.absoluteValue = _.abs =
            function () {
              var t = new F(this);
              return t.s < 0 && (t.s = 1), t;
            }),
          (_.comparedTo = function (t, e) {
            return h(this, new F(t, e));
          }),
          (_.decimalPlaces = _.dp =
            function (t, e) {
              var r, n, i;
              if (null != t)
                return (
                  c(t, 0, 1e9),
                  null == e ? (e = S) : c(e, 0, 8),
                  H(new F(this), t + this.e + 1, e)
                );
              if (!(r = this.c)) return null;
              if (
                ((n = ((i = r.length - 1) - u(this.e / 14)) * 14), (i = r[i]))
              )
                for (; i % 10 == 0; i /= 10, n--);
              return n < 0 && (n = 0), n;
            }),
          (_.dividedBy = _.div =
            function (t, e) {
              return A(this, new F(t, e), N, S);
            }),
          (_.dividedToIntegerBy = _.idiv =
            function (t, e) {
              return A(this, new F(t, e), 0, 1);
            }),
          (_.exponentiatedBy = _.pow =
            function (t, e) {
              var r,
                n,
                a,
                l,
                u,
                f,
                h,
                c,
                p,
                g = this;
              if ((t = new F(t)).c && !t.isInteger())
                throw Error(s + "Exponent not an integer: " + z(t));
              if (
                (null != e && (e = new F(e)),
                (f = t.e > 14),
                !g.c ||
                  !g.c[0] ||
                  (1 == g.c[0] && !g.e && 1 == g.c.length) ||
                  !t.c ||
                  !t.c[0])
              )
                return (
                  (p = new F(Math.pow(+z(g), f ? t.s * (2 - d(t)) : +z(t)))),
                  e ? p.mod(e) : p
                );
              if (((h = t.s < 0), e)) {
                if (e.c ? !e.c[0] : !e.s) return new F(NaN);
                (n = !h && g.isInteger() && e.isInteger()) && (g = g.mod(e));
              } else {
                if (
                  t.e > 9 &&
                  (g.e > 0 ||
                    g.e < -1 ||
                    (0 == g.e
                      ? g.c[0] > 1 || (f && g.c[1] >= 24e7)
                      : g.c[0] < 8e13 || (f && g.c[0] <= 9999975e7)))
                )
                  return (
                    (l = g.s < 0 && d(t) ? -0 : 0),
                    g.e > -1 && (l = 1 / l),
                    new F(h ? 1 / l : l)
                  );
                B && (l = i(B / 14 + 2));
              }
              for (
                f
                  ? ((r = new F(0.5)), h && (t.s = 1), (c = d(t)))
                  : (c = (a = Math.abs(+z(t))) % 2),
                  p = new F(k);
                ;

              ) {
                if (c) {
                  if (!(p = p.times(g)).c) break;
                  l ? p.c.length > l && (p.c.length = l) : n && (p = p.mod(e));
                }
                if (a) {
                  if (0 === (a = o(a / 2))) break;
                  c = a % 2;
                } else if ((H((t = t.times(r)), t.e + 1, 1), t.e > 14))
                  c = d(t);
                else {
                  if (0 == (a = +z(t))) break;
                  c = a % 2;
                }
                (g = g.times(g)),
                  l
                    ? g.c && g.c.length > l && (g.c.length = l)
                    : n && (g = g.mod(e));
              }
              return n
                ? p
                : (h && (p = k.div(p)), e ? p.mod(e) : l ? H(p, B, S, u) : p);
            }),
          (_.integerValue = function (t) {
            var e = new F(this);
            return null == t ? (t = S) : c(t, 0, 8), H(e, e.e + 1, t);
          }),
          (_.isEqualTo = _.eq =
            function (t, e) {
              return 0 === h(this, new F(t, e));
            }),
          (_.isFinite = function () {
            return !!this.c;
          }),
          (_.isGreaterThan = _.gt =
            function (t, e) {
              return h(this, new F(t, e)) > 0;
            }),
          (_.isGreaterThanOrEqualTo = _.gte =
            function (t, e) {
              return 1 === (e = h(this, new F(t, e))) || 0 === e;
            }),
          (_.isInteger = function () {
            return !!this.c && u(this.e / 14) > this.c.length - 2;
          }),
          (_.isLessThan = _.lt =
            function (t, e) {
              return 0 > h(this, new F(t, e));
            }),
          (_.isLessThanOrEqualTo = _.lte =
            function (t, e) {
              return -1 === (e = h(this, new F(t, e))) || 0 === e;
            }),
          (_.isNaN = function () {
            return !this.s;
          }),
          (_.isNegative = function () {
            return this.s < 0;
          }),
          (_.isPositive = function () {
            return this.s > 0;
          }),
          (_.isZero = function () {
            return !!this.c && 0 == this.c[0];
          }),
          (_.minus = function (t, e) {
            var r,
              n,
              i,
              o,
              s = this.s;
            if (((e = (t = new F(t, e)).s), !s || !e)) return new F(NaN);
            if (s != e) return (t.s = -e), this.plus(t);
            var a = this.e / 14,
              l = t.e / 14,
              f = this.c,
              h = t.c;
            if (!a || !l) {
              if (!f || !h) return f ? ((t.s = -e), t) : new F(h ? this : NaN);
              if (!f[0] || !h[0])
                return h[0]
                  ? ((t.s = -e), t)
                  : new F(f[0] ? this : 3 == S ? -0 : 0);
            }
            if (((a = u(a)), (l = u(l)), (f = f.slice()), (s = a - l))) {
              for (
                (o = s < 0) ? ((s = -s), (i = f)) : ((l = a), (i = h)),
                  i.reverse(),
                  e = s;
                e--;
                i.push(0)
              );
              i.reverse();
            } else
              for (
                n = (o = (s = f.length) < (e = h.length)) ? s : e, s = e = 0;
                e < n;
                e++
              )
                if (f[e] != h[e]) {
                  o = f[e] < h[e];
                  break;
                }
            if (
              (o && ((i = f), (f = h), (h = i), (t.s = -t.s)),
              (e = (n = h.length) - (r = f.length)) > 0)
            )
              for (; e--; f[r++] = 0);
            for (e = 1e14 - 1; n > s; ) {
              if (f[--n] < h[n]) {
                for (r = n; r && !f[--r]; f[r] = e);
                --f[r], (f[n] += 1e14);
              }
              f[n] -= h[n];
            }
            for (; 0 == f[0]; f.splice(0, 1), --l);
            return f[0]
              ? q(t, f, l)
              : ((t.s = 3 == S ? -1 : 1), (t.c = [(t.e = 0)]), t);
          }),
          (_.modulo = _.mod =
            function (t, e) {
              var r, n;
              return ((t = new F(t, e)), this.c && t.s && (!t.c || t.c[0]))
                ? t.c && (!this.c || this.c[0])
                  ? (9 == O
                      ? ((n = t.s),
                        (t.s = 1),
                        (r = A(this, t, 0, 3)),
                        (t.s = n),
                        (r.s *= n))
                      : (r = A(this, t, 0, O)),
                    (t = this.minus(r.times(t))).c[0] ||
                      1 != O ||
                      (t.s = this.s),
                    t)
                  : new F(this)
                : new F(NaN);
            }),
          (_.multipliedBy = _.times =
            function (t, e) {
              var r,
                n,
                i,
                o,
                s,
                a,
                l,
                f,
                h,
                c,
                d,
                p,
                g,
                m = this.c,
                y = (t = new F(t, e)).c;
              if (!m || !y || !m[0] || !y[0])
                return (
                  this.s && t.s && (!m || m[0] || y) && (!y || y[0] || m)
                    ? ((t.s *= this.s),
                      m && y ? ((t.c = [0]), (t.e = 0)) : (t.c = t.e = null))
                    : (t.c = t.e = t.s = null),
                  t
                );
              for (
                n = u(this.e / 14) + u(t.e / 14),
                  t.s *= this.s,
                  (l = m.length) < (c = y.length) &&
                    ((g = m), (m = y), (y = g), (i = l), (l = c), (c = i)),
                  i = l + c,
                  g = [];
                i--;
                g.push(0)
              );
              for (i = c; --i >= 0; ) {
                for (
                  r = 0, d = y[i] % 1e7, p = (y[i] / 1e7) | 0, o = i + (s = l);
                  o > i;

                )
                  (a = p * (f = m[--s] % 1e7) + (h = (m[s] / 1e7) | 0) * d),
                    (r =
                      (((f = d * f + (a % 1e7) * 1e7 + g[o] + r) / 1e14) | 0) +
                      ((a / 1e7) | 0) +
                      p * h),
                    (g[o--] = f % 1e14);
                g[o] = r;
              }
              return r ? ++n : g.splice(0, 1), q(t, g, n);
            }),
          (_.negated = function () {
            var t = new F(this);
            return (t.s = -t.s || null), t;
          }),
          (_.plus = function (t, e) {
            var r,
              n = this.s;
            if (((e = (t = new F(t, e)).s), !n || !e)) return new F(NaN);
            if (n != e) return (t.s = -e), this.minus(t);
            var i = this.e / 14,
              o = t.e / 14,
              s = this.c,
              a = t.c;
            if (!i || !o) {
              if (!s || !a) return new F(n / 0);
              if (!s[0] || !a[0]) return a[0] ? t : new F(s[0] ? this : 0 * n);
            }
            if (((i = u(i)), (o = u(o)), (s = s.slice()), (n = i - o))) {
              for (
                n > 0 ? ((o = i), (r = a)) : ((n = -n), (r = s)), r.reverse();
                n--;
                r.push(0)
              );
              r.reverse();
            }
            for (
              (n = s.length) - (e = a.length) < 0 &&
                ((r = a), (a = s), (s = r), (e = n)),
                n = 0;
              e;

            )
              (n = ((s[--e] = s[e] + a[e] + n) / 1e14) | 0),
                (s[e] = 1e14 === s[e] ? 0 : s[e] % 1e14);
            return n && ((s = [n].concat(s)), ++o), q(t, s, o);
          }),
          (_.precision = _.sd =
            function (t, e) {
              var r, n, i;
              if (null != t && !!t !== t)
                return (
                  c(t, 1, 1e9),
                  null == e ? (e = S) : c(e, 0, 8),
                  H(new F(this), t, e)
                );
              if (!(r = this.c)) return null;
              if (((n = 14 * (i = r.length - 1) + 1), (i = r[i]))) {
                for (; i % 10 == 0; i /= 10, n--);
                for (i = r[0]; i >= 10; i /= 10, n++);
              }
              return t && this.e + 1 > n && (n = this.e + 1), n;
            }),
          (_.shiftedBy = function (t) {
            return (
              c(t, -0x1fffffffffffff, 0x1fffffffffffff), this.times("1e" + t)
            );
          }),
          (_.squareRoot = _.sqrt =
            function () {
              var t,
                e,
                r,
                n,
                i,
                o = this.c,
                s = this.s,
                a = this.e,
                l = N + 4,
                h = new F("0.5");
              if (1 !== s || !o || !o[0])
                return new F(
                  !s || (s < 0 && (!o || o[0])) ? NaN : o ? this : 1 / 0
                );
              if (
                (0 == (s = Math.sqrt(+z(this))) || s == 1 / 0
                  ? (((e = f(o)).length + a) % 2 == 0 && (e += "0"),
                    (s = Math.sqrt(+e)),
                    (a = u((a + 1) / 2) - (a < 0 || a % 2)),
                    (r = new F(
                      (e =
                        s == 1 / 0
                          ? "5e" + a
                          : (e = s.toExponential()).slice(
                              0,
                              e.indexOf("e") + 1
                            ) + a)
                    )))
                  : (r = new F(s + "")),
                r.c[0])
              ) {
                for ((s = (a = r.e) + l) < 3 && (s = 0); ; )
                  if (
                    ((i = r),
                    (r = h.times(i.plus(A(this, i, l, 1)))),
                    f(i.c).slice(0, s) === (e = f(r.c)).slice(0, s))
                  ) {
                    if (
                      (r.e < a && --s,
                      "9999" != (e = e.slice(s - 3, s + 1)) &&
                        (n || "4999" != e))
                    ) {
                      (+e && (+e.slice(1) || "5" != e.charAt(0))) ||
                        (H(r, r.e + N + 2, 1), (t = !r.times(r).eq(this)));
                      break;
                    }
                    if (!n && (H(i, i.e + N + 2, 0), i.times(i).eq(this))) {
                      r = i;
                      break;
                    }
                    (l += 4), (s += 4), (n = 1);
                  }
              }
              return H(r, r.e + N + 1, S, t);
            }),
          (_.toExponential = function (t, e) {
            return null != t && (c(t, 0, 1e9), t++), D(this, t, e, 1);
          }),
          (_.toFixed = function (t, e) {
            return (
              null != t && (c(t, 0, 1e9), (t = t + this.e + 1)), D(this, t, e)
            );
          }),
          (_.toFormat = function (t, e, r) {
            var n;
            if (null == r)
              null != t && e && "object" == typeof e
                ? ((r = e), (e = null))
                : t && "object" == typeof t
                ? ((r = t), (t = e = null))
                : (r = C);
            else if ("object" != typeof r)
              throw Error(s + "Argument not an object: " + r);
            if (((n = this.toFixed(t, e)), this.c)) {
              var i,
                o = n.split("."),
                a = +r.groupSize,
                l = +r.secondaryGroupSize,
                u = r.groupSeparator || "",
                f = o[0],
                h = o[1],
                c = this.s < 0,
                d = c ? f.slice(1) : f,
                p = d.length;
              if (
                (l && ((i = a), (a = l), (l = i), (p -= i)), a > 0 && p > 0)
              ) {
                for (i = p % a || a, f = d.substr(0, i); i < p; i += a)
                  f += u + d.substr(i, a);
                l > 0 && (f += u + d.slice(i)), c && (f = "-" + f);
              }
              n = h
                ? f +
                  (r.decimalSeparator || "") +
                  ((l = +r.fractionGroupSize)
                    ? h.replace(
                        RegExp("\\d{" + l + "}\\B", "g"),
                        "$&" + (r.fractionGroupSeparator || "")
                      )
                    : h)
                : f;
            }
            return (r.prefix || "") + n + (r.suffix || "");
          }),
          (_.toFraction = function (t) {
            var e,
              r,
              n,
              i,
              o,
              a,
              u,
              h,
              c,
              d,
              p,
              g,
              m = this.c;
            if (
              null != t &&
              ((!(u = new F(t)).isInteger() && (u.c || 1 !== u.s)) || u.lt(k))
            )
              throw Error(
                s +
                  "Argument " +
                  (u.isInteger() ? "out of range: " : "not an integer: ") +
                  z(u)
              );
            if (!m) return new F(this);
            for (
              e = new F(k),
                c = r = new F(k),
                n = h = new F(k),
                g = f(m),
                o = e.e = g.length - this.e - 1,
                e.c[0] = l[(a = o % 14) < 0 ? 14 + a : a],
                t = !t || u.comparedTo(e) > 0 ? (o > 0 ? e : c) : u,
                a = T,
                T = 1 / 0,
                u = new F(g),
                h.c[0] = 0;
              (d = A(u, e, 0, 1)), 1 != (i = r.plus(d.times(n))).comparedTo(t);

            )
              (r = n),
                (n = i),
                (c = h.plus(d.times((i = c)))),
                (h = i),
                (e = u.minus(d.times((i = e)))),
                (u = i);
            return (
              (i = A(t.minus(r), n, 0, 1)),
              (h = h.plus(i.times(c))),
              (r = r.plus(i.times(n))),
              (h.s = c.s = this.s),
              (o *= 2),
              (p =
                1 >
                A(c, n, o, S)
                  .minus(this)
                  .abs()
                  .comparedTo(A(h, r, o, S).minus(this).abs())
                  ? [c, n]
                  : [h, r]),
              (T = a),
              p
            );
          }),
          (_.toNumber = function () {
            return +z(this);
          }),
          (_.toPrecision = function (t, e) {
            return null != t && c(t, 1, 1e9), D(this, t, e, 2);
          }),
          (_.toString = function (t) {
            var e,
              r = this,
              n = r.s,
              i = r.e;
            return (
              null === i
                ? n
                  ? ((e = "Infinity"), n < 0 && (e = "-" + e))
                  : (e = "NaN")
                : (null == t
                    ? (e = i <= M || i >= I ? p(f(r.c), i) : g(f(r.c), i, "0"))
                    : 10 === t && U
                    ? (e = g(f((r = H(new F(r), N + i + 1, S)).c), r.e, "0"))
                    : (c(t, 2, L.length, "Base"),
                      (e = E(g(f(r.c), i, "0"), 10, t, n, !0))),
                  n < 0 && r.c[0] && (e = "-" + e)),
              e
            );
          }),
          (_.valueOf = _.toJSON =
            function () {
              return z(this);
            }),
          (_._isBigNumber = !0),
          (_[Symbol.toStringTag] = "BigNumber"),
          (_[Symbol.for("nodejs.util.inspect.custom")] = _.valueOf),
          null != e && F.set(e),
          F
        );
      })();
      let m = function (t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "•••",
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 5;
          if (null == t) return "";
          if (String(t).length <= 12) return t;
          let n = t.slice(0, r),
            i = t.slice(-r);
          return "".concat(n, " ").concat(e, " ").concat(i);
        },
        y = (t, e) => {
          var r, n;
          return null === (n = window) || void 0 === n
            ? void 0
            : null === (r = n.localStorage) || void 0 === r
            ? void 0
            : r.setItem(t, e);
        },
        v = (t) => {
          var e, r;
          return null === (r = window) || void 0 === r
            ? void 0
            : null === (e = r.localStorage) || void 0 === e
            ? void 0
            : e.getItem(t);
        },
        b = (t) => {
          var e, r;
          return null === (r = window) || void 0 === r
            ? void 0
            : null === (e = r.localStorage) || void 0 === e
            ? void 0
            : e.removeItem(t);
        },
        w = () => Math.floor((new Date() - new Date(1970, 0, 1)) / 864e5),
        A = () => {
          {
            var t, e;
            let r =
              window &&
              (null === (e = window) || void 0 === e
                ? void 0
                : null === (t = e.navigator) || void 0 === t
                ? void 0
                : t.userAgent);
            if (
              /android/i.test(r) ||
              /iPhone|iPad|iPod/.test(r) ||
              /webOS|BlackBerry|IEMobile|Opera Mini/i.test(r)
            )
              return !0;
          }
          return !1;
        },
        E = (t) =>
          new URLSearchParams(t.split("?")[1] || "").get("invite_code");
      function x(t, e) {
        return new Intl.NumberFormat("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: e,
        }).format(Number(t));
      }
    },
    9304: (t, e, r) => {
      "use strict";
      r.d(e, {
        Ak: () => eo,
        I5: () => et,
        Au: () => t8,
        NK: () => ee,
        Hd: () => t9,
        zg: () => t6,
        YS: () => t4,
        He: () => er,
        zH: () => t5,
        Rd: () => es,
        Zf: () => ei,
        Nz: () => en,
        l_: () => t7,
      });
      var n = r(9121),
        i = r(8366);
      let o = "providers/5.8.0";
      var s = r(9099),
        a = r(7457),
        l = r(8471),
        u = r(8402),
        f = r(234);
      let h = "hash/5.8.0";
      var c = r(8392);
      let d = new i.Vy(h),
        p = new Uint8Array(32);
      p.fill(0);
      let g = a.gH.from(-1),
        m = a.gH.from(0),
        y = a.gH.from(1),
        v = a.gH.from(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        ),
        b = (0, l.bj)(y.toHexString(), 32),
        w = (0, l.bj)(m.toHexString(), 32),
        A = {
          name: "string",
          version: "string",
          chainId: "uint256",
          verifyingContract: "address",
          salt: "bytes32",
        },
        E = ["name", "version", "chainId", "verifyingContract", "salt"];
      function x(t) {
        return function (e) {
          return (
            "string" != typeof e &&
              d.throwArgumentError(
                `invalid domain value for ${JSON.stringify(t)}`,
                `domain.${t}`,
                e
              ),
            e
          );
        };
      }
      let _ = {
        name: x("name"),
        version: x("version"),
        chainId: function (t) {
          try {
            return a.gH.from(t).toString();
          } catch (t) {}
          return d.throwArgumentError(
            'invalid domain value for "chainId"',
            "domain.chainId",
            t
          );
        },
        verifyingContract: function (t) {
          try {
            return (0, u.bv)(t).toLowerCase();
          } catch (t) {}
          return d.throwArgumentError(
            'invalid domain value "verifyingContract"',
            "domain.verifyingContract",
            t
          );
        },
        salt: function (t) {
          try {
            let e = (0, l.k9)(t);
            if (32 !== e.length) throw Error("bad length");
            return (0, l.c$)(e);
          } catch (t) {}
          return d.throwArgumentError(
            'invalid domain value "salt"',
            "domain.salt",
            t
          );
        },
      };
      function k(t) {
        {
          let e = t.match(/^(u?)int(\d*)$/);
          if (e) {
            let r = "" === e[1],
              n = parseInt(e[2] || "256");
            (n % 8 != 0 || n > 256 || (e[2] && e[2] !== String(n))) &&
              d.throwArgumentError("invalid numeric width", "type", t);
            let i = v.mask(r ? n - 1 : n),
              o = r ? i.add(y).mul(g) : m;
            return function (e) {
              let r = a.gH.from(e);
              return (
                (r.lt(o) || r.gt(i)) &&
                  d.throwArgumentError(
                    `value out-of-bounds for ${t}`,
                    "value",
                    e
                  ),
                (0, l.bj)(r.toTwos(256).toHexString(), 32)
              );
            };
          }
        }
        {
          let e = t.match(/^bytes(\d+)$/);
          if (e) {
            let r = parseInt(e[1]);
            return (
              (0 === r || r > 32 || e[1] !== String(r)) &&
                d.throwArgumentError("invalid bytes width", "type", t),
              function (e) {
                return (
                  (0, l.k9)(e).length !== r &&
                    d.throwArgumentError(`invalid length for ${t}`, "value", e),
                  (function (t) {
                    let e = (0, l.k9)(t),
                      r = e.length % 32;
                    return r ? (0, l.qn)([e, p.slice(r)]) : (0, l.c$)(e);
                  })(e)
                );
              }
            );
          }
        }
        switch (t) {
          case "address":
            return function (t) {
              return (0, l.bj)((0, u.bv)(t), 32);
            };
          case "bool":
            return function (t) {
              return t ? b : w;
            };
          case "bytes":
            return function (t) {
              return (0, f.S)(t);
            };
          case "string":
            return function (t) {
              return (0, c.id)(t);
            };
        }
        return null;
      }
      function N(t, e) {
        return `${t}(${e
          .map(({ name: t, type: e }) => e + " " + t)
          .join(",")})`;
      }
      class S {
        constructor(t) {
          (0, n.yY)(this, "types", Object.freeze((0, n.A4)(t))),
            (0, n.yY)(this, "_encoderCache", {}),
            (0, n.yY)(this, "_types", {});
          let e = {},
            r = {},
            i = {};
          for (let n in (Object.keys(t).forEach((t) => {
            (e[t] = {}), (r[t] = []), (i[t] = {});
          }),
          t)) {
            let i = {};
            t[n].forEach((o) => {
              i[o.name] &&
                d.throwArgumentError(
                  `duplicate variable name ${JSON.stringify(
                    o.name
                  )} in ${JSON.stringify(n)}`,
                  "types",
                  t
                ),
                (i[o.name] = !0);
              let s = o.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
              s === n &&
                d.throwArgumentError(
                  `circular type reference to ${JSON.stringify(s)}`,
                  "types",
                  t
                ),
                k(s) ||
                  (r[s] ||
                    d.throwArgumentError(
                      `unknown type ${JSON.stringify(s)}`,
                      "types",
                      t
                    ),
                  r[s].push(n),
                  (e[n][s] = !0));
            });
          }
          let o = Object.keys(r).filter((t) => 0 === r[t].length);
          for (let s in (0 === o.length
            ? d.throwArgumentError("missing primary type", "types", t)
            : o.length > 1 &&
              d.throwArgumentError(
                `ambiguous primary types or unused types: ${o
                  .map((t) => JSON.stringify(t))
                  .join(", ")}`,
                "types",
                t
              ),
          (0, n.yY)(this, "primaryType", o[0]),
          !(function n(o, s) {
            s[o] &&
              d.throwArgumentError(
                `circular type reference to ${JSON.stringify(o)}`,
                "types",
                t
              ),
              (s[o] = !0),
              Object.keys(e[o]).forEach((t) => {
                r[t] &&
                  (n(t, s),
                  Object.keys(s).forEach((e) => {
                    i[e][t] = !0;
                  }));
              }),
              delete s[o];
          })(this.primaryType, {}),
          i)) {
            let e = Object.keys(i[s]);
            e.sort(),
              (this._types[s] = N(s, t[s]) + e.map((e) => N(e, t[e])).join(""));
          }
        }
        getEncoder(t) {
          let e = this._encoderCache[t];
          return e || (e = this._encoderCache[t] = this._getEncoder(t)), e;
        }
        _getEncoder(t) {
          {
            let e = k(t);
            if (e) return e;
          }
          let e = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (e) {
            let t = e[1],
              r = this.getEncoder(t),
              n = parseInt(e[3]);
            return (e) => {
              n >= 0 &&
                e.length !== n &&
                d.throwArgumentError(
                  "array length mismatch; expected length ${ arrayLength }",
                  "value",
                  e
                );
              let i = e.map(r);
              return this._types[t] && (i = i.map(f.S)), (0, f.S)((0, l.qn)(i));
            };
          }
          let r = this.types[t];
          if (r) {
            let e = (0, c.id)(this._types[t]);
            return (t) => {
              let n = r.map(({ name: e, type: r }) => {
                let n = this.getEncoder(r)(t[e]);
                return this._types[r] ? (0, f.S)(n) : n;
              });
              return n.unshift(e), (0, l.qn)(n);
            };
          }
          return d.throwArgumentError(`unknown type: ${t}`, "type", t);
        }
        encodeType(t) {
          let e = this._types[t];
          return (
            e ||
              d.throwArgumentError(
                `unknown type: ${JSON.stringify(t)}`,
                "name",
                t
              ),
            e
          );
        }
        encodeData(t, e) {
          return this.getEncoder(t)(e);
        }
        hashStruct(t, e) {
          return (0, f.S)(this.encodeData(t, e));
        }
        encode(t) {
          return this.encodeData(this.primaryType, t);
        }
        hash(t) {
          return this.hashStruct(this.primaryType, t);
        }
        _visit(t, e, r) {
          if (k(t)) return r(t, e);
          let n = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (n) {
            let t = n[1],
              i = parseInt(n[3]);
            return (
              i >= 0 &&
                e.length !== i &&
                d.throwArgumentError(
                  "array length mismatch; expected length ${ arrayLength }",
                  "value",
                  e
                ),
              e.map((e) => this._visit(t, e, r))
            );
          }
          let i = this.types[t];
          return i
            ? i.reduce(
                (t, { name: n, type: i }) => (
                  (t[n] = this._visit(i, e[n], r)), t
                ),
                {}
              )
            : d.throwArgumentError(`unknown type: ${t}`, "type", t);
        }
        visit(t, e) {
          return this._visit(this.primaryType, t, e);
        }
        static from(t) {
          return new S(t);
        }
        static getPrimaryType(t) {
          return S.from(t).primaryType;
        }
        static hashStruct(t, e, r) {
          return S.from(e).hashStruct(t, r);
        }
        static hashDomain(t) {
          let e = [];
          for (let r in t) {
            let n = A[r];
            n ||
              d.throwArgumentError(
                `invalid typed-data domain key: ${JSON.stringify(r)}`,
                "domain",
                t
              ),
              e.push({ name: r, type: n });
          }
          return (
            e.sort((t, e) => E.indexOf(t.name) - E.indexOf(e.name)),
            S.hashStruct("EIP712Domain", { EIP712Domain: e }, t)
          );
        }
        static encode(t, e, r) {
          return (0, l.qn)(["0x1901", S.hashDomain(t), S.from(e).hash(r)]);
        }
        static hash(t, e, r) {
          return (0, f.S)(S.encode(t, e, r));
        }
        static resolveNames(t, e, r, i) {
          var o, s, a, u;
          return (
            (o = this),
            (s = void 0),
            (a = void 0),
            (u = function* () {
              t = (0, n.Ic)(t);
              let o = {};
              t.verifyingContract &&
                !(0, l.Lo)(t.verifyingContract, 20) &&
                (o[t.verifyingContract] = "0x");
              let s = S.from(e);
              for (let t in (s.visit(
                r,
                (t, e) => (
                  "address" !== t || (0, l.Lo)(e, 20) || (o[e] = "0x"), e
                )
              ),
              o))
                o[t] = yield i(t);
              return (
                t.verifyingContract &&
                  o[t.verifyingContract] &&
                  (t.verifyingContract = o[t.verifyingContract]),
                (r = s.visit(r, (t, e) =>
                  "address" === t && o[e] ? o[e] : e
                )),
                { domain: t, value: r }
              );
            }),
            new (a || (a = Promise))(function (t, e) {
              function r(t) {
                try {
                  i(u.next(t));
                } catch (t) {
                  e(t);
                }
              }
              function n(t) {
                try {
                  i(u.throw(t));
                } catch (t) {
                  e(t);
                }
              }
              function i(e) {
                var i;
                e.done
                  ? t(e.value)
                  : ((i = e.value) instanceof a
                      ? i
                      : new a(function (t) {
                          t(i);
                        })
                    ).then(r, n);
              }
              i((u = u.apply(o, s || [])).next());
            })
          );
        }
        static getPayload(t, e, r) {
          S.hashDomain(t);
          let i = {},
            o = [];
          E.forEach((e) => {
            let r = t[e];
            null != r && ((i[e] = _[e](r)), o.push({ name: e, type: A[e] }));
          });
          let s = S.from(e),
            u = (0, n.Ic)(e);
          return (
            u.EIP712Domain
              ? d.throwArgumentError(
                  "types must not contain EIP712Domain type",
                  "types.EIP712Domain",
                  e
                )
              : (u.EIP712Domain = o),
            s.encode(r),
            {
              types: u,
              domain: i,
              primaryType: s.primaryType,
              message: s.visit(r, (t, e) => {
                if (t.match(/^bytes(\d*)/)) return (0, l.c$)((0, l.k9)(e));
                if (t.match(/^u?int/)) return a.gH.from(e).toString();
                switch (t) {
                  case "address":
                    return e.toLowerCase();
                  case "bool":
                    return !!e;
                  case "string":
                    return (
                      "string" != typeof e &&
                        d.throwArgumentError("invalid string", "value", e),
                      e
                    );
                }
                return d.throwArgumentError("unsupported type", "type", t);
              }),
            }
          );
        }
      }
      var M = r(1414),
        I = r(5718);
      function R(t) {
        t = atob(t);
        let e = [];
        for (let r = 0; r < t.length; r++) e.push(t.charCodeAt(r));
        return (0, l.k9)(e);
      }
      function T(t) {
        t = (0, l.k9)(t);
        let e = "";
        for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
        return btoa(e);
      }
      let P = new i.Vy("web/5.8.0");
      function O(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      function B(t, e) {
        if (null == t) return null;
        if ("string" == typeof t) return t;
        if ((0, l.f)(t)) {
          if (
            e &&
            ("text" === e.split("/")[0] ||
              "application/json" === e.split(";")[0].trim())
          )
            try {
              return (0, M._v)(t);
            } catch (t) {}
          return (0, l.c$)(t);
        }
        return t;
      }
      function C(t, e, r) {
        let o = null;
        if (null != e) {
          o = (0, M.YW)(e);
          let r = "string" == typeof t ? { url: t } : (0, n.Ic)(t);
          r.headers
            ? 0 !==
                Object.keys(r.headers).filter(
                  (t) => "content-type" === t.toLowerCase()
                ).length ||
              ((r.headers = (0, n.Ic)(r.headers)),
              (r.headers["content-type"] = "application/json"))
            : (r.headers = { "content-type": "application/json" }),
            (t = r);
        }
        return (function (t, e, r) {
          let o;
          let s =
            "object" == typeof t && null != t.throttleLimit
              ? t.throttleLimit
              : 12;
          P.assertArgument(
            s > 0 && s % 1 == 0,
            "invalid connection throttle limit",
            "connection.throttleLimit",
            s
          );
          let a = "object" == typeof t ? t.throttleCallback : null,
            u =
              "object" == typeof t && "number" == typeof t.throttleSlotInterval
                ? t.throttleSlotInterval
                : 100;
          P.assertArgument(
            u > 0 && u % 1 == 0,
            "invalid connection throttle slot interval",
            "connection.throttleSlotInterval",
            u
          );
          let f = "object" == typeof t && !!t.errorPassThrough,
            h = {},
            c = null,
            d = { method: "GET" },
            p = !1,
            g = 12e4;
          if ("string" == typeof t) c = t;
          else if ("object" == typeof t) {
            if (
              ((null == t || null == t.url) &&
                P.throwArgumentError("missing URL", "connection.url", t),
              (c = t.url),
              "number" == typeof t.timeout && t.timeout > 0 && (g = t.timeout),
              t.headers)
            )
              for (let e in t.headers)
                (h[e.toLowerCase()] = { key: e, value: String(t.headers[e]) }),
                  ["if-none-match", "if-modified-since"].indexOf(
                    e.toLowerCase()
                  ) >= 0 && (p = !0);
            if (
              ((d.allowGzip = !!t.allowGzip),
              null != t.user && null != t.password)
            ) {
              "https:" !== c.substring(0, 6) &&
                !0 !== t.allowInsecureAuthentication &&
                P.throwError(
                  "basic authentication requires a secure https url",
                  i.Vy.errors.INVALID_ARGUMENT,
                  {
                    argument: "url",
                    url: c,
                    user: t.user,
                    password: "[REDACTED]",
                  }
                );
              let e = t.user + ":" + t.password;
              h.authorization = {
                key: "Authorization",
                value: "Basic " + T((0, M.YW)(e)),
              };
            }
            null != t.skipFetchSetup && (d.skipFetchSetup = !!t.skipFetchSetup),
              null != t.fetchOptions &&
                (d.fetchOptions = (0, n.Ic)(t.fetchOptions));
          }
          let m = RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
            y = c ? c.match(m) : null;
          if (y)
            try {
              var v;
              let t = {
                  statusCode: 200,
                  statusMessage: "OK",
                  headers: { "content-type": y[1] || "text/plain" },
                  body: y[2]
                    ? R(y[3])
                    : ((v = y[3]),
                      (0, M.YW)(
                        v.replace(/%([0-9a-f][0-9a-f])/gi, (t, e) =>
                          String.fromCharCode(parseInt(e, 16))
                        )
                      )),
                },
                e = t.body;
              return r && (e = r(t.body, t)), Promise.resolve(e);
            } catch (t) {
              P.throwError(
                "processing response error",
                i.Vy.errors.SERVER_ERROR,
                {
                  body: B(y[1], y[2]),
                  error: t,
                  requestBody: null,
                  requestMethod: "GET",
                  url: c,
                }
              );
            }
          e &&
            ((d.method = "POST"),
            (d.body = e),
            null == h["content-type"] &&
              (h["content-type"] = {
                key: "Content-Type",
                value: "application/octet-stream",
              }),
            null == h["content-length"] &&
              (h["content-length"] = {
                key: "Content-Length",
                value: String(e.length),
              }));
          let b = {};
          Object.keys(h).forEach((t) => {
            let e = h[t];
            b[e.key] = e.value;
          }),
            (d.headers = b);
          let w =
              ((o = null),
              {
                promise: new Promise(function (t, e) {
                  g &&
                    (o = setTimeout(() => {
                      null != o &&
                        ((o = null),
                        e(
                          P.makeError("timeout", i.Vy.errors.TIMEOUT, {
                            requestBody: B(d.body, b["content-type"]),
                            requestMethod: d.method,
                            timeout: g,
                            url: c,
                          })
                        ));
                    }, g));
                }),
                cancel: function () {
                  null != o && (clearTimeout(o), (o = null));
                },
              }),
            A = (function () {
              var t, e, n, o;
              return (
                (t = this),
                (e = void 0),
                (n = void 0),
                (o = function* () {
                  for (let t = 0; t < s; t++) {
                    let e = null;
                    try {
                      if (
                        ((e = yield (function (t, e) {
                          var r, n, i, o;
                          return (
                            (r = this),
                            (n = void 0),
                            (i = void 0),
                            (o = function* () {
                              null == e && (e = {});
                              let r = {
                                method: e.method || "GET",
                                headers: e.headers || {},
                                body: e.body || void 0,
                              };
                              if (
                                (!0 !== e.skipFetchSetup &&
                                  ((r.mode = "cors"),
                                  (r.cache = "no-cache"),
                                  (r.credentials = "same-origin"),
                                  (r.redirect = "follow"),
                                  (r.referrer = "client")),
                                null != e.fetchOptions)
                              ) {
                                let t = e.fetchOptions;
                                t.mode && (r.mode = t.mode),
                                  t.cache && (r.cache = t.cache),
                                  t.credentials &&
                                    (r.credentials = t.credentials),
                                  t.redirect && (r.redirect = t.redirect),
                                  t.referrer && (r.referrer = t.referrer);
                              }
                              let n = yield fetch(t, r),
                                i = yield n.arrayBuffer(),
                                o = {};
                              return (
                                n.headers.forEach
                                  ? n.headers.forEach((t, e) => {
                                      o[e.toLowerCase()] = t;
                                    })
                                  : n.headers.keys().forEach((t) => {
                                      o[t.toLowerCase()] = n.headers.get(t);
                                    }),
                                {
                                  headers: o,
                                  statusCode: n.status,
                                  statusMessage: n.statusText,
                                  body: (0, l.k9)(new Uint8Array(i)),
                                }
                              );
                            }),
                            new (i || (i = Promise))(function (t, e) {
                              function s(t) {
                                try {
                                  l(o.next(t));
                                } catch (t) {
                                  e(t);
                                }
                              }
                              function a(t) {
                                try {
                                  l(o.throw(t));
                                } catch (t) {
                                  e(t);
                                }
                              }
                              function l(e) {
                                var r;
                                e.done
                                  ? t(e.value)
                                  : ((r = e.value) instanceof i
                                      ? r
                                      : new i(function (t) {
                                          t(r);
                                        })
                                    ).then(s, a);
                              }
                              l((o = o.apply(r, n || [])).next());
                            })
                          );
                        })(c, d)),
                        t < s)
                      ) {
                        if (301 === e.statusCode || 302 === e.statusCode) {
                          let t = e.headers.location || "";
                          if ("GET" === d.method && t.match(/^https:/)) {
                            c = e.headers.location;
                            continue;
                          }
                        } else if (429 === e.statusCode) {
                          let r = !0;
                          if ((a && (r = yield a(t, c)), r)) {
                            let r = 0,
                              n = e.headers["retry-after"];
                            (r =
                              "string" == typeof n && n.match(/^[1-9][0-9]*$/)
                                ? 1e3 * parseInt(n)
                                : u *
                                  parseInt(
                                    String(Math.random() * Math.pow(2, t))
                                  )),
                              yield O(r);
                            continue;
                          }
                        }
                      }
                    } catch (t) {
                      null == (e = t.response) &&
                        (w.cancel(),
                        P.throwError(
                          "missing response",
                          i.Vy.errors.SERVER_ERROR,
                          {
                            requestBody: B(d.body, b["content-type"]),
                            requestMethod: d.method,
                            serverError: t,
                            url: c,
                          }
                        ));
                    }
                    let n = e.body;
                    if (
                      (p && 304 === e.statusCode
                        ? (n = null)
                        : !f &&
                          (e.statusCode < 200 || e.statusCode >= 300) &&
                          (w.cancel(),
                          P.throwError(
                            "bad response",
                            i.Vy.errors.SERVER_ERROR,
                            {
                              status: e.statusCode,
                              headers: e.headers,
                              body: B(
                                n,
                                e.headers ? e.headers["content-type"] : null
                              ),
                              requestBody: B(d.body, b["content-type"]),
                              requestMethod: d.method,
                              url: c,
                            }
                          )),
                      r)
                    )
                      try {
                        let t = yield r(n, e);
                        return w.cancel(), t;
                      } catch (r) {
                        if (r.throttleRetry && t < s) {
                          let e = !0;
                          if ((a && (e = yield a(t, c)), e)) {
                            let e =
                              u *
                              parseInt(String(Math.random() * Math.pow(2, t)));
                            yield O(e);
                            continue;
                          }
                        }
                        w.cancel(),
                          P.throwError(
                            "processing response error",
                            i.Vy.errors.SERVER_ERROR,
                            {
                              body: B(
                                n,
                                e.headers ? e.headers["content-type"] : null
                              ),
                              error: r,
                              requestBody: B(d.body, b["content-type"]),
                              requestMethod: d.method,
                              url: c,
                            }
                          );
                      }
                    return w.cancel(), n;
                  }
                  return P.throwError(
                    "failed response",
                    i.Vy.errors.SERVER_ERROR,
                    {
                      requestBody: B(d.body, b["content-type"]),
                      requestMethod: d.method,
                      url: c,
                    }
                  );
                }),
                new (n || (n = Promise))(function (r, i) {
                  function s(t) {
                    try {
                      l(o.next(t));
                    } catch (t) {
                      i(t);
                    }
                  }
                  function a(t) {
                    try {
                      l(o.throw(t));
                    } catch (t) {
                      i(t);
                    }
                  }
                  function l(t) {
                    var e;
                    t.done
                      ? r(t.value)
                      : ((e = t.value) instanceof n
                          ? e
                          : new n(function (t) {
                              t(e);
                            })
                        ).then(s, a);
                  }
                  l((o = o.apply(t, e || [])).next());
                })
              );
            })();
          return Promise.race([w.promise, A]);
        })(t, o, (t, e) => {
          let n = null;
          if (null != t)
            try {
              n = JSON.parse((0, M._v)(t));
            } catch (e) {
              P.throwError("invalid JSON", i.Vy.errors.SERVER_ERROR, {
                body: t,
                error: e,
              });
            }
          return r && (n = r(n, e)), n;
        });
      }
      function L(t, e) {
        return (
          e || (e = {}),
          null == (e = (0, n.Ic)(e)).floor && (e.floor = 0),
          null == e.ceiling && (e.ceiling = 1e4),
          null == e.interval && (e.interval = 250),
          new Promise(function (r, n) {
            let i = null,
              o = !1,
              s = () => !o && ((o = !0), i && clearTimeout(i), !0);
            e.timeout &&
              (i = setTimeout(() => {
                s() && n(Error("timeout"));
              }, e.timeout));
            let a = e.retryLimit,
              l = 0;
            !(function i() {
              return t().then(
                function (t) {
                  if (void 0 !== t) s() && r(t);
                  else if (e.oncePoll) e.oncePoll.once("poll", i);
                  else if (e.onceBlock) e.onceBlock.once("block", i);
                  else if (!o) {
                    if (++l > a) {
                      s() && n(Error("retry limit reached"));
                      return;
                    }
                    let t =
                      e.interval *
                      parseInt(String(Math.random() * Math.pow(2, l)));
                    t < e.floor && (t = e.floor),
                      t > e.ceiling && (t = e.ceiling),
                      setTimeout(i, t);
                  }
                  return null;
                },
                function (t) {
                  s() && n(t);
                }
              );
            })();
          })
        );
      }
      var U = r(5610);
      class F {
        constructor(t) {
          (0, n.yY)(this, "alphabet", t),
            (0, n.yY)(this, "base", t.length),
            (0, n.yY)(this, "_alphabetMap", {}),
            (0, n.yY)(this, "_leader", t.charAt(0));
          for (let e = 0; e < t.length; e++) this._alphabetMap[t.charAt(e)] = e;
        }
        encode(t) {
          let e = (0, l.k9)(t);
          if (0 === e.length) return "";
          let r = [0];
          for (let t = 0; t < e.length; ++t) {
            let n = e[t];
            for (let t = 0; t < r.length; ++t)
              (n += r[t] << 8),
                (r[t] = n % this.base),
                (n = (n / this.base) | 0);
            for (; n > 0; ) r.push(n % this.base), (n = (n / this.base) | 0);
          }
          let n = "";
          for (let t = 0; 0 === e[t] && t < e.length - 1; ++t)
            n += this._leader;
          for (let t = r.length - 1; t >= 0; --t) n += this.alphabet[r[t]];
          return n;
        }
        decode(t) {
          if ("string" != typeof t) throw TypeError("Expected String");
          let e = [];
          if (0 === t.length) return new Uint8Array(e);
          e.push(0);
          for (let r = 0; r < t.length; r++) {
            let n = this._alphabetMap[t[r]];
            if (void 0 === n)
              throw Error("Non-base" + this.base + " character");
            let i = n;
            for (let t = 0; t < e.length; ++t)
              (i += e[t] * this.base), (e[t] = 255 & i), (i >>= 8);
            for (; i > 0; ) e.push(255 & i), (i >>= 8);
          }
          for (let r = 0; t[r] === this._leader && r < t.length - 1; ++r)
            e.push(0);
          return (0, l.k9)(new Uint8Array(e.reverse()));
        }
      }
      new F("abcdefghijklmnopqrstuvwxyz234567");
      let D = new F(
        "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
      );
      function j(t, e) {
        null == e && (e = 1);
        let r = [],
          n = r.forEach,
          i = function (t, e) {
            n.call(t, function (t) {
              e > 0 && Array.isArray(t) ? i(t, e - 1) : r.push(t);
            });
          };
        return i(t, e), r;
      }
      function q(t, e) {
        let r = Array(t);
        for (let n = 0, i = -1; n < t; n++) r[n] = i += 1 + e();
        return r;
      }
      function H(t, e) {
        let r = q(t(), t),
          n = t(),
          i = q(n, t),
          o = (function (t, e) {
            let r = Array(t);
            for (let n = 0; n < t; n++) r[n] = 1 + e();
            return r;
          })(n, t);
        for (let t = 0; t < n; t++)
          for (let e = 0; e < o[t]; e++) r.push(i[t] + e);
        return e ? r.map((t) => e[t]) : r;
      }
      function z(t, e, r) {
        let n = Array(t)
          .fill(void 0)
          .map(() => []);
        for (let i = 0; i < e; i++)
          (function (t, e) {
            let r = Array(t);
            for (let i = 0, o = 0; i < t; i++) {
              var n;
              r[i] = o += 1 & (n = e()) ? ~n >> 1 : n >> 1;
            }
            return r;
          })(t, r).forEach((t, e) => n[e].push(t));
        return n;
      }
      let G = (function () {
          var t;
          let e;
          return (
            (t = (function (t) {
              let e = 0;
              function r() {
                return (t[e++] << 8) | t[e++];
              }
              let n = r(),
                i = 1,
                o = [0, 1];
              for (let t = 1; t < n; t++) o.push((i += r()));
              let s = r(),
                a = e;
              e += s;
              let l = 0,
                u = 0;
              function f() {
                return (
                  0 == l && ((u = (u << 8) | t[e++]), (l = 8)), (u >> --l) & 1
                );
              }
              let h = 0;
              for (let t = 0; t < 31; t++) h = (h << 1) | f();
              let c = [],
                d = 0,
                p = 0x80000000;
              for (;;) {
                let t = Math.floor(((h - d + 1) * i - 1) / p),
                  e = 0,
                  r = n;
                for (; r - e > 1; ) {
                  let n = (e + r) >>> 1;
                  t < o[n] ? (r = n) : (e = n);
                }
                if (0 == e) break;
                c.push(e);
                let s = d + Math.floor((p * o[e]) / i),
                  a = d + Math.floor((p * o[e + 1]) / i) - 1;
                for (; ((s ^ a) & 0x40000000) == 0; )
                  (h = ((h << 1) & 0x7fffffff) | f()),
                    (s = (s << 1) & 0x7fffffff),
                    (a = ((a << 1) & 0x7fffffff) | 1);
                for (; s & ~a & 0x20000000; )
                  (h = (0x40000000 & h) | ((h << 1) & 0x3fffffff) | f()),
                    (s = (s << 1) ^ 0x40000000),
                    (a = ((0x40000000 ^ a) << 1) | 0x40000001);
                (d = s), (p = 1 + a - s);
              }
              let g = n - 4;
              return c.map((e) => {
                switch (e - g) {
                  case 3:
                    return (
                      g + 65792 + ((t[a++] << 16) | (t[a++] << 8) | t[a++])
                    );
                  case 2:
                    return g + 256 + ((t[a++] << 8) | t[a++]);
                  case 1:
                    return g + t[a++];
                  default:
                    return e - 1;
                }
              });
            })(
              R(
                "AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="
              )
            )),
            (e = 0),
            () => t[e++]
          );
        })(),
        V = new Set(H(G)),
        Y = new Set(H(G)),
        J = (function (t) {
          let e = [];
          for (;;) {
            let r = t();
            if (0 == r) break;
            e.push(
              (function (t, e) {
                let r = 1 + e(),
                  n = e(),
                  i = (function (t) {
                    let e = [];
                    for (;;) {
                      let r = t();
                      if (0 == r) break;
                      e.push(r);
                    }
                    return e;
                  })(e);
                return j(
                  z(i.length, 1 + t, e).map((t, e) => {
                    let o = t[0],
                      s = t.slice(1);
                    return Array(i[e])
                      .fill(void 0)
                      .map((t, e) => {
                        let i = e * n;
                        return [o + e * r, s.map((t) => t + i)];
                      });
                  })
                );
              })(r, t)
            );
          }
          for (;;) {
            let r = t() - 1;
            if (r < 0) break;
            e.push(z(1 + t(), 1 + r, t).map((t) => [t[0], t.slice(1)]));
          }
          return (function (t) {
            let e = {};
            for (let r = 0; r < t.length; r++) {
              let n = t[r];
              e[n[0]] = n[1];
            }
            return e;
          })(j(e));
        })(G),
        K = (function (t) {
          let e = H(t).sort((t, e) => t - e);
          return (function r() {
            let n = [];
            for (;;) {
              let i = H(t, e);
              if (0 == i.length) break;
              n.push({ set: new Set(i), node: r() });
            }
            n.sort((t, e) => e.set.size - t.set.size);
            let i = t();
            return {
              branches: n,
              valid: i % 3,
              fe0f: !!(1 & (i = (i / 3) | 0)),
              save: 1 == (i >>= 1),
              check: 2 == i,
            };
          })();
        })(G);
      function W(t) {
        return t.filter((t) => 65039 != t);
      }
      function Q(t) {
        for (let e of t.split(".")) {
          let t = (0, M.dg)(e);
          try {
            for (let e = t.lastIndexOf(95) - 1; e >= 0; e--)
              if (95 !== t[e]) throw Error("underscore only allowed at start");
            if (
              t.length >= 4 &&
              t.every((t) => t < 128) &&
              45 === t[2] &&
              45 === t[3]
            )
              throw Error("invalid label extension");
          } catch (t) {
            throw Error(`Invalid label "${e}": ${t.message}`);
          }
        }
        return t;
      }
      let X = new i.Vy(h),
        Z = new Uint8Array(32);
      function $(t) {
        if (0 === t.length) throw Error("invalid ENS name; empty component");
        return t;
      }
      function tt(t) {
        let e = (0, M.YW)(
            Q(
              (function (t, e) {
                let r = (0, M.dg)(t).reverse(),
                  n = [];
                for (; r.length; ) {
                  let t = (function (t, e) {
                    var r;
                    let n, i;
                    let o = K,
                      s = [],
                      a = t.length;
                    for (; a; ) {
                      let e = t[--a];
                      if (
                        !(o =
                          null === (r = o.branches.find((t) => t.set.has(e))) ||
                          void 0 === r
                            ? void 0
                            : r.node)
                      )
                        break;
                      if (o.save) i = e;
                      else if (o.check && e === i) break;
                      s.push(e),
                        o.fe0f &&
                          (s.push(65039), a > 0 && 65039 == t[a - 1] && a--),
                        o.valid &&
                          ((n = s.slice()),
                          2 == o.valid && n.splice(1, 1),
                          (t.length = a));
                    }
                    return n;
                  })(r);
                  if (t) {
                    n.push(...e(t));
                    continue;
                  }
                  let i = r.pop();
                  if (V.has(i)) {
                    n.push(i);
                    continue;
                  }
                  if (Y.has(i)) continue;
                  let o = J[i];
                  if (o) {
                    n.push(...o);
                    continue;
                  }
                  throw Error(
                    `Disallowed codepoint: 0x${i.toString(16).toUpperCase()}`
                  );
                }
                return Q(String.fromCodePoint(...n).normalize("NFC"));
              })(t, W)
            )
          ),
          r = [];
        if (0 === t.length) return r;
        let n = 0;
        for (let t = 0; t < e.length; t++)
          46 === e[t] && (r.push($(e.slice(n, t))), (n = t + 1));
        if (n >= e.length) throw Error("invalid ENS name; empty component");
        return r.push($(e.slice(n))), r;
      }
      function te(t) {
        "string" != typeof t &&
          X.throwArgumentError("invalid ENS name; not a string", "name", t);
        let e = Z,
          r = tt(t);
        for (; r.length; ) e = (0, f.S)((0, l.xW)([e, (0, f.S)(r.pop())]));
        return (0, l.c$)(e);
      }
      Z.fill(0);
      let tr = new i.Vy("networks/5.8.0");
      function tn(t) {
        let e = function (e, r) {
          null == r && (r = {});
          let n = [];
          if (e.InfuraProvider && "-" !== r.infura)
            try {
              n.push(new e.InfuraProvider(t, r.infura));
            } catch (t) {}
          if (e.EtherscanProvider && "-" !== r.etherscan)
            try {
              n.push(new e.EtherscanProvider(t, r.etherscan));
            } catch (t) {}
          if (e.AlchemyProvider && "-" !== r.alchemy)
            try {
              n.push(new e.AlchemyProvider(t, r.alchemy));
            } catch (t) {}
          if (e.PocketProvider && "-" !== r.pocket)
            try {
              let i = new e.PocketProvider(t, r.pocket);
              i.network &&
                -1 ===
                  ["goerli", "ropsten", "rinkeby", "sepolia"].indexOf(
                    i.network.name
                  ) &&
                n.push(i);
            } catch (t) {}
          if (e.CloudflareProvider && "-" !== r.cloudflare)
            try {
              n.push(new e.CloudflareProvider(t));
            } catch (t) {}
          if (e.AnkrProvider && "-" !== r.ankr)
            try {
              let i = new e.AnkrProvider(t, r.ankr);
              i.network &&
                -1 === ["ropsten"].indexOf(i.network.name) &&
                n.push(i);
            } catch (t) {}
          if (e.QuickNodeProvider && "-" !== r.quicknode)
            try {
              n.push(new e.QuickNodeProvider(t, r.quicknode));
            } catch (t) {}
          if (0 === n.length) return null;
          if (e.FallbackProvider) {
            let i = 1;
            return (
              null != r.quorum ? (i = r.quorum) : "homestead" === t && (i = 2),
              new e.FallbackProvider(n, i)
            );
          }
          return n[0];
        };
        return (
          (e.renetwork = function (t) {
            return tn(t);
          }),
          e
        );
      }
      function ti(t, e) {
        let r = function (r, n) {
          return r.JsonRpcProvider ? new r.JsonRpcProvider(t, e) : null;
        };
        return (
          (r.renetwork = function (e) {
            return ti(t, e);
          }),
          r
        );
      }
      let to = {
          chainId: 1,
          ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          name: "homestead",
          _defaultProvider: tn("homestead"),
        },
        ts = {
          chainId: 3,
          ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          name: "ropsten",
          _defaultProvider: tn("ropsten"),
        },
        ta = {
          chainId: 63,
          name: "classicMordor",
          _defaultProvider: ti(
            "https://www.ethercluster.com/mordor",
            "classicMordor"
          ),
        },
        tl = {
          unspecified: { chainId: 0, name: "unspecified" },
          homestead: to,
          mainnet: to,
          morden: { chainId: 2, name: "morden" },
          ropsten: ts,
          testnet: ts,
          rinkeby: {
            chainId: 4,
            ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            name: "rinkeby",
            _defaultProvider: tn("rinkeby"),
          },
          kovan: { chainId: 42, name: "kovan", _defaultProvider: tn("kovan") },
          goerli: {
            chainId: 5,
            ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            name: "goerli",
            _defaultProvider: tn("goerli"),
          },
          kintsugi: { chainId: 1337702, name: "kintsugi" },
          sepolia: {
            chainId: 0xaa36a7,
            ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            name: "sepolia",
            _defaultProvider: tn("sepolia"),
          },
          holesky: {
            chainId: 17e3,
            name: "holesky",
            _defaultProvider: tn("holesky"),
          },
          classic: {
            chainId: 61,
            name: "classic",
            _defaultProvider: ti("https://www.ethercluster.com/etc", "classic"),
          },
          classicMorden: { chainId: 62, name: "classicMorden" },
          classicMordor: ta,
          classicTestnet: ta,
          classicKotti: {
            chainId: 6,
            name: "classicKotti",
            _defaultProvider: ti(
              "https://www.ethercluster.com/kotti",
              "classicKotti"
            ),
          },
          xdai: { chainId: 100, name: "xdai" },
          matic: { chainId: 137, name: "matic", _defaultProvider: tn("matic") },
          maticmum: {
            chainId: 80001,
            name: "maticmum",
            _defaultProvider: tn("maticmum"),
          },
          optimism: {
            chainId: 10,
            name: "optimism",
            _defaultProvider: tn("optimism"),
          },
          "optimism-kovan": { chainId: 69, name: "optimism-kovan" },
          "optimism-goerli": { chainId: 420, name: "optimism-goerli" },
          "optimism-sepolia": { chainId: 0xaa37dc, name: "optimism-sepolia" },
          arbitrum: { chainId: 42161, name: "arbitrum" },
          "arbitrum-rinkeby": { chainId: 421611, name: "arbitrum-rinkeby" },
          "arbitrum-goerli": { chainId: 421613, name: "arbitrum-goerli" },
          "arbitrum-sepolia": { chainId: 421614, name: "arbitrum-sepolia" },
          bnb: { chainId: 56, name: "bnb" },
          bnbt: { chainId: 97, name: "bnbt" },
        };
      var tu = r(7952),
        tf = r.n(tu);
      function th(t) {
        return (
          "0x" +
          tf()
            .sha256()
            .update((0, l.k9)(t))
            .digest("hex")
        );
      }
      new i.Vy("sha2/5.8.0");
      var tc = r(9674),
        td = r.n(tc);
      let tp = new i.Vy(o);
      class tg {
        constructor() {
          this.formats = this.getDefaultFormats();
        }
        getDefaultFormats() {
          let t = {},
            e = this.address.bind(this),
            r = this.bigNumber.bind(this),
            i = this.blockTag.bind(this),
            o = this.data.bind(this),
            s = this.hash.bind(this),
            a = this.hex.bind(this),
            l = this.number.bind(this),
            u = this.type.bind(this);
          return (
            (t.transaction = {
              hash: s,
              type: u,
              accessList: tg.allowNull(this.accessList.bind(this), null),
              blockHash: tg.allowNull(s, null),
              blockNumber: tg.allowNull(l, null),
              transactionIndex: tg.allowNull(l, null),
              confirmations: tg.allowNull(l, null),
              from: e,
              gasPrice: tg.allowNull(r),
              maxPriorityFeePerGas: tg.allowNull(r),
              maxFeePerGas: tg.allowNull(r),
              gasLimit: r,
              to: tg.allowNull(e, null),
              value: r,
              nonce: l,
              data: o,
              r: tg.allowNull(this.uint256),
              s: tg.allowNull(this.uint256),
              v: tg.allowNull(l),
              creates: tg.allowNull(e, null),
              raw: tg.allowNull(o),
            }),
            (t.transactionRequest = {
              from: tg.allowNull(e),
              nonce: tg.allowNull(l),
              gasLimit: tg.allowNull(r),
              gasPrice: tg.allowNull(r),
              maxPriorityFeePerGas: tg.allowNull(r),
              maxFeePerGas: tg.allowNull(r),
              to: tg.allowNull(e),
              value: tg.allowNull(r),
              data: tg.allowNull((t) => this.data(t, !0)),
              type: tg.allowNull(l),
              accessList: tg.allowNull(this.accessList.bind(this), null),
            }),
            (t.receiptLog = {
              transactionIndex: l,
              blockNumber: l,
              transactionHash: s,
              address: e,
              topics: tg.arrayOf(s),
              data: o,
              logIndex: l,
              blockHash: s,
            }),
            (t.receipt = {
              to: tg.allowNull(this.address, null),
              from: tg.allowNull(this.address, null),
              contractAddress: tg.allowNull(e, null),
              transactionIndex: l,
              root: tg.allowNull(a),
              gasUsed: r,
              logsBloom: tg.allowNull(o),
              blockHash: s,
              transactionHash: s,
              logs: tg.arrayOf(this.receiptLog.bind(this)),
              blockNumber: l,
              confirmations: tg.allowNull(l, null),
              cumulativeGasUsed: r,
              effectiveGasPrice: tg.allowNull(r),
              status: tg.allowNull(l),
              type: u,
            }),
            (t.block = {
              hash: tg.allowNull(s),
              parentHash: s,
              number: l,
              timestamp: l,
              nonce: tg.allowNull(a),
              difficulty: this.difficulty.bind(this),
              gasLimit: r,
              gasUsed: r,
              miner: tg.allowNull(e),
              extraData: o,
              transactions: tg.allowNull(tg.arrayOf(s)),
              baseFeePerGas: tg.allowNull(r),
            }),
            (t.blockWithTransactions = (0, n.Ic)(t.block)),
            (t.blockWithTransactions.transactions = tg.allowNull(
              tg.arrayOf(this.transactionResponse.bind(this))
            )),
            (t.filter = {
              fromBlock: tg.allowNull(i, void 0),
              toBlock: tg.allowNull(i, void 0),
              blockHash: tg.allowNull(s, void 0),
              address: tg.allowNull(e, void 0),
              topics: tg.allowNull(this.topics.bind(this), void 0),
            }),
            (t.filterLog = {
              blockNumber: tg.allowNull(l),
              blockHash: tg.allowNull(s),
              transactionIndex: l,
              removed: tg.allowNull(this.boolean.bind(this)),
              address: e,
              data: tg.allowFalsish(o, "0x"),
              topics: tg.arrayOf(s),
              transactionHash: s,
              logIndex: l,
            }),
            t
          );
        }
        accessList(t) {
          return (0, I.$2)(t || []);
        }
        number(t) {
          return "0x" === t ? 0 : a.gH.from(t).toNumber();
        }
        type(t) {
          return "0x" === t || null == t ? 0 : a.gH.from(t).toNumber();
        }
        bigNumber(t) {
          return a.gH.from(t);
        }
        boolean(t) {
          if ("boolean" == typeof t) return t;
          if ("string" == typeof t) {
            if ("true" === (t = t.toLowerCase())) return !0;
            if ("false" === t) return !1;
          }
          throw Error("invalid boolean - " + t);
        }
        hex(t, e) {
          return "string" == typeof t &&
            (e || "0x" === t.substring(0, 2) || (t = "0x" + t), (0, l.Lo)(t))
            ? t.toLowerCase()
            : tp.throwArgumentError("invalid hash", "value", t);
        }
        data(t, e) {
          let r = this.hex(t, e);
          if (r.length % 2 != 0) throw Error("invalid data; odd-length - " + t);
          return r;
        }
        address(t) {
          return (0, u.bv)(t);
        }
        callAddress(t) {
          if (!(0, l.Lo)(t, 32)) return null;
          let e = (0, u.bv)((0, l.Ab)(t, 12));
          return "0x0000000000000000000000000000000000000000" === e ? null : e;
        }
        contractAddress(t) {
          return (0, u.RZ)(t);
        }
        blockTag(t) {
          if (null == t) return "latest";
          if ("earliest" === t) return "0x0";
          switch (t) {
            case "earliest":
              return "0x0";
            case "latest":
            case "pending":
            case "safe":
            case "finalized":
              return t;
          }
          if ("number" == typeof t || (0, l.Lo)(t)) return (0, l.Fh)(t);
          throw Error("invalid blockTag");
        }
        hash(t, e) {
          let r = this.hex(t, e);
          return 32 !== (0, l.cm)(r)
            ? tp.throwArgumentError("invalid hash", "value", t)
            : r;
        }
        difficulty(t) {
          if (null == t) return null;
          let e = a.gH.from(t);
          try {
            return e.toNumber();
          } catch (t) {}
          return null;
        }
        uint256(t) {
          if (!(0, l.Lo)(t)) throw Error("invalid uint256");
          return (0, l.bj)(t, 32);
        }
        _block(t, e) {
          null != t.author && null == t.miner && (t.miner = t.author);
          let r = null != t._difficulty ? t._difficulty : t.difficulty,
            n = tg.check(e, t);
          return (n._difficulty = null == r ? null : a.gH.from(r)), n;
        }
        block(t) {
          return this._block(t, this.formats.block);
        }
        blockWithTransactions(t) {
          return this._block(t, this.formats.blockWithTransactions);
        }
        transactionRequest(t) {
          return tg.check(this.formats.transactionRequest, t);
        }
        transactionResponse(t) {
          null != t.gas && null == t.gasLimit && (t.gasLimit = t.gas),
            t.to &&
              a.gH.from(t.to).isZero() &&
              (t.to = "0x0000000000000000000000000000000000000000"),
            null != t.input && null == t.data && (t.data = t.input),
            null == t.to &&
              null == t.creates &&
              (t.creates = this.contractAddress(t)),
            (1 === t.type || 2 === t.type) &&
              null == t.accessList &&
              (t.accessList = []);
          let e = tg.check(this.formats.transaction, t);
          if (null != t.chainId) {
            let r = t.chainId;
            (0, l.Lo)(r) && (r = a.gH.from(r).toNumber()), (e.chainId = r);
          } else {
            let r = t.networkId;
            null == r && null == e.v && (r = t.chainId),
              (0, l.Lo)(r) && (r = a.gH.from(r).toNumber()),
              "number" != typeof r &&
                null != e.v &&
                ((r = (e.v - 35) / 2) < 0 && (r = 0), (r = parseInt(r))),
              "number" != typeof r && (r = 0),
              (e.chainId = r);
          }
          return (
            e.blockHash &&
              "x" === e.blockHash.replace(/0/g, "") &&
              (e.blockHash = null),
            e
          );
        }
        transaction(t) {
          return (0, I.qg)(t);
        }
        receiptLog(t) {
          return tg.check(this.formats.receiptLog, t);
        }
        receipt(t) {
          let e = tg.check(this.formats.receipt, t);
          if (null != e.root) {
            if (e.root.length <= 4) {
              let t = a.gH.from(e.root).toNumber();
              0 === t || 1 === t
                ? (null != e.status &&
                    e.status !== t &&
                    tp.throwArgumentError(
                      "alt-root-status/status mismatch",
                      "value",
                      { root: e.root, status: e.status }
                    ),
                  (e.status = t),
                  delete e.root)
                : tp.throwArgumentError(
                    "invalid alt-root-status",
                    "value.root",
                    e.root
                  );
            } else
              66 !== e.root.length &&
                tp.throwArgumentError(
                  "invalid root hash",
                  "value.root",
                  e.root
                );
          }
          return null != e.status && (e.byzantium = !0), e;
        }
        topics(t) {
          return Array.isArray(t)
            ? t.map((t) => this.topics(t))
            : null != t
            ? this.hash(t, !0)
            : null;
        }
        filter(t) {
          return tg.check(this.formats.filter, t);
        }
        filterLog(t) {
          return tg.check(this.formats.filterLog, t);
        }
        static check(t, e) {
          let r = {};
          for (let n in t)
            try {
              let i = t[n](e[n]);
              void 0 !== i && (r[n] = i);
            } catch (t) {
              throw ((t.checkKey = n), (t.checkValue = e[n]), t);
            }
          return r;
        }
        static allowNull(t, e) {
          return function (r) {
            return null == r ? e : t(r);
          };
        }
        static allowFalsish(t, e) {
          return function (r) {
            return r ? t(r) : e;
          };
        }
        static arrayOf(t) {
          return function (e) {
            if (!Array.isArray(e)) throw Error("not an array");
            let r = [];
            return (
              e.forEach(function (e) {
                r.push(t(e));
              }),
              r
            );
          };
        }
      }
      var tm = function (t, e, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(t) {
            try {
              l(n.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              l(n.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function l(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value) instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })
                ).then(s, a);
          }
          l((n = n.apply(t, e || [])).next());
        });
      };
      let ty = new i.Vy(o);
      function tv(t) {
        return null == t
          ? "null"
          : (32 !== (0, l.cm)(t) &&
              ty.throwArgumentError("invalid topic", "topic", t),
            t.toLowerCase());
      }
      function tb(t) {
        for (t = t.slice(); t.length > 0 && null == t[t.length - 1]; ) t.pop();
        return t
          .map((t) => {
            if (!Array.isArray(t)) return tv(t);
            {
              let e = {};
              t.forEach((t) => {
                e[tv(t)] = !0;
              });
              let r = Object.keys(e);
              return r.sort(), r.join("|");
            }
          })
          .join("&");
      }
      function tw(t) {
        if ("string" == typeof t) {
          if (((t = t.toLowerCase()), 32 === (0, l.cm)(t))) return "tx:" + t;
          if (-1 === t.indexOf(":")) return t;
        } else if (Array.isArray(t)) return "filter:*:" + tb(t);
        else if (U.Rj.isForkEvent(t))
          throw (ty.warn("not implemented"), Error("not implemented"));
        else if (t && "object" == typeof t)
          return "filter:" + (t.address || "*") + ":" + tb(t.topics || []);
        throw Error("invalid event - " + t);
      }
      function tA() {
        return new Date().getTime();
      }
      function tE(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      let tx = ["block", "network", "pending", "poll"];
      class t_ {
        constructor(t, e, r) {
          (0, n.yY)(this, "tag", t),
            (0, n.yY)(this, "listener", e),
            (0, n.yY)(this, "once", r),
            (this._lastBlockNumber = -2),
            (this._inflight = !1);
        }
        get event() {
          switch (this.type) {
            case "tx":
              return this.hash;
            case "filter":
              return this.filter;
          }
          return this.tag;
        }
        get type() {
          return this.tag.split(":")[0];
        }
        get hash() {
          let t = this.tag.split(":");
          return "tx" !== t[0] ? null : t[1];
        }
        get filter() {
          var t;
          let e = this.tag.split(":");
          if ("filter" !== e[0]) return null;
          let r = e[1],
            n =
              "" === (t = e[2])
                ? []
                : t.split(/&/g).map((t) => {
                    if ("" === t) return [];
                    let e = t.split("|").map((t) => ("null" === t ? null : t));
                    return 1 === e.length ? e[0] : e;
                  }),
            i = {};
          return (
            n.length > 0 && (i.topics = n), r && "*" !== r && (i.address = r), i
          );
        }
        pollable() {
          return this.tag.indexOf(":") >= 0 || tx.indexOf(this.tag) >= 0;
        }
      }
      let tk = {
        0: { symbol: "btc", p2pkh: 0, p2sh: 5, prefix: "bc" },
        2: { symbol: "ltc", p2pkh: 48, p2sh: 50, prefix: "ltc" },
        3: { symbol: "doge", p2pkh: 30, p2sh: 22 },
        60: { symbol: "eth", ilk: "eth" },
        61: { symbol: "etc", ilk: "eth" },
        700: { symbol: "xdai", ilk: "eth" },
      };
      function tN(t) {
        return (0, l.bj)(a.gH.from(t).toHexString(), 32);
      }
      function tS(t) {
        return D.encode((0, l.xW)([t, (0, l.Ab)(th(th(t)), 0, 4)]));
      }
      let tM = RegExp("^(ipfs)://(.*)$", "i"),
        tI = [
          RegExp("^(https)://(.*)$", "i"),
          RegExp("^(data):(.*)$", "i"),
          tM,
          RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i"),
        ];
      function tR(t, e) {
        try {
          return (0, M._v)(tT(t, e));
        } catch (t) {}
        return null;
      }
      function tT(t, e) {
        if ("0x" === t) return null;
        let r = a.gH.from((0, l.Ab)(t, e, e + 32)).toNumber(),
          n = a.gH.from((0, l.Ab)(t, r, r + 32)).toNumber();
        return (0, l.Ab)(t, r + 32, r + 32 + n);
      }
      function tP(t) {
        return (
          t.match(/^ipfs:\/\/ipfs\//i)
            ? (t = t.substring(12))
            : t.match(/^ipfs:\/\//i)
            ? (t = t.substring(7))
            : ty.throwArgumentError("unsupported IPFS format", "link", t),
          `https://gateway.ipfs.io/ipfs/${t}`
        );
      }
      function tO(t) {
        let e = (0, l.k9)(t);
        if (e.length > 32) throw Error("internal; should not happen");
        let r = new Uint8Array(32);
        return r.set(e, 32 - e.length), r;
      }
      function tB(t) {
        let e = [],
          r = 0;
        for (let n = 0; n < t.length; n++) e.push(null), (r += 32);
        for (let n = 0; n < t.length; n++) {
          let i = (0, l.k9)(t[n]);
          (e[n] = tO(r)),
            e.push(tO(i.length)),
            e.push(
              (function (t) {
                if (t.length % 32 == 0) return t;
                let e = new Uint8Array(32 * Math.ceil(t.length / 32));
                return e.set(t), e;
              })(i)
            ),
            (r += 32 + 32 * Math.ceil(i.length / 32));
        }
        return (0, l.qn)(e);
      }
      class tC {
        constructor(t, e, r, i) {
          (0, n.yY)(this, "provider", t),
            (0, n.yY)(this, "name", r),
            (0, n.yY)(this, "address", t.formatter.address(e)),
            (0, n.yY)(this, "_resolvedAddress", i);
        }
        supportsWildcard() {
          return (
            this._supportsEip2544 ||
              (this._supportsEip2544 = this.provider
                .call({
                  to: this.address,
                  data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000",
                })
                .then((t) => a.gH.from(t).eq(1))
                .catch((t) => {
                  if (t.code === i.Vy.errors.CALL_EXCEPTION) return !1;
                  throw ((this._supportsEip2544 = null), t);
                })),
            this._supportsEip2544
          );
        }
        _fetch(t, e) {
          return tm(this, void 0, void 0, function* () {
            let r = {
                to: this.address,
                ccipReadEnabled: !0,
                data: (0, l.qn)([t, te(this.name), e || "0x"]),
              },
              n = !1;
            if (yield this.supportsWildcard()) {
              var o;
              (n = !0),
                (r.data = (0, l.qn)([
                  "0x9061b923",
                  tB([
                    ((o = this.name),
                    (0, l.c$)(
                      (0, l.xW)(
                        tt(o).map((t) => {
                          if (t.length > 63)
                            throw Error(
                              "invalid DNS encoded entry; length exceeds 63 bytes"
                            );
                          let e = new Uint8Array(t.length + 1);
                          return e.set(t, 1), (e[0] = e.length - 1), e;
                        })
                      )
                    ) + "00"),
                    r.data,
                  ]),
                ]));
            }
            try {
              let t = yield this.provider.call(r);
              return (
                (0, l.k9)(t).length % 32 == 4 &&
                  ty.throwError(
                    "resolver threw error",
                    i.Vy.errors.CALL_EXCEPTION,
                    { transaction: r, data: t }
                  ),
                n && (t = tT(t, 0)),
                t
              );
            } catch (t) {
              if (t.code === i.Vy.errors.CALL_EXCEPTION) return null;
              throw t;
            }
          });
        }
        _fetchBytes(t, e) {
          return tm(this, void 0, void 0, function* () {
            let r = yield this._fetch(t, e);
            return null != r ? tT(r, 0) : null;
          });
        }
        _getAddress(t, e) {
          let r = tk[String(t)];
          if (
            (null == r &&
              ty.throwError(
                `unsupported coin type: ${t}`,
                i.Vy.errors.UNSUPPORTED_OPERATION,
                { operation: `getAddress(${t})` }
              ),
            "eth" === r.ilk)
          )
            return this.provider.formatter.address(e);
          let n = (0, l.k9)(e);
          if (null != r.p2pkh) {
            let t = e.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
            if (t) {
              let e = parseInt(t[1], 16);
              if (t[2].length === 2 * e && e >= 1 && e <= 75)
                return tS((0, l.xW)([[r.p2pkh], "0x" + t[2]]));
            }
          }
          if (null != r.p2sh) {
            let t = e.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
            if (t) {
              let e = parseInt(t[1], 16);
              if (t[2].length === 2 * e && e >= 1 && e <= 75)
                return tS((0, l.xW)([[r.p2sh], "0x" + t[2]]));
            }
          }
          if (null != r.prefix) {
            let t = n[1],
              e = n[0];
            if (
              (0 === e ? 20 !== t && 32 !== t && (e = -1) : (e = -1),
              e >= 0 && n.length === 2 + t && t >= 1 && t <= 75)
            ) {
              let t = td().toWords(n.slice(2));
              return t.unshift(e), td().encode(r.prefix, t);
            }
          }
          return null;
        }
        getAddress(t) {
          return tm(this, void 0, void 0, function* () {
            if ((null == t && (t = 60), 60 === t))
              try {
                let t = yield this._fetch("0x3b3b57de");
                if (
                  "0x" === t ||
                  "0x0000000000000000000000000000000000000000000000000000000000000000" ===
                    t
                )
                  return null;
                return this.provider.formatter.callAddress(t);
              } catch (t) {
                if (t.code === i.Vy.errors.CALL_EXCEPTION) return null;
                throw t;
              }
            let e = yield this._fetchBytes("0xf1cb7e06", tN(t));
            if (null == e || "0x" === e) return null;
            let r = this._getAddress(t, e);
            return (
              null == r &&
                ty.throwError(
                  "invalid or unsupported coin data",
                  i.Vy.errors.UNSUPPORTED_OPERATION,
                  { operation: `getAddress(${t})`, coinType: t, data: e }
                ),
              r
            );
          });
        }
        getAvatar() {
          return tm(this, void 0, void 0, function* () {
            let t = [{ type: "name", content: this.name }];
            try {
              let e = yield this.getText("avatar");
              if (null == e) return null;
              for (let r = 0; r < tI.length; r++) {
                let n = e.match(tI[r]);
                if (null == n) continue;
                let i = n[1].toLowerCase();
                switch (i) {
                  case "https":
                    return (
                      t.push({ type: "url", content: e }),
                      { linkage: t, url: e }
                    );
                  case "data":
                    return (
                      t.push({ type: "data", content: e }),
                      { linkage: t, url: e }
                    );
                  case "ipfs":
                    return (
                      t.push({ type: "ipfs", content: e }),
                      { linkage: t, url: tP(e) }
                    );
                  case "erc721":
                  case "erc1155": {
                    let r = "erc721" === i ? "0xc87b56dd" : "0x0e89341c";
                    t.push({ type: i, content: e });
                    let o = this._resolvedAddress || (yield this.getAddress()),
                      s = (n[2] || "").split("/");
                    if (2 !== s.length) return null;
                    let u = yield this.provider.formatter.address(s[0]),
                      f = (0, l.bj)(a.gH.from(s[1]).toHexString(), 32);
                    if ("erc721" === i) {
                      let e = this.provider.formatter.callAddress(
                        yield this.provider.call({
                          to: u,
                          data: (0, l.qn)(["0x6352211e", f]),
                        })
                      );
                      if (o !== e) return null;
                      t.push({ type: "owner", content: e });
                    } else if ("erc1155" === i) {
                      let e = a.gH.from(
                        yield this.provider.call({
                          to: u,
                          data: (0, l.qn)(["0x00fdd58e", (0, l.bj)(o, 32), f]),
                        })
                      );
                      if (e.isZero()) return null;
                      t.push({ type: "balance", content: e.toString() });
                    }
                    let h = {
                        to: this.provider.formatter.address(s[0]),
                        data: (0, l.qn)([r, f]),
                      },
                      c = tR(yield this.provider.call(h), 0);
                    if (null == c) return null;
                    t.push({ type: "metadata-url-base", content: c }),
                      "erc1155" === i &&
                        ((c = c.replace("{id}", f.substring(2))),
                        t.push({ type: "metadata-url-expanded", content: c })),
                      c.match(/^ipfs:/i) && (c = tP(c)),
                      t.push({ type: "metadata-url", content: c });
                    let d = yield C(c);
                    if (!d) return null;
                    t.push({ type: "metadata", content: JSON.stringify(d) });
                    let p = d.image;
                    if ("string" != typeof p) return null;
                    if (p.match(/^(https:\/\/|data:)/i));
                    else {
                      let e = p.match(tM);
                      if (null == e) return null;
                      t.push({ type: "url-ipfs", content: p }), (p = tP(p));
                    }
                    return (
                      t.push({ type: "url", content: p }),
                      { linkage: t, url: p }
                    );
                  }
                }
              }
            } catch (t) {}
            return null;
          });
        }
        getContentHash() {
          return tm(this, void 0, void 0, function* () {
            let t = yield this._fetchBytes("0xbc1c58d1");
            if (null == t || "0x" === t) return null;
            let e = t.match(
              /^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/
            );
            if (e) {
              let t = parseInt(e[3], 16);
              if (e[4].length === 2 * t)
                return "ipfs://" + D.encode("0x" + e[1]);
            }
            let r = t.match(
              /^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/
            );
            if (r) {
              let t = parseInt(r[3], 16);
              if (r[4].length === 2 * t)
                return "ipns://" + D.encode("0x" + r[1]);
            }
            let n = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
            if (n && 64 === n[1].length) return "bzz://" + n[1];
            let o = t.match(/^0x90b2c605([0-9a-f]*)$/);
            if (o && 68 === o[1].length) {
              let t = { "=": "", "+": "-", "/": "_" };
              return "sia://" + T("0x" + o[1]).replace(/[=+\/]/g, (e) => t[e]);
            }
            return ty.throwError(
              "invalid or unsupported content hash data",
              i.Vy.errors.UNSUPPORTED_OPERATION,
              { operation: "getContentHash()", data: t }
            );
          });
        }
        getText(t) {
          return tm(this, void 0, void 0, function* () {
            let e = (0, M.YW)(t);
            (e = (0, l.xW)([tN(64), tN(e.length), e])).length % 32 != 0 &&
              (e = (0, l.xW)([e, (0, l.bj)("0x", 32 - (t.length % 32))]));
            let r = yield this._fetchBytes("0x59d1d43c", (0, l.c$)(e));
            return null == r || "0x" === r ? null : (0, M._v)(r);
          });
        }
      }
      let tL = null,
        tU = 1;
      class tF extends U.Kq {
        constructor(t) {
          if (
            (super(),
            (this._events = []),
            (this._emitted = { block: -2 }),
            (this.disableCcipRead = !1),
            (this.formatter = new.target.getFormatter()),
            (0, n.yY)(this, "anyNetwork", "any" === t),
            this.anyNetwork && (t = this.detectNetwork()),
            t instanceof Promise)
          )
            (this._networkPromise = t),
              t.catch((t) => {}),
              this._ready().catch((t) => {});
          else {
            let e = (0, n.$J)(new.target, "getNetwork")(t);
            e
              ? ((0, n.yY)(this, "_network", e), this.emit("network", e, null))
              : ty.throwArgumentError("invalid network", "network", t);
          }
          (this._maxInternalBlockNumber = -1024),
            (this._lastBlockNumber = -2),
            (this._maxFilterBlockRange = 10),
            (this._pollingInterval = 4e3),
            (this._fastQueryDate = 0);
        }
        _ready() {
          return tm(this, void 0, void 0, function* () {
            if (null == this._network) {
              let t = null;
              if (this._networkPromise)
                try {
                  t = yield this._networkPromise;
                } catch (t) {}
              null == t && (t = yield this.detectNetwork()),
                t ||
                  ty.throwError(
                    "no network detected",
                    i.Vy.errors.UNKNOWN_ERROR,
                    {}
                  ),
                null == this._network &&
                  (this.anyNetwork
                    ? (this._network = t)
                    : (0, n.yY)(this, "_network", t),
                  this.emit("network", t, null));
            }
            return this._network;
          });
        }
        get ready() {
          return L(() =>
            this._ready().then(
              (t) => t,
              (t) => {
                if (
                  t.code !== i.Vy.errors.NETWORK_ERROR ||
                  "noNetwork" !== t.event
                )
                  throw t;
              }
            )
          );
        }
        static getFormatter() {
          return null == tL && (tL = new tg()), tL;
        }
        static getNetwork(t) {
          return (function (t) {
            if (null == t) return null;
            if ("number" == typeof t) {
              for (let e in tl) {
                let r = tl[e];
                if (r.chainId === t)
                  return {
                    name: r.name,
                    chainId: r.chainId,
                    ensAddress: r.ensAddress || null,
                    _defaultProvider: r._defaultProvider || null,
                  };
              }
              return { chainId: t, name: "unknown" };
            }
            if ("string" == typeof t) {
              let e = tl[t];
              return null == e
                ? null
                : {
                    name: e.name,
                    chainId: e.chainId,
                    ensAddress: e.ensAddress,
                    _defaultProvider: e._defaultProvider || null,
                  };
            }
            let e = tl[t.name];
            if (!e)
              return (
                "number" != typeof t.chainId &&
                  tr.throwArgumentError(
                    "invalid network chainId",
                    "network",
                    t
                  ),
                t
              );
            0 !== t.chainId &&
              t.chainId !== e.chainId &&
              tr.throwArgumentError("network chainId mismatch", "network", t);
            let r = t._defaultProvider || null;
            if (null == r && e._defaultProvider) {
              var n;
              r =
                (n = e._defaultProvider) && "function" == typeof n.renetwork
                  ? e._defaultProvider.renetwork(t)
                  : e._defaultProvider;
            }
            return {
              name: t.name,
              chainId: e.chainId,
              ensAddress: t.ensAddress || e.ensAddress || null,
              _defaultProvider: r,
            };
          })(null == t ? "homestead" : t);
        }
        ccipReadFetch(t, e, r) {
          return tm(this, void 0, void 0, function* () {
            if (this.disableCcipRead || 0 === r.length) return null;
            let n = t.to.toLowerCase(),
              o = e.toLowerCase(),
              s = [];
            for (let t = 0; t < r.length; t++) {
              let e = r[t],
                a = e.replace("{sender}", n).replace("{data}", o),
                l =
                  e.indexOf("{data}") >= 0
                    ? null
                    : JSON.stringify({ data: o, sender: n }),
                u = yield C(
                  { url: a, errorPassThrough: !0 },
                  l,
                  (t, e) => ((t.status = e.statusCode), t)
                );
              if (u.data) return u.data;
              let f = u.message || "unknown error";
              if (u.status >= 400 && u.status < 500)
                return ty.throwError(
                  `response not found during CCIP fetch: ${f}`,
                  i.Vy.errors.SERVER_ERROR,
                  { url: e, errorMessage: f }
                );
              s.push(f);
            }
            return ty.throwError(
              `error encountered during CCIP fetch: ${s
                .map((t) => JSON.stringify(t))
                .join(", ")}`,
              i.Vy.errors.SERVER_ERROR,
              { urls: r, errorMessages: s }
            );
          });
        }
        _getInternalBlockNumber(t) {
          return tm(this, void 0, void 0, function* () {
            if ((yield this._ready(), t > 0))
              for (; this._internalBlockNumber; ) {
                let e = this._internalBlockNumber;
                try {
                  let r = yield e;
                  if (tA() - r.respTime <= t) return r.blockNumber;
                  break;
                } catch (t) {
                  if (this._internalBlockNumber === e) break;
                }
              }
            let e = tA(),
              r = (0, n.k_)({
                blockNumber: this.perform("getBlockNumber", {}),
                networkError: this.getNetwork().then(
                  (t) => null,
                  (t) => t
                ),
              }).then(({ blockNumber: t, networkError: n }) => {
                if (n)
                  throw (
                    (this._internalBlockNumber === r &&
                      (this._internalBlockNumber = null),
                    n)
                  );
                let i = tA();
                return (
                  (t = a.gH.from(t).toNumber()) <
                    this._maxInternalBlockNumber &&
                    (t = this._maxInternalBlockNumber),
                  (this._maxInternalBlockNumber = t),
                  this._setFastBlockNumber(t),
                  { blockNumber: t, reqTime: e, respTime: i }
                );
              });
            return (
              (this._internalBlockNumber = r),
              r.catch((t) => {
                this._internalBlockNumber === r &&
                  (this._internalBlockNumber = null);
              }),
              (yield r).blockNumber
            );
          });
        }
        poll() {
          return tm(this, void 0, void 0, function* () {
            let t = tU++,
              e = [],
              r = null;
            try {
              r = yield this._getInternalBlockNumber(
                100 + this.pollingInterval / 2
              );
            } catch (t) {
              this.emit("error", t);
              return;
            }
            if (
              (this._setFastBlockNumber(r),
              this.emit("poll", t, r),
              r === this._lastBlockNumber)
            ) {
              this.emit("didPoll", t);
              return;
            }
            if (
              (-2 === this._emitted.block && (this._emitted.block = r - 1),
              Math.abs(this._emitted.block - r) > 1e3)
            )
              ty.warn(
                `network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`
              ),
                this.emit(
                  "error",
                  ty.makeError(
                    "network block skew detected",
                    i.Vy.errors.NETWORK_ERROR,
                    {
                      blockNumber: r,
                      event: "blockSkew",
                      previousBlockNumber: this._emitted.block,
                    }
                  )
                ),
                this.emit("block", r);
            else
              for (let t = this._emitted.block + 1; t <= r; t++)
                this.emit("block", t);
            this._emitted.block !== r &&
              ((this._emitted.block = r),
              Object.keys(this._emitted).forEach((t) => {
                if ("block" === t) return;
                let e = this._emitted[t];
                "pending" !== e && r - e > 12 && delete this._emitted[t];
              })),
              -2 === this._lastBlockNumber && (this._lastBlockNumber = r - 1),
              this._events.forEach((t) => {
                switch (t.type) {
                  case "tx": {
                    let r = t.hash,
                      n = this.getTransactionReceipt(r)
                        .then(
                          (t) => (
                            t &&
                              null != t.blockNumber &&
                              ((this._emitted["t:" + r] = t.blockNumber),
                              this.emit(r, t)),
                            null
                          )
                        )
                        .catch((t) => {
                          this.emit("error", t);
                        });
                    e.push(n);
                    break;
                  }
                  case "filter":
                    if (!t._inflight) {
                      (t._inflight = !0),
                        -2 === t._lastBlockNumber &&
                          (t._lastBlockNumber = r - 1);
                      let n = t.filter;
                      (n.fromBlock = t._lastBlockNumber + 1), (n.toBlock = r);
                      let i = n.toBlock - this._maxFilterBlockRange;
                      i > n.fromBlock && (n.fromBlock = i),
                        n.fromBlock < 0 && (n.fromBlock = 0);
                      let o = this.getLogs(n)
                        .then((e) => {
                          (t._inflight = !1),
                            0 !== e.length &&
                              e.forEach((e) => {
                                e.blockNumber > t._lastBlockNumber &&
                                  (t._lastBlockNumber = e.blockNumber),
                                  (this._emitted["b:" + e.blockHash] =
                                    e.blockNumber),
                                  (this._emitted["t:" + e.transactionHash] =
                                    e.blockNumber),
                                  this.emit(n, e);
                              });
                        })
                        .catch((e) => {
                          this.emit("error", e), (t._inflight = !1);
                        });
                      e.push(o);
                    }
                }
              }),
              (this._lastBlockNumber = r),
              Promise.all(e)
                .then(() => {
                  this.emit("didPoll", t);
                })
                .catch((t) => {
                  this.emit("error", t);
                });
          });
        }
        resetEventsBlock(t) {
          (this._lastBlockNumber = t - 1), this.polling && this.poll();
        }
        get network() {
          return this._network;
        }
        detectNetwork() {
          return tm(this, void 0, void 0, function* () {
            return ty.throwError(
              "provider does not support network detection",
              i.Vy.errors.UNSUPPORTED_OPERATION,
              { operation: "provider.detectNetwork" }
            );
          });
        }
        getNetwork() {
          return tm(this, void 0, void 0, function* () {
            let t = yield this._ready(),
              e = yield this.detectNetwork();
            if (t.chainId !== e.chainId) {
              if (this.anyNetwork)
                return (
                  (this._network = e),
                  (this._lastBlockNumber = -2),
                  (this._fastBlockNumber = null),
                  (this._fastBlockNumberPromise = null),
                  (this._fastQueryDate = 0),
                  (this._emitted.block = -2),
                  (this._maxInternalBlockNumber = -1024),
                  (this._internalBlockNumber = null),
                  this.emit("network", e, t),
                  yield tE(0),
                  this._network
                );
              let r = ty.makeError(
                "underlying network changed",
                i.Vy.errors.NETWORK_ERROR,
                { event: "changed", network: t, detectedNetwork: e }
              );
              throw (this.emit("error", r), r);
            }
            return t;
          });
        }
        get blockNumber() {
          return (
            this._getInternalBlockNumber(100 + this.pollingInterval / 2).then(
              (t) => {
                this._setFastBlockNumber(t);
              },
              (t) => {}
            ),
            null != this._fastBlockNumber ? this._fastBlockNumber : -1
          );
        }
        get polling() {
          return null != this._poller;
        }
        set polling(t) {
          t && !this._poller
            ? ((this._poller = setInterval(() => {
                this.poll();
              }, this.pollingInterval)),
              this._bootstrapPoll ||
                (this._bootstrapPoll = setTimeout(() => {
                  this.poll(),
                    (this._bootstrapPoll = setTimeout(() => {
                      this._poller || this.poll(), (this._bootstrapPoll = null);
                    }, this.pollingInterval));
                }, 0)))
            : !t &&
              this._poller &&
              (clearInterval(this._poller), (this._poller = null));
        }
        get pollingInterval() {
          return this._pollingInterval;
        }
        set pollingInterval(t) {
          if ("number" != typeof t || t <= 0 || parseInt(String(t)) != t)
            throw Error("invalid polling interval");
          (this._pollingInterval = t),
            this._poller &&
              (clearInterval(this._poller),
              (this._poller = setInterval(() => {
                this.poll();
              }, this._pollingInterval)));
        }
        _getFastBlockNumber() {
          let t = tA();
          return (
            t - this._fastQueryDate > 2 * this._pollingInterval &&
              ((this._fastQueryDate = t),
              (this._fastBlockNumberPromise = this.getBlockNumber().then(
                (t) => (
                  (null == this._fastBlockNumber ||
                    t > this._fastBlockNumber) &&
                    (this._fastBlockNumber = t),
                  this._fastBlockNumber
                )
              ))),
            this._fastBlockNumberPromise
          );
        }
        _setFastBlockNumber(t) {
          (null == this._fastBlockNumber || !(t < this._fastBlockNumber)) &&
            ((this._fastQueryDate = tA()),
            (null == this._fastBlockNumber || t > this._fastBlockNumber) &&
              ((this._fastBlockNumber = t),
              (this._fastBlockNumberPromise = Promise.resolve(t))));
        }
        waitForTransaction(t, e, r) {
          return tm(this, void 0, void 0, function* () {
            return this._waitForTransaction(t, null == e ? 1 : e, r || 0, null);
          });
        }
        _waitForTransaction(t, e, r, n) {
          return tm(this, void 0, void 0, function* () {
            let o = yield this.getTransactionReceipt(t);
            return (o ? o.confirmations : 0) >= e
              ? o
              : new Promise((o, s) => {
                  let a = [],
                    l = !1,
                    u = function () {
                      return (
                        !!l ||
                        ((l = !0),
                        a.forEach((t) => {
                          t();
                        }),
                        !1)
                      );
                    },
                    f = (t) => {
                      t.confirmations < e || u() || o(t);
                    };
                  if (
                    (this.on(t, f),
                    a.push(() => {
                      this.removeListener(t, f);
                    }),
                    n)
                  ) {
                    let r = n.startBlock,
                      o = null,
                      f = (a) =>
                        tm(this, void 0, void 0, function* () {
                          l ||
                            (yield tE(1e3),
                            this.getTransactionCount(n.from).then(
                              (h) =>
                                tm(this, void 0, void 0, function* () {
                                  if (!l) {
                                    if (h <= n.nonce) r = a;
                                    else {
                                      {
                                        let e = yield this.getTransaction(t);
                                        if (e && null != e.blockNumber) return;
                                      }
                                      for (
                                        null == o &&
                                        (o = r - 3) < n.startBlock &&
                                        (o = n.startBlock);
                                        o <= a;

                                      ) {
                                        if (l) return;
                                        let r =
                                          yield this.getBlockWithTransactions(
                                            o
                                          );
                                        for (
                                          let o = 0;
                                          o < r.transactions.length;
                                          o++
                                        ) {
                                          let a = r.transactions[o];
                                          if (a.hash === t) return;
                                          if (
                                            a.from === n.from &&
                                            a.nonce === n.nonce
                                          ) {
                                            if (l) return;
                                            let r =
                                              yield this.waitForTransaction(
                                                a.hash,
                                                e
                                              );
                                            if (u()) return;
                                            let o = "replaced";
                                            a.data === n.data &&
                                            a.to === n.to &&
                                            a.value.eq(n.value)
                                              ? (o = "repriced")
                                              : "0x" === a.data &&
                                                a.from === a.to &&
                                                a.value.isZero() &&
                                                (o = "cancelled"),
                                              s(
                                                ty.makeError(
                                                  "transaction was replaced",
                                                  i.Vy.errors
                                                    .TRANSACTION_REPLACED,
                                                  {
                                                    cancelled:
                                                      "replaced" === o ||
                                                      "cancelled" === o,
                                                    reason: o,
                                                    replacement:
                                                      this._wrapTransaction(a),
                                                    hash: t,
                                                    receipt: r,
                                                  }
                                                )
                                              );
                                            return;
                                          }
                                        }
                                        o++;
                                      }
                                    }
                                    l || this.once("block", f);
                                  }
                                }),
                              (t) => {
                                l || this.once("block", f);
                              }
                            ));
                        });
                    if (l) return;
                    this.once("block", f),
                      a.push(() => {
                        this.removeListener("block", f);
                      });
                  }
                  if ("number" == typeof r && r > 0) {
                    let t = setTimeout(() => {
                      u() ||
                        s(
                          ty.makeError(
                            "timeout exceeded",
                            i.Vy.errors.TIMEOUT,
                            { timeout: r }
                          )
                        );
                    }, r);
                    t.unref && t.unref(),
                      a.push(() => {
                        clearTimeout(t);
                      });
                  }
                });
          });
        }
        getBlockNumber() {
          return tm(this, void 0, void 0, function* () {
            return this._getInternalBlockNumber(0);
          });
        }
        getGasPrice() {
          return tm(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let t = yield this.perform("getGasPrice", {});
            try {
              return a.gH.from(t);
            } catch (e) {
              return ty.throwError(
                "bad result from backend",
                i.Vy.errors.SERVER_ERROR,
                { method: "getGasPrice", result: t, error: e }
              );
            }
          });
        }
        getBalance(t, e) {
          return tm(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let r = yield (0, n.k_)({
                address: this._getAddress(t),
                blockTag: this._getBlockTag(e),
              }),
              o = yield this.perform("getBalance", r);
            try {
              return a.gH.from(o);
            } catch (t) {
              return ty.throwError(
                "bad result from backend",
                i.Vy.errors.SERVER_ERROR,
                { method: "getBalance", params: r, result: o, error: t }
              );
            }
          });
        }
        getTransactionCount(t, e) {
          return tm(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let r = yield (0, n.k_)({
                address: this._getAddress(t),
                blockTag: this._getBlockTag(e),
              }),
              o = yield this.perform("getTransactionCount", r);
            try {
              return a.gH.from(o).toNumber();
            } catch (t) {
              return ty.throwError(
                "bad result from backend",
                i.Vy.errors.SERVER_ERROR,
                {
                  method: "getTransactionCount",
                  params: r,
                  result: o,
                  error: t,
                }
              );
            }
          });
        }
        getCode(t, e) {
          return tm(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let r = yield (0, n.k_)({
                address: this._getAddress(t),
                blockTag: this._getBlockTag(e),
              }),
              o = yield this.perform("getCode", r);
            try {
              return (0, l.c$)(o);
            } catch (t) {
              return ty.throwError(
                "bad result from backend",
                i.Vy.errors.SERVER_ERROR,
                { method: "getCode", params: r, result: o, error: t }
              );
            }
          });
        }
        getStorageAt(t, e, r) {
          return tm(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let o = yield (0, n.k_)({
                address: this._getAddress(t),
                blockTag: this._getBlockTag(r),
                position: Promise.resolve(e).then((t) => (0, l.Fh)(t)),
              }),
              s = yield this.perform("getStorageAt", o);
            try {
              return (0, l.c$)(s);
            } catch (t) {
              return ty.throwError(
                "bad result from backend",
                i.Vy.errors.SERVER_ERROR,
                { method: "getStorageAt", params: o, result: s, error: t }
              );
            }
          });
        }
        _wrapTransaction(t, e, r) {
          if (null != e && 32 !== (0, l.cm)(e))
            throw Error("invalid response - sendTransaction");
          return (
            null != e &&
              t.hash !== e &&
              ty.throwError(
                "Transaction hash mismatch from Provider.sendTransaction.",
                i.Vy.errors.UNKNOWN_ERROR,
                { expectedHash: t.hash, returnedHash: e }
              ),
            (t.wait = (e, n) =>
              tm(this, void 0, void 0, function* () {
                let o;
                null == e && (e = 1),
                  null == n && (n = 0),
                  0 !== e &&
                    null != r &&
                    (o = {
                      data: t.data,
                      from: t.from,
                      nonce: t.nonce,
                      to: t.to,
                      value: t.value,
                      startBlock: r,
                    });
                let s = yield this._waitForTransaction(t.hash, e, n, o);
                return null == s && 0 === e
                  ? null
                  : ((this._emitted["t:" + t.hash] = s.blockNumber),
                    0 === s.status &&
                      ty.throwError(
                        "transaction failed",
                        i.Vy.errors.CALL_EXCEPTION,
                        { transactionHash: t.hash, transaction: t, receipt: s }
                      ),
                    s);
              })),
            t
          );
        }
        sendTransaction(t) {
          return tm(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let e = yield Promise.resolve(t).then((t) => (0, l.c$)(t)),
              r = this.formatter.transaction(t);
            null == r.confirmations && (r.confirmations = 0);
            let n = yield this._getInternalBlockNumber(
              100 + 2 * this.pollingInterval
            );
            try {
              let t = yield this.perform("sendTransaction", {
                signedTransaction: e,
              });
              return this._wrapTransaction(r, t, n);
            } catch (t) {
              throw ((t.transaction = r), (t.transactionHash = r.hash), t);
            }
          });
        }
        _getTransactionRequest(t) {
          return tm(this, void 0, void 0, function* () {
            let e = yield t,
              r = {};
            return (
              ["from", "to"].forEach((t) => {
                null != e[t] &&
                  (r[t] = Promise.resolve(e[t]).then((t) =>
                    t ? this._getAddress(t) : null
                  ));
              }),
              [
                "gasLimit",
                "gasPrice",
                "maxFeePerGas",
                "maxPriorityFeePerGas",
                "value",
              ].forEach((t) => {
                null != e[t] &&
                  (r[t] = Promise.resolve(e[t]).then((t) =>
                    t ? a.gH.from(t) : null
                  ));
              }),
              ["type"].forEach((t) => {
                null != e[t] &&
                  (r[t] = Promise.resolve(e[t]).then((t) =>
                    null != t ? t : null
                  ));
              }),
              e.accessList &&
                (r.accessList = this.formatter.accessList(e.accessList)),
              ["data"].forEach((t) => {
                null != e[t] &&
                  (r[t] = Promise.resolve(e[t]).then((t) =>
                    t ? (0, l.c$)(t) : null
                  ));
              }),
              this.formatter.transactionRequest(yield (0, n.k_)(r))
            );
          });
        }
        _getFilter(t) {
          return tm(this, void 0, void 0, function* () {
            t = yield t;
            let e = {};
            return (
              null != t.address && (e.address = this._getAddress(t.address)),
              ["blockHash", "topics"].forEach((r) => {
                null != t[r] && (e[r] = t[r]);
              }),
              ["fromBlock", "toBlock"].forEach((r) => {
                null != t[r] && (e[r] = this._getBlockTag(t[r]));
              }),
              this.formatter.filter(yield (0, n.k_)(e))
            );
          });
        }
        _call(t, e, r) {
          return tm(this, void 0, void 0, function* () {
            r >= 10 &&
              ty.throwError(
                "CCIP read exceeded maximum redirections",
                i.Vy.errors.SERVER_ERROR,
                { redirects: r, transaction: t }
              );
            let n = t.to,
              o = yield this.perform("call", { transaction: t, blockTag: e });
            if (
              r >= 0 &&
              "latest" === e &&
              null != n &&
              "0x556f1830" === o.substring(0, 10) &&
              (0, l.cm)(o) % 32 == 4
            )
              try {
                let s = (0, l.Ab)(o, 4),
                  u = (0, l.Ab)(s, 0, 32);
                a.gH.from(u).eq(n) ||
                  ty.throwError(
                    "CCIP Read sender did not match",
                    i.Vy.errors.CALL_EXCEPTION,
                    {
                      name: "OffchainLookup",
                      signature:
                        "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                      transaction: t,
                      data: o,
                    }
                  );
                let f = [],
                  h = a.gH.from((0, l.Ab)(s, 32, 64)).toNumber(),
                  c = a.gH.from((0, l.Ab)(s, h, h + 32)).toNumber(),
                  d = (0, l.Ab)(s, h + 32);
                for (let e = 0; e < c; e++) {
                  let r = tR(d, 32 * e);
                  null == r &&
                    ty.throwError(
                      "CCIP Read contained corrupt URL string",
                      i.Vy.errors.CALL_EXCEPTION,
                      {
                        name: "OffchainLookup",
                        signature:
                          "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                        transaction: t,
                        data: o,
                      }
                    ),
                    f.push(r);
                }
                let p = tT(s, 64);
                a.gH.from((0, l.Ab)(s, 100, 128)).isZero() ||
                  ty.throwError(
                    "CCIP Read callback selector included junk",
                    i.Vy.errors.CALL_EXCEPTION,
                    {
                      name: "OffchainLookup",
                      signature:
                        "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                      transaction: t,
                      data: o,
                    }
                  );
                let g = (0, l.Ab)(s, 96, 100),
                  m = tT(s, 128),
                  y = yield this.ccipReadFetch(t, p, f);
                null == y &&
                  ty.throwError(
                    "CCIP Read disabled or provided no URLs",
                    i.Vy.errors.CALL_EXCEPTION,
                    {
                      name: "OffchainLookup",
                      signature:
                        "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                      transaction: t,
                      data: o,
                    }
                  );
                let v = { to: n, data: (0, l.qn)([g, tB([y, m])]) };
                return this._call(v, e, r + 1);
              } catch (t) {
                if (t.code === i.Vy.errors.SERVER_ERROR) throw t;
              }
            try {
              return (0, l.c$)(o);
            } catch (r) {
              return ty.throwError(
                "bad result from backend",
                i.Vy.errors.SERVER_ERROR,
                {
                  method: "call",
                  params: { transaction: t, blockTag: e },
                  result: o,
                  error: r,
                }
              );
            }
          });
        }
        call(t, e) {
          return tm(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let r = yield (0, n.k_)({
              transaction: this._getTransactionRequest(t),
              blockTag: this._getBlockTag(e),
              ccipReadEnabled: Promise.resolve(t.ccipReadEnabled),
            });
            return this._call(
              r.transaction,
              r.blockTag,
              r.ccipReadEnabled ? 0 : -1
            );
          });
        }
        estimateGas(t) {
          return tm(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let e = yield (0, n.k_)({
                transaction: this._getTransactionRequest(t),
              }),
              r = yield this.perform("estimateGas", e);
            try {
              return a.gH.from(r);
            } catch (t) {
              return ty.throwError(
                "bad result from backend",
                i.Vy.errors.SERVER_ERROR,
                { method: "estimateGas", params: e, result: r, error: t }
              );
            }
          });
        }
        _getAddress(t) {
          return tm(this, void 0, void 0, function* () {
            "string" != typeof (t = yield t) &&
              ty.throwArgumentError("invalid address or ENS name", "name", t);
            let e = yield this.resolveName(t);
            return (
              null == e &&
                ty.throwError(
                  "ENS name not configured",
                  i.Vy.errors.UNSUPPORTED_OPERATION,
                  { operation: `resolveName(${JSON.stringify(t)})` }
                ),
              e
            );
          });
        }
        _getBlock(t, e) {
          return tm(this, void 0, void 0, function* () {
            yield this.getNetwork(), (t = yield t);
            let r = -128,
              n = { includeTransactions: !!e };
            if ((0, l.Lo)(t, 32)) n.blockHash = t;
            else
              try {
                (n.blockTag = yield this._getBlockTag(t)),
                  (0, l.Lo)(n.blockTag) &&
                    (r = parseInt(n.blockTag.substring(2), 16));
              } catch (e) {
                ty.throwArgumentError(
                  "invalid block hash or block tag",
                  "blockHashOrBlockTag",
                  t
                );
              }
            return L(
              () =>
                tm(this, void 0, void 0, function* () {
                  let t = yield this.perform("getBlock", n);
                  if (null == t)
                    return (null != n.blockHash &&
                      null == this._emitted["b:" + n.blockHash]) ||
                      (null != n.blockTag && r > this._emitted.block)
                      ? null
                      : void 0;
                  if (e) {
                    let e = null;
                    for (let r = 0; r < t.transactions.length; r++) {
                      let n = t.transactions[r];
                      if (null == n.blockNumber) n.confirmations = 0;
                      else if (null == n.confirmations) {
                        null == e &&
                          (e = yield this._getInternalBlockNumber(
                            100 + 2 * this.pollingInterval
                          ));
                        let t = e - n.blockNumber + 1;
                        t <= 0 && (t = 1), (n.confirmations = t);
                      }
                    }
                    let r = this.formatter.blockWithTransactions(t);
                    return (
                      (r.transactions = r.transactions.map((t) =>
                        this._wrapTransaction(t)
                      )),
                      r
                    );
                  }
                  return this.formatter.block(t);
                }),
              { oncePoll: this }
            );
          });
        }
        getBlock(t) {
          return this._getBlock(t, !1);
        }
        getBlockWithTransactions(t) {
          return this._getBlock(t, !0);
        }
        getTransaction(t) {
          return tm(this, void 0, void 0, function* () {
            yield this.getNetwork(), (t = yield t);
            let e = { transactionHash: this.formatter.hash(t, !0) };
            return L(
              () =>
                tm(this, void 0, void 0, function* () {
                  let r = yield this.perform("getTransaction", e);
                  if (null == r)
                    return null == this._emitted["t:" + t] ? null : void 0;
                  let n = this.formatter.transactionResponse(r);
                  if (null == n.blockNumber) n.confirmations = 0;
                  else if (null == n.confirmations) {
                    let t =
                      (yield this._getInternalBlockNumber(
                        100 + 2 * this.pollingInterval
                      )) -
                      n.blockNumber +
                      1;
                    t <= 0 && (t = 1), (n.confirmations = t);
                  }
                  return this._wrapTransaction(n);
                }),
              { oncePoll: this }
            );
          });
        }
        getTransactionReceipt(t) {
          return tm(this, void 0, void 0, function* () {
            yield this.getNetwork(), (t = yield t);
            let e = { transactionHash: this.formatter.hash(t, !0) };
            return L(
              () =>
                tm(this, void 0, void 0, function* () {
                  let r = yield this.perform("getTransactionReceipt", e);
                  if (null == r)
                    return null == this._emitted["t:" + t] ? null : void 0;
                  if (null == r.blockHash) return;
                  let n = this.formatter.receipt(r);
                  if (null == n.blockNumber) n.confirmations = 0;
                  else if (null == n.confirmations) {
                    let t =
                      (yield this._getInternalBlockNumber(
                        100 + 2 * this.pollingInterval
                      )) -
                      n.blockNumber +
                      1;
                    t <= 0 && (t = 1), (n.confirmations = t);
                  }
                  return n;
                }),
              { oncePoll: this }
            );
          });
        }
        getLogs(t) {
          return tm(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let e = yield (0, n.k_)({ filter: this._getFilter(t) }),
              r = yield this.perform("getLogs", e);
            return (
              r.forEach((t) => {
                null == t.removed && (t.removed = !1);
              }),
              tg.arrayOf(this.formatter.filterLog.bind(this.formatter))(r)
            );
          });
        }
        getEtherPrice() {
          return tm(this, void 0, void 0, function* () {
            return yield this.getNetwork(), this.perform("getEtherPrice", {});
          });
        }
        _getBlockTag(t) {
          return tm(this, void 0, void 0, function* () {
            if ("number" == typeof (t = yield t) && t < 0) {
              t % 1 && ty.throwArgumentError("invalid BlockTag", "blockTag", t);
              let e = yield this._getInternalBlockNumber(
                100 + 2 * this.pollingInterval
              );
              return (e += t) < 0 && (e = 0), this.formatter.blockTag(e);
            }
            return this.formatter.blockTag(t);
          });
        }
        getResolver(t) {
          return tm(this, void 0, void 0, function* () {
            let e = t;
            for (;;) {
              if ("" === e || "." === e || ("eth" !== t && "eth" === e))
                return null;
              let r = yield this._getResolver(e, "getResolver");
              if (null != r) {
                let n = new tC(this, r, t);
                if (e !== t && !(yield n.supportsWildcard())) return null;
                return n;
              }
              e = e.split(".").slice(1).join(".");
            }
          });
        }
        _getResolver(t, e) {
          return tm(this, void 0, void 0, function* () {
            null == e && (e = "ENS");
            let r = yield this.getNetwork();
            r.ensAddress ||
              ty.throwError(
                "network does not support ENS",
                i.Vy.errors.UNSUPPORTED_OPERATION,
                { operation: e, network: r.name }
              );
            try {
              let e = yield this.call({
                to: r.ensAddress,
                data: "0x0178b8bf" + te(t).substring(2),
              });
              return this.formatter.callAddress(e);
            } catch (t) {}
            return null;
          });
        }
        resolveName(t) {
          return tm(this, void 0, void 0, function* () {
            t = yield t;
            try {
              return Promise.resolve(this.formatter.address(t));
            } catch (e) {
              if ((0, l.Lo)(t)) throw e;
            }
            "string" != typeof t &&
              ty.throwArgumentError("invalid ENS name", "name", t);
            let e = yield this.getResolver(t);
            return e ? yield e.getAddress() : null;
          });
        }
        lookupAddress(t) {
          return tm(this, void 0, void 0, function* () {
            t = yield t;
            let e =
                (t = this.formatter.address(t)).substring(2).toLowerCase() +
                ".addr.reverse",
              r = yield this._getResolver(e, "lookupAddress");
            if (null == r) return null;
            let n = tR(
              yield this.call({
                to: r,
                data: "0x691f3431" + te(e).substring(2),
              }),
              0
            );
            return (yield this.resolveName(n)) != t ? null : n;
          });
        }
        getAvatar(t) {
          return tm(this, void 0, void 0, function* () {
            let e = null;
            if ((0, l.Lo)(t)) {
              let r =
                  this.formatter.address(t).substring(2).toLowerCase() +
                  ".addr.reverse",
                n = yield this._getResolver(r, "getAvatar");
              if (!n) return null;
              e = new tC(this, n, r);
              try {
                let t = yield e.getAvatar();
                if (t) return t.url;
              } catch (t) {
                if (t.code !== i.Vy.errors.CALL_EXCEPTION) throw t;
              }
              try {
                let t = tR(
                  yield this.call({
                    to: n,
                    data: "0x691f3431" + te(r).substring(2),
                  }),
                  0
                );
                e = yield this.getResolver(t);
              } catch (t) {
                if (t.code !== i.Vy.errors.CALL_EXCEPTION) throw t;
                return null;
              }
            } else if (!(e = yield this.getResolver(t))) return null;
            let r = yield e.getAvatar();
            return null == r ? null : r.url;
          });
        }
        perform(t, e) {
          return ty.throwError(
            t + " not implemented",
            i.Vy.errors.NOT_IMPLEMENTED,
            { operation: t }
          );
        }
        _startEvent(t) {
          this.polling = this._events.filter((t) => t.pollable()).length > 0;
        }
        _stopEvent(t) {
          this.polling = this._events.filter((t) => t.pollable()).length > 0;
        }
        _addEventListener(t, e, r) {
          let n = new t_(tw(t), e, r);
          return this._events.push(n), this._startEvent(n), this;
        }
        on(t, e) {
          return this._addEventListener(t, e, !1);
        }
        once(t, e) {
          return this._addEventListener(t, e, !0);
        }
        emit(t, ...e) {
          let r = !1,
            n = [],
            i = tw(t);
          return (
            (this._events = this._events.filter(
              (t) =>
                t.tag !== i ||
                (setTimeout(() => {
                  t.listener.apply(this, e);
                }, 0),
                (r = !0),
                !t.once || (n.push(t), !1))
            )),
            n.forEach((t) => {
              this._stopEvent(t);
            }),
            r
          );
        }
        listenerCount(t) {
          if (!t) return this._events.length;
          let e = tw(t);
          return this._events.filter((t) => t.tag === e).length;
        }
        listeners(t) {
          if (null == t) return this._events.map((t) => t.listener);
          let e = tw(t);
          return this._events.filter((t) => t.tag === e).map((t) => t.listener);
        }
        off(t, e) {
          if (null == e) return this.removeAllListeners(t);
          let r = [],
            n = !1,
            i = tw(t);
          return (
            (this._events = this._events.filter(
              (t) =>
                t.tag !== i ||
                t.listener != e ||
                !!n ||
                ((n = !0), r.push(t), !1)
            )),
            r.forEach((t) => {
              this._stopEvent(t);
            }),
            this
          );
        }
        removeAllListeners(t) {
          let e = [];
          if (null == t) (e = this._events), (this._events = []);
          else {
            let r = tw(t);
            this._events = this._events.filter(
              (t) => t.tag !== r || (e.push(t), !1)
            );
          }
          return (
            e.forEach((t) => {
              this._stopEvent(t);
            }),
            this
          );
        }
      }
      var tD = function (t, e, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(t) {
            try {
              l(n.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              l(n.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function l(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value) instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })
                ).then(s, a);
          }
          l((n = n.apply(t, e || [])).next());
        });
      };
      let tj = new i.Vy(o),
        tq = ["call", "estimateGas"];
      function tH(t, e) {
        if (null == t) return null;
        if ("string" == typeof t.message && t.message.match("reverted")) {
          let r = (0, l.Lo)(t.data) ? t.data : null;
          if (!e || r) return { message: t.message, data: r };
        }
        if ("object" == typeof t) {
          for (let r in t) {
            let n = tH(t[r], e);
            if (n) return n;
          }
          return null;
        }
        if ("string" == typeof t)
          try {
            return tH(JSON.parse(t), e);
          } catch (t) {}
        return null;
      }
      function tz(t, e, r) {
        let n = r.transaction || r.signedTransaction;
        if ("call" === t) {
          let t = tH(e, !0);
          if (t) return t.data;
          tj.throwError(
            "missing revert data in call exception; Transaction reverted without a reason string",
            i.Vy.errors.CALL_EXCEPTION,
            { data: "0x", transaction: n, error: e }
          );
        }
        if ("estimateGas" === t) {
          let r = tH(e.body, !1);
          null == r && (r = tH(e, !1)),
            r &&
              tj.throwError(
                "cannot estimate gas; transaction may fail or may require manual gas limit",
                i.Vy.errors.UNPREDICTABLE_GAS_LIMIT,
                { reason: r.message, method: t, transaction: n, error: e }
              );
        }
        let o = e.message;
        throw (
          (e.code === i.Vy.errors.SERVER_ERROR &&
          e.error &&
          "string" == typeof e.error.message
            ? (o = e.error.message)
            : "string" == typeof e.body
            ? (o = e.body)
            : "string" == typeof e.responseText && (o = e.responseText),
          (o = (o || "").toLowerCase()).match(
            /insufficient funds|base fee exceeds gas limit|InsufficientFunds/i
          ) &&
            tj.throwError(
              "insufficient funds for intrinsic transaction cost",
              i.Vy.errors.INSUFFICIENT_FUNDS,
              { error: e, method: t, transaction: n }
            ),
          o.match(/nonce (is )?too low/i) &&
            tj.throwError(
              "nonce has already been used",
              i.Vy.errors.NONCE_EXPIRED,
              { error: e, method: t, transaction: n }
            ),
          o.match(
            /replacement transaction underpriced|transaction gas price.*too low/i
          ) &&
            tj.throwError(
              "replacement fee too low",
              i.Vy.errors.REPLACEMENT_UNDERPRICED,
              { error: e, method: t, transaction: n }
            ),
          o.match(/only replay-protected/i) &&
            tj.throwError(
              "legacy pre-eip-155 transactions not supported",
              i.Vy.errors.UNSUPPORTED_OPERATION,
              { error: e, method: t, transaction: n }
            ),
          tq.indexOf(t) >= 0 &&
            o.match(
              /gas required exceeds allowance|always failing transaction|execution reverted|revert/
            ) &&
            tj.throwError(
              "cannot estimate gas; transaction may fail or may require manual gas limit",
              i.Vy.errors.UNPREDICTABLE_GAS_LIMIT,
              { error: e, method: t, transaction: n }
            ),
          e)
        );
      }
      function tG(t) {
        return new Promise(function (e) {
          setTimeout(e, t);
        });
      }
      function tV(t) {
        if (t.error) {
          let e = Error(t.error.message);
          throw ((e.code = t.error.code), (e.data = t.error.data), e);
        }
        return t.result;
      }
      function tY(t) {
        return t ? t.toLowerCase() : t;
      }
      let tJ = {};
      class tK extends s.l {
        constructor(t, e, r) {
          if ((super(), t !== tJ))
            throw Error(
              "do not call the JsonRpcSigner constructor directly; use provider.getSigner"
            );
          (0, n.yY)(this, "provider", e),
            null == r && (r = 0),
            "string" == typeof r
              ? ((0, n.yY)(
                  this,
                  "_address",
                  this.provider.formatter.address(r)
                ),
                (0, n.yY)(this, "_index", null))
              : "number" == typeof r
              ? ((0, n.yY)(this, "_index", r),
                (0, n.yY)(this, "_address", null))
              : tj.throwArgumentError(
                  "invalid address or index",
                  "addressOrIndex",
                  r
                );
        }
        connect(t) {
          return tj.throwError(
            "cannot alter JSON-RPC Signer connection",
            i.Vy.errors.UNSUPPORTED_OPERATION,
            { operation: "connect" }
          );
        }
        connectUnchecked() {
          return new tW(tJ, this.provider, this._address || this._index);
        }
        getAddress() {
          return this._address
            ? Promise.resolve(this._address)
            : this.provider
                .send("eth_accounts", [])
                .then(
                  (t) => (
                    t.length <= this._index &&
                      tj.throwError(
                        "unknown account #" + this._index,
                        i.Vy.errors.UNSUPPORTED_OPERATION,
                        { operation: "getAddress" }
                      ),
                    this.provider.formatter.address(t[this._index])
                  )
                );
        }
        sendUncheckedTransaction(t) {
          t = (0, n.Ic)(t);
          let e = this.getAddress().then(
            (t) => (t && (t = t.toLowerCase()), t)
          );
          if (null == t.gasLimit) {
            let r = (0, n.Ic)(t);
            (r.from = e), (t.gasLimit = this.provider.estimateGas(r));
          }
          return (
            null != t.to &&
              (t.to = Promise.resolve(t.to).then((t) =>
                tD(this, void 0, void 0, function* () {
                  if (null == t) return null;
                  let e = yield this.provider.resolveName(t);
                  return (
                    null == e &&
                      tj.throwArgumentError(
                        "provided ENS name resolves to null",
                        "tx.to",
                        t
                      ),
                    e
                  );
                })
              )),
            (0, n.k_)({ tx: (0, n.k_)(t), sender: e }).then(
              ({ tx: e, sender: r }) => {
                null != e.from
                  ? e.from.toLowerCase() !== r &&
                    tj.throwArgumentError(
                      "from address mismatch",
                      "transaction",
                      t
                    )
                  : (e.from = r);
                let n = this.provider.constructor.hexlifyTransaction(e, {
                  from: !0,
                });
                return this.provider.send("eth_sendTransaction", [n]).then(
                  (t) => t,
                  (t) => (
                    "string" == typeof t.message &&
                      t.message.match(/user denied/i) &&
                      tj.throwError(
                        "user rejected transaction",
                        i.Vy.errors.ACTION_REJECTED,
                        { action: "sendTransaction", transaction: e }
                      ),
                    tz("sendTransaction", t, n)
                  )
                );
              }
            )
          );
        }
        signTransaction(t) {
          return tj.throwError(
            "signing transactions is unsupported",
            i.Vy.errors.UNSUPPORTED_OPERATION,
            { operation: "signTransaction" }
          );
        }
        sendTransaction(t) {
          return tD(this, void 0, void 0, function* () {
            let e = yield this.provider._getInternalBlockNumber(
                100 + 2 * this.provider.pollingInterval
              ),
              r = yield this.sendUncheckedTransaction(t);
            try {
              return yield L(
                () =>
                  tD(this, void 0, void 0, function* () {
                    let t = yield this.provider.getTransaction(r);
                    if (null !== t)
                      return this.provider._wrapTransaction(t, r, e);
                  }),
                { oncePoll: this.provider }
              );
            } catch (t) {
              throw ((t.transactionHash = r), t);
            }
          });
        }
        signMessage(t) {
          return tD(this, void 0, void 0, function* () {
            let e = "string" == typeof t ? (0, M.YW)(t) : t,
              r = yield this.getAddress();
            try {
              return yield this.provider.send("personal_sign", [
                (0, l.c$)(e),
                r.toLowerCase(),
              ]);
            } catch (e) {
              throw (
                ("string" == typeof e.message &&
                  e.message.match(/user denied/i) &&
                  tj.throwError(
                    "user rejected signing",
                    i.Vy.errors.ACTION_REJECTED,
                    { action: "signMessage", from: r, messageData: t }
                  ),
                e)
              );
            }
          });
        }
        _legacySignMessage(t) {
          return tD(this, void 0, void 0, function* () {
            let e = "string" == typeof t ? (0, M.YW)(t) : t,
              r = yield this.getAddress();
            try {
              return yield this.provider.send("eth_sign", [
                r.toLowerCase(),
                (0, l.c$)(e),
              ]);
            } catch (e) {
              throw (
                ("string" == typeof e.message &&
                  e.message.match(/user denied/i) &&
                  tj.throwError(
                    "user rejected signing",
                    i.Vy.errors.ACTION_REJECTED,
                    { action: "_legacySignMessage", from: r, messageData: t }
                  ),
                e)
              );
            }
          });
        }
        _signTypedData(t, e, r) {
          return tD(this, void 0, void 0, function* () {
            let n = yield S.resolveNames(t, e, r, (t) =>
                this.provider.resolveName(t)
              ),
              o = yield this.getAddress();
            try {
              return yield this.provider.send("eth_signTypedData_v4", [
                o.toLowerCase(),
                JSON.stringify(S.getPayload(n.domain, e, n.value)),
              ]);
            } catch (t) {
              throw (
                ("string" == typeof t.message &&
                  t.message.match(/user denied/i) &&
                  tj.throwError(
                    "user rejected signing",
                    i.Vy.errors.ACTION_REJECTED,
                    {
                      action: "_signTypedData",
                      from: o,
                      messageData: {
                        domain: n.domain,
                        types: e,
                        value: n.value,
                      },
                    }
                  ),
                t)
              );
            }
          });
        }
        unlock(t) {
          return tD(this, void 0, void 0, function* () {
            let e = this.provider,
              r = yield this.getAddress();
            return e.send("personal_unlockAccount", [r.toLowerCase(), t, null]);
          });
        }
      }
      class tW extends tK {
        sendTransaction(t) {
          return this.sendUncheckedTransaction(t).then((t) => ({
            hash: t,
            nonce: null,
            gasLimit: null,
            gasPrice: null,
            data: null,
            value: null,
            chainId: null,
            confirmations: 0,
            from: null,
            wait: (e) => this.provider.waitForTransaction(t, e),
          }));
        }
      }
      let tQ = {
        chainId: !0,
        data: !0,
        gasLimit: !0,
        gasPrice: !0,
        nonce: !0,
        to: !0,
        value: !0,
        type: !0,
        accessList: !0,
        maxFeePerGas: !0,
        maxPriorityFeePerGas: !0,
      };
      class tX extends tF {
        constructor(t, e) {
          let r = e;
          null == r &&
            (r = new Promise((t, e) => {
              setTimeout(() => {
                this.detectNetwork().then(
                  (e) => {
                    t(e);
                  },
                  (t) => {
                    e(t);
                  }
                );
              }, 0);
            })),
            super(r),
            t || (t = (0, n.$J)(this.constructor, "defaultUrl")()),
            "string" == typeof t
              ? (0, n.yY)(this, "connection", Object.freeze({ url: t }))
              : (0, n.yY)(this, "connection", Object.freeze((0, n.Ic)(t))),
            (this._nextId = 42);
        }
        get _cache() {
          return (
            null == this._eventLoopCache && (this._eventLoopCache = {}),
            this._eventLoopCache
          );
        }
        static defaultUrl() {
          return "http://localhost:8545";
        }
        detectNetwork() {
          return (
            this._cache.detectNetwork ||
              ((this._cache.detectNetwork = this._uncachedDetectNetwork()),
              setTimeout(() => {
                this._cache.detectNetwork = null;
              }, 0)),
            this._cache.detectNetwork
          );
        }
        _uncachedDetectNetwork() {
          return tD(this, void 0, void 0, function* () {
            yield tG(0);
            let t = null;
            try {
              t = yield this.send("eth_chainId", []);
            } catch (e) {
              try {
                t = yield this.send("net_version", []);
              } catch (t) {}
            }
            if (null != t) {
              let e = (0, n.$J)(this.constructor, "getNetwork");
              try {
                return e(a.gH.from(t).toNumber());
              } catch (e) {
                return tj.throwError(
                  "could not detect network",
                  i.Vy.errors.NETWORK_ERROR,
                  { chainId: t, event: "invalidNetwork", serverError: e }
                );
              }
            }
            return tj.throwError(
              "could not detect network",
              i.Vy.errors.NETWORK_ERROR,
              { event: "noNetwork" }
            );
          });
        }
        getSigner(t) {
          return new tK(tJ, this, t);
        }
        getUncheckedSigner(t) {
          return this.getSigner(t).connectUnchecked();
        }
        listAccounts() {
          return this.send("eth_accounts", []).then((t) =>
            t.map((t) => this.formatter.address(t))
          );
        }
        send(t, e) {
          let r = { method: t, params: e, id: this._nextId++, jsonrpc: "2.0" };
          this.emit("debug", {
            action: "request",
            request: (0, n.A4)(r),
            provider: this,
          });
          let i = ["eth_chainId", "eth_blockNumber"].indexOf(t) >= 0;
          if (i && this._cache[t]) return this._cache[t];
          let o = C(this.connection, JSON.stringify(r), tV).then(
            (t) => (
              this.emit("debug", {
                action: "response",
                request: r,
                response: t,
                provider: this,
              }),
              t
            ),
            (t) => {
              throw (
                (this.emit("debug", {
                  action: "response",
                  error: t,
                  request: r,
                  provider: this,
                }),
                t)
              );
            }
          );
          return (
            i &&
              ((this._cache[t] = o),
              setTimeout(() => {
                this._cache[t] = null;
              }, 0)),
            o
          );
        }
        prepareRequest(t, e) {
          switch (t) {
            case "getBlockNumber":
              return ["eth_blockNumber", []];
            case "getGasPrice":
              return ["eth_gasPrice", []];
            case "getBalance":
              return ["eth_getBalance", [tY(e.address), e.blockTag]];
            case "getTransactionCount":
              return ["eth_getTransactionCount", [tY(e.address), e.blockTag]];
            case "getCode":
              return ["eth_getCode", [tY(e.address), e.blockTag]];
            case "getStorageAt":
              return [
                "eth_getStorageAt",
                [tY(e.address), (0, l.bj)(e.position, 32), e.blockTag],
              ];
            case "sendTransaction":
              return ["eth_sendRawTransaction", [e.signedTransaction]];
            case "getBlock":
              if (e.blockTag)
                return [
                  "eth_getBlockByNumber",
                  [e.blockTag, !!e.includeTransactions],
                ];
              if (e.blockHash)
                return [
                  "eth_getBlockByHash",
                  [e.blockHash, !!e.includeTransactions],
                ];
              break;
            case "getTransaction":
              return ["eth_getTransactionByHash", [e.transactionHash]];
            case "getTransactionReceipt":
              return ["eth_getTransactionReceipt", [e.transactionHash]];
            case "call":
              return [
                "eth_call",
                [
                  (0, n.$J)(this.constructor, "hexlifyTransaction")(
                    e.transaction,
                    { from: !0 }
                  ),
                  e.blockTag,
                ],
              ];
            case "estimateGas":
              return [
                "eth_estimateGas",
                [
                  (0, n.$J)(this.constructor, "hexlifyTransaction")(
                    e.transaction,
                    { from: !0 }
                  ),
                ],
              ];
            case "getLogs":
              return (
                e.filter &&
                  null != e.filter.address &&
                  (e.filter.address = tY(e.filter.address)),
                ["eth_getLogs", [e.filter]]
              );
          }
          return null;
        }
        perform(t, e) {
          return tD(this, void 0, void 0, function* () {
            if ("call" === t || "estimateGas" === t) {
              let t = e.transaction;
              if (
                t &&
                null != t.type &&
                a.gH.from(t.type).isZero() &&
                null == t.maxFeePerGas &&
                null == t.maxPriorityFeePerGas
              ) {
                let r = yield this.getFeeData();
                null == r.maxFeePerGas &&
                  null == r.maxPriorityFeePerGas &&
                  (((e = (0, n.Ic)(e)).transaction = (0, n.Ic)(t)),
                  delete e.transaction.type);
              }
            }
            let r = this.prepareRequest(t, e);
            null == r &&
              tj.throwError(
                t + " not implemented",
                i.Vy.errors.NOT_IMPLEMENTED,
                { operation: t }
              );
            try {
              return yield this.send(r[0], r[1]);
            } catch (r) {
              return tz(t, r, e);
            }
          });
        }
        _startEvent(t) {
          "pending" === t.tag && this._startPending(), super._startEvent(t);
        }
        _startPending() {
          if (null != this._pendingFilter) return;
          let t = this,
            e = this.send("eth_newPendingTransactionFilter", []);
          (this._pendingFilter = e),
            e
              .then(function (r) {
                return (
                  (function n() {
                    t.send("eth_getFilterChanges", [r])
                      .then(function (r) {
                        if (t._pendingFilter != e) return null;
                        let n = Promise.resolve();
                        return (
                          r.forEach(function (e) {
                            (t._emitted["t:" + e.toLowerCase()] = "pending"),
                              (n = n.then(function () {
                                return t.getTransaction(e).then(function (e) {
                                  return t.emit("pending", e), null;
                                });
                              }));
                          }),
                          n.then(function () {
                            return tG(1e3);
                          })
                        );
                      })
                      .then(function () {
                        if (t._pendingFilter != e) {
                          t.send("eth_uninstallFilter", [r]);
                          return;
                        }
                        return (
                          setTimeout(function () {
                            n();
                          }, 0),
                          null
                        );
                      })
                      .catch((t) => {});
                  })(),
                  r
                );
              })
              .catch((t) => {});
        }
        _stopEvent(t) {
          "pending" === t.tag &&
            0 === this.listenerCount("pending") &&
            (this._pendingFilter = null),
            super._stopEvent(t);
        }
        static hexlifyTransaction(t, e) {
          let r = (0, n.Ic)(tQ);
          if (e) for (let t in e) e[t] && (r[t] = !0);
          (0, n.qN)(t, r);
          let i = {};
          return (
            [
              "chainId",
              "gasLimit",
              "gasPrice",
              "type",
              "maxFeePerGas",
              "maxPriorityFeePerGas",
              "nonce",
              "value",
            ].forEach(function (e) {
              if (null == t[e]) return;
              let r = (0, l.Fh)(a.gH.from(t[e]));
              "gasLimit" === e && (e = "gas"), (i[e] = r);
            }),
            ["from", "to", "data"].forEach(function (e) {
              null != t[e] && (i[e] = (0, l.c$)(t[e]));
            }),
            t.accessList && (i.accessList = (0, I.$2)(t.accessList)),
            i
          );
        }
      }
      let tZ = new i.Vy(o),
        t$ = 1;
      function t0(t, e) {
        let r = "Web3LegacyFetcher";
        return function (t, i) {
          let o = { method: t, params: i, id: t$++, jsonrpc: "2.0" };
          return new Promise((t, i) => {
            this.emit("debug", {
              action: "request",
              fetcher: r,
              request: (0, n.A4)(o),
              provider: this,
            }),
              e(o, (e, n) => {
                if (e)
                  return (
                    this.emit("debug", {
                      action: "response",
                      fetcher: r,
                      error: e,
                      request: o,
                      provider: this,
                    }),
                    i(e)
                  );
                if (
                  (this.emit("debug", {
                    action: "response",
                    fetcher: r,
                    request: o,
                    response: n,
                    provider: this,
                  }),
                  n.error)
                ) {
                  let t = Error(n.error.message);
                  return (t.code = n.error.code), (t.data = n.error.data), i(t);
                }
                t(n.result);
              });
          });
        };
      }
      class t1 extends tX {
        constructor(t, e) {
          null == t && tZ.throwArgumentError("missing provider", "provider", t);
          let r = null,
            i = null,
            o = null;
          "function" == typeof t
            ? ((r = "unknown:"), (i = t))
            : (((r = t.host || t.path || "") ||
                !t.isMetaMask ||
                (r = "metamask"),
              (o = t),
              t.request)
                ? ("" === r && (r = "eip-1193:"),
                  (i = function (e, r) {
                    null == r && (r = []);
                    let i = { method: e, params: r };
                    return (
                      this.emit("debug", {
                        action: "request",
                        fetcher: "Eip1193Fetcher",
                        request: (0, n.A4)(i),
                        provider: this,
                      }),
                      t.request(i).then(
                        (t) => (
                          this.emit("debug", {
                            action: "response",
                            fetcher: "Eip1193Fetcher",
                            request: i,
                            response: t,
                            provider: this,
                          }),
                          t
                        ),
                        (t) => {
                          throw (
                            (this.emit("debug", {
                              action: "response",
                              fetcher: "Eip1193Fetcher",
                              request: i,
                              error: t,
                              provider: this,
                            }),
                            t)
                          );
                        }
                      )
                    );
                  }))
                : t.sendAsync
                ? (i = t0(t, t.sendAsync.bind(t)))
                : t.send
                ? (i = t0(t, t.send.bind(t)))
                : tZ.throwArgumentError("unsupported provider", "provider", t),
              r || (r = "unknown:")),
            super(r, e),
            (0, n.yY)(this, "jsonRpcFetchFunc", i),
            (0, n.yY)(this, "provider", o);
        }
        send(t, e) {
          return this.jsonRpcFetchFunc(t, e);
        }
      }
      var t2 = r(5962),
        t3 = r(9087);
      let t6 = (t) => {
          var e, r, n, i, o, s, a;
          let l;
          if (t4(t)) {
            switch (t) {
              case "MetaMask":
                console.log(
                  null === (e = window) || void 0 === e ? void 0 : e.ethereum
                ),
                  console.log(
                    (l = new t1(
                      null === (r = window) || void 0 === r
                        ? void 0
                        : r.ethereum
                    ))
                  );
                break;
              case "Petra":
                l = null === (n = window) || void 0 === n ? void 0 : n.aptos;
                break;
              case "OKX Wallet":
                l = new t1(
                  null === (i = window) || void 0 === i ? void 0 : i.okxwallet
                );
                break;
              case "TokenPocket":
                l = new t1(
                  null === (s = window) || void 0 === s
                    ? void 0
                    : null === (o = s.tokenpocket) || void 0 === o
                    ? void 0
                    : o.ethereum
                );
                break;
              case "Gate":
                l = new t1(
                  null === (a = window) || void 0 === a ? void 0 : a.gatewallet
                );
            }
            return l;
          }
        },
        t4 = (t) => {
          var e, r, n, i, o;
          let s;
          switch (t) {
            case "MetaMask":
              s = null === (e = window) || void 0 === e ? void 0 : e.ethereum;
              break;
            case "OKX Wallet":
              s = null === (r = window) || void 0 === r ? void 0 : r.okxwallet;
              break;
            case "Gate":
              s = null === (n = window) || void 0 === n ? void 0 : n.gatewallet;
              break;
            case "TokenPocket":
              s =
                null === (o = window) || void 0 === o
                  ? void 0
                  : null === (i = o.tokenpocket) || void 0 === i
                  ? void 0
                  : i.ethereum;
          }
          return s;
        },
        t5 = (t) => {
          let e = !1,
            r = t4(t);
          switch (t) {
            case "MetaMask":
              e = void 0 !== r && !!r.isMetaMask;
              break;
            case "OKX Wallet":
            case "TokenPocket":
            case "Gate":
              e = void 0 !== r;
          }
          return e;
        },
        t8 = () => {
          let t = [];
          return (
            t5("MetaMask") && t.push("MetaMask"),
            t5("Bybit") && t.push("Bybit"),
            t5("Martian") && t.push("Martian"),
            t5("Petra") && t.push("Petra"),
            t5("OKX Wallet") && t.push("OKX Wallet"),
            t5("TronLink") && t.push("TronLink"),
            t5("TokenPocket") && t.push("TokenPocket"),
            t5("Phantom") && t.push("Phantom"),
            t
          );
        },
        t9 = async (t) => {
          let e = t4(t);
          if (e) return String(await e.request({ method: "eth_chainId" }));
        },
        t7 = function (t) {
          arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          let e = er(t),
            r = en(t);
          if (e || r) return;
          let n = eo.find((t) => "56" == t.id),
            i = t2.ol[null == n ? void 0 : n.id],
            o = t6(t),
            s = t4(t);
          return (
            s &&
            s.request({ method: "eth_chainId" }).then(async (t) => {
              parseInt(t, 16) != Number("56") &&
                o &&
                (await o
                  .send("wallet_switchEthereumChain", [
                    { chainId: null == n ? void 0 : n.exId },
                  ])
                  .catch(async (t) => {
                    if (4902 === t.code && i)
                      try {
                        await s.request({
                          method: "wallet_addEthereumChain",
                          params: [
                            { chainId: null == n ? void 0 : n.exId, ...i },
                          ],
                        });
                      } catch (t) {
                        throw Error(t);
                      }
                    else console.log(t);
                  }));
            })
          );
        },
        et = () => {
          (0, t3.Od)("address"),
            (0, t3.Od)("isConnected"),
            (0, t3.Od)("wallet_type"),
            (0, t3.Od)("token"),
            (0, t3.Od)("original_evm_wallet_type"),
            (0, t3.Od)("original_aptos_wallet_type"),
            (0, t3.Od)("current_chain_name"),
            (0, t3.Od)("current_chain_id");
        },
        ee = () => (0, t3.c7)("wallet_type") || "",
        er = function () {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            e = t || ee();
          return "Petra" === e || "Martian" === e;
        },
        en = function () {
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return "TronLink" === (t || ee());
        },
        ei = function () {
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return "Phantom" === (t || ee());
        },
        eo = [
          {
            type: "Evm",
            name: "ETH",
            sub: "Ethereum(ERC20)",
            id: "1",
            exId: "0x1",
          },
          {
            type: "Aptos",
            name: "APT",
            sub: "Aptos chain",
            id: "1",
            exId: "0x1",
          },
          {
            type: "Evm",
            name: "BNB",
            sub: "BNB Smart Chain (BEP20)",
            id: "56",
            exId: "0x38",
          },
          {
            type: "Tron",
            name: "TRX",
            sub: "Tron(TRC20)",
            id: "728126428",
            exId: "0x2b6653dc",
          },
          {
            type: "Solana",
            name: "SOL",
            sub: "Solana Mainnet",
            id: "101",
            exId: "SolanaMainnetBeta",
          },
        ],
        es = () => {
          let t = (0, t3.c7)("current_chain_name");
          return !!t && !!["BNB", "APT"].includes(t);
        };
    },
    4472: () => {},
    6715: (t, e, r) => {
      t.exports = r(8440);
    },
    5160: (t, e, r) => {
      "use strict";
      var n = r(6540),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        o = n.useSyncExternalStore,
        s = n.useRef,
        a = n.useEffect,
        l = n.useMemo,
        u = n.useDebugValue;
      e.useSyncExternalStoreWithSelector = function (t, e, r, n, f) {
        var h = s(null);
        if (null === h.current) {
          var c = { hasValue: !1, value: null };
          h.current = c;
        } else c = h.current;
        var d = o(
          t,
          (h = l(
            function () {
              function t(t) {
                if (!a) {
                  if (
                    ((a = !0), (o = t), (t = n(t)), void 0 !== f && c.hasValue)
                  ) {
                    var e = c.value;
                    if (f(e, t)) return (s = e);
                  }
                  return (s = t);
                }
                if (((e = s), i(o, t))) return e;
                var r = n(t);
                return void 0 !== f && f(e, r)
                  ? ((o = t), e)
                  : ((o = t), (s = r));
              }
              var o,
                s,
                a = !1,
                l = void 0 === r ? null : r;
              return [
                function () {
                  return t(e());
                },
                null === l
                  ? void 0
                  : function () {
                      return t(l());
                    },
              ];
            },
            [e, r, n, f]
          ))[0],
          h[1]
        );
        return (
          a(
            function () {
              (c.hasValue = !0), (c.value = d);
            },
            [d]
          ),
          u(d),
          d
        );
      };
    },
    8418: (t, e, r) => {
      "use strict";
      t.exports = r(5160);
    },
    7790: () => {},
    4335: (t, e, r) => {
      "use strict";
      let n;
      r.d(e, { A: () => ea });
      var i,
        o,
        s,
        a = {};
      function l(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      }
      r.r(a),
        r.d(a, {
          hasBrowserEnv: () => tf,
          hasStandardBrowserEnv: () => tc,
          hasStandardBrowserWebWorkerEnv: () => td,
          navigator: () => th,
          origin: () => tp,
        });
      var u = r(7836);
      let { toString: f } = Object.prototype,
        { getPrototypeOf: h } = Object,
        c = ((t) => (e) => {
          let r = f.call(e);
          return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
        })(Object.create(null)),
        d = (t) => ((t = t.toLowerCase()), (e) => c(e) === t),
        p = (t) => (e) => typeof e === t,
        { isArray: g } = Array,
        m = p("undefined"),
        y = d("ArrayBuffer"),
        v = p("string"),
        b = p("function"),
        w = p("number"),
        A = (t) => null !== t && "object" == typeof t,
        E = (t) => {
          if ("object" !== c(t)) return !1;
          let e = h(t);
          return (
            (null === e ||
              e === Object.prototype ||
              null === Object.getPrototypeOf(e)) &&
            !(Symbol.toStringTag in t) &&
            !(Symbol.iterator in t)
          );
        },
        x = d("Date"),
        _ = d("File"),
        k = d("Blob"),
        N = d("FileList"),
        S = d("URLSearchParams"),
        [M, I, R, T] = ["ReadableStream", "Request", "Response", "Headers"].map(
          d
        );
      function P(t, e, { allOwnKeys: r = !1 } = {}) {
        let n, i;
        if (null != t) {
          if (("object" != typeof t && (t = [t]), g(t)))
            for (n = 0, i = t.length; n < i; n++) e.call(null, t[n], n, t);
          else {
            let i;
            let o = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
              s = o.length;
            for (n = 0; n < s; n++) (i = o[n]), e.call(null, t[i], i, t);
          }
        }
      }
      function O(t, e) {
        let r;
        e = e.toLowerCase();
        let n = Object.keys(t),
          i = n.length;
        for (; i-- > 0; ) if (e === (r = n[i]).toLowerCase()) return r;
        return null;
      }
      let B =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : global,
        C = (t) => !m(t) && t !== B,
        L = (
          (t) => (e) =>
            t && e instanceof t
        )("undefined" != typeof Uint8Array && h(Uint8Array)),
        U = d("HTMLFormElement"),
        F = (
          ({ hasOwnProperty: t }) =>
          (e, r) =>
            t.call(e, r)
        )(Object.prototype),
        D = d("RegExp"),
        j = (t, e) => {
          let r = Object.getOwnPropertyDescriptors(t),
            n = {};
          P(r, (r, i) => {
            let o;
            !1 !== (o = e(r, i, t)) && (n[i] = o || r);
          }),
            Object.defineProperties(t, n);
        },
        q = d("AsyncFunction"),
        H =
          ((i = "function" == typeof setImmediate),
          (o = b(B.postMessage)),
          i
            ? setImmediate
            : o
            ? ((t, e) => (
                B.addEventListener(
                  "message",
                  ({ source: r, data: n }) => {
                    r === B && n === t && e.length && e.shift()();
                  },
                  !1
                ),
                (r) => {
                  e.push(r), B.postMessage(t, "*");
                }
              ))(`axios@${Math.random()}`, [])
            : (t) => setTimeout(t)),
        z =
          "undefined" != typeof queueMicrotask
            ? queueMicrotask.bind(B)
            : (void 0 !== u && u.nextTick) || H,
        G = {
          isArray: g,
          isArrayBuffer: y,
          isBuffer: function (t) {
            return (
              null !== t &&
              !m(t) &&
              null !== t.constructor &&
              !m(t.constructor) &&
              b(t.constructor.isBuffer) &&
              t.constructor.isBuffer(t)
            );
          },
          isFormData: (t) => {
            let e;
            return (
              t &&
              (("function" == typeof FormData && t instanceof FormData) ||
                (b(t.append) &&
                  ("formdata" === (e = c(t)) ||
                    ("object" === e &&
                      b(t.toString) &&
                      "[object FormData]" === t.toString()))))
            );
          },
          isArrayBufferView: function (t) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(t)
              : t && t.buffer && y(t.buffer);
          },
          isString: v,
          isNumber: w,
          isBoolean: (t) => !0 === t || !1 === t,
          isObject: A,
          isPlainObject: E,
          isReadableStream: M,
          isRequest: I,
          isResponse: R,
          isHeaders: T,
          isUndefined: m,
          isDate: x,
          isFile: _,
          isBlob: k,
          isRegExp: D,
          isFunction: b,
          isStream: (t) => A(t) && b(t.pipe),
          isURLSearchParams: S,
          isTypedArray: L,
          isFileList: N,
          forEach: P,
          merge: function t() {
            let { caseless: e } = (C(this) && this) || {},
              r = {},
              n = (n, i) => {
                let o = (e && O(r, i)) || i;
                E(r[o]) && E(n)
                  ? (r[o] = t(r[o], n))
                  : E(n)
                  ? (r[o] = t({}, n))
                  : g(n)
                  ? (r[o] = n.slice())
                  : (r[o] = n);
              };
            for (let t = 0, e = arguments.length; t < e; t++)
              arguments[t] && P(arguments[t], n);
            return r;
          },
          extend: (t, e, r, { allOwnKeys: n } = {}) => (
            P(
              e,
              (e, n) => {
                r && b(e) ? (t[n] = l(e, r)) : (t[n] = e);
              },
              { allOwnKeys: n }
            ),
            t
          ),
          trim: (t) =>
            t.trim
              ? t.trim()
              : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
          stripBOM: (t) => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
          inherits: (t, e, r, n) => {
            (t.prototype = Object.create(e.prototype, n)),
              (t.prototype.constructor = t),
              Object.defineProperty(t, "super", { value: e.prototype }),
              r && Object.assign(t.prototype, r);
          },
          toFlatObject: (t, e, r, n) => {
            let i, o, s;
            let a = {};
            if (((e = e || {}), null == t)) return e;
            do {
              for (o = (i = Object.getOwnPropertyNames(t)).length; o-- > 0; )
                (s = i[o]),
                  (!n || n(s, t, e)) && !a[s] && ((e[s] = t[s]), (a[s] = !0));
              t = !1 !== r && h(t);
            } while (t && (!r || r(t, e)) && t !== Object.prototype);
            return e;
          },
          kindOf: c,
          kindOfTest: d,
          endsWith: (t, e, r) => {
            (t = String(t)),
              (void 0 === r || r > t.length) && (r = t.length),
              (r -= e.length);
            let n = t.indexOf(e, r);
            return -1 !== n && n === r;
          },
          toArray: (t) => {
            if (!t) return null;
            if (g(t)) return t;
            let e = t.length;
            if (!w(e)) return null;
            let r = Array(e);
            for (; e-- > 0; ) r[e] = t[e];
            return r;
          },
          forEachEntry: (t, e) => {
            let r;
            let n = (t && t[Symbol.iterator]).call(t);
            for (; (r = n.next()) && !r.done; ) {
              let n = r.value;
              e.call(t, n[0], n[1]);
            }
          },
          matchAll: (t, e) => {
            let r;
            let n = [];
            for (; null !== (r = t.exec(e)); ) n.push(r);
            return n;
          },
          isHTMLForm: U,
          hasOwnProperty: F,
          hasOwnProp: F,
          reduceDescriptors: j,
          freezeMethods: (t) => {
            j(t, (e, r) => {
              if (b(t) && -1 !== ["arguments", "caller", "callee"].indexOf(r))
                return !1;
              if (b(t[r])) {
                if (((e.enumerable = !1), "writable" in e)) {
                  e.writable = !1;
                  return;
                }
                e.set ||
                  (e.set = () => {
                    throw Error("Can not rewrite read-only method '" + r + "'");
                  });
              }
            });
          },
          toObjectSet: (t, e) => {
            let r = {};
            return (
              ((t) => {
                t.forEach((t) => {
                  r[t] = !0;
                });
              })(g(t) ? t : String(t).split(e)),
              r
            );
          },
          toCamelCase: (t) =>
            t
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (t, e, r) {
                return e.toUpperCase() + r;
              }),
          noop: () => {},
          toFiniteNumber: (t, e) =>
            null != t && Number.isFinite((t = +t)) ? t : e,
          findKey: O,
          global: B,
          isContextDefined: C,
          isSpecCompliantForm: function (t) {
            return !!(
              t &&
              b(t.append) &&
              "FormData" === t[Symbol.toStringTag] &&
              t[Symbol.iterator]
            );
          },
          toJSONObject: (t) => {
            let e = Array(10),
              r = (t, n) => {
                if (A(t)) {
                  if (e.indexOf(t) >= 0) return;
                  if (!("toJSON" in t)) {
                    e[n] = t;
                    let i = g(t) ? [] : {};
                    return (
                      P(t, (t, e) => {
                        let o = r(t, n + 1);
                        m(o) || (i[e] = o);
                      }),
                      (e[n] = void 0),
                      i
                    );
                  }
                }
                return t;
              };
            return r(t, 0);
          },
          isAsyncFn: q,
          isThenable: (t) => t && (A(t) || b(t)) && b(t.then) && b(t.catch),
          setImmediate: H,
          asap: z,
        };
      function V(t, e, r, n, i) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = Error().stack),
          (this.message = t),
          (this.name = "AxiosError"),
          e && (this.code = e),
          r && (this.config = r),
          n && (this.request = n),
          i &&
            ((this.response = i), (this.status = i.status ? i.status : null));
      }
      G.inherits(V, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: G.toJSONObject(this.config),
            code: this.code,
            status: this.status,
          };
        },
      });
      let Y = V.prototype,
        J = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach((t) => {
        J[t] = { value: t };
      }),
        Object.defineProperties(V, J),
        Object.defineProperty(Y, "isAxiosError", { value: !0 }),
        (V.from = (t, e, r, n, i, o) => {
          let s = Object.create(Y);
          return (
            G.toFlatObject(
              t,
              s,
              function (t) {
                return t !== Error.prototype;
              },
              (t) => "isAxiosError" !== t
            ),
            V.call(s, t.message, e, r, n, i),
            (s.cause = t),
            (s.name = t.name),
            o && Object.assign(s, o),
            s
          );
        });
      var K = r(8287).Buffer;
      function W(t) {
        return G.isPlainObject(t) || G.isArray(t);
      }
      function Q(t) {
        return G.endsWith(t, "[]") ? t.slice(0, -2) : t;
      }
      function X(t, e, r) {
        return t
          ? t
              .concat(e)
              .map(function (t, e) {
                return (t = Q(t)), !r && e ? "[" + t + "]" : t;
              })
              .join(r ? "." : "")
          : e;
      }
      let Z = G.toFlatObject(G, {}, null, function (t) {
          return /^is[A-Z]/.test(t);
        }),
        $ = function (t, e, r) {
          if (!G.isObject(t)) throw TypeError("target must be an object");
          e = e || new FormData();
          let n = (r = G.toFlatObject(
              r,
              { metaTokens: !0, dots: !1, indexes: !1 },
              !1,
              function (t, e) {
                return !G.isUndefined(e[t]);
              }
            )).metaTokens,
            i = r.visitor || u,
            o = r.dots,
            s = r.indexes,
            a =
              (r.Blob || ("undefined" != typeof Blob && Blob)) &&
              G.isSpecCompliantForm(e);
          if (!G.isFunction(i)) throw TypeError("visitor must be a function");
          function l(t) {
            if (null === t) return "";
            if (G.isDate(t)) return t.toISOString();
            if (!a && G.isBlob(t))
              throw new V("Blob is not supported. Use a Buffer instead.");
            return G.isArrayBuffer(t) || G.isTypedArray(t)
              ? a && "function" == typeof Blob
                ? new Blob([t])
                : K.from(t)
              : t;
          }
          function u(t, r, i) {
            let a = t;
            if (t && !i && "object" == typeof t) {
              if (G.endsWith(r, "{}"))
                (r = n ? r : r.slice(0, -2)), (t = JSON.stringify(t));
              else {
                var u;
                if (
                  (G.isArray(t) && ((u = t), G.isArray(u) && !u.some(W))) ||
                  ((G.isFileList(t) || G.endsWith(r, "[]")) &&
                    (a = G.toArray(t)))
                )
                  return (
                    (r = Q(r)),
                    a.forEach(function (t, n) {
                      G.isUndefined(t) ||
                        null === t ||
                        e.append(
                          !0 === s ? X([r], n, o) : null === s ? r : r + "[]",
                          l(t)
                        );
                    }),
                    !1
                  );
              }
            }
            return !!W(t) || (e.append(X(i, r, o), l(t)), !1);
          }
          let f = [],
            h = Object.assign(Z, {
              defaultVisitor: u,
              convertValue: l,
              isVisitable: W,
            });
          if (!G.isObject(t)) throw TypeError("data must be an object");
          return (
            !(function t(r, n) {
              if (!G.isUndefined(r)) {
                if (-1 !== f.indexOf(r))
                  throw Error("Circular reference detected in " + n.join("."));
                f.push(r),
                  G.forEach(r, function (r, o) {
                    !0 ===
                      (!(G.isUndefined(r) || null === r) &&
                        i.call(e, r, G.isString(o) ? o.trim() : o, n, h)) &&
                      t(r, n ? n.concat(o) : [o]);
                  }),
                  f.pop();
              }
            })(t),
            e
          );
        };
      function tt(t) {
        let e = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (t) {
          return e[t];
        });
      }
      function te(t, e) {
        (this._pairs = []), t && $(t, this, e);
      }
      let tr = te.prototype;
      function tn(t) {
        return encodeURIComponent(t)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function ti(t, e, r) {
        let n;
        if (!e) return t;
        let i = (r && r.encode) || tn;
        G.isFunction(r) && (r = { serialize: r });
        let o = r && r.serialize;
        if (
          (n = o
            ? o(e, r)
            : G.isURLSearchParams(e)
            ? e.toString()
            : new te(e, r).toString(i))
        ) {
          let e = t.indexOf("#");
          -1 !== e && (t = t.slice(0, e)),
            (t += (-1 === t.indexOf("?") ? "?" : "&") + n);
        }
        return t;
      }
      (tr.append = function (t, e) {
        this._pairs.push([t, e]);
      }),
        (tr.toString = function (t) {
          let e = t
            ? function (e) {
                return t.call(this, e, tt);
              }
            : tt;
          return this._pairs
            .map(function (t) {
              return e(t[0]) + "=" + e(t[1]);
            }, "")
            .join("&");
        });
      class to {
        constructor() {
          this.handlers = [];
        }
        use(t, e, r) {
          return (
            this.handlers.push({
              fulfilled: t,
              rejected: e,
              synchronous: !!r && r.synchronous,
              runWhen: r ? r.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }
        eject(t) {
          this.handlers[t] && (this.handlers[t] = null);
        }
        clear() {
          this.handlers && (this.handlers = []);
        }
        forEach(t) {
          G.forEach(this.handlers, function (e) {
            null !== e && t(e);
          });
        }
      }
      let ts = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        ta = "undefined" != typeof URLSearchParams ? URLSearchParams : te,
        tl = "undefined" != typeof FormData ? FormData : null,
        tu = "undefined" != typeof Blob ? Blob : null,
        tf = "undefined" != typeof window && "undefined" != typeof document,
        th = ("object" == typeof navigator && navigator) || void 0,
        tc =
          tf &&
          (!th ||
            0 > ["ReactNative", "NativeScript", "NS"].indexOf(th.product)),
        td =
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" == typeof self.importScripts,
        tp = (tf && window.location.href) || "http://localhost",
        tg = {
          ...a,
          isBrowser: !0,
          classes: { URLSearchParams: ta, FormData: tl, Blob: tu },
          protocols: ["http", "https", "file", "blob", "url", "data"],
        },
        tm = function (t) {
          if (G.isFormData(t) && G.isFunction(t.entries)) {
            let e = {};
            return (
              G.forEachEntry(t, (t, r) => {
                !(function t(e, r, n, i) {
                  let o = e[i++];
                  if ("__proto__" === o) return !0;
                  let s = Number.isFinite(+o),
                    a = i >= e.length;
                  return (
                    ((o = !o && G.isArray(n) ? n.length : o), a)
                      ? G.hasOwnProp(n, o)
                        ? (n[o] = [n[o], r])
                        : (n[o] = r)
                      : ((n[o] && G.isObject(n[o])) || (n[o] = []),
                        t(e, r, n[o], i) &&
                          G.isArray(n[o]) &&
                          (n[o] = (function (t) {
                            let e, r;
                            let n = {},
                              i = Object.keys(t),
                              o = i.length;
                            for (e = 0; e < o; e++) n[(r = i[e])] = t[r];
                            return n;
                          })(n[o]))),
                    !s
                  );
                })(
                  G.matchAll(/\w+|\[(\w*)]/g, t).map((t) =>
                    "[]" === t[0] ? "" : t[1] || t[0]
                  ),
                  r,
                  e,
                  0
                );
              }),
              e
            );
          }
          return null;
        },
        ty = {
          transitional: ts,
          adapter: ["xhr", "http", "fetch"],
          transformRequest: [
            function (t, e) {
              let r;
              let n = e.getContentType() || "",
                i = n.indexOf("application/json") > -1,
                o = G.isObject(t);
              if (
                (o && G.isHTMLForm(t) && (t = new FormData(t)), G.isFormData(t))
              )
                return i ? JSON.stringify(tm(t)) : t;
              if (
                G.isArrayBuffer(t) ||
                G.isBuffer(t) ||
                G.isStream(t) ||
                G.isFile(t) ||
                G.isBlob(t) ||
                G.isReadableStream(t)
              )
                return t;
              if (G.isArrayBufferView(t)) return t.buffer;
              if (G.isURLSearchParams(t))
                return (
                  e.setContentType(
                    "application/x-www-form-urlencoded;charset=utf-8",
                    !1
                  ),
                  t.toString()
                );
              if (o) {
                if (n.indexOf("application/x-www-form-urlencoded") > -1) {
                  var s, a;
                  return ((s = t),
                  (a = this.formSerializer),
                  $(
                    s,
                    new tg.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (t, e, r, n) {
                          return tg.isNode && G.isBuffer(t)
                            ? (this.append(e, t.toString("base64")), !1)
                            : n.defaultVisitor.apply(this, arguments);
                        },
                      },
                      a
                    )
                  )).toString();
                }
                if (
                  (r = G.isFileList(t)) ||
                  n.indexOf("multipart/form-data") > -1
                ) {
                  let e = this.env && this.env.FormData;
                  return $(
                    r ? { "files[]": t } : t,
                    e && new e(),
                    this.formSerializer
                  );
                }
              }
              return o || i
                ? (e.setContentType("application/json", !1),
                  (function (t, e, r) {
                    if (G.isString(t))
                      try {
                        return (0, JSON.parse)(t), G.trim(t);
                      } catch (t) {
                        if ("SyntaxError" !== t.name) throw t;
                      }
                    return (0, JSON.stringify)(t);
                  })(t))
                : t;
            },
          ],
          transformResponse: [
            function (t) {
              let e = this.transitional || ty.transitional,
                r = e && e.forcedJSONParsing,
                n = "json" === this.responseType;
              if (G.isResponse(t) || G.isReadableStream(t)) return t;
              if (t && G.isString(t) && ((r && !this.responseType) || n)) {
                let r = e && e.silentJSONParsing;
                try {
                  return JSON.parse(t);
                } catch (t) {
                  if (!r && n) {
                    if ("SyntaxError" === t.name)
                      throw V.from(
                        t,
                        V.ERR_BAD_RESPONSE,
                        this,
                        null,
                        this.response
                      );
                    throw t;
                  }
                }
              }
              return t;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          env: { FormData: tg.classes.FormData, Blob: tg.classes.Blob },
          validateStatus: function (t) {
            return t >= 200 && t < 300;
          },
          headers: {
            common: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": void 0,
            },
          },
        };
      G.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
        ty.headers[t] = {};
      });
      let tv = G.toObjectSet([
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ]),
        tb = (t) => {
          let e, r, n;
          let i = {};
          return (
            t &&
              t.split("\n").forEach(function (t) {
                (n = t.indexOf(":")),
                  (e = t.substring(0, n).trim().toLowerCase()),
                  (r = t.substring(n + 1).trim()),
                  !e ||
                    (i[e] && tv[e]) ||
                    ("set-cookie" === e
                      ? i[e]
                        ? i[e].push(r)
                        : (i[e] = [r])
                      : (i[e] = i[e] ? i[e] + ", " + r : r));
              }),
            i
          );
        },
        tw = Symbol("internals");
      function tA(t) {
        return t && String(t).trim().toLowerCase();
      }
      function tE(t) {
        return !1 === t || null == t ? t : G.isArray(t) ? t.map(tE) : String(t);
      }
      let tx = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
      function t_(t, e, r, n, i) {
        if (G.isFunction(n)) return n.call(this, e, r);
        if ((i && (e = r), G.isString(e))) {
          if (G.isString(n)) return -1 !== e.indexOf(n);
          if (G.isRegExp(n)) return n.test(e);
        }
      }
      class tk {
        constructor(t) {
          t && this.set(t);
        }
        set(t, e, r) {
          let n = this;
          function i(t, e, r) {
            let i = tA(e);
            if (!i) throw Error("header name must be a non-empty string");
            let o = G.findKey(n, i);
            (o &&
              void 0 !== n[o] &&
              !0 !== r &&
              (void 0 !== r || !1 === n[o])) ||
              (n[o || e] = tE(t));
          }
          let o = (t, e) => G.forEach(t, (t, r) => i(t, r, e));
          if (G.isPlainObject(t) || t instanceof this.constructor) o(t, e);
          else if (G.isString(t) && (t = t.trim()) && !tx(t)) o(tb(t), e);
          else if (G.isHeaders(t)) for (let [e, n] of t.entries()) i(n, e, r);
          else null != t && i(e, t, r);
          return this;
        }
        get(t, e) {
          if ((t = tA(t))) {
            let r = G.findKey(this, t);
            if (r) {
              let t = this[r];
              if (!e) return t;
              if (!0 === e)
                return (function (t) {
                  let e;
                  let r = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  for (; (e = n.exec(t)); ) r[e[1]] = e[2];
                  return r;
                })(t);
              if (G.isFunction(e)) return e.call(this, t, r);
              if (G.isRegExp(e)) return e.exec(t);
              throw TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(t, e) {
          if ((t = tA(t))) {
            let r = G.findKey(this, t);
            return !!(
              r &&
              void 0 !== this[r] &&
              (!e || t_(this, this[r], r, e))
            );
          }
          return !1;
        }
        delete(t, e) {
          let r = this,
            n = !1;
          function i(t) {
            if ((t = tA(t))) {
              let i = G.findKey(r, t);
              i && (!e || t_(r, r[i], i, e)) && (delete r[i], (n = !0));
            }
          }
          return G.isArray(t) ? t.forEach(i) : i(t), n;
        }
        clear(t) {
          let e = Object.keys(this),
            r = e.length,
            n = !1;
          for (; r--; ) {
            let i = e[r];
            (!t || t_(this, this[i], i, t, !0)) && (delete this[i], (n = !0));
          }
          return n;
        }
        normalize(t) {
          let e = this,
            r = {};
          return (
            G.forEach(this, (n, i) => {
              let o = G.findKey(r, i);
              if (o) {
                (e[o] = tE(n)), delete e[i];
                return;
              }
              let s = t
                ? i
                    .trim()
                    .toLowerCase()
                    .replace(
                      /([a-z\d])(\w*)/g,
                      (t, e, r) => e.toUpperCase() + r
                    )
                : String(i).trim();
              s !== i && delete e[i], (e[s] = tE(n)), (r[s] = !0);
            }),
            this
          );
        }
        concat(...t) {
          return this.constructor.concat(this, ...t);
        }
        toJSON(t) {
          let e = Object.create(null);
          return (
            G.forEach(this, (r, n) => {
              null != r &&
                !1 !== r &&
                (e[n] = t && G.isArray(r) ? r.join(", ") : r);
            }),
            e
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map(([t, e]) => t + ": " + e)
            .join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(t) {
          return t instanceof this ? t : new this(t);
        }
        static concat(t, ...e) {
          let r = new this(t);
          return e.forEach((t) => r.set(t)), r;
        }
        static accessor(t) {
          let e = (this[tw] = this[tw] = { accessors: {} }).accessors,
            r = this.prototype;
          function n(t) {
            let n = tA(t);
            e[n] ||
              (!(function (t, e) {
                let r = G.toCamelCase(" " + e);
                ["get", "set", "has"].forEach((n) => {
                  Object.defineProperty(t, n + r, {
                    value: function (t, r, i) {
                      return this[n].call(this, e, t, r, i);
                    },
                    configurable: !0,
                  });
                });
              })(r, t),
              (e[n] = !0));
          }
          return G.isArray(t) ? t.forEach(n) : n(t), this;
        }
      }
      function tN(t, e) {
        let r = this || ty,
          n = e || r,
          i = tk.from(n.headers),
          o = n.data;
        return (
          G.forEach(t, function (t) {
            o = t.call(r, o, i.normalize(), e ? e.status : void 0);
          }),
          i.normalize(),
          o
        );
      }
      function tS(t) {
        return !!(t && t.__CANCEL__);
      }
      function tM(t, e, r) {
        V.call(this, null == t ? "canceled" : t, V.ERR_CANCELED, e, r),
          (this.name = "CanceledError");
      }
      function tI(t, e, r) {
        let n = r.config.validateStatus;
        !r.status || !n || n(r.status)
          ? t(r)
          : e(
              new V(
                "Request failed with status code " + r.status,
                [V.ERR_BAD_REQUEST, V.ERR_BAD_RESPONSE][
                  Math.floor(r.status / 100) - 4
                ],
                r.config,
                r.request,
                r
              )
            );
      }
      tk.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        G.reduceDescriptors(tk.prototype, ({ value: t }, e) => {
          let r = e[0].toUpperCase() + e.slice(1);
          return {
            get: () => t,
            set(t) {
              this[r] = t;
            },
          };
        }),
        G.freezeMethods(tk),
        G.inherits(tM, V, { __CANCEL__: !0 });
      let tR = function (t, e) {
          let r;
          let n = Array((t = t || 10)),
            i = Array(t),
            o = 0,
            s = 0;
          return (
            (e = void 0 !== e ? e : 1e3),
            function (a) {
              let l = Date.now(),
                u = i[s];
              r || (r = l), (n[o] = a), (i[o] = l);
              let f = s,
                h = 0;
              for (; f !== o; ) (h += n[f++]), (f %= t);
              if (((o = (o + 1) % t) === s && (s = (s + 1) % t), l - r < e))
                return;
              let c = u && l - u;
              return c ? Math.round((1e3 * h) / c) : void 0;
            }
          );
        },
        tT = function (t, e) {
          let r,
            n,
            i = 0,
            o = 1e3 / e,
            s = (e, o = Date.now()) => {
              (i = o),
                (r = null),
                n && (clearTimeout(n), (n = null)),
                t.apply(null, e);
            };
          return [
            (...t) => {
              let e = Date.now(),
                a = e - i;
              a >= o
                ? s(t, e)
                : ((r = t),
                  n ||
                    (n = setTimeout(() => {
                      (n = null), s(r);
                    }, o - a)));
            },
            () => r && s(r),
          ];
        },
        tP = (t, e, r = 3) => {
          let n = 0,
            i = tR(50, 250);
          return tT((r) => {
            let o = r.loaded,
              s = r.lengthComputable ? r.total : void 0,
              a = o - n,
              l = i(a);
            (n = o),
              t({
                loaded: o,
                total: s,
                progress: s ? o / s : void 0,
                bytes: a,
                rate: l || void 0,
                estimated: l && s && o <= s ? (s - o) / l : void 0,
                event: r,
                lengthComputable: null != s,
                [e ? "download" : "upload"]: !0,
              });
          }, r);
        },
        tO = (t, e) => {
          let r = null != t;
          return [
            (n) => e[0]({ lengthComputable: r, total: t, loaded: n }),
            e[1],
          ];
        },
        tB =
          (t) =>
          (...e) =>
            G.asap(() => t(...e)),
        tC = tg.hasStandardBrowserEnv
          ? ((t, e) => (r) => (
              (r = new URL(r, tg.origin)),
              t.protocol === r.protocol &&
                t.host === r.host &&
                (e || t.port === r.port)
            ))(
              new URL(tg.origin),
              tg.navigator && /(msie|trident)/i.test(tg.navigator.userAgent)
            )
          : () => !0,
        tL = tg.hasStandardBrowserEnv
          ? {
              write(t, e, r, n, i, o) {
                let s = [t + "=" + encodeURIComponent(e)];
                G.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()),
                  G.isString(n) && s.push("path=" + n),
                  G.isString(i) && s.push("domain=" + i),
                  !0 === o && s.push("secure"),
                  (document.cookie = s.join("; "));
              },
              read(t) {
                let e = document.cookie.match(
                  RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
                );
                return e ? decodeURIComponent(e[3]) : null;
              },
              remove(t) {
                this.write(t, "", Date.now() - 864e5);
              },
            }
          : { write() {}, read: () => null, remove() {} };
      function tU(t, e, r) {
        let n = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
        return t && (n || !1 == r)
          ? e
            ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "")
            : t
          : e;
      }
      let tF = (t) => (t instanceof tk ? { ...t } : t);
      function tD(t, e) {
        e = e || {};
        let r = {};
        function n(t, e, r, n) {
          return G.isPlainObject(t) && G.isPlainObject(e)
            ? G.merge.call({ caseless: n }, t, e)
            : G.isPlainObject(e)
            ? G.merge({}, e)
            : G.isArray(e)
            ? e.slice()
            : e;
        }
        function i(t, e, r, i) {
          return G.isUndefined(e)
            ? G.isUndefined(t)
              ? void 0
              : n(void 0, t, r, i)
            : n(t, e, r, i);
        }
        function o(t, e) {
          if (!G.isUndefined(e)) return n(void 0, e);
        }
        function s(t, e) {
          return G.isUndefined(e)
            ? G.isUndefined(t)
              ? void 0
              : n(void 0, t)
            : n(void 0, e);
        }
        function a(r, i, o) {
          return o in e ? n(r, i) : o in t ? n(void 0, r) : void 0;
        }
        let l = {
          url: o,
          method: o,
          data: o,
          baseURL: s,
          transformRequest: s,
          transformResponse: s,
          paramsSerializer: s,
          timeout: s,
          timeoutMessage: s,
          withCredentials: s,
          withXSRFToken: s,
          adapter: s,
          responseType: s,
          xsrfCookieName: s,
          xsrfHeaderName: s,
          onUploadProgress: s,
          onDownloadProgress: s,
          decompress: s,
          maxContentLength: s,
          maxBodyLength: s,
          beforeRedirect: s,
          transport: s,
          httpAgent: s,
          httpsAgent: s,
          cancelToken: s,
          socketPath: s,
          responseEncoding: s,
          validateStatus: a,
          headers: (t, e, r) => i(tF(t), tF(e), r, !0),
        };
        return (
          G.forEach(Object.keys(Object.assign({}, t, e)), function (n) {
            let o = l[n] || i,
              s = o(t[n], e[n], n);
            (G.isUndefined(s) && o !== a) || (r[n] = s);
          }),
          r
        );
      }
      let tj = (t) => {
          let e;
          let r = tD({}, t),
            {
              data: n,
              withXSRFToken: i,
              xsrfHeaderName: o,
              xsrfCookieName: s,
              headers: a,
              auth: l,
            } = r;
          if (
            ((r.headers = a = tk.from(a)),
            (r.url = ti(
              tU(r.baseURL, r.url, r.allowAbsoluteUrls),
              t.params,
              t.paramsSerializer
            )),
            l &&
              a.set(
                "Authorization",
                "Basic " +
                  btoa(
                    (l.username || "") +
                      ":" +
                      (l.password
                        ? unescape(encodeURIComponent(l.password))
                        : "")
                  )
              ),
            G.isFormData(n))
          ) {
            if (tg.hasStandardBrowserEnv || tg.hasStandardBrowserWebWorkerEnv)
              a.setContentType(void 0);
            else if (!1 !== (e = a.getContentType())) {
              let [t, ...r] = e
                ? e
                    .split(";")
                    .map((t) => t.trim())
                    .filter(Boolean)
                : [];
              a.setContentType([t || "multipart/form-data", ...r].join("; "));
            }
          }
          if (
            tg.hasStandardBrowserEnv &&
            (i && G.isFunction(i) && (i = i(r)), i || (!1 !== i && tC(r.url)))
          ) {
            let t = o && s && tL.read(s);
            t && a.set(o, t);
          }
          return r;
        },
        tq =
          "undefined" != typeof XMLHttpRequest &&
          function (t) {
            return new Promise(function (e, r) {
              let n, i, o, s, a;
              let l = tj(t),
                u = l.data,
                f = tk.from(l.headers).normalize(),
                {
                  responseType: h,
                  onUploadProgress: c,
                  onDownloadProgress: d,
                } = l;
              function p() {
                s && s(),
                  a && a(),
                  l.cancelToken && l.cancelToken.unsubscribe(n),
                  l.signal && l.signal.removeEventListener("abort", n);
              }
              let g = new XMLHttpRequest();
              function m() {
                if (!g) return;
                let n = tk.from(
                  "getAllResponseHeaders" in g && g.getAllResponseHeaders()
                );
                tI(
                  function (t) {
                    e(t), p();
                  },
                  function (t) {
                    r(t), p();
                  },
                  {
                    data:
                      h && "text" !== h && "json" !== h
                        ? g.response
                        : g.responseText,
                    status: g.status,
                    statusText: g.statusText,
                    headers: n,
                    config: t,
                    request: g,
                  }
                ),
                  (g = null);
              }
              g.open(l.method.toUpperCase(), l.url, !0),
                (g.timeout = l.timeout),
                "onloadend" in g
                  ? (g.onloadend = m)
                  : (g.onreadystatechange = function () {
                      g &&
                        4 === g.readyState &&
                        (0 !== g.status ||
                          (g.responseURL &&
                            0 === g.responseURL.indexOf("file:"))) &&
                        setTimeout(m);
                    }),
                (g.onabort = function () {
                  g &&
                    (r(new V("Request aborted", V.ECONNABORTED, t, g)),
                    (g = null));
                }),
                (g.onerror = function () {
                  r(new V("Network Error", V.ERR_NETWORK, t, g)), (g = null);
                }),
                (g.ontimeout = function () {
                  let e = l.timeout
                      ? "timeout of " + l.timeout + "ms exceeded"
                      : "timeout exceeded",
                    n = l.transitional || ts;
                  l.timeoutErrorMessage && (e = l.timeoutErrorMessage),
                    r(
                      new V(
                        e,
                        n.clarifyTimeoutError ? V.ETIMEDOUT : V.ECONNABORTED,
                        t,
                        g
                      )
                    ),
                    (g = null);
                }),
                void 0 === u && f.setContentType(null),
                "setRequestHeader" in g &&
                  G.forEach(f.toJSON(), function (t, e) {
                    g.setRequestHeader(e, t);
                  }),
                G.isUndefined(l.withCredentials) ||
                  (g.withCredentials = !!l.withCredentials),
                h && "json" !== h && (g.responseType = l.responseType),
                d && (([o, a] = tP(d, !0)), g.addEventListener("progress", o)),
                c &&
                  g.upload &&
                  (([i, s] = tP(c)),
                  g.upload.addEventListener("progress", i),
                  g.upload.addEventListener("loadend", s)),
                (l.cancelToken || l.signal) &&
                  ((n = (e) => {
                    g &&
                      (r(!e || e.type ? new tM(null, t, g) : e),
                      g.abort(),
                      (g = null));
                  }),
                  l.cancelToken && l.cancelToken.subscribe(n),
                  l.signal &&
                    (l.signal.aborted
                      ? n()
                      : l.signal.addEventListener("abort", n)));
              let y = (function (t) {
                let e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
                return (e && e[1]) || "";
              })(l.url);
              if (y && -1 === tg.protocols.indexOf(y)) {
                r(
                  new V("Unsupported protocol " + y + ":", V.ERR_BAD_REQUEST, t)
                );
                return;
              }
              g.send(u || null);
            });
          },
        tH = (t, e) => {
          let { length: r } = (t = t ? t.filter(Boolean) : []);
          if (e || r) {
            let r,
              n = new AbortController(),
              i = function (t) {
                if (!r) {
                  (r = !0), s();
                  let e = t instanceof Error ? t : this.reason;
                  n.abort(
                    e instanceof V
                      ? e
                      : new tM(e instanceof Error ? e.message : e)
                  );
                }
              },
              o =
                e &&
                setTimeout(() => {
                  (o = null),
                    i(new V(`timeout ${e} of ms exceeded`, V.ETIMEDOUT));
                }, e),
              s = () => {
                t &&
                  (o && clearTimeout(o),
                  (o = null),
                  t.forEach((t) => {
                    t.unsubscribe
                      ? t.unsubscribe(i)
                      : t.removeEventListener("abort", i);
                  }),
                  (t = null));
              };
            t.forEach((t) => t.addEventListener("abort", i));
            let { signal: a } = n;
            return (a.unsubscribe = () => G.asap(s)), a;
          }
        },
        tz = function* (t, e) {
          let r,
            n = t.byteLength;
          if (!e || n < e) {
            yield t;
            return;
          }
          let i = 0;
          for (; i < n; ) (r = i + e), yield t.slice(i, r), (i = r);
        },
        tG = async function* (t, e) {
          for await (let r of tV(t)) yield* tz(r, e);
        },
        tV = async function* (t) {
          if (t[Symbol.asyncIterator]) {
            yield* t;
            return;
          }
          let e = t.getReader();
          try {
            for (;;) {
              let { done: t, value: r } = await e.read();
              if (t) break;
              yield r;
            }
          } finally {
            await e.cancel();
          }
        },
        tY = (t, e, r, n) => {
          let i;
          let o = tG(t, e),
            s = 0,
            a = (t) => {
              !i && ((i = !0), n && n(t));
            };
          return new ReadableStream(
            {
              async pull(t) {
                try {
                  let { done: e, value: n } = await o.next();
                  if (e) {
                    a(), t.close();
                    return;
                  }
                  let i = n.byteLength;
                  if (r) {
                    let t = (s += i);
                    r(t);
                  }
                  t.enqueue(new Uint8Array(n));
                } catch (t) {
                  throw (a(t), t);
                }
              },
              cancel: (t) => (a(t), o.return()),
            },
            { highWaterMark: 2 }
          );
        },
        tJ =
          "function" == typeof fetch &&
          "function" == typeof Request &&
          "function" == typeof Response,
        tK = tJ && "function" == typeof ReadableStream,
        tW =
          tJ &&
          ("function" == typeof TextEncoder
            ? ((n = new TextEncoder()), (t) => n.encode(t))
            : async (t) => new Uint8Array(await new Response(t).arrayBuffer())),
        tQ = (t, ...e) => {
          try {
            return !!t(...e);
          } catch (t) {
            return !1;
          }
        },
        tX =
          tK &&
          tQ(() => {
            let t = !1,
              e = new Request(tg.origin, {
                body: new ReadableStream(),
                method: "POST",
                get duplex() {
                  return (t = !0), "half";
                },
              }).headers.has("Content-Type");
            return t && !e;
          }),
        tZ = tK && tQ(() => G.isReadableStream(new Response("").body)),
        t$ = { stream: tZ && ((t) => t.body) };
      tJ &&
        ((s = new Response()),
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
          t$[t] ||
            (t$[t] = G.isFunction(s[t])
              ? (e) => e[t]()
              : (e, r) => {
                  throw new V(
                    `Response type '${t}' is not supported`,
                    V.ERR_NOT_SUPPORT,
                    r
                  );
                });
        }));
      let t0 = async (t) => {
          if (null == t) return 0;
          if (G.isBlob(t)) return t.size;
          if (G.isSpecCompliantForm(t)) {
            let e = new Request(tg.origin, { method: "POST", body: t });
            return (await e.arrayBuffer()).byteLength;
          }
          return G.isArrayBufferView(t) || G.isArrayBuffer(t)
            ? t.byteLength
            : (G.isURLSearchParams(t) && (t += ""), G.isString(t))
            ? (await tW(t)).byteLength
            : void 0;
        },
        t1 = async (t, e) => {
          let r = G.toFiniteNumber(t.getContentLength());
          return null == r ? t0(e) : r;
        },
        t2 = {
          http: null,
          xhr: tq,
          fetch:
            tJ &&
            (async (t) => {
              let e,
                r,
                {
                  url: n,
                  method: i,
                  data: o,
                  signal: s,
                  cancelToken: a,
                  timeout: l,
                  onDownloadProgress: u,
                  onUploadProgress: f,
                  responseType: h,
                  headers: c,
                  withCredentials: d = "same-origin",
                  fetchOptions: p,
                } = tj(t);
              h = h ? (h + "").toLowerCase() : "text";
              let g = tH([s, a && a.toAbortSignal()], l),
                m =
                  g &&
                  g.unsubscribe &&
                  (() => {
                    g.unsubscribe();
                  });
              try {
                if (
                  f &&
                  tX &&
                  "get" !== i &&
                  "head" !== i &&
                  0 !== (r = await t1(c, o))
                ) {
                  let t,
                    e = new Request(n, {
                      method: "POST",
                      body: o,
                      duplex: "half",
                    });
                  if (
                    (G.isFormData(o) &&
                      (t = e.headers.get("content-type")) &&
                      c.setContentType(t),
                    e.body)
                  ) {
                    let [t, n] = tO(r, tP(tB(f)));
                    o = tY(e.body, 65536, t, n);
                  }
                }
                G.isString(d) || (d = d ? "include" : "omit");
                let s = "credentials" in Request.prototype;
                e = new Request(n, {
                  ...p,
                  signal: g,
                  method: i.toUpperCase(),
                  headers: c.normalize().toJSON(),
                  body: o,
                  duplex: "half",
                  credentials: s ? d : void 0,
                });
                let a = await fetch(e),
                  l = tZ && ("stream" === h || "response" === h);
                if (tZ && (u || (l && m))) {
                  let t = {};
                  ["status", "statusText", "headers"].forEach((e) => {
                    t[e] = a[e];
                  });
                  let e = G.toFiniteNumber(a.headers.get("content-length")),
                    [r, n] = (u && tO(e, tP(tB(u), !0))) || [];
                  a = new Response(
                    tY(a.body, 65536, r, () => {
                      n && n(), m && m();
                    }),
                    t
                  );
                }
                h = h || "text";
                let y = await t$[G.findKey(t$, h) || "text"](a, t);
                return (
                  !l && m && m(),
                  await new Promise((r, n) => {
                    tI(r, n, {
                      data: y,
                      headers: tk.from(a.headers),
                      status: a.status,
                      statusText: a.statusText,
                      config: t,
                      request: e,
                    });
                  })
                );
              } catch (r) {
                if (
                  (m && m(),
                  r && "TypeError" === r.name && /fetch/i.test(r.message))
                )
                  throw Object.assign(
                    new V("Network Error", V.ERR_NETWORK, t, e),
                    { cause: r.cause || r }
                  );
                throw V.from(r, r && r.code, t, e);
              }
            }),
        };
      G.forEach(t2, (t, e) => {
        if (t) {
          try {
            Object.defineProperty(t, "name", { value: e });
          } catch (t) {}
          Object.defineProperty(t, "adapterName", { value: e });
        }
      });
      let t3 = (t) => `- ${t}`,
        t6 = (t) => G.isFunction(t) || null === t || !1 === t,
        t4 = {
          getAdapter: (t) => {
            let e, r;
            let { length: n } = (t = G.isArray(t) ? t : [t]),
              i = {};
            for (let o = 0; o < n; o++) {
              let n;
              if (
                ((r = e = t[o]),
                !t6(e) && void 0 === (r = t2[(n = String(e)).toLowerCase()]))
              )
                throw new V(`Unknown adapter '${n}'`);
              if (r) break;
              i[n || "#" + o] = r;
            }
            if (!r) {
              let t = Object.entries(i).map(
                ([t, e]) =>
                  `adapter ${t} ` +
                  (!1 === e
                    ? "is not supported by the environment"
                    : "is not available in the build")
              );
              throw new V(
                "There is no suitable adapter to dispatch the request " +
                  (n
                    ? t.length > 1
                      ? "since :\n" + t.map(t3).join("\n")
                      : " " + t3(t[0])
                    : "as no adapter specified"),
                "ERR_NOT_SUPPORT"
              );
            }
            return r;
          },
        };
      function t5(t) {
        if (
          (t.cancelToken && t.cancelToken.throwIfRequested(),
          t.signal && t.signal.aborted)
        )
          throw new tM(null, t);
      }
      function t8(t) {
        return (
          t5(t),
          (t.headers = tk.from(t.headers)),
          (t.data = tN.call(t, t.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(t.method) &&
            t.headers.setContentType("application/x-www-form-urlencoded", !1),
          t4
            .getAdapter(t.adapter || ty.adapter)(t)
            .then(
              function (e) {
                return (
                  t5(t),
                  (e.data = tN.call(t, t.transformResponse, e)),
                  (e.headers = tk.from(e.headers)),
                  e
                );
              },
              function (e) {
                return (
                  !tS(e) &&
                    (t5(t),
                    e &&
                      e.response &&
                      ((e.response.data = tN.call(
                        t,
                        t.transformResponse,
                        e.response
                      )),
                      (e.response.headers = tk.from(e.response.headers)))),
                  Promise.reject(e)
                );
              }
            )
        );
      }
      let t9 = "1.8.4",
        t7 = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (t, e) => {
          t7[t] = function (r) {
            return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
          };
        }
      );
      let et = {};
      (t7.transitional = function (t, e, r) {
        function n(t, e) {
          return (
            "[Axios v" +
            t9 +
            "] Transitional option '" +
            t +
            "'" +
            e +
            (r ? ". " + r : "")
          );
        }
        return (r, i, o) => {
          if (!1 === t)
            throw new V(
              n(i, " has been removed" + (e ? " in " + e : "")),
              V.ERR_DEPRECATED
            );
          return (
            e &&
              !et[i] &&
              ((et[i] = !0),
              console.warn(
                n(
                  i,
                  " has been deprecated since v" +
                    e +
                    " and will be removed in the near future"
                )
              )),
            !t || t(r, i, o)
          );
        };
      }),
        (t7.spelling = function (t) {
          return (e, r) => (
            console.warn(`${r} is likely a misspelling of ${t}`), !0
          );
        });
      let ee = {
          assertOptions: function (t, e, r) {
            if ("object" != typeof t)
              throw new V("options must be an object", V.ERR_BAD_OPTION_VALUE);
            let n = Object.keys(t),
              i = n.length;
            for (; i-- > 0; ) {
              let o = n[i],
                s = e[o];
              if (s) {
                let e = t[o],
                  r = void 0 === e || s(e, o, t);
                if (!0 !== r)
                  throw new V(
                    "option " + o + " must be " + r,
                    V.ERR_BAD_OPTION_VALUE
                  );
                continue;
              }
              if (!0 !== r)
                throw new V("Unknown option " + o, V.ERR_BAD_OPTION);
            }
          },
          validators: t7,
        },
        er = ee.validators;
      class en {
        constructor(t) {
          (this.defaults = t),
            (this.interceptors = { request: new to(), response: new to() });
        }
        async request(t, e) {
          try {
            return await this._request(t, e);
          } catch (t) {
            if (t instanceof Error) {
              let e = {};
              Error.captureStackTrace
                ? Error.captureStackTrace(e)
                : (e = Error());
              let r = e.stack ? e.stack.replace(/^.+\n/, "") : "";
              try {
                t.stack
                  ? r &&
                    !String(t.stack).endsWith(r.replace(/^.+\n.+\n/, "")) &&
                    (t.stack += "\n" + r)
                  : (t.stack = r);
              } catch (t) {}
            }
            throw t;
          }
        }
        _request(t, e) {
          let r, n;
          "string" == typeof t ? ((e = e || {}).url = t) : (e = t || {});
          let {
            transitional: i,
            paramsSerializer: o,
            headers: s,
          } = (e = tD(this.defaults, e));
          void 0 !== i &&
            ee.assertOptions(
              i,
              {
                silentJSONParsing: er.transitional(er.boolean),
                forcedJSONParsing: er.transitional(er.boolean),
                clarifyTimeoutError: er.transitional(er.boolean),
              },
              !1
            ),
            null != o &&
              (G.isFunction(o)
                ? (e.paramsSerializer = { serialize: o })
                : ee.assertOptions(
                    o,
                    { encode: er.function, serialize: er.function },
                    !0
                  )),
            void 0 !== e.allowAbsoluteUrls ||
              (void 0 !== this.defaults.allowAbsoluteUrls
                ? (e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
                : (e.allowAbsoluteUrls = !0)),
            ee.assertOptions(
              e,
              {
                baseUrl: er.spelling("baseURL"),
                withXsrfToken: er.spelling("withXSRFToken"),
              },
              !0
            ),
            (e.method = (
              e.method ||
              this.defaults.method ||
              "get"
            ).toLowerCase());
          let a = s && G.merge(s.common, s[e.method]);
          s &&
            G.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (t) => {
                delete s[t];
              }
            ),
            (e.headers = tk.concat(a, s));
          let l = [],
            u = !0;
          this.interceptors.request.forEach(function (t) {
            ("function" != typeof t.runWhen || !1 !== t.runWhen(e)) &&
              ((u = u && t.synchronous), l.unshift(t.fulfilled, t.rejected));
          });
          let f = [];
          this.interceptors.response.forEach(function (t) {
            f.push(t.fulfilled, t.rejected);
          });
          let h = 0;
          if (!u) {
            let t = [t8.bind(this), void 0];
            for (
              t.unshift.apply(t, l),
                t.push.apply(t, f),
                n = t.length,
                r = Promise.resolve(e);
              h < n;

            )
              r = r.then(t[h++], t[h++]);
            return r;
          }
          n = l.length;
          let c = e;
          for (h = 0; h < n; ) {
            let t = l[h++],
              e = l[h++];
            try {
              c = t(c);
            } catch (t) {
              e.call(this, t);
              break;
            }
          }
          try {
            r = t8.call(this, c);
          } catch (t) {
            return Promise.reject(t);
          }
          for (h = 0, n = f.length; h < n; ) r = r.then(f[h++], f[h++]);
          return r;
        }
        getUri(t) {
          return ti(
            tU((t = tD(this.defaults, t)).baseURL, t.url, t.allowAbsoluteUrls),
            t.params,
            t.paramsSerializer
          );
        }
      }
      G.forEach(["delete", "get", "head", "options"], function (t) {
        en.prototype[t] = function (e, r) {
          return this.request(
            tD(r || {}, { method: t, url: e, data: (r || {}).data })
          );
        };
      }),
        G.forEach(["post", "put", "patch"], function (t) {
          function e(e) {
            return function (r, n, i) {
              return this.request(
                tD(i || {}, {
                  method: t,
                  headers: e ? { "Content-Type": "multipart/form-data" } : {},
                  url: r,
                  data: n,
                })
              );
            };
          }
          (en.prototype[t] = e()), (en.prototype[t + "Form"] = e(!0));
        });
      class ei {
        constructor(t) {
          let e;
          if ("function" != typeof t)
            throw TypeError("executor must be a function.");
          this.promise = new Promise(function (t) {
            e = t;
          });
          let r = this;
          this.promise.then((t) => {
            if (!r._listeners) return;
            let e = r._listeners.length;
            for (; e-- > 0; ) r._listeners[e](t);
            r._listeners = null;
          }),
            (this.promise.then = (t) => {
              let e;
              let n = new Promise((t) => {
                r.subscribe(t), (e = t);
              }).then(t);
              return (
                (n.cancel = function () {
                  r.unsubscribe(e);
                }),
                n
              );
            }),
            t(function (t, n, i) {
              r.reason || ((r.reason = new tM(t, n, i)), e(r.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(t) {
          if (this.reason) {
            t(this.reason);
            return;
          }
          this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
        }
        unsubscribe(t) {
          if (!this._listeners) return;
          let e = this._listeners.indexOf(t);
          -1 !== e && this._listeners.splice(e, 1);
        }
        toAbortSignal() {
          let t = new AbortController(),
            e = (e) => {
              t.abort(e);
            };
          return (
            this.subscribe(e),
            (t.signal.unsubscribe = () => this.unsubscribe(e)),
            t.signal
          );
        }
        static source() {
          let t;
          return {
            token: new ei(function (e) {
              t = e;
            }),
            cancel: t,
          };
        }
      }
      let eo = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(eo).forEach(([t, e]) => {
        eo[e] = t;
      });
      let es = (function t(e) {
        let r = new en(e),
          n = l(en.prototype.request, r);
        return (
          G.extend(n, en.prototype, r, { allOwnKeys: !0 }),
          G.extend(n, r, null, { allOwnKeys: !0 }),
          (n.create = function (r) {
            return t(tD(e, r));
          }),
          n
        );
      })(ty);
      (es.Axios = en),
        (es.CanceledError = tM),
        (es.CancelToken = ei),
        (es.isCancel = tS),
        (es.VERSION = t9),
        (es.toFormData = $),
        (es.AxiosError = V),
        (es.Cancel = es.CanceledError),
        (es.all = function (t) {
          return Promise.all(t);
        }),
        (es.spread = function (t) {
          return function (e) {
            return t.apply(null, e);
          };
        }),
        (es.isAxiosError = function (t) {
          return G.isObject(t) && !0 === t.isAxiosError;
        }),
        (es.mergeConfig = tD),
        (es.AxiosHeaders = tk),
        (es.formToJSON = (t) => tm(G.isHTMLForm(t) ? new FormData(t) : t)),
        (es.getAdapter = t4.getAdapter),
        (es.HttpStatusCode = eo),
        (es.default = es);
      let ea = es;
    },
    1468: (t, e, r) => {
      "use strict";
      r.d(e, { Kq: () => y, d4: () => _, wA: () => E });
      var n = r(6540),
        i = r(8418),
        o = Symbol.for("react.forward_ref"),
        s = Symbol.for("react.memo"),
        a = { notify() {}, get: () => [] },
        l = !!(
          "undefined" != typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement
        ),
        u =
          "undefined" != typeof navigator &&
          "ReactNative" === navigator.product,
        f = l || u ? n.useLayoutEffect : n.useEffect,
        h = {
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
        c = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        d = {
          [o]: {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
          },
          [s]: c,
        };
      Object.getOwnPropertyNames,
        Object.getOwnPropertySymbols,
        Object.getOwnPropertyDescriptor,
        Object.getPrototypeOf,
        Object.prototype;
      var p = Symbol.for("react-redux-context"),
        g = "undefined" != typeof globalThis ? globalThis : {},
        m = (function () {
          if (!n.createContext) return {};
          let t = (g[p] ??= new Map()),
            e = t.get(n.createContext);
          return (
            e || ((e = n.createContext(null)), t.set(n.createContext, e)), e
          );
        })(),
        y = function (t) {
          let { children: e, context: r, serverState: i, store: o } = t,
            s = n.useMemo(() => {
              let t = (function (t, e) {
                let r;
                let n = a,
                  i = 0,
                  o = !1;
                function s() {
                  f.onStateChange && f.onStateChange();
                }
                function l() {
                  if ((i++, !r)) {
                    let e, i;
                    (r = t.subscribe(s)),
                      (e = null),
                      (i = null),
                      (n = {
                        clear() {
                          (e = null), (i = null);
                        },
                        notify() {
                          (() => {
                            let t = e;
                            for (; t; ) t.callback(), (t = t.next);
                          })();
                        },
                        get() {
                          let t = [],
                            r = e;
                          for (; r; ) t.push(r), (r = r.next);
                          return t;
                        },
                        subscribe(t) {
                          let r = !0,
                            n = (i = { callback: t, next: null, prev: i });
                          return (
                            n.prev ? (n.prev.next = n) : (e = n),
                            function () {
                              r &&
                                null !== e &&
                                ((r = !1),
                                n.next ? (n.next.prev = n.prev) : (i = n.prev),
                                n.prev ? (n.prev.next = n.next) : (e = n.next));
                            }
                          );
                        },
                      });
                  }
                }
                function u() {
                  i--, r && 0 === i && (r(), (r = void 0), n.clear(), (n = a));
                }
                let f = {
                  addNestedSub: function (t) {
                    l();
                    let e = n.subscribe(t),
                      r = !1;
                    return () => {
                      r || ((r = !0), e(), u());
                    };
                  },
                  notifyNestedSubs: function () {
                    n.notify();
                  },
                  handleChangeWrapper: s,
                  isSubscribed: function () {
                    return o;
                  },
                  trySubscribe: function () {
                    o || ((o = !0), l());
                  },
                  tryUnsubscribe: function () {
                    o && ((o = !1), u());
                  },
                  getListeners: () => n,
                };
                return f;
              })(o);
              return {
                store: o,
                subscription: t,
                getServerState: i ? () => i : void 0,
              };
            }, [o, i]),
            l = n.useMemo(() => o.getState(), [o]);
          return (
            f(() => {
              let { subscription: t } = s;
              return (
                (t.onStateChange = t.notifyNestedSubs),
                t.trySubscribe(),
                l !== o.getState() && t.notifyNestedSubs(),
                () => {
                  t.tryUnsubscribe(), (t.onStateChange = void 0);
                }
              );
            }, [s, l]),
            n.createElement((r || m).Provider, { value: s }, e)
          );
        };
      function v(t = m) {
        return function () {
          return n.useContext(t);
        };
      }
      var b = v();
      function w(t = m) {
        let e = t === m ? b : v(t),
          r = () => {
            let { store: t } = e();
            return t;
          };
        return Object.assign(r, { withTypes: () => r }), r;
      }
      var A = w(),
        E = (function (t = m) {
          let e = t === m ? A : w(t),
            r = () => e().dispatch;
          return Object.assign(r, { withTypes: () => r }), r;
        })(),
        x = (t, e) => t === e,
        _ = (function (t = m) {
          let e = t === m ? b : v(t),
            r = (t, r = {}) => {
              let { equalityFn: o = x } =
                  "function" == typeof r ? { equalityFn: r } : r,
                { store: s, subscription: a, getServerState: l } = e();
              n.useRef(!0);
              let u = n.useCallback({ [t.name]: (e) => t(e) }[t.name], [t]),
                f = (0, i.useSyncExternalStoreWithSelector)(
                  a.addNestedSub,
                  s.getState,
                  l || s.getState,
                  u,
                  o
                );
              return n.useDebugValue(f), f;
            };
          return Object.assign(r, { withTypes: () => r }), r;
        })();
    },
  },
  (t) => {
    var e = (e) => t((t.s = e));
    t.O(0, [593, 792], () => (e(8424), e(8440))), (_N_E = t.O());
  },
]);
