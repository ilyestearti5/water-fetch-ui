var Co = Object.defineProperty;
var To = (e, t, n) => t in e ? Co(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ut = (e, t, n) => To(e, typeof t != "symbol" ? t + "" : t, n);
import * as $e from "react";
import _, { useContext as No, useRef as ko, useCallback as xo, useDebugValue as Ao } from "react";
import { x as Bn, D as qe, c as ye, j as Mo, f as Un, d as Q, b as Yt, S as Ro, w as Io, y as Xe, a as ke, z as Yn, n as re, e as Do } from "./index-DRKFUSi1.mjs";
import { unstable_batchedUpdates as Po } from "react-dom";
import { S as J, b as Kt, e as Ht, d as $o, u as Fo, o as jo, j as Lo, k as Vo, R as zo } from "./firebase-oFaglbxa.mjs";
function j(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Bo = typeof Symbol == "function" && Symbol.observable || "@@observable", Wt = Bo, ht = () => Math.random().toString(36).substring(7).split("").join("."), Uo = {
  INIT: `@@redux/INIT${/* @__PURE__ */ ht()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ ht()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ht()}`
}, le = Uo;
function Re(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Yo(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (Wo(e))
    return "date";
  if (Ho(e))
    return "error";
  const n = Ko(e);
  switch (n) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return n;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function Ko(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Ho(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Wo(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function oe(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Yo(e)), t;
}
function Kn(e, t, n) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? j(2) : `Expected the root reducer to be a function. Instead, received: '${oe(e)}'`);
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? j(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? j(1) : `Expected the enhancer to be a function. Instead, received: '${oe(n)}'`);
    return n(Kn)(e, t);
  }
  let o = e, r = t, s = /* @__PURE__ */ new Map(), i = s, c = 0, f = !1;
  function p() {
    i === s && (i = /* @__PURE__ */ new Map(), s.forEach((a, u) => {
      i.set(u, a);
    }));
  }
  function l() {
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? j(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return r;
  }
  function m(a) {
    if (typeof a != "function")
      throw new Error(process.env.NODE_ENV === "production" ? j(4) : `Expected the listener to be a function. Instead, received: '${oe(a)}'`);
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? j(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let u = !0;
    p();
    const E = c++;
    return i.set(E, a), function() {
      if (u) {
        if (f)
          throw new Error(process.env.NODE_ENV === "production" ? j(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        u = !1, p(), i.delete(E), s = null;
      }
    };
  }
  function v(a) {
    if (!Re(a))
      throw new Error(process.env.NODE_ENV === "production" ? j(7) : `Actions must be plain objects. Instead, the actual type was: '${oe(a)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof a.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? j(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof a.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? j(17) : `Action "type" property must be a string. Instead, the actual type was: '${oe(a.type)}'. Value was: '${a.type}' (stringified)`);
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? j(9) : "Reducers may not dispatch actions.");
    try {
      f = !0, r = o(r, a);
    } finally {
      f = !1;
    }
    return (s = i).forEach((E) => {
      E();
    }), a;
  }
  function g(a) {
    if (typeof a != "function")
      throw new Error(process.env.NODE_ENV === "production" ? j(10) : `Expected the nextReducer to be a function. Instead, received: '${oe(a)}`);
    o = a, v({
      type: le.REPLACE
    });
  }
  function w() {
    const a = m;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(u) {
        if (typeof u != "object" || u === null)
          throw new Error(process.env.NODE_ENV === "production" ? j(11) : `Expected the observer to be an object. Instead, received: '${oe(u)}'`);
        function E() {
          const y = u;
          y.next && y.next(l());
        }
        return E(), {
          unsubscribe: a(E)
        };
      },
      [Wt]() {
        return this;
      }
    };
  }
  return v({
    type: le.INIT
  }), {
    dispatch: v,
    subscribe: m,
    getState: l,
    replaceReducer: g,
    [Wt]: w
  };
}
function Gt(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Go(e, t, n, o) {
  const r = Object.keys(t), s = n && n.type === le.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (r.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Re(e))
    return `The ${s} has unexpected type of "${oe(e)}". Expected argument to be an object with the following keys: "${r.join('", "')}"`;
  const i = Object.keys(e).filter((c) => !t.hasOwnProperty(c) && !o[c]);
  if (i.forEach((c) => {
    o[c] = !0;
  }), !(n && n.type === le.REPLACE) && i.length > 0)
    return `Unexpected ${i.length > 1 ? "keys" : "key"} "${i.join('", "')}" found in ${s}. Expected to find one of the known reducer keys instead: "${r.join('", "')}". Unexpected keys will be ignored.`;
}
function qo(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: le.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? j(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof n(void 0, {
      type: le.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? j(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${le.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function Xo(e) {
  const t = Object.keys(e), n = {};
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    process.env.NODE_ENV !== "production" && typeof e[c] > "u" && Gt(`No reducer provided for key "${c}"`), typeof e[c] == "function" && (n[c] = e[c]);
  }
  const o = Object.keys(n);
  let r;
  process.env.NODE_ENV !== "production" && (r = {});
  let s;
  try {
    qo(n);
  } catch (i) {
    s = i;
  }
  return function(c = {}, f) {
    if (s)
      throw s;
    if (process.env.NODE_ENV !== "production") {
      const m = Go(c, n, f, r);
      m && Gt(m);
    }
    let p = !1;
    const l = {};
    for (let m = 0; m < o.length; m++) {
      const v = o[m], g = n[v], w = c[v], b = g(w, f);
      if (typeof b > "u") {
        const a = f && f.type;
        throw new Error(process.env.NODE_ENV === "production" ? j(14) : `When called with an action of type ${a ? `"${String(a)}"` : "(unknown type)"}, the slice reducer for key "${v}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      l[v] = b, p = p || b !== w;
    }
    return p = p || o.length !== Object.keys(c).length, p ? l : c;
  };
}
function Ye(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...o) => t(n(...o)));
}
function Qo(...e) {
  return (t) => (n, o) => {
    const r = t(n, o);
    let s = () => {
      throw new Error(process.env.NODE_ENV === "production" ? j(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const i = {
      getState: r.getState,
      dispatch: (f, ...p) => s(f, ...p)
    }, c = e.map((f) => f(i));
    return s = Ye(...c)(r.dispatch), {
      ...r,
      dispatch: s
    };
  };
}
function Dt(e) {
  return Re(e) && "type" in e && typeof e.type == "string";
}
var Hn = Symbol.for("immer-nothing"), qt = Symbol.for("immer-draftable"), K = Symbol.for("immer-state"), Jo = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function Y(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Jo[e], o = typeof n == "function" ? n.apply(null, t) : n;
    throw new Error(`[Immer] ${o}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var we = Object.getPrototypeOf;
function Z(e) {
  return !!e && !!e[K];
}
function te(e) {
  var t;
  return e ? Wn(e) || Array.isArray(e) || !!e[qt] || !!((t = e.constructor) != null && t[qt]) || Je(e) || Ze(e) : !1;
}
var Zo = Object.prototype.constructor.toString();
function Wn(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = we(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === Zo;
}
function Ke(e, t) {
  Qe(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, o) => t(o, n, e));
}
function Qe(e) {
  const t = e[K];
  return t ? t.type_ : Array.isArray(e) ? 1 : Je(e) ? 2 : Ze(e) ? 3 : 0;
}
function _t(e, t) {
  return Qe(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Gn(e, t, n) {
  const o = Qe(e);
  o === 2 ? e.set(t, n) : o === 3 ? e.add(n) : e[t] = n;
}
function er(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Je(e) {
  return e instanceof Map;
}
function Ze(e) {
  return e instanceof Set;
}
function ce(e) {
  return e.copy_ || e.base_;
}
function Ot(e, t) {
  if (Je(e))
    return new Map(e);
  if (Ze(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = Wn(e);
  if (t === !0 || t === "class_only" && !n) {
    const o = Object.getOwnPropertyDescriptors(e);
    delete o[K];
    let r = Reflect.ownKeys(o);
    for (let s = 0; s < r.length; s++) {
      const i = r[s], c = o[i];
      c.writable === !1 && (c.writable = !0, c.configurable = !0), (c.get || c.set) && (o[i] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: c.enumerable,
        value: e[i]
      });
    }
    return Object.create(we(e), o);
  } else {
    const o = we(e);
    if (o !== null && n)
      return { ...e };
    const r = Object.create(o);
    return Object.assign(r, e);
  }
}
function Pt(e, t = !1) {
  return et(e) || Z(e) || !te(e) || (Qe(e) > 1 && (e.set = e.add = e.clear = e.delete = tr), Object.freeze(e), t && Object.entries(e).forEach(([n, o]) => Pt(o, !0))), e;
}
function tr() {
  Y(2);
}
function et(e) {
  return Object.isFrozen(e);
}
var nr = {};
function pe(e) {
  const t = nr[e];
  return t || Y(0, e), t;
}
var xe;
function qn() {
  return xe;
}
function or(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Xt(e, t) {
  t && (pe("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Ct(e) {
  Tt(e), e.drafts_.forEach(rr), e.drafts_ = null;
}
function Tt(e) {
  e === xe && (xe = e.parent_);
}
function Qt(e) {
  return xe = or(xe, e);
}
function rr(e) {
  const t = e[K];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Jt(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[K].modified_ && (Ct(t), Y(4)), te(e) && (e = He(t, e), t.parent_ || We(t, e)), t.patches_ && pe("Patches").generateReplacementPatches_(
    n[K].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = He(t, n, []), Ct(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Hn ? e : void 0;
}
function He(e, t, n) {
  if (et(t))
    return t;
  const o = t[K];
  if (!o)
    return Ke(
      t,
      (r, s) => Zt(e, o, t, r, s, n)
    ), t;
  if (o.scope_ !== e)
    return t;
  if (!o.modified_)
    return We(e, o.base_, !0), o.base_;
  if (!o.finalized_) {
    o.finalized_ = !0, o.scope_.unfinalizedDrafts_--;
    const r = o.copy_;
    let s = r, i = !1;
    o.type_ === 3 && (s = new Set(r), r.clear(), i = !0), Ke(
      s,
      (c, f) => Zt(e, o, r, c, f, n, i)
    ), We(e, r, !1), n && e.patches_ && pe("Patches").generatePatches_(
      o,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return o.copy_;
}
function Zt(e, t, n, o, r, s, i) {
  if (process.env.NODE_ENV !== "production" && r === n && Y(5), Z(r)) {
    const c = s && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !_t(t.assigned_, o) ? s.concat(o) : void 0, f = He(e, r, c);
    if (Gn(n, o, f), Z(f))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else i && n.add(r);
  if (te(r) && !et(r)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    He(e, r), (!t || !t.scope_.parent_) && typeof o != "symbol" && Object.prototype.propertyIsEnumerable.call(n, o) && We(e, r);
  }
}
function We(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Pt(t, n);
}
function sr(e, t) {
  const n = Array.isArray(e), o = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : qn(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let r = o, s = $t;
  n && (r = [o], s = Ae);
  const { revoke: i, proxy: c } = Proxy.revocable(r, s);
  return o.draft_ = c, o.revoke_ = i, c;
}
var $t = {
  get(e, t) {
    if (t === K)
      return e;
    const n = ce(e);
    if (!_t(n, t))
      return ar(e, n, t);
    const o = n[t];
    return e.finalized_ || !te(o) ? o : o === gt(e.base_, t) ? (vt(e), e.copy_[t] = kt(o, e)) : o;
  },
  has(e, t) {
    return t in ce(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(ce(e));
  },
  set(e, t, n) {
    const o = Xn(ce(e), t);
    if (o != null && o.set)
      return o.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const r = gt(ce(e), t), s = r == null ? void 0 : r[K];
      if (s && s.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (er(n, r) && (n !== void 0 || _t(e.base_, t)))
        return !0;
      vt(e), Nt(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return gt(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, vt(e), Nt(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = ce(e), o = Reflect.getOwnPropertyDescriptor(n, t);
    return o && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: o.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    Y(11);
  },
  getPrototypeOf(e) {
    return we(e.base_);
  },
  setPrototypeOf() {
    Y(12);
  }
}, Ae = {};
Ke($t, (e, t) => {
  Ae[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Ae.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Y(13), Ae.set.call(this, e, t, void 0);
};
Ae.set = function(e, t, n) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Y(14), $t.set.call(this, e[0], t, n, e[0]);
};
function gt(e, t) {
  const n = e[K];
  return (n ? ce(n) : e)[t];
}
function ar(e, t, n) {
  var r;
  const o = Xn(t, n);
  return o ? "value" in o ? o.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (r = o.get) == null ? void 0 : r.call(e.draft_)
  ) : void 0;
}
function Xn(e, t) {
  if (!(t in e))
    return;
  let n = we(e);
  for (; n; ) {
    const o = Object.getOwnPropertyDescriptor(n, t);
    if (o)
      return o;
    n = we(n);
  }
}
function Nt(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Nt(e.parent_));
}
function vt(e) {
  e.copy_ || (e.copy_ = Ot(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var ir = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, o) => {
      if (typeof t == "function" && typeof n != "function") {
        const s = n;
        n = t;
        const i = this;
        return function(f = s, ...p) {
          return i.produce(f, (l) => n.call(this, l, ...p));
        };
      }
      typeof n != "function" && Y(6), o !== void 0 && typeof o != "function" && Y(7);
      let r;
      if (te(t)) {
        const s = Qt(this), i = kt(t, void 0);
        let c = !0;
        try {
          r = n(i), c = !1;
        } finally {
          c ? Ct(s) : Tt(s);
        }
        return Xt(s, o), Jt(r, s);
      } else if (!t || typeof t != "object") {
        if (r = n(t), r === void 0 && (r = t), r === Hn && (r = void 0), this.autoFreeze_ && Pt(r, !0), o) {
          const s = [], i = [];
          pe("Patches").generateReplacementPatches_(t, r, s, i), o(s, i);
        }
        return r;
      } else
        Y(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (i, ...c) => this.produceWithPatches(i, (f) => t(f, ...c));
      let o, r;
      return [this.produce(t, n, (i, c) => {
        o = i, r = c;
      }), o, r];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    te(e) || Y(8), Z(e) && (e = tt(e));
    const t = Qt(this), n = kt(e, void 0);
    return n[K].isManual_ = !0, Tt(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[K];
    (!n || !n.isManual_) && Y(9);
    const { scope_: o } = n;
    return Xt(o, t), Jt(void 0, o);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const r = t[n];
      if (r.path.length === 0 && r.op === "replace") {
        e = r.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const o = pe("Patches").applyPatches_;
    return Z(e) ? o(e, t) : this.produce(
      e,
      (r) => o(r, t)
    );
  }
};
function kt(e, t) {
  const n = Je(e) ? pe("MapSet").proxyMap_(e, t) : Ze(e) ? pe("MapSet").proxySet_(e, t) : sr(e, t);
  return (t ? t.scope_ : qn()).drafts_.push(n), n;
}
function tt(e) {
  return Z(e) || Y(10, e), Qn(e);
}
function Qn(e) {
  if (!te(e) || et(e))
    return e;
  const t = e[K];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Ot(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Ot(e, !0);
  return Ke(n, (o, r) => {
    Gn(n, o, Qn(r));
  }), t && (t.finalized_ = !1), n;
}
var H = new ir(), Ft = H.produce;
H.produceWithPatches.bind(
  H
);
H.setAutoFreeze.bind(H);
H.setUseStrictShallowCopy.bind(H);
H.applyPatches.bind(H);
H.createDraft.bind(H);
H.finishDraft.bind(H);
var cr = (e, t, n) => {
  if (t.length === 1 && t[0] === n) {
    let o = !1;
    try {
      const r = {};
      e(r) === r && (o = !0);
    } catch {
    }
    if (o) {
      let r;
      try {
        throw new Error();
      } catch (s) {
        ({ stack: r } = s);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: r }
      );
    }
  }
}, ur = (e, t, n) => {
  const { memoize: o, memoizeOptions: r } = t, { inputSelectorResults: s, inputSelectorResultsCopy: i } = e, c = o(() => ({}), ...r);
  if (!(c.apply(null, s) === c.apply(null, i))) {
    let p;
    try {
      throw new Error();
    } catch (l) {
      ({ stack: p } = l);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: n,
        firstInputs: s,
        secondInputs: i,
        stack: p
      }
    );
  }
}, lr = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function dr(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function fr(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function pr(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (o) => typeof o == "function" ? `function ${o.name || "unnamed"}()` : typeof o
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var en = (e) => Array.isArray(e) ? e : [e];
function mr(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return pr(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function tn(e, t) {
  const n = [], { length: o } = e;
  for (let r = 0; r < o; r++)
    n.push(e[r].apply(null, t));
  return n;
}
var yr = (e, t) => {
  const { identityFunctionCheck: n, inputStabilityCheck: o } = {
    ...lr,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: cr
    },
    inputStabilityCheck: {
      shouldRun: o === "always" || o === "once" && e,
      run: ur
    }
  };
}, hr = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, gr = typeof WeakRef < "u" ? WeakRef : hr, vr = 0, nn = 1;
function Fe() {
  return {
    s: vr,
    v: void 0,
    o: null,
    p: null
  };
}
function jt(e, t = {}) {
  let n = Fe();
  const { resultEqualityCheck: o } = t;
  let r, s = 0;
  function i() {
    var m;
    let c = n;
    const { length: f } = arguments;
    for (let v = 0, g = f; v < g; v++) {
      const w = arguments[v];
      if (typeof w == "function" || typeof w == "object" && w !== null) {
        let b = c.o;
        b === null && (c.o = b = /* @__PURE__ */ new WeakMap());
        const a = b.get(w);
        a === void 0 ? (c = Fe(), b.set(w, c)) : c = a;
      } else {
        let b = c.p;
        b === null && (c.p = b = /* @__PURE__ */ new Map());
        const a = b.get(w);
        a === void 0 ? (c = Fe(), b.set(w, c)) : c = a;
      }
    }
    const p = c;
    let l;
    if (c.s === nn ? l = c.v : (l = e.apply(null, arguments), s++), p.s = nn, o) {
      const v = ((m = r == null ? void 0 : r.deref) == null ? void 0 : m.call(r)) ?? r;
      v != null && o(v, l) && (l = v, s !== 0 && s--), r = typeof l == "object" && l !== null || typeof l == "function" ? new gr(l) : l;
    }
    return p.v = l, l;
  }
  return i.clearCache = () => {
    n = Fe(), i.resetResultsCount();
  }, i.resultsCount = () => s, i.resetResultsCount = () => {
    s = 0;
  }, i;
}
function Jn(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, o = (...r) => {
    let s = 0, i = 0, c, f = {}, p = r.pop();
    typeof p == "object" && (f = p, p = r.pop()), dr(
      p,
      `createSelector expects an output function after the inputs, but received: [${typeof p}]`
    );
    const l = {
      ...n,
      ...f
    }, {
      memoize: m,
      memoizeOptions: v = [],
      argsMemoize: g = jt,
      argsMemoizeOptions: w = [],
      devModeChecks: b = {}
    } = l, a = en(v), u = en(w), E = mr(r), h = m(function() {
      return s++, p.apply(
        null,
        arguments
      );
    }, ...a);
    let y = !0;
    const d = g(function() {
      i++;
      const T = tn(
        E,
        arguments
      );
      if (c = h.apply(null, T), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: N, inputStabilityCheck: x } = yr(y, b);
        if (N.shouldRun && N.run(
          p,
          T,
          c
        ), x.shouldRun) {
          const P = tn(
            E,
            arguments
          );
          x.run(
            { inputSelectorResults: T, inputSelectorResultsCopy: P },
            { memoize: m, memoizeOptions: a },
            arguments
          );
        }
        y && (y = !1);
      }
      return c;
    }, ...u);
    return Object.assign(d, {
      resultFunc: p,
      memoizedResultFunc: h,
      dependencies: E,
      dependencyRecomputations: () => i,
      resetDependencyRecomputations: () => {
        i = 0;
      },
      lastResult: () => c,
      recomputations: () => s,
      resetRecomputations: () => {
        s = 0;
      },
      memoize: m,
      argsMemoize: g
    });
  };
  return Object.assign(o, {
    withTypes: () => o
  }), o;
}
var br = /* @__PURE__ */ Jn(jt), wr = Object.assign(
  (e, t = br) => {
    fr(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const n = Object.keys(e), o = n.map(
      (s) => e[s]
    );
    return t(
      o,
      (...s) => s.reduce((i, c, f) => (i[n[f]] = c, i), {})
    );
  },
  { withTypes: () => wr }
);
function Zn(e) {
  return ({ dispatch: n, getState: o }) => (r) => (s) => typeof s == "function" ? s(n, o, e) : r(s);
}
var Er = Zn(), Sr = Zn, _r = (...e) => {
  const t = Jn(...e), n = Object.assign((...o) => {
    const r = t(...o), s = (i, ...c) => r(Z(i) ? tt(i) : i, ...c);
    return Object.assign(s, r), s;
  }, {
    withTypes: () => n
  });
  return n;
}, Or = _r(jt), Cr = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Ye : Ye.apply(null, arguments);
}, Tr = (e) => e && typeof e.match == "function";
function Ee(e, t) {
  function n(...o) {
    if (t) {
      let r = t(...o);
      if (!r)
        throw new Error(process.env.NODE_ENV === "production" ? D(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: r.payload,
        ..."meta" in r && {
          meta: r.meta
        },
        ..."error" in r && {
          error: r.error
        }
      };
    }
    return {
      type: e,
      payload: o[0]
    };
  }
  return n.toString = () => `${e}`, n.type = e, n.match = (o) => Dt(o) && o.type === e, n;
}
function Nr(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  Tr(e);
}
function kr(e) {
  return Dt(e) && Object.keys(e).every(xr);
}
function xr(e) {
  return ["type", "payload", "error", "meta"].indexOf(e) > -1;
}
function Ar(e) {
  const t = e ? `${e}`.split("/") : [], n = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${n}())\` instead of \`dispatch(${n})\`. This is necessary even if the action has no payload.`;
}
function Mr(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (n) => (o) => n(o);
  const {
    isActionCreator: t = Nr
  } = e;
  return () => (n) => (o) => (t(o) && console.warn(Ar(o.type)), n(o));
}
function eo(e, t) {
  let n = 0;
  return {
    measureTime(o) {
      const r = Date.now();
      try {
        return o();
      } finally {
        const s = Date.now();
        n += s - r;
      }
    },
    warnIfExceeded() {
      n > e && console.warn(`${t} took ${n}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var to = class Ne extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Ne.prototype);
  }
  static get [Symbol.species]() {
    return Ne;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Ne(...t[0].concat(this)) : new Ne(...t.concat(this));
  }
};
function on(e) {
  return te(e) ? Ft(e, () => {
  }) : e;
}
function rn(e, t, n) {
  if (e.has(t)) {
    let r = e.get(t);
    return n.update && (r = n.update(r, t, e), e.set(t, r)), r;
  }
  if (!n.insert)
    throw new Error(process.env.NODE_ENV === "production" ? D(10) : "No insert provided for key not already in map");
  const o = n.insert(t, e);
  return e.set(t, o), o;
}
function Rr(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function Ir(e, t, n) {
  const o = no(e, t, n);
  return {
    detectMutations() {
      return oo(e, t, o, n);
    }
  };
}
function no(e, t = [], n, o = "", r = /* @__PURE__ */ new Set()) {
  const s = {
    value: n
  };
  if (!e(n) && !r.has(n)) {
    r.add(n), s.children = {};
    for (const i in n) {
      const c = o ? o + "." + i : i;
      t.length && t.indexOf(c) !== -1 || (s.children[i] = no(e, t, n[i], c));
    }
  }
  return s;
}
function oo(e, t = [], n, o, r = !1, s = "") {
  const i = n ? n.value : void 0, c = i === o;
  if (r && !c && !Number.isNaN(o))
    return {
      wasMutated: !0,
      path: s
    };
  if (e(i) || e(o))
    return {
      wasMutated: !1
    };
  const f = {};
  for (let l in n.children)
    f[l] = !0;
  for (let l in o)
    f[l] = !0;
  const p = t.length > 0;
  for (let l in f) {
    const m = s ? s + "." + l : l;
    if (p && t.some((w) => w instanceof RegExp ? w.test(m) : m === w))
      continue;
    const v = oo(e, t, n.children[l], o[l], c, m);
    if (v.wasMutated)
      return v;
  }
  return {
    wasMutated: !1
  };
}
function Dr(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (n) => t(n);
  {
    let t = function(c, f, p, l) {
      return JSON.stringify(c, n(f, l), p);
    }, n = function(c, f) {
      let p = [], l = [];
      return f || (f = function(m, v) {
        return p[0] === v ? "[Circular ~]" : "[Circular ~." + l.slice(0, p.indexOf(v)).join(".") + "]";
      }), function(m, v) {
        if (p.length > 0) {
          var g = p.indexOf(this);
          ~g ? p.splice(g + 1) : p.push(this), ~g ? l.splice(g, 1 / 0, m) : l.push(m), ~p.indexOf(v) && (v = f.call(this, m, v));
        } else
          p.push(v);
        return c == null ? v : c.call(this, m, v);
      };
    }, {
      isImmutable: o = Rr,
      ignoredPaths: r,
      warnAfter: s = 32
    } = e;
    const i = Ir.bind(null, o, r);
    return ({
      getState: c
    }) => {
      let f = c(), p = i(f), l;
      return (m) => (v) => {
        const g = eo(s, "ImmutableStateInvariantMiddleware");
        g.measureTime(() => {
          if (f = c(), l = p.detectMutations(), p = i(f), l.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? D(19) : `A state mutation was detected between dispatches, in the path '${l.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const w = m(v);
        return g.measureTime(() => {
          if (f = c(), l = p.detectMutations(), p = i(f), l.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? D(20) : `A state mutation was detected inside a dispatch, in the path: ${l.path || ""}. Take a look at the reducer(s) handling the action ${t(v)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), g.warnIfExceeded(), w;
      };
    };
  }
}
function ro(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || Re(e);
}
function xt(e, t = "", n = ro, o, r = [], s) {
  let i;
  if (!n(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || s != null && s.has(e))
    return !1;
  const c = o != null ? o(e) : Object.entries(e), f = r.length > 0;
  for (const [p, l] of c) {
    const m = t ? t + "." + p : p;
    if (!(f && r.some((g) => g instanceof RegExp ? g.test(m) : m === g))) {
      if (!n(l))
        return {
          keyPath: m,
          value: l
        };
      if (typeof l == "object" && (i = xt(l, m, n, o, r, s), i))
        return i;
    }
  }
  return s && so(e) && s.add(e), !1;
}
function so(e) {
  if (!Object.isFrozen(e))
    return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !so(t))
      return !1;
  return !0;
}
function Pr(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (n) => t(n);
  {
    const {
      isSerializable: t = ro,
      getEntries: n,
      ignoredActions: o = [],
      ignoredActionPaths: r = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: s = [],
      warnAfter: i = 32,
      ignoreState: c = !1,
      ignoreActions: f = !1,
      disableCache: p = !1
    } = e, l = !p && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (m) => (v) => (g) => {
      if (!Dt(g))
        return v(g);
      const w = v(g), b = eo(i, "SerializableStateInvariantMiddleware");
      return !f && !(o.length && o.indexOf(g.type) !== -1) && b.measureTime(() => {
        const a = xt(g, "", t, n, r, l);
        if (a) {
          const {
            keyPath: u,
            value: E
          } = a;
          console.error(`A non-serializable value was detected in an action, in the path: \`${u}\`. Value:`, E, `
Take a look at the logic that dispatched this action: `, g, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), c || (b.measureTime(() => {
        const a = m.getState(), u = xt(a, "", t, n, s, l);
        if (u) {
          const {
            keyPath: E,
            value: h
          } = u;
          console.error(`A non-serializable value was detected in the state, in the path: \`${E}\`. Value:`, h, `
Take a look at the reducer(s) handling this action type: ${g.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), b.warnIfExceeded()), w;
    };
  }
}
function je(e) {
  return typeof e == "boolean";
}
var $r = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: o = !0,
    serializableCheck: r = !0,
    actionCreatorCheck: s = !0
  } = t ?? {};
  let i = new to();
  if (n && (je(n) ? i.push(Er) : i.push(Sr(n.extraArgument))), process.env.NODE_ENV !== "production") {
    if (o) {
      let c = {};
      je(o) || (c = o), i.unshift(Dr(c));
    }
    if (r) {
      let c = {};
      je(r) || (c = r), i.push(Pr(c));
    }
    if (s) {
      let c = {};
      je(s) || (c = s), i.unshift(Mr(c));
    }
  }
  return i;
}, Fr = "RTK_autoBatch", ao = (e) => (t) => {
  setTimeout(t, e);
}, jr = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : ao(10), Lr = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const o = t(...n);
  let r = !0, s = !1, i = !1;
  const c = /* @__PURE__ */ new Set(), f = e.type === "tick" ? queueMicrotask : e.type === "raf" ? jr : e.type === "callback" ? e.queueNotification : ao(e.timeout), p = () => {
    i = !1, s && (s = !1, c.forEach((l) => l()));
  };
  return Object.assign({}, o, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(l) {
      const m = () => r && l(), v = o.subscribe(m);
      return c.add(l), () => {
        v(), c.delete(l);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(l) {
      var m;
      try {
        return r = !((m = l == null ? void 0 : l.meta) != null && m[Fr]), s = !r, s && (i || (i = !0, f(p))), o.dispatch(l);
      } finally {
        r = !0;
      }
    }
  });
}, Vr = (e) => function(n) {
  const {
    autoBatch: o = !0
  } = n ?? {};
  let r = new to(e);
  return o && r.push(Lr(typeof o == "object" ? o : void 0)), r;
}, ne = process.env.NODE_ENV === "production";
function zr(e) {
  const t = $r(), {
    reducer: n = void 0,
    middleware: o,
    devTools: r = !0,
    preloadedState: s = void 0,
    enhancers: i = void 0
  } = e || {};
  let c;
  if (typeof n == "function")
    c = n;
  else if (Re(n))
    c = Xo(n);
  else
    throw new Error(process.env.NODE_ENV === "production" ? D(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (!ne && o && typeof o != "function")
    throw new Error(process.env.NODE_ENV === "production" ? D(2) : "`middleware` field must be a callback");
  let f;
  if (typeof o == "function") {
    if (f = o(t), !ne && !Array.isArray(f))
      throw new Error(process.env.NODE_ENV === "production" ? D(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    f = t();
  if (!ne && f.some((w) => typeof w != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? D(4) : "each middleware provided to configureStore must be a function");
  let p = Ye;
  r && (p = Cr({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !ne,
    ...typeof r == "object" && r
  }));
  const l = Qo(...f), m = Vr(l);
  if (!ne && i && typeof i != "function")
    throw new Error(process.env.NODE_ENV === "production" ? D(5) : "`enhancers` field must be a callback");
  let v = typeof i == "function" ? i(m) : m();
  if (!ne && !Array.isArray(v))
    throw new Error(process.env.NODE_ENV === "production" ? D(6) : "`enhancers` callback must return an array");
  if (!ne && v.some((w) => typeof w != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? D(7) : "each enhancer provided to configureStore must be a function");
  !ne && f.length && !v.includes(l) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const g = p(...v);
  return Kn(c, s, g);
}
function io(e) {
  const t = {}, n = [];
  let o;
  const r = {
    addCase(s, i) {
      if (process.env.NODE_ENV !== "production") {
        if (n.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? D(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (o)
          throw new Error(process.env.NODE_ENV === "production" ? D(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const c = typeof s == "string" ? s : s.type;
      if (!c)
        throw new Error(process.env.NODE_ENV === "production" ? D(28) : "`builder.addCase` cannot be called with an empty action type");
      if (c in t)
        throw new Error(process.env.NODE_ENV === "production" ? D(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${c}'`);
      return t[c] = i, r;
    },
    addMatcher(s, i) {
      if (process.env.NODE_ENV !== "production" && o)
        throw new Error(process.env.NODE_ENV === "production" ? D(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return n.push({
        matcher: s,
        reducer: i
      }), r;
    },
    addDefaultCase(s) {
      if (process.env.NODE_ENV !== "production" && o)
        throw new Error(process.env.NODE_ENV === "production" ? D(31) : "`builder.addDefaultCase` can only be called once");
      return o = s, r;
    }
  };
  return e(r), [t, n, o];
}
function Br(e) {
  return typeof e == "function";
}
function Ur(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? D(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [n, o, r] = io(t), s;
  if (Br(e))
    s = () => on(e());
  else {
    const c = on(e);
    s = () => c;
  }
  function i(c = s(), f) {
    let p = [n[f.type], ...o.filter(({
      matcher: l
    }) => l(f)).map(({
      reducer: l
    }) => l)];
    return p.filter((l) => !!l).length === 0 && (p = [r]), p.reduce((l, m) => {
      if (m)
        if (Z(l)) {
          const g = m(l, f);
          return g === void 0 ? l : g;
        } else {
          if (te(l))
            return Ft(l, (v) => m(v, f));
          {
            const v = m(l, f);
            if (v === void 0) {
              if (l === null)
                return l;
              throw new Error(process.env.NODE_ENV === "production" ? D(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return v;
          }
        }
      return l;
    }, c);
  }
  return i.getInitialState = s, i;
}
var Yr = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", W = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Yr[Math.random() * 64 | 0];
  return t;
}, Kr = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Hr(e, t) {
  return `${e}/${t}`;
}
function Wr({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[Kr];
  return function(r) {
    const {
      name: s,
      reducerPath: i = s
    } = r;
    if (!s)
      throw new Error(process.env.NODE_ENV === "production" ? D(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && r.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const c = (typeof r.reducers == "function" ? r.reducers(qr()) : r.reducers) || {}, f = Object.keys(c), p = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, l = {
      addCase(h, y) {
        const d = typeof h == "string" ? h : h.type;
        if (!d)
          throw new Error(process.env.NODE_ENV === "production" ? D(12) : "`context.addCase` cannot be called with an empty action type");
        if (d in p.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? D(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + d);
        return p.sliceCaseReducersByType[d] = y, l;
      },
      addMatcher(h, y) {
        return p.sliceMatchers.push({
          matcher: h,
          reducer: y
        }), l;
      },
      exposeAction(h, y) {
        return p.actionCreators[h] = y, l;
      },
      exposeCaseReducer(h, y) {
        return p.sliceCaseReducersByName[h] = y, l;
      }
    };
    f.forEach((h) => {
      const y = c[h], d = {
        reducerName: h,
        type: Hr(s, h),
        createNotation: typeof r.reducers == "function"
      };
      Qr(y) ? Zr(d, y, l, t) : Xr(d, y, l);
    });
    function m() {
      if (process.env.NODE_ENV !== "production" && typeof r.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? D(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [h = {}, y = [], d = void 0] = typeof r.extraReducers == "function" ? io(r.extraReducers) : [r.extraReducers], S = {
        ...h,
        ...p.sliceCaseReducersByType
      };
      return Ur(r.initialState, (T) => {
        for (let N in S)
          T.addCase(N, S[N]);
        for (let N of p.sliceMatchers)
          T.addMatcher(N.matcher, N.reducer);
        for (let N of y)
          T.addMatcher(N.matcher, N.reducer);
        d && T.addDefaultCase(d);
      });
    }
    const v = (h) => h, g = /* @__PURE__ */ new Map();
    let w;
    function b(h, y) {
      return w || (w = m()), w(h, y);
    }
    function a() {
      return w || (w = m()), w.getInitialState();
    }
    function u(h, y = !1) {
      function d(T) {
        let N = T[h];
        if (typeof N > "u") {
          if (y)
            N = a();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? D(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return N;
      }
      function S(T = v) {
        const N = rn(g, y, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return rn(N, T, {
          insert: () => {
            const x = {};
            for (const [P, V] of Object.entries(r.selectors ?? {}))
              x[P] = Gr(V, T, a, y);
            return x;
          }
        });
      }
      return {
        reducerPath: h,
        getSelectors: S,
        get selectors() {
          return S(d);
        },
        selectSlice: d
      };
    }
    const E = {
      name: s,
      reducer: b,
      actions: p.actionCreators,
      caseReducers: p.sliceCaseReducersByName,
      getInitialState: a,
      ...u(i),
      injectInto(h, {
        reducerPath: y,
        ...d
      } = {}) {
        const S = y ?? i;
        return h.inject({
          reducerPath: S,
          reducer: b
        }, d), {
          ...E,
          ...u(S, !0)
        };
      }
    };
    return E;
  };
}
function Gr(e, t, n, o) {
  function r(s, ...i) {
    let c = t(s);
    if (typeof c > "u") {
      if (o)
        c = n();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? D(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(c, ...i);
  }
  return r.unwrapped = e, r;
}
var nt = /* @__PURE__ */ Wr();
function qr() {
  function e(t, n) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...n
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...n) {
          return t(...n);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, n) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: n
      };
    },
    asyncThunk: e
  };
}
function Xr({
  type: e,
  reducerName: t,
  createNotation: n
}, o, r) {
  let s, i;
  if ("reducer" in o) {
    if (n && !Jr(o))
      throw new Error(process.env.NODE_ENV === "production" ? D(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    s = o.reducer, i = o.prepare;
  } else
    s = o;
  r.addCase(e, s).exposeCaseReducer(t, s).exposeAction(t, i ? Ee(e, i) : Ee(e));
}
function Qr(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Jr(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Zr({
  type: e,
  reducerName: t
}, n, o, r) {
  if (!r)
    throw new Error(process.env.NODE_ENV === "production" ? D(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: s,
    fulfilled: i,
    pending: c,
    rejected: f,
    settled: p,
    options: l
  } = n, m = r(e, s, l);
  o.exposeAction(t, m), i && o.addCase(m.fulfilled, i), c && o.addCase(m.pending, c), f && o.addCase(m.rejected, f), p && o.addMatcher(m.settled, p), o.exposeCaseReducer(t, {
    fulfilled: i || Le,
    pending: c || Le,
    rejected: f || Le,
    settled: p || Le
  });
}
function Le() {
}
function es() {
  return {
    ids: [],
    entities: {}
  };
}
function ts(e) {
  function t(n = {}, o) {
    const r = Object.assign(es(), n);
    return o ? e.setAll(r, o) : r;
  }
  return {
    getInitialState: t
  };
}
function ns() {
  function e(t, n = {}) {
    const {
      createSelector: o = Or
    } = n, r = (m) => m.ids, s = (m) => m.entities, i = o(r, s, (m, v) => m.map((g) => v[g])), c = (m, v) => v, f = (m, v) => m[v], p = o(r, (m) => m.length);
    if (!t)
      return {
        selectIds: r,
        selectEntities: s,
        selectAll: i,
        selectTotal: p,
        selectById: o(s, c, f)
      };
    const l = o(t, s);
    return {
      selectIds: o(t, r),
      selectEntities: l,
      selectAll: o(t, i),
      selectTotal: o(t, p),
      selectById: o(l, c, f)
    };
  }
  return {
    getSelectors: e
  };
}
var os = Z;
function rs(e) {
  const t = F((n, o) => e(o));
  return function(o) {
    return t(o, void 0);
  };
}
function F(e) {
  return function(n, o) {
    function r(i) {
      return kr(i);
    }
    const s = (i) => {
      r(o) ? e(o.payload, i) : e(o, i);
    };
    return os(n) ? (s(n), n) : Ft(n, s);
  };
}
function ve(e, t) {
  const n = t(e);
  return process.env.NODE_ENV !== "production" && n === void 0 && console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", e, "The `selectId` implementation:", t.toString()), n;
}
function de(e) {
  return Array.isArray(e) || (e = Object.values(e)), e;
}
function At(e) {
  return Z(e) ? tt(e) : e;
}
function co(e, t, n) {
  e = de(e);
  const o = At(n.ids), r = new Set(o), s = [], i = [];
  for (const c of e) {
    const f = ve(c, t);
    r.has(f) ? i.push({
      id: f,
      changes: c
    }) : s.push(c);
  }
  return [s, i, o];
}
function uo(e) {
  function t(w, b) {
    const a = ve(w, e);
    a in b.entities || (b.ids.push(a), b.entities[a] = w);
  }
  function n(w, b) {
    w = de(w);
    for (const a of w)
      t(a, b);
  }
  function o(w, b) {
    const a = ve(w, e);
    a in b.entities || b.ids.push(a), b.entities[a] = w;
  }
  function r(w, b) {
    w = de(w);
    for (const a of w)
      o(a, b);
  }
  function s(w, b) {
    w = de(w), b.ids = [], b.entities = {}, n(w, b);
  }
  function i(w, b) {
    return c([w], b);
  }
  function c(w, b) {
    let a = !1;
    w.forEach((u) => {
      u in b.entities && (delete b.entities[u], a = !0);
    }), a && (b.ids = b.ids.filter((u) => u in b.entities));
  }
  function f(w) {
    Object.assign(w, {
      ids: [],
      entities: {}
    });
  }
  function p(w, b, a) {
    const u = a.entities[b.id];
    if (u === void 0)
      return !1;
    const E = Object.assign({}, u, b.changes), h = ve(E, e), y = h !== b.id;
    return y && (w[b.id] = h, delete a.entities[b.id]), a.entities[h] = E, y;
  }
  function l(w, b) {
    return m([w], b);
  }
  function m(w, b) {
    const a = {}, u = {};
    w.forEach((h) => {
      h.id in b.entities && (u[h.id] = {
        id: h.id,
        // Spreads ignore falsy values, so this works even if there isn't
        // an existing update already at this key
        changes: {
          ...u[h.id] ? u[h.id].changes : null,
          ...h.changes
        }
      });
    }), w = Object.values(u), w.length > 0 && w.filter((y) => p(a, y, b)).length > 0 && (b.ids = Object.values(b.entities).map((y) => ve(y, e)));
  }
  function v(w, b) {
    return g([w], b);
  }
  function g(w, b) {
    const [a, u] = co(w, e, b);
    m(u, b), n(a, b);
  }
  return {
    removeAll: rs(f),
    addOne: F(t),
    addMany: F(n),
    setOne: F(o),
    setMany: F(r),
    setAll: F(s),
    updateOne: F(l),
    updateMany: F(m),
    upsertOne: F(v),
    upsertMany: F(g),
    removeOne: F(i),
    removeMany: F(c)
  };
}
function ss(e, t, n) {
  let o = 0, r = e.length;
  for (; o < r; ) {
    let s = o + r >>> 1;
    const i = e[s];
    n(t, i) >= 0 ? o = s + 1 : r = s;
  }
  return o;
}
function as(e, t, n) {
  const o = ss(e, t, n);
  return e.splice(o, 0, t), e;
}
function is(e, t) {
  const {
    removeOne: n,
    removeMany: o,
    removeAll: r
  } = uo(e);
  function s(u, E) {
    return i([u], E);
  }
  function i(u, E, h) {
    u = de(u);
    const y = new Set(h ?? tt(E.ids)), d = u.filter((S) => !y.has(ve(S, e)));
    d.length !== 0 && a(E, d);
  }
  function c(u, E) {
    return f([u], E);
  }
  function f(u, E) {
    if (u = de(u), u.length !== 0) {
      for (const h of u)
        delete E.entities[e(h)];
      a(E, u);
    }
  }
  function p(u, E) {
    u = de(u), E.entities = {}, E.ids = [], i(u, E, []);
  }
  function l(u, E) {
    return m([u], E);
  }
  function m(u, E) {
    let h = !1, y = !1;
    for (let d of u) {
      const S = E.entities[d.id];
      if (!S)
        continue;
      h = !0, Object.assign(S, d.changes);
      const T = e(S);
      if (d.id !== T) {
        y = !0, delete E.entities[d.id];
        const N = E.ids.indexOf(d.id);
        E.ids[N] = T, E.entities[T] = S;
      }
    }
    h && a(E, [], h, y);
  }
  function v(u, E) {
    return g([u], E);
  }
  function g(u, E) {
    const [h, y, d] = co(u, e, E);
    y.length && m(y, E), h.length && i(h, E, d);
  }
  function w(u, E) {
    if (u.length !== E.length)
      return !1;
    for (let h = 0; h < u.length && h < E.length; h++)
      if (u[h] !== E[h])
        return !1;
    return !0;
  }
  const a = (u, E, h, y) => {
    const d = At(u.entities), S = At(u.ids), T = u.entities;
    let N = S;
    y && (N = Array.from(new Set(S)));
    let x = [];
    for (const z of N) {
      const q = d[z];
      q && x.push(q);
    }
    const P = x.length === 0;
    for (const z of E)
      T[e(z)] = z, P || as(x, z, t);
    P ? x = E.slice().sort(t) : h && x.sort(t);
    const V = x.map(e);
    w(S, V) || (u.ids = V);
  };
  return {
    removeOne: n,
    removeMany: o,
    removeAll: r,
    addOne: F(s),
    updateOne: F(l),
    upsertOne: F(v),
    setOne: F(c),
    setMany: F(f),
    setAll: F(p),
    addMany: F(i),
    updateMany: F(m),
    upsertMany: F(g)
  };
}
function cs(e = {}) {
  const {
    selectId: t,
    sortComparer: n
  } = {
    sortComparer: !1,
    selectId: (i) => i.id,
    ...e
  }, o = n ? is(t, n) : uo(t), r = ts(o), s = ns();
  return {
    selectId: t,
    sortComparer: n,
    ...r,
    ...s,
    ...o
  };
}
var us = (e, t) => {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? D(32) : `${t} is not a function`);
}, Lt = "listenerMiddleware", ls = (e) => {
  let {
    type: t,
    actionCreator: n,
    matcher: o,
    predicate: r,
    effect: s
  } = e;
  if (t)
    r = Ee(t).match;
  else if (n)
    t = n.type, r = n.match;
  else if (o)
    r = o;
  else if (!r) throw new Error(process.env.NODE_ENV === "production" ? D(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return us(s, "options.listener"), {
    predicate: r,
    type: t,
    effect: s
  };
}, ds = Object.assign((e) => {
  const {
    type: t,
    predicate: n,
    effect: o
  } = ls(e);
  return {
    id: W(),
    effect: o,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? D(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => ds
}), fs = Object.assign(Ee(`${Lt}/add`), {
  withTypes: () => fs
});
Ee(`${Lt}/removeAll`);
var ps = Object.assign(Ee(`${Lt}/remove`), {
  withTypes: () => ps
});
function D(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Mt = { exports: {} }, bt = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sn;
function ms() {
  if (sn) return bt;
  sn = 1;
  var e = _;
  function t(m, v) {
    return m === v && (m !== 0 || 1 / m === 1 / v) || m !== m && v !== v;
  }
  var n = typeof Object.is == "function" ? Object.is : t, o = e.useState, r = e.useEffect, s = e.useLayoutEffect, i = e.useDebugValue;
  function c(m, v) {
    var g = v(), w = o({ inst: { value: g, getSnapshot: v } }), b = w[0].inst, a = w[1];
    return s(function() {
      b.value = g, b.getSnapshot = v, f(b) && a({ inst: b });
    }, [m, g, v]), r(function() {
      return f(b) && a({ inst: b }), m(function() {
        f(b) && a({ inst: b });
      });
    }, [m]), i(g), g;
  }
  function f(m) {
    var v = m.getSnapshot;
    m = m.value;
    try {
      var g = v();
      return !n(m, g);
    } catch {
      return !0;
    }
  }
  function p(m, v) {
    return v();
  }
  var l = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : c;
  return bt.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l, bt;
}
var wt = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var an;
function ys() {
  return an || (an = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = _, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(h) {
      {
        for (var y = arguments.length, d = new Array(y > 1 ? y - 1 : 0), S = 1; S < y; S++)
          d[S - 1] = arguments[S];
        o("error", h, d);
      }
    }
    function o(h, y, d) {
      {
        var S = t.ReactDebugCurrentFrame, T = S.getStackAddendum();
        T !== "" && (y += "%s", d = d.concat([T]));
        var N = d.map(function(x) {
          return String(x);
        });
        N.unshift("Warning: " + y), Function.prototype.apply.call(console[h], console, N);
      }
    }
    function r(h, y) {
      return h === y && (h !== 0 || 1 / h === 1 / y) || h !== h && y !== y;
    }
    var s = typeof Object.is == "function" ? Object.is : r, i = e.useState, c = e.useEffect, f = e.useLayoutEffect, p = e.useDebugValue, l = !1, m = !1;
    function v(h, y, d) {
      l || e.startTransition !== void 0 && (l = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var S = y();
      if (!m) {
        var T = y();
        s(S, T) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), m = !0);
      }
      var N = i({
        inst: {
          value: S,
          getSnapshot: y
        }
      }), x = N[0].inst, P = N[1];
      return f(function() {
        x.value = S, x.getSnapshot = y, g(x) && P({
          inst: x
        });
      }, [h, S, y]), c(function() {
        g(x) && P({
          inst: x
        });
        var V = function() {
          g(x) && P({
            inst: x
          });
        };
        return h(V);
      }, [h]), p(S), S;
    }
    function g(h) {
      var y = h.getSnapshot, d = h.value;
      try {
        var S = y();
        return !s(d, S);
      } catch {
        return !0;
      }
    }
    function w(h, y, d) {
      return y();
    }
    var b = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", a = !b, u = a ? w : v, E = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u;
    wt.useSyncExternalStore = E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), wt;
}
process.env.NODE_ENV === "production" ? Mt.exports = ms() : Mt.exports = ys();
var lo = Mt.exports, Rt = { exports: {} }, Et = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cn;
function hs() {
  if (cn) return Et;
  cn = 1;
  var e = _, t = lo;
  function n(p, l) {
    return p === l && (p !== 0 || 1 / p === 1 / l) || p !== p && l !== l;
  }
  var o = typeof Object.is == "function" ? Object.is : n, r = t.useSyncExternalStore, s = e.useRef, i = e.useEffect, c = e.useMemo, f = e.useDebugValue;
  return Et.useSyncExternalStoreWithSelector = function(p, l, m, v, g) {
    var w = s(null);
    if (w.current === null) {
      var b = { hasValue: !1, value: null };
      w.current = b;
    } else b = w.current;
    w = c(function() {
      function u(S) {
        if (!E) {
          if (E = !0, h = S, S = v(S), g !== void 0 && b.hasValue) {
            var T = b.value;
            if (g(T, S)) return y = T;
          }
          return y = S;
        }
        if (T = y, o(h, S)) return T;
        var N = v(S);
        return g !== void 0 && g(T, N) ? T : (h = S, y = N);
      }
      var E = !1, h, y, d = m === void 0 ? null : m;
      return [function() {
        return u(l());
      }, d === null ? void 0 : function() {
        return u(d());
      }];
    }, [l, m, v, g]);
    var a = r(p, w[0], w[1]);
    return i(function() {
      b.hasValue = !0, b.value = a;
    }, [a]), f(a), a;
  }, Et;
}
var St = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var un;
function gs() {
  return un || (un = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = _, t = lo;
    function n(l, m) {
      return l === m && (l !== 0 || 1 / l === 1 / m) || l !== l && m !== m;
    }
    var o = typeof Object.is == "function" ? Object.is : n, r = t.useSyncExternalStore, s = e.useRef, i = e.useEffect, c = e.useMemo, f = e.useDebugValue;
    function p(l, m, v, g, w) {
      var b = s(null), a;
      b.current === null ? (a = {
        hasValue: !1,
        value: null
      }, b.current = a) : a = b.current;
      var u = c(function() {
        var d = !1, S, T, N = function(z) {
          if (!d) {
            d = !0, S = z;
            var q = g(z);
            if (w !== void 0 && a.hasValue) {
              var se = a.value;
              if (w(se, q))
                return T = se, se;
            }
            return T = q, q;
          }
          var Oe = S, ae = T;
          if (o(Oe, z))
            return ae;
          var ie = g(z);
          return w !== void 0 && w(ae, ie) ? ae : (S = z, T = ie, ie);
        }, x = v === void 0 ? null : v, P = function() {
          return N(m());
        }, V = x === null ? void 0 : function() {
          return N(x());
        };
        return [P, V];
      }, [m, v, g, w]), E = u[0], h = u[1], y = r(l, E, h);
      return i(function() {
        a.hasValue = !0, a.value = y;
      }, [y]), f(y), y;
    }
    St.useSyncExternalStoreWithSelector = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), St;
}
process.env.NODE_ENV === "production" ? Rt.exports = hs() : Rt.exports = gs();
var vs = Rt.exports;
function bs(e) {
  e();
}
let fo = bs;
const ws = (e) => fo = e, Ha = () => fo, ln = Symbol.for("react-redux-context"), dn = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Es() {
  var e;
  if (!$e.createContext) return {};
  const t = (e = dn[ln]) != null ? e : dn[ln] = /* @__PURE__ */ new Map();
  let n = t.get($e.createContext);
  return n || (n = $e.createContext(null), process.env.NODE_ENV !== "production" && (n.displayName = "ReactRedux"), t.set($e.createContext, n)), n;
}
const It = /* @__PURE__ */ Es();
function po(e = It) {
  return function() {
    const n = No(e);
    if (process.env.NODE_ENV !== "production" && !n)
      throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
    return n;
  };
}
const Ss = /* @__PURE__ */ po(), _s = () => {
  throw new Error("uSES not initialized!");
};
let mo = _s;
const Os = (e) => {
  mo = e;
}, Cs = (e, t) => e === t;
function Ts(e = It) {
  const t = e === It ? Ss : po(e);
  return function(o, r = {}) {
    const {
      equalityFn: s = Cs,
      stabilityCheck: i = void 0,
      noopCheck: c = void 0
    } = typeof r == "function" ? {
      equalityFn: r
    } : r;
    if (process.env.NODE_ENV !== "production") {
      if (!o)
        throw new Error("You must pass a selector to useSelector");
      if (typeof o != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof s != "function")
        throw new Error("You must pass a function as an equality function to useSelector");
    }
    const {
      store: f,
      subscription: p,
      getServerState: l,
      stabilityCheck: m,
      noopCheck: v
    } = t(), g = ko(!0), w = xo({
      [o.name](a) {
        const u = o(a);
        if (process.env.NODE_ENV !== "production") {
          const E = typeof i > "u" ? m : i;
          if (E === "always" || E === "once" && g.current) {
            const y = o(a);
            if (!s(u, y)) {
              let d;
              try {
                throw new Error();
              } catch (S) {
                ({
                  stack: d
                } = S);
              }
              console.warn("Selector " + (o.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`, {
                state: a,
                selected: u,
                selected2: y,
                stack: d
              });
            }
          }
          const h = typeof c > "u" ? v : c;
          if ((h === "always" || h === "once" && g.current) && u === a) {
            let y;
            try {
              throw new Error();
            } catch (d) {
              ({
                stack: y
              } = d);
            }
            console.warn("Selector " + (o.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`, {
              stack: y
            });
          }
          g.current && (g.current = !1);
        }
        return u;
      }
    }[o.name], [o, m, i]), b = mo(p.addNestedSub, f.getState, l || f.getState, w, s);
    return Ao(b), b;
  };
}
const $ = /* @__PURE__ */ Ts();
var Ve = { exports: {} }, A = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fn;
function Ns() {
  if (fn) return A;
  fn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, r = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, a = e ? Symbol.for("react.fundamental") : 60117, u = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
  function h(d) {
    if (typeof d == "object" && d !== null) {
      var S = d.$$typeof;
      switch (S) {
        case t:
          switch (d = d.type, d) {
            case f:
            case p:
            case o:
            case s:
            case r:
            case m:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case c:
                case l:
                case w:
                case g:
                case i:
                  return d;
                default:
                  return S;
              }
          }
        case n:
          return S;
      }
    }
  }
  function y(d) {
    return h(d) === p;
  }
  return A.AsyncMode = f, A.ConcurrentMode = p, A.ContextConsumer = c, A.ContextProvider = i, A.Element = t, A.ForwardRef = l, A.Fragment = o, A.Lazy = w, A.Memo = g, A.Portal = n, A.Profiler = s, A.StrictMode = r, A.Suspense = m, A.isAsyncMode = function(d) {
    return y(d) || h(d) === f;
  }, A.isConcurrentMode = y, A.isContextConsumer = function(d) {
    return h(d) === c;
  }, A.isContextProvider = function(d) {
    return h(d) === i;
  }, A.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === t;
  }, A.isForwardRef = function(d) {
    return h(d) === l;
  }, A.isFragment = function(d) {
    return h(d) === o;
  }, A.isLazy = function(d) {
    return h(d) === w;
  }, A.isMemo = function(d) {
    return h(d) === g;
  }, A.isPortal = function(d) {
    return h(d) === n;
  }, A.isProfiler = function(d) {
    return h(d) === s;
  }, A.isStrictMode = function(d) {
    return h(d) === r;
  }, A.isSuspense = function(d) {
    return h(d) === m;
  }, A.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === o || d === p || d === s || d === r || d === m || d === v || typeof d == "object" && d !== null && (d.$$typeof === w || d.$$typeof === g || d.$$typeof === i || d.$$typeof === c || d.$$typeof === l || d.$$typeof === a || d.$$typeof === u || d.$$typeof === E || d.$$typeof === b);
  }, A.typeOf = h, A;
}
var M = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pn;
function ks() {
  return pn || (pn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, r = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, a = e ? Symbol.for("react.fundamental") : 60117, u = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
    function h(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === o || O === p || O === s || O === r || O === m || O === v || typeof O == "object" && O !== null && (O.$$typeof === w || O.$$typeof === g || O.$$typeof === i || O.$$typeof === c || O.$$typeof === l || O.$$typeof === a || O.$$typeof === u || O.$$typeof === E || O.$$typeof === b);
    }
    function y(O) {
      if (typeof O == "object" && O !== null) {
        var Te = O.$$typeof;
        switch (Te) {
          case t:
            var C = O.type;
            switch (C) {
              case f:
              case p:
              case o:
              case s:
              case r:
              case m:
                return C;
              default:
                var ge = C && C.$$typeof;
                switch (ge) {
                  case c:
                  case l:
                  case w:
                  case g:
                  case i:
                    return ge;
                  default:
                    return Te;
                }
            }
          case n:
            return Te;
        }
      }
    }
    var d = f, S = p, T = c, N = i, x = t, P = l, V = o, z = w, q = g, se = n, Oe = s, ae = r, ie = m, Ce = !1;
    function Ie(O) {
      return Ce || (Ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), De(O) || y(O) === f;
    }
    function De(O) {
      return y(O) === p;
    }
    function st(O) {
      return y(O) === c;
    }
    function at(O) {
      return y(O) === i;
    }
    function it(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function ct(O) {
      return y(O) === l;
    }
    function ut(O) {
      return y(O) === o;
    }
    function lt(O) {
      return y(O) === w;
    }
    function dt(O) {
      return y(O) === g;
    }
    function ft(O) {
      return y(O) === n;
    }
    function pt(O) {
      return y(O) === s;
    }
    function mt(O) {
      return y(O) === r;
    }
    function yt(O) {
      return y(O) === m;
    }
    M.AsyncMode = d, M.ConcurrentMode = S, M.ContextConsumer = T, M.ContextProvider = N, M.Element = x, M.ForwardRef = P, M.Fragment = V, M.Lazy = z, M.Memo = q, M.Portal = se, M.Profiler = Oe, M.StrictMode = ae, M.Suspense = ie, M.isAsyncMode = Ie, M.isConcurrentMode = De, M.isContextConsumer = st, M.isContextProvider = at, M.isElement = it, M.isForwardRef = ct, M.isFragment = ut, M.isLazy = lt, M.isMemo = dt, M.isPortal = ft, M.isProfiler = pt, M.isStrictMode = mt, M.isSuspense = yt, M.isValidElementType = h, M.typeOf = y;
  }()), M;
}
var mn;
function xs() {
  return mn || (mn = 1, process.env.NODE_ENV === "production" ? Ve.exports = Ns() : Ve.exports = ks()), Ve.exports;
}
var yo = xs(), As = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ms = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ho = {};
ho[yo.ForwardRef] = As;
ho[yo.Memo] = Ms;
var R = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yn;
function Rs() {
  if (yn) return R;
  yn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), w;
  w = Symbol.for("react.module.reference");
  function b(a) {
    if (typeof a == "object" && a !== null) {
      var u = a.$$typeof;
      switch (u) {
        case e:
          switch (a = a.type, a) {
            case n:
            case r:
            case o:
            case p:
            case l:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case c:
                case i:
                case f:
                case v:
                case m:
                case s:
                  return a;
                default:
                  return u;
              }
          }
        case t:
          return u;
      }
    }
  }
  return R.ContextConsumer = i, R.ContextProvider = s, R.Element = e, R.ForwardRef = f, R.Fragment = n, R.Lazy = v, R.Memo = m, R.Portal = t, R.Profiler = r, R.StrictMode = o, R.Suspense = p, R.SuspenseList = l, R.isAsyncMode = function() {
    return !1;
  }, R.isConcurrentMode = function() {
    return !1;
  }, R.isContextConsumer = function(a) {
    return b(a) === i;
  }, R.isContextProvider = function(a) {
    return b(a) === s;
  }, R.isElement = function(a) {
    return typeof a == "object" && a !== null && a.$$typeof === e;
  }, R.isForwardRef = function(a) {
    return b(a) === f;
  }, R.isFragment = function(a) {
    return b(a) === n;
  }, R.isLazy = function(a) {
    return b(a) === v;
  }, R.isMemo = function(a) {
    return b(a) === m;
  }, R.isPortal = function(a) {
    return b(a) === t;
  }, R.isProfiler = function(a) {
    return b(a) === r;
  }, R.isStrictMode = function(a) {
    return b(a) === o;
  }, R.isSuspense = function(a) {
    return b(a) === p;
  }, R.isSuspenseList = function(a) {
    return b(a) === l;
  }, R.isValidElementType = function(a) {
    return typeof a == "string" || typeof a == "function" || a === n || a === r || a === o || a === p || a === l || a === g || typeof a == "object" && a !== null && (a.$$typeof === v || a.$$typeof === m || a.$$typeof === s || a.$$typeof === i || a.$$typeof === f || a.$$typeof === w || a.getModuleId !== void 0);
  }, R.typeOf = b, R;
}
var I = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hn;
function Is() {
  return hn || (hn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), w = !1, b = !1, a = !1, u = !1, E = !1, h;
    h = Symbol.for("react.module.reference");
    function y(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === n || C === r || E || C === o || C === p || C === l || u || C === g || w || b || a || typeof C == "object" && C !== null && (C.$$typeof === v || C.$$typeof === m || C.$$typeof === s || C.$$typeof === i || C.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C.$$typeof === h || C.getModuleId !== void 0));
    }
    function d(C) {
      if (typeof C == "object" && C !== null) {
        var ge = C.$$typeof;
        switch (ge) {
          case e:
            var Pe = C.type;
            switch (Pe) {
              case n:
              case r:
              case o:
              case p:
              case l:
                return Pe;
              default:
                var Bt = Pe && Pe.$$typeof;
                switch (Bt) {
                  case c:
                  case i:
                  case f:
                  case v:
                  case m:
                  case s:
                    return Bt;
                  default:
                    return ge;
                }
            }
          case t:
            return ge;
        }
      }
    }
    var S = i, T = s, N = e, x = f, P = n, V = v, z = m, q = t, se = r, Oe = o, ae = p, ie = l, Ce = !1, Ie = !1;
    function De(C) {
      return Ce || (Ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function st(C) {
      return Ie || (Ie = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function at(C) {
      return d(C) === i;
    }
    function it(C) {
      return d(C) === s;
    }
    function ct(C) {
      return typeof C == "object" && C !== null && C.$$typeof === e;
    }
    function ut(C) {
      return d(C) === f;
    }
    function lt(C) {
      return d(C) === n;
    }
    function dt(C) {
      return d(C) === v;
    }
    function ft(C) {
      return d(C) === m;
    }
    function pt(C) {
      return d(C) === t;
    }
    function mt(C) {
      return d(C) === r;
    }
    function yt(C) {
      return d(C) === o;
    }
    function O(C) {
      return d(C) === p;
    }
    function Te(C) {
      return d(C) === l;
    }
    I.ContextConsumer = S, I.ContextProvider = T, I.Element = N, I.ForwardRef = x, I.Fragment = P, I.Lazy = V, I.Memo = z, I.Portal = q, I.Profiler = se, I.StrictMode = Oe, I.Suspense = ae, I.SuspenseList = ie, I.isAsyncMode = De, I.isConcurrentMode = st, I.isContextConsumer = at, I.isContextProvider = it, I.isElement = ct, I.isForwardRef = ut, I.isFragment = lt, I.isLazy = dt, I.isMemo = ft, I.isPortal = pt, I.isProfiler = mt, I.isStrictMode = yt, I.isSuspense = O, I.isSuspenseList = Te, I.isValidElementType = y, I.typeOf = d;
  }()), I;
}
process.env.NODE_ENV === "production" ? Rs() : Is();
Os(vs.useSyncExternalStoreWithSelector);
ws(Po);
function U(e) {
  const { name: t, default: n, id: o, actions: r, uniques: s = [], onSave: i, onRead: c } = e, f = cs({
    selectId: (a) => a[o]
  }), p = f.getSelectors(), l = f.getInitialState({
    saved: !0,
    status: "idle",
    writeStatus: "ready",
    id: o,
    name: t,
    loadingTime: 600,
    changed: !1
  });
  function m(a, u) {
    const E = Object.values(u), h = Object.values(a).map((d) => {
      const S = typeof n == "function" ? n(u, d) : n;
      return Bn(d, S || {});
    });
    if (!s.length)
      return h;
    const y = [...E, ...h.filter(Boolean)];
    return h.filter((d, S) => !y.slice(0, S).find((x) => s.some((P) => Array.isArray(P) ? P.every((V) => (x == null ? void 0 : x[V]) == (d == null ? void 0 : d[V])) : (x == null ? void 0 : x[P]) == d[P])));
  }
  const v = nt({
    name: t,
    initialState: l,
    reducers: {
      set(a, { payload: u = [] }) {
        f.setAll(a, m(u, a));
      },
      add(a, { payload: u = [] }) {
        const E = m(u, a);
        f.addMany(a, E), E.length && (a.changed = !0);
      },
      remove(a, { payload: u = [] }) {
        u.some((h) => a.ids.includes(h)) && (a.changed = !0), f.removeMany(a, u);
      },
      update(a, { payload: u = [] }) {
        u.map(({ id: y }) => y).some((y) => a.ids.includes(y)) && (a.changed = !0), f.updateMany(a, u);
      },
      reset(a) {
        a.ids.length || (a.changed = !0), f.removeAll(a);
      },
      upsert(a, { payload: u = [] }) {
        f.upsertMany(a, u), a.changed = !0;
      },
      changeStatus(a, { payload: u }) {
        a.status = u;
      },
      setLoadingTime(a, { payload: u }) {
        a.loadingTime = u;
      },
      setChanged(a, { payload: u }) {
        a.changed = u;
      },
      changeWriteStatus(a, { payload: u }) {
        a.writeStatus = u;
      },
      ...r
    }
  }), g = {
    getFull() {
      return $((u) => u[t]);
    },
    getIds() {
      return $((u) => p.selectIds(u[t]));
    },
    getId() {
      return $((u) => u[t].id);
    },
    remove(a) {
      k.dispatch(v.actions.remove(a));
    },
    add(a) {
      k.dispatch(v.actions.add(a));
    },
    upsert(a) {
      k.dispatch(v.actions.upsert(a));
    },
    getOne(a) {
      return $((u) => {
        const E = p.selectById(u[t], a);
        return typeof E > "u" ? void 0 : E;
      });
    },
    setOne(a, u) {
      k.dispatch(
        v.actions.update([
          {
            id: a,
            changes: u
          }
        ])
      );
    },
    setWriteStatus(a = "ready") {
      k.dispatch(v.actions.changeWriteStatus(a));
    },
    useOne(a) {
      const u = g.getOne(a);
      return Vn(
        u,
        (E) => E !== void 0 && g.setOne(a, E),
        (E) => E ?? void 0
      );
    },
    getOneFeild(a, u) {
      return $((h) => {
        var d;
        const y = (d = p.selectById(h[t], a)) == null ? void 0 : d[u];
        return typeof y > "u" ? void 0 : y;
      });
    },
    setOneFeild(a, u, E) {
      k.dispatch(
        v.actions.update([
          {
            id: a,
            changes: {
              [u]: E
            }
          }
        ])
      );
    },
    useOneFeild(a, u) {
      const E = g.getOneFeild(a, u);
      return Vn(
        E,
        (y) => {
          y != null && g.setOneFeild(a, u, y);
        },
        (y) => y
      );
    },
    getOneFeilds(a, u) {
      return $((h) => {
        const y = p.selectById(h[t], a);
        if (!y)
          return;
        const d = {};
        return u.forEach((S) => {
          d[S] = y[S];
        }), d;
      });
    },
    getAll() {
      return $((u) => p.selectAll(u[t]));
    },
    setAll(a) {
      k.dispatch(v.actions.set(a));
    },
    useAll() {
      const a = g.getAll(), u = B(a);
      return _.useEffect(() => {
        g.setAll(u.get);
      }, [u.get]), _.useEffect(() => {
        u.set(a);
      }, [a]), u;
    },
    getWriteStatus() {
      return $((u) => u[t].writeStatus);
    },
    useWriteStatus() {
      const a = g.getWriteStatus(), u = B(a);
      return _.useEffect(() => {
        g.setWriteStatus(u.get);
      }, [u.get]), _.useEffect(() => {
        u.set(a);
      }, [a]), u;
    },
    getStatus() {
      return $((u) => u[t].status);
    },
    setStatus(a) {
      k.dispatch(v.actions.changeStatus(a));
    },
    useStatus() {
      const a = g.getStatus(), u = B(a);
      return _.useEffect(() => {
        g.setStatus(u.get);
      }, [u.get]), _.useEffect(() => {
        u.set(a);
      }, [a]), u;
    },
    getEntity() {
      return $((u) => p.selectEntities(u[t]));
    },
    getLoadingTime() {
      return $((u) => u[t].loadingTime);
    },
    setLoadingTime(a) {
      k.dispatch(v.actions.setLoadingTime(a));
    },
    useLoadingTime() {
      const a = g.getLoadingTime(), u = B(a);
      _.useEffect(() => {
        g.setLoadingTime(u.get);
      }, [u.get]), _.useEffect(() => {
        u.set(a);
      }, [a]);
    },
    getChanged() {
      return $((u) => u[t].changed);
    },
    setChanged(a) {
      k.dispatch(v.actions.setChanged(a));
    },
    useChanged() {
      const a = g.getChanged(), u = B(a);
      _.useEffect(() => {
        g.setChanged(u.get);
      }, [u.get]), _.useEffect(() => {
        u.set(a);
      }, [a]);
    }
  };
  function w() {
    const a = g.getStatus(), u = g.getId(), E = g.getWriteStatus(), h = g.getLoadingTime();
    return _e(async () => {
      if (a == "idle") {
        const y = new qe();
        y.clear(), g.setStatus("loading"), await y.start(h);
        try {
          if (!c)
            return;
          let d = c();
          d instanceof Promise && (d = await d), g.setChanged(!1), g.setStatus("success"), g.setAll(d);
        } catch {
          g.setAll([]), g.setStatus("error");
        }
      }
    }, [a]), _e(async () => {
      if (E == "idle") {
        g.setWriteStatus("loading");
        const y = {};
        try {
          const d = k.getState(), { [t]: S } = d;
          Object.values(S.entities).forEach((N) => {
            if (!N)
              return;
            const { [u]: x, ...P } = N;
            y[x] = P;
          });
          const T = i == null ? void 0 : i(y, e, d);
          T instanceof Promise && await T, g.setWriteStatus("success"), g.setWriteStatus("ready");
        } catch {
          g.setWriteStatus("error");
        }
      }
    }, [E]), _.useEffect(() => {
      const y = Object.entries(e.data || {}).map(([d, S]) => ({
        [u]: d,
        ...S
      }));
      g.setAll(y);
    }, []), { id: u, saved: E, status: a, timeLoading: h };
  }
  return {
    slice: v,
    entity: f,
    hooks: g,
    entitySelect: p,
    initialState: l,
    init: w,
    select: (a) => a[t]
  };
}
const Ds = {
  data: {
    settings: {
      focused: "user",
      label: "settings controler",
      tabs: {
        user: {
          icon: {
            value: "faTools"
          }
        },
        keyboardShortcuts: {
          icon: {
            value: "faKeyboard"
          },
          news: {
            value: "faKeyboard"
          }
        },
        icons: {
          icon: { value: "faIcons" }
        },
        colors: {
          icon: {
            value: "faPenRuler",
            type: "solid"
          }
        }
      }
    },
    "settings.viewType": {
      focused: "list",
      label: "settings layout",
      tab: {
        list: {},
        tree: {}
      }
    }
  }
}, { data: Ps } = Ds, $s = {
  name: "views",
  id: "viewId",
  default(e, t) {
    const n = t.tabs || {};
    for (const o in n)
      n[o].label || (n[o].label = o);
    return {
      viewId: W(),
      focused: null,
      tabs: n
    };
  },
  data: Ps
}, { hooks: go, slice: gn, init: Wa, select: Ga } = U($s);
function qa(e) {
  const t = go.getOne(e);
  return _.useMemo(() => {
    var n;
    return typeof (t == null ? void 0 : t.focused) == "number" ? (n = t == null ? void 0 : t.tabs) == null ? void 0 : n[t.focused] : null;
  }, [t]);
}
const Fs = {
  id: "treeId",
  name: "tree",
  default: {
    expanded: {},
    separator: "/"
  },
  actions: {
    next(e, { payload: t }) {
      e.entities[t];
    },
    back(e, { payload: t }) {
      e.entities[t];
    },
    toggleExpand(e, { payload: t }) {
      var o;
      const n = e.entities[t];
      n && n.focused && (n.expanded = {
        ...n.expanded || {},
        [n.focused]: !((o = n.expanded) != null && o[n.focused])
      });
    },
    expandMore(e, { payload: t }) {
      const n = e.entities[t];
      n && n.focused && (n.expanded = {
        ...n.expanded || {},
        [n.focused]: !0
      });
    },
    expandLess(e, { payload: t }) {
      const n = e.entities[t];
      n && n.focused && (n.expanded = {
        ...n.expanded || {},
        [n.focused]: !1
      });
    },
    focusParent(e, { payload: t }) {
      const n = e.entities[t];
      if (n && n.focused && n.separator) {
        const o = n.focused.split(n.separator).slice(0, -1).join(n.separator);
        n.focused = o || null;
      }
    },
    focusLeft(e, { payload: t }) {
      var o;
      const n = e.entities[t];
      if (n && n.focused && n.separator)
        if ((o = n.expanded) == null ? void 0 : o[n.focused])
          n.expanded = {
            ...n.expanded || {},
            [n.focused]: !1
          };
        else {
          const s = n.focused.split(n.separator).slice(0, -1).join(n.separator);
          n.focused = s || null;
        }
    },
    focusRight(e, { payload: t }) {
      var o;
      const n = e.entities[t];
      if (n && n.focused && n.separator)
        if (!((o = n.expanded) == null ? void 0 : o[n.focused]))
          n.expanded = {
            ...n.expanded || {},
            [n.focused]: !0
          };
        else {
          const s = [...n.focused.split(n.separator), "0"].join(n.separator);
          n.focused = s;
        }
    }
  },
  data: {}
}, { init: Xa, hooks: vn, slice: bn } = U(Fs);
function Qa(e) {
  const t = vn.getOne(e);
  _.useEffect(() => {
    t || vn.add([
      {
        treeId: e,
        ends: []
      }
    ]);
  }, [t]);
}
const js = {
  content: null,
  position: null,
  x: "left",
  y: "bottom"
}, Se = nt({
  initialState: js,
  name: "title",
  reducers: {
    // actions
    setContent(e, { payload: t }) {
      e.content = t;
    },
    setPosition(e, { payload: t }) {
      e.position = t;
    },
    setX(e, { payload: t }) {
      e.x = t;
    },
    setY(e, { payload: t }) {
      e.y = t;
    }
  }
});
function Ja(e) {
  k.dispatch(Se.actions.setContent(e));
}
function Za() {
  return $((t) => t.title.content, ye);
}
function ei(e) {
  k.dispatch(Se.actions.setPosition(e));
}
function ti() {
  return $((t) => t.title.position, ye);
}
function ni(e = "left") {
  k.dispatch(Se.actions.setX(e));
}
function oi() {
  return $((t) => t.title.x, ye);
}
function ri(e = "bottom") {
  k.dispatch(Se.actions.setY(e));
}
function si() {
  return $((t) => t.title.y, ye);
}
const Ls = {
  id: "id",
  name: "toasts",
  default: () => ({
    id: W(),
    type: "info"
  })
}, { hooks: Vs, init: ai, select: ii, slice: wn, entity: ci } = U(Ls), he = {
  id: "slotId",
  name: "slot",
  default: {
    slotId: W(14),
    focused: null,
    submited: null,
    selected: {},
    skiped: {},
    length: 0,
    direction: null,
    redirect: !0
  },
  actions: {
    changeSelectIndexs(e, {
      payload: { name: t, items: n = {} }
    }) {
      const o = e.entities[t];
      o && (o.selected = { ...n });
    },
    removeSelection(e, { payload: t }) {
      e.entities[t] && zs.updateOne(e, {
        id: t,
        changes: {
          ...e.entities[t],
          selected: {}
        }
      });
    },
    next(e, { payload: t }) {
      var r;
      const n = e.entities[t];
      if (!n || !n.length) {
        n && (n.focused = null);
        return;
      }
      const { redirect: o = !0 } = n;
      n.direction = "forward", typeof n.focused != "number" && (n.focused = -1);
      do
        n.focused++, o ? n.focused = Math.abs(n.focused) % n.length : n.focused >= n.length && n.focused--;
      while ((r = n.skiped) != null && r[n.focused]);
    },
    back(e, { payload: t }) {
      var r;
      const n = e.entities[t];
      if (!n || !n.length) {
        n && (n.focused = null);
        return;
      }
      const { redirect: o = !0 } = n;
      n.direction = "backward", typeof n.focused != "number" && (n.focused = n.length);
      do
        n.focused--, n.focused < 0 && o ? n.focused = n.length - 1 : n.focused < 0 && (n.focused = 0);
      while ((r = n.skiped) != null && r[n.focused]);
    },
    submit(e, { payload: t }) {
      const n = e.entities[t];
      n && (n.submited = n.focused);
    },
    submitNext(e, { payload: t }) {
      var r;
      const n = e.entities[t];
      if (!n || !n.length) {
        n && (n.submited = null);
        return;
      }
      const { redirect: o = !0 } = n;
      n.direction = "forward", typeof n.submited != "number" && (n.submited = -1);
      do
        n.submited++, o && (n.submited = n.submited % n.length);
      while ((r = n.skiped) != null && r[n.submited]);
    },
    submitBack(e, { payload: t }) {
      var r;
      const n = e.entities[t];
      if (!n || !n.length) {
        n && (n.submited = null);
        return;
      }
      const { redirect: o = !0 } = n;
      n.direction = "backward", typeof n.submited != "number" && (n.submited = n.length);
      do
        n.submited--, o && (n.submited = n.submited % n.length), n.submited < 0 && (n.submited = n.length - 1);
      while ((r = n.skiped) != null && r[n.submited]);
    },
    submitForce(e, { payload: { name: t, index: n = null } }) {
      const o = e.entities[t];
      o && (o.focused = n, o.submited = n);
    },
    escape(e, { payload: t }) {
      const n = e.entities[t];
      n && (n.selected = {}, n.focused = null, n.direction = null, n.submited = null);
    },
    selectAll(e, { payload: t }) {
      const n = e.entities[t];
      if (!n)
        return;
      const o = {};
      Mo(0, Number(n.length) - 1, 1).forEach((r) => {
        o[r] = !0;
      }), n.selected = o, n.direction = null;
    }
  }
}, { hooks: Be, slice: En, entity: zs, init: ui } = U(he);
function li(e) {
  k.dispatch({
    type: `${he.name}/next`,
    payload: e
  });
}
function di(e) {
  return k.dispatch({
    type: `${he.name}/back`,
    payload: e
  });
}
function fi(e) {
  return k.dispatch({
    type: `${he.name}/escape`,
    payload: e
  });
}
function pi(e) {
  k.dispatch({ type: `${he.name}/submit`, payload: e });
}
function mi(e) {
  k.dispatch({ type: `${he.name}/submitNext`, payload: e });
}
function yi(e) {
  k.dispatch({ type: `${he.name}/submitBack`, payload: e });
}
function hi(e, t) {
  const n = Be.getOne(e);
  _.useEffect(() => {
    n || Be.upsert([
      {
        slotId: e,
        length: t.length
      }
    ]);
  }, [n, t]), _.useEffect(() => {
    Be.setOneFeild(e, "length", t.length);
  }, [t]);
}
function gi(e, t, n = "submited") {
  const o = Be.getOneFeild(t, n);
  return _.useMemo(() => typeof o != "number" ? null : e[o] || null, [o, e]);
}
const Bs = {
  data: {
    "preferences/animation.boolean": {
      def: !0,
      desc: "animation in the preferences",
      name: "animation in preferences"
    },
    "preferences/fastScrollKey.enum": {
      config: {
        list: [
          {
            value: "alt"
          },
          {
            value: "control"
          },
          {
            value: "shift"
          }
        ]
      },
      def: "alt",
      desc: "is one between this keys ${state.settings.entities['preferences/fastScrollKey.enum']?.config.list.map(({ value })=> '**' + value + '**').join(' , ')} and when press one of them the scrolling gona be faster",
      name: "speed scrolling meta key"
    },
    "preferences/font.enum": {
      config: {
        list: [
          {
            content: "Outfit",
            value: "Outfit"
          },
          {
            content: "Karla",
            value: "Karla"
          },
          {
            content: "arial",
            value: "arial"
          },
          {
            content: "times new roman",
            value: "times new roman"
          },
          {
            content: "verdana",
            value: "verdana"
          },
          {
            content: "tahoma",
            value: "tahoma"
          },
          {
            content: "georgia",
            value: "georgia"
          },
          {
            content: "courier new",
            value: "courier new"
          },
          {
            content: "lucida console",
            value: "lucida console"
          },
          {
            content: "impact",
            value: "impact"
          },
          {
            content: "comic sans ms",
            value: "comic sans ms"
          },
          {
            content: "system ui",
            value: "system-ui"
          }
        ]
      },
      def: "Outfit",
      desc: "change one between this fonts ${state.settings.entities['preferences/font.enum']?.config.list.map(({ content })=> '`' + content + '`').join(' , ')}",
      name: "change font of app"
    },
    "preferences/toastTime.number": {
      config: {
        max: 10,
        min: 1
      },
      def: 6,
      desc: "is in `second`",
      name: "time of toast done"
    },
    "settings/findBy.enum": {
      config: {
        list: [
          {
            content: "setting id",
            value: "settingId"
          },
          {
            value: "setting"
          },
          {
            value: "name"
          }
        ]
      },
      def: "name",
      desc: "the method of how to find \\`setting\\` using one of this:\n${state.settings.entities['settings/findBy.enum']?.config?.list?.map((item)=> '**' + item + '**' ).join(' or ')}",
      name: "find settings using ?"
    },
    "toast/position.enum": {
      config: {
        list: [
          {
            content: "top",
            value: "top"
          },
          {
            content: "bottom",
            value: "bottom"
          }
        ]
      },
      def: "top",
      desc: "the position of the toast is one between ${state.settings.entities['toast/position.enum']?.config.list.map(({ content })=> '`' + content + '`').join(' , ')}",
      name: "toast position"
    },
    "visibility/configurations.boolean": {
      def: !1,
      desc: "hide or visible the configurations view",
      name: "visibility of configurations view",
      private: !0
    },
    "visibility/header.boolean": {
      def: !0,
      name: "header view visibility"
    },
    "visibility/headerNotifays.boolean": {
      def: !1,
      name: "header panel notifications visibility",
      private: !0
    },
    "visibility/keyPanding/form.boolean": {
      def: !1,
      private: !0
    },
    "visibility/leftSide.boolean": {
      def: !1,
      desc: "viibility of **left side**  component",
      name: "left side visibility"
    },
    "visibility/notifays.boolean": {
      def: !1,
      desc: "visibility of **notification** view",
      name: "notification visibility",
      private: !0
    },
    "visibility/notifays/nots.boolean": {
      def: !1,
      private: !0
    },
    "visibility/rightSide.boolean": {
      def: !1,
      desc: "visibility of **right side** component",
      name: "right side visibility"
    },
    "window/dark.boolean": {
      config: {
        style: "checkbox"
      },
      def: !1,
      desc: "change the theme of the app to dark mode",
      name: "dark mode"
    },
    "window/lang.enum": {
      config: {
        list: [
          {
            content: "arabic",
            value: "ar"
          },
          {
            content: "france",
            value: "fr"
          },
          {
            content: "englich",
            value: "en"
          },
          {
            content: "espaniche",
            value: "es"
          },
          {
            content: "india",
            value: "hi"
          },
          {
            content: "japanese",
            value: "ja"
          },
          {
            content: "russian",
            value: "ru"
          }
        ]
      },
      def: "en",
      desc: "change one between this langs ${state.settings.entities['window/lang.enum']?.config.list.map(({ content })=> '`' + content + '`').join(' , ')}",
      name: "change lang of app"
    },
    "preferences/scrollAnimation.boolean.boolean": {
      def: !1,
      desc: "scrolling with animation",
      name: "scroll animation"
    },
    "visibility/keyboard.boolean": {
      name: "Keyboard Visibility",
      desc: "The Visibility Of Keyboard Screen",
      def: !1
    }
  }
}, { data: Us } = Bs, Ys = {
  name: "settings",
  id: "settingId",
  default(e, { def: t }) {
    return {
      private: !1,
      deperacted: !1,
      config: {},
      value: t
    };
  },
  actions: {
    toggle(e, { payload: t }) {
      const n = e.entities[t];
      n && (n.value = !n.value);
    }
  },
  data: Us
}, { hooks: ee, slice: Sn, init: vi, entitySelect: bi } = U(Ys), Ks = {
  name: "positions",
  id: "positionId",
  default: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    x: 0,
    y: 0,
    width: 0,
    height: 0
  }
}, { entity: wi, slice: _n, hooks: Ei, entitySelect: Si, init: _i } = U(Ks), Hs = {
  data: {}
}, { data: Ws } = Hs, Gs = {
  id: "id",
  name: "notifications",
  default: () => ({
    id: W(),
    desc: void 0,
    removable: !0,
    status: "idle",
    showDesc: !1,
    type: "info",
    buttons: []
  }),
  data: Ws
}, { hooks: Me, init: Oi, select: Ci, slice: On, entity: Ti } = U(Gs);
function vo() {
  ee.setOneFeild("visibility/notifays.boolean", "value", !0), ee.setOneFeild("visibility/notifays/nots.boolean", "value", !0);
}
function bo() {
  ee.setOneFeild("visibility/notifays.boolean", "value", !1), ee.setOneFeild("visibility/notifays/nots.boolean", "value", !1);
}
async function Ni(e, t = {}) {
  const n = Bn(t, {
    open: !0,
    close: !0,
    time: 2e3
  });
  n != null && n.open && vo();
  const o = {
    id: W(),
    title: " - ",
    ...e
  };
  Me.upsert([o]), await Un(n.time), Me.remove([o.id]), n != null && n.close && bo();
}
async function ki(e, t) {
  const n = t();
  return n instanceof Promise ? new Promise(async (o, r) => {
    vo(), Me.upsert([e]), n.then(o).catch(r).finally(() => {
      Me.remove([e.id]), bo();
    });
  }) : n;
}
const qs = {
  id: "logId",
  name: "logs",
  data: {},
  default: () => ({
    logId: W(10),
    desc: "",
    type: "INFO",
    category: "window",
    showDesc: !1,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  })
}, { entity: xi, slice: Cn, init: Ai, hooks: Mi } = U(qs), Xs = {
  data: {
    "ar->add": {
      value: "إضافة"
    },
    "ar->calculate-zakat": {
      value: "احسب الزكاة"
    },
    "ar->change": {
      value: "التغيير"
    },
    "ar->Choise-Image": {
      value: "اختيار الصورة"
    },
    "ar->clear": {
      value: "واضح"
    },
    "ar->clear-all": {
      value: "امسح الكل"
    },
    "ar->close-session": {
      value: "إغلاق الجلسة"
    },
    "ar->codes": {
      value: "رموز"
    },
    "ar->colors": {
      value: "الوان"
    },
    "ar->commands": {
      value: "الأوامر"
    },
    "ar->count": {
      value: "عد"
    },
    "ar->create-at": {
      value: "أنشئ في"
    },
    "ar->created-at": {
      value: "أنشئ في"
    },
    "ar->Data-Base": {
      value: "قاعدة بيانات"
    },
    "ar->desc": {
      value: "الوصف"
    },
    "ar->description": {
      value: "الوصف"
    },
    "ar->deshboard": {
      value: "لوحة القيادة"
    },
    "ar->done": {
      value: "تم"
    },
    "ar->done-at": {
      value: "تمت في"
    },
    "ar->email": {
      value: "البريد الإلكتروني"
    },
    "ar->facebook-not-defined": {
      value: "facebook غير معرفة"
    },
    "ar->feedbacks-and-about": {
      value: "ردود الفعل وحول"
    },
    "ar->for-create-one": {
      value: "لطلب واحدة"
    },
    "ar->found": {
      value: "مُستَخرَج"
    },
    "ar->fuateurs": {
      value: "المتابعون"
    },
    "ar->full-name": {
      value: "الاسم الكامل"
    },
    "ar->get-start": {
      value: "ابدأ"
    },
    "ar->home": {
      value: "الصفحة الرئيسية"
    },
    "ar->i'm-give-the-author": {
      value: "أنا أعطي المؤلف"
    },
    "ar->icons": {
      value: "الأيقونات"
    },
    "ar->id": {
      value: "هوية"
    },
    "ar->keyboard-shortcuts": {
      value: "اختصارات لوحة المفاتيح"
    },
    "ar->keyboardShortcuts": {
      value: "اختصارات لوحة المفاتيح"
    },
    "ar->load-extra-files": {
      value: "تحميل ملفات إضافية"
    },
    "ar->loading": {
      value: "تحميل"
    },
    "ar->log-out": {
      value: "تسجيل الخروج"
    },
    "ar->name": {
      value: "الاسم"
    },
    "ar->no-base-url-choised": {
      value: "لا يوجد اختيارات لقاعدة URL"
    },
    "ar->no-image": {
      value: "لا توجد صورة"
    },
    "ar->no-markdown-content": {
      value: "لا يوجد محتوى تخفيض"
    },
    "ar->no-name-defined": {
      value: "لم يُحدد أي اسم"
    },
    "ar->no-result": {
      value: "لا يوجد نتيجة"
    },
    "ar->no-suggestions": {
      value: "لا يوجد اقتراحات"
    },
    "ar->notifications": {
      value: "الإشعارات"
    },
    "ar->open-exsiting-store": {
      value: "فتح متجر موجود"
    },
    "ar->open-new-store": {
      value: "فتح مخزن جديد"
    },
    "ar->open-notifications-view": {
      value: "عرض إشعارات مفتوحة"
    },
    "ar->or-press": {
      value: "أو اضغط"
    },
    "ar->pannel-save-view": {
      value: "حفظ عرض لوحة"
    },
    "ar->partage-store": {
      value: "مخزن المشاركة"
    },
    "ar->pay": {
      value: "ادفع"
    },
    "ar->payment": {
      value: "دفع"
    },
    "ar->payment-": {
      value: "الدفع"
    },
    "ar->payments": {
      value: "المدفوعات"
    },
    "ar->press-?-for-help": {
      value: "اضغط؟ للمساعدة"
    },
    "ar->print": {
      value: "طباعة"
    },
    "ar->privacy": {
      value: "الخصوصية"
    },
    "ar->private": {
      value: "خاص"
    },
    "ar->public": {
      value: "عام"
    },
    "ar->reload-window": {
      value: "إعادة تحميل النافذة"
    },
    "ar->reset": {
      value: "تعيين القيم الافتراضية"
    },
    "ar->reset-base-url": {
      value: "إعادة تعيين عنوان URL الأساسي"
    },
    "ar->save-changes": {
      value: "حفظ التغييرات"
    },
    "ar->save-pannel": {
      value: "حفظ اللوحة"
    },
    "ar->search-user-in-list": {
      value: "البحث عن المستخدم في القائمة"
    },
    "ar->see-your-store": {
      value: "انظر إلى متجرك"
    },
    "ar->sigin": {
      value: "تسجيل الدخول"
    },
    "ar->static": {
      value: "ساكن"
    },
    "ar->status": {
      value: "الحالة"
    },
    "ar->submit": {
      value: "إرسال"
    },
    "ar->system Configurations": {
      value: "تكوينات النظام"
    },
    "ar->System-Configurations": {
      value: "تكوينات النظام"
    },
    "ar->test": {
      value: "اختبار"
    },
    "ar->the-return": {
      value: "العودة"
    },
    "ar->toggle-camera": {
      value: "تنقل الكاميرا"
    },
    "ar->toggle-fullscreen": {
      value: "التبديل إلى ملء الشاشة"
    },
    "ar->toggle-to-dark": {
      value: "الانتقال إلى الوضع الداكن"
    },
    "ar->toggle-to-light": {
      value: "التبديل إلى الإضاءة"
    },
    "ar->un-payments": {
      value: "مدفوعات الأمم المتحدة"
    },
    "ar->update": {
      value: "تحديث"
    },
    "ar->upload": {
      value: "تحميل"
    },
    "ar->user": {
      value: "مستخدم"
    },
    "ar->view-profile": {
      value: "عرض الملف الشخصي"
    },
    "ar->view-settings": {
      value: "إعدادات العرض"
    },
    "ar->visited": {
      value: "تمت الزيارة"
    },
    "ar->welcome": {
      value: "مرحباً"
    },
    "ar->win-detection": {
      value: "كشف الانتصار"
    },
    "ar->write-code-and-start-your-app": {
      value: "اكتب رمز وابدأ تطبيقك"
    },
    "ar->your-starts": {
      value: "تقييم"
    },
    "ar->مستخدم": {
      value: "مستعمل"
    },
    "fr->add": {
      value: "ajouter"
    },
    "fr->calculate-zakat": {
      value: "calculer la zakat"
    },
    "fr->clear": {
      value: "clair"
    },
    "fr->clear-all": {
      value: "tout effacer"
    },
    "fr->close-session": {
      value: "fermer la session"
    },
    "fr->codes": {
      value: "codes"
    },
    "fr->colors": {
      value: "couleurs"
    },
    "fr->count": {
      value: "compter"
    },
    "fr->create-at": {
      value: "créer à"
    },
    "fr->created-at": {
      value: "créé à"
    },
    "fr->ctrl": {
      value: "ctrl"
    },
    "fr->desc": {
      value: "desc"
    },
    "fr->deshboard": {
      value: "Tableau de bord"
    },
    "fr->done-at": {
      value: "fait à"
    },
    "fr->email": {
      value: "courriel"
    },
    "fr->facebook-not-defined": {
      value: "facebook non défini"
    },
    "fr->feedbacks-and-about": {
      value: "retours et à propos"
    },
    "fr->for-create-one": {
      value: "pour en créer une"
    },
    "fr->found": {
      value: "trouvé"
    },
    "fr->fuateurs": {
      value: "followers"
    },
    "fr->full-name": {
      value: "Nom complet"
    },
    "fr->get-start": {
      value: "Commencer"
    },
    "fr->home": {
      value: "Accueil"
    },
    "fr->i'm-give-the-author": {
      value: "Je donne à l'auteur"
    },
    "fr->icons": {
      value: "icônes"
    },
    "fr->id": {
      value: "idientifiant"
    },
    "fr->keyboard-shortcuts": {
      value: "raccourcis clavier"
    },
    "fr->keyboardShortcuts": {
      value: "raccourcis clavier"
    },
    "fr->load-extra-files": {
      value: "charger des fichiers supplémentaires"
    },
    "fr->loading": {
      value: "Chargement"
    },
    "fr->log-out": {
      value: "se déconnecter"
    },
    "fr->name": {
      value: "Nom"
    },
    "fr->no-base-url-choised": {
      value: "aucune URL de base choisie"
    },
    "fr->no-image": {
      value: "pas d’image"
    },
    "fr->no-image-selected": {
      value: "Aucune image sélectionnée"
    },
    "fr->no-markdown-content": {
      value: "pas de contenu markdown"
    },
    "fr->no-name-defined": {
      value: "aucun nom défini"
    },
    "fr->no-result": {
      value: "aucun résultat"
    },
    "fr->no-suggestions": {
      value: "pas de suggestions"
    },
    "fr->notifications": {
      value: "notifications"
    },
    "fr->open-exsiting-store": {
      value: "Ouvrir un magasin existant"
    },
    "fr->open-new-store": {
      value: "ouvrir un nouveau magasin"
    },
    "fr->open-notifications-view": {
      value: "ouvrir l'affichage des notifications"
    },
    "fr->or-press": {
      value: "ou appuyez"
    },
    "fr->pannel-save-view": {
      value: "vue Enreg. tableau"
    },
    "fr->partage-store": {
      value: "partage de magasin"
    },
    "fr->pay": {
      value: "paiement"
    },
    "fr->payment": {
      value: "paiement"
    },
    "fr->payment-": {
      value: "paiement"
    },
    "fr->payments": {
      value: "paiements"
    },
    "fr->permession-for-access-the Cash Stock Management (capabilitéToAccessAllStoreForAuthor)": {
      value: "demande d'accès au module Gestion de Stocks en caisse (capacité à accéder à tous les magasins pour l'auteur)"
    },
    "fr->permession-for-access-the-Cash-Stock-Management-(capabilité-to-access-all-store-for-author)": {
      value: "autorisation d'accès à la Gestion des stocks de trésorerie (capacité d'accès à tous les magasins pour l'auteur)"
    },
    "fr->press-?-for-help": {
      value: "appuyez sur ? pour obtenir de l'aide"
    },
    "fr->privacy": {
      value: "confidentialité"
    },
    "fr->private": {
      value: "privé"
    },
    "fr->public": {
      value: "publique"
    },
    "fr->reload-window": {
      value: "recharger la fenêtre"
    },
    "fr->reset": {
      value: "réinitialiser"
    },
    "fr->reset-base-url": {
      value: "réinitialiser l'URL de base"
    },
    "fr->save-changes": {
      value: "enregistrer les modifications"
    },
    "fr->search-keyboard-shortcuts-in-list": {
      value: "rechercher des raccourcis clavier dans la liste"
    },
    "fr->search-user-in-list": {
      value: "recherche utilisateur dans la liste"
    },
    "fr->see-your-store": {
      value: "voir votre boutique"
    },
    "fr->shift": {
      value: "Maj"
    },
    "fr->static": {
      value: "statique"
    },
    "fr->status": {
      value: "statut"
    },
    "fr->submit": {
      value: "envoyer"
    },
    "fr->test": {
      value: "test"
    },
    "fr->the-return": {
      value: "le retour"
    },
    "fr->toggle-fullscreen": {
      value: "passer en plein écran"
    },
    "fr->toggle-to-dark": {
      value: "basculer vers noir"
    },
    "fr->toggle-to-light": {
      value: "passer en clair"
    },
    "fr->un-payments": {
      value: "paiements en un"
    },
    "fr->update": {
      value: "mettre à jour"
    },
    "fr->user": {
      value: "utilisateur"
    },
    "fr->utilisateur": {
      value: "utilisateur"
    },
    "fr->view-settings": {
      value: "Afficher les paramètres"
    },
    "fr->visited": {
      value: "visité"
    },
    "fr->welcome": {
      value: "bienvenue"
    },
    "fr->win-detection": {
      value: "détection de la victoire"
    },
    "fr->write-code-and-start-your-app": {
      value: "écrivez le code pour lancer votre application"
    },
    "fr->your-starts": {
      value: "vos débuts"
    }
  }
}, { data: Qs } = Xs, Js = {
  id: "langId",
  name: "langs",
  data: Qs
}, Ri = () => Zs.setWriteStatus("idle"), { init: Ii, hooks: Zs, entity: Di, slice: Tn } = U(Js), ea = {
  data: {
    "camera-take": {
      commands: [
        {
          payload: ["camera-take"],
          type: "actions/exec"
        }
      ]
    },
    "colors-list-back": {
      commands: [
        {
          payload: "colors-list",
          type: "slot/back"
        }
      ]
    },
    "colors-list-next": {
      commands: [
        {
          payload: "colors-list",
          type: "slot/next"
        }
      ]
    },
    "colors-list-submit": {
      commands: [
        {
          payload: "colors-list",
          type: "slot/submit"
        }
      ]
    },
    "commands.back": {
      commands: [
        {
          payload: "cmds/list",
          type: "slot/back"
        }
      ],
      label: "commands : back"
    },
    "commands.close": {
      commands: [
        {
          payload: {
            direction: "commandId",
            force: !0,
            value: null
          },
          type: "object/setValue"
        }
      ],
      label: "view : close commands"
    },
    "commands.next": {
      commands: [
        {
          payload: "cmds/list",
          type: "slot/next"
        }
      ],
      label: "commands : next"
    },
    "commands.open": {
      commands: [
        {
          payload: {
            direction: "commandId",
            force: !0,
            value: "commands"
          },
          type: "object/setValue"
        }
      ],
      label: "view : open commands"
    },
    "commands.submit": {
      commands: [
        {
          payload: "cmds/list",
          type: "slot/submit"
        }
      ],
      label: "commands : run"
    },
    "configurations.back": {
      commands: [
        {
          payload: "configurations",
          type: "slot/back"
        }
      ],
      label: "settings : back"
    },
    "configurations.next": {
      commands: [
        {
          payload: "configurations",
          type: "slot/next"
        }
      ],
      label: "settings : next"
    },
    "configurations.settings.layout.submit": {
      commands: [
        {
          payload: "settings.layout.tools",
          type: "slot/submit"
        }
      ],
      label: "settings layout : change"
    },
    "configurations.settings.layouts.next": {
      commands: [
        {
          payload: "settings.layout.tools",
          type: "slot/next"
        }
      ],
      label: "settings layout : next"
    },
    "configurations.settings.layouts.previous": {
      commands: [
        {
          payload: "settings.layout.tools",
          type: "slot/back"
        }
      ],
      label: "settings layout : previous"
    },
    "configurations.submit": {
      commands: [
        {
          payload: "configurations",
          type: "slot/submit"
        }
      ],
      label: "settings : submit"
    },
    "defaultCommand.ignore": {
      commands: [],
      private: !0
    },
    "dialog.clickOnButton": {
      commands: [
        {
          payload: "dialog-list",
          type: "slot/submit"
        }
      ],
      label: "Dialog : Click And Submit"
    },
    "dialog.escape": {
      commands: [
        {
          payload: ["dialog.cancel"],
          type: "actions/exec"
        }
      ],
      label: "Dialog : Escape"
    },
    "dialog.goToNextButton": {
      commands: [
        {
          payload: "dialog-list",
          type: "slot/next"
        }
      ],
      label: "Dialog : Next Button"
    },
    "dialog.goToPreviousButton": {
      commands: [
        {
          payload: "dialog-list",
          type: "slot/back"
        }
      ],
      label: "Dialog : Previous Button"
    },
    "feedback/add": {
      commands: [
        {
          payload: ["feedback/add"],
          type: "actions/exec"
        }
      ],
      label: "help : add new feedback"
    },
    "header.toggle": {
      commands: [
        {
          payload: "visibility/header.boolean",
          type: "settings/toggle"
        }
      ],
      label: "view : toggle header"
    },
    "headerNotifays.toggleExpand": {
      commands: [
        {
          payload: "visibility/headerNotifays.boolean",
          type: "settings/toggle"
        }
      ],
      label: "view : toggle header notifications"
    },
    "input.addLineBellow": {
      commands: [
        {
          payload: ["input.addLineBellow"],
          type: "actions/exec"
        }
      ],
      label: "input : add line bellow"
    },
    "input.completeWord": {
      commands: [
        {
          payload: ["input.completeWord"],
          type: "actions/exec"
        }
      ],
      label: "input : complete word"
    },
    "input.selectLine": {
      commands: [
        {
          payload: ["input.selectLine"],
          type: "actions/exec"
        }
      ],
      label: "input : select line"
    },
    "input.tab": {
      commands: [
        {
          payload: ["input.tab"],
          type: "actions/exec"
        }
      ],
      label: "input : tab space"
    },
    "keyboard/update": {
      commands: [
        {
          payload: ["keyboard/update"],
          type: "actions/exec"
        }
      ]
    },
    "keyboardShortcuts.focusNextKeyPanding": {
      commands: [
        {
          payload: "keyboardShortcuts",
          type: "slot/next"
        }
      ],
      label: "keyboard shortcuts : focus next"
    },
    "keyboardShortcuts.focusPreviousKeyPanding": {
      commands: [
        {
          payload: "keyboardShortcuts",
          type: "slot/back"
        }
      ],
      label: "keyboard shortcuts : focus previous"
    },
    "keyboardShortcuts.submitCurrentKeyPanding": {
      commands: [
        {
          payload: "keyboardShortcuts",
          type: "slot/submit"
        }
      ],
      label: "keyboard shortcuts : submit current"
    },
    "menu.back": {
      commands: [
        {
          payload: "menu-list",
          type: "slot/back"
        }
      ]
    },
    "menu.escape": {
      commands: [
        {
          payload: {
            direction: "menu.id",
            force: !0,
            value: null
          },
          type: "object/setValue"
        }
      ]
    },
    "menu.next": {
      commands: [
        {
          payload: "menu-list",
          type: "slot/next"
        }
      ]
    },
    "menu.submit": {
      commands: [
        {
          payload: "menu-list",
          type: "slot/submit"
        }
      ]
    },
    "notifays.toggleExpandNotifay": {
      commands: [
        {
          payload: ["toggleExpandNotifay", null],
          type: "actions/exec"
        }
      ],
      label: "notifications : toggle expand notifications"
    },
    "notification.close": {
      commands: [
        {
          payload: [
            {
              changes: {
                value: !1
              },
              id: "visibility/notifays.boolean"
            }
          ],
          type: "settings/update"
        }
      ],
      label: "view : close notifications"
    },
    "notification.closeAndExpandLess": {
      commands: [
        "notification.close",
        {
          payload: [
            {
              changes: {
                value: !1
              },
              id: "visibility/notifays/notes.boolean"
            }
          ],
          type: "settings/update"
        }
      ],
      label: "view : close notifications and expand less"
    },
    "notification.deleteFocus": {
      commands: [
        {
          payload: ["notification.deleteFocus"],
          type: "actions/exec"
        }
      ],
      label: "notifications : delete the focused notification"
    },
    "notification.focusNext": {
      commands: [
        {
          payload: "notification",
          type: "slot/next"
        }
      ],
      label: "notifications : go next"
    },
    "notification.focusPrevious": {
      commands: [
        {
          payload: "notification",
          type: "slot/back"
        }
      ],
      label: "notifications: go back"
    },
    "notification.open": {
      commands: [
        {
          payload: [
            {
              changes: {
                value: !0
              },
              id: "visibility/notifays.boolean"
            }
          ],
          type: "settings/update"
        }
      ],
      label: "notifications : open"
    },
    "notification.openAndExpandMoreAndFocus": {
      commands: [
        "notification.open",
        {
          payload: [
            {
              changes: {
                value: !0
              },
              id: "visibility/notifays/notes.boolean"
            }
          ],
          type: "settings/update"
        },
        {
          payload: ["focus", "notifications"],
          type: "actions/exec"
        }
      ],
      label: "notifications : open and expand more and focus"
    },
    "notification.submitCurrent": {
      commands: [
        {
          payload: "notification",
          type: "slot/submit"
        }
      ],
      label: "notifications : submit current"
    },
    "notification.toggle": {
      commands: [
        {
          payload: "visibility/notifays.boolean",
          type: "settings/toggle"
        }
      ],
      label: "view : toggle notifications"
    },
    "search.history.clear": {
      commands: [
        {
          payload: ["search.history.clear"],
          type: "actions/exec"
        }
      ],
      label: "search : clear history"
    },
    "settings.colors.show": {
      commands: [
        {
          payload: [
            {
              changes: {
                focused: "colors"
              },
              id: "settings"
            }
          ],
          type: "views/update"
        }
      ]
    },
    "settings.focusNext": {
      commands: [
        {
          payload: "settings",
          type: "slot/next"
        }
      ]
    },
    "settings.focusPrevious": {
      commands: [
        {
          payload: "settings",
          type: "slot/back"
        }
      ]
    },
    "settings.icons.back": {
      commands: [
        {
          payload: "icons-list",
          type: "slot/back"
        }
      ]
    },
    "settings.icons.next": {
      commands: [
        {
          payload: "icons-list",
          type: "slot/next"
        }
      ]
    },
    "settings.icons.show": {
      commands: [
        {
          payload: [
            {
              changes: {
                focused: "icons"
              },
              id: "settings"
            }
          ],
          type: "views/update"
        }
      ]
    },
    "settings.icons.submit": {
      commands: [
        {
          payload: "icons-list",
          type: "slot/submit"
        }
      ]
    },
    "settings.keyboardShortcuts.show": {
      commands: [
        {
          payload: [
            {
              changes: {
                focused: "keyboardShortcuts"
              },
              id: "settings"
            }
          ],
          type: "views/update"
        }
      ]
    },
    "settings.tree.expandLess": {
      commands: [
        {
          payload: "setting-tree-layout",
          type: "tree/expandLess"
        }
      ]
    },
    "settings.tree.expandMore": {
      commands: [
        {
          payload: "setting-tree-layout",
          type: "tree/expandMore"
        }
      ]
    },
    "settings.tree.toggleExpand": {
      commands: [
        {
          payload: "setting-tree-layout",
          type: "tree/toggleExpand"
        }
      ]
    },
    "settings.user.show": {
      commands: [
        {
          payload: [
            {
              changes: {
                focused: "user"
              },
              id: "settings"
            }
          ],
          type: "views/update"
        }
      ]
    },
    "show.submit.setting": {
      commands: [
        {
          payload: ["showSubmitSetting", null],
          type: "actions/exec"
        }
      ]
    },
    "string.cancel": {
      commands: [
        {
          payload: ["string.cancel"],
          type: "actions/exec"
        }
      ],
      private: !0
    },
    "string.change": {
      commands: [
        {
          payload: ["string.change"],
          type: "actions/exec"
        }
      ],
      private: !0
    },
    "tools.tip.click": {
      commands: [
        {
          payload: ["tip.click"],
          type: "actions/exec"
        }
      ]
    },
    "view.leftSide.close": {
      commands: [
        {
          payload: [
            {
              changes: {
                value: !1
              },
              id: "visibility/leftSide.boolean"
            }
          ],
          type: "settings/update"
        }
      ],
      label: "leftSide : close"
    },
    "view.leftSide.open": {
      commands: [
        {
          payload: [
            {
              changes: {
                value: !0
              },
              id: "visibility/leftSide.boolean"
            }
          ],
          type: "settings/update"
        }
      ]
    },
    "view.leftSide.toggle": {
      commands: [
        {
          payload: "visibility/leftSide.boolean",
          type: "settings/toggle"
        }
      ]
    },
    "view.rightSide.close": {
      commands: [
        {
          payload: [
            {
              changes: {
                value: !1
              },
              id: "visibility/rightSide.boolean"
            }
          ],
          type: "settings/update"
        }
      ]
    },
    "view.rightSide.open": {
      commands: [
        {
          payload: [
            {
              changes: {
                value: !0
              },
              id: "visibility/rightSide.boolean"
            }
          ],
          type: "settings/update"
        }
      ]
    },
    "view.rightSide.toggle": {
      commands: [
        {
          payload: "visibility/rightSide.boolean",
          type: "settings/toggle"
        }
      ]
    },
    "view.settings.hide": {
      commands: [
        {
          payload: [
            {
              changes: {
                value: !1
              },
              id: "visibility/configurations.boolean"
            }
          ],
          type: "settings/update"
        }
      ],
      label: "view : hide settings view"
    },
    "view.settings.show": {
      commands: [
        {
          payload: [
            {
              changes: {
                value: !0
              },
              id: "visibility/configurations.boolean"
            }
          ],
          type: "settings/update"
        },
        {
          payload: [
            {
              changes: {
                value: ""
              },
              id: "findConfigurations-local"
            }
          ],
          type: "fields/update"
        },
        {
          payload: ["focus", "findConfigurations-local"],
          type: "actions/exec"
        }
      ],
      label: "view : show settings view"
    },
    "view.settings.update.hide": {
      commands: [
        {
          payload: {
            direction: "view.settings",
            force: !0,
            value: null
          },
          type: "object/setValue"
        },
        {
          payload: ["focus", "findConfigurations-local"],
          type: "actions/exec"
        }
      ],
      label: "view : hide settings update view"
    },
    "window.toggleMode": {
      commands: [
        {
          payload: "window/dark.boolean",
          type: "settings/toggle"
        }
      ],
      label: "window : toggle between (light/dark) mode"
    }
  }
}, { data: ta } = ea, na = "commands";
function wo(e, t = k.getState()) {
  const { [na]: n } = t, o = [], r = n.entities[e], s = r == null ? void 0 : r.commands;
  return r != null && r.blocked ? [] : (s == null || s.forEach((i) => {
    typeof i == "string" ? o.push(...wo(i)) : typeof i != "number" && o.push(i);
  }), o);
}
function oa(e, t = k.getState()) {
  return !!(t != null && t.commands.entities[e]);
}
async function ra(e, t = k.getState()) {
  const n = e.toString();
  Q.inf("start invoke command : ", n), t = t || k.getState();
  const o = wo(e, t), r = new qe();
  for (let s = 0; s < o.length; s++) {
    const i = o[s];
    typeof i == "number" ? await r.start(i) : k.dispatch(i);
  }
  Q.succ("end invoking command : ", n);
}
const sa = {
  id: "commandId",
  name: "commands",
  data: ta,
  default: (e, t) => {
    if (!t.commandId)
      return {};
    const [n = "", ...o] = t.commandId.split(".");
    return {
      label: `${Yt(n, "camel", "normal")} : ${o.map((s) => Yt(s, void 0, "normal")).join(" ")}`
    };
  }
}, { hooks: aa, slice: Nn, entitySelect: Pi, init: $i } = U(sa), ia = {
  data: [
    {
      command: "dialog.goToNextButton",
      value: "arrowdown",
      when: "state.object.data.dialog.id"
    },
    {
      command: "dialog.goToNextButton",
      value: "arrowright",
      when: "state.object.data.dialog.id"
    },
    {
      command: "dialog.goToPreviousButton",
      value: "arrowleft",
      when: "state.object.data.dialog.id"
    },
    {
      command: "dialog.goToPreviousButton",
      value: "arrowup",
      when: "state.object.data.dialog.id"
    },
    {
      command: "dialog.escape",
      value: "escape",
      when: "state.object.data.dialog.id"
    },
    {
      command: "dialog.clickOnButton",
      value: "enter",
      when: "state.object.data.dialog.id"
    },
    {
      command: "dialog.clickOnButton",
      value: "space",
      when: "state.object.data.dialog.id"
    },
    {
      command: "settings.colors.show",
      value: "control+shift+c",
      when: "state.views.entities.settings.focused == 'colors'"
    },
    {
      command: "menu.next",
      when: "state.object.data.menu.id",
      value: "arrowdown"
    },
    {
      command: "menu.back",
      when: "state.object.data.menu.id",
      value: "arrowup"
    },
    {
      command: "menu.submit",
      when: "state.object.data.menu.id",
      value: "enter"
    },
    {
      command: "menu.escape",
      when: "state.object.data.menu.id",
      value: "escape"
    },
    {
      value: "tab",
      command: "input.completeWord",
      when: "state.object.data.input.focusedHasProposition",
      type: "up"
    },
    {
      value: "tab",
      command: "defaultCommand.ignore",
      when: "state.object.data.input.focusedHasProposition"
    },
    {
      value: "tab",
      command: "input.tab",
      when: "state.object.data.input.supportTab"
    },
    {
      value: "control+l",
      command: "input.selectLine",
      when: "focused"
    },
    {
      value: "shift+alt+arrowdown",
      command: "input.addLineBellow",
      when: "focused"
    },
    {
      command: "string.change",
      when: "focused && state.fields.ids.includes(focused + ':input')",
      value: "enter"
    },
    {
      command: "string.cancel",
      when: "focused && state.fields.ids.includes(focused + ':input')",
      value: "escape"
    },
    {
      when: "focused == 'feedback' && state.fields.entities['feedback']?.value",
      command: "feedback/add",
      value: "control+enter",
      private: !0
    },
    {
      command: "commands.next",
      when: "focused == 'cmds/list' || focused == 'findCommand'",
      value: "arrowdown"
    },
    {
      command: "commands.back",
      when: "focused == 'cmds/list' || focused == 'findCommand'",
      value: "arrowup"
    },
    {
      command: "commands.submit",
      when: "focused == 'cmds/list' || focused == 'findCommand'",
      value: "enter"
    },
    {
      repeation: !1,
      command: "activity.focus",
      value: "alt",
      when: "focused != 'activity'"
    },
    {
      command: "activity.views.back",
      value: "arrowup",
      when: "focused == 'activity'"
    },
    {
      command: "activity.views.back",
      value: "arrowleft",
      when: "focused == 'activity'"
    },
    {
      command: "activity.views.next",
      value: "arrowdown",
      when: "focused == 'activity'"
    },
    {
      command: "activity.views.next",
      value: "arrowright",
      when: "focused == 'activity'"
    },
    {
      repeation: !1,
      command: "activity.views.submit",
      value: "enter",
      when: "focused == 'activity'"
    },
    {
      command: "commands.open",
      when: "focused != 'findCommand' || !state.object.data.commandId",
      value: "control+shift+p"
    },
    {
      repeation: !1,
      command: "notification.openAndExpandMoreAndFocus",
      when: "focused != 'notifications'",
      value: "shift+alt+n"
    },
    {
      command: "view.activity.toggle",
      value: "control+alt+a"
    },
    {
      command: "view.leftSide.toggle",
      value: "control+b"
    },
    {
      command: "view.rightSide.toggle",
      value: "control+alt+b"
    },
    {
      command: "view.settings.show",
      when: "focused != 'findConfigurations-local' || !state.settings.entities['visibility/configurations.boolean']?.value",
      value: "control+,"
    },
    {
      repeation: !1,
      command: "settings.keyboardShortcuts.show",
      when: "state.settings.entities['visibility/configurations.boolean']?.value",
      value: "control+k"
    },
    {
      repeation: !1,
      command: "settings.user.show",
      when: "state.settings.entities['visibility/configurations.boolean']?.value",
      value: "control+u"
    },
    {
      repeation: !1,
      command: "settings.icons.show",
      when: "state.settings.entities['visibility/configurations.boolean']?.value",
      value: "control+i"
    },
    {
      command: "layout.zoom.in",
      value: "control+="
    },
    {
      command: "layout.zoom.in",
      value: "control+plus"
    },
    {
      command: "layout.zoom.out",
      value: "control+-"
    },
    {
      command: "layout.zoom.reset",
      value: "control+0"
    },
    {
      repeation: !1,
      command: "keyboardShortcuts.submitCurrentKeyPanding",
      value: "enter",
      when: "['findConfigurations-local','keyboardShortcuts'].includes(focused) && state.views.entities.settings.focused == 'keyboardShortcuts'"
    },
    {
      command: "keyboard/update",
      value: "f2",
      when: "['findConfigurations-local','keyboardShortcuts'].includes(focused) && state.views.entities.settings.focused == 'keyboardShortcuts'"
    },
    {
      command: "keyboardShortcuts.focusNextKeyPanding",
      value: "arrowdown",
      when: "['findConfigurations-local','keyboardShortcuts'].includes(focused) && state.views.entities.settings.focused == 'keyboardShortcuts'"
    },
    {
      command: "keyboardShortcuts.focusPreviousKeyPanding",
      value: "arrowup",
      when: "['findConfigurations-local','keyboardShortcuts'].includes(focused) && state.views.entities.settings.focused == 'keyboardShortcuts'"
    },
    {
      value: "arrowdown",
      command: "colors-list-next",
      when: "['findConfigurations-local','color-list'].includes(focused) && state.views.entities.settings.focused == 'colors'"
    },
    {
      value: "arrowup",
      command: "colors-list-back",
      when: "['findConfigurations-local','color-list'].includes(focused) && state.views.entities.settings.focused == 'colors'"
    },
    {
      value: "enter",
      command: "colors-list-submit",
      when: "['findConfigurations-local','color-list'].includes(focused) && state.views.entities.settings.focused == 'colors'"
    },
    {
      command: "savePanel.open",
      value: "control+s",
      when: "focused != 'savePanelView'"
    },
    {
      command: "savePanel.next",
      value: "arrowdown",
      when: "focused == 'savePanelView'"
    },
    {
      command: "savePanel.back",
      value: "arrowup",
      when: "focused == 'savePanelView'"
    },
    {
      command: "savePanel.close",
      value: "backspace",
      when: "state.settings.entities['visibility/savePanel.boolean']?.value"
    },
    {
      command: "savePanel.toggleCheckedSubmit",
      value: "space",
      when: "focused == 'savePanelView'"
    },
    {
      command: "savePanel.toggleCheckedSubmit",
      value: "enter",
      when: "focused == 'savePanelView'"
    },
    {
      command: "configurations.next",
      value: "arrowdown",
      when: "focused == 'findConfigurations-local' && state.views.entities.settings.focused == 'user'"
    },
    {
      command: "configurations.back",
      value: "arrowup",
      when: "focused == 'findConfigurations-local' && state.views.entities.settings.focused == 'user'"
    },
    {
      repeation: !1,
      command: "configurations.submit",
      value: "enter",
      when: "focused == 'findConfigurations-local' && state.views.entities.settings.focused == 'user'"
    },
    {
      command: "setup.nextPage",
      when: "!state.object.data.setup.user.inited && (!focused || ['setup-controller','setup.btn.previous','setup.btn.next'].includes(focused))",
      value: "arrowright"
    },
    {
      command: "setup.previousPage",
      when: "!state.object.data.setup.user.inited && (!focused || ['setup-controller','setup.btn.previous','setup.btn.next'].includes(focused))",
      value: "arrowleft"
    },
    {
      command: "savePanel.save",
      when: "state.settings.entities['visibility/savePanel.boolean']?.value",
      value: "control+enter"
    },
    {
      command: "notification.submitCurrent",
      when: "focused == 'notifications'",
      value: "enter"
    },
    {
      command: "notification.focusNext",
      when: "focused == 'notifications'",
      value: "arrowdown"
    },
    {
      command: "notification.focusPrevious",
      when: "focused == 'notifications'",
      value: "arrowup"
    },
    {
      command: "notification.deleteFocus",
      when: "focused == 'notifications'",
      value: "delete"
    },
    {
      command: "notifays.toggleExpandNotifay",
      when: "focused == 'notifications'",
      value: "space"
    },
    {
      command: "enum/next",
      value: "arrowdown",
      when: "state.object.data.enum.focused"
    },
    {
      command: "enum/next",
      value: "arrowright",
      when: "state.object.data.enum.focused"
    },
    {
      command: "enum/back",
      value: "arrowleft",
      when: "state.object.data.enum.focused"
    },
    {
      command: "enum/back",
      value: "arrowup",
      when: "state.object.data.enum.focused"
    },
    {
      repeation: !1,
      command: "enum/submit",
      value: "space",
      when: "state.object.data.enum.focused"
    },
    {
      repeation: !1,
      command: "enum/submit",
      value: "enter",
      when: "state.object.data.enum.focused"
    },
    {
      repeation: !1,
      command: "show.submit.setting",
      value: "f2",
      when: "focused == 'findConfigurations-local'"
    },
    {
      command: "commands.close",
      when: "state.object.data.commandId",
      value: "escape"
    },
    {
      repeation: !1,
      command: "activity.escape",
      value: "escape",
      when: "focused == 'activity'"
    },
    {
      command: "savePanel.close",
      value: "escape",
      repeation: !1,
      when: "state.settings.entities['visibility/savePanel.boolean']?.value"
    },
    {
      command: "userProfile.hide",
      value: "escape",
      repeation: !1,
      when: "state.settings.entities['visibility/profile.boolean']?.value"
    },
    {
      command: "view.settings.update.hide",
      when: "state.object.data.view.settings",
      value: "escape"
    },
    {
      command: "view.settings.hide",
      when: "state.settings.entities['visibility/configurations.boolean']?.value",
      value: "escape"
    },
    {
      repeation: !1,
      command: "creditBox.close",
      when: "state.object.data.visibility.credit",
      value: "escape"
    },
    {
      repeation: !1,
      command: "notification.closeAndExpandLess",
      when: "state.settings.entities['visibility/notifays.boolean']?.value",
      value: "escape"
    },
    {
      command: "configurations.settings.layouts.next",
      when: "focused == 'settings.layouts'",
      value: "arrowright"
    },
    {
      command: "configurations.settings.layouts.previous",
      when: "focused == 'settings.layouts'",
      value: "arrowleft"
    },
    {
      command: "configurations.settings.layout.submit",
      when: "focused == 'settings.layouts'",
      value: "enter"
    },
    {
      when: "focused == 'settings.tree.view'",
      value: "space",
      command: "settings.tree.toggleExpand"
    },
    {
      when: "focused == 'settings.tree.view'",
      value: "arrowright",
      command: "settings.tree.expandMore"
    },
    {
      when: "focused == 'settings.tree.view'",
      value: "arrowleft",
      command: "settings.tree.expandLess"
    },
    {
      command: "header.toggle",
      value: "control+h"
    },
    {
      command: "settings.icons.next",
      when: "['findConfigurations-local','icons-list'].includes(focused) && state.views.entities.settings.focused == 'icons'",
      value: "arrowdown"
    },
    {
      command: "settings.icons.back",
      when: "['findConfigurations-local','icons-list'].includes(focused) && state.views.entities.settings.focused == 'icons'",
      value: "arrowup"
    },
    {
      command: "settings.icons.submit",
      when: "['findConfigurations-local','icons-list'].includes(focused) && state.views.entities.settings.focused == 'icons'",
      value: "enter"
    },
    {
      command: "camera-take",
      value: "enter",
      when: "state.object.data?.camera?.id"
    },
    {
      command: "window.toggleMode",
      value: "control+d"
    }
  ]
}, { data: ca } = ia, ua = {
  name: "keys",
  id: "keyId",
  data: Object.entries(ca).map(([e, t]) => ({
    keyId: e,
    ...t
  })),
  default: () => ({
    repeation: !0,
    type: "down",
    only: !0,
    preventDefault: !0,
    keyId: `key_${W()}`
  })
}, { init: la, hooks: Vt, slice: kn } = U(ua), ze = "_" + W().replaceAll(/[^0-9A-Za-z$_]+/gi, "_");
function da(e) {
  return Function(`
    return ({ state , focused })=> {
      ${ze}_window = window;
      window = null;
      let ${ze} = ${e};
      window = ${ze}_window;
      return ${ze}
    }
  `)();
}
function Fi() {
  la();
  const e = Vt.getAll(), t = ot("commands.isBlocked"), n = _.useMemo(() => t ? [] : e.filter(({ value: o, command: r }) => o && r).map((o) => {
    const { value: r = "", when: s, repeation: i = !0, type: c = "down", only: f = !0, preventDefault: p = !0 } = o, l = new Ro(r);
    return {
      fn: async (v) => {
        if (!i && v.repeat || !l.test(v))
          return;
        const g = k.getState();
        if (s) {
          const w = Io(), b = da(s);
          try {
            if (!b({ state: g, focused: w }))
              return;
          } catch {
            return;
          }
        }
        f && v.stopImmediatePropagation(), p && v.preventDefault(), Q.inf(`KEYID       = ${o.keyId}`), Q.inf(`RUN         = ${o.command || "no command run"}`), Q.inf(`COMB        = (${o.value})`), Q.inf(`WHEN        = ${o.when || "no provide"}`), o.command && oa(o.command, g) ? Q.succ("EXISTS") : Q.warn("COMMAND NOT FOUND"), ra(o.command, g);
      },
      type: c
    };
  }), [e, t]);
  Aa(
    () => (n.forEach(({ fn: o, type: r }) => {
      document.addEventListener(`key${r}`, o);
    }), () => {
      n.forEach(({ fn: o, type: r }) => {
        document.removeEventListener(`key${r}`, o);
      });
    }),
    [n],
    1e3
  );
}
const Eo = "keyboard", fa = {
  Shift: !1,
  Alt: !1,
  Control: !1,
  SymbolLock: !1,
  AltGraph: !1,
  CapsLock: !1,
  Fn: !1,
  FnLock: !1,
  Hyper: !1,
  Meta: !1,
  NumLock: !1,
  Super: !1,
  ScrollLock: !1,
  Symbol: !1,
  Key: void 0
}, pa = (e) => e[Eo], xn = nt({
  name: Eo,
  initialState: fa,
  reducers: {
    // actions
    setModifier(e, { payload: t }) {
      try {
        e[t.modifierName] = t.value;
      } catch {
      }
    }
  }
});
function ji(e) {
  return $(pa, (n, o) => ye(n[e], o[e]))[e];
}
const ma = {
  data: {
    appPassword: {},
    colorDarkValue: {},
    colorDefaultValue: {},
    colorLightValue: {},
    colorName: {},
    findCommand: {},
    "findConfigurations-local": {},
    number: {},
    "password/def": {},
    "setting/number": {},
    updateConfigSetting: {},
    "window/password": {}
  }
}, { data: ya } = ma, ha = {
  name: "fields",
  id: "fieldId",
  default: () => ({
    selection: {
      direction: "forward",
      end: 0,
      start: 0
    },
    value: ""
  }),
  data: ya
}, { entity: Li, slice: An, hooks: G, entitySelect: Vi, init: zi } = U(ha), ga = {
  data: {
    autoCompleteInput: {
      default: "#888A"
    },
    "bg.selection": {
      dark: "#fff",
      light: "#000"
    },
    "black.opacity": {
      dark: "#0006",
      light: "#0003"
    },
    borders: {
      dark: "#333",
      light: "#bebebe"
    },
    "checkbox.background": {
      default: "#8884"
    },
    "checkbox.false": {
      default: "#F33"
    },
    "checkbox.true": {
      default: "#393"
    },
    error: {
      default: "#F33"
    },
    "error.border": {
      default: "#733"
    },
    "error.content": {
      default: "white"
    },
    "error.text": {
      default: "#F33"
    },
    "facebook-icon": {
      default: "#014DE4"
    },
    "field.background": {
      default: "rgba(160 160 160 / 0.2)"
    },
    "focus.text": {
      default: "#F33"
    },
    "google-icon": {
      default: "#E53"
    },
    "gray.opacity": {
      default: "#8884"
    },
    "gray.opacity.2": {
      default: "#8887"
    },
    "gray.opacity.toLight": {
      default: "#eee4"
    },
    htmlContentHover: {
      default: "#27F5"
    },
    "info.text": {
      default: "#37F"
    },
    locationIconSetup: {
      default: "yellow"
    },
    "log.error.color": {
      default: "#F33"
    },
    "log.info.color": {
      default: "#27F"
    },
    "log.secuess.color": {
      default: "#393"
    },
    "log.warning.color": {
      default: "rgb(227 138 32)"
    },
    "microsoft-icon": {
      default: "#F25022"
    },
    "notifay.error": {
      default: "#e61a1a"
    },
    "notifay.info": {
      default: "#2e7aec"
    },
    "notifay.success": {
      default: "#2b8817"
    },
    "notifay.warning": {
      default: "#e7a428"
    },
    primary: {
      dark: "#0078d4",
      light: "#46A"
    },
    "primary.background": {
      dark: "#111",
      light: "#ececec"
    },
    "primary.content": {
      dark: "#fff",
      light: "#fff"
    },
    "primary.hover.background": {
      dark: "#222",
      light: "#e1e1e1"
    },
    "qrCode.detection.secuess": {
      dark: "#0F4",
      light: "#0A3"
    },
    "qrCode.detection.secuess.content": {
      default: "white"
    },
    secondry: {
      dark: "#043853",
      light: "#0d8c9c"
    },
    "secondry.background": {
      dark: "#171717",
      light: "#e1e1e1"
    },
    "secondry.content": {
      default: "#fff"
    },
    selectedTextBackgroundBlured: {
      default: "#8885"
    },
    selectedTextBackgroundFocused: {
      default: "#26F6"
    },
    selectedTextColorBlur: {
      default: "#222"
    },
    selectedTextColorFocused: {
      default: "#fff"
    },
    "shadow.background.from": {
      default: "transparent"
    },
    "shadow.background.to": {
      dark: "#000",
      light: "#999"
    },
    "shadow.color": {
      dark: "#0008",
      light: "#4444"
    },
    "starts.color": {
      dark: "#FA0",
      light: "#E90"
    },
    "status.content": {
      default: "white"
    },
    "submit.background": {
      default: "#9994"
    },
    "success.text": {
      default: "#14B85B"
    },
    "text.color": {
      dark: "#ccc",
      light: "#333"
    },
    "text.selection": {
      dark: "#000",
      light: "#fff"
    },
    "toast.background": {
      dark: "#333",
      light: "#eee"
    },
    transparent: {
      default: "transparent"
    },
    userIconSetup: {
      default: "#27C"
    },
    "warning.text": {
      default: "rgb(227 138 32)"
    },
    wifiIconSetup: {
      default: "#2C6F"
    },
    "window.inWindows.close": {
      default: "red"
    },
    opacity: {
      dark: "#fff2",
      light: "#0002"
    }
  }
}, { data: va } = ga, ba = {
  id: "colorId",
  name: "color",
  data: va
}, { hooks: wa, slice: Mn, init: Bi, select: Ui, entity: Yi, entitySelect: Ki } = U(ba), Ea = {
  data: {}
}, { data: Sa } = Ea, _a = {
  id: "linkId",
  name: "cahser",
  data: Sa,
  default() {
    return {
      status: "idle"
    };
  }
}, { init: Hi, hooks: Wi, slice: Rn } = U(_a), Ue = {
  name: "actions",
  id: "actionId",
  data: {},
  default() {
    return {
      status: "ready",
      args: null
    };
  },
  actions: {
    exec(e, { payload: t }) {
      const [n, o] = t, r = e.entities[n];
      r && (r.args = o, r.status = "idle");
    }
  }
}, { entity: Gi, slice: In, hooks: X, entitySelect: qi } = U(Ue);
function Oa(e) {
  const t = X.getOne(e);
  _.useEffect(() => {
    t || X.upsert([
      {
        actionId: e,
        status: "ready",
        args: null
      }
    ]);
  }, [t]);
}
function Xi(e, t, n = [], o = () => {
}) {
  _.useEffect(() => () => {
    X.remove([e]);
  }, []), Oa(e);
  const r = X.getOne(e);
  return _e(async () => {
    if (!r)
      return;
    const { status: s } = r;
    if (s == "idle") {
      const { args: i } = r;
      X.setOneFeild(e, "status", "loading");
      try {
        let c = null, f = null;
        c = t(i), c instanceof Promise ? f = await c : f = c, X.setOneFeild(e, "output", f), X.setOneFeild(e, "status", "success"), f && o(f);
      } catch {
        X.setOneFeild(e, "output", null), X.setOneFeild(e, "status", "error");
      }
      X.setOneFeild(e, "args", null);
    }
  }, [r, ...n]), r;
}
function Qi(e, t) {
  return new Promise((n, o) => {
    k.dispatch({ type: "actions/exec", payload: [e, t] });
    const r = zn(`${Ue.name}.entities.` + e + ".status", "success", (i) => {
      s(), n({
        output: i[Ue.name].entities[e].output,
        state: i
      });
    }), s = zn(`${Ue.name}.entities.` + e + ".status", "error", (i) => {
      r(), o(i);
    });
  });
}
const k = zr({
  reducer: {
    // normal reducers
    [xn.name]: xn.reducer,
    [me.name]: me.reducer,
    [Se.name]: Se.reducer,
    // system space
    [Nn.name]: Nn.reducer,
    [kn.name]: kn.reducer,
    [On.name]: On.reducer,
    [gn.name]: gn.reducer,
    [_n.name]: _n.reducer,
    [En.name]: En.reducer,
    [Sn.name]: Sn.reducer,
    [An.name]: An.reducer,
    [In.name]: In.reducer,
    [Mn.name]: Mn.reducer,
    [bn.name]: bn.reducer,
    [Cn.name]: Cn.reducer,
    [Tn.name]: Tn.reducer,
    [Rn.name]: Rn.reducer,
    [wn.name]: wn.reducer
    /* main database */
  }
}), Ca = "object", Ta = {
  data: {},
  settings: {
    saved: !0,
    status: "idle",
    reloaded: !0,
    watch: !0,
    ignoreAccess: []
  }
}, me = nt({
  initialState: Ta,
  name: Ca,
  reducers: {
    setValue(e, { payload: t }) {
      const n = e.settings.ignoreAccess.find(({ dir: i }) => t.direction == i);
      if (n && n.pass != t.pass) {
        Q.warn(`Cannot Access Direction ${t.direction}`);
        return;
      }
      const o = t.direction.split(".").filter(Boolean);
      if (!o.length) {
        e.data = t.value;
        return;
      }
      let r = e.data;
      o.slice(0, -1).forEach((i) => {
        let c = r[i];
        c == null && t.force && (r[i] = {}, c = r[i]), r = c;
      });
      const s = o.at(-1);
      r[s] = t.value;
    },
    save(e, { payload: t = !1 }) {
      e.settings.saved = t;
    },
    reload(e, { payload: t = !1 }) {
      e.settings.reloaded = t;
    },
    addIgnoreAccess(e, { payload: t }) {
      t.forEach(({ dir: n, pass: o }) => {
        e.settings.ignoreAccess.find((s) => s.dir == n && o == s.pass) || e.settings.ignoreAccess.push({
          dir: n,
          pass: o
        });
      });
    },
    removeIgnoreAccess(e, { payload: t }) {
      t.forEach(({ dir: n, pass: o }) => {
        const r = e.settings.ignoreAccess.findIndex((s) => s.dir == n && o == s.pass);
        r >= 0 && e.settings.ignoreAccess.splice(r, 1);
      });
    }
  }
}), Ji = () => $((t) => t.object.settings.saved), Zi = () => $((t) => t.object.settings.watch), ec = () => $((t) => t.object.settings.reloaded), tc = () => $((t) => t.object.settings.status), nc = () => {
  k.dispatch(me.actions.reload(!1));
}, oc = () => {
  k.dispatch(me.actions.reload(!0));
}, rc = () => {
  k.dispatch(me.actions.save(!1));
}, sc = () => {
  k.dispatch(me.actions.save(!0));
};
function ot(e) {
  return $((n) => {
    const { isValide: o, value: r } = Xe(n.object.data, e);
    return o ? r : null;
  }, ye);
}
function fe(e, t) {
  k.dispatch(
    me.actions.setValue({
      value: t,
      direction: e,
      force: !0
    })
  );
}
function Na(e) {
  const t = ot(e), n = B(t);
  return _.useEffect(() => {
    fe(e, n.get);
  }, [n.get]), _.useEffect(() => {
    n.set(t);
  }, [t]), n;
}
function ka(e, t) {
  const n = (t || k.getState()).object.data, { isValide: o, value: r } = Xe(n, e);
  return o ? r : null;
}
const be = class be {
  constructor(t, n = null) {
    if (this.name = t, this.parent = n, this.name.includes(".") || be.allTemps[this.name])
      throw `temp name ${this.name} exists before`;
    be.allTemps[this.name] = this;
  }
  getTemp(t) {
    return ot([this.name, t].join("."));
  }
  getTempFromStore(t, n) {
    return ka([this.name, t].join("."), n);
  }
  setTemp(t, n) {
    fe([this.name, t].join("."), n);
  }
  useTemp(t) {
    return Na([this.name, t].join("."));
  }
  get childsTemps() {
    return Object.values(be.allTemps).filter(({ parent: t }) => t == this);
  }
};
Ut(be, "allTemps", {});
let L = be;
const ac = new L("path"), ic = new L("window"), rt = new L("view"), cc = new L("toast"), uc = new L("dialog"), lc = new L("loading"), dc = new L("progress"), fc = new L("password"), pc = new L("menu"), mc = new L("news"), yc = new L("visibility"), hc = new L("ipinfo"), gc = new L("submited"), ue = new L("camera"), xa = new L("recaptcha");
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Dn;
(function(e) {
  e.HARM_CATEGORY_UNSPECIFIED = "HARM_CATEGORY_UNSPECIFIED", e.HARM_CATEGORY_HATE_SPEECH = "HARM_CATEGORY_HATE_SPEECH", e.HARM_CATEGORY_SEXUALLY_EXPLICIT = "HARM_CATEGORY_SEXUALLY_EXPLICIT", e.HARM_CATEGORY_HARASSMENT = "HARM_CATEGORY_HARASSMENT", e.HARM_CATEGORY_DANGEROUS_CONTENT = "HARM_CATEGORY_DANGEROUS_CONTENT";
})(Dn || (Dn = {}));
var Pn;
(function(e) {
  e.HARM_BLOCK_THRESHOLD_UNSPECIFIED = "HARM_BLOCK_THRESHOLD_UNSPECIFIED", e.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE", e.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE", e.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH", e.BLOCK_NONE = "BLOCK_NONE";
})(Pn || (Pn = {}));
var $n;
(function(e) {
  e.HARM_PROBABILITY_UNSPECIFIED = "HARM_PROBABILITY_UNSPECIFIED", e.NEGLIGIBLE = "NEGLIGIBLE", e.LOW = "LOW", e.MEDIUM = "MEDIUM", e.HIGH = "HIGH";
})($n || ($n = {}));
var Fn;
(function(e) {
  e.BLOCKED_REASON_UNSPECIFIED = "BLOCKED_REASON_UNSPECIFIED", e.SAFETY = "SAFETY", e.OTHER = "OTHER";
})(Fn || (Fn = {}));
var Ge;
(function(e) {
  e.FINISH_REASON_UNSPECIFIED = "FINISH_REASON_UNSPECIFIED", e.STOP = "STOP", e.MAX_TOKENS = "MAX_TOKENS", e.SAFETY = "SAFETY", e.RECITATION = "RECITATION", e.OTHER = "OTHER";
})(Ge || (Ge = {}));
var jn;
(function(e) {
  e.TASK_TYPE_UNSPECIFIED = "TASK_TYPE_UNSPECIFIED", e.RETRIEVAL_QUERY = "RETRIEVAL_QUERY", e.RETRIEVAL_DOCUMENT = "RETRIEVAL_DOCUMENT", e.SEMANTIC_SIMILARITY = "SEMANTIC_SIMILARITY", e.CLASSIFICATION = "CLASSIFICATION", e.CLUSTERING = "CLUSTERING";
})(jn || (jn = {}));
var Ln;
(function(e) {
  e.GENERATE_CONTENT = "generateContent", e.STREAM_GENERATE_CONTENT = "streamGenerateContent", e.COUNT_TOKENS = "countTokens", e.EMBED_CONTENT = "embedContent", e.BATCH_EMBED_CONTENTS = "batchEmbedContents";
})(Ln || (Ln = {}));
Ge.RECITATION, Ge.SAFETY;
const vc = ({ model: e = "gemini-pro" }) => _.useMemo(() => null, [e]);
function bc(e, t = [], n) {
  const o = B(null);
  return _.useEffect(() => (e().then(o.set), () => {
    n == null || n(t);
  }), t), o.get;
}
function _e(e, t = [], n = () => {
}) {
  _.useEffect(() => (e().then(), () => n(t)), t);
}
function B(e) {
  const [t, n] = _.useState(e);
  return {
    get: t,
    set: n
  };
}
function Vn(e, t, n = (o) => o) {
  const o = B(n(e)), r = _.useDeferredValue(o.get);
  return _.useEffect(() => {
    t(r);
  }, [r]), _.useEffect(() => {
    o.set(n(e));
  }, [e]), o;
}
function wc(e, t = [], n = 1e3) {
  const o = B(null), r = B(!1);
  return _.useEffect(() => {
    const s = new qe();
    return r.set(!0), s.start(n).then(() => {
      o.set(e()), r.set(!1);
    }), () => {
      s.clear(), r.set(!1);
    };
  }, [...t, n]), [r.get, o.get];
}
function Aa(e, t = [], n = 1e3) {
  const o = B(!1);
  return _.useEffect(() => {
    const r = new qe();
    o.set(!0);
    let s;
    return r.start(n).then(async () => {
      s = e(), s instanceof Promise && await s, o.set(!1);
    }), () => {
      r.clear(), typeof s == "function" && s(), o.set(!1);
    };
  }, [...t, n]), o.get;
}
const Ec = (e, t = []) => {
  const n = B("ready"), o = B(null), r = B(null);
  return _e(async () => {
    if (n.get == "idle") {
      n.set("loading");
      try {
        const s = await e();
        o.set(s), r.set(null), n.set("success");
      } catch (s) {
        o.set(null), r.set(s), n.set("error");
      }
    }
  }, [n.get, ...t]), {
    status: n,
    data: o,
    error: r
  };
};
function Ma(e) {
  const t = ee.getOne(e);
  return _.useMemo(() => t || null, [t]);
}
function Ra() {
  const e = ee.getAll();
  return _.useMemo(() => e.filter(({ private: n = !1 }) => !n), [e]);
}
function Sc(e) {
  const t = ee.getOneFeild(e, "config");
  return _.useMemo(() => t || null, [t]);
}
function _c() {
  const e = Ra(), t = G.getOneFeild("findConfigurations", "value"), n = go.getOneFeild("settings.viewType", "focused"), o = _.useMemo(() => n == "list" ? ke.orderBy(e, "name", "asc") : n ? ke.orderBy(e, "settingId", "asc") : e, [n, e]), r = So("settings/findBy.enum"), s = _.useMemo(() => Object.entries(Yn(String(t))).map(([c, f]) => [c, f.join(" ")]), [t]), i = _.useMemo(() => o.filter((c) => s.every(([f, p]) => {
    var l;
    switch (f) {
      case "id":
        return re(c.settingId, p);
      case "name":
        return typeof c.name == "string" && re(c.name, p);
      case "changed":
        return !ye(c.def, c.value);
      case "type": {
        const m = (l = c.settingId.match(/\.[a-z]+$/gi)) == null ? void 0 : l[0].slice(1);
        return typeof m == "string" ? re(p, m) : !1;
      }
      case "default value":
        return r == "nice" ? re(Do(c.name, c.desc, c.settingId).join(" "), p) : r && re(String(c[r]), p);
    }
  })), [s, o, r]);
  return _.useEffect(() => {
    fe("configurations.found.length", i.length);
  }, [i]), i;
}
function Oc(e, t) {
  ee.setOneFeild(e, "config", t);
}
function Cc(e, t) {
  ee.setOneFeild(e, "value", t);
}
function So(e) {
  const t = Ma(e);
  return t == null ? void 0 : t.value;
}
function Tc(e) {
  const t = Vt.getAll();
  return _.useMemo(() => ke.join({ commandId: e }, t, "commandId->command"), [e, t]);
}
function _o() {
  const e = Vt.getAll();
  return _.useMemo(() => e.filter(({ value: t }) => t), [e]);
}
function Nc(e) {
  const t = _o();
  return _.useMemo(() => ke.join({ actionName: e }, t, "actionName->action"), [t]);
}
const kc = (e) => rt.setTemp("settings", e == null ? void 0 : e.toString());
function Ia() {
  const e = aa.getAll();
  return _.useMemo(() => e.filter((t) => !t.private), [e]);
}
function xc() {
  const e = Ia(), t = G.getOneFeild("findConfigurations", "value"), n = _o(), o = _.useMemo(() => ke.fullJoin(e, n, "commandId->command").map(({ childs: i, data: c }) => ({
    ...c,
    keys: i
  })), [e, n]), r = _.useMemo(() => {
    if (!t)
      return o;
    const s = Object.entries(Yn(t)).map(([i, c]) => ({
      prop: i,
      value: c.join(" ")
    }));
    return o.filter(({ commandId: i, label: c, keys: f }) => s.every(({ prop: p, value: l }) => {
      switch (p) {
        case "key":
          return re(f.map(({ value: m }) => m).join(" "), l);
        case "label":
          return re(c, l);
        case "commandId":
          return i.startsWith(l);
        default:
          return re([c, ...f.map(({ value: m }) => m)].join(" "), l);
      }
    }));
  }, [t, o]);
  return _.useEffect(() => {
    fe("configurations.found.length", r.length);
  }, [r]), r;
}
function Ac(e, t = []) {
  const n = Object.entries(e), o = n.map(([, r]) => G.getOneFeild(r, "value"));
  return _.useMemo(() => {
    const r = {};
    return n.forEach(([s], i) => {
      const c = o[i];
      r[s] = c;
    }), r;
  }, [...o, ...t]);
}
function Mc(e) {
  e.forEach((t) => {
    G.setOneFeild(t, "value", "");
  });
}
function Da(e) {
  const t = G.getOne(e);
  _.useEffect(() => {
    t || G.add([
      {
        fieldId: e,
        selection: {
          direction: "forward",
          end: 0,
          start: 0
        },
        value: "",
        controls: {}
      }
    ]);
  }, [t]);
}
function Pa(e, t) {
  return _.useMemo(() => {
    if (!t)
      return e || "";
    const o = Math.min(t.start, t.end);
    return (e == null ? void 0 : e.slice(0, o)) || "";
  }, [e, t]);
}
function $a(e, t) {
  return _.useMemo(() => {
    if (!t)
      return e || "";
    const o = Math.max(t.start, t.end);
    return (e == null ? void 0 : e.slice(o)) || "";
  }, [e, t]);
}
function Fa(e, t) {
  return _.useMemo(() => {
    if (!t)
      return e || "";
    const o = Math.min(t.start, t.end), r = Math.max(t.start, t.end);
    return (e == null ? void 0 : e.slice(o, r)) || "";
  }, [e, t]);
}
function Rc(e) {
  e.forEach(Da);
}
function Ic(e) {
  const t = G.getOneFeild(e, "value"), n = G.getOneFeild(e, "selection");
  return Pa(t, n);
}
function Dc(e) {
  const t = G.getOneFeild(e, "value"), n = G.getOneFeild(e, "selection");
  return $a(t, n);
}
function Pc(e) {
  const t = G.getOneFeild(e, "value"), n = G.getOneFeild(e, "selection");
  return Fa(t, n);
}
function $c(e, t = k.getState()) {
  const n = e.map((o) => {
    const r = t.fields.entities[o], s = Object.keys((r == null ? void 0 : r.controls) || {});
    if (!r || !s.length)
      return {
        response: [],
        isValide: !0
      };
    const i = r.value, c = s.map((f) => i.match(new RegExp(f, "ig")));
    return { response: c, isValide: c.every(Boolean), fieldName: o };
  });
  return {
    controls: n,
    isValide: n.every(({ isValide: o }) => o)
  };
}
function Fc(e, t = "info", n = W(), o = 5) {
  return Vs.add([
    {
      message: e,
      type: t,
      time: o,
      id: n
    }
  ]), n;
}
var ja = /* @__PURE__ */ ((e) => (e[e.short = 5] = "short", e[e.long = 5] = "long", e))(ja || {});
const jc = async () => {
  const e = W();
  return ue.setTemp("id", e), ue.setTemp("type", "scanQr"), new Promise(async (t) => {
    const n = Oo(
      "object.data.view.result",
      (o) => !!o,
      async ({ object: o }) => {
        var s;
        const r = (s = o.data) == null ? void 0 : s.camera;
        (r == null ? void 0 : r.id) == e && (n(), t(r.result));
      }
    );
  });
};
function Lc(e) {
  return new Promise(async (t, n) => {
    var i, c;
    if ((c = (i = k.getState().object.data) == null ? void 0 : i.camera) == null ? void 0 : c.id) {
      n("Camera Is Work Now");
      return;
    }
    const r = W();
    ue.setTemp("id", r), ue.setTemp("type", e), ue.setTemp("result", null), ue.setTemp("error", null);
    const s = Oo(
      "object.data.camera",
      (f) => !!(f != null && f.result || f != null && f.error),
      async ({ object: f }) => {
        var l;
        const p = (l = f.data) == null ? void 0 : l.camera;
        (p == null ? void 0 : p.id) == r && (p.result ? t(p.result) : n(p.error), ["id", "type", "result"].forEach((m) => {
          ue.setTemp(m, null);
        }), s());
      }
    );
  });
}
function Vc() {
  const e = wa.getEntity(), t = So("window/dark.boolean");
  return _.useCallback(
    (...n) => {
      const o = {}, r = {};
      if (t == null)
        return r;
      n.forEach((s) => {
        if (s) {
          if (typeof s == "string") {
            o.backgroundColor = s;
            return;
          }
          Object.entries(s).forEach(([i, c]) => {
            if (typeof c == "function") {
              o[i] = c;
              return;
            }
            o[i] = c;
          });
        }
      });
      for (const s in o) {
        const i = o[s];
        if (typeof i == "function")
          r[s] = i(e, t);
        else if (typeof i == "string") {
          const c = e[i];
          c && (r[s] = zt(t, c));
        }
      }
      return r;
    },
    [t, e]
  );
}
function zc(e, ...t) {
  return (n, o) => `linear-gradient(${e} , ${t.filter((r) => n[r]).map((r) => {
    const s = n[r];
    return zt(o, s);
  }).join(" , ")})`;
}
function zt(e, t) {
  return e ? t.dark || t.default : t.light || t.default;
}
function Bc(e = []) {
  return (t, n) => e.filter((o) => t[o.colorId]).map(({ colorId: o, x: r = 0, y: s = 0, blur: i = 3, size: c = 1, isInset: f = !1 }) => {
    const p = t[o];
    return `${r}px ${s}px ${i}px ${c}px ${zt(n, p)} ${f ? "inset" : ""}`;
  }).join(" , ");
}
const zn = (e, t, n) => {
  const o = () => {
    const s = k.getState(), { value: i } = Xe(s, e);
    (typeof t == "function" ? t(i) : i == t) && (r(), n(s));
  }, r = k.subscribe(o);
  return r;
}, Oo = (e, t, n) => {
  const o = () => {
    const r = k.getState(), { value: s, isValide: i } = Xe(r, e);
    if (!i) {
      Q.warn("Invalid State Dir", e);
      return;
    }
    (typeof t == "function" ? t(s) : s == t) && (n == null || n(r));
  };
  return k.subscribe(o);
}, La = () => ot("userInfo"), Uc = () => {
  const e = Va();
  _e(async () => {
    var n;
    if (e != null && e.uid && ((n = J.server) != null && n.db)) {
      const o = Kt(J.server.db, "users"), r = Ht(o, e.uid), s = {
        photo: e.photoURL,
        phone: e.phoneNumber,
        name: e.displayName,
        email: e.email
      };
      fe("userInfo", s), await $o(r, s, { merge: !0 });
    } else
      fe("userInfo", null);
  }, [e]);
  const t = La();
  _e(async () => {
    if (e && t) {
      let n = {};
      e.displayName != t.name && (n.displayName = t.name), e.photoURL != t.photo && (n.photoURL = t.photo), await Fo(e, n);
    }
  }, [t, e]), _.useEffect(() => {
    const n = J.server;
    if (e && n)
      return jo(Ht(Kt(n.db, "users"), e.uid), (o) => {
        o.exists() && fe("userInfo", o.data());
      });
  }, [e]);
}, Va = () => {
  var t;
  const e = B(((t = J.server) == null ? void 0 : t.auth.currentUser) || null);
  return _.useEffect(() => {
    var n;
    if ((n = J.server) != null && n.auth) {
      e.set(J.server.auth.currentUser);
      const o = Lo(J.server.auth, e.set), r = Vo(J.server.auth, e.set);
      return () => {
        o(), r();
      };
    }
  }, []), e.get;
}, Yc = async () => {
  if (!J.server)
    throw Error("Server is not initialized");
  xa.setTemp("open", !0), await Un(1e3);
  const e = document.getElementById("capatcha-view");
  if (!e)
    throw Error("capatcha view element is not exists");
  return new zo(J.server.auth, e);
}, Kc = () => {
  rt.setTemp("profile-view", !0);
}, Hc = () => {
  rt.setTemp("profile-view", !1);
}, Wc = (e) => {
  rt.setTemp("pdf", e);
}, Gc = ({ ...e }) => {
  ee.setOneFeild("visibility/notifays.boolean", "value", !0), Me.add([
    {
      id: W(),
      buttons: [],
      desc: " - ",
      showDesc: !1,
      removable: !0,
      status: "idle",
      title: "Untitled",
      ...e
    }
  ]);
};
export {
  Mi as $,
  Na as A,
  xc as B,
  Tc as C,
  Vt as D,
  Rc as E,
  pc as F,
  Ei as G,
  Me as H,
  rt as I,
  _c as J,
  gi as K,
  Vs as L,
  Fc as M,
  $c as N,
  Va as O,
  Ec as P,
  La as Q,
  W as R,
  Lc as S,
  Kc as T,
  Gc as U,
  Cc as V,
  aa as W,
  Zs as X,
  vc as Y,
  Ri as Z,
  _e as _,
  Vc as a,
  Ta as a$,
  xs as a0,
  bc as a1,
  Ja as a2,
  ei as a3,
  ni as a4,
  ri as a5,
  hi as a6,
  fi as a7,
  wa as a8,
  zt as a9,
  Ii as aA,
  Hi as aB,
  ai as aC,
  Uc as aD,
  Bs as aE,
  Vn as aF,
  Ma as aG,
  Sc as aH,
  Oc as aI,
  Nc as aJ,
  Ac as aK,
  Mc as aL,
  Pa as aM,
  $a as aN,
  Fa as aO,
  Ic as aP,
  Dc as aQ,
  Pc as aR,
  ja as aS,
  jc as aT,
  Oo as aU,
  Yc as aV,
  Hc as aW,
  Wc as aX,
  Sn as aY,
  bi as aZ,
  Ca as a_,
  uc as aa,
  li as ab,
  di as ac,
  wc as ad,
  zn as ae,
  Ni as af,
  ka as ag,
  Za as ah,
  ti as ai,
  oi as aj,
  si as ak,
  vn as al,
  Qa as am,
  Ha as an,
  It as ao,
  $i as ap,
  zi as aq,
  ui as ar,
  Bi as as,
  Wa as at,
  _i as au,
  Oi as av,
  vi as aw,
  Ai as ax,
  Xa as ay,
  Fi as az,
  Xi as b,
  Gi as b$,
  me as b0,
  Ji as b1,
  Zi as b2,
  ec as b3,
  tc as b4,
  nc as b5,
  oc as b6,
  rc as b7,
  sc as b8,
  ac as b9,
  On as bA,
  Ti as bB,
  vo as bC,
  bo as bD,
  ki as bE,
  xi as bF,
  Cn as bG,
  Js as bH,
  Di as bI,
  Tn as bJ,
  la as bK,
  kn as bL,
  ze as bM,
  Li as bN,
  An as bO,
  Vi as bP,
  na as bQ,
  wo as bR,
  oa as bS,
  sa as bT,
  Nn as bU,
  Pi as bV,
  Mn as bW,
  Ui as bX,
  Yi as bY,
  Ki as bZ,
  Ue as b_,
  ic as ba,
  cc as bb,
  lc as bc,
  dc as bd,
  fc as be,
  mc as bf,
  hc as bg,
  gc as bh,
  xa as bi,
  gn as bj,
  Ga as bk,
  qa as bl,
  Fs as bm,
  bn,
  ii as bo,
  wn as bp,
  ci as bq,
  En as br,
  zs as bs,
  pi as bt,
  mi as bu,
  yi as bv,
  wi as bw,
  _n as bx,
  Si as by,
  Ci as bz,
  ue as c,
  In as c0,
  qi as c1,
  Oa as c2,
  _o as d,
  Qi as e,
  G as f,
  So as g,
  Bc as h,
  Ia as i,
  k as j,
  Ra as k,
  ot as l,
  X as m,
  ra as n,
  kc as o,
  fe as p,
  Be as q,
  zc as r,
  ee as s,
  da as t,
  B as u,
  go as v,
  yc as w,
  Da as x,
  Aa as y,
  ji as z
};
