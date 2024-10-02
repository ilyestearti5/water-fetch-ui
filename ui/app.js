import { j as a, C as j, a as L, E as O, T as k } from "./PinFeild-d2tlp-XL.mjs";
import { ax as I, ay as H, az as M, aA as F, aB as V, aC as $, aD as q, aE as G, aF as K, aG as W, aH as z, aI as J, aJ as Y, aK as Q, aL as X, aM as Z, a as N, al as m, am as y, q as x, k as T, aN as ee, s as te, m as ne, _ as ie, aO as se, P as oe, D as ae, aP as re, e as ce, o as le } from "./index-B28S0mrD.mjs";
import * as b from "react";
import l from "react";
import { aq as ue, a1 as f, ar as g } from "./index-CYYSxI_0.mjs";
import de from "react-dom";
import { getLocalDB as fe } from "./apis.js";
import { C as me, B as be } from "./Card-IzIbVky-.mjs";
function ye() {
  const e = I();
  let s = null, i = null;
  return {
    clear() {
      s = null, i = null;
    },
    notify() {
      e(() => {
        let t = s;
        for (; t; )
          t.callback(), t = t.next;
      });
    },
    get() {
      let t = [], o = s;
      for (; o; )
        t.push(o), o = o.next;
      return t;
    },
    subscribe(t) {
      let o = !0, n = i = {
        callback: t,
        next: null,
        prev: i
      };
      return n.prev ? n.prev.next = n : s = n, function() {
        !o || s === null || (o = !1, n.next ? n.next.prev = n.prev : i = n.prev, n.prev ? n.prev.next = n.next : s = n.next);
      };
    }
  };
}
const A = {
  notify() {
  },
  get: () => []
};
function ge(e, s) {
  let i, t = A, o = 0, n = !1;
  function r(B) {
    C();
    const U = t.subscribe(B);
    let h = !1;
    return () => {
      h || (h = !0, U(), E());
    };
  }
  function u() {
    t.notify();
  }
  function d() {
    v.onStateChange && v.onStateChange();
  }
  function c() {
    return n;
  }
  function C() {
    o++, i || (i = e.subscribe(d), t = ye());
  }
  function E() {
    o--, i && o === 0 && (i(), i = void 0, t.clear(), t = A);
  }
  function P() {
    n || (n = !0, C());
  }
  function R() {
    n && (n = !1, E());
  }
  const v = {
    addNestedSub: r,
    notifyNestedSubs: u,
    handleChangeWrapper: d,
    isSubscribed: c,
    trySubscribe: P,
    tryUnsubscribe: R,
    getListeners: () => t
  };
  return v;
}
const we = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", pe = we ? b.useLayoutEffect : b.useEffect;
function ve({
  store: e,
  context: s,
  children: i,
  serverState: t,
  stabilityCheck: o = "once",
  noopCheck: n = "once"
}) {
  const r = b.useMemo(() => {
    const c = ge(e);
    return {
      store: e,
      subscription: c,
      getServerState: t ? () => t : void 0,
      stabilityCheck: o,
      noopCheck: n
    };
  }, [e, t, o, n]), u = b.useMemo(() => e.getState(), [e]);
  pe(() => {
    const {
      subscription: c
    } = r;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), u !== e.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [r, u]);
  const d = s || H;
  return /* @__PURE__ */ b.createElement(d.Provider, {
    value: r
  }, i);
}
function xe() {
  M(), F(), V(), $(), q(), G(), K(), W(), z(), J(), Y(), Q(), X(), Z();
}
function Se() {
  const e = N("window/dark.boolean"), s = m.getOne("primary.background"), i = m.getOne("text.color"), t = m.getOne("bg.selection"), o = m.getOne("text.selection");
  l.useEffect(() => {
    if (e != null)
      return document.body.setAttribute("data-dark", e ? "true" : "false"), () => {
        document.body.removeAttribute("data-dark");
      };
  }, [e]), l.useEffect(() => {
    e != null && (s && (document.body.style.backgroundColor = y(e, s)), i && (document.body.style.color = y(e, i)));
  }, [s, i, e]);
  const n = N("preferences/font.enum");
  l.useEffect(() => {
    if (n && (document.body.style.fontFamily = n), t && o) {
      const r = document.createElement("style");
      r.textContent = `
        ::selection {
          background: ${y(!!e, t)};
          color: ${y(!!e, o)};
        }
      `, document.head.append(r);
    }
    return () => {
    };
  }, [e, t, o, n]);
}
function Ce() {
  l.useEffect(() => {
    function e() {
      x("local.isOnLine", navigator.onLine);
    }
    return e(), window.addEventListener("online", e), window.addEventListener("offline", e), () => {
      window.removeEventListener("online", e), window.removeEventListener("offline", e);
    };
  }, []);
}
function Ee(e) {
  Se(), Ce();
}
var S, w = de;
if (process.env.NODE_ENV === "production")
  S = w.createRoot, w.hydrateRoot;
else {
  var D = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  S = function(e, s) {
    D.usingClientEntryPoint = !0;
    try {
      return w.createRoot(e, s);
    } finally {
      D.usingClientEntryPoint = !1;
    }
  };
}
const { data: he } = re, p = (e, s) => {
  window[e] = s;
}, _ = ({ render: e = /* @__PURE__ */ a(O, {}) }) => typeof e == "function" ? /* @__PURE__ */ a(e, {}) : e, Le = ({ props: e }) => {
  Ee(), xe(), ee(), l.useEffect(() => {
    te.setAll(
      Object.entries(he).map(([t, o]) => ({
        ...o,
        settingId: t,
        value: o.def
      }))
    );
  }, []);
  const s = ne("env.isDev");
  l.useEffect(() => {
    if (s)
      return p("store", T), p("execAction", ce), p("execCommand", le), p("localDB", fe()), () => {
        delete window.store, delete window.execAction, delete window.execCommand, delete window.localDB;
      };
  }, [s]);
  const { status: i } = ie(async () => {
    var o;
    await f(e.timeLoading), x("env.isDev", e.isDev);
    let t = (o = e.onPrepare) == null ? void 0 : o.call(e);
    t instanceof Promise && (t = await t), t && (t.colors && await g(t.colors, async (n) => {
      await f(30), m.upsert([n]);
    }), t.translations && await g(t.translations, async (n) => {
      await f(20), se.upsert([n]);
    }), t.commands && await g(t.commands, async ({ commandId: n, keys: r, ...u }) => {
      await f(30), oe.upsert([
        {
          ...u,
          commandId: n
        }
      ]), await g(r, async (d) => {
        await f(10), ae.upsert([d]);
      });
    }), x("project", t));
  }, [e]);
  return l.useEffect(() => {
    i.set("idle");
  }, []), /* @__PURE__ */ L(O, { children: [
    ["ready", "idle", "loading"].includes(i.get) && /* @__PURE__ */ a(_, { render: e.loading }),
    i.get == "success" && /* @__PURE__ */ a(_, { render: e.app }),
    i.get == "error" && /* @__PURE__ */ a("div", { className: "flex justify-center items-center w-full h-full", children: /* @__PURE__ */ L(me, { className: "flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ a("h1", { className: "p-2 text-2xl text-center", children: /* @__PURE__ */ a(k, { content: "Found Problem , Try After Moment!" }) }),
      /* @__PURE__ */ a("div", { className: "p-2", children: /* @__PURE__ */ a(
        be,
        {
          onClick: () => {
            i.set("idle");
          },
          children: /* @__PURE__ */ a(k, { content: "Try Again" })
        }
      ) })
    ] }) })
  ] });
}, Pe = async (e) => {
  const s = document.createElement("div");
  s.classList.add("window"), e = ue(e, {
    loading: /* @__PURE__ */ a("div", { className: "top-1/2 left-1/2 fixed transform -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ a(j, { circleClassName: "w-[50px] h-[50px] border-4 " }) }),
    timeLoading: 500
  }), document.body.appendChild(s);
  const i = S(s);
  return i.render(
    /* @__PURE__ */ a(l.StrictMode, { children: /* @__PURE__ */ a(ve, { store: T, children: /* @__PURE__ */ a(Le, { props: e }) }) })
  ), i;
};
export {
  Pe as startApplication
};
