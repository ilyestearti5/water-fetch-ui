import { T as A, F as B, C as P } from "./ViewPage-Kyfwhmhp.mjs";
import { A as ae, a as se, b as re, B as ne, c as oe, d as ie, e as le, v as ce, f as de, g as ue, h as ge, i as fe, j as me, k as pe, D as be, E as xe, l as ye, m as we, n as he, o as ve, I as Fe, p as Ce, q as Le, r as ke, s as Ie, J as Se, K as De, L as Te, t as Ae, u as Be, w as Pe, M as Me, x as Ne, N as Ee, y as Oe, O as Ve, P as je, z as $e, G as ze, R as Re, H as He, Q as We, U as Ke, V as _e, W as Je, X as Ue, Y as Xe, Z as qe, S as Ge, _ as Qe, $ as Ye, a0 as Ze, a1 as et, a2 as tt, a3 as at, a4 as st } from "./ViewPage-Kyfwhmhp.mjs";
import { j as t, a as p, E as I } from "./EmptyComponent-DdPDoXyL.mjs";
import { g as v, u as g, a as w, s as M, h as N, b as F, f as C, e as x } from "./index-BbF-ZXBS.mjs";
import { t as f, r as E, D as O, s as L } from "./index-xG9JJ5Ch.mjs";
import h from "react";
import { f as V, a as j } from "./index-Dr7qSHtq.mjs";
function J({ children: e }) {
  return /* @__PURE__ */ t("div", { className: "flex justify-center items-center px-3 w-full window-dragged h-full text-center capitalize overflow-hidden", children: e });
}
const y = ({ time: e }) => /* @__PURE__ */ t("span", { className: "font-mono", children: e >= 10 ? e : `0${e}` }), k = "visibility/timer.boolean";
function U() {
  const e = v(k), a = g(null);
  h.useEffect(() => {
    const n = setInterval(() => {
      const i = /* @__PURE__ */ new Date();
      a.set(i);
    }, 1e3);
    return () => {
      clearInterval(n);
    };
  }, []);
  const s = v("preferences/animation.boolean"), r = {
    ...w()("secondry.background", {
      borderColor: "borders",
      color: "focus.text"
    })
  };
  return /* @__PURE__ */ p(
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
        M.setOneFeild(k, "value", !e);
      },
      style: r,
      children: [
        a.get && /* @__PURE__ */ p(I, { children: [
          /* @__PURE__ */ t(y, { time: a.get.getHours() }),
          ":",
          /* @__PURE__ */ t(y, { time: a.get.getMinutes() }),
          ":",
          /* @__PURE__ */ t(y, { time: a.get.getSeconds() })
        ] }),
        !a.get && /* @__PURE__ */ t(A, { content: "loading" })
      ]
    }
  );
}
function X({ position: e, style: a, className: s, children: o, ...r }) {
  const n = w();
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
      children: /* @__PURE__ */ p(
        "div",
        {
          ...r,
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
            ...n({
              borderColor: "borders",
              backgroundColor: "secondry.background",
              boxShadow: N([
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
                  ...n({
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
function $({ string: e = "expmle", time: a = 10 }) {
  const s = g(e), o = g(""), r = g(!0);
  return h.useEffect(() => {
    const n = s.get, i = E(n.split("").filter(Boolean));
    r.set(!0);
    let c = 0, d = 0;
    const u = setInterval(function() {
      if (c >= n.length) {
        r.set(!1), clearInterval(u);
        return;
      }
      o.set(`${n.slice(0, c)}${i[d]}`), i[d] == n[c] ? (c++, d = 0) : d++;
    }, a);
    return function() {
      r.set(!1), clearInterval(u);
    };
  }, [s.get]), {
    state: s,
    value: o.get,
    isLoading: r.get
  };
}
const q = ({ content: e, time: a }) => {
  const { state: s, value: o } = $({
    time: a,
    string: e
  });
  return h.useEffect(() => {
    s.set(e || "");
  }, [e]), /* @__PURE__ */ t(I, { children: o });
};
function G({ inputName: e, defaultContent: a, value: s, setValue: o, visibility: r, setVisibility: n, controls: i, placeholder: c }) {
  const d = g(!1), u = `focus-input-update-${e}`, b = `escape-input-update-${e}`;
  F(
    u,
    async () => {
      var l;
      n(!0), C.setOneFeild(e, "value", s || ""), await new O().start(100), L(e), (l = document.getElementById(e)) == null || l.select();
    },
    [s, n]
  );
  const m = C.getOneFeild(e, "value");
  F(
    b,
    () => {
      if (m == null)
        return;
      if (!Object.keys(i || {}).every((D) => {
        try {
          const T = new RegExp(D);
          return !!m.match(T);
        } catch {
          return !0;
        }
      })) {
        L(e);
        return;
      }
      n(!1), o(m);
    },
    [m, i]
  );
  const S = w();
  return /* @__PURE__ */ t("div", { className: "p-2 group", children: /* @__PURE__ */ p("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ t("h1", { className: "truncate", hidden: !!r, children: s || a }),
    r && /* @__PURE__ */ t(
      B,
      {
        placeholder: c,
        controls: i,
        className: "p-1",
        inputName: e,
        onBlur: () => {
          x(b);
        },
        style: {
          ...S(d.get && { borderColor: "error" })
        },
        onKeyDown: (l) => {
          l.key = l.key.toLowerCase(), ["enter", "tab"].includes(l.key) && (l.stopPropagation(), l.preventDefault(), l.currentTarget.blur());
        }
      }
    ),
    /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
      P,
      {
        className: "group-hover:visible invisible",
        icon: r ? V : j,
        onPointerDown: () => {
          r ? x(b) : x(u);
        }
      }
    ) })
  ] }) });
}
function Q({ ref: e, position: [a, s] = [0, 0], children: o, style: r, className: n, ...i }) {
  return /* @__PURE__ */ t(
    "div",
    {
      ref: e,
      ...i,
      style: {
        ...r,
        left: a,
        top: s
      },
      className: f("transition-[left,top] duration-300", n, "fixed"),
      children: o
    }
  );
}
function Y() {
  return /* @__PURE__ */ t("div", { "aria-label": "window-controls", className: "flex text-md" });
}
const Z = ({ ...e }) => /* @__PURE__ */ t("span", { className: "w-[40px] h-full inline-flex items-center justify-center transition-[background]", ...e, tabIndex: -1 });
export {
  ae as Anchor,
  se as ArrayFeild,
  re as AsyncComponent,
  ne as BlurOverlay,
  oe as BooleanFeild,
  ie as Button,
  le as Card,
  J as CenterWindowDrag,
  ce as CircleLoading,
  P as CircleTip,
  de as ColorsList,
  ue as ContentOfImageView,
  ge as DarkLightIcon,
  fe as DataBaseManagmentList,
  me as DateFeild,
  pe as DialogBox,
  be as DownOverlay,
  I as EmptyComponent,
  xe as EnumFeild,
  ye as FastList,
  B as Feild,
  we as FileFeild,
  he as FilterFeild,
  ve as Focus,
  U as Hours,
  Fe as Icon,
  Ce as Icons,
  Le as Image,
  ke as ImageFeild,
  Ie as Input,
  Se as JoinComponentBy,
  De as KeyPanding,
  Te as LargeButton,
  Ae as Line,
  Be as LineLoading,
  Pe as List,
  Me as MarkDown,
  Ne as MultiScreenPage,
  Ee as Note,
  Oe as NumberFeild,
  Ve as ObjectFeild,
  X as PanelSide,
  je as PasswordFeild,
  $e as PinFeild,
  ze as PositionView,
  Re as RecorderFeild,
  He as RegexpFeild,
  We as ResizeView,
  Ke as Scroll,
  _e as SeparatedViewsLine,
  Je as SeparatedViewsLineTitle,
  Ue as Slot,
  Xe as Starts,
  qe as StringFeild,
  Ge as StyledButton,
  Qe as Tab,
  A as Text,
  q as TextAnimation,
  Ye as TextArea,
  Ze as Tip,
  et as TitleProvider,
  tt as TitleView,
  at as Tree,
  G as UpdateData,
  st as ViewPage,
  Q as ViewPanel,
  Y as WindowControls,
  Z as WindowsButton
};
