import { j as a, C as j, a as h, E as O, T as L } from "./PinFeild-i5ZgTbAA.mjs";
import { av as U, aw as I, ax as H, ay as M, az as F, aA as V, aB as $, aC as q, aD as K, aE as W, aF as z, aG as G, aH as J, aI as Y, aJ as Q, aK as X, a as k, aj as m, ak as y, q as v, k as _, aL as Z, s as ee, m as te, e as ne, o as ie, S as se, aM as oe, aN as ae, P as re, D as ce, aO as le } from "./index-D4efwQAm.mjs";
import * as b from "react";
import l from "react";
import { ap as ue, a0 as f, aq as w } from "./index-BclG5w1X.mjs";
import de from "react-dom";
import { getLocalDB as fe } from "./apis.js";
import { C as me, B as be } from "./Card-Bgu-Prmj.mjs";
function ye() {
  const e = U();
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
const N = {
  notify() {
  },
  get: () => []
};
function we(e, o) {
  let i, t = N, s = 0, n = !1;
  function r(B) {
    S();
    const P = t.subscribe(B);
    let E = !1;
    return () => {
      E || (E = !0, P(), C());
    };
  }
  function u() {
    t.notify();
  }
  function d() {
    p.onStateChange && p.onStateChange();
  }
  function c() {
    return n;
  }
  function S() {
    s++, i || (i = e.subscribe(d), t = ye());
  }
  function C() {
    s--, i && s === 0 && (i(), i = void 0, t.clear(), t = N);
  }
  function T() {
    n || (n = !0, S());
  }
  function R() {
    n && (n = !1, C());
  }
  const p = {
    addNestedSub: r,
    notifyNestedSubs: u,
    handleChangeWrapper: d,
    isSubscribed: c,
    trySubscribe: T,
    tryUnsubscribe: R,
    getListeners: () => t
  };
  return p;
}
const ge = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", pe = ge ? b.useLayoutEffect : b.useEffect;
function ve({
  store: e,
  context: o,
  children: i,
  serverState: t,
  stabilityCheck: s = "once",
  noopCheck: n = "once"
}) {
  const r = b.useMemo(() => {
    const c = we(e);
    return {
      store: e,
      subscription: c,
      getServerState: t ? () => t : void 0,
      stabilityCheck: s,
      noopCheck: n
    };
  }, [e, t, s, n]), u = b.useMemo(() => e.getState(), [e]);
  pe(() => {
    const {
      subscription: c
    } = r;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), u !== e.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [r, u]);
  const d = o || I;
  return /* @__PURE__ */ b.createElement(d.Provider, {
    value: r
  }, i);
}
function xe() {
  H(), M(), F(), V(), $(), q(), K(), W(), z(), G(), J(), Y(), Q(), X();
}
function Se() {
  const e = k("window/dark.boolean"), o = m.getOne("primary.background"), i = m.getOne("text.color"), t = m.getOne("bg.selection"), s = m.getOne("text.selection");
  l.useEffect(() => {
    if (e != null)
      return document.body.setAttribute("data-dark", e ? "true" : "false"), () => {
        document.body.removeAttribute("data-dark");
      };
  }, [e]), l.useEffect(() => {
    e != null && (o && (document.body.style.backgroundColor = y(e, o)), i && (document.body.style.color = y(e, i)));
  }, [o, i, e]);
  const n = k("preferences/font.enum");
  l.useEffect(() => {
    if (n && (document.body.style.fontFamily = n), t && s) {
      const r = document.createElement("style");
      r.textContent = `
        ::selection {
          background: ${y(!!e, t)};
          color: ${y(!!e, s)};
        }
      `, document.head.append(r);
    }
    return () => {
    };
  }, [e, t, s, n]);
}
function Ce() {
  l.useEffect(() => {
    function e() {
      v("local.isOnLine", navigator.onLine);
    }
    return e(), window.addEventListener("online", e), window.addEventListener("offline", e), () => {
      window.removeEventListener("online", e), window.removeEventListener("offline", e);
    };
  }, []);
}
function Ee(e) {
  Se(), Ce();
}
var x, g = de;
if (process.env.NODE_ENV === "production")
  x = g.createRoot, g.hydrateRoot;
else {
  var A = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  x = function(e, o) {
    A.usingClientEntryPoint = !0;
    try {
      return g.createRoot(e, o);
    } finally {
      A.usingClientEntryPoint = !1;
    }
  };
}
const { data: he } = le, D = ({ render: e = /* @__PURE__ */ a(O, {}) }) => typeof e == "function" ? /* @__PURE__ */ a(e, {}) : e, Le = ({ props: e }) => {
  Ee(), xe(), Z(), l.useEffect(() => {
    ee.setAll(
      Object.entries(he).map(([t, s]) => ({
        ...s,
        settingId: t,
        value: s.def
      }))
    );
  }, []);
  const o = te("env.isDev");
  l.useEffect(() => {
    var t;
    if (o)
      return window.store = _, window.execAction = ne, window.localDB = fe(), window.execCommand = ie, window.auth = (t = se.server) == null ? void 0 : t.auth, () => {
        delete window.store, delete window.execAction, delete window.execCommand, delete window.localDB, delete window.auth;
      };
  }, [o]);
  const { status: i } = oe(async () => {
    var s;
    await f(e.timeLoading), v("env.isDev", e.isDev);
    let t = (s = e.onPrepare) == null ? void 0 : s.call(e);
    t instanceof Promise && (t = await t), t && (t.colors && await w(t.colors, async (n) => {
      await f(30), m.upsert([n]);
    }), t.translations && await w(t.translations, async (n) => {
      await f(20), ae.upsert([n]);
    }), t.commands && await w(t.commands, async ({ commandId: n, keys: r, ...u }) => {
      await f(30), re.upsert([
        {
          ...u,
          commandId: n
        }
      ]), await w(r, async (d) => {
        await f(10), ce.upsert([d]);
      });
    }), v("project", t));
  }, [e]);
  return l.useEffect(() => {
    i.set("idle");
  }, []), /* @__PURE__ */ h(O, { children: [
    ["ready", "idle", "loading"].includes(i.get) && /* @__PURE__ */ a(D, { render: e.loading }),
    i.get == "success" && /* @__PURE__ */ a(D, { render: e.app }),
    i.get == "error" && /* @__PURE__ */ a("div", { className: "flex justify-center items-center w-full h-full", children: /* @__PURE__ */ h(me, { className: "flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ a("h1", { className: "p-2 text-2xl text-center", children: /* @__PURE__ */ a(L, { content: "Found Problem , Try After Moment!" }) }),
      /* @__PURE__ */ a("div", { className: "p-2", children: /* @__PURE__ */ a(
        be,
        {
          onClick: () => {
            i.set("idle");
          },
          children: /* @__PURE__ */ a(L, { content: "Try Again" })
        }
      ) })
    ] }) })
  ] });
}, Re = async (e) => {
  const o = document.createElement("div");
  o.classList.add("window"), e = ue(e, {
    loading: /* @__PURE__ */ a("div", { className: "top-1/2 left-1/2 fixed transform -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ a(j, { circleClassName: "w-[50px] h-[50px] border-4 " }) }),
    timeLoading: 500
  }), document.body.appendChild(o);
  const i = x(o);
  return i.render(
    /* @__PURE__ */ a(l.StrictMode, { children: /* @__PURE__ */ a(ve, { store: _, children: /* @__PURE__ */ a(Le, { props: e }) }) })
  ), i;
};
export {
  Re as startApplication
};
