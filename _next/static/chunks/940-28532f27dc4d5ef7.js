"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [940],
  {
    2914: (e, t, a) => {
      a.d(t, { A: () => r });
      var l = a(4848),
        s = a(6540),
        n = a(6942),
        i = a.n(n);
      function o(e) {
        let {
            arrow: t = "top",
            children: a,
            style: n,
            text: o = "Success",
            display: c,
            callback: r,
            time: d = 3e3,
          } = e,
          [u, p] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            if (c) {
              p(!0);
              let e = setTimeout(() => {
                p(!1), null == r || r();
              }, d);
              return () => clearTimeout(e);
            }
          }, [c]),
          (0, l.jsxs)("div", {
            className: "relative",
            children: [
              u &&
                (0, l.jsxs)("div", {
                  className: i()(
                    "absolute flex items-center justify-center gap-2 px-2 py-1 min-w-[62px] rounded bg-black/90 text-white text-sm font-medium z-[500] font-[Bai Jamjuree] text-center",
                    {
                      top: "top-[-34px] right-[-100%]",
                      bottom: "bottom-[-34px] left-1/2 -translate-x-1/2",
                      left: "left-[-100%] top-1/2 -translate-y-1/2",
                      right: "right-[-100%] top-1/2 -translate-y-1/2",
                    }[t]
                  ),
                  style: n,
                  children: [
                    o,
                    (0, l.jsx)("div", {
                      className: i()(
                        "absolute w-2.5 h-2.5 rotate-[135deg] bg-black/90",
                        {
                          "left-1/2 bottom-[-5px] -translate-x-1/2":
                            "top" === t,
                          "left-1/2 top-[-5px] -translate-x-1/2":
                            "bottom" === t,
                          "right-[-5px] top-1/2 -translate-y-1/2": "left" === t,
                          "left-[-5px] top-1/2 -translate-y-1/2": "right" === t,
                        }
                      ),
                    }),
                  ],
                }),
              a,
            ],
          })
        );
      }
      var c = a(9399);
      let r = (e) => {
        let { text: t } = e,
          [a, n] = (0, s.useState)(!1);
        return (0, l.jsx)(o, {
          text: "Copied",
          display: a,
          callback: () => {
            n(!1);
          },
          children: (0, l.jsx)(c.CopyToClipboard, {
            text: t,
            onCopy: () => {
              n(!0);
            },
            children: (0, l.jsx)("div", {
              className:
                "ml-1 h-3 w-3 md:h-4 md:w-4 cursor-pointer bg-[url('./svg/copy.svg')] bg-cover hover:bg-[url('./svg/copy-hover.svg')]",
            }),
          }),
        });
      };
    },
    3079: (e, t, a) => {
      a.d(t, { A: () => b });
      var l = a(4848),
        s = a(6540),
        n = a(6715),
        i = a(1468),
        o = a(2914),
        c = a(7391),
        r = a(812),
        d = a(400),
        u = a(9087),
        p = a(9304),
        m = a(5962),
        x = a(2677);
      let g = () => {
        let [e, t] = (0, s.useState)([]),
          [a, l] = (0, s.useState)([]);
        return {
          installedWallets: e,
          uninstalledWallets: a,
          checkWallets: (0, s.useCallback)(() => {
            let e = [],
              a = [];
            (0, p.zH)("MetaMask") ? e.push("MetaMask") : a.push("MetaMask"),
              (0, p.zH)("OKX Wallet")
                ? e.push("OKX Wallet")
                : a.push("OKX Wallet"),
              (0, p.zH)("TokenPocket")
                ? e.push("TokenPocket")
                : a.push("TokenPocket"),
              (0, p.zH)("Gate") ? e.push("Gate") : a.push("Gate"),
              t(e),
              l(a);
          }, []),
        };
      };
      var h = a(765);
      let v = () => {
        let [e, t] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            let e = () => {
              let e = window.navigator.userAgent || window.navigator.vendor;
              (/android/i.test(e) ||
                /iPhone|iPad|iPod/.test(e) ||
                /webOS|BlackBerry|IEMobile|Opera Mini/i.test(e)) &&
                t(!0),
                ("ontouchstart" in window || navigator.maxTouchPoints > 0) &&
                  t(!0),
                window.matchMedia("(max-width: 767px)").matches && t(!0);
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          e
        );
      };
      var f = a(6113);
      function w(e) {
        let {
            callback: t = () => {},
            display: a = !1,
            isClose: n = !1,
            onClose: o = () => {},
            full: c = !1,
            skipIntro: w = !1,
            oStyle: _ = {},
          } = e,
          b = (0, i.wA)(),
          [y, k] = (0, s.useState)(""),
          [N, j] = (0, s.useState)(!0),
          [A, E] = (0, s.useState)(!0),
          [C, T] = (0, s.useState)(""),
          [S, F] = (0, s.useState)(!1),
          [L, I] = (0, s.useState)(!1),
          { isLoginOut: P, loginOut: z } = (0, r.A)(),
          B = v(),
          {
            cToken: H,
            address: M,
            connected: G,
            walletT: R,
            currentNetwork: D,
            isError: O,
            isSuccess: W,
            date: K,
            connectAptosAndSign: q,
            connectEvmAndSign: X,
            connectSolanaAndSign: Z,
          } = (0, x.A)(),
          { installedWallets: Y, uninstalledWallets: Q, checkWallets: U } = g(),
          {
            switchChainId: V,
            switchSuccess: J,
            switchError: $,
            switchNetworkByChainId: ee,
          } = (0, h.A)();
        (0, s.useEffect)(() => {
          U();
        }, []);
        let et = () => {
            (0, p.I5)(), b((0, d.Gd)("", "", !1, "")), j(!0), E(!0), w && ea();
          },
          ea = () => {
            k(""), F(!1), I(!1), o && o();
          },
          el = () => {
            if (B) {
              let e = (0, p.Au)(),
                t = e.length > 0 ? e[0] : "MetaMask";
              if (e.length > 0 && e.includes("TronLink"))
                return alert("Tron is not supported in imtoken");
              ei(t);
            } else j(!1);
          },
          es = async () => {
            let e = (0, p.NK)();
            if ((0, p.He)(e) || (0, p.Nz)(e) || (0, p.Zf)(e)) return;
            let t = (0, u.c7)("address"),
              a = (0, u.c7)("isConnected");
            if (!(0, u.c7)("token") && !t && (!a || "false" == a)) return E(!0);
            if (t && "false" == a) {
              let t = await (0, p.Hd)(e),
                a = p.Ak.find((e) => e.exId == t);
              (a && a.id) || E(!1);
            }
          };
        (0, s.useEffect)(() => {
          es();
        }, []);
        let en = (e, t) => {
          (0, u.cT)("current_chain_name", e), (0, u.cT)("current_chain_id", t);
        };
        (0, s.useEffect)(() => {
          W &&
            (sessionStorage.setItem("nav", "home"),
            k(""),
            F(!1),
            j(!0),
            w && o(),
            I(!1),
            (0, p.He)(R)
              ? (en("APT", 1), b((0, d.Gd)(M, D, G, R)), t && t())
              : (0, p.Nz)(R)
              ? (en("TRX", 0x2b6653dc), b((0, d.Gd)(M, D, G, R)), t && t())
              : (0, p.Zf)(R)
              ? (en("SOL", 101), b((0, d.Gd)(M, D, G, R)), t && t())
              : (0, p.Hd)(R).then((e) => {
                  let a = p.Ak.find((t) => t.exId == e);
                  a && a.id
                    ? (b((0, d.Gd)(M, D, G, R)),
                      en(a.name, a.id),
                      t && t(),
                      E(!0),
                      (0, u.cT)("isConnected", !0))
                    : (E(!1), (0, u.cT)("isConnected", !1));
                })),
            O && (k(""), j(!0), F(!1), I(!1), w && ea());
        }, [W, O, H, K]),
          (0, s.useEffect)(() => {
            if (J) {
              let e = (0, u.c7)("address"),
                a = (0, u.c7)("wallet_type"),
                l = (0, u.c7)("current_chain_name") || "ETH",
                s = f.gH.find((e) => e.value == l);
              b((0, d.WP)(s)),
                T(""),
                E(!1),
                b((0, d.Gd)(e, V, !0, a || "")),
                (0, u.cT)("isConnected", !0),
                t && t();
            }
            $ && (T(""), E(!1));
          }, [J, $, V]),
          (0, s.useEffect)(() => {
            P && et();
          }, [P]);
        let ei = async (e) => {
            k(e), F(!1), I(!0), await X(e);
          },
          eo = async (e) => {
            let { id: t, type: a } = e;
            T(e.name),
              (0, u.c7)("original_aptos_wallet_type"),
              (0, u.c7)("original_tron_wallet_type");
            let l = (0, u.c7)("original_evm_wallet_type");
            (0, u.c7)("original_solana_wallet_type"), l && ee(l, t);
          },
          ec = async () => {
            await z(), et();
          },
          er = { ...(S ? { borderRight: "1px solid #4D4D50" } : {}) };
        return (
          (0, s.useEffect)(() => {
            !a && w && (el(), B && o());
          }, [a]),
          (0, l.jsx)(l.Fragment, {
            children: a
              ? null
              : (0, l.jsxs)("div", {
                  className:
                    "fixed bottom-0 left-0 right-0 top-0 z-[18] flex ".concat(
                      c ? "top-0" : ""
                    ),
                  children: [
                    (0, l.jsx)("div", {
                      className:
                        "fixed bottom-0 left-0 top-0 z-[9999] h-full w-full bg-[#0000004D] backdrop-blur-[10px]",
                      hidden: N,
                      children: (0, l.jsxs)("div", {
                        className:
                          "absolute left-[50%] pt-[80px] top-[50%] h-[560px] overflow-hidden z-[11] flex -translate-x-1/2 -translate-y-1/2 items-center justify-between rounded-[28px] bg-[#FFFFFF] ".concat(
                            c ? "left-1/2" : ""
                          ),
                        style: _,
                        children: [
                          (0, l.jsxs)("div", {
                            className:
                              "absolute left-8 right-0 top-6 flex w-[calc(100%-64px)] max-h items-start justify-between",
                            children: [
                              (0, l.jsx)("img", {
                                src: "./svg/logo.svg",
                                alt: "ByteNova Logo",
                                className: "mt-2 w-[130px]",
                              }),
                              (0, l.jsx)("img", {
                                src: "./images/icon/cross.png",
                                className: "w-8 cursor-pointer",
                                alt: "",
                                onClick: ea,
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "w-[476px] pl-7 pr-7",
                            style: er,
                            children: [
                              (0, l.jsx)("div", {
                                className:
                                  "mb-1.5 text-[28px] font-bold text-[#23252A]",
                                children: "Welcome To ByteNova",
                              }),
                              (0, l.jsx)("span", {
                                className:
                                  "mb-8 block text-[14px] font-normal text-[#9799A1]",
                                children: "Please Select Sign-In Method",
                              }),
                              (0, l.jsxs)("ul", {
                                className: "max-h-[400px] overflow-y-auto pb-5",
                                children: [
                                  Y.map((e, t) =>
                                    (0, l.jsxs)(
                                      "li",
                                      {
                                        onClick: () => {
                                          k(e), ei(e);
                                        },
                                        className:
                                          "flex cursor-pointer items-center rounded-[8px] border border-[#4d4d50] px-4 py-[9px] hover:bg-[#E5E5E5] ".concat(
                                            t === Y.length - 1 ? "" : "mb-3"
                                          ),
                                        children: [
                                          L &&
                                            e === y &&
                                            (0, l.jsx)("img", {
                                              src: "./images/icon/icon-loading.png",
                                              alt: "",
                                              className:
                                                "mr-4 h-5 w-5 animate-spin",
                                            }),
                                          (0, l.jsx)("img", {
                                            src: "./images/wallets/".concat(
                                              e,
                                              ".png"
                                            ),
                                            className:
                                              "mr-3 w-10 rounded-[12px]",
                                            alt: "",
                                          }),
                                          (0, l.jsx)("div", {
                                            children: (0, l.jsx)("p", {
                                              className:
                                                "text-sm font-bold leading-[150%] tracking-[0.24px] text-[#23252A]",
                                              children: e,
                                            }),
                                          }),
                                          (0, l.jsx)("div", {
                                            className:
                                              "ms-auto flex items-center justify-center h-6 px-2.5 bg-[#E4FFB6] text-[#62BF0C] text-xs leading-full rounded-[4px]",
                                            children: "Installed",
                                          }),
                                        ],
                                      },
                                      e
                                    )
                                  ),
                                  (0, l.jsxs)("div", {
                                    className: "relative mb-12 mt-10 h-2",
                                    children: [
                                      (0, l.jsx)("div", {
                                        className:
                                          "absolute left-0 top-1/2 z-0 h-[1px] w-full bg-[#3B3B41]",
                                      }),
                                      (0, l.jsx)("span", {
                                        className:
                                          "z-1 absolute left-1/2 top-1/2 mb-3 block -translate-x-1/2 -translate-y-1/2 transform bg-white px-[17px] text-center text-[14px] font-normal text-[#595A5F]",
                                        children: "Or More Options",
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)("div", {
                                    className:
                                      "grid grid-cols-1 gap-x-[21px] gap-y-6",
                                    children: Q.map((e) =>
                                      (0, l.jsxs)(
                                        "li",
                                        {
                                          onClick: () => {
                                            var t;
                                            k(e),
                                              I(!0),
                                              F(!1),
                                              null === (t = window) ||
                                                void 0 === t ||
                                                t.open(m.ke[e]);
                                          },
                                          className:
                                            "flex cursor-pointer items-center rounded-[8px] border border-[#4d4d50] px-4 py-[9px] hover:bg-[#E5E5E5]",
                                          children: [
                                            L &&
                                              e === y &&
                                              (0, l.jsx)("img", {
                                                src: "/images/icon/icon-loading.png",
                                                alt: "",
                                                className:
                                                  "mr-4 h-5 w-5 animate-spin",
                                              }),
                                            (0, l.jsx)("img", {
                                              src: "./images/wallets/".concat(
                                                e,
                                                ".png"
                                              ),
                                              className:
                                                "mr-3 w-10 rounded-[12px]",
                                              alt: "",
                                            }),
                                            (0, l.jsx)("div", {
                                              children: (0, l.jsx)("p", {
                                                className:
                                                  "text-[12px] font-bold leading-[150%] tracking-[0.24px] text-[#23252A]",
                                                children: e,
                                              }),
                                            }),
                                          ],
                                        },
                                        e
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "fixed bottom-0 left-0 right-0 top-0 z-[30] h-full w-full overflow-y-auto bg-[#0000004D] backdrop-blur-[10px]",
                      hidden: A,
                      children: (0, l.jsxs)("div", {
                        className:
                          "absolute left-[50%] top-[50%] z-[11] flex flex-col -translate-x-1/2 -translate-y-1/2 items-center justify-between rounded-[16px] bg-[#FFFFFF]",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "h-full w-[476px] pl-7 pr-7 pt-12",
                            style: er,
                            children: [
                              (0, l.jsx)("div", {
                                className:
                                  "mb-[37px] text-[18px] leading-full text-center font-bold text-[#23252A]",
                                children: "Switch networks",
                              }),
                              (0, l.jsx)("ul", {
                                className: "max-h-[460px] overflow-y-auto pb-5",
                                children: p.Ak.map((e) =>
                                  (0, l.jsxs)(
                                    "li",
                                    {
                                      onClick: () => eo(e),
                                      className:
                                        "mb-3 flex cursor-pointer items-center rounded-[8px] border border-[#4d4d50] px-4 py-[9px] hover:bg-[#E5E5E5] cursor-pointer items-center",
                                      children: [
                                        e.name === C &&
                                          (0, l.jsx)("img", {
                                            src: "./images/icon/icon-loading.png",
                                            alt: "",
                                            className:
                                              "mr-4 h-5 w-5 animate-spin",
                                          }),
                                        (0, l.jsx)("img", {
                                          src: "./svg/chain/".concat(
                                            e.name,
                                            ".svg"
                                          ),
                                          className: "mr-3 w-10 rounded-[12px]",
                                          alt: "",
                                        }),
                                        (0, l.jsxs)("div", {
                                          children: [
                                            (0, l.jsx)("p", {
                                              className:
                                                "text-sm font-bold leading-[150%] tracking-[0.24px] text-[#23252A]",
                                              children: e.name,
                                            }),
                                            (0, l.jsx)("span", {
                                              className:
                                                "text-xs leading-[150%] tracking-[0.2px] text-[#9799A1]",
                                              children: e.sub,
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    e.name
                                  )
                                ),
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className:
                              "flex w-full h-[60px] cursor-pointer items-center justify-center rounded-b-[16px] border-t border-[#E8E8E8] bg-[#E8E8E8] text-sm font-normal text-[#595A5F] hover:text-[#595A5F]",
                            onClick: ec,
                            children: [
                              (0, l.jsx)("img", {
                                src: "./svg/icon-logout.svg",
                                alt: "",
                                className: "mr-2 h-[18px] w-[18px]",
                              }),
                              (0, l.jsx)("span", { children: "Disconnect" }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
          })
        );
      }
      var _ = a(5135);
      a(1787);
      let b = (e) => {
        let { containerStyle: t = "" } = e,
          a = (0, n.useRouter)(),
          m = (0, i.wA)(),
          [x, g] = (0, s.useState)(!1),
          { isConnected: h, address: v } = (0, i.d4)((e) => e.wallet),
          { display_name: b, avatar: y } = (0, i.d4)((e) => e.userInfo),
          [k, N] = (0, s.useState)({ icon: "", name: "", value: "" }),
          j = (0, i.d4)((e) => e.currentNetwork),
          { fetchLoginRefreshData: A, userInfo: E } = (0, c.A)(),
          { loginOut: C } = (0, r.A)(),
          T = (0, i.d4)((e) => e.assets),
          S = (e) => {
            sessionStorage.setItem("nav", e), a.push(e);
          };
        (0, s.useEffect)(() => {
          E && m((0, d.iA)(E));
        }, [E]),
          (0, s.useEffect)(() => {
            E && m((0, d.iA)(E));
          }, [E]);
        let F = () => {
            let e = (0, u.c7)("address");
            e && A(e);
          },
          L = async (e) => {
            N(e), F();
          };
        (0, s.useEffect)(() => {
          j && j.name && N(j);
        }, [j]);
        let I = () => {
            (0, p.I5)(), m((0, d.Gd)("", "", !1, ""));
          },
          P = () => {
            C(), I();
          };
        return (0, l.jsxs)("div", {
          className: "flex items-center justify-end border-l border-white/40",
          children: [
            h
              ? (0, l.jsx)("div", {
                  className: "relative flex items-center ".concat(t),
                  children: (0, l.jsxs)("div", {
                    className: "group",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "space-font flex cursor-pointer items-center justify-center gap-x-[7px] rounded-lg bg-[#231F1F] px-3 md:px-[23px] py-2 text-sm text-[#FFFFFFE5] hover:bg-[#3E3E3E]",
                        children: (0, u.Hq)(v, "..."),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "invisible absolute right-0 top-[36px] z-[9998] w-[300px] pt-[18px] opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100",
                        children: (0, l.jsxs)("div", {
                          className:
                            "w-full rounded-xl bg-[#FFFFFF] text-sm font-bold leading-5 text-white",
                          children: [
                            (0, l.jsx)("div", {
                              className: "pt-10",
                              children: (0, l.jsxs)("div", {
                                className: "pb-[33px]",
                                children: [
                                  (0, l.jsxs)("div", {
                                    className:
                                      "relative mb-5 flex justify-center",
                                    children: [
                                      (0, l.jsx)("img", {
                                        src: y,
                                        alt: "avatar",
                                        className:
                                          "h-[86px] w-[86px] rounded-full",
                                      }),
                                      (0, l.jsx)(_.A, {
                                        options: f.gH,
                                        value: k,
                                        onChange: L,
                                        iconSize: 24,
                                        isMinimize: !0,
                                        classes:
                                          "absolute bottom-[-2px] right-[105px] bg-[#34343B] rounded-full w-[30px]",
                                        contentClass:
                                          "w-full h-full px-[3px] py-[3px]",
                                        disabled: !0,
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)("h2", {
                                    className:
                                      "text-center text-base font-normal text-[#23252A]",
                                    children: b || (0, u.Hq)(v, "•••"),
                                  }),
                                  (0, l.jsxs)("div", {
                                    className:
                                      "space-font mt-[17px] flex items-center justify-center gap-1.5",
                                    children: [
                                      (0, l.jsx)("span", {
                                        className: "text-sm text-[#9799A1]",
                                        children: (0, u.Hq)(v, "•••"),
                                      }),
                                      (0, l.jsx)(o.A, { text: v }),
                                    ],
                                  }),
                                  (0, l.jsxs)("div", {
                                    className:
                                      "space-font mt-3 text-center text-xs text-[#00B093]",
                                    children: [
                                      (null == T ? void 0 : T.balance) || 0,
                                      " USD",
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, l.jsxs)("div", {
                              className:
                                "mx-6 flex h-11 cursor-pointer items-center justify-between rounded-lg border border-[#F1F1F1] bg-[#F1F1F1] px-4 text-[#595A5F] backdrop-blur-sm hover:border-[#000000]",
                              onClick: () => S("/profile"),
                              children: [
                                (0, l.jsxs)("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    (0, l.jsx)("img", {
                                      src: "./svg/icon-account.svg",
                                      className: "h-[18px] w-[18px]",
                                      alt: "",
                                    }),
                                    (0, l.jsx)("span", {
                                      className: "text-sm text-[#595A5F]",
                                      children: "Profile",
                                    }),
                                  ],
                                }),
                                (0, l.jsx)("div", {
                                  children: (0, l.jsx)("img", {
                                    src: "./svg/chevron.svg",
                                    className: "h-4 w-4 -rotate-90",
                                    alt: "",
                                  }),
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className:
                                "mt-[26px] flex h-[60px] cursor-pointer items-center justify-center rounded-b-lg bg-[#F0F0F0]",
                              onClick: () => P(),
                              children: [
                                (0, l.jsx)("img", {
                                  src: "./svg/icon-logout.svg",
                                  className: "hover-img mr-2 h-[18px] w-[18px]",
                                  alt: "",
                                }),
                                (0, l.jsx)("span", {
                                  className:
                                    "hover-span text-[14px] font-normal text-[#595A5F]",
                                  children: "Disconnect",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                })
              : (0, l.jsxs)("a", {
                  className:
                    "flex cursor-pointer interact-button items-center justify-center rounded-lg bg-black px-3 md:px-[23px] py-2 text-center text-xs md:text-sm font-normal text-white transition hover:bg-[#3E3E3E]",
                  children: [
                    (0, l.jsx)("img", {
                      src: "./svg/dapp/connect.svg",
                      alt: "Connect Wallet To See Your Eligibility",
                      className:
                        "mr-2 w-[18px] h-[18px] md:h-[20px] md:w-[20px] ",
                    }),
                    "Connect Wallet To See Your Eligibility",
                  ],
                }),
            (0, l.jsx)(w, {
              callback: () => {
                let e = (0, u.c7)("address");
                e && (g(!1), A(e));
              },
              isClose: !0,
              display: !x,
              onClose: () => {
                g(!1);
              },
              full: !0,
              skipIntro: !0,
            }),
          ],
        });
      };
    },
    5135: (e, t, a) => {
      a.d(t, { A: () => v });
      var l = a(4848),
        s = a(6540),
        n = a(9965),
        i = a.n(n),
        o = a(1468),
        c = a(2677),
        r = a(765),
        d = a(812),
        u = a(9304),
        p = a(9087),
        m = a(400);
      let x = () => {
        let e = (0, o.wA)(),
          [t, a] = (0, s.useState)(!0),
          l = () => {
            (0, u.I5)(), e((0, m.Gd)("", "", !1, ""));
          },
          n = (0, s.useCallback)(async () => {
            let e = (0, p.c7)("wallet_type"),
              t = (0, p.c7)("address");
            if ((a(!0), !t || "" == t || !e)) {
              l(), a(!1);
              return;
            }
            let s = (0, u.YS)(e),
              n = await (null == s ? void 0 : s.getAccount());
            if (
              !(null == n ? void 0 : n.address) ||
              (null == n ? void 0 : n.address.toLocaleLowerCase()) !=
                t.toLocaleLowerCase()
            ) {
              l(), a(!1);
              return;
            }
            return null == n ? void 0 : n.address;
          }, []),
          i = (0, s.useCallback)(async () => {
            let e = (0, p.c7)("wallet_type"),
              t = (0, p.c7)("address"),
              s = (0, p.c7)("current_chain_name");
            if ((a(!0), !t || "" == t || !e || !s)) {
              l(), a(!1);
              return;
            }
            let n = (0, u.YS)(e);
            if (!n) {
              l(), a(!1);
              return;
            }
            let i = await (null == n
              ? void 0
              : n.request({ method: "eth_accounts" }));
            if (
              0 === i.length ||
              i[0].toLocaleLowerCase() != t.toLocaleLowerCase()
            ) {
              l(), a(!1);
              return;
            }
            let o = null == n ? void 0 : n.chainId,
              c = u.Ak.find((e) => e.name === s);
            if (!o || !c || c.exId != o) {
              l(), a(!1);
              return;
            }
          }, []),
          c = async () => {
            let e = (0, p.c7)("wallet_type"),
              t = (0, p.c7)("address");
            if ((a(!0), !t || "" == t || !e)) {
              l(), a(!1);
              return;
            }
            let s = (0, u.YS)(e),
              n = await (null == s ? void 0 : s.defaultAddress.base58);
            if (!n || n.toLocaleLowerCase() != t.toLocaleLowerCase()) {
              l(), a(!1);
              return;
            }
          },
          r = async () => {
            let e = (0, p.c7)("wallet_type"),
              t = (0, p.c7)("address");
            if ((a(!0), !t || "" == t || !e)) {
              l(), a(!1);
              return;
            }
            let s = (0, u.YS)(e),
              n = (
                await (null == s ? void 0 : s.connect({ onlyIfTrusted: !0 }))
              ).publicKey.toString();
            if (!n || n.toLocaleLowerCase() != t.toLocaleLowerCase()) {
              l(), a(!1);
              return;
            }
          };
        return {
          checkConnect: t,
          checkWalletConnect: () => {
            let e = (0, p.c7)("current_chain_name");
            ("BNB" === e || "ETH" === e) && i(),
              "TRX" === e && c(),
              "APT" === e && n(),
              "SOL" === e && r();
          },
        };
      };
      var g = a(7391),
        h = a(6113);
      function v(e) {
        let {
            options: t,
            value: a,
            onChange: n,
            classes: v = "",
            contentClass: f = "h-[30px] w-full pl-[3px] pr-[12px] py-[4px]",
            isMinimize: w = !1,
            iconSize: _ = 24,
            disabled: b = !1,
          } = e,
          y = (0, o.wA)(),
          [k, N] = (0, s.useState)(!1),
          [j, A] = (0, s.useState)(),
          E = (0, s.useRef)(null),
          {
            cToken: C,
            isChain: T,
            address: S,
            connected: F,
            walletT: L,
            currentNetwork: I,
            isError: P,
            isSuccess: z,
            connectAptosAndSign: B,
            connectEvmAndSign: H,
            connectTronAndSign: M,
            connectSolanaAndSign: G,
          } = (0, c.A)(),
          {
            switchChainId: R,
            switchSuccess: D,
            switchError: O,
            switchNetworkByChainId: W,
          } = (0, r.A)(),
          { loginOut: K } = (0, d.A)(),
          { checkConnect: q, checkWalletConnect: X } = x(),
          { fetchLoginRefreshData: Z, userInfo: Y } = (0, g.A)();
        (0, s.useEffect)(() => {
          let e = (0, p.c7)("current_chain_name") || "ETH",
            t = h.gH.find((t) => t.value == e);
          y((0, m.WP)(t)), A(t);
        }, []),
          (0, s.useEffect)(() => {
            q || ((0, u.I5)(), y((0, m.Gd)("", "", !1, "")));
          }, [q]),
          (0, s.useEffect)(() => {
            Y && y((0, m.iA)(Y));
          }, [Y]),
          (0, s.useEffect)(() => {
            if (
              (z &&
                (y((0, m.WP)(j)), n(j), N(!1), Z(S), y((0, m.Gd)(S, I, F, L))),
              z && T)
            ) {
              let e = u.Ak.find(
                (e) => e.name === (null == j ? void 0 : j.value)
              );
              e && W(L, e.id);
            }
          }, [z, P, T, F, C]),
          (0, s.useEffect)(() => {
            if (D) {
              n(j), N(!1), y((0, m.WP)(j));
              let e = (0, p.c7)("wallet_type"),
                t = (0, p.c7)("address");
              e && y((0, m.Gd)(t, R, !0, e));
            }
          }, [D, O, R]);
        let Q = async (e) => {
            let t = (0, p.c7)("current_chain_name");
            if (e.value === t) return;
            A(e);
            let a = (0, p.c7)("original_evm_wallet_type");
            (0, p.c7)("original_aptos_wallet_type"),
              (0, p.c7)("original_tron_wallet_type"),
              (0, p.c7)("original_solana_wallet_type");
            let l = u.Ak.find((t) => t.name === e.value);
            if (!l) return;
            let s = u.Ak.find((e) => e.name === t);
            s && "Evm" !== s.type
              ? ((0, p.cT)("isConnected", !1),
                K(),
                a && (await H(a, null == l ? void 0 : l.exId)))
              : (await X(), a && (await W(a, null == l ? void 0 : l.id)));
          },
          U = (e) => {
            E.current && !E.current.contains(e.target) && N(!1);
          };
        return (
          (0, s.useEffect)(
            () => (
              document.addEventListener("mousedown", U),
              () => document.removeEventListener("mousedown", U)
            ),
            []
          ),
          (0, s.useEffect)(() => {
            N(!1);
          }, [a]),
          (0, l.jsx)("div", {
            className: "flex items-center ".concat(v),
            children: (0, l.jsxs)("div", {
              ref: E,
              className: "relative w-full",
              onClick: () => !b && N(!0),
              onMouseEnter: () => !b && N(!0),
              children: [
                (0, l.jsxs)("div", {
                  className:
                    "flex items-center justify-between gap-1 rounded-full cursor-pointer "
                      .concat(k ? "bg-white/20" : "", " ")
                      .concat(f),
                  children: [
                    a.icon &&
                      (0, l.jsx)(i(), {
                        src: a.icon,
                        width: _,
                        height: _,
                        alt: "",
                        className: "rounded-full",
                      }),
                    !w &&
                      (0, l.jsx)("p", {
                        className:
                          "block  flex-1 text-white text-[12px] leading-full font-normal",
                        children: a.name,
                      }),
                    !b &&
                      (0, l.jsx)(i(), {
                        src: "./svg/chevron.svg",
                        width: 10,
                        height: 6,
                        alt: "",
                        className: "transition-transform duration-300 ".concat(
                          k ? "" : "-rotate-90"
                        ),
                      }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className:
                    "absolute top-[28px] left-0 z-50 pt-1 transition-opacity duration-300 w-[129px] ".concat(
                      k ? "opacity-100 visible" : "opacity-0 invisible"
                    ),
                  children: (0, l.jsx)("div", {
                    className:
                      "bg-[#FFFFFF] border border-[#EDEDED] rounded-md text-[#23252A] text-[12px] font-normal leading-[12px] p-1 space-y-1",
                    children: t.map((e) =>
                      (0, l.jsxs)(
                        "div",
                        {
                          className:
                            "flex items-center cursor-pointer hover:bg-[#EAEAEA] rounded px-2 py-[5px] gap-1",
                          onClick: () => Q(e),
                          children: [
                            e.icon &&
                              (0, l.jsx)(i(), {
                                src: e.icon,
                                width: _,
                                height: _,
                                alt: "",
                              }),
                            e.name,
                          ],
                        },
                        e.name
                      )
                    ),
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
    9070: (e, t, a) => {
      a.d(t, { A: () => p });
      var l = a(4848),
        s = a(6540),
        n = a(9965),
        i = a.n(n),
        o = a(1106),
        c = a.n(o),
        r = a(6424),
        d = a(1500);
      let u = [
          {
            active: "./svg/dapp/rewards-active.svg",
            icon: "./svg/dapp/rewards.svg",
            path: "rewards.html",
            label: "Claim",
          },
          {
            active: "./svg/dapp/others-active.svg",
            icon: "./svg/dapp/others.svg",
            path: "profile.html",
            label: "Profile",
          },
        ],
        p = () => {
          let e = (0, r.usePathname)(),
            { collapsed: t, toggleCollapsed: a } = (0, d.c)();
          return (
            (0, s.useEffect)(() => {
              document &&
                (document.documentElement.style.overflow = t ? "" : "hidden");
            }, [t]),
            (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)("div", {
                  className:
                    "absolute left-0 top-0 z-30 h-full w-full bg-[#0000004D] backdrop-blur-[10px] md:hidden ".concat(
                      t ? "hidden" : "block"
                    ),
                  onClick: a,
                }),
                (0, l.jsxs)("aside", {
                  className:
                    "fixed left-0 top-0 z-30 md:z-0 h-full min-h-screen w-64 bg-white shadow-lg transition-transform duration-300 md:translate-x-0 ".concat(
                      t ? "-translate-x-full" : "translate-x-0"
                    ),
                  children: [
                    (0, l.jsx)(c(), {
                      className:
                        "flex items-center space-x-2 px-8 py-5 md:py-7",
                      href: "/",
                      children: (0, l.jsx)("img", {
                        src: "./svg/logo.svg",
                        alt: "ByteNova Logo",
                        className: "w-[115px] md:w-[183px]",
                      }),
                    }),
                    (0, l.jsx)("nav", {
                      className: "space-y-3 md:space-y-1 px-5 py-1.5 md:py-2.5",
                      children: u.map((t) => {
                        let a = e.startsWith(t.path);
                        return (0, l.jsxs)(
                          c(),
                          {
                            href: t.path,
                            className:
                              "flex w-full items-center gap-x-2 md:gap-x-4 rounded-xl border px-4 py-3 md:px-5 md:py-4 transition ".concat(
                                a
                                  ? "border-black text-[#23252A]"
                                  : "border-transparent text-[#8B8B8C] hover:border-black"
                              ),
                            children: [
                              (0, l.jsx)(i(), {
                                src: a ? t.active : t.icon,
                                alt: t.label,
                                width: 24,
                                height: 24,
                                className: "w-8 h-8 md:w-6 md:h-6",
                              }),
                              (0, l.jsx)("span", {
                                className:
                                  "text-lg md:text-base capitalize font-medium md:font-bold leading-full",
                                children: t.label,
                              }),
                            ],
                          },
                          t.path
                        );
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
    6113: (e, t, a) => {
      a.d(t, {
        UG: () => c,
        XC: () => r,
        aN: () => i,
        gH: () => l,
        kB: () => s,
      });
      let l = [
          { icon: "./svg/chain/ETH.svg", name: "ETH Chain", value: "ETH" },
          { icon: "./svg/chain/APT.svg", name: "Aptos Chain", value: "APT" },
          { icon: "./svg/chain/BNB.svg", name: "BNB Chain", value: "BNB" },
          { icon: "./svg/chain/TRX.svg", name: "Tron Chain", value: "TRX" },
          { icon: "./svg/chain/SOL.svg", name: "Solana Chain", value: "SOL" },
        ],
        s = { 1: "Click Like", 2: "Repost", 3: "Reply", 4: "Quote" },
        n = {
          1: "Like ByteNova AI's latest tweet.",
          2: "Retweet ByteNova AI's latest tweet.",
          3: "Reply to ByteNova AI's latest tweet.",
          4: "Quote tweet ByteNova AI's latest tweet.",
        },
        i = { 1: "Like", 2: "Repost", 3: "Reply", 4: "Quote" },
        o = {
          1: "like?tweet_id=",
          2: "retweet?tweet_id=",
          3: "tweet?in_reply_to=",
          4: "post?url=https%3A%2F%2Fx.com%2FBytenovaAI%2Fstatus%2F",
        },
        c = (e, t) => {
          let a;
          let l = new DOMParser().parseFromString(t, "text/html")
              .documentElement.textContent,
            s = window.innerWidth,
            i = 4 === e || 5 === e || 6 === e || 7 === e;
          return (
            (a =
              s > 1600
                ? i
                  ? 45
                  : 80
                : s <= 1600 && s > 749
                ? i
                  ? 30
                  : 65
                : s <= 749
                ? i
                  ? 35
                  : 65
                : 1 / 0),
            (null == l ? void 0 : l.length) &&
              (null == l ? void 0 : l.length) > a &&
              (l = "".concat(null == l ? void 0 : l.substring(0, a), "...")),
            n[e] || ""
          );
        },
        r = (e, t, a) => {
          let l = a,
            s = "https%3A%2F%2Fx.com%2FBytenovaAI%2Fstatus%2F".concat(t);
          return (
            s.length + a.length > 280 &&
              (l = "".concat(l.substring(0, 280 - s.length), "...")),
            "https://twitter.com/intent/"
              .concat(o[e])
              .concat(t)
              .concat(a && 4 === e ? "&text=".concat(encodeURI(l)) : "")
          );
        };
    },
    1500: (e, t, a) => {
      a.d(t, { G: () => o, c: () => i });
      var l = a(4848),
        s = a(6540);
      let n = (0, s.createContext)({
          collapsed: !1,
          toggleCollapsed: () => {},
        }),
        i = () => (0, s.useContext)(n),
        o = (e) => {
          let { children: t } = e,
            [a, i] = (0, s.useState)(!0);
          return (0, l.jsx)(n.Provider, {
            value: { collapsed: a, toggleCollapsed: () => i((e) => !e) },
            children: t,
          });
        };
    },
    2677: (e, t, a) => {
      a.d(t, { A: () => g });
      var l = a(6540),
        s = a(7493),
        n = a(9087),
        i = a(5962),
        o = a(6715),
        c = a(9304),
        r = a(9994),
        d = a(812),
        u = a(6781),
        p = a(4342),
        m = a(1468),
        x = a(400);
      let g = () => {
        let { loginOut: e } = (0, d.A)(),
          [t, a] = (0, l.useState)(""),
          [g, h] = (0, l.useState)(!1),
          [v, f] = (0, l.useState)("metamask"),
          [w, _] = (0, l.useState)(!1),
          [b, y] = (0, l.useState)(!1),
          [k, N] = (0, l.useState)(""),
          [j, A] = (0, l.useState)(!1),
          [E, C] = (0, l.useState)(!1),
          [T, S] = (0, l.useState)({ name: "APT", id: 1 }),
          [F, L] = (0, l.useState)(""),
          [I, P] = (0, l.useState)(0),
          z = (0, m.wA)(),
          B = (0, o.useRouter)(),
          {
            nToken: H,
            wAddress: M,
            wType: G,
            network: R,
            signSuccess: D,
            signError: O,
            evmSign: W,
          } = (0, r.A)(),
          {
            data: K,
            error: q,
            loading: X,
            fetchData: Z,
          } = (0, s.A)({ url: "/api/wallet_login", method: "POST" }),
          { fetchData: Y } = (0, s.A)({
            url: "/api/checkin_chain_base",
            method: "POST",
          }),
          Q = (e, t, l) => {
            (0, n.cT)("address", e),
              (0, n.cT)("isConnected", t),
              (0, n.cT)("wallet_type", l);
            let s = (0, n.c7)("original_evm_wallet_type"),
              i = (0, n.c7)("original_aptos_wallet_type"),
              o = (0, n.c7)("original_tron_wallet_type"),
              r = (0, n.c7)("original_solana_wallet_type");
            (0, c.He)(l)
              ? ((0, n.cT)("original_aptos_wallet_type", l),
                (0, n.cT)("original_evm_wallet_type", s || "MetaMask"),
                (0, n.cT)("original_tron_wallet_type", o || "TronLink"),
                (0, n.cT)("original_solana_wallet_type", r || "Phantom"))
              : (0, c.Nz)(l)
              ? ((0, n.cT)("original_tron_wallet_type", l),
                (0, n.cT)("original_evm_wallet_type", s || "MetaMask"),
                (0, n.cT)("original_aptos_wallet_type", i || "Petra"),
                (0, n.cT)("original_solana_wallet_type", r || "Phantom"))
              : (0, c.Zf)(l)
              ? ((0, n.cT)("original_solana_wallet_type", l),
                (0, n.cT)("original_tron_wallet_type", o || "TronLink"),
                (0, n.cT)("original_evm_wallet_type", s || "MetaMask"),
                (0, n.cT)("original_aptos_wallet_type", i || "Petra"))
              : ((0, n.cT)("original_evm_wallet_type", l),
                (0, n.cT)("original_aptos_wallet_type", i || "Petra"),
                (0, n.cT)("original_tron_wallet_type", o || "TronLink"),
                (0, n.cT)("original_solana_wallet_type", r || "Phantom")),
              h(t),
              f(l),
              a(e);
          },
          U = async () => {
            Y({ wallet: t });
          },
          V = (e) => {
            (0, n.cT)("current_chain_name", e.name),
              (0, n.cT)("current_chain_id", e.id);
          };
        (0, l.useEffect)(() => {
          (b || w) &&
            setTimeout(() => {
              y(!1), _(!1);
            }, 500);
        }, [b, w]),
          (0, l.useEffect)(() => {
            if (!X && K && 0 === K.code) {
              var t, a;
              let l =
                  null == K
                    ? void 0
                    : null === (t = K.data) || void 0 === t
                    ? void 0
                    : t.access_token,
                s =
                  null == K
                    ? void 0
                    : null === (a = K.data) || void 0 === a
                    ? void 0
                    : a.is_banned;
              l
                ? ((0, n.cT)("token", l),
                  L(l),
                  setTimeout(() => {
                    V(T), y(!0), _(!1), A(!1), (0, c.He)(v) && U();
                  }, 1e3))
                : (y(!1),
                  _(!0),
                  s &&
                    (z((0, x.VH)({ banned_info: s })),
                    (0, c.I5)(),
                    z((0, x.Gd)("", "", !1, "")),
                    e()));
            }
            !X && K && 0 !== K.code && (y(!1), _(!0)),
              !X && q && (y(!1), _(!0));
          }, [X]),
          (0, l.useEffect)(() => {
            D && (Q(M, !0, G), N(R), y(!0), _(!1), Q(M, !0, G)),
              O && (y(!1), _(!0));
          }, [D, O, H]);
        let J = (0, l.useCallback)(async (e) => {
            try {
              var t;
              y(!1), P(Date.now());
              let a = (0, c.zg)(e);
              if (!a)
                return null === (t = window) || void 0 === t
                  ? void 0
                  : t.open(i.ke[e]);
              let l = await a.connect();
              await new Promise((e) => setTimeout(e, 2e3));
              let s = i.lw,
                o = await a.signMessage({
                  address: !0,
                  application: !0,
                  chainId: !0,
                  message: s,
                }),
                r = (0, n.I_)(B.asPath);
              S({ name: "APT", id: 1 }),
                await Z({
                  wallet_signature: o.signature,
                  wallet: l.address,
                  full_message: o.fullMessage,
                  public_key: l.publicKey,
                  chain_type: "aptos",
                  invite_code: r,
                }).then(async () => {
                  Q(l.address, !0, e);
                });
            } catch (e) {
              console.log(e), y(!1), _(!0);
            }
          }, []),
          $ = (0, l.useCallback)(async function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "";
            try {
              var l;
              y(!1), P(Date.now());
              let s = (0, c.zg)(e);
              if (!s)
                return null === (l = window) || void 0 === l
                  ? void 0
                  : l.open(i.ke[e]);
              let n = await (0, c.Hd)(e);
              console.log("c_id", n),
                await s.send("eth_requestAccounts", []),
                ("0x1" !== n || "0x38" !== n) && (await (0, c.l_)(e));
              let o = s.getSigner(),
                r = await o.getAddress();
              a(r);
              let d = null,
                u = await (0, c.Hd)(e);
              (d = t
                ? t == u && c.Ak.find((e) => e.exId == u)
                : c.Ak.find((e) => e.exId == u)),
                Q(r, !0, e),
                d && d.id ? (W(r, e, d.id), A(!1)) : (A(!0), y(!0), _(!1));
            } catch (e) {
              console.log(e), y(!1), _(!0), A(!1);
            }
          }, []),
          ee = (0, l.useCallback)(async (e) => {
            let t = new u.Fq();
            try {
              var l, s;
              let o;
              y(!1), P(Date.now());
              let r = (0, c.zg)(e);
              if (!r)
                return null === (l = window) || void 0 === l
                  ? void 0
                  : l.open(i.ke[e]);
              if (
                (await (null == t ? void 0 : t.connect()),
                (null ==
                (o = (0, n.Fr)()
                  ? { code: 200 }
                  : await r.request({
                      method: "tron_requestAccounts",
                      params: {
                        websiteIcon: "/assets/img/1.png",
                        websiteName: "ByteNova",
                      },
                    }))
                  ? void 0
                  : o.code) == 200)
              ) {
                let t =
                  null == r
                    ? void 0
                    : null === (s = r.defaultAddress) || void 0 === s
                    ? void 0
                    : s.base58;
                a(t);
                let l = i.lw,
                  o = await r.trx.signMessageV2(l),
                  c = (0, n.I_)(B.asPath);
                S({ name: "TRX", id: 0x2b6653dc }),
                  await Z({
                    wallet_signature: o,
                    wallet: t,
                    invite_code: c,
                    full_message: "",
                    public_key: "",
                    chain_type: "TRX",
                  }).then(() => {
                    Q(t, !0, e);
                  });
              } else y(!1), _(!0);
            } catch (e) {
              console.log(e),
                y(!1),
                _(!0),
                await (null == t ? void 0 : t.disconnect());
            }
          }, []),
          et = (0, l.useCallback)(async (e) => {
            try {
              var t;
              y(!1), P(Date.now());
              let l = (0, c.zg)(e);
              if (!l)
                return null === (t = window) || void 0 === t
                  ? void 0
                  : t.open(i.ke[e]);
              if ((await l.request({ method: "connect" })) && l.publicKey) {
                let t;
                let s = l.publicKey.toString();
                a(s);
                let o = new TextEncoder().encode(i.lw);
                try {
                  t = await l.signMessage(o, "utf8");
                } catch (e) {
                  console.log("Failed to sign message:", e), y(!1), _(!0);
                  return;
                }
                let c = t.publicKey,
                  r = (0, n.I_)(B.asPath);
                S({ name: "SOL", id: 101 }),
                  await Z({
                    wallet_signature: p.A.encode(t.signature),
                    wallet: s,
                    invite_code: r,
                    full_message: "",
                    public_key: c.toBase58(),
                    chain_type: "SOL",
                  }).then(() => {
                    Q(s, !0, e);
                  });
              } else y(!1), _(!0);
            } catch (e) {
              console.log("Error connecting to Phantom:", e), y(!1), _(!0);
            }
          }, []),
          ea = () => {
            (0, c.I5)(), z((0, x.Gd)("", "", !1, ""));
          };
        return (
          (0, l.useEffect)(() => {
            let e = (0, c.NK)(),
              t = (0, c.zg)(e);
            if ((0, c.He)())
              null == t ||
                t.onAccountChange((e) => {
                  if (e) {
                    let t = null == e ? void 0 : e.address,
                      a = (0, n.c7)("address");
                    (t &&
                      a &&
                      t.toLocaleLowerCase() === a.toLocaleLowerCase()) ||
                      ea();
                  }
                }),
                t &&
                  (null == t ? void 0 : t.onNetworkChange) &&
                  (null == t ||
                    t.onNetworkChange((t) => {
                      console.log("".concat(e, " network change"), t);
                    }));
            else if ((0, c.Nz)())
              window.addEventListener("message", function (e) {
                var t, a, l;
                e &&
                  (null == e ? void 0 : e.data) &&
                  (null == e
                    ? void 0
                    : null === (t = e.data) || void 0 === t
                    ? void 0
                    : t.message) &&
                  (null == e
                    ? void 0
                    : null === (l = e.data) || void 0 === l
                    ? void 0
                    : null === (a = l.message) || void 0 === a
                    ? void 0
                    : a.action) === "accountsChanged" &&
                  console.log("got accountsChanged event", e.data);
              }),
                window.addEventListener("message", function (e) {
                  e.data.message &&
                    "setNode" == e.data.message.action &&
                    console.log("got setNode event", e.data);
                }),
                window.addEventListener("message", function (e) {
                  e.data.message &&
                    "disconnect" == e.data.message.action &&
                    console.log("got connect event", e.data);
                });
            else if ((0, c.Zf)())
              (null == t ? void 0 : t.on) &&
                (null == t ||
                  t.on("accountChanged", (e) => {
                    console.log(
                      "account changed",
                      e,
                      String(null == t ? void 0 : t.publicKey)
                    );
                    let a = String(null == t ? void 0 : t.publicKey),
                      l = (0, n.c7)("address");
                    (e &&
                      (null == t ? void 0 : t.publicKey) &&
                      l &&
                      (null == a ? void 0 : a.toLocaleLowerCase()) ===
                        (null == l ? void 0 : l.toLocaleLowerCase())) ||
                      ea();
                  })),
                (null == t ? void 0 : t.on) &&
                  t.on("networkChanged", (e) => {
                    console.log("network changed", e);
                  });
            else {
              var a, l;
              null == t ||
                null === (a = t.provider) ||
                void 0 === a ||
                a.on("accountsChanged", (t) => {
                  console.log("".concat(e, " account change")),
                    0 === t.length && ea();
                }),
                null == t ||
                  null === (l = t.provider) ||
                  void 0 === l ||
                  l.on("disconnect", (t) => {
                    console.log("".concat(e, " disconnect: "), t), ea();
                  });
            }
            return () => {
              if ((0, c.He)());
              else if ((0, c.Nz)())
                window.removeEventListener("message", () => {});
              else if ((0, c.Zf)())
                (null == t ? void 0 : t.off) &&
                  t.off("accountChanged", () => {}),
                  (null == t ? void 0 : t.off) &&
                    t.off("networkChanged", () => {});
              else {
                var e, a;
                null == t ||
                  null === (e = t.provider) ||
                  void 0 === e ||
                  e.removeListener("accountsChanged", () => {}),
                  null == t ||
                    null === (a = t.provider) ||
                    void 0 === a ||
                    a.removeListener("disconnect", () => {});
              }
            };
          }, []),
          {
            cToken: F,
            isChain: j,
            address: t,
            connected: g,
            walletT: v,
            currentNetwork: k,
            isError: w,
            isSuccess: b,
            date: I,
            connectAptosAndSign: J,
            connectEvmAndSign: $,
            connectTronAndSign: ee,
            connectSolanaAndSign: et,
            isBanned: E,
            setIsBanned: C,
          }
        );
      };
    },
    9994: (e, t, a) => {
      a.d(t, { A: () => p });
      var l = a(6540),
        s = a(9304),
        n = a(5962),
        i = a(6715),
        o = a(7493),
        c = a(812),
        r = a(9087),
        d = a(400),
        u = a(1468);
      let p = () => {
        let { loginOut: e } = (0, c.A)(),
          t = (0, i.useRouter)(),
          [a, p] = (0, l.useState)(""),
          [m, x] = (0, l.useState)(!1),
          [g, h] = (0, l.useState)(!1),
          [v, f] = (0, l.useState)(""),
          [w, _] = (0, l.useState)(""),
          [b, y] = (0, l.useState)({}),
          [k, N] = (0, l.useState)(""),
          j = (0, u.wA)(),
          {
            data: A,
            loading: E,
            fetchData: C,
          } = (0, o.A)({ url: "/api/wallet_login", method: "POST" }),
          { fetchData: T } = (0, o.A)({
            url: "/api/checkin_chain_base",
            method: "POST",
          }),
          S = async () => {
            T({ wallet: w });
          },
          F = (e) => {
            (0, r.cT)("current_chain_name", e.name),
              (0, r.cT)("current_chain_id", e.id);
          },
          L = function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              t = (e || b).chainId;
            return s.Ak.find((e) => e.id == t);
          },
          I = () => {
            (0, s.I5)(), j((0, d.Gd)("", "", !1, ""));
          };
        return (
          (0, l.useEffect)(() => {
            (m || g) &&
              setTimeout(() => {
                x(!1), h(!1);
              }, 500);
          }, [m, g]),
          (0, l.useEffect)(() => {
            if (!E && A && 0 === A.code) {
              var t, a;
              let l =
                  null == A
                    ? void 0
                    : null === (t = A.data) || void 0 === t
                    ? void 0
                    : t.access_token,
                n =
                  null == A
                    ? void 0
                    : null === (a = A.data) || void 0 === a
                    ? void 0
                    : a.is_banned;
              if (!l) {
                n &&
                  (j((0, d.VH)({ banned_info: n })),
                  (0, s.I5)(),
                  j((0, d.Gd)("", "", !1, "")),
                  e());
                return;
              }
              (0, r.cT)("token", l),
                setTimeout(() => {
                  N(l);
                  let e = L();
                  e && e.id && F(e), x(!0), h(!1), (0, s.He)(v) && S();
                }, 1e3);
            }
          }, [E]),
          {
            nToken: k,
            wAddress: w,
            wType: v,
            network: a,
            signSuccess: m,
            signError: g,
            evmSign: (0, l.useCallback)(async function (e, a) {
              let l =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "";
              try {
                f(a), _(e);
                let i = (0, s.zg)(a),
                  o = await i.provider.request({
                    method: "personal_sign",
                    params: [n.lw, e],
                  }),
                  c = {};
                c = l ? { chainId: l } : await i.getNetwork();
                let d = L(c);
                y(c);
                let u = (0, r.I_)(t.asPath);
                await C({
                  wallet_signature: o,
                  wallet: e,
                  invite_code: u,
                  full_message: "",
                  public_key: "",
                  chain_type: null == d ? void 0 : d.name,
                }).then(() => {
                  let e = s.Ak.find((e) => e.id == l);
                  e && e.id && p(e.name), x(!0), h(!1);
                });
              } catch (e) {
                console.log(e), x(!1), h(!0), I();
              }
            }, []),
            aptosSign: (0, l.useCallback)(async (e, a, l) => {
              try {
                var i;
                f(a), _(e);
                let o = n.lw,
                  c = (0, s.zg)(a);
                if (!c)
                  return null === (i = window) || void 0 === i
                    ? void 0
                    : i.open(n.ke[a]);
                let d = await c.signMessage({
                    address: !0,
                    application: !0,
                    chainId: !0,
                    message: o,
                  }),
                  u = (0, r.I_)(t.asPath);
                await C({
                  wallet_signature: d.signature,
                  wallet: e,
                  full_message: d.fullMessage,
                  public_key: l,
                  chain_type: "aptos",
                  invite_code: u,
                }).then(async () => {});
              } catch (e) {
                console.log(e), x(!1), h(!0);
              }
            }, []),
          }
        );
      };
    },
    765: (e, t, a) => {
      a.d(t, { A: () => o });
      var l = a(6540),
        s = a(9304),
        n = a(9087),
        i = a(9994);
      let o = () => {
        let [e, t] = (0, l.useState)(!1),
          [a, o] = (0, l.useState)(!1),
          [c, r] = (0, l.useState)(0),
          [d, u] = (0, l.useState)(!1),
          [p, m] = (0, l.useState)(""),
          [x, g] = (0, l.useState)(""),
          { nToken: h, signSuccess: v, signError: f, evmSign: w } = (0, i.A)();
        (0, l.useEffect)(() => {
          v && u(!0), f && (t(!1), o(!0), u(!1));
        }, [v, f, h]);
        let _ = (e) => {
            (0, n.cT)("current_chain_name", e.name),
              (0, n.cT)("current_chain_id", e.id);
          },
          b = async () => {
            try {
              await (0, s.l_)(p, x);
              let e = s.Ak.find((e) => e.id === x);
              _(e), r(x), t(!0), o(!1), u(!1);
            } catch (e) {
              console.log(e), t(!1), o(!0);
            }
          };
        return (
          (0, l.useEffect)(() => {
            d && b();
          }, [d]),
          {
            switchChainId: c,
            switchSuccess: e,
            switchError: a,
            switchNetworkByChainId: (0, l.useCallback)(async (e, a) => {
              try {
                let t = (0, n.c7)("address");
                m(e), g(a), t && a && (await w(t, e, a));
              } catch (e) {
                console.log(e), t(!1), o(!0);
              }
            }, []),
          }
        );
      };
    },
  },
]);
