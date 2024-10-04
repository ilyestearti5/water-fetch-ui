import { a as M, j as o, k as re, d as ie, T as Q, E as H, I as de, F as ce, c as nt, f as Pt, g as Ht, Q as Ut, J as xe, L as Ae, u as _t, S as st } from "./PinFeild-i5ZgTbAA.mjs";
import * as he from "react";
import g from "react";
import { s as ve, t as S, n as Le, e as me, S as we, p as ne, a3 as Wt, l as Vt, m as Ie, a2 as De, i as ot, a4 as lt, a5 as Gt, a6 as at, a7 as Ne, a8 as Kt, a9 as Xt, h as ct, aa as Yt, J as Zt, w as qt, ab as Qt, ac as Jt, ad as er, P as tr, ae as Ue, af as it, ag as dt, a0 as ut, ah as rr, ai as nr, aj as sr, ak as or, al as lr, am as ar, an as cr, ao as _e } from "./index-BclG5w1X.mjs";
import { b as F, u as $, ac as ir, ad as Ee, ae as ye, af as dr, ag as ur, G as Ce, r as I, ah as ft, ai as fr, a as X, c as pe, f as U, aj as We, q as G, ak as mr, g as Ve, e as q, Q as mt, m as pr, N as gr, o as hr, a5 as se, al as yr, i as br, d as K, a6 as pt, x as gt, h as ht, I as fe, am as xr, R as vr, a4 as yt, an as Ge, ao as wr, ap as kr, aq as Nr, ar as Er, as as Cr, at as oe, au as Mr, v as Or } from "./index-D4efwQAm.mjs";
import { B as J, C as Fr } from "./Card-Bgu-Prmj.mjs";
import { allIcons as Ke } from "./apis.js";
function Vn({ state: e, id: r }) {
  const t = F(""), n = g.useMemo(() => Array.from(new Set(e.get)), [e.get]), c = $(), l = g.useCallback(() => {
    n.includes(t.get) || t.get === "" || (e.set([...n, t.get]), t.set(""), ve(r));
  }, [t.get, n, t.set, e.set]);
  return /* @__PURE__ */ M("div", { className: "array-field", children: [
    /* @__PURE__ */ o("div", { className: "items", children: n.map((a, d) => /* @__PURE__ */ M(
      "div",
      {
        className: S(`
                group
                flex
                items-center
                gap-1
                px-2 py-1
                border
                border-solid
                duration-200
                rounded-sm
              `),
        style: {
          ...c("gray.opacity", {
            borderColor: "borders"
          })
        },
        children: [
          /* @__PURE__ */ o("span", { children: a }),
          /* @__PURE__ */ M("span", { className: "flex items-center", children: [
            /* @__PURE__ */ o(
              re,
              {
                className: "opacity-0 group-hover:opacity-100 transition-[opacity] duration-200",
                onClick: async () => {
                  await navigator.clipboard.writeText(a);
                },
                icon: Le
              }
            ),
            /* @__PURE__ */ o(
              re,
              {
                className: "opacity-0 group-hover:opacity-100 transition-[opacity] duration-200",
                onClick: () => {
                  n.splice(d, 1), e.set(n);
                },
                icon: me
              }
            )
          ] })
        ]
      },
      d
    )) }),
    /* @__PURE__ */ M("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ o("div", { className: "w-full", children: /* @__PURE__ */ o(
        ie,
        {
          value: t.get,
          placeholder: "write item...",
          id: r,
          onKeyDown: (a) => {
            new we("enter").test(a) && l();
          },
          spellCheck: !1,
          onValueChange: t.set
        }
      ) }),
      t.get && /* @__PURE__ */ o(J, { onClick: l, className: "w-fit", children: /* @__PURE__ */ o(Q, { content: "add" }) })
    ] })
  ] });
}
function Gn({ render: e, error: r = /* @__PURE__ */ o(H, {}), deps: t = [], loading: n = /* @__PURE__ */ o(H, {}) }) {
  const c = ir(async () => {
    try {
      return await e();
    } catch {
      return r;
    }
  }, [e, r, n, ...t]);
  return /* @__PURE__ */ o(H, { children: c ?? n });
}
function Sr({ state: e, config: r = {}, id: t }) {
  const n = g.useMemo(() => typeof e.get == "boolean" ? e.get : !1, [e.get]);
  g.useEffect(() => () => {
    l.set(!1);
  }, []);
  const c = $(), l = F(!1);
  return /* @__PURE__ */ M("span", { className: "inline-flex items-center gap-1", children: [
    r.style == "checkbox" ? /* @__PURE__ */ o(
      "button",
      {
        onClick: () => {
          e.set((a) => !a);
        },
        onFocus: () => {
          l.set(!0);
        },
        onBlur: () => {
          l.set(!1);
        },
        id: t,
        style: {
          ...c(
            "checkbox.background",
            {
              borderColor: "borders"
            },
            l.get && { outlineColor: "primary" }
          )
        },
        className: S(`
            inline-flex
            w-[20px]
            h-[20px]
            items-center
            justify-center
            rounded-md
            border-solid
            border
            border-transparent
            outline-1
            -outline-offset-1
            outline-transparent
          `),
        children: /* @__PURE__ */ o(
          de,
          {
            iconClassName: S(
              `
              transform
              transition-transform
              duration-300
              scale-0
            `,
              n && "scale-100"
            ),
            icon: ne
          }
        )
      }
    ) : /* @__PURE__ */ o(
      "button",
      {
        id: t,
        onFocus: () => l.set(!0),
        onBlur: () => l.set(!1),
        onClick: () => {
          e.set((a) => !a);
        },
        type: "button",
        className: S(`
            inline-block
            w-[40px]
            h-[20px]
            relative
            rounded-full
            shadow-lg
            border-solid
            border
            border-transparent
          `),
        style: {
          ...c(
            "checkbox.background",
            {
              borderColor: "borders"
            },
            l.get && { borderColor: "primary" }
          )
        },
        children: /* @__PURE__ */ o(
          "span",
          {
            className: S("absolute left-0 inline-flex items-center justify-center top-1/2 transform -translate-y-1/2 w-[20px] h-[20px] rounded-full duration-300 text-white", n && "left-1/2"),
            style: {
              ...c(n && "checkbox.true", !n && "checkbox.false")
            },
            children: /* @__PURE__ */ o(ce, { icon: n ? ne : me })
          }
        )
      }
    ),
    /* @__PURE__ */ o("label", { htmlFor: t, children: (n ? r == null ? void 0 : r.onActive : r == null ? void 0 : r.onDisactive) || "" })
  ] });
}
function ae({ children: e, className: r, icon: t, style: n = {}, iconClassName: c, onPointerDown: l, onPointerLeave: a, onPointerUp: d, onMouseEnter: i, onMouseLeave: p, ...h }) {
  const f = $(), y = F(!1), s = F(!1);
  return g.useEffect(() => () => {
    y.set(!1), s.set(!1);
  }, []), /* @__PURE__ */ M(
    "button",
    {
      onMouseEnter: (m) => {
        s.set(!0), i == null || i(m);
      },
      onMouseLeave: (m) => {
        s.set(!1), p == null || p(m);
      },
      onPointerDown: (m) => {
        y.set(!0), l == null || l(m);
      },
      onPointerUp: (m) => {
        y.set(!1), d == null || d(m);
      },
      onPointerLeave: (m) => {
        y.set(!1), a == null || a(m);
      },
      className: S(
        `
        rounded-full
        w-[40px]
        h-[40px]
        gap-2
        flex
        items-center
        justify-center
        outline-2
        outline-offset-1
        outline-transparent
        truncate
      `,
        r,
        "relative"
      ),
      type: "button",
      style: {
        ...f(s.get && "gray.opacity", y.get && "gray.opacity.2"),
        ...n
      },
      ...h,
      children: [
        /* @__PURE__ */ o(de, { iconClassName: Wt("text-xl", c), icon: t }),
        e
      ]
    }
  );
}
function bt({
  title: e,
  onClick: r,
  position: { x: t = "right", y: n = "bottom" } = { x: "right", y: "bottom" },
  onMouseMove: c,
  onMouseLeave: l,
  children: a,
  canMouseOn: d = !1,
  ...i
}) {
  const p = g.createRef();
  g.useEffect(() => () => {
    Ee(null), ye(null);
  }, []);
  const h = () => {
    d || (Ee(null), ye(null));
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: p,
      onClick: (f) => {
        h(), r == null || r(f);
      },
      onMouseMove: (f) => {
        e && (Ee(e), ye([f.clientX, f.clientY]), dr(t), ur(n)), c == null || c(f);
      },
      onMouseLeave: (f) => {
        h(), l == null || l(f);
      },
      ...i,
      children: a
    }
  );
}
const xt = ({ onContentChange: e, ...r }) => {
  const t = g.createRef(), n = F(null);
  g.useEffect(() => {
    const l = t.current;
    if (l) {
      const a = () => {
        const f = l.getBoundingClientRect();
        n.set(f);
      }, d = setTimeout(() => {
        a();
      }, 300), i = new ResizeObserver(a), p = new MutationObserver(a), h = new IntersectionObserver(a);
      return i.observe(l, { box: "border-box" }), i.observe(l, { box: "content-box" }), i.observe(l, { box: "device-pixel-content-box" }), p.observe(l, { attributes: !0, subtree: !0, characterData: !0, childList: !0 }), h.observe(l), addEventListener("resize", a), () => {
        i.disconnect(), p.disconnect(), h.disconnect(), removeEventListener("resize", a), clearTimeout(d);
      };
    }
  }, [t.current]), g.useEffect(() => {
    n.get && (e == null || e(n.get));
  }, [n.get]);
  const c = g.useMemo(() => {
    if (!n.get)
      return {};
    const { bottom: l, height: a, left: d, right: i, top: p, width: h, x: f, y } = n.get;
    return {
      bottom: l,
      height: a,
      left: d,
      right: i,
      top: p,
      width: h,
      x: f,
      y
    };
  }, [n.get]);
  return /* @__PURE__ */ o(
    "div",
    {
      ...r,
      "data-pos": Object.entries(c).map(([l, a]) => `${l}=${a}`).join(","),
      ref: t
    }
  );
}, Kn = ({ positionId: e, ...r }) => {
  const t = Ce.getOne(e);
  return g.useEffect(() => {
    t || Ce.upsert([
      {
        positionId: e
      }
    ]);
  }, [t]), /* @__PURE__ */ o(
    xt,
    {
      onContentChange: ({ bottom: n, height: c, left: l, right: a, top: d, width: i, x: p, y: h }) => {
        const f = { bottom: n, height: c, left: l, right: a, top: d, width: i, x: p, y: h };
        Ce.setOne(e, f);
      },
      ...r
    }
  );
};
function Be({ focusId: e, itemSize: r, slotId: t, component: n, handelSkip: c, data: l, countLastItems: a = 3, overflow: { top: d = 0, bottom: i = 0 } = { top: 0, bottom: 0 } }) {
  const p = I.getOne(t), h = F(0), f = F(0);
  let y = I.getOneFeild(t, "focused");
  ft(t, l), g.useEffect(() => {
    I.setOneFeild(t, "length", l.length), l.length || fr(t);
  }, [l]), g.useEffect(() => {
    typeof y == "number" && l.length <= y && I.setOneFeild(t, "focused", l.length - 1);
  }, [y, l]);
  const s = F(!1);
  g.useEffect(() => {
    s.set(!1);
  }, [y]), g.useEffect(() => {
    if ([s.get, typeof y != "number", y >= l.length, f.get < r].some(Boolean))
      return;
    const b = h.get <= y * r, O = (y + 1) * r <= h.get + f.get;
    if (O && b)
      return;
    let L;
    y < 0 ? y = 0 : y > (L = Math.abs(l.length - a)) && (y = L), O || (y = y + 1 - f.get / r);
    const D = r * y;
    h.set(D);
  }, [y, l, a, h.get, f.get, s.get]);
  const m = X("preferences/fastScrollKey.enum"), u = g.useMemo(() => r * l.length, [r, l]), w = g.useMemo(() => u + r * a, [u, r, a]), v = g.useMemo(() => f.get * 100 / w, [w, f.get]), x = g.useMemo(() => h.get * 100 / w, [w, h.get]), E = X("preferences/scrollAnimation.boolean.boolean"), N = F(!1), R = F(null), T = g.useMemo(() => n, []), k = $(), C = (b) => {
    var L;
    const O = R.get;
    if (O) {
      let B = (b - O.top - (((L = j.current) == null ? void 0 : L.clientHeight) || 0) / 2) / O.height * w;
      const z = w - O.height;
      B < 0 ? B = 0 : B > z && (B = z), h.set(B);
    }
  }, j = g.createRef(), A = g.useMemo(() => v <= 100, [v]), P = g.createRef();
  return /* @__PURE__ */ o(nt, { focusId: e, className: "relative w-full h-full select-none", ignoreOutline: typeof y == "number", id: t, children: /* @__PURE__ */ M(
    xt,
    {
      onContentChange: (b) => {
        f.set(b.height), R.set(b);
      },
      className: "relative h-full overflow-hidden",
      onWheel: (b) => {
        if (v < 100) {
          let O = !1;
          m == "alt" ? O = b.altKey : m == "control" ? O = b.ctrlKey : m == "shift" && (O = b.shiftKey), s.set(!0), h.set((L) => (L += b.deltaY * (O ? 0.6 : 0.1), L < 0 ? 0 : Math.min(L, (l.length + a) * r - f.get)));
        }
      },
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            ref: P,
            className: S("absolute inset-x-0", E && "transition-[top,left]"),
            style: {
              top: -h.get,
              height: u
            },
            children: l.map((b, O) => {
              var B;
              const D = r * O - h.get;
              if (Vt(-(d + 1) * r, D, D + r, f.get + (i + 1) * r)) {
                const z = {
                  isFocused: O == (p == null ? void 0 : p.focused),
                  isSelected: !!((B = p == null ? void 0 : p.selected) != null && B[O]),
                  isSubmited: O == (p == null ? void 0 : p.submited),
                  isSkiped: !!(c && c({
                    data: b,
                    index: O
                  }))
                }, ee = {
                  height: r,
                  position: "absolute",
                  top: r * O,
                  insetInline: "0px"
                };
                return /* @__PURE__ */ o(T, { status: z, index: O, data: b, style: ee, handel: {
                  focus() {
                    I.setOneFeild(t, "focused", O);
                  },
                  select(W, ge) {
                    if (W)
                      I.setOneFeild(t, "selected", {
                        [O]: ge
                      });
                    else {
                      if (!(p != null && p.selected))
                        return;
                      I.setOneFeild(t, "selected", {
                        ...p.selected,
                        [O]: ge
                      });
                    }
                  },
                  submit() {
                    I.setOneFeild(t, "submited", O);
                  },
                  skip(W, ge) {
                    W && I.setOneFeild(t, "skiped", { [O]: ge });
                  }
                } }, O);
              }
            })
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            hidden: !A,
            "aria-label": "scroll-bar",
            onMouseEnter: () => {
              N.set(!0);
            },
            onMouseLeave: () => {
              N.set(!1);
            },
            onPointerDown: (b) => {
              s.set(!0), C(b.clientY);
            },
            style: {
              ...k(N.get && "gray.opacity")
            },
            className: S("absolute right-0 w-[5px] h-full inset-y-0 transition-[width] duration-300 backdrop-blur-md", N.get && "w-[20px]"),
            children: /* @__PURE__ */ o(
              "div",
              {
                "aria-label": "scroll-bar-thumb",
                className: "w-full transition-[top] duration-100 inset-x-0 absolute",
                ref: j,
                style: {
                  ...k("gray.opacity.2"),
                  ...Ie({
                    height: `${v}%`,
                    top: `${x}%`
                  })
                },
                onMouseDown: () => {
                  s.set(!0);
                  const b = (L) => {
                    C(L.clientY);
                  };
                  document.addEventListener("mousemove", b);
                  const O = () => {
                    document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", O);
                  };
                  document.addEventListener("mouseup", O);
                }
              }
            )
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            "data-scrolled": h.get >= 10,
            className: "-top-[20px] absolute inset-x-0 h-[20px]",
            style: {
              ...k(
                h.get >= 10 && {
                  boxShadow: pe([
                    {
                      x: 0,
                      y: 4,
                      size: 10,
                      blur: 10,
                      colorId: "shadow.color"
                    }
                  ])
                }
              )
            }
          }
        )
      ]
    }
  ) });
}
function Xn() {
  const e = U.getOneFeild("findConfigurations", "value"), r = We.getAll(), t = g.useMemo(() => typeof e == "string" ? r.filter(({ colorId: n }) => De(n, e)) : r, [r, e]);
  return g.useEffect(() => {
    G("configurations.found.length", t.length);
  }, [t]), /* @__PURE__ */ o(
    Be,
    {
      countLastItems: -1,
      focusId: "colors-list",
      slotId: "colors-list",
      data: t,
      itemSize: 50,
      component: ({ data: n, style: c, status: l, index: a, handel: d }) => {
        var m;
        const i = F(!1), p = F(!1), h = $(), f = X("window/dark.boolean"), y = g.useMemo(() => mr(!!f, n), [f, n]);
        let s = null;
        return /* @__PURE__ */ M(
          "div",
          {
            onMouseEnter: () => i.set(!0),
            onMouseLeave: () => i.set(!1),
            style: {
              ...c,
              ...h(
                a % 2 && "primary.background",
                i.get && "gray.opacity",
                l.isFocused && { borderColor: "primary" },
                l.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content"
                }
              )
            },
            className: S(`
              flex
              justify-between
              items-center
              p-3
              gap-2
              border
              border-solid
              border-transparent
            `),
            onClick: () => {
              d.focus(), d.submit();
            },
            children: [
              /* @__PURE__ */ o("div", { className: "flex items-center gap-x-2", children: /* @__PURE__ */ o("span", { className: "capitalize", children: ot(n.colorId.replace(/[^a-zA-Z0-9]+/gi, " "), "camel", "normal") }) }),
              /* @__PURE__ */ M("span", { className: "inline-flex flex-wrap items-center gap-x-2", children: [
                (m = n.propositions) == null ? void 0 : m.map((u, w) => /* @__PURE__ */ o(
                  "span",
                  {
                    className: S(`
                      inline-block
                      w-[25px]
                      h-[25px]
                      rounded-md
                      border
                      border-solid
                      border-transparent
                    `),
                    style: {
                      backgroundColor: u,
                      ...h({
                        borderColor: "borders"
                      })
                    }
                  },
                  w
                )),
                /* @__PURE__ */ o(bt, { title: `**${y}**`.toUpperCase(), children: /* @__PURE__ */ o(
                  "label",
                  {
                    className: S(`
                  inline-block
                  w-[25px]
                  h-[25px]
                  rounded-md
                  border
                  border-solid
                  border-transparent
                `),
                    style: {
                      backgroundColor: y,
                      borderColor: "white"
                    },
                    htmlFor: `color:${n.colorId}`
                  },
                  a
                ) }),
                /* @__PURE__ */ M("div", { className: "flex items-center tips", children: [
                  i.get && /* @__PURE__ */ o(
                    re,
                    {
                      icon: p.get ? ne : Le,
                      onClick: async () => {
                        y && (p.set(!0), await navigator.clipboard.writeText(y));
                      },
                      onMouseLeave: () => {
                        p.set(!1);
                      }
                    }
                  ),
                  /* @__PURE__ */ o(
                    ie,
                    {
                      id: `color:${n.colorId}`,
                      tabIndex: -1,
                      value: y,
                      type: "color",
                      onValueChange: (u) => {
                        s != null && clearTimeout(s), s = setTimeout(() => {
                          We.setOneFeild(n.colorId, f ? "dark" : "light", u);
                        }, 1e3);
                      },
                      className: "w-0 h-0 invisible pointer-events-none"
                    }
                  )
                ] })
              ] })
            ]
          }
        );
      }
    }
  );
}
const Yn = () => {
  const e = Ve.getTemp("type"), r = $();
  return /* @__PURE__ */ o(
    Pt,
    {
      className: "flex flex-col justify-between max-md:rounded-none w-[70vw] max-md:w-full h-[80vh] max-md:h-full",
      list: [
        /* @__PURE__ */ o(
          Ht,
          {
            title: e || "Work Off",
            rightSide: /* @__PURE__ */ o(
              ae,
              {
                icon: me,
                onClick: () => {
                  Ve.setTemp("error", "Escape Take Image");
                }
              }
            )
          }
        ),
        /* @__PURE__ */ o("div", { className: S("p-2 relative overflow-hidden flex items-center"), children: /* @__PURE__ */ o(
          "div",
          {
            className: "border border-transparent border-solid rounded-[10px] w-full h-full overflow-hidden",
            style: {
              ...r("secondary.background", {
                borderColor: "borders"
              })
            },
            children: e && /* @__PURE__ */ o(Ut, { onRead: () => {
            }, delay: 200, width: 400, height: 400, videoConstraints: !0 })
          }
        ) }),
        e == "take" && /* @__PURE__ */ o("div", { className: "flex justify-evenly p-4 w-full h-[70px] text-2xl", children: /* @__PURE__ */ o(bt, { title: "take image", children: /* @__PURE__ */ o(
          ae,
          {
            onClick: () => {
              q("camera-take");
            },
            icon: lt
          }
        ) }) })
      ],
      tabIndex: 1,
      id: "camera-view",
      style: {
        ...r("primary.background", {
          borderColor: "borders"
        })
      }
    }
  );
};
function Tr({ content: e }) {
  const r = $(), t = /mac/gi.test(navigator.platform), n = {
    ...r({
      backgroundColor: "gray.opacity",
      borderColor: "gray.opacity.2"
    })
  };
  return /* @__PURE__ */ M(
    "div",
    {
      style: n,
      className: S(`
        rounded-[4px]
        border-solid
        border-transparent
        border-b-4
        border-x
        border-t
        capitalize
        px-1
      `),
      children: [
        /control/gi.test(e) && (t ? /* @__PURE__ */ o(ce, { icon: Gt }) : "ctrl"),
        /shift/gi.test(e) && (t ? /* @__PURE__ */ o(ce, { icon: at }) : "shift"),
        [/control/gi, /shift/gi].every((c) => !c.test(e)) && e
      ]
    }
  );
}
function vt({ shortcut: e = [], className: r, ...t }) {
  const n = typeof e == "string" ? [e] : e;
  return /* @__PURE__ */ o(
    "span",
    {
      ...t,
      className: S(
        `
        capitalize
        items-center
        gap-x-2
        truncate
        mx-1
      `,
        r
      ),
      children: /* @__PURE__ */ o(
        xe,
        {
          list: n.map((c, l) => {
            const a = c.split("+");
            return /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-x-[1px]", children: /* @__PURE__ */ o(
              xe,
              {
                list: a.map((d, i) => /* @__PURE__ */ o(Tr, { content: d }, i)),
                joinComponent: /* @__PURE__ */ o("span", { children: "+" })
              }
            ) }, l);
          }),
          joinComponent: /* @__PURE__ */ o("span", { className: "mx-1", children: "Or" })
        }
      )
    }
  );
}
function te() {
  return te = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, te.apply(this, arguments);
}
const Rr = ["children", "options"];
var Xe, Ye;
(function(e) {
  e.blockQuote = "0", e.breakLine = "1", e.breakThematic = "2", e.codeBlock = "3", e.codeFenced = "4", e.codeInline = "5", e.footnote = "6", e.footnoteReference = "7", e.gfmTask = "8", e.heading = "9", e.headingSetext = "10", e.htmlBlock = "11", e.htmlComment = "12", e.htmlSelfClosing = "13", e.image = "14", e.link = "15", e.linkAngleBraceStyleDetector = "16", e.linkBareUrlDetector = "17", e.linkMailtoDetector = "18", e.newlineCoalescer = "19", e.orderedList = "20", e.paragraph = "21", e.ref = "22", e.refImage = "23", e.refLink = "24", e.table = "25", e.tableSeparator = "26", e.text = "27", e.textBolded = "28", e.textEmphasized = "29", e.textEscaped = "30", e.textMarked = "31", e.textStrikethroughed = "32", e.unorderedList = "33";
})(Xe || (Xe = {})), function(e) {
  e[e.MAX = 0] = "MAX", e[e.HIGH = 1] = "HIGH", e[e.MED = 2] = "MED", e[e.LOW = 3] = "LOW", e[e.MIN = 4] = "MIN";
}(Ye || (Ye = {}));
const Ze = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, r) => (e[r.toLowerCase()] = r, e), { for: "htmlFor" }), qe = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, $r = ["style", "script"], jr = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, Ar = /mailto:/i, Lr = /\n{2,}$/, wt = /^(\s*>[\s\S]*?)(?=\n{2,})/, Ir = /^ *> ?/gm, Dr = /^ {2,}\n/, Br = /^(?:( *[-*_])){3,} *(?:\n *)+\n/, kt = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/, Nt = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, zr = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/, Pr = /^(?:\n *)*\n/, Hr = /\r\n?/g, Ur = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, _r = /^\[\^([^\]]+)]/, Wr = /\f/g, Vr = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/, Gr = /^\s*?\[(x|\s)\]/, Et = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Ct = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Mt = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, $e = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i, Kr = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, Ot = /^<!--[\s\S]*?(?:-->)/, Xr = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, je = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, Yr = /^\{.*\}$/, Zr = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, qr = /^<([^ >]+@[^ >]+)>/, Qr = /^<([^ >]+:\/[^ >]+)>/, Jr = /-([a-z])?/gi, Ft = /^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, en = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, tn = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, rn = /^\[([^\]]*)\] ?\[([^\]]*)\]/, nn = /(\[|\])/g, sn = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, on = /\t/g, ln = /(^ *\||\| *$)/g, an = /^ *:-+: *$/, cn = /^ *:-+ *$/, dn = /^ *-+: *$/, ke = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)", un = new RegExp(`^([*_])\\1${ke}\\1\\1(?!\\1)`), fn = new RegExp(`^([*_])${ke}\\1(?!\\1|\\w)`), mn = new RegExp(`^==${ke}==`), pn = new RegExp(`^~~${ke}~~`), gn = /^\\([^0-9A-Za-z\s])/, hn = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i, yn = /^\n+/, bn = /^([ \t]*)/, xn = /\\([^\\])/g, Qe = / *\n+$/, vn = /(?:^|\n)( *)$/, ze = "(?:\\d+\\.)", Pe = "(?:[*+-])";
function St(e) {
  return "( *)(" + (e === 1 ? ze : Pe) + ") +";
}
const Tt = St(1), Rt = St(2);
function $t(e) {
  return new RegExp("^" + (e === 1 ? Tt : Rt));
}
const wn = $t(1), kn = $t(2);
function jt(e) {
  return new RegExp("^" + (e === 1 ? Tt : Rt) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? ze : Pe) + " )[^\\n]*)*(\\n|$)", "gm");
}
const At = jt(1), Lt = jt(2);
function It(e) {
  const r = e === 1 ? ze : Pe;
  return new RegExp("^( *)(" + r + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + r + " (?!" + r + " ))\\n*|\\s*\\n*$)");
}
const Dt = It(1), Bt = It(2);
function Je(e, r) {
  const t = r === 1, n = t ? Dt : Bt, c = t ? At : Lt, l = t ? wn : kn;
  return { match(a, d, i) {
    const p = vn.exec(i);
    return p && (d.list || !d.inline && !d.simple) ? n.exec(a = p[1] + a) : null;
  }, order: 1, parse(a, d, i) {
    const p = t ? +a[2] : void 0, h = a[0].replace(Lr, `
`).match(c);
    let f = !1;
    return { items: h.map(function(y, s) {
      const m = l.exec(y)[0].length, u = new RegExp("^ {1," + m + "}", "gm"), w = y.replace(u, "").replace(l, ""), v = s === h.length - 1, x = w.indexOf(`

`) !== -1 || v && f;
      f = x;
      const E = i.inline, N = i.list;
      let R;
      i.list = !0, x ? (i.inline = !1, R = w.replace(Qe, `

`)) : (i.inline = !0, R = w.replace(Qe, ""));
      const T = d(R, i);
      return i.inline = E, i.list = N, T;
    }), ordered: t, start: p };
  }, render: (a, d, i) => e(a.ordered ? "ol" : "ul", { key: i.key, start: a.type === "20" ? a.start : void 0 }, a.items.map(function(p, h) {
    return e("li", { key: h }, d(p, i));
  })) };
}
const Nn = new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), En = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, zt = [wt, kt, Nt, Et, Mt, Ct, Ot, Ft, At, Dt, Lt, Bt], Cn = [...zt, /^[^\n]+(?:  \n|\n{2,})/, $e, je];
function Mn(e) {
  return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function On(e) {
  return dn.test(e) ? "right" : an.test(e) ? "center" : cn.test(e) ? "left" : null;
}
function et(e, r, t, n) {
  const c = t.inTable;
  t.inTable = !0;
  let l = e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce((d, i) => (i.trim() === "|" ? d.push(n ? { type: "26" } : { type: "27", text: i }) : i !== "" && d.push.apply(d, r(i, t)), d), []);
  t.inTable = c;
  let a = [[]];
  return l.forEach(function(d, i) {
    d.type === "26" ? i !== 0 && i !== l.length - 1 && a.push([]) : (d.type !== "27" || l[i + 1] != null && l[i + 1].type !== "26" || (d.text = d.text.trimEnd()), a[a.length - 1].push(d));
  }), a;
}
function Fn(e, r, t) {
  t.inline = !0;
  const n = e[2] ? e[2].replace(ln, "").split("|").map(On) : [], c = e[3] ? function(a, d, i) {
    return a.trim().split(`
`).map(function(p) {
      return et(p, d, i, !0);
    });
  }(e[3], r, t) : [], l = et(e[1], r, t, !!c.length);
  return t.inline = !1, c.length ? { align: n, cells: c, header: l, type: "25" } : { children: l, type: "21" };
}
function tt(e, r) {
  return e.align[r] == null ? {} : { textAlign: e.align[r] };
}
function Y(e) {
  return function(r, t) {
    return t.inline ? e.exec(r) : null;
  };
}
function Z(e) {
  return function(r, t) {
    return t.inline || t.simple ? e.exec(r) : null;
  };
}
function V(e) {
  return function(r, t) {
    return t.inline || t.simple ? null : e.exec(r);
  };
}
function ue(e) {
  return function(r) {
    return e.exec(r);
  };
}
function Sn(e, r, t) {
  if (r.inline || r.simple || t && !t.endsWith(`
`)) return null;
  let n = "";
  e.split(`
`).every((l) => !zt.some((a) => a.test(l)) && (n += l + `
`, l.trim()));
  const c = n.trimEnd();
  return c == "" ? null : [n, c];
}
function le(e) {
  try {
    if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return;
  } catch {
    return null;
  }
  return e;
}
function rt(e) {
  return e.replace(xn, "$1");
}
function be(e, r, t) {
  const n = t.inline || !1, c = t.simple || !1;
  t.inline = !0, t.simple = !0;
  const l = e(r, t);
  return t.inline = n, t.simple = c, l;
}
function Tn(e, r, t) {
  const n = t.inline || !1, c = t.simple || !1;
  t.inline = !1, t.simple = !0;
  const l = e(r, t);
  return t.inline = n, t.simple = c, l;
}
function Rn(e, r, t) {
  const n = t.inline || !1;
  t.inline = !1;
  const c = e(r, t);
  return t.inline = n, c;
}
const Me = (e, r, t) => ({ children: be(r, e[1], t) });
function Oe() {
  return {};
}
function Fe() {
  return null;
}
function $n(...e) {
  return e.filter(Boolean).join(" ");
}
function Se(e, r, t) {
  let n = e;
  const c = r.split(".");
  for (; c.length && (n = n[c[0]], n !== void 0); ) c.shift();
  return n || t;
}
function jn(e = "", r = {}) {
  r.overrides = r.overrides || {}, r.slugify = r.slugify || Mn, r.namedCodesToUnicode = r.namedCodesToUnicode ? te({}, qe, r.namedCodesToUnicode) : qe;
  const t = r.createElement || he.createElement;
  function n(s, m, ...u) {
    const w = Se(r.overrides, `${s}.props`, {});
    return t(function(v, x) {
      const E = Se(x, v);
      return E ? typeof E == "function" || typeof E == "object" && "render" in E ? E : Se(x, `${v}.component`, v) : v;
    }(s, r.overrides), te({}, m, w, { className: $n(m == null ? void 0 : m.className, w.className) || void 0 }), ...u);
  }
  function c(s) {
    s = s.replace(Vr, "");
    let m = !1;
    r.forceInline ? m = !0 : r.forceBlock || (m = sn.test(s) === !1);
    const u = h(p(m ? s : `${s.trimEnd().replace(yn, "")}

`, { inline: m }));
    for (; typeof u[u.length - 1] == "string" && !u[u.length - 1].trim(); ) u.pop();
    if (r.wrapper === null) return u;
    const w = r.wrapper || (m ? "span" : "div");
    let v;
    if (u.length > 1 || r.forceWrapper) v = u;
    else {
      if (u.length === 1) return v = u[0], typeof v == "string" ? n("span", { key: "outer" }, v) : v;
      v = null;
    }
    return he.createElement(w, { key: "outer" }, v);
  }
  function l(s) {
    const m = s.match(jr);
    return m ? m.reduce(function(u, w, v) {
      const x = w.indexOf("=");
      if (x !== -1) {
        const E = function(k) {
          return k.indexOf("-") !== -1 && k.match(Xr) === null && (k = k.replace(Jr, function(C, j) {
            return j.toUpperCase();
          })), k;
        }(w.slice(0, x)).trim(), N = function(k) {
          const C = k[0];
          return (C === '"' || C === "'") && k.length >= 2 && k[k.length - 1] === C ? k.slice(1, -1) : k;
        }(w.slice(x + 1).trim()), R = Ze[E] || E, T = u[R] = function(k, C) {
          return k === "style" ? C.split(/;\s?/).reduce(function(j, A) {
            const P = A.slice(0, A.indexOf(":"));
            return j[P.trim().replace(/(-[a-z])/g, (b) => b[1].toUpperCase())] = A.slice(P.length + 1).trim(), j;
          }, {}) : k === "href" || k === "src" ? le(C) : (C.match(Yr) && (C = C.slice(1, C.length - 1)), C === "true" || C !== "false" && C);
        }(E, N);
        typeof T == "string" && ($e.test(T) || je.test(T)) && (u[R] = he.cloneElement(c(T.trim()), { key: v }));
      } else w !== "style" && (u[Ze[w] || w] = !0);
      return u;
    }, {}) : null;
  }
  const a = [], d = {}, i = { 0: { match: V(wt), order: 1, parse: (s, m, u) => ({ children: m(s[0].replace(Ir, ""), u) }), render: (s, m, u) => n("blockquote", { key: u.key }, m(s.children, u)) }, 1: { match: ue(Dr), order: 1, parse: Oe, render: (s, m, u) => n("br", { key: u.key }) }, 2: { match: V(Br), order: 1, parse: Oe, render: (s, m, u) => n("hr", { key: u.key }) }, 3: { match: V(Nt), order: 0, parse: (s) => ({ lang: void 0, text: s[0].replace(/^ {4}/gm, "").replace(/\n+$/, "") }), render: (s, m, u) => n("pre", { key: u.key }, n("code", te({}, s.attrs, { className: s.lang ? `lang-${s.lang}` : "" }), s.text)) }, 4: { match: V(kt), order: 0, parse: (s) => ({ attrs: l(s[3] || ""), lang: s[2] || void 0, text: s[4], type: "3" }) }, 5: { match: Z(zr), order: 3, parse: (s) => ({ text: s[2] }), render: (s, m, u) => n("code", { key: u.key }, s.text) }, 6: { match: V(Ur), order: 0, parse: (s) => (a.push({ footnote: s[2], identifier: s[1] }), {}), render: Fe }, 7: { match: Y(_r), order: 1, parse: (s) => ({ target: `#${r.slugify(s[1])}`, text: s[1] }), render: (s, m, u) => n("a", { key: u.key, href: le(s.target) }, n("sup", { key: u.key }, s.text)) }, 8: { match: Y(Gr), order: 1, parse: (s) => ({ completed: s[1].toLowerCase() === "x" }), render: (s, m, u) => n("input", { checked: s.completed, key: u.key, readOnly: !0, type: "checkbox" }) }, 9: { match: V(r.enforceAtxHeadings ? Ct : Et), order: 1, parse: (s, m, u) => ({ children: be(m, s[2], u), id: r.slugify(s[2]), level: s[1].length }), render: (s, m, u) => n(`h${s.level}`, { id: s.id, key: u.key }, m(s.children, u)) }, 10: { match: V(Mt), order: 0, parse: (s, m, u) => ({ children: be(m, s[1], u), level: s[2] === "=" ? 1 : 2, type: "9" }) }, 11: { match: ue($e), order: 1, parse(s, m, u) {
    const [, w] = s[3].match(bn), v = new RegExp(`^${w}`, "gm"), x = s[3].replace(v, ""), E = (N = x, Cn.some((C) => C.test(N)) ? Rn : be);
    var N;
    const R = s[1].toLowerCase(), T = $r.indexOf(R) !== -1, k = { attrs: l(s[2]), noInnerParse: T, tag: (T ? R : s[1]).trim() };
    return u.inAnchor = u.inAnchor || R === "a", T ? k.text = s[3] : k.children = E(m, x, u), u.inAnchor = !1, k;
  }, render: (s, m, u) => n(s.tag, te({ key: u.key }, s.attrs), s.text || m(s.children, u)) }, 13: { match: ue(je), order: 1, parse: (s) => ({ attrs: l(s[2] || ""), tag: s[1].trim() }), render: (s, m, u) => n(s.tag, te({}, s.attrs, { key: u.key })) }, 12: { match: ue(Ot), order: 1, parse: () => ({}), render: Fe }, 14: { match: Z(En), order: 1, parse: (s) => ({ alt: s[1], target: rt(s[2]), title: s[3] }), render: (s, m, u) => n("img", { key: u.key, alt: s.alt || void 0, title: s.title || void 0, src: le(s.target) }) }, 15: { match: Y(Nn), order: 3, parse: (s, m, u) => ({ children: Tn(m, s[1], u), target: rt(s[2]), title: s[3] }), render: (s, m, u) => n("a", { key: u.key, href: le(s.target), title: s.title }, m(s.children, u)) }, 16: { match: Y(Qr), order: 0, parse: (s) => ({ children: [{ text: s[1], type: "27" }], target: s[1], type: "15" }) }, 17: { match: (s, m) => m.inAnchor ? null : Y(Zr)(s, m), order: 0, parse: (s) => ({ children: [{ text: s[1], type: "27" }], target: s[1], title: void 0, type: "15" }) }, 18: { match: Y(qr), order: 0, parse(s) {
    let m = s[1], u = s[1];
    return Ar.test(u) || (u = "mailto:" + u), { children: [{ text: m.replace("mailto:", ""), type: "27" }], target: u, type: "15" };
  } }, 20: Je(n, 1), 33: Je(n, 2), 19: { match: V(Pr), order: 3, parse: Oe, render: () => `
` }, 21: { match: Sn, order: 3, parse: Me, render: (s, m, u) => n("p", { key: u.key }, m(s.children, u)) }, 22: { match: Y(en), order: 0, parse: (s) => (d[s[1]] = { target: s[2], title: s[4] }, {}), render: Fe }, 23: { match: Z(tn), order: 0, parse: (s) => ({ alt: s[1] || void 0, ref: s[2] }), render: (s, m, u) => d[s.ref] ? n("img", { key: u.key, alt: s.alt, src: le(d[s.ref].target), title: d[s.ref].title }) : null }, 24: { match: Y(rn), order: 0, parse: (s, m, u) => ({ children: m(s[1], u), fallbackChildren: m(s[0].replace(nn, "\\$1"), u), ref: s[2] }), render: (s, m, u) => d[s.ref] ? n("a", { key: u.key, href: le(d[s.ref].target), title: d[s.ref].title }, m(s.children, u)) : n("span", { key: u.key }, m(s.fallbackChildren, u)) }, 25: { match: V(Ft), order: 1, parse: Fn, render(s, m, u) {
    const w = s;
    return n("table", { key: u.key }, n("thead", null, n("tr", null, w.header.map(function(v, x) {
      return n("th", { key: x, style: tt(w, x) }, m(v, u));
    }))), n("tbody", null, w.cells.map(function(v, x) {
      return n("tr", { key: x }, v.map(function(E, N) {
        return n("td", { key: N, style: tt(w, N) }, m(E, u));
      }));
    })));
  } }, 27: { match: ue(hn), order: 4, parse: (s) => ({ text: s[0].replace(Kr, (m, u) => r.namedCodesToUnicode[u] ? r.namedCodesToUnicode[u] : m) }), render: (s) => s.text }, 28: { match: Z(un), order: 2, parse: (s, m, u) => ({ children: m(s[2], u) }), render: (s, m, u) => n("strong", { key: u.key }, m(s.children, u)) }, 29: { match: Z(fn), order: 3, parse: (s, m, u) => ({ children: m(s[2], u) }), render: (s, m, u) => n("em", { key: u.key }, m(s.children, u)) }, 30: { match: Z(gn), order: 1, parse: (s) => ({ text: s[1], type: "27" }) }, 31: { match: Z(mn), order: 3, parse: Me, render: (s, m, u) => n("mark", { key: u.key }, m(s.children, u)) }, 32: { match: Z(pn), order: 3, parse: Me, render: (s, m, u) => n("del", { key: u.key }, m(s.children, u)) } };
  r.disableParsingRawHTML === !0 && (delete i[11], delete i[13]);
  const p = function(s) {
    let m = Object.keys(s);
    function u(w, v) {
      let x = [], E = "";
      for (; w; ) {
        let N = 0;
        for (; N < m.length; ) {
          const R = m[N], T = s[R], k = T.match(w, v, E);
          if (k) {
            const C = k[0];
            w = w.substring(C.length);
            const j = T.parse(k, u, v);
            j.type == null && (j.type = R), x.push(j), E = C;
            break;
          }
          N++;
        }
      }
      return x;
    }
    return m.sort(function(w, v) {
      let x = s[w].order, E = s[v].order;
      return x !== E ? x - E : w < v ? -1 : 1;
    }), function(w, v) {
      return u(function(x) {
        return x.replace(Hr, `
`).replace(Wr, "").replace(on, "    ");
      }(w), v);
    };
  }(i), h = (f = /* @__PURE__ */ function(s, m) {
    return function(u, w, v) {
      const x = s[u.type].render;
      return m ? m(() => x(u, w, v), u, w, v) : x(u, w, v);
    };
  }(i, r.renderRule), function s(m, u = {}) {
    if (Array.isArray(m)) {
      const w = u.key, v = [];
      let x = !1;
      for (let E = 0; E < m.length; E++) {
        u.key = E;
        const N = s(m[E], u), R = typeof N == "string";
        R && x ? v[v.length - 1] += N : N !== null && v.push(N), x = R;
      }
      return u.key = w, v;
    }
    return f(m, s, u);
  });
  var f;
  const y = c(e);
  return a.length ? n("div", null, y, n("footer", { key: "footer" }, a.map(function(s) {
    return n("div", { id: r.slugify(s.identifier), key: s.identifier }, s.identifier, h(p(s.footnote, { inline: !0 })));
  }))) : y;
}
const An = (e) => {
  let { children: r = "", options: t } = e, n = function(c, l) {
    if (c == null) return {};
    var a, d, i = {}, p = Object.keys(c);
    for (d = 0; d < p.length; d++) l.indexOf(a = p[d]) >= 0 || (i[a] = c[a]);
    return i;
  }(e, Rr);
  return he.cloneElement(jn(r, t), n);
};
function He({ value: e }) {
  const r = $();
  return /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
    An,
    {
      options: {
        overrides: {
          hr() {
            return /* @__PURE__ */ o("div", { className: "my-2", children: /* @__PURE__ */ o(Ae, {}) });
          },
          h1(t) {
            return /* @__PURE__ */ o("h1", { className: "text-6xl", children: t == null ? void 0 : t.children });
          },
          h2(t) {
            return /* @__PURE__ */ o("h1", { className: "text-5xl", children: t == null ? void 0 : t.children });
          },
          h3(t) {
            return /* @__PURE__ */ o("h1", { className: "text-4xl", children: t == null ? void 0 : t.children });
          },
          h4(t) {
            return /* @__PURE__ */ o("h1", { className: "text-3xl", children: t == null ? void 0 : t.children });
          },
          h5(t) {
            return /* @__PURE__ */ o("h1", { className: "text-2xl", children: t == null ? void 0 : t.children });
          },
          h6(t) {
            return /* @__PURE__ */ o("h1", { className: "text-xl", children: t == null ? void 0 : t.children });
          },
          code(t) {
            return /* @__PURE__ */ o(
              "code",
              {
                className: "px-2 py-1 border border-transparent border-solid rounded-md leading-[26px]",
                style: {
                  ...r("gray.opacity", {
                    borderColor: "borders"
                  })
                },
                children: t == null ? void 0 : t.children
              }
            );
          },
          input(t) {
            const n = F((t == null ? void 0 : t.checked) || !1);
            return (t == null ? void 0 : t.type) === "checkbox" ? /* @__PURE__ */ o(
              Sr,
              {
                id: mt(),
                state: n,
                config: {
                  style: "checkbox"
                }
              }
            ) : /* @__PURE__ */ o("input", { ...t });
          },
          img(t) {
            return /* @__PURE__ */ o("div", { className: "flex justify-center", children: /* @__PURE__ */ o(
              "div",
              {
                className: "rounded-lg sahdow-lg w-fit overflow-hidden",
                style: {
                  ...r({
                    boxShadow: pe([
                      {
                        colorId: "shadow.color"
                      }
                    ])
                  })
                },
                children: /* @__PURE__ */ o("img", { ...t })
              }
            ) });
          },
          p(t) {
            return /* @__PURE__ */ o("p", { className: "p-2", children: t == null ? void 0 : t.children });
          },
          a(t) {
            return /* @__PURE__ */ o(
              "a",
              {
                href: t == null ? void 0 : t.href,
                className: "hover:underline",
                style: {
                  ...r({
                    color: "primary"
                  })
                },
                children: t.children
              }
            );
          },
          table(t) {
            return /* @__PURE__ */ o(
              "div",
              {
                className: S(`
                    w-full
                    overflow-hidden
                    border
                    border-solid
                    border-transparent
                    my-2
                  `),
                style: {
                  ...r("gray.opacity", {
                    borderColor: "gray.opacity.2"
                  })
                },
                children: t.children
              }
            );
          },
          tr(t) {
            const n = g.createRef(), c = g.useMemo(() => {
              let l = n.current, a = 0;
              for (; l; )
                a++, l = l.previousElementSibling;
              return a;
            }, [n.current]);
            return /* @__PURE__ */ o(
              "div",
              {
                ref: n,
                style: {
                  ...r(c % 2 && "gray.opacity")
                },
                className: "flex justify-between items-center gap-x-1 px-1 py-1 border border-transparent border-solid w-full",
                children: t.children
              }
            );
          },
          td(t) {
            return /* @__PURE__ */ o("div", { className: "w-full", children: t == null ? void 0 : t.children });
          },
          tbody(t) {
            return /* @__PURE__ */ o("div", { children: t == null ? void 0 : t.children });
          },
          thead(t) {
            return /* @__PURE__ */ o("div", { children: t == null ? void 0 : t.children });
          },
          th(t) {
            return /* @__PURE__ */ o("div", { className: "w-full", children: t == null ? void 0 : t.children });
          }
        },
        namedCodesToUnicode: { le: "≤" }
      },
      children: e
    }
  ) });
}
function Zn({ data: e }) {
  const r = pr("commandId"), t = U.getOneFeild("findCommand", "value"), n = g.useMemo(() => {
    if (r)
      return e[r];
  }, [r]), c = g.useMemo(() => (n == null ? void 0 : n.lines) || [], [n]), l = g.useMemo(() => c.filter(({ content: i }) => De(i, t)), [t, c]);
  g.useEffect(() => {
    I.setOneFeild("cmds/list", "focused", c != null && c.length ? 0 : null);
  }, [c]);
  const a = gr(l, "cmds/list", "submited");
  g.useEffect(() => {
    var i;
    a && (hr("commands.close"), U.setOneFeild("findCommand", "value", ""), (i = n == null ? void 0 : n.onSubmit) == null || i.call(n, a), I.setOneFeild("cmds/list", "submited", null));
  }, [a, n]);
  const d = $();
  return /* @__PURE__ */ M(
    "div",
    {
      className: "relative py-1 h-[50vh]",
      onClick: (i) => {
        i.currentTarget.contains(i.target) && ve("findCommand");
      },
      children: [
        !l.length && /* @__PURE__ */ o(
          "div",
          {
            style: {
              ...d({
                color: "gray.opacity.2"
              })
            },
            className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2",
            children: /* @__PURE__ */ o(Q, { content: "no result" })
          }
        ),
        /* @__PURE__ */ o(
          Be,
          {
            data: l,
            itemSize: 30,
            focusId: "cmds/list",
            slotId: "cmds/list",
            countLastItems: -1,
            component: ({ data: i, status: p, handel: h, style: f }) => {
              var m;
              const y = F(!1), s = g.createRef();
              return /* @__PURE__ */ M(
                "div",
                {
                  onMouseEnter: () => {
                    y.set(!0);
                  },
                  onMouseLeave: () => {
                    y.set(!1);
                  },
                  style: {
                    ...f,
                    ...d(y.get && "gray.opacity", p.isFocused && "secondary", p.isFocused && { color: "secondary.content" })
                  },
                  onClick: (u) => {
                    var w;
                    !((w = s.current) != null && w.contains(u.target)) && h.submit();
                  },
                  className: S(`
                flex
                border
                cursor-pointer
                border-transparent
                border-solid
                items-center
                justify-between
                mx-2
                px-3
                py-1
                rounded-md
              `),
                  children: [
                    /* @__PURE__ */ M("div", { className: "flex justify-between items-center gap-2 truncate", children: [
                      i.checked && /* @__PURE__ */ o(de, { icon: ne }),
                      /* @__PURE__ */ o("span", { children: i.content }),
                      i.sub && /* @__PURE__ */ o(
                        "div",
                        {
                          className: "inline-block mt-2 text-[10px]",
                          style: {
                            ...d({
                              color: "gray.opacity.2"
                            })
                          },
                          children: /* @__PURE__ */ o(He, { value: i.sub })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ M("span", { className: "inline-flex tools", children: [
                      i.keyPanding && /* @__PURE__ */ o(vt, { shortcut: i.keyPanding }),
                      /* @__PURE__ */ o("span", { ref: s, children: (y.get || p.isFocused) && ((m = i.tools) == null ? void 0 : m.map(({ icon: u, onClick: w }, v) => /* @__PURE__ */ o(
                        re,
                        {
                          icon: u,
                          onClick: async () => {
                            const x = w == null ? void 0 : w();
                            if (ve("findCommand"), x instanceof Promise) {
                              G("commands.isLoading", !0);
                              try {
                                await x;
                              } catch {
                              }
                              G("commands.isLoading", !1);
                            }
                          }
                        },
                        v
                      ))) })
                    ] })
                  ]
                }
              );
            }
          }
        )
      ]
    }
  );
}
const Ln = (e, r = "datetime-local") => r == "time" ? Ne(e, "HH:mm") : r == "month" ? Ne(e, "yyyy-MM") : r == "date" ? Ne(e, "yyyy-MM-dd") : e.toISOString().replace(/\.[0-9]+Z/gi, "");
function qn({ state: e, config: r = {}, id: t }) {
  const n = $(), c = F(!1), l = n("secondary.background", {
    borderColor: "borders"
  }), a = F(!0), d = n(
    c.get && a.get && {
      borderColor: "primary"
    },
    c.get && !a.get && {
      borderColor: "checkbox.true"
    }
  ), [i] = _t("no provided"), p = g.useCallback(() => {
    const h = /* @__PURE__ */ new Date();
    e.set(Ln(h, r.format));
  }, [r.format]);
  return /* @__PURE__ */ M(
    "div",
    {
      className: S(`
        border
        border-solid
        border-transparent
        rounded-[4px]
        flex
        px-1
      `),
      style: {
        ...l,
        ...d
      },
      children: [
        /* @__PURE__ */ o(
          ie,
          {
            id: t,
            style: {
              backgroundColor: "transparent"
            },
            type: r.format && ["date", "time", "month"].includes(r.format) ? r.format : "datetime-local",
            value: e.get ?? void 0,
            onKeyDown: (h) => {
              if (new we("control+shift+d").test(h)) {
                h.preventDefault(), p();
                return;
              }
              new we("control+backspace").test(h) && (h.preventDefault(), e.set(""));
            },
            onChange: (h) => {
              const f = h.currentTarget.value;
              if (!f) {
                a.set(!0);
                return;
              }
              a.set(!1), e.set(f);
            },
            className: S("p-1 border-none"),
            onBlur: () => {
              c.set(!1);
            },
            onFocus: () => {
              c.set(!0);
            },
            title: e.get || i
          }
        ),
        /* @__PURE__ */ o("div", { className: "inline-flex items-center tools", children: r.goToCurrent && /* @__PURE__ */ o(
          re,
          {
            icon: Kt,
            onClick: () => {
              p();
            }
          }
        ) })
      ]
    }
  );
}
const Qn = "enum/list";
function Jn({ config: e = {}, id: r, state: t }) {
  var p;
  const n = g.createRef(), c = $(), l = F(!1), a = g.useMemo(() => {
    var h;
    return (h = e.list) == null ? void 0 : h.find(({ value: f }) => f == t.get);
  }, [e, t.get]), d = g.useMemo(() => r + "-" + mt() + "-" + crypto.randomUUID(), [r]), i = se.getTemp("id");
  return /* @__PURE__ */ o("div", { className: "relative w-full", children: /* @__PURE__ */ M(
    "div",
    {
      id: r,
      ref: n,
      tabIndex: 1,
      onClick: () => {
        se.setTemp("id", d), se.setTemp("list", e.list || []), se.setTemp("choised", t.get);
        const h = yr("object.data.enum.result", Boolean, (f) => {
          const y = f.object.data.enum;
          (!y.id || y.id == d) && (y.id == d && t.set(y.result), se.setTemp("result", null), se.setTemp("id", null), h());
        });
      },
      onFocus: () => {
        l.set(!0);
      },
      onBlur: () => {
        l.set(!1);
      },
      className: S(`
          border
          border-solid
          border-transparent
          px-2
          py-1
          cursor-pointer
          rounded-md
          min-w-[80px]
          flex
          justify-between
          items-center
        `),
      style: {
        ...c(
          "gray.opacity",
          {
            borderColor: "borders"
          },
          l.get && {
            borderColor: "primary",
            backgroundColor: "gray.opacity.2"
          }
        )
      },
      children: [
        /* @__PURE__ */ o("div", { className: "w-full text-center", children: (a == null ? void 0 : a.content) || (a == null ? void 0 : a.value) || "no option choised" }),
        e.expandIcon !== !1 && !!((p = e.list) != null && p.length) && /* @__PURE__ */ o(ce, { icon: d == i ? at : Xt })
      ]
    }
  ) });
}
function In({
  className: e,
  multiLines: r = !1,
  onChange: t,
  onKeyDown: n,
  onSelect: c,
  onSelectionChange: l,
  onValueChange: a,
  onFocus: d,
  onBlur: i,
  propositions: p,
  selection: h,
  style: f,
  tabSize: y = 4,
  supportTab: s = !1,
  hidden: m,
  acceptKeys: u,
  pattern: w,
  ...v
}) {
  const x = g.createRef(), E = br(), N = g.useMemo(() => ct.join({ commandId: "input.completeWord" }, E, "commandId->command"), [E]), R = $(), T = g.createRef(), k = F(0), C = g.useMemo(() => {
    var b, O;
    return (O = (b = v.value) == null ? void 0 : b.toString().match(/[^ ]*$/gi)) == null ? void 0 : O[0];
  }, [v.value]), j = g.useMemo(() => {
    const b = (p == null ? void 0 : p.filter((O) => C && O.length != (C == null ? void 0 : C.length) && O.startsWith(C))) || [];
    return Yt(b).value;
  }, [p, C]), A = F(!1);
  g.useEffect(() => {
    T.current && (T.current.scrollTop = k.get);
  }, [k.get]), g.useEffect(() => () => {
    G("input.focusedHasProposition", !1), G("input.supportTab", !1), A.set(!1);
  }, []), g.useEffect(() => {
    !x.current || !h || x.current.setSelectionRange(h.start, h.end, h.direction);
  }, [x.current, h]);
  const P = g.useCallback((b) => {
    l == null || l({
      start: b.currentTarget.selectionStart,
      end: b.currentTarget.selectionEnd,
      direction: b.currentTarget.selectionDirection
    });
  }, []);
  return g.useEffect(() => {
    G("input.focusedHasProposition", !!(A.get && j));
  }, [A.get, j]), g.useEffect(() => {
    G("input.supportTab", A.get && s);
  }, [s, A.get]), K(
    "input.tab",
    () => {
      if (!A.get) return;
      const b = x.current;
      if (!b) return;
      const { selectionStart: O, selectionEnd: L, value: D } = b, B = O, z = L, ee = D.slice(0, O), _ = D.slice(L), W = " ".repeat(y);
      b.value = ee + W + _, b.setSelectionRange(B + y, z + y, "forward"), a == null || a(b.value), l == null || l({
        start: b.selectionStart,
        end: b.selectionEnd,
        direction: b.selectionDirection
      });
    },
    [x, A.get, l, a]
  ), K(
    "input.completeWord",
    () => {
      A.get && x.current && (x.current.value = x.current.value.replace(/[^ ]+$/gi, "") + j + " ", a == null || a(x.current.value));
    },
    [x, A.get, j, a]
  ), K(
    "input.selectLine",
    () => {
      if (!A.get || !x.current)
        return;
      const b = x.current, { selectionStart: O, selectionEnd: L, value: D } = b, B = D.slice(0, O), z = D.slice(L), ee = B.lastIndexOf(`
`) + 1;
      let _ = z.indexOf(`
`);
      _ === -1 && (_ = z.length), b.setSelectionRange(ee, L + _, "forward"), l == null || l({
        start: b.selectionStart,
        end: b.selectionEnd,
        direction: b.selectionDirection
      });
    },
    [x, A.get, l]
  ), K(
    "input.addLineBellow",
    () => {
      if (!A.get) return;
      const b = x.current;
      if (!b) return;
      const { selectionStart: O, selectionEnd: L, value: D } = b, B = D.slice(0, O), z = D.slice(L), ee = B.lastIndexOf(`
`) + 1;
      let _ = z.indexOf(`
`);
      _ === -1 && (_ = z.length);
      const W = D.slice(ee, L + _);
      b.value = B + `
` + W + z, b.setSelectionRange(O + W.length + 1, L + W.length + 1, "forward"), a == null || a(b.value), l == null || l({
        start: b.selectionStart,
        end: b.selectionEnd,
        direction: b.selectionDirection
      });
    },
    [x, A.get, l, a]
  ), /* @__PURE__ */ M("div", { className: "relative flex w-full h-full", hidden: m, children: [
    /* @__PURE__ */ o(
      "textarea",
      {
        onScroll: (b) => {
          k.set(b.currentTarget.scrollTop);
        },
        ...v,
        onFocus: (b) => {
          A.set(!0), d == null || d(b);
        },
        onBlur: (b) => {
          A.set(!1), i == null || i(b);
        },
        style: {
          ...f,
          ...R({
            caretColor: "text.color"
          })
        },
        className: S(e, "font-[inherit] text-[inherit]"),
        spellCheck: !1,
        onSelect: (b) => {
          P(b), c == null || c(b);
        },
        ref: x,
        onKeyDown: (b) => {
          !r && b.key == "Enter" && b.preventDefault();
          const O = we.fromEvent(b);
          u && u.some((L) => new RegExp(L, "igm").test(O)) && b.preventDefault(), n == null || n(b);
        },
        onChange: (b) => {
          t == null || t(b), a == null || a(b.currentTarget.value);
        }
      }
    ),
    /* @__PURE__ */ o("div", { ref: T, className: S(e, "absolute inset-0 pointer-events-none overflow-y-auto overflow-x-hidden"), children: /* @__PURE__ */ M("pre", { className: "font-[inherit] text-wrap", children: [
      /* @__PURE__ */ o("span", { className: "text-transparent", children: v.value }),
      typeof C == "string" && j && /* @__PURE__ */ M(H, { children: [
        /* @__PURE__ */ o(
          "span",
          {
            style: {
              ...R({
                color: "autoCompleteInput"
              })
            },
            children: j.replace(C, "")
          }
        ),
        !!N.length && /* @__PURE__ */ o(vt, { shortcut: N.map(({ value: b }) => b) })
      ] })
    ] }) })
  ] });
}
function es({
  inputName: e,
  selectWhenFocusIn: r,
  placeholder: t,
  controlsPosition: n = "bottom",
  className: c,
  value: l,
  rows: a,
  style: d,
  controls: i,
  onFocus: p,
  onBlur: h,
  acceptHistory: f,
  propositions: y,
  ...s
}) {
  const m = U.getOneFeild(e, "value"), u = U.getOneFeild(e, "selection"), w = U.useOneFeild(e, "history"), v = $(), x = F(!1);
  pt(
    () => {
      !f && !m || w.set((N) => N ? [...N, m] : [m]);
    },
    [m, f],
    2e3
  ), gt(e), g.useEffect(() => {
    U.setOneFeild(e, "controls", i || {});
  }, [i, e]);
  const E = g.useMemo(() => Object.entries(i || {}).map(([N, R]) => {
    try {
      const k = (m == null ? void 0 : m.match(new RegExp(N, "ig"))) ? "succ" : "err";
      return R[k] ? {
        type: k,
        content: R[k]
      } : void 0;
    } catch (T) {
      Zt.warn("expression not correct", T);
      return;
    }
  }).filter(Boolean).map((N) => N), [m, i]);
  return /* @__PURE__ */ M("div", { className: "relative flex items-center w-full h-full", children: [
    /* @__PURE__ */ o(
      In,
      {
        placeholder: `${t || ""}${x.get ? "..." : ""}`,
        propositions: y,
        className: S(
          `
            p-2
            border
            border-solid
            border-transparent
            font-[inherit]
            resize-none
            rounded-sm
            w-full
            text-xs
          `,
          c
        ),
        onFocus: (N) => {
          r && N.currentTarget.select(), x.set(!0), p == null || p(N);
        },
        onBlur: (N) => {
          x.set(!1), h == null || h(N);
        },
        value: m,
        onValueChange: (N) => {
          U.setOneFeild(e, "value", N);
        },
        selection: u,
        onSelectionChange: (N) => {
          U.setOneFeild(e, "selection", N);
        },
        style: {
          ...v({
            borderColor: x.get ? "primary" : "borders",
            backgroundColor: "field.background"
          }),
          ...d
        },
        title: void 0,
        rows: a || 1,
        id: e,
        ...s
      }
    ),
    x.get && !!E.length && /* @__PURE__ */ o(
      "div",
      {
        className: S(
          `
              z-[100000000000000000000000000000000000000]
              rounded-md
              absolute
              right-0
              border
              border-solid
              border-transparent
              text-xs
              my-1
              max-w-full
              w-fit
            `,
          n == "top" ? "bottom-full" : "top-full"
        ),
        style: {
          ...v("primary.background", {
            borderColor: "borders"
          })
        },
        children: /* @__PURE__ */ o(
          xe,
          {
            list: E.map(({ content: N, type: R }, T) => {
              const k = R == "err" ? qt : ne;
              return /* @__PURE__ */ M("div", { className: "flex items-center gap-x-2 p-2", children: [
                /* @__PURE__ */ o(
                  ce,
                  {
                    style: {
                      ...v(
                        R == "err" && {
                          color: "warning.text"
                        },
                        R == "succ" && {
                          color: "success.text"
                        }
                      )
                    },
                    icon: k
                  }
                ),
                N && /* @__PURE__ */ o(He, { value: N })
              ] }, T);
            }),
            joinComponent: /* @__PURE__ */ o(Ae, {})
          }
        )
      }
    )
  ] });
}
const Dn = ({ isSelected: e, item: r, toggle: t }) => {
  const n = F(!1), c = $();
  return /* @__PURE__ */ M(
    "button",
    {
      onMouseEnter: () => n.set(!0),
      onMouseLeave: () => n.set(!1),
      className: "inline-flex items-center gap-1 px-2 py-1 rounded-md text-nowrap cursor-pointer",
      tabIndex: -1,
      style: {
        ...c(
          {
            background: "gray.opacity"
          },
          n.get && {
            background: "gray.opacity.2"
          },
          e && {
            background: ht("to right", "secondary", "primary"),
            color: "secondary.content"
          }
        )
      },
      onClick: () => {
        t();
      },
      children: [
        /* @__PURE__ */ o(
          de,
          {
            icon: ne,
            iconClassName: S(
              `
            transition-transform
            duration-300
            transform
            scale-0
          `,
              e && "scale-100"
            )
          }
        ),
        r.content
      ]
    }
  );
};
function ts({ id: e, config: r = {}, state: t }) {
  var n;
  return /* @__PURE__ */ o("div", { id: e, className: "flex flex-wrap gap-1 p-1 overflow-x-auto", tabIndex: 1, children: (n = r.list) == null ? void 0 : n.map((c, l) => {
    var d;
    const a = !!((d = t.get) != null && d.includes(c.value));
    return /* @__PURE__ */ o(
      Dn,
      {
        item: c,
        isSelected: a,
        toggle: () => {
          var i;
          a ? t.set((i = t.get) == null ? void 0 : i.filter((p) => p != c.value)) : t.set([...t.get || [], c.value]);
        }
      },
      l
    );
  }) });
}
function rs() {
  const e = U.getOneFeild("findConfigurations", "value"), r = g.useMemo(() => {
    const n = Object.entries(Qt).map(([a, d]) => ({
      iconName: a,
      icon: d,
      type: "solid"
    })), c = Object.entries(Jt).map(([a, d]) => ({ iconName: a, icon: d, type: "regular" })), l = Object.entries(er).map(([a, d]) => ({
      iconName: a,
      icon: d,
      type: "brad"
    }));
    return ct.orderBy([...n, ...c, ...l], "iconName", "asc");
  }, []), t = g.useMemo(() => typeof e == "string" ? r.filter(({ iconName: n }) => De(n, e)) : r, [r, e]);
  return g.useEffect(() => {
    G("configurations.found.length", t.length);
  }, [t]), /* @__PURE__ */ o(
    Be,
    {
      countLastItems: -1,
      focusId: "icons-list",
      slotId: "icons-list",
      data: t,
      itemSize: 50,
      component: ({ data: n, style: c, status: l, index: a, handel: d }) => {
        const i = F(!1), p = $(), h = g.useMemo(() => [i.get, l.isFocused, l.isSubmited].some(Boolean), [i.get, l]), f = F(!1);
        return /* @__PURE__ */ M(
          "div",
          {
            onMouseEnter: () => i.set(!0),
            onMouseLeave: () => i.set(!1),
            style: {
              ...c,
              ...p(
                a % 2 && "primary.background",
                i.get && "gray.opacity",
                l.isFocused && { borderColor: "primary" },
                l.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content"
                }
              )
            },
            className: S(`
              flex
              justify-between
              items-center
              p-3
              gap-2
              border
              border-solid
              border-transparent
            `),
            onClick: () => {
              d.focus(), d.submit();
            },
            children: [
              /* @__PURE__ */ M("div", { className: "flex items-center gap-x-2", children: [
                /* @__PURE__ */ o("div", { className: "flex justify-end w-[100px]", children: h && /* @__PURE__ */ o(H, { children: /* @__PURE__ */ o(
                  re,
                  {
                    onMouseLeave: () => {
                      f.set(!1);
                    },
                    icon: f.get ? ne : Le,
                    onClick: async () => {
                      const { icon: y, ...s } = n;
                      await navigator.clipboard.writeText(s.iconName), f.set(!0);
                    }
                  }
                ) }) }),
                /* @__PURE__ */ M("span", { className: "capitalize", children: [
                  /* @__PURE__ */ o(
                    "span",
                    {
                      className: "px-1 rounded-md",
                      style: {
                        ...p("gray.opacity")
                      },
                      children: n.type
                    }
                  ),
                  /* @__PURE__ */ o("span", { children: " / " }),
                  ot(n.iconName.slice(2), "camel", "normal")
                ] })
              ] }),
              /* @__PURE__ */ o(ce, { className: "text-3xl", icon: n.icon })
            ]
          }
        );
      }
    }
  );
}
function ns({ className: e, alt: r, src: t, children: n, style: c, ...l }) {
  const a = $(), d = F(!1);
  return g.useEffect(() => {
  }, []), /* @__PURE__ */ M(
    "div",
    {
      tabIndex: -1,
      ...l,
      className: S("overflow-hidden rounded-full w-[150px] h-[150px] border border-solid border-transparent transition-shadow duration-300 relative text-xs", e),
      style: {
        ...a(d.get && { borderColor: "primary" }),
        ...c
      },
      onFocus: () => {
        d.set(!0);
      },
      onBlur: () => {
        d.set(!1);
      },
      children: [
        t && /* @__PURE__ */ o("img", { src: t, className: S("absolute inset-0 w-full h-full object-cover"), draggable: !1 }),
        !t && /* @__PURE__ */ o("div", { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2", children: r }),
        /* @__PURE__ */ o("div", { className: "absolute inset-0 overflow-hidden", children: n })
      ]
    }
  );
}
function Te({ children: e, icon: r, className: t, iconClassName: n, isActive: c, style: l, ...a }) {
  const d = F(!1);
  g.useEffect(() => () => {
    d.set(!1);
  }, []);
  const i = $(), p = X("preferences/animation.boolean");
  return /* @__PURE__ */ M(
    "span",
    {
      onMouseEnter: () => {
        d.set(!0);
      },
      onMouseLeave: () => {
        d.set(!1);
      },
      style: {
        ...i(
          "secondary.background",
          c && "primary",
          c && {
            color: "primary.content"
          },
          {
            borderColor: "borders"
          },
          {
            boxShadow: pe([
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
      className: S("flex items-center justify-center p-2 rounded-[15%] cursor-pointer border border-solid active:scale-95", p && "transition-[background,color,transform]", t),
      ...a,
      children: [
        /* @__PURE__ */ o(de, { iconClassName: n, icon: r }),
        e
      ]
    }
  );
}
function ss({ state: e, config: r }) {
  const t = $(), n = X("preferences/animation.boolean"), c = F(!1), l = e.get, a = g.useCallback(
    async (i) => {
      e.set && (e.set(i), c.set(!1));
    },
    [e.set]
  ), d = g.createRef();
  return /* @__PURE__ */ M("div", { className: "flex justify-center", children: [
    /* @__PURE__ */ o("div", { className: "relative", children: /* @__PURE__ */ M(
      "div",
      {
        onClick: () => {
          c.set(!0);
        },
        className: S("cursor-pointer overflow-hidden border border-transparent border-solid rounded-2xl text-center text-xl italic", (r == null ? void 0 : r.rounded) && "rounded-full"),
        style: {
          ...t("gray.opacity", {
            borderColor: "borders"
          }),
          ...Ie(
            {
              width: 100,
              height: 100
            },
            (r == null ? void 0 : r.size) && {
              width: r.size,
              height: r.size
            }
          )
        },
        children: [
          l && /* @__PURE__ */ o(H, { children: /* @__PURE__ */ o("img", { src: l, className: "w-full h-full object-cover" }) }),
          !l && /* @__PURE__ */ M("div", { className: "flex flex-col justify-center items-center gap-1 w-full h-full", children: [
            /* @__PURE__ */ o(de, { icon: Ke.solid.faCamera }),
            (r == null ? void 0 : r.alt) && /* @__PURE__ */ o("span", { className: "w-1/2 text-xs truncate", children: r.alt })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ o(
      "div",
      {
        ref: d,
        className: S("top-1/2 left-1/2 z-[100000000000000000] fixed transform -translate-x-1/2 -translate-y-1/2 scale-0", n && "transition-transform", c.get && "scale-100"),
        children: /* @__PURE__ */ M(Fr, { className: "w-fit", children: [
          /* @__PURE__ */ M("div", { className: "flex justify-between items-center p-3", children: [
            /* @__PURE__ */ o("h1", { className: "text-xl", children: /* @__PURE__ */ o(Q, { content: "Upload Image" }) }),
            /* @__PURE__ */ o("span", { children: /* @__PURE__ */ o(
              ae,
              {
                icon: Ke.solid.faXmark,
                onClick: () => {
                  c.set(!1);
                }
              }
            ) })
          ] }),
          /* @__PURE__ */ o(Ae, {}),
          /* @__PURE__ */ M("div", { className: "flex gap-3 p-3", children: [
            l && /* @__PURE__ */ o(
              Te,
              {
                className: "w-[80px] h-[80px]",
                iconClassName: "w-[40px] h-[40px]",
                onClick: async () => {
                  const { response: i } = await fe({
                    message: "do you want to recenlty this image",
                    title: "confirmation",
                    type: "warning",
                    buttons: ["no", "yes"],
                    defaultId: 1
                  });
                  i && a(null);
                },
                icon: me
              }
            ),
            /* @__PURE__ */ o(
              Te,
              {
                className: "w-[80px] h-[80px]",
                iconClassName: "w-[40px] h-[40px]",
                onClick: async () => {
                  if (l) {
                    const { response: p } = await fe({
                      message: "do you want to recenlty this image",
                      title: "confirmation",
                      type: "warning",
                      buttons: ["no", "yes"],
                      defaultId: 1
                    });
                    if (!p)
                      return;
                  }
                  const i = document.createElement("input");
                  i.type = "file", i.accept = "image/*", i.onchange = async () => {
                    var p;
                    if ((p = i.files) != null && p.length) {
                      const h = i.files[0], f = new FileReader();
                      f.onload = () => {
                        var y;
                        a(((y = f.result) == null ? void 0 : y.toString()) || null);
                      }, f.readAsDataURL(h);
                    }
                  }, i.click();
                },
                icon: tr
              }
            ),
            /* @__PURE__ */ o(
              Te,
              {
                className: "w-[80px] h-[80px]",
                iconClassName: "w-[40px] h-[40px]",
                onClick: async () => {
                  if (l) {
                    const { response: i } = await fe({
                      message: "do you want to recenlty this image",
                      title: "confirmation",
                      type: "warning",
                      buttons: ["no", "yes"],
                      defaultId: 1
                    });
                    if (!i)
                      return;
                  }
                  try {
                    const i = await xr("take");
                    a(i);
                  } catch (i) {
                    vr(i, "error");
                  }
                },
                icon: lt
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
function os({ slotId: e, component: r, data: t, skipFn: n }) {
  const c = I.getOneFeild(e, "focused"), l = I.getOneFeild(e, "submited"), a = I.getOneFeild(e, "selected"), d = I.getOneFeild(e, "direction");
  ft(e, t);
  const i = g.useMemo(() => r, []);
  g.useEffect(() => {
    if (typeof c != "number")
      return;
    const h = document.getElementById(Ue(e, c));
    h && !it(h) && dt(h, d == "backward" ? 0 : -1);
  }, [c, d]);
  const p = g.useMemo(() => {
    if (!n)
      return {};
    const h = {};
    return t.forEach((f, y) => {
      if (n)
        h[y] = !!n(f, y);
      else
        return !1;
    }), h;
  }, [n, t]);
  return g.useEffect(() => {
    I.setOneFeild(e, "skiped", p);
  }, [p]), /* @__PURE__ */ o(H, { children: t.map((h, f) => {
    const y = {
      isFocused: f == c,
      isSelected: !!(a != null && a[f]),
      isSubmited: f == l,
      isSkiped: !!(n && n(h, f))
    };
    return /* @__PURE__ */ o(
      i,
      {
        id: Ue(e, f),
        handelFocus: (s) => (m) => {
          I.setOneFeild(e, "focused", f), s == null || s(m);
        },
        handelSubmit: (s) => (m) => {
          I.setOneFeild(e, "submited", f), s == null || s(m);
        },
        handelSelect: (s) => (m) => {
        },
        tabIndex: y.isFocused ? 1 : -1,
        item: h,
        index: f,
        status: y
      },
      f
    );
  }) });
}
function ls({ pages: e = [], focused: r = 0 }) {
  const t = g.useMemo(() => e[r], [e, r]);
  return /* @__PURE__ */ M(
    "div",
    {
      className: S(`
        h-full
        flex
        absolute
        inset-y-0
        transition-[left]
        duration-300
        overflow-hidden
      `),
      style: {
        width: `${100 * e.length}%`,
        left: `${-100 * r}%`
      },
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            className: "h-full",
            style: {
              width: `${r / e.length * 100}%`
            }
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            className: "h-full overflow-hidden",
            style: {
              width: `${1 / e.length * 100}%`
            },
            children: /* @__PURE__ */ o(st, { children: t })
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            className: "h-full",
            style: {
              width: `${(1 - (r + 1) / e.length) * 100}%`
            }
          }
        )
      ]
    }
  );
}
function as({ onClick: e, className: r, children: t, iconClassName: n, ...c }) {
  const l = $();
  return /* @__PURE__ */ o(
    "span",
    {
      onClick: (a) => {
        a.preventDefault(), e == null || e(a);
      },
      className: S(
        r,
        `
          absolute
          top-0
          right-0
          rounded-xl
          flex
          min-w-[22px]
          h-[22px]
          justify-center
          items-center
          overflow-hidden
        `
      ),
      ...c,
      style: {
        ...l("primary", {
          color: "primary.content"
        })
      },
      children: t
    }
  );
}
function cs({ state: e, config: r = {}, id: t }) {
  g.useEffect(() => {
    typeof e.get == "number" && (typeof r.max == "number" && r.max < e.get ? e.set(r.max) : typeof r.min == "number" && r.min > e.get && e.set(r.min));
  }, [r.max, r.min, e.get]);
  const n = F(String(e.get)), c = g.createRef();
  g.useEffect(() => {
    var i;
    c.current && (c.current.value = ((i = e.get) == null ? void 0 : i.toString()) || "");
  }, [e.get, c.current]), g.useEffect(() => {
    if (!+n.get) {
      const i = document.getElementById(t);
      i == null || i.select();
    }
  }, [n.get, t]), K(
    "number.changeState",
    (i) => {
      if (i == t)
        if (n.get.length) {
          const p = +n.get;
          e.set(p);
        } else
          e.set(null);
    },
    [n.get, t]
  ), K(
    "number.cancelChangeState",
    (i) => {
      if (i == t) {
        const p = typeof e.get == "number" ? e.get.toString() : "";
        n.set(p), c.current && (c.current.value = p), ve(t);
      }
    },
    [e.get, c, t]
  ), g.useEffect(() => {
    r.autoChange && q("number.changeState", t);
  }, [n.get, r.autoChange]);
  const l = F(!1), a = g.useMemo(() => !r.autoChange && e.get != +n.get, [r.autoChange, e.get, n.get]), d = $();
  return /* @__PURE__ */ M(
    "div",
    {
      className: S(`
        relative
        rounded-md
        flex
        items-center
        gap-1
        w-full
      `),
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center w-full", children: /* @__PURE__ */ o(
          ie,
          {
            ref: c,
            onFocus: (i) => {
              l.set(!0), r.selectOnFocus && i.currentTarget.select();
            },
            onBlur: () => {
              l.set(!1);
            },
            className: S(r.size == "small" ? "p-1" : "p-2", r.center && "text-center"),
            type: "number",
            id: t,
            min: r.min,
            max: r.max,
            placeholder: r.placeholder,
            onKeyDown: (i) => {
              a && i.key == "Enter" && (i.preventDefault(), i.stopPropagation(), i && q("number.changeState", t));
            },
            onValueChange: n.set
          }
        ) }),
        a && /* @__PURE__ */ M("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ o(
            J,
            {
              className: "py-1",
              onClick: () => {
                q("number.cancelChangeState", t);
              },
              style: {
                ...d("gray.opacity", {
                  color: "text.color"
                })
              },
              children: /* @__PURE__ */ o(Q, { content: "cancel" })
            }
          ),
          /* @__PURE__ */ o(
            J,
            {
              className: "py-1",
              onClick: () => {
                q("number.changeState", t);
              },
              children: /* @__PURE__ */ o(Q, { content: "change" })
            }
          )
        ] })
      ]
    }
  );
}
const is = (e) => `object_${e}`;
function ds({ state: e, id: r }) {
  return /* @__PURE__ */ o("div", { id: r, children: /* @__PURE__ */ o(Q, { content: "The Object Is Defined Before" }) });
}
function us({ hidden: e, animted: r, className: t, style: n, children: c, onLoadContent: l, onTransitionEnd: a, ...d }) {
  const i = $(), p = typeof r == "boolean" ? r : X("preferences/animation.boolean"), h = F(e);
  return g.useEffect(() => {
    e || h.set(!1);
  }, [e]), yt(async () => {
    h.get && l && (await ut(100), l());
  }, [h.get, l]), /* @__PURE__ */ o(
    "div",
    {
      className: S(
        "fixed inset-0 bg-opacity-40 flex justify-center items-center z-[100000000000000000]",
        p && "transition-[transform] duration-700",
        !e && "translate-y-0",
        e && "translate-y-full pointer-events-none",
        t
      ),
      style: {
        ...i({
          background: ht("to bottom", "shadow.background.from", "shadow.background.to")
        }),
        ...n
      },
      onTransitionEnd: (f) => {
        h.set(e), a == null || a(f);
      },
      ...d,
      children: !h.get && c
    }
  );
}
function fs({ className: e, animted: r, style: t, hidden: n, onLoadContent: c, children: l, onTransitionEnd: a, ...d }) {
  $();
  const i = F(n);
  g.useEffect(() => {
    n || i.set(!1);
  }, [n]);
  const p = g.useRef(null), h = typeof r == "boolean" ? r : X("preferences/animation.boolean");
  return yt(async () => {
    i.get && c && (await ut(100), c());
  }, [i.get, c]), /* @__PURE__ */ o(
    "div",
    {
      ref: p,
      className: S(
        "fixed inset-0 bg-opacity-40 flex justify-center scale-100 items-center z-[100000000000000000]",
        h && "transition-[opacity,transform] duration-300",
        n && "pointer-events-none opacity-0 transform scale-0",
        !n && "opacity-100",
        e
      ),
      onTransitionEnd: (f) => {
        i.set(n), a == null || a(f);
      },
      style: {
        ...t
      },
      ...d,
      children: !i.get && l
    }
  );
}
function Re({ eays: e = !0, state: r, onFocus: t, onBlur: n, className: c, style: l, value: a, type: d, ...i }) {
  const p = $(), h = F(!1), f = F(!1), y = g.createRef();
  return /* @__PURE__ */ M("div", { className: "relative", children: [
    /* @__PURE__ */ o(
      "input",
      {
        ref: y,
        onFocus: (s) => {
          t == null || t(s), f.set(!0);
        },
        onBlur: (s) => {
          n == null || n(s), f.set(!1);
        },
        type: h.get ? "text" : "password",
        className: S("p-2 text-xs border border-solid border-transparent font-[inherit] whitespace-nowrap rounded-sm w-full", c),
        style: {
          ...p("field.background", {
            borderColor: f.get ? "primary" : "borders"
          }),
          ...l
        },
        onChange: ({ target: s }) => {
          r.set(s.value);
        },
        value: String(r.get || ""),
        ...i
      }
    ),
    e && /* @__PURE__ */ o(
      re,
      {
        className: "top-1/2 right-2 absolute transform -translate-y-1/2",
        tabIndex: -1,
        onClick: () => {
          h.set((s) => !s), y.current && (y.current.focus(), y.current.setSelectionRange(0, 1e3, "forward"));
        },
        icon: h.get ? rr : nr
      }
    )
  ] });
}
function ms({ state: e, config: r = {}, id: t }) {
  const n = F(void 0), c = F(void 0), l = F(void 0), a = g.useMemo(() => e.get ? n.get == e.get : !0, [n.get, e.get]), d = g.useMemo(() => c.get == l.get, [c.get, l.get]), i = g.useMemo(() => c.get == e.get, [c.get, e.get]);
  return K(
    "password.change",
    (p) => {
      t == p && (a && d && e.set(c.get), l.set(""), c.set(""), n.set(""));
    },
    [n.get, c.get, l.get, a, d, t]
  ), /* @__PURE__ */ M("div", { className: "flex flex-col gap-1", children: [
    !!e.get && /* @__PURE__ */ o(Re, { id: t, placeholder: "current password", state: n }),
    /* @__PURE__ */ o(Re, { id: e.get ? void 0 : t, placeholder: "new password", state: c }),
    /* @__PURE__ */ o(Re, { placeholder: "confirm password", state: l }),
    !c.get && !r.canEmpty && /* @__PURE__ */ o("span", { className: "p-1", children: /* @__PURE__ */ o(Q, { content: "password cannot be empty" }) }),
    /* @__PURE__ */ o("div", { className: "flex justify-end items-center gap-1", children: a && d && !i && /* @__PURE__ */ o(
      J,
      {
        onClick: () => {
          q("password.change", t);
        },
        icon: sr,
        className: "px-2 py-1",
        children: /* @__PURE__ */ o(Q, { content: "change" })
      }
    ) })
  ] });
}
function ps({ id: e, state: r }) {
  const t = F(null), n = F([]), c = g.useRef(null), l = $(), a = F(!1), d = F(!1), i = g.useCallback(async () => {
    const f = [];
    try {
      const y = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      if (y) {
        const s = new MediaRecorder(y);
        s.ondataavailable = (m) => {
          f.push(m.data), n.set(f);
        }, s.onstop = async () => {
          const m = new Blob(f, { type: "audio/mp3" });
          try {
            const u = URL.createObjectURL(m);
            r.set(u);
          } catch {
          }
        }, s.start(), t.set(s);
      } else
        n.set([]), t.set(null), await Ge({
          type: "error",
          title: "No audio stream detected",
          desc: "Please allow the audio stream to record the audio",
          id: "recorder.error",
          showDesc: !0
        });
    } catch (y) {
      n.set([]), t.set(null), await Ge({
        type: "error",
        title: "Error detected",
        desc: String(y.message),
        id: "recorder.error",
        showDesc: !0
      });
    }
  }, []), p = g.useCallback(() => {
    var f;
    (f = t.get) == null || f.stop();
  }, [t.get]);
  g.useEffect(() => () => {
    p();
  }, [p]), g.useEffect(() => {
    c.current && (c.current.onplay = () => {
      d.set(!0);
    }, c.current.onpause = () => {
      d.set(!1);
    }, c.current.onended = () => {
      d.set(!1);
    });
  }, [c.current]);
  const h = F(null);
  return g.useEffect(() => {
    if (d.get) {
      const f = setInterval(() => {
        h.set((y) => (y ?? 0) + 1);
      }, 1e3);
      return () => {
        clearInterval(f);
      };
    } else
      h.set(null);
  }, [d.get]), /* @__PURE__ */ o("div", { className: "flex gap-2", children: /* @__PURE__ */ M("div", { className: "inline-flex relative gap-1", children: [
    r.get && /* @__PURE__ */ M(H, { children: [
      /* @__PURE__ */ o(
        ae,
        {
          icon: me,
          onClick: async () => {
            const { response: f } = await fe({
              title: "Delete audio",
              message: "Are you sure you want to delete the audio?",
              type: "warning",
              buttons: ["No", "Yes"]
            });
            f === 1 && r.set(null);
          }
        }
      ),
      /* @__PURE__ */ o(
        ae,
        {
          onClick: () => {
            var f, y;
            d.get ? (y = c.current) == null || y.pause() : (f = c.current) == null || f.play();
          },
          icon: d.get ? or : lr
        }
      )
    ] }),
    /* @__PURE__ */ o(
      ae,
      {
        id: e,
        style: {
          ...l(
            a.get && {
              backgroundColor: "primary",
              color: "primary.content"
            }
          )
        },
        onClick: async () => {
          if (r.get) {
            const { response: f } = await fe({
              title: "Overwrite audio",
              message: "Are you sure you want to overwrite the audio?",
              type: "warning",
              buttons: ["No", "Yes"]
            });
            if (!f)
              return;
          }
          a.set((f) => !f), a.get ? p() : i();
        },
        icon: a.get ? ar : cr
      }
    ),
    r.get && /* @__PURE__ */ o("audio", { ref: c, src: r.get })
  ] }) });
}
function gs({ state: e, id: r }) {
  const t = F("");
  g.useEffect(() => {
    t.set(e.get || "");
  }, [e.get]);
  const n = F(!1), c = g.useMemo(() => {
    try {
      return new RegExp(t.get), n.set(!0), null;
    } catch (a) {
      return String(a == null ? void 0 : a.message);
    }
  }, [t.get]), l = $();
  return /* @__PURE__ */ M("div", { children: [
    /* @__PURE__ */ M("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ o(
        ie,
        {
          id: `${r}:input`,
          placeholder: "write your regexp here...",
          onFocus: (a) => {
            a.target.select();
          },
          onValueChange: e.set,
          value: e.get
        }
      ),
      !c && /* @__PURE__ */ o(
        J,
        {
          className: "py-1",
          id: `${r}:submit`,
          onClick: () => {
            e.set(t.get), n.set(!1);
          },
          children: "Ok"
        }
      )
    ] }),
    c && /* @__PURE__ */ o(
      "div",
      {
        className: S(`
            mt-2
            p-1
            text-xs
            border
            border-solid
            border-transparent
            w-fit
          `),
        style: {
          ...l("error", {
            color: "error.content",
            borderColor: "error.border"
          })
        },
        children: c
      }
    )
  ] });
}
function hs({ temp: e, animited: r, style: t, children: n, max: c = 0, min: l = 600, position: a = "left", hidden: d = !1, handelResize: i, className: p, ...h }) {
  const f = F(null);
  g.useEffect(() => {
    const N = wr(`resizeData.${e}`);
    f.set(N);
  }, []), pt(
    () => {
      G(`resizeData.${e}`, f.get);
    },
    [f.get],
    1e3
  );
  const y = g.createRef(), s = ["left", "right"].includes(a) ? "width" : "height";
  let m = 0;
  const u = F(null), w = typeof r == "boolean" ? r : X("preferences/animation.boolean"), v = F(null);
  g.useEffect(() => {
    const N = () => {
      if (!f.get) return;
      const T = typeof l == "number" ? l : l(f.get), k = typeof c == "number" ? c : c(f.get);
      T >= f.get ? (u.set("min"), f.set(T)) : f.get >= k ? (u.set("max"), f.set(k)) : (u.set(null), f.set(f.get)), m = f.get;
    }, R = () => {
      v.set(null);
    };
    return addEventListener("resize", N), addEventListener("pointerup", R), () => {
      removeEventListener("resize", N), removeEventListener("pointerup", R);
    };
  }, [f.get, l, c]);
  const x = $();
  g.useEffect(() => {
    const N = typeof l == "function" ? l(f.get || 0) : l;
    if (!f.get) {
      f.set(N);
      return;
    }
  }, [f.get, l, c]);
  const E = g.useMemo(() => v.get ? "start" : "end", [v.get]);
  return /* @__PURE__ */ M("div", { className: "relative h-full", children: [
    /* @__PURE__ */ o(
      "div",
      {
        style: {
          [s]: d ? "0px" : `${f.get}px`,
          ...t
        },
        ...h,
        className: S("overflow-hidden", p, w && E == "end" && "transition-[width]"),
        ref: y,
        children: n
      }
    ),
    /* @__PURE__ */ o(
      "div",
      {
        className: S("resize-bar absolute transition-all opacity-0 cursor-e-resize z-[1000000] hover:opacity-100", a),
        onPointerDown: (N) => {
          const { currentTarget: R } = N;
          v.set(R.getBoundingClientRect());
        },
        style: {
          ...x({
            backgroundColor: "primary"
          })
        },
        children: /* @__PURE__ */ o(
          "div",
          {
            hidden: !v.get,
            onMouseMove: (N) => {
              var P;
              N.preventDefault();
              const { pageX: R, pageY: T } = N;
              if (!f)
                return;
              const k = (P = y == null ? void 0 : y.current) == null ? void 0 : P.getBoundingClientRect();
              let C = 0;
              switch (a) {
                case "right": {
                  C = R - Number(k == null ? void 0 : k.left);
                  break;
                }
                case "left": {
                  C = -R + Number(k == null ? void 0 : k.right);
                  break;
                }
                case "top": {
                  C = Number(k == null ? void 0 : k.bottom) - T;
                  break;
                }
                case "bottom": {
                  C = T - Number(k == null ? void 0 : k.top);
                  break;
                }
              }
              const j = typeof l == "number" ? l : l(C), A = typeof c == "number" ? c : c(C);
              j >= C ? (u.set("min"), f.set(j)) : C >= A ? (u.set("max"), f.set(A)) : (u.set(null), f.set(C)), m = C, i && i({ ...N, size: m, min: j, max: A });
            },
            className: "resize-overview"
          }
        )
      }
    )
  ] });
}
function ys({ data: e, slotId: r, focusId: t = r, component: n, children: c, handelSkipedItem: l, className: a, direction: d, ref: i, type: p = "horizontal", ...h }) {
  const f = typeof n == "function" ? n : ({ index: x, id: E, handelSubmit: N, handelFocus: R, handelSelect: T, status: k, item: C }) => {
    const j = F(!1), A = g.useMemo(() => j.get, [j.get]), P = x % 2 == 1, b = $();
    return /* @__PURE__ */ M(
      "div",
      {
        id: E,
        "data-is-odd": P,
        onMouseEnter: () => j.set(!0),
        onMouseLeave: () => j.set(!1),
        className: "border border-transparent border-solid cursor-pointer row",
        onClick: N(),
        onPointerDown: R(T()),
        style: {
          ...b(
            P && "secondary.background",
            j.get && "gray.opacity",
            (k.isFocused || k.isSubmited) && {
              borderColor: "primary"
            },
            (k.isSelected || k.isSubmited) && {
              backgroundColor: "secondary",
              color: "secondary.content"
            }
          )
        },
        children: [
          /* @__PURE__ */ o("div", { className: "col", children: /* @__PURE__ */ o("div", { className: S("w-[100px] flex items-center justify-end", !A && "invisible") }) }),
          n == null ? void 0 : n.map((O) => /* @__PURE__ */ o("div", { className: "col", children: `${C[O]}` }))
        ]
      }
    );
  }, y = I.useOneFeild(r, "focused"), s = I.useOneFeild(r, "submited"), m = I.useOneFeild(r, "length"), u = I.useOneFeild(r, "selected"), w = I.useOneFeild(r, "direction"), v = g.useMemo(() => f, []);
  return g.useEffect(() => {
    m.set(e.length);
  }, [e]), g.useEffect(() => {
    if (typeof y.get != "number")
      return;
    const x = document.getElementById(`${r}/${y.get}`);
    x && !it(x) && dt(x, w.get == "backward" ? 0 : -1);
  }, [y.get, w.get]), /* @__PURE__ */ o(nt, { className: S("flex flex-col overflow-hidden h-full w-full", a), focusId: t, ...h, children: /* @__PURE__ */ M(st, { className: S(p == "vertical" && "flex"), children: [
    /* @__PURE__ */ o(H, { children: e.map((x, E) => {
      var R;
      const N = {
        isFocused: E == y.get,
        isSelected: !!((R = u.get) != null && R[E]),
        isSubmited: E == s.get,
        isSkiped: !!(l && l(x))
      };
      return /* @__PURE__ */ o(
        v,
        {
          id: `${r}/${E}`,
          handelFocus: (T) => (k) => {
            y.set(E), T == null || T(k);
          },
          handelSubmit: (T) => (k) => {
            s.set(E), T == null || T(k);
          },
          handelSelect: (T) => (k) => {
            k.ctrlKey ? u.set((C) => ({
              ...C,
              [E]: !(C != null && C[E])
            })) : u.set({
              [E]: !0
            }), T == null || T(k);
          },
          tabIndex: N.isFocused ? 1 : -1,
          item: x,
          index: E,
          status: N
        },
        E
      );
    }) }),
    c
  ] }) });
}
function bs({ state: e, config: r = {}, id: t }) {
  gt(`${t}:input`);
  const n = U.useOneFeild(`${t}:input`, "value");
  K(
    "string.change",
    () => {
      const d = _e();
      d && [t, `${t}:change`].includes(d) && e.set(n.get || "");
    },
    [n.get, t]
  ), K(
    "string.cancel",
    () => {
      const d = _e();
      if (d && [t, `${t}:cancel`].includes(d)) {
        const i = e.get || "";
        n.set(i), e.set(i);
      }
    },
    [e.get, t, r]
  );
  const c = $(), l = g.useMemo(() => n.get || "", [n.get]), a = g.useDeferredValue(l);
  return g.useEffect(() => {
    r.autoChange && e.set(a);
  }, [r.autoChange, a]), /* @__PURE__ */ M("div", { className: "flex justify-between items-center gap-3", children: [
    /* @__PURE__ */ o(
      ie,
      {
        maxLength: r.maxLength,
        minLength: r.minLength,
        type: r.locked ? "password" : "text",
        id: t,
        className: "text-xs",
        value: l,
        placeholder: r.hint || `provide value for ${t}`,
        onValueChange: n.set
      }
    ),
    !(r != null && r.autoChange) && (e.get || "") != (n.get || "") && /* @__PURE__ */ M("div", { className: "flex items-cente gap-x-2", children: [
      /* @__PURE__ */ o(
        J,
        {
          className: "w-fit",
          id: `${t}:cancel`,
          onClick: () => {
            q("string.cancel");
          },
          style: {
            ...c("gray.opacity.2")
          },
          children: "cancel"
        }
      ),
      /* @__PURE__ */ o(
        J,
        {
          className: "w-fit",
          id: `${t}:change`,
          onClick: () => {
            q("string.change");
          },
          children: "change"
        }
      )
    ] })
  ] });
}
function xs() {
  const e = kr(), r = Nr(), t = Er(), n = Cr(), c = $();
  return /* @__PURE__ */ o(
    "div",
    {
      onTransitionEnd: () => {
        e || ye(null);
      },
      className: S(
        `
          fixed
          z-[1000000000000000000000]
          pointer-events-none
          opacity-0
          transition-opacity
          delay-300
          duration-500
        `,
        r && "opacity-100",
        t == "left" && "-translate-x-full",
        t == "center" && "-translate-x-1/2",
        n == "top" && "-translate-y-full",
        n == "center" && "-translate-y-1/2",
        (e || e == 0) && "opacity-100"
      ),
      style: {
        ...Ie(
          {
            left: "-1000px",
            top: "-2000px"
          },
          r && {
            left: `${r[0]}px`,
            top: `${r[1]}px`
          }
        )
      },
      children: /* @__PURE__ */ o(
        "div",
        {
          className: S(`
            border
            border-solid
            border-transparent
            rounded-lg
            m-3
            py-1
            px-2
          `),
          style: {
            ...c("secondary.background", {
              borderColor: "borders",
              boxShadow: pe([{ colorId: "shadow.color", blur: 30, size: 1, x: 0, y: 10 }])
            })
          },
          children: /* @__PURE__ */ o(He, { value: String(e) })
        }
      )
    }
  );
}
function Bn({ treeId: e, tree: r = [], component: t, level: n = 0, position: c = "", parent: l }) {
  const a = g.useMemo(() => t, []), d = oe.getOne(e);
  return n == 0 && Mr(e), g.useEffect(() => {
    if (!d)
      return;
    const i = Array.from(new Set(d.ends)), p = `${c}${d.separator}${r.length}`;
    i.includes(p) || oe.setOneFeild(e, "ends", [...i, p]);
  }, [r, d]), /* @__PURE__ */ o(H, { children: r.map(({ data: i, innerTree: p }, h) => {
    var m, u;
    const f = `${c}${d == null ? void 0 : d.separator}${h}`, y = {
      data: i,
      parent: l
    }, s = {
      isFocused: f == (d == null ? void 0 : d.focused),
      isSelected: !!((m = d == null ? void 0 : d.selected) != null && m[f]),
      isSubmited: (d == null ? void 0 : d.submited) == f,
      isExpanded: !!((u = d == null ? void 0 : d.expanded) != null && u[f])
    };
    return /* @__PURE__ */ M("div", { children: [
      /* @__PURE__ */ o(
        a,
        {
          status: s,
          handels: {
            focus() {
              d && oe.setOneFeild(e, "focused", f);
            },
            select(w, v) {
              d && oe.setOneFeild(
                e,
                "selected",
                w ? {
                  [f]: v
                } : {
                  ...d.selected,
                  [f]: v
                }
              );
            },
            submit() {
              d && oe.setOneFeild(e, "submited", f);
            },
            expand(w, v) {
              d && oe.setOneFeild(e, "expanded", {
                ...w ? {} : d.expanded || {},
                [f]: v
              });
            }
          },
          level: n,
          isFins: !p,
          position: f,
          data: i,
          index: h,
          parent: y,
          innerTree: p
        }
      ),
      Array.isArray(p) && s.isExpanded && /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(Bn, { position: f, component: t, tree: p, treeId: e, level: n + 1, parent: y }) })
    ] }, h);
  }) });
}
function vs({ views: e, viewId: r }) {
  const t = Or.getOneFeild(r, "focused"), n = t && e[t];
  return /* @__PURE__ */ o("div", { className: "flex flex-col w-full h-full overflow-hidden", children: n ? /* @__PURE__ */ o(n, {}) : /* @__PURE__ */ o(H, {}) });
}
const ws = ({ state: e, tabs: r }) => {
  const t = $();
  g.useMemo(() => r.map(({ value: c }) => c).indexOf(e.get), [e.get, r]);
  const n = X("preferences/animation.boolean");
  return /* @__PURE__ */ o(
    "div",
    {
      className: "flex items-stretch gap-2 p-2 border border-transparent border-solid rounded-2xl w-full overflow-hidden",
      style: {
        ...t("secondary.background", {
          borderColor: "borders",
          boxShadow: pe([
            {
              blur: 5,
              size: 0,
              colorId: "shadow.color",
              x: 0,
              y: 4
            }
          ])
        })
      },
      children: /* @__PURE__ */ o(
        xe,
        {
          list: r.map(({ label: c, icon: l, value: a }) => {
            const d = e.get == a;
            return /* @__PURE__ */ o(
              J,
              {
                className: S("rounded-xl px-7 py-4", d && "font-bold", n && "transition-all duration-300"),
                style: {
                  ...t(
                    !d && "transparent",
                    !d && {
                      color: "text.color"
                    }
                  )
                },
                icon: l,
                onClick: () => {
                  e.set(a);
                },
                children: c
              },
              a
            );
          }),
          joinComponent: /* @__PURE__ */ o(H, {})
        }
      )
    }
  );
};
export {
  Vn as A,
  Sr as B,
  ae as C,
  qn as D,
  Jn as E,
  es as F,
  ws as G,
  ss as I,
  vt as K,
  os as L,
  He as M,
  cs as N,
  ds as O,
  ms as P,
  gs as R,
  bs as S,
  bt as T,
  vs as V,
  ts as a,
  ps as b,
  Gn as c,
  Xn as d,
  Yn as e,
  Zn as f,
  Ln as g,
  Be as h,
  rs as i,
  ns as j,
  Tr as k,
  ls as l,
  as as m,
  us as n,
  is as o,
  fs as p,
  Re as q,
  xt as r,
  Qn as s,
  Kn as t,
  hs as u,
  ys as v,
  Te as w,
  In as x,
  xs as y,
  Bn as z
};
