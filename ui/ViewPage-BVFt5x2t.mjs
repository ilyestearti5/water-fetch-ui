import { j as o, E as W, a as M, I as ae, c as st, k as re, d as fe, F as le, J as xe, T as Y, L as De, H as It, u as zt, S as nt } from "./SeparatedComponents-BcE_KymC.mjs";
import { ad as Pt, u as A, a as F, ae as Me, af as he, ag as Ht, ah as Ut, J as Ce, x as D, ai as ot, aj as _t, b as G, h as me, f as _, ak as We, w as K, al as Wt, S as lt, n as Yt, P as Xt, q as Kt, j as Vt, e as V, a7 as at, A as ct, V as Zt, a6 as se, am as qt, d as it, B as Gt, g as te, an as Ye, L as ue, ao as Jt, U as Qt, a5 as ut, ap as er, aq as tr, ar as rr, as as sr, at as nr, au as ne, av as or, y as lr } from "./index-BxYKyuvy.mjs";
import * as ge from "react";
import h from "react";
import { t as O, a0 as ar, j as cr, m as ke, $ as Be, g as dt, P as ce, k as Ie, a1 as ir, a2 as ft, s as de, e as mt, a3 as ur, S as ve, F as dr, q as fr, c as ze, a4 as Fe, a5 as mr, a6 as pr, a7 as Xe, a8 as hr, a9 as gr, aa as yr, ab as br, ac as xr, ad as vr, ae as wr, L as kr, af as Nr, ag as Er, ah as Mr, ai as Cr, aj as Ke, ak as pt, al as ht, Z as gt } from "./index-DdFCMvT_.mjs";
import { B as J, C as Fr } from "./Card-C9tcykD9.mjs";
import { allIcons as we } from "./apis.js";
function Xs({ render: e, error: r = /* @__PURE__ */ o(W, {}), deps: t = [], loading: s = /* @__PURE__ */ o(W, {}) }) {
  const a = Pt(async () => {
    try {
      return await e();
    } catch {
      return r;
    }
  }, [e, r, s, ...t]);
  return /* @__PURE__ */ o(W, { children: a ?? s });
}
function ye({ children: e, className: r, icon: t, style: s = {}, iconClassName: a, onPointerDown: l, onPointerLeave: c, onPointerUp: u, onMouseEnter: i, onMouseLeave: g, ...p }) {
  const f = A(), y = F(!1), n = F(!1);
  return h.useEffect(() => () => {
    y.set(!1), n.set(!1);
  }, []), /* @__PURE__ */ M(
    "button",
    {
      onMouseEnter: (m) => {
        n.set(!0), i == null || i(m);
      },
      onMouseLeave: (m) => {
        n.set(!1), g == null || g(m);
      },
      onPointerDown: (m) => {
        y.set(!0), l == null || l(m);
      },
      onPointerUp: (m) => {
        y.set(!1), u == null || u(m);
      },
      onPointerLeave: (m) => {
        y.set(!1), c == null || c(m);
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
        ...f(n.get && "gray.opacity", y.get && "gray.opacity.2", {
          outlineColor: "primary"
        }),
        ...s
      },
      ...p,
      children: [
        /* @__PURE__ */ o(ae, { iconClassName: ar("text-xl", a), icon: t }),
        e
      ]
    }
  );
}
function Or({
  title: e,
  onClick: r,
  position: { x: t = "right", y: s = "bottom" } = { x: "right", y: "bottom" },
  onMouseMove: a,
  onMouseLeave: l,
  children: c,
  canMouseOn: u = !1,
  ...i
}) {
  const g = h.createRef();
  h.useEffect(() => () => {
    Me(null), he(null);
  }, []);
  const p = () => {
    u || (Me(null), he(null));
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: g,
      onClick: (f) => {
        p(), r == null || r(f);
      },
      onMouseMove: (f) => {
        e && (Me(e), he([f.clientX, f.clientY]), Ht(t), Ut(s)), a == null || a(f);
      },
      onMouseLeave: (f) => {
        p(), l == null || l(f);
      },
      ...i,
      children: c
    }
  );
}
const yt = ({ onContentChange: e, ...r }) => {
  const t = h.createRef(), s = F(null);
  h.useEffect(() => {
    const l = t.current;
    if (l) {
      const c = () => {
        const f = l.getBoundingClientRect();
        s.set(f);
      }, u = setTimeout(() => {
        c();
      }, 300), i = new ResizeObserver(c), g = new MutationObserver(c), p = new IntersectionObserver(c);
      return i.observe(l, { box: "border-box" }), i.observe(l, { box: "content-box" }), i.observe(l, { box: "device-pixel-content-box" }), g.observe(l, { attributes: !0, subtree: !0, characterData: !0, childList: !0 }), p.observe(l), addEventListener("resize", c), () => {
        i.disconnect(), g.disconnect(), p.disconnect(), removeEventListener("resize", c), clearTimeout(u);
      };
    }
  }, [t.current]), h.useEffect(() => {
    s.get && (e == null || e(s.get));
  }, [s.get]);
  const a = h.useMemo(() => {
    if (!s.get)
      return {};
    const { bottom: l, height: c, left: u, right: i, top: g, width: p, x: f, y } = s.get;
    return {
      bottom: l,
      height: c,
      left: u,
      right: i,
      top: g,
      width: p,
      x: f,
      y
    };
  }, [s.get]);
  return /* @__PURE__ */ o(
    "div",
    {
      ...r,
      "data-pos": Object.entries(a).map(([l, c]) => `${l}=${c}`).join(","),
      ref: t
    }
  );
}, Ks = ({ positionId: e, ...r }) => {
  const t = Ce.getOne(e);
  return h.useEffect(() => {
    t || Ce.upsert([
      {
        positionId: e
      }
    ]);
  }, [t]), /* @__PURE__ */ o(
    yt,
    {
      onContentChange: ({ bottom: s, height: a, left: l, right: c, top: u, width: i, x: g, y: p }) => {
        const f = { bottom: s, height: a, left: l, right: c, top: u, width: i, x: g, y: p };
        Ce.setOne(e, f);
      },
      ...r
    }
  );
};
function Pe({ focusId: e, itemSize: r, slotId: t, component: s, handelSkip: a, data: l, countLastItems: c = 3, overflow: { top: u = 0, bottom: i = 0 } = { top: 0, bottom: 0 }, ...g }) {
  const p = D.getOne(t), f = F(0), y = F(0);
  let n = D.getOneFeild(t, "focused");
  ot(t, l), h.useEffect(() => {
    D.setOneFeild(t, "length", l.length), l.length || _t(t);
  }, [l]), h.useEffect(() => {
    typeof n == "number" && l.length <= n && D.setOneFeild(t, "focused", l.length - 1);
  }, [n, l]);
  const m = F(!1);
  h.useEffect(() => {
    m.set(!1);
  }, [n]), h.useEffect(() => {
    if ([m.get, typeof n != "number", n >= l.length, y.get < r].some(Boolean))
      return;
    const R = f.get <= n * r, $ = (n + 1) * r <= f.get + y.get;
    if ($ && R)
      return;
    let I;
    n < 0 ? n = 0 : n > (I = Math.abs(l.length - c)) && (n = I), $ || (n = n + 1 - y.get / r);
    const z = r * n;
    f.set(z);
  }, [n, l, c, f.get, y.get, m.get]);
  const d = G("preferences/fastScrollKey.enum"), w = h.useMemo(() => r * l.length, [r, l]), x = h.useMemo(() => w + r * c, [w, r, c]), b = h.useMemo(() => y.get * 100 / x, [x, y.get]), E = h.useMemo(() => f.get * 100 / x, [x, f.get]), k = G("preferences/scrollAnimation.boolean.boolean"), T = F(!1), S = F(null), v = h.useMemo(() => s, []), C = A(), j = (R) => {
    var I;
    const $ = S.get;
    if ($) {
      let P = (R - $.top - (((I = L.current) == null ? void 0 : I.clientHeight) || 0) / 2) / $.height * x;
      const H = x - $.height;
      P < 0 ? P = 0 : P > H && (P = H), f.set(P);
    }
  }, L = h.createRef(), U = h.useMemo(() => b <= 100, [b]), N = h.createRef(), B = F(null);
  return /* @__PURE__ */ o(st, { ...g, focusId: e, className: "relative w-full h-full select-none", ignoreOutline: typeof n == "number", id: t, children: /* @__PURE__ */ M(
    yt,
    {
      onContentChange: (R) => {
        y.set(R.height), S.set(R);
      },
      className: "relative h-full overflow-hidden",
      onTouchStart: (R) => {
        B.set(R.touches.item(0).clientY);
      },
      onTouchEnd: () => {
        B.set(null);
      },
      onWheel: (R) => {
        if (b < 100) {
          let $ = !1;
          d == "alt" ? $ = R.altKey : d == "control" ? $ = R.ctrlKey : d == "shift" && ($ = R.shiftKey), m.set(!0), f.set((I) => (I += R.deltaY * ($ ? 0.6 : 0.1), I < 0 ? 0 : Math.min(I, (l.length + c) * r - y.get)));
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
            children: l.map((R, $) => {
              var P;
              const z = r * $ - f.get;
              if (cr(-(u + 1) * r, z, z + r, y.get + (i + 1) * r)) {
                const H = {
                  isFocused: $ == (p == null ? void 0 : p.focused),
                  isSelected: !!((P = p == null ? void 0 : p.selected) != null && P[$]),
                  isSubmited: $ == (p == null ? void 0 : p.submited),
                  isSkiped: !!(a && a({
                    data: R,
                    index: $
                  }))
                }, Q = {
                  height: r,
                  position: "absolute",
                  top: r * $,
                  insetInline: "0px"
                };
                return /* @__PURE__ */ o(v, { status: H, index: $, data: R, style: Q, handel: {
                  focus() {
                    D.setOneFeild(t, "focused", $);
                  },
                  select(Ee, pe) {
                    if (Ee)
                      D.setOneFeild(t, "selected", {
                        [$]: pe
                      });
                    else {
                      if (!(p != null && p.selected))
                        return;
                      D.setOneFeild(t, "selected", {
                        ...p.selected,
                        [$]: pe
                      });
                    }
                  },
                  submit() {
                    D.setOneFeild(t, "submited", $);
                  },
                  skip(Ee, pe) {
                    Ee && D.setOneFeild(t, "skiped", { [$]: pe });
                  }
                } }, $);
              }
            })
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            hidden: !U,
            "aria-label": "scroll-bar",
            onMouseEnter: () => {
              T.set(!0);
            },
            onMouseLeave: () => {
              T.set(!1);
            },
            onPointerDown: (R) => {
              m.set(!0), j(R.clientY);
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
                  const R = (I) => {
                    j(I.clientY);
                  };
                  document.addEventListener("mousemove", R);
                  const $ = () => {
                    document.removeEventListener("mousemove", R), document.removeEventListener("mouseup", $);
                  };
                  document.addEventListener("mouseup", $);
                },
                onTouchMove: (R) => {
                  R.stopPropagation(), R.preventDefault(), j(R.touches[0].clientY);
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
                  boxShadow: me([
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
function Vs() {
  const e = _.getOneFeild("findConfigurations", "value"), r = We.getAll(), t = h.useMemo(() => typeof e == "string" ? r.filter(({ colorId: s }) => Be(s, e)) : r, [r, e]);
  return h.useEffect(() => {
    K("configurations.found.length", t.length);
  }, [t]), /* @__PURE__ */ o(
    Pe,
    {
      countLastItems: -1,
      focusId: "colors-list",
      slotId: "colors-list",
      data: t,
      itemSize: 50,
      component: ({ data: s, style: a, status: l, index: c, handel: u }) => {
        var m;
        const i = F(!1), g = F(!1), p = A(), f = G("window/dark.boolean"), y = h.useMemo(() => Wt(!!f, s), [f, s]);
        let n = null;
        return /* @__PURE__ */ M(
          "div",
          {
            onMouseEnter: () => i.set(!0),
            onMouseLeave: () => i.set(!1),
            style: {
              ...a,
              ...p(
                c % 2 && "primary.background",
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
              /* @__PURE__ */ o("div", { className: "flex items-center gap-x-2", children: /* @__PURE__ */ o("span", { className: "capitalize", children: dt(s.colorId.replace(/[^a-zA-Z0-9]+/gi, " "), "camel", "normal") }) }),
              /* @__PURE__ */ M("span", { className: "inline-flex flex-wrap items-center gap-x-2", children: [
                (m = s.propositions) == null ? void 0 : m.map((d, w) => /* @__PURE__ */ o(
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
                    htmlFor: `color:${s.colorId}`
                  },
                  c
                ) }),
                /* @__PURE__ */ M("div", { className: "flex items-center tips", children: [
                  i.get && /* @__PURE__ */ o(
                    re,
                    {
                      icon: g.get ? ce : Ie,
                      onClick: async () => {
                        y && (g.set(!0), await navigator.clipboard.writeText(y));
                      },
                      onMouseLeave: () => {
                        g.set(!1);
                      }
                    }
                  ),
                  /* @__PURE__ */ o(
                    fe,
                    {
                      id: `color:${s.colorId}`,
                      tabIndex: -1,
                      value: y,
                      type: "color",
                      onValueChange: (d) => {
                        n != null && clearTimeout(n), n = setTimeout(() => {
                          We.setOneFeild(s.colorId, f ? "dark" : "light", d);
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
function Sr({ content: e }) {
  const r = A(), t = /mac/gi.test(navigator.platform), s = {
    ...r({
      backgroundColor: "gray.opacity",
      borderColor: "gray.opacity.2"
    })
  };
  return /* @__PURE__ */ M(
    "div",
    {
      style: s,
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
        /control/gi.test(e) && (t ? /* @__PURE__ */ o(le, { icon: ir }) : "ctrl"),
        /shift/gi.test(e) && (t ? /* @__PURE__ */ o(le, { icon: ft }) : "shift"),
        [/control/gi, /shift/gi].every((a) => !a.test(e)) && e
      ]
    }
  );
}
function bt({ shortcut: e = [], className: r, ...t }) {
  const s = typeof e == "string" ? [e] : e;
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
        xe,
        {
          list: s.map((a, l) => {
            const c = a.split("+");
            return /* @__PURE__ */ o("span", { className: "inline-flex items-center gap-x-[1px]", children: /* @__PURE__ */ o(
              xe,
              {
                list: c.map((u, i) => /* @__PURE__ */ o(Sr, { content: u }, i)),
                joinComponent: /* @__PURE__ */ o("span", { children: "+" })
              }
            ) }, l);
          }),
          joinComponent: /* @__PURE__ */ o("span", { className: "mx-1", children: /* @__PURE__ */ o(Y, { content: "or" }) })
        }
      )
    }
  );
}
function Tr({ state: e, config: r = {}, id: t }) {
  const s = h.useMemo(() => typeof e.get == "boolean" ? e.get : !1, [e.get]);
  h.useEffect(() => () => {
    l.set(!1);
  }, []);
  const a = A(), l = F(!1);
  return /* @__PURE__ */ M("span", { className: "inline-flex items-center gap-1 overflow-hidden", children: [
    r.style == "checkbox" ? /* @__PURE__ */ o(
      "button",
      {
        onClick: () => {
          e.set((c) => !c);
        },
        onFocus: () => {
          l.set(!0);
        },
        onBlur: () => {
          l.set(!1);
        },
        id: t,
        style: {
          ...a(
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
              s && "scale-100"
            ),
            icon: ce
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
          e.set((c) => !c);
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
          ...a(
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
            className: O("absolute left-0 inline-flex items-center justify-center top-1/2 transform -translate-y-1/2 w-[20px] h-[20px] rounded-full duration-300 text-white", s && "left-1/2"),
            style: {
              ...a(s && "checkbox.true", !s && "checkbox.false")
            },
            children: /* @__PURE__ */ o(le, { icon: s ? we.solid.faCheck : we.solid.faXmark })
          }
        )
      }
    ),
    /* @__PURE__ */ o("label", { htmlFor: t, children: (s ? r == null ? void 0 : r.onActive : r == null ? void 0 : r.onDisactive) || "" })
  ] });
}
function ee() {
  return ee = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
  }, ee.apply(this, arguments);
}
const $r = ["children", "options"];
var Ve, Ze;
(function(e) {
  e.blockQuote = "0", e.breakLine = "1", e.breakThematic = "2", e.codeBlock = "3", e.codeFenced = "4", e.codeInline = "5", e.footnote = "6", e.footnoteReference = "7", e.gfmTask = "8", e.heading = "9", e.headingSetext = "10", e.htmlBlock = "11", e.htmlComment = "12", e.htmlSelfClosing = "13", e.image = "14", e.link = "15", e.linkAngleBraceStyleDetector = "16", e.linkBareUrlDetector = "17", e.linkMailtoDetector = "18", e.newlineCoalescer = "19", e.orderedList = "20", e.paragraph = "21", e.ref = "22", e.refImage = "23", e.refLink = "24", e.table = "25", e.tableSeparator = "26", e.text = "27", e.textBolded = "28", e.textEmphasized = "29", e.textEscaped = "30", e.textMarked = "31", e.textStrikethroughed = "32", e.unorderedList = "33";
})(Ve || (Ve = {})), function(e) {
  e[e.MAX = 0] = "MAX", e[e.HIGH = 1] = "HIGH", e[e.MED = 2] = "MED", e[e.LOW = 3] = "LOW", e[e.MIN = 4] = "MIN";
}(Ze || (Ze = {}));
const qe = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, r) => (e[r.toLowerCase()] = r, e), { for: "htmlFor" }), Ge = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, Rr = ["style", "script"], jr = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, Ar = /mailto:/i, Lr = /\n{2,}$/, xt = /^(\s*>[\s\S]*?)(?=\n{2,})/, Dr = /^ *> ?/gm, Br = /^ {2,}\n/, Ir = /^(?:( *[-*_])){3,} *(?:\n *)+\n/, vt = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/, wt = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, zr = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/, Pr = /^(?:\n *)*\n/, Hr = /\r\n?/g, Ur = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, _r = /^\[\^([^\]]+)]/, Wr = /\f/g, Yr = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/, Xr = /^\s*?\[(x|\s)\]/, kt = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Nt = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Et = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, Ae = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i, Kr = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, Mt = /^<!--[\s\S]*?(?:-->)/, Vr = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, Le = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, Zr = /^\{.*\}$/, qr = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, Gr = /^<([^ >]+@[^ >]+)>/, Jr = /^<([^ >]+:\/[^ >]+)>/, Qr = /-([a-z])?/gi, Ct = /^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, es = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, ts = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, rs = /^\[([^\]]*)\] ?\[([^\]]*)\]/, ss = /(\[|\])/g, ns = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, os = /\t/g, ls = /(^ *\||\| *$)/g, as = /^ *:-+: *$/, cs = /^ *:-+ *$/, is = /^ *-+: *$/, Ne = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)", us = new RegExp(`^([*_])\\1${Ne}\\1\\1(?!\\1)`), ds = new RegExp(`^([*_])${Ne}\\1(?!\\1|\\w)`), fs = new RegExp(`^==${Ne}==`), ms = new RegExp(`^~~${Ne}~~`), ps = /^\\([^0-9A-Za-z\s])/, hs = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i, gs = /^\n+/, ys = /^([ \t]*)/, bs = /\\([^\\])/g, Je = / *\n+$/, xs = /(?:^|\n)( *)$/, He = "(?:\\d+\\.)", Ue = "(?:[*+-])";
function Ft(e) {
  return "( *)(" + (e === 1 ? He : Ue) + ") +";
}
const Ot = Ft(1), St = Ft(2);
function Tt(e) {
  return new RegExp("^" + (e === 1 ? Ot : St));
}
const vs = Tt(1), ws = Tt(2);
function $t(e) {
  return new RegExp("^" + (e === 1 ? Ot : St) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? He : Ue) + " )[^\\n]*)*(\\n|$)", "gm");
}
const Rt = $t(1), jt = $t(2);
function At(e) {
  const r = e === 1 ? He : Ue;
  return new RegExp("^( *)(" + r + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + r + " (?!" + r + " ))\\n*|\\s*\\n*$)");
}
const Lt = At(1), Dt = At(2);
function Qe(e, r) {
  const t = r === 1, s = t ? Lt : Dt, a = t ? Rt : jt, l = t ? vs : ws;
  return { match(c, u, i) {
    const g = xs.exec(i);
    return g && (u.list || !u.inline && !u.simple) ? s.exec(c = g[1] + c) : null;
  }, order: 1, parse(c, u, i) {
    const g = t ? +c[2] : void 0, p = c[0].replace(Lr, `
`).match(a);
    let f = !1;
    return { items: p.map(function(y, n) {
      const m = l.exec(y)[0].length, d = new RegExp("^ {1," + m + "}", "gm"), w = y.replace(d, "").replace(l, ""), x = n === p.length - 1, b = w.indexOf(`

`) !== -1 || x && f;
      f = b;
      const E = i.inline, k = i.list;
      let T;
      i.list = !0, b ? (i.inline = !1, T = w.replace(Je, `

`)) : (i.inline = !0, T = w.replace(Je, ""));
      const S = u(T, i);
      return i.inline = E, i.list = k, S;
    }), ordered: t, start: g };
  }, render: (c, u, i) => e(c.ordered ? "ol" : "ul", { key: i.key, start: c.type === "20" ? c.start : void 0 }, c.items.map(function(g, p) {
    return e("li", { key: p }, u(g, i));
  })) };
}
const ks = new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), Ns = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, Bt = [xt, vt, wt, kt, Et, Nt, Mt, Ct, Rt, Lt, jt, Dt], Es = [...Bt, /^[^\n]+(?:  \n|\n{2,})/, Ae, Le];
function Ms(e) {
  return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function Cs(e) {
  return is.test(e) ? "right" : as.test(e) ? "center" : cs.test(e) ? "left" : null;
}
function et(e, r, t, s) {
  const a = t.inTable;
  t.inTable = !0;
  let l = e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce((u, i) => (i.trim() === "|" ? u.push(s ? { type: "26" } : { type: "27", text: i }) : i !== "" && u.push.apply(u, r(i, t)), u), []);
  t.inTable = a;
  let c = [[]];
  return l.forEach(function(u, i) {
    u.type === "26" ? i !== 0 && i !== l.length - 1 && c.push([]) : (u.type !== "27" || l[i + 1] != null && l[i + 1].type !== "26" || (u.text = u.text.trimEnd()), c[c.length - 1].push(u));
  }), c;
}
function Fs(e, r, t) {
  t.inline = !0;
  const s = e[2] ? e[2].replace(ls, "").split("|").map(Cs) : [], a = e[3] ? function(c, u, i) {
    return c.trim().split(`
`).map(function(g) {
      return et(g, u, i, !0);
    });
  }(e[3], r, t) : [], l = et(e[1], r, t, !!a.length);
  return t.inline = !1, a.length ? { align: s, cells: a, header: l, type: "25" } : { children: l, type: "21" };
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
function X(e) {
  return function(r, t) {
    return t.inline || t.simple ? null : e.exec(r);
  };
}
function ie(e) {
  return function(r) {
    return e.exec(r);
  };
}
function Os(e, r, t) {
  if (r.inline || r.simple || t && !t.endsWith(`
`)) return null;
  let s = "";
  e.split(`
`).every((l) => !Bt.some((c) => c.test(l)) && (s += l + `
`, l.trim()));
  const a = s.trimEnd();
  return a == "" ? null : [s, a];
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
  return e.replace(bs, "$1");
}
function be(e, r, t) {
  const s = t.inline || !1, a = t.simple || !1;
  t.inline = !0, t.simple = !0;
  const l = e(r, t);
  return t.inline = s, t.simple = a, l;
}
function Ss(e, r, t) {
  const s = t.inline || !1, a = t.simple || !1;
  t.inline = !1, t.simple = !0;
  const l = e(r, t);
  return t.inline = s, t.simple = a, l;
}
function Ts(e, r, t) {
  const s = t.inline || !1;
  t.inline = !1;
  const a = e(r, t);
  return t.inline = s, a;
}
const Oe = (e, r, t) => ({ children: be(r, e[1], t) });
function Se() {
  return {};
}
function Te() {
  return null;
}
function $s(...e) {
  return e.filter(Boolean).join(" ");
}
function $e(e, r, t) {
  let s = e;
  const a = r.split(".");
  for (; a.length && (s = s[a[0]], s !== void 0); ) a.shift();
  return s || t;
}
function Rs(e = "", r = {}) {
  r.overrides = r.overrides || {}, r.slugify = r.slugify || Ms, r.namedCodesToUnicode = r.namedCodesToUnicode ? ee({}, Ge, r.namedCodesToUnicode) : Ge;
  const t = r.createElement || ge.createElement;
  function s(n, m, ...d) {
    const w = $e(r.overrides, `${n}.props`, {});
    return t(function(x, b) {
      const E = $e(b, x);
      return E ? typeof E == "function" || typeof E == "object" && "render" in E ? E : $e(b, `${x}.component`, x) : x;
    }(n, r.overrides), ee({}, m, w, { className: $s(m == null ? void 0 : m.className, w.className) || void 0 }), ...d);
  }
  function a(n) {
    n = n.replace(Yr, "");
    let m = !1;
    r.forceInline ? m = !0 : r.forceBlock || (m = ns.test(n) === !1);
    const d = p(g(m ? n : `${n.trimEnd().replace(gs, "")}

`, { inline: m }));
    for (; typeof d[d.length - 1] == "string" && !d[d.length - 1].trim(); ) d.pop();
    if (r.wrapper === null) return d;
    const w = r.wrapper || (m ? "span" : "div");
    let x;
    if (d.length > 1 || r.forceWrapper) x = d;
    else {
      if (d.length === 1) return x = d[0], typeof x == "string" ? s("span", { key: "outer" }, x) : x;
      x = null;
    }
    return ge.createElement(w, { key: "outer" }, x);
  }
  function l(n) {
    const m = n.match(jr);
    return m ? m.reduce(function(d, w, x) {
      const b = w.indexOf("=");
      if (b !== -1) {
        const E = function(v) {
          return v.indexOf("-") !== -1 && v.match(Vr) === null && (v = v.replace(Qr, function(C, j) {
            return j.toUpperCase();
          })), v;
        }(w.slice(0, b)).trim(), k = function(v) {
          const C = v[0];
          return (C === '"' || C === "'") && v.length >= 2 && v[v.length - 1] === C ? v.slice(1, -1) : v;
        }(w.slice(b + 1).trim()), T = qe[E] || E, S = d[T] = function(v, C) {
          return v === "style" ? C.split(/;\s?/).reduce(function(j, L) {
            const U = L.slice(0, L.indexOf(":"));
            return j[U.trim().replace(/(-[a-z])/g, (N) => N[1].toUpperCase())] = L.slice(U.length + 1).trim(), j;
          }, {}) : v === "href" || v === "src" ? oe(C) : (C.match(Zr) && (C = C.slice(1, C.length - 1)), C === "true" || C !== "false" && C);
        }(E, k);
        typeof S == "string" && (Ae.test(S) || Le.test(S)) && (d[T] = ge.cloneElement(a(S.trim()), { key: x }));
      } else w !== "style" && (d[qe[w] || w] = !0);
      return d;
    }, {}) : null;
  }
  const c = [], u = {}, i = { 0: { match: X(xt), order: 1, parse: (n, m, d) => ({ children: m(n[0].replace(Dr, ""), d) }), render: (n, m, d) => s("blockquote", { key: d.key }, m(n.children, d)) }, 1: { match: ie(Br), order: 1, parse: Se, render: (n, m, d) => s("br", { key: d.key }) }, 2: { match: X(Ir), order: 1, parse: Se, render: (n, m, d) => s("hr", { key: d.key }) }, 3: { match: X(wt), order: 0, parse: (n) => ({ lang: void 0, text: n[0].replace(/^ {4}/gm, "").replace(/\n+$/, "") }), render: (n, m, d) => s("pre", { key: d.key }, s("code", ee({}, n.attrs, { className: n.lang ? `lang-${n.lang}` : "" }), n.text)) }, 4: { match: X(vt), order: 0, parse: (n) => ({ attrs: l(n[3] || ""), lang: n[2] || void 0, text: n[4], type: "3" }) }, 5: { match: q(zr), order: 3, parse: (n) => ({ text: n[2] }), render: (n, m, d) => s("code", { key: d.key }, n.text) }, 6: { match: X(Ur), order: 0, parse: (n) => (c.push({ footnote: n[2], identifier: n[1] }), {}), render: Te }, 7: { match: Z(_r), order: 1, parse: (n) => ({ target: `#${r.slugify(n[1])}`, text: n[1] }), render: (n, m, d) => s("a", { key: d.key, href: oe(n.target) }, s("sup", { key: d.key }, n.text)) }, 8: { match: Z(Xr), order: 1, parse: (n) => ({ completed: n[1].toLowerCase() === "x" }), render: (n, m, d) => s("input", { checked: n.completed, key: d.key, readOnly: !0, type: "checkbox" }) }, 9: { match: X(r.enforceAtxHeadings ? Nt : kt), order: 1, parse: (n, m, d) => ({ children: be(m, n[2], d), id: r.slugify(n[2]), level: n[1].length }), render: (n, m, d) => s(`h${n.level}`, { id: n.id, key: d.key }, m(n.children, d)) }, 10: { match: X(Et), order: 0, parse: (n, m, d) => ({ children: be(m, n[1], d), level: n[2] === "=" ? 1 : 2, type: "9" }) }, 11: { match: ie(Ae), order: 1, parse(n, m, d) {
    const [, w] = n[3].match(ys), x = new RegExp(`^${w}`, "gm"), b = n[3].replace(x, ""), E = (k = b, Es.some((C) => C.test(k)) ? Ts : be);
    var k;
    const T = n[1].toLowerCase(), S = Rr.indexOf(T) !== -1, v = { attrs: l(n[2]), noInnerParse: S, tag: (S ? T : n[1]).trim() };
    return d.inAnchor = d.inAnchor || T === "a", S ? v.text = n[3] : v.children = E(m, b, d), d.inAnchor = !1, v;
  }, render: (n, m, d) => s(n.tag, ee({ key: d.key }, n.attrs), n.text || m(n.children, d)) }, 13: { match: ie(Le), order: 1, parse: (n) => ({ attrs: l(n[2] || ""), tag: n[1].trim() }), render: (n, m, d) => s(n.tag, ee({}, n.attrs, { key: d.key })) }, 12: { match: ie(Mt), order: 1, parse: () => ({}), render: Te }, 14: { match: q(Ns), order: 1, parse: (n) => ({ alt: n[1], target: rt(n[2]), title: n[3] }), render: (n, m, d) => s("img", { key: d.key, alt: n.alt || void 0, title: n.title || void 0, src: oe(n.target) }) }, 15: { match: Z(ks), order: 3, parse: (n, m, d) => ({ children: Ss(m, n[1], d), target: rt(n[2]), title: n[3] }), render: (n, m, d) => s("a", { key: d.key, href: oe(n.target), title: n.title }, m(n.children, d)) }, 16: { match: Z(Jr), order: 0, parse: (n) => ({ children: [{ text: n[1], type: "27" }], target: n[1], type: "15" }) }, 17: { match: (n, m) => m.inAnchor ? null : Z(qr)(n, m), order: 0, parse: (n) => ({ children: [{ text: n[1], type: "27" }], target: n[1], title: void 0, type: "15" }) }, 18: { match: Z(Gr), order: 0, parse(n) {
    let m = n[1], d = n[1];
    return Ar.test(d) || (d = "mailto:" + d), { children: [{ text: m.replace("mailto:", ""), type: "27" }], target: d, type: "15" };
  } }, 20: Qe(s, 1), 33: Qe(s, 2), 19: { match: X(Pr), order: 3, parse: Se, render: () => `
` }, 21: { match: Os, order: 3, parse: Oe, render: (n, m, d) => s("p", { key: d.key }, m(n.children, d)) }, 22: { match: Z(es), order: 0, parse: (n) => (u[n[1]] = { target: n[2], title: n[4] }, {}), render: Te }, 23: { match: q(ts), order: 0, parse: (n) => ({ alt: n[1] || void 0, ref: n[2] }), render: (n, m, d) => u[n.ref] ? s("img", { key: d.key, alt: n.alt, src: oe(u[n.ref].target), title: u[n.ref].title }) : null }, 24: { match: Z(rs), order: 0, parse: (n, m, d) => ({ children: m(n[1], d), fallbackChildren: m(n[0].replace(ss, "\\$1"), d), ref: n[2] }), render: (n, m, d) => u[n.ref] ? s("a", { key: d.key, href: oe(u[n.ref].target), title: u[n.ref].title }, m(n.children, d)) : s("span", { key: d.key }, m(n.fallbackChildren, d)) }, 25: { match: X(Ct), order: 1, parse: Fs, render(n, m, d) {
    const w = n;
    return s("table", { key: d.key }, s("thead", null, s("tr", null, w.header.map(function(x, b) {
      return s("th", { key: b, style: tt(w, b) }, m(x, d));
    }))), s("tbody", null, w.cells.map(function(x, b) {
      return s("tr", { key: b }, x.map(function(E, k) {
        return s("td", { key: k, style: tt(w, k) }, m(E, d));
      }));
    })));
  } }, 27: { match: ie(hs), order: 4, parse: (n) => ({ text: n[0].replace(Kr, (m, d) => r.namedCodesToUnicode[d] ? r.namedCodesToUnicode[d] : m) }), render: (n) => n.text }, 28: { match: q(us), order: 2, parse: (n, m, d) => ({ children: m(n[2], d) }), render: (n, m, d) => s("strong", { key: d.key }, m(n.children, d)) }, 29: { match: q(ds), order: 3, parse: (n, m, d) => ({ children: m(n[2], d) }), render: (n, m, d) => s("em", { key: d.key }, m(n.children, d)) }, 30: { match: q(ps), order: 1, parse: (n) => ({ text: n[1], type: "27" }) }, 31: { match: q(fs), order: 3, parse: Oe, render: (n, m, d) => s("mark", { key: d.key }, m(n.children, d)) }, 32: { match: q(ms), order: 3, parse: Oe, render: (n, m, d) => s("del", { key: d.key }, m(n.children, d)) } };
  r.disableParsingRawHTML === !0 && (delete i[11], delete i[13]);
  const g = function(n) {
    let m = Object.keys(n);
    function d(w, x) {
      let b = [], E = "";
      for (; w; ) {
        let k = 0;
        for (; k < m.length; ) {
          const T = m[k], S = n[T], v = S.match(w, x, E);
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
      let b = n[w].order, E = n[x].order;
      return b !== E ? b - E : w < x ? -1 : 1;
    }), function(w, x) {
      return d(function(b) {
        return b.replace(Hr, `
`).replace(Wr, "").replace(os, "    ");
      }(w), x);
    };
  }(i), p = (f = /* @__PURE__ */ function(n, m) {
    return function(d, w, x) {
      const b = n[d.type].render;
      return m ? m(() => b(d, w, x), d, w, x) : b(d, w, x);
    };
  }(i, r.renderRule), function n(m, d = {}) {
    if (Array.isArray(m)) {
      const w = d.key, x = [];
      let b = !1;
      for (let E = 0; E < m.length; E++) {
        d.key = E;
        const k = n(m[E], d), T = typeof k == "string";
        T && b ? x[x.length - 1] += k : k !== null && x.push(k), b = T;
      }
      return d.key = w, x;
    }
    return f(m, n, d);
  });
  var f;
  const y = a(e);
  return c.length ? s("div", null, y, s("footer", { key: "footer" }, c.map(function(n) {
    return s("div", { id: r.slugify(n.identifier), key: n.identifier }, n.identifier, p(g(n.footnote, { inline: !0 })));
  }))) : y;
}
const js = (e) => {
  let { children: r = "", options: t } = e, s = function(a, l) {
    if (a == null) return {};
    var c, u, i = {}, g = Object.keys(a);
    for (u = 0; u < g.length; u++) l.indexOf(c = g[u]) >= 0 || (i[c] = a[c]);
    return i;
  }(e, $r);
  return ge.cloneElement(Rs(r, t), s);
};
function _e({ value: e = "" }) {
  const r = A();
  return /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
    js,
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
            let s = t.children;
            const a = (l = t.className) == null ? void 0 : l.includes("lang-");
            return a && (s = It.highlightAuto(String(t.children)).value), /* @__PURE__ */ o(
              "div",
              {
                className: O("m-1 px-2 py-1 border border-transparent border-solid rounded-md leading-[26px]", !a && "inline-block"),
                style: {
                  ...r("gray.opacity", {
                    borderColor: "borders"
                  })
                },
                dangerouslySetInnerHTML: {
                  __html: s
                }
              }
            );
          },
          input(t) {
            const s = F((t == null ? void 0 : t.checked) || !1);
            return (t == null ? void 0 : t.type) === "checkbox" ? /* @__PURE__ */ o(
              Tr,
              {
                id: lt(),
                state: s,
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
                    boxShadow: me([
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
            const s = h.createRef(), a = h.useMemo(() => {
              let l = s.current, c = 0;
              for (; l; )
                c++, l = l.previousElementSibling;
              return c;
            }, [s.current]);
            return /* @__PURE__ */ o(
              "div",
              {
                ref: s,
                style: {
                  ...r(a % 2 && "gray.opacity")
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
function Zs({ data: e }) {
  const r = Yt("commandId"), t = _.getOneFeild("findCommand", "value"), s = h.useMemo(() => {
    if (r)
      return e[r];
  }, [r]), a = h.useMemo(() => (s == null ? void 0 : s.lines) || [], [s]), l = h.useMemo(() => a.filter(({ content: i }) => Be(i, t)), [t, a]);
  h.useEffect(() => {
    D.setOneFeild("cmds/list", "focused", a != null && a.length ? 0 : null);
  }, [a]);
  const c = Xt(l, "cmds/list", "submited");
  h.useEffect(() => {
    var i;
    c && (Kt("commands.close"), _.setOneFeild("findCommand", "value", ""), (i = s == null ? void 0 : s.onSubmit) == null || i.call(s, c), D.setOneFeild("cmds/list", "submited", null));
  }, [c, s]);
  const u = A();
  return /* @__PURE__ */ M(
    "div",
    {
      className: "relative py-1 h-[50vh]",
      onClick: (i) => {
        i.currentTarget.contains(i.target) && de("findCommand");
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
            children: /* @__PURE__ */ o(Y, { content: "no result" })
          }
        ),
        /* @__PURE__ */ o(
          Pe,
          {
            data: l,
            itemSize: 30,
            focusId: "cmds/list",
            slotId: "cmds/list",
            countLastItems: -1,
            component: ({ data: i, status: g, handel: p, style: f }) => {
              var m;
              const y = F(!1), n = h.createRef();
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
                    ...u(y.get && "gray.opacity", g.isFocused && "secondary", g.isFocused && { color: "secondary.content" })
                  },
                  onClick: (d) => {
                    var w;
                    !((w = n.current) != null && w.contains(d.target)) && p.submit();
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
                      i.checked && /* @__PURE__ */ o(ae, { icon: ce }),
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
                      /* @__PURE__ */ o("span", { ref: n, children: (y.get || g.isFocused) && ((m = i.tools) == null ? void 0 : m.map(({ icon: d, onClick: w }, x) => /* @__PURE__ */ o(
                        re,
                        {
                          icon: d,
                          onClick: async () => {
                            const b = w == null ? void 0 : w();
                            if (de("findCommand"), b instanceof Promise) {
                              K("commands.isLoading", !0);
                              try {
                                await b;
                              } catch {
                              }
                              K("commands.isLoading", !1);
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
function As({
  className: e,
  multiLines: r = !1,
  onChange: t,
  onKeyDown: s,
  onSelect: a,
  onSelectionChange: l,
  onValueChange: c,
  onFocus: u,
  onBlur: i,
  propositions: g,
  selection: p,
  style: f,
  tabSize: y = 4,
  supportTab: n = !1,
  hidden: m,
  acceptKeys: d,
  pattern: w,
  ...x
}) {
  const b = h.createRef(), E = Vt(), k = h.useMemo(() => mt.join({ commandId: "input.completeWord" }, E, "commandId->command"), [E]), T = A(), S = h.createRef(), v = F(0), C = h.useMemo(() => {
    var N, B;
    return (B = (N = x.value) == null ? void 0 : N.toString().match(/[^ ]*$/gi)) == null ? void 0 : B[0];
  }, [x.value]), j = h.useMemo(() => {
    const N = (g == null ? void 0 : g.filter((B) => C && B.length != (C == null ? void 0 : C.length) && B.startsWith(C))) || [];
    return ur(N).value;
  }, [g, C]), L = F(!1);
  h.useEffect(() => {
    S.current && (S.current.scrollTop = v.get);
  }, [v.get]), h.useEffect(() => () => {
    K("input.focusedHasProposition", !1), K("input.supportTab", !1), L.set(!1);
  }, []), h.useEffect(() => {
    !b.current || !p || b.current.setSelectionRange(p.start, p.end, p.direction);
  }, [b.current, p]);
  const U = h.useCallback((N) => {
    l == null || l({
      start: N.currentTarget.selectionStart,
      end: N.currentTarget.selectionEnd,
      direction: N.currentTarget.selectionDirection
    });
  }, []);
  return h.useEffect(() => {
    K("input.focusedHasProposition", !!(L.get && j));
  }, [L.get, j]), h.useEffect(() => {
    K("input.supportTab", L.get && n);
  }, [n, L.get]), V(
    "input.tab",
    () => {
      if (!L.get) return;
      const N = b.current;
      if (!N) return;
      const { selectionStart: B, selectionEnd: R, value: $ } = N, I = B, z = R, P = $.slice(0, B), H = $.slice(R), Q = " ".repeat(y);
      N.value = P + Q + H, N.setSelectionRange(I + y, z + y, "forward"), c == null || c(N.value), l == null || l({
        start: N.selectionStart,
        end: N.selectionEnd,
        direction: N.selectionDirection
      });
    },
    [b, L.get, l, c]
  ), V(
    "input.completeWord",
    () => {
      L.get && b.current && (b.current.value = b.current.value.replace(/[^ ]+$/gi, "") + j + " ", c == null || c(b.current.value));
    },
    [b, L.get, j, c]
  ), V(
    "input.selectLine",
    () => {
      if (!L.get || !b.current)
        return;
      const N = b.current, { selectionStart: B, selectionEnd: R, value: $ } = N, I = $.slice(0, B), z = $.slice(R), P = I.lastIndexOf(`
`) + 1;
      let H = z.indexOf(`
`);
      H === -1 && (H = z.length), N.setSelectionRange(P, R + H, "forward"), l == null || l({
        start: N.selectionStart,
        end: N.selectionEnd,
        direction: N.selectionDirection
      });
    },
    [b, L.get, l]
  ), V(
    "input.addLineBellow",
    () => {
      if (!L.get) return;
      const N = b.current;
      if (!N) return;
      const { selectionStart: B, selectionEnd: R, value: $ } = N, I = $.slice(0, B), z = $.slice(R), P = I.lastIndexOf(`
`) + 1;
      let H = z.indexOf(`
`);
      H === -1 && (H = z.length);
      const Q = $.slice(P, R + H);
      N.value = I + `
` + Q + z, N.setSelectionRange(B + Q.length + 1, R + Q.length + 1, "forward"), c == null || c(N.value), l == null || l({
        start: N.selectionStart,
        end: N.selectionEnd,
        direction: N.selectionDirection
      });
    },
    [b, L.get, l, c]
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
          U(N), a == null || a(N);
        },
        ref: b,
        onKeyDown: (N) => {
          !r && N.key == "Enter" && N.preventDefault();
          const B = ve.fromEvent(N);
          d && d.some((R) => new RegExp(R, "igm").test(B)) && N.preventDefault(), s == null || s(N);
        },
        onChange: (N) => {
          t == null || t(N), c == null || c(N.currentTarget.value);
        }
      }
    ),
    /* @__PURE__ */ o("div", { ref: S, className: O(e, "absolute inset-0 pointer-events-none overflow-y-auto overflow-x-hidden"), children: /* @__PURE__ */ M("pre", { className: "font-[inherit] text-wrap", children: [
      /* @__PURE__ */ o("span", { className: "text-transparent", children: x.value }),
      typeof C == "string" && j && /* @__PURE__ */ M(W, { children: [
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
function Ls({
  inputName: e,
  selectWhenFocusIn: r,
  placeholder: t,
  controlsPosition: s = "bottom",
  className: a,
  value: l,
  rows: c,
  style: u,
  controls: i,
  onFocus: g,
  onBlur: p,
  acceptHistory: f,
  propositions: y,
  ...n
}) {
  const m = _.getOneFeild(e, "value"), d = _.getOneFeild(e, "selection"), w = _.useOneFeild(e, "history"), x = A(), b = F(!1);
  at(
    () => {
      !f && !m || w.set((k) => k ? [...k, m] : [m]);
    },
    [m, f],
    2e3
  ), ct(e), h.useEffect(() => {
    _.setOneFeild(e, "controls", i || {});
  }, [i, e]);
  const E = h.useMemo(() => Object.entries(i || {}).map(([k, T]) => {
    try {
      const v = (m == null ? void 0 : m.match(new RegExp(k, "ig"))) ? "succ" : "err";
      return T[v] ? {
        type: v,
        content: T[v]
      } : void 0;
    } catch (S) {
      dr.warn("expression not correct", S);
      return;
    }
  }).filter(Boolean).map((k) => k), [m, i]);
  return /* @__PURE__ */ M("div", { className: "relative flex items-center w-full h-full", children: [
    /* @__PURE__ */ o(
      As,
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
          a
        ),
        onFocus: (k) => {
          r && k.currentTarget.select(), b.set(!0), g == null || g(k);
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
        rows: c || 1,
        id: e,
        ...n
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
          s == "top" ? "bottom-full" : "top-full"
        ),
        style: {
          ...x("primary.background", {
            borderColor: "borders"
          })
        },
        children: /* @__PURE__ */ o(
          xe,
          {
            list: E.map(({ content: k, type: T }, S) => {
              const v = T == "err" ? fr : ce;
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
function qs({ state: e, id: r, config: t }) {
  const s = _.useOneFeild(`array-${r}`, "value"), a = h.useMemo(() => Array.from(new Set(e.get)), [e.get]), l = A(), c = h.useCallback(() => {
    s.get !== void 0 && (a.includes(s.get) || s.get === "" || (e.set([...a, s.get]), s.set(""), de(r)));
  }, [s.get, a, s.set, e.set]);
  return /* @__PURE__ */ M("div", { className: "array-field", children: [
    /* @__PURE__ */ o("div", { className: "items", children: a.map((u, i) => /* @__PURE__ */ M(
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
          ...l("gray.opacity", {
            borderColor: "borders"
          })
        },
        children: [
          /* @__PURE__ */ o("span", { children: u }),
          /* @__PURE__ */ M("span", { className: "flex items-center", children: [
            /* @__PURE__ */ o(
              re,
              {
                className: "opacity-0 group-hover:opacity-100 transition-[opacity] duration-200",
                onClick: async () => {
                  await navigator.clipboard.writeText(u);
                },
                icon: Ie
              }
            ),
            /* @__PURE__ */ o(
              re,
              {
                className: "opacity-0 group-hover:opacity-100 transition-[opacity] duration-200",
                onClick: () => {
                  a.splice(i, 1), e.set(a);
                },
                icon: ze
              }
            )
          ] })
        ]
      },
      i
    )) }),
    /* @__PURE__ */ M("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ o("div", { className: "w-full", children: /* @__PURE__ */ o(
        Ls,
        {
          inputName: `array-${r}`,
          placeholder: "write item...",
          id: r,
          onKeyDown: (u) => {
            if (!new ve("control?+enter").test(u))
              return;
            const { isValide: g } = Zt([`array-${r}`]);
            g ? (c(), s.set("")) : de("array-" + r);
          },
          controls: t == null ? void 0 : t.controls
        }
      ) }),
      s.get && /* @__PURE__ */ o(J, { onClick: c, className: "py-1 w-fit", children: /* @__PURE__ */ o(Y, { content: (t == null ? void 0 : t.addText) || "add" }) })
    ] })
  ] });
}
const Ds = (e, r = "datetime-local") => r == "time" ? Fe(e, "HH:mm") : r == "month" ? Fe(e, "yyyy-MM") : r == "date" ? Fe(e, "yyyy-MM-dd") : e.toISOString().replace(/\.[0-9]+Z/gi, "");
function Gs({ state: e, config: r = {}, id: t }) {
  const s = A(), a = F(!1), l = s("secondary.background", {
    borderColor: "borders"
  }), c = F(!0), u = s(
    a.get && c.get && {
      borderColor: "primary"
    },
    a.get && !c.get && {
      borderColor: "checkbox.true"
    }
  ), [i] = zt("no provided"), g = h.useCallback(() => {
    const p = /* @__PURE__ */ new Date();
    e.set(Ds(p, r.format));
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
          fe,
          {
            id: t,
            style: {
              backgroundColor: "transparent"
            },
            type: r.format && ["date", "time", "month"].includes(r.format) ? r.format : "datetime-local",
            value: e.get ?? void 0,
            onKeyDown: (p) => {
              if (new ve("control+shift+d").test(p)) {
                p.preventDefault(), g();
                return;
              }
              new ve("control+backspace").test(p) && (p.preventDefault(), e.set(""));
            },
            onChange: (p) => {
              const f = p.currentTarget.value;
              if (!f) {
                c.set(!0);
                return;
              }
              c.set(!1), e.set(f);
            },
            className: O("p-1 border-none"),
            onBlur: () => {
              a.set(!1);
            },
            onFocus: () => {
              a.set(!0);
            },
            title: e.get || i
          }
        ),
        /* @__PURE__ */ o("div", { className: "inline-flex items-center tools", children: r.goToCurrent && /* @__PURE__ */ o(
          re,
          {
            icon: mr,
            onClick: () => {
              g();
            }
          }
        ) })
      ]
    }
  );
}
const Js = "enum/list";
function Qs({ config: e = {}, id: r, state: t }) {
  var g;
  const s = h.createRef(), a = A(), l = F(!1), c = h.useMemo(() => {
    var p;
    return (p = e.list) == null ? void 0 : p.find(({ value: f }) => f == t.get);
  }, [e, t.get]), u = h.useMemo(() => r + "-" + lt() + "-" + crypto.randomUUID(), [r]), i = se.getTemp("id");
  return /* @__PURE__ */ o("div", { className: "relative w-full", children: /* @__PURE__ */ M(
    "div",
    {
      id: r,
      ref: s,
      tabIndex: 1,
      onClick: () => {
        se.setTemp("id", u), se.setTemp("list", e.list || []), se.setTemp("choised", t.get);
        const p = qt("object.data.enum.result", Boolean, (f) => {
          const y = f.object.data.enum;
          (!y.id || y.id == u) && (y.id == u && t.set(y.result), se.setTemp("result", null), se.setTemp("id", null), p());
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
        ...a(
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
        /* @__PURE__ */ o("div", { className: "w-full text-center", children: (c == null ? void 0 : c.content) || (c == null ? void 0 : c.value) || "no option choised" }),
        e.expandIcon !== !1 && !!((g = e.list) != null && g.length) && /* @__PURE__ */ o(le, { icon: u == i ? ft : pr })
      ]
    }
  ) });
}
const Bs = ({ isSelected: e, item: r, toggle: t }) => {
  const s = F(!1), a = A();
  return /* @__PURE__ */ M(
    "button",
    {
      onMouseEnter: () => s.set(!0),
      onMouseLeave: () => s.set(!1),
      className: "inline-flex items-center gap-1 px-2 py-1 rounded-md text-nowrap cursor-pointer",
      tabIndex: -1,
      style: {
        ...a(
          {
            background: "gray.opacity"
          },
          s.get && {
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
            icon: ce,
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
function en({ id: e, config: r = {}, state: t }) {
  var s;
  return /* @__PURE__ */ o("div", { id: e, className: "flex flex-wrap gap-1 p-1 overflow-x-auto", tabIndex: 1, children: (s = r.list) == null ? void 0 : s.map((a, l) => {
    var u;
    const c = !!((u = t.get) != null && u.includes(a.value));
    return /* @__PURE__ */ o(
      Bs,
      {
        item: a,
        isSelected: c,
        toggle: () => {
          var i;
          c ? t.set((i = t.get) == null ? void 0 : i.filter((g) => g != a.value)) : t.set([...t.get || [], a.value]);
        }
      },
      l
    );
  }) });
}
function tn({ state: e, config: r = {}, id: t }) {
  ct(`${t}:input`);
  const s = _.useOneFeild(`${t}:input`, "value");
  V(
    "string.change",
    () => {
      const u = Xe();
      u && [t, `${t}:change`].includes(u) && e.set(s.get || "");
    },
    [s.get, t]
  ), V(
    "string.cancel",
    () => {
      const u = Xe();
      if (u && [t, `${t}:cancel`].includes(u)) {
        const i = e.get || "";
        s.set(i), e.set(i);
      }
    },
    [e.get, t, r]
  );
  const a = A(), l = h.useMemo(() => s.get || "", [s.get]), c = h.useDeferredValue(l);
  return Gt(
    () => {
      r.autoChange && e.set(c);
    },
    [r.autoChange, c],
    200
  ), /* @__PURE__ */ M("div", { className: "flex justify-between items-center gap-3", children: [
    /* @__PURE__ */ o(
      fe,
      {
        maxLength: r.maxLength,
        minLength: r.minLength,
        type: r.locked ? "password" : "text",
        id: t,
        className: "text-xs",
        value: l,
        placeholder: r.hint,
        onValueChange: s.set,
        inputMode: r.mode
      }
    ),
    !(r != null && r.autoChange) && (e.get || "") != (s.get || "") && /* @__PURE__ */ M("div", { className: "flex items-cente gap-x-2", children: [
      /* @__PURE__ */ o(
        J,
        {
          className: "w-fit h-fit",
          id: `${t}:cancel`,
          onClick: () => {
            te("string.cancel");
          },
          style: {
            ...a("gray.opacity.2", {
              color: "text.color"
            })
          },
          children: /* @__PURE__ */ o(Y, { content: "cancel" })
        }
      ),
      /* @__PURE__ */ o(
        J,
        {
          className: "w-fit h-fit",
          id: `${t}:change`,
          onClick: () => {
            te("string.change");
          },
          children: /* @__PURE__ */ o(Y, { content: "set" })
        }
      )
    ] })
  ] });
}
function rn({ state: e, id: r }) {
  const t = F("");
  h.useEffect(() => {
    t.set(e.get || "");
  }, [e.get]);
  const s = F(!1), a = h.useMemo(() => {
    try {
      return new RegExp(t.get), s.set(!0), null;
    } catch (c) {
      return String(c == null ? void 0 : c.message);
    }
  }, [t.get]), l = A();
  return /* @__PURE__ */ M("div", { children: [
    /* @__PURE__ */ M("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ o(
        fe,
        {
          id: `${r}:input`,
          placeholder: "write your regexp here...",
          onFocus: (c) => {
            c.target.select();
          },
          onValueChange: e.set,
          value: e.get
        }
      ),
      !a && /* @__PURE__ */ o(
        J,
        {
          className: "py-1",
          id: `${r}:submit`,
          onClick: () => {
            e.set(t.get), s.set(!1);
          },
          children: "Ok"
        }
      )
    ] }),
    a && /* @__PURE__ */ o(
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
        children: a
      }
    )
  ] });
}
function sn({ id: e, state: r }) {
  const t = F(null), s = F([]), a = h.useRef(null), l = A(), c = F(!1), u = F(!1), i = h.useCallback(async () => {
    const f = [];
    try {
      const y = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      if (y) {
        const n = new MediaRecorder(y);
        n.ondataavailable = (m) => {
          f.push(m.data), s.set(f);
        }, n.onstop = async () => {
          const m = new Blob(f, { type: "audio/mp3" });
          try {
            const d = URL.createObjectURL(m);
            r.set(d);
          } catch {
          }
        }, n.start(), t.set(n);
      } else
        s.set([]), t.set(null), await Ye({
          type: "error",
          title: "No audio stream detected",
          desc: "Please allow the audio stream to record the audio",
          id: "recorder.error",
          showDesc: !0
        });
    } catch (y) {
      s.set([]), t.set(null), await Ye({
        type: "error",
        title: "Error detected",
        desc: String(y.message),
        id: "recorder.error",
        showDesc: !0
      });
    }
  }, []), g = h.useCallback(() => {
    var f;
    (f = t.get) == null || f.stop();
  }, [t.get]);
  h.useEffect(() => () => {
    g();
  }, [g]), h.useEffect(() => {
    a.current && (a.current.onplay = () => {
      u.set(!0);
    }, a.current.onpause = () => {
      u.set(!1);
    }, a.current.onended = () => {
      u.set(!1);
    });
  }, [a.current]);
  const p = F(null);
  return h.useEffect(() => {
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
    r.get && /* @__PURE__ */ M(W, { children: [
      /* @__PURE__ */ o(
        ye,
        {
          icon: ze,
          onClick: async () => {
            const { response: f } = await ue({
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
        ye,
        {
          onClick: () => {
            var f, y;
            u.get ? (y = a.current) == null || y.pause() : (f = a.current) == null || f.play();
          },
          icon: u.get ? hr : gr
        }
      )
    ] }),
    /* @__PURE__ */ o(
      ye,
      {
        id: e,
        style: {
          ...l(
            c.get && {
              backgroundColor: "primary",
              color: "primary.content"
            }
          )
        },
        onClick: async () => {
          if (r.get) {
            const { response: f } = await ue({
              title: "Overwrite audio",
              message: "Are you sure you want to overwrite the audio?",
              type: "warning",
              buttons: ["No", "Yes"]
            });
            if (!f)
              return;
          }
          c.set((f) => !f), c.get ? g() : i();
        },
        icon: c.get ? yr : br
      }
    ),
    r.get && /* @__PURE__ */ o("audio", { ref: a, src: r.get })
  ] }) });
}
function Re({ eays: e = !0, state: r, onFocus: t, onBlur: s, className: a, style: l, value: c, type: u, ...i }) {
  const g = A(), p = F(!1), f = F(!1), y = h.createRef();
  return /* @__PURE__ */ M("div", { className: "relative", children: [
    /* @__PURE__ */ o(
      "input",
      {
        ref: y,
        onFocus: (n) => {
          t == null || t(n), f.set(!0);
        },
        onBlur: (n) => {
          s == null || s(n), f.set(!1);
        },
        type: p.get ? "text" : "password",
        className: O("p-2 text-xs border border-solid border-transparent font-[inherit] whitespace-nowrap rounded-sm w-full", a),
        style: {
          ...g("field.background", {
            borderColor: f.get ? "primary" : "borders"
          }),
          ...l
        },
        onChange: ({ target: n }) => {
          r.set(n.value);
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
          p.set((n) => !n), y.current && (y.current.focus(), y.current.setSelectionRange(0, 1e3, "forward"));
        },
        icon: p.get ? xr : vr
      }
    )
  ] });
}
function nn({ state: e, config: r = {}, id: t }) {
  const s = F(void 0), a = F(void 0), l = F(void 0), c = h.useMemo(() => e.get ? s.get == e.get : !0, [s.get, e.get]), u = h.useMemo(() => a.get == l.get, [a.get, l.get]), i = h.useMemo(() => a.get == e.get, [a.get, e.get]);
  return V(
    "password.change",
    (g) => {
      t == g && (c && u && e.set(a.get), l.set(""), a.set(""), s.set(""));
    },
    [s.get, a.get, l.get, c, u, t]
  ), /* @__PURE__ */ M("div", { className: "flex flex-col gap-1", children: [
    !!e.get && /* @__PURE__ */ o(Re, { id: t, placeholder: "current password", state: s }),
    /* @__PURE__ */ o(Re, { id: e.get ? void 0 : t, placeholder: "new password", state: a }),
    /* @__PURE__ */ o(Re, { placeholder: "confirm password", state: l }),
    !a.get && !r.canEmpty && /* @__PURE__ */ o("span", { className: "p-1", children: /* @__PURE__ */ o(Y, { content: "password cannot be empty" }) }),
    /* @__PURE__ */ o("div", { className: "flex justify-end items-center gap-1", children: c && u && !i && /* @__PURE__ */ o(
      J,
      {
        onClick: () => {
          te("password.change", t);
        },
        icon: wr,
        className: "px-2 py-1",
        children: /* @__PURE__ */ o(Y, { content: "change" })
      }
    ) })
  ] });
}
const on = (e) => `object_${e}`;
function ln({ state: e, id: r }) {
  return /* @__PURE__ */ o("div", { id: r, children: /* @__PURE__ */ o(Y, { content: "The Object Is Defined Before" }) });
}
function an({ state: e, config: r = {}, id: t }) {
  h.useEffect(() => {
    typeof e.get == "number" && (typeof r.max == "number" && r.max < e.get ? e.set(r.max) : typeof r.min == "number" && r.min > e.get && e.set(r.min));
  }, [r.max, r.min, e.get]);
  const s = F(String(e.get)), a = h.createRef();
  h.useEffect(() => {
    var i;
    a.current && (a.current.value = ((i = e.get) == null ? void 0 : i.toString()) || "");
  }, [e.get, a.current]), h.useEffect(() => {
    if (!+s.get) {
      const i = document.getElementById(t);
      i == null || i.select();
    }
  }, [s.get, t]), V(
    "number.changeState",
    (i) => {
      if (i == t)
        if (s.get.length) {
          const g = +s.get;
          e.set(g);
        } else
          e.set(null);
    },
    [s.get, t, a.current]
  ), V(
    "number.cancelChangeState",
    (i) => {
      if (i == t) {
        const g = typeof e.get == "number" ? e.get.toString() : "";
        s.set(g), a.current && (a.current.value = g), de(t);
      }
    },
    [e.get, a, t]
  ), h.useEffect(() => {
    r.autoChange && te("number.changeState", t);
  }, [s.get, r.autoChange]);
  const l = F(!1);
  h.useEffect(() => (l.set(!1), () => {
    l.set(!1);
  }), []);
  const c = h.useMemo(() => !r.autoChange && e.get != +s.get, [r.autoChange, e.get, s.get]), u = A();
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
          fe,
          {
            ref: a,
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
              c && i.key == "Enter" && (i.preventDefault(), i.stopPropagation(), i && te("number.changeState", t));
            },
            onValueChange: s.set
          }
        ) }),
        c && /* @__PURE__ */ M("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ o(
            J,
            {
              className: "py-1",
              onClick: () => {
                te("number.cancelChangeState", t);
              },
              style: {
                ...u("gray.opacity", {
                  color: "text.color"
                })
              },
              children: /* @__PURE__ */ o(Y, { content: "cancel" })
            }
          ),
          /* @__PURE__ */ o(
            J,
            {
              className: "py-1",
              onClick: () => {
                te("number.changeState", t);
              },
              children: /* @__PURE__ */ o(Y, { content: "change" })
            }
          )
        ] })
      ]
    }
  );
}
function je({ children: e, icon: r, className: t, iconClassName: s, isActive: a, style: l, ...c }) {
  const u = F(!1);
  h.useEffect(() => () => {
    u.set(!1);
  }, []);
  const i = A(), g = G("preferences/animation.boolean");
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
          a && "primary",
          a && {
            color: "primary.content"
          },
          {
            borderColor: "borders"
          },
          {
            boxShadow: me([
              {
                colorId: "shadow.color",
                blur: 10,
                size: 1,
                x: 0,
                y: 4
              }
            ])
          }
        ),
        ...l
      },
      className: O("flex items-center justify-center p-2 rounded-[15%] cursor-pointer active:scale-95", g && "transition-[background,color,transform]", t),
      ...c,
      children: [
        /* @__PURE__ */ o(ae, { iconClassName: s, icon: r }),
        e
      ]
    }
  );
}
function cn({ state: e, config: r }) {
  const t = A(), s = G("preferences/animation.boolean"), a = F(!1), l = e.get, c = h.useCallback(
    async (i) => {
      e.set && (e.set(i), a.set(!1));
    },
    [e.set]
  ), u = h.createRef();
  return /* @__PURE__ */ M("div", { className: "flex justify-center", children: [
    /* @__PURE__ */ o("div", { className: "relative", children: /* @__PURE__ */ M(
      "div",
      {
        onClick: () => {
          a.set(!0);
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
          l && /* @__PURE__ */ o(W, { children: /* @__PURE__ */ o("img", { src: l, className: "w-full h-full object-cover" }) }),
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
        className: O("top-1/2 left-1/2 z-[100000000000000000] fixed transform -translate-x-1/2 -translate-y-1/2 scale-0", s && "transition-transform", a.get && "scale-100"),
        children: /* @__PURE__ */ M(Fr, { className: "w-fit", children: [
          /* @__PURE__ */ M("div", { className: "flex justify-between items-center p-3", children: [
            /* @__PURE__ */ o("h1", { className: "text-xl", children: /* @__PURE__ */ o(Y, { content: "Upload Image" }) }),
            /* @__PURE__ */ o("span", { children: /* @__PURE__ */ o(
              ye,
              {
                icon: we.solid.faXmark,
                onClick: () => {
                  a.set(!1);
                }
              }
            ) })
          ] }),
          /* @__PURE__ */ o(De, {}),
          /* @__PURE__ */ M("div", { className: "flex gap-3 p-3 overflow-hidden", children: [
            l && /* @__PURE__ */ o(
              je,
              {
                className: "w-[80px] h-[80px]",
                iconClassName: "w-[40px] h-[40px]",
                onClick: async () => {
                  const { response: i } = await ue({
                    message: "do you want to recenlty this image",
                    title: "confirmation",
                    type: "warning",
                    buttons: ["no", "yes"],
                    defaultId: 1
                  });
                  i && c(null);
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
                    const { response: g } = await ue({
                      message: "do you want to recenlty this image",
                      title: "confirmation",
                      type: "warning",
                      buttons: ["no", "yes"],
                      defaultId: 1
                    });
                    if (!g)
                      return;
                  }
                  const i = document.createElement("input");
                  i.type = "file", i.accept = "image/*", i.onchange = async () => {
                    var g;
                    if ((g = i.files) != null && g.length) {
                      const p = i.files[0], f = new FileReader();
                      f.onload = () => {
                        var y;
                        c(((y = f.result) == null ? void 0 : y.toString()) || null);
                      }, f.readAsDataURL(p);
                    }
                  }, i.click();
                },
                icon: kr
              }
            ),
            /* @__PURE__ */ o(
              je,
              {
                className: "w-[80px] h-[80px]",
                iconClassName: "w-[40px] h-[40px]",
                onClick: async () => {
                  if (l) {
                    const { response: i } = await ue({
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
                    const i = await Jt("take");
                    c(i);
                  } catch (i) {
                    Qt(i, "error");
                  }
                },
                icon: Nr
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
function un() {
  const e = _.getOneFeild("findConfigurations", "value"), r = h.useMemo(() => {
    const s = Object.entries(Er).map(([c, u]) => ({
      iconName: c,
      icon: u,
      type: "solid"
    })), a = Object.entries(Mr).map(([c, u]) => ({ iconName: c, icon: u, type: "regular" })), l = Object.entries(Cr).map(([c, u]) => ({
      iconName: c,
      icon: u,
      type: "brad"
    }));
    return mt.orderBy([...s, ...a, ...l], "iconName", "asc");
  }, []), t = h.useMemo(() => typeof e == "string" ? r.filter(({ iconName: s }) => Be(s, e)) : r, [r, e]);
  return h.useEffect(() => {
    K("configurations.found.length", t.length);
  }, [t]), /* @__PURE__ */ o(
    Pe,
    {
      countLastItems: -1,
      focusId: "icons-list",
      slotId: "icons-list",
      data: t,
      itemSize: 50,
      component: ({ data: s, style: a, status: l, index: c, handel: u }) => {
        const i = F(!1), g = A(), p = h.useMemo(() => [i.get, l.isFocused, l.isSubmited].some(Boolean), [i.get, l]), f = F(!1);
        return /* @__PURE__ */ M(
          "div",
          {
            onMouseEnter: () => i.set(!0),
            onMouseLeave: () => i.set(!1),
            style: {
              ...a,
              ...g(
                c % 2 && "primary.background",
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
                /* @__PURE__ */ o("div", { className: "flex justify-end w-[100px]", children: p && /* @__PURE__ */ o(W, { children: /* @__PURE__ */ o(
                  re,
                  {
                    onMouseLeave: () => {
                      f.set(!1);
                    },
                    icon: f.get ? ce : Ie,
                    onClick: async () => {
                      const { icon: y, ...n } = s;
                      await navigator.clipboard.writeText(n.iconName), f.set(!0);
                    }
                  }
                ) }) }),
                /* @__PURE__ */ M("span", { className: "capitalize", children: [
                  /* @__PURE__ */ o(
                    "span",
                    {
                      className: "px-1 rounded-md",
                      style: {
                        ...g("gray.opacity")
                      },
                      children: s.type
                    }
                  ),
                  /* @__PURE__ */ o("span", { children: " / " }),
                  dt(s.iconName.slice(2), "camel", "normal")
                ] })
              ] }),
              /* @__PURE__ */ o(le, { className: "text-3xl", icon: s.icon })
            ]
          }
        );
      }
    }
  );
}
function dn({ className: e, alt: r, src: t, children: s, style: a, ...l }) {
  const c = A(), u = F(!1);
  return h.useEffect(() => {
  }, []), /* @__PURE__ */ M(
    "div",
    {
      tabIndex: -1,
      ...l,
      className: O("overflow-hidden rounded-full w-[150px] h-[150px] border border-solid border-transparent transition-shadow duration-300 relative text-xs", e),
      style: {
        ...c(u.get && { borderColor: "primary" }),
        ...a
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
        /* @__PURE__ */ o("div", { className: "absolute inset-0 overflow-hidden", children: s })
      ]
    }
  );
}
function fn({ slotId: e, component: r, data: t, skipFn: s }) {
  const a = D.getOneFeild(e, "focused"), l = D.getOneFeild(e, "submited"), c = D.getOneFeild(e, "selected"), u = D.getOneFeild(e, "direction");
  ot(e, t);
  const i = h.useMemo(() => r, []);
  h.useEffect(() => {
    if (typeof a != "number")
      return;
    const p = document.getElementById(Ke(e, a));
    p && !pt(p) && ht(p, u == "backward" ? 0 : -1);
  }, [a, u]);
  const g = h.useMemo(() => {
    if (!s)
      return {};
    const p = {};
    return t.forEach((f, y) => {
      if (s)
        p[y] = !!s(f, y);
      else
        return !1;
    }), p;
  }, [s, t]);
  return h.useEffect(() => {
    D.setOneFeild(e, "skiped", g);
  }, [g]), /* @__PURE__ */ o(W, { children: t.map((p, f) => {
    const y = {
      isFocused: f == a,
      isSelected: !!(c != null && c[f]),
      isSubmited: f == l,
      isSkiped: !!(s && s(p, f))
    };
    return /* @__PURE__ */ o(
      i,
      {
        id: Ke(e, f),
        handelFocus: (n) => (m) => {
          D.setOneFeild(e, "focused", f), n == null || n(m);
        },
        handelSubmit: (n) => (m) => {
          D.setOneFeild(e, "submited", f), n == null || n(m);
        },
        handelSelect: (n) => (m) => {
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
function mn({ pages: e = [], focused: r = 0 }) {
  const t = h.useMemo(() => e[r], [e, r]);
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
            children: /* @__PURE__ */ o(nt, { children: t })
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
function pn({ onClick: e, className: r, children: t, iconClassName: s, ...a }) {
  const l = A();
  return /* @__PURE__ */ o(
    "span",
    {
      onClick: (c) => {
        c.preventDefault(), e == null || e(c);
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
      ...a,
      style: {
        ...l("primary", {
          color: "primary.content"
        })
      },
      children: t
    }
  );
}
function hn({ hidden: e, animted: r, className: t, style: s, children: a, onLoadContent: l, onTransitionEnd: c, ...u }) {
  const i = A(), g = typeof r == "boolean" ? r : G("preferences/animation.boolean"), p = F(e);
  return h.useEffect(() => {
    e || p.set(!1);
  }, [e]), ut(async () => {
    p.get && l && (await gt(100), l());
  }, [p.get, l]), /* @__PURE__ */ o(
    "div",
    {
      className: O(
        "fixed inset-0 bg-opacity-40 flex justify-center items-center z-[100000000000000000]",
        g && "transition-[transform] duration-700",
        !e && "translate-y-0",
        e && "translate-y-full pointer-events-none",
        t
      ),
      style: {
        ...i({
          background: it("to bottom", "shadow.background.from", "shadow.background.to")
        }),
        ...s
      },
      onTransitionEnd: (f) => {
        p.set(e), c == null || c(f);
      },
      ...u,
      children: !p.get && a
    }
  );
}
function gn({ className: e, animted: r, style: t, hidden: s, onLoadContent: a, children: l, onTransitionEnd: c, ...u }) {
  A();
  const i = F(s);
  h.useEffect(() => {
    s || i.set(!1);
  }, [s]);
  const g = h.useRef(null), p = typeof r == "boolean" ? r : G("preferences/animation.boolean");
  return ut(async () => {
    i.get && a && (await gt(100), a());
  }, [i.get, a]), /* @__PURE__ */ o(
    "div",
    {
      ref: g,
      className: O(
        "fixed inset-0 bg-opacity-40 flex justify-center scale-100 items-center z-[100000000000000000]",
        p && "transition-[opacity,transform] duration-300",
        s && "pointer-events-none opacity-0 transform scale-0",
        !s && "opacity-100",
        e
      ),
      onTransitionEnd: (f) => {
        i.set(s), c == null || c(f);
      },
      style: {
        ...t
      },
      ...u,
      children: !i.get && l
    }
  );
}
function yn({ temp: e, animited: r, style: t, children: s, max: a = 0, min: l = 600, position: c = "left", hidden: u = !1, handelResize: i, className: g, ...p }) {
  const f = F(null);
  h.useEffect(() => {
    const k = er(`resizeData.${e}`);
    f.set(k);
  }, []), at(
    () => {
      K(`resizeData.${e}`, f.get);
    },
    [f.get],
    1e3
  );
  const y = h.createRef(), n = ["left", "right"].includes(c) ? "width" : "height";
  let m = 0;
  const d = F(null), w = typeof r == "boolean" ? r : G("preferences/animation.boolean"), x = F(null);
  h.useEffect(() => {
    const k = () => {
      if (!f.get) return;
      const S = typeof l == "number" ? l : l(f.get), v = typeof a == "number" ? a : a(f.get);
      S >= f.get ? (d.set("min"), f.set(S)) : f.get >= v ? (d.set("max"), f.set(v)) : (d.set(null), f.set(f.get)), m = f.get;
    }, T = () => {
      x.set(null);
    };
    return addEventListener("resize", k), addEventListener("pointerup", T), () => {
      removeEventListener("resize", k), removeEventListener("pointerup", T);
    };
  }, [f.get, l, a]);
  const b = A();
  h.useEffect(() => {
    const k = typeof l == "function" ? l(f.get || 0) : l;
    if (!f.get) {
      f.set(k);
      return;
    }
  }, [f.get, l, a]);
  const E = h.useMemo(() => x.get ? "start" : "end", [x.get]);
  return /* @__PURE__ */ M("div", { className: "relative h-full", children: [
    /* @__PURE__ */ o(
      "div",
      {
        style: {
          [n]: u ? "0px" : `${f.get}px`,
          ...t
        },
        ...p,
        className: O("overflow-hidden", g, w && E == "end" && "transition-[width]"),
        ref: y,
        children: s
      }
    ),
    /* @__PURE__ */ o(
      "div",
      {
        className: O("resize-bar absolute transition-all opacity-0 cursor-e-resize z-[1000000] hover:opacity-100", c),
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
              var U;
              k.preventDefault();
              const { pageX: T, pageY: S } = k;
              if (!f)
                return;
              const v = (U = y == null ? void 0 : y.current) == null ? void 0 : U.getBoundingClientRect();
              let C = 0;
              switch (c) {
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
              const j = typeof l == "number" ? l : l(C), L = typeof a == "number" ? a : a(C);
              j >= C ? (d.set("min"), f.set(j)) : C >= L ? (d.set("max"), f.set(L)) : (d.set(null), f.set(C)), m = C, i && i({ ...k, size: m, min: j, max: L });
            },
            className: "resize-overview"
          }
        )
      }
    )
  ] });
}
function bn({ data: e, slotId: r, focusId: t = r, component: s, children: a, handelSkipedItem: l, className: c, direction: u, ref: i, type: g = "horizontal", ...p }) {
  const f = typeof s == "function" ? s : ({ index: b, id: E, handelSubmit: k, handelFocus: T, handelSelect: S, status: v, item: C }) => {
    const j = F(!1), L = h.useMemo(() => j.get, [j.get]), U = b % 2 == 1, N = A();
    return /* @__PURE__ */ M(
      "div",
      {
        id: E,
        "data-is-odd": U,
        onMouseEnter: () => j.set(!0),
        onMouseLeave: () => j.set(!1),
        className: "border border-transparent border-solid cursor-pointer row",
        onClick: k(),
        onPointerDown: T(S()),
        style: {
          ...N(
            U && "secondary.background",
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
          s == null ? void 0 : s.map((B) => /* @__PURE__ */ o("div", { className: "col", children: `${C[B]}` }))
        ]
      }
    );
  }, y = D.useOneFeild(r, "focused"), n = D.useOneFeild(r, "submited"), m = D.useOneFeild(r, "length"), d = D.useOneFeild(r, "selected"), w = D.useOneFeild(r, "direction"), x = h.useMemo(() => f, []);
  return h.useEffect(() => {
    m.set(e.length);
  }, [e]), h.useEffect(() => {
    if (typeof y.get != "number")
      return;
    const b = document.getElementById(`${r}/${y.get}`);
    b && !pt(b) && ht(b, w.get == "backward" ? 0 : -1);
  }, [y.get, w.get]), /* @__PURE__ */ o(st, { className: O("flex flex-col overflow-hidden h-full w-full", c), focusId: t, ...p, children: /* @__PURE__ */ M(nt, { className: O(g == "vertical" && "flex"), children: [
    /* @__PURE__ */ o(W, { children: e.map((b, E) => {
      var T;
      const k = {
        isFocused: E == y.get,
        isSelected: !!((T = d.get) != null && T[E]),
        isSubmited: E == n.get,
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
            n.set(E), S == null || S(v);
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
    a
  ] }) });
}
const xn = ({ state: e, tabs: r = [], direction: t = "horizontal", hideLabelWhereSmalled: s = !0, buttonClassName: a, className: l, style: c, ...u }) => {
  const i = A();
  return /* @__PURE__ */ o(
    "div",
    {
      className: O(
        "flex p-2 border border-transparent border-solid overflow-hidden",
        t == "horizontal" ? "rounded-full gap-x-2 flex-row items-stretch" : "flex-col gap-y-2 rounded-3xl",
        l
      ),
      style: {
        ...i("secondary.background", {
          borderColor: "borders",
          boxShadow: me([
            {
              blur: 5,
              size: 0,
              colorId: "shadow.color",
              x: 0,
              y: 4
            }
          ])
        }),
        ...ke(c)
      },
      ...u,
      children: /* @__PURE__ */ o(
        xe,
        {
          list: r.map(({ label: g, icon: p, value: f }) => {
            const y = e.get == f;
            return /* @__PURE__ */ o(
              J,
              {
                className: O("rounded-full w-fit px-7 py-4", t == "vertical" && "w-full", a),
                style: {
                  ...i(
                    !y && "transparent",
                    !y && {
                      color: "text.color"
                    }
                  )
                },
                icon: p,
                onClick: () => {
                  e.set(f);
                },
                children: /* @__PURE__ */ o("span", { className: O(s && "max-sm:hidden"), children: g })
              },
              f
            );
          }),
          joinComponent: /* @__PURE__ */ o(W, {})
        }
      )
    }
  );
};
function vn() {
  const e = tr(), r = rr(), t = sr(), s = nr(), a = F(null);
  h.useEffect(() => {
    a.set(null);
    const c = setTimeout(() => {
      a.set(r);
    }, 500);
    return () => {
      a.set(null), clearTimeout(c);
    };
  }, [t, s, r]);
  const l = A();
  return /* @__PURE__ */ M(
    "div",
    {
      onTransitionEnd: () => {
        e || he(null);
      },
      className: O(
        "fixed z-[1000000000000000000000] pointer-events-none opacity-0 transition-opacity delay-300 duration-500 p-4",
        a.get && "opacity-100",
        t == "left" && "-translate-x-full",
        t == "center" && "-translate-x-1/2",
        s == "top" && "-translate-y-full",
        s == "center" && "-translate-y-1/2"
      ),
      style: {
        ...ke(
          {
            left: "-1000px",
            top: "-2000px"
          },
          a.get && {
            left: `${a.get[0]}px`,
            top: `${a.get[1]}px`
          }
        )
      },
      children: [
        /* @__PURE__ */ o("span", { className: "inline-block absolute border-8 border-transparent border-solid w-[0px] h-[0px] transform" }),
        /* @__PURE__ */ o(
          "div",
          {
            className: "border border-solid border-transparent rounded-full py-1 px-2",
            style: {
              ...l("secondary.background", {
                borderColor: "borders",
                boxShadow: me([{ colorId: "shadow.color", blur: 30, size: 1, x: 0, y: 10 }])
              })
            },
            children: /* @__PURE__ */ o(_e, { value: String(e) })
          }
        )
      ]
    }
  );
}
function Is({ treeId: e, tree: r = [], component: t, level: s = 0, position: a = "", parent: l }) {
  const c = h.useMemo(() => t, []), u = ne.getOne(e);
  return s == 0 && or(e), h.useEffect(() => {
    if (!u)
      return;
    const i = Array.from(new Set(u.ends)), g = `${a}${u.separator}${r.length}`;
    i.includes(g) || ne.setOneFeild(e, "ends", [...i, g]);
  }, [r, u]), /* @__PURE__ */ o(W, { children: r.map(({ data: i, innerTree: g }, p) => {
    var m, d;
    const f = `${a}${u == null ? void 0 : u.separator}${p}`, y = {
      data: i,
      parent: l
    }, n = {
      isFocused: f == (u == null ? void 0 : u.focused),
      isSelected: !!((m = u == null ? void 0 : u.selected) != null && m[f]),
      isSubmited: (u == null ? void 0 : u.submited) == f,
      isExpanded: !!((d = u == null ? void 0 : u.expanded) != null && d[f])
    };
    return /* @__PURE__ */ M("div", { children: [
      /* @__PURE__ */ o(
        c,
        {
          status: n,
          handels: {
            focus() {
              u && ne.setOneFeild(e, "focused", f);
            },
            select(w, x) {
              u && ne.setOneFeild(
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
              u && ne.setOneFeild(e, "submited", f);
            },
            expand(w, x) {
              u && ne.setOneFeild(e, "expanded", {
                ...w ? {} : u.expanded || {},
                [f]: x
              });
            }
          },
          level: s,
          isFins: !g,
          position: f,
          data: i,
          index: p,
          parent: y,
          innerTree: g
        }
      ),
      Array.isArray(g) && n.isExpanded && /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(Is, { position: f, component: t, tree: g, treeId: e, level: s + 1, parent: y }) })
    ] }, p);
  }) });
}
function wn({ views: e, viewId: r }) {
  const t = lr.getOneFeild(r, "focused"), s = t && e[t];
  return /* @__PURE__ */ o("div", { className: "flex flex-col w-full h-full overflow-hidden", children: s ? /* @__PURE__ */ o(s, {}) : /* @__PURE__ */ o(W, {}) });
}
export {
  qs as A,
  Tr as B,
  ye as C,
  Gs as D,
  Qs as E,
  en as F,
  cn as I,
  bt as K,
  fn as L,
  _e as M,
  an as N,
  ln as O,
  nn as P,
  rn as R,
  tn as S,
  Or as T,
  wn as V,
  sn as a,
  Ls as b,
  Xs as c,
  Vs as d,
  Zs as e,
  Pe as f,
  Ds as g,
  Re as h,
  un as i,
  dn as j,
  Sr as k,
  mn as l,
  pn as m,
  hn as n,
  on as o,
  gn as p,
  yt as q,
  Ks as r,
  Js as s,
  yn as t,
  bn as u,
  je as v,
  xn as w,
  As as x,
  vn as y,
  Is as z
};
