(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [21],
  {
    8591: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => i });
      var s = a(4848);
      function i(e) {
        let {
          className: t = "",
          title: a = "No data",
          message: i = "No data to display!",
          height: l = "500px",
          children: r,
        } = e;
        return (0, s.jsxs)("div", {
          className: "p-5 flex flex-col justify-center items-center ".concat(t),
          style: { height: l },
          children: [
            (0, s.jsx)("div", {
              className:
                "w-[90px] h-[90px] bg-[url('/svg/empty-state.svg')] bg-cover",
            }),
            (0, s.jsx)("div", {
              className: "text-center text-[#9799A1] text-[14px] mt-2",
              children: a,
            }),
            i &&
              (0, s.jsx)("div", {
                className: "text-[#23252A] text-[14px] font-bold mt-[6px]",
                children: i,
              }),
            (0, s.jsx)("div", { className: "mt-4", children: r }),
          ],
        });
      }
      a(6540);
    },
    3768: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => f });
      var s = a(4848),
        i = a(6540),
        l = a(5440),
        r = a.n(l),
        c = a(1468);
      a(4338);
      var n = a(7493),
        d = a(7391),
        o = a(4295),
        m = a(400),
        u = a(9087),
        x = a(6942),
        h = a.n(x),
        p = a(1105);
      let f = (0, i.forwardRef)((e, t) => {
        let { oType: a, emailAddress: l, bindChange: x } = e,
          f = (0, c.wA)();
        (0, i.useImperativeHandle)(t, () => ({
          loginWithTwitter() {
            es();
          },
          loginWithDiscord() {
            ei();
          },
          loginWithEmail() {
            ec();
          },
        }));
        let { fetchLoginRefreshData: _, userInfo: j } = (0, d.A)(),
          { fetchOauthRefreshData: v, oauthInfo: g } = (0, o.A)(),
          [b, w] = (0, i.useState)(!1),
          [y, N] = (0, i.useState)(!1),
          [A, O] = (0, i.useState)(""),
          [C, k] = (0, i.useState)(""),
          [D, E] = (0, i.useState)(!1),
          [T, F] = (0, i.useState)(!0),
          [S, I] = (0, i.useState)(60),
          [L, R] = (0, i.useState)(!1),
          {
            data: P,
            loading: B,
            fetchData: U,
          } = (0, n.A)({ url: "/api/twitter_login", method: "POST" }),
          {
            data: Z,
            loading: z,
            fetchData: V,
          } = (0, n.A)({ url: "/api/discord_login", method: "POST" }),
          {
            data: W,
            loading: q,
            fetchData: G,
          } = (0, n.A)({ url: "/api/send_email_code", method: "POST" }),
          { fetchData: H } = (0, n.A)({
            url: "/api/node_sale/send_withdraw_code",
            method: "POST",
          }),
          {
            data: Q,
            error: M,
            loading: $,
            fetchData: J,
          } = (0, n.A)({ url: "/api/verify_email_code", method: "POST" }),
          {
            data: K,
            error: X,
            loading: Y,
            fetchData: ee,
          } = (0, n.A)({
            url: "/api/node_sale/verify_withdraw_code",
            method: "POST",
          }),
          et = () => {
            let e = (0, u.c7)("address");
            e && (_(e), v(e));
          };
        (0, i.useEffect)(() => {
          let e = (e) => {
            "bytenova_id" === e.key && et();
          };
          return (
            window.addEventListener("storage", e),
            () => {
              (0, u.Od)("bytenova_id"),
                window.removeEventListener("storage", e);
            }
          );
        }, []),
          (0, i.useEffect)(() => {
            l && E(!0);
          }, [l]),
          (0, i.useEffect)(() => {
            j && f((0, m.iA)(j));
          }, [j]),
          (0, i.useEffect)(() => {
            g && f((0, m.u$)(g));
          }, [g]);
        let ea = (e) => {
          let t = window.screen.width / 2 - 300;
          window.open(
            e,
            "Oauth",
            "width="
              .concat(600, ",height=")
              .concat(800, ",top=")
              .concat(0, ",left=")
              .concat(t)
          );
        };
        (0, i.useEffect)(() => {
          !B && P && 0 === P.code && ea(P.data.redirect_url);
        }, [B]),
          (0, i.useEffect)(() => {
            !z && Z && 0 === Z.code && ea(Z.data.redirect_url);
          }, [z]),
          (0, i.useEffect)(() => {
            !q &&
              W &&
              0 === W.code &&
              W.data.is_success &&
              p.oR.success("Email sent!"),
              q ||
                !W ||
                0 === W.code ||
                W.data.is_success ||
                p.oR.error(W.message);
          }, [q]),
          (0, i.useEffect)(() => {
            C && F(!0);
          }, [C]),
          (0, i.useEffect)(() => {
            if (!$ && Q && 0 === Q.code) {
              let e = Q.data;
              if ((F(e.is_success), e.is_success)) {
                let e = (0, u.c7)("address");
                if (!e) return;
                _(e), p.oR.success("Bind success!"), w(!1), N(!1);
              }
            }
            !$ && Q && 0 !== Q.code && (F(!1), N(!1)),
              !$ && M && (F(!1), N(!1));
          }, [$]),
          (0, i.useEffect)(() => {
            if (!Y && K && 0 === K.code) {
              let e = K.data;
              F(e.is_success),
                e.is_success &&
                  (x && x(),
                  p.oR.success("Verify success!"),
                  w(!1),
                  k(""),
                  N(!1));
            }
            !Y && K && 0 !== K.code && (F(!1), N(!1)),
              !Y && X && (F(!1), N(!1));
          }, [Y]);
        let es = () => {
            U({
              callback_url: encodeURIComponent(
                "".concat(window.location.origin, "/callback")
              ),
            });
          },
          ei = () => {
            V({
              callback_url: encodeURIComponent(
                "".concat(window.location.origin, "/callbackd")
              ),
            });
          },
          el = (e) =>
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e),
          er = () => {
            w(!1), k(""), N(!1);
          },
          ec = () => {
            w(!0);
          },
          en = (e) => {
            O(e), el(e) ? E(!0) : E(!1);
          },
          ed = (e) => {
            k(e);
          },
          eo = (e) => {
            if (e <= 0) {
              R(!1), I(60);
              return;
            }
            R(!0),
              setTimeout(() => {
                I(e - 1), eo(e - 1);
              }, 1e3);
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            e.children,
            b &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)("div", {
                    className: r()["react-confirm-alert-mask"],
                  }),
                  (0, s.jsx)("div", {
                    className: r()["react-confirm-alert-body"],
                    children: (0, s.jsxs)("div", {
                      className: r()["react-confirm-alert-cont"],
                      children: [
                        (0, s.jsx)("div", {
                          className: r()["react-confirm-alert-close"],
                          onClick: () => er(),
                          children: (0, s.jsx)("img", {
                            src: "./svg/icon-close.svg",
                            alt: "",
                          }),
                        }),
                        "email" === a &&
                          (0, s.jsx)("div", {
                            className: r()["react-confirm-header"],
                            children: (0, s.jsx)("span", {
                              children: "Bind email address",
                            }),
                          }),
                        (0, s.jsxs)("div", {
                          className: r()["react-body-content"],
                          children: [
                            "withemail" === a &&
                              (0, s.jsxs)("div", {
                                className: r().emailTop,
                                children: [
                                  (0, s.jsx)("img", {
                                    src: "/assets/img/icon-bind-email.svg",
                                    alt: "",
                                  }),
                                  (0, s.jsx)("div", {
                                    className: r()["react-confirm-title"],
                                    children: (0, s.jsx)("span", {
                                      children: "Bind email address",
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    className: r().bindDesc,
                                    children:
                                      "For the safety of your assets, please bind your email address when withdrawing your assets",
                                  }),
                                ],
                              }),
                            "verifyemail" === a &&
                              (0, s.jsxs)("div", {
                                className: r().emailTop,
                                children: [
                                  (0, s.jsx)("img", {
                                    src: "/assets/img/icon-verify-email.svg",
                                    alt: "",
                                  }),
                                  (0, s.jsx)("div", {
                                    className: r()["react-confirm-title"],
                                    children: (0, s.jsx)("span", {
                                      children: "Verification mailbox",
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    className: r().bindDesc,
                                    children:
                                      "To protect your assets, please enter the correct verification code",
                                  }),
                                ],
                              }),
                            (0, s.jsxs)("div", {
                              className: r().from,
                              children: [
                                (0, s.jsxs)("ul", {
                                  className: r().userUL,
                                  children: [
                                    (0, s.jsxs)("div", {
                                      children: [
                                        (0, s.jsx)("p", {
                                          className:
                                            "text-[14px] text-[#595A5F] mb-[17px] font-normal",
                                          children: "Email address",
                                        }),
                                        (0, s.jsxs)("div", {
                                          className:
                                            "relative flex items-center px-3 py-2 space-x-1.5 border border-[#DADADA] rounded-lg focus-within:border-[#1860F1]",
                                          children: [
                                            "verifyemail" !== a &&
                                              (0, s.jsx)("input", {
                                                type: "text",
                                                placeholder:
                                                  "Input your email address",
                                                value: A,
                                                className:
                                                  "placeholder:text-[#9799A1] text-sm font-normal flex-1 w-full outline-none bg-transparent",
                                                onChange: (e) => {
                                                  en(e.target.value);
                                                },
                                              }),
                                            "verifyemail" === a &&
                                              (0, s.jsx)("input", {
                                                type: "text",
                                                value: l,
                                                disabled: !0,
                                              }),
                                          ],
                                        }),
                                        !D &&
                                          A &&
                                          (0, s.jsx)("div", {
                                            className: r().emailTips,
                                            children: "Invalid email",
                                          }),
                                      ],
                                    }),
                                    (0, s.jsxs)("div", {
                                      className: r().emailCode,
                                      children: [
                                        (0, s.jsx)("p", {
                                          className:
                                            "text-[14px] text-[#595A5F] mb-[17px] font-normal",
                                          children: "Code",
                                        }),
                                        (0, s.jsxs)("div", {
                                          className:
                                            "relative flex items-center px-3 py-2 space-x-1.5 border border-[#DADADA] rounded-lg focus-within:border-[#1860F1]",
                                          children: [
                                            (0, s.jsx)("input", {
                                              type: "text",
                                              value: C,
                                              onChange: (e) => {
                                                ed(e.target.value);
                                              },
                                              className:
                                                "placeholder:text-[#9799A1] text-sm font-normal flex-1 w-full outline-none bg-transparent",
                                              placeholder: "Input code",
                                              maxLength: 20,
                                            }),
                                            L
                                              ? (0, s.jsxs)("div", {
                                                  className: h()(
                                                    r().sendCode,
                                                    r().sended
                                                  ),
                                                  children: [
                                                    "Resend (",
                                                    S,
                                                    "S)",
                                                  ],
                                                })
                                              : (0, s.jsx)("div", {
                                                  className: r().sendCode,
                                                  onClick: () => {
                                                    let e = (0, u.c7)(
                                                      "address"
                                                    );
                                                    if ("email" === a) {
                                                      if (!A)
                                                        return p.oR.error(
                                                          "Invalid email!"
                                                        );
                                                      G({
                                                        wallet: e,
                                                        email: A,
                                                      });
                                                    } else H({ wallet: e });
                                                    eo(60);
                                                  },
                                                  children: "Send code",
                                                }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    !T &&
                                      C &&
                                      (0, s.jsx)("div", {
                                        className: r().emailTips,
                                        children: "Invalid code",
                                      }),
                                  ],
                                }),
                                (0, s.jsx)("button", {
                                  className:
                                    "mt-12 rounded-xl w-full flex items-center justify-center bg-[#23252A] py-[18px] text-[#fff] text-[16px] font-normal cursor-pointer hover:bg-[#42454D] hover:border-[#42454D] disabled:bg-[#CBCDD4] disabled:text-[#9799A1]",
                                  style: {
                                    width: (0, u.Fr)() ? "280px" : "356px",
                                    height: (0, u.Fr)() ? "40px" : "48px",
                                  },
                                  disabled: !D || !C,
                                  onClick: () => {
                                    N(!0);
                                    let e = (0, u.c7)("address");
                                    "email" === a
                                      ? J({
                                          wallet: e,
                                          email: A,
                                          email_code: C,
                                        })
                                      : ee({ wallet: e, withdraw_code: C });
                                  },
                                  children: "Verify",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
          ],
        });
      });
    },
    5577: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => p });
      var s = a(4848),
        i = a(6540),
        l = a(3368),
        r = a.n(l),
        c = a(1468),
        n = a(1105),
        d = a(400),
        o = a(8591),
        m = a(1500),
        u = a(3079);
      let x = () => {
        let { toggleCollapsed: e } = (0, m.c)();
        return (0, s.jsxs)("div", {
          className:
            "flex items-center justify-between md:justify-end gap-5 pb-[37px] pt-[27px]",
          children: [
            (0, s.jsx)("div", {
              className: "relative h-[24px] w-[24px] md:hidden",
              children: (0, s.jsxs)("div", {
                className:
                  "absolute left-[50%] top-[57%] block h-[24px] w-[24px] -translate-x-1/2 -translate-y-1/2 transform cursor-pointer md:hidden",
                onClick: e,
                children: [
                  (0, s.jsx)("span", {
                    className:
                      "rounded-0 absolute left-0 top-0 block h-0.5 w-full bg-black",
                  }),
                  (0, s.jsx)("span", {
                    className:
                      "rounded-0 absolute left-0 top-[10px] block h-0.5 w-full bg-black",
                  }),
                  (0, s.jsx)("span", {
                    className:
                      "rounded-0 absolute left-0 top-[10px] block h-0.5 w-full bg-black",
                  }),
                  (0, s.jsx)("span", {
                    className:
                      "rounded-0 absolute left-0 top-[20px] block h-0.5 w-full bg-black",
                  }),
                ],
              }),
            }),
            (0, s.jsx)(u.A, {}),
          ],
        });
      };
      var h = a(9070);
      function p(e) {
        let {
            children: t,
            pageTitle: a = "ByteNova",
            pageDescription:
              l = "The Instrument for Decentralized Trading in the Solana Ecosystem",
          } = e,
          u = (0, c.wA)();
        (0, i.useEffect)(() => {
          u((0, d.qL)());
        }, []);
        let { isConnected: p, walletConnectLoading: f } = (0, c.d4)(
          (e) => e.wallet
        );
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(r(), {
              children: [
                (0, s.jsx)("title", { children: a }),
                (0, s.jsx)("meta", { name: "description", content: l }),
                (0, s.jsx)("meta", { property: "og:type", content: "website" }),
                (0, s.jsx)("meta", { property: "og:title", content: a }),
                (0, s.jsx)("meta", {
                  property: "og:url",
                  content: "https://bytenova.ai",
                }),
                (0, s.jsx)("meta", {
                  property: "og:image",
                  content: "/images/logo-square.png",
                }),
                (0, s.jsx)("meta", { property: "og:description", content: l }),
                (0, s.jsx)("meta", {
                  name: "twitter:card",
                  content: "summary_large_image",
                }),
                (0, s.jsx)("meta", { name: "twitter:title", content: a }),
                (0, s.jsx)("meta", {
                  name: "twitter:image",
                  content: "/images/logo-square.png",
                }),
                (0, s.jsx)("meta", {
                  name: "viewport",
                  content:
                    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
                }),
              ],
            }),
            (0, s.jsx)(m.G, {
              children: (0, s.jsxs)("main", {
                className: "relative min-h-screen bg-[#F1F1F1]",
                children: [
                  (0, s.jsx)(h.A, {}),
                  (0, s.jsxs)("div", {
                    className: "px-6 md:ms-[256px]",
                    children: [
                      (0, s.jsx)(x, {}),
                      f
                        ? null
                        : (0, s.jsx)(s.Fragment, {
                            children: p
                              ? t
                              : (0, s.jsx)(o.A, {
                                  title: "Connect your wallet",
                                  message:
                                    "Connect your wallet to view this page",
                                  height: "calc(100vh - 10vh - 104px)",
                                }),
                          }),
                    ],
                  }),
                ],
              }),
            }),
            (0, s.jsx)(n.N9, {
              position: "top-center",
              autoClose: 4e3,
              hideProgressBar: !0,
            }),
          ],
        });
      }
      a(4338);
    },
    5440: (e) => {
      e.exports = {
        flex: "Oauth_flex__wU4PC",
        jus: "Oauth_jus__iiMDN",
        ane: "Oauth_ane__Zz5Jt",
        wrap: "Oauth_wrap__l5qAj",
        jud: "Oauth_jud__fvAvj",
        "react-confirm-alert-mask": "Oauth_react-confirm-alert-mask__ky1M6",
        "react-confirm-alert-body": "Oauth_react-confirm-alert-body__m_e2a",
        "react-confirm-alert-cont": "Oauth_react-confirm-alert-cont__FHv3u",
        "react-confirm-header": "Oauth_react-confirm-header__CDKF_",
        emailTop: "Oauth_emailTop__kdCXo",
        "react-confirm-title": "Oauth_react-confirm-title__yfgFr",
        bindDesc: "Oauth_bindDesc__7LAce",
        "react-confirm-alert-close": "Oauth_react-confirm-alert-close__7LEpp",
        "react-body-content": "Oauth_react-body-content__ZcoAa",
        userUL: "Oauth_userUL__o5DeN",
        from: "Oauth_from__WdsV1",
        topp1: "Oauth_topp1___dCGG",
        emailTips: "Oauth_emailTips__bTvkS",
        "txt-input": "Oauth_txt-input__WRfSl",
        txtDisabled: "Oauth_txtDisabled__oYdmi",
        codeInput: "Oauth_codeInput__FVjLI",
        emailCode: "Oauth_emailCode__Qn0C5",
        sendCode: "Oauth_sendCode__6xrcQ",
        sended: "Oauth_sended__dHZAp",
        btnClass: "Oauth_btnClass__2OQtF",
      };
    },
  },
]);
