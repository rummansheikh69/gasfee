(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [316],
  {
    3548: (e, t, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/rewards",
        function () {
          return s(3370);
        },
      ]);
    },
    3370: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => ec });
      var a = s(4848),
        i = s(6540),
        n = s(5577),
        l = s(1468),
        d = s(9965),
        r = s.n(d),
        o = s(3768),
        c = s(9087),
        x = s(7391),
        p = s(2914),
        m = s(5135),
        u = s(6113);
      function h(e) {
        let { setSelected: t } = e,
          { address: s } = (0, l.d4)((e) => e.wallet),
          n = (0, l.d4)((e) => e.currentNetwork),
          {
            avatar: d,
            is_bind_twitter: h,
            is_bind_discord: f,
            twitter_name: g,
            discord_name: v,
            current_rank: b,
            is_banned: w,
            email: y,
            is_bind_email: j,
          } = (0, l.d4)((e) => e.userInfo),
          {
            bind_credit_twitter: N,
            follow_credit_twitter: k,
            bind_credit_discord: F,
            follow_credit_discord: A,
            checkin_credit: E,
            tweet_credit: C,
          } = (0, l.d4)((e) => e.oauth),
          { total_credit: T } = (0, l.d4)((e) => e.invite),
          { fetchLoginRefreshData: _ } = (0, x.A)(),
          [D, S] = (0, i.useState)(0),
          [B, I] = (0, i.useState)({ icon: "", name: "", value: "" }),
          P = (0, i.useRef)(null);
        (0, i.useEffect)(() => {
          S(
            Number(N) +
              Number(k) +
              Number(F) +
              Number(A) +
              Number(E) +
              Number(C) +
              Number(T)
          );
        }, [N, k, F, A, E, T, C]);
        let O = () => {
            let e = (0, c.c7)("address");
            e && _(e);
          },
          M = async (e) => {
            I(e), O();
          };
        return (
          (0, i.useEffect)(() => {
            n && n.name && I(n);
          }, [n]),
          (0, a.jsxs)("div", {
            className:
              "relative flex w-full items-center justify-between rounded-xl bg-white px-3 py-6 shadow-sm md:py-11 md:pe-[65px] md:ps-[50px]",
            style: {
              background: "linear-gradient(212deg, #FEC301 0%, #FE9902 112.3%)",
            },
            children: [
              (0, a.jsx)("div", {
                className:
                  "absolute left-0 top-0 z-[0] h-full w-full bg-contain bg-center bg-no-repeat",
                style: {
                  backgroundImage: "url('/images/dapp/profile-card-bg.png')",
                },
              }),
              (0, a.jsxs)("div", {
                className: "relative z-[1] flex items-center gap-4 md:gap-9",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "flex h-[81px] w-[81px] items-center justify-center overflow-hidden rounded-full border-[4px] border-black md:h-[151px] md:w-[151px]",
                    children: (0, a.jsx)("img", {
                      src: d,
                      alt: "avatar",
                      className:
                        "h-[77px] w-[77px] rounded-full object-cover md:h-[147px] md:w-[147px]",
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, a.jsx)(m.A, {
                        options: u.gH,
                        value: B,
                        onChange: M,
                        iconSize: 16,
                        classes:
                          "bg-[#1E1C1C] rounded-full w-[85px] md:w-[100px]",
                        contentClass: "h-[30px] w-full pl-2 pr-[12px] py-[5px]",
                        disabled: !0,
                      }),
                      (0, a.jsxs)("div", {
                        className: "mt-3 flex items-center gap-2",
                        children: [
                          (0, a.jsx)("span", {
                            className:
                              "text-md space-font font-bold md:text-2xl",
                            children: (0, c.Hq)(s),
                          }),
                          (0, a.jsx)(p.A, { text: s }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "mt-4 flex items-center gap-1 md:gap-2",
                        children: [
                          f
                            ? (0, a.jsxs)("div", {
                                className:
                                  "flex items-center gap-1 rounded-md border border-[#D0D0D0] bg-[#FFFFFFA8] px-2 py-[5px] text-xs text-[#595A5F] transition hover:border-[#191919] md:gap-1.5",
                                children: [
                                  (0, a.jsx)(r(), {
                                    src: "./svg/dapp/discord.svg",
                                    alt: "",
                                    width: 14,
                                    height: 14,
                                    className:
                                      "h-[8px] w-[8px] md:h-[14px] md:w-[14px]",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "block max-w-[35px] overflow-hidden text-ellipsis md:max-w-full",
                                    children: v,
                                  }),
                                ],
                              })
                            : (0, a.jsx)(o.A, {
                                ref: P,
                                oType: "discord",
                                children: (0, a.jsxs)("div", {
                                  className:
                                    "flex cursor-pointer items-center gap-1 rounded-md border border-[#D0D0D0] bg-[#FFFFFF] px-2 py-[5px] text-xs text-[#595A5F] transition hover:border-[#191919] md:gap-1.5",
                                  onClick: () => {
                                    P.current.loginWithDiscord();
                                  },
                                  children: [
                                    (0, a.jsx)(r(), {
                                      src: "./svg/dapp/discord.svg",
                                      alt: "",
                                      width: 14,
                                      height: 14,
                                      className:
                                        "h-[8px] w-[8px] md:h-[14px] md:w-[14px]",
                                    }),
                                    "Add",
                                  ],
                                }),
                              }),
                          h
                            ? (0, a.jsxs)("div", {
                                className:
                                  "flex items-center gap-1 rounded-md border border-[#D0D0D0] bg-[#FFFFFFA8] px-2 py-[5px] text-xs text-[#595A5F] transition hover:border-[#191919] md:gap-1.5",
                                children: [
                                  (0, a.jsx)(r(), {
                                    src: "./svg/dapp/x.svg",
                                    alt: "",
                                    width: 14,
                                    height: 14,
                                    className:
                                      "h-[8px] w-[8px] md:h-[14px] md:w-[14px]",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "block max-w-[35px] overflow-hidden text-ellipsis md:max-w-full",
                                    children: g,
                                  }),
                                ],
                              })
                            : (0, a.jsx)(o.A, {
                                ref: P,
                                oType: "twitter",
                                children: (0, a.jsxs)("div", {
                                  className:
                                    "flex cursor-pointer items-center gap-1 rounded-md border border-[#D0D0D0] bg-[#FFFFFF] px-2 py-[5px] text-xs text-[#595A5F] transition hover:border-[#191919] md:gap-1.5",
                                  onClick: () => {
                                    P.current.loginWithTwitter();
                                  },
                                  children: [
                                    (0, a.jsx)(r(), {
                                      src: "./svg/dapp/x.svg",
                                      alt: "",
                                      width: 14,
                                      height: 14,
                                      className:
                                        "h-[8px] w-[8px] md:h-[14px] md:w-[14px]",
                                    }),
                                    "Add",
                                  ],
                                }),
                              }),
                          j
                            ? (0, a.jsxs)("div", {
                                className:
                                  "flex items-center gap-1 rounded-md border border-[#D0D0D0] bg-[#FFFFFFA8] px-2 py-[5px] text-xs text-[#595A5F] transition hover:border-[#191919] md:gap-1.5",
                                children: [
                                  (0, a.jsx)(r(), {
                                    src: "./svg/dapp/envelope.svg",
                                    alt: "",
                                    width: 14,
                                    height: 14,
                                    className:
                                      "h-[8px] w-[8px] md:h-[14px] md:w-[14px]",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "block max-w-[35px] overflow-hidden text-ellipsis md:max-w-full",
                                    children: y,
                                  }),
                                ],
                              })
                            : (0, a.jsx)(o.A, {
                                ref: P,
                                oType: "email",
                                children: (0, a.jsxs)("div", {
                                  className:
                                    "flex cursor-pointer items-center gap-1 rounded-md border border-[#D0D0D0] bg-[#FFFFFF] px-2 py-[5px] text-xs text-[#595A5F] transition hover:border-[#191919] md:gap-1.5",
                                  onClick: () => {
                                    P.current.loginWithEmail();
                                  },
                                  children: [
                                    (0, a.jsx)(r(), {
                                      src: "./svg/dapp/envelope.svg",
                                      alt: "",
                                      width: 14,
                                      height: 14,
                                      className:
                                        "h-[8px] w-[8px] md:h-[14px] md:w-[14px]",
                                    }),
                                    "Add",
                                  ],
                                }),
                              }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "relative z-[0] hidden items-center gap-3 md:flex",
                children: [
                  (0, a.jsx)(r(), {
                    src: "./svg/dapp/points.svg",
                    alt: "score",
                    width: 44,
                    height: 44,
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex items-center gap-x-2.5 space-font cursor-pointer text-[28px] font-bold text-[#23252A] leading-full",
                        onClick: () => t("Leaderboard"),
                        children: [
                          (0, c.ZI)(D, 0),
                          (0, a.jsx)("img", {
                            src: "./svg/chevron-gray.svg",
                            alt: "score",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "mt-1.5 space-font flex items-center gap-1 text-xs font-medium text-[#F8FBFF] leading-full md:gap-1.5",
                        children: [
                          (0, a.jsx)("img", {
                            src: (() => {
                              switch (b) {
                                case 1:
                                  return "./svg/dapp/champion-rank.svg";
                                case 2:
                                  return "./svg/dapp/first-runner-rank.svg";
                                case 3:
                                  return "./svg/dapp/second-runner-rank.svg";
                                default:
                                  return "./svg/dapp/leaderboard-rank-white.svg";
                              }
                            })(),
                            alt: "score",
                            width: 14,
                            height: 14,
                          }),
                          "#",
                          b && Number(b) > 65e3 ? "65000+" : b,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      var f = s(4655),
        g = s(4678),
        v = s(4295),
        b = s(400),
        w = s(1105),
        y = s(9399),
        j = s(7493);
      let N = (e) => {
        let { title: t, num: s } = e;
        return (0, a.jsxs)("div", {
          className:
            "flex items-center justify-between rounded-xl bg-[#E9E9E9] px-4 py-3 md:px-6 md:py-5 text-center",
          children: [
            (0, a.jsx)("div", {
              className: "text-sm md:text-base text-[#595A5F]",
              children: t,
            }),
            (0, a.jsx)("div", {
              className:
                "space-font text-lg md:text-2xl font-bold leading-full",
              children: s,
            }),
          ],
        });
      };
      function k() {
        let e = (0, l.wA)(),
          { fetchInviteData: t, inviteList: s } = (0, g.A)(),
          [n, d] = (0, i.useState)(!1),
          [r, o] = (0, i.useState)(""),
          [x, p] = (0, i.useState)(""),
          {
            total_credit: m,
            total_invite_count: u,
            success_invite_count: h,
            self_code: f,
            parent_code: v,
          } = (0, l.d4)((e) => e.invite),
          {
            data: k,
            loading: F,
            fetchData: A,
          } = (0, j.A)({ url: "/api/invite_verify", method: "POST" });
        (0, i.useEffect)(() => {
          d(!!v),
            p(v),
            o(
              f
                ? ""
                    .concat(window.location.origin, "/rewards?invite_code=")
                    .concat(f)
                : ""
            );
        }, [v, f]),
          (0, i.useEffect)(() => {
            if (!F) {
              if (k && 0 === k.code) {
                var e;
                if (
                  null == k
                    ? void 0
                    : null === (e = k.data) || void 0 === e
                    ? void 0
                    : e.is_invite_success
                ) {
                  w.oR.success("Verify Success!");
                  let e = (0, c.c7)("address");
                  if (!e) return;
                  t(e);
                }
              } else w.oR.error(null == k ? void 0 : k.message);
            }
          }, [F]),
          (0, i.useEffect)(() => {
            s && e((0, b.EY)(s));
          }, [s]);
        let E = () => {
          w.oR.success("Copied!");
        };
        return (0, a.jsxs)("div", {
          className:
            "space-y-5 md:space-y-6 rounded-xl bg-white p-4 md:p-6 shadow-sm",
          children: [
            (0, a.jsxs)("div", {
              className: "grid grid-cols-1 gap-3 md:gap-[26px] md:grid-cols-3",
              children: [
                (0, a.jsx)(N, { title: "Total integration", num: m }),
                (0, a.jsx)(N, { title: "Total invited", num: u }),
                (0, a.jsx)(N, { title: "Activated", num: h }),
              ],
            }),
            (0, a.jsxs)("div", {
              children: [
                (0, a.jsxs)("label", {
                  className:
                    "mb-1.5 md:mb-4 flex items-center gap-x-1.5 md:gap-x-3 text-base font-normal",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "text-sm md:text-base font-normal text-[#9799A1]",
                      children: "Get referred",
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "space-font flex items-center gap-x-1 text-xs font-bold text-black",
                      children: [
                        (0, a.jsx)("img", {
                          src: "./svg/dapp/points.svg",
                          alt: "arrow",
                          className: "h-[13px] w-[13px]",
                        }),
                        "+100",
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "mb-5 md:mb-8 flex items-center justify-between rounded-xl border px-4 h-11 md:px-5 md:h-16 leading-full ".concat(
                      n
                        ? "bg-[#DBDBDB] border-[#D9D9D9]"
                        : "border-[#35322D] focus-within:border-[#1860F1] focus-within:bg-[#EBEBEB]"
                    ),
                  children: [
                    (0, a.jsx)("input", {
                      type: "text",
                      placeholder: "Paste referral code here",
                      value: x,
                      className:
                        "flex-1 text-sm md:text-base outline-none leading-full placeholder:text-[#9799A1] ".concat(
                          n ? "bg-[#DBDBDB]" : "focus:bg-[#EBEBEB]"
                        ),
                      onChange: (e) => p(e.target.value),
                      disabled: n,
                    }),
                    !n &&
                      (0, a.jsx)("button", {
                        className:
                          "text-normal rounded-lg bg-gradient-gold   text-sm w-[70px] md:text-base md:w-[86px] h-6 md:h-9 font-normal text-[#23252A] hover:bg-gradient-gold-hover disabled:bg-none disabled:bg-[#E1E1E1] disabled:text-[#9799A1] leading-full",
                        onClick: () => {
                          A({ wallet: (0, c.c7)("address"), invite_code: x });
                        },
                        children: "Claim",
                      }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              children: [
                (0, a.jsxs)("label", {
                  className:
                    "mb-2.5 md:mb-[34px] flex items-center gap-x-3 text-base font-normal",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "text-sm md:text-base font-normal text-[#9799A1]",
                      children: "Refer others",
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "space-font flex items-center gap-x-1 text-xs font-bold text-black",
                      children: [
                        (0, a.jsx)("img", {
                          src: "./svg/dapp/points.svg",
                          alt: "arrow",
                          className: "h-[13px] w-[13px]",
                        }),
                        "+100 / each referral",
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "grid grid-cols-1 gap-4 md:grid-cols-2",
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "mb-1.5 md:mb-4 text-sm md:text-base text-[#8B8B8C]",
                          children: "Referral Code",
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "relative flex items-center justify-between rounded-xl border border-[#35322D] px-4 h-11 md:px-5 md:h-16 leading-full",
                          children: [
                            (0, a.jsx)("input", {
                              type: "text",
                              readOnly: !0,
                              value: f || "-",
                              className:
                                "flex-1 text-sm md:text-base outline-none",
                            }),
                            (0, a.jsx)(y.CopyToClipboard, {
                              text: f,
                              onCopy: E,
                              children: (0, a.jsx)("button", {
                                disabled: !f,
                                className:
                                  "text-normal rounded-lg bg-gradient-gold   text-sm w-[70px] md:text-base md:w-[86px] h-6 md:h-9 font-normal text-[#23252A] hover:bg-gradient-gold-hover disabled:bg-none disabled:bg-[#E1E1E1] disabled:text-[#9799A1] leading-full",
                                children: "Copy",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "mb-1.5 md:mb-4 text-sm md:text-base text-[#8B8B8C]",
                          children: "Recommendation Link",
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "relative flex items-center justify-between rounded-xl border border-[#35322D] px-4 h-11 md:px-5 md:h-16 leading-full",
                          children: [
                            (0, a.jsx)("input", {
                              type: "text",
                              readOnly: !0,
                              value: r || "-",
                              className:
                                "flex-1 text-sm md:text-base outline-none max-w-[70%] md:max-w-[90%] overflow-hidden text-ellipsis",
                            }),
                            (0, a.jsx)(y.CopyToClipboard, {
                              text: r,
                              onCopy: E,
                              children: (0, a.jsx)("button", {
                                disabled: !r,
                                className:
                                  "text-normal rounded-lg bg-gradient-gold   text-sm w-[70px] md:text-base md:w-[86px] h-6 md:h-9 font-normal text-[#23252A] hover:bg-gradient-gold-hover disabled:bg-none disabled:bg-[#E1E1E1] disabled:text-[#9799A1] leading-full",
                                children: "Copy",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var F = s(4353),
        A = s.n(F),
        E = s(8591);
      let C = ["Invited", "Activated", "Nonactivated"],
        T = {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
        },
        _ = {
          hidden: { opacity: 0, y: -20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
          },
        };
      function D() {
        let e = (0, l.d4)((e) => e.wallet.address),
          [t, s] = (0, i.useState)("Invited"),
          [n, d] = (0, i.useState)([]),
          [o, x] = (0, i.useState)({
            Invited: [],
            Activated: [],
            Nonactivated: [],
          }),
          {
            data: p,
            error: m,
            loading: u,
            fetchData: h,
          } = (0, j.A)({ url: "/api/invite_history", method: "POST" });
        return (
          (0, i.useEffect)(() => {
            if (!u && p && 0 === p.code) {
              var e;
              let t =
                  (null == p
                    ? void 0
                    : null === (e = p.data) || void 0 === e
                    ? void 0
                    : e.invite_historys) || [],
                s = t.filter((e) => (null == e ? void 0 : e.is_actived)),
                a = t.filter((e) => !(null == e ? void 0 : e.is_actived));
              x({ Invited: t, Activated: s, Nonactivated: a });
            }
          }, [u]),
          (0, i.useEffect)(() => {
            o[t] && d(o[t]);
          }, [t, o]),
          (0, i.useEffect)(() => {
            h({ wallet: e });
          }, []),
          (0, a.jsxs)("div", {
            className: "rounded-xl pb-4",
            children: [
              (0, a.jsx)("h2", {
                className: "mb-4 text-xl font-bold",
                children: "Invited History",
              }),
              (0, a.jsx)("div", {
                className: "relative mb-5",
                children: (0, a.jsx)("div", {
                  className: "flex space-x-6",
                  children: C.map((e) =>
                    (0, a.jsxs)(
                      "button",
                      {
                        onClick: () => s(e),
                        className: "relative pb-2 text-sm font-medium",
                        children: [
                          (0, a.jsx)("span", {
                            className: "".concat(
                              t === e
                                ? "text-black"
                                : "text-[#8B8B8C] hover:text-black"
                            ),
                            children: e,
                          }),
                          t === e &&
                            (0, a.jsx)(f.P.div, {
                              layoutId: "inviteTab",
                              className:
                                "absolute bottom-0 left-[2.5%] h-[2px] w-[95%] rounded bg-orange-500",
                            }),
                        ],
                      },
                      e
                    )
                  ),
                }),
              }),
              (0, a.jsx)("div", {
                className: "space-y-4",
                children:
                  0 === n.length
                    ? (0, a.jsx)(E.A, {
                        title: "No ".concat(t, " records found."),
                        message: "",
                        height: "200px",
                      })
                    : (0, a.jsx)(f.P.div, {
                        className: "space-y-4",
                        variants: T,
                        initial: "hidden",
                        animate: "visible",
                        children: n.map((e, t) =>
                          (0, a.jsxs)(
                            f.P.div,
                            {
                              variants: _,
                              className:
                                "flex items-center justify-between rounded-lg bg-white px-5 py-4 shadow-sm hover:bg-[#F5F5F5]",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "flex items-center gap-4",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "h-[52px] w-[52px] overflow-hidden rounded-full",
                                      children: (0, a.jsx)("img", {
                                        src: e.avatar,
                                        alt: "avatar",
                                        width: 52,
                                        height: 52,
                                        className: "object-cover",
                                      }),
                                    }),
                                    (0, a.jsxs)("div", {
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "flex items-center gap-x-2 text-base font-normal",
                                          children: [
                                            (0, c.Hq)(
                                              null == e
                                                ? void 0
                                                : e.child_wallet
                                            ),
                                            (null == e
                                              ? void 0
                                              : e.is_actived) &&
                                              (0, a.jsx)(r(), {
                                                src: "./svg/dapp/verify.svg",
                                                alt: "verified",
                                                width: 16,
                                                height: 16,
                                              }),
                                          ],
                                        }),
                                        (0, a.jsx)("div", {
                                          className:
                                            "mt-2 text-sm text-[#8B8B8C]",
                                          children: A()(
                                            (null == e
                                              ? void 0
                                              : e.create_time) * 1e3
                                          ).format("HH:mm DD/MM/YYYY"),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: "text-right",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex items-center justify-end gap-1 text-base font-bold text-[#23252A]",
                                      children: [
                                        (0, a.jsx)(r(), {
                                          src: "./svg/dapp/points.svg",
                                          alt: "coin",
                                          width: 24,
                                          height: 24,
                                        }),
                                        "+",
                                        null == e ? void 0 : e.invite_credit,
                                      ],
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "mt-[7px] text-sm font-normal text-[#9799A1]",
                                      children: "Unbound ByteNova ID",
                                    }),
                                  ],
                                }),
                              ],
                            },
                            t
                          )
                        ),
                      }),
              }),
            ],
          })
        );
      }
      function S() {
        return (0, a.jsxs)("div", {
          className: "w-full space-y-6",
          children: [(0, a.jsx)(k, {}), (0, a.jsx)(D, {})],
        });
      }
      var B = s(2028),
        I = s(8398),
        P = s(8471),
        O = s(4266);
      let M = JSON.parse(
        '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"today","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"streak","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"curChkPoints","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalPoints","type":"uint256"}],"name":"CheckInSuccess","type":"event"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"addToBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"checkIn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserStreak","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isCheckInEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"isCheckinToday","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"lastCheckinDay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"removeFromBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"resetStreak","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"bStatus","type":"bool"}],"name":"setCheckInStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"streak","type":"uint16"},{"internalType":"uint16","name":"points","type":"uint16"}],"name":"setStreakPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"}],"name":"streakToPoints","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"}]'
      );
      var R = s(5962),
        J = s(4624),
        z = s.n(J),
        q = s(8287).Buffer;
      let H = q.from(
          "45c4dde54b24c7e6d854b87611ae4378efde1456432bb11f522d03c5f108f0df",
          "hex"
        ),
        U = q.from("f0b4bebc70d9d3a72a698f09233b9654", "hex");
      function X(e) {
        let t = z().createCipheriv("aes-256-cbc", H, U),
          s = q.concat([t.update(e.toString()), t.final()]);
        return "".concat(U.toString("hex"), ":").concat(s.toString("hex"));
      }
      var Z = s(9304);
      let Y = () => {
          let [e, t] = (0, i.useState)(0),
            { fetchData: s } = (0, j.A)({
              url: "/api/aptos_credit",
              method: "POST",
            });
          return {
            signPoints: e,
            fetchSignPoints: (0, i.useCallback)(async function (e) {
              let a =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                i = (0, Z.NK)();
              if (!(0, Z.Rd)()) return t(0);
              let n = (0, Z.zg)(i);
              if (n) {
                if ((0, Z.He)()) {
                  let i = new O.qc8({ network: O.lgv.MAINNET }),
                    n = new O.i5T(i),
                    l = {
                      function: "".concat(R.Zb, "::checkin_new::get_points"),
                      functionArguments: [e],
                    },
                    d = (await n.view({ payload: l }))[0];
                  t(d || 0), s({ network: "aptos", text: X(d), days: a });
                } else {
                  let i = n && n.getSigner(),
                    l = new B.NZ(R.C5, M, i.provider),
                    d = await l.getPoints(e);
                  t(d.toString()), s({ network: "bnb", text: X(d), days: a });
                }
              }
            }, []),
          };
        },
        L = [
          { day: "Day 1", points: 15 },
          { day: "Day 2", points: 15 },
          { day: "Day 3", points: 25 },
          { day: "Day 4", points: 25 },
          { day: "Day 5", points: 40 },
          { day: "Day 6", points: 40 },
          { day: "Day 7", points: 60 },
        ];
      function W() {
        let e = (0, l.wA)(),
          { fetchSignPoints: t, signPoints: s } = Y(),
          n = (0, c.c7)("current_chain_name"),
          d = R.C5,
          {
            address: o,
            isConnected: x,
            network: p,
          } = (0, l.d4)((e) => e.wallet),
          [m, u] = (0, i.useState)(!1),
          [h, f] = (0, i.useState)(null),
          [g, w] = (0, i.useState)(!0),
          [y, N] = (0, i.useState)(""),
          [k, F] = (0, i.useState)(!1),
          A = new O.qc8({ network: O.lgv.MAINNET }),
          E = new O.i5T(A),
          { fetchOauthRefreshData: C, oauthInfo: T } = (0, v.A)(),
          {
            data: _,
            error: D,
            loading: S,
            fetchData: J,
          } = (0, j.A)({ url: "/api/checkin_detail", method: "POST" });
        (0, i.useEffect)(() => {
          T && e((0, b.u$)(T));
        }, [T]),
          (0, i.useEffect)(() => {
            console.log("checkinData", _),
              !S && s && e((0, b.u$)({ ...T, checkin_credit: Number(s) }));
          }, [S, s]);
        let z = function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              t = Number(e || 0);
            return t <= 0 ? 0 : t < 3 ? 15 : t < 5 ? 25 : t < 7 ? 40 : 60;
          },
          q = async () => {
            let s = (0, Z.NK)();
            if (!(0, Z.Rd)()) {
              let e = (0, c.c7)("address");
              if (!e) return;
              return f("0"), t(e);
            }
            if ((0, Z.He)()) {
              let s = (0, c.c7)("address");
              if (!s) return;
              try {
                let e = {
                    function: "".concat(
                      R.Zb,
                      "::checkin_new::has_checked_in_today"
                    ),
                    functionArguments: [s],
                  },
                  a = (await E.view({ payload: e }))[0];
                u(a);
                let i = {
                    function: "".concat(R.Zb, "::checkin_new::get_streak_days"),
                    functionArguments: [s],
                  },
                  n = {
                    function: "".concat(
                      R.Zb,
                      "::checkin_new::get_last_checkin_day"
                    ),
                    functionArguments: [s],
                  },
                  l = (await E.view({ payload: i }))[0],
                  d = (await E.view({ payload: n }))[0],
                  r = parseInt(d),
                  o = Math.floor(Date.now() / 864e5) - r,
                  c = 0;
                if (
                  (0 === o || 1 === o ? (f(l), (c = l)) : (f(0), (c = 0)), k)
                ) {
                  let e = z(c),
                    t = {
                      wallet: s,
                      network: "aptos",
                      hash: y,
                      liners: c,
                      score: e,
                      today: r,
                    };
                  J(t);
                }
                t(s), C(s);
              } catch (t) {
                e((0, b.B)({ signInPoints: 0 })), console.log(t);
              }
            } else {
              let a = (0, Z.zg)(s),
                i = a && a.getSigner();
              if (!a) return;
              let n = (0, c.c7)("address");
              if (!n || !d) return;
              let l = new B.NZ(d, M, i.provider);
              try {
                let e = await l.isCheckinToday(n);
                u(e);
                let s = await l.lastCheckinDay(n),
                  a = String(s),
                  i = (0, c.sR)(),
                  d = 0;
                if (Number(a) + 1 >= i) {
                  let e = await l.getUserStreak(n);
                  f(e.toString()), (d = e.toString());
                } else f("0"), (d = 0);
                if ((await t(n, d), C(n), k)) {
                  let e = z(d),
                    s = {
                      wallet: n,
                      network: "bnb",
                      hash: y,
                      liners: d,
                      score: e,
                      today: Number(a),
                    };
                  await t(n, d), J(s);
                }
              } catch (t) {
                e((0, b.B)({ signInPoints: 0 })), console.log(t);
              }
            }
          },
          H = async () => {
            if (!0 === m) return;
            let t = (0, Z.NK)(),
              s = (0, Z.YS)(t),
              a = (0, c.c7)("address"),
              i = await s.request({ method: "eth_accounts" }),
              n = (0, Z.zg)(t),
              l = n && n.getSigner();
            if (!n) return;
            if (!l || !a || "" == a || 0 == i.length) {
              (0, Z.I5)(), e((0, b.Gd)("", "", !1, ""));
              return;
            }
            let r = new B.NZ(d, M, l);
            try {
              w(!1);
              let e = await I.XS("1", "gwei"),
                t = await P.c$(3e5),
                s = await r.checkIn({ gasPrice: e, gasLimit: t });
              await new Promise((e) => setTimeout(e, 4e3)),
                await s.wait(),
                u(!0),
                F(!0),
                w(!0),
                N(s.hash);
            } catch (e) {
              F(!1), console.log(e), w(!0);
            }
          };
        return (
          (0, i.useEffect)(() => {
            x && q();
          }, [m, x, p]),
          (0, a.jsxs)("div", {
            className: "w-full rounded-xl bg-white p-4 shadow-sm md:p-6",
            children: [
              (0, a.jsx)("h2", {
                className: "mb-2.5 text-base font-bold text-[#23252A]",
                children: "Weekly Check-In",
              }),
              (0, a.jsx)("p", {
                className: "mb-6 text-xs text-[#9799A1]",
                children:
                  "Unlock the more points by creating on-chain interactions for each 7 consecutive days.",
              }),
              (0, a.jsx)("div", {
                className: "mb-2 grid grid-cols-3 gap-2 md:mb-4 md:gap-4",
                children: L.slice(0, 6).map((e, t) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      className:
                        "rounded-lg border p-2 text-center text-xs font-medium md:p-6 ".concat(
                          h > 0 && h >= t + 1
                            ? "border-[#EFEFEF] bg-[#EFEFEF]"
                            : "border-[#2C2C2C]"
                        ),
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "space-font mb-[9px] text-base font-bold ".concat(
                              h > 0 && h >= t + 1
                                ? "text-[#9799A1]"
                                : "text-[#23252A]"
                            ),
                          children: ["+ ", e.points],
                        }),
                        h > 0 && h >= t + 1
                          ? (0, a.jsx)("div", {
                              className: "mb-3 flex justify-center",
                              children: (0, a.jsx)(r(), {
                                src: "./svg/dapp/checked.svg",
                                alt: "coin",
                                width: 26,
                                height: 26,
                              }),
                            })
                          : (0, a.jsx)("div", {
                              className: "mb-3 flex justify-center",
                              children: (0, a.jsx)(r(), {
                                src: "./svg/dapp/points.svg",
                                alt: "coin",
                                width: 26,
                                height: 26,
                              }),
                            }),
                        (0, a.jsx)("div", {
                          className: "text-[13px] ".concat(
                            h > 0 && h >= t + 1
                              ? "text-[#9799A1]"
                              : "text-[#595A5F]"
                          ),
                          children: e.day,
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
              (0, a.jsxs)("div", {
                className:
                  "mb-4 rounded-lg border p-2 text-center text-sm font-medium md:mb-8 md:pb-[14px] md:pt-[21px] ".concat(
                    h > 0 && h >= 7
                      ? "border-[#EFEFEF] bg-[#EFEFEF]"
                      : "border-[#2C2C2C]"
                  ),
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex items-center justify-center gap-1",
                    children: [
                      h > 0 && h >= 7
                        ? (0, a.jsx)(r(), {
                            src: "./svg/dapp/checked.svg",
                            alt: "coin",
                            width: 26,
                            height: 26,
                          })
                        : (0, a.jsx)(r(), {
                            src: "./svg/dapp/points.svg",
                            alt: "coin",
                            width: 26,
                            height: 26,
                          }),
                      (0, a.jsx)("span", {
                        className: "space-font font-bold text-[#23252A]",
                        children: "+ 60",
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "text-[13px] ".concat(
                      h > 0 && h >= 7 ? "text-[#9799A1]" : "text-[#595A5F]"
                    ),
                    children: "Seventh",
                  }),
                ],
              }),
              (0, a.jsx)("button", {
                className:
                  "mb-4 h-5 w-full rounded-lg bg-black text-xs font-bold text-white hover:bg-[#3E3E3E] disabled:bg-[#CBCDD4] disabled:text-[#9799A1] md:mb-[38px] md:h-8",
                disabled: "BNB" !== n || m,
                onClick: H,
                children: "Check-In",
              }),
            ],
          })
        );
      }
      function G(e) {
        let {
            isDisabled: t = !1,
            isCompleted: s,
            logo: n,
            points: d,
            title: x,
            desc: p,
            taskId: m,
            onClick: u,
            oauth: h = !1,
            oauthRef: f,
            outhType: g = "twitter",
            notEligible: b = !1,
            notEligibleText: w,
            buttonText: y,
            twitterTask: j = !1,
            reload: N,
            reloadLoading: k,
          } = e,
          [F, A] = (0, i.useState)(!1),
          [E, C] = (0, i.useState)(!1);
        (0, l.d4)((e) => e.wallet.address);
        let { fetchOauthRefreshData: T } = (0, v.A)(),
          _ = t ? "bg-[#E4E4E4] border-[#DBD8D8]" : "bg-white border-[#FFFFFF]",
          D = ""
            .concat(
              "rounded-xl p-4 md:p-5 transition-all border shadow-sm flex flex-col justify-between",
              " "
            )
            .concat(_, " ")
            .concat(t ? "" : "hover:border-[#1E1E20]"),
          S = t
            ? "mt-4 w-full px-1 h-5 md:h-8 rounded-md text-[10px] md:text-sm font-bold bg-[#CBCDD4] text-[#9799A1] cursor-not-allowed"
            : "mt-4 w-full px-1 h-5 md:h-8 rounded-md text-[10px] md:text-sm font-bold bg-black text-white hover:bg-[#3E3E3E]";
        (0, i.useEffect)(() => {
          k || C(!1);
        }, [k]);
        let B = j
          ? () => {
              let e = (0, c.c7)("viewed_twitter_task");
              if ((A(!0), e)) {
                if (JSON.parse(e).includes(m)) {
                  u();
                  return;
                }
                (0, c.cT)(
                  "viewed_twitter_task",
                  JSON.stringify([...JSON.parse(e), m])
                ),
                  u();
              } else (0, c.cT)("viewed_twitter_task", JSON.stringify([m])), u();
            }
          : u;
        return (0, a.jsxs)("div", {
          className: D,
          children: [
            (0, a.jsxs)("div", {
              className: "mb-5 flex items-center justify-between",
              children: [
                (0, a.jsx)(r(), {
                  src: n,
                  alt: "coin",
                  width: 32,
                  height: 32,
                  className: "h-6 w-6 md:h-8 md:w-8",
                }),
                (0, a.jsxs)("div", {
                  className:
                    "flex items-center gap-1.5 rounded-md px-2 py-1.5 md:px-3 md:py-2.5 ".concat(
                      t ? "bg-[#FFFFFF]" : "bg-[#CAFF06]"
                    ),
                  children: [
                    s
                      ? (0, a.jsx)(r(), {
                          src: "./svg/dapp/checked.svg",
                          alt: "coin",
                          width: 16,
                          height: 16,
                        })
                      : (0, a.jsx)(r(), {
                          src: "./svg/dapp/points.svg",
                          alt: "coin",
                          width: 16,
                          height: 16,
                        }),
                    (0, a.jsxs)("span", {
                      className: "space-font text-xs font-bold text-[#23252A]",
                      children: ["+", d],
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "mb-[18px] flex-1",
              children: [
                (0, a.jsx)("h3", {
                  className:
                    "mb-2 gap-2 text-sm md:text-base font-bold text-[#23252A]",
                  children: x,
                }),
                p &&
                  (0, a.jsx)("div", {
                    className:
                      "min-h-[60px] text-[10px] md:text-xs text-[#595A5F]",
                    children: p,
                  }),
              ],
            }),
            h
              ? (0, a.jsx)(o.A, {
                  ref: f,
                  oType: g,
                  children: (0, a.jsx)("button", {
                    disabled: t,
                    onClick: u,
                    className: S,
                    children: s ? "Completed" : y,
                  }),
                })
              : (0, a.jsx)("button", {
                  disabled: t,
                  onClick: B,
                  className: S,
                  children: b ? w : s ? "Completed" : y,
                }),
          ],
        });
      }
      function $() {
        let [e, t] = (0, i.useState)(1),
          [s, n] = (0, i.useState)(""),
          d = (0, l.wA)(),
          r = (0, l.d4)((e) => e.wallet.address),
          o = (0, i.useRef)(null),
          {
            is_bind_twitter: p,
            is_bind_discord: m,
            is_follow_discord: h,
          } = (0, l.d4)((e) => e.userInfo),
          { fetchOauthRefreshData: f, oauthInfo: g } = (0, v.A)(),
          { fetchLoginRefreshData: w, userInfo: y } = (0, x.A)(),
          { fetchData: N } = (0, j.A)({
            url: "/api/rank_list",
            method: "POST",
          }),
          {
            data: k,
            loading: F,
            fetchData: A,
          } = (0, j.A)({ url: "/api/redirect_follow", method: "POST" }),
          {
            data: E,
            error: C,
            loading: T,
            fetchData: _,
          } = (0, j.A)({ url: "/api/tweet_list", method: "GET" }),
          {
            data: D,
            error: S,
            loading: B,
            fetchData: I,
          } = (0, j.A)({ url: "/api/tweet_refresh", method: "POST" }),
          P = () => {
            f(r), w(r), n((0, c.Hq)(r)), N({ wallet: r });
          },
          O = (e, t, s, a) => {
            let i = (0, c.c7)("viewed_twitter_task");
            if (i) {
              if (JSON.parse(i).includes(t)) {
                I({ task_id: t, wallet: r });
                let i = (0, u.XC)(s, e, a);
                window.open(i);
                return;
              }
              (0, c.cT)(
                "viewed_twitter_task",
                JSON.stringify([...JSON.parse(i), t])
              ),
                I({ task_id: t, wallet: r });
              let n = (0, u.XC)(s, e, a);
              window.open(n);
            } else {
              (0, c.cT)("viewed_twitter_task", JSON.stringify([t])),
                I({ task_id: t, wallet: r });
              let i = (0, u.XC)(s, e, a);
              window.open(i);
            }
          };
        (0, i.useEffect)(() => {
          y && d((0, b.iA)(y));
        }, [y]),
          (0, i.useEffect)(() => {
            g && d((0, b.u$)(g));
          }, [g]),
          (0, i.useEffect)(() => {
            _();
          }, []),
          (0, i.useEffect)(() => {
            !F &&
              k &&
              0 === k.code &&
              (P(),
              1 === e
                ? window.open("https://x.com/BytenovaAI")
                : window.open("https://discord.gg/dnDNRrUGNm"));
          }, [F]);
        let M = [
          {
            title: "Follow Us On Twitter",
            description: "Follow @Gasfee On Twitter",
            icon: "/assets/img/a10.png",
            onClick: () => {
              o.current.loginWithTwitter();
            },
            isCompleted: p,
            reward: 300,
            oauth: !0,
            oauthRef: o,
            outhType: "twitter",
            classname: "longTitle",
            buttonText: "Follow Us",
          },
          {
            title: "Connect Discord",
            description: "Connect your Discord account to claim your rewards",
            icon: "/assets/img/a2.png",
            onClick: () => {
              o.current.loginWithDiscord();
            },
            isCompleted: m,
            reward: 100,
            oauth: !0,
            oauthRef: o,
            outhType: "discord",
            buttonText: "Connect",
          },
          {
            title: "Join Discord Server",
            description: "Join our Discord Server to claim your rewards",
            icon: "/assets/img/a2.png",
            onClick: () => {
              t(2), A({ follow_type: 2, wallet: r });
            },
            isCompleted: h,
            reward: 200,
            oauthRef: o,
            notEligible: !m,
            notEligibleText: "Connect Discord First",
            buttonText: "Join",
          },
        ];
        return (0, a.jsxs)("div", {
          className:
            "grid grid-cols-2 gap-2 md:gap-4 md:max-h-[633px] md:overflow-y-auto md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4",
          children: [
            M.map((e, t) =>
              (0, a.jsx)(
                G,
                {
                  isDisabled: e.isCompleted || e.notEligible,
                  isCompleted: e.isCompleted,
                  logo: e.title.includes("Discord")
                    ? "./svg/logo/discord-squared.svg"
                    : "./svg/logo/x-squared.svg",
                  points: e.reward,
                  title: e.title,
                  desc: e.description,
                  onClick: e.onClick,
                  oauth: e.oauth,
                  oauthRef: e.oauthRef,
                  outhType: e.outhType,
                  notEligible: e.notEligible,
                  notEligibleText: e.notEligibleText,
                  buttonText: e.buttonText,
                },
                t
              )
            ),
            null == E
              ? void 0
              : E.data.tweets
                  .filter((e) => !e.is_done)
                  .map((e, t) =>
                    (0, a.jsx)(
                      G,
                      {
                        isDisabled: e.is_done || !p,
                        isCompleted: e.is_done,
                        taskId: e.task_id,
                        logo: "./svg/logo/x-squared.svg",
                        points: 10,
                        title: "".concat(u.kB[e.task_type] || "", " on X"),
                        desc: (0, u.UG)(e.task_type, e.text),
                        onClick: () =>
                          O(e.tweetid, e.task_id, e.task_type, e.text),
                        oauth: !1,
                        notEligible: !p,
                        notEligibleText: "Follow Twitter First",
                        buttonText: u.aN[e.task_type] || "",
                        twitterTask: !0,
                        reload: _,
                        reloadLoading: T,
                      },
                      t
                    )
                  ),
          ],
        });
      }
      function K() {
        return (0, a.jsxs)("div", {
          className: "flex flex-col-reverse md:flex-row gap-6 items-start pb-4",
          children: [
            (0, a.jsx)("div", {
              className: "flex-1",
              children: (0, a.jsx)($, {}),
            }),
            (0, a.jsx)("div", {
              className: "w-full md:w-[350px]",
              children: (0, a.jsx)(W, {}),
            }),
          ],
        });
      }
      let Q = (e) => {
          switch (e) {
            case 2:
              return "/images/dapp/champion.png";
            case 1:
              return "/images/dapp/first-runner.png";
            case 3:
              return "/images/dapp/second-runner.png";
            default:
              return "";
          }
        },
        V = (e) => {
          switch (e) {
            case 2:
              return "./svg/dapp/champion-rank.svg";
            case 1:
              return "./svg/dapp/first-runner-rank.svg";
            case 3:
              return "./svg/dapp/second-runner-rank.svg";
            default:
              return "";
          }
        },
        ee = (e) => {
          switch (e) {
            case 1:
              return "33px";
            case 3:
              return "43px";
            default:
              return "";
          }
        },
        et = (e) => {
          switch (e) {
            case 2:
            default:
              return 0;
            case 1:
              return 0.2;
            case 3:
              return 0.4;
          }
        };
      function es(e) {
        let { leaderboard: t = [] } = e;
        return (0, a.jsx)("div", {
          className:
            "hidden w-full grid-cols-1 gap-[39px] md:grid md:grid-cols-3",
          children: t.map((e, t) =>
            (0, a.jsxs)(
              f.P.div,
              {
                className:
                  "relative z-0 w-full rounded-xl px-4 text-center text-black h-[260px] pt-3",
                style: { marginTop: ee(t + 1) },
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: {
                  duration: 0.4,
                  delay: et(t + 1),
                  ease: "easeOut",
                },
                children: [
                  (0, a.jsx)(r(), {
                    src: Q(t + 1),
                    alt: "bg-rank-".concat(t + 1),
                    fill: !0,
                    className: "z-0 w-full",
                  }),
                  (0, a.jsxs)("div", {
                    className: "relative z-10 flex flex-col items-center mt-8",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "mb-2 h-20 w-20 overflow-hidden rounded-full",
                        children: (0, a.jsx)("img", {
                          src: null == e ? void 0 : e.avatar,
                          alt: "avatar",
                          width: 80,
                          height: 80,
                          className: "object-cover",
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "space-font flex items-center justify-center gap-[11px] text-lg font-bold",
                        children: [
                          (0, a.jsx)(r(), {
                            src: V(t + 1),
                            alt: "rank badge",
                            width: 32,
                            height: 20,
                          }),
                          (0, a.jsx)("span", {
                            children: null == e ? void 0 : e.display_name,
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "space-font mt-4 flex items-center justify-center gap-2 text-base font-bold text-[#595A5F]",
                        children: [
                          (0, a.jsx)(r(), {
                            src: "./svg/dapp/points.svg",
                            alt: "coin",
                            width: 17,
                            height: 17,
                          }),
                          null == e ? void 0 : e.all_credit,
                        ],
                      }),
                    ],
                  }),
                ],
              },
              t + 1
            )
          ),
        });
      }
      let ea = (e) => {
          switch (e) {
            case 1:
              return "text-[#FFA509]";
            case 2:
              return "text-[#20ADD7]";
            case 3:
              return "text-[#FA5D31]";
            default:
              return "text-[#595A5F]";
          }
        },
        ei = {
          hidden: { opacity: 0, y: 20 },
          visible: (e) => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0.2 * e, duration: 0.4, ease: "easeOut" },
          }),
        };
      function en(e) {
        let { leaderboard: t = [] } = e;
        return (0, a.jsxs)("div", {
          className: "pb-4",
          children: [
            (0, a.jsxs)("div", {
              className:
                "flex justify-between text-sm text-[#8B8B8C] font-medium pl-[18px] pe-[12px] md:pl-[36px] md:pe-[24px] pb-3",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex gap-6",
                  children: [
                    (0, a.jsx)("span", {
                      className: "md:w-[130px]",
                      children: "Rank",
                    }),
                    (0, a.jsx)("span", { children: "User" }),
                  ],
                }),
                (0, a.jsx)("span", { children: "Lifetime Crystals Earned" }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "space-y-4",
              children: [
                0 === t.length &&
                  (0, a.jsx)(E.A, {
                    title: "No records found.",
                    message: "",
                    height: "200px",
                  }),
                t
                  .filter((e) => (null == e ? void 0 : e.display_name))
                  .map((e, t) =>
                    (0, a.jsxs)(
                      f.P.div,
                      {
                        className:
                          "bg-white rounded-lg pl-[18px] pe-[12px] md:pl-[36px] md:pe-[24px] py-3 flex items-center justify-between shadow-sm hover:bg-[#F5F5F5]",
                        variants: ei,
                        initial: "hidden",
                        animate: "visible",
                        custom: t,
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex items-center gap-6",
                            children: [
                              (0, a.jsxs)("span", {
                                className:
                                  "md:w-[130px] flex-1 text-base font-bold ".concat(
                                    ea(t + 1)
                                  ),
                                children: ["#", t + 1],
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex items-center gap-[9px]",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "w-[34px] h-[34px] rounded-full overflow-hidden flex items-center justify-center",
                                    children: (0, a.jsx)("img", {
                                      src:
                                        (null == e ? void 0 : e.avatar) ||
                                        "./images/dapp/invite-sample.png",
                                      alt: "avatar",
                                      width: 34,
                                      height: 34,
                                      className: "object-cover",
                                    }),
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "text-xs text-[#23252A] font-bold",
                                    children:
                                      null == e ? void 0 : e.display_name,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "space-font flex items-center gap-2 text-sm font-bold text-[#23252A]",
                            children: [
                              (0, a.jsx)(r(), {
                                src: "./svg/dapp/points.svg",
                                alt: "points",
                                width: 20,
                                height: 20,
                              }),
                              null == e ? void 0 : e.all_credit,
                            ],
                          }),
                        ],
                      },
                      t
                    )
                  ),
              ],
            }),
          ],
        });
      }
      function el() {
        let e = (0, l.d4)((e) => e.wallet.isConnected),
          t = (0, l.d4)((e) => e.wallet.address),
          [s, n] = (0, i.useState)([]),
          [d, r] = (0, i.useState)([]),
          {
            data: o,
            error: c,
            loading: x,
            fetchData: p,
          } = (0, j.A)({ url: "/api/rank_list", method: "POST" });
        return (
          (0, i.useEffect)(() => {
            if (!x && o && 0 === o.code) {
              var e, t, s;
              n(
                (null == o
                  ? void 0
                  : null === (e = o.data) || void 0 === e
                  ? void 0
                  : e.rank_list) || []
              );
              let a =
                (null == o
                  ? void 0
                  : null === (s = o.data) || void 0 === s
                  ? void 0
                  : null === (t = s.rank_list) || void 0 === t
                  ? void 0
                  : t.slice(0, 3)) || [];
              r([1, 0, 2].map((e) => a[e]));
            }
          }, [x]),
          (0, i.useEffect)(() => {
            e && p({ wallet: t });
          }, [e]),
          (0, a.jsxs)("div", {
            className: "space-y-6",
            children: [
              (0, a.jsx)(es, { leaderboard: d }),
              (0, a.jsx)(en, { leaderboard: s }),
            ],
          })
        );
      }
      let ed = ["Invite", "Quest", "Leaderboard"],
        er = {
          enter: (e) => ({
            x: e > 0 ? 100 : -100,
            opacity: 0,
            position: "absolute",
            height: "0",
          }),
          center: { x: 0, opacity: 1, position: "relative", height: "100%" },
          exit: (e) => ({
            x: e < 0 ? 100 : -100,
            opacity: 0,
            position: "absolute",
            height: "0",
          }),
        };
      function eo(e) {
        let { selected: t, setSelected: s } = e,
          n = (0, l.wA)(),
          { fetchInviteData: d, inviteList: r } = (0, g.A)(),
          { fetchLoginRefreshData: o, userInfo: p } = (0, x.A)(),
          { fetchOauthRefreshData: m, oauthInfo: u } = (0, v.A)(),
          h = (0, i.useRef)(0),
          w = ed.indexOf(t) - h.current,
          {
            address: y,
            isConnected: j,
            network: N,
          } = (0, l.d4)((e) => e.wallet),
          k = (e) => {
            (h.current = ed.indexOf(t)), s(e);
          },
          F = () => {
            let e = (0, c.c7)("address");
            e && (d(e), m(e), o(e));
          };
        return (
          (0, i.useEffect)(() => {
            F();
          }, [j, N]),
          (0, i.useEffect)(() => {
            r && n((0, b.EY)(r));
          }, [r]),
          (0, i.useEffect)(() => {
            p && n((0, b.iA)(p));
          }, [p]),
          (0, i.useEffect)(() => {
            u && n((0, b.u$)(u));
          }, [u]),
          (0, a.jsxs)("div", {
            className: "relative w-full rounded-t-lg pt-5 md:pt-10",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "relative flex flex-col md:flex-row items-center justify-between pb-4 md:pb-8",
                children: [
                  (0, a.jsx)("div", {
                    className: "relative flex space-x-4 md:space-x-16",
                    children: ed.map((e) =>
                      (0, a.jsxs)(
                        "button",
                        {
                          onClick: () => k(e),
                          className:
                            "text-mb relative pb-1 font-semibold transition-colors duration-200 md:pb-2 md:text-xl ".concat(
                              t === e
                                ? "text-black"
                                : "text-[#8B8B8C] hover:text-black"
                            ),
                          children: [
                            e,
                            t === e &&
                              (0, a.jsx)(f.P.div, {
                                layoutId: "underline",
                                className:
                                  "absolute bottom-0 left-[2.5%] h-1 w-[95%] rounded-full bg-[#FEA102]",
                              }),
                          ],
                        },
                        e
                      )
                    ),
                  }),
                  "Quest" === t &&
                    (0, a.jsx)("div", {
                      className: "text-xs text-[#9799A1]",
                      children:
                        "Points that related to X will be distribute after X’s API confirmed. Should take around 1-5mins.",
                    }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "relative flex h-full w-full items-stretch",
                children: (0, a.jsx)(
                  f.P.div,
                  {
                    custom: w,
                    variants: er,
                    initial: "enter",
                    animate: "center",
                    exit: "exit",
                    className: "w-full",
                    transition: { duration: 0.2, ease: "easeInOut" },
                    children: (() => {
                      switch (t) {
                        case "Invite":
                          return (0, a.jsx)(S, {});
                        case "Quest":
                          return (0, a.jsx)(K, {});
                        case "Leaderboard":
                          return (0, a.jsx)(el, {});
                        default:
                          return null;
                      }
                    })(),
                  },
                  t
                ),
              }),
            ],
          })
        );
      }
      function ec() {
        let [e, t] = (0, i.useState)("Invite");
        return (0, a.jsxs)(n.A, {
          pageTitle: "Rewards",
          children: [
            (0, a.jsx)(h, { setSelected: t }),
            (0, a.jsx)(eo, { selected: e, setSelected: t }),
          ],
        });
      }
      s(4338);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [654, 200, 75, 67, 277, 940, 21, 636, 593, 792], () => t(3548)),
      (_N_E = e.O());
  },
]);
