import { g as T, T as O, a as H, I as R, F as Z, C as K } from "./ViewPage-B7nrCA56.mjs";
import { A as ke, b as Se, c as Le, w as Ae, B as Te, d as De, e as je, y as ze, f as Be, h as Ee, i as Re, k as Ve, D as $e, v as Pe, E as Oe, l as He, m as Ze, n as Ke, o as We, p as _e, q as Je, U as Xe, K as qe, L as Ge, M as Qe, r as Ue, N as Ye, t as et, O as tt, P as rt, x as st, z as nt, R as at, G as ot, H as lt, S as it, J as ct, Q as dt, V as ut, W as mt, X as ft, Y as pt, Z as gt, j as ht, u as yt, s as bt } from "./ViewPage-B7nrCA56.mjs";
import { j as t, F as V, a as w, E as M, J as D } from "./Loading-BjTpGRTY.mjs";
import { B as wt, C as vt, b as Nt, I as Ct, L as It, c as Mt, S as Ft, d as kt, e as St } from "./Loading-BjTpGRTY.mjs";
import { t as f, f as W, a as _, s as L, r as $, S as j, b as J, c as X, d as q, D as G, e as Q, g as U } from "./index-CxQCU1i7.mjs";
import { s as P, u as v, a as I, b as x, h as Y, c as F, d as z, f as B, e as k } from "./index-YGVQf1XJ.mjs";
import N from "react";
function oe({ children: e }) {
  return /* @__PURE__ */ t("div", { className: "flex justify-center items-center px-3 w-full window-dragged h-full text-center capitalize overflow-hidden", children: e });
}
const le = () => {
  const e = P.useOneFeild("window/dark.boolean", "value"), r = v(), [n] = T("toggle to light"), [o] = T("toggle to dark");
  return /* @__PURE__ */ t(
    O,
    {
      title: (e.get ? n : o) ?? void 0,
      position: {
        x: "left",
        y: "bottom"
      },
      className: "flex items-center",
      children: /* @__PURE__ */ t(
        "button",
        {
          tabIndex: -1,
          className: f(`
            relative
            inline-block
            h-[20px]
            w-[40px]
            rounded-[20px]
            border
            border-solid
            border-transparent
          `),
          onClick: () => {
            e.set(!e.get);
          },
          style: {
            ...r({
              backgroundColor: "primary.background",
              borderColor: "borders"
            })
          },
          children: /* @__PURE__ */ t(
            "span",
            {
              className: f(
                `
                transition-[left]
                duration-200
                w-[20px]
                inline-flex
                items-center
                justify-center
                text-xs
                h-[20px]
                rounded-full
                absolute
                inset-y-0
                top-1/2
                -translate-y-1/2
                border-solid
                border
                border-transparent
                left-0
              `,
                e.get && "left-1/2"
              ),
              style: {
                ...r("primary.background", {
                  borderColor: "borders"
                })
              },
              children: /* @__PURE__ */ t(V, { icon: e.get ? W : _ })
            }
          )
        }
      )
    }
  );
}, S = ({ time: e }) => /* @__PURE__ */ t("span", { className: "font-mono", children: e >= 10 ? e : `0${e}` }), E = "visibility/timer.boolean";
function ie() {
  const e = I(E), r = x(null);
  N.useEffect(() => {
    const l = setInterval(() => {
      const i = /* @__PURE__ */ new Date();
      r.set(i);
    }, 1e3);
    return () => {
      clearInterval(l);
    };
  }, []);
  const n = I("preferences/animation.boolean"), s = {
    ...v()("secondry.background", {
      borderColor: "borders",
      color: "focus.text"
    })
  };
  return /* @__PURE__ */ w(
    "div",
    {
      className: f(
        `
        absolute
        cursor-pointer
        left-0
        top-1/2
        -translate-y-1/2
        w-fit
        not-italic
        font-mono
        text-3xl
        py-2
        rounded-ee-lg
        rounded-se-lg
        border-y
        border-r
        border-solid
        border-transparent
        z-[100]
        shadow-lg
        transform
        px-4
      `,
        !e && "-translate-x-[92%]",
        n && `
          transition-[transform]
          duration-200
        `
      ),
      onClick: () => {
        P.setOneFeild(E, "value", !e);
      },
      style: s,
      children: [
        r.get && /* @__PURE__ */ w(M, { children: [
          /* @__PURE__ */ t(S, { time: r.get.getHours() }),
          ":",
          /* @__PURE__ */ t(S, { time: r.get.getMinutes() }),
          ":",
          /* @__PURE__ */ t(S, { time: r.get.getSeconds() })
        ] }),
        !r.get && /* @__PURE__ */ t(H, { content: "loading" })
      ]
    }
  );
}
function ce({
  "aria-selected": e,
  children: r,
  className: n,
  icon: o,
  iconClassName: s,
  onBlur: l,
  onFocus: i,
  onMouseEnter: c,
  onMouseLeave: y,
  onPointerDown: u,
  onPointerUp: d,
  style: p,
  ...h
}) {
  const a = x(!1), m = v(), C = x(!1), b = x(!1);
  return /* @__PURE__ */ w(
    "button",
    {
      onMouseEnter: (g) => {
        c == null || c(g), a.set(!0);
      },
      onMouseLeave: (g) => {
        y == null || y(g), a.set(!1), b.set(!1);
      },
      onFocus: (g) => {
        i == null || i(g), C.set(!0);
      },
      onBlur: (g) => {
        l == null || l(g), C.set(!1);
      },
      onPointerDown: (g) => {
        u == null || u(g), b.set(!0);
      },
      onPointerUp: (g) => {
        d == null || d(g), b.get && b.set(!1);
      },
      ...h,
      style: {
        ...m(
          b.get && "gray.opacity.2",
          a.get && "gray.opacity",
          C.get && {
            outlineColor: "primary"
          }
        ),
        ...p
      },
      className: f(
        `
        outline-transparent
        -outline-offset-1
        outline-1
        p-3
        w-full
        flex
        items-center
        gap-4
        relative
        overflow-hidden
      `,
        n
      ),
      children: [
        /* @__PURE__ */ t(R, { iconClassName: s, icon: o }),
        r,
        /* @__PURE__ */ t(
          "div",
          {
            className: f(
              `
          absolute
          -top-[100px]
          h-[400px]
          pointer-events-none
          transition-[left]
          duration-1000
          -left-1/4
          w-1/4
          transform
          -rotate-45
        `,
              a.get && "left-full"
            ),
            style: {
              ...m({
                background: Y("to right", "transparent", "gray.opacity", "transparent")
              })
            }
          }
        )
      ]
    }
  );
}
function de({ position: e, style: r, className: n, children: o, ...s }) {
  const l = v();
  return /* @__PURE__ */ t(
    "div",
    {
      style: {
        left: e ? `${e[0]}px` : "",
        top: e ? `${e[1]}px` : ""
      },
      className: f(
        `
          transition-all
          duration-300
          -translate-y-1/2
          fixed
          w-[500px]
          z-[1000]
        `,
        !e && "hidden"
      ),
      children: /* @__PURE__ */ w(
        "div",
        {
          ...s,
          tabIndex: 1,
          className: f(
            `
            ml-[-3px]
            rounded-lg
            border
            border-solid
            border-transparent
            relative
          `,
            n
          ),
          style: {
            ...l({
              borderColor: "borders",
              backgroundColor: "secondry.background",
              boxShadow: F([
                {
                  colorId: "shadow.color",
                  blur: 5,
                  size: 2,
                  x: 0,
                  y: 0
                }
              ])
            })
          },
          children: [
            o,
            /* @__PURE__ */ t(
              "span",
              {
                className: f(`
            absolute
            top-1/2
            right-full
            -translate-y-1/2
            inline-block
            w-0
            h-0
            border-8
            border-solid
            border-l-transparent
            border-y-transparent
          `),
                style: {
                  ...l({
                    borderRightColor: "secondry.background"
                  })
                }
              }
            )
          ]
        }
      )
    }
  );
}
function ue({ id: e, config: r, state: n }) {
  const o = v(), s = ((r == null ? void 0 : r.match) || ".").split("-"), l = (u, d) => s.slice(0, u).reduce((h, a) => h + a.length, 0) + d, i = N.useMemo(() => {
    if (n.get)
      return n.get.toString();
  }, [n.get]), c = x(!1), y = I("preferences/animation.boolean");
  return /* @__PURE__ */ w(
    "div",
    {
      tabIndex: 1,
      onFocus: () => {
        L(e);
      },
      children: [
        /* @__PURE__ */ t(
          "input",
          {
            onFocus: () => {
              c.set(!0);
            },
            onBlur: () => {
              c.set(!1);
            },
            type: "number",
            onInput: (u) => {
              const d = u.currentTarget.value;
              if (console.log(d.includes("e")), ["e", "."].some((a) => d.includes(a)))
                return;
              const p = +d;
              if (isNaN(p))
                return;
              if (!p) {
                n.set(void 0);
                return;
              }
              let h = s.reduce((a, m) => a + m.length, 0);
              d.length <= h && n.set(+parseInt(d));
            },
            onPaste: async () => {
              const d = +navigator.clipboard.readText();
              if (isNaN(d))
                return;
              if (!d) {
                n.set(void 0);
                return;
              }
              const p = d.toString();
              if (["e", "."].some((a) => p.includes(a)))
                return;
              let h = s.reduce((a, m) => a + m.length, 0);
              p.length <= h && n.set(+parseInt(p));
            },
            id: e,
            value: n.get,
            className: "w-[0px] h-[0px]"
          }
        ),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 rounded-lg w-fit", children: /* @__PURE__ */ t(
          D,
          {
            list: s.map((u, d) => {
              const p = u.split(""), h = p.length;
              return /* @__PURE__ */ t(
                "div",
                {
                  style: {
                    ...o({
                      boxShadow: F([
                        {
                          colorId: "shadow.color",
                          blur: 4,
                          size: 0,
                          x: 0,
                          y: 5
                        }
                      ])
                    })
                  },
                  className: f("flex gap-0", y && "transition-[gap,border-radius]", c.get && "gap-1"),
                  children: /* @__PURE__ */ t(
                    D,
                    {
                      list: p.map((a, m) => /* @__PURE__ */ t(
                        "div",
                        {
                          className: f(
                            `
                          w-[40px]
                          h-[40px]
                          border-solid
                          border-transparent
                          text-lg
                          border-y
                          border-r
                          flex items-center justify-center
                        `,
                            m == 0 && "rounded-ss-lg rounded-es-lg border-l",
                            c.get && "border-x rounded-lg",
                            m + 1 == h && "rounded-se-lg rounded-ee-lg"
                          ),
                          style: {
                            ...o(
                              {
                                borderColor: "borders"
                              },
                              c.get && {
                                borderColor: "primary"
                              }
                            )
                          },
                          children: (i == null ? void 0 : i[l(d, m)]) || "."
                        },
                        m
                      )),
                      joinComponent: /* @__PURE__ */ t(M, {})
                    },
                    d
                  )
                }
              );
            }),
            joinComponent: /* @__PURE__ */ t(M, { children: "-" })
          }
        ) })
      ]
    }
  );
}
function me({ state: e, config: r = {}, id: n }) {
  const [o, s] = N.useMemo(() => {
    let a = r.min || 0, m = 10;
    return typeof r.max == "number" && (m = r.max), [a, m];
  }, [r]);
  N.useEffect(() => {
    typeof e.get == "number" && (r.max && r.max < e.get ? e.set(r.max) : r.min && r.min > e.get && e.set(r.min));
  }, [r.max, r.min, e.get]);
  const l = N.useRef(null), i = v(), c = N.useMemo(() => $(o, s), [o, s]), y = I("preferences/animation.boolean"), u = (a) => {
    if (!l.current) return;
    const { left: m, width: C } = l.current.getBoundingClientRect(), b = a.clientX - m, g = Math.max(0, Math.min(b / C, 1)), A = o + g * (s - o);
    e.set(r.isFloat ? A : Math.round(A));
  }, d = () => {
    document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", d);
  }, p = (a) => {
    u(a.nativeEvent), document.addEventListener("mousemove", u), document.addEventListener("mouseup", d);
  }, h = x(!1);
  return /* @__PURE__ */ t(
    "div",
    {
      id: n,
      tabIndex: 1,
      onKeyDown: (a) => {
        new j("arrowleft").test(a) && e.set((b) => {
          const g = b - (r.isFloat ? 0.5 : 1);
          return g <= o ? 0 : g;
        }), new j("arrowright").test(a) && e.set((b) => {
          const g = b + (r.isFloat ? 0.5 : 1);
          return g >= s ? s : g;
        });
      },
      className: f("relative rounded-md flex items-center justify-center gap-1 w-full"),
      style: {
        ...i(h.get && "primary")
      },
      onFocus: () => {
        h.set(!0);
      },
      onBlur: () => {
        h.set(!1);
      },
      children: /* @__PURE__ */ w("div", { className: "relative flex items-center rounded-full w-[300px] h-[2px]", style: i("gray.opacity"), ref: l, onMouseDown: p, children: [
        /* @__PURE__ */ t("span", { className: "top-full left-0 absolute text-center translate-y-1/2", children: o }),
        c.map((a, m) => /* @__PURE__ */ t(
          "span",
          {
            style: {
              left: `${a / c.length * 100}%`,
              width: `${1 / c.length * 100}%`
            },
            className: "flex justify-center h-[10px]",
            children: /* @__PURE__ */ t("span", { className: "inline-block w-[1px] h-full", style: i("gray.opacity", h.get && "primary") })
          },
          m
        )),
        /* @__PURE__ */ t("span", { className: "top-full right-0 absolute text-center translate-y-1/2", children: s }),
        /* @__PURE__ */ t(
          "span",
          {
            style: {
              left: `${(e.get - o) / c.length * 100}%`,
              width: `${1 / c.length * 100}%`
            },
            className: f("absolute flex justify-center h-[20px]", y && "transition-[left]"),
            children: /* @__PURE__ */ t(
              "span",
              {
                className: f("inline-flex items-center justify-center rounded-full h-full", r.showValue && "px-3 w-fit", !r.showValue && "w-[20px]"),
                style: i(
                  "gray.opacity",
                  h.get && "primary",
                  h.get && {
                    color: "primary.content"
                  }
                ),
                children: r.showValue && e.get.toFixed(1)
              }
            )
          }
        )
      ] })
    }
  );
}
function fe({ length: e = 4, starts: r = e, onSubmit: n }) {
  const o = v();
  return /* @__PURE__ */ t(M, { children: $(e).map((s, l) => /* @__PURE__ */ t(
    V,
    {
      style: {
        ...o({
          color: "starts.color"
        })
      },
      onClick: (i) => {
        n == null || n(l);
      },
      className: "transform hover:scale-150 transition-tansform duration-200",
      icon: r < s ? J : X
    },
    s
  )) });
}
const pe = ({ className: e, children: r, ...n }) => {
  const o = v(), s = I("preferences/animation.boolean");
  return /* @__PURE__ */ w(
    "button",
    {
      ...n,
      style: {
        ...o({
          color: "primary"
        })
      },
      className: f("styled-btn", s && "transition-transform", e),
      children: [
        /* @__PURE__ */ w("span", { className: f("styled-btn-content", s && "transition-all duration-[0.5s]"), children: [
          /* @__PURE__ */ t("span", { className: f("before", s && "transition-all duration-[0.5s]") }),
          /* @__PURE__ */ t("span", { className: f("after", s && "transition-all duration-[0.5s]") }),
          r
        ] }),
        /* @__PURE__ */ t(
          "span",
          {
            style: {
              ...o("primary", {
                boxShadow: F(
                  [5, 15, 30, 60].map((l) => ({
                    colorId: "primary",
                    blur: l
                  }))
                )
              })
            },
            className: f("styled-btn-before", s && "transition-all duration-[0.5s]")
          }
        ),
        /* @__PURE__ */ t(
          "span",
          {
            className: f("styled-btn-after", s && "transition-all duration-[0.5s]"),
            style: {
              ...o("secondry", {
                boxShadow: F(
                  [5, 15, 30, 60].map((l) => ({
                    colorId: "secondry",
                    blur: l
                  }))
                )
              })
            }
          }
        )
      ]
    }
  );
};
function ge({ children: e, icon: r, className: n, iconClassName: o, isActive: s, style: l, ...i }) {
  const c = x(!1);
  N.useEffect(() => () => {
    c.set(!1);
  }, []);
  const y = v(), u = I("preferences/animation.boolean");
  return /* @__PURE__ */ w(
    "span",
    {
      onMouseEnter: () => {
        c.set(!0);
      },
      onMouseLeave: () => {
        c.set(!1);
      },
      style: {
        ...y(
          "secondry.background",
          s && "primary",
          s && {
            color: "primary.content"
          },
          {
            borderColor: "borders"
          },
          {
            boxShadow: F([
              {
                colorId: "shadow.color",
                blur: 20,
                size: 3,
                x: 0,
                y: 4
              }
            ])
          }
        ),
        ...l
      },
      className: f("flex items-center justify-center p-2 rounded-[15%] cursor-pointer border border-solid active:scale-95", u && "transition-[background,color,transform]", n),
      ...i,
      children: [
        /* @__PURE__ */ t(R, { iconClassName: o, icon: r }),
        e
      ]
    }
  );
}
function ee({ string: e = "expmle", time: r = 10 }) {
  const n = x(e), o = x(""), s = x(!0);
  return N.useEffect(() => {
    const l = n.get, i = q(l.split("").filter(Boolean));
    s.set(!0);
    let c = 0, y = 0;
    const u = setInterval(function() {
      if (c >= l.length) {
        s.set(!1), clearInterval(u);
        return;
      }
      o.set(`${l.slice(0, c)}${i[y]}`), i[y] == l[c] ? (c++, y = 0) : y++;
    }, r);
    return function() {
      s.set(!1), clearInterval(u);
    };
  }, [n.get]), {
    state: n,
    value: o.get,
    isLoading: s.get
  };
}
const he = ({ content: e, time: r }) => {
  const { state: n, value: o } = ee({
    time: r,
    string: e
  });
  return N.useEffect(() => {
    n.set(e || "");
  }, [e]), /* @__PURE__ */ t(M, { children: o });
};
function ye({ inputName: e, defaultContent: r, value: n, setValue: o, visibility: s, setVisibility: l, controls: i, placeholder: c }) {
  const y = x(!1), u = `focus-input-update-${e}`, d = `escape-input-update-${e}`;
  z(
    u,
    async () => {
      var a;
      l(!0), B.setOneFeild(e, "value", n || ""), await new G().start(100), L(e), (a = document.getElementById(e)) == null || a.select();
    },
    [n, l]
  );
  const p = B.getOneFeild(e, "value");
  z(
    d,
    () => {
      if (p == null)
        return;
      if (!Object.keys(i || {}).every((m) => {
        try {
          const C = new RegExp(m);
          return !!p.match(C);
        } catch {
          return !0;
        }
      })) {
        L(e);
        return;
      }
      l(!1), o(p);
    },
    [p, i]
  );
  const h = v();
  return /* @__PURE__ */ t("div", { className: "p-2 group", children: /* @__PURE__ */ w("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ t("h1", { className: "truncate", hidden: !!s, children: n || r }),
    s && /* @__PURE__ */ t(
      Z,
      {
        placeholder: c,
        controls: i,
        className: "p-1",
        inputName: e,
        onBlur: () => {
          k(d);
        },
        style: {
          ...h(y.get && { borderColor: "error" })
        },
        onKeyDown: (a) => {
          a.key = a.key.toLowerCase(), ["enter", "tab"].includes(a.key) && (a.stopPropagation(), a.preventDefault(), a.currentTarget.blur());
        }
      }
    ),
    /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
      K,
      {
        className: "group-hover:visible invisible",
        icon: s ? Q : U,
        onPointerDown: () => {
          s ? k(d) : k(u);
        }
      }
    ) })
  ] }) });
}
function be({ ref: e, position: [r, n] = [0, 0], children: o, style: s, className: l, ...i }) {
  return /* @__PURE__ */ t(
    "div",
    {
      ref: e,
      ...i,
      style: {
        ...s,
        left: r,
        top: n
      },
      className: f("transition-[left,top] duration-300", l, "fixed"),
      children: o
    }
  );
}
function xe() {
  return /* @__PURE__ */ t("div", { "aria-label": "window-controls", className: "flex text-md" });
}
const we = ({ ...e }) => /* @__PURE__ */ t("span", { className: "w-[40px] h-full inline-flex items-center justify-center transition-[background]", ...e, tabIndex: -1 }), ve = ({ color: e }) => /* @__PURE__ */ t("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ t("path", { className: "transition-[fill]", fill: e, d: "M 0,5 10,5 10,6 0,6 Z" }) }), Ne = ({ color: e }) => /* @__PURE__ */ t("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ t("path", { className: "transition-[fill]", fill: e, d: "m 2,1e-5 0,2 -2,0 0,8 8,0 0,-2 2,0 0,-8 z m 1,1 6,0 0,6 -1,0 0,-5 -5,0 z m -2,2 6,0 0,6 -6,0 z" }) }), Ce = ({ color: e }) => /* @__PURE__ */ t("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ t("path", { className: "transition-[fill]", fill: e, d: "M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z" }) }), Ie = ({ color: e }) => /* @__PURE__ */ t("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ t("path", { className: "transition-[fill]", fill: e, d: "M 0,0 0,10 10,10 10,0 Z M 1,1 9,1 9,9 1,9 Z" }) });
export {
  ke as Anchor,
  Se as ArrayFeild,
  Le as AsyncComponent,
  wt as BallLoading,
  Ae as BlurOverlay,
  Te as BooleanFeild,
  De as Button,
  je as Card,
  oe as CenterWindowDrag,
  ze as ChangableComponent,
  vt as CircleLoading,
  K as CircleTip,
  Ce as CloseActionIcon,
  Be as ColorsList,
  Ee as ContentOfImageView,
  le as DarkLightIcon,
  Re as DataBaseManagmentList,
  Ve as DateFeild,
  $e as DialogBoxLayout,
  Pe as DownOverlay,
  M as EmptyComponent,
  Oe as EnumFeild,
  He as FastList,
  Z as Feild,
  Ze as FileFeild,
  Ke as FilterFeild,
  Nt as Focus,
  ie as Hours,
  R as Icon,
  We as Icons,
  _e as Image,
  Je as ImageFeild,
  Xe as InnerText,
  Ct as Input,
  D as JoinComponentBy,
  qe as KeyPanding,
  ce as LargeButton,
  It as Line,
  Mt as LineLoading,
  Ge as List,
  Qe as MarkDown,
  Ie as MaximizeActionIcon,
  ve as MinimizeActionIcon,
  Ue as MultiScreenPage,
  Ye as Note,
  et as NumberFeild,
  tt as ObjectFeild,
  de as PanelSide,
  rt as Password,
  st as PasswordFeild,
  ue as PinFeild,
  nt as PositionView,
  me as RangeFeild,
  at as RecorderFeild,
  ot as RegexpFeild,
  lt as ResizeView,
  Ft as Scroll,
  kt as SeparatedViewsLine,
  St as SeparatedViewsLineTitle,
  it as SinglePanding,
  ct as Slot,
  fe as Starts,
  dt as StringFeild,
  pe as StyledButton,
  ge as Tab,
  H as Text,
  he as TextAnimation,
  ut as TextArea,
  mt as Tip,
  ft as TitleProvider,
  O as TitleView,
  pt as Tree,
  Ne as UnMaximizeActionIcon,
  ye as UpdateData,
  gt as ViewPage,
  be as ViewPanel,
  xe as WindowControls,
  we as WindowsButton,
  ht as dateToStringForInput,
  T as getText,
  yt as objectIfPrefix,
  bt as slotId,
  ee as useTextAnimation
};
