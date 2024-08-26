import { j as u, E as R } from "./EmptyComponent-DdPDoXyL.mjs";
import * as l from "react";
import c from "react";
import { an as k, ao as N, ap as U, aq as A, ar as D, as as T, at as I, au as P, av as j, aw as B, ax as M, ay as V, az as $, aA as F, aB as q, aC as H, g as w, a8 as b, a9 as m, p as W, j as z, aD as K, s as Y, aE as G } from "./index-8qQxvEIo.mjs";
import J from "react-dom";
function Q() {
  const e = k();
  let o = null, i = null;
  return {
    clear() {
      o = null, i = null;
    },
    notify() {
      e(() => {
        let t = o;
        for (; t; )
          t.callback(), t = t.next;
      });
    },
    get() {
      let t = [], s = o;
      for (; s; )
        t.push(s), s = s.next;
      return t;
    },
    subscribe(t) {
      let s = !0, n = i = {
        callback: t,
        next: null,
        prev: i
      };
      return n.prev ? n.prev.next = n : o = n, function() {
        !s || o === null || (s = !1, n.next ? n.next.prev = n.prev : i = n.prev, n.prev ? n.prev.next = n.next : o = n.next);
      };
    }
  };
}
const C = {
  notify() {
  },
  get: () => []
};
function X(e, o) {
  let i, t = C, s = 0, n = !1;
  function a(_) {
    S();
    const O = t.subscribe(_);
    let v = !1;
    return () => {
      v || (v = !0, O(), E());
    };
  }
  function f() {
    t.notify();
  }
  function d() {
    y.onStateChange && y.onStateChange();
  }
  function r() {
    return n;
  }
  function S() {
    s++, i || (i = e.subscribe(d), t = Q());
  }
  function E() {
    s--, i && s === 0 && (i(), i = void 0, t.clear(), t = C);
  }
  function L() {
    n || (n = !0, S());
  }
  function h() {
    n && (n = !1, E());
  }
  const y = {
    addNestedSub: a,
    notifyNestedSubs: f,
    handleChangeWrapper: d,
    isSubscribed: r,
    trySubscribe: L,
    tryUnsubscribe: h,
    getListeners: () => t
  };
  return y;
}
const Z = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ee = Z ? l.useLayoutEffect : l.useEffect;
function te({
  store: e,
  context: o,
  children: i,
  serverState: t,
  stabilityCheck: s = "once",
  noopCheck: n = "once"
}) {
  const a = l.useMemo(() => {
    const r = X(e);
    return {
      store: e,
      subscription: r,
      getServerState: t ? () => t : void 0,
      stabilityCheck: s,
      noopCheck: n
    };
  }, [e, t, s, n]), f = l.useMemo(() => e.getState(), [e]);
  ee(() => {
    const {
      subscription: r
    } = a;
    return r.onStateChange = r.notifyNestedSubs, r.trySubscribe(), f !== e.getState() && r.notifyNestedSubs(), () => {
      r.tryUnsubscribe(), r.onStateChange = void 0;
    };
  }, [a, f]);
  const d = o || N;
  return /* @__PURE__ */ l.createElement(d.Provider, {
    value: a
  }, i);
}
var g, p = J;
if (process.env.NODE_ENV === "production")
  g = p.createRoot, p.hydrateRoot;
else {
  var x = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  g = function(e, o) {
    x.usingClientEntryPoint = !0;
    try {
      return p.createRoot(e, o);
    } finally {
      x.usingClientEntryPoint = !1;
    }
  };
}
function ne() {
  U(), A(), D(), T(), I(), P(), j(), B(), M(), V(), $(), F(), q(), H();
}
function ie() {
  const e = w("window/dark.boolean"), o = b.getOne("primary.background"), i = b.getOne("text.color"), t = b.getOne("bg.selection"), s = b.getOne("text.selection");
  c.useEffect(() => {
    if (e != null)
      return document.body.setAttribute("data-dark", e ? "true" : "false"), () => {
        document.body.removeAttribute("data-dark");
      };
  }, [e]), c.useEffect(() => {
    e != null && (o && (document.body.style.backgroundColor = m(e, o)), i && (document.body.style.color = m(e, i)));
  }, [o, i, e]);
  const n = w("preferences/font.enum");
  c.useEffect(() => {
    if (n && (document.body.style.fontFamily = n), t && s) {
      const a = document.createElement("style");
      a.textContent = `
        ::selection {
          background: ${m(!!e, t)};
          color: ${m(!!e, s)};
        }
      `, document.head.append(a);
    }
    return () => {
    };
  }, [e, t, s, n]);
}
function oe() {
  c.useEffect(() => {
    function e() {
      W("local.isOnLine", navigator.onLine);
    }
    return e(), window.addEventListener("online", e), window.addEventListener("offline", e), () => {
      window.removeEventListener("online", e), window.removeEventListener("offline", e);
    };
  }, []);
}
function se(e) {
  ie(), oe();
}
const { data: re } = G, ae = ({ children: e }) => (se(), ne(), K(), c.useEffect(() => {
  Y.setAll(
    Object.entries(re).map(([o, { def: i, ...t }]) => ({
      ...t,
      settingId: o,
      def: i,
      value: i
    }))
  );
}, []), /* @__PURE__ */ u(R, { children: e })), de = async (e) => {
  const o = document.createElement("div");
  o.classList.add("window"), document.body.appendChild(o);
  const i = g(o);
  return i.render(
    /* @__PURE__ */ u(c.StrictMode, { children: /* @__PURE__ */ u(te, { store: z, children: /* @__PURE__ */ u(ae, { children: typeof e == "function" ? /* @__PURE__ */ u(e, {}) : e }) }) })
  ), i;
};
export {
  de as startApplication
};
