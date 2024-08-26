var xo = Object.defineProperty;
var Ao = (e, t, n) => t in e ? xo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ht = (e, t, n) => Ao(e, typeof t != "symbol" ? t + "" : t, n);
import * as Fe from "react";
import _, { useContext as Mo, useRef as Ro, useCallback as Io, useDebugValue as Do } from "react";
import { w as Hn, D as Xe, c as ye, j as Po, f as Wn, d as Q, b as Wt, S as $o, v as Fo, x as Qe, y as jo, a as xe, z as Gn, n as re, e as Lo } from "./index-BAWoqxfk.mjs";
import { unstable_batchedUpdates as Vo } from "react-dom";
import { S as J, b as Gt, e as qt, d as zo, u as Bo, o as Uo, j as Yo, k as Ko, R as Ho } from "./firebase-oFaglbxa.mjs";
function j(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Wo = typeof Symbol == "function" && Symbol.observable || "@@observable", Xt = Wo, gt = () => Math.random().toString(36).substring(7).split("").join("."), Go = {
  INIT: `@@redux/INIT${/* @__PURE__ */ gt()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ gt()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${gt()}`
}, de = Go;
function Ie(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function qo(e) {
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
  if (Jo(e))
    return "date";
  if (Qo(e))
    return "error";
  const n = Xo(e);
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
function Xo(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Qo(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Jo(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function oe(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = qo(e)), t;
}
function qn(e, t, n) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? j(2) : `Expected the root reducer to be a function. Instead, received: '${oe(e)}'`);
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? j(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? j(1) : `Expected the enhancer to be a function. Instead, received: '${oe(n)}'`);
    return n(qn)(e, t);
  }
  let o = e, r = t, s = /* @__PURE__ */ new Map(), i = s, c = 0, d = !1;
  function p() {
    i === s && (i = /* @__PURE__ */ new Map(), s.forEach((a, u) => {
      i.set(u, a);
    }));
  }
  function l() {
    if (d)
      throw new Error(process.env.NODE_ENV === "production" ? j(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return r;
  }
  function m(a) {
    if (typeof a != "function")
      throw new Error(process.env.NODE_ENV === "production" ? j(4) : `Expected the listener to be a function. Instead, received: '${oe(a)}'`);
    if (d)
      throw new Error(process.env.NODE_ENV === "production" ? j(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let u = !0;
    p();
    const E = c++;
    return i.set(E, a), function() {
      if (u) {
        if (d)
          throw new Error(process.env.NODE_ENV === "production" ? j(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        u = !1, p(), i.delete(E), s = null;
      }
    };
  }
  function h(a) {
    if (!Ie(a))
      throw new Error(process.env.NODE_ENV === "production" ? j(7) : `Actions must be plain objects. Instead, the actual type was: '${oe(a)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof a.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? j(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof a.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? j(17) : `Action "type" property must be a string. Instead, the actual type was: '${oe(a.type)}'. Value was: '${a.type}' (stringified)`);
    if (d)
      throw new Error(process.env.NODE_ENV === "production" ? j(9) : "Reducers may not dispatch actions.");
    try {
      d = !0, r = o(r, a);
    } finally {
      d = !1;
    }
    return (s = i).forEach((E) => {
      E();
    }), a;
  }
  function v(a) {
    if (typeof a != "function")
      throw new Error(process.env.NODE_ENV === "production" ? j(10) : `Expected the nextReducer to be a function. Instead, received: '${oe(a)}`);
    o = a, h({
      type: de.REPLACE
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
      [Xt]() {
        return this;
      }
    };
  }
  return h({
    type: de.INIT
  }), {
    dispatch: h,
    subscribe: m,
    getState: l,
    replaceReducer: v,
    [Xt]: w
  };
}
function Qt(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Zo(e, t, n, o) {
  const r = Object.keys(t), s = n && n.type === de.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (r.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Ie(e))
    return `The ${s} has unexpected type of "${oe(e)}". Expected argument to be an object with the following keys: "${r.join('", "')}"`;
  const i = Object.keys(e).filter((c) => !t.hasOwnProperty(c) && !o[c]);
  if (i.forEach((c) => {
    o[c] = !0;
  }), !(n && n.type === de.REPLACE) && i.length > 0)
    return `Unexpected ${i.length > 1 ? "keys" : "key"} "${i.join('", "')}" found in ${s}. Expected to find one of the known reducer keys instead: "${r.join('", "')}". Unexpected keys will be ignored.`;
}
function er(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: de.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? j(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof n(void 0, {
      type: de.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? j(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${de.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function tr(e) {
  const t = Object.keys(e), n = {};
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    process.env.NODE_ENV !== "production" && typeof e[c] > "u" && Qt(`No reducer provided for key "${c}"`), typeof e[c] == "function" && (n[c] = e[c]);
  }
  const o = Object.keys(n);
  let r;
  process.env.NODE_ENV !== "production" && (r = {});
  let s;
  try {
    er(n);
  } catch (i) {
    s = i;
  }
  return function(c = {}, d) {
    if (s)
      throw s;
    if (process.env.NODE_ENV !== "production") {
      const m = Zo(c, n, d, r);
      m && Qt(m);
    }
    let p = !1;
    const l = {};
    for (let m = 0; m < o.length; m++) {
      const h = o[m], v = n[h], w = c[h], b = v(w, d);
      if (typeof b > "u") {
        const a = d && d.type;
        throw new Error(process.env.NODE_ENV === "production" ? j(14) : `When called with an action of type ${a ? `"${String(a)}"` : "(unknown type)"}, the slice reducer for key "${h}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      l[h] = b, p = p || b !== w;
    }
    return p = p || o.length !== Object.keys(c).length, p ? l : c;
  };
}
function Ke(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...o) => t(n(...o)));
}
function nr(...e) {
  return (t) => (n, o) => {
    const r = t(n, o);
    let s = () => {
      throw new Error(process.env.NODE_ENV === "production" ? j(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const i = {
      getState: r.getState,
      dispatch: (d, ...p) => s(d, ...p)
    }, c = e.map((d) => d(i));
    return s = Ke(...c)(r.dispatch), {
      ...r,
      dispatch: s
    };
  };
}
function Ft(e) {
  return Ie(e) && "type" in e && typeof e.type == "string";
}
var Xn = Symbol.for("immer-nothing"), Jt = Symbol.for("immer-draftable"), H = Symbol.for("immer-state"), or = process.env.NODE_ENV !== "production" ? [
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
function K(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const n = or[e], o = typeof n == "function" ? n.apply(null, t) : n;
    throw new Error(`[Immer] ${o}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Ee = Object.getPrototypeOf;
function Z(e) {
  return !!e && !!e[H];
}
function te(e) {
  var t;
  return e ? Qn(e) || Array.isArray(e) || !!e[Jt] || !!((t = e.constructor) != null && t[Jt]) || Ze(e) || et(e) : !1;
}
var rr = Object.prototype.constructor.toString();
function Qn(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Ee(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === rr;
}
function He(e, t) {
  Je(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, o) => t(o, n, e));
}
function Je(e) {
  const t = e[H];
  return t ? t.type_ : Array.isArray(e) ? 1 : Ze(e) ? 2 : et(e) ? 3 : 0;
}
function Ot(e, t) {
  return Je(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Jn(e, t, n) {
  const o = Je(e);
  o === 2 ? e.set(t, n) : o === 3 ? e.add(n) : e[t] = n;
}
function sr(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ze(e) {
  return e instanceof Map;
}
function et(e) {
  return e instanceof Set;
}
function ue(e) {
  return e.copy_ || e.base_;
}
function Ct(e, t) {
  if (Ze(e))
    return new Map(e);
  if (et(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = Qn(e);
  if (t === !0 || t === "class_only" && !n) {
    const o = Object.getOwnPropertyDescriptors(e);
    delete o[H];
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
    return Object.create(Ee(e), o);
  } else {
    const o = Ee(e);
    if (o !== null && n)
      return { ...e };
    const r = Object.create(o);
    return Object.assign(r, e);
  }
}
function jt(e, t = !1) {
  return tt(e) || Z(e) || !te(e) || (Je(e) > 1 && (e.set = e.add = e.clear = e.delete = ar), Object.freeze(e), t && Object.entries(e).forEach(([n, o]) => jt(o, !0))), e;
}
function ar() {
  K(2);
}
function tt(e) {
  return Object.isFrozen(e);
}
var ir = {};
function pe(e) {
  const t = ir[e];
  return t || K(0, e), t;
}
var Ae;
function Zn() {
  return Ae;
}
function cr(e, t) {
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
function Zt(e, t) {
  t && (pe("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Tt(e) {
  kt(e), e.drafts_.forEach(ur), e.drafts_ = null;
}
function kt(e) {
  e === Ae && (Ae = e.parent_);
}
function en(e) {
  return Ae = cr(Ae, e);
}
function ur(e) {
  const t = e[H];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function tn(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[H].modified_ && (Tt(t), K(4)), te(e) && (e = We(t, e), t.parent_ || Ge(t, e)), t.patches_ && pe("Patches").generateReplacementPatches_(
    n[H].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = We(t, n, []), Tt(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Xn ? e : void 0;
}
function We(e, t, n) {
  if (tt(t))
    return t;
  const o = t[H];
  if (!o)
    return He(
      t,
      (r, s) => nn(e, o, t, r, s, n)
    ), t;
  if (o.scope_ !== e)
    return t;
  if (!o.modified_)
    return Ge(e, o.base_, !0), o.base_;
  if (!o.finalized_) {
    o.finalized_ = !0, o.scope_.unfinalizedDrafts_--;
    const r = o.copy_;
    let s = r, i = !1;
    o.type_ === 3 && (s = new Set(r), r.clear(), i = !0), He(
      s,
      (c, d) => nn(e, o, r, c, d, n, i)
    ), Ge(e, r, !1), n && e.patches_ && pe("Patches").generatePatches_(
      o,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return o.copy_;
}
function nn(e, t, n, o, r, s, i) {
  if (process.env.NODE_ENV !== "production" && r === n && K(5), Z(r)) {
    const c = s && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Ot(t.assigned_, o) ? s.concat(o) : void 0, d = We(e, r, c);
    if (Jn(n, o, d), Z(d))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else i && n.add(r);
  if (te(r) && !tt(r)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    We(e, r), (!t || !t.scope_.parent_) && typeof o != "symbol" && Object.prototype.propertyIsEnumerable.call(n, o) && Ge(e, r);
  }
}
function Ge(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && jt(t, n);
}
function lr(e, t) {
  const n = Array.isArray(e), o = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Zn(),
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
  let r = o, s = Lt;
  n && (r = [o], s = Me);
  const { revoke: i, proxy: c } = Proxy.revocable(r, s);
  return o.draft_ = c, o.revoke_ = i, c;
}
var Lt = {
  get(e, t) {
    if (t === H)
      return e;
    const n = ue(e);
    if (!Ot(n, t))
      return dr(e, n, t);
    const o = n[t];
    return e.finalized_ || !te(o) ? o : o === vt(e.base_, t) ? (bt(e), e.copy_[t] = xt(o, e)) : o;
  },
  has(e, t) {
    return t in ue(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(ue(e));
  },
  set(e, t, n) {
    const o = eo(ue(e), t);
    if (o != null && o.set)
      return o.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const r = vt(ue(e), t), s = r == null ? void 0 : r[H];
      if (s && s.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (sr(n, r) && (n !== void 0 || Ot(e.base_, t)))
        return !0;
      bt(e), Nt(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return vt(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, bt(e), Nt(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = ue(e), o = Reflect.getOwnPropertyDescriptor(n, t);
    return o && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: o.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    K(11);
  },
  getPrototypeOf(e) {
    return Ee(e.base_);
  },
  setPrototypeOf() {
    K(12);
  }
}, Me = {};
He(Lt, (e, t) => {
  Me[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Me.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && K(13), Me.set.call(this, e, t, void 0);
};
Me.set = function(e, t, n) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && K(14), Lt.set.call(this, e[0], t, n, e[0]);
};
function vt(e, t) {
  const n = e[H];
  return (n ? ue(n) : e)[t];
}
function dr(e, t, n) {
  var r;
  const o = eo(t, n);
  return o ? "value" in o ? o.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (r = o.get) == null ? void 0 : r.call(e.draft_)
  ) : void 0;
}
function eo(e, t) {
  if (!(t in e))
    return;
  let n = Ee(e);
  for (; n; ) {
    const o = Object.getOwnPropertyDescriptor(n, t);
    if (o)
      return o;
    n = Ee(n);
  }
}
function Nt(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Nt(e.parent_));
}
function bt(e) {
  e.copy_ || (e.copy_ = Ct(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var fr = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, o) => {
      if (typeof t == "function" && typeof n != "function") {
        const s = n;
        n = t;
        const i = this;
        return function(d = s, ...p) {
          return i.produce(d, (l) => n.call(this, l, ...p));
        };
      }
      typeof n != "function" && K(6), o !== void 0 && typeof o != "function" && K(7);
      let r;
      if (te(t)) {
        const s = en(this), i = xt(t, void 0);
        let c = !0;
        try {
          r = n(i), c = !1;
        } finally {
          c ? Tt(s) : kt(s);
        }
        return Zt(s, o), tn(r, s);
      } else if (!t || typeof t != "object") {
        if (r = n(t), r === void 0 && (r = t), r === Xn && (r = void 0), this.autoFreeze_ && jt(r, !0), o) {
          const s = [], i = [];
          pe("Patches").generateReplacementPatches_(t, r, s, i), o(s, i);
        }
        return r;
      } else
        K(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (i, ...c) => this.produceWithPatches(i, (d) => t(d, ...c));
      let o, r;
      return [this.produce(t, n, (i, c) => {
        o = i, r = c;
      }), o, r];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    te(e) || K(8), Z(e) && (e = nt(e));
    const t = en(this), n = xt(e, void 0);
    return n[H].isManual_ = !0, kt(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[H];
    (!n || !n.isManual_) && K(9);
    const { scope_: o } = n;
    return Zt(o, t), tn(void 0, o);
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
function xt(e, t) {
  const n = Ze(e) ? pe("MapSet").proxyMap_(e, t) : et(e) ? pe("MapSet").proxySet_(e, t) : lr(e, t);
  return (t ? t.scope_ : Zn()).drafts_.push(n), n;
}
function nt(e) {
  return Z(e) || K(10, e), to(e);
}
function to(e) {
  if (!te(e) || tt(e))
    return e;
  const t = e[H];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Ct(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Ct(e, !0);
  return He(n, (o, r) => {
    Jn(n, o, to(r));
  }), t && (t.finalized_ = !1), n;
}
var W = new fr(), Vt = W.produce;
W.produceWithPatches.bind(
  W
);
W.setAutoFreeze.bind(W);
W.setUseStrictShallowCopy.bind(W);
W.applyPatches.bind(W);
W.createDraft.bind(W);
W.finishDraft.bind(W);
var pr = (e, t, n) => {
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
}, mr = (e, t, n) => {
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
}, yr = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function hr(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function gr(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function vr(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (o) => typeof o == "function" ? `function ${o.name || "unnamed"}()` : typeof o
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var on = (e) => Array.isArray(e) ? e : [e];
function br(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return vr(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function rn(e, t) {
  const n = [], { length: o } = e;
  for (let r = 0; r < o; r++)
    n.push(e[r].apply(null, t));
  return n;
}
var wr = (e, t) => {
  const { identityFunctionCheck: n, inputStabilityCheck: o } = {
    ...yr,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: pr
    },
    inputStabilityCheck: {
      shouldRun: o === "always" || o === "once" && e,
      run: mr
    }
  };
}, Er = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, Sr = typeof WeakRef < "u" ? WeakRef : Er, _r = 0, sn = 1;
function je() {
  return {
    s: _r,
    v: void 0,
    o: null,
    p: null
  };
}
function zt(e, t = {}) {
  let n = je();
  const { resultEqualityCheck: o } = t;
  let r, s = 0;
  function i() {
    var m;
    let c = n;
    const { length: d } = arguments;
    for (let h = 0, v = d; h < v; h++) {
      const w = arguments[h];
      if (typeof w == "function" || typeof w == "object" && w !== null) {
        let b = c.o;
        b === null && (c.o = b = /* @__PURE__ */ new WeakMap());
        const a = b.get(w);
        a === void 0 ? (c = je(), b.set(w, c)) : c = a;
      } else {
        let b = c.p;
        b === null && (c.p = b = /* @__PURE__ */ new Map());
        const a = b.get(w);
        a === void 0 ? (c = je(), b.set(w, c)) : c = a;
      }
    }
    const p = c;
    let l;
    if (c.s === sn ? l = c.v : (l = e.apply(null, arguments), s++), p.s = sn, o) {
      const h = ((m = r == null ? void 0 : r.deref) == null ? void 0 : m.call(r)) ?? r;
      h != null && o(h, l) && (l = h, s !== 0 && s--), r = typeof l == "object" && l !== null || typeof l == "function" ? new Sr(l) : l;
    }
    return p.v = l, l;
  }
  return i.clearCache = () => {
    n = je(), i.resetResultsCount();
  }, i.resultsCount = () => s, i.resetResultsCount = () => {
    s = 0;
  }, i;
}
function no(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, o = (...r) => {
    let s = 0, i = 0, c, d = {}, p = r.pop();
    typeof p == "object" && (d = p, p = r.pop()), hr(
      p,
      `createSelector expects an output function after the inputs, but received: [${typeof p}]`
    );
    const l = {
      ...n,
      ...d
    }, {
      memoize: m,
      memoizeOptions: h = [],
      argsMemoize: v = zt,
      argsMemoizeOptions: w = [],
      devModeChecks: b = {}
    } = l, a = on(h), u = on(w), E = br(r), g = m(function() {
      return s++, p.apply(
        null,
        arguments
      );
    }, ...a);
    let y = !0;
    const f = v(function() {
      i++;
      const T = rn(
        E,
        arguments
      );
      if (c = g.apply(null, T), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: k, inputStabilityCheck: x } = wr(y, b);
        if (k.shouldRun && k.run(
          p,
          T,
          c
        ), x.shouldRun) {
          const P = rn(
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
    return Object.assign(f, {
      resultFunc: p,
      memoizedResultFunc: g,
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
      argsMemoize: v
    });
  };
  return Object.assign(o, {
    withTypes: () => o
  }), o;
}
var Or = /* @__PURE__ */ no(zt), Cr = Object.assign(
  (e, t = Or) => {
    gr(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const n = Object.keys(e), o = n.map(
      (s) => e[s]
    );
    return t(
      o,
      (...s) => s.reduce((i, c, d) => (i[n[d]] = c, i), {})
    );
  },
  { withTypes: () => Cr }
);
function oo(e) {
  return ({ dispatch: n, getState: o }) => (r) => (s) => typeof s == "function" ? s(n, o, e) : r(s);
}
var Tr = oo(), kr = oo, Nr = (...e) => {
  const t = no(...e), n = Object.assign((...o) => {
    const r = t(...o), s = (i, ...c) => r(Z(i) ? nt(i) : i, ...c);
    return Object.assign(s, r), s;
  }, {
    withTypes: () => n
  });
  return n;
}, xr = Nr(zt), Ar = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Ke : Ke.apply(null, arguments);
}, Mr = (e) => e && typeof e.match == "function";
function Se(e, t) {
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
  return n.toString = () => `${e}`, n.type = e, n.match = (o) => Ft(o) && o.type === e, n;
}
function Rr(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  Mr(e);
}
function Ir(e) {
  return Ft(e) && Object.keys(e).every(Dr);
}
function Dr(e) {
  return ["type", "payload", "error", "meta"].indexOf(e) > -1;
}
function Pr(e) {
  const t = e ? `${e}`.split("/") : [], n = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${n}())\` instead of \`dispatch(${n})\`. This is necessary even if the action has no payload.`;
}
function $r(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (n) => (o) => n(o);
  const {
    isActionCreator: t = Rr
  } = e;
  return () => (n) => (o) => (t(o) && console.warn(Pr(o.type)), n(o));
}
function ro(e, t) {
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
var so = class Ne extends Array {
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
function an(e) {
  return te(e) ? Vt(e, () => {
  }) : e;
}
function cn(e, t, n) {
  if (e.has(t)) {
    let r = e.get(t);
    return n.update && (r = n.update(r, t, e), e.set(t, r)), r;
  }
  if (!n.insert)
    throw new Error(process.env.NODE_ENV === "production" ? D(10) : "No insert provided for key not already in map");
  const o = n.insert(t, e);
  return e.set(t, o), o;
}
function Fr(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function jr(e, t, n) {
  const o = ao(e, t, n);
  return {
    detectMutations() {
      return io(e, t, o, n);
    }
  };
}
function ao(e, t = [], n, o = "", r = /* @__PURE__ */ new Set()) {
  const s = {
    value: n
  };
  if (!e(n) && !r.has(n)) {
    r.add(n), s.children = {};
    for (const i in n) {
      const c = o ? o + "." + i : i;
      t.length && t.indexOf(c) !== -1 || (s.children[i] = ao(e, t, n[i], c));
    }
  }
  return s;
}
function io(e, t = [], n, o, r = !1, s = "") {
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
  const d = {};
  for (let l in n.children)
    d[l] = !0;
  for (let l in o)
    d[l] = !0;
  const p = t.length > 0;
  for (let l in d) {
    const m = s ? s + "." + l : l;
    if (p && t.some((w) => w instanceof RegExp ? w.test(m) : m === w))
      continue;
    const h = io(e, t, n.children[l], o[l], c, m);
    if (h.wasMutated)
      return h;
  }
  return {
    wasMutated: !1
  };
}
function Lr(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (n) => t(n);
  {
    let t = function(c, d, p, l) {
      return JSON.stringify(c, n(d, l), p);
    }, n = function(c, d) {
      let p = [], l = [];
      return d || (d = function(m, h) {
        return p[0] === h ? "[Circular ~]" : "[Circular ~." + l.slice(0, p.indexOf(h)).join(".") + "]";
      }), function(m, h) {
        if (p.length > 0) {
          var v = p.indexOf(this);
          ~v ? p.splice(v + 1) : p.push(this), ~v ? l.splice(v, 1 / 0, m) : l.push(m), ~p.indexOf(h) && (h = d.call(this, m, h));
        } else
          p.push(h);
        return c == null ? h : c.call(this, m, h);
      };
    }, {
      isImmutable: o = Fr,
      ignoredPaths: r,
      warnAfter: s = 32
    } = e;
    const i = jr.bind(null, o, r);
    return ({
      getState: c
    }) => {
      let d = c(), p = i(d), l;
      return (m) => (h) => {
        const v = ro(s, "ImmutableStateInvariantMiddleware");
        v.measureTime(() => {
          if (d = c(), l = p.detectMutations(), p = i(d), l.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? D(19) : `A state mutation was detected between dispatches, in the path '${l.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const w = m(h);
        return v.measureTime(() => {
          if (d = c(), l = p.detectMutations(), p = i(d), l.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? D(20) : `A state mutation was detected inside a dispatch, in the path: ${l.path || ""}. Take a look at the reducer(s) handling the action ${t(h)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), v.warnIfExceeded(), w;
      };
    };
  }
}
function co(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || Ie(e);
}
function At(e, t = "", n = co, o, r = [], s) {
  let i;
  if (!n(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || s != null && s.has(e))
    return !1;
  const c = o != null ? o(e) : Object.entries(e), d = r.length > 0;
  for (const [p, l] of c) {
    const m = t ? t + "." + p : p;
    if (!(d && r.some((v) => v instanceof RegExp ? v.test(m) : m === v))) {
      if (!n(l))
        return {
          keyPath: m,
          value: l
        };
      if (typeof l == "object" && (i = At(l, m, n, o, r, s), i))
        return i;
    }
  }
  return s && uo(e) && s.add(e), !1;
}
function uo(e) {
  if (!Object.isFrozen(e))
    return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !uo(t))
      return !1;
  return !0;
}
function Vr(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (n) => t(n);
  {
    const {
      isSerializable: t = co,
      getEntries: n,
      ignoredActions: o = [],
      ignoredActionPaths: r = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: s = [],
      warnAfter: i = 32,
      ignoreState: c = !1,
      ignoreActions: d = !1,
      disableCache: p = !1
    } = e, l = !p && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (m) => (h) => (v) => {
      if (!Ft(v))
        return h(v);
      const w = h(v), b = ro(i, "SerializableStateInvariantMiddleware");
      return !d && !(o.length && o.indexOf(v.type) !== -1) && b.measureTime(() => {
        const a = At(v, "", t, n, r, l);
        if (a) {
          const {
            keyPath: u,
            value: E
          } = a;
          console.error(`A non-serializable value was detected in an action, in the path: \`${u}\`. Value:`, E, `
Take a look at the logic that dispatched this action: `, v, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), c || (b.measureTime(() => {
        const a = m.getState(), u = At(a, "", t, n, s, l);
        if (u) {
          const {
            keyPath: E,
            value: g
          } = u;
          console.error(`A non-serializable value was detected in the state, in the path: \`${E}\`. Value:`, g, `
Take a look at the reducer(s) handling this action type: ${v.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), b.warnIfExceeded()), w;
    };
  }
}
function Le(e) {
  return typeof e == "boolean";
}
var zr = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: o = !0,
    serializableCheck: r = !0,
    actionCreatorCheck: s = !0
  } = t ?? {};
  let i = new so();
  if (n && (Le(n) ? i.push(Tr) : i.push(kr(n.extraArgument))), process.env.NODE_ENV !== "production") {
    if (o) {
      let c = {};
      Le(o) || (c = o), i.unshift(Lr(c));
    }
    if (r) {
      let c = {};
      Le(r) || (c = r), i.push(Vr(c));
    }
    if (s) {
      let c = {};
      Le(s) || (c = s), i.unshift($r(c));
    }
  }
  return i;
}, Br = "RTK_autoBatch", lo = (e) => (t) => {
  setTimeout(t, e);
}, Ur = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : lo(10), Yr = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const o = t(...n);
  let r = !0, s = !1, i = !1;
  const c = /* @__PURE__ */ new Set(), d = e.type === "tick" ? queueMicrotask : e.type === "raf" ? Ur : e.type === "callback" ? e.queueNotification : lo(e.timeout), p = () => {
    i = !1, s && (s = !1, c.forEach((l) => l()));
  };
  return Object.assign({}, o, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(l) {
      const m = () => r && l(), h = o.subscribe(m);
      return c.add(l), () => {
        h(), c.delete(l);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(l) {
      var m;
      try {
        return r = !((m = l == null ? void 0 : l.meta) != null && m[Br]), s = !r, s && (i || (i = !0, d(p))), o.dispatch(l);
      } finally {
        r = !0;
      }
    }
  });
}, Kr = (e) => function(n) {
  const {
    autoBatch: o = !0
  } = n ?? {};
  let r = new so(e);
  return o && r.push(Yr(typeof o == "object" ? o : void 0)), r;
}, ne = process.env.NODE_ENV === "production";
function Hr(e) {
  const t = zr(), {
    reducer: n = void 0,
    middleware: o,
    devTools: r = !0,
    preloadedState: s = void 0,
    enhancers: i = void 0
  } = e || {};
  let c;
  if (typeof n == "function")
    c = n;
  else if (Ie(n))
    c = tr(n);
  else
    throw new Error(process.env.NODE_ENV === "production" ? D(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (!ne && o && typeof o != "function")
    throw new Error(process.env.NODE_ENV === "production" ? D(2) : "`middleware` field must be a callback");
  let d;
  if (typeof o == "function") {
    if (d = o(t), !ne && !Array.isArray(d))
      throw new Error(process.env.NODE_ENV === "production" ? D(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    d = t();
  if (!ne && d.some((w) => typeof w != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? D(4) : "each middleware provided to configureStore must be a function");
  let p = Ke;
  r && (p = Ar({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !ne,
    ...typeof r == "object" && r
  }));
  const l = nr(...d), m = Kr(l);
  if (!ne && i && typeof i != "function")
    throw new Error(process.env.NODE_ENV === "production" ? D(5) : "`enhancers` field must be a callback");
  let h = typeof i == "function" ? i(m) : m();
  if (!ne && !Array.isArray(h))
    throw new Error(process.env.NODE_ENV === "production" ? D(6) : "`enhancers` callback must return an array");
  if (!ne && h.some((w) => typeof w != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? D(7) : "each enhancer provided to configureStore must be a function");
  !ne && d.length && !h.includes(l) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const v = p(...h);
  return qn(c, s, v);
}
function fo(e) {
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
function Wr(e) {
  return typeof e == "function";
}
function Gr(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? D(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [n, o, r] = fo(t), s;
  if (Wr(e))
    s = () => an(e());
  else {
    const c = an(e);
    s = () => c;
  }
  function i(c = s(), d) {
    let p = [n[d.type], ...o.filter(({
      matcher: l
    }) => l(d)).map(({
      reducer: l
    }) => l)];
    return p.filter((l) => !!l).length === 0 && (p = [r]), p.reduce((l, m) => {
      if (m)
        if (Z(l)) {
          const v = m(l, d);
          return v === void 0 ? l : v;
        } else {
          if (te(l))
            return Vt(l, (h) => m(h, d));
          {
            const h = m(l, d);
            if (h === void 0) {
              if (l === null)
                return l;
              throw new Error(process.env.NODE_ENV === "production" ? D(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return h;
          }
        }
      return l;
    }, c);
  }
  return i.getInitialState = s, i;
}
var qr = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", U = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += qr[Math.random() * 64 | 0];
  return t;
}, Xr = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Qr(e, t) {
  return `${e}/${t}`;
}
function Jr({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[Xr];
  return function(r) {
    const {
      name: s,
      reducerPath: i = s
    } = r;
    if (!s)
      throw new Error(process.env.NODE_ENV === "production" ? D(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && r.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const c = (typeof r.reducers == "function" ? r.reducers(es()) : r.reducers) || {}, d = Object.keys(c), p = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, l = {
      addCase(g, y) {
        const f = typeof g == "string" ? g : g.type;
        if (!f)
          throw new Error(process.env.NODE_ENV === "production" ? D(12) : "`context.addCase` cannot be called with an empty action type");
        if (f in p.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? D(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + f);
        return p.sliceCaseReducersByType[f] = y, l;
      },
      addMatcher(g, y) {
        return p.sliceMatchers.push({
          matcher: g,
          reducer: y
        }), l;
      },
      exposeAction(g, y) {
        return p.actionCreators[g] = y, l;
      },
      exposeCaseReducer(g, y) {
        return p.sliceCaseReducersByName[g] = y, l;
      }
    };
    d.forEach((g) => {
      const y = c[g], f = {
        reducerName: g,
        type: Qr(s, g),
        createNotation: typeof r.reducers == "function"
      };
      ns(y) ? rs(f, y, l, t) : ts(f, y, l);
    });
    function m() {
      if (process.env.NODE_ENV !== "production" && typeof r.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? D(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [g = {}, y = [], f = void 0] = typeof r.extraReducers == "function" ? fo(r.extraReducers) : [r.extraReducers], S = {
        ...g,
        ...p.sliceCaseReducersByType
      };
      return Gr(r.initialState, (T) => {
        for (let k in S)
          T.addCase(k, S[k]);
        for (let k of p.sliceMatchers)
          T.addMatcher(k.matcher, k.reducer);
        for (let k of y)
          T.addMatcher(k.matcher, k.reducer);
        f && T.addDefaultCase(f);
      });
    }
    const h = (g) => g, v = /* @__PURE__ */ new Map();
    let w;
    function b(g, y) {
      return w || (w = m()), w(g, y);
    }
    function a() {
      return w || (w = m()), w.getInitialState();
    }
    function u(g, y = !1) {
      function f(T) {
        let k = T[g];
        if (typeof k > "u") {
          if (y)
            k = a();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? D(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return k;
      }
      function S(T = h) {
        const k = cn(v, y, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return cn(k, T, {
          insert: () => {
            const x = {};
            for (const [P, V] of Object.entries(r.selectors ?? {}))
              x[P] = Zr(V, T, a, y);
            return x;
          }
        });
      }
      return {
        reducerPath: g,
        getSelectors: S,
        get selectors() {
          return S(f);
        },
        selectSlice: f
      };
    }
    const E = {
      name: s,
      reducer: b,
      actions: p.actionCreators,
      caseReducers: p.sliceCaseReducersByName,
      getInitialState: a,
      ...u(i),
      injectInto(g, {
        reducerPath: y,
        ...f
      } = {}) {
        const S = y ?? i;
        return g.inject({
          reducerPath: S,
          reducer: b
        }, f), {
          ...E,
          ...u(S, !0)
        };
      }
    };
    return E;
  };
}
function Zr(e, t, n, o) {
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
var ot = /* @__PURE__ */ Jr();
function es() {
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
function ts({
  type: e,
  reducerName: t,
  createNotation: n
}, o, r) {
  let s, i;
  if ("reducer" in o) {
    if (n && !os(o))
      throw new Error(process.env.NODE_ENV === "production" ? D(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    s = o.reducer, i = o.prepare;
  } else
    s = o;
  r.addCase(e, s).exposeCaseReducer(t, s).exposeAction(t, i ? Se(e, i) : Se(e));
}
function ns(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function os(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function rs({
  type: e,
  reducerName: t
}, n, o, r) {
  if (!r)
    throw new Error(process.env.NODE_ENV === "production" ? D(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: s,
    fulfilled: i,
    pending: c,
    rejected: d,
    settled: p,
    options: l
  } = n, m = r(e, s, l);
  o.exposeAction(t, m), i && o.addCase(m.fulfilled, i), c && o.addCase(m.pending, c), d && o.addCase(m.rejected, d), p && o.addMatcher(m.settled, p), o.exposeCaseReducer(t, {
    fulfilled: i || Ve,
    pending: c || Ve,
    rejected: d || Ve,
    settled: p || Ve
  });
}
function Ve() {
}
function ss() {
  return {
    ids: [],
    entities: {}
  };
}
function as(e) {
  function t(n = {}, o) {
    const r = Object.assign(ss(), n);
    return o ? e.setAll(r, o) : r;
  }
  return {
    getInitialState: t
  };
}
function is() {
  function e(t, n = {}) {
    const {
      createSelector: o = xr
    } = n, r = (m) => m.ids, s = (m) => m.entities, i = o(r, s, (m, h) => m.map((v) => h[v])), c = (m, h) => h, d = (m, h) => m[h], p = o(r, (m) => m.length);
    if (!t)
      return {
        selectIds: r,
        selectEntities: s,
        selectAll: i,
        selectTotal: p,
        selectById: o(s, c, d)
      };
    const l = o(t, s);
    return {
      selectIds: o(t, r),
      selectEntities: l,
      selectAll: o(t, i),
      selectTotal: o(t, p),
      selectById: o(l, c, d)
    };
  }
  return {
    getSelectors: e
  };
}
var cs = Z;
function us(e) {
  const t = F((n, o) => e(o));
  return function(o) {
    return t(o, void 0);
  };
}
function F(e) {
  return function(n, o) {
    function r(i) {
      return Ir(i);
    }
    const s = (i) => {
      r(o) ? e(o.payload, i) : e(o, i);
    };
    return cs(n) ? (s(n), n) : Vt(n, s);
  };
}
function be(e, t) {
  const n = t(e);
  return process.env.NODE_ENV !== "production" && n === void 0 && console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", e, "The `selectId` implementation:", t.toString()), n;
}
function fe(e) {
  return Array.isArray(e) || (e = Object.values(e)), e;
}
function Mt(e) {
  return Z(e) ? nt(e) : e;
}
function po(e, t, n) {
  e = fe(e);
  const o = Mt(n.ids), r = new Set(o), s = [], i = [];
  for (const c of e) {
    const d = be(c, t);
    r.has(d) ? i.push({
      id: d,
      changes: c
    }) : s.push(c);
  }
  return [s, i, o];
}
function mo(e) {
  function t(w, b) {
    const a = be(w, e);
    a in b.entities || (b.ids.push(a), b.entities[a] = w);
  }
  function n(w, b) {
    w = fe(w);
    for (const a of w)
      t(a, b);
  }
  function o(w, b) {
    const a = be(w, e);
    a in b.entities || b.ids.push(a), b.entities[a] = w;
  }
  function r(w, b) {
    w = fe(w);
    for (const a of w)
      o(a, b);
  }
  function s(w, b) {
    w = fe(w), b.ids = [], b.entities = {}, n(w, b);
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
  function d(w) {
    Object.assign(w, {
      ids: [],
      entities: {}
    });
  }
  function p(w, b, a) {
    const u = a.entities[b.id];
    if (u === void 0)
      return !1;
    const E = Object.assign({}, u, b.changes), g = be(E, e), y = g !== b.id;
    return y && (w[b.id] = g, delete a.entities[b.id]), a.entities[g] = E, y;
  }
  function l(w, b) {
    return m([w], b);
  }
  function m(w, b) {
    const a = {}, u = {};
    w.forEach((g) => {
      g.id in b.entities && (u[g.id] = {
        id: g.id,
        // Spreads ignore falsy values, so this works even if there isn't
        // an existing update already at this key
        changes: {
          ...u[g.id] ? u[g.id].changes : null,
          ...g.changes
        }
      });
    }), w = Object.values(u), w.length > 0 && w.filter((y) => p(a, y, b)).length > 0 && (b.ids = Object.values(b.entities).map((y) => be(y, e)));
  }
  function h(w, b) {
    return v([w], b);
  }
  function v(w, b) {
    const [a, u] = po(w, e, b);
    m(u, b), n(a, b);
  }
  return {
    removeAll: us(d),
    addOne: F(t),
    addMany: F(n),
    setOne: F(o),
    setMany: F(r),
    setAll: F(s),
    updateOne: F(l),
    updateMany: F(m),
    upsertOne: F(h),
    upsertMany: F(v),
    removeOne: F(i),
    removeMany: F(c)
  };
}
function ls(e, t, n) {
  let o = 0, r = e.length;
  for (; o < r; ) {
    let s = o + r >>> 1;
    const i = e[s];
    n(t, i) >= 0 ? o = s + 1 : r = s;
  }
  return o;
}
function ds(e, t, n) {
  const o = ls(e, t, n);
  return e.splice(o, 0, t), e;
}
function fs(e, t) {
  const {
    removeOne: n,
    removeMany: o,
    removeAll: r
  } = mo(e);
  function s(u, E) {
    return i([u], E);
  }
  function i(u, E, g) {
    u = fe(u);
    const y = new Set(g ?? nt(E.ids)), f = u.filter((S) => !y.has(be(S, e)));
    f.length !== 0 && a(E, f);
  }
  function c(u, E) {
    return d([u], E);
  }
  function d(u, E) {
    if (u = fe(u), u.length !== 0) {
      for (const g of u)
        delete E.entities[e(g)];
      a(E, u);
    }
  }
  function p(u, E) {
    u = fe(u), E.entities = {}, E.ids = [], i(u, E, []);
  }
  function l(u, E) {
    return m([u], E);
  }
  function m(u, E) {
    let g = !1, y = !1;
    for (let f of u) {
      const S = E.entities[f.id];
      if (!S)
        continue;
      g = !0, Object.assign(S, f.changes);
      const T = e(S);
      if (f.id !== T) {
        y = !0, delete E.entities[f.id];
        const k = E.ids.indexOf(f.id);
        E.ids[k] = T, E.entities[T] = S;
      }
    }
    g && a(E, [], g, y);
  }
  function h(u, E) {
    return v([u], E);
  }
  function v(u, E) {
    const [g, y, f] = po(u, e, E);
    y.length && m(y, E), g.length && i(g, E, f);
  }
  function w(u, E) {
    if (u.length !== E.length)
      return !1;
    for (let g = 0; g < u.length && g < E.length; g++)
      if (u[g] !== E[g])
        return !1;
    return !0;
  }
  const a = (u, E, g, y) => {
    const f = Mt(u.entities), S = Mt(u.ids), T = u.entities;
    let k = S;
    y && (k = Array.from(new Set(S)));
    let x = [];
    for (const z of k) {
      const q = f[z];
      q && x.push(q);
    }
    const P = x.length === 0;
    for (const z of E)
      T[e(z)] = z, P || ds(x, z, t);
    P ? x = E.slice().sort(t) : g && x.sort(t);
    const V = x.map(e);
    w(S, V) || (u.ids = V);
  };
  return {
    removeOne: n,
    removeMany: o,
    removeAll: r,
    addOne: F(s),
    updateOne: F(l),
    upsertOne: F(h),
    setOne: F(c),
    setMany: F(d),
    setAll: F(p),
    addMany: F(i),
    updateMany: F(m),
    upsertMany: F(v)
  };
}
function ps(e = {}) {
  const {
    selectId: t,
    sortComparer: n
  } = {
    sortComparer: !1,
    selectId: (i) => i.id,
    ...e
  }, o = n ? fs(t, n) : mo(t), r = as(o), s = is();
  return {
    selectId: t,
    sortComparer: n,
    ...r,
    ...s,
    ...o
  };
}
var ms = (e, t) => {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? D(32) : `${t} is not a function`);
}, Bt = "listenerMiddleware", ys = (e) => {
  let {
    type: t,
    actionCreator: n,
    matcher: o,
    predicate: r,
    effect: s
  } = e;
  if (t)
    r = Se(t).match;
  else if (n)
    t = n.type, r = n.match;
  else if (o)
    r = o;
  else if (!r) throw new Error(process.env.NODE_ENV === "production" ? D(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return ms(s, "options.listener"), {
    predicate: r,
    type: t,
    effect: s
  };
}, hs = Object.assign((e) => {
  const {
    type: t,
    predicate: n,
    effect: o
  } = ys(e);
  return {
    id: U(),
    effect: o,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? D(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => hs
}), gs = Object.assign(Se(`${Bt}/add`), {
  withTypes: () => gs
});
Se(`${Bt}/removeAll`);
var vs = Object.assign(Se(`${Bt}/remove`), {
  withTypes: () => vs
});
function D(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Rt = { exports: {} }, wt = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var un;
function bs() {
  if (un) return wt;
  un = 1;
  var e = _;
  function t(m, h) {
    return m === h && (m !== 0 || 1 / m === 1 / h) || m !== m && h !== h;
  }
  var n = typeof Object.is == "function" ? Object.is : t, o = e.useState, r = e.useEffect, s = e.useLayoutEffect, i = e.useDebugValue;
  function c(m, h) {
    var v = h(), w = o({ inst: { value: v, getSnapshot: h } }), b = w[0].inst, a = w[1];
    return s(function() {
      b.value = v, b.getSnapshot = h, d(b) && a({ inst: b });
    }, [m, v, h]), r(function() {
      return d(b) && a({ inst: b }), m(function() {
        d(b) && a({ inst: b });
      });
    }, [m]), i(v), v;
  }
  function d(m) {
    var h = m.getSnapshot;
    m = m.value;
    try {
      var v = h();
      return !n(m, v);
    } catch {
      return !0;
    }
  }
  function p(m, h) {
    return h();
  }
  var l = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : c;
  return wt.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l, wt;
}
var Et = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ln;
function ws() {
  return ln || (ln = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = _, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(g) {
      {
        for (var y = arguments.length, f = new Array(y > 1 ? y - 1 : 0), S = 1; S < y; S++)
          f[S - 1] = arguments[S];
        o("error", g, f);
      }
    }
    function o(g, y, f) {
      {
        var S = t.ReactDebugCurrentFrame, T = S.getStackAddendum();
        T !== "" && (y += "%s", f = f.concat([T]));
        var k = f.map(function(x) {
          return String(x);
        });
        k.unshift("Warning: " + y), Function.prototype.apply.call(console[g], console, k);
      }
    }
    function r(g, y) {
      return g === y && (g !== 0 || 1 / g === 1 / y) || g !== g && y !== y;
    }
    var s = typeof Object.is == "function" ? Object.is : r, i = e.useState, c = e.useEffect, d = e.useLayoutEffect, p = e.useDebugValue, l = !1, m = !1;
    function h(g, y, f) {
      l || e.startTransition !== void 0 && (l = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var S = y();
      if (!m) {
        var T = y();
        s(S, T) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), m = !0);
      }
      var k = i({
        inst: {
          value: S,
          getSnapshot: y
        }
      }), x = k[0].inst, P = k[1];
      return d(function() {
        x.value = S, x.getSnapshot = y, v(x) && P({
          inst: x
        });
      }, [g, S, y]), c(function() {
        v(x) && P({
          inst: x
        });
        var V = function() {
          v(x) && P({
            inst: x
          });
        };
        return g(V);
      }, [g]), p(S), S;
    }
    function v(g) {
      var y = g.getSnapshot, f = g.value;
      try {
        var S = y();
        return !s(f, S);
      } catch {
        return !0;
      }
    }
    function w(g, y, f) {
      return y();
    }
    var b = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", a = !b, u = a ? w : h, E = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u;
    Et.useSyncExternalStore = E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Et;
}
process.env.NODE_ENV === "production" ? Rt.exports = bs() : Rt.exports = ws();
var yo = Rt.exports, It = { exports: {} }, St = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dn;
function Es() {
  if (dn) return St;
  dn = 1;
  var e = _, t = yo;
  function n(p, l) {
    return p === l && (p !== 0 || 1 / p === 1 / l) || p !== p && l !== l;
  }
  var o = typeof Object.is == "function" ? Object.is : n, r = t.useSyncExternalStore, s = e.useRef, i = e.useEffect, c = e.useMemo, d = e.useDebugValue;
  return St.useSyncExternalStoreWithSelector = function(p, l, m, h, v) {
    var w = s(null);
    if (w.current === null) {
      var b = { hasValue: !1, value: null };
      w.current = b;
    } else b = w.current;
    w = c(function() {
      function u(S) {
        if (!E) {
          if (E = !0, g = S, S = h(S), v !== void 0 && b.hasValue) {
            var T = b.value;
            if (v(T, S)) return y = T;
          }
          return y = S;
        }
        if (T = y, o(g, S)) return T;
        var k = h(S);
        return v !== void 0 && v(T, k) ? T : (g = S, y = k);
      }
      var E = !1, g, y, f = m === void 0 ? null : m;
      return [function() {
        return u(l());
      }, f === null ? void 0 : function() {
        return u(f());
      }];
    }, [l, m, h, v]);
    var a = r(p, w[0], w[1]);
    return i(function() {
      b.hasValue = !0, b.value = a;
    }, [a]), d(a), a;
  }, St;
}
var _t = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fn;
function Ss() {
  return fn || (fn = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = _, t = yo;
    function n(l, m) {
      return l === m && (l !== 0 || 1 / l === 1 / m) || l !== l && m !== m;
    }
    var o = typeof Object.is == "function" ? Object.is : n, r = t.useSyncExternalStore, s = e.useRef, i = e.useEffect, c = e.useMemo, d = e.useDebugValue;
    function p(l, m, h, v, w) {
      var b = s(null), a;
      b.current === null ? (a = {
        hasValue: !1,
        value: null
      }, b.current = a) : a = b.current;
      var u = c(function() {
        var f = !1, S, T, k = function(z) {
          if (!f) {
            f = !0, S = z;
            var q = v(z);
            if (w !== void 0 && a.hasValue) {
              var ae = a.value;
              if (w(ae, q))
                return T = ae, ae;
            }
            return T = q, q;
          }
          var Ce = S, ie = T;
          if (o(Ce, z))
            return ie;
          var ce = v(z);
          return w !== void 0 && w(ie, ce) ? ie : (S = z, T = ce, ce);
        }, x = h === void 0 ? null : h, P = function() {
          return k(m());
        }, V = x === null ? void 0 : function() {
          return k(x());
        };
        return [P, V];
      }, [m, h, v, w]), E = u[0], g = u[1], y = r(l, E, g);
      return i(function() {
        a.hasValue = !0, a.value = y;
      }, [y]), d(y), y;
    }
    _t.useSyncExternalStoreWithSelector = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), _t;
}
process.env.NODE_ENV === "production" ? It.exports = Es() : It.exports = Ss();
var _s = It.exports;
function Os(e) {
  e();
}
let ho = Os;
const Cs = (e) => ho = e, ei = () => ho, pn = Symbol.for("react-redux-context"), mn = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Ts() {
  var e;
  if (!Fe.createContext) return {};
  const t = (e = mn[pn]) != null ? e : mn[pn] = /* @__PURE__ */ new Map();
  let n = t.get(Fe.createContext);
  return n || (n = Fe.createContext(null), process.env.NODE_ENV !== "production" && (n.displayName = "ReactRedux"), t.set(Fe.createContext, n)), n;
}
const Dt = /* @__PURE__ */ Ts();
function go(e = Dt) {
  return function() {
    const n = Mo(e);
    if (process.env.NODE_ENV !== "production" && !n)
      throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
    return n;
  };
}
const ks = /* @__PURE__ */ go(), Ns = () => {
  throw new Error("uSES not initialized!");
};
let vo = Ns;
const xs = (e) => {
  vo = e;
}, As = (e, t) => e === t;
function Ms(e = Dt) {
  const t = e === Dt ? ks : go(e);
  return function(o, r = {}) {
    const {
      equalityFn: s = As,
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
      store: d,
      subscription: p,
      getServerState: l,
      stabilityCheck: m,
      noopCheck: h
    } = t(), v = Ro(!0), w = Io({
      [o.name](a) {
        const u = o(a);
        if (process.env.NODE_ENV !== "production") {
          const E = typeof i > "u" ? m : i;
          if (E === "always" || E === "once" && v.current) {
            const y = o(a);
            if (!s(u, y)) {
              let f;
              try {
                throw new Error();
              } catch (S) {
                ({
                  stack: f
                } = S);
              }
              console.warn("Selector " + (o.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`, {
                state: a,
                selected: u,
                selected2: y,
                stack: f
              });
            }
          }
          const g = typeof c > "u" ? h : c;
          if ((g === "always" || g === "once" && v.current) && u === a) {
            let y;
            try {
              throw new Error();
            } catch (f) {
              ({
                stack: y
              } = f);
            }
            console.warn("Selector " + (o.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`, {
              stack: y
            });
          }
          v.current && (v.current = !1);
        }
        return u;
      }
    }[o.name], [o, m, i]), b = vo(p.addNestedSub, d.getState, l || d.getState, w, s);
    return Do(b), b;
  };
}
const $ = /* @__PURE__ */ Ms();
var ze = { exports: {} }, A = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yn;
function Rs() {
  if (yn) return A;
  yn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, r = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, a = e ? Symbol.for("react.fundamental") : 60117, u = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
  function g(f) {
    if (typeof f == "object" && f !== null) {
      var S = f.$$typeof;
      switch (S) {
        case t:
          switch (f = f.type, f) {
            case d:
            case p:
            case o:
            case s:
            case r:
            case m:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case c:
                case l:
                case w:
                case v:
                case i:
                  return f;
                default:
                  return S;
              }
          }
        case n:
          return S;
      }
    }
  }
  function y(f) {
    return g(f) === p;
  }
  return A.AsyncMode = d, A.ConcurrentMode = p, A.ContextConsumer = c, A.ContextProvider = i, A.Element = t, A.ForwardRef = l, A.Fragment = o, A.Lazy = w, A.Memo = v, A.Portal = n, A.Profiler = s, A.StrictMode = r, A.Suspense = m, A.isAsyncMode = function(f) {
    return y(f) || g(f) === d;
  }, A.isConcurrentMode = y, A.isContextConsumer = function(f) {
    return g(f) === c;
  }, A.isContextProvider = function(f) {
    return g(f) === i;
  }, A.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }, A.isForwardRef = function(f) {
    return g(f) === l;
  }, A.isFragment = function(f) {
    return g(f) === o;
  }, A.isLazy = function(f) {
    return g(f) === w;
  }, A.isMemo = function(f) {
    return g(f) === v;
  }, A.isPortal = function(f) {
    return g(f) === n;
  }, A.isProfiler = function(f) {
    return g(f) === s;
  }, A.isStrictMode = function(f) {
    return g(f) === r;
  }, A.isSuspense = function(f) {
    return g(f) === m;
  }, A.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === p || f === s || f === r || f === m || f === h || typeof f == "object" && f !== null && (f.$$typeof === w || f.$$typeof === v || f.$$typeof === i || f.$$typeof === c || f.$$typeof === l || f.$$typeof === a || f.$$typeof === u || f.$$typeof === E || f.$$typeof === b);
  }, A.typeOf = g, A;
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
var hn;
function Is() {
  return hn || (hn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, r = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, a = e ? Symbol.for("react.fundamental") : 60117, u = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
    function g(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === o || O === p || O === s || O === r || O === m || O === h || typeof O == "object" && O !== null && (O.$$typeof === w || O.$$typeof === v || O.$$typeof === i || O.$$typeof === c || O.$$typeof === l || O.$$typeof === a || O.$$typeof === u || O.$$typeof === E || O.$$typeof === b);
    }
    function y(O) {
      if (typeof O == "object" && O !== null) {
        var ke = O.$$typeof;
        switch (ke) {
          case t:
            var C = O.type;
            switch (C) {
              case d:
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
                  case v:
                  case i:
                    return ge;
                  default:
                    return ke;
                }
            }
          case n:
            return ke;
        }
      }
    }
    var f = d, S = p, T = c, k = i, x = t, P = l, V = o, z = w, q = v, ae = n, Ce = s, ie = r, ce = m, Te = !1;
    function De(O) {
      return Te || (Te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Pe(O) || y(O) === d;
    }
    function Pe(O) {
      return y(O) === p;
    }
    function at(O) {
      return y(O) === c;
    }
    function it(O) {
      return y(O) === i;
    }
    function ct(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function ut(O) {
      return y(O) === l;
    }
    function lt(O) {
      return y(O) === o;
    }
    function dt(O) {
      return y(O) === w;
    }
    function ft(O) {
      return y(O) === v;
    }
    function pt(O) {
      return y(O) === n;
    }
    function mt(O) {
      return y(O) === s;
    }
    function yt(O) {
      return y(O) === r;
    }
    function ht(O) {
      return y(O) === m;
    }
    M.AsyncMode = f, M.ConcurrentMode = S, M.ContextConsumer = T, M.ContextProvider = k, M.Element = x, M.ForwardRef = P, M.Fragment = V, M.Lazy = z, M.Memo = q, M.Portal = ae, M.Profiler = Ce, M.StrictMode = ie, M.Suspense = ce, M.isAsyncMode = De, M.isConcurrentMode = Pe, M.isContextConsumer = at, M.isContextProvider = it, M.isElement = ct, M.isForwardRef = ut, M.isFragment = lt, M.isLazy = dt, M.isMemo = ft, M.isPortal = pt, M.isProfiler = mt, M.isStrictMode = yt, M.isSuspense = ht, M.isValidElementType = g, M.typeOf = y;
  }()), M;
}
var gn;
function Ds() {
  return gn || (gn = 1, process.env.NODE_ENV === "production" ? ze.exports = Rs() : ze.exports = Is()), ze.exports;
}
var bo = Ds(), Ps = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, $s = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, wo = {};
wo[bo.ForwardRef] = Ps;
wo[bo.Memo] = $s;
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
var vn;
function Fs() {
  if (vn) return R;
  vn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), w;
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
                case d:
                case h:
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
  return R.ContextConsumer = i, R.ContextProvider = s, R.Element = e, R.ForwardRef = d, R.Fragment = n, R.Lazy = h, R.Memo = m, R.Portal = t, R.Profiler = r, R.StrictMode = o, R.Suspense = p, R.SuspenseList = l, R.isAsyncMode = function() {
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
    return b(a) === d;
  }, R.isFragment = function(a) {
    return b(a) === n;
  }, R.isLazy = function(a) {
    return b(a) === h;
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
    return typeof a == "string" || typeof a == "function" || a === n || a === r || a === o || a === p || a === l || a === v || typeof a == "object" && a !== null && (a.$$typeof === h || a.$$typeof === m || a.$$typeof === s || a.$$typeof === i || a.$$typeof === d || a.$$typeof === w || a.getModuleId !== void 0);
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
var bn;
function js() {
  return bn || (bn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), w = !1, b = !1, a = !1, u = !1, E = !1, g;
    g = Symbol.for("react.module.reference");
    function y(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === n || C === r || E || C === o || C === p || C === l || u || C === v || w || b || a || typeof C == "object" && C !== null && (C.$$typeof === h || C.$$typeof === m || C.$$typeof === s || C.$$typeof === i || C.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C.$$typeof === g || C.getModuleId !== void 0));
    }
    function f(C) {
      if (typeof C == "object" && C !== null) {
        var ge = C.$$typeof;
        switch (ge) {
          case e:
            var $e = C.type;
            switch ($e) {
              case n:
              case r:
              case o:
              case p:
              case l:
                return $e;
              default:
                var Kt = $e && $e.$$typeof;
                switch (Kt) {
                  case c:
                  case i:
                  case d:
                  case h:
                  case m:
                  case s:
                    return Kt;
                  default:
                    return ge;
                }
            }
          case t:
            return ge;
        }
      }
    }
    var S = i, T = s, k = e, x = d, P = n, V = h, z = m, q = t, ae = r, Ce = o, ie = p, ce = l, Te = !1, De = !1;
    function Pe(C) {
      return Te || (Te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function at(C) {
      return De || (De = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function it(C) {
      return f(C) === i;
    }
    function ct(C) {
      return f(C) === s;
    }
    function ut(C) {
      return typeof C == "object" && C !== null && C.$$typeof === e;
    }
    function lt(C) {
      return f(C) === d;
    }
    function dt(C) {
      return f(C) === n;
    }
    function ft(C) {
      return f(C) === h;
    }
    function pt(C) {
      return f(C) === m;
    }
    function mt(C) {
      return f(C) === t;
    }
    function yt(C) {
      return f(C) === r;
    }
    function ht(C) {
      return f(C) === o;
    }
    function O(C) {
      return f(C) === p;
    }
    function ke(C) {
      return f(C) === l;
    }
    I.ContextConsumer = S, I.ContextProvider = T, I.Element = k, I.ForwardRef = x, I.Fragment = P, I.Lazy = V, I.Memo = z, I.Portal = q, I.Profiler = ae, I.StrictMode = Ce, I.Suspense = ie, I.SuspenseList = ce, I.isAsyncMode = Pe, I.isConcurrentMode = at, I.isContextConsumer = it, I.isContextProvider = ct, I.isElement = ut, I.isForwardRef = lt, I.isFragment = dt, I.isLazy = ft, I.isMemo = pt, I.isPortal = mt, I.isProfiler = yt, I.isStrictMode = ht, I.isSuspense = O, I.isSuspenseList = ke, I.isValidElementType = y, I.typeOf = f;
  }()), I;
}
process.env.NODE_ENV === "production" ? Fs() : js();
xs(_s.useSyncExternalStoreWithSelector);
Cs(Vo);
function Y(e) {
  const { name: t, default: n, id: o, actions: r, uniques: s = [], onSave: i, onRead: c } = e, d = ps({
    selectId: (a) => a[o]
  }), p = d.getSelectors(), l = d.getInitialState({
    saved: !0,
    status: "idle",
    writeStatus: "ready",
    id: o,
    name: t,
    loadingTime: 600,
    changed: !1
  });
  function m(a, u) {
    const E = Object.values(u), g = Object.values(a).map((f) => {
      const S = typeof n == "function" ? n(u, f) : n;
      return Hn(f, S || {});
    });
    if (!s.length)
      return g;
    const y = [...E, ...g.filter(Boolean)];
    return g.filter((f, S) => !y.slice(0, S).find((x) => s.some((P) => Array.isArray(P) ? P.every((V) => (x == null ? void 0 : x[V]) == (f == null ? void 0 : f[V])) : (x == null ? void 0 : x[P]) == f[P])));
  }
  const h = ot({
    name: t,
    initialState: l,
    reducers: {
      set(a, { payload: u = [] }) {
        d.setAll(a, m(u, a));
      },
      add(a, { payload: u = [] }) {
        const E = m(u, a);
        d.addMany(a, E), E.length && (a.changed = !0);
      },
      remove(a, { payload: u = [] }) {
        u.some((g) => a.ids.includes(g)) && (a.changed = !0), d.removeMany(a, u);
      },
      update(a, { payload: u = [] }) {
        u.map(({ id: y }) => y).some((y) => a.ids.includes(y)) && (a.changed = !0), d.updateMany(a, u);
      },
      reset(a) {
        a.ids.length || (a.changed = !0), d.removeAll(a);
      },
      upsert(a, { payload: u = [] }) {
        d.upsertMany(a, u), a.changed = !0;
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
  }), v = {
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
      N.dispatch(h.actions.remove(a));
    },
    add(a) {
      N.dispatch(h.actions.add(a));
    },
    upsert(a) {
      N.dispatch(h.actions.upsert(a));
    },
    getOne(a) {
      return $((u) => {
        const E = p.selectById(u[t], a);
        return typeof E > "u" ? void 0 : E;
      });
    },
    setOne(a, u) {
      N.dispatch(
        h.actions.update([
          {
            id: a,
            changes: u
          }
        ])
      );
    },
    setWriteStatus(a = "ready") {
      N.dispatch(h.actions.changeWriteStatus(a));
    },
    useOne(a) {
      const u = v.getOne(a);
      return Kn(
        u,
        (E) => E !== void 0 && v.setOne(a, E),
        (E) => E ?? void 0
      );
    },
    getOneFeild(a, u) {
      return $((g) => {
        var f;
        const y = (f = p.selectById(g[t], a)) == null ? void 0 : f[u];
        return typeof y > "u" ? void 0 : y;
      });
    },
    setOneFeild(a, u, E) {
      N.dispatch(
        h.actions.update([
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
      const E = v.getOneFeild(a, u);
      return Kn(
        E,
        (y) => {
          y != null && v.setOneFeild(a, u, y);
        },
        (y) => y
      );
    },
    getOneFeilds(a, u) {
      return $((g) => {
        const y = p.selectById(g[t], a);
        if (!y)
          return;
        const f = {};
        return u.forEach((S) => {
          f[S] = y[S];
        }), f;
      });
    },
    getAll() {
      return $((u) => p.selectAll(u[t]));
    },
    setAll(a) {
      N.dispatch(h.actions.set(a));
    },
    useAll() {
      const a = v.getAll(), u = B(a);
      return _.useEffect(() => {
        v.setAll(u.get);
      }, [u.get]), _.useEffect(() => {
        u.set(a);
      }, [a]), u;
    },
    getWriteStatus() {
      return $((u) => u[t].writeStatus);
    },
    useWriteStatus() {
      const a = v.getWriteStatus(), u = B(a);
      return _.useEffect(() => {
        v.setWriteStatus(u.get);
      }, [u.get]), _.useEffect(() => {
        u.set(a);
      }, [a]), u;
    },
    getStatus() {
      return $((u) => u[t].status);
    },
    setStatus(a) {
      N.dispatch(h.actions.changeStatus(a));
    },
    useStatus() {
      const a = v.getStatus(), u = B(a);
      return _.useEffect(() => {
        v.setStatus(u.get);
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
      N.dispatch(h.actions.setLoadingTime(a));
    },
    useLoadingTime() {
      const a = v.getLoadingTime(), u = B(a);
      _.useEffect(() => {
        v.setLoadingTime(u.get);
      }, [u.get]), _.useEffect(() => {
        u.set(a);
      }, [a]);
    },
    getChanged() {
      return $((u) => u[t].changed);
    },
    setChanged(a) {
      N.dispatch(h.actions.setChanged(a));
    },
    useChanged() {
      const a = v.getChanged(), u = B(a);
      _.useEffect(() => {
        v.setChanged(u.get);
      }, [u.get]), _.useEffect(() => {
        u.set(a);
      }, [a]);
    }
  };
  function w() {
    const a = v.getStatus(), u = v.getId(), E = v.getWriteStatus(), g = v.getLoadingTime();
    return Oe(async () => {
      if (a == "idle") {
        const y = new Xe();
        y.clear(), v.setStatus("loading"), await y.start(g);
        try {
          if (!c)
            return;
          let f = c();
          f instanceof Promise && (f = await f), v.setChanged(!1), v.setStatus("success"), v.setAll(f);
        } catch {
          v.setAll([]), v.setStatus("error");
        }
      }
    }, [a]), Oe(async () => {
      if (E == "idle") {
        v.setWriteStatus("loading");
        const y = {};
        try {
          const f = N.getState(), { [t]: S } = f;
          Object.values(S.entities).forEach((k) => {
            if (!k)
              return;
            const { [u]: x, ...P } = k;
            y[x] = P;
          });
          const T = i == null ? void 0 : i(y, e, f);
          T instanceof Promise && await T, v.setWriteStatus("success"), v.setWriteStatus("ready");
        } catch {
          v.setWriteStatus("error");
        }
      }
    }, [E]), _.useEffect(() => {
      const y = Object.entries(e.data || {}).map(([f, S]) => ({
        [u]: f,
        ...S
      }));
      v.setAll(y);
    }, []), { id: u, saved: E, status: a, timeLoading: g };
  }
  return {
    slice: h,
    entity: d,
    hooks: v,
    entitySelect: p,
    initialState: l,
    init: w,
    select: (a) => a[t]
  };
}
const Ls = {
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
}, { data: Vs } = Ls, zs = {
  name: "views",
  id: "viewId",
  default(e, t) {
    const n = t.tabs || {};
    for (const o in n)
      n[o].label || (n[o].label = o);
    return {
      viewId: U(),
      focused: null,
      tabs: n
    };
  },
  data: Vs
}, { hooks: Eo, slice: wn, init: ti, select: ni } = Y(zs);
function oi(e) {
  const t = Eo.getOne(e);
  return _.useMemo(() => {
    var n;
    return typeof (t == null ? void 0 : t.focused) == "number" ? (n = t == null ? void 0 : t.tabs) == null ? void 0 : n[t.focused] : null;
  }, [t]);
}
const Bs = {
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
}, { init: ri, hooks: En, slice: Sn } = Y(Bs);
function si(e) {
  const t = En.getOne(e);
  _.useEffect(() => {
    t || En.add([
      {
        treeId: e,
        ends: []
      }
    ]);
  }, [t]);
}
const Us = {
  content: null,
  position: null,
  x: "left",
  y: "bottom"
}, _e = ot({
  initialState: Us,
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
function ai(e) {
  N.dispatch(_e.actions.setContent(e));
}
function ii() {
  return $((t) => t.title.content, ye);
}
function ci(e) {
  N.dispatch(_e.actions.setPosition(e));
}
function ui() {
  return $((t) => t.title.position, ye);
}
function li(e = "left") {
  N.dispatch(_e.actions.setX(e));
}
function di() {
  return $((t) => t.title.x, ye);
}
function fi(e = "bottom") {
  N.dispatch(_e.actions.setY(e));
}
function pi() {
  return $((t) => t.title.y, ye);
}
const Ys = {
  id: "id",
  name: "toasts",
  default: () => ({
    id: U(),
    type: "info"
  })
}, { hooks: Ks, init: mi, select: yi, slice: _n, entity: hi } = Y(Ys), he = {
  id: "slotId",
  name: "slot",
  default: {
    slotId: U(14),
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
      e.entities[t] && Hs.updateOne(e, {
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
      Po(0, Number(n.length) - 1, 1).forEach((r) => {
        o[r] = !0;
      }), n.selected = o, n.direction = null;
    }
  }
}, { hooks: Ue, slice: On, entity: Hs, init: gi } = Y(he);
function vi(e) {
  N.dispatch({
    type: `${he.name}/next`,
    payload: e
  });
}
function bi(e) {
  return N.dispatch({
    type: `${he.name}/back`,
    payload: e
  });
}
function wi(e) {
  return N.dispatch({
    type: `${he.name}/escape`,
    payload: e
  });
}
function Ei(e) {
  N.dispatch({ type: `${he.name}/submit`, payload: e });
}
function Si(e) {
  N.dispatch({ type: `${he.name}/submitNext`, payload: e });
}
function _i(e) {
  N.dispatch({ type: `${he.name}/submitBack`, payload: e });
}
function Oi(e, t) {
  const n = Ue.getOne(e);
  _.useEffect(() => {
    n || Ue.upsert([
      {
        slotId: e,
        length: t.length
      }
    ]);
  }, [n, t]), _.useEffect(() => {
    Ue.setOneFeild(e, "length", t.length);
  }, [t]);
}
function Ci(e, t, n = "submited") {
  const o = Ue.getOneFeild(t, n);
  return _.useMemo(() => typeof o != "number" ? null : e[o] || null, [o, e]);
}
const Ws = {
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
}, { data: Gs } = Ws, qs = {
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
  data: Gs
}, { hooks: ee, slice: Cn, init: Ti, entitySelect: ki } = Y(qs), Xs = {
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
}, { entity: Ni, slice: Tn, hooks: xi, entitySelect: Ai, init: Mi } = Y(Xs), Qs = {
  data: {}
}, { data: Js } = Qs, Zs = {
  id: "id",
  name: "notifications",
  default: () => ({
    id: U(),
    desc: void 0,
    removable: !0,
    status: "idle",
    showDesc: !1,
    type: "info",
    buttons: []
  }),
  data: Js
}, { hooks: Re, init: Ri, select: Ii, slice: kn, entity: Di } = Y(Zs);
function So() {
  ee.setOneFeild("visibility/notifays.boolean", "value", !0), ee.setOneFeild("visibility/notifays/nots.boolean", "value", !0);
}
function _o() {
  ee.setOneFeild("visibility/notifays.boolean", "value", !1), ee.setOneFeild("visibility/notifays/nots.boolean", "value", !1);
}
async function Pi(e, t = {}) {
  const n = Hn(t, {
    open: !0,
    close: !0,
    time: 2e3
  });
  n != null && n.open && So();
  const o = {
    id: U(),
    title: " - ",
    ...e
  };
  Re.upsert([o]), await Wn(n.time), Re.remove([o.id]), n != null && n.close && _o();
}
async function $i(e, t) {
  const n = t();
  return n instanceof Promise ? new Promise(async (o, r) => {
    So(), Re.upsert([e]), n.then(o).catch(r).finally(() => {
      Re.remove([e.id]), _o();
    });
  }) : n;
}
const ea = {
  id: "logId",
  name: "logs",
  data: {},
  default: () => ({
    logId: U(10),
    desc: "",
    type: "INFO",
    category: "window",
    showDesc: !1,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  })
}, { entity: Fi, slice: Nn, init: ji, hooks: Li } = Y(ea), ta = {
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
}, { data: na } = ta, oa = {
  id: "langId",
  name: "langs",
  data: na
}, Vi = () => ra.setWriteStatus("idle"), { init: zi, hooks: ra, entity: Bi, slice: xn } = Y(oa), sa = {
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
}, { data: aa } = sa, ia = "commands";
function Oo(e, t = N.getState()) {
  const { [ia]: n } = t, o = [], r = n.entities[e], s = r == null ? void 0 : r.commands;
  return r != null && r.blocked ? [] : (s == null || s.forEach((i) => {
    typeof i == "string" ? o.push(...Oo(i)) : typeof i != "number" && o.push(i);
  }), o);
}
function ca(e, t = N.getState()) {
  return !!(t != null && t.commands.entities[e]);
}
async function ua(e, t = N.getState()) {
  const n = e.toString();
  Q.inf("start invoke command : ", n), t = t || N.getState();
  const o = Oo(e, t), r = new Xe();
  for (let s = 0; s < o.length; s++) {
    const i = o[s];
    typeof i == "number" ? await r.start(i) : N.dispatch(i);
  }
  Q.succ("end invoking command : ", n);
}
const la = {
  id: "commandId",
  name: "commands",
  data: aa,
  default: (e, t) => {
    if (!t.commandId)
      return {};
    const [n = "", ...o] = t.commandId.split(".");
    return {
      label: `${Wt(n, "camel", "normal")} : ${o.map((s) => Wt(s, void 0, "normal")).join(" ")}`
    };
  }
}, { hooks: da, slice: An, entitySelect: Ui, init: Yi } = Y(la), fa = {
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
}, { data: pa } = fa, ma = {
  name: "keys",
  id: "keyId",
  data: Object.entries(pa).map(([e, t]) => ({
    keyId: e,
    ...t
  })),
  default: () => ({
    repeation: !0,
    type: "down",
    only: !0,
    preventDefault: !0,
    keyId: `key_${U()}`
  })
}, { init: ya, hooks: Ut, slice: Mn } = Y(ma), Be = "_" + U().replaceAll(/[^0-9A-Za-z$_]+/gi, "_");
function ha(e) {
  return Function(`
    return ({ state , focused })=> {
      ${Be}_window = window;
      window = null;
      let ${Be} = ${e};
      window = ${Be}_window;
      return ${Be}
    }
  `)();
}
function Ki() {
  ya();
  const e = Ut.getAll(), t = rt("commands.isBlocked"), n = _.useMemo(() => t ? [] : e.filter(({ value: o, command: r }) => o && r).map((o) => {
    const { value: r = "", when: s, repeation: i = !0, type: c = "down", only: d = !0, preventDefault: p = !0 } = o, l = new $o(r);
    return {
      fn: async (h) => {
        if (!i && h.repeat || !l.test(h))
          return;
        const v = N.getState();
        if (s) {
          const w = Fo(), b = ha(s);
          try {
            if (!b({ state: v, focused: w }))
              return;
          } catch {
            return;
          }
        }
        d && h.stopImmediatePropagation(), p && h.preventDefault(), Q.inf(`KEYID       = ${o.keyId}`), Q.inf(`RUN         = ${o.command || "no command run"}`), Q.inf(`COMB        = (${o.value})`), Q.inf(`WHEN        = ${o.when || "no provide"}`), o.command && ca(o.command, v) ? Q.succ("EXISTS") : Q.warn("COMMAND NOT FOUND"), ua(o.command, v);
      },
      type: c
    };
  }), [e, t]);
  Fa(
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
const Co = "keyboard", ga = {
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
}, va = (e) => e[Co], Rn = ot({
  name: Co,
  initialState: ga,
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
function Hi(e) {
  return $(va, (n, o) => ye(n[e], o[e]))[e];
}
const ba = {
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
}, { data: wa } = ba, Ea = {
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
  data: wa
}, { entity: Wi, slice: In, hooks: G, entitySelect: Gi, init: qi } = Y(Ea), Sa = {
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
}, { data: _a } = Sa, Oa = {
  id: "colorId",
  name: "color",
  data: _a
}, { hooks: Ca, slice: Dn, init: Xi, select: Qi, entity: Ji, entitySelect: Zi } = Y(Oa), Ta = {
  data: {}
}, { data: ka } = Ta, Na = {
  id: "linkId",
  name: "cahser",
  data: ka,
  default() {
    return {
      status: "idle"
    };
  }
}, { init: ec, hooks: tc, slice: Pn } = Y(Na), Ye = {
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
}, { entity: nc, slice: $n, hooks: X, entitySelect: oc } = Y(Ye);
function xa(e) {
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
function rc(e, t, n = [], o = () => {
}) {
  _.useEffect(() => () => {
    X.remove([e]);
  }, []), xa(e);
  const r = X.getOne(e);
  return Oe(async () => {
    if (!r)
      return;
    const { status: s } = r;
    if (s == "idle") {
      const { args: i } = r;
      X.setOneFeild(e, "status", "loading");
      try {
        let c = null, d = null;
        c = t(i), c instanceof Promise ? d = await c : d = c, X.setOneFeild(e, "output", d), X.setOneFeild(e, "status", "success"), d && o(d);
      } catch {
        X.setOneFeild(e, "output", null), X.setOneFeild(e, "status", "error");
      }
      X.setOneFeild(e, "args", null);
    }
  }, [r, ...n]), r;
}
function sc(e, t) {
  return new Promise((n, o) => {
    N.dispatch({ type: "actions/exec", payload: [e, t] });
    const r = $t(`${Ye.name}.entities.` + e + ".status", "success", (i) => {
      s(), n({
        output: i[Ye.name].entities[e].output,
        state: i
      });
    }), s = $t(`${Ye.name}.entities.` + e + ".status", "error", (i) => {
      r(), o(i);
    });
  });
}
const N = Hr({
  reducer: {
    // normal reducers
    [Rn.name]: Rn.reducer,
    [me.name]: me.reducer,
    [_e.name]: _e.reducer,
    // system space
    [An.name]: An.reducer,
    [Mn.name]: Mn.reducer,
    [kn.name]: kn.reducer,
    [wn.name]: wn.reducer,
    [Tn.name]: Tn.reducer,
    [On.name]: On.reducer,
    [Cn.name]: Cn.reducer,
    [In.name]: In.reducer,
    [$n.name]: $n.reducer,
    [Dn.name]: Dn.reducer,
    [Sn.name]: Sn.reducer,
    [Nn.name]: Nn.reducer,
    [xn.name]: xn.reducer,
    [Pn.name]: Pn.reducer,
    [_n.name]: _n.reducer
    /* main database */
  }
}), Aa = "object", Ma = {
  data: {},
  settings: {
    saved: !0,
    status: "idle",
    reloaded: !0,
    watch: !0,
    ignoreAccess: []
  }
}, me = ot({
  initialState: Ma,
  name: Aa,
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
}), ac = () => $((t) => t.object.settings.saved), ic = () => $((t) => t.object.settings.watch), cc = () => $((t) => t.object.settings.reloaded), uc = () => $((t) => t.object.settings.status), lc = () => {
  N.dispatch(me.actions.reload(!1));
}, dc = () => {
  N.dispatch(me.actions.reload(!0));
}, fc = () => {
  N.dispatch(me.actions.save(!1));
}, pc = () => {
  N.dispatch(me.actions.save(!0));
};
function rt(e) {
  return $((n) => {
    const { isValide: o, value: r } = Qe(n.object.data, e);
    return o ? r : null;
  }, ye);
}
function se(e, t) {
  N.dispatch(
    me.actions.setValue({
      value: t,
      direction: e,
      force: !0
    })
  );
}
function Ra(e) {
  const t = rt(e), n = B(t);
  return _.useEffect(() => {
    se(e, n.get);
  }, [n.get]), _.useEffect(() => {
    n.set(t);
  }, [t]), n;
}
function Ia(e, t) {
  const n = (t || N.getState()).object.data, { isValide: o, value: r } = Qe(n, e);
  return o ? r : null;
}
const we = class we {
  constructor(t, n = null) {
    if (this.name = t, this.parent = n, this.name.includes(".") || we.allTemps[this.name])
      throw `temp name ${this.name} exists before`;
    we.allTemps[this.name] = this;
  }
  getTemp(t) {
    return rt([this.name, t].join("."));
  }
  getTempFromStore(t, n) {
    return Ia([this.name, t].join("."), n);
  }
  setTemp(t, n) {
    se([this.name, t].join("."), n);
  }
  useTemp(t) {
    return Ra([this.name, t].join("."));
  }
  get childsTemps() {
    return Object.values(we.allTemps).filter(({ parent: t }) => t == this);
  }
};
Ht(we, "allTemps", {});
let L = we;
const mc = new L("path"), yc = new L("window"), st = new L("view"), hc = new L("toast"), Fn = new L("dialog"), gc = new L("loading"), jn = new L("progress"), vc = new L("password"), ve = new L("menu"), bc = new L("news"), wc = new L("visibility"), Ec = new L("ipinfo"), Sc = new L("submited"), le = new L("camera"), Da = new L("recaptcha"), Pa = ["jpg", "jpeg", "png", "gif", "bmp", "svg", "webp", "tiff", "ico", "jfif"];
function $a(e) {
  const t = U();
  return new Promise((n, o) => {
    var i;
    if (!((i = e.buttons) != null && i.length)) {
      o("Need Minimum One Button");
      return;
    }
    Fn.setTemp("id", t), Fn.setTemp("params", e);
    const r = async () => {
      var l, m, h;
      const { slot: c, object: d } = N.getState(), p = (l = c.entities["dialog-list"]) == null ? void 0 : l.submited;
      typeof p == "number" && (n({
        response: p,
        checkboxChecked: ((h = (m = d.data) == null ? void 0 : m.dialog) == null ? void 0 : h.checked) || !1
      }), s(), se("dialog.id", null));
    }, s = N.subscribe(r);
  });
}
async function _c() {
  const { screenX: e, screenY: t, innerWidth: n, innerHeight: o } = window;
  return {
    x: e,
    y: t,
    width: n,
    height: o
  };
}
async function Oc() {
  return await fetch("https://api.ipify.org?format=json").then((e) => e.json()).then((e) => e.ip);
}
const Cc = (e) => {
  var o;
  const t = (o = e.match(/\.[a-z]+$/gi)) == null ? void 0 : o[0].slice(1).toLowerCase();
  let n = {};
  return Pa.forEach((r) => {
    n[r] = r;
  }), n = {
    ...n,
    jpg: "jpeg",
    svg: "svg+xml"
  }, t ? n[t] : "png";
}, Tc = async ({ to: e, subject: t = "", body: n = "" }) => {
  const o = document.createElement("a");
  o.href = `mailto:${e}?subject=${encodeURIComponent(t)}&body=${encodeURIComponent(n)}`, o.target = "_blank", o.click();
}, kc = ({ tel: e }) => {
  const t = document.createElement("a");
  t.href = `tel:${e}`, t.target = "_blank", t.click();
}, Nc = ({ to: e, body: t = "" }) => {
  const n = document.createElement("a");
  n.href = `sms:${e}?body=${encodeURIComponent(t)}`, n.target = "_blank", n.click();
}, Pt = /* @__PURE__ */ new Map(), xc = (e, t) => {
  const n = async () => {
    const o = t();
    o instanceof Promise && await o;
  };
  Pt.set(e, n), document.addEventListener(e, n);
}, Ac = (e) => {
  const t = Pt.get(e);
  t && (document.removeEventListener(e, t), Pt.delete(e));
}, Mc = async ({ options: e, value: t }) => {
  jn.setTemp("main", t), jn.setTemp("main-mode", e == null ? void 0 : e.mode);
}, Rc = (e) => {
  ve.setTemp("position", [e.x, e.y]);
  const t = U();
  ve.setTemp("id", t), ve.setTemp(
    "list",
    e.menu.map(({ click: n, ...o }) => o)
  ), $t(
    "object.data.menu.result",
    (n) => typeof n == "number",
    (n) => {
      var r, s;
      const o = (r = n.object.data) == null ? void 0 : r.menu;
      if (typeof o == "object" && typeof o.result == "number" && o.id == t) {
        ve.setTemp("id", null), ve.setTemp("list", []), ve.setTemp("result", null);
        const i = e.menu[o.result];
        (s = i.click) == null || s.call(i);
      }
    }
  );
}, Ic = (e) => new Promise((t, n) => {
  var r;
  const o = document.createElement("input");
  o.type = "file", e.filters ? o.accept = e.filters.map(({ name: s, extensions: i }) => `${s}.{${i.join(",")}`).join(",") : o.accept = "*", o.multiple = !!((r = e.properties) != null && r.includes("multiSelections")), o.onchange = async () => {
    var s;
    if ((s = o.files) != null && s.length) {
      const i = [];
      for (let d = 0; d < o.files.length; d++) {
        const p = o.files.item(d);
        p && i.push(p);
      }
      const c = await jo(i, async (d) => new Promise((p) => {
        const l = new FileReader();
        l.onload = () => {
          l.result && p(l.result.toString());
        }, l.readAsDataURL(d);
      }));
      t(c);
    }
  }, o.click(), o.onerror = n;
}), Dc = async (e) => (await $a({
  ...e,
  buttons: ["Yes", "No"]
})).response === 0;
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
var Ln;
(function(e) {
  e.HARM_CATEGORY_UNSPECIFIED = "HARM_CATEGORY_UNSPECIFIED", e.HARM_CATEGORY_HATE_SPEECH = "HARM_CATEGORY_HATE_SPEECH", e.HARM_CATEGORY_SEXUALLY_EXPLICIT = "HARM_CATEGORY_SEXUALLY_EXPLICIT", e.HARM_CATEGORY_HARASSMENT = "HARM_CATEGORY_HARASSMENT", e.HARM_CATEGORY_DANGEROUS_CONTENT = "HARM_CATEGORY_DANGEROUS_CONTENT";
})(Ln || (Ln = {}));
var Vn;
(function(e) {
  e.HARM_BLOCK_THRESHOLD_UNSPECIFIED = "HARM_BLOCK_THRESHOLD_UNSPECIFIED", e.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE", e.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE", e.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH", e.BLOCK_NONE = "BLOCK_NONE";
})(Vn || (Vn = {}));
var zn;
(function(e) {
  e.HARM_PROBABILITY_UNSPECIFIED = "HARM_PROBABILITY_UNSPECIFIED", e.NEGLIGIBLE = "NEGLIGIBLE", e.LOW = "LOW", e.MEDIUM = "MEDIUM", e.HIGH = "HIGH";
})(zn || (zn = {}));
var Bn;
(function(e) {
  e.BLOCKED_REASON_UNSPECIFIED = "BLOCKED_REASON_UNSPECIFIED", e.SAFETY = "SAFETY", e.OTHER = "OTHER";
})(Bn || (Bn = {}));
var qe;
(function(e) {
  e.FINISH_REASON_UNSPECIFIED = "FINISH_REASON_UNSPECIFIED", e.STOP = "STOP", e.MAX_TOKENS = "MAX_TOKENS", e.SAFETY = "SAFETY", e.RECITATION = "RECITATION", e.OTHER = "OTHER";
})(qe || (qe = {}));
var Un;
(function(e) {
  e.TASK_TYPE_UNSPECIFIED = "TASK_TYPE_UNSPECIFIED", e.RETRIEVAL_QUERY = "RETRIEVAL_QUERY", e.RETRIEVAL_DOCUMENT = "RETRIEVAL_DOCUMENT", e.SEMANTIC_SIMILARITY = "SEMANTIC_SIMILARITY", e.CLASSIFICATION = "CLASSIFICATION", e.CLUSTERING = "CLUSTERING";
})(Un || (Un = {}));
var Yn;
(function(e) {
  e.GENERATE_CONTENT = "generateContent", e.STREAM_GENERATE_CONTENT = "streamGenerateContent", e.COUNT_TOKENS = "countTokens", e.EMBED_CONTENT = "embedContent", e.BATCH_EMBED_CONTENTS = "batchEmbedContents";
})(Yn || (Yn = {}));
qe.RECITATION, qe.SAFETY;
const Pc = ({ model: e = "gemini-pro" }) => _.useMemo(() => null, [e]);
function $c(e, t = [], n) {
  const o = B(null);
  return _.useEffect(() => (e().then(o.set), () => {
    n == null || n(t);
  }), t), o.get;
}
function Oe(e, t = [], n = () => {
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
function Kn(e, t, n = (o) => o) {
  const o = B(n(e)), r = _.useDeferredValue(o.get);
  return _.useEffect(() => {
    t(r);
  }, [r]), _.useEffect(() => {
    o.set(n(e));
  }, [e]), o;
}
function Fc(e, t = [], n = 1e3) {
  const o = B(null), r = B(!1);
  return _.useEffect(() => {
    const s = new Xe();
    return r.set(!0), s.start(n).then(() => {
      o.set(e()), r.set(!1);
    }), () => {
      s.clear(), r.set(!1);
    };
  }, [...t, n]), [r.get, o.get];
}
function Fa(e, t = [], n = 1e3) {
  const o = B(!1);
  return _.useEffect(() => {
    const r = new Xe();
    o.set(!0);
    let s;
    return r.start(n).then(async () => {
      s = e(), s instanceof Promise && await s, o.set(!1);
    }), () => {
      r.clear(), typeof s == "function" && s(), o.set(!1);
    };
  }, [...t, n]), o.get;
}
const jc = (e, t = []) => {
  const n = B("ready"), o = B(null), r = B(null);
  return Oe(async () => {
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
function ja(e) {
  const t = ee.getOne(e);
  return _.useMemo(() => t || null, [t]);
}
function La() {
  const e = ee.getAll();
  return _.useMemo(() => e.filter(({ private: n = !1 }) => !n), [e]);
}
function Lc(e) {
  const t = ee.getOneFeild(e, "config");
  return _.useMemo(() => t || null, [t]);
}
function Vc() {
  const e = La(), t = G.getOneFeild("findConfigurations", "value"), n = Eo.getOneFeild("settings.viewType", "focused"), o = _.useMemo(() => n == "list" ? xe.orderBy(e, "name", "asc") : n ? xe.orderBy(e, "settingId", "asc") : e, [n, e]), r = To("settings/findBy.enum"), s = _.useMemo(() => Object.entries(Gn(String(t))).map(([c, d]) => [c, d.join(" ")]), [t]), i = _.useMemo(() => o.filter((c) => s.every(([d, p]) => {
    var l;
    switch (d) {
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
        return r == "nice" ? re(Lo(c.name, c.desc, c.settingId).join(" "), p) : r && re(String(c[r]), p);
    }
  })), [s, o, r]);
  return _.useEffect(() => {
    se("configurations.found.length", i.length);
  }, [i]), i;
}
function zc(e, t) {
  ee.setOneFeild(e, "config", t);
}
function Bc(e, t) {
  ee.setOneFeild(e, "value", t);
}
function To(e) {
  const t = ja(e);
  return t == null ? void 0 : t.value;
}
function Uc(e) {
  const t = Ut.getAll();
  return _.useMemo(() => xe.join({ commandId: e }, t, "commandId->command"), [e, t]);
}
function ko() {
  const e = Ut.getAll();
  return _.useMemo(() => e.filter(({ value: t }) => t), [e]);
}
function Yc(e) {
  const t = ko();
  return _.useMemo(() => xe.join({ actionName: e }, t, "actionName->action"), [t]);
}
const Kc = (e) => st.setTemp("settings", e == null ? void 0 : e.toString());
function Va() {
  const e = da.getAll();
  return _.useMemo(() => e.filter((t) => !t.private), [e]);
}
function Hc() {
  const e = Va(), t = G.getOneFeild("findConfigurations", "value"), n = ko(), o = _.useMemo(() => xe.fullJoin(e, n, "commandId->command").map(({ childs: i, data: c }) => ({
    ...c,
    keys: i
  })), [e, n]), r = _.useMemo(() => {
    if (!t)
      return o;
    const s = Object.entries(Gn(t)).map(([i, c]) => ({
      prop: i,
      value: c.join(" ")
    }));
    return o.filter(({ commandId: i, label: c, keys: d }) => s.every(({ prop: p, value: l }) => {
      switch (p) {
        case "key":
          return re(d.map(({ value: m }) => m).join(" "), l);
        case "label":
          return re(c, l);
        case "commandId":
          return i.startsWith(l);
        default:
          return re([c, ...d.map(({ value: m }) => m)].join(" "), l);
      }
    }));
  }, [t, o]);
  return _.useEffect(() => {
    se("configurations.found.length", r.length);
  }, [r]), r;
}
function Wc(e, t = []) {
  const n = Object.entries(e), o = n.map(([, r]) => G.getOneFeild(r, "value"));
  return _.useMemo(() => {
    const r = {};
    return n.forEach(([s], i) => {
      const c = o[i];
      r[s] = c;
    }), r;
  }, [...o, ...t]);
}
function Gc(e) {
  e.forEach((t) => {
    G.setOneFeild(t, "value", "");
  });
}
function za(e) {
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
function Ba(e, t) {
  return _.useMemo(() => {
    if (!t)
      return e || "";
    const o = Math.min(t.start, t.end);
    return (e == null ? void 0 : e.slice(0, o)) || "";
  }, [e, t]);
}
function Ua(e, t) {
  return _.useMemo(() => {
    if (!t)
      return e || "";
    const o = Math.max(t.start, t.end);
    return (e == null ? void 0 : e.slice(o)) || "";
  }, [e, t]);
}
function Ya(e, t) {
  return _.useMemo(() => {
    if (!t)
      return e || "";
    const o = Math.min(t.start, t.end), r = Math.max(t.start, t.end);
    return (e == null ? void 0 : e.slice(o, r)) || "";
  }, [e, t]);
}
function qc(e) {
  e.forEach(za);
}
function Xc(e) {
  const t = G.getOneFeild(e, "value"), n = G.getOneFeild(e, "selection");
  return Ba(t, n);
}
function Qc(e) {
  const t = G.getOneFeild(e, "value"), n = G.getOneFeild(e, "selection");
  return Ua(t, n);
}
function Jc(e) {
  const t = G.getOneFeild(e, "value"), n = G.getOneFeild(e, "selection");
  return Ya(t, n);
}
function Zc(e, t = N.getState()) {
  const n = e.map((o) => {
    const r = t.fields.entities[o], s = Object.keys((r == null ? void 0 : r.controls) || {});
    if (!r || !s.length)
      return {
        response: [],
        isValide: !0
      };
    const i = r.value, c = s.map((d) => i.match(new RegExp(d, "ig")));
    return { response: c, isValide: c.every(Boolean), fieldName: o };
  });
  return {
    controls: n,
    isValide: n.every(({ isValide: o }) => o)
  };
}
function eu(e, t = "info", n = U(), o = 5) {
  return Ks.add([
    {
      message: e,
      type: t,
      time: o,
      id: n
    }
  ]), n;
}
var Ka = /* @__PURE__ */ ((e) => (e[e.short = 5] = "short", e[e.long = 5] = "long", e))(Ka || {});
const tu = async () => {
  const e = U();
  return le.setTemp("id", e), le.setTemp("type", "scanQr"), new Promise(async (t) => {
    const n = No(
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
function nu(e) {
  return new Promise(async (t, n) => {
    var i, c;
    if ((c = (i = N.getState().object.data) == null ? void 0 : i.camera) == null ? void 0 : c.id) {
      n("Camera Is Work Now");
      return;
    }
    const r = U();
    le.setTemp("id", r), le.setTemp("type", e), le.setTemp("result", null), le.setTemp("error", null);
    const s = No(
      "object.data.camera",
      (d) => !!(d != null && d.result || d != null && d.error),
      async ({ object: d }) => {
        var l;
        const p = (l = d.data) == null ? void 0 : l.camera;
        (p == null ? void 0 : p.id) == r && (p.result ? t(p.result) : n(p.error), ["id", "type", "result"].forEach((m) => {
          le.setTemp(m, null);
        }), s());
      }
    );
  });
}
function ou() {
  const e = Ca.getEntity(), t = To("window/dark.boolean");
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
          c && (r[s] = Yt(t, c));
        }
      }
      return r;
    },
    [t, e]
  );
}
function ru(e, ...t) {
  return (n, o) => `linear-gradient(${e} , ${t.filter((r) => n[r]).map((r) => {
    const s = n[r];
    return Yt(o, s);
  }).join(" , ")})`;
}
function Yt(e, t) {
  return e ? t.dark || t.default : t.light || t.default;
}
function su(e = []) {
  return (t, n) => e.filter((o) => t[o.colorId]).map(({ colorId: o, x: r = 0, y: s = 0, blur: i = 3, size: c = 1, isInset: d = !1 }) => {
    const p = t[o];
    return `${r}px ${s}px ${i}px ${c}px ${Yt(n, p)} ${d ? "inset" : ""}`;
  }).join(" , ");
}
const $t = (e, t, n) => {
  const o = () => {
    const s = N.getState(), { value: i } = Qe(s, e);
    (typeof t == "function" ? t(i) : i == t) && (r(), n(s));
  }, r = N.subscribe(o);
  return r;
}, No = (e, t, n) => {
  const o = () => {
    const r = N.getState(), { value: s, isValide: i } = Qe(r, e);
    if (!i) {
      Q.warn("Invalid State Dir", e);
      return;
    }
    (typeof t == "function" ? t(s) : s == t) && (n == null || n(r));
  };
  return N.subscribe(o);
}, Ha = () => rt("userInfo"), au = () => {
  const e = Wa();
  Oe(async () => {
    var n;
    if (e != null && e.uid && ((n = J.server) != null && n.db)) {
      const o = Gt(J.server.db, "users"), r = qt(o, e.uid), s = {
        photo: e.photoURL,
        phone: e.phoneNumber,
        name: e.displayName,
        email: e.email
      };
      se("userInfo", s), await zo(r, s, { merge: !0 });
    } else
      se("userInfo", null);
  }, [e]);
  const t = Ha();
  Oe(async () => {
    if (e && t) {
      let n = {};
      e.displayName != t.name && (n.displayName = t.name), e.photoURL != t.photo && (n.photoURL = t.photo), await Bo(e, n);
    }
  }, [t, e]), _.useEffect(() => {
    const n = J.server;
    if (e && n)
      return Uo(qt(Gt(n.db, "users"), e.uid), (o) => {
        o.exists() && se("userInfo", o.data());
      });
  }, [e]);
}, Wa = () => {
  var t;
  const e = B(((t = J.server) == null ? void 0 : t.auth.currentUser) || null);
  return _.useEffect(() => {
    var n;
    if ((n = J.server) != null && n.auth) {
      e.set(J.server.auth.currentUser);
      const o = Yo(J.server.auth, e.set), r = Ko(J.server.auth, e.set);
      return () => {
        o(), r();
      };
    }
  }, []), e.get;
}, iu = async () => {
  if (!J.server)
    throw Error("Server is not initialized");
  Da.setTemp("open", !0), await Wn(1e3);
  const e = document.getElementById("capatcha-view");
  if (!e)
    throw Error("capatcha view element is not exists");
  return new Ho(J.server.auth, e);
}, cu = () => {
  st.setTemp("profile-view", !0);
}, uu = () => {
  st.setTemp("profile-view", !1);
}, lu = (e) => {
  st.setTemp("pdf", e);
}, du = ({ ...e }) => {
  ee.setOneFeild("visibility/notifays.boolean", "value", !0), Re.add([
    {
      id: U(),
      buttons: [],
      desc: " - ",
      showDesc: !1,
      removable: !0,
      status: "idle",
      title: "Untitled",
      ...e
    }
  ]);
}, Ga = "https://water-fetch-account.web.app", fu = async ({ name: e, logo: t }) => new Promise((n, o) => {
  const r = new URL(Ga);
  r.searchParams.append("appName", e), r.searchParams.append("imageSrc", t);
  const s = window.open();
  setInterval(() => {
    if (s && location.hostname == s.location.hostname) {
      const i = new URLSearchParams(s.location.search), c = i.get("token"), d = i.get("status");
      d == "error" ? o(null) : c && d == "success" && n(c);
    }
  }, 1e3);
});
export {
  Vi as $,
  Ra as A,
  Hc as B,
  Uc as C,
  Ut as D,
  qc as E,
  ve as F,
  xi as G,
  Re as H,
  st as I,
  Vc as J,
  Ci as K,
  $a as L,
  Ks as M,
  eu as N,
  Zc as O,
  Wa as P,
  jc as Q,
  Ha as R,
  U as S,
  nu as T,
  cu as U,
  du as V,
  Rc as W,
  Bc as X,
  da as Y,
  ra as Z,
  Pc as _,
  ou as a,
  fu as a$,
  Oe as a0,
  Li as a1,
  Ds as a2,
  $c as a3,
  ai as a4,
  ci as a5,
  li as a6,
  fi as a7,
  Oi as a8,
  wi as a9,
  ri as aA,
  Ki as aB,
  zi as aC,
  ec as aD,
  mi as aE,
  au as aF,
  Ws as aG,
  Kn as aH,
  ja as aI,
  Lc as aJ,
  zc as aK,
  Yc as aL,
  Wc as aM,
  Gc as aN,
  Ba as aO,
  Ua as aP,
  Ya as aQ,
  Xc as aR,
  Qc as aS,
  Jc as aT,
  Ka as aU,
  tu as aV,
  $t as aW,
  No as aX,
  iu as aY,
  uu as aZ,
  lu as a_,
  Ca as aa,
  Yt as ab,
  Fn as ac,
  vi as ad,
  bi as ae,
  Fc as af,
  Ic as ag,
  Pi as ah,
  Ia as ai,
  ii as aj,
  ui as ak,
  di as al,
  pi as am,
  En as an,
  si as ao,
  ei as ap,
  Dt as aq,
  Yi as ar,
  qi as as,
  gi as at,
  Xi as au,
  ti as av,
  Mi as aw,
  Ri as ax,
  Ti as ay,
  ji as az,
  rc as b,
  Be as b$,
  Pa as b0,
  _c as b1,
  Oc as b2,
  Cc as b3,
  Tc as b4,
  kc as b5,
  Nc as b6,
  xc as b7,
  Ac as b8,
  Mc as b9,
  oi as bA,
  Bs as bB,
  Sn as bC,
  yi as bD,
  _n as bE,
  hi as bF,
  On as bG,
  Hs as bH,
  Ei as bI,
  Si as bJ,
  _i as bK,
  Ni as bL,
  Tn as bM,
  Ai as bN,
  Ii as bO,
  kn as bP,
  Di as bQ,
  So as bR,
  _o as bS,
  $i as bT,
  Fi as bU,
  Nn as bV,
  oa as bW,
  Bi as bX,
  xn as bY,
  ya as bZ,
  Mn as b_,
  Dc as ba,
  Cn as bb,
  ki as bc,
  Aa as bd,
  Ma as be,
  me as bf,
  ac as bg,
  ic as bh,
  cc as bi,
  uc as bj,
  lc as bk,
  dc as bl,
  fc as bm,
  pc as bn,
  mc as bo,
  yc as bp,
  hc as bq,
  gc as br,
  jn as bs,
  vc as bt,
  bc as bu,
  Ec as bv,
  Sc as bw,
  Da as bx,
  wn as by,
  ni as bz,
  le as c,
  Wi as c0,
  In as c1,
  Gi as c2,
  ia as c3,
  Oo as c4,
  ca as c5,
  la as c6,
  An as c7,
  Ui as c8,
  Dn as c9,
  Qi as ca,
  Ji as cb,
  Zi as cc,
  Ye as cd,
  nc as ce,
  $n as cf,
  oc as cg,
  xa as ch,
  ko as d,
  sc as e,
  G as f,
  To as g,
  su as h,
  Va as i,
  N as j,
  La as k,
  rt as l,
  X as m,
  ua as n,
  Kc as o,
  se as p,
  Ue as q,
  ru as r,
  ee as s,
  ha as t,
  B as u,
  Eo as v,
  wc as w,
  za as x,
  Fa as y,
  Hi as z
};
