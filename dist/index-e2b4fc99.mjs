var Pg = Object.defineProperty;
var kg = (n, e, t) => e in n ? Pg(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Ku = (n, e, t) => (kg(n, typeof e != "symbol" ? e + "" : e, t), t);
import * as Ki from "react";
import z, { useContext as Og, useRef as Ng, useCallback as Dg, useDebugValue as xg } from "react";
import { aq as fd, D as Us, A as jn, r as Vg, I as gt, ar as $s, _ as pd, i as Gu, S as Mg, ap as Lg, h as oi, as as md, a5 as Yt, $ as Fg } from "./index-c007ee83.mjs";
import { unstable_batchedUpdates as Ug } from "react-dom";
function Se(n) {
  return `Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
var $g = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), Qu = $g, Mo = () => Math.random().toString(36).substring(7).split("").join("."), jg = {
  INIT: `@@redux/INIT${Mo()}`,
  REPLACE: `@@redux/REPLACE${Mo()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Mo()}`
}, Sn = jg;
function vi(n) {
  if (typeof n != "object" || n === null)
    return !1;
  let e = n;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(n) === e || Object.getPrototypeOf(n) === null;
}
function Bg(n) {
  if (n === void 0)
    return "undefined";
  if (n === null)
    return "null";
  const e = typeof n;
  switch (e) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return e;
  }
  if (Array.isArray(n))
    return "array";
  if (Hg(n))
    return "date";
  if (qg(n))
    return "error";
  const t = zg(n);
  switch (t) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return t;
  }
  return Object.prototype.toString.call(n).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function zg(n) {
  return typeof n.constructor == "function" ? n.constructor.name : null;
}
function qg(n) {
  return n instanceof Error || typeof n.message == "string" && n.constructor && typeof n.constructor.stackTraceLimit == "number";
}
function Hg(n) {
  return n instanceof Date ? !0 : typeof n.toDateString == "function" && typeof n.getDate == "function" && typeof n.setDate == "function";
}
function Qt(n) {
  let e = typeof n;
  return process.env.NODE_ENV !== "production" && (e = Bg(n)), e;
}
function gd(n, e, t) {
  if (typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Se(2) : `Expected the root reducer to be a function. Instead, received: '${Qt(n)}'`);
  if (typeof e == "function" && typeof t == "function" || typeof t == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Se(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof e == "function" && typeof t > "u" && (t = e, e = void 0), typeof t < "u") {
    if (typeof t != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Se(1) : `Expected the enhancer to be a function. Instead, received: '${Qt(t)}'`);
    return t(gd)(n, e);
  }
  let r = n, i = e, s = /* @__PURE__ */ new Map(), a = s, c = 0, u = !1;
  function h() {
    a === s && (a = /* @__PURE__ */ new Map(), s.forEach((p, I) => {
      a.set(I, p);
    }));
  }
  function f() {
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? Se(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function m(p) {
    if (typeof p != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Se(4) : `Expected the listener to be a function. Instead, received: '${Qt(p)}'`);
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? Se(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let I = !0;
    h();
    const D = c++;
    return a.set(D, p), function() {
      if (I) {
        if (u)
          throw new Error(process.env.NODE_ENV === "production" ? Se(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        I = !1, h(), a.delete(D), s = null;
      }
    };
  }
  function _(p) {
    if (!vi(p))
      throw new Error(process.env.NODE_ENV === "production" ? Se(7) : `Actions must be plain objects. Instead, the actual type was: '${Qt(p)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof p.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Se(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof p.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? Se(17) : `Action "type" property must be a string. Instead, the actual type was: '${Qt(p.type)}'. Value was: '${p.type}' (stringified)`);
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? Se(9) : "Reducers may not dispatch actions.");
    try {
      u = !0, i = r(i, p);
    } finally {
      u = !1;
    }
    return (s = a).forEach((D) => {
      D();
    }), p;
  }
  function w(p) {
    if (typeof p != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Se(10) : `Expected the nextReducer to be a function. Instead, received: '${Qt(p)}`);
    r = p, _({
      type: Sn.REPLACE
    });
  }
  function A() {
    const p = m;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(I) {
        if (typeof I != "object" || I === null)
          throw new Error(process.env.NODE_ENV === "production" ? Se(11) : `Expected the observer to be an object. Instead, received: '${Qt(I)}'`);
        function D() {
          const N = I;
          N.next && N.next(f());
        }
        return D(), {
          unsubscribe: p(D)
        };
      },
      [Qu]() {
        return this;
      }
    };
  }
  return _({
    type: Sn.INIT
  }), {
    dispatch: _,
    subscribe: m,
    getState: f,
    replaceReducer: w,
    [Qu]: A
  };
}
function Yu(n) {
  typeof console < "u" && typeof console.error == "function" && console.error(n);
  try {
    throw new Error(n);
  } catch {
  }
}
function Wg(n, e, t, r) {
  const i = Object.keys(e), s = t && t.type === Sn.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!vi(n))
    return `The ${s} has unexpected type of "${Qt(n)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const a = Object.keys(n).filter((c) => !e.hasOwnProperty(c) && !r[c]);
  if (a.forEach((c) => {
    r[c] = !0;
  }), !(t && t.type === Sn.REPLACE) && a.length > 0)
    return `Unexpected ${a.length > 1 ? "keys" : "key"} "${a.join('", "')}" found in ${s}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function Kg(n) {
  Object.keys(n).forEach((e) => {
    const t = n[e];
    if (typeof t(void 0, {
      type: Sn.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Se(12) : `The slice reducer for key "${e}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof t(void 0, {
      type: Sn.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Se(13) : `The slice reducer for key "${e}" returned undefined when probed with a random type. Don't try to handle '${Sn.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function Gg(n) {
  const e = Object.keys(n), t = {};
  for (let a = 0; a < e.length; a++) {
    const c = e[a];
    process.env.NODE_ENV !== "production" && typeof n[c] > "u" && Yu(`No reducer provided for key "${c}"`), typeof n[c] == "function" && (t[c] = n[c]);
  }
  const r = Object.keys(t);
  let i;
  process.env.NODE_ENV !== "production" && (i = {});
  let s;
  try {
    Kg(t);
  } catch (a) {
    s = a;
  }
  return function(c = {}, u) {
    if (s)
      throw s;
    if (process.env.NODE_ENV !== "production") {
      const m = Wg(c, t, u, i);
      m && Yu(m);
    }
    let h = !1;
    const f = {};
    for (let m = 0; m < r.length; m++) {
      const _ = r[m], w = t[_], A = c[_], R = w(A, u);
      if (typeof R > "u") {
        const p = u && u.type;
        throw new Error(process.env.NODE_ENV === "production" ? Se(14) : `When called with an action of type ${p ? `"${String(p)}"` : "(unknown type)"}, the slice reducer for key "${_}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      f[_] = R, h = h || R !== A;
    }
    return h = h || r.length !== Object.keys(c).length, h ? f : c;
  };
}
function _s(...n) {
  return n.length === 0 ? (e) => e : n.length === 1 ? n[0] : n.reduce((e, t) => (...r) => e(t(...r)));
}
function Qg(...n) {
  return (e) => (t, r) => {
    const i = e(t, r);
    let s = () => {
      throw new Error(process.env.NODE_ENV === "production" ? Se(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const a = {
      getState: i.getState,
      dispatch: (u, ...h) => s(u, ...h)
    }, c = n.map((u) => u(a));
    return s = _s(...c)(i.dispatch), {
      ...i,
      dispatch: s
    };
  };
}
function za(n) {
  return vi(n) && "type" in n && typeof n.type == "string";
}
var yd = Symbol.for("immer-nothing"), Xu = Symbol.for("immer-draftable"), Ze = Symbol.for("immer-state"), Yg = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(n) {
    return `The plugin for '${n}' has not been loaded into Immer. To enable the plugin, import and call \`enable${n}()\` when initializing your application.`;
  },
  function(n) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${n}'`;
  },
  "This object has been frozen and should not be mutated",
  function(n) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(n) {
    return `'current' expects a draft, got: ${n}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(n) {
    return `'original' expects a draft, got: ${n}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function qe(n, ...e) {
  if (process.env.NODE_ENV !== "production") {
    const t = Yg[n], r = typeof t == "function" ? t.apply(null, e) : t;
    throw new Error(`[Immer] ${r}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var sr = Object.getPrototypeOf;
function wt(n) {
  return !!n && !!n[Ze];
}
function Vt(n) {
  var e;
  return n ? _d(n) || Array.isArray(n) || !!n[Xu] || !!((e = n.constructor) != null && e[Xu]) || Bs(n) || zs(n) : !1;
}
var Xg = Object.prototype.constructor.toString();
function _d(n) {
  if (!n || typeof n != "object")
    return !1;
  const e = sr(n);
  if (e === null)
    return !0;
  const t = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return t === Object ? !0 : typeof t == "function" && Function.toString.call(t) === Xg;
}
function vs(n, e) {
  js(n) === 0 ? Reflect.ownKeys(n).forEach((t) => {
    e(t, n[t], n);
  }) : n.forEach((t, r) => e(r, t, n));
}
function js(n) {
  const e = n[Ze];
  return e ? e.type_ : Array.isArray(n) ? 1 : Bs(n) ? 2 : zs(n) ? 3 : 0;
}
function oa(n, e) {
  return js(n) === 2 ? n.has(e) : Object.prototype.hasOwnProperty.call(n, e);
}
function vd(n, e, t) {
  const r = js(n);
  r === 2 ? n.set(e, t) : r === 3 ? n.add(t) : n[e] = t;
}
function Jg(n, e) {
  return n === e ? n !== 0 || 1 / n === 1 / e : n !== n && e !== e;
}
function Bs(n) {
  return n instanceof Map;
}
function zs(n) {
  return n instanceof Set;
}
function wn(n) {
  return n.copy_ || n.base_;
}
function aa(n, e) {
  if (Bs(n))
    return new Map(n);
  if (zs(n))
    return new Set(n);
  if (Array.isArray(n))
    return Array.prototype.slice.call(n);
  const t = _d(n);
  if (e === !0 || e === "class_only" && !t) {
    const r = Object.getOwnPropertyDescriptors(n);
    delete r[Ze];
    let i = Reflect.ownKeys(r);
    for (let s = 0; s < i.length; s++) {
      const a = i[s], c = r[a];
      c.writable === !1 && (c.writable = !0, c.configurable = !0), (c.get || c.set) && (r[a] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: c.enumerable,
        value: n[a]
      });
    }
    return Object.create(sr(n), r);
  } else {
    const r = sr(n);
    if (r !== null && t)
      return { ...n };
    const i = Object.create(r);
    return Object.assign(i, n);
  }
}
function qa(n, e = !1) {
  return qs(n) || wt(n) || !Vt(n) || (js(n) > 1 && (n.set = n.add = n.clear = n.delete = Zg), Object.freeze(n), e && Object.entries(n).forEach(([t, r]) => qa(r, !0))), n;
}
function Zg() {
  qe(2);
}
function qs(n) {
  return Object.isFrozen(n);
}
var ey = {};
function On(n) {
  const e = ey[n];
  return e || qe(0, n), e;
}
var ai;
function wd() {
  return ai;
}
function ty(n, e) {
  return {
    drafts_: [],
    parent_: n,
    immer_: e,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Ju(n, e) {
  e && (On("Patches"), n.patches_ = [], n.inversePatches_ = [], n.patchListener_ = e);
}
function ca(n) {
  ua(n), n.drafts_.forEach(ny), n.drafts_ = null;
}
function ua(n) {
  n === ai && (ai = n.parent_);
}
function Zu(n) {
  return ai = ty(ai, n);
}
function ny(n) {
  const e = n[Ze];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function el(n, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const t = e.drafts_[0];
  return n !== void 0 && n !== t ? (t[Ze].modified_ && (ca(e), qe(4)), Vt(n) && (n = ws(e, n), e.parent_ || Es(e, n)), e.patches_ && On("Patches").generateReplacementPatches_(
    t[Ze].base_,
    n,
    e.patches_,
    e.inversePatches_
  )) : n = ws(e, t, []), ca(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), n !== yd ? n : void 0;
}
function ws(n, e, t) {
  if (qs(e))
    return e;
  const r = e[Ze];
  if (!r)
    return vs(
      e,
      (i, s) => tl(n, r, e, i, s, t)
    ), e;
  if (r.scope_ !== n)
    return e;
  if (!r.modified_)
    return Es(n, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let s = i, a = !1;
    r.type_ === 3 && (s = new Set(i), i.clear(), a = !0), vs(
      s,
      (c, u) => tl(n, r, i, c, u, t, a)
    ), Es(n, i, !1), t && n.patches_ && On("Patches").generatePatches_(
      r,
      t,
      n.patches_,
      n.inversePatches_
    );
  }
  return r.copy_;
}
function tl(n, e, t, r, i, s, a) {
  if (process.env.NODE_ENV !== "production" && i === t && qe(5), wt(i)) {
    const c = s && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !oa(e.assigned_, r) ? s.concat(r) : void 0, u = ws(n, i, c);
    if (vd(t, r, u), wt(u))
      n.canAutoFreeze_ = !1;
    else
      return;
  } else
    a && t.add(i);
  if (Vt(i) && !qs(i)) {
    if (!n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1)
      return;
    ws(n, i), (!e || !e.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(t, r) && Es(n, i);
  }
}
function Es(n, e, t = !1) {
  !n.parent_ && n.immer_.autoFreeze_ && n.canAutoFreeze_ && qa(e, t);
}
function ry(n, e) {
  const t = Array.isArray(n), r = {
    type_: t ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : wd(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: e,
    // The base state.
    base_: n,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = r, s = Ha;
  t && (i = [r], s = ci);
  const { revoke: a, proxy: c } = Proxy.revocable(i, s);
  return r.draft_ = c, r.revoke_ = a, c;
}
var Ha = {
  get(n, e) {
    if (e === Ze)
      return n;
    const t = wn(n);
    if (!oa(t, e))
      return iy(n, t, e);
    const r = t[e];
    return n.finalized_ || !Vt(r) ? r : r === Lo(n.base_, e) ? (Fo(n), n.copy_[e] = ha(r, n)) : r;
  },
  has(n, e) {
    return e in wn(n);
  },
  ownKeys(n) {
    return Reflect.ownKeys(wn(n));
  },
  set(n, e, t) {
    const r = Ed(wn(n), e);
    if (r != null && r.set)
      return r.set.call(n.draft_, t), !0;
    if (!n.modified_) {
      const i = Lo(wn(n), e), s = i == null ? void 0 : i[Ze];
      if (s && s.base_ === t)
        return n.copy_[e] = t, n.assigned_[e] = !1, !0;
      if (Jg(t, i) && (t !== void 0 || oa(n.base_, e)))
        return !0;
      Fo(n), la(n);
    }
    return n.copy_[e] === t && // special case: handle new props with value 'undefined'
    (t !== void 0 || e in n.copy_) || // special case: NaN
    Number.isNaN(t) && Number.isNaN(n.copy_[e]) || (n.copy_[e] = t, n.assigned_[e] = !0), !0;
  },
  deleteProperty(n, e) {
    return Lo(n.base_, e) !== void 0 || e in n.base_ ? (n.assigned_[e] = !1, Fo(n), la(n)) : delete n.assigned_[e], n.copy_ && delete n.copy_[e], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(n, e) {
    const t = wn(n), r = Reflect.getOwnPropertyDescriptor(t, e);
    return r && {
      writable: !0,
      configurable: n.type_ !== 1 || e !== "length",
      enumerable: r.enumerable,
      value: t[e]
    };
  },
  defineProperty() {
    qe(11);
  },
  getPrototypeOf(n) {
    return sr(n.base_);
  },
  setPrototypeOf() {
    qe(12);
  }
}, ci = {};
vs(Ha, (n, e) => {
  ci[n] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
ci.deleteProperty = function(n, e) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(e)) && qe(13), ci.set.call(this, n, e, void 0);
};
ci.set = function(n, e, t) {
  return process.env.NODE_ENV !== "production" && e !== "length" && isNaN(parseInt(e)) && qe(14), Ha.set.call(this, n[0], e, t, n[0]);
};
function Lo(n, e) {
  const t = n[Ze];
  return (t ? wn(t) : n)[e];
}
function iy(n, e, t) {
  var i;
  const r = Ed(e, t);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = r.get) == null ? void 0 : i.call(n.draft_)
  ) : void 0;
}
function Ed(n, e) {
  if (!(e in n))
    return;
  let t = sr(n);
  for (; t; ) {
    const r = Object.getOwnPropertyDescriptor(t, e);
    if (r)
      return r;
    t = sr(t);
  }
}
function la(n) {
  n.modified_ || (n.modified_ = !0, n.parent_ && la(n.parent_));
}
function Fo(n) {
  n.copy_ || (n.copy_ = aa(
    n.base_,
    n.scope_.immer_.useStrictShallowCopy_
  ));
}
var sy = class {
  constructor(n) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, t, r) => {
      if (typeof e == "function" && typeof t != "function") {
        const s = t;
        t = e;
        const a = this;
        return function(u = s, ...h) {
          return a.produce(u, (f) => t.call(this, f, ...h));
        };
      }
      typeof t != "function" && qe(6), r !== void 0 && typeof r != "function" && qe(7);
      let i;
      if (Vt(e)) {
        const s = Zu(this), a = ha(e, void 0);
        let c = !0;
        try {
          i = t(a), c = !1;
        } finally {
          c ? ca(s) : ua(s);
        }
        return Ju(s, r), el(i, s);
      } else if (!e || typeof e != "object") {
        if (i = t(e), i === void 0 && (i = e), i === yd && (i = void 0), this.autoFreeze_ && qa(i, !0), r) {
          const s = [], a = [];
          On("Patches").generateReplacementPatches_(e, i, s, a), r(s, a);
        }
        return i;
      } else
        qe(1, e);
    }, this.produceWithPatches = (e, t) => {
      if (typeof e == "function")
        return (a, ...c) => this.produceWithPatches(a, (u) => e(u, ...c));
      let r, i;
      return [this.produce(e, t, (a, c) => {
        r = a, i = c;
      }), r, i];
    }, typeof (n == null ? void 0 : n.autoFreeze) == "boolean" && this.setAutoFreeze(n.autoFreeze), typeof (n == null ? void 0 : n.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(n.useStrictShallowCopy);
  }
  createDraft(n) {
    Vt(n) || qe(8), wt(n) && (n = Hs(n));
    const e = Zu(this), t = ha(n, void 0);
    return t[Ze].isManual_ = !0, ua(e), t;
  }
  finishDraft(n, e) {
    const t = n && n[Ze];
    (!t || !t.isManual_) && qe(9);
    const { scope_: r } = t;
    return Ju(r, e), el(void 0, r);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(n) {
    this.autoFreeze_ = n;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(n) {
    this.useStrictShallowCopy_ = n;
  }
  applyPatches(n, e) {
    let t;
    for (t = e.length - 1; t >= 0; t--) {
      const i = e[t];
      if (i.path.length === 0 && i.op === "replace") {
        n = i.value;
        break;
      }
    }
    t > -1 && (e = e.slice(t + 1));
    const r = On("Patches").applyPatches_;
    return wt(n) ? r(n, e) : this.produce(
      n,
      (i) => r(i, e)
    );
  }
};
function ha(n, e) {
  const t = Bs(n) ? On("MapSet").proxyMap_(n, e) : zs(n) ? On("MapSet").proxySet_(n, e) : ry(n, e);
  return (e ? e.scope_ : wd()).drafts_.push(t), t;
}
function Hs(n) {
  return wt(n) || qe(10, n), Td(n);
}
function Td(n) {
  if (!Vt(n) || qs(n))
    return n;
  const e = n[Ze];
  let t;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, t = aa(n, e.scope_.immer_.useStrictShallowCopy_);
  } else
    t = aa(n, !0);
  return vs(t, (r, i) => {
    vd(t, r, Td(i));
  }), e && (e.finalized_ = !1), t;
}
var et = new sy(), Wa = et.produce;
et.produceWithPatches.bind(
  et
);
et.setAutoFreeze.bind(et);
et.setUseStrictShallowCopy.bind(et);
et.applyPatches.bind(et);
et.createDraft.bind(et);
et.finishDraft.bind(et);
var oy = (n, e, t) => {
  if (e.length === 1 && e[0] === t) {
    let r = !1;
    try {
      const i = {};
      n(i) === i && (r = !0);
    } catch {
    }
    if (r) {
      let i;
      try {
        throw new Error();
      } catch (s) {
        ({ stack: i } = s);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: i }
      );
    }
  }
}, ay = (n, e, t) => {
  const { memoize: r, memoizeOptions: i } = e, { inputSelectorResults: s, inputSelectorResultsCopy: a } = n, c = r(() => ({}), ...i);
  if (!(c.apply(null, s) === c.apply(null, a))) {
    let h;
    try {
      throw new Error();
    } catch (f) {
      ({ stack: h } = f);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: t,
        firstInputs: s,
        secondInputs: a,
        stack: h
      }
    );
  }
}, cy = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function uy(n, e = `expected a function, instead received ${typeof n}`) {
  if (typeof n != "function")
    throw new TypeError(e);
}
function ly(n, e = `expected an object, instead received ${typeof n}`) {
  if (typeof n != "object")
    throw new TypeError(e);
}
function hy(n, e = "expected all items to be functions, instead received the following types: ") {
  if (!n.every((t) => typeof t == "function")) {
    const t = n.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${e}[${t}]`);
  }
}
var nl = (n) => Array.isArray(n) ? n : [n];
function dy(n) {
  const e = Array.isArray(n[0]) ? n[0] : n;
  return hy(
    e,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), e;
}
function rl(n, e) {
  const t = [], { length: r } = n;
  for (let i = 0; i < r; i++)
    t.push(n[i].apply(null, e));
  return t;
}
var fy = (n, e) => {
  const { identityFunctionCheck: t, inputStabilityCheck: r } = {
    ...cy,
    ...e
  };
  return {
    identityFunctionCheck: {
      shouldRun: t === "always" || t === "once" && n,
      run: oy
    },
    inputStabilityCheck: {
      shouldRun: r === "always" || r === "once" && n,
      run: ay
    }
  };
}, py = class {
  constructor(n) {
    this.value = n;
  }
  deref() {
    return this.value;
  }
}, my = typeof WeakRef < "u" ? WeakRef : py, gy = 0, il = 1;
function Gi() {
  return {
    s: gy,
    v: void 0,
    o: null,
    p: null
  };
}
function Ka(n, e = {}) {
  let t = Gi();
  const { resultEqualityCheck: r } = e;
  let i, s = 0;
  function a() {
    var m;
    let c = t;
    const { length: u } = arguments;
    for (let _ = 0, w = u; _ < w; _++) {
      const A = arguments[_];
      if (typeof A == "function" || typeof A == "object" && A !== null) {
        let R = c.o;
        R === null && (c.o = R = /* @__PURE__ */ new WeakMap());
        const p = R.get(A);
        p === void 0 ? (c = Gi(), R.set(A, c)) : c = p;
      } else {
        let R = c.p;
        R === null && (c.p = R = /* @__PURE__ */ new Map());
        const p = R.get(A);
        p === void 0 ? (c = Gi(), R.set(A, c)) : c = p;
      }
    }
    const h = c;
    let f;
    if (c.s === il ? f = c.v : (f = n.apply(null, arguments), s++), h.s = il, r) {
      const _ = ((m = i == null ? void 0 : i.deref) == null ? void 0 : m.call(i)) ?? i;
      _ != null && r(_, f) && (f = _, s !== 0 && s--), i = typeof f == "object" && f !== null || typeof f == "function" ? new my(f) : f;
    }
    return h.v = f, f;
  }
  return a.clearCache = () => {
    t = Gi(), a.resetResultsCount();
  }, a.resultsCount = () => s, a.resetResultsCount = () => {
    s = 0;
  }, a;
}
function Id(n, ...e) {
  const t = typeof n == "function" ? {
    memoize: n,
    memoizeOptions: e
  } : n, r = (...i) => {
    let s = 0, a = 0, c, u = {}, h = i.pop();
    typeof h == "object" && (u = h, h = i.pop()), uy(
      h,
      `createSelector expects an output function after the inputs, but received: [${typeof h}]`
    );
    const f = {
      ...t,
      ...u
    }, {
      memoize: m,
      memoizeOptions: _ = [],
      argsMemoize: w = Ka,
      argsMemoizeOptions: A = [],
      devModeChecks: R = {}
    } = f, p = nl(_), I = nl(A), D = dy(i), O = m(function() {
      return s++, h.apply(
        null,
        arguments
      );
    }, ...p);
    let N = !0;
    const C = w(function() {
      a++;
      const T = rl(
        D,
        arguments
      );
      if (c = O.apply(null, T), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: y, inputStabilityCheck: v } = fy(N, R);
        if (y.shouldRun && y.run(
          h,
          T,
          c
        ), v.shouldRun) {
          const b = rl(
            D,
            arguments
          );
          v.run(
            { inputSelectorResults: T, inputSelectorResultsCopy: b },
            { memoize: m, memoizeOptions: p },
            arguments
          );
        }
        N && (N = !1);
      }
      return c;
    }, ...I);
    return Object.assign(C, {
      resultFunc: h,
      memoizedResultFunc: O,
      dependencies: D,
      dependencyRecomputations: () => a,
      resetDependencyRecomputations: () => {
        a = 0;
      },
      lastResult: () => c,
      recomputations: () => s,
      resetRecomputations: () => {
        s = 0;
      },
      memoize: m,
      argsMemoize: w
    });
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var yy = /* @__PURE__ */ Id(Ka), _y = Object.assign(
  (n, e = yy) => {
    ly(
      n,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof n}`
    );
    const t = Object.keys(n), r = t.map(
      (s) => n[s]
    );
    return e(
      r,
      (...s) => s.reduce((a, c, u) => (a[t[u]] = c, a), {})
    );
  },
  { withTypes: () => _y }
);
function bd(n) {
  return ({ dispatch: t, getState: r }) => (i) => (s) => typeof s == "function" ? s(t, r, n) : i(s);
}
var vy = bd(), wy = bd, Ey = (...n) => {
  const e = Id(...n), t = Object.assign((...r) => {
    const i = e(...r), s = (a, ...c) => i(wt(a) ? Hs(a) : a, ...c);
    return Object.assign(s, i), s;
  }, {
    withTypes: () => t
  });
  return t;
}, Ty = Ey(Ka), Iy = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? _s : _s.apply(null, arguments);
}, by = (n) => n && typeof n.match == "function";
function or(n, e) {
  function t(...r) {
    if (e) {
      let i = e(...r);
      if (!i)
        throw new Error(process.env.NODE_ENV === "production" ? se(0) : "prepareAction did not return an object");
      return {
        type: n,
        payload: i.payload,
        ..."meta" in i && {
          meta: i.meta
        },
        ..."error" in i && {
          error: i.error
        }
      };
    }
    return {
      type: n,
      payload: r[0]
    };
  }
  return t.toString = () => `${n}`, t.type = n, t.match = (r) => za(r) && r.type === n, t;
}
function Ay(n) {
  return typeof n == "function" && "type" in n && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  by(n);
}
function Sy(n) {
  return za(n) && Object.keys(n).every(Ry);
}
function Ry(n) {
  return ["type", "payload", "error", "meta"].indexOf(n) > -1;
}
function Cy(n) {
  const e = n ? `${n}`.split("/") : [], t = e[e.length - 1] || "actionCreator";
  return `Detected an action creator with type "${n || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${t}())\` instead of \`dispatch(${t})\`. This is necessary even if the action has no payload.`;
}
function Py(n = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  const {
    isActionCreator: e = Ay
  } = n;
  return () => (t) => (r) => (e(r) && console.warn(Cy(r.type)), t(r));
}
function Ad(n, e) {
  let t = 0;
  return {
    measureTime(r) {
      const i = Date.now();
      try {
        return r();
      } finally {
        const s = Date.now();
        t += s - i;
      }
    },
    warnIfExceeded() {
      t > n && console.warn(`${e} took ${t}ms, which is more than the warning threshold of ${n}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var Sd = class Hr extends Array {
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, Hr.prototype);
  }
  static get [Symbol.species]() {
    return Hr;
  }
  concat(...e) {
    return super.concat.apply(this, e);
  }
  prepend(...e) {
    return e.length === 1 && Array.isArray(e[0]) ? new Hr(...e[0].concat(this)) : new Hr(...e.concat(this));
  }
};
function sl(n) {
  return Vt(n) ? Wa(n, () => {
  }) : n;
}
function ol(n, e, t) {
  if (n.has(e)) {
    let i = n.get(e);
    return t.update && (i = t.update(i, e, n), n.set(e, i)), i;
  }
  if (!t.insert)
    throw new Error(process.env.NODE_ENV === "production" ? se(10) : "No insert provided for key not already in map");
  const r = t.insert(e, n);
  return n.set(e, r), r;
}
function ky(n) {
  return typeof n != "object" || n == null || Object.isFrozen(n);
}
function Oy(n, e, t) {
  const r = Rd(n, e, t);
  return {
    detectMutations() {
      return Cd(n, e, r, t);
    }
  };
}
function Rd(n, e = [], t, r = "", i = /* @__PURE__ */ new Set()) {
  const s = {
    value: t
  };
  if (!n(t) && !i.has(t)) {
    i.add(t), s.children = {};
    for (const a in t) {
      const c = r ? r + "." + a : a;
      e.length && e.indexOf(c) !== -1 || (s.children[a] = Rd(n, e, t[a], c));
    }
  }
  return s;
}
function Cd(n, e = [], t, r, i = !1, s = "") {
  const a = t ? t.value : void 0, c = a === r;
  if (i && !c && !Number.isNaN(r))
    return {
      wasMutated: !0,
      path: s
    };
  if (n(a) || n(r))
    return {
      wasMutated: !1
    };
  const u = {};
  for (let f in t.children)
    u[f] = !0;
  for (let f in r)
    u[f] = !0;
  const h = e.length > 0;
  for (let f in u) {
    const m = s ? s + "." + f : f;
    if (h && e.some((A) => A instanceof RegExp ? A.test(m) : m === A))
      continue;
    const _ = Cd(n, e, t.children[f], r[f], c, m);
    if (_.wasMutated)
      return _;
  }
  return {
    wasMutated: !1
  };
}
function Ny(n = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (e) => (t) => e(t);
  {
    let e = function(c, u, h, f) {
      return JSON.stringify(c, t(u, f), h);
    }, t = function(c, u) {
      let h = [], f = [];
      return u || (u = function(m, _) {
        return h[0] === _ ? "[Circular ~]" : "[Circular ~." + f.slice(0, h.indexOf(_)).join(".") + "]";
      }), function(m, _) {
        if (h.length > 0) {
          var w = h.indexOf(this);
          ~w ? h.splice(w + 1) : h.push(this), ~w ? f.splice(w, 1 / 0, m) : f.push(m), ~h.indexOf(_) && (_ = u.call(this, m, _));
        } else
          h.push(_);
        return c == null ? _ : c.call(this, m, _);
      };
    }, {
      isImmutable: r = ky,
      ignoredPaths: i,
      warnAfter: s = 32
    } = n;
    const a = Oy.bind(null, r, i);
    return ({
      getState: c
    }) => {
      let u = c(), h = a(u), f;
      return (m) => (_) => {
        const w = Ad(s, "ImmutableStateInvariantMiddleware");
        w.measureTime(() => {
          if (u = c(), f = h.detectMutations(), h = a(u), f.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? se(19) : `A state mutation was detected between dispatches, in the path '${f.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const A = m(_);
        return w.measureTime(() => {
          if (u = c(), f = h.detectMutations(), h = a(u), f.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? se(20) : `A state mutation was detected inside a dispatch, in the path: ${f.path || ""}. Take a look at the reducer(s) handling the action ${e(_)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), w.warnIfExceeded(), A;
      };
    };
  }
}
function Pd(n) {
  const e = typeof n;
  return n == null || e === "string" || e === "boolean" || e === "number" || Array.isArray(n) || vi(n);
}
function da(n, e = "", t = Pd, r, i = [], s) {
  let a;
  if (!t(n))
    return {
      keyPath: e || "<root>",
      value: n
    };
  if (typeof n != "object" || n === null || s != null && s.has(n))
    return !1;
  const c = r != null ? r(n) : Object.entries(n), u = i.length > 0;
  for (const [h, f] of c) {
    const m = e ? e + "." + h : h;
    if (!(u && i.some((w) => w instanceof RegExp ? w.test(m) : m === w))) {
      if (!t(f))
        return {
          keyPath: m,
          value: f
        };
      if (typeof f == "object" && (a = da(f, m, t, r, i, s), a))
        return a;
    }
  }
  return s && kd(n) && s.add(n), !1;
}
function kd(n) {
  if (!Object.isFrozen(n))
    return !1;
  for (const e of Object.values(n))
    if (!(typeof e != "object" || e === null) && !kd(e))
      return !1;
  return !0;
}
function Dy(n = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (e) => (t) => e(t);
  {
    const {
      isSerializable: e = Pd,
      getEntries: t,
      ignoredActions: r = [],
      ignoredActionPaths: i = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: s = [],
      warnAfter: a = 32,
      ignoreState: c = !1,
      ignoreActions: u = !1,
      disableCache: h = !1
    } = n, f = !h && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (m) => (_) => (w) => {
      if (!za(w))
        return _(w);
      const A = _(w), R = Ad(a, "SerializableStateInvariantMiddleware");
      return !u && !(r.length && r.indexOf(w.type) !== -1) && R.measureTime(() => {
        const p = da(w, "", e, t, i, f);
        if (p) {
          const {
            keyPath: I,
            value: D
          } = p;
          console.error(`A non-serializable value was detected in an action, in the path: \`${I}\`. Value:`, D, `
Take a look at the logic that dispatched this action: `, w, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), c || (R.measureTime(() => {
        const p = m.getState(), I = da(p, "", e, t, s, f);
        if (I) {
          const {
            keyPath: D,
            value: O
          } = I;
          console.error(`A non-serializable value was detected in the state, in the path: \`${D}\`. Value:`, O, `
Take a look at the reducer(s) handling this action type: ${w.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), R.warnIfExceeded()), A;
    };
  }
}
function Qi(n) {
  return typeof n == "boolean";
}
var xy = () => function(e) {
  const {
    thunk: t = !0,
    immutableCheck: r = !0,
    serializableCheck: i = !0,
    actionCreatorCheck: s = !0
  } = e ?? {};
  let a = new Sd();
  if (t && (Qi(t) ? a.push(vy) : a.push(wy(t.extraArgument))), process.env.NODE_ENV !== "production") {
    if (r) {
      let c = {};
      Qi(r) || (c = r), a.unshift(Ny(c));
    }
    if (i) {
      let c = {};
      Qi(i) || (c = i), a.push(Dy(c));
    }
    if (s) {
      let c = {};
      Qi(s) || (c = s), a.unshift(Py(c));
    }
  }
  return a;
}, Vy = "RTK_autoBatch", Od = (n) => (e) => {
  setTimeout(e, n);
}, My = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Od(10), Ly = (n = {
  type: "raf"
}) => (e) => (...t) => {
  const r = e(...t);
  let i = !0, s = !1, a = !1;
  const c = /* @__PURE__ */ new Set(), u = n.type === "tick" ? queueMicrotask : n.type === "raf" ? My : n.type === "callback" ? n.queueNotification : Od(n.timeout), h = () => {
    a = !1, s && (s = !1, c.forEach((f) => f()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(f) {
      const m = () => i && f(), _ = r.subscribe(m);
      return c.add(f), () => {
        _(), c.delete(f);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(f) {
      var m;
      try {
        return i = !((m = f == null ? void 0 : f.meta) != null && m[Vy]), s = !i, s && (a || (a = !0, u(h))), r.dispatch(f);
      } finally {
        i = !0;
      }
    }
  });
}, Fy = (n) => function(t) {
  const {
    autoBatch: r = !0
  } = t ?? {};
  let i = new Sd(n);
  return r && i.push(Ly(typeof r == "object" ? r : void 0)), i;
}, Kt = process.env.NODE_ENV === "production";
function Uy(n) {
  const e = xy(), {
    reducer: t = void 0,
    middleware: r,
    devTools: i = !0,
    preloadedState: s = void 0,
    enhancers: a = void 0
  } = n || {};
  let c;
  if (typeof t == "function")
    c = t;
  else if (vi(t))
    c = Gg(t);
  else
    throw new Error(process.env.NODE_ENV === "production" ? se(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (!Kt && r && typeof r != "function")
    throw new Error(process.env.NODE_ENV === "production" ? se(2) : "`middleware` field must be a callback");
  let u;
  if (typeof r == "function") {
    if (u = r(e), !Kt && !Array.isArray(u))
      throw new Error(process.env.NODE_ENV === "production" ? se(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    u = e();
  if (!Kt && u.some((A) => typeof A != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? se(4) : "each middleware provided to configureStore must be a function");
  let h = _s;
  i && (h = Iy({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !Kt,
    ...typeof i == "object" && i
  }));
  const f = Qg(...u), m = Fy(f);
  if (!Kt && a && typeof a != "function")
    throw new Error(process.env.NODE_ENV === "production" ? se(5) : "`enhancers` field must be a callback");
  let _ = typeof a == "function" ? a(m) : m();
  if (!Kt && !Array.isArray(_))
    throw new Error(process.env.NODE_ENV === "production" ? se(6) : "`enhancers` callback must return an array");
  if (!Kt && _.some((A) => typeof A != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? se(7) : "each enhancer provided to configureStore must be a function");
  !Kt && u.length && !_.includes(f) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const w = h(..._);
  return gd(c, s, w);
}
function Nd(n) {
  const e = {}, t = [];
  let r;
  const i = {
    addCase(s, a) {
      if (process.env.NODE_ENV !== "production") {
        if (t.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? se(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (r)
          throw new Error(process.env.NODE_ENV === "production" ? se(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const c = typeof s == "string" ? s : s.type;
      if (!c)
        throw new Error(process.env.NODE_ENV === "production" ? se(28) : "`builder.addCase` cannot be called with an empty action type");
      if (c in e)
        throw new Error(process.env.NODE_ENV === "production" ? se(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${c}'`);
      return e[c] = a, i;
    },
    addMatcher(s, a) {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error(process.env.NODE_ENV === "production" ? se(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return t.push({
        matcher: s,
        reducer: a
      }), i;
    },
    addDefaultCase(s) {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error(process.env.NODE_ENV === "production" ? se(31) : "`builder.addDefaultCase` can only be called once");
      return r = s, i;
    }
  };
  return n(i), [e, t, r];
}
function $y(n) {
  return typeof n == "function";
}
function jy(n, e) {
  if (process.env.NODE_ENV !== "production" && typeof e == "object")
    throw new Error(process.env.NODE_ENV === "production" ? se(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [t, r, i] = Nd(e), s;
  if ($y(n))
    s = () => sl(n());
  else {
    const c = sl(n);
    s = () => c;
  }
  function a(c = s(), u) {
    let h = [t[u.type], ...r.filter(({
      matcher: f
    }) => f(u)).map(({
      reducer: f
    }) => f)];
    return h.filter((f) => !!f).length === 0 && (h = [i]), h.reduce((f, m) => {
      if (m)
        if (wt(f)) {
          const w = m(f, u);
          return w === void 0 ? f : w;
        } else {
          if (Vt(f))
            return Wa(f, (_) => m(_, u));
          {
            const _ = m(f, u);
            if (_ === void 0) {
              if (f === null)
                return f;
              throw new Error(process.env.NODE_ENV === "production" ? se(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return _;
          }
        }
      return f;
    }, c);
  }
  return a.getInitialState = s, a;
}
var By = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", ot = (n = 21) => {
  let e = "", t = n;
  for (; t--; )
    e += By[Math.random() * 64 | 0];
  return e;
}, zy = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function qy(n, e) {
  return `${n}/${e}`;
}
function Hy({
  creators: n
} = {}) {
  var t;
  const e = (t = n == null ? void 0 : n.asyncThunk) == null ? void 0 : t[zy];
  return function(i) {
    const {
      name: s,
      reducerPath: a = s
    } = i;
    if (!s)
      throw new Error(process.env.NODE_ENV === "production" ? se(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && i.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const c = (typeof i.reducers == "function" ? i.reducers(Ky()) : i.reducers) || {}, u = Object.keys(c), h = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, f = {
      addCase(O, N) {
        const C = typeof O == "string" ? O : O.type;
        if (!C)
          throw new Error(process.env.NODE_ENV === "production" ? se(12) : "`context.addCase` cannot be called with an empty action type");
        if (C in h.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? se(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + C);
        return h.sliceCaseReducersByType[C] = N, f;
      },
      addMatcher(O, N) {
        return h.sliceMatchers.push({
          matcher: O,
          reducer: N
        }), f;
      },
      exposeAction(O, N) {
        return h.actionCreators[O] = N, f;
      },
      exposeCaseReducer(O, N) {
        return h.sliceCaseReducersByName[O] = N, f;
      }
    };
    u.forEach((O) => {
      const N = c[O], C = {
        reducerName: O,
        type: qy(s, O),
        createNotation: typeof i.reducers == "function"
      };
      Qy(N) ? Xy(C, N, f, e) : Gy(C, N, f);
    });
    function m() {
      if (process.env.NODE_ENV !== "production" && typeof i.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? se(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [O = {}, N = [], C = void 0] = typeof i.extraReducers == "function" ? Nd(i.extraReducers) : [i.extraReducers], M = {
        ...O,
        ...h.sliceCaseReducersByType
      };
      return jy(i.initialState, (T) => {
        for (let y in M)
          T.addCase(y, M[y]);
        for (let y of h.sliceMatchers)
          T.addMatcher(y.matcher, y.reducer);
        for (let y of N)
          T.addMatcher(y.matcher, y.reducer);
        C && T.addDefaultCase(C);
      });
    }
    const _ = (O) => O, w = /* @__PURE__ */ new Map();
    let A;
    function R(O, N) {
      return A || (A = m()), A(O, N);
    }
    function p() {
      return A || (A = m()), A.getInitialState();
    }
    function I(O, N = !1) {
      function C(T) {
        let y = T[O];
        if (typeof y > "u") {
          if (N)
            y = p();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? se(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return y;
      }
      function M(T = _) {
        const y = ol(w, N, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return ol(y, T, {
          insert: () => {
            const v = {};
            for (const [b, S] of Object.entries(i.selectors ?? {}))
              v[b] = Wy(S, T, p, N);
            return v;
          }
        });
      }
      return {
        reducerPath: O,
        getSelectors: M,
        get selectors() {
          return M(C);
        },
        selectSlice: C
      };
    }
    const D = {
      name: s,
      reducer: R,
      actions: h.actionCreators,
      caseReducers: h.sliceCaseReducersByName,
      getInitialState: p,
      ...I(a),
      injectInto(O, {
        reducerPath: N,
        ...C
      } = {}) {
        const M = N ?? a;
        return O.inject({
          reducerPath: M,
          reducer: R
        }, C), {
          ...D,
          ...I(M, !0)
        };
      }
    };
    return D;
  };
}
function Wy(n, e, t, r) {
  function i(s, ...a) {
    let c = e(s);
    if (typeof c > "u") {
      if (r)
        c = t();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? se(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return n(c, ...a);
  }
  return i.unwrapped = n, i;
}
var Ws = /* @__PURE__ */ Hy();
function Ky() {
  function n(e, t) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: e,
      ...t
    };
  }
  return n.withTypes = () => n, {
    reducer(e) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [e.name](...t) {
          return e(...t);
        }
      }[e.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(e, t) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: e,
        reducer: t
      };
    },
    asyncThunk: n
  };
}
function Gy({
  type: n,
  reducerName: e,
  createNotation: t
}, r, i) {
  let s, a;
  if ("reducer" in r) {
    if (t && !Yy(r))
      throw new Error(process.env.NODE_ENV === "production" ? se(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    s = r.reducer, a = r.prepare;
  } else
    s = r;
  i.addCase(n, s).exposeCaseReducer(e, s).exposeAction(e, a ? or(n, a) : or(n));
}
function Qy(n) {
  return n._reducerDefinitionType === "asyncThunk";
}
function Yy(n) {
  return n._reducerDefinitionType === "reducerWithPrepare";
}
function Xy({
  type: n,
  reducerName: e
}, t, r, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? se(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: s,
    fulfilled: a,
    pending: c,
    rejected: u,
    settled: h,
    options: f
  } = t, m = i(n, s, f);
  r.exposeAction(e, m), a && r.addCase(m.fulfilled, a), c && r.addCase(m.pending, c), u && r.addCase(m.rejected, u), h && r.addMatcher(m.settled, h), r.exposeCaseReducer(e, {
    fulfilled: a || Yi,
    pending: c || Yi,
    rejected: u || Yi,
    settled: h || Yi
  });
}
function Yi() {
}
function Jy() {
  return {
    ids: [],
    entities: {}
  };
}
function Zy(n) {
  function e(t = {}, r) {
    const i = Object.assign(Jy(), t);
    return r ? n.setAll(i, r) : i;
  }
  return {
    getInitialState: e
  };
}
function e_() {
  function n(e, t = {}) {
    const {
      createSelector: r = Ty
    } = t, i = (m) => m.ids, s = (m) => m.entities, a = r(i, s, (m, _) => m.map((w) => _[w])), c = (m, _) => _, u = (m, _) => m[_], h = r(i, (m) => m.length);
    if (!e)
      return {
        selectIds: i,
        selectEntities: s,
        selectAll: a,
        selectTotal: h,
        selectById: r(s, c, u)
      };
    const f = r(e, s);
    return {
      selectIds: r(e, i),
      selectEntities: f,
      selectAll: r(e, a),
      selectTotal: r(e, h),
      selectById: r(f, c, u)
    };
  }
  return {
    getSelectors: n
  };
}
var t_ = wt;
function n_(n) {
  const e = me((t, r) => n(r));
  return function(r) {
    return e(r, void 0);
  };
}
function me(n) {
  return function(t, r) {
    function i(a) {
      return Sy(a);
    }
    const s = (a) => {
      i(r) ? n(r.payload, a) : n(r, a);
    };
    return t_(t) ? (s(t), t) : Wa(t, s);
  };
}
function Zn(n, e) {
  const t = e(n);
  return process.env.NODE_ENV !== "production" && t === void 0 && console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", n, "The `selectId` implementation:", e.toString()), t;
}
function Rn(n) {
  return Array.isArray(n) || (n = Object.values(n)), n;
}
function fa(n) {
  return wt(n) ? Hs(n) : n;
}
function Dd(n, e, t) {
  n = Rn(n);
  const r = fa(t.ids), i = new Set(r), s = [], a = [];
  for (const c of n) {
    const u = Zn(c, e);
    i.has(u) ? a.push({
      id: u,
      changes: c
    }) : s.push(c);
  }
  return [s, a, r];
}
function xd(n) {
  function e(A, R) {
    const p = Zn(A, n);
    p in R.entities || (R.ids.push(p), R.entities[p] = A);
  }
  function t(A, R) {
    A = Rn(A);
    for (const p of A)
      e(p, R);
  }
  function r(A, R) {
    const p = Zn(A, n);
    p in R.entities || R.ids.push(p), R.entities[p] = A;
  }
  function i(A, R) {
    A = Rn(A);
    for (const p of A)
      r(p, R);
  }
  function s(A, R) {
    A = Rn(A), R.ids = [], R.entities = {}, t(A, R);
  }
  function a(A, R) {
    return c([A], R);
  }
  function c(A, R) {
    let p = !1;
    A.forEach((I) => {
      I in R.entities && (delete R.entities[I], p = !0);
    }), p && (R.ids = R.ids.filter((I) => I in R.entities));
  }
  function u(A) {
    Object.assign(A, {
      ids: [],
      entities: {}
    });
  }
  function h(A, R, p) {
    const I = p.entities[R.id];
    if (I === void 0)
      return !1;
    const D = Object.assign({}, I, R.changes), O = Zn(D, n), N = O !== R.id;
    return N && (A[R.id] = O, delete p.entities[R.id]), p.entities[O] = D, N;
  }
  function f(A, R) {
    return m([A], R);
  }
  function m(A, R) {
    const p = {}, I = {};
    A.forEach((O) => {
      O.id in R.entities && (I[O.id] = {
        id: O.id,
        // Spreads ignore falsy values, so this works even if there isn't
        // an existing update already at this key
        changes: {
          ...I[O.id] ? I[O.id].changes : null,
          ...O.changes
        }
      });
    }), A = Object.values(I), A.length > 0 && A.filter((N) => h(p, N, R)).length > 0 && (R.ids = Object.values(R.entities).map((N) => Zn(N, n)));
  }
  function _(A, R) {
    return w([A], R);
  }
  function w(A, R) {
    const [p, I] = Dd(A, n, R);
    m(I, R), t(p, R);
  }
  return {
    removeAll: n_(u),
    addOne: me(e),
    addMany: me(t),
    setOne: me(r),
    setMany: me(i),
    setAll: me(s),
    updateOne: me(f),
    updateMany: me(m),
    upsertOne: me(_),
    upsertMany: me(w),
    removeOne: me(a),
    removeMany: me(c)
  };
}
function r_(n, e, t) {
  let r = 0, i = n.length;
  for (; r < i; ) {
    let s = r + i >>> 1;
    const a = n[s];
    t(e, a) >= 0 ? r = s + 1 : i = s;
  }
  return r;
}
function i_(n, e, t) {
  const r = r_(n, e, t);
  return n.splice(r, 0, e), n;
}
function s_(n, e) {
  const {
    removeOne: t,
    removeMany: r,
    removeAll: i
  } = xd(n);
  function s(I, D) {
    return a([I], D);
  }
  function a(I, D, O) {
    I = Rn(I);
    const N = new Set(O ?? Hs(D.ids)), C = I.filter((M) => !N.has(Zn(M, n)));
    C.length !== 0 && p(D, C);
  }
  function c(I, D) {
    return u([I], D);
  }
  function u(I, D) {
    if (I = Rn(I), I.length !== 0) {
      for (const O of I)
        delete D.entities[n(O)];
      p(D, I);
    }
  }
  function h(I, D) {
    I = Rn(I), D.entities = {}, D.ids = [], a(I, D, []);
  }
  function f(I, D) {
    return m([I], D);
  }
  function m(I, D) {
    let O = !1, N = !1;
    for (let C of I) {
      const M = D.entities[C.id];
      if (!M)
        continue;
      O = !0, Object.assign(M, C.changes);
      const T = n(M);
      if (C.id !== T) {
        N = !0, delete D.entities[C.id];
        const y = D.ids.indexOf(C.id);
        D.ids[y] = T, D.entities[T] = M;
      }
    }
    O && p(D, [], O, N);
  }
  function _(I, D) {
    return w([I], D);
  }
  function w(I, D) {
    const [O, N, C] = Dd(I, n, D);
    N.length && m(N, D), O.length && a(O, D, C);
  }
  function A(I, D) {
    if (I.length !== D.length)
      return !1;
    for (let O = 0; O < I.length && O < D.length; O++)
      if (I[O] !== D[O])
        return !1;
    return !0;
  }
  const p = (I, D, O, N) => {
    const C = fa(I.entities), M = fa(I.ids), T = I.entities;
    let y = M;
    N && (y = Array.from(new Set(M)));
    let v = [];
    for (const P of y) {
      const E = C[P];
      E && v.push(E);
    }
    const b = v.length === 0;
    for (const P of D)
      T[n(P)] = P, b || i_(v, P, e);
    b ? v = D.slice().sort(e) : O && v.sort(e);
    const S = v.map(n);
    A(M, S) || (I.ids = S);
  };
  return {
    removeOne: t,
    removeMany: r,
    removeAll: i,
    addOne: me(s),
    updateOne: me(f),
    upsertOne: me(_),
    setOne: me(c),
    setMany: me(u),
    setAll: me(h),
    addMany: me(a),
    updateMany: me(m),
    upsertMany: me(w)
  };
}
function o_(n = {}) {
  const {
    selectId: e,
    sortComparer: t
  } = {
    sortComparer: !1,
    selectId: (a) => a.id,
    ...n
  }, r = t ? s_(e, t) : xd(e), i = Zy(r), s = e_();
  return {
    selectId: e,
    sortComparer: t,
    ...i,
    ...s,
    ...r
  };
}
var a_ = (n, e) => {
  if (typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? se(32) : `${e} is not a function`);
}, Ga = "listenerMiddleware", c_ = (n) => {
  let {
    type: e,
    actionCreator: t,
    matcher: r,
    predicate: i,
    effect: s
  } = n;
  if (e)
    i = or(e).match;
  else if (t)
    e = t.type, i = t.match;
  else if (r)
    i = r;
  else if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? se(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return a_(s, "options.listener"), {
    predicate: i,
    type: e,
    effect: s
  };
}, u_ = Object.assign((n) => {
  const {
    type: e,
    predicate: t,
    effect: r
  } = c_(n);
  return {
    id: ot(),
    effect: r,
    type: e,
    predicate: t,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? se(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => u_
}), l_ = Object.assign(or(`${Ga}/add`), {
  withTypes: () => l_
});
or(`${Ga}/removeAll`);
var h_ = Object.assign(or(`${Ga}/remove`), {
  withTypes: () => h_
});
function se(n) {
  return `Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
var pa = { exports: {} }, Uo = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var al;
function d_() {
  if (al)
    return Uo;
  al = 1;
  var n = z;
  function e(m, _) {
    return m === _ && (m !== 0 || 1 / m === 1 / _) || m !== m && _ !== _;
  }
  var t = typeof Object.is == "function" ? Object.is : e, r = n.useState, i = n.useEffect, s = n.useLayoutEffect, a = n.useDebugValue;
  function c(m, _) {
    var w = _(), A = r({ inst: { value: w, getSnapshot: _ } }), R = A[0].inst, p = A[1];
    return s(function() {
      R.value = w, R.getSnapshot = _, u(R) && p({ inst: R });
    }, [m, w, _]), i(function() {
      return u(R) && p({ inst: R }), m(function() {
        u(R) && p({ inst: R });
      });
    }, [m]), a(w), w;
  }
  function u(m) {
    var _ = m.getSnapshot;
    m = m.value;
    try {
      var w = _();
      return !t(m, w);
    } catch {
      return !0;
    }
  }
  function h(m, _) {
    return _();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : c;
  return Uo.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : f, Uo;
}
var $o = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cl;
function f_() {
  return cl || (cl = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var n = z, e = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function t(O) {
      {
        for (var N = arguments.length, C = new Array(N > 1 ? N - 1 : 0), M = 1; M < N; M++)
          C[M - 1] = arguments[M];
        r("error", O, C);
      }
    }
    function r(O, N, C) {
      {
        var M = e.ReactDebugCurrentFrame, T = M.getStackAddendum();
        T !== "" && (N += "%s", C = C.concat([T]));
        var y = C.map(function(v) {
          return String(v);
        });
        y.unshift("Warning: " + N), Function.prototype.apply.call(console[O], console, y);
      }
    }
    function i(O, N) {
      return O === N && (O !== 0 || 1 / O === 1 / N) || O !== O && N !== N;
    }
    var s = typeof Object.is == "function" ? Object.is : i, a = n.useState, c = n.useEffect, u = n.useLayoutEffect, h = n.useDebugValue, f = !1, m = !1;
    function _(O, N, C) {
      f || n.startTransition !== void 0 && (f = !0, t("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var M = N();
      if (!m) {
        var T = N();
        s(M, T) || (t("The result of getSnapshot should be cached to avoid an infinite loop"), m = !0);
      }
      var y = a({
        inst: {
          value: M,
          getSnapshot: N
        }
      }), v = y[0].inst, b = y[1];
      return u(function() {
        v.value = M, v.getSnapshot = N, w(v) && b({
          inst: v
        });
      }, [O, M, N]), c(function() {
        w(v) && b({
          inst: v
        });
        var S = function() {
          w(v) && b({
            inst: v
          });
        };
        return O(S);
      }, [O]), h(M), M;
    }
    function w(O) {
      var N = O.getSnapshot, C = O.value;
      try {
        var M = N();
        return !s(C, M);
      } catch {
        return !0;
      }
    }
    function A(O, N, C) {
      return N();
    }
    var R = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", p = !R, I = p ? A : _, D = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : I;
    $o.useSyncExternalStore = D, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), $o;
}
process.env.NODE_ENV === "production" ? pa.exports = d_() : pa.exports = f_();
var Vd = pa.exports, ma = { exports: {} }, jo = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ul;
function p_() {
  if (ul)
    return jo;
  ul = 1;
  var n = z, e = Vd;
  function t(h, f) {
    return h === f && (h !== 0 || 1 / h === 1 / f) || h !== h && f !== f;
  }
  var r = typeof Object.is == "function" ? Object.is : t, i = e.useSyncExternalStore, s = n.useRef, a = n.useEffect, c = n.useMemo, u = n.useDebugValue;
  return jo.useSyncExternalStoreWithSelector = function(h, f, m, _, w) {
    var A = s(null);
    if (A.current === null) {
      var R = { hasValue: !1, value: null };
      A.current = R;
    } else
      R = A.current;
    A = c(function() {
      function I(M) {
        if (!D) {
          if (D = !0, O = M, M = _(M), w !== void 0 && R.hasValue) {
            var T = R.value;
            if (w(T, M))
              return N = T;
          }
          return N = M;
        }
        if (T = N, r(O, M))
          return T;
        var y = _(M);
        return w !== void 0 && w(T, y) ? T : (O = M, N = y);
      }
      var D = !1, O, N, C = m === void 0 ? null : m;
      return [function() {
        return I(f());
      }, C === null ? void 0 : function() {
        return I(C());
      }];
    }, [f, m, _, w]);
    var p = i(h, A[0], A[1]);
    return a(function() {
      R.hasValue = !0, R.value = p;
    }, [p]), u(p), p;
  }, jo;
}
var Bo = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ll;
function m_() {
  return ll || (ll = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var n = z, e = Vd;
    function t(f, m) {
      return f === m && (f !== 0 || 1 / f === 1 / m) || f !== f && m !== m;
    }
    var r = typeof Object.is == "function" ? Object.is : t, i = e.useSyncExternalStore, s = n.useRef, a = n.useEffect, c = n.useMemo, u = n.useDebugValue;
    function h(f, m, _, w, A) {
      var R = s(null), p;
      R.current === null ? (p = {
        hasValue: !1,
        value: null
      }, R.current = p) : p = R.current;
      var I = c(function() {
        var C = !1, M, T, y = function(P) {
          if (!C) {
            C = !0, M = P;
            var E = w(P);
            if (A !== void 0 && p.hasValue) {
              var be = p.value;
              if (A(be, E))
                return T = be, be;
            }
            return T = E, E;
          }
          var ct = M, bt = T;
          if (r(ct, P))
            return bt;
          var Ge = w(P);
          return A !== void 0 && A(bt, Ge) ? bt : (M = P, T = Ge, Ge);
        }, v = _ === void 0 ? null : _, b = function() {
          return y(m());
        }, S = v === null ? void 0 : function() {
          return y(v());
        };
        return [b, S];
      }, [m, _, w, A]), D = I[0], O = I[1], N = i(f, D, O);
      return a(function() {
        p.hasValue = !0, p.value = N;
      }, [N]), u(N), N;
    }
    Bo.useSyncExternalStoreWithSelector = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Bo;
}
process.env.NODE_ENV === "production" ? ma.exports = p_() : ma.exports = m_();
var g_ = ma.exports;
function y_(n) {
  n();
}
let Md = y_;
const __ = (n) => Md = n, kC = () => Md, hl = Symbol.for("react-redux-context"), dl = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function v_() {
  var n;
  if (!Ki.createContext)
    return {};
  const e = (n = dl[hl]) != null ? n : dl[hl] = /* @__PURE__ */ new Map();
  let t = e.get(Ki.createContext);
  return t || (t = Ki.createContext(null), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(Ki.createContext, t)), t;
}
const ga = /* @__PURE__ */ v_();
function Ld(n = ga) {
  return function() {
    const t = Og(n);
    if (process.env.NODE_ENV !== "production" && !t)
      throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
    return t;
  };
}
const w_ = /* @__PURE__ */ Ld(), E_ = () => {
  throw new Error("uSES not initialized!");
};
let Fd = E_;
const T_ = (n) => {
  Fd = n;
}, I_ = (n, e) => n === e;
function b_(n = ga) {
  const e = n === ga ? w_ : Ld(n);
  return function(r, i = {}) {
    const {
      equalityFn: s = I_,
      stabilityCheck: a = void 0,
      noopCheck: c = void 0
    } = typeof i == "function" ? {
      equalityFn: i
    } : i;
    if (process.env.NODE_ENV !== "production") {
      if (!r)
        throw new Error("You must pass a selector to useSelector");
      if (typeof r != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof s != "function")
        throw new Error("You must pass a function as an equality function to useSelector");
    }
    const {
      store: u,
      subscription: h,
      getServerState: f,
      stabilityCheck: m,
      noopCheck: _
    } = e(), w = Ng(!0), A = Dg({
      [r.name](p) {
        const I = r(p);
        if (process.env.NODE_ENV !== "production") {
          const D = typeof a > "u" ? m : a;
          if (D === "always" || D === "once" && w.current) {
            const N = r(p);
            if (!s(I, N)) {
              let C;
              try {
                throw new Error();
              } catch (M) {
                ({
                  stack: C
                } = M);
              }
              console.warn("Selector " + (r.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`, {
                state: p,
                selected: I,
                selected2: N,
                stack: C
              });
            }
          }
          const O = typeof c > "u" ? _ : c;
          if ((O === "always" || O === "once" && w.current) && I === p) {
            let N;
            try {
              throw new Error();
            } catch (C) {
              ({
                stack: N
              } = C);
            }
            console.warn("Selector " + (r.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`, {
              stack: N
            });
          }
          w.current && (w.current = !1);
        }
        return I;
      }
    }[r.name], [r, m, a]), R = Fd(h.addNestedSub, u.getState, f || u.getState, A, s);
    return xg(R), R;
  };
}
const Te = /* @__PURE__ */ b_();
var Xi = { exports: {} }, te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fl;
function A_() {
  if (fl)
    return te;
  fl = 1;
  var n = typeof Symbol == "function" && Symbol.for, e = n ? Symbol.for("react.element") : 60103, t = n ? Symbol.for("react.portal") : 60106, r = n ? Symbol.for("react.fragment") : 60107, i = n ? Symbol.for("react.strict_mode") : 60108, s = n ? Symbol.for("react.profiler") : 60114, a = n ? Symbol.for("react.provider") : 60109, c = n ? Symbol.for("react.context") : 60110, u = n ? Symbol.for("react.async_mode") : 60111, h = n ? Symbol.for("react.concurrent_mode") : 60111, f = n ? Symbol.for("react.forward_ref") : 60112, m = n ? Symbol.for("react.suspense") : 60113, _ = n ? Symbol.for("react.suspense_list") : 60120, w = n ? Symbol.for("react.memo") : 60115, A = n ? Symbol.for("react.lazy") : 60116, R = n ? Symbol.for("react.block") : 60121, p = n ? Symbol.for("react.fundamental") : 60117, I = n ? Symbol.for("react.responder") : 60118, D = n ? Symbol.for("react.scope") : 60119;
  function O(C) {
    if (typeof C == "object" && C !== null) {
      var M = C.$$typeof;
      switch (M) {
        case e:
          switch (C = C.type, C) {
            case u:
            case h:
            case r:
            case s:
            case i:
            case m:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case c:
                case f:
                case A:
                case w:
                case a:
                  return C;
                default:
                  return M;
              }
          }
        case t:
          return M;
      }
    }
  }
  function N(C) {
    return O(C) === h;
  }
  return te.AsyncMode = u, te.ConcurrentMode = h, te.ContextConsumer = c, te.ContextProvider = a, te.Element = e, te.ForwardRef = f, te.Fragment = r, te.Lazy = A, te.Memo = w, te.Portal = t, te.Profiler = s, te.StrictMode = i, te.Suspense = m, te.isAsyncMode = function(C) {
    return N(C) || O(C) === u;
  }, te.isConcurrentMode = N, te.isContextConsumer = function(C) {
    return O(C) === c;
  }, te.isContextProvider = function(C) {
    return O(C) === a;
  }, te.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === e;
  }, te.isForwardRef = function(C) {
    return O(C) === f;
  }, te.isFragment = function(C) {
    return O(C) === r;
  }, te.isLazy = function(C) {
    return O(C) === A;
  }, te.isMemo = function(C) {
    return O(C) === w;
  }, te.isPortal = function(C) {
    return O(C) === t;
  }, te.isProfiler = function(C) {
    return O(C) === s;
  }, te.isStrictMode = function(C) {
    return O(C) === i;
  }, te.isSuspense = function(C) {
    return O(C) === m;
  }, te.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === r || C === h || C === s || C === i || C === m || C === _ || typeof C == "object" && C !== null && (C.$$typeof === A || C.$$typeof === w || C.$$typeof === a || C.$$typeof === c || C.$$typeof === f || C.$$typeof === p || C.$$typeof === I || C.$$typeof === D || C.$$typeof === R);
  }, te.typeOf = O, te;
}
var ne = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pl;
function S_() {
  return pl || (pl = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, e = n ? Symbol.for("react.element") : 60103, t = n ? Symbol.for("react.portal") : 60106, r = n ? Symbol.for("react.fragment") : 60107, i = n ? Symbol.for("react.strict_mode") : 60108, s = n ? Symbol.for("react.profiler") : 60114, a = n ? Symbol.for("react.provider") : 60109, c = n ? Symbol.for("react.context") : 60110, u = n ? Symbol.for("react.async_mode") : 60111, h = n ? Symbol.for("react.concurrent_mode") : 60111, f = n ? Symbol.for("react.forward_ref") : 60112, m = n ? Symbol.for("react.suspense") : 60113, _ = n ? Symbol.for("react.suspense_list") : 60120, w = n ? Symbol.for("react.memo") : 60115, A = n ? Symbol.for("react.lazy") : 60116, R = n ? Symbol.for("react.block") : 60121, p = n ? Symbol.for("react.fundamental") : 60117, I = n ? Symbol.for("react.responder") : 60118, D = n ? Symbol.for("react.scope") : 60119;
    function O($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === r || $ === h || $ === s || $ === i || $ === m || $ === _ || typeof $ == "object" && $ !== null && ($.$$typeof === A || $.$$typeof === w || $.$$typeof === a || $.$$typeof === c || $.$$typeof === f || $.$$typeof === p || $.$$typeof === I || $.$$typeof === D || $.$$typeof === R);
    }
    function N($) {
      if (typeof $ == "object" && $ !== null) {
        var Rt = $.$$typeof;
        switch (Rt) {
          case e:
            var j = $.type;
            switch (j) {
              case u:
              case h:
              case r:
              case s:
              case i:
              case m:
                return j;
              default:
                var pt = j && j.$$typeof;
                switch (pt) {
                  case c:
                  case f:
                  case A:
                  case w:
                  case a:
                    return pt;
                  default:
                    return Rt;
                }
            }
          case t:
            return Rt;
        }
      }
    }
    var C = u, M = h, T = c, y = a, v = e, b = f, S = r, P = A, E = w, be = t, ct = s, bt = i, Ge = m, ut = !1;
    function jt($) {
      return ut || (ut = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), pn($) || N($) === u;
    }
    function pn($) {
      return N($) === h;
    }
    function Ir($) {
      return N($) === c;
    }
    function tt($) {
      return N($) === a;
    }
    function ge($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === e;
    }
    function br($) {
      return N($) === f;
    }
    function At($) {
      return N($) === r;
    }
    function Ar($) {
      return N($) === A;
    }
    function St($) {
      return N($) === w;
    }
    function Sr($) {
      return N($) === t;
    }
    function Rr($) {
      return N($) === s;
    }
    function Bt($) {
      return N($) === i;
    }
    function zt($) {
      return N($) === m;
    }
    ne.AsyncMode = C, ne.ConcurrentMode = M, ne.ContextConsumer = T, ne.ContextProvider = y, ne.Element = v, ne.ForwardRef = b, ne.Fragment = S, ne.Lazy = P, ne.Memo = E, ne.Portal = be, ne.Profiler = ct, ne.StrictMode = bt, ne.Suspense = Ge, ne.isAsyncMode = jt, ne.isConcurrentMode = pn, ne.isContextConsumer = Ir, ne.isContextProvider = tt, ne.isElement = ge, ne.isForwardRef = br, ne.isFragment = At, ne.isLazy = Ar, ne.isMemo = St, ne.isPortal = Sr, ne.isProfiler = Rr, ne.isStrictMode = Bt, ne.isSuspense = zt, ne.isValidElementType = O, ne.typeOf = N;
  }()), ne;
}
var ml;
function R_() {
  return ml || (ml = 1, process.env.NODE_ENV === "production" ? Xi.exports = A_() : Xi.exports = S_()), Xi.exports;
}
var Ud = R_(), C_ = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, P_ = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, $d = {};
$d[Ud.ForwardRef] = C_;
$d[Ud.Memo] = P_;
var re = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gl;
function k_() {
  if (gl)
    return re;
  gl = 1;
  var n = Symbol.for("react.element"), e = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), A;
  A = Symbol.for("react.module.reference");
  function R(p) {
    if (typeof p == "object" && p !== null) {
      var I = p.$$typeof;
      switch (I) {
        case n:
          switch (p = p.type, p) {
            case t:
            case i:
            case r:
            case h:
            case f:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case c:
                case a:
                case u:
                case _:
                case m:
                case s:
                  return p;
                default:
                  return I;
              }
          }
        case e:
          return I;
      }
    }
  }
  return re.ContextConsumer = a, re.ContextProvider = s, re.Element = n, re.ForwardRef = u, re.Fragment = t, re.Lazy = _, re.Memo = m, re.Portal = e, re.Profiler = i, re.StrictMode = r, re.Suspense = h, re.SuspenseList = f, re.isAsyncMode = function() {
    return !1;
  }, re.isConcurrentMode = function() {
    return !1;
  }, re.isContextConsumer = function(p) {
    return R(p) === a;
  }, re.isContextProvider = function(p) {
    return R(p) === s;
  }, re.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === n;
  }, re.isForwardRef = function(p) {
    return R(p) === u;
  }, re.isFragment = function(p) {
    return R(p) === t;
  }, re.isLazy = function(p) {
    return R(p) === _;
  }, re.isMemo = function(p) {
    return R(p) === m;
  }, re.isPortal = function(p) {
    return R(p) === e;
  }, re.isProfiler = function(p) {
    return R(p) === i;
  }, re.isStrictMode = function(p) {
    return R(p) === r;
  }, re.isSuspense = function(p) {
    return R(p) === h;
  }, re.isSuspenseList = function(p) {
    return R(p) === f;
  }, re.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === t || p === i || p === r || p === h || p === f || p === w || typeof p == "object" && p !== null && (p.$$typeof === _ || p.$$typeof === m || p.$$typeof === s || p.$$typeof === a || p.$$typeof === u || p.$$typeof === A || p.getModuleId !== void 0);
  }, re.typeOf = R, re;
}
var ie = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yl;
function O_() {
  return yl || (yl = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Symbol.for("react.element"), e = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), A = !1, R = !1, p = !1, I = !1, D = !1, O;
    O = Symbol.for("react.module.reference");
    function N(j) {
      return !!(typeof j == "string" || typeof j == "function" || j === t || j === i || D || j === r || j === h || j === f || I || j === w || A || R || p || typeof j == "object" && j !== null && (j.$$typeof === _ || j.$$typeof === m || j.$$typeof === s || j.$$typeof === a || j.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      j.$$typeof === O || j.getModuleId !== void 0));
    }
    function C(j) {
      if (typeof j == "object" && j !== null) {
        var pt = j.$$typeof;
        switch (pt) {
          case n:
            var mn = j.type;
            switch (mn) {
              case t:
              case i:
              case r:
              case h:
              case f:
                return mn;
              default:
                var Cr = mn && mn.$$typeof;
                switch (Cr) {
                  case c:
                  case a:
                  case u:
                  case _:
                  case m:
                  case s:
                    return Cr;
                  default:
                    return pt;
                }
            }
          case e:
            return pt;
        }
      }
    }
    var M = a, T = s, y = n, v = u, b = t, S = _, P = m, E = e, be = i, ct = r, bt = h, Ge = f, ut = !1, jt = !1;
    function pn(j) {
      return ut || (ut = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Ir(j) {
      return jt || (jt = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function tt(j) {
      return C(j) === a;
    }
    function ge(j) {
      return C(j) === s;
    }
    function br(j) {
      return typeof j == "object" && j !== null && j.$$typeof === n;
    }
    function At(j) {
      return C(j) === u;
    }
    function Ar(j) {
      return C(j) === t;
    }
    function St(j) {
      return C(j) === _;
    }
    function Sr(j) {
      return C(j) === m;
    }
    function Rr(j) {
      return C(j) === e;
    }
    function Bt(j) {
      return C(j) === i;
    }
    function zt(j) {
      return C(j) === r;
    }
    function $(j) {
      return C(j) === h;
    }
    function Rt(j) {
      return C(j) === f;
    }
    ie.ContextConsumer = M, ie.ContextProvider = T, ie.Element = y, ie.ForwardRef = v, ie.Fragment = b, ie.Lazy = S, ie.Memo = P, ie.Portal = E, ie.Profiler = be, ie.StrictMode = ct, ie.Suspense = bt, ie.SuspenseList = Ge, ie.isAsyncMode = pn, ie.isConcurrentMode = Ir, ie.isContextConsumer = tt, ie.isContextProvider = ge, ie.isElement = br, ie.isForwardRef = At, ie.isFragment = Ar, ie.isLazy = St, ie.isMemo = Sr, ie.isPortal = Rr, ie.isProfiler = Bt, ie.isStrictMode = zt, ie.isSuspense = $, ie.isSuspenseList = Rt, ie.isValidElementType = N, ie.typeOf = C;
  }()), ie;
}
process.env.NODE_ENV === "production" ? k_() : O_();
T_(g_.useSyncExternalStoreWithSelector);
__(Ug);
function ze(n) {
  const { name: e, default: t, id: r, actions: i, uniques: s = [], onSave: a, onRead: c } = n, u = o_({
    selectId: (p) => p[r]
  }), h = u.getSelectors(), f = u.getInitialState({
    saved: !0,
    status: "idle",
    writeStatus: "ready",
    id: r,
    name: e,
    loadingTime: 600,
    changed: !1
  });
  function m(p, I) {
    const D = Object.values(I), O = Object.values(p).map((C) => {
      const M = typeof t == "function" ? t(I, C) : t;
      return fd(C, M || {});
    });
    if (!s.length)
      return O;
    const N = [...D, ...O.filter(Boolean)];
    return O.filter((C, M) => !N.slice(0, M).find((v) => s.some((b) => Array.isArray(b) ? b.every((S) => (v == null ? void 0 : v[S]) == (C == null ? void 0 : C[S])) : (v == null ? void 0 : v[b]) == C[b])));
  }
  const _ = Ws({
    name: e,
    initialState: f,
    reducers: {
      set(p, { payload: I = [] }) {
        u.setAll(p, m(I, p));
      },
      add(p, { payload: I = [] }) {
        const D = m(I, p);
        u.addMany(p, D), D.length && (p.changed = !0);
      },
      remove(p, { payload: I = [] }) {
        I.some((O) => p.ids.includes(O)) && (p.changed = !0), u.removeMany(p, I);
      },
      update(p, { payload: I = [] }) {
        I.map(({ id: N }) => N).some((N) => p.ids.includes(N)) && (p.changed = !0), u.updateMany(p, I);
      },
      reset(p) {
        p.ids.length || (p.changed = !0), u.removeAll(p);
      },
      upsert(p, { payload: I = [] }) {
        u.upsertMany(p, I), p.changed = !0;
      },
      changeStatus(p, { payload: I }) {
        p.status = I;
      },
      setLoadingTime(p, { payload: I }) {
        p.loadingTime = I;
      },
      setChanged(p, { payload: I }) {
        p.changed = I;
      },
      changeWriteStatus(p, { payload: I }) {
        p.writeStatus = I;
      },
      ...i
    }
  }), w = {
    getFull() {
      return Te((I) => I[e]);
    },
    getIds() {
      return Te((I) => h.selectIds(I[e]));
    },
    getId() {
      return Te((I) => I[e].id);
    },
    remove(p) {
      J.dispatch(_.actions.remove(p));
    },
    add(p) {
      J.dispatch(_.actions.add(p));
    },
    upsert(p) {
      J.dispatch(_.actions.upsert(p));
    },
    getOne(p) {
      return Te((I) => {
        const D = h.selectById(I[e], p);
        return typeof D > "u" ? void 0 : D;
      });
    },
    setOne(p, I) {
      J.dispatch(
        _.actions.update([
          {
            id: p,
            changes: I
          }
        ])
      );
    },
    setWriteStatus(p = "ready") {
      J.dispatch(_.actions.changeWriteStatus(p));
    },
    useOne(p) {
      const I = w.getOne(p);
      return hd(
        I,
        (D) => D !== void 0 && w.setOne(p, D),
        (D) => D ?? void 0
      );
    },
    getOneFeild(p, I) {
      return Te((O) => {
        var C;
        const N = (C = h.selectById(O[e], p)) == null ? void 0 : C[I];
        return typeof N > "u" ? void 0 : N;
      });
    },
    setOneFeild(p, I, D) {
      J.dispatch(
        _.actions.update([
          {
            id: p,
            changes: {
              [I]: D
            }
          }
        ])
      );
    },
    useOneFeild(p, I) {
      const D = w.getOneFeild(p, I);
      return hd(
        D,
        (N) => {
          N != null && w.setOneFeild(p, I, N);
        },
        (N) => N
      );
    },
    getOneFeilds(p, I) {
      return Te((O) => {
        const N = h.selectById(O[e], p);
        if (!N)
          return;
        const C = {};
        return I.forEach((M) => {
          C[M] = N[M];
        }), C;
      });
    },
    getAll() {
      return Te((I) => h.selectAll(I[e]));
    },
    setAll(p) {
      J.dispatch(_.actions.set(p));
    },
    useAll() {
      const p = w.getAll(), I = Be(p);
      return z.useEffect(() => {
        w.setAll(I.get);
      }, [I.get]), z.useEffect(() => {
        I.set(p);
      }, [p]), I;
    },
    getWriteStatus() {
      return Te((I) => I[e].writeStatus);
    },
    useWriteStatus() {
      const p = w.getWriteStatus(), I = Be(p);
      return z.useEffect(() => {
        w.setWriteStatus(I.get);
      }, [I.get]), z.useEffect(() => {
        I.set(p);
      }, [p]), I;
    },
    getStatus() {
      return Te((I) => I[e].status);
    },
    setStatus(p) {
      J.dispatch(_.actions.changeStatus(p));
    },
    useStatus() {
      const p = w.getStatus(), I = Be(p);
      return z.useEffect(() => {
        w.setStatus(I.get);
      }, [I.get]), z.useEffect(() => {
        I.set(p);
      }, [p]), I;
    },
    getEntity() {
      return Te((I) => h.selectEntities(I[e]));
    },
    getLoadingTime() {
      return Te((I) => I[e].loadingTime);
    },
    setLoadingTime(p) {
      J.dispatch(_.actions.setLoadingTime(p));
    },
    useLoadingTime() {
      const p = w.getLoadingTime(), I = Be(p);
      z.useEffect(() => {
        w.setLoadingTime(I.get);
      }, [I.get]), z.useEffect(() => {
        I.set(p);
      }, [p]);
    },
    getChanged() {
      return Te((I) => I[e].changed);
    },
    setChanged(p) {
      J.dispatch(_.actions.setChanged(p));
    },
    useChanged() {
      const p = w.getChanged(), I = Be(p);
      z.useEffect(() => {
        w.setChanged(I.get);
      }, [I.get]), z.useEffect(() => {
        I.set(p);
      }, [p]);
    }
  };
  function A() {
    const p = w.getStatus(), I = w.getId(), D = w.getWriteStatus(), O = w.getLoadingTime();
    return gr(async () => {
      if (p == "idle") {
        const N = new Us();
        N.clear(), w.setStatus("loading"), await N.start(O);
        try {
          if (!c)
            return;
          let C = c();
          C instanceof Promise && (C = await C), w.setChanged(!1), w.setStatus("success"), w.setAll(C);
        } catch {
          w.setAll([]), w.setStatus("error");
        }
      }
    }, [p]), gr(async () => {
      if (D == "idle") {
        w.setWriteStatus("loading");
        const N = {};
        try {
          const C = J.getState(), { [e]: M } = C;
          Object.values(M.entities).forEach((y) => {
            if (!y)
              return;
            const { [I]: v, ...b } = y;
            N[v] = b;
          });
          const T = a == null ? void 0 : a(N, n, C);
          T instanceof Promise && await T, w.setWriteStatus("success"), w.setWriteStatus("ready");
        } catch {
          w.setWriteStatus("error");
        }
      }
    }, [D]), z.useEffect(() => {
      const N = Object.entries(n.data || {}).map(([C, M]) => ({
        [I]: C,
        ...M
      }));
      w.setAll(N);
    }, []), { id: I, saved: D, status: p, timeLoading: O };
  }
  return {
    slice: _,
    entity: u,
    hooks: w,
    entitySelect: h,
    initialState: f,
    init: A,
    select: (p) => p[e]
  };
}
const N_ = {
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
}, { data: D_ } = N_, x_ = {
  name: "views",
  id: "viewId",
  default(n, e) {
    const t = e.tabs || {};
    for (const r in t)
      t[r].label || (t[r].label = r);
    return {
      viewId: ot(),
      focused: null,
      tabs: t
    };
  },
  data: D_
}, { hooks: V_, slice: _l, init: OC, select: NC } = ze(x_), M_ = {
  id: "treeId",
  name: "tree",
  default: {
    expanded: {},
    separator: "/"
  },
  actions: {
    next(n, { payload: e }) {
      n.entities[e];
    },
    back(n, { payload: e }) {
      n.entities[e];
    },
    toggleExpand(n, { payload: e }) {
      var r;
      const t = n.entities[e];
      t && t.focused && (t.expanded = {
        ...t.expanded || {},
        [t.focused]: !((r = t.expanded) != null && r[t.focused])
      });
    },
    expandMore(n, { payload: e }) {
      const t = n.entities[e];
      t && t.focused && (t.expanded = {
        ...t.expanded || {},
        [t.focused]: !0
      });
    },
    expandLess(n, { payload: e }) {
      const t = n.entities[e];
      t && t.focused && (t.expanded = {
        ...t.expanded || {},
        [t.focused]: !1
      });
    },
    focusParent(n, { payload: e }) {
      const t = n.entities[e];
      if (t && t.focused && t.separator) {
        const r = t.focused.split(t.separator).slice(0, -1).join(t.separator);
        t.focused = r || null;
      }
    },
    focusLeft(n, { payload: e }) {
      var r;
      const t = n.entities[e];
      if (t && t.focused && t.separator)
        if ((r = t.expanded) == null ? void 0 : r[t.focused])
          t.expanded = {
            ...t.expanded || {},
            [t.focused]: !1
          };
        else {
          const s = t.focused.split(t.separator).slice(0, -1).join(t.separator);
          t.focused = s || null;
        }
    },
    focusRight(n, { payload: e }) {
      var r;
      const t = n.entities[e];
      if (t && t.focused && t.separator)
        if (!((r = t.expanded) == null ? void 0 : r[t.focused]))
          t.expanded = {
            ...t.expanded || {},
            [t.focused]: !0
          };
        else {
          const s = [...t.focused.split(t.separator), "0"].join(t.separator);
          t.focused = s;
        }
    }
  },
  data: {}
}, { init: DC, hooks: vl, slice: wl } = ze(M_);
function xC(n) {
  const e = vl.getOne(n);
  z.useEffect(() => {
    e || vl.add([
      {
        treeId: n,
        ends: []
      }
    ]);
  }, [e]);
}
const L_ = {
  content: null,
  position: null,
  x: "left",
  y: "bottom"
}, ar = Ws({
  initialState: L_,
  name: "title",
  reducers: {
    // actions
    setContent(n, { payload: e }) {
      n.content = e;
    },
    setPosition(n, { payload: e }) {
      n.position = e;
    },
    setX(n, { payload: e }) {
      n.x = e;
    },
    setY(n, { payload: e }) {
      n.y = e;
    }
  }
});
function VC(n) {
  J.dispatch(ar.actions.setContent(n));
}
function MC() {
  return Te((e) => e.title.content, jn);
}
function LC(n) {
  J.dispatch(ar.actions.setPosition(n));
}
function FC() {
  return Te((e) => e.title.position, jn);
}
function UC(n = "left") {
  J.dispatch(ar.actions.setX(n));
}
function $C() {
  return Te((e) => e.title.x, jn);
}
function jC(n = "bottom") {
  J.dispatch(ar.actions.setY(n));
}
function BC() {
  return Te((e) => e.title.y, jn);
}
const F_ = {
  id: "id",
  name: "toasts",
  default: () => ({
    id: ot(),
    type: "info"
  })
}, { hooks: U_, init: zC, select: qC, slice: El, entity: HC } = ze(F_), Ks = {
  id: "slotId",
  name: "slot",
  default: {
    slotId: ot(14),
    focused: null,
    submited: null,
    selected: {},
    skiped: {},
    length: 0,
    direction: null,
    redirect: !0
  },
  actions: {
    changeSelectIndexs(n, {
      payload: { name: e, items: t = {} }
    }) {
      const r = n.entities[e];
      r && (r.selected = { ...t });
    },
    removeSelection(n, { payload: e }) {
      n.entities[e] && $_.updateOne(n, {
        id: e,
        changes: {
          ...n.entities[e],
          selected: {}
        }
      });
    },
    next(n, { payload: e }) {
      var i;
      const t = n.entities[e];
      if (!t || !t.length) {
        t && (t.focused = null);
        return;
      }
      const { redirect: r = !0 } = t;
      t.direction = "forward", typeof t.focused != "number" && (t.focused = -1);
      do
        t.focused++, r ? t.focused = Math.abs(t.focused) % t.length : t.focused >= t.length && t.focused--;
      while ((i = t.skiped) != null && i[t.focused]);
    },
    back(n, { payload: e }) {
      var i;
      const t = n.entities[e];
      if (!t || !t.length) {
        t && (t.focused = null);
        return;
      }
      const { redirect: r = !0 } = t;
      t.direction = "backward", typeof t.focused != "number" && (t.focused = t.length);
      do
        t.focused--, t.focused < 0 && r ? t.focused = t.length - 1 : t.focused < 0 && (t.focused = 0);
      while ((i = t.skiped) != null && i[t.focused]);
    },
    submit(n, { payload: e }) {
      const t = n.entities[e];
      t && (t.submited = t.focused);
    },
    submitNext(n, { payload: e }) {
      var i;
      const t = n.entities[e];
      if (!t || !t.length) {
        t && (t.submited = null);
        return;
      }
      const { redirect: r = !0 } = t;
      t.direction = "forward", typeof t.submited != "number" && (t.submited = -1);
      do
        t.submited++, r && (t.submited = t.submited % t.length);
      while ((i = t.skiped) != null && i[t.submited]);
    },
    submitBack(n, { payload: e }) {
      var i;
      const t = n.entities[e];
      if (!t || !t.length) {
        t && (t.submited = null);
        return;
      }
      const { redirect: r = !0 } = t;
      t.direction = "backward", typeof t.submited != "number" && (t.submited = t.length);
      do
        t.submited--, r && (t.submited = t.submited % t.length), t.submited < 0 && (t.submited = t.length - 1);
      while ((i = t.skiped) != null && i[t.submited]);
    },
    submitForce(n, { payload: { name: e, index: t = null } }) {
      const r = n.entities[e];
      r && (r.focused = t, r.submited = t);
    },
    escape(n, { payload: e }) {
      const t = n.entities[e];
      t && (t.selected = {}, t.focused = null, t.direction = null, t.submited = null);
    },
    selectAll(n, { payload: e }) {
      const t = n.entities[e];
      if (!t)
        return;
      const r = {};
      Vg(0, Number(t.length) - 1, 1).forEach((i) => {
        r[i] = !0;
      }), t.selected = r, t.direction = null;
    }
  }
}, { hooks: as, slice: Tl, entity: $_, init: WC } = ze(Ks);
function KC(n) {
  J.dispatch({
    type: `${Ks.name}/next`,
    payload: n
  });
}
function GC(n) {
  return J.dispatch({
    type: `${Ks.name}/back`,
    payload: n
  });
}
function QC(n) {
  return J.dispatch({
    type: `${Ks.name}/escape`,
    payload: n
  });
}
function YC(n, e) {
  const t = as.getOne(n);
  z.useEffect(() => {
    t || as.upsert([
      {
        slotId: n,
        length: e.length
      }
    ]);
  }, [t, e]), z.useEffect(() => {
    as.setOneFeild(n, "length", e.length);
  }, [e]);
}
function XC(n, e, t = "submited") {
  const r = as.getOneFeild(e, t);
  return z.useMemo(() => typeof r != "number" ? null : n[r] || null, [r, n]);
}
const j_ = {
  data: {
    "activity/position.enum": {
      config: {
        list: [
          {
            content: "left side",
            value: "leftSide"
          },
          {
            content: "right side",
            value: "rightSide"
          }
        ]
      },
      def: "leftSide",
      desc: "activity position in the sides has two values ${state.settings.entities['activity/position.enum']?.config.list?.map(({ content })=> '\\`' + content '\\`')}",
      name: "activity side position"
    },
    "camera/clear/time.number": {
      config: {
        max: 5,
        min: 1
      },
      def: 4,
      desc: "time to clear the qrcode output by s and is between (**1**) to (**5**)",
      name: "time to clear"
    },
    "camera/loading/time.number": {
      def: 5,
      desc: "time of loading camera by ms",
      name: "loading time camera"
    },
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
    "visibility/activity.boolean": {
      def: !0,
      name: "activity visibility"
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
    "window/scroll/animation.boolean": {
      def: !1,
      desc: "scrolling with animation",
      name: "scroll animation"
    }
  }
}, { data: B_ } = j_, z_ = {
  name: "settings",
  id: "settingId",
  default(n, { def: e }) {
    return {
      private: !1,
      deperacted: !1,
      config: {},
      value: e
    };
  },
  actions: {
    toggle(n, { payload: e }) {
      const t = n.entities[e];
      t && (t.value = !t.value);
    }
  },
  data: B_
}, { hooks: Mt, slice: Il, init: JC, entitySelect: ZC } = ze(z_), q_ = {
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
}, { entity: eP, slice: bl, hooks: tP, entitySelect: nP, init: rP } = ze(q_), H_ = "object", W_ = {
  data: {},
  settings: {
    saved: !0,
    status: "idle",
    reloaded: !0,
    watch: !0,
    ignoreAccess: []
  }
}, ya = Ws({
  initialState: W_,
  name: H_,
  reducers: {
    setValue(n, { payload: e }) {
      const t = n.settings.ignoreAccess.find(({ dir: a }) => e.direction == a);
      if (t && t.pass != e.pass) {
        gt.warn(`Cannot Access Direction ${e.direction}`);
        return;
      }
      const r = e.direction.split(".").filter(Boolean);
      if (!r.length) {
        n.data = e.value;
        return;
      }
      let i = n.data;
      r.slice(0, -1).forEach((a) => {
        let c = i[a];
        c == null && e.force && (i[a] = {}, c = i[a]), i = c;
      });
      const s = r.at(-1);
      i[s] = e.value;
    },
    save(n, { payload: e = !1 }) {
      n.settings.saved = e;
    },
    reload(n, { payload: e = !1 }) {
      n.settings.reloaded = e;
    },
    addIgnoreAccess(n, { payload: e }) {
      e.forEach(({ dir: t, pass: r }) => {
        n.settings.ignoreAccess.find((s) => s.dir == t && r == s.pass) || n.settings.ignoreAccess.push({
          dir: t,
          pass: r
        });
      });
    },
    removeIgnoreAccess(n, { payload: e }) {
      e.forEach(({ dir: t, pass: r }) => {
        const i = n.settings.ignoreAccess.findIndex((s) => s.dir == t && r == s.pass);
        i >= 0 && n.settings.ignoreAccess.splice(i, 1);
      });
    }
  }
});
function Gs(n) {
  return Te((t) => {
    const { isValide: r, value: i } = $s(t.object.data, n);
    return r ? i : null;
  }, jn);
}
function Cn(n, e) {
  J.dispatch(
    ya.actions.setValue({
      value: e,
      direction: n,
      force: !0
    })
  );
}
function K_(n) {
  const e = Gs(n), t = Be(e);
  return z.useEffect(() => {
    Cn(n, t.get);
  }, [t.get]), z.useEffect(() => {
    t.set(e);
  }, [e]), t;
}
function G_(n, e) {
  const t = (e || J.getState()).object.data, { isValide: r, value: i } = $s(t, n);
  return r ? i : null;
}
const Q_ = {
  data: {}
}, { data: Y_ } = Q_, X_ = {
  id: "id",
  name: "notifications",
  default: () => ({
    id: ot(),
    desc: void 0,
    removable: !0,
    status: "idle",
    showDesc: !1,
    type: "info",
    buttons: []
  }),
  data: Y_
}, { hooks: Al, init: iP, select: sP, slice: Sl, entity: oP } = ze(X_);
function J_() {
  Mt.setOneFeild("visibility/notifays.boolean", "value", !0), Mt.setOneFeild("visibility/notifays/nots.boolean", "value", !0);
}
function Z_() {
  Mt.setOneFeild("visibility/notifays.boolean", "value", !1), Mt.setOneFeild("visibility/notifays/nots.boolean", "value", !1);
}
async function aP(n, e = {}) {
  const t = fd(e, {
    open: !0,
    close: !0,
    time: 2e3
  });
  t != null && t.open && J_();
  const r = {
    id: ot(),
    title: " - ",
    ...n
  };
  Al.upsert([r]), await pd(t.time), Al.remove([r.id]), t != null && t.close && Z_();
}
const ev = {
  id: "logId",
  name: "logs",
  data: {},
  default: () => ({
    logId: ot(10),
    desc: "",
    type: "INFO",
    category: "window",
    showDesc: !1,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  })
}, { entity: cP, slice: Rl, init: uP, hooks: lP } = ze(ev), tv = {
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
}, { data: nv } = tv, rv = {
  id: "langId",
  name: "langs",
  data: nv
}, hP = () => iv.setWriteStatus("idle"), { init: dP, hooks: iv, entity: fP, slice: Cl } = ze(rv), sv = {
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
}, { data: ov } = sv, av = "commands";
function jd(n, e = J.getState()) {
  const { [av]: t } = e, r = [], i = t.entities[n], s = i == null ? void 0 : i.commands;
  return i != null && i.blocked ? [] : (s == null || s.forEach((a) => {
    typeof a == "string" ? r.push(...jd(a)) : typeof a != "number" && r.push(a);
  }), r);
}
function cv(n, e = J.getState()) {
  return !!(e != null && e.commands.entities[n]);
}
async function uv(n, e = J.getState()) {
  const t = n.toString();
  gt.inf("start invoke command : ", t), e = e || J.getState();
  const r = jd(n, e), i = new Us();
  for (let s = 0; s < r.length; s++) {
    const a = r[s];
    typeof a == "number" ? await i.start(a) : J.dispatch(a);
  }
  gt.succ("end invoking command : ", t);
}
const lv = {
  id: "commandId",
  name: "commands",
  data: ov,
  default: (n, e) => {
    if (!e.commandId)
      return {};
    const [t = "", ...r] = e.commandId.split(".");
    return {
      label: `${Gu(t, "camel", "normal")} : ${r.map((s) => Gu(s, void 0, "normal")).join(" ")}`
    };
  }
}, { hooks: hv, slice: Pl, entitySelect: pP, init: mP } = ze(lv), dv = {
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
}, { data: fv } = dv, pv = {
  name: "keys",
  id: "keyId",
  data: Object.entries(fv).map(([n, e]) => ({
    keyId: n,
    ...e
  })),
  default: () => ({
    repeation: !0,
    type: "down",
    only: !0,
    preventDefault: !0,
    keyId: `key_${ot()}`
  })
}, { init: mv, hooks: Qa, slice: kl } = ze(pv), Ji = "_" + ot().replaceAll(/[^0-9A-Za-z$_]+/gi, "_");
function gv(n) {
  return Function(`
    return ({ state , focused })=> {
      ${Ji}_window = window;
      window = null;
      let ${Ji} = ${n};
      window = ${Ji}_window;
      return ${Ji}
    }
  `)();
}
function gP() {
  mv();
  const n = Qa.getAll(), e = Gs("commands.isBlocked"), t = z.useMemo(() => e ? [] : n.filter(({ value: r, command: i }) => r && i).map((r) => {
    const { value: i = "", when: s, repeation: a = !0, type: c = "down", only: u = !0, preventDefault: h = !0 } = r, f = new Mg(i);
    return {
      fn: async (_) => {
        if (!a && _.repeat || !f.test(_))
          return;
        const w = J.getState();
        if (s) {
          const A = Lg(), R = gv(s);
          try {
            if (!R({ state: w, focused: A }))
              return;
          } catch {
            return;
          }
        }
        u && _.stopImmediatePropagation(), h && _.preventDefault(), gt.inf(`KEYID       = ${r.keyId}`), gt.inf(`RUN         = ${r.command || "no command run"}`), gt.inf(`COMB        = (${r.value})`), gt.inf(`WHEN        = ${r.when || "no provide"}`), r.command && cv(r.command, w) ? gt.succ("EXISTS") : gt.warn("COMMAND NOT FOUND"), uv(r.command, w);
      },
      type: c
    };
  }), [n, e]);
  mC(
    () => (t.forEach(({ fn: r, type: i }) => {
      document.addEventListener(`key${i}`, r);
    }), () => {
      t.forEach(({ fn: r, type: i }) => {
        document.removeEventListener(`key${i}`, r);
      });
    }),
    [t],
    1e3
  );
}
const Bd = "keyboard", yv = {
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
}, _v = (n) => n[Bd], Ol = Ws({
  name: Bd,
  initialState: yv,
  reducers: {
    // actions
    setModifier(n, { payload: e }) {
      try {
        n[e.modifierName] = e.value;
      } catch {
      }
    }
  }
});
function yP(n) {
  return Te(_v, (t, r) => jn(t[n], r[n]))[n];
}
const vv = {
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
}, { data: wv } = vv, Ev = {
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
  data: wv
}, { entity: _P, slice: Nl, hooks: rt, entitySelect: vP, init: wP } = ze(Ev), Tv = {
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
      default: "#33dd24"
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
    }
  }
}, { data: Iv } = Tv, bv = {
  id: "colorId",
  name: "color",
  data: Iv
}, { hooks: Av, slice: Dl, init: EP, select: TP, entity: IP, entitySelect: bP } = ze(bv), Sv = {
  data: {}
}, { data: Rv } = Sv, Cv = {
  id: "linkId",
  name: "cahser",
  data: Rv,
  default() {
    return {
      status: "idle"
    };
  }
}, { init: AP, hooks: SP, slice: xl } = ze(Cv), cs = {
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
    exec(n, { payload: e }) {
      const [t, r] = e, i = n.entities[t];
      i && (i.args = r, i.status = "idle");
    }
  }
}, { entity: RP, slice: Vl, hooks: mt, entitySelect: CP } = ze(cs);
function Pv(n) {
  const e = mt.getOne(n);
  z.useEffect(() => {
    e || mt.upsert([
      {
        actionId: n,
        status: "ready",
        args: null
      }
    ]);
  }, [e]);
}
function PP(n, e, t = [], r = () => {
}) {
  z.useEffect(() => () => {
    mt.remove([n]);
  }, []), Pv(n);
  const i = mt.getOne(n);
  return gr(async () => {
    if (!i)
      return;
    const { status: s } = i;
    if (s == "idle") {
      const { args: a } = i;
      mt.setOneFeild(n, "status", "loading");
      try {
        let c = null, u = null;
        c = e(a), c instanceof Promise ? u = await c : u = c, mt.setOneFeild(n, "output", u), mt.setOneFeild(n, "status", "success"), u && r(u);
      } catch {
        mt.setOneFeild(n, "output", null), mt.setOneFeild(n, "status", "error");
      }
      mt.setOneFeild(n, "args", null);
    }
  }, [i, ...t]), i;
}
function kP(n, e) {
  return new Promise((t, r) => {
    J.dispatch({ type: "actions/exec", payload: [n, e] });
    const i = dd(`${cs.name}.entities.` + n + ".status", "success", (a) => {
      s(), t({
        output: a[cs.name].entities[n].output,
        state: a
      });
    }), s = dd(`${cs.name}.entities.` + n + ".status", "error", (a) => {
      i(), r(a);
    });
  });
}
const J = Uy({
  reducer: {
    // normal reducers
    [Ol.name]: Ol.reducer,
    [ya.name]: ya.reducer,
    [ar.name]: ar.reducer,
    // system space
    [Pl.name]: Pl.reducer,
    [kl.name]: kl.reducer,
    [Sl.name]: Sl.reducer,
    [_l.name]: _l.reducer,
    [bl.name]: bl.reducer,
    [Tl.name]: Tl.reducer,
    [Il.name]: Il.reducer,
    [Nl.name]: Nl.reducer,
    [Vl.name]: Vl.reducer,
    [Dl.name]: Dl.reducer,
    [wl.name]: wl.reducer,
    [Rl.name]: Rl.reducer,
    [Cl.name]: Cl.reducer,
    [xl.name]: xl.reducer,
    [El.name]: El.reducer
    /* main database */
  }
}), er = class er {
  constructor(e, t = null) {
    if (this.name = e, this.parent = t, this.name.includes(".") || er.allTemps[this.name])
      throw `temp name ${this.name} exists before`;
    er.allTemps[this.name] = this;
  }
  getTemp(e) {
    return Gs([this.name, e].join("."));
  }
  getTempFromStore(e, t) {
    return G_([this.name, e].join("."), t);
  }
  setTemp(e, t) {
    Cn([this.name, e].join("."), t);
  }
  useTemp(e) {
    return K_([this.name, e].join("."));
  }
  get childsTemps() {
    return Object.values(er.allTemps).filter(({ parent: e }) => e == this);
  }
};
Ku(er, "allTemps", {});
let ke = er;
new ke("path");
new ke("window");
const zd = new ke("view");
new ke("toast");
const OP = new ke("dialog");
new ke("loading");
new ke("progress");
new ke("password");
const NP = new ke("menu");
new ke("news");
const DP = new ke("visibility");
new ke("ipinfo");
new ke("submited");
const Tn = new ke("camera"), kv = new ke("recaptcha");
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * @license
 * Copyright 2017 Google LLC
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
const qd = function(n) {
  const e = [];
  let t = 0;
  for (let r = 0; r < n.length; r++) {
    let i = n.charCodeAt(r);
    i < 128 ? e[t++] = i : i < 2048 ? (e[t++] = i >> 6 | 192, e[t++] = i & 63 | 128) : (i & 64512) === 55296 && r + 1 < n.length && (n.charCodeAt(r + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (n.charCodeAt(++r) & 1023), e[t++] = i >> 18 | 240, e[t++] = i >> 12 & 63 | 128, e[t++] = i >> 6 & 63 | 128, e[t++] = i & 63 | 128) : (e[t++] = i >> 12 | 224, e[t++] = i >> 6 & 63 | 128, e[t++] = i & 63 | 128);
  }
  return e;
}, Ov = function(n) {
  const e = [];
  let t = 0, r = 0;
  for (; t < n.length; ) {
    const i = n[t++];
    if (i < 128)
      e[r++] = String.fromCharCode(i);
    else if (i > 191 && i < 224) {
      const s = n[t++];
      e[r++] = String.fromCharCode((i & 31) << 6 | s & 63);
    } else if (i > 239 && i < 365) {
      const s = n[t++], a = n[t++], c = n[t++], u = ((i & 7) << 18 | (s & 63) << 12 | (a & 63) << 6 | c & 63) - 65536;
      e[r++] = String.fromCharCode(55296 + (u >> 10)), e[r++] = String.fromCharCode(56320 + (u & 1023));
    } else {
      const s = n[t++], a = n[t++];
      e[r++] = String.fromCharCode((i & 15) << 12 | (s & 63) << 6 | a & 63);
    }
  }
  return e.join("");
}, Hd = {
  /**
   * Maps bytes to characters.
   */
  byteToCharMap_: null,
  /**
   * Maps characters to bytes.
   */
  charToByteMap_: null,
  /**
   * Maps bytes to websafe characters.
   * @private
   */
  byteToCharMapWebSafe_: null,
  /**
   * Maps websafe characters to bytes.
   * @private
   */
  charToByteMapWebSafe_: null,
  /**
   * Our default alphabet, shared between
   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
   */
  ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  /**
   * Our default alphabet. Value 64 (=) is special; it means "nothing."
   */
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + "+/=";
  },
  /**
   * Our websafe alphabet.
   */
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + "-_.";
  },
  /**
   * Whether this browser supports the atob and btoa functions. This extension
   * started at Mozilla but is now implemented by many browsers. We use the
   * ASSUME_* variables to avoid pulling in the full useragent detection library
   * but still allowing the standard per-browser compilations.
   *
   */
  HAS_NATIVE_SUPPORT: typeof atob == "function",
  /**
   * Base64-encode an array of bytes.
   *
   * @param input An array of bytes (numbers with
   *     value in [0, 255]) to encode.
   * @param webSafe Boolean indicating we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeByteArray(n, e) {
    if (!Array.isArray(n))
      throw Error("encodeByteArray takes an array as a parameter");
    this.init_();
    const t = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [];
    for (let i = 0; i < n.length; i += 3) {
      const s = n[i], a = i + 1 < n.length, c = a ? n[i + 1] : 0, u = i + 2 < n.length, h = u ? n[i + 2] : 0, f = s >> 2, m = (s & 3) << 4 | c >> 4;
      let _ = (c & 15) << 2 | h >> 6, w = h & 63;
      u || (w = 64, a || (_ = 64)), r.push(t[f], t[m], t[_], t[w]);
    }
    return r.join("");
  },
  /**
   * Base64-encode a string.
   *
   * @param input A string to encode.
   * @param webSafe If true, we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeString(n, e) {
    return this.HAS_NATIVE_SUPPORT && !e ? btoa(n) : this.encodeByteArray(qd(n), e);
  },
  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString(n, e) {
    return this.HAS_NATIVE_SUPPORT && !e ? atob(n) : Ov(this.decodeStringToByteArray(n, e));
  },
  /**
   * Base64-decode a string.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * @param input Input to decode.
   * @param webSafe True if we should use the web-safe alphabet.
   * @return bytes representing the decoded value.
   */
  decodeStringToByteArray(n, e) {
    this.init_();
    const t = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [];
    for (let i = 0; i < n.length; ) {
      const s = t[n.charAt(i++)], c = i < n.length ? t[n.charAt(i)] : 0;
      ++i;
      const h = i < n.length ? t[n.charAt(i)] : 64;
      ++i;
      const m = i < n.length ? t[n.charAt(i)] : 64;
      if (++i, s == null || c == null || h == null || m == null)
        throw new Nv();
      const _ = s << 2 | c >> 4;
      if (r.push(_), h !== 64) {
        const w = c << 4 & 240 | h >> 2;
        if (r.push(w), m !== 64) {
          const A = h << 6 & 192 | m;
          r.push(A);
        }
      }
    }
    return r;
  },
  /**
   * Lazy static initialization function. Called before
   * accessing any of the static map variables.
   * @private
   */
  init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
      for (let n = 0; n < this.ENCODED_VALS.length; n++)
        this.byteToCharMap_[n] = this.ENCODED_VALS.charAt(n), this.charToByteMap_[this.byteToCharMap_[n]] = n, this.byteToCharMapWebSafe_[n] = this.ENCODED_VALS_WEBSAFE.charAt(n), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]] = n, n >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)] = n, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)] = n);
    }
  }
};
class Nv extends Error {
  constructor() {
    super(...arguments), this.name = "DecodeBase64StringError";
  }
}
const Dv = function(n) {
  const e = qd(n);
  return Hd.encodeByteArray(e, !0);
}, Ts = function(n) {
  return Dv(n).replace(/\./g, "");
}, Wd = function(n) {
  try {
    return Hd.decodeString(n, !0);
  } catch (e) {
    console.error("base64Decode failed: ", e);
  }
  return null;
};
/**
 * @license
 * Copyright 2022 Google LLC
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
function xv() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
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
const Vv = () => xv().__FIREBASE_DEFAULTS__, Mv = () => {
  if (typeof process > "u" || typeof process.env > "u")
    return;
  const n = process.env.__FIREBASE_DEFAULTS__;
  if (n)
    return JSON.parse(n);
}, Lv = () => {
  if (typeof document > "u")
    return;
  let n;
  try {
    n = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch {
    return;
  }
  const e = n && Wd(n[1]);
  return e && JSON.parse(e);
}, Qs = () => {
  try {
    return Vv() || Mv() || Lv();
  } catch (n) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);
    return;
  }
}, Kd = (n) => {
  var e, t;
  return (t = (e = Qs()) === null || e === void 0 ? void 0 : e.emulatorHosts) === null || t === void 0 ? void 0 : t[n];
}, Gd = (n) => {
  const e = Kd(n);
  if (!e)
    return;
  const t = e.lastIndexOf(":");
  if (t <= 0 || t + 1 === e.length)
    throw new Error(`Invalid host ${e} with no separate hostname and port!`);
  const r = parseInt(e.substring(t + 1), 10);
  return e[0] === "[" ? [e.substring(1, t - 1), r] : [e.substring(0, t), r];
}, Qd = () => {
  var n;
  return (n = Qs()) === null || n === void 0 ? void 0 : n.config;
}, Yd = (n) => {
  var e;
  return (e = Qs()) === null || e === void 0 ? void 0 : e[`_${n}`];
};
/**
 * @license
 * Copyright 2017 Google LLC
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
class Fv {
  constructor() {
    this.reject = () => {
    }, this.resolve = () => {
    }, this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
  /**
   * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */
  wrapCallback(e) {
    return (t, r) => {
      t ? this.reject(t) : this.resolve(r), typeof e == "function" && (this.promise.catch(() => {
      }), e.length === 1 ? e(t) : e(t, r));
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
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
function Xd(n, e) {
  if (n.uid)
    throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
  const t = {
    alg: "none",
    type: "JWT"
  }, r = e || "demo-project", i = n.iat || 0, s = n.sub || n.user_id;
  if (!s)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const a = Object.assign({
    // Set all required fields to decent defaults
    iss: `https://securetoken.google.com/${r}`,
    aud: r,
    iat: i,
    exp: i + 3600,
    auth_time: i,
    sub: s,
    user_id: s,
    firebase: {
      sign_in_provider: "custom",
      identities: {}
    }
  }, n), c = "";
  return [
    Ts(JSON.stringify(t)),
    Ts(JSON.stringify(a)),
    c
  ].join(".");
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function Oe() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function Uv() {
  return typeof window < "u" && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe());
}
function $v() {
  var n;
  const e = (n = Qs()) === null || n === void 0 ? void 0 : n.forceEnvironment;
  if (e === "node")
    return !0;
  if (e === "browser")
    return !1;
  try {
    return Object.prototype.toString.call(global.process) === "[object process]";
  } catch {
    return !1;
  }
}
function Jd() {
  const n = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof n == "object" && n.id !== void 0;
}
function jv() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function Bv() {
  const n = Oe();
  return n.indexOf("MSIE ") >= 0 || n.indexOf("Trident/") >= 0;
}
function zv() {
  return !$v() && !!navigator.userAgent && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
}
function Zd() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function ef() {
  return new Promise((n, e) => {
    try {
      let t = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module", i = self.indexedDB.open(r);
      i.onsuccess = () => {
        i.result.close(), t || self.indexedDB.deleteDatabase(r), n(!0);
      }, i.onupgradeneeded = () => {
        t = !1;
      }, i.onerror = () => {
        var s;
        e(((s = i.error) === null || s === void 0 ? void 0 : s.message) || "");
      };
    } catch (t) {
      e(t);
    }
  });
}
function qv() {
  return !(typeof navigator > "u" || !navigator.cookieEnabled);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
const Hv = "FirebaseError";
class at extends Error {
  constructor(e, t, r) {
    super(t), this.code = e, this.customData = r, this.name = Hv, Object.setPrototypeOf(this, at.prototype), Error.captureStackTrace && Error.captureStackTrace(this, Bn.prototype.create);
  }
}
class Bn {
  constructor(e, t, r) {
    this.service = e, this.serviceName = t, this.errors = r;
  }
  create(e, ...t) {
    const r = t[0] || {}, i = `${this.service}/${e}`, s = this.errors[e], a = s ? Wv(s, r) : "Error", c = `${this.serviceName}: ${a} (${i}).`;
    return new at(i, c, r);
  }
}
function Wv(n, e) {
  return n.replace(Kv, (t, r) => {
    const i = e[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const Kv = /\{\$([^}]+)}/g;
function Gv(n) {
  for (const e in n)
    if (Object.prototype.hasOwnProperty.call(n, e))
      return !1;
  return !0;
}
function ui(n, e) {
  if (n === e)
    return !0;
  const t = Object.keys(n), r = Object.keys(e);
  for (const i of t) {
    if (!r.includes(i))
      return !1;
    const s = n[i], a = e[i];
    if (Ml(s) && Ml(a)) {
      if (!ui(s, a))
        return !1;
    } else if (s !== a)
      return !1;
  }
  for (const i of r)
    if (!t.includes(i))
      return !1;
  return !0;
}
function Ml(n) {
  return n !== null && typeof n == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function yr(n) {
  const e = [];
  for (const [t, r] of Object.entries(n))
    Array.isArray(r) ? r.forEach((i) => {
      e.push(encodeURIComponent(t) + "=" + encodeURIComponent(i));
    }) : e.push(encodeURIComponent(t) + "=" + encodeURIComponent(r));
  return e.length ? "&" + e.join("&") : "";
}
function Wr(n) {
  const e = {};
  return n.replace(/^\?/, "").split("&").forEach((r) => {
    if (r) {
      const [i, s] = r.split("=");
      e[decodeURIComponent(i)] = decodeURIComponent(s);
    }
  }), e;
}
function Kr(n) {
  const e = n.indexOf("?");
  if (!e)
    return "";
  const t = n.indexOf("#", e);
  return n.substring(e, t > 0 ? t : void 0);
}
function Qv(n, e) {
  const t = new Yv(n, e);
  return t.subscribe.bind(t);
}
class Yv {
  /**
   * @param executor Function which can make calls to a single Observer
   *     as a proxy.
   * @param onNoObservers Callback when count of Observers goes to zero.
   */
  constructor(e, t) {
    this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then(() => {
      e(this);
    }).catch((r) => {
      this.error(r);
    });
  }
  next(e) {
    this.forEachObserver((t) => {
      t.next(e);
    });
  }
  error(e) {
    this.forEachObserver((t) => {
      t.error(e);
    }), this.close(e);
  }
  complete() {
    this.forEachObserver((e) => {
      e.complete();
    }), this.close();
  }
  /**
   * Subscribe function that can be used to add an Observer to the fan-out list.
   *
   * - We require that no event is sent to a subscriber sychronously to their
   *   call to subscribe().
   */
  subscribe(e, t, r) {
    let i;
    if (e === void 0 && t === void 0 && r === void 0)
      throw new Error("Missing Observer.");
    Xv(e, [
      "next",
      "error",
      "complete"
    ]) ? i = e : i = {
      next: e,
      error: t,
      complete: r
    }, i.next === void 0 && (i.next = zo), i.error === void 0 && (i.error = zo), i.complete === void 0 && (i.complete = zo);
    const s = this.unsubscribeOne.bind(this, this.observers.length);
    return this.finalized && this.task.then(() => {
      try {
        this.finalError ? i.error(this.finalError) : i.complete();
      } catch {
      }
    }), this.observers.push(i), s;
  }
  // Unsubscribe is synchronous - we guarantee that no events are sent to
  // any unsubscribed Observer.
  unsubscribeOne(e) {
    this.observers === void 0 || this.observers[e] === void 0 || (delete this.observers[e], this.observerCount -= 1, this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this));
  }
  forEachObserver(e) {
    if (!this.finalized)
      for (let t = 0; t < this.observers.length; t++)
        this.sendOne(t, e);
  }
  // Call the Observer via one of it's callback function. We are careful to
  // confirm that the observe has not been unsubscribed since this asynchronous
  // function had been queued.
  sendOne(e, t) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          t(this.observers[e]);
        } catch (r) {
          typeof console < "u" && console.error && console.error(r);
        }
    });
  }
  close(e) {
    this.finalized || (this.finalized = !0, e !== void 0 && (this.finalError = e), this.task.then(() => {
      this.observers = void 0, this.onNoObservers = void 0;
    }));
  }
}
function Xv(n, e) {
  if (typeof n != "object" || n === null)
    return !1;
  for (const t of e)
    if (t in n && typeof n[t] == "function")
      return !0;
  return !1;
}
function zo() {
}
/**
 * @license
 * Copyright 2019 Google LLC
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
const Jv = 1e3, Zv = 2, ew = 4 * 60 * 60 * 1e3, tw = 0.5;
function Ll(n, e = Jv, t = Zv) {
  const r = e * Math.pow(t, n), i = Math.round(
    // A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    tw * r * // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
    // if we add or subtract.
    (Math.random() - 0.5) * 2
  );
  return Math.min(ew, r + i);
}
/**
 * @license
 * Copyright 2021 Google LLC
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
function de(n) {
  return n && n._delegate ? n._delegate : n;
}
class it {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  constructor(e, t, r) {
    this.name = e, this.instanceFactory = t, this.type = r, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null;
  }
  setInstantiationMode(e) {
    return this.instantiationMode = e, this;
  }
  setMultipleInstances(e) {
    return this.multipleInstances = e, this;
  }
  setServiceProps(e) {
    return this.serviceProps = e, this;
  }
  setInstanceCreatedCallback(e) {
    return this.onInstanceCreated = e, this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
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
const En = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
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
class nw {
  constructor(e, t) {
    this.name = e, this.container = t, this.component = null, this.instances = /* @__PURE__ */ new Map(), this.instancesDeferred = /* @__PURE__ */ new Map(), this.instancesOptions = /* @__PURE__ */ new Map(), this.onInitCallbacks = /* @__PURE__ */ new Map();
  }
  /**
   * @param identifier A provider can provide mulitple instances of a service
   * if this.component.multipleInstances is true.
   */
  get(e) {
    const t = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(t)) {
      const r = new Fv();
      if (this.instancesDeferred.set(t, r), this.isInitialized(t) || this.shouldAutoInitialize())
        try {
          const i = this.getOrInitializeService({
            instanceIdentifier: t
          });
          i && r.resolve(i);
        } catch {
        }
    }
    return this.instancesDeferred.get(t).promise;
  }
  getImmediate(e) {
    var t;
    const r = this.normalizeInstanceIdentifier(e == null ? void 0 : e.identifier), i = (t = e == null ? void 0 : e.optional) !== null && t !== void 0 ? t : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({
          instanceIdentifier: r
        });
      } catch (s) {
        if (i)
          return null;
        throw s;
      }
    else {
      if (i)
        return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (this.component = e, !!this.shouldAutoInitialize()) {
      if (iw(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: En });
        } catch {
        }
      for (const [t, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(t);
        try {
          const s = this.getOrInitializeService({
            instanceIdentifier: i
          });
          r.resolve(s);
        } catch {
        }
      }
    }
  }
  clearInstance(e = En) {
    this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e);
  }
  // app.delete() will call this method on every provider to delete the services
  // TODO: should we mark the provider as deleted?
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((t) => "INTERNAL" in t).map((t) => t.INTERNAL.delete()),
      ...e.filter((t) => "_delete" in t).map((t) => t._delete())
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = En) {
    return this.instances.has(e);
  }
  getOptions(e = En) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: t = {} } = e, r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: t
    });
    for (const [s, a] of this.instancesDeferred.entries()) {
      const c = this.normalizeInstanceIdentifier(s);
      r === c && a.resolve(i);
    }
    return i;
  }
  /**
   *
   * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
   * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
   *
   * @param identifier An optional instance identifier
   * @returns a function to unregister the callback
   */
  onInit(e, t) {
    var r;
    const i = this.normalizeInstanceIdentifier(t), s = (r = this.onInitCallbacks.get(i)) !== null && r !== void 0 ? r : /* @__PURE__ */ new Set();
    s.add(e), this.onInitCallbacks.set(i, s);
    const a = this.instances.get(i);
    return a && e(a, i), () => {
      s.delete(e);
    };
  }
  /**
   * Invoke onInit callbacks synchronously
   * @param instance the service instance`
   */
  invokeOnInitCallbacks(e, t) {
    const r = this.onInitCallbacks.get(t);
    if (r)
      for (const i of r)
        try {
          i(e, t);
        } catch {
        }
  }
  getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
    let r = this.instances.get(e);
    if (!r && this.component && (r = this.component.instanceFactory(this.container, {
      instanceIdentifier: rw(e),
      options: t
    }), this.instances.set(e, r), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(r, e), this.component.onInstanceCreated))
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {
      }
    return r || null;
  }
  normalizeInstanceIdentifier(e = En) {
    return this.component ? this.component.multipleInstances ? e : En : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function rw(n) {
  return n === En ? void 0 : n;
}
function iw(n) {
  return n.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class sw {
  constructor(e) {
    this.name = e, this.providers = /* @__PURE__ */ new Map();
  }
  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */
  addComponent(e) {
    const t = this.getProvider(e.name);
    if (t.isComponentSet())
      throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
    t.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e);
  }
  /**
   * getProvider provides a type safe interface where it can only be called with a field name
   * present in NameServiceMapping interface.
   *
   * Firebase SDKs providing services should extend NameServiceMapping interface to register
   * themselves.
   */
  getProvider(e) {
    if (this.providers.has(e))
      return this.providers.get(e);
    const t = new nw(e, this);
    return this.providers.set(e, t), t;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var Y;
(function(n) {
  n[n.DEBUG = 0] = "DEBUG", n[n.VERBOSE = 1] = "VERBOSE", n[n.INFO = 2] = "INFO", n[n.WARN = 3] = "WARN", n[n.ERROR = 4] = "ERROR", n[n.SILENT = 5] = "SILENT";
})(Y || (Y = {}));
const ow = {
  debug: Y.DEBUG,
  verbose: Y.VERBOSE,
  info: Y.INFO,
  warn: Y.WARN,
  error: Y.ERROR,
  silent: Y.SILENT
}, aw = Y.INFO, cw = {
  [Y.DEBUG]: "log",
  [Y.VERBOSE]: "log",
  [Y.INFO]: "info",
  [Y.WARN]: "warn",
  [Y.ERROR]: "error"
}, uw = (n, e, ...t) => {
  if (e < n.logLevel)
    return;
  const r = (/* @__PURE__ */ new Date()).toISOString(), i = cw[e];
  if (i)
    console[i](`[${r}]  ${n.name}:`, ...t);
  else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
};
class Ys {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(e) {
    this.name = e, this._logLevel = aw, this._logHandler = uw, this._userLogHandler = null;
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in Y))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  // Workaround for setter/getter having to be the same type.
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? ow[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  /**
   * The functions below are all based on the `console` interface
   */
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, Y.DEBUG, ...e), this._logHandler(this, Y.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, Y.VERBOSE, ...e), this._logHandler(this, Y.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, Y.INFO, ...e), this._logHandler(this, Y.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, Y.WARN, ...e), this._logHandler(this, Y.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, Y.ERROR, ...e), this._logHandler(this, Y.ERROR, ...e);
  }
}
const lw = (n, e) => e.some((t) => n instanceof t);
let Fl, Ul;
function hw() {
  return Fl || (Fl = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function dw() {
  return Ul || (Ul = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const tf = /* @__PURE__ */ new WeakMap(), _a = /* @__PURE__ */ new WeakMap(), nf = /* @__PURE__ */ new WeakMap(), qo = /* @__PURE__ */ new WeakMap(), Ya = /* @__PURE__ */ new WeakMap();
function fw(n) {
  const e = new Promise((t, r) => {
    const i = () => {
      n.removeEventListener("success", s), n.removeEventListener("error", a);
    }, s = () => {
      t(rn(n.result)), i();
    }, a = () => {
      r(n.error), i();
    };
    n.addEventListener("success", s), n.addEventListener("error", a);
  });
  return e.then((t) => {
    t instanceof IDBCursor && tf.set(t, n);
  }).catch(() => {
  }), Ya.set(e, n), e;
}
function pw(n) {
  if (_a.has(n))
    return;
  const e = new Promise((t, r) => {
    const i = () => {
      n.removeEventListener("complete", s), n.removeEventListener("error", a), n.removeEventListener("abort", a);
    }, s = () => {
      t(), i();
    }, a = () => {
      r(n.error || new DOMException("AbortError", "AbortError")), i();
    };
    n.addEventListener("complete", s), n.addEventListener("error", a), n.addEventListener("abort", a);
  });
  _a.set(n, e);
}
let va = {
  get(n, e, t) {
    if (n instanceof IDBTransaction) {
      if (e === "done")
        return _a.get(n);
      if (e === "objectStoreNames")
        return n.objectStoreNames || nf.get(n);
      if (e === "store")
        return t.objectStoreNames[1] ? void 0 : t.objectStore(t.objectStoreNames[0]);
    }
    return rn(n[e]);
  },
  set(n, e, t) {
    return n[e] = t, !0;
  },
  has(n, e) {
    return n instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in n;
  }
};
function mw(n) {
  va = n(va);
}
function gw(n) {
  return n === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...t) {
    const r = n.call(Ho(this), e, ...t);
    return nf.set(r, e.sort ? e.sort() : [e]), rn(r);
  } : dw().includes(n) ? function(...e) {
    return n.apply(Ho(this), e), rn(tf.get(this));
  } : function(...e) {
    return rn(n.apply(Ho(this), e));
  };
}
function yw(n) {
  return typeof n == "function" ? gw(n) : (n instanceof IDBTransaction && pw(n), lw(n, hw()) ? new Proxy(n, va) : n);
}
function rn(n) {
  if (n instanceof IDBRequest)
    return fw(n);
  if (qo.has(n))
    return qo.get(n);
  const e = yw(n);
  return e !== n && (qo.set(n, e), Ya.set(e, n)), e;
}
const Ho = (n) => Ya.get(n);
function rf(n, e, { blocked: t, upgrade: r, blocking: i, terminated: s } = {}) {
  const a = indexedDB.open(n, e), c = rn(a);
  return r && a.addEventListener("upgradeneeded", (u) => {
    r(rn(a.result), u.oldVersion, u.newVersion, rn(a.transaction), u);
  }), t && a.addEventListener("blocked", (u) => t(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    u.oldVersion,
    u.newVersion,
    u
  )), c.then((u) => {
    s && u.addEventListener("close", () => s()), i && u.addEventListener("versionchange", (h) => i(h.oldVersion, h.newVersion, h));
  }).catch(() => {
  }), c;
}
const _w = ["get", "getKey", "getAll", "getAllKeys", "count"], vw = ["put", "add", "delete", "clear"], Wo = /* @__PURE__ */ new Map();
function $l(n, e) {
  if (!(n instanceof IDBDatabase && !(e in n) && typeof e == "string"))
    return;
  if (Wo.get(e))
    return Wo.get(e);
  const t = e.replace(/FromIndex$/, ""), r = e !== t, i = vw.includes(t);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(t in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || _w.includes(t))
  )
    return;
  const s = async function(a, ...c) {
    const u = this.transaction(a, i ? "readwrite" : "readonly");
    let h = u.store;
    return r && (h = h.index(c.shift())), (await Promise.all([
      h[t](...c),
      i && u.done
    ]))[0];
  };
  return Wo.set(e, s), s;
}
mw((n) => ({
  ...n,
  get: (e, t, r) => $l(e, t) || n.get(e, t, r),
  has: (e, t) => !!$l(e, t) || n.has(e, t)
}));
/**
 * @license
 * Copyright 2019 Google LLC
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
class ww {
  constructor(e) {
    this.container = e;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    return this.container.getProviders().map((t) => {
      if (Ew(t)) {
        const r = t.getImmediate();
        return `${r.library}/${r.version}`;
      } else
        return null;
    }).filter((t) => t).join(" ");
  }
}
function Ew(n) {
  const e = n.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const wa = "@firebase/app", jl = "0.10.8";
/**
 * @license
 * Copyright 2019 Google LLC
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
const Nn = new Ys("@firebase/app"), Tw = "@firebase/app-compat", Iw = "@firebase/analytics-compat", bw = "@firebase/analytics", Aw = "@firebase/app-check-compat", Sw = "@firebase/app-check", Rw = "@firebase/auth", Cw = "@firebase/auth-compat", Pw = "@firebase/database", kw = "@firebase/database-compat", Ow = "@firebase/functions", Nw = "@firebase/functions-compat", Dw = "@firebase/installations", xw = "@firebase/installations-compat", Vw = "@firebase/messaging", Mw = "@firebase/messaging-compat", Lw = "@firebase/performance", Fw = "@firebase/performance-compat", Uw = "@firebase/remote-config", $w = "@firebase/remote-config-compat", jw = "@firebase/storage", Bw = "@firebase/storage-compat", zw = "@firebase/firestore", qw = "@firebase/vertexai-preview", Hw = "@firebase/firestore-compat", Ww = "firebase", Kw = "10.12.5";
/**
 * @license
 * Copyright 2019 Google LLC
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
const Ea = "[DEFAULT]", Gw = {
  [wa]: "fire-core",
  [Tw]: "fire-core-compat",
  [bw]: "fire-analytics",
  [Iw]: "fire-analytics-compat",
  [Sw]: "fire-app-check",
  [Aw]: "fire-app-check-compat",
  [Rw]: "fire-auth",
  [Cw]: "fire-auth-compat",
  [Pw]: "fire-rtdb",
  [kw]: "fire-rtdb-compat",
  [Ow]: "fire-fn",
  [Nw]: "fire-fn-compat",
  [Dw]: "fire-iid",
  [xw]: "fire-iid-compat",
  [Vw]: "fire-fcm",
  [Mw]: "fire-fcm-compat",
  [Lw]: "fire-perf",
  [Fw]: "fire-perf-compat",
  [Uw]: "fire-rc",
  [$w]: "fire-rc-compat",
  [jw]: "fire-gcs",
  [Bw]: "fire-gcs-compat",
  [zw]: "fire-fst",
  [Hw]: "fire-fst-compat",
  [qw]: "fire-vertex",
  "fire-js": "fire-js",
  [Ww]: "fire-js-all"
};
/**
 * @license
 * Copyright 2019 Google LLC
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
const Is = /* @__PURE__ */ new Map(), Qw = /* @__PURE__ */ new Map(), Ta = /* @__PURE__ */ new Map();
function Bl(n, e) {
  try {
    n.container.addComponent(e);
  } catch (t) {
    Nn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`, t);
  }
}
function ft(n) {
  const e = n.name;
  if (Ta.has(e))
    return Nn.debug(`There were multiple attempts to register component ${e}.`), !1;
  Ta.set(e, n);
  for (const t of Is.values())
    Bl(t, n);
  for (const t of Qw.values())
    Bl(t, n);
  return !0;
}
function dn(n, e) {
  const t = n.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return t && t.triggerHeartbeat(), n.container.getProvider(e);
}
function ht(n) {
  return n.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
const Yw = {
  "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
  "bad-app-name": "Illegal App name: '{$appName}'",
  "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
  "app-deleted": "Firebase App named '{$appName}' already deleted",
  "server-app-deleted": "Firebase Server App has been deleted",
  "no-options": "Need to provide options, when not being deployed to hosting via source.",
  "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  "invalid-log-argument": "First argument to `onLog` must be null or a function.",
  "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
  "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments."
}, sn = new Bn("app", "Firebase", Yw);
/**
 * @license
 * Copyright 2019 Google LLC
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
class Xw {
  constructor(e, t, r) {
    this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, t), this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = r, this.container.addComponent(new it(
      "app",
      () => this,
      "PUBLIC"
      /* ComponentType.PUBLIC */
    ));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), this._automaticDataCollectionEnabled = e;
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  /**
   * This function will throw an Error if the App has already been deleted -
   * use before performing API actions on the App.
   */
  checkDestroyed() {
    if (this.isDeleted)
      throw sn.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
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
const zn = Kw;
function sf(n, e = {}) {
  let t = n;
  typeof e != "object" && (e = { name: e });
  const r = Object.assign({ name: Ea, automaticDataCollectionEnabled: !1 }, e), i = r.name;
  if (typeof i != "string" || !i)
    throw sn.create("bad-app-name", {
      appName: String(i)
    });
  if (t || (t = Qd()), !t)
    throw sn.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  const s = Is.get(i);
  if (s) {
    if (ui(t, s.options) && ui(r, s.config))
      return s;
    throw sn.create("duplicate-app", { appName: i });
  }
  const a = new sw(i);
  for (const u of Ta.values())
    a.addComponent(u);
  const c = new Xw(t, r, a);
  return Is.set(i, c), c;
}
function Xs(n = Ea) {
  const e = Is.get(n);
  if (!e && n === Ea && Qd())
    return sf();
  if (!e)
    throw sn.create("no-app", { appName: n });
  return e;
}
function He(n, e, t) {
  var r;
  let i = (r = Gw[n]) !== null && r !== void 0 ? r : n;
  t && (i += `-${t}`);
  const s = i.match(/\s|\//), a = e.match(/\s|\//);
  if (s || a) {
    const c = [
      `Unable to register library "${i}" with version "${e}":`
    ];
    s && c.push(`library name "${i}" contains illegal characters (whitespace or "/")`), s && a && c.push("and"), a && c.push(`version name "${e}" contains illegal characters (whitespace or "/")`), Nn.warn(c.join(" "));
    return;
  }
  ft(new it(
    `${i}-version`,
    () => ({ library: i, version: e }),
    "VERSION"
    /* ComponentType.VERSION */
  ));
}
/**
 * @license
 * Copyright 2021 Google LLC
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
const Jw = "firebase-heartbeat-database", Zw = 1, li = "firebase-heartbeat-store";
let Ko = null;
function of() {
  return Ko || (Ko = rf(Jw, Zw, {
    upgrade: (n, e) => {
      switch (e) {
        case 0:
          try {
            n.createObjectStore(li);
          } catch (t) {
            console.warn(t);
          }
      }
    }
  }).catch((n) => {
    throw sn.create("idb-open", {
      originalErrorMessage: n.message
    });
  })), Ko;
}
async function eE(n) {
  try {
    const t = (await of()).transaction(li), r = await t.objectStore(li).get(af(n));
    return await t.done, r;
  } catch (e) {
    if (e instanceof at)
      Nn.warn(e.message);
    else {
      const t = sn.create("idb-get", {
        originalErrorMessage: e == null ? void 0 : e.message
      });
      Nn.warn(t.message);
    }
  }
}
async function zl(n, e) {
  try {
    const r = (await of()).transaction(li, "readwrite");
    await r.objectStore(li).put(e, af(n)), await r.done;
  } catch (t) {
    if (t instanceof at)
      Nn.warn(t.message);
    else {
      const r = sn.create("idb-set", {
        originalErrorMessage: t == null ? void 0 : t.message
      });
      Nn.warn(r.message);
    }
  }
}
function af(n) {
  return `${n.name}!${n.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
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
const tE = 1024, nE = 30 * 24 * 60 * 60 * 1e3;
class rE {
  constructor(e) {
    this.container = e, this._heartbeatsCache = null;
    const t = this.container.getProvider("app").getImmediate();
    this._storage = new sE(t), this._heartbeatsCachePromise = this._storage.read().then((r) => (this._heartbeatsCache = r, r));
  }
  /**
   * Called to report a heartbeat. The function will generate
   * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
   * to IndexedDB.
   * Note that we only store one heartbeat per day. So if a heartbeat for today is
   * already logged, subsequent calls to this function in the same day will be ignored.
   */
  async triggerHeartbeat() {
    var e, t;
    const i = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), s = ql();
    if (!(((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, ((t = this._heartbeatsCache) === null || t === void 0 ? void 0 : t.heartbeats) == null)) && !(this._heartbeatsCache.lastSentHeartbeatDate === s || this._heartbeatsCache.heartbeats.some((a) => a.date === s)))
      return this._heartbeatsCache.heartbeats.push({ date: s, agent: i }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((a) => {
        const c = new Date(a.date).valueOf();
        return Date.now() - c <= nE;
      }), this._storage.overwrite(this._heartbeatsCache);
  }
  /**
   * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
   * It also clears all heartbeats from memory as well as in IndexedDB.
   *
   * NOTE: Consuming product SDKs should not send the header if this method
   * returns an empty string.
   */
  async getHeartbeatsHeader() {
    var e;
    if (this._heartbeatsCache === null && await this._heartbeatsCachePromise, ((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0)
      return "";
    const t = ql(), { heartbeatsToSend: r, unsentEntries: i } = iE(this._heartbeatsCache.heartbeats), s = Ts(JSON.stringify({ version: 2, heartbeats: r }));
    return this._heartbeatsCache.lastSentHeartbeatDate = t, i.length > 0 ? (this._heartbeatsCache.heartbeats = i, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), s;
  }
}
function ql() {
  return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function iE(n, e = tE) {
  const t = [];
  let r = n.slice();
  for (const i of n) {
    const s = t.find((a) => a.agent === i.agent);
    if (s) {
      if (s.dates.push(i.date), Hl(t) > e) {
        s.dates.pop();
        break;
      }
    } else if (t.push({
      agent: i.agent,
      dates: [i.date]
    }), Hl(t) > e) {
      t.pop();
      break;
    }
    r = r.slice(1);
  }
  return {
    heartbeatsToSend: t,
    unsentEntries: r
  };
}
class sE {
  constructor(e) {
    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    return Zd() ? ef().then(() => !0).catch(() => !1) : !1;
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const t = await eE(this.app);
      return t != null && t.heartbeats ? t : { heartbeats: [] };
    } else
      return { heartbeats: [] };
  }
  // overwrite the storage with the provided heartbeats
  async overwrite(e) {
    var t;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return zl(this.app, {
        lastSentHeartbeatDate: (t = e.lastSentHeartbeatDate) !== null && t !== void 0 ? t : i.lastSentHeartbeatDate,
        heartbeats: e.heartbeats
      });
    } else
      return;
  }
  // add heartbeats
  async add(e) {
    var t;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return zl(this.app, {
        lastSentHeartbeatDate: (t = e.lastSentHeartbeatDate) !== null && t !== void 0 ? t : i.lastSentHeartbeatDate,
        heartbeats: [
          ...i.heartbeats,
          ...e.heartbeats
        ]
      });
    } else
      return;
  }
}
function Hl(n) {
  return Ts(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: n })
  ).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
function oE(n) {
  ft(new it(
    "platform-logger",
    (e) => new ww(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), ft(new it(
    "heartbeat",
    (e) => new rE(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), He(wa, jl, n), He(wa, jl, "esm2017"), He("fire-js", "");
}
oE("");
var aE = "firebase", cE = "10.12.5";
/**
 * @license
 * Copyright 2020 Google LLC
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
He(aE, cE, "app");
function Xa(n, e) {
  var t = {};
  for (var r in n)
    Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(n); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[i]) && (t[r[i]] = n[r[i]]);
  return t;
}
function cf() {
  return {
    "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
const uE = cf, uf = new Bn("auth", "Firebase", cf());
/**
 * @license
 * Copyright 2020 Google LLC
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
const bs = new Ys("@firebase/auth");
function lE(n, ...e) {
  bs.logLevel <= Y.WARN && bs.warn(`Auth (${zn}): ${n}`, ...e);
}
function us(n, ...e) {
  bs.logLevel <= Y.ERROR && bs.error(`Auth (${zn}): ${n}`, ...e);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function st(n, ...e) {
  throw Za(n, ...e);
}
function We(n, ...e) {
  return Za(n, ...e);
}
function Ja(n, e, t) {
  const r = Object.assign(Object.assign({}, uE()), { [e]: t });
  return new Bn("auth", "Firebase", r).create(e, {
    appName: n.name
  });
}
function Dt(n) {
  return Ja(n, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
}
function hE(n, e, t) {
  const r = t;
  if (!(e instanceof r))
    throw r.name !== e.constructor.name && st(
      n,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), Ja(n, "argument-error", `Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`);
}
function Za(n, ...e) {
  if (typeof n != "string") {
    const t = e[0], r = [...e.slice(1)];
    return r[0] && (r[0].appName = n.name), n._errorFactory.create(t, ...r);
  }
  return uf.create(n, ...e);
}
function B(n, e, ...t) {
  if (!n)
    throw Za(e, ...t);
}
function kt(n) {
  const e = "INTERNAL ASSERTION FAILED: " + n;
  throw us(e), new Error(e);
}
function Lt(n, e) {
  n || kt(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function Ia() {
  var n;
  return typeof self < "u" && ((n = self.location) === null || n === void 0 ? void 0 : n.href) || "";
}
function lf() {
  return Wl() === "http:" || Wl() === "https:";
}
function Wl() {
  var n;
  return typeof self < "u" && ((n = self.location) === null || n === void 0 ? void 0 : n.protocol) || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function dE() {
  return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  (lf() || Jd() || "connection" in navigator) ? navigator.onLine : !0;
}
function fE() {
  if (typeof navigator > "u")
    return null;
  const n = navigator;
  return (
    // Most reliable, but only supported in Chrome/Firefox.
    n.languages && n.languages[0] || // Supported in most browsers, but returns the language of the browser
    // UI, not the language set in browser settings.
    n.language || // Couldn't determine language.
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class wi {
  constructor(e, t) {
    this.shortDelay = e, this.longDelay = t, Lt(t > e, "Short delay should be less than long delay!"), this.isMobile = Uv() || jv();
  }
  get() {
    return dE() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function ec(n, e) {
  Lt(n.emulator, "Emulator should always be set here");
  const { url: t } = n.emulator;
  return e ? `${t}${e.startsWith("/") ? e.slice(1) : e}` : t;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class hf {
  static initialize(e, t, r) {
    this.fetchImpl = e, t && (this.headersImpl = t), r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl)
      return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self)
      return self.fetch;
    if (typeof globalThis < "u" && globalThis.fetch)
      return globalThis.fetch;
    if (typeof fetch < "u")
      return fetch;
    kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl)
      return this.headersImpl;
    if (typeof self < "u" && "Headers" in self)
      return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < "u")
      return Headers;
    kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static response() {
    if (this.responseImpl)
      return this.responseImpl;
    if (typeof self < "u" && "Response" in self)
      return self.Response;
    if (typeof globalThis < "u" && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < "u")
      return Response;
    kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const pE = {
  // Custom token errors.
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  // This can only happen if the SDK sends a bad request.
  MISSING_CUSTOM_TOKEN: "internal-error",
  // Create Auth URI errors.
  INVALID_IDENTIFIER: "invalid-email",
  // This can only happen if the SDK sends a bad request.
  MISSING_CONTINUE_URI: "internal-error",
  // Sign in with email and password errors (some apply to sign up too).
  INVALID_PASSWORD: "wrong-password",
  // This can only happen if the SDK sends a bad request.
  MISSING_PASSWORD: "missing-password",
  // Thrown if Email Enumeration Protection is enabled in the project and the email or password is
  // invalid.
  INVALID_LOGIN_CREDENTIALS: "invalid-credential",
  // Sign up with email and password errors.
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  // Verify assertion for sign in with credential errors:
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  // This can only happen if the SDK sends a bad request.
  MISSING_REQ_TYPE: "internal-error",
  // Send Password reset email errors:
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  // This can only happen if the SDK sends a bad request.
  MISSING_OOB_CODE: "internal-error",
  // Operations that require ID token in request:
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  // Other errors.
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
  // Phone Auth related errors.
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  // Other action code errors when additional settings passed.
  // MISSING_CONTINUE_URI is getting mapped to INTERNAL_ERROR above.
  // This is OK as this error will be caught by client side validation.
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  // getProjectConfig errors when clientId is passed.
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  // User actions (sign-up or deletion) disabled errors.
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  // Multi factor related errors.
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  // Blocking functions related errors.
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  // Recaptcha related errors.
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type"
  /* AuthErrorCode.INVALID_REQ_TYPE */
};
/**
 * @license
 * Copyright 2020 Google LLC
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
const mE = new wi(3e4, 6e4);
function fn(n, e) {
  return n.tenantId && !e.tenantId ? Object.assign(Object.assign({}, e), { tenantId: n.tenantId }) : e;
}
async function It(n, e, t, r, i = {}) {
  return df(n, i, async () => {
    let s = {}, a = {};
    r && (e === "GET" ? a = r : s = {
      body: JSON.stringify(r)
    });
    const c = yr(Object.assign({ key: n.config.apiKey }, a)).slice(1), u = await n._getAdditionalHeaders();
    return u[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/json", n.languageCode && (u[
      "X-Firebase-Locale"
      /* HttpHeader.X_FIREBASE_LOCALE */
    ] = n.languageCode), hf.fetch()(ff(n, n.config.apiHost, t, c), Object.assign({
      method: e,
      headers: u,
      referrerPolicy: "no-referrer"
    }, s));
  });
}
async function df(n, e, t) {
  n._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, pE), e);
  try {
    const i = new yE(n), s = await Promise.race([
      t(),
      i.promise
    ]);
    i.clearNetworkTimeout();
    const a = await s.json();
    if ("needConfirmation" in a)
      throw Zi(n, "account-exists-with-different-credential", a);
    if (s.ok && !("errorMessage" in a))
      return a;
    {
      const c = s.ok ? a.errorMessage : a.error.message, [u, h] = c.split(" : ");
      if (u === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw Zi(n, "credential-already-in-use", a);
      if (u === "EMAIL_EXISTS")
        throw Zi(n, "email-already-in-use", a);
      if (u === "USER_DISABLED")
        throw Zi(n, "user-disabled", a);
      const f = r[u] || u.toLowerCase().replace(/[_\s]+/g, "-");
      if (h)
        throw Ja(n, f, h);
      st(n, f);
    }
  } catch (i) {
    if (i instanceof at)
      throw i;
    st(n, "network-request-failed", { message: String(i) });
  }
}
async function Ei(n, e, t, r, i = {}) {
  const s = await It(n, e, t, r, i);
  return "mfaPendingCredential" in s && st(n, "multi-factor-auth-required", {
    _serverResponse: s
  }), s;
}
function ff(n, e, t, r) {
  const i = `${e}${t}?${r}`;
  return n.config.emulator ? ec(n.config, i) : `${n.config.apiScheme}://${i}`;
}
function gE(n) {
  switch (n) {
    case "ENFORCE":
      return "ENFORCE";
    case "AUDIT":
      return "AUDIT";
    case "OFF":
      return "OFF";
    default:
      return "ENFORCEMENT_STATE_UNSPECIFIED";
  }
}
class yE {
  constructor(e) {
    this.auth = e, this.timer = null, this.promise = new Promise((t, r) => {
      this.timer = setTimeout(() => r(We(
        this.auth,
        "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
      )), mE.get());
    });
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function Zi(n, e, t) {
  const r = {
    appName: n.name
  };
  t.email && (r.email = t.email), t.phoneNumber && (r.phoneNumber = t.phoneNumber);
  const i = We(n, e, r);
  return i.customData._tokenResponse = t, i;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function Kl(n) {
  return n !== void 0 && n.getResponse !== void 0;
}
function Gl(n) {
  return n !== void 0 && n.enterprise !== void 0;
}
class _E {
  constructor(e) {
    if (this.siteKey = "", this.recaptchaEnforcementState = [], e.recaptchaKey === void 0)
      throw new Error("recaptchaKey undefined");
    this.siteKey = e.recaptchaKey.split("/")[3], this.recaptchaEnforcementState = e.recaptchaEnforcementState;
  }
  /**
   * Returns the reCAPTCHA Enterprise enforcement state for the given provider.
   *
   * @param providerStr - The provider whose enforcement state is to be returned.
   * @returns The reCAPTCHA Enterprise enforcement state for the given provider.
   */
  getProviderEnforcementState(e) {
    if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0)
      return null;
    for (const t of this.recaptchaEnforcementState)
      if (t.provider && t.provider === e)
        return gE(t.enforcementState);
    return null;
  }
  /**
   * Returns true if the reCAPTCHA Enterprise enforcement state for the provider is set to ENFORCE or AUDIT.
   *
   * @param providerStr - The provider whose enablement state is to be returned.
   * @returns Whether or not reCAPTCHA Enterprise protection is enabled for the given provider.
   */
  isProviderEnabled(e) {
    return this.getProviderEnforcementState(e) === "ENFORCE" || this.getProviderEnforcementState(e) === "AUDIT";
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function vE(n) {
  return (await It(
    n,
    "GET",
    "/v1/recaptchaParams"
    /* Endpoint.GET_RECAPTCHA_PARAM */
  )).recaptchaSiteKey || "";
}
async function wE(n, e) {
  return It(n, "GET", "/v2/recaptchaConfig", fn(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function EE(n, e) {
  return It(n, "POST", "/v1/accounts:delete", e);
}
async function pf(n, e) {
  return It(n, "POST", "/v1/accounts:lookup", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function Zr(n) {
  if (n)
    try {
      const e = new Date(Number(n));
      if (!isNaN(e.getTime()))
        return e.toUTCString();
    } catch {
    }
}
async function TE(n, e = !1) {
  const t = de(n), r = await t.getIdToken(e), i = tc(r);
  B(
    i && i.exp && i.auth_time && i.iat,
    t.auth,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const s = typeof i.firebase == "object" ? i.firebase : void 0, a = s == null ? void 0 : s.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: Zr(Go(i.auth_time)),
    issuedAtTime: Zr(Go(i.iat)),
    expirationTime: Zr(Go(i.exp)),
    signInProvider: a || null,
    signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null
  };
}
function Go(n) {
  return Number(n) * 1e3;
}
function tc(n) {
  const [e, t, r] = n.split(".");
  if (e === void 0 || t === void 0 || r === void 0)
    return us("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = Wd(t);
    return i ? JSON.parse(i) : (us("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return us("Caught error parsing JWT payload as JSON", i == null ? void 0 : i.toString()), null;
  }
}
function Ql(n) {
  const e = tc(n);
  return B(
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), B(
    typeof e.exp < "u",
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), B(
    typeof e.iat < "u",
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Number(e.exp) - Number(e.iat);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function cr(n, e, t = !1) {
  if (t)
    return e;
  try {
    return await e;
  } catch (r) {
    throw r instanceof at && IE(r) && n.auth.currentUser === n && await n.auth.signOut(), r;
  }
}
function IE({ code: n }) {
  return n === "auth/user-disabled" || n === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class bE {
  constructor(e) {
    this.user = e, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4;
  }
  _start() {
    this.isRunning || (this.isRunning = !0, this.schedule());
  }
  _stop() {
    this.isRunning && (this.isRunning = !1, this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(e) {
    var t;
    if (e) {
      const r = this.errorBackoff;
      return this.errorBackoff = Math.min(
        this.errorBackoff * 2,
        96e4
        /* Duration.RETRY_BACKOFF_MAX */
      ), r;
    } else {
      this.errorBackoff = 3e4;
      const i = ((t = this.user.stsTokenManager.expirationTime) !== null && t !== void 0 ? t : 0) - Date.now() - 3e5;
      return Math.max(0, i);
    }
  }
  schedule(e = !1) {
    if (!this.isRunning)
      return;
    const t = this.getInterval(e);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, t);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (e) {
      (e == null ? void 0 : e.code) === "auth/network-request-failed" && this.schedule(
        /* wasError */
        !0
      );
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class ba {
  constructor(e, t) {
    this.createdAt = e, this.lastLoginAt = t, this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = Zr(this.lastLoginAt), this.creationTime = Zr(this.createdAt);
  }
  _copy(e) {
    this.createdAt = e.createdAt, this.lastLoginAt = e.lastLoginAt, this._initializeTime();
  }
  toJSON() {
    return {
      createdAt: this.createdAt,
      lastLoginAt: this.lastLoginAt
    };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
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
async function As(n) {
  var e;
  const t = n.auth, r = await n.getIdToken(), i = await cr(n, pf(t, { idToken: r }));
  B(
    i == null ? void 0 : i.users.length,
    t,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const s = i.users[0];
  n._notifyReloadListener(s);
  const a = !((e = s.providerUserInfo) === null || e === void 0) && e.length ? mf(s.providerUserInfo) : [], c = SE(n.providerData, a), u = n.isAnonymous, h = !(n.email && s.passwordHash) && !(c != null && c.length), f = u ? h : !1, m = {
    uid: s.localId,
    displayName: s.displayName || null,
    photoURL: s.photoUrl || null,
    email: s.email || null,
    emailVerified: s.emailVerified || !1,
    phoneNumber: s.phoneNumber || null,
    tenantId: s.tenantId || null,
    providerData: c,
    metadata: new ba(s.createdAt, s.lastLoginAt),
    isAnonymous: f
  };
  Object.assign(n, m);
}
async function AE(n) {
  const e = de(n);
  await As(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
}
function SE(n, e) {
  return [...n.filter((r) => !e.some((i) => i.providerId === r.providerId)), ...e];
}
function mf(n) {
  return n.map((e) => {
    var { providerId: t } = e, r = Xa(e, ["providerId"]);
    return {
      providerId: t,
      uid: r.rawId || "",
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function RE(n, e) {
  const t = await df(n, {}, async () => {
    const r = yr({
      grant_type: "refresh_token",
      refresh_token: e
    }).slice(1), { tokenApiHost: i, apiKey: s } = n.config, a = ff(n, i, "/v1/token", `key=${s}`), c = await n._getAdditionalHeaders();
    return c[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/x-www-form-urlencoded", hf.fetch()(a, {
      method: "POST",
      headers: c,
      body: r
    });
  });
  return {
    accessToken: t.access_token,
    expiresIn: t.expires_in,
    refreshToken: t.refresh_token
  };
}
async function CE(n, e) {
  return It(n, "POST", "/v2/accounts:revokeToken", fn(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class tr {
  constructor() {
    this.refreshToken = null, this.accessToken = null, this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    B(
      e.idToken,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), B(
      typeof e.idToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), B(
      typeof e.refreshToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const t = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : Ql(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
  }
  updateFromIdToken(e) {
    B(
      e.length !== 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const t = Ql(e);
    this.updateTokensAndExpiration(e, null, t);
  }
  async getToken(e, t = !1) {
    return !t && this.accessToken && !this.isExpired ? this.accessToken : (B(
      this.refreshToken,
      e,
      "user-token-expired"
      /* AuthErrorCode.TOKEN_EXPIRED */
    ), this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(e, t) {
    const { accessToken: r, refreshToken: i, expiresIn: s } = await RE(e, t);
    this.updateTokensAndExpiration(r, i, Number(s));
  }
  updateTokensAndExpiration(e, t, r) {
    this.refreshToken = t || null, this.accessToken = e || null, this.expirationTime = Date.now() + r * 1e3;
  }
  static fromJSON(e, t) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = t, a = new tr();
    return r && (B(typeof r == "string", "internal-error", {
      appName: e
    }), a.refreshToken = r), i && (B(typeof i == "string", "internal-error", {
      appName: e
    }), a.accessToken = i), s && (B(typeof s == "number", "internal-error", {
      appName: e
    }), a.expirationTime = s), a;
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime
    };
  }
  _assign(e) {
    this.accessToken = e.accessToken, this.refreshToken = e.refreshToken, this.expirationTime = e.expirationTime;
  }
  _clone() {
    return Object.assign(new tr(), this.toJSON());
  }
  _performRefresh() {
    return kt("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function Gt(n, e) {
  B(typeof n == "string" || typeof n > "u", "internal-error", { appName: e });
}
class Ot {
  constructor(e) {
    var { uid: t, auth: r, stsTokenManager: i } = e, s = Xa(e, ["uid", "auth", "stsTokenManager"]);
    this.providerId = "firebase", this.proactiveRefresh = new bE(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = t, this.auth = r, this.stsTokenManager = i, this.accessToken = i.accessToken, this.displayName = s.displayName || null, this.email = s.email || null, this.emailVerified = s.emailVerified || !1, this.phoneNumber = s.phoneNumber || null, this.photoURL = s.photoURL || null, this.isAnonymous = s.isAnonymous || !1, this.tenantId = s.tenantId || null, this.providerData = s.providerData ? [...s.providerData] : [], this.metadata = new ba(s.createdAt || void 0, s.lastLoginAt || void 0);
  }
  async getIdToken(e) {
    const t = await cr(this, this.stsTokenManager.getToken(this.auth, e));
    return B(
      t,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.accessToken !== t && (this.accessToken = t, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), t;
  }
  getIdTokenResult(e) {
    return TE(this, e);
  }
  reload() {
    return AE(this);
  }
  _assign(e) {
    this !== e && (B(
      this.uid === e.uid,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map((t) => Object.assign({}, t)), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    const t = new Ot(Object.assign(Object.assign({}, this), { auth: e, stsTokenManager: this.stsTokenManager._clone() }));
    return t.metadata._copy(this.metadata), t;
  }
  _onReload(e) {
    B(
      !this.reloadListener,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.reloadListener = e, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null);
  }
  _notifyReloadListener(e) {
    this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e;
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(e, t = !1) {
    let r = !1;
    e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), r = !0), t && await As(this), await this.auth._persistUserIfCurrent(this), r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (ht(this.auth.app))
      return Promise.reject(Dt(this.auth));
    const e = await this.getIdToken();
    return await cr(this, EE(this.auth, { idToken: e })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
  }
  toJSON() {
    return Object.assign(Object.assign({
      uid: this.uid,
      email: this.email || void 0,
      emailVerified: this.emailVerified,
      displayName: this.displayName || void 0,
      isAnonymous: this.isAnonymous,
      photoURL: this.photoURL || void 0,
      phoneNumber: this.phoneNumber || void 0,
      tenantId: this.tenantId || void 0,
      providerData: this.providerData.map((e) => Object.assign({}, e)),
      stsTokenManager: this.stsTokenManager.toJSON(),
      // Redirect event ID must be maintained in case there is a pending
      // redirect event.
      _redirectEventId: this._redirectEventId
    }, this.metadata.toJSON()), {
      // Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
      apiKey: this.auth.config.apiKey,
      appName: this.auth.name
    });
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(e, t) {
    var r, i, s, a, c, u, h, f;
    const m = (r = t.displayName) !== null && r !== void 0 ? r : void 0, _ = (i = t.email) !== null && i !== void 0 ? i : void 0, w = (s = t.phoneNumber) !== null && s !== void 0 ? s : void 0, A = (a = t.photoURL) !== null && a !== void 0 ? a : void 0, R = (c = t.tenantId) !== null && c !== void 0 ? c : void 0, p = (u = t._redirectEventId) !== null && u !== void 0 ? u : void 0, I = (h = t.createdAt) !== null && h !== void 0 ? h : void 0, D = (f = t.lastLoginAt) !== null && f !== void 0 ? f : void 0, { uid: O, emailVerified: N, isAnonymous: C, providerData: M, stsTokenManager: T } = t;
    B(
      O && T,
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const y = tr.fromJSON(this.name, T);
    B(
      typeof O == "string",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), Gt(m, e.name), Gt(_, e.name), B(
      typeof N == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), B(
      typeof C == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), Gt(w, e.name), Gt(A, e.name), Gt(R, e.name), Gt(p, e.name), Gt(I, e.name), Gt(D, e.name);
    const v = new Ot({
      uid: O,
      auth: e,
      email: _,
      emailVerified: N,
      displayName: m,
      isAnonymous: C,
      photoURL: A,
      phoneNumber: w,
      tenantId: R,
      stsTokenManager: y,
      createdAt: I,
      lastLoginAt: D
    });
    return M && Array.isArray(M) && (v.providerData = M.map((b) => Object.assign({}, b))), p && (v._redirectEventId = p), v;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromIdTokenResponse(e, t, r = !1) {
    const i = new tr();
    i.updateFromServerResponse(t);
    const s = new Ot({
      uid: t.localId,
      auth: e,
      stsTokenManager: i,
      isAnonymous: r
    });
    return await As(s), s;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromGetAccountInfoResponse(e, t, r) {
    const i = t.users[0];
    B(
      i.localId !== void 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const s = i.providerUserInfo !== void 0 ? mf(i.providerUserInfo) : [], a = !(i.email && i.passwordHash) && !(s != null && s.length), c = new tr();
    c.updateFromIdToken(r);
    const u = new Ot({
      uid: i.localId,
      auth: e,
      stsTokenManager: c,
      isAnonymous: a
    }), h = {
      uid: i.localId,
      displayName: i.displayName || null,
      photoURL: i.photoUrl || null,
      email: i.email || null,
      emailVerified: i.emailVerified || !1,
      phoneNumber: i.phoneNumber || null,
      tenantId: i.tenantId || null,
      providerData: s,
      metadata: new ba(i.createdAt, i.lastLoginAt),
      isAnonymous: !(i.email && i.passwordHash) && !(s != null && s.length)
    };
    return Object.assign(u, h), u;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const Yl = /* @__PURE__ */ new Map();
function Nt(n) {
  Lt(n instanceof Function, "Expected a class definition");
  let e = Yl.get(n);
  return e ? (Lt(e instanceof n, "Instance stored in cache mismatched with class"), e) : (e = new n(), Yl.set(n, e), e);
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class gf {
  constructor() {
    this.type = "NONE", this.storage = {};
  }
  async _isAvailable() {
    return !0;
  }
  async _set(e, t) {
    this.storage[e] = t;
  }
  async _get(e) {
    const t = this.storage[e];
    return t === void 0 ? null : t;
  }
  async _remove(e) {
    delete this.storage[e];
  }
  _addListener(e, t) {
  }
  _removeListener(e, t) {
  }
}
gf.type = "NONE";
const Xl = gf;
/**
 * @license
 * Copyright 2019 Google LLC
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
function ls(n, e, t) {
  return `firebase:${n}:${e}:${t}`;
}
class nr {
  constructor(e, t, r) {
    this.persistence = e, this.auth = t, this.userKey = r;
    const { config: i, name: s } = this.auth;
    this.fullUserKey = ls(this.userKey, i.apiKey, s), this.fullPersistenceKey = ls("persistence", i.apiKey, s), this.boundEventHandler = t._onStorageEvent.bind(t), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    return e ? Ot._fromJSON(this.auth, e) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
  }
  async setPersistence(e) {
    if (this.persistence === e)
      return;
    const t = await this.getCurrentUser();
    if (await this.removeCurrentUser(), this.persistence = e, t)
      return this.setCurrentUser(t);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(e, t, r = "authUser") {
    if (!t.length)
      return new nr(Nt(Xl), e, r);
    const i = (await Promise.all(t.map(async (h) => {
      if (await h._isAvailable())
        return h;
    }))).filter((h) => h);
    let s = i[0] || Nt(Xl);
    const a = ls(r, e.config.apiKey, e.name);
    let c = null;
    for (const h of t)
      try {
        const f = await h._get(a);
        if (f) {
          const m = Ot._fromJSON(e, f);
          h !== s && (c = m), s = h;
          break;
        }
      } catch {
      }
    const u = i.filter((h) => h._shouldAllowMigration);
    return !s._shouldAllowMigration || !u.length ? new nr(s, e, r) : (s = u[0], c && await s._set(a, c.toJSON()), await Promise.all(t.map(async (h) => {
      if (h !== s)
        try {
          await h._remove(a);
        } catch {
        }
    })), new nr(s, e, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function Jl(n) {
  const e = n.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (vf(e))
    return "IEMobile";
  if (e.includes("msie") || e.includes("trident/"))
    return "IE";
  if (e.includes("edge/"))
    return "Edge";
  if (yf(e))
    return "Firefox";
  if (e.includes("silk/"))
    return "Silk";
  if (Ef(e))
    return "Blackberry";
  if (Tf(e))
    return "Webos";
  if (nc(e))
    return "Safari";
  if ((e.includes("chrome/") || _f(e)) && !e.includes("edge/"))
    return "Chrome";
  if (wf(e))
    return "Android";
  {
    const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/, r = n.match(t);
    if ((r == null ? void 0 : r.length) === 2)
      return r[1];
  }
  return "Other";
}
function yf(n = Oe()) {
  return /firefox\//i.test(n);
}
function nc(n = Oe()) {
  const e = n.toLowerCase();
  return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android");
}
function _f(n = Oe()) {
  return /crios\//i.test(n);
}
function vf(n = Oe()) {
  return /iemobile/i.test(n);
}
function wf(n = Oe()) {
  return /android/i.test(n);
}
function Ef(n = Oe()) {
  return /blackberry/i.test(n);
}
function Tf(n = Oe()) {
  return /webos/i.test(n);
}
function Js(n = Oe()) {
  return /iphone|ipad|ipod/i.test(n) || /macintosh/i.test(n) && /mobile/i.test(n);
}
function PE(n = Oe()) {
  var e;
  return Js(n) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone);
}
function kE() {
  return Bv() && document.documentMode === 10;
}
function If(n = Oe()) {
  return Js(n) || wf(n) || Tf(n) || Ef(n) || /windows phone/i.test(n) || vf(n);
}
function OE() {
  try {
    return !!(window && window !== window.top);
  } catch {
    return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function bf(n, e = []) {
  let t;
  switch (n) {
    case "Browser":
      t = Jl(Oe());
      break;
    case "Worker":
      t = `${Jl(Oe())}-${n}`;
      break;
    default:
      t = n;
  }
  const r = e.length ? e.join(",") : "FirebaseCore-web";
  return `${t}/JsCore/${zn}/${r}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
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
class NE {
  constructor(e) {
    this.auth = e, this.queue = [];
  }
  pushCallback(e, t) {
    const r = (s) => new Promise((a, c) => {
      try {
        const u = e(s);
        a(u);
      } catch (u) {
        c(u);
      }
    });
    r.onAbort = t, this.queue.push(r);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(e) {
    if (this.auth.currentUser === e)
      return;
    const t = [];
    try {
      for (const r of this.queue)
        await r(e), r.onAbort && t.push(r.onAbort);
    } catch (r) {
      t.reverse();
      for (const i of t)
        try {
          i();
        } catch {
        }
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: r == null ? void 0 : r.message
      });
    }
  }
}
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
async function DE(n, e = {}) {
  return It(n, "GET", "/v2/passwordPolicy", fn(n, e));
}
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
const xE = 6;
class VE {
  constructor(e) {
    var t, r, i, s;
    const a = e.customStrengthOptions;
    this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = (t = a.minPasswordLength) !== null && t !== void 0 ? t : xE, a.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = a.maxPasswordLength), a.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = a.containsLowercaseCharacter), a.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = a.containsUppercaseCharacter), a.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = a.containsNumericCharacter), a.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = a.containsNonAlphanumericCharacter), this.enforcementState = e.enforcementState, this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = (i = (r = e.allowedNonAlphanumericCharacters) === null || r === void 0 ? void 0 : r.join("")) !== null && i !== void 0 ? i : "", this.forceUpgradeOnSignin = (s = e.forceUpgradeOnSignin) !== null && s !== void 0 ? s : !1, this.schemaVersion = e.schemaVersion;
  }
  validatePassword(e) {
    var t, r, i, s, a, c;
    const u = {
      isValid: !0,
      passwordPolicy: this
    };
    return this.validatePasswordLengthOptions(e, u), this.validatePasswordCharacterOptions(e, u), u.isValid && (u.isValid = (t = u.meetsMinPasswordLength) !== null && t !== void 0 ? t : !0), u.isValid && (u.isValid = (r = u.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0), u.isValid && (u.isValid = (i = u.containsLowercaseLetter) !== null && i !== void 0 ? i : !0), u.isValid && (u.isValid = (s = u.containsUppercaseLetter) !== null && s !== void 0 ? s : !0), u.isValid && (u.isValid = (a = u.containsNumericCharacter) !== null && a !== void 0 ? a : !0), u.isValid && (u.isValid = (c = u.containsNonAlphanumericCharacter) !== null && c !== void 0 ? c : !0), u;
  }
  /**
   * Validates that the password meets the length options for the policy.
   *
   * @param password Password to validate.
   * @param status Validation status.
   */
  validatePasswordLengthOptions(e, t) {
    const r = this.customStrengthOptions.minPasswordLength, i = this.customStrengthOptions.maxPasswordLength;
    r && (t.meetsMinPasswordLength = e.length >= r), i && (t.meetsMaxPasswordLength = e.length <= i);
  }
  /**
   * Validates that the password meets the character options for the policy.
   *
   * @param password Password to validate.
   * @param status Validation status.
   */
  validatePasswordCharacterOptions(e, t) {
    this.updatePasswordCharacterOptionsStatuses(
      t,
      /* containsLowercaseCharacter= */
      !1,
      /* containsUppercaseCharacter= */
      !1,
      /* containsNumericCharacter= */
      !1,
      /* containsNonAlphanumericCharacter= */
      !1
    );
    let r;
    for (let i = 0; i < e.length; i++)
      r = e.charAt(i), this.updatePasswordCharacterOptionsStatuses(
        t,
        /* containsLowercaseCharacter= */
        r >= "a" && r <= "z",
        /* containsUppercaseCharacter= */
        r >= "A" && r <= "Z",
        /* containsNumericCharacter= */
        r >= "0" && r <= "9",
        /* containsNonAlphanumericCharacter= */
        this.allowedNonAlphanumericCharacters.includes(r)
      );
  }
  /**
   * Updates the running validation status with the statuses for the character options.
   * Expected to be called each time a character is processed to update each option status
   * based on the current character.
   *
   * @param status Validation status.
   * @param containsLowercaseCharacter Whether the character is a lowercase letter.
   * @param containsUppercaseCharacter Whether the character is an uppercase letter.
   * @param containsNumericCharacter Whether the character is a numeric character.
   * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
   */
  updatePasswordCharacterOptionsStatuses(e, t, r, i, s) {
    this.customStrengthOptions.containsLowercaseLetter && (e.containsLowercaseLetter || (e.containsLowercaseLetter = t)), this.customStrengthOptions.containsUppercaseLetter && (e.containsUppercaseLetter || (e.containsUppercaseLetter = r)), this.customStrengthOptions.containsNumericCharacter && (e.containsNumericCharacter || (e.containsNumericCharacter = i)), this.customStrengthOptions.containsNonAlphanumericCharacter && (e.containsNonAlphanumericCharacter || (e.containsNonAlphanumericCharacter = s));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class ME {
  constructor(e, t, r, i) {
    this.app = e, this.heartbeatServiceProvider = t, this.appCheckServiceProvider = r, this.config = i, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Zl(this), this.idTokenSubscription = new Zl(this), this.beforeStateQueue = new NE(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = uf, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = i.sdkClientVersion;
  }
  _initializeWithPersistence(e, t) {
    return t && (this._popupRedirectResolver = Nt(t)), this._initializationPromise = this.queue(async () => {
      var r, i;
      if (!this._deleted && (this.persistenceManager = await nr.create(this, e), !this._deleted)) {
        if (!((r = this._popupRedirectResolver) === null || r === void 0) && r._shouldInitProactively)
          try {
            await this._popupRedirectResolver._initialize(this);
          } catch {
          }
        await this.initializeCurrentUser(t), this.lastNotifiedUid = ((i = this.currentUser) === null || i === void 0 ? void 0 : i.uid) || null, !this._deleted && (this._isInitialized = !0);
      }
    }), this._initializationPromise;
  }
  /**
   * If the persistence is changed in another window, the user manager will let us know
   */
  async _onStorageEvent() {
    if (this._deleted)
      return;
    const e = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !e)) {
      if (this.currentUser && e && this.currentUser.uid === e.uid) {
        this._currentUser._assign(e), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(
        e,
        /* skipBeforeStateCallbacks */
        !0
      );
    }
  }
  async initializeCurrentUserFromIdToken(e) {
    try {
      const t = await pf(this, { idToken: e }), r = await Ot._fromGetAccountInfoResponse(this, t, e);
      await this.directlySetCurrentUser(r);
    } catch (t) {
      console.warn("FirebaseServerApp could not login user with provided authIdToken: ", t), await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(e) {
    var t;
    if (ht(this.app)) {
      const a = this.app.settings.authIdToken;
      return a ? new Promise((c) => {
        setTimeout(() => this.initializeCurrentUserFromIdToken(a).then(c, c));
      }) : this.directlySetCurrentUser(null);
    }
    const r = await this.assertedPersistence.getCurrentUser();
    let i = r, s = !1;
    if (e && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const a = (t = this.redirectUser) === null || t === void 0 ? void 0 : t._redirectEventId, c = i == null ? void 0 : i._redirectEventId, u = await this.tryRedirectSignIn(e);
      (!a || a === c) && (u != null && u.user) && (i = u.user, s = !0);
    }
    if (!i)
      return this.directlySetCurrentUser(null);
    if (!i._redirectEventId) {
      if (s)
        try {
          await this.beforeStateQueue.runMiddleware(i);
        } catch (a) {
          i = r, this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(a));
        }
      return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null);
    }
    return B(
      this._popupRedirectResolver,
      this,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId ? this.directlySetCurrentUser(i) : this.reloadAndSetCurrentUserOrClear(i);
  }
  async tryRedirectSignIn(e) {
    let t = null;
    try {
      t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return t;
  }
  async reloadAndSetCurrentUserOrClear(e) {
    try {
      await As(e);
    } catch (t) {
      if ((t == null ? void 0 : t.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = fE();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    if (ht(this.app))
      return Promise.reject(Dt(this));
    const t = e ? de(e) : null;
    return t && B(
      t.auth.config.apiKey === this.config.apiKey,
      this,
      "invalid-user-token"
      /* AuthErrorCode.INVALID_AUTH */
    ), this._updateCurrentUser(t && t._clone(this));
  }
  async _updateCurrentUser(e, t = !1) {
    if (!this._deleted)
      return e && B(
        this.tenantId === e.tenantId,
        this,
        "tenant-id-mismatch"
        /* AuthErrorCode.TENANT_ID_MISMATCH */
      ), t || await this.beforeStateQueue.runMiddleware(e), this.queue(async () => {
        await this.directlySetCurrentUser(e), this.notifyAuthListeners();
      });
  }
  async signOut() {
    return ht(this.app) ? Promise.reject(Dt(this)) : (await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(
      null,
      /* skipBeforeStateCallbacks */
      !0
    ));
  }
  setPersistence(e) {
    return ht(this.app) ? Promise.reject(Dt(this)) : this.queue(async () => {
      await this.assertedPersistence.setPersistence(Nt(e));
    });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(e) {
    this._getPasswordPolicyInternal() || await this._updatePasswordPolicy();
    const t = this._getPasswordPolicyInternal();
    return t.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {})) : t.validatePassword(e);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const e = await DE(this), t = new VE(e);
    this.tenantId === null ? this._projectPasswordPolicy = t : this._tenantPasswordPolicies[this.tenantId] = t;
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new Bn("auth", "Firebase", e());
  }
  onAuthStateChanged(e, t, r) {
    return this.registerStateListener(this.authStateSubscription, e, t, r);
  }
  beforeAuthStateChanged(e, t) {
    return this.beforeStateQueue.pushCallback(e, t);
  }
  onIdTokenChanged(e, t, r) {
    return this.registerStateListener(this.idTokenSubscription, e, t, r);
  }
  authStateReady() {
    return new Promise((e, t) => {
      if (this.currentUser)
        e();
      else {
        const r = this.onAuthStateChanged(() => {
          r(), e();
        }, t);
      }
    });
  }
  /**
   * Revokes the given access token. Currently only supports Apple OAuth access tokens.
   */
  async revokeAccessToken(e) {
    if (this.currentUser) {
      const t = await this.currentUser.getIdToken(), r = {
        providerId: "apple.com",
        tokenType: "ACCESS_TOKEN",
        token: e,
        idToken: t
      };
      this.tenantId != null && (r.tenantId = this.tenantId), await CE(this, r);
    }
  }
  toJSON() {
    var e;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON()
    };
  }
  async _setRedirectUser(e, t) {
    const r = await this.getOrInitRedirectPersistenceManager(t);
    return e === null ? r.removeCurrentUser() : r.setCurrentUser(e);
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const t = e && Nt(e) || this._popupRedirectResolver;
      B(
        t,
        this,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      ), this.redirectPersistenceManager = await nr.create(
        this,
        [Nt(t._redirectPersistence)],
        "redirectUser"
        /* KeyName.REDIRECT_USER */
      ), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(e) {
    var t, r;
    return this._isInitialized && await this.queue(async () => {
    }), ((t = this._currentUser) === null || t === void 0 ? void 0 : t._redirectEventId) === e ? this._currentUser : ((r = this.redirectUser) === null || r === void 0 ? void 0 : r._redirectEventId) === e ? this.redirectUser : null;
  }
  async _persistUserIfCurrent(e) {
    if (e === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(e));
  }
  /** Notifies listeners only if the user is current */
  _notifyListenersIfCurrent(e) {
    e === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  /** Returns the current user cast as the internal type */
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var e, t;
    if (!this._isInitialized)
      return;
    this.idTokenSubscription.next(this.currentUser);
    const r = (t = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !== null && t !== void 0 ? t : null;
    this.lastNotifiedUid !== r && (this.lastNotifiedUid = r, this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(e, t, r, i) {
    if (this._deleted)
      return () => {
      };
    const s = typeof t == "function" ? t : t.next.bind(t);
    let a = !1;
    const c = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    if (B(
      c,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), c.then(() => {
      a || s(this.currentUser);
    }), typeof t == "function") {
      const u = e.addObserver(t, r, i);
      return () => {
        a = !0, u();
      };
    } else {
      const u = e.addObserver(t);
      return () => {
        a = !0, u();
      };
    }
  }
  /**
   * Unprotected (from race conditions) method to set the current user. This
   * should only be called from within a queued callback. This is necessary
   * because the queue shouldn't rely on another queued callback.
   */
  async directlySetCurrentUser(e) {
    this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(), e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(), this.currentUser = e, e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser();
  }
  queue(e) {
    return this.operations = this.operations.then(e, e), this.operations;
  }
  get assertedPersistence() {
    return B(
      this.persistenceManager,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.persistenceManager;
  }
  _logFramework(e) {
    !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = bf(this.config.clientPlatform, this._getFrameworks()));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var e;
    const t = {
      "X-Client-Version": this.clientVersion
    };
    this.app.options.appId && (t[
      "X-Firebase-gmpid"
      /* HttpHeader.X_FIREBASE_GMPID */
    ] = this.app.options.appId);
    const r = await ((e = this.heartbeatServiceProvider.getImmediate({
      optional: !0
    })) === null || e === void 0 ? void 0 : e.getHeartbeatsHeader());
    r && (t[
      "X-Firebase-Client"
      /* HttpHeader.X_FIREBASE_CLIENT */
    ] = r);
    const i = await this._getAppCheckToken();
    return i && (t[
      "X-Firebase-AppCheck"
      /* HttpHeader.X_FIREBASE_APP_CHECK */
    ] = i), t;
  }
  async _getAppCheckToken() {
    var e;
    const t = await ((e = this.appCheckServiceProvider.getImmediate({ optional: !0 })) === null || e === void 0 ? void 0 : e.getToken());
    return t != null && t.error && lE(`Error while retrieving App Check token: ${t.error}`), t == null ? void 0 : t.token;
  }
}
function $t(n) {
  return de(n);
}
class Zl {
  constructor(e) {
    this.auth = e, this.observer = null, this.addObserver = Qv((t) => this.observer = t);
  }
  get next() {
    return B(
      this.observer,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.observer.next.bind(this.observer);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
let Ti = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: ""
};
function LE(n) {
  Ti = n;
}
function rc(n) {
  return Ti.loadJS(n);
}
function FE() {
  return Ti.recaptchaV2Script;
}
function UE() {
  return Ti.recaptchaEnterpriseScript;
}
function $E() {
  return Ti.gapiScript;
}
function Af(n) {
  return `__${n}${Math.floor(Math.random() * 1e6)}`;
}
const jE = "recaptcha-enterprise", BE = "NO_RECAPTCHA";
class zE {
  /**
   *
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   *
   */
  constructor(e) {
    this.type = jE, this.auth = $t(e);
  }
  /**
   * Executes the verification process.
   *
   * @returns A Promise for a token that can be used to assert the validity of a request.
   */
  async verify(e = "verify", t = !1) {
    async function r(s) {
      if (!t) {
        if (s.tenantId == null && s._agentRecaptchaConfig != null)
          return s._agentRecaptchaConfig.siteKey;
        if (s.tenantId != null && s._tenantRecaptchaConfigs[s.tenantId] !== void 0)
          return s._tenantRecaptchaConfigs[s.tenantId].siteKey;
      }
      return new Promise(async (a, c) => {
        wE(s, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        }).then((u) => {
          if (u.recaptchaKey === void 0)
            c(new Error("recaptcha Enterprise site key undefined"));
          else {
            const h = new _E(u);
            return s.tenantId == null ? s._agentRecaptchaConfig = h : s._tenantRecaptchaConfigs[s.tenantId] = h, a(h.siteKey);
          }
        }).catch((u) => {
          c(u);
        });
      });
    }
    function i(s, a, c) {
      const u = window.grecaptcha;
      Gl(u) ? u.enterprise.ready(() => {
        u.enterprise.execute(s, { action: e }).then((h) => {
          a(h);
        }).catch(() => {
          a(BE);
        });
      }) : c(Error("No reCAPTCHA enterprise script loaded."));
    }
    return new Promise((s, a) => {
      r(this.auth).then((c) => {
        if (!t && Gl(window.grecaptcha))
          i(c, s, a);
        else {
          if (typeof window > "u") {
            a(new Error("RecaptchaVerifier is only supported in browser"));
            return;
          }
          let u = UE();
          u.length !== 0 && (u += c), rc(u).then(() => {
            i(c, s, a);
          }).catch((h) => {
            a(h);
          });
        }
      }).catch((c) => {
        a(c);
      });
    });
  }
}
async function eh(n, e, t, r = !1) {
  const i = new zE(n);
  let s;
  try {
    s = await i.verify(t);
  } catch {
    s = await i.verify(t, !0);
  }
  const a = Object.assign({}, e);
  return r ? Object.assign(a, { captchaResp: s }) : Object.assign(a, { captchaResponse: s }), Object.assign(a, {
    clientType: "CLIENT_TYPE_WEB"
    /* RecaptchaClientType.WEB */
  }), Object.assign(a, {
    recaptchaVersion: "RECAPTCHA_ENTERPRISE"
    /* RecaptchaVersion.ENTERPRISE */
  }), a;
}
async function Aa(n, e, t, r) {
  var i;
  if (!((i = n._getRecaptchaConfig()) === null || i === void 0) && i.isProviderEnabled(
    "EMAIL_PASSWORD_PROVIDER"
    /* RecaptchaProvider.EMAIL_PASSWORD_PROVIDER */
  )) {
    const s = await eh(
      n,
      e,
      t,
      t === "getOobCode"
      /* RecaptchaActionName.GET_OOB_CODE */
    );
    return r(n, s);
  } else
    return r(n, e).catch(async (s) => {
      if (s.code === "auth/missing-recaptcha-token") {
        console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
        const a = await eh(
          n,
          e,
          t,
          t === "getOobCode"
          /* RecaptchaActionName.GET_OOB_CODE */
        );
        return r(n, a);
      } else
        return Promise.reject(s);
    });
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function qE(n, e) {
  const t = dn(n, "auth");
  if (t.isInitialized()) {
    const i = t.getImmediate(), s = t.getOptions();
    if (ui(s, e ?? {}))
      return i;
    st(
      i,
      "already-initialized"
      /* AuthErrorCode.ALREADY_INITIALIZED */
    );
  }
  return t.initialize({ options: e });
}
function HE(n, e) {
  const t = (e == null ? void 0 : e.persistence) || [], r = (Array.isArray(t) ? t : [t]).map(Nt);
  e != null && e.errorMap && n._updateErrorMap(e.errorMap), n._initializeWithPersistence(r, e == null ? void 0 : e.popupRedirectResolver);
}
function WE(n, e, t) {
  const r = $t(n);
  B(
    r._canInitEmulator,
    r,
    "emulator-config-failed"
    /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
  ), B(
    /^https?:\/\//.test(e),
    r,
    "invalid-emulator-scheme"
    /* AuthErrorCode.INVALID_EMULATOR_SCHEME */
  );
  const i = !!(t != null && t.disableWarnings), s = Sf(e), { host: a, port: c } = KE(e), u = c === null ? "" : `:${c}`;
  r.config.emulator = { url: `${s}//${a}${u}/` }, r.settings.appVerificationDisabledForTesting = !0, r.emulatorConfig = Object.freeze({
    host: a,
    port: c,
    protocol: s.replace(":", ""),
    options: Object.freeze({ disableWarnings: i })
  }), i || GE();
}
function Sf(n) {
  const e = n.indexOf(":");
  return e < 0 ? "" : n.substr(0, e + 1);
}
function KE(n) {
  const e = Sf(n), t = /(\/\/)?([^?#/]+)/.exec(n.substr(e.length));
  if (!t)
    return { host: "", port: null };
  const r = t[2].split("@").pop() || "", i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const s = i[1];
    return { host: s, port: th(r.substr(s.length + 1)) };
  } else {
    const [s, a] = r.split(":");
    return { host: s, port: th(a) };
  }
}
function th(n) {
  if (!n)
    return null;
  const e = Number(n);
  return isNaN(e) ? null : e;
}
function GE() {
  function n() {
    const e = document.createElement("p"), t = e.style;
    e.innerText = "Running in emulator mode. Do not use with production credentials.", t.position = "fixed", t.width = "100%", t.backgroundColor = "#ffffff", t.border = ".1em solid #000000", t.color = "#b50000", t.bottom = "0px", t.left = "0px", t.margin = "0px", t.zIndex = "10000", t.textAlign = "center", e.classList.add("firebase-emulator-warning"), document.body.appendChild(e);
  }
  typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", n) : n());
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class ic {
  /** @internal */
  constructor(e, t) {
    this.providerId = e, this.signInMethod = t;
  }
  /**
   * Returns a JSON-serializable representation of this object.
   *
   * @returns a JSON-serializable representation of this object.
   */
  toJSON() {
    return kt("not implemented");
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return kt("not implemented");
  }
  /** @internal */
  _linkToIdToken(e, t) {
    return kt("not implemented");
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return kt("not implemented");
  }
}
async function QE(n, e) {
  return It(n, "POST", "/v1/accounts:signUp", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function YE(n, e) {
  return Ei(n, "POST", "/v1/accounts:signInWithPassword", fn(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function XE(n, e) {
  return Ei(n, "POST", "/v1/accounts:signInWithEmailLink", fn(n, e));
}
async function JE(n, e) {
  return Ei(n, "POST", "/v1/accounts:signInWithEmailLink", fn(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class hi extends ic {
  /** @internal */
  constructor(e, t, r, i = null) {
    super("password", r), this._email = e, this._password = t, this._tenantId = i;
  }
  /** @internal */
  static _fromEmailAndPassword(e, t) {
    return new hi(
      e,
      t,
      "password"
      /* SignInMethod.EMAIL_PASSWORD */
    );
  }
  /** @internal */
  static _fromEmailAndCode(e, t, r = null) {
    return new hi(e, t, "emailLink", r);
  }
  /** {@inheritdoc AuthCredential.toJSON} */
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
   *
   * @param json - Either `object` or the stringified representation of the object. When string is
   * provided, `JSON.parse` would be called first.
   *
   * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
   */
  static fromJSON(e) {
    const t = typeof e == "string" ? JSON.parse(e) : e;
    if (t != null && t.email && (t != null && t.password)) {
      if (t.signInMethod === "password")
        return this._fromEmailAndPassword(t.email, t.password);
      if (t.signInMethod === "emailLink")
        return this._fromEmailAndCode(t.email, t.password, t.tenantId);
    }
    return null;
  }
  /** @internal */
  async _getIdTokenResponse(e) {
    switch (this.signInMethod) {
      case "password":
        const t = {
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        return Aa(e, t, "signInWithPassword", YE);
      case "emailLink":
        return XE(e, {
          email: this._email,
          oobCode: this._password
        });
      default:
        st(
          e,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  /** @internal */
  async _linkToIdToken(e, t) {
    switch (this.signInMethod) {
      case "password":
        const r = {
          idToken: t,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        return Aa(e, r, "signUpPassword", QE);
      case "emailLink":
        return JE(e, {
          idToken: t,
          email: this._email,
          oobCode: this._password
        });
      default:
        st(
          e,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return this._getIdTokenResponse(e);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function rr(n, e) {
  return Ei(n, "POST", "/v1/accounts:signInWithIdp", fn(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const ZE = "http://localhost";
class Dn extends ic {
  constructor() {
    super(...arguments), this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(e) {
    const t = new Dn(e.providerId, e.signInMethod);
    return e.idToken || e.accessToken ? (e.idToken && (t.idToken = e.idToken), e.accessToken && (t.accessToken = e.accessToken), e.nonce && !e.pendingToken && (t.nonce = e.nonce), e.pendingToken && (t.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (t.accessToken = e.oauthToken, t.secret = e.oauthTokenSecret) : st(
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), t;
  }
  /** {@inheritdoc AuthCredential.toJSON}  */
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an
   * {@link  AuthCredential}.
   *
   * @param json - Input can be either Object or the stringified representation of the object.
   * When string is provided, JSON.parse would be called first.
   *
   * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
   */
  static fromJSON(e) {
    const t = typeof e == "string" ? JSON.parse(e) : e, { providerId: r, signInMethod: i } = t, s = Xa(t, ["providerId", "signInMethod"]);
    if (!r || !i)
      return null;
    const a = new Dn(r, i);
    return a.idToken = s.idToken || void 0, a.accessToken = s.accessToken || void 0, a.secret = s.secret, a.nonce = s.nonce, a.pendingToken = s.pendingToken || null, a;
  }
  /** @internal */
  _getIdTokenResponse(e) {
    const t = this.buildRequest();
    return rr(e, t);
  }
  /** @internal */
  _linkToIdToken(e, t) {
    const r = this.buildRequest();
    return r.idToken = t, rr(e, r);
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    const t = this.buildRequest();
    return t.autoCreate = !1, rr(e, t);
  }
  buildRequest() {
    const e = {
      requestUri: ZE,
      returnSecureToken: !0
    };
    if (this.pendingToken)
      e.pendingToken = this.pendingToken;
    else {
      const t = {};
      this.idToken && (t.id_token = this.idToken), this.accessToken && (t.access_token = this.accessToken), this.secret && (t.oauth_token_secret = this.secret), t.providerId = this.providerId, this.nonce && !this.pendingToken && (t.nonce = this.nonce), e.postBody = yr(t);
    }
    return e;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function eT(n) {
  switch (n) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function tT(n) {
  const e = Wr(Kr(n)).link, t = e ? Wr(Kr(e)).deep_link_id : null, r = Wr(Kr(n)).deep_link_id;
  return (r ? Wr(Kr(r)).link : null) || r || t || e || n;
}
class sc {
  /**
   * @param actionLink - The link from which to extract the URL.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @internal
   */
  constructor(e) {
    var t, r, i, s, a, c;
    const u = Wr(Kr(e)), h = (t = u.apiKey) !== null && t !== void 0 ? t : null, f = (r = u.oobCode) !== null && r !== void 0 ? r : null, m = eT((i = u.mode) !== null && i !== void 0 ? i : null);
    B(
      h && f && m,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), this.apiKey = h, this.operation = m, this.code = f, this.continueUrl = (s = u.continueUrl) !== null && s !== void 0 ? s : null, this.languageCode = (a = u.languageCode) !== null && a !== void 0 ? a : null, this.tenantId = (c = u.tenantId) !== null && c !== void 0 ? c : null;
  }
  /**
   * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
   * otherwise returns null.
   *
   * @param link  - The email action link string.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @public
   */
  static parseLink(e) {
    const t = tT(e);
    try {
      return new sc(t);
    } catch {
      return null;
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class _r {
  constructor() {
    this.providerId = _r.PROVIDER_ID;
  }
  /**
   * Initialize an {@link AuthCredential} using an email and password.
   *
   * @example
   * ```javascript
   * const authCredential = EmailAuthProvider.credential(email, password);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * ```javascript
   * const userCredential = await signInWithEmailAndPassword(auth, email, password);
   * ```
   *
   * @param email - Email address.
   * @param password - User account password.
   * @returns The auth provider credential.
   */
  static credential(e, t) {
    return hi._fromEmailAndPassword(e, t);
  }
  /**
   * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
   * email link operation.
   *
   * @example
   * ```javascript
   * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * ```javascript
   * await sendSignInLinkToEmail(auth, email);
   * // Obtain emailLink from user.
   * const userCredential = await signInWithEmailLink(auth, email, emailLink);
   * ```
   *
   * @param auth - The {@link Auth} instance used to verify the link.
   * @param email - Email address.
   * @param emailLink - Sign-in email link.
   * @returns - The auth provider credential.
   */
  static credentialWithLink(e, t) {
    const r = sc.parseLink(t);
    return B(
      r,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), hi._fromEmailAndCode(e, r.code, r.tenantId);
  }
}
_r.PROVIDER_ID = "password";
_r.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
_r.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
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
class oc {
  /**
   * Constructor for generic OAuth providers.
   *
   * @param providerId - Provider for which credentials should be generated.
   */
  constructor(e) {
    this.providerId = e, this.defaultLanguageCode = null, this.customParameters = {};
  }
  /**
   * Set the language gode.
   *
   * @param languageCode - language code
   */
  setDefaultLanguage(e) {
    this.defaultLanguageCode = e;
  }
  /**
   * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
   * operations.
   *
   * @remarks
   * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
   * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
   *
   * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
   */
  setCustomParameters(e) {
    return this.customParameters = e, this;
  }
  /**
   * Retrieve the current list of {@link CustomParameters}.
   */
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class Ii extends oc {
  constructor() {
    super(...arguments), this.scopes = [];
  }
  /**
   * Add an OAuth scope to the credential.
   *
   * @param scope - Provider OAuth scope to add.
   */
  addScope(e) {
    return this.scopes.includes(e) || this.scopes.push(e), this;
  }
  /**
   * Retrieve the current list of OAuth scopes.
   */
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Xt extends Ii {
  constructor() {
    super(
      "facebook.com"
      /* ProviderId.FACEBOOK */
    );
  }
  /**
   * Creates a credential for Facebook.
   *
   * @example
   * ```javascript
   * // `event` from the Facebook auth.authResponseChange callback.
   * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param accessToken - Facebook access token.
   */
  static credential(e) {
    return Dn._fromParams({
      providerId: Xt.PROVIDER_ID,
      signInMethod: Xt.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Xt.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Xt.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return Xt.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Xt.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Xt.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
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
class Jt extends Ii {
  constructor() {
    super(
      "google.com"
      /* ProviderId.GOOGLE */
    ), this.addScope("profile");
  }
  /**
   * Creates a credential for Google. At least one of ID token and access token is required.
   *
   * @example
   * ```javascript
   * // \`googleUser\` from the onsuccess Google Sign In callback.
   * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param idToken - Google ID token.
   * @param accessToken - Google access token.
   */
  static credential(e, t) {
    return Dn._fromParams({
      providerId: Jt.PROVIDER_ID,
      signInMethod: Jt.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: t
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Jt.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Jt.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthIdToken: t, oauthAccessToken: r } = e;
    if (!t && !r)
      return null;
    try {
      return Jt.credential(t, r);
    } catch {
      return null;
    }
  }
}
Jt.GOOGLE_SIGN_IN_METHOD = "google.com";
Jt.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
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
class Zt extends Ii {
  constructor() {
    super(
      "github.com"
      /* ProviderId.GITHUB */
    );
  }
  /**
   * Creates a credential for GitHub.
   *
   * @param accessToken - GitHub access token.
   */
  static credential(e) {
    return Dn._fromParams({
      providerId: Zt.PROVIDER_ID,
      signInMethod: Zt.GITHUB_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return Zt.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return Zt.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return Zt.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Zt.GITHUB_SIGN_IN_METHOD = "github.com";
Zt.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
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
class en extends Ii {
  constructor() {
    super(
      "twitter.com"
      /* ProviderId.TWITTER */
    );
  }
  /**
   * Creates a credential for Twitter.
   *
   * @param token - Twitter access token.
   * @param secret - Twitter secret.
   */
  static credential(e, t) {
    return Dn._fromParams({
      providerId: en.PROVIDER_ID,
      signInMethod: en.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: t
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return en.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return en.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthAccessToken: t, oauthTokenSecret: r } = e;
    if (!t || !r)
      return null;
    try {
      return en.credential(t, r);
    } catch {
      return null;
    }
  }
}
en.TWITTER_SIGN_IN_METHOD = "twitter.com";
en.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
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
async function nT(n, e) {
  return Ei(n, "POST", "/v1/accounts:signUp", fn(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class xn {
  constructor(e) {
    this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType;
  }
  static async _fromIdTokenResponse(e, t, r, i = !1) {
    const s = await Ot._fromIdTokenResponse(e, r, i), a = nh(r);
    return new xn({
      user: s,
      providerId: a,
      _tokenResponse: r,
      operationType: t
    });
  }
  static async _forOperation(e, t, r) {
    await e._updateTokensIfNecessary(
      r,
      /* reload */
      !0
    );
    const i = nh(r);
    return new xn({
      user: e,
      providerId: i,
      _tokenResponse: r,
      operationType: t
    });
  }
}
function nh(n) {
  return n.providerId ? n.providerId : "phoneNumber" in n ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Ss extends at {
  constructor(e, t, r, i) {
    var s;
    super(t.code, t.message), this.operationType = r, this.user = i, Object.setPrototypeOf(this, Ss.prototype), this.customData = {
      appName: e.name,
      tenantId: (s = e.tenantId) !== null && s !== void 0 ? s : void 0,
      _serverResponse: t.customData._serverResponse,
      operationType: r
    };
  }
  static _fromErrorAndOperation(e, t, r, i) {
    return new Ss(e, t, r, i);
  }
}
function Rf(n, e, t, r) {
  return (e === "reauthenticate" ? t._getReauthenticationResolver(n) : t._getIdTokenResponse(n)).catch((s) => {
    throw s.code === "auth/multi-factor-auth-required" ? Ss._fromErrorAndOperation(n, s, e, r) : s;
  });
}
async function rT(n, e, t = !1) {
  const r = await cr(n, e._linkToIdToken(n.auth, await n.getIdToken()), t);
  return xn._forOperation(n, "link", r);
}
/**
 * @license
 * Copyright 2019 Google LLC
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
async function iT(n, e, t = !1) {
  const { auth: r } = n;
  if (ht(r.app))
    return Promise.reject(Dt(r));
  const i = "reauthenticate";
  try {
    const s = await cr(n, Rf(r, i, e, n), t);
    B(
      s.idToken,
      r,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const a = tc(s.idToken);
    B(
      a,
      r,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const { sub: c } = a;
    return B(
      n.uid === c,
      r,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), xn._forOperation(n, i, s);
  } catch (s) {
    throw (s == null ? void 0 : s.code) === "auth/user-not-found" && st(
      r,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), s;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function Cf(n, e, t = !1) {
  if (ht(n.app))
    return Promise.reject(Dt(n));
  const r = "signIn", i = await Rf(n, r, e), s = await xn._fromIdTokenResponse(n, r, i);
  return t || await n._updateCurrentUser(s.user), s;
}
async function sT(n, e) {
  return Cf($t(n), e);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function Pf(n) {
  const e = $t(n);
  e._getPasswordPolicyInternal() && await e._updatePasswordPolicy();
}
async function xP(n, e, t) {
  if (ht(n.app))
    return Promise.reject(Dt(n));
  const r = $t(n), a = await Aa(r, {
    returnSecureToken: !0,
    email: e,
    password: t,
    clientType: "CLIENT_TYPE_WEB"
    /* RecaptchaClientType.WEB */
  }, "signUpPassword", nT).catch((u) => {
    throw u.code === "auth/password-does-not-meet-requirements" && Pf(n), u;
  }), c = await xn._fromIdTokenResponse(r, "signIn", a);
  return await r._updateCurrentUser(c.user), c;
}
function VP(n, e, t) {
  return ht(n.app) ? Promise.reject(Dt(n)) : sT(de(n), _r.credential(e, t)).catch(async (r) => {
    throw r.code === "auth/password-does-not-meet-requirements" && Pf(n), r;
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function oT(n, e) {
  return It(n, "POST", "/v1/accounts:update", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function aT(n, { displayName: e, photoURL: t }) {
  if (e === void 0 && t === void 0)
    return;
  const r = de(n), s = {
    idToken: await r.getIdToken(),
    displayName: e,
    photoUrl: t,
    returnSecureToken: !0
  }, a = await cr(r, oT(r.auth, s));
  r.displayName = a.displayName || null, r.photoURL = a.photoUrl || null;
  const c = r.providerData.find(
    ({ providerId: u }) => u === "password"
    /* ProviderId.PASSWORD */
  );
  c && (c.displayName = r.displayName, c.photoURL = r.photoURL), await r._updateTokensIfNecessary(a);
}
function kf(n, e, t, r) {
  return de(n).onIdTokenChanged(e, t, r);
}
function cT(n, e, t) {
  return de(n).beforeAuthStateChanged(e, t);
}
function uT(n, e, t, r) {
  return de(n).onAuthStateChanged(e, t, r);
}
function MP(n) {
  return de(n).signOut();
}
const Rs = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
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
class Of {
  constructor(e, t) {
    this.storageRetriever = e, this.type = t;
  }
  _isAvailable() {
    try {
      return this.storage ? (this.storage.setItem(Rs, "1"), this.storage.removeItem(Rs), Promise.resolve(!0)) : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(e, t) {
    return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve();
  }
  _get(e) {
    const t = this.storage.getItem(e);
    return Promise.resolve(t ? JSON.parse(t) : null);
  }
  _remove(e) {
    return this.storage.removeItem(e), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function lT() {
  const n = Oe();
  return nc(n) || Js(n);
}
const hT = 1e3, dT = 10;
class Nf extends Of {
  constructor() {
    super(
      () => window.localStorage,
      "LOCAL"
      /* PersistenceType.LOCAL */
    ), this.boundEventHandler = (e, t) => this.onStorageEvent(e, t), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = lT() && OE(), this.fallbackToPolling = If(), this._shouldAllowMigration = !0;
  }
  forAllChangedKeys(e) {
    for (const t of Object.keys(this.listeners)) {
      const r = this.storage.getItem(t), i = this.localCache[t];
      r !== i && e(t, i, r);
    }
  }
  onStorageEvent(e, t = !1) {
    if (!e.key) {
      this.forAllChangedKeys((a, c, u) => {
        this.notifyListeners(a, u);
      });
      return;
    }
    const r = e.key;
    if (t ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
      const a = this.storage.getItem(r);
      if (e.newValue !== a)
        e.newValue !== null ? this.storage.setItem(r, e.newValue) : this.storage.removeItem(r);
      else if (this.localCache[r] === e.newValue && !t)
        return;
    }
    const i = () => {
      const a = this.storage.getItem(r);
      !t && this.localCache[r] === a || this.notifyListeners(r, a);
    }, s = this.storage.getItem(r);
    kE() && s !== e.newValue && e.newValue !== e.oldValue ? setTimeout(i, dT) : i();
  }
  notifyListeners(e, t) {
    this.localCache[e] = t;
    const r = this.listeners[e];
    if (r)
      for (const i of Array.from(r))
        i(t && JSON.parse(t));
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(() => {
      this.forAllChangedKeys((e, t, r) => {
        this.onStorageEvent(
          new StorageEvent("storage", {
            key: e,
            oldValue: t,
            newValue: r
          }),
          /* poll */
          !0
        );
      });
    }, hT);
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(e, t) {
    Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set(), this.localCache[e] = this.storage.getItem(e)), this.listeners[e].add(t);
  }
  _removeListener(e, t) {
    this.listeners[e] && (this.listeners[e].delete(t), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && (this.detachListener(), this.stopPolling());
  }
  // Update local cache on base operations:
  async _set(e, t) {
    await super._set(e, t), this.localCache[e] = JSON.stringify(t);
  }
  async _get(e) {
    const t = await super._get(e);
    return this.localCache[e] = JSON.stringify(t), t;
  }
  async _remove(e) {
    await super._remove(e), delete this.localCache[e];
  }
}
Nf.type = "LOCAL";
const fT = Nf;
/**
 * @license
 * Copyright 2020 Google LLC
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
class Df extends Of {
  constructor() {
    super(
      () => window.sessionStorage,
      "SESSION"
      /* PersistenceType.SESSION */
    );
  }
  _addListener(e, t) {
  }
  _removeListener(e, t) {
  }
}
Df.type = "SESSION";
const xf = Df;
/**
 * @license
 * Copyright 2019 Google LLC
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
function pT(n) {
  return Promise.all(n.map(async (e) => {
    try {
      return {
        fulfilled: !0,
        value: await e
      };
    } catch (t) {
      return {
        fulfilled: !1,
        reason: t
      };
    }
  }));
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class Zs {
  constructor(e) {
    this.eventTarget = e, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this);
  }
  /**
   * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
   *
   * @param eventTarget - An event target (such as window or self) through which the underlying
   * messages will be received.
   */
  static _getInstance(e) {
    const t = this.receivers.find((i) => i.isListeningto(e));
    if (t)
      return t;
    const r = new Zs(e);
    return this.receivers.push(r), r;
  }
  isListeningto(e) {
    return this.eventTarget === e;
  }
  /**
   * Fans out a MessageEvent to the appropriate listeners.
   *
   * @remarks
   * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
   * finished processing.
   *
   * @param event - The MessageEvent.
   *
   */
  async handleEvent(e) {
    const t = e, { eventId: r, eventType: i, data: s } = t.data, a = this.handlersMap[i];
    if (!(a != null && a.size))
      return;
    t.ports[0].postMessage({
      status: "ack",
      eventId: r,
      eventType: i
    });
    const c = Array.from(a).map(async (h) => h(t.origin, s)), u = await pT(c);
    t.ports[0].postMessage({
      status: "done",
      eventId: r,
      eventType: i,
      response: u
    });
  }
  /**
   * Subscribe an event handler for a particular event.
   *
   * @param eventType - Event name to subscribe to.
   * @param eventHandler - The event handler which should receive the events.
   *
   */
  _subscribe(e, t) {
    Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[e] || (this.handlersMap[e] = /* @__PURE__ */ new Set()), this.handlersMap[e].add(t);
  }
  /**
   * Unsubscribe an event handler from a particular event.
   *
   * @param eventType - Event name to unsubscribe from.
   * @param eventHandler - Optional event handler, if none provided, unsubscribe all handlers on this event.
   *
   */
  _unsubscribe(e, t) {
    this.handlersMap[e] && t && this.handlersMap[e].delete(t), (!t || this.handlersMap[e].size === 0) && delete this.handlersMap[e], Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
Zs.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
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
function ac(n = "", e = 10) {
  let t = "";
  for (let r = 0; r < e; r++)
    t += Math.floor(Math.random() * 10);
  return n + t;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class mT {
  constructor(e) {
    this.target = e, this.handlers = /* @__PURE__ */ new Set();
  }
  /**
   * Unsubscribe the handler and remove it from our tracking Set.
   *
   * @param handler - The handler to unsubscribe.
   */
  removeMessageHandler(e) {
    e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1.close()), this.handlers.delete(e);
  }
  /**
   * Send a message to the Receiver located at {@link target}.
   *
   * @remarks
   * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
   * receiver has had a chance to fully process the event.
   *
   * @param eventType - Type of event to send.
   * @param data - The payload of the event.
   * @param timeout - Timeout for waiting on an ACK from the receiver.
   *
   * @returns An array of settled promises from all the handlers that were listening on the receiver.
   */
  async _send(e, t, r = 50) {
    const i = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!i)
      throw new Error(
        "connection_unavailable"
        /* _MessageError.CONNECTION_UNAVAILABLE */
      );
    let s, a;
    return new Promise((c, u) => {
      const h = ac("", 20);
      i.port1.start();
      const f = setTimeout(() => {
        u(new Error(
          "unsupported_event"
          /* _MessageError.UNSUPPORTED_EVENT */
        ));
      }, r);
      a = {
        messageChannel: i,
        onMessage(m) {
          const _ = m;
          if (_.data.eventId === h)
            switch (_.data.status) {
              case "ack":
                clearTimeout(f), s = setTimeout(
                  () => {
                    u(new Error(
                      "timeout"
                      /* _MessageError.TIMEOUT */
                    ));
                  },
                  3e3
                  /* _TimeoutDuration.COMPLETION */
                );
                break;
              case "done":
                clearTimeout(s), c(_.data.response);
                break;
              default:
                clearTimeout(f), clearTimeout(s), u(new Error(
                  "invalid_response"
                  /* _MessageError.INVALID_RESPONSE */
                ));
                break;
            }
        }
      }, this.handlers.add(a), i.port1.addEventListener("message", a.onMessage), this.target.postMessage({
        eventType: e,
        eventId: h,
        data: t
      }, [i.port2]);
    }).finally(() => {
      a && this.removeMessageHandler(a);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function _e() {
  return window;
}
function gT(n) {
  _e().location.href = n;
}
/**
 * @license
 * Copyright 2020 Google LLC.
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
function cc() {
  return typeof _e().WorkerGlobalScope < "u" && typeof _e().importScripts == "function";
}
async function yT() {
  if (!(navigator != null && navigator.serviceWorker))
    return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function _T() {
  var n;
  return ((n = navigator == null ? void 0 : navigator.serviceWorker) === null || n === void 0 ? void 0 : n.controller) || null;
}
function vT() {
  return cc() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
const Vf = "firebaseLocalStorageDb", wT = 1, Cs = "firebaseLocalStorage", Mf = "fbase_key";
class bi {
  constructor(e) {
    this.request = e;
  }
  toPromise() {
    return new Promise((e, t) => {
      this.request.addEventListener("success", () => {
        e(this.request.result);
      }), this.request.addEventListener("error", () => {
        t(this.request.error);
      });
    });
  }
}
function eo(n, e) {
  return n.transaction([Cs], e ? "readwrite" : "readonly").objectStore(Cs);
}
function ET() {
  const n = indexedDB.deleteDatabase(Vf);
  return new bi(n).toPromise();
}
function Sa() {
  const n = indexedDB.open(Vf, wT);
  return new Promise((e, t) => {
    n.addEventListener("error", () => {
      t(n.error);
    }), n.addEventListener("upgradeneeded", () => {
      const r = n.result;
      try {
        r.createObjectStore(Cs, { keyPath: Mf });
      } catch (i) {
        t(i);
      }
    }), n.addEventListener("success", async () => {
      const r = n.result;
      r.objectStoreNames.contains(Cs) ? e(r) : (r.close(), await ET(), e(await Sa()));
    });
  });
}
async function rh(n, e, t) {
  const r = eo(n, !0).put({
    [Mf]: e,
    value: t
  });
  return new bi(r).toPromise();
}
async function TT(n, e) {
  const t = eo(n, !1).get(e), r = await new bi(t).toPromise();
  return r === void 0 ? null : r.value;
}
function ih(n, e) {
  const t = eo(n, !0).delete(e);
  return new bi(t).toPromise();
}
const IT = 800, bT = 3;
class Lf {
  constructor() {
    this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
    }, () => {
    });
  }
  async _openDb() {
    return this.db ? this.db : (this.db = await Sa(), this.db);
  }
  async _withRetries(e) {
    let t = 0;
    for (; ; )
      try {
        const r = await this._openDb();
        return await e(r);
      } catch (r) {
        if (t++ > bT)
          throw r;
        this.db && (this.db.close(), this.db = void 0);
      }
  }
  /**
   * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
   * postMessage interface to send these events to the worker ourselves.
   */
  async initializeServiceWorkerMessaging() {
    return cc() ? this.initializeReceiver() : this.initializeSender();
  }
  /**
   * As the worker we should listen to events from the main window.
   */
  async initializeReceiver() {
    this.receiver = Zs._getInstance(vT()), this.receiver._subscribe("keyChanged", async (e, t) => ({
      keyProcessed: (await this._poll()).includes(t.key)
    })), this.receiver._subscribe("ping", async (e, t) => [
      "keyChanged"
      /* _EventType.KEY_CHANGED */
    ]);
  }
  /**
   * As the main window, we should let the worker know when keys change (set and remove).
   *
   * @remarks
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
   * may not resolve.
   */
  async initializeSender() {
    var e, t;
    if (this.activeServiceWorker = await yT(), !this.activeServiceWorker)
      return;
    this.sender = new mT(this.activeServiceWorker);
    const r = await this.sender._send(
      "ping",
      {},
      800
      /* _TimeoutDuration.LONG_ACK */
    );
    r && !((e = r[0]) === null || e === void 0) && e.fulfilled && !((t = r[0]) === null || t === void 0) && t.value.includes(
      "keyChanged"
      /* _EventType.KEY_CHANGED */
    ) && (this.serviceWorkerReceiverAvailable = !0);
  }
  /**
   * Let the worker know about a changed key, the exact key doesn't technically matter since the
   * worker will just trigger a full sync anyway.
   *
   * @remarks
   * For now, we only support one service worker per page.
   *
   * @param key - Storage key which changed.
   */
  async notifyServiceWorker(e) {
    if (!(!this.sender || !this.activeServiceWorker || _T() !== this.activeServiceWorker))
      try {
        await this.sender._send(
          "keyChanged",
          { key: e },
          // Use long timeout if receiver has previously responded to a ping from us.
          this.serviceWorkerReceiverAvailable ? 800 : 50
          /* _TimeoutDuration.ACK */
        );
      } catch {
      }
  }
  async _isAvailable() {
    try {
      if (!indexedDB)
        return !1;
      const e = await Sa();
      return await rh(e, Rs, "1"), await ih(e, Rs), !0;
    } catch {
    }
    return !1;
  }
  async _withPendingWrite(e) {
    this.pendingWrites++;
    try {
      await e();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(e, t) {
    return this._withPendingWrite(async () => (await this._withRetries((r) => rh(r, e, t)), this.localCache[e] = t, this.notifyServiceWorker(e)));
  }
  async _get(e) {
    const t = await this._withRetries((r) => TT(r, e));
    return this.localCache[e] = t, t;
  }
  async _remove(e) {
    return this._withPendingWrite(async () => (await this._withRetries((t) => ih(t, e)), delete this.localCache[e], this.notifyServiceWorker(e)));
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const s = eo(i, !1).getAll();
      return new bi(s).toPromise();
    });
    if (!e)
      return [];
    if (this.pendingWrites !== 0)
      return [];
    const t = [], r = /* @__PURE__ */ new Set();
    if (e.length !== 0)
      for (const { fbase_key: i, value: s } of e)
        r.add(i), JSON.stringify(this.localCache[i]) !== JSON.stringify(s) && (this.notifyListeners(i, s), t.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] && !r.has(i) && (this.notifyListeners(i, null), t.push(i));
    return t;
  }
  notifyListeners(e, t) {
    this.localCache[e] = t;
    const r = this.listeners[e];
    if (r)
      for (const i of Array.from(r))
        i(t);
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), IT);
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
  }
  _addListener(e, t) {
    Object.keys(this.listeners).length === 0 && this.startPolling(), this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set(), this._get(e)), this.listeners[e].add(t);
  }
  _removeListener(e, t) {
    this.listeners[e] && (this.listeners[e].delete(t), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
Lf.type = "LOCAL";
const AT = Lf;
/**
 * @license
 * Copyright 2020 Google LLC
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
const ST = 500, RT = 6e4, es = 1e12;
class CT {
  constructor(e) {
    this.auth = e, this.counter = es, this._widgets = /* @__PURE__ */ new Map();
  }
  render(e, t) {
    const r = this.counter;
    return this._widgets.set(r, new PT(e, this.auth.name, t || {})), this.counter++, r;
  }
  reset(e) {
    var t;
    const r = e || es;
    (t = this._widgets.get(r)) === null || t === void 0 || t.delete(), this._widgets.delete(r);
  }
  getResponse(e) {
    var t;
    const r = e || es;
    return ((t = this._widgets.get(r)) === null || t === void 0 ? void 0 : t.getResponse()) || "";
  }
  async execute(e) {
    var t;
    const r = e || es;
    return (t = this._widgets.get(r)) === null || t === void 0 || t.execute(), "";
  }
}
class PT {
  constructor(e, t, r) {
    this.params = r, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
      this.execute();
    };
    const i = typeof e == "string" ? document.getElementById(e) : e;
    B(i, "argument-error", { appName: t }), this.container = i, this.isVisible = this.params.size !== "invisible", this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler);
  }
  getResponse() {
    return this.checkIfDeleted(), this.responseToken;
  }
  delete() {
    this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler);
  }
  execute() {
    this.checkIfDeleted(), !this.timerId && (this.timerId = window.setTimeout(() => {
      this.responseToken = kT(50);
      const { callback: e, "expired-callback": t } = this.params;
      if (e)
        try {
          e(this.responseToken);
        } catch {
        }
      this.timerId = window.setTimeout(() => {
        if (this.timerId = null, this.responseToken = null, t)
          try {
            t();
          } catch {
          }
        this.isVisible && this.execute();
      }, RT);
    }, ST));
  }
  checkIfDeleted() {
    if (this.deleted)
      throw new Error("reCAPTCHA mock was already deleted!");
  }
}
function kT(n) {
  const e = [], t = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let r = 0; r < n; r++)
    e.push(t.charAt(Math.floor(Math.random() * t.length)));
  return e.join("");
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const Qo = Af("rcb"), OT = new wi(3e4, 6e4);
class NT {
  constructor() {
    var e;
    this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(!((e = _e().grecaptcha) === null || e === void 0) && e.render);
  }
  load(e, t = "") {
    return B(
      DT(t),
      e,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), this.shouldResolveImmediately(t) && Kl(_e().grecaptcha) ? Promise.resolve(_e().grecaptcha) : new Promise((r, i) => {
      const s = _e().setTimeout(() => {
        i(We(
          e,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, OT.get());
      _e()[Qo] = () => {
        _e().clearTimeout(s), delete _e()[Qo];
        const c = _e().grecaptcha;
        if (!c || !Kl(c)) {
          i(We(
            e,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          ));
          return;
        }
        const u = c.render;
        c.render = (h, f) => {
          const m = u(h, f);
          return this.counter++, m;
        }, this.hostLanguage = t, r(c);
      };
      const a = `${FE()}?${yr({
        onload: Qo,
        render: "explicit",
        hl: t
      })}`;
      rc(a).catch(() => {
        clearTimeout(s), i(We(
          e,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        ));
      });
    });
  }
  clearedOneInstance() {
    this.counter--;
  }
  shouldResolveImmediately(e) {
    var t;
    return !!(!((t = _e().grecaptcha) === null || t === void 0) && t.render) && (e === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded);
  }
}
function DT(n) {
  return n.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(n);
}
class xT {
  async load(e) {
    return new CT(e);
  }
  clearedOneInstance() {
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const VT = "recaptcha", MT = {
  theme: "light",
  type: "image"
};
class LT {
  /**
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   *
   * @param containerOrId - The reCAPTCHA container parameter.
   *
   * @remarks
   * This has different meaning depending on whether the reCAPTCHA is hidden or visible. For a
   * visible reCAPTCHA the container must be empty. If a string is used, it has to correspond to
   * an element ID. The corresponding element must also must be in the DOM at the time of
   * initialization.
   *
   * @param parameters - The optional reCAPTCHA parameters.
   *
   * @remarks
   * Check the reCAPTCHA docs for a comprehensive list. All parameters are accepted except for
   * the sitekey. Firebase Auth backend provisions a reCAPTCHA for each project and will
   * configure this upon rendering. For an invisible reCAPTCHA, a size key must have the value
   * 'invisible'.
   */
  constructor(e, t, r = Object.assign({}, MT)) {
    this.parameters = r, this.type = VT, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = /* @__PURE__ */ new Set(), this.renderPromise = null, this.recaptcha = null, this.auth = $t(e), this.isInvisible = this.parameters.size === "invisible", B(
      typeof document < "u",
      this.auth,
      "operation-not-supported-in-this-environment"
      /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
    );
    const i = typeof t == "string" ? document.getElementById(t) : t;
    B(
      i,
      this.auth,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), this.container = i, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new xT() : new NT(), this.validateStartingState();
  }
  /**
   * Waits for the user to solve the reCAPTCHA and resolves with the reCAPTCHA token.
   *
   * @returns A Promise for the reCAPTCHA token.
   */
  async verify() {
    this.assertNotDestroyed();
    const e = await this.render(), t = this.getAssertedRecaptcha(), r = t.getResponse(e);
    return r || new Promise((i) => {
      const s = (a) => {
        a && (this.tokenChangeListeners.delete(s), i(a));
      };
      this.tokenChangeListeners.add(s), this.isInvisible && t.execute(e);
    });
  }
  /**
   * Renders the reCAPTCHA widget on the page.
   *
   * @returns A Promise that resolves with the reCAPTCHA widget ID.
   */
  render() {
    try {
      this.assertNotDestroyed();
    } catch (e) {
      return Promise.reject(e);
    }
    return this.renderPromise ? this.renderPromise : (this.renderPromise = this.makeRenderPromise().catch((e) => {
      throw this.renderPromise = null, e;
    }), this.renderPromise);
  }
  /** @internal */
  _reset() {
    this.assertNotDestroyed(), this.widgetId !== null && this.getAssertedRecaptcha().reset(this.widgetId);
  }
  /**
   * Clears the reCAPTCHA widget from the page and destroys the instance.
   */
  clear() {
    this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((e) => {
      this.container.removeChild(e);
    });
  }
  validateStartingState() {
    B(
      !this.parameters.sitekey,
      this.auth,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), B(
      this.isInvisible || !this.container.hasChildNodes(),
      this.auth,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), B(
      typeof document < "u",
      this.auth,
      "operation-not-supported-in-this-environment"
      /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
    );
  }
  makeTokenCallback(e) {
    return (t) => {
      if (this.tokenChangeListeners.forEach((r) => r(t)), typeof e == "function")
        e(t);
      else if (typeof e == "string") {
        const r = _e()[e];
        typeof r == "function" && r(t);
      }
    };
  }
  assertNotDestroyed() {
    B(
      !this.destroyed,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
  }
  async makeRenderPromise() {
    if (await this.init(), !this.widgetId) {
      let e = this.container;
      if (!this.isInvisible) {
        const t = document.createElement("div");
        e.appendChild(t), e = t;
      }
      this.widgetId = this.getAssertedRecaptcha().render(e, this.parameters);
    }
    return this.widgetId;
  }
  async init() {
    B(
      lf() && !cc(),
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), await FT(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
    const e = await vE(this.auth);
    B(
      e,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.parameters.sitekey = e;
  }
  getAssertedRecaptcha() {
    return B(
      this.recaptcha,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.recaptcha;
  }
}
function FT() {
  let n = null;
  return new Promise((e) => {
    if (document.readyState === "complete") {
      e();
      return;
    }
    n = () => e(), window.addEventListener("load", n);
  }).catch((e) => {
    throw n && window.removeEventListener("load", n), e;
  });
}
/**
 * @license
 * Copyright 2021 Google LLC
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
function Ff(n, e) {
  return e ? Nt(e) : (B(
    n._popupRedirectResolver,
    n,
    "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
  ), n._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class uc extends ic {
  constructor(e) {
    super(
      "custom",
      "custom"
      /* ProviderId.CUSTOM */
    ), this.params = e;
  }
  _getIdTokenResponse(e) {
    return rr(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, t) {
    return rr(e, this._buildIdpRequest(t));
  }
  _getReauthenticationResolver(e) {
    return rr(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    const t = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0
    };
    return e && (t.idToken = e), t;
  }
}
function UT(n) {
  return Cf(n.auth, new uc(n), n.bypassAuthState);
}
function $T(n) {
  const { auth: e, user: t } = n;
  return B(
    t,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), iT(t, new uc(n), n.bypassAuthState);
}
async function jT(n) {
  const { auth: e, user: t } = n;
  return B(
    t,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), rT(t, new uc(n), n.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Uf {
  constructor(e, t, r, i, s = !1) {
    this.auth = e, this.resolver = r, this.user = i, this.bypassAuthState = s, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(t) ? t : [t];
  }
  execute() {
    return new Promise(async (e, t) => {
      this.pendingPromise = { resolve: e, reject: t };
      try {
        this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(e) {
    const { urlResponse: t, sessionId: r, postBody: i, tenantId: s, error: a, type: c } = e;
    if (a) {
      this.reject(a);
      return;
    }
    const u = {
      auth: this.auth,
      requestUri: t,
      sessionId: r,
      tenantId: s || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState
    };
    try {
      this.resolve(await this.getIdpTask(c)(u));
    } catch (h) {
      this.reject(h);
    }
  }
  onError(e) {
    this.reject(e);
  }
  getIdpTask(e) {
    switch (e) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return UT;
      case "linkViaPopup":
      case "linkViaRedirect":
        return jT;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return $T;
      default:
        st(
          this.auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  resolve(e) {
    Lt(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp();
  }
  reject(e) {
    Lt(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const BT = new wi(2e3, 1e4);
async function LP(n, e, t) {
  if (ht(n.app))
    return Promise.reject(We(
      n,
      "operation-not-supported-in-this-environment"
      /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
    ));
  const r = $t(n);
  hE(n, e, oc);
  const i = Ff(r, t);
  return new In(r, "signInViaPopup", e, i).executeNotNull();
}
class In extends Uf {
  constructor(e, t, r, i, s) {
    super(e, t, i, s), this.provider = r, this.authWindow = null, this.pollId = null, In.currentPopupAction && In.currentPopupAction.cancel(), In.currentPopupAction = this;
  }
  async executeNotNull() {
    const e = await this.execute();
    return B(
      e,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), e;
  }
  async onExecution() {
    Lt(this.filter.length === 1, "Popup operations only handle one event");
    const e = ac();
    this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      // There's always one, see constructor
      e
    ), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch((t) => {
      this.reject(t);
    }), this.resolver._isIframeWebStorageSupported(this.auth, (t) => {
      t || this.reject(We(
        this.auth,
        "web-storage-unsupported"
        /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */
      ));
    }), this.pollUserCancellation();
  }
  get eventId() {
    var e;
    return ((e = this.authWindow) === null || e === void 0 ? void 0 : e.associatedEvent) || null;
  }
  cancel() {
    this.reject(We(
      this.auth,
      "cancelled-popup-request"
      /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
    ));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, In.currentPopupAction = null;
  }
  pollUserCancellation() {
    const e = () => {
      var t, r;
      if (!((r = (t = this.authWindow) === null || t === void 0 ? void 0 : t.window) === null || r === void 0) && r.closed) {
        this.pollId = window.setTimeout(
          () => {
            this.pollId = null, this.reject(We(
              this.auth,
              "popup-closed-by-user"
              /* AuthErrorCode.POPUP_CLOSED_BY_USER */
            ));
          },
          8e3
          /* _Timeout.AUTH_EVENT */
        );
        return;
      }
      this.pollId = window.setTimeout(e, BT.get());
    };
    e();
  }
}
In.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
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
const zT = "pendingRedirect", hs = /* @__PURE__ */ new Map();
class qT extends Uf {
  constructor(e, t, r = !1) {
    super(e, [
      "signInViaRedirect",
      "linkViaRedirect",
      "reauthViaRedirect",
      "unknown"
      /* AuthEventType.UNKNOWN */
    ], t, void 0, r), this.eventId = null;
  }
  /**
   * Override the execute function; if we already have a redirect result, then
   * just return it.
   */
  async execute() {
    let e = hs.get(this.auth._key());
    if (!e) {
      try {
        const r = await HT(this.resolver, this.auth) ? await super.execute() : null;
        e = () => Promise.resolve(r);
      } catch (t) {
        e = () => Promise.reject(t);
      }
      hs.set(this.auth._key(), e);
    }
    return this.bypassAuthState || hs.set(this.auth._key(), () => Promise.resolve(null)), e();
  }
  async onAuthEvent(e) {
    if (e.type === "signInViaRedirect")
      return super.onAuthEvent(e);
    if (e.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (e.eventId) {
      const t = await this.auth._redirectUserForId(e.eventId);
      if (t)
        return this.user = t, super.onAuthEvent(e);
      this.resolve(null);
    }
  }
  async onExecution() {
  }
  cleanUp() {
  }
}
async function HT(n, e) {
  const t = GT(e), r = KT(n);
  if (!await r._isAvailable())
    return !1;
  const i = await r._get(t) === "true";
  return await r._remove(t), i;
}
function WT(n, e) {
  hs.set(n._key(), e);
}
function KT(n) {
  return Nt(n._redirectPersistence);
}
function GT(n) {
  return ls(zT, n.config.apiKey, n.name);
}
async function QT(n, e, t = !1) {
  if (ht(n.app))
    return Promise.reject(Dt(n));
  const r = $t(n), i = Ff(r, e), a = await new qT(r, i, t).execute();
  return a && !t && (delete a.user._redirectEventId, await r._persistUserIfCurrent(a.user), await r._setRedirectUser(null, e)), a;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const YT = 10 * 60 * 1e3;
class XT {
  constructor(e) {
    this.auth = e, this.cachedEventUids = /* @__PURE__ */ new Set(), this.consumers = /* @__PURE__ */ new Set(), this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now();
  }
  registerConsumer(e) {
    this.consumers.add(e), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null);
  }
  unregisterConsumer(e) {
    this.consumers.delete(e);
  }
  onEvent(e) {
    if (this.hasEventBeenHandled(e))
      return !1;
    let t = !1;
    return this.consumers.forEach((r) => {
      this.isEventForConsumer(e, r) && (t = !0, this.sendToConsumer(e, r), this.saveEventToCache(e));
    }), this.hasHandledPotentialRedirect || !JT(e) || (this.hasHandledPotentialRedirect = !0, t || (this.queuedRedirectEvent = e, t = !0)), t;
  }
  sendToConsumer(e, t) {
    var r;
    if (e.error && !$f(e)) {
      const i = ((r = e.error.code) === null || r === void 0 ? void 0 : r.split("auth/")[1]) || "internal-error";
      t.onError(We(this.auth, i));
    } else
      t.onAuthEvent(e);
  }
  isEventForConsumer(e, t) {
    const r = t.eventId === null || !!e.eventId && e.eventId === t.eventId;
    return t.filter.includes(e.type) && r;
  }
  hasEventBeenHandled(e) {
    return Date.now() - this.lastProcessedEventTime >= YT && this.cachedEventUids.clear(), this.cachedEventUids.has(sh(e));
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(sh(e)), this.lastProcessedEventTime = Date.now();
  }
}
function sh(n) {
  return [n.type, n.eventId, n.sessionId, n.tenantId].filter((e) => e).join("-");
}
function $f({ type: n, error: e }) {
  return n === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event";
}
function JT(n) {
  switch (n.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return $f(n);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function ZT(n, e = {}) {
  return It(n, "GET", "/v1/projects", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const eI = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, tI = /^https?/;
async function nI(n) {
  if (n.config.emulator)
    return;
  const { authorizedDomains: e } = await ZT(n);
  for (const t of e)
    try {
      if (rI(t))
        return;
    } catch {
    }
  st(
    n,
    "unauthorized-domain"
    /* AuthErrorCode.INVALID_ORIGIN */
  );
}
function rI(n) {
  const e = Ia(), { protocol: t, hostname: r } = new URL(e);
  if (n.startsWith("chrome-extension://")) {
    const a = new URL(n);
    return a.hostname === "" && r === "" ? t === "chrome-extension:" && n.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : t === "chrome-extension:" && a.hostname === r;
  }
  if (!tI.test(t))
    return !1;
  if (eI.test(n))
    return r === n;
  const i = n.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
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
const iI = new wi(3e4, 6e4);
function oh() {
  const n = _e().___jsl;
  if (n != null && n.H) {
    for (const e of Object.keys(n.H))
      if (n.H[e].r = n.H[e].r || [], n.H[e].L = n.H[e].L || [], n.H[e].r = [...n.H[e].L], n.CP)
        for (let t = 0; t < n.CP.length; t++)
          n.CP[t] = null;
  }
}
function sI(n) {
  return new Promise((e, t) => {
    var r, i, s;
    function a() {
      oh(), gapi.load("gapi.iframes", {
        callback: () => {
          e(gapi.iframes.getContext());
        },
        ontimeout: () => {
          oh(), t(We(
            n,
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ));
        },
        timeout: iI.get()
      });
    }
    if (!((i = (r = _e().gapi) === null || r === void 0 ? void 0 : r.iframes) === null || i === void 0) && i.Iframe)
      e(gapi.iframes.getContext());
    else if (!((s = _e().gapi) === null || s === void 0) && s.load)
      a();
    else {
      const c = Af("iframefcb");
      return _e()[c] = () => {
        gapi.load ? a() : t(We(
          n,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, rc(`${$E()}?onload=${c}`).catch((u) => t(u));
    }
  }).catch((e) => {
    throw ds = null, e;
  });
}
let ds = null;
function oI(n) {
  return ds = ds || sI(n), ds;
}
/**
 * @license
 * Copyright 2020 Google LLC.
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
const aI = new wi(5e3, 15e3), cI = "__/auth/iframe", uI = "emulator/auth/iframe", lI = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
}, hI = /* @__PURE__ */ new Map([
  ["identitytoolkit.googleapis.com", "p"],
  ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
  ["test-identitytoolkit.sandbox.googleapis.com", "t"]
  // test
]);
function dI(n) {
  const e = n.config;
  B(
    e.authDomain,
    n,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  );
  const t = e.emulator ? ec(e, uI) : `https://${n.config.authDomain}/${cI}`, r = {
    apiKey: e.apiKey,
    appName: n.name,
    v: zn
  }, i = hI.get(n.config.apiHost);
  i && (r.eid = i);
  const s = n._getFrameworks();
  return s.length && (r.fw = s.join(",")), `${t}?${yr(r).slice(1)}`;
}
async function fI(n) {
  const e = await oI(n), t = _e().gapi;
  return B(
    t,
    n,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), e.open({
    where: document.body,
    url: dI(n),
    messageHandlersFilter: t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: lI,
    dontclear: !0
  }, (r) => new Promise(async (i, s) => {
    await r.restyle({
      // Prevent iframe from closing on mouse out.
      setHideOnLeave: !1
    });
    const a = We(
      n,
      "network-request-failed"
      /* AuthErrorCode.NETWORK_REQUEST_FAILED */
    ), c = _e().setTimeout(() => {
      s(a);
    }, aI.get());
    function u() {
      _e().clearTimeout(c), i(r);
    }
    r.ping(u).then(u, () => {
      s(a);
    });
  }));
}
/**
 * @license
 * Copyright 2020 Google LLC.
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
const pI = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
}, mI = 500, gI = 600, yI = "_blank", _I = "http://localhost";
class ah {
  constructor(e) {
    this.window = e, this.associatedEvent = null;
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {
      }
  }
}
function vI(n, e, t, r = mI, i = gI) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(), a = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let c = "";
  const u = Object.assign(Object.assign({}, pI), {
    width: r.toString(),
    height: i.toString(),
    top: s,
    left: a
  }), h = Oe().toLowerCase();
  t && (c = _f(h) ? yI : t), yf(h) && (e = e || _I, u.scrollbars = "yes");
  const f = Object.entries(u).reduce((_, [w, A]) => `${_}${w}=${A},`, "");
  if (PE(h) && c !== "_self")
    return wI(e || "", c), new ah(null);
  const m = window.open(e || "", c, f);
  B(
    m,
    n,
    "popup-blocked"
    /* AuthErrorCode.POPUP_BLOCKED */
  );
  try {
    m.focus();
  } catch {
  }
  return new ah(m);
}
function wI(n, e) {
  const t = document.createElement("a");
  t.href = n, t.target = e;
  const r = document.createEvent("MouseEvent");
  r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), t.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
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
const EI = "__/auth/handler", TI = "emulator/auth/handler", II = encodeURIComponent("fac");
async function ch(n, e, t, r, i, s) {
  B(
    n.config.authDomain,
    n,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  ), B(
    n.config.apiKey,
    n,
    "invalid-api-key"
    /* AuthErrorCode.INVALID_API_KEY */
  );
  const a = {
    apiKey: n.config.apiKey,
    appName: n.name,
    authType: t,
    redirectUrl: r,
    v: zn,
    eventId: i
  };
  if (e instanceof oc) {
    e.setDefaultLanguage(n.languageCode), a.providerId = e.providerId || "", Gv(e.getCustomParameters()) || (a.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [f, m] of Object.entries(s || {}))
      a[f] = m;
  }
  if (e instanceof Ii) {
    const f = e.getScopes().filter((m) => m !== "");
    f.length > 0 && (a.scopes = f.join(","));
  }
  n.tenantId && (a.tid = n.tenantId);
  const c = a;
  for (const f of Object.keys(c))
    c[f] === void 0 && delete c[f];
  const u = await n._getAppCheckToken(), h = u ? `#${II}=${encodeURIComponent(u)}` : "";
  return `${bI(n)}?${yr(c).slice(1)}${h}`;
}
function bI({ config: n }) {
  return n.emulator ? ec(n, TI) : `https://${n.authDomain}/${EI}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const Yo = "webStorageSupport";
class AI {
  constructor() {
    this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = xf, this._completeRedirectFn = QT, this._overrideRedirectResult = WT;
  }
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
  async _openPopup(e, t, r, i) {
    var s;
    Lt((s = this.eventManagers[e._key()]) === null || s === void 0 ? void 0 : s.manager, "_initialize() not called before _openPopup()");
    const a = await ch(e, t, r, Ia(), i);
    return vI(e, a, ac());
  }
  async _openRedirect(e, t, r, i) {
    await this._originValidation(e);
    const s = await ch(e, t, r, Ia(), i);
    return gT(s), new Promise(() => {
    });
  }
  _initialize(e) {
    const t = e._key();
    if (this.eventManagers[t]) {
      const { manager: i, promise: s } = this.eventManagers[t];
      return i ? Promise.resolve(i) : (Lt(s, "If manager is not set, promise should be"), s);
    }
    const r = this.initAndGetManager(e);
    return this.eventManagers[t] = { promise: r }, r.catch(() => {
      delete this.eventManagers[t];
    }), r;
  }
  async initAndGetManager(e) {
    const t = await fI(e), r = new XT(e);
    return t.register("authEvent", (i) => (B(
      i == null ? void 0 : i.authEvent,
      e,
      "invalid-auth-event"
      /* AuthErrorCode.INVALID_AUTH_EVENT */
    ), {
      status: r.onEvent(i.authEvent) ? "ACK" : "ERROR"
      /* GapiOutcome.ERROR */
    }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = { manager: r }, this.iframes[e._key()] = t, r;
  }
  _isIframeWebStorageSupported(e, t) {
    this.iframes[e._key()].send(Yo, { type: Yo }, (i) => {
      var s;
      const a = (s = i == null ? void 0 : i[0]) === null || s === void 0 ? void 0 : s[Yo];
      a !== void 0 && t(!!a), st(
        e,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(e) {
    const t = e._key();
    return this.originValidationPromises[t] || (this.originValidationPromises[t] = nI(e)), this.originValidationPromises[t];
  }
  get _shouldInitProactively() {
    return If() || nc() || Js();
  }
}
const SI = AI;
var uh = "@firebase/auth", lh = "1.7.6";
/**
 * @license
 * Copyright 2020 Google LLC
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
class RI {
  constructor(e) {
    this.auth = e, this.internalListeners = /* @__PURE__ */ new Map();
  }
  getUid() {
    var e;
    return this.assertAuthConfigured(), ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) || null;
  }
  async getToken(e) {
    return this.assertAuthConfigured(), await this.auth._initializationPromise, this.auth.currentUser ? { accessToken: await this.auth.currentUser.getIdToken(e) } : null;
  }
  addAuthTokenListener(e) {
    if (this.assertAuthConfigured(), this.internalListeners.has(e))
      return;
    const t = this.auth.onIdTokenChanged((r) => {
      e((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(e, t), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const t = this.internalListeners.get(e);
    t && (this.internalListeners.delete(e), t(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    B(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
      /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function CI(n) {
  switch (n) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    case "WebExtension":
      return "web-extension";
    default:
      return;
  }
}
function PI(n) {
  ft(new it(
    "auth",
    (e, { options: t }) => {
      const r = e.getProvider("app").getImmediate(), i = e.getProvider("heartbeat"), s = e.getProvider("app-check-internal"), { apiKey: a, authDomain: c } = r.options;
      B(a && !a.includes(":"), "invalid-api-key", { appName: r.name });
      const u = {
        apiKey: a,
        authDomain: c,
        clientPlatform: n,
        apiHost: "identitytoolkit.googleapis.com",
        tokenApiHost: "securetoken.googleapis.com",
        apiScheme: "https",
        sdkClientVersion: bf(n)
      }, h = new ME(r, i, s, u);
      return HE(h, t), h;
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  ).setInstanceCreatedCallback((e, t, r) => {
    e.getProvider(
      "auth-internal"
      /* _ComponentName.AUTH_INTERNAL */
    ).initialize();
  })), ft(new it(
    "auth-internal",
    (e) => {
      const t = $t(e.getProvider(
        "auth"
        /* _ComponentName.AUTH */
      ).getImmediate());
      return ((r) => new RI(r))(t);
    },
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  )), He(uh, lh, CI(n)), He(uh, lh, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
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
const kI = 5 * 60, OI = Yd("authIdTokenMaxAge") || kI;
let hh = null;
const NI = (n) => async (e) => {
  const t = e && await e.getIdTokenResult(), r = t && ((/* @__PURE__ */ new Date()).getTime() - Date.parse(t.issuedAtTime)) / 1e3;
  if (r && r > OI)
    return;
  const i = t == null ? void 0 : t.token;
  hh !== i && (hh = i, await fetch(n, {
    method: i ? "POST" : "DELETE",
    headers: i ? {
      Authorization: `Bearer ${i}`
    } : {}
  }));
};
function DI(n = Xs()) {
  const e = dn(n, "auth");
  if (e.isInitialized())
    return e.getImmediate();
  const t = qE(n, {
    popupRedirectResolver: SI,
    persistence: [
      AT,
      fT,
      xf
    ]
  }), r = Yd("authTokenSyncURL");
  if (r && typeof isSecureContext == "boolean" && isSecureContext) {
    const s = new URL(r, location.origin);
    if (location.origin === s.origin) {
      const a = NI(s.toString());
      cT(t, a, () => a(t.currentUser)), kf(t, (c) => a(c));
    }
  }
  const i = Kd("auth");
  return i && WE(t, `http://${i}`), t;
}
function xI() {
  var n, e;
  return (e = (n = document.getElementsByTagName("head")) === null || n === void 0 ? void 0 : n[0]) !== null && e !== void 0 ? e : document;
}
LE({
  loadJS(n) {
    return new Promise((e, t) => {
      const r = document.createElement("script");
      r.setAttribute("src", n), r.onload = e, r.onerror = (i) => {
        const s = We(
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        s.customData = i, t(s);
      }, r.type = "text/javascript", r.charset = "UTF-8", xI().appendChild(r);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
});
PI(
  "Browser"
  /* ClientPlatform.BROWSER */
);
var dh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/
var Pn, jf;
(function() {
  var n;
  /** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  function e(T, y) {
    function v() {
    }
    v.prototype = y.prototype, T.D = y.prototype, T.prototype = new v(), T.prototype.constructor = T, T.C = function(b, S, P) {
      for (var E = Array(arguments.length - 2), be = 2; be < arguments.length; be++)
        E[be - 2] = arguments[be];
      return y.prototype[S].apply(b, E);
    };
  }
  function t() {
    this.blockSize = -1;
  }
  function r() {
    this.blockSize = -1, this.blockSize = 64, this.g = Array(4), this.B = Array(this.blockSize), this.o = this.h = 0, this.s();
  }
  e(r, t), r.prototype.s = function() {
    this.g[0] = 1732584193, this.g[1] = 4023233417, this.g[2] = 2562383102, this.g[3] = 271733878, this.o = this.h = 0;
  };
  function i(T, y, v) {
    v || (v = 0);
    var b = Array(16);
    if (typeof y == "string")
      for (var S = 0; 16 > S; ++S)
        b[S] = y.charCodeAt(v++) | y.charCodeAt(v++) << 8 | y.charCodeAt(v++) << 16 | y.charCodeAt(v++) << 24;
    else
      for (S = 0; 16 > S; ++S)
        b[S] = y[v++] | y[v++] << 8 | y[v++] << 16 | y[v++] << 24;
    y = T.g[0], v = T.g[1], S = T.g[2];
    var P = T.g[3], E = y + (P ^ v & (S ^ P)) + b[0] + 3614090360 & 4294967295;
    y = v + (E << 7 & 4294967295 | E >>> 25), E = P + (S ^ y & (v ^ S)) + b[1] + 3905402710 & 4294967295, P = y + (E << 12 & 4294967295 | E >>> 20), E = S + (v ^ P & (y ^ v)) + b[2] + 606105819 & 4294967295, S = P + (E << 17 & 4294967295 | E >>> 15), E = v + (y ^ S & (P ^ y)) + b[3] + 3250441966 & 4294967295, v = S + (E << 22 & 4294967295 | E >>> 10), E = y + (P ^ v & (S ^ P)) + b[4] + 4118548399 & 4294967295, y = v + (E << 7 & 4294967295 | E >>> 25), E = P + (S ^ y & (v ^ S)) + b[5] + 1200080426 & 4294967295, P = y + (E << 12 & 4294967295 | E >>> 20), E = S + (v ^ P & (y ^ v)) + b[6] + 2821735955 & 4294967295, S = P + (E << 17 & 4294967295 | E >>> 15), E = v + (y ^ S & (P ^ y)) + b[7] + 4249261313 & 4294967295, v = S + (E << 22 & 4294967295 | E >>> 10), E = y + (P ^ v & (S ^ P)) + b[8] + 1770035416 & 4294967295, y = v + (E << 7 & 4294967295 | E >>> 25), E = P + (S ^ y & (v ^ S)) + b[9] + 2336552879 & 4294967295, P = y + (E << 12 & 4294967295 | E >>> 20), E = S + (v ^ P & (y ^ v)) + b[10] + 4294925233 & 4294967295, S = P + (E << 17 & 4294967295 | E >>> 15), E = v + (y ^ S & (P ^ y)) + b[11] + 2304563134 & 4294967295, v = S + (E << 22 & 4294967295 | E >>> 10), E = y + (P ^ v & (S ^ P)) + b[12] + 1804603682 & 4294967295, y = v + (E << 7 & 4294967295 | E >>> 25), E = P + (S ^ y & (v ^ S)) + b[13] + 4254626195 & 4294967295, P = y + (E << 12 & 4294967295 | E >>> 20), E = S + (v ^ P & (y ^ v)) + b[14] + 2792965006 & 4294967295, S = P + (E << 17 & 4294967295 | E >>> 15), E = v + (y ^ S & (P ^ y)) + b[15] + 1236535329 & 4294967295, v = S + (E << 22 & 4294967295 | E >>> 10), E = y + (S ^ P & (v ^ S)) + b[1] + 4129170786 & 4294967295, y = v + (E << 5 & 4294967295 | E >>> 27), E = P + (v ^ S & (y ^ v)) + b[6] + 3225465664 & 4294967295, P = y + (E << 9 & 4294967295 | E >>> 23), E = S + (y ^ v & (P ^ y)) + b[11] + 643717713 & 4294967295, S = P + (E << 14 & 4294967295 | E >>> 18), E = v + (P ^ y & (S ^ P)) + b[0] + 3921069994 & 4294967295, v = S + (E << 20 & 4294967295 | E >>> 12), E = y + (S ^ P & (v ^ S)) + b[5] + 3593408605 & 4294967295, y = v + (E << 5 & 4294967295 | E >>> 27), E = P + (v ^ S & (y ^ v)) + b[10] + 38016083 & 4294967295, P = y + (E << 9 & 4294967295 | E >>> 23), E = S + (y ^ v & (P ^ y)) + b[15] + 3634488961 & 4294967295, S = P + (E << 14 & 4294967295 | E >>> 18), E = v + (P ^ y & (S ^ P)) + b[4] + 3889429448 & 4294967295, v = S + (E << 20 & 4294967295 | E >>> 12), E = y + (S ^ P & (v ^ S)) + b[9] + 568446438 & 4294967295, y = v + (E << 5 & 4294967295 | E >>> 27), E = P + (v ^ S & (y ^ v)) + b[14] + 3275163606 & 4294967295, P = y + (E << 9 & 4294967295 | E >>> 23), E = S + (y ^ v & (P ^ y)) + b[3] + 4107603335 & 4294967295, S = P + (E << 14 & 4294967295 | E >>> 18), E = v + (P ^ y & (S ^ P)) + b[8] + 1163531501 & 4294967295, v = S + (E << 20 & 4294967295 | E >>> 12), E = y + (S ^ P & (v ^ S)) + b[13] + 2850285829 & 4294967295, y = v + (E << 5 & 4294967295 | E >>> 27), E = P + (v ^ S & (y ^ v)) + b[2] + 4243563512 & 4294967295, P = y + (E << 9 & 4294967295 | E >>> 23), E = S + (y ^ v & (P ^ y)) + b[7] + 1735328473 & 4294967295, S = P + (E << 14 & 4294967295 | E >>> 18), E = v + (P ^ y & (S ^ P)) + b[12] + 2368359562 & 4294967295, v = S + (E << 20 & 4294967295 | E >>> 12), E = y + (v ^ S ^ P) + b[5] + 4294588738 & 4294967295, y = v + (E << 4 & 4294967295 | E >>> 28), E = P + (y ^ v ^ S) + b[8] + 2272392833 & 4294967295, P = y + (E << 11 & 4294967295 | E >>> 21), E = S + (P ^ y ^ v) + b[11] + 1839030562 & 4294967295, S = P + (E << 16 & 4294967295 | E >>> 16), E = v + (S ^ P ^ y) + b[14] + 4259657740 & 4294967295, v = S + (E << 23 & 4294967295 | E >>> 9), E = y + (v ^ S ^ P) + b[1] + 2763975236 & 4294967295, y = v + (E << 4 & 4294967295 | E >>> 28), E = P + (y ^ v ^ S) + b[4] + 1272893353 & 4294967295, P = y + (E << 11 & 4294967295 | E >>> 21), E = S + (P ^ y ^ v) + b[7] + 4139469664 & 4294967295, S = P + (E << 16 & 4294967295 | E >>> 16), E = v + (S ^ P ^ y) + b[10] + 3200236656 & 4294967295, v = S + (E << 23 & 4294967295 | E >>> 9), E = y + (v ^ S ^ P) + b[13] + 681279174 & 4294967295, y = v + (E << 4 & 4294967295 | E >>> 28), E = P + (y ^ v ^ S) + b[0] + 3936430074 & 4294967295, P = y + (E << 11 & 4294967295 | E >>> 21), E = S + (P ^ y ^ v) + b[3] + 3572445317 & 4294967295, S = P + (E << 16 & 4294967295 | E >>> 16), E = v + (S ^ P ^ y) + b[6] + 76029189 & 4294967295, v = S + (E << 23 & 4294967295 | E >>> 9), E = y + (v ^ S ^ P) + b[9] + 3654602809 & 4294967295, y = v + (E << 4 & 4294967295 | E >>> 28), E = P + (y ^ v ^ S) + b[12] + 3873151461 & 4294967295, P = y + (E << 11 & 4294967295 | E >>> 21), E = S + (P ^ y ^ v) + b[15] + 530742520 & 4294967295, S = P + (E << 16 & 4294967295 | E >>> 16), E = v + (S ^ P ^ y) + b[2] + 3299628645 & 4294967295, v = S + (E << 23 & 4294967295 | E >>> 9), E = y + (S ^ (v | ~P)) + b[0] + 4096336452 & 4294967295, y = v + (E << 6 & 4294967295 | E >>> 26), E = P + (v ^ (y | ~S)) + b[7] + 1126891415 & 4294967295, P = y + (E << 10 & 4294967295 | E >>> 22), E = S + (y ^ (P | ~v)) + b[14] + 2878612391 & 4294967295, S = P + (E << 15 & 4294967295 | E >>> 17), E = v + (P ^ (S | ~y)) + b[5] + 4237533241 & 4294967295, v = S + (E << 21 & 4294967295 | E >>> 11), E = y + (S ^ (v | ~P)) + b[12] + 1700485571 & 4294967295, y = v + (E << 6 & 4294967295 | E >>> 26), E = P + (v ^ (y | ~S)) + b[3] + 2399980690 & 4294967295, P = y + (E << 10 & 4294967295 | E >>> 22), E = S + (y ^ (P | ~v)) + b[10] + 4293915773 & 4294967295, S = P + (E << 15 & 4294967295 | E >>> 17), E = v + (P ^ (S | ~y)) + b[1] + 2240044497 & 4294967295, v = S + (E << 21 & 4294967295 | E >>> 11), E = y + (S ^ (v | ~P)) + b[8] + 1873313359 & 4294967295, y = v + (E << 6 & 4294967295 | E >>> 26), E = P + (v ^ (y | ~S)) + b[15] + 4264355552 & 4294967295, P = y + (E << 10 & 4294967295 | E >>> 22), E = S + (y ^ (P | ~v)) + b[6] + 2734768916 & 4294967295, S = P + (E << 15 & 4294967295 | E >>> 17), E = v + (P ^ (S | ~y)) + b[13] + 1309151649 & 4294967295, v = S + (E << 21 & 4294967295 | E >>> 11), E = y + (S ^ (v | ~P)) + b[4] + 4149444226 & 4294967295, y = v + (E << 6 & 4294967295 | E >>> 26), E = P + (v ^ (y | ~S)) + b[11] + 3174756917 & 4294967295, P = y + (E << 10 & 4294967295 | E >>> 22), E = S + (y ^ (P | ~v)) + b[2] + 718787259 & 4294967295, S = P + (E << 15 & 4294967295 | E >>> 17), E = v + (P ^ (S | ~y)) + b[9] + 3951481745 & 4294967295, T.g[0] = T.g[0] + y & 4294967295, T.g[1] = T.g[1] + (S + (E << 21 & 4294967295 | E >>> 11)) & 4294967295, T.g[2] = T.g[2] + S & 4294967295, T.g[3] = T.g[3] + P & 4294967295;
  }
  r.prototype.u = function(T, y) {
    y === void 0 && (y = T.length);
    for (var v = y - this.blockSize, b = this.B, S = this.h, P = 0; P < y; ) {
      if (S == 0)
        for (; P <= v; )
          i(this, T, P), P += this.blockSize;
      if (typeof T == "string") {
        for (; P < y; )
          if (b[S++] = T.charCodeAt(P++), S == this.blockSize) {
            i(this, b), S = 0;
            break;
          }
      } else
        for (; P < y; )
          if (b[S++] = T[P++], S == this.blockSize) {
            i(this, b), S = 0;
            break;
          }
    }
    this.h = S, this.o += y;
  }, r.prototype.v = function() {
    var T = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
    T[0] = 128;
    for (var y = 1; y < T.length - 8; ++y)
      T[y] = 0;
    var v = 8 * this.o;
    for (y = T.length - 8; y < T.length; ++y)
      T[y] = v & 255, v /= 256;
    for (this.u(T), T = Array(16), y = v = 0; 4 > y; ++y)
      for (var b = 0; 32 > b; b += 8)
        T[v++] = this.g[y] >>> b & 255;
    return T;
  };
  function s(T, y) {
    var v = c;
    return Object.prototype.hasOwnProperty.call(v, T) ? v[T] : v[T] = y(T);
  }
  function a(T, y) {
    this.h = y;
    for (var v = [], b = !0, S = T.length - 1; 0 <= S; S--) {
      var P = T[S] | 0;
      b && P == y || (v[S] = P, b = !1);
    }
    this.g = v;
  }
  var c = {};
  function u(T) {
    return -128 <= T && 128 > T ? s(T, function(y) {
      return new a([y | 0], 0 > y ? -1 : 0);
    }) : new a([T | 0], 0 > T ? -1 : 0);
  }
  function h(T) {
    if (isNaN(T) || !isFinite(T))
      return m;
    if (0 > T)
      return p(h(-T));
    for (var y = [], v = 1, b = 0; T >= v; b++)
      y[b] = T / v | 0, v *= 4294967296;
    return new a(y, 0);
  }
  function f(T, y) {
    if (T.length == 0)
      throw Error("number format error: empty string");
    if (y = y || 10, 2 > y || 36 < y)
      throw Error("radix out of range: " + y);
    if (T.charAt(0) == "-")
      return p(f(T.substring(1), y));
    if (0 <= T.indexOf("-"))
      throw Error('number format error: interior "-" character');
    for (var v = h(Math.pow(y, 8)), b = m, S = 0; S < T.length; S += 8) {
      var P = Math.min(8, T.length - S), E = parseInt(T.substring(S, S + P), y);
      8 > P ? (P = h(Math.pow(y, P)), b = b.j(P).add(h(E))) : (b = b.j(v), b = b.add(h(E)));
    }
    return b;
  }
  var m = u(0), _ = u(1), w = u(16777216);
  n = a.prototype, n.m = function() {
    if (R(this))
      return -p(this).m();
    for (var T = 0, y = 1, v = 0; v < this.g.length; v++) {
      var b = this.i(v);
      T += (0 <= b ? b : 4294967296 + b) * y, y *= 4294967296;
    }
    return T;
  }, n.toString = function(T) {
    if (T = T || 10, 2 > T || 36 < T)
      throw Error("radix out of range: " + T);
    if (A(this))
      return "0";
    if (R(this))
      return "-" + p(this).toString(T);
    for (var y = h(Math.pow(T, 6)), v = this, b = ""; ; ) {
      var S = N(v, y).g;
      v = I(v, S.j(y));
      var P = ((0 < v.g.length ? v.g[0] : v.h) >>> 0).toString(T);
      if (v = S, A(v))
        return P + b;
      for (; 6 > P.length; )
        P = "0" + P;
      b = P + b;
    }
  }, n.i = function(T) {
    return 0 > T ? 0 : T < this.g.length ? this.g[T] : this.h;
  };
  function A(T) {
    if (T.h != 0)
      return !1;
    for (var y = 0; y < T.g.length; y++)
      if (T.g[y] != 0)
        return !1;
    return !0;
  }
  function R(T) {
    return T.h == -1;
  }
  n.l = function(T) {
    return T = I(this, T), R(T) ? -1 : A(T) ? 0 : 1;
  };
  function p(T) {
    for (var y = T.g.length, v = [], b = 0; b < y; b++)
      v[b] = ~T.g[b];
    return new a(v, ~T.h).add(_);
  }
  n.abs = function() {
    return R(this) ? p(this) : this;
  }, n.add = function(T) {
    for (var y = Math.max(this.g.length, T.g.length), v = [], b = 0, S = 0; S <= y; S++) {
      var P = b + (this.i(S) & 65535) + (T.i(S) & 65535), E = (P >>> 16) + (this.i(S) >>> 16) + (T.i(S) >>> 16);
      b = E >>> 16, P &= 65535, E &= 65535, v[S] = E << 16 | P;
    }
    return new a(v, v[v.length - 1] & -2147483648 ? -1 : 0);
  };
  function I(T, y) {
    return T.add(p(y));
  }
  n.j = function(T) {
    if (A(this) || A(T))
      return m;
    if (R(this))
      return R(T) ? p(this).j(p(T)) : p(p(this).j(T));
    if (R(T))
      return p(this.j(p(T)));
    if (0 > this.l(w) && 0 > T.l(w))
      return h(this.m() * T.m());
    for (var y = this.g.length + T.g.length, v = [], b = 0; b < 2 * y; b++)
      v[b] = 0;
    for (b = 0; b < this.g.length; b++)
      for (var S = 0; S < T.g.length; S++) {
        var P = this.i(b) >>> 16, E = this.i(b) & 65535, be = T.i(S) >>> 16, ct = T.i(S) & 65535;
        v[2 * b + 2 * S] += E * ct, D(v, 2 * b + 2 * S), v[2 * b + 2 * S + 1] += P * ct, D(v, 2 * b + 2 * S + 1), v[2 * b + 2 * S + 1] += E * be, D(v, 2 * b + 2 * S + 1), v[2 * b + 2 * S + 2] += P * be, D(v, 2 * b + 2 * S + 2);
      }
    for (b = 0; b < y; b++)
      v[b] = v[2 * b + 1] << 16 | v[2 * b];
    for (b = y; b < 2 * y; b++)
      v[b] = 0;
    return new a(v, 0);
  };
  function D(T, y) {
    for (; (T[y] & 65535) != T[y]; )
      T[y + 1] += T[y] >>> 16, T[y] &= 65535, y++;
  }
  function O(T, y) {
    this.g = T, this.h = y;
  }
  function N(T, y) {
    if (A(y))
      throw Error("division by zero");
    if (A(T))
      return new O(m, m);
    if (R(T))
      return y = N(p(T), y), new O(p(y.g), p(y.h));
    if (R(y))
      return y = N(T, p(y)), new O(p(y.g), y.h);
    if (30 < T.g.length) {
      if (R(T) || R(y))
        throw Error("slowDivide_ only works with positive integers.");
      for (var v = _, b = y; 0 >= b.l(T); )
        v = C(v), b = C(b);
      var S = M(v, 1), P = M(b, 1);
      for (b = M(b, 2), v = M(v, 2); !A(b); ) {
        var E = P.add(b);
        0 >= E.l(T) && (S = S.add(v), P = E), b = M(b, 1), v = M(v, 1);
      }
      return y = I(T, S.j(y)), new O(S, y);
    }
    for (S = m; 0 <= T.l(y); ) {
      for (v = Math.max(1, Math.floor(T.m() / y.m())), b = Math.ceil(Math.log(v) / Math.LN2), b = 48 >= b ? 1 : Math.pow(2, b - 48), P = h(v), E = P.j(y); R(E) || 0 < E.l(T); )
        v -= b, P = h(v), E = P.j(y);
      A(P) && (P = _), S = S.add(P), T = I(T, E);
    }
    return new O(S, T);
  }
  n.A = function(T) {
    return N(this, T).h;
  }, n.and = function(T) {
    for (var y = Math.max(this.g.length, T.g.length), v = [], b = 0; b < y; b++)
      v[b] = this.i(b) & T.i(b);
    return new a(v, this.h & T.h);
  }, n.or = function(T) {
    for (var y = Math.max(this.g.length, T.g.length), v = [], b = 0; b < y; b++)
      v[b] = this.i(b) | T.i(b);
    return new a(v, this.h | T.h);
  }, n.xor = function(T) {
    for (var y = Math.max(this.g.length, T.g.length), v = [], b = 0; b < y; b++)
      v[b] = this.i(b) ^ T.i(b);
    return new a(v, this.h ^ T.h);
  };
  function C(T) {
    for (var y = T.g.length + 1, v = [], b = 0; b < y; b++)
      v[b] = T.i(b) << 1 | T.i(b - 1) >>> 31;
    return new a(v, T.h);
  }
  function M(T, y) {
    var v = y >> 5;
    y %= 32;
    for (var b = T.g.length - v, S = [], P = 0; P < b; P++)
      S[P] = 0 < y ? T.i(P + v) >>> y | T.i(P + v + 1) << 32 - y : T.i(P + v);
    return new a(S, T.h);
  }
  r.prototype.digest = r.prototype.v, r.prototype.reset = r.prototype.s, r.prototype.update = r.prototype.u, jf = r, a.prototype.add = a.prototype.add, a.prototype.multiply = a.prototype.j, a.prototype.modulo = a.prototype.A, a.prototype.compare = a.prototype.l, a.prototype.toNumber = a.prototype.m, a.prototype.toString = a.prototype.toString, a.prototype.getBits = a.prototype.i, a.fromNumber = h, a.fromString = f, Pn = a;
}).apply(typeof dh < "u" ? dh : typeof self < "u" ? self : typeof window < "u" ? window : {});
var ts = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/
var Bf, zf, Gr, qf, fs, Ra, Hf, Wf, Kf;
(function() {
  var n, e = typeof Object.defineProperties == "function" ? Object.defineProperty : function(o, l, d) {
    return o == Array.prototype || o == Object.prototype || (o[l] = d.value), o;
  };
  function t(o) {
    o = [typeof globalThis == "object" && globalThis, o, typeof window == "object" && window, typeof self == "object" && self, typeof ts == "object" && ts];
    for (var l = 0; l < o.length; ++l) {
      var d = o[l];
      if (d && d.Math == Math)
        return d;
    }
    throw Error("Cannot find global object");
  }
  var r = t(this);
  function i(o, l) {
    if (l)
      e: {
        var d = r;
        o = o.split(".");
        for (var g = 0; g < o.length - 1; g++) {
          var k = o[g];
          if (!(k in d))
            break e;
          d = d[k];
        }
        o = o[o.length - 1], g = d[o], l = l(g), l != g && l != null && e(d, o, { configurable: !0, writable: !0, value: l });
      }
  }
  function s(o, l) {
    o instanceof String && (o += "");
    var d = 0, g = !1, k = { next: function() {
      if (!g && d < o.length) {
        var x = d++;
        return { value: l(x, o[x]), done: !1 };
      }
      return g = !0, { done: !0, value: void 0 };
    } };
    return k[Symbol.iterator] = function() {
      return k;
    }, k;
  }
  i("Array.prototype.values", function(o) {
    return o || function() {
      return s(this, function(l, d) {
        return d;
      });
    };
  });
  /** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var a = a || {}, c = this || self;
  function u(o) {
    var l = typeof o;
    return l = l != "object" ? l : o ? Array.isArray(o) ? "array" : l : "null", l == "array" || l == "object" && typeof o.length == "number";
  }
  function h(o) {
    var l = typeof o;
    return l == "object" && o != null || l == "function";
  }
  function f(o, l, d) {
    return o.call.apply(o.bind, arguments);
  }
  function m(o, l, d) {
    if (!o)
      throw Error();
    if (2 < arguments.length) {
      var g = Array.prototype.slice.call(arguments, 2);
      return function() {
        var k = Array.prototype.slice.call(arguments);
        return Array.prototype.unshift.apply(k, g), o.apply(l, k);
      };
    }
    return function() {
      return o.apply(l, arguments);
    };
  }
  function _(o, l, d) {
    return _ = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? f : m, _.apply(null, arguments);
  }
  function w(o, l) {
    var d = Array.prototype.slice.call(arguments, 1);
    return function() {
      var g = d.slice();
      return g.push.apply(g, arguments), o.apply(this, g);
    };
  }
  function A(o, l) {
    function d() {
    }
    d.prototype = l.prototype, o.aa = l.prototype, o.prototype = new d(), o.prototype.constructor = o, o.Qb = function(g, k, x) {
      for (var F = Array(arguments.length - 2), oe = 2; oe < arguments.length; oe++)
        F[oe - 2] = arguments[oe];
      return l.prototype[k].apply(g, F);
    };
  }
  function R(o) {
    const l = o.length;
    if (0 < l) {
      const d = Array(l);
      for (let g = 0; g < l; g++)
        d[g] = o[g];
      return d;
    }
    return [];
  }
  function p(o, l) {
    for (let d = 1; d < arguments.length; d++) {
      const g = arguments[d];
      if (u(g)) {
        const k = o.length || 0, x = g.length || 0;
        o.length = k + x;
        for (let F = 0; F < x; F++)
          o[k + F] = g[F];
      } else
        o.push(g);
    }
  }
  class I {
    constructor(l, d) {
      this.i = l, this.j = d, this.h = 0, this.g = null;
    }
    get() {
      let l;
      return 0 < this.h ? (this.h--, l = this.g, this.g = l.next, l.next = null) : l = this.i(), l;
    }
  }
  function D(o) {
    return /^[\s\xa0]*$/.test(o);
  }
  function O() {
    var o = c.navigator;
    return o && (o = o.userAgent) ? o : "";
  }
  function N(o) {
    return N[" "](o), o;
  }
  N[" "] = function() {
  };
  var C = O().indexOf("Gecko") != -1 && !(O().toLowerCase().indexOf("webkit") != -1 && O().indexOf("Edge") == -1) && !(O().indexOf("Trident") != -1 || O().indexOf("MSIE") != -1) && O().indexOf("Edge") == -1;
  function M(o, l, d) {
    for (const g in o)
      l.call(d, o[g], g, o);
  }
  function T(o, l) {
    for (const d in o)
      l.call(void 0, o[d], d, o);
  }
  function y(o) {
    const l = {};
    for (const d in o)
      l[d] = o[d];
    return l;
  }
  const v = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function b(o, l) {
    let d, g;
    for (let k = 1; k < arguments.length; k++) {
      g = arguments[k];
      for (d in g)
        o[d] = g[d];
      for (let x = 0; x < v.length; x++)
        d = v[x], Object.prototype.hasOwnProperty.call(g, d) && (o[d] = g[d]);
    }
  }
  function S(o) {
    var l = 1;
    o = o.split(":");
    const d = [];
    for (; 0 < l && o.length; )
      d.push(o.shift()), l--;
    return o.length && d.push(o.join(":")), d;
  }
  function P(o) {
    c.setTimeout(() => {
      throw o;
    }, 0);
  }
  function E() {
    var o = jt;
    let l = null;
    return o.g && (l = o.g, o.g = o.g.next, o.g || (o.h = null), l.next = null), l;
  }
  class be {
    constructor() {
      this.h = this.g = null;
    }
    add(l, d) {
      const g = ct.get();
      g.set(l, d), this.h ? this.h.next = g : this.g = g, this.h = g;
    }
  }
  var ct = new I(() => new bt(), (o) => o.reset());
  class bt {
    constructor() {
      this.next = this.g = this.h = null;
    }
    set(l, d) {
      this.h = l, this.g = d, this.next = null;
    }
    reset() {
      this.next = this.g = this.h = null;
    }
  }
  let Ge, ut = !1, jt = new be(), pn = () => {
    const o = c.Promise.resolve(void 0);
    Ge = () => {
      o.then(Ir);
    };
  };
  var Ir = () => {
    for (var o; o = E(); ) {
      try {
        o.h.call(o.g);
      } catch (d) {
        P(d);
      }
      var l = ct;
      l.j(o), 100 > l.h && (l.h++, o.next = l.g, l.g = o);
    }
    ut = !1;
  };
  function tt() {
    this.s = this.s, this.C = this.C;
  }
  tt.prototype.s = !1, tt.prototype.ma = function() {
    this.s || (this.s = !0, this.N());
  }, tt.prototype.N = function() {
    if (this.C)
      for (; this.C.length; )
        this.C.shift()();
  };
  function ge(o, l) {
    this.type = o, this.g = this.target = l, this.defaultPrevented = !1;
  }
  ge.prototype.h = function() {
    this.defaultPrevented = !0;
  };
  var br = function() {
    if (!c.addEventListener || !Object.defineProperty)
      return !1;
    var o = !1, l = Object.defineProperty({}, "passive", { get: function() {
      o = !0;
    } });
    try {
      const d = () => {
      };
      c.addEventListener("test", d, l), c.removeEventListener("test", d, l);
    } catch {
    }
    return o;
  }();
  function At(o, l) {
    if (ge.call(this, o ? o.type : ""), this.relatedTarget = this.g = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.state = null, this.pointerId = 0, this.pointerType = "", this.i = null, o) {
      var d = this.type = o.type, g = o.changedTouches && o.changedTouches.length ? o.changedTouches[0] : null;
      if (this.target = o.target || o.srcElement, this.g = l, l = o.relatedTarget) {
        if (C) {
          e: {
            try {
              N(l.nodeName);
              var k = !0;
              break e;
            } catch {
            }
            k = !1;
          }
          k || (l = null);
        }
      } else
        d == "mouseover" ? l = o.fromElement : d == "mouseout" && (l = o.toElement);
      this.relatedTarget = l, g ? (this.clientX = g.clientX !== void 0 ? g.clientX : g.pageX, this.clientY = g.clientY !== void 0 ? g.clientY : g.pageY, this.screenX = g.screenX || 0, this.screenY = g.screenY || 0) : (this.clientX = o.clientX !== void 0 ? o.clientX : o.pageX, this.clientY = o.clientY !== void 0 ? o.clientY : o.pageY, this.screenX = o.screenX || 0, this.screenY = o.screenY || 0), this.button = o.button, this.key = o.key || "", this.ctrlKey = o.ctrlKey, this.altKey = o.altKey, this.shiftKey = o.shiftKey, this.metaKey = o.metaKey, this.pointerId = o.pointerId || 0, this.pointerType = typeof o.pointerType == "string" ? o.pointerType : Ar[o.pointerType] || "", this.state = o.state, this.i = o, o.defaultPrevented && At.aa.h.call(this);
    }
  }
  A(At, ge);
  var Ar = { 2: "touch", 3: "pen", 4: "mouse" };
  At.prototype.h = function() {
    At.aa.h.call(this);
    var o = this.i;
    o.preventDefault ? o.preventDefault() : o.returnValue = !1;
  };
  var St = "closure_listenable_" + (1e6 * Math.random() | 0), Sr = 0;
  function Rr(o, l, d, g, k) {
    this.listener = o, this.proxy = null, this.src = l, this.type = d, this.capture = !!g, this.ha = k, this.key = ++Sr, this.da = this.fa = !1;
  }
  function Bt(o) {
    o.da = !0, o.listener = null, o.proxy = null, o.src = null, o.ha = null;
  }
  function zt(o) {
    this.src = o, this.g = {}, this.h = 0;
  }
  zt.prototype.add = function(o, l, d, g, k) {
    var x = o.toString();
    o = this.g[x], o || (o = this.g[x] = [], this.h++);
    var F = Rt(o, l, g, k);
    return -1 < F ? (l = o[F], d || (l.fa = !1)) : (l = new Rr(l, this.src, x, !!g, k), l.fa = d, o.push(l)), l;
  };
  function $(o, l) {
    var d = l.type;
    if (d in o.g) {
      var g = o.g[d], k = Array.prototype.indexOf.call(g, l, void 0), x;
      (x = 0 <= k) && Array.prototype.splice.call(g, k, 1), x && (Bt(l), o.g[d].length == 0 && (delete o.g[d], o.h--));
    }
  }
  function Rt(o, l, d, g) {
    for (var k = 0; k < o.length; ++k) {
      var x = o[k];
      if (!x.da && x.listener == l && x.capture == !!d && x.ha == g)
        return k;
    }
    return -1;
  }
  var j = "closure_lm_" + (1e6 * Math.random() | 0), pt = {};
  function mn(o, l, d, g, k) {
    if (g && g.once)
      return Qc(o, l, d, g, k);
    if (Array.isArray(l)) {
      for (var x = 0; x < l.length; x++)
        mn(o, l[x], d, g, k);
      return null;
    }
    return d = vo(d), o && o[St] ? o.K(l, d, h(g) ? !!g.capture : !!g, k) : Cr(o, l, d, !1, g, k);
  }
  function Cr(o, l, d, g, k, x) {
    if (!l)
      throw Error("Invalid event type");
    var F = h(k) ? !!k.capture : !!k, oe = yo(o);
    if (oe || (o[j] = oe = new zt(o)), d = oe.add(l, d, g, F, x), d.proxy)
      return d;
    if (g = tg(), d.proxy = g, g.src = o, g.listener = d, o.addEventListener)
      br || (k = F), k === void 0 && (k = !1), o.addEventListener(l.toString(), g, k);
    else if (o.attachEvent)
      o.attachEvent(Xc(l.toString()), g);
    else if (o.addListener && o.removeListener)
      o.addListener(g);
    else
      throw Error("addEventListener and attachEvent are unavailable.");
    return d;
  }
  function tg() {
    function o(d) {
      return l.call(o.src, o.listener, d);
    }
    const l = ng;
    return o;
  }
  function Qc(o, l, d, g, k) {
    if (Array.isArray(l)) {
      for (var x = 0; x < l.length; x++)
        Qc(o, l[x], d, g, k);
      return null;
    }
    return d = vo(d), o && o[St] ? o.L(l, d, h(g) ? !!g.capture : !!g, k) : Cr(o, l, d, !0, g, k);
  }
  function Yc(o, l, d, g, k) {
    if (Array.isArray(l))
      for (var x = 0; x < l.length; x++)
        Yc(o, l[x], d, g, k);
    else
      g = h(g) ? !!g.capture : !!g, d = vo(d), o && o[St] ? (o = o.i, l = String(l).toString(), l in o.g && (x = o.g[l], d = Rt(x, d, g, k), -1 < d && (Bt(x[d]), Array.prototype.splice.call(x, d, 1), x.length == 0 && (delete o.g[l], o.h--)))) : o && (o = yo(o)) && (l = o.g[l.toString()], o = -1, l && (o = Rt(l, d, g, k)), (d = -1 < o ? l[o] : null) && go(d));
  }
  function go(o) {
    if (typeof o != "number" && o && !o.da) {
      var l = o.src;
      if (l && l[St])
        $(l.i, o);
      else {
        var d = o.type, g = o.proxy;
        l.removeEventListener ? l.removeEventListener(d, g, o.capture) : l.detachEvent ? l.detachEvent(Xc(d), g) : l.addListener && l.removeListener && l.removeListener(g), (d = yo(l)) ? ($(d, o), d.h == 0 && (d.src = null, l[j] = null)) : Bt(o);
      }
    }
  }
  function Xc(o) {
    return o in pt ? pt[o] : pt[o] = "on" + o;
  }
  function ng(o, l) {
    if (o.da)
      o = !0;
    else {
      l = new At(l, this);
      var d = o.listener, g = o.ha || o.src;
      o.fa && go(o), o = d.call(g, l);
    }
    return o;
  }
  function yo(o) {
    return o = o[j], o instanceof zt ? o : null;
  }
  var _o = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
  function vo(o) {
    return typeof o == "function" ? o : (o[_o] || (o[_o] = function(l) {
      return o.handleEvent(l);
    }), o[_o]);
  }
  function De() {
    tt.call(this), this.i = new zt(this), this.M = this, this.F = null;
  }
  A(De, tt), De.prototype[St] = !0, De.prototype.removeEventListener = function(o, l, d, g) {
    Yc(this, o, l, d, g);
  };
  function Ue(o, l) {
    var d, g = o.F;
    if (g)
      for (d = []; g; g = g.F)
        d.push(g);
    if (o = o.M, g = l.type || l, typeof l == "string")
      l = new ge(l, o);
    else if (l instanceof ge)
      l.target = l.target || o;
    else {
      var k = l;
      l = new ge(g, o), b(l, k);
    }
    if (k = !0, d)
      for (var x = d.length - 1; 0 <= x; x--) {
        var F = l.g = d[x];
        k = Ni(F, g, !0, l) && k;
      }
    if (F = l.g = o, k = Ni(F, g, !0, l) && k, k = Ni(F, g, !1, l) && k, d)
      for (x = 0; x < d.length; x++)
        F = l.g = d[x], k = Ni(F, g, !1, l) && k;
  }
  De.prototype.N = function() {
    if (De.aa.N.call(this), this.i) {
      var o = this.i, l;
      for (l in o.g) {
        for (var d = o.g[l], g = 0; g < d.length; g++)
          Bt(d[g]);
        delete o.g[l], o.h--;
      }
    }
    this.F = null;
  }, De.prototype.K = function(o, l, d, g) {
    return this.i.add(String(o), l, !1, d, g);
  }, De.prototype.L = function(o, l, d, g) {
    return this.i.add(String(o), l, !0, d, g);
  };
  function Ni(o, l, d, g) {
    if (l = o.i.g[String(l)], !l)
      return !0;
    l = l.concat();
    for (var k = !0, x = 0; x < l.length; ++x) {
      var F = l[x];
      if (F && !F.da && F.capture == d) {
        var oe = F.listener, Ae = F.ha || F.src;
        F.fa && $(o.i, F), k = oe.call(Ae, g) !== !1 && k;
      }
    }
    return k && !g.defaultPrevented;
  }
  function Jc(o, l, d) {
    if (typeof o == "function")
      d && (o = _(o, d));
    else if (o && typeof o.handleEvent == "function")
      o = _(o.handleEvent, o);
    else
      throw Error("Invalid listener argument");
    return 2147483647 < Number(l) ? -1 : c.setTimeout(o, l || 0);
  }
  function Zc(o) {
    o.g = Jc(() => {
      o.g = null, o.i && (o.i = !1, Zc(o));
    }, o.l);
    const l = o.h;
    o.h = null, o.m.apply(null, l);
  }
  class rg extends tt {
    constructor(l, d) {
      super(), this.m = l, this.l = d, this.h = null, this.i = !1, this.g = null;
    }
    j(l) {
      this.h = arguments, this.g ? this.i = !0 : Zc(this);
    }
    N() {
      super.N(), this.g && (c.clearTimeout(this.g), this.g = null, this.i = !1, this.h = null);
    }
  }
  function Pr(o) {
    tt.call(this), this.h = o, this.g = {};
  }
  A(Pr, tt);
  var eu = [];
  function tu(o) {
    M(o.g, function(l, d) {
      this.g.hasOwnProperty(d) && go(l);
    }, o), o.g = {};
  }
  Pr.prototype.N = function() {
    Pr.aa.N.call(this), tu(this);
  }, Pr.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
  };
  var wo = c.JSON.stringify, ig = c.JSON.parse, sg = class {
    stringify(o) {
      return c.JSON.stringify(o, void 0);
    }
    parse(o) {
      return c.JSON.parse(o, void 0);
    }
  };
  function Eo() {
  }
  Eo.prototype.h = null;
  function nu(o) {
    return o.h || (o.h = o.i());
  }
  function ru() {
  }
  var kr = { OPEN: "a", kb: "b", Ja: "c", wb: "d" };
  function To() {
    ge.call(this, "d");
  }
  A(To, ge);
  function Io() {
    ge.call(this, "c");
  }
  A(Io, ge);
  var gn = {}, iu = null;
  function Di() {
    return iu = iu || new De();
  }
  gn.La = "serverreachability";
  function su(o) {
    ge.call(this, gn.La, o);
  }
  A(su, ge);
  function Or(o) {
    const l = Di();
    Ue(l, new su(l));
  }
  gn.STAT_EVENT = "statevent";
  function ou(o, l) {
    ge.call(this, gn.STAT_EVENT, o), this.stat = l;
  }
  A(ou, ge);
  function $e(o) {
    const l = Di();
    Ue(l, new ou(l, o));
  }
  gn.Ma = "timingevent";
  function au(o, l) {
    ge.call(this, gn.Ma, o), this.size = l;
  }
  A(au, ge);
  function Nr(o, l) {
    if (typeof o != "function")
      throw Error("Fn must not be null and must be a function");
    return c.setTimeout(function() {
      o();
    }, l);
  }
  function Dr() {
    this.g = !0;
  }
  Dr.prototype.xa = function() {
    this.g = !1;
  };
  function og(o, l, d, g, k, x) {
    o.info(function() {
      if (o.g)
        if (x)
          for (var F = "", oe = x.split("&"), Ae = 0; Ae < oe.length; Ae++) {
            var Z = oe[Ae].split("=");
            if (1 < Z.length) {
              var xe = Z[0];
              Z = Z[1];
              var Ve = xe.split("_");
              F = 2 <= Ve.length && Ve[1] == "type" ? F + (xe + "=" + Z + "&") : F + (xe + "=redacted&");
            }
          }
        else
          F = null;
      else
        F = x;
      return "XMLHTTP REQ (" + g + ") [attempt " + k + "]: " + l + `
` + d + `
` + F;
    });
  }
  function ag(o, l, d, g, k, x, F) {
    o.info(function() {
      return "XMLHTTP RESP (" + g + ") [ attempt " + k + "]: " + l + `
` + d + `
` + x + " " + F;
    });
  }
  function Wn(o, l, d, g) {
    o.info(function() {
      return "XMLHTTP TEXT (" + l + "): " + ug(o, d) + (g ? " " + g : "");
    });
  }
  function cg(o, l) {
    o.info(function() {
      return "TIMEOUT: " + l;
    });
  }
  Dr.prototype.info = function() {
  };
  function ug(o, l) {
    if (!o.g)
      return l;
    if (!l)
      return null;
    try {
      var d = JSON.parse(l);
      if (d) {
        for (o = 0; o < d.length; o++)
          if (Array.isArray(d[o])) {
            var g = d[o];
            if (!(2 > g.length)) {
              var k = g[1];
              if (Array.isArray(k) && !(1 > k.length)) {
                var x = k[0];
                if (x != "noop" && x != "stop" && x != "close")
                  for (var F = 1; F < k.length; F++)
                    k[F] = "";
              }
            }
          }
      }
      return wo(d);
    } catch {
      return l;
    }
  }
  var xi = { NO_ERROR: 0, gb: 1, tb: 2, sb: 3, nb: 4, rb: 5, ub: 6, Ia: 7, TIMEOUT: 8, xb: 9 }, cu = { lb: "complete", Hb: "success", Ja: "error", Ia: "abort", zb: "ready", Ab: "readystatechange", TIMEOUT: "timeout", vb: "incrementaldata", yb: "progress", ob: "downloadprogress", Pb: "uploadprogress" }, bo;
  function Vi() {
  }
  A(Vi, Eo), Vi.prototype.g = function() {
    return new XMLHttpRequest();
  }, Vi.prototype.i = function() {
    return {};
  }, bo = new Vi();
  function qt(o, l, d, g) {
    this.j = o, this.i = l, this.l = d, this.R = g || 1, this.U = new Pr(this), this.I = 45e3, this.H = null, this.o = !1, this.m = this.A = this.v = this.L = this.F = this.S = this.B = null, this.D = [], this.g = null, this.C = 0, this.s = this.u = null, this.X = -1, this.J = !1, this.O = 0, this.M = null, this.W = this.K = this.T = this.P = !1, this.h = new uu();
  }
  function uu() {
    this.i = null, this.g = "", this.h = !1;
  }
  var lu = {}, Ao = {};
  function So(o, l, d) {
    o.L = 1, o.v = Ui(Ct(l)), o.m = d, o.P = !0, hu(o, null);
  }
  function hu(o, l) {
    o.F = Date.now(), Mi(o), o.A = Ct(o.v);
    var d = o.A, g = o.R;
    Array.isArray(g) || (g = [String(g)]), Au(d.i, "t", g), o.C = 0, d = o.j.J, o.h = new uu(), o.g = zu(o.j, d ? l : null, !o.m), 0 < o.O && (o.M = new rg(_(o.Y, o, o.g), o.O)), l = o.U, d = o.g, g = o.ca;
    var k = "readystatechange";
    Array.isArray(k) || (k && (eu[0] = k.toString()), k = eu);
    for (var x = 0; x < k.length; x++) {
      var F = mn(d, k[x], g || l.handleEvent, !1, l.h || l);
      if (!F)
        break;
      l.g[F.key] = F;
    }
    l = o.H ? y(o.H) : {}, o.m ? (o.u || (o.u = "POST"), l["Content-Type"] = "application/x-www-form-urlencoded", o.g.ea(
      o.A,
      o.u,
      o.m,
      l
    )) : (o.u = "GET", o.g.ea(o.A, o.u, null, l)), Or(), og(o.i, o.u, o.A, o.l, o.R, o.m);
  }
  qt.prototype.ca = function(o) {
    o = o.target;
    const l = this.M;
    l && Pt(o) == 3 ? l.j() : this.Y(o);
  }, qt.prototype.Y = function(o) {
    try {
      if (o == this.g)
        e: {
          const Ve = Pt(this.g);
          var l = this.g.Ba();
          const Qn = this.g.Z();
          if (!(3 > Ve) && (Ve != 3 || this.g && (this.h.h || this.g.oa() || Nu(this.g)))) {
            this.J || Ve != 4 || l == 7 || (l == 8 || 0 >= Qn ? Or(3) : Or(2)), Ro(this);
            var d = this.g.Z();
            this.X = d;
            t:
              if (du(this)) {
                var g = Nu(this.g);
                o = "";
                var k = g.length, x = Pt(this.g) == 4;
                if (!this.h.i) {
                  if (typeof TextDecoder > "u") {
                    yn(this), xr(this);
                    var F = "";
                    break t;
                  }
                  this.h.i = new c.TextDecoder();
                }
                for (l = 0; l < k; l++)
                  this.h.h = !0, o += this.h.i.decode(g[l], { stream: !(x && l == k - 1) });
                g.length = 0, this.h.g += o, this.C = 0, F = this.h.g;
              } else
                F = this.g.oa();
            if (this.o = d == 200, ag(this.i, this.u, this.A, this.l, this.R, Ve, d), this.o) {
              if (this.T && !this.K) {
                t: {
                  if (this.g) {
                    var oe, Ae = this.g;
                    if ((oe = Ae.g ? Ae.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !D(oe)) {
                      var Z = oe;
                      break t;
                    }
                  }
                  Z = null;
                }
                if (d = Z)
                  Wn(this.i, this.l, d, "Initial handshake response via X-HTTP-Initial-Response"), this.K = !0, Co(this, d);
                else {
                  this.o = !1, this.s = 3, $e(12), yn(this), xr(this);
                  break e;
                }
              }
              if (this.P) {
                d = !0;
                let lt;
                for (; !this.J && this.C < F.length; )
                  if (lt = lg(this, F), lt == Ao) {
                    Ve == 4 && (this.s = 4, $e(14), d = !1), Wn(this.i, this.l, null, "[Incomplete Response]");
                    break;
                  } else if (lt == lu) {
                    this.s = 4, $e(15), Wn(this.i, this.l, F, "[Invalid Chunk]"), d = !1;
                    break;
                  } else
                    Wn(this.i, this.l, lt, null), Co(this, lt);
                if (du(this) && this.C != 0 && (this.h.g = this.h.g.slice(this.C), this.C = 0), Ve != 4 || F.length != 0 || this.h.h || (this.s = 1, $e(16), d = !1), this.o = this.o && d, !d)
                  Wn(this.i, this.l, F, "[Invalid Chunked Response]"), yn(this), xr(this);
                else if (0 < F.length && !this.W) {
                  this.W = !0;
                  var xe = this.j;
                  xe.g == this && xe.ba && !xe.M && (xe.j.info("Great, no buffering proxy detected. Bytes received: " + F.length), xo(xe), xe.M = !0, $e(11));
                }
              } else
                Wn(this.i, this.l, F, null), Co(this, F);
              Ve == 4 && yn(this), this.o && !this.J && (Ve == 4 ? Uu(this.j, this) : (this.o = !1, Mi(this)));
            } else
              Rg(this.g), d == 400 && 0 < F.indexOf("Unknown SID") ? (this.s = 3, $e(12)) : (this.s = 0, $e(13)), yn(this), xr(this);
          }
        }
    } catch {
    } finally {
    }
  };
  function du(o) {
    return o.g ? o.u == "GET" && o.L != 2 && o.j.Ca : !1;
  }
  function lg(o, l) {
    var d = o.C, g = l.indexOf(`
`, d);
    return g == -1 ? Ao : (d = Number(l.substring(d, g)), isNaN(d) ? lu : (g += 1, g + d > l.length ? Ao : (l = l.slice(g, g + d), o.C = g + d, l)));
  }
  qt.prototype.cancel = function() {
    this.J = !0, yn(this);
  };
  function Mi(o) {
    o.S = Date.now() + o.I, fu(o, o.I);
  }
  function fu(o, l) {
    if (o.B != null)
      throw Error("WatchDog timer not null");
    o.B = Nr(_(o.ba, o), l);
  }
  function Ro(o) {
    o.B && (c.clearTimeout(o.B), o.B = null);
  }
  qt.prototype.ba = function() {
    this.B = null;
    const o = Date.now();
    0 <= o - this.S ? (cg(this.i, this.A), this.L != 2 && (Or(), $e(17)), yn(this), this.s = 2, xr(this)) : fu(this, this.S - o);
  };
  function xr(o) {
    o.j.G == 0 || o.J || Uu(o.j, o);
  }
  function yn(o) {
    Ro(o);
    var l = o.M;
    l && typeof l.ma == "function" && l.ma(), o.M = null, tu(o.U), o.g && (l = o.g, o.g = null, l.abort(), l.ma());
  }
  function Co(o, l) {
    try {
      var d = o.j;
      if (d.G != 0 && (d.g == o || Po(d.h, o))) {
        if (!o.K && Po(d.h, o) && d.G == 3) {
          try {
            var g = d.Da.g.parse(l);
          } catch {
            g = null;
          }
          if (Array.isArray(g) && g.length == 3) {
            var k = g;
            if (k[0] == 0) {
              e:
                if (!d.u) {
                  if (d.g)
                    if (d.g.F + 3e3 < o.F)
                      qi(d), Bi(d);
                    else
                      break e;
                  Do(d), $e(18);
                }
            } else
              d.za = k[1], 0 < d.za - d.T && 37500 > k[2] && d.F && d.v == 0 && !d.C && (d.C = Nr(_(d.Za, d), 6e3));
            if (1 >= gu(d.h) && d.ca) {
              try {
                d.ca();
              } catch {
              }
              d.ca = void 0;
            }
          } else
            vn(d, 11);
        } else if ((o.K || d.g == o) && qi(d), !D(l))
          for (k = d.Da.g.parse(l), l = 0; l < k.length; l++) {
            let Z = k[l];
            if (d.T = Z[0], Z = Z[1], d.G == 2)
              if (Z[0] == "c") {
                d.K = Z[1], d.ia = Z[2];
                const xe = Z[3];
                xe != null && (d.la = xe, d.j.info("VER=" + d.la));
                const Ve = Z[4];
                Ve != null && (d.Aa = Ve, d.j.info("SVER=" + d.Aa));
                const Qn = Z[5];
                Qn != null && typeof Qn == "number" && 0 < Qn && (g = 1.5 * Qn, d.L = g, d.j.info("backChannelRequestTimeoutMs_=" + g)), g = d;
                const lt = o.g;
                if (lt) {
                  const Wi = lt.g ? lt.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                  if (Wi) {
                    var x = g.h;
                    x.g || Wi.indexOf("spdy") == -1 && Wi.indexOf("quic") == -1 && Wi.indexOf("h2") == -1 || (x.j = x.l, x.g = /* @__PURE__ */ new Set(), x.h && (ko(x, x.h), x.h = null));
                  }
                  if (g.D) {
                    const Vo = lt.g ? lt.g.getResponseHeader("X-HTTP-Session-Id") : null;
                    Vo && (g.ya = Vo, ce(g.I, g.D, Vo));
                  }
                }
                d.G = 3, d.l && d.l.ua(), d.ba && (d.R = Date.now() - o.F, d.j.info("Handshake RTT: " + d.R + "ms")), g = d;
                var F = o;
                if (g.qa = Bu(g, g.J ? g.ia : null, g.W), F.K) {
                  yu(g.h, F);
                  var oe = F, Ae = g.L;
                  Ae && (oe.I = Ae), oe.B && (Ro(oe), Mi(oe)), g.g = F;
                } else
                  Lu(g);
                0 < d.i.length && zi(d);
              } else
                Z[0] != "stop" && Z[0] != "close" || vn(d, 7);
            else
              d.G == 3 && (Z[0] == "stop" || Z[0] == "close" ? Z[0] == "stop" ? vn(d, 7) : No(d) : Z[0] != "noop" && d.l && d.l.ta(Z), d.v = 0);
          }
      }
      Or(4);
    } catch {
    }
  }
  var hg = class {
    constructor(o, l) {
      this.g = o, this.map = l;
    }
  };
  function pu(o) {
    this.l = o || 10, c.PerformanceNavigationTiming ? (o = c.performance.getEntriesByType("navigation"), o = 0 < o.length && (o[0].nextHopProtocol == "hq" || o[0].nextHopProtocol == "h2")) : o = !!(c.chrome && c.chrome.loadTimes && c.chrome.loadTimes() && c.chrome.loadTimes().wasFetchedViaSpdy), this.j = o ? this.l : 1, this.g = null, 1 < this.j && (this.g = /* @__PURE__ */ new Set()), this.h = null, this.i = [];
  }
  function mu(o) {
    return o.h ? !0 : o.g ? o.g.size >= o.j : !1;
  }
  function gu(o) {
    return o.h ? 1 : o.g ? o.g.size : 0;
  }
  function Po(o, l) {
    return o.h ? o.h == l : o.g ? o.g.has(l) : !1;
  }
  function ko(o, l) {
    o.g ? o.g.add(l) : o.h = l;
  }
  function yu(o, l) {
    o.h && o.h == l ? o.h = null : o.g && o.g.has(l) && o.g.delete(l);
  }
  pu.prototype.cancel = function() {
    if (this.i = _u(this), this.h)
      this.h.cancel(), this.h = null;
    else if (this.g && this.g.size !== 0) {
      for (const o of this.g.values())
        o.cancel();
      this.g.clear();
    }
  };
  function _u(o) {
    if (o.h != null)
      return o.i.concat(o.h.D);
    if (o.g != null && o.g.size !== 0) {
      let l = o.i;
      for (const d of o.g.values())
        l = l.concat(d.D);
      return l;
    }
    return R(o.i);
  }
  function dg(o) {
    if (o.V && typeof o.V == "function")
      return o.V();
    if (typeof Map < "u" && o instanceof Map || typeof Set < "u" && o instanceof Set)
      return Array.from(o.values());
    if (typeof o == "string")
      return o.split("");
    if (u(o)) {
      for (var l = [], d = o.length, g = 0; g < d; g++)
        l.push(o[g]);
      return l;
    }
    l = [], d = 0;
    for (g in o)
      l[d++] = o[g];
    return l;
  }
  function fg(o) {
    if (o.na && typeof o.na == "function")
      return o.na();
    if (!o.V || typeof o.V != "function") {
      if (typeof Map < "u" && o instanceof Map)
        return Array.from(o.keys());
      if (!(typeof Set < "u" && o instanceof Set)) {
        if (u(o) || typeof o == "string") {
          var l = [];
          o = o.length;
          for (var d = 0; d < o; d++)
            l.push(d);
          return l;
        }
        l = [], d = 0;
        for (const g in o)
          l[d++] = g;
        return l;
      }
    }
  }
  function vu(o, l) {
    if (o.forEach && typeof o.forEach == "function")
      o.forEach(l, void 0);
    else if (u(o) || typeof o == "string")
      Array.prototype.forEach.call(o, l, void 0);
    else
      for (var d = fg(o), g = dg(o), k = g.length, x = 0; x < k; x++)
        l.call(void 0, g[x], d && d[x], o);
  }
  var wu = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
  function pg(o, l) {
    if (o) {
      o = o.split("&");
      for (var d = 0; d < o.length; d++) {
        var g = o[d].indexOf("="), k = null;
        if (0 <= g) {
          var x = o[d].substring(0, g);
          k = o[d].substring(g + 1);
        } else
          x = o[d];
        l(x, k ? decodeURIComponent(k.replace(/\+/g, " ")) : "");
      }
    }
  }
  function _n(o) {
    if (this.g = this.o = this.j = "", this.s = null, this.m = this.l = "", this.h = !1, o instanceof _n) {
      this.h = o.h, Li(this, o.j), this.o = o.o, this.g = o.g, Fi(this, o.s), this.l = o.l;
      var l = o.i, d = new Lr();
      d.i = l.i, l.g && (d.g = new Map(l.g), d.h = l.h), Eu(this, d), this.m = o.m;
    } else
      o && (l = String(o).match(wu)) ? (this.h = !1, Li(this, l[1] || "", !0), this.o = Vr(l[2] || ""), this.g = Vr(l[3] || "", !0), Fi(this, l[4]), this.l = Vr(l[5] || "", !0), Eu(this, l[6] || "", !0), this.m = Vr(l[7] || "")) : (this.h = !1, this.i = new Lr(null, this.h));
  }
  _n.prototype.toString = function() {
    var o = [], l = this.j;
    l && o.push(Mr(l, Tu, !0), ":");
    var d = this.g;
    return (d || l == "file") && (o.push("//"), (l = this.o) && o.push(Mr(l, Tu, !0), "@"), o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), d = this.s, d != null && o.push(":", String(d))), (d = this.l) && (this.g && d.charAt(0) != "/" && o.push("/"), o.push(Mr(d, d.charAt(0) == "/" ? yg : gg, !0))), (d = this.i.toString()) && o.push("?", d), (d = this.m) && o.push("#", Mr(d, vg)), o.join("");
  };
  function Ct(o) {
    return new _n(o);
  }
  function Li(o, l, d) {
    o.j = d ? Vr(l, !0) : l, o.j && (o.j = o.j.replace(/:$/, ""));
  }
  function Fi(o, l) {
    if (l) {
      if (l = Number(l), isNaN(l) || 0 > l)
        throw Error("Bad port number " + l);
      o.s = l;
    } else
      o.s = null;
  }
  function Eu(o, l, d) {
    l instanceof Lr ? (o.i = l, wg(o.i, o.h)) : (d || (l = Mr(l, _g)), o.i = new Lr(l, o.h));
  }
  function ce(o, l, d) {
    o.i.set(l, d);
  }
  function Ui(o) {
    return ce(o, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)), o;
  }
  function Vr(o, l) {
    return o ? l ? decodeURI(o.replace(/%25/g, "%2525")) : decodeURIComponent(o) : "";
  }
  function Mr(o, l, d) {
    return typeof o == "string" ? (o = encodeURI(o).replace(l, mg), d && (o = o.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), o) : null;
  }
  function mg(o) {
    return o = o.charCodeAt(0), "%" + (o >> 4 & 15).toString(16) + (o & 15).toString(16);
  }
  var Tu = /[#\/\?@]/g, gg = /[#\?:]/g, yg = /[#\?]/g, _g = /[#\?@]/g, vg = /#/g;
  function Lr(o, l) {
    this.h = this.g = null, this.i = o || null, this.j = !!l;
  }
  function Ht(o) {
    o.g || (o.g = /* @__PURE__ */ new Map(), o.h = 0, o.i && pg(o.i, function(l, d) {
      o.add(decodeURIComponent(l.replace(/\+/g, " ")), d);
    }));
  }
  n = Lr.prototype, n.add = function(o, l) {
    Ht(this), this.i = null, o = Kn(this, o);
    var d = this.g.get(o);
    return d || this.g.set(o, d = []), d.push(l), this.h += 1, this;
  };
  function Iu(o, l) {
    Ht(o), l = Kn(o, l), o.g.has(l) && (o.i = null, o.h -= o.g.get(l).length, o.g.delete(l));
  }
  function bu(o, l) {
    return Ht(o), l = Kn(o, l), o.g.has(l);
  }
  n.forEach = function(o, l) {
    Ht(this), this.g.forEach(function(d, g) {
      d.forEach(function(k) {
        o.call(l, k, g, this);
      }, this);
    }, this);
  }, n.na = function() {
    Ht(this);
    const o = Array.from(this.g.values()), l = Array.from(this.g.keys()), d = [];
    for (let g = 0; g < l.length; g++) {
      const k = o[g];
      for (let x = 0; x < k.length; x++)
        d.push(l[g]);
    }
    return d;
  }, n.V = function(o) {
    Ht(this);
    let l = [];
    if (typeof o == "string")
      bu(this, o) && (l = l.concat(this.g.get(Kn(this, o))));
    else {
      o = Array.from(this.g.values());
      for (let d = 0; d < o.length; d++)
        l = l.concat(o[d]);
    }
    return l;
  }, n.set = function(o, l) {
    return Ht(this), this.i = null, o = Kn(this, o), bu(this, o) && (this.h -= this.g.get(o).length), this.g.set(o, [l]), this.h += 1, this;
  }, n.get = function(o, l) {
    return o ? (o = this.V(o), 0 < o.length ? String(o[0]) : l) : l;
  };
  function Au(o, l, d) {
    Iu(o, l), 0 < d.length && (o.i = null, o.g.set(Kn(o, l), R(d)), o.h += d.length);
  }
  n.toString = function() {
    if (this.i)
      return this.i;
    if (!this.g)
      return "";
    const o = [], l = Array.from(this.g.keys());
    for (var d = 0; d < l.length; d++) {
      var g = l[d];
      const x = encodeURIComponent(String(g)), F = this.V(g);
      for (g = 0; g < F.length; g++) {
        var k = x;
        F[g] !== "" && (k += "=" + encodeURIComponent(String(F[g]))), o.push(k);
      }
    }
    return this.i = o.join("&");
  };
  function Kn(o, l) {
    return l = String(l), o.j && (l = l.toLowerCase()), l;
  }
  function wg(o, l) {
    l && !o.j && (Ht(o), o.i = null, o.g.forEach(function(d, g) {
      var k = g.toLowerCase();
      g != k && (Iu(this, g), Au(this, k, d));
    }, o)), o.j = l;
  }
  function Eg(o, l) {
    const d = new Dr();
    if (c.Image) {
      const g = new Image();
      g.onload = w(Wt, d, "TestLoadImage: loaded", !0, l, g), g.onerror = w(Wt, d, "TestLoadImage: error", !1, l, g), g.onabort = w(Wt, d, "TestLoadImage: abort", !1, l, g), g.ontimeout = w(Wt, d, "TestLoadImage: timeout", !1, l, g), c.setTimeout(function() {
        g.ontimeout && g.ontimeout();
      }, 1e4), g.src = o;
    } else
      l(!1);
  }
  function Tg(o, l) {
    const d = new Dr(), g = new AbortController(), k = setTimeout(() => {
      g.abort(), Wt(d, "TestPingServer: timeout", !1, l);
    }, 1e4);
    fetch(o, { signal: g.signal }).then((x) => {
      clearTimeout(k), x.ok ? Wt(d, "TestPingServer: ok", !0, l) : Wt(d, "TestPingServer: server error", !1, l);
    }).catch(() => {
      clearTimeout(k), Wt(d, "TestPingServer: error", !1, l);
    });
  }
  function Wt(o, l, d, g, k) {
    try {
      k && (k.onload = null, k.onerror = null, k.onabort = null, k.ontimeout = null), g(d);
    } catch {
    }
  }
  function Ig() {
    this.g = new sg();
  }
  function bg(o, l, d) {
    const g = d || "";
    try {
      vu(o, function(k, x) {
        let F = k;
        h(k) && (F = wo(k)), l.push(g + x + "=" + encodeURIComponent(F));
      });
    } catch (k) {
      throw l.push(g + "type=" + encodeURIComponent("_badmap")), k;
    }
  }
  function Fr(o) {
    this.l = o.Ub || null, this.j = o.eb || !1;
  }
  A(Fr, Eo), Fr.prototype.g = function() {
    return new $i(this.l, this.j);
  }, Fr.prototype.i = function(o) {
    return function() {
      return o;
    };
  }({});
  function $i(o, l) {
    De.call(this), this.D = o, this.o = l, this.m = void 0, this.status = this.readyState = 0, this.responseType = this.responseText = this.response = this.statusText = "", this.onreadystatechange = null, this.u = new Headers(), this.h = null, this.B = "GET", this.A = "", this.g = !1, this.v = this.j = this.l = null;
  }
  A($i, De), n = $i.prototype, n.open = function(o, l) {
    if (this.readyState != 0)
      throw this.abort(), Error("Error reopening a connection");
    this.B = o, this.A = l, this.readyState = 1, $r(this);
  }, n.send = function(o) {
    if (this.readyState != 1)
      throw this.abort(), Error("need to call open() first. ");
    this.g = !0;
    const l = { headers: this.u, method: this.B, credentials: this.m, cache: void 0 };
    o && (l.body = o), (this.D || c).fetch(new Request(this.A, l)).then(this.Sa.bind(this), this.ga.bind(this));
  }, n.abort = function() {
    this.response = this.responseText = "", this.u = new Headers(), this.status = 0, this.j && this.j.cancel("Request was aborted.").catch(() => {
    }), 1 <= this.readyState && this.g && this.readyState != 4 && (this.g = !1, Ur(this)), this.readyState = 0;
  }, n.Sa = function(o) {
    if (this.g && (this.l = o, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = o.headers, this.readyState = 2, $r(this)), this.g && (this.readyState = 3, $r(this), this.g)))
      if (this.responseType === "arraybuffer")
        o.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this));
      else if (typeof c.ReadableStream < "u" && "body" in o) {
        if (this.j = o.body.getReader(), this.o) {
          if (this.responseType)
            throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
          this.response = [];
        } else
          this.response = this.responseText = "", this.v = new TextDecoder();
        Su(this);
      } else
        o.text().then(this.Ra.bind(this), this.ga.bind(this));
  };
  function Su(o) {
    o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o));
  }
  n.Pa = function(o) {
    if (this.g) {
      if (this.o && o.value)
        this.response.push(o.value);
      else if (!this.o) {
        var l = o.value ? o.value : new Uint8Array(0);
        (l = this.v.decode(l, { stream: !o.done })) && (this.response = this.responseText += l);
      }
      o.done ? Ur(this) : $r(this), this.readyState == 3 && Su(this);
    }
  }, n.Ra = function(o) {
    this.g && (this.response = this.responseText = o, Ur(this));
  }, n.Qa = function(o) {
    this.g && (this.response = o, Ur(this));
  }, n.ga = function() {
    this.g && Ur(this);
  };
  function Ur(o) {
    o.readyState = 4, o.l = null, o.j = null, o.v = null, $r(o);
  }
  n.setRequestHeader = function(o, l) {
    this.u.append(o, l);
  }, n.getResponseHeader = function(o) {
    return this.h && this.h.get(o.toLowerCase()) || "";
  }, n.getAllResponseHeaders = function() {
    if (!this.h)
      return "";
    const o = [], l = this.h.entries();
    for (var d = l.next(); !d.done; )
      d = d.value, o.push(d[0] + ": " + d[1]), d = l.next();
    return o.join(`\r
`);
  };
  function $r(o) {
    o.onreadystatechange && o.onreadystatechange.call(o);
  }
  Object.defineProperty($i.prototype, "withCredentials", { get: function() {
    return this.m === "include";
  }, set: function(o) {
    this.m = o ? "include" : "same-origin";
  } });
  function Ru(o) {
    let l = "";
    return M(o, function(d, g) {
      l += g, l += ":", l += d, l += `\r
`;
    }), l;
  }
  function Oo(o, l, d) {
    e: {
      for (g in d) {
        var g = !1;
        break e;
      }
      g = !0;
    }
    g || (d = Ru(d), typeof o == "string" ? d != null && encodeURIComponent(String(d)) : ce(o, l, d));
  }
  function he(o) {
    De.call(this), this.headers = /* @__PURE__ */ new Map(), this.o = o || null, this.h = !1, this.v = this.g = null, this.D = "", this.m = 0, this.l = "", this.j = this.B = this.u = this.A = !1, this.I = null, this.H = "", this.J = !1;
  }
  A(he, De);
  var Ag = /^https?$/i, Sg = ["POST", "PUT"];
  n = he.prototype, n.Ha = function(o) {
    this.J = o;
  }, n.ea = function(o, l, d, g) {
    if (this.g)
      throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + o);
    l = l ? l.toUpperCase() : "GET", this.D = o, this.l = "", this.m = 0, this.A = !1, this.h = !0, this.g = this.o ? this.o.g() : bo.g(), this.v = this.o ? nu(this.o) : nu(bo), this.g.onreadystatechange = _(this.Ea, this);
    try {
      this.B = !0, this.g.open(l, String(o), !0), this.B = !1;
    } catch (x) {
      Cu(this, x);
      return;
    }
    if (o = d || "", d = new Map(this.headers), g)
      if (Object.getPrototypeOf(g) === Object.prototype)
        for (var k in g)
          d.set(k, g[k]);
      else if (typeof g.keys == "function" && typeof g.get == "function")
        for (const x of g.keys())
          d.set(x, g.get(x));
      else
        throw Error("Unknown input type for opt_headers: " + String(g));
    g = Array.from(d.keys()).find((x) => x.toLowerCase() == "content-type"), k = c.FormData && o instanceof c.FormData, !(0 <= Array.prototype.indexOf.call(Sg, l, void 0)) || g || k || d.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    for (const [x, F] of d)
      this.g.setRequestHeader(x, F);
    this.H && (this.g.responseType = this.H), "withCredentials" in this.g && this.g.withCredentials !== this.J && (this.g.withCredentials = this.J);
    try {
      Ou(this), this.u = !0, this.g.send(o), this.u = !1;
    } catch (x) {
      Cu(this, x);
    }
  };
  function Cu(o, l) {
    o.h = !1, o.g && (o.j = !0, o.g.abort(), o.j = !1), o.l = l, o.m = 5, Pu(o), ji(o);
  }
  function Pu(o) {
    o.A || (o.A = !0, Ue(o, "complete"), Ue(o, "error"));
  }
  n.abort = function(o) {
    this.g && this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1, this.m = o || 7, Ue(this, "complete"), Ue(this, "abort"), ji(this));
  }, n.N = function() {
    this.g && (this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1), ji(this, !0)), he.aa.N.call(this);
  }, n.Ea = function() {
    this.s || (this.B || this.u || this.j ? ku(this) : this.bb());
  }, n.bb = function() {
    ku(this);
  };
  function ku(o) {
    if (o.h && typeof a < "u" && (!o.v[1] || Pt(o) != 4 || o.Z() != 2)) {
      if (o.u && Pt(o) == 4)
        Jc(o.Ea, 0, o);
      else if (Ue(o, "readystatechange"), Pt(o) == 4) {
        o.h = !1;
        try {
          const F = o.Z();
          e:
            switch (F) {
              case 200:
              case 201:
              case 202:
              case 204:
              case 206:
              case 304:
              case 1223:
                var l = !0;
                break e;
              default:
                l = !1;
            }
          var d;
          if (!(d = l)) {
            var g;
            if (g = F === 0) {
              var k = String(o.D).match(wu)[1] || null;
              !k && c.self && c.self.location && (k = c.self.location.protocol.slice(0, -1)), g = !Ag.test(k ? k.toLowerCase() : "");
            }
            d = g;
          }
          if (d)
            Ue(o, "complete"), Ue(o, "success");
          else {
            o.m = 6;
            try {
              var x = 2 < Pt(o) ? o.g.statusText : "";
            } catch {
              x = "";
            }
            o.l = x + " [" + o.Z() + "]", Pu(o);
          }
        } finally {
          ji(o);
        }
      }
    }
  }
  function ji(o, l) {
    if (o.g) {
      Ou(o);
      const d = o.g, g = o.v[0] ? () => {
      } : null;
      o.g = null, o.v = null, l || Ue(o, "ready");
      try {
        d.onreadystatechange = g;
      } catch {
      }
    }
  }
  function Ou(o) {
    o.I && (c.clearTimeout(o.I), o.I = null);
  }
  n.isActive = function() {
    return !!this.g;
  };
  function Pt(o) {
    return o.g ? o.g.readyState : 0;
  }
  n.Z = function() {
    try {
      return 2 < Pt(this) ? this.g.status : -1;
    } catch {
      return -1;
    }
  }, n.oa = function() {
    try {
      return this.g ? this.g.responseText : "";
    } catch {
      return "";
    }
  }, n.Oa = function(o) {
    if (this.g) {
      var l = this.g.responseText;
      return o && l.indexOf(o) == 0 && (l = l.substring(o.length)), ig(l);
    }
  };
  function Nu(o) {
    try {
      if (!o.g)
        return null;
      if ("response" in o.g)
        return o.g.response;
      switch (o.H) {
        case "":
        case "text":
          return o.g.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in o.g)
            return o.g.mozResponseArrayBuffer;
      }
      return null;
    } catch {
      return null;
    }
  }
  function Rg(o) {
    const l = {};
    o = (o.g && 2 <= Pt(o) && o.g.getAllResponseHeaders() || "").split(`\r
`);
    for (let g = 0; g < o.length; g++) {
      if (D(o[g]))
        continue;
      var d = S(o[g]);
      const k = d[0];
      if (d = d[1], typeof d != "string")
        continue;
      d = d.trim();
      const x = l[k] || [];
      l[k] = x, x.push(d);
    }
    T(l, function(g) {
      return g.join(", ");
    });
  }
  n.Ba = function() {
    return this.m;
  }, n.Ka = function() {
    return typeof this.l == "string" ? this.l : String(this.l);
  };
  function jr(o, l, d) {
    return d && d.internalChannelParams && d.internalChannelParams[o] || l;
  }
  function Du(o) {
    this.Aa = 0, this.i = [], this.j = new Dr(), this.ia = this.qa = this.I = this.W = this.g = this.ya = this.D = this.H = this.m = this.S = this.o = null, this.Ya = this.U = 0, this.Va = jr("failFast", !1, o), this.F = this.C = this.u = this.s = this.l = null, this.X = !0, this.za = this.T = -1, this.Y = this.v = this.B = 0, this.Ta = jr("baseRetryDelayMs", 5e3, o), this.cb = jr("retryDelaySeedMs", 1e4, o), this.Wa = jr("forwardChannelMaxRetries", 2, o), this.wa = jr("forwardChannelRequestTimeoutMs", 2e4, o), this.pa = o && o.xmlHttpFactory || void 0, this.Xa = o && o.Tb || void 0, this.Ca = o && o.useFetchStreams || !1, this.L = void 0, this.J = o && o.supportsCrossDomainXhr || !1, this.K = "", this.h = new pu(o && o.concurrentRequestLimit), this.Da = new Ig(), this.P = o && o.fastHandshake || !1, this.O = o && o.encodeInitMessageHeaders || !1, this.P && this.O && (this.O = !1), this.Ua = o && o.Rb || !1, o && o.xa && this.j.xa(), o && o.forceLongPolling && (this.X = !1), this.ba = !this.P && this.X && o && o.detectBufferingProxy || !1, this.ja = void 0, o && o.longPollingTimeout && 0 < o.longPollingTimeout && (this.ja = o.longPollingTimeout), this.ca = void 0, this.R = 0, this.M = !1, this.ka = this.A = null;
  }
  n = Du.prototype, n.la = 8, n.G = 1, n.connect = function(o, l, d, g) {
    $e(0), this.W = o, this.H = l || {}, d && g !== void 0 && (this.H.OSID = d, this.H.OAID = g), this.F = this.X, this.I = Bu(this, null, this.W), zi(this);
  };
  function No(o) {
    if (xu(o), o.G == 3) {
      var l = o.U++, d = Ct(o.I);
      if (ce(d, "SID", o.K), ce(d, "RID", l), ce(d, "TYPE", "terminate"), Br(o, d), l = new qt(o, o.j, l), l.L = 2, l.v = Ui(Ct(d)), d = !1, c.navigator && c.navigator.sendBeacon)
        try {
          d = c.navigator.sendBeacon(l.v.toString(), "");
        } catch {
        }
      !d && c.Image && (new Image().src = l.v, d = !0), d || (l.g = zu(l.j, null), l.g.ea(l.v)), l.F = Date.now(), Mi(l);
    }
    ju(o);
  }
  function Bi(o) {
    o.g && (xo(o), o.g.cancel(), o.g = null);
  }
  function xu(o) {
    Bi(o), o.u && (c.clearTimeout(o.u), o.u = null), qi(o), o.h.cancel(), o.s && (typeof o.s == "number" && c.clearTimeout(o.s), o.s = null);
  }
  function zi(o) {
    if (!mu(o.h) && !o.s) {
      o.s = !0;
      var l = o.Ga;
      Ge || pn(), ut || (Ge(), ut = !0), jt.add(l, o), o.B = 0;
    }
  }
  function Cg(o, l) {
    return gu(o.h) >= o.h.j - (o.s ? 1 : 0) ? !1 : o.s ? (o.i = l.D.concat(o.i), !0) : o.G == 1 || o.G == 2 || o.B >= (o.Va ? 0 : o.Wa) ? !1 : (o.s = Nr(_(o.Ga, o, l), $u(o, o.B)), o.B++, !0);
  }
  n.Ga = function(o) {
    if (this.s)
      if (this.s = null, this.G == 1) {
        if (!o) {
          this.U = Math.floor(1e5 * Math.random()), o = this.U++;
          const k = new qt(this, this.j, o);
          let x = this.o;
          if (this.S && (x ? (x = y(x), b(x, this.S)) : x = this.S), this.m !== null || this.O || (k.H = x, x = null), this.P)
            e: {
              for (var l = 0, d = 0; d < this.i.length; d++) {
                t: {
                  var g = this.i[d];
                  if ("__data__" in g.map && (g = g.map.__data__, typeof g == "string")) {
                    g = g.length;
                    break t;
                  }
                  g = void 0;
                }
                if (g === void 0)
                  break;
                if (l += g, 4096 < l) {
                  l = d;
                  break e;
                }
                if (l === 4096 || d === this.i.length - 1) {
                  l = d + 1;
                  break e;
                }
              }
              l = 1e3;
            }
          else
            l = 1e3;
          l = Mu(this, k, l), d = Ct(this.I), ce(d, "RID", o), ce(d, "CVER", 22), this.D && ce(d, "X-HTTP-Session-Id", this.D), Br(this, d), x && (this.O ? l = "headers=" + encodeURIComponent(String(Ru(x))) + "&" + l : this.m && Oo(d, this.m, x)), ko(this.h, k), this.Ua && ce(d, "TYPE", "init"), this.P ? (ce(d, "$req", l), ce(d, "SID", "null"), k.T = !0, So(k, d, null)) : So(k, d, l), this.G = 2;
        }
      } else
        this.G == 3 && (o ? Vu(this, o) : this.i.length == 0 || mu(this.h) || Vu(this));
  };
  function Vu(o, l) {
    var d;
    l ? d = l.l : d = o.U++;
    const g = Ct(o.I);
    ce(g, "SID", o.K), ce(g, "RID", d), ce(g, "AID", o.T), Br(o, g), o.m && o.o && Oo(g, o.m, o.o), d = new qt(o, o.j, d, o.B + 1), o.m === null && (d.H = o.o), l && (o.i = l.D.concat(o.i)), l = Mu(o, d, 1e3), d.I = Math.round(0.5 * o.wa) + Math.round(0.5 * o.wa * Math.random()), ko(o.h, d), So(d, g, l);
  }
  function Br(o, l) {
    o.H && M(o.H, function(d, g) {
      ce(l, g, d);
    }), o.l && vu({}, function(d, g) {
      ce(l, g, d);
    });
  }
  function Mu(o, l, d) {
    d = Math.min(o.i.length, d);
    var g = o.l ? _(o.l.Na, o.l, o) : null;
    e: {
      var k = o.i;
      let x = -1;
      for (; ; ) {
        const F = ["count=" + d];
        x == -1 ? 0 < d ? (x = k[0].g, F.push("ofs=" + x)) : x = 0 : F.push("ofs=" + x);
        let oe = !0;
        for (let Ae = 0; Ae < d; Ae++) {
          let Z = k[Ae].g;
          const xe = k[Ae].map;
          if (Z -= x, 0 > Z)
            x = Math.max(0, k[Ae].g - 100), oe = !1;
          else
            try {
              bg(xe, F, "req" + Z + "_");
            } catch {
              g && g(xe);
            }
        }
        if (oe) {
          g = F.join("&");
          break e;
        }
      }
    }
    return o = o.i.splice(0, d), l.D = o, g;
  }
  function Lu(o) {
    if (!o.g && !o.u) {
      o.Y = 1;
      var l = o.Fa;
      Ge || pn(), ut || (Ge(), ut = !0), jt.add(l, o), o.v = 0;
    }
  }
  function Do(o) {
    return o.g || o.u || 3 <= o.v ? !1 : (o.Y++, o.u = Nr(_(o.Fa, o), $u(o, o.v)), o.v++, !0);
  }
  n.Fa = function() {
    if (this.u = null, Fu(this), this.ba && !(this.M || this.g == null || 0 >= this.R)) {
      var o = 2 * this.R;
      this.j.info("BP detection timer enabled: " + o), this.A = Nr(_(this.ab, this), o);
    }
  }, n.ab = function() {
    this.A && (this.A = null, this.j.info("BP detection timeout reached."), this.j.info("Buffering proxy detected and switch to long-polling!"), this.F = !1, this.M = !0, $e(10), Bi(this), Fu(this));
  };
  function xo(o) {
    o.A != null && (c.clearTimeout(o.A), o.A = null);
  }
  function Fu(o) {
    o.g = new qt(o, o.j, "rpc", o.Y), o.m === null && (o.g.H = o.o), o.g.O = 0;
    var l = Ct(o.qa);
    ce(l, "RID", "rpc"), ce(l, "SID", o.K), ce(l, "AID", o.T), ce(l, "CI", o.F ? "0" : "1"), !o.F && o.ja && ce(l, "TO", o.ja), ce(l, "TYPE", "xmlhttp"), Br(o, l), o.m && o.o && Oo(l, o.m, o.o), o.L && (o.g.I = o.L);
    var d = o.g;
    o = o.ia, d.L = 1, d.v = Ui(Ct(l)), d.m = null, d.P = !0, hu(d, o);
  }
  n.Za = function() {
    this.C != null && (this.C = null, Bi(this), Do(this), $e(19));
  };
  function qi(o) {
    o.C != null && (c.clearTimeout(o.C), o.C = null);
  }
  function Uu(o, l) {
    var d = null;
    if (o.g == l) {
      qi(o), xo(o), o.g = null;
      var g = 2;
    } else if (Po(o.h, l))
      d = l.D, yu(o.h, l), g = 1;
    else
      return;
    if (o.G != 0) {
      if (l.o)
        if (g == 1) {
          d = l.m ? l.m.length : 0, l = Date.now() - l.F;
          var k = o.B;
          g = Di(), Ue(g, new au(g, d)), zi(o);
        } else
          Lu(o);
      else if (k = l.s, k == 3 || k == 0 && 0 < l.X || !(g == 1 && Cg(o, l) || g == 2 && Do(o)))
        switch (d && 0 < d.length && (l = o.h, l.i = l.i.concat(d)), k) {
          case 1:
            vn(o, 5);
            break;
          case 4:
            vn(o, 10);
            break;
          case 3:
            vn(o, 6);
            break;
          default:
            vn(o, 2);
        }
    }
  }
  function $u(o, l) {
    let d = o.Ta + Math.floor(Math.random() * o.cb);
    return o.isActive() || (d *= 2), d * l;
  }
  function vn(o, l) {
    if (o.j.info("Error code " + l), l == 2) {
      var d = _(o.fb, o), g = o.Xa;
      const k = !g;
      g = new _n(g || "//www.google.com/images/cleardot.gif"), c.location && c.location.protocol == "http" || Li(g, "https"), Ui(g), k ? Eg(g.toString(), d) : Tg(g.toString(), d);
    } else
      $e(2);
    o.G = 0, o.l && o.l.sa(l), ju(o), xu(o);
  }
  n.fb = function(o) {
    o ? (this.j.info("Successfully pinged google.com"), $e(2)) : (this.j.info("Failed to ping google.com"), $e(1));
  };
  function ju(o) {
    if (o.G = 0, o.ka = [], o.l) {
      const l = _u(o.h);
      (l.length != 0 || o.i.length != 0) && (p(o.ka, l), p(o.ka, o.i), o.h.i.length = 0, R(o.i), o.i.length = 0), o.l.ra();
    }
  }
  function Bu(o, l, d) {
    var g = d instanceof _n ? Ct(d) : new _n(d);
    if (g.g != "")
      l && (g.g = l + "." + g.g), Fi(g, g.s);
    else {
      var k = c.location;
      g = k.protocol, l = l ? l + "." + k.hostname : k.hostname, k = +k.port;
      var x = new _n(null);
      g && Li(x, g), l && (x.g = l), k && Fi(x, k), d && (x.l = d), g = x;
    }
    return d = o.D, l = o.ya, d && l && ce(g, d, l), ce(g, "VER", o.la), Br(o, g), g;
  }
  function zu(o, l, d) {
    if (l && !o.J)
      throw Error("Can't create secondary domain capable XhrIo object.");
    return l = o.Ca && !o.pa ? new he(new Fr({ eb: d })) : new he(o.pa), l.Ha(o.J), l;
  }
  n.isActive = function() {
    return !!this.l && this.l.isActive(this);
  };
  function qu() {
  }
  n = qu.prototype, n.ua = function() {
  }, n.ta = function() {
  }, n.sa = function() {
  }, n.ra = function() {
  }, n.isActive = function() {
    return !0;
  }, n.Na = function() {
  };
  function Hi() {
  }
  Hi.prototype.g = function(o, l) {
    return new Qe(o, l);
  };
  function Qe(o, l) {
    De.call(this), this.g = new Du(l), this.l = o, this.h = l && l.messageUrlParams || null, o = l && l.messageHeaders || null, l && l.clientProtocolHeaderRequired && (o ? o["X-Client-Protocol"] = "webchannel" : o = { "X-Client-Protocol": "webchannel" }), this.g.o = o, o = l && l.initMessageHeaders || null, l && l.messageContentType && (o ? o["X-WebChannel-Content-Type"] = l.messageContentType : o = { "X-WebChannel-Content-Type": l.messageContentType }), l && l.va && (o ? o["X-WebChannel-Client-Profile"] = l.va : o = { "X-WebChannel-Client-Profile": l.va }), this.g.S = o, (o = l && l.Sb) && !D(o) && (this.g.m = o), this.v = l && l.supportsCrossDomainXhr || !1, this.u = l && l.sendRawJson || !1, (l = l && l.httpSessionIdParam) && !D(l) && (this.g.D = l, o = this.h, o !== null && l in o && (o = this.h, l in o && delete o[l])), this.j = new Gn(this);
  }
  A(Qe, De), Qe.prototype.m = function() {
    this.g.l = this.j, this.v && (this.g.J = !0), this.g.connect(this.l, this.h || void 0);
  }, Qe.prototype.close = function() {
    No(this.g);
  }, Qe.prototype.o = function(o) {
    var l = this.g;
    if (typeof o == "string") {
      var d = {};
      d.__data__ = o, o = d;
    } else
      this.u && (d = {}, d.__data__ = wo(o), o = d);
    l.i.push(new hg(l.Ya++, o)), l.G == 3 && zi(l);
  }, Qe.prototype.N = function() {
    this.g.l = null, delete this.j, No(this.g), delete this.g, Qe.aa.N.call(this);
  };
  function Hu(o) {
    To.call(this), o.__headers__ && (this.headers = o.__headers__, this.statusCode = o.__status__, delete o.__headers__, delete o.__status__);
    var l = o.__sm__;
    if (l) {
      e: {
        for (const d in l) {
          o = d;
          break e;
        }
        o = void 0;
      }
      (this.i = o) && (o = this.i, l = l !== null && o in l ? l[o] : void 0), this.data = l;
    } else
      this.data = o;
  }
  A(Hu, To);
  function Wu() {
    Io.call(this), this.status = 1;
  }
  A(Wu, Io);
  function Gn(o) {
    this.g = o;
  }
  A(Gn, qu), Gn.prototype.ua = function() {
    Ue(this.g, "a");
  }, Gn.prototype.ta = function(o) {
    Ue(this.g, new Hu(o));
  }, Gn.prototype.sa = function(o) {
    Ue(this.g, new Wu());
  }, Gn.prototype.ra = function() {
    Ue(this.g, "b");
  }, Hi.prototype.createWebChannel = Hi.prototype.g, Qe.prototype.send = Qe.prototype.o, Qe.prototype.open = Qe.prototype.m, Qe.prototype.close = Qe.prototype.close, Kf = function() {
    return new Hi();
  }, Wf = function() {
    return Di();
  }, Hf = gn, Ra = { mb: 0, pb: 1, qb: 2, Jb: 3, Ob: 4, Lb: 5, Mb: 6, Kb: 7, Ib: 8, Nb: 9, PROXY: 10, NOPROXY: 11, Gb: 12, Cb: 13, Db: 14, Bb: 15, Eb: 16, Fb: 17, ib: 18, hb: 19, jb: 20 }, xi.NO_ERROR = 0, xi.TIMEOUT = 8, xi.HTTP_ERROR = 6, fs = xi, cu.COMPLETE = "complete", qf = cu, ru.EventType = kr, kr.OPEN = "a", kr.CLOSE = "b", kr.ERROR = "c", kr.MESSAGE = "d", De.prototype.listen = De.prototype.K, Gr = ru, zf = Fr, he.prototype.listenOnce = he.prototype.L, he.prototype.getLastError = he.prototype.Ka, he.prototype.getLastErrorCode = he.prototype.Ba, he.prototype.getStatus = he.prototype.Z, he.prototype.getResponseJson = he.prototype.Oa, he.prototype.getResponseText = he.prototype.oa, he.prototype.send = he.prototype.ea, he.prototype.setWithCredentials = he.prototype.Ha, Bf = he;
}).apply(typeof ts < "u" ? ts : typeof self < "u" ? self : typeof window < "u" ? window : {});
const fh = "@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
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
class Le {
  constructor(e) {
    this.uid = e;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  /**
   * Returns a key representing this user, suitable for inclusion in a
   * dictionary.
   */
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(e) {
    return e.uid === this.uid;
  }
}
Le.UNAUTHENTICATED = new Le(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
Le.GOOGLE_CREDENTIALS = new Le("google-credentials-uid"), Le.FIRST_PARTY = new Le("first-party-uid"), Le.MOCK_USER = new Le("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
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
let vr = "10.12.5";
/**
 * @license
 * Copyright 2017 Google LLC
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
const Vn = new Ys("@firebase/firestore");
function zr() {
  return Vn.logLevel;
}
function U(n, ...e) {
  if (Vn.logLevel <= Y.DEBUG) {
    const t = e.map(lc);
    Vn.debug(`Firestore (${vr}): ${n}`, ...t);
  }
}
function Ft(n, ...e) {
  if (Vn.logLevel <= Y.ERROR) {
    const t = e.map(lc);
    Vn.error(`Firestore (${vr}): ${n}`, ...t);
  }
}
function ur(n, ...e) {
  if (Vn.logLevel <= Y.WARN) {
    const t = e.map(lc);
    Vn.warn(`Firestore (${vr}): ${n}`, ...t);
  }
}
function lc(n) {
  if (typeof n == "string")
    return n;
  try {
    /**
    * @license
    * Copyright 2020 Google LLC
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
    return function(t) {
      return JSON.stringify(t);
    }(n);
  } catch {
    return n;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function W(n = "Unexpected state") {
  const e = `FIRESTORE (${vr}) INTERNAL ASSERTION FAILED: ` + n;
  throw Ft(e), new Error(e);
}
function ae(n, e) {
  n || W();
}
function G(n, e) {
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
const L = {
  // Causes are copied from:
  // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
  /** Not an error; returned on success. */
  OK: "ok",
  /** The operation was cancelled (typically by the caller). */
  CANCELLED: "cancelled",
  /** Unknown error or an error from a different error domain. */
  UNKNOWN: "unknown",
  /**
   * Client specified an invalid argument. Note that this differs from
   * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
   * problematic regardless of the state of the system (e.g., a malformed file
   * name).
   */
  INVALID_ARGUMENT: "invalid-argument",
  /**
   * Deadline expired before operation could complete. For operations that
   * change the state of the system, this error may be returned even if the
   * operation has completed successfully. For example, a successful response
   * from a server could have been delayed long enough for the deadline to
   * expire.
   */
  DEADLINE_EXCEEDED: "deadline-exceeded",
  /** Some requested entity (e.g., file or directory) was not found. */
  NOT_FOUND: "not-found",
  /**
   * Some entity that we attempted to create (e.g., file or directory) already
   * exists.
   */
  ALREADY_EXISTS: "already-exists",
  /**
   * The caller does not have permission to execute the specified operation.
   * PERMISSION_DENIED must not be used for rejections caused by exhausting
   * some resource (use RESOURCE_EXHAUSTED instead for those errors).
   * PERMISSION_DENIED must not be used if the caller cannot be identified
   * (use UNAUTHENTICATED instead for those errors).
   */
  PERMISSION_DENIED: "permission-denied",
  /**
   * The request does not have valid authentication credentials for the
   * operation.
   */
  UNAUTHENTICATED: "unauthenticated",
  /**
   * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
   * entire file system is out of space.
   */
  RESOURCE_EXHAUSTED: "resource-exhausted",
  /**
   * Operation was rejected because the system is not in a state required for
   * the operation's execution. For example, directory to be deleted may be
   * non-empty, an rmdir operation is applied to a non-directory, etc.
   *
   * A litmus test that may help a service implementor in deciding
   * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
   *  (a) Use UNAVAILABLE if the client can retry just the failing call.
   *  (b) Use ABORTED if the client should retry at a higher-level
   *      (e.g., restarting a read-modify-write sequence).
   *  (c) Use FAILED_PRECONDITION if the client should not retry until
   *      the system state has been explicitly fixed. E.g., if an "rmdir"
   *      fails because the directory is non-empty, FAILED_PRECONDITION
   *      should be returned since the client should not retry unless
   *      they have first fixed up the directory by deleting files from it.
   *  (d) Use FAILED_PRECONDITION if the client performs conditional
   *      REST Get/Update/Delete on a resource and the resource on the
   *      server does not match the condition. E.g., conflicting
   *      read-modify-write on the same resource.
   */
  FAILED_PRECONDITION: "failed-precondition",
  /**
   * The operation was aborted, typically due to a concurrency issue like
   * sequencer check failures, transaction aborts, etc.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  ABORTED: "aborted",
  /**
   * Operation was attempted past the valid range. E.g., seeking or reading
   * past end of file.
   *
   * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
   * if the system state changes. For example, a 32-bit file system will
   * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
   * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
   * an offset past the current file size.
   *
   * There is a fair bit of overlap between FAILED_PRECONDITION and
   * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
   * when it applies so that callers who are iterating through a space can
   * easily look for an OUT_OF_RANGE error to detect when they are done.
   */
  OUT_OF_RANGE: "out-of-range",
  /** Operation is not implemented or not supported/enabled in this service. */
  UNIMPLEMENTED: "unimplemented",
  /**
   * Internal errors. Means some invariants expected by underlying System has
   * been broken. If you see one of these errors, Something is very broken.
   */
  INTERNAL: "internal",
  /**
   * The service is currently unavailable. This is a most likely a transient
   * condition and may be corrected by retrying with a backoff.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  UNAVAILABLE: "unavailable",
  /** Unrecoverable data loss or corruption. */
  DATA_LOSS: "data-loss"
};
class q extends at {
  /** @hideconstructor */
  constructor(e, t) {
    super(e, t), this.code = e, this.message = t, // HACK: We write a toString property directly because Error is not a real
    // class and so inheritance does not work correctly. We could alternatively
    // do the same "back-door inheritance" trick that FirebaseError does.
    this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class on {
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Gf {
  constructor(e, t) {
    this.user = t, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${e}`);
  }
}
class VI {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {
  }
  start(e, t) {
    e.enqueueRetryable(() => t(Le.UNAUTHENTICATED));
  }
  shutdown() {
  }
}
class MI {
  constructor(e) {
    this.token = e, /**
     * Stores the listener registered with setChangeListener()
     * This isn't actually necessary since the UID never changes, but we use this
     * to verify the listen contract is adhered to in tests.
     */
    this.changeListener = null;
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {
  }
  start(e, t) {
    this.changeListener = t, // Fire with initial user.
    e.enqueueRetryable(() => t(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class LI {
  constructor(e) {
    this.t = e, /** Tracks the current User. */
    this.currentUser = Le.UNAUTHENTICATED, /**
     * Counter used to detect if the token changed while a getToken request was
     * outstanding.
     */
    this.i = 0, this.forceRefresh = !1, this.auth = null;
  }
  start(e, t) {
    let r = this.i;
    const i = (u) => this.i !== r ? (r = this.i, t(u)) : Promise.resolve();
    let s = new on();
    this.o = () => {
      this.i++, this.currentUser = this.u(), s.resolve(), s = new on(), e.enqueueRetryable(() => i(this.currentUser));
    };
    const a = () => {
      const u = s;
      e.enqueueRetryable(async () => {
        await u.promise, await i(this.currentUser);
      });
    }, c = (u) => {
      U("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = u, this.auth.addAuthTokenListener(this.o), a();
    };
    this.t.onInit((u) => c(u)), // Our users can initialize Auth right after Firestore, so we give it
    // a chance to register itself with the component framework before we
    // determine whether to start up in unauthenticated mode.
    setTimeout(() => {
      if (!this.auth) {
        const u = this.t.getImmediate({
          optional: !0
        });
        u ? c(u) : (
          // If auth is still not available, proceed with `null` user
          (U("FirebaseAuthCredentialsProvider", "Auth not yet detected"), s.resolve(), s = new on())
        );
      }
    }, 0), a();
  }
  getToken() {
    const e = this.i, t = this.forceRefresh;
    return this.forceRefresh = !1, this.auth ? this.auth.getToken(t).then((r) => (
      // Cancel the request since the token changed while the request was
      // outstanding so the response is potentially for a previous user (which
      // user, we can't be sure).
      this.i !== e ? (U("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : r ? (ae(typeof r.accessToken == "string"), new Gf(r.accessToken, this.currentUser)) : null
    )) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.auth && this.auth.removeAuthTokenListener(this.o);
  }
  // Auth.getUid() can return null even with a user logged in. It is because
  // getUid() is synchronous, but the auth code populating Uid is asynchronous.
  // This method should only be called in the AuthTokenListener callback
  // to guarantee to get the actual user.
  u() {
    const e = this.auth && this.auth.getUid();
    return ae(e === null || typeof e == "string"), new Le(e);
  }
}
class FI {
  constructor(e, t, r) {
    this.l = e, this.h = t, this.P = r, this.type = "FirstParty", this.user = Le.FIRST_PARTY, this.I = /* @__PURE__ */ new Map();
  }
  /**
   * Gets an authorization token, using a provided factory function, or return
   * null.
   */
  T() {
    return this.P ? this.P() : null;
  }
  get headers() {
    this.I.set("X-Goog-AuthUser", this.l);
    const e = this.T();
    return e && this.I.set("Authorization", e), this.h && this.I.set("X-Goog-Iam-Authorization-Token", this.h), this.I;
  }
}
class UI {
  constructor(e, t, r) {
    this.l = e, this.h = t, this.P = r;
  }
  getToken() {
    return Promise.resolve(new FI(this.l, this.h, this.P));
  }
  start(e, t) {
    e.enqueueRetryable(() => t(Le.FIRST_PARTY));
  }
  shutdown() {
  }
  invalidateToken() {
  }
}
class $I {
  constructor(e) {
    this.value = e, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
}
class jI {
  constructor(e) {
    this.A = e, this.forceRefresh = !1, this.appCheck = null, this.R = null;
  }
  start(e, t) {
    const r = (s) => {
      s.error != null && U("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);
      const a = s.token !== this.R;
      return this.R = s.token, U("FirebaseAppCheckTokenProvider", `Received ${a ? "new" : "existing"} token.`), a ? t(s.token) : Promise.resolve();
    };
    this.o = (s) => {
      e.enqueueRetryable(() => r(s));
    };
    const i = (s) => {
      U("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = s, this.appCheck.addTokenListener(this.o);
    };
    this.A.onInit((s) => i(s)), // Our users can initialize AppCheck after Firestore, so we give it
    // a chance to register itself with the component framework.
    setTimeout(() => {
      if (!this.appCheck) {
        const s = this.A.getImmediate({
          optional: !0
        });
        s ? i(s) : (
          // If AppCheck is still not available, proceed without it.
          U("FirebaseAppCheckTokenProvider", "AppCheck not yet detected")
        );
      }
    }, 0);
  }
  getToken() {
    const e = this.forceRefresh;
    return this.forceRefresh = !1, this.appCheck ? this.appCheck.getToken(e).then((t) => t ? (ae(typeof t.token == "string"), this.R = t.token, new $I(t.token)) : null) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function BI(n) {
  const e = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof self < "u" && (self.crypto || self.msCrypto)
  ), t = new Uint8Array(n);
  if (e && typeof e.getRandomValues == "function")
    e.getRandomValues(t);
  else
    for (let r = 0; r < n; r++)
      t[r] = Math.floor(256 * Math.random());
  return t;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Qf {
  static newId() {
    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t = Math.floor(256 / e.length) * e.length;
    let r = "";
    for (; r.length < 20; ) {
      const i = BI(40);
      for (let s = 0; s < i.length; ++s)
        r.length < 20 && i[s] < t && (r += e.charAt(i[s] % e.length));
    }
    return r;
  }
}
function ee(n, e) {
  return n < e ? -1 : n > e ? 1 : 0;
}
function lr(n, e, t) {
  return n.length === e.length && n.every((r, i) => t(r, e[i]));
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Ee {
  /**
   * Creates a new timestamp.
   *
   * @param seconds - The number of seconds of UTC time since Unix epoch
   *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
   *     9999-12-31T23:59:59Z inclusive.
   * @param nanoseconds - The non-negative fractions of a second at nanosecond
   *     resolution. Negative second values with fractions must still have
   *     non-negative nanoseconds values that count forward in time. Must be
   *     from 0 to 999,999,999 inclusive.
   */
  constructor(e, t) {
    if (this.seconds = e, this.nanoseconds = t, t < 0)
      throw new q(L.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
    if (t >= 1e9)
      throw new q(L.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
    if (e < -62135596800)
      throw new q(L.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
    if (e >= 253402300800)
      throw new q(L.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
  }
  /**
   * Creates a new timestamp with the current date, with millisecond precision.
   *
   * @returns a new timestamp representing the current date.
   */
  static now() {
    return Ee.fromMillis(Date.now());
  }
  /**
   * Creates a new timestamp from the given date.
   *
   * @param date - The date to initialize the `Timestamp` from.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     date.
   */
  static fromDate(e) {
    return Ee.fromMillis(e.getTime());
  }
  /**
   * Creates a new timestamp from the given number of milliseconds.
   *
   * @param milliseconds - Number of milliseconds since Unix epoch
   *     1970-01-01T00:00:00Z.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     number of milliseconds.
   */
  static fromMillis(e) {
    const t = Math.floor(e / 1e3), r = Math.floor(1e6 * (e - 1e3 * t));
    return new Ee(t, r);
  }
  /**
   * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
   * causes a loss of precision since `Date` objects only support millisecond
   * precision.
   *
   * @returns JavaScript `Date` object representing the same point in time as
   *     this `Timestamp`, with millisecond precision.
   */
  toDate() {
    return new Date(this.toMillis());
  }
  /**
   * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
   * epoch). This operation causes a loss of precision.
   *
   * @returns The point in time corresponding to this timestamp, represented as
   *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
   */
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(e) {
    return this.seconds === e.seconds ? ee(this.nanoseconds, e.nanoseconds) : ee(this.seconds, e.seconds);
  }
  /**
   * Returns true if this `Timestamp` is equal to the provided one.
   *
   * @param other - The `Timestamp` to compare against.
   * @returns true if this `Timestamp` is equal to the provided one.
   */
  isEqual(e) {
    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
  }
  /** Returns a textual representation of this `Timestamp`. */
  toString() {
    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
  }
  /** Returns a JSON-serializable representation of this `Timestamp`. */
  toJSON() {
    return {
      seconds: this.seconds,
      nanoseconds: this.nanoseconds
    };
  }
  /**
   * Converts this object to a primitive string, which allows `Timestamp` objects
   * to be compared using the `>`, `<=`, `>=` and `>` operators.
   */
  valueOf() {
    const e = this.seconds - -62135596800;
    return String(e).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class K {
  constructor(e) {
    this.timestamp = e;
  }
  static fromTimestamp(e) {
    return new K(e);
  }
  static min() {
    return new K(new Ee(0, 0));
  }
  static max() {
    return new K(new Ee(253402300799, 999999999));
  }
  compareTo(e) {
    return this.timestamp._compareTo(e.timestamp);
  }
  isEqual(e) {
    return this.timestamp.isEqual(e.timestamp);
  }
  /** Returns a number representation of the version for use in spec tests. */
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class di {
  constructor(e, t, r) {
    t === void 0 ? t = 0 : t > e.length && W(), r === void 0 ? r = e.length - t : r > e.length - t && W(), this.segments = e, this.offset = t, this.len = r;
  }
  get length() {
    return this.len;
  }
  isEqual(e) {
    return di.comparator(this, e) === 0;
  }
  child(e) {
    const t = this.segments.slice(this.offset, this.limit());
    return e instanceof di ? e.forEach((r) => {
      t.push(r);
    }) : t.push(e), this.construct(t);
  }
  /** The index of one past the last segment of the path. */
  limit() {
    return this.offset + this.length;
  }
  popFirst(e) {
    return e = e === void 0 ? 1 : e, this.construct(this.segments, this.offset + e, this.length - e);
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(e) {
    return this.segments[this.offset + e];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(e) {
    if (e.length < this.length)
      return !1;
    for (let t = 0; t < this.length; t++)
      if (this.get(t) !== e.get(t))
        return !1;
    return !0;
  }
  isImmediateParentOf(e) {
    if (this.length + 1 !== e.length)
      return !1;
    for (let t = 0; t < this.length; t++)
      if (this.get(t) !== e.get(t))
        return !1;
    return !0;
  }
  forEach(e) {
    for (let t = this.offset, r = this.limit(); t < r; t++)
      e(this.segments[t]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(e, t) {
    const r = Math.min(e.length, t.length);
    for (let i = 0; i < r; i++) {
      const s = e.get(i), a = t.get(i);
      if (s < a)
        return -1;
      if (s > a)
        return 1;
    }
    return e.length < t.length ? -1 : e.length > t.length ? 1 : 0;
  }
}
class ue extends di {
  construct(e, t, r) {
    return new ue(e, t, r);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  /**
   * Returns a string representation of this path
   * where each path segment has been encoded with
   * `encodeURIComponent`.
   */
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join("/");
  }
  /**
   * Creates a resource path from the given slash-delimited string. If multiple
   * arguments are provided, all components are combined. Leading and trailing
   * slashes from all components are ignored.
   */
  static fromString(...e) {
    const t = [];
    for (const r of e) {
      if (r.indexOf("//") >= 0)
        throw new q(L.INVALID_ARGUMENT, `Invalid segment (${r}). Paths must not contain // in them.`);
      t.push(...r.split("/").filter((i) => i.length > 0));
    }
    return new ue(t);
  }
  static emptyPath() {
    return new ue([]);
  }
}
const zI = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class Ce extends di {
  construct(e, t, r) {
    return new Ce(e, t, r);
  }
  /**
   * Returns true if the string could be used as a segment in a field path
   * without escaping.
   */
  static isValidIdentifier(e) {
    return zI.test(e);
  }
  canonicalString() {
    return this.toArray().map((e) => (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), Ce.isValidIdentifier(e) || (e = "`" + e + "`"), e)).join(".");
  }
  toString() {
    return this.canonicalString();
  }
  /**
   * Returns true if this field references the key of a document.
   */
  isKeyField() {
    return this.length === 1 && this.get(0) === "__name__";
  }
  /**
   * The field designating the key of a document.
   */
  static keyField() {
    return new Ce(["__name__"]);
  }
  /**
   * Parses a field string from the given server-formatted string.
   *
   * - Splitting the empty string is not allowed (for now at least).
   * - Empty segments within the string (e.g. if there are two consecutive
   *   separators) are not allowed.
   *
   * TODO(b/37244157): we should make this more strict. Right now, it allows
   * non-identifier path components, even if they aren't escaped.
   */
  static fromServerFormat(e) {
    const t = [];
    let r = "", i = 0;
    const s = () => {
      if (r.length === 0)
        throw new q(L.INVALID_ARGUMENT, `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
      t.push(r), r = "";
    };
    let a = !1;
    for (; i < e.length; ) {
      const c = e[i];
      if (c === "\\") {
        if (i + 1 === e.length)
          throw new q(L.INVALID_ARGUMENT, "Path has trailing escape character: " + e);
        const u = e[i + 1];
        if (u !== "\\" && u !== "." && u !== "`")
          throw new q(L.INVALID_ARGUMENT, "Path has invalid escape sequence: " + e);
        r += u, i += 2;
      } else
        c === "`" ? (a = !a, i++) : c !== "." || a ? (r += c, i++) : (s(), i++);
    }
    if (s(), a)
      throw new q(L.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
    return new Ce(t);
  }
  static emptyPath() {
    return new Ce([]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class H {
  constructor(e) {
    this.path = e;
  }
  static fromPath(e) {
    return new H(ue.fromString(e));
  }
  static fromName(e) {
    return new H(ue.fromString(e).popFirst(5));
  }
  static empty() {
    return new H(ue.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  /** Returns true if the document is in the specified collectionId. */
  hasCollectionId(e) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
  }
  /** Returns the collection group (i.e. the name of the parent collection) for this key. */
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  /** Returns the fully qualified path to the parent collection. */
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(e) {
    return e !== null && ue.comparator(this.path, e.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(e, t) {
    return ue.comparator(e.path, t.path);
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0;
  }
  /**
   * Creates and returns a new document key with the given segments.
   *
   * @param segments - The segments of the path to the document
   * @returns A new instance of DocumentKey
   */
  static fromSegments(e) {
    return new H(new ue(e.slice()));
  }
}
function qI(n, e) {
  const t = n.toTimestamp().seconds, r = n.toTimestamp().nanoseconds + 1, i = K.fromTimestamp(r === 1e9 ? new Ee(t + 1, 0) : new Ee(t, r));
  return new un(i, H.empty(), e);
}
function HI(n) {
  return new un(n.readTime, n.key, -1);
}
class un {
  constructor(e, t, r) {
    this.readTime = e, this.documentKey = t, this.largestBatchId = r;
  }
  /** Returns an offset that sorts before all regular offsets. */
  static min() {
    return new un(K.min(), H.empty(), -1);
  }
  /** Returns an offset that sorts after all regular offsets. */
  static max() {
    return new un(K.max(), H.empty(), -1);
  }
}
function WI(n, e) {
  let t = n.readTime.compareTo(e.readTime);
  return t !== 0 ? t : (t = H.comparator(n.documentKey, e.documentKey), t !== 0 ? t : ee(n.largestBatchId, e.largestBatchId));
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const KI = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class GI {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(e) {
    this.onCommittedListeners.push(e);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((e) => e());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
async function Ai(n) {
  if (n.code !== L.FAILED_PRECONDITION || n.message !== KI)
    throw n;
  U("LocalStore", "Unexpectedly lost primary lease");
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class V {
  constructor(e) {
    this.nextCallback = null, this.catchCallback = null, // When the operation resolves, we'll set result or error and mark isDone.
    this.result = void 0, this.error = void 0, this.isDone = !1, // Set to true when .then() or .catch() are called and prevents additional
    // chaining.
    this.callbackAttached = !1, e((t) => {
      this.isDone = !0, this.result = t, this.nextCallback && // value should be defined unless T is Void, but we can't express
      // that in the type system.
      this.nextCallback(t);
    }, (t) => {
      this.isDone = !0, this.error = t, this.catchCallback && this.catchCallback(t);
    });
  }
  catch(e) {
    return this.next(void 0, e);
  }
  next(e, t) {
    return this.callbackAttached && W(), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(t, this.error) : this.wrapSuccess(e, this.result) : new V((r, i) => {
      this.nextCallback = (s) => {
        this.wrapSuccess(e, s).next(r, i);
      }, this.catchCallback = (s) => {
        this.wrapFailure(t, s).next(r, i);
      };
    });
  }
  toPromise() {
    return new Promise((e, t) => {
      this.next(e, t);
    });
  }
  wrapUserFunction(e) {
    try {
      const t = e();
      return t instanceof V ? t : V.resolve(t);
    } catch (t) {
      return V.reject(t);
    }
  }
  wrapSuccess(e, t) {
    return e ? this.wrapUserFunction(() => e(t)) : V.resolve(t);
  }
  wrapFailure(e, t) {
    return e ? this.wrapUserFunction(() => e(t)) : V.reject(t);
  }
  static resolve(e) {
    return new V((t, r) => {
      t(e);
    });
  }
  static reject(e) {
    return new V((t, r) => {
      r(e);
    });
  }
  static waitFor(e) {
    return new V((t, r) => {
      let i = 0, s = 0, a = !1;
      e.forEach((c) => {
        ++i, c.next(() => {
          ++s, a && s === i && t();
        }, (u) => r(u));
      }), a = !0, s === i && t();
    });
  }
  /**
   * Given an array of predicate functions that asynchronously evaluate to a
   * boolean, implements a short-circuiting `or` between the results. Predicates
   * will be evaluated until one of them returns `true`, then stop. The final
   * result will be whether any of them returned `true`.
   */
  static or(e) {
    let t = V.resolve(!1);
    for (const r of e)
      t = t.next((i) => i ? V.resolve(i) : r());
    return t;
  }
  static forEach(e, t) {
    const r = [];
    return e.forEach((i, s) => {
      r.push(t.call(this, i, s));
    }), this.waitFor(r);
  }
  /**
   * Concurrently map all array elements through asynchronous function.
   */
  static mapArray(e, t) {
    return new V((r, i) => {
      const s = e.length, a = new Array(s);
      let c = 0;
      for (let u = 0; u < s; u++) {
        const h = u;
        t(e[h]).next((f) => {
          a[h] = f, ++c, c === s && r(a);
        }, (f) => i(f));
      }
    });
  }
  /**
   * An alternative to recursive PersistencePromise calls, that avoids
   * potential memory problems from unbounded chains of promises.
   *
   * The `action` will be called repeatedly while `condition` is true.
   */
  static doWhile(e, t) {
    return new V((r, i) => {
      const s = () => {
        e() === !0 ? t().next(() => {
          s();
        }, i) : r();
      };
      s();
    });
  }
}
function QI(n) {
  const e = n.match(/Android ([\d.]+)/i), t = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
  return Number(t);
}
function Si(n) {
  return n.name === "IndexedDbTransactionError";
}
/**
 * @license
 * Copyright 2018 Google LLC
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
class hc {
  constructor(e, t) {
    this.previousValue = e, t && (t.sequenceNumberHandler = (r) => this.ie(r), this.se = (r) => t.writeSequenceNumber(r));
  }
  ie(e) {
    return this.previousValue = Math.max(e, this.previousValue), this.previousValue;
  }
  next() {
    const e = ++this.previousValue;
    return this.se && this.se(e), e;
  }
}
hc.oe = -1;
function to(n) {
  return n == null;
}
function Ps(n) {
  return n === 0 && 1 / n == -1 / 0;
}
function YI(n) {
  return typeof n == "number" && Number.isInteger(n) && !Ps(n) && n <= Number.MAX_SAFE_INTEGER && n >= Number.MIN_SAFE_INTEGER;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function ph(n) {
  let e = 0;
  for (const t in n)
    Object.prototype.hasOwnProperty.call(n, t) && e++;
  return e;
}
function wr(n, e) {
  for (const t in n)
    Object.prototype.hasOwnProperty.call(n, t) && e(t, n[t]);
}
function Yf(n) {
  for (const e in n)
    if (Object.prototype.hasOwnProperty.call(n, e))
      return !1;
  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class le {
  constructor(e, t) {
    this.comparator = e, this.root = t || Re.EMPTY;
  }
  // Returns a copy of the map, with the specified key/value added or replaced.
  insert(e, t) {
    return new le(this.comparator, this.root.insert(e, t, this.comparator).copy(null, null, Re.BLACK, null, null));
  }
  // Returns a copy of the map, with the specified key removed.
  remove(e) {
    return new le(this.comparator, this.root.remove(e, this.comparator).copy(null, null, Re.BLACK, null, null));
  }
  // Returns the value of the node with the given key, or null.
  get(e) {
    let t = this.root;
    for (; !t.isEmpty(); ) {
      const r = this.comparator(e, t.key);
      if (r === 0)
        return t.value;
      r < 0 ? t = t.left : r > 0 && (t = t.right);
    }
    return null;
  }
  // Returns the index of the element in this sorted map, or -1 if it doesn't
  // exist.
  indexOf(e) {
    let t = 0, r = this.root;
    for (; !r.isEmpty(); ) {
      const i = this.comparator(e, r.key);
      if (i === 0)
        return t + r.left.size;
      i < 0 ? r = r.left : (
        // Count all nodes left of the node plus the node itself
        (t += r.left.size + 1, r = r.right)
      );
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  // Returns the total number of nodes in the map.
  get size() {
    return this.root.size;
  }
  // Returns the minimum key in the map.
  minKey() {
    return this.root.minKey();
  }
  // Returns the maximum key in the map.
  maxKey() {
    return this.root.maxKey();
  }
  // Traverses the map in key order and calls the specified action function
  // for each key/value pair. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  inorderTraversal(e) {
    return this.root.inorderTraversal(e);
  }
  forEach(e) {
    this.inorderTraversal((t, r) => (e(t, r), !1));
  }
  toString() {
    const e = [];
    return this.inorderTraversal((t, r) => (e.push(`${t}:${r}`), !1)), `{${e.join(", ")}}`;
  }
  // Traverses the map in reverse key order and calls the specified action
  // function for each key/value pair. If action returns true, traversal is
  // aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  reverseTraversal(e) {
    return this.root.reverseTraversal(e);
  }
  // Returns an iterator over the SortedMap.
  getIterator() {
    return new ns(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(e) {
    return new ns(this.root, e, this.comparator, !1);
  }
  getReverseIterator() {
    return new ns(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(e) {
    return new ns(this.root, e, this.comparator, !0);
  }
}
class ns {
  constructor(e, t, r, i) {
    this.isReverse = i, this.nodeStack = [];
    let s = 1;
    for (; !e.isEmpty(); )
      if (s = t ? r(e.key, t) : 1, // flip the comparison if we're going in reverse
      t && i && (s *= -1), s < 0)
        e = this.isReverse ? e.left : e.right;
      else {
        if (s === 0) {
          this.nodeStack.push(e);
          break;
        }
        this.nodeStack.push(e), e = this.isReverse ? e.right : e.left;
      }
  }
  getNext() {
    let e = this.nodeStack.pop();
    const t = {
      key: e.key,
      value: e.value
    };
    if (this.isReverse)
      for (e = e.left; !e.isEmpty(); )
        this.nodeStack.push(e), e = e.right;
    else
      for (e = e.right; !e.isEmpty(); )
        this.nodeStack.push(e), e = e.left;
    return t;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (this.nodeStack.length === 0)
      return null;
    const e = this.nodeStack[this.nodeStack.length - 1];
    return {
      key: e.key,
      value: e.value
    };
  }
}
class Re {
  constructor(e, t, r, i, s) {
    this.key = e, this.value = t, this.color = r ?? Re.RED, this.left = i ?? Re.EMPTY, this.right = s ?? Re.EMPTY, this.size = this.left.size + 1 + this.right.size;
  }
  // Returns a copy of the current node, optionally replacing pieces of it.
  copy(e, t, r, i, s) {
    return new Re(e ?? this.key, t ?? this.value, r ?? this.color, i ?? this.left, s ?? this.right);
  }
  isEmpty() {
    return !1;
  }
  // Traverses the tree in key order and calls the specified action function
  // for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  inorderTraversal(e) {
    return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e);
  }
  // Traverses the tree in reverse key order and calls the specified action
  // function for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  reverseTraversal(e) {
    return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e);
  }
  // Returns the minimum node in the tree.
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  // Returns the maximum key in the tree.
  minKey() {
    return this.min().key;
  }
  // Returns the maximum key in the tree.
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  // Returns new tree, with the key/value added.
  insert(e, t, r) {
    let i = this;
    const s = r(e, i.key);
    return i = s < 0 ? i.copy(null, null, null, i.left.insert(e, t, r), null) : s === 0 ? i.copy(null, t, null, null, null) : i.copy(null, null, null, null, i.right.insert(e, t, r)), i.fixUp();
  }
  removeMin() {
    if (this.left.isEmpty())
      return Re.EMPTY;
    let e = this;
    return e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()), e = e.copy(null, null, null, e.left.removeMin(), null), e.fixUp();
  }
  // Returns new tree, with the specified item removed.
  remove(e, t) {
    let r, i = this;
    if (t(e, i.key) < 0)
      i.left.isEmpty() || i.left.isRed() || i.left.left.isRed() || (i = i.moveRedLeft()), i = i.copy(null, null, null, i.left.remove(e, t), null);
    else {
      if (i.left.isRed() && (i = i.rotateRight()), i.right.isEmpty() || i.right.isRed() || i.right.left.isRed() || (i = i.moveRedRight()), t(e, i.key) === 0) {
        if (i.right.isEmpty())
          return Re.EMPTY;
        r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.removeMin());
      }
      i = i.copy(null, null, null, null, i.right.remove(e, t));
    }
    return i.fixUp();
  }
  isRed() {
    return this.color;
  }
  // Returns new tree after performing any needed rotations.
  fixUp() {
    let e = this;
    return e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()), e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()), e.left.isRed() && e.right.isRed() && (e = e.colorFlip()), e;
  }
  moveRedLeft() {
    let e = this.colorFlip();
    return e.right.left.isRed() && (e = e.copy(null, null, null, null, e.right.rotateRight()), e = e.rotateLeft(), e = e.colorFlip()), e;
  }
  moveRedRight() {
    let e = this.colorFlip();
    return e.left.left.isRed() && (e = e.rotateRight(), e = e.colorFlip()), e;
  }
  rotateLeft() {
    const e = this.copy(null, null, Re.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  rotateRight() {
    const e = this.copy(null, null, Re.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }
  colorFlip() {
    const e = this.left.copy(null, null, !this.left.color, null, null), t = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e, t);
  }
  // For testing.
  checkMaxDepth() {
    const e = this.check();
    return Math.pow(2, e) <= this.size + 1;
  }
  // In a balanced RB tree, the black-depth (number of black nodes) from root to
  // leaves is equal on both sides.  This function verifies that or asserts.
  check() {
    if (this.isRed() && this.left.isRed() || this.right.isRed())
      throw W();
    const e = this.left.check();
    if (e !== this.right.check())
      throw W();
    return e + (this.isRed() ? 0 : 1);
  }
}
Re.EMPTY = null, Re.RED = !0, Re.BLACK = !1;
Re.EMPTY = new // Represents an empty node (a leaf node in the Red-Black Tree).
class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw W();
  }
  get value() {
    throw W();
  }
  get color() {
    throw W();
  }
  get left() {
    throw W();
  }
  get right() {
    throw W();
  }
  // Returns a copy of the current node.
  copy(e, t, r, i, s) {
    return this;
  }
  // Returns a copy of the tree, with the specified key/value added.
  insert(e, t, r) {
    return new Re(e, t);
  }
  // Returns a copy of the tree, with the specified key removed.
  remove(e, t) {
    return this;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(e) {
    return !1;
  }
  reverseTraversal(e) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return !1;
  }
  // For testing.
  checkMaxDepth() {
    return !0;
  }
  check() {
    return 0;
  }
}();
/**
 * @license
 * Copyright 2017 Google LLC
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
class Pe {
  constructor(e) {
    this.comparator = e, this.data = new le(this.comparator);
  }
  has(e) {
    return this.data.get(e) !== null;
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(e) {
    return this.data.indexOf(e);
  }
  /** Iterates elements in order defined by "comparator" */
  forEach(e) {
    this.data.inorderTraversal((t, r) => (e(t), !1));
  }
  /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */
  forEachInRange(e, t) {
    const r = this.data.getIteratorFrom(e[0]);
    for (; r.hasNext(); ) {
      const i = r.getNext();
      if (this.comparator(i.key, e[1]) >= 0)
        return;
      t(i.key);
    }
  }
  /**
   * Iterates over `elem`s such that: start &lt;= elem until false is returned.
   */
  forEachWhile(e, t) {
    let r;
    for (r = t !== void 0 ? this.data.getIteratorFrom(t) : this.data.getIterator(); r.hasNext(); )
      if (!e(r.getNext().key))
        return;
  }
  /** Finds the least element greater than or equal to `elem`. */
  firstAfterOrEqual(e) {
    const t = this.data.getIteratorFrom(e);
    return t.hasNext() ? t.getNext().key : null;
  }
  getIterator() {
    return new mh(this.data.getIterator());
  }
  getIteratorFrom(e) {
    return new mh(this.data.getIteratorFrom(e));
  }
  /** Inserts or updates an element */
  add(e) {
    return this.copy(this.data.remove(e).insert(e, !0));
  }
  /** Deletes an element */
  delete(e) {
    return this.has(e) ? this.copy(this.data.remove(e)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(e) {
    let t = this;
    return t.size < e.size && (t = e, e = this), e.forEach((r) => {
      t = t.add(r);
    }), t;
  }
  isEqual(e) {
    if (!(e instanceof Pe) || this.size !== e.size)
      return !1;
    const t = this.data.getIterator(), r = e.data.getIterator();
    for (; t.hasNext(); ) {
      const i = t.getNext().key, s = r.getNext().key;
      if (this.comparator(i, s) !== 0)
        return !1;
    }
    return !0;
  }
  toArray() {
    const e = [];
    return this.forEach((t) => {
      e.push(t);
    }), e;
  }
  toString() {
    const e = [];
    return this.forEach((t) => e.push(t)), "SortedSet(" + e.toString() + ")";
  }
  copy(e) {
    const t = new Pe(this.comparator);
    return t.data = e, t;
  }
}
class mh {
  constructor(e) {
    this.iter = e;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class dt {
  constructor(e) {
    this.fields = e, // TODO(dimond): validation of FieldMask
    // Sort the field mask to support `FieldMask.isEqual()` and assert below.
    e.sort(Ce.comparator);
  }
  static empty() {
    return new dt([]);
  }
  /**
   * Returns a new FieldMask object that is the result of adding all the given
   * fields paths to this field mask.
   */
  unionWith(e) {
    let t = new Pe(Ce.comparator);
    for (const r of this.fields)
      t = t.add(r);
    for (const r of e)
      t = t.add(r);
    return new dt(t.toArray());
  }
  /**
   * Verifies that `fieldPath` is included by at least one field in this field
   * mask.
   *
   * This is an O(n) operation, where `n` is the size of the field mask.
   */
  covers(e) {
    for (const t of this.fields)
      if (t.isPrefixOf(e))
        return !0;
    return !1;
  }
  isEqual(e) {
    return lr(this.fields, e.fields, (t, r) => t.isEqual(r));
  }
}
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
class Xf extends Error {
  constructor() {
    super(...arguments), this.name = "Base64DecodeError";
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Ne {
  constructor(e) {
    this.binaryString = e;
  }
  static fromBase64String(e) {
    const t = function(i) {
      try {
        return atob(i);
      } catch (s) {
        throw typeof DOMException < "u" && s instanceof DOMException ? new Xf("Invalid base64 string: " + s) : s;
      }
    }(e);
    return new Ne(t);
  }
  static fromUint8Array(e) {
    const t = (
      /**
      * Helper function to convert an Uint8array to a binary string.
      */
      function(i) {
        let s = "";
        for (let a = 0; a < i.length; ++a)
          s += String.fromCharCode(i[a]);
        return s;
      }(e)
    );
    return new Ne(t);
  }
  [Symbol.iterator]() {
    let e = 0;
    return {
      next: () => e < this.binaryString.length ? {
        value: this.binaryString.charCodeAt(e++),
        done: !1
      } : {
        value: void 0,
        done: !0
      }
    };
  }
  toBase64() {
    return function(t) {
      return btoa(t);
    }(this.binaryString);
  }
  toUint8Array() {
    return function(t) {
      const r = new Uint8Array(t.length);
      for (let i = 0; i < t.length; i++)
        r[i] = t.charCodeAt(i);
      return r;
    }(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(e) {
    return ee(this.binaryString, e.binaryString);
  }
  isEqual(e) {
    return this.binaryString === e.binaryString;
  }
}
Ne.EMPTY_BYTE_STRING = new Ne("");
const XI = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function ln(n) {
  if (ae(!!n), typeof n == "string") {
    let e = 0;
    const t = XI.exec(n);
    if (ae(!!t), t[1]) {
      let i = t[1];
      i = (i + "000000000").substr(0, 9), e = Number(i);
    }
    const r = new Date(n);
    return {
      seconds: Math.floor(r.getTime() / 1e3),
      nanos: e
    };
  }
  return {
    seconds: ve(n.seconds),
    nanos: ve(n.nanos)
  };
}
function ve(n) {
  return typeof n == "number" ? n : typeof n == "string" ? Number(n) : 0;
}
function Mn(n) {
  return typeof n == "string" ? Ne.fromBase64String(n) : Ne.fromUint8Array(n);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function dc(n) {
  var e, t;
  return ((t = (((e = n == null ? void 0 : n.mapValue) === null || e === void 0 ? void 0 : e.fields) || {}).__type__) === null || t === void 0 ? void 0 : t.stringValue) === "server_timestamp";
}
function fc(n) {
  const e = n.mapValue.fields.__previous_value__;
  return dc(e) ? fc(e) : e;
}
function fi(n) {
  const e = ln(n.mapValue.fields.__local_write_time__.timestampValue);
  return new Ee(e.seconds, e.nanos);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class JI {
  /**
   * Constructs a DatabaseInfo using the provided host, databaseId and
   * persistenceKey.
   *
   * @param databaseId - The database to use.
   * @param appId - The Firebase App Id.
   * @param persistenceKey - A unique identifier for this Firestore's local
   * storage (used in conjunction with the databaseId).
   * @param host - The Firestore backend host to connect to.
   * @param ssl - Whether to use SSL when connecting.
   * @param forceLongPolling - Whether to use the forceLongPolling option
   * when using WebChannel as the network transport.
   * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
   * option when using WebChannel as the network transport.
   * @param longPollingOptions Options that configure long-polling.
   * @param useFetchStreams Whether to use the Fetch API instead of
   * XMLHTTPRequest
   */
  constructor(e, t, r, i, s, a, c, u, h) {
    this.databaseId = e, this.appId = t, this.persistenceKey = r, this.host = i, this.ssl = s, this.forceLongPolling = a, this.autoDetectLongPolling = c, this.longPollingOptions = u, this.useFetchStreams = h;
  }
}
class pi {
  constructor(e, t) {
    this.projectId = e, this.database = t || "(default)";
  }
  static empty() {
    return new pi("", "");
  }
  get isDefaultDatabase() {
    return this.database === "(default)";
  }
  isEqual(e) {
    return e instanceof pi && e.projectId === this.projectId && e.database === this.database;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const rs = {
  mapValue: {
    fields: {
      __type__: {
        stringValue: "__max__"
      }
    }
  }
};
function Ln(n) {
  return "nullValue" in n ? 0 : "booleanValue" in n ? 1 : "integerValue" in n || "doubleValue" in n ? 2 : "timestampValue" in n ? 3 : "stringValue" in n ? 5 : "bytesValue" in n ? 6 : "referenceValue" in n ? 7 : "geoPointValue" in n ? 8 : "arrayValue" in n ? 9 : "mapValue" in n ? dc(n) ? 4 : ZI(n) ? 9007199254740991 : 10 : W();
}
function Et(n, e) {
  if (n === e)
    return !0;
  const t = Ln(n);
  if (t !== Ln(e))
    return !1;
  switch (t) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return n.booleanValue === e.booleanValue;
    case 4:
      return fi(n).isEqual(fi(e));
    case 3:
      return function(i, s) {
        if (typeof i.timestampValue == "string" && typeof s.timestampValue == "string" && i.timestampValue.length === s.timestampValue.length)
          return i.timestampValue === s.timestampValue;
        const a = ln(i.timestampValue), c = ln(s.timestampValue);
        return a.seconds === c.seconds && a.nanos === c.nanos;
      }(n, e);
    case 5:
      return n.stringValue === e.stringValue;
    case 6:
      return function(i, s) {
        return Mn(i.bytesValue).isEqual(Mn(s.bytesValue));
      }(n, e);
    case 7:
      return n.referenceValue === e.referenceValue;
    case 8:
      return function(i, s) {
        return ve(i.geoPointValue.latitude) === ve(s.geoPointValue.latitude) && ve(i.geoPointValue.longitude) === ve(s.geoPointValue.longitude);
      }(n, e);
    case 2:
      return function(i, s) {
        if ("integerValue" in i && "integerValue" in s)
          return ve(i.integerValue) === ve(s.integerValue);
        if ("doubleValue" in i && "doubleValue" in s) {
          const a = ve(i.doubleValue), c = ve(s.doubleValue);
          return a === c ? Ps(a) === Ps(c) : isNaN(a) && isNaN(c);
        }
        return !1;
      }(n, e);
    case 9:
      return lr(n.arrayValue.values || [], e.arrayValue.values || [], Et);
    case 10:
      return function(i, s) {
        const a = i.mapValue.fields || {}, c = s.mapValue.fields || {};
        if (ph(a) !== ph(c))
          return !1;
        for (const u in a)
          if (a.hasOwnProperty(u) && (c[u] === void 0 || !Et(a[u], c[u])))
            return !1;
        return !0;
      }(n, e);
    default:
      return W();
  }
}
function mi(n, e) {
  return (n.values || []).find((t) => Et(t, e)) !== void 0;
}
function hr(n, e) {
  if (n === e)
    return 0;
  const t = Ln(n), r = Ln(e);
  if (t !== r)
    return ee(t, r);
  switch (t) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return ee(n.booleanValue, e.booleanValue);
    case 2:
      return function(s, a) {
        const c = ve(s.integerValue || s.doubleValue), u = ve(a.integerValue || a.doubleValue);
        return c < u ? -1 : c > u ? 1 : c === u ? 0 : (
          // one or both are NaN.
          isNaN(c) ? isNaN(u) ? 0 : -1 : 1
        );
      }(n, e);
    case 3:
      return gh(n.timestampValue, e.timestampValue);
    case 4:
      return gh(fi(n), fi(e));
    case 5:
      return ee(n.stringValue, e.stringValue);
    case 6:
      return function(s, a) {
        const c = Mn(s), u = Mn(a);
        return c.compareTo(u);
      }(n.bytesValue, e.bytesValue);
    case 7:
      return function(s, a) {
        const c = s.split("/"), u = a.split("/");
        for (let h = 0; h < c.length && h < u.length; h++) {
          const f = ee(c[h], u[h]);
          if (f !== 0)
            return f;
        }
        return ee(c.length, u.length);
      }(n.referenceValue, e.referenceValue);
    case 8:
      return function(s, a) {
        const c = ee(ve(s.latitude), ve(a.latitude));
        return c !== 0 ? c : ee(ve(s.longitude), ve(a.longitude));
      }(n.geoPointValue, e.geoPointValue);
    case 9:
      return function(s, a) {
        const c = s.values || [], u = a.values || [];
        for (let h = 0; h < c.length && h < u.length; ++h) {
          const f = hr(c[h], u[h]);
          if (f)
            return f;
        }
        return ee(c.length, u.length);
      }(n.arrayValue, e.arrayValue);
    case 10:
      return function(s, a) {
        if (s === rs.mapValue && a === rs.mapValue)
          return 0;
        if (s === rs.mapValue)
          return 1;
        if (a === rs.mapValue)
          return -1;
        const c = s.fields || {}, u = Object.keys(c), h = a.fields || {}, f = Object.keys(h);
        u.sort(), f.sort();
        for (let m = 0; m < u.length && m < f.length; ++m) {
          const _ = ee(u[m], f[m]);
          if (_ !== 0)
            return _;
          const w = hr(c[u[m]], h[f[m]]);
          if (w !== 0)
            return w;
        }
        return ee(u.length, f.length);
      }(n.mapValue, e.mapValue);
    default:
      throw W();
  }
}
function gh(n, e) {
  if (typeof n == "string" && typeof e == "string" && n.length === e.length)
    return ee(n, e);
  const t = ln(n), r = ln(e), i = ee(t.seconds, r.seconds);
  return i !== 0 ? i : ee(t.nanos, r.nanos);
}
function dr(n) {
  return Ca(n);
}
function Ca(n) {
  return "nullValue" in n ? "null" : "booleanValue" in n ? "" + n.booleanValue : "integerValue" in n ? "" + n.integerValue : "doubleValue" in n ? "" + n.doubleValue : "timestampValue" in n ? function(t) {
    const r = ln(t);
    return `time(${r.seconds},${r.nanos})`;
  }(n.timestampValue) : "stringValue" in n ? n.stringValue : "bytesValue" in n ? function(t) {
    return Mn(t).toBase64();
  }(n.bytesValue) : "referenceValue" in n ? function(t) {
    return H.fromName(t).toString();
  }(n.referenceValue) : "geoPointValue" in n ? function(t) {
    return `geo(${t.latitude},${t.longitude})`;
  }(n.geoPointValue) : "arrayValue" in n ? function(t) {
    let r = "[", i = !0;
    for (const s of t.values || [])
      i ? i = !1 : r += ",", r += Ca(s);
    return r + "]";
  }(n.arrayValue) : "mapValue" in n ? function(t) {
    const r = Object.keys(t.fields || {}).sort();
    let i = "{", s = !0;
    for (const a of r)
      s ? s = !1 : i += ",", i += `${a}:${Ca(t.fields[a])}`;
    return i + "}";
  }(n.mapValue) : W();
}
function Pa(n) {
  return !!n && "integerValue" in n;
}
function pc(n) {
  return !!n && "arrayValue" in n;
}
function yh(n) {
  return !!n && "nullValue" in n;
}
function _h(n) {
  return !!n && "doubleValue" in n && isNaN(Number(n.doubleValue));
}
function ps(n) {
  return !!n && "mapValue" in n;
}
function ei(n) {
  if (n.geoPointValue)
    return {
      geoPointValue: Object.assign({}, n.geoPointValue)
    };
  if (n.timestampValue && typeof n.timestampValue == "object")
    return {
      timestampValue: Object.assign({}, n.timestampValue)
    };
  if (n.mapValue) {
    const e = {
      mapValue: {
        fields: {}
      }
    };
    return wr(n.mapValue.fields, (t, r) => e.mapValue.fields[t] = ei(r)), e;
  }
  if (n.arrayValue) {
    const e = {
      arrayValue: {
        values: []
      }
    };
    for (let t = 0; t < (n.arrayValue.values || []).length; ++t)
      e.arrayValue.values[t] = ei(n.arrayValue.values[t]);
    return e;
  }
  return Object.assign({}, n);
}
function ZI(n) {
  return (((n.mapValue || {}).fields || {}).__type__ || {}).stringValue === "__max__";
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class nt {
  constructor(e) {
    this.value = e;
  }
  static empty() {
    return new nt({
      mapValue: {}
    });
  }
  /**
   * Returns the value at the given path or null.
   *
   * @param path - the path to search
   * @returns The value at the path or null if the path is not set.
   */
  field(e) {
    if (e.isEmpty())
      return this.value;
    {
      let t = this.value;
      for (let r = 0; r < e.length - 1; ++r)
        if (t = (t.mapValue.fields || {})[e.get(r)], !ps(t))
          return null;
      return t = (t.mapValue.fields || {})[e.lastSegment()], t || null;
    }
  }
  /**
   * Sets the field to the provided value.
   *
   * @param path - The field path to set.
   * @param value - The value to set.
   */
  set(e, t) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = ei(t);
  }
  /**
   * Sets the provided fields to the provided values.
   *
   * @param data - A map of fields to values (or null for deletes).
   */
  setAll(e) {
    let t = Ce.emptyPath(), r = {}, i = [];
    e.forEach((a, c) => {
      if (!t.isImmediateParentOf(c)) {
        const u = this.getFieldsMap(t);
        this.applyChanges(u, r, i), r = {}, i = [], t = c.popLast();
      }
      a ? r[c.lastSegment()] = ei(a) : i.push(c.lastSegment());
    });
    const s = this.getFieldsMap(t);
    this.applyChanges(s, r, i);
  }
  /**
   * Removes the field at the specified path. If there is no field at the
   * specified path, nothing is changed.
   *
   * @param path - The field path to remove.
   */
  delete(e) {
    const t = this.field(e.popLast());
    ps(t) && t.mapValue.fields && delete t.mapValue.fields[e.lastSegment()];
  }
  isEqual(e) {
    return Et(this.value, e.value);
  }
  /**
   * Returns the map that contains the leaf element of `path`. If the parent
   * entry does not yet exist, or if it is not a map, a new map will be created.
   */
  getFieldsMap(e) {
    let t = this.value;
    t.mapValue.fields || (t.mapValue = {
      fields: {}
    });
    for (let r = 0; r < e.length; ++r) {
      let i = t.mapValue.fields[e.get(r)];
      ps(i) && i.mapValue.fields || (i = {
        mapValue: {
          fields: {}
        }
      }, t.mapValue.fields[e.get(r)] = i), t = i;
    }
    return t.mapValue.fields;
  }
  /**
   * Modifies `fieldsMap` by adding, replacing or deleting the specified
   * entries.
   */
  applyChanges(e, t, r) {
    wr(t, (i, s) => e[i] = s);
    for (const i of r)
      delete e[i];
  }
  clone() {
    return new nt(ei(this.value));
  }
}
function Jf(n) {
  const e = [];
  return wr(n.fields, (t, r) => {
    const i = new Ce([t]);
    if (ps(r)) {
      const s = Jf(r.mapValue).fields;
      if (s.length === 0)
        e.push(i);
      else
        for (const a of s)
          e.push(i.child(a));
    } else
      e.push(i);
  }), new dt(e);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Fe {
  constructor(e, t, r, i, s, a, c) {
    this.key = e, this.documentType = t, this.version = r, this.readTime = i, this.createTime = s, this.data = a, this.documentState = c;
  }
  /**
   * Creates a document with no known version or data, but which can serve as
   * base document for mutations.
   */
  static newInvalidDocument(e) {
    return new Fe(
      e,
      0,
      /* version */
      K.min(),
      /* readTime */
      K.min(),
      /* createTime */
      K.min(),
      nt.empty(),
      0
      /* DocumentState.SYNCED */
    );
  }
  /**
   * Creates a new document that is known to exist with the given data at the
   * given version.
   */
  static newFoundDocument(e, t, r, i) {
    return new Fe(
      e,
      1,
      /* version */
      t,
      /* readTime */
      K.min(),
      /* createTime */
      r,
      i,
      0
      /* DocumentState.SYNCED */
    );
  }
  /** Creates a new document that is known to not exist at the given version. */
  static newNoDocument(e, t) {
    return new Fe(
      e,
      2,
      /* version */
      t,
      /* readTime */
      K.min(),
      /* createTime */
      K.min(),
      nt.empty(),
      0
      /* DocumentState.SYNCED */
    );
  }
  /**
   * Creates a new document that is known to exist at the given version but
   * whose data is not known (e.g. a document that was updated without a known
   * base document).
   */
  static newUnknownDocument(e, t) {
    return new Fe(
      e,
      3,
      /* version */
      t,
      /* readTime */
      K.min(),
      /* createTime */
      K.min(),
      nt.empty(),
      2
      /* DocumentState.HAS_COMMITTED_MUTATIONS */
    );
  }
  /**
   * Changes the document type to indicate that it exists and that its version
   * and data are known.
   */
  convertToFoundDocument(e, t) {
    return !this.createTime.isEqual(K.min()) || this.documentType !== 2 && this.documentType !== 0 || (this.createTime = e), this.version = e, this.documentType = 1, this.data = t, this.documentState = 0, this;
  }
  /**
   * Changes the document type to indicate that it doesn't exist at the given
   * version.
   */
  convertToNoDocument(e) {
    return this.version = e, this.documentType = 2, this.data = nt.empty(), this.documentState = 0, this;
  }
  /**
   * Changes the document type to indicate that it exists at a given version but
   * that its data is not known (e.g. a document that was updated without a known
   * base document).
   */
  convertToUnknownDocument(e) {
    return this.version = e, this.documentType = 3, this.data = nt.empty(), this.documentState = 2, this;
  }
  setHasCommittedMutations() {
    return this.documentState = 2, this;
  }
  setHasLocalMutations() {
    return this.documentState = 1, this.version = K.min(), this;
  }
  setReadTime(e) {
    return this.readTime = e, this;
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(e) {
    return e instanceof Fe && this.key.isEqual(e.key) && this.version.isEqual(e.version) && this.documentType === e.documentType && this.documentState === e.documentState && this.data.isEqual(e.data);
  }
  mutableCopy() {
    return new Fe(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState);
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
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
class ks {
  constructor(e, t) {
    this.position = e, this.inclusive = t;
  }
}
function vh(n, e, t) {
  let r = 0;
  for (let i = 0; i < n.position.length; i++) {
    const s = e[i], a = n.position[i];
    if (s.field.isKeyField() ? r = H.comparator(H.fromName(a.referenceValue), t.key) : r = hr(a, t.data.field(s.field)), s.dir === "desc" && (r *= -1), r !== 0)
      break;
  }
  return r;
}
function wh(n, e) {
  if (n === null)
    return e === null;
  if (e === null || n.inclusive !== e.inclusive || n.position.length !== e.position.length)
    return !1;
  for (let t = 0; t < n.position.length; t++)
    if (!Et(n.position[t], e.position[t]))
      return !1;
  return !0;
}
/**
 * @license
 * Copyright 2022 Google LLC
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
class Os {
  constructor(e, t = "asc") {
    this.field = e, this.dir = t;
  }
}
function eb(n, e) {
  return n.dir === e.dir && n.field.isEqual(e.field);
}
/**
 * @license
 * Copyright 2022 Google LLC
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
class Zf {
}
class we extends Zf {
  constructor(e, t, r) {
    super(), this.field = e, this.op = t, this.value = r;
  }
  /**
   * Creates a filter based on the provided arguments.
   */
  static create(e, t, r) {
    return e.isKeyField() ? t === "in" || t === "not-in" ? this.createKeyFieldInFilter(e, t, r) : new nb(e, t, r) : t === "array-contains" ? new sb(e, r) : t === "in" ? new ob(e, r) : t === "not-in" ? new ab(e, r) : t === "array-contains-any" ? new cb(e, r) : new we(e, t, r);
  }
  static createKeyFieldInFilter(e, t, r) {
    return t === "in" ? new rb(e, r) : new ib(e, r);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return this.op === "!=" ? t !== null && this.matchesComparison(hr(t, this.value)) : t !== null && Ln(this.value) === Ln(t) && this.matchesComparison(hr(t, this.value));
  }
  matchesComparison(e) {
    switch (this.op) {
      case "<":
        return e < 0;
      case "<=":
        return e <= 0;
      case "==":
        return e === 0;
      case "!=":
        return e !== 0;
      case ">":
        return e > 0;
      case ">=":
        return e >= 0;
      default:
        return W();
    }
  }
  isInequality() {
    return [
      "<",
      "<=",
      ">",
      ">=",
      "!=",
      "not-in"
      /* Operator.NOT_IN */
    ].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
}
class Tt extends Zf {
  constructor(e, t) {
    super(), this.filters = e, this.op = t, this.ae = null;
  }
  /**
   * Creates a filter based on the provided arguments.
   */
  static create(e, t) {
    return new Tt(e, t);
  }
  matches(e) {
    return ep(this) ? this.filters.find((t) => !t.matches(e)) === void 0 : this.filters.find((t) => t.matches(e)) !== void 0;
  }
  getFlattenedFilters() {
    return this.ae !== null || (this.ae = this.filters.reduce((e, t) => e.concat(t.getFlattenedFilters()), [])), this.ae;
  }
  // Returns a mutable copy of `this.filters`
  getFilters() {
    return Object.assign([], this.filters);
  }
}
function ep(n) {
  return n.op === "and";
}
function tp(n) {
  return tb(n) && ep(n);
}
function tb(n) {
  for (const e of n.filters)
    if (e instanceof Tt)
      return !1;
  return !0;
}
function ka(n) {
  if (n instanceof we)
    return n.field.canonicalString() + n.op.toString() + dr(n.value);
  if (tp(n))
    return n.filters.map((e) => ka(e)).join(",");
  {
    const e = n.filters.map((t) => ka(t)).join(",");
    return `${n.op}(${e})`;
  }
}
function np(n, e) {
  return n instanceof we ? function(r, i) {
    return i instanceof we && r.op === i.op && r.field.isEqual(i.field) && Et(r.value, i.value);
  }(n, e) : n instanceof Tt ? function(r, i) {
    return i instanceof Tt && r.op === i.op && r.filters.length === i.filters.length ? r.filters.reduce((s, a, c) => s && np(a, i.filters[c]), !0) : !1;
  }(n, e) : void W();
}
function rp(n) {
  return n instanceof we ? function(t) {
    return `${t.field.canonicalString()} ${t.op} ${dr(t.value)}`;
  }(n) : n instanceof Tt ? function(t) {
    return t.op.toString() + " {" + t.getFilters().map(rp).join(" ,") + "}";
  }(n) : "Filter";
}
class nb extends we {
  constructor(e, t, r) {
    super(e, t, r), this.key = H.fromName(r.referenceValue);
  }
  matches(e) {
    const t = H.comparator(e.key, this.key);
    return this.matchesComparison(t);
  }
}
class rb extends we {
  constructor(e, t) {
    super(e, "in", t), this.keys = ip("in", t);
  }
  matches(e) {
    return this.keys.some((t) => t.isEqual(e.key));
  }
}
class ib extends we {
  constructor(e, t) {
    super(e, "not-in", t), this.keys = ip("not-in", t);
  }
  matches(e) {
    return !this.keys.some((t) => t.isEqual(e.key));
  }
}
function ip(n, e) {
  var t;
  return (((t = e.arrayValue) === null || t === void 0 ? void 0 : t.values) || []).map((r) => H.fromName(r.referenceValue));
}
class sb extends we {
  constructor(e, t) {
    super(e, "array-contains", t);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return pc(t) && mi(t.arrayValue, this.value);
  }
}
class ob extends we {
  constructor(e, t) {
    super(e, "in", t);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return t !== null && mi(this.value.arrayValue, t);
  }
}
class ab extends we {
  constructor(e, t) {
    super(e, "not-in", t);
  }
  matches(e) {
    if (mi(this.value.arrayValue, {
      nullValue: "NULL_VALUE"
    }))
      return !1;
    const t = e.data.field(this.field);
    return t !== null && !mi(this.value.arrayValue, t);
  }
}
class cb extends we {
  constructor(e, t) {
    super(e, "array-contains-any", t);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return !(!pc(t) || !t.arrayValue.values) && t.arrayValue.values.some((r) => mi(this.value.arrayValue, r));
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class ub {
  constructor(e, t = null, r = [], i = [], s = null, a = null, c = null) {
    this.path = e, this.collectionGroup = t, this.orderBy = r, this.filters = i, this.limit = s, this.startAt = a, this.endAt = c, this.ue = null;
  }
}
function Eh(n, e = null, t = [], r = [], i = null, s = null, a = null) {
  return new ub(n, e, t, r, i, s, a);
}
function mc(n) {
  const e = G(n);
  if (e.ue === null) {
    let t = e.path.canonicalString();
    e.collectionGroup !== null && (t += "|cg:" + e.collectionGroup), t += "|f:", t += e.filters.map((r) => ka(r)).join(","), t += "|ob:", t += e.orderBy.map((r) => function(s) {
      return s.field.canonicalString() + s.dir;
    }(r)).join(","), to(e.limit) || (t += "|l:", t += e.limit), e.startAt && (t += "|lb:", t += e.startAt.inclusive ? "b:" : "a:", t += e.startAt.position.map((r) => dr(r)).join(",")), e.endAt && (t += "|ub:", t += e.endAt.inclusive ? "a:" : "b:", t += e.endAt.position.map((r) => dr(r)).join(",")), e.ue = t;
  }
  return e.ue;
}
function gc(n, e) {
  if (n.limit !== e.limit || n.orderBy.length !== e.orderBy.length)
    return !1;
  for (let t = 0; t < n.orderBy.length; t++)
    if (!eb(n.orderBy[t], e.orderBy[t]))
      return !1;
  if (n.filters.length !== e.filters.length)
    return !1;
  for (let t = 0; t < n.filters.length; t++)
    if (!np(n.filters[t], e.filters[t]))
      return !1;
  return n.collectionGroup === e.collectionGroup && !!n.path.isEqual(e.path) && !!wh(n.startAt, e.startAt) && wh(n.endAt, e.endAt);
}
function Oa(n) {
  return H.isDocumentKey(n.path) && n.collectionGroup === null && n.filters.length === 0;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class no {
  /**
   * Initializes a Query with a path and optional additional query constraints.
   * Path must currently be empty if this is a collection group query.
   */
  constructor(e, t = null, r = [], i = [], s = null, a = "F", c = null, u = null) {
    this.path = e, this.collectionGroup = t, this.explicitOrderBy = r, this.filters = i, this.limit = s, this.limitType = a, this.startAt = c, this.endAt = u, this.ce = null, // The corresponding `Target` of this `Query` instance, for use with
    // non-aggregate queries.
    this.le = null, // The corresponding `Target` of this `Query` instance, for use with
    // aggregate queries. Unlike targets for non-aggregate queries,
    // aggregate query targets do not contain normalized order-bys, they only
    // contain explicit order-bys.
    this.he = null, this.startAt, this.endAt;
  }
}
function lb(n, e, t, r, i, s, a, c) {
  return new no(n, e, t, r, i, s, a, c);
}
function yc(n) {
  return new no(n);
}
function Th(n) {
  return n.filters.length === 0 && n.limit === null && n.startAt == null && n.endAt == null && (n.explicitOrderBy.length === 0 || n.explicitOrderBy.length === 1 && n.explicitOrderBy[0].field.isKeyField());
}
function hb(n) {
  return n.collectionGroup !== null;
}
function ti(n) {
  const e = G(n);
  if (e.ce === null) {
    e.ce = [];
    const t = /* @__PURE__ */ new Set();
    for (const s of e.explicitOrderBy)
      e.ce.push(s), t.add(s.field.canonicalString());
    const r = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc";
    (function(a) {
      let c = new Pe(Ce.comparator);
      return a.filters.forEach((u) => {
        u.getFlattenedFilters().forEach((h) => {
          h.isInequality() && (c = c.add(h.field));
        });
      }), c;
    })(e).forEach((s) => {
      t.has(s.canonicalString()) || s.isKeyField() || e.ce.push(new Os(s, r));
    }), // Add the document key field to the last if it is not explicitly ordered.
    t.has(Ce.keyField().canonicalString()) || e.ce.push(new Os(Ce.keyField(), r));
  }
  return e.ce;
}
function _t(n) {
  const e = G(n);
  return e.le || (e.le = db(e, ti(n))), e.le;
}
function db(n, e) {
  if (n.limitType === "F")
    return Eh(n.path, n.collectionGroup, e, n.filters, n.limit, n.startAt, n.endAt);
  {
    e = e.map((i) => {
      const s = i.dir === "desc" ? "asc" : "desc";
      return new Os(i.field, s);
    });
    const t = n.endAt ? new ks(n.endAt.position, n.endAt.inclusive) : null, r = n.startAt ? new ks(n.startAt.position, n.startAt.inclusive) : null;
    return Eh(n.path, n.collectionGroup, e, n.filters, n.limit, t, r);
  }
}
function Na(n, e, t) {
  return new no(n.path, n.collectionGroup, n.explicitOrderBy.slice(), n.filters.slice(), e, t, n.startAt, n.endAt);
}
function ro(n, e) {
  return gc(_t(n), _t(e)) && n.limitType === e.limitType;
}
function sp(n) {
  return `${mc(_t(n))}|lt:${n.limitType}`;
}
function Yn(n) {
  return `Query(target=${function(t) {
    let r = t.path.canonicalString();
    return t.collectionGroup !== null && (r += " collectionGroup=" + t.collectionGroup), t.filters.length > 0 && (r += `, filters: [${t.filters.map((i) => rp(i)).join(", ")}]`), to(t.limit) || (r += ", limit: " + t.limit), t.orderBy.length > 0 && (r += `, orderBy: [${t.orderBy.map((i) => function(a) {
      return `${a.field.canonicalString()} (${a.dir})`;
    }(i)).join(", ")}]`), t.startAt && (r += ", startAt: ", r += t.startAt.inclusive ? "b:" : "a:", r += t.startAt.position.map((i) => dr(i)).join(",")), t.endAt && (r += ", endAt: ", r += t.endAt.inclusive ? "a:" : "b:", r += t.endAt.position.map((i) => dr(i)).join(",")), `Target(${r})`;
  }(_t(n))}; limitType=${n.limitType})`;
}
function io(n, e) {
  return e.isFoundDocument() && function(r, i) {
    const s = i.key.path;
    return r.collectionGroup !== null ? i.key.hasCollectionId(r.collectionGroup) && r.path.isPrefixOf(s) : H.isDocumentKey(r.path) ? r.path.isEqual(s) : r.path.isImmediateParentOf(s);
  }(n, e) && function(r, i) {
    for (const s of ti(r))
      if (!s.field.isKeyField() && i.data.field(s.field) === null)
        return !1;
    return !0;
  }(n, e) && function(r, i) {
    for (const s of r.filters)
      if (!s.matches(i))
        return !1;
    return !0;
  }(n, e) && function(r, i) {
    return !(r.startAt && !/**
    * Returns true if a document sorts before a bound using the provided sort
    * order.
    */
    function(a, c, u) {
      const h = vh(a, c, u);
      return a.inclusive ? h <= 0 : h < 0;
    }(r.startAt, ti(r), i) || r.endAt && !function(a, c, u) {
      const h = vh(a, c, u);
      return a.inclusive ? h >= 0 : h > 0;
    }(r.endAt, ti(r), i));
  }(n, e);
}
function fb(n) {
  return n.collectionGroup || (n.path.length % 2 == 1 ? n.path.lastSegment() : n.path.get(n.path.length - 2));
}
function op(n) {
  return (e, t) => {
    let r = !1;
    for (const i of ti(n)) {
      const s = pb(i, e, t);
      if (s !== 0)
        return s;
      r = r || i.field.isKeyField();
    }
    return 0;
  };
}
function pb(n, e, t) {
  const r = n.field.isKeyField() ? H.comparator(e.key, t.key) : function(s, a, c) {
    const u = a.data.field(s), h = c.data.field(s);
    return u !== null && h !== null ? hr(u, h) : W();
  }(n.field, e, t);
  switch (n.dir) {
    case "asc":
      return r;
    case "desc":
      return -1 * r;
    default:
      return W();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Er {
  constructor(e, t) {
    this.mapKeyFn = e, this.equalsFn = t, /**
     * The inner map for a key/value pair. Due to the possibility of collisions we
     * keep a list of entries that we do a linear search through to find an actual
     * match. Note that collisions should be rare, so we still expect near
     * constant time lookups in practice.
     */
    this.inner = {}, /** The number of entries stored in the map */
    this.innerSize = 0;
  }
  /** Get a value for this key, or undefined if it does not exist. */
  get(e) {
    const t = this.mapKeyFn(e), r = this.inner[t];
    if (r !== void 0) {
      for (const [i, s] of r)
        if (this.equalsFn(i, e))
          return s;
    }
  }
  has(e) {
    return this.get(e) !== void 0;
  }
  /** Put this key and value in the map. */
  set(e, t) {
    const r = this.mapKeyFn(e), i = this.inner[r];
    if (i === void 0)
      return this.inner[r] = [[e, t]], void this.innerSize++;
    for (let s = 0; s < i.length; s++)
      if (this.equalsFn(i[s][0], e))
        return void (i[s] = [e, t]);
    i.push([e, t]), this.innerSize++;
  }
  /**
   * Remove this key from the map. Returns a boolean if anything was deleted.
   */
  delete(e) {
    const t = this.mapKeyFn(e), r = this.inner[t];
    if (r === void 0)
      return !1;
    for (let i = 0; i < r.length; i++)
      if (this.equalsFn(r[i][0], e))
        return r.length === 1 ? delete this.inner[t] : r.splice(i, 1), this.innerSize--, !0;
    return !1;
  }
  forEach(e) {
    wr(this.inner, (t, r) => {
      for (const [i, s] of r)
        e(i, s);
    });
  }
  isEmpty() {
    return Yf(this.inner);
  }
  size() {
    return this.innerSize;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
const mb = new le(H.comparator);
function Ut() {
  return mb;
}
const ap = new le(H.comparator);
function Qr(...n) {
  let e = ap;
  for (const t of n)
    e = e.insert(t.key, t);
  return e;
}
function cp(n) {
  let e = ap;
  return n.forEach((t, r) => e = e.insert(t, r.overlayedDocument)), e;
}
function bn() {
  return ni();
}
function up() {
  return ni();
}
function ni() {
  return new Er((n) => n.toString(), (n, e) => n.isEqual(e));
}
const gb = new le(H.comparator), yb = new Pe(H.comparator);
function Q(...n) {
  let e = yb;
  for (const t of n)
    e = e.add(t);
  return e;
}
const _b = new Pe(ee);
function vb() {
  return _b;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function lp(n, e) {
  if (n.useProto3Json) {
    if (isNaN(e))
      return {
        doubleValue: "NaN"
      };
    if (e === 1 / 0)
      return {
        doubleValue: "Infinity"
      };
    if (e === -1 / 0)
      return {
        doubleValue: "-Infinity"
      };
  }
  return {
    doubleValue: Ps(e) ? "-0" : e
  };
}
function hp(n) {
  return {
    integerValue: "" + n
  };
}
function wb(n, e) {
  return YI(e) ? hp(e) : lp(n, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
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
class so {
  constructor() {
    this._ = void 0;
  }
}
function Eb(n, e, t) {
  return n instanceof Ns ? function(i, s) {
    const a = {
      fields: {
        __type__: {
          stringValue: "server_timestamp"
        },
        __local_write_time__: {
          timestampValue: {
            seconds: i.seconds,
            nanos: i.nanoseconds
          }
        }
      }
    };
    return s && dc(s) && (s = fc(s)), s && (a.fields.__previous_value__ = s), {
      mapValue: a
    };
  }(t, e) : n instanceof gi ? fp(n, e) : n instanceof yi ? pp(n, e) : function(i, s) {
    const a = dp(i, s), c = Ih(a) + Ih(i.Pe);
    return Pa(a) && Pa(i.Pe) ? hp(c) : lp(i.serializer, c);
  }(n, e);
}
function Tb(n, e, t) {
  return n instanceof gi ? fp(n, e) : n instanceof yi ? pp(n, e) : t;
}
function dp(n, e) {
  return n instanceof Ds ? (
    /** Returns true if `value` is either an IntegerValue or a DoubleValue. */
    function(r) {
      return Pa(r) || function(s) {
        return !!s && "doubleValue" in s;
      }(r);
    }(e) ? e : {
      integerValue: 0
    }
  ) : null;
}
class Ns extends so {
}
class gi extends so {
  constructor(e) {
    super(), this.elements = e;
  }
}
function fp(n, e) {
  const t = mp(e);
  for (const r of n.elements)
    t.some((i) => Et(i, r)) || t.push(r);
  return {
    arrayValue: {
      values: t
    }
  };
}
class yi extends so {
  constructor(e) {
    super(), this.elements = e;
  }
}
function pp(n, e) {
  let t = mp(e);
  for (const r of n.elements)
    t = t.filter((i) => !Et(i, r));
  return {
    arrayValue: {
      values: t
    }
  };
}
class Ds extends so {
  constructor(e, t) {
    super(), this.serializer = e, this.Pe = t;
  }
}
function Ih(n) {
  return ve(n.integerValue || n.doubleValue);
}
function mp(n) {
  return pc(n) && n.arrayValue.values ? n.arrayValue.values.slice() : [];
}
function Ib(n, e) {
  return n.field.isEqual(e.field) && function(r, i) {
    return r instanceof gi && i instanceof gi || r instanceof yi && i instanceof yi ? lr(r.elements, i.elements, Et) : r instanceof Ds && i instanceof Ds ? Et(r.Pe, i.Pe) : r instanceof Ns && i instanceof Ns;
  }(n.transform, e.transform);
}
class bb {
  constructor(e, t) {
    this.version = e, this.transformResults = t;
  }
}
class xt {
  constructor(e, t) {
    this.updateTime = e, this.exists = t;
  }
  /** Creates a new empty Precondition. */
  static none() {
    return new xt();
  }
  /** Creates a new Precondition with an exists flag. */
  static exists(e) {
    return new xt(void 0, e);
  }
  /** Creates a new Precondition based on a version a document exists at. */
  static updateTime(e) {
    return new xt(e);
  }
  /** Returns whether this Precondition is empty. */
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0;
  }
  isEqual(e) {
    return this.exists === e.exists && (this.updateTime ? !!e.updateTime && this.updateTime.isEqual(e.updateTime) : !e.updateTime);
  }
}
function ms(n, e) {
  return n.updateTime !== void 0 ? e.isFoundDocument() && e.version.isEqual(n.updateTime) : n.exists === void 0 || n.exists === e.isFoundDocument();
}
class oo {
}
function gp(n, e) {
  if (!n.hasLocalMutations || e && e.fields.length === 0)
    return null;
  if (e === null)
    return n.isNoDocument() ? new _p(n.key, xt.none()) : new Ri(n.key, n.data, xt.none());
  {
    const t = n.data, r = nt.empty();
    let i = new Pe(Ce.comparator);
    for (let s of e.fields)
      if (!i.has(s)) {
        let a = t.field(s);
        a === null && s.length > 1 && (s = s.popLast(), a = t.field(s)), a === null ? r.delete(s) : r.set(s, a), i = i.add(s);
      }
    return new qn(n.key, r, new dt(i.toArray()), xt.none());
  }
}
function Ab(n, e, t) {
  n instanceof Ri ? function(i, s, a) {
    const c = i.value.clone(), u = Ah(i.fieldTransforms, s, a.transformResults);
    c.setAll(u), s.convertToFoundDocument(a.version, c).setHasCommittedMutations();
  }(n, e, t) : n instanceof qn ? function(i, s, a) {
    if (!ms(i.precondition, s))
      return void s.convertToUnknownDocument(a.version);
    const c = Ah(i.fieldTransforms, s, a.transformResults), u = s.data;
    u.setAll(yp(i)), u.setAll(c), s.convertToFoundDocument(a.version, u).setHasCommittedMutations();
  }(n, e, t) : function(i, s, a) {
    s.convertToNoDocument(a.version).setHasCommittedMutations();
  }(0, e, t);
}
function ri(n, e, t, r) {
  return n instanceof Ri ? function(s, a, c, u) {
    if (!ms(s.precondition, a))
      return c;
    const h = s.value.clone(), f = Sh(s.fieldTransforms, u, a);
    return h.setAll(f), a.convertToFoundDocument(a.version, h).setHasLocalMutations(), null;
  }(n, e, t, r) : n instanceof qn ? function(s, a, c, u) {
    if (!ms(s.precondition, a))
      return c;
    const h = Sh(s.fieldTransforms, u, a), f = a.data;
    return f.setAll(yp(s)), f.setAll(h), a.convertToFoundDocument(a.version, f).setHasLocalMutations(), c === null ? null : c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((m) => m.field));
  }(n, e, t, r) : function(s, a, c) {
    return ms(s.precondition, a) ? (a.convertToNoDocument(a.version).setHasLocalMutations(), null) : c;
  }(n, e, t);
}
function Sb(n, e) {
  let t = null;
  for (const r of n.fieldTransforms) {
    const i = e.data.field(r.field), s = dp(r.transform, i || null);
    s != null && (t === null && (t = nt.empty()), t.set(r.field, s));
  }
  return t || null;
}
function bh(n, e) {
  return n.type === e.type && !!n.key.isEqual(e.key) && !!n.precondition.isEqual(e.precondition) && !!function(r, i) {
    return r === void 0 && i === void 0 || !(!r || !i) && lr(r, i, (s, a) => Ib(s, a));
  }(n.fieldTransforms, e.fieldTransforms) && (n.type === 0 ? n.value.isEqual(e.value) : n.type !== 1 || n.data.isEqual(e.data) && n.fieldMask.isEqual(e.fieldMask));
}
class Ri extends oo {
  constructor(e, t, r, i = []) {
    super(), this.key = e, this.value = t, this.precondition = r, this.fieldTransforms = i, this.type = 0;
  }
  getFieldMask() {
    return null;
  }
}
class qn extends oo {
  constructor(e, t, r, i, s = []) {
    super(), this.key = e, this.data = t, this.fieldMask = r, this.precondition = i, this.fieldTransforms = s, this.type = 1;
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
function yp(n) {
  const e = /* @__PURE__ */ new Map();
  return n.fieldMask.fields.forEach((t) => {
    if (!t.isEmpty()) {
      const r = n.data.field(t);
      e.set(t, r);
    }
  }), e;
}
function Ah(n, e, t) {
  const r = /* @__PURE__ */ new Map();
  ae(n.length === t.length);
  for (let i = 0; i < t.length; i++) {
    const s = n[i], a = s.transform, c = e.data.field(s.field);
    r.set(s.field, Tb(a, c, t[i]));
  }
  return r;
}
function Sh(n, e, t) {
  const r = /* @__PURE__ */ new Map();
  for (const i of n) {
    const s = i.transform, a = t.data.field(i.field);
    r.set(i.field, Eb(s, a, e));
  }
  return r;
}
class _p extends oo {
  constructor(e, t) {
    super(), this.key = e, this.precondition = t, this.type = 2, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
}
class Rb extends oo {
  constructor(e, t) {
    super(), this.key = e, this.precondition = t, this.type = 3, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Cb {
  /**
   * @param batchId - The unique ID of this mutation batch.
   * @param localWriteTime - The original write time of this mutation.
   * @param baseMutations - Mutations that are used to populate the base
   * values when this mutation is applied locally. This can be used to locally
   * overwrite values that are persisted in the remote document cache. Base
   * mutations are never sent to the backend.
   * @param mutations - The user-provided mutations in this mutation batch.
   * User-provided mutations are applied both locally and remotely on the
   * backend.
   */
  constructor(e, t, r, i) {
    this.batchId = e, this.localWriteTime = t, this.baseMutations = r, this.mutations = i;
  }
  /**
   * Applies all the mutations in this MutationBatch to the specified document
   * to compute the state of the remote document
   *
   * @param document - The document to apply mutations to.
   * @param batchResult - The result of applying the MutationBatch to the
   * backend.
   */
  applyToRemoteDocument(e, t) {
    const r = t.mutationResults;
    for (let i = 0; i < this.mutations.length; i++) {
      const s = this.mutations[i];
      s.key.isEqual(e.key) && Ab(s, e, r[i]);
    }
  }
  /**
   * Computes the local view of a document given all the mutations in this
   * batch.
   *
   * @param document - The document to apply mutations to.
   * @param mutatedFields - Fields that have been updated before applying this mutation batch.
   * @returns A `FieldMask` representing all the fields that are mutated.
   */
  applyToLocalView(e, t) {
    for (const r of this.baseMutations)
      r.key.isEqual(e.key) && (t = ri(r, e, t, this.localWriteTime));
    for (const r of this.mutations)
      r.key.isEqual(e.key) && (t = ri(r, e, t, this.localWriteTime));
    return t;
  }
  /**
   * Computes the local view for all provided documents given the mutations in
   * this batch. Returns a `DocumentKey` to `Mutation` map which can be used to
   * replace all the mutation applications.
   */
  applyToLocalDocumentSet(e, t) {
    const r = up();
    return this.mutations.forEach((i) => {
      const s = e.get(i.key), a = s.overlayedDocument;
      let c = this.applyToLocalView(a, s.mutatedFields);
      c = t.has(i.key) ? null : c;
      const u = gp(a, c);
      u !== null && r.set(i.key, u), a.isValidDocument() || a.convertToNoDocument(K.min());
    }), r;
  }
  keys() {
    return this.mutations.reduce((e, t) => e.add(t.key), Q());
  }
  isEqual(e) {
    return this.batchId === e.batchId && lr(this.mutations, e.mutations, (t, r) => bh(t, r)) && lr(this.baseMutations, e.baseMutations, (t, r) => bh(t, r));
  }
}
class _c {
  constructor(e, t, r, i) {
    this.batch = e, this.commitVersion = t, this.mutationResults = r, this.docVersions = i;
  }
  /**
   * Creates a new MutationBatchResult for the given batch and results. There
   * must be one result for each mutation in the batch. This static factory
   * caches a document=&gt;version mapping (docVersions).
   */
  static from(e, t, r) {
    ae(e.mutations.length === r.length);
    let i = function() {
      return gb;
    }();
    const s = e.mutations;
    for (let a = 0; a < s.length; a++)
      i = i.insert(s[a].key, r[a].version);
    return new _c(e, t, r, i);
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
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
class Pb {
  constructor(e, t) {
    this.largestBatchId = e, this.mutation = t;
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(e) {
    return e !== null && this.mutation === e.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class kb {
  constructor(e, t) {
    this.count = e, this.unchangedNames = t;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var ye, X;
function Ob(n) {
  switch (n) {
    default:
      return W();
    case L.CANCELLED:
    case L.UNKNOWN:
    case L.DEADLINE_EXCEEDED:
    case L.RESOURCE_EXHAUSTED:
    case L.INTERNAL:
    case L.UNAVAILABLE:
    case L.UNAUTHENTICATED:
      return !1;
    case L.INVALID_ARGUMENT:
    case L.NOT_FOUND:
    case L.ALREADY_EXISTS:
    case L.PERMISSION_DENIED:
    case L.FAILED_PRECONDITION:
    case L.ABORTED:
    case L.OUT_OF_RANGE:
    case L.UNIMPLEMENTED:
    case L.DATA_LOSS:
      return !0;
  }
}
function vp(n) {
  if (n === void 0)
    return Ft("GRPC error has no .code"), L.UNKNOWN;
  switch (n) {
    case ye.OK:
      return L.OK;
    case ye.CANCELLED:
      return L.CANCELLED;
    case ye.UNKNOWN:
      return L.UNKNOWN;
    case ye.DEADLINE_EXCEEDED:
      return L.DEADLINE_EXCEEDED;
    case ye.RESOURCE_EXHAUSTED:
      return L.RESOURCE_EXHAUSTED;
    case ye.INTERNAL:
      return L.INTERNAL;
    case ye.UNAVAILABLE:
      return L.UNAVAILABLE;
    case ye.UNAUTHENTICATED:
      return L.UNAUTHENTICATED;
    case ye.INVALID_ARGUMENT:
      return L.INVALID_ARGUMENT;
    case ye.NOT_FOUND:
      return L.NOT_FOUND;
    case ye.ALREADY_EXISTS:
      return L.ALREADY_EXISTS;
    case ye.PERMISSION_DENIED:
      return L.PERMISSION_DENIED;
    case ye.FAILED_PRECONDITION:
      return L.FAILED_PRECONDITION;
    case ye.ABORTED:
      return L.ABORTED;
    case ye.OUT_OF_RANGE:
      return L.OUT_OF_RANGE;
    case ye.UNIMPLEMENTED:
      return L.UNIMPLEMENTED;
    case ye.DATA_LOSS:
      return L.DATA_LOSS;
    default:
      return W();
  }
}
(X = ye || (ye = {}))[X.OK = 0] = "OK", X[X.CANCELLED = 1] = "CANCELLED", X[X.UNKNOWN = 2] = "UNKNOWN", X[X.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", X[X.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", X[X.NOT_FOUND = 5] = "NOT_FOUND", X[X.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", X[X.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", X[X.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", X[X.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", X[X.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", X[X.ABORTED = 10] = "ABORTED", X[X.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", X[X.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", X[X.INTERNAL = 13] = "INTERNAL", X[X.UNAVAILABLE = 14] = "UNAVAILABLE", X[X.DATA_LOSS = 15] = "DATA_LOSS";
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
function Nb() {
  return new TextEncoder();
}
/**
 * @license
 * Copyright 2022 Google LLC
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
const Db = new Pn([4294967295, 4294967295], 0);
function Rh(n) {
  const e = Nb().encode(n), t = new jf();
  return t.update(e), new Uint8Array(t.digest());
}
function Ch(n) {
  const e = new DataView(n.buffer), t = e.getUint32(
    0,
    /* littleEndian= */
    !0
  ), r = e.getUint32(
    4,
    /* littleEndian= */
    !0
  ), i = e.getUint32(
    8,
    /* littleEndian= */
    !0
  ), s = e.getUint32(
    12,
    /* littleEndian= */
    !0
  );
  return [new Pn([t, r], 0), new Pn([i, s], 0)];
}
class vc {
  constructor(e, t, r) {
    if (this.bitmap = e, this.padding = t, this.hashCount = r, t < 0 || t >= 8)
      throw new Yr(`Invalid padding: ${t}`);
    if (r < 0)
      throw new Yr(`Invalid hash count: ${r}`);
    if (e.length > 0 && this.hashCount === 0)
      throw new Yr(`Invalid hash count: ${r}`);
    if (e.length === 0 && t !== 0)
      throw new Yr(`Invalid padding when bitmap length is 0: ${t}`);
    this.Ie = 8 * e.length - t, // Set the bit count in Integer to avoid repetition in mightContain().
    this.Te = Pn.fromNumber(this.Ie);
  }
  // Calculate the ith hash value based on the hashed 64bit integers,
  // and calculate its corresponding bit index in the bitmap to be checked.
  Ee(e, t, r) {
    let i = e.add(t.multiply(Pn.fromNumber(r)));
    return i.compare(Db) === 1 && (i = new Pn([i.getBits(0), i.getBits(1)], 0)), i.modulo(this.Te).toNumber();
  }
  // Return whether the bit on the given index in the bitmap is set to 1.
  de(e) {
    return (this.bitmap[Math.floor(e / 8)] & 1 << e % 8) != 0;
  }
  mightContain(e) {
    if (this.Ie === 0)
      return !1;
    const t = Rh(e), [r, i] = Ch(t);
    for (let s = 0; s < this.hashCount; s++) {
      const a = this.Ee(r, i, s);
      if (!this.de(a))
        return !1;
    }
    return !0;
  }
  /** Create bloom filter for testing purposes only. */
  static create(e, t, r) {
    const i = e % 8 == 0 ? 0 : 8 - e % 8, s = new Uint8Array(Math.ceil(e / 8)), a = new vc(s, i, t);
    return r.forEach((c) => a.insert(c)), a;
  }
  insert(e) {
    if (this.Ie === 0)
      return;
    const t = Rh(e), [r, i] = Ch(t);
    for (let s = 0; s < this.hashCount; s++) {
      const a = this.Ee(r, i, s);
      this.Ae(a);
    }
  }
  Ae(e) {
    const t = Math.floor(e / 8), r = e % 8;
    this.bitmap[t] |= 1 << r;
  }
}
class Yr extends Error {
  constructor() {
    super(...arguments), this.name = "BloomFilterError";
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class ao {
  constructor(e, t, r, i, s) {
    this.snapshotVersion = e, this.targetChanges = t, this.targetMismatches = r, this.documentUpdates = i, this.resolvedLimboDocuments = s;
  }
  /**
   * HACK: Views require RemoteEvents in order to determine whether the view is
   * CURRENT, but secondary tabs don't receive remote events. So this method is
   * used to create a synthesized RemoteEvent that can be used to apply a
   * CURRENT status change to a View, for queries executed in a different tab.
   */
  // PORTING NOTE: Multi-tab only
  static createSynthesizedRemoteEventForCurrentChange(e, t, r) {
    const i = /* @__PURE__ */ new Map();
    return i.set(e, Ci.createSynthesizedTargetChangeForCurrentChange(e, t, r)), new ao(K.min(), i, new le(ee), Ut(), Q());
  }
}
class Ci {
  constructor(e, t, r, i, s) {
    this.resumeToken = e, this.current = t, this.addedDocuments = r, this.modifiedDocuments = i, this.removedDocuments = s;
  }
  /**
   * This method is used to create a synthesized TargetChanges that can be used to
   * apply a CURRENT status change to a View (for queries executed in a different
   * tab) or for new queries (to raise snapshots with correct CURRENT status).
   */
  static createSynthesizedTargetChangeForCurrentChange(e, t, r) {
    return new Ci(r, t, Q(), Q(), Q());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class gs {
  constructor(e, t, r, i) {
    this.Re = e, this.removedTargetIds = t, this.key = r, this.Ve = i;
  }
}
class wp {
  constructor(e, t) {
    this.targetId = e, this.me = t;
  }
}
class Ep {
  constructor(e, t, r = Ne.EMPTY_BYTE_STRING, i = null) {
    this.state = e, this.targetIds = t, this.resumeToken = r, this.cause = i;
  }
}
class Ph {
  constructor() {
    this.fe = 0, /**
     * Keeps track of the document changes since the last raised snapshot.
     *
     * These changes are continuously updated as we receive document updates and
     * always reflect the current set of changes against the last issued snapshot.
     */
    this.ge = Oh(), /** See public getters for explanations of these fields. */
    this.pe = Ne.EMPTY_BYTE_STRING, this.ye = !1, /**
     * Whether this target state should be included in the next snapshot. We
     * initialize to true so that newly-added targets are included in the next
     * RemoteEvent.
     */
    this.we = !0;
  }
  /**
   * Whether this target has been marked 'current'.
   *
   * 'Current' has special meaning in the RPC protocol: It implies that the
   * Watch backend has sent us all changes up to the point at which the target
   * was added and that the target is consistent with the rest of the watch
   * stream.
   */
  get current() {
    return this.ye;
  }
  /** The last resume token sent to us for this target. */
  get resumeToken() {
    return this.pe;
  }
  /** Whether this target has pending target adds or target removes. */
  get Se() {
    return this.fe !== 0;
  }
  /** Whether we have modified any state that should trigger a snapshot. */
  get be() {
    return this.we;
  }
  /**
   * Applies the resume token to the TargetChange, but only when it has a new
   * value. Empty resumeTokens are discarded.
   */
  De(e) {
    e.approximateByteSize() > 0 && (this.we = !0, this.pe = e);
  }
  /**
   * Creates a target change from the current set of changes.
   *
   * To reset the document changes after raising this snapshot, call
   * `clearPendingChanges()`.
   */
  Ce() {
    let e = Q(), t = Q(), r = Q();
    return this.ge.forEach((i, s) => {
      switch (s) {
        case 0:
          e = e.add(i);
          break;
        case 2:
          t = t.add(i);
          break;
        case 1:
          r = r.add(i);
          break;
        default:
          W();
      }
    }), new Ci(this.pe, this.ye, e, t, r);
  }
  /**
   * Resets the document changes and sets `hasPendingChanges` to false.
   */
  ve() {
    this.we = !1, this.ge = Oh();
  }
  Fe(e, t) {
    this.we = !0, this.ge = this.ge.insert(e, t);
  }
  Me(e) {
    this.we = !0, this.ge = this.ge.remove(e);
  }
  xe() {
    this.fe += 1;
  }
  Oe() {
    this.fe -= 1, ae(this.fe >= 0);
  }
  Ne() {
    this.we = !0, this.ye = !0;
  }
}
class xb {
  constructor(e) {
    this.Le = e, /** The internal state of all tracked targets. */
    this.Be = /* @__PURE__ */ new Map(), /** Keeps track of the documents to update since the last raised snapshot. */
    this.ke = Ut(), /** A mapping of document keys to their set of target IDs. */
    this.qe = kh(), /**
     * A map of targets with existence filter mismatches. These targets are
     * known to be inconsistent and their listens needs to be re-established by
     * RemoteStore.
     */
    this.Qe = new le(ee);
  }
  /**
   * Processes and adds the DocumentWatchChange to the current set of changes.
   */
  Ke(e) {
    for (const t of e.Re)
      e.Ve && e.Ve.isFoundDocument() ? this.$e(t, e.Ve) : this.Ue(t, e.key, e.Ve);
    for (const t of e.removedTargetIds)
      this.Ue(t, e.key, e.Ve);
  }
  /** Processes and adds the WatchTargetChange to the current set of changes. */
  We(e) {
    this.forEachTarget(e, (t) => {
      const r = this.Ge(t);
      switch (e.state) {
        case 0:
          this.ze(t) && r.De(e.resumeToken);
          break;
        case 1:
          r.Oe(), r.Se || // We have a freshly added target, so we need to reset any state
          // that we had previously. This can happen e.g. when remove and add
          // back a target for existence filter mismatches.
          r.ve(), r.De(e.resumeToken);
          break;
        case 2:
          r.Oe(), r.Se || this.removeTarget(t);
          break;
        case 3:
          this.ze(t) && (r.Ne(), r.De(e.resumeToken));
          break;
        case 4:
          this.ze(t) && // Reset the target and synthesizes removes for all existing
          // documents. The backend will re-add any documents that still
          // match the target before it sends the next global snapshot.
          (this.je(t), r.De(e.resumeToken));
          break;
        default:
          W();
      }
    });
  }
  /**
   * Iterates over all targetIds that the watch change applies to: either the
   * targetIds explicitly listed in the change or the targetIds of all currently
   * active targets.
   */
  forEachTarget(e, t) {
    e.targetIds.length > 0 ? e.targetIds.forEach(t) : this.Be.forEach((r, i) => {
      this.ze(i) && t(i);
    });
  }
  /**
   * Handles existence filters and synthesizes deletes for filter mismatches.
   * Targets that are invalidated by filter mismatches are added to
   * `pendingTargetResets`.
   */
  He(e) {
    const t = e.targetId, r = e.me.count, i = this.Je(t);
    if (i) {
      const s = i.target;
      if (Oa(s))
        if (r === 0) {
          const a = new H(s.path);
          this.Ue(t, a, Fe.newNoDocument(a, K.min()));
        } else
          ae(r === 1);
      else {
        const a = this.Ye(t);
        if (a !== r) {
          const c = this.Ze(e), u = c ? this.Xe(c, e, a) : 1;
          if (u !== 0) {
            this.je(t);
            const h = u === 2 ? "TargetPurposeExistenceFilterMismatchBloom" : "TargetPurposeExistenceFilterMismatch";
            this.Qe = this.Qe.insert(t, h);
          }
        }
      }
    }
  }
  /**
   * Parse the bloom filter from the "unchanged_names" field of an existence
   * filter.
   */
  Ze(e) {
    const t = e.me.unchangedNames;
    if (!t || !t.bits)
      return null;
    const { bits: { bitmap: r = "", padding: i = 0 }, hashCount: s = 0 } = t;
    let a, c;
    try {
      a = Mn(r).toUint8Array();
    } catch (u) {
      if (u instanceof Xf)
        return ur("Decoding the base64 bloom filter in existence filter failed (" + u.message + "); ignoring the bloom filter and falling back to full re-query."), null;
      throw u;
    }
    try {
      c = new vc(a, i, s);
    } catch (u) {
      return ur(u instanceof Yr ? "BloomFilter error: " : "Applying bloom filter failed: ", u), null;
    }
    return c.Ie === 0 ? null : c;
  }
  /**
   * Apply bloom filter to remove the deleted documents, and return the
   * application status.
   */
  Xe(e, t, r) {
    return t.me.count === r - this.nt(e, t.targetId) ? 0 : 2;
  }
  /**
   * Filter out removed documents based on bloom filter membership result and
   * return number of documents removed.
   */
  nt(e, t) {
    const r = this.Le.getRemoteKeysForTarget(t);
    let i = 0;
    return r.forEach((s) => {
      const a = this.Le.tt(), c = `projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;
      e.mightContain(c) || (this.Ue(
        t,
        s,
        /*updatedDocument=*/
        null
      ), i++);
    }), i;
  }
  /**
   * Converts the currently accumulated state into a remote event at the
   * provided snapshot version. Resets the accumulated changes before returning.
   */
  rt(e) {
    const t = /* @__PURE__ */ new Map();
    this.Be.forEach((s, a) => {
      const c = this.Je(a);
      if (c) {
        if (s.current && Oa(c.target)) {
          const u = new H(c.target.path);
          this.ke.get(u) !== null || this.it(a, u) || this.Ue(a, u, Fe.newNoDocument(u, e));
        }
        s.be && (t.set(a, s.Ce()), s.ve());
      }
    });
    let r = Q();
    this.qe.forEach((s, a) => {
      let c = !0;
      a.forEachWhile((u) => {
        const h = this.Je(u);
        return !h || h.purpose === "TargetPurposeLimboResolution" || (c = !1, !1);
      }), c && (r = r.add(s));
    }), this.ke.forEach((s, a) => a.setReadTime(e));
    const i = new ao(e, t, this.Qe, this.ke, r);
    return this.ke = Ut(), this.qe = kh(), this.Qe = new le(ee), i;
  }
  /**
   * Adds the provided document to the internal list of document updates and
   * its document key to the given target's mapping.
   */
  // Visible for testing.
  $e(e, t) {
    if (!this.ze(e))
      return;
    const r = this.it(e, t.key) ? 2 : 0;
    this.Ge(e).Fe(t.key, r), this.ke = this.ke.insert(t.key, t), this.qe = this.qe.insert(t.key, this.st(t.key).add(e));
  }
  /**
   * Removes the provided document from the target mapping. If the
   * document no longer matches the target, but the document's state is still
   * known (e.g. we know that the document was deleted or we received the change
   * that caused the filter mismatch), the new document can be provided
   * to update the remote document cache.
   */
  // Visible for testing.
  Ue(e, t, r) {
    if (!this.ze(e))
      return;
    const i = this.Ge(e);
    this.it(e, t) ? i.Fe(
      t,
      1
      /* ChangeType.Removed */
    ) : (
      // The document may have entered and left the target before we raised a
      // snapshot, so we can just ignore the change.
      i.Me(t)
    ), this.qe = this.qe.insert(t, this.st(t).delete(e)), r && (this.ke = this.ke.insert(t, r));
  }
  removeTarget(e) {
    this.Be.delete(e);
  }
  /**
   * Returns the current count of documents in the target. This includes both
   * the number of documents that the LocalStore considers to be part of the
   * target as well as any accumulated changes.
   */
  Ye(e) {
    const t = this.Ge(e).Ce();
    return this.Le.getRemoteKeysForTarget(e).size + t.addedDocuments.size - t.removedDocuments.size;
  }
  /**
   * Increment the number of acks needed from watch before we can consider the
   * server to be 'in-sync' with the client's active targets.
   */
  xe(e) {
    this.Ge(e).xe();
  }
  Ge(e) {
    let t = this.Be.get(e);
    return t || (t = new Ph(), this.Be.set(e, t)), t;
  }
  st(e) {
    let t = this.qe.get(e);
    return t || (t = new Pe(ee), this.qe = this.qe.insert(e, t)), t;
  }
  /**
   * Verifies that the user is still interested in this target (by calling
   * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
   * from watch.
   */
  ze(e) {
    const t = this.Je(e) !== null;
    return t || U("WatchChangeAggregator", "Detected inactive target", e), t;
  }
  /**
   * Returns the TargetData for an active target (i.e. a target that the user
   * is still interested in that has no outstanding target change requests).
   */
  Je(e) {
    const t = this.Be.get(e);
    return t && t.Se ? null : this.Le.ot(e);
  }
  /**
   * Resets the state of a Watch target to its initial state (e.g. sets
   * 'current' to false, clears the resume token and removes its target mapping
   * from all documents).
   */
  je(e) {
    this.Be.set(e, new Ph()), this.Le.getRemoteKeysForTarget(e).forEach((t) => {
      this.Ue(
        e,
        t,
        /*updatedDocument=*/
        null
      );
    });
  }
  /**
   * Returns whether the LocalStore considers the document to be part of the
   * specified target.
   */
  it(e, t) {
    return this.Le.getRemoteKeysForTarget(e).has(t);
  }
}
function kh() {
  return new le(H.comparator);
}
function Oh() {
  return new le(H.comparator);
}
const Vb = (() => ({
  asc: "ASCENDING",
  desc: "DESCENDING"
}))(), Mb = (() => ({
  "<": "LESS_THAN",
  "<=": "LESS_THAN_OR_EQUAL",
  ">": "GREATER_THAN",
  ">=": "GREATER_THAN_OR_EQUAL",
  "==": "EQUAL",
  "!=": "NOT_EQUAL",
  "array-contains": "ARRAY_CONTAINS",
  in: "IN",
  "not-in": "NOT_IN",
  "array-contains-any": "ARRAY_CONTAINS_ANY"
}))(), Lb = (() => ({
  and: "AND",
  or: "OR"
}))();
class Fb {
  constructor(e, t) {
    this.databaseId = e, this.useProto3Json = t;
  }
}
function Da(n, e) {
  return n.useProto3Json || to(e) ? e : {
    value: e
  };
}
function xs(n, e) {
  return n.useProto3Json ? `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z` : {
    seconds: "" + e.seconds,
    nanos: e.nanoseconds
  };
}
function Tp(n, e) {
  return n.useProto3Json ? e.toBase64() : e.toUint8Array();
}
function Ub(n, e) {
  return xs(n, e.toTimestamp());
}
function vt(n) {
  return ae(!!n), K.fromTimestamp(function(t) {
    const r = ln(t);
    return new Ee(r.seconds, r.nanos);
  }(n));
}
function wc(n, e) {
  return xa(n, e).canonicalString();
}
function xa(n, e) {
  const t = function(i) {
    return new ue(["projects", i.projectId, "databases", i.database]);
  }(n).child("documents");
  return e === void 0 ? t : t.child(e);
}
function Ip(n) {
  const e = ue.fromString(n);
  return ae(Cp(e)), e;
}
function Va(n, e) {
  return wc(n.databaseId, e.path);
}
function Xo(n, e) {
  const t = Ip(e);
  if (t.get(1) !== n.databaseId.projectId)
    throw new q(L.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + t.get(1) + " vs " + n.databaseId.projectId);
  if (t.get(3) !== n.databaseId.database)
    throw new q(L.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + t.get(3) + " vs " + n.databaseId.database);
  return new H(Ap(t));
}
function bp(n, e) {
  return wc(n.databaseId, e);
}
function $b(n) {
  const e = Ip(n);
  return e.length === 4 ? ue.emptyPath() : Ap(e);
}
function Ma(n) {
  return new ue(["projects", n.databaseId.projectId, "databases", n.databaseId.database]).canonicalString();
}
function Ap(n) {
  return ae(n.length > 4 && n.get(4) === "documents"), n.popFirst(5);
}
function Nh(n, e, t) {
  return {
    name: Va(n, e),
    fields: t.value.mapValue.fields
  };
}
function jb(n, e) {
  let t;
  if ("targetChange" in e) {
    e.targetChange;
    const r = function(h) {
      return h === "NO_CHANGE" ? 0 : h === "ADD" ? 1 : h === "REMOVE" ? 2 : h === "CURRENT" ? 3 : h === "RESET" ? 4 : W();
    }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], s = function(h, f) {
      return h.useProto3Json ? (ae(f === void 0 || typeof f == "string"), Ne.fromBase64String(f || "")) : (ae(f === void 0 || // Check if the value is an instance of both Buffer and Uint8Array,
      // despite the fact that Buffer extends Uint8Array. In some
      // environments, such as jsdom, the prototype chain of Buffer
      // does not indicate that it extends Uint8Array.
      f instanceof Buffer || f instanceof Uint8Array), Ne.fromUint8Array(f || new Uint8Array()));
    }(n, e.targetChange.resumeToken), a = e.targetChange.cause, c = a && function(h) {
      const f = h.code === void 0 ? L.UNKNOWN : vp(h.code);
      return new q(f, h.message || "");
    }(a);
    t = new Ep(r, i, s, c || null);
  } else if ("documentChange" in e) {
    e.documentChange;
    const r = e.documentChange;
    r.document, r.document.name, r.document.updateTime;
    const i = Xo(n, r.document.name), s = vt(r.document.updateTime), a = r.document.createTime ? vt(r.document.createTime) : K.min(), c = new nt({
      mapValue: {
        fields: r.document.fields
      }
    }), u = Fe.newFoundDocument(i, s, a, c), h = r.targetIds || [], f = r.removedTargetIds || [];
    t = new gs(h, f, u.key, u);
  } else if ("documentDelete" in e) {
    e.documentDelete;
    const r = e.documentDelete;
    r.document;
    const i = Xo(n, r.document), s = r.readTime ? vt(r.readTime) : K.min(), a = Fe.newNoDocument(i, s), c = r.removedTargetIds || [];
    t = new gs([], c, a.key, a);
  } else if ("documentRemove" in e) {
    e.documentRemove;
    const r = e.documentRemove;
    r.document;
    const i = Xo(n, r.document), s = r.removedTargetIds || [];
    t = new gs([], s, i, null);
  } else {
    if (!("filter" in e))
      return W();
    {
      e.filter;
      const r = e.filter;
      r.targetId;
      const { count: i = 0, unchangedNames: s } = r, a = new kb(i, s), c = r.targetId;
      t = new wp(c, a);
    }
  }
  return t;
}
function Bb(n, e) {
  let t;
  if (e instanceof Ri)
    t = {
      update: Nh(n, e.key, e.value)
    };
  else if (e instanceof _p)
    t = {
      delete: Va(n, e.key)
    };
  else if (e instanceof qn)
    t = {
      update: Nh(n, e.key, e.data),
      updateMask: Xb(e.fieldMask)
    };
  else {
    if (!(e instanceof Rb))
      return W();
    t = {
      verify: Va(n, e.key)
    };
  }
  return e.fieldTransforms.length > 0 && (t.updateTransforms = e.fieldTransforms.map((r) => function(s, a) {
    const c = a.transform;
    if (c instanceof Ns)
      return {
        fieldPath: a.field.canonicalString(),
        setToServerValue: "REQUEST_TIME"
      };
    if (c instanceof gi)
      return {
        fieldPath: a.field.canonicalString(),
        appendMissingElements: {
          values: c.elements
        }
      };
    if (c instanceof yi)
      return {
        fieldPath: a.field.canonicalString(),
        removeAllFromArray: {
          values: c.elements
        }
      };
    if (c instanceof Ds)
      return {
        fieldPath: a.field.canonicalString(),
        increment: c.Pe
      };
    throw W();
  }(0, r))), e.precondition.isNone || (t.currentDocument = function(i, s) {
    return s.updateTime !== void 0 ? {
      updateTime: Ub(i, s.updateTime)
    } : s.exists !== void 0 ? {
      exists: s.exists
    } : W();
  }(n, e.precondition)), t;
}
function zb(n, e) {
  return n && n.length > 0 ? (ae(e !== void 0), n.map((t) => function(i, s) {
    let a = i.updateTime ? vt(i.updateTime) : vt(s);
    return a.isEqual(K.min()) && // The Firestore Emulator currently returns an update time of 0 for
    // deletes of non-existing documents (rather than null). This breaks the
    // test "get deleted doc while offline with source=cache" as NoDocuments
    // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
    // TODO(#2149): Remove this when Emulator is fixed
    (a = vt(s)), new bb(a, i.transformResults || []);
  }(t, e))) : [];
}
function qb(n, e) {
  return {
    documents: [bp(n, e.path)]
  };
}
function Hb(n, e) {
  const t = {
    structuredQuery: {}
  }, r = e.path;
  let i;
  e.collectionGroup !== null ? (i = r, t.structuredQuery.from = [{
    collectionId: e.collectionGroup,
    allDescendants: !0
  }]) : (i = r.popLast(), t.structuredQuery.from = [{
    collectionId: r.lastSegment()
  }]), t.parent = bp(n, i);
  const s = function(h) {
    if (h.length !== 0)
      return Rp(Tt.create(
        h,
        "and"
        /* CompositeOperator.AND */
      ));
  }(e.filters);
  s && (t.structuredQuery.where = s);
  const a = function(h) {
    if (h.length !== 0)
      return h.map((f) => (
        // visible for testing
        function(_) {
          return {
            field: Xn(_.field),
            direction: Gb(_.dir)
          };
        }(f)
      ));
  }(e.orderBy);
  a && (t.structuredQuery.orderBy = a);
  const c = Da(n, e.limit);
  return c !== null && (t.structuredQuery.limit = c), e.startAt && (t.structuredQuery.startAt = function(h) {
    return {
      before: h.inclusive,
      values: h.position
    };
  }(e.startAt)), e.endAt && (t.structuredQuery.endAt = function(h) {
    return {
      before: !h.inclusive,
      values: h.position
    };
  }(e.endAt)), {
    _t: t,
    parent: i
  };
}
function Wb(n) {
  let e = $b(n.parent);
  const t = n.structuredQuery, r = t.from ? t.from.length : 0;
  let i = null;
  if (r > 0) {
    ae(r === 1);
    const f = t.from[0];
    f.allDescendants ? i = f.collectionId : e = e.child(f.collectionId);
  }
  let s = [];
  t.where && (s = function(m) {
    const _ = Sp(m);
    return _ instanceof Tt && tp(_) ? _.getFilters() : [_];
  }(t.where));
  let a = [];
  t.orderBy && (a = function(m) {
    return m.map((_) => function(A) {
      return new Os(
        Jn(A.field),
        // visible for testing
        function(p) {
          switch (p) {
            case "ASCENDING":
              return "asc";
            case "DESCENDING":
              return "desc";
            default:
              return;
          }
        }(A.direction)
      );
    }(_));
  }(t.orderBy));
  let c = null;
  t.limit && (c = function(m) {
    let _;
    return _ = typeof m == "object" ? m.value : m, to(_) ? null : _;
  }(t.limit));
  let u = null;
  t.startAt && (u = function(m) {
    const _ = !!m.before, w = m.values || [];
    return new ks(w, _);
  }(t.startAt));
  let h = null;
  return t.endAt && (h = function(m) {
    const _ = !m.before, w = m.values || [];
    return new ks(w, _);
  }(t.endAt)), lb(e, i, a, s, c, "F", u, h);
}
function Kb(n, e) {
  const t = function(i) {
    switch (i) {
      case "TargetPurposeListen":
        return null;
      case "TargetPurposeExistenceFilterMismatch":
        return "existence-filter-mismatch";
      case "TargetPurposeExistenceFilterMismatchBloom":
        return "existence-filter-mismatch-bloom";
      case "TargetPurposeLimboResolution":
        return "limbo-document";
      default:
        return W();
    }
  }(e.purpose);
  return t == null ? null : {
    "goog-listen-tags": t
  };
}
function Sp(n) {
  return n.unaryFilter !== void 0 ? function(t) {
    switch (t.unaryFilter.op) {
      case "IS_NAN":
        const r = Jn(t.unaryFilter.field);
        return we.create(r, "==", {
          doubleValue: NaN
        });
      case "IS_NULL":
        const i = Jn(t.unaryFilter.field);
        return we.create(i, "==", {
          nullValue: "NULL_VALUE"
        });
      case "IS_NOT_NAN":
        const s = Jn(t.unaryFilter.field);
        return we.create(s, "!=", {
          doubleValue: NaN
        });
      case "IS_NOT_NULL":
        const a = Jn(t.unaryFilter.field);
        return we.create(a, "!=", {
          nullValue: "NULL_VALUE"
        });
      default:
        return W();
    }
  }(n) : n.fieldFilter !== void 0 ? function(t) {
    return we.create(Jn(t.fieldFilter.field), function(i) {
      switch (i) {
        case "EQUAL":
          return "==";
        case "NOT_EQUAL":
          return "!=";
        case "GREATER_THAN":
          return ">";
        case "GREATER_THAN_OR_EQUAL":
          return ">=";
        case "LESS_THAN":
          return "<";
        case "LESS_THAN_OR_EQUAL":
          return "<=";
        case "ARRAY_CONTAINS":
          return "array-contains";
        case "IN":
          return "in";
        case "NOT_IN":
          return "not-in";
        case "ARRAY_CONTAINS_ANY":
          return "array-contains-any";
        default:
          return W();
      }
    }(t.fieldFilter.op), t.fieldFilter.value);
  }(n) : n.compositeFilter !== void 0 ? function(t) {
    return Tt.create(t.compositeFilter.filters.map((r) => Sp(r)), function(i) {
      switch (i) {
        case "AND":
          return "and";
        case "OR":
          return "or";
        default:
          return W();
      }
    }(t.compositeFilter.op));
  }(n) : W();
}
function Gb(n) {
  return Vb[n];
}
function Qb(n) {
  return Mb[n];
}
function Yb(n) {
  return Lb[n];
}
function Xn(n) {
  return {
    fieldPath: n.canonicalString()
  };
}
function Jn(n) {
  return Ce.fromServerFormat(n.fieldPath);
}
function Rp(n) {
  return n instanceof we ? function(t) {
    if (t.op === "==") {
      if (_h(t.value))
        return {
          unaryFilter: {
            field: Xn(t.field),
            op: "IS_NAN"
          }
        };
      if (yh(t.value))
        return {
          unaryFilter: {
            field: Xn(t.field),
            op: "IS_NULL"
          }
        };
    } else if (t.op === "!=") {
      if (_h(t.value))
        return {
          unaryFilter: {
            field: Xn(t.field),
            op: "IS_NOT_NAN"
          }
        };
      if (yh(t.value))
        return {
          unaryFilter: {
            field: Xn(t.field),
            op: "IS_NOT_NULL"
          }
        };
    }
    return {
      fieldFilter: {
        field: Xn(t.field),
        op: Qb(t.op),
        value: t.value
      }
    };
  }(n) : n instanceof Tt ? function(t) {
    const r = t.getFilters().map((i) => Rp(i));
    return r.length === 1 ? r[0] : {
      compositeFilter: {
        op: Yb(t.op),
        filters: r
      }
    };
  }(n) : W();
}
function Xb(n) {
  const e = [];
  return n.fields.forEach((t) => e.push(t.canonicalString())), {
    fieldPaths: e
  };
}
function Cp(n) {
  return n.length >= 4 && n.get(0) === "projects" && n.get(2) === "databases";
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class nn {
  constructor(e, t, r, i, s = K.min(), a = K.min(), c = Ne.EMPTY_BYTE_STRING, u = null) {
    this.target = e, this.targetId = t, this.purpose = r, this.sequenceNumber = i, this.snapshotVersion = s, this.lastLimboFreeSnapshotVersion = a, this.resumeToken = c, this.expectedCount = u;
  }
  /** Creates a new target data instance with an updated sequence number. */
  withSequenceNumber(e) {
    return new nn(this.target, this.targetId, this.purpose, e, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, this.expectedCount);
  }
  /**
   * Creates a new target data instance with an updated resume token and
   * snapshot version.
   */
  withResumeToken(e, t) {
    return new nn(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      t,
      this.lastLimboFreeSnapshotVersion,
      e,
      /* expectedCount= */
      null
    );
  }
  /**
   * Creates a new target data instance with an updated expected count.
   */
  withExpectedCount(e) {
    return new nn(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, e);
  }
  /**
   * Creates a new target data instance with an updated last limbo free
   * snapshot version number.
   */
  withLastLimboFreeSnapshotVersion(e) {
    return new nn(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, e, this.resumeToken, this.expectedCount);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Jb {
  constructor(e) {
    this.ct = e;
  }
}
function Zb(n) {
  const e = Wb({
    parent: n.parent,
    structuredQuery: n.structuredQuery
  });
  return n.limitType === "LAST" ? Na(
    e,
    e.limit,
    "L"
    /* LimitType.Last */
  ) : e;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class eA {
  constructor() {
    this.an = new tA();
  }
  addToCollectionParentIndex(e, t) {
    return this.an.add(t), V.resolve();
  }
  getCollectionParents(e, t) {
    return V.resolve(this.an.getEntries(t));
  }
  addFieldIndex(e, t) {
    return V.resolve();
  }
  deleteFieldIndex(e, t) {
    return V.resolve();
  }
  deleteAllFieldIndexes(e) {
    return V.resolve();
  }
  createTargetIndexes(e, t) {
    return V.resolve();
  }
  getDocumentsMatchingTarget(e, t) {
    return V.resolve(null);
  }
  getIndexType(e, t) {
    return V.resolve(
      0
      /* IndexType.NONE */
    );
  }
  getFieldIndexes(e, t) {
    return V.resolve([]);
  }
  getNextCollectionGroupToUpdate(e) {
    return V.resolve(null);
  }
  getMinOffset(e, t) {
    return V.resolve(un.min());
  }
  getMinOffsetFromCollectionGroup(e, t) {
    return V.resolve(un.min());
  }
  updateCollectionGroup(e, t, r) {
    return V.resolve();
  }
  updateIndexEntries(e, t) {
    return V.resolve();
  }
}
class tA {
  constructor() {
    this.index = {};
  }
  // Returns false if the entry already existed.
  add(e) {
    const t = e.lastSegment(), r = e.popLast(), i = this.index[t] || new Pe(ue.comparator), s = !i.has(r);
    return this.index[t] = i.add(r), s;
  }
  has(e) {
    const t = e.lastSegment(), r = e.popLast(), i = this.index[t];
    return i && i.has(r);
  }
  getEntries(e) {
    return (this.index[e] || new Pe(ue.comparator)).toArray();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class fr {
  constructor(e) {
    this.Nn = e;
  }
  next() {
    return this.Nn += 2, this.Nn;
  }
  static Ln() {
    return new fr(0);
  }
  static Bn() {
    return new fr(-1);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class nA {
  constructor() {
    this.changes = new Er((e) => e.toString(), (e, t) => e.isEqual(t)), this.changesApplied = !1;
  }
  /**
   * Buffers a `RemoteDocumentCache.addEntry()` call.
   *
   * You can only modify documents that have already been retrieved via
   * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
   */
  addEntry(e) {
    this.assertNotApplied(), this.changes.set(e.key, e);
  }
  /**
   * Buffers a `RemoteDocumentCache.removeEntry()` call.
   *
   * You can only remove documents that have already been retrieved via
   * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
   */
  removeEntry(e, t) {
    this.assertNotApplied(), this.changes.set(e, Fe.newInvalidDocument(e).setReadTime(t));
  }
  /**
   * Looks up an entry in the cache. The buffered changes will first be checked,
   * and if no buffered change applies, this will forward to
   * `RemoteDocumentCache.getEntry()`.
   *
   * @param transaction - The transaction in which to perform any persistence
   *     operations.
   * @param documentKey - The key of the entry to look up.
   * @returns The cached document or an invalid document if we have nothing
   * cached.
   */
  getEntry(e, t) {
    this.assertNotApplied();
    const r = this.changes.get(t);
    return r !== void 0 ? V.resolve(r) : this.getFromCache(e, t);
  }
  /**
   * Looks up several entries in the cache, forwarding to
   * `RemoteDocumentCache.getEntry()`.
   *
   * @param transaction - The transaction in which to perform any persistence
   *     operations.
   * @param documentKeys - The keys of the entries to look up.
   * @returns A map of cached documents, indexed by key. If an entry cannot be
   *     found, the corresponding key will be mapped to an invalid document.
   */
  getEntries(e, t) {
    return this.getAllFromCache(e, t);
  }
  /**
   * Applies buffered changes to the underlying RemoteDocumentCache, using
   * the provided transaction.
   */
  apply(e) {
    return this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(e);
  }
  /** Helper to assert this.changes is not null  */
  assertNotApplied() {
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * @license
 * Copyright 2022 Google LLC
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
class rA {
  constructor(e, t) {
    this.overlayedDocument = e, this.mutatedFields = t;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class iA {
  constructor(e, t, r, i) {
    this.remoteDocumentCache = e, this.mutationQueue = t, this.documentOverlayCache = r, this.indexManager = i;
  }
  /**
   * Get the local view of the document identified by `key`.
   *
   * @returns Local view of the document or null if we don't have any cached
   * state for it.
   */
  getDocument(e, t) {
    let r = null;
    return this.documentOverlayCache.getOverlay(e, t).next((i) => (r = i, this.remoteDocumentCache.getEntry(e, t))).next((i) => (r !== null && ri(r.mutation, i, dt.empty(), Ee.now()), i));
  }
  /**
   * Gets the local view of the documents identified by `keys`.
   *
   * If we don't have cached state for a document in `keys`, a NoDocument will
   * be stored for that key in the resulting set.
   */
  getDocuments(e, t) {
    return this.remoteDocumentCache.getEntries(e, t).next((r) => this.getLocalViewOfDocuments(e, r, Q()).next(() => r));
  }
  /**
   * Similar to `getDocuments`, but creates the local view from the given
   * `baseDocs` without retrieving documents from the local store.
   *
   * @param transaction - The transaction this operation is scoped to.
   * @param docs - The documents to apply local mutations to get the local views.
   * @param existenceStateChanged - The set of document keys whose existence state
   *   is changed. This is useful to determine if some documents overlay needs
   *   to be recalculated.
   */
  getLocalViewOfDocuments(e, t, r = Q()) {
    const i = bn();
    return this.populateOverlays(e, i, t).next(() => this.computeViews(e, t, i, r).next((s) => {
      let a = Qr();
      return s.forEach((c, u) => {
        a = a.insert(c, u.overlayedDocument);
      }), a;
    }));
  }
  /**
   * Gets the overlayed documents for the given document map, which will include
   * the local view of those documents and a `FieldMask` indicating which fields
   * are mutated locally, `null` if overlay is a Set or Delete mutation.
   */
  getOverlayedDocuments(e, t) {
    const r = bn();
    return this.populateOverlays(e, r, t).next(() => this.computeViews(e, t, r, Q()));
  }
  /**
   * Fetches the overlays for {@code docs} and adds them to provided overlay map
   * if the map does not already contain an entry for the given document key.
   */
  populateOverlays(e, t, r) {
    const i = [];
    return r.forEach((s) => {
      t.has(s) || i.push(s);
    }), this.documentOverlayCache.getOverlays(e, i).next((s) => {
      s.forEach((a, c) => {
        t.set(a, c);
      });
    });
  }
  /**
   * Computes the local view for the given documents.
   *
   * @param docs - The documents to compute views for. It also has the base
   *   version of the documents.
   * @param overlays - The overlays that need to be applied to the given base
   *   version of the documents.
   * @param existenceStateChanged - A set of documents whose existence states
   *   might have changed. This is used to determine if we need to re-calculate
   *   overlays from mutation queues.
   * @return A map represents the local documents view.
   */
  computeViews(e, t, r, i) {
    let s = Ut();
    const a = ni(), c = function() {
      return ni();
    }();
    return t.forEach((u, h) => {
      const f = r.get(h.key);
      i.has(h.key) && (f === void 0 || f.mutation instanceof qn) ? s = s.insert(h.key, h) : f !== void 0 ? (a.set(h.key, f.mutation.getFieldMask()), ri(f.mutation, h, f.mutation.getFieldMask(), Ee.now())) : (
        // no overlay exists
        // Using EMPTY to indicate there is no overlay for the document.
        a.set(h.key, dt.empty())
      );
    }), this.recalculateAndSaveOverlays(e, s).next((u) => (u.forEach((h, f) => a.set(h, f)), t.forEach((h, f) => {
      var m;
      return c.set(h, new rA(f, (m = a.get(h)) !== null && m !== void 0 ? m : null));
    }), c));
  }
  recalculateAndSaveOverlays(e, t) {
    const r = ni();
    let i = new le((a, c) => a - c), s = Q();
    return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e, t).next((a) => {
      for (const c of a)
        c.keys().forEach((u) => {
          const h = t.get(u);
          if (h === null)
            return;
          let f = r.get(u) || dt.empty();
          f = c.applyToLocalView(h, f), r.set(u, f);
          const m = (i.get(c.batchId) || Q()).add(u);
          i = i.insert(c.batchId, m);
        });
    }).next(() => {
      const a = [], c = i.getReverseIterator();
      for (; c.hasNext(); ) {
        const u = c.getNext(), h = u.key, f = u.value, m = up();
        f.forEach((_) => {
          if (!s.has(_)) {
            const w = gp(t.get(_), r.get(_));
            w !== null && m.set(_, w), s = s.add(_);
          }
        }), a.push(this.documentOverlayCache.saveOverlays(e, h, m));
      }
      return V.waitFor(a);
    }).next(() => r);
  }
  /**
   * Recalculates overlays by reading the documents from remote document cache
   * first, and saves them after they are calculated.
   */
  recalculateAndSaveOverlaysForDocumentKeys(e, t) {
    return this.remoteDocumentCache.getEntries(e, t).next((r) => this.recalculateAndSaveOverlays(e, r));
  }
  /**
   * Performs a query against the local view of all documents.
   *
   * @param transaction - The persistence transaction.
   * @param query - The query to match documents against.
   * @param offset - Read time and key to start scanning by (exclusive).
   * @param context - A optional tracker to keep a record of important details
   *   during database local query execution.
   */
  getDocumentsMatchingQuery(e, t, r, i) {
    return function(a) {
      return H.isDocumentKey(a.path) && a.collectionGroup === null && a.filters.length === 0;
    }(t) ? this.getDocumentsMatchingDocumentQuery(e, t.path) : hb(t) ? this.getDocumentsMatchingCollectionGroupQuery(e, t, r, i) : this.getDocumentsMatchingCollectionQuery(e, t, r, i);
  }
  /**
   * Given a collection group, returns the next documents that follow the provided offset, along
   * with an updated batch ID.
   *
   * <p>The documents returned by this method are ordered by remote version from the provided
   * offset. If there are no more remote documents after the provided offset, documents with
   * mutations in order of batch id from the offset are returned. Since all documents in a batch are
   * returned together, the total number of documents returned can exceed {@code count}.
   *
   * @param transaction
   * @param collectionGroup The collection group for the documents.
   * @param offset The offset to index into.
   * @param count The number of documents to return
   * @return A LocalWriteResult with the documents that follow the provided offset and the last processed batch id.
   */
  getNextDocuments(e, t, r, i) {
    return this.remoteDocumentCache.getAllFromCollectionGroup(e, t, r, i).next((s) => {
      const a = i - s.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(e, t, r.largestBatchId, i - s.size) : V.resolve(bn());
      let c = -1, u = s;
      return a.next((h) => V.forEach(h, (f, m) => (c < m.largestBatchId && (c = m.largestBatchId), s.get(f) ? V.resolve() : this.remoteDocumentCache.getEntry(e, f).next((_) => {
        u = u.insert(f, _);
      }))).next(() => this.populateOverlays(e, h, s)).next(() => this.computeViews(e, u, h, Q())).next((f) => ({
        batchId: c,
        changes: cp(f)
      })));
    });
  }
  getDocumentsMatchingDocumentQuery(e, t) {
    return this.getDocument(e, new H(t)).next((r) => {
      let i = Qr();
      return r.isFoundDocument() && (i = i.insert(r.key, r)), i;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(e, t, r, i) {
    const s = t.collectionGroup;
    let a = Qr();
    return this.indexManager.getCollectionParents(e, s).next((c) => V.forEach(c, (u) => {
      const h = function(m, _) {
        return new no(
          _,
          /*collectionGroup=*/
          null,
          m.explicitOrderBy.slice(),
          m.filters.slice(),
          m.limit,
          m.limitType,
          m.startAt,
          m.endAt
        );
      }(t, u.child(s));
      return this.getDocumentsMatchingCollectionQuery(e, h, r, i).next((f) => {
        f.forEach((m, _) => {
          a = a.insert(m, _);
        });
      });
    }).next(() => a));
  }
  getDocumentsMatchingCollectionQuery(e, t, r, i) {
    let s;
    return this.documentOverlayCache.getOverlaysForCollection(e, t.path, r.largestBatchId).next((a) => (s = a, this.remoteDocumentCache.getDocumentsMatchingQuery(e, t, r, s, i))).next((a) => {
      s.forEach((u, h) => {
        const f = h.getKey();
        a.get(f) === null && (a = a.insert(f, Fe.newInvalidDocument(f)));
      });
      let c = Qr();
      return a.forEach((u, h) => {
        const f = s.get(u);
        f !== void 0 && ri(f.mutation, h, dt.empty(), Ee.now()), // Finally, insert the documents that still match the query
        io(t, h) && (c = c.insert(u, h));
      }), c;
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class sA {
  constructor(e) {
    this.serializer = e, this.lr = /* @__PURE__ */ new Map(), this.hr = /* @__PURE__ */ new Map();
  }
  getBundleMetadata(e, t) {
    return V.resolve(this.lr.get(t));
  }
  saveBundleMetadata(e, t) {
    return this.lr.set(
      t.id,
      /** Decodes a BundleMetadata proto into a BundleMetadata object. */
      function(i) {
        return {
          id: i.id,
          version: i.version,
          createTime: vt(i.createTime)
        };
      }(t)
    ), V.resolve();
  }
  getNamedQuery(e, t) {
    return V.resolve(this.hr.get(t));
  }
  saveNamedQuery(e, t) {
    return this.hr.set(t.name, function(i) {
      return {
        name: i.name,
        query: Zb(i.bundledQuery),
        readTime: vt(i.readTime)
      };
    }(t)), V.resolve();
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
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
class oA {
  constructor() {
    this.overlays = new le(H.comparator), this.Pr = /* @__PURE__ */ new Map();
  }
  getOverlay(e, t) {
    return V.resolve(this.overlays.get(t));
  }
  getOverlays(e, t) {
    const r = bn();
    return V.forEach(t, (i) => this.getOverlay(e, i).next((s) => {
      s !== null && r.set(i, s);
    })).next(() => r);
  }
  saveOverlays(e, t, r) {
    return r.forEach((i, s) => {
      this.ht(e, t, s);
    }), V.resolve();
  }
  removeOverlaysForBatchId(e, t, r) {
    const i = this.Pr.get(r);
    return i !== void 0 && (i.forEach((s) => this.overlays = this.overlays.remove(s)), this.Pr.delete(r)), V.resolve();
  }
  getOverlaysForCollection(e, t, r) {
    const i = bn(), s = t.length + 1, a = new H(t.child("")), c = this.overlays.getIteratorFrom(a);
    for (; c.hasNext(); ) {
      const u = c.getNext().value, h = u.getKey();
      if (!t.isPrefixOf(h.path))
        break;
      h.path.length === s && u.largestBatchId > r && i.set(u.getKey(), u);
    }
    return V.resolve(i);
  }
  getOverlaysForCollectionGroup(e, t, r, i) {
    let s = new le((h, f) => h - f);
    const a = this.overlays.getIterator();
    for (; a.hasNext(); ) {
      const h = a.getNext().value;
      if (h.getKey().getCollectionGroup() === t && h.largestBatchId > r) {
        let f = s.get(h.largestBatchId);
        f === null && (f = bn(), s = s.insert(h.largestBatchId, f)), f.set(h.getKey(), h);
      }
    }
    const c = bn(), u = s.getIterator();
    for (; u.hasNext() && (u.getNext().value.forEach((h, f) => c.set(h, f)), !(c.size() >= i)); )
      ;
    return V.resolve(c);
  }
  ht(e, t, r) {
    const i = this.overlays.get(r.key);
    if (i !== null) {
      const a = this.Pr.get(i.largestBatchId).delete(r.key);
      this.Pr.set(i.largestBatchId, a);
    }
    this.overlays = this.overlays.insert(r.key, new Pb(t, r));
    let s = this.Pr.get(t);
    s === void 0 && (s = Q(), this.Pr.set(t, s)), this.Pr.set(t, s.add(r.key));
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
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
class aA {
  constructor() {
    this.sessionToken = Ne.EMPTY_BYTE_STRING;
  }
  getSessionToken(e) {
    return V.resolve(this.sessionToken);
  }
  setSessionToken(e, t) {
    return this.sessionToken = t, V.resolve();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Ec {
  constructor() {
    this.Ir = new Pe(Ie.Tr), // A set of outstanding references to a document sorted by target id.
    this.Er = new Pe(Ie.dr);
  }
  /** Returns true if the reference set contains no references. */
  isEmpty() {
    return this.Ir.isEmpty();
  }
  /** Adds a reference to the given document key for the given ID. */
  addReference(e, t) {
    const r = new Ie(e, t);
    this.Ir = this.Ir.add(r), this.Er = this.Er.add(r);
  }
  /** Add references to the given document keys for the given ID. */
  Ar(e, t) {
    e.forEach((r) => this.addReference(r, t));
  }
  /**
   * Removes a reference to the given document key for the given
   * ID.
   */
  removeReference(e, t) {
    this.Rr(new Ie(e, t));
  }
  Vr(e, t) {
    e.forEach((r) => this.removeReference(r, t));
  }
  /**
   * Clears all references with a given ID. Calls removeRef() for each key
   * removed.
   */
  mr(e) {
    const t = new H(new ue([])), r = new Ie(t, e), i = new Ie(t, e + 1), s = [];
    return this.Er.forEachInRange([r, i], (a) => {
      this.Rr(a), s.push(a.key);
    }), s;
  }
  gr() {
    this.Ir.forEach((e) => this.Rr(e));
  }
  Rr(e) {
    this.Ir = this.Ir.delete(e), this.Er = this.Er.delete(e);
  }
  pr(e) {
    const t = new H(new ue([])), r = new Ie(t, e), i = new Ie(t, e + 1);
    let s = Q();
    return this.Er.forEachInRange([r, i], (a) => {
      s = s.add(a.key);
    }), s;
  }
  containsKey(e) {
    const t = new Ie(e, 0), r = this.Ir.firstAfterOrEqual(t);
    return r !== null && e.isEqual(r.key);
  }
}
class Ie {
  constructor(e, t) {
    this.key = e, this.yr = t;
  }
  /** Compare by key then by ID */
  static Tr(e, t) {
    return H.comparator(e.key, t.key) || ee(e.yr, t.yr);
  }
  /** Compare by ID then by key */
  static dr(e, t) {
    return ee(e.yr, t.yr) || H.comparator(e.key, t.key);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class cA {
  constructor(e, t) {
    this.indexManager = e, this.referenceDelegate = t, /**
     * The set of all mutations that have been sent but not yet been applied to
     * the backend.
     */
    this.mutationQueue = [], /** Next value to use when assigning sequential IDs to each mutation batch. */
    this.wr = 1, /** An ordered mapping between documents and the mutations batch IDs. */
    this.Sr = new Pe(Ie.Tr);
  }
  checkEmpty(e) {
    return V.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(e, t, r, i) {
    const s = this.wr;
    this.wr++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
    const a = new Cb(s, t, r, i);
    this.mutationQueue.push(a);
    for (const c of i)
      this.Sr = this.Sr.add(new Ie(c.key, s)), this.indexManager.addToCollectionParentIndex(e, c.key.path.popLast());
    return V.resolve(a);
  }
  lookupMutationBatch(e, t) {
    return V.resolve(this.br(t));
  }
  getNextMutationBatchAfterBatchId(e, t) {
    const r = t + 1, i = this.Dr(r), s = i < 0 ? 0 : i;
    return V.resolve(this.mutationQueue.length > s ? this.mutationQueue[s] : null);
  }
  getHighestUnacknowledgedBatchId() {
    return V.resolve(this.mutationQueue.length === 0 ? -1 : this.wr - 1);
  }
  getAllMutationBatches(e) {
    return V.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(e, t) {
    const r = new Ie(t, 0), i = new Ie(t, Number.POSITIVE_INFINITY), s = [];
    return this.Sr.forEachInRange([r, i], (a) => {
      const c = this.br(a.yr);
      s.push(c);
    }), V.resolve(s);
  }
  getAllMutationBatchesAffectingDocumentKeys(e, t) {
    let r = new Pe(ee);
    return t.forEach((i) => {
      const s = new Ie(i, 0), a = new Ie(i, Number.POSITIVE_INFINITY);
      this.Sr.forEachInRange([s, a], (c) => {
        r = r.add(c.yr);
      });
    }), V.resolve(this.Cr(r));
  }
  getAllMutationBatchesAffectingQuery(e, t) {
    const r = t.path, i = r.length + 1;
    let s = r;
    H.isDocumentKey(s) || (s = s.child(""));
    const a = new Ie(new H(s), 0);
    let c = new Pe(ee);
    return this.Sr.forEachWhile((u) => {
      const h = u.key.path;
      return !!r.isPrefixOf(h) && // Rows with document keys more than one segment longer than the query
      // path can't be matches. For example, a query on 'rooms' can't match
      // the document /rooms/abc/messages/xyx.
      // TODO(mcg): we'll need a different scanner when we implement
      // ancestor queries.
      (h.length === i && (c = c.add(u.yr)), !0);
    }, a), V.resolve(this.Cr(c));
  }
  Cr(e) {
    const t = [];
    return e.forEach((r) => {
      const i = this.br(r);
      i !== null && t.push(i);
    }), t;
  }
  removeMutationBatch(e, t) {
    ae(this.vr(t.batchId, "removed") === 0), this.mutationQueue.shift();
    let r = this.Sr;
    return V.forEach(t.mutations, (i) => {
      const s = new Ie(i.key, t.batchId);
      return r = r.delete(s), this.referenceDelegate.markPotentiallyOrphaned(e, i.key);
    }).next(() => {
      this.Sr = r;
    });
  }
  xn(e) {
  }
  containsKey(e, t) {
    const r = new Ie(t, 0), i = this.Sr.firstAfterOrEqual(r);
    return V.resolve(t.isEqual(i && i.key));
  }
  performConsistencyCheck(e) {
    return this.mutationQueue.length, V.resolve();
  }
  /**
   * Finds the index of the given batchId in the mutation queue and asserts that
   * the resulting index is within the bounds of the queue.
   *
   * @param batchId - The batchId to search for
   * @param action - A description of what the caller is doing, phrased in passive
   * form (e.g. "acknowledged" in a routine that acknowledges batches).
   */
  vr(e, t) {
    return this.Dr(e);
  }
  /**
   * Finds the index of the given batchId in the mutation queue. This operation
   * is O(1).
   *
   * @returns The computed index of the batch with the given batchId, based on
   * the state of the queue. Note this index can be negative if the requested
   * batchId has already been removed from the queue or past the end of the
   * queue if the batchId is larger than the last added batch.
   */
  Dr(e) {
    return this.mutationQueue.length === 0 ? 0 : e - this.mutationQueue[0].batchId;
  }
  /**
   * A version of lookupMutationBatch that doesn't return a promise, this makes
   * other functions that uses this code easier to read and more efficient.
   */
  br(e) {
    const t = this.Dr(e);
    return t < 0 || t >= this.mutationQueue.length ? null : this.mutationQueue[t];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class uA {
  /**
   * @param sizer - Used to assess the size of a document. For eager GC, this is
   * expected to just return 0 to avoid unnecessarily doing the work of
   * calculating the size.
   */
  constructor(e) {
    this.Fr = e, /** Underlying cache of documents and their read times. */
    this.docs = function() {
      return new le(H.comparator);
    }(), /** Size of all cached documents. */
    this.size = 0;
  }
  setIndexManager(e) {
    this.indexManager = e;
  }
  /**
   * Adds the supplied entry to the cache and updates the cache size as appropriate.
   *
   * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()`.
   */
  addEntry(e, t) {
    const r = t.key, i = this.docs.get(r), s = i ? i.size : 0, a = this.Fr(t);
    return this.docs = this.docs.insert(r, {
      document: t.mutableCopy(),
      size: a
    }), this.size += a - s, this.indexManager.addToCollectionParentIndex(e, r.path.popLast());
  }
  /**
   * Removes the specified entry from the cache and updates the cache size as appropriate.
   *
   * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()`.
   */
  removeEntry(e) {
    const t = this.docs.get(e);
    t && (this.docs = this.docs.remove(e), this.size -= t.size);
  }
  getEntry(e, t) {
    const r = this.docs.get(t);
    return V.resolve(r ? r.document.mutableCopy() : Fe.newInvalidDocument(t));
  }
  getEntries(e, t) {
    let r = Ut();
    return t.forEach((i) => {
      const s = this.docs.get(i);
      r = r.insert(i, s ? s.document.mutableCopy() : Fe.newInvalidDocument(i));
    }), V.resolve(r);
  }
  getDocumentsMatchingQuery(e, t, r, i) {
    let s = Ut();
    const a = t.path, c = new H(a.child("")), u = this.docs.getIteratorFrom(c);
    for (; u.hasNext(); ) {
      const { key: h, value: { document: f } } = u.getNext();
      if (!a.isPrefixOf(h.path))
        break;
      h.path.length > a.length + 1 || WI(HI(f), r) <= 0 || (i.has(f.key) || io(t, f)) && (s = s.insert(f.key, f.mutableCopy()));
    }
    return V.resolve(s);
  }
  getAllFromCollectionGroup(e, t, r, i) {
    W();
  }
  Mr(e, t) {
    return V.forEach(this.docs, (r) => t(r));
  }
  newChangeBuffer(e) {
    return new lA(this);
  }
  getSize(e) {
    return V.resolve(this.size);
  }
}
class lA extends nA {
  constructor(e) {
    super(), this.ur = e;
  }
  applyChanges(e) {
    const t = [];
    return this.changes.forEach((r, i) => {
      i.isValidDocument() ? t.push(this.ur.addEntry(e, i)) : this.ur.removeEntry(r);
    }), V.waitFor(t);
  }
  getFromCache(e, t) {
    return this.ur.getEntry(e, t);
  }
  getAllFromCache(e, t) {
    return this.ur.getEntries(e, t);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class hA {
  constructor(e) {
    this.persistence = e, /**
     * Maps a target to the data about that target
     */
    this.Or = new Er((t) => mc(t), gc), /** The last received snapshot version. */
    this.lastRemoteSnapshotVersion = K.min(), /** The highest numbered target ID encountered. */
    this.highestTargetId = 0, /** The highest sequence number encountered. */
    this.Nr = 0, /**
     * A ordered bidirectional mapping between documents and the remote target
     * IDs.
     */
    this.Lr = new Ec(), this.targetCount = 0, this.Br = fr.Ln();
  }
  forEachTarget(e, t) {
    return this.Or.forEach((r, i) => t(i)), V.resolve();
  }
  getLastRemoteSnapshotVersion(e) {
    return V.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(e) {
    return V.resolve(this.Nr);
  }
  allocateTargetId(e) {
    return this.highestTargetId = this.Br.next(), V.resolve(this.highestTargetId);
  }
  setTargetsMetadata(e, t, r) {
    return r && (this.lastRemoteSnapshotVersion = r), t > this.Nr && (this.Nr = t), V.resolve();
  }
  Qn(e) {
    this.Or.set(e.target, e);
    const t = e.targetId;
    t > this.highestTargetId && (this.Br = new fr(t), this.highestTargetId = t), e.sequenceNumber > this.Nr && (this.Nr = e.sequenceNumber);
  }
  addTargetData(e, t) {
    return this.Qn(t), this.targetCount += 1, V.resolve();
  }
  updateTargetData(e, t) {
    return this.Qn(t), V.resolve();
  }
  removeTargetData(e, t) {
    return this.Or.delete(t.target), this.Lr.mr(t.targetId), this.targetCount -= 1, V.resolve();
  }
  removeTargets(e, t, r) {
    let i = 0;
    const s = [];
    return this.Or.forEach((a, c) => {
      c.sequenceNumber <= t && r.get(c.targetId) === null && (this.Or.delete(a), s.push(this.removeMatchingKeysForTargetId(e, c.targetId)), i++);
    }), V.waitFor(s).next(() => i);
  }
  getTargetCount(e) {
    return V.resolve(this.targetCount);
  }
  getTargetData(e, t) {
    const r = this.Or.get(t) || null;
    return V.resolve(r);
  }
  addMatchingKeys(e, t, r) {
    return this.Lr.Ar(t, r), V.resolve();
  }
  removeMatchingKeys(e, t, r) {
    this.Lr.Vr(t, r);
    const i = this.persistence.referenceDelegate, s = [];
    return i && t.forEach((a) => {
      s.push(i.markPotentiallyOrphaned(e, a));
    }), V.waitFor(s);
  }
  removeMatchingKeysForTargetId(e, t) {
    return this.Lr.mr(t), V.resolve();
  }
  getMatchingKeysForTargetId(e, t) {
    const r = this.Lr.pr(t);
    return V.resolve(r);
  }
  containsKey(e, t) {
    return V.resolve(this.Lr.containsKey(t));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class dA {
  /**
   * The constructor accepts a factory for creating a reference delegate. This
   * allows both the delegate and this instance to have strong references to
   * each other without having nullable fields that would then need to be
   * checked or asserted on every access.
   */
  constructor(e, t) {
    this.kr = {}, this.overlays = {}, this.qr = new hc(0), this.Qr = !1, this.Qr = !0, this.Kr = new aA(), this.referenceDelegate = e(this), this.$r = new hA(this), this.indexManager = new eA(), this.remoteDocumentCache = function(i) {
      return new uA(i);
    }((r) => this.referenceDelegate.Ur(r)), this.serializer = new Jb(t), this.Wr = new sA(this.serializer);
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return this.Qr = !1, Promise.resolve();
  }
  get started() {
    return this.Qr;
  }
  setDatabaseDeletedListener() {
  }
  setNetworkEnabled() {
  }
  getIndexManager(e) {
    return this.indexManager;
  }
  getDocumentOverlayCache(e) {
    let t = this.overlays[e.toKey()];
    return t || (t = new oA(), this.overlays[e.toKey()] = t), t;
  }
  getMutationQueue(e, t) {
    let r = this.kr[e.toKey()];
    return r || (r = new cA(t, this.referenceDelegate), this.kr[e.toKey()] = r), r;
  }
  getGlobalsCache() {
    return this.Kr;
  }
  getTargetCache() {
    return this.$r;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.Wr;
  }
  runTransaction(e, t, r) {
    U("MemoryPersistence", "Starting transaction:", e);
    const i = new fA(this.qr.next());
    return this.referenceDelegate.Gr(), r(i).next((s) => this.referenceDelegate.zr(i).next(() => s)).toPromise().then((s) => (i.raiseOnCommittedEvent(), s));
  }
  jr(e, t) {
    return V.or(Object.values(this.kr).map((r) => () => r.containsKey(e, t)));
  }
}
class fA extends GI {
  constructor(e) {
    super(), this.currentSequenceNumber = e;
  }
}
class Tc {
  constructor(e) {
    this.persistence = e, /** Tracks all documents that are active in Query views. */
    this.Hr = new Ec(), /** The list of documents that are potentially GCed after each transaction. */
    this.Jr = null;
  }
  static Yr(e) {
    return new Tc(e);
  }
  get Zr() {
    if (this.Jr)
      return this.Jr;
    throw W();
  }
  addReference(e, t, r) {
    return this.Hr.addReference(r, t), this.Zr.delete(r.toString()), V.resolve();
  }
  removeReference(e, t, r) {
    return this.Hr.removeReference(r, t), this.Zr.add(r.toString()), V.resolve();
  }
  markPotentiallyOrphaned(e, t) {
    return this.Zr.add(t.toString()), V.resolve();
  }
  removeTarget(e, t) {
    this.Hr.mr(t.targetId).forEach((i) => this.Zr.add(i.toString()));
    const r = this.persistence.getTargetCache();
    return r.getMatchingKeysForTargetId(e, t.targetId).next((i) => {
      i.forEach((s) => this.Zr.add(s.toString()));
    }).next(() => r.removeTargetData(e, t));
  }
  Gr() {
    this.Jr = /* @__PURE__ */ new Set();
  }
  zr(e) {
    const t = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return V.forEach(this.Zr, (r) => {
      const i = H.fromPath(r);
      return this.Xr(e, i).next((s) => {
        s || t.removeEntry(i, K.min());
      });
    }).next(() => (this.Jr = null, t.apply(e)));
  }
  updateLimboDocument(e, t) {
    return this.Xr(e, t).next((r) => {
      r ? this.Zr.delete(t.toString()) : this.Zr.add(t.toString());
    });
  }
  Ur(e) {
    return 0;
  }
  Xr(e, t) {
    return V.or([() => V.resolve(this.Hr.containsKey(t)), () => this.persistence.getTargetCache().containsKey(e, t), () => this.persistence.jr(e, t)]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Ic {
  constructor(e, t, r, i) {
    this.targetId = e, this.fromCache = t, this.Ki = r, this.$i = i;
  }
  static Ui(e, t) {
    let r = Q(), i = Q();
    for (const s of t.docChanges)
      switch (s.type) {
        case 0:
          r = r.add(s.doc.key);
          break;
        case 1:
          i = i.add(s.doc.key);
      }
    return new Ic(e, t.fromCache, r, i);
  }
}
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
class pA {
  constructor() {
    this._documentReadCount = 0;
  }
  get documentReadCount() {
    return this._documentReadCount;
  }
  incrementDocumentReadCount(e) {
    this._documentReadCount += e;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class mA {
  constructor() {
    this.Wi = !1, this.Gi = !1, /**
     * SDK only decides whether it should create index when collection size is
     * larger than this.
     */
    this.zi = 100, this.ji = /**
    * This cost represents the evaluation result of
    * (([index, docKey] + [docKey, docContent]) per document in the result set)
    * / ([docKey, docContent] per documents in full collection scan) coming from
    * experiment [enter PR experiment URL here].
    */
    function() {
      return zv() ? 8 : QI(Oe()) > 0 ? 6 : 4;
    }();
  }
  /** Sets the document view to query against. */
  initialize(e, t) {
    this.Hi = e, this.indexManager = t, this.Wi = !0;
  }
  /** Returns all local documents matching the specified query. */
  getDocumentsMatchingQuery(e, t, r, i) {
    const s = {
      result: null
    };
    return this.Ji(e, t).next((a) => {
      s.result = a;
    }).next(() => {
      if (!s.result)
        return this.Yi(e, t, i, r).next((a) => {
          s.result = a;
        });
    }).next(() => {
      if (s.result)
        return;
      const a = new pA();
      return this.Zi(e, t, a).next((c) => {
        if (s.result = c, this.Gi)
          return this.Xi(e, t, a, c.size);
      });
    }).next(() => s.result);
  }
  Xi(e, t, r, i) {
    return r.documentReadCount < this.zi ? (zr() <= Y.DEBUG && U("QueryEngine", "SDK will not create cache indexes for query:", Yn(t), "since it only creates cache indexes for collection contains", "more than or equal to", this.zi, "documents"), V.resolve()) : (zr() <= Y.DEBUG && U("QueryEngine", "Query:", Yn(t), "scans", r.documentReadCount, "local documents and returns", i, "documents as results."), r.documentReadCount > this.ji * i ? (zr() <= Y.DEBUG && U("QueryEngine", "The SDK decides to create cache indexes for query:", Yn(t), "as using cache indexes may help improve performance."), this.indexManager.createTargetIndexes(e, _t(t))) : V.resolve());
  }
  /**
   * Performs an indexed query that evaluates the query based on a collection's
   * persisted index values. Returns `null` if an index is not available.
   */
  Ji(e, t) {
    if (Th(t))
      return V.resolve(null);
    let r = _t(t);
    return this.indexManager.getIndexType(e, r).next((i) => i === 0 ? null : (t.limit !== null && i === 1 && // We cannot apply a limit for targets that are served using a partial
    // index. If a partial index will be used to serve the target, the
    // query may return a superset of documents that match the target
    // (e.g. if the index doesn't include all the target's filters), or
    // may return the correct set of documents in the wrong order (e.g. if
    // the index doesn't include a segment for one of the orderBys).
    // Therefore, a limit should not be applied in such cases.
    (t = Na(
      t,
      null,
      "F"
      /* LimitType.First */
    ), r = _t(t)), this.indexManager.getDocumentsMatchingTarget(e, r).next((s) => {
      const a = Q(...s);
      return this.Hi.getDocuments(e, a).next((c) => this.indexManager.getMinOffset(e, r).next((u) => {
        const h = this.es(t, c);
        return this.ts(t, h, a, u.readTime) ? this.Ji(e, Na(
          t,
          null,
          "F"
          /* LimitType.First */
        )) : this.ns(e, h, t, u);
      }));
    })));
  }
  /**
   * Performs a query based on the target's persisted query mapping. Returns
   * `null` if the mapping is not available or cannot be used.
   */
  Yi(e, t, r, i) {
    return Th(t) || i.isEqual(K.min()) ? V.resolve(null) : this.Hi.getDocuments(e, r).next((s) => {
      const a = this.es(t, s);
      return this.ts(t, a, r, i) ? V.resolve(null) : (zr() <= Y.DEBUG && U("QueryEngine", "Re-using previous result from %s to execute query: %s", i.toString(), Yn(t)), this.ns(e, a, t, qI(i, -1)).next((c) => c));
    });
  }
  /** Applies the query filter and sorting to the provided documents.  */
  es(e, t) {
    let r = new Pe(op(e));
    return t.forEach((i, s) => {
      io(e, s) && (r = r.add(s));
    }), r;
  }
  /**
   * Determines if a limit query needs to be refilled from cache, making it
   * ineligible for index-free execution.
   *
   * @param query - The query.
   * @param sortedPreviousResults - The documents that matched the query when it
   * was last synchronized, sorted by the query's comparator.
   * @param remoteKeys - The document keys that matched the query at the last
   * snapshot.
   * @param limboFreeSnapshotVersion - The version of the snapshot when the
   * query was last synchronized.
   */
  ts(e, t, r, i) {
    if (e.limit === null)
      return !1;
    if (r.size !== t.size)
      return !0;
    const s = e.limitType === "F" ? t.last() : t.first();
    return !!s && (s.hasPendingWrites || s.version.compareTo(i) > 0);
  }
  Zi(e, t, r) {
    return zr() <= Y.DEBUG && U("QueryEngine", "Using full collection scan to execute query:", Yn(t)), this.Hi.getDocumentsMatchingQuery(e, t, un.min(), r);
  }
  /**
   * Combines the results from an indexed execution with the remaining documents
   * that have not yet been indexed.
   */
  ns(e, t, r, i) {
    return this.Hi.getDocumentsMatchingQuery(e, r, i).next((s) => (
      // Merge with existing results
      (t.forEach((a) => {
        s = s.insert(a.key, a);
      }), s)
    ));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class gA {
  constructor(e, t, r, i) {
    this.persistence = e, this.rs = t, this.serializer = i, /**
     * Maps a targetID to data about its target.
     *
     * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
     * of `applyRemoteEvent()` idempotent.
     */
    this.ss = new le(ee), /** Maps a target to its targetID. */
    // TODO(wuandy): Evaluate if TargetId can be part of Target.
    this.os = new Er((s) => mc(s), gc), /**
     * A per collection group index of the last read time processed by
     * `getNewDocumentChanges()`.
     *
     * PORTING NOTE: This is only used for multi-tab synchronization.
     */
    this._s = /* @__PURE__ */ new Map(), this.us = e.getRemoteDocumentCache(), this.$r = e.getTargetCache(), this.Wr = e.getBundleCache(), this.cs(r);
  }
  cs(e) {
    this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e), this.indexManager = this.persistence.getIndexManager(e), this.mutationQueue = this.persistence.getMutationQueue(e, this.indexManager), this.localDocuments = new iA(this.us, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.us.setIndexManager(this.indexManager), this.rs.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(e) {
    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (t) => e.collect(t, this.ss));
  }
}
function yA(n, e, t, r) {
  return new gA(n, e, t, r);
}
async function Pp(n, e) {
  const t = G(n);
  return await t.persistence.runTransaction("Handle user change", "readonly", (r) => {
    let i;
    return t.mutationQueue.getAllMutationBatches(r).next((s) => (i = s, t.cs(e), t.mutationQueue.getAllMutationBatches(r))).next((s) => {
      const a = [], c = [];
      let u = Q();
      for (const h of i) {
        a.push(h.batchId);
        for (const f of h.mutations)
          u = u.add(f.key);
      }
      for (const h of s) {
        c.push(h.batchId);
        for (const f of h.mutations)
          u = u.add(f.key);
      }
      return t.localDocuments.getDocuments(r, u).next((h) => ({
        ls: h,
        removedBatchIds: a,
        addedBatchIds: c
      }));
    });
  });
}
function _A(n, e) {
  const t = G(n);
  return t.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (r) => {
    const i = e.batch.keys(), s = t.us.newChangeBuffer({
      trackRemovals: !0
    });
    return function(c, u, h, f) {
      const m = h.batch, _ = m.keys();
      let w = V.resolve();
      return _.forEach((A) => {
        w = w.next(() => f.getEntry(u, A)).next((R) => {
          const p = h.docVersions.get(A);
          ae(p !== null), R.version.compareTo(p) < 0 && (m.applyToRemoteDocument(R, h), R.isValidDocument() && // We use the commitVersion as the readTime rather than the
          // document's updateTime since the updateTime is not advanced
          // for updates that do not modify the underlying document.
          (R.setReadTime(h.commitVersion), f.addEntry(R)));
        });
      }), w.next(() => c.mutationQueue.removeMutationBatch(u, m));
    }(t, r, e, s).next(() => s.apply(r)).next(() => t.mutationQueue.performConsistencyCheck(r)).next(() => t.documentOverlayCache.removeOverlaysForBatchId(r, i, e.batch.batchId)).next(() => t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r, function(c) {
      let u = Q();
      for (let h = 0; h < c.mutationResults.length; ++h)
        c.mutationResults[h].transformResults.length > 0 && (u = u.add(c.batch.mutations[h].key));
      return u;
    }(e))).next(() => t.localDocuments.getDocuments(r, i));
  });
}
function kp(n) {
  const e = G(n);
  return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (t) => e.$r.getLastRemoteSnapshotVersion(t));
}
function vA(n, e) {
  const t = G(n), r = e.snapshotVersion;
  let i = t.ss;
  return t.persistence.runTransaction("Apply remote event", "readwrite-primary", (s) => {
    const a = t.us.newChangeBuffer({
      trackRemovals: !0
    });
    i = t.ss;
    const c = [];
    e.targetChanges.forEach((f, m) => {
      const _ = i.get(m);
      if (!_)
        return;
      c.push(t.$r.removeMatchingKeys(s, f.removedDocuments, m).next(() => t.$r.addMatchingKeys(s, f.addedDocuments, m)));
      let w = _.withSequenceNumber(s.currentSequenceNumber);
      e.targetMismatches.get(m) !== null ? w = w.withResumeToken(Ne.EMPTY_BYTE_STRING, K.min()).withLastLimboFreeSnapshotVersion(K.min()) : f.resumeToken.approximateByteSize() > 0 && (w = w.withResumeToken(f.resumeToken, r)), i = i.insert(m, w), // Update the target data if there are target changes (or if
      // sufficient time has passed since the last update).
      /**
      * Returns true if the newTargetData should be persisted during an update of
      * an active target. TargetData should always be persisted when a target is
      * being released and should not call this function.
      *
      * While the target is active, TargetData updates can be omitted when nothing
      * about the target has changed except metadata like the resume token or
      * snapshot version. Occasionally it's worth the extra write to prevent these
      * values from getting too stale after a crash, but this doesn't have to be
      * too frequent.
      */
      function(R, p, I) {
        return R.resumeToken.approximateByteSize() === 0 || p.snapshotVersion.toMicroseconds() - R.snapshotVersion.toMicroseconds() >= 3e8 ? !0 : I.addedDocuments.size + I.modifiedDocuments.size + I.removedDocuments.size > 0;
      }(_, w, f) && c.push(t.$r.updateTargetData(s, w));
    });
    let u = Ut(), h = Q();
    if (e.documentUpdates.forEach((f) => {
      e.resolvedLimboDocuments.has(f) && c.push(t.persistence.referenceDelegate.updateLimboDocument(s, f));
    }), // Each loop iteration only affects its "own" doc, so it's safe to get all
    // the remote documents in advance in a single call.
    c.push(wA(s, a, e.documentUpdates).next((f) => {
      u = f.hs, h = f.Ps;
    })), !r.isEqual(K.min())) {
      const f = t.$r.getLastRemoteSnapshotVersion(s).next((m) => t.$r.setTargetsMetadata(s, s.currentSequenceNumber, r));
      c.push(f);
    }
    return V.waitFor(c).next(() => a.apply(s)).next(() => t.localDocuments.getLocalViewOfDocuments(s, u, h)).next(() => u);
  }).then((s) => (t.ss = i, s));
}
function wA(n, e, t) {
  let r = Q(), i = Q();
  return t.forEach((s) => r = r.add(s)), e.getEntries(n, r).next((s) => {
    let a = Ut();
    return t.forEach((c, u) => {
      const h = s.get(c);
      u.isFoundDocument() !== h.isFoundDocument() && (i = i.add(c)), // Note: The order of the steps below is important, since we want
      // to ensure that rejected limbo resolutions (which fabricate
      // NoDocuments with SnapshotVersion.min()) never add documents to
      // cache.
      u.isNoDocument() && u.version.isEqual(K.min()) ? (
        // NoDocuments with SnapshotVersion.min() are used in manufactured
        // events. We remove these documents from cache since we lost
        // access.
        (e.removeEntry(c, u.readTime), a = a.insert(c, u))
      ) : !h.isValidDocument() || u.version.compareTo(h.version) > 0 || u.version.compareTo(h.version) === 0 && h.hasPendingWrites ? (e.addEntry(u), a = a.insert(c, u)) : U("LocalStore", "Ignoring outdated watch update for ", c, ". Current version:", h.version, " Watch version:", u.version);
    }), {
      hs: a,
      Ps: i
    };
  });
}
function EA(n, e) {
  const t = G(n);
  return t.persistence.runTransaction("Get next mutation batch", "readonly", (r) => (e === void 0 && (e = -1), t.mutationQueue.getNextMutationBatchAfterBatchId(r, e)));
}
function TA(n, e) {
  const t = G(n);
  return t.persistence.runTransaction("Allocate target", "readwrite", (r) => {
    let i;
    return t.$r.getTargetData(r, e).next((s) => s ? (
      // This target has been listened to previously, so reuse the
      // previous targetID.
      // TODO(mcg): freshen last accessed date?
      (i = s, V.resolve(i))
    ) : t.$r.allocateTargetId(r).next((a) => (i = new nn(e, a, "TargetPurposeListen", r.currentSequenceNumber), t.$r.addTargetData(r, i).next(() => i))));
  }).then((r) => {
    const i = t.ss.get(r.targetId);
    return (i === null || r.snapshotVersion.compareTo(i.snapshotVersion) > 0) && (t.ss = t.ss.insert(r.targetId, r), t.os.set(e, r.targetId)), r;
  });
}
async function La(n, e, t) {
  const r = G(n), i = r.ss.get(e), s = t ? "readwrite" : "readwrite-primary";
  try {
    t || await r.persistence.runTransaction("Release target", s, (a) => r.persistence.referenceDelegate.removeTarget(a, i));
  } catch (a) {
    if (!Si(a))
      throw a;
    U("LocalStore", `Failed to update sequence numbers for target ${e}: ${a}`);
  }
  r.ss = r.ss.remove(e), r.os.delete(i.target);
}
function Dh(n, e, t) {
  const r = G(n);
  let i = K.min(), s = Q();
  return r.persistence.runTransaction(
    "Execute query",
    "readwrite",
    // Use readwrite instead of readonly so indexes can be created
    // Use readwrite instead of readonly so indexes can be created
    (a) => function(u, h, f) {
      const m = G(u), _ = m.os.get(f);
      return _ !== void 0 ? V.resolve(m.ss.get(_)) : m.$r.getTargetData(h, f);
    }(r, a, _t(e)).next((c) => {
      if (c)
        return i = c.lastLimboFreeSnapshotVersion, r.$r.getMatchingKeysForTargetId(a, c.targetId).next((u) => {
          s = u;
        });
    }).next(() => r.rs.getDocumentsMatchingQuery(a, e, t ? i : K.min(), t ? s : Q())).next((c) => (IA(r, fb(e), c), {
      documents: c,
      Is: s
    }))
  );
}
function IA(n, e, t) {
  let r = n._s.get(e) || K.min();
  t.forEach((i, s) => {
    s.readTime.compareTo(r) > 0 && (r = s.readTime);
  }), n._s.set(e, r);
}
class xh {
  constructor() {
    this.activeTargetIds = vb();
  }
  Vs(e) {
    this.activeTargetIds = this.activeTargetIds.add(e);
  }
  fs(e) {
    this.activeTargetIds = this.activeTargetIds.delete(e);
  }
  /**
   * Converts this entry into a JSON-encoded format we can use for WebStorage.
   * Does not encode `clientId` as it is part of the key in WebStorage.
   */
  Rs() {
    const e = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now()
    };
    return JSON.stringify(e);
  }
}
class bA {
  constructor() {
    this.io = new xh(), this.so = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
  }
  addPendingMutation(e) {
  }
  updateMutationState(e, t, r) {
  }
  addLocalQueryTarget(e) {
    return this.io.Vs(e), this.so[e] || "not-current";
  }
  updateQueryState(e, t, r) {
    this.so[e] = t;
  }
  removeLocalQueryTarget(e) {
    this.io.fs(e);
  }
  isLocalQueryTarget(e) {
    return this.io.activeTargetIds.has(e);
  }
  clearQueryState(e) {
    delete this.so[e];
  }
  getAllActiveQueryTargets() {
    return this.io.activeTargetIds;
  }
  isActiveQueryTarget(e) {
    return this.io.activeTargetIds.has(e);
  }
  start() {
    return this.io = new xh(), Promise.resolve();
  }
  handleUserChange(e, t, r) {
  }
  setOnlineState(e) {
  }
  shutdown() {
  }
  writeSequenceNumber(e) {
  }
  notifyBundleLoaded(e) {
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class AA {
  oo(e) {
  }
  shutdown() {
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class Vh {
  constructor() {
    this._o = () => this.ao(), this.uo = () => this.co(), this.lo = [], this.ho();
  }
  oo(e) {
    this.lo.push(e);
  }
  shutdown() {
    window.removeEventListener("online", this._o), window.removeEventListener("offline", this.uo);
  }
  ho() {
    window.addEventListener("online", this._o), window.addEventListener("offline", this.uo);
  }
  ao() {
    U("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (const e of this.lo)
      e(
        0
        /* NetworkStatus.AVAILABLE */
      );
  }
  co() {
    U("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (const e of this.lo)
      e(
        1
        /* NetworkStatus.UNAVAILABLE */
      );
  }
  // TODO(chenbrian): Consider passing in window either into this component or
  // here for testing via FakeWindow.
  /** Checks that all used attributes of window are available. */
  static D() {
    return typeof window < "u" && window.addEventListener !== void 0 && window.removeEventListener !== void 0;
  }
}
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
let is = null;
function Jo() {
  return is === null ? is = function() {
    return 268435456 + Math.round(2147483648 * Math.random());
  }() : is++, "0x" + is.toString(16);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const SA = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery"
};
/**
 * @license
 * Copyright 2017 Google LLC
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
class RA {
  constructor(e) {
    this.Po = e.Po, this.Io = e.Io;
  }
  To(e) {
    this.Eo = e;
  }
  Ao(e) {
    this.Ro = e;
  }
  Vo(e) {
    this.mo = e;
  }
  onMessage(e) {
    this.fo = e;
  }
  close() {
    this.Io();
  }
  send(e) {
    this.Po(e);
  }
  po() {
    this.Eo();
  }
  yo() {
    this.Ro();
  }
  wo(e) {
    this.mo(e);
  }
  So(e) {
    this.fo(e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
const Me = "WebChannelConnection";
class CA extends /**
 * Base class for all Rest-based connections to the backend (WebChannel and
 * HTTP).
 */
class {
  constructor(t) {
    this.databaseInfo = t, this.databaseId = t.databaseId;
    const r = t.ssl ? "https" : "http", i = encodeURIComponent(this.databaseId.projectId), s = encodeURIComponent(this.databaseId.database);
    this.bo = r + "://" + t.host, this.Do = `projects/${i}/databases/${s}`, this.Co = this.databaseId.database === "(default)" ? `project_id=${i}` : `project_id=${i}&database_id=${s}`;
  }
  get vo() {
    return !1;
  }
  Fo(t, r, i, s, a) {
    const c = Jo(), u = this.Mo(t, r.toUriEncodedString());
    U("RestConnection", `Sending RPC '${t}' ${c}:`, u, i);
    const h = {
      "google-cloud-resource-prefix": this.Do,
      "x-goog-request-params": this.Co
    };
    return this.xo(h, s, a), this.Oo(t, u, h, i).then((f) => (U("RestConnection", `Received RPC '${t}' ${c}: `, f), f), (f) => {
      throw ur("RestConnection", `RPC '${t}' ${c} failed with error: `, f, "url: ", u, "request:", i), f;
    });
  }
  No(t, r, i, s, a, c) {
    return this.Fo(t, r, i, s, a);
  }
  /**
   * Modifies the headers for a request, adding any authorization token if
   * present and any additional headers for the request.
   */
  xo(t, r, i) {
    t["X-Goog-Api-Client"] = // SDK_VERSION is updated to different value at runtime depending on the entry point,
    // so we need to get its value when we need it in a function.
    function() {
      return "gl-js/ fire/" + vr;
    }(), // Content-Type: text/plain will avoid preflight requests which might
    // mess with CORS and redirects by proxies. If we add custom headers
    // we will need to change this code to potentially use the $httpOverwrite
    // parameter supported by ESF to avoid triggering preflight requests.
    t["Content-Type"] = "text/plain", this.databaseInfo.appId && (t["X-Firebase-GMPID"] = this.databaseInfo.appId), r && r.headers.forEach((s, a) => t[a] = s), i && i.headers.forEach((s, a) => t[a] = s);
  }
  Mo(t, r) {
    const i = SA[t];
    return `${this.bo}/v1/${r}:${i}`;
  }
  /**
   * Closes and cleans up any resources associated with the connection. This
   * implementation is a no-op because there are no resources associated
   * with the RestConnection that need to be cleaned up.
   */
  terminate() {
  }
} {
  constructor(e) {
    super(e), this.forceLongPolling = e.forceLongPolling, this.autoDetectLongPolling = e.autoDetectLongPolling, this.useFetchStreams = e.useFetchStreams, this.longPollingOptions = e.longPollingOptions;
  }
  Oo(e, t, r, i) {
    const s = Jo();
    return new Promise((a, c) => {
      const u = new Bf();
      u.setWithCredentials(!0), u.listenOnce(qf.COMPLETE, () => {
        try {
          switch (u.getLastErrorCode()) {
            case fs.NO_ERROR:
              const f = u.getResponseJson();
              U(Me, `XHR for RPC '${e}' ${s} received:`, JSON.stringify(f)), a(f);
              break;
            case fs.TIMEOUT:
              U(Me, `RPC '${e}' ${s} timed out`), c(new q(L.DEADLINE_EXCEEDED, "Request time out"));
              break;
            case fs.HTTP_ERROR:
              const m = u.getStatus();
              if (U(Me, `RPC '${e}' ${s} failed with status:`, m, "response text:", u.getResponseText()), m > 0) {
                let _ = u.getResponseJson();
                Array.isArray(_) && (_ = _[0]);
                const w = _ == null ? void 0 : _.error;
                if (w && w.status && w.message) {
                  const A = function(p) {
                    const I = p.toLowerCase().replace(/_/g, "-");
                    return Object.values(L).indexOf(I) >= 0 ? I : L.UNKNOWN;
                  }(w.status);
                  c(new q(A, w.message));
                } else
                  c(new q(L.UNKNOWN, "Server responded with status " + u.getStatus()));
              } else
                c(new q(L.UNAVAILABLE, "Connection failed."));
              break;
            default:
              W();
          }
        } finally {
          U(Me, `RPC '${e}' ${s} completed.`);
        }
      });
      const h = JSON.stringify(i);
      U(Me, `RPC '${e}' ${s} sending request:`, i), u.send(t, "POST", h, r, 15);
    });
  }
  Lo(e, t, r) {
    const i = Jo(), s = [this.bo, "/", "google.firestore.v1.Firestore", "/", e, "/channel"], a = Kf(), c = Wf(), u = {
      // Required for backend stickiness, routing behavior is based on this
      // parameter.
      httpSessionIdParam: "gsessionid",
      initMessageHeaders: {},
      messageUrlParams: {
        // This param is used to improve routing and project isolation by the
        // backend and must be included in every request.
        database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
      },
      sendRawJson: !0,
      supportsCrossDomainXhr: !0,
      internalChannelParams: {
        // Override the default timeout (randomized between 10-20 seconds) since
        // a large write batch on a slow internet connection may take a long
        // time to send to the backend. Rather than have WebChannel impose a
        // tight timeout which could lead to infinite timeouts and retries, we
        // set it very large (5-10 minutes) and rely on the browser's builtin
        // timeouts to kick in if the request isn't working.
        forwardChannelRequestTimeoutMs: 6e5
      },
      forceLongPolling: this.forceLongPolling,
      detectBufferingProxy: this.autoDetectLongPolling
    }, h = this.longPollingOptions.timeoutSeconds;
    h !== void 0 && (u.longPollingTimeout = Math.round(1e3 * h)), this.useFetchStreams && (u.xmlHttpFactory = new zf({})), this.xo(u.initMessageHeaders, t, r), // Sending the custom headers we just added to request.initMessageHeaders
    // (Authorization, etc.) will trigger the browser to make a CORS preflight
    // request because the XHR will no longer meet the criteria for a "simple"
    // CORS request:
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
    // Therefore to avoid the CORS preflight request (an extra network
    // roundtrip), we use the encodeInitMessageHeaders option to specify that
    // the headers should instead be encoded in the request's POST payload,
    // which is recognized by the webchannel backend.
    u.encodeInitMessageHeaders = !0;
    const f = s.join("");
    U(Me, `Creating RPC '${e}' stream ${i}: ${f}`, u);
    const m = a.createWebChannel(f, u);
    let _ = !1, w = !1;
    const A = new RA({
      Po: (p) => {
        w ? U(Me, `Not sending because RPC '${e}' stream ${i} is closed:`, p) : (_ || (U(Me, `Opening RPC '${e}' stream ${i} transport.`), m.open(), _ = !0), U(Me, `RPC '${e}' stream ${i} sending:`, p), m.send(p));
      },
      Io: () => m.close()
    }), R = (p, I, D) => {
      p.listen(I, (O) => {
        try {
          D(O);
        } catch (N) {
          setTimeout(() => {
            throw N;
          }, 0);
        }
      });
    };
    return R(m, Gr.EventType.OPEN, () => {
      w || (U(Me, `RPC '${e}' stream ${i} transport opened.`), A.po());
    }), R(m, Gr.EventType.CLOSE, () => {
      w || (w = !0, U(Me, `RPC '${e}' stream ${i} transport closed`), A.wo());
    }), R(m, Gr.EventType.ERROR, (p) => {
      w || (w = !0, ur(Me, `RPC '${e}' stream ${i} transport errored:`, p), A.wo(new q(L.UNAVAILABLE, "The operation could not be completed")));
    }), R(m, Gr.EventType.MESSAGE, (p) => {
      var I;
      if (!w) {
        const D = p.data[0];
        ae(!!D);
        const O = D, N = O.error || ((I = O[0]) === null || I === void 0 ? void 0 : I.error);
        if (N) {
          U(Me, `RPC '${e}' stream ${i} received error:`, N);
          const C = N.status;
          let M = (
            /**
            * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
            *
            * @returns The Code equivalent to the given status string or undefined if
            *     there is no match.
            */
            function(v) {
              const b = ye[v];
              if (b !== void 0)
                return vp(b);
            }(C)
          ), T = N.message;
          M === void 0 && (M = L.INTERNAL, T = "Unknown error status: " + C + " with message " + N.message), // Mark closed so no further events are propagated
          w = !0, A.wo(new q(M, T)), m.close();
        } else
          U(Me, `RPC '${e}' stream ${i} received:`, D), A.So(D);
      }
    }), R(c, Hf.STAT_EVENT, (p) => {
      p.stat === Ra.PROXY ? U(Me, `RPC '${e}' stream ${i} detected buffering proxy`) : p.stat === Ra.NOPROXY && U(Me, `RPC '${e}' stream ${i} detected no buffering proxy`);
    }), setTimeout(() => {
      A.yo();
    }, 0), A;
  }
}
function Zo() {
  return typeof document < "u" ? document : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function co(n) {
  return new Fb(
    n,
    /* useProto3Json= */
    !0
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Op {
  constructor(e, t, r = 1e3, i = 1.5, s = 6e4) {
    this.ai = e, this.timerId = t, this.Bo = r, this.ko = i, this.qo = s, this.Qo = 0, this.Ko = null, /** The last backoff attempt, as epoch milliseconds. */
    this.$o = Date.now(), this.reset();
  }
  /**
   * Resets the backoff delay.
   *
   * The very next backoffAndWait() will have no delay. If it is called again
   * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
   * subsequent ones will increase according to the backoffFactor.
   */
  reset() {
    this.Qo = 0;
  }
  /**
   * Resets the backoff delay to the maximum delay (e.g. for use after a
   * RESOURCE_EXHAUSTED error).
   */
  Uo() {
    this.Qo = this.qo;
  }
  /**
   * Returns a promise that resolves after currentDelayMs, and increases the
   * delay for any subsequent attempts. If there was a pending backoff operation
   * already, it will be canceled.
   */
  Wo(e) {
    this.cancel();
    const t = Math.floor(this.Qo + this.Go()), r = Math.max(0, Date.now() - this.$o), i = Math.max(0, t - r);
    i > 0 && U("ExponentialBackoff", `Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`), this.Ko = this.ai.enqueueAfterDelay(this.timerId, i, () => (this.$o = Date.now(), e())), // Apply backoff factor to determine next delay and ensure it is within
    // bounds.
    this.Qo *= this.ko, this.Qo < this.Bo && (this.Qo = this.Bo), this.Qo > this.qo && (this.Qo = this.qo);
  }
  zo() {
    this.Ko !== null && (this.Ko.skipDelay(), this.Ko = null);
  }
  cancel() {
    this.Ko !== null && (this.Ko.cancel(), this.Ko = null);
  }
  /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
  Go() {
    return (Math.random() - 0.5) * this.Qo;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Np {
  constructor(e, t, r, i, s, a, c, u) {
    this.ai = e, this.jo = r, this.Ho = i, this.connection = s, this.authCredentialsProvider = a, this.appCheckCredentialsProvider = c, this.listener = u, this.state = 0, /**
     * A close count that's incremented every time the stream is closed; used by
     * getCloseGuardedDispatcher() to invalidate callbacks that happen after
     * close.
     */
    this.Jo = 0, this.Yo = null, this.Zo = null, this.stream = null, /**
     * Count of response messages received.
     */
    this.Xo = 0, this.e_ = new Op(e, t);
  }
  /**
   * Returns true if start() has been called and no error has occurred. True
   * indicates the stream is open or in the process of opening (which
   * encompasses respecting backoff, getting auth tokens, and starting the
   * actual RPC). Use isOpen() to determine if the stream is open and ready for
   * outbound requests.
   */
  t_() {
    return this.state === 1 || this.state === 5 || this.n_();
  }
  /**
   * Returns true if the underlying RPC is open (the onOpen() listener has been
   * called) and the stream is ready for outbound requests.
   */
  n_() {
    return this.state === 2 || this.state === 3;
  }
  /**
   * Starts the RPC. Only allowed if isStarted() returns false. The stream is
   * not immediately ready for use: onOpen() will be invoked when the RPC is
   * ready for outbound requests, at which point isOpen() will return true.
   *
   * When start returns, isStarted() will return true.
   */
  start() {
    this.Xo = 0, this.state !== 4 ? this.auth() : this.r_();
  }
  /**
   * Stops the RPC. This call is idempotent and allowed regardless of the
   * current isStarted() state.
   *
   * When stop returns, isStarted() and isOpen() will both return false.
   */
  async stop() {
    this.t_() && await this.close(
      0
      /* PersistentStreamState.Initial */
    );
  }
  /**
   * After an error the stream will usually back off on the next attempt to
   * start it. If the error warrants an immediate restart of the stream, the
   * sender can use this to indicate that the receiver should not back off.
   *
   * Each error will call the onClose() listener. That function can decide to
   * inhibit backoff if required.
   */
  i_() {
    this.state = 0, this.e_.reset();
  }
  /**
   * Marks this stream as idle. If no further actions are performed on the
   * stream for one minute, the stream will automatically close itself and
   * notify the stream's onClose() handler with Status.OK. The stream will then
   * be in a !isStarted() state, requiring the caller to start the stream again
   * before further use.
   *
   * Only streams that are in state 'Open' can be marked idle, as all other
   * states imply pending network operations.
   */
  s_() {
    this.n_() && this.Yo === null && (this.Yo = this.ai.enqueueAfterDelay(this.jo, 6e4, () => this.o_()));
  }
  /** Sends a message to the underlying stream. */
  __(e) {
    this.a_(), this.stream.send(e);
  }
  /** Called by the idle timer when the stream should close due to inactivity. */
  async o_() {
    if (this.n_())
      return this.close(
        0
        /* PersistentStreamState.Initial */
      );
  }
  /** Marks the stream as active again. */
  a_() {
    this.Yo && (this.Yo.cancel(), this.Yo = null);
  }
  /** Cancels the health check delayed operation. */
  u_() {
    this.Zo && (this.Zo.cancel(), this.Zo = null);
  }
  /**
   * Closes the stream and cleans up as necessary:
   *
   * * closes the underlying GRPC stream;
   * * calls the onClose handler with the given 'error';
   * * sets internal stream state to 'finalState';
   * * adjusts the backoff timer based on the error
   *
   * A new stream can be opened by calling start().
   *
   * @param finalState - the intended state of the stream after closing.
   * @param error - the error the connection was closed with.
   */
  async close(e, t) {
    this.a_(), this.u_(), this.e_.cancel(), // Invalidates any stream-related callbacks (e.g. from auth or the
    // underlying stream), guaranteeing they won't execute.
    this.Jo++, e !== 4 ? (
      // If this is an intentional close ensure we don't delay our next connection attempt.
      this.e_.reset()
    ) : t && t.code === L.RESOURCE_EXHAUSTED ? (
      // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
      (Ft(t.toString()), Ft("Using maximum backoff delay to prevent overloading the backend."), this.e_.Uo())
    ) : t && t.code === L.UNAUTHENTICATED && this.state !== 3 && // "unauthenticated" error means the token was rejected. This should rarely
    // happen since both Auth and AppCheck ensure a sufficient TTL when we
    // request a token. If a user manually resets their system clock this can
    // fail, however. In this case, we should get a Code.UNAUTHENTICATED error
    // before we received the first message and we need to invalidate the token
    // to ensure that we fetch a new token.
    (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), // Clean up the underlying stream because we are no longer interested in events.
    this.stream !== null && (this.c_(), this.stream.close(), this.stream = null), // This state must be assigned before calling onClose() to allow the callback to
    // inhibit backoff or otherwise manipulate the state in its non-started state.
    this.state = e, // Notify the listener that the stream closed.
    await this.listener.Vo(t);
  }
  /**
   * Can be overridden to perform additional cleanup before the stream is closed.
   * Calling super.tearDown() is not required.
   */
  c_() {
  }
  auth() {
    this.state = 1;
    const e = this.l_(this.Jo), t = this.Jo;
    Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then(([r, i]) => {
      this.Jo === t && // Normally we'd have to schedule the callback on the AsyncQueue.
      // However, the following calls are safe to be called outside the
      // AsyncQueue since they don't chain asynchronous calls
      this.h_(r, i);
    }, (r) => {
      e(() => {
        const i = new q(L.UNKNOWN, "Fetching auth token failed: " + r.message);
        return this.P_(i);
      });
    });
  }
  h_(e, t) {
    const r = this.l_(this.Jo);
    this.stream = this.I_(e, t), this.stream.To(() => {
      r(() => this.listener.To());
    }), this.stream.Ao(() => {
      r(() => (this.state = 2, this.Zo = this.ai.enqueueAfterDelay(this.Ho, 1e4, () => (this.n_() && (this.state = 3), Promise.resolve())), this.listener.Ao()));
    }), this.stream.Vo((i) => {
      r(() => this.P_(i));
    }), this.stream.onMessage((i) => {
      r(() => ++this.Xo == 1 ? this.T_(i) : this.onNext(i));
    });
  }
  r_() {
    this.state = 5, this.e_.Wo(async () => {
      this.state = 0, this.start();
    });
  }
  // Visible for tests
  P_(e) {
    return U("PersistentStream", `close with error: ${e}`), this.stream = null, this.close(4, e);
  }
  /**
   * Returns a "dispatcher" function that dispatches operations onto the
   * AsyncQueue but only runs them if closeCount remains unchanged. This allows
   * us to turn auth / stream callbacks into no-ops if the stream is closed /
   * re-opened, etc.
   */
  l_(e) {
    return (t) => {
      this.ai.enqueueAndForget(() => this.Jo === e ? t() : (U("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()));
    };
  }
}
class PA extends Np {
  constructor(e, t, r, i, s, a) {
    super(e, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", t, r, i, a), this.serializer = s;
  }
  I_(e, t) {
    return this.connection.Lo("Listen", e, t);
  }
  T_(e) {
    return this.onNext(e);
  }
  onNext(e) {
    this.e_.reset();
    const t = jb(this.serializer, e), r = function(s) {
      if (!("targetChange" in s))
        return K.min();
      const a = s.targetChange;
      return a.targetIds && a.targetIds.length ? K.min() : a.readTime ? vt(a.readTime) : K.min();
    }(e);
    return this.listener.E_(t, r);
  }
  /**
   * Registers interest in the results of the given target. If the target
   * includes a resumeToken it will be included in the request. Results that
   * affect the target will be streamed back as WatchChange messages that
   * reference the targetId.
   */
  d_(e) {
    const t = {};
    t.database = Ma(this.serializer), t.addTarget = function(s, a) {
      let c;
      const u = a.target;
      if (c = Oa(u) ? {
        documents: qb(s, u)
      } : {
        query: Hb(s, u)._t
      }, c.targetId = a.targetId, a.resumeToken.approximateByteSize() > 0) {
        c.resumeToken = Tp(s, a.resumeToken);
        const h = Da(s, a.expectedCount);
        h !== null && (c.expectedCount = h);
      } else if (a.snapshotVersion.compareTo(K.min()) > 0) {
        c.readTime = xs(s, a.snapshotVersion.toTimestamp());
        const h = Da(s, a.expectedCount);
        h !== null && (c.expectedCount = h);
      }
      return c;
    }(this.serializer, e);
    const r = Kb(this.serializer, e);
    r && (t.labels = r), this.__(t);
  }
  /**
   * Unregisters interest in the results of the target associated with the
   * given targetId.
   */
  A_(e) {
    const t = {};
    t.database = Ma(this.serializer), t.removeTarget = e, this.__(t);
  }
}
class kA extends Np {
  constructor(e, t, r, i, s, a) {
    super(e, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", t, r, i, a), this.serializer = s;
  }
  /**
   * Tracks whether or not a handshake has been successfully exchanged and
   * the stream is ready to accept mutations.
   */
  get R_() {
    return this.Xo > 0;
  }
  // Override of PersistentStream.start
  start() {
    this.lastStreamToken = void 0, super.start();
  }
  c_() {
    this.R_ && this.V_([]);
  }
  I_(e, t) {
    return this.connection.Lo("Write", e, t);
  }
  T_(e) {
    return ae(!!e.streamToken), this.lastStreamToken = e.streamToken, // The first response is always the handshake response
    ae(!e.writeResults || e.writeResults.length === 0), this.listener.m_();
  }
  onNext(e) {
    ae(!!e.streamToken), this.lastStreamToken = e.streamToken, // A successful first write response means the stream is healthy,
    // Note, that we could consider a successful handshake healthy, however,
    // the write itself might be causing an error we want to back off from.
    this.e_.reset();
    const t = zb(e.writeResults, e.commitTime), r = vt(e.commitTime);
    return this.listener.f_(r, t);
  }
  /**
   * Sends an initial streamToken to the server, performing the handshake
   * required to make the StreamingWrite RPC work. Subsequent
   * calls should wait until onHandshakeComplete was called.
   */
  g_() {
    const e = {};
    e.database = Ma(this.serializer), this.__(e);
  }
  /** Sends a group of mutations to the Firestore backend to apply. */
  V_(e) {
    const t = {
      streamToken: this.lastStreamToken,
      writes: e.map((r) => Bb(this.serializer, r))
    };
    this.__(t);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class OA extends class {
} {
  constructor(e, t, r, i) {
    super(), this.authCredentials = e, this.appCheckCredentials = t, this.connection = r, this.serializer = i, this.p_ = !1;
  }
  y_() {
    if (this.p_)
      throw new q(L.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  /** Invokes the provided RPC with auth and AppCheck tokens. */
  Fo(e, t, r, i) {
    return this.y_(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([s, a]) => this.connection.Fo(e, xa(t, r), i, s, a)).catch((s) => {
      throw s.name === "FirebaseError" ? (s.code === L.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), s) : new q(L.UNKNOWN, s.toString());
    });
  }
  /** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */
  No(e, t, r, i, s) {
    return this.y_(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([a, c]) => this.connection.No(e, xa(t, r), i, a, c, s)).catch((a) => {
      throw a.name === "FirebaseError" ? (a.code === L.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), a) : new q(L.UNKNOWN, a.toString());
    });
  }
  terminate() {
    this.p_ = !0, this.connection.terminate();
  }
}
class NA {
  constructor(e, t) {
    this.asyncQueue = e, this.onlineStateHandler = t, /** The current OnlineState. */
    this.state = "Unknown", /**
     * A count of consecutive failures to open the stream. If it reaches the
     * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
     * Offline.
     */
    this.w_ = 0, /**
     * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
     * transition from OnlineState.Unknown to OnlineState.Offline without waiting
     * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
     */
    this.S_ = null, /**
     * Whether the client should log a warning message if it fails to connect to
     * the backend (initially true, cleared after a successful stream, or if we've
     * logged the message already).
     */
    this.b_ = !0;
  }
  /**
   * Called by RemoteStore when a watch stream is started (including on each
   * backoff attempt).
   *
   * If this is the first attempt, it sets the OnlineState to Unknown and starts
   * the onlineStateTimer.
   */
  D_() {
    this.w_ === 0 && (this.C_(
      "Unknown"
      /* OnlineState.Unknown */
    ), this.S_ = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this.S_ = null, this.v_("Backend didn't respond within 10 seconds."), this.C_(
      "Offline"
      /* OnlineState.Offline */
    ), Promise.resolve())));
  }
  /**
   * Updates our OnlineState as appropriate after the watch stream reports a
   * failure. The first failure moves us to the 'Unknown' state. We then may
   * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
   * actually transition to the 'Offline' state.
   */
  F_(e) {
    this.state === "Online" ? this.C_(
      "Unknown"
      /* OnlineState.Unknown */
    ) : (this.w_++, this.w_ >= 1 && (this.M_(), this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`), this.C_(
      "Offline"
      /* OnlineState.Offline */
    )));
  }
  /**
   * Explicitly sets the OnlineState to the specified state.
   *
   * Note that this resets our timers / failure counters, etc. used by our
   * Offline heuristics, so must not be used in place of
   * handleWatchStreamStart() and handleWatchStreamFailure().
   */
  set(e) {
    this.M_(), this.w_ = 0, e === "Online" && // We've connected to watch at least once. Don't warn the developer
    // about being offline going forward.
    (this.b_ = !1), this.C_(e);
  }
  C_(e) {
    e !== this.state && (this.state = e, this.onlineStateHandler(e));
  }
  v_(e) {
    const t = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.b_ ? (Ft(t), this.b_ = !1) : U("OnlineStateTracker", t);
  }
  M_() {
    this.S_ !== null && (this.S_.cancel(), this.S_ = null);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class DA {
  constructor(e, t, r, i, s) {
    this.localStore = e, this.datastore = t, this.asyncQueue = r, this.remoteSyncer = {}, /**
     * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
     * LocalStore via fillWritePipeline() and have or will send to the write
     * stream.
     *
     * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
     * restart the write stream. When the stream is established the writes in the
     * pipeline will be sent in order.
     *
     * Writes remain in writePipeline until they are acknowledged by the backend
     * and thus will automatically be re-sent if the stream is interrupted /
     * restarted before they're acknowledged.
     *
     * Write responses from the backend are linked to their originating request
     * purely based on order, and so we can just shift() writes from the front of
     * the writePipeline as we receive responses.
     */
    this.x_ = [], /**
     * A mapping of watched targets that the client cares about tracking and the
     * user has explicitly called a 'listen' for this target.
     *
     * These targets may or may not have been sent to or acknowledged by the
     * server. On re-establishing the listen stream, these targets should be sent
     * to the server. The targets removed with unlistens are removed eagerly
     * without waiting for confirmation from the listen stream.
     */
    this.O_ = /* @__PURE__ */ new Map(), /**
     * A set of reasons for why the RemoteStore may be offline. If empty, the
     * RemoteStore may start its network connections.
     */
    this.N_ = /* @__PURE__ */ new Set(), /**
     * Event handlers that get called when the network is disabled or enabled.
     *
     * PORTING NOTE: These functions are used on the Web client to create the
     * underlying streams (to support tree-shakeable streams). On Android and iOS,
     * the streams are created during construction of RemoteStore.
     */
    this.L_ = [], this.B_ = s, this.B_.oo((a) => {
      r.enqueueAndForget(async () => {
        Hn(this) && (U("RemoteStore", "Restarting streams for network reachability change."), await async function(u) {
          const h = G(u);
          h.N_.add(
            4
            /* OfflineCause.ConnectivityChange */
          ), await Pi(h), h.k_.set(
            "Unknown"
            /* OnlineState.Unknown */
          ), h.N_.delete(
            4
            /* OfflineCause.ConnectivityChange */
          ), await uo(h);
        }(this));
      });
    }), this.k_ = new NA(r, i);
  }
}
async function uo(n) {
  if (Hn(n))
    for (const e of n.L_)
      await e(
        /* enabled= */
        !0
      );
}
async function Pi(n) {
  for (const e of n.L_)
    await e(
      /* enabled= */
      !1
    );
}
function Dp(n, e) {
  const t = G(n);
  t.O_.has(e.targetId) || // Mark this as something the client is currently listening for.
  (t.O_.set(e.targetId, e), Rc(t) ? (
    // The listen will be sent in onWatchStreamOpen
    Sc(t)
  ) : Tr(t).n_() && Ac(t, e));
}
function bc(n, e) {
  const t = G(n), r = Tr(t);
  t.O_.delete(e), r.n_() && xp(t, e), t.O_.size === 0 && (r.n_() ? r.s_() : Hn(t) && // Revert to OnlineState.Unknown if the watch stream is not open and we
  // have no listeners, since without any listens to send we cannot
  // confirm if the stream is healthy and upgrade to OnlineState.Online.
  t.k_.set(
    "Unknown"
    /* OnlineState.Unknown */
  ));
}
function Ac(n, e) {
  if (n.q_.xe(e.targetId), e.resumeToken.approximateByteSize() > 0 || e.snapshotVersion.compareTo(K.min()) > 0) {
    const t = n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;
    e = e.withExpectedCount(t);
  }
  Tr(n).d_(e);
}
function xp(n, e) {
  n.q_.xe(e), Tr(n).A_(e);
}
function Sc(n) {
  n.q_ = new xb({
    getRemoteKeysForTarget: (e) => n.remoteSyncer.getRemoteKeysForTarget(e),
    ot: (e) => n.O_.get(e) || null,
    tt: () => n.datastore.serializer.databaseId
  }), Tr(n).start(), n.k_.D_();
}
function Rc(n) {
  return Hn(n) && !Tr(n).t_() && n.O_.size > 0;
}
function Hn(n) {
  return G(n).N_.size === 0;
}
function Vp(n) {
  n.q_ = void 0;
}
async function xA(n) {
  n.k_.set(
    "Online"
    /* OnlineState.Online */
  );
}
async function VA(n) {
  n.O_.forEach((e, t) => {
    Ac(n, e);
  });
}
async function MA(n, e) {
  Vp(n), // If we still need the watch stream, retry the connection.
  Rc(n) ? (n.k_.F_(e), Sc(n)) : (
    // No need to restart watch stream because there are no active targets.
    // The online state is set to unknown because there is no active attempt
    // at establishing a connection
    n.k_.set(
      "Unknown"
      /* OnlineState.Unknown */
    )
  );
}
async function LA(n, e, t) {
  if (
    // Mark the client as online since we got a message from the server
    n.k_.set(
      "Online"
      /* OnlineState.Online */
    ), e instanceof Ep && e.state === 2 && e.cause
  )
    try {
      await /** Handles an error on a target */
      async function(i, s) {
        const a = s.cause;
        for (const c of s.targetIds)
          i.O_.has(c) && (await i.remoteSyncer.rejectListen(c, a), i.O_.delete(c), i.q_.removeTarget(c));
      }(n, e);
    } catch (r) {
      U("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), r), await Vs(n, r);
    }
  else if (e instanceof gs ? n.q_.Ke(e) : e instanceof wp ? n.q_.He(e) : n.q_.We(e), !t.isEqual(K.min()))
    try {
      const r = await kp(n.localStore);
      t.compareTo(r) >= 0 && // We have received a target change with a global snapshot if the snapshot
      // version is not equal to SnapshotVersion.min().
      await /**
      * Takes a batch of changes from the Datastore, repackages them as a
      * RemoteEvent, and passes that on to the listener, which is typically the
      * SyncEngine.
      */
      function(s, a) {
        const c = s.q_.rt(a);
        return c.targetChanges.forEach((u, h) => {
          if (u.resumeToken.approximateByteSize() > 0) {
            const f = s.O_.get(h);
            f && s.O_.set(h, f.withResumeToken(u.resumeToken, a));
          }
        }), // Re-establish listens for the targets that have been invalidated by
        // existence filter mismatches.
        c.targetMismatches.forEach((u, h) => {
          const f = s.O_.get(u);
          if (!f)
            return;
          s.O_.set(u, f.withResumeToken(Ne.EMPTY_BYTE_STRING, f.snapshotVersion)), // Cause a hard reset by unwatching and rewatching immediately, but
          // deliberately don't send a resume token so that we get a full update.
          xp(s, u);
          const m = new nn(f.target, u, h, f.sequenceNumber);
          Ac(s, m);
        }), s.remoteSyncer.applyRemoteEvent(c);
      }(n, t);
    } catch (r) {
      U("RemoteStore", "Failed to raise snapshot:", r), await Vs(n, r);
    }
}
async function Vs(n, e, t) {
  if (!Si(e))
    throw e;
  n.N_.add(
    1
    /* OfflineCause.IndexedDbFailed */
  ), // Disable network and raise offline snapshots
  await Pi(n), n.k_.set(
    "Offline"
    /* OnlineState.Offline */
  ), t || // Use a simple read operation to determine if IndexedDB recovered.
  // Ideally, we would expose a health check directly on SimpleDb, but
  // RemoteStore only has access to persistence through LocalStore.
  (t = () => kp(n.localStore)), // Probe IndexedDB periodically and re-enable network
  n.asyncQueue.enqueueRetryable(async () => {
    U("RemoteStore", "Retrying IndexedDB access"), await t(), n.N_.delete(
      1
      /* OfflineCause.IndexedDbFailed */
    ), await uo(n);
  });
}
function Mp(n, e) {
  return e().catch((t) => Vs(n, t, e));
}
async function lo(n) {
  const e = G(n), t = hn(e);
  let r = e.x_.length > 0 ? e.x_[e.x_.length - 1].batchId : -1;
  for (; FA(e); )
    try {
      const i = await EA(e.localStore, r);
      if (i === null) {
        e.x_.length === 0 && t.s_();
        break;
      }
      r = i.batchId, UA(e, i);
    } catch (i) {
      await Vs(e, i);
    }
  Lp(e) && Fp(e);
}
function FA(n) {
  return Hn(n) && n.x_.length < 10;
}
function UA(n, e) {
  n.x_.push(e);
  const t = hn(n);
  t.n_() && t.R_ && t.V_(e.mutations);
}
function Lp(n) {
  return Hn(n) && !hn(n).t_() && n.x_.length > 0;
}
function Fp(n) {
  hn(n).start();
}
async function $A(n) {
  hn(n).g_();
}
async function jA(n) {
  const e = hn(n);
  for (const t of n.x_)
    e.V_(t.mutations);
}
async function BA(n, e, t) {
  const r = n.x_.shift(), i = _c.from(r, e, t);
  await Mp(n, () => n.remoteSyncer.applySuccessfulWrite(i)), // It's possible that with the completion of this mutation another
  // slot has freed up.
  await lo(n);
}
async function zA(n, e) {
  e && hn(n).R_ && // This error affects the actual write.
  await async function(r, i) {
    if (function(a) {
      return Ob(a) && a !== L.ABORTED;
    }(i.code)) {
      const s = r.x_.shift();
      hn(r).i_(), await Mp(r, () => r.remoteSyncer.rejectFailedWrite(s.batchId, i)), // It's possible that with the completion of this mutation
      // another slot has freed up.
      await lo(r);
    }
  }(n, e), // The write stream might have been started by refilling the write
  // pipeline for failed writes
  Lp(n) && Fp(n);
}
async function Mh(n, e) {
  const t = G(n);
  t.asyncQueue.verifyOperationInProgress(), U("RemoteStore", "RemoteStore received new credentials");
  const r = Hn(t);
  t.N_.add(
    3
    /* OfflineCause.CredentialChange */
  ), await Pi(t), r && // Don't set the network status to Unknown if we are offline.
  t.k_.set(
    "Unknown"
    /* OnlineState.Unknown */
  ), await t.remoteSyncer.handleCredentialChange(e), t.N_.delete(
    3
    /* OfflineCause.CredentialChange */
  ), await uo(t);
}
async function qA(n, e) {
  const t = G(n);
  e ? (t.N_.delete(
    2
    /* OfflineCause.IsSecondary */
  ), await uo(t)) : e || (t.N_.add(
    2
    /* OfflineCause.IsSecondary */
  ), await Pi(t), t.k_.set(
    "Unknown"
    /* OnlineState.Unknown */
  ));
}
function Tr(n) {
  return n.Q_ || // Create stream (but note that it is not started yet).
  (n.Q_ = function(t, r, i) {
    const s = G(t);
    return s.y_(), new PA(r, s.connection, s.authCredentials, s.appCheckCredentials, s.serializer, i);
  }(n.datastore, n.asyncQueue, {
    To: xA.bind(null, n),
    Ao: VA.bind(null, n),
    Vo: MA.bind(null, n),
    E_: LA.bind(null, n)
  }), n.L_.push(async (e) => {
    e ? (n.Q_.i_(), Rc(n) ? Sc(n) : n.k_.set(
      "Unknown"
      /* OnlineState.Unknown */
    )) : (await n.Q_.stop(), Vp(n));
  })), n.Q_;
}
function hn(n) {
  return n.K_ || // Create stream (but note that it is not started yet).
  (n.K_ = function(t, r, i) {
    const s = G(t);
    return s.y_(), new kA(r, s.connection, s.authCredentials, s.appCheckCredentials, s.serializer, i);
  }(n.datastore, n.asyncQueue, {
    To: () => Promise.resolve(),
    Ao: $A.bind(null, n),
    Vo: zA.bind(null, n),
    m_: jA.bind(null, n),
    f_: BA.bind(null, n)
  }), n.L_.push(async (e) => {
    e ? (n.K_.i_(), // This will start the write stream if necessary.
    await lo(n)) : (await n.K_.stop(), n.x_.length > 0 && (U("RemoteStore", `Stopping write stream with ${n.x_.length} pending writes`), n.x_ = []));
  })), n.K_;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Cc {
  constructor(e, t, r, i, s) {
    this.asyncQueue = e, this.timerId = t, this.targetTimeMs = r, this.op = i, this.removalCallback = s, this.deferred = new on(), this.then = this.deferred.promise.then.bind(this.deferred.promise), // It's normal for the deferred promise to be canceled (due to cancellation)
    // and so we attach a dummy catch callback to avoid
    // 'UnhandledPromiseRejectionWarning' log spam.
    this.deferred.promise.catch((a) => {
    });
  }
  get promise() {
    return this.deferred.promise;
  }
  /**
   * Creates and returns a DelayedOperation that has been scheduled to be
   * executed on the provided asyncQueue after the provided delayMs.
   *
   * @param asyncQueue - The queue to schedule the operation on.
   * @param id - A Timer ID identifying the type of operation this is.
   * @param delayMs - The delay (ms) before the operation should be scheduled.
   * @param op - The operation to run.
   * @param removalCallback - A callback to be called synchronously once the
   *   operation is executed or canceled, notifying the AsyncQueue to remove it
   *   from its delayedOperations list.
   *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
   *   the DelayedOperation class public.
   */
  static createAndSchedule(e, t, r, i, s) {
    const a = Date.now() + r, c = new Cc(e, t, a, i, s);
    return c.start(r), c;
  }
  /**
   * Starts the timer. This is called immediately after construction by
   * createAndSchedule().
   */
  start(e) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
  }
  /**
   * Queues the operation to run immediately (if it hasn't already been run or
   * canceled).
   */
  skipDelay() {
    return this.handleDelayElapsed();
  }
  /**
   * Cancels the operation if it hasn't already been executed or canceled. The
   * promise will be rejected.
   *
   * As long as the operation has not yet been run, calling cancel() provides a
   * guarantee that the operation will not be run.
   */
  cancel(e) {
    this.timerHandle !== null && (this.clearTimeout(), this.deferred.reject(new q(L.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() => this.timerHandle !== null ? (this.clearTimeout(), this.op().then((e) => this.deferred.resolve(e))) : Promise.resolve());
  }
  clearTimeout() {
    this.timerHandle !== null && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
  }
}
function Pc(n, e) {
  if (Ft("AsyncQueue", `${e}: ${n}`), Si(n))
    return new q(L.UNAVAILABLE, `${e}: ${n}`);
  throw n;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class ir {
  /** The default ordering is by key if the comparator is omitted */
  constructor(e) {
    this.comparator = e ? (t, r) => e(t, r) || H.comparator(t.key, r.key) : (t, r) => H.comparator(t.key, r.key), this.keyedMap = Qr(), this.sortedSet = new le(this.comparator);
  }
  /**
   * Returns an empty copy of the existing DocumentSet, using the same
   * comparator.
   */
  static emptySet(e) {
    return new ir(e.comparator);
  }
  has(e) {
    return this.keyedMap.get(e) != null;
  }
  get(e) {
    return this.keyedMap.get(e);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  /**
   * Returns the index of the provided key in the document set, or -1 if the
   * document key is not present in the set;
   */
  indexOf(e) {
    const t = this.keyedMap.get(e);
    return t ? this.sortedSet.indexOf(t) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  /** Iterates documents in order defined by "comparator" */
  forEach(e) {
    this.sortedSet.inorderTraversal((t, r) => (e(t), !1));
  }
  /** Inserts or updates a document with the same key */
  add(e) {
    const t = this.delete(e.key);
    return t.copy(t.keyedMap.insert(e.key, e), t.sortedSet.insert(e, null));
  }
  /** Deletes a document with a given key */
  delete(e) {
    const t = this.get(e);
    return t ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(t)) : this;
  }
  isEqual(e) {
    if (!(e instanceof ir) || this.size !== e.size)
      return !1;
    const t = this.sortedSet.getIterator(), r = e.sortedSet.getIterator();
    for (; t.hasNext(); ) {
      const i = t.getNext().key, s = r.getNext().key;
      if (!i.isEqual(s))
        return !1;
    }
    return !0;
  }
  toString() {
    const e = [];
    return this.forEach((t) => {
      e.push(t.toString());
    }), e.length === 0 ? "DocumentSet ()" : `DocumentSet (
  ` + e.join(`  
`) + `
)`;
  }
  copy(e, t) {
    const r = new ir();
    return r.comparator = this.comparator, r.keyedMap = e, r.sortedSet = t, r;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Lh {
  constructor() {
    this.U_ = new le(H.comparator);
  }
  track(e) {
    const t = e.doc.key, r = this.U_.get(t);
    r ? (
      // Merge the new change with the existing change.
      e.type !== 0 && r.type === 3 ? this.U_ = this.U_.insert(t, e) : e.type === 3 && r.type !== 1 ? this.U_ = this.U_.insert(t, {
        type: r.type,
        doc: e.doc
      }) : e.type === 2 && r.type === 2 ? this.U_ = this.U_.insert(t, {
        type: 2,
        doc: e.doc
      }) : e.type === 2 && r.type === 0 ? this.U_ = this.U_.insert(t, {
        type: 0,
        doc: e.doc
      }) : e.type === 1 && r.type === 0 ? this.U_ = this.U_.remove(t) : e.type === 1 && r.type === 2 ? this.U_ = this.U_.insert(t, {
        type: 1,
        doc: r.doc
      }) : e.type === 0 && r.type === 1 ? this.U_ = this.U_.insert(t, {
        type: 2,
        doc: e.doc
      }) : (
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        W()
      )
    ) : this.U_ = this.U_.insert(t, e);
  }
  W_() {
    const e = [];
    return this.U_.inorderTraversal((t, r) => {
      e.push(r);
    }), e;
  }
}
class pr {
  constructor(e, t, r, i, s, a, c, u, h) {
    this.query = e, this.docs = t, this.oldDocs = r, this.docChanges = i, this.mutatedKeys = s, this.fromCache = a, this.syncStateChanged = c, this.excludesMetadataChanges = u, this.hasCachedResults = h;
  }
  /** Returns a view snapshot as if all documents in the snapshot were added. */
  static fromInitialDocuments(e, t, r, i, s) {
    const a = [];
    return t.forEach((c) => {
      a.push({
        type: 0,
        doc: c
      });
    }), new pr(
      e,
      t,
      ir.emptySet(t),
      a,
      r,
      i,
      /* syncStateChanged= */
      !0,
      /* excludesMetadataChanges= */
      !1,
      s
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(e) {
    if (!(this.fromCache === e.fromCache && this.hasCachedResults === e.hasCachedResults && this.syncStateChanged === e.syncStateChanged && this.mutatedKeys.isEqual(e.mutatedKeys) && ro(this.query, e.query) && this.docs.isEqual(e.docs) && this.oldDocs.isEqual(e.oldDocs)))
      return !1;
    const t = this.docChanges, r = e.docChanges;
    if (t.length !== r.length)
      return !1;
    for (let i = 0; i < t.length; i++)
      if (t[i].type !== r[i].type || !t[i].doc.isEqual(r[i].doc))
        return !1;
    return !0;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class HA {
  constructor() {
    this.G_ = void 0, this.z_ = [];
  }
  // Helper methods that checks if the query has listeners that listening to remote store
  j_() {
    return this.z_.some((e) => e.H_());
  }
}
class WA {
  constructor() {
    this.queries = Fh(), this.onlineState = "Unknown", this.J_ = /* @__PURE__ */ new Set();
  }
  terminate() {
    (function(t, r) {
      const i = G(t), s = i.queries;
      i.queries = Fh(), s.forEach((a, c) => {
        for (const u of c.z_)
          u.onError(r);
      });
    })(this, new q(L.ABORTED, "Firestore shutting down"));
  }
}
function Fh() {
  return new Er((n) => sp(n), ro);
}
async function Up(n, e) {
  const t = G(n);
  let r = 3;
  const i = e.query;
  let s = t.queries.get(i);
  s ? !s.j_() && e.H_() && // Query has been listening to local cache, and tries to add a new listener sourced from watch.
  (r = 2) : (s = new HA(), r = e.H_() ? 0 : 1);
  try {
    switch (r) {
      case 0:
        s.G_ = await t.onListen(
          i,
          /** enableRemoteListen= */
          !0
        );
        break;
      case 1:
        s.G_ = await t.onListen(
          i,
          /** enableRemoteListen= */
          !1
        );
        break;
      case 2:
        await t.onFirstRemoteStoreListen(i);
    }
  } catch (a) {
    const c = Pc(a, `Initialization of query '${Yn(e.query)}' failed`);
    return void e.onError(c);
  }
  t.queries.set(i, s), s.z_.push(e), // Run global snapshot listeners if a consistent snapshot has been emitted.
  e.Y_(t.onlineState), s.G_ && e.Z_(s.G_) && kc(t);
}
async function $p(n, e) {
  const t = G(n), r = e.query;
  let i = 3;
  const s = t.queries.get(r);
  if (s) {
    const a = s.z_.indexOf(e);
    a >= 0 && (s.z_.splice(a, 1), s.z_.length === 0 ? i = e.H_() ? 0 : 1 : !s.j_() && e.H_() && // The removed listener is the last one that sourced from watch.
    (i = 2));
  }
  switch (i) {
    case 0:
      return t.queries.delete(r), t.onUnlisten(
        r,
        /** disableRemoteListen= */
        !0
      );
    case 1:
      return t.queries.delete(r), t.onUnlisten(
        r,
        /** disableRemoteListen= */
        !1
      );
    case 2:
      return t.onLastRemoteStoreUnlisten(r);
    default:
      return;
  }
}
function KA(n, e) {
  const t = G(n);
  let r = !1;
  for (const i of e) {
    const s = i.query, a = t.queries.get(s);
    if (a) {
      for (const c of a.z_)
        c.Z_(i) && (r = !0);
      a.G_ = i;
    }
  }
  r && kc(t);
}
function GA(n, e, t) {
  const r = G(n), i = r.queries.get(e);
  if (i)
    for (const s of i.z_)
      s.onError(t);
  r.queries.delete(e);
}
function kc(n) {
  n.J_.forEach((e) => {
    e.next();
  });
}
var Fa, Uh;
(Uh = Fa || (Fa = {})).X_ = "default", /** Listen to changes in cache only */
Uh.Cache = "cache";
class jp {
  constructor(e, t, r) {
    this.query = e, this.ea = t, /**
     * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
     * observer. This flag is set to true once we've actually raised an event.
     */
    this.ta = !1, this.na = null, this.onlineState = "Unknown", this.options = r || {};
  }
  /**
   * Applies the new ViewSnapshot to this listener, raising a user-facing event
   * if applicable (depending on what changed, whether the user has opted into
   * metadata-only changes, etc.). Returns true if a user-facing event was
   * indeed raised.
   */
  Z_(e) {
    if (!this.options.includeMetadataChanges) {
      const r = [];
      for (const i of e.docChanges)
        i.type !== 3 && r.push(i);
      e = new pr(
        e.query,
        e.docs,
        e.oldDocs,
        r,
        e.mutatedKeys,
        e.fromCache,
        e.syncStateChanged,
        /* excludesMetadataChanges= */
        !0,
        e.hasCachedResults
      );
    }
    let t = !1;
    return this.ta ? this.ra(e) && (this.ea.next(e), t = !0) : this.ia(e, this.onlineState) && (this.sa(e), t = !0), this.na = e, t;
  }
  onError(e) {
    this.ea.error(e);
  }
  /** Returns whether a snapshot was raised. */
  Y_(e) {
    this.onlineState = e;
    let t = !1;
    return this.na && !this.ta && this.ia(this.na, e) && (this.sa(this.na), t = !0), t;
  }
  ia(e, t) {
    if (!e.fromCache || !this.H_())
      return !0;
    const r = t !== "Offline";
    return (!this.options.oa || !r) && (!e.docs.isEmpty() || e.hasCachedResults || t === "Offline");
  }
  ra(e) {
    if (e.docChanges.length > 0)
      return !0;
    const t = this.na && this.na.hasPendingWrites !== e.hasPendingWrites;
    return !(!e.syncStateChanged && !t) && this.options.includeMetadataChanges === !0;
  }
  sa(e) {
    e = pr.fromInitialDocuments(e.query, e.docs, e.mutatedKeys, e.fromCache, e.hasCachedResults), this.ta = !0, this.ea.next(e);
  }
  H_() {
    return this.options.source !== Fa.Cache;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Bp {
  constructor(e) {
    this.key = e;
  }
}
class zp {
  constructor(e) {
    this.key = e;
  }
}
class QA {
  constructor(e, t) {
    this.query = e, this.Ia = t, this.Ta = null, this.hasCachedResults = !1, /**
     * A flag whether the view is current with the backend. A view is considered
     * current after it has seen the current flag from the backend and did not
     * lose consistency within the watch stream (e.g. because of an existence
     * filter mismatch).
     */
    this.current = !1, /** Documents in the view but not in the remote target */
    this.Ea = Q(), /** Document Keys that have local changes */
    this.mutatedKeys = Q(), this.da = op(e), this.Aa = new ir(this.da);
  }
  /**
   * The set of remote documents that the server has told us belongs to the target associated with
   * this view.
   */
  get Ra() {
    return this.Ia;
  }
  /**
   * Iterates over a set of doc changes, applies the query limit, and computes
   * what the new results should be, what the changes were, and whether we may
   * need to go back to the local cache for more results. Does not make any
   * changes to the view.
   * @param docChanges - The doc changes to apply to this view.
   * @param previousChanges - If this is being called with a refill, then start
   *        with this set of docs and changes instead of the current view.
   * @returns a new set of docs, changes, and refill flag.
   */
  Va(e, t) {
    const r = t ? t.ma : new Lh(), i = t ? t.Aa : this.Aa;
    let s = t ? t.mutatedKeys : this.mutatedKeys, a = i, c = !1;
    const u = this.query.limitType === "F" && i.size === this.query.limit ? i.last() : null, h = this.query.limitType === "L" && i.size === this.query.limit ? i.first() : null;
    if (e.inorderTraversal((f, m) => {
      const _ = i.get(f), w = io(this.query, m) ? m : null, A = !!_ && this.mutatedKeys.has(_.key), R = !!w && (w.hasLocalMutations || // We only consider committed mutations for documents that were
      // mutated during the lifetime of the view.
      this.mutatedKeys.has(w.key) && w.hasCommittedMutations);
      let p = !1;
      _ && w ? _.data.isEqual(w.data) ? A !== R && (r.track({
        type: 3,
        doc: w
      }), p = !0) : this.fa(_, w) || (r.track({
        type: 2,
        doc: w
      }), p = !0, (u && this.da(w, u) > 0 || h && this.da(w, h) < 0) && // This doc moved from inside the limit to outside the limit.
      // That means there may be some other doc in the local cache
      // that should be included instead.
      (c = !0)) : !_ && w ? (r.track({
        type: 0,
        doc: w
      }), p = !0) : _ && !w && (r.track({
        type: 1,
        doc: _
      }), p = !0, (u || h) && // A doc was removed from a full limit query. We'll need to
      // requery from the local cache to see if we know about some other
      // doc that should be in the results.
      (c = !0)), p && (w ? (a = a.add(w), s = R ? s.add(f) : s.delete(f)) : (a = a.delete(f), s = s.delete(f)));
    }), this.query.limit !== null)
      for (; a.size > this.query.limit; ) {
        const f = this.query.limitType === "F" ? a.last() : a.first();
        a = a.delete(f.key), s = s.delete(f.key), r.track({
          type: 1,
          doc: f
        });
      }
    return {
      Aa: a,
      ma: r,
      ts: c,
      mutatedKeys: s
    };
  }
  fa(e, t) {
    return e.hasLocalMutations && t.hasCommittedMutations && !t.hasLocalMutations;
  }
  /**
   * Updates the view with the given ViewDocumentChanges and optionally updates
   * limbo docs and sync state from the provided target change.
   * @param docChanges - The set of changes to make to the view's docs.
   * @param limboResolutionEnabled - Whether to update limbo documents based on
   *        this change.
   * @param targetChange - A target change to apply for computing limbo docs and
   *        sync state.
   * @param targetIsPendingReset - Whether the target is pending to reset due to
   *        existence filter mismatch. If not explicitly specified, it is treated
   *        equivalently to `false`.
   * @returns A new ViewChange with the given docs, changes, and sync state.
   */
  // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
  applyChanges(e, t, r, i) {
    const s = this.Aa;
    this.Aa = e.Aa, this.mutatedKeys = e.mutatedKeys;
    const a = e.ma.W_();
    a.sort((f, m) => function(w, A) {
      const R = (p) => {
        switch (p) {
          case 0:
            return 1;
          case 2:
          case 3:
            return 2;
          case 1:
            return 0;
          default:
            return W();
        }
      };
      return R(w) - R(A);
    }(f.type, m.type) || this.da(f.doc, m.doc)), this.ga(r), i = i != null && i;
    const c = t && !i ? this.pa() : [], u = this.Ea.size === 0 && this.current && !i ? 1 : 0, h = u !== this.Ta;
    return this.Ta = u, a.length !== 0 || h ? {
      snapshot: new pr(
        this.query,
        e.Aa,
        s,
        a,
        e.mutatedKeys,
        u === 0,
        h,
        /* excludesMetadataChanges= */
        !1,
        !!r && r.resumeToken.approximateByteSize() > 0
      ),
      ya: c
    } : {
      ya: c
    };
  }
  /**
   * Applies an OnlineState change to the view, potentially generating a
   * ViewChange if the view's syncState changes as a result.
   */
  Y_(e) {
    return this.current && e === "Offline" ? (
      // If we're offline, set `current` to false and then call applyChanges()
      // to refresh our syncState and generate a ViewChange as appropriate. We
      // are guaranteed to get a new TargetChange that sets `current` back to
      // true once the client is back online.
      (this.current = !1, this.applyChanges(
        {
          Aa: this.Aa,
          ma: new Lh(),
          mutatedKeys: this.mutatedKeys,
          ts: !1
        },
        /* limboResolutionEnabled= */
        !1
      ))
    ) : {
      ya: []
    };
  }
  /**
   * Returns whether the doc for the given key should be in limbo.
   */
  wa(e) {
    return !this.Ia.has(e) && // The local store doesn't think it's a result, so it shouldn't be in limbo.
    !!this.Aa.has(e) && !this.Aa.get(e).hasLocalMutations;
  }
  /**
   * Updates syncedDocuments, current, and limbo docs based on the given change.
   * Returns the list of changes to which docs are in limbo.
   */
  ga(e) {
    e && (e.addedDocuments.forEach((t) => this.Ia = this.Ia.add(t)), e.modifiedDocuments.forEach((t) => {
    }), e.removedDocuments.forEach((t) => this.Ia = this.Ia.delete(t)), this.current = e.current);
  }
  pa() {
    if (!this.current)
      return [];
    const e = this.Ea;
    this.Ea = Q(), this.Aa.forEach((r) => {
      this.wa(r.key) && (this.Ea = this.Ea.add(r.key));
    });
    const t = [];
    return e.forEach((r) => {
      this.Ea.has(r) || t.push(new zp(r));
    }), this.Ea.forEach((r) => {
      e.has(r) || t.push(new Bp(r));
    }), t;
  }
  /**
   * Update the in-memory state of the current view with the state read from
   * persistence.
   *
   * We update the query view whenever a client's primary status changes:
   * - When a client transitions from primary to secondary, it can miss
   *   LocalStorage updates and its query views may temporarily not be
   *   synchronized with the state on disk.
   * - For secondary to primary transitions, the client needs to update the list
   *   of `syncedDocuments` since secondary clients update their query views
   *   based purely on synthesized RemoteEvents.
   *
   * @param queryResult.documents - The documents that match the query according
   * to the LocalStore.
   * @param queryResult.remoteKeys - The keys of the documents that match the
   * query according to the backend.
   *
   * @returns The ViewChange that resulted from this synchronization.
   */
  // PORTING NOTE: Multi-tab only.
  Sa(e) {
    this.Ia = e.Is, this.Ea = Q();
    const t = this.Va(e.documents);
    return this.applyChanges(
      t,
      /* limboResolutionEnabled= */
      !0
    );
  }
  /**
   * Returns a view snapshot as if this query was just listened to. Contains
   * a document add for every existing document and the `fromCache` and
   * `hasPendingWrites` status of the already established view.
   */
  // PORTING NOTE: Multi-tab only.
  ba() {
    return pr.fromInitialDocuments(this.query, this.Aa, this.mutatedKeys, this.Ta === 0, this.hasCachedResults);
  }
}
class YA {
  constructor(e, t, r) {
    this.query = e, this.targetId = t, this.view = r;
  }
}
class XA {
  constructor(e) {
    this.key = e, /**
     * Set to true once we've received a document. This is used in
     * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
     * decide whether it needs to manufacture a delete event for the target once
     * the target is CURRENT.
     */
    this.Da = !1;
  }
}
class JA {
  constructor(e, t, r, i, s, a) {
    this.localStore = e, this.remoteStore = t, this.eventManager = r, this.sharedClientState = i, this.currentUser = s, this.maxConcurrentLimboResolutions = a, this.Ca = {}, this.va = new Er((c) => sp(c), ro), this.Fa = /* @__PURE__ */ new Map(), /**
     * The keys of documents that are in limbo for which we haven't yet started a
     * limbo resolution query. The strings in this set are the result of calling
     * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
     *
     * The `Set` type was chosen because it provides efficient lookup and removal
     * of arbitrary elements and it also maintains insertion order, providing the
     * desired queue-like FIFO semantics.
     */
    this.Ma = /* @__PURE__ */ new Set(), /**
     * Keeps track of the target ID for each document that is in limbo with an
     * active target.
     */
    this.xa = new le(H.comparator), /**
     * Keeps track of the information about an active limbo resolution for each
     * active target ID that was started for the purpose of limbo resolution.
     */
    this.Oa = /* @__PURE__ */ new Map(), this.Na = new Ec(), /** Stores user completion handlers, indexed by User and BatchId. */
    this.La = {}, /** Stores user callbacks waiting for all pending writes to be acknowledged. */
    this.Ba = /* @__PURE__ */ new Map(), this.ka = fr.Bn(), this.onlineState = "Unknown", // The primary state is set to `true` or `false` immediately after Firestore
    // startup. In the interim, a client should only be considered primary if
    // `isPrimary` is true.
    this.qa = void 0;
  }
  get isPrimaryClient() {
    return this.qa === !0;
  }
}
async function ZA(n, e, t = !0) {
  const r = Qp(n);
  let i;
  const s = r.va.get(e);
  return s ? (
    // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
    // already exists when EventManager calls us for the first time. This
    // happens when the primary tab is already listening to this query on
    // behalf of another tab and the user of the primary also starts listening
    // to the query. EventManager will not have an assigned target ID in this
    // case and calls `listen` to obtain this ID.
    (r.sharedClientState.addLocalQueryTarget(s.targetId), i = s.view.ba())
  ) : i = await qp(
    r,
    e,
    t,
    /** shouldInitializeView= */
    !0
  ), i;
}
async function eS(n, e) {
  const t = Qp(n);
  await qp(
    t,
    e,
    /** shouldListenToRemote= */
    !0,
    /** shouldInitializeView= */
    !1
  );
}
async function qp(n, e, t, r) {
  const i = await TA(n.localStore, _t(e)), s = i.targetId, a = t ? n.sharedClientState.addLocalQueryTarget(s) : "not-current";
  let c;
  return r && (c = await tS(n, e, s, a === "current", i.resumeToken)), n.isPrimaryClient && t && Dp(n.remoteStore, i), c;
}
async function tS(n, e, t, r, i) {
  n.Qa = (m, _, w) => async function(R, p, I, D) {
    let O = p.view.Va(I);
    O.ts && // The query has a limit and some docs were removed, so we need
    // to re-run the query against the local store to make sure we
    // didn't lose any good docs that had been past the limit.
    (O = await Dh(
      R.localStore,
      p.query,
      /* usePreviousResults= */
      !1
    ).then(({ documents: T }) => p.view.Va(T, O)));
    const N = D && D.targetChanges.get(p.targetId), C = D && D.targetMismatches.get(p.targetId) != null, M = p.view.applyChanges(
      O,
      /* limboResolutionEnabled= */
      R.isPrimaryClient,
      N,
      C
    );
    return jh(R, p.targetId, M.ya), M.snapshot;
  }(n, m, _, w);
  const s = await Dh(
    n.localStore,
    e,
    /* usePreviousResults= */
    !0
  ), a = new QA(e, s.Is), c = a.Va(s.documents), u = Ci.createSynthesizedTargetChangeForCurrentChange(t, r && n.onlineState !== "Offline", i), h = a.applyChanges(
    c,
    /* limboResolutionEnabled= */
    n.isPrimaryClient,
    u
  );
  jh(n, t, h.ya);
  const f = new YA(e, t, a);
  return n.va.set(e, f), n.Fa.has(t) ? n.Fa.get(t).push(e) : n.Fa.set(t, [e]), h.snapshot;
}
async function nS(n, e, t) {
  const r = G(n), i = r.va.get(e), s = r.Fa.get(i.targetId);
  if (s.length > 1)
    return r.Fa.set(i.targetId, s.filter((a) => !ro(a, e))), void r.va.delete(e);
  r.isPrimaryClient ? (r.sharedClientState.removeLocalQueryTarget(i.targetId), r.sharedClientState.isActiveQueryTarget(i.targetId) || await La(
    r.localStore,
    i.targetId,
    /*keepPersistedTargetData=*/
    !1
  ).then(() => {
    r.sharedClientState.clearQueryState(i.targetId), t && bc(r.remoteStore, i.targetId), Ua(r, i.targetId);
  }).catch(Ai)) : (Ua(r, i.targetId), await La(
    r.localStore,
    i.targetId,
    /*keepPersistedTargetData=*/
    !0
  ));
}
async function rS(n, e) {
  const t = G(n), r = t.va.get(e), i = t.Fa.get(r.targetId);
  t.isPrimaryClient && i.length === 1 && // PORTING NOTE: Unregister the target ID with local Firestore client as
  // watch target.
  (t.sharedClientState.removeLocalQueryTarget(r.targetId), bc(t.remoteStore, r.targetId));
}
async function iS(n, e, t) {
  const r = hS(n);
  try {
    const i = await function(a, c) {
      const u = G(a), h = Ee.now(), f = c.reduce((w, A) => w.add(A.key), Q());
      let m, _;
      return u.persistence.runTransaction("Locally write mutations", "readwrite", (w) => {
        let A = Ut(), R = Q();
        return u.us.getEntries(w, f).next((p) => {
          A = p, A.forEach((I, D) => {
            D.isValidDocument() || (R = R.add(I));
          });
        }).next(() => u.localDocuments.getOverlayedDocuments(w, A)).next((p) => {
          m = p;
          const I = [];
          for (const D of c) {
            const O = Sb(D, m.get(D.key).overlayedDocument);
            O != null && // NOTE: The base state should only be applied if there's some
            // existing document to override, so use a Precondition of
            // exists=true
            I.push(new qn(D.key, O, Jf(O.value.mapValue), xt.exists(!0)));
          }
          return u.mutationQueue.addMutationBatch(w, h, I, c);
        }).next((p) => {
          _ = p;
          const I = p.applyToLocalDocumentSet(m, R);
          return u.documentOverlayCache.saveOverlays(w, p.batchId, I);
        });
      }).then(() => ({
        batchId: _.batchId,
        changes: cp(m)
      }));
    }(r.localStore, e);
    r.sharedClientState.addPendingMutation(i.batchId), function(a, c, u) {
      let h = a.La[a.currentUser.toKey()];
      h || (h = new le(ee)), h = h.insert(c, u), a.La[a.currentUser.toKey()] = h;
    }(r, i.batchId, t), await ki(r, i.changes), await lo(r.remoteStore);
  } catch (i) {
    const s = Pc(i, "Failed to persist write");
    t.reject(s);
  }
}
async function Hp(n, e) {
  const t = G(n);
  try {
    const r = await vA(t.localStore, e);
    e.targetChanges.forEach((i, s) => {
      const a = t.Oa.get(s);
      a && // Since this is a limbo resolution lookup, it's for a single document
      // and it could be added, modified, or removed, but not a combination.
      (ae(i.addedDocuments.size + i.modifiedDocuments.size + i.removedDocuments.size <= 1), i.addedDocuments.size > 0 ? a.Da = !0 : i.modifiedDocuments.size > 0 ? ae(a.Da) : i.removedDocuments.size > 0 && (ae(a.Da), a.Da = !1));
    }), await ki(t, r, e);
  } catch (r) {
    await Ai(r);
  }
}
function $h(n, e, t) {
  const r = G(n);
  if (r.isPrimaryClient && t === 0 || !r.isPrimaryClient && t === 1) {
    const i = [];
    r.va.forEach((s, a) => {
      const c = a.view.Y_(e);
      c.snapshot && i.push(c.snapshot);
    }), function(a, c) {
      const u = G(a);
      u.onlineState = c;
      let h = !1;
      u.queries.forEach((f, m) => {
        for (const _ of m.z_)
          _.Y_(c) && (h = !0);
      }), h && kc(u);
    }(r.eventManager, e), i.length && r.Ca.E_(i), r.onlineState = e, r.isPrimaryClient && r.sharedClientState.setOnlineState(e);
  }
}
async function sS(n, e, t) {
  const r = G(n);
  r.sharedClientState.updateQueryState(e, "rejected", t);
  const i = r.Oa.get(e), s = i && i.key;
  if (s) {
    let a = new le(H.comparator);
    a = a.insert(s, Fe.newNoDocument(s, K.min()));
    const c = Q().add(s), u = new ao(
      K.min(),
      /* targetChanges= */
      /* @__PURE__ */ new Map(),
      /* targetMismatches= */
      new le(ee),
      a,
      c
    );
    await Hp(r, u), // Since this query failed, we won't want to manually unlisten to it.
    // We only remove it from bookkeeping after we successfully applied the
    // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
    // this query when the RemoteStore restarts the Watch stream, which should
    // re-trigger the target failure.
    r.xa = r.xa.remove(s), r.Oa.delete(e), Oc(r);
  } else
    await La(
      r.localStore,
      e,
      /* keepPersistedTargetData */
      !1
    ).then(() => Ua(r, e, t)).catch(Ai);
}
async function oS(n, e) {
  const t = G(n), r = e.batch.batchId;
  try {
    const i = await _A(t.localStore, e);
    Kp(
      t,
      r,
      /*error=*/
      null
    ), Wp(t, r), t.sharedClientState.updateMutationState(r, "acknowledged"), await ki(t, i);
  } catch (i) {
    await Ai(i);
  }
}
async function aS(n, e, t) {
  const r = G(n);
  try {
    const i = await function(a, c) {
      const u = G(a);
      return u.persistence.runTransaction("Reject batch", "readwrite-primary", (h) => {
        let f;
        return u.mutationQueue.lookupMutationBatch(h, c).next((m) => (ae(m !== null), f = m.keys(), u.mutationQueue.removeMutationBatch(h, m))).next(() => u.mutationQueue.performConsistencyCheck(h)).next(() => u.documentOverlayCache.removeOverlaysForBatchId(h, f, c)).next(() => u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h, f)).next(() => u.localDocuments.getDocuments(h, f));
      });
    }(r.localStore, e);
    Kp(r, e, t), Wp(r, e), r.sharedClientState.updateMutationState(e, "rejected", t), await ki(r, i);
  } catch (i) {
    await Ai(i);
  }
}
function Wp(n, e) {
  (n.Ba.get(e) || []).forEach((t) => {
    t.resolve();
  }), n.Ba.delete(e);
}
function Kp(n, e, t) {
  const r = G(n);
  let i = r.La[r.currentUser.toKey()];
  if (i) {
    const s = i.get(e);
    s && (t ? s.reject(t) : s.resolve(), i = i.remove(e)), r.La[r.currentUser.toKey()] = i;
  }
}
function Ua(n, e, t = null) {
  n.sharedClientState.removeLocalQueryTarget(e);
  for (const r of n.Fa.get(e))
    n.va.delete(r), t && n.Ca.Ka(r, t);
  n.Fa.delete(e), n.isPrimaryClient && n.Na.mr(e).forEach((r) => {
    n.Na.containsKey(r) || // We removed the last reference for this key
    Gp(n, r);
  });
}
function Gp(n, e) {
  n.Ma.delete(e.path.canonicalString());
  const t = n.xa.get(e);
  t !== null && (bc(n.remoteStore, t), n.xa = n.xa.remove(e), n.Oa.delete(t), Oc(n));
}
function jh(n, e, t) {
  for (const r of t)
    r instanceof Bp ? (n.Na.addReference(r.key, e), cS(n, r)) : r instanceof zp ? (U("SyncEngine", "Document no longer in limbo: " + r.key), n.Na.removeReference(r.key, e), n.Na.containsKey(r.key) || // We removed the last reference for this key
    Gp(n, r.key)) : W();
}
function cS(n, e) {
  const t = e.key, r = t.path.canonicalString();
  n.xa.get(t) || n.Ma.has(r) || (U("SyncEngine", "New document in limbo: " + t), n.Ma.add(r), Oc(n));
}
function Oc(n) {
  for (; n.Ma.size > 0 && n.xa.size < n.maxConcurrentLimboResolutions; ) {
    const e = n.Ma.values().next().value;
    n.Ma.delete(e);
    const t = new H(ue.fromString(e)), r = n.ka.next();
    n.Oa.set(r, new XA(t)), n.xa = n.xa.insert(t, r), Dp(n.remoteStore, new nn(_t(yc(t.path)), r, "TargetPurposeLimboResolution", hc.oe));
  }
}
async function ki(n, e, t) {
  const r = G(n), i = [], s = [], a = [];
  r.va.isEmpty() || (r.va.forEach((c, u) => {
    a.push(r.Qa(u, e, t).then((h) => {
      var f;
      if ((h || t) && r.isPrimaryClient) {
        const m = h ? !h.fromCache : (f = t == null ? void 0 : t.targetChanges.get(u.targetId)) === null || f === void 0 ? void 0 : f.current;
        r.sharedClientState.updateQueryState(u.targetId, m ? "current" : "not-current");
      }
      if (h) {
        i.push(h);
        const m = Ic.Ui(u.targetId, h);
        s.push(m);
      }
    }));
  }), await Promise.all(a), r.Ca.E_(i), await async function(u, h) {
    const f = G(u);
    try {
      await f.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (m) => V.forEach(h, (_) => V.forEach(_.Ki, (w) => f.persistence.referenceDelegate.addReference(m, _.targetId, w)).next(() => V.forEach(_.$i, (w) => f.persistence.referenceDelegate.removeReference(m, _.targetId, w)))));
    } catch (m) {
      if (!Si(m))
        throw m;
      U("LocalStore", "Failed to update sequence numbers: " + m);
    }
    for (const m of h) {
      const _ = m.targetId;
      if (!m.fromCache) {
        const w = f.ss.get(_), A = w.snapshotVersion, R = w.withLastLimboFreeSnapshotVersion(A);
        f.ss = f.ss.insert(_, R);
      }
    }
  }(r.localStore, s));
}
async function uS(n, e) {
  const t = G(n);
  if (!t.currentUser.isEqual(e)) {
    U("SyncEngine", "User change. New user:", e.toKey());
    const r = await Pp(t.localStore, e);
    t.currentUser = e, // Fails tasks waiting for pending writes requested by previous user.
    function(s, a) {
      s.Ba.forEach((c) => {
        c.forEach((u) => {
          u.reject(new q(L.CANCELLED, a));
        });
      }), s.Ba.clear();
    }(t, "'waitForPendingWrites' promise is rejected due to a user change."), // TODO(b/114226417): Consider calling this only in the primary tab.
    t.sharedClientState.handleUserChange(e, r.removedBatchIds, r.addedBatchIds), await ki(t, r.ls);
  }
}
function lS(n, e) {
  const t = G(n), r = t.Oa.get(e);
  if (r && r.Da)
    return Q().add(r.key);
  {
    let i = Q();
    const s = t.Fa.get(e);
    if (!s)
      return i;
    for (const a of s) {
      const c = t.va.get(a);
      i = i.unionWith(c.view.Ra);
    }
    return i;
  }
}
function Qp(n) {
  const e = G(n);
  return e.remoteStore.remoteSyncer.applyRemoteEvent = Hp.bind(null, e), e.remoteStore.remoteSyncer.getRemoteKeysForTarget = lS.bind(null, e), e.remoteStore.remoteSyncer.rejectListen = sS.bind(null, e), e.Ca.E_ = KA.bind(null, e.eventManager), e.Ca.Ka = GA.bind(null, e.eventManager), e;
}
function hS(n) {
  const e = G(n);
  return e.remoteStore.remoteSyncer.applySuccessfulWrite = oS.bind(null, e), e.remoteStore.remoteSyncer.rejectFailedWrite = aS.bind(null, e), e;
}
class Bh {
  constructor() {
    this.synchronizeTabs = !1;
  }
  async initialize(e) {
    this.serializer = co(e.databaseInfo.databaseId), this.sharedClientState = this.createSharedClientState(e), this.persistence = this.createPersistence(e), await this.persistence.start(), this.localStore = this.createLocalStore(e), this.gcScheduler = this.createGarbageCollectionScheduler(e, this.localStore), this.indexBackfillerScheduler = this.createIndexBackfillerScheduler(e, this.localStore);
  }
  createGarbageCollectionScheduler(e, t) {
    return null;
  }
  createIndexBackfillerScheduler(e, t) {
    return null;
  }
  createLocalStore(e) {
    return yA(this.persistence, new mA(), e.initialUser, this.serializer);
  }
  createPersistence(e) {
    return new dA(Tc.Yr, this.serializer);
  }
  createSharedClientState(e) {
    return new bA();
  }
  async terminate() {
    var e, t;
    (e = this.gcScheduler) === null || e === void 0 || e.stop(), (t = this.indexBackfillerScheduler) === null || t === void 0 || t.stop(), this.sharedClientState.shutdown(), await this.persistence.shutdown();
  }
}
class dS {
  async initialize(e, t) {
    this.localStore || (this.localStore = e.localStore, this.sharedClientState = e.sharedClientState, this.datastore = this.createDatastore(t), this.remoteStore = this.createRemoteStore(t), this.eventManager = this.createEventManager(t), this.syncEngine = this.createSyncEngine(
      t,
      /* startAsPrimary=*/
      !e.synchronizeTabs
    ), this.sharedClientState.onlineStateHandler = (r) => $h(
      this.syncEngine,
      r,
      1
      /* OnlineStateSource.SharedClientState */
    ), this.remoteStore.remoteSyncer.handleCredentialChange = uS.bind(null, this.syncEngine), await qA(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(e) {
    return function() {
      return new WA();
    }();
  }
  createDatastore(e) {
    const t = co(e.databaseInfo.databaseId), r = function(s) {
      return new CA(s);
    }(e.databaseInfo);
    return function(s, a, c, u) {
      return new OA(s, a, c, u);
    }(e.authCredentials, e.appCheckCredentials, r, t);
  }
  createRemoteStore(e) {
    return function(r, i, s, a, c) {
      return new DA(r, i, s, a, c);
    }(this.localStore, this.datastore, e.asyncQueue, (t) => $h(
      this.syncEngine,
      t,
      0
      /* OnlineStateSource.RemoteStore */
    ), function() {
      return Vh.D() ? new Vh() : new AA();
    }());
  }
  createSyncEngine(e, t) {
    return function(i, s, a, c, u, h, f) {
      const m = new JA(i, s, a, c, u, h);
      return f && (m.qa = !0), m;
    }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, e.initialUser, e.maxConcurrentLimboResolutions, t);
  }
  async terminate() {
    var e, t;
    await async function(i) {
      const s = G(i);
      U("RemoteStore", "RemoteStore shutting down."), s.N_.add(
        5
        /* OfflineCause.Shutdown */
      ), await Pi(s), s.B_.shutdown(), // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
      // triggering spurious listener events with cached data, etc.
      s.k_.set(
        "Unknown"
        /* OnlineState.Unknown */
      );
    }(this.remoteStore), (e = this.datastore) === null || e === void 0 || e.terminate(), (t = this.eventManager) === null || t === void 0 || t.terminate();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
/**
 * @license
 * Copyright 2017 Google LLC
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
class Yp {
  constructor(e) {
    this.observer = e, /**
     * When set to true, will not raise future events. Necessary to deal with
     * async detachment of listener.
     */
    this.muted = !1;
  }
  next(e) {
    this.observer.next && this.Wa(this.observer.next, e);
  }
  error(e) {
    this.observer.error ? this.Wa(this.observer.error, e) : Ft("Uncaught Error in snapshot listener:", e.toString());
  }
  Ga() {
    this.muted = !0;
  }
  Wa(e, t) {
    this.muted || setTimeout(() => {
      this.muted || e(t);
    }, 0);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class fS {
  constructor(e, t, r, i) {
    this.authCredentials = e, this.appCheckCredentials = t, this.asyncQueue = r, this.databaseInfo = i, this.user = Le.UNAUTHENTICATED, this.clientId = Qf.newId(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this.authCredentials.start(r, async (s) => {
      U("FirestoreClient", "Received user=", s.uid), await this.authCredentialListener(s), this.user = s;
    }), this.appCheckCredentials.start(r, (s) => (U("FirestoreClient", "Received new app check token=", s), this.appCheckCredentialListener(s, this.user)));
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100
    };
  }
  setCredentialChangeListener(e) {
    this.authCredentialListener = e;
  }
  setAppCheckTokenChangeListener(e) {
    this.appCheckCredentialListener = e;
  }
  /**
   * Checks that the client has not been terminated. Ensures that other methods on //
   * this class cannot be called after the client is terminated. //
   */
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown)
      throw new q(L.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const e = new on();
    return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
      try {
        this._onlineComponents && await this._onlineComponents.terminate(), this._offlineComponents && await this._offlineComponents.terminate(), // The credentials provider must be terminated after shutting down the
        // RemoteStore as it will prevent the RemoteStore from retrieving auth
        // tokens.
        this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), e.resolve();
      } catch (t) {
        const r = Pc(t, "Failed to shutdown persistence");
        e.reject(r);
      }
    }), e.promise;
  }
}
async function ea(n, e) {
  n.asyncQueue.verifyOperationInProgress(), U("FirestoreClient", "Initializing OfflineComponentProvider");
  const t = n.configuration;
  await e.initialize(t);
  let r = t.initialUser;
  n.setCredentialChangeListener(async (i) => {
    r.isEqual(i) || (await Pp(e.localStore, i), r = i);
  }), // When a user calls clearPersistence() in one client, all other clients
  // need to be terminated to allow the delete to succeed.
  e.persistence.setDatabaseDeletedListener(() => n.terminate()), n._offlineComponents = e;
}
async function zh(n, e) {
  n.asyncQueue.verifyOperationInProgress();
  const t = await mS(n);
  U("FirestoreClient", "Initializing OnlineComponentProvider"), await e.initialize(t, n.configuration), // The CredentialChangeListener of the online component provider takes
  // precedence over the offline component provider.
  n.setCredentialChangeListener((r) => Mh(e.remoteStore, r)), n.setAppCheckTokenChangeListener((r, i) => Mh(e.remoteStore, i)), n._onlineComponents = e;
}
function pS(n) {
  return n.name === "FirebaseError" ? n.code === L.FAILED_PRECONDITION || n.code === L.UNIMPLEMENTED : !(typeof DOMException < "u" && n instanceof DOMException) || // When the browser is out of quota we could get either quota exceeded
  // or an aborted error depending on whether the error happened during
  // schema migration.
  n.code === 22 || n.code === 20 || // Firefox Private Browsing mode disables IndexedDb and returns
  // INVALID_STATE for any usage.
  n.code === 11;
}
async function mS(n) {
  if (!n._offlineComponents)
    if (n._uninitializedComponentsProvider) {
      U("FirestoreClient", "Using user provided OfflineComponentProvider");
      try {
        await ea(n, n._uninitializedComponentsProvider._offline);
      } catch (e) {
        const t = e;
        if (!pS(t))
          throw t;
        ur("Error using user provided cache. Falling back to memory cache: " + t), await ea(n, new Bh());
      }
    } else
      U("FirestoreClient", "Using default OfflineComponentProvider"), await ea(n, new Bh());
  return n._offlineComponents;
}
async function Xp(n) {
  return n._onlineComponents || (n._uninitializedComponentsProvider ? (U("FirestoreClient", "Using user provided OnlineComponentProvider"), await zh(n, n._uninitializedComponentsProvider._online)) : (U("FirestoreClient", "Using default OnlineComponentProvider"), await zh(n, new dS()))), n._onlineComponents;
}
function gS(n) {
  return Xp(n).then((e) => e.syncEngine);
}
async function $a(n) {
  const e = await Xp(n), t = e.eventManager;
  return t.onListen = ZA.bind(null, e.syncEngine), t.onUnlisten = nS.bind(null, e.syncEngine), t.onFirstRemoteStoreListen = eS.bind(null, e.syncEngine), t.onLastRemoteStoreUnlisten = rS.bind(null, e.syncEngine), t;
}
function yS(n, e, t = {}) {
  const r = new on();
  return n.asyncQueue.enqueueAndForget(async () => function(s, a, c, u, h) {
    const f = new Yp({
      next: (_) => {
        a.enqueueAndForget(() => $p(s, m)), _.fromCache && u.source === "server" ? h.reject(new q(L.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : h.resolve(_);
      },
      error: (_) => h.reject(_)
    }), m = new jp(c, f, {
      includeMetadataChanges: !0,
      oa: !0
    });
    return Up(s, m);
  }(await $a(n), n.asyncQueue, e, t, r)), r.promise;
}
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
function Jp(n) {
  const e = {};
  return n.timeoutSeconds !== void 0 && (e.timeoutSeconds = n.timeoutSeconds), e;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const qh = /* @__PURE__ */ new Map();
/**
 * @license
 * Copyright 2017 Google LLC
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
function Zp(n, e, t) {
  if (!t)
    throw new q(L.INVALID_ARGUMENT, `Function ${n}() cannot be called with an empty ${e}.`);
}
function _S(n, e, t, r) {
  if (e === !0 && r === !0)
    throw new q(L.INVALID_ARGUMENT, `${n} and ${t} cannot be used together.`);
}
function Hh(n) {
  if (!H.isDocumentKey(n))
    throw new q(L.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`);
}
function Wh(n) {
  if (H.isDocumentKey(n))
    throw new q(L.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`);
}
function Nc(n) {
  if (n === void 0)
    return "undefined";
  if (n === null)
    return "null";
  if (typeof n == "string")
    return n.length > 20 && (n = `${n.substring(0, 20)}...`), JSON.stringify(n);
  if (typeof n == "number" || typeof n == "boolean")
    return "" + n;
  if (typeof n == "object") {
    if (n instanceof Array)
      return "an array";
    {
      const e = (
        /** try to get the constructor name for an object. */
        function(r) {
          return r.constructor ? r.constructor.name : null;
        }(n)
      );
      return e ? `a custom ${e} object` : "an object";
    }
  }
  return typeof n == "function" ? "a function" : W();
}
function an(n, e) {
  if ("_delegate" in n && // Unwrap Compat types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (n = n._delegate), !(n instanceof e)) {
    if (e.name === n.constructor.name)
      throw new q(L.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
    {
      const t = Nc(n);
      throw new q(L.INVALID_ARGUMENT, `Expected type '${e.name}', but it was: ${t}`);
    }
  }
  return n;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Kh {
  constructor(e) {
    var t, r;
    if (e.host === void 0) {
      if (e.ssl !== void 0)
        throw new q(L.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      this.host = "firestore.googleapis.com", this.ssl = !0;
    } else
      this.host = e.host, this.ssl = (t = e.ssl) === null || t === void 0 || t;
    if (this.credentials = e.credentials, this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties, this.localCache = e.localCache, e.cacheSizeBytes === void 0)
      this.cacheSizeBytes = 41943040;
    else {
      if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < 1048576)
        throw new q(L.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
      this.cacheSizeBytes = e.cacheSizeBytes;
    }
    _S("experimentalForceLongPolling", e.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", e.experimentalAutoDetectLongPolling), this.experimentalForceLongPolling = !!e.experimentalForceLongPolling, this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = !1 : e.experimentalAutoDetectLongPolling === void 0 ? this.experimentalAutoDetectLongPolling = !0 : (
      // For backwards compatibility, coerce the value to boolean even though
      // the TypeScript compiler has narrowed the type to boolean already.
      // noinspection PointlessBooleanExpressionJS
      this.experimentalAutoDetectLongPolling = !!e.experimentalAutoDetectLongPolling
    ), this.experimentalLongPollingOptions = Jp((r = e.experimentalLongPollingOptions) !== null && r !== void 0 ? r : {}), function(s) {
      if (s.timeoutSeconds !== void 0) {
        if (isNaN(s.timeoutSeconds))
          throw new q(L.INVALID_ARGUMENT, `invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);
        if (s.timeoutSeconds < 5)
          throw new q(L.INVALID_ARGUMENT, `invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);
        if (s.timeoutSeconds > 30)
          throw new q(L.INVALID_ARGUMENT, `invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`);
      }
    }(this.experimentalLongPollingOptions), this.useFetchStreams = !!e.useFetchStreams;
  }
  isEqual(e) {
    return this.host === e.host && this.ssl === e.ssl && this.credentials === e.credentials && this.cacheSizeBytes === e.cacheSizeBytes && this.experimentalForceLongPolling === e.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === e.experimentalAutoDetectLongPolling && function(r, i) {
      return r.timeoutSeconds === i.timeoutSeconds;
    }(this.experimentalLongPollingOptions, e.experimentalLongPollingOptions) && this.ignoreUndefinedProperties === e.ignoreUndefinedProperties && this.useFetchStreams === e.useFetchStreams;
  }
}
class ho {
  /** @hideconstructor */
  constructor(e, t, r, i) {
    this._authCredentials = e, this._appCheckCredentials = t, this._databaseId = r, this._app = i, /**
     * Whether it's a Firestore or Firestore Lite instance.
     */
    this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new Kh({}), this._settingsFrozen = !1;
  }
  /**
   * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
   * instance.
   */
  get app() {
    if (!this._app)
      throw new q(L.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== void 0;
  }
  _setSettings(e) {
    if (this._settingsFrozen)
      throw new q(L.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
    this._settings = new Kh(e), e.credentials !== void 0 && (this._authCredentials = function(r) {
      if (!r)
        return new VI();
      switch (r.type) {
        case "firstParty":
          return new UI(r.sessionIndex || "0", r.iamToken || null, r.authTokenFactory || null);
        case "provider":
          return r.client;
        default:
          throw new q(L.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
      }
    }(e.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return this._settingsFrozen = !0, this._settings;
  }
  _delete() {
    return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
  }
  /** Returns a JSON-serializable representation of this `Firestore` instance. */
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings
    };
  }
  /**
   * Terminates all components used by this client. Subclasses can override
   * this method to clean up their own dependencies, but must also call this
   * method.
   *
   * Only ever called once.
   */
  _terminate() {
    return function(t) {
      const r = qh.get(t);
      r && (U("ComponentProvider", "Removing Datastore"), qh.delete(t), r.terminate());
    }(this), Promise.resolve();
  }
}
function vS(n, e, t, r = {}) {
  var i;
  const s = (n = an(n, ho))._getSettings(), a = `${e}:${t}`;
  if (s.host !== "firestore.googleapis.com" && s.host !== a && ur("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."), n._setSettings(Object.assign(Object.assign({}, s), {
    host: a,
    ssl: !1
  })), r.mockUserToken) {
    let c, u;
    if (typeof r.mockUserToken == "string")
      c = r.mockUserToken, u = Le.MOCK_USER;
    else {
      c = Xd(r.mockUserToken, (i = n._app) === null || i === void 0 ? void 0 : i.options.projectId);
      const h = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!h)
        throw new q(L.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
      u = new Le(h);
    }
    n._authCredentials = new MI(new Gf(c, u));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Oi {
  // This is the lite version of the Query class in the main SDK.
  /** @hideconstructor protected */
  constructor(e, t, r) {
    this.converter = t, this._query = r, /** The type of this Firestore reference. */
    this.type = "query", this.firestore = e;
  }
  withConverter(e) {
    return new Oi(this.firestore, e, this._query);
  }
}
class Xe {
  /** @hideconstructor */
  constructor(e, t, r) {
    this.converter = t, this._key = r, /** The type of this Firestore reference. */
    this.type = "document", this.firestore = e;
  }
  get _path() {
    return this._key.path;
  }
  /**
   * The document's identifier within its collection.
   */
  get id() {
    return this._key.path.lastSegment();
  }
  /**
   * A string representing the path of the referenced document (relative
   * to the root of the database).
   */
  get path() {
    return this._key.path.canonicalString();
  }
  /**
   * The collection this `DocumentReference` belongs to.
   */
  get parent() {
    return new cn(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(e) {
    return new Xe(this.firestore, e, this._key);
  }
}
class cn extends Oi {
  /** @hideconstructor */
  constructor(e, t, r) {
    super(e, t, yc(r)), this._path = r, /** The type of this Firestore reference. */
    this.type = "collection";
  }
  /** The collection's identifier. */
  get id() {
    return this._query.path.lastSegment();
  }
  /**
   * A string representing the path of the referenced collection (relative
   * to the root of the database).
   */
  get path() {
    return this._query.path.canonicalString();
  }
  /**
   * A reference to the containing `DocumentReference` if this is a
   * subcollection. If this isn't a subcollection, the reference is null.
   */
  get parent() {
    const e = this._path.popLast();
    return e.isEmpty() ? null : new Xe(
      this.firestore,
      /* converter= */
      null,
      new H(e)
    );
  }
  withConverter(e) {
    return new cn(this.firestore, e, this._path);
  }
}
function Gh(n, e, ...t) {
  if (n = de(n), Zp("collection", "path", e), n instanceof ho) {
    const r = ue.fromString(e, ...t);
    return Wh(r), new cn(
      n,
      /* converter= */
      null,
      r
    );
  }
  {
    if (!(n instanceof Xe || n instanceof cn))
      throw new q(L.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const r = n._path.child(ue.fromString(e, ...t));
    return Wh(r), new cn(
      n.firestore,
      /* converter= */
      null,
      r
    );
  }
}
function Qh(n, e, ...t) {
  if (n = de(n), // We allow omission of 'pathString' but explicitly prohibit passing in both
  // 'undefined' and 'null'.
  arguments.length === 1 && (e = Qf.newId()), Zp("doc", "path", e), n instanceof ho) {
    const r = ue.fromString(e, ...t);
    return Hh(r), new Xe(
      n,
      /* converter= */
      null,
      new H(r)
    );
  }
  {
    if (!(n instanceof Xe || n instanceof cn))
      throw new q(L.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const r = n._path.child(ue.fromString(e, ...t));
    return Hh(r), new Xe(n.firestore, n instanceof cn ? n.converter : null, new H(r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class wS {
  constructor() {
    this._u = Promise.resolve(), // A list of retryable operations. Retryable operations are run in order and
    // retried with backoff.
    this.au = [], // Is this AsyncQueue being shut down? Once it is set to true, it will not
    // be changed again.
    this.uu = !1, // Operations scheduled to be queued in the future. Operations are
    // automatically removed after they are run or canceled.
    this.cu = [], // visible for testing
    this.lu = null, // Flag set while there's an outstanding AsyncQueue operation, used for
    // assertion sanity-checks.
    this.hu = !1, // Enabled during shutdown on Safari to prevent future access to IndexedDB.
    this.Pu = !1, // List of TimerIds to fast-forward delays for.
    this.Iu = [], // Backoff timer used to schedule retries for retryable operations
    this.e_ = new Op(
      this,
      "async_queue_retry"
      /* TimerId.AsyncQueueRetry */
    ), // Visibility handler that triggers an immediate retry of all retryable
    // operations. Meant to speed up recovery when we regain file system access
    // after page comes into foreground.
    this.Tu = () => {
      const t = Zo();
      t && U("AsyncQueue", "Visibility state changed to " + t.visibilityState), this.e_.zo();
    };
    const e = Zo();
    e && typeof e.addEventListener == "function" && e.addEventListener("visibilitychange", this.Tu);
  }
  get isShuttingDown() {
    return this.uu;
  }
  /**
   * Adds a new operation to the queue without waiting for it to complete (i.e.
   * we ignore the Promise result).
   */
  enqueueAndForget(e) {
    this.enqueue(e);
  }
  enqueueAndForgetEvenWhileRestricted(e) {
    this.Eu(), // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.du(e);
  }
  enterRestrictedMode(e) {
    if (!this.uu) {
      this.uu = !0, this.Pu = e || !1;
      const t = Zo();
      t && typeof t.removeEventListener == "function" && t.removeEventListener("visibilitychange", this.Tu);
    }
  }
  enqueue(e) {
    if (this.Eu(), this.uu)
      return new Promise(() => {
      });
    const t = new on();
    return this.du(() => this.uu && this.Pu ? Promise.resolve() : (e().then(t.resolve, t.reject), t.promise)).then(() => t.promise);
  }
  enqueueRetryable(e) {
    this.enqueueAndForget(() => (this.au.push(e), this.Au()));
  }
  /**
   * Runs the next operation from the retryable queue. If the operation fails,
   * reschedules with backoff.
   */
  async Au() {
    if (this.au.length !== 0) {
      try {
        await this.au[0](), this.au.shift(), this.e_.reset();
      } catch (e) {
        if (!Si(e))
          throw e;
        U("AsyncQueue", "Operation failed with retryable error: " + e);
      }
      this.au.length > 0 && // If there are additional operations, we re-schedule `retryNextOp()`.
      // This is necessary to run retryable operations that failed during
      // their initial attempt since we don't know whether they are already
      // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
      // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
      // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
      // call scheduled here.
      // Since `backoffAndRun()` cancels an existing backoff and schedules a
      // new backoff on every call, there is only ever a single additional
      // operation in the queue.
      this.e_.Wo(() => this.Au());
    }
  }
  du(e) {
    const t = this._u.then(() => (this.hu = !0, e().catch((r) => {
      this.lu = r, this.hu = !1;
      const i = (
        /**
        * Chrome includes Error.message in Error.stack. Other browsers do not.
        * This returns expected output of message + stack when available.
        * @param error - Error or FirestoreError
        */
        function(a) {
          let c = a.message || "";
          return a.stack && (c = a.stack.includes(a.message) ? a.stack : a.message + `
` + a.stack), c;
        }(r)
      );
      throw Ft("INTERNAL UNHANDLED ERROR: ", i), r;
    }).then((r) => (this.hu = !1, r))));
    return this._u = t, t;
  }
  enqueueAfterDelay(e, t, r) {
    this.Eu(), // Fast-forward delays for timerIds that have been overridden.
    this.Iu.indexOf(e) > -1 && (t = 0);
    const i = Cc.createAndSchedule(this, e, t, r, (s) => this.Ru(s));
    return this.cu.push(i), i;
  }
  Eu() {
    this.lu && W();
  }
  verifyOperationInProgress() {
  }
  /**
   * Waits until all currently queued tasks are finished executing. Delayed
   * operations are not run.
   */
  async Vu() {
    let e;
    do
      e = this._u, await e;
    while (e !== this._u);
  }
  /**
   * For Tests: Determine if a delayed operation with a particular TimerId
   * exists.
   */
  mu(e) {
    for (const t of this.cu)
      if (t.timerId === e)
        return !0;
    return !1;
  }
  /**
   * For Tests: Runs some or all delayed operations early.
   *
   * @param lastTimerId - Delayed operations up to and including this TimerId
   * will be drained. Pass TimerId.All to run all delayed operations.
   * @returns a Promise that resolves once all operations have been run.
   */
  fu(e) {
    return this.Vu().then(() => {
      this.cu.sort((t, r) => t.targetTimeMs - r.targetTimeMs);
      for (const t of this.cu)
        if (t.skipDelay(), e !== "all" && t.timerId === e)
          break;
      return this.Vu();
    });
  }
  /**
   * For Tests: Skip all subsequent delays for a timer id.
   */
  gu(e) {
    this.Iu.push(e);
  }
  /** Called once a DelayedOperation is run or canceled. */
  Ru(e) {
    const t = this.cu.indexOf(e);
    this.cu.splice(t, 1);
  }
}
function Yh(n) {
  return function(t, r) {
    if (typeof t != "object" || t === null)
      return !1;
    const i = t;
    for (const s of r)
      if (s in i && typeof i[s] == "function")
        return !0;
    return !1;
  }(n, ["next", "error", "complete"]);
}
class _i extends ho {
  /** @hideconstructor */
  constructor(e, t, r, i) {
    super(e, t, r, i), /**
     * Whether it's a {@link Firestore} or Firestore Lite instance.
     */
    this.type = "firestore", this._queue = function() {
      return new wS();
    }(), this._persistenceKey = (i == null ? void 0 : i.name) || "[DEFAULT]";
  }
  _terminate() {
    return this._firestoreClient || // The client must be initialized to ensure that all subsequent API
    // usage throws an exception.
    em(this), this._firestoreClient.terminate();
  }
}
function ES(n, e) {
  const t = typeof n == "object" ? n : Xs(), r = typeof n == "string" ? n : e || "(default)", i = dn(t, "firestore").getImmediate({
    identifier: r
  });
  if (!i._initialized) {
    const s = Gd("firestore");
    s && vS(i, ...s);
  }
  return i;
}
function Dc(n) {
  return n._firestoreClient || em(n), n._firestoreClient.verifyNotTerminated(), n._firestoreClient;
}
function em(n) {
  var e, t, r;
  const i = n._freezeSettings(), s = function(c, u, h, f) {
    return new JI(c, u, h, f.host, f.ssl, f.experimentalForceLongPolling, f.experimentalAutoDetectLongPolling, Jp(f.experimentalLongPollingOptions), f.useFetchStreams);
  }(n._databaseId, ((e = n._app) === null || e === void 0 ? void 0 : e.options.appId) || "", n._persistenceKey, i);
  n._firestoreClient = new fS(n._authCredentials, n._appCheckCredentials, n._queue, s), !((t = i.localCache) === null || t === void 0) && t._offlineComponentProvider && (!((r = i.localCache) === null || r === void 0) && r._onlineComponentProvider) && (n._firestoreClient._uninitializedComponentsProvider = {
    _offlineKind: i.localCache.kind,
    _offline: i.localCache._offlineComponentProvider,
    _online: i.localCache._onlineComponentProvider
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class mr {
  /** @hideconstructor */
  constructor(e) {
    this._byteString = e;
  }
  /**
   * Creates a new `Bytes` object from the given Base64 string, converting it to
   * bytes.
   *
   * @param base64 - The Base64 string used to create the `Bytes` object.
   */
  static fromBase64String(e) {
    try {
      return new mr(Ne.fromBase64String(e));
    } catch (t) {
      throw new q(L.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + t);
    }
  }
  /**
   * Creates a new `Bytes` object from the given Uint8Array.
   *
   * @param array - The Uint8Array used to create the `Bytes` object.
   */
  static fromUint8Array(e) {
    return new mr(Ne.fromUint8Array(e));
  }
  /**
   * Returns the underlying bytes as a Base64-encoded string.
   *
   * @returns The Base64-encoded string created from the `Bytes` object.
   */
  toBase64() {
    return this._byteString.toBase64();
  }
  /**
   * Returns the underlying bytes in a new `Uint8Array`.
   *
   * @returns The Uint8Array created from the `Bytes` object.
   */
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  /**
   * Returns a string representation of the `Bytes` object.
   *
   * @returns A string representation of the `Bytes` object.
   */
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  /**
   * Returns true if this `Bytes` object is equal to the provided one.
   *
   * @param other - The `Bytes` object to compare against.
   * @returns true if this `Bytes` object is equal to the provided one.
   */
  isEqual(e) {
    return this._byteString.isEqual(e._byteString);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class xc {
  /**
   * Creates a `FieldPath` from the provided field names. If more than one field
   * name is provided, the path will point to a nested field in a document.
   *
   * @param fieldNames - A list of field names.
   */
  constructor(...e) {
    for (let t = 0; t < e.length; ++t)
      if (e[t].length === 0)
        throw new q(L.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    this._internalPath = new Ce(e);
  }
  /**
   * Returns true if this `FieldPath` is equal to the provided one.
   *
   * @param other - The `FieldPath` to compare against.
   * @returns true if this `FieldPath` is equal to the provided one.
   */
  isEqual(e) {
    return this._internalPath.isEqual(e._internalPath);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class tm {
  /**
   * @param _methodName - The public API endpoint that returns this class.
   * @hideconstructor
   */
  constructor(e) {
    this._methodName = e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Vc {
  /**
   * Creates a new immutable `GeoPoint` object with the provided latitude and
   * longitude values.
   * @param latitude - The latitude as number between -90 and 90.
   * @param longitude - The longitude as number between -180 and 180.
   */
  constructor(e, t) {
    if (!isFinite(e) || e < -90 || e > 90)
      throw new q(L.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + e);
    if (!isFinite(t) || t < -180 || t > 180)
      throw new q(L.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + t);
    this._lat = e, this._long = t;
  }
  /**
   * The latitude of this `GeoPoint` instance.
   */
  get latitude() {
    return this._lat;
  }
  /**
   * The longitude of this `GeoPoint` instance.
   */
  get longitude() {
    return this._long;
  }
  /**
   * Returns true if this `GeoPoint` is equal to the provided one.
   *
   * @param other - The `GeoPoint` to compare against.
   * @returns true if this `GeoPoint` is equal to the provided one.
   */
  isEqual(e) {
    return this._lat === e._lat && this._long === e._long;
  }
  /** Returns a JSON-serializable representation of this GeoPoint. */
  toJSON() {
    return {
      latitude: this._lat,
      longitude: this._long
    };
  }
  /**
   * Actually private to JS consumers of our API, so this function is prefixed
   * with an underscore.
   */
  _compareTo(e) {
    return ee(this._lat, e._lat) || ee(this._long, e._long);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
const TS = /^__.*__$/;
class IS {
  constructor(e, t, r) {
    this.data = e, this.fieldMask = t, this.fieldTransforms = r;
  }
  toMutation(e, t) {
    return this.fieldMask !== null ? new qn(e, this.data, this.fieldMask, t, this.fieldTransforms) : new Ri(e, this.data, t, this.fieldTransforms);
  }
}
function nm(n) {
  switch (n) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw W();
  }
}
class Mc {
  /**
   * Initializes a ParseContext with the given source and path.
   *
   * @param settings - The settings for the parser.
   * @param databaseId - The database ID of the Firestore instance.
   * @param serializer - The serializer to use to generate the Value proto.
   * @param ignoreUndefinedProperties - Whether to ignore undefined properties
   * rather than throw.
   * @param fieldTransforms - A mutable list of field transforms encountered
   * while parsing the data.
   * @param fieldMask - A mutable list of field paths encountered while parsing
   * the data.
   *
   * TODO(b/34871131): We don't support array paths right now, so path can be
   * null to indicate the context represents any location within an array (in
   * which case certain features will not work and errors will be somewhat
   * compromised).
   */
  constructor(e, t, r, i, s, a) {
    this.settings = e, this.databaseId = t, this.serializer = r, this.ignoreUndefinedProperties = i, // Minor hack: If fieldTransforms is undefined, we assume this is an
    // external call and we need to validate the entire path.
    s === void 0 && this.pu(), this.fieldTransforms = s || [], this.fieldMask = a || [];
  }
  get path() {
    return this.settings.path;
  }
  get yu() {
    return this.settings.yu;
  }
  /** Returns a new context with the specified settings overwritten. */
  wu(e) {
    return new Mc(Object.assign(Object.assign({}, this.settings), e), this.databaseId, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
  }
  Su(e) {
    var t;
    const r = (t = this.path) === null || t === void 0 ? void 0 : t.child(e), i = this.wu({
      path: r,
      bu: !1
    });
    return i.Du(e), i;
  }
  Cu(e) {
    var t;
    const r = (t = this.path) === null || t === void 0 ? void 0 : t.child(e), i = this.wu({
      path: r,
      bu: !1
    });
    return i.pu(), i;
  }
  vu(e) {
    return this.wu({
      path: void 0,
      bu: !0
    });
  }
  Fu(e) {
    return Ms(e, this.settings.methodName, this.settings.Mu || !1, this.path, this.settings.xu);
  }
  /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
  contains(e) {
    return this.fieldMask.find((t) => e.isPrefixOf(t)) !== void 0 || this.fieldTransforms.find((t) => e.isPrefixOf(t.field)) !== void 0;
  }
  pu() {
    if (this.path)
      for (let e = 0; e < this.path.length; e++)
        this.Du(this.path.get(e));
  }
  Du(e) {
    if (e.length === 0)
      throw this.Fu("Document fields must not be empty");
    if (nm(this.yu) && TS.test(e))
      throw this.Fu('Document fields cannot begin and end with "__"');
  }
}
class bS {
  constructor(e, t, r) {
    this.databaseId = e, this.ignoreUndefinedProperties = t, this.serializer = r || co(e);
  }
  /** Creates a new top-level parse context. */
  Ou(e, t, r, i = !1) {
    return new Mc({
      yu: e,
      methodName: t,
      xu: r,
      path: Ce.emptyPath(),
      bu: !1,
      Mu: i
    }, this.databaseId, this.serializer, this.ignoreUndefinedProperties);
  }
}
function AS(n) {
  const e = n._freezeSettings(), t = co(n._databaseId);
  return new bS(n._databaseId, !!e.ignoreUndefinedProperties, t);
}
function SS(n, e, t, r, i, s = {}) {
  const a = n.Ou(s.merge || s.mergeFields ? 2 : 0, e, t, i);
  om("Data must be an object, but it was:", a, r);
  const c = im(r, a);
  let u, h;
  if (s.merge)
    u = new dt(a.fieldMask), h = a.fieldTransforms;
  else if (s.mergeFields) {
    const f = [];
    for (const m of s.mergeFields) {
      const _ = RS(e, m, t);
      if (!a.contains(_))
        throw new q(L.INVALID_ARGUMENT, `Field '${_}' is specified in your field mask but missing from your input data.`);
      PS(f, _) || f.push(_);
    }
    u = new dt(f), h = a.fieldTransforms.filter((m) => u.covers(m.field));
  } else
    u = null, h = a.fieldTransforms;
  return new IS(new nt(c), u, h);
}
function rm(n, e) {
  if (sm(
    // Unwrap the API type from the Compat SDK. This will return the API type
    // from firestore-exp.
    n = de(n)
  ))
    return om("Unsupported field value:", e, n), im(n, e);
  if (n instanceof tm)
    return function(r, i) {
      if (!nm(i.yu))
        throw i.Fu(`${r._methodName}() can only be used with update() and set()`);
      if (!i.path)
        throw i.Fu(`${r._methodName}() is not currently supported inside arrays`);
      const s = r._toFieldTransform(i);
      s && i.fieldTransforms.push(s);
    }(n, e), null;
  if (n === void 0 && e.ignoreUndefinedProperties)
    return null;
  if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.fieldMask.push(e.path), n instanceof Array
  ) {
    if (e.settings.bu && e.yu !== 4)
      throw e.Fu("Nested arrays are not supported");
    return function(r, i) {
      const s = [];
      let a = 0;
      for (const c of r) {
        let u = rm(c, i.vu(a));
        u == null && // Just include nulls in the array for fields being replaced with a
        // sentinel.
        (u = {
          nullValue: "NULL_VALUE"
        }), s.push(u), a++;
      }
      return {
        arrayValue: {
          values: s
        }
      };
    }(n, e);
  }
  return function(r, i) {
    if ((r = de(r)) === null)
      return {
        nullValue: "NULL_VALUE"
      };
    if (typeof r == "number")
      return wb(i.serializer, r);
    if (typeof r == "boolean")
      return {
        booleanValue: r
      };
    if (typeof r == "string")
      return {
        stringValue: r
      };
    if (r instanceof Date) {
      const s = Ee.fromDate(r);
      return {
        timestampValue: xs(i.serializer, s)
      };
    }
    if (r instanceof Ee) {
      const s = new Ee(r.seconds, 1e3 * Math.floor(r.nanoseconds / 1e3));
      return {
        timestampValue: xs(i.serializer, s)
      };
    }
    if (r instanceof Vc)
      return {
        geoPointValue: {
          latitude: r.latitude,
          longitude: r.longitude
        }
      };
    if (r instanceof mr)
      return {
        bytesValue: Tp(i.serializer, r._byteString)
      };
    if (r instanceof Xe) {
      const s = i.databaseId, a = r.firestore._databaseId;
      if (!a.isEqual(s))
        throw i.Fu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);
      return {
        referenceValue: wc(r.firestore._databaseId || i.databaseId, r._key.path)
      };
    }
    throw i.Fu(`Unsupported field value: ${Nc(r)}`);
  }(n, e);
}
function im(n, e) {
  const t = {};
  return Yf(n) ? (
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.fieldMask.push(e.path)
  ) : wr(n, (r, i) => {
    const s = rm(i, e.Su(r));
    s != null && (t[r] = s);
  }), {
    mapValue: {
      fields: t
    }
  };
}
function sm(n) {
  return !(typeof n != "object" || n === null || n instanceof Array || n instanceof Date || n instanceof Ee || n instanceof Vc || n instanceof mr || n instanceof Xe || n instanceof tm);
}
function om(n, e, t) {
  if (!sm(t) || !function(i) {
    return typeof i == "object" && i !== null && (Object.getPrototypeOf(i) === Object.prototype || Object.getPrototypeOf(i) === null);
  }(t)) {
    const r = Nc(t);
    throw r === "an object" ? e.Fu(n + " a custom object") : e.Fu(n + " " + r);
  }
}
function RS(n, e, t) {
  if (
    // If required, replace the FieldPath Compat class with the firestore-exp
    // FieldPath.
    (e = de(e)) instanceof xc
  )
    return e._internalPath;
  if (typeof e == "string")
    return am(n, e);
  throw Ms(
    "Field path arguments must be of type string or ",
    n,
    /* hasConverter= */
    !1,
    /* path= */
    void 0,
    t
  );
}
const CS = new RegExp("[~\\*/\\[\\]]");
function am(n, e, t) {
  if (e.search(CS) >= 0)
    throw Ms(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      n,
      /* hasConverter= */
      !1,
      /* path= */
      void 0,
      t
    );
  try {
    return new xc(...e.split("."))._internalPath;
  } catch {
    throw Ms(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      n,
      /* hasConverter= */
      !1,
      /* path= */
      void 0,
      t
    );
  }
}
function Ms(n, e, t, r, i) {
  const s = r && !r.isEmpty(), a = i !== void 0;
  let c = `Function ${e}() called with invalid data`;
  t && (c += " (via `toFirestore()`)"), c += ". ";
  let u = "";
  return (s || a) && (u += " (found", s && (u += ` in field ${r}`), a && (u += ` in document ${i}`), u += ")"), new q(L.INVALID_ARGUMENT, c + n + u);
}
function PS(n, e) {
  return n.some((t) => t.isEqual(e));
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class cm {
  // Note: This class is stripped down version of the DocumentSnapshot in
  // the legacy SDK. The changes are:
  // - No support for SnapshotMetadata.
  // - No support for SnapshotOptions.
  /** @hideconstructor protected */
  constructor(e, t, r, i, s) {
    this._firestore = e, this._userDataWriter = t, this._key = r, this._document = i, this._converter = s;
  }
  /** Property of the `DocumentSnapshot` that provides the document's ID. */
  get id() {
    return this._key.path.lastSegment();
  }
  /**
   * The `DocumentReference` for the document included in the `DocumentSnapshot`.
   */
  get ref() {
    return new Xe(this._firestore, this._converter, this._key);
  }
  /**
   * Signals whether or not the document at the snapshot's location exists.
   *
   * @returns true if the document exists.
   */
  exists() {
    return this._document !== null;
  }
  /**
   * Retrieves all fields in the document as an `Object`. Returns `undefined` if
   * the document doesn't exist.
   *
   * @returns An `Object` containing all fields in the document or `undefined`
   * if the document doesn't exist.
   */
  data() {
    if (this._document) {
      if (this._converter) {
        const e = new kS(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          /* converter= */
          null
        );
        return this._converter.fromFirestore(e);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  /**
   * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
   * document or field doesn't exist.
   *
   * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
   * field.
   * @returns The data at the specified field location or undefined if no such
   * field exists in the document.
   */
  // We are using `any` here to avoid an explicit cast by our users.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(e) {
    if (this._document) {
      const t = this._document.data.field(um("DocumentSnapshot.get", e));
      if (t !== null)
        return this._userDataWriter.convertValue(t);
    }
  }
}
class kS extends cm {
  /**
   * Retrieves all fields in the document as an `Object`.
   *
   * @override
   * @returns An `Object` containing all fields in the document.
   */
  data() {
    return super.data();
  }
}
function um(n, e) {
  return typeof e == "string" ? am(n, e) : e instanceof xc ? e._internalPath : e._delegate._internalPath;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function lm(n) {
  if (n.limitType === "L" && n.explicitOrderBy.length === 0)
    throw new q(L.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}
class OS {
  convertValue(e, t = "none") {
    switch (Ln(e)) {
      case 0:
        return null;
      case 1:
        return e.booleanValue;
      case 2:
        return ve(e.integerValue || e.doubleValue);
      case 3:
        return this.convertTimestamp(e.timestampValue);
      case 4:
        return this.convertServerTimestamp(e, t);
      case 5:
        return e.stringValue;
      case 6:
        return this.convertBytes(Mn(e.bytesValue));
      case 7:
        return this.convertReference(e.referenceValue);
      case 8:
        return this.convertGeoPoint(e.geoPointValue);
      case 9:
        return this.convertArray(e.arrayValue, t);
      case 10:
        return this.convertObject(e.mapValue, t);
      default:
        throw W();
    }
  }
  convertObject(e, t) {
    return this.convertObjectMap(e.fields, t);
  }
  /**
   * @internal
   */
  convertObjectMap(e, t = "none") {
    const r = {};
    return wr(e, (i, s) => {
      r[i] = this.convertValue(s, t);
    }), r;
  }
  convertGeoPoint(e) {
    return new Vc(ve(e.latitude), ve(e.longitude));
  }
  convertArray(e, t) {
    return (e.values || []).map((r) => this.convertValue(r, t));
  }
  convertServerTimestamp(e, t) {
    switch (t) {
      case "previous":
        const r = fc(e);
        return r == null ? null : this.convertValue(r, t);
      case "estimate":
        return this.convertTimestamp(fi(e));
      default:
        return null;
    }
  }
  convertTimestamp(e) {
    const t = ln(e);
    return new Ee(t.seconds, t.nanos);
  }
  convertDocumentKey(e, t) {
    const r = ue.fromString(e);
    ae(Cp(r));
    const i = new pi(r.get(1), r.get(3)), s = new H(r.popFirst(5));
    return i.isEqual(t) || // TODO(b/64130202): Somehow support foreign references.
    Ft(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`), s;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function NS(n, e, t) {
  let r;
  return r = n ? t && (t.merge || t.mergeFields) ? n.toFirestore(e, t) : n.toFirestore(e) : e, r;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Xr {
  /** @hideconstructor */
  constructor(e, t) {
    this.hasPendingWrites = e, this.fromCache = t;
  }
  /**
   * Returns true if this `SnapshotMetadata` is equal to the provided one.
   *
   * @param other - The `SnapshotMetadata` to compare against.
   * @returns true if this `SnapshotMetadata` is equal to the provided one.
   */
  isEqual(e) {
    return this.hasPendingWrites === e.hasPendingWrites && this.fromCache === e.fromCache;
  }
}
class hm extends cm {
  /** @hideconstructor protected */
  constructor(e, t, r, i, s, a) {
    super(e, t, r, i, a), this._firestore = e, this._firestoreImpl = e, this.metadata = s;
  }
  /**
   * Returns whether or not the data exists. True if the document exists.
   */
  exists() {
    return super.exists();
  }
  /**
   * Retrieves all fields in the document as an `Object`. Returns `undefined` if
   * the document doesn't exist.
   *
   * By default, `serverTimestamp()` values that have not yet been
   * set to their final value will be returned as `null`. You can override
   * this by passing an options object.
   *
   * @param options - An options object to configure how data is retrieved from
   * the snapshot (for example the desired behavior for server timestamps that
   * have not yet been set to their final value).
   * @returns An `Object` containing all fields in the document or `undefined` if
   * the document doesn't exist.
   */
  data(e = {}) {
    if (this._document) {
      if (this._converter) {
        const t = new ys(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          /* converter= */
          null
        );
        return this._converter.fromFirestore(t, e);
      }
      return this._userDataWriter.convertValue(this._document.data.value, e.serverTimestamps);
    }
  }
  /**
   * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
   * document or field doesn't exist.
   *
   * By default, a `serverTimestamp()` that has not yet been set to
   * its final value will be returned as `null`. You can override this by
   * passing an options object.
   *
   * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
   * field.
   * @param options - An options object to configure how the field is retrieved
   * from the snapshot (for example the desired behavior for server timestamps
   * that have not yet been set to their final value).
   * @returns The data at the specified field location or undefined if no such
   * field exists in the document.
   */
  // We are using `any` here to avoid an explicit cast by our users.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(e, t = {}) {
    if (this._document) {
      const r = this._document.data.field(um("DocumentSnapshot.get", e));
      if (r !== null)
        return this._userDataWriter.convertValue(r, t.serverTimestamps);
    }
  }
}
class ys extends hm {
  /**
   * Retrieves all fields in the document as an `Object`.
   *
   * By default, `serverTimestamp()` values that have not yet been
   * set to their final value will be returned as `null`. You can override
   * this by passing an options object.
   *
   * @override
   * @param options - An options object to configure how data is retrieved from
   * the snapshot (for example the desired behavior for server timestamps that
   * have not yet been set to their final value).
   * @returns An `Object` containing all fields in the document.
   */
  data(e = {}) {
    return super.data(e);
  }
}
class dm {
  /** @hideconstructor */
  constructor(e, t, r, i) {
    this._firestore = e, this._userDataWriter = t, this._snapshot = i, this.metadata = new Xr(i.hasPendingWrites, i.fromCache), this.query = r;
  }
  /** An array of all the documents in the `QuerySnapshot`. */
  get docs() {
    const e = [];
    return this.forEach((t) => e.push(t)), e;
  }
  /** The number of documents in the `QuerySnapshot`. */
  get size() {
    return this._snapshot.docs.size;
  }
  /** True if there are no documents in the `QuerySnapshot`. */
  get empty() {
    return this.size === 0;
  }
  /**
   * Enumerates all of the documents in the `QuerySnapshot`.
   *
   * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
   * each document in the snapshot.
   * @param thisArg - The `this` binding for the callback.
   */
  forEach(e, t) {
    this._snapshot.docs.forEach((r) => {
      e.call(t, new ys(this._firestore, this._userDataWriter, r.key, r, new Xr(this._snapshot.mutatedKeys.has(r.key), this._snapshot.fromCache), this.query.converter));
    });
  }
  /**
   * Returns an array of the documents changes since the last snapshot. If this
   * is the first snapshot, all documents will be in the list as 'added'
   * changes.
   *
   * @param options - `SnapshotListenOptions` that control whether metadata-only
   * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
   * snapshot events.
   */
  docChanges(e = {}) {
    const t = !!e.includeMetadataChanges;
    if (t && this._snapshot.excludesMetadataChanges)
      throw new q(L.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
    return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === t || (this._cachedChanges = /** Calculates the array of `DocumentChange`s for a given `ViewSnapshot`. */
    function(i, s) {
      if (i._snapshot.oldDocs.isEmpty()) {
        let a = 0;
        return i._snapshot.docChanges.map((c) => {
          const u = new ys(i._firestore, i._userDataWriter, c.doc.key, c.doc, new Xr(i._snapshot.mutatedKeys.has(c.doc.key), i._snapshot.fromCache), i.query.converter);
          return c.doc, {
            type: "added",
            doc: u,
            oldIndex: -1,
            newIndex: a++
          };
        });
      }
      {
        let a = i._snapshot.oldDocs;
        return i._snapshot.docChanges.filter((c) => s || c.type !== 3).map((c) => {
          const u = new ys(i._firestore, i._userDataWriter, c.doc.key, c.doc, new Xr(i._snapshot.mutatedKeys.has(c.doc.key), i._snapshot.fromCache), i.query.converter);
          let h = -1, f = -1;
          return c.type !== 0 && (h = a.indexOf(c.doc.key), a = a.delete(c.doc.key)), c.type !== 1 && (a = a.add(c.doc), f = a.indexOf(c.doc.key)), {
            type: DS(c.type),
            doc: u,
            oldIndex: h,
            newIndex: f
          };
        });
      }
    }(this, t), this._cachedChangesIncludeMetadataChanges = t), this._cachedChanges;
  }
}
function DS(n) {
  switch (n) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return W();
  }
}
class Lc extends OS {
  constructor(e) {
    super(), this.firestore = e;
  }
  convertBytes(e) {
    return new mr(e);
  }
  convertReference(e) {
    const t = this.convertDocumentKey(e, this.firestore._databaseId);
    return new Xe(
      this.firestore,
      /* converter= */
      null,
      t
    );
  }
}
function jP(n) {
  n = an(n, Oi);
  const e = an(n.firestore, _i), t = Dc(e), r = new Lc(e);
  return lm(n._query), yS(t, n._query).then((i) => new dm(e, r, n, i));
}
function xS(n, e, t) {
  n = an(n, Xe);
  const r = an(n.firestore, _i), i = NS(n.converter, e, t);
  return MS(r, [SS(AS(r), "setDoc", n._key, i, n.converter !== null, t).toMutation(n._key, xt.none())]);
}
function VS(n, ...e) {
  var t, r, i;
  n = de(n);
  let s = {
    includeMetadataChanges: !1,
    source: "default"
  }, a = 0;
  typeof e[a] != "object" || Yh(e[a]) || (s = e[a], a++);
  const c = {
    includeMetadataChanges: s.includeMetadataChanges,
    source: s.source
  };
  if (Yh(e[a])) {
    const m = e[a];
    e[a] = (t = m.next) === null || t === void 0 ? void 0 : t.bind(m), e[a + 1] = (r = m.error) === null || r === void 0 ? void 0 : r.bind(m), e[a + 2] = (i = m.complete) === null || i === void 0 ? void 0 : i.bind(m);
  }
  let u, h, f;
  if (n instanceof Xe)
    h = an(n.firestore, _i), f = yc(n._key.path), u = {
      next: (m) => {
        e[a] && e[a](LS(h, n, m));
      },
      error: e[a + 1],
      complete: e[a + 2]
    };
  else {
    const m = an(n, Oi);
    h = an(m.firestore, _i), f = m._query;
    const _ = new Lc(h);
    u = {
      next: (w) => {
        e[a] && e[a](new dm(h, _, m, w));
      },
      error: e[a + 1],
      complete: e[a + 2]
    }, lm(n._query);
  }
  return function(_, w, A, R) {
    const p = new Yp(R), I = new jp(w, p, A);
    return _.asyncQueue.enqueueAndForget(async () => Up(await $a(_), I)), () => {
      p.Ga(), _.asyncQueue.enqueueAndForget(async () => $p(await $a(_), I));
    };
  }(Dc(h), f, c, u);
}
function MS(n, e) {
  return function(r, i) {
    const s = new on();
    return r.asyncQueue.enqueueAndForget(async () => iS(await gS(r), i, s)), s.promise;
  }(Dc(n), e);
}
function LS(n, e, t) {
  const r = t.docs.get(e._key), i = new Lc(n);
  return new hm(n, i, e._key, r, new Xr(t.hasPendingWrites, t.fromCache), e.converter);
}
(function(e, t = !0) {
  (function(i) {
    vr = i;
  })(zn), ft(new it("firestore", (r, { instanceIdentifier: i, options: s }) => {
    const a = r.getProvider("app").getImmediate(), c = new _i(new LI(r.getProvider("auth-internal")), new jI(r.getProvider("app-check-internal")), function(h, f) {
      if (!Object.prototype.hasOwnProperty.apply(h.options, ["projectId"]))
        throw new q(L.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
      return new pi(h.options.projectId, f);
    }(a, i), a);
    return s = Object.assign({
      useFetchStreams: t
    }, s), c._setSettings(s), c;
  }, "PUBLIC").setMultipleInstances(!0)), He(fh, "4.6.5", e), // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
  He(fh, "4.6.5", "esm2017");
})();
/**
 * @license
 * Copyright 2017 Google LLC
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
const fm = "firebasestorage.googleapis.com", pm = "storageBucket", FS = 2 * 60 * 1e3, US = 10 * 60 * 1e3;
/**
 * @license
 * Copyright 2017 Google LLC
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
class pe extends at {
  /**
   * @param code - A `StorageErrorCode` string to be prefixed with 'storage/' and
   *  added to the end of the message.
   * @param message  - Error message.
   * @param status_ - Corresponding HTTP Status Code
   */
  constructor(e, t, r = 0) {
    super(ta(e), `Firebase Storage: ${t} (${ta(e)})`), this.status_ = r, this.customData = { serverResponse: null }, this._baseMessage = this.message, Object.setPrototypeOf(this, pe.prototype);
  }
  get status() {
    return this.status_;
  }
  set status(e) {
    this.status_ = e;
  }
  /**
   * Compares a `StorageErrorCode` against this error's code, filtering out the prefix.
   */
  _codeEquals(e) {
    return ta(e) === this.code;
  }
  /**
   * Optional response message that was added by the server.
   */
  get serverResponse() {
    return this.customData.serverResponse;
  }
  set serverResponse(e) {
    this.customData.serverResponse = e, this.customData.serverResponse ? this.message = `${this._baseMessage}
${this.customData.serverResponse}` : this.message = this._baseMessage;
  }
}
var fe;
(function(n) {
  n.UNKNOWN = "unknown", n.OBJECT_NOT_FOUND = "object-not-found", n.BUCKET_NOT_FOUND = "bucket-not-found", n.PROJECT_NOT_FOUND = "project-not-found", n.QUOTA_EXCEEDED = "quota-exceeded", n.UNAUTHENTICATED = "unauthenticated", n.UNAUTHORIZED = "unauthorized", n.UNAUTHORIZED_APP = "unauthorized-app", n.RETRY_LIMIT_EXCEEDED = "retry-limit-exceeded", n.INVALID_CHECKSUM = "invalid-checksum", n.CANCELED = "canceled", n.INVALID_EVENT_NAME = "invalid-event-name", n.INVALID_URL = "invalid-url", n.INVALID_DEFAULT_BUCKET = "invalid-default-bucket", n.NO_DEFAULT_BUCKET = "no-default-bucket", n.CANNOT_SLICE_BLOB = "cannot-slice-blob", n.SERVER_FILE_WRONG_SIZE = "server-file-wrong-size", n.NO_DOWNLOAD_URL = "no-download-url", n.INVALID_ARGUMENT = "invalid-argument", n.INVALID_ARGUMENT_COUNT = "invalid-argument-count", n.APP_DELETED = "app-deleted", n.INVALID_ROOT_OPERATION = "invalid-root-operation", n.INVALID_FORMAT = "invalid-format", n.INTERNAL_ERROR = "internal-error", n.UNSUPPORTED_ENVIRONMENT = "unsupported-environment";
})(fe || (fe = {}));
function ta(n) {
  return "storage/" + n;
}
function Fc() {
  const n = "An unknown error occurred, please check the error payload for server response.";
  return new pe(fe.UNKNOWN, n);
}
function $S(n) {
  return new pe(fe.OBJECT_NOT_FOUND, "Object '" + n + "' does not exist.");
}
function jS(n) {
  return new pe(fe.QUOTA_EXCEEDED, "Quota for bucket '" + n + "' exceeded, please view quota on https://firebase.google.com/pricing/.");
}
function BS() {
  const n = "User is not authenticated, please authenticate using Firebase Authentication and try again.";
  return new pe(fe.UNAUTHENTICATED, n);
}
function zS() {
  return new pe(fe.UNAUTHORIZED_APP, "This app does not have permission to access Firebase Storage on this project.");
}
function qS(n) {
  return new pe(fe.UNAUTHORIZED, "User does not have permission to access '" + n + "'.");
}
function HS() {
  return new pe(fe.RETRY_LIMIT_EXCEEDED, "Max retry time for operation exceeded, please try again.");
}
function WS() {
  return new pe(fe.CANCELED, "User canceled the upload/download.");
}
function KS(n) {
  return new pe(fe.INVALID_URL, "Invalid URL '" + n + "'.");
}
function GS(n) {
  return new pe(fe.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + n + "'.");
}
function QS() {
  return new pe(fe.NO_DEFAULT_BUCKET, "No default bucket found. Did you set the '" + pm + "' property when initializing the app?");
}
function YS() {
  return new pe(fe.CANNOT_SLICE_BLOB, "Cannot slice blob for upload. Please retry the upload.");
}
function XS() {
  return new pe(fe.NO_DOWNLOAD_URL, "The given file does not have any download URLs.");
}
function JS(n) {
  return new pe(fe.UNSUPPORTED_ENVIRONMENT, `${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);
}
function ja(n) {
  return new pe(fe.INVALID_ARGUMENT, n);
}
function mm() {
  return new pe(fe.APP_DELETED, "The Firebase app was deleted.");
}
function ZS(n) {
  return new pe(fe.INVALID_ROOT_OPERATION, "The operation '" + n + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");
}
function ii(n, e) {
  return new pe(fe.INVALID_FORMAT, "String does not match format '" + n + "': " + e);
}
function qr(n) {
  throw new pe(fe.INTERNAL_ERROR, "Internal error: " + n);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Ye {
  constructor(e, t) {
    this.bucket = e, this.path_ = t;
  }
  get path() {
    return this.path_;
  }
  get isRoot() {
    return this.path.length === 0;
  }
  fullServerUrl() {
    const e = encodeURIComponent;
    return "/b/" + e(this.bucket) + "/o/" + e(this.path);
  }
  bucketOnlyServerUrl() {
    return "/b/" + encodeURIComponent(this.bucket) + "/o";
  }
  static makeFromBucketSpec(e, t) {
    let r;
    try {
      r = Ye.makeFromUrl(e, t);
    } catch {
      return new Ye(e, "");
    }
    if (r.path === "")
      return r;
    throw GS(e);
  }
  static makeFromUrl(e, t) {
    let r = null;
    const i = "([A-Za-z0-9.\\-_]+)";
    function s(N) {
      N.path.charAt(N.path.length - 1) === "/" && (N.path_ = N.path_.slice(0, -1));
    }
    const a = "(/(.*))?$", c = new RegExp("^gs://" + i + a, "i"), u = { bucket: 1, path: 3 };
    function h(N) {
      N.path_ = decodeURIComponent(N.path);
    }
    const f = "v[A-Za-z0-9_]+", m = t.replace(/[.]/g, "\\."), _ = "(/([^?#]*).*)?$", w = new RegExp(`^https?://${m}/${f}/b/${i}/o${_}`, "i"), A = { bucket: 1, path: 3 }, R = t === fm ? "(?:storage.googleapis.com|storage.cloud.google.com)" : t, p = "([^?#]*)", I = new RegExp(`^https?://${R}/${i}/${p}`, "i"), O = [
      { regex: c, indices: u, postModify: s },
      {
        regex: w,
        indices: A,
        postModify: h
      },
      {
        regex: I,
        indices: { bucket: 1, path: 2 },
        postModify: h
      }
    ];
    for (let N = 0; N < O.length; N++) {
      const C = O[N], M = C.regex.exec(e);
      if (M) {
        const T = M[C.indices.bucket];
        let y = M[C.indices.path];
        y || (y = ""), r = new Ye(T, y), C.postModify(r);
        break;
      }
    }
    if (r == null)
      throw KS(e);
    return r;
  }
}
class eR {
  constructor(e) {
    this.promise_ = Promise.reject(e);
  }
  /** @inheritDoc */
  getPromise() {
    return this.promise_;
  }
  /** @inheritDoc */
  cancel(e = !1) {
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function tR(n, e, t) {
  let r = 1, i = null, s = null, a = !1, c = 0;
  function u() {
    return c === 2;
  }
  let h = !1;
  function f(...p) {
    h || (h = !0, e.apply(null, p));
  }
  function m(p) {
    i = setTimeout(() => {
      i = null, n(w, u());
    }, p);
  }
  function _() {
    s && clearTimeout(s);
  }
  function w(p, ...I) {
    if (h) {
      _();
      return;
    }
    if (p) {
      _(), f.call(null, p, ...I);
      return;
    }
    if (u() || a) {
      _(), f.call(null, p, ...I);
      return;
    }
    r < 64 && (r *= 2);
    let O;
    c === 1 ? (c = 2, O = 0) : O = (r + Math.random()) * 1e3, m(O);
  }
  let A = !1;
  function R(p) {
    A || (A = !0, _(), !h && (i !== null ? (p || (c = 2), clearTimeout(i), m(0)) : p || (c = 1)));
  }
  return m(0), s = setTimeout(() => {
    a = !0, R(!0);
  }, t), R;
}
function nR(n) {
  n(!1);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function rR(n) {
  return n !== void 0;
}
function iR(n) {
  return typeof n == "object" && !Array.isArray(n);
}
function Uc(n) {
  return typeof n == "string" || n instanceof String;
}
function Xh(n) {
  return $c() && n instanceof Blob;
}
function $c() {
  return typeof Blob < "u";
}
function Jh(n, e, t, r) {
  if (r < e)
    throw ja(`Invalid value for '${n}'. Expected ${e} or greater.`);
  if (r > t)
    throw ja(`Invalid value for '${n}'. Expected ${t} or less.`);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function jc(n, e, t) {
  let r = e;
  return t == null && (r = `https://${e}`), `${t}://${r}/v0${n}`;
}
function gm(n) {
  const e = encodeURIComponent;
  let t = "?";
  for (const r in n)
    if (n.hasOwnProperty(r)) {
      const i = e(r) + "=" + e(n[r]);
      t = t + i + "&";
    }
  return t = t.slice(0, -1), t;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var kn;
(function(n) {
  n[n.NO_ERROR = 0] = "NO_ERROR", n[n.NETWORK_ERROR = 1] = "NETWORK_ERROR", n[n.ABORT = 2] = "ABORT";
})(kn || (kn = {}));
/**
 * @license
 * Copyright 2022 Google LLC
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
function sR(n, e) {
  const t = n >= 500 && n < 600, i = [
    // Request Timeout: web server didn't receive full request in time.
    408,
    // Too Many Requests: you're getting rate-limited, basically.
    429
  ].indexOf(n) !== -1, s = e.indexOf(n) !== -1;
  return t || i || s;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class oR {
  constructor(e, t, r, i, s, a, c, u, h, f, m, _ = !0) {
    this.url_ = e, this.method_ = t, this.headers_ = r, this.body_ = i, this.successCodes_ = s, this.additionalRetryCodes_ = a, this.callback_ = c, this.errorCallback_ = u, this.timeout_ = h, this.progressCallback_ = f, this.connectionFactory_ = m, this.retry = _, this.pendingConnection_ = null, this.backoffId_ = null, this.canceled_ = !1, this.appDelete_ = !1, this.promise_ = new Promise((w, A) => {
      this.resolve_ = w, this.reject_ = A, this.start_();
    });
  }
  /**
   * Actually starts the retry loop.
   */
  start_() {
    const e = (r, i) => {
      if (i) {
        r(!1, new ss(!1, null, !0));
        return;
      }
      const s = this.connectionFactory_();
      this.pendingConnection_ = s;
      const a = (c) => {
        const u = c.loaded, h = c.lengthComputable ? c.total : -1;
        this.progressCallback_ !== null && this.progressCallback_(u, h);
      };
      this.progressCallback_ !== null && s.addUploadProgressListener(a), s.send(this.url_, this.method_, this.body_, this.headers_).then(() => {
        this.progressCallback_ !== null && s.removeUploadProgressListener(a), this.pendingConnection_ = null;
        const c = s.getErrorCode() === kn.NO_ERROR, u = s.getStatus();
        if (!c || sR(u, this.additionalRetryCodes_) && this.retry) {
          const f = s.getErrorCode() === kn.ABORT;
          r(!1, new ss(!1, null, f));
          return;
        }
        const h = this.successCodes_.indexOf(u) !== -1;
        r(!0, new ss(h, s));
      });
    }, t = (r, i) => {
      const s = this.resolve_, a = this.reject_, c = i.connection;
      if (i.wasSuccessCode)
        try {
          const u = this.callback_(c, c.getResponse());
          rR(u) ? s(u) : s();
        } catch (u) {
          a(u);
        }
      else if (c !== null) {
        const u = Fc();
        u.serverResponse = c.getErrorText(), this.errorCallback_ ? a(this.errorCallback_(c, u)) : a(u);
      } else if (i.canceled) {
        const u = this.appDelete_ ? mm() : WS();
        a(u);
      } else {
        const u = HS();
        a(u);
      }
    };
    this.canceled_ ? t(!1, new ss(!1, null, !0)) : this.backoffId_ = tR(e, t, this.timeout_);
  }
  /** @inheritDoc */
  getPromise() {
    return this.promise_;
  }
  /** @inheritDoc */
  cancel(e) {
    this.canceled_ = !0, this.appDelete_ = e || !1, this.backoffId_ !== null && nR(this.backoffId_), this.pendingConnection_ !== null && this.pendingConnection_.abort();
  }
}
class ss {
  constructor(e, t, r) {
    this.wasSuccessCode = e, this.connection = t, this.canceled = !!r;
  }
}
function aR(n, e) {
  e !== null && e.length > 0 && (n.Authorization = "Firebase " + e);
}
function cR(n, e) {
  n["X-Firebase-Storage-Version"] = "webjs/" + (e ?? "AppManager");
}
function uR(n, e) {
  e && (n["X-Firebase-GMPID"] = e);
}
function lR(n, e) {
  e !== null && (n["X-Firebase-AppCheck"] = e);
}
function hR(n, e, t, r, i, s, a = !0) {
  const c = gm(n.urlParams), u = n.url + c, h = Object.assign({}, n.headers);
  return uR(h, e), aR(h, t), cR(h, s), lR(h, r), new oR(u, n.method, h, n.body, n.successCodes, n.additionalRetryCodes, n.handler, n.errorHandler, n.timeout, n.progressCallback, i, a);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function dR() {
  return typeof BlobBuilder < "u" ? BlobBuilder : typeof WebKitBlobBuilder < "u" ? WebKitBlobBuilder : void 0;
}
function fR(...n) {
  const e = dR();
  if (e !== void 0) {
    const t = new e();
    for (let r = 0; r < n.length; r++)
      t.append(n[r]);
    return t.getBlob();
  } else {
    if ($c())
      return new Blob(n);
    throw new pe(fe.UNSUPPORTED_ENVIRONMENT, "This browser doesn't seem to support creating Blobs");
  }
}
function pR(n, e, t) {
  return n.webkitSlice ? n.webkitSlice(e, t) : n.mozSlice ? n.mozSlice(e, t) : n.slice ? n.slice(e, t) : null;
}
/**
 * @license
 * Copyright 2021 Google LLC
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
function mR(n) {
  if (typeof atob > "u")
    throw JS("base-64");
  return atob(n);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
const yt = {
  /**
   * Indicates the string should be interpreted "raw", that is, as normal text.
   * The string will be interpreted as UTF-16, then uploaded as a UTF-8 byte
   * sequence.
   * Example: The string 'Hello! \\ud83d\\ude0a' becomes the byte sequence
   * 48 65 6c 6c 6f 21 20 f0 9f 98 8a
   */
  RAW: "raw",
  /**
   * Indicates the string should be interpreted as base64-encoded data.
   * Padding characters (trailing '='s) are optional.
   * Example: The string 'rWmO++E6t7/rlw==' becomes the byte sequence
   * ad 69 8e fb e1 3a b7 bf eb 97
   */
  BASE64: "base64",
  /**
   * Indicates the string should be interpreted as base64url-encoded data.
   * Padding characters (trailing '='s) are optional.
   * Example: The string 'rWmO--E6t7_rlw==' becomes the byte sequence
   * ad 69 8e fb e1 3a b7 bf eb 97
   */
  BASE64URL: "base64url",
  /**
   * Indicates the string is a data URL, such as one obtained from
   * canvas.toDataURL().
   * Example: the string 'data:application/octet-stream;base64,aaaa'
   * becomes the byte sequence
   * 69 a6 9a
   * (the content-type "application/octet-stream" is also applied, but can
   * be overridden in the metadata object).
   */
  DATA_URL: "data_url"
};
class na {
  constructor(e, t) {
    this.data = e, this.contentType = t || null;
  }
}
function gR(n, e) {
  switch (n) {
    case yt.RAW:
      return new na(ym(e));
    case yt.BASE64:
    case yt.BASE64URL:
      return new na(_m(n, e));
    case yt.DATA_URL:
      return new na(_R(e), vR(e));
  }
  throw Fc();
}
function ym(n) {
  const e = [];
  for (let t = 0; t < n.length; t++) {
    let r = n.charCodeAt(t);
    if (r <= 127)
      e.push(r);
    else if (r <= 2047)
      e.push(192 | r >> 6, 128 | r & 63);
    else if ((r & 64512) === 55296)
      if (!(t < n.length - 1 && (n.charCodeAt(t + 1) & 64512) === 56320))
        e.push(239, 191, 189);
      else {
        const s = r, a = n.charCodeAt(++t);
        r = 65536 | (s & 1023) << 10 | a & 1023, e.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | r & 63);
      }
    else
      (r & 64512) === 56320 ? e.push(239, 191, 189) : e.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | r & 63);
  }
  return new Uint8Array(e);
}
function yR(n) {
  let e;
  try {
    e = decodeURIComponent(n);
  } catch {
    throw ii(yt.DATA_URL, "Malformed data URL.");
  }
  return ym(e);
}
function _m(n, e) {
  switch (n) {
    case yt.BASE64: {
      const i = e.indexOf("-") !== -1, s = e.indexOf("_") !== -1;
      if (i || s)
        throw ii(n, "Invalid character '" + (i ? "-" : "_") + "' found: is it base64url encoded?");
      break;
    }
    case yt.BASE64URL: {
      const i = e.indexOf("+") !== -1, s = e.indexOf("/") !== -1;
      if (i || s)
        throw ii(n, "Invalid character '" + (i ? "+" : "/") + "' found: is it base64 encoded?");
      e = e.replace(/-/g, "+").replace(/_/g, "/");
      break;
    }
  }
  let t;
  try {
    t = mR(e);
  } catch (i) {
    throw i.message.includes("polyfill") ? i : ii(n, "Invalid character found");
  }
  const r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
class vm {
  constructor(e) {
    this.base64 = !1, this.contentType = null;
    const t = e.match(/^data:([^,]+)?,/);
    if (t === null)
      throw ii(yt.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
    const r = t[1] || null;
    r != null && (this.base64 = wR(r, ";base64"), this.contentType = this.base64 ? r.substring(0, r.length - 7) : r), this.rest = e.substring(e.indexOf(",") + 1);
  }
}
function _R(n) {
  const e = new vm(n);
  return e.base64 ? _m(yt.BASE64, e.rest) : yR(e.rest);
}
function vR(n) {
  return new vm(n).contentType;
}
function wR(n, e) {
  return n.length >= e.length ? n.substring(n.length - e.length) === e : !1;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class tn {
  constructor(e, t) {
    let r = 0, i = "";
    Xh(e) ? (this.data_ = e, r = e.size, i = e.type) : e instanceof ArrayBuffer ? (t ? this.data_ = new Uint8Array(e) : (this.data_ = new Uint8Array(e.byteLength), this.data_.set(new Uint8Array(e))), r = this.data_.length) : e instanceof Uint8Array && (t ? this.data_ = e : (this.data_ = new Uint8Array(e.length), this.data_.set(e)), r = e.length), this.size_ = r, this.type_ = i;
  }
  size() {
    return this.size_;
  }
  type() {
    return this.type_;
  }
  slice(e, t) {
    if (Xh(this.data_)) {
      const r = this.data_, i = pR(r, e, t);
      return i === null ? null : new tn(i);
    } else {
      const r = new Uint8Array(this.data_.buffer, e, t - e);
      return new tn(r, !0);
    }
  }
  static getBlob(...e) {
    if ($c()) {
      const t = e.map((r) => r instanceof tn ? r.data_ : r);
      return new tn(fR.apply(null, t));
    } else {
      const t = e.map((a) => Uc(a) ? gR(yt.RAW, a).data : a.data_);
      let r = 0;
      t.forEach((a) => {
        r += a.byteLength;
      });
      const i = new Uint8Array(r);
      let s = 0;
      return t.forEach((a) => {
        for (let c = 0; c < a.length; c++)
          i[s++] = a[c];
      }), new tn(i, !0);
    }
  }
  uploadData() {
    return this.data_;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function wm(n) {
  let e;
  try {
    e = JSON.parse(n);
  } catch {
    return null;
  }
  return iR(e) ? e : null;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function ER(n) {
  if (n.length === 0)
    return null;
  const e = n.lastIndexOf("/");
  return e === -1 ? "" : n.slice(0, e);
}
function TR(n, e) {
  const t = e.split("/").filter((r) => r.length > 0).join("/");
  return n.length === 0 ? t : n + "/" + t;
}
function Em(n) {
  const e = n.lastIndexOf("/", n.length - 2);
  return e === -1 ? n : n.slice(e + 1);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function IR(n, e) {
  return e;
}
class je {
  constructor(e, t, r, i) {
    this.server = e, this.local = t || e, this.writable = !!r, this.xform = i || IR;
  }
}
let os = null;
function bR(n) {
  return !Uc(n) || n.length < 2 ? n : Em(n);
}
function Tm() {
  if (os)
    return os;
  const n = [];
  n.push(new je("bucket")), n.push(new je("generation")), n.push(new je("metageneration")), n.push(new je("name", "fullPath", !0));
  function e(s, a) {
    return bR(a);
  }
  const t = new je("name");
  t.xform = e, n.push(t);
  function r(s, a) {
    return a !== void 0 ? Number(a) : a;
  }
  const i = new je("size");
  return i.xform = r, n.push(i), n.push(new je("timeCreated")), n.push(new je("updated")), n.push(new je("md5Hash", null, !0)), n.push(new je("cacheControl", null, !0)), n.push(new je("contentDisposition", null, !0)), n.push(new je("contentEncoding", null, !0)), n.push(new je("contentLanguage", null, !0)), n.push(new je("contentType", null, !0)), n.push(new je("metadata", "customMetadata", !0)), os = n, os;
}
function AR(n, e) {
  function t() {
    const r = n.bucket, i = n.fullPath, s = new Ye(r, i);
    return e._makeStorageReference(s);
  }
  Object.defineProperty(n, "ref", { get: t });
}
function SR(n, e, t) {
  const r = {};
  r.type = "file";
  const i = t.length;
  for (let s = 0; s < i; s++) {
    const a = t[s];
    r[a.local] = a.xform(r, e[a.server]);
  }
  return AR(r, n), r;
}
function Im(n, e, t) {
  const r = wm(e);
  return r === null ? null : SR(n, r, t);
}
function RR(n, e, t, r) {
  const i = wm(e);
  if (i === null || !Uc(i.downloadTokens))
    return null;
  const s = i.downloadTokens;
  if (s.length === 0)
    return null;
  const a = encodeURIComponent;
  return s.split(",").map((h) => {
    const f = n.bucket, m = n.fullPath, _ = "/b/" + a(f) + "/o/" + a(m), w = jc(_, t, r), A = gm({
      alt: "media",
      token: h
    });
    return w + A;
  })[0];
}
function CR(n, e) {
  const t = {}, r = e.length;
  for (let i = 0; i < r; i++) {
    const s = e[i];
    s.writable && (t[s.server] = n[s.local]);
  }
  return JSON.stringify(t);
}
class bm {
  constructor(e, t, r, i) {
    this.url = e, this.method = t, this.handler = r, this.timeout = i, this.urlParams = {}, this.headers = {}, this.body = null, this.errorHandler = null, this.progressCallback = null, this.successCodes = [200], this.additionalRetryCodes = [];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function Am(n) {
  if (!n)
    throw Fc();
}
function PR(n, e) {
  function t(r, i) {
    const s = Im(n, i, e);
    return Am(s !== null), s;
  }
  return t;
}
function kR(n, e) {
  function t(r, i) {
    const s = Im(n, i, e);
    return Am(s !== null), RR(s, i, n.host, n._protocol);
  }
  return t;
}
function Sm(n) {
  function e(t, r) {
    let i;
    return t.getStatus() === 401 ? /* This exact message string is the only consistent part of the */ /* server's error response that identifies it as an App Check error. */ t.getErrorText().includes("Firebase App Check token is invalid") ? i = zS() : i = BS() : t.getStatus() === 402 ? i = jS(n.bucket) : t.getStatus() === 403 ? i = qS(n.path) : i = r, i.status = t.getStatus(), i.serverResponse = r.serverResponse, i;
  }
  return e;
}
function OR(n) {
  const e = Sm(n);
  function t(r, i) {
    let s = e(r, i);
    return r.getStatus() === 404 && (s = $S(n.path)), s.serverResponse = i.serverResponse, s;
  }
  return t;
}
function NR(n, e, t) {
  const r = e.fullServerUrl(), i = jc(r, n.host, n._protocol), s = "GET", a = n.maxOperationRetryTime, c = new bm(i, s, kR(n, t), a);
  return c.errorHandler = OR(e), c;
}
function DR(n, e) {
  return n && n.contentType || e && e.type() || "application/octet-stream";
}
function xR(n, e, t) {
  const r = Object.assign({}, t);
  return r.fullPath = n.path, r.size = e.size(), r.contentType || (r.contentType = DR(null, e)), r;
}
function VR(n, e, t, r, i) {
  const s = e.bucketOnlyServerUrl(), a = {
    "X-Goog-Upload-Protocol": "multipart"
  };
  function c() {
    let O = "";
    for (let N = 0; N < 2; N++)
      O = O + Math.random().toString().slice(2);
    return O;
  }
  const u = c();
  a["Content-Type"] = "multipart/related; boundary=" + u;
  const h = xR(e, r, i), f = CR(h, t), m = "--" + u + `\r
Content-Type: application/json; charset=utf-8\r
\r
` + f + `\r
--` + u + `\r
Content-Type: ` + h.contentType + `\r
\r
`, _ = `\r
--` + u + "--", w = tn.getBlob(m, r, _);
  if (w === null)
    throw YS();
  const A = { name: h.fullPath }, R = jc(s, n.host, n._protocol), p = "POST", I = n.maxUploadRetryTime, D = new bm(R, p, PR(n, t), I);
  return D.urlParams = A, D.headers = a, D.body = w.uploadData(), D.errorHandler = Sm(e), D;
}
class MR {
  constructor() {
    this.sent_ = !1, this.xhr_ = new XMLHttpRequest(), this.initXhr(), this.errorCode_ = kn.NO_ERROR, this.sendPromise_ = new Promise((e) => {
      this.xhr_.addEventListener("abort", () => {
        this.errorCode_ = kn.ABORT, e();
      }), this.xhr_.addEventListener("error", () => {
        this.errorCode_ = kn.NETWORK_ERROR, e();
      }), this.xhr_.addEventListener("load", () => {
        e();
      });
    });
  }
  send(e, t, r, i) {
    if (this.sent_)
      throw qr("cannot .send() more than once");
    if (this.sent_ = !0, this.xhr_.open(t, e, !0), i !== void 0)
      for (const s in i)
        i.hasOwnProperty(s) && this.xhr_.setRequestHeader(s, i[s].toString());
    return r !== void 0 ? this.xhr_.send(r) : this.xhr_.send(), this.sendPromise_;
  }
  getErrorCode() {
    if (!this.sent_)
      throw qr("cannot .getErrorCode() before sending");
    return this.errorCode_;
  }
  getStatus() {
    if (!this.sent_)
      throw qr("cannot .getStatus() before sending");
    try {
      return this.xhr_.status;
    } catch {
      return -1;
    }
  }
  getResponse() {
    if (!this.sent_)
      throw qr("cannot .getResponse() before sending");
    return this.xhr_.response;
  }
  getErrorText() {
    if (!this.sent_)
      throw qr("cannot .getErrorText() before sending");
    return this.xhr_.statusText;
  }
  /** Aborts the request. */
  abort() {
    this.xhr_.abort();
  }
  getResponseHeader(e) {
    return this.xhr_.getResponseHeader(e);
  }
  addUploadProgressListener(e) {
    this.xhr_.upload != null && this.xhr_.upload.addEventListener("progress", e);
  }
  removeUploadProgressListener(e) {
    this.xhr_.upload != null && this.xhr_.upload.removeEventListener("progress", e);
  }
}
class LR extends MR {
  initXhr() {
    this.xhr_.responseType = "text";
  }
}
function Rm() {
  return new LR();
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class Fn {
  constructor(e, t) {
    this._service = e, t instanceof Ye ? this._location = t : this._location = Ye.makeFromUrl(t, e.host);
  }
  /**
   * Returns the URL for the bucket and path this object references,
   *     in the form gs://<bucket>/<object-path>
   * @override
   */
  toString() {
    return "gs://" + this._location.bucket + "/" + this._location.path;
  }
  _newRef(e, t) {
    return new Fn(e, t);
  }
  /**
   * A reference to the root of this object's bucket.
   */
  get root() {
    const e = new Ye(this._location.bucket, "");
    return this._newRef(this._service, e);
  }
  /**
   * The name of the bucket containing this reference's object.
   */
  get bucket() {
    return this._location.bucket;
  }
  /**
   * The full path of this object.
   */
  get fullPath() {
    return this._location.path;
  }
  /**
   * The short name of this object, which is the last component of the full path.
   * For example, if fullPath is 'full/path/image.png', name is 'image.png'.
   */
  get name() {
    return Em(this._location.path);
  }
  /**
   * The `StorageService` instance this `StorageReference` is associated with.
   */
  get storage() {
    return this._service;
  }
  /**
   * A `StorageReference` pointing to the parent location of this `StorageReference`, or null if
   * this reference is the root.
   */
  get parent() {
    const e = ER(this._location.path);
    if (e === null)
      return null;
    const t = new Ye(this._location.bucket, e);
    return new Fn(this._service, t);
  }
  /**
   * Utility function to throw an error in methods that do not accept a root reference.
   */
  _throwIfRoot(e) {
    if (this._location.path === "")
      throw ZS(e);
  }
}
function FR(n, e, t) {
  n._throwIfRoot("uploadBytes");
  const r = VR(n.storage, n._location, Tm(), new tn(e, !0), t);
  return n.storage.makeRequestWithTokens(r, Rm).then((i) => ({
    metadata: i,
    ref: n
  }));
}
function UR(n) {
  n._throwIfRoot("getDownloadURL");
  const e = NR(n.storage, n._location, Tm());
  return n.storage.makeRequestWithTokens(e, Rm).then((t) => {
    if (t === null)
      throw XS();
    return t;
  });
}
function $R(n, e) {
  const t = TR(n._location.path, e), r = new Ye(n._location.bucket, t);
  return new Fn(n.storage, r);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function jR(n) {
  return /^[A-Za-z]+:\/\//.test(n);
}
function BR(n, e) {
  return new Fn(n, e);
}
function Cm(n, e) {
  if (n instanceof Bc) {
    const t = n;
    if (t._bucket == null)
      throw QS();
    const r = new Fn(t, t._bucket);
    return e != null ? Cm(r, e) : r;
  } else
    return e !== void 0 ? $R(n, e) : n;
}
function zR(n, e) {
  if (e && jR(e)) {
    if (n instanceof Bc)
      return BR(n, e);
    throw ja("To use ref(service, url), the first argument must be a Storage instance.");
  } else
    return Cm(n, e);
}
function Zh(n, e) {
  const t = e == null ? void 0 : e[pm];
  return t == null ? null : Ye.makeFromBucketSpec(t, n);
}
function qR(n, e, t, r = {}) {
  n.host = `${e}:${t}`, n._protocol = "http";
  const { mockUserToken: i } = r;
  i && (n._overrideAuthToken = typeof i == "string" ? i : Xd(i, n.app.options.projectId));
}
class Bc {
  constructor(e, t, r, i, s) {
    this.app = e, this._authProvider = t, this._appCheckProvider = r, this._url = i, this._firebaseVersion = s, this._bucket = null, this._host = fm, this._protocol = "https", this._appId = null, this._deleted = !1, this._maxOperationRetryTime = FS, this._maxUploadRetryTime = US, this._requests = /* @__PURE__ */ new Set(), i != null ? this._bucket = Ye.makeFromBucketSpec(i, this._host) : this._bucket = Zh(this._host, this.app.options);
  }
  /**
   * The host string for this service, in the form of `host` or
   * `host:port`.
   */
  get host() {
    return this._host;
  }
  set host(e) {
    this._host = e, this._url != null ? this._bucket = Ye.makeFromBucketSpec(this._url, e) : this._bucket = Zh(e, this.app.options);
  }
  /**
   * The maximum time to retry uploads in milliseconds.
   */
  get maxUploadRetryTime() {
    return this._maxUploadRetryTime;
  }
  set maxUploadRetryTime(e) {
    Jh(
      "time",
      /* minValue=*/
      0,
      /* maxValue= */
      Number.POSITIVE_INFINITY,
      e
    ), this._maxUploadRetryTime = e;
  }
  /**
   * The maximum time to retry operations other than uploads or downloads in
   * milliseconds.
   */
  get maxOperationRetryTime() {
    return this._maxOperationRetryTime;
  }
  set maxOperationRetryTime(e) {
    Jh(
      "time",
      /* minValue=*/
      0,
      /* maxValue= */
      Number.POSITIVE_INFINITY,
      e
    ), this._maxOperationRetryTime = e;
  }
  async _getAuthToken() {
    if (this._overrideAuthToken)
      return this._overrideAuthToken;
    const e = this._authProvider.getImmediate({ optional: !0 });
    if (e) {
      const t = await e.getToken();
      if (t !== null)
        return t.accessToken;
    }
    return null;
  }
  async _getAppCheckToken() {
    const e = this._appCheckProvider.getImmediate({ optional: !0 });
    return e ? (await e.getToken()).token : null;
  }
  /**
   * Stop running requests and prevent more from being created.
   */
  _delete() {
    return this._deleted || (this._deleted = !0, this._requests.forEach((e) => e.cancel()), this._requests.clear()), Promise.resolve();
  }
  /**
   * Returns a new firebaseStorage.Reference object referencing this StorageService
   * at the given Location.
   */
  _makeStorageReference(e) {
    return new Fn(this, e);
  }
  /**
   * @param requestInfo - HTTP RequestInfo object
   * @param authToken - Firebase auth token
   */
  _makeRequest(e, t, r, i, s = !0) {
    if (this._deleted)
      return new eR(mm());
    {
      const a = hR(e, this._appId, r, i, t, this._firebaseVersion, s);
      return this._requests.add(a), a.getPromise().then(() => this._requests.delete(a), () => this._requests.delete(a)), a;
    }
  }
  async makeRequestWithTokens(e, t) {
    const [r, i] = await Promise.all([
      this._getAuthToken(),
      this._getAppCheckToken()
    ]);
    return this._makeRequest(e, t, r, i).getPromise();
  }
}
const ed = "@firebase/storage", td = "0.12.6";
/**
 * @license
 * Copyright 2020 Google LLC
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
const Pm = "storage";
function BP(n, e, t) {
  return n = de(n), FR(n, e, t);
}
function zP(n) {
  return n = de(n), UR(n);
}
function qP(n, e) {
  return n = de(n), zR(n, e);
}
function HR(n = Xs(), e) {
  n = de(n);
  const r = dn(n, Pm).getImmediate({
    identifier: e
  }), i = Gd("storage");
  return i && WR(r, ...i), r;
}
function WR(n, e, t, r = {}) {
  qR(n, e, t, r);
}
function KR(n, { instanceIdentifier: e }) {
  const t = n.getProvider("app").getImmediate(), r = n.getProvider("auth-internal"), i = n.getProvider("app-check-internal");
  return new Bc(t, r, i, e, zn);
}
function GR() {
  ft(new it(
    Pm,
    KR,
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setMultipleInstances(!0)), He(ed, td, ""), He(ed, td, "esm2017");
}
GR();
const km = "@firebase/installations", zc = "0.6.8";
/**
 * @license
 * Copyright 2019 Google LLC
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
const Om = 1e4, Nm = `w:${zc}`, Dm = "FIS_v2", QR = "https://firebaseinstallations.googleapis.com/v1", YR = 60 * 60 * 1e3, XR = "installations", JR = "Installations";
/**
 * @license
 * Copyright 2019 Google LLC
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
const ZR = {
  "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
  "not-registered": "Firebase Installation is not registered.",
  "installation-not-found": "Firebase Installation not found.",
  "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
  "app-offline": "Could not process request. Application offline.",
  "delete-pending-registration": "Can't delete installation while there is a pending registration request."
}, Un = new Bn(XR, JR, ZR);
function xm(n) {
  return n instanceof at && n.code.includes(
    "request-failed"
    /* ErrorCode.REQUEST_FAILED */
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
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
function Vm({ projectId: n }) {
  return `${QR}/projects/${n}/installations`;
}
function Mm(n) {
  return {
    token: n.token,
    requestStatus: 2,
    expiresIn: t0(n.expiresIn),
    creationTime: Date.now()
  };
}
async function Lm(n, e) {
  const r = (await e.json()).error;
  return Un.create("request-failed", {
    requestName: n,
    serverCode: r.code,
    serverMessage: r.message,
    serverStatus: r.status
  });
}
function Fm({ apiKey: n }) {
  return new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-goog-api-key": n
  });
}
function e0(n, { refreshToken: e }) {
  const t = Fm(n);
  return t.append("Authorization", n0(e)), t;
}
async function Um(n) {
  const e = await n();
  return e.status >= 500 && e.status < 600 ? n() : e;
}
function t0(n) {
  return Number(n.replace("s", "000"));
}
function n0(n) {
  return `${Dm} ${n}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
async function r0({ appConfig: n, heartbeatServiceProvider: e }, { fid: t }) {
  const r = Vm(n), i = Fm(n), s = e.getImmediate({
    optional: !0
  });
  if (s) {
    const h = await s.getHeartbeatsHeader();
    h && i.append("x-firebase-client", h);
  }
  const a = {
    fid: t,
    authVersion: Dm,
    appId: n.appId,
    sdkVersion: Nm
  }, c = {
    method: "POST",
    headers: i,
    body: JSON.stringify(a)
  }, u = await Um(() => fetch(r, c));
  if (u.ok) {
    const h = await u.json();
    return {
      fid: h.fid || t,
      registrationStatus: 2,
      refreshToken: h.refreshToken,
      authToken: Mm(h.authToken)
    };
  } else
    throw await Lm("Create Installation", u);
}
/**
 * @license
 * Copyright 2019 Google LLC
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
function $m(n) {
  return new Promise((e) => {
    setTimeout(e, n);
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
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
function i0(n) {
  return btoa(String.fromCharCode(...n)).replace(/\+/g, "-").replace(/\//g, "_");
}
/**
 * @license
 * Copyright 2019 Google LLC
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
const s0 = /^[cdef][\w-]{21}$/, Ba = "";
function o0() {
  try {
    const n = new Uint8Array(17);
    (self.crypto || self.msCrypto).getRandomValues(n), n[0] = 112 + n[0] % 16;
    const t = a0(n);
    return s0.test(t) ? t : Ba;
  } catch {
    return Ba;
  }
}
function a0(n) {
  return i0(n).substr(0, 22);
}
/**
 * @license
 * Copyright 2019 Google LLC
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
function fo(n) {
  return `${n.appName}!${n.appId}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
const jm = /* @__PURE__ */ new Map();
function Bm(n, e) {
  const t = fo(n);
  zm(t, e), c0(t, e);
}
function zm(n, e) {
  const t = jm.get(n);
  if (t)
    for (const r of t)
      r(e);
}
function c0(n, e) {
  const t = u0();
  t && t.postMessage({ key: n, fid: e }), l0();
}
let An = null;
function u0() {
  return !An && "BroadcastChannel" in self && (An = new BroadcastChannel("[Firebase] FID Change"), An.onmessage = (n) => {
    zm(n.data.key, n.data.fid);
  }), An;
}
function l0() {
  jm.size === 0 && An && (An.close(), An = null);
}
/**
 * @license
 * Copyright 2019 Google LLC
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
const h0 = "firebase-installations-database", d0 = 1, $n = "firebase-installations-store";
let ra = null;
function qc() {
  return ra || (ra = rf(h0, d0, {
    upgrade: (n, e) => {
      switch (e) {
        case 0:
          n.createObjectStore($n);
      }
    }
  })), ra;
}
async function Ls(n, e) {
  const t = fo(n), i = (await qc()).transaction($n, "readwrite"), s = i.objectStore($n), a = await s.get(t);
  return await s.put(e, t), await i.done, (!a || a.fid !== e.fid) && Bm(n, e.fid), e;
}
async function qm(n) {
  const e = fo(n), r = (await qc()).transaction($n, "readwrite");
  await r.objectStore($n).delete(e), await r.done;
}
async function po(n, e) {
  const t = fo(n), i = (await qc()).transaction($n, "readwrite"), s = i.objectStore($n), a = await s.get(t), c = e(a);
  return c === void 0 ? await s.delete(t) : await s.put(c, t), await i.done, c && (!a || a.fid !== c.fid) && Bm(n, c.fid), c;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
async function Hc(n) {
  let e;
  const t = await po(n.appConfig, (r) => {
    const i = f0(r), s = p0(n, i);
    return e = s.registrationPromise, s.installationEntry;
  });
  return t.fid === Ba ? { installationEntry: await e } : {
    installationEntry: t,
    registrationPromise: e
  };
}
function f0(n) {
  const e = n || {
    fid: o0(),
    registrationStatus: 0
    /* RequestStatus.NOT_STARTED */
  };
  return Hm(e);
}
function p0(n, e) {
  if (e.registrationStatus === 0) {
    if (!navigator.onLine) {
      const i = Promise.reject(Un.create(
        "app-offline"
        /* ErrorCode.APP_OFFLINE */
      ));
      return {
        installationEntry: e,
        registrationPromise: i
      };
    }
    const t = {
      fid: e.fid,
      registrationStatus: 1,
      registrationTime: Date.now()
    }, r = m0(n, t);
    return { installationEntry: t, registrationPromise: r };
  } else
    return e.registrationStatus === 1 ? {
      installationEntry: e,
      registrationPromise: g0(n)
    } : { installationEntry: e };
}
async function m0(n, e) {
  try {
    const t = await r0(n, e);
    return Ls(n.appConfig, t);
  } catch (t) {
    throw xm(t) && t.customData.serverCode === 409 ? await qm(n.appConfig) : await Ls(n.appConfig, {
      fid: e.fid,
      registrationStatus: 0
      /* RequestStatus.NOT_STARTED */
    }), t;
  }
}
async function g0(n) {
  let e = await nd(n.appConfig);
  for (; e.registrationStatus === 1; )
    await $m(100), e = await nd(n.appConfig);
  if (e.registrationStatus === 0) {
    const { installationEntry: t, registrationPromise: r } = await Hc(n);
    return r || t;
  }
  return e;
}
function nd(n) {
  return po(n, (e) => {
    if (!e)
      throw Un.create(
        "installation-not-found"
        /* ErrorCode.INSTALLATION_NOT_FOUND */
      );
    return Hm(e);
  });
}
function Hm(n) {
  return y0(n) ? {
    fid: n.fid,
    registrationStatus: 0
    /* RequestStatus.NOT_STARTED */
  } : n;
}
function y0(n) {
  return n.registrationStatus === 1 && n.registrationTime + Om < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
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
async function _0({ appConfig: n, heartbeatServiceProvider: e }, t) {
  const r = v0(n, t), i = e0(n, t), s = e.getImmediate({
    optional: !0
  });
  if (s) {
    const h = await s.getHeartbeatsHeader();
    h && i.append("x-firebase-client", h);
  }
  const a = {
    installation: {
      sdkVersion: Nm,
      appId: n.appId
    }
  }, c = {
    method: "POST",
    headers: i,
    body: JSON.stringify(a)
  }, u = await Um(() => fetch(r, c));
  if (u.ok) {
    const h = await u.json();
    return Mm(h);
  } else
    throw await Lm("Generate Auth Token", u);
}
function v0(n, { fid: e }) {
  return `${Vm(n)}/${e}/authTokens:generate`;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
async function Wc(n, e = !1) {
  let t;
  const r = await po(n.appConfig, (s) => {
    if (!Wm(s))
      throw Un.create(
        "not-registered"
        /* ErrorCode.NOT_REGISTERED */
      );
    const a = s.authToken;
    if (!e && T0(a))
      return s;
    if (a.requestStatus === 1)
      return t = w0(n, e), s;
    {
      if (!navigator.onLine)
        throw Un.create(
          "app-offline"
          /* ErrorCode.APP_OFFLINE */
        );
      const c = b0(s);
      return t = E0(n, c), c;
    }
  });
  return t ? await t : r.authToken;
}
async function w0(n, e) {
  let t = await rd(n.appConfig);
  for (; t.authToken.requestStatus === 1; )
    await $m(100), t = await rd(n.appConfig);
  const r = t.authToken;
  return r.requestStatus === 0 ? Wc(n, e) : r;
}
function rd(n) {
  return po(n, (e) => {
    if (!Wm(e))
      throw Un.create(
        "not-registered"
        /* ErrorCode.NOT_REGISTERED */
      );
    const t = e.authToken;
    return A0(t) ? Object.assign(Object.assign({}, e), { authToken: {
      requestStatus: 0
      /* RequestStatus.NOT_STARTED */
    } }) : e;
  });
}
async function E0(n, e) {
  try {
    const t = await _0(n, e), r = Object.assign(Object.assign({}, e), { authToken: t });
    return await Ls(n.appConfig, r), t;
  } catch (t) {
    if (xm(t) && (t.customData.serverCode === 401 || t.customData.serverCode === 404))
      await qm(n.appConfig);
    else {
      const r = Object.assign(Object.assign({}, e), { authToken: {
        requestStatus: 0
        /* RequestStatus.NOT_STARTED */
      } });
      await Ls(n.appConfig, r);
    }
    throw t;
  }
}
function Wm(n) {
  return n !== void 0 && n.registrationStatus === 2;
}
function T0(n) {
  return n.requestStatus === 2 && !I0(n);
}
function I0(n) {
  const e = Date.now();
  return e < n.creationTime || n.creationTime + n.expiresIn < e + YR;
}
function b0(n) {
  const e = {
    requestStatus: 1,
    requestTime: Date.now()
  };
  return Object.assign(Object.assign({}, n), { authToken: e });
}
function A0(n) {
  return n.requestStatus === 1 && n.requestTime + Om < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
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
async function S0(n) {
  const e = n, { installationEntry: t, registrationPromise: r } = await Hc(e);
  return r ? r.catch(console.error) : Wc(e).catch(console.error), t.fid;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
async function R0(n, e = !1) {
  const t = n;
  return await C0(t), (await Wc(t, e)).token;
}
async function C0(n) {
  const { registrationPromise: e } = await Hc(n);
  e && await e;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
function P0(n) {
  if (!n || !n.options)
    throw ia("App Configuration");
  if (!n.name)
    throw ia("App Name");
  const e = [
    "projectId",
    "apiKey",
    "appId"
  ];
  for (const t of e)
    if (!n.options[t])
      throw ia(t);
  return {
    appName: n.name,
    projectId: n.options.projectId,
    apiKey: n.options.apiKey,
    appId: n.options.appId
  };
}
function ia(n) {
  return Un.create("missing-app-config-values", {
    valueName: n
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const Km = "installations", k0 = "installations-internal", O0 = (n) => {
  const e = n.getProvider("app").getImmediate(), t = P0(e), r = dn(e, "heartbeat");
  return {
    app: e,
    appConfig: t,
    heartbeatServiceProvider: r,
    _delete: () => Promise.resolve()
  };
}, N0 = (n) => {
  const e = n.getProvider("app").getImmediate(), t = dn(e, Km).getImmediate();
  return {
    getId: () => S0(t),
    getToken: (i) => R0(t, i)
  };
};
function D0() {
  ft(new it(
    Km,
    O0,
    "PUBLIC"
    /* ComponentType.PUBLIC */
  )), ft(new it(
    k0,
    N0,
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ));
}
D0();
He(km, zc);
He(km, zc, "esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
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
const Fs = "analytics", x0 = "firebase_id", V0 = "origin", M0 = 60 * 1e3, L0 = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig", Kc = "https://www.googletagmanager.com/gtag/js";
/**
 * @license
 * Copyright 2019 Google LLC
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
const Ke = new Ys("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
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
const F0 = {
  "already-exists": "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
  "already-initialized": "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.",
  "already-initialized-settings": "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
  "interop-component-reg-failed": "Firebase Analytics Interop Component failed to instantiate: {$reason}",
  "invalid-analytics-context": "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
  "indexeddb-unavailable": "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
  "fetch-throttle": "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
  "config-fetch-failed": "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
  "no-api-key": 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
  "no-app-id": 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',
  "no-client-id": 'The "client_id" field is empty.',
  "invalid-gtag-resource": "Trusted Types detected an invalid gtag resource: {$gtagURL}."
}, Je = new Bn("analytics", "Analytics", F0);
/**
 * @license
 * Copyright 2019 Google LLC
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
function U0(n) {
  if (!n.startsWith(Kc)) {
    const e = Je.create("invalid-gtag-resource", {
      gtagURL: n
    });
    return Ke.warn(e.message), "";
  }
  return n;
}
function Gm(n) {
  return Promise.all(n.map((e) => e.catch((t) => t)));
}
function $0(n, e) {
  let t;
  return window.trustedTypes && (t = window.trustedTypes.createPolicy(n, e)), t;
}
function j0(n, e) {
  const t = $0("firebase-js-sdk-policy", {
    createScriptURL: U0
  }), r = document.createElement("script"), i = `${Kc}?l=${n}&id=${e}`;
  r.src = t ? t == null ? void 0 : t.createScriptURL(i) : i, r.async = !0, document.head.appendChild(r);
}
function B0(n) {
  let e = [];
  return Array.isArray(window[n]) ? e = window[n] : window[n] = e, e;
}
async function z0(n, e, t, r, i, s) {
  const a = r[i];
  try {
    if (a)
      await e[a];
    else {
      const u = (await Gm(t)).find((h) => h.measurementId === i);
      u && await e[u.appId];
    }
  } catch (c) {
    Ke.error(c);
  }
  n("config", i, s);
}
async function q0(n, e, t, r, i) {
  try {
    let s = [];
    if (i && i.send_to) {
      let a = i.send_to;
      Array.isArray(a) || (a = [a]);
      const c = await Gm(t);
      for (const u of a) {
        const h = c.find((m) => m.measurementId === u), f = h && e[h.appId];
        if (f)
          s.push(f);
        else {
          s = [];
          break;
        }
      }
    }
    s.length === 0 && (s = Object.values(e)), await Promise.all(s), n("event", r, i || {});
  } catch (s) {
    Ke.error(s);
  }
}
function H0(n, e, t, r) {
  async function i(s, ...a) {
    try {
      if (s === "event") {
        const [c, u] = a;
        await q0(n, e, t, c, u);
      } else if (s === "config") {
        const [c, u] = a;
        await z0(n, e, t, r, c, u);
      } else if (s === "consent") {
        const [c, u] = a;
        n("consent", c, u);
      } else if (s === "get") {
        const [c, u, h] = a;
        n("get", c, u, h);
      } else if (s === "set") {
        const [c] = a;
        n("set", c);
      } else
        n(s, ...a);
    } catch (c) {
      Ke.error(c);
    }
  }
  return i;
}
function W0(n, e, t, r, i) {
  let s = function(...a) {
    window[r].push(arguments);
  };
  return window[i] && typeof window[i] == "function" && (s = window[i]), window[i] = H0(s, n, e, t), {
    gtagCore: s,
    wrappedGtag: window[i]
  };
}
function K0(n) {
  const e = window.document.getElementsByTagName("script");
  for (const t of Object.values(e))
    if (t.src && t.src.includes(Kc) && t.src.includes(n))
      return t;
  return null;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const G0 = 30, Q0 = 1e3;
class Y0 {
  constructor(e = {}, t = Q0) {
    this.throttleMetadata = e, this.intervalMillis = t;
  }
  getThrottleMetadata(e) {
    return this.throttleMetadata[e];
  }
  setThrottleMetadata(e, t) {
    this.throttleMetadata[e] = t;
  }
  deleteThrottleMetadata(e) {
    delete this.throttleMetadata[e];
  }
}
const Qm = new Y0();
function X0(n) {
  return new Headers({
    Accept: "application/json",
    "x-goog-api-key": n
  });
}
async function J0(n) {
  var e;
  const { appId: t, apiKey: r } = n, i = {
    method: "GET",
    headers: X0(r)
  }, s = L0.replace("{app-id}", t), a = await fetch(s, i);
  if (a.status !== 200 && a.status !== 304) {
    let c = "";
    try {
      const u = await a.json();
      !((e = u.error) === null || e === void 0) && e.message && (c = u.error.message);
    } catch {
    }
    throw Je.create("config-fetch-failed", {
      httpStatus: a.status,
      responseMessage: c
    });
  }
  return a.json();
}
async function Z0(n, e = Qm, t) {
  const { appId: r, apiKey: i, measurementId: s } = n.options;
  if (!r)
    throw Je.create(
      "no-app-id"
      /* AnalyticsError.NO_APP_ID */
    );
  if (!i) {
    if (s)
      return {
        measurementId: s,
        appId: r
      };
    throw Je.create(
      "no-api-key"
      /* AnalyticsError.NO_API_KEY */
    );
  }
  const a = e.getThrottleMetadata(r) || {
    backoffCount: 0,
    throttleEndTimeMillis: Date.now()
  }, c = new nC();
  return setTimeout(async () => {
    c.abort();
  }, t !== void 0 ? t : M0), Ym({ appId: r, apiKey: i, measurementId: s }, a, c, e);
}
async function Ym(n, { throttleEndTimeMillis: e, backoffCount: t }, r, i = Qm) {
  var s;
  const { appId: a, measurementId: c } = n;
  try {
    await eC(r, e);
  } catch (u) {
    if (c)
      return Ke.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u == null ? void 0 : u.message}]`), { appId: a, measurementId: c };
    throw u;
  }
  try {
    const u = await J0(n);
    return i.deleteThrottleMetadata(a), u;
  } catch (u) {
    const h = u;
    if (!tC(h)) {
      if (i.deleteThrottleMetadata(a), c)
        return Ke.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${h == null ? void 0 : h.message}]`), { appId: a, measurementId: c };
      throw u;
    }
    const f = Number((s = h == null ? void 0 : h.customData) === null || s === void 0 ? void 0 : s.httpStatus) === 503 ? Ll(t, i.intervalMillis, G0) : Ll(t, i.intervalMillis), m = {
      throttleEndTimeMillis: Date.now() + f,
      backoffCount: t + 1
    };
    return i.setThrottleMetadata(a, m), Ke.debug(`Calling attemptFetch again in ${f} millis`), Ym(n, m, r, i);
  }
}
function eC(n, e) {
  return new Promise((t, r) => {
    const i = Math.max(e - Date.now(), 0), s = setTimeout(t, i);
    n.addEventListener(() => {
      clearTimeout(s), r(Je.create("fetch-throttle", {
        throttleEndTimeMillis: e
      }));
    });
  });
}
function tC(n) {
  if (!(n instanceof at) || !n.customData)
    return !1;
  const e = Number(n.customData.httpStatus);
  return e === 429 || e === 500 || e === 503 || e === 504;
}
class nC {
  constructor() {
    this.listeners = [];
  }
  addEventListener(e) {
    this.listeners.push(e);
  }
  abort() {
    this.listeners.forEach((e) => e());
  }
}
async function rC(n, e, t, r, i) {
  if (i && i.global) {
    n("event", t, r);
    return;
  } else {
    const s = await e, a = Object.assign(Object.assign({}, r), { send_to: s });
    n("event", t, a);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function iC() {
  if (Zd())
    try {
      await ef();
    } catch (n) {
      return Ke.warn(Je.create("indexeddb-unavailable", {
        errorInfo: n == null ? void 0 : n.toString()
      }).message), !1;
    }
  else
    return Ke.warn(Je.create("indexeddb-unavailable", {
      errorInfo: "IndexedDB is not available in this environment."
    }).message), !1;
  return !0;
}
async function sC(n, e, t, r, i, s, a) {
  var c;
  const u = Z0(n);
  u.then((w) => {
    t[w.measurementId] = w.appId, n.options.measurementId && w.measurementId !== n.options.measurementId && Ke.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`);
  }).catch((w) => Ke.error(w)), e.push(u);
  const h = iC().then((w) => {
    if (w)
      return r.getId();
  }), [f, m] = await Promise.all([
    u,
    h
  ]);
  K0(s) || j0(s, f.measurementId), i("js", /* @__PURE__ */ new Date());
  const _ = (c = a == null ? void 0 : a.config) !== null && c !== void 0 ? c : {};
  return _[V0] = "firebase", _.update = !0, m != null && (_[x0] = m), i("config", f.measurementId, _), f.measurementId;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class oC {
  constructor(e) {
    this.app = e;
  }
  _delete() {
    return delete si[this.app.options.appId], Promise.resolve();
  }
}
let si = {}, id = [];
const sd = {};
let sa = "dataLayer", aC = "gtag", od, Xm, ad = !1;
function cC() {
  const n = [];
  if (Jd() && n.push("This is a browser extension environment."), qv() || n.push("Cookies are not available."), n.length > 0) {
    const e = n.map((r, i) => `(${i + 1}) ${r}`).join(" "), t = Je.create("invalid-analytics-context", {
      errorInfo: e
    });
    Ke.warn(t.message);
  }
}
function uC(n, e, t) {
  cC();
  const r = n.options.appId;
  if (!r)
    throw Je.create(
      "no-app-id"
      /* AnalyticsError.NO_APP_ID */
    );
  if (!n.options.apiKey)
    if (n.options.measurementId)
      Ke.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);
    else
      throw Je.create(
        "no-api-key"
        /* AnalyticsError.NO_API_KEY */
      );
  if (si[r] != null)
    throw Je.create("already-exists", {
      id: r
    });
  if (!ad) {
    B0(sa);
    const { wrappedGtag: s, gtagCore: a } = W0(si, id, sd, sa, aC);
    Xm = s, od = a, ad = !0;
  }
  return si[r] = sC(n, id, sd, e, od, sa, t), new oC(n);
}
function lC(n = Xs()) {
  n = de(n);
  const e = dn(n, Fs);
  return e.isInitialized() ? e.getImmediate() : hC(n);
}
function hC(n, e = {}) {
  const t = dn(n, Fs);
  if (t.isInitialized()) {
    const i = t.getImmediate();
    if (ui(e, t.getOptions()))
      return i;
    throw Je.create(
      "already-initialized"
      /* AnalyticsError.ALREADY_INITIALIZED */
    );
  }
  return t.initialize({ options: e });
}
function dC(n, e, t, r) {
  n = de(n), rC(Xm, si[n.app.options.appId], e, t, r).catch((i) => Ke.error(i));
}
const cd = "@firebase/analytics", ud = "0.10.7";
function fC() {
  ft(new it(
    Fs,
    (e, { options: t }) => {
      const r = e.getProvider("app").getImmediate(), i = e.getProvider("installations-internal").getImmediate();
      return uC(r, i, t);
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  )), ft(new it(
    "analytics-internal",
    n,
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), He(cd, ud), He(cd, ud, "esm2017");
  function n(e) {
    try {
      const t = e.getProvider(Fs).getImmediate();
      return {
        logEvent: (r, i, s) => dC(t, r, i, s)
      };
    } catch (t) {
      throw Je.create("interop-component-reg-failed", {
        reason: t
      });
    }
  }
}
fC();
const pC = {
  apiKey: "AIzaSyBmcnHP80KXpBXltHrVnP1MZPsiSbVbWqQ",
  authDomain: "water-fetch.firebaseapp.com",
  projectId: "water-fetch",
  storageBucket: "water-fetch.appspot.com",
  messagingSenderId: "911813185967",
  appId: "1:911813185967:web:e146c600afacbbe0315f5a",
  measurementId: "G-6MYL1EYDGD"
}, mo = sf(pC), Jr = DI(mo), ld = ES(mo), HP = HR(mo);
lC(mo);
function WP(n, e = [], t) {
  const r = Be(null);
  return z.useEffect(() => (n().then(r.set), () => {
    t == null || t(e);
  }), e), r.get;
}
function gr(n, e = [], t = () => {
}) {
  z.useEffect(() => (n().then(), () => t(e)), e);
}
function Be(n) {
  const [e, t] = z.useState(n);
  return {
    get: e,
    set: t
  };
}
function hd(n, e, t = (r) => r) {
  const r = Be(t(n)), i = z.useDeferredValue(r.get);
  return z.useEffect(() => {
    e(i);
  }, [i]), z.useEffect(() => {
    r.set(t(n));
  }, [n]), r;
}
function KP(n, e = [], t = 1e3) {
  const r = Be(null), i = Be(!1);
  return z.useEffect(() => {
    const s = new Us();
    return i.set(!0), s.start(t).then(() => {
      r.set(n()), i.set(!1);
    }), () => {
      s.clear(), i.set(!1);
    };
  }, [...e, t]), [i.get, r.get];
}
function mC(n, e = [], t = 1e3) {
  const r = Be(!1);
  return z.useEffect(() => {
    const i = new Us();
    r.set(!0);
    let s;
    return i.start(t).then(async () => {
      s = n(), s instanceof Promise && await s, r.set(!1);
    }), () => {
      i.clear(), typeof s == "function" && s(), r.set(!1);
    };
  }, [...e, t]), r.get;
}
const GP = (n, e = []) => {
  const t = Be("ready"), r = Be(null), i = Be(null);
  return gr(async () => {
    if (t.get == "idle") {
      t.set("loading");
      try {
        const s = await n();
        r.set(s), i.set(null), t.set("success");
      } catch (s) {
        r.set(null), i.set(s), t.set("error");
      }
    }
  }, [t.get, ...e]), {
    status: t,
    data: r,
    error: i
  };
};
function gC(n) {
  const e = Mt.getOne(n);
  return z.useMemo(() => e || null, [e]);
}
function yC() {
  const n = Mt.getAll();
  return z.useMemo(() => n.filter(({ private: t = !1 }) => !t), [n]);
}
function QP(n) {
  const e = Mt.getOneFeild(n, "config");
  return z.useMemo(() => e || null, [e]);
}
function YP() {
  const n = yC(), e = rt.getOneFeild("findConfigurations", "value"), t = V_.getOneFeild("settings.viewType", "focused"), r = z.useMemo(() => t == "list" ? oi.orderBy(n, "name", "asc") : t ? oi.orderBy(n, "settingId", "asc") : n, [t, n]), i = Jm("settings/findBy.enum"), s = z.useMemo(() => Object.entries(md(String(e))).map(([c, u]) => [c, u.join(" ")]), [e]), a = z.useMemo(() => r.filter((c) => s.every(([u, h]) => {
    var f;
    switch (u) {
      case "id":
        return Yt(c.settingId, h);
      case "name":
        return typeof c.name == "string" && Yt(c.name, h);
      case "changed":
        return !jn(c.def, c.value);
      case "type": {
        const m = (f = c.settingId.match(/\.[a-z]+$/gi)) == null ? void 0 : f[0].slice(1);
        return typeof m == "string" ? Yt(h, m) : !1;
      }
      case "default value":
        return i == "nice" ? Yt(Fg(c.name, c.desc, c.settingId).join(" "), h) : i && Yt(String(c[i]), h);
    }
  })), [s, r, i]);
  return z.useEffect(() => {
    Cn("configurations.found.length", a.length);
  }, [a]), a;
}
function XP(n, e) {
  Mt.setOneFeild(n, "config", e);
}
function JP(n, e) {
  Mt.setOneFeild(n, "value", e);
}
function Jm(n) {
  const e = gC(n);
  return e == null ? void 0 : e.value;
}
function ZP(n) {
  const e = Qa.getAll();
  return z.useMemo(() => oi.join({ commandId: n }, e, "commandId->command"), [n, e]);
}
function Zm() {
  const n = Qa.getAll();
  return z.useMemo(() => n.filter(({ value: e }) => e), [n]);
}
function ek(n) {
  const e = Zm();
  return z.useMemo(() => oi.join({ actionName: n }, e, "actionName->action"), [e]);
}
const tk = (n) => zd.setTemp("settings", n == null ? void 0 : n.toString());
function _C() {
  const n = hv.getAll();
  return z.useMemo(() => n.filter((e) => !e.private), [n]);
}
function nk() {
  const n = _C(), e = rt.getOneFeild("findConfigurations", "value"), t = Zm(), r = z.useMemo(() => oi.fullJoin(n, t, "commandId->command").map(({ childs: a, data: c }) => ({
    ...c,
    keys: a
  })), [n, t]), i = z.useMemo(() => {
    if (!e)
      return r;
    const s = Object.entries(md(e)).map(([a, c]) => ({
      prop: a,
      value: c.join(" ")
    }));
    return r.filter(({ commandId: a, label: c, keys: u }) => s.every(({ prop: h, value: f }) => {
      switch (h) {
        case "key":
          return Yt(u.map(({ value: m }) => m).join(" "), f);
        case "label":
          return Yt(c, f);
        case "commandId":
          return a.startsWith(f);
        default:
          return Yt([c, ...u.map(({ value: m }) => m)].join(" "), f);
      }
    }));
  }, [e, r]);
  return z.useEffect(() => {
    Cn("configurations.found.length", i.length);
  }, [i]), i;
}
function rk(n, e = []) {
  const t = Object.entries(n), r = t.map(([, i]) => rt.getOneFeild(i, "value"));
  return z.useMemo(() => {
    const i = {};
    return t.forEach(([s], a) => {
      const c = r[a];
      i[s] = c;
    }), i;
  }, [...r, ...e]);
}
function ik(n) {
  n.forEach((e) => {
    rt.setOneFeild(e, "value", "");
  });
}
function vC(n) {
  const e = rt.getOne(n);
  z.useEffect(() => {
    e || rt.add([
      {
        fieldId: n,
        selection: {
          direction: "forward",
          end: 0,
          start: 0
        },
        value: "",
        controls: {}
      }
    ]);
  }, [e]);
}
function wC(n, e) {
  return z.useMemo(() => {
    if (!e)
      return n || "";
    const r = Math.min(e.start, e.end);
    return (n == null ? void 0 : n.slice(0, r)) || "";
  }, [n, e]);
}
function EC(n, e) {
  return z.useMemo(() => {
    if (!e)
      return n || "";
    const r = Math.max(e.start, e.end);
    return (n == null ? void 0 : n.slice(r)) || "";
  }, [n, e]);
}
function TC(n, e) {
  return z.useMemo(() => {
    if (!e)
      return n || "";
    const r = Math.min(e.start, e.end), i = Math.max(e.start, e.end);
    return (n == null ? void 0 : n.slice(r, i)) || "";
  }, [n, e]);
}
function sk(n) {
  n.forEach(vC);
}
function ok(n) {
  const e = rt.getOneFeild(n, "value"), t = rt.getOneFeild(n, "selection");
  return wC(e, t);
}
function ak(n) {
  const e = rt.getOneFeild(n, "value"), t = rt.getOneFeild(n, "selection");
  return EC(e, t);
}
function ck(n) {
  const e = rt.getOneFeild(n, "value"), t = rt.getOneFeild(n, "selection");
  return TC(e, t);
}
function uk(n, e = J.getState()) {
  const t = n.map((r) => {
    const i = e.fields.entities[r], s = Object.keys((i == null ? void 0 : i.controls) || {});
    if (!i || !s.length)
      return {
        response: [],
        isValide: !0
      };
    const a = i.value, c = s.map((u) => a.match(new RegExp(u, "ig")));
    return { response: c, isValide: c.every(Boolean), fieldName: r };
  });
  return {
    controls: t,
    isValide: t.every(({ isValide: r }) => r)
  };
}
function lk(n, e, t = ot(), r = 5) {
  return U_.add([
    {
      message: n,
      type: e,
      time: r,
      id: t
    }
  ]), t;
}
var IC = /* @__PURE__ */ ((n) => (n[n.short = 5] = "short", n[n.long = 5] = "long", n))(IC || {});
const hk = async () => {
  const n = ot();
  return Tn.setTemp("id", n), Tn.setTemp("type", "scanQr"), new Promise(async (e) => {
    const t = eg(
      "object.data.view.result",
      (r) => !!r,
      async ({ object: r }) => {
        var s;
        const i = (s = r.data) == null ? void 0 : s.camera;
        (i == null ? void 0 : i.id) == n && (t(), e(i.result));
      }
    );
  });
};
function dk(n) {
  return new Promise(async (e, t) => {
    var a, c;
    if ((c = (a = J.getState().object.data) == null ? void 0 : a.camera) == null ? void 0 : c.id) {
      t("Camera Is Work Now");
      return;
    }
    const i = ot();
    Tn.setTemp("id", i), Tn.setTemp("type", n), Tn.setTemp("result", null), Tn.setTemp("error", null);
    const s = eg(
      "object.data.camera",
      (u) => !!(u != null && u.result || u != null && u.error),
      async ({ object: u }) => {
        var f;
        const h = (f = u.data) == null ? void 0 : f.camera;
        (h == null ? void 0 : h.id) == i && (h.result ? e(h.result) : t(h.error), ["id", "type", "result"].forEach((m) => {
          Tn.setTemp(m, null);
        }), s());
      }
    );
  });
}
function fk() {
  const n = Av.getEntity(), e = Jm("window/dark.boolean");
  return z.useCallback(
    (...t) => {
      const r = {}, i = {};
      if (e == null)
        return i;
      t.forEach((s) => {
        if (s) {
          if (typeof s == "string") {
            r.backgroundColor = s;
            return;
          }
          Object.entries(s).forEach(([a, c]) => {
            if (typeof c == "function") {
              r[a] = c;
              return;
            }
            r[a] = c;
          });
        }
      });
      for (const s in r) {
        const a = r[s];
        if (typeof a == "function")
          i[s] = a(n, e);
        else if (typeof a == "string") {
          const c = n[a];
          c && (i[s] = Gc(e, c));
        }
      }
      return i;
    },
    [e, n]
  );
}
function pk(n, ...e) {
  return (t, r) => `linear-gradient(${n} , ${e.filter((i) => t[i]).map((i) => {
    const s = t[i];
    return Gc(r, s);
  }).join(" , ")})`;
}
function Gc(n, e) {
  return n ? e.dark || e.default : e.light || e.default;
}
function mk(n = []) {
  return (e, t) => n.filter((r) => e[r.colorId]).map(({ colorId: r, x: i = 0, y: s = 0, blur: a = 3, size: c = 1, isInset: u = !1 }) => {
    const h = e[r];
    return `${i}px ${s}px ${a}px ${c}px ${Gc(t, h)} ${u ? "inset" : ""}`;
  }).join(" , ");
}
const dd = (n, e, t) => {
  const r = () => {
    const s = J.getState(), { value: a } = $s(s, n);
    (typeof e == "function" ? e(a) : a == e) && (i(), t(s));
  }, i = J.subscribe(r);
  return i;
}, eg = (n, e, t) => {
  const r = () => {
    const i = J.getState(), { value: s, isValide: a } = $s(i, n);
    if (!a) {
      gt.warn("Invalid State Dir", n);
      return;
    }
    (typeof e == "function" ? e(s) : s == e) && (t == null || t(i));
  };
  return J.subscribe(r);
}, bC = () => Gs("userInfo"), gk = () => {
  const n = AC();
  gr(async () => {
    if (n != null && n.uid) {
      const t = Gh(ld, "users"), r = Qh(t, n.uid), i = {
        photo: n.photoURL,
        phone: n.phoneNumber,
        name: n.displayName,
        email: n.email
      };
      Cn("userInfo", i), await xS(r, i, { merge: !0 });
    } else
      Cn("userInfo", null);
  }, [n]);
  const e = bC();
  gr(async () => {
    if (n && e) {
      let t = {};
      n.displayName != e.name && (t.displayName = e.name), n.photoURL != e.photo && (t.photoURL = e.photo), await aT(n, t);
    }
  }, [e, n]), z.useEffect(() => {
    if (n)
      return VS(Qh(Gh(ld, "users"), n.uid), (t) => {
        t.exists() && Cn("userInfo", t.data());
      });
  }, [n]);
}, AC = () => {
  const n = Be(Jr.currentUser);
  return z.useEffect(() => {
    n.set(Jr.currentUser);
    const e = uT(Jr, n.set), t = kf(Jr, n.set);
    return () => {
      e(), t();
    };
  }, []), n.get;
}, yk = async () => {
  kv.setTemp("open", !0), await pd(1e3);
  const n = document.getElementById("capatcha-view");
  if (!n)
    throw Error("capatcha view element is not exists");
  return new LT(Jr, n);
}, _k = () => {
  zd.setTemp("profile-view", !0);
};
export {
  Xt as $,
  K_ as A,
  nk as B,
  ZP as C,
  Qa as D,
  sk as E,
  NP as F,
  tP as G,
  Al as H,
  zd as I,
  YP as J,
  XC as K,
  U_ as L,
  lk as M,
  uk as N,
  xP as O,
  Jr as P,
  VP as Q,
  AC as R,
  bC as S,
  xS as T,
  Qh as U,
  ld as V,
  GP as W,
  jP as X,
  Gh as Y,
  MP as Z,
  LP as _,
  Be as a,
  EC as a$,
  Jt as a0,
  aT as a1,
  ot as a2,
  qP as a3,
  HP as a4,
  BP as a5,
  zP as a6,
  dk as a7,
  _k as a8,
  hv as a9,
  kC as aA,
  ga as aB,
  mP as aC,
  wP as aD,
  WC as aE,
  EP as aF,
  OC as aG,
  rP as aH,
  iP as aI,
  JC as aJ,
  uP as aK,
  DC as aL,
  gP as aM,
  dP as aN,
  AP as aO,
  zC as aP,
  gk as aQ,
  j_ as aR,
  hd as aS,
  gC as aT,
  QP as aU,
  XP as aV,
  JP as aW,
  ek as aX,
  rk as aY,
  ik as aZ,
  wC as a_,
  iv as aa,
  hP as ab,
  gr as ac,
  lP as ad,
  R_ as ae,
  WP as af,
  VC as ag,
  LC as ah,
  UC as ai,
  jC as aj,
  YC as ak,
  QC as al,
  Av as am,
  Gc as an,
  OP as ao,
  KC as ap,
  GC as aq,
  KP as ar,
  aP as as,
  G_ as at,
  MC as au,
  FC as av,
  $C as aw,
  BC as ax,
  vl as ay,
  xC as az,
  mk as b,
  TC as b0,
  ok as b1,
  ak as b2,
  ck as b3,
  IC as b4,
  hk as b5,
  dd as b6,
  eg as b7,
  yk as b8,
  PP as c,
  Tn as d,
  kP as e,
  rt as f,
  Jm as g,
  pk as h,
  Zm as i,
  _C as j,
  J as k,
  yC as l,
  Gs as m,
  mt as n,
  uv as o,
  tk as p,
  Cn as q,
  as as r,
  Mt as s,
  gv as t,
  fk as u,
  V_ as v,
  DP as w,
  vC as x,
  mC as y,
  yP as z
};
