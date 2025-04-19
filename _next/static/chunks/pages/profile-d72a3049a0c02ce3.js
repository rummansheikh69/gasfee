(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [63],
  {
    6156: (e, t, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/profile",
        function () {
          return s(1102);
        },
      ]);
    },
    1102: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => _ });
      var l = s(4848),
        a = s(1468),
        d = s(5577),
        i = s(6540),
        n = s(400),
        r = s(9087),
        c = s(7391),
        o = s(1105),
        x = s(7493),
        m = s(6297),
        p = s(4655);
      function h(e) {
        let {
          isOpen: t,
          onClose: s,
          width: a = 420,
          className: d = "",
          children: n,
        } = e;
        return (
          (0, i.useEffect)(
            () => (
              t
                ? (document.body.style.overflow = "hidden")
                : (document.body.style.overflow = ""),
              () => {
                document.body.style.overflow = "";
              }
            ),
            [t]
          ),
          (0, l.jsx)(m.N, {
            children:
              t &&
              (0, l.jsx)(p.P.div, {
                className:
                  "fixed inset-0 z-50 flex items-center justify-center bg-[#0000004D] backdrop-blur-[10px]",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                onClick: s,
                children: (0, l.jsxs)(p.P.div, {
                  className:
                    "bg-white rounded-lg relative shadow-xl max-h-[600px] max-w-[90%] overflow-hidden ".concat(
                      d
                    ),
                  initial: { opacity: 0, scale: 0.95, y: 20 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  exit: { opacity: 0, scale: 0.95, y: 20 },
                  transition: { duration: 0.25, ease: "easeOut" },
                  onClick: (e) => e.stopPropagation(),
                  style: { width: "".concat(a, "px") },
                  children: [
                    (0, l.jsx)("button", {
                      onClick: s,
                      className:
                        "absolute right-4 top-4 text-black text-xl font-medium",
                      children: "\xd7",
                    }),
                    (0, l.jsx)("div", { children: n }),
                  ],
                }),
              }),
          })
        );
      }
      let u = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
      function f(e) {
        let { isOpen: t, onClose: s } = e,
          { avatar: d, display_name: n } = (0, a.d4)((e) => e.userInfo),
          [m, p] = (0, i.useState)(null),
          [f, b] = (0, i.useState)(""),
          [g, v] = (0, i.useState)(""),
          [j, w] = (0, i.useState)(!0),
          [N, y] = (0, i.useState)(!1),
          { fetchLoginRefreshData: A } = (0, c.A)(),
          {
            data: C,
            error: k,
            loading: E,
            fetchData: D,
          } = (0, x.A)({ url: "/api/profile_save_user", method: "POST" });
        (0, i.useEffect)(() => {
          if (
            (setTimeout(() => {
              y(!1);
            }, 1e3),
            !E && C && 0 === C.code)
          ) {
            o.oR.success("Save Success!"), s();
            let e = (0, r.c7)("address");
            if (!e) return;
            A(e);
          }
          k && o.oR.error(k.data);
        }, [E]),
          (0, i.useEffect)(() => {
            v(n);
            let e = d.match(/a(\d+)\.png/);
            p(Number(e ? e[1] : null)), b(d);
          }, [t, d, n]);
        let F = (e) => {
            (v(e), /^[A-Za-z0-9 ]{1,20}$/.test(e)) ? w(!0) : w(!1);
          },
          _ = (e) => {
            p(e), b("/images/dapp/profile/byte".concat(e, ".png"));
          };
        return (0, l.jsxs)(h, {
          isOpen: t,
          onClose: s,
          className: "p-5 md:p-8",
          width: 500,
          children: [
            (0, l.jsx)("h2", {
              className: "self-start text-[24px] font-bold",
              children: "Edit Profile",
            }),
            (0, l.jsxs)("div", {
              className:
                "flex max-h-[500px] flex-col items-center overflow-y-auto",
              children: [
                (0, l.jsx)("div", {
                  className: "mt-[18px] md:mt-[54px]",
                  children: (0, l.jsx)("div", {
                    className:
                      "flex h-[122px] w-[122px] md:h-[140px] md:w-[140px] items-center justify-center rounded-full bg-[#EEEEEE] shadow-md",
                    children: (0, l.jsx)("img", {
                      src: f || "./images/dapp/profile/byte/byte1.png",
                      alt: "Selected Avatar",
                      className:
                        "h-[100px] w-[100px] md:h-[122px] md:w-[122px] rounded-full object-cover",
                    }),
                  }),
                }),
                (0, l.jsx)("div", {
                  className:
                    "mt-[16px] md:mt-[32px] grid grid-cols-6 gap-x-2 md:gap-x-4 gap-y-3 md:gap-y-6",
                  children: u.map((e) =>
                    (0, l.jsxs)(
                      "div",
                      {
                        className:
                          "relative flex h-[43px] w-[43px] md:h-[56px] md:w-[56px] cursor-pointer items-center justify-center rounded-full bg-[#AF93C52E] transition-all duration-200",
                        onClick: () => _(e),
                        children: [
                          (0, l.jsx)("img", {
                            src: "./images/dapp/profile/byte".concat(e, ".png"),
                            alt: "",
                            className:
                              "h-[34px] w-[34px] md:h-[49px] md:w-[49px] rounded-full object-cover",
                          }),
                          e === m &&
                            (0, l.jsx)("div", {
                              className:
                                "absolute inset-0 flex items-center justify-center rounded-full bg-black/50",
                              children: (0, l.jsx)("img", {
                                src: "./svg/icon-check.svg",
                                alt: "selected",
                                className: "h-5 w-5",
                              }),
                            }),
                        ],
                      },
                      e
                    )
                  ),
                }),
                (0, l.jsxs)("div", {
                  className: "w-full",
                  children: [
                    (0, l.jsx)("label", {
                      className:
                        "mb-2.5 md:mb-[17px] mt-[20px] md:mt-[41px] block text-xs md:text-sm font-normal",
                      children: "Display Name",
                    }),
                    (0, l.jsx)("input", {
                      type: "text",
                      value: g,
                      onChange: (e) => {
                        F(e.target.value);
                      },
                      className:
                        "h-10 h-12 w-full rounded-lg border border-[#424242] px-3 md:px-4 text-xs md:text-sm font-normal outline-none placeholder:text-[#9799A1] focus:border-[#1860F1]",
                      placeholder: "Input your name",
                      maxLength: 20,
                    }),
                    (0, l.jsx)("p", {
                      className:
                        "mt-1.5 md:mt-2.5 text-[10px] md:text-xs text-[#4380DD]",
                      children:
                        "1-20 characters; letters, numbers, and blanks only",
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className:
                    "mt-5 md:mt-[44px] grid w-full grid-cols-2 gap-[21px]",
                  children: [
                    (0, l.jsx)("button", {
                      onClick: s,
                      className:
                        "h-[40px] md:h-[56px] w-full rounded-xl border border-[#828282] leading-full text-[#595A5F] hover:border-[#5A5A5A] hover:text-[#23252A]",
                      children: "Cancel",
                    }),
                    (0, l.jsx)("button", {
                      className:
                        "h-[40px] md:h-[56px] w-full rounded-xl border-[#23252A] bg-[#23252A] font-bold leading-full text-white hover:border-[#42454D] hover:bg-[#42454D]",
                      onClick: () => {
                        let e = (0, r.c7)("address");
                        if (!j)
                          return o.oR.error("Validate display name error!");
                        y(!0), D({ display_name: g, avatar: f, wallet: e });
                      },
                      disabled: !j,
                      children: N
                        ? (0, l.jsxs)("div", {
                            className: "flex items-center justify-center gap-2",
                            children: [
                              (0, l.jsx)("img", {
                                src: "./images/icon/icon-loading-w.png",
                                alt: "",
                                className:
                                  "h-4 w-4 animate-spin [animation-duration:0.8s] [animation-timing-function:linear]",
                              }),
                              (0, l.jsx)("span", {
                                className:
                                  "justify-center text-center text-[14px] font-bold leading-full",
                                children: "Loading",
                              }),
                            ],
                          })
                        : "Save",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var b = s(2914);
      function g() {
        let e = (0, a.wA)(),
          { fetchLoginRefreshData: t, userInfo: s } = (0, c.A)(),
          { address: d } = (0, a.d4)((e) => e.wallet),
          { display_name: o, avatar: x } = (0, a.d4)((e) => e.userInfo),
          [m, p] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            s && e((0, n.iA)(s));
          }, [s]),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("div", {
                className: "mb-[47px] flex w-full items-center justify-between",
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex items-center gap-2 md:gap-6",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "flex h-[81px] w-[81px] md:h-[151px] md:w-[151px] items-center justify-center overflow-hidden rounded-full border-[2px] border-black",
                        children: (0, l.jsx)("img", {
                          src: x,
                          alt: "Avatar",
                          className:
                            "rounded-full object-cover w-[67px] h-[67px] md:w-[137px] md:h-[137px]",
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("div", {
                            className: "mb-2 md:mb-[17px] flex items-center",
                            children: (0, l.jsx)("span", {
                              className:
                                "text-sm md:text-2xl font-bold space-font",
                              children: o || (0, r.Hq)(d),
                            }),
                          }),
                          (0, l.jsxs)("div", {
                            className: "flex items-center gap-1 md:gap-2",
                            children: [
                              (0, l.jsx)("span", {
                                className:
                                  "text-xs md:text-sm font-normal text-[#595A5F] space-font",
                                children: (0, r.Hq)(d),
                              }),
                              (0, l.jsx)(b.A, { text: d }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "flex cursor-pointer  h-[30px] md:h-[40px] items-center justify-center rounded-lg border border-[#828282] px-3 md:px-5 text-sm md:text-base text-[#595A5F] leading-full hover:border-[#5A5A5A] hover:text-[#23252A]",
                    onClick: () => p(!0),
                    children: "Edit Profile",
                  }),
                ],
              }),
              (0, l.jsx)(f, {
                isOpen: m,
                onClose: () => {
                  let e = (0, r.c7)("address");
                  e && (t(e), p(!1));
                },
              }),
            ],
          })
        );
      }
      var v = s(9965),
        j = s.n(v),
        w = s(3350),
        N = s(812);
      let y = () => {
        let [e, t] = (0, i.useState)(0),
          s = (0, a.wA)(),
          {
            data: l,
            loading: d,
            fetchData: r,
          } = (0, x.A)({
            url: "/api/node_sale/balance_detail",
            method: "POST",
          });
        return (
          (0, i.useEffect)(() => {
            if (!d && l && 0 === l.code) {
              let e = null == l ? void 0 : l.data;
              t(e), s((0, n.uB)(e));
            }
          }, [d]),
          {
            balanceInfo: e,
            fetchUserAssets: (0, i.useCallback)((e) => {
              r({ wallet: e });
            }, []),
          }
        );
      };
      var A = s(3768),
        C = s(9304);
      let k = (e) => {
          let { onClose: t, loginOut: s, dispatch: a } = e,
            d = () => {
              (0, C.I5)(), a((0, n.Gd)("", "", !1, ""));
            };
          return (0, l.jsxs)("div", {
            className:
              "w-[400px] rounded-[16px] !border-[#FFFFFF] !bg-[#FFFFFF] p-5 shadow-md",
            children: [
              (0, l.jsx)("p", {
                className: "mb-[10px] text-[16px] text-[#23252A]",
                children: "Sure you want to log out?",
              }),
              (0, l.jsxs)("div", {
                className: "mt-[18px] flex items-center justify-center gap-6",
                children: [
                  (0, l.jsx)("button", {
                    onClick: t,
                    className:
                      "flex-1 cursor-pointer rounded-xl border border-[#828282] py-5 text-[#595A5F] hover:border-[#5A5A5A] hover:text-[#23252A]",
                    children: "No",
                  }),
                  (0, l.jsx)("button", {
                    onClick: async () => {
                      s(), t(), d();
                    },
                    className:
                      "flex-1 cursor-pointer rounded-xl border-[#23252A] bg-[#23252A] py-5 text-white hover:bg-[#42454D]",
                    children: "Yes",
                  }),
                ],
              }),
            ],
          });
        },
        E = {
          hidden: { opacity: 0, y: 10 },
          visible: (e) => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0.1 * e, duration: 0.4 },
          }),
        },
        D = (e) => {
          let {
              icon: t,
              label: s,
              oType: a,
              connected: d,
              value: n,
              onConnect: r,
              onDisconnect: c,
            } = e,
            o = (0, i.useRef)(null),
            x = d && "email" !== a;
          return (0, l.jsxs)(p.P.div, {
            className:
              "flex items-center justify-between rounded-lg bg-white px-4 md:px-6 py-4 shadow-sm",
            variants: E,
            initial: "hidden",
            animate: "visible",
            custom: 0,
            children: [
              (0, l.jsxs)("div", {
                className: "flex items-center gap-2 md:gap-4",
                children: [
                  (0, l.jsx)("div", {
                    className: "h-8 w-8 md:h-12 md:w-12",
                    children: (0, l.jsx)(j(), {
                      src: t,
                      alt: s,
                      className: "h-8 w-8 md:h-12 md:w-12",
                      width: 48,
                      height: 48,
                    }),
                  }),
                  (0, l.jsxs)("div", {
                    className:
                      "flex items-center gap-2 text-sm font-bold text-[#23252A]",
                    children: [
                      s,
                      n &&
                        (0, l.jsx)("div", {
                          className: "md:ml-[27px] font-normal text-[#8B8B8C]",
                          children: n,
                        }),
                      d &&
                        (0, l.jsx)(j(), {
                          src: "./svg/checked.svg",
                          alt: "verified",
                          width: 16,
                          height: 16,
                        }),
                    ],
                  }),
                ],
              }),
              d
                ? (0, l.jsx)("button", {
                    className:
                      "h-[40px] w-[90px] md:w-[100px] rounded-lg border border-[#E1E1E1] bg-white px-2 md:px-4 text-sm font-medium leading-full text-[#23252A] hover:border-[#5A5A5A] hover:text-[#23252A] disabled:bg-[#CBCDD4] disabled:text-[#9799A1]",
                    disabled: x,
                    onClick: c,
                    children: x ? "Connected" : "Disconnect",
                  })
                : (0, l.jsx)(A.A, {
                    ref: o,
                    oType: a,
                    children: (0, l.jsx)("button", {
                      className:
                        "h-[40px] w-[90px] md:w-[100px] rounded-lg border border-transparent bg-black px-2 md:px-4 text-sm font-medium leading-full text-white hover:bg-[#42454D]",
                      onClick: () => r(null == o ? void 0 : o.current),
                      children: "Connect",
                    }),
                  }),
            ],
          });
        };
      function F() {
        let e = (0, a.wA)(),
          { loginOut: t } = (0, N.A)(),
          { fetchLoginRefreshData: s, userInfo: d } = (0, c.A)(),
          { fetchUserAssets: m } = y(),
          {
            isConnected: h,
            address: u,
            walletType: f,
          } = (0, a.d4)((e) => e.wallet),
          {
            is_bind_twitter: b,
            is_bind_discord: g,
            twitter_name: v,
            discord_name: A,
            email: C,
            is_bind_email: F,
          } = (0, a.d4)((e) => e.userInfo),
          [_, S] = (0, i.useState)(!1),
          {
            data: T,
            error: P,
            loading: O,
            fetchData: q,
          } = (0, x.A)({ url: "/api/unbind_email", method: "POST" });
        (0, i.useEffect)(() => {
          if (!O && T && 0 === T.code) {
            let e = null == T ? void 0 : T.data;
            if ((S(!1), e.is_success)) {
              o.oR.success("Unbind success!");
              let e = (0, r.c7)("address");
              if (!e) return;
              s(e), m(e);
            } else o.oR.error("Unbind failed!");
          }
          !O && P && (S(!1), o.oR.error("Unbind failed!"));
        }, [O]),
          (0, i.useEffect)(() => {
            d && e((0, n.iA)(d));
          }, [d]);
        let B = () => {
            (0, w.ZX)({
              customUI: (s) => {
                let { onClose: a } = s;
                return (0, l.jsx)(k, { onClose: a, loginOut: t, dispatch: e });
              },
            });
          },
          R = () => {
            S(!0);
            let e = (0, r.c7)("address");
            e && (q({ wallet: e }), s(e));
          };
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)("div", {
            className: "space-y-8",
            children: [
              (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)("h3", {
                    className: "mb-3 text-sm font-bold text-[#23252A]",
                    children: "Connections",
                  }),
                  (0, l.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                      (0, l.jsx)(D, {
                        icon: "./svg/logo/x-squared.svg",
                        label: "Twitter",
                        oType: "twitter",
                        value: v,
                        connected: b,
                        onConnect: (e) => {
                          e.loginWithTwitter();
                        },
                        onDisconnect: () => {},
                      }),
                      (0, l.jsx)(D, {
                        icon: "./svg/logo/discord-squared.svg",
                        label: "Discord",
                        oType: "discord",
                        value: A,
                        connected: g,
                        onConnect: (e) => {
                          e.loginWithDiscord();
                        },
                        onDisconnect: () => {},
                      }),
                      (0, l.jsx)(D, {
                        icon: "./svg/logo/email-squared.svg",
                        label: "Email",
                        oType: "email",
                        value: C,
                        connected: F,
                        onConnect: (e) => {
                          e.loginWithEmail();
                        },
                        onDisconnect: () => R(),
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "pb-4",
                children: [
                  (0, l.jsx)("h3", {
                    className: "mb-3 text-sm font-bold text-[#23252A]",
                    children: "Wallet",
                  }),
                  (0, l.jsx)("div", {
                    className: "space-y-3",
                    children: (0, l.jsxs)(p.P.div, {
                      className:
                        "flex items-center justify-between rounded-lg bg-white px-4 md:px-6 py-4 shadow-sm",
                      variants: E,
                      initial: "hidden",
                      animate: "visible",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "flex items-center gap-2 md:gap-4",
                          children: [
                            (0, l.jsx)("div", {
                              className: "h-8 w-8 md:h-12 md:w-12",
                              children: (0, l.jsx)(j(), {
                                src: h
                                  ? "./images/wallets/".concat(f, ".png")
                                  : "./svg/logo/metamask-squared.svg",
                                alt: "walletType",
                                className: "h-8 w-8 md:h-12 md:w-12",
                                width: 48,
                                height: 48,
                              }),
                            }),
                            h &&
                              (0, l.jsxs)("div", {
                                className:
                                  "flex items-center gap-4 text-sm font-medium text-[#23252A] md:gap-2",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "hidden text-[#23252A] md:block",
                                    children: f,
                                  }),
                                  (0, l.jsx)("div", {
                                    className:
                                      "font-normal text-[#8B8B8C] md:ml-[27px]",
                                    children: (0, r.Hq)(u),
                                  }),
                                  (0, l.jsx)(j(), {
                                    src: "./svg/checked.svg",
                                    alt: "verified",
                                    width: 16,
                                    height: 16,
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, l.jsx)("button", {
                          className:
                            "h-[40px] w-[90px] md:w-[100px] rounded-lg border border-[#E1E1E1] bg-white px-2 md:px-4 text-sm font-medium leading-full text-[#23252A] hover:border-[#5A5A5A] hover:text-[#23252A]",
                          onClick: () => B(),
                          children: "Disconnect",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function _() {
        let { address: e } = (0, a.d4)((e) => e.wallet);
        return (0, l.jsxs)(d.A, {
          pageTitle: "ByteNova - ".concat((0, r.Hq)(e), " Profile") || 0,
          children: [(0, l.jsx)(g, {}), (0, l.jsx)(F, {})],
        });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [75, 67, 830, 940, 21, 636, 593, 792], () => t(6156)),
      (_N_E = e.O());
  },
]);
