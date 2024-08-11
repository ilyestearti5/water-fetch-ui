import { g as S, T as j, F as $, a as E, I as z, b as P, J as D, c as R, C as H } from "./ViewPage-35a8f40f.mjs";
import { A as Ce, d as ke, e as Fe, B as Ie, f as Ne, h as Se, i as De, x as Le, j as Te, k as Me, l as Ae, m as Oe, n as $e, D as ze, E as Be, o as Ve, p as je, q as Ee, r as Pe, s as Re, t as He, u as Ke, v as _e, K as We, L as Ge, w as Je, y as Xe, M as qe, z as Qe, N as Ye, G as Ze, O as Ue, P as et, H as tt, R as rt, Q as st, S as at, U as ot, V as nt, W as lt, X as it, Y as ct, Z as dt, _ as ut, $ as ft, a0 as gt, a1 as pt } from "./ViewPage-35a8f40f.mjs";
import { j as t, a as x, E as v } from "./EmptyComponent-9ba5fd59.mjs";
import { t as f, f as K, a as _, S as W, r as G, b as J, c as X, d as q, e as Q, g as Y, D as Z, s as L } from "./index-c007ee83.mjs";
import { s as B, u as y, g as T, a as m, h as U, b as V, c as M, f as A, e as I } from "./index-e2b4fc99.mjs";
import F from "react";
import "react-dom";
function le({ children: e }) {
  return /* @__PURE__ */ t("div", { className: "flex justify-center items-center px-3 w-full window-dragged h-full text-center capitalize overflow-hidden", children: e });
}
const ie = () => {
  const e = B.useOneFeild("window/dark.boolean", "value"), r = y(), s = S("toggle to light"), o = S("toggle to dark");
  return /* @__PURE__ */ t(
    j,
    {
      title: (e.get ? s : o) ?? void 0,
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
              children: /* @__PURE__ */ t($, { icon: e.get ? K : _ })
            }
          )
        }
      )
    }
  );
}, N = ({ time: e }) => /* @__PURE__ */ t("span", { className: "font-mono", children: e >= 10 ? e : `0${e}` }), O = "visibility/timer.boolean";
function ce() {
  const e = T(O), r = m(null);
  F.useEffect(() => {
    const a = setInterval(() => {
      const l = /* @__PURE__ */ new Date();
      r.set(l);
    }, 1e3);
    return () => {
      clearInterval(a);
    };
  }, []);
  const s = T("preferences/animation.boolean"), n = {
    ...y()("secondry.background", {
      borderColor: "borders",
      color: "focus.text"
    })
  };
  return /* @__PURE__ */ x(
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
        s && `
          transition-[transform]
          duration-200
        `
      ),
      onClick: () => {
        B.setOneFeild(O, "value", !e);
      },
      style: n,
      children: [
        r.get && /* @__PURE__ */ x(v, { children: [
          /* @__PURE__ */ t(N, { time: r.get.getHours() }),
          ":",
          /* @__PURE__ */ t(N, { time: r.get.getMinutes() }),
          ":",
          /* @__PURE__ */ t(N, { time: r.get.getSeconds() })
        ] }),
        !r.get && /* @__PURE__ */ t(E, { content: "loading" })
      ]
    }
  );
}
function de({
  "aria-selected": e,
  children: r,
  className: s,
  icon: o,
  iconClassName: n,
  onBlur: a,
  onFocus: l,
  onMouseEnter: i,
  onMouseLeave: d,
  onPointerDown: p,
  onPointerUp: u,
  style: b,
  ...C
}) {
  const c = m(!1), k = y(), h = m(!1), w = m(!1);
  return /* @__PURE__ */ x(
    "button",
    {
      onMouseEnter: (g) => {
        i == null || i(g), c.set(!0);
      },
      onMouseLeave: (g) => {
        d == null || d(g), c.set(!1), w.set(!1);
      },
      onFocus: (g) => {
        l == null || l(g), h.set(!0);
      },
      onBlur: (g) => {
        a == null || a(g), h.set(!1);
      },
      onPointerDown: (g) => {
        p == null || p(g), w.set(!0);
      },
      onPointerUp: (g) => {
        u == null || u(g), w.get && w.set(!1);
      },
      ...C,
      style: {
        ...k(
          w.get && "gray.opacity.2",
          c.get && "gray.opacity",
          h.get && {
            outlineColor: "primary"
          }
        ),
        ...b
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
        s
      ),
      children: [
        /* @__PURE__ */ t(z, { iconClassName: n, icon: o }),
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
              c.get && "left-full"
            ),
            style: {
              ...k({
                background: U("to right", "transparent", "gray.opacity", "transparent")
              })
            }
          }
        )
      ]
    }
  );
}
function ue({ position: e, style: r, className: s, children: o, ...n }) {
  const a = y();
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
      children: /* @__PURE__ */ x(
        "div",
        {
          ...n,
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
            s
          ),
          style: {
            ...a({
              borderColor: "borders",
              backgroundColor: "secondry.background",
              boxShadow: V([
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
                  ...a({
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
function fe({ id: e, config: r }) {
  const s = y(), o = ((r == null ? void 0 : r.match) || ".").split("-"), n = m(null);
  return /* @__PURE__ */ t(P, { onKeyDown: () => {
  }, focusId: e, className: "flex items-center gap-2 rounded-lg w-fit", ignoreOutline: !0, children: /* @__PURE__ */ t(
    D,
    {
      list: o.map((a, l) => {
        const i = a.split(""), d = i.length;
        return /* @__PURE__ */ t("div", { className: "flex", children: /* @__PURE__ */ t(
          D,
          {
            list: i.map((p, u) => /* @__PURE__ */ t(
              "div",
              {
                className: f(
                  `
                          w-[40px]
                          h-[40px]
                          border-solid
                          border-transparent
                          text-lg
                          text-center
                          border-y
                          border-r
                        `,
                  u == 0 && "rounded-ss-lg rounded-es-lg border-l",
                  u + 1 == d && "rounded-se-lg rounded-ee-lg"
                ),
                style: {
                  ...s(
                    {
                      borderColor: "borders"
                    },
                    n.get === `${l}-${u}` && {
                      borderColor: "primary"
                    }
                  )
                },
                onKeyDown: (b) => {
                  new W("backspace").test(b) && b.preventDefault();
                }
              },
              u
            )),
            joinComponent: /* @__PURE__ */ t(v, {})
          },
          l
        ) });
      }),
      joinComponent: /* @__PURE__ */ t(v, { children: "-" })
    }
  ) });
}
function ge({ length: e = 4, starts: r = e, onSubmit: s }) {
  const o = y();
  return /* @__PURE__ */ t(v, { children: G(e).map((n, a) => /* @__PURE__ */ t(
    $,
    {
      style: {
        ...o({
          color: "starts.color"
        })
      },
      onClick: (l) => {
        s == null || s(a);
      },
      className: "transform hover:scale-150 transition-tansform duration-200",
      icon: r < n ? J : X
    },
    n
  )) });
}
function pe({ children: e, icon: r, iconClassName: s, isActive: o, style: n, ...a }) {
  const l = m(!1);
  F.useEffect(() => () => {
    l.set(!1);
  }, []);
  const i = y();
  return /* @__PURE__ */ x(
    "span",
    {
      onMouseEnter: () => {
        l.set(!0);
      },
      onMouseLeave: () => {
        l.set(!1);
      },
      style: {
        ...i(
          o && "primary",
          o && {
            color: "primary.content"
          }
        ),
        ...n
      },
      className: f("relative inline-flex items-center gap-1 px-3 cursor-pointer h-[35px] capitalize outline-1 -outline-offset-1 outline-transparent rounded-lg"),
      ...a,
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: f("transition-[width,height,box-shadow] duration-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 rounded-lg -translate-y-1/2 w-full h-full pointer-events-none z-[-10]"),
            style: {
              ...i(
                "secondry.background",
                l.get && "gray.opacity.2",
                o && "primary",
                o && {
                  boxShadow: V([
                    {
                      colorId: "shadow.color",
                      x: 0,
                      y: 5,
                      blur: 6,
                      size: 0
                    }
                  ])
                }
              )
            }
          }
        ),
        /* @__PURE__ */ t(z, { iconClassName: s, icon: r }),
        e
      ]
    }
  );
}
function ee({ string: e = "expmle", time: r = 10 }) {
  const s = m(e), o = m(""), n = m(!0);
  return F.useEffect(() => {
    const a = s.get, l = q(a.split("").filter(Boolean));
    n.set(!0);
    let i = 0, d = 0;
    const p = setInterval(function() {
      if (i >= a.length) {
        n.set(!1), clearInterval(p);
        return;
      }
      o.set(`${a.slice(0, i)}${l[d]}`), l[d] == a[i] ? (i++, d = 0) : d++;
    }, r);
    return function() {
      n.set(!1), clearInterval(p);
    };
  }, [s.get]), {
    state: s,
    value: o.get,
    isLoading: n.get
  };
}
const me = ({ content: e, time: r }) => {
  const { state: s, value: o } = ee({
    time: r,
    string: e
  });
  return F.useEffect(() => {
    s.set(e || "");
  }, [e]), /* @__PURE__ */ t(v, { children: o });
};
function be({ inputName: e, defaultContent: r, value: s, setValue: o, visibility: n, setVisibility: a, controls: l, placeholder: i }) {
  const d = m(!1), p = `focus-input-update-${e}`, u = `escape-input-update-${e}`;
  M(
    p,
    async () => {
      var c;
      a(!0), A.setOneFeild(e, "value", s || ""), await new Z().start(100), L(e), (c = document.getElementById(e)) == null || c.select();
    },
    [s, a]
  );
  const b = A.getOneFeild(e, "value");
  M(
    u,
    () => {
      if (b == null)
        return;
      if (!Object.keys(l || {}).every((k) => {
        try {
          const h = new RegExp(k);
          return !!b.match(h);
        } catch {
          return !0;
        }
      })) {
        L(e);
        return;
      }
      a(!1), o(b);
    },
    [b, l]
  );
  const C = y();
  return /* @__PURE__ */ t("div", { className: "p-2 group", children: /* @__PURE__ */ x("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ t("h1", { className: "truncate", hidden: !!n, children: s || r }),
    n && /* @__PURE__ */ t(
      R,
      {
        placeholder: i,
        controls: l,
        className: "p-1",
        inputName: e,
        onBlur: () => {
          I(u);
        },
        style: {
          ...C(d.get && { borderColor: "error" })
        },
        onKeyDown: (c) => {
          c.key = c.key.toLowerCase(), ["enter", "tab"].includes(c.key) && (c.stopPropagation(), c.preventDefault(), c.currentTarget.blur());
        }
      }
    ),
    /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
      H,
      {
        className: "group-hover:visible invisible",
        icon: n ? Q : Y,
        onPointerDown: () => {
          n ? I(u) : I(p);
        }
      }
    ) })
  ] }) });
}
function ye({ ref: e, position: [r, s] = [0, 0], children: o, style: n, className: a, ...l }) {
  return /* @__PURE__ */ t(
    "div",
    {
      ref: e,
      ...l,
      style: {
        ...n,
        left: r,
        top: s
      },
      className: f("transition-[left,top] duration-300", a, "fixed"),
      children: o
    }
  );
}
function xe() {
  return /* @__PURE__ */ t("div", { "aria-label": "window-controls", className: "flex text-md" });
}
const he = ({ ...e }) => /* @__PURE__ */ t("span", { className: "w-[40px] h-full inline-flex items-center justify-center transition-[background]", ...e, tabIndex: -1 });
export {
  Ce as Anchor,
  ke as ArrayFeild,
  Fe as AsyncComponent,
  Ie as BlurOverlay,
  Ne as BooleanFeild,
  Se as Button,
  De as Card,
  le as CenterWindowDrag,
  Le as CircleLoading,
  H as CircleTip,
  Te as ColorsList,
  Me as ContentOfImageView,
  ie as DarkLightIcon,
  Ae as DataBaseManagmentList,
  Oe as DateFeild,
  $e as DialogBox,
  ze as DownOverlay,
  v as EmptyComponent,
  Be as EnumFeild,
  Ve as FastList,
  R as Feild,
  je as FileFeild,
  Ee as FilterFeild,
  P as Focus,
  ce as Hours,
  z as Icon,
  Pe as Icons,
  Re as Image,
  He as ImageChoiser,
  Ke as ImageFeild,
  _e as Input,
  D as JoinComponentBy,
  We as KeyPanding,
  de as LargeButton,
  Ge as Line,
  Je as LineLoading,
  Xe as List,
  qe as MarkDown,
  Qe as MultiScreenPage,
  Ye as Note,
  Ze as NumberFeild,
  Ue as ObjectFeild,
  ue as PanelSide,
  et as PasswordFeild,
  fe as PinFeild,
  tt as PositionView,
  rt as RecorderFeild,
  st as RegexpFeild,
  at as ResizeView,
  ot as Scroll,
  nt as SeparatedViewsLine,
  lt as SeparatedViewsLineTitle,
  it as Slot,
  ge as Starts,
  ct as StringFeild,
  pe as Tab,
  E as Text,
  me as TextAnimation,
  dt as TextArea,
  ut as Tip,
  ft as TitleProvider,
  j as TitleView,
  gt as Tree,
  be as UpdateData,
  pt as ViewPage,
  ye as ViewPanel,
  xe as WindowControls,
  he as WindowsButton
};
