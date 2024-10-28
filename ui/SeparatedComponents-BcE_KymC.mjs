import Se, { useMemo as Do, useCallback as bt } from "react";
import { t as Oe, g as Po, Z as ki, c as Bo, ao as Uo, s as Fo, r as $o, m as zo } from "./index-DdFCMvT_.mjs";
import { u as Ce, a as $e, aT as Ai, aU as xi, S as Go, b as kr, aO as ea, n as qo, aV as Ko, aW as Ho, a5 as Ri, c as Wo, aX as Yo, h as Ci, d as na } from "./index-BxYKyuvy.mjs";
import { allIcons as $n } from "./apis.js";
var dr = { exports: {} }, Sn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ta;
function Zo() {
  if (ta) return Sn;
  ta = 1;
  var e = Se, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, c, u) {
    var l, f = {}, g = null, m = null;
    u !== void 0 && (g = "" + u), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (l in c) r.call(c, l) && !o.hasOwnProperty(l) && (f[l] = c[l]);
    if (s && s.defaultProps) for (l in c = s.defaultProps, c) f[l] === void 0 && (f[l] = c[l]);
    return { $$typeof: n, type: s, key: g, ref: m, props: f, _owner: a.current };
  }
  return Sn.Fragment = t, Sn.jsx = i, Sn.jsxs = i, Sn;
}
var On = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ra;
function Xo() {
  return ra || (ra = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Se, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = Symbol.iterator, p = "@@iterator";
    function v(d) {
      if (d === null || typeof d != "object")
        return null;
      var w = h && d[h] || d[p];
      return typeof w == "function" ? w : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(d) {
      {
        for (var w = arguments.length, k = new Array(w > 1 ? w - 1 : 0), Z = 1; Z < w; Z++)
          k[Z - 1] = arguments[Z];
        S("error", d, k);
      }
    }
    function S(d, w, k) {
      {
        var Z = y.ReactDebugCurrentFrame, ce = Z.getStackAddendum();
        ce !== "" && (w += "%s", k = k.concat([ce]));
        var fe = k.map(function(re) {
          return String(re);
        });
        fe.unshift("Warning: " + w), Function.prototype.apply.call(console[d], console, fe);
      }
    }
    var M = !1, x = !1, W = !1, K = !1, D = !1, H;
    H = Symbol.for("react.module.reference");
    function ge(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === r || d === o || D || d === a || d === u || d === l || K || d === m || M || x || W || typeof d == "object" && d !== null && (d.$$typeof === g || d.$$typeof === f || d.$$typeof === i || d.$$typeof === s || d.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === H || d.getModuleId !== void 0));
    }
    function ae(d, w, k) {
      var Z = d.displayName;
      if (Z)
        return Z;
      var ce = w.displayName || w.name || "";
      return ce !== "" ? k + "(" + ce + ")" : k;
    }
    function Ee(d) {
      return d.displayName || "Context";
    }
    function le(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case a:
          return "StrictMode";
        case u:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case s:
            var w = d;
            return Ee(w) + ".Consumer";
          case i:
            var k = d;
            return Ee(k._context) + ".Provider";
          case c:
            return ae(d, d.render, "ForwardRef");
          case f:
            var Z = d.displayName || null;
            return Z !== null ? Z : le(d.type) || "Memo";
          case g: {
            var ce = d, fe = ce._payload, re = ce._init;
            try {
              return le(re(fe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var te = Object.assign, Q = 0, ue, E, O, Y, b, N, U;
    function $() {
    }
    $.__reactDisabledLog = !0;
    function F() {
      {
        if (Q === 0) {
          ue = console.log, E = console.info, O = console.warn, Y = console.error, b = console.group, N = console.groupCollapsed, U = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: $,
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
        Q++;
      }
    }
    function B() {
      {
        if (Q--, Q === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: te({}, d, {
              value: ue
            }),
            info: te({}, d, {
              value: E
            }),
            warn: te({}, d, {
              value: O
            }),
            error: te({}, d, {
              value: Y
            }),
            group: te({}, d, {
              value: b
            }),
            groupCollapsed: te({}, d, {
              value: N
            }),
            groupEnd: te({}, d, {
              value: U
            })
          });
        }
        Q < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var P = y.ReactCurrentDispatcher, R;
    function C(d, w, k) {
      {
        if (R === void 0)
          try {
            throw Error();
          } catch (ce) {
            var Z = ce.stack.trim().match(/\n( *(at )?)/);
            R = Z && Z[1] || "";
          }
        return `
` + R + d;
      }
    }
    var q = !1, z;
    {
      var se = typeof WeakMap == "function" ? WeakMap : Map;
      z = new se();
    }
    function ie(d, w) {
      if (!d || q)
        return "";
      {
        var k = z.get(d);
        if (k !== void 0)
          return k;
      }
      var Z;
      q = !0;
      var ce = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var fe;
      fe = P.current, P.current = null, F();
      try {
        if (w) {
          var re = function() {
            throw Error();
          };
          if (Object.defineProperty(re.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(re, []);
            } catch (Re) {
              Z = Re;
            }
            Reflect.construct(d, [], re);
          } else {
            try {
              re.call();
            } catch (Re) {
              Z = Re;
            }
            d.call(re.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Re) {
            Z = Re;
          }
          d();
        }
      } catch (Re) {
        if (Re && Z && typeof Re.stack == "string") {
          for (var ne = Re.stack.split(`
`), ke = Z.stack.split(`
`), _e = ne.length - 1, Ne = ke.length - 1; _e >= 1 && Ne >= 0 && ne[_e] !== ke[Ne]; )
            Ne--;
          for (; _e >= 1 && Ne >= 0; _e--, Ne--)
            if (ne[_e] !== ke[Ne]) {
              if (_e !== 1 || Ne !== 1)
                do
                  if (_e--, Ne--, Ne < 0 || ne[_e] !== ke[Ne]) {
                    var Me = `
` + ne[_e].replace(" at new ", " at ");
                    return d.displayName && Me.includes("<anonymous>") && (Me = Me.replace("<anonymous>", d.displayName)), typeof d == "function" && z.set(d, Me), Me;
                  }
                while (_e >= 1 && Ne >= 0);
              break;
            }
        }
      } finally {
        q = !1, P.current = fe, B(), Error.prepareStackTrace = ce;
      }
      var mn = d ? d.displayName || d.name : "", an = mn ? C(mn) : "";
      return typeof d == "function" && z.set(d, an), an;
    }
    function ye(d, w, k) {
      return ie(d, !1);
    }
    function ze(d) {
      var w = d.prototype;
      return !!(w && w.isReactComponent);
    }
    function Ge(d, w, k) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return ie(d, ze(d));
      if (typeof d == "string")
        return C(d);
      switch (d) {
        case u:
          return C("Suspense");
        case l:
          return C("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case c:
            return ye(d.render);
          case f:
            return Ge(d.type, w, k);
          case g: {
            var Z = d, ce = Z._payload, fe = Z._init;
            try {
              return Ge(fe(ce), w, k);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, rn = {}, qe = y.ReactDebugCurrentFrame;
    function G(d) {
      if (d) {
        var w = d._owner, k = Ge(d.type, d._source, w ? w.type : null);
        qe.setExtraStackFrame(k);
      } else
        qe.setExtraStackFrame(null);
    }
    function gn(d, w, k, Z, ce) {
      {
        var fe = Function.call.bind(we);
        for (var re in d)
          if (fe(d, re)) {
            var ne = void 0;
            try {
              if (typeof d[re] != "function") {
                var ke = Error((Z || "React class") + ": " + k + " type `" + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ke.name = "Invariant Violation", ke;
              }
              ne = d[re](w, re, Z, k, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_e) {
              ne = _e;
            }
            ne && !(ne instanceof Error) && (G(ce), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Z || "React class", k, re, typeof ne), G(null)), ne instanceof Error && !(ne.message in rn) && (rn[ne.message] = !0, G(ce), _("Failed %s type: %s", k, ne.message), G(null));
          }
      }
    }
    var pe = Array.isArray;
    function oe(d) {
      return pe(d);
    }
    function Ze(d) {
      {
        var w = typeof Symbol == "function" && Symbol.toStringTag, k = w && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return k;
      }
    }
    function De(d) {
      try {
        return Pe(d), !1;
      } catch {
        return !0;
      }
    }
    function Pe(d) {
      return "" + d;
    }
    function Ae(d) {
      if (De(d))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(d)), Pe(d);
    }
    var T = y.ReactCurrentOwner, I = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, X, ee, ve;
    ve = {};
    function xe(d) {
      if (we.call(d, "ref")) {
        var w = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function Nn(d) {
      if (we.call(d, "key")) {
        var w = Object.getOwnPropertyDescriptor(d, "key").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function Tn(d, w) {
      if (typeof d.ref == "string" && T.current && w && T.current.stateNode !== w) {
        var k = le(T.current.type);
        ve[k] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', le(T.current.type), d.ref), ve[k] = !0);
      }
    }
    function lt(d, w) {
      {
        var k = function() {
          X || (X = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        k.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: k,
          configurable: !0
        });
      }
    }
    function ut(d, w) {
      {
        var k = function() {
          ee || (ee = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        k.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: k,
          configurable: !0
        });
      }
    }
    var dt = function(d, w, k, Z, ce, fe, re) {
      var ne = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: d,
        key: w,
        ref: k,
        props: re,
        // Record the component responsible for creating this element.
        _owner: fe
      };
      return ne._store = {}, Object.defineProperty(ne._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ne, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Z
      }), Object.defineProperty(ne, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.freeze && (Object.freeze(ne.props), Object.freeze(ne)), ne;
    };
    function de(d, w, k, Z, ce) {
      {
        var fe, re = {}, ne = null, ke = null;
        k !== void 0 && (Ae(k), ne = "" + k), Nn(w) && (Ae(w.key), ne = "" + w.key), xe(w) && (ke = w.ref, Tn(w, ce));
        for (fe in w)
          we.call(w, fe) && !I.hasOwnProperty(fe) && (re[fe] = w[fe]);
        if (d && d.defaultProps) {
          var _e = d.defaultProps;
          for (fe in _e)
            re[fe] === void 0 && (re[fe] = _e[fe]);
        }
        if (ne || ke) {
          var Ne = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          ne && lt(re, Ne), ke && ut(re, Ne);
        }
        return dt(d, ne, ke, ce, Z, T.current, re);
      }
    }
    var Xe = y.ReactCurrentOwner, Ve = y.ReactDebugCurrentFrame;
    function je(d) {
      if (d) {
        var w = d._owner, k = Ge(d.type, d._source, w ? w.type : null);
        Ve.setExtraStackFrame(k);
      } else
        Ve.setExtraStackFrame(null);
    }
    var ft;
    ft = !1;
    function gt(d) {
      return typeof d == "object" && d !== null && d.$$typeof === n;
    }
    function Zr() {
      {
        if (Xe.current) {
          var d = le(Xe.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function So(d) {
      return "";
    }
    var Xr = {};
    function Oo(d) {
      {
        var w = Zr();
        if (!w) {
          var k = typeof d == "string" ? d : d.displayName || d.name;
          k && (w = `

Check the top-level render call using <` + k + ">.");
        }
        return w;
      }
    }
    function Vr(d, w) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var k = Oo(w);
        if (Xr[k])
          return;
        Xr[k] = !0;
        var Z = "";
        d && d._owner && d._owner !== Xe.current && (Z = " It was passed a child from " + le(d._owner.type) + "."), je(d), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', k, Z), je(null);
      }
    }
    function jr(d, w) {
      {
        if (typeof d != "object")
          return;
        if (oe(d))
          for (var k = 0; k < d.length; k++) {
            var Z = d[k];
            gt(Z) && Vr(Z, w);
          }
        else if (gt(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var ce = v(d);
          if (typeof ce == "function" && ce !== d.entries)
            for (var fe = ce.call(d), re; !(re = fe.next()).done; )
              gt(re.value) && Vr(re.value, w);
        }
      }
    }
    function ko(d) {
      {
        var w = d.type;
        if (w == null || typeof w == "string")
          return;
        var k;
        if (typeof w == "function")
          k = w.propTypes;
        else if (typeof w == "object" && (w.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        w.$$typeof === f))
          k = w.propTypes;
        else
          return;
        if (k) {
          var Z = le(w);
          gn(k, d.props, "prop", Z, d);
        } else if (w.PropTypes !== void 0 && !ft) {
          ft = !0;
          var ce = le(w);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
        }
        typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ao(d) {
      {
        for (var w = Object.keys(d.props), k = 0; k < w.length; k++) {
          var Z = w[k];
          if (Z !== "children" && Z !== "key") {
            je(d), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Z), je(null);
            break;
          }
        }
        d.ref !== null && (je(d), _("Invalid attribute `ref` supplied to `React.Fragment`."), je(null));
      }
    }
    var Qr = {};
    function Jr(d, w, k, Z, ce, fe) {
      {
        var re = ge(d);
        if (!re) {
          var ne = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ke = So();
          ke ? ne += ke : ne += Zr();
          var _e;
          d === null ? _e = "null" : oe(d) ? _e = "array" : d !== void 0 && d.$$typeof === n ? (_e = "<" + (le(d.type) || "Unknown") + " />", ne = " Did you accidentally export a JSX literal instead of a component?") : _e = typeof d, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _e, ne);
        }
        var Ne = de(d, w, k, ce, fe);
        if (Ne == null)
          return Ne;
        if (re) {
          var Me = w.children;
          if (Me !== void 0)
            if (Z)
              if (oe(Me)) {
                for (var mn = 0; mn < Me.length; mn++)
                  jr(Me[mn], d);
                Object.freeze && Object.freeze(Me);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              jr(Me, d);
        }
        if (we.call(w, "key")) {
          var an = le(d), Re = Object.keys(w).filter(function(Lo) {
            return Lo !== "key";
          }), mt = Re.length > 0 ? "{key: someKey, " + Re.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Qr[an + mt]) {
            var Mo = Re.length > 0 ? "{" + Re.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, mt, an, Mo, an), Qr[an + mt] = !0;
          }
        }
        return d === r ? Ao(Ne) : ko(Ne), Ne;
      }
    }
    function xo(d, w, k) {
      return Jr(d, w, k, !0);
    }
    function Ro(d, w, k) {
      return Jr(d, w, k, !1);
    }
    var Co = Ro, Io = xo;
    On.Fragment = r, On.jsx = Co, On.jsxs = Io;
  }()), On;
}
process.env.NODE_ENV === "production" ? dr.exports = Zo() : dr.exports = Xo();
var Ar = dr.exports;
const Vo = Ar.Fragment, V = Ar.jsx, Le = Ar.jsxs;
function jo({ className: e, style: n, ...t }) {
  const r = Ce(), a = $e(!1);
  return /* @__PURE__ */ V(
    "a",
    {
      onMouseEnter: () => a.set(!0),
      onMouseLeave: () => a.set(!1),
      className: Oe(e, "hover:underline"),
      style: {
        ...r(
          a.get && {
            color: "primary"
          }
        )
      },
      ...t
    }
  );
}
const ln = ({ children: e }) => /* @__PURE__ */ V(Vo, { children: e });
function aa(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function A(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? aa(Object(t), !0).forEach(function(r) {
      Te(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : aa(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Jn(e) {
  "@babel/helpers - typeof";
  return Jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Jn(e);
}
function Qo(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function Jo(e, n) {
  for (var t = 0; t < n.length; t++) {
    var r = n[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function es(e, n, t) {
  return n && Jo(e.prototype, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Te(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function xr(e, n) {
  return ts(e) || as(e, n) || Ii(e, n) || os();
}
function Bn(e) {
  return ns(e) || rs(e) || Ii(e) || is();
}
function ns(e) {
  if (Array.isArray(e)) return fr(e);
}
function ts(e) {
  if (Array.isArray(e)) return e;
}
function rs(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function as(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r = [], a = !0, o = !1, i, s;
    try {
      for (t = t.call(e); !(a = (i = t.next()).done) && (r.push(i.value), !(n && r.length === n)); a = !0)
        ;
    } catch (c) {
      o = !0, s = c;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (o) throw s;
      }
    }
    return r;
  }
}
function Ii(e, n) {
  if (e) {
    if (typeof e == "string") return fr(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return fr(e, n);
  }
}
function fr(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
  return r;
}
function is() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function os() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ia = function() {
}, Rr = {}, Mi = {}, Li = null, Di = {
  mark: ia,
  measure: ia
};
try {
  typeof window < "u" && (Rr = window), typeof document < "u" && (Mi = document), typeof MutationObserver < "u" && (Li = MutationObserver), typeof performance < "u" && (Di = performance);
} catch {
}
var ss = Rr.navigator || {}, oa = ss.userAgent, sa = oa === void 0 ? "" : oa, en = Rr, be = Mi, ca = Li, zn = Di;
en.document;
var Ye = !!be.documentElement && !!be.head && typeof be.addEventListener == "function" && typeof be.createElement == "function", Pi = ~sa.indexOf("MSIE") || ~sa.indexOf("Trident/"), Gn, qn, Kn, Hn, Wn, Ke = "___FONT_AWESOME___", gr = 16, Bi = "fa", Ui = "svg-inline--fa", un = "data-fa-i2svg", mr = "data-fa-pseudo-element", cs = "data-fa-pseudo-element-pending", Cr = "data-prefix", Ir = "data-icon", la = "fontawesome-i2svg", ls = "async", us = ["HTML", "HEAD", "STYLE", "SCRIPT"], Fi = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), me = "classic", he = "sharp", Mr = [me, he];
function Un(e) {
  return new Proxy(e, {
    get: function(t, r) {
      return r in t ? t[r] : t[me];
    }
  });
}
var Rn = Un((Gn = {}, Te(Gn, me, {
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
}), Te(Gn, he, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), Gn)), Cn = Un((qn = {}, Te(qn, me, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), Te(qn, he, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), qn)), In = Un((Kn = {}, Te(Kn, me, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), Te(Kn, he, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), Kn)), ds = Un((Hn = {}, Te(Hn, me, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), Te(Hn, he, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), Hn)), fs = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, $i = "fa-layers-text", gs = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, ms = Un((Wn = {}, Te(Wn, me, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), Te(Wn, he, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), Wn)), zi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], bs = zi.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), ps = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], on = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Mn = /* @__PURE__ */ new Set();
Object.keys(Cn[me]).map(Mn.add.bind(Mn));
Object.keys(Cn[he]).map(Mn.add.bind(Mn));
var vs = [].concat(Mr, Bn(Mn), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", on.GROUP, on.SWAP_OPACITY, on.PRIMARY, on.SECONDARY]).concat(zi.map(function(e) {
  return "".concat(e, "x");
})).concat(bs.map(function(e) {
  return "w-".concat(e);
})), An = en.FontAwesomeConfig || {};
function hs(e) {
  var n = be.querySelector("script[" + e + "]");
  if (n)
    return n.getAttribute(e);
}
function _s(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (be && typeof be.querySelector == "function") {
  var Es = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  Es.forEach(function(e) {
    var n = xr(e, 2), t = n[0], r = n[1], a = _s(hs(t));
    a != null && (An[r] = a);
  });
}
var Gi = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Bi,
  replacementClass: Ui,
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
An.familyPrefix && (An.cssPrefix = An.familyPrefix);
var En = A(A({}, Gi), An);
En.autoReplaceSvg || (En.observeMutations = !1);
var L = {};
Object.keys(Gi).forEach(function(e) {
  Object.defineProperty(L, e, {
    enumerable: !0,
    set: function(t) {
      En[e] = t, xn.forEach(function(r) {
        return r(L);
      });
    },
    get: function() {
      return En[e];
    }
  });
});
Object.defineProperty(L, "familyPrefix", {
  enumerable: !0,
  set: function(n) {
    En.cssPrefix = n, xn.forEach(function(t) {
      return t(L);
    });
  },
  get: function() {
    return En.cssPrefix;
  }
});
en.FontAwesomeConfig = L;
var xn = [];
function ys(e) {
  return xn.push(e), function() {
    xn.splice(xn.indexOf(e), 1);
  };
}
var Qe = gr, Fe = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function ws(e) {
  if (!(!e || !Ye)) {
    var n = be.createElement("style");
    n.setAttribute("type", "text/css"), n.innerHTML = e;
    for (var t = be.head.childNodes, r = null, a = t.length - 1; a > -1; a--) {
      var o = t[a], i = (o.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(i) > -1 && (r = o);
    }
    return be.head.insertBefore(n, r), e;
  }
}
var Ns = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Ln() {
  for (var e = 12, n = ""; e-- > 0; )
    n += Ns[Math.random() * 62 | 0];
  return n;
}
function wn(e) {
  for (var n = [], t = (e || []).length >>> 0; t--; )
    n[t] = e[t];
  return n;
}
function Lr(e) {
  return e.classList ? wn(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(n) {
    return n;
  });
}
function qi(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Ts(e) {
  return Object.keys(e || {}).reduce(function(n, t) {
    return n + "".concat(t, '="').concat(qi(e[t]), '" ');
  }, "").trim();
}
function at(e) {
  return Object.keys(e || {}).reduce(function(n, t) {
    return n + "".concat(t, ": ").concat(e[t].trim(), ";");
  }, "");
}
function Dr(e) {
  return e.size !== Fe.size || e.x !== Fe.x || e.y !== Fe.y || e.rotate !== Fe.rotate || e.flipX || e.flipY;
}
function Ss(e) {
  var n = e.transform, t = e.containerWidth, r = e.iconWidth, a = {
    transform: "translate(".concat(t / 2, " 256)")
  }, o = "translate(".concat(n.x * 32, ", ").concat(n.y * 32, ") "), i = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "), s = "rotate(".concat(n.rotate, " 0 0)"), c = {
    transform: "".concat(o, " ").concat(i, " ").concat(s)
  }, u = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: c,
    path: u
  };
}
function Os(e) {
  var n = e.transform, t = e.width, r = t === void 0 ? gr : t, a = e.height, o = a === void 0 ? gr : a, i = e.startCentered, s = i === void 0 ? !1 : i, c = "";
  return s && Pi ? c += "translate(".concat(n.x / Qe - r / 2, "em, ").concat(n.y / Qe - o / 2, "em) ") : s ? c += "translate(calc(-50% + ".concat(n.x / Qe, "em), calc(-50% + ").concat(n.y / Qe, "em)) ") : c += "translate(".concat(n.x / Qe, "em, ").concat(n.y / Qe, "em) "), c += "scale(".concat(n.size / Qe * (n.flipX ? -1 : 1), ", ").concat(n.size / Qe * (n.flipY ? -1 : 1), ") "), c += "rotate(".concat(n.rotate, "deg) "), c;
}
var ks = `:root, :host {
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
function Ki() {
  var e = Bi, n = Ui, t = L.cssPrefix, r = L.replacementClass, a = ks;
  if (t !== e || r !== n) {
    var o = new RegExp("\\.".concat(e, "\\-"), "g"), i = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(n), "g");
    a = a.replace(o, ".".concat(t, "-")).replace(i, "--".concat(t, "-")).replace(s, ".".concat(r));
  }
  return a;
}
var ua = !1;
function pt() {
  L.autoAddCss && !ua && (ws(Ki()), ua = !0);
}
var As = {
  mixout: function() {
    return {
      dom: {
        css: Ki,
        insertCss: pt
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        pt();
      },
      beforeI2svg: function() {
        pt();
      }
    };
  }
}, He = en || {};
He[Ke] || (He[Ke] = {});
He[Ke].styles || (He[Ke].styles = {});
He[Ke].hooks || (He[Ke].hooks = {});
He[Ke].shims || (He[Ke].shims = []);
var Be = He[Ke], Hi = [], xs = function e() {
  be.removeEventListener("DOMContentLoaded", e), et = 1, Hi.map(function(n) {
    return n();
  });
}, et = !1;
Ye && (et = (be.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(be.readyState), et || be.addEventListener("DOMContentLoaded", xs));
function Rs(e) {
  Ye && (et ? setTimeout(e, 0) : Hi.push(e));
}
function Fn(e) {
  var n = e.tag, t = e.attributes, r = t === void 0 ? {} : t, a = e.children, o = a === void 0 ? [] : a;
  return typeof e == "string" ? qi(e) : "<".concat(n, " ").concat(Ts(r), ">").concat(o.map(Fn).join(""), "</").concat(n, ">");
}
function da(e, n, t) {
  if (e && e[n] && e[n][t])
    return {
      prefix: n,
      iconName: t,
      icon: e[n][t]
    };
}
var vt = function(n, t, r, a) {
  var o = Object.keys(n), i = o.length, s = t, c, u, l;
  for (r === void 0 ? (c = 1, l = n[o[0]]) : (c = 0, l = r); c < i; c++)
    u = o[c], l = s(l, n[u], u, n);
  return l;
};
function Cs(e) {
  for (var n = [], t = 0, r = e.length; t < r; ) {
    var a = e.charCodeAt(t++);
    if (a >= 55296 && a <= 56319 && t < r) {
      var o = e.charCodeAt(t++);
      (o & 64512) == 56320 ? n.push(((a & 1023) << 10) + (o & 1023) + 65536) : (n.push(a), t--);
    } else
      n.push(a);
  }
  return n;
}
function br(e) {
  var n = Cs(e);
  return n.length === 1 ? n[0].toString(16) : null;
}
function Is(e, n) {
  var t = e.length, r = e.charCodeAt(n), a;
  return r >= 55296 && r <= 56319 && t > n + 1 && (a = e.charCodeAt(n + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function fa(e) {
  return Object.keys(e).reduce(function(n, t) {
    var r = e[t], a = !!r.icon;
    return a ? n[r.iconName] = r.icon : n[t] = r, n;
  }, {});
}
function pr(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = t.skipHooks, a = r === void 0 ? !1 : r, o = fa(n);
  typeof Be.hooks.addPack == "function" && !a ? Be.hooks.addPack(e, fa(n)) : Be.styles[e] = A(A({}, Be.styles[e] || {}), o), e === "fas" && pr("fa", n);
}
var Yn, Zn, Xn, pn = Be.styles, Ms = Be.shims, Ls = (Yn = {}, Te(Yn, me, Object.values(In[me])), Te(Yn, he, Object.values(In[he])), Yn), Pr = null, Wi = {}, Yi = {}, Zi = {}, Xi = {}, Vi = {}, Ds = (Zn = {}, Te(Zn, me, Object.keys(Rn[me])), Te(Zn, he, Object.keys(Rn[he])), Zn);
function Ps(e) {
  return ~vs.indexOf(e);
}
function Bs(e, n) {
  var t = n.split("-"), r = t[0], a = t.slice(1).join("-");
  return r === e && a !== "" && !Ps(a) ? a : null;
}
var ji = function() {
  var n = function(o) {
    return vt(pn, function(i, s, c) {
      return i[c] = vt(s, o, {}), i;
    }, {});
  };
  Wi = n(function(a, o, i) {
    if (o[3] && (a[o[3]] = i), o[2]) {
      var s = o[2].filter(function(c) {
        return typeof c == "number";
      });
      s.forEach(function(c) {
        a[c.toString(16)] = i;
      });
    }
    return a;
  }), Yi = n(function(a, o, i) {
    if (a[i] = i, o[2]) {
      var s = o[2].filter(function(c) {
        return typeof c == "string";
      });
      s.forEach(function(c) {
        a[c] = i;
      });
    }
    return a;
  }), Vi = n(function(a, o, i) {
    var s = o[2];
    return a[i] = i, s.forEach(function(c) {
      a[c] = i;
    }), a;
  });
  var t = "far" in pn || L.autoFetchSvg, r = vt(Ms, function(a, o) {
    var i = o[0], s = o[1], c = o[2];
    return s === "far" && !t && (s = "fas"), typeof i == "string" && (a.names[i] = {
      prefix: s,
      iconName: c
    }), typeof i == "number" && (a.unicodes[i.toString(16)] = {
      prefix: s,
      iconName: c
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  Zi = r.names, Xi = r.unicodes, Pr = it(L.styleDefault, {
    family: L.familyDefault
  });
};
ys(function(e) {
  Pr = it(e.styleDefault, {
    family: L.familyDefault
  });
});
ji();
function Br(e, n) {
  return (Wi[e] || {})[n];
}
function Us(e, n) {
  return (Yi[e] || {})[n];
}
function sn(e, n) {
  return (Vi[e] || {})[n];
}
function Qi(e) {
  return Zi[e] || {
    prefix: null,
    iconName: null
  };
}
function Fs(e) {
  var n = Xi[e], t = Br("fas", e);
  return n || (t ? {
    prefix: "fas",
    iconName: t
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function nn() {
  return Pr;
}
var Ur = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function it(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = n.family, r = t === void 0 ? me : t, a = Rn[r][e], o = Cn[r][e] || Cn[r][a], i = e in Be.styles ? e : null;
  return o || i || null;
}
var ga = (Xn = {}, Te(Xn, me, Object.keys(In[me])), Te(Xn, he, Object.keys(In[he])), Xn);
function ot(e) {
  var n, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.skipLookups, a = r === void 0 ? !1 : r, o = (n = {}, Te(n, me, "".concat(L.cssPrefix, "-").concat(me)), Te(n, he, "".concat(L.cssPrefix, "-").concat(he)), n), i = null, s = me;
  (e.includes(o[me]) || e.some(function(u) {
    return ga[me].includes(u);
  })) && (s = me), (e.includes(o[he]) || e.some(function(u) {
    return ga[he].includes(u);
  })) && (s = he);
  var c = e.reduce(function(u, l) {
    var f = Bs(L.cssPrefix, l);
    if (pn[l] ? (l = Ls[s].includes(l) ? ds[s][l] : l, i = l, u.prefix = l) : Ds[s].indexOf(l) > -1 ? (i = l, u.prefix = it(l, {
      family: s
    })) : f ? u.iconName = f : l !== L.replacementClass && l !== o[me] && l !== o[he] && u.rest.push(l), !a && u.prefix && u.iconName) {
      var g = i === "fa" ? Qi(u.iconName) : {}, m = sn(u.prefix, u.iconName);
      g.prefix && (i = null), u.iconName = g.iconName || m || u.iconName, u.prefix = g.prefix || u.prefix, u.prefix === "far" && !pn.far && pn.fas && !L.autoFetchSvg && (u.prefix = "fas");
    }
    return u;
  }, Ur());
  return (e.includes("fa-brands") || e.includes("fab")) && (c.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (c.prefix = "fad"), !c.prefix && s === he && (pn.fass || L.autoFetchSvg) && (c.prefix = "fass", c.iconName = sn(c.prefix, c.iconName) || c.iconName), (c.prefix === "fa" || i === "fa") && (c.prefix = nn() || "fas"), c;
}
var $s = /* @__PURE__ */ function() {
  function e() {
    Qo(this, e), this.definitions = {};
  }
  return es(e, [{
    key: "add",
    value: function() {
      for (var t = this, r = arguments.length, a = new Array(r), o = 0; o < r; o++)
        a[o] = arguments[o];
      var i = a.reduce(this._pullDefinitions, {});
      Object.keys(i).forEach(function(s) {
        t.definitions[s] = A(A({}, t.definitions[s] || {}), i[s]), pr(s, i[s]);
        var c = In[me][s];
        c && pr(c, i[s]), ji();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(t, r) {
      var a = r.prefix && r.iconName && r.icon ? {
        0: r
      } : r;
      return Object.keys(a).map(function(o) {
        var i = a[o], s = i.prefix, c = i.iconName, u = i.icon, l = u[2];
        t[s] || (t[s] = {}), l.length > 0 && l.forEach(function(f) {
          typeof f == "string" && (t[s][f] = u);
        }), t[s][c] = u;
      }), t;
    }
  }]), e;
}(), ma = [], vn = {}, _n = {}, zs = Object.keys(_n);
function Gs(e, n) {
  var t = n.mixoutsTo;
  return ma = e, vn = {}, Object.keys(_n).forEach(function(r) {
    zs.indexOf(r) === -1 && delete _n[r];
  }), ma.forEach(function(r) {
    var a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach(function(i) {
      typeof a[i] == "function" && (t[i] = a[i]), Jn(a[i]) === "object" && Object.keys(a[i]).forEach(function(s) {
        t[i] || (t[i] = {}), t[i][s] = a[i][s];
      });
    }), r.hooks) {
      var o = r.hooks();
      Object.keys(o).forEach(function(i) {
        vn[i] || (vn[i] = []), vn[i].push(o[i]);
      });
    }
    r.provides && r.provides(_n);
  }), t;
}
function vr(e, n) {
  for (var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), a = 2; a < t; a++)
    r[a - 2] = arguments[a];
  var o = vn[e] || [];
  return o.forEach(function(i) {
    n = i.apply(null, [n].concat(r));
  }), n;
}
function dn(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var a = vn[e] || [];
  a.forEach(function(o) {
    o.apply(null, t);
  });
}
function We() {
  var e = arguments[0], n = Array.prototype.slice.call(arguments, 1);
  return _n[e] ? _n[e].apply(null, n) : void 0;
}
function hr(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var n = e.iconName, t = e.prefix || nn();
  if (n)
    return n = sn(t, n) || n, da(Ji.definitions, t, n) || da(Be.styles, t, n);
}
var Ji = new $s(), qs = function() {
  L.autoReplaceSvg = !1, L.observeMutations = !1, dn("noAuto");
}, Ks = {
  i2svg: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Ye ? (dn("beforeI2svg", n), We("pseudoElements2svg", n), We("i2svg", n)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = n.autoReplaceSvgRoot;
    L.autoReplaceSvg === !1 && (L.autoReplaceSvg = !0), L.observeMutations = !0, Rs(function() {
      Ws({
        autoReplaceSvgRoot: t
      }), dn("watch", n);
    });
  }
}, Hs = {
  icon: function(n) {
    if (n === null)
      return null;
    if (Jn(n) === "object" && n.prefix && n.iconName)
      return {
        prefix: n.prefix,
        iconName: sn(n.prefix, n.iconName) || n.iconName
      };
    if (Array.isArray(n) && n.length === 2) {
      var t = n[1].indexOf("fa-") === 0 ? n[1].slice(3) : n[1], r = it(n[0]);
      return {
        prefix: r,
        iconName: sn(r, t) || t
      };
    }
    if (typeof n == "string" && (n.indexOf("".concat(L.cssPrefix, "-")) > -1 || n.match(fs))) {
      var a = ot(n.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: a.prefix || nn(),
        iconName: sn(a.prefix, a.iconName) || a.iconName
      };
    }
    if (typeof n == "string") {
      var o = nn();
      return {
        prefix: o,
        iconName: sn(o, n) || n
      };
    }
  }
}, Ie = {
  noAuto: qs,
  config: L,
  dom: Ks,
  parse: Hs,
  library: Ji,
  findIconDefinition: hr,
  toHtml: Fn
}, Ws = function() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = n.autoReplaceSvgRoot, r = t === void 0 ? be : t;
  (Object.keys(Be.styles).length > 0 || L.autoFetchSvg) && Ye && L.autoReplaceSvg && Ie.dom.i2svg({
    node: r
  });
};
function st(e, n) {
  return Object.defineProperty(e, "abstract", {
    get: n
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(r) {
        return Fn(r);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (Ye) {
        var r = be.createElement("div");
        return r.innerHTML = e.html, r.children;
      }
    }
  }), e;
}
function Ys(e) {
  var n = e.children, t = e.main, r = e.mask, a = e.attributes, o = e.styles, i = e.transform;
  if (Dr(i) && t.found && !r.found) {
    var s = t.width, c = t.height, u = {
      x: s / c / 2,
      y: 0.5
    };
    a.style = at(A(A({}, o), {}, {
      "transform-origin": "".concat(u.x + i.x / 16, "em ").concat(u.y + i.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: n
  }];
}
function Zs(e) {
  var n = e.prefix, t = e.iconName, r = e.children, a = e.attributes, o = e.symbol, i = o === !0 ? "".concat(n, "-").concat(L.cssPrefix, "-").concat(t) : o;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: A(A({}, a), {}, {
        id: i
      }),
      children: r
    }]
  }];
}
function Fr(e) {
  var n = e.icons, t = n.main, r = n.mask, a = e.prefix, o = e.iconName, i = e.transform, s = e.symbol, c = e.title, u = e.maskId, l = e.titleId, f = e.extra, g = e.watchable, m = g === void 0 ? !1 : g, h = r.found ? r : t, p = h.width, v = h.height, y = a === "fak", _ = [L.replacementClass, o ? "".concat(L.cssPrefix, "-").concat(o) : ""].filter(function(H) {
    return f.classes.indexOf(H) === -1;
  }).filter(function(H) {
    return H !== "" || !!H;
  }).concat(f.classes).join(" "), S = {
    children: [],
    attributes: A(A({}, f.attributes), {}, {
      "data-prefix": a,
      "data-icon": o,
      class: _,
      role: f.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(p, " ").concat(v)
    })
  }, M = y && !~f.classes.indexOf("fa-fw") ? {
    width: "".concat(p / v * 16 * 0.0625, "em")
  } : {};
  m && (S.attributes[un] = ""), c && (S.children.push({
    tag: "title",
    attributes: {
      id: S.attributes["aria-labelledby"] || "title-".concat(l || Ln())
    },
    children: [c]
  }), delete S.attributes.title);
  var x = A(A({}, S), {}, {
    prefix: a,
    iconName: o,
    main: t,
    mask: r,
    maskId: u,
    transform: i,
    symbol: s,
    styles: A(A({}, M), f.styles)
  }), W = r.found && t.found ? We("generateAbstractMask", x) || {
    children: [],
    attributes: {}
  } : We("generateAbstractIcon", x) || {
    children: [],
    attributes: {}
  }, K = W.children, D = W.attributes;
  return x.children = K, x.attributes = D, s ? Zs(x) : Ys(x);
}
function ba(e) {
  var n = e.content, t = e.width, r = e.height, a = e.transform, o = e.title, i = e.extra, s = e.watchable, c = s === void 0 ? !1 : s, u = A(A(A({}, i.attributes), o ? {
    title: o
  } : {}), {}, {
    class: i.classes.join(" ")
  });
  c && (u[un] = "");
  var l = A({}, i.styles);
  Dr(a) && (l.transform = Os({
    transform: a,
    startCentered: !0,
    width: t,
    height: r
  }), l["-webkit-transform"] = l.transform);
  var f = at(l);
  f.length > 0 && (u.style = f);
  var g = [];
  return g.push({
    tag: "span",
    attributes: u,
    children: [n]
  }), o && g.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [o]
  }), g;
}
function Xs(e) {
  var n = e.content, t = e.title, r = e.extra, a = A(A(A({}, r.attributes), t ? {
    title: t
  } : {}), {}, {
    class: r.classes.join(" ")
  }), o = at(r.styles);
  o.length > 0 && (a.style = o);
  var i = [];
  return i.push({
    tag: "span",
    attributes: a,
    children: [n]
  }), t && i.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [t]
  }), i;
}
var ht = Be.styles;
function _r(e) {
  var n = e[0], t = e[1], r = e.slice(4), a = xr(r, 1), o = a[0], i = null;
  return Array.isArray(o) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(L.cssPrefix, "-").concat(on.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(L.cssPrefix, "-").concat(on.SECONDARY),
        fill: "currentColor",
        d: o[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(L.cssPrefix, "-").concat(on.PRIMARY),
        fill: "currentColor",
        d: o[1]
      }
    }]
  } : i = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: o
    }
  }, {
    found: !0,
    width: n,
    height: t,
    icon: i
  };
}
var Vs = {
  found: !1,
  width: 512,
  height: 512
};
function js(e, n) {
  !Fi && !L.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(n, '" is missing.'));
}
function Er(e, n) {
  var t = n;
  return n === "fa" && L.styleDefault !== null && (n = nn()), new Promise(function(r, a) {
    if (We("missingIconAbstract"), t === "fa") {
      var o = Qi(e) || {};
      e = o.iconName || e, n = o.prefix || n;
    }
    if (e && n && ht[n] && ht[n][e]) {
      var i = ht[n][e];
      return r(_r(i));
    }
    js(e, n), r(A(A({}, Vs), {}, {
      icon: L.showMissingIcons && e ? We("missingIconAbstract") || {} : {}
    }));
  });
}
var pa = function() {
}, yr = L.measurePerformance && zn && zn.mark && zn.measure ? zn : {
  mark: pa,
  measure: pa
}, kn = 'FA "6.5.2"', Qs = function(n) {
  return yr.mark("".concat(kn, " ").concat(n, " begins")), function() {
    return eo(n);
  };
}, eo = function(n) {
  yr.mark("".concat(kn, " ").concat(n, " ends")), yr.measure("".concat(kn, " ").concat(n), "".concat(kn, " ").concat(n, " begins"), "".concat(kn, " ").concat(n, " ends"));
}, $r = {
  begin: Qs,
  end: eo
}, jn = function() {
};
function va(e) {
  var n = e.getAttribute ? e.getAttribute(un) : null;
  return typeof n == "string";
}
function Js(e) {
  var n = e.getAttribute ? e.getAttribute(Cr) : null, t = e.getAttribute ? e.getAttribute(Ir) : null;
  return n && t;
}
function ec(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(L.replacementClass);
}
function nc() {
  if (L.autoReplaceSvg === !0)
    return Qn.replace;
  var e = Qn[L.autoReplaceSvg];
  return e || Qn.replace;
}
function tc(e) {
  return be.createElementNS("http://www.w3.org/2000/svg", e);
}
function rc(e) {
  return be.createElement(e);
}
function no(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = n.ceFn, r = t === void 0 ? e.tag === "svg" ? tc : rc : t;
  if (typeof e == "string")
    return be.createTextNode(e);
  var a = r(e.tag);
  Object.keys(e.attributes || []).forEach(function(i) {
    a.setAttribute(i, e.attributes[i]);
  });
  var o = e.children || [];
  return o.forEach(function(i) {
    a.appendChild(no(i, {
      ceFn: r
    }));
  }), a;
}
function ac(e) {
  var n = " ".concat(e.outerHTML, " ");
  return n = "".concat(n, "Font Awesome fontawesome.com "), n;
}
var Qn = {
  replace: function(n) {
    var t = n[0];
    if (t.parentNode)
      if (n[1].forEach(function(a) {
        t.parentNode.insertBefore(no(a), t);
      }), t.getAttribute(un) === null && L.keepOriginalSource) {
        var r = be.createComment(ac(t));
        t.parentNode.replaceChild(r, t);
      } else
        t.remove();
  },
  nest: function(n) {
    var t = n[0], r = n[1];
    if (~Lr(t).indexOf(L.replacementClass))
      return Qn.replace(n);
    var a = new RegExp("".concat(L.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      var o = r[0].attributes.class.split(" ").reduce(function(s, c) {
        return c === L.replacementClass || c.match(a) ? s.toSvg.push(c) : s.toNode.push(c), s;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", o.toNode.join(" "));
    }
    var i = r.map(function(s) {
      return Fn(s);
    }).join(`
`);
    t.setAttribute(un, ""), t.innerHTML = i;
  }
};
function ha(e) {
  e();
}
function to(e, n) {
  var t = typeof n == "function" ? n : jn;
  if (e.length === 0)
    t();
  else {
    var r = ha;
    L.mutateApproach === ls && (r = en.requestAnimationFrame || ha), r(function() {
      var a = nc(), o = $r.begin("mutate");
      e.map(a), o(), t();
    });
  }
}
var zr = !1;
function ro() {
  zr = !0;
}
function wr() {
  zr = !1;
}
var nt = null;
function _a(e) {
  if (ca && L.observeMutations) {
    var n = e.treeCallback, t = n === void 0 ? jn : n, r = e.nodeCallback, a = r === void 0 ? jn : r, o = e.pseudoElementsCallback, i = o === void 0 ? jn : o, s = e.observeMutationsRoot, c = s === void 0 ? be : s;
    nt = new ca(function(u) {
      if (!zr) {
        var l = nn();
        wn(u).forEach(function(f) {
          if (f.type === "childList" && f.addedNodes.length > 0 && !va(f.addedNodes[0]) && (L.searchPseudoElements && i(f.target), t(f.target)), f.type === "attributes" && f.target.parentNode && L.searchPseudoElements && i(f.target.parentNode), f.type === "attributes" && va(f.target) && ~ps.indexOf(f.attributeName))
            if (f.attributeName === "class" && Js(f.target)) {
              var g = ot(Lr(f.target)), m = g.prefix, h = g.iconName;
              f.target.setAttribute(Cr, m || l), h && f.target.setAttribute(Ir, h);
            } else ec(f.target) && a(f.target);
        });
      }
    }), Ye && nt.observe(c, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function ic() {
  nt && nt.disconnect();
}
function oc(e) {
  var n = e.getAttribute("style"), t = [];
  return n && (t = n.split(";").reduce(function(r, a) {
    var o = a.split(":"), i = o[0], s = o.slice(1);
    return i && s.length > 0 && (r[i] = s.join(":").trim()), r;
  }, {})), t;
}
function sc(e) {
  var n = e.getAttribute("data-prefix"), t = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "", a = ot(Lr(e));
  return a.prefix || (a.prefix = nn()), n && t && (a.prefix = n, a.iconName = t), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = Us(a.prefix, e.innerText) || Br(a.prefix, br(e.innerText))), !a.iconName && L.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function cc(e) {
  var n = wn(e.attributes).reduce(function(a, o) {
    return a.name !== "class" && a.name !== "style" && (a[o.name] = o.value), a;
  }, {}), t = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return L.autoA11y && (t ? n["aria-labelledby"] = "".concat(L.replacementClass, "-title-").concat(r || Ln()) : (n["aria-hidden"] = "true", n.focusable = "false")), n;
}
function lc() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Fe,
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
function Ea(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, t = sc(e), r = t.iconName, a = t.prefix, o = t.rest, i = cc(e), s = vr("parseNodeAttributes", {}, e), c = n.styleParser ? oc(e) : [];
  return A({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: Fe,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: o,
      styles: c,
      attributes: i
    }
  }, s);
}
var uc = Be.styles;
function ao(e) {
  var n = L.autoReplaceSvg === "nest" ? Ea(e, {
    styleParser: !1
  }) : Ea(e);
  return ~n.extra.classes.indexOf($i) ? We("generateLayersText", e, n) : We("generateSvgReplacementMutation", e, n);
}
var tn = /* @__PURE__ */ new Set();
Mr.map(function(e) {
  tn.add("fa-".concat(e));
});
Object.keys(Rn[me]).map(tn.add.bind(tn));
Object.keys(Rn[he]).map(tn.add.bind(tn));
tn = Bn(tn);
function ya(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Ye) return Promise.resolve();
  var t = be.documentElement.classList, r = function(f) {
    return t.add("".concat(la, "-").concat(f));
  }, a = function(f) {
    return t.remove("".concat(la, "-").concat(f));
  }, o = L.autoFetchSvg ? tn : Mr.map(function(l) {
    return "fa-".concat(l);
  }).concat(Object.keys(uc));
  o.includes("fa") || o.push("fa");
  var i = [".".concat($i, ":not([").concat(un, "])")].concat(o.map(function(l) {
    return ".".concat(l, ":not([").concat(un, "])");
  })).join(", ");
  if (i.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = wn(e.querySelectorAll(i));
  } catch {
  }
  if (s.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  var c = $r.begin("onTree"), u = s.reduce(function(l, f) {
    try {
      var g = ao(f);
      g && l.push(g);
    } catch (m) {
      Fi || m.name === "MissingIcon" && console.error(m);
    }
    return l;
  }, []);
  return new Promise(function(l, f) {
    Promise.all(u).then(function(g) {
      to(g, function() {
        r("active"), r("complete"), a("pending"), typeof n == "function" && n(), c(), l();
      });
    }).catch(function(g) {
      c(), f(g);
    });
  });
}
function dc(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  ao(e).then(function(t) {
    t && to([t], n);
  });
}
function fc(e) {
  return function(n) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (n || {}).icon ? n : hr(n || {}), a = t.mask;
    return a && (a = (a || {}).icon ? a : hr(a || {})), e(r, A(A({}, t), {}, {
      mask: a
    }));
  };
}
var gc = function(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.transform, a = r === void 0 ? Fe : r, o = t.symbol, i = o === void 0 ? !1 : o, s = t.mask, c = s === void 0 ? null : s, u = t.maskId, l = u === void 0 ? null : u, f = t.title, g = f === void 0 ? null : f, m = t.titleId, h = m === void 0 ? null : m, p = t.classes, v = p === void 0 ? [] : p, y = t.attributes, _ = y === void 0 ? {} : y, S = t.styles, M = S === void 0 ? {} : S;
  if (n) {
    var x = n.prefix, W = n.iconName, K = n.icon;
    return st(A({
      type: "icon"
    }, n), function() {
      return dn("beforeDOMElementCreation", {
        iconDefinition: n,
        params: t
      }), L.autoA11y && (g ? _["aria-labelledby"] = "".concat(L.replacementClass, "-title-").concat(h || Ln()) : (_["aria-hidden"] = "true", _.focusable = "false")), Fr({
        icons: {
          main: _r(K),
          mask: c ? _r(c.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: x,
        iconName: W,
        transform: A(A({}, Fe), a),
        symbol: i,
        title: g,
        maskId: l,
        titleId: h,
        extra: {
          attributes: _,
          styles: M,
          classes: v
        }
      });
    });
  }
}, mc = {
  mixout: function() {
    return {
      icon: fc(gc)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(t) {
        return t.treeCallback = ya, t.nodeCallback = dc, t;
      }
    };
  },
  provides: function(n) {
    n.i2svg = function(t) {
      var r = t.node, a = r === void 0 ? be : r, o = t.callback, i = o === void 0 ? function() {
      } : o;
      return ya(a, i);
    }, n.generateSvgReplacementMutation = function(t, r) {
      var a = r.iconName, o = r.title, i = r.titleId, s = r.prefix, c = r.transform, u = r.symbol, l = r.mask, f = r.maskId, g = r.extra;
      return new Promise(function(m, h) {
        Promise.all([Er(a, s), l.iconName ? Er(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(p) {
          var v = xr(p, 2), y = v[0], _ = v[1];
          m([t, Fr({
            icons: {
              main: y,
              mask: _
            },
            prefix: s,
            iconName: a,
            transform: c,
            symbol: u,
            maskId: f,
            title: o,
            titleId: i,
            extra: g,
            watchable: !0
          })]);
        }).catch(h);
      });
    }, n.generateAbstractIcon = function(t) {
      var r = t.children, a = t.attributes, o = t.main, i = t.transform, s = t.styles, c = at(s);
      c.length > 0 && (a.style = c);
      var u;
      return Dr(i) && (u = We("generateAbstractTransformGrouping", {
        main: o,
        transform: i,
        containerWidth: o.width,
        iconWidth: o.width
      })), r.push(u || o.icon), {
        children: r,
        attributes: a
      };
    };
  }
}, bc = {
  mixout: function() {
    return {
      layer: function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.classes, o = a === void 0 ? [] : a;
        return st({
          type: "layer"
        }, function() {
          dn("beforeDOMElementCreation", {
            assembler: t,
            params: r
          });
          var i = [];
          return t(function(s) {
            Array.isArray(s) ? s.map(function(c) {
              i = i.concat(c.abstract);
            }) : i = i.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(L.cssPrefix, "-layers")].concat(Bn(o)).join(" ")
            },
            children: i
          }];
        });
      }
    };
  }
}, pc = {
  mixout: function() {
    return {
      counter: function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.title, o = a === void 0 ? null : a, i = r.classes, s = i === void 0 ? [] : i, c = r.attributes, u = c === void 0 ? {} : c, l = r.styles, f = l === void 0 ? {} : l;
        return st({
          type: "counter",
          content: t
        }, function() {
          return dn("beforeDOMElementCreation", {
            content: t,
            params: r
          }), Xs({
            content: t.toString(),
            title: o,
            extra: {
              attributes: u,
              styles: f,
              classes: ["".concat(L.cssPrefix, "-layers-counter")].concat(Bn(s))
            }
          });
        });
      }
    };
  }
}, vc = {
  mixout: function() {
    return {
      text: function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.transform, o = a === void 0 ? Fe : a, i = r.title, s = i === void 0 ? null : i, c = r.classes, u = c === void 0 ? [] : c, l = r.attributes, f = l === void 0 ? {} : l, g = r.styles, m = g === void 0 ? {} : g;
        return st({
          type: "text",
          content: t
        }, function() {
          return dn("beforeDOMElementCreation", {
            content: t,
            params: r
          }), ba({
            content: t,
            transform: A(A({}, Fe), o),
            title: s,
            extra: {
              attributes: f,
              styles: m,
              classes: ["".concat(L.cssPrefix, "-layers-text")].concat(Bn(u))
            }
          });
        });
      }
    };
  },
  provides: function(n) {
    n.generateLayersText = function(t, r) {
      var a = r.title, o = r.transform, i = r.extra, s = null, c = null;
      if (Pi) {
        var u = parseInt(getComputedStyle(t).fontSize, 10), l = t.getBoundingClientRect();
        s = l.width / u, c = l.height / u;
      }
      return L.autoA11y && !a && (i.attributes["aria-hidden"] = "true"), Promise.resolve([t, ba({
        content: t.innerHTML,
        width: s,
        height: c,
        transform: o,
        title: a,
        extra: i,
        watchable: !0
      })]);
    };
  }
}, hc = new RegExp('"', "ug"), wa = [1105920, 1112319];
function _c(e) {
  var n = e.replace(hc, ""), t = Is(n, 0), r = t >= wa[0] && t <= wa[1], a = n.length === 2 ? n[0] === n[1] : !1;
  return {
    value: br(a ? n[0] : n),
    isSecondary: r || a
  };
}
function Na(e, n) {
  var t = "".concat(cs).concat(n.replace(":", "-"));
  return new Promise(function(r, a) {
    if (e.getAttribute(t) !== null)
      return r();
    var o = wn(e.children), i = o.filter(function(K) {
      return K.getAttribute(mr) === n;
    })[0], s = en.getComputedStyle(e, n), c = s.getPropertyValue("font-family").match(gs), u = s.getPropertyValue("font-weight"), l = s.getPropertyValue("content");
    if (i && !c)
      return e.removeChild(i), r();
    if (c && l !== "none" && l !== "") {
      var f = s.getPropertyValue("content"), g = ~["Sharp"].indexOf(c[2]) ? he : me, m = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(c[2]) ? Cn[g][c[2].toLowerCase()] : ms[g][u], h = _c(f), p = h.value, v = h.isSecondary, y = c[0].startsWith("FontAwesome"), _ = Br(m, p), S = _;
      if (y) {
        var M = Fs(p);
        M.iconName && M.prefix && (_ = M.iconName, m = M.prefix);
      }
      if (_ && !v && (!i || i.getAttribute(Cr) !== m || i.getAttribute(Ir) !== S)) {
        e.setAttribute(t, S), i && e.removeChild(i);
        var x = lc(), W = x.extra;
        W.attributes[mr] = n, Er(_, m).then(function(K) {
          var D = Fr(A(A({}, x), {}, {
            icons: {
              main: K,
              mask: Ur()
            },
            prefix: m,
            iconName: S,
            extra: W,
            watchable: !0
          })), H = be.createElementNS("http://www.w3.org/2000/svg", "svg");
          n === "::before" ? e.insertBefore(H, e.firstChild) : e.appendChild(H), H.outerHTML = D.map(function(ge) {
            return Fn(ge);
          }).join(`
`), e.removeAttribute(t), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function Ec(e) {
  return Promise.all([Na(e, "::before"), Na(e, "::after")]);
}
function yc(e) {
  return e.parentNode !== document.head && !~us.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(mr) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Ta(e) {
  if (Ye)
    return new Promise(function(n, t) {
      var r = wn(e.querySelectorAll("*")).filter(yc).map(Ec), a = $r.begin("searchPseudoElements");
      ro(), Promise.all(r).then(function() {
        a(), wr(), n();
      }).catch(function() {
        a(), wr(), t();
      });
    });
}
var wc = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(t) {
        return t.pseudoElementsCallback = Ta, t;
      }
    };
  },
  provides: function(n) {
    n.pseudoElements2svg = function(t) {
      var r = t.node, a = r === void 0 ? be : r;
      L.searchPseudoElements && Ta(a);
    };
  }
}, Sa = !1, Nc = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          ro(), Sa = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        _a(vr("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        ic();
      },
      watch: function(t) {
        var r = t.observeMutationsRoot;
        Sa ? wr() : _a(vr("mutationObserverCallbacks", {
          observeMutationsRoot: r
        }));
      }
    };
  }
}, Oa = function(n) {
  var t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return n.toLowerCase().split(" ").reduce(function(r, a) {
    var o = a.toLowerCase().split("-"), i = o[0], s = o.slice(1).join("-");
    if (i && s === "h")
      return r.flipX = !0, r;
    if (i && s === "v")
      return r.flipY = !0, r;
    if (s = parseFloat(s), isNaN(s))
      return r;
    switch (i) {
      case "grow":
        r.size = r.size + s;
        break;
      case "shrink":
        r.size = r.size - s;
        break;
      case "left":
        r.x = r.x - s;
        break;
      case "right":
        r.x = r.x + s;
        break;
      case "up":
        r.y = r.y - s;
        break;
      case "down":
        r.y = r.y + s;
        break;
      case "rotate":
        r.rotate = r.rotate + s;
        break;
    }
    return r;
  }, t);
}, Tc = {
  mixout: function() {
    return {
      parse: {
        transform: function(t) {
          return Oa(t);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(t, r) {
        var a = r.getAttribute("data-fa-transform");
        return a && (t.transform = Oa(a)), t;
      }
    };
  },
  provides: function(n) {
    n.generateAbstractTransformGrouping = function(t) {
      var r = t.main, a = t.transform, o = t.containerWidth, i = t.iconWidth, s = {
        transform: "translate(".concat(o / 2, " 256)")
      }, c = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), u = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), l = "rotate(".concat(a.rotate, " 0 0)"), f = {
        transform: "".concat(c, " ").concat(u, " ").concat(l)
      }, g = {
        transform: "translate(".concat(i / 2 * -1, " -256)")
      }, m = {
        outer: s,
        inner: f,
        path: g
      };
      return {
        tag: "g",
        attributes: A({}, m.outer),
        children: [{
          tag: "g",
          attributes: A({}, m.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: A(A({}, r.icon.attributes), m.path)
          }]
        }]
      };
    };
  }
}, _t = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function ka(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || n) && (e.attributes.fill = "black"), e;
}
function Sc(e) {
  return e.tag === "g" ? e.children : [e];
}
var Oc = {
  hooks: function() {
    return {
      parseNodeAttributes: function(t, r) {
        var a = r.getAttribute("data-fa-mask"), o = a ? ot(a.split(" ").map(function(i) {
          return i.trim();
        })) : Ur();
        return o.prefix || (o.prefix = nn()), t.mask = o, t.maskId = r.getAttribute("data-fa-mask-id"), t;
      }
    };
  },
  provides: function(n) {
    n.generateAbstractMask = function(t) {
      var r = t.children, a = t.attributes, o = t.main, i = t.mask, s = t.maskId, c = t.transform, u = o.width, l = o.icon, f = i.width, g = i.icon, m = Ss({
        transform: c,
        containerWidth: f,
        iconWidth: u
      }), h = {
        tag: "rect",
        attributes: A(A({}, _t), {}, {
          fill: "white"
        })
      }, p = l.children ? {
        children: l.children.map(ka)
      } : {}, v = {
        tag: "g",
        attributes: A({}, m.inner),
        children: [ka(A({
          tag: l.tag,
          attributes: A(A({}, l.attributes), m.path)
        }, p))]
      }, y = {
        tag: "g",
        attributes: A({}, m.outer),
        children: [v]
      }, _ = "mask-".concat(s || Ln()), S = "clip-".concat(s || Ln()), M = {
        tag: "mask",
        attributes: A(A({}, _t), {}, {
          id: _,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [h, y]
      }, x = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: S
          },
          children: Sc(g)
        }, M]
      };
      return r.push(x, {
        tag: "rect",
        attributes: A({
          fill: "currentColor",
          "clip-path": "url(#".concat(S, ")"),
          mask: "url(#".concat(_, ")")
        }, _t)
      }), {
        children: r,
        attributes: a
      };
    };
  }
}, kc = {
  provides: function(n) {
    var t = !1;
    en.matchMedia && (t = en.matchMedia("(prefers-reduced-motion: reduce)").matches), n.missingIconAbstract = function() {
      var r = [], a = {
        fill: "currentColor"
      }, o = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: A(A({}, a), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var i = A(A({}, o), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: A(A({}, a), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || s.children.push({
        tag: "animate",
        attributes: A(A({}, o), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: A(A({}, i), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(s), r.push({
        tag: "path",
        attributes: A(A({}, a), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: A(A({}, i), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || r.push({
        tag: "path",
        attributes: A(A({}, a), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: A(A({}, i), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: r
      };
    };
  }
}, Ac = {
  hooks: function() {
    return {
      parseNodeAttributes: function(t, r) {
        var a = r.getAttribute("data-fa-symbol"), o = a === null ? !1 : a === "" ? !0 : a;
        return t.symbol = o, t;
      }
    };
  }
}, xc = [As, mc, bc, pc, vc, wc, Nc, Tc, Oc, kc, Ac];
Gs(xc, {
  mixoutsTo: Ie
});
Ie.noAuto;
Ie.config;
Ie.library;
Ie.dom;
var Nr = Ie.parse;
Ie.findIconDefinition;
Ie.toHtml;
var Rc = Ie.icon;
Ie.layer;
Ie.text;
Ie.counter;
var Tr = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Et, Aa;
function Cc() {
  if (Aa) return Et;
  Aa = 1;
  var e = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function r(o) {
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
      for (var i = {}, s = 0; s < 10; s++)
        i["_" + String.fromCharCode(s)] = s;
      var c = Object.getOwnPropertyNames(i).map(function(l) {
        return i[l];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        u[l] = l;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Et = a() ? Object.assign : function(o, i) {
    for (var s, c = r(o), u, l = 1; l < arguments.length; l++) {
      s = Object(arguments[l]);
      for (var f in s)
        n.call(s, f) && (c[f] = s[f]);
      if (e) {
        u = e(s);
        for (var g = 0; g < u.length; g++)
          t.call(s, u[g]) && (c[u[g]] = s[u[g]]);
      }
    }
    return c;
  }, Et;
}
var yt, xa;
function Gr() {
  if (xa) return yt;
  xa = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return yt = e, yt;
}
var wt, Ra;
function io() {
  return Ra || (Ra = 1, wt = Function.call.bind(Object.prototype.hasOwnProperty)), wt;
}
var Nt, Ca;
function Ic() {
  if (Ca) return Nt;
  Ca = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = Gr(), t = {}, r = io();
    e = function(o) {
      var i = "Warning: " + o;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function a(o, i, s, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in o)
        if (r(o, l)) {
          var f;
          try {
            if (typeof o[l] != "function") {
              var g = Error(
                (c || "React class") + ": " + s + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            f = o[l](i, l, c, s, null, n);
          } catch (h) {
            f = h;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in t)) {
            t[f.message] = !0;
            var m = u ? u() : "";
            e(
              "Failed " + s + " type: " + f.message + (m ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Nt = a, Nt;
}
var Tt, Ia;
function Mc() {
  if (Ia) return Tt;
  Ia = 1;
  var e = Ai(), n = Cc(), t = Gr(), r = io(), a = Ic(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(s) {
    var c = "Warning: " + s;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return Tt = function(s, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function f(b) {
      var N = b && (u && b[u] || b[l]);
      if (typeof N == "function")
        return N;
    }
    var g = "<<anonymous>>", m = {
      array: y("array"),
      bigint: y("bigint"),
      bool: y("boolean"),
      func: y("function"),
      number: y("number"),
      object: y("object"),
      string: y("string"),
      symbol: y("symbol"),
      any: _(),
      arrayOf: S,
      element: M(),
      elementType: x(),
      instanceOf: W,
      node: ge(),
      objectOf: D,
      oneOf: K,
      oneOfType: H,
      shape: Ee,
      exact: le
    };
    function h(b, N) {
      return b === N ? b !== 0 || 1 / b === 1 / N : b !== b && N !== N;
    }
    function p(b, N) {
      this.message = b, this.data = N && typeof N == "object" ? N : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function v(b) {
      if (process.env.NODE_ENV !== "production")
        var N = {}, U = 0;
      function $(B, P, R, C, q, z, se) {
        if (C = C || g, z = z || R, se !== t) {
          if (c) {
            var ie = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ie.name = "Invariant Violation", ie;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ye = C + ":" + R;
            !N[ye] && // Avoid spamming the console because they are often not actionable except for lib authors
            U < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + z + "` prop on `" + C + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), N[ye] = !0, U++);
          }
        }
        return P[R] == null ? B ? P[R] === null ? new p("The " + q + " `" + z + "` is marked as required " + ("in `" + C + "`, but its value is `null`.")) : new p("The " + q + " `" + z + "` is marked as required in " + ("`" + C + "`, but its value is `undefined`.")) : null : b(P, R, C, q, z);
      }
      var F = $.bind(null, !1);
      return F.isRequired = $.bind(null, !0), F;
    }
    function y(b) {
      function N(U, $, F, B, P, R) {
        var C = U[$], q = ue(C);
        if (q !== b) {
          var z = E(C);
          return new p(
            "Invalid " + B + " `" + P + "` of type " + ("`" + z + "` supplied to `" + F + "`, expected ") + ("`" + b + "`."),
            { expectedType: b }
          );
        }
        return null;
      }
      return v(N);
    }
    function _() {
      return v(i);
    }
    function S(b) {
      function N(U, $, F, B, P) {
        if (typeof b != "function")
          return new p("Property `" + P + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var R = U[$];
        if (!Array.isArray(R)) {
          var C = ue(R);
          return new p("Invalid " + B + " `" + P + "` of type " + ("`" + C + "` supplied to `" + F + "`, expected an array."));
        }
        for (var q = 0; q < R.length; q++) {
          var z = b(R, q, F, B, P + "[" + q + "]", t);
          if (z instanceof Error)
            return z;
        }
        return null;
      }
      return v(N);
    }
    function M() {
      function b(N, U, $, F, B) {
        var P = N[U];
        if (!s(P)) {
          var R = ue(P);
          return new p("Invalid " + F + " `" + B + "` of type " + ("`" + R + "` supplied to `" + $ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(b);
    }
    function x() {
      function b(N, U, $, F, B) {
        var P = N[U];
        if (!e.isValidElementType(P)) {
          var R = ue(P);
          return new p("Invalid " + F + " `" + B + "` of type " + ("`" + R + "` supplied to `" + $ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(b);
    }
    function W(b) {
      function N(U, $, F, B, P) {
        if (!(U[$] instanceof b)) {
          var R = b.name || g, C = Y(U[$]);
          return new p("Invalid " + B + " `" + P + "` of type " + ("`" + C + "` supplied to `" + F + "`, expected ") + ("instance of `" + R + "`."));
        }
        return null;
      }
      return v(N);
    }
    function K(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), i;
      function N(U, $, F, B, P) {
        for (var R = U[$], C = 0; C < b.length; C++)
          if (h(R, b[C]))
            return null;
        var q = JSON.stringify(b, function(se, ie) {
          var ye = E(ie);
          return ye === "symbol" ? String(ie) : ie;
        });
        return new p("Invalid " + B + " `" + P + "` of value `" + String(R) + "` " + ("supplied to `" + F + "`, expected one of " + q + "."));
      }
      return v(N);
    }
    function D(b) {
      function N(U, $, F, B, P) {
        if (typeof b != "function")
          return new p("Property `" + P + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var R = U[$], C = ue(R);
        if (C !== "object")
          return new p("Invalid " + B + " `" + P + "` of type " + ("`" + C + "` supplied to `" + F + "`, expected an object."));
        for (var q in R)
          if (r(R, q)) {
            var z = b(R, q, F, B, P + "." + q, t);
            if (z instanceof Error)
              return z;
          }
        return null;
      }
      return v(N);
    }
    function H(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var N = 0; N < b.length; N++) {
        var U = b[N];
        if (typeof U != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + O(U) + " at index " + N + "."
          ), i;
      }
      function $(F, B, P, R, C) {
        for (var q = [], z = 0; z < b.length; z++) {
          var se = b[z], ie = se(F, B, P, R, C, t);
          if (ie == null)
            return null;
          ie.data && r(ie.data, "expectedType") && q.push(ie.data.expectedType);
        }
        var ye = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new p("Invalid " + R + " `" + C + "` supplied to " + ("`" + P + "`" + ye + "."));
      }
      return v($);
    }
    function ge() {
      function b(N, U, $, F, B) {
        return te(N[U]) ? null : new p("Invalid " + F + " `" + B + "` supplied to " + ("`" + $ + "`, expected a ReactNode."));
      }
      return v(b);
    }
    function ae(b, N, U, $, F) {
      return new p(
        (b || "React class") + ": " + N + " type `" + U + "." + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function Ee(b) {
      function N(U, $, F, B, P) {
        var R = U[$], C = ue(R);
        if (C !== "object")
          return new p("Invalid " + B + " `" + P + "` of type `" + C + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var q in b) {
          var z = b[q];
          if (typeof z != "function")
            return ae(F, B, P, q, E(z));
          var se = z(R, q, F, B, P + "." + q, t);
          if (se)
            return se;
        }
        return null;
      }
      return v(N);
    }
    function le(b) {
      function N(U, $, F, B, P) {
        var R = U[$], C = ue(R);
        if (C !== "object")
          return new p("Invalid " + B + " `" + P + "` of type `" + C + "` " + ("supplied to `" + F + "`, expected `object`."));
        var q = n({}, U[$], b);
        for (var z in q) {
          var se = b[z];
          if (r(b, z) && typeof se != "function")
            return ae(F, B, P, z, E(se));
          if (!se)
            return new p(
              "Invalid " + B + " `" + P + "` key `" + z + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(U[$], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(b), null, "  ")
            );
          var ie = se(R, z, F, B, P + "." + z, t);
          if (ie)
            return ie;
        }
        return null;
      }
      return v(N);
    }
    function te(b) {
      switch (typeof b) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !b;
        case "object":
          if (Array.isArray(b))
            return b.every(te);
          if (b === null || s(b))
            return !0;
          var N = f(b);
          if (N) {
            var U = N.call(b), $;
            if (N !== b.entries) {
              for (; !($ = U.next()).done; )
                if (!te($.value))
                  return !1;
            } else
              for (; !($ = U.next()).done; ) {
                var F = $.value;
                if (F && !te(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Q(b, N) {
      return b === "symbol" ? !0 : N ? N["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && N instanceof Symbol : !1;
    }
    function ue(b) {
      var N = typeof b;
      return Array.isArray(b) ? "array" : b instanceof RegExp ? "object" : Q(N, b) ? "symbol" : N;
    }
    function E(b) {
      if (typeof b > "u" || b === null)
        return "" + b;
      var N = ue(b);
      if (N === "object") {
        if (b instanceof Date)
          return "date";
        if (b instanceof RegExp)
          return "regexp";
      }
      return N;
    }
    function O(b) {
      var N = E(b);
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
    function Y(b) {
      return !b.constructor || !b.constructor.name ? g : b.constructor.name;
    }
    return m.checkPropTypes = a, m.resetWarningCache = a.resetWarningCache, m.PropTypes = m, m;
  }, Tt;
}
var St, Ma;
function Lc() {
  if (Ma) return St;
  Ma = 1;
  var e = Gr();
  function n() {
  }
  function t() {
  }
  return t.resetWarningCache = n, St = function() {
    function r(i, s, c, u, l, f) {
      if (f !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var o = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: t,
      resetWarningCache: n
    };
    return o.PropTypes = o, o;
  }, St;
}
if (process.env.NODE_ENV !== "production") {
  var Dc = Ai(), Pc = !0;
  Tr.exports = Mc()(Dc.isElement, Pc);
} else
  Tr.exports = Lc()();
var Bc = Tr.exports;
const J = /* @__PURE__ */ xi(Bc);
function La(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Ue(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? La(Object(t), !0).forEach(function(r) {
      hn(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : La(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function tt(e) {
  "@babel/helpers - typeof";
  return tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, tt(e);
}
function hn(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function Uc(e, n) {
  if (e == null) return {};
  var t = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(n.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
function Fc(e, n) {
  if (e == null) return {};
  var t = Uc(e, n), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function Sr(e) {
  return $c(e) || zc(e) || Gc(e) || qc();
}
function $c(e) {
  if (Array.isArray(e)) return Or(e);
}
function zc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Gc(e, n) {
  if (e) {
    if (typeof e == "string") return Or(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Or(e, n);
  }
}
function Or(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
  return r;
}
function qc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kc(e) {
  var n, t = e.beat, r = e.fade, a = e.beatFade, o = e.bounce, i = e.shake, s = e.flash, c = e.spin, u = e.spinPulse, l = e.spinReverse, f = e.pulse, g = e.fixedWidth, m = e.inverse, h = e.border, p = e.listItem, v = e.flip, y = e.size, _ = e.rotation, S = e.pull, M = (n = {
    "fa-beat": t,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": o,
    "fa-shake": i,
    "fa-flash": s,
    "fa-spin": c,
    "fa-spin-reverse": l,
    "fa-spin-pulse": u,
    "fa-pulse": f,
    "fa-fw": g,
    "fa-inverse": m,
    "fa-border": h,
    "fa-li": p,
    "fa-flip": v === !0,
    "fa-flip-horizontal": v === "horizontal" || v === "both",
    "fa-flip-vertical": v === "vertical" || v === "both"
  }, hn(n, "fa-".concat(y), typeof y < "u" && y !== null), hn(n, "fa-rotate-".concat(_), typeof _ < "u" && _ !== null && _ !== 0), hn(n, "fa-pull-".concat(S), typeof S < "u" && S !== null), hn(n, "fa-swap-opacity", e.swapOpacity), n);
  return Object.keys(M).map(function(x) {
    return M[x] ? x : null;
  }).filter(function(x) {
    return x;
  });
}
function Hc(e) {
  return e = e - 0, e === e;
}
function oo(e) {
  return Hc(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(n, t) {
    return t ? t.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Wc = ["style"];
function Yc(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Zc(e) {
  return e.split(";").map(function(n) {
    return n.trim();
  }).filter(function(n) {
    return n;
  }).reduce(function(n, t) {
    var r = t.indexOf(":"), a = oo(t.slice(0, r)), o = t.slice(r + 1).trim();
    return a.startsWith("webkit") ? n[Yc(a)] = o : n[a] = o, n;
  }, {});
}
function so(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof n == "string")
    return n;
  var r = (n.children || []).map(function(c) {
    return so(e, c);
  }), a = Object.keys(n.attributes || {}).reduce(function(c, u) {
    var l = n.attributes[u];
    switch (u) {
      case "class":
        c.attrs.className = l, delete n.attributes.class;
        break;
      case "style":
        c.attrs.style = Zc(l);
        break;
      default:
        u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? c.attrs[u.toLowerCase()] = l : c.attrs[oo(u)] = l;
    }
    return c;
  }, {
    attrs: {}
  }), o = t.style, i = o === void 0 ? {} : o, s = Fc(t, Wc);
  return a.attrs.style = Ue(Ue({}, a.attrs.style), i), e.apply(void 0, [n.tag, Ue(Ue({}, a.attrs), s)].concat(Sr(r)));
}
var co = !1;
try {
  co = process.env.NODE_ENV === "production";
} catch {
}
function Xc() {
  if (!co && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Da(e) {
  if (e && tt(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Nr.icon)
    return Nr.icon(e);
  if (e === null)
    return null;
  if (e && tt(e) === "object" && e.prefix && e.iconName)
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
function Ot(e, n) {
  return Array.isArray(n) && n.length > 0 || !Array.isArray(n) && n ? hn({}, e, n) : {};
}
var Pa = {
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
}, qr = /* @__PURE__ */ Se.forwardRef(function(e, n) {
  var t = Ue(Ue({}, Pa), e), r = t.icon, a = t.mask, o = t.symbol, i = t.className, s = t.title, c = t.titleId, u = t.maskId, l = Da(r), f = Ot("classes", [].concat(Sr(Kc(t)), Sr((i || "").split(" ")))), g = Ot("transform", typeof t.transform == "string" ? Nr.transform(t.transform) : t.transform), m = Ot("mask", Da(a)), h = Rc(l, Ue(Ue(Ue(Ue({}, f), g), m), {}, {
    symbol: o,
    title: s,
    titleId: c,
    maskId: u
  }));
  if (!h)
    return Xc("Could not find icon", l), null;
  var p = h.abstract, v = {
    ref: n
  };
  return Object.keys(t).forEach(function(y) {
    Pa.hasOwnProperty(y) || (v[y] = t[y]);
  }), Vc(p[0], v);
});
qr.displayName = "FontAwesomeIcon";
qr.propTypes = {
  beat: J.bool,
  border: J.bool,
  beatFade: J.bool,
  bounce: J.bool,
  className: J.string,
  fade: J.bool,
  flash: J.bool,
  mask: J.oneOfType([J.object, J.array, J.string]),
  maskId: J.string,
  fixedWidth: J.bool,
  inverse: J.bool,
  flip: J.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: J.oneOfType([J.object, J.array, J.string]),
  listItem: J.bool,
  pull: J.oneOf(["right", "left"]),
  pulse: J.bool,
  rotation: J.oneOf([0, 90, 180, 270]),
  shake: J.bool,
  size: J.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: J.bool,
  spinPulse: J.bool,
  spinReverse: J.bool,
  symbol: J.oneOfType([J.bool, J.string]),
  title: J.string,
  titleId: J.string,
  transform: J.oneOfType([J.string, J.object]),
  swapOpacity: J.bool
};
var Vc = so.bind(null, Se.createElement);
const lo = ({ icon: e, iconClassName: n }) => e ? /* @__PURE__ */ V(qr, { icon: e, className: Oe("pointer-events-none", n) }) : /* @__PURE__ */ V(ln, {});
let Mu = Se.forwardRef(
  ({ focusId: e = Go(30), id: n, children: t, onFocus: r, onBlur: a, style: o, className: i, ignoreOutline: s = !1, ...c }, u) => {
    const l = $e(!1), f = Ce();
    return /* @__PURE__ */ Le(
      "div",
      {
        ref: u,
        tabIndex: 1,
        id: e,
        onFocus: (g) => {
          l.set(!0), r == null || r(g);
        },
        onBlur: (g) => {
          l.set(!1), a == null || a(g);
        },
        style: {
          ...o
        },
        className: Oe("relative", i),
        ...c,
        children: [
          t,
          /* @__PURE__ */ V(
            "div",
            {
              hidden: s,
              className: Oe(
                i,
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
                ...f(l.get && { borderColor: "primary" })
              }
            }
          )
        ]
      }
    );
  }
);
function kt({
  icon: e,
  className: n,
  children: t,
  "aria-checked": r,
  iconClassName: a,
  onFocus: o,
  onBlur: i,
  onMouseEnter: s,
  onMouseLeave: c,
  onPointerDown: u,
  onPointerUp: l,
  onPointerLeave: f,
  style: g,
  ...m
}) {
  const h = Ce(), p = $e(!1), v = $e(!1), y = $e(!1);
  return Se.useEffect(() => () => {
    y.set(!1), v.set(!1), p.set(!1);
  }, []), /* @__PURE__ */ Le(
    "span",
    {
      onFocus: (_) => {
        v.set(!0), o == null || o(_);
      },
      onPointerDown: (_) => {
        y.set(!0), u == null || u(_);
      },
      onPointerUp: (_) => {
        y.set(!1), l == null || l(_);
      },
      onPointerLeave: (_) => {
        y.set(!1), f == null || f(_);
      },
      onBlur: (_) => {
        v.set(!1), i == null || i(_);
      },
      onMouseEnter: (_) => {
        p.set(!0), s == null || s(_);
      },
      onMouseLeave: (_) => {
        p.set(!1), c == null || c(_);
      },
      className: Oe(
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
        m["aria-disabled"] && "pointer-events-none",
        n
      ),
      style: {
        ...h(
          p.get && {
            backgroundColor: "gray.opacity"
          },
          m["aria-disabled"] && {
            color: "gray.opacity.2"
          },
          r && "primary",
          r && {
            color: "primary.content"
          },
          v.get && {
            outlineColor: "primary"
          }
        ),
        ...g
      },
      ...m,
      children: [
        /* @__PURE__ */ V(lo, { iconClassName: a, icon: e }),
        t
      ]
    }
  );
}
const Lu = Se.forwardRef(
  ({ className: e, selectOnFocus: n, onFocus: t, onBlur: r, onValueChange: a, onChange: o, style: i, ...s }, c) => {
    const u = Ce(), l = $e(!1), f = kr("preferences/animation.boolean");
    return /* @__PURE__ */ V(
      "input",
      {
        ...s,
        ref: c,
        onFocus: (g) => {
          l.set(!0), n && g.currentTarget.select(), t == null || t(g);
        },
        onBlur: (g) => {
          l.set(!1), r == null || r(g);
        },
        className: Oe(
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
          f && "transition-[border-color]",
          e
        ),
        style: {
          ...u(
            {
              borderColor: "borders",
              backgroundColor: "field.background"
            },
            l.get && {
              borderColor: "primary"
            }
          ),
          ...i
        },
        onChange: (g) => {
          a == null || a(g.currentTarget.value, g.currentTarget.valueAsNumber), o == null || o(g);
        }
      }
    );
  }
), uo = (e, n) => {
  const t = ea.getEntity(), r = $e(!1), a = qo("system.base"), o = Ko({ model: "gemini-pro" }), i = kr("window/lang.enum"), s = Se.useMemo(() => n || i, [n, i]);
  Se.useEffect(() => {
    r.get && (Ho(), r.set(!1));
  }, [a, r.get]);
  const c = Se.useMemo(() => Po(e, "normal", "cabab").toLowerCase(), [e]), u = Se.useMemo(() => {
    var g;
    return s ? (g = t[c]) == null ? void 0 : g[s] : void 0;
  }, [t, c]), l = Ri(async () => {
    if (s && !u && o && s != "en") {
      await ki(300);
      const { response: g } = await o.generateContent(`translate this text to ${s} :

${e}`);
      r.set(!0), ea.upsert([{ word: c, [s]: g.text() }]);
    }
  }, [u, c, s, e, o]);
  return [Se.useMemo(() => u || e, [u, e]), l];
};
function Ba({ content: e, lang: n }) {
  const [t, r] = uo(e, n);
  return /* @__PURE__ */ V(ln, { children: r ? "..." : t });
}
function Du({ component: e, content: n, lang: t }) {
  const [r, a] = uo(n, t);
  return /* @__PURE__ */ V(ln, { children: e({ result: r, isLoading: a }) });
}
function fo({ joinComponent: e, list: n }) {
  return Se.useMemo(() => {
    const r = [], a = n.length;
    let o = 0;
    return n.forEach((i, s) => {
      r.push(/* @__PURE__ */ V(ln, { children: i }, o)), s + 1 != a && r.push(/* @__PURE__ */ V(ln, { children: e }, o + 1)), o += 2;
    }), r;
  }, [n, e]);
}
function jc() {
  const e = Ce();
  return /* @__PURE__ */ V(
    "div",
    {
      className: "w-full h-[1px]",
      style: {
        ...e("borders")
      }
    }
  );
}
function go(e) {
  return e instanceof Map ? e.clear = e.delete = e.set = function() {
    throw new Error("map is read-only");
  } : e instanceof Set && (e.add = e.clear = e.delete = function() {
    throw new Error("set is read-only");
  }), Object.freeze(e), Object.getOwnPropertyNames(e).forEach((n) => {
    const t = e[n], r = typeof t;
    (r === "object" || r === "function") && !Object.isFrozen(t) && go(t);
  }), e;
}
class Ua {
  /**
   * @param {CompiledMode} mode
   */
  constructor(n) {
    n.data === void 0 && (n.data = {}), this.data = n.data, this.isMatchIgnored = !1;
  }
  ignoreMatch() {
    this.isMatchIgnored = !0;
  }
}
function mo(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
function Je(e, ...n) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r in e)
    t[r] = e[r];
  return n.forEach(function(r) {
    for (const a in r)
      t[a] = r[a];
  }), /** @type {T} */
  t;
}
const Qc = "</span>", Fa = (e) => !!e.scope, Jc = (e, { prefix: n }) => {
  if (e.startsWith("language:"))
    return e.replace("language:", "language-");
  if (e.includes(".")) {
    const t = e.split(".");
    return [
      `${n}${t.shift()}`,
      ...t.map((r, a) => `${r}${"_".repeat(a + 1)}`)
    ].join(" ");
  }
  return `${n}${e}`;
};
class el {
  /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */
  constructor(n, t) {
    this.buffer = "", this.classPrefix = t.classPrefix, n.walk(this);
  }
  /**
   * Adds texts to the output stream
   *
   * @param {string} text */
  addText(n) {
    this.buffer += mo(n);
  }
  /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */
  openNode(n) {
    if (!Fa(n)) return;
    const t = Jc(
      n.scope,
      { prefix: this.classPrefix }
    );
    this.span(t);
  }
  /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */
  closeNode(n) {
    Fa(n) && (this.buffer += Qc);
  }
  /**
   * returns the accumulated buffer
  */
  value() {
    return this.buffer;
  }
  // helpers
  /**
   * Builds a span element
   *
   * @param {string} className */
  span(n) {
    this.buffer += `<span class="${n}">`;
  }
}
const $a = (e = {}) => {
  const n = { children: [] };
  return Object.assign(n, e), n;
};
class Kr {
  constructor() {
    this.rootNode = $a(), this.stack = [this.rootNode];
  }
  get top() {
    return this.stack[this.stack.length - 1];
  }
  get root() {
    return this.rootNode;
  }
  /** @param {Node} node */
  add(n) {
    this.top.children.push(n);
  }
  /** @param {string} scope */
  openNode(n) {
    const t = $a({ scope: n });
    this.add(t), this.stack.push(t);
  }
  closeNode() {
    if (this.stack.length > 1)
      return this.stack.pop();
  }
  closeAllNodes() {
    for (; this.closeNode(); ) ;
  }
  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }
  /**
   * @typedef { import("./html_renderer").Renderer } Renderer
   * @param {Renderer} builder
   */
  walk(n) {
    return this.constructor._walk(n, this.rootNode);
  }
  /**
   * @param {Renderer} builder
   * @param {Node} node
   */
  static _walk(n, t) {
    return typeof t == "string" ? n.addText(t) : t.children && (n.openNode(t), t.children.forEach((r) => this._walk(n, r)), n.closeNode(t)), n;
  }
  /**
   * @param {Node} node
   */
  static _collapse(n) {
    typeof n != "string" && n.children && (n.children.every((t) => typeof t == "string") ? n.children = [n.children.join("")] : n.children.forEach((t) => {
      Kr._collapse(t);
    }));
  }
}
class nl extends Kr {
  /**
   * @param {*} options
   */
  constructor(n) {
    super(), this.options = n;
  }
  /**
   * @param {string} text
   */
  addText(n) {
    n !== "" && this.add(n);
  }
  /** @param {string} scope */
  startScope(n) {
    this.openNode(n);
  }
  endScope() {
    this.closeNode();
  }
  /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */
  __addSublanguage(n, t) {
    const r = n.root;
    t && (r.scope = `language:${t}`), this.add(r);
  }
  toHTML() {
    return new el(this, this.options).value();
  }
  finalize() {
    return this.closeAllNodes(), !0;
  }
}
function Dn(e) {
  return e ? typeof e == "string" ? e : e.source : null;
}
function bo(e) {
  return fn("(?=", e, ")");
}
function tl(e) {
  return fn("(?:", e, ")*");
}
function rl(e) {
  return fn("(?:", e, ")?");
}
function fn(...e) {
  return e.map((t) => Dn(t)).join("");
}
function al(e) {
  const n = e[e.length - 1];
  return typeof n == "object" && n.constructor === Object ? (e.splice(e.length - 1, 1), n) : {};
}
function Hr(...e) {
  return "(" + (al(e).capture ? "" : "?:") + e.map((r) => Dn(r)).join("|") + ")";
}
function po(e) {
  return new RegExp(e.toString() + "|").exec("").length - 1;
}
function il(e, n) {
  const t = e && e.exec(n);
  return t && t.index === 0;
}
const ol = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function Wr(e, { joinWith: n }) {
  let t = 0;
  return e.map((r) => {
    t += 1;
    const a = t;
    let o = Dn(r), i = "";
    for (; o.length > 0; ) {
      const s = ol.exec(o);
      if (!s) {
        i += o;
        break;
      }
      i += o.substring(0, s.index), o = o.substring(s.index + s[0].length), s[0][0] === "\\" && s[1] ? i += "\\" + String(Number(s[1]) + a) : (i += s[0], s[0] === "(" && t++);
    }
    return i;
  }).map((r) => `(${r})`).join(n);
}
const sl = /\b\B/, vo = "[a-zA-Z]\\w*", Yr = "[a-zA-Z_]\\w*", ho = "\\b\\d+(\\.\\d+)?", _o = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", Eo = "\\b(0b[01]+)", cl = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", ll = (e = {}) => {
  const n = /^#![ ]*\//;
  return e.binary && (e.begin = fn(
    n,
    /.*\b/,
    e.binary,
    /\b.*/
  )), Je({
    scope: "meta",
    begin: n,
    end: /$/,
    relevance: 0,
    /** @type {ModeCallback} */
    "on:begin": (t, r) => {
      t.index !== 0 && r.ignoreMatch();
    }
  }, e);
}, Pn = {
  begin: "\\\\[\\s\\S]",
  relevance: 0
}, ul = {
  scope: "string",
  begin: "'",
  end: "'",
  illegal: "\\n",
  contains: [Pn]
}, dl = {
  scope: "string",
  begin: '"',
  end: '"',
  illegal: "\\n",
  contains: [Pn]
}, fl = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
}, ct = function(e, n, t = {}) {
  const r = Je(
    {
      scope: "comment",
      begin: e,
      end: n,
      contains: []
    },
    t
  );
  r.contains.push({
    scope: "doctag",
    // hack to avoid the space from being included. the space is necessary to
    // match here to prevent the plain text rule below from gobbling up doctags
    begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
    end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
    excludeBegin: !0,
    relevance: 0
  });
  const a = Hr(
    // list of common 1 and 2 letter words in English
    "I",
    "a",
    "is",
    "so",
    "us",
    "to",
    "at",
    "if",
    "in",
    "it",
    "on",
    // note: this is not an exhaustive list of contractions, just popular ones
    /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
    // contractions - can't we'd they're let's, etc
    /[A-Za-z]+[-][a-z]+/,
    // `no-way`, etc.
    /[A-Za-z][a-z]{2,}/
    // allow capitalized words at beginning of sentences
  );
  return r.contains.push(
    {
      // TODO: how to include ", (, ) without breaking grammars that use these for
      // comment delimiters?
      // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
      // ---
      // this tries to find sequences of 3 english words in a row (without any
      // "programming" type syntax) this gives us a strong signal that we've
      // TRULY found a comment - vs perhaps scanning with the wrong language.
      // It's possible to find something that LOOKS like the start of the
      // comment - but then if there is no readable text - good chance it is a
      // false match and not a comment.
      //
      // for a visual example please see:
      // https://github.com/highlightjs/highlight.js/issues/2827
      begin: fn(
        /[ ]+/,
        // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
        "(",
        a,
        /[.]?[:]?([.][ ]|[ ])/,
        "){3}"
      )
      // look for 3 words in a row
    }
  ), r;
}, gl = ct("//", "$"), ml = ct("/\\*", "\\*/"), bl = ct("#", "$"), pl = {
  scope: "number",
  begin: ho,
  relevance: 0
}, vl = {
  scope: "number",
  begin: _o,
  relevance: 0
}, hl = {
  scope: "number",
  begin: Eo,
  relevance: 0
}, _l = {
  scope: "regexp",
  begin: /\/(?=[^/\n]*\/)/,
  end: /\/[gimuy]*/,
  contains: [
    Pn,
    {
      begin: /\[/,
      end: /\]/,
      relevance: 0,
      contains: [Pn]
    }
  ]
}, El = {
  scope: "title",
  begin: vo,
  relevance: 0
}, yl = {
  scope: "title",
  begin: Yr,
  relevance: 0
}, wl = {
  // excludes method names from keyword processing
  begin: "\\.\\s*" + Yr,
  relevance: 0
}, Nl = function(e) {
  return Object.assign(
    e,
    {
      /** @type {ModeCallback} */
      "on:begin": (n, t) => {
        t.data._beginMatch = n[1];
      },
      /** @type {ModeCallback} */
      "on:end": (n, t) => {
        t.data._beginMatch !== n[1] && t.ignoreMatch();
      }
    }
  );
};
var Vn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  APOS_STRING_MODE: ul,
  BACKSLASH_ESCAPE: Pn,
  BINARY_NUMBER_MODE: hl,
  BINARY_NUMBER_RE: Eo,
  COMMENT: ct,
  C_BLOCK_COMMENT_MODE: ml,
  C_LINE_COMMENT_MODE: gl,
  C_NUMBER_MODE: vl,
  C_NUMBER_RE: _o,
  END_SAME_AS_BEGIN: Nl,
  HASH_COMMENT_MODE: bl,
  IDENT_RE: vo,
  MATCH_NOTHING_RE: sl,
  METHOD_GUARD: wl,
  NUMBER_MODE: pl,
  NUMBER_RE: ho,
  PHRASAL_WORDS_MODE: fl,
  QUOTE_STRING_MODE: dl,
  REGEXP_MODE: _l,
  RE_STARTERS_RE: cl,
  SHEBANG: ll,
  TITLE_MODE: El,
  UNDERSCORE_IDENT_RE: Yr,
  UNDERSCORE_TITLE_MODE: yl
});
function Tl(e, n) {
  e.input[e.index - 1] === "." && n.ignoreMatch();
}
function Sl(e, n) {
  e.className !== void 0 && (e.scope = e.className, delete e.className);
}
function Ol(e, n) {
  n && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = Tl, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, e.relevance === void 0 && (e.relevance = 0));
}
function kl(e, n) {
  Array.isArray(e.illegal) && (e.illegal = Hr(...e.illegal));
}
function Al(e, n) {
  if (e.match) {
    if (e.begin || e.end) throw new Error("begin & end are not supported with match");
    e.begin = e.match, delete e.match;
  }
}
function xl(e, n) {
  e.relevance === void 0 && (e.relevance = 1);
}
const Rl = (e, n) => {
  if (!e.beforeMatch) return;
  if (e.starts) throw new Error("beforeMatch cannot be used with starts");
  const t = Object.assign({}, e);
  Object.keys(e).forEach((r) => {
    delete e[r];
  }), e.keywords = t.keywords, e.begin = fn(t.beforeMatch, bo(t.begin)), e.starts = {
    relevance: 0,
    contains: [
      Object.assign(t, { endsParent: !0 })
    ]
  }, e.relevance = 0, delete t.beforeMatch;
}, Cl = [
  "of",
  "and",
  "for",
  "in",
  "not",
  "or",
  "if",
  "then",
  "parent",
  // common variable name
  "list",
  // common variable name
  "value"
  // common variable name
], Il = "keyword";
function yo(e, n, t = Il) {
  const r = /* @__PURE__ */ Object.create(null);
  return typeof e == "string" ? a(t, e.split(" ")) : Array.isArray(e) ? a(t, e) : Object.keys(e).forEach(function(o) {
    Object.assign(
      r,
      yo(e[o], n, o)
    );
  }), r;
  function a(o, i) {
    n && (i = i.map((s) => s.toLowerCase())), i.forEach(function(s) {
      const c = s.split("|");
      r[c[0]] = [o, Ml(c[0], c[1])];
    });
  }
}
function Ml(e, n) {
  return n ? Number(n) : Ll(e) ? 0 : 1;
}
function Ll(e) {
  return Cl.includes(e.toLowerCase());
}
const za = {}, cn = (e) => {
  console.error(e);
}, Ga = (e, ...n) => {
  console.log(`WARN: ${e}`, ...n);
}, bn = (e, n) => {
  za[`${e}/${n}`] || (console.log(`Deprecated as of ${e}. ${n}`), za[`${e}/${n}`] = !0);
}, rt = new Error();
function wo(e, n, { key: t }) {
  let r = 0;
  const a = e[t], o = {}, i = {};
  for (let s = 1; s <= n.length; s++)
    i[s + r] = a[s], o[s + r] = !0, r += po(n[s - 1]);
  e[t] = i, e[t]._emit = o, e[t]._multi = !0;
}
function Dl(e) {
  if (Array.isArray(e.begin)) {
    if (e.skip || e.excludeBegin || e.returnBegin)
      throw cn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), rt;
    if (typeof e.beginScope != "object" || e.beginScope === null)
      throw cn("beginScope must be object"), rt;
    wo(e, e.begin, { key: "beginScope" }), e.begin = Wr(e.begin, { joinWith: "" });
  }
}
function Pl(e) {
  if (Array.isArray(e.end)) {
    if (e.skip || e.excludeEnd || e.returnEnd)
      throw cn("skip, excludeEnd, returnEnd not compatible with endScope: {}"), rt;
    if (typeof e.endScope != "object" || e.endScope === null)
      throw cn("endScope must be object"), rt;
    wo(e, e.end, { key: "endScope" }), e.end = Wr(e.end, { joinWith: "" });
  }
}
function Bl(e) {
  e.scope && typeof e.scope == "object" && e.scope !== null && (e.beginScope = e.scope, delete e.scope);
}
function Ul(e) {
  Bl(e), typeof e.beginScope == "string" && (e.beginScope = { _wrap: e.beginScope }), typeof e.endScope == "string" && (e.endScope = { _wrap: e.endScope }), Dl(e), Pl(e);
}
function Fl(e) {
  function n(i, s) {
    return new RegExp(
      Dn(i),
      "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (s ? "g" : "")
    );
  }
  class t {
    constructor() {
      this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
    }
    // @ts-ignore
    addRule(s, c) {
      c.position = this.position++, this.matchIndexes[this.matchAt] = c, this.regexes.push([c, s]), this.matchAt += po(s) + 1;
    }
    compile() {
      this.regexes.length === 0 && (this.exec = () => null);
      const s = this.regexes.map((c) => c[1]);
      this.matcherRe = n(Wr(s, { joinWith: "|" }), !0), this.lastIndex = 0;
    }
    /** @param {string} s */
    exec(s) {
      this.matcherRe.lastIndex = this.lastIndex;
      const c = this.matcherRe.exec(s);
      if (!c)
        return null;
      const u = c.findIndex((f, g) => g > 0 && f !== void 0), l = this.matchIndexes[u];
      return c.splice(0, u), Object.assign(c, l);
    }
  }
  class r {
    constructor() {
      this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
    }
    // @ts-ignore
    getMatcher(s) {
      if (this.multiRegexes[s]) return this.multiRegexes[s];
      const c = new t();
      return this.rules.slice(s).forEach(([u, l]) => c.addRule(u, l)), c.compile(), this.multiRegexes[s] = c, c;
    }
    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }
    considerAll() {
      this.regexIndex = 0;
    }
    // @ts-ignore
    addRule(s, c) {
      this.rules.push([s, c]), c.type === "begin" && this.count++;
    }
    /** @param {string} s */
    exec(s) {
      const c = this.getMatcher(this.regexIndex);
      c.lastIndex = this.lastIndex;
      let u = c.exec(s);
      if (this.resumingScanAtSamePosition() && !(u && u.index === this.lastIndex)) {
        const l = this.getMatcher(0);
        l.lastIndex = this.lastIndex + 1, u = l.exec(s);
      }
      return u && (this.regexIndex += u.position + 1, this.regexIndex === this.count && this.considerAll()), u;
    }
  }
  function a(i) {
    const s = new r();
    return i.contains.forEach((c) => s.addRule(c.begin, { rule: c, type: "begin" })), i.terminatorEnd && s.addRule(i.terminatorEnd, { type: "end" }), i.illegal && s.addRule(i.illegal, { type: "illegal" }), s;
  }
  function o(i, s) {
    const c = (
      /** @type CompiledMode */
      i
    );
    if (i.isCompiled) return c;
    [
      Sl,
      // do this early so compiler extensions generally don't have to worry about
      // the distinction between match/begin
      Al,
      Ul,
      Rl
    ].forEach((l) => l(i, s)), e.compilerExtensions.forEach((l) => l(i, s)), i.__beforeBegin = null, [
      Ol,
      // do this later so compiler extensions that come earlier have access to the
      // raw array if they wanted to perhaps manipulate it, etc.
      kl,
      // default to 1 relevance if not specified
      xl
    ].forEach((l) => l(i, s)), i.isCompiled = !0;
    let u = null;
    return typeof i.keywords == "object" && i.keywords.$pattern && (i.keywords = Object.assign({}, i.keywords), u = i.keywords.$pattern, delete i.keywords.$pattern), u = u || /\w+/, i.keywords && (i.keywords = yo(i.keywords, e.case_insensitive)), c.keywordPatternRe = n(u, !0), s && (i.begin || (i.begin = /\B|\b/), c.beginRe = n(c.begin), !i.end && !i.endsWithParent && (i.end = /\B|\b/), i.end && (c.endRe = n(c.end)), c.terminatorEnd = Dn(c.end) || "", i.endsWithParent && s.terminatorEnd && (c.terminatorEnd += (i.end ? "|" : "") + s.terminatorEnd)), i.illegal && (c.illegalRe = n(
      /** @type {RegExp | string} */
      i.illegal
    )), i.contains || (i.contains = []), i.contains = [].concat(...i.contains.map(function(l) {
      return $l(l === "self" ? i : l);
    })), i.contains.forEach(function(l) {
      o(
        /** @type Mode */
        l,
        c
      );
    }), i.starts && o(i.starts, s), c.matcher = a(c), c;
  }
  if (e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes("self"))
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  return e.classNameAliases = Je(e.classNameAliases || {}), o(
    /** @type Mode */
    e
  );
}
function No(e) {
  return e ? e.endsWithParent || No(e.starts) : !1;
}
function $l(e) {
  return e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map(function(n) {
    return Je(e, { variants: null }, n);
  })), e.cachedVariants ? e.cachedVariants : No(e) ? Je(e, { starts: e.starts ? Je(e.starts) : null }) : Object.isFrozen(e) ? Je(e) : e;
}
var zl = "11.10.0";
class Gl extends Error {
  constructor(n, t) {
    super(n), this.name = "HTMLInjectionError", this.html = t;
  }
}
const At = mo, qa = Je, Ka = Symbol("nomatch"), ql = 7, To = function(e) {
  const n = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null), r = [];
  let a = !0;
  const o = "Could not find the language '{}', did you forget to load/include a language module?", i = { disableAutodetect: !0, name: "Plain text", contains: [] };
  let s = {
    ignoreUnescapedHTML: !1,
    throwUnescapedHTML: !1,
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: "hljs-",
    cssSelector: "pre code",
    languages: null,
    // beta configuration options, subject to change, welcome to discuss
    // https://github.com/highlightjs/highlight.js/issues/1086
    __emitter: nl
  };
  function c(E) {
    return s.noHighlightRe.test(E);
  }
  function u(E) {
    let O = E.className + " ";
    O += E.parentNode ? E.parentNode.className : "";
    const Y = s.languageDetectRe.exec(O);
    if (Y) {
      const b = H(Y[1]);
      return b || (Ga(o.replace("{}", Y[1])), Ga("Falling back to no-highlight mode for this block.", E)), b ? Y[1] : "no-highlight";
    }
    return O.split(/\s+/).find((b) => c(b) || H(b));
  }
  function l(E, O, Y) {
    let b = "", N = "";
    typeof O == "object" ? (b = E, Y = O.ignoreIllegals, N = O.language) : (bn("10.7.0", "highlight(lang, code, ...args) has been deprecated."), bn("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), N = E, b = O), Y === void 0 && (Y = !0);
    const U = {
      code: b,
      language: N
    };
    Q("before:highlight", U);
    const $ = U.result ? U.result : f(U.language, U.code, Y);
    return $.code = U.code, Q("after:highlight", $), $;
  }
  function f(E, O, Y, b) {
    const N = /* @__PURE__ */ Object.create(null);
    function U(T, I) {
      return T.keywords[I];
    }
    function $() {
      if (!G.keywords) {
        pe.addText(oe);
        return;
      }
      let T = 0;
      G.keywordPatternRe.lastIndex = 0;
      let I = G.keywordPatternRe.exec(oe), X = "";
      for (; I; ) {
        X += oe.substring(T, I.index);
        const ee = we.case_insensitive ? I[0].toLowerCase() : I[0], ve = U(G, ee);
        if (ve) {
          const [xe, Nn] = ve;
          if (pe.addText(X), X = "", N[ee] = (N[ee] || 0) + 1, N[ee] <= ql && (Ze += Nn), xe.startsWith("_"))
            X += I[0];
          else {
            const Tn = we.classNameAliases[xe] || xe;
            P(I[0], Tn);
          }
        } else
          X += I[0];
        T = G.keywordPatternRe.lastIndex, I = G.keywordPatternRe.exec(oe);
      }
      X += oe.substring(T), pe.addText(X);
    }
    function F() {
      if (oe === "") return;
      let T = null;
      if (typeof G.subLanguage == "string") {
        if (!n[G.subLanguage]) {
          pe.addText(oe);
          return;
        }
        T = f(G.subLanguage, oe, !0, gn[G.subLanguage]), gn[G.subLanguage] = /** @type {CompiledMode} */
        T._top;
      } else
        T = m(oe, G.subLanguage.length ? G.subLanguage : null);
      G.relevance > 0 && (Ze += T.relevance), pe.__addSublanguage(T._emitter, T.language);
    }
    function B() {
      G.subLanguage != null ? F() : $(), oe = "";
    }
    function P(T, I) {
      T !== "" && (pe.startScope(I), pe.addText(T), pe.endScope());
    }
    function R(T, I) {
      let X = 1;
      const ee = I.length - 1;
      for (; X <= ee; ) {
        if (!T._emit[X]) {
          X++;
          continue;
        }
        const ve = we.classNameAliases[T[X]] || T[X], xe = I[X];
        ve ? P(xe, ve) : (oe = xe, $(), oe = ""), X++;
      }
    }
    function C(T, I) {
      return T.scope && typeof T.scope == "string" && pe.openNode(we.classNameAliases[T.scope] || T.scope), T.beginScope && (T.beginScope._wrap ? (P(oe, we.classNameAliases[T.beginScope._wrap] || T.beginScope._wrap), oe = "") : T.beginScope._multi && (R(T.beginScope, I), oe = "")), G = Object.create(T, { parent: { value: G } }), G;
    }
    function q(T, I, X) {
      let ee = il(T.endRe, X);
      if (ee) {
        if (T["on:end"]) {
          const ve = new Ua(T);
          T["on:end"](I, ve), ve.isMatchIgnored && (ee = !1);
        }
        if (ee) {
          for (; T.endsParent && T.parent; )
            T = T.parent;
          return T;
        }
      }
      if (T.endsWithParent)
        return q(T.parent, I, X);
    }
    function z(T) {
      return G.matcher.regexIndex === 0 ? (oe += T[0], 1) : (Ae = !0, 0);
    }
    function se(T) {
      const I = T[0], X = T.rule, ee = new Ua(X), ve = [X.__beforeBegin, X["on:begin"]];
      for (const xe of ve)
        if (xe && (xe(T, ee), ee.isMatchIgnored))
          return z(I);
      return X.skip ? oe += I : (X.excludeBegin && (oe += I), B(), !X.returnBegin && !X.excludeBegin && (oe = I)), C(X, T), X.returnBegin ? 0 : I.length;
    }
    function ie(T) {
      const I = T[0], X = O.substring(T.index), ee = q(G, T, X);
      if (!ee)
        return Ka;
      const ve = G;
      G.endScope && G.endScope._wrap ? (B(), P(I, G.endScope._wrap)) : G.endScope && G.endScope._multi ? (B(), R(G.endScope, T)) : ve.skip ? oe += I : (ve.returnEnd || ve.excludeEnd || (oe += I), B(), ve.excludeEnd && (oe = I));
      do
        G.scope && pe.closeNode(), !G.skip && !G.subLanguage && (Ze += G.relevance), G = G.parent;
      while (G !== ee.parent);
      return ee.starts && C(ee.starts, T), ve.returnEnd ? 0 : I.length;
    }
    function ye() {
      const T = [];
      for (let I = G; I !== we; I = I.parent)
        I.scope && T.unshift(I.scope);
      T.forEach((I) => pe.openNode(I));
    }
    let ze = {};
    function Ge(T, I) {
      const X = I && I[0];
      if (oe += T, X == null)
        return B(), 0;
      if (ze.type === "begin" && I.type === "end" && ze.index === I.index && X === "") {
        if (oe += O.slice(I.index, I.index + 1), !a) {
          const ee = new Error(`0 width match regex (${E})`);
          throw ee.languageName = E, ee.badRule = ze.rule, ee;
        }
        return 1;
      }
      if (ze = I, I.type === "begin")
        return se(I);
      if (I.type === "illegal" && !Y) {
        const ee = new Error('Illegal lexeme "' + X + '" for mode "' + (G.scope || "<unnamed>") + '"');
        throw ee.mode = G, ee;
      } else if (I.type === "end") {
        const ee = ie(I);
        if (ee !== Ka)
          return ee;
      }
      if (I.type === "illegal" && X === "")
        return 1;
      if (Pe > 1e5 && Pe > I.index * 3)
        throw new Error("potential infinite loop, way more iterations than matches");
      return oe += X, X.length;
    }
    const we = H(E);
    if (!we)
      throw cn(o.replace("{}", E)), new Error('Unknown language: "' + E + '"');
    const rn = Fl(we);
    let qe = "", G = b || rn;
    const gn = {}, pe = new s.__emitter(s);
    ye();
    let oe = "", Ze = 0, De = 0, Pe = 0, Ae = !1;
    try {
      if (we.__emitTokens)
        we.__emitTokens(O, pe);
      else {
        for (G.matcher.considerAll(); ; ) {
          Pe++, Ae ? Ae = !1 : G.matcher.considerAll(), G.matcher.lastIndex = De;
          const T = G.matcher.exec(O);
          if (!T) break;
          const I = O.substring(De, T.index), X = Ge(I, T);
          De = T.index + X;
        }
        Ge(O.substring(De));
      }
      return pe.finalize(), qe = pe.toHTML(), {
        language: E,
        value: qe,
        relevance: Ze,
        illegal: !1,
        _emitter: pe,
        _top: G
      };
    } catch (T) {
      if (T.message && T.message.includes("Illegal"))
        return {
          language: E,
          value: At(O),
          illegal: !0,
          relevance: 0,
          _illegalBy: {
            message: T.message,
            index: De,
            context: O.slice(De - 100, De + 100),
            mode: T.mode,
            resultSoFar: qe
          },
          _emitter: pe
        };
      if (a)
        return {
          language: E,
          value: At(O),
          illegal: !1,
          relevance: 0,
          errorRaised: T,
          _emitter: pe,
          _top: G
        };
      throw T;
    }
  }
  function g(E) {
    const O = {
      value: At(E),
      illegal: !1,
      relevance: 0,
      _top: i,
      _emitter: new s.__emitter(s)
    };
    return O._emitter.addText(E), O;
  }
  function m(E, O) {
    O = O || s.languages || Object.keys(n);
    const Y = g(E), b = O.filter(H).filter(ae).map(
      (B) => f(B, E, !1)
    );
    b.unshift(Y);
    const N = b.sort((B, P) => {
      if (B.relevance !== P.relevance) return P.relevance - B.relevance;
      if (B.language && P.language) {
        if (H(B.language).supersetOf === P.language)
          return 1;
        if (H(P.language).supersetOf === B.language)
          return -1;
      }
      return 0;
    }), [U, $] = N, F = U;
    return F.secondBest = $, F;
  }
  function h(E, O, Y) {
    const b = O && t[O] || Y;
    E.classList.add("hljs"), E.classList.add(`language-${b}`);
  }
  function p(E) {
    let O = null;
    const Y = u(E);
    if (c(Y)) return;
    if (Q(
      "before:highlightElement",
      { el: E, language: Y }
    ), E.dataset.highlighted) {
      console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", E);
      return;
    }
    if (E.children.length > 0 && (s.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(E)), s.throwUnescapedHTML))
      throw new Gl(
        "One of your code blocks includes unescaped HTML.",
        E.innerHTML
      );
    O = E;
    const b = O.textContent, N = Y ? l(b, { language: Y, ignoreIllegals: !0 }) : m(b);
    E.innerHTML = N.value, E.dataset.highlighted = "yes", h(E, Y, N.language), E.result = {
      language: N.language,
      // TODO: remove with version 11.0
      re: N.relevance,
      relevance: N.relevance
    }, N.secondBest && (E.secondBest = {
      language: N.secondBest.language,
      relevance: N.secondBest.relevance
    }), Q("after:highlightElement", { el: E, result: N, text: b });
  }
  function v(E) {
    s = qa(s, E);
  }
  const y = () => {
    M(), bn("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
  };
  function _() {
    M(), bn("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
  }
  let S = !1;
  function M() {
    if (document.readyState === "loading") {
      S = !0;
      return;
    }
    document.querySelectorAll(s.cssSelector).forEach(p);
  }
  function x() {
    S && M();
  }
  typeof window < "u" && window.addEventListener && window.addEventListener("DOMContentLoaded", x, !1);
  function W(E, O) {
    let Y = null;
    try {
      Y = O(e);
    } catch (b) {
      if (cn("Language definition for '{}' could not be registered.".replace("{}", E)), a)
        cn(b);
      else
        throw b;
      Y = i;
    }
    Y.name || (Y.name = E), n[E] = Y, Y.rawDefinition = O.bind(null, e), Y.aliases && ge(Y.aliases, { languageName: E });
  }
  function K(E) {
    delete n[E];
    for (const O of Object.keys(t))
      t[O] === E && delete t[O];
  }
  function D() {
    return Object.keys(n);
  }
  function H(E) {
    return E = (E || "").toLowerCase(), n[E] || n[t[E]];
  }
  function ge(E, { languageName: O }) {
    typeof E == "string" && (E = [E]), E.forEach((Y) => {
      t[Y.toLowerCase()] = O;
    });
  }
  function ae(E) {
    const O = H(E);
    return O && !O.disableAutodetect;
  }
  function Ee(E) {
    E["before:highlightBlock"] && !E["before:highlightElement"] && (E["before:highlightElement"] = (O) => {
      E["before:highlightBlock"](
        Object.assign({ block: O.el }, O)
      );
    }), E["after:highlightBlock"] && !E["after:highlightElement"] && (E["after:highlightElement"] = (O) => {
      E["after:highlightBlock"](
        Object.assign({ block: O.el }, O)
      );
    });
  }
  function le(E) {
    Ee(E), r.push(E);
  }
  function te(E) {
    const O = r.indexOf(E);
    O !== -1 && r.splice(O, 1);
  }
  function Q(E, O) {
    const Y = E;
    r.forEach(function(b) {
      b[Y] && b[Y](O);
    });
  }
  function ue(E) {
    return bn("10.7.0", "highlightBlock will be removed entirely in v12.0"), bn("10.7.0", "Please use highlightElement now."), p(E);
  }
  Object.assign(e, {
    highlight: l,
    highlightAuto: m,
    highlightAll: M,
    highlightElement: p,
    // TODO: Remove with v12 API
    highlightBlock: ue,
    configure: v,
    initHighlighting: y,
    initHighlightingOnLoad: _,
    registerLanguage: W,
    unregisterLanguage: K,
    listLanguages: D,
    getLanguage: H,
    registerAliases: ge,
    autoDetection: ae,
    inherit: qa,
    addPlugin: le,
    removePlugin: te
  }), e.debugMode = function() {
    a = !1;
  }, e.safeMode = function() {
    a = !0;
  }, e.versionString = zl, e.regex = {
    concat: fn,
    lookahead: bo,
    either: Hr,
    optional: rl,
    anyNumberOfTimes: tl
  };
  for (const E in Vn)
    typeof Vn[E] == "object" && go(Vn[E]);
  return Object.assign(e, Vn), e;
}, yn = To({});
yn.newInstance = () => To({});
var Kl = yn;
yn.HighlightJS = yn;
yn.default = yn;
var xt, Ha;
function Hl() {
  if (Ha) return xt;
  Ha = 1;
  function e(n) {
    const t = n.regex, r = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), a = /[\p{L}0-9._:-]+/u, o = {
      className: "symbol",
      begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
    }, i = {
      begin: /\s/,
      contains: [
        {
          className: "keyword",
          begin: /#?[a-z_][a-z1-9_-]+/,
          illegal: /\n/
        }
      ]
    }, s = n.inherit(i, {
      begin: /\(/,
      end: /\)/
    }), c = n.inherit(n.APOS_STRING_MODE, { className: "string" }), u = n.inherit(n.QUOTE_STRING_MODE, { className: "string" }), l = {
      endsWithParent: !0,
      illegal: /</,
      relevance: 0,
      contains: [
        {
          className: "attr",
          begin: a,
          relevance: 0
        },
        {
          begin: /=\s*/,
          relevance: 0,
          contains: [
            {
              className: "string",
              endsParent: !0,
              variants: [
                {
                  begin: /"/,
                  end: /"/,
                  contains: [o]
                },
                {
                  begin: /'/,
                  end: /'/,
                  contains: [o]
                },
                { begin: /[^\s"'=<>`]+/ }
              ]
            }
          ]
        }
      ]
    };
    return {
      name: "HTML, XML",
      aliases: [
        "html",
        "xhtml",
        "rss",
        "atom",
        "xjb",
        "xsd",
        "xsl",
        "plist",
        "wsf",
        "svg"
      ],
      case_insensitive: !0,
      unicodeRegex: !0,
      contains: [
        {
          className: "meta",
          begin: /<![a-z]/,
          end: />/,
          relevance: 10,
          contains: [
            i,
            u,
            c,
            s,
            {
              begin: /\[/,
              end: /\]/,
              contains: [
                {
                  className: "meta",
                  begin: /<![a-z]/,
                  end: />/,
                  contains: [
                    i,
                    s,
                    u,
                    c
                  ]
                }
              ]
            }
          ]
        },
        n.COMMENT(
          /<!--/,
          /-->/,
          { relevance: 10 }
        ),
        {
          begin: /<!\[CDATA\[/,
          end: /\]\]>/,
          relevance: 10
        },
        o,
        // xml processing instructions
        {
          className: "meta",
          end: /\?>/,
          variants: [
            {
              begin: /<\?xml/,
              relevance: 10,
              contains: [
                u
              ]
            },
            {
              begin: /<\?[a-z][a-z0-9]+/
            }
          ]
        },
        {
          className: "tag",
          /*
          The lookahead pattern (?=...) ensures that 'begin' only matches
          '<style' as a single word, followed by a whitespace or an
          ending bracket.
          */
          begin: /<style(?=\s|>)/,
          end: />/,
          keywords: { name: "style" },
          contains: [l],
          starts: {
            end: /<\/style>/,
            returnEnd: !0,
            subLanguage: [
              "css",
              "xml"
            ]
          }
        },
        {
          className: "tag",
          // See the comment in the <style tag about the lookahead pattern
          begin: /<script(?=\s|>)/,
          end: />/,
          keywords: { name: "script" },
          contains: [l],
          starts: {
            end: /<\/script>/,
            returnEnd: !0,
            subLanguage: [
              "javascript",
              "handlebars",
              "xml"
            ]
          }
        },
        // we need this for now for jSX
        {
          className: "tag",
          begin: /<>|<\/>/
        },
        // open tag
        {
          className: "tag",
          begin: t.concat(
            /</,
            t.lookahead(t.concat(
              r,
              // <tag/>
              // <tag>
              // <tag ...
              t.either(/\/>/, />/, /\s/)
            ))
          ),
          end: /\/?>/,
          contains: [
            {
              className: "name",
              begin: r,
              relevance: 0,
              starts: l
            }
          ]
        },
        // close tag
        {
          className: "tag",
          begin: t.concat(
            /<\//,
            t.lookahead(t.concat(
              r,
              />/
            ))
          ),
          contains: [
            {
              className: "name",
              begin: r,
              relevance: 0
            },
            {
              begin: />/,
              relevance: 0,
              endsParent: !0
            }
          ]
        }
      ]
    };
  }
  return xt = e, xt;
}
var Rt, Wa;
function Wl() {
  if (Wa) return Rt;
  Wa = 1;
  function e(n) {
    const t = n.regex, r = {}, a = {
      begin: /\$\{/,
      end: /\}/,
      contains: [
        "self",
        {
          begin: /:-/,
          contains: [r]
        }
        // default values
      ]
    };
    Object.assign(r, {
      className: "variable",
      variants: [
        { begin: t.concat(
          /\$[\w\d#@][\w\d_]*/,
          // negative look-ahead tries to avoid matching patterns that are not
          // Perl at all like $ident$, @ident@, etc.
          "(?![\\w\\d])(?![$])"
        ) },
        a
      ]
    });
    const o = {
      className: "subst",
      begin: /\$\(/,
      end: /\)/,
      contains: [n.BACKSLASH_ESCAPE]
    }, i = n.inherit(
      n.COMMENT(),
      {
        match: [
          /(^|\s)/,
          /#.*$/
        ],
        scope: {
          2: "comment"
        }
      }
    ), s = {
      begin: /<<-?\s*(?=\w+)/,
      starts: { contains: [
        n.END_SAME_AS_BEGIN({
          begin: /(\w+)/,
          end: /(\w+)/,
          className: "string"
        })
      ] }
    }, c = {
      className: "string",
      begin: /"/,
      end: /"/,
      contains: [
        n.BACKSLASH_ESCAPE,
        r,
        o
      ]
    };
    o.contains.push(c);
    const u = {
      match: /\\"/
    }, l = {
      className: "string",
      begin: /'/,
      end: /'/
    }, f = {
      match: /\\'/
    }, g = {
      begin: /\$?\(\(/,
      end: /\)\)/,
      contains: [
        {
          begin: /\d+#[0-9a-f]+/,
          className: "number"
        },
        n.NUMBER_MODE,
        r
      ]
    }, m = [
      "fish",
      "bash",
      "zsh",
      "sh",
      "csh",
      "ksh",
      "tcsh",
      "dash",
      "scsh"
    ], h = n.SHEBANG({
      binary: `(${m.join("|")})`,
      relevance: 10
    }), p = {
      className: "function",
      begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
      returnBegin: !0,
      contains: [n.inherit(n.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
      relevance: 0
    }, v = [
      "if",
      "then",
      "else",
      "elif",
      "fi",
      "for",
      "while",
      "until",
      "in",
      "do",
      "done",
      "case",
      "esac",
      "function",
      "select"
    ], y = [
      "true",
      "false"
    ], _ = { match: /(\/[a-z._-]+)+/ }, S = [
      "break",
      "cd",
      "continue",
      "eval",
      "exec",
      "exit",
      "export",
      "getopts",
      "hash",
      "pwd",
      "readonly",
      "return",
      "shift",
      "test",
      "times",
      "trap",
      "umask",
      "unset"
    ], M = [
      "alias",
      "bind",
      "builtin",
      "caller",
      "command",
      "declare",
      "echo",
      "enable",
      "help",
      "let",
      "local",
      "logout",
      "mapfile",
      "printf",
      "read",
      "readarray",
      "source",
      "sudo",
      "type",
      "typeset",
      "ulimit",
      "unalias"
    ], x = [
      "autoload",
      "bg",
      "bindkey",
      "bye",
      "cap",
      "chdir",
      "clone",
      "comparguments",
      "compcall",
      "compctl",
      "compdescribe",
      "compfiles",
      "compgroups",
      "compquote",
      "comptags",
      "comptry",
      "compvalues",
      "dirs",
      "disable",
      "disown",
      "echotc",
      "echoti",
      "emulate",
      "fc",
      "fg",
      "float",
      "functions",
      "getcap",
      "getln",
      "history",
      "integer",
      "jobs",
      "kill",
      "limit",
      "log",
      "noglob",
      "popd",
      "print",
      "pushd",
      "pushln",
      "rehash",
      "sched",
      "setcap",
      "setopt",
      "stat",
      "suspend",
      "ttyctl",
      "unfunction",
      "unhash",
      "unlimit",
      "unsetopt",
      "vared",
      "wait",
      "whence",
      "where",
      "which",
      "zcompile",
      "zformat",
      "zftp",
      "zle",
      "zmodload",
      "zparseopts",
      "zprof",
      "zpty",
      "zregexparse",
      "zsocket",
      "zstyle",
      "ztcp"
    ], W = [
      "chcon",
      "chgrp",
      "chown",
      "chmod",
      "cp",
      "dd",
      "df",
      "dir",
      "dircolors",
      "ln",
      "ls",
      "mkdir",
      "mkfifo",
      "mknod",
      "mktemp",
      "mv",
      "realpath",
      "rm",
      "rmdir",
      "shred",
      "sync",
      "touch",
      "truncate",
      "vdir",
      "b2sum",
      "base32",
      "base64",
      "cat",
      "cksum",
      "comm",
      "csplit",
      "cut",
      "expand",
      "fmt",
      "fold",
      "head",
      "join",
      "md5sum",
      "nl",
      "numfmt",
      "od",
      "paste",
      "ptx",
      "pr",
      "sha1sum",
      "sha224sum",
      "sha256sum",
      "sha384sum",
      "sha512sum",
      "shuf",
      "sort",
      "split",
      "sum",
      "tac",
      "tail",
      "tr",
      "tsort",
      "unexpand",
      "uniq",
      "wc",
      "arch",
      "basename",
      "chroot",
      "date",
      "dirname",
      "du",
      "echo",
      "env",
      "expr",
      "factor",
      // "false", // keyword literal already
      "groups",
      "hostid",
      "id",
      "link",
      "logname",
      "nice",
      "nohup",
      "nproc",
      "pathchk",
      "pinky",
      "printenv",
      "printf",
      "pwd",
      "readlink",
      "runcon",
      "seq",
      "sleep",
      "stat",
      "stdbuf",
      "stty",
      "tee",
      "test",
      "timeout",
      // "true", // keyword literal already
      "tty",
      "uname",
      "unlink",
      "uptime",
      "users",
      "who",
      "whoami",
      "yes"
    ];
    return {
      name: "Bash",
      aliases: [
        "sh",
        "zsh"
      ],
      keywords: {
        $pattern: /\b[a-z][a-z0-9._-]+\b/,
        keyword: v,
        literal: y,
        built_in: [
          ...S,
          ...M,
          // Shell modifiers
          "set",
          "shopt",
          ...x,
          ...W
        ]
      },
      contains: [
        h,
        // to catch known shells and boost relevancy
        n.SHEBANG(),
        // to catch unknown shells but still highlight the shebang
        p,
        g,
        i,
        s,
        _,
        c,
        u,
        l,
        f,
        r
      ]
    };
  }
  return Rt = e, Rt;
}
var Ct, Ya;
function Yl() {
  if (Ya) return Ct;
  Ya = 1;
  function e(n) {
    const t = n.regex, r = n.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), a = "decltype\\(auto\\)", o = "[a-zA-Z_]\\w*::", s = "(" + a + "|" + t.optional(o) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")", c = {
      className: "type",
      variants: [
        { begin: "\\b[a-z\\d_]*_t\\b" },
        { match: /\batomic_[a-z]{3,6}\b/ }
      ]
    }, l = {
      className: "string",
      variants: [
        {
          begin: '(u8?|U|L)?"',
          end: '"',
          illegal: "\\n",
          contains: [n.BACKSLASH_ESCAPE]
        },
        {
          begin: "(u8?|U|L)?'(" + "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)" + "|.)",
          end: "'",
          illegal: "."
        },
        n.END_SAME_AS_BEGIN({
          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
          end: /\)([^()\\ ]{0,16})"/
        })
      ]
    }, f = {
      className: "number",
      variants: [
        { begin: "\\b(0b[01']+)" },
        { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)" },
        { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }
      ],
      relevance: 0
    }, g = {
      className: "meta",
      begin: /#\s*[a-z]+\b/,
      end: /$/,
      keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef elifdef elifndef include" },
      contains: [
        {
          begin: /\\\n/,
          relevance: 0
        },
        n.inherit(l, { className: "string" }),
        {
          className: "string",
          begin: /<.*?>/
        },
        r,
        n.C_BLOCK_COMMENT_MODE
      ]
    }, m = {
      className: "title",
      begin: t.optional(o) + n.IDENT_RE,
      relevance: 0
    }, h = t.optional(o) + n.IDENT_RE + "\\s*\\(", y = {
      keyword: [
        "asm",
        "auto",
        "break",
        "case",
        "continue",
        "default",
        "do",
        "else",
        "enum",
        "extern",
        "for",
        "fortran",
        "goto",
        "if",
        "inline",
        "register",
        "restrict",
        "return",
        "sizeof",
        "typeof",
        "typeof_unqual",
        "struct",
        "switch",
        "typedef",
        "union",
        "volatile",
        "while",
        "_Alignas",
        "_Alignof",
        "_Atomic",
        "_Generic",
        "_Noreturn",
        "_Static_assert",
        "_Thread_local",
        // aliases
        "alignas",
        "alignof",
        "noreturn",
        "static_assert",
        "thread_local",
        // not a C keyword but is, for all intents and purposes, treated exactly like one.
        "_Pragma"
      ],
      type: [
        "float",
        "double",
        "signed",
        "unsigned",
        "int",
        "short",
        "long",
        "char",
        "void",
        "_Bool",
        "_BitInt",
        "_Complex",
        "_Imaginary",
        "_Decimal32",
        "_Decimal64",
        "_Decimal96",
        "_Decimal128",
        "_Decimal64x",
        "_Decimal128x",
        "_Float16",
        "_Float32",
        "_Float64",
        "_Float128",
        "_Float32x",
        "_Float64x",
        "_Float128x",
        // modifiers
        "const",
        "static",
        "constexpr",
        // aliases
        "complex",
        "bool",
        "imaginary"
      ],
      literal: "true false NULL",
      // TODO: apply hinting work similar to what was done in cpp.js
      built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
    }, _ = [
      g,
      c,
      r,
      n.C_BLOCK_COMMENT_MODE,
      f,
      l
    ], S = {
      // This mode covers expression context where we can't expect a function
      // definition and shouldn't highlight anything that looks like one:
      // `return some()`, `else if()`, `(x*sum(1, 2))`
      variants: [
        {
          begin: /=/,
          end: /;/
        },
        {
          begin: /\(/,
          end: /\)/
        },
        {
          beginKeywords: "new throw return else",
          end: /;/
        }
      ],
      keywords: y,
      contains: _.concat([
        {
          begin: /\(/,
          end: /\)/,
          keywords: y,
          contains: _.concat(["self"]),
          relevance: 0
        }
      ]),
      relevance: 0
    }, M = {
      begin: "(" + s + "[\\*&\\s]+)+" + h,
      returnBegin: !0,
      end: /[{;=]/,
      excludeEnd: !0,
      keywords: y,
      illegal: /[^\w\s\*&:<>.]/,
      contains: [
        {
          // to prevent it from being confused as the function title
          begin: a,
          keywords: y,
          relevance: 0
        },
        {
          begin: h,
          returnBegin: !0,
          contains: [n.inherit(m, { className: "title.function" })],
          relevance: 0
        },
        // allow for multiple declarations, e.g.:
        // extern void f(int), g(char);
        {
          relevance: 0,
          match: /,/
        },
        {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: y,
          relevance: 0,
          contains: [
            r,
            n.C_BLOCK_COMMENT_MODE,
            l,
            f,
            c,
            // Count matching parentheses.
            {
              begin: /\(/,
              end: /\)/,
              keywords: y,
              relevance: 0,
              contains: [
                "self",
                r,
                n.C_BLOCK_COMMENT_MODE,
                l,
                f,
                c
              ]
            }
          ]
        },
        c,
        r,
        n.C_BLOCK_COMMENT_MODE,
        g
      ]
    };
    return {
      name: "C",
      aliases: ["h"],
      keywords: y,
      // Until differentiations are added between `c` and `cpp`, `c` will
      // not be auto-detected to avoid auto-detect conflicts between C and C++
      disableAutodetect: !0,
      illegal: "</",
      contains: [].concat(
        S,
        M,
        _,
        [
          g,
          {
            begin: n.IDENT_RE + "::",
            keywords: y
          },
          {
            className: "class",
            beginKeywords: "enum class struct union",
            end: /[{;:<>=]/,
            contains: [
              { beginKeywords: "final class struct" },
              n.TITLE_MODE
            ]
          }
        ]
      ),
      exports: {
        preprocessor: g,
        strings: l,
        keywords: y
      }
    };
  }
  return Ct = e, Ct;
}
var It, Za;
function Zl() {
  if (Za) return It;
  Za = 1;
  function e(n) {
    const t = n.regex, r = n.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), a = "decltype\\(auto\\)", o = "[a-zA-Z_]\\w*::", s = "(?!struct)(" + a + "|" + t.optional(o) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")", c = {
      className: "type",
      begin: "\\b[a-z\\d_]*_t\\b"
    }, l = {
      className: "string",
      variants: [
        {
          begin: '(u8?|U|L)?"',
          end: '"',
          illegal: "\\n",
          contains: [n.BACKSLASH_ESCAPE]
        },
        {
          begin: "(u8?|U|L)?'(" + "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)" + "|.)",
          end: "'",
          illegal: "."
        },
        n.END_SAME_AS_BEGIN({
          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
          end: /\)([^()\\ ]{0,16})"/
        })
      ]
    }, f = {
      className: "number",
      variants: [
        // Floating-point literal.
        {
          begin: "[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"
        },
        // Integer literal.
        {
          begin: "[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"
          // Note: there are user-defined literal suffixes too, but perhaps having the custom suffix not part of the
          // literal highlight actually makes it stand out more.
        }
      ],
      relevance: 0
    }, g = {
      className: "meta",
      begin: /#\s*[a-z]+\b/,
      end: /$/,
      keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" },
      contains: [
        {
          begin: /\\\n/,
          relevance: 0
        },
        n.inherit(l, { className: "string" }),
        {
          className: "string",
          begin: /<.*?>/
        },
        r,
        n.C_BLOCK_COMMENT_MODE
      ]
    }, m = {
      className: "title",
      begin: t.optional(o) + n.IDENT_RE,
      relevance: 0
    }, h = t.optional(o) + n.IDENT_RE + "\\s*\\(", p = [
      "alignas",
      "alignof",
      "and",
      "and_eq",
      "asm",
      "atomic_cancel",
      "atomic_commit",
      "atomic_noexcept",
      "auto",
      "bitand",
      "bitor",
      "break",
      "case",
      "catch",
      "class",
      "co_await",
      "co_return",
      "co_yield",
      "compl",
      "concept",
      "const_cast|10",
      "consteval",
      "constexpr",
      "constinit",
      "continue",
      "decltype",
      "default",
      "delete",
      "do",
      "dynamic_cast|10",
      "else",
      "enum",
      "explicit",
      "export",
      "extern",
      "false",
      "final",
      "for",
      "friend",
      "goto",
      "if",
      "import",
      "inline",
      "module",
      "mutable",
      "namespace",
      "new",
      "noexcept",
      "not",
      "not_eq",
      "nullptr",
      "operator",
      "or",
      "or_eq",
      "override",
      "private",
      "protected",
      "public",
      "reflexpr",
      "register",
      "reinterpret_cast|10",
      "requires",
      "return",
      "sizeof",
      "static_assert",
      "static_cast|10",
      "struct",
      "switch",
      "synchronized",
      "template",
      "this",
      "thread_local",
      "throw",
      "transaction_safe",
      "transaction_safe_dynamic",
      "true",
      "try",
      "typedef",
      "typeid",
      "typename",
      "union",
      "using",
      "virtual",
      "volatile",
      "while",
      "xor",
      "xor_eq"
    ], v = [
      "bool",
      "char",
      "char16_t",
      "char32_t",
      "char8_t",
      "double",
      "float",
      "int",
      "long",
      "short",
      "void",
      "wchar_t",
      "unsigned",
      "signed",
      "const",
      "static"
    ], y = [
      "any",
      "auto_ptr",
      "barrier",
      "binary_semaphore",
      "bitset",
      "complex",
      "condition_variable",
      "condition_variable_any",
      "counting_semaphore",
      "deque",
      "false_type",
      "future",
      "imaginary",
      "initializer_list",
      "istringstream",
      "jthread",
      "latch",
      "lock_guard",
      "multimap",
      "multiset",
      "mutex",
      "optional",
      "ostringstream",
      "packaged_task",
      "pair",
      "promise",
      "priority_queue",
      "queue",
      "recursive_mutex",
      "recursive_timed_mutex",
      "scoped_lock",
      "set",
      "shared_future",
      "shared_lock",
      "shared_mutex",
      "shared_timed_mutex",
      "shared_ptr",
      "stack",
      "string_view",
      "stringstream",
      "timed_mutex",
      "thread",
      "true_type",
      "tuple",
      "unique_lock",
      "unique_ptr",
      "unordered_map",
      "unordered_multimap",
      "unordered_multiset",
      "unordered_set",
      "variant",
      "vector",
      "weak_ptr",
      "wstring",
      "wstring_view"
    ], _ = [
      "abort",
      "abs",
      "acos",
      "apply",
      "as_const",
      "asin",
      "atan",
      "atan2",
      "calloc",
      "ceil",
      "cerr",
      "cin",
      "clog",
      "cos",
      "cosh",
      "cout",
      "declval",
      "endl",
      "exchange",
      "exit",
      "exp",
      "fabs",
      "floor",
      "fmod",
      "forward",
      "fprintf",
      "fputs",
      "free",
      "frexp",
      "fscanf",
      "future",
      "invoke",
      "isalnum",
      "isalpha",
      "iscntrl",
      "isdigit",
      "isgraph",
      "islower",
      "isprint",
      "ispunct",
      "isspace",
      "isupper",
      "isxdigit",
      "labs",
      "launder",
      "ldexp",
      "log",
      "log10",
      "make_pair",
      "make_shared",
      "make_shared_for_overwrite",
      "make_tuple",
      "make_unique",
      "malloc",
      "memchr",
      "memcmp",
      "memcpy",
      "memset",
      "modf",
      "move",
      "pow",
      "printf",
      "putchar",
      "puts",
      "realloc",
      "scanf",
      "sin",
      "sinh",
      "snprintf",
      "sprintf",
      "sqrt",
      "sscanf",
      "std",
      "stderr",
      "stdin",
      "stdout",
      "strcat",
      "strchr",
      "strcmp",
      "strcpy",
      "strcspn",
      "strlen",
      "strncat",
      "strncmp",
      "strncpy",
      "strpbrk",
      "strrchr",
      "strspn",
      "strstr",
      "swap",
      "tan",
      "tanh",
      "terminate",
      "to_underlying",
      "tolower",
      "toupper",
      "vfprintf",
      "visit",
      "vprintf",
      "vsprintf"
    ], x = {
      type: v,
      keyword: p,
      literal: [
        "NULL",
        "false",
        "nullopt",
        "nullptr",
        "true"
      ],
      built_in: ["_Pragma"],
      _type_hints: y
    }, W = {
      className: "function.dispatch",
      relevance: 0,
      keywords: {
        // Only for relevance, not highlighting.
        _hint: _
      },
      begin: t.concat(
        /\b/,
        /(?!decltype)/,
        /(?!if)/,
        /(?!for)/,
        /(?!switch)/,
        /(?!while)/,
        n.IDENT_RE,
        t.lookahead(/(<[^<>]+>|)\s*\(/)
      )
    }, K = [
      W,
      g,
      c,
      r,
      n.C_BLOCK_COMMENT_MODE,
      f,
      l
    ], D = {
      // This mode covers expression context where we can't expect a function
      // definition and shouldn't highlight anything that looks like one:
      // `return some()`, `else if()`, `(x*sum(1, 2))`
      variants: [
        {
          begin: /=/,
          end: /;/
        },
        {
          begin: /\(/,
          end: /\)/
        },
        {
          beginKeywords: "new throw return else",
          end: /;/
        }
      ],
      keywords: x,
      contains: K.concat([
        {
          begin: /\(/,
          end: /\)/,
          keywords: x,
          contains: K.concat(["self"]),
          relevance: 0
        }
      ]),
      relevance: 0
    }, H = {
      className: "function",
      begin: "(" + s + "[\\*&\\s]+)+" + h,
      returnBegin: !0,
      end: /[{;=]/,
      excludeEnd: !0,
      keywords: x,
      illegal: /[^\w\s\*&:<>.]/,
      contains: [
        {
          // to prevent it from being confused as the function title
          begin: a,
          keywords: x,
          relevance: 0
        },
        {
          begin: h,
          returnBegin: !0,
          contains: [m],
          relevance: 0
        },
        // needed because we do not have look-behind on the below rule
        // to prevent it from grabbing the final : in a :: pair
        {
          begin: /::/,
          relevance: 0
        },
        // initializers
        {
          begin: /:/,
          endsWithParent: !0,
          contains: [
            l,
            f
          ]
        },
        // allow for multiple declarations, e.g.:
        // extern void f(int), g(char);
        {
          relevance: 0,
          match: /,/
        },
        {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: x,
          relevance: 0,
          contains: [
            r,
            n.C_BLOCK_COMMENT_MODE,
            l,
            f,
            c,
            // Count matching parentheses.
            {
              begin: /\(/,
              end: /\)/,
              keywords: x,
              relevance: 0,
              contains: [
                "self",
                r,
                n.C_BLOCK_COMMENT_MODE,
                l,
                f,
                c
              ]
            }
          ]
        },
        c,
        r,
        n.C_BLOCK_COMMENT_MODE,
        g
      ]
    };
    return {
      name: "C++",
      aliases: [
        "cc",
        "c++",
        "h++",
        "hpp",
        "hh",
        "hxx",
        "cxx"
      ],
      keywords: x,
      illegal: "</",
      classNameAliases: { "function.dispatch": "built_in" },
      contains: [].concat(
        D,
        H,
        W,
        K,
        [
          g,
          {
            // containers: ie, `vector <int> rooms (9);`
            begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
            end: ">",
            keywords: x,
            contains: [
              "self",
              c
            ]
          },
          {
            begin: n.IDENT_RE + "::",
            keywords: x
          },
          {
            match: [
              // extra complexity to deal with `enum class` and `enum struct`
              /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
              /\s+/,
              /\w+/
            ],
            className: {
              1: "keyword",
              3: "title.class"
            }
          }
        ]
      )
    };
  }
  return It = e, It;
}
var Mt, Xa;
function Xl() {
  if (Xa) return Mt;
  Xa = 1;
  function e(n) {
    const t = [
      "bool",
      "byte",
      "char",
      "decimal",
      "delegate",
      "double",
      "dynamic",
      "enum",
      "float",
      "int",
      "long",
      "nint",
      "nuint",
      "object",
      "sbyte",
      "short",
      "string",
      "ulong",
      "uint",
      "ushort"
    ], r = [
      "public",
      "private",
      "protected",
      "static",
      "internal",
      "protected",
      "abstract",
      "async",
      "extern",
      "override",
      "unsafe",
      "virtual",
      "new",
      "sealed",
      "partial"
    ], a = [
      "default",
      "false",
      "null",
      "true"
    ], o = [
      "abstract",
      "as",
      "base",
      "break",
      "case",
      "catch",
      "class",
      "const",
      "continue",
      "do",
      "else",
      "event",
      "explicit",
      "extern",
      "finally",
      "fixed",
      "for",
      "foreach",
      "goto",
      "if",
      "implicit",
      "in",
      "interface",
      "internal",
      "is",
      "lock",
      "namespace",
      "new",
      "operator",
      "out",
      "override",
      "params",
      "private",
      "protected",
      "public",
      "readonly",
      "record",
      "ref",
      "return",
      "scoped",
      "sealed",
      "sizeof",
      "stackalloc",
      "static",
      "struct",
      "switch",
      "this",
      "throw",
      "try",
      "typeof",
      "unchecked",
      "unsafe",
      "using",
      "virtual",
      "void",
      "volatile",
      "while"
    ], i = [
      "add",
      "alias",
      "and",
      "ascending",
      "async",
      "await",
      "by",
      "descending",
      "equals",
      "from",
      "get",
      "global",
      "group",
      "init",
      "into",
      "join",
      "let",
      "nameof",
      "not",
      "notnull",
      "on",
      "or",
      "orderby",
      "partial",
      "remove",
      "select",
      "set",
      "unmanaged",
      "value|0",
      "var",
      "when",
      "where",
      "with",
      "yield"
    ], s = {
      keyword: o.concat(i),
      built_in: t,
      literal: a
    }, c = n.inherit(n.TITLE_MODE, { begin: "[a-zA-Z](\\.?\\w)*" }), u = {
      className: "number",
      variants: [
        { begin: "\\b(0b[01']+)" },
        { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)" },
        { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }
      ],
      relevance: 0
    }, l = {
      className: "string",
      begin: /"""("*)(?!")(.|\n)*?"""\1/,
      relevance: 1
    }, f = {
      className: "string",
      begin: '@"',
      end: '"',
      contains: [{ begin: '""' }]
    }, g = n.inherit(f, { illegal: /\n/ }), m = {
      className: "subst",
      begin: /\{/,
      end: /\}/,
      keywords: s
    }, h = n.inherit(m, { illegal: /\n/ }), p = {
      className: "string",
      begin: /\$"/,
      end: '"',
      illegal: /\n/,
      contains: [
        { begin: /\{\{/ },
        { begin: /\}\}/ },
        n.BACKSLASH_ESCAPE,
        h
      ]
    }, v = {
      className: "string",
      begin: /\$@"/,
      end: '"',
      contains: [
        { begin: /\{\{/ },
        { begin: /\}\}/ },
        { begin: '""' },
        m
      ]
    }, y = n.inherit(v, {
      illegal: /\n/,
      contains: [
        { begin: /\{\{/ },
        { begin: /\}\}/ },
        { begin: '""' },
        h
      ]
    });
    m.contains = [
      v,
      p,
      f,
      n.APOS_STRING_MODE,
      n.QUOTE_STRING_MODE,
      u,
      n.C_BLOCK_COMMENT_MODE
    ], h.contains = [
      y,
      p,
      g,
      n.APOS_STRING_MODE,
      n.QUOTE_STRING_MODE,
      u,
      n.inherit(n.C_BLOCK_COMMENT_MODE, { illegal: /\n/ })
    ];
    const _ = { variants: [
      l,
      v,
      p,
      f,
      n.APOS_STRING_MODE,
      n.QUOTE_STRING_MODE
    ] }, S = {
      begin: "<",
      end: ">",
      contains: [
        { beginKeywords: "in out" },
        c
      ]
    }, M = n.IDENT_RE + "(<" + n.IDENT_RE + "(\\s*,\\s*" + n.IDENT_RE + ")*>)?(\\[\\])?", x = {
      // prevents expressions like `@class` from incorrect flagging
      // `class` as a keyword
      begin: "@" + n.IDENT_RE,
      relevance: 0
    };
    return {
      name: "C#",
      aliases: [
        "cs",
        "c#"
      ],
      keywords: s,
      illegal: /::/,
      contains: [
        n.COMMENT(
          "///",
          "$",
          {
            returnBegin: !0,
            contains: [
              {
                className: "doctag",
                variants: [
                  {
                    begin: "///",
                    relevance: 0
                  },
                  { begin: "<!--|-->" },
                  {
                    begin: "</?",
                    end: ">"
                  }
                ]
              }
            ]
          }
        ),
        n.C_LINE_COMMENT_MODE,
        n.C_BLOCK_COMMENT_MODE,
        {
          className: "meta",
          begin: "#",
          end: "$",
          keywords: { keyword: "if else elif endif define undef warning error line region endregion pragma checksum" }
        },
        _,
        u,
        {
          beginKeywords: "class interface",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:,]/,
          contains: [
            { beginKeywords: "where class" },
            c,
            S,
            n.C_LINE_COMMENT_MODE,
            n.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          beginKeywords: "namespace",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:]/,
          contains: [
            c,
            n.C_LINE_COMMENT_MODE,
            n.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          beginKeywords: "record",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:]/,
          contains: [
            c,
            S,
            n.C_LINE_COMMENT_MODE,
            n.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          // [Attributes("")]
          className: "meta",
          begin: "^\\s*\\[(?=[\\w])",
          excludeBegin: !0,
          end: "\\]",
          excludeEnd: !0,
          contains: [
            {
              className: "string",
              begin: /"/,
              end: /"/
            }
          ]
        },
        {
          // Expression keywords prevent 'keyword Name(...)' from being
          // recognized as a function definition
          beginKeywords: "new return throw await else",
          relevance: 0
        },
        {
          className: "function",
          begin: "(" + M + "\\s+)+" + n.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
          returnBegin: !0,
          end: /\s*[{;=]/,
          excludeEnd: !0,
          keywords: s,
          contains: [
            // prevents these from being highlighted `title`
            {
              beginKeywords: r.join(" "),
              relevance: 0
            },
            {
              begin: n.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
              returnBegin: !0,
              contains: [
                n.TITLE_MODE,
                S
              ],
              relevance: 0
            },
            { match: /\(\)/ },
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: s,
              relevance: 0,
              contains: [
                _,
                u,
                n.C_BLOCK_COMMENT_MODE
              ]
            },
            n.C_LINE_COMMENT_MODE,
            n.C_BLOCK_COMMENT_MODE
          ]
        },
        x
      ]
    };
  }
  return Mt = e, Mt;
}
var Lt, Va;
function Vl() {
  if (Va) return Lt;
  Va = 1;
  const e = (u) => ({
    IMPORTANT: {
      scope: "meta",
      begin: "!important"
    },
    BLOCK_COMMENT: u.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
    },
    FUNCTION_DISPATCH: {
      className: "built_in",
      begin: /[\w-]+(?=\()/
    },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [
        u.APOS_STRING_MODE,
        u.QUOTE_STRING_MODE
      ]
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin: u.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    CSS_VARIABLE: {
      className: "attr",
      begin: /--[A-Za-z_][A-Za-z0-9_-]*/
    }
  }), n = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "optgroup",
    "option",
    "p",
    "picture",
    "q",
    "quote",
    "samp",
    "section",
    "select",
    "source",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video"
  ], t = [
    "defs",
    "g",
    "marker",
    "mask",
    "pattern",
    "svg",
    "switch",
    "symbol",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feFlood",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMorphology",
    "feOffset",
    "feSpecularLighting",
    "feTile",
    "feTurbulence",
    "linearGradient",
    "radialGradient",
    "stop",
    "circle",
    "ellipse",
    "image",
    "line",
    "path",
    "polygon",
    "polyline",
    "rect",
    "text",
    "use",
    "textPath",
    "tspan",
    "foreignObject",
    "clipPath"
  ], r = [
    ...n,
    ...t
  ], a = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    // TODO: find a better solution?
    "min-width",
    "max-width",
    "min-height",
    "max-height"
  ].sort().reverse(), o = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    // dir()
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    // has()
    "host",
    // host or host()
    "host-context",
    // host-context()
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    // is()
    "lang",
    // lang()
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    // not()
    "nth-child",
    // nth-child()
    "nth-col",
    // nth-col()
    "nth-last-child",
    // nth-last-child()
    "nth-last-col",
    // nth-last-col()
    "nth-last-of-type",
    //nth-last-of-type()
    "nth-of-type",
    //nth-of-type()
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where"
    // where()
  ].sort().reverse(), i = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error"
  ].sort().reverse(), s = [
    "accent-color",
    "align-content",
    "align-items",
    "align-self",
    "alignment-baseline",
    "all",
    "animation",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-timing-function",
    "appearance",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-repeat",
    "background-size",
    "baseline-shift",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-end-end-radius",
    "border-end-start-radius",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-start-end-radius",
    "border-start-start-radius",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-decoration-break",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "cx",
    "cy",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "color-scheme",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "direction",
    "display",
    "dominant-baseline",
    "empty-cells",
    "enable-background",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flow",
    "flood-color",
    "flood-opacity",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-size",
    "font-size-adjust",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-variant",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "gap",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "inline-size",
    "inset",
    "inset-block",
    "inset-block-end",
    "inset-block-start",
    "inset-inline",
    "inset-inline-end",
    "inset-inline-start",
    "isolation",
    "kerning",
    "justify-content",
    "justify-items",
    "justify-self",
    "left",
    "letter-spacing",
    "lighting-color",
    "line-break",
    "line-height",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "marker",
    "marker-end",
    "marker-mid",
    "marker-start",
    "mask",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "pointer-events",
    "position",
    "quotes",
    "r",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "rotate",
    "row-gap",
    "scale",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "shape-rendering",
    "stop-color",
    "stop-opacity",
    "stroke",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "speak",
    "speak-as",
    "src",
    // @font-face
    "tab-size",
    "table-layout",
    "text-anchor",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-skip-ink",
    "text-decoration-style",
    "text-decoration-thickness",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-transform",
    "text-underline-offset",
    "text-underline-position",
    "top",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "translate",
    "unicode-bidi",
    "vector-effect",
    "vertical-align",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "x",
    "y",
    "z-index"
  ].sort().reverse();
  function c(u) {
    const l = u.regex, f = e(u), g = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, m = "and or not only", h = /@-?\w[\w]*(-\w+)*/, p = "[a-zA-Z-][a-zA-Z0-9_-]*", v = [
      u.APOS_STRING_MODE,
      u.QUOTE_STRING_MODE
    ];
    return {
      name: "CSS",
      case_insensitive: !0,
      illegal: /[=|'\$]/,
      keywords: { keyframePosition: "from to" },
      classNameAliases: {
        // for visual continuity with `tag {}` and because we
        // don't have a great class for this?
        keyframePosition: "selector-tag"
      },
      contains: [
        f.BLOCK_COMMENT,
        g,
        // to recognize keyframe 40% etc which are outside the scope of our
        // attribute value mode
        f.CSS_NUMBER_MODE,
        {
          className: "selector-id",
          begin: /#[A-Za-z0-9_-]+/,
          relevance: 0
        },
        {
          className: "selector-class",
          begin: "\\." + p,
          relevance: 0
        },
        f.ATTRIBUTE_SELECTOR_MODE,
        {
          className: "selector-pseudo",
          variants: [
            { begin: ":(" + o.join("|") + ")" },
            { begin: ":(:)?(" + i.join("|") + ")" }
          ]
        },
        // we may actually need this (12/2020)
        // { // pseudo-selector params
        //   begin: /\(/,
        //   end: /\)/,
        //   contains: [ hljs.CSS_NUMBER_MODE ]
        // },
        f.CSS_VARIABLE,
        {
          className: "attribute",
          begin: "\\b(" + s.join("|") + ")\\b"
        },
        // attribute values
        {
          begin: /:/,
          end: /[;}{]/,
          contains: [
            f.BLOCK_COMMENT,
            f.HEXCOLOR,
            f.IMPORTANT,
            f.CSS_NUMBER_MODE,
            ...v,
            // needed to highlight these as strings and to avoid issues with
            // illegal characters that might be inside urls that would tigger the
            // languages illegal stack
            {
              begin: /(url|data-uri)\(/,
              end: /\)/,
              relevance: 0,
              // from keywords
              keywords: { built_in: "url data-uri" },
              contains: [
                ...v,
                {
                  className: "string",
                  // any character other than `)` as in `url()` will be the start
                  // of a string, which ends with `)` (from the parent mode)
                  begin: /[^)]/,
                  endsWithParent: !0,
                  excludeEnd: !0
                }
              ]
            },
            f.FUNCTION_DISPATCH
          ]
        },
        {
          begin: l.lookahead(/@/),
          end: "[{;]",
          relevance: 0,
          illegal: /:/,
          // break on Less variables @var: ...
          contains: [
            {
              className: "keyword",
              begin: h
            },
            {
              begin: /\s/,
              endsWithParent: !0,
              excludeEnd: !0,
              relevance: 0,
              keywords: {
                $pattern: /[a-z-]+/,
                keyword: m,
                attribute: a.join(" ")
              },
              contains: [
                {
                  begin: /[a-z-]+(?=:)/,
                  className: "attribute"
                },
                ...v,
                f.CSS_NUMBER_MODE
              ]
            }
          ]
        },
        {
          className: "selector-tag",
          begin: "\\b(" + r.join("|") + ")\\b"
        }
      ]
    };
  }
  return Lt = c, Lt;
}
var Dt, ja;
function jl() {
  if (ja) return Dt;
  ja = 1;
  function e(n) {
    const t = n.regex, r = {
      begin: /<\/?[A-Za-z_]/,
      end: ">",
      subLanguage: "xml",
      relevance: 0
    }, a = {
      begin: "^[-\\*]{3,}",
      end: "$"
    }, o = {
      className: "code",
      variants: [
        // TODO: fix to allow these to work with sublanguage also
        { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
        { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
        // needed to allow markdown as a sublanguage to work
        {
          begin: "```",
          end: "```+[ ]*$"
        },
        {
          begin: "~~~",
          end: "~~~+[ ]*$"
        },
        { begin: "`.+?`" },
        {
          begin: "(?=^( {4}|\\t))",
          // use contains to gobble up multiple lines to allow the block to be whatever size
          // but only have a single open/close tag vs one per line
          contains: [
            {
              begin: "^( {4}|\\t)",
              end: "(\\n)$"
            }
          ],
          relevance: 0
        }
      ]
    }, i = {
      className: "bullet",
      begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
      end: "\\s+",
      excludeEnd: !0
    }, s = {
      begin: /^\[[^\n]+\]:/,
      returnBegin: !0,
      contains: [
        {
          className: "symbol",
          begin: /\[/,
          end: /\]/,
          excludeBegin: !0,
          excludeEnd: !0
        },
        {
          className: "link",
          begin: /:\s*/,
          end: /$/,
          excludeBegin: !0
        }
      ]
    }, c = /[A-Za-z][A-Za-z0-9+.-]*/, u = {
      variants: [
        // too much like nested array access in so many languages
        // to have any real relevance
        {
          begin: /\[.+?\]\[.*?\]/,
          relevance: 0
        },
        // popular internet URLs
        {
          begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
          relevance: 2
        },
        {
          begin: t.concat(/\[.+?\]\(/, c, /:\/\/.*?\)/),
          relevance: 2
        },
        // relative urls
        {
          begin: /\[.+?\]\([./?&#].*?\)/,
          relevance: 1
        },
        // whatever else, lower relevance (might not be a link at all)
        {
          begin: /\[.*?\]\(.*?\)/,
          relevance: 0
        }
      ],
      returnBegin: !0,
      contains: [
        {
          // empty strings for alt or link text
          match: /\[(?=\])/
        },
        {
          className: "string",
          relevance: 0,
          begin: "\\[",
          end: "\\]",
          excludeBegin: !0,
          returnEnd: !0
        },
        {
          className: "link",
          relevance: 0,
          begin: "\\]\\(",
          end: "\\)",
          excludeBegin: !0,
          excludeEnd: !0
        },
        {
          className: "symbol",
          relevance: 0,
          begin: "\\]\\[",
          end: "\\]",
          excludeBegin: !0,
          excludeEnd: !0
        }
      ]
    }, l = {
      className: "strong",
      contains: [],
      // defined later
      variants: [
        {
          begin: /_{2}(?!\s)/,
          end: /_{2}/
        },
        {
          begin: /\*{2}(?!\s)/,
          end: /\*{2}/
        }
      ]
    }, f = {
      className: "emphasis",
      contains: [],
      // defined later
      variants: [
        {
          begin: /\*(?![*\s])/,
          end: /\*/
        },
        {
          begin: /_(?![_\s])/,
          end: /_/,
          relevance: 0
        }
      ]
    }, g = n.inherit(l, { contains: [] }), m = n.inherit(f, { contains: [] });
    l.contains.push(m), f.contains.push(g);
    let h = [
      r,
      u
    ];
    return [
      l,
      f,
      g,
      m
    ].forEach((_) => {
      _.contains = _.contains.concat(h);
    }), h = h.concat(l, f), {
      name: "Markdown",
      aliases: [
        "md",
        "mkdown",
        "mkd"
      ],
      contains: [
        {
          className: "section",
          variants: [
            {
              begin: "^#{1,6}",
              end: "$",
              contains: h
            },
            {
              begin: "(?=^.+?\\n[=-]{2,}$)",
              contains: [
                { begin: "^[=-]*$" },
                {
                  begin: "^",
                  end: "\\n",
                  contains: h
                }
              ]
            }
          ]
        },
        r,
        i,
        l,
        f,
        {
          className: "quote",
          begin: "^>\\s+",
          contains: h,
          end: "$"
        },
        o,
        a,
        u,
        s,
        {
          //https://spec.commonmark.org/0.31.2/#entity-references
          scope: "literal",
          match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/
        }
      ]
    };
  }
  return Dt = e, Dt;
}
var Pt, Qa;
function Ql() {
  if (Qa) return Pt;
  Qa = 1;
  function e(n) {
    const t = n.regex;
    return {
      name: "Diff",
      aliases: ["patch"],
      contains: [
        {
          className: "meta",
          relevance: 10,
          match: t.either(
            /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,
            /^\*\*\* +\d+,\d+ +\*\*\*\*$/,
            /^--- +\d+,\d+ +----$/
          )
        },
        {
          className: "comment",
          variants: [
            {
              begin: t.either(
                /Index: /,
                /^index/,
                /={3,}/,
                /^-{3}/,
                /^\*{3} /,
                /^\+{3}/,
                /^diff --git/
              ),
              end: /$/
            },
            { match: /^\*{15}$/ }
          ]
        },
        {
          className: "addition",
          begin: /^\+/,
          end: /$/
        },
        {
          className: "deletion",
          begin: /^-/,
          end: /$/
        },
        {
          className: "addition",
          begin: /^!/,
          end: /$/
        }
      ]
    };
  }
  return Pt = e, Pt;
}
var Bt, Ja;
function Jl() {
  if (Ja) return Bt;
  Ja = 1;
  function e(n) {
    const t = n.regex, r = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)", a = t.either(
      /\b([A-Z]+[a-z0-9]+)+/,
      // ends in caps
      /\b([A-Z]+[a-z0-9]+)+[A-Z]+/
    ), o = t.concat(a, /(::\w+)*/), s = {
      "variable.constant": [
        "__FILE__",
        "__LINE__",
        "__ENCODING__"
      ],
      "variable.language": [
        "self",
        "super"
      ],
      keyword: [
        "alias",
        "and",
        "begin",
        "BEGIN",
        "break",
        "case",
        "class",
        "defined",
        "do",
        "else",
        "elsif",
        "end",
        "END",
        "ensure",
        "for",
        "if",
        "in",
        "module",
        "next",
        "not",
        "or",
        "redo",
        "require",
        "rescue",
        "retry",
        "return",
        "then",
        "undef",
        "unless",
        "until",
        "when",
        "while",
        "yield",
        ...[
          "include",
          "extend",
          "prepend",
          "public",
          "private",
          "protected",
          "raise",
          "throw"
        ]
      ],
      built_in: [
        "proc",
        "lambda",
        "attr_accessor",
        "attr_reader",
        "attr_writer",
        "define_method",
        "private_constant",
        "module_function"
      ],
      literal: [
        "true",
        "false",
        "nil"
      ]
    }, c = {
      className: "doctag",
      begin: "@[A-Za-z]+"
    }, u = {
      begin: "#<",
      end: ">"
    }, l = [
      n.COMMENT(
        "#",
        "$",
        { contains: [c] }
      ),
      n.COMMENT(
        "^=begin",
        "^=end",
        {
          contains: [c],
          relevance: 10
        }
      ),
      n.COMMENT("^__END__", n.MATCH_NOTHING_RE)
    ], f = {
      className: "subst",
      begin: /#\{/,
      end: /\}/,
      keywords: s
    }, g = {
      className: "string",
      contains: [
        n.BACKSLASH_ESCAPE,
        f
      ],
      variants: [
        {
          begin: /'/,
          end: /'/
        },
        {
          begin: /"/,
          end: /"/
        },
        {
          begin: /`/,
          end: /`/
        },
        {
          begin: /%[qQwWx]?\(/,
          end: /\)/
        },
        {
          begin: /%[qQwWx]?\[/,
          end: /\]/
        },
        {
          begin: /%[qQwWx]?\{/,
          end: /\}/
        },
        {
          begin: /%[qQwWx]?</,
          end: />/
        },
        {
          begin: /%[qQwWx]?\//,
          end: /\//
        },
        {
          begin: /%[qQwWx]?%/,
          end: /%/
        },
        {
          begin: /%[qQwWx]?-/,
          end: /-/
        },
        {
          begin: /%[qQwWx]?\|/,
          end: /\|/
        },
        // in the following expressions, \B in the beginning suppresses recognition of ?-sequences
        // where ? is the last character of a preceding identifier, as in: `func?4`
        { begin: /\B\?(\\\d{1,3})/ },
        { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
        { begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
        { begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/ },
        { begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
        { begin: /\B\?\\?\S/ },
        // heredocs
        {
          // this guard makes sure that we have an entire heredoc and not a false
          // positive (auto-detect, etc.)
          begin: t.concat(
            /<<[-~]?'?/,
            t.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)
          ),
          contains: [
            n.END_SAME_AS_BEGIN({
              begin: /(\w+)/,
              end: /(\w+)/,
              contains: [
                n.BACKSLASH_ESCAPE,
                f
              ]
            })
          ]
        }
      ]
    }, m = "[1-9](_?[0-9])*|0", h = "[0-9](_?[0-9])*", p = {
      className: "number",
      relevance: 0,
      variants: [
        // decimal integer/float, optionally exponential or rational, optionally imaginary
        { begin: `\\b(${m})(\\.(${h}))?([eE][+-]?(${h})|r)?i?\\b` },
        // explicit decimal/binary/octal/hexadecimal integer,
        // optionally rational and/or imaginary
        { begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" },
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b" },
        // 0-prefixed implicit octal integer, optionally rational and/or imaginary
        { begin: "\\b0(_?[0-7])+r?i?\\b" }
      ]
    }, v = {
      variants: [
        {
          match: /\(\)/
        },
        {
          className: "params",
          begin: /\(/,
          end: /(?=\))/,
          excludeBegin: !0,
          endsParent: !0,
          keywords: s
        }
      ]
    }, K = [
      g,
      {
        variants: [
          {
            match: [
              /class\s+/,
              o,
              /\s+<\s+/,
              o
            ]
          },
          {
            match: [
              /\b(class|module)\s+/,
              o
            ]
          }
        ],
        scope: {
          2: "title.class",
          4: "title.class.inherited"
        },
        keywords: s
      },
      {
        match: [
          /(include|extend)\s+/,
          o
        ],
        scope: {
          2: "title.class"
        },
        keywords: s
      },
      {
        relevance: 0,
        match: [
          o,
          /\.new[. (]/
        ],
        scope: {
          1: "title.class"
        }
      },
      {
        relevance: 0,
        match: /\b[A-Z][A-Z_0-9]+\b/,
        className: "variable.constant"
      },
      {
        relevance: 0,
        match: a,
        scope: "title.class"
      },
      {
        match: [
          /def/,
          /\s+/,
          r
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [
          v
        ]
      },
      {
        // swallow namespace qualifiers before symbols
        begin: n.IDENT_RE + "::"
      },
      {
        className: "symbol",
        begin: n.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
        relevance: 0
      },
      {
        className: "symbol",
        begin: ":(?!\\s)",
        contains: [
          g,
          { begin: r }
        ],
        relevance: 0
      },
      p,
      {
        // negative-look forward attempts to prevent false matches like:
        // @ident@ or $ident$ that might indicate this is not ruby at all
        className: "variable",
        begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
      },
      {
        className: "params",
        begin: /\|/,
        end: /\|/,
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0,
        // this could be a lot of things (in other languages) other than params
        keywords: s
      },
      {
        // regexp container
        begin: "(" + n.RE_STARTERS_RE + "|unless)\\s*",
        keywords: "unless",
        contains: [
          {
            className: "regexp",
            contains: [
              n.BACKSLASH_ESCAPE,
              f
            ],
            illegal: /\n/,
            variants: [
              {
                begin: "/",
                end: "/[a-z]*"
              },
              {
                begin: /%r\{/,
                end: /\}[a-z]*/
              },
              {
                begin: "%r\\(",
                end: "\\)[a-z]*"
              },
              {
                begin: "%r!",
                end: "![a-z]*"
              },
              {
                begin: "%r\\[",
                end: "\\][a-z]*"
              }
            ]
          }
        ].concat(u, l),
        relevance: 0
      }
    ].concat(u, l);
    f.contains = K, v.contains = K;
    const ae = [
      {
        begin: /^\s*=>/,
        starts: {
          end: "$",
          contains: K
        }
      },
      {
        className: "meta.prompt",
        begin: "^(" + "[>?]>" + "|" + "[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]" + "|" + "(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>" + ")(?=[ ])",
        starts: {
          end: "$",
          keywords: s,
          contains: K
        }
      }
    ];
    return l.unshift(u), {
      name: "Ruby",
      aliases: [
        "rb",
        "gemspec",
        "podspec",
        "thor",
        "irb"
      ],
      keywords: s,
      illegal: /\/\*/,
      contains: [n.SHEBANG({ binary: "ruby" })].concat(ae).concat(l).concat(K)
    };
  }
  return Bt = e, Bt;
}
var Ut, ei;
function eu() {
  if (ei) return Ut;
  ei = 1;
  function e(n) {
    const i = {
      keyword: [
        "break",
        "case",
        "chan",
        "const",
        "continue",
        "default",
        "defer",
        "else",
        "fallthrough",
        "for",
        "func",
        "go",
        "goto",
        "if",
        "import",
        "interface",
        "map",
        "package",
        "range",
        "return",
        "select",
        "struct",
        "switch",
        "type",
        "var"
      ],
      type: [
        "bool",
        "byte",
        "complex64",
        "complex128",
        "error",
        "float32",
        "float64",
        "int8",
        "int16",
        "int32",
        "int64",
        "string",
        "uint8",
        "uint16",
        "uint32",
        "uint64",
        "int",
        "uint",
        "uintptr",
        "rune"
      ],
      literal: [
        "true",
        "false",
        "iota",
        "nil"
      ],
      built_in: [
        "append",
        "cap",
        "close",
        "complex",
        "copy",
        "imag",
        "len",
        "make",
        "new",
        "panic",
        "print",
        "println",
        "real",
        "recover",
        "delete"
      ]
    };
    return {
      name: "Go",
      aliases: ["golang"],
      keywords: i,
      illegal: "</",
      contains: [
        n.C_LINE_COMMENT_MODE,
        n.C_BLOCK_COMMENT_MODE,
        {
          className: "string",
          variants: [
            n.QUOTE_STRING_MODE,
            n.APOS_STRING_MODE,
            {
              begin: "`",
              end: "`"
            }
          ]
        },
        {
          className: "number",
          variants: [
            {
              match: /-?\b0[xX]\.[a-fA-F0-9](_?[a-fA-F0-9])*[pP][+-]?\d(_?\d)*i?/,
              // hex without a present digit before . (making a digit afterwards required)
              relevance: 0
            },
            {
              match: /-?\b0[xX](_?[a-fA-F0-9])+((\.([a-fA-F0-9](_?[a-fA-F0-9])*)?)?[pP][+-]?\d(_?\d)*)?i?/,
              // hex with a present digit before . (making a digit afterwards optional)
              relevance: 0
            },
            {
              match: /-?\b0[oO](_?[0-7])*i?/,
              // leading 0o octal
              relevance: 0
            },
            {
              match: /-?\.\d(_?\d)*([eE][+-]?\d(_?\d)*)?i?/,
              // decimal without a present digit before . (making a digit afterwards required)
              relevance: 0
            },
            {
              match: /-?\b\d(_?\d)*(\.(\d(_?\d)*)?)?([eE][+-]?\d(_?\d)*)?i?/,
              // decimal with a present digit before . (making a digit afterwards optional)
              relevance: 0
            }
          ]
        },
        {
          begin: /:=/
          // relevance booster
        },
        {
          className: "function",
          beginKeywords: "func",
          end: "\\s*(\\{|$)",
          excludeEnd: !0,
          contains: [
            n.TITLE_MODE,
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              endsParent: !0,
              keywords: i,
              illegal: /["']/
            }
          ]
        }
      ]
    };
  }
  return Ut = e, Ut;
}
var Ft, ni;
function nu() {
  if (ni) return Ft;
  ni = 1;
  function e(n) {
    const t = n.regex, r = /[_A-Za-z][_0-9A-Za-z]*/;
    return {
      name: "GraphQL",
      aliases: ["gql"],
      case_insensitive: !0,
      disableAutodetect: !1,
      keywords: {
        keyword: [
          "query",
          "mutation",
          "subscription",
          "type",
          "input",
          "schema",
          "directive",
          "interface",
          "union",
          "scalar",
          "fragment",
          "enum",
          "on"
        ],
        literal: [
          "true",
          "false",
          "null"
        ]
      },
      contains: [
        n.HASH_COMMENT_MODE,
        n.QUOTE_STRING_MODE,
        n.NUMBER_MODE,
        {
          scope: "punctuation",
          match: /[.]{3}/,
          relevance: 0
        },
        {
          scope: "punctuation",
          begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/,
          relevance: 0
        },
        {
          scope: "variable",
          begin: /\$/,
          end: /\W/,
          excludeEnd: !0,
          relevance: 0
        },
        {
          scope: "meta",
          match: /@\w+/,
          excludeEnd: !0
        },
        {
          scope: "symbol",
          begin: t.concat(r, t.lookahead(/\s*:/)),
          relevance: 0
        }
      ],
      illegal: [
        /[;<']/,
        /BEGIN/
      ]
    };
  }
  return Ft = e, Ft;
}
var $t, ti;
function tu() {
  if (ti) return $t;
  ti = 1;
  function e(n) {
    const t = n.regex, r = {
      className: "number",
      relevance: 0,
      variants: [
        { begin: /([+-]+)?[\d]+_[\d_]+/ },
        { begin: n.NUMBER_RE }
      ]
    }, a = n.COMMENT();
    a.variants = [
      {
        begin: /;/,
        end: /$/
      },
      {
        begin: /#/,
        end: /$/
      }
    ];
    const o = {
      className: "variable",
      variants: [
        { begin: /\$[\w\d"][\w\d_]*/ },
        { begin: /\$\{(.*?)\}/ }
      ]
    }, i = {
      className: "literal",
      begin: /\bon|off|true|false|yes|no\b/
    }, s = {
      className: "string",
      contains: [n.BACKSLASH_ESCAPE],
      variants: [
        {
          begin: "'''",
          end: "'''",
          relevance: 10
        },
        {
          begin: '"""',
          end: '"""',
          relevance: 10
        },
        {
          begin: '"',
          end: '"'
        },
        {
          begin: "'",
          end: "'"
        }
      ]
    }, c = {
      begin: /\[/,
      end: /\]/,
      contains: [
        a,
        i,
        o,
        s,
        r,
        "self"
      ],
      relevance: 0
    }, u = /[A-Za-z0-9_-]+/, l = /"(\\"|[^"])*"/, f = /'[^']*'/, g = t.either(
      u,
      l,
      f
    ), m = t.concat(
      g,
      "(\\s*\\.\\s*",
      g,
      ")*",
      t.lookahead(/\s*=\s*[^#\s]/)
    );
    return {
      name: "TOML, also INI",
      aliases: ["toml"],
      case_insensitive: !0,
      illegal: /\S/,
      contains: [
        a,
        {
          className: "section",
          begin: /\[+/,
          end: /\]+/
        },
        {
          begin: m,
          className: "attr",
          starts: {
            end: /$/,
            contains: [
              a,
              c,
              i,
              o,
              s,
              r
            ]
          }
        }
      ]
    };
  }
  return $t = e, $t;
}
var zt, ri;
function ru() {
  if (ri) return zt;
  ri = 1;
  var e = "[0-9](_*[0-9])*", n = `\\.(${e})`, t = "[0-9a-fA-F](_*[0-9a-fA-F])*", r = {
    className: "number",
    variants: [
      // DecimalFloatingPointLiteral
      // including ExponentPart
      { begin: `(\\b(${e})((${n})|\\.)?|(${n}))[eE][+-]?(${e})[fFdD]?\\b` },
      // excluding ExponentPart
      { begin: `\\b(${e})((${n})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
      { begin: `(${n})[fFdD]?\\b` },
      { begin: `\\b(${e})[fFdD]\\b` },
      // HexadecimalFloatingPointLiteral
      { begin: `\\b0[xX]((${t})\\.?|(${t})?\\.(${t}))[pP][+-]?(${e})[fFdD]?\\b` },
      // DecimalIntegerLiteral
      { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
      // HexIntegerLiteral
      { begin: `\\b0[xX](${t})[lL]?\\b` },
      // OctalIntegerLiteral
      { begin: "\\b0(_*[0-7])*[lL]?\\b" },
      // BinaryIntegerLiteral
      { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
    ],
    relevance: 0
  };
  function a(i, s, c) {
    return c === -1 ? "" : i.replace(s, (u) => a(i, s, c - 1));
  }
  function o(i) {
    const s = i.regex, c = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", u = c + a("(?:<" + c + "~~~(?:\\s*,\\s*" + c + "~~~)*>)?", /~~~/g, 2), h = {
      keyword: [
        "synchronized",
        "abstract",
        "private",
        "var",
        "static",
        "if",
        "const ",
        "for",
        "while",
        "strictfp",
        "finally",
        "protected",
        "import",
        "native",
        "final",
        "void",
        "enum",
        "else",
        "break",
        "transient",
        "catch",
        "instanceof",
        "volatile",
        "case",
        "assert",
        "package",
        "default",
        "public",
        "try",
        "switch",
        "continue",
        "throws",
        "protected",
        "public",
        "private",
        "module",
        "requires",
        "exports",
        "do",
        "sealed",
        "yield",
        "permits",
        "goto"
      ],
      literal: [
        "false",
        "true",
        "null"
      ],
      type: [
        "char",
        "boolean",
        "long",
        "float",
        "int",
        "byte",
        "short",
        "double"
      ],
      built_in: [
        "super",
        "this"
      ]
    }, p = {
      className: "meta",
      begin: "@" + c,
      contains: [
        {
          begin: /\(/,
          end: /\)/,
          contains: ["self"]
          // allow nested () inside our annotation
        }
      ]
    }, v = {
      className: "params",
      begin: /\(/,
      end: /\)/,
      keywords: h,
      relevance: 0,
      contains: [i.C_BLOCK_COMMENT_MODE],
      endsParent: !0
    };
    return {
      name: "Java",
      aliases: ["jsp"],
      keywords: h,
      illegal: /<\/|#/,
      contains: [
        i.COMMENT(
          "/\\*\\*",
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                // eat up @'s in emails to prevent them to be recognized as doctags
                begin: /\w+@/,
                relevance: 0
              },
              {
                className: "doctag",
                begin: "@[A-Za-z]+"
              }
            ]
          }
        ),
        // relevance boost
        {
          begin: /import java\.[a-z]+\./,
          keywords: "import",
          relevance: 2
        },
        i.C_LINE_COMMENT_MODE,
        i.C_BLOCK_COMMENT_MODE,
        {
          begin: /"""/,
          end: /"""/,
          className: "string",
          contains: [i.BACKSLASH_ESCAPE]
        },
        i.APOS_STRING_MODE,
        i.QUOTE_STRING_MODE,
        {
          match: [
            /\b(?:class|interface|enum|extends|implements|new)/,
            /\s+/,
            c
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        },
        {
          // Exceptions for hyphenated keywords
          match: /non-sealed/,
          scope: "keyword"
        },
        {
          begin: [
            s.concat(/(?!else)/, c),
            /\s+/,
            c,
            /\s+/,
            /=(?!=)/
          ],
          className: {
            1: "type",
            3: "variable",
            5: "operator"
          }
        },
        {
          begin: [
            /record/,
            /\s+/,
            c
          ],
          className: {
            1: "keyword",
            3: "title.class"
          },
          contains: [
            v,
            i.C_LINE_COMMENT_MODE,
            i.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          // Expression keywords prevent 'keyword Name(...)' from being
          // recognized as a function definition
          beginKeywords: "new throw return else",
          relevance: 0
        },
        {
          begin: [
            "(?:" + u + "\\s+)",
            i.UNDERSCORE_IDENT_RE,
            /\s*(?=\()/
          ],
          className: { 2: "title.function" },
          keywords: h,
          contains: [
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              keywords: h,
              relevance: 0,
              contains: [
                p,
                i.APOS_STRING_MODE,
                i.QUOTE_STRING_MODE,
                r,
                i.C_BLOCK_COMMENT_MODE
              ]
            },
            i.C_LINE_COMMENT_MODE,
            i.C_BLOCK_COMMENT_MODE
          ]
        },
        r,
        p
      ]
    };
  }
  return zt = o, zt;
}
var Gt, ai;
function au() {
  if (ai) return Gt;
  ai = 1;
  const e = "[A-Za-z$_][0-9A-Za-z$_]*", n = [
    "as",
    // for exports
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    // JS handles these with a special rule
    // "get",
    // "set",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends"
  ], t = [
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity"
  ], r = [
    // Fundamental objects
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    // numbers and dates
    "Math",
    "Date",
    "Number",
    "BigInt",
    // text
    "String",
    "RegExp",
    // Indexed collections
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    // Keyed collections
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    // Structured data
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    // Control abstraction objects
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    // Reflection
    "Reflect",
    "Proxy",
    // Internationalization
    "Intl",
    // WebAssembly
    "WebAssembly"
  ], a = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError"
  ], o = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape"
  ], i = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "sessionStorage",
    "module",
    "global"
    // Node.js
  ], s = [].concat(
    o,
    r,
    a
  );
  function c(u) {
    const l = u.regex, f = (R, { after: C }) => {
      const q = "</" + R[0].slice(1);
      return R.input.indexOf(q, C) !== -1;
    }, g = e, m = {
      begin: "<>",
      end: "</>"
    }, h = /<[A-Za-z0-9\\._:-]+\s*\/>/, p = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      /**
       * @param {RegExpMatchArray} match
       * @param {CallbackResponse} response
       */
      isTrulyOpeningTag: (R, C) => {
        const q = R[0].length + R.index, z = R.input[q];
        if (
          // HTML should not include another raw `<` inside a tag
          // nested type?
          // `<Array<Array<number>>`, etc.
          z === "<" || // the , gives away that this is not HTML
          // `<T, A extends keyof T, V>`
          z === ","
        ) {
          C.ignoreMatch();
          return;
        }
        z === ">" && (f(R, { after: q }) || C.ignoreMatch());
        let se;
        const ie = R.input.substring(q);
        if (se = ie.match(/^\s*=/)) {
          C.ignoreMatch();
          return;
        }
        if ((se = ie.match(/^\s+extends\s+/)) && se.index === 0) {
          C.ignoreMatch();
          return;
        }
      }
    }, v = {
      $pattern: e,
      keyword: n,
      literal: t,
      built_in: s,
      "variable.language": i
    }, y = "[0-9](_?[0-9])*", _ = `\\.(${y})`, S = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", M = {
      className: "number",
      variants: [
        // DecimalLiteral
        { begin: `(\\b(${S})((${_})|\\.)?|(${_}))[eE][+-]?(${y})\\b` },
        { begin: `\\b(${S})\\b((${_})\\b|\\.)?|(${_})\\b` },
        // DecimalBigIntegerLiteral
        { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
        // NonDecimalIntegerLiteral
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
        // LegacyOctalIntegerLiteral (does not include underscore separators)
        // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
        { begin: "\\b0[0-7]+n?\\b" }
      ],
      relevance: 0
    }, x = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: v,
      contains: []
      // defined later
    }, W = {
      begin: ".?html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          u.BACKSLASH_ESCAPE,
          x
        ],
        subLanguage: "xml"
      }
    }, K = {
      begin: ".?css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          u.BACKSLASH_ESCAPE,
          x
        ],
        subLanguage: "css"
      }
    }, D = {
      begin: ".?gql`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          u.BACKSLASH_ESCAPE,
          x
        ],
        subLanguage: "graphql"
      }
    }, H = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [
        u.BACKSLASH_ESCAPE,
        x
      ]
    }, ae = {
      className: "comment",
      variants: [
        u.COMMENT(
          /\/\*\*(?!\/)/,
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                begin: "(?=@[A-Za-z]+)",
                relevance: 0,
                contains: [
                  {
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                  },
                  {
                    className: "type",
                    begin: "\\{",
                    end: "\\}",
                    excludeEnd: !0,
                    excludeBegin: !0,
                    relevance: 0
                  },
                  {
                    className: "variable",
                    begin: g + "(?=\\s*(-)|$)",
                    endsParent: !0,
                    relevance: 0
                  },
                  // eat spaces (not newlines) so we can find
                  // types or variables
                  {
                    begin: /(?=[^\n])\s/,
                    relevance: 0
                  }
                ]
              }
            ]
          }
        ),
        u.C_BLOCK_COMMENT_MODE,
        u.C_LINE_COMMENT_MODE
      ]
    }, Ee = [
      u.APOS_STRING_MODE,
      u.QUOTE_STRING_MODE,
      W,
      K,
      D,
      H,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      M
      // This is intentional:
      // See https://github.com/highlightjs/highlight.js/issues/3288
      // hljs.REGEXP_MODE
    ];
    x.contains = Ee.concat({
      // we need to pair up {} inside our subst to prevent
      // it from ending too early by matching another }
      begin: /\{/,
      end: /\}/,
      keywords: v,
      contains: [
        "self"
      ].concat(Ee)
    });
    const le = [].concat(ae, x.contains), te = le.concat([
      // eat recursive parens in sub expressions
      {
        begin: /(\s*)\(/,
        end: /\)/,
        keywords: v,
        contains: ["self"].concat(le)
      }
    ]), Q = {
      className: "params",
      // convert this to negative lookbehind in v12
      begin: /(\s*)\(/,
      // to match the parms with 
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: v,
      contains: te
    }, ue = {
      variants: [
        // class Car extends vehicle
        {
          match: [
            /class/,
            /\s+/,
            g,
            /\s+/,
            /extends/,
            /\s+/,
            l.concat(g, "(", l.concat(/\./, g), ")*")
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            5: "keyword",
            7: "title.class.inherited"
          }
        },
        // class Car
        {
          match: [
            /class/,
            /\s+/,
            g
          ],
          scope: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    }, E = {
      relevance: 0,
      match: l.either(
        // Hard coded exceptions
        /\bJSON/,
        // Float32Array, OutT
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        // CSSFactory, CSSFactoryT
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        // FPs, FPsT
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
        // P
        // single letters are not highlighted
        // BLAH
        // this will be flagged as a UPPER_CASE_CONSTANT instead
      ),
      className: "title.class",
      keywords: {
        _: [
          // se we still get relevance credit for JS library classes
          ...r,
          ...a
        ]
      }
    }, O = {
      label: "use_strict",
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/
    }, Y = {
      variants: [
        {
          match: [
            /function/,
            /\s+/,
            g,
            /(?=\s*\()/
          ]
        },
        // anonymous function
        {
          match: [
            /function/,
            /\s*(?=\()/
          ]
        }
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      label: "func.def",
      contains: [Q],
      illegal: /%/
    }, b = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: "variable.constant"
    };
    function N(R) {
      return l.concat("(?!", R.join("|"), ")");
    }
    const U = {
      match: l.concat(
        /\b/,
        N([
          ...o,
          "super",
          "import"
        ].map((R) => `${R}\\s*\\(`)),
        g,
        l.lookahead(/\s*\(/)
      ),
      className: "title.function",
      relevance: 0
    }, $ = {
      begin: l.concat(/\./, l.lookahead(
        l.concat(g, /(?![0-9A-Za-z$_(])/)
      )),
      end: g,
      excludeBegin: !0,
      keywords: "prototype",
      className: "property",
      relevance: 0
    }, F = {
      match: [
        /get|set/,
        /\s+/,
        g,
        /(?=\()/
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        {
          // eat to avoid empty params
          begin: /\(\)/
        },
        Q
      ]
    }, B = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + u.UNDERSCORE_IDENT_RE + ")\\s*=>", P = {
      match: [
        /const|var|let/,
        /\s+/,
        g,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        // async is optional
        l.lookahead(B)
      ],
      keywords: "async",
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        Q
      ]
    };
    return {
      name: "JavaScript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: v,
      // this will be extended by TypeScript
      exports: { PARAMS_CONTAINS: te, CLASS_REFERENCE: E },
      illegal: /#(?![$_A-z])/,
      contains: [
        u.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }),
        O,
        u.APOS_STRING_MODE,
        u.QUOTE_STRING_MODE,
        W,
        K,
        D,
        H,
        ae,
        // Skip numbers when they are part of a variable name
        { match: /\$\d+/ },
        M,
        E,
        {
          className: "attr",
          begin: g + l.lookahead(":"),
          relevance: 0
        },
        P,
        {
          // "value" container
          begin: "(" + u.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [
            ae,
            u.REGEXP_MODE,
            {
              className: "function",
              // we have to count the parens to make sure we actually have the
              // correct bounding ( ) before the =>.  There could be any number of
              // sub-expressions inside also surrounded by parens.
              begin: B,
              returnBegin: !0,
              end: "\\s*=>",
              contains: [
                {
                  className: "params",
                  variants: [
                    {
                      begin: u.UNDERSCORE_IDENT_RE,
                      relevance: 0
                    },
                    {
                      className: null,
                      begin: /\(\s*\)/,
                      skip: !0
                    },
                    {
                      begin: /(\s*)\(/,
                      end: /\)/,
                      excludeBegin: !0,
                      excludeEnd: !0,
                      keywords: v,
                      contains: te
                    }
                  ]
                }
              ]
            },
            {
              // could be a comma delimited list of params to a function call
              begin: /,/,
              relevance: 0
            },
            {
              match: /\s+/,
              relevance: 0
            },
            {
              // JSX
              variants: [
                { begin: m.begin, end: m.end },
                { match: h },
                {
                  begin: p.begin,
                  // we carefully check the opening tag to see if it truly
                  // is a tag and not a false positive
                  "on:begin": p.isTrulyOpeningTag,
                  end: p.end
                }
              ],
              subLanguage: "xml",
              contains: [
                {
                  begin: p.begin,
                  end: p.end,
                  skip: !0,
                  contains: ["self"]
                }
              ]
            }
          ]
        },
        Y,
        {
          // prevent this from getting swallowed up by function
          // since they appear "function like"
          beginKeywords: "while if switch catch for"
        },
        {
          // we have to count the parens to make sure we actually have the correct
          // bounding ( ).  There could be any number of sub-expressions inside
          // also surrounded by parens.
          begin: "\\b(?!function)" + u.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          // end parens
          returnBegin: !0,
          label: "func.def",
          contains: [
            Q,
            u.inherit(u.TITLE_MODE, { begin: g, className: "title.function" })
          ]
        },
        // catch ... so it won't trigger the property rule below
        {
          match: /\.\.\./,
          relevance: 0
        },
        $,
        // hack: prevents detection of keywords in some circumstances
        // .keyword()
        // $keyword = x
        {
          match: "\\$" + g,
          relevance: 0
        },
        {
          match: [/\bconstructor(?=\s*\()/],
          className: { 1: "title.function" },
          contains: [Q]
        },
        U,
        b,
        ue,
        F,
        {
          match: /\$[(.]/
          // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
        }
      ]
    };
  }
  return Gt = c, Gt;
}
var qt, ii;
function iu() {
  if (ii) return qt;
  ii = 1;
  function e(n) {
    const t = {
      className: "attr",
      begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
      relevance: 1.01
    }, r = {
      match: /[{}[\],:]/,
      className: "punctuation",
      relevance: 0
    }, a = [
      "true",
      "false",
      "null"
    ], o = {
      scope: "literal",
      beginKeywords: a.join(" ")
    };
    return {
      name: "JSON",
      aliases: ["jsonc"],
      keywords: {
        literal: a
      },
      contains: [
        t,
        r,
        n.QUOTE_STRING_MODE,
        o,
        n.C_NUMBER_MODE,
        n.C_LINE_COMMENT_MODE,
        n.C_BLOCK_COMMENT_MODE
      ],
      illegal: "\\S"
    };
  }
  return qt = e, qt;
}
var Kt, oi;
function ou() {
  if (oi) return Kt;
  oi = 1;
  var e = "[0-9](_*[0-9])*", n = `\\.(${e})`, t = "[0-9a-fA-F](_*[0-9a-fA-F])*", r = {
    className: "number",
    variants: [
      // DecimalFloatingPointLiteral
      // including ExponentPart
      { begin: `(\\b(${e})((${n})|\\.)?|(${n}))[eE][+-]?(${e})[fFdD]?\\b` },
      // excluding ExponentPart
      { begin: `\\b(${e})((${n})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
      { begin: `(${n})[fFdD]?\\b` },
      { begin: `\\b(${e})[fFdD]\\b` },
      // HexadecimalFloatingPointLiteral
      { begin: `\\b0[xX]((${t})\\.?|(${t})?\\.(${t}))[pP][+-]?(${e})[fFdD]?\\b` },
      // DecimalIntegerLiteral
      { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
      // HexIntegerLiteral
      { begin: `\\b0[xX](${t})[lL]?\\b` },
      // OctalIntegerLiteral
      { begin: "\\b0(_*[0-7])*[lL]?\\b" },
      // BinaryIntegerLiteral
      { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
    ],
    relevance: 0
  };
  function a(o) {
    const i = {
      keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
      built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
      literal: "true false null"
    }, s = {
      className: "keyword",
      begin: /\b(break|continue|return|this)\b/,
      starts: { contains: [
        {
          className: "symbol",
          begin: /@\w+/
        }
      ] }
    }, c = {
      className: "symbol",
      begin: o.UNDERSCORE_IDENT_RE + "@"
    }, u = {
      className: "subst",
      begin: /\$\{/,
      end: /\}/,
      contains: [o.C_NUMBER_MODE]
    }, l = {
      className: "variable",
      begin: "\\$" + o.UNDERSCORE_IDENT_RE
    }, f = {
      className: "string",
      variants: [
        {
          begin: '"""',
          end: '"""(?=[^"])',
          contains: [
            l,
            u
          ]
        },
        // Can't use built-in modes easily, as we want to use STRING in the meta
        // context as 'meta-string' and there's no syntax to remove explicitly set
        // classNames in built-in modes.
        {
          begin: "'",
          end: "'",
          illegal: /\n/,
          contains: [o.BACKSLASH_ESCAPE]
        },
        {
          begin: '"',
          end: '"',
          illegal: /\n/,
          contains: [
            o.BACKSLASH_ESCAPE,
            l,
            u
          ]
        }
      ]
    };
    u.contains.push(f);
    const g = {
      className: "meta",
      begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + o.UNDERSCORE_IDENT_RE + ")?"
    }, m = {
      className: "meta",
      begin: "@" + o.UNDERSCORE_IDENT_RE,
      contains: [
        {
          begin: /\(/,
          end: /\)/,
          contains: [
            o.inherit(f, { className: "string" }),
            "self"
          ]
        }
      ]
    }, h = r, p = o.COMMENT(
      "/\\*",
      "\\*/",
      { contains: [o.C_BLOCK_COMMENT_MODE] }
    ), v = { variants: [
      {
        className: "type",
        begin: o.UNDERSCORE_IDENT_RE
      },
      {
        begin: /\(/,
        end: /\)/,
        contains: []
        // defined later
      }
    ] }, y = v;
    return y.variants[1].contains = [v], v.variants[1].contains = [y], {
      name: "Kotlin",
      aliases: [
        "kt",
        "kts"
      ],
      keywords: i,
      contains: [
        o.COMMENT(
          "/\\*\\*",
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                className: "doctag",
                begin: "@[A-Za-z]+"
              }
            ]
          }
        ),
        o.C_LINE_COMMENT_MODE,
        p,
        s,
        c,
        g,
        m,
        {
          className: "function",
          beginKeywords: "fun",
          end: "[(]|$",
          returnBegin: !0,
          excludeEnd: !0,
          keywords: i,
          relevance: 5,
          contains: [
            {
              begin: o.UNDERSCORE_IDENT_RE + "\\s*\\(",
              returnBegin: !0,
              relevance: 0,
              contains: [o.UNDERSCORE_TITLE_MODE]
            },
            {
              className: "type",
              begin: /</,
              end: />/,
              keywords: "reified",
              relevance: 0
            },
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              endsParent: !0,
              keywords: i,
              relevance: 0,
              contains: [
                {
                  begin: /:/,
                  end: /[=,\/]/,
                  endsWithParent: !0,
                  contains: [
                    v,
                    o.C_LINE_COMMENT_MODE,
                    p
                  ],
                  relevance: 0
                },
                o.C_LINE_COMMENT_MODE,
                p,
                g,
                m,
                f,
                o.C_NUMBER_MODE
              ]
            },
            p
          ]
        },
        {
          begin: [
            /class|interface|trait/,
            /\s+/,
            o.UNDERSCORE_IDENT_RE
          ],
          beginScope: {
            3: "title.class"
          },
          keywords: "class interface trait",
          end: /[:\{(]|$/,
          excludeEnd: !0,
          illegal: "extends implements",
          contains: [
            { beginKeywords: "public protected internal private constructor" },
            o.UNDERSCORE_TITLE_MODE,
            {
              className: "type",
              begin: /</,
              end: />/,
              excludeBegin: !0,
              excludeEnd: !0,
              relevance: 0
            },
            {
              className: "type",
              begin: /[,:]\s*/,
              end: /[<\(,){\s]|$/,
              excludeBegin: !0,
              returnEnd: !0
            },
            g,
            m
          ]
        },
        f,
        {
          className: "meta",
          begin: "^#!/usr/bin/env",
          end: "$",
          illegal: `
`
        },
        h
      ]
    };
  }
  return Kt = a, Kt;
}
var Ht, si;
function su() {
  if (si) return Ht;
  si = 1;
  const e = (l) => ({
    IMPORTANT: {
      scope: "meta",
      begin: "!important"
    },
    BLOCK_COMMENT: l.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
    },
    FUNCTION_DISPATCH: {
      className: "built_in",
      begin: /[\w-]+(?=\()/
    },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [
        l.APOS_STRING_MODE,
        l.QUOTE_STRING_MODE
      ]
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin: l.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    CSS_VARIABLE: {
      className: "attr",
      begin: /--[A-Za-z_][A-Za-z0-9_-]*/
    }
  }), n = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "optgroup",
    "option",
    "p",
    "picture",
    "q",
    "quote",
    "samp",
    "section",
    "select",
    "source",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video"
  ], t = [
    "defs",
    "g",
    "marker",
    "mask",
    "pattern",
    "svg",
    "switch",
    "symbol",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feFlood",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMorphology",
    "feOffset",
    "feSpecularLighting",
    "feTile",
    "feTurbulence",
    "linearGradient",
    "radialGradient",
    "stop",
    "circle",
    "ellipse",
    "image",
    "line",
    "path",
    "polygon",
    "polyline",
    "rect",
    "text",
    "use",
    "textPath",
    "tspan",
    "foreignObject",
    "clipPath"
  ], r = [
    ...n,
    ...t
  ], a = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    // TODO: find a better solution?
    "min-width",
    "max-width",
    "min-height",
    "max-height"
  ].sort().reverse(), o = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    // dir()
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    // has()
    "host",
    // host or host()
    "host-context",
    // host-context()
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    // is()
    "lang",
    // lang()
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    // not()
    "nth-child",
    // nth-child()
    "nth-col",
    // nth-col()
    "nth-last-child",
    // nth-last-child()
    "nth-last-col",
    // nth-last-col()
    "nth-last-of-type",
    //nth-last-of-type()
    "nth-of-type",
    //nth-of-type()
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where"
    // where()
  ].sort().reverse(), i = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error"
  ].sort().reverse(), s = [
    "accent-color",
    "align-content",
    "align-items",
    "align-self",
    "alignment-baseline",
    "all",
    "animation",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-timing-function",
    "appearance",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-repeat",
    "background-size",
    "baseline-shift",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-end-end-radius",
    "border-end-start-radius",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-start-end-radius",
    "border-start-start-radius",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-decoration-break",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "cx",
    "cy",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "color-scheme",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "direction",
    "display",
    "dominant-baseline",
    "empty-cells",
    "enable-background",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flow",
    "flood-color",
    "flood-opacity",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-size",
    "font-size-adjust",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-variant",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "gap",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "inline-size",
    "inset",
    "inset-block",
    "inset-block-end",
    "inset-block-start",
    "inset-inline",
    "inset-inline-end",
    "inset-inline-start",
    "isolation",
    "kerning",
    "justify-content",
    "justify-items",
    "justify-self",
    "left",
    "letter-spacing",
    "lighting-color",
    "line-break",
    "line-height",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "marker",
    "marker-end",
    "marker-mid",
    "marker-start",
    "mask",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "pointer-events",
    "position",
    "quotes",
    "r",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "rotate",
    "row-gap",
    "scale",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "shape-rendering",
    "stop-color",
    "stop-opacity",
    "stroke",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "speak",
    "speak-as",
    "src",
    // @font-face
    "tab-size",
    "table-layout",
    "text-anchor",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-skip-ink",
    "text-decoration-style",
    "text-decoration-thickness",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-transform",
    "text-underline-offset",
    "text-underline-position",
    "top",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "translate",
    "unicode-bidi",
    "vector-effect",
    "vertical-align",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "x",
    "y",
    "z-index"
  ].sort().reverse(), c = o.concat(i).sort().reverse();
  function u(l) {
    const f = e(l), g = c, m = "and or not only", h = "[\\w-]+", p = "(" + h + "|@\\{" + h + "\\})", v = [], y = [], _ = function(le) {
      return {
        // Less strings are not multiline (also include '~' for more consistent coloring of "escaped" strings)
        className: "string",
        begin: "~?" + le + ".*?" + le
      };
    }, S = function(le, te, Q) {
      return {
        className: le,
        begin: te,
        relevance: Q
      };
    }, M = {
      $pattern: /[a-z-]+/,
      keyword: m,
      attribute: a.join(" ")
    }, x = {
      // used only to properly balance nested parens inside mixin call, def. arg list
      begin: "\\(",
      end: "\\)",
      contains: y,
      keywords: M,
      relevance: 0
    };
    y.push(
      l.C_LINE_COMMENT_MODE,
      l.C_BLOCK_COMMENT_MODE,
      _("'"),
      _('"'),
      f.CSS_NUMBER_MODE,
      // fixme: it does not include dot for numbers like .5em :(
      {
        begin: "(url|data-uri)\\(",
        starts: {
          className: "string",
          end: "[\\)\\n]",
          excludeEnd: !0
        }
      },
      f.HEXCOLOR,
      x,
      S("variable", "@@?" + h, 10),
      S("variable", "@\\{" + h + "\\}"),
      S("built_in", "~?`[^`]*?`"),
      // inline javascript (or whatever host language) *multiline* string
      {
        // @media features (it’s here to not duplicate things in AT_RULE_MODE with extra PARENS_MODE overriding):
        className: "attribute",
        begin: h + "\\s*:",
        end: ":",
        returnBegin: !0,
        excludeEnd: !0
      },
      f.IMPORTANT,
      { beginKeywords: "and not" },
      f.FUNCTION_DISPATCH
    );
    const W = y.concat({
      begin: /\{/,
      end: /\}/,
      contains: v
    }), K = {
      beginKeywords: "when",
      endsWithParent: !0,
      contains: [{ beginKeywords: "and not" }].concat(y)
      // using this form to override VALUE’s 'function' match
    }, D = {
      begin: p + "\\s*:",
      returnBegin: !0,
      end: /[;}]/,
      relevance: 0,
      contains: [
        { begin: /-(webkit|moz|ms|o)-/ },
        f.CSS_VARIABLE,
        {
          className: "attribute",
          begin: "\\b(" + s.join("|") + ")\\b",
          end: /(?=:)/,
          starts: {
            endsWithParent: !0,
            illegal: "[<=$]",
            relevance: 0,
            contains: y
          }
        }
      ]
    }, H = {
      className: "keyword",
      begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
      starts: {
        end: "[;{}]",
        keywords: M,
        returnEnd: !0,
        contains: y,
        relevance: 0
      }
    }, ge = {
      className: "variable",
      variants: [
        // using more strict pattern for higher relevance to increase chances of Less detection.
        // this is *the only* Less specific statement used in most of the sources, so...
        // (we’ll still often loose to the css-parser unless there's '//' comment,
        // simply because 1 variable just can't beat 99 properties :)
        {
          begin: "@" + h + "\\s*:",
          relevance: 15
        },
        { begin: "@" + h }
      ],
      starts: {
        end: "[;}]",
        returnEnd: !0,
        contains: W
      }
    }, ae = {
      // first parse unambiguous selectors (i.e. those not starting with tag)
      // then fall into the scary lookahead-discriminator variant.
      // this mode also handles mixin definitions and calls
      variants: [
        {
          begin: "[\\.#:&\\[>]",
          end: "[;{}]"
          // mixin calls end with ';'
        },
        {
          begin: p,
          end: /\{/
        }
      ],
      returnBegin: !0,
      returnEnd: !0,
      illegal: `[<='$"]`,
      relevance: 0,
      contains: [
        l.C_LINE_COMMENT_MODE,
        l.C_BLOCK_COMMENT_MODE,
        K,
        S("keyword", "all\\b"),
        S("variable", "@\\{" + h + "\\}"),
        // otherwise it’s identified as tag
        {
          begin: "\\b(" + r.join("|") + ")\\b",
          className: "selector-tag"
        },
        f.CSS_NUMBER_MODE,
        S("selector-tag", p, 0),
        S("selector-id", "#" + p),
        S("selector-class", "\\." + p, 0),
        S("selector-tag", "&", 0),
        f.ATTRIBUTE_SELECTOR_MODE,
        {
          className: "selector-pseudo",
          begin: ":(" + o.join("|") + ")"
        },
        {
          className: "selector-pseudo",
          begin: ":(:)?(" + i.join("|") + ")"
        },
        {
          begin: /\(/,
          end: /\)/,
          relevance: 0,
          contains: W
        },
        // argument list of parametric mixins
        { begin: "!important" },
        // eat !important after mixin call or it will be colored as tag
        f.FUNCTION_DISPATCH
      ]
    }, Ee = {
      begin: h + `:(:)?(${g.join("|")})`,
      returnBegin: !0,
      contains: [ae]
    };
    return v.push(
      l.C_LINE_COMMENT_MODE,
      l.C_BLOCK_COMMENT_MODE,
      H,
      ge,
      Ee,
      D,
      ae,
      K,
      f.FUNCTION_DISPATCH
    ), {
      name: "Less",
      case_insensitive: !0,
      illegal: `[=>'/<($"]`,
      contains: v
    };
  }
  return Ht = u, Ht;
}
var Wt, ci;
function cu() {
  if (ci) return Wt;
  ci = 1;
  function e(n) {
    const t = "\\[=*\\[", r = "\\]=*\\]", a = {
      begin: t,
      end: r,
      contains: ["self"]
    }, o = [
      n.COMMENT("--(?!" + t + ")", "$"),
      n.COMMENT(
        "--" + t,
        r,
        {
          contains: [a],
          relevance: 10
        }
      )
    ];
    return {
      name: "Lua",
      keywords: {
        $pattern: n.UNDERSCORE_IDENT_RE,
        literal: "true false nil",
        keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
        built_in: (
          // Metatags and globals:
          "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
        )
      },
      contains: o.concat([
        {
          className: "function",
          beginKeywords: "function",
          end: "\\)",
          contains: [
            n.inherit(n.TITLE_MODE, { begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*" }),
            {
              className: "params",
              begin: "\\(",
              endsWithParent: !0,
              contains: o
            }
          ].concat(o)
        },
        n.C_NUMBER_MODE,
        n.APOS_STRING_MODE,
        n.QUOTE_STRING_MODE,
        {
          className: "string",
          begin: t,
          end: r,
          contains: [a],
          relevance: 5
        }
      ])
    };
  }
  return Wt = e, Wt;
}
var Yt, li;
function lu() {
  if (li) return Yt;
  li = 1;
  function e(n) {
    const t = {
      className: "variable",
      variants: [
        {
          begin: "\\$\\(" + n.UNDERSCORE_IDENT_RE + "\\)",
          contains: [n.BACKSLASH_ESCAPE]
        },
        { begin: /\$[@%<?\^\+\*]/ }
      ]
    }, r = {
      className: "string",
      begin: /"/,
      end: /"/,
      contains: [
        n.BACKSLASH_ESCAPE,
        t
      ]
    }, a = {
      className: "variable",
      begin: /\$\([\w-]+\s/,
      end: /\)/,
      keywords: { built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value" },
      contains: [t]
    }, o = { begin: "^" + n.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)" }, i = {
      className: "meta",
      begin: /^\.PHONY:/,
      end: /$/,
      keywords: {
        $pattern: /[\.\w]+/,
        keyword: ".PHONY"
      }
    }, s = {
      className: "section",
      begin: /^[^\s]+:/,
      end: /$/,
      contains: [t]
    };
    return {
      name: "Makefile",
      aliases: [
        "mk",
        "mak",
        "make"
      ],
      keywords: {
        $pattern: /[\w-]+/,
        keyword: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
      },
      contains: [
        n.HASH_COMMENT_MODE,
        t,
        r,
        a,
        o,
        i,
        s
      ]
    };
  }
  return Yt = e, Yt;
}
var Zt, ui;
function uu() {
  if (ui) return Zt;
  ui = 1;
  function e(n) {
    const t = n.regex, r = [
      "abs",
      "accept",
      "alarm",
      "and",
      "atan2",
      "bind",
      "binmode",
      "bless",
      "break",
      "caller",
      "chdir",
      "chmod",
      "chomp",
      "chop",
      "chown",
      "chr",
      "chroot",
      "class",
      "close",
      "closedir",
      "connect",
      "continue",
      "cos",
      "crypt",
      "dbmclose",
      "dbmopen",
      "defined",
      "delete",
      "die",
      "do",
      "dump",
      "each",
      "else",
      "elsif",
      "endgrent",
      "endhostent",
      "endnetent",
      "endprotoent",
      "endpwent",
      "endservent",
      "eof",
      "eval",
      "exec",
      "exists",
      "exit",
      "exp",
      "fcntl",
      "field",
      "fileno",
      "flock",
      "for",
      "foreach",
      "fork",
      "format",
      "formline",
      "getc",
      "getgrent",
      "getgrgid",
      "getgrnam",
      "gethostbyaddr",
      "gethostbyname",
      "gethostent",
      "getlogin",
      "getnetbyaddr",
      "getnetbyname",
      "getnetent",
      "getpeername",
      "getpgrp",
      "getpriority",
      "getprotobyname",
      "getprotobynumber",
      "getprotoent",
      "getpwent",
      "getpwnam",
      "getpwuid",
      "getservbyname",
      "getservbyport",
      "getservent",
      "getsockname",
      "getsockopt",
      "given",
      "glob",
      "gmtime",
      "goto",
      "grep",
      "gt",
      "hex",
      "if",
      "index",
      "int",
      "ioctl",
      "join",
      "keys",
      "kill",
      "last",
      "lc",
      "lcfirst",
      "length",
      "link",
      "listen",
      "local",
      "localtime",
      "log",
      "lstat",
      "lt",
      "ma",
      "map",
      "method",
      "mkdir",
      "msgctl",
      "msgget",
      "msgrcv",
      "msgsnd",
      "my",
      "ne",
      "next",
      "no",
      "not",
      "oct",
      "open",
      "opendir",
      "or",
      "ord",
      "our",
      "pack",
      "package",
      "pipe",
      "pop",
      "pos",
      "print",
      "printf",
      "prototype",
      "push",
      "q|0",
      "qq",
      "quotemeta",
      "qw",
      "qx",
      "rand",
      "read",
      "readdir",
      "readline",
      "readlink",
      "readpipe",
      "recv",
      "redo",
      "ref",
      "rename",
      "require",
      "reset",
      "return",
      "reverse",
      "rewinddir",
      "rindex",
      "rmdir",
      "say",
      "scalar",
      "seek",
      "seekdir",
      "select",
      "semctl",
      "semget",
      "semop",
      "send",
      "setgrent",
      "sethostent",
      "setnetent",
      "setpgrp",
      "setpriority",
      "setprotoent",
      "setpwent",
      "setservent",
      "setsockopt",
      "shift",
      "shmctl",
      "shmget",
      "shmread",
      "shmwrite",
      "shutdown",
      "sin",
      "sleep",
      "socket",
      "socketpair",
      "sort",
      "splice",
      "split",
      "sprintf",
      "sqrt",
      "srand",
      "stat",
      "state",
      "study",
      "sub",
      "substr",
      "symlink",
      "syscall",
      "sysopen",
      "sysread",
      "sysseek",
      "system",
      "syswrite",
      "tell",
      "telldir",
      "tie",
      "tied",
      "time",
      "times",
      "tr",
      "truncate",
      "uc",
      "ucfirst",
      "umask",
      "undef",
      "unless",
      "unlink",
      "unpack",
      "unshift",
      "untie",
      "until",
      "use",
      "utime",
      "values",
      "vec",
      "wait",
      "waitpid",
      "wantarray",
      "warn",
      "when",
      "while",
      "write",
      "x|0",
      "xor",
      "y|0"
    ], a = /[dualxmsipngr]{0,12}/, o = {
      $pattern: /[\w.]+/,
      keyword: r.join(" ")
    }, i = {
      className: "subst",
      begin: "[$@]\\{",
      end: "\\}",
      keywords: o
    }, s = {
      begin: /->\{/,
      end: /\}/
      // contains defined later
    }, c = {
      scope: "attr",
      match: /\s+:\s*\w+(\s*\(.*?\))?/
    }, u = {
      scope: "variable",
      variants: [
        { begin: /\$\d/ },
        {
          begin: t.concat(
            /[$%@](?!")(\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,
            // negative look-ahead tries to avoid matching patterns that are not
            // Perl at all like $ident$, @ident@, etc.
            "(?![A-Za-z])(?![@$%])"
          )
        },
        {
          // Only $= is a special Perl variable and one can't declare @= or %=.
          begin: /[$%@](?!")[^\s\w{=]|\$=/,
          relevance: 0
        }
      ],
      contains: [c]
    }, l = {
      className: "number",
      variants: [
        // decimal numbers:
        // include the case where a number starts with a dot (eg. .9), and
        // the leading 0? avoids mixing the first and second match on 0.x cases
        { match: /0?\.[0-9][0-9_]+\b/ },
        // include the special versioned number (eg. v5.38)
        { match: /\bv?(0|[1-9][0-9_]*(\.[0-9_]+)?|[1-9][0-9_]*)\b/ },
        // non-decimal numbers:
        { match: /\b0[0-7][0-7_]*\b/ },
        { match: /\b0x[0-9a-fA-F][0-9a-fA-F_]*\b/ },
        { match: /\b0b[0-1][0-1_]*\b/ }
      ],
      relevance: 0
    }, f = [
      n.BACKSLASH_ESCAPE,
      i,
      u
    ], g = [
      /!/,
      /\//,
      /\|/,
      /\?/,
      /'/,
      /"/,
      // valid but infrequent and weird
      /#/
      // valid but infrequent and weird
    ], m = (v, y, _ = "\\1") => {
      const S = _ === "\\1" ? _ : t.concat(_, y);
      return t.concat(
        t.concat("(?:", v, ")"),
        y,
        /(?:\\.|[^\\\/])*?/,
        S,
        /(?:\\.|[^\\\/])*?/,
        _,
        a
      );
    }, h = (v, y, _) => t.concat(
      t.concat("(?:", v, ")"),
      y,
      /(?:\\.|[^\\\/])*?/,
      _,
      a
    ), p = [
      u,
      n.HASH_COMMENT_MODE,
      n.COMMENT(
        /^=\w/,
        /=cut/,
        { endsWithParent: !0 }
      ),
      s,
      {
        className: "string",
        contains: f,
        variants: [
          {
            begin: "q[qwxr]?\\s*\\(",
            end: "\\)",
            relevance: 5
          },
          {
            begin: "q[qwxr]?\\s*\\[",
            end: "\\]",
            relevance: 5
          },
          {
            begin: "q[qwxr]?\\s*\\{",
            end: "\\}",
            relevance: 5
          },
          {
            begin: "q[qwxr]?\\s*\\|",
            end: "\\|",
            relevance: 5
          },
          {
            begin: "q[qwxr]?\\s*<",
            end: ">",
            relevance: 5
          },
          {
            begin: "qw\\s+q",
            end: "q",
            relevance: 5
          },
          {
            begin: "'",
            end: "'",
            contains: [n.BACKSLASH_ESCAPE]
          },
          {
            begin: '"',
            end: '"'
          },
          {
            begin: "`",
            end: "`",
            contains: [n.BACKSLASH_ESCAPE]
          },
          {
            begin: /\{\w+\}/,
            relevance: 0
          },
          {
            begin: "-?\\w+\\s*=>",
            relevance: 0
          }
        ]
      },
      l,
      {
        // regexp container
        begin: "(\\/\\/|" + n.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
        keywords: "split return print reverse grep",
        relevance: 0,
        contains: [
          n.HASH_COMMENT_MODE,
          {
            className: "regexp",
            variants: [
              // allow matching common delimiters
              { begin: m("s|tr|y", t.either(...g, { capture: !0 })) },
              // and then paired delmis
              { begin: m("s|tr|y", "\\(", "\\)") },
              { begin: m("s|tr|y", "\\[", "\\]") },
              { begin: m("s|tr|y", "\\{", "\\}") }
            ],
            relevance: 2
          },
          {
            className: "regexp",
            variants: [
              {
                // could be a comment in many languages so do not count
                // as relevant
                begin: /(m|qr)\/\//,
                relevance: 0
              },
              // prefix is optional with /regex/
              { begin: h("(?:m|qr)?", /\//, /\//) },
              // allow matching common delimiters
              { begin: h("m|qr", t.either(...g, { capture: !0 }), /\1/) },
              // allow common paired delmins
              { begin: h("m|qr", /\(/, /\)/) },
              { begin: h("m|qr", /\[/, /\]/) },
              { begin: h("m|qr", /\{/, /\}/) }
            ]
          }
        ]
      },
      {
        className: "function",
        beginKeywords: "sub method",
        end: "(\\s*\\(.*?\\))?[;{]",
        excludeEnd: !0,
        relevance: 5,
        contains: [n.TITLE_MODE, c]
      },
      {
        className: "class",
        beginKeywords: "class",
        end: "[;{]",
        excludeEnd: !0,
        relevance: 5,
        contains: [n.TITLE_MODE, c, l]
      },
      {
        begin: "-\\w\\b",
        relevance: 0
      },
      {
        begin: "^__DATA__$",
        end: "^__END__$",
        subLanguage: "mojolicious",
        contains: [
          {
            begin: "^@@.*",
            end: "$",
            className: "comment"
          }
        ]
      }
    ];
    return i.contains = p, s.contains = p, {
      name: "Perl",
      aliases: [
        "pl",
        "pm"
      ],
      keywords: o,
      contains: p
    };
  }
  return Zt = e, Zt;
}
var Xt, di;
function du() {
  if (di) return Xt;
  di = 1;
  function e(n) {
    const t = {
      className: "built_in",
      begin: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
    }, r = /[a-zA-Z@][a-zA-Z0-9_]*/, c = {
      "variable.language": [
        "this",
        "super"
      ],
      $pattern: r,
      keyword: [
        "while",
        "export",
        "sizeof",
        "typedef",
        "const",
        "struct",
        "for",
        "union",
        "volatile",
        "static",
        "mutable",
        "if",
        "do",
        "return",
        "goto",
        "enum",
        "else",
        "break",
        "extern",
        "asm",
        "case",
        "default",
        "register",
        "explicit",
        "typename",
        "switch",
        "continue",
        "inline",
        "readonly",
        "assign",
        "readwrite",
        "self",
        "@synchronized",
        "id",
        "typeof",
        "nonatomic",
        "IBOutlet",
        "IBAction",
        "strong",
        "weak",
        "copy",
        "in",
        "out",
        "inout",
        "bycopy",
        "byref",
        "oneway",
        "__strong",
        "__weak",
        "__block",
        "__autoreleasing",
        "@private",
        "@protected",
        "@public",
        "@try",
        "@property",
        "@end",
        "@throw",
        "@catch",
        "@finally",
        "@autoreleasepool",
        "@synthesize",
        "@dynamic",
        "@selector",
        "@optional",
        "@required",
        "@encode",
        "@package",
        "@import",
        "@defs",
        "@compatibility_alias",
        "__bridge",
        "__bridge_transfer",
        "__bridge_retained",
        "__bridge_retain",
        "__covariant",
        "__contravariant",
        "__kindof",
        "_Nonnull",
        "_Nullable",
        "_Null_unspecified",
        "__FUNCTION__",
        "__PRETTY_FUNCTION__",
        "__attribute__",
        "getter",
        "setter",
        "retain",
        "unsafe_unretained",
        "nonnull",
        "nullable",
        "null_unspecified",
        "null_resettable",
        "class",
        "instancetype",
        "NS_DESIGNATED_INITIALIZER",
        "NS_UNAVAILABLE",
        "NS_REQUIRES_SUPER",
        "NS_RETURNS_INNER_POINTER",
        "NS_INLINE",
        "NS_AVAILABLE",
        "NS_DEPRECATED",
        "NS_ENUM",
        "NS_OPTIONS",
        "NS_SWIFT_UNAVAILABLE",
        "NS_ASSUME_NONNULL_BEGIN",
        "NS_ASSUME_NONNULL_END",
        "NS_REFINED_FOR_SWIFT",
        "NS_SWIFT_NAME",
        "NS_SWIFT_NOTHROW",
        "NS_DURING",
        "NS_HANDLER",
        "NS_ENDHANDLER",
        "NS_VALUERETURN",
        "NS_VOIDRETURN"
      ],
      literal: [
        "false",
        "true",
        "FALSE",
        "TRUE",
        "nil",
        "YES",
        "NO",
        "NULL"
      ],
      built_in: [
        "dispatch_once_t",
        "dispatch_queue_t",
        "dispatch_sync",
        "dispatch_async",
        "dispatch_once"
      ],
      type: [
        "int",
        "float",
        "char",
        "unsigned",
        "signed",
        "short",
        "long",
        "double",
        "wchar_t",
        "unichar",
        "void",
        "bool",
        "BOOL",
        "id|0",
        "_Bool"
      ]
    }, u = {
      $pattern: r,
      keyword: [
        "@interface",
        "@class",
        "@protocol",
        "@implementation"
      ]
    };
    return {
      name: "Objective-C",
      aliases: [
        "mm",
        "objc",
        "obj-c",
        "obj-c++",
        "objective-c++"
      ],
      keywords: c,
      illegal: "</",
      contains: [
        t,
        n.C_LINE_COMMENT_MODE,
        n.C_BLOCK_COMMENT_MODE,
        n.C_NUMBER_MODE,
        n.QUOTE_STRING_MODE,
        n.APOS_STRING_MODE,
        {
          className: "string",
          variants: [
            {
              begin: '@"',
              end: '"',
              illegal: "\\n",
              contains: [n.BACKSLASH_ESCAPE]
            }
          ]
        },
        {
          className: "meta",
          begin: /#\s*[a-z]+\b/,
          end: /$/,
          keywords: { keyword: "if else elif endif define undef warning error line pragma ifdef ifndef include" },
          contains: [
            {
              begin: /\\\n/,
              relevance: 0
            },
            n.inherit(n.QUOTE_STRING_MODE, { className: "string" }),
            {
              className: "string",
              begin: /<.*?>/,
              end: /$/,
              illegal: "\\n"
            },
            n.C_LINE_COMMENT_MODE,
            n.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          className: "class",
          begin: "(" + u.keyword.join("|") + ")\\b",
          end: /(\{|$)/,
          excludeEnd: !0,
          keywords: u,
          contains: [n.UNDERSCORE_TITLE_MODE]
        },
        {
          begin: "\\." + n.UNDERSCORE_IDENT_RE,
          relevance: 0
        }
      ]
    };
  }
  return Xt = e, Xt;
}
var Vt, fi;
function fu() {
  if (fi) return Vt;
  fi = 1;
  function e(n) {
    const t = n.regex, r = /(?![A-Za-z0-9])(?![$])/, a = t.concat(
      /[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,
      r
    ), o = t.concat(
      /(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,
      r
    ), i = {
      scope: "variable",
      match: "\\$+" + a
    }, s = {
      scope: "meta",
      variants: [
        { begin: /<\?php/, relevance: 10 },
        // boost for obvious PHP
        { begin: /<\?=/ },
        // less relevant per PSR-1 which says not to use short-tags
        { begin: /<\?/, relevance: 0.1 },
        { begin: /\?>/ }
        // end php tag
      ]
    }, c = {
      scope: "subst",
      variants: [
        { begin: /\$\w+/ },
        {
          begin: /\{\$/,
          end: /\}/
        }
      ]
    }, u = n.inherit(n.APOS_STRING_MODE, { illegal: null }), l = n.inherit(n.QUOTE_STRING_MODE, {
      illegal: null,
      contains: n.QUOTE_STRING_MODE.contains.concat(c)
    }), f = {
      begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
      end: /[ \t]*(\w+)\b/,
      contains: n.QUOTE_STRING_MODE.contains.concat(c),
      "on:begin": (te, Q) => {
        Q.data._beginMatch = te[1] || te[2];
      },
      "on:end": (te, Q) => {
        Q.data._beginMatch !== te[1] && Q.ignoreMatch();
      }
    }, g = n.END_SAME_AS_BEGIN({
      begin: /<<<[ \t]*'(\w+)'\n/,
      end: /[ \t]*(\w+)\b/
    }), m = `[ 	
]`, h = {
      scope: "string",
      variants: [
        l,
        u,
        f,
        g
      ]
    }, p = {
      scope: "number",
      variants: [
        { begin: "\\b0[bB][01]+(?:_[01]+)*\\b" },
        // Binary w/ underscore support
        { begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b" },
        // Octals w/ underscore support
        { begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b" },
        // Hex w/ underscore support
        // Decimals w/ underscore support, with optional fragments and scientific exponent (e) suffix.
        { begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?" }
      ],
      relevance: 0
    }, v = [
      "false",
      "null",
      "true"
    ], y = [
      // Magic constants:
      // <https://www.php.net/manual/en/language.constants.predefined.php>
      "__CLASS__",
      "__DIR__",
      "__FILE__",
      "__FUNCTION__",
      "__COMPILER_HALT_OFFSET__",
      "__LINE__",
      "__METHOD__",
      "__NAMESPACE__",
      "__TRAIT__",
      // Function that look like language construct or language construct that look like function:
      // List of keywords that may not require parenthesis
      "die",
      "echo",
      "exit",
      "include",
      "include_once",
      "print",
      "require",
      "require_once",
      // These are not language construct (function) but operate on the currently-executing function and can access the current symbol table
      // 'compact extract func_get_arg func_get_args func_num_args get_called_class get_parent_class ' +
      // Other keywords:
      // <https://www.php.net/manual/en/reserved.php>
      // <https://www.php.net/manual/en/language.types.type-juggling.php>
      "array",
      "abstract",
      "and",
      "as",
      "binary",
      "bool",
      "boolean",
      "break",
      "callable",
      "case",
      "catch",
      "class",
      "clone",
      "const",
      "continue",
      "declare",
      "default",
      "do",
      "double",
      "else",
      "elseif",
      "empty",
      "enddeclare",
      "endfor",
      "endforeach",
      "endif",
      "endswitch",
      "endwhile",
      "enum",
      "eval",
      "extends",
      "final",
      "finally",
      "float",
      "for",
      "foreach",
      "from",
      "global",
      "goto",
      "if",
      "implements",
      "instanceof",
      "insteadof",
      "int",
      "integer",
      "interface",
      "isset",
      "iterable",
      "list",
      "match|0",
      "mixed",
      "new",
      "never",
      "object",
      "or",
      "private",
      "protected",
      "public",
      "readonly",
      "real",
      "return",
      "string",
      "switch",
      "throw",
      "trait",
      "try",
      "unset",
      "use",
      "var",
      "void",
      "while",
      "xor",
      "yield"
    ], _ = [
      // Standard PHP library:
      // <https://www.php.net/manual/en/book.spl.php>
      "Error|0",
      "AppendIterator",
      "ArgumentCountError",
      "ArithmeticError",
      "ArrayIterator",
      "ArrayObject",
      "AssertionError",
      "BadFunctionCallException",
      "BadMethodCallException",
      "CachingIterator",
      "CallbackFilterIterator",
      "CompileError",
      "Countable",
      "DirectoryIterator",
      "DivisionByZeroError",
      "DomainException",
      "EmptyIterator",
      "ErrorException",
      "Exception",
      "FilesystemIterator",
      "FilterIterator",
      "GlobIterator",
      "InfiniteIterator",
      "InvalidArgumentException",
      "IteratorIterator",
      "LengthException",
      "LimitIterator",
      "LogicException",
      "MultipleIterator",
      "NoRewindIterator",
      "OutOfBoundsException",
      "OutOfRangeException",
      "OuterIterator",
      "OverflowException",
      "ParentIterator",
      "ParseError",
      "RangeException",
      "RecursiveArrayIterator",
      "RecursiveCachingIterator",
      "RecursiveCallbackFilterIterator",
      "RecursiveDirectoryIterator",
      "RecursiveFilterIterator",
      "RecursiveIterator",
      "RecursiveIteratorIterator",
      "RecursiveRegexIterator",
      "RecursiveTreeIterator",
      "RegexIterator",
      "RuntimeException",
      "SeekableIterator",
      "SplDoublyLinkedList",
      "SplFileInfo",
      "SplFileObject",
      "SplFixedArray",
      "SplHeap",
      "SplMaxHeap",
      "SplMinHeap",
      "SplObjectStorage",
      "SplObserver",
      "SplPriorityQueue",
      "SplQueue",
      "SplStack",
      "SplSubject",
      "SplTempFileObject",
      "TypeError",
      "UnderflowException",
      "UnexpectedValueException",
      "UnhandledMatchError",
      // Reserved interfaces:
      // <https://www.php.net/manual/en/reserved.interfaces.php>
      "ArrayAccess",
      "BackedEnum",
      "Closure",
      "Fiber",
      "Generator",
      "Iterator",
      "IteratorAggregate",
      "Serializable",
      "Stringable",
      "Throwable",
      "Traversable",
      "UnitEnum",
      "WeakReference",
      "WeakMap",
      // Reserved classes:
      // <https://www.php.net/manual/en/reserved.classes.php>
      "Directory",
      "__PHP_Incomplete_Class",
      "parent",
      "php_user_filter",
      "self",
      "static",
      "stdClass"
    ], M = {
      keyword: y,
      literal: ((te) => {
        const Q = [];
        return te.forEach((ue) => {
          Q.push(ue), ue.toLowerCase() === ue ? Q.push(ue.toUpperCase()) : Q.push(ue.toLowerCase());
        }), Q;
      })(v),
      built_in: _
    }, x = (te) => te.map((Q) => Q.replace(/\|\d+$/, "")), W = { variants: [
      {
        match: [
          /new/,
          t.concat(m, "+"),
          // to prevent built ins from being confused as the class constructor call
          t.concat("(?!", x(_).join("\\b|"), "\\b)"),
          o
        ],
        scope: {
          1: "keyword",
          4: "title.class"
        }
      }
    ] }, K = t.concat(a, "\\b(?!\\()"), D = { variants: [
      {
        match: [
          t.concat(
            /::/,
            t.lookahead(/(?!class\b)/)
          ),
          K
        ],
        scope: { 2: "variable.constant" }
      },
      {
        match: [
          /::/,
          /class/
        ],
        scope: { 2: "variable.language" }
      },
      {
        match: [
          o,
          t.concat(
            /::/,
            t.lookahead(/(?!class\b)/)
          ),
          K
        ],
        scope: {
          1: "title.class",
          3: "variable.constant"
        }
      },
      {
        match: [
          o,
          t.concat(
            "::",
            t.lookahead(/(?!class\b)/)
          )
        ],
        scope: { 1: "title.class" }
      },
      {
        match: [
          o,
          /::/,
          /class/
        ],
        scope: {
          1: "title.class",
          3: "variable.language"
        }
      }
    ] }, H = {
      scope: "attr",
      match: t.concat(a, t.lookahead(":"), t.lookahead(/(?!::)/))
    }, ge = {
      relevance: 0,
      begin: /\(/,
      end: /\)/,
      keywords: M,
      contains: [
        H,
        i,
        D,
        n.C_BLOCK_COMMENT_MODE,
        h,
        p,
        W
      ]
    }, ae = {
      relevance: 0,
      match: [
        /\b/,
        // to prevent keywords from being confused as the function title
        t.concat("(?!fn\\b|function\\b|", x(y).join("\\b|"), "|", x(_).join("\\b|"), "\\b)"),
        a,
        t.concat(m, "*"),
        t.lookahead(/(?=\()/)
      ],
      scope: { 3: "title.function.invoke" },
      contains: [ge]
    };
    ge.contains.push(ae);
    const Ee = [
      H,
      D,
      n.C_BLOCK_COMMENT_MODE,
      h,
      p,
      W
    ], le = {
      begin: t.concat(/#\[\s*/, o),
      beginScope: "meta",
      end: /]/,
      endScope: "meta",
      keywords: {
        literal: v,
        keyword: [
          "new",
          "array"
        ]
      },
      contains: [
        {
          begin: /\[/,
          end: /]/,
          keywords: {
            literal: v,
            keyword: [
              "new",
              "array"
            ]
          },
          contains: [
            "self",
            ...Ee
          ]
        },
        ...Ee,
        {
          scope: "meta",
          match: o
        }
      ]
    };
    return {
      case_insensitive: !1,
      keywords: M,
      contains: [
        le,
        n.HASH_COMMENT_MODE,
        n.COMMENT("//", "$"),
        n.COMMENT(
          "/\\*",
          "\\*/",
          { contains: [
            {
              scope: "doctag",
              match: "@[A-Za-z]+"
            }
          ] }
        ),
        {
          match: /__halt_compiler\(\);/,
          keywords: "__halt_compiler",
          starts: {
            scope: "comment",
            end: n.MATCH_NOTHING_RE,
            contains: [
              {
                match: /\?>/,
                scope: "meta",
                endsParent: !0
              }
            ]
          }
        },
        s,
        {
          scope: "variable.language",
          match: /\$this\b/
        },
        i,
        ae,
        D,
        {
          match: [
            /const/,
            /\s/,
            a
          ],
          scope: {
            1: "keyword",
            3: "variable.constant"
          }
        },
        W,
        {
          scope: "function",
          relevance: 0,
          beginKeywords: "fn function",
          end: /[;{]/,
          excludeEnd: !0,
          illegal: "[$%\\[]",
          contains: [
            { beginKeywords: "use" },
            n.UNDERSCORE_TITLE_MODE,
            {
              begin: "=>",
              // No markup, just a relevance booster
              endsParent: !0
            },
            {
              scope: "params",
              begin: "\\(",
              end: "\\)",
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: M,
              contains: [
                "self",
                i,
                D,
                n.C_BLOCK_COMMENT_MODE,
                h,
                p
              ]
            }
          ]
        },
        {
          scope: "class",
          variants: [
            {
              beginKeywords: "enum",
              illegal: /[($"]/
            },
            {
              beginKeywords: "class interface trait",
              illegal: /[:($"]/
            }
          ],
          relevance: 0,
          end: /\{/,
          excludeEnd: !0,
          contains: [
            { beginKeywords: "extends implements" },
            n.UNDERSCORE_TITLE_MODE
          ]
        },
        // both use and namespace still use "old style" rules (vs multi-match)
        // because the namespace name can include `\` and we still want each
        // element to be treated as its own *individual* title
        {
          beginKeywords: "namespace",
          relevance: 0,
          end: ";",
          illegal: /[.']/,
          contains: [n.inherit(n.UNDERSCORE_TITLE_MODE, { scope: "title.class" })]
        },
        {
          beginKeywords: "use",
          relevance: 0,
          end: ";",
          contains: [
            // TODO: title.function vs title.class
            {
              match: /\b(as|const|function)\b/,
              scope: "keyword"
            },
            // TODO: could be title.class or title.function
            n.UNDERSCORE_TITLE_MODE
          ]
        },
        h,
        p
      ]
    };
  }
  return Vt = e, Vt;
}
var jt, gi;
function gu() {
  if (gi) return jt;
  gi = 1;
  function e(n) {
    return {
      name: "PHP template",
      subLanguage: "xml",
      contains: [
        {
          begin: /<\?(php|=)?/,
          end: /\?>/,
          subLanguage: "php",
          contains: [
            // We don't want the php closing tag ?> to close the PHP block when
            // inside any of the following blocks:
            {
              begin: "/\\*",
              end: "\\*/",
              skip: !0
            },
            {
              begin: 'b"',
              end: '"',
              skip: !0
            },
            {
              begin: "b'",
              end: "'",
              skip: !0
            },
            n.inherit(n.APOS_STRING_MODE, {
              illegal: null,
              className: null,
              contains: null,
              skip: !0
            }),
            n.inherit(n.QUOTE_STRING_MODE, {
              illegal: null,
              className: null,
              contains: null,
              skip: !0
            })
          ]
        }
      ]
    };
  }
  return jt = e, jt;
}
var Qt, mi;
function mu() {
  if (mi) return Qt;
  mi = 1;
  function e(n) {
    return {
      name: "Plain text",
      aliases: [
        "text",
        "txt"
      ],
      disableAutodetect: !0
    };
  }
  return Qt = e, Qt;
}
var Jt, bi;
function bu() {
  if (bi) return Jt;
  bi = 1;
  function e(n) {
    const t = n.regex, r = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u"), a = [
      "and",
      "as",
      "assert",
      "async",
      "await",
      "break",
      "case",
      "class",
      "continue",
      "def",
      "del",
      "elif",
      "else",
      "except",
      "finally",
      "for",
      "from",
      "global",
      "if",
      "import",
      "in",
      "is",
      "lambda",
      "match",
      "nonlocal|10",
      "not",
      "or",
      "pass",
      "raise",
      "return",
      "try",
      "while",
      "with",
      "yield"
    ], c = {
      $pattern: /[A-Za-z]\w+|__\w+__/,
      keyword: a,
      built_in: [
        "__import__",
        "abs",
        "all",
        "any",
        "ascii",
        "bin",
        "bool",
        "breakpoint",
        "bytearray",
        "bytes",
        "callable",
        "chr",
        "classmethod",
        "compile",
        "complex",
        "delattr",
        "dict",
        "dir",
        "divmod",
        "enumerate",
        "eval",
        "exec",
        "filter",
        "float",
        "format",
        "frozenset",
        "getattr",
        "globals",
        "hasattr",
        "hash",
        "help",
        "hex",
        "id",
        "input",
        "int",
        "isinstance",
        "issubclass",
        "iter",
        "len",
        "list",
        "locals",
        "map",
        "max",
        "memoryview",
        "min",
        "next",
        "object",
        "oct",
        "open",
        "ord",
        "pow",
        "print",
        "property",
        "range",
        "repr",
        "reversed",
        "round",
        "set",
        "setattr",
        "slice",
        "sorted",
        "staticmethod",
        "str",
        "sum",
        "super",
        "tuple",
        "type",
        "vars",
        "zip"
      ],
      literal: [
        "__debug__",
        "Ellipsis",
        "False",
        "None",
        "NotImplemented",
        "True"
      ],
      type: [
        "Any",
        "Callable",
        "Coroutine",
        "Dict",
        "List",
        "Literal",
        "Generic",
        "Optional",
        "Sequence",
        "Set",
        "Tuple",
        "Type",
        "Union"
      ]
    }, u = {
      className: "meta",
      begin: /^(>>>|\.\.\.) /
    }, l = {
      className: "subst",
      begin: /\{/,
      end: /\}/,
      keywords: c,
      illegal: /#/
    }, f = {
      begin: /\{\{/,
      relevance: 0
    }, g = {
      className: "string",
      contains: [n.BACKSLASH_ESCAPE],
      variants: [
        {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
          end: /'''/,
          contains: [
            n.BACKSLASH_ESCAPE,
            u
          ],
          relevance: 10
        },
        {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
          end: /"""/,
          contains: [
            n.BACKSLASH_ESCAPE,
            u
          ],
          relevance: 10
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])'''/,
          end: /'''/,
          contains: [
            n.BACKSLASH_ESCAPE,
            u,
            f,
            l
          ]
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])"""/,
          end: /"""/,
          contains: [
            n.BACKSLASH_ESCAPE,
            u,
            f,
            l
          ]
        },
        {
          begin: /([uU]|[rR])'/,
          end: /'/,
          relevance: 10
        },
        {
          begin: /([uU]|[rR])"/,
          end: /"/,
          relevance: 10
        },
        {
          begin: /([bB]|[bB][rR]|[rR][bB])'/,
          end: /'/
        },
        {
          begin: /([bB]|[bB][rR]|[rR][bB])"/,
          end: /"/
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])'/,
          end: /'/,
          contains: [
            n.BACKSLASH_ESCAPE,
            f,
            l
          ]
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])"/,
          end: /"/,
          contains: [
            n.BACKSLASH_ESCAPE,
            f,
            l
          ]
        },
        n.APOS_STRING_MODE,
        n.QUOTE_STRING_MODE
      ]
    }, m = "[0-9](_?[0-9])*", h = `(\\b(${m}))?\\.(${m})|\\b(${m})\\.`, p = `\\b|${a.join("|")}`, v = {
      className: "number",
      relevance: 0,
      variants: [
        // exponentfloat, pointfloat
        // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
        // optionally imaginary
        // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
        // Note: no leading \b because floats can start with a decimal point
        // and we don't want to mishandle e.g. `fn(.5)`,
        // no trailing \b for pointfloat because it can end with a decimal point
        // and we don't want to mishandle e.g. `0..hex()`; this should be safe
        // because both MUST contain a decimal point and so cannot be confused with
        // the interior part of an identifier
        {
          begin: `(\\b(${m})|(${h}))[eE][+-]?(${m})[jJ]?(?=${p})`
        },
        {
          begin: `(${h})[jJ]?`
        },
        // decinteger, bininteger, octinteger, hexinteger
        // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
        // optionally "long" in Python 2
        // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
        // decinteger is optionally imaginary
        // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
        {
          begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${p})`
        },
        {
          begin: `\\b0[bB](_?[01])+[lL]?(?=${p})`
        },
        {
          begin: `\\b0[oO](_?[0-7])+[lL]?(?=${p})`
        },
        {
          begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${p})`
        },
        // imagnumber (digitpart-based)
        // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
        {
          begin: `\\b(${m})[jJ](?=${p})`
        }
      ]
    }, y = {
      className: "comment",
      begin: t.lookahead(/# type:/),
      end: /$/,
      keywords: c,
      contains: [
        {
          // prevent keywords from coloring `type`
          begin: /# type:/
        },
        // comment within a datatype comment includes no keywords
        {
          begin: /#/,
          end: /\b\B/,
          endsWithParent: !0
        }
      ]
    }, _ = {
      className: "params",
      variants: [
        // Exclude params in functions without params
        {
          className: "",
          begin: /\(\s*\)/,
          skip: !0
        },
        {
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: c,
          contains: [
            "self",
            u,
            v,
            g,
            n.HASH_COMMENT_MODE
          ]
        }
      ]
    };
    return l.contains = [
      g,
      v,
      u
    ], {
      name: "Python",
      aliases: [
        "py",
        "gyp",
        "ipython"
      ],
      unicodeRegex: !0,
      keywords: c,
      illegal: /(<\/|\?)|=>/,
      contains: [
        u,
        v,
        {
          // very common convention
          scope: "variable.language",
          match: /\bself\b/
        },
        {
          // eat "if" prior to string so that it won't accidentally be
          // labeled as an f-string
          beginKeywords: "if",
          relevance: 0
        },
        { match: /\bor\b/, scope: "keyword" },
        g,
        y,
        n.HASH_COMMENT_MODE,
        {
          match: [
            /\bdef/,
            /\s+/,
            r
          ],
          scope: {
            1: "keyword",
            3: "title.function"
          },
          contains: [_]
        },
        {
          variants: [
            {
              match: [
                /\bclass/,
                /\s+/,
                r,
                /\s*/,
                /\(\s*/,
                r,
                /\s*\)/
              ]
            },
            {
              match: [
                /\bclass/,
                /\s+/,
                r
              ]
            }
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            6: "title.class.inherited"
          }
        },
        {
          className: "meta",
          begin: /^[\t ]*@/,
          end: /(?=#)|$/,
          contains: [
            v,
            _,
            g
          ]
        }
      ]
    };
  }
  return Jt = e, Jt;
}
var er, pi;
function pu() {
  if (pi) return er;
  pi = 1;
  function e(n) {
    return {
      aliases: ["pycon"],
      contains: [
        {
          className: "meta.prompt",
          starts: {
            // a space separates the REPL prefix from the actual code
            // this is purely for cleaner HTML output
            end: / |$/,
            starts: {
              end: "$",
              subLanguage: "python"
            }
          },
          variants: [
            { begin: /^>>>(?=[ ]|$)/ },
            { begin: /^\.\.\.(?=[ ]|$)/ }
          ]
        }
      ]
    };
  }
  return er = e, er;
}
var nr, vi;
function vu() {
  if (vi) return nr;
  vi = 1;
  function e(n) {
    const t = n.regex, r = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/, a = t.either(
      // Special case: only hexadecimal binary powers can contain fractions
      /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,
      // Hexadecimal numbers without fraction and optional binary power
      /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,
      // Decimal numbers
      /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/
    ), o = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/, i = t.either(
      /[()]/,
      /[{}]/,
      /\[\[/,
      /[[\]]/,
      /\\/,
      /,/
    );
    return {
      name: "R",
      keywords: {
        $pattern: r,
        keyword: "function if in break next repeat else for while",
        literal: "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
        built_in: (
          // Builtin constants
          "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
        )
      },
      contains: [
        // Roxygen comments
        n.COMMENT(
          /#'/,
          /$/,
          { contains: [
            {
              // Handle `@examples` separately to cause all subsequent code
              // until the next `@`-tag on its own line to be kept as-is,
              // preventing highlighting. This code is example R code, so nested
              // doctags shouldn’t be treated as such. See
              // `test/markup/r/roxygen.txt` for an example.
              scope: "doctag",
              match: /@examples/,
              starts: {
                end: t.lookahead(t.either(
                  // end if another doc comment
                  /\n^#'\s*(?=@[a-zA-Z]+)/,
                  // or a line with no comment
                  /\n^(?!#')/
                )),
                endsParent: !0
              }
            },
            {
              // Handle `@param` to highlight the parameter name following
              // after.
              scope: "doctag",
              begin: "@param",
              end: /$/,
              contains: [
                {
                  scope: "variable",
                  variants: [
                    { match: r },
                    { match: /`(?:\\.|[^`\\])+`/ }
                  ],
                  endsParent: !0
                }
              ]
            },
            {
              scope: "doctag",
              match: /@[a-zA-Z]+/
            },
            {
              scope: "keyword",
              match: /\\[a-zA-Z]+/
            }
          ] }
        ),
        n.HASH_COMMENT_MODE,
        {
          scope: "string",
          contains: [n.BACKSLASH_ESCAPE],
          variants: [
            n.END_SAME_AS_BEGIN({
              begin: /[rR]"(-*)\(/,
              end: /\)(-*)"/
            }),
            n.END_SAME_AS_BEGIN({
              begin: /[rR]"(-*)\{/,
              end: /\}(-*)"/
            }),
            n.END_SAME_AS_BEGIN({
              begin: /[rR]"(-*)\[/,
              end: /\](-*)"/
            }),
            n.END_SAME_AS_BEGIN({
              begin: /[rR]'(-*)\(/,
              end: /\)(-*)'/
            }),
            n.END_SAME_AS_BEGIN({
              begin: /[rR]'(-*)\{/,
              end: /\}(-*)'/
            }),
            n.END_SAME_AS_BEGIN({
              begin: /[rR]'(-*)\[/,
              end: /\](-*)'/
            }),
            {
              begin: '"',
              end: '"',
              relevance: 0
            },
            {
              begin: "'",
              end: "'",
              relevance: 0
            }
          ]
        },
        // Matching numbers immediately following punctuation and operators is
        // tricky since we need to look at the character ahead of a number to
        // ensure the number is not part of an identifier, and we cannot use
        // negative look-behind assertions. So instead we explicitly handle all
        // possible combinations of (operator|punctuation), number.
        // TODO: replace with negative look-behind when available
        // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/ },
        // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/ },
        // { begin: /(?<![a-zA-Z0-9._])(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/ }
        {
          relevance: 0,
          variants: [
            {
              scope: {
                1: "operator",
                2: "number"
              },
              match: [
                o,
                a
              ]
            },
            {
              scope: {
                1: "operator",
                2: "number"
              },
              match: [
                /%[^%]*%/,
                a
              ]
            },
            {
              scope: {
                1: "punctuation",
                2: "number"
              },
              match: [
                i,
                a
              ]
            },
            {
              scope: { 2: "number" },
              match: [
                /[^a-zA-Z0-9._]|^/,
                // not part of an identifier, or start of document
                a
              ]
            }
          ]
        },
        // Operators/punctuation when they're not directly followed by numbers
        {
          // Relevance boost for the most common assignment form.
          scope: { 3: "operator" },
          match: [
            r,
            /\s+/,
            /<-/,
            /\s+/
          ]
        },
        {
          scope: "operator",
          relevance: 0,
          variants: [
            { match: o },
            { match: /%[^%]*%/ }
          ]
        },
        {
          scope: "punctuation",
          relevance: 0,
          match: i
        },
        {
          // Escaped identifier
          begin: "`",
          end: "`",
          contains: [{ begin: /\\./ }]
        }
      ]
    };
  }
  return nr = e, nr;
}
var tr, hi;
function hu() {
  if (hi) return tr;
  hi = 1;
  function e(n) {
    const t = n.regex, r = /(r#)?/, a = t.concat(r, n.UNDERSCORE_IDENT_RE), o = t.concat(r, n.IDENT_RE), i = {
      className: "title.function.invoke",
      relevance: 0,
      begin: t.concat(
        /\b/,
        /(?!let|for|while|if|else|match\b)/,
        o,
        t.lookahead(/\s*\(/)
      )
    }, s = "([ui](8|16|32|64|128|size)|f(32|64))?", c = [
      "abstract",
      "as",
      "async",
      "await",
      "become",
      "box",
      "break",
      "const",
      "continue",
      "crate",
      "do",
      "dyn",
      "else",
      "enum",
      "extern",
      "false",
      "final",
      "fn",
      "for",
      "if",
      "impl",
      "in",
      "let",
      "loop",
      "macro",
      "match",
      "mod",
      "move",
      "mut",
      "override",
      "priv",
      "pub",
      "ref",
      "return",
      "self",
      "Self",
      "static",
      "struct",
      "super",
      "trait",
      "true",
      "try",
      "type",
      "typeof",
      "union",
      "unsafe",
      "unsized",
      "use",
      "virtual",
      "where",
      "while",
      "yield"
    ], u = [
      "true",
      "false",
      "Some",
      "None",
      "Ok",
      "Err"
    ], l = [
      // functions
      "drop ",
      // traits
      "Copy",
      "Send",
      "Sized",
      "Sync",
      "Drop",
      "Fn",
      "FnMut",
      "FnOnce",
      "ToOwned",
      "Clone",
      "Debug",
      "PartialEq",
      "PartialOrd",
      "Eq",
      "Ord",
      "AsRef",
      "AsMut",
      "Into",
      "From",
      "Default",
      "Iterator",
      "Extend",
      "IntoIterator",
      "DoubleEndedIterator",
      "ExactSizeIterator",
      "SliceConcatExt",
      "ToString",
      // macros
      "assert!",
      "assert_eq!",
      "bitflags!",
      "bytes!",
      "cfg!",
      "col!",
      "concat!",
      "concat_idents!",
      "debug_assert!",
      "debug_assert_eq!",
      "env!",
      "eprintln!",
      "panic!",
      "file!",
      "format!",
      "format_args!",
      "include_bytes!",
      "include_str!",
      "line!",
      "local_data_key!",
      "module_path!",
      "option_env!",
      "print!",
      "println!",
      "select!",
      "stringify!",
      "try!",
      "unimplemented!",
      "unreachable!",
      "vec!",
      "write!",
      "writeln!",
      "macro_rules!",
      "assert_ne!",
      "debug_assert_ne!"
    ], f = [
      "i8",
      "i16",
      "i32",
      "i64",
      "i128",
      "isize",
      "u8",
      "u16",
      "u32",
      "u64",
      "u128",
      "usize",
      "f32",
      "f64",
      "str",
      "char",
      "bool",
      "Box",
      "Option",
      "Result",
      "String",
      "Vec"
    ];
    return {
      name: "Rust",
      aliases: ["rs"],
      keywords: {
        $pattern: n.IDENT_RE + "!?",
        type: f,
        keyword: c,
        literal: u,
        built_in: l
      },
      illegal: "</",
      contains: [
        n.C_LINE_COMMENT_MODE,
        n.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
        n.inherit(n.QUOTE_STRING_MODE, {
          begin: /b?"/,
          illegal: null
        }),
        {
          className: "string",
          variants: [
            { begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ },
            { begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ }
          ]
        },
        {
          className: "symbol",
          begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
        },
        {
          className: "number",
          variants: [
            { begin: "\\b0b([01_]+)" + s },
            { begin: "\\b0o([0-7_]+)" + s },
            { begin: "\\b0x([A-Fa-f0-9_]+)" + s },
            { begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + s }
          ],
          relevance: 0
        },
        {
          begin: [
            /fn/,
            /\s+/,
            a
          ],
          className: {
            1: "keyword",
            3: "title.function"
          }
        },
        {
          className: "meta",
          begin: "#!?\\[",
          end: "\\]",
          contains: [
            {
              className: "string",
              begin: /"/,
              end: /"/,
              contains: [
                n.BACKSLASH_ESCAPE
              ]
            }
          ]
        },
        {
          begin: [
            /let/,
            /\s+/,
            /(?:mut\s+)?/,
            a
          ],
          className: {
            1: "keyword",
            3: "keyword",
            4: "variable"
          }
        },
        // must come before impl/for rule later
        {
          begin: [
            /for/,
            /\s+/,
            a,
            /\s+/,
            /in/
          ],
          className: {
            1: "keyword",
            3: "variable",
            5: "keyword"
          }
        },
        {
          begin: [
            /type/,
            /\s+/,
            a
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        },
        {
          begin: [
            /(?:trait|enum|struct|union|impl|for)/,
            /\s+/,
            a
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        },
        {
          begin: n.IDENT_RE + "::",
          keywords: {
            keyword: "Self",
            built_in: l,
            type: f
          }
        },
        {
          className: "punctuation",
          begin: "->"
        },
        i
      ]
    };
  }
  return tr = e, tr;
}
var rr, _i;
function _u() {
  if (_i) return rr;
  _i = 1;
  const e = (u) => ({
    IMPORTANT: {
      scope: "meta",
      begin: "!important"
    },
    BLOCK_COMMENT: u.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
    },
    FUNCTION_DISPATCH: {
      className: "built_in",
      begin: /[\w-]+(?=\()/
    },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [
        u.APOS_STRING_MODE,
        u.QUOTE_STRING_MODE
      ]
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin: u.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    CSS_VARIABLE: {
      className: "attr",
      begin: /--[A-Za-z_][A-Za-z0-9_-]*/
    }
  }), n = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "optgroup",
    "option",
    "p",
    "picture",
    "q",
    "quote",
    "samp",
    "section",
    "select",
    "source",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video"
  ], t = [
    "defs",
    "g",
    "marker",
    "mask",
    "pattern",
    "svg",
    "switch",
    "symbol",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feFlood",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMorphology",
    "feOffset",
    "feSpecularLighting",
    "feTile",
    "feTurbulence",
    "linearGradient",
    "radialGradient",
    "stop",
    "circle",
    "ellipse",
    "image",
    "line",
    "path",
    "polygon",
    "polyline",
    "rect",
    "text",
    "use",
    "textPath",
    "tspan",
    "foreignObject",
    "clipPath"
  ], r = [
    ...n,
    ...t
  ], a = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    // TODO: find a better solution?
    "min-width",
    "max-width",
    "min-height",
    "max-height"
  ].sort().reverse(), o = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    // dir()
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    // has()
    "host",
    // host or host()
    "host-context",
    // host-context()
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    // is()
    "lang",
    // lang()
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    // not()
    "nth-child",
    // nth-child()
    "nth-col",
    // nth-col()
    "nth-last-child",
    // nth-last-child()
    "nth-last-col",
    // nth-last-col()
    "nth-last-of-type",
    //nth-last-of-type()
    "nth-of-type",
    //nth-of-type()
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where"
    // where()
  ].sort().reverse(), i = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error"
  ].sort().reverse(), s = [
    "accent-color",
    "align-content",
    "align-items",
    "align-self",
    "alignment-baseline",
    "all",
    "animation",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-timing-function",
    "appearance",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-repeat",
    "background-size",
    "baseline-shift",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-end-end-radius",
    "border-end-start-radius",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-start-end-radius",
    "border-start-start-radius",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-decoration-break",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "cx",
    "cy",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "color-scheme",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "direction",
    "display",
    "dominant-baseline",
    "empty-cells",
    "enable-background",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flow",
    "flood-color",
    "flood-opacity",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-size",
    "font-size-adjust",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-variant",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "gap",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "inline-size",
    "inset",
    "inset-block",
    "inset-block-end",
    "inset-block-start",
    "inset-inline",
    "inset-inline-end",
    "inset-inline-start",
    "isolation",
    "kerning",
    "justify-content",
    "justify-items",
    "justify-self",
    "left",
    "letter-spacing",
    "lighting-color",
    "line-break",
    "line-height",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "marker",
    "marker-end",
    "marker-mid",
    "marker-start",
    "mask",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "pointer-events",
    "position",
    "quotes",
    "r",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "rotate",
    "row-gap",
    "scale",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "shape-rendering",
    "stop-color",
    "stop-opacity",
    "stroke",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "speak",
    "speak-as",
    "src",
    // @font-face
    "tab-size",
    "table-layout",
    "text-anchor",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-skip-ink",
    "text-decoration-style",
    "text-decoration-thickness",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-transform",
    "text-underline-offset",
    "text-underline-position",
    "top",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "translate",
    "unicode-bidi",
    "vector-effect",
    "vertical-align",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "x",
    "y",
    "z-index"
  ].sort().reverse();
  function c(u) {
    const l = e(u), f = i, g = o, m = "@[a-z-]+", h = "and or not only", v = {
      className: "variable",
      begin: "(\\$" + "[a-zA-Z-][a-zA-Z0-9_-]*" + ")\\b",
      relevance: 0
    };
    return {
      name: "SCSS",
      case_insensitive: !0,
      illegal: "[=/|']",
      contains: [
        u.C_LINE_COMMENT_MODE,
        u.C_BLOCK_COMMENT_MODE,
        // to recognize keyframe 40% etc which are outside the scope of our
        // attribute value mode
        l.CSS_NUMBER_MODE,
        {
          className: "selector-id",
          begin: "#[A-Za-z0-9_-]+",
          relevance: 0
        },
        {
          className: "selector-class",
          begin: "\\.[A-Za-z0-9_-]+",
          relevance: 0
        },
        l.ATTRIBUTE_SELECTOR_MODE,
        {
          className: "selector-tag",
          begin: "\\b(" + r.join("|") + ")\\b",
          // was there, before, but why?
          relevance: 0
        },
        {
          className: "selector-pseudo",
          begin: ":(" + g.join("|") + ")"
        },
        {
          className: "selector-pseudo",
          begin: ":(:)?(" + f.join("|") + ")"
        },
        v,
        {
          // pseudo-selector params
          begin: /\(/,
          end: /\)/,
          contains: [l.CSS_NUMBER_MODE]
        },
        l.CSS_VARIABLE,
        {
          className: "attribute",
          begin: "\\b(" + s.join("|") + ")\\b"
        },
        { begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b" },
        {
          begin: /:/,
          end: /[;}{]/,
          relevance: 0,
          contains: [
            l.BLOCK_COMMENT,
            v,
            l.HEXCOLOR,
            l.CSS_NUMBER_MODE,
            u.QUOTE_STRING_MODE,
            u.APOS_STRING_MODE,
            l.IMPORTANT,
            l.FUNCTION_DISPATCH
          ]
        },
        // matching these here allows us to treat them more like regular CSS
        // rules so everything between the {} gets regular rule highlighting,
        // which is what we want for page and font-face
        {
          begin: "@(page|font-face)",
          keywords: {
            $pattern: m,
            keyword: "@page @font-face"
          }
        },
        {
          begin: "@",
          end: "[{;]",
          returnBegin: !0,
          keywords: {
            $pattern: /[a-z-]+/,
            keyword: h,
            attribute: a.join(" ")
          },
          contains: [
            {
              begin: m,
              className: "keyword"
            },
            {
              begin: /[a-z-]+(?=:)/,
              className: "attribute"
            },
            v,
            u.QUOTE_STRING_MODE,
            u.APOS_STRING_MODE,
            l.HEXCOLOR,
            l.CSS_NUMBER_MODE
          ]
        },
        l.FUNCTION_DISPATCH
      ]
    };
  }
  return rr = c, rr;
}
var ar, Ei;
function Eu() {
  if (Ei) return ar;
  Ei = 1;
  function e(n) {
    return {
      name: "Shell Session",
      aliases: [
        "console",
        "shellsession"
      ],
      contains: [
        {
          className: "meta.prompt",
          // We cannot add \s (spaces) in the regular expression otherwise it will be too broad and produce unexpected result.
          // For instance, in the following example, it would match "echo /path/to/home >" as a prompt:
          // echo /path/to/home > t.exe
          begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
          starts: {
            end: /[^\\](?=\s*$)/,
            subLanguage: "bash"
          }
        }
      ]
    };
  }
  return ar = e, ar;
}
var ir, yi;
function yu() {
  if (yi) return ir;
  yi = 1;
  function e(n) {
    const t = n.regex, r = n.COMMENT("--", "$"), a = {
      className: "string",
      variants: [
        {
          begin: /'/,
          end: /'/,
          contains: [{ begin: /''/ }]
        }
      ]
    }, o = {
      begin: /"/,
      end: /"/,
      contains: [{ begin: /""/ }]
    }, i = [
      "true",
      "false",
      // Not sure it's correct to call NULL literal, and clauses like IS [NOT] NULL look strange that way.
      // "null",
      "unknown"
    ], s = [
      "double precision",
      "large object",
      "with timezone",
      "without timezone"
    ], c = [
      "bigint",
      "binary",
      "blob",
      "boolean",
      "char",
      "character",
      "clob",
      "date",
      "dec",
      "decfloat",
      "decimal",
      "float",
      "int",
      "integer",
      "interval",
      "nchar",
      "nclob",
      "national",
      "numeric",
      "real",
      "row",
      "smallint",
      "time",
      "timestamp",
      "varchar",
      "varying",
      // modifier (character varying)
      "varbinary"
    ], u = [
      "add",
      "asc",
      "collation",
      "desc",
      "final",
      "first",
      "last",
      "view"
    ], l = [
      "abs",
      "acos",
      "all",
      "allocate",
      "alter",
      "and",
      "any",
      "are",
      "array",
      "array_agg",
      "array_max_cardinality",
      "as",
      "asensitive",
      "asin",
      "asymmetric",
      "at",
      "atan",
      "atomic",
      "authorization",
      "avg",
      "begin",
      "begin_frame",
      "begin_partition",
      "between",
      "bigint",
      "binary",
      "blob",
      "boolean",
      "both",
      "by",
      "call",
      "called",
      "cardinality",
      "cascaded",
      "case",
      "cast",
      "ceil",
      "ceiling",
      "char",
      "char_length",
      "character",
      "character_length",
      "check",
      "classifier",
      "clob",
      "close",
      "coalesce",
      "collate",
      "collect",
      "column",
      "commit",
      "condition",
      "connect",
      "constraint",
      "contains",
      "convert",
      "copy",
      "corr",
      "corresponding",
      "cos",
      "cosh",
      "count",
      "covar_pop",
      "covar_samp",
      "create",
      "cross",
      "cube",
      "cume_dist",
      "current",
      "current_catalog",
      "current_date",
      "current_default_transform_group",
      "current_path",
      "current_role",
      "current_row",
      "current_schema",
      "current_time",
      "current_timestamp",
      "current_path",
      "current_role",
      "current_transform_group_for_type",
      "current_user",
      "cursor",
      "cycle",
      "date",
      "day",
      "deallocate",
      "dec",
      "decimal",
      "decfloat",
      "declare",
      "default",
      "define",
      "delete",
      "dense_rank",
      "deref",
      "describe",
      "deterministic",
      "disconnect",
      "distinct",
      "double",
      "drop",
      "dynamic",
      "each",
      "element",
      "else",
      "empty",
      "end",
      "end_frame",
      "end_partition",
      "end-exec",
      "equals",
      "escape",
      "every",
      "except",
      "exec",
      "execute",
      "exists",
      "exp",
      "external",
      "extract",
      "false",
      "fetch",
      "filter",
      "first_value",
      "float",
      "floor",
      "for",
      "foreign",
      "frame_row",
      "free",
      "from",
      "full",
      "function",
      "fusion",
      "get",
      "global",
      "grant",
      "group",
      "grouping",
      "groups",
      "having",
      "hold",
      "hour",
      "identity",
      "in",
      "indicator",
      "initial",
      "inner",
      "inout",
      "insensitive",
      "insert",
      "int",
      "integer",
      "intersect",
      "intersection",
      "interval",
      "into",
      "is",
      "join",
      "json_array",
      "json_arrayagg",
      "json_exists",
      "json_object",
      "json_objectagg",
      "json_query",
      "json_table",
      "json_table_primitive",
      "json_value",
      "lag",
      "language",
      "large",
      "last_value",
      "lateral",
      "lead",
      "leading",
      "left",
      "like",
      "like_regex",
      "listagg",
      "ln",
      "local",
      "localtime",
      "localtimestamp",
      "log",
      "log10",
      "lower",
      "match",
      "match_number",
      "match_recognize",
      "matches",
      "max",
      "member",
      "merge",
      "method",
      "min",
      "minute",
      "mod",
      "modifies",
      "module",
      "month",
      "multiset",
      "national",
      "natural",
      "nchar",
      "nclob",
      "new",
      "no",
      "none",
      "normalize",
      "not",
      "nth_value",
      "ntile",
      "null",
      "nullif",
      "numeric",
      "octet_length",
      "occurrences_regex",
      "of",
      "offset",
      "old",
      "omit",
      "on",
      "one",
      "only",
      "open",
      "or",
      "order",
      "out",
      "outer",
      "over",
      "overlaps",
      "overlay",
      "parameter",
      "partition",
      "pattern",
      "per",
      "percent",
      "percent_rank",
      "percentile_cont",
      "percentile_disc",
      "period",
      "portion",
      "position",
      "position_regex",
      "power",
      "precedes",
      "precision",
      "prepare",
      "primary",
      "procedure",
      "ptf",
      "range",
      "rank",
      "reads",
      "real",
      "recursive",
      "ref",
      "references",
      "referencing",
      "regr_avgx",
      "regr_avgy",
      "regr_count",
      "regr_intercept",
      "regr_r2",
      "regr_slope",
      "regr_sxx",
      "regr_sxy",
      "regr_syy",
      "release",
      "result",
      "return",
      "returns",
      "revoke",
      "right",
      "rollback",
      "rollup",
      "row",
      "row_number",
      "rows",
      "running",
      "savepoint",
      "scope",
      "scroll",
      "search",
      "second",
      "seek",
      "select",
      "sensitive",
      "session_user",
      "set",
      "show",
      "similar",
      "sin",
      "sinh",
      "skip",
      "smallint",
      "some",
      "specific",
      "specifictype",
      "sql",
      "sqlexception",
      "sqlstate",
      "sqlwarning",
      "sqrt",
      "start",
      "static",
      "stddev_pop",
      "stddev_samp",
      "submultiset",
      "subset",
      "substring",
      "substring_regex",
      "succeeds",
      "sum",
      "symmetric",
      "system",
      "system_time",
      "system_user",
      "table",
      "tablesample",
      "tan",
      "tanh",
      "then",
      "time",
      "timestamp",
      "timezone_hour",
      "timezone_minute",
      "to",
      "trailing",
      "translate",
      "translate_regex",
      "translation",
      "treat",
      "trigger",
      "trim",
      "trim_array",
      "true",
      "truncate",
      "uescape",
      "union",
      "unique",
      "unknown",
      "unnest",
      "update",
      "upper",
      "user",
      "using",
      "value",
      "values",
      "value_of",
      "var_pop",
      "var_samp",
      "varbinary",
      "varchar",
      "varying",
      "versioning",
      "when",
      "whenever",
      "where",
      "width_bucket",
      "window",
      "with",
      "within",
      "without",
      "year"
    ], f = [
      "abs",
      "acos",
      "array_agg",
      "asin",
      "atan",
      "avg",
      "cast",
      "ceil",
      "ceiling",
      "coalesce",
      "corr",
      "cos",
      "cosh",
      "count",
      "covar_pop",
      "covar_samp",
      "cume_dist",
      "dense_rank",
      "deref",
      "element",
      "exp",
      "extract",
      "first_value",
      "floor",
      "json_array",
      "json_arrayagg",
      "json_exists",
      "json_object",
      "json_objectagg",
      "json_query",
      "json_table",
      "json_table_primitive",
      "json_value",
      "lag",
      "last_value",
      "lead",
      "listagg",
      "ln",
      "log",
      "log10",
      "lower",
      "max",
      "min",
      "mod",
      "nth_value",
      "ntile",
      "nullif",
      "percent_rank",
      "percentile_cont",
      "percentile_disc",
      "position",
      "position_regex",
      "power",
      "rank",
      "regr_avgx",
      "regr_avgy",
      "regr_count",
      "regr_intercept",
      "regr_r2",
      "regr_slope",
      "regr_sxx",
      "regr_sxy",
      "regr_syy",
      "row_number",
      "sin",
      "sinh",
      "sqrt",
      "stddev_pop",
      "stddev_samp",
      "substring",
      "substring_regex",
      "sum",
      "tan",
      "tanh",
      "translate",
      "translate_regex",
      "treat",
      "trim",
      "trim_array",
      "unnest",
      "upper",
      "value_of",
      "var_pop",
      "var_samp",
      "width_bucket"
    ], g = [
      "current_catalog",
      "current_date",
      "current_default_transform_group",
      "current_path",
      "current_role",
      "current_schema",
      "current_transform_group_for_type",
      "current_user",
      "session_user",
      "system_time",
      "system_user",
      "current_time",
      "localtime",
      "current_timestamp",
      "localtimestamp"
    ], m = [
      "create table",
      "insert into",
      "primary key",
      "foreign key",
      "not null",
      "alter table",
      "add constraint",
      "grouping sets",
      "on overflow",
      "character set",
      "respect nulls",
      "ignore nulls",
      "nulls first",
      "nulls last",
      "depth first",
      "breadth first"
    ], h = f, p = [
      ...l,
      ...u
    ].filter((M) => !f.includes(M)), v = {
      className: "variable",
      begin: /@[a-z0-9][a-z0-9_]*/
    }, y = {
      className: "operator",
      begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
      relevance: 0
    }, _ = {
      begin: t.concat(/\b/, t.either(...h), /\s*\(/),
      relevance: 0,
      keywords: { built_in: h }
    };
    function S(M, {
      exceptions: x,
      when: W
    } = {}) {
      const K = W;
      return x = x || [], M.map((D) => D.match(/\|\d+$/) || x.includes(D) ? D : K(D) ? `${D}|0` : D);
    }
    return {
      name: "SQL",
      case_insensitive: !0,
      // does not include {} or HTML tags `</`
      illegal: /[{}]|<\//,
      keywords: {
        $pattern: /\b[\w\.]+/,
        keyword: S(p, { when: (M) => M.length < 3 }),
        literal: i,
        type: c,
        built_in: g
      },
      contains: [
        {
          begin: t.either(...m),
          relevance: 0,
          keywords: {
            $pattern: /[\w\.]+/,
            keyword: p.concat(m),
            literal: i,
            type: c
          }
        },
        {
          className: "type",
          begin: t.either(...s)
        },
        _,
        v,
        a,
        o,
        n.C_NUMBER_MODE,
        n.C_BLOCK_COMMENT_MODE,
        r,
        y
      ]
    };
  }
  return ir = e, ir;
}
var or, wi;
function wu() {
  if (wi) return or;
  wi = 1;
  function e(D) {
    return D ? typeof D == "string" ? D : D.source : null;
  }
  function n(D) {
    return t("(?=", D, ")");
  }
  function t(...D) {
    return D.map((ge) => e(ge)).join("");
  }
  function r(D) {
    const H = D[D.length - 1];
    return typeof H == "object" && H.constructor === Object ? (D.splice(D.length - 1, 1), H) : {};
  }
  function a(...D) {
    return "(" + (r(D).capture ? "" : "?:") + D.map((ae) => e(ae)).join("|") + ")";
  }
  const o = (D) => t(
    /\b/,
    D,
    /\w$/.test(D) ? /\b/ : /\B/
  ), i = [
    "Protocol",
    // contextual
    "Type"
    // contextual
  ].map(o), s = [
    "init",
    "self"
  ].map(o), c = [
    "Any",
    "Self"
  ], u = [
    // strings below will be fed into the regular `keywords` engine while regex
    // will result in additional modes being created to scan for those keywords to
    // avoid conflicts with other rules
    "actor",
    "any",
    // contextual
    "associatedtype",
    "async",
    "await",
    /as\?/,
    // operator
    /as!/,
    // operator
    "as",
    // operator
    "borrowing",
    // contextual
    "break",
    "case",
    "catch",
    "class",
    "consume",
    // contextual
    "consuming",
    // contextual
    "continue",
    "convenience",
    // contextual
    "copy",
    // contextual
    "default",
    "defer",
    "deinit",
    "didSet",
    // contextual
    "distributed",
    "do",
    "dynamic",
    // contextual
    "each",
    "else",
    "enum",
    "extension",
    "fallthrough",
    /fileprivate\(set\)/,
    "fileprivate",
    "final",
    // contextual
    "for",
    "func",
    "get",
    // contextual
    "guard",
    "if",
    "import",
    "indirect",
    // contextual
    "infix",
    // contextual
    /init\?/,
    /init!/,
    "inout",
    /internal\(set\)/,
    "internal",
    "in",
    "is",
    // operator
    "isolated",
    // contextual
    "nonisolated",
    // contextual
    "lazy",
    // contextual
    "let",
    "macro",
    "mutating",
    // contextual
    "nonmutating",
    // contextual
    /open\(set\)/,
    // contextual
    "open",
    // contextual
    "operator",
    "optional",
    // contextual
    "override",
    // contextual
    "package",
    "postfix",
    // contextual
    "precedencegroup",
    "prefix",
    // contextual
    /private\(set\)/,
    "private",
    "protocol",
    /public\(set\)/,
    "public",
    "repeat",
    "required",
    // contextual
    "rethrows",
    "return",
    "set",
    // contextual
    "some",
    // contextual
    "static",
    "struct",
    "subscript",
    "super",
    "switch",
    "throws",
    "throw",
    /try\?/,
    // operator
    /try!/,
    // operator
    "try",
    // operator
    "typealias",
    /unowned\(safe\)/,
    // contextual
    /unowned\(unsafe\)/,
    // contextual
    "unowned",
    // contextual
    "var",
    "weak",
    // contextual
    "where",
    "while",
    "willSet"
    // contextual
  ], l = [
    "false",
    "nil",
    "true"
  ], f = [
    "assignment",
    "associativity",
    "higherThan",
    "left",
    "lowerThan",
    "none",
    "right"
  ], g = [
    "#colorLiteral",
    "#column",
    "#dsohandle",
    "#else",
    "#elseif",
    "#endif",
    "#error",
    "#file",
    "#fileID",
    "#fileLiteral",
    "#filePath",
    "#function",
    "#if",
    "#imageLiteral",
    "#keyPath",
    "#line",
    "#selector",
    "#sourceLocation",
    "#warning"
  ], m = [
    "abs",
    "all",
    "any",
    "assert",
    "assertionFailure",
    "debugPrint",
    "dump",
    "fatalError",
    "getVaList",
    "isKnownUniquelyReferenced",
    "max",
    "min",
    "numericCast",
    "pointwiseMax",
    "pointwiseMin",
    "precondition",
    "preconditionFailure",
    "print",
    "readLine",
    "repeatElement",
    "sequence",
    "stride",
    "swap",
    "swift_unboxFromSwiftValueWithType",
    "transcode",
    "type",
    "unsafeBitCast",
    "unsafeDowncast",
    "withExtendedLifetime",
    "withUnsafeMutablePointer",
    "withUnsafePointer",
    "withVaList",
    "withoutActuallyEscaping",
    "zip"
  ], h = a(
    /[/=\-+!*%<>&|^~?]/,
    /[\u00A1-\u00A7]/,
    /[\u00A9\u00AB]/,
    /[\u00AC\u00AE]/,
    /[\u00B0\u00B1]/,
    /[\u00B6\u00BB\u00BF\u00D7\u00F7]/,
    /[\u2016-\u2017]/,
    /[\u2020-\u2027]/,
    /[\u2030-\u203E]/,
    /[\u2041-\u2053]/,
    /[\u2055-\u205E]/,
    /[\u2190-\u23FF]/,
    /[\u2500-\u2775]/,
    /[\u2794-\u2BFF]/,
    /[\u2E00-\u2E7F]/,
    /[\u3001-\u3003]/,
    /[\u3008-\u3020]/,
    /[\u3030]/
  ), p = a(
    h,
    /[\u0300-\u036F]/,
    /[\u1DC0-\u1DFF]/,
    /[\u20D0-\u20FF]/,
    /[\uFE00-\uFE0F]/,
    /[\uFE20-\uFE2F]/
    // TODO: The following characters are also allowed, but the regex isn't supported yet.
    // /[\u{E0100}-\u{E01EF}]/u
  ), v = t(h, p, "*"), y = a(
    /[a-zA-Z_]/,
    /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,
    /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,
    /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,
    /[\u1E00-\u1FFF]/,
    /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,
    /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,
    /[\u2C00-\u2DFF\u2E80-\u2FFF]/,
    /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,
    /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,
    /[\uFE47-\uFEFE\uFF00-\uFFFD]/
    // Should be /[\uFE47-\uFFFD]/, but we have to exclude FEFF.
    // The following characters are also allowed, but the regexes aren't supported yet.
    // /[\u{10000}-\u{1FFFD}\u{20000-\u{2FFFD}\u{30000}-\u{3FFFD}\u{40000}-\u{4FFFD}]/u,
    // /[\u{50000}-\u{5FFFD}\u{60000-\u{6FFFD}\u{70000}-\u{7FFFD}\u{80000}-\u{8FFFD}]/u,
    // /[\u{90000}-\u{9FFFD}\u{A0000-\u{AFFFD}\u{B0000}-\u{BFFFD}\u{C0000}-\u{CFFFD}]/u,
    // /[\u{D0000}-\u{DFFFD}\u{E0000-\u{EFFFD}]/u
  ), _ = a(
    y,
    /\d/,
    /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/
  ), S = t(y, _, "*"), M = t(/[A-Z]/, _, "*"), x = [
    "attached",
    "autoclosure",
    t(/convention\(/, a("swift", "block", "c"), /\)/),
    "discardableResult",
    "dynamicCallable",
    "dynamicMemberLookup",
    "escaping",
    "freestanding",
    "frozen",
    "GKInspectable",
    "IBAction",
    "IBDesignable",
    "IBInspectable",
    "IBOutlet",
    "IBSegueAction",
    "inlinable",
    "main",
    "nonobjc",
    "NSApplicationMain",
    "NSCopying",
    "NSManaged",
    t(/objc\(/, S, /\)/),
    "objc",
    "objcMembers",
    "propertyWrapper",
    "requires_stored_property_inits",
    "resultBuilder",
    "Sendable",
    "testable",
    "UIApplicationMain",
    "unchecked",
    "unknown",
    "usableFromInline",
    "warn_unqualified_access"
  ], W = [
    "iOS",
    "iOSApplicationExtension",
    "macOS",
    "macOSApplicationExtension",
    "macCatalyst",
    "macCatalystApplicationExtension",
    "watchOS",
    "watchOSApplicationExtension",
    "tvOS",
    "tvOSApplicationExtension",
    "swift"
  ];
  function K(D) {
    const H = {
      match: /\s+/,
      relevance: 0
    }, ge = D.COMMENT(
      "/\\*",
      "\\*/",
      { contains: ["self"] }
    ), ae = [
      D.C_LINE_COMMENT_MODE,
      ge
    ], Ee = {
      match: [
        /\./,
        a(...i, ...s)
      ],
      className: { 2: "keyword" }
    }, le = {
      // Consume .keyword to prevent highlighting properties and methods as keywords.
      match: t(/\./, a(...u)),
      relevance: 0
    }, te = u.filter((de) => typeof de == "string").concat(["_|0"]), Q = u.filter((de) => typeof de != "string").concat(c).map(o), ue = { variants: [
      {
        className: "keyword",
        match: a(...Q, ...s)
      }
    ] }, E = {
      $pattern: a(
        /\b\w+/,
        // regular keywords
        /#\w+/
        // number keywords
      ),
      keyword: te.concat(g),
      literal: l
    }, O = [
      Ee,
      le,
      ue
    ], Y = {
      // Consume .built_in to prevent highlighting properties and methods.
      match: t(/\./, a(...m)),
      relevance: 0
    }, b = {
      className: "built_in",
      match: t(/\b/, a(...m), /(?=\()/)
    }, N = [
      Y,
      b
    ], U = {
      // Prevent -> from being highlighting as an operator.
      match: /->/,
      relevance: 0
    }, $ = {
      className: "operator",
      relevance: 0,
      variants: [
        { match: v },
        {
          // dot-operator: only operators that start with a dot are allowed to use dots as
          // characters (..., ...<, .*, etc). So there rule here is: a dot followed by one or more
          // characters that may also include dots.
          match: `\\.(\\.|${p})+`
        }
      ]
    }, F = [
      U,
      $
    ], B = "([0-9]_*)+", P = "([0-9a-fA-F]_*)+", R = {
      className: "number",
      relevance: 0,
      variants: [
        // decimal floating-point-literal (subsumes decimal-literal)
        { match: `\\b(${B})(\\.(${B}))?([eE][+-]?(${B}))?\\b` },
        // hexadecimal floating-point-literal (subsumes hexadecimal-literal)
        { match: `\\b0x(${P})(\\.(${P}))?([pP][+-]?(${B}))?\\b` },
        // octal-literal
        { match: /\b0o([0-7]_*)+\b/ },
        // binary-literal
        { match: /\b0b([01]_*)+\b/ }
      ]
    }, C = (de = "") => ({
      className: "subst",
      variants: [
        { match: t(/\\/, de, /[0\\tnr"']/) },
        { match: t(/\\/, de, /u\{[0-9a-fA-F]{1,8}\}/) }
      ]
    }), q = (de = "") => ({
      className: "subst",
      match: t(/\\/, de, /[\t ]*(?:[\r\n]|\r\n)/)
    }), z = (de = "") => ({
      className: "subst",
      label: "interpol",
      begin: t(/\\/, de, /\(/),
      end: /\)/
    }), se = (de = "") => ({
      begin: t(de, /"""/),
      end: t(/"""/, de),
      contains: [
        C(de),
        q(de),
        z(de)
      ]
    }), ie = (de = "") => ({
      begin: t(de, /"/),
      end: t(/"/, de),
      contains: [
        C(de),
        z(de)
      ]
    }), ye = {
      className: "string",
      variants: [
        se(),
        se("#"),
        se("##"),
        se("###"),
        ie(),
        ie("#"),
        ie("##"),
        ie("###")
      ]
    }, ze = [
      D.BACKSLASH_ESCAPE,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [D.BACKSLASH_ESCAPE]
      }
    ], Ge = {
      begin: /\/[^\s](?=[^/\n]*\/)/,
      end: /\//,
      contains: ze
    }, we = (de) => {
      const Xe = t(de, /\//), Ve = t(/\//, de);
      return {
        begin: Xe,
        end: Ve,
        contains: [
          ...ze,
          {
            scope: "comment",
            begin: `#(?!.*${Ve})`,
            end: /$/
          }
        ]
      };
    }, rn = {
      scope: "regexp",
      variants: [
        we("###"),
        we("##"),
        we("#"),
        Ge
      ]
    }, qe = { match: t(/`/, S, /`/) }, G = {
      className: "variable",
      match: /\$\d+/
    }, gn = {
      className: "variable",
      match: `\\$${_}+`
    }, pe = [
      qe,
      G,
      gn
    ], oe = {
      match: /(@|#(un)?)available/,
      scope: "keyword",
      starts: { contains: [
        {
          begin: /\(/,
          end: /\)/,
          keywords: W,
          contains: [
            ...F,
            R,
            ye
          ]
        }
      ] }
    }, Ze = {
      scope: "keyword",
      match: t(/@/, a(...x), n(a(/\(/, /\s+/)))
    }, De = {
      scope: "meta",
      match: t(/@/, S)
    }, Pe = [
      oe,
      Ze,
      De
    ], Ae = {
      match: n(/\b[A-Z]/),
      relevance: 0,
      contains: [
        {
          // Common Apple frameworks, for relevance boost
          className: "type",
          match: t(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, _, "+")
        },
        {
          // Type identifier
          className: "type",
          match: M,
          relevance: 0
        },
        {
          // Optional type
          match: /[?!]+/,
          relevance: 0
        },
        {
          // Variadic parameter
          match: /\.\.\./,
          relevance: 0
        },
        {
          // Protocol composition
          match: t(/\s+&\s+/, n(M)),
          relevance: 0
        }
      ]
    }, T = {
      begin: /</,
      end: />/,
      keywords: E,
      contains: [
        ...ae,
        ...O,
        ...Pe,
        U,
        Ae
      ]
    };
    Ae.contains.push(T);
    const I = {
      match: t(S, /\s*:/),
      keywords: "_|0",
      relevance: 0
    }, X = {
      begin: /\(/,
      end: /\)/,
      relevance: 0,
      keywords: E,
      contains: [
        "self",
        I,
        ...ae,
        rn,
        ...O,
        ...N,
        ...F,
        R,
        ye,
        ...pe,
        ...Pe,
        Ae
      ]
    }, ee = {
      begin: /</,
      end: />/,
      keywords: "repeat each",
      contains: [
        ...ae,
        Ae
      ]
    }, ve = {
      begin: a(
        n(t(S, /\s*:/)),
        n(t(S, /\s+/, S, /\s*:/))
      ),
      end: /:/,
      relevance: 0,
      contains: [
        {
          className: "keyword",
          match: /\b_\b/
        },
        {
          className: "params",
          match: S
        }
      ]
    }, xe = {
      begin: /\(/,
      end: /\)/,
      keywords: E,
      contains: [
        ve,
        ...ae,
        ...O,
        ...F,
        R,
        ye,
        ...Pe,
        Ae,
        X
      ],
      endsParent: !0,
      illegal: /["']/
    }, Nn = {
      match: [
        /(func|macro)/,
        /\s+/,
        a(qe.match, S, v)
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        ee,
        xe,
        H
      ],
      illegal: [
        /\[/,
        /%/
      ]
    }, Tn = {
      match: [
        /\b(?:subscript|init[?!]?)/,
        /\s*(?=[<(])/
      ],
      className: { 1: "keyword" },
      contains: [
        ee,
        xe,
        H
      ],
      illegal: /\[|%/
    }, lt = {
      match: [
        /operator/,
        /\s+/,
        v
      ],
      className: {
        1: "keyword",
        3: "title"
      }
    }, ut = {
      begin: [
        /precedencegroup/,
        /\s+/,
        M
      ],
      className: {
        1: "keyword",
        3: "title"
      },
      contains: [Ae],
      keywords: [
        ...f,
        ...l
      ],
      end: /}/
    }, dt = {
      begin: [
        /(struct|protocol|class|extension|enum|actor)/,
        /\s+/,
        S,
        /\s*/
      ],
      beginScope: {
        1: "keyword",
        3: "title.class"
      },
      keywords: E,
      contains: [
        ee,
        ...O,
        {
          begin: /:/,
          end: /\{/,
          keywords: E,
          contains: [
            {
              scope: "title.class.inherited",
              match: M
            },
            ...O
          ],
          relevance: 0
        }
      ]
    };
    for (const de of ye.variants) {
      const Xe = de.contains.find((je) => je.label === "interpol");
      Xe.keywords = E;
      const Ve = [
        ...O,
        ...N,
        ...F,
        R,
        ye,
        ...pe
      ];
      Xe.contains = [
        ...Ve,
        {
          begin: /\(/,
          end: /\)/,
          contains: [
            "self",
            ...Ve
          ]
        }
      ];
    }
    return {
      name: "Swift",
      keywords: E,
      contains: [
        ...ae,
        Nn,
        Tn,
        dt,
        lt,
        ut,
        {
          beginKeywords: "import",
          end: /$/,
          contains: [...ae],
          relevance: 0
        },
        rn,
        ...O,
        ...N,
        ...F,
        R,
        ye,
        ...pe,
        ...Pe,
        Ae,
        X
      ]
    };
  }
  return or = K, or;
}
var sr, Ni;
function Nu() {
  if (Ni) return sr;
  Ni = 1;
  function e(n) {
    const t = "true false yes no null", r = "[\\w#;/?:@&=+$,.~*'()[\\]]+", a = {
      className: "attr",
      variants: [
        // added brackets support 
        { begin: /\w[\w :()\./-]*:(?=[ \t]|$)/ },
        {
          // double quoted keys - with brackets
          begin: /"\w[\w :()\./-]*":(?=[ \t]|$)/
        },
        {
          // single quoted keys - with brackets
          begin: /'\w[\w :()\./-]*':(?=[ \t]|$)/
        }
      ]
    }, o = {
      className: "template-variable",
      variants: [
        {
          // jinja templates Ansible
          begin: /\{\{/,
          end: /\}\}/
        },
        {
          // Ruby i18n
          begin: /%\{/,
          end: /\}/
        }
      ]
    }, i = {
      className: "string",
      relevance: 0,
      variants: [
        {
          begin: /'/,
          end: /'/
        },
        {
          begin: /"/,
          end: /"/
        },
        { begin: /\S+/ }
      ],
      contains: [
        n.BACKSLASH_ESCAPE,
        o
      ]
    }, s = n.inherit(i, { variants: [
      {
        begin: /'/,
        end: /'/
      },
      {
        begin: /"/,
        end: /"/
      },
      { begin: /[^\s,{}[\]]+/ }
    ] }), g = {
      className: "number",
      begin: "\\b" + "[0-9]{4}(-[0-9][0-9]){0,2}" + "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?" + "(\\.[0-9]*)?" + "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?" + "\\b"
    }, m = {
      end: ",",
      endsWithParent: !0,
      excludeEnd: !0,
      keywords: t,
      relevance: 0
    }, h = {
      begin: /\{/,
      end: /\}/,
      contains: [m],
      illegal: "\\n",
      relevance: 0
    }, p = {
      begin: "\\[",
      end: "\\]",
      contains: [m],
      illegal: "\\n",
      relevance: 0
    }, v = [
      a,
      {
        className: "meta",
        begin: "^---\\s*$",
        relevance: 10
      },
      {
        // multi line string
        // Blocks start with a | or > followed by a newline
        //
        // Indentation of subsequent lines must be the same to
        // be considered part of the block
        className: "string",
        begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
      },
      {
        // Ruby/Rails erb
        begin: "<%[%=-]?",
        end: "[%-]?%>",
        subLanguage: "ruby",
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0
      },
      {
        // named tags
        className: "type",
        begin: "!\\w+!" + r
      },
      // https://yaml.org/spec/1.2/spec.html#id2784064
      {
        // verbatim tags
        className: "type",
        begin: "!<" + r + ">"
      },
      {
        // primary tags
        className: "type",
        begin: "!" + r
      },
      {
        // secondary tags
        className: "type",
        begin: "!!" + r
      },
      {
        // fragment id &ref
        className: "meta",
        begin: "&" + n.UNDERSCORE_IDENT_RE + "$"
      },
      {
        // fragment reference *ref
        className: "meta",
        begin: "\\*" + n.UNDERSCORE_IDENT_RE + "$"
      },
      {
        // array listing
        className: "bullet",
        // TODO: remove |$ hack when we have proper look-ahead support
        begin: "-(?=[ ]|$)",
        relevance: 0
      },
      n.HASH_COMMENT_MODE,
      {
        beginKeywords: t,
        keywords: { literal: t }
      },
      g,
      // numbers are any valid C-style number that
      // sit isolated from other words
      {
        className: "number",
        begin: n.C_NUMBER_RE + "\\b",
        relevance: 0
      },
      h,
      p,
      i
    ], y = [...v];
    return y.pop(), y.push(s), m.contains = y, {
      name: "YAML",
      case_insensitive: !0,
      aliases: ["yml"],
      contains: v
    };
  }
  return sr = e, sr;
}
var cr, Ti;
function Tu() {
  if (Ti) return cr;
  Ti = 1;
  const e = "[A-Za-z$_][0-9A-Za-z$_]*", n = [
    "as",
    // for exports
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    // JS handles these with a special rule
    // "get",
    // "set",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends"
  ], t = [
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity"
  ], r = [
    // Fundamental objects
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    // numbers and dates
    "Math",
    "Date",
    "Number",
    "BigInt",
    // text
    "String",
    "RegExp",
    // Indexed collections
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    // Keyed collections
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    // Structured data
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    // Control abstraction objects
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    // Reflection
    "Reflect",
    "Proxy",
    // Internationalization
    "Intl",
    // WebAssembly
    "WebAssembly"
  ], a = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError"
  ], o = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape"
  ], i = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "sessionStorage",
    "module",
    "global"
    // Node.js
  ], s = [].concat(
    o,
    r,
    a
  );
  function c(l) {
    const f = l.regex, g = (C, { after: q }) => {
      const z = "</" + C[0].slice(1);
      return C.input.indexOf(z, q) !== -1;
    }, m = e, h = {
      begin: "<>",
      end: "</>"
    }, p = /<[A-Za-z0-9\\._:-]+\s*\/>/, v = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      /**
       * @param {RegExpMatchArray} match
       * @param {CallbackResponse} response
       */
      isTrulyOpeningTag: (C, q) => {
        const z = C[0].length + C.index, se = C.input[z];
        if (
          // HTML should not include another raw `<` inside a tag
          // nested type?
          // `<Array<Array<number>>`, etc.
          se === "<" || // the , gives away that this is not HTML
          // `<T, A extends keyof T, V>`
          se === ","
        ) {
          q.ignoreMatch();
          return;
        }
        se === ">" && (g(C, { after: z }) || q.ignoreMatch());
        let ie;
        const ye = C.input.substring(z);
        if (ie = ye.match(/^\s*=/)) {
          q.ignoreMatch();
          return;
        }
        if ((ie = ye.match(/^\s+extends\s+/)) && ie.index === 0) {
          q.ignoreMatch();
          return;
        }
      }
    }, y = {
      $pattern: e,
      keyword: n,
      literal: t,
      built_in: s,
      "variable.language": i
    }, _ = "[0-9](_?[0-9])*", S = `\\.(${_})`, M = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", x = {
      className: "number",
      variants: [
        // DecimalLiteral
        { begin: `(\\b(${M})((${S})|\\.)?|(${S}))[eE][+-]?(${_})\\b` },
        { begin: `\\b(${M})\\b((${S})\\b|\\.)?|(${S})\\b` },
        // DecimalBigIntegerLiteral
        { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
        // NonDecimalIntegerLiteral
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
        // LegacyOctalIntegerLiteral (does not include underscore separators)
        // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
        { begin: "\\b0[0-7]+n?\\b" }
      ],
      relevance: 0
    }, W = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: y,
      contains: []
      // defined later
    }, K = {
      begin: ".?html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          l.BACKSLASH_ESCAPE,
          W
        ],
        subLanguage: "xml"
      }
    }, D = {
      begin: ".?css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          l.BACKSLASH_ESCAPE,
          W
        ],
        subLanguage: "css"
      }
    }, H = {
      begin: ".?gql`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          l.BACKSLASH_ESCAPE,
          W
        ],
        subLanguage: "graphql"
      }
    }, ge = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [
        l.BACKSLASH_ESCAPE,
        W
      ]
    }, Ee = {
      className: "comment",
      variants: [
        l.COMMENT(
          /\/\*\*(?!\/)/,
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                begin: "(?=@[A-Za-z]+)",
                relevance: 0,
                contains: [
                  {
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                  },
                  {
                    className: "type",
                    begin: "\\{",
                    end: "\\}",
                    excludeEnd: !0,
                    excludeBegin: !0,
                    relevance: 0
                  },
                  {
                    className: "variable",
                    begin: m + "(?=\\s*(-)|$)",
                    endsParent: !0,
                    relevance: 0
                  },
                  // eat spaces (not newlines) so we can find
                  // types or variables
                  {
                    begin: /(?=[^\n])\s/,
                    relevance: 0
                  }
                ]
              }
            ]
          }
        ),
        l.C_BLOCK_COMMENT_MODE,
        l.C_LINE_COMMENT_MODE
      ]
    }, le = [
      l.APOS_STRING_MODE,
      l.QUOTE_STRING_MODE,
      K,
      D,
      H,
      ge,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      x
      // This is intentional:
      // See https://github.com/highlightjs/highlight.js/issues/3288
      // hljs.REGEXP_MODE
    ];
    W.contains = le.concat({
      // we need to pair up {} inside our subst to prevent
      // it from ending too early by matching another }
      begin: /\{/,
      end: /\}/,
      keywords: y,
      contains: [
        "self"
      ].concat(le)
    });
    const te = [].concat(Ee, W.contains), Q = te.concat([
      // eat recursive parens in sub expressions
      {
        begin: /(\s*)\(/,
        end: /\)/,
        keywords: y,
        contains: ["self"].concat(te)
      }
    ]), ue = {
      className: "params",
      // convert this to negative lookbehind in v12
      begin: /(\s*)\(/,
      // to match the parms with 
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: y,
      contains: Q
    }, E = {
      variants: [
        // class Car extends vehicle
        {
          match: [
            /class/,
            /\s+/,
            m,
            /\s+/,
            /extends/,
            /\s+/,
            f.concat(m, "(", f.concat(/\./, m), ")*")
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            5: "keyword",
            7: "title.class.inherited"
          }
        },
        // class Car
        {
          match: [
            /class/,
            /\s+/,
            m
          ],
          scope: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    }, O = {
      relevance: 0,
      match: f.either(
        // Hard coded exceptions
        /\bJSON/,
        // Float32Array, OutT
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        // CSSFactory, CSSFactoryT
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        // FPs, FPsT
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
        // P
        // single letters are not highlighted
        // BLAH
        // this will be flagged as a UPPER_CASE_CONSTANT instead
      ),
      className: "title.class",
      keywords: {
        _: [
          // se we still get relevance credit for JS library classes
          ...r,
          ...a
        ]
      }
    }, Y = {
      label: "use_strict",
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/
    }, b = {
      variants: [
        {
          match: [
            /function/,
            /\s+/,
            m,
            /(?=\s*\()/
          ]
        },
        // anonymous function
        {
          match: [
            /function/,
            /\s*(?=\()/
          ]
        }
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      label: "func.def",
      contains: [ue],
      illegal: /%/
    }, N = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: "variable.constant"
    };
    function U(C) {
      return f.concat("(?!", C.join("|"), ")");
    }
    const $ = {
      match: f.concat(
        /\b/,
        U([
          ...o,
          "super",
          "import"
        ].map((C) => `${C}\\s*\\(`)),
        m,
        f.lookahead(/\s*\(/)
      ),
      className: "title.function",
      relevance: 0
    }, F = {
      begin: f.concat(/\./, f.lookahead(
        f.concat(m, /(?![0-9A-Za-z$_(])/)
      )),
      end: m,
      excludeBegin: !0,
      keywords: "prototype",
      className: "property",
      relevance: 0
    }, B = {
      match: [
        /get|set/,
        /\s+/,
        m,
        /(?=\()/
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        {
          // eat to avoid empty params
          begin: /\(\)/
        },
        ue
      ]
    }, P = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + l.UNDERSCORE_IDENT_RE + ")\\s*=>", R = {
      match: [
        /const|var|let/,
        /\s+/,
        m,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        // async is optional
        f.lookahead(P)
      ],
      keywords: "async",
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        ue
      ]
    };
    return {
      name: "JavaScript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: y,
      // this will be extended by TypeScript
      exports: { PARAMS_CONTAINS: Q, CLASS_REFERENCE: O },
      illegal: /#(?![$_A-z])/,
      contains: [
        l.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }),
        Y,
        l.APOS_STRING_MODE,
        l.QUOTE_STRING_MODE,
        K,
        D,
        H,
        ge,
        Ee,
        // Skip numbers when they are part of a variable name
        { match: /\$\d+/ },
        x,
        O,
        {
          className: "attr",
          begin: m + f.lookahead(":"),
          relevance: 0
        },
        R,
        {
          // "value" container
          begin: "(" + l.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [
            Ee,
            l.REGEXP_MODE,
            {
              className: "function",
              // we have to count the parens to make sure we actually have the
              // correct bounding ( ) before the =>.  There could be any number of
              // sub-expressions inside also surrounded by parens.
              begin: P,
              returnBegin: !0,
              end: "\\s*=>",
              contains: [
                {
                  className: "params",
                  variants: [
                    {
                      begin: l.UNDERSCORE_IDENT_RE,
                      relevance: 0
                    },
                    {
                      className: null,
                      begin: /\(\s*\)/,
                      skip: !0
                    },
                    {
                      begin: /(\s*)\(/,
                      end: /\)/,
                      excludeBegin: !0,
                      excludeEnd: !0,
                      keywords: y,
                      contains: Q
                    }
                  ]
                }
              ]
            },
            {
              // could be a comma delimited list of params to a function call
              begin: /,/,
              relevance: 0
            },
            {
              match: /\s+/,
              relevance: 0
            },
            {
              // JSX
              variants: [
                { begin: h.begin, end: h.end },
                { match: p },
                {
                  begin: v.begin,
                  // we carefully check the opening tag to see if it truly
                  // is a tag and not a false positive
                  "on:begin": v.isTrulyOpeningTag,
                  end: v.end
                }
              ],
              subLanguage: "xml",
              contains: [
                {
                  begin: v.begin,
                  end: v.end,
                  skip: !0,
                  contains: ["self"]
                }
              ]
            }
          ]
        },
        b,
        {
          // prevent this from getting swallowed up by function
          // since they appear "function like"
          beginKeywords: "while if switch catch for"
        },
        {
          // we have to count the parens to make sure we actually have the correct
          // bounding ( ).  There could be any number of sub-expressions inside
          // also surrounded by parens.
          begin: "\\b(?!function)" + l.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          // end parens
          returnBegin: !0,
          label: "func.def",
          contains: [
            ue,
            l.inherit(l.TITLE_MODE, { begin: m, className: "title.function" })
          ]
        },
        // catch ... so it won't trigger the property rule below
        {
          match: /\.\.\./,
          relevance: 0
        },
        F,
        // hack: prevents detection of keywords in some circumstances
        // .keyword()
        // $keyword = x
        {
          match: "\\$" + m,
          relevance: 0
        },
        {
          match: [/\bconstructor(?=\s*\()/],
          className: { 1: "title.function" },
          contains: [ue]
        },
        $,
        N,
        E,
        B,
        {
          match: /\$[(.]/
          // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
        }
      ]
    };
  }
  function u(l) {
    const f = c(l), g = e, m = [
      "any",
      "void",
      "number",
      "boolean",
      "string",
      "object",
      "never",
      "symbol",
      "bigint",
      "unknown"
    ], h = {
      begin: [
        /namespace/,
        /\s+/,
        l.IDENT_RE
      ],
      beginScope: {
        1: "keyword",
        3: "title.class"
      }
    }, p = {
      beginKeywords: "interface",
      end: /\{/,
      excludeEnd: !0,
      keywords: {
        keyword: "interface extends",
        built_in: m
      },
      contains: [f.exports.CLASS_REFERENCE]
    }, v = {
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use strict['"]/
    }, y = [
      "type",
      // "namespace",
      "interface",
      "public",
      "private",
      "protected",
      "implements",
      "declare",
      "abstract",
      "readonly",
      "enum",
      "override",
      "satisfies"
    ], _ = {
      $pattern: e,
      keyword: n.concat(y),
      literal: t,
      built_in: s.concat(m),
      "variable.language": i
    }, S = {
      className: "meta",
      begin: "@" + g
    }, M = (K, D, H) => {
      const ge = K.contains.findIndex((ae) => ae.label === D);
      if (ge === -1)
        throw new Error("can not find mode to replace");
      K.contains.splice(ge, 1, H);
    };
    Object.assign(f.keywords, _), f.exports.PARAMS_CONTAINS.push(S);
    const x = f.contains.find((K) => K.className === "attr");
    f.exports.PARAMS_CONTAINS.push([
      f.exports.CLASS_REFERENCE,
      // class reference for highlighting the params types
      x
      // highlight the params key
    ]), f.contains = f.contains.concat([
      S,
      h,
      p
    ]), M(f, "shebang", l.SHEBANG()), M(f, "use_strict", v);
    const W = f.contains.find((K) => K.label === "func.def");
    return W.relevance = 0, Object.assign(f, {
      name: "TypeScript",
      aliases: [
        "ts",
        "tsx",
        "mts",
        "cts"
      ]
    }), f;
  }
  return cr = u, cr;
}
var lr, Si;
function Su() {
  if (Si) return lr;
  Si = 1;
  function e(n) {
    const t = n.regex, r = {
      className: "string",
      begin: /"(""|[^/n])"C\b/
    }, a = {
      className: "string",
      begin: /"/,
      end: /"/,
      illegal: /\n/,
      contains: [
        {
          // double quote escape
          begin: /""/
        }
      ]
    }, o = /\d{1,2}\/\d{1,2}\/\d{4}/, i = /\d{4}-\d{1,2}-\d{1,2}/, s = /(\d|1[012])(:\d+){0,2} *(AM|PM)/, c = /\d{1,2}(:\d{1,2}){1,2}/, u = {
      className: "literal",
      variants: [
        {
          // #YYYY-MM-DD# (ISO-Date) or #M/D/YYYY# (US-Date)
          begin: t.concat(/# */, t.either(i, o), / *#/)
        },
        {
          // #H:mm[:ss]# (24h Time)
          begin: t.concat(/# */, c, / *#/)
        },
        {
          // #h[:mm[:ss]] A# (12h Time)
          begin: t.concat(/# */, s, / *#/)
        },
        {
          // date plus time
          begin: t.concat(
            /# */,
            t.either(i, o),
            / +/,
            t.either(s, c),
            / *#/
          )
        }
      ]
    }, l = {
      className: "number",
      relevance: 0,
      variants: [
        {
          // Float
          begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
        },
        {
          // Integer (base 10)
          begin: /\b\d[\d_]*((U?[SIL])|[%&])?/
        },
        {
          // Integer (base 16)
          begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/
        },
        {
          // Integer (base 8)
          begin: /&O[0-7_]+((U?[SIL])|[%&])?/
        },
        {
          // Integer (base 2)
          begin: /&B[01_]+((U?[SIL])|[%&])?/
        }
      ]
    }, f = {
      className: "label",
      begin: /^\w+:/
    }, g = n.COMMENT(/'''/, /$/, { contains: [
      {
        className: "doctag",
        begin: /<\/?/,
        end: />/
      }
    ] }), m = n.COMMENT(null, /$/, { variants: [
      { begin: /'/ },
      {
        // TODO: Use multi-class for leading spaces
        begin: /([\t ]|^)REM(?=\s)/
      }
    ] });
    return {
      name: "Visual Basic .NET",
      aliases: ["vb"],
      case_insensitive: !0,
      classNameAliases: { label: "symbol" },
      keywords: {
        keyword: "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
        built_in: (
          // Operators https://docs.microsoft.com/dotnet/visual-basic/language-reference/operators
          "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort"
        ),
        type: (
          // Data types https://docs.microsoft.com/dotnet/visual-basic/language-reference/data-types
          "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort"
        ),
        literal: "true false nothing"
      },
      illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
      contains: [
        r,
        a,
        u,
        l,
        f,
        g,
        m,
        {
          className: "meta",
          // TODO: Use multi-class for indentation once available
          begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
          end: /$/,
          keywords: { keyword: "const disable else elseif enable end externalsource if region then" },
          contains: [m]
        }
      ]
    };
  }
  return lr = e, lr;
}
var ur, Oi;
function Ou() {
  if (Oi) return ur;
  Oi = 1;
  function e(n) {
    n.regex;
    const t = n.COMMENT(/\(;/, /;\)/);
    t.contains.push("self");
    const r = n.COMMENT(/;;/, /$/), a = [
      "anyfunc",
      "block",
      "br",
      "br_if",
      "br_table",
      "call",
      "call_indirect",
      "data",
      "drop",
      "elem",
      "else",
      "end",
      "export",
      "func",
      "global.get",
      "global.set",
      "local.get",
      "local.set",
      "local.tee",
      "get_global",
      "get_local",
      "global",
      "if",
      "import",
      "local",
      "loop",
      "memory",
      "memory.grow",
      "memory.size",
      "module",
      "mut",
      "nop",
      "offset",
      "param",
      "result",
      "return",
      "select",
      "set_global",
      "set_local",
      "start",
      "table",
      "tee_local",
      "then",
      "type",
      "unreachable"
    ], o = {
      begin: [
        /(?:func|call|call_indirect)/,
        /\s+/,
        /\$[^\s)]+/
      ],
      className: {
        1: "keyword",
        3: "title.function"
      }
    }, i = {
      className: "variable",
      begin: /\$[\w_]+/
    }, s = {
      match: /(\((?!;)|\))+/,
      className: "punctuation",
      relevance: 0
    }, c = {
      className: "number",
      relevance: 0,
      // borrowed from Prism, TODO: split out into variants
      match: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/
    }, u = {
      // look-ahead prevents us from gobbling up opcodes
      match: /(i32|i64|f32|f64)(?!\.)/,
      className: "type"
    }, l = {
      className: "keyword",
      // borrowed from Prism, TODO: split out into variants
      match: /\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/
    };
    return {
      name: "WebAssembly",
      keywords: {
        $pattern: /[\w.]+/,
        keyword: a
      },
      contains: [
        r,
        t,
        {
          match: [
            /(?:offset|align)/,
            /\s*/,
            /=/
          ],
          className: {
            1: "keyword",
            3: "operator"
          }
        },
        i,
        s,
        o,
        n.QUOTE_STRING_MODE,
        u,
        l,
        c
      ]
    };
  }
  return ur = e, ur;
}
var j = Kl;
j.registerLanguage("xml", Hl());
j.registerLanguage("bash", Wl());
j.registerLanguage("c", Yl());
j.registerLanguage("cpp", Zl());
j.registerLanguage("csharp", Xl());
j.registerLanguage("css", Vl());
j.registerLanguage("markdown", jl());
j.registerLanguage("diff", Ql());
j.registerLanguage("ruby", Jl());
j.registerLanguage("go", eu());
j.registerLanguage("graphql", nu());
j.registerLanguage("ini", tu());
j.registerLanguage("java", ru());
j.registerLanguage("javascript", au());
j.registerLanguage("json", iu());
j.registerLanguage("kotlin", ou());
j.registerLanguage("less", su());
j.registerLanguage("lua", cu());
j.registerLanguage("makefile", lu());
j.registerLanguage("perl", uu());
j.registerLanguage("objectivec", du());
j.registerLanguage("php", fu());
j.registerLanguage("php-template", gu());
j.registerLanguage("plaintext", mu());
j.registerLanguage("python", bu());
j.registerLanguage("python-repl", pu());
j.registerLanguage("r", vu());
j.registerLanguage("rust", hu());
j.registerLanguage("scss", _u());
j.registerLanguage("shell", Eu());
j.registerLanguage("sql", yu());
j.registerLanguage("swift", wu());
j.registerLanguage("yaml", Nu());
j.registerLanguage("typescript", Tu());
j.registerLanguage("vbnet", Su());
j.registerLanguage("wasm", Ou());
j.HighlightJS = j;
j.default = j;
var ku = j;
const Pu = /* @__PURE__ */ xi(ku), Au = {
  loading: $n.solid.faRotate,
  error: $n.solid.faXmark,
  success: $n.solid.faCheck,
  ready: $n.solid.faFileUpload,
  idle: void 0
};
function Bu({ state: e, config: n = {}, id: t }) {
  var s, c;
  const r = Ce(), a = $e(!1), o = kr("preferences/animation.boolean"), { status: i } = Wo(async () => {
    const u = await Yo(n);
    e.set((l) => l ? [.../* @__PURE__ */ new Set([...l, ...u])] : u);
  }, [n]);
  return Ri(async () => {
    ["success", "error"].includes(i.get) && (await ki(1e3), i.set("ready"));
  }, [i.get]), /* @__PURE__ */ Le(
    "div",
    {
      className: Oe("relative border border-solid border-transparent flex items-center gap-1 w-full p-2 rounded-md", o && "transition-[background-color] duration-200"),
      onMouseEnter: () => a.set(!0),
      onMouseLeave: () => a.set(!1),
      style: {
        ...r("gray.opacity", a.get && "gray.opacity.2", {
          borderColor: "borders"
        })
      },
      children: [
        /* @__PURE__ */ Le("div", { className: "relative flex flex-wrap gap-1 w-full", children: [
          (s = e.get) == null ? void 0 : s.map((u, l) => /* @__PURE__ */ Le(
            "span",
            {
              className: "inline-flex justify-between items-center px-2 py-1 rounded-md",
              style: {
                ...r("gray.opacity")
              },
              children: [
                /* @__PURE__ */ Le(jo, { href: u, className: "max-w-[50px] truncate", children: [
                  /* @__PURE__ */ V(Ba, { content: "file" }),
                  " - (",
                  l + 1,
                  ")"
                ] }),
                /* @__PURE__ */ V(
                  kt,
                  {
                    onClick: () => {
                      var f;
                      e.set(((f = e.get) == null ? void 0 : f.filter((g) => g != u)) || null);
                    },
                    icon: Bo
                  }
                )
              ]
            },
            l
          )),
          !((c = e.get) != null && c.length) && /* @__PURE__ */ V("span", { className: "capitalize", children: /* @__PURE__ */ V(Ba, { content: "no files choised" }) })
        ] }),
        /* @__PURE__ */ Le("div", { className: "flex items-center gap-x-1", children: [
          n.nullable && /* @__PURE__ */ V(
            kt,
            {
              onClick: () => {
                e.set(null);
              },
              icon: Uo
            }
          ),
          /* @__PURE__ */ V(
            kt,
            {
              onClick: async () => {
                i.get != "loading" && i.set("idle");
              },
              id: t,
              iconClassName: Oe(i.get == "loading" && "animate-spin"),
              icon: Au[i.get]
            }
          )
        ] })
      ]
    }
  );
}
const Uu = Se.memo(
  ({ id: e, config: n, state: t }) => {
    var m;
    const r = Ce(), a = Do(() => ((n == null ? void 0 : n.match) || ".").split("-"), [n == null ? void 0 : n.match]), o = ((m = t.get) == null ? void 0 : m.toString()) || "", i = $e(!1), s = bt(() => Fo(e), [e]), c = () => i.set(!0), u = () => i.set(!1), l = bt(
      (h) => {
        const p = h.target.value.replace(/[^0-9]/g, "");
        t.set(p || void 0);
      },
      [t]
    ), f = bt(async () => {
      const h = (await navigator.clipboard.readText()).replace(/[^0-9]/g, "");
      t.set(h || void 0);
    }, [t.set]), g = Se.useMemo(() => {
      var h;
      return (h = n == null ? void 0 : n.match) == null ? void 0 : h.split("-").map((p) => p.length).reduce((p, v) => p + v, 0);
    }, [n == null ? void 0 : n.match]);
    return /* @__PURE__ */ Le("div", { tabIndex: 1, onFocus: s, children: [
      /* @__PURE__ */ V(
        "input",
        {
          onFocus: c,
          onBlur: u,
          type: "text",
          inputMode: "numeric",
          onChange: l,
          onPaste: f,
          id: e,
          value: o,
          maxLength: g,
          className: "absolute opacity-0 w-0 h-0"
        }
      ),
      /* @__PURE__ */ V("div", { className: "flex flex-wrap items-center gap-1 rounded-lg w-fit", children: /* @__PURE__ */ V(
        fo,
        {
          list: a.map((h, p) => {
            const v = Array.from(h), y = a.slice(0, p).reduce((_, S) => _ + S.length, 0);
            return /* @__PURE__ */ V("div", { className: "flex", children: v.map((_, S) => {
              const M = y + S, x = (n == null ? void 0 : n.size) || 50, W = o.length == M, K = g == o.length;
              return /* @__PURE__ */ V(
                "div",
                {
                  className: Oe(
                    "border-solid border-transparent text-lg border-y border-r flex items-center justify-center",
                    S === 0 && "rounded-ss-lg rounded-es-lg border-l",
                    S + 1 === v.length && "rounded-se-lg rounded-ee-lg",
                    W && "border-l"
                  ),
                  style: {
                    ...r({ borderColor: "borders" }, i.get && W && { borderColor: "primary" }, i.get && K && { borderColor: "primary" }, {
                      boxShadow: Ci([{ colorId: "shadow.color", blur: 4, size: 0, x: 0, y: 5 }])
                    }),
                    width: x,
                    height: x
                  },
                  children: (o == null ? void 0 : o[M]) || (W ? "|" : "")
                },
                S
              );
            }) }, p);
          }),
          joinComponent: /* @__PURE__ */ V(ln, { children: "-" })
        }
      ) })
    ] });
  },
  (e, n) => e.state.get === n.state.get && e.config === n.config
), Fu = Se.forwardRef(({ children: e, onScroll: n, className: t, type: r = "normal", ...a }, o) => {
  const i = $e(0), s = Se.createRef(), c = (l) => {
    i.set(l.currentTarget.scrollTop), n && n(l);
  }, u = Ce();
  return /* @__PURE__ */ Le("div", { ...a, ref: o, className: "scroll-view", children: [
    /* @__PURE__ */ V("div", { "aria-label": "scrolled-view", className: Oe("overflow-y-auto h-full w-full", t), ref: s, onScroll: c, children: e }),
    /* @__PURE__ */ V(
      "div",
      {
        "data-scrolled": i.get >= 10,
        className: "scroll-shadow-view",
        style: {
          ...u(
            i.get >= 10 && {
              boxShadow: Ci([
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
function $u() {
  const e = Ce();
  return /* @__PURE__ */ Le(
    "div",
    {
      className: "relative bg-opacity-10 w-full h-[2px] pointer-events-none",
      style: {
        ...e("gray.opacity")
      },
      children: [
        /* @__PURE__ */ V(
          "div",
          {
            className: Oe("absolute h-full left-0 transform animate-loading"),
            style: {
              ...e({
                background: na("to right", "transparent", "primary")
              })
            }
          }
        ),
        /* @__PURE__ */ V(
          "div",
          {
            className: Oe("absolute h-full right-0 transform animate-loading"),
            style: {
              ...e({
                background: na("to right", "primary", "transparent")
              })
            }
          }
        )
      ]
    }
  );
}
const zu = ({ className: e, circleClassName: n, ...t }) => {
  const r = Ce();
  return /* @__PURE__ */ V("span", { children: /* @__PURE__ */ V("span", { className: Oe("relative inline-flex items-center justify-center text-xs w-[25px] h-[25px]", e), ...t, children: /* @__PURE__ */ V(
    "span",
    {
      className: Oe("absolute inline-block w-full h-full rounded-full border-[2px] border-solid border-transparent animate-spin", n),
      style: {
        ...r({
          borderTopColor: "primary",
          borderLeftColor: "primary",
          borderRightColor: "primary"
        })
      }
    }
  ) }) });
}, Gu = ({ balls: e = 3, ballClassName: n = "", ballStyle: t, icon: r, iconClassName: a }) => {
  const o = Ce();
  return /* @__PURE__ */ V("div", { className: "flex", children: $o(1, e).map((i) => /* @__PURE__ */ V(
    "span",
    {
      className: Oe("inline-flex items-center justify-center animate-ty w-[30px] h-[30px] rounded-full", n),
      style: {
        ...o("primary", {
          color: "primary.content"
        }),
        animationDelay: `${i / e * 1}s`,
        ...zo(t)
      },
      children: /* @__PURE__ */ V(lo, { icon: r, iconClassName: Oe("w-1/2 h-1/2", a) })
    },
    i
  )) });
}, qu = ({ className: e, children: n, ...t }) => {
  const r = Ce();
  return /* @__PURE__ */ Le("div", { className: Oe("relative h-full w-full overflow-hidden", e), ...t, children: [
    /* @__PURE__ */ V(
      "div",
      {
        style: {
          ...r("gray.opacity")
        },
        className: "absolute inset-[10px] rounded-xl animate-pulse"
      }
    ),
    n
  ] });
}, Ku = Se.forwardRef(({ list: e, style: n, className: t, ...r }, a) => {
  const o = Ce();
  return /* @__PURE__ */ V(
    "div",
    {
      ...r,
      ref: a,
      className: Oe("border border-solid border-transparent rounded-lg flex flex-col", t),
      style: {
        ...o("secondary.background", {
          borderColor: "borders"
        }),
        ...n
      },
      children: /* @__PURE__ */ V(
        fo,
        {
          list: e.filter(Boolean).map((i, s) => /* @__PURE__ */ V(ln, { children: i }, s)),
          joinComponent: /* @__PURE__ */ V(jc, {})
        }
      )
    }
  );
}), Hu = ({ title: e, rightSide: n }) => /* @__PURE__ */ Le("div", { className: "flex justify-between items-center p-2", children: [
  /* @__PURE__ */ V("h1", { className: "text-3xl truncate capitalize", children: e }),
  /* @__PURE__ */ V("div", { className: "flex items-center gap-1", children: n })
] });
export {
  jo as A,
  Gu as B,
  zu as C,
  ln as E,
  qr as F,
  Pu as H,
  lo as I,
  fo as J,
  jc as L,
  Uu as P,
  Fu as S,
  Ba as T,
  Le as a,
  Bu as b,
  Mu as c,
  Lu as d,
  $u as e,
  qu as f,
  Ku as g,
  Hu as h,
  Au as i,
  V as j,
  kt as k,
  Du as l,
  uo as u
};
