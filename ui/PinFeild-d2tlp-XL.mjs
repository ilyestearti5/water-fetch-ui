import { u as O3, b as L3, aO as d2, m as zt, aR as Wt, a as Jr, aS as Yt, a7 as Q2, aT as q2, aU as $t, Q as Gt, _ as Xt, aV as Vt, h as v2, c as Z2 } from "./index-B28S0mrD.mjs";
import { t as B3, i as Ht, a1 as et, e as Jt, y as Kt, r as Qt, s as qt } from "./index-CYYSxI_0.mjs";
import u3, { useMemo as rt, useCallback as br } from "react";
import { allIcons as Ie } from "./apis.js";
var Rr = { exports: {} }, ge = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var m2;
function Zt() {
  if (m2) return ge;
  m2 = 1;
  var e = u3, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(c, l, d) {
    var u, f = {}, p = null, k = null;
    d !== void 0 && (p = "" + d), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (k = l.ref);
    for (u in l) n.call(l, u) && !s.hasOwnProperty(u) && (f[u] = l[u]);
    if (c && c.defaultProps) for (u in l = c.defaultProps, l) f[u] === void 0 && (f[u] = l[u]);
    return { $$typeof: r, type: c, key: p, ref: k, props: f, _owner: a.current };
  }
  return ge.Fragment = t, ge.jsx = o, ge.jsxs = o, ge;
}
var be = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var p2;
function e5() {
  return p2 || (p2 = 1, process.env.NODE_ENV !== "production" && function() {
    var e = u3, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), v = Symbol.iterator, g = "@@iterator";
    function y(i) {
      if (i === null || typeof i != "object")
        return null;
      var B = v && i[v] || i[g];
      return typeof B == "function" ? B : null;
    }
    var P = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(i) {
      {
        for (var B = arguments.length, S = new Array(B > 1 ? B - 1 : 0), M = 1; M < B; M++)
          S[M - 1] = arguments[M];
        x("error", i, S);
      }
    }
    function x(i, B, S) {
      {
        var M = P.ReactDebugCurrentFrame, H = M.getStackAddendum();
        H !== "" && (B += "%s", S = S.concat([H]));
        var $ = S.map(function(N) {
          return String(N);
        });
        $.unshift("Warning: " + B), Function.prototype.apply.call(console[i], console, $);
      }
    }
    var h = !1, b = !1, C = !1, w = !1, T = !1, A;
    A = Symbol.for("react.module.reference");
    function I(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === n || i === s || T || i === a || i === d || i === u || w || i === k || h || b || C || typeof i == "object" && i !== null && (i.$$typeof === p || i.$$typeof === f || i.$$typeof === o || i.$$typeof === c || i.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === A || i.getModuleId !== void 0));
    }
    function j(i, B, S) {
      var M = i.displayName;
      if (M)
        return M;
      var H = B.displayName || B.name || "";
      return H !== "" ? S + "(" + H + ")" : S;
    }
    function L(i) {
      return i.displayName || "Context";
    }
    function D(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case s:
          return "Profiler";
        case a:
          return "StrictMode";
        case d:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case c:
            var B = i;
            return L(B) + ".Consumer";
          case o:
            var S = i;
            return L(S._context) + ".Provider";
          case l:
            return j(i, i.render, "ForwardRef");
          case f:
            var M = i.displayName || null;
            return M !== null ? M : D(i.type) || "Memo";
          case p: {
            var H = i, $ = H._payload, N = H._init;
            try {
              return D(N($));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, z = 0, Q, W, i3, c3, _, O, Y;
    function J() {
    }
    J.__reactDisabledLog = !0;
    function R() {
      {
        if (z === 0) {
          Q = console.log, W = console.info, i3 = console.warn, c3 = console.error, _ = console.group, O = console.groupCollapsed, Y = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: J,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        z++;
      }
    }
    function t3() {
      {
        if (z--, z === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, i, {
              value: Q
            }),
            info: F({}, i, {
              value: W
            }),
            warn: F({}, i, {
              value: i3
            }),
            error: F({}, i, {
              value: c3
            }),
            group: F({}, i, {
              value: _
            }),
            groupCollapsed: F({}, i, {
              value: O
            }),
            groupEnd: F({}, i, {
              value: Y
            })
          });
        }
        z < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = P.ReactCurrentDispatcher, G;
    function Z(i, B, S) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (H) {
            var M = H.stack.trim().match(/\n( *(at )?)/);
            G = M && M[1] || "";
          }
        return `
` + G + i;
      }
    }
    var q = !1, e3;
    {
      var d3 = typeof WeakMap == "function" ? WeakMap : Map;
      e3 = new d3();
    }
    function v3(i, B) {
      if (!i || q)
        return "";
      {
        var S = e3.get(i);
        if (S !== void 0)
          return S;
      }
      var M;
      q = !0;
      var H = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $;
      $ = V.current, V.current = null, R();
      try {
        if (B) {
          var N = function() {
            throw Error();
          };
          if (Object.defineProperty(N.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(N, []);
            } catch (P3) {
              M = P3;
            }
            Reflect.construct(i, [], N);
          } else {
            try {
              N.call();
            } catch (P3) {
              M = P3;
            }
            i.call(N.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P3) {
            M = P3;
          }
          i();
        }
      } catch (P3) {
        if (P3 && M && typeof P3.stack == "string") {
          for (var K = P3.stack.split(`
`), a3 = M.stack.split(`
`), r3 = K.length - 1, s3 = a3.length - 1; r3 >= 1 && s3 >= 0 && K[r3] !== a3[s3]; )
            s3--;
          for (; r3 >= 1 && s3 >= 0; r3--, s3--)
            if (K[r3] !== a3[s3]) {
              if (r3 !== 1 || s3 !== 1)
                do
                  if (r3--, s3--, s3 < 0 || K[r3] !== a3[s3]) {
                    var h3 = `
` + K[r3].replace(" at new ", " at ");
                    return i.displayName && h3.includes("<anonymous>") && (h3 = h3.replace("<anonymous>", i.displayName)), typeof i == "function" && e3.set(i, h3), h3;
                  }
                while (r3 >= 1 && s3 >= 0);
              break;
            }
        }
      } finally {
        q = !1, V.current = $, t3(), Error.prepareStackTrace = H;
      }
      var N3 = i ? i.displayName || i.name : "", b3 = N3 ? Z(N3) : "";
      return typeof i == "function" && e3.set(i, b3), b3;
    }
    function w3(i, B, S) {
      return v3(i, !1);
    }
    function j3(i) {
      var B = i.prototype;
      return !!(B && B.isReactComponent);
    }
    function g3(i, B, S) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return v3(i, j3(i));
      if (typeof i == "string")
        return Z(i);
      switch (i) {
        case d:
          return Z("Suspense");
        case u:
          return Z("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case l:
            return w3(i.render);
          case f:
            return g3(i.type, B, S);
          case p: {
            var M = i, H = M._payload, $ = M._init;
            try {
              return g3($(H), B, S);
            } catch {
            }
          }
        }
      return "";
    }
    var y3 = Object.prototype.hasOwnProperty, A3 = {}, S3 = P.ReactDebugCurrentFrame;
    function p3(i) {
      if (i) {
        var B = i._owner, S = g3(i.type, i._source, B ? B.type : null);
        S3.setExtraStackFrame(S);
      } else
        S3.setExtraStackFrame(null);
    }
    function er(i, B, S, M, H) {
      {
        var $ = Function.call.bind(y3);
        for (var N in i)
          if ($(i, N)) {
            var K = void 0;
            try {
              if (typeof i[N] != "function") {
                var a3 = Error((M || "React class") + ": " + S + " type `" + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[N] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw a3.name = "Invariant Violation", a3;
              }
              K = i[N](B, N, M, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (r3) {
              K = r3;
            }
            K && !(K instanceof Error) && (p3(H), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", M || "React class", S, N, typeof K), p3(null)), K instanceof Error && !(K.message in A3) && (A3[K.message] = !0, p3(H), E("Failed %s type: %s", S, K.message), p3(null));
          }
      }
    }
    var C3 = Array.isArray;
    function X3(i) {
      return C3(i);
    }
    function rr(i) {
      {
        var B = typeof Symbol == "function" && Symbol.toStringTag, S = B && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return S;
      }
    }
    function tr(i) {
      try {
        return ce(i), !1;
      } catch {
        return !0;
      }
    }
    function ce(i) {
      return "" + i;
    }
    function le(i) {
      if (tr(i))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(i)), ce(i);
    }
    var _3 = P.ReactCurrentOwner, nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ue, fe, V3;
    V3 = {};
    function ar(i) {
      if (y3.call(i, "ref")) {
        var B = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function or(i) {
      if (y3.call(i, "key")) {
        var B = Object.getOwnPropertyDescriptor(i, "key").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function ir(i, B) {
      if (typeof i.ref == "string" && _3.current && B && _3.current.stateNode !== B) {
        var S = D(_3.current.type);
        V3[S] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(_3.current.type), i.ref), V3[S] = !0);
      }
    }
    function sr(i, B) {
      {
        var S = function() {
          ue || (ue = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        S.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: S,
          configurable: !0
        });
      }
    }
    function cr(i, B) {
      {
        var S = function() {
          fe || (fe = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        S.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: S,
          configurable: !0
        });
      }
    }
    var lr = function(i, B, S, M, H, $, N) {
      var K = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: i,
        key: B,
        ref: S,
        props: N,
        // Record the component responsible for creating this element.
        _owner: $
      };
      return K._store = {}, Object.defineProperty(K._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(K, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: M
      }), Object.defineProperty(K, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: H
      }), Object.freeze && (Object.freeze(K.props), Object.freeze(K)), K;
    };
    function ur(i, B, S, M, H) {
      {
        var $, N = {}, K = null, a3 = null;
        S !== void 0 && (le(S), K = "" + S), or(B) && (le(B.key), K = "" + B.key), ar(B) && (a3 = B.ref, ir(B, H));
        for ($ in B)
          y3.call(B, $) && !nr.hasOwnProperty($) && (N[$] = B[$]);
        if (i && i.defaultProps) {
          var r3 = i.defaultProps;
          for ($ in r3)
            N[$] === void 0 && (N[$] = r3[$]);
        }
        if (K || a3) {
          var s3 = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          K && sr(N, s3), a3 && cr(N, s3);
        }
        return lr(i, K, a3, H, M, _3.current, N);
      }
    }
    var H3 = P.ReactCurrentOwner, de = P.ReactDebugCurrentFrame;
    function x3(i) {
      if (i) {
        var B = i._owner, S = g3(i.type, i._source, B ? B.type : null);
        de.setExtraStackFrame(S);
      } else
        de.setExtraStackFrame(null);
    }
    var J3;
    J3 = !1;
    function K3(i) {
      return typeof i == "object" && i !== null && i.$$typeof === r;
    }
    function ve() {
      {
        if (H3.current) {
          var i = D(H3.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function fr(i) {
      return "";
    }
    var me = {};
    function dr(i) {
      {
        var B = ve();
        if (!B) {
          var S = typeof i == "string" ? i : i.displayName || i.name;
          S && (B = `

Check the top-level render call using <` + S + ">.");
        }
        return B;
      }
    }
    function pe(i, B) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var S = dr(B);
        if (me[S])
          return;
        me[S] = !0;
        var M = "";
        i && i._owner && i._owner !== H3.current && (M = " It was passed a child from " + D(i._owner.type) + "."), x3(i), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, M), x3(null);
      }
    }
    function he(i, B) {
      {
        if (typeof i != "object")
          return;
        if (X3(i))
          for (var S = 0; S < i.length; S++) {
            var M = i[S];
            K3(M) && pe(M, B);
          }
        else if (K3(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var H = y(i);
          if (typeof H == "function" && H !== i.entries)
            for (var $ = H.call(i), N; !(N = $.next()).done; )
              K3(N.value) && pe(N.value, B);
        }
      }
    }
    function vr(i) {
      {
        var B = i.type;
        if (B == null || typeof B == "string")
          return;
        var S;
        if (typeof B == "function")
          S = B.propTypes;
        else if (typeof B == "object" && (B.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        B.$$typeof === f))
          S = B.propTypes;
        else
          return;
        if (S) {
          var M = D(B);
          er(S, i.props, "prop", M, i);
        } else if (B.PropTypes !== void 0 && !J3) {
          J3 = !0;
          var H = D(B);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", H || "Unknown");
        }
        typeof B.getDefaultProps == "function" && !B.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mr(i) {
      {
        for (var B = Object.keys(i.props), S = 0; S < B.length; S++) {
          var M = B[S];
          if (M !== "children" && M !== "key") {
            x3(i), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", M), x3(null);
            break;
          }
        }
        i.ref !== null && (x3(i), E("Invalid attribute `ref` supplied to `React.Fragment`."), x3(null));
      }
    }
    var ke = {};
    function Me(i, B, S, M, H, $) {
      {
        var N = I(i);
        if (!N) {
          var K = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (K += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var a3 = fr();
          a3 ? K += a3 : K += ve();
          var r3;
          i === null ? r3 = "null" : X3(i) ? r3 = "array" : i !== void 0 && i.$$typeof === r ? (r3 = "<" + (D(i.type) || "Unknown") + " />", K = " Did you accidentally export a JSX literal instead of a component?") : r3 = typeof i, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", r3, K);
        }
        var s3 = ur(i, B, S, H, $);
        if (s3 == null)
          return s3;
        if (N) {
          var h3 = B.children;
          if (h3 !== void 0)
            if (M)
              if (X3(h3)) {
                for (var N3 = 0; N3 < h3.length; N3++)
                  he(h3[N3], i);
                Object.freeze && Object.freeze(h3);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              he(h3, i);
        }
        if (y3.call(B, "key")) {
          var b3 = D(i), P3 = Object.keys(B).filter(function(Ut) {
            return Ut !== "key";
          }), gr = P3.length > 0 ? "{key: someKey, " + P3.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ke[b3 + gr]) {
            var Dt = P3.length > 0 ? "{" + P3.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, gr, b3, Dt, b3), ke[b3 + gr] = !0;
          }
        }
        return i === n ? mr(s3) : vr(s3), s3;
      }
    }
    function pr(i, B, S) {
      return Me(i, B, S, !0);
    }
    function hr(i, B, S) {
      return Me(i, B, S, !1);
    }
    var kr = hr, m = pr;
    be.Fragment = n, be.jsx = kr, be.jsxs = m;
  }()), be;
}
process.env.NODE_ENV === "production" ? Rr.exports = Zt() : Rr.exports = e5();
var Kr = Rr.exports;
const r5 = Kr.Fragment, n3 = Kr.jsx, M3 = Kr.jsxs;
function t5({ className: e, style: r, ...t }) {
  const n = O3(), a = L3(!1);
  return /* @__PURE__ */ n3(
    "a",
    {
      onMouseEnter: () => a.set(!0),
      onMouseLeave: () => a.set(!1),
      className: B3(e, "hover:underline"),
      style: {
        ...n(
          a.get && {
            color: "primary"
          }
        )
      },
      ...t
    }
  );
}
const Z3 = ({ children: e }) => /* @__PURE__ */ n3(r5, { children: e }), tt = (e, r) => {
  const t = d2.getEntity(), n = L3(!1), a = zt("system.base"), s = Wt({ model: "gemini-pro" }), o = Jr("window/lang.enum"), c = u3.useMemo(() => r || o, [r, o]);
  u3.useEffect(() => {
    n.get && (Yt(), n.set(!1));
  }, [a, n.get]);
  const l = u3.useMemo(() => Ht(e, "normal", "cabab").toLowerCase(), [e]), d = u3.useMemo(() => {
    var p;
    return c ? (p = t[l]) == null ? void 0 : p[c] : void 0;
  }, [t, l]), u = Q2(async () => {
    if (c && !d && s && c != "en") {
      await et(300);
      const { response: p } = await s.generateContent(`translate this text to ${c} :

${e}`);
      n.set(!0), d2.upsert([{ word: l, [c]: p.text() }]);
    }
  }, [d, l, c, e, s]);
  return [u3.useMemo(() => d || e, [d, e]), u];
};
function n5({ content: e, lang: r }) {
  const [t, n] = tt(e, r);
  return /* @__PURE__ */ n3(Z3, { children: n ? "..." : t });
}
function ba({ component: e, content: r, lang: t }) {
  const [n, a] = tt(r, t);
  return /* @__PURE__ */ n3(Z3, { children: e({ result: n, isLoading: a }) });
}
function h2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function U(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? h2(Object(t), !0).forEach(function(n) {
      k3(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h2(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function Xe(e) {
  "@babel/helpers - typeof";
  return Xe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Xe(e);
}
function a5(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function o5(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function i5(e, r, t) {
  return r && o5(e.prototype, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function k3(e, r, t) {
  return r in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Qr(e, r) {
  return c5(e) || u5(e, r) || nt(e, r) || d5();
}
function Te(e) {
  return s5(e) || l5(e) || nt(e) || f5();
}
function s5(e) {
  if (Array.isArray(e)) return Mr(e);
}
function c5(e) {
  if (Array.isArray(e)) return e;
}
function l5(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function u5(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], a = !0, s = !1, o, c;
    try {
      for (t = t.call(e); !(a = (o = t.next()).done) && (n.push(o.value), !(r && n.length === r)); a = !0)
        ;
    } catch (l) {
      s = !0, c = l;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (s) throw c;
      }
    }
    return n;
  }
}
function nt(e, r) {
  if (e) {
    if (typeof e == "string") return Mr(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Mr(e, r);
  }
}
function Mr(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function f5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function d5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var k2 = function() {
}, qr = {}, at = {}, ot = null, it = {
  mark: k2,
  measure: k2
};
try {
  typeof window < "u" && (qr = window), typeof document < "u" && (at = document), typeof MutationObserver < "u" && (ot = MutationObserver), typeof performance < "u" && (it = performance);
} catch {
}
var v5 = qr.navigator || {}, g2 = v5.userAgent, b2 = g2 === void 0 ? "" : g2, Y3 = qr, f3 = at, y2 = ot, je = it;
Y3.document;
var z3 = !!f3.documentElement && !!f3.head && typeof f3.addEventListener == "function" && typeof f3.createElement == "function", st = ~b2.indexOf("MSIE") || ~b2.indexOf("Trident/"), Ne, Le, Fe, De, Ue, F3 = "___FONT_AWESOME___", Ir = 16, ct = "fa", lt = "svg-inline--fa", ee = "data-fa-i2svg", jr = "data-fa-pseudo-element", m5 = "data-fa-pseudo-element-pending", Zr = "data-prefix", e2 = "data-icon", w2 = "fontawesome-i2svg", p5 = "async", h5 = ["HTML", "HEAD", "STYLE", "SCRIPT"], ut = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), l3 = "classic", m3 = "sharp", r2 = [l3, m3];
function Ae(e) {
  return new Proxy(e, {
    get: function(t, n) {
      return n in t ? t[n] : t[l3];
    }
  });
}
var xe = Ae((Ne = {}, k3(Ne, l3, {
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
}), k3(Ne, m3, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), Ne)), Ee = Ae((Le = {}, k3(Le, l3, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), k3(Le, m3, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), Le)), Oe = Ae((Fe = {}, k3(Fe, l3, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), k3(Fe, m3, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), Fe)), k5 = Ae((De = {}, k3(De, l3, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), k3(De, m3, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), De)), g5 = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, ft = "fa-layers-text", b5 = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, y5 = Ae((Ue = {}, k3(Ue, l3, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), k3(Ue, m3, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), Ue)), dt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], w5 = dt.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), B5 = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Q3 = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Se = /* @__PURE__ */ new Set();
Object.keys(Ee[l3]).map(Se.add.bind(Se));
Object.keys(Ee[m3]).map(Se.add.bind(Se));
var C5 = [].concat(r2, Te(Se), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Q3.GROUP, Q3.SWAP_OPACITY, Q3.PRIMARY, Q3.SECONDARY]).concat(dt.map(function(e) {
  return "".concat(e, "x");
})).concat(w5.map(function(e) {
  return "w-".concat(e);
})), Ce = Y3.FontAwesomeConfig || {};
function P5(e) {
  var r = f3.querySelector("script[" + e + "]");
  if (r)
    return r.getAttribute(e);
}
function x5(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (f3 && typeof f3.querySelector == "function") {
  var E5 = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  E5.forEach(function(e) {
    var r = Qr(e, 2), t = r[0], n = r[1], a = x5(P5(t));
    a != null && (Ce[n] = a);
  });
}
var vt = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: ct,
  replacementClass: lt,
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
Ce.familyPrefix && (Ce.cssPrefix = Ce.familyPrefix);
var ie = U(U({}, vt), Ce);
ie.autoReplaceSvg || (ie.observeMutations = !1);
var X = {};
Object.keys(vt).forEach(function(e) {
  Object.defineProperty(X, e, {
    enumerable: !0,
    set: function(t) {
      ie[e] = t, Pe.forEach(function(n) {
        return n(X);
      });
    },
    get: function() {
      return ie[e];
    }
  });
});
Object.defineProperty(X, "familyPrefix", {
  enumerable: !0,
  set: function(r) {
    ie.cssPrefix = r, Pe.forEach(function(t) {
      return t(X);
    });
  },
  get: function() {
    return ie.cssPrefix;
  }
});
Y3.FontAwesomeConfig = X;
var Pe = [];
function O5(e) {
  return Pe.push(e), function() {
    Pe.splice(Pe.indexOf(e), 1);
  };
}
var W3 = Ir, I3 = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function S5(e) {
  if (!(!e || !z3)) {
    var r = f3.createElement("style");
    r.setAttribute("type", "text/css"), r.innerHTML = e;
    for (var t = f3.head.childNodes, n = null, a = t.length - 1; a > -1; a--) {
      var s = t[a], o = (s.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (n = s);
    }
    return f3.head.insertBefore(r, n), e;
  }
}
var _5 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function _e() {
  for (var e = 12, r = ""; e-- > 0; )
    r += _5[Math.random() * 62 | 0];
  return r;
}
function se(e) {
  for (var r = [], t = (e || []).length >>> 0; t--; )
    r[t] = e[t];
  return r;
}
function t2(e) {
  return e.classList ? se(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(r) {
    return r;
  });
}
function mt(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function T5(e) {
  return Object.keys(e || {}).reduce(function(r, t) {
    return r + "".concat(t, '="').concat(mt(e[t]), '" ');
  }, "").trim();
}
function Ke(e) {
  return Object.keys(e || {}).reduce(function(r, t) {
    return r + "".concat(t, ": ").concat(e[t].trim(), ";");
  }, "");
}
function n2(e) {
  return e.size !== I3.size || e.x !== I3.x || e.y !== I3.y || e.rotate !== I3.rotate || e.flipX || e.flipY;
}
function A5(e) {
  var r = e.transform, t = e.containerWidth, n = e.iconWidth, a = {
    transform: "translate(".concat(t / 2, " 256)")
  }, s = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), o = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), c = "rotate(".concat(r.rotate, " 0 0)"), l = {
    transform: "".concat(s, " ").concat(o, " ").concat(c)
  }, d = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: l,
    path: d
  };
}
function R5(e) {
  var r = e.transform, t = e.width, n = t === void 0 ? Ir : t, a = e.height, s = a === void 0 ? Ir : a, o = e.startCentered, c = o === void 0 ? !1 : o, l = "";
  return c && st ? l += "translate(".concat(r.x / W3 - n / 2, "em, ").concat(r.y / W3 - s / 2, "em) ") : c ? l += "translate(calc(-50% + ".concat(r.x / W3, "em), calc(-50% + ").concat(r.y / W3, "em)) ") : l += "translate(".concat(r.x / W3, "em, ").concat(r.y / W3, "em) "), l += "scale(".concat(r.size / W3 * (r.flipX ? -1 : 1), ", ").concat(r.size / W3 * (r.flipY ? -1 : 1), ") "), l += "rotate(".concat(r.rotate, "deg) "), l;
}
var M5 = `:root, :host {
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
function pt() {
  var e = ct, r = lt, t = X.cssPrefix, n = X.replacementClass, a = M5;
  if (t !== e || n !== r) {
    var s = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), c = new RegExp("\\.".concat(r), "g");
    a = a.replace(s, ".".concat(t, "-")).replace(o, "--".concat(t, "-")).replace(c, ".".concat(n));
  }
  return a;
}
var B2 = !1;
function yr() {
  X.autoAddCss && !B2 && (S5(pt()), B2 = !0);
}
var I5 = {
  mixout: function() {
    return {
      dom: {
        css: pt,
        insertCss: yr
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        yr();
      },
      beforeI2svg: function() {
        yr();
      }
    };
  }
}, D3 = Y3 || {};
D3[F3] || (D3[F3] = {});
D3[F3].styles || (D3[F3].styles = {});
D3[F3].hooks || (D3[F3].hooks = {});
D3[F3].shims || (D3[F3].shims = []);
var T3 = D3[F3], ht = [], j5 = function e() {
  f3.removeEventListener("DOMContentLoaded", e), Ve = 1, ht.map(function(r) {
    return r();
  });
}, Ve = !1;
z3 && (Ve = (f3.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(f3.readyState), Ve || f3.addEventListener("DOMContentLoaded", j5));
function N5(e) {
  z3 && (Ve ? setTimeout(e, 0) : ht.push(e));
}
function Re(e) {
  var r = e.tag, t = e.attributes, n = t === void 0 ? {} : t, a = e.children, s = a === void 0 ? [] : a;
  return typeof e == "string" ? mt(e) : "<".concat(r, " ").concat(T5(n), ">").concat(s.map(Re).join(""), "</").concat(r, ">");
}
function C2(e, r, t) {
  if (e && e[r] && e[r][t])
    return {
      prefix: r,
      iconName: t,
      icon: e[r][t]
    };
}
var wr = function(r, t, n, a) {
  var s = Object.keys(r), o = s.length, c = t, l, d, u;
  for (n === void 0 ? (l = 1, u = r[s[0]]) : (l = 0, u = n); l < o; l++)
    d = s[l], u = c(u, r[d], d, r);
  return u;
};
function L5(e) {
  for (var r = [], t = 0, n = e.length; t < n; ) {
    var a = e.charCodeAt(t++);
    if (a >= 55296 && a <= 56319 && t < n) {
      var s = e.charCodeAt(t++);
      (s & 64512) == 56320 ? r.push(((a & 1023) << 10) + (s & 1023) + 65536) : (r.push(a), t--);
    } else
      r.push(a);
  }
  return r;
}
function Nr(e) {
  var r = L5(e);
  return r.length === 1 ? r[0].toString(16) : null;
}
function F5(e, r) {
  var t = e.length, n = e.charCodeAt(r), a;
  return n >= 55296 && n <= 56319 && t > r + 1 && (a = e.charCodeAt(r + 1), a >= 56320 && a <= 57343) ? (n - 55296) * 1024 + a - 56320 + 65536 : n;
}
function P2(e) {
  return Object.keys(e).reduce(function(r, t) {
    var n = e[t], a = !!n.icon;
    return a ? r[n.iconName] = n.icon : r[t] = n, r;
  }, {});
}
function Lr(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = t.skipHooks, a = n === void 0 ? !1 : n, s = P2(r);
  typeof T3.hooks.addPack == "function" && !a ? T3.hooks.addPack(e, P2(r)) : T3.styles[e] = U(U({}, T3.styles[e] || {}), s), e === "fas" && Lr("fa", r);
}
var ze, We, Ye, te = T3.styles, D5 = T3.shims, U5 = (ze = {}, k3(ze, l3, Object.values(Oe[l3])), k3(ze, m3, Object.values(Oe[m3])), ze), a2 = null, kt = {}, gt = {}, bt = {}, yt = {}, wt = {}, z5 = (We = {}, k3(We, l3, Object.keys(xe[l3])), k3(We, m3, Object.keys(xe[m3])), We);
function W5(e) {
  return ~C5.indexOf(e);
}
function Y5(e, r) {
  var t = r.split("-"), n = t[0], a = t.slice(1).join("-");
  return n === e && a !== "" && !W5(a) ? a : null;
}
var Bt = function() {
  var r = function(s) {
    return wr(te, function(o, c, l) {
      return o[l] = wr(c, s, {}), o;
    }, {});
  };
  kt = r(function(a, s, o) {
    if (s[3] && (a[s[3]] = o), s[2]) {
      var c = s[2].filter(function(l) {
        return typeof l == "number";
      });
      c.forEach(function(l) {
        a[l.toString(16)] = o;
      });
    }
    return a;
  }), gt = r(function(a, s, o) {
    if (a[o] = o, s[2]) {
      var c = s[2].filter(function(l) {
        return typeof l == "string";
      });
      c.forEach(function(l) {
        a[l] = o;
      });
    }
    return a;
  }), wt = r(function(a, s, o) {
    var c = s[2];
    return a[o] = o, c.forEach(function(l) {
      a[l] = o;
    }), a;
  });
  var t = "far" in te || X.autoFetchSvg, n = wr(D5, function(a, s) {
    var o = s[0], c = s[1], l = s[2];
    return c === "far" && !t && (c = "fas"), typeof o == "string" && (a.names[o] = {
      prefix: c,
      iconName: l
    }), typeof o == "number" && (a.unicodes[o.toString(16)] = {
      prefix: c,
      iconName: l
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  bt = n.names, yt = n.unicodes, a2 = Qe(X.styleDefault, {
    family: X.familyDefault
  });
};
O5(function(e) {
  a2 = Qe(e.styleDefault, {
    family: X.familyDefault
  });
});
Bt();
function o2(e, r) {
  return (kt[e] || {})[r];
}
function $5(e, r) {
  return (gt[e] || {})[r];
}
function q3(e, r) {
  return (wt[e] || {})[r];
}
function Ct(e) {
  return bt[e] || {
    prefix: null,
    iconName: null
  };
}
function G5(e) {
  var r = yt[e], t = o2("fas", e);
  return r || (t ? {
    prefix: "fas",
    iconName: t
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function $3() {
  return a2;
}
var i2 = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Qe(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = r.family, n = t === void 0 ? l3 : t, a = xe[n][e], s = Ee[n][e] || Ee[n][a], o = e in T3.styles ? e : null;
  return s || o || null;
}
var x2 = (Ye = {}, k3(Ye, l3, Object.keys(Oe[l3])), k3(Ye, m3, Object.keys(Oe[m3])), Ye);
function qe(e) {
  var r, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.skipLookups, a = n === void 0 ? !1 : n, s = (r = {}, k3(r, l3, "".concat(X.cssPrefix, "-").concat(l3)), k3(r, m3, "".concat(X.cssPrefix, "-").concat(m3)), r), o = null, c = l3;
  (e.includes(s[l3]) || e.some(function(d) {
    return x2[l3].includes(d);
  })) && (c = l3), (e.includes(s[m3]) || e.some(function(d) {
    return x2[m3].includes(d);
  })) && (c = m3);
  var l = e.reduce(function(d, u) {
    var f = Y5(X.cssPrefix, u);
    if (te[u] ? (u = U5[c].includes(u) ? k5[c][u] : u, o = u, d.prefix = u) : z5[c].indexOf(u) > -1 ? (o = u, d.prefix = Qe(u, {
      family: c
    })) : f ? d.iconName = f : u !== X.replacementClass && u !== s[l3] && u !== s[m3] && d.rest.push(u), !a && d.prefix && d.iconName) {
      var p = o === "fa" ? Ct(d.iconName) : {}, k = q3(d.prefix, d.iconName);
      p.prefix && (o = null), d.iconName = p.iconName || k || d.iconName, d.prefix = p.prefix || d.prefix, d.prefix === "far" && !te.far && te.fas && !X.autoFetchSvg && (d.prefix = "fas");
    }
    return d;
  }, i2());
  return (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"), !l.prefix && c === m3 && (te.fass || X.autoFetchSvg) && (l.prefix = "fass", l.iconName = q3(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || o === "fa") && (l.prefix = $3() || "fas"), l;
}
var X5 = /* @__PURE__ */ function() {
  function e() {
    a5(this, e), this.definitions = {};
  }
  return i5(e, [{
    key: "add",
    value: function() {
      for (var t = this, n = arguments.length, a = new Array(n), s = 0; s < n; s++)
        a[s] = arguments[s];
      var o = a.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(c) {
        t.definitions[c] = U(U({}, t.definitions[c] || {}), o[c]), Lr(c, o[c]);
        var l = Oe[l3][c];
        l && Lr(l, o[c]), Bt();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(t, n) {
      var a = n.prefix && n.iconName && n.icon ? {
        0: n
      } : n;
      return Object.keys(a).map(function(s) {
        var o = a[s], c = o.prefix, l = o.iconName, d = o.icon, u = d[2];
        t[c] || (t[c] = {}), u.length > 0 && u.forEach(function(f) {
          typeof f == "string" && (t[c][f] = d);
        }), t[c][l] = d;
      }), t;
    }
  }]), e;
}(), E2 = [], ne = {}, oe = {}, V5 = Object.keys(oe);
function H5(e, r) {
  var t = r.mixoutsTo;
  return E2 = e, ne = {}, Object.keys(oe).forEach(function(n) {
    V5.indexOf(n) === -1 && delete oe[n];
  }), E2.forEach(function(n) {
    var a = n.mixout ? n.mixout() : {};
    if (Object.keys(a).forEach(function(o) {
      typeof a[o] == "function" && (t[o] = a[o]), Xe(a[o]) === "object" && Object.keys(a[o]).forEach(function(c) {
        t[o] || (t[o] = {}), t[o][c] = a[o][c];
      });
    }), n.hooks) {
      var s = n.hooks();
      Object.keys(s).forEach(function(o) {
        ne[o] || (ne[o] = []), ne[o].push(s[o]);
      });
    }
    n.provides && n.provides(oe);
  }), t;
}
function Fr(e, r) {
  for (var t = arguments.length, n = new Array(t > 2 ? t - 2 : 0), a = 2; a < t; a++)
    n[a - 2] = arguments[a];
  var s = ne[e] || [];
  return s.forEach(function(o) {
    r = o.apply(null, [r].concat(n));
  }), r;
}
function re(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var a = ne[e] || [];
  a.forEach(function(s) {
    s.apply(null, t);
  });
}
function U3() {
  var e = arguments[0], r = Array.prototype.slice.call(arguments, 1);
  return oe[e] ? oe[e].apply(null, r) : void 0;
}
function Dr(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var r = e.iconName, t = e.prefix || $3();
  if (r)
    return r = q3(t, r) || r, C2(Pt.definitions, t, r) || C2(T3.styles, t, r);
}
var Pt = new X5(), J5 = function() {
  X.autoReplaceSvg = !1, X.observeMutations = !1, re("noAuto");
}, K5 = {
  i2svg: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return z3 ? (re("beforeI2svg", r), U3("pseudoElements2svg", r), U3("i2svg", r)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = r.autoReplaceSvgRoot;
    X.autoReplaceSvg === !1 && (X.autoReplaceSvg = !0), X.observeMutations = !0, N5(function() {
      q5({
        autoReplaceSvgRoot: t
      }), re("watch", r);
    });
  }
}, Q5 = {
  icon: function(r) {
    if (r === null)
      return null;
    if (Xe(r) === "object" && r.prefix && r.iconName)
      return {
        prefix: r.prefix,
        iconName: q3(r.prefix, r.iconName) || r.iconName
      };
    if (Array.isArray(r) && r.length === 2) {
      var t = r[1].indexOf("fa-") === 0 ? r[1].slice(3) : r[1], n = Qe(r[0]);
      return {
        prefix: n,
        iconName: q3(n, t) || t
      };
    }
    if (typeof r == "string" && (r.indexOf("".concat(X.cssPrefix, "-")) > -1 || r.match(g5))) {
      var a = qe(r.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: a.prefix || $3(),
        iconName: q3(a.prefix, a.iconName) || a.iconName
      };
    }
    if (typeof r == "string") {
      var s = $3();
      return {
        prefix: s,
        iconName: q3(s, r) || r
      };
    }
  }
}, E3 = {
  noAuto: J5,
  config: X,
  dom: K5,
  parse: Q5,
  library: Pt,
  findIconDefinition: Dr,
  toHtml: Re
}, q5 = function() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = r.autoReplaceSvgRoot, n = t === void 0 ? f3 : t;
  (Object.keys(T3.styles).length > 0 || X.autoFetchSvg) && z3 && X.autoReplaceSvg && E3.dom.i2svg({
    node: n
  });
};
function Ze(e, r) {
  return Object.defineProperty(e, "abstract", {
    get: r
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(n) {
        return Re(n);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (z3) {
        var n = f3.createElement("div");
        return n.innerHTML = e.html, n.children;
      }
    }
  }), e;
}
function Z5(e) {
  var r = e.children, t = e.main, n = e.mask, a = e.attributes, s = e.styles, o = e.transform;
  if (n2(o) && t.found && !n.found) {
    var c = t.width, l = t.height, d = {
      x: c / l / 2,
      y: 0.5
    };
    a.style = Ke(U(U({}, s), {}, {
      "transform-origin": "".concat(d.x + o.x / 16, "em ").concat(d.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: r
  }];
}
function en(e) {
  var r = e.prefix, t = e.iconName, n = e.children, a = e.attributes, s = e.symbol, o = s === !0 ? "".concat(r, "-").concat(X.cssPrefix, "-").concat(t) : s;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: U(U({}, a), {}, {
        id: o
      }),
      children: n
    }]
  }];
}
function s2(e) {
  var r = e.icons, t = r.main, n = r.mask, a = e.prefix, s = e.iconName, o = e.transform, c = e.symbol, l = e.title, d = e.maskId, u = e.titleId, f = e.extra, p = e.watchable, k = p === void 0 ? !1 : p, v = n.found ? n : t, g = v.width, y = v.height, P = a === "fak", E = [X.replacementClass, s ? "".concat(X.cssPrefix, "-").concat(s) : ""].filter(function(A) {
    return f.classes.indexOf(A) === -1;
  }).filter(function(A) {
    return A !== "" || !!A;
  }).concat(f.classes).join(" "), x = {
    children: [],
    attributes: U(U({}, f.attributes), {}, {
      "data-prefix": a,
      "data-icon": s,
      class: E,
      role: f.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(g, " ").concat(y)
    })
  }, h = P && !~f.classes.indexOf("fa-fw") ? {
    width: "".concat(g / y * 16 * 0.0625, "em")
  } : {};
  k && (x.attributes[ee] = ""), l && (x.children.push({
    tag: "title",
    attributes: {
      id: x.attributes["aria-labelledby"] || "title-".concat(u || _e())
    },
    children: [l]
  }), delete x.attributes.title);
  var b = U(U({}, x), {}, {
    prefix: a,
    iconName: s,
    main: t,
    mask: n,
    maskId: d,
    transform: o,
    symbol: c,
    styles: U(U({}, h), f.styles)
  }), C = n.found && t.found ? U3("generateAbstractMask", b) || {
    children: [],
    attributes: {}
  } : U3("generateAbstractIcon", b) || {
    children: [],
    attributes: {}
  }, w = C.children, T = C.attributes;
  return b.children = w, b.attributes = T, c ? en(b) : Z5(b);
}
function O2(e) {
  var r = e.content, t = e.width, n = e.height, a = e.transform, s = e.title, o = e.extra, c = e.watchable, l = c === void 0 ? !1 : c, d = U(U(U({}, o.attributes), s ? {
    title: s
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  l && (d[ee] = "");
  var u = U({}, o.styles);
  n2(a) && (u.transform = R5({
    transform: a,
    startCentered: !0,
    width: t,
    height: n
  }), u["-webkit-transform"] = u.transform);
  var f = Ke(u);
  f.length > 0 && (d.style = f);
  var p = [];
  return p.push({
    tag: "span",
    attributes: d,
    children: [r]
  }), s && p.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [s]
  }), p;
}
function rn(e) {
  var r = e.content, t = e.title, n = e.extra, a = U(U(U({}, n.attributes), t ? {
    title: t
  } : {}), {}, {
    class: n.classes.join(" ")
  }), s = Ke(n.styles);
  s.length > 0 && (a.style = s);
  var o = [];
  return o.push({
    tag: "span",
    attributes: a,
    children: [r]
  }), t && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [t]
  }), o;
}
var Br = T3.styles;
function Ur(e) {
  var r = e[0], t = e[1], n = e.slice(4), a = Qr(n, 1), s = a[0], o = null;
  return Array.isArray(s) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(X.cssPrefix, "-").concat(Q3.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(X.cssPrefix, "-").concat(Q3.SECONDARY),
        fill: "currentColor",
        d: s[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(X.cssPrefix, "-").concat(Q3.PRIMARY),
        fill: "currentColor",
        d: s[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: s
    }
  }, {
    found: !0,
    width: r,
    height: t,
    icon: o
  };
}
var tn = {
  found: !1,
  width: 512,
  height: 512
};
function nn(e, r) {
  !ut && !X.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(r, '" is missing.'));
}
function zr(e, r) {
  var t = r;
  return r === "fa" && X.styleDefault !== null && (r = $3()), new Promise(function(n, a) {
    if (U3("missingIconAbstract"), t === "fa") {
      var s = Ct(e) || {};
      e = s.iconName || e, r = s.prefix || r;
    }
    if (e && r && Br[r] && Br[r][e]) {
      var o = Br[r][e];
      return n(Ur(o));
    }
    nn(e, r), n(U(U({}, tn), {}, {
      icon: X.showMissingIcons && e ? U3("missingIconAbstract") || {} : {}
    }));
  });
}
var S2 = function() {
}, Wr = X.measurePerformance && je && je.mark && je.measure ? je : {
  mark: S2,
  measure: S2
}, Be = 'FA "6.5.2"', an = function(r) {
  return Wr.mark("".concat(Be, " ").concat(r, " begins")), function() {
    return xt(r);
  };
}, xt = function(r) {
  Wr.mark("".concat(Be, " ").concat(r, " ends")), Wr.measure("".concat(Be, " ").concat(r), "".concat(Be, " ").concat(r, " begins"), "".concat(Be, " ").concat(r, " ends"));
}, c2 = {
  begin: an,
  end: xt
}, $e = function() {
};
function _2(e) {
  var r = e.getAttribute ? e.getAttribute(ee) : null;
  return typeof r == "string";
}
function on(e) {
  var r = e.getAttribute ? e.getAttribute(Zr) : null, t = e.getAttribute ? e.getAttribute(e2) : null;
  return r && t;
}
function sn(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(X.replacementClass);
}
function cn() {
  if (X.autoReplaceSvg === !0)
    return Ge.replace;
  var e = Ge[X.autoReplaceSvg];
  return e || Ge.replace;
}
function ln(e) {
  return f3.createElementNS("http://www.w3.org/2000/svg", e);
}
function un(e) {
  return f3.createElement(e);
}
function Et(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = r.ceFn, n = t === void 0 ? e.tag === "svg" ? ln : un : t;
  if (typeof e == "string")
    return f3.createTextNode(e);
  var a = n(e.tag);
  Object.keys(e.attributes || []).forEach(function(o) {
    a.setAttribute(o, e.attributes[o]);
  });
  var s = e.children || [];
  return s.forEach(function(o) {
    a.appendChild(Et(o, {
      ceFn: n
    }));
  }), a;
}
function fn(e) {
  var r = " ".concat(e.outerHTML, " ");
  return r = "".concat(r, "Font Awesome fontawesome.com "), r;
}
var Ge = {
  replace: function(r) {
    var t = r[0];
    if (t.parentNode)
      if (r[1].forEach(function(a) {
        t.parentNode.insertBefore(Et(a), t);
      }), t.getAttribute(ee) === null && X.keepOriginalSource) {
        var n = f3.createComment(fn(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(r) {
    var t = r[0], n = r[1];
    if (~t2(t).indexOf(X.replacementClass))
      return Ge.replace(r);
    var a = new RegExp("".concat(X.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      var s = n[0].attributes.class.split(" ").reduce(function(c, l) {
        return l === X.replacementClass || l.match(a) ? c.toSvg.push(l) : c.toNode.push(l), c;
      }, {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = s.toSvg.join(" "), s.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", s.toNode.join(" "));
    }
    var o = n.map(function(c) {
      return Re(c);
    }).join(`
`);
    t.setAttribute(ee, ""), t.innerHTML = o;
  }
};
function T2(e) {
  e();
}
function Ot(e, r) {
  var t = typeof r == "function" ? r : $e;
  if (e.length === 0)
    t();
  else {
    var n = T2;
    X.mutateApproach === p5 && (n = Y3.requestAnimationFrame || T2), n(function() {
      var a = cn(), s = c2.begin("mutate");
      e.map(a), s(), t();
    });
  }
}
var l2 = !1;
function St() {
  l2 = !0;
}
function Yr() {
  l2 = !1;
}
var He = null;
function A2(e) {
  if (y2 && X.observeMutations) {
    var r = e.treeCallback, t = r === void 0 ? $e : r, n = e.nodeCallback, a = n === void 0 ? $e : n, s = e.pseudoElementsCallback, o = s === void 0 ? $e : s, c = e.observeMutationsRoot, l = c === void 0 ? f3 : c;
    He = new y2(function(d) {
      if (!l2) {
        var u = $3();
        se(d).forEach(function(f) {
          if (f.type === "childList" && f.addedNodes.length > 0 && !_2(f.addedNodes[0]) && (X.searchPseudoElements && o(f.target), t(f.target)), f.type === "attributes" && f.target.parentNode && X.searchPseudoElements && o(f.target.parentNode), f.type === "attributes" && _2(f.target) && ~B5.indexOf(f.attributeName))
            if (f.attributeName === "class" && on(f.target)) {
              var p = qe(t2(f.target)), k = p.prefix, v = p.iconName;
              f.target.setAttribute(Zr, k || u), v && f.target.setAttribute(e2, v);
            } else sn(f.target) && a(f.target);
        });
      }
    }), z3 && He.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function dn() {
  He && He.disconnect();
}
function vn(e) {
  var r = e.getAttribute("style"), t = [];
  return r && (t = r.split(";").reduce(function(n, a) {
    var s = a.split(":"), o = s[0], c = s.slice(1);
    return o && c.length > 0 && (n[o] = c.join(":").trim()), n;
  }, {})), t;
}
function mn(e) {
  var r = e.getAttribute("data-prefix"), t = e.getAttribute("data-icon"), n = e.innerText !== void 0 ? e.innerText.trim() : "", a = qe(t2(e));
  return a.prefix || (a.prefix = $3()), r && t && (a.prefix = r, a.iconName = t), a.iconName && a.prefix || (a.prefix && n.length > 0 && (a.iconName = $5(a.prefix, e.innerText) || o2(a.prefix, Nr(e.innerText))), !a.iconName && X.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function pn(e) {
  var r = se(e.attributes).reduce(function(a, s) {
    return a.name !== "class" && a.name !== "style" && (a[s.name] = s.value), a;
  }, {}), t = e.getAttribute("title"), n = e.getAttribute("data-fa-title-id");
  return X.autoA11y && (t ? r["aria-labelledby"] = "".concat(X.replacementClass, "-title-").concat(n || _e()) : (r["aria-hidden"] = "true", r.focusable = "false")), r;
}
function hn() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: I3,
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
function R2(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, t = mn(e), n = t.iconName, a = t.prefix, s = t.rest, o = pn(e), c = Fr("parseNodeAttributes", {}, e), l = r.styleParser ? vn(e) : [];
  return U({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: I3,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: s,
      styles: l,
      attributes: o
    }
  }, c);
}
var kn = T3.styles;
function _t(e) {
  var r = X.autoReplaceSvg === "nest" ? R2(e, {
    styleParser: !1
  }) : R2(e);
  return ~r.extra.classes.indexOf(ft) ? U3("generateLayersText", e, r) : U3("generateSvgReplacementMutation", e, r);
}
var G3 = /* @__PURE__ */ new Set();
r2.map(function(e) {
  G3.add("fa-".concat(e));
});
Object.keys(xe[l3]).map(G3.add.bind(G3));
Object.keys(xe[m3]).map(G3.add.bind(G3));
G3 = Te(G3);
function M2(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!z3) return Promise.resolve();
  var t = f3.documentElement.classList, n = function(f) {
    return t.add("".concat(w2, "-").concat(f));
  }, a = function(f) {
    return t.remove("".concat(w2, "-").concat(f));
  }, s = X.autoFetchSvg ? G3 : r2.map(function(u) {
    return "fa-".concat(u);
  }).concat(Object.keys(kn));
  s.includes("fa") || s.push("fa");
  var o = [".".concat(ft, ":not([").concat(ee, "])")].concat(s.map(function(u) {
    return ".".concat(u, ":not([").concat(ee, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var c = [];
  try {
    c = se(e.querySelectorAll(o));
  } catch {
  }
  if (c.length > 0)
    n("pending"), a("complete");
  else
    return Promise.resolve();
  var l = c2.begin("onTree"), d = c.reduce(function(u, f) {
    try {
      var p = _t(f);
      p && u.push(p);
    } catch (k) {
      ut || k.name === "MissingIcon" && console.error(k);
    }
    return u;
  }, []);
  return new Promise(function(u, f) {
    Promise.all(d).then(function(p) {
      Ot(p, function() {
        n("active"), n("complete"), a("pending"), typeof r == "function" && r(), l(), u();
      });
    }).catch(function(p) {
      l(), f(p);
    });
  });
}
function gn(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  _t(e).then(function(t) {
    t && Ot([t], r);
  });
}
function bn(e) {
  return function(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (r || {}).icon ? r : Dr(r || {}), a = t.mask;
    return a && (a = (a || {}).icon ? a : Dr(a || {})), e(n, U(U({}, t), {}, {
      mask: a
    }));
  };
}
var yn = function(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.transform, a = n === void 0 ? I3 : n, s = t.symbol, o = s === void 0 ? !1 : s, c = t.mask, l = c === void 0 ? null : c, d = t.maskId, u = d === void 0 ? null : d, f = t.title, p = f === void 0 ? null : f, k = t.titleId, v = k === void 0 ? null : k, g = t.classes, y = g === void 0 ? [] : g, P = t.attributes, E = P === void 0 ? {} : P, x = t.styles, h = x === void 0 ? {} : x;
  if (r) {
    var b = r.prefix, C = r.iconName, w = r.icon;
    return Ze(U({
      type: "icon"
    }, r), function() {
      return re("beforeDOMElementCreation", {
        iconDefinition: r,
        params: t
      }), X.autoA11y && (p ? E["aria-labelledby"] = "".concat(X.replacementClass, "-title-").concat(v || _e()) : (E["aria-hidden"] = "true", E.focusable = "false")), s2({
        icons: {
          main: Ur(w),
          mask: l ? Ur(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: b,
        iconName: C,
        transform: U(U({}, I3), a),
        symbol: o,
        title: p,
        maskId: u,
        titleId: v,
        extra: {
          attributes: E,
          styles: h,
          classes: y
        }
      });
    });
  }
}, wn = {
  mixout: function() {
    return {
      icon: bn(yn)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(t) {
        return t.treeCallback = M2, t.nodeCallback = gn, t;
      }
    };
  },
  provides: function(r) {
    r.i2svg = function(t) {
      var n = t.node, a = n === void 0 ? f3 : n, s = t.callback, o = s === void 0 ? function() {
      } : s;
      return M2(a, o);
    }, r.generateSvgReplacementMutation = function(t, n) {
      var a = n.iconName, s = n.title, o = n.titleId, c = n.prefix, l = n.transform, d = n.symbol, u = n.mask, f = n.maskId, p = n.extra;
      return new Promise(function(k, v) {
        Promise.all([zr(a, c), u.iconName ? zr(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(g) {
          var y = Qr(g, 2), P = y[0], E = y[1];
          k([t, s2({
            icons: {
              main: P,
              mask: E
            },
            prefix: c,
            iconName: a,
            transform: l,
            symbol: d,
            maskId: f,
            title: s,
            titleId: o,
            extra: p,
            watchable: !0
          })]);
        }).catch(v);
      });
    }, r.generateAbstractIcon = function(t) {
      var n = t.children, a = t.attributes, s = t.main, o = t.transform, c = t.styles, l = Ke(c);
      l.length > 0 && (a.style = l);
      var d;
      return n2(o) && (d = U3("generateAbstractTransformGrouping", {
        main: s,
        transform: o,
        containerWidth: s.width,
        iconWidth: s.width
      })), n.push(d || s.icon), {
        children: n,
        attributes: a
      };
    };
  }
}, Bn = {
  mixout: function() {
    return {
      layer: function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.classes, s = a === void 0 ? [] : a;
        return Ze({
          type: "layer"
        }, function() {
          re("beforeDOMElementCreation", {
            assembler: t,
            params: n
          });
          var o = [];
          return t(function(c) {
            Array.isArray(c) ? c.map(function(l) {
              o = o.concat(l.abstract);
            }) : o = o.concat(c.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(X.cssPrefix, "-layers")].concat(Te(s)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, Cn = {
  mixout: function() {
    return {
      counter: function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.title, s = a === void 0 ? null : a, o = n.classes, c = o === void 0 ? [] : o, l = n.attributes, d = l === void 0 ? {} : l, u = n.styles, f = u === void 0 ? {} : u;
        return Ze({
          type: "counter",
          content: t
        }, function() {
          return re("beforeDOMElementCreation", {
            content: t,
            params: n
          }), rn({
            content: t.toString(),
            title: s,
            extra: {
              attributes: d,
              styles: f,
              classes: ["".concat(X.cssPrefix, "-layers-counter")].concat(Te(c))
            }
          });
        });
      }
    };
  }
}, Pn = {
  mixout: function() {
    return {
      text: function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.transform, s = a === void 0 ? I3 : a, o = n.title, c = o === void 0 ? null : o, l = n.classes, d = l === void 0 ? [] : l, u = n.attributes, f = u === void 0 ? {} : u, p = n.styles, k = p === void 0 ? {} : p;
        return Ze({
          type: "text",
          content: t
        }, function() {
          return re("beforeDOMElementCreation", {
            content: t,
            params: n
          }), O2({
            content: t,
            transform: U(U({}, I3), s),
            title: c,
            extra: {
              attributes: f,
              styles: k,
              classes: ["".concat(X.cssPrefix, "-layers-text")].concat(Te(d))
            }
          });
        });
      }
    };
  },
  provides: function(r) {
    r.generateLayersText = function(t, n) {
      var a = n.title, s = n.transform, o = n.extra, c = null, l = null;
      if (st) {
        var d = parseInt(getComputedStyle(t).fontSize, 10), u = t.getBoundingClientRect();
        c = u.width / d, l = u.height / d;
      }
      return X.autoA11y && !a && (o.attributes["aria-hidden"] = "true"), Promise.resolve([t, O2({
        content: t.innerHTML,
        width: c,
        height: l,
        transform: s,
        title: a,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, xn = new RegExp('"', "ug"), I2 = [1105920, 1112319];
function En(e) {
  var r = e.replace(xn, ""), t = F5(r, 0), n = t >= I2[0] && t <= I2[1], a = r.length === 2 ? r[0] === r[1] : !1;
  return {
    value: Nr(a ? r[0] : r),
    isSecondary: n || a
  };
}
function j2(e, r) {
  var t = "".concat(m5).concat(r.replace(":", "-"));
  return new Promise(function(n, a) {
    if (e.getAttribute(t) !== null)
      return n();
    var s = se(e.children), o = s.filter(function(w) {
      return w.getAttribute(jr) === r;
    })[0], c = Y3.getComputedStyle(e, r), l = c.getPropertyValue("font-family").match(b5), d = c.getPropertyValue("font-weight"), u = c.getPropertyValue("content");
    if (o && !l)
      return e.removeChild(o), n();
    if (l && u !== "none" && u !== "") {
      var f = c.getPropertyValue("content"), p = ~["Sharp"].indexOf(l[2]) ? m3 : l3, k = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? Ee[p][l[2].toLowerCase()] : y5[p][d], v = En(f), g = v.value, y = v.isSecondary, P = l[0].startsWith("FontAwesome"), E = o2(k, g), x = E;
      if (P) {
        var h = G5(g);
        h.iconName && h.prefix && (E = h.iconName, k = h.prefix);
      }
      if (E && !y && (!o || o.getAttribute(Zr) !== k || o.getAttribute(e2) !== x)) {
        e.setAttribute(t, x), o && e.removeChild(o);
        var b = hn(), C = b.extra;
        C.attributes[jr] = r, zr(E, k).then(function(w) {
          var T = s2(U(U({}, b), {}, {
            icons: {
              main: w,
              mask: i2()
            },
            prefix: k,
            iconName: x,
            extra: C,
            watchable: !0
          })), A = f3.createElementNS("http://www.w3.org/2000/svg", "svg");
          r === "::before" ? e.insertBefore(A, e.firstChild) : e.appendChild(A), A.outerHTML = T.map(function(I) {
            return Re(I);
          }).join(`
`), e.removeAttribute(t), n();
        }).catch(a);
      } else
        n();
    } else
      n();
  });
}
function On(e) {
  return Promise.all([j2(e, "::before"), j2(e, "::after")]);
}
function Sn(e) {
  return e.parentNode !== document.head && !~h5.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(jr) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function N2(e) {
  if (z3)
    return new Promise(function(r, t) {
      var n = se(e.querySelectorAll("*")).filter(Sn).map(On), a = c2.begin("searchPseudoElements");
      St(), Promise.all(n).then(function() {
        a(), Yr(), r();
      }).catch(function() {
        a(), Yr(), t();
      });
    });
}
var _n = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(t) {
        return t.pseudoElementsCallback = N2, t;
      }
    };
  },
  provides: function(r) {
    r.pseudoElements2svg = function(t) {
      var n = t.node, a = n === void 0 ? f3 : n;
      X.searchPseudoElements && N2(a);
    };
  }
}, L2 = !1, Tn = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          St(), L2 = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        A2(Fr("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        dn();
      },
      watch: function(t) {
        var n = t.observeMutationsRoot;
        L2 ? Yr() : A2(Fr("mutationObserverCallbacks", {
          observeMutationsRoot: n
        }));
      }
    };
  }
}, F2 = function(r) {
  var t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return r.toLowerCase().split(" ").reduce(function(n, a) {
    var s = a.toLowerCase().split("-"), o = s[0], c = s.slice(1).join("-");
    if (o && c === "h")
      return n.flipX = !0, n;
    if (o && c === "v")
      return n.flipY = !0, n;
    if (c = parseFloat(c), isNaN(c))
      return n;
    switch (o) {
      case "grow":
        n.size = n.size + c;
        break;
      case "shrink":
        n.size = n.size - c;
        break;
      case "left":
        n.x = n.x - c;
        break;
      case "right":
        n.x = n.x + c;
        break;
      case "up":
        n.y = n.y - c;
        break;
      case "down":
        n.y = n.y + c;
        break;
      case "rotate":
        n.rotate = n.rotate + c;
        break;
    }
    return n;
  }, t);
}, An = {
  mixout: function() {
    return {
      parse: {
        transform: function(t) {
          return F2(t);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(t, n) {
        var a = n.getAttribute("data-fa-transform");
        return a && (t.transform = F2(a)), t;
      }
    };
  },
  provides: function(r) {
    r.generateAbstractTransformGrouping = function(t) {
      var n = t.main, a = t.transform, s = t.containerWidth, o = t.iconWidth, c = {
        transform: "translate(".concat(s / 2, " 256)")
      }, l = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), d = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), u = "rotate(".concat(a.rotate, " 0 0)"), f = {
        transform: "".concat(l, " ").concat(d, " ").concat(u)
      }, p = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, k = {
        outer: c,
        inner: f,
        path: p
      };
      return {
        tag: "g",
        attributes: U({}, k.outer),
        children: [{
          tag: "g",
          attributes: U({}, k.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: U(U({}, n.icon.attributes), k.path)
          }]
        }]
      };
    };
  }
}, Cr = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function D2(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || r) && (e.attributes.fill = "black"), e;
}
function Rn(e) {
  return e.tag === "g" ? e.children : [e];
}
var Mn = {
  hooks: function() {
    return {
      parseNodeAttributes: function(t, n) {
        var a = n.getAttribute("data-fa-mask"), s = a ? qe(a.split(" ").map(function(o) {
          return o.trim();
        })) : i2();
        return s.prefix || (s.prefix = $3()), t.mask = s, t.maskId = n.getAttribute("data-fa-mask-id"), t;
      }
    };
  },
  provides: function(r) {
    r.generateAbstractMask = function(t) {
      var n = t.children, a = t.attributes, s = t.main, o = t.mask, c = t.maskId, l = t.transform, d = s.width, u = s.icon, f = o.width, p = o.icon, k = A5({
        transform: l,
        containerWidth: f,
        iconWidth: d
      }), v = {
        tag: "rect",
        attributes: U(U({}, Cr), {}, {
          fill: "white"
        })
      }, g = u.children ? {
        children: u.children.map(D2)
      } : {}, y = {
        tag: "g",
        attributes: U({}, k.inner),
        children: [D2(U({
          tag: u.tag,
          attributes: U(U({}, u.attributes), k.path)
        }, g))]
      }, P = {
        tag: "g",
        attributes: U({}, k.outer),
        children: [y]
      }, E = "mask-".concat(c || _e()), x = "clip-".concat(c || _e()), h = {
        tag: "mask",
        attributes: U(U({}, Cr), {}, {
          id: E,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [v, P]
      }, b = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: x
          },
          children: Rn(p)
        }, h]
      };
      return n.push(b, {
        tag: "rect",
        attributes: U({
          fill: "currentColor",
          "clip-path": "url(#".concat(x, ")"),
          mask: "url(#".concat(E, ")")
        }, Cr)
      }), {
        children: n,
        attributes: a
      };
    };
  }
}, In = {
  provides: function(r) {
    var t = !1;
    Y3.matchMedia && (t = Y3.matchMedia("(prefers-reduced-motion: reduce)").matches), r.missingIconAbstract = function() {
      var n = [], a = {
        fill: "currentColor"
      }, s = {
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
      var o = U(U({}, s), {}, {
        attributeName: "opacity"
      }), c = {
        tag: "circle",
        attributes: U(U({}, a), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || c.children.push({
        tag: "animate",
        attributes: U(U({}, s), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: U(U({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(c), n.push({
        tag: "path",
        attributes: U(U({}, a), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: U(U({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: U(U({}, a), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: U(U({}, o), {}, {
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
}, jn = {
  hooks: function() {
    return {
      parseNodeAttributes: function(t, n) {
        var a = n.getAttribute("data-fa-symbol"), s = a === null ? !1 : a === "" ? !0 : a;
        return t.symbol = s, t;
      }
    };
  }
}, Nn = [I5, wn, Bn, Cn, Pn, _n, Tn, An, Mn, In, jn];
H5(Nn, {
  mixoutsTo: E3
});
E3.noAuto;
E3.config;
E3.library;
E3.dom;
var $r = E3.parse;
E3.findIconDefinition;
E3.toHtml;
var Ln = E3.icon;
E3.layer;
E3.text;
E3.counter;
var Gr = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Pr, U2;
function Fn() {
  if (U2) return Pr;
  U2 = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var o = {}, c = 0; c < 10; c++)
        o["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(o).map(function(u) {
        return o[u];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        d[u] = u;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Pr = a() ? Object.assign : function(s, o) {
    for (var c, l = n(s), d, u = 1; u < arguments.length; u++) {
      c = Object(arguments[u]);
      for (var f in c)
        r.call(c, f) && (l[f] = c[f]);
      if (e) {
        d = e(c);
        for (var p = 0; p < d.length; p++)
          t.call(c, d[p]) && (l[d[p]] = c[d[p]]);
      }
    }
    return l;
  }, Pr;
}
var xr, z2;
function u2() {
  if (z2) return xr;
  z2 = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return xr = e, xr;
}
var Er, W2;
function Tt() {
  return W2 || (W2 = 1, Er = Function.call.bind(Object.prototype.hasOwnProperty)), Er;
}
var Or, Y2;
function Dn() {
  if (Y2) return Or;
  Y2 = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = u2(), t = {}, n = Tt();
    e = function(s) {
      var o = "Warning: " + s;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function a(s, o, c, l, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in s)
        if (n(s, u)) {
          var f;
          try {
            if (typeof s[u] != "function") {
              var p = Error(
                (l || "React class") + ": " + c + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            f = s[u](o, u, l, c, null, r);
          } catch (v) {
            f = v;
          }
          if (f && !(f instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in t)) {
            t[f.message] = !0;
            var k = d ? d() : "";
            e(
              "Failed " + c + " type: " + f.message + (k ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Or = a, Or;
}
var Sr, $2;
function Un() {
  if ($2) return Sr;
  $2 = 1;
  var e = q2(), r = Fn(), t = u2(), n = Tt(), a = Dn(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(c) {
    var l = "Warning: " + c;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Sr = function(c, l) {
    var d = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function f(_) {
      var O = _ && (d && _[d] || _[u]);
      if (typeof O == "function")
        return O;
    }
    var p = "<<anonymous>>", k = {
      array: P("array"),
      bigint: P("bigint"),
      bool: P("boolean"),
      func: P("function"),
      number: P("number"),
      object: P("object"),
      string: P("string"),
      symbol: P("symbol"),
      any: E(),
      arrayOf: x,
      element: h(),
      elementType: b(),
      instanceOf: C,
      node: I(),
      objectOf: T,
      oneOf: w,
      oneOfType: A,
      shape: L,
      exact: D
    };
    function v(_, O) {
      return _ === O ? _ !== 0 || 1 / _ === 1 / O : _ !== _ && O !== O;
    }
    function g(_, O) {
      this.message = _, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function y(_) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, Y = 0;
      function J(t3, V, G, Z, q, e3, d3) {
        if (Z = Z || p, e3 = e3 || G, d3 !== t) {
          if (l) {
            var v3 = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw v3.name = "Invariant Violation", v3;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var w3 = Z + ":" + G;
            !O[w3] && // Avoid spamming the console because they are often not actionable except for lib authors
            Y < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + e3 + "` prop on `" + Z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[w3] = !0, Y++);
          }
        }
        return V[G] == null ? t3 ? V[G] === null ? new g("The " + q + " `" + e3 + "` is marked as required " + ("in `" + Z + "`, but its value is `null`.")) : new g("The " + q + " `" + e3 + "` is marked as required in " + ("`" + Z + "`, but its value is `undefined`.")) : null : _(V, G, Z, q, e3);
      }
      var R = J.bind(null, !1);
      return R.isRequired = J.bind(null, !0), R;
    }
    function P(_) {
      function O(Y, J, R, t3, V, G) {
        var Z = Y[J], q = Q(Z);
        if (q !== _) {
          var e3 = W(Z);
          return new g(
            "Invalid " + t3 + " `" + V + "` of type " + ("`" + e3 + "` supplied to `" + R + "`, expected ") + ("`" + _ + "`."),
            { expectedType: _ }
          );
        }
        return null;
      }
      return y(O);
    }
    function E() {
      return y(o);
    }
    function x(_) {
      function O(Y, J, R, t3, V) {
        if (typeof _ != "function")
          return new g("Property `" + V + "` of component `" + R + "` has invalid PropType notation inside arrayOf.");
        var G = Y[J];
        if (!Array.isArray(G)) {
          var Z = Q(G);
          return new g("Invalid " + t3 + " `" + V + "` of type " + ("`" + Z + "` supplied to `" + R + "`, expected an array."));
        }
        for (var q = 0; q < G.length; q++) {
          var e3 = _(G, q, R, t3, V + "[" + q + "]", t);
          if (e3 instanceof Error)
            return e3;
        }
        return null;
      }
      return y(O);
    }
    function h() {
      function _(O, Y, J, R, t3) {
        var V = O[Y];
        if (!c(V)) {
          var G = Q(V);
          return new g("Invalid " + R + " `" + t3 + "` of type " + ("`" + G + "` supplied to `" + J + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(_);
    }
    function b() {
      function _(O, Y, J, R, t3) {
        var V = O[Y];
        if (!e.isValidElementType(V)) {
          var G = Q(V);
          return new g("Invalid " + R + " `" + t3 + "` of type " + ("`" + G + "` supplied to `" + J + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(_);
    }
    function C(_) {
      function O(Y, J, R, t3, V) {
        if (!(Y[J] instanceof _)) {
          var G = _.name || p, Z = c3(Y[J]);
          return new g("Invalid " + t3 + " `" + V + "` of type " + ("`" + Z + "` supplied to `" + R + "`, expected ") + ("instance of `" + G + "`."));
        }
        return null;
      }
      return y(O);
    }
    function w(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), o;
      function O(Y, J, R, t3, V) {
        for (var G = Y[J], Z = 0; Z < _.length; Z++)
          if (v(G, _[Z]))
            return null;
        var q = JSON.stringify(_, function(d3, v3) {
          var w3 = W(v3);
          return w3 === "symbol" ? String(v3) : v3;
        });
        return new g("Invalid " + t3 + " `" + V + "` of value `" + String(G) + "` " + ("supplied to `" + R + "`, expected one of " + q + "."));
      }
      return y(O);
    }
    function T(_) {
      function O(Y, J, R, t3, V) {
        if (typeof _ != "function")
          return new g("Property `" + V + "` of component `" + R + "` has invalid PropType notation inside objectOf.");
        var G = Y[J], Z = Q(G);
        if (Z !== "object")
          return new g("Invalid " + t3 + " `" + V + "` of type " + ("`" + Z + "` supplied to `" + R + "`, expected an object."));
        for (var q in G)
          if (n(G, q)) {
            var e3 = _(G, q, R, t3, V + "." + q, t);
            if (e3 instanceof Error)
              return e3;
          }
        return null;
      }
      return y(O);
    }
    function A(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var O = 0; O < _.length; O++) {
        var Y = _[O];
        if (typeof Y != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + i3(Y) + " at index " + O + "."
          ), o;
      }
      function J(R, t3, V, G, Z) {
        for (var q = [], e3 = 0; e3 < _.length; e3++) {
          var d3 = _[e3], v3 = d3(R, t3, V, G, Z, t);
          if (v3 == null)
            return null;
          v3.data && n(v3.data, "expectedType") && q.push(v3.data.expectedType);
        }
        var w3 = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new g("Invalid " + G + " `" + Z + "` supplied to " + ("`" + V + "`" + w3 + "."));
      }
      return y(J);
    }
    function I() {
      function _(O, Y, J, R, t3) {
        return F(O[Y]) ? null : new g("Invalid " + R + " `" + t3 + "` supplied to " + ("`" + J + "`, expected a ReactNode."));
      }
      return y(_);
    }
    function j(_, O, Y, J, R) {
      return new g(
        (_ || "React class") + ": " + O + " type `" + Y + "." + J + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + R + "`."
      );
    }
    function L(_) {
      function O(Y, J, R, t3, V) {
        var G = Y[J], Z = Q(G);
        if (Z !== "object")
          return new g("Invalid " + t3 + " `" + V + "` of type `" + Z + "` " + ("supplied to `" + R + "`, expected `object`."));
        for (var q in _) {
          var e3 = _[q];
          if (typeof e3 != "function")
            return j(R, t3, V, q, W(e3));
          var d3 = e3(G, q, R, t3, V + "." + q, t);
          if (d3)
            return d3;
        }
        return null;
      }
      return y(O);
    }
    function D(_) {
      function O(Y, J, R, t3, V) {
        var G = Y[J], Z = Q(G);
        if (Z !== "object")
          return new g("Invalid " + t3 + " `" + V + "` of type `" + Z + "` " + ("supplied to `" + R + "`, expected `object`."));
        var q = r({}, Y[J], _);
        for (var e3 in q) {
          var d3 = _[e3];
          if (n(_, e3) && typeof d3 != "function")
            return j(R, t3, V, e3, W(d3));
          if (!d3)
            return new g(
              "Invalid " + t3 + " `" + V + "` key `" + e3 + "` supplied to `" + R + "`.\nBad object: " + JSON.stringify(Y[J], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(_), null, "  ")
            );
          var v3 = d3(G, e3, R, t3, V + "." + e3, t);
          if (v3)
            return v3;
        }
        return null;
      }
      return y(O);
    }
    function F(_) {
      switch (typeof _) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !_;
        case "object":
          if (Array.isArray(_))
            return _.every(F);
          if (_ === null || c(_))
            return !0;
          var O = f(_);
          if (O) {
            var Y = O.call(_), J;
            if (O !== _.entries) {
              for (; !(J = Y.next()).done; )
                if (!F(J.value))
                  return !1;
            } else
              for (; !(J = Y.next()).done; ) {
                var R = J.value;
                if (R && !F(R[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function z(_, O) {
      return _ === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function Q(_) {
      var O = typeof _;
      return Array.isArray(_) ? "array" : _ instanceof RegExp ? "object" : z(O, _) ? "symbol" : O;
    }
    function W(_) {
      if (typeof _ > "u" || _ === null)
        return "" + _;
      var O = Q(_);
      if (O === "object") {
        if (_ instanceof Date)
          return "date";
        if (_ instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function i3(_) {
      var O = W(_);
      switch (O) {
        case "array":
        case "object":
          return "an " + O;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + O;
        default:
          return O;
      }
    }
    function c3(_) {
      return !_.constructor || !_.constructor.name ? p : _.constructor.name;
    }
    return k.checkPropTypes = a, k.resetWarningCache = a.resetWarningCache, k.PropTypes = k, k;
  }, Sr;
}
var _r, G2;
function zn() {
  if (G2) return _r;
  G2 = 1;
  var e = u2();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, _r = function() {
    function n(o, c, l, d, u, f) {
      if (f !== e) {
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
    var s = {
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
      checkPropTypes: t,
      resetWarningCache: r
    };
    return s.PropTypes = s, s;
  }, _r;
}
if (process.env.NODE_ENV !== "production") {
  var Wn = q2(), Yn = !0;
  Gr.exports = Un()(Wn.isElement, Yn);
} else
  Gr.exports = zn()();
var $n = Gr.exports;
const o3 = /* @__PURE__ */ $t($n);
function X2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function R3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? X2(Object(t), !0).forEach(function(n) {
      ae(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : X2(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function Je(e) {
  "@babel/helpers - typeof";
  return Je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Je(e);
}
function ae(e, r, t) {
  return r in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Gn(e, r) {
  if (e == null) return {};
  var t = {}, n = Object.keys(e), a, s;
  for (s = 0; s < n.length; s++)
    a = n[s], !(r.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
function Xn(e, r) {
  if (e == null) return {};
  var t = Gn(e, r), n, a;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (a = 0; a < s.length; a++)
      n = s[a], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function Xr(e) {
  return Vn(e) || Hn(e) || Jn(e) || Kn();
}
function Vn(e) {
  if (Array.isArray(e)) return Vr(e);
}
function Hn(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Jn(e, r) {
  if (e) {
    if (typeof e == "string") return Vr(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Vr(e, r);
  }
}
function Vr(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function Kn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qn(e) {
  var r, t = e.beat, n = e.fade, a = e.beatFade, s = e.bounce, o = e.shake, c = e.flash, l = e.spin, d = e.spinPulse, u = e.spinReverse, f = e.pulse, p = e.fixedWidth, k = e.inverse, v = e.border, g = e.listItem, y = e.flip, P = e.size, E = e.rotation, x = e.pull, h = (r = {
    "fa-beat": t,
    "fa-fade": n,
    "fa-beat-fade": a,
    "fa-bounce": s,
    "fa-shake": o,
    "fa-flash": c,
    "fa-spin": l,
    "fa-spin-reverse": u,
    "fa-spin-pulse": d,
    "fa-pulse": f,
    "fa-fw": p,
    "fa-inverse": k,
    "fa-border": v,
    "fa-li": g,
    "fa-flip": y === !0,
    "fa-flip-horizontal": y === "horizontal" || y === "both",
    "fa-flip-vertical": y === "vertical" || y === "both"
  }, ae(r, "fa-".concat(P), typeof P < "u" && P !== null), ae(r, "fa-rotate-".concat(E), typeof E < "u" && E !== null && E !== 0), ae(r, "fa-pull-".concat(x), typeof x < "u" && x !== null), ae(r, "fa-swap-opacity", e.swapOpacity), r);
  return Object.keys(h).map(function(b) {
    return h[b] ? b : null;
  }).filter(function(b) {
    return b;
  });
}
function qn(e) {
  return e = e - 0, e === e;
}
function At(e) {
  return qn(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(r, t) {
    return t ? t.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Zn = ["style"];
function ea(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ra(e) {
  return e.split(";").map(function(r) {
    return r.trim();
  }).filter(function(r) {
    return r;
  }).reduce(function(r, t) {
    var n = t.indexOf(":"), a = At(t.slice(0, n)), s = t.slice(n + 1).trim();
    return a.startsWith("webkit") ? r[ea(a)] = s : r[a] = s, r;
  }, {});
}
function Rt(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof r == "string")
    return r;
  var n = (r.children || []).map(function(l) {
    return Rt(e, l);
  }), a = Object.keys(r.attributes || {}).reduce(function(l, d) {
    var u = r.attributes[d];
    switch (d) {
      case "class":
        l.attrs.className = u, delete r.attributes.class;
        break;
      case "style":
        l.attrs.style = ra(u);
        break;
      default:
        d.indexOf("aria-") === 0 || d.indexOf("data-") === 0 ? l.attrs[d.toLowerCase()] = u : l.attrs[At(d)] = u;
    }
    return l;
  }, {
    attrs: {}
  }), s = t.style, o = s === void 0 ? {} : s, c = Xn(t, Zn);
  return a.attrs.style = R3(R3({}, a.attrs.style), o), e.apply(void 0, [r.tag, R3(R3({}, a.attrs), c)].concat(Xr(n)));
}
var Mt = !1;
try {
  Mt = process.env.NODE_ENV === "production";
} catch {
}
function ta() {
  if (!Mt && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function V2(e) {
  if (e && Je(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if ($r.icon)
    return $r.icon(e);
  if (e === null)
    return null;
  if (e && Je(e) === "object" && e.prefix && e.iconName)
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
function Tr(e, r) {
  return Array.isArray(r) && r.length > 0 || !Array.isArray(r) && r ? ae({}, e, r) : {};
}
var H2 = {
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
}, f2 = /* @__PURE__ */ u3.forwardRef(function(e, r) {
  var t = R3(R3({}, H2), e), n = t.icon, a = t.mask, s = t.symbol, o = t.className, c = t.title, l = t.titleId, d = t.maskId, u = V2(n), f = Tr("classes", [].concat(Xr(Qn(t)), Xr((o || "").split(" ")))), p = Tr("transform", typeof t.transform == "string" ? $r.transform(t.transform) : t.transform), k = Tr("mask", V2(a)), v = Ln(u, R3(R3(R3(R3({}, f), p), k), {}, {
    symbol: s,
    title: c,
    titleId: l,
    maskId: d
  }));
  if (!v)
    return ta("Could not find icon", u), null;
  var g = v.abstract, y = {
    ref: r
  };
  return Object.keys(t).forEach(function(P) {
    H2.hasOwnProperty(P) || (y[P] = t[P]);
  }), na(g[0], y);
});
f2.displayName = "FontAwesomeIcon";
f2.propTypes = {
  beat: o3.bool,
  border: o3.bool,
  beatFade: o3.bool,
  bounce: o3.bool,
  className: o3.string,
  fade: o3.bool,
  flash: o3.bool,
  mask: o3.oneOfType([o3.object, o3.array, o3.string]),
  maskId: o3.string,
  fixedWidth: o3.bool,
  inverse: o3.bool,
  flip: o3.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: o3.oneOfType([o3.object, o3.array, o3.string]),
  listItem: o3.bool,
  pull: o3.oneOf(["right", "left"]),
  pulse: o3.bool,
  rotation: o3.oneOf([0, 90, 180, 270]),
  shake: o3.bool,
  size: o3.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: o3.bool,
  spinPulse: o3.bool,
  spinReverse: o3.bool,
  symbol: o3.oneOfType([o3.bool, o3.string]),
  title: o3.string,
  titleId: o3.string,
  transform: o3.oneOfType([o3.string, o3.object]),
  swapOpacity: o3.bool
};
var na = Rt.bind(null, u3.createElement);
const aa = ({ icon: e, iconClassName: r }) => e ? /* @__PURE__ */ n3(f2, { icon: e, className: B3("pointer-events-none", r) }) : /* @__PURE__ */ n3(Z3, {});
function Ar({
  icon: e,
  className: r,
  children: t,
  "aria-checked": n,
  iconClassName: a,
  onFocus: s,
  onBlur: o,
  onMouseEnter: c,
  onMouseLeave: l,
  onPointerDown: d,
  onPointerUp: u,
  onPointerLeave: f,
  style: p,
  ...k
}) {
  const v = O3(), g = L3(!1), y = L3(!1), P = L3(!1);
  return u3.useEffect(() => () => {
    P.set(!1), y.set(!1), g.set(!1);
  }, []), /* @__PURE__ */ M3(
    "span",
    {
      onFocus: (E) => {
        y.set(!0), s == null || s(E);
      },
      onPointerDown: (E) => {
        P.set(!0), d == null || d(E);
      },
      onPointerUp: (E) => {
        P.set(!1), u == null || u(E);
      },
      onPointerLeave: (E) => {
        P.set(!1), f == null || f(E);
      },
      onBlur: (E) => {
        y.set(!1), o == null || o(E);
      },
      onMouseEnter: (E) => {
        g.set(!0), c == null || c(E);
      },
      onMouseLeave: (E) => {
        g.set(!1), l == null || l(E);
      },
      className: B3(
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
        k["aria-disabled"] && "pointer-events-none",
        r
      ),
      style: {
        ...v(
          g.get && {
            backgroundColor: "gray.opacity"
          },
          k["aria-disabled"] && {
            color: "gray.opacity.2"
          },
          n && "primary",
          n && {
            color: "primary.content"
          },
          y.get && {
            outlineColor: "primary"
          }
        ),
        ...p
      },
      ...k,
      children: [
        /* @__PURE__ */ n3(aa, { iconClassName: a, icon: e }),
        t
      ]
    }
  );
}
const ya = u3.forwardRef(
  ({ className: e, selectOnFocus: r, onFocus: t, onBlur: n, onValueChange: a, onChange: s, style: o, ...c }, l) => {
    const d = O3(), [u, f] = u3.useState(!1), p = Jr("preferences/animation.boolean");
    return /* @__PURE__ */ n3(
      "input",
      {
        ...c,
        ref: l,
        onFocus: (k) => {
          !u && f(!0), r && k.currentTarget.select(), t == null || t(k);
        },
        onBlur: (k) => {
          u && f(!1), n == null || n(k);
        },
        className: B3(
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
          ...d(
            {
              borderColor: "borders",
              backgroundColor: "field.background"
            },
            u && {
              borderColor: "primary"
            }
          ),
          ...o
        },
        onChange: (k) => {
          a == null || a(k.currentTarget.value, k.currentTarget.valueAsNumber), s == null || s(k);
        }
      }
    );
  }
);
let wa = u3.forwardRef(
  ({ focusId: e = Gt(30), id: r, children: t, onFocus: n, onBlur: a, style: s, className: o, ignoreOutline: c = !1, ...l }, d) => {
    const u = L3(!1), f = O3();
    return /* @__PURE__ */ M3(
      "div",
      {
        ref: d,
        tabIndex: 1,
        id: e,
        onFocus: (p) => {
          u.set(!0), n == null || n(p);
        },
        onBlur: (p) => {
          u.set(!1), a == null || a(p);
        },
        style: {
          ...s
        },
        className: B3("relative", o),
        ...l,
        children: [
          t,
          /* @__PURE__ */ n3(
            "div",
            {
              hidden: c,
              className: B3(
                o,
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
                ...f(u.get && { borderColor: "primary" })
              }
            }
          )
        ]
      }
    );
  }
);
var It = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
function jt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Hr = { exports: {} }, ye = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J2;
function oa() {
  if (J2) return ye;
  J2 = 1;
  var e = u3, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(c, l, d) {
    var u, f = {}, p = null, k = null;
    d !== void 0 && (p = "" + d), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (k = l.ref);
    for (u in l) n.call(l, u) && !s.hasOwnProperty(u) && (f[u] = l[u]);
    if (c && c.defaultProps) for (u in l = c.defaultProps, l) f[u] === void 0 && (f[u] = l[u]);
    return { $$typeof: r, type: c, key: p, ref: k, props: f, _owner: a.current };
  }
  return ye.Fragment = t, ye.jsx = o, ye.jsxs = o, ye;
}
var we = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K2;
function ia() {
  return K2 || (K2 = 1, process.env.NODE_ENV !== "production" && function() {
    var e = u3, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), v = Symbol.iterator, g = "@@iterator";
    function y(m) {
      if (m === null || typeof m != "object")
        return null;
      var i = v && m[v] || m[g];
      return typeof i == "function" ? i : null;
    }
    var P = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(m) {
      {
        for (var i = arguments.length, B = new Array(i > 1 ? i - 1 : 0), S = 1; S < i; S++)
          B[S - 1] = arguments[S];
        x("error", m, B);
      }
    }
    function x(m, i, B) {
      {
        var S = P.ReactDebugCurrentFrame, M = S.getStackAddendum();
        M !== "" && (i += "%s", B = B.concat([M]));
        var H = B.map(function($) {
          return String($);
        });
        H.unshift("Warning: " + i), Function.prototype.apply.call(console[m], console, H);
      }
    }
    var h = !1, b = !1, C = !1, w = !1, T = !1, A;
    A = Symbol.for("react.module.reference");
    function I(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === n || m === s || T || m === a || m === d || m === u || w || m === k || h || b || C || typeof m == "object" && m !== null && (m.$$typeof === p || m.$$typeof === f || m.$$typeof === o || m.$$typeof === c || m.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === A || m.getModuleId !== void 0));
    }
    function j(m, i, B) {
      var S = m.displayName;
      if (S)
        return S;
      var M = i.displayName || i.name || "";
      return M !== "" ? B + "(" + M + ")" : B;
    }
    function L(m) {
      return m.displayName || "Context";
    }
    function D(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case s:
          return "Profiler";
        case a:
          return "StrictMode";
        case d:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case c:
            var i = m;
            return L(i) + ".Consumer";
          case o:
            var B = m;
            return L(B._context) + ".Provider";
          case l:
            return j(m, m.render, "ForwardRef");
          case f:
            var S = m.displayName || null;
            return S !== null ? S : D(m.type) || "Memo";
          case p: {
            var M = m, H = M._payload, $ = M._init;
            try {
              return D($(H));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, z = 0, Q, W, i3, c3, _, O, Y;
    function J() {
    }
    J.__reactDisabledLog = !0;
    function R() {
      {
        if (z === 0) {
          Q = console.log, W = console.info, i3 = console.warn, c3 = console.error, _ = console.group, O = console.groupCollapsed, Y = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: J,
            writable: !0
          };
          Object.defineProperties(console, {
            info: m,
            log: m,
            warn: m,
            error: m,
            group: m,
            groupCollapsed: m,
            groupEnd: m
          });
        }
        z++;
      }
    }
    function t3() {
      {
        if (z--, z === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, m, {
              value: Q
            }),
            info: F({}, m, {
              value: W
            }),
            warn: F({}, m, {
              value: i3
            }),
            error: F({}, m, {
              value: c3
            }),
            group: F({}, m, {
              value: _
            }),
            groupCollapsed: F({}, m, {
              value: O
            }),
            groupEnd: F({}, m, {
              value: Y
            })
          });
        }
        z < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = P.ReactCurrentDispatcher, G;
    function Z(m, i, B) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (M) {
            var S = M.stack.trim().match(/\n( *(at )?)/);
            G = S && S[1] || "";
          }
        return `
` + G + m;
      }
    }
    var q = !1, e3;
    {
      var d3 = typeof WeakMap == "function" ? WeakMap : Map;
      e3 = new d3();
    }
    function v3(m, i) {
      if (!m || q)
        return "";
      {
        var B = e3.get(m);
        if (B !== void 0)
          return B;
      }
      var S;
      q = !0;
      var M = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var H;
      H = V.current, V.current = null, R();
      try {
        if (i) {
          var $ = function() {
            throw Error();
          };
          if (Object.defineProperty($.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct($, []);
            } catch (b3) {
              S = b3;
            }
            Reflect.construct(m, [], $);
          } else {
            try {
              $.call();
            } catch (b3) {
              S = b3;
            }
            m.call($.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b3) {
            S = b3;
          }
          m();
        }
      } catch (b3) {
        if (b3 && S && typeof b3.stack == "string") {
          for (var N = b3.stack.split(`
`), K = S.stack.split(`
`), a3 = N.length - 1, r3 = K.length - 1; a3 >= 1 && r3 >= 0 && N[a3] !== K[r3]; )
            r3--;
          for (; a3 >= 1 && r3 >= 0; a3--, r3--)
            if (N[a3] !== K[r3]) {
              if (a3 !== 1 || r3 !== 1)
                do
                  if (a3--, r3--, r3 < 0 || N[a3] !== K[r3]) {
                    var s3 = `
` + N[a3].replace(" at new ", " at ");
                    return m.displayName && s3.includes("<anonymous>") && (s3 = s3.replace("<anonymous>", m.displayName)), typeof m == "function" && e3.set(m, s3), s3;
                  }
                while (a3 >= 1 && r3 >= 0);
              break;
            }
        }
      } finally {
        q = !1, V.current = H, t3(), Error.prepareStackTrace = M;
      }
      var h3 = m ? m.displayName || m.name : "", N3 = h3 ? Z(h3) : "";
      return typeof m == "function" && e3.set(m, N3), N3;
    }
    function w3(m, i, B) {
      return v3(m, !1);
    }
    function j3(m) {
      var i = m.prototype;
      return !!(i && i.isReactComponent);
    }
    function g3(m, i, B) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return v3(m, j3(m));
      if (typeof m == "string")
        return Z(m);
      switch (m) {
        case d:
          return Z("Suspense");
        case u:
          return Z("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case l:
            return w3(m.render);
          case f:
            return g3(m.type, i, B);
          case p: {
            var S = m, M = S._payload, H = S._init;
            try {
              return g3(H(M), i, B);
            } catch {
            }
          }
        }
      return "";
    }
    var y3 = Object.prototype.hasOwnProperty, A3 = {}, S3 = P.ReactDebugCurrentFrame;
    function p3(m) {
      if (m) {
        var i = m._owner, B = g3(m.type, m._source, i ? i.type : null);
        S3.setExtraStackFrame(B);
      } else
        S3.setExtraStackFrame(null);
    }
    function er(m, i, B, S, M) {
      {
        var H = Function.call.bind(y3);
        for (var $ in m)
          if (H(m, $)) {
            var N = void 0;
            try {
              if (typeof m[$] != "function") {
                var K = Error((S || "React class") + ": " + B + " type `" + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[$] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              N = m[$](i, $, S, B, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (a3) {
              N = a3;
            }
            N && !(N instanceof Error) && (p3(M), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", B, $, typeof N), p3(null)), N instanceof Error && !(N.message in A3) && (A3[N.message] = !0, p3(M), E("Failed %s type: %s", B, N.message), p3(null));
          }
      }
    }
    var C3 = Array.isArray;
    function X3(m) {
      return C3(m);
    }
    function rr(m) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, B = i && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return B;
      }
    }
    function tr(m) {
      try {
        return ce(m), !1;
      } catch {
        return !0;
      }
    }
    function ce(m) {
      return "" + m;
    }
    function le(m) {
      if (tr(m))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(m)), ce(m);
    }
    var _3 = P.ReactCurrentOwner, nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ue, fe, V3;
    V3 = {};
    function ar(m) {
      if (y3.call(m, "ref")) {
        var i = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function or(m) {
      if (y3.call(m, "key")) {
        var i = Object.getOwnPropertyDescriptor(m, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function ir(m, i) {
      if (typeof m.ref == "string" && _3.current && i && _3.current.stateNode !== i) {
        var B = D(_3.current.type);
        V3[B] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(_3.current.type), m.ref), V3[B] = !0);
      }
    }
    function sr(m, i) {
      {
        var B = function() {
          ue || (ue = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        B.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: B,
          configurable: !0
        });
      }
    }
    function cr(m, i) {
      {
        var B = function() {
          fe || (fe = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        B.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: B,
          configurable: !0
        });
      }
    }
    var lr = function(m, i, B, S, M, H, $) {
      var N = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: m,
        key: i,
        ref: B,
        props: $,
        // Record the component responsible for creating this element.
        _owner: H
      };
      return N._store = {}, Object.defineProperty(N._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(N, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.defineProperty(N, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: M
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    };
    function ur(m, i, B, S, M) {
      {
        var H, $ = {}, N = null, K = null;
        B !== void 0 && (le(B), N = "" + B), or(i) && (le(i.key), N = "" + i.key), ar(i) && (K = i.ref, ir(i, M));
        for (H in i)
          y3.call(i, H) && !nr.hasOwnProperty(H) && ($[H] = i[H]);
        if (m && m.defaultProps) {
          var a3 = m.defaultProps;
          for (H in a3)
            $[H] === void 0 && ($[H] = a3[H]);
        }
        if (N || K) {
          var r3 = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          N && sr($, r3), K && cr($, r3);
        }
        return lr(m, N, K, M, S, _3.current, $);
      }
    }
    var H3 = P.ReactCurrentOwner, de = P.ReactDebugCurrentFrame;
    function x3(m) {
      if (m) {
        var i = m._owner, B = g3(m.type, m._source, i ? i.type : null);
        de.setExtraStackFrame(B);
      } else
        de.setExtraStackFrame(null);
    }
    var J3;
    J3 = !1;
    function K3(m) {
      return typeof m == "object" && m !== null && m.$$typeof === r;
    }
    function ve() {
      {
        if (H3.current) {
          var m = D(H3.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function fr(m) {
      return "";
    }
    var me = {};
    function dr(m) {
      {
        var i = ve();
        if (!i) {
          var B = typeof m == "string" ? m : m.displayName || m.name;
          B && (i = `

Check the top-level render call using <` + B + ">.");
        }
        return i;
      }
    }
    function pe(m, i) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var B = dr(i);
        if (me[B])
          return;
        me[B] = !0;
        var S = "";
        m && m._owner && m._owner !== H3.current && (S = " It was passed a child from " + D(m._owner.type) + "."), x3(m), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, S), x3(null);
      }
    }
    function he(m, i) {
      {
        if (typeof m != "object")
          return;
        if (X3(m))
          for (var B = 0; B < m.length; B++) {
            var S = m[B];
            K3(S) && pe(S, i);
          }
        else if (K3(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var M = y(m);
          if (typeof M == "function" && M !== m.entries)
            for (var H = M.call(m), $; !($ = H.next()).done; )
              K3($.value) && pe($.value, i);
        }
      }
    }
    function vr(m) {
      {
        var i = m.type;
        if (i == null || typeof i == "string")
          return;
        var B;
        if (typeof i == "function")
          B = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === f))
          B = i.propTypes;
        else
          return;
        if (B) {
          var S = D(i);
          er(B, m.props, "prop", S, m);
        } else if (i.PropTypes !== void 0 && !J3) {
          J3 = !0;
          var M = D(i);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", M || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mr(m) {
      {
        for (var i = Object.keys(m.props), B = 0; B < i.length; B++) {
          var S = i[B];
          if (S !== "children" && S !== "key") {
            x3(m), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), x3(null);
            break;
          }
        }
        m.ref !== null && (x3(m), E("Invalid attribute `ref` supplied to `React.Fragment`."), x3(null));
      }
    }
    function ke(m, i, B, S, M, H) {
      {
        var $ = I(m);
        if (!$) {
          var N = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (N += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = fr();
          K ? N += K : N += ve();
          var a3;
          m === null ? a3 = "null" : X3(m) ? a3 = "array" : m !== void 0 && m.$$typeof === r ? (a3 = "<" + (D(m.type) || "Unknown") + " />", N = " Did you accidentally export a JSX literal instead of a component?") : a3 = typeof m, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", a3, N);
        }
        var r3 = ur(m, i, B, M, H);
        if (r3 == null)
          return r3;
        if ($) {
          var s3 = i.children;
          if (s3 !== void 0)
            if (S)
              if (X3(s3)) {
                for (var h3 = 0; h3 < s3.length; h3++)
                  he(s3[h3], m);
                Object.freeze && Object.freeze(s3);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              he(s3, m);
        }
        return m === n ? mr(r3) : vr(r3), r3;
      }
    }
    function Me(m, i, B) {
      return ke(m, i, B, !0);
    }
    function pr(m, i, B) {
      return ke(m, i, B, !1);
    }
    var hr = pr, kr = Me;
    we.Fragment = n, we.jsx = hr, we.jsxs = kr;
  }()), we;
}
process.env.NODE_ENV === "production" ? Hr.exports = oa() : Hr.exports = ia();
var sa = Hr.exports, Nt = { exports: {} };
(function(e, r) {
  (function(n, a) {
    e.exports = a();
  })(typeof self < "u" ? self : It, function() {
    return (
      /******/
      function(t) {
        var n = {};
        function a(s) {
          if (n[s])
            return n[s].exports;
          var o = n[s] = {
            /******/
            i: s,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return t[s].call(o.exports, o, o.exports, a), o.l = !0, o.exports;
        }
        return a.m = t, a.c = n, a.d = function(s, o, c) {
          a.o(s, o) || Object.defineProperty(s, o, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: c
            /******/
          });
        }, a.n = function(s) {
          var o = s && s.__esModule ? (
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
          return a.d(o, "a", o), o;
        }, a.o = function(s, o) {
          return Object.prototype.hasOwnProperty.call(s, o);
        }, a.p = "", a(a.s = 3);
      }([
        /* 0 */
        /***/
        function(t, n, a) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var s = (
            /** @class */
            function() {
              function o(c, l) {
                this.width = l, this.height = c.length / l, this.data = c;
              }
              return o.createEmpty = function(c, l) {
                return new o(new Uint8ClampedArray(c * l), c);
              }, o.prototype.get = function(c, l) {
                return c < 0 || c >= this.width || l < 0 || l >= this.height ? !1 : !!this.data[l * this.width + c];
              }, o.prototype.set = function(c, l, d) {
                this.data[l * this.width + c] = d ? 1 : 0;
              }, o.prototype.setRegion = function(c, l, d, u, f) {
                for (var p = l; p < l + u; p++)
                  for (var k = c; k < c + d; k++)
                    this.set(k, p, !!f);
              }, o;
            }()
          );
          n.BitMatrix = s;
        },
        /* 1 */
        /***/
        function(t, n, a) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var s = a(2);
          function o(l, d) {
            return l ^ d;
          }
          n.addOrSubtractGF = o;
          var c = (
            /** @class */
            function() {
              function l(d, u, f) {
                this.primitive = d, this.size = u, this.generatorBase = f, this.expTable = new Array(this.size), this.logTable = new Array(this.size);
                for (var p = 1, k = 0; k < this.size; k++)
                  this.expTable[k] = p, p = p * 2, p >= this.size && (p = (p ^ this.primitive) & this.size - 1);
                for (var k = 0; k < this.size - 1; k++)
                  this.logTable[this.expTable[k]] = k;
                this.zero = new s.default(this, Uint8ClampedArray.from([0])), this.one = new s.default(this, Uint8ClampedArray.from([1]));
              }
              return l.prototype.multiply = function(d, u) {
                return d === 0 || u === 0 ? 0 : this.expTable[(this.logTable[d] + this.logTable[u]) % (this.size - 1)];
              }, l.prototype.inverse = function(d) {
                if (d === 0)
                  throw new Error("Can't invert 0");
                return this.expTable[this.size - this.logTable[d] - 1];
              }, l.prototype.buildMonomial = function(d, u) {
                if (d < 0)
                  throw new Error("Invalid monomial degree less than 0");
                if (u === 0)
                  return this.zero;
                var f = new Uint8ClampedArray(d + 1);
                return f[0] = u, new s.default(this, f);
              }, l.prototype.log = function(d) {
                if (d === 0)
                  throw new Error("Can't take log(0)");
                return this.logTable[d];
              }, l.prototype.exp = function(d) {
                return this.expTable[d];
              }, l;
            }()
          );
          n.default = c;
        },
        /* 2 */
        /***/
        function(t, n, a) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var s = a(1), o = (
            /** @class */
            function() {
              function c(l, d) {
                if (d.length === 0)
                  throw new Error("No coefficients.");
                this.field = l;
                var u = d.length;
                if (u > 1 && d[0] === 0) {
                  for (var f = 1; f < u && d[f] === 0; )
                    f++;
                  if (f === u)
                    this.coefficients = l.zero.coefficients;
                  else {
                    this.coefficients = new Uint8ClampedArray(u - f);
                    for (var p = 0; p < this.coefficients.length; p++)
                      this.coefficients[p] = d[f + p];
                  }
                } else
                  this.coefficients = d;
              }
              return c.prototype.degree = function() {
                return this.coefficients.length - 1;
              }, c.prototype.isZero = function() {
                return this.coefficients[0] === 0;
              }, c.prototype.getCoefficient = function(l) {
                return this.coefficients[this.coefficients.length - 1 - l];
              }, c.prototype.addOrSubtract = function(l) {
                var d;
                if (this.isZero())
                  return l;
                if (l.isZero())
                  return this;
                var u = this.coefficients, f = l.coefficients;
                u.length > f.length && (d = [f, u], u = d[0], f = d[1]);
                for (var p = new Uint8ClampedArray(f.length), k = f.length - u.length, v = 0; v < k; v++)
                  p[v] = f[v];
                for (var v = k; v < f.length; v++)
                  p[v] = s.addOrSubtractGF(u[v - k], f[v]);
                return new c(this.field, p);
              }, c.prototype.multiply = function(l) {
                if (l === 0)
                  return this.field.zero;
                if (l === 1)
                  return this;
                for (var d = this.coefficients.length, u = new Uint8ClampedArray(d), f = 0; f < d; f++)
                  u[f] = this.field.multiply(this.coefficients[f], l);
                return new c(this.field, u);
              }, c.prototype.multiplyPoly = function(l) {
                if (this.isZero() || l.isZero())
                  return this.field.zero;
                for (var d = this.coefficients, u = d.length, f = l.coefficients, p = f.length, k = new Uint8ClampedArray(u + p - 1), v = 0; v < u; v++)
                  for (var g = d[v], y = 0; y < p; y++)
                    k[v + y] = s.addOrSubtractGF(k[v + y], this.field.multiply(g, f[y]));
                return new c(this.field, k);
              }, c.prototype.multiplyByMonomial = function(l, d) {
                if (l < 0)
                  throw new Error("Invalid degree less than 0");
                if (d === 0)
                  return this.field.zero;
                for (var u = this.coefficients.length, f = new Uint8ClampedArray(u + l), p = 0; p < u; p++)
                  f[p] = this.field.multiply(this.coefficients[p], d);
                return new c(this.field, f);
              }, c.prototype.evaluateAt = function(l) {
                var d = 0;
                if (l === 0)
                  return this.getCoefficient(0);
                var u = this.coefficients.length;
                if (l === 1)
                  return this.coefficients.forEach(function(p) {
                    d = s.addOrSubtractGF(d, p);
                  }), d;
                d = this.coefficients[0];
                for (var f = 1; f < u; f++)
                  d = s.addOrSubtractGF(this.field.multiply(l, d), this.coefficients[f]);
                return d;
              }, c;
            }()
          );
          n.default = o;
        },
        /* 3 */
        /***/
        function(t, n, a) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var s = a(4), o = a(5), c = a(11), l = a(12);
          function d(p) {
            var k = l.locate(p);
            if (!k)
              return null;
            for (var v = 0, g = k; v < g.length; v++) {
              var y = g[v], P = c.extract(p, y), E = o.decode(P.matrix);
              if (E)
                return {
                  binaryData: E.bytes,
                  data: E.text,
                  chunks: E.chunks,
                  version: E.version,
                  location: {
                    topRightCorner: P.mappingFunction(y.dimension, 0),
                    topLeftCorner: P.mappingFunction(0, 0),
                    bottomRightCorner: P.mappingFunction(y.dimension, y.dimension),
                    bottomLeftCorner: P.mappingFunction(0, y.dimension),
                    topRightFinderPattern: y.topRight,
                    topLeftFinderPattern: y.topLeft,
                    bottomLeftFinderPattern: y.bottomLeft,
                    bottomRightAlignmentPattern: y.alignmentPattern
                  }
                };
            }
            return null;
          }
          var u = {
            inversionAttempts: "attemptBoth"
          };
          function f(p, k, v, g) {
            g === void 0 && (g = {});
            var y = u;
            Object.keys(y || {}).forEach(function(w) {
              y[w] = g[w] || y[w];
            });
            var P = y.inversionAttempts === "attemptBoth" || y.inversionAttempts === "invertFirst", E = y.inversionAttempts === "onlyInvert" || y.inversionAttempts === "invertFirst", x = s.binarize(p, k, v, P), h = x.binarized, b = x.inverted, C = d(E ? b : h);
            return !C && (y.inversionAttempts === "attemptBoth" || y.inversionAttempts === "invertFirst") && (C = d(E ? h : b)), C;
          }
          f.default = f, n.default = f;
        },
        /* 4 */
        /***/
        function(t, n, a) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var s = a(0), o = 8, c = 24;
          function l(f, p, k) {
            return f < p ? p : f > k ? k : f;
          }
          var d = (
            /** @class */
            function() {
              function f(p, k) {
                this.width = p, this.data = new Uint8ClampedArray(p * k);
              }
              return f.prototype.get = function(p, k) {
                return this.data[k * this.width + p];
              }, f.prototype.set = function(p, k, v) {
                this.data[k * this.width + p] = v;
              }, f;
            }()
          );
          function u(f, p, k, v) {
            if (f.length !== p * k * 4)
              throw new Error("Malformed data passed to binarizer.");
            for (var g = new d(p, k), y = 0; y < p; y++)
              for (var P = 0; P < k; P++) {
                var E = f[(P * p + y) * 4 + 0], x = f[(P * p + y) * 4 + 1], h = f[(P * p + y) * 4 + 2];
                g.set(y, P, 0.2126 * E + 0.7152 * x + 0.0722 * h);
              }
            for (var b = Math.ceil(p / o), C = Math.ceil(k / o), w = new d(b, C), T = 0; T < C; T++)
              for (var A = 0; A < b; A++) {
                for (var I = 0, j = 1 / 0, L = 0, P = 0; P < o; P++)
                  for (var y = 0; y < o; y++) {
                    var D = g.get(A * o + y, T * o + P);
                    I += D, j = Math.min(j, D), L = Math.max(L, D);
                  }
                var F = I / Math.pow(o, 2);
                if (L - j <= c && (F = j / 2, T > 0 && A > 0)) {
                  var z = (w.get(A, T - 1) + 2 * w.get(A - 1, T) + w.get(A - 1, T - 1)) / 4;
                  j < z && (F = z);
                }
                w.set(A, T, F);
              }
            var Q = s.BitMatrix.createEmpty(p, k), W = null;
            v && (W = s.BitMatrix.createEmpty(p, k));
            for (var T = 0; T < C; T++)
              for (var A = 0; A < b; A++) {
                for (var i3 = l(A, 2, b - 3), c3 = l(T, 2, C - 3), I = 0, _ = -2; _ <= 2; _++)
                  for (var O = -2; O <= 2; O++)
                    I += w.get(i3 + _, c3 + O);
                for (var Y = I / 25, _ = 0; _ < o; _++)
                  for (var O = 0; O < o; O++) {
                    var y = A * o + _, P = T * o + O, J = g.get(y, P);
                    Q.set(y, P, J <= Y), v && W.set(y, P, !(J <= Y));
                  }
              }
            return v ? { binarized: Q, inverted: W } : { binarized: Q };
          }
          n.binarize = u;
        },
        /* 5 */
        /***/
        function(t, n, a) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var s = a(0), o = a(6), c = a(9), l = a(10);
          function d(h, b) {
            for (var C = h ^ b, w = 0; C; )
              w++, C &= C - 1;
            return w;
          }
          function u(h, b) {
            return b << 1 | h;
          }
          var f = [
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
            function(h) {
              return (h.y + h.x) % 2 === 0;
            },
            function(h) {
              return h.y % 2 === 0;
            },
            function(h) {
              return h.x % 3 === 0;
            },
            function(h) {
              return (h.y + h.x) % 3 === 0;
            },
            function(h) {
              return (Math.floor(h.y / 2) + Math.floor(h.x / 3)) % 2 === 0;
            },
            function(h) {
              return h.x * h.y % 2 + h.x * h.y % 3 === 0;
            },
            function(h) {
              return (h.y * h.x % 2 + h.y * h.x % 3) % 2 === 0;
            },
            function(h) {
              return ((h.y + h.x) % 2 + h.y * h.x % 3) % 2 === 0;
            }
          ];
          function k(h) {
            var b = 17 + 4 * h.versionNumber, C = s.BitMatrix.createEmpty(b, b);
            C.setRegion(0, 0, 9, 9, !0), C.setRegion(b - 8, 0, 8, 9, !0), C.setRegion(0, b - 8, 9, 8, !0);
            for (var w = 0, T = h.alignmentPatternCenters; w < T.length; w++)
              for (var A = T[w], I = 0, j = h.alignmentPatternCenters; I < j.length; I++) {
                var L = j[I];
                A === 6 && L === 6 || A === 6 && L === b - 7 || A === b - 7 && L === 6 || C.setRegion(A - 2, L - 2, 5, 5, !0);
              }
            return C.setRegion(6, 9, 1, b - 17, !0), C.setRegion(9, 6, b - 17, 1, !0), h.versionNumber > 6 && (C.setRegion(b - 11, 0, 3, 6, !0), C.setRegion(0, b - 11, 6, 3, !0)), C;
          }
          function v(h, b, C) {
            for (var w = p[C.dataMask], T = h.height, A = k(b), I = [], j = 0, L = 0, D = !0, F = T - 1; F > 0; F -= 2) {
              F === 6 && F--;
              for (var z = 0; z < T; z++)
                for (var Q = D ? T - 1 - z : z, W = 0; W < 2; W++) {
                  var i3 = F - W;
                  if (!A.get(i3, Q)) {
                    L++;
                    var c3 = h.get(i3, Q);
                    w({ y: Q, x: i3 }) && (c3 = !c3), j = u(c3, j), L === 8 && (I.push(j), L = 0, j = 0);
                  }
                }
              D = !D;
            }
            return I;
          }
          function g(h) {
            var b = h.height, C = Math.floor((b - 17) / 4);
            if (C <= 6)
              return l.VERSIONS[C - 1];
            for (var w = 0, T = 5; T >= 0; T--)
              for (var A = b - 9; A >= b - 11; A--)
                w = u(h.get(A, T), w);
            for (var I = 0, A = 5; A >= 0; A--)
              for (var T = b - 9; T >= b - 11; T--)
                I = u(h.get(A, T), I);
            for (var j = 1 / 0, L, D = 0, F = l.VERSIONS; D < F.length; D++) {
              var z = F[D];
              if (z.infoBits === w || z.infoBits === I)
                return z;
              var Q = d(w, z.infoBits);
              Q < j && (L = z, j = Q), Q = d(I, z.infoBits), Q < j && (L = z, j = Q);
            }
            if (j <= 3)
              return L;
          }
          function y(h) {
            for (var b = 0, C = 0; C <= 8; C++)
              C !== 6 && (b = u(h.get(C, 8), b));
            for (var w = 7; w >= 0; w--)
              w !== 6 && (b = u(h.get(8, w), b));
            for (var T = h.height, A = 0, w = T - 1; w >= T - 7; w--)
              A = u(h.get(8, w), A);
            for (var C = T - 8; C < T; C++)
              A = u(h.get(C, 8), A);
            for (var I = 1 / 0, j = null, L = 0, D = f; L < D.length; L++) {
              var F = D[L], z = F.bits, Q = F.formatInfo;
              if (z === b || z === A)
                return Q;
              var W = d(b, z);
              W < I && (j = Q, I = W), b !== A && (W = d(A, z), W < I && (j = Q, I = W));
            }
            return I <= 3 ? j : null;
          }
          function P(h, b, C) {
            var w = b.errorCorrectionLevels[C], T = [], A = 0;
            if (w.ecBlocks.forEach(function(c3) {
              for (var _ = 0; _ < c3.numBlocks; _++)
                T.push({ numDataCodewords: c3.dataCodewordsPerBlock, codewords: [] }), A += c3.dataCodewordsPerBlock + w.ecCodewordsPerBlock;
            }), h.length < A)
              return null;
            h = h.slice(0, A);
            for (var I = w.ecBlocks[0].dataCodewordsPerBlock, j = 0; j < I; j++)
              for (var L = 0, D = T; L < D.length; L++) {
                var F = D[L];
                F.codewords.push(h.shift());
              }
            if (w.ecBlocks.length > 1)
              for (var z = w.ecBlocks[0].numBlocks, Q = w.ecBlocks[1].numBlocks, j = 0; j < Q; j++)
                T[z + j].codewords.push(h.shift());
            for (; h.length > 0; )
              for (var W = 0, i3 = T; W < i3.length; W++) {
                var F = i3[W];
                F.codewords.push(h.shift());
              }
            return T;
          }
          function E(h) {
            var b = g(h);
            if (!b)
              return null;
            var C = y(h);
            if (!C)
              return null;
            var w = v(h, b, C), T = P(w, b, C.errorCorrectionLevel);
            if (!T)
              return null;
            for (var A = T.reduce(function(W, i3) {
              return W + i3.numDataCodewords;
            }, 0), I = new Uint8ClampedArray(A), j = 0, L = 0, D = T; L < D.length; L++) {
              var F = D[L], z = c.decode(F.codewords, F.codewords.length - F.numDataCodewords);
              if (!z)
                return null;
              for (var Q = 0; Q < F.numDataCodewords; Q++)
                I[j++] = z[Q];
            }
            try {
              return o.decode(I, b.versionNumber);
            } catch {
              return null;
            }
          }
          function x(h) {
            if (h == null)
              return null;
            var b = E(h);
            if (b)
              return b;
            for (var C = 0; C < h.width; C++)
              for (var w = C + 1; w < h.height; w++)
                h.get(C, w) !== h.get(w, C) && (h.set(C, w, !h.get(C, w)), h.set(w, C, !h.get(w, C)));
            return E(h);
          }
          n.decode = x;
        },
        /* 6 */
        /***/
        function(t, n, a) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var s = a(7), o = a(8), c;
          (function(g) {
            g.Numeric = "numeric", g.Alphanumeric = "alphanumeric", g.Byte = "byte", g.Kanji = "kanji", g.ECI = "eci";
          })(c = n.Mode || (n.Mode = {}));
          var l;
          (function(g) {
            g[g.Terminator = 0] = "Terminator", g[g.Numeric = 1] = "Numeric", g[g.Alphanumeric = 2] = "Alphanumeric", g[g.Byte = 4] = "Byte", g[g.Kanji = 8] = "Kanji", g[g.ECI = 7] = "ECI";
          })(l || (l = {}));
          function d(g, y) {
            for (var P = [], E = "", x = [10, 12, 14][y], h = g.readBits(x); h >= 3; ) {
              var b = g.readBits(10);
              if (b >= 1e3)
                throw new Error("Invalid numeric value above 999");
              var C = Math.floor(b / 100), w = Math.floor(b / 10) % 10, T = b % 10;
              P.push(48 + C, 48 + w, 48 + T), E += C.toString() + w.toString() + T.toString(), h -= 3;
            }
            if (h === 2) {
              var b = g.readBits(7);
              if (b >= 100)
                throw new Error("Invalid numeric value above 99");
              var C = Math.floor(b / 10), w = b % 10;
              P.push(48 + C, 48 + w), E += C.toString() + w.toString();
            } else if (h === 1) {
              var b = g.readBits(4);
              if (b >= 10)
                throw new Error("Invalid numeric value above 9");
              P.push(48 + b), E += b.toString();
            }
            return { bytes: P, text: E };
          }
          var u = [
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
          function f(g, y) {
            for (var P = [], E = "", x = [9, 11, 13][y], h = g.readBits(x); h >= 2; ) {
              var b = g.readBits(11), C = Math.floor(b / 45), w = b % 45;
              P.push(u[C].charCodeAt(0), u[w].charCodeAt(0)), E += u[C] + u[w], h -= 2;
            }
            if (h === 1) {
              var C = g.readBits(6);
              P.push(u[C].charCodeAt(0)), E += u[C];
            }
            return { bytes: P, text: E };
          }
          function p(g, y) {
            for (var P = [], E = "", x = [8, 16, 16][y], h = g.readBits(x), b = 0; b < h; b++) {
              var C = g.readBits(8);
              P.push(C);
            }
            try {
              E += decodeURIComponent(P.map(function(w) {
                return "%" + ("0" + w.toString(16)).substr(-2);
              }).join(""));
            } catch {
            }
            return { bytes: P, text: E };
          }
          function k(g, y) {
            for (var P = [], E = "", x = [8, 10, 12][y], h = g.readBits(x), b = 0; b < h; b++) {
              var C = g.readBits(13), w = Math.floor(C / 192) << 8 | C % 192;
              w < 7936 ? w += 33088 : w += 49472, P.push(w >> 8, w & 255), E += String.fromCharCode(o.shiftJISTable[w]);
            }
            return { bytes: P, text: E };
          }
          function v(g, y) {
            for (var P, E, x, h, b = new s.BitStream(g), C = y <= 9 ? 0 : y <= 26 ? 1 : 2, w = {
              text: "",
              bytes: [],
              chunks: [],
              version: y
            }; b.available() >= 4; ) {
              var T = b.readBits(4);
              if (T === l.Terminator)
                return w;
              if (T === l.ECI)
                b.readBits(1) === 0 ? w.chunks.push({
                  type: c.ECI,
                  assignmentNumber: b.readBits(7)
                }) : b.readBits(1) === 0 ? w.chunks.push({
                  type: c.ECI,
                  assignmentNumber: b.readBits(14)
                }) : b.readBits(1) === 0 ? w.chunks.push({
                  type: c.ECI,
                  assignmentNumber: b.readBits(21)
                }) : w.chunks.push({
                  type: c.ECI,
                  assignmentNumber: -1
                });
              else if (T === l.Numeric) {
                var A = d(b, C);
                w.text += A.text, (P = w.bytes).push.apply(P, A.bytes), w.chunks.push({
                  type: c.Numeric,
                  text: A.text
                });
              } else if (T === l.Alphanumeric) {
                var I = f(b, C);
                w.text += I.text, (E = w.bytes).push.apply(E, I.bytes), w.chunks.push({
                  type: c.Alphanumeric,
                  text: I.text
                });
              } else if (T === l.Byte) {
                var j = p(b, C);
                w.text += j.text, (x = w.bytes).push.apply(x, j.bytes), w.chunks.push({
                  type: c.Byte,
                  bytes: j.bytes,
                  text: j.text
                });
              } else if (T === l.Kanji) {
                var L = k(b, C);
                w.text += L.text, (h = w.bytes).push.apply(h, L.bytes), w.chunks.push({
                  type: c.Kanji,
                  bytes: L.bytes,
                  text: L.text
                });
              }
            }
            if (b.available() === 0 || b.readBits(b.available()) === 0)
              return w;
          }
          n.decode = v;
        },
        /* 7 */
        /***/
        function(t, n, a) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var s = (
            /** @class */
            function() {
              function o(c) {
                this.byteOffset = 0, this.bitOffset = 0, this.bytes = c;
              }
              return o.prototype.readBits = function(c) {
                if (c < 1 || c > 32 || c > this.available())
                  throw new Error("Cannot read " + c.toString() + " bits");
                var l = 0;
                if (this.bitOffset > 0) {
                  var d = 8 - this.bitOffset, u = c < d ? c : d, f = d - u, p = 255 >> 8 - u << f;
                  l = (this.bytes[this.byteOffset] & p) >> f, c -= u, this.bitOffset += u, this.bitOffset === 8 && (this.bitOffset = 0, this.byteOffset++);
                }
                if (c > 0) {
                  for (; c >= 8; )
                    l = l << 8 | this.bytes[this.byteOffset] & 255, this.byteOffset++, c -= 8;
                  if (c > 0) {
                    var f = 8 - c, p = 255 >> f << f;
                    l = l << c | (this.bytes[this.byteOffset] & p) >> f, this.bitOffset += c;
                  }
                }
                return l;
              }, o.prototype.available = function() {
                return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
              }, o;
            }()
          );
          n.BitStream = s;
        },
        /* 8 */
        /***/
        function(t, n, a) {
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
        function(t, n, a) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var s = a(1), o = a(2);
          function c(f, p, k, v) {
            var g;
            p.degree() < k.degree() && (g = [k, p], p = g[0], k = g[1]);
            for (var y = p, P = k, E = f.zero, x = f.one; P.degree() >= v / 2; ) {
              var h = y, b = E;
              if (y = P, E = x, y.isZero())
                return null;
              P = h;
              for (var C = f.zero, w = y.getCoefficient(y.degree()), T = f.inverse(w); P.degree() >= y.degree() && !P.isZero(); ) {
                var A = P.degree() - y.degree(), I = f.multiply(P.getCoefficient(P.degree()), T);
                C = C.addOrSubtract(f.buildMonomial(A, I)), P = P.addOrSubtract(y.multiplyByMonomial(A, I));
              }
              if (x = C.multiplyPoly(E).addOrSubtract(b), P.degree() >= y.degree())
                return null;
            }
            var j = x.getCoefficient(0);
            if (j === 0)
              return null;
            var L = f.inverse(j);
            return [x.multiply(L), P.multiply(L)];
          }
          function l(f, p) {
            var k = p.degree();
            if (k === 1)
              return [p.getCoefficient(1)];
            for (var v = new Array(k), g = 0, y = 1; y < f.size && g < k; y++)
              p.evaluateAt(y) === 0 && (v[g] = f.inverse(y), g++);
            return g !== k ? null : v;
          }
          function d(f, p, k) {
            for (var v = k.length, g = new Array(v), y = 0; y < v; y++) {
              for (var P = f.inverse(k[y]), E = 1, x = 0; x < v; x++)
                y !== x && (E = f.multiply(E, s.addOrSubtractGF(1, f.multiply(k[x], P))));
              g[y] = f.multiply(p.evaluateAt(P), f.inverse(E)), f.generatorBase !== 0 && (g[y] = f.multiply(g[y], P));
            }
            return g;
          }
          function u(f, p) {
            var k = new Uint8ClampedArray(f.length);
            k.set(f);
            for (var v = new s.default(285, 256, 0), g = new o.default(v, k), y = new Uint8ClampedArray(p), P = !1, E = 0; E < p; E++) {
              var x = g.evaluateAt(v.exp(E + v.generatorBase));
              y[y.length - 1 - E] = x, x !== 0 && (P = !0);
            }
            if (!P)
              return k;
            var h = new o.default(v, y), b = c(v, v.buildMonomial(p, 1), h, p);
            if (b === null)
              return null;
            var C = l(v, b[0]);
            if (C == null)
              return null;
            for (var w = d(v, b[1], C), T = 0; T < C.length; T++) {
              var A = k.length - 1 - v.log(C[T]);
              if (A < 0)
                return null;
              k[A] = s.addOrSubtractGF(k[A], w[T]);
            }
            return k;
          }
          n.decode = u;
        },
        /* 10 */
        /***/
        function(t, n, a) {
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
        function(t, n, a) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var s = a(0);
          function o(u, f, p, k) {
            var v = u.x - f.x + p.x - k.x, g = u.y - f.y + p.y - k.y;
            if (v === 0 && g === 0)
              return {
                a11: f.x - u.x,
                a12: f.y - u.y,
                a13: 0,
                a21: p.x - f.x,
                a22: p.y - f.y,
                a23: 0,
                a31: u.x,
                a32: u.y,
                a33: 1
              };
            var y = f.x - p.x, P = k.x - p.x, E = f.y - p.y, x = k.y - p.y, h = y * x - P * E, b = (v * x - P * g) / h, C = (y * g - v * E) / h;
            return {
              a11: f.x - u.x + b * f.x,
              a12: f.y - u.y + b * f.y,
              a13: b,
              a21: k.x - u.x + C * k.x,
              a22: k.y - u.y + C * k.y,
              a23: C,
              a31: u.x,
              a32: u.y,
              a33: 1
            };
          }
          function c(u, f, p, k) {
            var v = o(u, f, p, k);
            return {
              a11: v.a22 * v.a33 - v.a23 * v.a32,
              a12: v.a13 * v.a32 - v.a12 * v.a33,
              a13: v.a12 * v.a23 - v.a13 * v.a22,
              a21: v.a23 * v.a31 - v.a21 * v.a33,
              a22: v.a11 * v.a33 - v.a13 * v.a31,
              a23: v.a13 * v.a21 - v.a11 * v.a23,
              a31: v.a21 * v.a32 - v.a22 * v.a31,
              a32: v.a12 * v.a31 - v.a11 * v.a32,
              a33: v.a11 * v.a22 - v.a12 * v.a21
            };
          }
          function l(u, f) {
            return {
              a11: u.a11 * f.a11 + u.a21 * f.a12 + u.a31 * f.a13,
              a12: u.a12 * f.a11 + u.a22 * f.a12 + u.a32 * f.a13,
              a13: u.a13 * f.a11 + u.a23 * f.a12 + u.a33 * f.a13,
              a21: u.a11 * f.a21 + u.a21 * f.a22 + u.a31 * f.a23,
              a22: u.a12 * f.a21 + u.a22 * f.a22 + u.a32 * f.a23,
              a23: u.a13 * f.a21 + u.a23 * f.a22 + u.a33 * f.a23,
              a31: u.a11 * f.a31 + u.a21 * f.a32 + u.a31 * f.a33,
              a32: u.a12 * f.a31 + u.a22 * f.a32 + u.a32 * f.a33,
              a33: u.a13 * f.a31 + u.a23 * f.a32 + u.a33 * f.a33
            };
          }
          function d(u, f) {
            for (var p = c({ x: 3.5, y: 3.5 }, { x: f.dimension - 3.5, y: 3.5 }, { x: f.dimension - 6.5, y: f.dimension - 6.5 }, { x: 3.5, y: f.dimension - 3.5 }), k = o(f.topLeft, f.topRight, f.alignmentPattern, f.bottomLeft), v = l(k, p), g = s.BitMatrix.createEmpty(f.dimension, f.dimension), y = function(C, w) {
              var T = v.a13 * C + v.a23 * w + v.a33;
              return {
                x: (v.a11 * C + v.a21 * w + v.a31) / T,
                y: (v.a12 * C + v.a22 * w + v.a32) / T
              };
            }, P = 0; P < f.dimension; P++)
              for (var E = 0; E < f.dimension; E++) {
                var x = E + 0.5, h = P + 0.5, b = y(x, h);
                g.set(E, P, u.get(Math.floor(b.x), Math.floor(b.y)));
              }
            return {
              matrix: g,
              mappingFunction: y
            };
          }
          n.extract = d;
        },
        /* 12 */
        /***/
        function(t, n, a) {
          Object.defineProperty(n, "__esModule", { value: !0 });
          var s = 4, o = 0.5, c = 1.5, l = function(x, h) {
            return Math.sqrt(Math.pow(h.x - x.x, 2) + Math.pow(h.y - x.y, 2));
          };
          function d(x) {
            return x.reduce(function(h, b) {
              return h + b;
            });
          }
          function u(x, h, b) {
            var C, w, T, A, I = l(x, h), j = l(h, b), L = l(x, b), D, F, z;
            return j >= I && j >= L ? (C = [h, x, b], D = C[0], F = C[1], z = C[2]) : L >= j && L >= I ? (w = [x, h, b], D = w[0], F = w[1], z = w[2]) : (T = [x, b, h], D = T[0], F = T[1], z = T[2]), (z.x - F.x) * (D.y - F.y) - (z.y - F.y) * (D.x - F.x) < 0 && (A = [z, D], D = A[0], z = A[1]), { bottomLeft: D, topLeft: F, topRight: z };
          }
          function f(x, h, b, C) {
            var w = (d(k(x, b, C, 5)) / 7 + // Divide by 7 since the ratio is 1:1:3:1:1
            d(k(x, h, C, 5)) / 7 + d(k(b, x, C, 5)) / 7 + d(k(h, x, C, 5)) / 7) / 4;
            if (w < 1)
              throw new Error("Invalid module size");
            var T = Math.round(l(x, h) / w), A = Math.round(l(x, b) / w), I = Math.floor((T + A) / 2) + 7;
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
          function p(x, h, b, C) {
            var w = [{ x: Math.floor(x.x), y: Math.floor(x.y) }], T = Math.abs(h.y - x.y) > Math.abs(h.x - x.x), A, I, j, L;
            T ? (A = Math.floor(x.y), I = Math.floor(x.x), j = Math.floor(h.y), L = Math.floor(h.x)) : (A = Math.floor(x.x), I = Math.floor(x.y), j = Math.floor(h.x), L = Math.floor(h.y));
            for (var D = Math.abs(j - A), F = Math.abs(L - I), z = Math.floor(-D / 2), Q = A < j ? 1 : -1, W = I < L ? 1 : -1, i3 = !0, c3 = A, _ = I; c3 !== j + Q; c3 += Q) {
              var O = T ? _ : c3, Y = T ? c3 : _;
              if (b.get(O, Y) !== i3 && (i3 = !i3, w.push({ x: O, y: Y }), w.length === C + 1))
                break;
              if (z += F, z > 0) {
                if (_ === L)
                  break;
                _ += W, z -= D;
              }
            }
            for (var J = [], R = 0; R < C; R++)
              w[R] && w[R + 1] ? J.push(l(w[R], w[R + 1])) : J.push(0);
            return J;
          }
          function k(x, h, b, C) {
            var w, T = h.y - x.y, A = h.x - x.x, I = p(x, h, b, Math.ceil(C / 2)), j = p(x, { x: x.x - A, y: x.y - T }, b, Math.ceil(C / 2)), L = I.shift() + j.shift() - 1;
            return (w = j.concat(L)).concat.apply(w, I);
          }
          function v(x, h) {
            var b = d(x) / d(h), C = 0;
            return h.forEach(function(w, T) {
              C += Math.pow(x[T] - w * b, 2);
            }), { averageSize: b, error: C };
          }
          function g(x, h, b) {
            try {
              var C = k(x, { x: -1, y: x.y }, b, h.length), w = k(x, { x: x.x, y: -1 }, b, h.length), T = {
                x: Math.max(0, x.x - x.y) - 1,
                y: Math.max(0, x.y - x.x) - 1
              }, A = k(x, T, b, h.length), I = {
                x: Math.min(b.width, x.x + x.y) + 1,
                y: Math.min(b.height, x.y + x.x) + 1
              }, j = k(x, I, b, h.length), L = v(C, h), D = v(w, h), F = v(A, h), z = v(j, h), Q = Math.sqrt(L.error * L.error + D.error * D.error + F.error * F.error + z.error * z.error), W = (L.averageSize + D.averageSize + F.averageSize + z.averageSize) / 4, i3 = (Math.pow(L.averageSize - W, 2) + Math.pow(D.averageSize - W, 2) + Math.pow(F.averageSize - W, 2) + Math.pow(z.averageSize - W, 2)) / W;
              return Q + i3;
            } catch {
              return 1 / 0;
            }
          }
          function y(x, h) {
            for (var b = Math.round(h.x); x.get(b, Math.round(h.y)); )
              b--;
            for (var C = Math.round(h.x); x.get(C, Math.round(h.y)); )
              C++;
            for (var w = (b + C) / 2, T = Math.round(h.y); x.get(Math.round(w), T); )
              T--;
            for (var A = Math.round(h.y); x.get(Math.round(w), A); )
              A++;
            var I = (T + A) / 2;
            return { x: w, y: I };
          }
          function P(x) {
            for (var h = [], b = [], C = [], w = [], T = function(O) {
              for (var Y = 0, J = !1, R = [0, 0, 0, 0, 0], t3 = function(G) {
                var Z = x.get(G, O);
                if (Z === J)
                  Y++;
                else {
                  R = [R[1], R[2], R[3], R[4], Y], Y = 1, J = Z;
                  var q = d(R) / 7, e3 = Math.abs(R[0] - q) < q && Math.abs(R[1] - q) < q && Math.abs(R[2] - 3 * q) < 3 * q && Math.abs(R[3] - q) < q && Math.abs(R[4] - q) < q && !Z, d3 = d(R.slice(-3)) / 3, v3 = Math.abs(R[2] - d3) < d3 && Math.abs(R[3] - d3) < d3 && Math.abs(R[4] - d3) < d3 && Z;
                  if (e3) {
                    var w3 = G - R[3] - R[4], j3 = w3 - R[2], g3 = { startX: j3, endX: w3, y: O }, y3 = b.filter(function(p3) {
                      return j3 >= p3.bottom.startX && j3 <= p3.bottom.endX || w3 >= p3.bottom.startX && j3 <= p3.bottom.endX || j3 <= p3.bottom.startX && w3 >= p3.bottom.endX && R[2] / (p3.bottom.endX - p3.bottom.startX) < c && R[2] / (p3.bottom.endX - p3.bottom.startX) > o;
                    });
                    y3.length > 0 ? y3[0].bottom = g3 : b.push({ top: g3, bottom: g3 });
                  }
                  if (v3) {
                    var A3 = G - R[4], S3 = A3 - R[3], g3 = { startX: S3, y: O, endX: A3 }, y3 = w.filter(function(C3) {
                      return S3 >= C3.bottom.startX && S3 <= C3.bottom.endX || A3 >= C3.bottom.startX && S3 <= C3.bottom.endX || S3 <= C3.bottom.startX && A3 >= C3.bottom.endX && R[2] / (C3.bottom.endX - C3.bottom.startX) < c && R[2] / (C3.bottom.endX - C3.bottom.startX) > o;
                    });
                    y3.length > 0 ? y3[0].bottom = g3 : w.push({ top: g3, bottom: g3 });
                  }
                }
              }, V = -1; V <= x.width; V++)
                t3(V);
              h.push.apply(h, b.filter(function(G) {
                return G.bottom.y !== O && G.bottom.y - G.top.y >= 2;
              })), b = b.filter(function(G) {
                return G.bottom.y === O;
              }), C.push.apply(C, w.filter(function(G) {
                return G.bottom.y !== O;
              })), w = w.filter(function(G) {
                return G.bottom.y === O;
              });
            }, A = 0; A <= x.height; A++)
              T(A);
            h.push.apply(h, b.filter(function(O) {
              return O.bottom.y - O.top.y >= 2;
            })), C.push.apply(C, w);
            var I = h.filter(function(O) {
              return O.bottom.y - O.top.y >= 2;
            }).map(function(O) {
              var Y = (O.top.startX + O.top.endX + O.bottom.startX + O.bottom.endX) / 4, J = (O.top.y + O.bottom.y + 1) / 2;
              if (x.get(Math.round(Y), Math.round(J))) {
                var R = [O.top.endX - O.top.startX, O.bottom.endX - O.bottom.startX, O.bottom.y - O.top.y + 1], t3 = d(R) / R.length, V = g({ x: Math.round(Y), y: Math.round(J) }, [1, 1, 3, 1, 1], x);
                return { score: V, x: Y, y: J, size: t3 };
              }
            }).filter(function(O) {
              return !!O;
            }).sort(function(O, Y) {
              return O.score - Y.score;
            }).map(function(O, Y, J) {
              if (Y > s)
                return null;
              var R = J.filter(function(V, G) {
                return Y !== G;
              }).map(function(V) {
                return { x: V.x, y: V.y, score: V.score + Math.pow(V.size - O.size, 2) / O.size, size: V.size };
              }).sort(function(V, G) {
                return V.score - G.score;
              });
              if (R.length < 2)
                return null;
              var t3 = O.score + R[0].score + R[1].score;
              return { points: [O].concat(R.slice(0, 2)), score: t3 };
            }).filter(function(O) {
              return !!O;
            }).sort(function(O, Y) {
              return O.score - Y.score;
            });
            if (I.length === 0)
              return null;
            var j = u(I[0].points[0], I[0].points[1], I[0].points[2]), L = j.topRight, D = j.topLeft, F = j.bottomLeft, z = E(x, C, L, D, F), Q = [];
            z && Q.push({
              alignmentPattern: { x: z.alignmentPattern.x, y: z.alignmentPattern.y },
              bottomLeft: { x: F.x, y: F.y },
              dimension: z.dimension,
              topLeft: { x: D.x, y: D.y },
              topRight: { x: L.x, y: L.y }
            });
            var W = y(x, L), i3 = y(x, D), c3 = y(x, F), _ = E(x, C, W, i3, c3);
            return _ && Q.push({
              alignmentPattern: { x: _.alignmentPattern.x, y: _.alignmentPattern.y },
              bottomLeft: { x: c3.x, y: c3.y },
              topLeft: { x: i3.x, y: i3.y },
              topRight: { x: W.x, y: W.y },
              dimension: _.dimension
            }), Q.length === 0 ? null : Q;
          }
          n.locate = P;
          function E(x, h, b, C, w) {
            var T, A, I;
            try {
              T = f(C, b, w, x), A = T.dimension, I = T.moduleSize;
            } catch {
              return null;
            }
            var j = {
              x: b.x - C.x + w.x,
              y: b.y - C.y + w.y
            }, L = (l(C, w) + l(C, b)) / 2 / I, D = 1 - 3 / L, F = {
              x: C.x + D * (j.x - C.x),
              y: C.y + D * (j.y - C.y)
            }, z = h.map(function(W) {
              var i3 = (W.top.startX + W.top.endX + W.bottom.startX + W.bottom.endX) / 4, c3 = (W.top.y + W.bottom.y + 1) / 2;
              if (x.get(Math.floor(i3), Math.floor(c3))) {
                var _ = [W.top.endX - W.top.startX, W.bottom.endX - W.bottom.startX, W.bottom.y - W.top.y + 1];
                d(_) / _.length;
                var O = g({ x: Math.floor(i3), y: Math.floor(c3) }, [1, 1, 1], x), Y = O + l({ x: i3, y: c3 }, F);
                return { x: i3, y: c3, score: Y };
              }
            }).filter(function(W) {
              return !!W;
            }).sort(function(W, i3) {
              return W.score - i3.score;
            }), Q = L >= 15 && z.length ? z[0] : F;
            return { alignmentPattern: Q, dimension: A };
          }
        }
        /******/
      ]).default
    );
  });
})(Nt);
var ca = Nt.exports, la = /* @__PURE__ */ jt(ca), Lt = { exports: {} };
(function(e, r) {
  (function(n, a) {
    e.exports = a(u3);
  })(It, function(t) {
    return (
      /******/
      function(n) {
        var a = {};
        function s(o) {
          if (a[o])
            return a[o].exports;
          var c = a[o] = {
            /******/
            i: o,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return n[o].call(c.exports, c, c.exports, s), c.l = !0, c.exports;
        }
        return s.m = n, s.c = a, s.d = function(o, c, l) {
          s.o(o, c) || Object.defineProperty(o, c, { enumerable: !0, get: l });
        }, s.r = function(o) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o, "__esModule", { value: !0 });
        }, s.t = function(o, c) {
          if (c & 1 && (o = s(o)), c & 8 || c & 4 && typeof o == "object" && o && o.__esModule) return o;
          var l = /* @__PURE__ */ Object.create(null);
          if (s.r(l), Object.defineProperty(l, "default", { enumerable: !0, value: o }), c & 2 && typeof o != "string") for (var d in o) s.d(l, d, (function(u) {
            return o[u];
          }).bind(null, d));
          return l;
        }, s.n = function(o) {
          var c = o && o.__esModule ? (
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
          return s.d(c, "a", c), c;
        }, s.o = function(o, c) {
          return Object.prototype.hasOwnProperty.call(o, c);
        }, s.p = "", s(s.s = "./src/react-webcam.tsx");
      }({
        /***/
        "./src/react-webcam.tsx": (
          /*!******************************!*\
            !*** ./src/react-webcam.tsx ***!
            \******************************/
          /*! exports provided: default */
          /***/
          function(n, a, s) {
            s.r(a);
            var o = s(
              /*! react */
              "react"
            ), c = /* @__PURE__ */ function() {
              var p = function(k, v) {
                return p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(g, y) {
                  g.__proto__ = y;
                } || function(g, y) {
                  for (var P in y) y.hasOwnProperty(P) && (g[P] = y[P]);
                }, p(k, v);
              };
              return function(k, v) {
                p(k, v);
                function g() {
                  this.constructor = k;
                }
                k.prototype = v === null ? Object.create(v) : (g.prototype = v.prototype, new g());
              };
            }(), l = function() {
              return l = Object.assign || function(p) {
                for (var k, v = 1, g = arguments.length; v < g; v++) {
                  k = arguments[v];
                  for (var y in k) Object.prototype.hasOwnProperty.call(k, y) && (p[y] = k[y]);
                }
                return p;
              }, l.apply(this, arguments);
            }, d = function(p, k) {
              var v = {};
              for (var g in p) Object.prototype.hasOwnProperty.call(p, g) && k.indexOf(g) < 0 && (v[g] = p[g]);
              if (p != null && typeof Object.getOwnPropertySymbols == "function")
                for (var y = 0, g = Object.getOwnPropertySymbols(p); y < g.length; y++)
                  k.indexOf(g[y]) < 0 && Object.prototype.propertyIsEnumerable.call(p, g[y]) && (v[g[y]] = p[g[y]]);
              return v;
            };
            (function() {
              typeof window > "u" || (navigator.mediaDevices === void 0 && (navigator.mediaDevices = {}), navigator.mediaDevices.getUserMedia === void 0 && (navigator.mediaDevices.getUserMedia = function(k) {
                var v = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
                return v ? new Promise(function(g, y) {
                  v.call(navigator, k, g, y);
                }) : Promise.reject(new Error("getUserMedia is not implemented in this browser"));
              }));
            })();
            function u() {
              return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
            }
            var f = (
              /** @class */
              function(p) {
                c(k, p);
                function k(v) {
                  var g = p.call(this, v) || this;
                  return g.canvas = null, g.ctx = null, g.requestUserMediaId = 0, g.unmounted = !1, g.state = {
                    hasUserMedia: !1
                  }, g;
                }
                return k.prototype.componentDidMount = function() {
                  var v = this, g = v.state, y = v.props;
                  if (this.unmounted = !1, !u()) {
                    y.onUserMediaError("getUserMedia not supported");
                    return;
                  }
                  g.hasUserMedia || this.requestUserMedia(), y.children && typeof y.children != "function" && console.warn("children must be a function");
                }, k.prototype.componentDidUpdate = function(v) {
                  var g = this.props;
                  if (!u()) {
                    g.onUserMediaError("getUserMedia not supported");
                    return;
                  }
                  var y = JSON.stringify(v.audioConstraints) !== JSON.stringify(g.audioConstraints), P = JSON.stringify(v.videoConstraints) !== JSON.stringify(g.videoConstraints), E = v.minScreenshotWidth !== g.minScreenshotWidth, x = v.minScreenshotHeight !== g.minScreenshotHeight;
                  (P || E || x) && (this.canvas = null, this.ctx = null), (y || P) && (this.stopAndCleanup(), this.requestUserMedia());
                }, k.prototype.componentWillUnmount = function() {
                  this.unmounted = !0, this.stopAndCleanup();
                }, k.stopMediaStream = function(v) {
                  v && (v.getVideoTracks && v.getAudioTracks ? (v.getVideoTracks().map(function(g) {
                    v.removeTrack(g), g.stop();
                  }), v.getAudioTracks().map(function(g) {
                    v.removeTrack(g), g.stop();
                  })) : v.stop());
                }, k.prototype.stopAndCleanup = function() {
                  var v = this.state;
                  v.hasUserMedia && (k.stopMediaStream(this.stream), v.src && window.URL.revokeObjectURL(v.src));
                }, k.prototype.getScreenshot = function(v) {
                  var g = this, y = g.state, P = g.props;
                  if (!y.hasUserMedia)
                    return null;
                  var E = this.getCanvas(v);
                  return E && E.toDataURL(P.screenshotFormat, P.screenshotQuality);
                }, k.prototype.getCanvas = function(v) {
                  var g = this, y = g.state, P = g.props;
                  if (!this.video || !y.hasUserMedia || !this.video.videoHeight)
                    return null;
                  if (!this.ctx) {
                    var E = this.video.videoWidth, x = this.video.videoHeight;
                    if (!this.props.forceScreenshotSourceSize) {
                      var h = E / x;
                      E = P.minScreenshotWidth || this.video.clientWidth, x = E / h, P.minScreenshotHeight && x < P.minScreenshotHeight && (x = P.minScreenshotHeight, E = x * h);
                    }
                    this.canvas = document.createElement("canvas"), this.canvas.width = (v == null ? void 0 : v.width) || E, this.canvas.height = (v == null ? void 0 : v.height) || x, this.ctx = this.canvas.getContext("2d");
                  }
                  var b = this, C = b.ctx, w = b.canvas;
                  return C && w && (w.width = (v == null ? void 0 : v.width) || w.width, w.height = (v == null ? void 0 : v.height) || w.height, P.mirrored && (C.translate(w.width, 0), C.scale(-1, 1)), C.imageSmoothingEnabled = P.imageSmoothing, C.drawImage(this.video, 0, 0, (v == null ? void 0 : v.width) || w.width, (v == null ? void 0 : v.height) || w.height), P.mirrored && (C.scale(-1, 1), C.translate(-w.width, 0))), w;
                }, k.prototype.requestUserMedia = function() {
                  var v = this, g = this.props, y = function(x, h) {
                    var b = {
                      video: typeof h < "u" ? h : !0
                    };
                    g.audio && (b.audio = typeof x < "u" ? x : !0), v.requestUserMediaId++;
                    var C = v.requestUserMediaId;
                    navigator.mediaDevices.getUserMedia(b).then(function(w) {
                      v.unmounted || C !== v.requestUserMediaId ? k.stopMediaStream(w) : v.handleUserMedia(null, w);
                    }).catch(function(w) {
                      v.handleUserMedia(w);
                    });
                  };
                  if ("mediaDevices" in navigator)
                    y(g.audioConstraints, g.videoConstraints);
                  else {
                    var P = function(x) {
                      return { optional: [{ sourceId: x }] };
                    }, E = function(x) {
                      var h = x.deviceId;
                      return typeof h == "string" ? h : Array.isArray(h) && h.length > 0 ? h[0] : typeof h == "object" && h.ideal ? h.ideal : null;
                    };
                    MediaStreamTrack.getSources(function(x) {
                      var h = null, b = null;
                      x.forEach(function(T) {
                        T.kind === "audio" ? h = T.id : T.kind === "video" && (b = T.id);
                      });
                      var C = E(g.audioConstraints);
                      C && (h = C);
                      var w = E(g.videoConstraints);
                      w && (b = w), y(P(h), P(b));
                    });
                  }
                }, k.prototype.handleUserMedia = function(v, g) {
                  var y = this.props;
                  if (v || !g) {
                    this.setState({ hasUserMedia: !1 }), y.onUserMediaError(v);
                    return;
                  }
                  this.stream = g;
                  try {
                    this.video && (this.video.srcObject = g), this.setState({ hasUserMedia: !0 });
                  } catch {
                    this.setState({
                      hasUserMedia: !0,
                      src: window.URL.createObjectURL(g)
                    });
                  }
                  y.onUserMedia(g);
                }, k.prototype.render = function() {
                  var v = this, g = this, y = g.state, P = g.props, E = P.audio;
                  P.forceScreenshotSourceSize;
                  var x = P.disablePictureInPicture;
                  P.onUserMedia, P.onUserMediaError, P.screenshotFormat, P.screenshotQuality, P.minScreenshotWidth, P.minScreenshotHeight, P.audioConstraints, P.videoConstraints, P.imageSmoothing;
                  var h = P.mirrored, b = P.style, C = b === void 0 ? {} : b, w = P.children, T = d(P, ["audio", "forceScreenshotSourceSize", "disablePictureInPicture", "onUserMedia", "onUserMediaError", "screenshotFormat", "screenshotQuality", "minScreenshotWidth", "minScreenshotHeight", "audioConstraints", "videoConstraints", "imageSmoothing", "mirrored", "style", "children"]), A = h ? l(l({}, C), { transform: (C.transform || "") + " scaleX(-1)" }) : C, I = {
                    getScreenshot: this.getScreenshot.bind(this)
                  };
                  return o.createElement(
                    o.Fragment,
                    null,
                    o.createElement("video", l({ autoPlay: !0, disablePictureInPicture: x, src: y.src, muted: !E, playsInline: !0, ref: function(j) {
                      v.video = j;
                    }, style: A }, T)),
                    w && w(I)
                  );
                }, k.defaultProps = {
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
                }, k;
              }(o.Component)
            );
            a.default = f;
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
            n.exports = t;
          }
        )
        /******/
      }).default
    );
  });
})(Lt);
var ua = Lt.exports, fa = /* @__PURE__ */ jt(ua);
function Ba(e) {
  var r = e.delay, t = e.width, n = e.height, a = e.onRead, s = e.action, o = e.videoConstraints, c = u3.useRef(null), l = u3.useCallback(function() {
    var d, u;
    if (c && c.current) {
      var f = (u = (d = c.current.getCanvas()) === null || d === void 0 ? void 0 : d.getContext("2d")) === null || u === void 0 ? void 0 : u.getImageData(0, 0, t, n);
      if (f && f.data) {
        var p = la(f.data, t, n);
        p && (a && a(p), s && s(p.data));
      }
    }
  }, [c, t, n, a, s]);
  return u3.useEffect(function() {
    var d = setInterval(function() {
      l();
    }, r);
    return function() {
      return clearInterval(d);
    };
  }), sa.jsx(fa, { audio: !1, ref: c, width: t, height: n, videoConstraints: o });
}
function da() {
  const e = O3();
  return /* @__PURE__ */ n3(
    "div",
    {
      className: "w-full h-[1px]",
      style: {
        ...e("borders")
      }
    }
  );
}
function Ft({ joinComponent: e, list: r }) {
  return u3.useMemo(() => {
    const n = [], a = r.length;
    let s = 0;
    return r.forEach((o, c) => {
      n.push(/* @__PURE__ */ n3(Z3, { children: o }, s)), c + 1 != a && n.push(/* @__PURE__ */ n3(Z3, { children: e }, s + 1)), s += 2;
    }), n;
  }, [r, e]);
}
const Ca = u3.forwardRef(({ list: e, style: r, className: t, ...n }, a) => {
  const s = O3();
  return /* @__PURE__ */ n3(
    "div",
    {
      ...n,
      ref: a,
      className: B3("border border-solid border-transparent rounded-lg flex flex-col", t),
      style: {
        ...s("secondary.background", {
          borderColor: "borders"
        }),
        ...r
      },
      children: /* @__PURE__ */ n3(
        Ft,
        {
          list: e.filter(Boolean).map((o, c) => /* @__PURE__ */ n3(Z3, { children: o }, c)),
          joinComponent: /* @__PURE__ */ n3(da, {})
        }
      )
    }
  );
}), Pa = ({ title: e, rightSide: r }) => /* @__PURE__ */ M3("div", { className: "flex justify-between items-center p-2", children: [
  /* @__PURE__ */ n3("h1", { className: "text-3xl truncate capitalize", children: e }),
  /* @__PURE__ */ n3("div", { className: "flex items-center gap-1", children: r })
] }), va = {
  loading: Ie.solid.faRotate,
  error: Ie.solid.faXmark,
  success: Ie.solid.faCheck,
  ready: Ie.solid.faFileUpload,
  idle: void 0
};
function xa({ state: e, config: r = {}, id: t }) {
  var c, l;
  const n = O3(), a = L3(!1), s = Jr("preferences/animation.boolean"), { status: o } = Xt(async () => {
    const d = await Vt(r);
    e.set((u) => u ? [.../* @__PURE__ */ new Set([...u, ...d])] : d);
  }, [r]);
  return Q2(async () => {
    ["success", "error"].includes(o.get) && (await et(1e3), o.set("ready"));
  }, [o.get]), /* @__PURE__ */ M3(
    "div",
    {
      className: B3("relative border border-solid border-transparent flex items-center gap-1 w-full p-2 rounded-md", s && "transition-[background-color] duration-200"),
      onMouseEnter: () => a.set(!0),
      onMouseLeave: () => a.set(!1),
      style: {
        ...n("gray.opacity", a.get && "gray.opacity.2", {
          borderColor: "borders"
        })
      },
      children: [
        /* @__PURE__ */ M3("div", { className: "relative flex flex-wrap gap-1 w-full", children: [
          (c = e.get) == null ? void 0 : c.map((d, u) => /* @__PURE__ */ M3(
            "span",
            {
              className: "inline-flex justify-between items-center px-2 py-1 rounded-md",
              style: {
                ...n("gray.opacity")
              },
              children: [
                /* @__PURE__ */ n3(t5, { href: d, className: "max-w-[50px] truncate", children: d }),
                /* @__PURE__ */ n3(
                  Ar,
                  {
                    onClick: () => {
                      var f;
                      e.set(((f = e.get) == null ? void 0 : f.filter((p) => p != d)) || null);
                    },
                    icon: Jt
                  }
                )
              ]
            },
            u
          )),
          !((l = e.get) != null && l.length) && /* @__PURE__ */ n3("span", { className: "capitalize", children: /* @__PURE__ */ n3(n5, { content: "no files choised" }) })
        ] }),
        /* @__PURE__ */ M3("div", { className: "flex items-center gap-x-1 tools", children: [
          r.nullable && /* @__PURE__ */ n3(
            Ar,
            {
              onClick: () => {
                e.set(null);
              },
              icon: Kt
            }
          ),
          /* @__PURE__ */ n3(
            Ar,
            {
              onClick: async () => {
                o.get != "loading" && o.set("idle");
              },
              id: t,
              iconClassName: B3(o.get == "loading" && "animate-spin"),
              icon: va[o.get]
            }
          )
        ] })
      ]
    }
  );
}
function Ea() {
  const e = O3();
  return /* @__PURE__ */ M3(
    "div",
    {
      className: "relative bg-opacity-10 h-[2px] w-full pointer-events-none",
      style: {
        ...e("gray.opacity")
      },
      children: [
        /* @__PURE__ */ n3(
          "div",
          {
            className: B3("absolute h-full left-0 transform animate-loading"),
            style: {
              ...e({
                background: v2("to right", "transparent", "primary")
              })
            }
          }
        ),
        /* @__PURE__ */ n3(
          "div",
          {
            className: B3("absolute h-full right-0 transform animate-loading"),
            style: {
              ...e({
                background: v2("to right", "primary", "transparent")
              })
            }
          }
        )
      ]
    }
  );
}
const Oa = ({ className: e, circleClassName: r, ...t }) => {
  const n = O3();
  return /* @__PURE__ */ n3("span", { children: /* @__PURE__ */ n3("span", { className: B3("relative inline-flex items-center justify-center text-xs w-[25px] h-[25px]", e), ...t, children: /* @__PURE__ */ n3(
    "span",
    {
      className: B3("absolute inline-block w-full h-full rounded-full border-[2px] border-solid border-transparent animate-spin", r),
      style: {
        ...n({
          borderTopColor: "primary",
          borderLeftColor: "primary",
          borderRightColor: "primary"
        })
      }
    }
  ) }) });
}, Sa = ({ balls: e = 3, ballClassName: r = "" }) => {
  const t = O3();
  return /* @__PURE__ */ n3("div", { className: "flex", children: Qt(1, e).map((n) => /* @__PURE__ */ n3(
    "span",
    {
      className: "inline-block animate-ty w-[40px] h-[40px] rounded-full",
      style: {
        ...t("primary"),
        animationDelay: `${n / e * 1}s`
      }
    },
    n
  )) });
}, _a = u3.forwardRef(({ children: e, onScroll: r, className: t, type: n = "normal", ...a }, s) => {
  const o = L3(0), c = u3.createRef(), l = (u) => {
    o.set(u.currentTarget.scrollTop), r && r(u);
  }, d = O3();
  return /* @__PURE__ */ M3("div", { ...a, ref: s, className: "scroll-view", children: [
    /* @__PURE__ */ n3("div", { "aria-label": "scrolled-view", className: B3("overflow-y-auto h-full w-full", t), ref: c, onScroll: l, children: e }),
    /* @__PURE__ */ n3(
      "div",
      {
        "data-scrolled": o.get >= 10,
        className: "scroll-shadow-view",
        style: {
          ...d(
            o.get >= 10 && {
              boxShadow: Z2([
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
}), ma = u3.memo(
  ({ index: e, length: r, stateInString: t, focused: n, colorMerge: a, totalLength: s }) => {
    const o = r + e, c = rt(
      () => a({ borderColor: "borders" }, n && { borderColor: "primary" }, {
        boxShadow: Z2([{ colorId: "shadow.color", blur: 4, size: 0, x: 0, y: 5 }])
      }),
      [n, a]
    );
    return /* @__PURE__ */ n3(
      "div",
      {
        className: B3(
          "w-[40px] h-[40px] border-solid border-transparent text-lg border-y border-r flex items-center justify-center",
          e === 0 && "rounded-ss-lg rounded-es-lg border-l",
          e + 1 === s && "rounded-se-lg rounded-ee-lg"
        ),
        style: c,
        children: (t == null ? void 0 : t[o]) || "."
      }
    );
  },
  (e, r) => e.stateInString === r.stateInString && e.focused === r.focused && e.index === r.index
), Ta = u3.memo(
  ({ id: e, config: r, state: t }) => {
    var p;
    const n = O3(), a = rt(() => ((r == null ? void 0 : r.match) || ".").split("-"), [r == null ? void 0 : r.match]), s = ((p = t.get) == null ? void 0 : p.toString()) || "", o = L3(!1), c = br(() => qt(e), [e]), l = () => o.set(!0), d = () => o.set(!1), u = br(
      (k) => {
        const v = k.target.value.replace(/[^0-9]/g, "");
        t.set(v || void 0);
      },
      [t]
    ), f = br(async () => {
      const k = (await navigator.clipboard.readText()).replace(/[^0-9]/g, "");
      t.set(k || void 0);
    }, [t]);
    return /* @__PURE__ */ M3("div", { tabIndex: 1, onFocus: c, children: [
      /* @__PURE__ */ n3(
        "input",
        {
          onFocus: l,
          onBlur: d,
          type: "text",
          inputMode: "numeric",
          onChange: u,
          onPaste: f,
          id: e,
          value: s,
          className: "absolute opacity-0 w-0 h-0"
        }
      ),
      /* @__PURE__ */ n3("div", { className: "flex items-center gap-2 rounded-lg w-fit", children: /* @__PURE__ */ n3(
        Ft,
        {
          list: a.map((k, v) => {
            const g = Array.from(k), y = a.slice(0, v).reduce((P, E) => P + E.length, 0);
            return /* @__PURE__ */ n3("div", { className: "flex gap-0", children: g.map((P, E) => /* @__PURE__ */ n3(ma, { index: E, totalLength: g.length, length: y, stateInString: s, colorMerge: n, focused: o.get }, E)) }, v);
          }),
          joinComponent: /* @__PURE__ */ n3(Z3, { children: "-" })
        }
      ) })
    ] });
  },
  (e, r) => e.state.get === r.state.get && e.config === r.config
);
export {
  t5 as A,
  Sa as B,
  Oa as C,
  Z3 as E,
  f2 as F,
  aa as I,
  Ft as J,
  da as L,
  Ta as P,
  Ba as Q,
  _a as S,
  n5 as T,
  M3 as a,
  xa as b,
  wa as c,
  ya as d,
  Ea as e,
  Ca as f,
  Pa as g,
  ba as h,
  va as i,
  n3 as j,
  Ar as k,
  tt as u
};
