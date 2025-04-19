(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [332],
  {
    2022: (e, t, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(2689);
        },
      ]);
    },
    2689: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => W });
      var s = a(4848),
        i = a(3368),
        l = a.n(i),
        n = a(6540),
        r = a(4655),
        o = a(1106),
        c = a.n(o),
        d = a(1500),
        m = a(3079);
      let p = {
          hidden: { opacity: 0, y: -50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
            transform: "translate(0px, 0vw)",
          },
        },
        x = () => {
          let e = (0, n.useRef)(null);
          return (
            (0, n.useEffect)(() => {
              e.current && e.current.play();
            }, []),
            (0, s.jsx)(r.P.div, {
              initial: "hidden",
              animate: "visible",
              variants: p,
              className:
                "single-visual h-[126px] w-[141px] md:h-[calc(440px*0.876)] md:w-[440px]",
              children: (0, s.jsxs)("div", {
                className: "overlay overlay-visual playpauze",
                style: { clipPath: "url(#hexagonShape)" },
                children: [
                  (0, s.jsx)("svg", {
                    fill: "none",
                    height: "600",
                    viewBox: "0 0 600 600",
                    width: "600",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, s.jsx)("defs", {
                      children: (0, s.jsx)("clipPath", {
                        id: "hexagonShape",
                        clipPathUnits: "objectBoundingBox",
                        children: (0, s.jsx)("path", {
                          d: "M0.25,0 L0.75,0 L1,0.5 L0.75,1 L0.25,1 L0,0.5 Z",
                          fill: "#000",
                        }),
                      }),
                    }),
                  }),
                  (0, s.jsx)("video", {
                    ref: e,
                    className: "overlay",
                    src: "./video/hexagon-1-short-edit.mp4",
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                    style: { transform: "rotate(30deg) scale(1.17)" },
                  }),
                ],
              }),
            })
          );
        },
        h = (e) =>
          e
            .split(" ")
            .map((e, t) =>
              (0, s.jsx)(
                r.P.span,
                { variants: u, className: "mr-3 inline-block", children: e },
                t
              )
            ),
        u = {
          hidden: { opacity: 0, y: "100%" },
          visible: {
            opacity: 1,
            y: "0%",
            transition: { duration: 0.5, ease: "easeOut" },
          },
        },
        f = {
          hidden: { clipPath: "inset(0 100% 0 0)" },
          visible: {
            clipPath: "inset(0 0 0 0)",
            transition: { duration: 1, ease: "easeOut" },
          },
        };
      function v() {
        let [e, t] = (0, n.useState)(!1),
          { toggleCollapsed: a } = (0, d.c)();
        return (
          (0, n.useEffect)(() => {
            let e = () => {
              t(window.scrollY > 200);
            };
            return (
              e(),
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            );
          }, []),
          (0, s.jsxs)("header", {
            className:
              "relative z-20 w-screen bg-[#E7E6E4BB] px-2.5 pb-[90px] pt-[25px] md:min-h-screen md:px-[100px] md:pt-[76px]",
            children: [
              (0, s.jsxs)(r.P.div, {
                initial: !1,
                animate: {
                  backgroundColor: e ? "#FFFFFFE5" : "#FFFFFF00",
                  transition: { duration: 0.3 },
                },
                className:
                  "fixed left-[24px] top-[16px] z-40 flex w-[calc(100%-48px)] items-center justify-between rounded-xl px-3 py-2 md:px-6 md:py-4",
                children: [
                  (0, s.jsx)("img", {
                    src: "./svg/logo.svg",
                    alt: "Gasfee Logo",
                    className: "w-[115px] md:w-[183px]",
                  }),
                  (0, s.jsxs)(r.P.div, {
                    initial: !1,
                    animate: {
                      backgroundColor: e ? "rgba(255,255,255,0)" : "#FFFFFF99",
                      borderColor: e ? "rgba(255,255,255,0)" : "#FFFFFF",
                      transition: { duration: 0.3 },
                    },
                    className:
                      "interact-button hidden h-[48px] items-center gap-x-[50px] rounded-xl border border-[#FFFFFF] px-10 md:flex",
                    children: [
                      (0, s.jsx)(c(), {
                        className:
                          "interact-button text-sm font-normal text-[#23252A] hover:font-semibold ",
                        href: "#",
                        children: "Check Your Eligibility",
                      }),
                      (0, s.jsx)(c(), {
                        className:
                          "text-sm font-normal text-[#23252A] cursor-pointer hover:font-semibold interact-button",
                        href: "#",
                        children: "AI",
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "mt-1.5 relative h-[18px] w-[18px] md:hidden",
                    children: (0, s.jsxs)("div", {
                      className:
                        "absolute left-1/2 top-1/2 block h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 transform cursor-pointer md:hidden",
                      onClick: a,
                      children: [
                        (0, s.jsx)("span", {
                          className:
                            "absolute left-0 top-0 block h-[2px] w-full bg-[#3E3E3E]",
                        }),
                        (0, s.jsx)("span", {
                          className:
                            "absolute left-0 top-[6px] block h-[2px] w-full bg-[#3E3E3E]",
                        }),
                        (0, s.jsx)("span", {
                          className:
                            "absolute left-0 top-[6px] block h-[2px] w-full bg-[#3E3E3E]",
                        }),
                        (0, s.jsx)("span", {
                          className:
                            "absolute left-0 top-[12px] block h-[2px] w-full bg-[#3E3E3E]",
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)(m.A, { containerStyle: "" }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "width-1/2 absolute right-0 h-full md:right-[20px] md:top-[-130px]",
                children: [
                  (0, s.jsx)(r.P.img, {
                    src: "./images/visuals-hero-5.png",
                    alt: "",
                    className:
                      "absolute right-[180px] top-[55px] z-[1] h-[18px] md:right-[780px] md:top-[151px] md:h-auto md:w-[82px]",
                    initial: { opacity: 0, y: -60 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.8, delay: 0.6, ease: "easeOut" },
                  }),
                  (0, s.jsx)(r.P.img, {
                    src: "./images/visuals-hero-4.png",
                    alt: "",
                    className:
                      "absolute right-[130px] top-[25px] z-[2] h-[40px] md:hidden",
                    initial: { opacity: 0, y: -40 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
                  }),
                  (0, s.jsx)(r.P.img, {
                    src: "./images/visuals-hero-2.png",
                    alt: "",
                    className:
                      "absolute z-[1] hidden md:right-[580px] md:top-[130px] md:block md:h-[clamp(120px,7.66vh,147px)]",
                    initial: { opacity: 0, y: -50 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
                  }),
                  (0, s.jsx)(r.P.img, {
                    src: "./images/visuals-hero-1.png",
                    alt: "",
                    className:
                      "absolute right-[75px] top-[55px] z-[1] h-[90px] md:right-[215px] md:top-[130px] md:h-auto md:w-[400px]",
                    initial: { opacity: 0, y: -60 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
                  }),
                  (0, s.jsx)(x, {}),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "pt-[128px]",
                children: [
                  (0, s.jsx)(r.P.img, {
                    src: "./svg/hero-animate.svg",
                    alt: "pretitle",
                    className: "w-[94px] origin-left md:w-[188px]",
                    initial: "hidden",
                    animate: "visible",
                    variants: f,
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)(r.P.p, {
                        className:
                          "mt-[44px] flex overflow-hidden text-[clamp(50px,6.77vw,110px)] font-medium text-[#262D29]",
                        style: { lineHeight: "clamp(65px, 7.29vw, 140px)" },
                        initial: "hidden",
                        animate: "visible",
                        children: (0, s.jsx)(r.P.span, {
                          className: "text-[#6E6E6E]",
                          children: h("Get Your Fees Back"),
                        }),
                      }),
                      (0, s.jsx)(r.P.p, {
                        className:
                          "flex flex-wrap overflow-hidden text-[clamp(50px,6.77vw,110px)] font-medium text-[#262D29]",
                        style: { lineHeight: "clamp(65px, 7.29vw, 140px)" },
                        initial: "hidden",
                        animate: "visible",
                        children: h("With Gasfee AI Protocol"),
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "mt-4 overflow-hidden pb-2",
                    children: (0, s.jsx)(r.P.p, {
                      className:
                        "text-sm font-normal text-[#6E6E6E] md:text-[clamp(16px,1.67vw,32px)]",
                      initial: { opacity: 0, y: "100%" },
                      animate: { opacity: 1, y: "0%" },
                      transition: {
                        duration: 0.8,
                        delay: 0.8,
                        ease: "easeOut",
                      },
                      children:
                        "Scale Smarter, Compute Faster, Driven by Demand",
                    }),
                  }),
                ],
              }),
              (0, s.jsx)("button", {
                className:
                  "absolute bottom-0 left-0 h-12 w-[165px] bg-[#F8D339] text-[20px] font-normal text-[#262D29] md:w-[380px]",
                onClick: () => {
                  window &&
                    window.scrollTo({
                      top: document.body.scrollHeight,
                      behavior: "smooth",
                    });
                },
                children: "Get In Touch",
              }),
              (0, s.jsx)("img", {
                src: "./images/visuals-hero-3.png",
                alt: "",
                className:
                  "absolute bottom-[-76px] right-[29px] h-[108px] md:bottom-[-151px] md:right-[261px] md:h-[217px]",
              }),
            ],
          })
        );
      }
      var g = a(6874),
        w = a(8943);
      a(9690), a(2598), a(1576);
      var y = a(2037);
      let j = [
          {
            title: "Smart GPU Orchestration",
            description:
              "Gasfee dynamically allocates computability resources, reducing cloud costs and bandwidth overheads.",
          },
          {
            title: "Local Edge Acceleration",
            description:
              "Train and infer faster on-device, with enhanced data privacy and near-zero latency.",
          },
          {
            title: "Secure & Flexible Unified API",
            description:
              "A single interface to control everything, built for enterprise-grade security and adaptability.",
          },
          {
            title: "Anytime & Anywhere",
            description:
              "Run AI seamlessly across clouds, edge nodes, and mobile endpoints.",
          },
        ],
        b = {
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        },
        N = {
          hidden: { clipPath: "inset(0 100% 0 0)" },
          visible: {
            clipPath: "inset(0 0 0 0)",
            transition: { duration: 1, ease: "easeOut" },
          },
        };
      function P() {
        let e = (0, n.useRef)(null),
          t = (0, y.W)(e, { once: !0, amount: 0.3 }),
          [a, i] = (0, n.useState)(0),
          [l, o] = (0, n.useState)(null);
        return (0, s.jsxs)("div", {
          className:
            "relative w-screen pt-[90px] md:min-h-screen md:pt-[136px]",
          children: [
            (0, s.jsxs)("div", {
              ref: e,
              className: "mx-auto max-w-[1200px] px-[30px]",
              children: [
                (0, s.jsx)(r.P.p, {
                  className:
                    "text-[clamp(60px,6.77vw,130px)] font-medium md:mt-[clamp(30px,3.13vw,60px)]",
                  style: { lineHeight: "clamp(65px, 7.29vw, 140px)" },
                  initial: "hidden",
                  animate: t ? "visible" : "hidden",
                  variants: b,
                  children: "What Is Gasfee?",
                }),
                (0, s.jsx)(r.P.img, {
                  src: "./svg/hero-animate.svg",
                  alt: "pretitle",
                  className:
                    "mt-[clamp(30px,3.13vw,60px)] w-[94px] md:w-[188px]",
                  initial: "hidden",
                  animate: t ? "visible" : "hidden",
                  variants: N,
                }),
                (0, s.jsxs)(r.P.div, {
                  className:
                    "mt-[clamp(20px,2.08vw,40px)] max-w-[844px] text-left text-xl font-normal text-[#262D29] md:ml-auto",
                  initial: "hidden",
                  animate: t ? "visible" : "hidden",
                  variants: b,
                  children: [
                    (0, s.jsxs)("p", {
                      children: [
                        "Gasfee is committed to ",
                        (0, s.jsx)("b", {
                          children: "advancing Edge Al technologies",
                        }),
                        " by leveraging containerized architectures, GPU acceleration, and edge computing to deliver efficient and flexible Al solutions for global clients.",
                      ],
                    }),
                    (0, s.jsx)("p", {
                      className: "mt-4 md:mt-[14px]",
                      children:
                        "Our innovative approach helps people to get their burned fees back worldwide with AI protocols and optimized for distributed environments, ensuring low-latency processing.",
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className:
                "relative ml-auto mt-[36px] max-w-[800px] md:mr-[130px] md:mt-[clamp(60px,6.25vw,120px)] md:pb-[117px] xxl:mr-[160px] xxl:max-w-[clamp(600px,66.77vw,1282px)] 3xl:mr-auto",
              id: "swiper-cont",
              children: [
                (0, s.jsx)(g.RC, {
                  modules: [w.Vx, w.dK, w.Ij],
                  autoplay: { delay: 4e3, disableOnInteraction: !1 },
                  navigation: {
                    prevEl: ".swiper-prev",
                    nextEl: ".swiper-next",
                  },
                  onSwiper: (e) => o(e),
                  onSlideChange: (e) => i(e.realIndex),
                  className:
                    "relative h-[400px] w-full md:h-[calc(clamp(600px,66.77vw,1282px)*0.546)] md:w-[800px] xxl:w-[clamp(600px,66.77vw,1282px)]",
                  children: j.map((e, t) =>
                    (0, s.jsxs)(
                      g.qr,
                      {
                        className:
                          "items-between relative h-full flex-col justify-between px-[30px] py-[90px] md:px-[30px] md:py-[60px] xl:p-[60px]",
                        style: { display: "flex" },
                        children: [
                          (0, s.jsx)("img", {
                            src: "./images/what-visual-2.png",
                            alt: "bg",
                            className:
                              "absolute left-0 top-0 z-[-1] h-full w-full object-cover",
                          }),
                          (0, s.jsx)("h2", {
                            className:
                              "max-w-[650px] break-words text-[45px] font-bold font-medium xs:text-[50px] md:text-[clamp(50px,7.29vw,120px)] xxl:max-w-[750px] 3xl:max-w-[850px]",
                            style: { lineHeight: "clamp(50px, 7.29vw, 140px)" },
                            children: e.title.split("&").reduce(
                              (e, t, a, i) => (
                                e.push((0, s.jsx)("span", { children: t }, a)),
                                a < i.length - 1 &&
                                  e.push(
                                    (0, s.jsx)(
                                      "span",
                                      {
                                        style: {
                                          fontFamily: "Arial, san-serif",
                                        },
                                        className: "font-medium",
                                        children: "&",
                                      },
                                      "amp-".concat(a)
                                    )
                                  ),
                                e
                              ),
                              []
                            ),
                          }),
                          (0, s.jsx)("p", {
                            className: "mt-auto text-xl font-normal",
                            children: e.description,
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
                (0, s.jsx)("div", {
                  className:
                    "absolute left-[-260px] top-[calc(clamp(60px,6.25vw,120px)+60px)] z-[2] hidden w-[260px] -translate-y-1/2 transform flex-col space-y-4 md:flex",
                  children: j.map((e, t) =>
                    (0, s.jsxs)(
                      "div",
                      {
                        className:
                          "relative flex cursor-pointer items-center px-6 py-2 text-left transition-all duration-300 ".concat(
                            a === t ? "text-black" : "text-gray-500"
                          ),
                        onClick: () => l.slideTo(t),
                        children: [
                          a === t &&
                            (0, s.jsx)(r.P.div, {
                              className:
                                "absolute bottom-0 right-[-28px] z-[2]",
                              layoutId: "activeIndicator",
                              children: (0, s.jsxs)("svg", {
                                width: "250",
                                height: "29",
                                viewBox: "0 0 250 29",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                  (0, s.jsx)("rect", {
                                    x: "222",
                                    width: "28",
                                    height: "28",
                                    fill: "#F8D339",
                                  }),
                                  (0, s.jsx)("path", {
                                    d: "M0 28H223.5",
                                    stroke: "#F8D339",
                                  }),
                                ],
                              }),
                            }),
                          (0, s.jsx)("span", {
                            className: "ml-4 flex-1 text-base",
                            children: e.title,
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
                (0, s.jsx)("div", {
                  className:
                    "absolute left-[20px] top-[20px] z-10 flex gap-2.5 md:hidden",
                  children: j.map((e, t) =>
                    (0, s.jsx)(
                      "div",
                      {
                        className: "h-[17px] w-[17px] ".concat(
                          a === t ? "bg-yellow-400" : "bg-white"
                        ),
                        onClick: () => l.slideTo(t),
                      },
                      t
                    )
                  ),
                }),
                (0, s.jsxs)("div", {
                  className:
                    "absolute right-0 top-0 z-10 hidden w-[20%] md:block",
                  children: [
                    (0, s.jsx)("button", {
                      className: "swiper-prev hidden md:block",
                      children: (0, s.jsx)("img", {
                        src: "./images/left.png",
                        alt: "",
                      }),
                    }),
                    (0, s.jsx)("button", {
                      className: "swiper-next hidden md:block",
                      children: (0, s.jsx)("img", {
                        src: "./images/right.png",
                        alt: "",
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "absolute right-0 top-0 z-10 flex md:hidden",
                  children: [
                    (0, s.jsx)("button", {
                      className: "swiper-prev w-[60px]",
                      children: (0, s.jsx)("img", {
                        src: "./images/left.png",
                        alt: "",
                      }),
                    }),
                    (0, s.jsx)("button", {
                      className: "swiper-next w-[60px]",
                      children: (0, s.jsx)("img", {
                        src: "./images/right.png",
                        alt: "",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)("img", {
              src: "./images/what-visual-1.png",
              alt: "",
              className:
                "absolute bottom-[-76px] left-[29px] z-[1] hidden h-[108px] md:bottom-[-25px] md:left-[158px] md:block md:h-[217px]",
            }),
          ],
        });
      }
      let I = {
        hidden: { clipPath: "inset(0 100% 0 0)" },
        visible: {
          clipPath: "inset(0 0 0 0)",
          transition: { duration: 1, ease: "easeOut" },
        },
      };
      function A() {
        let e = (0, n.useRef)(null),
          t = (0, n.useRef)(null),
          a = (0, y.W)(e, { once: !0, amount: 0.2 }),
          i = (0, y.W)(t, { once: !0, amount: 0.2 }),
          l = (0, n.useRef)(null),
          o = (0, n.useRef)(null),
          c = (0, n.useRef)(null),
          d = (0, y.W)(l, { once: !0, amount: 0.3 }),
          [m, p] = (0, n.useState)(!1),
          [x, h] = (0, n.useState)(0),
          [u, f] = (0, n.useState)(0),
          v =
            "Gasfee adapts a containerized architecture designed to run AI efficiently on local devices, supporting a wide range of AI applications. While optimizing GPU resource allocation, it accelerates inference, improves training, and enhances data privacy.",
          g =
            "With zero commission and near-instant processing, we’ve redefined how gas rebates should work. No middlemen, no delays — just efficient, automated returns.";
        return (
          (0, n.useEffect)(() => {
            let e = (e) => {
              if (!l.current || !o.current || !c.current) return;
              let t = o.current.getBoundingClientRect().top + window.scrollY,
                a = c.current.getBoundingClientRect().top + window.scrollY,
                s = window.scrollY,
                i = window.innerHeight,
                n = s >= t - 84 - i / 2 && s < a - i / 2,
                r = s >= a - 84 - i / 2 && s < a + i / 2;
              if ((n || r ? p(!0) : p(!1), m)) {
                e.preventDefault();
                let s = e.deltaY;
                n &&
                  (s > 0 && x < v.length
                    ? h((e) => Math.min(e + 2, v.length))
                    : s < 0 && x > 0 && h((e) => Math.max(e - 2, 0)),
                  x > 0 &&
                    x < v.length &&
                    window.scrollTo({ top: t - 84, behavior: "smooth" }),
                  (x >= v.length || (0 === x && s < 0)) && p(!1)),
                  r &&
                    (s > 0 && u < g.length
                      ? f((e) => Math.min(e + 2, g.length))
                      : s < 0 && u > 0 && f((e) => Math.max(e - 2, 0)),
                    u > 0 &&
                      u < g.length &&
                      window.scrollTo({ top: a - 84, behavior: "smooth" }),
                    (u >= g.length || (0 === u && s < 0)) && p(!1));
              }
            };
            return (
              window.addEventListener("wheel", e, { passive: !1 }),
              () => window.removeEventListener("wheel", e)
            );
          }, [x, u, m, v.length, g.length]),
          (0, s.jsxs)("div", {
            ref: l,
            className: "relative z-[-1] min-h-screen bg-[#272727]",
            children: [
              (0, s.jsx)("div", {
                ref: e,
                className:
                  "pointer-events-none absolute left-1/2 top-0 z-[0] hidden h-full w-screen -translate-x-1/2 justify-evenly md:flex",
                children: Array.from({ length: 15 }).map((e, t) =>
                  (0, s.jsx)(
                    r.P.div,
                    {
                      initial: { height: "0%" },
                      animate: { height: a ? "100%" : "0%" },
                      transition: {
                        duration: 1,
                        delay: 0.1 * t,
                        ease: "easeOut",
                      },
                      className: "relative w-px origin-top-left bg-[#474747]",
                    },
                    t
                  )
                ),
              }),
              (0, s.jsx)("div", {
                ref: t,
                className:
                  "pointer-events-none absolute left-1/2 top-0 z-[0] flex h-full w-screen -translate-x-1/2 scale-[130%] justify-evenly md:hidden",
                children: Array.from({ length: 5 }).map((e, t) =>
                  (0, s.jsx)(
                    r.P.div,
                    {
                      initial: { height: "0%" },
                      animate: { height: i ? "100%" : "0%" },
                      transition: {
                        duration: 1,
                        delay: 0.1 * t,
                        ease: "easeOut",
                      },
                      className: "relative w-px origin-top-left bg-[#474747]",
                    },
                    t
                  )
                ),
              }),
              (0, s.jsx)("img", {
                src: "./images/bg-about.png",
                alt: "",
                className:
                  "absolute left-0 top-0 z-[1] h-screen w-full bg-[#272727] object-cover md:object-fill",
              }),
              (0, s.jsx)("h1", {
                ref: o,
                className:
                  "relative z-[1] px-[30px] pt-6 text-[50px] font-medium text-white md:top-12 md:px-[130px] md:text-[clamp(50px,6.77vw,130px)]",
                style: { lineHeight: "clamp(50px, 7.29vw, 140px)" },
                children: "Scale Smarter, Train Safer",
              }),
              (0, s.jsx)(r.P.div, {
                className:
                  "relative z-[1] px-[30px] pt-[30px] text-[clamp(20px,3.125vw,60px)] font-medium md:px-[130px] md:pt-[72px]",
                style: { lineHeight: "clamp(28px, 3.75vw, 76px)" },
                children: v.split("").map((e, t) =>
                  (0, s.jsx)(
                    r.P.span,
                    {
                      animate: { color: t < x ? "#ffffff" : "#7A7A7A" },
                      transition: { duration: 0.05 },
                      children: e,
                    },
                    t
                  )
                ),
              }),
              (0, s.jsx)("h1", {
                ref: c,
                className:
                  "relative z-[1] px-[30px] pt-10 text-[50px] font-medium text-white md:top-12 md:px-[130px] md:text-[clamp(50px,6.77vw,130px)]",
                style: { lineHeight: "clamp(50px, 7.29vw, 140px)" },
                children: "Zero Commission & Low Latency".split("&").reduce(
                  (e, t, a, i) => (
                    e.push((0, s.jsx)("span", { children: t }, a)),
                    a < i.length - 1 &&
                      e.push(
                        (0, s.jsx)(
                          "span",
                          {
                            style: { fontFamily: "Arial, san-serif" },
                            className: "font-medium",
                            children: "&",
                          },
                          "amp-".concat(a)
                        )
                      ),
                    e
                  ),
                  []
                ),
              }),
              (0, s.jsx)(r.P.div, {
                className:
                  "relative z-[1] px-[30px] pt-[30px] text-[clamp(20px,3.125vw,60px)] font-medium md:px-[130px] md:pt-[72px]",
                style: { lineHeight: "clamp(28px, 3.75vw, 76px)" },
                children: g.split("").map((e, t) =>
                  (0, s.jsx)(
                    r.P.span,
                    {
                      animate: { color: t < u ? "#ffffff" : "#7A7A7A" },
                      transition: { duration: 0.05 },
                      children: e,
                    },
                    t
                  )
                ),
              }),
              (0, s.jsx)(r.P.img, {
                src: "./svg/hero-animate.svg",
                alt: "pretitle",
                className:
                  "relative z-[1] mx-[30px] mt-[45px] w-[94px] md:mx-[130px] md:mt-[100px] md:mt-[60px] md:w-[188px]",
                initial: "hidden",
                animate: d ? "visible" : "hidden",
                variants: I,
              }),
            ],
          })
        );
      }
      a(600);
      let _ = [
          {
            year: "2025 Q1-Q2",
            points: ["Build Community", "Gasfee Beta Testing"],
          },
          {
            year: "2025 Q3-Q4",
            points: [
              "Gasfee Launch",
              "Gasfee API",
              "Establish More Partnership",
            ],
          },
          {
            year: "2026",
            points: ["Gasfee V2", "Gasfee Go", "Integration With More Clients"],
          },
          {
            year: "2027",
            points: ["Further Product Development and Upgrades"],
          },
        ],
        E = {
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        },
        k = { visible: { transition: { staggerChildren: 0.2 } } },
        B = {
          hidden: { opacity: 0, x: -30 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" },
          },
        };
      function F() {
        let e = (0, n.useRef)(null),
          t = (0, n.useRef)(null),
          a = (0, n.useRef)(null),
          i = (0, n.useRef)(null),
          l = (0, y.W)(e, { once: !0, amount: 0.2 }),
          o = (0, y.W)(t, { once: !0, amount: 0.2 }),
          c = (0, y.W)(a, { once: !0, amount: 0.3 }),
          d = (0, y.W)(i, { once: !0, amount: 0.3 }),
          [m, p] = (0, n.useState)(null),
          [x, h] = (0, n.useState)(0);
        return (0, s.jsxs)("div", {
          className:
            "relative flex flex-col min-h-[calc(80vh)] w-screen items-center md:justify-end overflow-hidden bg-[#272727] text-white md:min-h-screen md:justify-start pb-[150px] xs:pb-[100px] pt-[50px] md:pt-[200px] md:pb-[400px]",
          children: [
            (0, s.jsx)("div", {
              ref: e,
              className:
                "pointer-events-none absolute left-1/2 top-0 z-[0] hidden h-full w-screen -translate-x-1/2 justify-evenly md:flex",
              children: Array.from({ length: 15 }).map((e, t) =>
                (0, s.jsx)(
                  r.P.div,
                  {
                    initial: { height: "0%" },
                    animate: { height: l ? "100%" : "0%" },
                    transition: {
                      duration: 1,
                      delay: 0.1 * t,
                      ease: "easeOut",
                    },
                    className: "relative w-px origin-top-left bg-[#474747]",
                  },
                  t
                )
              ),
            }),
            (0, s.jsx)("div", {
              ref: t,
              className:
                "pointer-events-none absolute left-1/2 top-0 z-[0] flex h-full w-screen -translate-x-1/2 scale-[130%] justify-evenly md:hidden",
              children: Array.from({ length: 5 }).map((e, t) =>
                (0, s.jsx)(
                  r.P.div,
                  {
                    initial: { height: "0%" },
                    animate: { height: o ? "100%" : "0%" },
                    transition: {
                      duration: 1,
                      delay: 0.1 * t,
                      ease: "easeOut",
                    },
                    className: "relative w-px origin-top-left bg-[#474747]",
                  },
                  t
                )
              ),
            }),
            (0, s.jsx)(r.P.h1, {
              ref: i,
              initial: "hidden",
              animate: d ? "visible" : "hidden",
              variants: E,
              className:
                "relative z-10 text-[clamp(50px,6.77vw,130px)] font-bold text-white self-start px-[30px] md:px-[130px]",
              children: "Roadmap",
            }),
            (0, s.jsxs)("div", {
              className:
                "relative z-10 self-end md:self-center flex h-[320px] w-[265px] items-center justify-center shadow-lg mt-[60px] md:mt-[120px] md:h-[calc(clamp(600px,68.49vw,1315px)*0.4865)] md:w-[clamp(600px,68.49vw,1315px)]",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "absolute left-[-120px] top-1/2 flex h-full -translate-y-1/2 flex-col justify-between text-yellow-400 md:left-[-160px]",
                  children: [
                    _.map((e, t) =>
                      (0, s.jsx)(
                        "div",
                        {
                          className:
                            "w-[49px] cursor-pointer text-right text-sm font-medium transition-opacity md:w-auto ".concat(
                              x === t ? "text-[#F8D339]" : "text-white"
                            ),
                          onClick: () => {
                            m && (m.slideTo(t), h(t));
                          },
                          children: e.year,
                        },
                        e.year
                      )
                    ),
                    (0, s.jsx)("div", {
                      className:
                        "absolute right-[-20px] top-0 h-[100%] w-[1px] bg-[#F8D339]",
                    }),
                    (0, s.jsx)(r.P.div, {
                      className:
                        "absolute right-[-28px] top-0 h-[calc(100%/4)] w-[14px] bg-gradient-to-t from-[#32CBD0] via-[#5D55F6] to-[#F8D339] md:right-[-40px] md:w-[28px]",
                      animate: { y: "calc(100% * ".concat(x, ")") },
                      transition: { duration: 0.5, ease: "easeInOut" },
                    }),
                  ],
                }),
                (0, s.jsx)("img", {
                  src: "./images/roadmap-slider-bg.png",
                  alt: "",
                  className: "absolute left-0 top-0 h-full w-full object-cover",
                }),
                (0, s.jsx)(g.RC, {
                  direction: "vertical",
                  slidesPerView: 1,
                  spaceBetween: 50,
                  autoplay: { delay: 3e3, pauseOnMouseEnter: !0 },
                  ref: a,
                  modules: [w.Ij],
                  onSlideChange: (e) => h(e.activeIndex),
                  onSwiper: (e) => p(e),
                  className: "h-full w-full",
                  children: _.map((e) =>
                    (0, s.jsx)(
                      g.qr,
                      {
                        children: (0, s.jsxs)(r.P.div, {
                          initial: "hidden",
                          animate: c ? "visible" : "hidden",
                          variants: k,
                          className:
                            "flex h-full flex-col items-start justify-center p-[clamp(25px,4.17vw,80px)]",
                          children: [
                            (0, s.jsx)(r.P.h2, {
                              variants: E,
                              className:
                                "text-[clamp(30px,6.25vw,120px)] font-semibold text-[#262D29]",
                              style: {
                                lineHeight: "clamp(55px, 7.29vw, 140px)",
                              },
                              children: e.year,
                            }),
                            (0, s.jsx)(r.P.ul, {
                              className:
                                "mt-auto space-y-3 text-[clamp(20px,2.92vw,56px)] font-medium text-[#262D29]",
                              variants: k,
                              children: e.points.map((e, t) =>
                                (0, s.jsxs)(
                                  r.P.li,
                                  {
                                    className: "flex items-start",
                                    variants: B,
                                    children: [
                                      (0, s.jsx)("span", {
                                        className: "mr-3 mt-1 text-xl md:mt-4",
                                        children: "•",
                                      }),
                                      " ",
                                      e,
                                    ],
                                  },
                                  t
                                )
                              ),
                            }),
                          ],
                        }),
                      },
                      e.year
                    )
                  ),
                }),
              ],
            }),
          ],
        });
      }
      var z = a(8606);
      let C = [
        {
          number: 1,
          title:
            "NVIDIA Releases NIM Microservices to Safeguard Applications for Agentic AI",
          date: "January 16, 2025",
          url: "https://blogs.nvidia.com/blog/nemo-guardrails-nim-microservices/",
        },
        {
          number: 2,
          title:
            "How to Safeguard AI Agents for Customer Service with NVIDIA NeMo Guardrails | NVIDIA Technical Blog",
          date: "January 16, 2025",
          url: "https://developer.nvidia.com/blog/how-to-safeguard-ai-agents-for-customer-service-with-nvidia-nemo-guardrails/",
        },
        {
          number: 3,
          title:
            "Now See This: NVIDIA Launches Blueprint for AI Agents That Can Analyze Video",
          date: "January 07, 2025",
          url: "https://blogs.nvidia.com/blog/metropolis-ai-blueprint-video/",
        },
        {
          number: 4,
          title: "NVIDIA at CES 2025 January 6–10 at Las Vegas, NV",
          date: "January 06, 2025",
          url: "https://www.nvidia.com/en-us/events/ces/",
        },
      ];
      function S() {
        let e = (0, n.useRef)(null),
          t = (0, z.s)(),
          a = (0, z.s)(),
          i = (0, y.W)(e, { once: !0, margin: "-100px" });
        return (
          (0, n.useEffect)(() => {
            i && (t.start({ opacity: 1, y: 0 }), a.start({ opacity: 1, y: 0 }));
          }, [i, t, a]),
          (0, s.jsxs)("div", {
            ref: e,
            className:
              "relative flex min-h-screen w-screen flex-col items-center",
            children: [
              (0, s.jsx)("div", {
                className:
                  "absolute left-0 top-[-15%] hidden w-screen items-center justify-center md:flex",
                children: [1, 2, 3, 4, 5].map((e) =>
                  (0, s.jsx)(
                    r.P.img,
                    {
                      src: "./images/invest-visual-".concat(e, ".png"),
                      alt: "",
                      custom: e - 1,
                      initial: { opacity: 0, y: 50 },
                      animate: t,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.3 * e,
                      },
                      style: {
                        width: "calc(100vw".concat(
                          1 === e || 5 === e ? "/8" : "/4",
                          ")"
                        ),
                      },
                    },
                    e
                  )
                ),
              }),
              (0, s.jsx)("div", {
                className:
                  "absolute left-0 top-[-7%] flex w-screen items-center justify-center xs:top-[-14%] md:hidden",
                children: [1, 2, 3, 4, 5].map((e) =>
                  (0, s.jsx)(
                    r.P.img,
                    {
                      src: "./images/invest-visual-".concat(e, ".png"),
                      alt: "",
                      custom: e - 1,
                      initial: { opacity: 0, y: 50 },
                      animate: t,
                      transition: { duration: 0.5, ease: "easeOut" },
                      style: {
                        width: "calc(100vw".concat(
                          1 === e || 5 === e ? "/4" : "/2",
                          ")"
                        ),
                      },
                    },
                    e
                  )
                ),
              }),
              (0, s.jsxs)(r.P.div, {
                className:
                  "flex h-full w-screen max-w-[1600px] flex-col items-start justify-start pt-[104px] md:pt-[20%]",
                initial: { opacity: 0, y: -50 },
                animate: a,
                transition: { duration: 0.6, ease: "easeOut", delay: 1.2 },
                children: [
                  (0, s.jsxs)("p", {
                    className:
                      "mt-[45px] px-9 text-[clamp(50px,6.77vw,130px)] font-medium text-[#262D29] md:mt-[60px]",
                    style: { lineHeight: "clamp(55px, 7.29vw, 140px)" },
                    children: [
                      "NVIDIA ",
                      (0, s.jsx)("br", { className: "md:hidden" }),
                      " On-",
                      (0, s.jsx)("br", { className: "md:hidden" }),
                      "Demand",
                    ],
                  }),
                  (0, s.jsx)("img", {
                    src: "./svg/hero-animate.svg",
                    alt: "pretitle",
                    className:
                      "mx-9 mb-[43px] mt-[25px] h-[28px] md:mb-[118px] md:mt-[60px] md:h-[56px]",
                  }),
                  (0, s.jsx)("div", {
                    className: "relative w-full",
                    children: (0, s.jsx)("div", {
                      className:
                        "flex gap-4 overflow-x-auto whitespace-nowrap pl-9",
                      children: C.map((e, t) =>
                        (0, s.jsxs)(
                          "a",
                          {
                            href: e.url,
                            target: "_blank",
                            className:
                              "flex w-[350px] flex-shrink-0 flex-col items-start",
                            children: [
                              (0, s.jsx)("img", {
                                src: "./images/invest-list-".concat(
                                  e.number,
                                  ".png"
                                ),
                                alt: e.title,
                                className: "h-auto w-full rounded-lg",
                              }),
                              (0, s.jsx)("h3", {
                                className:
                                  "mt-2 text-center text-lg font-semibold w-full text-ellipsis overflow-hidden",
                                children: e.title,
                              }),
                              (0, s.jsx)("p", {
                                className: "text-sm text-gray-500",
                                children: e.date,
                              }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)(r.P.div, {
                className:
                  "flex h-full w-screen max-w-[1600px] flex-col items-center justify-center px-9 pt-[84px] md:flex-1 md:flex-row-reverse md:gap-[144px] md:pt-[140px]",
                initial: { opacity: 0, y: -50 },
                animate: a,
                transition: { duration: 0.6, ease: "easeOut", delay: 1.2 },
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "flex flex-col items-center justify-center md:flex-1 md:items-start",
                    children: [
                      (0, s.jsxs)("p", {
                        className:
                          "mt-[45px] text-center text-[clamp(50px,6.77vw,130px)] font-medium text-[#262D29] md:mt-[60px] md:text-left",
                        style: { lineHeight: "clamp(55px, 7.29vw, 140px)" },
                        children: [
                          "Main",
                          (0, s.jsx)("br", { className: "hidden md:block" }),
                          (0, s.jsx)("span", {
                            className: "md:hidden",
                            children: " ",
                          }),
                          "Backers",
                        ],
                      }),
                      (0, s.jsx)("img", {
                        src: "./svg/hero-animate.svg",
                        alt: "pretitle",
                        className:
                          "mt-[45px] h-[28px] md:mb-[130px] md:mt-[104px] md:h-[56px]",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "mb-[65px] mt-[45px] flex items-start justify-around gap-2 md:mb-[124px] md:mt-0 md:flex-1 md:items-center md:gap-4",
                    children: [
                      (0, s.jsx)("a", {
                        href: "https://www.nvidia.com/",
                        target: "_blank",
                        children: (0, s.jsx)(r.P.img, {
                          src: "./images/invest-logo-1.png",
                          alt: "pretitle",
                          className: "w-[clamp(167px,21.77vw,418px)]",
                          initial: { opacity: 0, y: -50 },
                          animate: a,
                          transition: { duration: 0.8, delay: 0.5 },
                        }),
                      }),
                      (0, s.jsx)("a", {
                        href: "https://coinmarketcap.com/",
                        target: "_blank",
                        children: (0, s.jsx)(r.P.img, {
                          src: "./images/invest-logo-2.png",
                          alt: "pretitle",
                          className: "w-[clamp(167px,21.77vw,418px)]",
                          initial: { opacity: 0, y: -50 },
                          animate: a,
                          transition: { duration: 0.8, delay: 0.7 },
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      var O = a(1105),
        D = a(9460),
        R = a.n(D);
      function T() {
        let [e, t] = (0, n.useState)(""),
          a = () => {
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
              ? O.oR.success("Subscribed successfully!")
              : O.oR.error("Please enter a valid email");
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("footer", {
              className: R().footerWrap,
              children: [
                (0, s.jsxs)("div", {
                  className: R().footerTop,
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex items-center",
                      children: [
                        (0, s.jsx)("img", { src: "./svg/logo-w.svg", alt: "" }),
                        (0, s.jsx)("div", {
                          className:
                            "mx-4 hidden h-[40px] w-[52px] bg-[#5E5E5E] md:block",
                        }),
                        (0, s.jsx)("p", {
                          className: "hidden text-base text-[#ABABAB] md:block",
                          children: "Protocol",
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "hidden md:flex ".concat(R().footerMidRight),
                      children: (0, s.jsxs)("div", {
                        className: R().socials,
                        children: [
                          (0, s.jsx)("div", {
                            className: "interact-button ".concat(R().socItem),
                            children: "About",
                          }),
                          (0, s.jsx)("a", {
                            href: "https://docs.bytenova.ai/",
                            className: R().socItem,
                            children: "Whitepaper",
                          }),
                          (0, s.jsx)("div", {
                            className: R().socItem,
                            children: "FAQ",
                          }),
                          (0, s.jsx)("div", {
                            className: R().socItem,
                            children: "Terms & Conditions",
                          }),
                          (0, s.jsx)("div", {
                            className: R().socItem,
                            children: "Privacy Policy",
                          }),
                          (0, s.jsx)("div", {
                            className: R().socItem,
                            children: "Contact",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "md:hidden ".concat(R().footerMid),
                  children: [
                    (0, s.jsxs)("div", {
                      className: R().footerMidLeft,
                      children: [
                        (0, s.jsx)("p", {
                          className: "md:text-6 text-[13px]",
                          children: "Join the AI Revolution",
                        }),
                        (0, s.jsxs)("div", {
                          className: R().footerInput,
                          children: [
                            (0, s.jsx)("input", {
                              type: "text",
                              placeholder: "Get the latest updates from Gasfee",
                              onChange: (e) => t(e.target.value),
                            }),
                            (0, s.jsx)("span", {
                              className: "cursor-pointer",
                              onClick: a,
                              children: "Subscribe",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: R().footerMidRight,
                      children: (0, s.jsxs)("div", {
                        className: R().socials,
                        children: [
                          (0, s.jsx)("div", {
                            className: R().socItem,
                            children: "About",
                          }),
                          (0, s.jsx)("a", {
                            href: "https://docs.Gasfee.ai/",
                            className: R().socItem,
                            children: "Whitepaper",
                          }),
                          (0, s.jsx)("div", {
                            className: R().socItem,
                            children: "FAQ",
                          }),
                          (0, s.jsx)("div", {
                            className: R().socItem,
                            children: "Terms & Conditions",
                          }),
                          (0, s.jsx)("div", {
                            className: R().socItem,
                            children: "Privacy Policy",
                          }),
                          (0, s.jsx)("div", {
                            className: R().socItem,
                            children: "Contact",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "mt-[30px] flex flex-col items-center justify-between pb-5 md:mt-0 md:flex-row md:pb-10",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "".concat(R().software, " flex md:hidden"),
                      children: [
                        (0, s.jsx)("a", {
                          className: "h-5 w-5 hover:opacity-70",
                          href: "https://x.com/GasfeeAI",
                          target: "_blank",
                          children: (0, s.jsx)("img", {
                            className: "h-full w-full",
                            src: "./svg/x.svg",
                            alt: "",
                          }),
                        }),
                        (0, s.jsx)("a", {
                          className: "h-5 w-5 hover:opacity-70",
                          href: "https://discord.gg/dnDNRrUGNm",
                          target: "_blank",
                          children: (0, s.jsx)("img", {
                            className: "h-full w-full",
                            src: "./svg/discord.svg",
                            alt: "",
                          }),
                        }),
                        (0, s.jsx)("a", {
                          className: "h-5 w-5 hover:opacity-70",
                          href: "https://t.me/GasfeeCommunity",
                          target: "_blank",
                          children: (0, s.jsx)("img", {
                            className: "h-full w-full",
                            src: "./svg/telegram.svg",
                            alt: "",
                          }),
                        }),
                        (0, s.jsx)("a", {
                          className: "h-5 w-5 hover:opacity-70",
                          href: "https://github.com/Gasfee-Official/Gasfee",
                          target: "_blank",
                          children: (0, s.jsx)("img", {
                            className: "h-full w-full",
                            src: "./svg/github.svg",
                            alt: "",
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "hidden pt-6 md:block",
                      children: [
                        (0, s.jsx)("p", {
                          className: "text-[13px] text-white md:text-2xl",
                          children: "Join the AI Revolution",
                        }),
                        (0, s.jsxs)("div", {
                          className: "".concat(R().footerInput, " w-[500px]"),
                          children: [
                            (0, s.jsx)("input", {
                              type: "text",
                              placeholder: "Get the latest updates from Gasfee",
                              onChange: (e) => t(e.target.value),
                            }),
                            (0, s.jsx)("span", {
                              className: "cursor-pointer",
                              onClick: a,
                              children: "Subscribe",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "".concat(
                        R().software,
                        "flex flex-col items-end"
                      ),
                      children: [
                        (0, s.jsxs)("div", {
                          className: "mb-7 hidden justify-end gap-4 md:flex",
                          children: [
                            (0, s.jsx)("a", {
                              className: "h-5 w-5 hover:opacity-70",
                              href: "https://x.com/GasfeeAI",
                              target: "_blank",
                              children: (0, s.jsx)("img", {
                                className: "h-full w-full",
                                src: "./svg/x.svg",
                                alt: "",
                              }),
                            }),
                            (0, s.jsx)("a", {
                              className: "h-5 w-5 hover:opacity-70",
                              href: "https://discord.gg/dnDNRrUGNm",
                              target: "_blank",
                              children: (0, s.jsx)("img", {
                                className: "h-full w-full",
                                src: "./svg/discord.svg",
                                alt: "",
                              }),
                            }),
                            (0, s.jsx)("a", {
                              className: "h-5 w-5 hover:opacity-70",
                              href: "https://t.me/GasfeeCommunity",
                              target: "_blank",
                              children: (0, s.jsx)("img", {
                                className: "h-full w-full",
                                src: "./svg/telegram.svg",
                                alt: "",
                              }),
                            }),
                            (0, s.jsx)("a", {
                              className: "h-5 w-5 hover:opacity-70",
                              href: "https://github.com/Gasfee-Official/Gasfee",
                              target: "_blank",
                              children: (0, s.jsx)("img", {
                                className: "h-full w-full",
                                src: "./svg/github.svg",
                                alt: "",
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: "".concat(
                            R().crypto,
                            " md:self-end text-right"
                          ),
                          children: "\xa9 2025 Gasfee",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)(O.N9, {
              position: "top-center",
              autoClose: 4e3,
              hideProgressBar: !0,
            }),
          ],
        });
      }
      a(4338);
      var M = a(9070);
      function W() {
        return (
          (0, n.useEffect)(() => {
            window.scrollTo(0, 0);
          }, []),
          (0, s.jsxs)("div", {
            id: "home",
            className: "grid",
            style: { scrollBehavior: "auto", overscrollBehavior: "none" },
            children: [
              (0, s.jsxs)(l(), {
                children: [
                  (0, s.jsx)("title", { children: "Gasfee" }),
                  (0, s.jsx)("meta", {
                    name: "description",
                    content:
                      "The Instrument for Decentralized Trading in the Solana Ecosystem",
                  }),
                  (0, s.jsx)("meta", {
                    property: "og:type",
                    content: "website",
                  }),
                  (0, s.jsx)("meta", {
                    property: "og:title",
                    content: "Gasfee",
                  }),
                  (0, s.jsx)("meta", {
                    property: "og:url",
                    content: "https://Gasfee.ai",
                  }),
                  (0, s.jsx)("meta", {
                    property: "og:image",
                    content: "/images/logo-square.png",
                  }),
                  (0, s.jsx)("meta", {
                    property: "og:description",
                    content:
                      "The Instrument for Decentralized Trading in the Solana Ecosystem",
                  }),
                  (0, s.jsx)("meta", {
                    name: "twitter:card",
                    content: "summary_large_image",
                  }),
                  (0, s.jsx)("meta", {
                    name: "twitter:title",
                    content: "Gasfee",
                  }),
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
              (0, s.jsx)(d.G, {
                children: (0, s.jsxs)("main", {
                  className: "relative",
                  style: { background: "url('/images/bg.png')", zIndex: 0 },
                  children: [
                    (0, s.jsx)("div", {
                      className: "md:hidden",
                      children: (0, s.jsx)(M.A, {}),
                    }),
                    (0, s.jsx)(v, {}),
                    (0, s.jsx)(P, {}),
                    (0, s.jsx)(A, {}),
                    (0, s.jsx)(F, {}),
                    (0, s.jsx)(S, {}),
                    (0, s.jsx)(T, {}),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
    9460: (e) => {
      e.exports = {
        footerWrap: "footer_footerWrap__AmHtS",
        footerTop: "footer_footerTop__40duy",
        footerMid: "footer_footerMid__cqEZN",
        footerMidLeft: "footer_footerMidLeft__kz6U7",
        footerInput: "footer_footerInput__9U0gy",
        footerMidRight: "footer_footerMidRight__WlR4c",
        socials: "footer_socials__ZwdFb",
        socItem: "footer_socItem__W0Ryy",
        software: "footer_software__E0EdQ",
        crypto: "footer_crypto__O7Dzy",
        toTop: "footer_toTop__z0Xuk",
        footerBtm: "footer_footerBtm__f7VL7",
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [75, 67, 455, 940, 636, 593, 792], () => t(2022)), (_N_E = e.O());
  },
]);
