import { j as a, C as U, a as h, E as O, T as L } from "./SeparatedComponents-DfUPj3TY.mjs";
import { aw as H, ax as j, ay as I, az as M, aA as F, aB as V, aC as $, aD as K, aE as W, aF as q, aG as z, aH as G, aI as J, aJ as Q, aK as Y, aL as Z, aM as X, b as k, ak as m, al as y, x as v, m as _, aN as ee, s as te, p as ne, g as ie, r as se, U as oe, c as ae, aO as re, S as ce, H as le, aP as ue } from "./index-8xvo7Uwy.mjs";
import { aQ as He } from "./index-8xvo7Uwy.mjs";
import * as b from "react";
import l from "react";
import { am as de, Z as f, an as w } from "./index-Cep-AhVL.mjs";
import fe from "react-dom";
import { getLocalDB as me } from "./apis.js";
import { C as be, B as ye } from "./Card-BKH5_KnN.mjs";
function we() {
  const e = H();
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
function ge(e, o) {
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
    s++, i || (i = e.subscribe(d), t = we());
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
const pe = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ve = pe ? b.useLayoutEffect : b.useEffect;
function xe({
  store: e,
  context: o,
  children: i,
  serverState: t,
  stabilityCheck: s = "once",
  noopCheck: n = "once"
}) {
  const r = b.useMemo(() => {
    const c = ge(e);
    return {
      store: e,
      subscription: c,
      getServerState: t ? () => t : void 0,
      stabilityCheck: s,
      noopCheck: n
    };
  }, [e, t, s, n]), u = b.useMemo(() => e.getState(), [e]);
  ve(() => {
    const {
      subscription: c
    } = r;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), u !== e.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [r, u]);
  const d = o || j;
  return /* @__PURE__ */ b.createElement(d.Provider, {
    value: r
  }, i);
}
function Se() {
  I(), M(), F(), V(), $(), K(), W(), q(), z(), G(), J(), Q(), Y(), Z();
}
function Ce() {
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
function Ee() {
  l.useEffect(() => {
    function e() {
      v("local.isOnLine", navigator.onLine);
    }
    return e(), window.addEventListener("online", e), window.addEventListener("offline", e), () => {
      window.removeEventListener("online", e), window.removeEventListener("offline", e);
    };
  }, []);
}
function he(e) {
  Ce(), Ee(), X();
}
var x, g = fe;
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
const { data: Le } = ue, D = ({ render: e = /* @__PURE__ */ a(O, {}) }) => typeof e == "function" ? /* @__PURE__ */ a(e, {}) : e, ke = ({ props: e }) => {
  he(), Se(), ee(), l.useEffect(() => {
    te.setAll(
      Object.entries(Le).map(([t, s]) => ({
        ...s,
        settingId: t,
        value: s.def
      }))
    );
  }, []);
  const o = ne("env.isDev");
  l.useEffect(() => {
    var t;
    if (o)
      return window.store = _, window.execAction = ie, window.localDB = me(), window.execCommand = se, window.auth = (t = oe.server) == null ? void 0 : t.auth, () => {
        delete window.store, delete window.execAction, delete window.execCommand, delete window.localDB, delete window.auth;
      };
  }, [o]);
  const { status: i } = ae(async () => {
    var s;
    await f(e.timeLoading), v("env.isDev", e.isDev);
    let t = (s = e.onPrepare) == null ? void 0 : s.call(e);
    t instanceof Promise && (t = await t), t && (t.colors && await w(t.colors, async (n) => {
      await f(30), m.upsert([n]);
    }), t.translations && await w(t.translations, async (n) => {
      await f(20), re.upsert([n]);
    }), t.commands && await w(t.commands, async ({ commandId: n, keys: r, ...u }) => {
      await f(30), ce.upsert([
        {
          ...u,
          commandId: n
        }
      ]), await w(r, async (d) => {
        await f(10), le.upsert([d]);
      });
    }), v("project", t));
  }, [e]);
  return l.useEffect(() => {
    i.set("idle");
  }, []), /* @__PURE__ */ h(O, { children: [
    ["ready", "idle", "loading"].includes(i.get) && /* @__PURE__ */ a(D, { render: e.loading }),
    i.get == "success" && /* @__PURE__ */ a(D, { render: e.app }),
    i.get == "error" && /* @__PURE__ */ a("div", { className: "flex justify-center items-center w-full h-full", children: /* @__PURE__ */ h(be, { className: "flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ a("h1", { className: "p-2 text-2xl text-center", children: /* @__PURE__ */ a(L, { content: "Found Problem , Try After Moment!" }) }),
      /* @__PURE__ */ a("div", { className: "p-2", children: /* @__PURE__ */ a(
        ye,
        {
          onClick: () => {
            i.set("idle");
          },
          children: /* @__PURE__ */ a(L, { content: "Try Again" })
        }
      ) })
    ] }) })
  ] });
}, Be = async (e) => {
  const o = document.createElement("div");
  o.classList.add("window"), e = de(e, {
    loading: /* @__PURE__ */ a("div", { className: "top-1/2 left-1/2 fixed transform -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ a(U, { circleClassName: "w-[50px] h-[50px] border-4 " }) }),
    timeLoading: 500
  }), document.body.appendChild(o);
  const i = x(o);
  return i.render(
    /* @__PURE__ */ a(l.StrictMode, { children: /* @__PURE__ */ a(xe, { store: _, children: /* @__PURE__ */ a(ke, { props: e }) }) })
  ), i;
};
export {
  He as defineTable,
  Be as startApplication
};
