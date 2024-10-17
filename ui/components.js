import { j as s, a as x, u as z, F as D, b as W, P as J, J as q, I as H, L as G, E as X, T as Q, S as Y } from "./SeparatedComponents-DfUPj3TY.mjs";
import { A as Ye, B as Ue, C as et, c as tt, k as st, d as at, e as rt, f as nt, g as lt, h as ot, i as it } from "./SeparatedComponents-DfUPj3TY.mjs";
import { T as U, B as ee, A as te, E as se, O as ae, S as re, N as ne, F as le, P as oe, D as ie, R as ce, a as de, I as ue, C as E, b as fe } from "./ViewPage-Bnm94RRL.mjs";
import { c as dt, p as ut, q as ft, d as mt, e as gt, n as ht, f as pt, i as bt, j as wt, K as vt, L as yt, M as xt, l as kt, m as Ct, h as Nt, r as Ft, t as It, k as St, u as Mt, v as Tt, w as Lt, x as At, y as Et, z as jt, V as zt, g as Bt, o as Vt, s as $t } from "./ViewPage-Bnm94RRL.mjs";
import { B as Rt, C as Dt } from "./Card-BKH5_KnN.mjs";
import p from "react";
import { u as I, a as C, h as S, s as K, b as M, c as me, d as ge, e as B, f as V, g as L } from "./index-8xvo7Uwy.mjs";
import { m as he, t as v, r as P, f as pe, a as be, S as $, b as we, D as ve, s as O, c as ye, d as xe } from "./index-Cep-AhVL.mjs";
import { allIcons as T } from "./apis.js";
function Le({ children: e }) {
  return /* @__PURE__ */ s("div", { className: "flex justify-center items-center px-3 w-full window-dragged h-full text-center capitalize overflow-hidden", children: e });
}
const Ae = ({ children: e, className: l, style: n, onPointerDown: i, onPointerLeave: t, onPointerUp: a, onMouseEnter: r, onMouseLeave: c, ...d }) => {
  const g = I(), m = C(!1), u = C(!1), y = C(!1);
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
  return /* @__PURE__ */ x(
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
        ...he(f)
      },
      className: v("btn w-full relative overflow-hidden transition-[transform]", l),
      ...d,
      children: [
        P(1, 3).map((o) => /* @__PURE__ */ s(
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
}, Ee = () => {
  const e = K.useOneFeild("window/dark.boolean", "value"), l = I(), [n] = z("toggle to light"), [i] = z("toggle to dark");
  return /* @__PURE__ */ s(
    U,
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
              children: /* @__PURE__ */ s(D, { icon: e.get ? pe : be })
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
  return /* @__PURE__ */ x("div", { className: "p-2", children: [
    n == "boolean" && /* @__PURE__ */ s(ee, { id: t, state: r, config: a }),
    n == "array" && /* @__PURE__ */ s(te, { id: t, state: r, config: a }),
    n == "enum" && /* @__PURE__ */ s(se, { id: t, state: r, config: a }),
    n == "object" && /* @__PURE__ */ s(ae, { id: t, state: r, config: a }),
    n == "string" && /* @__PURE__ */ s(re, { id: t, state: r, config: a }),
    n == "number" && /* @__PURE__ */ s(ne, { id: t, state: r, config: a }),
    n == "file" && /* @__PURE__ */ s(W, { id: t, state: r, config: a }),
    n == "filter" && /* @__PURE__ */ s(le, { id: t, state: r, config: a }),
    n == "password" && /* @__PURE__ */ s(oe, { id: t, state: r, config: a }),
    n == "date" && /* @__PURE__ */ s(ie, { id: t, state: r, config: a }),
    n == "regexp" && /* @__PURE__ */ s(ce, { id: t, state: r }),
    n == "audio" && /* @__PURE__ */ s(de, { id: t, state: r, config: a }),
    n == "image" && /* @__PURE__ */ s(ue, { id: t, state: r, config: a }),
    n == "pin" && /* @__PURE__ */ s(J, { id: t, state: r, config: a })
  ] });
}
const je = ({ list: e, id: l, state: n }) => {
  const i = Object.entries(e).map(([r, c]) => ({ id: r, ...c })), t = C(0);
  p.useEffect(() => {
    t.set(0);
  }, []);
  const a = M("preferences/animation.boolean");
  return /* @__PURE__ */ s("div", { className: "flex flex-col items-center gap-2 w-full", children: /* @__PURE__ */ s(
    q,
    {
      list: i.map((r, c) => {
        const { label: d, icon: g, type: m, id: u, config: y, onNext: f } = r, o = n.get[u];
        return /* @__PURE__ */ x("div", { className: "w-full", children: [
          /* @__PURE__ */ x("div", { className: "flex justify-between items-center p-2", children: [
            /* @__PURE__ */ x("div", { className: "flex items-center gap-1", children: [
              g && /* @__PURE__ */ s(H, { icon: g }),
              /* @__PURE__ */ x("label", { htmlFor: `${u}-${c}`, className: "capitalize", children: [
                d,
                " :"
              ] })
            ] }),
            t.get == c && /* @__PURE__ */ x("div", { className: "flex items-center gap-1", children: [
              c > 0 && /* @__PURE__ */ s(
                E,
                {
                  onClick: () => {
                    t.set(c - 1);
                  },
                  icon: T.solid.faChevronUp
                }
              ),
              c + 1 < i.length && /* @__PURE__ */ s(
                E,
                {
                  onClick: () => {
                    let h = !1;
                    const k = {
                      currentIndex: t.get,
                      state: n.get,
                      stop() {
                        h = !0;
                      },
                      currentValue: o
                    };
                    f == null || f(k), !h && t.set(c + 1);
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
                let k = typeof h == "function" ? h(o) : h;
                n.set((w) => ({
                  ...w,
                  [u]: k
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
      joinComponent: /* @__PURE__ */ s(G, {})
    }
  ) });
}, ze = ({ state: e, config: l = {}, id: n }) => {
  const i = p.useRef(null), t = C(!1), a = l.min || 0, r = l.max || 100, c = l.isFloat || !1, d = p.useMemo(() => {
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
  const k = I(), w = p.useMemo(() => e.get.toString(), [e.get]), j = p.useMemo(() => (e.get - a) / (r - a) * 100, [e.get, a, r]), Z = p.useMemo(() => {
    const b = l.marked || {};
    return Object.keys(b).map(Number).sort((N, _) => N - _).map((N) => ({
      key: N,
      value: b[N],
      left: (N - a) / (r - a) * 100
    }));
  }, [l.marked, a, r]);
  return p.useEffect(() => {
    e.get < a ? e.set(a) : e.get > r && e.set(r);
  }, [a, r, e.get]), /* @__PURE__ */ x(
    "div",
    {
      tabIndex: 1,
      onKeyDown: (b) => {
        const F = new $("arrowright"), N = new $("arrowleft");
        F.test(b) && e.get < r ? e.set(e.get + 1) : N.test(b) && e.get > a && e.set(e.get - 1);
      },
      className: "flex flex-col items-center w-full min-w-[150px] select-none",
      children: [
        /* @__PURE__ */ x(
          "div",
          {
            ref: i,
            id: n,
            style: { ...k("gray.opacity") },
            className: `relative rounded-lg w-full h-[2px] cursor-${t.get ? "grabbing" : "grab"}`,
            onTouchStart: y,
            onMouseDown: f,
            children: [
              /* @__PURE__ */ s("div", { className: "absolute rounded-lg h-[2px]", style: { ...k("primary"), width: `${j}%` } }),
              /* @__PURE__ */ s(
                "div",
                {
                  className: "top-1/2 absolute rounded-full w-4 h-4 transform -translate-y-1/2",
                  style: { ...k("primary"), left: `calc(${Math.max(j, 0)}% - 8px)` }
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
}, A = ({ time: e }) => /* @__PURE__ */ s("span", { className: "font-mono", children: e >= 10 ? e : `0${e}` }), R = "visibility/timer.boolean";
function Be() {
  const e = M(R), l = C(null);
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
  return /* @__PURE__ */ x(
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
        K.setOneFeild(R, "value", !e);
      },
      style: t,
      children: [
        l.get && /* @__PURE__ */ x(X, { children: [
          /* @__PURE__ */ s(A, { time: l.get.getHours() }),
          ":",
          /* @__PURE__ */ s(A, { time: l.get.getMinutes() }),
          ":",
          /* @__PURE__ */ s(A, { time: l.get.getSeconds() })
        ] }),
        !l.get && /* @__PURE__ */ s(Q, { content: "loading" })
      ]
    }
  );
}
function Ve({ onUpdate: e, onScroll: l, onLoading: n, updateWhere: i = 10, onDone: t, onError: a, className: r, onDataChange: c, initData: d = [], initState: g, ...m }) {
  const u = C(g), y = C(d), { status: f } = me(async () => {
    const o = e({
      state: u.get,
      setState: (w) => {
        u.set(w);
      },
      data: y.get
    });
    let { data: h, state: k } = o instanceof Promise ? await o : o;
    h.length || t == null || t(), u.set(k), y.set((w) => [...w, ...h]);
  }, [u.get, y.get]);
  return p.useEffect(() => {
    c == null || c(y.get);
  }, [y.get]), p.useEffect(() => {
    f.set("idle");
  }, [e]), /* @__PURE__ */ x(
    Y,
    {
      className: v("flex flex-col", r),
      onScroll: (o) => {
        typeof i == "number" && o.currentTarget.scrollHeight - o.currentTarget.scrollTop === o.currentTarget.clientHeight && f.get != "loading" && f.set("idle"), l == null || l(o);
      },
      ...m,
      children: [
        y.get.map((o, h) => /* @__PURE__ */ s("div", { children: m.render(o, h) }, h)),
        f.get == "loading" && (n == null ? void 0 : n()),
        f.get == "error" && (a == null ? void 0 : a())
      ]
    }
  );
}
function $e({
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
  const f = C(!1), o = I(), h = C(!1), k = C(!1);
  return /* @__PURE__ */ x(
    "button",
    {
      onMouseEnter: (w) => {
        c == null || c(w), f.set(!0);
      },
      onMouseLeave: (w) => {
        d == null || d(w), f.set(!1), k.set(!1);
      },
      onFocus: (w) => {
        r == null || r(w), h.set(!0);
      },
      onBlur: (w) => {
        a == null || a(w), h.set(!1);
      },
      onPointerDown: (w) => {
        g == null || g(w), k.set(!0);
      },
      onPointerUp: (w) => {
        m == null || m(w), k.get && k.set(!1);
      },
      ...y,
      style: {
        ...o(
          k.get && "gray.opacity.2",
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
        /* @__PURE__ */ s(H, { iconClassName: t, icon: i }),
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
                background: ge("to right", "transparent", "gray.opacity", "transparent")
              })
            }
          }
        )
      ]
    }
  );
}
function Oe({ position: e, style: l, className: n, children: i, ...t }) {
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
      children: /* @__PURE__ */ x(
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
function Re({ length: e = 4, direction: l = "vertical", color: n, choisedIcon: i = T.solid.faStar, unchoisedIcon: t = T.regular.faStar, starts: a = e, onSubmit: r }) {
  const c = I();
  return /* @__PURE__ */ s("div", { className: v("flex", l == "horizontal" && "flex-col"), children: P(e).map((d, g) => /* @__PURE__ */ s(
    D,
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
const De = ({ className: e, children: l, ...n }) => {
  const i = I(), t = M("preferences/animation.boolean");
  return /* @__PURE__ */ x(
    "button",
    {
      ...n,
      style: {
        ...i({
          color: "primary"
        })
      },
      className: v("styled-btn", t && "transition-transform", e),
      children: [
        /* @__PURE__ */ x("span", { className: v("styled-btn-content", t && "transition-all duration-[0.5s]"), children: [
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
function Ce({ string: e = "expmle", time: l = 10 }) {
  const n = C(e), i = C(""), t = C(!0);
  return p.useEffect(() => {
    const a = n.get, r = we(a.split("").filter(Boolean));
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
const He = ({ content: e, time: l }) => {
  const { state: n, value: i } = Ce({
    time: l,
    string: e
  });
  return p.useEffect(() => {
    n.set(e || "");
  }, [e]), /* @__PURE__ */ s(X, { children: i });
};
function Xe({ inputName: e, defaultContent: l, value: n, setValue: i, visibility: t, setVisibility: a, controls: r, placeholder: c }) {
  const d = C(!1), g = `focus-input-update-${e}`, m = `escape-input-update-${e}`;
  B(
    g,
    async () => {
      var f;
      a(!0), V.setOneFeild(e, "value", n || ""), await new ve().start(100), O(e), (f = document.getElementById(e)) == null || f.select();
    },
    [n, a]
  );
  const u = V.getOneFeild(e, "value");
  B(
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
        O(e);
        return;
      }
      a(!1), i(u);
    },
    [u, r]
  );
  const y = I();
  return /* @__PURE__ */ s("div", { className: "p-2 group", children: /* @__PURE__ */ x("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ s("h1", { className: "truncate", hidden: !!t, children: n || l }),
    t && /* @__PURE__ */ s(
      fe,
      {
        placeholder: c,
        controls: r,
        className: "p-1",
        inputName: e,
        onBlur: () => {
          L(m);
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
      E,
      {
        className: "group-hover:visible invisible",
        icon: t ? ye : xe,
        onPointerDown: () => {
          t ? L(m) : L(g);
        }
      }
    ) })
  ] }) });
}
function Ke({ ref: e, position: [l, n] = [0, 0], children: i, style: t, className: a, ...r }) {
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
function Pe() {
  return /* @__PURE__ */ s("div", { "aria-label": "window-controls", className: "flex text-md" });
}
const Ze = ({ ...e }) => /* @__PURE__ */ s("span", { className: "w-[40px] h-full inline-flex items-center justify-center transition-[background]", ...e, tabIndex: -1 }), _e = ({ color: e }) => /* @__PURE__ */ s("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ s("path", { className: "transition-[fill]", fill: e, d: "M 0,5 10,5 10,6 0,6 Z" }) }), We = ({ color: e }) => /* @__PURE__ */ s("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ s("path", { className: "transition-[fill]", fill: e, d: "m 2,1e-5 0,2 -2,0 0,8 8,0 0,-2 2,0 0,-8 z m 1,1 6,0 0,6 -1,0 0,-5 -5,0 z m -2,2 6,0 0,6 -6,0 z" }) }), Je = ({ color: e }) => /* @__PURE__ */ s("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ s("path", { className: "transition-[fill]", fill: e, d: "M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z" }) }), qe = ({ color: e }) => /* @__PURE__ */ s("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ s("path", { className: "transition-[fill]", fill: e, d: "M 0,0 0,10 10,10 10,0 Z M 1,1 9,1 9,9 1,9 Z" }) });
export {
  Ye as Anchor,
  te as ArrayFeild,
  dt as AsyncComponent,
  Ue as BallLoading,
  ut as BlurOverlay,
  ee as BooleanFeild,
  Rt as Button,
  Dt as Card,
  Le as CenterWindowDrag,
  ft as ChangableComponent,
  et as CircleLoading,
  E as CircleTip,
  Ae as ClickedView,
  Je as CloseActionIcon,
  mt as ColorsList,
  Ee as DarkLightIcon,
  gt as DataBaseManagmentList,
  ie as DateFeild,
  ht as DownOverlay,
  X as EmptyComponent,
  se as EnumFeild,
  pt as FastList,
  fe as Feild,
  W as FileFeild,
  le as FilterFeild,
  tt as Focus,
  je as FullField,
  ke as FullFieldRecord,
  Be as Hours,
  H as Icon,
  bt as Icons,
  wt as Image,
  ue as ImageFeild,
  Ve as InfinityScroll,
  st as InnerTranslate,
  at as Input,
  q as JoinComponentBy,
  vt as KeyPanding,
  $e as LargeButton,
  G as Line,
  rt as LineLoading,
  yt as List,
  xt as MarkDown,
  qe as MaximizeActionIcon,
  _e as MinimizeActionIcon,
  kt as MultiScreenPage,
  Ct as Note,
  ne as NumberFeild,
  ae as ObjectFeild,
  Oe as PanelSide,
  Nt as Password,
  oe as PasswordFeild,
  J as PinField,
  Ft as PositionView,
  ze as RangeFeild,
  de as RecorderFeild,
  ce as RegexpFeild,
  It as ResizeView,
  Y as Scroll,
  nt as SeparatedViewsLine,
  lt as SeparatedViewsLineTitle,
  St as SinglePanding,
  Mt as Slot,
  Re as Starts,
  re as StringFeild,
  De as StyledButton,
  Tt as Tab,
  Lt as Tabs,
  He as TextAnimation,
  At as TextArea,
  ot as Tip,
  Et as TitleProvider,
  U as TitleView,
  Q as Translate,
  jt as Tree,
  We as UnMaximizeActionIcon,
  Xe as UpdateData,
  zt as ViewPage,
  Ke as ViewPanel,
  Pe as WindowControls,
  Ze as WindowsButton,
  Bt as dateToStringForInput,
  it as iconsFileFeild,
  Vt as objectIfPrefix,
  $t as slotId,
  Ce as useTextAnimation,
  z as useTranslate
};
