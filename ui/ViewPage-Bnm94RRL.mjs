import { j as o, E as P, a as M, I as ae, c as nt, h as te, d as ce, F as le, J as be, T as V, L as De, H as It, u as zt, S as st } from "./SeparatedComponents-DfUPj3TY.mjs";
import { ad as Ht, u as A, a as F, ae as Me, af as pe, ag as Pt, ah as Ut, K as Ce, y as D, ai as ot, aj as _t, b as G, h as fe, f as _, ak as We, x as X, al as Wt, T as lt, p as Kt, Q as Xt, r as Yt, a6 as ne, am as Vt, k as Zt, e as Y, a7 as at, B as ct, d as it, C as qt, g as ee, an as Ke, M as de, ao as Gt, V as Jt, j as ut, ap as Qt, aq as er, ar as tr, as as rr, at as nr, au as se, av as sr, z as or } from "./index-8xvo7Uwy.mjs";
import * as ge from "react";
import g from "react";
import { t as O, a0 as lr, j as ar, m as ke, $ as Be, g as dt, P as ie, k as Ie, a1 as cr, a2 as ft, s as xe, c as ze, S as ve, a3 as Oe, a4 as ir, a5 as ur, e as mt, a6 as dr, F as fr, q as mr, a7 as Xe, a8 as pr, a9 as gr, aa as hr, ab as yr, ac as br, ad as xr, ae as vr, L as wr, af as kr, ag as Nr, ah as Er, ai as Mr, aj as Ye, ak as pt, al as gt, Z as ht } from "./index-Cep-AhVL.mjs";
import { B as J, C as Cr } from "./Card-BKH5_KnN.mjs";
import { allIcons as we } from "./apis.js";
function Wn({ render: e, error: r = /* @__PURE__ */ o(P, {}), deps: t = [], loading: n = /* @__PURE__ */ o(P, {}) }) {
  const c = Ht(async () => {
    try {
      return await e();
    } catch {
      return r;
    }
  }, [e, r, n, ...t]);
  return /* @__PURE__ */ o(P, { children: c ?? n });
}
function he({ children: e, className: r, icon: t, style: n = {}, iconClassName: c, onPointerDown: l, onPointerLeave: a, onPointerUp: u, onMouseEnter: i, onMouseLeave: h, ...p }) {
  const f = A(), y = F(!1), s = F(!1);
  return g.useEffect(() => () => {
    y.set(!1), s.set(!1);
  }, []), /* @__PURE__ */ M(
    "button",
    {
      onMouseEnter: (m) => {
        s.set(!0), i == null || i(m);
      },
      onMouseLeave: (m) => {
        s.set(!1), h == null || h(m);
      },
      onPointerDown: (m) => {
        y.set(!0), l == null || l(m);
      },
      onPointerUp: (m) => {
        y.set(!1), u == null || u(m);
      },
      onPointerLeave: (m) => {
        y.set(!1), a == null || a(m);
      },
      className: O(
        `
        rounded-full
        w-[40px]
        h-[40px]
        gap-2
        flex
        items-center
        justify-center
        outline-0
        md:outline-offset-1
        md:outline-transparent
        md:focus:outline-2
        truncate
      `,
        r,
        "relative"
      ),
      type: "button",
      style: {
        ...f(s.get && "gray.opacity", y.get && "gray.opacity.2", {
          outlineColor: "primary"
        }),
        ...n
      },
      ...p,
      children: [
        /* @__PURE__ */ o(ae, { iconClassName: lr("text-xl", c), icon: t }),
        e
      ]
    }
  );
}
function Or({
  title: e,
  onClick: r,
  position: { x: t = "right", y: n = "bottom" } = { x: "right", y: "bottom" },
  onMouseMove: c,
  onMouseLeave: l,
  children: a,
  canMouseOn: u = !1,
  ...i
}) {
  const h = g.createRef();
  g.useEffect(() => () => {
    Me(null), pe(null);
  }, []);
  const p = () => {
    u || (Me(null), pe(null));
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: h,
      onClick: (f) => {
        p(), r == null || r(f);
      },
      onMouseMove: (f) => {
        e && (Me(e), pe([f.clientX, f.clientY]), Pt(t), Ut(n)), c == null || c(f);
      },
      onMouseLeave: (f) => {
        p(), l == null || l(f);
      },
      ...i,
      children: a
    }
  );
}
const yt = ({ onContentChange: e, ...r }) => {
  const t = g.createRef(), n = F(null);
  g.useEffect(() => {
    const l = t.current;
    if (l) {
      const a = () => {
        const f = l.getBoundingClientRect();
        n.set(f);
      }, u = setTimeout(() => {
        a();
      }, 300), i = new ResizeObserver(a), h = new MutationObserver(a), p = new IntersectionObserver(a);
      return i.observe(l, { box: "border-box" }), i.observe(l, { box: "content-box" }), i.observe(l, { box: "device-pixel-content-box" }), h.observe(l, { attributes: !0, subtree: !0, characterData: !0, childList: !0 }), p.observe(l), addEventListener("resize", a), () => {
        i.disconnect(), h.disconnect(), p.disconnect(), removeEventListener("resize", a), clearTimeout(u);
      };
    }
  }, [t.current]), g.useEffect(() => {
    n.get && (e == null || e(n.get));
  }, [n.get]);
  const c = g.useMemo(() => {
    if (!n.get)
      return {};
    const { bottom: l, height: a, left: u, right: i, top: h, width: p, x: f, y } = n.get;
    return {
      bottom: l,
      height: a,
      left: u,
      right: i,
      top: h,
      width: p,
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
    yt,
    {
      onContentChange: ({ bottom: n, height: c, left: l, right: a, top: u, width: i, x: h, y: p }) => {
        const f = { bottom: n, height: c, left: l, right: a, top: u, width: i, x: h, y: p };
        Ce.setOne(e, f);
      },
      ...r
    }
  );
};
function He({ focusId: e, itemSize: r, slotId: t, component: n, handelSkip: c, data: l, countLastItems: a = 3, overflow: { top: u = 0, bottom: i = 0 } = { top: 0, bottom: 0 }, ...h }) {
  const p = D.getOne(t), f = F(0), y = F(0);
  let s = D.getOneFeild(t, "focused");
  ot(t, l), g.useEffect(() => {
    D.setOneFeild(t, "length", l.length), l.length || _t(t);
  }, [l]), g.useEffect(() => {
    typeof s == "number" && l.length <= s && D.setOneFeild(t, "focused", l.length - 1);
  }, [s, l]);
  const m = F(!1);
  g.useEffect(() => {
    m.set(!1);
  }, [s]), g.useEffect(() => {
    if ([m.get, typeof s != "number", s >= l.length, y.get < r].some(Boolean))
      return;
    const $ = f.get <= s * r, R = (s + 1) * r <= f.get + y.get;
    if (R && $)
      return;
    let B;
    s < 0 ? s = 0 : s > (B = Math.abs(l.length - a)) && (s = B), R || (s = s + 1 - y.get / r);
    const H = r * s;
    f.set(H);
  }, [s, l, a, f.get, y.get, m.get]);
  const d = G("preferences/fastScrollKey.enum"), w = g.useMemo(() => r * l.length, [r, l]), x = g.useMemo(() => w + r * a, [w, r, a]), b = g.useMemo(() => y.get * 100 / x, [x, y.get]), E = g.useMemo(() => f.get * 100 / x, [x, f.get]), k = G("preferences/scrollAnimation.boolean.boolean"), T = F(!1), S = F(null), v = g.useMemo(() => n, []), C = A(), j = ($) => {
    var B;
    const R = S.get;
    if (R) {
      let I = ($ - R.top - (((B = L.current) == null ? void 0 : B.clientHeight) || 0) / 2) / R.height * x;
      const W = x - R.height;
      I < 0 ? I = 0 : I > W && (I = W), f.set(I);
    }
  }, L = g.createRef(), z = g.useMemo(() => b <= 100, [b]), N = g.createRef();
  return /* @__PURE__ */ o(nt, { ...h, focusId: e, className: "relative w-full h-full select-none", ignoreOutline: typeof s == "number", id: t, children: /* @__PURE__ */ M(
    yt,
    {
      onContentChange: ($) => {
        y.set($.height), S.set($);
      },
      className: "relative h-full overflow-hidden",
      onWheel: ($) => {
        if (b < 100) {
          let R = !1;
          d == "alt" ? R = $.altKey : d == "control" ? R = $.ctrlKey : d == "shift" && (R = $.shiftKey), m.set(!0), f.set((B) => (B += $.deltaY * (R ? 0.6 : 0.1), B < 0 ? 0 : Math.min(B, (l.length + a) * r - y.get)));
        }
      },
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            ref: N,
            className: O("absolute inset-x-0", k && "transition-[top,left]"),
            style: {
              top: -f.get,
              height: w
            },
            children: l.map(($, R) => {
              var I;
              const H = r * R - f.get;
              if (ar(-(u + 1) * r, H, H + r, y.get + (i + 1) * r)) {
                const W = {
                  isFocused: R == (p == null ? void 0 : p.focused),
                  isSelected: !!((I = p == null ? void 0 : p.selected) != null && I[R]),
                  isSubmited: R == (p == null ? void 0 : p.submited),
                  isSkiped: !!(c && c({
                    data: $,
                    index: R
                  }))
                }, U = {
                  height: r,
                  position: "absolute",
                  top: r * R,
                  insetInline: "0px"
                };
                return /* @__PURE__ */ o(v, { status: W, index: R, data: $, style: U, handel: {
                  focus() {
                    D.setOneFeild(t, "focused", R);
                  },
                  select(Ee, me) {
                    if (Ee)
                      D.setOneFeild(t, "selected", {
                        [R]: me
                      });
                    else {
                      if (!(p != null && p.selected))
                        return;
                      D.setOneFeild(t, "selected", {
                        ...p.selected,
                        [R]: me
                      });
                    }
                  },
                  submit() {
                    D.setOneFeild(t, "submited", R);
                  },
                  skip(Ee, me) {
                    Ee && D.setOneFeild(t, "skiped", { [R]: me });
                  }
                } }, R);
              }
            })
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            hidden: !z,
            "aria-label": "scroll-bar",
            onMouseEnter: () => {
              T.set(!0);
            },
            onMouseLeave: () => {
              T.set(!1);
            },
            onPointerDown: ($) => {
              m.set(!0), j($.clientY);
            },
            className: O("absolute right-0 w-[20px] h-full inset-y-0 transition-[width] duration-300"),
            children: /* @__PURE__ */ o(
              "div",
              {
                "aria-label": "scroll-bar-thumb",
                className: "w-full transition-[top] duration-100 inset-x-0 absolute",
                ref: L,
                style: {
                  ...C("gray.opacity.2"),
                  ...ke({
                    height: `${b}%`,
                    top: `${E}%`
                  })
                },
                onMouseDown: () => {
                  m.set(!0);
                  const $ = (B) => {
                    j(B.clientY);
                  };
                  document.addEventListener("mousemove", $);
                  const R = () => {
                    document.removeEventListener("mousemove", $), document.removeEventListener("mouseup", R);
                  };
                  document.addEventListener("mouseup", R);
                },
                onTouchMove: ($) => {
                  $.stopPropagation(), $.preventDefault(), j($.touches[0].clientY);
                }
              }
            )
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            "data-scrolled": f.get >= 10,
            className: "-top-[20px] absolute inset-x-0 h-[20px]",
            style: {
              ...C(
                f.get >= 10 && {
                  boxShadow: fe([
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
  const e = _.getOneFeild("findConfigurations", "value"), r = We.getAll(), t = g.useMemo(() => typeof e == "string" ? r.filter(({ colorId: n }) => Be(n, e)) : r, [r, e]);
  return g.useEffect(() => {
    X("configurations.found.length", t.length);
  }, [t]), /* @__PURE__ */ o(
    He,
    {
      countLastItems: -1,
      focusId: "colors-list",
      slotId: "colors-list",
      data: t,
      itemSize: 50,
      component: ({ data: n, style: c, status: l, index: a, handel: u }) => {
        var m;
        const i = F(!1), h = F(!1), p = A(), f = G("window/dark.boolean"), y = g.useMemo(() => Wt(!!f, n), [f, n]);
        let s = null;
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
            className: O(`
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
              u.focus(), u.submit();
            },
            children: [
              /* @__PURE__ */ o("div", { className: "flex items-center gap-x-2", children: /* @__PURE__ */ o("span", { className: "capitalize", children: dt(n.colorId.replace(/[^a-zA-Z0-9]+/gi, " "), "camel", "normal") }) }),
              /* @__PURE__ */ M("span", { className: "inline-flex flex-wrap items-center gap-x-2", children: [
                (m = n.propositions) == null ? void 0 : m.map((d, w) => /* @__PURE__ */ o(
                  "span",
                  {
                    className: O(`
                      inline-block
                      w-[25px]
                      h-[25px]
                      rounded-md
                      border
                      border-solid
                      border-transparent
                    `),
                    style: {
                      backgroundColor: d,
                      ...p({
                        borderColor: "borders"
                      })
                    }
                  },
                  w
                )),
                /* @__PURE__ */ o(Or, { title: `**${y}**`.toUpperCase(), children: /* @__PURE__ */ o(
                  "label",
                  {
                    className: O(`
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
                    te,
                    {
                      icon: h.get ? ie : Ie,
                      onClick: async () => {
                        y && (h.set(!0), await navigator.clipboard.writeText(y));
                      },
                      onMouseLeave: () => {
                        h.set(!1);
                      }
                    }
                  ),
                  /* @__PURE__ */ o(
                    ce,
                    {
                      id: `color:${n.colorId}`,
                      tabIndex: -1,
                      value: y,
                      type: "color",
                      onValueChange: (d) => {
                        s != null && clearTimeout(s), s = setTimeout(() => {
                          We.setOneFeild(n.colorId, f ? "dark" : "light", d);
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
function Fr({ content: e }) {
  const r = A(), t = /mac/gi.test(navigator.platform), n = {
    ...r({
      backgroundColor: "gray.opacity",
      borderColor: "gray.opacity.2"
    })
  };
  return /* @__PURE__ */ M(
    "div",
    {
      style: n,
      className: O(`
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
        /control/gi.test(e) && (t ? /* @__PURE__ */ o(le, { icon: cr }) : "ctrl"),
        /shift/gi.test(e) && (t ? /* @__PURE__ */ o(le, { icon: ft }) : "shift"),
        [/control/gi, /shift/gi].every((c) => !c.test(e)) && e
      ]
    }
  );
}
function bt({ shortcut: e = [], className: r, ...t }) {
  const n = typeof e == "string" ? [e] : e;
  return /* @__PURE__ */ o(
    "span",
    {
      ...t,
      className: O(
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
        be,
        {
          list: n.map((c, l) => {
            const a = c.split("+");
            return /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-x-[1px]", children: /* @__PURE__ */ o(
              be,
              {
                list: a.map((u, i) => /* @__PURE__ */ o(Fr, { content: u }, i)),
                joinComponent: /* @__PURE__ */ o("span", { children: "+" })
              }
            ) }, l);
          }),
          joinComponent: /* @__PURE__ */ o("span", { className: "mx-1", children: /* @__PURE__ */ o(V, { content: "or" }) })
        }
      )
    }
  );
}
function Sr({ state: e, config: r = {}, id: t }) {
  const n = g.useMemo(() => typeof e.get == "boolean" ? e.get : !1, [e.get]);
  g.useEffect(() => () => {
    l.set(!1);
  }, []);
  const c = A(), l = F(!1);
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
        className: O(`
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
          ae,
          {
            iconClassName: O(
              `
              transform
              transition-transform
              duration-300
              scale-0
            `,
              n && "scale-100"
            ),
            icon: ie
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
        className: O(`
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
            className: O("absolute left-0 inline-flex items-center justify-center top-1/2 transform -translate-y-1/2 w-[20px] h-[20px] rounded-full duration-300 text-white", n && "left-1/2"),
            style: {
              ...c(n && "checkbox.true", !n && "checkbox.false")
            },
            children: /* @__PURE__ */ o(le, { icon: n ? we.solid.faCheck : we.solid.faXmark })
          }
        )
      }
    ),
    /* @__PURE__ */ o("label", { htmlFor: t, children: (n ? r == null ? void 0 : r.onActive : r == null ? void 0 : r.onDisactive) || "" })
  ] });
}
function Q() {
  return Q = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Q.apply(this, arguments);
}
const Tr = ["children", "options"];
var Ve, Ze;
(function(e) {
  e.blockQuote = "0", e.breakLine = "1", e.breakThematic = "2", e.codeBlock = "3", e.codeFenced = "4", e.codeInline = "5", e.footnote = "6", e.footnoteReference = "7", e.gfmTask = "8", e.heading = "9", e.headingSetext = "10", e.htmlBlock = "11", e.htmlComment = "12", e.htmlSelfClosing = "13", e.image = "14", e.link = "15", e.linkAngleBraceStyleDetector = "16", e.linkBareUrlDetector = "17", e.linkMailtoDetector = "18", e.newlineCoalescer = "19", e.orderedList = "20", e.paragraph = "21", e.ref = "22", e.refImage = "23", e.refLink = "24", e.table = "25", e.tableSeparator = "26", e.text = "27", e.textBolded = "28", e.textEmphasized = "29", e.textEscaped = "30", e.textMarked = "31", e.textStrikethroughed = "32", e.unorderedList = "33";
})(Ve || (Ve = {})), function(e) {
  e[e.MAX = 0] = "MAX", e[e.HIGH = 1] = "HIGH", e[e.MED = 2] = "MED", e[e.LOW = 3] = "LOW", e[e.MIN = 4] = "MIN";
}(Ze || (Ze = {}));
const qe = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, r) => (e[r.toLowerCase()] = r, e), { for: "htmlFor" }), Ge = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, $r = ["style", "script"], Rr = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, jr = /mailto:/i, Ar = /\n{2,}$/, xt = /^(\s*>[\s\S]*?)(?=\n{2,})/, Lr = /^ *> ?/gm, Dr = /^ {2,}\n/, Br = /^(?:( *[-*_])){3,} *(?:\n *)+\n/, vt = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/, wt = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, Ir = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/, zr = /^(?:\n *)*\n/, Hr = /\r\n?/g, Pr = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, Ur = /^\[\^([^\]]+)]/, _r = /\f/g, Wr = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/, Kr = /^\s*?\[(x|\s)\]/, kt = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Nt = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Et = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, Ae = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i, Xr = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, Mt = /^<!--[\s\S]*?(?:-->)/, Yr = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, Le = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, Vr = /^\{.*\}$/, Zr = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, qr = /^<([^ >]+@[^ >]+)>/, Gr = /^<([^ >]+:\/[^ >]+)>/, Jr = /-([a-z])?/gi, Ct = /^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, Qr = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, en = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, tn = /^\[([^\]]*)\] ?\[([^\]]*)\]/, rn = /(\[|\])/g, nn = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, sn = /\t/g, on = /(^ *\||\| *$)/g, ln = /^ *:-+: *$/, an = /^ *:-+ *$/, cn = /^ *-+: *$/, Ne = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)", un = new RegExp(`^([*_])\\1${Ne}\\1\\1(?!\\1)`), dn = new RegExp(`^([*_])${Ne}\\1(?!\\1|\\w)`), fn = new RegExp(`^==${Ne}==`), mn = new RegExp(`^~~${Ne}~~`), pn = /^\\([^0-9A-Za-z\s])/, gn = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i, hn = /^\n+/, yn = /^([ \t]*)/, bn = /\\([^\\])/g, Je = / *\n+$/, xn = /(?:^|\n)( *)$/, Pe = "(?:\\d+\\.)", Ue = "(?:[*+-])";
function Ot(e) {
  return "( *)(" + (e === 1 ? Pe : Ue) + ") +";
}
const Ft = Ot(1), St = Ot(2);
function Tt(e) {
  return new RegExp("^" + (e === 1 ? Ft : St));
}
const vn = Tt(1), wn = Tt(2);
function $t(e) {
  return new RegExp("^" + (e === 1 ? Ft : St) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? Pe : Ue) + " )[^\\n]*)*(\\n|$)", "gm");
}
const Rt = $t(1), jt = $t(2);
function At(e) {
  const r = e === 1 ? Pe : Ue;
  return new RegExp("^( *)(" + r + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + r + " (?!" + r + " ))\\n*|\\s*\\n*$)");
}
const Lt = At(1), Dt = At(2);
function Qe(e, r) {
  const t = r === 1, n = t ? Lt : Dt, c = t ? Rt : jt, l = t ? vn : wn;
  return { match(a, u, i) {
    const h = xn.exec(i);
    return h && (u.list || !u.inline && !u.simple) ? n.exec(a = h[1] + a) : null;
  }, order: 1, parse(a, u, i) {
    const h = t ? +a[2] : void 0, p = a[0].replace(Ar, `
`).match(c);
    let f = !1;
    return { items: p.map(function(y, s) {
      const m = l.exec(y)[0].length, d = new RegExp("^ {1," + m + "}", "gm"), w = y.replace(d, "").replace(l, ""), x = s === p.length - 1, b = w.indexOf(`

`) !== -1 || x && f;
      f = b;
      const E = i.inline, k = i.list;
      let T;
      i.list = !0, b ? (i.inline = !1, T = w.replace(Je, `

`)) : (i.inline = !0, T = w.replace(Je, ""));
      const S = u(T, i);
      return i.inline = E, i.list = k, S;
    }), ordered: t, start: h };
  }, render: (a, u, i) => e(a.ordered ? "ol" : "ul", { key: i.key, start: a.type === "20" ? a.start : void 0 }, a.items.map(function(h, p) {
    return e("li", { key: p }, u(h, i));
  })) };
}
const kn = new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), Nn = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, Bt = [xt, vt, wt, kt, Et, Nt, Mt, Ct, Rt, Lt, jt, Dt], En = [...Bt, /^[^\n]+(?:  \n|\n{2,})/, Ae, Le];
function Mn(e) {
  return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function Cn(e) {
  return cn.test(e) ? "right" : ln.test(e) ? "center" : an.test(e) ? "left" : null;
}
function et(e, r, t, n) {
  const c = t.inTable;
  t.inTable = !0;
  let l = e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce((u, i) => (i.trim() === "|" ? u.push(n ? { type: "26" } : { type: "27", text: i }) : i !== "" && u.push.apply(u, r(i, t)), u), []);
  t.inTable = c;
  let a = [[]];
  return l.forEach(function(u, i) {
    u.type === "26" ? i !== 0 && i !== l.length - 1 && a.push([]) : (u.type !== "27" || l[i + 1] != null && l[i + 1].type !== "26" || (u.text = u.text.trimEnd()), a[a.length - 1].push(u));
  }), a;
}
function On(e, r, t) {
  t.inline = !0;
  const n = e[2] ? e[2].replace(on, "").split("|").map(Cn) : [], c = e[3] ? function(a, u, i) {
    return a.trim().split(`
`).map(function(h) {
      return et(h, u, i, !0);
    });
  }(e[3], r, t) : [], l = et(e[1], r, t, !!c.length);
  return t.inline = !1, c.length ? { align: n, cells: c, header: l, type: "25" } : { children: l, type: "21" };
}
function tt(e, r) {
  return e.align[r] == null ? {} : { textAlign: e.align[r] };
}
function Z(e) {
  return function(r, t) {
    return t.inline ? e.exec(r) : null;
  };
}
function q(e) {
  return function(r, t) {
    return t.inline || t.simple ? e.exec(r) : null;
  };
}
function K(e) {
  return function(r, t) {
    return t.inline || t.simple ? null : e.exec(r);
  };
}
function ue(e) {
  return function(r) {
    return e.exec(r);
  };
}
function Fn(e, r, t) {
  if (r.inline || r.simple || t && !t.endsWith(`
`)) return null;
  let n = "";
  e.split(`
`).every((l) => !Bt.some((a) => a.test(l)) && (n += l + `
`, l.trim()));
  const c = n.trimEnd();
  return c == "" ? null : [n, c];
}
function oe(e) {
  try {
    if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return;
  } catch {
    return null;
  }
  return e;
}
function rt(e) {
  return e.replace(bn, "$1");
}
function ye(e, r, t) {
  const n = t.inline || !1, c = t.simple || !1;
  t.inline = !0, t.simple = !0;
  const l = e(r, t);
  return t.inline = n, t.simple = c, l;
}
function Sn(e, r, t) {
  const n = t.inline || !1, c = t.simple || !1;
  t.inline = !1, t.simple = !0;
  const l = e(r, t);
  return t.inline = n, t.simple = c, l;
}
function Tn(e, r, t) {
  const n = t.inline || !1;
  t.inline = !1;
  const c = e(r, t);
  return t.inline = n, c;
}
const Fe = (e, r, t) => ({ children: ye(r, e[1], t) });
function Se() {
  return {};
}
function Te() {
  return null;
}
function $n(...e) {
  return e.filter(Boolean).join(" ");
}
function $e(e, r, t) {
  let n = e;
  const c = r.split(".");
  for (; c.length && (n = n[c[0]], n !== void 0); ) c.shift();
  return n || t;
}
function Rn(e = "", r = {}) {
  r.overrides = r.overrides || {}, r.slugify = r.slugify || Mn, r.namedCodesToUnicode = r.namedCodesToUnicode ? Q({}, Ge, r.namedCodesToUnicode) : Ge;
  const t = r.createElement || ge.createElement;
  function n(s, m, ...d) {
    const w = $e(r.overrides, `${s}.props`, {});
    return t(function(x, b) {
      const E = $e(b, x);
      return E ? typeof E == "function" || typeof E == "object" && "render" in E ? E : $e(b, `${x}.component`, x) : x;
    }(s, r.overrides), Q({}, m, w, { className: $n(m == null ? void 0 : m.className, w.className) || void 0 }), ...d);
  }
  function c(s) {
    s = s.replace(Wr, "");
    let m = !1;
    r.forceInline ? m = !0 : r.forceBlock || (m = nn.test(s) === !1);
    const d = p(h(m ? s : `${s.trimEnd().replace(hn, "")}

`, { inline: m }));
    for (; typeof d[d.length - 1] == "string" && !d[d.length - 1].trim(); ) d.pop();
    if (r.wrapper === null) return d;
    const w = r.wrapper || (m ? "span" : "div");
    let x;
    if (d.length > 1 || r.forceWrapper) x = d;
    else {
      if (d.length === 1) return x = d[0], typeof x == "string" ? n("span", { key: "outer" }, x) : x;
      x = null;
    }
    return ge.createElement(w, { key: "outer" }, x);
  }
  function l(s) {
    const m = s.match(Rr);
    return m ? m.reduce(function(d, w, x) {
      const b = w.indexOf("=");
      if (b !== -1) {
        const E = function(v) {
          return v.indexOf("-") !== -1 && v.match(Yr) === null && (v = v.replace(Jr, function(C, j) {
            return j.toUpperCase();
          })), v;
        }(w.slice(0, b)).trim(), k = function(v) {
          const C = v[0];
          return (C === '"' || C === "'") && v.length >= 2 && v[v.length - 1] === C ? v.slice(1, -1) : v;
        }(w.slice(b + 1).trim()), T = qe[E] || E, S = d[T] = function(v, C) {
          return v === "style" ? C.split(/;\s?/).reduce(function(j, L) {
            const z = L.slice(0, L.indexOf(":"));
            return j[z.trim().replace(/(-[a-z])/g, (N) => N[1].toUpperCase())] = L.slice(z.length + 1).trim(), j;
          }, {}) : v === "href" || v === "src" ? oe(C) : (C.match(Vr) && (C = C.slice(1, C.length - 1)), C === "true" || C !== "false" && C);
        }(E, k);
        typeof S == "string" && (Ae.test(S) || Le.test(S)) && (d[T] = ge.cloneElement(c(S.trim()), { key: x }));
      } else w !== "style" && (d[qe[w] || w] = !0);
      return d;
    }, {}) : null;
  }
  const a = [], u = {}, i = { 0: { match: K(xt), order: 1, parse: (s, m, d) => ({ children: m(s[0].replace(Lr, ""), d) }), render: (s, m, d) => n("blockquote", { key: d.key }, m(s.children, d)) }, 1: { match: ue(Dr), order: 1, parse: Se, render: (s, m, d) => n("br", { key: d.key }) }, 2: { match: K(Br), order: 1, parse: Se, render: (s, m, d) => n("hr", { key: d.key }) }, 3: { match: K(wt), order: 0, parse: (s) => ({ lang: void 0, text: s[0].replace(/^ {4}/gm, "").replace(/\n+$/, "") }), render: (s, m, d) => n("pre", { key: d.key }, n("code", Q({}, s.attrs, { className: s.lang ? `lang-${s.lang}` : "" }), s.text)) }, 4: { match: K(vt), order: 0, parse: (s) => ({ attrs: l(s[3] || ""), lang: s[2] || void 0, text: s[4], type: "3" }) }, 5: { match: q(Ir), order: 3, parse: (s) => ({ text: s[2] }), render: (s, m, d) => n("code", { key: d.key }, s.text) }, 6: { match: K(Pr), order: 0, parse: (s) => (a.push({ footnote: s[2], identifier: s[1] }), {}), render: Te }, 7: { match: Z(Ur), order: 1, parse: (s) => ({ target: `#${r.slugify(s[1])}`, text: s[1] }), render: (s, m, d) => n("a", { key: d.key, href: oe(s.target) }, n("sup", { key: d.key }, s.text)) }, 8: { match: Z(Kr), order: 1, parse: (s) => ({ completed: s[1].toLowerCase() === "x" }), render: (s, m, d) => n("input", { checked: s.completed, key: d.key, readOnly: !0, type: "checkbox" }) }, 9: { match: K(r.enforceAtxHeadings ? Nt : kt), order: 1, parse: (s, m, d) => ({ children: ye(m, s[2], d), id: r.slugify(s[2]), level: s[1].length }), render: (s, m, d) => n(`h${s.level}`, { id: s.id, key: d.key }, m(s.children, d)) }, 10: { match: K(Et), order: 0, parse: (s, m, d) => ({ children: ye(m, s[1], d), level: s[2] === "=" ? 1 : 2, type: "9" }) }, 11: { match: ue(Ae), order: 1, parse(s, m, d) {
    const [, w] = s[3].match(yn), x = new RegExp(`^${w}`, "gm"), b = s[3].replace(x, ""), E = (k = b, En.some((C) => C.test(k)) ? Tn : ye);
    var k;
    const T = s[1].toLowerCase(), S = $r.indexOf(T) !== -1, v = { attrs: l(s[2]), noInnerParse: S, tag: (S ? T : s[1]).trim() };
    return d.inAnchor = d.inAnchor || T === "a", S ? v.text = s[3] : v.children = E(m, b, d), d.inAnchor = !1, v;
  }, render: (s, m, d) => n(s.tag, Q({ key: d.key }, s.attrs), s.text || m(s.children, d)) }, 13: { match: ue(Le), order: 1, parse: (s) => ({ attrs: l(s[2] || ""), tag: s[1].trim() }), render: (s, m, d) => n(s.tag, Q({}, s.attrs, { key: d.key })) }, 12: { match: ue(Mt), order: 1, parse: () => ({}), render: Te }, 14: { match: q(Nn), order: 1, parse: (s) => ({ alt: s[1], target: rt(s[2]), title: s[3] }), render: (s, m, d) => n("img", { key: d.key, alt: s.alt || void 0, title: s.title || void 0, src: oe(s.target) }) }, 15: { match: Z(kn), order: 3, parse: (s, m, d) => ({ children: Sn(m, s[1], d), target: rt(s[2]), title: s[3] }), render: (s, m, d) => n("a", { key: d.key, href: oe(s.target), title: s.title }, m(s.children, d)) }, 16: { match: Z(Gr), order: 0, parse: (s) => ({ children: [{ text: s[1], type: "27" }], target: s[1], type: "15" }) }, 17: { match: (s, m) => m.inAnchor ? null : Z(Zr)(s, m), order: 0, parse: (s) => ({ children: [{ text: s[1], type: "27" }], target: s[1], title: void 0, type: "15" }) }, 18: { match: Z(qr), order: 0, parse(s) {
    let m = s[1], d = s[1];
    return jr.test(d) || (d = "mailto:" + d), { children: [{ text: m.replace("mailto:", ""), type: "27" }], target: d, type: "15" };
  } }, 20: Qe(n, 1), 33: Qe(n, 2), 19: { match: K(zr), order: 3, parse: Se, render: () => `
` }, 21: { match: Fn, order: 3, parse: Fe, render: (s, m, d) => n("p", { key: d.key }, m(s.children, d)) }, 22: { match: Z(Qr), order: 0, parse: (s) => (u[s[1]] = { target: s[2], title: s[4] }, {}), render: Te }, 23: { match: q(en), order: 0, parse: (s) => ({ alt: s[1] || void 0, ref: s[2] }), render: (s, m, d) => u[s.ref] ? n("img", { key: d.key, alt: s.alt, src: oe(u[s.ref].target), title: u[s.ref].title }) : null }, 24: { match: Z(tn), order: 0, parse: (s, m, d) => ({ children: m(s[1], d), fallbackChildren: m(s[0].replace(rn, "\\$1"), d), ref: s[2] }), render: (s, m, d) => u[s.ref] ? n("a", { key: d.key, href: oe(u[s.ref].target), title: u[s.ref].title }, m(s.children, d)) : n("span", { key: d.key }, m(s.fallbackChildren, d)) }, 25: { match: K(Ct), order: 1, parse: On, render(s, m, d) {
    const w = s;
    return n("table", { key: d.key }, n("thead", null, n("tr", null, w.header.map(function(x, b) {
      return n("th", { key: b, style: tt(w, b) }, m(x, d));
    }))), n("tbody", null, w.cells.map(function(x, b) {
      return n("tr", { key: b }, x.map(function(E, k) {
        return n("td", { key: k, style: tt(w, k) }, m(E, d));
      }));
    })));
  } }, 27: { match: ue(gn), order: 4, parse: (s) => ({ text: s[0].replace(Xr, (m, d) => r.namedCodesToUnicode[d] ? r.namedCodesToUnicode[d] : m) }), render: (s) => s.text }, 28: { match: q(un), order: 2, parse: (s, m, d) => ({ children: m(s[2], d) }), render: (s, m, d) => n("strong", { key: d.key }, m(s.children, d)) }, 29: { match: q(dn), order: 3, parse: (s, m, d) => ({ children: m(s[2], d) }), render: (s, m, d) => n("em", { key: d.key }, m(s.children, d)) }, 30: { match: q(pn), order: 1, parse: (s) => ({ text: s[1], type: "27" }) }, 31: { match: q(fn), order: 3, parse: Fe, render: (s, m, d) => n("mark", { key: d.key }, m(s.children, d)) }, 32: { match: q(mn), order: 3, parse: Fe, render: (s, m, d) => n("del", { key: d.key }, m(s.children, d)) } };
  r.disableParsingRawHTML === !0 && (delete i[11], delete i[13]);
  const h = function(s) {
    let m = Object.keys(s);
    function d(w, x) {
      let b = [], E = "";
      for (; w; ) {
        let k = 0;
        for (; k < m.length; ) {
          const T = m[k], S = s[T], v = S.match(w, x, E);
          if (v) {
            const C = v[0];
            w = w.substring(C.length);
            const j = S.parse(v, d, x);
            j.type == null && (j.type = T), b.push(j), E = C;
            break;
          }
          k++;
        }
      }
      return b;
    }
    return m.sort(function(w, x) {
      let b = s[w].order, E = s[x].order;
      return b !== E ? b - E : w < x ? -1 : 1;
    }), function(w, x) {
      return d(function(b) {
        return b.replace(Hr, `
`).replace(_r, "").replace(sn, "    ");
      }(w), x);
    };
  }(i), p = (f = /* @__PURE__ */ function(s, m) {
    return function(d, w, x) {
      const b = s[d.type].render;
      return m ? m(() => b(d, w, x), d, w, x) : b(d, w, x);
    };
  }(i, r.renderRule), function s(m, d = {}) {
    if (Array.isArray(m)) {
      const w = d.key, x = [];
      let b = !1;
      for (let E = 0; E < m.length; E++) {
        d.key = E;
        const k = s(m[E], d), T = typeof k == "string";
        T && b ? x[x.length - 1] += k : k !== null && x.push(k), b = T;
      }
      return d.key = w, x;
    }
    return f(m, s, d);
  });
  var f;
  const y = c(e);
  return a.length ? n("div", null, y, n("footer", { key: "footer" }, a.map(function(s) {
    return n("div", { id: r.slugify(s.identifier), key: s.identifier }, s.identifier, p(h(s.footnote, { inline: !0 })));
  }))) : y;
}
const jn = (e) => {
  let { children: r = "", options: t } = e, n = function(c, l) {
    if (c == null) return {};
    var a, u, i = {}, h = Object.keys(c);
    for (u = 0; u < h.length; u++) l.indexOf(a = h[u]) >= 0 || (i[a] = c[a]);
    return i;
  }(e, Tr);
  return ge.cloneElement(Rn(r, t), n);
};
function _e({ value: e = "" }) {
  const r = A();
  return /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
    jn,
    {
      options: {
        overrides: {
          hr() {
            return /* @__PURE__ */ o("div", { className: "my-2", children: /* @__PURE__ */ o(De, {}) });
          },
          h1(t) {
            return /* @__PURE__ */ o("h1", { className: "md:text-5xl max-md:text-4xl", children: t == null ? void 0 : t.children });
          },
          h2(t) {
            return /* @__PURE__ */ o("h1", { className: "md:text-4xl max-md:text-3xl", children: t == null ? void 0 : t.children });
          },
          h3(t) {
            return /* @__PURE__ */ o("h1", { className: "md:text-3xl max-md:text-2xl", children: t == null ? void 0 : t.children });
          },
          h4(t) {
            return /* @__PURE__ */ o("h1", { className: "md:text-2xl max-md:text-xl", children: t == null ? void 0 : t.children });
          },
          h5(t) {
            return /* @__PURE__ */ o("h1", { className: "md:text-xl max-md:text-lg", children: t == null ? void 0 : t.children });
          },
          h6(t) {
            return /* @__PURE__ */ o("h1", { className: "md:text-lg max-md:text-md", children: t == null ? void 0 : t.children });
          },
          code(t) {
            var l;
            let n = t.children;
            const c = (l = t.className) == null ? void 0 : l.includes("lang-");
            return c && (n = It.highlightAuto(String(t.children)).value), /* @__PURE__ */ o(
              "div",
              {
                className: O("m-1 px-2 py-1 border border-transparent border-solid rounded-md leading-[26px]", !c && "inline-block"),
                style: {
                  ...r("gray.opacity", {
                    borderColor: "borders"
                  })
                },
                dangerouslySetInnerHTML: {
                  __html: n
                }
              }
            );
          },
          input(t) {
            const n = F((t == null ? void 0 : t.checked) || !1);
            return (t == null ? void 0 : t.type) === "checkbox" ? /* @__PURE__ */ o(
              Sr,
              {
                id: lt(),
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
                    boxShadow: fe([
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
                className: O(`
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
function Yn({ data: e }) {
  const r = Kt("commandId"), t = _.getOneFeild("findCommand", "value"), n = g.useMemo(() => {
    if (r)
      return e[r];
  }, [r]), c = g.useMemo(() => (n == null ? void 0 : n.lines) || [], [n]), l = g.useMemo(() => c.filter(({ content: i }) => Be(i, t)), [t, c]);
  g.useEffect(() => {
    D.setOneFeild("cmds/list", "focused", c != null && c.length ? 0 : null);
  }, [c]);
  const a = Xt(l, "cmds/list", "submited");
  g.useEffect(() => {
    var i;
    a && (Yt("commands.close"), _.setOneFeild("findCommand", "value", ""), (i = n == null ? void 0 : n.onSubmit) == null || i.call(n, a), D.setOneFeild("cmds/list", "submited", null));
  }, [a, n]);
  const u = A();
  return /* @__PURE__ */ M(
    "div",
    {
      className: "relative py-1 h-[50vh]",
      onClick: (i) => {
        i.currentTarget.contains(i.target) && xe("findCommand");
      },
      children: [
        !l.length && /* @__PURE__ */ o(
          "div",
          {
            style: {
              ...u({
                color: "gray.opacity.2"
              })
            },
            className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2",
            children: /* @__PURE__ */ o(V, { content: "no result" })
          }
        ),
        /* @__PURE__ */ o(
          He,
          {
            data: l,
            itemSize: 30,
            focusId: "cmds/list",
            slotId: "cmds/list",
            countLastItems: -1,
            component: ({ data: i, status: h, handel: p, style: f }) => {
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
                    ...u(y.get && "gray.opacity", h.isFocused && "secondary", h.isFocused && { color: "secondary.content" })
                  },
                  onClick: (d) => {
                    var w;
                    !((w = s.current) != null && w.contains(d.target)) && p.submit();
                  },
                  className: O(`
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
                      i.checked && /* @__PURE__ */ o(ae, { icon: ie }),
                      /* @__PURE__ */ o("span", { children: i.content }),
                      i.sub && /* @__PURE__ */ o(
                        "div",
                        {
                          className: "inline-block mt-2 text-[10px]",
                          style: {
                            ...u({
                              color: "gray.opacity.2"
                            })
                          },
                          children: /* @__PURE__ */ o(_e, { value: i.sub })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ M("span", { className: "inline-flex tools", children: [
                      i.keyPanding && /* @__PURE__ */ o(bt, { shortcut: i.keyPanding }),
                      /* @__PURE__ */ o("span", { ref: s, children: (y.get || h.isFocused) && ((m = i.tools) == null ? void 0 : m.map(({ icon: d, onClick: w }, x) => /* @__PURE__ */ o(
                        te,
                        {
                          icon: d,
                          onClick: async () => {
                            const b = w == null ? void 0 : w();
                            if (xe("findCommand"), b instanceof Promise) {
                              X("commands.isLoading", !0);
                              try {
                                await b;
                              } catch {
                              }
                              X("commands.isLoading", !1);
                            }
                          }
                        },
                        x
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
function Vn({ state: e, id: r }) {
  const t = F(""), n = g.useMemo(() => Array.from(new Set(e.get)), [e.get]), c = A(), l = g.useCallback(() => {
    n.includes(t.get) || t.get === "" || (e.set([...n, t.get]), t.set(""), xe(r));
  }, [t.get, n, t.set, e.set]);
  return /* @__PURE__ */ M("div", { className: "array-field", children: [
    /* @__PURE__ */ o("div", { className: "items", children: n.map((a, u) => /* @__PURE__ */ M(
      "div",
      {
        className: O(`
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
              te,
              {
                className: "opacity-0 group-hover:opacity-100 transition-[opacity] duration-200",
                onClick: async () => {
                  await navigator.clipboard.writeText(a);
                },
                icon: Ie
              }
            ),
            /* @__PURE__ */ o(
              te,
              {
                className: "opacity-0 group-hover:opacity-100 transition-[opacity] duration-200",
                onClick: () => {
                  n.splice(u, 1), e.set(n);
                },
                icon: ze
              }
            )
          ] })
        ]
      },
      u
    )) }),
    /* @__PURE__ */ M("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ o("div", { className: "w-full", children: /* @__PURE__ */ o(
        ce,
        {
          value: t.get,
          placeholder: "write item...",
          id: r,
          onKeyDown: (a) => {
            new ve("enter").test(a) && l();
          },
          spellCheck: !1,
          onValueChange: t.set
        }
      ) }),
      t.get && /* @__PURE__ */ o(J, { onClick: l, className: "w-fit", children: /* @__PURE__ */ o(V, { content: "add" }) })
    ] })
  ] });
}
const An = (e, r = "datetime-local") => r == "time" ? Oe(e, "HH:mm") : r == "month" ? Oe(e, "yyyy-MM") : r == "date" ? Oe(e, "yyyy-MM-dd") : e.toISOString().replace(/\.[0-9]+Z/gi, "");
function Zn({ state: e, config: r = {}, id: t }) {
  const n = A(), c = F(!1), l = n("secondary.background", {
    borderColor: "borders"
  }), a = F(!0), u = n(
    c.get && a.get && {
      borderColor: "primary"
    },
    c.get && !a.get && {
      borderColor: "checkbox.true"
    }
  ), [i] = zt("no provided"), h = g.useCallback(() => {
    const p = /* @__PURE__ */ new Date();
    e.set(An(p, r.format));
  }, [r.format]);
  return /* @__PURE__ */ M(
    "div",
    {
      className: O(`
        border
        border-solid
        border-transparent
        rounded-[4px]
        flex
        px-1
      `),
      style: {
        ...l,
        ...u
      },
      children: [
        /* @__PURE__ */ o(
          ce,
          {
            id: t,
            style: {
              backgroundColor: "transparent"
            },
            type: r.format && ["date", "time", "month"].includes(r.format) ? r.format : "datetime-local",
            value: e.get ?? void 0,
            onKeyDown: (p) => {
              if (new ve("control+shift+d").test(p)) {
                p.preventDefault(), h();
                return;
              }
              new ve("control+backspace").test(p) && (p.preventDefault(), e.set(""));
            },
            onChange: (p) => {
              const f = p.currentTarget.value;
              if (!f) {
                a.set(!0);
                return;
              }
              a.set(!1), e.set(f);
            },
            className: O("p-1 border-none"),
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
          te,
          {
            icon: ir,
            onClick: () => {
              h();
            }
          }
        ) })
      ]
    }
  );
}
const qn = "enum/list";
function Gn({ config: e = {}, id: r, state: t }) {
  var h;
  const n = g.createRef(), c = A(), l = F(!1), a = g.useMemo(() => {
    var p;
    return (p = e.list) == null ? void 0 : p.find(({ value: f }) => f == t.get);
  }, [e, t.get]), u = g.useMemo(() => r + "-" + lt() + "-" + crypto.randomUUID(), [r]), i = ne.getTemp("id");
  return /* @__PURE__ */ o("div", { className: "relative w-full", children: /* @__PURE__ */ M(
    "div",
    {
      id: r,
      ref: n,
      tabIndex: 1,
      onClick: () => {
        ne.setTemp("id", u), ne.setTemp("list", e.list || []), ne.setTemp("choised", t.get);
        const p = Vt("object.data.enum.result", Boolean, (f) => {
          const y = f.object.data.enum;
          (!y.id || y.id == u) && (y.id == u && t.set(y.result), ne.setTemp("result", null), ne.setTemp("id", null), p());
        });
      },
      onFocus: () => {
        l.set(!0);
      },
      onBlur: () => {
        l.set(!1);
      },
      className: O(`
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
        e.expandIcon !== !1 && !!((h = e.list) != null && h.length) && /* @__PURE__ */ o(le, { icon: u == i ? ft : ur })
      ]
    }
  ) });
}
function Ln({
  className: e,
  multiLines: r = !1,
  onChange: t,
  onKeyDown: n,
  onSelect: c,
  onSelectionChange: l,
  onValueChange: a,
  onFocus: u,
  onBlur: i,
  propositions: h,
  selection: p,
  style: f,
  tabSize: y = 4,
  supportTab: s = !1,
  hidden: m,
  acceptKeys: d,
  pattern: w,
  ...x
}) {
  const b = g.createRef(), E = Zt(), k = g.useMemo(() => mt.join({ commandId: "input.completeWord" }, E, "commandId->command"), [E]), T = A(), S = g.createRef(), v = F(0), C = g.useMemo(() => {
    var N, $;
    return ($ = (N = x.value) == null ? void 0 : N.toString().match(/[^ ]*$/gi)) == null ? void 0 : $[0];
  }, [x.value]), j = g.useMemo(() => {
    const N = (h == null ? void 0 : h.filter(($) => C && $.length != (C == null ? void 0 : C.length) && $.startsWith(C))) || [];
    return dr(N).value;
  }, [h, C]), L = F(!1);
  g.useEffect(() => {
    S.current && (S.current.scrollTop = v.get);
  }, [v.get]), g.useEffect(() => () => {
    X("input.focusedHasProposition", !1), X("input.supportTab", !1), L.set(!1);
  }, []), g.useEffect(() => {
    !b.current || !p || b.current.setSelectionRange(p.start, p.end, p.direction);
  }, [b.current, p]);
  const z = g.useCallback((N) => {
    l == null || l({
      start: N.currentTarget.selectionStart,
      end: N.currentTarget.selectionEnd,
      direction: N.currentTarget.selectionDirection
    });
  }, []);
  return g.useEffect(() => {
    X("input.focusedHasProposition", !!(L.get && j));
  }, [L.get, j]), g.useEffect(() => {
    X("input.supportTab", L.get && s);
  }, [s, L.get]), Y(
    "input.tab",
    () => {
      if (!L.get) return;
      const N = b.current;
      if (!N) return;
      const { selectionStart: $, selectionEnd: R, value: B } = N, H = $, I = R, W = B.slice(0, $), U = B.slice(R), re = " ".repeat(y);
      N.value = W + re + U, N.setSelectionRange(H + y, I + y, "forward"), a == null || a(N.value), l == null || l({
        start: N.selectionStart,
        end: N.selectionEnd,
        direction: N.selectionDirection
      });
    },
    [b, L.get, l, a]
  ), Y(
    "input.completeWord",
    () => {
      L.get && b.current && (b.current.value = b.current.value.replace(/[^ ]+$/gi, "") + j + " ", a == null || a(b.current.value));
    },
    [b, L.get, j, a]
  ), Y(
    "input.selectLine",
    () => {
      if (!L.get || !b.current)
        return;
      const N = b.current, { selectionStart: $, selectionEnd: R, value: B } = N, H = B.slice(0, $), I = B.slice(R), W = H.lastIndexOf(`
`) + 1;
      let U = I.indexOf(`
`);
      U === -1 && (U = I.length), N.setSelectionRange(W, R + U, "forward"), l == null || l({
        start: N.selectionStart,
        end: N.selectionEnd,
        direction: N.selectionDirection
      });
    },
    [b, L.get, l]
  ), Y(
    "input.addLineBellow",
    () => {
      if (!L.get) return;
      const N = b.current;
      if (!N) return;
      const { selectionStart: $, selectionEnd: R, value: B } = N, H = B.slice(0, $), I = B.slice(R), W = H.lastIndexOf(`
`) + 1;
      let U = I.indexOf(`
`);
      U === -1 && (U = I.length);
      const re = B.slice(W, R + U);
      N.value = H + `
` + re + I, N.setSelectionRange($ + re.length + 1, R + re.length + 1, "forward"), a == null || a(N.value), l == null || l({
        start: N.selectionStart,
        end: N.selectionEnd,
        direction: N.selectionDirection
      });
    },
    [b, L.get, l, a]
  ), /* @__PURE__ */ M("div", { className: "relative flex w-full h-full", hidden: m, children: [
    /* @__PURE__ */ o(
      "textarea",
      {
        onScroll: (N) => {
          v.set(N.currentTarget.scrollTop);
        },
        ...x,
        onFocus: (N) => {
          L.set(!0), u == null || u(N);
        },
        onBlur: (N) => {
          L.set(!1), i == null || i(N);
        },
        style: {
          ...f,
          ...T({
            caretColor: "text.color"
          })
        },
        className: O(e, "font-[inherit] text-[inherit]"),
        spellCheck: !1,
        onSelect: (N) => {
          z(N), c == null || c(N);
        },
        ref: b,
        onKeyDown: (N) => {
          !r && N.key == "Enter" && N.preventDefault();
          const $ = ve.fromEvent(N);
          d && d.some((R) => new RegExp(R, "igm").test($)) && N.preventDefault(), n == null || n(N);
        },
        onChange: (N) => {
          t == null || t(N), a == null || a(N.currentTarget.value);
        }
      }
    ),
    /* @__PURE__ */ o("div", { ref: S, className: O(e, "absolute inset-0 pointer-events-none overflow-y-auto overflow-x-hidden"), children: /* @__PURE__ */ M("pre", { className: "font-[inherit] text-wrap", children: [
      /* @__PURE__ */ o("span", { className: "text-transparent", children: x.value }),
      typeof C == "string" && j && /* @__PURE__ */ M(P, { children: [
        /* @__PURE__ */ o(
          "span",
          {
            style: {
              ...T({
                color: "autoCompleteInput"
              })
            },
            children: j.replace(C, "")
          }
        ),
        !!k.length && /* @__PURE__ */ o(bt, { shortcut: k.map(({ value: N }) => N) })
      ] })
    ] }) })
  ] });
}
function Jn({
  inputName: e,
  selectWhenFocusIn: r,
  placeholder: t,
  controlsPosition: n = "bottom",
  className: c,
  value: l,
  rows: a,
  style: u,
  controls: i,
  onFocus: h,
  onBlur: p,
  acceptHistory: f,
  propositions: y,
  ...s
}) {
  const m = _.getOneFeild(e, "value"), d = _.getOneFeild(e, "selection"), w = _.useOneFeild(e, "history"), x = A(), b = F(!1);
  at(
    () => {
      !f && !m || w.set((k) => k ? [...k, m] : [m]);
    },
    [m, f],
    2e3
  ), ct(e), g.useEffect(() => {
    _.setOneFeild(e, "controls", i || {});
  }, [i, e]);
  const E = g.useMemo(() => Object.entries(i || {}).map(([k, T]) => {
    try {
      const v = (m == null ? void 0 : m.match(new RegExp(k, "ig"))) ? "succ" : "err";
      return T[v] ? {
        type: v,
        content: T[v]
      } : void 0;
    } catch (S) {
      fr.warn("expression not correct", S);
      return;
    }
  }).filter(Boolean).map((k) => k), [m, i]);
  return /* @__PURE__ */ M("div", { className: "relative flex items-center w-full h-full", children: [
    /* @__PURE__ */ o(
      Ln,
      {
        placeholder: `${t || ""}${b.get ? "..." : ""}`,
        propositions: y,
        className: O(
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
        onFocus: (k) => {
          r && k.currentTarget.select(), b.set(!0), h == null || h(k);
        },
        onBlur: (k) => {
          b.set(!1), p == null || p(k);
        },
        value: m,
        onValueChange: (k) => {
          _.setOneFeild(e, "value", k);
        },
        selection: d,
        onSelectionChange: (k) => {
          _.setOneFeild(e, "selection", k);
        },
        style: {
          ...x({
            borderColor: b.get ? "primary" : "borders",
            backgroundColor: "field.background"
          }),
          ...u
        },
        title: void 0,
        rows: a || 1,
        id: e,
        ...s
      }
    ),
    b.get && !!E.length && /* @__PURE__ */ o(
      "div",
      {
        className: O(
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
          ...x("primary.background", {
            borderColor: "borders"
          })
        },
        children: /* @__PURE__ */ o(
          be,
          {
            list: E.map(({ content: k, type: T }, S) => {
              const v = T == "err" ? mr : ie;
              return /* @__PURE__ */ M("div", { className: "flex items-center gap-x-2 p-2", children: [
                /* @__PURE__ */ o(
                  le,
                  {
                    style: {
                      ...x(
                        T == "err" && {
                          color: "warning.text"
                        },
                        T == "succ" && {
                          color: "success.text"
                        }
                      )
                    },
                    icon: v
                  }
                ),
                k && /* @__PURE__ */ o(_e, { value: k })
              ] }, S);
            }),
            joinComponent: /* @__PURE__ */ o(De, {})
          }
        )
      }
    )
  ] });
}
const Dn = ({ isSelected: e, item: r, toggle: t }) => {
  const n = F(!1), c = A();
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
            background: it("to right", "secondary", "primary"),
            color: "secondary.content"
          }
        )
      },
      onClick: () => {
        t();
      },
      children: [
        /* @__PURE__ */ o(
          ae,
          {
            icon: ie,
            iconClassName: O(
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
function Qn({ id: e, config: r = {}, state: t }) {
  var n;
  return /* @__PURE__ */ o("div", { id: e, className: "flex flex-wrap gap-1 p-1 overflow-x-auto", tabIndex: 1, children: (n = r.list) == null ? void 0 : n.map((c, l) => {
    var u;
    const a = !!((u = t.get) != null && u.includes(c.value));
    return /* @__PURE__ */ o(
      Dn,
      {
        item: c,
        isSelected: a,
        toggle: () => {
          var i;
          a ? t.set((i = t.get) == null ? void 0 : i.filter((h) => h != c.value)) : t.set([...t.get || [], c.value]);
        }
      },
      l
    );
  }) });
}
function es({ state: e, config: r = {}, id: t }) {
  ct(`${t}:input`);
  const n = _.useOneFeild(`${t}:input`, "value");
  Y(
    "string.change",
    () => {
      const u = Xe();
      u && [t, `${t}:change`].includes(u) && e.set(n.get || "");
    },
    [n.get, t]
  ), Y(
    "string.cancel",
    () => {
      const u = Xe();
      if (u && [t, `${t}:cancel`].includes(u)) {
        const i = e.get || "";
        n.set(i), e.set(i);
      }
    },
    [e.get, t, r]
  );
  const c = A(), l = g.useMemo(() => n.get || "", [n.get]), a = g.useDeferredValue(l);
  return qt(
    () => {
      r.autoChange && e.set(a);
    },
    [r.autoChange, a],
    200
  ), /* @__PURE__ */ M("div", { className: "flex justify-between items-center gap-3", children: [
    /* @__PURE__ */ o(
      ce,
      {
        maxLength: r.maxLength,
        minLength: r.minLength,
        type: r.locked ? "password" : "text",
        id: t,
        className: "text-xs",
        value: l,
        placeholder: r.hint,
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
            ee("string.cancel");
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
            ee("string.change");
          },
          children: "change"
        }
      )
    ] })
  ] });
}
function ts({ state: e, id: r }) {
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
  }, [t.get]), l = A();
  return /* @__PURE__ */ M("div", { children: [
    /* @__PURE__ */ M("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ o(
        ce,
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
        className: O(`
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
function rs({ id: e, state: r }) {
  const t = F(null), n = F([]), c = g.useRef(null), l = A(), a = F(!1), u = F(!1), i = g.useCallback(async () => {
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
            const d = URL.createObjectURL(m);
            r.set(d);
          } catch {
          }
        }, s.start(), t.set(s);
      } else
        n.set([]), t.set(null), await Ke({
          type: "error",
          title: "No audio stream detected",
          desc: "Please allow the audio stream to record the audio",
          id: "recorder.error",
          showDesc: !0
        });
    } catch (y) {
      n.set([]), t.set(null), await Ke({
        type: "error",
        title: "Error detected",
        desc: String(y.message),
        id: "recorder.error",
        showDesc: !0
      });
    }
  }, []), h = g.useCallback(() => {
    var f;
    (f = t.get) == null || f.stop();
  }, [t.get]);
  g.useEffect(() => () => {
    h();
  }, [h]), g.useEffect(() => {
    c.current && (c.current.onplay = () => {
      u.set(!0);
    }, c.current.onpause = () => {
      u.set(!1);
    }, c.current.onended = () => {
      u.set(!1);
    });
  }, [c.current]);
  const p = F(null);
  return g.useEffect(() => {
    if (u.get) {
      const f = setInterval(() => {
        p.set((y) => (y ?? 0) + 1);
      }, 1e3);
      return () => {
        clearInterval(f);
      };
    } else
      p.set(null);
  }, [u.get]), /* @__PURE__ */ o("div", { className: "flex gap-2", children: /* @__PURE__ */ M("div", { className: "inline-flex relative gap-1", children: [
    r.get && /* @__PURE__ */ M(P, { children: [
      /* @__PURE__ */ o(
        he,
        {
          icon: ze,
          onClick: async () => {
            const { response: f } = await de({
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
        he,
        {
          onClick: () => {
            var f, y;
            u.get ? (y = c.current) == null || y.pause() : (f = c.current) == null || f.play();
          },
          icon: u.get ? pr : gr
        }
      )
    ] }),
    /* @__PURE__ */ o(
      he,
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
            const { response: f } = await de({
              title: "Overwrite audio",
              message: "Are you sure you want to overwrite the audio?",
              type: "warning",
              buttons: ["No", "Yes"]
            });
            if (!f)
              return;
          }
          a.set((f) => !f), a.get ? h() : i();
        },
        icon: a.get ? hr : yr
      }
    ),
    r.get && /* @__PURE__ */ o("audio", { ref: c, src: r.get })
  ] }) });
}
function Re({ eays: e = !0, state: r, onFocus: t, onBlur: n, className: c, style: l, value: a, type: u, ...i }) {
  const h = A(), p = F(!1), f = F(!1), y = g.createRef();
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
        type: p.get ? "text" : "password",
        className: O("p-2 text-xs border border-solid border-transparent font-[inherit] whitespace-nowrap rounded-sm w-full", c),
        style: {
          ...h("field.background", {
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
      te,
      {
        className: "top-1/2 right-2 absolute transform -translate-y-1/2",
        tabIndex: -1,
        onClick: () => {
          p.set((s) => !s), y.current && (y.current.focus(), y.current.setSelectionRange(0, 1e3, "forward"));
        },
        icon: p.get ? br : xr
      }
    )
  ] });
}
function ns({ state: e, config: r = {}, id: t }) {
  const n = F(void 0), c = F(void 0), l = F(void 0), a = g.useMemo(() => e.get ? n.get == e.get : !0, [n.get, e.get]), u = g.useMemo(() => c.get == l.get, [c.get, l.get]), i = g.useMemo(() => c.get == e.get, [c.get, e.get]);
  return Y(
    "password.change",
    (h) => {
      t == h && (a && u && e.set(c.get), l.set(""), c.set(""), n.set(""));
    },
    [n.get, c.get, l.get, a, u, t]
  ), /* @__PURE__ */ M("div", { className: "flex flex-col gap-1", children: [
    !!e.get && /* @__PURE__ */ o(Re, { id: t, placeholder: "current password", state: n }),
    /* @__PURE__ */ o(Re, { id: e.get ? void 0 : t, placeholder: "new password", state: c }),
    /* @__PURE__ */ o(Re, { placeholder: "confirm password", state: l }),
    !c.get && !r.canEmpty && /* @__PURE__ */ o("span", { className: "p-1", children: /* @__PURE__ */ o(V, { content: "password cannot be empty" }) }),
    /* @__PURE__ */ o("div", { className: "flex justify-end items-center gap-1", children: a && u && !i && /* @__PURE__ */ o(
      J,
      {
        onClick: () => {
          ee("password.change", t);
        },
        icon: vr,
        className: "px-2 py-1",
        children: /* @__PURE__ */ o(V, { content: "change" })
      }
    ) })
  ] });
}
const ss = (e) => `object_${e}`;
function os({ state: e, id: r }) {
  return /* @__PURE__ */ o("div", { id: r, children: /* @__PURE__ */ o(V, { content: "The Object Is Defined Before" }) });
}
function ls({ state: e, config: r = {}, id: t }) {
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
  }, [n.get, t]), Y(
    "number.changeState",
    (i) => {
      if (i == t)
        if (n.get.length) {
          const h = +n.get;
          e.set(h);
        } else
          e.set(null);
    },
    [n.get, t, c.current]
  ), Y(
    "number.cancelChangeState",
    (i) => {
      if (i == t) {
        const h = typeof e.get == "number" ? e.get.toString() : "";
        n.set(h), c.current && (c.current.value = h), xe(t);
      }
    },
    [e.get, c, t]
  ), g.useEffect(() => {
    r.autoChange && ee("number.changeState", t);
  }, [n.get, r.autoChange]);
  const l = F(!1);
  g.useEffect(() => (l.set(!1), () => {
    l.set(!1);
  }), []);
  const a = g.useMemo(() => !r.autoChange && e.get != +n.get, [r.autoChange, e.get, n.get]), u = A();
  return /* @__PURE__ */ M(
    "div",
    {
      className: O(`
        relative
        rounded-md
        flex
        items-center
        gap-1
        w-full
      `),
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center w-full", children: /* @__PURE__ */ o(
          ce,
          {
            ref: c,
            onFocus: (i) => {
              l.set(!0), r.selectOnFocus && i.currentTarget.select();
            },
            onBlur: () => {
              l.set(!1);
            },
            className: O(r.size == "small" ? "p-1" : "p-2", r.center && "text-center"),
            type: "text",
            inputMode: "numeric",
            id: t,
            min: r.min,
            max: r.max,
            placeholder: r.placeholder,
            onKeyDown: (i) => {
              a && i.key == "Enter" && (i.preventDefault(), i.stopPropagation(), i && ee("number.changeState", t));
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
                ee("number.cancelChangeState", t);
              },
              style: {
                ...u("gray.opacity", {
                  color: "text.color"
                })
              },
              children: /* @__PURE__ */ o(V, { content: "cancel" })
            }
          ),
          /* @__PURE__ */ o(
            J,
            {
              className: "py-1",
              onClick: () => {
                ee("number.changeState", t);
              },
              children: /* @__PURE__ */ o(V, { content: "change" })
            }
          )
        ] })
      ]
    }
  );
}
function je({ children: e, icon: r, className: t, iconClassName: n, isActive: c, style: l, ...a }) {
  const u = F(!1);
  g.useEffect(() => () => {
    u.set(!1);
  }, []);
  const i = A(), h = G("preferences/animation.boolean");
  return /* @__PURE__ */ M(
    "span",
    {
      onMouseEnter: () => {
        u.set(!0);
      },
      onMouseLeave: () => {
        u.set(!1);
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
            boxShadow: fe([
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
      className: O("flex items-center justify-center p-2 rounded-[15%] cursor-pointer border border-solid active:scale-95", h && "transition-[background,color,transform]", t),
      ...a,
      children: [
        /* @__PURE__ */ o(ae, { iconClassName: n, icon: r }),
        e
      ]
    }
  );
}
function as({ state: e, config: r }) {
  const t = A(), n = G("preferences/animation.boolean"), c = F(!1), l = e.get, a = g.useCallback(
    async (i) => {
      e.set && (e.set(i), c.set(!1));
    },
    [e.set]
  ), u = g.createRef();
  return /* @__PURE__ */ M("div", { className: "flex justify-center", children: [
    /* @__PURE__ */ o("div", { className: "relative", children: /* @__PURE__ */ M(
      "div",
      {
        onClick: () => {
          c.set(!0);
        },
        className: O("cursor-pointer overflow-hidden border border-transparent border-solid rounded-2xl text-center text-xl italic", (r == null ? void 0 : r.rounded) && "rounded-full"),
        style: {
          ...t("gray.opacity", {
            borderColor: "borders"
          }),
          ...ke(
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
          l && /* @__PURE__ */ o(P, { children: /* @__PURE__ */ o("img", { src: l, className: "w-full h-full object-cover" }) }),
          !l && /* @__PURE__ */ M("div", { className: "flex flex-col justify-center items-center gap-1 w-full h-full", children: [
            /* @__PURE__ */ o(ae, { icon: we.solid.faCamera }),
            (r == null ? void 0 : r.alt) && /* @__PURE__ */ o("span", { className: "w-1/2 text-xs truncate", children: r.alt })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ o(
      "div",
      {
        ref: u,
        className: O("top-1/2 left-1/2 z-[100000000000000000] fixed transform -translate-x-1/2 -translate-y-1/2 scale-0", n && "transition-transform", c.get && "scale-100"),
        children: /* @__PURE__ */ M(Cr, { className: "w-fit", children: [
          /* @__PURE__ */ M("div", { className: "flex justify-between items-center p-3", children: [
            /* @__PURE__ */ o("h1", { className: "text-xl", children: /* @__PURE__ */ o(V, { content: "Upload Image" }) }),
            /* @__PURE__ */ o("span", { children: /* @__PURE__ */ o(
              he,
              {
                icon: we.solid.faXmark,
                onClick: () => {
                  c.set(!1);
                }
              }
            ) })
          ] }),
          /* @__PURE__ */ o(De, {}),
          /* @__PURE__ */ M("div", { className: "flex gap-3 p-3", children: [
            l && /* @__PURE__ */ o(
              je,
              {
                className: "w-[80px] h-[80px]",
                iconClassName: "w-[40px] h-[40px]",
                onClick: async () => {
                  const { response: i } = await de({
                    message: "do you want to recenlty this image",
                    title: "confirmation",
                    type: "warning",
                    buttons: ["no", "yes"],
                    defaultId: 1
                  });
                  i && a(null);
                },
                icon: ze
              }
            ),
            /* @__PURE__ */ o(
              je,
              {
                className: "w-[80px] h-[80px]",
                iconClassName: "w-[40px] h-[40px]",
                onClick: async () => {
                  if (l) {
                    const { response: h } = await de({
                      message: "do you want to recenlty this image",
                      title: "confirmation",
                      type: "warning",
                      buttons: ["no", "yes"],
                      defaultId: 1
                    });
                    if (!h)
                      return;
                  }
                  const i = document.createElement("input");
                  i.type = "file", i.accept = "image/*", i.onchange = async () => {
                    var h;
                    if ((h = i.files) != null && h.length) {
                      const p = i.files[0], f = new FileReader();
                      f.onload = () => {
                        var y;
                        a(((y = f.result) == null ? void 0 : y.toString()) || null);
                      }, f.readAsDataURL(p);
                    }
                  }, i.click();
                },
                icon: wr
              }
            ),
            /* @__PURE__ */ o(
              je,
              {
                className: "w-[80px] h-[80px]",
                iconClassName: "w-[40px] h-[40px]",
                onClick: async () => {
                  if (l) {
                    const { response: i } = await de({
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
                    const i = await Gt("take");
                    a(i);
                  } catch (i) {
                    Jt(i, "error");
                  }
                },
                icon: kr
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
function cs() {
  const e = _.getOneFeild("findConfigurations", "value"), r = g.useMemo(() => {
    const n = Object.entries(Nr).map(([a, u]) => ({
      iconName: a,
      icon: u,
      type: "solid"
    })), c = Object.entries(Er).map(([a, u]) => ({ iconName: a, icon: u, type: "regular" })), l = Object.entries(Mr).map(([a, u]) => ({
      iconName: a,
      icon: u,
      type: "brad"
    }));
    return mt.orderBy([...n, ...c, ...l], "iconName", "asc");
  }, []), t = g.useMemo(() => typeof e == "string" ? r.filter(({ iconName: n }) => Be(n, e)) : r, [r, e]);
  return g.useEffect(() => {
    X("configurations.found.length", t.length);
  }, [t]), /* @__PURE__ */ o(
    He,
    {
      countLastItems: -1,
      focusId: "icons-list",
      slotId: "icons-list",
      data: t,
      itemSize: 50,
      component: ({ data: n, style: c, status: l, index: a, handel: u }) => {
        const i = F(!1), h = A(), p = g.useMemo(() => [i.get, l.isFocused, l.isSubmited].some(Boolean), [i.get, l]), f = F(!1);
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
            className: O(`
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
              u.focus(), u.submit();
            },
            children: [
              /* @__PURE__ */ M("div", { className: "flex items-center gap-x-2", children: [
                /* @__PURE__ */ o("div", { className: "flex justify-end w-[100px]", children: p && /* @__PURE__ */ o(P, { children: /* @__PURE__ */ o(
                  te,
                  {
                    onMouseLeave: () => {
                      f.set(!1);
                    },
                    icon: f.get ? ie : Ie,
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
                        ...h("gray.opacity")
                      },
                      children: n.type
                    }
                  ),
                  /* @__PURE__ */ o("span", { children: " / " }),
                  dt(n.iconName.slice(2), "camel", "normal")
                ] })
              ] }),
              /* @__PURE__ */ o(le, { className: "text-3xl", icon: n.icon })
            ]
          }
        );
      }
    }
  );
}
function is({ className: e, alt: r, src: t, children: n, style: c, ...l }) {
  const a = A(), u = F(!1);
  return g.useEffect(() => {
  }, []), /* @__PURE__ */ M(
    "div",
    {
      tabIndex: -1,
      ...l,
      className: O("overflow-hidden rounded-full w-[150px] h-[150px] border border-solid border-transparent transition-shadow duration-300 relative text-xs", e),
      style: {
        ...a(u.get && { borderColor: "primary" }),
        ...c
      },
      onFocus: () => {
        u.set(!0);
      },
      onBlur: () => {
        u.set(!1);
      },
      children: [
        t && /* @__PURE__ */ o("img", { src: t, className: O("absolute inset-0 w-full h-full object-cover"), draggable: !1 }),
        !t && /* @__PURE__ */ o("div", { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2", children: r }),
        /* @__PURE__ */ o("div", { className: "absolute inset-0 overflow-hidden", children: n })
      ]
    }
  );
}
function us({ slotId: e, component: r, data: t, skipFn: n }) {
  const c = D.getOneFeild(e, "focused"), l = D.getOneFeild(e, "submited"), a = D.getOneFeild(e, "selected"), u = D.getOneFeild(e, "direction");
  ot(e, t);
  const i = g.useMemo(() => r, []);
  g.useEffect(() => {
    if (typeof c != "number")
      return;
    const p = document.getElementById(Ye(e, c));
    p && !pt(p) && gt(p, u == "backward" ? 0 : -1);
  }, [c, u]);
  const h = g.useMemo(() => {
    if (!n)
      return {};
    const p = {};
    return t.forEach((f, y) => {
      if (n)
        p[y] = !!n(f, y);
      else
        return !1;
    }), p;
  }, [n, t]);
  return g.useEffect(() => {
    D.setOneFeild(e, "skiped", h);
  }, [h]), /* @__PURE__ */ o(P, { children: t.map((p, f) => {
    const y = {
      isFocused: f == c,
      isSelected: !!(a != null && a[f]),
      isSubmited: f == l,
      isSkiped: !!(n && n(p, f))
    };
    return /* @__PURE__ */ o(
      i,
      {
        id: Ye(e, f),
        handelFocus: (s) => (m) => {
          D.setOneFeild(e, "focused", f), s == null || s(m);
        },
        handelSubmit: (s) => (m) => {
          D.setOneFeild(e, "submited", f), s == null || s(m);
        },
        handelSelect: (s) => (m) => {
        },
        tabIndex: y.isFocused ? 1 : -1,
        item: p,
        index: f,
        status: y
      },
      f
    );
  }) });
}
function ds({ pages: e = [], focused: r = 0 }) {
  const t = g.useMemo(() => e[r], [e, r]);
  return /* @__PURE__ */ M(
    "div",
    {
      className: O(`
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
function fs({ onClick: e, className: r, children: t, iconClassName: n, ...c }) {
  const l = A();
  return /* @__PURE__ */ o(
    "span",
    {
      onClick: (a) => {
        a.preventDefault(), e == null || e(a);
      },
      className: O(
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
function ms({ hidden: e, animted: r, className: t, style: n, children: c, onLoadContent: l, onTransitionEnd: a, ...u }) {
  const i = A(), h = typeof r == "boolean" ? r : G("preferences/animation.boolean"), p = F(e);
  return g.useEffect(() => {
    e || p.set(!1);
  }, [e]), ut(async () => {
    p.get && l && (await ht(100), l());
  }, [p.get, l]), /* @__PURE__ */ o(
    "div",
    {
      className: O(
        "fixed inset-0 bg-opacity-40 flex justify-center items-center z-[100000000000000000]",
        h && "transition-[transform] duration-700",
        !e && "translate-y-0",
        e && "translate-y-full pointer-events-none",
        t
      ),
      style: {
        ...i({
          background: it("to bottom", "shadow.background.from", "shadow.background.to")
        }),
        ...n
      },
      onTransitionEnd: (f) => {
        p.set(e), a == null || a(f);
      },
      ...u,
      children: !p.get && c
    }
  );
}
function ps({ className: e, animted: r, style: t, hidden: n, onLoadContent: c, children: l, onTransitionEnd: a, ...u }) {
  A();
  const i = F(n);
  g.useEffect(() => {
    n || i.set(!1);
  }, [n]);
  const h = g.useRef(null), p = typeof r == "boolean" ? r : G("preferences/animation.boolean");
  return ut(async () => {
    i.get && c && (await ht(100), c());
  }, [i.get, c]), /* @__PURE__ */ o(
    "div",
    {
      ref: h,
      className: O(
        "fixed inset-0 bg-opacity-40 flex justify-center scale-100 items-center z-[100000000000000000]",
        p && "transition-[opacity,transform] duration-300",
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
      ...u,
      children: !i.get && l
    }
  );
}
function gs({ temp: e, animited: r, style: t, children: n, max: c = 0, min: l = 600, position: a = "left", hidden: u = !1, handelResize: i, className: h, ...p }) {
  const f = F(null);
  g.useEffect(() => {
    const k = Qt(`resizeData.${e}`);
    f.set(k);
  }, []), at(
    () => {
      X(`resizeData.${e}`, f.get);
    },
    [f.get],
    1e3
  );
  const y = g.createRef(), s = ["left", "right"].includes(a) ? "width" : "height";
  let m = 0;
  const d = F(null), w = typeof r == "boolean" ? r : G("preferences/animation.boolean"), x = F(null);
  g.useEffect(() => {
    const k = () => {
      if (!f.get) return;
      const S = typeof l == "number" ? l : l(f.get), v = typeof c == "number" ? c : c(f.get);
      S >= f.get ? (d.set("min"), f.set(S)) : f.get >= v ? (d.set("max"), f.set(v)) : (d.set(null), f.set(f.get)), m = f.get;
    }, T = () => {
      x.set(null);
    };
    return addEventListener("resize", k), addEventListener("pointerup", T), () => {
      removeEventListener("resize", k), removeEventListener("pointerup", T);
    };
  }, [f.get, l, c]);
  const b = A();
  g.useEffect(() => {
    const k = typeof l == "function" ? l(f.get || 0) : l;
    if (!f.get) {
      f.set(k);
      return;
    }
  }, [f.get, l, c]);
  const E = g.useMemo(() => x.get ? "start" : "end", [x.get]);
  return /* @__PURE__ */ M("div", { className: "relative h-full", children: [
    /* @__PURE__ */ o(
      "div",
      {
        style: {
          [s]: u ? "0px" : `${f.get}px`,
          ...t
        },
        ...p,
        className: O("overflow-hidden", h, w && E == "end" && "transition-[width]"),
        ref: y,
        children: n
      }
    ),
    /* @__PURE__ */ o(
      "div",
      {
        className: O("resize-bar absolute transition-all opacity-0 cursor-e-resize z-[1000000] hover:opacity-100", a),
        onPointerDown: (k) => {
          const { currentTarget: T } = k;
          x.set(T.getBoundingClientRect());
        },
        style: {
          ...b({
            backgroundColor: "primary"
          })
        },
        children: /* @__PURE__ */ o(
          "div",
          {
            hidden: !x.get,
            onMouseMove: (k) => {
              var z;
              k.preventDefault();
              const { pageX: T, pageY: S } = k;
              if (!f)
                return;
              const v = (z = y == null ? void 0 : y.current) == null ? void 0 : z.getBoundingClientRect();
              let C = 0;
              switch (a) {
                case "right": {
                  C = T - Number(v == null ? void 0 : v.left);
                  break;
                }
                case "left": {
                  C = -T + Number(v == null ? void 0 : v.right);
                  break;
                }
                case "top": {
                  C = Number(v == null ? void 0 : v.bottom) - S;
                  break;
                }
                case "bottom": {
                  C = S - Number(v == null ? void 0 : v.top);
                  break;
                }
              }
              const j = typeof l == "number" ? l : l(C), L = typeof c == "number" ? c : c(C);
              j >= C ? (d.set("min"), f.set(j)) : C >= L ? (d.set("max"), f.set(L)) : (d.set(null), f.set(C)), m = C, i && i({ ...k, size: m, min: j, max: L });
            },
            className: "resize-overview"
          }
        )
      }
    )
  ] });
}
function hs({ data: e, slotId: r, focusId: t = r, component: n, children: c, handelSkipedItem: l, className: a, direction: u, ref: i, type: h = "horizontal", ...p }) {
  const f = typeof n == "function" ? n : ({ index: b, id: E, handelSubmit: k, handelFocus: T, handelSelect: S, status: v, item: C }) => {
    const j = F(!1), L = g.useMemo(() => j.get, [j.get]), z = b % 2 == 1, N = A();
    return /* @__PURE__ */ M(
      "div",
      {
        id: E,
        "data-is-odd": z,
        onMouseEnter: () => j.set(!0),
        onMouseLeave: () => j.set(!1),
        className: "border border-transparent border-solid cursor-pointer row",
        onClick: k(),
        onPointerDown: T(S()),
        style: {
          ...N(
            z && "secondary.background",
            j.get && "gray.opacity",
            (v.isFocused || v.isSubmited) && {
              borderColor: "primary"
            },
            (v.isSelected || v.isSubmited) && {
              backgroundColor: "secondary",
              color: "secondary.content"
            }
          )
        },
        children: [
          /* @__PURE__ */ o("div", { className: "col", children: /* @__PURE__ */ o("div", { className: O("w-[100px] flex items-center justify-end", !L && "invisible") }) }),
          n == null ? void 0 : n.map(($) => /* @__PURE__ */ o("div", { className: "col", children: `${C[$]}` }))
        ]
      }
    );
  }, y = D.useOneFeild(r, "focused"), s = D.useOneFeild(r, "submited"), m = D.useOneFeild(r, "length"), d = D.useOneFeild(r, "selected"), w = D.useOneFeild(r, "direction"), x = g.useMemo(() => f, []);
  return g.useEffect(() => {
    m.set(e.length);
  }, [e]), g.useEffect(() => {
    if (typeof y.get != "number")
      return;
    const b = document.getElementById(`${r}/${y.get}`);
    b && !pt(b) && gt(b, w.get == "backward" ? 0 : -1);
  }, [y.get, w.get]), /* @__PURE__ */ o(nt, { className: O("flex flex-col overflow-hidden h-full w-full", a), focusId: t, ...p, children: /* @__PURE__ */ M(st, { className: O(h == "vertical" && "flex"), children: [
    /* @__PURE__ */ o(P, { children: e.map((b, E) => {
      var T;
      const k = {
        isFocused: E == y.get,
        isSelected: !!((T = d.get) != null && T[E]),
        isSubmited: E == s.get,
        isSkiped: !!(l && l(b))
      };
      return /* @__PURE__ */ o(
        x,
        {
          id: `${r}/${E}`,
          handelFocus: (S) => (v) => {
            y.set(E), S == null || S(v);
          },
          handelSubmit: (S) => (v) => {
            s.set(E), S == null || S(v);
          },
          handelSelect: (S) => (v) => {
            v.ctrlKey ? d.set((C) => ({
              ...C,
              [E]: !(C != null && C[E])
            })) : d.set({
              [E]: !0
            }), S == null || S(v);
          },
          tabIndex: k.isFocused ? 1 : -1,
          item: b,
          index: E,
          status: k
        },
        E
      );
    }) }),
    c
  ] }) });
}
const ys = ({ state: e, tabs: r = [], hideLabelWhereSmalled: t = !0, buttonClassName: n, className: c, style: l, ...a }) => {
  const u = A();
  return /* @__PURE__ */ o(
    "div",
    {
      className: O("flex items-stretch gap-2 p-2 border border-transparent border-solid rounded-full overflow-hidden", c),
      style: {
        ...u("secondary.background", {
          borderColor: "borders",
          boxShadow: fe([
            {
              blur: 5,
              size: 0,
              colorId: "shadow.color",
              x: 0,
              y: 4
            }
          ])
        }),
        ...ke(l)
      },
      ...a,
      children: /* @__PURE__ */ o(
        be,
        {
          list: r.map(({ label: i, icon: h, value: p }) => {
            const f = e.get == p;
            return /* @__PURE__ */ o(
              J,
              {
                className: O("rounded-full w-fit px-7 py-4", f && "font-bold", n),
                style: {
                  ...u(
                    !f && "transparent",
                    !f && {
                      color: "text.color"
                    }
                  )
                },
                icon: h,
                onClick: () => {
                  e.set(p);
                },
                children: /* @__PURE__ */ o("span", { className: O(t && "max-sm:hidden"), children: i })
              },
              p
            );
          }),
          joinComponent: /* @__PURE__ */ o(P, {})
        }
      )
    }
  );
};
function bs() {
  const e = er(), r = tr(), t = rr(), n = nr(), c = A();
  return /* @__PURE__ */ M(
    "div",
    {
      onTransitionEnd: () => {
        e || pe(null);
      },
      className: O(
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
        ...ke(
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
      children: [
        /* @__PURE__ */ o(
          "span",
          {
            style: {
              ...c({})
            },
            className: O("inline-block absolute border-8 border-transparent border-solid w-[0px] h-[0px] transform")
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            className: O(`
            border
            border-solid
            border-transparent
            rounded-lg
            py-1
            px-2
          `),
            style: {
              ...c("secondary.background", {
                borderColor: "borders",
                boxShadow: fe([{ colorId: "shadow.color", blur: 30, size: 1, x: 0, y: 10 }])
              })
            },
            children: /* @__PURE__ */ o(_e, { value: String(e) })
          }
        )
      ]
    }
  );
}
function Bn({ treeId: e, tree: r = [], component: t, level: n = 0, position: c = "", parent: l }) {
  const a = g.useMemo(() => t, []), u = se.getOne(e);
  return n == 0 && sr(e), g.useEffect(() => {
    if (!u)
      return;
    const i = Array.from(new Set(u.ends)), h = `${c}${u.separator}${r.length}`;
    i.includes(h) || se.setOneFeild(e, "ends", [...i, h]);
  }, [r, u]), /* @__PURE__ */ o(P, { children: r.map(({ data: i, innerTree: h }, p) => {
    var m, d;
    const f = `${c}${u == null ? void 0 : u.separator}${p}`, y = {
      data: i,
      parent: l
    }, s = {
      isFocused: f == (u == null ? void 0 : u.focused),
      isSelected: !!((m = u == null ? void 0 : u.selected) != null && m[f]),
      isSubmited: (u == null ? void 0 : u.submited) == f,
      isExpanded: !!((d = u == null ? void 0 : u.expanded) != null && d[f])
    };
    return /* @__PURE__ */ M("div", { children: [
      /* @__PURE__ */ o(
        a,
        {
          status: s,
          handels: {
            focus() {
              u && se.setOneFeild(e, "focused", f);
            },
            select(w, x) {
              u && se.setOneFeild(
                e,
                "selected",
                w ? {
                  [f]: x
                } : {
                  ...u.selected,
                  [f]: x
                }
              );
            },
            submit() {
              u && se.setOneFeild(e, "submited", f);
            },
            expand(w, x) {
              u && se.setOneFeild(e, "expanded", {
                ...w ? {} : u.expanded || {},
                [f]: x
              });
            }
          },
          level: n,
          isFins: !h,
          position: f,
          data: i,
          index: p,
          parent: y,
          innerTree: h
        }
      ),
      Array.isArray(h) && s.isExpanded && /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(Bn, { position: f, component: t, tree: h, treeId: e, level: n + 1, parent: y }) })
    ] }, p);
  }) });
}
function xs({ views: e, viewId: r }) {
  const t = or.getOneFeild(r, "focused"), n = t && e[t];
  return /* @__PURE__ */ o("div", { className: "flex flex-col w-full h-full overflow-hidden", children: n ? /* @__PURE__ */ o(n, {}) : /* @__PURE__ */ o(P, {}) });
}
export {
  Vn as A,
  Sr as B,
  he as C,
  Zn as D,
  Gn as E,
  Qn as F,
  as as I,
  bt as K,
  us as L,
  _e as M,
  ls as N,
  os as O,
  ns as P,
  ts as R,
  es as S,
  Or as T,
  xs as V,
  rs as a,
  Jn as b,
  Wn as c,
  Xn as d,
  Yn as e,
  He as f,
  An as g,
  Re as h,
  cs as i,
  is as j,
  Fr as k,
  ds as l,
  fs as m,
  ms as n,
  ss as o,
  ps as p,
  yt as q,
  Kn as r,
  qn as s,
  gs as t,
  hs as u,
  je as v,
  ys as w,
  Ln as x,
  bs as y,
  Bn as z
};
