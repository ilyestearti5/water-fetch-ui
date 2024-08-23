import { a as Y, j as b, E as he } from "./EmptyComponent-DdPDoXyL.mjs";
import { a as Z, h as je, u as W, X as Qt, l as Yn, Y as Ea, g as _e, Z as Oa, _ as ur, $ as Ar, j as Hr, a0 as Wn, a1 as Sa, r as fr, a2 as xr, a3 as er, a4 as Ma, a5 as Na, R as dr, G as Er, q as ce, a6 as Hn, a7 as Ta, f as Ne, a8 as Xt, p as Me, a9 as Ia, c as Gt, e as Ue, s as za, K as Qr, n as Ra, aa as M3, b as Ae, ab as ja, ac as _a, d as La, ad as Qn, x as Xn, F as d3, ae as Fa, S as Da, M as Ua, af as Vt, ag as $a, ah as Ya, ai as Wa, aj as Ha, ak as Qa, al as m3, am as Xa, v as Ga } from "./index-2JmIR0gT.mjs";
import { t as $, b as ft, m as dt, j as mt, s as y3, S as R3, e as Gn, k as Vn, i as Va, l as vt, n as Or, p as Kt, o as Kn, q as Zn, c as Ka, a as Jn, h as Za, d as Ja, u as qa, v as Zt } from "./index-xG9JJ5Ch.mjs";
import * as rr from "react";
import O from "react";
import { d as pt, f as P3, g as i3, O as qn, P as eo, Q as ro, R as to, S as e2, T as no, U as ao, l as oo, k as r2, b as so, c as io, V as lo, m as co, x as t2, W as uo, X as fo, Y as mo, Z as vo, _ as po, $ as go, a0 as ho, a1 as bo, a2 as yo, a3 as ko, a4 as wo, a5 as Po } from "./index-Dr7qSHtq.mjs";
import "./firebase-UCiyK4H7.mjs";
function Bo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const J0 = ({ className: e, ...t }) => {
  const r = Z();
  return /* @__PURE__ */ Y(
    "button",
    {
      ...t,
      style: {
        ...r({
          color: "primary"
        })
      },
      className: $("styled-btn", e),
      children: [
        /* @__PURE__ */ Y("span", { className: "styled-btn-content", children: [
          /* @__PURE__ */ b("span", { className: "styled-btn-content-before" }),
          /* @__PURE__ */ b("span", { className: "styled-btn-content-after" }),
          "Hello"
        ] }),
        /* @__PURE__ */ b(
          "span",
          {
            style: {
              ...r("primary", {
                boxShadow: je(
                  [5, 15, 30, 60].map((n) => ({
                    colorId: "primary",
                    blur: n
                  }))
                )
              })
            },
            className: "styled-btn-before"
          }
        ),
        /* @__PURE__ */ b(
          "span",
          {
            className: "styled-btn-after",
            style: {
              ...r("secondry", {
                boxShadow: je(
                  [5, 15, 30, 60].map((n) => ({
                    colorId: "secondry",
                    blur: n
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
function Co({ className: e, style: t, ...r }) {
  const n = Z(), a = W(!1);
  return /* @__PURE__ */ b(
    "a",
    {
      onMouseEnter: () => a.set(!0),
      onMouseLeave: () => a.set(!1),
      className: $(e, "hover:underline"),
      style: {
        ...n(
          a.get && {
            color: "primary"
          }
        )
      },
      ...r
    }
  );
}
const or = (e) => {
  const t = Qt.getEntity(), r = W(!1), n = Yn("system.base"), a = Ea({ model: "gemini-pro" }), o = _e("window/lang.enum");
  O.useEffect(() => {
    r.get && (Oa(), r.set(!1));
  }, [n, r.get]);
  const s = O.useMemo(() => ft(e, "normal", "cabab"), [e]), i = O.useMemo(() => o ? `${o}->${s}` : "", [o, s]), l = O.useMemo(() => {
    var f;
    return (f = t[i]) == null ? void 0 : f.value;
  }, [t, i]);
  return ur(async () => {
    if (!(!o || l || !a || o == "en"))
      try {
        Ar.upsert([
          {
            title: `loading translations for langId=${o}`,
            logId: o,
            type: "INFO"
          }
        ]);
        const { response: f } = await a.generateContent(`translate this text to ${o} :

${e}`);
        Ar.upsert([
          {
            title: `translations for langId=${o} content it is ${Hr.getState().logs.ids.length}`,
            logId: o,
            type: "SUCC"
          }
        ]), r.set(!0), Qt.upsert([{ langId: i, value: f.text() }]);
      } catch (f) {
        Ar.upsert([
          {
            title: f.message,
            logId: o,
            type: "ERR",
            category: "window"
          }
        ]);
      }
  }, [l, i, o, e, a]), O.useMemo(() => l || e, [l, e]);
};
function Ke({ content: e }) {
  const t = or(e);
  return /* @__PURE__ */ b(he, { children: t });
}
function Jt(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jt(Object(r), !0).forEach(function(n) {
      ye(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jt(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sr(e) {
  "@babel/helpers - typeof";
  return sr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sr(e);
}
function Ao(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xo(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Eo(e, t, r) {
  return t && xo(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function ye(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function gt(e, t) {
  return So(e) || No(e, t) || n2(e, t) || Io();
}
function U3(e) {
  return Oo(e) || Mo(e) || n2(e) || To();
}
function Oo(e) {
  if (Array.isArray(e)) return Xr(e);
}
function So(e) {
  if (Array.isArray(e)) return e;
}
function Mo(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function No(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], a = !0, o = !1, s, i;
    try {
      for (r = r.call(e); !(a = (s = r.next()).done) && (n.push(s.value), !(t && n.length === t)); a = !0)
        ;
    } catch (l) {
      o = !0, i = l;
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (o) throw i;
      }
    }
    return n;
  }
}
function n2(e, t) {
  if (e) {
    if (typeof e == "string") return Xr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xr(e, t);
  }
}
function Xr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function To() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Io() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var qt = function() {
}, ht = {}, a2 = {}, o2 = null, s2 = {
  mark: qt,
  measure: qt
};
try {
  typeof window < "u" && (ht = window), typeof document < "u" && (a2 = document), typeof MutationObserver < "u" && (o2 = MutationObserver), typeof performance < "u" && (s2 = performance);
} catch {
}
var zo = ht.navigator || {}, en = zo.userAgent, rn = en === void 0 ? "" : en, Ze = ht, de = a2, tn = o2, H3 = s2;
Ze.document;
var He = !!de.documentElement && !!de.head && typeof de.addEventListener == "function" && typeof de.createElement == "function", i2 = ~rn.indexOf("MSIE") || ~rn.indexOf("Trident/"), Q3, X3, G3, V3, K3, $e = "___FONT_AWESOME___", Gr = 16, l2 = "fa", c2 = "svg-inline--fa", l3 = "data-fa-i2svg", Vr = "data-fa-pseudo-element", Ro = "data-fa-pseudo-element-pending", bt = "data-prefix", yt = "data-icon", nn = "fontawesome-i2svg", jo = "async", _o = ["HTML", "HEAD", "STYLE", "SCRIPT"], u2 = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), fe = "classic", me = "sharp", kt = [fe, me];
function $3(e) {
  return new Proxy(e, {
    get: function(r, n) {
      return n in r ? r[n] : r[fe];
    }
  });
}
var j3 = $3((Q3 = {}, ye(Q3, fe, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  fakd: "kit",
  "fa-kit": "kit",
  "fa-kit-duotone": "kit"
}), ye(Q3, me, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), Q3)), _3 = $3((X3 = {}, ye(X3, fe, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), ye(X3, me, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), X3)), L3 = $3((G3 = {}, ye(G3, fe, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), ye(G3, me, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), G3)), Lo = $3((V3 = {}, ye(V3, fe, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), ye(V3, me, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), V3)), Fo = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, f2 = "fa-layers-text", Do = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, Uo = $3((K3 = {}, ye(K3, fe, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), ye(K3, me, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), K3)), d2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], $o = d2.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Yo = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], o3 = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, F3 = /* @__PURE__ */ new Set();
Object.keys(_3[fe]).map(F3.add.bind(F3));
Object.keys(_3[me]).map(F3.add.bind(F3));
var Wo = [].concat(kt, U3(F3), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", o3.GROUP, o3.SWAP_OPACITY, o3.PRIMARY, o3.SECONDARY]).concat(d2.map(function(e) {
  return "".concat(e, "x");
})).concat($o.map(function(e) {
  return "w-".concat(e);
})), N3 = Ze.FontAwesomeConfig || {};
function Ho(e) {
  var t = de.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Qo(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (de && typeof de.querySelector == "function") {
  var Xo = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  Xo.forEach(function(e) {
    var t = gt(e, 2), r = t[0], n = t[1], a = Qo(Ho(r));
    a != null && (N3[n] = a);
  });
}
var m2 = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: l2,
  replacementClass: c2,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
N3.familyPrefix && (N3.cssPrefix = N3.familyPrefix);
var k3 = U(U({}, m2), N3);
k3.autoReplaceSvg || (k3.observeMutations = !1);
var H = {};
Object.keys(m2).forEach(function(e) {
  Object.defineProperty(H, e, {
    enumerable: !0,
    set: function(r) {
      k3[e] = r, T3.forEach(function(n) {
        return n(H);
      });
    },
    get: function() {
      return k3[e];
    }
  });
});
Object.defineProperty(H, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    k3.cssPrefix = t, T3.forEach(function(r) {
      return r(H);
    });
  },
  get: function() {
    return k3.cssPrefix;
  }
});
Ze.FontAwesomeConfig = H;
var T3 = [];
function Go(e) {
  return T3.push(e), function() {
    T3.splice(T3.indexOf(e), 1);
  };
}
var Xe = Gr, Re = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Vo(e) {
  if (!(!e || !He)) {
    var t = de.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var r = de.head.childNodes, n = null, a = r.length - 1; a > -1; a--) {
      var o = r[a], s = (o.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(s) > -1 && (n = o);
    }
    return de.head.insertBefore(t, n), e;
  }
}
var Ko = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function D3() {
  for (var e = 12, t = ""; e-- > 0; )
    t += Ko[Math.random() * 62 | 0];
  return t;
}
function B3(e) {
  for (var t = [], r = (e || []).length >>> 0; r--; )
    t[r] = e[r];
  return t;
}
function wt(e) {
  return e.classList ? B3(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function v2(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Zo(e) {
  return Object.keys(e || {}).reduce(function(t, r) {
    return t + "".concat(r, '="').concat(v2(e[r]), '" ');
  }, "").trim();
}
function mr(e) {
  return Object.keys(e || {}).reduce(function(t, r) {
    return t + "".concat(r, ": ").concat(e[r].trim(), ";");
  }, "");
}
function Pt(e) {
  return e.size !== Re.size || e.x !== Re.x || e.y !== Re.y || e.rotate !== Re.rotate || e.flipX || e.flipY;
}
function Jo(e) {
  var t = e.transform, r = e.containerWidth, n = e.iconWidth, a = {
    transform: "translate(".concat(r / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), i = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(o, " ").concat(s, " ").concat(i)
  }, m = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: l,
    path: m
  };
}
function qo(e) {
  var t = e.transform, r = e.width, n = r === void 0 ? Gr : r, a = e.height, o = a === void 0 ? Gr : a, s = e.startCentered, i = s === void 0 ? !1 : s, l = "";
  return i && i2 ? l += "translate(".concat(t.x / Xe - n / 2, "em, ").concat(t.y / Xe - o / 2, "em) ") : i ? l += "translate(calc(-50% + ".concat(t.x / Xe, "em), calc(-50% + ").concat(t.y / Xe, "em)) ") : l += "translate(".concat(t.x / Xe, "em, ").concat(t.y / Xe, "em) "), l += "scale(".concat(t.size / Xe * (t.flipX ? -1 : 1), ", ").concat(t.size / Xe * (t.flipY ? -1 : 1), ") "), l += "rotate(".concat(t.rotate, "deg) "), l;
}
var e5 = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function p2() {
  var e = l2, t = c2, r = H.cssPrefix, n = H.replacementClass, a = e5;
  if (r !== e || n !== t) {
    var o = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), i = new RegExp("\\.".concat(t), "g");
    a = a.replace(o, ".".concat(r, "-")).replace(s, "--".concat(r, "-")).replace(i, ".".concat(n));
  }
  return a;
}
var an = !1;
function Sr() {
  H.autoAddCss && !an && (Vo(p2()), an = !0);
}
var r5 = {
  mixout: function() {
    return {
      dom: {
        css: p2,
        insertCss: Sr
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Sr();
      },
      beforeI2svg: function() {
        Sr();
      }
    };
  }
}, Ye = Ze || {};
Ye[$e] || (Ye[$e] = {});
Ye[$e].styles || (Ye[$e].styles = {});
Ye[$e].hooks || (Ye[$e].hooks = {});
Ye[$e].shims || (Ye[$e].shims = []);
var Te = Ye[$e], g2 = [], t5 = function e() {
  de.removeEventListener("DOMContentLoaded", e), ir = 1, g2.map(function(t) {
    return t();
  });
}, ir = !1;
He && (ir = (de.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(de.readyState), ir || de.addEventListener("DOMContentLoaded", t5));
function n5(e) {
  He && (ir ? setTimeout(e, 0) : g2.push(e));
}
function Y3(e) {
  var t = e.tag, r = e.attributes, n = r === void 0 ? {} : r, a = e.children, o = a === void 0 ? [] : a;
  return typeof e == "string" ? v2(e) : "<".concat(t, " ").concat(Zo(n), ">").concat(o.map(Y3).join(""), "</").concat(t, ">");
}
function on(e, t, r) {
  if (e && e[t] && e[t][r])
    return {
      prefix: t,
      iconName: r,
      icon: e[t][r]
    };
}
var Mr = function(t, r, n, a) {
  var o = Object.keys(t), s = o.length, i = r, l, m, f;
  for (n === void 0 ? (l = 1, f = t[o[0]]) : (l = 0, f = n); l < s; l++)
    m = o[l], f = i(f, t[m], m, t);
  return f;
};
function a5(e) {
  for (var t = [], r = 0, n = e.length; r < n; ) {
    var a = e.charCodeAt(r++);
    if (a >= 55296 && a <= 56319 && r < n) {
      var o = e.charCodeAt(r++);
      (o & 64512) == 56320 ? t.push(((a & 1023) << 10) + (o & 1023) + 65536) : (t.push(a), r--);
    } else
      t.push(a);
  }
  return t;
}
function Kr(e) {
  var t = a5(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function o5(e, t) {
  var r = e.length, n = e.charCodeAt(t), a;
  return n >= 55296 && n <= 56319 && r > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (n - 55296) * 1024 + a - 56320 + 65536 : n;
}
function sn(e) {
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r], a = !!n.icon;
    return a ? t[n.iconName] = n.icon : t[r] = n, t;
  }, {});
}
function Zr(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = r.skipHooks, a = n === void 0 ? !1 : n, o = sn(t);
  typeof Te.hooks.addPack == "function" && !a ? Te.hooks.addPack(e, sn(t)) : Te.styles[e] = U(U({}, Te.styles[e] || {}), o), e === "fas" && Zr("fa", t);
}
var Z3, J3, q3, p3 = Te.styles, s5 = Te.shims, i5 = (Z3 = {}, ye(Z3, fe, Object.values(L3[fe])), ye(Z3, me, Object.values(L3[me])), Z3), Bt = null, h2 = {}, b2 = {}, y2 = {}, k2 = {}, w2 = {}, l5 = (J3 = {}, ye(J3, fe, Object.keys(j3[fe])), ye(J3, me, Object.keys(j3[me])), J3);
function c5(e) {
  return ~Wo.indexOf(e);
}
function u5(e, t) {
  var r = t.split("-"), n = r[0], a = r.slice(1).join("-");
  return n === e && a !== "" && !c5(a) ? a : null;
}
var P2 = function() {
  var t = function(o) {
    return Mr(p3, function(s, i, l) {
      return s[l] = Mr(i, o, {}), s;
    }, {});
  };
  h2 = t(function(a, o, s) {
    if (o[3] && (a[o[3]] = s), o[2]) {
      var i = o[2].filter(function(l) {
        return typeof l == "number";
      });
      i.forEach(function(l) {
        a[l.toString(16)] = s;
      });
    }
    return a;
  }), b2 = t(function(a, o, s) {
    if (a[s] = s, o[2]) {
      var i = o[2].filter(function(l) {
        return typeof l == "string";
      });
      i.forEach(function(l) {
        a[l] = s;
      });
    }
    return a;
  }), w2 = t(function(a, o, s) {
    var i = o[2];
    return a[s] = s, i.forEach(function(l) {
      a[l] = s;
    }), a;
  });
  var r = "far" in p3 || H.autoFetchSvg, n = Mr(s5, function(a, o) {
    var s = o[0], i = o[1], l = o[2];
    return i === "far" && !r && (i = "fas"), typeof s == "string" && (a.names[s] = {
      prefix: i,
      iconName: l
    }), typeof s == "number" && (a.unicodes[s.toString(16)] = {
      prefix: i,
      iconName: l
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  y2 = n.names, k2 = n.unicodes, Bt = vr(H.styleDefault, {
    family: H.familyDefault
  });
};
Go(function(e) {
  Bt = vr(e.styleDefault, {
    family: H.familyDefault
  });
});
P2();
function Ct(e, t) {
  return (h2[e] || {})[t];
}
function f5(e, t) {
  return (b2[e] || {})[t];
}
function s3(e, t) {
  return (w2[e] || {})[t];
}
function B2(e) {
  return y2[e] || {
    prefix: null,
    iconName: null
  };
}
function d5(e) {
  var t = k2[e], r = Ct("fas", e);
  return t || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Je() {
  return Bt;
}
var At = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function vr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.family, n = r === void 0 ? fe : r, a = j3[n][e], o = _3[n][e] || _3[n][a], s = e in Te.styles ? e : null;
  return o || s || null;
}
var ln = (q3 = {}, ye(q3, fe, Object.keys(L3[fe])), ye(q3, me, Object.keys(L3[me])), q3);
function pr(e) {
  var t, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.skipLookups, a = n === void 0 ? !1 : n, o = (t = {}, ye(t, fe, "".concat(H.cssPrefix, "-").concat(fe)), ye(t, me, "".concat(H.cssPrefix, "-").concat(me)), t), s = null, i = fe;
  (e.includes(o[fe]) || e.some(function(m) {
    return ln[fe].includes(m);
  })) && (i = fe), (e.includes(o[me]) || e.some(function(m) {
    return ln[me].includes(m);
  })) && (i = me);
  var l = e.reduce(function(m, f) {
    var u = u5(H.cssPrefix, f);
    if (p3[f] ? (f = i5[i].includes(f) ? Lo[i][f] : f, s = f, m.prefix = f) : l5[i].indexOf(f) > -1 ? (s = f, m.prefix = vr(f, {
      family: i
    })) : u ? m.iconName = u : f !== H.replacementClass && f !== o[fe] && f !== o[me] && m.rest.push(f), !a && m.prefix && m.iconName) {
      var p = s === "fa" ? B2(m.iconName) : {}, c = s3(m.prefix, m.iconName);
      p.prefix && (s = null), m.iconName = p.iconName || c || m.iconName, m.prefix = p.prefix || m.prefix, m.prefix === "far" && !p3.far && p3.fas && !H.autoFetchSvg && (m.prefix = "fas");
    }
    return m;
  }, At());
  return (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"), !l.prefix && i === me && (p3.fass || H.autoFetchSvg) && (l.prefix = "fass", l.iconName = s3(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || s === "fa") && (l.prefix = Je() || "fas"), l;
}
var m5 = /* @__PURE__ */ function() {
  function e() {
    Ao(this, e), this.definitions = {};
  }
  return Eo(e, [{
    key: "add",
    value: function() {
      for (var r = this, n = arguments.length, a = new Array(n), o = 0; o < n; o++)
        a[o] = arguments[o];
      var s = a.reduce(this._pullDefinitions, {});
      Object.keys(s).forEach(function(i) {
        r.definitions[i] = U(U({}, r.definitions[i] || {}), s[i]), Zr(i, s[i]);
        var l = L3[fe][i];
        l && Zr(l, s[i]), P2();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(r, n) {
      var a = n.prefix && n.iconName && n.icon ? {
        0: n
      } : n;
      return Object.keys(a).map(function(o) {
        var s = a[o], i = s.prefix, l = s.iconName, m = s.icon, f = m[2];
        r[i] || (r[i] = {}), f.length > 0 && f.forEach(function(u) {
          typeof u == "string" && (r[i][u] = m);
        }), r[i][l] = m;
      }), r;
    }
  }]), e;
}(), cn = [], g3 = {}, b3 = {}, v5 = Object.keys(b3);
function p5(e, t) {
  var r = t.mixoutsTo;
  return cn = e, g3 = {}, Object.keys(b3).forEach(function(n) {
    v5.indexOf(n) === -1 && delete b3[n];
  }), cn.forEach(function(n) {
    var a = n.mixout ? n.mixout() : {};
    if (Object.keys(a).forEach(function(s) {
      typeof a[s] == "function" && (r[s] = a[s]), sr(a[s]) === "object" && Object.keys(a[s]).forEach(function(i) {
        r[s] || (r[s] = {}), r[s][i] = a[s][i];
      });
    }), n.hooks) {
      var o = n.hooks();
      Object.keys(o).forEach(function(s) {
        g3[s] || (g3[s] = []), g3[s].push(o[s]);
      });
    }
    n.provides && n.provides(b3);
  }), r;
}
function Jr(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    n[a - 2] = arguments[a];
  var o = g3[e] || [];
  return o.forEach(function(s) {
    t = s.apply(null, [t].concat(n));
  }), t;
}
function c3(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var a = g3[e] || [];
  a.forEach(function(o) {
    o.apply(null, r);
  });
}
function We() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return b3[e] ? b3[e].apply(null, t) : void 0;
}
function qr(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, r = e.prefix || Je();
  if (t)
    return t = s3(r, t) || t, on(C2.definitions, r, t) || on(Te.styles, r, t);
}
var C2 = new m5(), g5 = function() {
  H.autoReplaceSvg = !1, H.observeMutations = !1, c3("noAuto");
}, h5 = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return He ? (c3("beforeI2svg", t), We("pseudoElements2svg", t), We("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.autoReplaceSvgRoot;
    H.autoReplaceSvg === !1 && (H.autoReplaceSvg = !0), H.observeMutations = !0, n5(function() {
      y5({
        autoReplaceSvgRoot: r
      }), c3("watch", t);
    });
  }
}, b5 = {
  icon: function(t) {
    if (t === null)
      return null;
    if (sr(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: s3(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var r = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], n = vr(t[0]);
      return {
        prefix: n,
        iconName: s3(n, r) || r
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(H.cssPrefix, "-")) > -1 || t.match(Fo))) {
      var a = pr(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: a.prefix || Je(),
        iconName: s3(a.prefix, a.iconName) || a.iconName
      };
    }
    if (typeof t == "string") {
      var o = Je();
      return {
        prefix: o,
        iconName: s3(o, t) || t
      };
    }
  }
}, xe = {
  noAuto: g5,
  config: H,
  dom: h5,
  parse: b5,
  library: C2,
  findIconDefinition: qr,
  toHtml: Y3
}, y5 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.autoReplaceSvgRoot, n = r === void 0 ? de : r;
  (Object.keys(Te.styles).length > 0 || H.autoFetchSvg) && He && H.autoReplaceSvg && xe.dom.i2svg({
    node: n
  });
};
function gr(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(n) {
        return Y3(n);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (He) {
        var n = de.createElement("div");
        return n.innerHTML = e.html, n.children;
      }
    }
  }), e;
}
function k5(e) {
  var t = e.children, r = e.main, n = e.mask, a = e.attributes, o = e.styles, s = e.transform;
  if (Pt(s) && r.found && !n.found) {
    var i = r.width, l = r.height, m = {
      x: i / l / 2,
      y: 0.5
    };
    a.style = mr(U(U({}, o), {}, {
      "transform-origin": "".concat(m.x + s.x / 16, "em ").concat(m.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function w5(e) {
  var t = e.prefix, r = e.iconName, n = e.children, a = e.attributes, o = e.symbol, s = o === !0 ? "".concat(t, "-").concat(H.cssPrefix, "-").concat(r) : o;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: U(U({}, a), {}, {
        id: s
      }),
      children: n
    }]
  }];
}
function xt(e) {
  var t = e.icons, r = t.main, n = t.mask, a = e.prefix, o = e.iconName, s = e.transform, i = e.symbol, l = e.title, m = e.maskId, f = e.titleId, u = e.extra, p = e.watchable, c = p === void 0 ? !1 : p, d = n.found ? n : r, v = d.width, h = d.height, y = a === "fak", A = [H.replacementClass, o ? "".concat(H.cssPrefix, "-").concat(o) : ""].filter(function(S) {
    return u.classes.indexOf(S) === -1;
  }).filter(function(S) {
    return S !== "" || !!S;
  }).concat(u.classes).join(" "), C = {
    children: [],
    attributes: U(U({}, u.attributes), {}, {
      "data-prefix": a,
      "data-icon": o,
      class: A,
      role: u.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(v, " ").concat(h)
    })
  }, g = y && !~u.classes.indexOf("fa-fw") ? {
    width: "".concat(v / h * 16 * 0.0625, "em")
  } : {};
  c && (C.attributes[l3] = ""), l && (C.children.push({
    tag: "title",
    attributes: {
      id: C.attributes["aria-labelledby"] || "title-".concat(f || D3())
    },
    children: [l]
  }), delete C.attributes.title);
  var w = U(U({}, C), {}, {
    prefix: a,
    iconName: o,
    main: r,
    mask: n,
    maskId: m,
    transform: s,
    symbol: i,
    styles: U(U({}, g), u.styles)
  }), B = n.found && r.found ? We("generateAbstractMask", w) || {
    children: [],
    attributes: {}
  } : We("generateAbstractIcon", w) || {
    children: [],
    attributes: {}
  }, k = B.children, E = B.attributes;
  return w.children = k, w.attributes = E, i ? w5(w) : k5(w);
}
function un(e) {
  var t = e.content, r = e.width, n = e.height, a = e.transform, o = e.title, s = e.extra, i = e.watchable, l = i === void 0 ? !1 : i, m = U(U(U({}, s.attributes), o ? {
    title: o
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  l && (m[l3] = "");
  var f = U({}, s.styles);
  Pt(a) && (f.transform = qo({
    transform: a,
    startCentered: !0,
    width: r,
    height: n
  }), f["-webkit-transform"] = f.transform);
  var u = mr(f);
  u.length > 0 && (m.style = u);
  var p = [];
  return p.push({
    tag: "span",
    attributes: m,
    children: [t]
  }), o && p.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [o]
  }), p;
}
function P5(e) {
  var t = e.content, r = e.title, n = e.extra, a = U(U(U({}, n.attributes), r ? {
    title: r
  } : {}), {}, {
    class: n.classes.join(" ")
  }), o = mr(n.styles);
  o.length > 0 && (a.style = o);
  var s = [];
  return s.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), r && s.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [r]
  }), s;
}
var Nr = Te.styles;
function et(e) {
  var t = e[0], r = e[1], n = e.slice(4), a = gt(n, 1), o = a[0], s = null;
  return Array.isArray(o) ? s = {
    tag: "g",
    attributes: {
      class: "".concat(H.cssPrefix, "-").concat(o3.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(H.cssPrefix, "-").concat(o3.SECONDARY),
        fill: "currentColor",
        d: o[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(H.cssPrefix, "-").concat(o3.PRIMARY),
        fill: "currentColor",
        d: o[1]
      }
    }]
  } : s = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: o
    }
  }, {
    found: !0,
    width: t,
    height: r,
    icon: s
  };
}
var B5 = {
  found: !1,
  width: 512,
  height: 512
};
function C5(e, t) {
  !u2 && !H.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function rt(e, t) {
  var r = t;
  return t === "fa" && H.styleDefault !== null && (t = Je()), new Promise(function(n, a) {
    if (We("missingIconAbstract"), r === "fa") {
      var o = B2(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && Nr[t] && Nr[t][e]) {
      var s = Nr[t][e];
      return n(et(s));
    }
    C5(e, t), n(U(U({}, B5), {}, {
      icon: H.showMissingIcons && e ? We("missingIconAbstract") || {} : {}
    }));
  });
}
var fn = function() {
}, tt = H.measurePerformance && H3 && H3.mark && H3.measure ? H3 : {
  mark: fn,
  measure: fn
}, S3 = 'FA "6.5.2"', A5 = function(t) {
  return tt.mark("".concat(S3, " ").concat(t, " begins")), function() {
    return A2(t);
  };
}, A2 = function(t) {
  tt.mark("".concat(S3, " ").concat(t, " ends")), tt.measure("".concat(S3, " ").concat(t), "".concat(S3, " ").concat(t, " begins"), "".concat(S3, " ").concat(t, " ends"));
}, Et = {
  begin: A5,
  end: A2
}, tr = function() {
};
function dn(e) {
  var t = e.getAttribute ? e.getAttribute(l3) : null;
  return typeof t == "string";
}
function x5(e) {
  var t = e.getAttribute ? e.getAttribute(bt) : null, r = e.getAttribute ? e.getAttribute(yt) : null;
  return t && r;
}
function E5(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(H.replacementClass);
}
function O5() {
  if (H.autoReplaceSvg === !0)
    return nr.replace;
  var e = nr[H.autoReplaceSvg];
  return e || nr.replace;
}
function S5(e) {
  return de.createElementNS("http://www.w3.org/2000/svg", e);
}
function M5(e) {
  return de.createElement(e);
}
function x2(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.ceFn, n = r === void 0 ? e.tag === "svg" ? S5 : M5 : r;
  if (typeof e == "string")
    return de.createTextNode(e);
  var a = n(e.tag);
  Object.keys(e.attributes || []).forEach(function(s) {
    a.setAttribute(s, e.attributes[s]);
  });
  var o = e.children || [];
  return o.forEach(function(s) {
    a.appendChild(x2(s, {
      ceFn: n
    }));
  }), a;
}
function N5(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var nr = {
  replace: function(t) {
    var r = t[0];
    if (r.parentNode)
      if (t[1].forEach(function(a) {
        r.parentNode.insertBefore(x2(a), r);
      }), r.getAttribute(l3) === null && H.keepOriginalSource) {
        var n = de.createComment(N5(r));
        r.parentNode.replaceChild(n, r);
      } else
        r.remove();
  },
  nest: function(t) {
    var r = t[0], n = t[1];
    if (~wt(r).indexOf(H.replacementClass))
      return nr.replace(t);
    var a = new RegExp("".concat(H.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      var o = n[0].attributes.class.split(" ").reduce(function(i, l) {
        return l === H.replacementClass || l.match(a) ? i.toSvg.push(l) : i.toNode.push(l), i;
      }, {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? r.removeAttribute("class") : r.setAttribute("class", o.toNode.join(" "));
    }
    var s = n.map(function(i) {
      return Y3(i);
    }).join(`
`);
    r.setAttribute(l3, ""), r.innerHTML = s;
  }
};
function mn(e) {
  e();
}
function E2(e, t) {
  var r = typeof t == "function" ? t : tr;
  if (e.length === 0)
    r();
  else {
    var n = mn;
    H.mutateApproach === jo && (n = Ze.requestAnimationFrame || mn), n(function() {
      var a = O5(), o = Et.begin("mutate");
      e.map(a), o(), r();
    });
  }
}
var Ot = !1;
function O2() {
  Ot = !0;
}
function nt() {
  Ot = !1;
}
var lr = null;
function vn(e) {
  if (tn && H.observeMutations) {
    var t = e.treeCallback, r = t === void 0 ? tr : t, n = e.nodeCallback, a = n === void 0 ? tr : n, o = e.pseudoElementsCallback, s = o === void 0 ? tr : o, i = e.observeMutationsRoot, l = i === void 0 ? de : i;
    lr = new tn(function(m) {
      if (!Ot) {
        var f = Je();
        B3(m).forEach(function(u) {
          if (u.type === "childList" && u.addedNodes.length > 0 && !dn(u.addedNodes[0]) && (H.searchPseudoElements && s(u.target), r(u.target)), u.type === "attributes" && u.target.parentNode && H.searchPseudoElements && s(u.target.parentNode), u.type === "attributes" && dn(u.target) && ~Yo.indexOf(u.attributeName))
            if (u.attributeName === "class" && x5(u.target)) {
              var p = pr(wt(u.target)), c = p.prefix, d = p.iconName;
              u.target.setAttribute(bt, c || f), d && u.target.setAttribute(yt, d);
            } else E5(u.target) && a(u.target);
        });
      }
    }), He && lr.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function T5() {
  lr && lr.disconnect();
}
function I5(e) {
  var t = e.getAttribute("style"), r = [];
  return t && (r = t.split(";").reduce(function(n, a) {
    var o = a.split(":"), s = o[0], i = o.slice(1);
    return s && i.length > 0 && (n[s] = i.join(":").trim()), n;
  }, {})), r;
}
function z5(e) {
  var t = e.getAttribute("data-prefix"), r = e.getAttribute("data-icon"), n = e.innerText !== void 0 ? e.innerText.trim() : "", a = pr(wt(e));
  return a.prefix || (a.prefix = Je()), t && r && (a.prefix = t, a.iconName = r), a.iconName && a.prefix || (a.prefix && n.length > 0 && (a.iconName = f5(a.prefix, e.innerText) || Ct(a.prefix, Kr(e.innerText))), !a.iconName && H.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function R5(e) {
  var t = B3(e.attributes).reduce(function(a, o) {
    return a.name !== "class" && a.name !== "style" && (a[o.name] = o.value), a;
  }, {}), r = e.getAttribute("title"), n = e.getAttribute("data-fa-title-id");
  return H.autoA11y && (r ? t["aria-labelledby"] = "".concat(H.replacementClass, "-title-").concat(n || D3()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function j5() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Re,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function pn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, r = z5(e), n = r.iconName, a = r.prefix, o = r.rest, s = R5(e), i = Jr("parseNodeAttributes", {}, e), l = t.styleParser ? I5(e) : [];
  return U({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: Re,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: o,
      styles: l,
      attributes: s
    }
  }, i);
}
var _5 = Te.styles;
function S2(e) {
  var t = H.autoReplaceSvg === "nest" ? pn(e, {
    styleParser: !1
  }) : pn(e);
  return ~t.extra.classes.indexOf(f2) ? We("generateLayersText", e, t) : We("generateSvgReplacementMutation", e, t);
}
var qe = /* @__PURE__ */ new Set();
kt.map(function(e) {
  qe.add("fa-".concat(e));
});
Object.keys(j3[fe]).map(qe.add.bind(qe));
Object.keys(j3[me]).map(qe.add.bind(qe));
qe = U3(qe);
function gn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!He) return Promise.resolve();
  var r = de.documentElement.classList, n = function(u) {
    return r.add("".concat(nn, "-").concat(u));
  }, a = function(u) {
    return r.remove("".concat(nn, "-").concat(u));
  }, o = H.autoFetchSvg ? qe : kt.map(function(f) {
    return "fa-".concat(f);
  }).concat(Object.keys(_5));
  o.includes("fa") || o.push("fa");
  var s = [".".concat(f2, ":not([").concat(l3, "])")].concat(o.map(function(f) {
    return ".".concat(f, ":not([").concat(l3, "])");
  })).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  var i = [];
  try {
    i = B3(e.querySelectorAll(s));
  } catch {
  }
  if (i.length > 0)
    n("pending"), a("complete");
  else
    return Promise.resolve();
  var l = Et.begin("onTree"), m = i.reduce(function(f, u) {
    try {
      var p = S2(u);
      p && f.push(p);
    } catch (c) {
      u2 || c.name === "MissingIcon" && console.error(c);
    }
    return f;
  }, []);
  return new Promise(function(f, u) {
    Promise.all(m).then(function(p) {
      E2(p, function() {
        n("active"), n("complete"), a("pending"), typeof t == "function" && t(), l(), f();
      });
    }).catch(function(p) {
      l(), u(p);
    });
  });
}
function L5(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  S2(e).then(function(r) {
    r && E2([r], t);
  });
}
function F5(e) {
  return function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (t || {}).icon ? t : qr(t || {}), a = r.mask;
    return a && (a = (a || {}).icon ? a : qr(a || {})), e(n, U(U({}, r), {}, {
      mask: a
    }));
  };
}
var D5 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.transform, a = n === void 0 ? Re : n, o = r.symbol, s = o === void 0 ? !1 : o, i = r.mask, l = i === void 0 ? null : i, m = r.maskId, f = m === void 0 ? null : m, u = r.title, p = u === void 0 ? null : u, c = r.titleId, d = c === void 0 ? null : c, v = r.classes, h = v === void 0 ? [] : v, y = r.attributes, A = y === void 0 ? {} : y, C = r.styles, g = C === void 0 ? {} : C;
  if (t) {
    var w = t.prefix, B = t.iconName, k = t.icon;
    return gr(U({
      type: "icon"
    }, t), function() {
      return c3("beforeDOMElementCreation", {
        iconDefinition: t,
        params: r
      }), H.autoA11y && (p ? A["aria-labelledby"] = "".concat(H.replacementClass, "-title-").concat(d || D3()) : (A["aria-hidden"] = "true", A.focusable = "false")), xt({
        icons: {
          main: et(k),
          mask: l ? et(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: w,
        iconName: B,
        transform: U(U({}, Re), a),
        symbol: s,
        title: p,
        maskId: f,
        titleId: d,
        extra: {
          attributes: A,
          styles: g,
          classes: h
        }
      });
    });
  }
}, U5 = {
  mixout: function() {
    return {
      icon: F5(D5)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.treeCallback = gn, r.nodeCallback = L5, r;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(r) {
      var n = r.node, a = n === void 0 ? de : n, o = r.callback, s = o === void 0 ? function() {
      } : o;
      return gn(a, s);
    }, t.generateSvgReplacementMutation = function(r, n) {
      var a = n.iconName, o = n.title, s = n.titleId, i = n.prefix, l = n.transform, m = n.symbol, f = n.mask, u = n.maskId, p = n.extra;
      return new Promise(function(c, d) {
        Promise.all([rt(a, i), f.iconName ? rt(f.iconName, f.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(v) {
          var h = gt(v, 2), y = h[0], A = h[1];
          c([r, xt({
            icons: {
              main: y,
              mask: A
            },
            prefix: i,
            iconName: a,
            transform: l,
            symbol: m,
            maskId: u,
            title: o,
            titleId: s,
            extra: p,
            watchable: !0
          })]);
        }).catch(d);
      });
    }, t.generateAbstractIcon = function(r) {
      var n = r.children, a = r.attributes, o = r.main, s = r.transform, i = r.styles, l = mr(i);
      l.length > 0 && (a.style = l);
      var m;
      return Pt(s) && (m = We("generateAbstractTransformGrouping", {
        main: o,
        transform: s,
        containerWidth: o.width,
        iconWidth: o.width
      })), n.push(m || o.icon), {
        children: n,
        attributes: a
      };
    };
  }
}, $5 = {
  mixout: function() {
    return {
      layer: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.classes, o = a === void 0 ? [] : a;
        return gr({
          type: "layer"
        }, function() {
          c3("beforeDOMElementCreation", {
            assembler: r,
            params: n
          });
          var s = [];
          return r(function(i) {
            Array.isArray(i) ? i.map(function(l) {
              s = s.concat(l.abstract);
            }) : s = s.concat(i.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(H.cssPrefix, "-layers")].concat(U3(o)).join(" ")
            },
            children: s
          }];
        });
      }
    };
  }
}, Y5 = {
  mixout: function() {
    return {
      counter: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.title, o = a === void 0 ? null : a, s = n.classes, i = s === void 0 ? [] : s, l = n.attributes, m = l === void 0 ? {} : l, f = n.styles, u = f === void 0 ? {} : f;
        return gr({
          type: "counter",
          content: r
        }, function() {
          return c3("beforeDOMElementCreation", {
            content: r,
            params: n
          }), P5({
            content: r.toString(),
            title: o,
            extra: {
              attributes: m,
              styles: u,
              classes: ["".concat(H.cssPrefix, "-layers-counter")].concat(U3(i))
            }
          });
        });
      }
    };
  }
}, W5 = {
  mixout: function() {
    return {
      text: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.transform, o = a === void 0 ? Re : a, s = n.title, i = s === void 0 ? null : s, l = n.classes, m = l === void 0 ? [] : l, f = n.attributes, u = f === void 0 ? {} : f, p = n.styles, c = p === void 0 ? {} : p;
        return gr({
          type: "text",
          content: r
        }, function() {
          return c3("beforeDOMElementCreation", {
            content: r,
            params: n
          }), un({
            content: r,
            transform: U(U({}, Re), o),
            title: i,
            extra: {
              attributes: u,
              styles: c,
              classes: ["".concat(H.cssPrefix, "-layers-text")].concat(U3(m))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(r, n) {
      var a = n.title, o = n.transform, s = n.extra, i = null, l = null;
      if (i2) {
        var m = parseInt(getComputedStyle(r).fontSize, 10), f = r.getBoundingClientRect();
        i = f.width / m, l = f.height / m;
      }
      return H.autoA11y && !a && (s.attributes["aria-hidden"] = "true"), Promise.resolve([r, un({
        content: r.innerHTML,
        width: i,
        height: l,
        transform: o,
        title: a,
        extra: s,
        watchable: !0
      })]);
    };
  }
}, H5 = new RegExp('"', "ug"), hn = [1105920, 1112319];
function Q5(e) {
  var t = e.replace(H5, ""), r = o5(t, 0), n = r >= hn[0] && r <= hn[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Kr(a ? t[0] : t),
    isSecondary: n || a
  };
}
function bn(e, t) {
  var r = "".concat(Ro).concat(t.replace(":", "-"));
  return new Promise(function(n, a) {
    if (e.getAttribute(r) !== null)
      return n();
    var o = B3(e.children), s = o.filter(function(k) {
      return k.getAttribute(Vr) === t;
    })[0], i = Ze.getComputedStyle(e, t), l = i.getPropertyValue("font-family").match(Do), m = i.getPropertyValue("font-weight"), f = i.getPropertyValue("content");
    if (s && !l)
      return e.removeChild(s), n();
    if (l && f !== "none" && f !== "") {
      var u = i.getPropertyValue("content"), p = ~["Sharp"].indexOf(l[2]) ? me : fe, c = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? _3[p][l[2].toLowerCase()] : Uo[p][m], d = Q5(u), v = d.value, h = d.isSecondary, y = l[0].startsWith("FontAwesome"), A = Ct(c, v), C = A;
      if (y) {
        var g = d5(v);
        g.iconName && g.prefix && (A = g.iconName, c = g.prefix);
      }
      if (A && !h && (!s || s.getAttribute(bt) !== c || s.getAttribute(yt) !== C)) {
        e.setAttribute(r, C), s && e.removeChild(s);
        var w = j5(), B = w.extra;
        B.attributes[Vr] = t, rt(A, c).then(function(k) {
          var E = xt(U(U({}, w), {}, {
            icons: {
              main: k,
              mask: At()
            },
            prefix: c,
            iconName: C,
            extra: B,
            watchable: !0
          })), S = de.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(S, e.firstChild) : e.appendChild(S), S.outerHTML = E.map(function(I) {
            return Y3(I);
          }).join(`
`), e.removeAttribute(r), n();
        }).catch(a);
      } else
        n();
    } else
      n();
  });
}
function X5(e) {
  return Promise.all([bn(e, "::before"), bn(e, "::after")]);
}
function G5(e) {
  return e.parentNode !== document.head && !~_o.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Vr) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function yn(e) {
  if (He)
    return new Promise(function(t, r) {
      var n = B3(e.querySelectorAll("*")).filter(G5).map(X5), a = Et.begin("searchPseudoElements");
      O2(), Promise.all(n).then(function() {
        a(), nt(), t();
      }).catch(function() {
        a(), nt(), r();
      });
    });
}
var V5 = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.pseudoElementsCallback = yn, r;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(r) {
      var n = r.node, a = n === void 0 ? de : n;
      H.searchPseudoElements && yn(a);
    };
  }
}, kn = !1, K5 = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          O2(), kn = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        vn(Jr("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        T5();
      },
      watch: function(r) {
        var n = r.observeMutationsRoot;
        kn ? nt() : vn(Jr("mutationObserverCallbacks", {
          observeMutationsRoot: n
        }));
      }
    };
  }
}, wn = function(t) {
  var r = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(n, a) {
    var o = a.toLowerCase().split("-"), s = o[0], i = o.slice(1).join("-");
    if (s && i === "h")
      return n.flipX = !0, n;
    if (s && i === "v")
      return n.flipY = !0, n;
    if (i = parseFloat(i), isNaN(i))
      return n;
    switch (s) {
      case "grow":
        n.size = n.size + i;
        break;
      case "shrink":
        n.size = n.size - i;
        break;
      case "left":
        n.x = n.x - i;
        break;
      case "right":
        n.x = n.x + i;
        break;
      case "up":
        n.y = n.y - i;
        break;
      case "down":
        n.y = n.y + i;
        break;
      case "rotate":
        n.rotate = n.rotate + i;
        break;
    }
    return n;
  }, r);
}, Z5 = {
  mixout: function() {
    return {
      parse: {
        transform: function(r) {
          return wn(r);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var a = n.getAttribute("data-fa-transform");
        return a && (r.transform = wn(a)), r;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(r) {
      var n = r.main, a = r.transform, o = r.containerWidth, s = r.iconWidth, i = {
        transform: "translate(".concat(o / 2, " 256)")
      }, l = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), m = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), f = "rotate(".concat(a.rotate, " 0 0)"), u = {
        transform: "".concat(l, " ").concat(m, " ").concat(f)
      }, p = {
        transform: "translate(".concat(s / 2 * -1, " -256)")
      }, c = {
        outer: i,
        inner: u,
        path: p
      };
      return {
        tag: "g",
        attributes: U({}, c.outer),
        children: [{
          tag: "g",
          attributes: U({}, c.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: U(U({}, n.icon.attributes), c.path)
          }]
        }]
      };
    };
  }
}, Tr = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Pn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function J5(e) {
  return e.tag === "g" ? e.children : [e];
}
var q5 = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var a = n.getAttribute("data-fa-mask"), o = a ? pr(a.split(" ").map(function(s) {
          return s.trim();
        })) : At();
        return o.prefix || (o.prefix = Je()), r.mask = o, r.maskId = n.getAttribute("data-fa-mask-id"), r;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(r) {
      var n = r.children, a = r.attributes, o = r.main, s = r.mask, i = r.maskId, l = r.transform, m = o.width, f = o.icon, u = s.width, p = s.icon, c = Jo({
        transform: l,
        containerWidth: u,
        iconWidth: m
      }), d = {
        tag: "rect",
        attributes: U(U({}, Tr), {}, {
          fill: "white"
        })
      }, v = f.children ? {
        children: f.children.map(Pn)
      } : {}, h = {
        tag: "g",
        attributes: U({}, c.inner),
        children: [Pn(U({
          tag: f.tag,
          attributes: U(U({}, f.attributes), c.path)
        }, v))]
      }, y = {
        tag: "g",
        attributes: U({}, c.outer),
        children: [h]
      }, A = "mask-".concat(i || D3()), C = "clip-".concat(i || D3()), g = {
        tag: "mask",
        attributes: U(U({}, Tr), {}, {
          id: A,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [d, y]
      }, w = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: C
          },
          children: J5(p)
        }, g]
      };
      return n.push(w, {
        tag: "rect",
        attributes: U({
          fill: "currentColor",
          "clip-path": "url(#".concat(C, ")"),
          mask: "url(#".concat(A, ")")
        }, Tr)
      }), {
        children: n,
        attributes: a
      };
    };
  }
}, es = {
  provides: function(t) {
    var r = !1;
    Ze.matchMedia && (r = Ze.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var n = [], a = {
        fill: "currentColor"
      }, o = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: U(U({}, a), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var s = U(U({}, o), {}, {
        attributeName: "opacity"
      }), i = {
        tag: "circle",
        attributes: U(U({}, a), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return r || i.children.push({
        tag: "animate",
        attributes: U(U({}, o), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: U(U({}, s), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(i), n.push({
        tag: "path",
        attributes: U(U({}, a), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: r ? [] : [{
          tag: "animate",
          attributes: U(U({}, s), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), r || n.push({
        tag: "path",
        attributes: U(U({}, a), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: U(U({}, s), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, rs = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var a = n.getAttribute("data-fa-symbol"), o = a === null ? !1 : a === "" ? !0 : a;
        return r.symbol = o, r;
      }
    };
  }
}, ts = [r5, U5, $5, Y5, W5, V5, K5, Z5, q5, es, rs];
p5(ts, {
  mixoutsTo: xe
});
xe.noAuto;
xe.config;
xe.library;
xe.dom;
var at = xe.parse;
xe.findIconDefinition;
xe.toHtml;
var ns = xe.icon;
xe.layer;
xe.text;
xe.counter;
var ot = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ir, Bn;
function as() {
  if (Bn) return Ir;
  Bn = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var s = {}, i = 0; i < 10; i++)
        s["_" + String.fromCharCode(i)] = i;
      var l = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var m = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        m[f] = f;
      }), Object.keys(Object.assign({}, m)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ir = a() ? Object.assign : function(o, s) {
    for (var i, l = n(o), m, f = 1; f < arguments.length; f++) {
      i = Object(arguments[f]);
      for (var u in i)
        t.call(i, u) && (l[u] = i[u]);
      if (e) {
        m = e(i);
        for (var p = 0; p < m.length; p++)
          r.call(i, m[p]) && (l[m[p]] = i[m[p]]);
      }
    }
    return l;
  }, Ir;
}
var zr, Cn;
function St() {
  if (Cn) return zr;
  Cn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return zr = e, zr;
}
var Rr, An;
function M2() {
  return An || (An = 1, Rr = Function.call.bind(Object.prototype.hasOwnProperty)), Rr;
}
var jr, xn;
function os() {
  if (xn) return jr;
  xn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = St(), r = {}, n = M2();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(o, s, i, l, m) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in o)
        if (n(o, f)) {
          var u;
          try {
            if (typeof o[f] != "function") {
              var p = Error(
                (l || "React class") + ": " + i + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            u = o[f](s, f, l, i, null, t);
          } catch (d) {
            u = d;
          }
          if (u && !(u instanceof Error) && e(
            (l || "React class") + ": type specification of " + i + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in r)) {
            r[u.message] = !0;
            var c = m ? m() : "";
            e(
              "Failed " + i + " type: " + u.message + (c ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, jr = a, jr;
}
var _r, En;
function ss() {
  if (En) return _r;
  En = 1;
  var e = Wn(), t = as(), r = St(), n = M2(), a = os(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(i) {
    var l = "Warning: " + i;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return _r = function(i, l) {
    var m = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function u(M) {
      var N = M && (m && M[m] || M[f]);
      if (typeof N == "function")
        return N;
    }
    var p = "<<anonymous>>", c = {
      array: y("array"),
      bigint: y("bigint"),
      bool: y("boolean"),
      func: y("function"),
      number: y("number"),
      object: y("object"),
      string: y("string"),
      symbol: y("symbol"),
      any: A(),
      arrayOf: C,
      element: g(),
      elementType: w(),
      instanceOf: B,
      node: I(),
      objectOf: E,
      oneOf: k,
      oneOfType: S,
      shape: x,
      exact: R
    };
    function d(M, N) {
      return M === N ? M !== 0 || 1 / M === 1 / N : M !== M && N !== N;
    }
    function v(M, N) {
      this.message = M, this.data = N && typeof N == "object" ? N : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function h(M) {
      if (process.env.NODE_ENV !== "production")
        var N = {}, X = 0;
      function K(ne, V, G, re, ee, ae, ve) {
        if (re = re || p, ae = ae || G, ve !== r) {
          if (l) {
            var be = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw be.name = "Invariant Violation", be;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ce = re + ":" + G;
            !N[Ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            X < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + ae + "` prop on `" + re + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), N[Ce] = !0, X++);
          }
        }
        return V[G] == null ? ne ? V[G] === null ? new v("The " + ee + " `" + ae + "` is marked as required " + ("in `" + re + "`, but its value is `null`.")) : new v("The " + ee + " `" + ae + "` is marked as required in " + ("`" + re + "`, but its value is `undefined`.")) : null : M(V, G, re, ee, ae);
      }
      var _ = K.bind(null, !1);
      return _.isRequired = K.bind(null, !0), _;
    }
    function y(M) {
      function N(X, K, _, ne, V, G) {
        var re = X[K], ee = Q(re);
        if (ee !== M) {
          var ae = D(re);
          return new v(
            "Invalid " + ne + " `" + V + "` of type " + ("`" + ae + "` supplied to `" + _ + "`, expected ") + ("`" + M + "`."),
            { expectedType: M }
          );
        }
        return null;
      }
      return h(N);
    }
    function A() {
      return h(s);
    }
    function C(M) {
      function N(X, K, _, ne, V) {
        if (typeof M != "function")
          return new v("Property `" + V + "` of component `" + _ + "` has invalid PropType notation inside arrayOf.");
        var G = X[K];
        if (!Array.isArray(G)) {
          var re = Q(G);
          return new v("Invalid " + ne + " `" + V + "` of type " + ("`" + re + "` supplied to `" + _ + "`, expected an array."));
        }
        for (var ee = 0; ee < G.length; ee++) {
          var ae = M(G, ee, _, ne, V + "[" + ee + "]", r);
          if (ae instanceof Error)
            return ae;
        }
        return null;
      }
      return h(N);
    }
    function g() {
      function M(N, X, K, _, ne) {
        var V = N[X];
        if (!i(V)) {
          var G = Q(V);
          return new v("Invalid " + _ + " `" + ne + "` of type " + ("`" + G + "` supplied to `" + K + "`, expected a single ReactElement."));
        }
        return null;
      }
      return h(M);
    }
    function w() {
      function M(N, X, K, _, ne) {
        var V = N[X];
        if (!e.isValidElementType(V)) {
          var G = Q(V);
          return new v("Invalid " + _ + " `" + ne + "` of type " + ("`" + G + "` supplied to `" + K + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return h(M);
    }
    function B(M) {
      function N(X, K, _, ne, V) {
        if (!(X[K] instanceof M)) {
          var G = M.name || p, re = q(X[K]);
          return new v("Invalid " + ne + " `" + V + "` of type " + ("`" + re + "` supplied to `" + _ + "`, expected ") + ("instance of `" + G + "`."));
        }
        return null;
      }
      return h(N);
    }
    function k(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function N(X, K, _, ne, V) {
        for (var G = X[K], re = 0; re < M.length; re++)
          if (d(G, M[re]))
            return null;
        var ee = JSON.stringify(M, function(ve, be) {
          var Ce = D(be);
          return Ce === "symbol" ? String(be) : be;
        });
        return new v("Invalid " + ne + " `" + V + "` of value `" + String(G) + "` " + ("supplied to `" + _ + "`, expected one of " + ee + "."));
      }
      return h(N);
    }
    function E(M) {
      function N(X, K, _, ne, V) {
        if (typeof M != "function")
          return new v("Property `" + V + "` of component `" + _ + "` has invalid PropType notation inside objectOf.");
        var G = X[K], re = Q(G);
        if (re !== "object")
          return new v("Invalid " + ne + " `" + V + "` of type " + ("`" + re + "` supplied to `" + _ + "`, expected an object."));
        for (var ee in G)
          if (n(G, ee)) {
            var ae = M(G, ee, _, ne, V + "." + ee, r);
            if (ae instanceof Error)
              return ae;
          }
        return null;
      }
      return h(N);
    }
    function S(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var N = 0; N < M.length; N++) {
        var X = M[N];
        if (typeof X != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + te(X) + " at index " + N + "."
          ), s;
      }
      function K(_, ne, V, G, re) {
        for (var ee = [], ae = 0; ae < M.length; ae++) {
          var ve = M[ae], be = ve(_, ne, V, G, re, r);
          if (be == null)
            return null;
          be.data && n(be.data, "expectedType") && ee.push(be.data.expectedType);
        }
        var Ce = ee.length > 0 ? ", expected one of type [" + ee.join(", ") + "]" : "";
        return new v("Invalid " + G + " `" + re + "` supplied to " + ("`" + V + "`" + Ce + "."));
      }
      return h(K);
    }
    function I() {
      function M(N, X, K, _, ne) {
        return j(N[X]) ? null : new v("Invalid " + _ + " `" + ne + "` supplied to " + ("`" + K + "`, expected a ReactNode."));
      }
      return h(M);
    }
    function T(M, N, X, K, _) {
      return new v(
        (M || "React class") + ": " + N + " type `" + X + "." + K + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + _ + "`."
      );
    }
    function x(M) {
      function N(X, K, _, ne, V) {
        var G = X[K], re = Q(G);
        if (re !== "object")
          return new v("Invalid " + ne + " `" + V + "` of type `" + re + "` " + ("supplied to `" + _ + "`, expected `object`."));
        for (var ee in M) {
          var ae = M[ee];
          if (typeof ae != "function")
            return T(_, ne, V, ee, D(ae));
          var ve = ae(G, ee, _, ne, V + "." + ee, r);
          if (ve)
            return ve;
        }
        return null;
      }
      return h(N);
    }
    function R(M) {
      function N(X, K, _, ne, V) {
        var G = X[K], re = Q(G);
        if (re !== "object")
          return new v("Invalid " + ne + " `" + V + "` of type `" + re + "` " + ("supplied to `" + _ + "`, expected `object`."));
        var ee = t({}, X[K], M);
        for (var ae in ee) {
          var ve = M[ae];
          if (n(M, ae) && typeof ve != "function")
            return T(_, ne, V, ae, D(ve));
          if (!ve)
            return new v(
              "Invalid " + ne + " `" + V + "` key `" + ae + "` supplied to `" + _ + "`.\nBad object: " + JSON.stringify(X[K], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(M), null, "  ")
            );
          var be = ve(G, ae, _, ne, V + "." + ae, r);
          if (be)
            return be;
        }
        return null;
      }
      return h(N);
    }
    function j(M) {
      switch (typeof M) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !M;
        case "object":
          if (Array.isArray(M))
            return M.every(j);
          if (M === null || i(M))
            return !0;
          var N = u(M);
          if (N) {
            var X = N.call(M), K;
            if (N !== M.entries) {
              for (; !(K = X.next()).done; )
                if (!j(K.value))
                  return !1;
            } else
              for (; !(K = X.next()).done; ) {
                var _ = K.value;
                if (_ && !j(_[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function L(M, N) {
      return M === "symbol" ? !0 : N ? N["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && N instanceof Symbol : !1;
    }
    function Q(M) {
      var N = typeof M;
      return Array.isArray(M) ? "array" : M instanceof RegExp ? "object" : L(N, M) ? "symbol" : N;
    }
    function D(M) {
      if (typeof M > "u" || M === null)
        return "" + M;
      var N = Q(M);
      if (N === "object") {
        if (M instanceof Date)
          return "date";
        if (M instanceof RegExp)
          return "regexp";
      }
      return N;
    }
    function te(M) {
      var N = D(M);
      switch (N) {
        case "array":
        case "object":
          return "an " + N;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + N;
        default:
          return N;
      }
    }
    function q(M) {
      return !M.constructor || !M.constructor.name ? p : M.constructor.name;
    }
    return c.checkPropTypes = a, c.resetWarningCache = a.resetWarningCache, c.PropTypes = c, c;
  }, _r;
}
var Lr, On;
function is() {
  if (On) return Lr;
  On = 1;
  var e = St();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Lr = function() {
    function n(s, i, l, m, f, u) {
      if (u !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var o = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, Lr;
}
if (process.env.NODE_ENV !== "production") {
  var ls = Wn(), cs = !0;
  ot.exports = ss()(ls.isElement, cs);
} else
  ot.exports = is()();
var us = ot.exports;
const oe = /* @__PURE__ */ Bo(us);
function Sn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sn(Object(r), !0).forEach(function(n) {
      h3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cr(e) {
  "@babel/helpers - typeof";
  return cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cr(e);
}
function h3(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function fs(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function ds(e, t) {
  if (e == null) return {};
  var r = fs(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function st(e) {
  return ms(e) || vs(e) || ps(e) || gs();
}
function ms(e) {
  if (Array.isArray(e)) return it(e);
}
function vs(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ps(e, t) {
  if (e) {
    if (typeof e == "string") return it(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return it(e, t);
  }
}
function it(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function gs() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hs(e) {
  var t, r = e.beat, n = e.fade, a = e.beatFade, o = e.bounce, s = e.shake, i = e.flash, l = e.spin, m = e.spinPulse, f = e.spinReverse, u = e.pulse, p = e.fixedWidth, c = e.inverse, d = e.border, v = e.listItem, h = e.flip, y = e.size, A = e.rotation, C = e.pull, g = (t = {
    "fa-beat": r,
    "fa-fade": n,
    "fa-beat-fade": a,
    "fa-bounce": o,
    "fa-shake": s,
    "fa-flash": i,
    "fa-spin": l,
    "fa-spin-reverse": f,
    "fa-spin-pulse": m,
    "fa-pulse": u,
    "fa-fw": p,
    "fa-inverse": c,
    "fa-border": d,
    "fa-li": v,
    "fa-flip": h === !0,
    "fa-flip-horizontal": h === "horizontal" || h === "both",
    "fa-flip-vertical": h === "vertical" || h === "both"
  }, h3(t, "fa-".concat(y), typeof y < "u" && y !== null), h3(t, "fa-rotate-".concat(A), typeof A < "u" && A !== null && A !== 0), h3(t, "fa-pull-".concat(C), typeof C < "u" && C !== null), h3(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(g).map(function(w) {
    return g[w] ? w : null;
  }).filter(function(w) {
    return w;
  });
}
function bs(e) {
  return e = e - 0, e === e;
}
function N2(e) {
  return bs(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, r) {
    return r ? r.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var ys = ["style"];
function ks(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ws(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, r) {
    var n = r.indexOf(":"), a = N2(r.slice(0, n)), o = r.slice(n + 1).trim();
    return a.startsWith("webkit") ? t[ks(a)] = o : t[a] = o, t;
  }, {});
}
function T2(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var n = (t.children || []).map(function(l) {
    return T2(e, l);
  }), a = Object.keys(t.attributes || {}).reduce(function(l, m) {
    var f = t.attributes[m];
    switch (m) {
      case "class":
        l.attrs.className = f, delete t.attributes.class;
        break;
      case "style":
        l.attrs.style = ws(f);
        break;
      default:
        m.indexOf("aria-") === 0 || m.indexOf("data-") === 0 ? l.attrs[m.toLowerCase()] = f : l.attrs[N2(m)] = f;
    }
    return l;
  }, {
    attrs: {}
  }), o = r.style, s = o === void 0 ? {} : o, i = ds(r, ys);
  return a.attrs.style = ze(ze({}, a.attrs.style), s), e.apply(void 0, [t.tag, ze(ze({}, a.attrs), i)].concat(st(n)));
}
var I2 = !1;
try {
  I2 = process.env.NODE_ENV === "production";
} catch {
}
function Ps() {
  if (!I2 && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Mn(e) {
  if (e && cr(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (at.icon)
    return at.icon(e);
  if (e === null)
    return null;
  if (e && cr(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function Fr(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? h3({}, e, t) : {};
}
var Nn = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
}, Pe = /* @__PURE__ */ O.forwardRef(function(e, t) {
  var r = ze(ze({}, Nn), e), n = r.icon, a = r.mask, o = r.symbol, s = r.className, i = r.title, l = r.titleId, m = r.maskId, f = Mn(n), u = Fr("classes", [].concat(st(hs(r)), st((s || "").split(" ")))), p = Fr("transform", typeof r.transform == "string" ? at.transform(r.transform) : r.transform), c = Fr("mask", Mn(a)), d = ns(f, ze(ze(ze(ze({}, u), p), c), {}, {
    symbol: o,
    title: i,
    titleId: l,
    maskId: m
  }));
  if (!d)
    return Ps("Could not find icon", f), null;
  var v = d.abstract, h = {
    ref: t
  };
  return Object.keys(r).forEach(function(y) {
    Nn.hasOwnProperty(y) || (h[y] = r[y]);
  }), Bs(v[0], h);
});
Pe.displayName = "FontAwesomeIcon";
Pe.propTypes = {
  beat: oe.bool,
  border: oe.bool,
  beatFade: oe.bool,
  bounce: oe.bool,
  className: oe.string,
  fade: oe.bool,
  flash: oe.bool,
  mask: oe.oneOfType([oe.object, oe.array, oe.string]),
  maskId: oe.string,
  fixedWidth: oe.bool,
  inverse: oe.bool,
  flip: oe.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: oe.oneOfType([oe.object, oe.array, oe.string]),
  listItem: oe.bool,
  pull: oe.oneOf(["right", "left"]),
  pulse: oe.bool,
  rotation: oe.oneOf([0, 90, 180, 270]),
  shake: oe.bool,
  size: oe.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: oe.bool,
  spinPulse: oe.bool,
  spinReverse: oe.bool,
  symbol: oe.oneOfType([oe.bool, oe.string]),
  title: oe.string,
  titleId: oe.string,
  transform: oe.oneOfType([oe.string, oe.object]),
  swapOpacity: oe.bool
};
var Bs = T2.bind(null, O.createElement);
const r3 = ({ icon: e, iconClassName: t }) => e ? /* @__PURE__ */ b(Pe, { icon: e, className: $("pointer-events-none", t) }) : /* @__PURE__ */ b(he, {});
function e3({ children: e, className: t, icon: r, style: n, iconClassName: a, onPointerDown: o, onPointerLeave: s, onPointerUp: i, onMouseEnter: l, onMouseLeave: m, ...f }) {
  const u = Z(), p = W(!1), c = W(!1), d = W(!1);
  O.useEffect(() => () => {
    p.set(!1), c.set(!1), d.set(!1);
  }, []);
  const v = O.useMemo(() => ({
    ...u(
      "primary",
      f["aria-disabled"] && "gray.opacity",
      !f["aria-disabled"] && {
        color: "primary.content"
      },
      p.get && {
        boxShadow: je([
          {
            colorId: "shadow.color",
            isInset: !0,
            blur: 1
          }
        ])
      }
    ),
    ...n
  }), [u, f, p.get, je, n, c.get]);
  return /* @__PURE__ */ Y(
    "button",
    {
      onFocus: () => {
        p.set(!0);
      },
      onBlur: () => {
        p.set(!1);
      },
      onMouseEnter: (h) => {
        d.set(!0), l == null || l(h);
      },
      onMouseLeave: (h) => {
        d.set(!1), m == null || m(h);
      },
      onPointerDown: (h) => {
        c.set(!0), o == null || o(h);
      },
      onPointerUp: (h) => {
        c.set(!1), i == null || i(h);
      },
      onPointerLeave: (h) => {
        c.set(!1), s == null || s(h);
      },
      type: "button",
      style: {
        ...u("primary"),
        ...dt(v)
      },
      className: $("btn rounded-md cursor-pointer w-full px-3 py-2 relative lowercase overflow-hidden transition-[transform] active:scale-95", t),
      ...f,
      children: [
        /* @__PURE__ */ Y("div", { className: "flex justify-center items-center gap-2 btn-content", children: [
          /* @__PURE__ */ b(r3, { iconClassName: a, icon: r }),
          e
        ] }),
        mt(1, 4).map((h) => /* @__PURE__ */ b(
          "i",
          {
            className: "btn__bg",
            style: {
              ...u("opacity")
            }
          },
          h
        ))
      ]
    }
  );
}
function Be({
  icon: e,
  className: t,
  children: r,
  "aria-checked": n,
  iconClassName: a,
  onFocus: o,
  onBlur: s,
  onMouseEnter: i,
  onMouseLeave: l,
  onPointerDown: m,
  onPointerUp: f,
  onPointerLeave: u,
  style: p,
  ...c
}) {
  const d = Z(), v = W(!1), h = W(!1), y = W(!1);
  return O.useEffect(() => () => {
    y.set(!1), h.set(!1), v.set(!1);
  }, []), /* @__PURE__ */ Y(
    "span",
    {
      onFocus: (A) => {
        h.set(!0), o == null || o(A);
      },
      onPointerDown: (A) => {
        y.set(!0), m == null || m(A);
      },
      onPointerUp: (A) => {
        y.set(!1), f == null || f(A);
      },
      onPointerLeave: (A) => {
        y.set(!1), u == null || u(A);
      },
      onBlur: (A) => {
        h.set(!1), s == null || s(A);
      },
      onMouseEnter: (A) => {
        v.set(!0), i == null || i(A);
      },
      onMouseLeave: (A) => {
        v.set(!1), l == null || l(A);
      },
      className: $(
        `
          rounded-md
          p-1
          inline-flex
          items-center
          justify-center
          -outline-offset-1
          outline-1
          outline-transparent
          cursor-pointer
        `,
        c["aria-disabled"] && "pointer-events-none",
        t
      ),
      style: {
        ...d(
          v.get && {
            backgroundColor: "gray.opacity"
          },
          c["aria-disabled"] && {
            color: "gray.opacity.2"
          },
          n && "primary",
          n && {
            color: "primary.content"
          },
          h.get && {
            outlineColor: "primary"
          }
        ),
        ...p
      },
      ...c,
      children: [
        /* @__PURE__ */ b(r3, { iconClassName: a, icon: e }),
        r
      ]
    }
  );
}
const C3 = O.forwardRef(
  ({ className: e, selectOnFocus: t, onFocus: r, onBlur: n, onValueChange: a, onChange: o, style: s, ...i }, l) => {
    const m = Z(), [f, u] = O.useState(!1), p = _e("preferences/animation.boolean");
    return /* @__PURE__ */ b(
      "input",
      {
        ...i,
        ref: l,
        onFocus: (c) => {
          !f && u(!0), t && c.currentTarget.select(), r == null || r(c);
        },
        onBlur: (c) => {
          f && u(!1), n == null || n(c);
        },
        className: $(
          `
            p-2
            border
            border-solid
            border-transparent
            font-[inherit]
            resize-none
            whitespace-nowrap
            rounded-sm
            w-full
          `,
          p && "transition-[border-color]",
          e
        ),
        style: {
          ...m(
            {
              borderColor: "borders",
              backgroundColor: "field.background"
            },
            f && {
              borderColor: "primary"
            }
          ),
          ...s
        },
        onChange: (c) => {
          a == null || a(c.currentTarget.value, c.currentTarget.valueAsNumber), o == null || o(c);
        }
      }
    );
  }
);
function q0({ state: e, id: t }) {
  const r = W(""), n = O.useMemo(() => Array.from(new Set(e.get)), [e.get]), a = Z(), o = O.useCallback(() => {
    n.includes(r.get) || r.get === "" || (e.set([...n, r.get]), r.set(""), y3(t));
  }, [r.get, n, r.set, e.set]);
  return /* @__PURE__ */ Y("div", { className: "array-field", children: [
    /* @__PURE__ */ b("div", { className: "items", children: n.map((s, i) => /* @__PURE__ */ Y(
      "div",
      {
        className: $(`
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
          ...a("gray.opacity", {
            borderColor: "borders"
          })
        },
        children: [
          /* @__PURE__ */ b("span", { children: s }),
          /* @__PURE__ */ Y("span", { className: "flex items-center", children: [
            /* @__PURE__ */ b(
              Be,
              {
                className: "opacity-0 group-hover:opacity-100 transition-[opacity] duration-200",
                onClick: async () => {
                  await navigator.clipboard.writeText(s);
                },
                icon: pt
              }
            ),
            /* @__PURE__ */ b(
              Be,
              {
                className: "opacity-0 group-hover:opacity-100 transition-[opacity] duration-200",
                onClick: () => {
                  n.splice(i, 1), e.set(n);
                },
                icon: P3
              }
            )
          ] })
        ]
      },
      i
    )) }),
    /* @__PURE__ */ Y("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ b("div", { className: "w-full", children: /* @__PURE__ */ b(
        C3,
        {
          value: r.get,
          placeholder: "write item...",
          id: t,
          onKeyDown: (s) => {
            new R3("enter").test(s) && o();
          },
          spellCheck: !1,
          onValueChange: r.set
        }
      ) }),
      r.get && /* @__PURE__ */ b(e3, { onClick: o, className: "w-fit", children: /* @__PURE__ */ b(Ke, { content: "add" }) })
    ] })
  ] });
}
function ei({ render: e, error: t = /* @__PURE__ */ b(he, {}), deps: r = [], loading: n = /* @__PURE__ */ b(he, {}) }) {
  const a = Sa(async () => {
    try {
      return await e();
    } catch {
      return t;
    }
  }, [e, t, n, ...r]);
  return /* @__PURE__ */ b(he, { children: a ?? n });
}
function ri({ hidden: e, animted: t, className: r, style: n, children: a, onLoadContent: o, onTransitionEnd: s, ...i }) {
  const l = Z(), m = typeof t == "boolean" ? t : _e("preferences/animation.boolean"), f = W(e);
  return O.useEffect(() => {
    e || f.set(!1);
  }, [e]), ur(async () => {
    f.get && o && (await Gn(100), o());
  }, [f.get, o]), /* @__PURE__ */ b(
    "div",
    {
      className: $(
        "fixed inset-0 bg-opacity-40 flex justify-center items-center z-[100000000000000000]",
        m && "transition-[transform] duration-700",
        !e && "translate-y-0",
        e && "translate-y-full pointer-events-none",
        r
      ),
      style: {
        ...l({
          background: fr("to bottom", "shadow.background.from", "shadow.background.to")
        }),
        ...n
      },
      onTransitionEnd: (u) => {
        f.set(e), s == null || s(u);
      },
      ...i,
      children: !f.get && a
    }
  );
}
function Cs({ className: e, animted: t, style: r, hidden: n, onLoadContent: a, children: o, onTransitionEnd: s, ...i }) {
  const l = Z(), m = W(n);
  O.useEffect(() => {
    n || m.set(!1);
  }, [n]);
  const f = O.useRef(null), u = typeof t == "boolean" ? t : _e("preferences/animation.boolean");
  return ur(async () => {
    m.get && a && (await Gn(100), a());
  }, [m.get, a]), /* @__PURE__ */ b(
    "div",
    {
      ref: f,
      className: $(
        "fixed inset-0 bg-opacity-40 flex justify-center items-center z-[100000000000000000]",
        u && "transition-[opacity,transform] duration-300",
        n && "pointer-events-none opacity-0 transform scale-110",
        !n && "opacity-100",
        e
      ),
      onTransitionEnd: (p) => {
        m.set(n), s == null || s(p);
      },
      style: {
        ...l("black.opacity"),
        ...r
      },
      ...i,
      children: !m.get && o
    }
  );
}
function z2({ state: e, config: t = {}, id: r }) {
  const n = O.useMemo(() => typeof e.get == "boolean" ? e.get : !1, [e.get]);
  O.useEffect(() => () => {
    o.set(!1);
  }, []);
  const a = Z(), o = W(!1);
  return /* @__PURE__ */ Y("span", { className: "inline-flex items-center gap-1", children: [
    t.style == "checkbox" ? /* @__PURE__ */ b(
      "button",
      {
        onClick: () => {
          e.set((s) => !s);
        },
        onFocus: () => {
          o.set(!0);
        },
        onBlur: () => {
          o.set(!1);
        },
        id: r,
        style: {
          ...a(
            "checkbox.background",
            {
              borderColor: "borders"
            },
            o.get && { outlineColor: "primary" }
          )
        },
        className: $(`
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
        children: /* @__PURE__ */ b(
          r3,
          {
            iconClassName: $(
              `
              transform
              transition-transform
              duration-300
              scale-0
            `,
              n && "scale-100"
            ),
            icon: i3
          }
        )
      }
    ) : /* @__PURE__ */ b(
      "button",
      {
        id: r,
        onFocus: () => o.set(!0),
        onBlur: () => o.set(!1),
        onClick: () => {
          e.set((s) => !s);
        },
        type: "button",
        className: $(`
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
            o.get && { borderColor: "primary" }
          )
        },
        children: /* @__PURE__ */ b(
          "span",
          {
            className: $("absolute left-0 inline-flex items-center justify-center top-1/2 transform -translate-y-1/2 w-[20px] h-[20px] rounded-full duration-300 text-white", n && "left-1/2"),
            style: {
              ...a(n && "checkbox.true", !n && "checkbox.false")
            },
            children: /* @__PURE__ */ b(Pe, { icon: n ? i3 : P3 })
          }
        )
      }
    ),
    /* @__PURE__ */ b("label", { htmlFor: r, children: (n ? t == null ? void 0 : t.onActive : t == null ? void 0 : t.onDisactive) || "" })
  ] });
}
const ti = ({ className: e, style: t, ...r }) => {
  const n = Z();
  return /* @__PURE__ */ b(
    "div",
    {
      ...r,
      className: Vn("flex flex-col shadow-lg border border-transparent border-solid rounded-2xl w-1/2", e),
      style: {
        ...n({
          backgroundColor: "secondry.background",
          borderColor: "borders"
        }),
        ...t
      }
    }
  );
};
function I3({ children: e, className: t, icon: r, style: n, iconClassName: a, onPointerDown: o, onPointerLeave: s, onPointerUp: i, onMouseEnter: l, onMouseLeave: m, ...f }) {
  const u = Z(), p = W(!1), c = W(!1);
  return O.useEffect(() => () => {
    p.set(!1), c.set(!1);
  }, []), /* @__PURE__ */ Y(
    "button",
    {
      onMouseEnter: (d) => {
        c.set(!0), l == null || l(d);
      },
      onMouseLeave: (d) => {
        c.set(!1), m == null || m(d);
      },
      onPointerDown: (d) => {
        p.set(!0), o == null || o(d);
      },
      onPointerUp: (d) => {
        p.set(!1), i == null || i(d);
      },
      onPointerLeave: (d) => {
        p.set(!1), s == null || s(d);
      },
      className: $(
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
        t,
        "relative"
      ),
      type: "button",
      style: {
        ...u(c.get && "gray.opacity", p.get && "gray.opacity.2")
      },
      ...f,
      children: [
        /* @__PURE__ */ b(r3, { iconClassName: Vn("text-xl", a), icon: r }),
        e
      ]
    }
  );
}
function Mt({
  title: e,
  onClick: t,
  position: { x: r = "right", y: n = "bottom" } = { x: "right", y: "bottom" },
  onMouseMove: a,
  onMouseLeave: o,
  children: s,
  canMouseOn: i = !1,
  ...l
}) {
  const m = O.createRef();
  O.useEffect(() => () => {
    xr(null), er(null);
  }, []);
  const f = () => {
    i || (xr(null), er(null));
  };
  return /* @__PURE__ */ b(
    "div",
    {
      ref: m,
      onClick: (u) => {
        f(), t == null || t(u);
      },
      onMouseMove: (u) => {
        e && (xr(e), er([u.clientX, u.clientY]), Ma(r), Na(n)), a == null || a(u);
      },
      onMouseLeave: (u) => {
        f(), o == null || o(u);
      },
      ...l,
      children: s
    }
  );
}
let Nt = O.forwardRef(
  ({ focusId: e = dr(30), id: t, children: r, onFocus: n, onBlur: a, style: o, className: s, ignoreOutline: i = !1, ...l }, m) => {
    const f = W(!1), u = Z();
    return /* @__PURE__ */ Y(
      "div",
      {
        ref: m,
        tabIndex: 1,
        id: e,
        onFocus: (p) => {
          f.set(!0), n == null || n(p);
        },
        onBlur: (p) => {
          f.set(!1), a == null || a(p);
        },
        style: {
          ...o
        },
        className: $("relative", s),
        ...l,
        children: [
          r,
          /* @__PURE__ */ b(
            "div",
            {
              hidden: i,
              className: $(
                s,
                `
              inset-0
              absolute
              pointer-events-none
              border
              border-solid
              border-transparent
              block
              m-0
              p-0
              bg-transparent
              w-auto
              h-auto
            `
              ),
              style: {
                ...u(f.get && { borderColor: "primary" })
              }
            }
          )
        ]
      }
    );
  }
);
const R2 = ({ onContentChange: e, ...t }) => {
  const r = O.createRef(), n = W(null);
  O.useEffect(() => {
    const o = r.current;
    if (o) {
      const s = () => {
        const f = o.getBoundingClientRect();
        n.set(f);
      };
      s();
      const i = new ResizeObserver(s), l = new MutationObserver(s), m = new IntersectionObserver(s);
      return i.observe(o, { box: "border-box" }), i.observe(o, { box: "content-box" }), i.observe(o, { box: "device-pixel-content-box" }), l.observe(o, { attributes: !0, subtree: !0, characterData: !0, childList: !0 }), m.observe(o), addEventListener("resize", s), () => {
        i.disconnect(), l.disconnect(), m.disconnect(), removeEventListener("resize", s);
      };
    }
  }, [r.current]), O.useEffect(() => {
    n.get && (e == null || e(n.get));
  }, [n.get]);
  const a = O.useMemo(() => {
    if (!n.get)
      return {};
    const { bottom: o, height: s, left: i, right: l, top: m, width: f, x: u, y: p } = n.get;
    return {
      bottom: o,
      height: s,
      left: i,
      right: l,
      top: m,
      width: f,
      x: u,
      y: p
    };
  }, [n.get]);
  return /* @__PURE__ */ b(
    "div",
    {
      ...t,
      "data-pos": Object.entries(a).map(([o, s]) => `${o}=${s}`).join(","),
      ref: r
    }
  );
}, ni = ({ positionId: e, ...t }) => {
  const r = Er.getOne(e);
  return O.useEffect(() => {
    r || Er.upsert([
      {
        positionId: e
      }
    ]);
  }, [r]), /* @__PURE__ */ b(
    R2,
    {
      onContentChange: ({ bottom: n, height: a, left: o, right: s, top: i, width: l, x: m, y: f }) => {
        const u = { bottom: n, height: a, left: o, right: s, top: i, width: l, x: m, y: f };
        Er.setOne(e, u);
      },
      ...t
    }
  );
};
function hr({ focusId: e, itemSize: t, slotId: r, component: n, handelSkip: a, data: o, countLastItems: s = 3, overflow: { top: i = 0, bottom: l = 0 } = { top: 0, bottom: 0 } }) {
  const m = ce.getOne(r), f = W(0), u = W(0);
  let p = ce.getOneFeild(r, "focused");
  Hn(r, o), O.useEffect(() => {
    ce.setOneFeild(r, "length", o.length), o.length || Ta(r);
  }, [o]), O.useEffect(() => {
    typeof p == "number" && o.length <= p && ce.setOneFeild(r, "focused", o.length - 1);
  }, [p, o]), O.useEffect(() => {
    let T = null;
    const x = () => {
      if (T = T || document.getElementById(r), !T)
        return;
      const j = T.getBoundingClientRect().height;
      u.set(j);
    };
    x();
    const R = setInterval(x, 1e3);
    return () => {
      clearInterval(R);
    };
  }, []);
  const c = W(!1);
  O.useEffect(() => {
    c.set(!1);
  }, [p]), O.useEffect(() => {
    if ([c.get, typeof p != "number", p >= o.length, u.get < t].some(Boolean))
      return;
    const T = f.get <= p * t, x = (p + 1) * t <= f.get + u.get;
    if (x && T)
      return;
    let R;
    p < 0 ? p = 0 : p > (R = Math.abs(o.length - s)) && (p = R), x || (p = p + 1 - u.get / t);
    const j = t * p;
    f.set(j);
  }, [p, o, s, f.get, u.get, c.get]);
  const d = _e("preferences/fastScrollKey.enum"), v = O.useMemo(() => t * o.length, [t, o]), h = O.useMemo(() => v + t * s, [v, t, s]), y = O.useMemo(() => u.get * 100 / h, [h, u.get]), A = O.useMemo(() => f.get * 100 / h, [h, f.get]), C = _e("preferences/scrollAnimation.boolean.boolean"), g = W(!1), w = W(null), B = O.useMemo(() => n, []), k = Z(), E = (T) => {
    var R;
    const x = w.get;
    if (x) {
      let L = (T - x.top - (((R = S.current) == null ? void 0 : R.clientHeight) || 0) / 2) / x.height * h;
      const Q = h - x.height;
      L < 0 ? L = 0 : L > Q && (L = Q), f.set(L);
    }
  }, S = O.createRef(), I = O.useMemo(() => y <= 100, [y]);
  return /* @__PURE__ */ b(Nt, { focusId: e, className: "w-full h-full", ignoreOutline: typeof p == "number", id: r, children: /* @__PURE__ */ Y(
    R2,
    {
      onContentChange: (T) => {
        u.set(T.height), w.set(T);
      },
      className: "relative h-full overflow-hidden",
      onWheel: (T) => {
        if (y < 100) {
          let x = !1;
          d == "alt" ? x = T.altKey : d == "control" ? x = T.ctrlKey : d == "shift" && (x = T.shiftKey), c.set(!0), f.set((R) => (R += T.deltaY * (x ? 0.6 : 0.1), R < 0 ? 0 : Math.min(R, (o.length + s) * t - u.get)));
        }
      },
      children: [
        /* @__PURE__ */ b(
          "div",
          {
            className: $("absolute inset-x-0", C && "transition-[top,left]"),
            style: {
              top: -f.get,
              height: v
            },
            children: o.map((T, x) => {
              var L;
              const j = t * x - f.get;
              if (Va(-(i + 1) * t, j, j + t, u.get + (l + 1) * t)) {
                const Q = {
                  isFocused: x == (m == null ? void 0 : m.focused),
                  isSelected: !!((L = m == null ? void 0 : m.selected) != null && L[x]),
                  isSubmited: x == (m == null ? void 0 : m.submited),
                  isSkiped: !!(a && a({
                    data: T,
                    index: x
                  }))
                }, D = {
                  height: t,
                  position: "absolute",
                  top: t * x,
                  insetInline: "0px"
                };
                return /* @__PURE__ */ b(B, { status: Q, index: x, data: T, style: D, handel: {
                  focus() {
                    ce.setOneFeild(r, "focused", x);
                  },
                  select(q, M) {
                    if (q)
                      ce.setOneFeild(r, "selected", {
                        [x]: M
                      });
                    else {
                      if (!(m != null && m.selected))
                        return;
                      ce.setOneFeild(r, "selected", {
                        ...m.selected,
                        [x]: M
                      });
                    }
                  },
                  submit() {
                    ce.setOneFeild(r, "submited", x);
                  },
                  skip(q, M) {
                    q && ce.setOneFeild(r, "skiped", { [x]: M });
                  }
                } }, x);
              }
            })
          }
        ),
        /* @__PURE__ */ b(
          "div",
          {
            hidden: !I,
            "aria-label": "scroll-bar",
            onMouseEnter: () => {
              g.set(!0);
            },
            onMouseLeave: () => {
              g.set(!1);
            },
            onPointerDown: (T) => {
              c.set(!0), E(T.clientY);
            },
            style: {
              ...k(g.get && "gray.opacity")
            },
            className: $("absolute right-0 w-[5px] h-full inset-y-0 transition-[width] duration-300 backdrop-blur-md", g.get && "w-[20px]"),
            children: /* @__PURE__ */ b(
              "div",
              {
                "aria-label": "scroll-bar-thumb",
                className: "w-full transition-[top] duration-100 inset-x-0 absolute",
                ref: S,
                style: {
                  ...k("gray.opacity.2"),
                  ...dt({
                    height: `${y}%`,
                    top: `${A}%`
                  })
                },
                onMouseDown: () => {
                  c.set(!0);
                  const T = (R) => {
                    E(R.clientY);
                  };
                  document.addEventListener("mousemove", T);
                  const x = () => {
                    document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", x);
                  };
                  document.addEventListener("mouseup", x);
                }
              }
            )
          }
        ),
        /* @__PURE__ */ b(
          "div",
          {
            "data-scrolled": f.get >= 10,
            className: "-top-[20px] absolute inset-x-0 h-[20px]",
            style: {
              ...k(
                f.get >= 10 && {
                  boxShadow: je([
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
function ai() {
  const e = Ne.getOneFeild("findConfigurations", "value"), t = Xt.getAll(), r = O.useMemo(() => typeof e == "string" ? t.filter(({ colorId: n }) => vt(n, e)) : t, [t, e]);
  return O.useEffect(() => {
    Me("configurations.found.length", r.length);
  }, [r]), /* @__PURE__ */ b(
    hr,
    {
      countLastItems: -1,
      focusId: "colors-list",
      slotId: "colors-list",
      data: r,
      itemSize: 50,
      component: ({ data: n, style: a, status: o, index: s, handel: i }) => {
        var d;
        const l = W(!1), m = W(!1), f = Z(), u = _e("window/dark.boolean"), p = O.useMemo(() => Ia(!!u, n), [u, n]);
        let c = null;
        return /* @__PURE__ */ Y(
          "div",
          {
            onMouseEnter: () => l.set(!0),
            onMouseLeave: () => l.set(!1),
            style: {
              ...a,
              ...f(
                s % 2 && "primary.background",
                l.get && "gray.opacity",
                o.isFocused && { borderColor: "primary" },
                o.isSubmited && {
                  backgroundColor: "secondry",
                  color: "secondry.content"
                }
              )
            },
            className: $(`
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
              i.focus(), i.submit();
            },
            children: [
              /* @__PURE__ */ b("div", { className: "flex items-center gap-x-2", children: /* @__PURE__ */ b("span", { className: "capitalize", children: ft(n.colorId.replace(/[^a-zA-Z0-9]+/gi, " "), "camel", "normal") }) }),
              /* @__PURE__ */ Y("span", { className: "inline-flex flex-wrap items-center gap-x-2", children: [
                (d = n.propositions) == null ? void 0 : d.map((v, h) => /* @__PURE__ */ b(
                  "span",
                  {
                    className: $(`
                      inline-block
                      w-[25px]
                      h-[25px]
                      rounded-md
                      border
                      border-solid
                      border-transparent
                    `),
                    style: {
                      backgroundColor: v,
                      ...f({
                        borderColor: "borders"
                      })
                    }
                  },
                  h
                )),
                /* @__PURE__ */ b(Mt, { title: `**${p}**`.toUpperCase(), children: /* @__PURE__ */ b(
                  "label",
                  {
                    className: $(`
                  inline-block
                  w-[25px]
                  h-[25px]
                  rounded-md
                  border
                  border-solid
                  border-transparent
                `),
                    style: {
                      backgroundColor: p,
                      borderColor: "white"
                    },
                    htmlFor: `color:${n.colorId}`
                  },
                  s
                ) }),
                /* @__PURE__ */ Y("div", { className: "flex items-center tips", children: [
                  l.get && /* @__PURE__ */ b(
                    Be,
                    {
                      icon: m.get ? i3 : pt,
                      onClick: async () => {
                        p && (m.set(!0), await navigator.clipboard.writeText(p));
                      },
                      onMouseLeave: () => {
                        m.set(!1);
                      }
                    }
                  ),
                  /* @__PURE__ */ b(
                    C3,
                    {
                      id: `color:${n.colorId}`,
                      tabIndex: -1,
                      value: p,
                      type: "color",
                      onValueChange: (v) => {
                        c != null && clearTimeout(c), c = setTimeout(() => {
                          Xt.setOneFeild(n.colorId, u ? "dark" : "light", v);
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
var j2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _2(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var lt = { exports: {} }, x3 = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tn;
function As() {
  if (Tn) return x3;
  Tn = 1;
  var e = O, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, l, m) {
    var f, u = {}, p = null, c = null;
    m !== void 0 && (p = "" + m), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (c = l.ref);
    for (f in l) n.call(l, f) && !o.hasOwnProperty(f) && (u[f] = l[f]);
    if (i && i.defaultProps) for (f in l = i.defaultProps, l) u[f] === void 0 && (u[f] = l[f]);
    return { $$typeof: t, type: i, key: p, ref: c, props: u, _owner: a.current };
  }
  return x3.Fragment = r, x3.jsx = s, x3.jsxs = s, x3;
}
var E3 = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var In;
function xs() {
  return In || (In = 1, process.env.NODE_ENV !== "production" && function() {
    var e = O, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), c = Symbol.for("react.offscreen"), d = Symbol.iterator, v = "@@iterator";
    function h(P) {
      if (P === null || typeof P != "object")
        return null;
      var z = d && P[d] || P[v];
      return typeof z == "function" ? z : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(P) {
      {
        for (var z = arguments.length, F = new Array(z > 1 ? z - 1 : 0), J = 1; J < z; J++)
          F[J - 1] = arguments[J];
        C("error", P, F);
      }
    }
    function C(P, z, F) {
      {
        var J = y.ReactDebugCurrentFrame, le = J.getStackAddendum();
        le !== "" && (z += "%s", F = F.concat([le]));
        var ue = F.map(function(ie) {
          return String(ie);
        });
        ue.unshift("Warning: " + z), Function.prototype.apply.call(console[P], console, ue);
      }
    }
    var g = !1, w = !1, B = !1, k = !1, E = !1, S;
    S = Symbol.for("react.module.reference");
    function I(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === n || P === o || E || P === a || P === m || P === f || k || P === c || g || w || B || typeof P == "object" && P !== null && (P.$$typeof === p || P.$$typeof === u || P.$$typeof === s || P.$$typeof === i || P.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      P.$$typeof === S || P.getModuleId !== void 0));
    }
    function T(P, z, F) {
      var J = P.displayName;
      if (J)
        return J;
      var le = z.displayName || z.name || "";
      return le !== "" ? F + "(" + le + ")" : F;
    }
    function x(P) {
      return P.displayName || "Context";
    }
    function R(P) {
      if (P == null)
        return null;
      if (typeof P.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof P == "function")
        return P.displayName || P.name || null;
      if (typeof P == "string")
        return P;
      switch (P) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case a:
          return "StrictMode";
        case m:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case i:
            var z = P;
            return x(z) + ".Consumer";
          case s:
            var F = P;
            return x(F._context) + ".Provider";
          case l:
            return T(P, P.render, "ForwardRef");
          case u:
            var J = P.displayName || null;
            return J !== null ? J : R(P.type) || "Memo";
          case p: {
            var le = P, ue = le._payload, ie = le._init;
            try {
              return R(ie(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, L = 0, Q, D, te, q, M, N, X;
    function K() {
    }
    K.__reactDisabledLog = !0;
    function _() {
      {
        if (L === 0) {
          Q = console.log, D = console.info, te = console.warn, q = console.error, M = console.group, N = console.groupCollapsed, X = console.groupEnd;
          var P = {
            configurable: !0,
            enumerable: !0,
            value: K,
            writable: !0
          };
          Object.defineProperties(console, {
            info: P,
            log: P,
            warn: P,
            error: P,
            group: P,
            groupCollapsed: P,
            groupEnd: P
          });
        }
        L++;
      }
    }
    function ne() {
      {
        if (L--, L === 0) {
          var P = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, P, {
              value: Q
            }),
            info: j({}, P, {
              value: D
            }),
            warn: j({}, P, {
              value: te
            }),
            error: j({}, P, {
              value: q
            }),
            group: j({}, P, {
              value: M
            }),
            groupCollapsed: j({}, P, {
              value: N
            }),
            groupEnd: j({}, P, {
              value: X
            })
          });
        }
        L < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = y.ReactCurrentDispatcher, G;
    function re(P, z, F) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (le) {
            var J = le.stack.trim().match(/\n( *(at )?)/);
            G = J && J[1] || "";
          }
        return `
` + G + P;
      }
    }
    var ee = !1, ae;
    {
      var ve = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new ve();
    }
    function be(P, z) {
      if (!P || ee)
        return "";
      {
        var F = ae.get(P);
        if (F !== void 0)
          return F;
      }
      var J;
      ee = !0;
      var le = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ue;
      ue = V.current, V.current = null, _();
      try {
        if (z) {
          var ie = function() {
            throw Error();
          };
          if (Object.defineProperty(ie.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ie, []);
            } catch (Le) {
              J = Le;
            }
            Reflect.construct(P, [], ie);
          } else {
            try {
              ie.call();
            } catch (Le) {
              J = Le;
            }
            P.call(ie.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Le) {
            J = Le;
          }
          P();
        }
      } catch (Le) {
        if (Le && J && typeof Le.stack == "string") {
          for (var se = Le.stack.split(`
`), we = J.stack.split(`
`), pe = se.length - 1, ge = we.length - 1; pe >= 1 && ge >= 0 && se[pe] !== we[ge]; )
            ge--;
          for (; pe >= 1 && ge >= 0; pe--, ge--)
            if (se[pe] !== we[ge]) {
              if (pe !== 1 || ge !== 1)
                do
                  if (pe--, ge--, ge < 0 || se[pe] !== we[ge]) {
                    var Se = `
` + se[pe].replace(" at new ", " at ");
                    return P.displayName && Se.includes("<anonymous>") && (Se = Se.replace("<anonymous>", P.displayName)), typeof P == "function" && ae.set(P, Se), Se;
                  }
                while (pe >= 1 && ge >= 0);
              break;
            }
        }
      } finally {
        ee = !1, V.current = ue, ne(), Error.prepareStackTrace = le;
      }
      var f3 = P ? P.displayName || P.name : "", Ht = f3 ? re(f3) : "";
      return typeof P == "function" && ae.set(P, Ht), Ht;
    }
    function Ce(P, z, F) {
      return be(P, !1);
    }
    function t3(P) {
      var z = P.prototype;
      return !!(z && z.isReactComponent);
    }
    function Ee(P, z, F) {
      if (P == null)
        return "";
      if (typeof P == "function")
        return be(P, t3(P));
      if (typeof P == "string")
        return re(P);
      switch (P) {
        case m:
          return re("Suspense");
        case f:
          return re("SuspenseList");
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case l:
            return Ce(P.render);
          case u:
            return Ee(P.type, z, F);
          case p: {
            var J = P, le = J._payload, ue = J._init;
            try {
              return Ee(ue(le), z, F);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = Object.prototype.hasOwnProperty, n3 = {}, Qe = y.ReactDebugCurrentFrame;
    function ke(P) {
      if (P) {
        var z = P._owner, F = Ee(P.type, P._source, z ? z.type : null);
        Qe.setExtraStackFrame(F);
      } else
        Qe.setExtraStackFrame(null);
    }
    function la(P, z, F, J, le) {
      {
        var ue = Function.call.bind(Ie);
        for (var ie in P)
          if (ue(P, ie)) {
            var se = void 0;
            try {
              if (typeof P[ie] != "function") {
                var we = Error((J || "React class") + ": " + F + " type `" + ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof P[ie] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw we.name = "Invariant Violation", we;
              }
              se = P[ie](z, ie, J, F, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pe) {
              se = pe;
            }
            se && !(se instanceof Error) && (ke(le), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", J || "React class", F, ie, typeof se), ke(null)), se instanceof Error && !(se.message in n3) && (n3[se.message] = !0, ke(le), A("Failed %s type: %s", F, se.message), ke(null));
          }
      }
    }
    var Oe = Array.isArray;
    function kr(P) {
      return Oe(P);
    }
    function ca(P) {
      {
        var z = typeof Symbol == "function" && Symbol.toStringTag, F = z && P[Symbol.toStringTag] || P.constructor.name || "Object";
        return F;
      }
    }
    function ua(P) {
      try {
        return Rt(P), !1;
      } catch {
        return !0;
      }
    }
    function Rt(P) {
      return "" + P;
    }
    function jt(P) {
      if (ua(P))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ca(P)), Rt(P);
    }
    var A3 = y.ReactCurrentOwner, fa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _t, Lt, wr;
    wr = {};
    function da(P) {
      if (Ie.call(P, "ref")) {
        var z = Object.getOwnPropertyDescriptor(P, "ref").get;
        if (z && z.isReactWarning)
          return !1;
      }
      return P.ref !== void 0;
    }
    function ma(P) {
      if (Ie.call(P, "key")) {
        var z = Object.getOwnPropertyDescriptor(P, "key").get;
        if (z && z.isReactWarning)
          return !1;
      }
      return P.key !== void 0;
    }
    function va(P, z) {
      if (typeof P.ref == "string" && A3.current && z && A3.current.stateNode !== z) {
        var F = R(A3.current.type);
        wr[F] || (A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(A3.current.type), P.ref), wr[F] = !0);
      }
    }
    function pa(P, z) {
      {
        var F = function() {
          _t || (_t = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", z));
        };
        F.isReactWarning = !0, Object.defineProperty(P, "key", {
          get: F,
          configurable: !0
        });
      }
    }
    function ga(P, z) {
      {
        var F = function() {
          Lt || (Lt = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", z));
        };
        F.isReactWarning = !0, Object.defineProperty(P, "ref", {
          get: F,
          configurable: !0
        });
      }
    }
    var ha = function(P, z, F, J, le, ue, ie) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: P,
        key: z,
        ref: F,
        props: ie,
        // Record the component responsible for creating this element.
        _owner: ue
      };
      return se._store = {}, Object.defineProperty(se._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(se, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: J
      }), Object.defineProperty(se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: le
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function ba(P, z, F, J, le) {
      {
        var ue, ie = {}, se = null, we = null;
        F !== void 0 && (jt(F), se = "" + F), ma(z) && (jt(z.key), se = "" + z.key), da(z) && (we = z.ref, va(z, le));
        for (ue in z)
          Ie.call(z, ue) && !fa.hasOwnProperty(ue) && (ie[ue] = z[ue]);
        if (P && P.defaultProps) {
          var pe = P.defaultProps;
          for (ue in pe)
            ie[ue] === void 0 && (ie[ue] = pe[ue]);
        }
        if (se || we) {
          var ge = typeof P == "function" ? P.displayName || P.name || "Unknown" : P;
          se && pa(ie, ge), we && ga(ie, ge);
        }
        return ha(P, se, we, le, J, A3.current, ie);
      }
    }
    var Pr = y.ReactCurrentOwner, Ft = y.ReactDebugCurrentFrame;
    function u3(P) {
      if (P) {
        var z = P._owner, F = Ee(P.type, P._source, z ? z.type : null);
        Ft.setExtraStackFrame(F);
      } else
        Ft.setExtraStackFrame(null);
    }
    var Br;
    Br = !1;
    function Cr(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function Dt() {
      {
        if (Pr.current) {
          var P = R(Pr.current.type);
          if (P)
            return `

Check the render method of \`` + P + "`.";
        }
        return "";
      }
    }
    function ya(P) {
      return "";
    }
    var Ut = {};
    function ka(P) {
      {
        var z = Dt();
        if (!z) {
          var F = typeof P == "string" ? P : P.displayName || P.name;
          F && (z = `

Check the top-level render call using <` + F + ">.");
        }
        return z;
      }
    }
    function $t(P, z) {
      {
        if (!P._store || P._store.validated || P.key != null)
          return;
        P._store.validated = !0;
        var F = ka(z);
        if (Ut[F])
          return;
        Ut[F] = !0;
        var J = "";
        P && P._owner && P._owner !== Pr.current && (J = " It was passed a child from " + R(P._owner.type) + "."), u3(P), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', F, J), u3(null);
      }
    }
    function Yt(P, z) {
      {
        if (typeof P != "object")
          return;
        if (kr(P))
          for (var F = 0; F < P.length; F++) {
            var J = P[F];
            Cr(J) && $t(J, z);
          }
        else if (Cr(P))
          P._store && (P._store.validated = !0);
        else if (P) {
          var le = h(P);
          if (typeof le == "function" && le !== P.entries)
            for (var ue = le.call(P), ie; !(ie = ue.next()).done; )
              Cr(ie.value) && $t(ie.value, z);
        }
      }
    }
    function wa(P) {
      {
        var z = P.type;
        if (z == null || typeof z == "string")
          return;
        var F;
        if (typeof z == "function")
          F = z.propTypes;
        else if (typeof z == "object" && (z.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        z.$$typeof === u))
          F = z.propTypes;
        else
          return;
        if (F) {
          var J = R(z);
          la(F, P.props, "prop", J, P);
        } else if (z.PropTypes !== void 0 && !Br) {
          Br = !0;
          var le = R(z);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", le || "Unknown");
        }
        typeof z.getDefaultProps == "function" && !z.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pa(P) {
      {
        for (var z = Object.keys(P.props), F = 0; F < z.length; F++) {
          var J = z[F];
          if (J !== "children" && J !== "key") {
            u3(P), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", J), u3(null);
            break;
          }
        }
        P.ref !== null && (u3(P), A("Invalid attribute `ref` supplied to `React.Fragment`."), u3(null));
      }
    }
    function Wt(P, z, F, J, le, ue) {
      {
        var ie = I(P);
        if (!ie) {
          var se = "";
          (P === void 0 || typeof P == "object" && P !== null && Object.keys(P).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var we = ya();
          we ? se += we : se += Dt();
          var pe;
          P === null ? pe = "null" : kr(P) ? pe = "array" : P !== void 0 && P.$$typeof === t ? (pe = "<" + (R(P.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : pe = typeof P, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pe, se);
        }
        var ge = ba(P, z, F, le, ue);
        if (ge == null)
          return ge;
        if (ie) {
          var Se = z.children;
          if (Se !== void 0)
            if (J)
              if (kr(Se)) {
                for (var f3 = 0; f3 < Se.length; f3++)
                  Yt(Se[f3], P);
                Object.freeze && Object.freeze(Se);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Yt(Se, P);
        }
        return P === n ? Pa(ge) : wa(ge), ge;
      }
    }
    function Ba(P, z, F) {
      return Wt(P, z, F, !0);
    }
    function Ca(P, z, F) {
      return Wt(P, z, F, !1);
    }
    var Aa = Ca, xa = Ba;
    E3.Fragment = n, E3.jsx = Aa, E3.jsxs = xa;
  }()), E3;
}
process.env.NODE_ENV === "production" ? lt.exports = As() : lt.exports = xs();
var Es = lt.exports, L2 = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(typeof self < "u" ? self : j2, function() {
    return (
      /******/
      function(r) {
        var n = {};
        function a(o) {
          if (n[o])
            return n[o].exports;
          var s = n[o] = {
            /******/
            i: o,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return r[o].call(s.exports, s, s.exports, a), s.l = !0, s.exports;
        }
        return a.m = r, a.c = n, a.d = function(o, s, i) {
          a.o(o, s) || Object.defineProperty(o, s, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: i
            /******/
          });
        }, a.n = function(o) {
          var s = o && o.__esModule ? (
            /******/
            function() {
              return o.default;
            }
          ) : (
            /******/
            function() {
              return o;
            }
          );
          return a.d(s, "a", s), s;
        }, a.o = function(o, s) {
          return Object.prototype.hasOwnProperty.call(o, s);
        }, a.p = "", a(a.s = 3);
      }([
        /* 0 */
        /***/
        function(r, n, a) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var o = (
            /** @class */
            function() {
              function s(i, l) {
                this.width = l, this.height = i.length / l, this.data = i;
              }
              return s.createEmpty = function(i, l) {
                return new s(new Uint8ClampedArray(i * l), i);
              }, s.prototype.get = function(i, l) {
                return i < 0 || i >= this.width || l < 0 || l >= this.height ? !1 : !!this.data[l * this.width + i];
              }, s.prototype.set = function(i, l, m) {
                this.data[l * this.width + i] = m ? 1 : 0;
              }, s.prototype.setRegion = function(i, l, m, f, u) {
                for (var p = l; p < l + f; p++)
                  for (var c = i; c < i + m; c++)
                    this.set(c, p, !!u);
              }, s;
            }()
          );
          n.BitMatrix = o;
        },
        /* 1 */
        /***/
        function(r, n, a) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var o = a(2);
          function s(l, m) {
            return l ^ m;
          }
          n.addOrSubtractGF = s;
          var i = (
            /** @class */
            function() {
              function l(m, f, u) {
                this.primitive = m, this.size = f, this.generatorBase = u, this.expTable = new Array(this.size), this.logTable = new Array(this.size);
                for (var p = 1, c = 0; c < this.size; c++)
                  this.expTable[c] = p, p = p * 2, p >= this.size && (p = (p ^ this.primitive) & this.size - 1);
                for (var c = 0; c < this.size - 1; c++)
                  this.logTable[this.expTable[c]] = c;
                this.zero = new o.default(this, Uint8ClampedArray.from([0])), this.one = new o.default(this, Uint8ClampedArray.from([1]));
              }
              return l.prototype.multiply = function(m, f) {
                return m === 0 || f === 0 ? 0 : this.expTable[(this.logTable[m] + this.logTable[f]) % (this.size - 1)];
              }, l.prototype.inverse = function(m) {
                if (m === 0)
                  throw new Error("Can't invert 0");
                return this.expTable[this.size - this.logTable[m] - 1];
              }, l.prototype.buildMonomial = function(m, f) {
                if (m < 0)
                  throw new Error("Invalid monomial degree less than 0");
                if (f === 0)
                  return this.zero;
                var u = new Uint8ClampedArray(m + 1);
                return u[0] = f, new o.default(this, u);
              }, l.prototype.log = function(m) {
                if (m === 0)
                  throw new Error("Can't take log(0)");
                return this.logTable[m];
              }, l.prototype.exp = function(m) {
                return this.expTable[m];
              }, l;
            }()
          );
          n.default = i;
        },
        /* 2 */
        /***/
        function(r, n, a) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var o = a(1), s = (
            /** @class */
            function() {
              function i(l, m) {
                if (m.length === 0)
                  throw new Error("No coefficients.");
                this.field = l;
                var f = m.length;
                if (f > 1 && m[0] === 0) {
                  for (var u = 1; u < f && m[u] === 0; )
                    u++;
                  if (u === f)
                    this.coefficients = l.zero.coefficients;
                  else {
                    this.coefficients = new Uint8ClampedArray(f - u);
                    for (var p = 0; p < this.coefficients.length; p++)
                      this.coefficients[p] = m[u + p];
                  }
                } else
                  this.coefficients = m;
              }
              return i.prototype.degree = function() {
                return this.coefficients.length - 1;
              }, i.prototype.isZero = function() {
                return this.coefficients[0] === 0;
              }, i.prototype.getCoefficient = function(l) {
                return this.coefficients[this.coefficients.length - 1 - l];
              }, i.prototype.addOrSubtract = function(l) {
                var m;
                if (this.isZero())
                  return l;
                if (l.isZero())
                  return this;
                var f = this.coefficients, u = l.coefficients;
                f.length > u.length && (m = [u, f], f = m[0], u = m[1]);
                for (var p = new Uint8ClampedArray(u.length), c = u.length - f.length, d = 0; d < c; d++)
                  p[d] = u[d];
                for (var d = c; d < u.length; d++)
                  p[d] = o.addOrSubtractGF(f[d - c], u[d]);
                return new i(this.field, p);
              }, i.prototype.multiply = function(l) {
                if (l === 0)
                  return this.field.zero;
                if (l === 1)
                  return this;
                for (var m = this.coefficients.length, f = new Uint8ClampedArray(m), u = 0; u < m; u++)
                  f[u] = this.field.multiply(this.coefficients[u], l);
                return new i(this.field, f);
              }, i.prototype.multiplyPoly = function(l) {
                if (this.isZero() || l.isZero())
                  return this.field.zero;
                for (var m = this.coefficients, f = m.length, u = l.coefficients, p = u.length, c = new Uint8ClampedArray(f + p - 1), d = 0; d < f; d++)
                  for (var v = m[d], h = 0; h < p; h++)
                    c[d + h] = o.addOrSubtractGF(c[d + h], this.field.multiply(v, u[h]));
                return new i(this.field, c);
              }, i.prototype.multiplyByMonomial = function(l, m) {
                if (l < 0)
                  throw new Error("Invalid degree less than 0");
                if (m === 0)
                  return this.field.zero;
                for (var f = this.coefficients.length, u = new Uint8ClampedArray(f + l), p = 0; p < f; p++)
                  u[p] = this.field.multiply(this.coefficients[p], m);
                return new i(this.field, u);
              }, i.prototype.evaluateAt = function(l) {
                var m = 0;
                if (l === 0)
                  return this.getCoefficient(0);
                var f = this.coefficients.length;
                if (l === 1)
                  return this.coefficients.forEach(function(p) {
                    m = o.addOrSubtractGF(m, p);
                  }), m;
                m = this.coefficients[0];
                for (var u = 1; u < f; u++)
                  m = o.addOrSubtractGF(this.field.multiply(l, m), this.coefficients[u]);
                return m;
              }, i;
            }()
          );
          n.default = s;
        },
        /* 3 */
        /***/
        function(r, n, a) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var o = a(4), s = a(5), i = a(11), l = a(12);
          function m(p) {
            var c = l.locate(p);
            if (!c)
              return null;
            for (var d = 0, v = c; d < v.length; d++) {
              var h = v[d], y = i.extract(p, h), A = s.decode(y.matrix);
              if (A)
                return {
                  binaryData: A.bytes,
                  data: A.text,
                  chunks: A.chunks,
                  version: A.version,
                  location: {
                    topRightCorner: y.mappingFunction(h.dimension, 0),
                    topLeftCorner: y.mappingFunction(0, 0),
                    bottomRightCorner: y.mappingFunction(h.dimension, h.dimension),
                    bottomLeftCorner: y.mappingFunction(0, h.dimension),
                    topRightFinderPattern: h.topRight,
                    topLeftFinderPattern: h.topLeft,
                    bottomLeftFinderPattern: h.bottomLeft,
                    bottomRightAlignmentPattern: h.alignmentPattern
                  }
                };
            }
            return null;
          }
          var f = {
            inversionAttempts: "attemptBoth"
          };
          function u(p, c, d, v) {
            v === void 0 && (v = {});
            var h = f;
            Object.keys(h || {}).forEach(function(k) {
              h[k] = v[k] || h[k];
            });
            var y = h.inversionAttempts === "attemptBoth" || h.inversionAttempts === "invertFirst", A = h.inversionAttempts === "onlyInvert" || h.inversionAttempts === "invertFirst", C = o.binarize(p, c, d, y), g = C.binarized, w = C.inverted, B = m(A ? w : g);
            return !B && (h.inversionAttempts === "attemptBoth" || h.inversionAttempts === "invertFirst") && (B = m(A ? g : w)), B;
          }
          u.default = u, n.default = u;
        },
        /* 4 */
        /***/
        function(r, n, a) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var o = a(0), s = 8, i = 24;
          function l(u, p, c) {
            return u < p ? p : u > c ? c : u;
          }
          var m = (
            /** @class */
            function() {
              function u(p, c) {
                this.width = p, this.data = new Uint8ClampedArray(p * c);
              }
              return u.prototype.get = function(p, c) {
                return this.data[c * this.width + p];
              }, u.prototype.set = function(p, c, d) {
                this.data[c * this.width + p] = d;
              }, u;
            }()
          );
          function f(u, p, c, d) {
            if (u.length !== p * c * 4)
              throw new Error("Malformed data passed to binarizer.");
            for (var v = new m(p, c), h = 0; h < p; h++)
              for (var y = 0; y < c; y++) {
                var A = u[(y * p + h) * 4 + 0], C = u[(y * p + h) * 4 + 1], g = u[(y * p + h) * 4 + 2];
                v.set(h, y, 0.2126 * A + 0.7152 * C + 0.0722 * g);
              }
            for (var w = Math.ceil(p / s), B = Math.ceil(c / s), k = new m(w, B), E = 0; E < B; E++)
              for (var S = 0; S < w; S++) {
                for (var I = 0, T = 1 / 0, x = 0, y = 0; y < s; y++)
                  for (var h = 0; h < s; h++) {
                    var R = v.get(S * s + h, E * s + y);
                    I += R, T = Math.min(T, R), x = Math.max(x, R);
                  }
                var j = I / Math.pow(s, 2);
                if (x - T <= i && (j = T / 2, E > 0 && S > 0)) {
                  var L = (k.get(S, E - 1) + 2 * k.get(S - 1, E) + k.get(S - 1, E - 1)) / 4;
                  T < L && (j = L);
                }
                k.set(S, E, j);
              }
            var Q = o.BitMatrix.createEmpty(p, c), D = null;
            d && (D = o.BitMatrix.createEmpty(p, c));
            for (var E = 0; E < B; E++)
              for (var S = 0; S < w; S++) {
                for (var te = l(S, 2, w - 3), q = l(E, 2, B - 3), I = 0, M = -2; M <= 2; M++)
                  for (var N = -2; N <= 2; N++)
                    I += k.get(te + M, q + N);
                for (var X = I / 25, M = 0; M < s; M++)
                  for (var N = 0; N < s; N++) {
                    var h = S * s + M, y = E * s + N, K = v.get(h, y);
                    Q.set(h, y, K <= X), d && D.set(h, y, !(K <= X));
                  }
              }
            return d ? { binarized: Q, inverted: D } : { binarized: Q };
          }
          n.binarize = f;
        },
        /* 5 */
        /***/
        function(r, n, a) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var o = a(0), s = a(6), i = a(9), l = a(10);
          function m(g, w) {
            for (var B = g ^ w, k = 0; B; )
              k++, B &= B - 1;
            return k;
          }
          function f(g, w) {
            return w << 1 | g;
          }
          var u = [
            { bits: 21522, formatInfo: { errorCorrectionLevel: 1, dataMask: 0 } },
            { bits: 20773, formatInfo: { errorCorrectionLevel: 1, dataMask: 1 } },
            { bits: 24188, formatInfo: { errorCorrectionLevel: 1, dataMask: 2 } },
            { bits: 23371, formatInfo: { errorCorrectionLevel: 1, dataMask: 3 } },
            { bits: 17913, formatInfo: { errorCorrectionLevel: 1, dataMask: 4 } },
            { bits: 16590, formatInfo: { errorCorrectionLevel: 1, dataMask: 5 } },
            { bits: 20375, formatInfo: { errorCorrectionLevel: 1, dataMask: 6 } },
            { bits: 19104, formatInfo: { errorCorrectionLevel: 1, dataMask: 7 } },
            { bits: 30660, formatInfo: { errorCorrectionLevel: 0, dataMask: 0 } },
            { bits: 29427, formatInfo: { errorCorrectionLevel: 0, dataMask: 1 } },
            { bits: 32170, formatInfo: { errorCorrectionLevel: 0, dataMask: 2 } },
            { bits: 30877, formatInfo: { errorCorrectionLevel: 0, dataMask: 3 } },
            { bits: 26159, formatInfo: { errorCorrectionLevel: 0, dataMask: 4 } },
            { bits: 25368, formatInfo: { errorCorrectionLevel: 0, dataMask: 5 } },
            { bits: 27713, formatInfo: { errorCorrectionLevel: 0, dataMask: 6 } },
            { bits: 26998, formatInfo: { errorCorrectionLevel: 0, dataMask: 7 } },
            { bits: 5769, formatInfo: { errorCorrectionLevel: 3, dataMask: 0 } },
            { bits: 5054, formatInfo: { errorCorrectionLevel: 3, dataMask: 1 } },
            { bits: 7399, formatInfo: { errorCorrectionLevel: 3, dataMask: 2 } },
            { bits: 6608, formatInfo: { errorCorrectionLevel: 3, dataMask: 3 } },
            { bits: 1890, formatInfo: { errorCorrectionLevel: 3, dataMask: 4 } },
            { bits: 597, formatInfo: { errorCorrectionLevel: 3, dataMask: 5 } },
            { bits: 3340, formatInfo: { errorCorrectionLevel: 3, dataMask: 6 } },
            { bits: 2107, formatInfo: { errorCorrectionLevel: 3, dataMask: 7 } },
            { bits: 13663, formatInfo: { errorCorrectionLevel: 2, dataMask: 0 } },
            { bits: 12392, formatInfo: { errorCorrectionLevel: 2, dataMask: 1 } },
            { bits: 16177, formatInfo: { errorCorrectionLevel: 2, dataMask: 2 } },
            { bits: 14854, formatInfo: { errorCorrectionLevel: 2, dataMask: 3 } },
            { bits: 9396, formatInfo: { errorCorrectionLevel: 2, dataMask: 4 } },
            { bits: 8579, formatInfo: { errorCorrectionLevel: 2, dataMask: 5 } },
            { bits: 11994, formatInfo: { errorCorrectionLevel: 2, dataMask: 6 } },
            { bits: 11245, formatInfo: { errorCorrectionLevel: 2, dataMask: 7 } }
          ], p = [
            function(g) {
              return (g.y + g.x) % 2 === 0;
            },
            function(g) {
              return g.y % 2 === 0;
            },
            function(g) {
              return g.x % 3 === 0;
            },
            function(g) {
              return (g.y + g.x) % 3 === 0;
            },
            function(g) {
              return (Math.floor(g.y / 2) + Math.floor(g.x / 3)) % 2 === 0;
            },
            function(g) {
              return g.x * g.y % 2 + g.x * g.y % 3 === 0;
            },
            function(g) {
              return (g.y * g.x % 2 + g.y * g.x % 3) % 2 === 0;
            },
            function(g) {
              return ((g.y + g.x) % 2 + g.y * g.x % 3) % 2 === 0;
            }
          ];
          function c(g) {
            var w = 17 + 4 * g.versionNumber, B = o.BitMatrix.createEmpty(w, w);
            B.setRegion(0, 0, 9, 9, !0), B.setRegion(w - 8, 0, 8, 9, !0), B.setRegion(0, w - 8, 9, 8, !0);
            for (var k = 0, E = g.alignmentPatternCenters; k < E.length; k++)
              for (var S = E[k], I = 0, T = g.alignmentPatternCenters; I < T.length; I++) {
                var x = T[I];
                S === 6 && x === 6 || S === 6 && x === w - 7 || S === w - 7 && x === 6 || B.setRegion(S - 2, x - 2, 5, 5, !0);
              }
            return B.setRegion(6, 9, 1, w - 17, !0), B.setRegion(9, 6, w - 17, 1, !0), g.versionNumber > 6 && (B.setRegion(w - 11, 0, 3, 6, !0), B.setRegion(0, w - 11, 6, 3, !0)), B;
          }
          function d(g, w, B) {
            for (var k = p[B.dataMask], E = g.height, S = c(w), I = [], T = 0, x = 0, R = !0, j = E - 1; j > 0; j -= 2) {
              j === 6 && j--;
              for (var L = 0; L < E; L++)
                for (var Q = R ? E - 1 - L : L, D = 0; D < 2; D++) {
                  var te = j - D;
                  if (!S.get(te, Q)) {
                    x++;
                    var q = g.get(te, Q);
                    k({ y: Q, x: te }) && (q = !q), T = f(q, T), x === 8 && (I.push(T), x = 0, T = 0);
                  }
                }
              R = !R;
            }
            return I;
          }
          function v(g) {
            var w = g.height, B = Math.floor((w - 17) / 4);
            if (B <= 6)
              return l.VERSIONS[B - 1];
            for (var k = 0, E = 5; E >= 0; E--)
              for (var S = w - 9; S >= w - 11; S--)
                k = f(g.get(S, E), k);
            for (var I = 0, S = 5; S >= 0; S--)
              for (var E = w - 9; E >= w - 11; E--)
                I = f(g.get(S, E), I);
            for (var T = 1 / 0, x, R = 0, j = l.VERSIONS; R < j.length; R++) {
              var L = j[R];
              if (L.infoBits === k || L.infoBits === I)
                return L;
              var Q = m(k, L.infoBits);
              Q < T && (x = L, T = Q), Q = m(I, L.infoBits), Q < T && (x = L, T = Q);
            }
            if (T <= 3)
              return x;
          }
          function h(g) {
            for (var w = 0, B = 0; B <= 8; B++)
              B !== 6 && (w = f(g.get(B, 8), w));
            for (var k = 7; k >= 0; k--)
              k !== 6 && (w = f(g.get(8, k), w));
            for (var E = g.height, S = 0, k = E - 1; k >= E - 7; k--)
              S = f(g.get(8, k), S);
            for (var B = E - 8; B < E; B++)
              S = f(g.get(B, 8), S);
            for (var I = 1 / 0, T = null, x = 0, R = u; x < R.length; x++) {
              var j = R[x], L = j.bits, Q = j.formatInfo;
              if (L === w || L === S)
                return Q;
              var D = m(w, L);
              D < I && (T = Q, I = D), w !== S && (D = m(S, L), D < I && (T = Q, I = D));
            }
            return I <= 3 ? T : null;
          }
          function y(g, w, B) {
            var k = w.errorCorrectionLevels[B], E = [], S = 0;
            if (k.ecBlocks.forEach(function(q) {
              for (var M = 0; M < q.numBlocks; M++)
                E.push({ numDataCodewords: q.dataCodewordsPerBlock, codewords: [] }), S += q.dataCodewordsPerBlock + k.ecCodewordsPerBlock;
            }), g.length < S)
              return null;
            g = g.slice(0, S);
            for (var I = k.ecBlocks[0].dataCodewordsPerBlock, T = 0; T < I; T++)
              for (var x = 0, R = E; x < R.length; x++) {
                var j = R[x];
                j.codewords.push(g.shift());
              }
            if (k.ecBlocks.length > 1)
              for (var L = k.ecBlocks[0].numBlocks, Q = k.ecBlocks[1].numBlocks, T = 0; T < Q; T++)
                E[L + T].codewords.push(g.shift());
            for (; g.length > 0; )
              for (var D = 0, te = E; D < te.length; D++) {
                var j = te[D];
                j.codewords.push(g.shift());
              }
            return E;
          }
          function A(g) {
            var w = v(g);
            if (!w)
              return null;
            var B = h(g);
            if (!B)
              return null;
            var k = d(g, w, B), E = y(k, w, B.errorCorrectionLevel);
            if (!E)
              return null;
            for (var S = E.reduce(function(D, te) {
              return D + te.numDataCodewords;
            }, 0), I = new Uint8ClampedArray(S), T = 0, x = 0, R = E; x < R.length; x++) {
              var j = R[x], L = i.decode(j.codewords, j.codewords.length - j.numDataCodewords);
              if (!L)
                return null;
              for (var Q = 0; Q < j.numDataCodewords; Q++)
                I[T++] = L[Q];
            }
            try {
              return s.decode(I, w.versionNumber);
            } catch {
              return null;
            }
          }
          function C(g) {
            if (g == null)
              return null;
            var w = A(g);
            if (w)
              return w;
            for (var B = 0; B < g.width; B++)
              for (var k = B + 1; k < g.height; k++)
                g.get(B, k) !== g.get(k, B) && (g.set(B, k, !g.get(B, k)), g.set(k, B, !g.get(k, B)));
            return A(g);
          }
          n.decode = C;
        },
        /* 6 */
        /***/
        function(r, n, a) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var o = a(7), s = a(8), i;
          (function(v) {
            v.Numeric = "numeric", v.Alphanumeric = "alphanumeric", v.Byte = "byte", v.Kanji = "kanji", v.ECI = "eci";
          })(i = n.Mode || (n.Mode = {}));
          var l;
          (function(v) {
            v[v.Terminator = 0] = "Terminator", v[v.Numeric = 1] = "Numeric", v[v.Alphanumeric = 2] = "Alphanumeric", v[v.Byte = 4] = "Byte", v[v.Kanji = 8] = "Kanji", v[v.ECI = 7] = "ECI";
          })(l || (l = {}));
          function m(v, h) {
            for (var y = [], A = "", C = [10, 12, 14][h], g = v.readBits(C); g >= 3; ) {
              var w = v.readBits(10);
              if (w >= 1e3)
                throw new Error("Invalid numeric value above 999");
              var B = Math.floor(w / 100), k = Math.floor(w / 10) % 10, E = w % 10;
              y.push(48 + B, 48 + k, 48 + E), A += B.toString() + k.toString() + E.toString(), g -= 3;
            }
            if (g === 2) {
              var w = v.readBits(7);
              if (w >= 100)
                throw new Error("Invalid numeric value above 99");
              var B = Math.floor(w / 10), k = w % 10;
              y.push(48 + B, 48 + k), A += B.toString() + k.toString();
            } else if (g === 1) {
              var w = v.readBits(4);
              if (w >= 10)
                throw new Error("Invalid numeric value above 9");
              y.push(48 + w), A += w.toString();
            }
            return { bytes: y, text: A };
          }
          var f = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
            " ",
            "$",
            "%",
            "*",
            "+",
            "-",
            ".",
            "/",
            ":"
          ];
          function u(v, h) {
            for (var y = [], A = "", C = [9, 11, 13][h], g = v.readBits(C); g >= 2; ) {
              var w = v.readBits(11), B = Math.floor(w / 45), k = w % 45;
              y.push(f[B].charCodeAt(0), f[k].charCodeAt(0)), A += f[B] + f[k], g -= 2;
            }
            if (g === 1) {
              var B = v.readBits(6);
              y.push(f[B].charCodeAt(0)), A += f[B];
            }
            return { bytes: y, text: A };
          }
          function p(v, h) {
            for (var y = [], A = "", C = [8, 16, 16][h], g = v.readBits(C), w = 0; w < g; w++) {
              var B = v.readBits(8);
              y.push(B);
            }
            try {
              A += decodeURIComponent(y.map(function(k) {
                return "%" + ("0" + k.toString(16)).substr(-2);
              }).join(""));
            } catch {
            }
            return { bytes: y, text: A };
          }
          function c(v, h) {
            for (var y = [], A = "", C = [8, 10, 12][h], g = v.readBits(C), w = 0; w < g; w++) {
              var B = v.readBits(13), k = Math.floor(B / 192) << 8 | B % 192;
              k < 7936 ? k += 33088 : k += 49472, y.push(k >> 8, k & 255), A += String.fromCharCode(s.shiftJISTable[k]);
            }
            return { bytes: y, text: A };
          }
          function d(v, h) {
            for (var y, A, C, g, w = new o.BitStream(v), B = h <= 9 ? 0 : h <= 26 ? 1 : 2, k = {
              text: "",
              bytes: [],
              chunks: [],
              version: h
            }; w.available() >= 4; ) {
              var E = w.readBits(4);
              if (E === l.Terminator)
                return k;
              if (E === l.ECI)
                w.readBits(1) === 0 ? k.chunks.push({
                  type: i.ECI,
                  assignmentNumber: w.readBits(7)
                }) : w.readBits(1) === 0 ? k.chunks.push({
                  type: i.ECI,
                  assignmentNumber: w.readBits(14)
                }) : w.readBits(1) === 0 ? k.chunks.push({
                  type: i.ECI,
                  assignmentNumber: w.readBits(21)
                }) : k.chunks.push({
                  type: i.ECI,
                  assignmentNumber: -1
                });
              else if (E === l.Numeric) {
                var S = m(w, B);
                k.text += S.text, (y = k.bytes).push.apply(y, S.bytes), k.chunks.push({
                  type: i.Numeric,
                  text: S.text
                });
              } else if (E === l.Alphanumeric) {
                var I = u(w, B);
                k.text += I.text, (A = k.bytes).push.apply(A, I.bytes), k.chunks.push({
                  type: i.Alphanumeric,
                  text: I.text
                });
              } else if (E === l.Byte) {
                var T = p(w, B);
                k.text += T.text, (C = k.bytes).push.apply(C, T.bytes), k.chunks.push({
                  type: i.Byte,
                  bytes: T.bytes,
                  text: T.text
                });
              } else if (E === l.Kanji) {
                var x = c(w, B);
                k.text += x.text, (g = k.bytes).push.apply(g, x.bytes), k.chunks.push({
                  type: i.Kanji,
                  bytes: x.bytes,
                  text: x.text
                });
              }
            }
            if (w.available() === 0 || w.readBits(w.available()) === 0)
              return k;
          }
          n.decode = d;
        },
        /* 7 */
        /***/
        function(r, n, a) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var o = (
            /** @class */
            function() {
              function s(i) {
                this.byteOffset = 0, this.bitOffset = 0, this.bytes = i;
              }
              return s.prototype.readBits = function(i) {
                if (i < 1 || i > 32 || i > this.available())
                  throw new Error("Cannot read " + i.toString() + " bits");
                var l = 0;
                if (this.bitOffset > 0) {
                  var m = 8 - this.bitOffset, f = i < m ? i : m, u = m - f, p = 255 >> 8 - f << u;
                  l = (this.bytes[this.byteOffset] & p) >> u, i -= f, this.bitOffset += f, this.bitOffset === 8 && (this.bitOffset = 0, this.byteOffset++);
                }
                if (i > 0) {
                  for (; i >= 8; )
                    l = l << 8 | this.bytes[this.byteOffset] & 255, this.byteOffset++, i -= 8;
                  if (i > 0) {
                    var u = 8 - i, p = 255 >> u << u;
                    l = l << i | (this.bytes[this.byteOffset] & p) >> u, this.bitOffset += i;
                  }
                }
                return l;
              }, s.prototype.available = function() {
                return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
              }, s;
            }()
          );
          n.BitStream = o;
        },
        /* 8 */
        /***/
        function(r, n, a) {
          Object.defineProperty(n, "__esModule", { value: !0 }), n.shiftJISTable = {
            32: 32,
            33: 33,
            34: 34,
            35: 35,
            36: 36,
            37: 37,
            38: 38,
            39: 39,
            40: 40,
            41: 41,
            42: 42,
            43: 43,
            44: 44,
            45: 45,
            46: 46,
            47: 47,
            48: 48,
            49: 49,
            50: 50,
            51: 51,
            52: 52,
            53: 53,
            54: 54,
            55: 55,
            56: 56,
            57: 57,
            58: 58,
            59: 59,
            60: 60,
            61: 61,
            62: 62,
            63: 63,
            64: 64,
            65: 65,
            66: 66,
            67: 67,
            68: 68,
            69: 69,
            70: 70,
            71: 71,
            72: 72,
            73: 73,
            74: 74,
            75: 75,
            76: 76,
            77: 77,
            78: 78,
            79: 79,
            80: 80,
            81: 81,
            82: 82,
            83: 83,
            84: 84,
            85: 85,
            86: 86,
            87: 87,
            88: 88,
            89: 89,
            90: 90,
            91: 91,
            92: 165,
            93: 93,
            94: 94,
            95: 95,
            96: 96,
            97: 97,
            98: 98,
            99: 99,
            100: 100,
            101: 101,
            102: 102,
            103: 103,
            104: 104,
            105: 105,
            106: 106,
            107: 107,
            108: 108,
            109: 109,
            110: 110,
            111: 111,
            112: 112,
            113: 113,
            114: 114,
            115: 115,
            116: 116,
            117: 117,
            118: 118,
            119: 119,
            120: 120,
            121: 121,
            122: 122,
            123: 123,
            124: 124,
            125: 125,
            126: 8254,
            33088: 12288,
            33089: 12289,
            33090: 12290,
            33091: 65292,
            33092: 65294,
            33093: 12539,
            33094: 65306,
            33095: 65307,
            33096: 65311,
            33097: 65281,
            33098: 12443,
            33099: 12444,
            33100: 180,
            33101: 65344,
            33102: 168,
            33103: 65342,
            33104: 65507,
            33105: 65343,
            33106: 12541,
            33107: 12542,
            33108: 12445,
            33109: 12446,
            33110: 12291,
            33111: 20189,
            33112: 12293,
            33113: 12294,
            33114: 12295,
            33115: 12540,
            33116: 8213,
            33117: 8208,
            33118: 65295,
            33119: 92,
            33120: 12316,
            33121: 8214,
            33122: 65372,
            33123: 8230,
            33124: 8229,
            33125: 8216,
            33126: 8217,
            33127: 8220,
            33128: 8221,
            33129: 65288,
            33130: 65289,
            33131: 12308,
            33132: 12309,
            33133: 65339,
            33134: 65341,
            33135: 65371,
            33136: 65373,
            33137: 12296,
            33138: 12297,
            33139: 12298,
            33140: 12299,
            33141: 12300,
            33142: 12301,
            33143: 12302,
            33144: 12303,
            33145: 12304,
            33146: 12305,
            33147: 65291,
            33148: 8722,
            33149: 177,
            33150: 215,
            33152: 247,
            33153: 65309,
            33154: 8800,
            33155: 65308,
            33156: 65310,
            33157: 8806,
            33158: 8807,
            33159: 8734,
            33160: 8756,
            33161: 9794,
            33162: 9792,
            33163: 176,
            33164: 8242,
            33165: 8243,
            33166: 8451,
            33167: 65509,
            33168: 65284,
            33169: 162,
            33170: 163,
            33171: 65285,
            33172: 65283,
            33173: 65286,
            33174: 65290,
            33175: 65312,
            33176: 167,
            33177: 9734,
            33178: 9733,
            33179: 9675,
            33180: 9679,
            33181: 9678,
            33182: 9671,
            33183: 9670,
            33184: 9633,
            33185: 9632,
            33186: 9651,
            33187: 9650,
            33188: 9661,
            33189: 9660,
            33190: 8251,
            33191: 12306,
            33192: 8594,
            33193: 8592,
            33194: 8593,
            33195: 8595,
            33196: 12307,
            33208: 8712,
            33209: 8715,
            33210: 8838,
            33211: 8839,
            33212: 8834,
            33213: 8835,
            33214: 8746,
            33215: 8745,
            33224: 8743,
            33225: 8744,
            33226: 172,
            33227: 8658,
            33228: 8660,
            33229: 8704,
            33230: 8707,
            33242: 8736,
            33243: 8869,
            33244: 8978,
            33245: 8706,
            33246: 8711,
            33247: 8801,
            33248: 8786,
            33249: 8810,
            33250: 8811,
            33251: 8730,
            33252: 8765,
            33253: 8733,
            33254: 8757,
            33255: 8747,
            33256: 8748,
            33264: 8491,
            33265: 8240,
            33266: 9839,
            33267: 9837,
            33268: 9834,
            33269: 8224,
            33270: 8225,
            33271: 182,
            33276: 9711,
            33359: 65296,
            33360: 65297,
            33361: 65298,
            33362: 65299,
            33363: 65300,
            33364: 65301,
            33365: 65302,
            33366: 65303,
            33367: 65304,
            33368: 65305,
            33376: 65313,
            33377: 65314,
            33378: 65315,
            33379: 65316,
            33380: 65317,
            33381: 65318,
            33382: 65319,
            33383: 65320,
            33384: 65321,
            33385: 65322,
            33386: 65323,
            33387: 65324,
            33388: 65325,
            33389: 65326,
            33390: 65327,
            33391: 65328,
            33392: 65329,
            33393: 65330,
            33394: 65331,
            33395: 65332,
            33396: 65333,
            33397: 65334,
            33398: 65335,
            33399: 65336,
            33400: 65337,
            33401: 65338,
            33409: 65345,
            33410: 65346,
            33411: 65347,
            33412: 65348,
            33413: 65349,
            33414: 65350,
            33415: 65351,
            33416: 65352,
            33417: 65353,
            33418: 65354,
            33419: 65355,
            33420: 65356,
            33421: 65357,
            33422: 65358,
            33423: 65359,
            33424: 65360,
            33425: 65361,
            33426: 65362,
            33427: 65363,
            33428: 65364,
            33429: 65365,
            33430: 65366,
            33431: 65367,
            33432: 65368,
            33433: 65369,
            33434: 65370,
            33439: 12353,
            33440: 12354,
            33441: 12355,
            33442: 12356,
            33443: 12357,
            33444: 12358,
            33445: 12359,
            33446: 12360,
            33447: 12361,
            33448: 12362,
            33449: 12363,
            33450: 12364,
            33451: 12365,
            33452: 12366,
            33453: 12367,
            33454: 12368,
            33455: 12369,
            33456: 12370,
            33457: 12371,
            33458: 12372,
            33459: 12373,
            33460: 12374,
            33461: 12375,
            33462: 12376,
            33463: 12377,
            33464: 12378,
            33465: 12379,
            33466: 12380,
            33467: 12381,
            33468: 12382,
            33469: 12383,
            33470: 12384,
            33471: 12385,
            33472: 12386,
            33473: 12387,
            33474: 12388,
            33475: 12389,
            33476: 12390,
            33477: 12391,
            33478: 12392,
            33479: 12393,
            33480: 12394,
            33481: 12395,
            33482: 12396,
            33483: 12397,
            33484: 12398,
            33485: 12399,
            33486: 12400,
            33487: 12401,
            33488: 12402,
            33489: 12403,
            33490: 12404,
            33491: 12405,
            33492: 12406,
            33493: 12407,
            33494: 12408,
            33495: 12409,
            33496: 12410,
            33497: 12411,
            33498: 12412,
            33499: 12413,
            33500: 12414,
            33501: 12415,
            33502: 12416,
            33503: 12417,
            33504: 12418,
            33505: 12419,
            33506: 12420,
            33507: 12421,
            33508: 12422,
            33509: 12423,
            33510: 12424,
            33511: 12425,
            33512: 12426,
            33513: 12427,
            33514: 12428,
            33515: 12429,
            33516: 12430,
            33517: 12431,
            33518: 12432,
            33519: 12433,
            33520: 12434,
            33521: 12435,
            33600: 12449,
            33601: 12450,
            33602: 12451,
            33603: 12452,
            33604: 12453,
            33605: 12454,
            33606: 12455,
            33607: 12456,
            33608: 12457,
            33609: 12458,
            33610: 12459,
            33611: 12460,
            33612: 12461,
            33613: 12462,
            33614: 12463,
            33615: 12464,
            33616: 12465,
            33617: 12466,
            33618: 12467,
            33619: 12468,
            33620: 12469,
            33621: 12470,
            33622: 12471,
            33623: 12472,
            33624: 12473,
            33625: 12474,
            33626: 12475,
            33627: 12476,
            33628: 12477,
            33629: 12478,
            33630: 12479,
            33631: 12480,
            33632: 12481,
            33633: 12482,
            33634: 12483,
            33635: 12484,
            33636: 12485,
            33637: 12486,
            33638: 12487,
            33639: 12488,
            33640: 12489,
            33641: 12490,
            33642: 12491,
            33643: 12492,
            33644: 12493,
            33645: 12494,
            33646: 12495,
            33647: 12496,
            33648: 12497,
            33649: 12498,
            33650: 12499,
            33651: 12500,
            33652: 12501,
            33653: 12502,
            33654: 12503,
            33655: 12504,
            33656: 12505,
            33657: 12506,
            33658: 12507,
            33659: 12508,
            33660: 12509,
            33661: 12510,
            33662: 12511,
            33664: 12512,
            33665: 12513,
            33666: 12514,
            33667: 12515,
            33668: 12516,
            33669: 12517,
            33670: 12518,
            33671: 12519,
            33672: 12520,
            33673: 12521,
            33674: 12522,
            33675: 12523,
            33676: 12524,
            33677: 12525,
            33678: 12526,
            33679: 12527,
            33680: 12528,
            33681: 12529,
            33682: 12530,
            33683: 12531,
            33684: 12532,
            33685: 12533,
            33686: 12534,
            33695: 913,
            33696: 914,
            33697: 915,
            33698: 916,
            33699: 917,
            33700: 918,
            33701: 919,
            33702: 920,
            33703: 921,
            33704: 922,
            33705: 923,
            33706: 924,
            33707: 925,
            33708: 926,
            33709: 927,
            33710: 928,
            33711: 929,
            33712: 931,
            33713: 932,
            33714: 933,
            33715: 934,
            33716: 935,
            33717: 936,
            33718: 937,
            33727: 945,
            33728: 946,
            33729: 947,
            33730: 948,
            33731: 949,
            33732: 950,
            33733: 951,
            33734: 952,
            33735: 953,
            33736: 954,
            33737: 955,
            33738: 956,
            33739: 957,
            33740: 958,
            33741: 959,
            33742: 960,
            33743: 961,
            33744: 963,
            33745: 964,
            33746: 965,
            33747: 966,
            33748: 967,
            33749: 968,
            33750: 969,
            33856: 1040,
            33857: 1041,
            33858: 1042,
            33859: 1043,
            33860: 1044,
            33861: 1045,
            33862: 1025,
            33863: 1046,
            33864: 1047,
            33865: 1048,
            33866: 1049,
            33867: 1050,
            33868: 1051,
            33869: 1052,
            33870: 1053,
            33871: 1054,
            33872: 1055,
            33873: 1056,
            33874: 1057,
            33875: 1058,
            33876: 1059,
            33877: 1060,
            33878: 1061,
            33879: 1062,
            33880: 1063,
            33881: 1064,
            33882: 1065,
            33883: 1066,
            33884: 1067,
            33885: 1068,
            33886: 1069,
            33887: 1070,
            33888: 1071,
            33904: 1072,
            33905: 1073,
            33906: 1074,
            33907: 1075,
            33908: 1076,
            33909: 1077,
            33910: 1105,
            33911: 1078,
            33912: 1079,
            33913: 1080,
            33914: 1081,
            33915: 1082,
            33916: 1083,
            33917: 1084,
            33918: 1085,
            33920: 1086,
            33921: 1087,
            33922: 1088,
            33923: 1089,
            33924: 1090,
            33925: 1091,
            33926: 1092,
            33927: 1093,
            33928: 1094,
            33929: 1095,
            33930: 1096,
            33931: 1097,
            33932: 1098,
            33933: 1099,
            33934: 1100,
            33935: 1101,
            33936: 1102,
            33937: 1103,
            33951: 9472,
            33952: 9474,
            33953: 9484,
            33954: 9488,
            33955: 9496,
            33956: 9492,
            33957: 9500,
            33958: 9516,
            33959: 9508,
            33960: 9524,
            33961: 9532,
            33962: 9473,
            33963: 9475,
            33964: 9487,
            33965: 9491,
            33966: 9499,
            33967: 9495,
            33968: 9507,
            33969: 9523,
            33970: 9515,
            33971: 9531,
            33972: 9547,
            33973: 9504,
            33974: 9519,
            33975: 9512,
            33976: 9527,
            33977: 9535,
            33978: 9501,
            33979: 9520,
            33980: 9509,
            33981: 9528,
            33982: 9538,
            34975: 20124,
            34976: 21782,
            34977: 23043,
            34978: 38463,
            34979: 21696,
            34980: 24859,
            34981: 25384,
            34982: 23030,
            34983: 36898,
            34984: 33909,
            34985: 33564,
            34986: 31312,
            34987: 24746,
            34988: 25569,
            34989: 28197,
            34990: 26093,
            34991: 33894,
            34992: 33446,
            34993: 39925,
            34994: 26771,
            34995: 22311,
            34996: 26017,
            34997: 25201,
            34998: 23451,
            34999: 22992,
            35e3: 34427,
            35001: 39156,
            35002: 32098,
            35003: 32190,
            35004: 39822,
            35005: 25110,
            35006: 31903,
            35007: 34999,
            35008: 23433,
            35009: 24245,
            35010: 25353,
            35011: 26263,
            35012: 26696,
            35013: 38343,
            35014: 38797,
            35015: 26447,
            35016: 20197,
            35017: 20234,
            35018: 20301,
            35019: 20381,
            35020: 20553,
            35021: 22258,
            35022: 22839,
            35023: 22996,
            35024: 23041,
            35025: 23561,
            35026: 24799,
            35027: 24847,
            35028: 24944,
            35029: 26131,
            35030: 26885,
            35031: 28858,
            35032: 30031,
            35033: 30064,
            35034: 31227,
            35035: 32173,
            35036: 32239,
            35037: 32963,
            35038: 33806,
            35039: 34915,
            35040: 35586,
            35041: 36949,
            35042: 36986,
            35043: 21307,
            35044: 20117,
            35045: 20133,
            35046: 22495,
            35047: 32946,
            35048: 37057,
            35049: 30959,
            35050: 19968,
            35051: 22769,
            35052: 28322,
            35053: 36920,
            35054: 31282,
            35055: 33576,
            35056: 33419,
            35057: 39983,
            35058: 20801,
            35059: 21360,
            35060: 21693,
            35061: 21729,
            35062: 22240,
            35063: 23035,
            35064: 24341,
            35065: 39154,
            35066: 28139,
            35067: 32996,
            35068: 34093,
            35136: 38498,
            35137: 38512,
            35138: 38560,
            35139: 38907,
            35140: 21515,
            35141: 21491,
            35142: 23431,
            35143: 28879,
            35144: 32701,
            35145: 36802,
            35146: 38632,
            35147: 21359,
            35148: 40284,
            35149: 31418,
            35150: 19985,
            35151: 30867,
            35152: 33276,
            35153: 28198,
            35154: 22040,
            35155: 21764,
            35156: 27421,
            35157: 34074,
            35158: 39995,
            35159: 23013,
            35160: 21417,
            35161: 28006,
            35162: 29916,
            35163: 38287,
            35164: 22082,
            35165: 20113,
            35166: 36939,
            35167: 38642,
            35168: 33615,
            35169: 39180,
            35170: 21473,
            35171: 21942,
            35172: 23344,
            35173: 24433,
            35174: 26144,
            35175: 26355,
            35176: 26628,
            35177: 27704,
            35178: 27891,
            35179: 27945,
            35180: 29787,
            35181: 30408,
            35182: 31310,
            35183: 38964,
            35184: 33521,
            35185: 34907,
            35186: 35424,
            35187: 37613,
            35188: 28082,
            35189: 30123,
            35190: 30410,
            35191: 39365,
            35192: 24742,
            35193: 35585,
            35194: 36234,
            35195: 38322,
            35196: 27022,
            35197: 21421,
            35198: 20870,
            35200: 22290,
            35201: 22576,
            35202: 22852,
            35203: 23476,
            35204: 24310,
            35205: 24616,
            35206: 25513,
            35207: 25588,
            35208: 27839,
            35209: 28436,
            35210: 28814,
            35211: 28948,
            35212: 29017,
            35213: 29141,
            35214: 29503,
            35215: 32257,
            35216: 33398,
            35217: 33489,
            35218: 34199,
            35219: 36960,
            35220: 37467,
            35221: 40219,
            35222: 22633,
            35223: 26044,
            35224: 27738,
            35225: 29989,
            35226: 20985,
            35227: 22830,
            35228: 22885,
            35229: 24448,
            35230: 24540,
            35231: 25276,
            35232: 26106,
            35233: 27178,
            35234: 27431,
            35235: 27572,
            35236: 29579,
            35237: 32705,
            35238: 35158,
            35239: 40236,
            35240: 40206,
            35241: 40644,
            35242: 23713,
            35243: 27798,
            35244: 33659,
            35245: 20740,
            35246: 23627,
            35247: 25014,
            35248: 33222,
            35249: 26742,
            35250: 29281,
            35251: 20057,
            35252: 20474,
            35253: 21368,
            35254: 24681,
            35255: 28201,
            35256: 31311,
            35257: 38899,
            35258: 19979,
            35259: 21270,
            35260: 20206,
            35261: 20309,
            35262: 20285,
            35263: 20385,
            35264: 20339,
            35265: 21152,
            35266: 21487,
            35267: 22025,
            35268: 22799,
            35269: 23233,
            35270: 23478,
            35271: 23521,
            35272: 31185,
            35273: 26247,
            35274: 26524,
            35275: 26550,
            35276: 27468,
            35277: 27827,
            35278: 28779,
            35279: 29634,
            35280: 31117,
            35281: 31166,
            35282: 31292,
            35283: 31623,
            35284: 33457,
            35285: 33499,
            35286: 33540,
            35287: 33655,
            35288: 33775,
            35289: 33747,
            35290: 34662,
            35291: 35506,
            35292: 22057,
            35293: 36008,
            35294: 36838,
            35295: 36942,
            35296: 38686,
            35297: 34442,
            35298: 20420,
            35299: 23784,
            35300: 25105,
            35301: 29273,
            35302: 30011,
            35303: 33253,
            35304: 33469,
            35305: 34558,
            35306: 36032,
            35307: 38597,
            35308: 39187,
            35309: 39381,
            35310: 20171,
            35311: 20250,
            35312: 35299,
            35313: 22238,
            35314: 22602,
            35315: 22730,
            35316: 24315,
            35317: 24555,
            35318: 24618,
            35319: 24724,
            35320: 24674,
            35321: 25040,
            35322: 25106,
            35323: 25296,
            35324: 25913,
            35392: 39745,
            35393: 26214,
            35394: 26800,
            35395: 28023,
            35396: 28784,
            35397: 30028,
            35398: 30342,
            35399: 32117,
            35400: 33445,
            35401: 34809,
            35402: 38283,
            35403: 38542,
            35404: 35997,
            35405: 20977,
            35406: 21182,
            35407: 22806,
            35408: 21683,
            35409: 23475,
            35410: 23830,
            35411: 24936,
            35412: 27010,
            35413: 28079,
            35414: 30861,
            35415: 33995,
            35416: 34903,
            35417: 35442,
            35418: 37799,
            35419: 39608,
            35420: 28012,
            35421: 39336,
            35422: 34521,
            35423: 22435,
            35424: 26623,
            35425: 34510,
            35426: 37390,
            35427: 21123,
            35428: 22151,
            35429: 21508,
            35430: 24275,
            35431: 25313,
            35432: 25785,
            35433: 26684,
            35434: 26680,
            35435: 27579,
            35436: 29554,
            35437: 30906,
            35438: 31339,
            35439: 35226,
            35440: 35282,
            35441: 36203,
            35442: 36611,
            35443: 37101,
            35444: 38307,
            35445: 38548,
            35446: 38761,
            35447: 23398,
            35448: 23731,
            35449: 27005,
            35450: 38989,
            35451: 38990,
            35452: 25499,
            35453: 31520,
            35454: 27179,
            35456: 27263,
            35457: 26806,
            35458: 39949,
            35459: 28511,
            35460: 21106,
            35461: 21917,
            35462: 24688,
            35463: 25324,
            35464: 27963,
            35465: 28167,
            35466: 28369,
            35467: 33883,
            35468: 35088,
            35469: 36676,
            35470: 19988,
            35471: 39993,
            35472: 21494,
            35473: 26907,
            35474: 27194,
            35475: 38788,
            35476: 26666,
            35477: 20828,
            35478: 31427,
            35479: 33970,
            35480: 37340,
            35481: 37772,
            35482: 22107,
            35483: 40232,
            35484: 26658,
            35485: 33541,
            35486: 33841,
            35487: 31909,
            35488: 21e3,
            35489: 33477,
            35490: 29926,
            35491: 20094,
            35492: 20355,
            35493: 20896,
            35494: 23506,
            35495: 21002,
            35496: 21208,
            35497: 21223,
            35498: 24059,
            35499: 21914,
            35500: 22570,
            35501: 23014,
            35502: 23436,
            35503: 23448,
            35504: 23515,
            35505: 24178,
            35506: 24185,
            35507: 24739,
            35508: 24863,
            35509: 24931,
            35510: 25022,
            35511: 25563,
            35512: 25954,
            35513: 26577,
            35514: 26707,
            35515: 26874,
            35516: 27454,
            35517: 27475,
            35518: 27735,
            35519: 28450,
            35520: 28567,
            35521: 28485,
            35522: 29872,
            35523: 29976,
            35524: 30435,
            35525: 30475,
            35526: 31487,
            35527: 31649,
            35528: 31777,
            35529: 32233,
            35530: 32566,
            35531: 32752,
            35532: 32925,
            35533: 33382,
            35534: 33694,
            35535: 35251,
            35536: 35532,
            35537: 36011,
            35538: 36996,
            35539: 37969,
            35540: 38291,
            35541: 38289,
            35542: 38306,
            35543: 38501,
            35544: 38867,
            35545: 39208,
            35546: 33304,
            35547: 20024,
            35548: 21547,
            35549: 23736,
            35550: 24012,
            35551: 29609,
            35552: 30284,
            35553: 30524,
            35554: 23721,
            35555: 32747,
            35556: 36107,
            35557: 38593,
            35558: 38929,
            35559: 38996,
            35560: 39e3,
            35561: 20225,
            35562: 20238,
            35563: 21361,
            35564: 21916,
            35565: 22120,
            35566: 22522,
            35567: 22855,
            35568: 23305,
            35569: 23492,
            35570: 23696,
            35571: 24076,
            35572: 24190,
            35573: 24524,
            35574: 25582,
            35575: 26426,
            35576: 26071,
            35577: 26082,
            35578: 26399,
            35579: 26827,
            35580: 26820,
            35648: 27231,
            35649: 24112,
            35650: 27589,
            35651: 27671,
            35652: 27773,
            35653: 30079,
            35654: 31048,
            35655: 23395,
            35656: 31232,
            35657: 32e3,
            35658: 24509,
            35659: 35215,
            35660: 35352,
            35661: 36020,
            35662: 36215,
            35663: 36556,
            35664: 36637,
            35665: 39138,
            35666: 39438,
            35667: 39740,
            35668: 20096,
            35669: 20605,
            35670: 20736,
            35671: 22931,
            35672: 23452,
            35673: 25135,
            35674: 25216,
            35675: 25836,
            35676: 27450,
            35677: 29344,
            35678: 30097,
            35679: 31047,
            35680: 32681,
            35681: 34811,
            35682: 35516,
            35683: 35696,
            35684: 25516,
            35685: 33738,
            35686: 38816,
            35687: 21513,
            35688: 21507,
            35689: 21931,
            35690: 26708,
            35691: 27224,
            35692: 35440,
            35693: 30759,
            35694: 26485,
            35695: 40653,
            35696: 21364,
            35697: 23458,
            35698: 33050,
            35699: 34384,
            35700: 36870,
            35701: 19992,
            35702: 20037,
            35703: 20167,
            35704: 20241,
            35705: 21450,
            35706: 21560,
            35707: 23470,
            35708: 24339,
            35709: 24613,
            35710: 25937,
            35712: 26429,
            35713: 27714,
            35714: 27762,
            35715: 27875,
            35716: 28792,
            35717: 29699,
            35718: 31350,
            35719: 31406,
            35720: 31496,
            35721: 32026,
            35722: 31998,
            35723: 32102,
            35724: 26087,
            35725: 29275,
            35726: 21435,
            35727: 23621,
            35728: 24040,
            35729: 25298,
            35730: 25312,
            35731: 25369,
            35732: 28192,
            35733: 34394,
            35734: 35377,
            35735: 36317,
            35736: 37624,
            35737: 28417,
            35738: 31142,
            35739: 39770,
            35740: 20136,
            35741: 20139,
            35742: 20140,
            35743: 20379,
            35744: 20384,
            35745: 20689,
            35746: 20807,
            35747: 31478,
            35748: 20849,
            35749: 20982,
            35750: 21332,
            35751: 21281,
            35752: 21375,
            35753: 21483,
            35754: 21932,
            35755: 22659,
            35756: 23777,
            35757: 24375,
            35758: 24394,
            35759: 24623,
            35760: 24656,
            35761: 24685,
            35762: 25375,
            35763: 25945,
            35764: 27211,
            35765: 27841,
            35766: 29378,
            35767: 29421,
            35768: 30703,
            35769: 33016,
            35770: 33029,
            35771: 33288,
            35772: 34126,
            35773: 37111,
            35774: 37857,
            35775: 38911,
            35776: 39255,
            35777: 39514,
            35778: 20208,
            35779: 20957,
            35780: 23597,
            35781: 26241,
            35782: 26989,
            35783: 23616,
            35784: 26354,
            35785: 26997,
            35786: 29577,
            35787: 26704,
            35788: 31873,
            35789: 20677,
            35790: 21220,
            35791: 22343,
            35792: 24062,
            35793: 37670,
            35794: 26020,
            35795: 27427,
            35796: 27453,
            35797: 29748,
            35798: 31105,
            35799: 31165,
            35800: 31563,
            35801: 32202,
            35802: 33465,
            35803: 33740,
            35804: 34943,
            35805: 35167,
            35806: 35641,
            35807: 36817,
            35808: 37329,
            35809: 21535,
            35810: 37504,
            35811: 20061,
            35812: 20534,
            35813: 21477,
            35814: 21306,
            35815: 29399,
            35816: 29590,
            35817: 30697,
            35818: 33510,
            35819: 36527,
            35820: 39366,
            35821: 39368,
            35822: 39378,
            35823: 20855,
            35824: 24858,
            35825: 34398,
            35826: 21936,
            35827: 31354,
            35828: 20598,
            35829: 23507,
            35830: 36935,
            35831: 38533,
            35832: 20018,
            35833: 27355,
            35834: 37351,
            35835: 23633,
            35836: 23624,
            35904: 25496,
            35905: 31391,
            35906: 27795,
            35907: 38772,
            35908: 36705,
            35909: 31402,
            35910: 29066,
            35911: 38536,
            35912: 31874,
            35913: 26647,
            35914: 32368,
            35915: 26705,
            35916: 37740,
            35917: 21234,
            35918: 21531,
            35919: 34219,
            35920: 35347,
            35921: 32676,
            35922: 36557,
            35923: 37089,
            35924: 21350,
            35925: 34952,
            35926: 31041,
            35927: 20418,
            35928: 20670,
            35929: 21009,
            35930: 20804,
            35931: 21843,
            35932: 22317,
            35933: 29674,
            35934: 22411,
            35935: 22865,
            35936: 24418,
            35937: 24452,
            35938: 24693,
            35939: 24950,
            35940: 24935,
            35941: 25001,
            35942: 25522,
            35943: 25658,
            35944: 25964,
            35945: 26223,
            35946: 26690,
            35947: 28179,
            35948: 30054,
            35949: 31293,
            35950: 31995,
            35951: 32076,
            35952: 32153,
            35953: 32331,
            35954: 32619,
            35955: 33550,
            35956: 33610,
            35957: 34509,
            35958: 35336,
            35959: 35427,
            35960: 35686,
            35961: 36605,
            35962: 38938,
            35963: 40335,
            35964: 33464,
            35965: 36814,
            35966: 39912,
            35968: 21127,
            35969: 25119,
            35970: 25731,
            35971: 28608,
            35972: 38553,
            35973: 26689,
            35974: 20625,
            35975: 27424,
            35976: 27770,
            35977: 28500,
            35978: 31348,
            35979: 32080,
            35980: 34880,
            35981: 35363,
            35982: 26376,
            35983: 20214,
            35984: 20537,
            35985: 20518,
            35986: 20581,
            35987: 20860,
            35988: 21048,
            35989: 21091,
            35990: 21927,
            35991: 22287,
            35992: 22533,
            35993: 23244,
            35994: 24314,
            35995: 25010,
            35996: 25080,
            35997: 25331,
            35998: 25458,
            35999: 26908,
            36e3: 27177,
            36001: 29309,
            36002: 29356,
            36003: 29486,
            36004: 30740,
            36005: 30831,
            36006: 32121,
            36007: 30476,
            36008: 32937,
            36009: 35211,
            36010: 35609,
            36011: 36066,
            36012: 36562,
            36013: 36963,
            36014: 37749,
            36015: 38522,
            36016: 38997,
            36017: 39443,
            36018: 40568,
            36019: 20803,
            36020: 21407,
            36021: 21427,
            36022: 24187,
            36023: 24358,
            36024: 28187,
            36025: 28304,
            36026: 29572,
            36027: 29694,
            36028: 32067,
            36029: 33335,
            36030: 35328,
            36031: 35578,
            36032: 38480,
            36033: 20046,
            36034: 20491,
            36035: 21476,
            36036: 21628,
            36037: 22266,
            36038: 22993,
            36039: 23396,
            36040: 24049,
            36041: 24235,
            36042: 24359,
            36043: 25144,
            36044: 25925,
            36045: 26543,
            36046: 28246,
            36047: 29392,
            36048: 31946,
            36049: 34996,
            36050: 32929,
            36051: 32993,
            36052: 33776,
            36053: 34382,
            36054: 35463,
            36055: 36328,
            36056: 37431,
            36057: 38599,
            36058: 39015,
            36059: 40723,
            36060: 20116,
            36061: 20114,
            36062: 20237,
            36063: 21320,
            36064: 21577,
            36065: 21566,
            36066: 23087,
            36067: 24460,
            36068: 24481,
            36069: 24735,
            36070: 26791,
            36071: 27278,
            36072: 29786,
            36073: 30849,
            36074: 35486,
            36075: 35492,
            36076: 35703,
            36077: 37264,
            36078: 20062,
            36079: 39881,
            36080: 20132,
            36081: 20348,
            36082: 20399,
            36083: 20505,
            36084: 20502,
            36085: 20809,
            36086: 20844,
            36087: 21151,
            36088: 21177,
            36089: 21246,
            36090: 21402,
            36091: 21475,
            36092: 21521,
            36160: 21518,
            36161: 21897,
            36162: 22353,
            36163: 22434,
            36164: 22909,
            36165: 23380,
            36166: 23389,
            36167: 23439,
            36168: 24037,
            36169: 24039,
            36170: 24055,
            36171: 24184,
            36172: 24195,
            36173: 24218,
            36174: 24247,
            36175: 24344,
            36176: 24658,
            36177: 24908,
            36178: 25239,
            36179: 25304,
            36180: 25511,
            36181: 25915,
            36182: 26114,
            36183: 26179,
            36184: 26356,
            36185: 26477,
            36186: 26657,
            36187: 26775,
            36188: 27083,
            36189: 27743,
            36190: 27946,
            36191: 28009,
            36192: 28207,
            36193: 28317,
            36194: 30002,
            36195: 30343,
            36196: 30828,
            36197: 31295,
            36198: 31968,
            36199: 32005,
            36200: 32024,
            36201: 32094,
            36202: 32177,
            36203: 32789,
            36204: 32771,
            36205: 32943,
            36206: 32945,
            36207: 33108,
            36208: 33167,
            36209: 33322,
            36210: 33618,
            36211: 34892,
            36212: 34913,
            36213: 35611,
            36214: 36002,
            36215: 36092,
            36216: 37066,
            36217: 37237,
            36218: 37489,
            36219: 30783,
            36220: 37628,
            36221: 38308,
            36222: 38477,
            36224: 38917,
            36225: 39321,
            36226: 39640,
            36227: 40251,
            36228: 21083,
            36229: 21163,
            36230: 21495,
            36231: 21512,
            36232: 22741,
            36233: 25335,
            36234: 28640,
            36235: 35946,
            36236: 36703,
            36237: 40633,
            36238: 20811,
            36239: 21051,
            36240: 21578,
            36241: 22269,
            36242: 31296,
            36243: 37239,
            36244: 40288,
            36245: 40658,
            36246: 29508,
            36247: 28425,
            36248: 33136,
            36249: 29969,
            36250: 24573,
            36251: 24794,
            36252: 39592,
            36253: 29403,
            36254: 36796,
            36255: 27492,
            36256: 38915,
            36257: 20170,
            36258: 22256,
            36259: 22372,
            36260: 22718,
            36261: 23130,
            36262: 24680,
            36263: 25031,
            36264: 26127,
            36265: 26118,
            36266: 26681,
            36267: 26801,
            36268: 28151,
            36269: 30165,
            36270: 32058,
            36271: 33390,
            36272: 39746,
            36273: 20123,
            36274: 20304,
            36275: 21449,
            36276: 21766,
            36277: 23919,
            36278: 24038,
            36279: 24046,
            36280: 26619,
            36281: 27801,
            36282: 29811,
            36283: 30722,
            36284: 35408,
            36285: 37782,
            36286: 35039,
            36287: 22352,
            36288: 24231,
            36289: 25387,
            36290: 20661,
            36291: 20652,
            36292: 20877,
            36293: 26368,
            36294: 21705,
            36295: 22622,
            36296: 22971,
            36297: 23472,
            36298: 24425,
            36299: 25165,
            36300: 25505,
            36301: 26685,
            36302: 27507,
            36303: 28168,
            36304: 28797,
            36305: 37319,
            36306: 29312,
            36307: 30741,
            36308: 30758,
            36309: 31085,
            36310: 25998,
            36311: 32048,
            36312: 33756,
            36313: 35009,
            36314: 36617,
            36315: 38555,
            36316: 21092,
            36317: 22312,
            36318: 26448,
            36319: 32618,
            36320: 36001,
            36321: 20916,
            36322: 22338,
            36323: 38442,
            36324: 22586,
            36325: 27018,
            36326: 32948,
            36327: 21682,
            36328: 23822,
            36329: 22524,
            36330: 30869,
            36331: 40442,
            36332: 20316,
            36333: 21066,
            36334: 21643,
            36335: 25662,
            36336: 26152,
            36337: 26388,
            36338: 26613,
            36339: 31364,
            36340: 31574,
            36341: 32034,
            36342: 37679,
            36343: 26716,
            36344: 39853,
            36345: 31545,
            36346: 21273,
            36347: 20874,
            36348: 21047,
            36416: 23519,
            36417: 25334,
            36418: 25774,
            36419: 25830,
            36420: 26413,
            36421: 27578,
            36422: 34217,
            36423: 38609,
            36424: 30352,
            36425: 39894,
            36426: 25420,
            36427: 37638,
            36428: 39851,
            36429: 30399,
            36430: 26194,
            36431: 19977,
            36432: 20632,
            36433: 21442,
            36434: 23665,
            36435: 24808,
            36436: 25746,
            36437: 25955,
            36438: 26719,
            36439: 29158,
            36440: 29642,
            36441: 29987,
            36442: 31639,
            36443: 32386,
            36444: 34453,
            36445: 35715,
            36446: 36059,
            36447: 37240,
            36448: 39184,
            36449: 26028,
            36450: 26283,
            36451: 27531,
            36452: 20181,
            36453: 20180,
            36454: 20282,
            36455: 20351,
            36456: 21050,
            36457: 21496,
            36458: 21490,
            36459: 21987,
            36460: 22235,
            36461: 22763,
            36462: 22987,
            36463: 22985,
            36464: 23039,
            36465: 23376,
            36466: 23629,
            36467: 24066,
            36468: 24107,
            36469: 24535,
            36470: 24605,
            36471: 25351,
            36472: 25903,
            36473: 23388,
            36474: 26031,
            36475: 26045,
            36476: 26088,
            36477: 26525,
            36478: 27490,
            36480: 27515,
            36481: 27663,
            36482: 29509,
            36483: 31049,
            36484: 31169,
            36485: 31992,
            36486: 32025,
            36487: 32043,
            36488: 32930,
            36489: 33026,
            36490: 33267,
            36491: 35222,
            36492: 35422,
            36493: 35433,
            36494: 35430,
            36495: 35468,
            36496: 35566,
            36497: 36039,
            36498: 36060,
            36499: 38604,
            36500: 39164,
            36501: 27503,
            36502: 20107,
            36503: 20284,
            36504: 20365,
            36505: 20816,
            36506: 23383,
            36507: 23546,
            36508: 24904,
            36509: 25345,
            36510: 26178,
            36511: 27425,
            36512: 28363,
            36513: 27835,
            36514: 29246,
            36515: 29885,
            36516: 30164,
            36517: 30913,
            36518: 31034,
            36519: 32780,
            36520: 32819,
            36521: 33258,
            36522: 33940,
            36523: 36766,
            36524: 27728,
            36525: 40575,
            36526: 24335,
            36527: 35672,
            36528: 40235,
            36529: 31482,
            36530: 36600,
            36531: 23437,
            36532: 38635,
            36533: 19971,
            36534: 21489,
            36535: 22519,
            36536: 22833,
            36537: 23241,
            36538: 23460,
            36539: 24713,
            36540: 28287,
            36541: 28422,
            36542: 30142,
            36543: 36074,
            36544: 23455,
            36545: 34048,
            36546: 31712,
            36547: 20594,
            36548: 26612,
            36549: 33437,
            36550: 23649,
            36551: 34122,
            36552: 32286,
            36553: 33294,
            36554: 20889,
            36555: 23556,
            36556: 25448,
            36557: 36198,
            36558: 26012,
            36559: 29038,
            36560: 31038,
            36561: 32023,
            36562: 32773,
            36563: 35613,
            36564: 36554,
            36565: 36974,
            36566: 34503,
            36567: 37034,
            36568: 20511,
            36569: 21242,
            36570: 23610,
            36571: 26451,
            36572: 28796,
            36573: 29237,
            36574: 37196,
            36575: 37320,
            36576: 37675,
            36577: 33509,
            36578: 23490,
            36579: 24369,
            36580: 24825,
            36581: 20027,
            36582: 21462,
            36583: 23432,
            36584: 25163,
            36585: 26417,
            36586: 27530,
            36587: 29417,
            36588: 29664,
            36589: 31278,
            36590: 33131,
            36591: 36259,
            36592: 37202,
            36593: 39318,
            36594: 20754,
            36595: 21463,
            36596: 21610,
            36597: 23551,
            36598: 25480,
            36599: 27193,
            36600: 32172,
            36601: 38656,
            36602: 22234,
            36603: 21454,
            36604: 21608,
            36672: 23447,
            36673: 23601,
            36674: 24030,
            36675: 20462,
            36676: 24833,
            36677: 25342,
            36678: 27954,
            36679: 31168,
            36680: 31179,
            36681: 32066,
            36682: 32333,
            36683: 32722,
            36684: 33261,
            36685: 33311,
            36686: 33936,
            36687: 34886,
            36688: 35186,
            36689: 35728,
            36690: 36468,
            36691: 36655,
            36692: 36913,
            36693: 37195,
            36694: 37228,
            36695: 38598,
            36696: 37276,
            36697: 20160,
            36698: 20303,
            36699: 20805,
            36700: 21313,
            36701: 24467,
            36702: 25102,
            36703: 26580,
            36704: 27713,
            36705: 28171,
            36706: 29539,
            36707: 32294,
            36708: 37325,
            36709: 37507,
            36710: 21460,
            36711: 22809,
            36712: 23487,
            36713: 28113,
            36714: 31069,
            36715: 32302,
            36716: 31899,
            36717: 22654,
            36718: 29087,
            36719: 20986,
            36720: 34899,
            36721: 36848,
            36722: 20426,
            36723: 23803,
            36724: 26149,
            36725: 30636,
            36726: 31459,
            36727: 33308,
            36728: 39423,
            36729: 20934,
            36730: 24490,
            36731: 26092,
            36732: 26991,
            36733: 27529,
            36734: 28147,
            36736: 28310,
            36737: 28516,
            36738: 30462,
            36739: 32020,
            36740: 24033,
            36741: 36981,
            36742: 37255,
            36743: 38918,
            36744: 20966,
            36745: 21021,
            36746: 25152,
            36747: 26257,
            36748: 26329,
            36749: 28186,
            36750: 24246,
            36751: 32210,
            36752: 32626,
            36753: 26360,
            36754: 34223,
            36755: 34295,
            36756: 35576,
            36757: 21161,
            36758: 21465,
            36759: 22899,
            36760: 24207,
            36761: 24464,
            36762: 24661,
            36763: 37604,
            36764: 38500,
            36765: 20663,
            36766: 20767,
            36767: 21213,
            36768: 21280,
            36769: 21319,
            36770: 21484,
            36771: 21736,
            36772: 21830,
            36773: 21809,
            36774: 22039,
            36775: 22888,
            36776: 22974,
            36777: 23100,
            36778: 23477,
            36779: 23558,
            36780: 23567,
            36781: 23569,
            36782: 23578,
            36783: 24196,
            36784: 24202,
            36785: 24288,
            36786: 24432,
            36787: 25215,
            36788: 25220,
            36789: 25307,
            36790: 25484,
            36791: 25463,
            36792: 26119,
            36793: 26124,
            36794: 26157,
            36795: 26230,
            36796: 26494,
            36797: 26786,
            36798: 27167,
            36799: 27189,
            36800: 27836,
            36801: 28040,
            36802: 28169,
            36803: 28248,
            36804: 28988,
            36805: 28966,
            36806: 29031,
            36807: 30151,
            36808: 30465,
            36809: 30813,
            36810: 30977,
            36811: 31077,
            36812: 31216,
            36813: 31456,
            36814: 31505,
            36815: 31911,
            36816: 32057,
            36817: 32918,
            36818: 33750,
            36819: 33931,
            36820: 34121,
            36821: 34909,
            36822: 35059,
            36823: 35359,
            36824: 35388,
            36825: 35412,
            36826: 35443,
            36827: 35937,
            36828: 36062,
            36829: 37284,
            36830: 37478,
            36831: 37758,
            36832: 37912,
            36833: 38556,
            36834: 38808,
            36835: 19978,
            36836: 19976,
            36837: 19998,
            36838: 20055,
            36839: 20887,
            36840: 21104,
            36841: 22478,
            36842: 22580,
            36843: 22732,
            36844: 23330,
            36845: 24120,
            36846: 24773,
            36847: 25854,
            36848: 26465,
            36849: 26454,
            36850: 27972,
            36851: 29366,
            36852: 30067,
            36853: 31331,
            36854: 33976,
            36855: 35698,
            36856: 37304,
            36857: 37664,
            36858: 22065,
            36859: 22516,
            36860: 39166,
            36928: 25325,
            36929: 26893,
            36930: 27542,
            36931: 29165,
            36932: 32340,
            36933: 32887,
            36934: 33394,
            36935: 35302,
            36936: 39135,
            36937: 34645,
            36938: 36785,
            36939: 23611,
            36940: 20280,
            36941: 20449,
            36942: 20405,
            36943: 21767,
            36944: 23072,
            36945: 23517,
            36946: 23529,
            36947: 24515,
            36948: 24910,
            36949: 25391,
            36950: 26032,
            36951: 26187,
            36952: 26862,
            36953: 27035,
            36954: 28024,
            36955: 28145,
            36956: 30003,
            36957: 30137,
            36958: 30495,
            36959: 31070,
            36960: 31206,
            36961: 32051,
            36962: 33251,
            36963: 33455,
            36964: 34218,
            36965: 35242,
            36966: 35386,
            36967: 36523,
            36968: 36763,
            36969: 36914,
            36970: 37341,
            36971: 38663,
            36972: 20154,
            36973: 20161,
            36974: 20995,
            36975: 22645,
            36976: 22764,
            36977: 23563,
            36978: 29978,
            36979: 23613,
            36980: 33102,
            36981: 35338,
            36982: 36805,
            36983: 38499,
            36984: 38765,
            36985: 31525,
            36986: 35535,
            36987: 38920,
            36988: 37218,
            36989: 22259,
            36990: 21416,
            36992: 36887,
            36993: 21561,
            36994: 22402,
            36995: 24101,
            36996: 25512,
            36997: 27700,
            36998: 28810,
            36999: 30561,
            37e3: 31883,
            37001: 32736,
            37002: 34928,
            37003: 36930,
            37004: 37204,
            37005: 37648,
            37006: 37656,
            37007: 38543,
            37008: 29790,
            37009: 39620,
            37010: 23815,
            37011: 23913,
            37012: 25968,
            37013: 26530,
            37014: 36264,
            37015: 38619,
            37016: 25454,
            37017: 26441,
            37018: 26905,
            37019: 33733,
            37020: 38935,
            37021: 38592,
            37022: 35070,
            37023: 28548,
            37024: 25722,
            37025: 23544,
            37026: 19990,
            37027: 28716,
            37028: 30045,
            37029: 26159,
            37030: 20932,
            37031: 21046,
            37032: 21218,
            37033: 22995,
            37034: 24449,
            37035: 24615,
            37036: 25104,
            37037: 25919,
            37038: 25972,
            37039: 26143,
            37040: 26228,
            37041: 26866,
            37042: 26646,
            37043: 27491,
            37044: 28165,
            37045: 29298,
            37046: 29983,
            37047: 30427,
            37048: 31934,
            37049: 32854,
            37050: 22768,
            37051: 35069,
            37052: 35199,
            37053: 35488,
            37054: 35475,
            37055: 35531,
            37056: 36893,
            37057: 37266,
            37058: 38738,
            37059: 38745,
            37060: 25993,
            37061: 31246,
            37062: 33030,
            37063: 38587,
            37064: 24109,
            37065: 24796,
            37066: 25114,
            37067: 26021,
            37068: 26132,
            37069: 26512,
            37070: 30707,
            37071: 31309,
            37072: 31821,
            37073: 32318,
            37074: 33034,
            37075: 36012,
            37076: 36196,
            37077: 36321,
            37078: 36447,
            37079: 30889,
            37080: 20999,
            37081: 25305,
            37082: 25509,
            37083: 25666,
            37084: 25240,
            37085: 35373,
            37086: 31363,
            37087: 31680,
            37088: 35500,
            37089: 38634,
            37090: 32118,
            37091: 33292,
            37092: 34633,
            37093: 20185,
            37094: 20808,
            37095: 21315,
            37096: 21344,
            37097: 23459,
            37098: 23554,
            37099: 23574,
            37100: 24029,
            37101: 25126,
            37102: 25159,
            37103: 25776,
            37104: 26643,
            37105: 26676,
            37106: 27849,
            37107: 27973,
            37108: 27927,
            37109: 26579,
            37110: 28508,
            37111: 29006,
            37112: 29053,
            37113: 26059,
            37114: 31359,
            37115: 31661,
            37116: 32218,
            37184: 32330,
            37185: 32680,
            37186: 33146,
            37187: 33307,
            37188: 33337,
            37189: 34214,
            37190: 35438,
            37191: 36046,
            37192: 36341,
            37193: 36984,
            37194: 36983,
            37195: 37549,
            37196: 37521,
            37197: 38275,
            37198: 39854,
            37199: 21069,
            37200: 21892,
            37201: 28472,
            37202: 28982,
            37203: 20840,
            37204: 31109,
            37205: 32341,
            37206: 33203,
            37207: 31950,
            37208: 22092,
            37209: 22609,
            37210: 23720,
            37211: 25514,
            37212: 26366,
            37213: 26365,
            37214: 26970,
            37215: 29401,
            37216: 30095,
            37217: 30094,
            37218: 30990,
            37219: 31062,
            37220: 31199,
            37221: 31895,
            37222: 32032,
            37223: 32068,
            37224: 34311,
            37225: 35380,
            37226: 38459,
            37227: 36961,
            37228: 40736,
            37229: 20711,
            37230: 21109,
            37231: 21452,
            37232: 21474,
            37233: 20489,
            37234: 21930,
            37235: 22766,
            37236: 22863,
            37237: 29245,
            37238: 23435,
            37239: 23652,
            37240: 21277,
            37241: 24803,
            37242: 24819,
            37243: 25436,
            37244: 25475,
            37245: 25407,
            37246: 25531,
            37248: 25805,
            37249: 26089,
            37250: 26361,
            37251: 24035,
            37252: 27085,
            37253: 27133,
            37254: 28437,
            37255: 29157,
            37256: 20105,
            37257: 30185,
            37258: 30456,
            37259: 31379,
            37260: 31967,
            37261: 32207,
            37262: 32156,
            37263: 32865,
            37264: 33609,
            37265: 33624,
            37266: 33900,
            37267: 33980,
            37268: 34299,
            37269: 35013,
            37270: 36208,
            37271: 36865,
            37272: 36973,
            37273: 37783,
            37274: 38684,
            37275: 39442,
            37276: 20687,
            37277: 22679,
            37278: 24974,
            37279: 33235,
            37280: 34101,
            37281: 36104,
            37282: 36896,
            37283: 20419,
            37284: 20596,
            37285: 21063,
            37286: 21363,
            37287: 24687,
            37288: 25417,
            37289: 26463,
            37290: 28204,
            37291: 36275,
            37292: 36895,
            37293: 20439,
            37294: 23646,
            37295: 36042,
            37296: 26063,
            37297: 32154,
            37298: 21330,
            37299: 34966,
            37300: 20854,
            37301: 25539,
            37302: 23384,
            37303: 23403,
            37304: 23562,
            37305: 25613,
            37306: 26449,
            37307: 36956,
            37308: 20182,
            37309: 22810,
            37310: 22826,
            37311: 27760,
            37312: 35409,
            37313: 21822,
            37314: 22549,
            37315: 22949,
            37316: 24816,
            37317: 25171,
            37318: 26561,
            37319: 33333,
            37320: 26965,
            37321: 38464,
            37322: 39364,
            37323: 39464,
            37324: 20307,
            37325: 22534,
            37326: 23550,
            37327: 32784,
            37328: 23729,
            37329: 24111,
            37330: 24453,
            37331: 24608,
            37332: 24907,
            37333: 25140,
            37334: 26367,
            37335: 27888,
            37336: 28382,
            37337: 32974,
            37338: 33151,
            37339: 33492,
            37340: 34955,
            37341: 36024,
            37342: 36864,
            37343: 36910,
            37344: 38538,
            37345: 40667,
            37346: 39899,
            37347: 20195,
            37348: 21488,
            37349: 22823,
            37350: 31532,
            37351: 37261,
            37352: 38988,
            37353: 40441,
            37354: 28381,
            37355: 28711,
            37356: 21331,
            37357: 21828,
            37358: 23429,
            37359: 25176,
            37360: 25246,
            37361: 25299,
            37362: 27810,
            37363: 28655,
            37364: 29730,
            37365: 35351,
            37366: 37944,
            37367: 28609,
            37368: 35582,
            37369: 33592,
            37370: 20967,
            37371: 34552,
            37372: 21482,
            37440: 21481,
            37441: 20294,
            37442: 36948,
            37443: 36784,
            37444: 22890,
            37445: 33073,
            37446: 24061,
            37447: 31466,
            37448: 36799,
            37449: 26842,
            37450: 35895,
            37451: 29432,
            37452: 40008,
            37453: 27197,
            37454: 35504,
            37455: 20025,
            37456: 21336,
            37457: 22022,
            37458: 22374,
            37459: 25285,
            37460: 25506,
            37461: 26086,
            37462: 27470,
            37463: 28129,
            37464: 28251,
            37465: 28845,
            37466: 30701,
            37467: 31471,
            37468: 31658,
            37469: 32187,
            37470: 32829,
            37471: 32966,
            37472: 34507,
            37473: 35477,
            37474: 37723,
            37475: 22243,
            37476: 22727,
            37477: 24382,
            37478: 26029,
            37479: 26262,
            37480: 27264,
            37481: 27573,
            37482: 30007,
            37483: 35527,
            37484: 20516,
            37485: 30693,
            37486: 22320,
            37487: 24347,
            37488: 24677,
            37489: 26234,
            37490: 27744,
            37491: 30196,
            37492: 31258,
            37493: 32622,
            37494: 33268,
            37495: 34584,
            37496: 36933,
            37497: 39347,
            37498: 31689,
            37499: 30044,
            37500: 31481,
            37501: 31569,
            37502: 33988,
            37504: 36880,
            37505: 31209,
            37506: 31378,
            37507: 33590,
            37508: 23265,
            37509: 30528,
            37510: 20013,
            37511: 20210,
            37512: 23449,
            37513: 24544,
            37514: 25277,
            37515: 26172,
            37516: 26609,
            37517: 27880,
            37518: 34411,
            37519: 34935,
            37520: 35387,
            37521: 37198,
            37522: 37619,
            37523: 39376,
            37524: 27159,
            37525: 28710,
            37526: 29482,
            37527: 33511,
            37528: 33879,
            37529: 36015,
            37530: 19969,
            37531: 20806,
            37532: 20939,
            37533: 21899,
            37534: 23541,
            37535: 24086,
            37536: 24115,
            37537: 24193,
            37538: 24340,
            37539: 24373,
            37540: 24427,
            37541: 24500,
            37542: 25074,
            37543: 25361,
            37544: 26274,
            37545: 26397,
            37546: 28526,
            37547: 29266,
            37548: 30010,
            37549: 30522,
            37550: 32884,
            37551: 33081,
            37552: 33144,
            37553: 34678,
            37554: 35519,
            37555: 35548,
            37556: 36229,
            37557: 36339,
            37558: 37530,
            37559: 38263,
            37560: 38914,
            37561: 40165,
            37562: 21189,
            37563: 25431,
            37564: 30452,
            37565: 26389,
            37566: 27784,
            37567: 29645,
            37568: 36035,
            37569: 37806,
            37570: 38515,
            37571: 27941,
            37572: 22684,
            37573: 26894,
            37574: 27084,
            37575: 36861,
            37576: 37786,
            37577: 30171,
            37578: 36890,
            37579: 22618,
            37580: 26626,
            37581: 25524,
            37582: 27131,
            37583: 20291,
            37584: 28460,
            37585: 26584,
            37586: 36795,
            37587: 34086,
            37588: 32180,
            37589: 37716,
            37590: 26943,
            37591: 28528,
            37592: 22378,
            37593: 22775,
            37594: 23340,
            37595: 32044,
            37596: 29226,
            37597: 21514,
            37598: 37347,
            37599: 40372,
            37600: 20141,
            37601: 20302,
            37602: 20572,
            37603: 20597,
            37604: 21059,
            37605: 35998,
            37606: 21576,
            37607: 22564,
            37608: 23450,
            37609: 24093,
            37610: 24213,
            37611: 24237,
            37612: 24311,
            37613: 24351,
            37614: 24716,
            37615: 25269,
            37616: 25402,
            37617: 25552,
            37618: 26799,
            37619: 27712,
            37620: 30855,
            37621: 31118,
            37622: 31243,
            37623: 32224,
            37624: 33351,
            37625: 35330,
            37626: 35558,
            37627: 36420,
            37628: 36883,
            37696: 37048,
            37697: 37165,
            37698: 37336,
            37699: 40718,
            37700: 27877,
            37701: 25688,
            37702: 25826,
            37703: 25973,
            37704: 28404,
            37705: 30340,
            37706: 31515,
            37707: 36969,
            37708: 37841,
            37709: 28346,
            37710: 21746,
            37711: 24505,
            37712: 25764,
            37713: 36685,
            37714: 36845,
            37715: 37444,
            37716: 20856,
            37717: 22635,
            37718: 22825,
            37719: 23637,
            37720: 24215,
            37721: 28155,
            37722: 32399,
            37723: 29980,
            37724: 36028,
            37725: 36578,
            37726: 39003,
            37727: 28857,
            37728: 20253,
            37729: 27583,
            37730: 28593,
            37731: 3e4,
            37732: 38651,
            37733: 20814,
            37734: 21520,
            37735: 22581,
            37736: 22615,
            37737: 22956,
            37738: 23648,
            37739: 24466,
            37740: 26007,
            37741: 26460,
            37742: 28193,
            37743: 30331,
            37744: 33759,
            37745: 36077,
            37746: 36884,
            37747: 37117,
            37748: 37709,
            37749: 30757,
            37750: 30778,
            37751: 21162,
            37752: 24230,
            37753: 22303,
            37754: 22900,
            37755: 24594,
            37756: 20498,
            37757: 20826,
            37758: 20908,
            37760: 20941,
            37761: 20992,
            37762: 21776,
            37763: 22612,
            37764: 22616,
            37765: 22871,
            37766: 23445,
            37767: 23798,
            37768: 23947,
            37769: 24764,
            37770: 25237,
            37771: 25645,
            37772: 26481,
            37773: 26691,
            37774: 26812,
            37775: 26847,
            37776: 30423,
            37777: 28120,
            37778: 28271,
            37779: 28059,
            37780: 28783,
            37781: 29128,
            37782: 24403,
            37783: 30168,
            37784: 31095,
            37785: 31561,
            37786: 31572,
            37787: 31570,
            37788: 31958,
            37789: 32113,
            37790: 21040,
            37791: 33891,
            37792: 34153,
            37793: 34276,
            37794: 35342,
            37795: 35588,
            37796: 35910,
            37797: 36367,
            37798: 36867,
            37799: 36879,
            37800: 37913,
            37801: 38518,
            37802: 38957,
            37803: 39472,
            37804: 38360,
            37805: 20685,
            37806: 21205,
            37807: 21516,
            37808: 22530,
            37809: 23566,
            37810: 24999,
            37811: 25758,
            37812: 27934,
            37813: 30643,
            37814: 31461,
            37815: 33012,
            37816: 33796,
            37817: 36947,
            37818: 37509,
            37819: 23776,
            37820: 40199,
            37821: 21311,
            37822: 24471,
            37823: 24499,
            37824: 28060,
            37825: 29305,
            37826: 30563,
            37827: 31167,
            37828: 31716,
            37829: 27602,
            37830: 29420,
            37831: 35501,
            37832: 26627,
            37833: 27233,
            37834: 20984,
            37835: 31361,
            37836: 26932,
            37837: 23626,
            37838: 40182,
            37839: 33515,
            37840: 23493,
            37841: 37193,
            37842: 28702,
            37843: 22136,
            37844: 23663,
            37845: 24775,
            37846: 25958,
            37847: 27788,
            37848: 35930,
            37849: 36929,
            37850: 38931,
            37851: 21585,
            37852: 26311,
            37853: 37389,
            37854: 22856,
            37855: 37027,
            37856: 20869,
            37857: 20045,
            37858: 20970,
            37859: 34201,
            37860: 35598,
            37861: 28760,
            37862: 25466,
            37863: 37707,
            37864: 26978,
            37865: 39348,
            37866: 32260,
            37867: 30071,
            37868: 21335,
            37869: 26976,
            37870: 36575,
            37871: 38627,
            37872: 27741,
            37873: 20108,
            37874: 23612,
            37875: 24336,
            37876: 36841,
            37877: 21250,
            37878: 36049,
            37879: 32905,
            37880: 34425,
            37881: 24319,
            37882: 26085,
            37883: 20083,
            37884: 20837,
            37952: 22914,
            37953: 23615,
            37954: 38894,
            37955: 20219,
            37956: 22922,
            37957: 24525,
            37958: 35469,
            37959: 28641,
            37960: 31152,
            37961: 31074,
            37962: 23527,
            37963: 33905,
            37964: 29483,
            37965: 29105,
            37966: 24180,
            37967: 24565,
            37968: 25467,
            37969: 25754,
            37970: 29123,
            37971: 31896,
            37972: 20035,
            37973: 24316,
            37974: 20043,
            37975: 22492,
            37976: 22178,
            37977: 24745,
            37978: 28611,
            37979: 32013,
            37980: 33021,
            37981: 33075,
            37982: 33215,
            37983: 36786,
            37984: 35223,
            37985: 34468,
            37986: 24052,
            37987: 25226,
            37988: 25773,
            37989: 35207,
            37990: 26487,
            37991: 27874,
            37992: 27966,
            37993: 29750,
            37994: 30772,
            37995: 23110,
            37996: 32629,
            37997: 33453,
            37998: 39340,
            37999: 20467,
            38e3: 24259,
            38001: 25309,
            38002: 25490,
            38003: 25943,
            38004: 26479,
            38005: 30403,
            38006: 29260,
            38007: 32972,
            38008: 32954,
            38009: 36649,
            38010: 37197,
            38011: 20493,
            38012: 22521,
            38013: 23186,
            38014: 26757,
            38016: 26995,
            38017: 29028,
            38018: 29437,
            38019: 36023,
            38020: 22770,
            38021: 36064,
            38022: 38506,
            38023: 36889,
            38024: 34687,
            38025: 31204,
            38026: 30695,
            38027: 33833,
            38028: 20271,
            38029: 21093,
            38030: 21338,
            38031: 25293,
            38032: 26575,
            38033: 27850,
            38034: 30333,
            38035: 31636,
            38036: 31893,
            38037: 33334,
            38038: 34180,
            38039: 36843,
            38040: 26333,
            38041: 28448,
            38042: 29190,
            38043: 32283,
            38044: 33707,
            38045: 39361,
            38046: 40614,
            38047: 20989,
            38048: 31665,
            38049: 30834,
            38050: 31672,
            38051: 32903,
            38052: 31560,
            38053: 27368,
            38054: 24161,
            38055: 32908,
            38056: 30033,
            38057: 30048,
            38058: 20843,
            38059: 37474,
            38060: 28300,
            38061: 30330,
            38062: 37271,
            38063: 39658,
            38064: 20240,
            38065: 32624,
            38066: 25244,
            38067: 31567,
            38068: 38309,
            38069: 40169,
            38070: 22138,
            38071: 22617,
            38072: 34532,
            38073: 38588,
            38074: 20276,
            38075: 21028,
            38076: 21322,
            38077: 21453,
            38078: 21467,
            38079: 24070,
            38080: 25644,
            38081: 26001,
            38082: 26495,
            38083: 27710,
            38084: 27726,
            38085: 29256,
            38086: 29359,
            38087: 29677,
            38088: 30036,
            38089: 32321,
            38090: 33324,
            38091: 34281,
            38092: 36009,
            38093: 31684,
            38094: 37318,
            38095: 29033,
            38096: 38930,
            38097: 39151,
            38098: 25405,
            38099: 26217,
            38100: 30058,
            38101: 30436,
            38102: 30928,
            38103: 34115,
            38104: 34542,
            38105: 21290,
            38106: 21329,
            38107: 21542,
            38108: 22915,
            38109: 24199,
            38110: 24444,
            38111: 24754,
            38112: 25161,
            38113: 25209,
            38114: 25259,
            38115: 26e3,
            38116: 27604,
            38117: 27852,
            38118: 30130,
            38119: 30382,
            38120: 30865,
            38121: 31192,
            38122: 32203,
            38123: 32631,
            38124: 32933,
            38125: 34987,
            38126: 35513,
            38127: 36027,
            38128: 36991,
            38129: 38750,
            38130: 39131,
            38131: 27147,
            38132: 31800,
            38133: 20633,
            38134: 23614,
            38135: 24494,
            38136: 26503,
            38137: 27608,
            38138: 29749,
            38139: 30473,
            38140: 32654,
            38208: 40763,
            38209: 26570,
            38210: 31255,
            38211: 21305,
            38212: 30091,
            38213: 39661,
            38214: 24422,
            38215: 33181,
            38216: 33777,
            38217: 32920,
            38218: 24380,
            38219: 24517,
            38220: 30050,
            38221: 31558,
            38222: 36924,
            38223: 26727,
            38224: 23019,
            38225: 23195,
            38226: 32016,
            38227: 30334,
            38228: 35628,
            38229: 20469,
            38230: 24426,
            38231: 27161,
            38232: 27703,
            38233: 28418,
            38234: 29922,
            38235: 31080,
            38236: 34920,
            38237: 35413,
            38238: 35961,
            38239: 24287,
            38240: 25551,
            38241: 30149,
            38242: 31186,
            38243: 33495,
            38244: 37672,
            38245: 37618,
            38246: 33948,
            38247: 34541,
            38248: 39981,
            38249: 21697,
            38250: 24428,
            38251: 25996,
            38252: 27996,
            38253: 28693,
            38254: 36007,
            38255: 36051,
            38256: 38971,
            38257: 25935,
            38258: 29942,
            38259: 19981,
            38260: 20184,
            38261: 22496,
            38262: 22827,
            38263: 23142,
            38264: 23500,
            38265: 20904,
            38266: 24067,
            38267: 24220,
            38268: 24598,
            38269: 25206,
            38270: 25975,
            38272: 26023,
            38273: 26222,
            38274: 28014,
            38275: 29238,
            38276: 31526,
            38277: 33104,
            38278: 33178,
            38279: 33433,
            38280: 35676,
            38281: 36e3,
            38282: 36070,
            38283: 36212,
            38284: 38428,
            38285: 38468,
            38286: 20398,
            38287: 25771,
            38288: 27494,
            38289: 33310,
            38290: 33889,
            38291: 34154,
            38292: 37096,
            38293: 23553,
            38294: 26963,
            38295: 39080,
            38296: 33914,
            38297: 34135,
            38298: 20239,
            38299: 21103,
            38300: 24489,
            38301: 24133,
            38302: 26381,
            38303: 31119,
            38304: 33145,
            38305: 35079,
            38306: 35206,
            38307: 28149,
            38308: 24343,
            38309: 25173,
            38310: 27832,
            38311: 20175,
            38312: 29289,
            38313: 39826,
            38314: 20998,
            38315: 21563,
            38316: 22132,
            38317: 22707,
            38318: 24996,
            38319: 25198,
            38320: 28954,
            38321: 22894,
            38322: 31881,
            38323: 31966,
            38324: 32027,
            38325: 38640,
            38326: 25991,
            38327: 32862,
            38328: 19993,
            38329: 20341,
            38330: 20853,
            38331: 22592,
            38332: 24163,
            38333: 24179,
            38334: 24330,
            38335: 26564,
            38336: 20006,
            38337: 34109,
            38338: 38281,
            38339: 38491,
            38340: 31859,
            38341: 38913,
            38342: 20731,
            38343: 22721,
            38344: 30294,
            38345: 30887,
            38346: 21029,
            38347: 30629,
            38348: 34065,
            38349: 31622,
            38350: 20559,
            38351: 22793,
            38352: 29255,
            38353: 31687,
            38354: 32232,
            38355: 36794,
            38356: 36820,
            38357: 36941,
            38358: 20415,
            38359: 21193,
            38360: 23081,
            38361: 24321,
            38362: 38829,
            38363: 20445,
            38364: 33303,
            38365: 37610,
            38366: 22275,
            38367: 25429,
            38368: 27497,
            38369: 29995,
            38370: 35036,
            38371: 36628,
            38372: 31298,
            38373: 21215,
            38374: 22675,
            38375: 24917,
            38376: 25098,
            38377: 26286,
            38378: 27597,
            38379: 31807,
            38380: 33769,
            38381: 20515,
            38382: 20472,
            38383: 21253,
            38384: 21574,
            38385: 22577,
            38386: 22857,
            38387: 23453,
            38388: 23792,
            38389: 23791,
            38390: 23849,
            38391: 24214,
            38392: 25265,
            38393: 25447,
            38394: 25918,
            38395: 26041,
            38396: 26379,
            38464: 27861,
            38465: 27873,
            38466: 28921,
            38467: 30770,
            38468: 32299,
            38469: 32990,
            38470: 33459,
            38471: 33804,
            38472: 34028,
            38473: 34562,
            38474: 35090,
            38475: 35370,
            38476: 35914,
            38477: 37030,
            38478: 37586,
            38479: 39165,
            38480: 40179,
            38481: 40300,
            38482: 20047,
            38483: 20129,
            38484: 20621,
            38485: 21078,
            38486: 22346,
            38487: 22952,
            38488: 24125,
            38489: 24536,
            38490: 24537,
            38491: 25151,
            38492: 26292,
            38493: 26395,
            38494: 26576,
            38495: 26834,
            38496: 20882,
            38497: 32033,
            38498: 32938,
            38499: 33192,
            38500: 35584,
            38501: 35980,
            38502: 36031,
            38503: 37502,
            38504: 38450,
            38505: 21536,
            38506: 38956,
            38507: 21271,
            38508: 20693,
            38509: 21340,
            38510: 22696,
            38511: 25778,
            38512: 26420,
            38513: 29287,
            38514: 30566,
            38515: 31302,
            38516: 37350,
            38517: 21187,
            38518: 27809,
            38519: 27526,
            38520: 22528,
            38521: 24140,
            38522: 22868,
            38523: 26412,
            38524: 32763,
            38525: 20961,
            38526: 30406,
            38528: 25705,
            38529: 30952,
            38530: 39764,
            38531: 40635,
            38532: 22475,
            38533: 22969,
            38534: 26151,
            38535: 26522,
            38536: 27598,
            38537: 21737,
            38538: 27097,
            38539: 24149,
            38540: 33180,
            38541: 26517,
            38542: 39850,
            38543: 26622,
            38544: 40018,
            38545: 26717,
            38546: 20134,
            38547: 20451,
            38548: 21448,
            38549: 25273,
            38550: 26411,
            38551: 27819,
            38552: 36804,
            38553: 20397,
            38554: 32365,
            38555: 40639,
            38556: 19975,
            38557: 24930,
            38558: 28288,
            38559: 28459,
            38560: 34067,
            38561: 21619,
            38562: 26410,
            38563: 39749,
            38564: 24051,
            38565: 31637,
            38566: 23724,
            38567: 23494,
            38568: 34588,
            38569: 28234,
            38570: 34001,
            38571: 31252,
            38572: 33032,
            38573: 22937,
            38574: 31885,
            38575: 27665,
            38576: 30496,
            38577: 21209,
            38578: 22818,
            38579: 28961,
            38580: 29279,
            38581: 30683,
            38582: 38695,
            38583: 40289,
            38584: 26891,
            38585: 23167,
            38586: 23064,
            38587: 20901,
            38588: 21517,
            38589: 21629,
            38590: 26126,
            38591: 30431,
            38592: 36855,
            38593: 37528,
            38594: 40180,
            38595: 23018,
            38596: 29277,
            38597: 28357,
            38598: 20813,
            38599: 26825,
            38600: 32191,
            38601: 32236,
            38602: 38754,
            38603: 40634,
            38604: 25720,
            38605: 27169,
            38606: 33538,
            38607: 22916,
            38608: 23391,
            38609: 27611,
            38610: 29467,
            38611: 30450,
            38612: 32178,
            38613: 32791,
            38614: 33945,
            38615: 20786,
            38616: 26408,
            38617: 40665,
            38618: 30446,
            38619: 26466,
            38620: 21247,
            38621: 39173,
            38622: 23588,
            38623: 25147,
            38624: 31870,
            38625: 36016,
            38626: 21839,
            38627: 24758,
            38628: 32011,
            38629: 38272,
            38630: 21249,
            38631: 20063,
            38632: 20918,
            38633: 22812,
            38634: 29242,
            38635: 32822,
            38636: 37326,
            38637: 24357,
            38638: 30690,
            38639: 21380,
            38640: 24441,
            38641: 32004,
            38642: 34220,
            38643: 35379,
            38644: 36493,
            38645: 38742,
            38646: 26611,
            38647: 34222,
            38648: 37971,
            38649: 24841,
            38650: 24840,
            38651: 27833,
            38652: 30290,
            38720: 35565,
            38721: 36664,
            38722: 21807,
            38723: 20305,
            38724: 20778,
            38725: 21191,
            38726: 21451,
            38727: 23461,
            38728: 24189,
            38729: 24736,
            38730: 24962,
            38731: 25558,
            38732: 26377,
            38733: 26586,
            38734: 28263,
            38735: 28044,
            38736: 29494,
            38737: 29495,
            38738: 30001,
            38739: 31056,
            38740: 35029,
            38741: 35480,
            38742: 36938,
            38743: 37009,
            38744: 37109,
            38745: 38596,
            38746: 34701,
            38747: 22805,
            38748: 20104,
            38749: 20313,
            38750: 19982,
            38751: 35465,
            38752: 36671,
            38753: 38928,
            38754: 20653,
            38755: 24188,
            38756: 22934,
            38757: 23481,
            38758: 24248,
            38759: 25562,
            38760: 25594,
            38761: 25793,
            38762: 26332,
            38763: 26954,
            38764: 27096,
            38765: 27915,
            38766: 28342,
            38767: 29076,
            38768: 29992,
            38769: 31407,
            38770: 32650,
            38771: 32768,
            38772: 33865,
            38773: 33993,
            38774: 35201,
            38775: 35617,
            38776: 36362,
            38777: 36965,
            38778: 38525,
            38779: 39178,
            38780: 24958,
            38781: 25233,
            38782: 27442,
            38784: 27779,
            38785: 28020,
            38786: 32716,
            38787: 32764,
            38788: 28096,
            38789: 32645,
            38790: 34746,
            38791: 35064,
            38792: 26469,
            38793: 33713,
            38794: 38972,
            38795: 38647,
            38796: 27931,
            38797: 32097,
            38798: 33853,
            38799: 37226,
            38800: 20081,
            38801: 21365,
            38802: 23888,
            38803: 27396,
            38804: 28651,
            38805: 34253,
            38806: 34349,
            38807: 35239,
            38808: 21033,
            38809: 21519,
            38810: 23653,
            38811: 26446,
            38812: 26792,
            38813: 29702,
            38814: 29827,
            38815: 30178,
            38816: 35023,
            38817: 35041,
            38818: 37324,
            38819: 38626,
            38820: 38520,
            38821: 24459,
            38822: 29575,
            38823: 31435,
            38824: 33870,
            38825: 25504,
            38826: 30053,
            38827: 21129,
            38828: 27969,
            38829: 28316,
            38830: 29705,
            38831: 30041,
            38832: 30827,
            38833: 31890,
            38834: 38534,
            38835: 31452,
            38836: 40845,
            38837: 20406,
            38838: 24942,
            38839: 26053,
            38840: 34396,
            38841: 20102,
            38842: 20142,
            38843: 20698,
            38844: 20001,
            38845: 20940,
            38846: 23534,
            38847: 26009,
            38848: 26753,
            38849: 28092,
            38850: 29471,
            38851: 30274,
            38852: 30637,
            38853: 31260,
            38854: 31975,
            38855: 33391,
            38856: 35538,
            38857: 36988,
            38858: 37327,
            38859: 38517,
            38860: 38936,
            38861: 21147,
            38862: 32209,
            38863: 20523,
            38864: 21400,
            38865: 26519,
            38866: 28107,
            38867: 29136,
            38868: 29747,
            38869: 33256,
            38870: 36650,
            38871: 38563,
            38872: 40023,
            38873: 40607,
            38874: 29792,
            38875: 22593,
            38876: 28057,
            38877: 32047,
            38878: 39006,
            38879: 20196,
            38880: 20278,
            38881: 20363,
            38882: 20919,
            38883: 21169,
            38884: 23994,
            38885: 24604,
            38886: 29618,
            38887: 31036,
            38888: 33491,
            38889: 37428,
            38890: 38583,
            38891: 38646,
            38892: 38666,
            38893: 40599,
            38894: 40802,
            38895: 26278,
            38896: 27508,
            38897: 21015,
            38898: 21155,
            38899: 28872,
            38900: 35010,
            38901: 24265,
            38902: 24651,
            38903: 24976,
            38904: 28451,
            38905: 29001,
            38906: 31806,
            38907: 32244,
            38908: 32879,
            38976: 34030,
            38977: 36899,
            38978: 37676,
            38979: 21570,
            38980: 39791,
            38981: 27347,
            38982: 28809,
            38983: 36034,
            38984: 36335,
            38985: 38706,
            38986: 21172,
            38987: 23105,
            38988: 24266,
            38989: 24324,
            38990: 26391,
            38991: 27004,
            38992: 27028,
            38993: 28010,
            38994: 28431,
            38995: 29282,
            38996: 29436,
            38997: 31725,
            38998: 32769,
            38999: 32894,
            39e3: 34635,
            39001: 37070,
            39002: 20845,
            39003: 40595,
            39004: 31108,
            39005: 32907,
            39006: 37682,
            39007: 35542,
            39008: 20525,
            39009: 21644,
            39010: 35441,
            39011: 27498,
            39012: 36036,
            39013: 33031,
            39014: 24785,
            39015: 26528,
            39016: 40434,
            39017: 20121,
            39018: 20120,
            39019: 39952,
            39020: 35435,
            39021: 34241,
            39022: 34152,
            39023: 26880,
            39024: 28286,
            39025: 30871,
            39026: 33109,
            39071: 24332,
            39072: 19984,
            39073: 19989,
            39074: 20010,
            39075: 20017,
            39076: 20022,
            39077: 20028,
            39078: 20031,
            39079: 20034,
            39080: 20054,
            39081: 20056,
            39082: 20098,
            39083: 20101,
            39084: 35947,
            39085: 20106,
            39086: 33298,
            39087: 24333,
            39088: 20110,
            39089: 20126,
            39090: 20127,
            39091: 20128,
            39092: 20130,
            39093: 20144,
            39094: 20147,
            39095: 20150,
            39096: 20174,
            39097: 20173,
            39098: 20164,
            39099: 20166,
            39100: 20162,
            39101: 20183,
            39102: 20190,
            39103: 20205,
            39104: 20191,
            39105: 20215,
            39106: 20233,
            39107: 20314,
            39108: 20272,
            39109: 20315,
            39110: 20317,
            39111: 20311,
            39112: 20295,
            39113: 20342,
            39114: 20360,
            39115: 20367,
            39116: 20376,
            39117: 20347,
            39118: 20329,
            39119: 20336,
            39120: 20369,
            39121: 20335,
            39122: 20358,
            39123: 20374,
            39124: 20760,
            39125: 20436,
            39126: 20447,
            39127: 20430,
            39128: 20440,
            39129: 20443,
            39130: 20433,
            39131: 20442,
            39132: 20432,
            39133: 20452,
            39134: 20453,
            39135: 20506,
            39136: 20520,
            39137: 20500,
            39138: 20522,
            39139: 20517,
            39140: 20485,
            39141: 20252,
            39142: 20470,
            39143: 20513,
            39144: 20521,
            39145: 20524,
            39146: 20478,
            39147: 20463,
            39148: 20497,
            39149: 20486,
            39150: 20547,
            39151: 20551,
            39152: 26371,
            39153: 20565,
            39154: 20560,
            39155: 20552,
            39156: 20570,
            39157: 20566,
            39158: 20588,
            39159: 20600,
            39160: 20608,
            39161: 20634,
            39162: 20613,
            39163: 20660,
            39164: 20658,
            39232: 20681,
            39233: 20682,
            39234: 20659,
            39235: 20674,
            39236: 20694,
            39237: 20702,
            39238: 20709,
            39239: 20717,
            39240: 20707,
            39241: 20718,
            39242: 20729,
            39243: 20725,
            39244: 20745,
            39245: 20737,
            39246: 20738,
            39247: 20758,
            39248: 20757,
            39249: 20756,
            39250: 20762,
            39251: 20769,
            39252: 20794,
            39253: 20791,
            39254: 20796,
            39255: 20795,
            39256: 20799,
            39257: 20800,
            39258: 20818,
            39259: 20812,
            39260: 20820,
            39261: 20834,
            39262: 31480,
            39263: 20841,
            39264: 20842,
            39265: 20846,
            39266: 20864,
            39267: 20866,
            39268: 22232,
            39269: 20876,
            39270: 20873,
            39271: 20879,
            39272: 20881,
            39273: 20883,
            39274: 20885,
            39275: 20886,
            39276: 20900,
            39277: 20902,
            39278: 20898,
            39279: 20905,
            39280: 20906,
            39281: 20907,
            39282: 20915,
            39283: 20913,
            39284: 20914,
            39285: 20912,
            39286: 20917,
            39287: 20925,
            39288: 20933,
            39289: 20937,
            39290: 20955,
            39291: 20960,
            39292: 34389,
            39293: 20969,
            39294: 20973,
            39296: 20976,
            39297: 20981,
            39298: 20990,
            39299: 20996,
            39300: 21003,
            39301: 21012,
            39302: 21006,
            39303: 21031,
            39304: 21034,
            39305: 21038,
            39306: 21043,
            39307: 21049,
            39308: 21071,
            39309: 21060,
            39310: 21067,
            39311: 21068,
            39312: 21086,
            39313: 21076,
            39314: 21098,
            39315: 21108,
            39316: 21097,
            39317: 21107,
            39318: 21119,
            39319: 21117,
            39320: 21133,
            39321: 21140,
            39322: 21138,
            39323: 21105,
            39324: 21128,
            39325: 21137,
            39326: 36776,
            39327: 36775,
            39328: 21164,
            39329: 21165,
            39330: 21180,
            39331: 21173,
            39332: 21185,
            39333: 21197,
            39334: 21207,
            39335: 21214,
            39336: 21219,
            39337: 21222,
            39338: 39149,
            39339: 21216,
            39340: 21235,
            39341: 21237,
            39342: 21240,
            39343: 21241,
            39344: 21254,
            39345: 21256,
            39346: 30008,
            39347: 21261,
            39348: 21264,
            39349: 21263,
            39350: 21269,
            39351: 21274,
            39352: 21283,
            39353: 21295,
            39354: 21297,
            39355: 21299,
            39356: 21304,
            39357: 21312,
            39358: 21318,
            39359: 21317,
            39360: 19991,
            39361: 21321,
            39362: 21325,
            39363: 20950,
            39364: 21342,
            39365: 21353,
            39366: 21358,
            39367: 22808,
            39368: 21371,
            39369: 21367,
            39370: 21378,
            39371: 21398,
            39372: 21408,
            39373: 21414,
            39374: 21413,
            39375: 21422,
            39376: 21424,
            39377: 21430,
            39378: 21443,
            39379: 31762,
            39380: 38617,
            39381: 21471,
            39382: 26364,
            39383: 29166,
            39384: 21486,
            39385: 21480,
            39386: 21485,
            39387: 21498,
            39388: 21505,
            39389: 21565,
            39390: 21568,
            39391: 21548,
            39392: 21549,
            39393: 21564,
            39394: 21550,
            39395: 21558,
            39396: 21545,
            39397: 21533,
            39398: 21582,
            39399: 21647,
            39400: 21621,
            39401: 21646,
            39402: 21599,
            39403: 21617,
            39404: 21623,
            39405: 21616,
            39406: 21650,
            39407: 21627,
            39408: 21632,
            39409: 21622,
            39410: 21636,
            39411: 21648,
            39412: 21638,
            39413: 21703,
            39414: 21666,
            39415: 21688,
            39416: 21669,
            39417: 21676,
            39418: 21700,
            39419: 21704,
            39420: 21672,
            39488: 21675,
            39489: 21698,
            39490: 21668,
            39491: 21694,
            39492: 21692,
            39493: 21720,
            39494: 21733,
            39495: 21734,
            39496: 21775,
            39497: 21780,
            39498: 21757,
            39499: 21742,
            39500: 21741,
            39501: 21754,
            39502: 21730,
            39503: 21817,
            39504: 21824,
            39505: 21859,
            39506: 21836,
            39507: 21806,
            39508: 21852,
            39509: 21829,
            39510: 21846,
            39511: 21847,
            39512: 21816,
            39513: 21811,
            39514: 21853,
            39515: 21913,
            39516: 21888,
            39517: 21679,
            39518: 21898,
            39519: 21919,
            39520: 21883,
            39521: 21886,
            39522: 21912,
            39523: 21918,
            39524: 21934,
            39525: 21884,
            39526: 21891,
            39527: 21929,
            39528: 21895,
            39529: 21928,
            39530: 21978,
            39531: 21957,
            39532: 21983,
            39533: 21956,
            39534: 21980,
            39535: 21988,
            39536: 21972,
            39537: 22036,
            39538: 22007,
            39539: 22038,
            39540: 22014,
            39541: 22013,
            39542: 22043,
            39543: 22009,
            39544: 22094,
            39545: 22096,
            39546: 29151,
            39547: 22068,
            39548: 22070,
            39549: 22066,
            39550: 22072,
            39552: 22123,
            39553: 22116,
            39554: 22063,
            39555: 22124,
            39556: 22122,
            39557: 22150,
            39558: 22144,
            39559: 22154,
            39560: 22176,
            39561: 22164,
            39562: 22159,
            39563: 22181,
            39564: 22190,
            39565: 22198,
            39566: 22196,
            39567: 22210,
            39568: 22204,
            39569: 22209,
            39570: 22211,
            39571: 22208,
            39572: 22216,
            39573: 22222,
            39574: 22225,
            39575: 22227,
            39576: 22231,
            39577: 22254,
            39578: 22265,
            39579: 22272,
            39580: 22271,
            39581: 22276,
            39582: 22281,
            39583: 22280,
            39584: 22283,
            39585: 22285,
            39586: 22291,
            39587: 22296,
            39588: 22294,
            39589: 21959,
            39590: 22300,
            39591: 22310,
            39592: 22327,
            39593: 22328,
            39594: 22350,
            39595: 22331,
            39596: 22336,
            39597: 22351,
            39598: 22377,
            39599: 22464,
            39600: 22408,
            39601: 22369,
            39602: 22399,
            39603: 22409,
            39604: 22419,
            39605: 22432,
            39606: 22451,
            39607: 22436,
            39608: 22442,
            39609: 22448,
            39610: 22467,
            39611: 22470,
            39612: 22484,
            39613: 22482,
            39614: 22483,
            39615: 22538,
            39616: 22486,
            39617: 22499,
            39618: 22539,
            39619: 22553,
            39620: 22557,
            39621: 22642,
            39622: 22561,
            39623: 22626,
            39624: 22603,
            39625: 22640,
            39626: 27584,
            39627: 22610,
            39628: 22589,
            39629: 22649,
            39630: 22661,
            39631: 22713,
            39632: 22687,
            39633: 22699,
            39634: 22714,
            39635: 22750,
            39636: 22715,
            39637: 22712,
            39638: 22702,
            39639: 22725,
            39640: 22739,
            39641: 22737,
            39642: 22743,
            39643: 22745,
            39644: 22744,
            39645: 22757,
            39646: 22748,
            39647: 22756,
            39648: 22751,
            39649: 22767,
            39650: 22778,
            39651: 22777,
            39652: 22779,
            39653: 22780,
            39654: 22781,
            39655: 22786,
            39656: 22794,
            39657: 22800,
            39658: 22811,
            39659: 26790,
            39660: 22821,
            39661: 22828,
            39662: 22829,
            39663: 22834,
            39664: 22840,
            39665: 22846,
            39666: 31442,
            39667: 22869,
            39668: 22864,
            39669: 22862,
            39670: 22874,
            39671: 22872,
            39672: 22882,
            39673: 22880,
            39674: 22887,
            39675: 22892,
            39676: 22889,
            39744: 22904,
            39745: 22913,
            39746: 22941,
            39747: 20318,
            39748: 20395,
            39749: 22947,
            39750: 22962,
            39751: 22982,
            39752: 23016,
            39753: 23004,
            39754: 22925,
            39755: 23001,
            39756: 23002,
            39757: 23077,
            39758: 23071,
            39759: 23057,
            39760: 23068,
            39761: 23049,
            39762: 23066,
            39763: 23104,
            39764: 23148,
            39765: 23113,
            39766: 23093,
            39767: 23094,
            39768: 23138,
            39769: 23146,
            39770: 23194,
            39771: 23228,
            39772: 23230,
            39773: 23243,
            39774: 23234,
            39775: 23229,
            39776: 23267,
            39777: 23255,
            39778: 23270,
            39779: 23273,
            39780: 23254,
            39781: 23290,
            39782: 23291,
            39783: 23308,
            39784: 23307,
            39785: 23318,
            39786: 23346,
            39787: 23248,
            39788: 23338,
            39789: 23350,
            39790: 23358,
            39791: 23363,
            39792: 23365,
            39793: 23360,
            39794: 23377,
            39795: 23381,
            39796: 23386,
            39797: 23387,
            39798: 23397,
            39799: 23401,
            39800: 23408,
            39801: 23411,
            39802: 23413,
            39803: 23416,
            39804: 25992,
            39805: 23418,
            39806: 23424,
            39808: 23427,
            39809: 23462,
            39810: 23480,
            39811: 23491,
            39812: 23495,
            39813: 23497,
            39814: 23508,
            39815: 23504,
            39816: 23524,
            39817: 23526,
            39818: 23522,
            39819: 23518,
            39820: 23525,
            39821: 23531,
            39822: 23536,
            39823: 23542,
            39824: 23539,
            39825: 23557,
            39826: 23559,
            39827: 23560,
            39828: 23565,
            39829: 23571,
            39830: 23584,
            39831: 23586,
            39832: 23592,
            39833: 23608,
            39834: 23609,
            39835: 23617,
            39836: 23622,
            39837: 23630,
            39838: 23635,
            39839: 23632,
            39840: 23631,
            39841: 23409,
            39842: 23660,
            39843: 23662,
            39844: 20066,
            39845: 23670,
            39846: 23673,
            39847: 23692,
            39848: 23697,
            39849: 23700,
            39850: 22939,
            39851: 23723,
            39852: 23739,
            39853: 23734,
            39854: 23740,
            39855: 23735,
            39856: 23749,
            39857: 23742,
            39858: 23751,
            39859: 23769,
            39860: 23785,
            39861: 23805,
            39862: 23802,
            39863: 23789,
            39864: 23948,
            39865: 23786,
            39866: 23819,
            39867: 23829,
            39868: 23831,
            39869: 23900,
            39870: 23839,
            39871: 23835,
            39872: 23825,
            39873: 23828,
            39874: 23842,
            39875: 23834,
            39876: 23833,
            39877: 23832,
            39878: 23884,
            39879: 23890,
            39880: 23886,
            39881: 23883,
            39882: 23916,
            39883: 23923,
            39884: 23926,
            39885: 23943,
            39886: 23940,
            39887: 23938,
            39888: 23970,
            39889: 23965,
            39890: 23980,
            39891: 23982,
            39892: 23997,
            39893: 23952,
            39894: 23991,
            39895: 23996,
            39896: 24009,
            39897: 24013,
            39898: 24019,
            39899: 24018,
            39900: 24022,
            39901: 24027,
            39902: 24043,
            39903: 24050,
            39904: 24053,
            39905: 24075,
            39906: 24090,
            39907: 24089,
            39908: 24081,
            39909: 24091,
            39910: 24118,
            39911: 24119,
            39912: 24132,
            39913: 24131,
            39914: 24128,
            39915: 24142,
            39916: 24151,
            39917: 24148,
            39918: 24159,
            39919: 24162,
            39920: 24164,
            39921: 24135,
            39922: 24181,
            39923: 24182,
            39924: 24186,
            39925: 40636,
            39926: 24191,
            39927: 24224,
            39928: 24257,
            39929: 24258,
            39930: 24264,
            39931: 24272,
            39932: 24271,
            4e4: 24278,
            40001: 24291,
            40002: 24285,
            40003: 24282,
            40004: 24283,
            40005: 24290,
            40006: 24289,
            40007: 24296,
            40008: 24297,
            40009: 24300,
            40010: 24305,
            40011: 24307,
            40012: 24304,
            40013: 24308,
            40014: 24312,
            40015: 24318,
            40016: 24323,
            40017: 24329,
            40018: 24413,
            40019: 24412,
            40020: 24331,
            40021: 24337,
            40022: 24342,
            40023: 24361,
            40024: 24365,
            40025: 24376,
            40026: 24385,
            40027: 24392,
            40028: 24396,
            40029: 24398,
            40030: 24367,
            40031: 24401,
            40032: 24406,
            40033: 24407,
            40034: 24409,
            40035: 24417,
            40036: 24429,
            40037: 24435,
            40038: 24439,
            40039: 24451,
            40040: 24450,
            40041: 24447,
            40042: 24458,
            40043: 24456,
            40044: 24465,
            40045: 24455,
            40046: 24478,
            40047: 24473,
            40048: 24472,
            40049: 24480,
            40050: 24488,
            40051: 24493,
            40052: 24508,
            40053: 24534,
            40054: 24571,
            40055: 24548,
            40056: 24568,
            40057: 24561,
            40058: 24541,
            40059: 24755,
            40060: 24575,
            40061: 24609,
            40062: 24672,
            40064: 24601,
            40065: 24592,
            40066: 24617,
            40067: 24590,
            40068: 24625,
            40069: 24603,
            40070: 24597,
            40071: 24619,
            40072: 24614,
            40073: 24591,
            40074: 24634,
            40075: 24666,
            40076: 24641,
            40077: 24682,
            40078: 24695,
            40079: 24671,
            40080: 24650,
            40081: 24646,
            40082: 24653,
            40083: 24675,
            40084: 24643,
            40085: 24676,
            40086: 24642,
            40087: 24684,
            40088: 24683,
            40089: 24665,
            40090: 24705,
            40091: 24717,
            40092: 24807,
            40093: 24707,
            40094: 24730,
            40095: 24708,
            40096: 24731,
            40097: 24726,
            40098: 24727,
            40099: 24722,
            40100: 24743,
            40101: 24715,
            40102: 24801,
            40103: 24760,
            40104: 24800,
            40105: 24787,
            40106: 24756,
            40107: 24560,
            40108: 24765,
            40109: 24774,
            40110: 24757,
            40111: 24792,
            40112: 24909,
            40113: 24853,
            40114: 24838,
            40115: 24822,
            40116: 24823,
            40117: 24832,
            40118: 24820,
            40119: 24826,
            40120: 24835,
            40121: 24865,
            40122: 24827,
            40123: 24817,
            40124: 24845,
            40125: 24846,
            40126: 24903,
            40127: 24894,
            40128: 24872,
            40129: 24871,
            40130: 24906,
            40131: 24895,
            40132: 24892,
            40133: 24876,
            40134: 24884,
            40135: 24893,
            40136: 24898,
            40137: 24900,
            40138: 24947,
            40139: 24951,
            40140: 24920,
            40141: 24921,
            40142: 24922,
            40143: 24939,
            40144: 24948,
            40145: 24943,
            40146: 24933,
            40147: 24945,
            40148: 24927,
            40149: 24925,
            40150: 24915,
            40151: 24949,
            40152: 24985,
            40153: 24982,
            40154: 24967,
            40155: 25004,
            40156: 24980,
            40157: 24986,
            40158: 24970,
            40159: 24977,
            40160: 25003,
            40161: 25006,
            40162: 25036,
            40163: 25034,
            40164: 25033,
            40165: 25079,
            40166: 25032,
            40167: 25027,
            40168: 25030,
            40169: 25018,
            40170: 25035,
            40171: 32633,
            40172: 25037,
            40173: 25062,
            40174: 25059,
            40175: 25078,
            40176: 25082,
            40177: 25076,
            40178: 25087,
            40179: 25085,
            40180: 25084,
            40181: 25086,
            40182: 25088,
            40183: 25096,
            40184: 25097,
            40185: 25101,
            40186: 25100,
            40187: 25108,
            40188: 25115,
            40256: 25118,
            40257: 25121,
            40258: 25130,
            40259: 25134,
            40260: 25136,
            40261: 25138,
            40262: 25139,
            40263: 25153,
            40264: 25166,
            40265: 25182,
            40266: 25187,
            40267: 25179,
            40268: 25184,
            40269: 25192,
            40270: 25212,
            40271: 25218,
            40272: 25225,
            40273: 25214,
            40274: 25234,
            40275: 25235,
            40276: 25238,
            40277: 25300,
            40278: 25219,
            40279: 25236,
            40280: 25303,
            40281: 25297,
            40282: 25275,
            40283: 25295,
            40284: 25343,
            40285: 25286,
            40286: 25812,
            40287: 25288,
            40288: 25308,
            40289: 25292,
            40290: 25290,
            40291: 25282,
            40292: 25287,
            40293: 25243,
            40294: 25289,
            40295: 25356,
            40296: 25326,
            40297: 25329,
            40298: 25383,
            40299: 25346,
            40300: 25352,
            40301: 25327,
            40302: 25333,
            40303: 25424,
            40304: 25406,
            40305: 25421,
            40306: 25628,
            40307: 25423,
            40308: 25494,
            40309: 25486,
            40310: 25472,
            40311: 25515,
            40312: 25462,
            40313: 25507,
            40314: 25487,
            40315: 25481,
            40316: 25503,
            40317: 25525,
            40318: 25451,
            40320: 25449,
            40321: 25534,
            40322: 25577,
            40323: 25536,
            40324: 25542,
            40325: 25571,
            40326: 25545,
            40327: 25554,
            40328: 25590,
            40329: 25540,
            40330: 25622,
            40331: 25652,
            40332: 25606,
            40333: 25619,
            40334: 25638,
            40335: 25654,
            40336: 25885,
            40337: 25623,
            40338: 25640,
            40339: 25615,
            40340: 25703,
            40341: 25711,
            40342: 25718,
            40343: 25678,
            40344: 25898,
            40345: 25749,
            40346: 25747,
            40347: 25765,
            40348: 25769,
            40349: 25736,
            40350: 25788,
            40351: 25818,
            40352: 25810,
            40353: 25797,
            40354: 25799,
            40355: 25787,
            40356: 25816,
            40357: 25794,
            40358: 25841,
            40359: 25831,
            40360: 33289,
            40361: 25824,
            40362: 25825,
            40363: 25260,
            40364: 25827,
            40365: 25839,
            40366: 25900,
            40367: 25846,
            40368: 25844,
            40369: 25842,
            40370: 25850,
            40371: 25856,
            40372: 25853,
            40373: 25880,
            40374: 25884,
            40375: 25861,
            40376: 25892,
            40377: 25891,
            40378: 25899,
            40379: 25908,
            40380: 25909,
            40381: 25911,
            40382: 25910,
            40383: 25912,
            40384: 30027,
            40385: 25928,
            40386: 25942,
            40387: 25941,
            40388: 25933,
            40389: 25944,
            40390: 25950,
            40391: 25949,
            40392: 25970,
            40393: 25976,
            40394: 25986,
            40395: 25987,
            40396: 35722,
            40397: 26011,
            40398: 26015,
            40399: 26027,
            40400: 26039,
            40401: 26051,
            40402: 26054,
            40403: 26049,
            40404: 26052,
            40405: 26060,
            40406: 26066,
            40407: 26075,
            40408: 26073,
            40409: 26080,
            40410: 26081,
            40411: 26097,
            40412: 26482,
            40413: 26122,
            40414: 26115,
            40415: 26107,
            40416: 26483,
            40417: 26165,
            40418: 26166,
            40419: 26164,
            40420: 26140,
            40421: 26191,
            40422: 26180,
            40423: 26185,
            40424: 26177,
            40425: 26206,
            40426: 26205,
            40427: 26212,
            40428: 26215,
            40429: 26216,
            40430: 26207,
            40431: 26210,
            40432: 26224,
            40433: 26243,
            40434: 26248,
            40435: 26254,
            40436: 26249,
            40437: 26244,
            40438: 26264,
            40439: 26269,
            40440: 26305,
            40441: 26297,
            40442: 26313,
            40443: 26302,
            40444: 26300,
            40512: 26308,
            40513: 26296,
            40514: 26326,
            40515: 26330,
            40516: 26336,
            40517: 26175,
            40518: 26342,
            40519: 26345,
            40520: 26352,
            40521: 26357,
            40522: 26359,
            40523: 26383,
            40524: 26390,
            40525: 26398,
            40526: 26406,
            40527: 26407,
            40528: 38712,
            40529: 26414,
            40530: 26431,
            40531: 26422,
            40532: 26433,
            40533: 26424,
            40534: 26423,
            40535: 26438,
            40536: 26462,
            40537: 26464,
            40538: 26457,
            40539: 26467,
            40540: 26468,
            40541: 26505,
            40542: 26480,
            40543: 26537,
            40544: 26492,
            40545: 26474,
            40546: 26508,
            40547: 26507,
            40548: 26534,
            40549: 26529,
            40550: 26501,
            40551: 26551,
            40552: 26607,
            40553: 26548,
            40554: 26604,
            40555: 26547,
            40556: 26601,
            40557: 26552,
            40558: 26596,
            40559: 26590,
            40560: 26589,
            40561: 26594,
            40562: 26606,
            40563: 26553,
            40564: 26574,
            40565: 26566,
            40566: 26599,
            40567: 27292,
            40568: 26654,
            40569: 26694,
            40570: 26665,
            40571: 26688,
            40572: 26701,
            40573: 26674,
            40574: 26702,
            40576: 26803,
            40577: 26667,
            40578: 26713,
            40579: 26723,
            40580: 26743,
            40581: 26751,
            40582: 26783,
            40583: 26767,
            40584: 26797,
            40585: 26772,
            40586: 26781,
            40587: 26779,
            40588: 26755,
            40589: 27310,
            40590: 26809,
            40591: 26740,
            40592: 26805,
            40593: 26784,
            40594: 26810,
            40595: 26895,
            40596: 26765,
            40597: 26750,
            40598: 26881,
            40599: 26826,
            40600: 26888,
            40601: 26840,
            40602: 26914,
            40603: 26918,
            40604: 26849,
            40605: 26892,
            40606: 26829,
            40607: 26836,
            40608: 26855,
            40609: 26837,
            40610: 26934,
            40611: 26898,
            40612: 26884,
            40613: 26839,
            40614: 26851,
            40615: 26917,
            40616: 26873,
            40617: 26848,
            40618: 26863,
            40619: 26920,
            40620: 26922,
            40621: 26906,
            40622: 26915,
            40623: 26913,
            40624: 26822,
            40625: 27001,
            40626: 26999,
            40627: 26972,
            40628: 27e3,
            40629: 26987,
            40630: 26964,
            40631: 27006,
            40632: 26990,
            40633: 26937,
            40634: 26996,
            40635: 26941,
            40636: 26969,
            40637: 26928,
            40638: 26977,
            40639: 26974,
            40640: 26973,
            40641: 27009,
            40642: 26986,
            40643: 27058,
            40644: 27054,
            40645: 27088,
            40646: 27071,
            40647: 27073,
            40648: 27091,
            40649: 27070,
            40650: 27086,
            40651: 23528,
            40652: 27082,
            40653: 27101,
            40654: 27067,
            40655: 27075,
            40656: 27047,
            40657: 27182,
            40658: 27025,
            40659: 27040,
            40660: 27036,
            40661: 27029,
            40662: 27060,
            40663: 27102,
            40664: 27112,
            40665: 27138,
            40666: 27163,
            40667: 27135,
            40668: 27402,
            40669: 27129,
            40670: 27122,
            40671: 27111,
            40672: 27141,
            40673: 27057,
            40674: 27166,
            40675: 27117,
            40676: 27156,
            40677: 27115,
            40678: 27146,
            40679: 27154,
            40680: 27329,
            40681: 27171,
            40682: 27155,
            40683: 27204,
            40684: 27148,
            40685: 27250,
            40686: 27190,
            40687: 27256,
            40688: 27207,
            40689: 27234,
            40690: 27225,
            40691: 27238,
            40692: 27208,
            40693: 27192,
            40694: 27170,
            40695: 27280,
            40696: 27277,
            40697: 27296,
            40698: 27268,
            40699: 27298,
            40700: 27299,
            40768: 27287,
            40769: 34327,
            40770: 27323,
            40771: 27331,
            40772: 27330,
            40773: 27320,
            40774: 27315,
            40775: 27308,
            40776: 27358,
            40777: 27345,
            40778: 27359,
            40779: 27306,
            40780: 27354,
            40781: 27370,
            40782: 27387,
            40783: 27397,
            40784: 34326,
            40785: 27386,
            40786: 27410,
            40787: 27414,
            40788: 39729,
            40789: 27423,
            40790: 27448,
            40791: 27447,
            40792: 30428,
            40793: 27449,
            40794: 39150,
            40795: 27463,
            40796: 27459,
            40797: 27465,
            40798: 27472,
            40799: 27481,
            40800: 27476,
            40801: 27483,
            40802: 27487,
            40803: 27489,
            40804: 27512,
            40805: 27513,
            40806: 27519,
            40807: 27520,
            40808: 27524,
            40809: 27523,
            40810: 27533,
            40811: 27544,
            40812: 27541,
            40813: 27550,
            40814: 27556,
            40815: 27562,
            40816: 27563,
            40817: 27567,
            40818: 27570,
            40819: 27569,
            40820: 27571,
            40821: 27575,
            40822: 27580,
            40823: 27590,
            40824: 27595,
            40825: 27603,
            40826: 27615,
            40827: 27628,
            40828: 27627,
            40829: 27635,
            40830: 27631,
            40832: 40638,
            40833: 27656,
            40834: 27667,
            40835: 27668,
            40836: 27675,
            40837: 27684,
            40838: 27683,
            40839: 27742,
            40840: 27733,
            40841: 27746,
            40842: 27754,
            40843: 27778,
            40844: 27789,
            40845: 27802,
            40846: 27777,
            40847: 27803,
            40848: 27774,
            40849: 27752,
            40850: 27763,
            40851: 27794,
            40852: 27792,
            40853: 27844,
            40854: 27889,
            40855: 27859,
            40856: 27837,
            40857: 27863,
            40858: 27845,
            40859: 27869,
            40860: 27822,
            40861: 27825,
            40862: 27838,
            40863: 27834,
            40864: 27867,
            40865: 27887,
            40866: 27865,
            40867: 27882,
            40868: 27935,
            40869: 34893,
            40870: 27958,
            40871: 27947,
            40872: 27965,
            40873: 27960,
            40874: 27929,
            40875: 27957,
            40876: 27955,
            40877: 27922,
            40878: 27916,
            40879: 28003,
            40880: 28051,
            40881: 28004,
            40882: 27994,
            40883: 28025,
            40884: 27993,
            40885: 28046,
            40886: 28053,
            40887: 28644,
            40888: 28037,
            40889: 28153,
            40890: 28181,
            40891: 28170,
            40892: 28085,
            40893: 28103,
            40894: 28134,
            40895: 28088,
            40896: 28102,
            40897: 28140,
            40898: 28126,
            40899: 28108,
            40900: 28136,
            40901: 28114,
            40902: 28101,
            40903: 28154,
            40904: 28121,
            40905: 28132,
            40906: 28117,
            40907: 28138,
            40908: 28142,
            40909: 28205,
            40910: 28270,
            40911: 28206,
            40912: 28185,
            40913: 28274,
            40914: 28255,
            40915: 28222,
            40916: 28195,
            40917: 28267,
            40918: 28203,
            40919: 28278,
            40920: 28237,
            40921: 28191,
            40922: 28227,
            40923: 28218,
            40924: 28238,
            40925: 28196,
            40926: 28415,
            40927: 28189,
            40928: 28216,
            40929: 28290,
            40930: 28330,
            40931: 28312,
            40932: 28361,
            40933: 28343,
            40934: 28371,
            40935: 28349,
            40936: 28335,
            40937: 28356,
            40938: 28338,
            40939: 28372,
            40940: 28373,
            40941: 28303,
            40942: 28325,
            40943: 28354,
            40944: 28319,
            40945: 28481,
            40946: 28433,
            40947: 28748,
            40948: 28396,
            40949: 28408,
            40950: 28414,
            40951: 28479,
            40952: 28402,
            40953: 28465,
            40954: 28399,
            40955: 28466,
            40956: 28364,
            161: 65377,
            162: 65378,
            163: 65379,
            164: 65380,
            165: 65381,
            166: 65382,
            167: 65383,
            168: 65384,
            169: 65385,
            170: 65386,
            171: 65387,
            172: 65388,
            173: 65389,
            174: 65390,
            175: 65391,
            176: 65392,
            177: 65393,
            178: 65394,
            179: 65395,
            180: 65396,
            181: 65397,
            182: 65398,
            183: 65399,
            184: 65400,
            185: 65401,
            186: 65402,
            187: 65403,
            188: 65404,
            189: 65405,
            190: 65406,
            191: 65407,
            192: 65408,
            193: 65409,
            194: 65410,
            195: 65411,
            196: 65412,
            197: 65413,
            198: 65414,
            199: 65415,
            200: 65416,
            201: 65417,
            202: 65418,
            203: 65419,
            204: 65420,
            205: 65421,
            206: 65422,
            207: 65423,
            208: 65424,
            209: 65425,
            210: 65426,
            211: 65427,
            212: 65428,
            213: 65429,
            214: 65430,
            215: 65431,
            216: 65432,
            217: 65433,
            218: 65434,
            219: 65435,
            220: 65436,
            221: 65437,
            222: 65438,
            223: 65439,
            57408: 28478,
            57409: 28435,
            57410: 28407,
            57411: 28550,
            57412: 28538,
            57413: 28536,
            57414: 28545,
            57415: 28544,
            57416: 28527,
            57417: 28507,
            57418: 28659,
            57419: 28525,
            57420: 28546,
            57421: 28540,
            57422: 28504,
            57423: 28558,
            57424: 28561,
            57425: 28610,
            57426: 28518,
            57427: 28595,
            57428: 28579,
            57429: 28577,
            57430: 28580,
            57431: 28601,
            57432: 28614,
            57433: 28586,
            57434: 28639,
            57435: 28629,
            57436: 28652,
            57437: 28628,
            57438: 28632,
            57439: 28657,
            57440: 28654,
            57441: 28635,
            57442: 28681,
            57443: 28683,
            57444: 28666,
            57445: 28689,
            57446: 28673,
            57447: 28687,
            57448: 28670,
            57449: 28699,
            57450: 28698,
            57451: 28532,
            57452: 28701,
            57453: 28696,
            57454: 28703,
            57455: 28720,
            57456: 28734,
            57457: 28722,
            57458: 28753,
            57459: 28771,
            57460: 28825,
            57461: 28818,
            57462: 28847,
            57463: 28913,
            57464: 28844,
            57465: 28856,
            57466: 28851,
            57467: 28846,
            57468: 28895,
            57469: 28875,
            57470: 28893,
            57472: 28889,
            57473: 28937,
            57474: 28925,
            57475: 28956,
            57476: 28953,
            57477: 29029,
            57478: 29013,
            57479: 29064,
            57480: 29030,
            57481: 29026,
            57482: 29004,
            57483: 29014,
            57484: 29036,
            57485: 29071,
            57486: 29179,
            57487: 29060,
            57488: 29077,
            57489: 29096,
            57490: 29100,
            57491: 29143,
            57492: 29113,
            57493: 29118,
            57494: 29138,
            57495: 29129,
            57496: 29140,
            57497: 29134,
            57498: 29152,
            57499: 29164,
            57500: 29159,
            57501: 29173,
            57502: 29180,
            57503: 29177,
            57504: 29183,
            57505: 29197,
            57506: 29200,
            57507: 29211,
            57508: 29224,
            57509: 29229,
            57510: 29228,
            57511: 29232,
            57512: 29234,
            57513: 29243,
            57514: 29244,
            57515: 29247,
            57516: 29248,
            57517: 29254,
            57518: 29259,
            57519: 29272,
            57520: 29300,
            57521: 29310,
            57522: 29314,
            57523: 29313,
            57524: 29319,
            57525: 29330,
            57526: 29334,
            57527: 29346,
            57528: 29351,
            57529: 29369,
            57530: 29362,
            57531: 29379,
            57532: 29382,
            57533: 29380,
            57534: 29390,
            57535: 29394,
            57536: 29410,
            57537: 29408,
            57538: 29409,
            57539: 29433,
            57540: 29431,
            57541: 20495,
            57542: 29463,
            57543: 29450,
            57544: 29468,
            57545: 29462,
            57546: 29469,
            57547: 29492,
            57548: 29487,
            57549: 29481,
            57550: 29477,
            57551: 29502,
            57552: 29518,
            57553: 29519,
            57554: 40664,
            57555: 29527,
            57556: 29546,
            57557: 29544,
            57558: 29552,
            57559: 29560,
            57560: 29557,
            57561: 29563,
            57562: 29562,
            57563: 29640,
            57564: 29619,
            57565: 29646,
            57566: 29627,
            57567: 29632,
            57568: 29669,
            57569: 29678,
            57570: 29662,
            57571: 29858,
            57572: 29701,
            57573: 29807,
            57574: 29733,
            57575: 29688,
            57576: 29746,
            57577: 29754,
            57578: 29781,
            57579: 29759,
            57580: 29791,
            57581: 29785,
            57582: 29761,
            57583: 29788,
            57584: 29801,
            57585: 29808,
            57586: 29795,
            57587: 29802,
            57588: 29814,
            57589: 29822,
            57590: 29835,
            57591: 29854,
            57592: 29863,
            57593: 29898,
            57594: 29903,
            57595: 29908,
            57596: 29681,
            57664: 29920,
            57665: 29923,
            57666: 29927,
            57667: 29929,
            57668: 29934,
            57669: 29938,
            57670: 29936,
            57671: 29937,
            57672: 29944,
            57673: 29943,
            57674: 29956,
            57675: 29955,
            57676: 29957,
            57677: 29964,
            57678: 29966,
            57679: 29965,
            57680: 29973,
            57681: 29971,
            57682: 29982,
            57683: 29990,
            57684: 29996,
            57685: 30012,
            57686: 30020,
            57687: 30029,
            57688: 30026,
            57689: 30025,
            57690: 30043,
            57691: 30022,
            57692: 30042,
            57693: 30057,
            57694: 30052,
            57695: 30055,
            57696: 30059,
            57697: 30061,
            57698: 30072,
            57699: 30070,
            57700: 30086,
            57701: 30087,
            57702: 30068,
            57703: 30090,
            57704: 30089,
            57705: 30082,
            57706: 30100,
            57707: 30106,
            57708: 30109,
            57709: 30117,
            57710: 30115,
            57711: 30146,
            57712: 30131,
            57713: 30147,
            57714: 30133,
            57715: 30141,
            57716: 30136,
            57717: 30140,
            57718: 30129,
            57719: 30157,
            57720: 30154,
            57721: 30162,
            57722: 30169,
            57723: 30179,
            57724: 30174,
            57725: 30206,
            57726: 30207,
            57728: 30204,
            57729: 30209,
            57730: 30192,
            57731: 30202,
            57732: 30194,
            57733: 30195,
            57734: 30219,
            57735: 30221,
            57736: 30217,
            57737: 30239,
            57738: 30247,
            57739: 30240,
            57740: 30241,
            57741: 30242,
            57742: 30244,
            57743: 30260,
            57744: 30256,
            57745: 30267,
            57746: 30279,
            57747: 30280,
            57748: 30278,
            57749: 30300,
            57750: 30296,
            57751: 30305,
            57752: 30306,
            57753: 30312,
            57754: 30313,
            57755: 30314,
            57756: 30311,
            57757: 30316,
            57758: 30320,
            57759: 30322,
            57760: 30326,
            57761: 30328,
            57762: 30332,
            57763: 30336,
            57764: 30339,
            57765: 30344,
            57766: 30347,
            57767: 30350,
            57768: 30358,
            57769: 30355,
            57770: 30361,
            57771: 30362,
            57772: 30384,
            57773: 30388,
            57774: 30392,
            57775: 30393,
            57776: 30394,
            57777: 30402,
            57778: 30413,
            57779: 30422,
            57780: 30418,
            57781: 30430,
            57782: 30433,
            57783: 30437,
            57784: 30439,
            57785: 30442,
            57786: 34351,
            57787: 30459,
            57788: 30472,
            57789: 30471,
            57790: 30468,
            57791: 30505,
            57792: 30500,
            57793: 30494,
            57794: 30501,
            57795: 30502,
            57796: 30491,
            57797: 30519,
            57798: 30520,
            57799: 30535,
            57800: 30554,
            57801: 30568,
            57802: 30571,
            57803: 30555,
            57804: 30565,
            57805: 30591,
            57806: 30590,
            57807: 30585,
            57808: 30606,
            57809: 30603,
            57810: 30609,
            57811: 30624,
            57812: 30622,
            57813: 30640,
            57814: 30646,
            57815: 30649,
            57816: 30655,
            57817: 30652,
            57818: 30653,
            57819: 30651,
            57820: 30663,
            57821: 30669,
            57822: 30679,
            57823: 30682,
            57824: 30684,
            57825: 30691,
            57826: 30702,
            57827: 30716,
            57828: 30732,
            57829: 30738,
            57830: 31014,
            57831: 30752,
            57832: 31018,
            57833: 30789,
            57834: 30862,
            57835: 30836,
            57836: 30854,
            57837: 30844,
            57838: 30874,
            57839: 30860,
            57840: 30883,
            57841: 30901,
            57842: 30890,
            57843: 30895,
            57844: 30929,
            57845: 30918,
            57846: 30923,
            57847: 30932,
            57848: 30910,
            57849: 30908,
            57850: 30917,
            57851: 30922,
            57852: 30956,
            57920: 30951,
            57921: 30938,
            57922: 30973,
            57923: 30964,
            57924: 30983,
            57925: 30994,
            57926: 30993,
            57927: 31001,
            57928: 31020,
            57929: 31019,
            57930: 31040,
            57931: 31072,
            57932: 31063,
            57933: 31071,
            57934: 31066,
            57935: 31061,
            57936: 31059,
            57937: 31098,
            57938: 31103,
            57939: 31114,
            57940: 31133,
            57941: 31143,
            57942: 40779,
            57943: 31146,
            57944: 31150,
            57945: 31155,
            57946: 31161,
            57947: 31162,
            57948: 31177,
            57949: 31189,
            57950: 31207,
            57951: 31212,
            57952: 31201,
            57953: 31203,
            57954: 31240,
            57955: 31245,
            57956: 31256,
            57957: 31257,
            57958: 31264,
            57959: 31263,
            57960: 31104,
            57961: 31281,
            57962: 31291,
            57963: 31294,
            57964: 31287,
            57965: 31299,
            57966: 31319,
            57967: 31305,
            57968: 31329,
            57969: 31330,
            57970: 31337,
            57971: 40861,
            57972: 31344,
            57973: 31353,
            57974: 31357,
            57975: 31368,
            57976: 31383,
            57977: 31381,
            57978: 31384,
            57979: 31382,
            57980: 31401,
            57981: 31432,
            57982: 31408,
            57984: 31414,
            57985: 31429,
            57986: 31428,
            57987: 31423,
            57988: 36995,
            57989: 31431,
            57990: 31434,
            57991: 31437,
            57992: 31439,
            57993: 31445,
            57994: 31443,
            57995: 31449,
            57996: 31450,
            57997: 31453,
            57998: 31457,
            57999: 31458,
            58e3: 31462,
            58001: 31469,
            58002: 31472,
            58003: 31490,
            58004: 31503,
            58005: 31498,
            58006: 31494,
            58007: 31539,
            58008: 31512,
            58009: 31513,
            58010: 31518,
            58011: 31541,
            58012: 31528,
            58013: 31542,
            58014: 31568,
            58015: 31610,
            58016: 31492,
            58017: 31565,
            58018: 31499,
            58019: 31564,
            58020: 31557,
            58021: 31605,
            58022: 31589,
            58023: 31604,
            58024: 31591,
            58025: 31600,
            58026: 31601,
            58027: 31596,
            58028: 31598,
            58029: 31645,
            58030: 31640,
            58031: 31647,
            58032: 31629,
            58033: 31644,
            58034: 31642,
            58035: 31627,
            58036: 31634,
            58037: 31631,
            58038: 31581,
            58039: 31641,
            58040: 31691,
            58041: 31681,
            58042: 31692,
            58043: 31695,
            58044: 31668,
            58045: 31686,
            58046: 31709,
            58047: 31721,
            58048: 31761,
            58049: 31764,
            58050: 31718,
            58051: 31717,
            58052: 31840,
            58053: 31744,
            58054: 31751,
            58055: 31763,
            58056: 31731,
            58057: 31735,
            58058: 31767,
            58059: 31757,
            58060: 31734,
            58061: 31779,
            58062: 31783,
            58063: 31786,
            58064: 31775,
            58065: 31799,
            58066: 31787,
            58067: 31805,
            58068: 31820,
            58069: 31811,
            58070: 31828,
            58071: 31823,
            58072: 31808,
            58073: 31824,
            58074: 31832,
            58075: 31839,
            58076: 31844,
            58077: 31830,
            58078: 31845,
            58079: 31852,
            58080: 31861,
            58081: 31875,
            58082: 31888,
            58083: 31908,
            58084: 31917,
            58085: 31906,
            58086: 31915,
            58087: 31905,
            58088: 31912,
            58089: 31923,
            58090: 31922,
            58091: 31921,
            58092: 31918,
            58093: 31929,
            58094: 31933,
            58095: 31936,
            58096: 31941,
            58097: 31938,
            58098: 31960,
            58099: 31954,
            58100: 31964,
            58101: 31970,
            58102: 39739,
            58103: 31983,
            58104: 31986,
            58105: 31988,
            58106: 31990,
            58107: 31994,
            58108: 32006,
            58176: 32002,
            58177: 32028,
            58178: 32021,
            58179: 32010,
            58180: 32069,
            58181: 32075,
            58182: 32046,
            58183: 32050,
            58184: 32063,
            58185: 32053,
            58186: 32070,
            58187: 32115,
            58188: 32086,
            58189: 32078,
            58190: 32114,
            58191: 32104,
            58192: 32110,
            58193: 32079,
            58194: 32099,
            58195: 32147,
            58196: 32137,
            58197: 32091,
            58198: 32143,
            58199: 32125,
            58200: 32155,
            58201: 32186,
            58202: 32174,
            58203: 32163,
            58204: 32181,
            58205: 32199,
            58206: 32189,
            58207: 32171,
            58208: 32317,
            58209: 32162,
            58210: 32175,
            58211: 32220,
            58212: 32184,
            58213: 32159,
            58214: 32176,
            58215: 32216,
            58216: 32221,
            58217: 32228,
            58218: 32222,
            58219: 32251,
            58220: 32242,
            58221: 32225,
            58222: 32261,
            58223: 32266,
            58224: 32291,
            58225: 32289,
            58226: 32274,
            58227: 32305,
            58228: 32287,
            58229: 32265,
            58230: 32267,
            58231: 32290,
            58232: 32326,
            58233: 32358,
            58234: 32315,
            58235: 32309,
            58236: 32313,
            58237: 32323,
            58238: 32311,
            58240: 32306,
            58241: 32314,
            58242: 32359,
            58243: 32349,
            58244: 32342,
            58245: 32350,
            58246: 32345,
            58247: 32346,
            58248: 32377,
            58249: 32362,
            58250: 32361,
            58251: 32380,
            58252: 32379,
            58253: 32387,
            58254: 32213,
            58255: 32381,
            58256: 36782,
            58257: 32383,
            58258: 32392,
            58259: 32393,
            58260: 32396,
            58261: 32402,
            58262: 32400,
            58263: 32403,
            58264: 32404,
            58265: 32406,
            58266: 32398,
            58267: 32411,
            58268: 32412,
            58269: 32568,
            58270: 32570,
            58271: 32581,
            58272: 32588,
            58273: 32589,
            58274: 32590,
            58275: 32592,
            58276: 32593,
            58277: 32597,
            58278: 32596,
            58279: 32600,
            58280: 32607,
            58281: 32608,
            58282: 32616,
            58283: 32617,
            58284: 32615,
            58285: 32632,
            58286: 32642,
            58287: 32646,
            58288: 32643,
            58289: 32648,
            58290: 32647,
            58291: 32652,
            58292: 32660,
            58293: 32670,
            58294: 32669,
            58295: 32666,
            58296: 32675,
            58297: 32687,
            58298: 32690,
            58299: 32697,
            58300: 32686,
            58301: 32694,
            58302: 32696,
            58303: 35697,
            58304: 32709,
            58305: 32710,
            58306: 32714,
            58307: 32725,
            58308: 32724,
            58309: 32737,
            58310: 32742,
            58311: 32745,
            58312: 32755,
            58313: 32761,
            58314: 39132,
            58315: 32774,
            58316: 32772,
            58317: 32779,
            58318: 32786,
            58319: 32792,
            58320: 32793,
            58321: 32796,
            58322: 32801,
            58323: 32808,
            58324: 32831,
            58325: 32827,
            58326: 32842,
            58327: 32838,
            58328: 32850,
            58329: 32856,
            58330: 32858,
            58331: 32863,
            58332: 32866,
            58333: 32872,
            58334: 32883,
            58335: 32882,
            58336: 32880,
            58337: 32886,
            58338: 32889,
            58339: 32893,
            58340: 32895,
            58341: 32900,
            58342: 32902,
            58343: 32901,
            58344: 32923,
            58345: 32915,
            58346: 32922,
            58347: 32941,
            58348: 20880,
            58349: 32940,
            58350: 32987,
            58351: 32997,
            58352: 32985,
            58353: 32989,
            58354: 32964,
            58355: 32986,
            58356: 32982,
            58357: 33033,
            58358: 33007,
            58359: 33009,
            58360: 33051,
            58361: 33065,
            58362: 33059,
            58363: 33071,
            58364: 33099,
            58432: 38539,
            58433: 33094,
            58434: 33086,
            58435: 33107,
            58436: 33105,
            58437: 33020,
            58438: 33137,
            58439: 33134,
            58440: 33125,
            58441: 33126,
            58442: 33140,
            58443: 33155,
            58444: 33160,
            58445: 33162,
            58446: 33152,
            58447: 33154,
            58448: 33184,
            58449: 33173,
            58450: 33188,
            58451: 33187,
            58452: 33119,
            58453: 33171,
            58454: 33193,
            58455: 33200,
            58456: 33205,
            58457: 33214,
            58458: 33208,
            58459: 33213,
            58460: 33216,
            58461: 33218,
            58462: 33210,
            58463: 33225,
            58464: 33229,
            58465: 33233,
            58466: 33241,
            58467: 33240,
            58468: 33224,
            58469: 33242,
            58470: 33247,
            58471: 33248,
            58472: 33255,
            58473: 33274,
            58474: 33275,
            58475: 33278,
            58476: 33281,
            58477: 33282,
            58478: 33285,
            58479: 33287,
            58480: 33290,
            58481: 33293,
            58482: 33296,
            58483: 33302,
            58484: 33321,
            58485: 33323,
            58486: 33336,
            58487: 33331,
            58488: 33344,
            58489: 33369,
            58490: 33368,
            58491: 33373,
            58492: 33370,
            58493: 33375,
            58494: 33380,
            58496: 33378,
            58497: 33384,
            58498: 33386,
            58499: 33387,
            58500: 33326,
            58501: 33393,
            58502: 33399,
            58503: 33400,
            58504: 33406,
            58505: 33421,
            58506: 33426,
            58507: 33451,
            58508: 33439,
            58509: 33467,
            58510: 33452,
            58511: 33505,
            58512: 33507,
            58513: 33503,
            58514: 33490,
            58515: 33524,
            58516: 33523,
            58517: 33530,
            58518: 33683,
            58519: 33539,
            58520: 33531,
            58521: 33529,
            58522: 33502,
            58523: 33542,
            58524: 33500,
            58525: 33545,
            58526: 33497,
            58527: 33589,
            58528: 33588,
            58529: 33558,
            58530: 33586,
            58531: 33585,
            58532: 33600,
            58533: 33593,
            58534: 33616,
            58535: 33605,
            58536: 33583,
            58537: 33579,
            58538: 33559,
            58539: 33560,
            58540: 33669,
            58541: 33690,
            58542: 33706,
            58543: 33695,
            58544: 33698,
            58545: 33686,
            58546: 33571,
            58547: 33678,
            58548: 33671,
            58549: 33674,
            58550: 33660,
            58551: 33717,
            58552: 33651,
            58553: 33653,
            58554: 33696,
            58555: 33673,
            58556: 33704,
            58557: 33780,
            58558: 33811,
            58559: 33771,
            58560: 33742,
            58561: 33789,
            58562: 33795,
            58563: 33752,
            58564: 33803,
            58565: 33729,
            58566: 33783,
            58567: 33799,
            58568: 33760,
            58569: 33778,
            58570: 33805,
            58571: 33826,
            58572: 33824,
            58573: 33725,
            58574: 33848,
            58575: 34054,
            58576: 33787,
            58577: 33901,
            58578: 33834,
            58579: 33852,
            58580: 34138,
            58581: 33924,
            58582: 33911,
            58583: 33899,
            58584: 33965,
            58585: 33902,
            58586: 33922,
            58587: 33897,
            58588: 33862,
            58589: 33836,
            58590: 33903,
            58591: 33913,
            58592: 33845,
            58593: 33994,
            58594: 33890,
            58595: 33977,
            58596: 33983,
            58597: 33951,
            58598: 34009,
            58599: 33997,
            58600: 33979,
            58601: 34010,
            58602: 34e3,
            58603: 33985,
            58604: 33990,
            58605: 34006,
            58606: 33953,
            58607: 34081,
            58608: 34047,
            58609: 34036,
            58610: 34071,
            58611: 34072,
            58612: 34092,
            58613: 34079,
            58614: 34069,
            58615: 34068,
            58616: 34044,
            58617: 34112,
            58618: 34147,
            58619: 34136,
            58620: 34120,
            58688: 34113,
            58689: 34306,
            58690: 34123,
            58691: 34133,
            58692: 34176,
            58693: 34212,
            58694: 34184,
            58695: 34193,
            58696: 34186,
            58697: 34216,
            58698: 34157,
            58699: 34196,
            58700: 34203,
            58701: 34282,
            58702: 34183,
            58703: 34204,
            58704: 34167,
            58705: 34174,
            58706: 34192,
            58707: 34249,
            58708: 34234,
            58709: 34255,
            58710: 34233,
            58711: 34256,
            58712: 34261,
            58713: 34269,
            58714: 34277,
            58715: 34268,
            58716: 34297,
            58717: 34314,
            58718: 34323,
            58719: 34315,
            58720: 34302,
            58721: 34298,
            58722: 34310,
            58723: 34338,
            58724: 34330,
            58725: 34352,
            58726: 34367,
            58727: 34381,
            58728: 20053,
            58729: 34388,
            58730: 34399,
            58731: 34407,
            58732: 34417,
            58733: 34451,
            58734: 34467,
            58735: 34473,
            58736: 34474,
            58737: 34443,
            58738: 34444,
            58739: 34486,
            58740: 34479,
            58741: 34500,
            58742: 34502,
            58743: 34480,
            58744: 34505,
            58745: 34851,
            58746: 34475,
            58747: 34516,
            58748: 34526,
            58749: 34537,
            58750: 34540,
            58752: 34527,
            58753: 34523,
            58754: 34543,
            58755: 34578,
            58756: 34566,
            58757: 34568,
            58758: 34560,
            58759: 34563,
            58760: 34555,
            58761: 34577,
            58762: 34569,
            58763: 34573,
            58764: 34553,
            58765: 34570,
            58766: 34612,
            58767: 34623,
            58768: 34615,
            58769: 34619,
            58770: 34597,
            58771: 34601,
            58772: 34586,
            58773: 34656,
            58774: 34655,
            58775: 34680,
            58776: 34636,
            58777: 34638,
            58778: 34676,
            58779: 34647,
            58780: 34664,
            58781: 34670,
            58782: 34649,
            58783: 34643,
            58784: 34659,
            58785: 34666,
            58786: 34821,
            58787: 34722,
            58788: 34719,
            58789: 34690,
            58790: 34735,
            58791: 34763,
            58792: 34749,
            58793: 34752,
            58794: 34768,
            58795: 38614,
            58796: 34731,
            58797: 34756,
            58798: 34739,
            58799: 34759,
            58800: 34758,
            58801: 34747,
            58802: 34799,
            58803: 34802,
            58804: 34784,
            58805: 34831,
            58806: 34829,
            58807: 34814,
            58808: 34806,
            58809: 34807,
            58810: 34830,
            58811: 34770,
            58812: 34833,
            58813: 34838,
            58814: 34837,
            58815: 34850,
            58816: 34849,
            58817: 34865,
            58818: 34870,
            58819: 34873,
            58820: 34855,
            58821: 34875,
            58822: 34884,
            58823: 34882,
            58824: 34898,
            58825: 34905,
            58826: 34910,
            58827: 34914,
            58828: 34923,
            58829: 34945,
            58830: 34942,
            58831: 34974,
            58832: 34933,
            58833: 34941,
            58834: 34997,
            58835: 34930,
            58836: 34946,
            58837: 34967,
            58838: 34962,
            58839: 34990,
            58840: 34969,
            58841: 34978,
            58842: 34957,
            58843: 34980,
            58844: 34992,
            58845: 35007,
            58846: 34993,
            58847: 35011,
            58848: 35012,
            58849: 35028,
            58850: 35032,
            58851: 35033,
            58852: 35037,
            58853: 35065,
            58854: 35074,
            58855: 35068,
            58856: 35060,
            58857: 35048,
            58858: 35058,
            58859: 35076,
            58860: 35084,
            58861: 35082,
            58862: 35091,
            58863: 35139,
            58864: 35102,
            58865: 35109,
            58866: 35114,
            58867: 35115,
            58868: 35137,
            58869: 35140,
            58870: 35131,
            58871: 35126,
            58872: 35128,
            58873: 35148,
            58874: 35101,
            58875: 35168,
            58876: 35166,
            58944: 35174,
            58945: 35172,
            58946: 35181,
            58947: 35178,
            58948: 35183,
            58949: 35188,
            58950: 35191,
            58951: 35198,
            58952: 35203,
            58953: 35208,
            58954: 35210,
            58955: 35219,
            58956: 35224,
            58957: 35233,
            58958: 35241,
            58959: 35238,
            58960: 35244,
            58961: 35247,
            58962: 35250,
            58963: 35258,
            58964: 35261,
            58965: 35263,
            58966: 35264,
            58967: 35290,
            58968: 35292,
            58969: 35293,
            58970: 35303,
            58971: 35316,
            58972: 35320,
            58973: 35331,
            58974: 35350,
            58975: 35344,
            58976: 35340,
            58977: 35355,
            58978: 35357,
            58979: 35365,
            58980: 35382,
            58981: 35393,
            58982: 35419,
            58983: 35410,
            58984: 35398,
            58985: 35400,
            58986: 35452,
            58987: 35437,
            58988: 35436,
            58989: 35426,
            58990: 35461,
            58991: 35458,
            58992: 35460,
            58993: 35496,
            58994: 35489,
            58995: 35473,
            58996: 35493,
            58997: 35494,
            58998: 35482,
            58999: 35491,
            59e3: 35524,
            59001: 35533,
            59002: 35522,
            59003: 35546,
            59004: 35563,
            59005: 35571,
            59006: 35559,
            59008: 35556,
            59009: 35569,
            59010: 35604,
            59011: 35552,
            59012: 35554,
            59013: 35575,
            59014: 35550,
            59015: 35547,
            59016: 35596,
            59017: 35591,
            59018: 35610,
            59019: 35553,
            59020: 35606,
            59021: 35600,
            59022: 35607,
            59023: 35616,
            59024: 35635,
            59025: 38827,
            59026: 35622,
            59027: 35627,
            59028: 35646,
            59029: 35624,
            59030: 35649,
            59031: 35660,
            59032: 35663,
            59033: 35662,
            59034: 35657,
            59035: 35670,
            59036: 35675,
            59037: 35674,
            59038: 35691,
            59039: 35679,
            59040: 35692,
            59041: 35695,
            59042: 35700,
            59043: 35709,
            59044: 35712,
            59045: 35724,
            59046: 35726,
            59047: 35730,
            59048: 35731,
            59049: 35734,
            59050: 35737,
            59051: 35738,
            59052: 35898,
            59053: 35905,
            59054: 35903,
            59055: 35912,
            59056: 35916,
            59057: 35918,
            59058: 35920,
            59059: 35925,
            59060: 35938,
            59061: 35948,
            59062: 35960,
            59063: 35962,
            59064: 35970,
            59065: 35977,
            59066: 35973,
            59067: 35978,
            59068: 35981,
            59069: 35982,
            59070: 35988,
            59071: 35964,
            59072: 35992,
            59073: 25117,
            59074: 36013,
            59075: 36010,
            59076: 36029,
            59077: 36018,
            59078: 36019,
            59079: 36014,
            59080: 36022,
            59081: 36040,
            59082: 36033,
            59083: 36068,
            59084: 36067,
            59085: 36058,
            59086: 36093,
            59087: 36090,
            59088: 36091,
            59089: 36100,
            59090: 36101,
            59091: 36106,
            59092: 36103,
            59093: 36111,
            59094: 36109,
            59095: 36112,
            59096: 40782,
            59097: 36115,
            59098: 36045,
            59099: 36116,
            59100: 36118,
            59101: 36199,
            59102: 36205,
            59103: 36209,
            59104: 36211,
            59105: 36225,
            59106: 36249,
            59107: 36290,
            59108: 36286,
            59109: 36282,
            59110: 36303,
            59111: 36314,
            59112: 36310,
            59113: 36300,
            59114: 36315,
            59115: 36299,
            59116: 36330,
            59117: 36331,
            59118: 36319,
            59119: 36323,
            59120: 36348,
            59121: 36360,
            59122: 36361,
            59123: 36351,
            59124: 36381,
            59125: 36382,
            59126: 36368,
            59127: 36383,
            59128: 36418,
            59129: 36405,
            59130: 36400,
            59131: 36404,
            59132: 36426,
            59200: 36423,
            59201: 36425,
            59202: 36428,
            59203: 36432,
            59204: 36424,
            59205: 36441,
            59206: 36452,
            59207: 36448,
            59208: 36394,
            59209: 36451,
            59210: 36437,
            59211: 36470,
            59212: 36466,
            59213: 36476,
            59214: 36481,
            59215: 36487,
            59216: 36485,
            59217: 36484,
            59218: 36491,
            59219: 36490,
            59220: 36499,
            59221: 36497,
            59222: 36500,
            59223: 36505,
            59224: 36522,
            59225: 36513,
            59226: 36524,
            59227: 36528,
            59228: 36550,
            59229: 36529,
            59230: 36542,
            59231: 36549,
            59232: 36552,
            59233: 36555,
            59234: 36571,
            59235: 36579,
            59236: 36604,
            59237: 36603,
            59238: 36587,
            59239: 36606,
            59240: 36618,
            59241: 36613,
            59242: 36629,
            59243: 36626,
            59244: 36633,
            59245: 36627,
            59246: 36636,
            59247: 36639,
            59248: 36635,
            59249: 36620,
            59250: 36646,
            59251: 36659,
            59252: 36667,
            59253: 36665,
            59254: 36677,
            59255: 36674,
            59256: 36670,
            59257: 36684,
            59258: 36681,
            59259: 36678,
            59260: 36686,
            59261: 36695,
            59262: 36700,
            59264: 36706,
            59265: 36707,
            59266: 36708,
            59267: 36764,
            59268: 36767,
            59269: 36771,
            59270: 36781,
            59271: 36783,
            59272: 36791,
            59273: 36826,
            59274: 36837,
            59275: 36834,
            59276: 36842,
            59277: 36847,
            59278: 36999,
            59279: 36852,
            59280: 36869,
            59281: 36857,
            59282: 36858,
            59283: 36881,
            59284: 36885,
            59285: 36897,
            59286: 36877,
            59287: 36894,
            59288: 36886,
            59289: 36875,
            59290: 36903,
            59291: 36918,
            59292: 36917,
            59293: 36921,
            59294: 36856,
            59295: 36943,
            59296: 36944,
            59297: 36945,
            59298: 36946,
            59299: 36878,
            59300: 36937,
            59301: 36926,
            59302: 36950,
            59303: 36952,
            59304: 36958,
            59305: 36968,
            59306: 36975,
            59307: 36982,
            59308: 38568,
            59309: 36978,
            59310: 36994,
            59311: 36989,
            59312: 36993,
            59313: 36992,
            59314: 37002,
            59315: 37001,
            59316: 37007,
            59317: 37032,
            59318: 37039,
            59319: 37041,
            59320: 37045,
            59321: 37090,
            59322: 37092,
            59323: 25160,
            59324: 37083,
            59325: 37122,
            59326: 37138,
            59327: 37145,
            59328: 37170,
            59329: 37168,
            59330: 37194,
            59331: 37206,
            59332: 37208,
            59333: 37219,
            59334: 37221,
            59335: 37225,
            59336: 37235,
            59337: 37234,
            59338: 37259,
            59339: 37257,
            59340: 37250,
            59341: 37282,
            59342: 37291,
            59343: 37295,
            59344: 37290,
            59345: 37301,
            59346: 37300,
            59347: 37306,
            59348: 37312,
            59349: 37313,
            59350: 37321,
            59351: 37323,
            59352: 37328,
            59353: 37334,
            59354: 37343,
            59355: 37345,
            59356: 37339,
            59357: 37372,
            59358: 37365,
            59359: 37366,
            59360: 37406,
            59361: 37375,
            59362: 37396,
            59363: 37420,
            59364: 37397,
            59365: 37393,
            59366: 37470,
            59367: 37463,
            59368: 37445,
            59369: 37449,
            59370: 37476,
            59371: 37448,
            59372: 37525,
            59373: 37439,
            59374: 37451,
            59375: 37456,
            59376: 37532,
            59377: 37526,
            59378: 37523,
            59379: 37531,
            59380: 37466,
            59381: 37583,
            59382: 37561,
            59383: 37559,
            59384: 37609,
            59385: 37647,
            59386: 37626,
            59387: 37700,
            59388: 37678,
            59456: 37657,
            59457: 37666,
            59458: 37658,
            59459: 37667,
            59460: 37690,
            59461: 37685,
            59462: 37691,
            59463: 37724,
            59464: 37728,
            59465: 37756,
            59466: 37742,
            59467: 37718,
            59468: 37808,
            59469: 37804,
            59470: 37805,
            59471: 37780,
            59472: 37817,
            59473: 37846,
            59474: 37847,
            59475: 37864,
            59476: 37861,
            59477: 37848,
            59478: 37827,
            59479: 37853,
            59480: 37840,
            59481: 37832,
            59482: 37860,
            59483: 37914,
            59484: 37908,
            59485: 37907,
            59486: 37891,
            59487: 37895,
            59488: 37904,
            59489: 37942,
            59490: 37931,
            59491: 37941,
            59492: 37921,
            59493: 37946,
            59494: 37953,
            59495: 37970,
            59496: 37956,
            59497: 37979,
            59498: 37984,
            59499: 37986,
            59500: 37982,
            59501: 37994,
            59502: 37417,
            59503: 38e3,
            59504: 38005,
            59505: 38007,
            59506: 38013,
            59507: 37978,
            59508: 38012,
            59509: 38014,
            59510: 38017,
            59511: 38015,
            59512: 38274,
            59513: 38279,
            59514: 38282,
            59515: 38292,
            59516: 38294,
            59517: 38296,
            59518: 38297,
            59520: 38304,
            59521: 38312,
            59522: 38311,
            59523: 38317,
            59524: 38332,
            59525: 38331,
            59526: 38329,
            59527: 38334,
            59528: 38346,
            59529: 28662,
            59530: 38339,
            59531: 38349,
            59532: 38348,
            59533: 38357,
            59534: 38356,
            59535: 38358,
            59536: 38364,
            59537: 38369,
            59538: 38373,
            59539: 38370,
            59540: 38433,
            59541: 38440,
            59542: 38446,
            59543: 38447,
            59544: 38466,
            59545: 38476,
            59546: 38479,
            59547: 38475,
            59548: 38519,
            59549: 38492,
            59550: 38494,
            59551: 38493,
            59552: 38495,
            59553: 38502,
            59554: 38514,
            59555: 38508,
            59556: 38541,
            59557: 38552,
            59558: 38549,
            59559: 38551,
            59560: 38570,
            59561: 38567,
            59562: 38577,
            59563: 38578,
            59564: 38576,
            59565: 38580,
            59566: 38582,
            59567: 38584,
            59568: 38585,
            59569: 38606,
            59570: 38603,
            59571: 38601,
            59572: 38605,
            59573: 35149,
            59574: 38620,
            59575: 38669,
            59576: 38613,
            59577: 38649,
            59578: 38660,
            59579: 38662,
            59580: 38664,
            59581: 38675,
            59582: 38670,
            59583: 38673,
            59584: 38671,
            59585: 38678,
            59586: 38681,
            59587: 38692,
            59588: 38698,
            59589: 38704,
            59590: 38713,
            59591: 38717,
            59592: 38718,
            59593: 38724,
            59594: 38726,
            59595: 38728,
            59596: 38722,
            59597: 38729,
            59598: 38748,
            59599: 38752,
            59600: 38756,
            59601: 38758,
            59602: 38760,
            59603: 21202,
            59604: 38763,
            59605: 38769,
            59606: 38777,
            59607: 38789,
            59608: 38780,
            59609: 38785,
            59610: 38778,
            59611: 38790,
            59612: 38795,
            59613: 38799,
            59614: 38800,
            59615: 38812,
            59616: 38824,
            59617: 38822,
            59618: 38819,
            59619: 38835,
            59620: 38836,
            59621: 38851,
            59622: 38854,
            59623: 38856,
            59624: 38859,
            59625: 38876,
            59626: 38893,
            59627: 40783,
            59628: 38898,
            59629: 31455,
            59630: 38902,
            59631: 38901,
            59632: 38927,
            59633: 38924,
            59634: 38968,
            59635: 38948,
            59636: 38945,
            59637: 38967,
            59638: 38973,
            59639: 38982,
            59640: 38991,
            59641: 38987,
            59642: 39019,
            59643: 39023,
            59644: 39024,
            59712: 39025,
            59713: 39028,
            59714: 39027,
            59715: 39082,
            59716: 39087,
            59717: 39089,
            59718: 39094,
            59719: 39108,
            59720: 39107,
            59721: 39110,
            59722: 39145,
            59723: 39147,
            59724: 39171,
            59725: 39177,
            59726: 39186,
            59727: 39188,
            59728: 39192,
            59729: 39201,
            59730: 39197,
            59731: 39198,
            59732: 39204,
            59733: 39200,
            59734: 39212,
            59735: 39214,
            59736: 39229,
            59737: 39230,
            59738: 39234,
            59739: 39241,
            59740: 39237,
            59741: 39248,
            59742: 39243,
            59743: 39249,
            59744: 39250,
            59745: 39244,
            59746: 39253,
            59747: 39319,
            59748: 39320,
            59749: 39333,
            59750: 39341,
            59751: 39342,
            59752: 39356,
            59753: 39391,
            59754: 39387,
            59755: 39389,
            59756: 39384,
            59757: 39377,
            59758: 39405,
            59759: 39406,
            59760: 39409,
            59761: 39410,
            59762: 39419,
            59763: 39416,
            59764: 39425,
            59765: 39439,
            59766: 39429,
            59767: 39394,
            59768: 39449,
            59769: 39467,
            59770: 39479,
            59771: 39493,
            59772: 39490,
            59773: 39488,
            59774: 39491,
            59776: 39486,
            59777: 39509,
            59778: 39501,
            59779: 39515,
            59780: 39511,
            59781: 39519,
            59782: 39522,
            59783: 39525,
            59784: 39524,
            59785: 39529,
            59786: 39531,
            59787: 39530,
            59788: 39597,
            59789: 39600,
            59790: 39612,
            59791: 39616,
            59792: 39631,
            59793: 39633,
            59794: 39635,
            59795: 39636,
            59796: 39646,
            59797: 39647,
            59798: 39650,
            59799: 39651,
            59800: 39654,
            59801: 39663,
            59802: 39659,
            59803: 39662,
            59804: 39668,
            59805: 39665,
            59806: 39671,
            59807: 39675,
            59808: 39686,
            59809: 39704,
            59810: 39706,
            59811: 39711,
            59812: 39714,
            59813: 39715,
            59814: 39717,
            59815: 39719,
            59816: 39720,
            59817: 39721,
            59818: 39722,
            59819: 39726,
            59820: 39727,
            59821: 39730,
            59822: 39748,
            59823: 39747,
            59824: 39759,
            59825: 39757,
            59826: 39758,
            59827: 39761,
            59828: 39768,
            59829: 39796,
            59830: 39827,
            59831: 39811,
            59832: 39825,
            59833: 39830,
            59834: 39831,
            59835: 39839,
            59836: 39840,
            59837: 39848,
            59838: 39860,
            59839: 39872,
            59840: 39882,
            59841: 39865,
            59842: 39878,
            59843: 39887,
            59844: 39889,
            59845: 39890,
            59846: 39907,
            59847: 39906,
            59848: 39908,
            59849: 39892,
            59850: 39905,
            59851: 39994,
            59852: 39922,
            59853: 39921,
            59854: 39920,
            59855: 39957,
            59856: 39956,
            59857: 39945,
            59858: 39955,
            59859: 39948,
            59860: 39942,
            59861: 39944,
            59862: 39954,
            59863: 39946,
            59864: 39940,
            59865: 39982,
            59866: 39963,
            59867: 39973,
            59868: 39972,
            59869: 39969,
            59870: 39984,
            59871: 40007,
            59872: 39986,
            59873: 40006,
            59874: 39998,
            59875: 40026,
            59876: 40032,
            59877: 40039,
            59878: 40054,
            59879: 40056,
            59880: 40167,
            59881: 40172,
            59882: 40176,
            59883: 40201,
            59884: 40200,
            59885: 40171,
            59886: 40195,
            59887: 40198,
            59888: 40234,
            59889: 40230,
            59890: 40367,
            59891: 40227,
            59892: 40223,
            59893: 40260,
            59894: 40213,
            59895: 40210,
            59896: 40257,
            59897: 40255,
            59898: 40254,
            59899: 40262,
            59900: 40264,
            59968: 40285,
            59969: 40286,
            59970: 40292,
            59971: 40273,
            59972: 40272,
            59973: 40281,
            59974: 40306,
            59975: 40329,
            59976: 40327,
            59977: 40363,
            59978: 40303,
            59979: 40314,
            59980: 40346,
            59981: 40356,
            59982: 40361,
            59983: 40370,
            59984: 40388,
            59985: 40385,
            59986: 40379,
            59987: 40376,
            59988: 40378,
            59989: 40390,
            59990: 40399,
            59991: 40386,
            59992: 40409,
            59993: 40403,
            59994: 40440,
            59995: 40422,
            59996: 40429,
            59997: 40431,
            59998: 40445,
            59999: 40474,
            6e4: 40475,
            60001: 40478,
            60002: 40565,
            60003: 40569,
            60004: 40573,
            60005: 40577,
            60006: 40584,
            60007: 40587,
            60008: 40588,
            60009: 40594,
            60010: 40597,
            60011: 40593,
            60012: 40605,
            60013: 40613,
            60014: 40617,
            60015: 40632,
            60016: 40618,
            60017: 40621,
            60018: 38753,
            60019: 40652,
            60020: 40654,
            60021: 40655,
            60022: 40656,
            60023: 40660,
            60024: 40668,
            60025: 40670,
            60026: 40669,
            60027: 40672,
            60028: 40677,
            60029: 40680,
            60030: 40687,
            60032: 40692,
            60033: 40694,
            60034: 40695,
            60035: 40697,
            60036: 40699,
            60037: 40700,
            60038: 40701,
            60039: 40711,
            60040: 40712,
            60041: 30391,
            60042: 40725,
            60043: 40737,
            60044: 40748,
            60045: 40766,
            60046: 40778,
            60047: 40786,
            60048: 40788,
            60049: 40803,
            60050: 40799,
            60051: 40800,
            60052: 40801,
            60053: 40806,
            60054: 40807,
            60055: 40812,
            60056: 40810,
            60057: 40823,
            60058: 40818,
            60059: 40822,
            60060: 40853,
            60061: 40860,
            60062: 40864,
            60063: 22575,
            60064: 27079,
            60065: 36953,
            60066: 29796,
            60067: 20956,
            60068: 29081
          };
        },
        /* 9 */
        /***/
        function(r, n, a) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var o = a(1), s = a(2);
          function i(u, p, c, d) {
            var v;
            p.degree() < c.degree() && (v = [c, p], p = v[0], c = v[1]);
            for (var h = p, y = c, A = u.zero, C = u.one; y.degree() >= d / 2; ) {
              var g = h, w = A;
              if (h = y, A = C, h.isZero())
                return null;
              y = g;
              for (var B = u.zero, k = h.getCoefficient(h.degree()), E = u.inverse(k); y.degree() >= h.degree() && !y.isZero(); ) {
                var S = y.degree() - h.degree(), I = u.multiply(y.getCoefficient(y.degree()), E);
                B = B.addOrSubtract(u.buildMonomial(S, I)), y = y.addOrSubtract(h.multiplyByMonomial(S, I));
              }
              if (C = B.multiplyPoly(A).addOrSubtract(w), y.degree() >= h.degree())
                return null;
            }
            var T = C.getCoefficient(0);
            if (T === 0)
              return null;
            var x = u.inverse(T);
            return [C.multiply(x), y.multiply(x)];
          }
          function l(u, p) {
            var c = p.degree();
            if (c === 1)
              return [p.getCoefficient(1)];
            for (var d = new Array(c), v = 0, h = 1; h < u.size && v < c; h++)
              p.evaluateAt(h) === 0 && (d[v] = u.inverse(h), v++);
            return v !== c ? null : d;
          }
          function m(u, p, c) {
            for (var d = c.length, v = new Array(d), h = 0; h < d; h++) {
              for (var y = u.inverse(c[h]), A = 1, C = 0; C < d; C++)
                h !== C && (A = u.multiply(A, o.addOrSubtractGF(1, u.multiply(c[C], y))));
              v[h] = u.multiply(p.evaluateAt(y), u.inverse(A)), u.generatorBase !== 0 && (v[h] = u.multiply(v[h], y));
            }
            return v;
          }
          function f(u, p) {
            var c = new Uint8ClampedArray(u.length);
            c.set(u);
            for (var d = new o.default(285, 256, 0), v = new s.default(d, c), h = new Uint8ClampedArray(p), y = !1, A = 0; A < p; A++) {
              var C = v.evaluateAt(d.exp(A + d.generatorBase));
              h[h.length - 1 - A] = C, C !== 0 && (y = !0);
            }
            if (!y)
              return c;
            var g = new s.default(d, h), w = i(d, d.buildMonomial(p, 1), g, p);
            if (w === null)
              return null;
            var B = l(d, w[0]);
            if (B == null)
              return null;
            for (var k = m(d, w[1], B), E = 0; E < B.length; E++) {
              var S = c.length - 1 - d.log(B[E]);
              if (S < 0)
                return null;
              c[S] = o.addOrSubtractGF(c[S], k[E]);
            }
            return c;
          }
          n.decode = f;
        },
        /* 10 */
        /***/
        function(r, n, a) {
          Object.defineProperty(n, "__esModule", { value: !0 }), n.VERSIONS = [
            {
              infoBits: null,
              versionNumber: 1,
              alignmentPatternCenters: [],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 7,
                  ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 19 }]
                },
                {
                  ecCodewordsPerBlock: 10,
                  ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 16 }]
                },
                {
                  ecCodewordsPerBlock: 13,
                  ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 13 }]
                },
                {
                  ecCodewordsPerBlock: 17,
                  ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 9 }]
                }
              ]
            },
            {
              infoBits: null,
              versionNumber: 2,
              alignmentPatternCenters: [6, 18],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 10,
                  ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 34 }]
                },
                {
                  ecCodewordsPerBlock: 16,
                  ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 28 }]
                },
                {
                  ecCodewordsPerBlock: 22,
                  ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 22 }]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 16 }]
                }
              ]
            },
            {
              infoBits: null,
              versionNumber: 3,
              alignmentPatternCenters: [6, 22],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 15,
                  ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 55 }]
                },
                {
                  ecCodewordsPerBlock: 26,
                  ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 44 }]
                },
                {
                  ecCodewordsPerBlock: 18,
                  ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 17 }]
                },
                {
                  ecCodewordsPerBlock: 22,
                  ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 13 }]
                }
              ]
            },
            {
              infoBits: null,
              versionNumber: 4,
              alignmentPatternCenters: [6, 26],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 20,
                  ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 80 }]
                },
                {
                  ecCodewordsPerBlock: 18,
                  ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 32 }]
                },
                {
                  ecCodewordsPerBlock: 26,
                  ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 24 }]
                },
                {
                  ecCodewordsPerBlock: 16,
                  ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 9 }]
                }
              ]
            },
            {
              infoBits: null,
              versionNumber: 5,
              alignmentPatternCenters: [6, 30],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 26,
                  ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 108 }]
                },
                {
                  ecCodewordsPerBlock: 24,
                  ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 43 }]
                },
                {
                  ecCodewordsPerBlock: 18,
                  ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 15 },
                    { numBlocks: 2, dataCodewordsPerBlock: 16 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 22,
                  ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 11 },
                    { numBlocks: 2, dataCodewordsPerBlock: 12 }
                  ]
                }
              ]
            },
            {
              infoBits: null,
              versionNumber: 6,
              alignmentPatternCenters: [6, 34],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 18,
                  ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 68 }]
                },
                {
                  ecCodewordsPerBlock: 16,
                  ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 27 }]
                },
                {
                  ecCodewordsPerBlock: 24,
                  ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 19 }]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 15 }]
                }
              ]
            },
            {
              infoBits: 31892,
              versionNumber: 7,
              alignmentPatternCenters: [6, 22, 38],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 20,
                  ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 78 }]
                },
                {
                  ecCodewordsPerBlock: 18,
                  ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 31 }]
                },
                {
                  ecCodewordsPerBlock: 18,
                  ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 14 },
                    { numBlocks: 4, dataCodewordsPerBlock: 15 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 26,
                  ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 13 },
                    { numBlocks: 1, dataCodewordsPerBlock: 14 }
                  ]
                }
              ]
            },
            {
              infoBits: 34236,
              versionNumber: 8,
              alignmentPatternCenters: [6, 24, 42],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 24,
                  ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 97 }]
                },
                {
                  ecCodewordsPerBlock: 22,
                  ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 38 },
                    { numBlocks: 2, dataCodewordsPerBlock: 39 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 22,
                  ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 18 },
                    { numBlocks: 2, dataCodewordsPerBlock: 19 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 26,
                  ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 14 },
                    { numBlocks: 2, dataCodewordsPerBlock: 15 }
                  ]
                }
              ]
            },
            {
              infoBits: 39577,
              versionNumber: 9,
              alignmentPatternCenters: [6, 26, 46],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 116 }]
                },
                {
                  ecCodewordsPerBlock: 22,
                  ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 36 },
                    { numBlocks: 2, dataCodewordsPerBlock: 37 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 20,
                  ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 16 },
                    { numBlocks: 4, dataCodewordsPerBlock: 17 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 24,
                  ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 12 },
                    { numBlocks: 4, dataCodewordsPerBlock: 13 }
                  ]
                }
              ]
            },
            {
              infoBits: 42195,
              versionNumber: 10,
              alignmentPatternCenters: [6, 28, 50],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 18,
                  ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 68 },
                    { numBlocks: 2, dataCodewordsPerBlock: 69 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 26,
                  ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 43 },
                    { numBlocks: 1, dataCodewordsPerBlock: 44 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 24,
                  ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 19 },
                    { numBlocks: 2, dataCodewordsPerBlock: 20 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 15 },
                    { numBlocks: 2, dataCodewordsPerBlock: 16 }
                  ]
                }
              ]
            },
            {
              infoBits: 48118,
              versionNumber: 11,
              alignmentPatternCenters: [6, 30, 54],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 20,
                  ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 81 }]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 1, dataCodewordsPerBlock: 50 },
                    { numBlocks: 4, dataCodewordsPerBlock: 51 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 22 },
                    { numBlocks: 4, dataCodewordsPerBlock: 23 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 24,
                  ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 12 },
                    { numBlocks: 8, dataCodewordsPerBlock: 13 }
                  ]
                }
              ]
            },
            {
              infoBits: 51042,
              versionNumber: 12,
              alignmentPatternCenters: [6, 32, 58],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 24,
                  ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 92 },
                    { numBlocks: 2, dataCodewordsPerBlock: 93 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 22,
                  ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 36 },
                    { numBlocks: 2, dataCodewordsPerBlock: 37 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 26,
                  ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 20 },
                    { numBlocks: 6, dataCodewordsPerBlock: 21 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 7, dataCodewordsPerBlock: 14 },
                    { numBlocks: 4, dataCodewordsPerBlock: 15 }
                  ]
                }
              ]
            },
            {
              infoBits: 55367,
              versionNumber: 13,
              alignmentPatternCenters: [6, 34, 62],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 26,
                  ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 107 }]
                },
                {
                  ecCodewordsPerBlock: 22,
                  ecBlocks: [
                    { numBlocks: 8, dataCodewordsPerBlock: 37 },
                    { numBlocks: 1, dataCodewordsPerBlock: 38 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 24,
                  ecBlocks: [
                    { numBlocks: 8, dataCodewordsPerBlock: 20 },
                    { numBlocks: 4, dataCodewordsPerBlock: 21 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 22,
                  ecBlocks: [
                    { numBlocks: 12, dataCodewordsPerBlock: 11 },
                    { numBlocks: 4, dataCodewordsPerBlock: 12 }
                  ]
                }
              ]
            },
            {
              infoBits: 58893,
              versionNumber: 14,
              alignmentPatternCenters: [6, 26, 46, 66],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 115 },
                    { numBlocks: 1, dataCodewordsPerBlock: 116 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 24,
                  ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 40 },
                    { numBlocks: 5, dataCodewordsPerBlock: 41 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 20,
                  ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 16 },
                    { numBlocks: 5, dataCodewordsPerBlock: 17 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 24,
                  ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 12 },
                    { numBlocks: 5, dataCodewordsPerBlock: 13 }
                  ]
                }
              ]
            },
            {
              infoBits: 63784,
              versionNumber: 15,
              alignmentPatternCenters: [6, 26, 48, 70],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 22,
                  ecBlocks: [
                    { numBlocks: 5, dataCodewordsPerBlock: 87 },
                    { numBlocks: 1, dataCodewordsPerBlock: 88 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 24,
                  ecBlocks: [
                    { numBlocks: 5, dataCodewordsPerBlock: 41 },
                    { numBlocks: 5, dataCodewordsPerBlock: 42 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 5, dataCodewordsPerBlock: 24 },
                    { numBlocks: 7, dataCodewordsPerBlock: 25 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 24,
                  ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 12 },
                    { numBlocks: 7, dataCodewordsPerBlock: 13 }
                  ]
                }
              ]
            },
            {
              infoBits: 68472,
              versionNumber: 16,
              alignmentPatternCenters: [6, 26, 50, 74],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 24,
                  ecBlocks: [
                    { numBlocks: 5, dataCodewordsPerBlock: 98 },
                    { numBlocks: 1, dataCodewordsPerBlock: 99 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 7, dataCodewordsPerBlock: 45 },
                    { numBlocks: 3, dataCodewordsPerBlock: 46 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 24,
                  ecBlocks: [
                    { numBlocks: 15, dataCodewordsPerBlock: 19 },
                    { numBlocks: 2, dataCodewordsPerBlock: 20 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 15 },
                    { numBlocks: 13, dataCodewordsPerBlock: 16 }
                  ]
                }
              ]
            },
            {
              infoBits: 70749,
              versionNumber: 17,
              alignmentPatternCenters: [6, 30, 54, 78],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 1, dataCodewordsPerBlock: 107 },
                    { numBlocks: 5, dataCodewordsPerBlock: 108 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 10, dataCodewordsPerBlock: 46 },
                    { numBlocks: 1, dataCodewordsPerBlock: 47 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 1, dataCodewordsPerBlock: 22 },
                    { numBlocks: 15, dataCodewordsPerBlock: 23 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 14 },
                    { numBlocks: 17, dataCodewordsPerBlock: 15 }
                  ]
                }
              ]
            },
            {
              infoBits: 76311,
              versionNumber: 18,
              alignmentPatternCenters: [6, 30, 56, 82],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 5, dataCodewordsPerBlock: 120 },
                    { numBlocks: 1, dataCodewordsPerBlock: 121 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 26,
                  ecBlocks: [
                    { numBlocks: 9, dataCodewordsPerBlock: 43 },
                    { numBlocks: 4, dataCodewordsPerBlock: 44 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 17, dataCodewordsPerBlock: 22 },
                    { numBlocks: 1, dataCodewordsPerBlock: 23 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 14 },
                    { numBlocks: 19, dataCodewordsPerBlock: 15 }
                  ]
                }
              ]
            },
            {
              infoBits: 79154,
              versionNumber: 19,
              alignmentPatternCenters: [6, 30, 58, 86],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 113 },
                    { numBlocks: 4, dataCodewordsPerBlock: 114 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 26,
                  ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 44 },
                    { numBlocks: 11, dataCodewordsPerBlock: 45 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 26,
                  ecBlocks: [
                    { numBlocks: 17, dataCodewordsPerBlock: 21 },
                    { numBlocks: 4, dataCodewordsPerBlock: 22 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 26,
                  ecBlocks: [
                    { numBlocks: 9, dataCodewordsPerBlock: 13 },
                    { numBlocks: 16, dataCodewordsPerBlock: 14 }
                  ]
                }
              ]
            },
            {
              infoBits: 84390,
              versionNumber: 20,
              alignmentPatternCenters: [6, 34, 62, 90],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 107 },
                    { numBlocks: 5, dataCodewordsPerBlock: 108 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 26,
                  ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 41 },
                    { numBlocks: 13, dataCodewordsPerBlock: 42 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 15, dataCodewordsPerBlock: 24 },
                    { numBlocks: 5, dataCodewordsPerBlock: 25 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 15, dataCodewordsPerBlock: 15 },
                    { numBlocks: 10, dataCodewordsPerBlock: 16 }
                  ]
                }
              ]
            },
            {
              infoBits: 87683,
              versionNumber: 21,
              alignmentPatternCenters: [6, 28, 50, 72, 94],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 116 },
                    { numBlocks: 4, dataCodewordsPerBlock: 117 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 26,
                  ecBlocks: [{ numBlocks: 17, dataCodewordsPerBlock: 42 }]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 17, dataCodewordsPerBlock: 22 },
                    { numBlocks: 6, dataCodewordsPerBlock: 23 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 19, dataCodewordsPerBlock: 16 },
                    { numBlocks: 6, dataCodewordsPerBlock: 17 }
                  ]
                }
              ]
            },
            {
              infoBits: 92361,
              versionNumber: 22,
              alignmentPatternCenters: [6, 26, 50, 74, 98],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 111 },
                    { numBlocks: 7, dataCodewordsPerBlock: 112 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [{ numBlocks: 17, dataCodewordsPerBlock: 46 }]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 7, dataCodewordsPerBlock: 24 },
                    { numBlocks: 16, dataCodewordsPerBlock: 25 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 24,
                  ecBlocks: [{ numBlocks: 34, dataCodewordsPerBlock: 13 }]
                }
              ]
            },
            {
              infoBits: 96236,
              versionNumber: 23,
              alignmentPatternCenters: [6, 30, 54, 74, 102],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 121 },
                    { numBlocks: 5, dataCodewordsPerBlock: 122 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 47 },
                    { numBlocks: 14, dataCodewordsPerBlock: 48 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 24 },
                    { numBlocks: 14, dataCodewordsPerBlock: 25 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 16, dataCodewordsPerBlock: 15 },
                    { numBlocks: 14, dataCodewordsPerBlock: 16 }
                  ]
                }
              ]
            },
            {
              infoBits: 102084,
              versionNumber: 24,
              alignmentPatternCenters: [6, 28, 54, 80, 106],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 117 },
                    { numBlocks: 4, dataCodewordsPerBlock: 118 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 45 },
                    { numBlocks: 14, dataCodewordsPerBlock: 46 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 24 },
                    { numBlocks: 16, dataCodewordsPerBlock: 25 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 30, dataCodewordsPerBlock: 16 },
                    { numBlocks: 2, dataCodewordsPerBlock: 17 }
                  ]
                }
              ]
            },
            {
              infoBits: 102881,
              versionNumber: 25,
              alignmentPatternCenters: [6, 32, 58, 84, 110],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 26,
                  ecBlocks: [
                    { numBlocks: 8, dataCodewordsPerBlock: 106 },
                    { numBlocks: 4, dataCodewordsPerBlock: 107 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 8, dataCodewordsPerBlock: 47 },
                    { numBlocks: 13, dataCodewordsPerBlock: 48 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 7, dataCodewordsPerBlock: 24 },
                    { numBlocks: 22, dataCodewordsPerBlock: 25 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 22, dataCodewordsPerBlock: 15 },
                    { numBlocks: 13, dataCodewordsPerBlock: 16 }
                  ]
                }
              ]
            },
            {
              infoBits: 110507,
              versionNumber: 26,
              alignmentPatternCenters: [6, 30, 58, 86, 114],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 10, dataCodewordsPerBlock: 114 },
                    { numBlocks: 2, dataCodewordsPerBlock: 115 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 19, dataCodewordsPerBlock: 46 },
                    { numBlocks: 4, dataCodewordsPerBlock: 47 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 28, dataCodewordsPerBlock: 22 },
                    { numBlocks: 6, dataCodewordsPerBlock: 23 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 33, dataCodewordsPerBlock: 16 },
                    { numBlocks: 4, dataCodewordsPerBlock: 17 }
                  ]
                }
              ]
            },
            {
              infoBits: 110734,
              versionNumber: 27,
              alignmentPatternCenters: [6, 34, 62, 90, 118],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 8, dataCodewordsPerBlock: 122 },
                    { numBlocks: 4, dataCodewordsPerBlock: 123 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 22, dataCodewordsPerBlock: 45 },
                    { numBlocks: 3, dataCodewordsPerBlock: 46 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 8, dataCodewordsPerBlock: 23 },
                    { numBlocks: 26, dataCodewordsPerBlock: 24 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 12, dataCodewordsPerBlock: 15 },
                    { numBlocks: 28, dataCodewordsPerBlock: 16 }
                  ]
                }
              ]
            },
            {
              infoBits: 117786,
              versionNumber: 28,
              alignmentPatternCenters: [6, 26, 50, 74, 98, 122],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 117 },
                    { numBlocks: 10, dataCodewordsPerBlock: 118 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 45 },
                    { numBlocks: 23, dataCodewordsPerBlock: 46 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 24 },
                    { numBlocks: 31, dataCodewordsPerBlock: 25 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 15 },
                    { numBlocks: 31, dataCodewordsPerBlock: 16 }
                  ]
                }
              ]
            },
            {
              infoBits: 119615,
              versionNumber: 29,
              alignmentPatternCenters: [6, 30, 54, 78, 102, 126],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 7, dataCodewordsPerBlock: 116 },
                    { numBlocks: 7, dataCodewordsPerBlock: 117 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 21, dataCodewordsPerBlock: 45 },
                    { numBlocks: 7, dataCodewordsPerBlock: 46 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 1, dataCodewordsPerBlock: 23 },
                    { numBlocks: 37, dataCodewordsPerBlock: 24 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 19, dataCodewordsPerBlock: 15 },
                    { numBlocks: 26, dataCodewordsPerBlock: 16 }
                  ]
                }
              ]
            },
            {
              infoBits: 126325,
              versionNumber: 30,
              alignmentPatternCenters: [6, 26, 52, 78, 104, 130],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 5, dataCodewordsPerBlock: 115 },
                    { numBlocks: 10, dataCodewordsPerBlock: 116 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 19, dataCodewordsPerBlock: 47 },
                    { numBlocks: 10, dataCodewordsPerBlock: 48 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 15, dataCodewordsPerBlock: 24 },
                    { numBlocks: 25, dataCodewordsPerBlock: 25 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 23, dataCodewordsPerBlock: 15 },
                    { numBlocks: 25, dataCodewordsPerBlock: 16 }
                  ]
                }
              ]
            },
            {
              infoBits: 127568,
              versionNumber: 31,
              alignmentPatternCenters: [6, 30, 56, 82, 108, 134],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 13, dataCodewordsPerBlock: 115 },
                    { numBlocks: 3, dataCodewordsPerBlock: 116 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 46 },
                    { numBlocks: 29, dataCodewordsPerBlock: 47 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 42, dataCodewordsPerBlock: 24 },
                    { numBlocks: 1, dataCodewordsPerBlock: 25 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 23, dataCodewordsPerBlock: 15 },
                    { numBlocks: 28, dataCodewordsPerBlock: 16 }
                  ]
                }
              ]
            },
            {
              infoBits: 133589,
              versionNumber: 32,
              alignmentPatternCenters: [6, 34, 60, 86, 112, 138],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [{ numBlocks: 17, dataCodewordsPerBlock: 115 }]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 10, dataCodewordsPerBlock: 46 },
                    { numBlocks: 23, dataCodewordsPerBlock: 47 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 10, dataCodewordsPerBlock: 24 },
                    { numBlocks: 35, dataCodewordsPerBlock: 25 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 19, dataCodewordsPerBlock: 15 },
                    { numBlocks: 35, dataCodewordsPerBlock: 16 }
                  ]
                }
              ]
            },
            {
              infoBits: 136944,
              versionNumber: 33,
              alignmentPatternCenters: [6, 30, 58, 86, 114, 142],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 17, dataCodewordsPerBlock: 115 },
                    { numBlocks: 1, dataCodewordsPerBlock: 116 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 14, dataCodewordsPerBlock: 46 },
                    { numBlocks: 21, dataCodewordsPerBlock: 47 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 29, dataCodewordsPerBlock: 24 },
                    { numBlocks: 19, dataCodewordsPerBlock: 25 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 15 },
                    { numBlocks: 46, dataCodewordsPerBlock: 16 }
                  ]
                }
              ]
            },
            {
              infoBits: 141498,
              versionNumber: 34,
              alignmentPatternCenters: [6, 34, 62, 90, 118, 146],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 13, dataCodewordsPerBlock: 115 },
                    { numBlocks: 6, dataCodewordsPerBlock: 116 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 14, dataCodewordsPerBlock: 46 },
                    { numBlocks: 23, dataCodewordsPerBlock: 47 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 44, dataCodewordsPerBlock: 24 },
                    { numBlocks: 7, dataCodewordsPerBlock: 25 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 59, dataCodewordsPerBlock: 16 },
                    { numBlocks: 1, dataCodewordsPerBlock: 17 }
                  ]
                }
              ]
            },
            {
              infoBits: 145311,
              versionNumber: 35,
              alignmentPatternCenters: [6, 30, 54, 78, 102, 126, 150],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 12, dataCodewordsPerBlock: 121 },
                    { numBlocks: 7, dataCodewordsPerBlock: 122 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 12, dataCodewordsPerBlock: 47 },
                    { numBlocks: 26, dataCodewordsPerBlock: 48 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 39, dataCodewordsPerBlock: 24 },
                    { numBlocks: 14, dataCodewordsPerBlock: 25 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 22, dataCodewordsPerBlock: 15 },
                    { numBlocks: 41, dataCodewordsPerBlock: 16 }
                  ]
                }
              ]
            },
            {
              infoBits: 150283,
              versionNumber: 36,
              alignmentPatternCenters: [6, 24, 50, 76, 102, 128, 154],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 121 },
                    { numBlocks: 14, dataCodewordsPerBlock: 122 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 47 },
                    { numBlocks: 34, dataCodewordsPerBlock: 48 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 46, dataCodewordsPerBlock: 24 },
                    { numBlocks: 10, dataCodewordsPerBlock: 25 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 15 },
                    { numBlocks: 64, dataCodewordsPerBlock: 16 }
                  ]
                }
              ]
            },
            {
              infoBits: 152622,
              versionNumber: 37,
              alignmentPatternCenters: [6, 28, 54, 80, 106, 132, 158],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 17, dataCodewordsPerBlock: 122 },
                    { numBlocks: 4, dataCodewordsPerBlock: 123 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 29, dataCodewordsPerBlock: 46 },
                    { numBlocks: 14, dataCodewordsPerBlock: 47 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 49, dataCodewordsPerBlock: 24 },
                    { numBlocks: 10, dataCodewordsPerBlock: 25 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 24, dataCodewordsPerBlock: 15 },
                    { numBlocks: 46, dataCodewordsPerBlock: 16 }
                  ]
                }
              ]
            },
            {
              infoBits: 158308,
              versionNumber: 38,
              alignmentPatternCenters: [6, 32, 58, 84, 110, 136, 162],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 122 },
                    { numBlocks: 18, dataCodewordsPerBlock: 123 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 13, dataCodewordsPerBlock: 46 },
                    { numBlocks: 32, dataCodewordsPerBlock: 47 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 48, dataCodewordsPerBlock: 24 },
                    { numBlocks: 14, dataCodewordsPerBlock: 25 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 42, dataCodewordsPerBlock: 15 },
                    { numBlocks: 32, dataCodewordsPerBlock: 16 }
                  ]
                }
              ]
            },
            {
              infoBits: 161089,
              versionNumber: 39,
              alignmentPatternCenters: [6, 26, 54, 82, 110, 138, 166],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 20, dataCodewordsPerBlock: 117 },
                    { numBlocks: 4, dataCodewordsPerBlock: 118 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 40, dataCodewordsPerBlock: 47 },
                    { numBlocks: 7, dataCodewordsPerBlock: 48 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 43, dataCodewordsPerBlock: 24 },
                    { numBlocks: 22, dataCodewordsPerBlock: 25 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 10, dataCodewordsPerBlock: 15 },
                    { numBlocks: 67, dataCodewordsPerBlock: 16 }
                  ]
                }
              ]
            },
            {
              infoBits: 167017,
              versionNumber: 40,
              alignmentPatternCenters: [6, 30, 58, 86, 114, 142, 170],
              errorCorrectionLevels: [
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 19, dataCodewordsPerBlock: 118 },
                    { numBlocks: 6, dataCodewordsPerBlock: 119 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 28,
                  ecBlocks: [
                    { numBlocks: 18, dataCodewordsPerBlock: 47 },
                    { numBlocks: 31, dataCodewordsPerBlock: 48 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 34, dataCodewordsPerBlock: 24 },
                    { numBlocks: 34, dataCodewordsPerBlock: 25 }
                  ]
                },
                {
                  ecCodewordsPerBlock: 30,
                  ecBlocks: [
                    { numBlocks: 20, dataCodewordsPerBlock: 15 },
                    { numBlocks: 61, dataCodewordsPerBlock: 16 }
                  ]
                }
              ]
            }
          ];
        },
        /* 11 */
        /***/
        function(r, n, a) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var o = a(0);
          function s(f, u, p, c) {
            var d = f.x - u.x + p.x - c.x, v = f.y - u.y + p.y - c.y;
            if (d === 0 && v === 0)
              return {
                a11: u.x - f.x,
                a12: u.y - f.y,
                a13: 0,
                a21: p.x - u.x,
                a22: p.y - u.y,
                a23: 0,
                a31: f.x,
                a32: f.y,
                a33: 1
              };
            var h = u.x - p.x, y = c.x - p.x, A = u.y - p.y, C = c.y - p.y, g = h * C - y * A, w = (d * C - y * v) / g, B = (h * v - d * A) / g;
            return {
              a11: u.x - f.x + w * u.x,
              a12: u.y - f.y + w * u.y,
              a13: w,
              a21: c.x - f.x + B * c.x,
              a22: c.y - f.y + B * c.y,
              a23: B,
              a31: f.x,
              a32: f.y,
              a33: 1
            };
          }
          function i(f, u, p, c) {
            var d = s(f, u, p, c);
            return {
              a11: d.a22 * d.a33 - d.a23 * d.a32,
              a12: d.a13 * d.a32 - d.a12 * d.a33,
              a13: d.a12 * d.a23 - d.a13 * d.a22,
              a21: d.a23 * d.a31 - d.a21 * d.a33,
              a22: d.a11 * d.a33 - d.a13 * d.a31,
              a23: d.a13 * d.a21 - d.a11 * d.a23,
              a31: d.a21 * d.a32 - d.a22 * d.a31,
              a32: d.a12 * d.a31 - d.a11 * d.a32,
              a33: d.a11 * d.a22 - d.a12 * d.a21
            };
          }
          function l(f, u) {
            return {
              a11: f.a11 * u.a11 + f.a21 * u.a12 + f.a31 * u.a13,
              a12: f.a12 * u.a11 + f.a22 * u.a12 + f.a32 * u.a13,
              a13: f.a13 * u.a11 + f.a23 * u.a12 + f.a33 * u.a13,
              a21: f.a11 * u.a21 + f.a21 * u.a22 + f.a31 * u.a23,
              a22: f.a12 * u.a21 + f.a22 * u.a22 + f.a32 * u.a23,
              a23: f.a13 * u.a21 + f.a23 * u.a22 + f.a33 * u.a23,
              a31: f.a11 * u.a31 + f.a21 * u.a32 + f.a31 * u.a33,
              a32: f.a12 * u.a31 + f.a22 * u.a32 + f.a32 * u.a33,
              a33: f.a13 * u.a31 + f.a23 * u.a32 + f.a33 * u.a33
            };
          }
          function m(f, u) {
            for (var p = i({ x: 3.5, y: 3.5 }, { x: u.dimension - 3.5, y: 3.5 }, { x: u.dimension - 6.5, y: u.dimension - 6.5 }, { x: 3.5, y: u.dimension - 3.5 }), c = s(u.topLeft, u.topRight, u.alignmentPattern, u.bottomLeft), d = l(c, p), v = o.BitMatrix.createEmpty(u.dimension, u.dimension), h = function(B, k) {
              var E = d.a13 * B + d.a23 * k + d.a33;
              return {
                x: (d.a11 * B + d.a21 * k + d.a31) / E,
                y: (d.a12 * B + d.a22 * k + d.a32) / E
              };
            }, y = 0; y < u.dimension; y++)
              for (var A = 0; A < u.dimension; A++) {
                var C = A + 0.5, g = y + 0.5, w = h(C, g);
                v.set(A, y, f.get(Math.floor(w.x), Math.floor(w.y)));
              }
            return {
              matrix: v,
              mappingFunction: h
            };
          }
          n.extract = m;
        },
        /* 12 */
        /***/
        function(r, n, a) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var o = 4, s = 0.5, i = 1.5, l = function(C, g) {
            return Math.sqrt(Math.pow(g.x - C.x, 2) + Math.pow(g.y - C.y, 2));
          };
          function m(C) {
            return C.reduce(function(g, w) {
              return g + w;
            });
          }
          function f(C, g, w) {
            var B, k, E, S, I = l(C, g), T = l(g, w), x = l(C, w), R, j, L;
            return T >= I && T >= x ? (B = [g, C, w], R = B[0], j = B[1], L = B[2]) : x >= T && x >= I ? (k = [C, g, w], R = k[0], j = k[1], L = k[2]) : (E = [C, w, g], R = E[0], j = E[1], L = E[2]), (L.x - j.x) * (R.y - j.y) - (L.y - j.y) * (R.x - j.x) < 0 && (S = [L, R], R = S[0], L = S[1]), { bottomLeft: R, topLeft: j, topRight: L };
          }
          function u(C, g, w, B) {
            var k = (m(c(C, w, B, 5)) / 7 + // Divide by 7 since the ratio is 1:1:3:1:1
            m(c(C, g, B, 5)) / 7 + m(c(w, C, B, 5)) / 7 + m(c(g, C, B, 5)) / 7) / 4;
            if (k < 1)
              throw new Error("Invalid module size");
            var E = Math.round(l(C, g) / k), S = Math.round(l(C, w) / k), I = Math.floor((E + S) / 2) + 7;
            switch (I % 4) {
              case 0:
                I++;
                break;
              case 2:
                I--;
                break;
            }
            return { dimension: I, moduleSize: k };
          }
          function p(C, g, w, B) {
            var k = [{ x: Math.floor(C.x), y: Math.floor(C.y) }], E = Math.abs(g.y - C.y) > Math.abs(g.x - C.x), S, I, T, x;
            E ? (S = Math.floor(C.y), I = Math.floor(C.x), T = Math.floor(g.y), x = Math.floor(g.x)) : (S = Math.floor(C.x), I = Math.floor(C.y), T = Math.floor(g.x), x = Math.floor(g.y));
            for (var R = Math.abs(T - S), j = Math.abs(x - I), L = Math.floor(-R / 2), Q = S < T ? 1 : -1, D = I < x ? 1 : -1, te = !0, q = S, M = I; q !== T + Q; q += Q) {
              var N = E ? M : q, X = E ? q : M;
              if (w.get(N, X) !== te && (te = !te, k.push({ x: N, y: X }), k.length === B + 1))
                break;
              if (L += j, L > 0) {
                if (M === x)
                  break;
                M += D, L -= R;
              }
            }
            for (var K = [], _ = 0; _ < B; _++)
              k[_] && k[_ + 1] ? K.push(l(k[_], k[_ + 1])) : K.push(0);
            return K;
          }
          function c(C, g, w, B) {
            var k, E = g.y - C.y, S = g.x - C.x, I = p(C, g, w, Math.ceil(B / 2)), T = p(C, { x: C.x - S, y: C.y - E }, w, Math.ceil(B / 2)), x = I.shift() + T.shift() - 1;
            return (k = T.concat(x)).concat.apply(k, I);
          }
          function d(C, g) {
            var w = m(C) / m(g), B = 0;
            return g.forEach(function(k, E) {
              B += Math.pow(C[E] - k * w, 2);
            }), { averageSize: w, error: B };
          }
          function v(C, g, w) {
            try {
              var B = c(C, { x: -1, y: C.y }, w, g.length), k = c(C, { x: C.x, y: -1 }, w, g.length), E = {
                x: Math.max(0, C.x - C.y) - 1,
                y: Math.max(0, C.y - C.x) - 1
              }, S = c(C, E, w, g.length), I = {
                x: Math.min(w.width, C.x + C.y) + 1,
                y: Math.min(w.height, C.y + C.x) + 1
              }, T = c(C, I, w, g.length), x = d(B, g), R = d(k, g), j = d(S, g), L = d(T, g), Q = Math.sqrt(x.error * x.error + R.error * R.error + j.error * j.error + L.error * L.error), D = (x.averageSize + R.averageSize + j.averageSize + L.averageSize) / 4, te = (Math.pow(x.averageSize - D, 2) + Math.pow(R.averageSize - D, 2) + Math.pow(j.averageSize - D, 2) + Math.pow(L.averageSize - D, 2)) / D;
              return Q + te;
            } catch {
              return 1 / 0;
            }
          }
          function h(C, g) {
            for (var w = Math.round(g.x); C.get(w, Math.round(g.y)); )
              w--;
            for (var B = Math.round(g.x); C.get(B, Math.round(g.y)); )
              B++;
            for (var k = (w + B) / 2, E = Math.round(g.y); C.get(Math.round(k), E); )
              E--;
            for (var S = Math.round(g.y); C.get(Math.round(k), S); )
              S++;
            var I = (E + S) / 2;
            return { x: k, y: I };
          }
          function y(C) {
            for (var g = [], w = [], B = [], k = [], E = function(N) {
              for (var X = 0, K = !1, _ = [0, 0, 0, 0, 0], ne = function(G) {
                var re = C.get(G, N);
                if (re === K)
                  X++;
                else {
                  _ = [_[1], _[2], _[3], _[4], X], X = 1, K = re;
                  var ee = m(_) / 7, ae = Math.abs(_[0] - ee) < ee && Math.abs(_[1] - ee) < ee && Math.abs(_[2] - 3 * ee) < 3 * ee && Math.abs(_[3] - ee) < ee && Math.abs(_[4] - ee) < ee && !re, ve = m(_.slice(-3)) / 3, be = Math.abs(_[2] - ve) < ve && Math.abs(_[3] - ve) < ve && Math.abs(_[4] - ve) < ve && re;
                  if (ae) {
                    var Ce = G - _[3] - _[4], t3 = Ce - _[2], Ee = { startX: t3, endX: Ce, y: N }, Ie = w.filter(function(ke) {
                      return t3 >= ke.bottom.startX && t3 <= ke.bottom.endX || Ce >= ke.bottom.startX && t3 <= ke.bottom.endX || t3 <= ke.bottom.startX && Ce >= ke.bottom.endX && _[2] / (ke.bottom.endX - ke.bottom.startX) < i && _[2] / (ke.bottom.endX - ke.bottom.startX) > s;
                    });
                    Ie.length > 0 ? Ie[0].bottom = Ee : w.push({ top: Ee, bottom: Ee });
                  }
                  if (be) {
                    var n3 = G - _[4], Qe = n3 - _[3], Ee = { startX: Qe, y: N, endX: n3 }, Ie = k.filter(function(Oe) {
                      return Qe >= Oe.bottom.startX && Qe <= Oe.bottom.endX || n3 >= Oe.bottom.startX && Qe <= Oe.bottom.endX || Qe <= Oe.bottom.startX && n3 >= Oe.bottom.endX && _[2] / (Oe.bottom.endX - Oe.bottom.startX) < i && _[2] / (Oe.bottom.endX - Oe.bottom.startX) > s;
                    });
                    Ie.length > 0 ? Ie[0].bottom = Ee : k.push({ top: Ee, bottom: Ee });
                  }
                }
              }, V = -1; V <= C.width; V++)
                ne(V);
              g.push.apply(g, w.filter(function(G) {
                return G.bottom.y !== N && G.bottom.y - G.top.y >= 2;
              })), w = w.filter(function(G) {
                return G.bottom.y === N;
              }), B.push.apply(B, k.filter(function(G) {
                return G.bottom.y !== N;
              })), k = k.filter(function(G) {
                return G.bottom.y === N;
              });
            }, S = 0; S <= C.height; S++)
              E(S);
            g.push.apply(g, w.filter(function(N) {
              return N.bottom.y - N.top.y >= 2;
            })), B.push.apply(B, k);
            var I = g.filter(function(N) {
              return N.bottom.y - N.top.y >= 2;
            }).map(function(N) {
              var X = (N.top.startX + N.top.endX + N.bottom.startX + N.bottom.endX) / 4, K = (N.top.y + N.bottom.y + 1) / 2;
              if (C.get(Math.round(X), Math.round(K))) {
                var _ = [N.top.endX - N.top.startX, N.bottom.endX - N.bottom.startX, N.bottom.y - N.top.y + 1], ne = m(_) / _.length, V = v({ x: Math.round(X), y: Math.round(K) }, [1, 1, 3, 1, 1], C);
                return { score: V, x: X, y: K, size: ne };
              }
            }).filter(function(N) {
              return !!N;
            }).sort(function(N, X) {
              return N.score - X.score;
            }).map(function(N, X, K) {
              if (X > o)
                return null;
              var _ = K.filter(function(V, G) {
                return X !== G;
              }).map(function(V) {
                return { x: V.x, y: V.y, score: V.score + Math.pow(V.size - N.size, 2) / N.size, size: V.size };
              }).sort(function(V, G) {
                return V.score - G.score;
              });
              if (_.length < 2)
                return null;
              var ne = N.score + _[0].score + _[1].score;
              return { points: [N].concat(_.slice(0, 2)), score: ne };
            }).filter(function(N) {
              return !!N;
            }).sort(function(N, X) {
              return N.score - X.score;
            });
            if (I.length === 0)
              return null;
            var T = f(I[0].points[0], I[0].points[1], I[0].points[2]), x = T.topRight, R = T.topLeft, j = T.bottomLeft, L = A(C, B, x, R, j), Q = [];
            L && Q.push({
              alignmentPattern: { x: L.alignmentPattern.x, y: L.alignmentPattern.y },
              bottomLeft: { x: j.x, y: j.y },
              dimension: L.dimension,
              topLeft: { x: R.x, y: R.y },
              topRight: { x: x.x, y: x.y }
            });
            var D = h(C, x), te = h(C, R), q = h(C, j), M = A(C, B, D, te, q);
            return M && Q.push({
              alignmentPattern: { x: M.alignmentPattern.x, y: M.alignmentPattern.y },
              bottomLeft: { x: q.x, y: q.y },
              topLeft: { x: te.x, y: te.y },
              topRight: { x: D.x, y: D.y },
              dimension: M.dimension
            }), Q.length === 0 ? null : Q;
          }
          n.locate = y;
          function A(C, g, w, B, k) {
            var E, S, I;
            try {
              E = u(B, w, k, C), S = E.dimension, I = E.moduleSize;
            } catch {
              return null;
            }
            var T = {
              x: w.x - B.x + k.x,
              y: w.y - B.y + k.y
            }, x = (l(B, k) + l(B, w)) / 2 / I, R = 1 - 3 / x, j = {
              x: B.x + R * (T.x - B.x),
              y: B.y + R * (T.y - B.y)
            }, L = g.map(function(D) {
              var te = (D.top.startX + D.top.endX + D.bottom.startX + D.bottom.endX) / 4, q = (D.top.y + D.bottom.y + 1) / 2;
              if (C.get(Math.floor(te), Math.floor(q))) {
                var M = [D.top.endX - D.top.startX, D.bottom.endX - D.bottom.startX, D.bottom.y - D.top.y + 1];
                m(M) / M.length;
                var N = v({ x: Math.floor(te), y: Math.floor(q) }, [1, 1, 1], C), X = N + l({ x: te, y: q }, j);
                return { x: te, y: q, score: X };
              }
            }).filter(function(D) {
              return !!D;
            }).sort(function(D, te) {
              return D.score - te.score;
            }), Q = x >= 15 && L.length ? L[0] : j;
            return { alignmentPattern: Q, dimension: S };
          }
        }
        /******/
      ]).default
    );
  });
})(L2);
var Os = L2.exports, Ss = /* @__PURE__ */ _2(Os), F2 = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a(O);
  })(j2, function(r) {
    return (
      /******/
      function(n) {
        var a = {};
        function o(s) {
          if (a[s])
            return a[s].exports;
          var i = a[s] = {
            /******/
            i: s,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return n[s].call(i.exports, i, i.exports, o), i.l = !0, i.exports;
        }
        return o.m = n, o.c = a, o.d = function(s, i, l) {
          o.o(s, i) || Object.defineProperty(s, i, { enumerable: !0, get: l });
        }, o.r = function(s) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
        }, o.t = function(s, i) {
          if (i & 1 && (s = o(s)), i & 8 || i & 4 && typeof s == "object" && s && s.__esModule) return s;
          var l = /* @__PURE__ */ Object.create(null);
          if (o.r(l), Object.defineProperty(l, "default", { enumerable: !0, value: s }), i & 2 && typeof s != "string") for (var m in s) o.d(l, m, (function(f) {
            return s[f];
          }).bind(null, m));
          return l;
        }, o.n = function(s) {
          var i = s && s.__esModule ? (
            /******/
            function() {
              return s.default;
            }
          ) : (
            /******/
            function() {
              return s;
            }
          );
          return o.d(i, "a", i), i;
        }, o.o = function(s, i) {
          return Object.prototype.hasOwnProperty.call(s, i);
        }, o.p = "", o(o.s = "./src/react-webcam.tsx");
      }({
        /***/
        "./src/react-webcam.tsx": (
          /*!******************************!*\
            !*** ./src/react-webcam.tsx ***!
            \******************************/
          /*! exports provided: default */
          /***/
          function(n, a, o) {
            o.r(a);
            var s = o(
              /*! react */
              "react"
            ), i = /* @__PURE__ */ function() {
              var p = function(c, d) {
                return p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(v, h) {
                  v.__proto__ = h;
                } || function(v, h) {
                  for (var y in h) h.hasOwnProperty(y) && (v[y] = h[y]);
                }, p(c, d);
              };
              return function(c, d) {
                p(c, d);
                function v() {
                  this.constructor = c;
                }
                c.prototype = d === null ? Object.create(d) : (v.prototype = d.prototype, new v());
              };
            }(), l = function() {
              return l = Object.assign || function(p) {
                for (var c, d = 1, v = arguments.length; d < v; d++) {
                  c = arguments[d];
                  for (var h in c) Object.prototype.hasOwnProperty.call(c, h) && (p[h] = c[h]);
                }
                return p;
              }, l.apply(this, arguments);
            }, m = function(p, c) {
              var d = {};
              for (var v in p) Object.prototype.hasOwnProperty.call(p, v) && c.indexOf(v) < 0 && (d[v] = p[v]);
              if (p != null && typeof Object.getOwnPropertySymbols == "function")
                for (var h = 0, v = Object.getOwnPropertySymbols(p); h < v.length; h++)
                  c.indexOf(v[h]) < 0 && Object.prototype.propertyIsEnumerable.call(p, v[h]) && (d[v[h]] = p[v[h]]);
              return d;
            };
            (function() {
              typeof window > "u" || (navigator.mediaDevices === void 0 && (navigator.mediaDevices = {}), navigator.mediaDevices.getUserMedia === void 0 && (navigator.mediaDevices.getUserMedia = function(c) {
                var d = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
                return d ? new Promise(function(v, h) {
                  d.call(navigator, c, v, h);
                }) : Promise.reject(new Error("getUserMedia is not implemented in this browser"));
              }));
            })();
            function f() {
              return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
            }
            var u = (
              /** @class */
              function(p) {
                i(c, p);
                function c(d) {
                  var v = p.call(this, d) || this;
                  return v.canvas = null, v.ctx = null, v.requestUserMediaId = 0, v.unmounted = !1, v.state = {
                    hasUserMedia: !1
                  }, v;
                }
                return c.prototype.componentDidMount = function() {
                  var d = this, v = d.state, h = d.props;
                  if (this.unmounted = !1, !f()) {
                    h.onUserMediaError("getUserMedia not supported");
                    return;
                  }
                  v.hasUserMedia || this.requestUserMedia(), h.children && typeof h.children != "function" && console.warn("children must be a function");
                }, c.prototype.componentDidUpdate = function(d) {
                  var v = this.props;
                  if (!f()) {
                    v.onUserMediaError("getUserMedia not supported");
                    return;
                  }
                  var h = JSON.stringify(d.audioConstraints) !== JSON.stringify(v.audioConstraints), y = JSON.stringify(d.videoConstraints) !== JSON.stringify(v.videoConstraints), A = d.minScreenshotWidth !== v.minScreenshotWidth, C = d.minScreenshotHeight !== v.minScreenshotHeight;
                  (y || A || C) && (this.canvas = null, this.ctx = null), (h || y) && (this.stopAndCleanup(), this.requestUserMedia());
                }, c.prototype.componentWillUnmount = function() {
                  this.unmounted = !0, this.stopAndCleanup();
                }, c.stopMediaStream = function(d) {
                  d && (d.getVideoTracks && d.getAudioTracks ? (d.getVideoTracks().map(function(v) {
                    d.removeTrack(v), v.stop();
                  }), d.getAudioTracks().map(function(v) {
                    d.removeTrack(v), v.stop();
                  })) : d.stop());
                }, c.prototype.stopAndCleanup = function() {
                  var d = this.state;
                  d.hasUserMedia && (c.stopMediaStream(this.stream), d.src && window.URL.revokeObjectURL(d.src));
                }, c.prototype.getScreenshot = function(d) {
                  var v = this, h = v.state, y = v.props;
                  if (!h.hasUserMedia)
                    return null;
                  var A = this.getCanvas(d);
                  return A && A.toDataURL(y.screenshotFormat, y.screenshotQuality);
                }, c.prototype.getCanvas = function(d) {
                  var v = this, h = v.state, y = v.props;
                  if (!this.video || !h.hasUserMedia || !this.video.videoHeight)
                    return null;
                  if (!this.ctx) {
                    var A = this.video.videoWidth, C = this.video.videoHeight;
                    if (!this.props.forceScreenshotSourceSize) {
                      var g = A / C;
                      A = y.minScreenshotWidth || this.video.clientWidth, C = A / g, y.minScreenshotHeight && C < y.minScreenshotHeight && (C = y.minScreenshotHeight, A = C * g);
                    }
                    this.canvas = document.createElement("canvas"), this.canvas.width = (d == null ? void 0 : d.width) || A, this.canvas.height = (d == null ? void 0 : d.height) || C, this.ctx = this.canvas.getContext("2d");
                  }
                  var w = this, B = w.ctx, k = w.canvas;
                  return B && k && (k.width = (d == null ? void 0 : d.width) || k.width, k.height = (d == null ? void 0 : d.height) || k.height, y.mirrored && (B.translate(k.width, 0), B.scale(-1, 1)), B.imageSmoothingEnabled = y.imageSmoothing, B.drawImage(this.video, 0, 0, (d == null ? void 0 : d.width) || k.width, (d == null ? void 0 : d.height) || k.height), y.mirrored && (B.scale(-1, 1), B.translate(-k.width, 0))), k;
                }, c.prototype.requestUserMedia = function() {
                  var d = this, v = this.props, h = function(C, g) {
                    var w = {
                      video: typeof g < "u" ? g : !0
                    };
                    v.audio && (w.audio = typeof C < "u" ? C : !0), d.requestUserMediaId++;
                    var B = d.requestUserMediaId;
                    navigator.mediaDevices.getUserMedia(w).then(function(k) {
                      d.unmounted || B !== d.requestUserMediaId ? c.stopMediaStream(k) : d.handleUserMedia(null, k);
                    }).catch(function(k) {
                      d.handleUserMedia(k);
                    });
                  };
                  if ("mediaDevices" in navigator)
                    h(v.audioConstraints, v.videoConstraints);
                  else {
                    var y = function(C) {
                      return { optional: [{ sourceId: C }] };
                    }, A = function(C) {
                      var g = C.deviceId;
                      return typeof g == "string" ? g : Array.isArray(g) && g.length > 0 ? g[0] : typeof g == "object" && g.ideal ? g.ideal : null;
                    };
                    MediaStreamTrack.getSources(function(C) {
                      var g = null, w = null;
                      C.forEach(function(E) {
                        E.kind === "audio" ? g = E.id : E.kind === "video" && (w = E.id);
                      });
                      var B = A(v.audioConstraints);
                      B && (g = B);
                      var k = A(v.videoConstraints);
                      k && (w = k), h(y(g), y(w));
                    });
                  }
                }, c.prototype.handleUserMedia = function(d, v) {
                  var h = this.props;
                  if (d || !v) {
                    this.setState({ hasUserMedia: !1 }), h.onUserMediaError(d);
                    return;
                  }
                  this.stream = v;
                  try {
                    this.video && (this.video.srcObject = v), this.setState({ hasUserMedia: !0 });
                  } catch {
                    this.setState({
                      hasUserMedia: !0,
                      src: window.URL.createObjectURL(v)
                    });
                  }
                  h.onUserMedia(v);
                }, c.prototype.render = function() {
                  var d = this, v = this, h = v.state, y = v.props, A = y.audio;
                  y.forceScreenshotSourceSize;
                  var C = y.disablePictureInPicture;
                  y.onUserMedia, y.onUserMediaError, y.screenshotFormat, y.screenshotQuality, y.minScreenshotWidth, y.minScreenshotHeight, y.audioConstraints, y.videoConstraints, y.imageSmoothing;
                  var g = y.mirrored, w = y.style, B = w === void 0 ? {} : w, k = y.children, E = m(y, ["audio", "forceScreenshotSourceSize", "disablePictureInPicture", "onUserMedia", "onUserMediaError", "screenshotFormat", "screenshotQuality", "minScreenshotWidth", "minScreenshotHeight", "audioConstraints", "videoConstraints", "imageSmoothing", "mirrored", "style", "children"]), S = g ? l(l({}, B), { transform: (B.transform || "") + " scaleX(-1)" }) : B, I = {
                    getScreenshot: this.getScreenshot.bind(this)
                  };
                  return s.createElement(
                    s.Fragment,
                    null,
                    s.createElement("video", l({ autoPlay: !0, disablePictureInPicture: C, src: h.src, muted: !A, playsInline: !0, ref: function(T) {
                      d.video = T;
                    }, style: S }, E)),
                    k && k(I)
                  );
                }, c.defaultProps = {
                  audio: !1,
                  disablePictureInPicture: !1,
                  forceScreenshotSourceSize: !1,
                  imageSmoothing: !0,
                  mirrored: !1,
                  onUserMedia: function() {
                  },
                  onUserMediaError: function() {
                  },
                  screenshotFormat: "image/webp",
                  screenshotQuality: 0.92
                }, c;
              }(s.Component)
            );
            a.default = u;
          }
        ),
        /***/
        react: (
          /*!**************************************************************************************!*\
            !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
            \**************************************************************************************/
          /*! no static exports found */
          /***/
          function(n, a) {
            n.exports = r;
          }
        )
        /******/
      }).default
    );
  });
})(F2);
var Ms = F2.exports, Ns = /* @__PURE__ */ _2(Ms);
function Ts(e) {
  var t = e.delay, r = e.width, n = e.height, a = e.onRead, o = e.action, s = e.videoConstraints, i = O.useRef(null), l = O.useCallback(function() {
    var m, f;
    if (i && i.current) {
      var u = (f = (m = i.current.getCanvas()) === null || m === void 0 ? void 0 : m.getContext("2d")) === null || f === void 0 ? void 0 : f.getImageData(0, 0, r, n);
      if (u && u.data) {
        var p = Ss(u.data, r, n);
        p && (a && a(p), o && o(p.data));
      }
    }
  }, [i, r, n, a, o]);
  return O.useEffect(function() {
    var m = setInterval(function() {
      l();
    }, t);
    return function() {
      return clearInterval(m);
    };
  }), Es.jsx(Ns, { audio: !1, ref: i, width: r, height: n, videoConstraints: s });
}
function Tt() {
  const e = Z();
  return /* @__PURE__ */ b(
    "div",
    {
      className: "w-full h-[1px]",
      style: {
        ...e("borders")
      }
    }
  );
}
function w3({ joinComponent: e, list: t }) {
  return O.useMemo(() => {
    const n = [], a = t.length;
    let o = 0;
    return t.forEach((s, i) => {
      n.push(/* @__PURE__ */ b(he, { children: s }, o)), i + 1 != a && n.push(/* @__PURE__ */ b(he, { children: e }, o + 1)), o += 2;
    }), n;
  }, [t, e]);
}
const D2 = O.forwardRef(({ list: e, style: t, className: r, ...n }, a) => {
  const o = Z();
  return /* @__PURE__ */ b(
    "div",
    {
      ...n,
      ref: a,
      className: $("border border-solid border-transparent rounded-lg flex flex-col", r),
      style: {
        ...o("secondry.background", {
          borderColor: "borders"
        }),
        ...t
      },
      children: /* @__PURE__ */ b(
        w3,
        {
          list: e.filter(Boolean).map((s, i) => /* @__PURE__ */ b(he, { children: s }, i)),
          joinComponent: /* @__PURE__ */ b(Tt, {})
        }
      )
    }
  );
}), Is = ({ title: e, rightSide: t }) => /* @__PURE__ */ Y("div", { className: "flex justify-between items-center p-2", children: [
  /* @__PURE__ */ b("h1", { className: "text-3xl truncate capitalize", children: e }),
  /* @__PURE__ */ b("div", { className: "flex items-center gap-1", children: t })
] }), oi = () => {
  const e = Gt.getTemp("type"), t = Z();
  return /* @__PURE__ */ b(
    D2,
    {
      className: "flex flex-col justify-between max-md:rounded-none w-[70vw] max-md:w-full h-[80vh] max-md:h-full",
      list: [
        /* @__PURE__ */ b(
          Is,
          {
            title: e || "Work Off",
            rightSide: /* @__PURE__ */ b(
              I3,
              {
                icon: P3,
                onClick: () => {
                  Gt.setTemp("error", "Escape Take Image");
                }
              }
            )
          }
        ),
        /* @__PURE__ */ b("div", { className: $("p-2 relative overflow-hidden flex items-center"), children: /* @__PURE__ */ b(
          "div",
          {
            className: "border border-transparent border-solid rounded-[10px] w-full h-full overflow-hidden",
            style: {
              ...t("secondry.background", {
                borderColor: "borders"
              })
            },
            children: e && /* @__PURE__ */ b(Ts, { onRead: () => {
            }, delay: 200, width: 400, height: 400, videoConstraints: !0 })
          }
        ) }),
        e == "take" && /* @__PURE__ */ b("div", { className: "flex justify-evenly p-4 w-full h-[70px] text-2xl", children: /* @__PURE__ */ b(Mt, { title: "take image", children: /* @__PURE__ */ b(
          I3,
          {
            onClick: () => {
              Ue("camera-take");
            },
            icon: qn
          }
        ) }) })
      ],
      tabIndex: 1,
      id: "camera-view",
      style: {
        ...t("primary.background", {
          borderColor: "borders"
        })
      }
    }
  );
}, si = () => {
  const e = za.useOneFeild("window/dark.boolean", "value"), t = Z(), r = or("toggle to light"), n = or("toggle to dark");
  return /* @__PURE__ */ b(
    Mt,
    {
      title: (e.get ? r : n) ?? void 0,
      position: {
        x: "left",
        y: "bottom"
      },
      className: "flex items-center",
      children: /* @__PURE__ */ b(
        "button",
        {
          tabIndex: -1,
          className: $(`
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
            ...t({
              backgroundColor: "primary.background",
              borderColor: "borders"
            })
          },
          children: /* @__PURE__ */ b(
            "span",
            {
              className: $(
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
                ...t("primary.background", {
                  borderColor: "borders"
                })
              },
              children: /* @__PURE__ */ b(Pe, { icon: e.get ? eo : ro })
            }
          )
        }
      )
    }
  );
};
function zs({ content: e }) {
  const t = Z(), r = /mac/gi.test(navigator.platform), n = {
    ...t({
      backgroundColor: "gray.opacity",
      borderColor: "gray.opacity.2"
    })
  };
  return /* @__PURE__ */ Y(
    "div",
    {
      style: n,
      className: $(`
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
        /control/gi.test(e) && (r ? /* @__PURE__ */ b(Pe, { icon: to }) : "ctrl"),
        /shift/gi.test(e) && (r ? /* @__PURE__ */ b(Pe, { icon: e2 }) : "shift"),
        [/control/gi, /shift/gi].every((a) => !a.test(e)) && e
      ]
    }
  );
}
function U2({ shortcut: e = [], className: t, ...r }) {
  const n = typeof e == "string" ? [e] : e;
  return /* @__PURE__ */ b(
    "span",
    {
      ...r,
      className: $(
        `
        capitalize
        items-center
        gap-x-2
        truncate
        mx-1
      `,
        t
      ),
      children: /* @__PURE__ */ b(
        w3,
        {
          list: n.map((a, o) => {
            const s = a.split("+");
            return /* @__PURE__ */ b("span", { className: "inline-flex items-center gap-x-[1px]", children: /* @__PURE__ */ b(
              w3,
              {
                list: s.map((i, l) => /* @__PURE__ */ b(zs, { content: i }, l)),
                joinComponent: /* @__PURE__ */ b("span", { children: "+" })
              }
            ) }, o);
          }),
          joinComponent: /* @__PURE__ */ b("span", { className: "mx-1", children: "Or" })
        }
      )
    }
  );
}
function a3() {
  return a3 = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, a3.apply(this, arguments);
}
const Rs = ["children", "options"];
var zn, Rn;
(function(e) {
  e.blockQuote = "0", e.breakLine = "1", e.breakThematic = "2", e.codeBlock = "3", e.codeFenced = "4", e.codeInline = "5", e.footnote = "6", e.footnoteReference = "7", e.gfmTask = "8", e.heading = "9", e.headingSetext = "10", e.htmlBlock = "11", e.htmlComment = "12", e.htmlSelfClosing = "13", e.image = "14", e.link = "15", e.linkAngleBraceStyleDetector = "16", e.linkBareUrlDetector = "17", e.linkMailtoDetector = "18", e.newlineCoalescer = "19", e.orderedList = "20", e.paragraph = "21", e.ref = "22", e.refImage = "23", e.refLink = "24", e.table = "25", e.tableSeparator = "26", e.text = "27", e.textBolded = "28", e.textEmphasized = "29", e.textEscaped = "30", e.textMarked = "31", e.textStrikethroughed = "32", e.unorderedList = "33";
})(zn || (zn = {})), function(e) {
  e[e.MAX = 0] = "MAX", e[e.HIGH = 1] = "HIGH", e[e.MED = 2] = "MED", e[e.LOW = 3] = "LOW", e[e.MIN = 4] = "MIN";
}(Rn || (Rn = {}));
const jn = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, t) => (e[t.toLowerCase()] = t, e), { for: "htmlFor" }), _n = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, js = ["style", "script"], _s = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, Ls = /mailto:/i, Fs = /\n{2,}$/, $2 = /^(\s*>[\s\S]*?)(?=\n{2,})/, Ds = /^ *> ?/gm, Us = /^ {2,}\n/, $s = /^(?:( *[-*_])){3,} *(?:\n *)+\n/, Y2 = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/, W2 = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, Ys = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/, Ws = /^(?:\n *)*\n/, Hs = /\r\n?/g, Qs = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, Xs = /^\[\^([^\]]+)]/, Gs = /\f/g, Vs = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/, Ks = /^\s*?\[(x|\s)\]/, H2 = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Q2 = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, X2 = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, ct = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i, Zs = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, G2 = /^<!--[\s\S]*?(?:-->)/, Js = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, ut = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, qs = /^\{.*\}$/, e0 = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, r0 = /^<([^ >]+@[^ >]+)>/, t0 = /^<([^ >]+:\/[^ >]+)>/, n0 = /-([a-z])?/gi, V2 = /^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, a0 = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, o0 = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, s0 = /^\[([^\]]*)\] ?\[([^\]]*)\]/, i0 = /(\[|\])/g, l0 = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, c0 = /\t/g, u0 = /(^ *\||\| *$)/g, f0 = /^ *:-+: *$/, d0 = /^ *:-+ *$/, m0 = /^ *-+: *$/, br = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)", v0 = new RegExp(`^([*_])\\1${br}\\1\\1(?!\\1)`), p0 = new RegExp(`^([*_])${br}\\1(?!\\1|\\w)`), g0 = new RegExp(`^==${br}==`), h0 = new RegExp(`^~~${br}~~`), b0 = /^\\([^0-9A-Za-z\s])/, y0 = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i, k0 = /^\n+/, w0 = /^([ \t]*)/, P0 = /\\([^\\])/g, Ln = / *\n+$/, B0 = /(?:^|\n)( *)$/, It = "(?:\\d+\\.)", zt = "(?:[*+-])";
function K2(e) {
  return "( *)(" + (e === 1 ? It : zt) + ") +";
}
const Z2 = K2(1), J2 = K2(2);
function q2(e) {
  return new RegExp("^" + (e === 1 ? Z2 : J2));
}
const C0 = q2(1), A0 = q2(2);
function ea(e) {
  return new RegExp("^" + (e === 1 ? Z2 : J2) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? It : zt) + " )[^\\n]*)*(\\n|$)", "gm");
}
const ra = ea(1), ta = ea(2);
function na(e) {
  const t = e === 1 ? It : zt;
  return new RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)");
}
const aa = na(1), oa = na(2);
function Fn(e, t) {
  const r = t === 1, n = r ? aa : oa, a = r ? ra : ta, o = r ? C0 : A0;
  return { match(s, i, l) {
    const m = B0.exec(l);
    return m && (i.list || !i.inline && !i.simple) ? n.exec(s = m[1] + s) : null;
  }, order: 1, parse(s, i, l) {
    const m = r ? +s[2] : void 0, f = s[0].replace(Fs, `
`).match(a);
    let u = !1;
    return { items: f.map(function(p, c) {
      const d = o.exec(p)[0].length, v = new RegExp("^ {1," + d + "}", "gm"), h = p.replace(v, "").replace(o, ""), y = c === f.length - 1, A = h.indexOf(`

`) !== -1 || y && u;
      u = A;
      const C = l.inline, g = l.list;
      let w;
      l.list = !0, A ? (l.inline = !1, w = h.replace(Ln, `

`)) : (l.inline = !0, w = h.replace(Ln, ""));
      const B = i(w, l);
      return l.inline = C, l.list = g, B;
    }), ordered: r, start: m };
  }, render: (s, i, l) => e(s.ordered ? "ol" : "ul", { key: l.key, start: s.type === "20" ? s.start : void 0 }, s.items.map(function(m, f) {
    return e("li", { key: f }, i(m, l));
  })) };
}
const x0 = new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), E0 = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, sa = [$2, Y2, W2, H2, X2, Q2, G2, V2, ra, aa, ta, oa], O0 = [...sa, /^[^\n]+(?:  \n|\n{2,})/, ct, ut];
function S0(e) {
  return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function M0(e) {
  return m0.test(e) ? "right" : f0.test(e) ? "center" : d0.test(e) ? "left" : null;
}
function Dn(e, t, r, n) {
  const a = r.inTable;
  r.inTable = !0;
  let o = e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce((i, l) => (l.trim() === "|" ? i.push(n ? { type: "26" } : { type: "27", text: l }) : l !== "" && i.push.apply(i, t(l, r)), i), []);
  r.inTable = a;
  let s = [[]];
  return o.forEach(function(i, l) {
    i.type === "26" ? l !== 0 && l !== o.length - 1 && s.push([]) : (i.type !== "27" || o[l + 1] != null && o[l + 1].type !== "26" || (i.text = i.text.trimEnd()), s[s.length - 1].push(i));
  }), s;
}
function N0(e, t, r) {
  r.inline = !0;
  const n = e[2] ? e[2].replace(u0, "").split("|").map(M0) : [], a = e[3] ? function(s, i, l) {
    return s.trim().split(`
`).map(function(m) {
      return Dn(m, i, l, !0);
    });
  }(e[3], t, r) : [], o = Dn(e[1], t, r, !!a.length);
  return r.inline = !1, a.length ? { align: n, cells: a, header: o, type: "25" } : { children: o, type: "21" };
}
function Un(e, t) {
  return e.align[t] == null ? {} : { textAlign: e.align[t] };
}
function Ge(e) {
  return function(t, r) {
    return r.inline ? e.exec(t) : null;
  };
}
function Ve(e) {
  return function(t, r) {
    return r.inline || r.simple ? e.exec(t) : null;
  };
}
function Fe(e) {
  return function(t, r) {
    return r.inline || r.simple ? null : e.exec(t);
  };
}
function O3(e) {
  return function(t) {
    return e.exec(t);
  };
}
function T0(e, t, r) {
  if (t.inline || t.simple || r && !r.endsWith(`
`)) return null;
  let n = "";
  e.split(`
`).every((o) => !sa.some((s) => s.test(o)) && (n += o + `
`, o.trim()));
  const a = n.trimEnd();
  return a == "" ? null : [n, a];
}
function v3(e) {
  try {
    if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return;
  } catch {
    return null;
  }
  return e;
}
function $n(e) {
  return e.replace(P0, "$1");
}
function ar(e, t, r) {
  const n = r.inline || !1, a = r.simple || !1;
  r.inline = !0, r.simple = !0;
  const o = e(t, r);
  return r.inline = n, r.simple = a, o;
}
function I0(e, t, r) {
  const n = r.inline || !1, a = r.simple || !1;
  r.inline = !1, r.simple = !0;
  const o = e(t, r);
  return r.inline = n, r.simple = a, o;
}
function z0(e, t, r) {
  const n = r.inline || !1;
  r.inline = !1;
  const a = e(t, r);
  return r.inline = n, a;
}
const Dr = (e, t, r) => ({ children: ar(t, e[1], r) });
function Ur() {
  return {};
}
function $r() {
  return null;
}
function R0(...e) {
  return e.filter(Boolean).join(" ");
}
function Yr(e, t, r) {
  let n = e;
  const a = t.split(".");
  for (; a.length && (n = n[a[0]], n !== void 0); ) a.shift();
  return n || r;
}
function j0(e = "", t = {}) {
  t.overrides = t.overrides || {}, t.slugify = t.slugify || S0, t.namedCodesToUnicode = t.namedCodesToUnicode ? a3({}, _n, t.namedCodesToUnicode) : _n;
  const r = t.createElement || rr.createElement;
  function n(c, d, ...v) {
    const h = Yr(t.overrides, `${c}.props`, {});
    return r(function(y, A) {
      const C = Yr(A, y);
      return C ? typeof C == "function" || typeof C == "object" && "render" in C ? C : Yr(A, `${y}.component`, y) : y;
    }(c, t.overrides), a3({}, d, h, { className: R0(d == null ? void 0 : d.className, h.className) || void 0 }), ...v);
  }
  function a(c) {
    c = c.replace(Vs, "");
    let d = !1;
    t.forceInline ? d = !0 : t.forceBlock || (d = l0.test(c) === !1);
    const v = f(m(d ? c : `${c.trimEnd().replace(k0, "")}

`, { inline: d }));
    for (; typeof v[v.length - 1] == "string" && !v[v.length - 1].trim(); ) v.pop();
    if (t.wrapper === null) return v;
    const h = t.wrapper || (d ? "span" : "div");
    let y;
    if (v.length > 1 || t.forceWrapper) y = v;
    else {
      if (v.length === 1) return y = v[0], typeof y == "string" ? n("span", { key: "outer" }, y) : y;
      y = null;
    }
    return rr.createElement(h, { key: "outer" }, y);
  }
  function o(c) {
    const d = c.match(_s);
    return d ? d.reduce(function(v, h, y) {
      const A = h.indexOf("=");
      if (A !== -1) {
        const C = function(k) {
          return k.indexOf("-") !== -1 && k.match(Js) === null && (k = k.replace(n0, function(E, S) {
            return S.toUpperCase();
          })), k;
        }(h.slice(0, A)).trim(), g = function(k) {
          const E = k[0];
          return (E === '"' || E === "'") && k.length >= 2 && k[k.length - 1] === E ? k.slice(1, -1) : k;
        }(h.slice(A + 1).trim()), w = jn[C] || C, B = v[w] = function(k, E) {
          return k === "style" ? E.split(/;\s?/).reduce(function(S, I) {
            const T = I.slice(0, I.indexOf(":"));
            return S[T.trim().replace(/(-[a-z])/g, (x) => x[1].toUpperCase())] = I.slice(T.length + 1).trim(), S;
          }, {}) : k === "href" || k === "src" ? v3(E) : (E.match(qs) && (E = E.slice(1, E.length - 1)), E === "true" || E !== "false" && E);
        }(C, g);
        typeof B == "string" && (ct.test(B) || ut.test(B)) && (v[w] = rr.cloneElement(a(B.trim()), { key: y }));
      } else h !== "style" && (v[jn[h] || h] = !0);
      return v;
    }, {}) : null;
  }
  const s = [], i = {}, l = { 0: { match: Fe($2), order: 1, parse: (c, d, v) => ({ children: d(c[0].replace(Ds, ""), v) }), render: (c, d, v) => n("blockquote", { key: v.key }, d(c.children, v)) }, 1: { match: O3(Us), order: 1, parse: Ur, render: (c, d, v) => n("br", { key: v.key }) }, 2: { match: Fe($s), order: 1, parse: Ur, render: (c, d, v) => n("hr", { key: v.key }) }, 3: { match: Fe(W2), order: 0, parse: (c) => ({ lang: void 0, text: c[0].replace(/^ {4}/gm, "").replace(/\n+$/, "") }), render: (c, d, v) => n("pre", { key: v.key }, n("code", a3({}, c.attrs, { className: c.lang ? `lang-${c.lang}` : "" }), c.text)) }, 4: { match: Fe(Y2), order: 0, parse: (c) => ({ attrs: o(c[3] || ""), lang: c[2] || void 0, text: c[4], type: "3" }) }, 5: { match: Ve(Ys), order: 3, parse: (c) => ({ text: c[2] }), render: (c, d, v) => n("code", { key: v.key }, c.text) }, 6: { match: Fe(Qs), order: 0, parse: (c) => (s.push({ footnote: c[2], identifier: c[1] }), {}), render: $r }, 7: { match: Ge(Xs), order: 1, parse: (c) => ({ target: `#${t.slugify(c[1])}`, text: c[1] }), render: (c, d, v) => n("a", { key: v.key, href: v3(c.target) }, n("sup", { key: v.key }, c.text)) }, 8: { match: Ge(Ks), order: 1, parse: (c) => ({ completed: c[1].toLowerCase() === "x" }), render: (c, d, v) => n("input", { checked: c.completed, key: v.key, readOnly: !0, type: "checkbox" }) }, 9: { match: Fe(t.enforceAtxHeadings ? Q2 : H2), order: 1, parse: (c, d, v) => ({ children: ar(d, c[2], v), id: t.slugify(c[2]), level: c[1].length }), render: (c, d, v) => n(`h${c.level}`, { id: c.id, key: v.key }, d(c.children, v)) }, 10: { match: Fe(X2), order: 0, parse: (c, d, v) => ({ children: ar(d, c[1], v), level: c[2] === "=" ? 1 : 2, type: "9" }) }, 11: { match: O3(ct), order: 1, parse(c, d, v) {
    const [, h] = c[3].match(w0), y = new RegExp(`^${h}`, "gm"), A = c[3].replace(y, ""), C = (g = A, O0.some((E) => E.test(g)) ? z0 : ar);
    var g;
    const w = c[1].toLowerCase(), B = js.indexOf(w) !== -1, k = { attrs: o(c[2]), noInnerParse: B, tag: (B ? w : c[1]).trim() };
    return v.inAnchor = v.inAnchor || w === "a", B ? k.text = c[3] : k.children = C(d, A, v), v.inAnchor = !1, k;
  }, render: (c, d, v) => n(c.tag, a3({ key: v.key }, c.attrs), c.text || d(c.children, v)) }, 13: { match: O3(ut), order: 1, parse: (c) => ({ attrs: o(c[2] || ""), tag: c[1].trim() }), render: (c, d, v) => n(c.tag, a3({}, c.attrs, { key: v.key })) }, 12: { match: O3(G2), order: 1, parse: () => ({}), render: $r }, 14: { match: Ve(E0), order: 1, parse: (c) => ({ alt: c[1], target: $n(c[2]), title: c[3] }), render: (c, d, v) => n("img", { key: v.key, alt: c.alt || void 0, title: c.title || void 0, src: v3(c.target) }) }, 15: { match: Ge(x0), order: 3, parse: (c, d, v) => ({ children: I0(d, c[1], v), target: $n(c[2]), title: c[3] }), render: (c, d, v) => n("a", { key: v.key, href: v3(c.target), title: c.title }, d(c.children, v)) }, 16: { match: Ge(t0), order: 0, parse: (c) => ({ children: [{ text: c[1], type: "27" }], target: c[1], type: "15" }) }, 17: { match: (c, d) => d.inAnchor ? null : Ge(e0)(c, d), order: 0, parse: (c) => ({ children: [{ text: c[1], type: "27" }], target: c[1], title: void 0, type: "15" }) }, 18: { match: Ge(r0), order: 0, parse(c) {
    let d = c[1], v = c[1];
    return Ls.test(v) || (v = "mailto:" + v), { children: [{ text: d.replace("mailto:", ""), type: "27" }], target: v, type: "15" };
  } }, 20: Fn(n, 1), 33: Fn(n, 2), 19: { match: Fe(Ws), order: 3, parse: Ur, render: () => `
` }, 21: { match: T0, order: 3, parse: Dr, render: (c, d, v) => n("p", { key: v.key }, d(c.children, v)) }, 22: { match: Ge(a0), order: 0, parse: (c) => (i[c[1]] = { target: c[2], title: c[4] }, {}), render: $r }, 23: { match: Ve(o0), order: 0, parse: (c) => ({ alt: c[1] || void 0, ref: c[2] }), render: (c, d, v) => i[c.ref] ? n("img", { key: v.key, alt: c.alt, src: v3(i[c.ref].target), title: i[c.ref].title }) : null }, 24: { match: Ge(s0), order: 0, parse: (c, d, v) => ({ children: d(c[1], v), fallbackChildren: d(c[0].replace(i0, "\\$1"), v), ref: c[2] }), render: (c, d, v) => i[c.ref] ? n("a", { key: v.key, href: v3(i[c.ref].target), title: i[c.ref].title }, d(c.children, v)) : n("span", { key: v.key }, d(c.fallbackChildren, v)) }, 25: { match: Fe(V2), order: 1, parse: N0, render(c, d, v) {
    const h = c;
    return n("table", { key: v.key }, n("thead", null, n("tr", null, h.header.map(function(y, A) {
      return n("th", { key: A, style: Un(h, A) }, d(y, v));
    }))), n("tbody", null, h.cells.map(function(y, A) {
      return n("tr", { key: A }, y.map(function(C, g) {
        return n("td", { key: g, style: Un(h, g) }, d(C, v));
      }));
    })));
  } }, 27: { match: O3(y0), order: 4, parse: (c) => ({ text: c[0].replace(Zs, (d, v) => t.namedCodesToUnicode[v] ? t.namedCodesToUnicode[v] : d) }), render: (c) => c.text }, 28: { match: Ve(v0), order: 2, parse: (c, d, v) => ({ children: d(c[2], v) }), render: (c, d, v) => n("strong", { key: v.key }, d(c.children, v)) }, 29: { match: Ve(p0), order: 3, parse: (c, d, v) => ({ children: d(c[2], v) }), render: (c, d, v) => n("em", { key: v.key }, d(c.children, v)) }, 30: { match: Ve(b0), order: 1, parse: (c) => ({ text: c[1], type: "27" }) }, 31: { match: Ve(g0), order: 3, parse: Dr, render: (c, d, v) => n("mark", { key: v.key }, d(c.children, v)) }, 32: { match: Ve(h0), order: 3, parse: Dr, render: (c, d, v) => n("del", { key: v.key }, d(c.children, v)) } };
  t.disableParsingRawHTML === !0 && (delete l[11], delete l[13]);
  const m = function(c) {
    let d = Object.keys(c);
    function v(h, y) {
      let A = [], C = "";
      for (; h; ) {
        let g = 0;
        for (; g < d.length; ) {
          const w = d[g], B = c[w], k = B.match(h, y, C);
          if (k) {
            const E = k[0];
            h = h.substring(E.length);
            const S = B.parse(k, v, y);
            S.type == null && (S.type = w), A.push(S), C = E;
            break;
          }
          g++;
        }
      }
      return A;
    }
    return d.sort(function(h, y) {
      let A = c[h].order, C = c[y].order;
      return A !== C ? A - C : h < y ? -1 : 1;
    }), function(h, y) {
      return v(function(A) {
        return A.replace(Hs, `
`).replace(Gs, "").replace(c0, "    ");
      }(h), y);
    };
  }(l), f = (u = /* @__PURE__ */ function(c, d) {
    return function(v, h, y) {
      const A = c[v.type].render;
      return d ? d(() => A(v, h, y), v, h, y) : A(v, h, y);
    };
  }(l, t.renderRule), function c(d, v = {}) {
    if (Array.isArray(d)) {
      const h = v.key, y = [];
      let A = !1;
      for (let C = 0; C < d.length; C++) {
        v.key = C;
        const g = c(d[C], v), w = typeof g == "string";
        w && A ? y[y.length - 1] += g : g !== null && y.push(g), A = w;
      }
      return v.key = h, y;
    }
    return u(d, c, v);
  });
  var u;
  const p = a(e);
  return s.length ? n("div", null, p, n("footer", { key: "footer" }, s.map(function(c) {
    return n("div", { id: t.slugify(c.identifier), key: c.identifier }, c.identifier, f(m(c.footnote, { inline: !0 })));
  }))) : p;
}
const _0 = (e) => {
  let { children: t = "", options: r } = e, n = function(a, o) {
    if (a == null) return {};
    var s, i, l = {}, m = Object.keys(a);
    for (i = 0; i < m.length; i++) o.indexOf(s = m[i]) >= 0 || (l[s] = a[s]);
    return l;
  }(e, Rs);
  return rr.cloneElement(j0(t, r), n);
};
function W3({ value: e }) {
  const t = Z();
  return /* @__PURE__ */ b("div", { children: /* @__PURE__ */ b(
    _0,
    {
      options: {
        overrides: {
          hr() {
            return /* @__PURE__ */ b("div", { className: "my-2", children: /* @__PURE__ */ b(Tt, {}) });
          },
          h1(r) {
            return /* @__PURE__ */ b("h1", { className: "text-6xl", children: r == null ? void 0 : r.children });
          },
          h2(r) {
            return /* @__PURE__ */ b("h1", { className: "text-5xl", children: r == null ? void 0 : r.children });
          },
          h3(r) {
            return /* @__PURE__ */ b("h1", { className: "text-4xl", children: r == null ? void 0 : r.children });
          },
          h4(r) {
            return /* @__PURE__ */ b("h1", { className: "text-3xl", children: r == null ? void 0 : r.children });
          },
          h5(r) {
            return /* @__PURE__ */ b("h1", { className: "text-2xl", children: r == null ? void 0 : r.children });
          },
          h6(r) {
            return /* @__PURE__ */ b("h1", { className: "text-xl", children: r == null ? void 0 : r.children });
          },
          code(r) {
            return /* @__PURE__ */ b(
              "code",
              {
                className: "px-2 py-1 border border-transparent border-solid rounded-md leading-[26px]",
                style: {
                  ...t("gray.opacity", {
                    borderColor: "borders"
                  })
                },
                children: r == null ? void 0 : r.children
              }
            );
          },
          input(r) {
            const n = W((r == null ? void 0 : r.checked) || !1);
            return (r == null ? void 0 : r.type) === "checkbox" ? /* @__PURE__ */ b(
              z2,
              {
                id: dr(),
                state: n,
                config: {
                  style: "checkbox"
                }
              }
            ) : /* @__PURE__ */ b("input", { ...r });
          },
          img(r) {
            return /* @__PURE__ */ b("div", { className: "flex justify-center", children: /* @__PURE__ */ b(
              "div",
              {
                className: "rounded-lg sahdow-lg w-fit overflow-hidden",
                style: {
                  ...t({
                    boxShadow: je([
                      {
                        colorId: "shadow.color"
                      }
                    ])
                  })
                },
                children: /* @__PURE__ */ b("img", { ...r })
              }
            ) });
          },
          p(r) {
            return /* @__PURE__ */ b("p", { className: "p-2", children: r == null ? void 0 : r.children });
          },
          a(r) {
            return /* @__PURE__ */ b(
              "a",
              {
                href: r == null ? void 0 : r.href,
                className: "hover:underline",
                style: {
                  ...t({
                    color: "primary"
                  })
                },
                children: r.children
              }
            );
          },
          table(r) {
            return /* @__PURE__ */ b(
              "div",
              {
                className: $(`
                    w-full
                    overflow-hidden
                    border
                    border-solid
                    border-transparent
                    my-2
                  `),
                style: {
                  ...t("gray.opacity", {
                    borderColor: "gray.opacity.2"
                  })
                },
                children: r.children
              }
            );
          },
          tr(r) {
            const n = O.createRef(), a = O.useMemo(() => {
              let o = n.current, s = 0;
              for (; o; )
                s++, o = o.previousElementSibling;
              return s;
            }, [n.current]);
            return /* @__PURE__ */ b(
              "div",
              {
                ref: n,
                style: {
                  ...t(a % 2 && "gray.opacity")
                },
                className: "flex justify-between items-center gap-x-1 px-1 py-1 border border-transparent border-solid w-full",
                children: r.children
              }
            );
          },
          td(r) {
            return /* @__PURE__ */ b("div", { className: "w-full", children: r == null ? void 0 : r.children });
          },
          tbody(r) {
            return /* @__PURE__ */ b("div", { children: r == null ? void 0 : r.children });
          },
          thead(r) {
            return /* @__PURE__ */ b("div", { children: r == null ? void 0 : r.children });
          },
          th(r) {
            return /* @__PURE__ */ b("div", { className: "w-full", children: r == null ? void 0 : r.children });
          }
        },
        namedCodesToUnicode: { le: "≤" }
      },
      children: e
    }
  ) });
}
function ii({ data: e }) {
  const t = Yn("commandId"), r = Ne.getOneFeild("findCommand", "value"), n = O.useMemo(() => {
    if (t)
      return e[t];
  }, [t]), a = O.useMemo(() => (n == null ? void 0 : n.lines) || [], [n]), o = O.useMemo(() => a.filter(({ content: l }) => vt(l, r)), [r, a]);
  O.useEffect(() => {
    ce.setOneFeild("cmds/list", "focused", a != null && a.length ? 0 : null);
  }, [a]);
  const s = Qr(o, "cmds/list", "submited");
  O.useEffect(() => {
    var l;
    s && (Ra("commands.close"), Ne.setOneFeild("findCommand", "value", ""), (l = n == null ? void 0 : n.onSubmit) == null || l.call(n, s), ce.setOneFeild("cmds/list", "submited", null));
  }, [s, n]);
  const i = Z();
  return /* @__PURE__ */ Y(
    "div",
    {
      className: "relative py-1 h-[50vh]",
      onClick: (l) => {
        l.currentTarget.contains(l.target) && y3("findCommand");
      },
      children: [
        !o.length && /* @__PURE__ */ b(
          "div",
          {
            style: {
              ...i({
                color: "gray.opacity.2"
              })
            },
            className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2",
            children: /* @__PURE__ */ b(Ke, { content: "no result" })
          }
        ),
        /* @__PURE__ */ b(
          hr,
          {
            data: o,
            itemSize: 30,
            focusId: "cmds/list",
            slotId: "cmds/list",
            countLastItems: -1,
            component: ({ data: l, status: m, handel: f, style: u }) => {
              var d;
              const p = W(!1), c = O.createRef();
              return /* @__PURE__ */ Y(
                "div",
                {
                  onMouseEnter: () => {
                    p.set(!0);
                  },
                  onMouseLeave: () => {
                    p.set(!1);
                  },
                  style: {
                    ...u,
                    ...i(p.get && "gray.opacity", m.isFocused && "secondry", m.isFocused && { color: "secondry.content" })
                  },
                  onClick: (v) => {
                    var h;
                    !((h = c.current) != null && h.contains(v.target)) && f.submit();
                  },
                  className: $(`
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
                    /* @__PURE__ */ Y("div", { className: "flex justify-between items-center gap-2 truncate", children: [
                      l.checked && /* @__PURE__ */ b(r3, { icon: i3 }),
                      /* @__PURE__ */ b("span", { children: l.content }),
                      l.sub && /* @__PURE__ */ b(
                        "div",
                        {
                          className: "inline-block mt-2 text-[10px]",
                          style: {
                            ...i({
                              color: "gray.opacity.2"
                            })
                          },
                          children: /* @__PURE__ */ b(W3, { value: l.sub })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ Y("span", { className: "inline-flex tools", children: [
                      l.keyPanding && /* @__PURE__ */ b(U2, { shortcut: l.keyPanding }),
                      /* @__PURE__ */ b("span", { ref: c, children: (p.get || m.isFocused) && ((d = l.tools) == null ? void 0 : d.map(({ icon: v, onClick: h }, y) => /* @__PURE__ */ b(
                        Be,
                        {
                          icon: v,
                          onClick: async () => {
                            const A = h == null ? void 0 : h();
                            if (y3("findCommand"), A instanceof Promise) {
                              Me("commands.isLoading", !0);
                              try {
                                await A;
                              } catch {
                              }
                              Me("commands.isLoading", !1);
                            }
                          }
                        },
                        y
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
const L0 = (e, t = "datetime-local") => t == "time" ? Or(e, "HH:mm") : t == "month" ? Or(e, "yyyy-MM") : t == "date" ? Or(e, "yyyy-MM-dd") : e.toISOString().replace(/\.[0-9]+Z/gi, "");
function li({ state: e, config: t = {}, id: r }) {
  const n = Z(), a = W(!1), o = n("secondry.background", {
    borderColor: "borders"
  }), s = W(!0), i = n(
    a.get && s.get && {
      borderColor: "primary"
    },
    a.get && !s.get && {
      borderColor: "checkbox.true"
    }
  ), l = or("no provided"), m = O.useCallback(() => {
    const f = /* @__PURE__ */ new Date();
    e.set(L0(f, t.format));
  }, [t.format]);
  return /* @__PURE__ */ Y(
    "div",
    {
      className: $(`
        border
        border-solid
        border-transparent
        rounded-[4px]
        flex
        px-1
      `),
      style: {
        ...o,
        ...i
      },
      children: [
        /* @__PURE__ */ b(
          C3,
          {
            id: r,
            style: {
              backgroundColor: "transparent"
            },
            type: t.format && ["date", "time", "month"].includes(t.format) ? t.format : "datetime-local",
            value: e.get ?? void 0,
            onKeyDown: (f) => {
              if (new R3("control+shift+d").test(f)) {
                f.preventDefault(), m();
                return;
              }
              new R3("control+backspace").test(f) && (f.preventDefault(), e.set(""));
            },
            onChange: (f) => {
              const u = f.currentTarget.value;
              if (!u) {
                s.set(!0);
                return;
              }
              s.set(!1), e.set(u);
            },
            className: $("p-1 border-none"),
            onBlur: () => {
              a.set(!1);
            },
            onFocus: () => {
              a.set(!0);
            },
            title: e.get || l
          }
        ),
        /* @__PURE__ */ b("div", { className: "inline-flex items-center tools", children: t.goToCurrent && /* @__PURE__ */ b(
          Be,
          {
            icon: no,
            onClick: () => {
              m();
            }
          }
        ) })
      ]
    }
  );
}
const F0 = "data:audio/wav;base64,UklGRsgsAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YaQsAADz/4P/qP6y/dn8NPzG+4n7ePuN+8X7HvyZ/DT98P3L/sf/4wAeAnkD9ASOBkoIJAodDDcObxDHEjwVqBeIGX8amRoRGhgZzhdOFqAUzBLZEMQOkQxACs0HPAWOAr//1fzJ+aP2W/P373Ls0egP5S7hM90a2ezUNNFzzinNZs3Rzg3R2NP/1m3aCt7V4cXl0ukA7lHyvfZN+/v/xASvCbUO2RMgGYYeBiSqKWcvSTU/O+FAU0V7SONJU0klR9NDuT8QOwU2uzA0K4Ulpx+rGYUTRQ3eBl4AuPnz8hTsFOXr3avWQ8+4xxPASLissEiqfKUaoo2gTqEUpF+otq3Rs2y6cMG2yD/Q+NfV39jnCfBd+MwAZQkYEvUa6yMNLUY2qz8pSdJSU1xbZGdqzW7Lcb9yDHESbVtnaWCSWAxQCUexPQc0JyoEILwVPwujANH11uq/33bUE8mGvcix46VbmpuQMomrgwCAAIAAgACAN4VYjNWURp5yqDazXb7nybvVwuEP7oL6JAf/EwchLS6NOwpJvlZ+ZEhxh3v/f/9//3//f/9//3//f/9/iXZaay9fL1KeRIE2CSgtGRQKp/r66iHbD8u4ujyq0JlYiwCAAIAAgACAAIAAgACAAIAAgACAAIAAgGKBPpbQq9TBVdgT7xAGWR3NNFBMC2Sze/9//3//f/9//3//f/9//3//f/9//3//f/9/0H53afBSojusIxkLGvLe2EO/gKV0jQCAAIAAgACAAIAAgACAAIAAgACAAIAAgACASI9opJK6s9F16doBnxreM0xN22RIeP9//3//f/9//3//f/9//3//f/9//39NdZ9gL0pSMjoZUP+M5OHJVLLknm2PJoMAgACAAIAAgACAAIAAgACA/oD0kVWlu7q70fHpMwNEHcs1hUohWxJoMXLcecZ//3//f/9//3/Mf/FzK2QhUXY7kyPzCXrw+dlfxzi426vYodWZNJPojXuJC4fiiOGPaZvQqmu9pdL06RQC4hcAKoQ4JEQxTVVUuFndXclg3GJNYvdceVJxQ5wwFhtLBjf0E+Wh2EnO5MUAvzS5ZbSEsIitFq6vs1C+QM2l35HyGwPZEP4bzyS6Ky0xXjVjOKA6+DvwO483+S1eIJcSbwYT/F3zMuxB5jXhG92d2bLWZ9Rw09/WYt9o6sH0dP2BBAUKVQ59EdITSxU7FoAWbRbiFMgQRwxECNAE8QGE/5j98fu2+qP56vg/+B74OPm7+ur7i/ys/Fv8tPvB+m759/cu9kL0FvSS90z8/wA0Be0IPgwnD80RGhQoFhAYqBe1EmkL1gO5/Cb2DvBW6gbl7d9K2yzZw9wL5kXyK/7bCFYSsBoSIo0oFS5WMFAsDCLoE2MF7Pe266Dgf9ZwzZzHH8g3z43c/u2C/5oP6h2eKsI1Sj02PtQ35Sp8GKAEs/F/4OfQBcRcvSu++8Um1O3nLP6PE+YmozeoQsxFIUFFNQsjBgzy82ndLcrcvcq5ib1uyKnZUPAZCtsiCjcSQ0VGVkH+NDIikgkz7orVvsTWvGS9osW/1N7pOQSBH/gzST+EQXw7+S3mGRoAIuWn0DvFpMI6yBzViOg2AScaXy2uN/U47jFyI48OFfeK4ZTSI8w7zifY/uis/bQRuiKmLA0uDieoGKsGD/Vm5Z7avtcU3Zbp/PjBB9gUvh6VIVwcFxGcBPP4dO7G5nzlmOs79cL+MgPlA+oI1RAMGoUjLij4I7IWOgMI8CbkPuJC6jT7oA+NHrcj+BpdB3P4IfQY++0LkB0dJk8jcRUSAZXxxuxS8xsDvBNaHLQZ0wwZ/Mzvgu3R9X0DEBD4FGUP7QMt+EzxAPSx/BsG6wzMC0MF/P0Q+Bb4d/xSATsFiAVCA8oA2P5i/rD+sf5m/hb/8gBYA1oFrgOs//D6H/hP+4kBMwg9CtIEUvza9BX1Jf2bB9YNHQoo/zD0W/El+VUGGQ8YDfEA+vP475f3KAZNDygNPwCE84PwMvkkB0sOBQpw/Yfz7vPI/aoIZQuABI76uvUW+jgC2AeqBZ//UfrY+r/+jwIBAwsBEf+O/tb+4v47/48AZgJzArz/Cvyw+xQAgQXdBfL/Kfkq+bwASwhFBx7+wPZs+eUDSwqTBVz6vvWa/DQHMQlsAJf3xPheAoAIUQRy+8f4qv5uBc4EBf9W+/P9RwL9ApsAg/68/nb//f+6AIsBTQCP/TP92QAYBEYBk/tD+64B5QXdAL35SPu6AzwGp/66+HP9ewU7BPv7CfrXABgFmwA3+079UwIlAoX+m/17/54AbAAaABf/Gf7g/2gCWgBb/Cj+VwMEAu/7x/yQA0cDJ/wY/CUDTQO//Kj8gQJoApj99/2eATcB7P4f/wMAbwCkACz/LP7cAOAB5/3I/cECYgFa/KD/uAP//s/8EwICAl/9K/8HAqn/mv4tAHsAFQAr/y3/NQH6/4797gCKASH9o/9vAtn9jf5RAhD/iv6BAer//P4YAEAA3f/r/oUAzgAY/qwAHAGJ/dsA4ADY/RQBSwCh/nkA7/9T/37/cQB0/zf/TAGa/ggAKQEy/iMB9P8+/+4Anv/D/0UACgAY//MAJv/3/78Al/4qARj/+/8vAHv/AwBcAEH/tQCS/w4AkQA5/wsBK/+OAMX/2/9NAKX/NQDt/67/TQA9/2kAQP88AJr/0f8NAFr/cwBR/7oAWf+CAI7/MwDs//P/9v/V/8v/7/+p/wEA4f/Q/xsAiP8PAKz/q//l/5//xv/O/9b/sv8xAKP/ZADs/y4AzP9IAO7/9f9CALv/DQDA/xYAtv/D/yoA2P8TAN3/9/8WAKb//v/p/9L/BwDj/wkAPwASADkAQQAFACgAMQD+/xYAEwDX/+P////c/9v/AADq/+T/AgAUAOv/2v/y//r/2//P/+L/6v/n/9z/5f/u/+X/0//F/8H/xP/J/7r/rP+g/5z/ov+s/7H/r/+t/6r/qP+j/5v/nv+h/6H/q/+z/7j/t/+x/7H/tP+x/6n/pP+b/5L/lP+U/5D/lv+U/4r/if+B/3//fP9//4H/g/+G/3r/df90/3f/ev+D/4z/iv+T/5j/mP+g/67/sv+0/6b/n/+h/5b/lP+a/5f/lv+c/5b/k/+M/4T/iP+E/4X/jf+N/43/j/+N/5D/jP+H/37/f/9+/3v/h/+S/47/iv+I/4T/hP+B/4D/gf+G/4r/i/+H/4H/fP92/3L/bf9r/3b/ff+B/4T/h/+K/43/iP9//3P/a/9j/1v/VP9M/0L/Pf85/0H/Sv9O/1P/WP9c/17/XP9b/1r/WP9P/0T/PP83/zL/Lf8p/yP/H/8b/xb/Df8C///+/v78/vz++/76/vn++P4B/wv/Ef8X/xz/If8m/yv/MP80/zj/NP8v/yr/Jf8g/xv/F/8S/w7/Cv8F/wL/Av8G/wv/Ef8W/xv/IP8k/yn/Lv8y/zf/O/8//0P/R/9L/0//Uv9W/1n/Xf9g/2P/Zv9q/23/cP9y/3X/eP97/33/gP+C/4X/h/+K/4z/jv+Q/5L/lP+W/5j/mv+c/57/oP+i/6P/pf+n/6j/qv+s/63/r/+w/7H/s/+0/7b/t/+4/7n/u/+8/73/vv+//8D/wf/C/8P/xP/F/8b/x//I/8n/yv/L/8z/zf/N/87/z//Q/9D/0f/S/9P/0//U/9X/1f/W/9b/1//Y/9j/2f/Z/9r/2//b/9z/3P/d/93/3v/e/97/3//f/+D/4P/h/+H/4f/i/+L/4//j/+P/5P/k/+T/5f/l/+X/5v/m/+b/5//n/+f/6P/o/+j/6P/p/+n/6f/p/+r/6v/q/+r/6//r/+v/6//r/+z/7P/s/+z/7P/t/+3/7f/t/+3/7v/u/+7/7v/u/+7/7//v/+//7//v/+//7//w//D/8P/w//D/8P/w//D/8f/x//H/8f/x//H/8f/x//L/8v/y//L/8v/y//L/8v/y//L/8//z//P/8//z//P/8//z//P/8//z//P/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9f/1//X/9f/1//X/9f/1//X/9f/1//X/9f/1//X/9f/1//X/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/7//j/9P/w/+3/6//p/+f/5v/m/+b/5//o/+n/6//u//H/9P/4//3/AQAFAAkADAAOABAAEgATABQAFAAUABMAEAALAAUA///5//P/7f/o/+P/3//b/9n/2P/Y/9j/2v/c/9//5P/p/+7/9P/5////BAAKAA8AFAAZABwAHwAhACIAIgAhACAAHQAaABYAEQAMAAcAAgD9//j/8//u/+n/5f/i/9//3f/c/9z/3f/e/+D/4//n/+z/8P/1//r///8DAAgADAARABUAGAAbAB0AHgAeAB4AHAAaABgAFAAQAAwACAADAP//+//2//L/7v/q/+f/5P/i/+H/4P/g/+H/4//l/+j/6//v//T/+P/8/wAABAAIAAwADwATABYAGAAZABoAGgAaABkAFwAUABEADgAKAAYAAgD+//r/9//z/+//7P/p/+b/5f/k/+P/4//k/+b/6P/r/+7/8v/1//n//f8AAAQACAALAA8AEgAUABYAFwAYABgAFwAWABQAEQAOAAsABwAEAAAA/f/5//b/8v/v/+z/6f/o/+b/5v/m/+b/5//p/+v/7v/y//X/+f/8/wAAAwAGAAoADQAQABIAFAAVABUAFQAVABMAEgAPAAwACQAGAAIA///7//j/9P/x/+7/7P/q/+n/6P/o/+j/6f/r/+z/7//y//X/+f/8/wAAAwAHAAoADQAPABEAEgATABMAEwASABEADwAMAAkABgADAP//+//4//X/8v/v/+3/7P/r/+r/6v/r/+z/7f/v//L/9f/4//z///8DAAYACQAMAA4AEAARABEAEQAQAA8ADgAMAAkABgADAP//+//4//X/8v/w/+7/7f/s/+z/7f/t/+//8P/z//b/+f/8/wAABAAHAAkACwANAA4ADwAPAA4ADQAMAAoACAAFAAEA/v/6//f/9P/y//H/8P/v/+//7//w//H/8//1//j/+//+/wIABQAHAAkACwAMAAwADAALAAoACQAHAAQAAQD+//v/+f/2//T/8//y//L/8v/y//P/9f/3//n//P/+/wEAAwAGAAcACAAJAAkACQAIAAYABQACAAAA/v/8//n/+P/2//X/9f/1//X/9v/3//n/+//9////AQACAAQABQAGAAYABQAFAAMAAgAAAP///f/8//r/+f/4//j/+P/4//n/+//8//3//v///wAAAQACAAIAAgACAAEAAAAAAP///v/+//3//P/8//v/+//8//z//f/9//3//v/+//7////////////////////////////////////+//7//v/+//3//f/9//z//P/8//z//f/9//7//////wAAAAABAAEAAQAAAP///v/9//z/+//7//r/+v/7//z//f/+/wAAAQACAAIAAgACAAEA///+//z/+//6//r/+v/6//z//f///wEAAgACAAMAAgABAAAA/v/8//v/+v/6//r/+//8//7/AAABAAIAAgACAAEA///+//z/+//7//v/+//8//3///8AAAEAAQABAAAA///+//3//P/8//z//f/9//7///8AAAAAAAD//////v/+//3//f/9//7//v/+//7//v/+//7//v////////////7//v/+//3//f/9//3//v//////AAAAAP///v/+//3//P/8//3//v///wAAAAAAAP///v/9//z//P/9//7///8AAAAAAAD///7//f/8//z//f/+////AAAAAP///v/9//3//f/9//7////////////+//7//v/+//7//v/+///////+//7//v/+//7//v/+//7//v/+//////////7//v/9//3//v////////////7//f/9//3//v///wAA///+//3//f/9//7//////////v/9//3//v////////////7//v/+//7//////////v/+//7//v/+//7//v/////////+//7//v/+//////////7//v/+//7//////////v/+//7//////////v/+//7//v///////v/+//7//v///////v/+//7//v/+//7//v////7//v/+//7///////7//v/+//7///////7//v/+///////+//7//v/////////+//7//v///////v/+//7//v/+//7//v/+//7//v///////v/+//7///////7//v///////v/+//7///////7//v/+/////v/+//7///////7//v/+//7////+//7//v///////v/+//7////+//7//v////7//v/+/////v/+//7////+//7//v////7//v/+//7////+//7//v////7//v///////v/+/////v/+///////+//7////+//7//v/+/////v/+/////v/+///////+//7////+//7////+//7////+//7//v////7//v///////v///////v///////v///////v////7//v/+/////v/+/////v/+/////v////7//v////7//v////7//v/+//7//v////7//v/+//7////+/////v/+/////v/+/////v/+//7//v////7////+//7//v/+//7//v/+/////v////7////+//7//v/+//7//v/+//7////+/////v/+//7//v/+//7////+/////v////7////+/////v/+//7////+/////v////7//v/+/////v////7//v////7//v/+//7//v////7//v////7////+/////v/+/////v/+//////////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";
function ia({ className: e, alt: t, src: r, children: n, style: a, ...o }) {
  const s = Z(), i = W(!1);
  return O.useEffect(() => {
  }, []), /* @__PURE__ */ Y(
    "div",
    {
      tabIndex: -1,
      ...o,
      className: $("overflow-hidden rounded-full w-[150px] h-[150px] border border-solid border-transparent transition-shadow duration-300 relative text-xs", e),
      style: {
        ...s(i.get && { borderColor: "primary" }),
        ...a
      },
      onFocus: () => {
        i.set(!0);
      },
      onBlur: () => {
        i.set(!1);
      },
      children: [
        r && /* @__PURE__ */ b("img", { src: r, className: $("absolute inset-0 w-full h-full object-cover"), draggable: !1 }),
        !r && /* @__PURE__ */ b("div", { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2", children: t }),
        /* @__PURE__ */ b("div", { className: "absolute inset-0 overflow-hidden", children: n })
      ]
    }
  );
}
const yr = O.forwardRef(({ children: e, onScroll: t, className: r, type: n = "normal", ...a }, o) => {
  const s = W(0), i = O.createRef(), l = (f) => {
    s.set(f.currentTarget.scrollTop), t && t(f);
  }, m = Z();
  return /* @__PURE__ */ Y("div", { ...a, ref: o, className: "scroll-view", children: [
    /* @__PURE__ */ b("div", { "aria-label": "scrolled-view", className: $("overflow-y-auto h-full w-full", r), ref: i, onScroll: l, children: e }),
    /* @__PURE__ */ b(
      "div",
      {
        "data-scrolled": s.get >= 10,
        className: "scroll-shadow-view",
        style: {
          ...m(
            s.get >= 10 && {
              boxShadow: je([
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
  ] });
});
function D0({ slotId: e, component: t, data: r, skipFn: n }) {
  const a = ce.getOneFeild(e, "focused"), o = ce.getOneFeild(e, "submited"), s = ce.getOneFeild(e, "selected"), i = ce.getOneFeild(e, "direction");
  Hn(e, r);
  const l = O.useMemo(() => t, []);
  O.useEffect(() => {
    if (typeof a != "number")
      return;
    const f = document.getElementById(Kt(e, a));
    f && !Kn(f) && Zn(f, i == "backward" ? 0 : -1);
  }, [a, i]);
  const m = O.useMemo(() => {
    if (!n)
      return {};
    const f = {};
    return r.forEach((u, p) => {
      if (n)
        f[p] = !!n(u, p);
      else
        return !1;
    }), f;
  }, [n, r]);
  return O.useEffect(() => {
    ce.setOneFeild(e, "skiped", m);
  }, [m]), /* @__PURE__ */ b(he, { children: r.map((f, u) => {
    const p = {
      isFocused: u == a,
      isSelected: !!(s != null && s[u]),
      isSubmited: u == o,
      isSkiped: !!(n && n(f, u))
    };
    return /* @__PURE__ */ b(
      l,
      {
        id: Kt(e, u),
        handelFocus: (c) => (d) => {
          ce.setOneFeild(e, "focused", u), c == null || c(d);
        },
        handelSubmit: (c) => (d) => {
          ce.setOneFeild(e, "submited", u), c == null || c(d);
        },
        handelSelect: (c) => (d) => {
        },
        tabIndex: p.isFocused ? 1 : -1,
        item: f,
        index: u,
        status: p
      },
      u
    );
  }) });
}
const ci = () => {
  const e = M3.getTemp("params"), t = M3.getTemp("id"), r = Z(), n = W(!1), a = M3.useTemp("checked");
  O.useEffect(() => {
    typeof (e == null ? void 0 : e.checkboxChecked) == "boolean" && a.set(e.checkboxChecked);
  }, [e]), O.useEffect(() => {
    ce.setOneFeild("dialog-list", "submited", null);
  }, [t]), O.useEffect(() => {
    ce.setOneFeild("dialog-list", "focused", (e == null ? void 0 : e.defaultId) || 0);
  }, [e]), Ae(
    "dialog.cancel",
    () => {
      typeof (e == null ? void 0 : e.cancelId) == "number" && ce.setOneFeild("dialog-list", "submited", e.cancelId);
    },
    [e]
  );
  const o = O.useMemo(() => t ? F0 : null, [t, e]);
  return ur(async () => {
    if (!o)
      return;
    const s = document.createElement("audio");
    s.src = o, await s.play();
  }, [t, e]), /* @__PURE__ */ b(Cs, { hidden: !t, children: /* @__PURE__ */ b(
    D2,
    {
      className: "lg:w-1/2 max-lg:w-2/3",
      list: [
        (e == null ? void 0 : e.title) && /* @__PURE__ */ b("div", { className: "p-2", children: /* @__PURE__ */ b("h1", { className: "text-2xl", children: e == null ? void 0 : e.title }) }),
        e && /* @__PURE__ */ Y("div", { className: "flex gap-5 p-2", children: [
          !e.icon && /* @__PURE__ */ Y(he, { children: [
            e.type == "question" && /* @__PURE__ */ b(Pe, { icon: ao, className: "text-4xl" }),
            e.type == "info" && /* @__PURE__ */ b(
              Pe,
              {
                style: {
                  ...r({
                    color: "notifay.info"
                  })
                },
                icon: oo,
                className: "text-4xl"
              }
            ),
            e.type == "warning" && /* @__PURE__ */ b(
              Pe,
              {
                style: {
                  ...r({
                    color: "notifay.warning"
                  })
                },
                icon: r2,
                className: "text-4xl"
              }
            )
          ] }),
          typeof e.icon == "string" && /* @__PURE__ */ b(ia, { src: e.icon }),
          /* @__PURE__ */ Y("div", { className: "inline-flex items-center w-full", children: [
            /* @__PURE__ */ b("span", { children: e.message }),
            e.detail && /* @__PURE__ */ b(
              Be,
              {
                className: "ml-2",
                onClick: () => {
                  n.set(!n.get);
                },
                icon: n.get ? so : io
              }
            )
          ] })
        ] }),
        n.get && (e == null ? void 0 : e.detail) && /* @__PURE__ */ b(yr, { className: "p-2 h-[30vh] overflow-y-auto", children: /* @__PURE__ */ b(W3, { value: e.detail }) }),
        e && /* @__PURE__ */ Y(Nt, { focusId: "dialog-list-focusable", className: "flex justify-between items-center p-2", children: [
          /* @__PURE__ */ b("div", { children: e.checkboxLabel && /* @__PURE__ */ b(
            z2,
            {
              id: "check",
              state: a,
              config: {
                style: "checkbox",
                onActive: `${e.checkboxLabel}`,
                onDisactive: `${e.checkboxLabel}`
              }
            }
          ) }),
          e.buttons && /* @__PURE__ */ b("div", { className: "flex gap-1", children: /* @__PURE__ */ b(
            D0,
            {
              slotId: "dialog-list",
              data: e.buttons,
              component: ({ item: s, index: i, status: l, handelSubmit: m, handelFocus: f }) => /* @__PURE__ */ b(
                e3,
                {
                  className: "px-4 max-md:w-full",
                  style: {
                    ...r(
                      i != e.defaultId && "gray.opacity",
                      i != e.defaultId && { color: "text.color" },
                      l.isFocused && {
                        outlineColor: "primary"
                      },
                      l.isSubmited && {
                        backgroundColor: "primary",
                        color: "primary.content"
                      }
                    )
                  },
                  onPointerDown: f(),
                  onClick: m(),
                  children: s
                },
                i
              )
            }
          ) })
        ] })
      ]
    }
  ) });
}, U0 = O.memo(
  ({ list: e }) => {
    const t = Z();
    return /* @__PURE__ */ b(
      hr,
      {
        itemSize: 30,
        data: e,
        focusId: De,
        slotId: De,
        countLastItems: -1,
        component: ({ data: { item: r, isChoised: n }, style: a, status: o, handel: s }) => {
          const i = W(!1), l = (r == null ? void 0 : r.content) || (r == null ? void 0 : r.value);
          return /* @__PURE__ */ Y(
            "div",
            {
              className: "flex justify-center items-center px-2 truncate",
              onPointerDown: () => {
                s.submit();
              },
              style: {
                ...t(
                  i.get && "primary.hover.background",
                  o.isFocused && {
                    backgroundColor: "primary",
                    color: "primary.content"
                  }
                ),
                ...a
              },
              onMouseEnter: () => i.set(!0),
              onMouseLeave: () => i.set(!1),
              children: [
                n && /* @__PURE__ */ b("b", { children: l }),
                !n && l
              ]
            }
          );
        }
      }
    );
  },
  (e, t) => {
    const r = e.list.length;
    return r != t.list.length ? !0 : mt(0, r).some((a) => !Ka(e.list[a], t.list[a]));
  }
), De = "enum/list";
function ui({ config: e = {}, id: t, state: r }) {
  var p, c;
  const n = O.createRef(), { position: a = "bottom" } = e, o = Z(), s = W(!1), i = O.useMemo(() => (e.list || []).map((d) => ({
    item: d,
    isChoised: d.value == r.get
  })), [e.list, r.get]), l = W(!1);
  Ae(
    "enum/next",
    () => {
      n.current == document.activeElement && l.get && ja(De);
    },
    [l.get]
  ), Ae(
    "enum/back",
    () => {
      n.current == document.activeElement && l.get && _a(De);
    },
    [l.get]
  );
  const m = Qr(i, De, "submited");
  O.useEffect(() => (Me("enum.focused", s.get), () => {
    Me("enum.focused", !1);
  }), [s.get]), O.useEffect(() => {
    const d = i.findIndex(({ isChoised: v }) => v);
    ce.setOneFeild(De, "focused", d >= 0 ? d : null);
  }, [i]), O.useEffect(() => {
    !l.get || !m || (r.set(m.item.value), ce.setOneFeild(De, "submited", null), l.set(!1));
  }, [m, l.get]), O.useEffect(() => {
    l.set(s.get);
  }, [s.get]), Ae(
    "enum.toggle.opening",
    () => {
      if (n.current != document.activeElement) {
        l.set(!1);
        return;
      }
      l.set((d) => !d), ce.setOneFeild(De, "focused", null);
    },
    [n]
  ), O.useEffect(() => {
    var v, h;
    if (!(!r.get || (v = e.list) != null && v.some(({ value: y }) => y == r.get)))
      if (e.nullable)
        r.set("");
      else {
        const y = (h = e.list) == null ? void 0 : h[0];
        y && r.set(y.value);
      }
  }, [e, r.get, i]);
  const f = O.useMemo(() => {
    var d;
    return (d = e.list) == null ? void 0 : d.find(({ value: v }) => v == r.get);
  }, [e, r.get]), u = Qr(i || [], De, "focused");
  return /* @__PURE__ */ Y("div", { className: "relative w-full", children: [
    /* @__PURE__ */ Y(
      "div",
      {
        id: t,
        ref: n,
        tabIndex: 1,
        onPointerDown: () => {
          s.get && Ue("enum.toggle.opening");
        },
        onKeyDown: (d) => {
          new R3("space").test(d) && l.set((v) => !v);
        },
        onFocus: () => {
          s.set(!0);
        },
        onBlur: () => {
          s.set(!1);
        },
        className: $(`
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
          ...o(
            "gray.opacity",
            {
              borderColor: "borders"
            },
            s.get && {
              borderColor: "primary",
              backgroundColor: "gray.opacity.2"
            }
          )
        },
        children: [
          /* @__PURE__ */ b("div", { className: "w-full text-center", children: (f == null ? void 0 : f.content) || (f == null ? void 0 : f.value) || "no option choised" }),
          e.expandIcon !== !1 && !!((p = e.list) != null && p.length) && /* @__PURE__ */ b(Pe, { icon: l.get ? e2 : lo })
        ]
      }
    ),
    l.get && !!((c = e.list) != null && c.length) && /* @__PURE__ */ Y(he, { children: [
      (u == null ? void 0 : u.item.desc) && /* @__PURE__ */ b(
        "div",
        {
          className: $(
            "z-[10000000] p-2 flex flex-col absolute overflow-hidden rounded-md border border-solid border-transparent w-full",
            a == "top" && "left-1/2 -translate-x-1/2 top-full my-2",
            a == "bottom" && "left-1/2 -translate-x-1/2 bottom-full my-2",
            a == "right" && "top-1/2 -translate-y-1/2 right-full mx-2",
            a == "left" && "top-1/2 -translate-y-1/2 left-full mx-2"
          ),
          style: {
            ...o("secondry.background", {
              borderColor: "borders"
            })
          },
          children: /* @__PURE__ */ b(yr, { className: "max-h-[150px]", children: /* @__PURE__ */ b(W3, { value: u.item.desc }) })
        }
      ),
      /* @__PURE__ */ b(
        "div",
        {
          className: $(
            ` 
              z-[10000000]
              h-[150px]
              flex
              flex-col
              absolute
              overflow-hidden
              rounded-md
              border border-solid border-transparent
              w-full
            `,
            a == "top" && "left-1/2 -translate-x-1/2 bottom-full my-2",
            a == "bottom" && "left-1/2 -translate-x-1/2 top-full my-2",
            a == "right" && "top-1/2 -translate-y-1/2 left-full mx-2",
            a == "left" && "top-1/2 -translate-y-1/2 right-full mx-2"
          ),
          style: {
            ...o("secondry.background", {
              borderColor: "borders"
            })
          },
          children: /* @__PURE__ */ b(U0, { list: i })
        }
      )
    ] })
  ] });
}
function $0({
  className: e,
  multiLines: t = !1,
  onChange: r,
  onKeyDown: n,
  onSelect: a,
  onSelectionChange: o,
  onValueChange: s,
  onFocus: i,
  onBlur: l,
  propositions: m,
  selection: f,
  style: u,
  tabSize: p = 4,
  supportTab: c = !1,
  hidden: d,
  acceptKeys: v,
  pattern: h,
  ...y
}) {
  const A = O.createRef(), C = La(), g = O.useMemo(() => Jn.join({ commandId: "input.completeWord" }, C, "commandId->command"), [C]), w = Z(), B = O.createRef(), k = W(0), E = O.useMemo(() => {
    var x, R;
    return (R = (x = y.value) == null ? void 0 : x.toString().match(/[^ ]*$/gi)) == null ? void 0 : R[0];
  }, [y.value]), S = O.useMemo(() => {
    const x = (m == null ? void 0 : m.filter((R) => E && R.length != (E == null ? void 0 : E.length) && R.startsWith(E))) || [];
    return Za(x).value;
  }, [m, E]), I = W(!1);
  O.useEffect(() => {
    B.current && (B.current.scrollTop = k.get);
  }, [k.get]), O.useEffect(() => () => {
    Me("input.focusedHasProposition", !1), Me("input.supportTab", !1), I.set(!1);
  }, []), O.useEffect(() => {
    !A.current || !f || A.current.setSelectionRange(f.start, f.end, f.direction);
  }, [A.current, f]);
  const T = O.useCallback((x) => {
    o == null || o({
      start: x.currentTarget.selectionStart,
      end: x.currentTarget.selectionEnd,
      direction: x.currentTarget.selectionDirection
    });
  }, []);
  return O.useEffect(() => {
    Me("input.focusedHasProposition", !!(I.get && S));
  }, [I.get, S]), O.useEffect(() => {
    Me("input.supportTab", I.get && c);
  }, [c, I.get]), Ae(
    "input.tab",
    () => {
      if (!I.get) return;
      const x = A.current;
      if (!x) return;
      const { selectionStart: R, selectionEnd: j, value: L } = x, Q = R, D = j, te = L.slice(0, R), q = L.slice(j), M = " ".repeat(p);
      x.value = te + M + q, x.setSelectionRange(Q + p, D + p, "forward"), s == null || s(x.value), o == null || o({
        start: x.selectionStart,
        end: x.selectionEnd,
        direction: x.selectionDirection
      });
    },
    [A, I.get, o, s]
  ), Ae(
    "input.completeWord",
    () => {
      I.get && A.current && (A.current.value = A.current.value.replace(/[^ ]+$/gi, "") + S + " ", s == null || s(A.current.value));
    },
    [A, I.get, S, s]
  ), Ae(
    "input.selectLine",
    () => {
      if (!I.get || !A.current)
        return;
      const x = A.current, { selectionStart: R, selectionEnd: j, value: L } = x, Q = L.slice(0, R), D = L.slice(j), te = Q.lastIndexOf(`
`) + 1;
      let q = D.indexOf(`
`);
      q === -1 && (q = D.length), x.setSelectionRange(te, j + q, "forward"), o == null || o({
        start: x.selectionStart,
        end: x.selectionEnd,
        direction: x.selectionDirection
      });
    },
    [A, I.get, o]
  ), Ae(
    "input.addLineBellow",
    () => {
      if (!I.get) return;
      const x = A.current;
      if (!x) return;
      const { selectionStart: R, selectionEnd: j, value: L } = x, Q = L.slice(0, R), D = L.slice(j), te = Q.lastIndexOf(`
`) + 1;
      let q = D.indexOf(`
`);
      q === -1 && (q = D.length);
      const M = L.slice(te, j + q);
      x.value = Q + `
` + M + D, x.setSelectionRange(R + M.length + 1, j + M.length + 1, "forward"), s == null || s(x.value), o == null || o({
        start: x.selectionStart,
        end: x.selectionEnd,
        direction: x.selectionDirection
      });
    },
    [A, I.get, o, s]
  ), /* @__PURE__ */ Y("div", { className: "relative flex w-full h-full", hidden: d, children: [
    /* @__PURE__ */ b(
      "textarea",
      {
        onScroll: (x) => {
          k.set(x.currentTarget.scrollTop);
        },
        ...y,
        onFocus: (x) => {
          I.set(!0), i == null || i(x);
        },
        onBlur: (x) => {
          I.set(!1), l == null || l(x);
        },
        style: {
          ...u,
          ...w({
            caretColor: "text.color"
          })
        },
        className: $(e, "font-[inherit] text-[inherit]"),
        spellCheck: !1,
        onSelect: (x) => {
          T(x), a == null || a(x);
        },
        ref: A,
        onKeyDown: (x) => {
          !t && x.key == "Enter" && x.preventDefault();
          const R = R3.fromEvent(x);
          v && v.some((j) => new RegExp(j, "igm").test(R)) && x.preventDefault(), n == null || n(x);
        },
        onChange: (x) => {
          r == null || r(x), s == null || s(x.currentTarget.value);
        }
      }
    ),
    /* @__PURE__ */ b("div", { ref: B, className: $(e, "absolute inset-0 pointer-events-none overflow-y-auto overflow-x-hidden"), children: /* @__PURE__ */ Y("pre", { className: "font-[inherit] text-wrap", children: [
      /* @__PURE__ */ b("span", { className: "text-transparent", children: y.value }),
      typeof E == "string" && S && /* @__PURE__ */ Y(he, { children: [
        /* @__PURE__ */ b(
          "span",
          {
            style: {
              ...w({
                color: "autoCompleteInput"
              })
            },
            children: S.replace(E, "")
          }
        ),
        !!g.length && /* @__PURE__ */ b(U2, { shortcut: g.map(({ value: x }) => x) })
      ] })
    ] }) })
  ] });
}
function fi({
  inputName: e,
  selectWhenFocusIn: t,
  placeholder: r,
  controlsPosition: n = "bottom",
  className: a,
  value: o,
  rows: s,
  style: i,
  controls: l,
  onFocus: m,
  onBlur: f,
  acceptHistory: u,
  propositions: p,
  ...c
}) {
  const d = Ne.getOneFeild(e, "value"), v = Ne.getOneFeild(e, "selection"), h = Ne.useOneFeild(e, "history"), y = Z(), A = W(!1);
  Qn(
    () => {
      !u && !d || h.set((g) => g ? [...g, d] : [d]);
    },
    [d, u],
    2e3
  ), Xn(e), O.useEffect(() => {
    Ne.setOneFeild(e, "controls", l || {});
  }, [l, e]);
  const C = O.useMemo(() => Object.entries(l || {}).map(([g, w]) => {
    try {
      const k = (d == null ? void 0 : d.match(new RegExp(g, "ig"))) ? "succ" : "err";
      return w[k] ? {
        type: k,
        content: w[k]
      } : void 0;
    } catch (B) {
      Ja.warn("expression not correct", B);
      return;
    }
  }).filter(Boolean).map((g) => g), [d, l]);
  return /* @__PURE__ */ Y("div", { className: "relative flex items-center w-full h-full", children: [
    /* @__PURE__ */ b(
      $0,
      {
        placeholder: `${r || ""}${A.get ? "..." : ""}`,
        propositions: p,
        className: $(
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
        onFocus: (g) => {
          t && g.currentTarget.select(), A.set(!0), m == null || m(g);
        },
        onBlur: (g) => {
          A.set(!1), f == null || f(g);
        },
        value: d,
        onValueChange: (g) => {
          Ne.setOneFeild(e, "value", g);
        },
        selection: v,
        onSelectionChange: (g) => {
          Ne.setOneFeild(e, "selection", g);
        },
        style: {
          ...y({
            borderColor: A.get ? "primary" : "borders",
            backgroundColor: "field.background"
          }),
          ...i
        },
        title: void 0,
        rows: s || 1,
        id: e,
        ...c
      }
    ),
    A.get && !!C.length && /* @__PURE__ */ b(
      "div",
      {
        className: $(
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
          ...y("primary.background", {
            borderColor: "borders"
          })
        },
        children: /* @__PURE__ */ b(
          w3,
          {
            list: C.map(({ content: g, type: w }, B) => {
              const k = w == "err" ? r2 : i3;
              return /* @__PURE__ */ Y("div", { className: "flex items-center gap-x-2 p-2", children: [
                /* @__PURE__ */ b(
                  Pe,
                  {
                    style: {
                      ...y(
                        w == "err" && {
                          color: "warning.text"
                        },
                        w == "succ" && {
                          color: "success.text"
                        }
                      )
                    },
                    icon: k
                  }
                ),
                g && /* @__PURE__ */ b(W3, { value: g })
              ] }, B);
            }),
            joinComponent: /* @__PURE__ */ b(Tt, {})
          }
        )
      }
    )
  ] });
}
function z3(e) {
  const t = dr();
  return new Promise((r, n) => {
    var s;
    if (!((s = e.buttons) != null && s.length)) {
      n("Need Minimum One Button");
      return;
    }
    M3.setTemp("id", t), M3.setTemp("params", e);
    const a = async () => {
      var f, u, p;
      const { slot: i, object: l } = Hr.getState(), m = (f = i.entities["dialog-list"]) == null ? void 0 : f.submited;
      typeof m == "number" && (r({
        response: m,
        checkboxChecked: ((p = (u = l.data) == null ? void 0 : u.dialog) == null ? void 0 : p.checked) || !1
      }), o(), Me("dialog.id", null));
    }, o = Hr.subscribe(a);
  });
}
const di = (e) => {
  d3.setTemp("position", [e.x, e.y]);
  const t = dr();
  d3.setTemp("id", t), d3.setTemp(
    "list",
    e.menu.map(({ click: r, ...n }) => n)
  ), Fa(
    "object.data.menu.result",
    (r) => typeof r == "number",
    (r) => {
      var a, o;
      const n = (a = r.object.data) == null ? void 0 : a.menu;
      if (typeof n == "object" && typeof n.result == "number" && n.id == t) {
        d3.setTemp("id", null), d3.setTemp("list", []), d3.setTemp("result", null);
        const s = e.menu[n.result];
        (o = s.click) == null || o.call(s);
      }
    }
  );
}, Y0 = (e) => new Promise((t, r) => {
  var a;
  const n = document.createElement("input");
  n.type = "file", e.filters ? n.accept = e.filters.map(({ name: o, extensions: s }) => `${o}.{${s.join(",")}`).join(",") : n.accept = "*", n.multiple = !!((a = e.properties) != null && a.includes("multiSelections")), n.onchange = async () => {
    var o;
    if ((o = n.files) != null && o.length) {
      const s = [];
      for (let l = 0; l < n.files.length; l++) {
        const m = n.files.item(l);
        m && s.push(m);
      }
      const i = await qa(s, async (l) => new Promise((m) => {
        const f = new FileReader();
        f.onload = () => {
          f.result && m(f.result.toString());
        }, f.readAsDataURL(l);
      }));
      t(i);
    }
  }, n.click(), n.onerror = r;
});
function mi({ state: e, config: t = {}, id: r }) {
  var s, i;
  const n = Z(), a = W(!1), o = _e("preferences/animation.boolean");
  return /* @__PURE__ */ Y(
    "div",
    {
      className: $("relative border border-solid border-transparent flex items-center gap-1 w-full px-3 py-1 rounded-md", o && "transition-[background-color] duration-200"),
      onMouseEnter: () => a.set(!0),
      onMouseLeave: () => a.set(!1),
      style: {
        ...n("gray.opacity", a.get && "gray.opacity.2", {
          borderColor: "borders"
        })
      },
      children: [
        /* @__PURE__ */ Y("div", { className: "relative flex flex-wrap gap-1 w-full", children: [
          (s = e.get) == null ? void 0 : s.map((l, m) => /* @__PURE__ */ Y(
            "span",
            {
              className: "inline-flex justify-between items-center px-2 py-1 rounded-md",
              style: {
                ...n("gray.opacity")
              },
              children: [
                /* @__PURE__ */ b(Co, { href: l, className: "max-w-[50px] truncate", children: l }),
                /* @__PURE__ */ b(
                  Be,
                  {
                    onClick: () => {
                      var f;
                      e.set(((f = e.get) == null ? void 0 : f.filter((u) => u != l)) || null);
                    },
                    icon: P3
                  }
                )
              ]
            },
            m
          )),
          !((i = e.get) != null && i.length) && /* @__PURE__ */ b("span", { className: "capitalize", children: /* @__PURE__ */ b(Ke, { content: "no files choised" }) })
        ] }),
        /* @__PURE__ */ Y("div", { className: "flex items-center gap-x-1 tools", children: [
          t.nullable && /* @__PURE__ */ b(
            Be,
            {
              onClick: () => {
                e.set(null);
              },
              icon: co
            }
          ),
          /* @__PURE__ */ b(
            Be,
            {
              id: `${r}:select`,
              icon: t2,
              onClick: async () => {
                const l = await Y0(t);
                e.set((m) => m ? [.../* @__PURE__ */ new Set([...m, ...l])] : l);
              }
            }
          )
        ] })
      ]
    }
  );
}
const W0 = ({ isSelected: e, item: t, toggle: r }) => {
  const n = W(!1), a = Z();
  return /* @__PURE__ */ Y(
    "button",
    {
      onMouseEnter: () => n.set(!0),
      onMouseLeave: () => n.set(!1),
      className: "inline-flex items-center gap-1 px-2 py-1 rounded-md text-nowrap cursor-pointer",
      tabIndex: -1,
      style: {
        ...a(
          {
            background: "gray.opacity"
          },
          n.get && {
            background: "gray.opacity.2"
          },
          e && {
            background: fr("to right", "secondry", "primary"),
            color: "secondry.content"
          }
        )
      },
      onClick: () => {
        r();
      },
      children: [
        /* @__PURE__ */ b(
          r3,
          {
            icon: i3,
            iconClassName: $(
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
        t
      ]
    }
  );
};
function vi({ id: e, config: t = {}, state: r }) {
  var n;
  return /* @__PURE__ */ b("div", { id: e, className: "flex flex-wrap gap-1 p-1 overflow-x-auto", tabIndex: 1, children: (n = t.list) == null ? void 0 : n.map((a, o) => {
    var i;
    const s = !!((i = r.get) != null && i.includes(a));
    return /* @__PURE__ */ b(
      W0,
      {
        item: a,
        isSelected: s,
        toggle: () => {
          var l;
          s ? r.set((l = r.get) == null ? void 0 : l.filter((m) => m != a)) : r.set([...r.get || [], a]);
        }
      },
      o
    );
  }) });
}
function pi() {
  const e = Ne.getOneFeild("findConfigurations", "value"), t = O.useMemo(() => {
    const n = Object.entries(uo).map(([s, i]) => ({
      iconName: s,
      icon: i,
      type: "solid"
    })), a = Object.entries(fo).map(([s, i]) => ({ iconName: s, icon: i, type: "regular" })), o = Object.entries(mo).map(([s, i]) => ({
      iconName: s,
      icon: i,
      type: "brad"
    }));
    return Jn.orderBy([...n, ...a, ...o], "iconName", "asc");
  }, []), r = O.useMemo(() => typeof e == "string" ? t.filter(({ iconName: n }) => vt(n, e)) : t, [t, e]);
  return O.useEffect(() => {
    Me("configurations.found.length", r.length);
  }, [r]), /* @__PURE__ */ b(
    hr,
    {
      countLastItems: -1,
      focusId: "icons-list",
      slotId: "icons-list",
      data: r,
      itemSize: 50,
      component: ({ data: n, style: a, status: o, index: s, handel: i }) => {
        const l = W(!1), m = Z(), f = O.useMemo(() => [l.get, o.isFocused, o.isSubmited].some(Boolean), [l.get, o]), u = W(!1);
        return /* @__PURE__ */ Y(
          "div",
          {
            onMouseEnter: () => l.set(!0),
            onMouseLeave: () => l.set(!1),
            style: {
              ...a,
              ...m(
                s % 2 && "primary.background",
                l.get && "gray.opacity",
                o.isFocused && { borderColor: "primary" },
                o.isSubmited && {
                  backgroundColor: "secondry",
                  color: "secondry.content"
                }
              )
            },
            className: $(`
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
              i.focus(), i.submit();
            },
            children: [
              /* @__PURE__ */ Y("div", { className: "flex items-center gap-x-2", children: [
                /* @__PURE__ */ b("div", { className: "flex justify-end w-[100px]", children: f && /* @__PURE__ */ b(he, { children: /* @__PURE__ */ b(
                  Be,
                  {
                    onMouseLeave: () => {
                      u.set(!1);
                    },
                    icon: u.get ? i3 : pt,
                    onClick: async () => {
                      const { icon: p, ...c } = n;
                      await navigator.clipboard.writeText(c.iconName), u.set(!0);
                    }
                  }
                ) }) }),
                /* @__PURE__ */ Y("span", { className: "capitalize", children: [
                  /* @__PURE__ */ b(
                    "span",
                    {
                      className: "px-1 rounded-md",
                      style: {
                        ...m("gray.opacity")
                      },
                      children: n.type
                    }
                  ),
                  /* @__PURE__ */ b("span", { children: " / " }),
                  ft(n.iconName.slice(2), "camel", "normal")
                ] })
              ] }),
              /* @__PURE__ */ b(Pe, { className: "text-3xl", icon: n.icon })
            ]
          }
        );
      }
    }
  );
}
function gi({ state: e, config: t }) {
  const r = Z(), n = _e("preferences/animation.boolean"), a = W(!1), o = e.get, s = O.useCallback(
    async (i) => {
      if (e.set) {
        if (!i)
          return e.set(null);
        try {
          e.set(i);
        } catch {
          e.set(null);
        }
      }
    },
    [e.set]
  );
  return /* @__PURE__ */ b("div", { className: "flex justify-center", children: /* @__PURE__ */ b(
    ia,
    {
      onMouseEnter: () => {
        a.set(!0);
      },
      onMouseLeave: () => {
        a.set(!1);
      },
      className: $("mb-1 border border-transparent border-solid rounded-2xl text-center text-xl italic", (t == null ? void 0 : t.rounded) && "rounded-full"),
      style: {
        ...r({
          borderColor: "borders",
          boxShadow: je([
            {
              colorId: "shadow.color",
              blur: 26,
              size: 1,
              x: 0,
              y: 2
            }
          ])
        })
      },
      alt: t == null ? void 0 : t.alt,
      src: o ?? void 0,
      children: /* @__PURE__ */ b(
        "div",
        {
          className: $(
            `
            flex
            opacity-100
            absolute
            left-1/2
            transform
            -translate-x-1/2
            bottom-0
            items-center
          `
          ),
          children: /* @__PURE__ */ Y(
            "div",
            {
              className: $(
                `
            inline-flex
            items-center
            rounded-ss-xl
            rounded-se-xl
            p-1
            text-xs
            border-solid
            border-t
            border-x            
            border-transparent
          `,
                !a.get && "translate-y-full pointer-events-none",
                n && "transition-transform"
              ),
              style: {
                ...r("secondry.background", {
                  borderColor: "borders"
                })
              },
              children: [
                o && /* @__PURE__ */ b(
                  Be,
                  {
                    onClick: async () => {
                      const { response: i } = await z3({
                        message: "do you want to recenlty this image",
                        title: "confirmation",
                        type: "warning",
                        buttons: ["no", "yes"],
                        defaultId: 1
                      });
                      i && s(null);
                    },
                    style: {
                      ...r({
                        color: "error"
                      })
                    },
                    icon: P3
                  }
                ),
                /* @__PURE__ */ b(
                  Be,
                  {
                    onClick: async () => {
                      if (o) {
                        const { response: l } = await z3({
                          message: "do you want to recenlty this image",
                          title: "confirmation",
                          type: "warning",
                          buttons: ["no", "yes"],
                          defaultId: 1
                        });
                        if (!l)
                          return;
                      }
                      const i = document.createElement("input");
                      i.type = "file", i.accept = "image/*", i.onchange = async () => {
                        var l;
                        if ((l = i.files) != null && l.length) {
                          const m = i.files[0], f = new FileReader();
                          f.onload = () => {
                            var u;
                            s(((u = f.result) == null ? void 0 : u.toString()) || null);
                          }, f.readAsDataURL(m);
                        }
                      }, i.click();
                    },
                    style: {
                      ...r(
                        o && {
                          color: "notifay.warning"
                        },
                        !o && {
                          color: "primary"
                        }
                      )
                    },
                    icon: t2
                  }
                ),
                /* @__PURE__ */ b(
                  Be,
                  {
                    style: {
                      ...r(
                        o && {
                          color: "notifay.warning"
                        },
                        !o && {
                          color: "primary"
                        }
                      )
                    },
                    onClick: async () => {
                      var i;
                      if (o) {
                        const { response: l } = await z3({
                          message: "do you want to recenlty this image",
                          title: "confirmation",
                          type: "warning",
                          buttons: ["no", "yes"],
                          defaultId: 1
                        });
                        if (!l)
                          return;
                      }
                      try {
                        const l = await Da("take");
                        (i = e.set) == null || i.call(e, l);
                      } catch (l) {
                        Ua(l, "error");
                      }
                    },
                    icon: qn
                  }
                )
              ]
            }
          )
        }
      )
    }
  ) });
}
function hi({
  "aria-selected": e,
  children: t,
  className: r,
  icon: n,
  iconClassName: a,
  onBlur: o,
  onFocus: s,
  onMouseEnter: i,
  onMouseLeave: l,
  onPointerDown: m,
  onPointerUp: f,
  style: u,
  ...p
}) {
  const c = W(!1), d = Z(), v = W(!1), h = W(!1);
  return /* @__PURE__ */ Y(
    "button",
    {
      onMouseEnter: (y) => {
        i == null || i(y), c.set(!0);
      },
      onMouseLeave: (y) => {
        l == null || l(y), c.set(!1), h.set(!1);
      },
      onFocus: (y) => {
        s == null || s(y), v.set(!0);
      },
      onBlur: (y) => {
        o == null || o(y), v.set(!1);
      },
      onPointerDown: (y) => {
        m == null || m(y), h.set(!0);
      },
      onPointerUp: (y) => {
        f == null || f(y), h.get && h.set(!1);
      },
      ...p,
      style: {
        ...d(
          h.get && "gray.opacity.2",
          c.get && "gray.opacity",
          v.get && {
            outlineColor: "primary"
          }
        ),
        ...u
      },
      className: $(
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
        r
      ),
      children: [
        /* @__PURE__ */ b(r3, { iconClassName: a, icon: n }),
        t,
        /* @__PURE__ */ b(
          "div",
          {
            className: $(
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
              ...d({
                background: fr("to right", "transparent", "gray.opacity", "transparent")
              })
            }
          }
        )
      ]
    }
  );
}
function bi() {
  const e = Z();
  return /* @__PURE__ */ b(
    "div",
    {
      className: "relative bg-opacity-10 h-[2px] pointer-events-none",
      style: {
        ...e("gray.opacity")
      },
      children: /* @__PURE__ */ b(
        "div",
        {
          className: $("absolute h-full left-1/2 transform -translate-x-1/2 animate-loading"),
          style: {
            ...e({
              background: fr("to right", "transparent", "primary", "primary", "primary", "transparent")
            })
          }
        }
      )
    }
  );
}
const yi = ({ className: e, circleClassName: t, ...r }) => {
  const n = Z();
  return /* @__PURE__ */ b("span", { children: /* @__PURE__ */ b("span", { className: $("relative inline-flex items-center justify-center text-xs w-[25px] h-[25px]", e), ...r, children: /* @__PURE__ */ b(
    "span",
    {
      className: $("absolute inline-block w-full h-full rounded-full border-[2px] border-solid border-transparent animate-spin", t),
      style: {
        ...n({
          borderTopColor: "primary",
          borderLeftColor: "primary",
          borderRightColor: "primary"
        })
      }
    }
  ) }) });
};
function ki({ pages: e = [], focused: t = 0 }) {
  const r = O.useMemo(() => e[t], [e, t]);
  return /* @__PURE__ */ Y(
    "div",
    {
      className: $(`
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
        left: `${-100 * t}%`
      },
      children: [
        /* @__PURE__ */ b(
          "div",
          {
            className: "h-full",
            style: {
              width: `${t / e.length * 100}%`
            }
          }
        ),
        /* @__PURE__ */ b(
          "div",
          {
            className: "h-full overflow-hidden",
            style: {
              width: `${1 / e.length * 100}%`
            },
            children: /* @__PURE__ */ b(yr, { children: r })
          }
        ),
        /* @__PURE__ */ b(
          "div",
          {
            className: "h-full",
            style: {
              width: `${(1 - (t + 1) / e.length) * 100}%`
            }
          }
        )
      ]
    }
  );
}
function wi({ onClick: e, className: t, children: r, iconClassName: n, ...a }) {
  const o = Z();
  return /* @__PURE__ */ b(
    "span",
    {
      onClick: (s) => {
        s.preventDefault(), e == null || e(s);
      },
      className: $(
        t,
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
        ...o("primary", {
          color: "primary.content"
        })
      },
      children: r
    }
  );
}
function Pi({ state: e, config: t = {}, id: r }) {
  O.useEffect(() => {
    typeof e.get == "number" && (typeof t.max == "number" && t.max < e.get ? e.set(t.max) : typeof t.min == "number" && t.min > e.get && e.set(t.min));
  }, [t.max, t.min, e.get]);
  const n = W(String(e.get)), a = O.createRef();
  O.useEffect(() => {
    var l;
    a.current && (a.current.value = ((l = e.get) == null ? void 0 : l.toString()) || "");
  }, [e.get, a.current]), O.useEffect(() => {
    if (!+n.get) {
      const l = document.getElementById(r);
      l == null || l.select();
    }
  }, [n.get, r]), Ae(
    "number.changeState",
    (l) => {
      if (l == r) {
        if (n.get.length) {
          const m = +n.get;
          e.set(m);
        } else
          e.set(null);
        y3(r);
      }
    },
    [n.get, r]
  ), Ae(
    "number.cancelChangeState",
    (l) => {
      if (l == r) {
        const m = typeof e.get == "number" ? e.get.toString() : "";
        n.set(m), a.current && (a.current.value = m), y3(r);
      }
    },
    [e.get, a, r]
  ), O.useEffect(() => {
    t.noConfirm && Ue("number.changeState", r);
  }, [n.get, t.noConfirm]);
  const o = W(!1), s = O.useMemo(() => !t.noConfirm && e.get != +n.get, [t.noConfirm, e.get, n.get]), i = Z();
  return /* @__PURE__ */ Y(
    "div",
    {
      className: $(`
        relative
        rounded-md
        flex
        items-center
        gap-1
        w-full
      `),
      children: [
        /* @__PURE__ */ b("div", { className: "flex items-center w-full", children: /* @__PURE__ */ b(
          C3,
          {
            ref: a,
            onFocus: (l) => {
              o.set(!0), l.currentTarget.select();
            },
            onBlur: () => {
              o.set(!1);
            },
            className: $(t.size == "small" ? "p-1" : "p-2", t.center && "text-center"),
            type: "number",
            id: r,
            min: t.min,
            max: t.max,
            placeholder: t.placeholder,
            onKeyDown: (l) => {
              s && l.key == "Enter" && (l.preventDefault(), l.stopPropagation(), l && Ue("number.changeState", r));
            },
            onValueChange: n.set
          }
        ) }),
        s && /* @__PURE__ */ Y("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ b(
            e3,
            {
              className: "py-1",
              onClick: () => {
                Ue("number.cancelChangeState", r);
              },
              style: {
                ...i("gray.opacity", {
                  color: "text.color"
                })
              },
              children: /* @__PURE__ */ b(Ke, { content: "cancel" })
            }
          ),
          /* @__PURE__ */ b(
            e3,
            {
              className: "py-1",
              onClick: () => {
                Ue("number.changeState", r);
              },
              children: /* @__PURE__ */ b(Ke, { content: "change" })
            }
          )
        ] })
      ]
    }
  );
}
function Bi({ state: e, id: t }) {
  return /* @__PURE__ */ b("div", { id: t, children: /* @__PURE__ */ b(Ke, { content: "The Object Is Defined Before" }) });
}
function Wr({ eays: e = !0, state: t, onFocus: r, onBlur: n, className: a, style: o, value: s, type: i, ...l }) {
  const m = Z(), f = W(!1), u = W(!1), p = O.createRef();
  return /* @__PURE__ */ Y("div", { className: "relative", children: [
    /* @__PURE__ */ b(
      "input",
      {
        ref: p,
        onFocus: (c) => {
          r == null || r(c), u.set(!0);
        },
        onBlur: (c) => {
          n == null || n(c), u.set(!1);
        },
        type: f.get ? "text" : "password",
        className: $("p-2 text-xs border border-solid border-transparent font-[inherit] whitespace-nowrap rounded-sm w-full", a),
        style: {
          ...m("field.background", {
            borderColor: u.get ? "primary" : "borders"
          }),
          ...o
        },
        onChange: ({ target: c }) => {
          t.set(c.value);
        },
        value: String(t.get || ""),
        ...l
      }
    ),
    e && /* @__PURE__ */ b(
      Be,
      {
        className: "top-1/2 right-2 absolute transform -translate-y-1/2",
        tabIndex: -1,
        onClick: () => {
          f.set((c) => !c), p.current && (p.current.focus(), p.current.setSelectionRange(0, 1e3, "forward"));
        },
        icon: f.get ? po : go
      }
    )
  ] });
}
function Ci({ state: e, config: t = {}, id: r }) {
  const n = W(void 0), a = W(void 0), o = W(void 0), s = O.useMemo(() => e.get ? n.get == e.get : !0, [n.get, e.get]), i = O.useMemo(() => a.get == o.get, [a.get, o.get]), l = O.useMemo(() => a.get == e.get, [a.get, e.get]);
  return Ae(
    "password.change",
    (m) => {
      r == m && (s && i && e.set(a.get), o.set(""), a.set(""), n.set(""));
    },
    [n.get, a.get, o.get, s, i, r]
  ), /* @__PURE__ */ Y("div", { className: "flex flex-col gap-1", children: [
    !!e.get && /* @__PURE__ */ b(Wr, { id: r, placeholder: "current password", state: n }),
    /* @__PURE__ */ b(Wr, { id: e.get ? void 0 : r, placeholder: "new password", state: a }),
    /* @__PURE__ */ b(Wr, { placeholder: "confirm password", state: o }),
    !a.get && !t.canEmpty && /* @__PURE__ */ b("span", { className: "p-1", children: /* @__PURE__ */ b(Ke, { content: "password cannot be empty" }) }),
    /* @__PURE__ */ b("div", { className: "flex justify-end items-center gap-1", children: s && i && !l && /* @__PURE__ */ b(
      e3,
      {
        onClick: () => {
          Ue("password.change", r);
        },
        icon: vo,
        className: "px-2 py-1",
        children: /* @__PURE__ */ b(Ke, { content: "change" })
      }
    ) })
  ] });
}
function Ai({ id: e, config: t, state: r }) {
  const n = Z(), a = ((t == null ? void 0 : t.match) || ".").split("-"), o = (l, m) => a.slice(0, l).reduce((u, p) => u + p.length, 0) + m, s = O.useMemo(() => {
    if (r.get)
      return r.get.toString();
  }, [r.get]), i = W(!1);
  return /* @__PURE__ */ Y(
    "div",
    {
      tabIndex: 1,
      onFocus: () => {
        y3(e);
      },
      children: [
        /* @__PURE__ */ b(
          "input",
          {
            onFocus: () => {
              i.set(!0);
            },
            onBlur: () => {
              i.set(!1);
            },
            type: "number",
            onInput: (l) => {
              const m = l.currentTarget.value;
              if (console.log(m.includes("e")), ["e", "."].some((p) => m.includes(p)))
                return;
              const f = +m;
              if (isNaN(f))
                return;
              if (!f) {
                r.set(void 0);
                return;
              }
              let u = a.reduce((p, c) => p + c.length, 0);
              m.length <= u && r.set(+parseInt(m));
            },
            onPaste: async () => {
              const m = +navigator.clipboard.readText();
              if (isNaN(m))
                return;
              if (!m) {
                r.set(void 0);
                return;
              }
              const f = m.toString();
              if (["e", "."].some((p) => f.includes(p)))
                return;
              let u = a.reduce((p, c) => p + c.length, 0);
              f.length <= u && r.set(+parseInt(f));
            },
            id: e,
            value: r.get,
            className: "w-[0px] h-[0px]"
          }
        ),
        /* @__PURE__ */ b(
          "div",
          {
            style: {
              ...n({
                boxShadow: je([
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
            className: "flex items-center gap-2 rounded-lg w-fit",
            children: /* @__PURE__ */ b(
              w3,
              {
                list: a.map((l, m) => {
                  const f = l.split(""), u = f.length;
                  return /* @__PURE__ */ b("div", { className: "flex", children: /* @__PURE__ */ b(
                    w3,
                    {
                      list: f.map((p, c) => /* @__PURE__ */ b(
                        "div",
                        {
                          className: $(
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
                            c == 0 && "rounded-ss-lg rounded-es-lg border-l",
                            c + 1 == u && "rounded-se-lg rounded-ee-lg"
                          ),
                          style: {
                            ...n(
                              {
                                borderColor: "borders"
                              },
                              i.get && {
                                color: "primary"
                              }
                            )
                          },
                          children: (s == null ? void 0 : s[o(m, c)]) || "."
                        },
                        c
                      )),
                      joinComponent: /* @__PURE__ */ b(he, {})
                    },
                    m
                  ) });
                }),
                joinComponent: /* @__PURE__ */ b(he, { children: "-" })
              }
            )
          }
        )
      ]
    }
  );
}
function xi({ id: e, state: t }) {
  const r = W(null), n = W([]), a = O.useRef(null), o = Z(), s = W(!1), i = W(!1), l = O.useCallback(async () => {
    const u = [];
    try {
      const p = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      if (p) {
        const c = new MediaRecorder(p);
        c.ondataavailable = (d) => {
          u.push(d.data), n.set(u);
        }, c.onstop = async () => {
          const d = new Blob(u, { type: "audio/mp3" });
          try {
            const v = URL.createObjectURL(d);
            t.set(v);
          } catch {
          }
        }, c.start(), r.set(c);
      } else
        n.set([]), r.set(null), await Vt({
          type: "error",
          title: "No audio stream detected",
          desc: "Please allow the audio stream to record the audio",
          id: "recorder.error",
          showDesc: !0
        });
    } catch (p) {
      n.set([]), r.set(null), await Vt({
        type: "error",
        title: "Error detected",
        desc: String(p.message),
        id: "recorder.error",
        showDesc: !0
      });
    }
  }, []), m = O.useCallback(() => {
    var u;
    (u = r.get) == null || u.stop();
  }, [r.get]);
  O.useEffect(() => () => {
    m();
  }, [m]), O.useEffect(() => {
    a.current && (a.current.onplay = () => {
      i.set(!0);
    }, a.current.onpause = () => {
      i.set(!1);
    }, a.current.onended = () => {
      i.set(!1);
    });
  }, [a.current]);
  const f = W(null);
  return O.useEffect(() => {
    if (i.get) {
      const u = setInterval(() => {
        f.set((p) => (p ?? 0) + 1);
      }, 1e3);
      return () => {
        clearInterval(u);
      };
    } else
      f.set(null);
  }, [i.get]), /* @__PURE__ */ b("div", { className: "flex gap-2", children: /* @__PURE__ */ Y("div", { className: "inline-flex relative gap-1", children: [
    t.get && /* @__PURE__ */ Y(he, { children: [
      /* @__PURE__ */ b(
        I3,
        {
          icon: P3,
          onClick: async () => {
            const { response: u } = await z3({
              title: "Delete audio",
              message: "Are you sure you want to delete the audio?",
              type: "warning",
              buttons: ["No", "Yes"]
            });
            u === 1 && t.set(null);
          }
        }
      ),
      /* @__PURE__ */ b(
        I3,
        {
          onClick: () => {
            var u, p;
            i.get ? (p = a.current) == null || p.pause() : (u = a.current) == null || u.play();
          },
          icon: i.get ? ho : bo
        }
      )
    ] }),
    /* @__PURE__ */ b(
      I3,
      {
        id: e,
        style: {
          ...o(
            s.get && {
              backgroundColor: "primary",
              color: "primary.content"
            }
          )
        },
        onClick: async () => {
          if (t.get) {
            const { response: u } = await z3({
              title: "Overwrite audio",
              message: "Are you sure you want to overwrite the audio?",
              type: "warning",
              buttons: ["No", "Yes"]
            });
            if (!u)
              return;
          }
          s.set((u) => !u), s.get ? m() : l();
        },
        icon: s.get ? yo : ko
      }
    ),
    t.get && /* @__PURE__ */ b("audio", { ref: a, src: t.get })
  ] }) });
}
function Ei({ state: e, id: t }) {
  const r = W("");
  O.useEffect(() => {
    r.set(e.get || "");
  }, [e.get]);
  const n = W(!1), a = O.useMemo(() => {
    try {
      return new RegExp(r.get), n.set(!0), null;
    } catch (s) {
      return String(s == null ? void 0 : s.message);
    }
  }, [r.get]), o = Z();
  return /* @__PURE__ */ Y("div", { children: [
    /* @__PURE__ */ Y("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ b(
        C3,
        {
          id: `${t}:input`,
          placeholder: "write your regexp here...",
          onFocus: (s) => {
            s.target.select();
          },
          onValueChange: e.set,
          value: e.get
        }
      ),
      !a && /* @__PURE__ */ b(
        e3,
        {
          className: "py-1",
          id: `${t}:submit`,
          onClick: () => {
            e.set(r.get), n.set(!1);
          },
          children: "Ok"
        }
      )
    ] }),
    a && /* @__PURE__ */ b(
      "div",
      {
        className: $(`
            mt-2
            p-1
            text-xs
            border
            border-solid
            border-transparent
            w-fit
          `),
        style: {
          ...o("error", {
            color: "error.content",
            borderColor: "error.border"
          })
        },
        children: a
      }
    )
  ] });
}
function Oi({ temp: e, animited: t, style: r, children: n, max: a = 0, min: o = 600, position: s = "left", hidden: i = !1, handelResize: l, className: m, ...f }) {
  const u = W(null);
  O.useEffect(() => {
    const g = $a(`resizeData.${e}`);
    u.set(g);
  }, []), Qn(
    () => {
      Me(`resizeData.${e}`, u.get);
    },
    [u.get],
    1e3
  );
  const p = O.createRef(), c = ["left", "right"].includes(s) ? "width" : "height";
  let d = 0;
  const v = W(null), h = typeof t == "boolean" ? t : _e("preferences/animation.boolean"), y = W(null);
  O.useEffect(() => {
    const g = () => {
      if (!u.get) return;
      const B = typeof o == "number" ? o : o(u.get), k = typeof a == "number" ? a : a(u.get);
      B >= u.get ? (v.set("min"), u.set(B)) : u.get >= k ? (v.set("max"), u.set(k)) : (v.set(null), u.set(u.get)), d = u.get;
    }, w = () => {
      y.set(null);
    };
    return addEventListener("resize", g), addEventListener("pointerup", w), () => {
      removeEventListener("resize", g), removeEventListener("pointerup", w);
    };
  }, [u.get, o, a]);
  const A = Z();
  O.useEffect(() => {
    const g = typeof o == "function" ? o(u.get || 0) : o;
    if (!u.get) {
      u.set(g);
      return;
    }
  }, [u.get, o, a]);
  const C = O.useMemo(() => y.get ? "start" : "end", [y.get]);
  return /* @__PURE__ */ Y("div", { className: "relative h-full", children: [
    /* @__PURE__ */ b(
      "div",
      {
        style: {
          [c]: i ? "0px" : `${u.get}px`,
          ...r
        },
        ...f,
        className: $("overflow-hidden", m, h && C == "end" && "transition-[width]"),
        ref: p,
        children: n
      }
    ),
    /* @__PURE__ */ b(
      "div",
      {
        className: $("resize-bar absolute transition-all opacity-0 cursor-e-resize z-[1000000] hover:opacity-100", s),
        onPointerDown: (g) => {
          const { currentTarget: w } = g;
          y.set(w.getBoundingClientRect());
        },
        style: {
          ...A({
            backgroundColor: "primary"
          })
        },
        children: /* @__PURE__ */ b(
          "div",
          {
            hidden: !y.get,
            onMouseMove: (g) => {
              var T;
              g.preventDefault();
              const { pageX: w, pageY: B } = g;
              if (!u)
                return;
              const k = (T = p == null ? void 0 : p.current) == null ? void 0 : T.getBoundingClientRect();
              let E = 0;
              switch (s) {
                case "right": {
                  E = w - Number(k == null ? void 0 : k.left);
                  break;
                }
                case "left": {
                  E = -w + Number(k == null ? void 0 : k.right);
                  break;
                }
                case "top": {
                  E = Number(k == null ? void 0 : k.bottom) - B;
                  break;
                }
                case "bottom": {
                  E = B - Number(k == null ? void 0 : k.top);
                  break;
                }
              }
              const S = typeof o == "number" ? o : o(E), I = typeof a == "number" ? a : a(E);
              S >= E ? (v.set("min"), u.set(S)) : E >= I ? (v.set("max"), u.set(I)) : (v.set(null), u.set(E)), d = E, l && l({ ...g, size: d, min: S, max: I });
            },
            className: "resize-overview"
          }
        )
      }
    )
  ] });
}
function Si({ data: e, slotId: t, focusId: r = t, component: n, children: a, handelSkipedItem: o, className: s, direction: i, ref: l, type: m = "horizontal", ...f }) {
  const u = typeof n == "function" ? n : ({ index: A, id: C, handelSubmit: g, handelFocus: w, handelSelect: B, status: k, item: E }) => {
    const S = W(!1), I = O.useMemo(() => S.get, [S.get]), T = A % 2 == 1, x = Z();
    return /* @__PURE__ */ Y(
      "div",
      {
        id: C,
        "data-is-odd": T,
        onMouseEnter: () => S.set(!0),
        onMouseLeave: () => S.set(!1),
        className: "border border-transparent border-solid cursor-pointer row",
        onClick: g(),
        onPointerDown: w(B()),
        style: {
          ...x(
            T && "secondry.background",
            S.get && "gray.opacity",
            (k.isFocused || k.isSubmited) && {
              borderColor: "primary"
            },
            (k.isSelected || k.isSubmited) && {
              backgroundColor: "secondry",
              color: "secondry.content"
            }
          )
        },
        children: [
          /* @__PURE__ */ b("div", { className: "col", children: /* @__PURE__ */ b("div", { className: $("w-[100px] flex items-center justify-end", !I && "invisible") }) }),
          n == null ? void 0 : n.map((R) => /* @__PURE__ */ b("div", { className: "col", children: `${E[R]}` }))
        ]
      }
    );
  }, p = ce.useOneFeild(t, "focused"), c = ce.useOneFeild(t, "submited"), d = ce.useOneFeild(t, "length"), v = ce.useOneFeild(t, "selected"), h = ce.useOneFeild(t, "direction"), y = O.useMemo(() => u, []);
  return O.useEffect(() => {
    d.set(e.length);
  }, [e]), O.useEffect(() => {
    if (typeof p.get != "number")
      return;
    const A = document.getElementById(`${t}/${p.get}`);
    A && !Kn(A) && Zn(A, h.get == "backward" ? 0 : -1);
  }, [p.get, h.get]), /* @__PURE__ */ b(Nt, { className: $("flex flex-col overflow-hidden h-full w-full", s), focusId: r, ...f, children: /* @__PURE__ */ Y(yr, { className: $(m == "vertical" && "flex"), children: [
    /* @__PURE__ */ b(he, { children: e.map((A, C) => {
      var w;
      const g = {
        isFocused: C == p.get,
        isSelected: !!((w = v.get) != null && w[C]),
        isSubmited: C == c.get,
        isSkiped: !!(o && o(A))
      };
      return /* @__PURE__ */ b(
        y,
        {
          id: `${t}/${C}`,
          handelFocus: (B) => (k) => {
            p.set(C), B == null || B(k);
          },
          handelSubmit: (B) => (k) => {
            c.set(C), B == null || B(k);
          },
          handelSelect: (B) => (k) => {
            k.ctrlKey ? v.set((E) => ({
              ...E,
              [C]: !(E != null && E[C])
            })) : v.set({
              [C]: !0
            }), B == null || B(k);
          },
          tabIndex: g.isFocused ? 1 : -1,
          item: A,
          index: C,
          status: g
        },
        C
      );
    }) }),
    a
  ] }) });
}
function Mi({ length: e = 4, starts: t = e, onSubmit: r }) {
  const n = Z();
  return /* @__PURE__ */ b(he, { children: mt(e).map((a, o) => /* @__PURE__ */ b(
    Pe,
    {
      style: {
        ...n({
          color: "starts.color"
        })
      },
      onClick: (s) => {
        r == null || r(o);
      },
      className: "transform hover:scale-150 transition-tansform duration-200",
      icon: t < a ? wo : Po
    },
    a
  )) });
}
function Ni({ state: e, config: t = {}, id: r }) {
  Xn(`${r}:input`);
  const n = Ne.useOneFeild(`${r}:input`, "value");
  Ae(
    "string.change",
    () => {
      const o = Zt();
      o && [r, `${r}:change`].includes(o) && e.set(n.get || "");
    },
    [n.get, r]
  ), Ae(
    "string.cancel",
    () => {
      if (t.uncancable)
        return;
      const o = Zt();
      if (o && [r, `${r}:cancel`].includes(o)) {
        const s = e.get || "";
        n.set(s), e.set(s);
      }
    },
    [e.get, r, t]
  );
  const a = Z();
  return /* @__PURE__ */ Y("div", { className: "flex justify-between items-center gap-3", children: [
    /* @__PURE__ */ b(
      C3,
      {
        maxLength: t.maxLength,
        minLength: t.minLength,
        type: t.locked ? "password" : "text",
        id: r,
        className: "text-xs",
        value: n.get,
        placeholder: t.hint || `provide value for ${r}`,
        onValueChange: n.set
      }
    ),
    (e.get || "") != (n.get || "") && /* @__PURE__ */ Y("div", { className: "flex items-cente gap-x-2", children: [
      !t.uncancable && /* @__PURE__ */ b(
        e3,
        {
          className: "w-fit",
          id: `${r}:cancel`,
          onClick: () => {
            Ue("string.cancel");
          },
          style: {
            ...a("gray.opacity.2")
          },
          children: "cancel"
        }
      ),
      /* @__PURE__ */ b(
        e3,
        {
          className: "w-fit",
          id: `${r}:change`,
          onClick: () => {
            Ue("string.change");
          },
          children: "change"
        }
      )
    ] })
  ] });
}
function Ti({ children: e, icon: t, className: r, iconClassName: n, isActive: a, style: o, ...s }) {
  const i = W(!1);
  O.useEffect(() => () => {
    i.set(!1);
  }, []);
  const l = Z();
  return /* @__PURE__ */ Y(
    "span",
    {
      onMouseEnter: () => {
        i.set(!0);
      },
      onMouseLeave: () => {
        i.set(!1);
      },
      style: {
        ...l(
          a && "primary",
          a && {
            color: "primary.content"
          },
          {
            borderColor: "borders"
          }
        ),
        ...o
      },
      className: $("styled-tab flex items-center justify-center p-2 rounded-[15%] cursor-pointer border border-solid", r),
      ...s,
      children: [
        /* @__PURE__ */ b(r3, { iconClassName: n, icon: t }),
        e
      ]
    }
  );
}
function Ii() {
  const e = Ya(), t = Wa(), r = Ha(), n = Qa(), a = Z();
  return /* @__PURE__ */ b(
    "div",
    {
      onTransitionEnd: () => {
        e || er(null);
      },
      className: $(
        `
          fixed
          z-[1000000000000000000000]
          pointer-events-none
          opacity-0
          transition-opacity
          delay-300
          duration-500
        `,
        t && "opacity-100",
        r == "left" && "-translate-x-full",
        r == "center" && "-translate-x-1/2",
        n == "top" && "-translate-y-full",
        n == "center" && "-translate-y-1/2",
        (e || e == 0) && "opacity-100"
      ),
      style: {
        ...dt(
          {
            left: "-1000px",
            top: "-2000px"
          },
          t && {
            left: `${t[0]}px`,
            top: `${t[1]}px`
          }
        )
      },
      children: /* @__PURE__ */ b(
        "div",
        {
          className: $(`
            border
            border-solid
            border-transparent
            rounded-lg
            m-3
            py-1
            px-2
          `),
          style: {
            ...a("secondry.background", {
              borderColor: "borders",
              boxShadow: je([{ colorId: "shadow.color", blur: 30, size: 1, x: 0, y: 10 }])
            })
          },
          children: /* @__PURE__ */ b(W3, { value: String(e) })
        }
      )
    }
  );
}
function H0({ treeId: e, tree: t = [], component: r, level: n = 0, position: a = "", parent: o }) {
  const s = O.useMemo(() => r, []), i = m3.getOne(e);
  return n == 0 && Xa(e), O.useEffect(() => {
    if (!i)
      return;
    const l = Array.from(new Set(i.ends)), m = `${a}${i.separator}${t.length}`;
    l.includes(m) || m3.setOneFeild(e, "ends", [...l, m]);
  }, [t, i]), /* @__PURE__ */ b(he, { children: t.map(({ data: l, innerTree: m }, f) => {
    var d, v;
    const u = `${a}${i == null ? void 0 : i.separator}${f}`, p = {
      data: l,
      parent: o
    }, c = {
      isFocused: u == (i == null ? void 0 : i.focused),
      isSelected: !!((d = i == null ? void 0 : i.selected) != null && d[u]),
      isSubmited: (i == null ? void 0 : i.submited) == u,
      isExpanded: !!((v = i == null ? void 0 : i.expanded) != null && v[u])
    };
    return /* @__PURE__ */ Y("div", { children: [
      /* @__PURE__ */ b(
        s,
        {
          status: c,
          handels: {
            focus() {
              i && m3.setOneFeild(e, "focused", u);
            },
            select(h, y) {
              i && m3.setOneFeild(
                e,
                "selected",
                h ? {
                  [u]: y
                } : {
                  ...i.selected,
                  [u]: y
                }
              );
            },
            submit() {
              i && m3.setOneFeild(e, "submited", u);
            },
            expand(h, y) {
              i && m3.setOneFeild(e, "expanded", {
                ...h ? {} : i.expanded || {},
                [u]: y
              });
            }
          },
          level: n,
          isFins: !m,
          position: u,
          data: l,
          index: f,
          parent: p,
          innerTree: m
        }
      ),
      Array.isArray(m) && c.isExpanded && /* @__PURE__ */ b("div", { children: /* @__PURE__ */ b(H0, { position: u, component: r, tree: m, treeId: e, level: n + 1, parent: p }) })
    ] }, f);
  }) });
}
function zi({ views: e, viewId: t }) {
  const r = Ga.getOneFeild(t, "focused"), n = r && e[r];
  return /* @__PURE__ */ b("div", { className: "flex flex-col w-full h-full overflow-hidden", children: n ? /* @__PURE__ */ b(n, {}) : /* @__PURE__ */ b(he, {}) });
}
export {
  $0 as $,
  Co as A,
  Cs as B,
  I3 as C,
  ri as D,
  ui as E,
  fi as F,
  ni as G,
  Ei as H,
  r3 as I,
  w3 as J,
  U2 as K,
  hi as L,
  W3 as M,
  wi as N,
  Bi as O,
  Ci as P,
  Oi as Q,
  xi as R,
  J0 as S,
  Ke as T,
  yr as U,
  D2 as V,
  Is as W,
  Si as X,
  Mi as Y,
  Ni as Z,
  Ti as _,
  q0 as a,
  Be as a0,
  Ii as a1,
  Mt as a2,
  H0 as a3,
  zi as a4,
  or as a5,
  Pe as a6,
  z3 as a7,
  Wr as a8,
  di as a9,
  ei as b,
  z2 as c,
  e3 as d,
  ti as e,
  ai as f,
  oi as g,
  si as h,
  ii as i,
  li as j,
  ci as k,
  hr as l,
  mi as m,
  vi as n,
  Nt as o,
  pi as p,
  ia as q,
  gi as r,
  C3 as s,
  Tt as t,
  bi as u,
  yi as v,
  D0 as w,
  ki as x,
  Pi as y,
  Ai as z
};
