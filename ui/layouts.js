import { a as A, E as M3, j as e, L as Z, f as Be, g as ge, u as s2, C as L2, T as H, F as A3, h as o3, S as w3, I as we, e as m5, c as F2, b as v5, P as h5, J as Pe, A as R2, d as k5 } from "./SeparatedComponents-DfUPj3TY.mjs";
import z, { useState as z2, useEffect as p5 } from "react";
import { v as $3, u as G, a as Y, i as Y3, e as S3, j as Ce, o as ye, g as Z3, k as be, l as B5, m as Ae, t as g5, n as w5, p as F3, b as s3, q as P5, s as d3, r as xe, w as l2, f as b3, x as B3, y as g3, d as Ne, z as J3, A as k2, B as C5, C as Me, D as K3, h as e2, E as D2, F as y5, G as b5, H as Q3, I as A5, J as v2, K as x5, L as O3, M as B2, N as N5, O as Se, P as M5, Q as E2, R as ze, S as te, T as S5, U as h3, V as p3, W as z5, X as E5, Y as ne, Z as ae, _ as I5, $ as O5, a0 as T5, a1 as Ee, a2 as j5, a3 as se, a4 as L5, a5 as M2, a6 as o2, a7 as F5, a8 as R5, a9 as D5, aa as U5, ab as _5, ac as Q5 } from "./index-8xvo7Uwy.mjs";
import { m as V3, t as U, e as i2, g as c2, s as c3, h as U2, i as g2, j as w2, c as z3, k as _2, d as Ie, D as V5, l as W5, n as G5, o as Oe, p as H5, q as Q2, u as V2, v as p2, w as X5, x as Te, y as Y5, z as je, A as K5, B as Le, C as $5, E as le, F as Z5, G as W2, H as J5, I as q5, J as e0, K as r0, L as o0, M as t0, N as n0, O as a0, P as Fe, Q as s0, S as l0, R as i0, T as c0, U as d0, V as I2, W as u0, X as f0, Y as m0, Z as v0, _ as h0, r as O2, $ as k0 } from "./index-Cep-AhVL.mjs";
import { q as p0, p as x3, C as k3, T as m3, b as d2, e as B0, u as g0, f as G2, K as P2, t as C2, r as w0, L as u2, M as f2, z as P0, V as Re, i as C0, d as y0, m as b0, n as De, B as Ue, A as A0, E as x0, O as N0, S as M0, N as S0, F as z0, P as E0, D as I0, R as O0, a as T0, I as j0, h as T2, l as _e, c as L0, j as F0, w as ie, y as R0 } from "./ViewPage-Bnm94RRL.mjs";
import { allIcons as T3 } from "./apis.js";
import { B as R3, C as q3 } from "./Card-BKH5_KnN.mjs";
const _r = ({ children: r, min: n, max: u }) => {
  const v = $3.useTemp("bottomSheet"), s = G(), l = Y(null);
  z.useEffect(() => {
    v.get && l.set(0);
  }, [v.get]);
  const a = Y(null), f = Y(!1), c = Y(!1);
  return z.useEffect(() => {
    if (!f.get)
      return;
    const B = (o) => {
      const { clientY: p } = o, t = -(innerHeight - (a.get ?? 0)) + p - 28 / 2;
      l.set(t);
    }, m = () => {
      f.set(!1);
    };
    return document.addEventListener("mousemove", B), document.addEventListener("mouseup", m), () => {
      document.removeEventListener("mousemove", B), document.removeEventListener("mouseup", m);
    };
  }, [f.get]), /* @__PURE__ */ A(M3, { children: [
    v.get && /* @__PURE__ */ e(
      "div",
      {
        className: "fixed inset-0",
        style: {
          ...s("shadow.color")
        },
        onClick: () => {
          v.set(!1), l.set(1e4);
        }
      }
    ),
    /* @__PURE__ */ A(
      p0,
      {
        onContentChange: (B) => {
          a.set(B.height);
        },
        style: {
          ...s("secondary.background", {
            borderColor: "borders"
          }),
          ...V3(
            v.get && typeof l.get == "number" && {
              transform: `translateY(${Math.max(l.get, 0)}px)`
            },
            n != null && {
              minHeight: n
            },
            u != null && {
              maxHeight: u
            }
          )
        },
        className: U(
          "fixed overflow-hidden z-[1000] flex-none min-h-[100px] flex flex-col max-h-[60vh] inset-x-0 bottom-0 border-x border-t border-solid border-transparent shadow-lg transform translate-y-full rounded-ss-3xl rounded-se-3xl",
          v.get && "translate-y-0",
          !c.get && "transition-transform duration-300"
        ),
        children: [
          /* @__PURE__ */ e(
            "div",
            {
              onTouchStart: () => {
                c.set(!1);
              },
              onTouchMove: (B) => {
                c.set(!0);
                const { clientY: m } = B.touches[0], p = -(innerHeight - (a.get ?? 0)) + m - 28 / 2;
                l.set(p);
              },
              onTouchEnd: () => {
                c.set(!1);
                const B = l.get;
                B && (B >= (a.get ?? 0) / 3 ? (l.set(1e4), v.set(!1)) : l.set(0));
              },
              onMouseDown: (B) => {
                f.set(!0), B.preventDefault();
              },
              children: /* @__PURE__ */ e(
                "div",
                {
                  style: {
                    ...s("secondary.background")
                  },
                  className: "z-[1000] flex justify-center items-center h-[28px]",
                  children: /* @__PURE__ */ e(
                    "div",
                    {
                      className: "rounded-full w-[70px] h-1.5 cursor-row-resize",
                      style: {
                        ...s("gray.opacity")
                      }
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ e(Z, {}),
          /* @__PURE__ */ e("div", { className: "h-full overflow-hidden", children: r })
        ]
      }
    )
  ] });
};
var Qe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
function Ve(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var j2 = { exports: {} }, t2 = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ce;
function D0() {
  if (ce) return t2;
  ce = 1;
  var r = z, n = Symbol.for("react.element"), u = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(f, c, B) {
    var m, o = {}, p = null, h = null;
    B !== void 0 && (p = "" + B), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (h = c.ref);
    for (m in c) v.call(c, m) && !l.hasOwnProperty(m) && (o[m] = c[m]);
    if (f && f.defaultProps) for (m in c = f.defaultProps, c) o[m] === void 0 && (o[m] = c[m]);
    return { $$typeof: n, type: f, key: p, ref: h, props: o, _owner: s.current };
  }
  return t2.Fragment = u, t2.jsx = a, t2.jsxs = a, t2;
}
var n2 = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var de;
function U0() {
  return de || (de = 1, process.env.NODE_ENV !== "production" && function() {
    var r = z, n = Symbol.for("react.element"), u = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), f = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), o = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), t = Symbol.iterator, i = "@@iterator";
    function g(d) {
      if (d === null || typeof d != "object")
        return null;
      var M = t && d[t] || d[i];
      return typeof M == "function" ? M : null;
    }
    var y = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(d) {
      {
        for (var M = arguments.length, E = new Array(M > 1 ? M - 1 : 0), _ = 1; _ < M; _++)
          E[_ - 1] = arguments[_];
        b("error", d, E);
      }
    }
    function b(d, M, E) {
      {
        var _ = y.ReactDebugCurrentFrame, $ = _.getStackAddendum();
        $ !== "" && (M += "%s", E = E.concat([$]));
        var q = E.map(function(X) {
          return String(X);
        });
        q.unshift("Warning: " + M), Function.prototype.apply.call(console[d], console, q);
      }
    }
    var k = !1, P = !1, C = !1, w = !1, N = !1, S;
    S = Symbol.for("react.module.reference");
    function I(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === v || d === l || N || d === s || d === B || d === m || w || d === h || k || P || C || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === o || d.$$typeof === a || d.$$typeof === f || d.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === S || d.getModuleId !== void 0));
    }
    function O(d, M, E) {
      var _ = d.displayName;
      if (_)
        return _;
      var $ = M.displayName || M.name || "";
      return $ !== "" ? E + "(" + $ + ")" : E;
    }
    function T(d) {
      return d.displayName || "Context";
    }
    function F(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case v:
          return "Fragment";
        case u:
          return "Portal";
        case l:
          return "Profiler";
        case s:
          return "StrictMode";
        case B:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case f:
            var M = d;
            return T(M) + ".Consumer";
          case a:
            var E = d;
            return T(E._context) + ".Provider";
          case c:
            return O(d, d.render, "ForwardRef");
          case o:
            var _ = d.displayName || null;
            return _ !== null ? _ : F(d.type) || "Memo";
          case p: {
            var $ = d, q = $._payload, X = $._init;
            try {
              return F(X(q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, j = 0, V, D, K, J, e3, R, r3;
    function l3() {
    }
    l3.__reactDisabledLog = !0;
    function Q() {
      {
        if (j === 0) {
          V = console.log, D = console.info, K = console.warn, J = console.error, e3 = console.group, R = console.groupCollapsed, r3 = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: l3,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        j++;
      }
    }
    function D3() {
      {
        if (j--, j === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, d, {
              value: V
            }),
            info: L({}, d, {
              value: D
            }),
            warn: L({}, d, {
              value: K
            }),
            error: L({}, d, {
              value: J
            }),
            group: L({}, d, {
              value: e3
            }),
            groupCollapsed: L({}, d, {
              value: R
            }),
            groupEnd: L({}, d, {
              value: r3
            })
          });
        }
        j < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var i3 = y.ReactCurrentDispatcher, t3;
    function E3(d, M, E) {
      {
        if (t3 === void 0)
          try {
            throw Error();
          } catch ($) {
            var _ = $.stack.trim().match(/\n( *(at )?)/);
            t3 = _ && _[1] || "";
          }
        return `
` + t3 + d;
      }
    }
    var v3 = !1, W3;
    {
      var j3 = typeof WeakMap == "function" ? WeakMap : Map;
      W3 = new j3();
    }
    function m2(d, M) {
      if (!d || v3)
        return "";
      {
        var E = W3.get(d);
        if (E !== void 0)
          return E;
      }
      var _;
      v3 = !0;
      var $ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var q;
      q = i3.current, i3.current = null, Q();
      try {
        if (M) {
          var X = function() {
            throw Error();
          };
          if (Object.defineProperty(X.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(X, []);
            } catch (I3) {
              _ = I3;
            }
            Reflect.construct(d, [], X);
          } else {
            try {
              X.call();
            } catch (I3) {
              _ = I3;
            }
            d.call(X.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I3) {
            _ = I3;
          }
          d();
        }
      } catch (I3) {
        if (I3 && _ && typeof I3.stack == "string") {
          for (var W = I3.stack.split(`
`), f3 = _.stack.split(`
`), n3 = W.length - 1, a3 = f3.length - 1; n3 >= 1 && a3 >= 0 && W[n3] !== f3[a3]; )
            a3--;
          for (; n3 >= 1 && a3 >= 0; n3--, a3--)
            if (W[n3] !== f3[a3]) {
              if (n3 !== 1 || a3 !== 1)
                do
                  if (n3--, a3--, a3 < 0 || W[n3] !== f3[a3]) {
                    var y3 = `
` + W[n3].replace(" at new ", " at ");
                    return d.displayName && y3.includes("<anonymous>") && (y3 = y3.replace("<anonymous>", d.displayName)), typeof d == "function" && W3.set(d, y3), y3;
                  }
                while (n3 >= 1 && a3 >= 0);
              break;
            }
        }
      } finally {
        v3 = !1, i3.current = q, D3(), Error.prepareStackTrace = $;
      }
      var X3 = d ? d.displayName || d.name : "", oe = X3 ? E3(X3) : "";
      return typeof d == "function" && W3.set(d, oe), oe;
    }
    function G3(d, M, E) {
      return m2(d, !1);
    }
    function U3(d) {
      var M = d.prototype;
      return !!(M && M.isReactComponent);
    }
    function P3(d, M, E) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return m2(d, U3(d));
      if (typeof d == "string")
        return E3(d);
      switch (d) {
        case B:
          return E3("Suspense");
        case m:
          return E3("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case c:
            return G3(d.render);
          case o:
            return P3(d.type, M, E);
          case p: {
            var _ = d, $ = _._payload, q = _._init;
            try {
              return P3(q($), M, E);
            } catch {
            }
          }
        }
      return "";
    }
    var N3 = Object.prototype.hasOwnProperty, _3 = {}, L3 = y.ReactDebugCurrentFrame;
    function u3(d) {
      if (d) {
        var M = d._owner, E = P3(d.type, d._source, M ? M.type : null);
        L3.setExtraStackFrame(E);
      } else
        L3.setExtraStackFrame(null);
    }
    function Ye(d, M, E, _, $) {
      {
        var q = Function.call.bind(N3);
        for (var X in d)
          if (q(d, X)) {
            var W = void 0;
            try {
              if (typeof d[X] != "function") {
                var f3 = Error((_ || "React class") + ": " + E + " type `" + X + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[X] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw f3.name = "Invariant Violation", f3;
              }
              W = d[X](M, X, _, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (n3) {
              W = n3;
            }
            W && !(W instanceof Error) && (u3($), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", E, X, typeof W), u3(null)), W instanceof Error && !(W.message in _3) && (_3[W.message] = !0, u3($), x("Failed %s type: %s", E, W.message), u3(null));
          }
      }
    }
    var C3 = Array.isArray;
    function y2(d) {
      return C3(d);
    }
    function Ke(d) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, E = M && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return E;
      }
    }
    function $e(d) {
      try {
        return H2(d), !1;
      } catch {
        return !0;
      }
    }
    function H2(d) {
      return "" + d;
    }
    function X2(d) {
      if ($e(d))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(d)), H2(d);
    }
    var r2 = y.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Y2, K2, b2;
    b2 = {};
    function Je(d) {
      if (N3.call(d, "ref")) {
        var M = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function qe(d) {
      if (N3.call(d, "key")) {
        var M = Object.getOwnPropertyDescriptor(d, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function e5(d, M) {
      if (typeof d.ref == "string" && r2.current && M && r2.current.stateNode !== M) {
        var E = F(r2.current.type);
        b2[E] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(r2.current.type), d.ref), b2[E] = !0);
      }
    }
    function r5(d, M) {
      {
        var E = function() {
          Y2 || (Y2 = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        E.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function o5(d, M) {
      {
        var E = function() {
          K2 || (K2 = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        E.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var t5 = function(d, M, E, _, $, q, X) {
      var W = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: d,
        key: M,
        ref: E,
        props: X,
        // Record the component responsible for creating this element.
        _owner: q
      };
      return W._store = {}, Object.defineProperty(W._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(W, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.defineProperty(W, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.freeze && (Object.freeze(W.props), Object.freeze(W)), W;
    };
    function n5(d, M, E, _, $) {
      {
        var q, X = {}, W = null, f3 = null;
        E !== void 0 && (X2(E), W = "" + E), qe(M) && (X2(M.key), W = "" + M.key), Je(M) && (f3 = M.ref, e5(M, $));
        for (q in M)
          N3.call(M, q) && !Ze.hasOwnProperty(q) && (X[q] = M[q]);
        if (d && d.defaultProps) {
          var n3 = d.defaultProps;
          for (q in n3)
            X[q] === void 0 && (X[q] = n3[q]);
        }
        if (W || f3) {
          var a3 = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          W && r5(X, a3), f3 && o5(X, a3);
        }
        return t5(d, W, f3, $, _, r2.current, X);
      }
    }
    var A2 = y.ReactCurrentOwner, $2 = y.ReactDebugCurrentFrame;
    function H3(d) {
      if (d) {
        var M = d._owner, E = P3(d.type, d._source, M ? M.type : null);
        $2.setExtraStackFrame(E);
      } else
        $2.setExtraStackFrame(null);
    }
    var x2;
    x2 = !1;
    function N2(d) {
      return typeof d == "object" && d !== null && d.$$typeof === n;
    }
    function Z2() {
      {
        if (A2.current) {
          var d = F(A2.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function a5(d) {
      return "";
    }
    var J2 = {};
    function s5(d) {
      {
        var M = Z2();
        if (!M) {
          var E = typeof d == "string" ? d : d.displayName || d.name;
          E && (M = `

Check the top-level render call using <` + E + ">.");
        }
        return M;
      }
    }
    function q2(d, M) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var E = s5(M);
        if (J2[E])
          return;
        J2[E] = !0;
        var _ = "";
        d && d._owner && d._owner !== A2.current && (_ = " It was passed a child from " + F(d._owner.type) + "."), H3(d), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, _), H3(null);
      }
    }
    function ee(d, M) {
      {
        if (typeof d != "object")
          return;
        if (y2(d))
          for (var E = 0; E < d.length; E++) {
            var _ = d[E];
            N2(_) && q2(_, M);
          }
        else if (N2(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var $ = g(d);
          if (typeof $ == "function" && $ !== d.entries)
            for (var q = $.call(d), X; !(X = q.next()).done; )
              N2(X.value) && q2(X.value, M);
        }
      }
    }
    function l5(d) {
      {
        var M = d.type;
        if (M == null || typeof M == "string")
          return;
        var E;
        if (typeof M == "function")
          E = M.propTypes;
        else if (typeof M == "object" && (M.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        M.$$typeof === o))
          E = M.propTypes;
        else
          return;
        if (E) {
          var _ = F(M);
          Ye(E, d.props, "prop", _, d);
        } else if (M.PropTypes !== void 0 && !x2) {
          x2 = !0;
          var $ = F(M);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $ || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function i5(d) {
      {
        for (var M = Object.keys(d.props), E = 0; E < M.length; E++) {
          var _ = M[E];
          if (_ !== "children" && _ !== "key") {
            H3(d), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), H3(null);
            break;
          }
        }
        d.ref !== null && (H3(d), x("Invalid attribute `ref` supplied to `React.Fragment`."), H3(null));
      }
    }
    function re(d, M, E, _, $, q) {
      {
        var X = I(d);
        if (!X) {
          var W = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var f3 = a5();
          f3 ? W += f3 : W += Z2();
          var n3;
          d === null ? n3 = "null" : y2(d) ? n3 = "array" : d !== void 0 && d.$$typeof === n ? (n3 = "<" + (F(d.type) || "Unknown") + " />", W = " Did you accidentally export a JSX literal instead of a component?") : n3 = typeof d, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", n3, W);
        }
        var a3 = n5(d, M, E, $, q);
        if (a3 == null)
          return a3;
        if (X) {
          var y3 = M.children;
          if (y3 !== void 0)
            if (_)
              if (y2(y3)) {
                for (var X3 = 0; X3 < y3.length; X3++)
                  ee(y3[X3], d);
                Object.freeze && Object.freeze(y3);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ee(y3, d);
        }
        return d === v ? i5(a3) : l5(a3), a3;
      }
    }
    function c5(d, M, E) {
      return re(d, M, E, !0);
    }
    function d5(d, M, E) {
      return re(d, M, E, !1);
    }
    var u5 = d5, f5 = c5;
    n2.Fragment = v, n2.jsx = u5, n2.jsxs = f5;
  }()), n2;
}
process.env.NODE_ENV === "production" ? j2.exports = D0() : j2.exports = U0();
var _0 = j2.exports, We = { exports: {} };
(function(r, n) {
  (function(v, s) {
    r.exports = s();
  })(typeof self < "u" ? self : Qe, function() {
    return (
      /******/
      function(u) {
        var v = {};
        function s(l) {
          if (v[l])
            return v[l].exports;
          var a = v[l] = {
            /******/
            i: l,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return u[l].call(a.exports, a, a.exports, s), a.l = !0, a.exports;
        }
        return s.m = u, s.c = v, s.d = function(l, a, f) {
          s.o(l, a) || Object.defineProperty(l, a, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: f
            /******/
          });
        }, s.n = function(l) {
          var a = l && l.__esModule ? (
            /******/
            function() {
              return l.default;
            }
          ) : (
            /******/
            function() {
              return l;
            }
          );
          return s.d(a, "a", a), a;
        }, s.o = function(l, a) {
          return Object.prototype.hasOwnProperty.call(l, a);
        }, s.p = "", s(s.s = 3);
      }([
        /* 0 */
        /***/
        function(u, v, s) {
          Object.defineProperty(v, "__esModule", { value: !0 });
          var l = (
            /** @class */
            function() {
              function a(f, c) {
                this.width = c, this.height = f.length / c, this.data = f;
              }
              return a.createEmpty = function(f, c) {
                return new a(new Uint8ClampedArray(f * c), f);
              }, a.prototype.get = function(f, c) {
                return f < 0 || f >= this.width || c < 0 || c >= this.height ? !1 : !!this.data[c * this.width + f];
              }, a.prototype.set = function(f, c, B) {
                this.data[c * this.width + f] = B ? 1 : 0;
              }, a.prototype.setRegion = function(f, c, B, m, o) {
                for (var p = c; p < c + m; p++)
                  for (var h = f; h < f + B; h++)
                    this.set(h, p, !!o);
              }, a;
            }()
          );
          v.BitMatrix = l;
        },
        /* 1 */
        /***/
        function(u, v, s) {
          Object.defineProperty(v, "__esModule", { value: !0 });
          var l = s(2);
          function a(c, B) {
            return c ^ B;
          }
          v.addOrSubtractGF = a;
          var f = (
            /** @class */
            function() {
              function c(B, m, o) {
                this.primitive = B, this.size = m, this.generatorBase = o, this.expTable = new Array(this.size), this.logTable = new Array(this.size);
                for (var p = 1, h = 0; h < this.size; h++)
                  this.expTable[h] = p, p = p * 2, p >= this.size && (p = (p ^ this.primitive) & this.size - 1);
                for (var h = 0; h < this.size - 1; h++)
                  this.logTable[this.expTable[h]] = h;
                this.zero = new l.default(this, Uint8ClampedArray.from([0])), this.one = new l.default(this, Uint8ClampedArray.from([1]));
              }
              return c.prototype.multiply = function(B, m) {
                return B === 0 || m === 0 ? 0 : this.expTable[(this.logTable[B] + this.logTable[m]) % (this.size - 1)];
              }, c.prototype.inverse = function(B) {
                if (B === 0)
                  throw new Error("Can't invert 0");
                return this.expTable[this.size - this.logTable[B] - 1];
              }, c.prototype.buildMonomial = function(B, m) {
                if (B < 0)
                  throw new Error("Invalid monomial degree less than 0");
                if (m === 0)
                  return this.zero;
                var o = new Uint8ClampedArray(B + 1);
                return o[0] = m, new l.default(this, o);
              }, c.prototype.log = function(B) {
                if (B === 0)
                  throw new Error("Can't take log(0)");
                return this.logTable[B];
              }, c.prototype.exp = function(B) {
                return this.expTable[B];
              }, c;
            }()
          );
          v.default = f;
        },
        /* 2 */
        /***/
        function(u, v, s) {
          Object.defineProperty(v, "__esModule", { value: !0 });
          var l = s(1), a = (
            /** @class */
            function() {
              function f(c, B) {
                if (B.length === 0)
                  throw new Error("No coefficients.");
                this.field = c;
                var m = B.length;
                if (m > 1 && B[0] === 0) {
                  for (var o = 1; o < m && B[o] === 0; )
                    o++;
                  if (o === m)
                    this.coefficients = c.zero.coefficients;
                  else {
                    this.coefficients = new Uint8ClampedArray(m - o);
                    for (var p = 0; p < this.coefficients.length; p++)
                      this.coefficients[p] = B[o + p];
                  }
                } else
                  this.coefficients = B;
              }
              return f.prototype.degree = function() {
                return this.coefficients.length - 1;
              }, f.prototype.isZero = function() {
                return this.coefficients[0] === 0;
              }, f.prototype.getCoefficient = function(c) {
                return this.coefficients[this.coefficients.length - 1 - c];
              }, f.prototype.addOrSubtract = function(c) {
                var B;
                if (this.isZero())
                  return c;
                if (c.isZero())
                  return this;
                var m = this.coefficients, o = c.coefficients;
                m.length > o.length && (B = [o, m], m = B[0], o = B[1]);
                for (var p = new Uint8ClampedArray(o.length), h = o.length - m.length, t = 0; t < h; t++)
                  p[t] = o[t];
                for (var t = h; t < o.length; t++)
                  p[t] = l.addOrSubtractGF(m[t - h], o[t]);
                return new f(this.field, p);
              }, f.prototype.multiply = function(c) {
                if (c === 0)
                  return this.field.zero;
                if (c === 1)
                  return this;
                for (var B = this.coefficients.length, m = new Uint8ClampedArray(B), o = 0; o < B; o++)
                  m[o] = this.field.multiply(this.coefficients[o], c);
                return new f(this.field, m);
              }, f.prototype.multiplyPoly = function(c) {
                if (this.isZero() || c.isZero())
                  return this.field.zero;
                for (var B = this.coefficients, m = B.length, o = c.coefficients, p = o.length, h = new Uint8ClampedArray(m + p - 1), t = 0; t < m; t++)
                  for (var i = B[t], g = 0; g < p; g++)
                    h[t + g] = l.addOrSubtractGF(h[t + g], this.field.multiply(i, o[g]));
                return new f(this.field, h);
              }, f.prototype.multiplyByMonomial = function(c, B) {
                if (c < 0)
                  throw new Error("Invalid degree less than 0");
                if (B === 0)
                  return this.field.zero;
                for (var m = this.coefficients.length, o = new Uint8ClampedArray(m + c), p = 0; p < m; p++)
                  o[p] = this.field.multiply(this.coefficients[p], B);
                return new f(this.field, o);
              }, f.prototype.evaluateAt = function(c) {
                var B = 0;
                if (c === 0)
                  return this.getCoefficient(0);
                var m = this.coefficients.length;
                if (c === 1)
                  return this.coefficients.forEach(function(p) {
                    B = l.addOrSubtractGF(B, p);
                  }), B;
                B = this.coefficients[0];
                for (var o = 1; o < m; o++)
                  B = l.addOrSubtractGF(this.field.multiply(c, B), this.coefficients[o]);
                return B;
              }, f;
            }()
          );
          v.default = a;
        },
        /* 3 */
        /***/
        function(u, v, s) {
          Object.defineProperty(v, "__esModule", { value: !0 });
          var l = s(4), a = s(5), f = s(11), c = s(12);
          function B(p) {
            var h = c.locate(p);
            if (!h)
              return null;
            for (var t = 0, i = h; t < i.length; t++) {
              var g = i[t], y = f.extract(p, g), x = a.decode(y.matrix);
              if (x)
                return {
                  binaryData: x.bytes,
                  data: x.text,
                  chunks: x.chunks,
                  version: x.version,
                  location: {
                    topRightCorner: y.mappingFunction(g.dimension, 0),
                    topLeftCorner: y.mappingFunction(0, 0),
                    bottomRightCorner: y.mappingFunction(g.dimension, g.dimension),
                    bottomLeftCorner: y.mappingFunction(0, g.dimension),
                    topRightFinderPattern: g.topRight,
                    topLeftFinderPattern: g.topLeft,
                    bottomLeftFinderPattern: g.bottomLeft,
                    bottomRightAlignmentPattern: g.alignmentPattern
                  }
                };
            }
            return null;
          }
          var m = {
            inversionAttempts: "attemptBoth"
          };
          function o(p, h, t, i) {
            i === void 0 && (i = {});
            var g = m;
            Object.keys(g || {}).forEach(function(w) {
              g[w] = i[w] || g[w];
            });
            var y = g.inversionAttempts === "attemptBoth" || g.inversionAttempts === "invertFirst", x = g.inversionAttempts === "onlyInvert" || g.inversionAttempts === "invertFirst", b = l.binarize(p, h, t, y), k = b.binarized, P = b.inverted, C = B(x ? P : k);
            return !C && (g.inversionAttempts === "attemptBoth" || g.inversionAttempts === "invertFirst") && (C = B(x ? k : P)), C;
          }
          o.default = o, v.default = o;
        },
        /* 4 */
        /***/
        function(u, v, s) {
          Object.defineProperty(v, "__esModule", { value: !0 });
          var l = s(0), a = 8, f = 24;
          function c(o, p, h) {
            return o < p ? p : o > h ? h : o;
          }
          var B = (
            /** @class */
            function() {
              function o(p, h) {
                this.width = p, this.data = new Uint8ClampedArray(p * h);
              }
              return o.prototype.get = function(p, h) {
                return this.data[h * this.width + p];
              }, o.prototype.set = function(p, h, t) {
                this.data[h * this.width + p] = t;
              }, o;
            }()
          );
          function m(o, p, h, t) {
            if (o.length !== p * h * 4)
              throw new Error("Malformed data passed to binarizer.");
            for (var i = new B(p, h), g = 0; g < p; g++)
              for (var y = 0; y < h; y++) {
                var x = o[(y * p + g) * 4 + 0], b = o[(y * p + g) * 4 + 1], k = o[(y * p + g) * 4 + 2];
                i.set(g, y, 0.2126 * x + 0.7152 * b + 0.0722 * k);
              }
            for (var P = Math.ceil(p / a), C = Math.ceil(h / a), w = new B(P, C), N = 0; N < C; N++)
              for (var S = 0; S < P; S++) {
                for (var I = 0, O = 1 / 0, T = 0, y = 0; y < a; y++)
                  for (var g = 0; g < a; g++) {
                    var F = i.get(S * a + g, N * a + y);
                    I += F, O = Math.min(O, F), T = Math.max(T, F);
                  }
                var L = I / Math.pow(a, 2);
                if (T - O <= f && (L = O / 2, N > 0 && S > 0)) {
                  var j = (w.get(S, N - 1) + 2 * w.get(S - 1, N) + w.get(S - 1, N - 1)) / 4;
                  O < j && (L = j);
                }
                w.set(S, N, L);
              }
            var V = l.BitMatrix.createEmpty(p, h), D = null;
            t && (D = l.BitMatrix.createEmpty(p, h));
            for (var N = 0; N < C; N++)
              for (var S = 0; S < P; S++) {
                for (var K = c(S, 2, P - 3), J = c(N, 2, C - 3), I = 0, e3 = -2; e3 <= 2; e3++)
                  for (var R = -2; R <= 2; R++)
                    I += w.get(K + e3, J + R);
                for (var r3 = I / 25, e3 = 0; e3 < a; e3++)
                  for (var R = 0; R < a; R++) {
                    var g = S * a + e3, y = N * a + R, l3 = i.get(g, y);
                    V.set(g, y, l3 <= r3), t && D.set(g, y, !(l3 <= r3));
                  }
              }
            return t ? { binarized: V, inverted: D } : { binarized: V };
          }
          v.binarize = m;
        },
        /* 5 */
        /***/
        function(u, v, s) {
          Object.defineProperty(v, "__esModule", { value: !0 });
          var l = s(0), a = s(6), f = s(9), c = s(10);
          function B(k, P) {
            for (var C = k ^ P, w = 0; C; )
              w++, C &= C - 1;
            return w;
          }
          function m(k, P) {
            return P << 1 | k;
          }
          var o = [
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
            function(k) {
              return (k.y + k.x) % 2 === 0;
            },
            function(k) {
              return k.y % 2 === 0;
            },
            function(k) {
              return k.x % 3 === 0;
            },
            function(k) {
              return (k.y + k.x) % 3 === 0;
            },
            function(k) {
              return (Math.floor(k.y / 2) + Math.floor(k.x / 3)) % 2 === 0;
            },
            function(k) {
              return k.x * k.y % 2 + k.x * k.y % 3 === 0;
            },
            function(k) {
              return (k.y * k.x % 2 + k.y * k.x % 3) % 2 === 0;
            },
            function(k) {
              return ((k.y + k.x) % 2 + k.y * k.x % 3) % 2 === 0;
            }
          ];
          function h(k) {
            var P = 17 + 4 * k.versionNumber, C = l.BitMatrix.createEmpty(P, P);
            C.setRegion(0, 0, 9, 9, !0), C.setRegion(P - 8, 0, 8, 9, !0), C.setRegion(0, P - 8, 9, 8, !0);
            for (var w = 0, N = k.alignmentPatternCenters; w < N.length; w++)
              for (var S = N[w], I = 0, O = k.alignmentPatternCenters; I < O.length; I++) {
                var T = O[I];
                S === 6 && T === 6 || S === 6 && T === P - 7 || S === P - 7 && T === 6 || C.setRegion(S - 2, T - 2, 5, 5, !0);
              }
            return C.setRegion(6, 9, 1, P - 17, !0), C.setRegion(9, 6, P - 17, 1, !0), k.versionNumber > 6 && (C.setRegion(P - 11, 0, 3, 6, !0), C.setRegion(0, P - 11, 6, 3, !0)), C;
          }
          function t(k, P, C) {
            for (var w = p[C.dataMask], N = k.height, S = h(P), I = [], O = 0, T = 0, F = !0, L = N - 1; L > 0; L -= 2) {
              L === 6 && L--;
              for (var j = 0; j < N; j++)
                for (var V = F ? N - 1 - j : j, D = 0; D < 2; D++) {
                  var K = L - D;
                  if (!S.get(K, V)) {
                    T++;
                    var J = k.get(K, V);
                    w({ y: V, x: K }) && (J = !J), O = m(J, O), T === 8 && (I.push(O), T = 0, O = 0);
                  }
                }
              F = !F;
            }
            return I;
          }
          function i(k) {
            var P = k.height, C = Math.floor((P - 17) / 4);
            if (C <= 6)
              return c.VERSIONS[C - 1];
            for (var w = 0, N = 5; N >= 0; N--)
              for (var S = P - 9; S >= P - 11; S--)
                w = m(k.get(S, N), w);
            for (var I = 0, S = 5; S >= 0; S--)
              for (var N = P - 9; N >= P - 11; N--)
                I = m(k.get(S, N), I);
            for (var O = 1 / 0, T, F = 0, L = c.VERSIONS; F < L.length; F++) {
              var j = L[F];
              if (j.infoBits === w || j.infoBits === I)
                return j;
              var V = B(w, j.infoBits);
              V < O && (T = j, O = V), V = B(I, j.infoBits), V < O && (T = j, O = V);
            }
            if (O <= 3)
              return T;
          }
          function g(k) {
            for (var P = 0, C = 0; C <= 8; C++)
              C !== 6 && (P = m(k.get(C, 8), P));
            for (var w = 7; w >= 0; w--)
              w !== 6 && (P = m(k.get(8, w), P));
            for (var N = k.height, S = 0, w = N - 1; w >= N - 7; w--)
              S = m(k.get(8, w), S);
            for (var C = N - 8; C < N; C++)
              S = m(k.get(C, 8), S);
            for (var I = 1 / 0, O = null, T = 0, F = o; T < F.length; T++) {
              var L = F[T], j = L.bits, V = L.formatInfo;
              if (j === P || j === S)
                return V;
              var D = B(P, j);
              D < I && (O = V, I = D), P !== S && (D = B(S, j), D < I && (O = V, I = D));
            }
            return I <= 3 ? O : null;
          }
          function y(k, P, C) {
            var w = P.errorCorrectionLevels[C], N = [], S = 0;
            if (w.ecBlocks.forEach(function(J) {
              for (var e3 = 0; e3 < J.numBlocks; e3++)
                N.push({ numDataCodewords: J.dataCodewordsPerBlock, codewords: [] }), S += J.dataCodewordsPerBlock + w.ecCodewordsPerBlock;
            }), k.length < S)
              return null;
            k = k.slice(0, S);
            for (var I = w.ecBlocks[0].dataCodewordsPerBlock, O = 0; O < I; O++)
              for (var T = 0, F = N; T < F.length; T++) {
                var L = F[T];
                L.codewords.push(k.shift());
              }
            if (w.ecBlocks.length > 1)
              for (var j = w.ecBlocks[0].numBlocks, V = w.ecBlocks[1].numBlocks, O = 0; O < V; O++)
                N[j + O].codewords.push(k.shift());
            for (; k.length > 0; )
              for (var D = 0, K = N; D < K.length; D++) {
                var L = K[D];
                L.codewords.push(k.shift());
              }
            return N;
          }
          function x(k) {
            var P = i(k);
            if (!P)
              return null;
            var C = g(k);
            if (!C)
              return null;
            var w = t(k, P, C), N = y(w, P, C.errorCorrectionLevel);
            if (!N)
              return null;
            for (var S = N.reduce(function(D, K) {
              return D + K.numDataCodewords;
            }, 0), I = new Uint8ClampedArray(S), O = 0, T = 0, F = N; T < F.length; T++) {
              var L = F[T], j = f.decode(L.codewords, L.codewords.length - L.numDataCodewords);
              if (!j)
                return null;
              for (var V = 0; V < L.numDataCodewords; V++)
                I[O++] = j[V];
            }
            try {
              return a.decode(I, P.versionNumber);
            } catch {
              return null;
            }
          }
          function b(k) {
            if (k == null)
              return null;
            var P = x(k);
            if (P)
              return P;
            for (var C = 0; C < k.width; C++)
              for (var w = C + 1; w < k.height; w++)
                k.get(C, w) !== k.get(w, C) && (k.set(C, w, !k.get(C, w)), k.set(w, C, !k.get(w, C)));
            return x(k);
          }
          v.decode = b;
        },
        /* 6 */
        /***/
        function(u, v, s) {
          Object.defineProperty(v, "__esModule", { value: !0 });
          var l = s(7), a = s(8), f;
          (function(i) {
            i.Numeric = "numeric", i.Alphanumeric = "alphanumeric", i.Byte = "byte", i.Kanji = "kanji", i.ECI = "eci";
          })(f = v.Mode || (v.Mode = {}));
          var c;
          (function(i) {
            i[i.Terminator = 0] = "Terminator", i[i.Numeric = 1] = "Numeric", i[i.Alphanumeric = 2] = "Alphanumeric", i[i.Byte = 4] = "Byte", i[i.Kanji = 8] = "Kanji", i[i.ECI = 7] = "ECI";
          })(c || (c = {}));
          function B(i, g) {
            for (var y = [], x = "", b = [10, 12, 14][g], k = i.readBits(b); k >= 3; ) {
              var P = i.readBits(10);
              if (P >= 1e3)
                throw new Error("Invalid numeric value above 999");
              var C = Math.floor(P / 100), w = Math.floor(P / 10) % 10, N = P % 10;
              y.push(48 + C, 48 + w, 48 + N), x += C.toString() + w.toString() + N.toString(), k -= 3;
            }
            if (k === 2) {
              var P = i.readBits(7);
              if (P >= 100)
                throw new Error("Invalid numeric value above 99");
              var C = Math.floor(P / 10), w = P % 10;
              y.push(48 + C, 48 + w), x += C.toString() + w.toString();
            } else if (k === 1) {
              var P = i.readBits(4);
              if (P >= 10)
                throw new Error("Invalid numeric value above 9");
              y.push(48 + P), x += P.toString();
            }
            return { bytes: y, text: x };
          }
          var m = [
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
          function o(i, g) {
            for (var y = [], x = "", b = [9, 11, 13][g], k = i.readBits(b); k >= 2; ) {
              var P = i.readBits(11), C = Math.floor(P / 45), w = P % 45;
              y.push(m[C].charCodeAt(0), m[w].charCodeAt(0)), x += m[C] + m[w], k -= 2;
            }
            if (k === 1) {
              var C = i.readBits(6);
              y.push(m[C].charCodeAt(0)), x += m[C];
            }
            return { bytes: y, text: x };
          }
          function p(i, g) {
            for (var y = [], x = "", b = [8, 16, 16][g], k = i.readBits(b), P = 0; P < k; P++) {
              var C = i.readBits(8);
              y.push(C);
            }
            try {
              x += decodeURIComponent(y.map(function(w) {
                return "%" + ("0" + w.toString(16)).substr(-2);
              }).join(""));
            } catch {
            }
            return { bytes: y, text: x };
          }
          function h(i, g) {
            for (var y = [], x = "", b = [8, 10, 12][g], k = i.readBits(b), P = 0; P < k; P++) {
              var C = i.readBits(13), w = Math.floor(C / 192) << 8 | C % 192;
              w < 7936 ? w += 33088 : w += 49472, y.push(w >> 8, w & 255), x += String.fromCharCode(a.shiftJISTable[w]);
            }
            return { bytes: y, text: x };
          }
          function t(i, g) {
            for (var y, x, b, k, P = new l.BitStream(i), C = g <= 9 ? 0 : g <= 26 ? 1 : 2, w = {
              text: "",
              bytes: [],
              chunks: [],
              version: g
            }; P.available() >= 4; ) {
              var N = P.readBits(4);
              if (N === c.Terminator)
                return w;
              if (N === c.ECI)
                P.readBits(1) === 0 ? w.chunks.push({
                  type: f.ECI,
                  assignmentNumber: P.readBits(7)
                }) : P.readBits(1) === 0 ? w.chunks.push({
                  type: f.ECI,
                  assignmentNumber: P.readBits(14)
                }) : P.readBits(1) === 0 ? w.chunks.push({
                  type: f.ECI,
                  assignmentNumber: P.readBits(21)
                }) : w.chunks.push({
                  type: f.ECI,
                  assignmentNumber: -1
                });
              else if (N === c.Numeric) {
                var S = B(P, C);
                w.text += S.text, (y = w.bytes).push.apply(y, S.bytes), w.chunks.push({
                  type: f.Numeric,
                  text: S.text
                });
              } else if (N === c.Alphanumeric) {
                var I = o(P, C);
                w.text += I.text, (x = w.bytes).push.apply(x, I.bytes), w.chunks.push({
                  type: f.Alphanumeric,
                  text: I.text
                });
              } else if (N === c.Byte) {
                var O = p(P, C);
                w.text += O.text, (b = w.bytes).push.apply(b, O.bytes), w.chunks.push({
                  type: f.Byte,
                  bytes: O.bytes,
                  text: O.text
                });
              } else if (N === c.Kanji) {
                var T = h(P, C);
                w.text += T.text, (k = w.bytes).push.apply(k, T.bytes), w.chunks.push({
                  type: f.Kanji,
                  bytes: T.bytes,
                  text: T.text
                });
              }
            }
            if (P.available() === 0 || P.readBits(P.available()) === 0)
              return w;
          }
          v.decode = t;
        },
        /* 7 */
        /***/
        function(u, v, s) {
          Object.defineProperty(v, "__esModule", { value: !0 });
          var l = (
            /** @class */
            function() {
              function a(f) {
                this.byteOffset = 0, this.bitOffset = 0, this.bytes = f;
              }
              return a.prototype.readBits = function(f) {
                if (f < 1 || f > 32 || f > this.available())
                  throw new Error("Cannot read " + f.toString() + " bits");
                var c = 0;
                if (this.bitOffset > 0) {
                  var B = 8 - this.bitOffset, m = f < B ? f : B, o = B - m, p = 255 >> 8 - m << o;
                  c = (this.bytes[this.byteOffset] & p) >> o, f -= m, this.bitOffset += m, this.bitOffset === 8 && (this.bitOffset = 0, this.byteOffset++);
                }
                if (f > 0) {
                  for (; f >= 8; )
                    c = c << 8 | this.bytes[this.byteOffset] & 255, this.byteOffset++, f -= 8;
                  if (f > 0) {
                    var o = 8 - f, p = 255 >> o << o;
                    c = c << f | (this.bytes[this.byteOffset] & p) >> o, this.bitOffset += f;
                  }
                }
                return c;
              }, a.prototype.available = function() {
                return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
              }, a;
            }()
          );
          v.BitStream = l;
        },
        /* 8 */
        /***/
        function(u, v, s) {
          Object.defineProperty(v, "__esModule", { value: !0 }), v.shiftJISTable = {
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
        function(u, v, s) {
          Object.defineProperty(v, "__esModule", { value: !0 });
          var l = s(1), a = s(2);
          function f(o, p, h, t) {
            var i;
            p.degree() < h.degree() && (i = [h, p], p = i[0], h = i[1]);
            for (var g = p, y = h, x = o.zero, b = o.one; y.degree() >= t / 2; ) {
              var k = g, P = x;
              if (g = y, x = b, g.isZero())
                return null;
              y = k;
              for (var C = o.zero, w = g.getCoefficient(g.degree()), N = o.inverse(w); y.degree() >= g.degree() && !y.isZero(); ) {
                var S = y.degree() - g.degree(), I = o.multiply(y.getCoefficient(y.degree()), N);
                C = C.addOrSubtract(o.buildMonomial(S, I)), y = y.addOrSubtract(g.multiplyByMonomial(S, I));
              }
              if (b = C.multiplyPoly(x).addOrSubtract(P), y.degree() >= g.degree())
                return null;
            }
            var O = b.getCoefficient(0);
            if (O === 0)
              return null;
            var T = o.inverse(O);
            return [b.multiply(T), y.multiply(T)];
          }
          function c(o, p) {
            var h = p.degree();
            if (h === 1)
              return [p.getCoefficient(1)];
            for (var t = new Array(h), i = 0, g = 1; g < o.size && i < h; g++)
              p.evaluateAt(g) === 0 && (t[i] = o.inverse(g), i++);
            return i !== h ? null : t;
          }
          function B(o, p, h) {
            for (var t = h.length, i = new Array(t), g = 0; g < t; g++) {
              for (var y = o.inverse(h[g]), x = 1, b = 0; b < t; b++)
                g !== b && (x = o.multiply(x, l.addOrSubtractGF(1, o.multiply(h[b], y))));
              i[g] = o.multiply(p.evaluateAt(y), o.inverse(x)), o.generatorBase !== 0 && (i[g] = o.multiply(i[g], y));
            }
            return i;
          }
          function m(o, p) {
            var h = new Uint8ClampedArray(o.length);
            h.set(o);
            for (var t = new l.default(285, 256, 0), i = new a.default(t, h), g = new Uint8ClampedArray(p), y = !1, x = 0; x < p; x++) {
              var b = i.evaluateAt(t.exp(x + t.generatorBase));
              g[g.length - 1 - x] = b, b !== 0 && (y = !0);
            }
            if (!y)
              return h;
            var k = new a.default(t, g), P = f(t, t.buildMonomial(p, 1), k, p);
            if (P === null)
              return null;
            var C = c(t, P[0]);
            if (C == null)
              return null;
            for (var w = B(t, P[1], C), N = 0; N < C.length; N++) {
              var S = h.length - 1 - t.log(C[N]);
              if (S < 0)
                return null;
              h[S] = l.addOrSubtractGF(h[S], w[N]);
            }
            return h;
          }
          v.decode = m;
        },
        /* 10 */
        /***/
        function(u, v, s) {
          Object.defineProperty(v, "__esModule", { value: !0 }), v.VERSIONS = [
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
        function(u, v, s) {
          Object.defineProperty(v, "__esModule", { value: !0 });
          var l = s(0);
          function a(m, o, p, h) {
            var t = m.x - o.x + p.x - h.x, i = m.y - o.y + p.y - h.y;
            if (t === 0 && i === 0)
              return {
                a11: o.x - m.x,
                a12: o.y - m.y,
                a13: 0,
                a21: p.x - o.x,
                a22: p.y - o.y,
                a23: 0,
                a31: m.x,
                a32: m.y,
                a33: 1
              };
            var g = o.x - p.x, y = h.x - p.x, x = o.y - p.y, b = h.y - p.y, k = g * b - y * x, P = (t * b - y * i) / k, C = (g * i - t * x) / k;
            return {
              a11: o.x - m.x + P * o.x,
              a12: o.y - m.y + P * o.y,
              a13: P,
              a21: h.x - m.x + C * h.x,
              a22: h.y - m.y + C * h.y,
              a23: C,
              a31: m.x,
              a32: m.y,
              a33: 1
            };
          }
          function f(m, o, p, h) {
            var t = a(m, o, p, h);
            return {
              a11: t.a22 * t.a33 - t.a23 * t.a32,
              a12: t.a13 * t.a32 - t.a12 * t.a33,
              a13: t.a12 * t.a23 - t.a13 * t.a22,
              a21: t.a23 * t.a31 - t.a21 * t.a33,
              a22: t.a11 * t.a33 - t.a13 * t.a31,
              a23: t.a13 * t.a21 - t.a11 * t.a23,
              a31: t.a21 * t.a32 - t.a22 * t.a31,
              a32: t.a12 * t.a31 - t.a11 * t.a32,
              a33: t.a11 * t.a22 - t.a12 * t.a21
            };
          }
          function c(m, o) {
            return {
              a11: m.a11 * o.a11 + m.a21 * o.a12 + m.a31 * o.a13,
              a12: m.a12 * o.a11 + m.a22 * o.a12 + m.a32 * o.a13,
              a13: m.a13 * o.a11 + m.a23 * o.a12 + m.a33 * o.a13,
              a21: m.a11 * o.a21 + m.a21 * o.a22 + m.a31 * o.a23,
              a22: m.a12 * o.a21 + m.a22 * o.a22 + m.a32 * o.a23,
              a23: m.a13 * o.a21 + m.a23 * o.a22 + m.a33 * o.a23,
              a31: m.a11 * o.a31 + m.a21 * o.a32 + m.a31 * o.a33,
              a32: m.a12 * o.a31 + m.a22 * o.a32 + m.a32 * o.a33,
              a33: m.a13 * o.a31 + m.a23 * o.a32 + m.a33 * o.a33
            };
          }
          function B(m, o) {
            for (var p = f({ x: 3.5, y: 3.5 }, { x: o.dimension - 3.5, y: 3.5 }, { x: o.dimension - 6.5, y: o.dimension - 6.5 }, { x: 3.5, y: o.dimension - 3.5 }), h = a(o.topLeft, o.topRight, o.alignmentPattern, o.bottomLeft), t = c(h, p), i = l.BitMatrix.createEmpty(o.dimension, o.dimension), g = function(C, w) {
              var N = t.a13 * C + t.a23 * w + t.a33;
              return {
                x: (t.a11 * C + t.a21 * w + t.a31) / N,
                y: (t.a12 * C + t.a22 * w + t.a32) / N
              };
            }, y = 0; y < o.dimension; y++)
              for (var x = 0; x < o.dimension; x++) {
                var b = x + 0.5, k = y + 0.5, P = g(b, k);
                i.set(x, y, m.get(Math.floor(P.x), Math.floor(P.y)));
              }
            return {
              matrix: i,
              mappingFunction: g
            };
          }
          v.extract = B;
        },
        /* 12 */
        /***/
        function(u, v, s) {
          Object.defineProperty(v, "__esModule", { value: !0 });
          var l = 4, a = 0.5, f = 1.5, c = function(b, k) {
            return Math.sqrt(Math.pow(k.x - b.x, 2) + Math.pow(k.y - b.y, 2));
          };
          function B(b) {
            return b.reduce(function(k, P) {
              return k + P;
            });
          }
          function m(b, k, P) {
            var C, w, N, S, I = c(b, k), O = c(k, P), T = c(b, P), F, L, j;
            return O >= I && O >= T ? (C = [k, b, P], F = C[0], L = C[1], j = C[2]) : T >= O && T >= I ? (w = [b, k, P], F = w[0], L = w[1], j = w[2]) : (N = [b, P, k], F = N[0], L = N[1], j = N[2]), (j.x - L.x) * (F.y - L.y) - (j.y - L.y) * (F.x - L.x) < 0 && (S = [j, F], F = S[0], j = S[1]), { bottomLeft: F, topLeft: L, topRight: j };
          }
          function o(b, k, P, C) {
            var w = (B(h(b, P, C, 5)) / 7 + // Divide by 7 since the ratio is 1:1:3:1:1
            B(h(b, k, C, 5)) / 7 + B(h(P, b, C, 5)) / 7 + B(h(k, b, C, 5)) / 7) / 4;
            if (w < 1)
              throw new Error("Invalid module size");
            var N = Math.round(c(b, k) / w), S = Math.round(c(b, P) / w), I = Math.floor((N + S) / 2) + 7;
            switch (I % 4) {
              case 0:
                I++;
                break;
              case 2:
                I--;
                break;
            }
            return { dimension: I, moduleSize: w };
          }
          function p(b, k, P, C) {
            var w = [{ x: Math.floor(b.x), y: Math.floor(b.y) }], N = Math.abs(k.y - b.y) > Math.abs(k.x - b.x), S, I, O, T;
            N ? (S = Math.floor(b.y), I = Math.floor(b.x), O = Math.floor(k.y), T = Math.floor(k.x)) : (S = Math.floor(b.x), I = Math.floor(b.y), O = Math.floor(k.x), T = Math.floor(k.y));
            for (var F = Math.abs(O - S), L = Math.abs(T - I), j = Math.floor(-F / 2), V = S < O ? 1 : -1, D = I < T ? 1 : -1, K = !0, J = S, e3 = I; J !== O + V; J += V) {
              var R = N ? e3 : J, r3 = N ? J : e3;
              if (P.get(R, r3) !== K && (K = !K, w.push({ x: R, y: r3 }), w.length === C + 1))
                break;
              if (j += L, j > 0) {
                if (e3 === T)
                  break;
                e3 += D, j -= F;
              }
            }
            for (var l3 = [], Q = 0; Q < C; Q++)
              w[Q] && w[Q + 1] ? l3.push(c(w[Q], w[Q + 1])) : l3.push(0);
            return l3;
          }
          function h(b, k, P, C) {
            var w, N = k.y - b.y, S = k.x - b.x, I = p(b, k, P, Math.ceil(C / 2)), O = p(b, { x: b.x - S, y: b.y - N }, P, Math.ceil(C / 2)), T = I.shift() + O.shift() - 1;
            return (w = O.concat(T)).concat.apply(w, I);
          }
          function t(b, k) {
            var P = B(b) / B(k), C = 0;
            return k.forEach(function(w, N) {
              C += Math.pow(b[N] - w * P, 2);
            }), { averageSize: P, error: C };
          }
          function i(b, k, P) {
            try {
              var C = h(b, { x: -1, y: b.y }, P, k.length), w = h(b, { x: b.x, y: -1 }, P, k.length), N = {
                x: Math.max(0, b.x - b.y) - 1,
                y: Math.max(0, b.y - b.x) - 1
              }, S = h(b, N, P, k.length), I = {
                x: Math.min(P.width, b.x + b.y) + 1,
                y: Math.min(P.height, b.y + b.x) + 1
              }, O = h(b, I, P, k.length), T = t(C, k), F = t(w, k), L = t(S, k), j = t(O, k), V = Math.sqrt(T.error * T.error + F.error * F.error + L.error * L.error + j.error * j.error), D = (T.averageSize + F.averageSize + L.averageSize + j.averageSize) / 4, K = (Math.pow(T.averageSize - D, 2) + Math.pow(F.averageSize - D, 2) + Math.pow(L.averageSize - D, 2) + Math.pow(j.averageSize - D, 2)) / D;
              return V + K;
            } catch {
              return 1 / 0;
            }
          }
          function g(b, k) {
            for (var P = Math.round(k.x); b.get(P, Math.round(k.y)); )
              P--;
            for (var C = Math.round(k.x); b.get(C, Math.round(k.y)); )
              C++;
            for (var w = (P + C) / 2, N = Math.round(k.y); b.get(Math.round(w), N); )
              N--;
            for (var S = Math.round(k.y); b.get(Math.round(w), S); )
              S++;
            var I = (N + S) / 2;
            return { x: w, y: I };
          }
          function y(b) {
            for (var k = [], P = [], C = [], w = [], N = function(R) {
              for (var r3 = 0, l3 = !1, Q = [0, 0, 0, 0, 0], D3 = function(t3) {
                var E3 = b.get(t3, R);
                if (E3 === l3)
                  r3++;
                else {
                  Q = [Q[1], Q[2], Q[3], Q[4], r3], r3 = 1, l3 = E3;
                  var v3 = B(Q) / 7, W3 = Math.abs(Q[0] - v3) < v3 && Math.abs(Q[1] - v3) < v3 && Math.abs(Q[2] - 3 * v3) < 3 * v3 && Math.abs(Q[3] - v3) < v3 && Math.abs(Q[4] - v3) < v3 && !E3, j3 = B(Q.slice(-3)) / 3, m2 = Math.abs(Q[2] - j3) < j3 && Math.abs(Q[3] - j3) < j3 && Math.abs(Q[4] - j3) < j3 && E3;
                  if (W3) {
                    var G3 = t3 - Q[3] - Q[4], U3 = G3 - Q[2], P3 = { startX: U3, endX: G3, y: R }, N3 = P.filter(function(u3) {
                      return U3 >= u3.bottom.startX && U3 <= u3.bottom.endX || G3 >= u3.bottom.startX && U3 <= u3.bottom.endX || U3 <= u3.bottom.startX && G3 >= u3.bottom.endX && Q[2] / (u3.bottom.endX - u3.bottom.startX) < f && Q[2] / (u3.bottom.endX - u3.bottom.startX) > a;
                    });
                    N3.length > 0 ? N3[0].bottom = P3 : P.push({ top: P3, bottom: P3 });
                  }
                  if (m2) {
                    var _3 = t3 - Q[4], L3 = _3 - Q[3], P3 = { startX: L3, y: R, endX: _3 }, N3 = w.filter(function(C3) {
                      return L3 >= C3.bottom.startX && L3 <= C3.bottom.endX || _3 >= C3.bottom.startX && L3 <= C3.bottom.endX || L3 <= C3.bottom.startX && _3 >= C3.bottom.endX && Q[2] / (C3.bottom.endX - C3.bottom.startX) < f && Q[2] / (C3.bottom.endX - C3.bottom.startX) > a;
                    });
                    N3.length > 0 ? N3[0].bottom = P3 : w.push({ top: P3, bottom: P3 });
                  }
                }
              }, i3 = -1; i3 <= b.width; i3++)
                D3(i3);
              k.push.apply(k, P.filter(function(t3) {
                return t3.bottom.y !== R && t3.bottom.y - t3.top.y >= 2;
              })), P = P.filter(function(t3) {
                return t3.bottom.y === R;
              }), C.push.apply(C, w.filter(function(t3) {
                return t3.bottom.y !== R;
              })), w = w.filter(function(t3) {
                return t3.bottom.y === R;
              });
            }, S = 0; S <= b.height; S++)
              N(S);
            k.push.apply(k, P.filter(function(R) {
              return R.bottom.y - R.top.y >= 2;
            })), C.push.apply(C, w);
            var I = k.filter(function(R) {
              return R.bottom.y - R.top.y >= 2;
            }).map(function(R) {
              var r3 = (R.top.startX + R.top.endX + R.bottom.startX + R.bottom.endX) / 4, l3 = (R.top.y + R.bottom.y + 1) / 2;
              if (b.get(Math.round(r3), Math.round(l3))) {
                var Q = [R.top.endX - R.top.startX, R.bottom.endX - R.bottom.startX, R.bottom.y - R.top.y + 1], D3 = B(Q) / Q.length, i3 = i({ x: Math.round(r3), y: Math.round(l3) }, [1, 1, 3, 1, 1], b);
                return { score: i3, x: r3, y: l3, size: D3 };
              }
            }).filter(function(R) {
              return !!R;
            }).sort(function(R, r3) {
              return R.score - r3.score;
            }).map(function(R, r3, l3) {
              if (r3 > l)
                return null;
              var Q = l3.filter(function(i3, t3) {
                return r3 !== t3;
              }).map(function(i3) {
                return { x: i3.x, y: i3.y, score: i3.score + Math.pow(i3.size - R.size, 2) / R.size, size: i3.size };
              }).sort(function(i3, t3) {
                return i3.score - t3.score;
              });
              if (Q.length < 2)
                return null;
              var D3 = R.score + Q[0].score + Q[1].score;
              return { points: [R].concat(Q.slice(0, 2)), score: D3 };
            }).filter(function(R) {
              return !!R;
            }).sort(function(R, r3) {
              return R.score - r3.score;
            });
            if (I.length === 0)
              return null;
            var O = m(I[0].points[0], I[0].points[1], I[0].points[2]), T = O.topRight, F = O.topLeft, L = O.bottomLeft, j = x(b, C, T, F, L), V = [];
            j && V.push({
              alignmentPattern: { x: j.alignmentPattern.x, y: j.alignmentPattern.y },
              bottomLeft: { x: L.x, y: L.y },
              dimension: j.dimension,
              topLeft: { x: F.x, y: F.y },
              topRight: { x: T.x, y: T.y }
            });
            var D = g(b, T), K = g(b, F), J = g(b, L), e3 = x(b, C, D, K, J);
            return e3 && V.push({
              alignmentPattern: { x: e3.alignmentPattern.x, y: e3.alignmentPattern.y },
              bottomLeft: { x: J.x, y: J.y },
              topLeft: { x: K.x, y: K.y },
              topRight: { x: D.x, y: D.y },
              dimension: e3.dimension
            }), V.length === 0 ? null : V;
          }
          v.locate = y;
          function x(b, k, P, C, w) {
            var N, S, I;
            try {
              N = o(C, P, w, b), S = N.dimension, I = N.moduleSize;
            } catch {
              return null;
            }
            var O = {
              x: P.x - C.x + w.x,
              y: P.y - C.y + w.y
            }, T = (c(C, w) + c(C, P)) / 2 / I, F = 1 - 3 / T, L = {
              x: C.x + F * (O.x - C.x),
              y: C.y + F * (O.y - C.y)
            }, j = k.map(function(D) {
              var K = (D.top.startX + D.top.endX + D.bottom.startX + D.bottom.endX) / 4, J = (D.top.y + D.bottom.y + 1) / 2;
              if (b.get(Math.floor(K), Math.floor(J))) {
                var e3 = [D.top.endX - D.top.startX, D.bottom.endX - D.bottom.startX, D.bottom.y - D.top.y + 1];
                B(e3) / e3.length;
                var R = i({ x: Math.floor(K), y: Math.floor(J) }, [1, 1, 1], b), r3 = R + c({ x: K, y: J }, L);
                return { x: K, y: J, score: r3 };
              }
            }).filter(function(D) {
              return !!D;
            }).sort(function(D, K) {
              return D.score - K.score;
            }), V = T >= 15 && j.length ? j[0] : L;
            return { alignmentPattern: V, dimension: S };
          }
        }
        /******/
      ]).default
    );
  });
})(We);
var Q0 = We.exports, V0 = /* @__PURE__ */ Ve(Q0), Ge = { exports: {} };
(function(r, n) {
  (function(v, s) {
    r.exports = s(z);
  })(Qe, function(u) {
    return (
      /******/
      function(v) {
        var s = {};
        function l(a) {
          if (s[a])
            return s[a].exports;
          var f = s[a] = {
            /******/
            i: a,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return v[a].call(f.exports, f, f.exports, l), f.l = !0, f.exports;
        }
        return l.m = v, l.c = s, l.d = function(a, f, c) {
          l.o(a, f) || Object.defineProperty(a, f, { enumerable: !0, get: c });
        }, l.r = function(a) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
        }, l.t = function(a, f) {
          if (f & 1 && (a = l(a)), f & 8 || f & 4 && typeof a == "object" && a && a.__esModule) return a;
          var c = /* @__PURE__ */ Object.create(null);
          if (l.r(c), Object.defineProperty(c, "default", { enumerable: !0, value: a }), f & 2 && typeof a != "string") for (var B in a) l.d(c, B, (function(m) {
            return a[m];
          }).bind(null, B));
          return c;
        }, l.n = function(a) {
          var f = a && a.__esModule ? (
            /******/
            function() {
              return a.default;
            }
          ) : (
            /******/
            function() {
              return a;
            }
          );
          return l.d(f, "a", f), f;
        }, l.o = function(a, f) {
          return Object.prototype.hasOwnProperty.call(a, f);
        }, l.p = "", l(l.s = "./src/react-webcam.tsx");
      }({
        /***/
        "./src/react-webcam.tsx": (
          /*!******************************!*\
            !*** ./src/react-webcam.tsx ***!
            \******************************/
          /*! exports provided: default */
          /***/
          function(v, s, l) {
            l.r(s);
            var a = l(
              /*! react */
              "react"
            ), f = /* @__PURE__ */ function() {
              var p = function(h, t) {
                return p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, g) {
                  i.__proto__ = g;
                } || function(i, g) {
                  for (var y in g) g.hasOwnProperty(y) && (i[y] = g[y]);
                }, p(h, t);
              };
              return function(h, t) {
                p(h, t);
                function i() {
                  this.constructor = h;
                }
                h.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
              };
            }(), c = function() {
              return c = Object.assign || function(p) {
                for (var h, t = 1, i = arguments.length; t < i; t++) {
                  h = arguments[t];
                  for (var g in h) Object.prototype.hasOwnProperty.call(h, g) && (p[g] = h[g]);
                }
                return p;
              }, c.apply(this, arguments);
            }, B = function(p, h) {
              var t = {};
              for (var i in p) Object.prototype.hasOwnProperty.call(p, i) && h.indexOf(i) < 0 && (t[i] = p[i]);
              if (p != null && typeof Object.getOwnPropertySymbols == "function")
                for (var g = 0, i = Object.getOwnPropertySymbols(p); g < i.length; g++)
                  h.indexOf(i[g]) < 0 && Object.prototype.propertyIsEnumerable.call(p, i[g]) && (t[i[g]] = p[i[g]]);
              return t;
            };
            (function() {
              typeof window > "u" || (navigator.mediaDevices === void 0 && (navigator.mediaDevices = {}), navigator.mediaDevices.getUserMedia === void 0 && (navigator.mediaDevices.getUserMedia = function(h) {
                var t = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
                return t ? new Promise(function(i, g) {
                  t.call(navigator, h, i, g);
                }) : Promise.reject(new Error("getUserMedia is not implemented in this browser"));
              }));
            })();
            function m() {
              return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
            }
            var o = (
              /** @class */
              function(p) {
                f(h, p);
                function h(t) {
                  var i = p.call(this, t) || this;
                  return i.canvas = null, i.ctx = null, i.requestUserMediaId = 0, i.unmounted = !1, i.state = {
                    hasUserMedia: !1
                  }, i;
                }
                return h.prototype.componentDidMount = function() {
                  var t = this, i = t.state, g = t.props;
                  if (this.unmounted = !1, !m()) {
                    g.onUserMediaError("getUserMedia not supported");
                    return;
                  }
                  i.hasUserMedia || this.requestUserMedia(), g.children && typeof g.children != "function" && console.warn("children must be a function");
                }, h.prototype.componentDidUpdate = function(t) {
                  var i = this.props;
                  if (!m()) {
                    i.onUserMediaError("getUserMedia not supported");
                    return;
                  }
                  var g = JSON.stringify(t.audioConstraints) !== JSON.stringify(i.audioConstraints), y = JSON.stringify(t.videoConstraints) !== JSON.stringify(i.videoConstraints), x = t.minScreenshotWidth !== i.minScreenshotWidth, b = t.minScreenshotHeight !== i.minScreenshotHeight;
                  (y || x || b) && (this.canvas = null, this.ctx = null), (g || y) && (this.stopAndCleanup(), this.requestUserMedia());
                }, h.prototype.componentWillUnmount = function() {
                  this.unmounted = !0, this.stopAndCleanup();
                }, h.stopMediaStream = function(t) {
                  t && (t.getVideoTracks && t.getAudioTracks ? (t.getVideoTracks().map(function(i) {
                    t.removeTrack(i), i.stop();
                  }), t.getAudioTracks().map(function(i) {
                    t.removeTrack(i), i.stop();
                  })) : t.stop());
                }, h.prototype.stopAndCleanup = function() {
                  var t = this.state;
                  t.hasUserMedia && (h.stopMediaStream(this.stream), t.src && window.URL.revokeObjectURL(t.src));
                }, h.prototype.getScreenshot = function(t) {
                  var i = this, g = i.state, y = i.props;
                  if (!g.hasUserMedia)
                    return null;
                  var x = this.getCanvas(t);
                  return x && x.toDataURL(y.screenshotFormat, y.screenshotQuality);
                }, h.prototype.getCanvas = function(t) {
                  var i = this, g = i.state, y = i.props;
                  if (!this.video || !g.hasUserMedia || !this.video.videoHeight)
                    return null;
                  if (!this.ctx) {
                    var x = this.video.videoWidth, b = this.video.videoHeight;
                    if (!this.props.forceScreenshotSourceSize) {
                      var k = x / b;
                      x = y.minScreenshotWidth || this.video.clientWidth, b = x / k, y.minScreenshotHeight && b < y.minScreenshotHeight && (b = y.minScreenshotHeight, x = b * k);
                    }
                    this.canvas = document.createElement("canvas"), this.canvas.width = (t == null ? void 0 : t.width) || x, this.canvas.height = (t == null ? void 0 : t.height) || b, this.ctx = this.canvas.getContext("2d");
                  }
                  var P = this, C = P.ctx, w = P.canvas;
                  return C && w && (w.width = (t == null ? void 0 : t.width) || w.width, w.height = (t == null ? void 0 : t.height) || w.height, y.mirrored && (C.translate(w.width, 0), C.scale(-1, 1)), C.imageSmoothingEnabled = y.imageSmoothing, C.drawImage(this.video, 0, 0, (t == null ? void 0 : t.width) || w.width, (t == null ? void 0 : t.height) || w.height), y.mirrored && (C.scale(-1, 1), C.translate(-w.width, 0))), w;
                }, h.prototype.requestUserMedia = function() {
                  var t = this, i = this.props, g = function(b, k) {
                    var P = {
                      video: typeof k < "u" ? k : !0
                    };
                    i.audio && (P.audio = typeof b < "u" ? b : !0), t.requestUserMediaId++;
                    var C = t.requestUserMediaId;
                    navigator.mediaDevices.getUserMedia(P).then(function(w) {
                      t.unmounted || C !== t.requestUserMediaId ? h.stopMediaStream(w) : t.handleUserMedia(null, w);
                    }).catch(function(w) {
                      t.handleUserMedia(w);
                    });
                  };
                  if ("mediaDevices" in navigator)
                    g(i.audioConstraints, i.videoConstraints);
                  else {
                    var y = function(b) {
                      return { optional: [{ sourceId: b }] };
                    }, x = function(b) {
                      var k = b.deviceId;
                      return typeof k == "string" ? k : Array.isArray(k) && k.length > 0 ? k[0] : typeof k == "object" && k.ideal ? k.ideal : null;
                    };
                    MediaStreamTrack.getSources(function(b) {
                      var k = null, P = null;
                      b.forEach(function(N) {
                        N.kind === "audio" ? k = N.id : N.kind === "video" && (P = N.id);
                      });
                      var C = x(i.audioConstraints);
                      C && (k = C);
                      var w = x(i.videoConstraints);
                      w && (P = w), g(y(k), y(P));
                    });
                  }
                }, h.prototype.handleUserMedia = function(t, i) {
                  var g = this.props;
                  if (t || !i) {
                    this.setState({ hasUserMedia: !1 }), g.onUserMediaError(t);
                    return;
                  }
                  this.stream = i;
                  try {
                    this.video && (this.video.srcObject = i), this.setState({ hasUserMedia: !0 });
                  } catch {
                    this.setState({
                      hasUserMedia: !0,
                      src: window.URL.createObjectURL(i)
                    });
                  }
                  g.onUserMedia(i);
                }, h.prototype.render = function() {
                  var t = this, i = this, g = i.state, y = i.props, x = y.audio;
                  y.forceScreenshotSourceSize;
                  var b = y.disablePictureInPicture;
                  y.onUserMedia, y.onUserMediaError, y.screenshotFormat, y.screenshotQuality, y.minScreenshotWidth, y.minScreenshotHeight, y.audioConstraints, y.videoConstraints, y.imageSmoothing;
                  var k = y.mirrored, P = y.style, C = P === void 0 ? {} : P, w = y.children, N = B(y, ["audio", "forceScreenshotSourceSize", "disablePictureInPicture", "onUserMedia", "onUserMediaError", "screenshotFormat", "screenshotQuality", "minScreenshotWidth", "minScreenshotHeight", "audioConstraints", "videoConstraints", "imageSmoothing", "mirrored", "style", "children"]), S = k ? c(c({}, C), { transform: (C.transform || "") + " scaleX(-1)" }) : C, I = {
                    getScreenshot: this.getScreenshot.bind(this)
                  };
                  return a.createElement(
                    a.Fragment,
                    null,
                    a.createElement("video", c({ autoPlay: !0, disablePictureInPicture: b, src: g.src, muted: !x, playsInline: !0, ref: function(O) {
                      t.video = O;
                    }, style: S }, N)),
                    w && w(I)
                  );
                }, h.defaultProps = {
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
                }, h;
              }(a.Component)
            );
            s.default = o;
          }
        ),
        /***/
        react: (
          /*!**************************************************************************************!*\
            !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
            \**************************************************************************************/
          /*! no static exports found */
          /***/
          function(v, s) {
            v.exports = u;
          }
        )
        /******/
      }).default
    );
  });
})(Ge);
var W0 = Ge.exports, G0 = /* @__PURE__ */ Ve(W0);
function H0(r) {
  var n = r.delay, u = r.width, v = r.height, s = r.onRead, l = r.action, a = r.videoConstraints, f = z.useRef(null), c = z.useCallback(function() {
    var B, m;
    if (f && f.current) {
      var o = (m = (B = f.current.getCanvas()) === null || B === void 0 ? void 0 : B.getContext("2d")) === null || m === void 0 ? void 0 : m.getImageData(0, 0, u, v);
      if (o && o.data) {
        var p = V0(o.data, u, v);
        p && (s && s(p), l && l(p.data));
      }
    }
  }, [f, u, v, s, l]);
  return z.useEffect(function() {
    var B = setInterval(function() {
      c();
    }, n);
    return function() {
      return clearInterval(B);
    };
  }), _0.jsx(G0, { audio: !1, ref: f, width: u, height: v, videoConstraints: a });
}
function X0() {
  const r = Y3.getTemp("type"), n = Y3.getTemp("id");
  S3(
    "camera-take",
    () => {
      if (n && r == "take") {
        const a = document.querySelector("#camera-view video");
        if (!a)
          return;
        const f = document.createElement("canvas");
        f.width = a.videoWidth, f.height = a.videoHeight;
        const c = f.getContext("2d");
        c == null || c.drawImage(a, 0, 0, f.width, f.height);
        const B = f.toDataURL("image/jpeg");
        Y3.setTemp("result", B);
      }
    },
    [r, n]
  );
  const u = Y3.getTemp("tracks"), v = Ce(async () => {
    if (n) {
      const f = (await navigator.mediaDevices.enumerateDevices()).filter((c) => c.kind === "videoinput");
      Y3.setTemp(
        "tracks",
        f.map(({ deviceId: c, groupId: B, kind: m, label: o }) => ({
          deviceId: c,
          groupId: B,
          kind: m,
          label: o
        }))
      );
    }
  }, [n]), s = z.useCallback((a) => {
    a.getTracks().forEach((f) => {
      f.stop();
    });
  }, []);
  z.useEffect(() => {
    if (!n) {
      const a = document.querySelector("#camera-view video");
      a && (a.srcObject = null);
    }
  }, [n]);
  const l = G();
  return /* @__PURE__ */ e(x3, { hidden: !n, children: /* @__PURE__ */ e(
    Be,
    {
      className: "flex flex-col justify-between max-md:rounded-none w-[70vw] max-md:w-full h-[80vh] max-md:h-full",
      list: [
        /* @__PURE__ */ e(
          ge,
          {
            title: r || "Work Off",
            rightSide: /* @__PURE__ */ e(
              k3,
              {
                icon: T3.solid.faXmark,
                onClick: () => {
                  Y3.setTemp("error", "Escape Take Image");
                }
              }
            )
          }
        ),
        /* @__PURE__ */ e("div", { className: "p-2 relative overflow-hidden flex items-center", children: /* @__PURE__ */ e(
          "div",
          {
            className: "border border-transparent border-solid rounded-[10px] w-full h-full overflow-hidden",
            style: {
              ...l("secondary.background", {
                borderColor: "borders"
              })
            },
            children: r && n && /* @__PURE__ */ e(H0, { onRead: () => {
            }, delay: 200, width: 400, height: 400, videoConstraints: !0 })
          }
        ) }),
        r == "take" && /* @__PURE__ */ A("div", { className: "flex justify-evenly p-4 w-full h-[70px] text-2xl", children: [
          /* @__PURE__ */ e(m3, { title: "change camera device", children: /* @__PURE__ */ e(
            k3,
            {
              icon: T3.solid.faCameraRotate,
              onClick: ({ clientX: a, clientY: f }) => {
                u && !v && ye({
                  x: a,
                  y: f,
                  menu: u.map(({ label: c, deviceId: B }) => ({
                    label: c,
                    async click() {
                      const m = document.querySelector("#camera-view video");
                      if (m) {
                        m.srcObject instanceof MediaStream && s(m.srcObject);
                        const o = await navigator.mediaDevices.getUserMedia({
                          video: {
                            deviceId: { exact: B }
                          }
                        });
                        m.srcObject = o;
                      }
                    }
                  }))
                });
              }
            }
          ) }),
          /* @__PURE__ */ e(m3, { title: "take image", children: /* @__PURE__ */ e(
            k3,
            {
              onClick: () => {
                Z3("camera-take");
              },
              icon: T3.solid.faCamera
            }
          ) })
        ] })
      ],
      tabIndex: 1,
      id: "camera-view",
      style: {
        ...l("primary.background", {
          borderColor: "borders"
        })
      }
    }
  ) });
}
function Y0() {
  const [r] = s2("press ? for help");
  return /* @__PURE__ */ e(d2, { "aria-multiline": !1, placeholder: `${r} 😊`, inputName: "findCommand" });
}
function K0() {
  const r = G(), n = be(), u = B5(), v = z.useMemo(() => {
    const h = Ae.getState();
    return u.map((t) => ({
      command: t,
      keys: i2.join(t, n, "commandId->command")
    })).filter((t) => t.keys.filter((g) => {
      if (!g.when)
        return !0;
      try {
        return g5(g.when)({
          state: h,
          focused: null
        });
      } catch {
        return !1;
      }
    }).length || !t.keys.length);
  }, [n, u]), s = w5(), l = F3("commandId"), a = s3("commands/enum/prefixes.object"), f = F3("commands.isLoading"), c = P5.getAll(), B = z.useMemo(() => {
    const h = Object.entries(a || {}).map(([i, g]) => ({
      key: i,
      settingKey: `${g}.enum`,
      value: g
    })), t = {};
    return i2.fullJoinOne(h, s, "settingKey->settingId").forEach(({ data: i, joinTo: g }) => {
      var y, x;
      t[i.key] = {
        lines: (x = (y = g == null ? void 0 : g.config) == null ? void 0 : y.list) == null ? void 0 : x.map(({ value: b, content: k }) => ({
          id: b,
          content: k,
          checked: (g == null ? void 0 : g.value) == b
        })),
        // desc: "commands/enum/prefixes.object"
        onSubmit(b) {
          d3.setOneFeild(i.settingKey, "value", b.id);
        }
      };
    }), V3(
      {
        commands: {
          lines: v.map(({ command: i, keys: g }) => ({
            content: i.label || i.commandId,
            keyPanding: g.map(({ value: y }) => y),
            id: i.commandId
          })),
          onSubmit(i) {
            xe(i.id);
          }
        },
        settings: {
          lines: s.map(({ name: i, settingId: g, desc: y }) => ({
            id: g,
            tools: [],
            content: i || g,
            sub: y
          })),
          onSubmit(i) {
            l2(i.id);
          }
        },
        actions: {
          lines: c.map(({ actionId: i, status: g }) => ({
            content: `${c2(i.replaceAll(/[^a-z0-9A-Z]/gi, " ").replaceAll(/ +/gi, " "), void 0, "normal")} ${g == "loading" ? "[running...]" : ""}`,
            id: i
          })),
          onSubmit(i) {
            i.id && Z3(i.id);
          }
        }
      },
      t
    );
  }, [v, s, a, c]), m = b3.getOneFeild("findCommand", "value"), o = z.useMemo(() => !!(m != null && m.match(/^ *\?/)), [m]), p = z.useMemo(() => V3(
    o && {
      help: {
        lines: Object.entries(B).map(([h]) => ({
          id: h,
          content: h
        })),
        onSubmit(h) {
          B3("commandId", h.id);
        }
      }
    },
    !o && B
  ), [B, m, o]);
  return z.useEffect(() => {
    l && o && B3("commandId", "help");
  }, [l, m, o]), z.useEffect(() => {
    g3.setOneFeild("cmds/list", "focused", 0);
  }, [m]), /* @__PURE__ */ e(
    x3,
    {
      onLoadContent: () => {
        c3("findCommand");
      },
      onPointerDown: (h) => {
        h.currentTarget == h.target && B3("commandId", null);
      },
      hidden: !l,
      children: /* @__PURE__ */ A(
        "div",
        {
          style: {
            ...r({
              backgroundColor: "secondary.background",
              borderColor: "borders"
            })
          },
          className: U("absolute top-[37px] left-1/2 rounded-xl transform -translate-x-1/2 w-[max(50vw,400px)] shadow-lg border border-solid border-transparent overflow-hidden"),
          children: [
            /* @__PURE__ */ A(
              "div",
              {
                className: "transition-[height]",
                style: V3(
                  l && {
                    height: "40px"
                  },
                  !l && {
                    height: "0px"
                  }
                ),
                children: [
                  /* @__PURE__ */ e(
                    "div",
                    {
                      className: "p-2 text-center uppercase",
                      style: {
                        ...r({
                          background: Ne("to right", "gray.opacity", "transparent", "gray.opacity")
                        })
                      },
                      children: l
                    }
                  ),
                  /* @__PURE__ */ e(Z, {})
                ]
              }
            ),
            /* @__PURE__ */ A(
              "div",
              {
                className: "flex justify-between items-center gap-3 p-2",
                onClick: () => {
                  c3("findCommand");
                },
                children: [
                  /* @__PURE__ */ e(Y0, {}),
                  f && /* @__PURE__ */ e(L2, {})
                ]
              }
            ),
            /* @__PURE__ */ e(Z, {}),
            /* @__PURE__ */ e(B0, { data: p })
          ]
        }
      )
    }
  );
}
function $0() {
  const r = F3("dev.html.hoverPosition"), n = G();
  return /* @__PURE__ */ e(M3, { children: r && /* @__PURE__ */ e(
    "div",
    {
      className: U(`
            z-[100000000000000000000000000000000000000000]
            fixed
            pointer-events-none
            transition-[width,left,height,top]
            duration-75
          `),
      style: {
        ...n("htmlContentHover"),
        left: `${r.x}px`,
        top: `${r.y}px`,
        width: `${r.width}px`,
        height: `${r.height}px`
      }
    }
  ) });
}
function Z0() {
  const r = J3.getOneFeild("settings", "focused"), n = k2.getTemp("config"), u = b3.getOneFeild("findConfigurations", "value");
  C5("findConfigurations");
  const v = G(), s = F3("configurations.found.length"), l = z.useMemo(() => c2(r || "no settings focused", "camel", "normal"), [r]), [a] = s2(`search ${l} in list`), [f] = s2(l), c = Y(!1), B = b3.getOneFeild("findConfigurations-local", "value");
  return Me(
    () => {
      typeof B == "string" && b3.setOneFeild("findConfigurations", "value", B);
    },
    [B],
    500
  ), /* @__PURE__ */ e(
    "div",
    {
      className: "p-2 border-transparent border-b border-solid",
      onClick: () => {
        c3("findConfigurations");
      },
      children: /* @__PURE__ */ A("div", { className: "relative w-full", children: [
        /* @__PURE__ */ e(
          d2,
          {
            selectWhenFocusIn: !0,
            inputName: "findConfigurations-local",
            placeholder: a,
            propositions: (r == "user" ? ["id", "name", "changed"] : r == "keyboardShortcuts" ? ["key", "label", "commandId"] : []).map((m) => `@${m}`).filter((m) => !(u != null && u.includes(m))),
            tabIndex: n ? -1 : 1
          }
        ),
        /* @__PURE__ */ e("div", { className: "top-1/2 right-2 absolute flex items-center gap-2 -translate-y-1/2", children: !!u && /* @__PURE__ */ e(
          m3,
          {
            title: "clear",
            onClick: () => {
              b3.setOneFeild("findConfigurations-local", "value", "");
            },
            onMouseEnter: () => {
              c.set(!0);
            },
            onMouseLeave: () => {
              c.set(!1);
            },
            children: /* @__PURE__ */ A(
              "div",
              {
                className: "px-2 py-1 rounded-sm cursor-pointer",
                style: {
                  ...v("primary", {
                    color: "primary.content"
                  })
                },
                children: [
                  /* @__PURE__ */ A("span", { children: [
                    /* @__PURE__ */ e(H, { content: "found" }),
                    " ",
                    s,
                    " ",
                    /* @__PURE__ */ e(H, { content: f })
                  ] }),
                  c.get && /* @__PURE__ */ A("span", { children: [
                    " ",
                    "(",
                    /* @__PURE__ */ e(H, { content: "Delete" }),
                    ")"
                  ] })
                ]
              }
            )
          }
        ) })
      ] })
    }
  );
}
const ue = "visibility/header.boolean";
function Qr({ children: r }) {
  const n = s3(ue), u = Y(!1), v = K3("Shift");
  z.useEffect(() => {
    const c = (B) => {
      const m = B.x * 100 / innerWidth;
      u.set(B.y <= 100 && w2(25, m, 75));
    };
    return document.addEventListener("mousemove", c), () => document.removeEventListener("mousemove", c);
  }, []);
  const s = G(), l = F3("window.isFocused"), a = s3("preferences/animation.boolean"), f = z.useMemo(() => s(l ? "primary.background" : "secondary.background", {
    borderColor: "borders",
    boxShadow: e2([
      {
        blur: 10,
        x: 0,
        y: 3,
        size: 0,
        colorId: "shadow.color"
      }
    ])
  }), [s, l]);
  return /* @__PURE__ */ A("div", { className: "top-0 z-[10000000000000000000000000000000000000] absolute inset-x-0", children: [
    /* @__PURE__ */ e(
      "div",
      {
        onClick: () => {
          d3.setOneFeild(ue, "value", !n);
        },
        title: n ? "hide header bar" : "open header bar",
        className: U(
          `
            absolute
            top-full
            left-1/2
            -translate-x-1/2
            w-[300px]
            rounded-ee-lg
            rounded-es-lg
            flex
            items-center
            justify-center
            cursor-pointer
            overflow-hidden
            shadow-2xl
            border-solid
            border-transparent
            z-10
           `,
          a && "transition-[height] duration-200",
          !u.get || !v ? "h-[0px]" : "border-b border-x h-[30px]"
        ),
        style: f,
        children: /* @__PURE__ */ e(A3, { icon: n ? U2 : g2 })
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        className: U(
          "relative border-b border-solid border-transparent box-content flex h-[0px] items-center justify-between overflow-hidden",
          n && "h-[50px]",
          a && "transition-[height]"
        ),
        style: {
          ...f
        },
        children: r
      }
    )
  ] });
}
function J0() {
  const r = D2("notification.header"), n = z.useMemo(() => (Array.isArray(r.get) ? r.get : []).slice(0, 3), [r.get]), u = G();
  return /* @__PURE__ */ e(
    "div",
    {
      className: "h-fit",
      style: {
        ...u({
          background: Ne("right", "secondary", "primary"),
          borderColor: "borders",
          color: "primary.content"
        })
      },
      children: !!n.length && /* @__PURE__ */ e(
        g0,
        {
          data: n,
          slotId: "header-notifications",
          focusId: "header-notifications",
          component: ({ index: v, item: s }) => /* @__PURE__ */ A("div", { children: [
            /* @__PURE__ */ A("div", { className: "flex justify-between items-center p-3", children: [
              /* @__PURE__ */ e("div", { children: s.message || "empty message" }),
              /* @__PURE__ */ e("div", { className: "flex tools", children: /* @__PURE__ */ e(
                o3,
                {
                  onClick: () => {
                    r.set((l) => {
                      const a = l == null ? void 0 : l[v];
                      return a && (a.expanded = !a.expanded), l;
                    });
                  },
                  icon: z3
                }
              ) })
            ] }),
            /* @__PURE__ */ e(
              "div",
              {
                className: U(
                  `
                  h-[0px]
                  p-3
                  flex
                  flex-col
                `,
                  s.expanded && "h-[200px]"
                ),
                children: /* @__PURE__ */ e(w3, { children: s.desc || "" })
              }
            )
          ] })
        }
      )
    }
  );
}
const q0 = "visibility/configurations.boolean", er = () => {
  const r = J3.getOneFeild("settings", "focused"), n = z.useMemo(() => c2(String(r), "camel", "normal"), [r]), [u] = s2(n);
  return /* @__PURE__ */ A("div", { className: "flex justify-between items-center p-2", children: [
    /* @__PURE__ */ e("h1", { className: "font-bold text-2xl capitalize", children: u }),
    /* @__PURE__ */ e("div", { className: "tools", children: /* @__PURE__ */ e(
      m3,
      {
        position: {
          x: "left",
          y: "bottom"
        },
        title: "close view configurations",
        children: /* @__PURE__ */ e(
          o3,
          {
            onClick: () => {
              d3.setOneFeild(q0, "value", !1);
            },
            icon: z3
          }
        )
      }
    ) })
  ] });
};
function rr() {
  const r = y5(), n = g3.getOneFeild("keyboardShortcuts", "focused");
  return S3(
    "keyboard/update",
    () => {
      if (n == null)
        return;
      const u = r[n];
      u && (g3.setOneFeild("keyboardShortcuts", "submited", n), B3("keyboard.commandId", u.commandId), c3("edit-keyPanding"));
    },
    [n, r]
  ), /* @__PURE__ */ e(
    G2,
    {
      itemSize: 30,
      countLastItems: 1,
      focusId: "keyboardShortcuts",
      slotId: "keyboardShortcuts",
      data: r,
      overflow: {
        top: 3,
        bottom: 3
      },
      component: ({ data: u, index: v, status: s, handel: l, style: a }) => {
        const { commandId: f, label: c = "" } = u, B = b5(f), m = z.createRef(), o = G(), p = K3("Control"), h = Y(!1), t = z.useMemo(() => B.filter(({ value: i }) => i).map(({ value: i }) => i), [B]);
        return /* @__PURE__ */ A(
          "div",
          {
            onMouseEnter: () => h.set(!0),
            onMouseLeave: () => h.set(!1),
            onClick: () => {
              l.focus(), l.submit();
            },
            ref: m,
            className: "px-3 text-xs group row",
            style: {
              ...o(
                v % 2 && "primary.background",
                h.get && "gray.opacity",
                s.isFocused && { borderColor: "primary" },
                s.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content"
                }
              ),
              ...a
            },
            children: [
              /* @__PURE__ */ e(
                "div",
                {
                  className: U(`
                w-[150px]
                flex
                justify-end
                px-2
              `),
                  children: (h.get || s.isFocused || s.isSubmited) && /* @__PURE__ */ A("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ e(
                      o3,
                      {
                        onClick: async () => {
                          const i = JSON.stringify(u);
                          await navigator.clipboard.writeText(i);
                        },
                        icon: _2
                      }
                    ),
                    /* @__PURE__ */ e(
                      o3,
                      {
                        icon: Ie,
                        onClick: (i) => {
                          B3("keyboard.commandId", f), c3("edit-keyPanding");
                        }
                      }
                    ),
                    !!B.length && /* @__PURE__ */ e(
                      o3,
                      {
                        tabIndex: -1,
                        icon: z3,
                        onClick: () => {
                          Q3.remove(B.map(({ keyId: i }) => i));
                        }
                      }
                    )
                  ] })
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  className: U("capitalize col", p && "hover:underline cursor-pointer"),
                  onPointerDown: async () => {
                    p && (b3.setOneFeild("findConfigurations", "value", `@commandId: ${f}`), await new V5().start(100), c3("findConfigurations"));
                  },
                  children: c || f
                }
              ),
              /* @__PURE__ */ e("div", { className: U("col justify-end truncate"), children: /* @__PURE__ */ e(P2, { shortcut: t }) })
            ]
          }
        );
      }
    }
  );
}
const h2 = ({ isActive: r, className: n, ...u }) => {
  const v = G();
  return /* @__PURE__ */ e(
    "span",
    {
      className: U("min-w-[100px] h-[35px] gap-2 rounded-md inline-flex items-center justify-center border border-solid border-transparent"),
      style: {
        ...v(
          "secondary.background",
          {
            borderColor: "borders"
          },
          r && "primary",
          r && {
            color: "primary.content"
          },
          {
            boxShadow: e2([
              {
                colorId: "shadow.color",
                y: 4,
                x: 0,
                blur: 10,
                size: 4
              }
            ])
          }
        )
      },
      ...u
    }
  );
}, or = [
  [
    { normal: "1", shift: "&", alt: "!" },
    { normal: "2", shift: "é", alt: "~" },
    { normal: "3", alt: "#", shift: '"' },
    { normal: "4", alt: "{", shift: "'" },
    { normal: "5", alt: "[", shift: "(" },
    { normal: "6", alt: "|", shift: "-" },
    { normal: "7", alt: "`", shift: "è" },
    { normal: "8", alt: "\\", shift: "_" },
    { normal: "9", alt: "^", shift: "ç" },
    { normal: "9", alt: "@", shift: "0" }
  ],
  [
    { normal: "a", shift: "A", alt: "à" },
    { normal: "z", shift: "Z", alt: "æ" },
    { normal: "e", shift: "E", alt: "€" },
    { normal: "r", shift: "R", alt: "®" },
    { normal: "t", shift: "T", alt: "™" },
    { normal: "y", shift: "Y", alt: "¥" },
    { normal: "u", shift: "U", alt: "µ" },
    { normal: "i", shift: "I", alt: "°" },
    { normal: "o", shift: "O", alt: "ø" },
    { normal: "p", shift: "P", alt: "þ" }
  ],
  [
    { normal: "q", shift: "Q", alt: "œ" },
    { normal: "s", shift: "S", alt: "ß" },
    { normal: "d", shift: "D", alt: "ð" },
    { normal: "f", shift: "F", alt: "đ" },
    { normal: "g", shift: "G", alt: "ħ" },
    { normal: "h", shift: "H", alt: "." },
    { normal: "j", shift: "J", alt: "*" },
    { normal: "k", shift: "K", alt: "-" },
    { normal: "l", shift: "L", alt: "/" },
    { normal: "m", shift: "M", alt: "+" }
  ],
  [
    { normal: "w", shift: "W", alt: "=" },
    { normal: "x", shift: "X", alt: ")" },
    { normal: "c", shift: "C", alt: "]" },
    { normal: "v", shift: "V", alt: "}" },
    { normal: "b", shift: "B", alt: ";" },
    { normal: "n", shift: "N", alt: "," }
  ]
], fe = 200, tr = () => {
  const r = G(), n = Y(!1), u = Y(!1), v = Y(!1), s = K3("Shift"), l = Y(!1), a = K3("Control"), f = K3("AltGraph");
  z.useEffect(() => {
    u.set(a);
  }, [a]), z.useEffect(() => {
    n.set(s);
  }, [s]), z.useEffect(() => {
    v.set(f);
  }, [f]);
  const c = Y([-100, -100]), B = Y(!1);
  Me(
    () => {
      B.get && B.set(!1);
    },
    [B.get],
    fe
  ), A5(["keyboard-view"]);
  const m = b3.useOneFeild("keyboard-view", "value"), o = Y([0, innerHeight - 300]), p = s3("visibility/keyboard.boolean");
  return /* @__PURE__ */ A(
    "div",
    {
      hidden: !p,
      className: "z-[100000000000000000000000000000] fixed flex flex-col border border-transparent border-solid rounded-xl w-1/2 max-md:w-2/3 h-[300px] overflow-hidden",
      style: {
        ...r("primary.background", {
          borderColor: "borders",
          boxShadow: e2([
            {
              colorId: "shadow.color",
              y: 4,
              x: 0,
              blur: 10,
              size: 4
            }
          ])
        }),
        ...V3(
          o.get && {
            left: `${o.get[0]}px`,
            top: `${o.get[1]}px`
          }
        )
      },
      children: [
        /* @__PURE__ */ A("div", { className: "flex justify-between items-center p-2", children: [
          /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
            o3,
            {
              onPointerDown: () => {
                const h = (i) => {
                  o.set([i.pageX, i.pageY]);
                };
                document.addEventListener("mousemove", h);
                const t = () => {
                  document.removeEventListener("pointerup", t), document.removeEventListener("mousemove", h);
                };
                document.addEventListener("pointerup", t);
              },
              icon: W5,
              className: "cursor-grab"
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "propositions", children: m.get ? /* @__PURE__ */ e(
            "pre",
            {
              className: "px-2 py-1 border border-transparent border-solid rounded-md font-[inherit]",
              style: {
                ...r("secondary.background", {
                  borderColor: "borders"
                })
              },
              children: m.get
            }
          ) : /* @__PURE__ */ e("div", { className: "px-2 py-1 capitalize", children: /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(H, { content: "empty value" }) }) }) }),
          /* @__PURE__ */ e(
            m3,
            {
              title: "close view",
              position: {
                x: "left"
              },
              children: /* @__PURE__ */ e(
                k3,
                {
                  onClick: () => {
                    d3.setOneFeild("visibility/keyboard.boolean", "value", !1);
                  },
                  icon: z3
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ e(Z, {}),
        /* @__PURE__ */ A("div", { className: "flex justify-center items-stretch h-full overflow-hidden", children: [
          /* @__PURE__ */ e("div", { className: "w-fit", children: /* @__PURE__ */ e("div", { className: "flex flex-col flex-1 justify-center items-center gap-1 p-2 h-full overflow-hidden", children: [
            {
              name: "shift",
              state: n
            },
            {
              name: "alt gr",
              state: v
            },
            {
              name: "control",
              state: u
            }
          ].map(({ state: h, name: t }, i) => /* @__PURE__ */ e(
            h2,
            {
              isActive: h.get,
              onPointerDown: () => {
                h.set((g) => !g);
              },
              children: t
            },
            i
          )) }) }),
          /* @__PURE__ */ A(
            "div",
            {
              className: "relative flex flex-col justify-between gap-3 border-x p-2 border-transparent border-solid h-full overflow-hidden",
              style: {
                ...r({
                  borderColor: "borders"
                })
              },
              onClick: (h) => {
                const t = h.pageX, i = h.pageY, { left: g, top: y } = h.currentTarget.getBoundingClientRect();
                c.set([t - g, i - y]), B.set(!0);
              },
              children: [
                c.get && /* @__PURE__ */ e(
                  "span",
                  {
                    className: U(
                      `opacity-0 blur-xl transition-[opacity] duration-[${fe}] absolute pointer-events-none inline-block w-[100px] h-[100px] transform -translate-x-1/2 -translate-y-1/2 rounded-full`,
                      B.get && "opacity-100"
                    ),
                    style: {
                      ...r("gray.opacity"),
                      ...V3(
                        c.get && {
                          left: `${c.get[0]}px`,
                          top: `${c.get[1]}px`
                        }
                      )
                    }
                  }
                ),
                /* @__PURE__ */ e("div", { className: "flex flex-col gap-3", children: or.map((h, t) => /* @__PURE__ */ e("div", { className: "flex justify-center gap-3", children: h.map((i, g) => /* @__PURE__ */ A(
                  h2,
                  {
                    onPointerDown: () => {
                      const y = n.get ? i.shift : v.get ? i.alt : i.normal, x = document.activeElement;
                      x && (x instanceof HTMLInputElement || x instanceof HTMLTextAreaElement) && (x.value = x.value.concat(y));
                    },
                    className: "relative",
                    children: [
                      n.get ? i.shift : v.get ? i.alt : i.normal,
                      !n.get && /* @__PURE__ */ e(
                        "span",
                        {
                          className: "right-1 bottom-1 absolute text-xs",
                          style: {
                            ...r({ color: "gray.opacity.2" })
                          },
                          children: v.get ? i.normal : i.alt
                        }
                      )
                    ]
                  },
                  g
                )) }, t)) }),
                /* @__PURE__ */ e(
                  h2,
                  {
                    className: "w-full max-lg:w-full",
                    onPointerDown: () => {
                      m.set((h) => h + " "), !l.get && n.get && n.set(!1);
                    },
                    children: "space"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ e("div", { className: "w-fit", children: /* @__PURE__ */ e("div", { className: "flex flex-col flex-1 justify-center items-center gap-1 p-2 w-[20px] h-full overflow-hidden", children: [
            {
              name: "backspace",
              onClick() {
                m.set((h) => h == null ? void 0 : h.slice(0, -1));
              }
            },
            {
              name: "clean",
              onClick() {
                m.set("");
              }
            }
          ].map(({ onClick: h, name: t }, i) => /* @__PURE__ */ e(
            h2,
            {
              className: "w-full max-lg:w-full",
              onPointerDown: () => {
                h == null || h();
              },
              children: t
            },
            i
          )) }) })
        ] })
      ]
    }
  );
}, me = "visibility/leftSide.boolean", Vr = ({ children: r }) => {
  const n = s3(me), u = G();
  return /* @__PURE__ */ e(
    C2,
    {
      position: "right",
      min: 200,
      temp: "leftSide.currentWidth",
      max: () => Math.max(window.innerWidth / 3, 350),
      handelResize: ({ size: v }) => {
        const s = w2(150, v);
        s != n && d3.setOneFeild(me, "value", s);
      },
      className: U("h-full flex-col flex overflow-hidden border-r border-solid border-transparent z-[10000000000000000]", !n && "border-r-0"),
      hidden: !n,
      style: {
        ...u("secondary.background", {
          borderColor: "borders"
        })
      },
      children: r
    }
  );
}, nr = ({ item: r, status: n, handelFocus: u, handelSubmit: v }) => {
  if (r.type == "separator")
    return /* @__PURE__ */ e("div", { className: "my-1", children: /* @__PURE__ */ e(Z, {}) });
  const s = G(), l = z.createRef();
  return /* @__PURE__ */ e("div", { className: "px-1", children: /* @__PURE__ */ A(
    "div",
    {
      ref: l,
      tabIndex: 1,
      style: {
        ...s(
          n.isFocused && "primary",
          n.isFocused && {
            color: "primary.content"
          }
        )
      },
      onMouseEnter: u(),
      onMouseLeave: () => {
        g3.setOneFeild("menu-list", "focused", null);
      },
      onClick: v(),
      className: "cursor-pointer flex items-center rounded-md px-4 py-2 w-full",
      children: [
        /* @__PURE__ */ e("div", { className: "inline-flex flex-end items-center gap-1 w-[60px]", children: r.checked && /* @__PURE__ */ e(we, { icon: T3.solid.faCheck }) }),
        /* @__PURE__ */ A("div", { className: "flex justify-between items-center gap-1 w-full", children: [
          r.label && /* @__PURE__ */ e("span", { children: r.label }),
          r.accelerator && /* @__PURE__ */ e(P2, { shortcut: r.accelerator })
        ] }),
        /* @__PURE__ */ e("div", { className: "w-[60px]" })
      ]
    }
  ) });
}, ar = () => {
  const r = G(), n = v2.getTemp("list"), u = v2.getTemp("position"), v = v2.getTemp("id"), s = z.createRef(), l = g3.getOneFeild("menu-list", "submited");
  z.useEffect(() => {
    v && typeof l == "number" && (v2.setTemp("result", l), g3.setOneFeild("menu-list", "submited", null));
  }, [l, v]);
  const a = x5.getOne("menu-list");
  return /* @__PURE__ */ e(x3, { className: "select-none scale-100", hidden: !v, children: v && /* @__PURE__ */ e(
    w0,
    {
      positionId: "menu-list",
      ref: s,
      className: "absolute py-1 border border-transparent border-solid rounded-md w-[350px] max-md:w-[150px]",
      style: {
        ...r("secondary.background", {
          borderColor: "borders",
          boxShadow: e2([
            {
              colorId: "shadow.color",
              blur: 10,
              size: 1,
              x: 0,
              y: 5
            }
          ])
        }),
        ...V3(
          {
            left: -1e3,
            top: -1e3
          },
          u && (a == null ? void 0 : a.width) && (innerWidth > u[0] + a.width ? {
            left: u[0]
          } : {
            right: innerWidth - u[0]
          }),
          u && (a == null ? void 0 : a.height) && (innerHeight > u[1] + a.height ? {
            top: u[1]
          } : {
            bottom: innerHeight - u[1]
          })
        )
      },
      children: /* @__PURE__ */ e(u2, { skipFn: ({ enabled: f = !0, type: c }) => c == "separator" || !f, slotId: "menu-list", component: nr, data: n || [] })
    }
  ) });
}, sr = () => {
  const r = O3.getAll();
  return /* @__PURE__ */ e(
    u2,
    {
      data: r,
      slotId: "notification",
      component: ({ item: n, index: u, id: v, handelFocus: s, handelSelect: l, handelSubmit: a, status: f }) => {
        const c = Y(!1);
        function B(p, h, t, i) {
          return n.type == "warning" ? h : n.type == "error" ? t : n.type == "success" ? i : p;
        }
        const m = G(), o = s3("preferences/animation.boolean");
        return /* @__PURE__ */ A(
          "div",
          {
            id: v,
            onClick: a(),
            onPointerDown: s(l()),
            onDoubleClick: () => {
              O3.setOneFeild(n.id, "showDesc", !n.showDesc);
            },
            style: {
              ...m(
                "secondary.background",
                u % 2 && "primary.background",
                c.get && "gray.opacity",
                f.isFocused && {
                  borderColor: "secondary"
                },
                f.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content"
                }
              )
            },
            className: U(
              `
                overflow-hidden
                transform
                transition-[transform,opacity]
                relative
                max-h-[calc(80vh+50px)]
                border-2
                border-solid
                border-transparent
              `
            ),
            onMouseEnter: () => c.set(!0),
            onMouseLeave: () => c.set(!1),
            children: [
              /* @__PURE__ */ A("div", { className: U("relative p-3 flex justify-between items-center"), children: [
                /* @__PURE__ */ A("div", { className: "truncate text-xl flex items-center gap-2", children: [
                  /* @__PURE__ */ e(
                    A3,
                    {
                      icon: B(V2, Q2, H5, Oe),
                      style: {
                        ...m({
                          color: B("notifay.info", "notifay.warning", "notifay.error", "notifay.success")
                        })
                      }
                    }
                  ),
                  /* @__PURE__ */ e("span", { children: n.title })
                ] }),
                /* @__PURE__ */ e(
                  "div",
                  {
                    className: U(`
                  absolute
                  flex
                  gap-x-2
                  top-1/2
                  h-2/3
                  w-[5px]
                  transform
                  -translate-y-1/2
                  left-0
                  rounded-ee-md
                  rounded-se-md
                `),
                    style: {
                      ...m(B("notifay.info", "notifay.warning", "notifay.error", "notifay.success"))
                    }
                  }
                ),
                /* @__PURE__ */ A(
                  "div",
                  {
                    className: "flex gap-1 text-xl",
                    style: {
                      visibility: c.get || f.isSubmited ? "visible" : "hidden"
                    },
                    children: [
                      n.desc && /* @__PURE__ */ e(
                        o3,
                        {
                          onClick: () => {
                            O3.setOneFeild(n.id, "showDesc", !n.showDesc);
                          },
                          icon: n.showDesc ? U2 : g2
                        }
                      ),
                      n.removable && /* @__PURE__ */ e(
                        o3,
                        {
                          onClick: () => {
                            O3.remove([n.id]);
                          },
                          icon: G5
                        }
                      )
                    ]
                  }
                )
              ] }),
              n.desc && /* @__PURE__ */ e("div", { className: U("h-[0px]", o && "transition-[height] duration-700", n.showDesc && "h-[170px]"), children: /* @__PURE__ */ e(w3, { className: "p-6", children: /* @__PURE__ */ e(f2, { value: n.desc }) }) }),
              Array.isArray(n.buttons) && /* @__PURE__ */ e("div", { className: "flex justify-end p-5 overflow-x-auto", children: n.buttons.map(({ command: p, label: h }, t) => /* @__PURE__ */ e(
                R3,
                {
                  className: "px-2 py-1 rounded-sm",
                  onClick: async () => {
                    typeof p == "object" ? Z3(p.action, p.arg) : xe(p);
                  },
                  children: h
                },
                t
              )) }),
              n.status == "loading" && /* @__PURE__ */ e(m5, {})
            ]
          }
        );
      }
    }
  );
}, S2 = "visibility/notifays.boolean", ve = "visibility/notifays/nots.boolean";
function lr() {
  const r = s3(S2), n = s3(ve), u = O3.getIds(), v = G(), s = g3.getOneFeild("notification", "focused"), l = O3.getAll(), a = z.useMemo(() => typeof s != "number" ? null : l[s] || null, [l, s]);
  S3(
    "toggleExpandNotifay",
    () => {
      a && O3.setOneFeild(a.id, "showDesc", !a.showDesc);
    },
    [a]
  ), S3(
    "notification.deleteFocus",
    () => {
      a && O3.remove([a.id]);
    },
    [a]
  );
  const f = s3("preferences/animation.boolean"), c = s3("notification/clearAllConfirmation.boolean"), B = z.createRef();
  return /* @__PURE__ */ A(
    "div",
    {
      onClick: () => {
        r || d3.setOneFeild(S2, "value", !0);
      },
      className: U(
        `
          z-[1000000000000]
          transition-transform
          shadow-xl
          duration-300
          fixed
          bottom-[10px]
          right-[10px]
          rounded-xl
          w-[400px]
          max-md:w-[calc(100%-20px)]
          border
          border-solid
          border-transparent
          overflow-hidden
      `,
        !r && "translate-x-[calc(100%)]"
      ),
      style: {
        ...v({
          backgroundColor: "secondary.background",
          borderColor: "borders",
          boxShadow: e2([
            {
              colorId: "shadow.color",
              blur: 3,
              size: 2,
              x: 0,
              y: 0
            }
          ])
        })
      },
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            onClick: ({ target: m }) => {
              var o;
              !r || (o = B.current) != null && o.contains(m) || d3.setOneFeild(ve, "value", !n);
            },
            children: /* @__PURE__ */ A("div", { className: "notifay-top-view flex justify-between items-center gap-2 p-3 cursor-pointer", children: [
              /* @__PURE__ */ A("h3", { className: "font-bold text-lg uppercase notifay-full-title", children: [
                /* @__PURE__ */ e(
                  "span",
                  {
                    style: {
                      ...v(
                        {
                          color: "gray.opacity.2"
                        },
                        u.length && {
                          color: "primary"
                        }
                      )
                    },
                    className: "mr-2",
                    children: !n && `(${u.length})`
                  }
                ),
                /* @__PURE__ */ e(H, { content: "notifications" })
              ] }),
              /* @__PURE__ */ A("div", { ref: B, className: "inline-flex", children: [
                !!u.length && /* @__PURE__ */ e(
                  k3,
                  {
                    onClick: async () => {
                      let m = 1;
                      if (c) {
                        const o = await B2({
                          message: "Do You Want To Clear All Notifications",
                          checkboxLabel: "Don't Ask Me Again",
                          buttons: ["Yes", "No"]
                        });
                        o.checkboxChecked && N5("notification/clearAllConfirmation.boolean", !1), m = o.response;
                      }
                      m || O3.remove(l.filter(({ removable: o = !0 }) => o).map(({ id: o }) => o));
                    },
                    icon: T3.solid.faXmarksLines
                  }
                ),
                /* @__PURE__ */ e(
                  k3,
                  {
                    onClick: () => {
                      d3.setOneFeild(S2, "value", !1);
                    },
                    icon: T3.solid.faChevronRight
                  }
                )
              ] })
            ] })
          }
        ),
        !!u.length && n && /* @__PURE__ */ e(Z, {}),
        /* @__PURE__ */ e(
          F2,
          {
            focusId: "notifications",
            ignoreOutline: !!a,
            className: U("flex flex-col overflow-hidden max-h-[80vh] rounded-ee-xl rounded-es-xl", f && "duration-300 transition-[max-height]", !n && "max-h-[0vh]"),
            children: /* @__PURE__ */ e(w3, { children: /* @__PURE__ */ e(sr, {}) })
          }
        )
      ]
    }
  );
}
const ir = () => {
  const r = $3.getTemp("pdf");
  return /* @__PURE__ */ e(x3, { hidden: !r, children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(C2, { className: "h-[70vh]", position: "right", temp: "pdf", min: 400, max: () => innerWidth - 30, children: /* @__PURE__ */ e(
    Be,
    {
      className: "h-full overflow-hidden",
      list: [
        /* @__PURE__ */ e(
          ge,
          {
            title: "PDF..",
            rightSide: /* @__PURE__ */ e("div", { className: "flex tools", children: /* @__PURE__ */ e(m3, { title: "close view", children: /* @__PURE__ */ e(
              k3,
              {
                icon: z3,
                onClick: () => {
                  $3.setTemp("pdf", null);
                }
              }
            ) }) })
          }
        ),
        /* @__PURE__ */ e("div", { className: "p-2 h-full", children: r && /* @__PURE__ */ e("embed", { src: r, className: "rounded-xl w-full h-full overflow-hidden" }) })
      ]
    }
  ) }) }) });
}, he = "visibility/rightSide.boolean", Wr = ({ children: r }) => {
  const n = s3(he), u = G();
  return /* @__PURE__ */ e(
    C2,
    {
      min: 200,
      temp: "rightSide.currentWidth",
      max: () => Math.max(window.innerWidth / 3, 350),
      handelResize: ({ size: v }) => {
        const s = w2(150, v);
        s != n && d3.setOneFeild(he, "value", s);
      },
      position: "left",
      hidden: !n,
      style: {
        ...u({
          backgroundColor: "secondary.background",
          borderColor: "borders"
        })
      },
      className: U(
        `
        h-full
        flex-col
        flex
        overflow-hidden
        border-l
        border-solid
        border-transparent
        z-[10000000000000]
      `,
        !n && "border-l-0"
      ),
      children: r
    }
  );
};
function cr() {
  const r = Se();
  return /* @__PURE__ */ e(
    G2,
    {
      data: r,
      slotId: "configurations",
      focusId: "configurations",
      itemSize: 50,
      overflow: {
        top: 4,
        bottom: 4
      },
      countLastItems: -1,
      component: ({ data: n, index: u, style: v, status: s, handel: l, id: a }) => {
        const f = K3("Control"), c = Y(!1), B = z.useMemo(() => !n.settingId.match(/\.password$/gi) && !p2(n.def, n.value), [n]), m = G();
        S3(
          "showSubmitSetting",
          () => {
            s.isSubmited && l2(n.settingId);
          },
          [s]
        );
        const o = z.useMemo(() => s.isFocused || s.isSubmited || c.get, [s, c.get]);
        return /* @__PURE__ */ A(
          "div",
          {
            id: a,
            onMouseEnter: () => c.set(!0),
            onMouseLeave: () => c.set(!1),
            className: U(
              `
                flex
                items-center
                justify-between
                h-[70px]
                p-4
                cursor-default
                border
                border-solid
                border-transparent
              `
            ),
            style: {
              ...m(
                u % 2 && "primary.background",
                u % 2 == 0 && "secondary.background",
                c.get && "gray.opacity",
                s.isFocused && {
                  borderColor: "primary"
                },
                s.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content"
                }
              ),
              ...v
            },
            onClick: () => {
              l.focus(), l.submit();
            },
            children: [
              !p2(n.value, n.def) && /* @__PURE__ */ e(
                "div",
                {
                  className: "left-0 absolute inset-y-0 w-[3px]",
                  style: {
                    ...m("primary")
                  }
                }
              ),
              /* @__PURE__ */ e(
                "h1",
                {
                  className: U(`
                flex
                gap-1
                items-center
                overflow-hidden
              `),
                  children: /* @__PURE__ */ e(
                    "span",
                    {
                      className: U("text-xl capitalize truncate", f && "hover:underline cursor-pointer"),
                      onClick: () => {
                        f && n.name != null && b3.setOneFeild("findConfigurations", "value", n.name);
                      },
                      children: n.name || /* @__PURE__ */ e(
                        "span",
                        {
                          style: m({
                            color: "gray.opacity.2"
                          }),
                          children: "name not provided"
                        }
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ A(
                "span",
                {
                  className: U("inline-flex gap-1 items-center text-xs italic font-extralight truncate"),
                  onClick: () => {
                    f && b3.setOneFeild("findConfigurations", "value", `@id ${n.settingId}`);
                  },
                  children: [
                    /* @__PURE__ */ A(
                      "span",
                      {
                        className: U(f && "hover:underline cursor-pointer"),
                        style: m(
                          f && c.get && {
                            color: "primary"
                          }
                        ),
                        children: [
                          "@",
                          /* @__PURE__ */ e("span", { className: "font-normal", children: n.settingId })
                        ]
                      }
                    ),
                    /* @__PURE__ */ A("div", { className: U("flex opacity-0 transition-[opacity] duration-500", o && "opacity-100"), children: [
                      B && /* @__PURE__ */ e(m3, { title: "reset", children: /* @__PURE__ */ e(
                        o3,
                        {
                          icon: X5,
                          onClick: () => {
                            d3.setOneFeild(n.settingId, "value", n.def);
                          }
                        }
                      ) }),
                      /* @__PURE__ */ e(m3, { title: "configurate", children: /* @__PURE__ */ e(
                        o3,
                        {
                          onClick: () => {
                            l2(n.settingId);
                          },
                          icon: Te
                        }
                      ) })
                    ] })
                  ]
                }
              )
            ]
          }
        );
      }
    }
  );
}
function He(r = [], n = ".") {
  const u = r.filter(Boolean).map((s) => s.split(n)).filter((s) => s.length);
  return Array.from(new Set(u.map(([s]) => s))).map((s) => ({
    data: s,
    innerTree: He(
      u.filter(([l]) => l == s).map(([, ...l]) => l.join(n)),
      n
    )
  }));
}
function dr() {
  const r = Se(), n = z.useMemo(() => r.map(({ settingId: u }) => u), [r]);
  return /* @__PURE__ */ e("div", { id: "settings.tree.view", className: "flex flex-col h-full overflow-hidden", tabIndex: 1, children: /* @__PURE__ */ e(w3, { children: /* @__PURE__ */ e(
    P0,
    {
      treeId: "setting-tree-layout",
      tree: He(n, "/"),
      component: ({ data: u, status: v, parent: s, isFins: l, innerTree: a, level: f, handels: c }) => {
        const B = G(), [m, o] = u.split("."), p = Y(!1), h = z.useMemo(() => {
          const t = [];
          let i = s;
          for (; i; )
            t.push(i.data), i = i.parent;
          return t.reverse().join("/");
        }, [l]);
        return /* @__PURE__ */ A(
          "div",
          {
            "aria-level": f,
            onMouseEnter: () => p.set(!0),
            onMouseLeave: () => p.set(!1),
            className: "flex items-center px-1 border border-transparent border-solid h-[30px]",
            onClick: async () => {
              c.focus(!0);
            },
            style: {
              ...B(
                p.get && "gray.opacity",
                v.isFocused && {
                  borderColor: "primary"
                }
              ),
              paddingLeft: `${f * 50}px`
            },
            children: [
              !o && /* @__PURE__ */ e("div", { className: "mx-1 tools", children: /* @__PURE__ */ e(
                o3,
                {
                  iconClassName: "text-xs",
                  tabIndex: -1,
                  icon: v.isExpanded ? g2 : Y5,
                  style: {
                    outlineColor: "transparent"
                  },
                  onClick: () => {
                    c.expand(!1, !v.isExpanded);
                  }
                }
              ) }),
              /* @__PURE__ */ A("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ A("div", { children: [
                  l && m,
                  !l && /* @__PURE__ */ e("b", { children: m }),
                  /* @__PURE__ */ e(
                    "b",
                    {
                      className: "ml-1",
                      style: {
                        ...B({
                          color: "primary"
                        })
                      },
                      children: !!(a != null && a.length) && `(${a == null ? void 0 : a.length})`
                    }
                  )
                ] }),
                o && /* @__PURE__ */ A("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: "px-2 py-1 rounded-md",
                      style: {
                        ...B("gray.opacity")
                      },
                      children: o
                    }
                  ),
                  /* @__PURE__ */ e(
                    o3,
                    {
                      onClick: () => {
                        l2(h);
                      },
                      icon: Te,
                      hidden: !p.get
                    }
                  )
                ] })
              ] })
            ]
          }
        );
      }
    }
  ) }) });
}
function ur() {
  const r = M5(), n = z.useMemo(() => {
    const v = r.filter(({ settingId: s }) => !s.endsWith("password"));
    return je(
      v.length && {
        async click() {
          const { response: s } = await B2({
            message: "Are You Sure About Reset All Configurations",
            defaultId: 1,
            title: "Reset All Config",
            buttons: ["No", "Yes"],
            type: "warning"
          });
          s && d3.upsert(
            v.map((l) => {
              let a = { ...l };
              return a.def != null && (a.value = a.def), a;
            })
          );
        },
        icon: $5,
        title: "reset all"
      },
      {
        click() {
          J3.setOneFeild("settings.viewType", "focused", "list");
        },
        title: "list",
        icon: Le
      },
      {
        click() {
          J3.setOneFeild("settings.viewType", "focused", "tree");
        },
        title: "tree",
        icon: K5
      }
    );
  }, [r]), u = E2(n, "settings.layout.tools");
  return z.useEffect(() => {
    u && (u.click(), g3.setOneFeild("settings.layout.tools", "submited", null));
  }, [u]), /* @__PURE__ */ A("div", { className: "relative flex flex-col w-full h-full overflow-hidden", children: [
    /* @__PURE__ */ A(F2, { focusId: "settings.layouts", className: "flex justify-between items-center p-2", children: [
      /* @__PURE__ */ e("div", {}),
      /* @__PURE__ */ e("div", { className: "flex gap-1 tools", children: /* @__PURE__ */ e(
        u2,
        {
          slotId: "settings.layout.tools",
          data: n,
          component: ({ item: { click: v, title: s, icon: l }, tabIndex: a, handelFocus: f, status: c }) => {
            const B = G();
            return /* @__PURE__ */ e(
              m3,
              {
                title: s,
                position: {
                  x: "center",
                  y: "top"
                },
                children: /* @__PURE__ */ e(
                  o3,
                  {
                    icon: l,
                    onPointerDown: f(),
                    style: {
                      ...B(
                        c.isFocused && {
                          outlineColor: "primary"
                        }
                      )
                    },
                    tabIndex: a,
                    onClick: v
                  }
                )
              }
            );
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ e(Z, {}),
    /* @__PURE__ */ e(
      Re,
      {
        views: {
          list: cr,
          tree: dr
        },
        viewId: "settings.viewType"
      }
    )
  ] });
}
function fr() {
  const r = k2.getTemp("config");
  return z.useEffect(() => {
    r || l2(null);
  }, [r]), /* @__PURE__ */ A("div", { className: "flex flex-col w-full h-full overflow-hidden", children: [
    /* @__PURE__ */ e(Z0, {}),
    /* @__PURE__ */ e(Z, {}),
    r && /* @__PURE__ */ e(
      Re,
      {
        viewId: "settings",
        views: {
          keyboardShortcuts: rr,
          user: ur,
          icons: C0,
          colors: y0
        }
      }
    )
  ] });
}
function mr() {
  const r = J3.getOne("settings"), n = z.useMemo(() => Object.entries((r == null ? void 0 : r.tabs) || {}).map(([v, s]) => ({
    id: v,
    ...s,
    isFocused: (r == null ? void 0 : r.focused) == v
  })), [r]), u = G();
  return /* @__PURE__ */ e(
    "div",
    {
      className: "border-transparent border-r border-solid w-full h-full overflow-hidden",
      style: {
        ...u({
          borderColor: "borders"
        })
      },
      children: /* @__PURE__ */ e(
        u2,
        {
          slotId: "configurations.side.list",
          data: n,
          component: ({ item: v }) => {
            const { id: s, news: l, isFocused: a, icon: f } = v, c = z.useMemo(() => `settings.${s}.show`, [s]), B = be(), m = z.useMemo(() => i2.join({ cmdId: c }, B, "cmdId->command").map(({ value: t }) => t), [c, B]), [o] = s2(c2(s, "camel", "normal")), p = Y(!1), h = G();
            return /* @__PURE__ */ A(
              m3,
              {
                onMouseEnter: () => p.set(!0),
                onMouseLeave: () => p.set(!1),
                draggable: !0,
                title: `press ${m.map((t) => "`" + t + "`").join(" or ")}`,
                onClick: () => {
                  !a && J3.setOneFeild("settings", "focused", v.id);
                },
                style: {
                  ...h((a || p.get) && "primary.background")
                },
                className: "relative truncate cursor-pointer",
                children: [
                  a && /* @__PURE__ */ e("span", { className: "left-0 absolute inset-y-0 w-[2px]", style: { ...h("primary") } }),
                  /* @__PURE__ */ A("div", { className: "flex items-center gap-2 p-2", children: [
                    (f == null ? void 0 : f.value) && /* @__PURE__ */ e(A3, { icon: le(f.type, f.value) }),
                    o,
                    l && /* @__PURE__ */ e(b0, { children: /* @__PURE__ */ e(A3, { icon: le(l.type, l.value) }) })
                  ] })
                ]
              },
              s
            );
          }
        }
      )
    }
  );
}
function vr() {
  return /* @__PURE__ */ e(C2, { position: "right", min: () => innerWidth / 7, max: () => innerWidth / 3, className: "h-full", children: /* @__PURE__ */ e(mr, {}) });
}
const ke = "visibility/configurations.boolean";
function hr() {
  const r = s3(ke), n = G();
  return z.useEffect(() => {
    r && k2.setTemp("config", !0);
  }, [r]), /* @__PURE__ */ e(
    De,
    {
      hidden: !r,
      onLoadContent: () => {
        c3("findConfigurations-local");
      },
      onClick: async (u) => {
        u.currentTarget == u.target && d3.setOneFeild(ke, "value", !1);
      },
      onTransitionEnd: () => {
        typeof r == "boolean" && k2.setTemp("config", r);
      },
      children: /* @__PURE__ */ A(
        "div",
        {
          className: U(`
          overflow-hidden
          absolute
          transform
          -translate-y-1/2
          -translate-x-1/2
          top-1/2
          left-1/2
          rounded-2xl
          border
          border-solid
        `),
          style: {
            ...n("secondary.background", {
              borderColor: "borders"
            })
          },
          children: [
            /* @__PURE__ */ e(er, {}),
            /* @__PURE__ */ e(Z, {}),
            /* @__PURE__ */ A("div", { className: "flex w-[70vw] h-[70vh]", children: [
              /* @__PURE__ */ e(vr, {}),
              /* @__PURE__ */ e(fr, {})
            ] })
          ]
        }
      )
    }
  );
}
function kr({ settingId: r }) {
  const n = d3.getOne(r), u = z.useMemo(() => n == null ? void 0 : n.value, [n]), v = z.useMemo(() => n == null ? void 0 : n.config, [n]), s = Y(n == null ? void 0 : n.value);
  z.useEffect(() => {
    d3.setOneFeild(r, "value", s.get);
  }, [s.get]), z.useEffect(() => {
    s.set(u);
  }, [n]);
  const l = z.useMemo(() => `setting:${(n == null ? void 0 : n.settingId) || ""}`, [n]), a = z.useMemo(() => {
    var B;
    const c = (B = l.match(/\.[a-zA-Z0-9]+$/gi)) == null ? void 0 : B[0].slice(1);
    return c || null;
  }, [l]), f = G();
  return /* @__PURE__ */ e(
    "div",
    {
      className: U((n == null ? void 0 : n.readonly) && "cursor-not-allowed"),
      style: {
        ...f((n == null ? void 0 : n.readonly) && "primary.background")
      },
      children: /* @__PURE__ */ A("div", { className: U((n == null ? void 0 : n.readonly) && "pointer-events-none"), children: [
        a == "boolean" && /* @__PURE__ */ e(Ue, { id: l, state: s, config: v }),
        a == "array" && /* @__PURE__ */ e(A0, { id: l, state: s, config: v }),
        a == "enum" && /* @__PURE__ */ e(x0, { id: l, state: s, config: v }),
        a == "object" && /* @__PURE__ */ e(N0, { id: l, state: s, config: v }),
        a == "string" && /* @__PURE__ */ e(M0, { id: l, state: s, config: v }),
        a == "number" && /* @__PURE__ */ e(S0, { id: l, state: s, config: v }),
        a == "file" && /* @__PURE__ */ e(v5, { id: l, state: s, config: v }),
        a == "filter" && /* @__PURE__ */ e(z0, { id: l, state: s, config: v }),
        a == "password" && /* @__PURE__ */ e(E0, { id: l, state: s, config: v }),
        a == "date" && /* @__PURE__ */ e(I0, { id: l, state: s, config: v }),
        a == "regexp" && /* @__PURE__ */ e(O0, { id: l, state: s }),
        a == "audio" && /* @__PURE__ */ e(T0, { id: l, state: s, config: v }),
        a == "image" && /* @__PURE__ */ e(j0, { id: l, state: s, config: v }),
        a == "pin" && /* @__PURE__ */ e(h5, { id: l, state: s, config: v })
      ] })
    }
  );
}
const pr = () => {
  const r = G(), n = D2("view.settings"), u = d3.getOne(n.get || ""), v = z.useMemo(() => !u || u.settingId.match(/\.password$/gi) ? !1 : !p2(u.def, u.value), [u]), s = z.useMemo(() => {
    try {
      const l = Function(`return (state)=> \`${(u == null ? void 0 : u.desc) || "**no description defined**"}\` `)(), a = Ae.getState();
      return l(a);
    } catch (l) {
      return Z5.err(l), " - ";
    }
  }, [u == null ? void 0 : u.desc]);
  return /* @__PURE__ */ e(
    x3,
    {
      onLoadContent: () => {
        n.get && c3(`setting:${n.get}`);
      },
      hidden: !n.get,
      children: /* @__PURE__ */ A(
        "div",
        {
          hidden: !n.get,
          className: U("rounded-md border-solid border border-transparent w-1/2 max-md:w-5/6"),
          style: r("secondary.background", {
            borderColor: "borders"
          }),
          children: [
            /* @__PURE__ */ A("div", { className: "flex justify-between items-center gap-1 p-3", children: [
              u && /* @__PURE__ */ A(M3, { children: [
                /* @__PURE__ */ e("h1", { className: "text-2xl truncate", children: u.name }),
                /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-[1px] max-md:hidden text-xs", children: /* @__PURE__ */ e(
                  Pe,
                  {
                    list: u.settingId.split("/").filter(Boolean).map((l, a) => {
                      var B;
                      const f = (B = l.match(/\..+$/gi)) == null ? void 0 : B[0].slice(1);
                      let c = null;
                      switch (f) {
                        case "boolean": {
                          c = Fe;
                          break;
                        }
                        case "password": {
                          c = a0;
                          break;
                        }
                        case "number": {
                          c = n0;
                          break;
                        }
                        case "string": {
                          c = t0;
                          break;
                        }
                        case "file": {
                          c = o0;
                          break;
                        }
                        case "enum": {
                          c = Le;
                          break;
                        }
                        case "object": {
                          c = r0;
                          break;
                        }
                        case "array": {
                          c = e0;
                          break;
                        }
                        case "audio":
                          c = q5;
                      }
                      return /* @__PURE__ */ A(
                        "span",
                        {
                          className: "inline-flex items-center gap-x-2 px-2 py-1 rounded-md",
                          style: {
                            ...r("gray.opacity.2")
                          },
                          children: [
                            l.replaceAll(/\..+$/gi, ""),
                            c && /* @__PURE__ */ e(A3, { icon: c })
                          ]
                        },
                        a
                      );
                    }),
                    joinComponent: /* @__PURE__ */ e(A3, { icon: W2 })
                  }
                ) })
              ] }),
              /* @__PURE__ */ A("div", { className: "flex tools", children: [
                v && /* @__PURE__ */ e(
                  k3,
                  {
                    icon: J5,
                    onClick: async () => {
                      const { response: l } = await B2({
                        message: "are you sure about reset this setting",
                        buttons: ["No", "Yes"],
                        defaultId: 1
                      });
                      l && u && d3.setOneFeild(u.settingId, "value", u.def);
                    }
                  }
                ),
                /* @__PURE__ */ e(
                  k3,
                  {
                    onClick: () => {
                      n.set(null), c3("findConfigurations");
                    },
                    icon: z3
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e(Z, {}),
            u && /* @__PURE__ */ A(M3, { children: [
              /* @__PURE__ */ e(w3, { className: "p-2 max-h-[150px]", children: /* @__PURE__ */ e(f2, { value: s }) }),
              /* @__PURE__ */ e(Z, {})
            ] }),
            n.get && /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ e(kr, { settingId: n.get }) })
          ]
        }
      )
    }
  );
}, Br = ({ item: r, index: n }) => {
  const u = Y(!1), v = Y(!1), s = Y(!1), l = Y(0), { message: a } = r, f = G(), c = s3("preferences/toastTime.number"), B = s3("preferences/animation.boolean"), m = z.useMemo(() => r.time || c || 5, [c, r.time]);
  z.useEffect(() => {
    if (s.get) {
      const p = setTimeout(() => {
        r.id && ze.remove([r.id]), s.set(!1);
      }, 300);
      return () => {
        clearTimeout(p);
      };
    }
  }, [s.get, r]), z.useEffect(() => {
    let p = 0;
    const h = setInterval(() => {
      l.set(++p), p >= m && (s.set(!0), clearInterval(h));
    }, 1e3);
    return () => {
      clearInterval(h);
    };
  }, [m]), z.useEffect(() => {
    if (v.get) {
      const p = setTimeout(() => {
        v.set(!1);
      }, 3e3);
      return () => {
        clearTimeout(p);
      };
    }
  }, [v.get]);
  function o(p, h, t, i) {
    return r.type == "warning" ? h : r.type == "error" ? t : r.type == "success" ? i : p;
  }
  return /* @__PURE__ */ A(
    "div",
    {
      className: U("flex z-[100000] items-center justify-between p-2 opacity-100 scale-100", s.get && "opacity-0 scale-0", B && "transition-[transform,opacity] duration-300"),
      onMouseEnter: () => u.set(!0),
      onMouseLeave: () => u.set(!1),
      style: {
        ...f(n % 2 && "gray.opacity")
      },
      children: [
        /* @__PURE__ */ A("div", { className: "inline-flex items-center gap-1", children: [
          /* @__PURE__ */ e(
            A3,
            {
              icon: o(V2, Q2, s0, Oe),
              style: {
                ...f({
                  color: o("notifay.info", "notifay.warning", "notifay.error", "notifay.success")
                })
              }
            }
          ),
          /* @__PURE__ */ e(f2, { value: a.toString() })
        ] }),
        /* @__PURE__ */ A("div", { className: "flex items-center", children: [
          /* @__PURE__ */ e(
            "span",
            {
              className: U("relative rounded-full w-[30px] h-[30px] mx-2 inline-flex items-center justify-center"),
              style: {
                ...f("gray.opacity")
              },
              children: m - l.get
            }
          ),
          /* @__PURE__ */ A("div", { className: U("tools w-[0px] flex gap-1 items-center overflow-hidden", u.get && "w-[50px]", B && "transition-[width]"), children: [
            /* @__PURE__ */ e(
              o3,
              {
                onClick: async () => {
                  v.set(!0), await navigator.clipboard.writeText(a.toString());
                },
                icon: v.get ? Fe : _2
              }
            ),
            /* @__PURE__ */ e(
              o3,
              {
                onClick: () => {
                  s.set(!0);
                },
                icon: z3
              }
            )
          ] })
        ] })
      ]
    }
  );
}, gr = () => {
  const r = ze.getAll(), n = G(), u = s3("preferences/animation.boolean"), v = z.useMemo(() => Br, []), s = s3("toast/position.enum");
  return /* @__PURE__ */ e(
    "div",
    {
      className: U(
        "fixed z-[100000000000000000000000000000] min-w-[300px] border overflow-hidden border-transparent rounded-md border-solid left-1/2 transform -translate-x-1/2 scale-0",
        !!(r != null && r.length) && "scale-100",
        u && "transition-transform duration-300",
        s == "top" && "top-[50px]",
        s == "bottom" && "bottom-[50px]"
      ),
      style: {
        ...n("toast.background", {
          boxShadow: e2([
            {
              colorId: "shadow.color",
              x: 0,
              y: 20,
              blur: 40,
              size: 10
            }
          ]),
          borderColor: "borders"
        })
      },
      children: /* @__PURE__ */ e(w3, { className: "max-h-[400px]", children: r == null ? void 0 : r.map((l, a) => /* @__PURE__ */ e(v, { index: a, item: l }, l.id)) })
    }
  );
}, a2 = {
  commandId: "keyboard.commandId",
  position: "keyboard.editingPosition"
}, pe = "key.changeWhen", wr = z.memo(({ commandId: r }) => /* @__PURE__ */ e(
  Pe,
  {
    joinComponent: /* @__PURE__ */ e(A3, { icon: W2 }),
    list: r.split(".").map((n, u) => /* @__PURE__ */ e("span", { className: "font-bold text-xl capitalize", children: c2(n, "camel", "normal") }, u))
  }
), p2), Pr = ({ keyPanding: r }) => {
  const { when: n, value: u, keyId: v } = r, s = Y(!1), l = Y(""), a = G(), f = Y(!1);
  return z.useEffect(() => {
    s.get && c3(pe);
  }, [s.get]), /* @__PURE__ */ A(
    "div",
    {
      onMouseEnter: () => f.set(!0),
      onMouseLeave: () => f.set(!1),
      className: U(`
        flex
        group
        items-center
        justify-center
        gap-x-1
        cursor-pointer
        w-full
        px-2
        group
        relative
      `),
      style: {
        ...a(f.get && "gray.opacity")
      },
      children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "flex justify-end w-[150px]", children: /* @__PURE__ */ A(
          "div",
          {
            className: U(`
              tools
              flex
              items-center
              gap-1
              invisible
              group-hover:visible
              border-r
              border-solid
              border-transparent
            `),
            style: {
              ...a({
                borderColor: "borders"
              })
            },
            children: [
              /* @__PURE__ */ e(m3, { title: "remove this keypanding", children: /* @__PURE__ */ e(
                o3,
                {
                  onClick: () => {
                    Q3.remove([v]), c3("edit-keyPanding");
                  },
                  icon: z3
                }
              ) }),
              /* @__PURE__ */ e(m3, { title: "copy when value", children: /* @__PURE__ */ e(
                o3,
                {
                  icon: _2,
                  onClick: async () => {
                    n && await navigator.clipboard.writeText(n);
                  }
                }
              ) }),
              /* @__PURE__ */ e(m3, { title: "edit when", children: /* @__PURE__ */ e(
                o3,
                {
                  onClick: () => {
                    s.set(!0), n && l.set(n);
                  },
                  icon: Ie
                }
              ) }),
              /* @__PURE__ */ e(m3, { title: `change to ${r.repeation ? "unrepeated" : "repeated"} key pending`, children: /* @__PURE__ */ e(
                o3,
                {
                  onClick: () => {
                    Q3.setOneFeild(v, "repeation", !r.repeation);
                  },
                  icon: r.repeation ? i0 : W2
                }
              ) }),
              /* @__PURE__ */ e(m3, { title: r.type == "up" ? "switch to down press" : "switch to up press", children: /* @__PURE__ */ e(
                o3,
                {
                  onClick: () => {
                    r.keyId && Q3.setOneFeild(r.keyId, "type", r.type == "up" ? "down" : "up");
                  },
                  icon: r.type == "up" ? c0 : d0
                }
              ) })
            ]
          }
        ) }) }),
        /* @__PURE__ */ e("div", { className: "px-2", children: u && /* @__PURE__ */ e(P2, { shortcut: u }) }),
        /* @__PURE__ */ A("div", { className: "text-xs col", children: [
          !s.get && (n || " - "),
          s.get && /* @__PURE__ */ e(
            k5,
            {
              style: {
                backgroundColor: "transparent",
                borderColor: "0px"
              },
              value: l.get,
              onValueChange: l.set,
              id: pe,
              onFocus: (c) => {
                c.currentTarget.select();
              },
              onKeyDown: (c) => {
                c.key.toLowerCase() == "enter" && c.currentTarget.blur();
              },
              onBlur: (c) => {
                Q3.setOneFeild(v, "when", c.currentTarget.value), s.set(!1);
              },
              className: "p-0",
              placeholder: "when expression..."
            }
          )
        ] })
      ]
    }
  );
};
function Cr() {
  const r = F3(a2.commandId), n = Y(""), u = te.getAll(), v = te.getEntity(), s = z.useMemo(() => r && v[r] || null, [v, r]), l = Q3.getAll(), a = z.useMemo(() => l.filter(({ value: o }) => o), [l]), f = z.useMemo(() => s ? i2.join(s, l, "commandId->command") : null, [s, l]), c = z.useMemo(() => u.map((o) => ({
    command: o,
    keys: i2.join(o, l, "commandId->command")
  })), [a]), B = z.useMemo(() => c.filter(({ keys: o }) => o.some(({ value: p }) => p == n.get)), [c, n]), m = G();
  return z.useEffect(() => {
    n.set("");
  }, [s]), /* @__PURE__ */ e(
    x3,
    {
      hidden: !s,
      onClick: (o) => {
        o.currentTarget == o.target && (B3(a2.commandId, null), B3(a2.position, null));
      },
      onLoadContent: () => {
        s && c3("edit-keyPanding");
      },
      children: /* @__PURE__ */ A(
        "div",
        {
          style: {
            ...m("primary.background", {
              borderColor: "borders"
            })
          },
          className: U(
            `
            rounded-lg
            border
            border-solid
            border-transparent
            min-w-[500px]
            w-[60vw]
          `
          ),
          tabIndex: s ? 1 : -1,
          id: "edit-keyPanding",
          onKeyDown: (o) => {
            if (o.currentTarget != o.target || !s)
              return;
            o.stopPropagation(), o.preventDefault(), o.key = o.key.toLowerCase();
            const p = [o.ctrlKey, o.altKey, o.shiftKey].filter(Boolean).length;
            if (!p && ["escape", "backspace"].includes(o.key)) {
              if (n.get) {
                n.set("");
                return;
              }
            } else if (!p && o.key == "enter" && n.get) {
              Q3.add([
                {
                  command: s.commandId,
                  value: n.get,
                  keyId: S5()
                }
              ]), n.set("");
              return;
            }
            const h = l0.fromEvent(o);
            n.set(h);
          },
          children: [
            /* @__PURE__ */ A("div", { className: "relative flex justify-center items-center gap-3 p-2", children: [
              (s == null ? void 0 : s.commandId) && /* @__PURE__ */ e(wr, { commandId: s.commandId }),
              /* @__PURE__ */ e(
                o3,
                {
                  className: U(`
              absolute
              right-2
              top-1/2
              transform
              -translate-y-1/2
            `),
                  onClick: async () => {
                    B3(a2.commandId, null), B3(a2.position, null), c3("findConfigurations");
                  },
                  icon: z3
                }
              )
            ] }),
            /* @__PURE__ */ e(Z, {}),
            /* @__PURE__ */ A("div", { className: "flex flex-col flex-wrap items-center", children: [
              f == null ? void 0 : f.map((o, p) => /* @__PURE__ */ e(Pr, { keyPanding: o }, p)),
              !(f != null && f.length) && /* @__PURE__ */ e("div", { className: "py-2", children: "no combinition defined" })
            ] }),
            /* @__PURE__ */ e(Z, {}),
            /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-2 text-4xl", children: /* @__PURE__ */ e(P2, { shortcut: n.get }) }),
            !!B.length && /* @__PURE__ */ A("div", { children: [
              /* @__PURE__ */ e(Z, {}),
              /* @__PURE__ */ e("div", { className: "flex justify-center p-2", children: /* @__PURE__ */ A(R2, { children: [
                /* @__PURE__ */ e(H, { content: "existe" }),
                " (",
                B.length,
                ")"
              ] }) })
            ] })
          ]
        }
      )
    }
  );
}
function Gr({ children: r }) {
  const n = s3("visibility/header.boolean"), u = s3("preferences/animation.boolean");
  return /* @__PURE__ */ A("div", { className: U("absolute bottom-0 inset-x-0 w-full border-solid border-transparent border-b top-0 flex flex-col", n && "top-[51px]", u && "transition-[top] duration-200"), children: [
    /* @__PURE__ */ e(J0, {}),
    /* @__PURE__ */ e("div", { className: "flex items-stretch h-full overflow-hidden", children: r })
  ] });
}
const Xe = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,} *$", yr = () => {
  const r = G(), n = b3.getOneFeild("signupUseremail", "value"), u = Y(""), v = Y(""), s = S3(
    "signup",
    async () => {
      var l;
      if (!((l = h3.server) != null && l.auth)) {
        p3("Error When Loading The Auth", "error");
        return;
      }
      if (!n) {
        p3("Email is required", "error"), c3("signupUseremail");
        return;
      }
      if (!z5(["signupUseremail"]).isValide) {
        p3("Please fill the email correctly!", "error"), c3("signupUseremail");
        return;
      }
      if (!u.get) {
        p3("Password must be at least 6 characters", "error"), c3("user-password");
        return;
      }
      if (u.get !== v.get) {
        p3("Password and confirm password must be the same!", "error"), c3("user-password-confirm");
        return;
      }
      await E5(h3.server.auth, n, u.get);
    },
    [n, u.get, v.get]
  );
  return /* @__PURE__ */ A(w3, { className: "flex max-sm:flex-col items-center h-full", children: [
    /* @__PURE__ */ A("div", { className: "p-8 w-1/2 max-sm:w-full", children: [
      /* @__PURE__ */ A(
        "form",
        {
          onSubmit: async (l) => {
            l.preventDefault(), await Z3("signup");
          },
          children: [
            /* @__PURE__ */ A("div", { className: "mb-4", children: [
              /* @__PURE__ */ A("label", { className: "block mb-2 capitalize", children: [
                /* @__PURE__ */ e(H, { content: "email" }),
                " :",
                " "
              ] }),
              /* @__PURE__ */ e(
                d2,
                {
                  controls: {
                    [Xe]: {
                      err: "Invalid email",
                      succ: "Valid email"
                    }
                  },
                  placeholder: "@exmple.com",
                  inputName: "signupUseremail",
                  propositions: n && !n.includes("@") ? [n + "@gmail.com"] : []
                }
              )
            ] }),
            /* @__PURE__ */ A("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2 capitalize", children: /* @__PURE__ */ e(H, { content: "password" }) }),
              /* @__PURE__ */ e(T2, { placeholder: "********", id: "user-password", state: u })
            ] }),
            /* @__PURE__ */ A("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2 capitalize", children: /* @__PURE__ */ e(H, { content: "confirm password" }) }),
              /* @__PURE__ */ e(T2, { placeholder: "********", id: "user-password-confirm", state: v })
            ] }),
            /* @__PURE__ */ e(R3, { icon: (s == null ? void 0 : s.status) == "loading" ? I2 : void 0, iconClassName: U("animate-spin"), type: "submit", className: "py-2 rounded-md", children: /* @__PURE__ */ e(H, { content: "signup" }) })
          ]
        }
      ),
      /* @__PURE__ */ A("p", { className: "mt-8 text-center text-sm capitalize", children: [
        /* @__PURE__ */ e(
          "span",
          {
            style: {
              ...r({
                color: "gray.opacity.2"
              })
            },
            children: /* @__PURE__ */ e(H, { content: "already have an account?" })
          }
        ),
        " ",
        /* @__PURE__ */ e(
          R2,
          {
            onClick: (l) => {
              l.preventDefault(), B3("focusedLoginView", 0);
            },
            className: "capitalize",
            children: /* @__PURE__ */ e(H, { content: "login" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-8 w-1/2 max-sm:w-full", children: /* @__PURE__ */ A("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ e(
        "h2",
        {
          className: "mb-4 font-semibold text-2xl",
          style: {
            ...r({
              color: "primary"
            })
          },
          children: "Sigin Into Water Fetch"
        }
      ),
      /* @__PURE__ */ e("p", { className: "mb-4 capitalize", children: /* @__PURE__ */ e(H, { content: "water fetch is a platform give's the possiblity for doing more thing by dahbia card" }) }),
      /* @__PURE__ */ A("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12", children: /* @__PURE__ */ e("span", { className: "text-xl", children: "📦" }) }),
        /* @__PURE__ */ A("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("h3", { className: "font-medium text-lg capitalize", children: /* @__PURE__ */ e(H, { content: "history" }) }),
          /* @__PURE__ */ e(
            "p",
            {
              style: {
                ...r({
                  color: "gray.opacity.2"
                })
              },
              className: "text-sm capitalize",
              children: /* @__PURE__ */ e(H, { content: "see all historys" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ A("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12", children: /* @__PURE__ */ e("span", { className: "text-xl", children: "💵" }) }),
        /* @__PURE__ */ A("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("h3", { className: "font-medium text-lg capitalize", children: /* @__PURE__ */ e(H, { content: "payouts" }) }),
          /* @__PURE__ */ e(
            "p",
            {
              className: "text-sm capitalize",
              style: {
                ...r({
                  color: "gray.opacity.2"
                })
              },
              children: /* @__PURE__ */ e(H, { content: "power save pays" })
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}, br = () => {
  const r = G(), n = b3.getOneFeild("loginUseremail", "value"), u = Y("");
  S3(
    "login",
    async () => {
      var l;
      if (!((l = h3.server) != null && l.auth)) {
        p3("Error When Loading The Auth", "error");
        return;
      }
      if (!n) {
        p3("Email is required", "error");
        return;
      }
      if (!u.get) {
        p3("Password must be at least 6 characters", "error");
        return;
      }
      await ne(h3.server.auth, n, u.get);
    },
    [n, u.get]
  );
  const v = S3(
    "sign-in-facebook",
    async () => {
      var l;
      (l = h3.server) != null && l.auth && await ae(h3.server.auth, new I5());
    },
    []
  ), s = S3(
    "sign-in-google",
    async () => {
      var l;
      (l = h3.server) != null && l.auth && await ae(h3.server.auth, new O5());
    },
    []
  );
  return /* @__PURE__ */ A(w3, { className: "flex max-sm:flex-col items-center", children: [
    /* @__PURE__ */ A("div", { className: "p-8 w-1/2 max-sm:w-full", children: [
      /* @__PURE__ */ A(
        "form",
        {
          onSubmit: async (l) => {
            var a;
            if (l.preventDefault(), !((a = h3.server) != null && a.auth)) {
              p3("Error When Loading The Auth", "error");
              return;
            }
            if (n && u.get)
              try {
                await ne(h3.server.auth, n, u.get);
              } catch {
                p3("Password Or Email Is Incorrect 😴", "error");
              }
            else n ? p3("Password Required!", "warning") : p3("Email Required!", "warning");
          },
          children: [
            /* @__PURE__ */ A("div", { className: "mb-4", children: [
              /* @__PURE__ */ A("label", { className: "block mb-2 capitalize", children: [
                /* @__PURE__ */ e(H, { content: "email" }),
                " :",
                " "
              ] }),
              /* @__PURE__ */ e(
                d2,
                {
                  controls: {
                    [Xe]: {
                      err: "Invalid email",
                      succ: "Valid email"
                    }
                  },
                  inputName: "loginUseremail",
                  placeholder: "@exmple.com",
                  propositions: n && !n.includes("@") ? [n + "@gmail.com"] : []
                }
              )
            ] }),
            /* @__PURE__ */ A("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2 capitalize", children: /* @__PURE__ */ e(H, { content: "password" }) }),
              /* @__PURE__ */ e(T2, { placeholder: "********", state: u })
            ] }),
            /* @__PURE__ */ e(R3, { type: "submit", className: "py-2", children: /* @__PURE__ */ e(H, { content: "login" }) })
          ]
        }
      ),
      /* @__PURE__ */ A("div", { className: "flex justify-evenly items-center my-3", children: [
        /* @__PURE__ */ e(
          k3,
          {
            iconClassName: U((s == null ? void 0 : s.status) == "loading" && "animate-spin"),
            icon: (s == null ? void 0 : s.status) == "loading" ? I2 : u0,
            onClick: async () => {
              await Z3("sign-in-google");
            }
          }
        ),
        /* @__PURE__ */ e(
          k3,
          {
            iconClassName: U((v == null ? void 0 : v.status) == "loading" && "animate-spin"),
            icon: (v == null ? void 0 : v.status) == "loading" ? I2 : f0,
            onClick: async () => {
              await Z3("sign-in-facebook");
            }
          }
        )
      ] }),
      /* @__PURE__ */ A("p", { className: "text-center text-sm", children: [
        /* @__PURE__ */ e(
          "span",
          {
            style: {
              ...r({
                color: "gray.opacity.2"
              })
            },
            className: "capitalize",
            children: /* @__PURE__ */ e(H, { content: "don't have an account?" })
          }
        ),
        " ",
        /* @__PURE__ */ e(
          R2,
          {
            onClick: (l) => {
              l.preventDefault(), B3("focusedLoginView", 1);
            },
            className: "capitalize",
            children: /* @__PURE__ */ e(H, { content: "sign up" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-8 w-1/2 max-sm:w-full", children: /* @__PURE__ */ A("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ e(
        "h2",
        {
          className: "mb-4 font-semibold text-2xl capitalize",
          style: {
            ...r({
              color: "primary"
            })
          },
          children: /* @__PURE__ */ e(H, { content: "login into water fetch" })
        }
      ),
      /* @__PURE__ */ e("p", { className: "mb-4 capitalize", children: /* @__PURE__ */ e(H, { content: "water fetch is a platform give's the possiblity for doing more thing by dahbia card" }) }),
      /* @__PURE__ */ A("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12", children: /* @__PURE__ */ e("span", { className: "text-xl", children: "📦" }) }),
        /* @__PURE__ */ A("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("h3", { className: "font-medium text-lg capitalize", children: /* @__PURE__ */ e(H, { content: "history" }) }),
          /* @__PURE__ */ e(
            "p",
            {
              className: "text-sm",
              style: {
                ...r({
                  color: "gray.opacity.2"
                })
              },
              children: /* @__PURE__ */ e(H, { content: "see all historys" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ A("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12", children: /* @__PURE__ */ e("span", { className: "text-xl", children: "💵" }) }),
        /* @__PURE__ */ A("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("h3", { className: "font-medium text-lg capitalize", children: /* @__PURE__ */ e(H, { content: "payouts" }) }),
          /* @__PURE__ */ e(
            "p",
            {
              className: "text-sm capitalize",
              style: {
                ...r({
                  color: "gray.opacity.2"
                })
              },
              children: /* @__PURE__ */ e(H, { content: "power save pays" })
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}, Ar = () => {
  const r = F3("focusedLoginView");
  return /* @__PURE__ */ e(_e, { focused: r ?? 0, pages: [/* @__PURE__ */ e(br, {}), /* @__PURE__ */ e(yr, {})] });
}, xr = ({ children: r = "" }) => {
  var l;
  const n = G(), u = T5(), v = Ee(), s = F3("env.isDev");
  return /* @__PURE__ */ A("div", { className: "flex flex-col h-full overflow-hidden", children: [
    /* @__PURE__ */ e("div", { className: "p-2", children: /* @__PURE__ */ A("div", { className: "flex max-sm:flex-col items-center gap-3", children: [
      /* @__PURE__ */ A(
        "div",
        {
          style: {
            ...n(
              (u == null ? void 0 : u.emailVerified) && {
                outlineColor: "success.text"
              }
            )
          },
          className: U("relative rounded-full w-[100px] h-[100px] max-sm:w-[60px] max-sm:h-[60px] overflow-hidden", (u == null ? void 0 : u.emailVerified) && "outline-1 outline-offset-1"),
          children: [
            (u == null ? void 0 : u.photoURL) && /* @__PURE__ */ e("img", { src: (l = u == null ? void 0 : u.photoURL) == null ? void 0 : l.toString(), className: "w-full h-full object-cover" }),
            !(u != null && u.photoURL) && /* @__PURE__ */ e(we, { icon: m0 })
          ]
        }
      ),
      /* @__PURE__ */ A("div", { className: "max-sm:flex max-sm:flex-col max-sm:justify-cente", children: [
        /* @__PURE__ */ e("h1", { className: "text-2xl", children: (v == null ? void 0 : v.nickname) || "No Name" }),
        /* @__PURE__ */ e("p", { children: v == null ? void 0 : v.email }),
        v && /* @__PURE__ */ A("div", { className: "flex items-center", children: [
          /* @__PURE__ */ e("span", { children: "Phone Number" }),
          " : ",
          (u == null ? void 0 : u.phoneNumber) || " - "
        ] }),
        /* @__PURE__ */ e(
          R3,
          {
            onClick: ({ clientX: a, clientY: f }) => {
              ye({
                x: a,
                y: f,
                menu: je(
                  ...[
                    { label: "Profile", pathname: "personal" },
                    {
                      label: "Billing",
                      pathname: "billing"
                    },
                    {
                      label: "Security",
                      pathname: "security"
                    }
                  ].map(({ label: c, pathname: B }) => ({
                    label: c,
                    click() {
                      const m = document.createElement("a"), o = (s ? "http://localhost:2000" : "https://water-fetch-account.web.app") + "/profile/" + B;
                      m.target = "_blank", m.href = o, m.click();
                    }
                  })),
                  {
                    type: "separator"
                  },
                  {
                    async click() {
                      B3("menu.id", null);
                    },
                    label: "Close"
                  }
                )
              });
            },
            className: "md:mt-4 max-md:mt-2 border border-transparent border-solid max-md:text-md",
            style: {
              ...n("primary.background", {
                color: "text.color",
                borderColor: "borders"
              })
            },
            icon: T3.solid.faGear,
            children: /* @__PURE__ */ e(H, { content: "manage account" })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e(Z, {}),
    /* @__PURE__ */ e(w3, { className: "relative", children: r }),
    /* @__PURE__ */ e(Z, {}),
    /* @__PURE__ */ e("div", { className: "flex justify-end gap-2 p-2", children: /* @__PURE__ */ e(
      R3,
      {
        className: "max-sm:w-full sm:w-1/4 capitalize",
        style: {
          ...n("error")
        },
        onClick: async () => {
          if (!h3.server)
            return;
          const { response: a } = await B2({
            title: "Logout",
            message: "Are you sure you want to logout?",
            buttons: ["No", "Yes"],
            defaultId: 1
          });
          a ? await j5(h3.server.auth) : p3("Ignore Logout", "error");
        },
        children: /* @__PURE__ */ e(H, { content: "logout" })
      }
    ) })
  ] });
}, Nr = ({ children: r }) => {
  const n = Ee();
  return /* @__PURE__ */ e("div", { className: "relative flex flex-col w-full h-full overflow-hidden", children: /* @__PURE__ */ e(
    L0,
    {
      render: async () => (await v0(1e3), /* @__PURE__ */ A(M3, { children: [
        n && /* @__PURE__ */ e(xr, { children: r }),
        !n && /* @__PURE__ */ e(Ar, {})
      ] })),
      loading: /* @__PURE__ */ e(L2, { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2" })
    }
  ) });
}, Mr = ({ children: r }) => {
  const n = $3.getTemp("profile-view");
  return /* @__PURE__ */ e(x3, { hidden: !n, children: /* @__PURE__ */ A(q3, { className: "max-md:rounded-none w-5/6 max-md:w-full h-5/6 max-md:h-full", children: [
    /* @__PURE__ */ A("div", { className: "flex justify-between items-center p-3", children: [
      /* @__PURE__ */ e("h1", { className: "text-3xl", children: /* @__PURE__ */ e(H, { content: "Your Profile" }) }),
      /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e(
        k3,
        {
          icon: z3,
          onClick: () => {
            $3.setTemp("profile-view", !1);
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ e(Z, {}),
    /* @__PURE__ */ e(w3, { children: /* @__PURE__ */ e(Nr, { children: r }) })
  ] }) });
}, Sr = () => {
  const r = se.getTemp("id"), n = se.getTemp("src"), u = z.createRef();
  return z.useEffect(() => {
    u.current && (u.current.onclose = () => {
      L5();
    });
  }, [u.current]), /* @__PURE__ */ e(x3, { hidden: !r, children: n && r && /* @__PURE__ */ e(q3, { className: "w-[70vw] h-[70vh] overflow-hidden", children: /* @__PURE__ */ e("iframe", { ref: u, className: "w-full h-full", id: r, src: n }) }) });
}, zr = "data:audio/wav;base64,UklGRsgsAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YaQsAADz/4P/qP6y/dn8NPzG+4n7ePuN+8X7HvyZ/DT98P3L/sf/4wAeAnkD9ASOBkoIJAodDDcObxDHEjwVqBeIGX8amRoRGhgZzhdOFqAUzBLZEMQOkQxACs0HPAWOAr//1fzJ+aP2W/P373Ls0egP5S7hM90a2ezUNNFzzinNZs3Rzg3R2NP/1m3aCt7V4cXl0ukA7lHyvfZN+/v/xASvCbUO2RMgGYYeBiSqKWcvSTU/O+FAU0V7SONJU0klR9NDuT8QOwU2uzA0K4Ulpx+rGYUTRQ3eBl4AuPnz8hTsFOXr3avWQ8+4xxPASLissEiqfKUaoo2gTqEUpF+otq3Rs2y6cMG2yD/Q+NfV39jnCfBd+MwAZQkYEvUa6yMNLUY2qz8pSdJSU1xbZGdqzW7Lcb9yDHESbVtnaWCSWAxQCUexPQc0JyoEILwVPwujANH11uq/33bUE8mGvcix46VbmpuQMomrgwCAAIAAgACAN4VYjNWURp5yqDazXb7nybvVwuEP7oL6JAf/EwchLS6NOwpJvlZ+ZEhxh3v/f/9//3//f/9//3//f/9/iXZaay9fL1KeRIE2CSgtGRQKp/r66iHbD8u4ujyq0JlYiwCAAIAAgACAAIAAgACAAIAAgACAAIAAgGKBPpbQq9TBVdgT7xAGWR3NNFBMC2Sze/9//3//f/9//3//f/9//3//f/9//3//f/9/0H53afBSojusIxkLGvLe2EO/gKV0jQCAAIAAgACAAIAAgACAAIAAgACAAIAAgACASI9opJK6s9F16doBnxreM0xN22RIeP9//3//f/9//3//f/9//3//f/9//39NdZ9gL0pSMjoZUP+M5OHJVLLknm2PJoMAgACAAIAAgACAAIAAgACA/oD0kVWlu7q70fHpMwNEHcs1hUohWxJoMXLcecZ//3//f/9//3/Mf/FzK2QhUXY7kyPzCXrw+dlfxzi426vYodWZNJPojXuJC4fiiOGPaZvQqmu9pdL06RQC4hcAKoQ4JEQxTVVUuFndXclg3GJNYvdceVJxQ5wwFhtLBjf0E+Wh2EnO5MUAvzS5ZbSEsIitFq6vs1C+QM2l35HyGwPZEP4bzyS6Ky0xXjVjOKA6+DvwO483+S1eIJcSbwYT/F3zMuxB5jXhG92d2bLWZ9Rw09/WYt9o6sH0dP2BBAUKVQ59EdITSxU7FoAWbRbiFMgQRwxECNAE8QGE/5j98fu2+qP56vg/+B74OPm7+ur7i/ys/Fv8tPvB+m759/cu9kL0FvSS90z8/wA0Be0IPgwnD80RGhQoFhAYqBe1EmkL1gO5/Cb2DvBW6gbl7d9K2yzZw9wL5kXyK/7bCFYSsBoSIo0oFS5WMFAsDCLoE2MF7Pe266Dgf9ZwzZzHH8g3z43c/u2C/5oP6h2eKsI1Sj02PtQ35Sp8GKAEs/F/4OfQBcRcvSu++8Um1O3nLP6PE+YmozeoQsxFIUFFNQsjBgzy82ndLcrcvcq5ib1uyKnZUPAZCtsiCjcSQ0VGVkH+NDIikgkz7orVvsTWvGS9osW/1N7pOQSBH/gzST+EQXw7+S3mGRoAIuWn0DvFpMI6yBzViOg2AScaXy2uN/U47jFyI48OFfeK4ZTSI8w7zifY/uis/bQRuiKmLA0uDieoGKsGD/Vm5Z7avtcU3Zbp/PjBB9gUvh6VIVwcFxGcBPP4dO7G5nzlmOs79cL+MgPlA+oI1RAMGoUjLij4I7IWOgMI8CbkPuJC6jT7oA+NHrcj+BpdB3P4IfQY++0LkB0dJk8jcRUSAZXxxuxS8xsDvBNaHLQZ0wwZ/Mzvgu3R9X0DEBD4FGUP7QMt+EzxAPSx/BsG6wzMC0MF/P0Q+Bb4d/xSATsFiAVCA8oA2P5i/rD+sf5m/hb/8gBYA1oFrgOs//D6H/hP+4kBMwg9CtIEUvza9BX1Jf2bB9YNHQoo/zD0W/El+VUGGQ8YDfEA+vP475f3KAZNDygNPwCE84PwMvkkB0sOBQpw/Yfz7vPI/aoIZQuABI76uvUW+jgC2AeqBZ//UfrY+r/+jwIBAwsBEf+O/tb+4v47/48AZgJzArz/Cvyw+xQAgQXdBfL/Kfkq+bwASwhFBx7+wPZs+eUDSwqTBVz6vvWa/DQHMQlsAJf3xPheAoAIUQRy+8f4qv5uBc4EBf9W+/P9RwL9ApsAg/68/nb//f+6AIsBTQCP/TP92QAYBEYBk/tD+64B5QXdAL35SPu6AzwGp/66+HP9ewU7BPv7CfrXABgFmwA3+079UwIlAoX+m/17/54AbAAaABf/Gf7g/2gCWgBb/Cj+VwMEAu/7x/yQA0cDJ/wY/CUDTQO//Kj8gQJoApj99/2eATcB7P4f/wMAbwCkACz/LP7cAOAB5/3I/cECYgFa/KD/uAP//s/8EwICAl/9K/8HAqn/mv4tAHsAFQAr/y3/NQH6/4797gCKASH9o/9vAtn9jf5RAhD/iv6BAer//P4YAEAA3f/r/oUAzgAY/qwAHAGJ/dsA4ADY/RQBSwCh/nkA7/9T/37/cQB0/zf/TAGa/ggAKQEy/iMB9P8+/+4Anv/D/0UACgAY//MAJv/3/78Al/4qARj/+/8vAHv/AwBcAEH/tQCS/w4AkQA5/wsBK/+OAMX/2/9NAKX/NQDt/67/TQA9/2kAQP88AJr/0f8NAFr/cwBR/7oAWf+CAI7/MwDs//P/9v/V/8v/7/+p/wEA4f/Q/xsAiP8PAKz/q//l/5//xv/O/9b/sv8xAKP/ZADs/y4AzP9IAO7/9f9CALv/DQDA/xYAtv/D/yoA2P8TAN3/9/8WAKb//v/p/9L/BwDj/wkAPwASADkAQQAFACgAMQD+/xYAEwDX/+P////c/9v/AADq/+T/AgAUAOv/2v/y//r/2//P/+L/6v/n/9z/5f/u/+X/0//F/8H/xP/J/7r/rP+g/5z/ov+s/7H/r/+t/6r/qP+j/5v/nv+h/6H/q/+z/7j/t/+x/7H/tP+x/6n/pP+b/5L/lP+U/5D/lv+U/4r/if+B/3//fP9//4H/g/+G/3r/df90/3f/ev+D/4z/iv+T/5j/mP+g/67/sv+0/6b/n/+h/5b/lP+a/5f/lv+c/5b/k/+M/4T/iP+E/4X/jf+N/43/j/+N/5D/jP+H/37/f/9+/3v/h/+S/47/iv+I/4T/hP+B/4D/gf+G/4r/i/+H/4H/fP92/3L/bf9r/3b/ff+B/4T/h/+K/43/iP9//3P/a/9j/1v/VP9M/0L/Pf85/0H/Sv9O/1P/WP9c/17/XP9b/1r/WP9P/0T/PP83/zL/Lf8p/yP/H/8b/xb/Df8C///+/v78/vz++/76/vn++P4B/wv/Ef8X/xz/If8m/yv/MP80/zj/NP8v/yr/Jf8g/xv/F/8S/w7/Cv8F/wL/Av8G/wv/Ef8W/xv/IP8k/yn/Lv8y/zf/O/8//0P/R/9L/0//Uv9W/1n/Xf9g/2P/Zv9q/23/cP9y/3X/eP97/33/gP+C/4X/h/+K/4z/jv+Q/5L/lP+W/5j/mv+c/57/oP+i/6P/pf+n/6j/qv+s/63/r/+w/7H/s/+0/7b/t/+4/7n/u/+8/73/vv+//8D/wf/C/8P/xP/F/8b/x//I/8n/yv/L/8z/zf/N/87/z//Q/9D/0f/S/9P/0//U/9X/1f/W/9b/1//Y/9j/2f/Z/9r/2//b/9z/3P/d/93/3v/e/97/3//f/+D/4P/h/+H/4f/i/+L/4//j/+P/5P/k/+T/5f/l/+X/5v/m/+b/5//n/+f/6P/o/+j/6P/p/+n/6f/p/+r/6v/q/+r/6//r/+v/6//r/+z/7P/s/+z/7P/t/+3/7f/t/+3/7v/u/+7/7v/u/+7/7//v/+//7//v/+//7//w//D/8P/w//D/8P/w//D/8f/x//H/8f/x//H/8f/x//L/8v/y//L/8v/y//L/8v/y//L/8//z//P/8//z//P/8//z//P/8//z//P/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9f/1//X/9f/1//X/9f/1//X/9f/1//X/9f/1//X/9f/1//X/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/7//j/9P/w/+3/6//p/+f/5v/m/+b/5//o/+n/6//u//H/9P/4//3/AQAFAAkADAAOABAAEgATABQAFAAUABMAEAALAAUA///5//P/7f/o/+P/3//b/9n/2P/Y/9j/2v/c/9//5P/p/+7/9P/5////BAAKAA8AFAAZABwAHwAhACIAIgAhACAAHQAaABYAEQAMAAcAAgD9//j/8//u/+n/5f/i/9//3f/c/9z/3f/e/+D/4//n/+z/8P/1//r///8DAAgADAARABUAGAAbAB0AHgAeAB4AHAAaABgAFAAQAAwACAADAP//+//2//L/7v/q/+f/5P/i/+H/4P/g/+H/4//l/+j/6//v//T/+P/8/wAABAAIAAwADwATABYAGAAZABoAGgAaABkAFwAUABEADgAKAAYAAgD+//r/9//z/+//7P/p/+b/5f/k/+P/4//k/+b/6P/r/+7/8v/1//n//f8AAAQACAALAA8AEgAUABYAFwAYABgAFwAWABQAEQAOAAsABwAEAAAA/f/5//b/8v/v/+z/6f/o/+b/5v/m/+b/5//p/+v/7v/y//X/+f/8/wAAAwAGAAoADQAQABIAFAAVABUAFQAVABMAEgAPAAwACQAGAAIA///7//j/9P/x/+7/7P/q/+n/6P/o/+j/6f/r/+z/7//y//X/+f/8/wAAAwAHAAoADQAPABEAEgATABMAEwASABEADwAMAAkABgADAP//+//4//X/8v/v/+3/7P/r/+r/6v/r/+z/7f/v//L/9f/4//z///8DAAYACQAMAA4AEAARABEAEQAQAA8ADgAMAAkABgADAP//+//4//X/8v/w/+7/7f/s/+z/7f/t/+//8P/z//b/+f/8/wAABAAHAAkACwANAA4ADwAPAA4ADQAMAAoACAAFAAEA/v/6//f/9P/y//H/8P/v/+//7//w//H/8//1//j/+//+/wIABQAHAAkACwAMAAwADAALAAoACQAHAAQAAQD+//v/+f/2//T/8//y//L/8v/y//P/9f/3//n//P/+/wEAAwAGAAcACAAJAAkACQAIAAYABQACAAAA/v/8//n/+P/2//X/9f/1//X/9v/3//n/+//9////AQACAAQABQAGAAYABQAFAAMAAgAAAP///f/8//r/+f/4//j/+P/4//n/+//8//3//v///wAAAQACAAIAAgACAAEAAAAAAP///v/+//3//P/8//v/+//8//z//f/9//3//v/+//7////////////////////////////////////+//7//v/+//3//f/9//z//P/8//z//f/9//7//////wAAAAABAAEAAQAAAP///v/9//z/+//7//r/+v/7//z//f/+/wAAAQACAAIAAgACAAEA///+//z/+//6//r/+v/6//z//f///wEAAgACAAMAAgABAAAA/v/8//v/+v/6//r/+//8//7/AAABAAIAAgACAAEA///+//z/+//7//v/+//8//3///8AAAEAAQABAAAA///+//3//P/8//z//f/9//7///8AAAAAAAD//////v/+//3//f/9//7//v/+//7//v/+//7//v////////////7//v/+//3//f/9//3//v//////AAAAAP///v/+//3//P/8//3//v///wAAAAAAAP///v/9//z//P/9//7///8AAAAAAAD///7//f/8//z//f/+////AAAAAP///v/9//3//f/9//7////////////+//7//v/+//7//v/+///////+//7//v/+//7//v/+//7//v/+//////////7//v/9//3//v////////////7//f/9//3//v///wAA///+//3//f/9//7//////////v/9//3//v////////////7//v/+//7//////////v/+//7//v/+//7//v/////////+//7//v/+//////////7//v/+//7//////////v/+//7//////////v/+//7//v///////v/+//7//v///////v/+//7//v/+//7//v////7//v/+//7///////7//v/+//7///////7//v/+///////+//7//v/////////+//7//v///////v/+//7//v/+//7//v/+//7//v///////v/+//7///////7//v///////v/+//7///////7//v/+/////v/+//7///////7//v/+//7////+//7//v///////v/+//7////+//7//v////7//v/+/////v/+//7////+//7//v////7//v/+//7////+//7//v////7//v///////v/+/////v/+///////+//7////+//7//v/+/////v/+/////v/+///////+//7////+//7////+//7////+//7//v////7//v///////v///////v///////v///////v////7//v/+/////v/+/////v/+/////v////7//v////7//v////7//v/+//7//v////7//v/+//7////+/////v/+/////v/+/////v/+//7//v////7////+//7//v/+//7//v/+/////v////7////+//7//v/+//7//v/+//7////+/////v/+//7//v/+//7////+/////v////7////+/////v/+//7////+/////v////7//v/+/////v////7//v////7//v/+//7//v////7//v////7////+/////v/+/////v/+//////////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////", Er = () => {
  const r = M2.getTemp("params"), n = M2.getTemp("id"), u = G(), v = Y(!1), s = M2.useTemp("checked");
  z.useEffect(() => {
    typeof (r == null ? void 0 : r.checkboxChecked) == "boolean" && s.set(r.checkboxChecked);
  }, [r]), z.useEffect(() => {
    g3.setOneFeild("dialog-list", "submited", null);
  }, [n]), z.useEffect(() => {
    g3.setOneFeild("dialog-list", "focused", (r == null ? void 0 : r.defaultId) || 0);
  }, [r]), S3(
    "dialog.cancel",
    () => {
      typeof (r == null ? void 0 : r.cancelId) == "number" && g3.setOneFeild("dialog-list", "submited", r.cancelId);
    },
    [r]
  );
  const l = z.useMemo(() => n ? zr : null, [n, r]);
  Ce(async () => {
    if (!l)
      return;
    const f = document.createElement("audio");
    f.src = l, await f.play();
  }, [n, r]);
  const a = s3("preferences/animation.boolean");
  return /* @__PURE__ */ e(x3, { hidden: !n, children: /* @__PURE__ */ A(q3, { className: "rounded-xl lg:w-1/2 max-lg:w-2/3", children: [
    (r == null ? void 0 : r.title) && /* @__PURE__ */ A(M3, { children: [
      /* @__PURE__ */ e("div", { className: "p-2", children: /* @__PURE__ */ e("h1", { className: "text-2xl", children: r == null ? void 0 : r.title }) }),
      /* @__PURE__ */ e(Z, {})
    ] }),
    r && /* @__PURE__ */ A(M3, { children: [
      /* @__PURE__ */ A("div", { className: "flex gap-5 p-2 w-full cursor-pointer", children: [
        !r.icon && /* @__PURE__ */ A(M3, { children: [
          r.type == "question" && /* @__PURE__ */ e(A3, { icon: h0, className: "text-4xl" }),
          r.type == "info" && /* @__PURE__ */ e(
            A3,
            {
              style: {
                ...u({
                  color: "notifay.info"
                })
              },
              icon: V2,
              className: "text-4xl"
            }
          ),
          r.type == "warning" && /* @__PURE__ */ e(
            A3,
            {
              style: {
                ...u({
                  color: "notifay.warning"
                })
              },
              icon: Q2,
              className: "text-4xl"
            }
          )
        ] }),
        typeof r.icon == "string" && /* @__PURE__ */ e(F0, { src: r.icon }),
        /* @__PURE__ */ A(
          "div",
          {
            onClick: () => {
              v.set(!v.get);
            },
            className: "flex justify-between items-center w-full",
            children: [
              /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: r.message }) }),
              r.detail && /* @__PURE__ */ e(o3, { className: "ml-2", icon: v.get ? U2 : g2 })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ e(Z, {})
    ] }),
    /* @__PURE__ */ e(w3, { className: U("h-[0vh] ", v.get && (r == null ? void 0 : r.detail) && "h-[30vh]", a && "transition-[height]"), children: (r == null ? void 0 : r.detail) && /* @__PURE__ */ e("div", { className: "p-2", children: /* @__PURE__ */ e(f2, { value: r.detail }) }) }),
    v.get && (r == null ? void 0 : r.detail) && /* @__PURE__ */ e(Z, {}),
    r && /* @__PURE__ */ A(F2, { focusId: "dialog-list-focusable", className: "flex justify-between items-center p-2 rounded-ee-xl rounded-es-xl", children: [
      /* @__PURE__ */ e("div", { children: r.checkboxLabel && /* @__PURE__ */ e(
        Ue,
        {
          id: "check",
          state: s,
          config: {
            style: "checkbox",
            onActive: `${r.checkboxLabel}`,
            onDisactive: `${r.checkboxLabel}`
          }
        }
      ) }),
      r.buttons && /* @__PURE__ */ e("div", { className: "flex gap-1 p-2 overflow-x-auto", children: /* @__PURE__ */ e(
        u2,
        {
          slotId: "dialog-list",
          data: r.buttons,
          component: ({ item: f, index: c, status: B, handelSubmit: m, handelFocus: o }) => /* @__PURE__ */ e(
            R3,
            {
              className: "px-4 max-md:w-full",
              style: {
                ...u(
                  c != r.defaultId && "gray.opacity",
                  c != r.defaultId && { color: "text.color" },
                  B.isFocused && {
                    outlineColor: "primary"
                  },
                  B.isSubmited && {
                    backgroundColor: "primary",
                    color: "primary.content"
                  }
                )
              },
              onPointerDown: o(),
              onClick: m(),
              children: f
            },
            c
          )
        }
      ) })
    ] })
  ] }) });
}, Hr = () => {
  const [r, n] = z2({ hour: null, minute: null }), [u, v] = z2("hours"), s = [12, ...O2(1, 11)], l = [...O2(0, 19)], a = (i, g, y) => {
    const x = i / g * 2 * Math.PI, b = y + y * Math.cos(x - Math.PI / 2), k = y + y * Math.sin(x - Math.PI / 2);
    return { x: b, y: k };
  }, f = (i) => {
    n(u === "hours" ? { ...r, hour: i } : { ...r, minute: i });
  }, c = u === "hours" ? s : l, B = u === "hours" ? 12 : 20, m = 120, o = G(), p = Y("am"), h = Y("0"), t = z.useMemo(() => {
    const i = u === "hours" ? r.hour : r.minute;
    if (i === null) return null;
    const g = i / B * 2 * Math.PI, y = m + m * Math.cos(g - Math.PI / 2), x = m + m * Math.sin(g - Math.PI / 2);
    let b = u == "minutes" ? {
      0: [0, 19],
      20: [20, 39],
      40: [40, 59]
    } : {
      0: [0, 12],
      12: [12, 24]
    };
    const [k, P] = b[u == "minutes" ? h.get : p.get];
    return {
      x: y,
      y: x,
      colorId: w2(k, i, P) ? "primary" : "gray.opacity"
    };
  }, [h.get, p.get, r, B, u]);
  return /* @__PURE__ */ e(x3, { hidden: !0, children: /* @__PURE__ */ A(q3, { className: "flex flex-col max-md:rounded-none w-1/2 max-md:w-full max-md:h-full", children: [
    /* @__PURE__ */ A("div", { className: "flex justify-between items-center gap-2 p-2", children: [
      /* @__PURE__ */ e("h1", { className: "text-3xl", children: /* @__PURE__ */ e(H, { content: "Date" }) }),
      /* @__PURE__ */ e("div", { className: "flex", children: /* @__PURE__ */ e(
        k3,
        {
          icon: T3.solid.faXmark,
          onClick: () => {
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ e(Z, {}),
    /* @__PURE__ */ e("div", { className: "flex justify-center items-center w-full h-full", children: /* @__PURE__ */ A("svg", { width: "300", height: "300", className: "relative", children: [
      t !== null && /* @__PURE__ */ A(M3, { children: [
        /* @__PURE__ */ e(
          "circle",
          {
            cx: "150",
            cy: "150",
            r: "10",
            style: {
              ...o({
                fill: t.colorId
              })
            }
          }
        ),
        /* @__PURE__ */ e(
          "line",
          {
            x1: "150",
            y1: "150",
            x2: t.x + 30,
            y2: t.y + 30,
            style: {
              ...o({
                stroke: t.colorId
              })
            },
            strokeWidth: "2"
          }
        )
      ] }),
      c.map((i, g) => {
        const { x: y, y: x } = a(g, B, 120);
        let b = u === "hours" && r.hour === +p.get + i || u === "minutes" && r.minute === +h.get + i;
        return /* @__PURE__ */ A(
          "g",
          {
            onClick: () => {
              u == "minutes" ? f(+h.get + i) : f(+p.get + i);
            },
            className: "cursor-pointer",
            children: [
              /* @__PURE__ */ e(
                "circle",
                {
                  cx: y + 30,
                  cy: x + 30,
                  r: u == "hours" ? "20" : "15",
                  style: {
                    ...o(
                      {
                        fill: "gray.opacity"
                      },
                      b && {
                        fill: "primary"
                      }
                    )
                  }
                }
              ),
              /* @__PURE__ */ A(
                "text",
                {
                  x: y + 30,
                  y: x + 30,
                  dy: "0.3em",
                  textAnchor: "middle",
                  fontSize: u == "minutes" ? "13" : "16",
                  style: {
                    ...o(
                      {
                        fill: "text.color"
                      },
                      b && {
                        fill: "primary.content"
                      }
                    )
                  },
                  className: "select-none",
                  children: [
                    u == "minutes" && i + +h.get,
                    u == "hours" && i + +p.get
                  ]
                }
              )
            ]
          },
          i
        );
      })
    ] }) }),
    /* @__PURE__ */ e(Z, {}),
    /* @__PURE__ */ e("div", { className: "p-3 text-5xl text-center select-none", children: /* @__PURE__ */ A("span", { className: "cursor-pointer", children: [
      /* @__PURE__ */ e(
        "span",
        {
          style: {
            ...o(
              u == "hours" && {
                color: "primary"
              }
            )
          },
          onClick: () => {
            v("hours");
          },
          className: U(u == "hours" && "font-bold"),
          children: r.hour == null ? "--" : r.hour >= 10 ? r.hour : `0${r.hour}`
        }
      ),
      ":",
      /* @__PURE__ */ e(
        "span",
        {
          style: {
            ...o(
              u == "minutes" && {
                color: "primary"
              }
            )
          },
          onClick: () => {
            v("minutes");
          },
          className: U(u == "minutes" && "font-bold"),
          children: r.minute == null ? "--" : r.minute >= 10 ? r.minute : `0${r.minute}`
        }
      )
    ] }) }),
    /* @__PURE__ */ e(Z, {}),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "relative h-[90px] overflow-hidden", children: /* @__PURE__ */ e(
      _e,
      {
        pages: [
          /* @__PURE__ */ e("div", { className: "flex justify-center items-center px-2 w-full h-full", children: /* @__PURE__ */ e(
            ie,
            {
              tabs: [
                {
                  label: "AM",
                  value: "0"
                },
                {
                  label: "PM",
                  value: "12"
                }
              ],
              state: p
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "flex justify-center items-center px-2 w-full h-full", children: /* @__PURE__ */ e(
            ie,
            {
              tabs: [
                {
                  label: "+00",
                  value: "0"
                },
                {
                  label: "+20",
                  value: "20"
                },
                {
                  label: "+40",
                  value: "40"
                }
              ],
              state: h
            }
          ) })
        ],
        focused: u == "hours" ? 0 : 1
      }
    ) }) }),
    /* @__PURE__ */ e(Z, {}),
    /* @__PURE__ */ A("div", { className: "flex gap-1 p-2", children: [
      /* @__PURE__ */ e(
        R3,
        {
          className: "p-4 capitalize",
          style: {
            ...o("gray.opacity", {
              color: "text.color"
            })
          },
          onClick: () => {
            n({
              hour: null,
              minute: null
            });
          },
          children: /* @__PURE__ */ e(H, { content: "clear" })
        }
      ),
      /* @__PURE__ */ e(R3, { className: "p-4 capitalize", onClick: () => {
      }, children: /* @__PURE__ */ e(H, { content: "set" }) })
    ] })
  ] }) });
}, Ir = () => {
  const r = G(), n = o2.getTemp("id"), u = o2.getTemp("list"), v = b3.getOneFeild("find-item-from-enum", "value"), [s, l] = F5(() => v, [v], 700), a = z.useMemo(() => (u == null ? void 0 : u.filter(({ desc: o, content: p }) => k0([p, o].join(" "), String(l)))) || [], [u, l]), f = E2(a, "enum-list", "focused"), c = E2(a, "enum-list", "submited"), B = s3("preferences/animation.boolean");
  z.useEffect(() => {
    n && c && (o2.setTemp("result", c.value), g3.setOneFeild("enum-list", "focused", null), g3.setOneFeild("enum-list", "submited", null));
  }, [c, n]), z.useEffect(() => {
    B3("enumIsLoading", s);
  }, [s]);
  const m = z.createRef();
  return /* @__PURE__ */ e(
    x3,
    {
      hidden: !n,
      onClick: ({ target: o }) => {
        var p;
        (p = m.current) != null && p.contains(o) || o2.setTemp("id", null);
      },
      children: u && /* @__PURE__ */ A(
        "div",
        {
          ref: m,
          className: "flex flex-col border border-transparent border-solid rounded-md w-[60vw] max-md:w-3/4 h-[400px] max-md:h-3/4 overflow-hidden",
          style: {
            ...r("secondary.background", {
              borderColor: "borders"
            })
          },
          children: [
            /* @__PURE__ */ A("div", { children: [
              /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ e(d2, { inputName: "find-item-from-enum" }) }),
              /* @__PURE__ */ e(Z, {})
            ] }),
            /* @__PURE__ */ A(w3, { children: [
              !s && /* @__PURE__ */ e(
                G2,
                {
                  minSize: 40,
                  maxSize: 200,
                  data: a || [],
                  slotId: "enum-list",
                  focusId: "enum-list",
                  itemSize: 40,
                  countLastItems: -1,
                  component: ({ data: o, style: p, status: h, handel: t }) => {
                    const i = G(), g = o2.getTemp("choised"), y = Y(!1);
                    return /* @__PURE__ */ e(
                      "div",
                      {
                        onMouseEnter: (x) => y.set(!0),
                        onMouseLeave: (x) => y.set(!1),
                        style: {
                          ...p,
                          ...i(
                            g == o.value && {
                              color: "primary"
                            },
                            y.get && "gray.opacity",
                            h.isFocused && "primary",
                            h.isFocused && {
                              color: "primary.content"
                            }
                          )
                        },
                        onClick: () => {
                          t.focus(), t.submit();
                        },
                        className: U("cursor-pointer text-lg p-1 max-md:p-2 flex items-center justify-center", g == o.value && "font-bold"),
                        children: /* @__PURE__ */ e("span", { children: o.content || o.value })
                      }
                    );
                  }
                }
              ),
              s && /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-6 h-full", children: /* @__PURE__ */ e(L2, {}) })
            ] }),
            /* @__PURE__ */ A("div", { className: U("h-[0px]", B && "transition-[height] duration-200", (f == null ? void 0 : f.desc) && "h-[100px]"), children: [
              /* @__PURE__ */ e(Z, {}),
              /* @__PURE__ */ e(
                "div",
                {
                  className: "flex justify-center items-center p-4 h-full text-center",
                  style: {
                    ...r("primary.background")
                  },
                  children: /* @__PURE__ */ e(f2, { value: (f == null ? void 0 : f.desc) || "" })
                }
              )
            ] })
          ]
        }
      )
    }
  );
}, Xr = ({ children: r }) => /* @__PURE__ */ A(M3, { children: [
  r,
  /* @__PURE__ */ e(tr, {}),
  /* @__PURE__ */ e(Or, {}),
  /* @__PURE__ */ e(ir, {}),
  /* @__PURE__ */ e(Sr, {}),
  /* @__PURE__ */ e(Mr, {}),
  /* @__PURE__ */ e(K0, {}),
  /* @__PURE__ */ e(hr, {}),
  /* @__PURE__ */ e(pr, {}),
  /* @__PURE__ */ e(Cr, {}),
  /* @__PURE__ */ e(X0, {}),
  /* @__PURE__ */ e(Ir, {}),
  /* @__PURE__ */ e(lr, {}),
  /* @__PURE__ */ e(gr, {}),
  /* @__PURE__ */ e(Er, {}),
  /* @__PURE__ */ e(ar, {}),
  /* @__PURE__ */ e(R0, {}),
  /* @__PURE__ */ e($0, {})
] }), Yr = z.memo(
  () => {
    const [r, n] = z2(!1), u = z.createRef(), v = () => {
      const s = ["#FF5733", "#FFBD33", "#33FF57", "#3357FF", "#D133FF", "red", "blue", "yellow"];
      return s[Math.floor(Math.random() * s.length)];
    };
    return p5(() => {
      const s = setTimeout(() => {
        n(!0);
      }, 8e3);
      return () => clearTimeout(s);
    }, []), /* @__PURE__ */ e("div", { className: "relative flex justify-center items-center w-screen h-screen", children: /* @__PURE__ */ e("div", { ref: u, className: U("absolute inset-0 pointer-events-none transition-opacity duration-[5000ms] ease-out", r && "opacity-0"), children: O2(1, 30).map((s, l) => /* @__PURE__ */ e(
      "div",
      {
        className: "absolute opacity-70 confetti-piece",
        style: {
          top: -30,
          backgroundColor: v(),
          left: Math.random() * 100 + "vw",
          animationDuration: Math.random() * 3 + 2 + "s",
          animationDelay: Math.random() * 2 + "s"
        }
      },
      l
    )) }) });
  },
  () => !0
), Or = () => {
  var v;
  const r = $3.getTemp("applications"), n = D2("list.applications");
  z.useEffect(() => {
    var l;
    if (!((l = h3.server) != null && l.db))
      return;
    const s = R5(U5(h3.server.db, "projects"), D5("label", "!=", null));
    return _5(s, ({ docs: a }) => {
      n.set(
        a.map((f) => {
          const c = f.data();
          return {
            label: c.label,
            imageUrl: c.imageUrl,
            site: c.site
          };
        })
      );
    });
  }, []);
  const u = G();
  return /* @__PURE__ */ e(De, { hidden: !r, children: /* @__PURE__ */ A(q3, { className: "w-[90vw] max-h-[90vh]", children: [
    /* @__PURE__ */ A("div", { className: "flex justify-between items-center p-2", children: [
      /* @__PURE__ */ e("h1", { className: "text-3xl capitalize", children: "water fetch applications" }),
      /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(
        k3,
        {
          icon: T3.solid.faXmark,
          onClick: () => {
            Q5();
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ e(Z, {}),
    /* @__PURE__ */ e(w3, { children: /* @__PURE__ */ A("div", { className: "flex flex-wrap justify-center gap-2 p-2", children: [
      n.get && !!n.get.length && /* @__PURE__ */ e(H, { content: "no project's detected" }),
      (v = n.get) == null ? void 0 : v.map(({ label: s, imageUrl: l, site: a }, f) => /* @__PURE__ */ e("a", { href: a, target: "_blank", children: /* @__PURE__ */ A(q3, { className: "w-fit", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-3", children: /* @__PURE__ */ e(
          "div",
          {
            className: "flex justify-center items-center border border-transparent border-solid rounded-full w-[100px] h-[100px] overflow-hidden",
            style: {
              ...u("primary.background", {
                borderColor: "borders"
              })
            },
            children: /* @__PURE__ */ e("img", { src: l ?? void 0, className: "w-full h-full object-cover" })
          }
        ) }),
        /* @__PURE__ */ e(Z, {}),
        /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ e("p", { className: "text-center text-xl max-md:text-md", children: s }) })
      ] }) }, f))
    ] }) })
  ] }) });
};
export {
  Or as ApplicationsLayout,
  _r as BottomSheetLayout,
  X0 as CameraView,
  K0 as Commands,
  Yr as CongratulationsView,
  Hr as DateLayout,
  $0 as DevReadingHTML,
  Er as DialogBoxLayout,
  Ir as EnumLayout,
  Y0 as FindCommandInput,
  Z0 as FindSettingFeild,
  Mr as FixedProfileView,
  Qr as Header,
  J0 as HeaderNotification,
  er as HeaderSettings,
  Sr as IframeLayout,
  h2 as KeyboardButton,
  rr as KeyboardShortcuts,
  tr as KeyboardView,
  Xr as Layoutes,
  Vr as LeftSide,
  Ar as LoginContent,
  br as LoginPage,
  ar as MenuList,
  nr as MenuRecord,
  sr as NotifaysSlot,
  lr as Notifications,
  ir as PDFView,
  xr as ProfileContent,
  Nr as ProfileView,
  Wr as RightSide,
  pr as SettingUpdateView,
  kr as SettingUpdating,
  fr as Settings,
  cr as SettingsList,
  vr as SettingsSide,
  dr as SettingsTree,
  hr as SettingsView,
  yr as SignupPage,
  Br as ToastItem,
  gr as Toasts,
  Cr as UpdateKeyboardShortcut,
  ur as UserSetting,
  Gr as Window,
  or as dataKeyboard,
  Xe as emailRegExp,
  He as getTree,
  ue as headerVisibility
};
