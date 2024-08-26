import { T, F as P, C as D } from "./ViewPage-C6t5wQXF.mjs";
import { A as oe, a as ie, b as le, B as ce, c as de, d as ue, e as ge, X as fe, z as me, f as pe, g as he, h as xe, i as be, k as we, l as ye, D as ve, m as Ce, E as Fe, n as Ie, o as Le, p as Me, q as Se, I as ke, r as Ae, t as Te, u as Pe, a8 as De, v as Ne, J as ze, K as Be, L as Ee, x as Ve, y as je, G as Oe, M as $e, H as Re, N as He, O as Ze, Q as We, R as Ke, U as Ue, W as _e, Y as Je, Z as Xe, _ as qe, $ as Ge, a0 as Qe, a1 as Ye, a2 as et, w as tt, a3 as at, a4 as st, a5 as nt, S as rt, a6 as ot, a9 as it, aa as lt, ab as ct, ac as dt, ad as ut, V as gt, ae as ft, j as mt, a7 as pt, P as ht, s as xt } from "./ViewPage-C6t5wQXF.mjs";
import { j as t, a as p, E as M } from "./EmptyComponent-DdPDoXyL.mjs";
import { g as v, u as g, a as w, s as N, h as z, b as C, f as F, e as x } from "./index-8qQxvEIo.mjs";
import { t as f, r as B, D as E, s as I } from "./index-DRKFUSi1.mjs";
import y from "react";
import { f as V, a as j } from "./index-Buy7cH84.mjs";
function U({ children: e }) {
  return /* @__PURE__ */ t("div", { className: "flex justify-center items-center px-3 w-full window-dragged h-full text-center capitalize overflow-hidden", children: e });
}
const b = ({ time: e }) => /* @__PURE__ */ t("span", { className: "font-mono", children: e >= 10 ? e : `0${e}` }), L = "visibility/timer.boolean";
function _() {
  const e = v(L), a = g(null);
  y.useEffect(() => {
    const r = setInterval(() => {
      const i = /* @__PURE__ */ new Date();
      a.set(i);
    }, 1e3);
    return () => {
      clearInterval(r);
    };
  }, []);
  const s = v("preferences/animation.boolean"), n = {
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
        N.setOneFeild(L, "value", !e);
      },
      style: n,
      children: [
        a.get && /* @__PURE__ */ p(M, { children: [
          /* @__PURE__ */ t(b, { time: a.get.getHours() }),
          ":",
          /* @__PURE__ */ t(b, { time: a.get.getMinutes() }),
          ":",
          /* @__PURE__ */ t(b, { time: a.get.getSeconds() })
        ] }),
        !a.get && /* @__PURE__ */ t(T, { content: "loading" })
      ]
    }
  );
}
function J({ position: e, style: a, className: s, children: o, ...n }) {
  const r = w();
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
            ...r({
              borderColor: "borders",
              backgroundColor: "secondry.background",
              boxShadow: z([
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
                  ...r({
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
function O({ string: e = "expmle", time: a = 10 }) {
  const s = g(e), o = g(""), n = g(!0);
  return y.useEffect(() => {
    const r = s.get, i = B(r.split("").filter(Boolean));
    n.set(!0);
    let c = 0, d = 0;
    const u = setInterval(function() {
      if (c >= r.length) {
        n.set(!1), clearInterval(u);
        return;
      }
      o.set(`${r.slice(0, c)}${i[d]}`), i[d] == r[c] ? (c++, d = 0) : d++;
    }, a);
    return function() {
      n.set(!1), clearInterval(u);
    };
  }, [s.get]), {
    state: s,
    value: o.get,
    isLoading: n.get
  };
}
const X = ({ content: e, time: a }) => {
  const { state: s, value: o } = O({
    time: a,
    string: e
  });
  return y.useEffect(() => {
    s.set(e || "");
  }, [e]), /* @__PURE__ */ t(M, { children: o });
};
function q({ inputName: e, defaultContent: a, value: s, setValue: o, visibility: n, setVisibility: r, controls: i, placeholder: c }) {
  const d = g(!1), u = `focus-input-update-${e}`, h = `escape-input-update-${e}`;
  C(
    u,
    async () => {
      var l;
      r(!0), F.setOneFeild(e, "value", s || ""), await new E().start(100), I(e), (l = document.getElementById(e)) == null || l.select();
    },
    [s, r]
  );
  const m = F.getOneFeild(e, "value");
  C(
    h,
    () => {
      if (m == null)
        return;
      if (!Object.keys(i || {}).every((k) => {
        try {
          const A = new RegExp(k);
          return !!m.match(A);
        } catch {
          return !0;
        }
      })) {
        I(e);
        return;
      }
      r(!1), o(m);
    },
    [m, i]
  );
  const S = w();
  return /* @__PURE__ */ t("div", { className: "p-2 group", children: /* @__PURE__ */ p("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ t("h1", { className: "truncate", hidden: !!n, children: s || a }),
    n && /* @__PURE__ */ t(
      P,
      {
        placeholder: c,
        controls: i,
        className: "p-1",
        inputName: e,
        onBlur: () => {
          x(h);
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
      D,
      {
        className: "group-hover:visible invisible",
        icon: n ? V : j,
        onPointerDown: () => {
          n ? x(h) : x(u);
        }
      }
    ) })
  ] }) });
}
function G({ ref: e, position: [a, s] = [0, 0], children: o, style: n, className: r, ...i }) {
  return /* @__PURE__ */ t(
    "div",
    {
      ref: e,
      ...i,
      style: {
        ...n,
        left: a,
        top: s
      },
      className: f("transition-[left,top] duration-300", r, "fixed"),
      children: o
    }
  );
}
function Q() {
  return /* @__PURE__ */ t("div", { "aria-label": "window-controls", className: "flex text-md" });
}
const Y = ({ ...e }) => /* @__PURE__ */ t("span", { className: "w-[40px] h-full inline-flex items-center justify-center transition-[background]", ...e, tabIndex: -1 }), ee = ({ color: e }) => /* @__PURE__ */ t("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ t("path", { className: "transition-[fill]", fill: e, d: "M 0,5 10,5 10,6 0,6 Z" }) }), te = ({ color: e }) => /* @__PURE__ */ t("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ t("path", { className: "transition-[fill]", fill: e, d: "m 2,1e-5 0,2 -2,0 0,8 8,0 0,-2 2,0 0,-8 z m 1,1 6,0 0,6 -1,0 0,-5 -5,0 z m -2,2 6,0 0,6 -6,0 z" }) }), ae = ({ color: e }) => /* @__PURE__ */ t("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ t("path", { className: "transition-[fill]", fill: e, d: "M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z" }) }), se = ({ color: e }) => /* @__PURE__ */ t("svg", { version: "1.1", width: "10", height: "10", children: /* @__PURE__ */ t("path", { className: "transition-[fill]", fill: e, d: "M 0,0 0,10 10,10 10,0 Z M 1,1 9,1 9,9 1,9 Z" }) });
export {
  oe as Anchor,
  ie as ArrayFeild,
  le as AsyncComponent,
  ce as BlurOverlay,
  de as BooleanFeild,
  ue as Button,
  ge as Card,
  U as CenterWindowDrag,
  fe as ChangableComponent,
  me as CircleLoading,
  D as CircleTip,
  ae as CloseActionIcon,
  pe as ColorsList,
  he as ContentOfImageView,
  xe as DarkLightIcon,
  be as DataBaseManagmentList,
  we as DateFeild,
  ye as DialogBox,
  ve as DownOverlay,
  M as EmptyComponent,
  Ce as EnumFeild,
  Fe as EnumList,
  Ie as FastList,
  P as Feild,
  Le as FileFeild,
  Me as FilterFeild,
  Se as Focus,
  _ as Hours,
  ke as Icon,
  Ae as Icons,
  Te as Image,
  Pe as ImageFeild,
  De as InnerText,
  Ne as Input,
  ze as JoinComponentBy,
  Be as KeyPanding,
  Ee as LargeButton,
  Ve as Line,
  je as LineLoading,
  Oe as List,
  $e as MarkDown,
  se as MaximizeActionIcon,
  ee as MinimizeActionIcon,
  Re as MultiScreenPage,
  He as Note,
  Ze as NumberFeild,
  We as ObjectFeild,
  J as PanelSide,
  Ke as Password,
  Ue as PasswordFeild,
  _e as PinFeild,
  Je as PositionView,
  Xe as RecorderFeild,
  qe as RegexpFeild,
  Ge as ResizeView,
  Qe as Scroll,
  Ye as SeparatedViewsLine,
  et as SeparatedViewsLineTitle,
  tt as SinglePanding,
  at as Slot,
  st as Starts,
  nt as StringFeild,
  rt as StyledButton,
  ot as Tab,
  T as Text,
  X as TextAnimation,
  it as TextArea,
  lt as Tip,
  ct as TitleProvider,
  dt as TitleView,
  ut as Tree,
  te as UnMaximizeActionIcon,
  q as UpdateData,
  gt as VarFastList,
  ft as ViewPage,
  G as ViewPanel,
  Q as WindowControls,
  Y as WindowsButton,
  mt as dateToStringForInput,
  pt as getText,
  ht as objectIfPrefix,
  xt as slotId,
  O as useTextAnimation
};
