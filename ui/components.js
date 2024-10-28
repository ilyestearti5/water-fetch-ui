import { j as s, a as C, u as B, F as H, b as J, P as q, J as G, I as X, L as Q, E as K, T as Y, S as U } from "./SeparatedComponents-BcE_KymC.mjs";
import { A as Ue, B as et, f as tt, C as st, c as at, l as rt, d as nt, e as lt, g as ot, h as it, k as ct, i as dt } from "./SeparatedComponents-BcE_KymC.mjs";
import { T as ee, B as te, A as se, E as ae, O as re, S as ne, N as le, F as oe, P as ie, D as ce, R as de, a as ue, I as fe, C as j, b as me } from "./ViewPage-BVFt5x2t.mjs";
import { c as ft, p as mt, q as gt, d as ht, e as pt, n as bt, f as wt, i as vt, j as yt, K as xt, L as Ct, M as kt, l as Nt, m as Ft, h as It, r as St, t as Mt, k as Tt, u as Lt, v as At, w as Et, x as jt, y as zt, z as Bt, V as Vt, g as $t, o as Ot, s as Rt } from "./ViewPage-BVFt5x2t.mjs";
import { B as Ht, C as Xt } from "./Card-C9tcykD9.mjs";
import p from "react";
import { u as I, a as k, h as S, s as P, b as M, c as ge, d as he, e as V, f as $, g as A } from "./index-BxYKyuvy.mjs";
import { m as pe, t as v, r as W, f as be, a as we, S as O, b as ve, D as ye, s as R, c as xe, d as Ce } from "./index-DdFCMvT_.mjs";
import { allIcons as T } from "./apis.js";
function Ae({ children: e }) {
  return /* @__PURE__ */ s("div", { className: "flex justify-center items-center px-3 w-full window-dragged h-full text-center capitalize overflow-hidden", children: e });
}
const Ee = ({ children: e, className: l, style: n, onPointerDown: i, onPointerLeave: t, onPointerUp: a, onMouseEnter: r, onMouseLeave: c, ...d }) => {
  const g = I(), m = k(!1), u = k(!1), y = k(!1);
  p.useEffect(() => () => {
    m.set(!1), u.set(!1), y.set(!1);
  }, []);
  const f = p.useMemo(() => ({
    ...g(
      m.get && {
        boxShadow: S([
          {
            colorId: "shadow.color",
            isInset: !0,
            blur: 1
          }
        ])
      }
    ),
    ...n
  }), [g, m.get, S, n]);
  return /* @__PURE__ */ C(
    "div",
    {
      onFocus: () => {
        m.set(!0);
      },
      onBlur: () => {
        m.set(!1);
      },
      onMouseEnter: (o) => {
        y.set(!0), r == null || r(o);
      },
      onMouseLeave: (o) => {
        y.set(!1), c == null || c(o);
      },
      onPointerDown: (o) => {
        u.set(!0), i == null || i(o);
      },
      onPointerUp: (o) => {
        u.set(!1), a == null || a(o);
      },
      onPointerLeave: (o) => {
        u.set(!1), t == null || t(o);
      },
      style: {
        ...pe(f)
      },
      className: v("btn select-none w-full relative overflow-hidden transition-[transform]", l),
      ...d,
      children: [
        W(1, 3).map((o) => /* @__PURE__ */ s(
          "i",
          {
            className: "btn_bg",
            style: {
              ...g("opacity")
            }
          },
          o
        )),
        /* @__PURE__ */ s("div", { className: "w-full h-full btn-content", children: e })
      ]
    }
  );
}, je = () => {
  const e = P.useOneFeild("window/dark.boolean", "value"), l = I(), [n] = B("toggle to light"), [i] = B("toggle to dark");
  return /* @__PURE__ */ s(
    ee,
    {
      title: (e.get ? n : i) ?? void 0,
      position: {
        x: "left",
        y: "bottom"
      },
      className: "flex items-center",
      children: /* @__PURE__ */ s(
        "button",
        {
          tabIndex: -1,
          className: v(`
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
            ...l({
              backgroundColor: "primary.background",
              borderColor: "borders"
            })
          },
          children: /* @__PURE__ */ s(
            "span",
            {
              className: v(
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
                ...l("primary.background", {
                  borderColor: "borders"
                })
              },
              children: /* @__PURE__ */ s(H, { icon: e.get ? be : we })
            }
          )
        }
      )
    }
  );
};
function ke({ value: e, onChange: l, type: n, config: i, id: t }) {
  const a = i, r = {
    get: e,
    set: l
  };
  return /* @__PURE__ */ C("div", { className: "p-2", children: [
    n == "boolean" && /* @__PURE__ */ s(te, { id: t, state: r, config: a }),
    n == "array" && /* @__PURE__ */ s(se, { id: t, state: r, config: a }),
    n == "enum" && /* @__PURE__ */ s(ae, { id: t, state: r, config: a }),
    n == "object" && /* @__PURE__ */ s(re, { id: t, state: r, config: a }),
    n == "string" && /* @__PURE__ */ s(ne, { id: t, state: r, config: a }),
    n == "number" && /* @__PURE__ */ s(le, { id: t, state: r, config: a }),
    n == "file" && /* @__PURE__ */ s(J, { id: t, state: r, config: a }),
    n == "filter" && /* @__PURE__ */ s(oe, { id: t, state: r, config: a }),
    n == "password" && /* @__PURE__ */ s(ie, { id: t, state: r, config: a }),
    n == "date" && /* @__PURE__ */ s(ce, { id: t, state: r, config: a }),
    n == "regexp" && /* @__PURE__ */ s(de, { id: t, state: r }),
    n == "audio" && /* @__PURE__ */ s(ue, { id: t, state: r, config: a }),
    n == "image" && /* @__PURE__ */ s(fe, { id: t, state: r, config: a }),
    n == "pin" && /* @__PURE__ */ s(q, { id: t, state: r, config: a })
  ] });
}
const ze = ({ list: e, id: l, state: n }) => {
  const i = Object.entries(e).map(([r, c]) => ({ id: r, ...c })), t = k(0);
  p.useEffect(() => {
    t.set(0);
  }, []);
  const a = M("preferences/animation.boolean");
  return /* @__PURE__ */ s("div", { className: "flex flex-col items-center gap-2 w-full", children: /* @__PURE__ */ s(
    G,
    {
      list: i.map((r, c) => {
        const { label: d, icon: g, type: m, id: u, config: y, onNext: f } = r, o = n.get[u];
        return /* @__PURE__ */ C("div", { className: "w-full", children: [
          /* @__PURE__ */ C("div", { className: "flex justify-between items-center p-2", children: [
            /* @__PURE__ */ C("div", { className: "flex items-center gap-1", children: [
              g && /* @__PURE__ */ s(X, { icon: g }),
              /* @__PURE__ */ C("label", { htmlFor: `${u}-${c}`, className: "capitalize", children: [
                d,
                " :"
              ] })
            ] }),
            t.get == c && /* @__PURE__ */ C("div", { className: "flex items-center gap-1", children: [
              c > 0 && /* @__PURE__ */ s(
                j,
                {
                  onClick: () => {
                    t.set(c - 1);
                  },
                  icon: T.solid.faChevronUp
                }
              ),
              c + 1 < i.length && /* @__PURE__ */ s(
                j,
                {
                  onClick: () => {
                    let h = !1;
                    const x = {
                      currentIndex: t.get,
                      state: n.get,
                      stop() {
                        h = !0;
                      },
                      currentValue: o
                    };
                    f == null || f(x), !h && t.set(c + 1);
                  },
                  icon: T.solid.faChevronDown
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ s("div", { className: v("h-[0px] flex justify-center overflow-hidden", a && "transition-[height]", c == t.get && "h-[150px]"), children: /* @__PURE__ */ s(
            ke,
            {
              type: m,
              onChange: (h) => {
                let x = typeof h == "function" ? h(o) : h;
                n.set((w) => ({
                  ...w,
                  [u]: x
                }));
              },
              id: `list-${l}-${u}`,
              config: y,
              value: o
            },
            c
          ) })
        ] }, u);
      }),
      joinComponent: /* @__PURE__ */ s(Q, {})
    }
  ) });
}, Be = ({ state: e, config: l = {}, id: n }) => {
  const i = p.useRef(null), t = k(!1), a = l.min || 0, r = l.max || 100, c = l.isFloat || !1, d = p.useMemo(() => {
    var b;
    return (b = i.current) == null ? void 0 : b.getBoundingClientRect();
  }, [t.get]), g = p.useCallback(
    (b) => {
      if (d) {
        const F = Math.max(0, Math.min(1, b / d.width));
        let N = a + F * (r - a);
        N = c ? +N.toFixed(2) : Math.round(N), e.set(N);
      }
    },
    [a, r, c, d, e]
  ), m = p.useCallback(
    (b) => {
      if (!t.get) return;
      const F = b.touches[0].clientX - ((d == null ? void 0 : d.left) || 0);
      g(F);
    },
    [t.get, g, d]
  ), u = p.useCallback(
    (b) => {
      if (!t.get) return;
      const F = b.clientX - ((d == null ? void 0 : d.left) || 0);
      g(F);
    },
    [t.get, g, d]
  ), y = p.useCallback(
    (b) => {
      t.set(!0), m(b.nativeEvent);
    },
    [m]
  ), f = p.useCallback(
    (b) => {
      t.set(!0), u(b.nativeEvent);
    },
    [u]
  ), o = p.useCallback(() => t.set(!1), []), h = p.useCallback(() => t.set(!1), []);
  p.useEffect(() => (t.get ? (window.addEventListener("touchmove", m), window.addEventListener("mousemove", u), window.addEventListener("touchend", o), window.addEventListener("mouseup", h), document.body.style.cursor = "grabbing") : (window.removeEventListener("touchmove", m), window.removeEventListener("mousemove", u), window.removeEventListener("touchend", o), window.removeEventListener("mouseup", h), document.body.style.cursor = "auto"), () => {
    window.removeEventListener("touchmove", m), window.removeEventListener("mousemove", u), window.removeEventListener("touchend", o), window.removeEventListener("mouseup", h), document.body.style.cursor = "auto";
  }), [t.get, m, u, o, h]);
  const x = I(), w = p.useMemo(() => e.get.toString(), [e.get]), z = p.useMemo(() => (e.get - a) / (r - a) * 100, [e.get, a, r]), Z = p.useMemo(() => {
    const b = l.marked || {};
    return Object.keys(b).map(Number).sort((N, _) => N - _).map((N) => ({
      key: N,
      value: b[N],
      left: (N - a) / (r - a) * 100
    }));
  }, [l.marked, a, r]);
  p.useEffect(() => {
    e.get < a ? e.set(a) : e.get > r && e.set(r);
  }, [a, r, e.get]);
  const L = k(!1);
  return /* @__PURE__ */ C(
    "div",
    {
      tabIndex: 1,
      onFocus: () => L.set(!0),
      onBlur: () => L.set(!1),
      onKeyDown: (b) => {
        const F = new O("arrowright"), N = new O("arrowleft");
        F.test(b) && e.get < r ? e.set(e.get + (l.steps || 1)) : N.test(b) && e.get > a && e.set(e.get - (l.steps || 1));
      },
      className: "flex flex-col items-center w-full min-w-[150px] select-none",
      children: [
        /* @__PURE__ */ C(
          "div",
          {
            ref: i,
            id: n,
            style: {
              ...x(
                "gray.opacity",
                L.get && {
                  outlineColor: "primary"
                }
              )
            },
            className: `relative outline-1 outline-offset-1 outline-solid rounded-lg w-full h-[2px] cursor-${t.get ? "grabbing" : "grab"}`,
            onTouchStart: y,
            onMouseDown: f,
            children: [
              /* @__PURE__ */ s("div", { className: "absolute rounded-lg h-[2px]", style: { ...x("primary"), width: `${z}%` } }),
              /* @__PURE__ */ s(
                "div",
                {
                  className: "top-1/2 absolute rounded-full w-4 h-4 transform -translate-y-1/2",
                  style: { ...x("primary"), left: `calc(${Math.max(z, 0)}% - 8px)` }
                }
              ),
              Z.map((b, F) => /* @__PURE__ */ s(
                "div",
                {
                  className: "top-1/2 absolute rounded-full w-[3px] h-4 transform -translate-x-1/2 -translate-y-1/2",
                  style: {
                    backgroundColor: b.value,
                    left: b.left + "%"
                  }
                },
                F
              ))
            ]
          }
        ),
        l.showValue && /* @__PURE__ */ s("div", { className: "mt-2", children: w })
      ]
    }
  );
}, E = ({ time: e }) => /* @__PURE__ */ s("span", { className: "font-mono", children: e >= 10 ? e : `0${e}` }), D = "visibility/timer.boolean";
function Ve() {
  const e = M(D), l = k(null);
  p.useEffect(() => {
    const a = setInterval(() => {
      const r = /* @__PURE__ */ new Date();
      l.set(r);
    }, 1e3);
    return () => {
      clearInterval(a);
    };
  }, []);
  const n = M("preferences/animation.boolean"), t = {
    ...I()("secondary.background", {
      borderColor: "borders",
      color: "focus.text"
    })
  };
  return /* @__PURE__ */ C(
    "div",
    {
      className: v(
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
        P.setOneFeild(D, "value", !e);
      },
      style: t,
      children: [
        l.get && /* @__PURE__ */ C(K, { children: [
          /* @__PURE__ */ s(E, { time: l.get.getHours() }),
          ":",
          /* @__PURE__ */ s(E, { time: l.get.getMinutes() }),
          ":",
          /* @__PURE__ */ s(E, { time: l.get.getSeconds() })
        ] }),
        !l.get && /* @__PURE__ */ s(Y, { content: "loading" })
      ]
    }
  );
}
function $e({ onUpdate: e, onScroll: l, onLoading: n, updateWhere: i = 10, onDone: t, onError: a, className: r, onDataChange: c, initData: d = [], initState: g, ...m }) {
  const u = k(g), y = k(d), { status: f } = ge(async () => {
    const o = e({
      state: u.get,
      setState: (w) => {
        u.set(w);
      },
      data: y.get
    });
    let { data: h, state: x } = o instanceof Promise ? await o : o;
    h.length || t == null || t(), u.set(x), y.set((w) => [...w, ...h]);
  }, [u.get, y.get]);
  return p.useEffect(() => {
    c == null || c(y.get);
  }, [y.get]), p.useEffect(() => {
    f.set("idle");
  }, [e]), /* @__PURE__ */ C(
    U,
    {
      className: v("flex flex-col", r),
      onScroll: (o) => {
        typeof i == "number" && o.currentTarget.scrollHeight - o.currentTarget.scrollTop === o.currentTarget.clientHeight && f.get != "loading" && f.set("idle"), l == null || l(o);
      },
      ...m,
      children: [
        y.get.map((o, h) => {
          const x = m.render(o, h);
          return /* @__PURE__ */ s("div", { children: x }, h);
        }),
        f.get == "loading" && (n == null ? void 0 : n()),
        f.get == "error" && (a == null ? void 0 : a())
      ]
    }
  );
}
function Oe({
  "aria-selected": e,
  children: l,
  className: n,
  icon: i,
  iconClassName: t,
  onBlur: a,
  onFocus: r,
  onMouseEnter: c,
  onMouseLeave: d,
  onPointerDown: g,
  onPointerUp: m,
  style: u,
  ...y
}) {
  const f = k(!1), o = I(), h = k(!1), x = k(!1);
  return /* @__PURE__ */ C(
    "button",
    {
      onMouseEnter: (w) => {
        c == null || c(w), f.set(!0);
      },
      onMouseLeave: (w) => {
        d == null || d(w), f.set(!1), x.set(!1);
      },
      onFocus: (w) => {
        r == null || r(w), h.set(!0);
      },
      onBlur: (w) => {
        a == null || a(w), h.set(!1);
      },
      onPointerDown: (w) => {
        g == null || g(w), x.set(!0);
      },
      onPointerUp: (w) => {
        m == null || m(w), x.get && x.set(!1);
      },
      ...y,
      style: {
        ...o(
          x.get && "gray.opacity.2",
          f.get && "gray.opacity",
          h.get && {
            outlineColor: "primary"
          }
        ),
        ...u
      },
      className: v(
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
        /* @__PURE__ */ s(X, { iconClassName: t, icon: i }),
        l,
        /* @__PURE__ */ s(
          "div",
          {
            className: v(
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
              f.get && "left-full"
            ),
            style: {
              ...o({
                background: he("to right", "transparent", "gray.opacity", "transparent")
              })
            }
          }
        )
      ]
    }
  );
}
function Re({ position: e, style: l, className: n, children: i, ...t }) {
  const a = I();
  return /* @__PURE__ */ s(
    "div",
    {
      style: {
        left: e ? `${e[0]}px` : "",
        top: e ? `${e[1]}px` : ""
      },
      className: v(
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
      children: /* @__PURE__ */ C(
        "div",
        {
          ...t,
          tabIndex: 1,
          className: v(
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
            ...a({
              borderColor: "borders",
              backgroundColor: "secondary.background",
              boxShadow: S([
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
            /* @__PURE__ */ s(
              "span",
              {
                className: v(`
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
                  ...a({
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
function De({ length: e = 4, direction: l = "vertical", color: n, choisedIcon: i = T.solid.faStar, unchoisedIcon: t = T.regular.faStar, starts: a = e, onSubmit: r }) {
  const c = I();
  return /* @__PURE__ */ s("div", { className: v("flex", l == "horizontal" && "flex-col"), children: W(e).map((d, g) => /* @__PURE__ */ s(
    H,
    {
      style: {
        ...c(
          {
            color: "starts.color"
          },
          n && { color: n }
        )
      },
      onClick: (m) => {
        r == null || r(g);
      },
      className: "transform hover:scale-125 transition-tansform duration-200",
      icon: a >= d ? i : t
    },
    d
  )) });
}
const He = ({ className: e, children: l, ...n }) => {
  const i = I(), t = M("preferences/animation.boolean");
  return /* @__PURE__ */ C(
    "button",
    {
      ...n,
      style: {
        ...i({})
      },
      className: v("styled-btn", t && "transition-transform", e),
      children: [
        /* @__PURE__ */ C("span", { className: v("styled-btn-content", t && "transition-all duration-[0.5s]"), children: [
          /* @__PURE__ */ s("span", { className: v("before", t && "transition-all duration-[0.5s]") }),
          /* @__PURE__ */ s("span", { className: v("after", t && "transition-all duration-[0.5s]") }),
          l
        ] }),
        /* @__PURE__ */ s(
          "span",
          {
            style: {
              ...i("primary", {
                boxShadow: S(
                  [5, 15, 30, 60].map((a) => ({
                    colorId: "primary",
                    blur: a
                  }))
                )
              })
            },
            className: v("styled-btn-before", t && "transition-all duration-[0.5s]")
          }
        ),
        /* @__PURE__ */ s(
          "span",
          {
            className: v("styled-btn-after", t && "transition-all duration-[0.5s]"),
            style: {
              ...i("secondary", {
                boxShadow: S(
                  [5, 15, 30, 60].map((a) => ({
                    colorId: "secondary",
                    blur: a
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
function Ne({ string: e = "expmle", time: l = 10 }) {
  const n = k(e), i = k(""), t = k(!0);
  return p.useEffect(() => {
    const a = n.get, r = ve(a.split("").filter(Boolean));
    t.set(!0);
    let c = 0, d = 0;
    const g = setInterval(function() {
      if (c >= a.length) {
        t.set(!1), clearInterval(g);
        return;
      }
      i.set(`${a.slice(0, c)}${r[d]}`), r[d] == a[c] ? (c++, d = 0) : d++;
    }, l);
    return function() {
      t.set(!1), clearInterval(g);
    };
  }, [n.get]), {
    state: n,
    value: i.get,
    isLoading: t.get
  };
}
const Xe = ({ content: e, time: l }) => {
  const { state: n, value: i } = Ne({
    time: l,
    string: e
  });
  return p.useEffect(() => {
    n.set(e || "");
  }, [e]), /* @__PURE__ */ s(K, { children: i });
};
function Ke({ inputName: e, defaultContent: l, value: n, setValue: i, visibility: t, setVisibility: a, controls: r, placeholder: c }) {
  const d = k(!1), g = `focus-input-update-${e}`, m = `escape-input-update-${e}`;
  V(
    g,
    async () => {
      var f;
      a(!0), $.setOneFeild(e, "value", n || ""), await new ye().start(100), R(e), (f = document.getElementById(e)) == null || f.select();
    },
    [n, a]
  );
  const u = $.getOneFeild(e, "value");
  V(
    m,
    () => {
      if (u == null)
        return;
      if (!Object.keys(r || {}).every((o) => {
        try {
          const h = new RegExp(o);
          return !!u.match(h);
        } catch {
          return !0;
        }
      })) {
        R(e);
        return;
      }
      a(!1), i(u);
    },
    [u, r]
  );
  const y = I();
  return /* @__PURE__ */ s("div", { className: "p-2 group", children: /* @__PURE__ */ C("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ s("h1", { className: "truncate", hidden: !!t, children: n || l }),
    t && /* @__PURE__ */ s(
      me,
      {
        placeholder: c,
        controls: r,
        className: "p-1",
        inputName: e,
        onBlur: () => {
          A(m);
        },
        style: {
          ...y(d.get && { borderColor: "error" })
        },
        onKeyDown: (f) => {
          f.key = f.key.toLowerCase(), ["enter", "tab"].includes(f.key) && (f.stopPropagation(), f.preventDefault(), f.currentTarget.blur());
        }
      }
    ),
    /* @__PURE__ */ s("span", { children: /* @__PURE__ */ s(
      j,
      {
        className: "group-hover:visible invisible",
        icon: t ? xe : Ce,
        onPointerDown: () => {
          t ? A(m) : A(g);
        }
      }
    ) })
  ] }) });
}
function Pe({ ref: e, position: [l, n] = [0, 0], children: i, style: t, className: a, ...r }) {
  return /* @__PURE__ */ s(
    "div",
    {
      ref: e,
      ...r,
      style: {
        ...t,
        left: l,
        top: n
      },
      className: v("transition-[left,top] duration-300", a, "fixed"),
      children: i
    }
  );
}
function We() {
  return /* @__PURE__ */ s("div", { "aria-label": "window-controls", className: "flex text-md" });
}
const Ze = ({ ...e }) => /* @__PURE__ */ s("span", { className: "w-[40px] h-full inline-flex items-center justify-center transition-[background]", ...e, tabIndex: -1 }), _e = ({ color: e }) => /* @__PURE__ */ s("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ s("path", { className: "transition-[fill]", fill: e, d: "M 0,5 10,5 10,6 0,6 Z" }) }), Je = ({ color: e }) => /* @__PURE__ */ s("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ s("path", { className: "transition-[fill]", fill: e, d: "m 2,1e-5 0,2 -2,0 0,8 8,0 0,-2 2,0 0,-8 z m 1,1 6,0 0,6 -1,0 0,-5 -5,0 z m -2,2 6,0 0,6 -6,0 z" }) }), qe = ({ color: e }) => /* @__PURE__ */ s("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ s("path", { className: "transition-[fill]", fill: e, d: "M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z" }) }), Ge = ({ color: e }) => /* @__PURE__ */ s("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ s("path", { className: "transition-[fill]", fill: e, d: "M 0,0 0,10 10,10 10,0 Z M 1,1 9,1 9,9 1,9 Z" }) });
export {
  Ue as Anchor,
  se as ArrayFeild,
  ft as AsyncComponent,
  et as BallLoading,
  mt as BlurOverlay,
  te as BooleanFeild,
  Ht as Button,
  Xt as Card,
  tt as CardWait,
  Ae as CenterWindowDrag,
  gt as ChangableComponent,
  st as CircleLoading,
  j as CircleTip,
  Ee as ClickedView,
  qe as CloseActionIcon,
  ht as ColorsList,
  je as DarkLightIcon,
  pt as DataBaseManagmentList,
  ce as DateFeild,
  bt as DownOverlay,
  K as EmptyComponent,
  ae as EnumFeild,
  wt as FastList,
  me as Feild,
  J as FileFeild,
  oe as FilterFeild,
  at as Focus,
  ze as FullField,
  ke as FullFieldRecord,
  Ve as Hours,
  X as Icon,
  vt as Icons,
  yt as Image,
  fe as ImageFeild,
  $e as InfinityScroll,
  rt as InnerTranslate,
  nt as Input,
  G as JoinComponentBy,
  xt as KeyPanding,
  Oe as LargeButton,
  Q as Line,
  lt as LineLoading,
  Ct as List,
  kt as MarkDown,
  Ge as MaximizeActionIcon,
  _e as MinimizeActionIcon,
  Nt as MultiScreenPage,
  Ft as Note,
  le as NumberFeild,
  re as ObjectFeild,
  Re as PanelSide,
  It as Password,
  ie as PasswordFeild,
  q as PinField,
  St as PositionView,
  Be as RangeFeild,
  ue as RecorderFeild,
  de as RegexpFeild,
  Mt as ResizeView,
  U as Scroll,
  ot as SeparatedViewsLine,
  it as SeparatedViewsLineTitle,
  Tt as SinglePanding,
  Lt as Slot,
  De as Starts,
  ne as StringFeild,
  He as StyledButton,
  At as Tab,
  Et as Tabs,
  Xe as TextAnimation,
  jt as TextArea,
  ct as Tip,
  zt as TitleProvider,
  ee as TitleView,
  Y as Translate,
  Bt as Tree,
  Je as UnMaximizeActionIcon,
  Ke as UpdateData,
  Vt as ViewPage,
  Pe as ViewPanel,
  We as WindowControls,
  Ze as WindowsButton,
  $t as dateToStringForInput,
  dt as iconsFileFeild,
  Ot as objectIfPrefix,
  Rt as slotId,
  Ne as useTextAnimation,
  B as useTranslate
};
