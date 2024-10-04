import { j as t, u as z, F as H, a as b, E as j, T as J, I as K, b as q, P as U, J as Q, L as Y } from "./PinFeild-i5ZgTbAA.mjs";
import { A as tt, B as nt, C as st, c as at, h as rt, d as ot, e as lt, S as it, f as ct, g as dt, k as ut, i as ft } from "./PinFeild-i5ZgTbAA.mjs";
import { T as ee, F as te, C as A, B as ne, A as se, E as ae, O as re, S as oe, N as le, a as ie, P as ce, D as de, R as ue, b as fe, I as me } from "./Tabs-BH9QqYNv.mjs";
import { c as gt, p as ht, r as pt, d as bt, e as wt, f as vt, n as yt, h as xt, i as Ct, j as Nt, K as kt, L as Ft, M as It, l as Lt, m as Mt, q as St, t as Et, u as Tt, k as At, v as Dt, w as jt, G as $t, x as zt, y as Vt, z as Bt, V as Ot, g as Pt, o as Rt, s as Xt } from "./Tabs-BH9QqYNv.mjs";
import { B as Kt, C as Zt } from "./Card-Bgu-Prmj.mjs";
import { t as h, f as ge, a as he, S as V, r as pe, b as be, c as we, d as ve, D as ye, s as B, e as xe, g as Ce } from "./index-BclG5w1X.mjs";
import { s as Z, u as F, a as S, b as k, h as Ne, c as D, d as O, f as P, e as E } from "./index-D4efwQAm.mjs";
import L, { useRef as ke, useState as Fe, useMemo as M, useCallback as I, useEffect as Ie } from "react";
import { allIcons as R } from "./apis.js";
function $e({ children: e }) {
  return /* @__PURE__ */ t("div", { className: "flex justify-center items-center px-3 w-full window-dragged h-full text-center capitalize overflow-hidden", children: e });
}
const ze = () => {
  const e = Z.useOneFeild("window/dark.boolean", "value"), o = F(), [a] = z("toggle to light"), [i] = z("toggle to dark");
  return /* @__PURE__ */ t(
    ee,
    {
      title: (e.get ? a : i) ?? void 0,
      position: {
        x: "left",
        y: "bottom"
      },
      className: "flex items-center",
      children: /* @__PURE__ */ t(
        "button",
        {
          tabIndex: -1,
          className: h(`
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
            ...o({
              backgroundColor: "primary.background",
              borderColor: "borders"
            })
          },
          children: /* @__PURE__ */ t(
            "span",
            {
              className: h(
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
                ...o("primary.background", {
                  borderColor: "borders"
                })
              },
              children: /* @__PURE__ */ t(H, { icon: e.get ? ge : he })
            }
          )
        }
      )
    }
  );
}, T = ({ time: e }) => /* @__PURE__ */ t("span", { className: "font-mono", children: e >= 10 ? e : `0${e}` }), X = "visibility/timer.boolean";
function Ve() {
  const e = S(X), o = k(null);
  L.useEffect(() => {
    const r = setInterval(() => {
      const s = /* @__PURE__ */ new Date();
      o.set(s);
    }, 1e3);
    return () => {
      clearInterval(r);
    };
  }, []);
  const a = S("preferences/animation.boolean"), n = {
    ...F()("secondary.background", {
      borderColor: "borders",
      color: "focus.text"
    })
  };
  return /* @__PURE__ */ b(
    "div",
    {
      className: h(
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
        a && `
          transition-[transform]
          duration-200
        `
      ),
      onClick: () => {
        Z.setOneFeild(X, "value", !e);
      },
      style: n,
      children: [
        o.get && /* @__PURE__ */ b(j, { children: [
          /* @__PURE__ */ t(T, { time: o.get.getHours() }),
          ":",
          /* @__PURE__ */ t(T, { time: o.get.getMinutes() }),
          ":",
          /* @__PURE__ */ t(T, { time: o.get.getSeconds() })
        ] }),
        !o.get && /* @__PURE__ */ t(J, { content: "loading" })
      ]
    }
  );
}
function Be({
  "aria-selected": e,
  children: o,
  className: a,
  icon: i,
  iconClassName: n,
  onBlur: r,
  onFocus: s,
  onMouseEnter: l,
  onMouseLeave: p,
  onPointerDown: c,
  onPointerUp: w,
  style: f,
  ...y
}) {
  const d = k(!1), C = F(), m = k(!1), v = k(!1);
  return /* @__PURE__ */ b(
    "button",
    {
      onMouseEnter: (g) => {
        l == null || l(g), d.set(!0);
      },
      onMouseLeave: (g) => {
        p == null || p(g), d.set(!1), v.set(!1);
      },
      onFocus: (g) => {
        s == null || s(g), m.set(!0);
      },
      onBlur: (g) => {
        r == null || r(g), m.set(!1);
      },
      onPointerDown: (g) => {
        c == null || c(g), v.set(!0);
      },
      onPointerUp: (g) => {
        w == null || w(g), v.get && v.set(!1);
      },
      ...y,
      style: {
        ...C(
          v.get && "gray.opacity.2",
          d.get && "gray.opacity",
          m.get && {
            outlineColor: "primary"
          }
        ),
        ...f
      },
      className: h(
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
        a
      ),
      children: [
        /* @__PURE__ */ t(K, { iconClassName: n, icon: i }),
        o,
        /* @__PURE__ */ t(
          "div",
          {
            className: h(
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
              d.get && "left-full"
            ),
            style: {
              ...C({
                background: Ne("to right", "transparent", "gray.opacity", "transparent")
              })
            }
          }
        )
      ]
    }
  );
}
function Oe({ position: e, style: o, className: a, children: i, ...n }) {
  const r = F();
  return /* @__PURE__ */ t(
    "div",
    {
      style: {
        left: e ? `${e[0]}px` : "",
        top: e ? `${e[1]}px` : ""
      },
      className: h(
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
      children: /* @__PURE__ */ b(
        "div",
        {
          ...n,
          tabIndex: 1,
          className: h(
            `
            ml-[-3px]
            rounded-lg
            border
            border-solid
            border-transparent
            relative
          `,
            a
          ),
          style: {
            ...r({
              borderColor: "borders",
              backgroundColor: "secondary.background",
              boxShadow: D([
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
            i,
            /* @__PURE__ */ t(
              "span",
              {
                className: h(`
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
                  ...r({
                    borderRightColor: "secondary.background"
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
const Pe = ({ state: e, config: o = {}, id: a }) => {
  const i = ke(null), [n, r] = Fe(!1), s = o.min || 0, l = o.max || 100, p = o.isFloat || !1, c = M(() => {
    var u;
    return (u = i.current) == null ? void 0 : u.getBoundingClientRect();
  }, [n]), w = I(
    (u) => {
      if (c) {
        const N = Math.max(0, Math.min(1, u / c.width));
        let x = s + N * (l - s);
        x = p ? +x.toFixed(2) : Math.round(x), e.set(x);
      }
    },
    [s, l, p, c, e]
  ), f = I(
    (u) => {
      if (!n) return;
      const N = u.touches[0].clientX - ((c == null ? void 0 : c.left) || 0);
      w(N);
    },
    [n, w, c]
  ), y = I(
    (u) => {
      if (!n) return;
      const N = u.clientX - ((c == null ? void 0 : c.left) || 0);
      w(N);
    },
    [n, w, c]
  ), d = I(
    (u) => {
      r(!0), f(u.nativeEvent);
    },
    [f]
  ), C = I(
    (u) => {
      r(!0), y(u.nativeEvent);
    },
    [y]
  ), m = I(() => r(!1), []), v = I(() => r(!1), []);
  Ie(() => (n ? (window.addEventListener("touchmove", f), window.addEventListener("mousemove", y), window.addEventListener("touchend", m), window.addEventListener("mouseup", v), document.body.style.cursor = "grabbing") : (window.removeEventListener("touchmove", f), window.removeEventListener("mousemove", y), window.removeEventListener("touchend", m), window.removeEventListener("mouseup", v), document.body.style.cursor = "auto"), () => {
    window.removeEventListener("touchmove", f), window.removeEventListener("mousemove", y), window.removeEventListener("touchend", m), window.removeEventListener("mouseup", v), document.body.style.cursor = "auto";
  }), [n, f, y, m, v]);
  const g = F(), W = M(() => e.get.toString(), [e.get]), $ = M(() => (e.get - s) / (l - s) * 100, [e.get, s, l]), _ = M(() => {
    const u = o.marked || {};
    return Object.keys(u).map(Number).sort((x, G) => x - G).map((x) => ({
      key: x,
      value: u[x],
      left: (x - s) / (l - s) * 100
    }));
  }, [o.marked, s, l]);
  return L.useEffect(() => {
    e.get < s ? e.set(s) : e.get > l && e.set(l);
  }, [s, l, e.get]), /* @__PURE__ */ b(
    "div",
    {
      tabIndex: 1,
      onKeyDown: (u) => {
        const N = new V("arrowright"), x = new V("arrowleft");
        N.test(u) && e.get < l ? e.set(e.get + 1) : x.test(u) && e.get > s && e.set(e.get - 1);
      },
      className: "flex flex-col items-center w-full min-w-[150px] select-none",
      children: [
        /* @__PURE__ */ b(
          "div",
          {
            ref: i,
            id: a,
            style: { ...g("gray.opacity") },
            className: `relative rounded-lg w-full h-[2px] cursor-${n ? "grabbing" : "grab"}`,
            onTouchStart: d,
            onMouseDown: C,
            children: [
              /* @__PURE__ */ t("div", { className: "absolute rounded-lg h-[2px]", style: { ...g("primary"), width: `${$}%` } }),
              /* @__PURE__ */ t(
                "div",
                {
                  className: "top-1/2 absolute rounded-full w-4 h-4 transform -translate-y-1/2",
                  style: { ...g("primary"), left: `calc(${Math.max($, 0)}% - 8px)` }
                }
              ),
              _.map((u, N) => /* @__PURE__ */ t(
                "div",
                {
                  className: "top-1/2 absolute rounded-full w-[3px] h-4 transform -translate-x-1/2 -translate-y-1/2",
                  style: {
                    backgroundColor: u.value,
                    left: u.left + "%"
                  }
                },
                N
              ))
            ]
          }
        ),
        o.showValue && /* @__PURE__ */ t("div", { className: "mt-2", children: W })
      ]
    }
  );
};
function Re({ length: e = 4, starts: o = e, onSubmit: a }) {
  const i = F();
  return /* @__PURE__ */ t(j, { children: pe(e).map((n, r) => /* @__PURE__ */ t(
    H,
    {
      style: {
        ...i({
          color: "starts.color"
        })
      },
      onClick: (s) => {
        a == null || a(r);
      },
      className: "transform hover:scale-150 transition-tansform duration-200",
      icon: o < n ? be : we
    },
    n
  )) });
}
const Xe = ({ className: e, children: o, ...a }) => {
  const i = F(), n = S("preferences/animation.boolean");
  return /* @__PURE__ */ b(
    "button",
    {
      ...a,
      style: {
        ...i({
          color: "primary"
        })
      },
      className: h("styled-btn", n && "transition-transform", e),
      children: [
        /* @__PURE__ */ b("span", { className: h("styled-btn-content", n && "transition-all duration-[0.5s]"), children: [
          /* @__PURE__ */ t("span", { className: h("before", n && "transition-all duration-[0.5s]") }),
          /* @__PURE__ */ t("span", { className: h("after", n && "transition-all duration-[0.5s]") }),
          o
        ] }),
        /* @__PURE__ */ t(
          "span",
          {
            style: {
              ...i("primary", {
                boxShadow: D(
                  [5, 15, 30, 60].map((r) => ({
                    colorId: "primary",
                    blur: r
                  }))
                )
              })
            },
            className: h("styled-btn-before", n && "transition-all duration-[0.5s]")
          }
        ),
        /* @__PURE__ */ t(
          "span",
          {
            className: h("styled-btn-after", n && "transition-all duration-[0.5s]"),
            style: {
              ...i("secondary", {
                boxShadow: D(
                  [5, 15, 30, 60].map((r) => ({
                    colorId: "secondary",
                    blur: r
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
function Le({ string: e = "expmle", time: o = 10 }) {
  const a = k(e), i = k(""), n = k(!0);
  return L.useEffect(() => {
    const r = a.get, s = ve(r.split("").filter(Boolean));
    n.set(!0);
    let l = 0, p = 0;
    const c = setInterval(function() {
      if (l >= r.length) {
        n.set(!1), clearInterval(c);
        return;
      }
      i.set(`${r.slice(0, l)}${s[p]}`), s[p] == r[l] ? (l++, p = 0) : p++;
    }, o);
    return function() {
      n.set(!1), clearInterval(c);
    };
  }, [a.get]), {
    state: a,
    value: i.get,
    isLoading: n.get
  };
}
const He = ({ content: e, time: o }) => {
  const { state: a, value: i } = Le({
    time: o,
    string: e
  });
  return L.useEffect(() => {
    a.set(e || "");
  }, [e]), /* @__PURE__ */ t(j, { children: i });
};
function Ke({ inputName: e, defaultContent: o, value: a, setValue: i, visibility: n, setVisibility: r, controls: s, placeholder: l }) {
  const p = k(!1), c = `focus-input-update-${e}`, w = `escape-input-update-${e}`;
  O(
    c,
    async () => {
      var d;
      r(!0), P.setOneFeild(e, "value", a || ""), await new ye().start(100), B(e), (d = document.getElementById(e)) == null || d.select();
    },
    [a, r]
  );
  const f = P.getOneFeild(e, "value");
  O(
    w,
    () => {
      if (f == null)
        return;
      if (!Object.keys(s || {}).every((C) => {
        try {
          const m = new RegExp(C);
          return !!f.match(m);
        } catch {
          return !0;
        }
      })) {
        B(e);
        return;
      }
      r(!1), i(f);
    },
    [f, s]
  );
  const y = F();
  return /* @__PURE__ */ t("div", { className: "p-2 group", children: /* @__PURE__ */ b("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ t("h1", { className: "truncate", hidden: !!n, children: a || o }),
    n && /* @__PURE__ */ t(
      te,
      {
        placeholder: l,
        controls: s,
        className: "p-1",
        inputName: e,
        onBlur: () => {
          E(w);
        },
        style: {
          ...y(p.get && { borderColor: "error" })
        },
        onKeyDown: (d) => {
          d.key = d.key.toLowerCase(), ["enter", "tab"].includes(d.key) && (d.stopPropagation(), d.preventDefault(), d.currentTarget.blur());
        }
      }
    ),
    /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
      A,
      {
        className: "group-hover:visible invisible",
        icon: n ? xe : Ce,
        onPointerDown: () => {
          n ? E(w) : E(c);
        }
      }
    ) })
  ] }) });
}
function Ze({ ref: e, position: [o, a] = [0, 0], children: i, style: n, className: r, ...s }) {
  return /* @__PURE__ */ t(
    "div",
    {
      ref: e,
      ...s,
      style: {
        ...n,
        left: o,
        top: a
      },
      className: h("transition-[left,top] duration-300", r, "fixed"),
      children: i
    }
  );
}
function We() {
  return /* @__PURE__ */ t("div", { "aria-label": "window-controls", className: "flex text-md" });
}
const _e = ({ ...e }) => /* @__PURE__ */ t("span", { className: "w-[40px] h-full inline-flex items-center justify-center transition-[background]", ...e, tabIndex: -1 }), Ge = ({ color: e }) => /* @__PURE__ */ t("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ t("path", { className: "transition-[fill]", fill: e, d: "M 0,5 10,5 10,6 0,6 Z" }) }), Je = ({ color: e }) => /* @__PURE__ */ t("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ t("path", { className: "transition-[fill]", fill: e, d: "m 2,1e-5 0,2 -2,0 0,8 8,0 0,-2 2,0 0,-8 z m 1,1 6,0 0,6 -1,0 0,-5 -5,0 z m -2,2 6,0 0,6 -6,0 z" }) }), qe = ({ color: e }) => /* @__PURE__ */ t("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ t("path", { className: "transition-[fill]", fill: e, d: "M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z" }) }), Ue = ({ color: e }) => /* @__PURE__ */ t("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ t("path", { className: "transition-[fill]", fill: e, d: "M 0,0 0,10 10,10 10,0 Z M 1,1 9,1 9,9 1,9 Z" }) });
function Me({ value: e, onChange: o, type: a, config: i, id: n }) {
  const r = i, s = {
    get: e,
    set: o
  };
  return /* @__PURE__ */ b("div", { className: "p-2", children: [
    a == "boolean" && /* @__PURE__ */ t(ne, { id: n, state: s, config: r }),
    a == "array" && /* @__PURE__ */ t(se, { id: n, state: s, config: r }),
    a == "enum" && /* @__PURE__ */ t(ae, { id: n, state: s, config: r }),
    a == "object" && /* @__PURE__ */ t(re, { id: n, state: s, config: r }),
    a == "string" && /* @__PURE__ */ t(oe, { id: n, state: s, config: r }),
    a == "number" && /* @__PURE__ */ t(le, { id: n, state: s, config: r }),
    a == "file" && /* @__PURE__ */ t(q, { id: n, state: s, config: r }),
    a == "filter" && /* @__PURE__ */ t(ie, { id: n, state: s, config: r }),
    a == "password" && /* @__PURE__ */ t(ce, { id: n, state: s, config: r }),
    a == "date" && /* @__PURE__ */ t(de, { id: n, state: s, config: r }),
    a == "regexp" && /* @__PURE__ */ t(ue, { id: n, state: s }),
    a == "audio" && /* @__PURE__ */ t(fe, { id: n, state: s, config: r }),
    a == "image" && /* @__PURE__ */ t(me, { id: n, state: s, config: r }),
    a == "pin" && /* @__PURE__ */ t(U, { id: n, state: s, config: r })
  ] });
}
const Qe = ({ list: e, id: o, state: a }) => {
  const i = Object.entries(e).map(([s, l]) => ({ id: s, ...l })), n = k(0);
  L.useEffect(() => {
    n.set(0);
  }, []);
  const r = S("preferences/animation.boolean");
  return /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-2 w-full", children: /* @__PURE__ */ t(
    Q,
    {
      list: i.map((s, l) => {
        const { label: p, icon: c, type: w, id: f, config: y, onNext: d } = s, C = a.get[f];
        return /* @__PURE__ */ b("div", { className: "w-full", children: [
          /* @__PURE__ */ b("div", { className: "flex justify-between items-center p-2", children: [
            /* @__PURE__ */ b("div", { className: "flex items-center gap-1", children: [
              c && /* @__PURE__ */ t(K, { icon: c }),
              /* @__PURE__ */ b("label", { htmlFor: `${f}-${l}`, className: "capitalize", children: [
                p,
                " :"
              ] })
            ] }),
            n.get == l && /* @__PURE__ */ b("div", { className: "flex items-center gap-1", children: [
              l > 0 && /* @__PURE__ */ t(
                A,
                {
                  onClick: () => {
                    n.set(l - 1);
                  },
                  icon: R.solid.faChevronUp
                }
              ),
              l + 1 < i.length && /* @__PURE__ */ t(
                A,
                {
                  onClick: () => {
                    let m = !1;
                    const v = {
                      currentIndex: n.get,
                      state: a.get,
                      stop() {
                        m = !0;
                      },
                      currentValue: C
                    };
                    d == null || d(v), !m && n.set(l + 1);
                  },
                  icon: R.solid.faChevronDown
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: h("h-[0px] flex justify-center overflow-hidden", r && "transition-[height]", l == n.get && "h-[150px]"), children: /* @__PURE__ */ t(
            Me,
            {
              type: w,
              onChange: (m) => {
                let v = typeof m == "function" ? m(C) : m;
                a.set((g) => ({
                  ...g,
                  [f]: v
                }));
              },
              id: `list-${o}-${f}`,
              config: y,
              value: C
            },
            l
          ) })
        ] }, f);
      }),
      joinComponent: /* @__PURE__ */ t(Y, {})
    }
  ) });
};
export {
  tt as Anchor,
  se as ArrayFeild,
  gt as AsyncComponent,
  nt as BallLoading,
  ht as BlurOverlay,
  ne as BooleanFeild,
  Kt as Button,
  Zt as Card,
  $e as CenterWindowDrag,
  pt as ChangableComponent,
  st as CircleLoading,
  A as CircleTip,
  qe as CloseActionIcon,
  bt as ColorsList,
  wt as ContentOfImageView,
  ze as DarkLightIcon,
  vt as DataBaseManagmentList,
  de as DateFeild,
  yt as DownOverlay,
  j as EmptyComponent,
  ae as EnumFeild,
  xt as FastList,
  te as Feild,
  q as FileFeild,
  ie as FilterFeild,
  at as Focus,
  Qe as FullField,
  Me as FullFieldRecord,
  Ve as Hours,
  K as Icon,
  Ct as Icons,
  Nt as Image,
  me as ImageFeild,
  rt as InnerTranslate,
  ot as Input,
  Q as JoinComponentBy,
  kt as KeyPanding,
  Be as LargeButton,
  Y as Line,
  lt as LineLoading,
  Ft as List,
  It as MarkDown,
  Ue as MaximizeActionIcon,
  Ge as MinimizeActionIcon,
  Lt as MultiScreenPage,
  Mt as Note,
  le as NumberFeild,
  re as ObjectFeild,
  Oe as PanelSide,
  St as Password,
  ce as PasswordFeild,
  U as PinField,
  Et as PositionView,
  Pe as RangeFeild,
  fe as RecorderFeild,
  ue as RegexpFeild,
  Tt as ResizeView,
  it as Scroll,
  ct as SeparatedViewsLine,
  dt as SeparatedViewsLineTitle,
  At as SinglePanding,
  Dt as Slot,
  Re as Starts,
  oe as StringFeild,
  Xe as StyledButton,
  jt as Tab,
  $t as Tabs,
  He as TextAnimation,
  zt as TextArea,
  ut as Tip,
  Vt as TitleProvider,
  ee as TitleView,
  J as Translate,
  Bt as Tree,
  Je as UnMaximizeActionIcon,
  Ke as UpdateData,
  Ot as ViewPage,
  Ze as ViewPanel,
  We as WindowControls,
  _e as WindowsButton,
  Pt as dateToStringForInput,
  ft as iconsFileFeild,
  Rt as objectIfPrefix,
  Xt as slotId,
  Le as useTextAnimation,
  z as useTranslate
};
