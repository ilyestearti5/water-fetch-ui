import { j as l, C as F, a as x, E as O, T as E } from "./SeparatedComponents-Bh4ujUva.mjs";
import { aw as P, ax as U, ay as j, az as I, aA as H, aB as V, aC as $, aD as G, aE as K, aF as q, aG as W, aH as z, aI as J, aJ as Q, aK as Y, aL as Z, b as L, ak as m, al as g, w as p, aM as c, l as T, aN as X, s as ee, n as te, g as ne, q as ie, T as oe, c as ae, aO as re, aP as se, aQ as ce } from "./index-DujxNE1c.mjs";
import { aR as Re } from "./index-DujxNE1c.mjs";
import * as b from "react";
import f from "react";
import { am as le, Z as k, an as de } from "./index-DdFCMvT_.mjs";
import ue from "react-dom";
import { getLocalDB as fe } from "./apis.js";
import { C as me, B as be } from "./Card-DFsOandy.mjs";
function ge() {
  const n = P();
  let i = null, o = null;
  return {
    clear() {
      i = null, o = null;
    },
    notify() {
      n(() => {
        let e = i;
        for (; e; )
          e.callback(), e = e.next;
      });
    },
    get() {
      let e = [], a = i;
      for (; a; )
        e.push(a), a = a.next;
      return e;
    },
    subscribe(e) {
      let a = !0, t = o = {
        callback: e,
        next: null,
        prev: o
      };
      return t.prev ? t.prev.next = t : i = t, function() {
        !a || i === null || (a = !1, t.next ? t.next.prev = t.prev : o = t.prev, t.prev ? t.prev.next = t.next : i = t.next);
      };
    }
  };
}
const M = {
  notify() {
  },
  get: () => []
};
function ye(n, i) {
  let o, e = M, a = 0, t = !1;
  function d(R) {
    v();
    const B = e.subscribe(R);
    let h = !1;
    return () => {
      h || (h = !0, B(), C());
    };
  }
  function s() {
    e.notify();
  }
  function r() {
    S.onStateChange && S.onStateChange();
  }
  function u() {
    return t;
  }
  function v() {
    a++, o || (o = n.subscribe(r), e = ge());
  }
  function C() {
    a--, o && a === 0 && (o(), o = void 0, e.clear(), e = M);
  }
  function _() {
    t || (t = !0, v());
  }
  function D() {
    t && (t = !1, C());
  }
  const S = {
    addNestedSub: d,
    notifyNestedSubs: s,
    handleChangeWrapper: r,
    isSubscribed: u,
    trySubscribe: _,
    tryUnsubscribe: D,
    getListeners: () => e
  };
  return S;
}
const Se = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", pe = Se ? b.useLayoutEffect : b.useEffect;
function we({
  store: n,
  context: i,
  children: o,
  serverState: e,
  stabilityCheck: a = "once",
  noopCheck: t = "once"
}) {
  const d = b.useMemo(() => {
    const u = ye(n);
    return {
      store: n,
      subscription: u,
      getServerState: e ? () => e : void 0,
      stabilityCheck: a,
      noopCheck: t
    };
  }, [n, e, a, t]), s = b.useMemo(() => n.getState(), [n]);
  pe(() => {
    const {
      subscription: u
    } = d;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), s !== n.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [d, s]);
  const r = i || U;
  return /* @__PURE__ */ b.createElement(r.Provider, {
    value: d
  }, o);
}
function ve() {
  j(), I(), H(), V(), $(), G(), K(), q(), W(), z(), J(), Q(), Y(), Z();
}
function Ce(n) {
  const i = L("window/dark.boolean"), o = m.getOne("primary.background"), e = m.getOne("text.color"), a = m.getOne("bg.selection"), t = m.getOne("text.selection");
  f.useEffect(() => {
    if (i != null)
      return document.body.setAttribute("data-dark", i ? "true" : "false"), () => {
        document.body.removeAttribute("data-dark");
      };
  }, [i]), f.useEffect(() => {
    if (i == null)
      return;
    const s = document.createElement("meta");
    if (s.name = "theme-color", document.head.appendChild(s), o) {
      const r = g(i, o);
      s.content = r, document.body.style.backgroundColor = r;
    }
    return e && (document.body.style.color = g(i, e)), () => {
      s.remove();
    };
  }, [o, e, i]);
  const d = L("preferences/font.enum");
  f.useEffect(() => {
    if (d && (document.body.style.fontFamily = d), a && t) {
      const s = document.createElement("style");
      s.textContent = `
        ::selection {
          background: ${g(!!i, a)};
          color: ${g(!!i, t)};
        }
      `, document.head.append(s);
    }
    return () => {
    };
  }, [i, a, t, d]), f.useEffect(() => {
    function s() {
      p("local.isOnLine", navigator.onLine);
    }
    return s(), window.addEventListener("online", s), window.addEventListener("offline", s), () => {
      window.removeEventListener("online", s), window.removeEventListener("offline", s);
    };
  }, []), f.useEffect(() => {
    const s = (r) => {
      r.repeat || (c("Shift", r.getModifierState("Shift")), c("Alt", r.getModifierState("Alt")), c("Control", r.getModifierState("Control")), c("SymbolLock", r.getModifierState("SymbolLock")), c("AltGraph", r.getModifierState("AltGraph")), c("CapsLock", r.getModifierState("CapsLock")), c("Fn", r.getModifierState("Fn")), c("FnLock", r.getModifierState("FnLock")), c("Hyper", r.getModifierState("Hyper")), c("Meta", r.getModifierState("Meta")), c("NumLock", r.getModifierState("NumLock")), c("Super", r.getModifierState("Super")), c("ScrollLock", r.getModifierState("ScrollLock")), c("Symbol", r.getModifierState("Symbol")), c("Key", r.key));
    };
    return addEventListener("keydown", s), addEventListener("keyup", s), () => {
      removeEventListener("keydown", s), removeEventListener("keyup", s);
    };
  }, []);
}
var w, y = ue;
if (process.env.NODE_ENV === "production")
  w = y.createRoot, y.hydrateRoot;
else {
  var N = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  w = function(n, i) {
    N.usingClientEntryPoint = !0;
    try {
      return y.createRoot(n, i);
    } finally {
      N.usingClientEntryPoint = !1;
    }
  };
}
const { data: he } = ce, A = ({ render: n = /* @__PURE__ */ l(O, {}) }) => typeof n == "function" ? /* @__PURE__ */ l(n, {}) : n, xe = ({ props: n }) => {
  Ce(), ve(), X(), f.useEffect(() => {
    ee.setAll(
      Object.entries(he).map(([e, a]) => ({
        ...a,
        settingId: e,
        value: a.def
      }))
    );
  }, []);
  const i = te("env.isDev");
  f.useEffect(() => {
    var e;
    if (i)
      return window.store = T, window.execAction = ne, window.localDB = fe(), window.execCommand = ie, window.auth = (e = oe.server) == null ? void 0 : e.auth, () => {
        delete window.store, delete window.execAction, delete window.execCommand, delete window.localDB, delete window.auth;
      };
  }, [i]);
  const { status: o } = ae(async () => {
    var a;
    await k(n.timeLoading), p("env.isDev", n.isDev);
    let e = (a = n.onPrepare) == null ? void 0 : a.call(n);
    e instanceof Promise && (e = await e), e && (e.colors && await de(e.colors, async (t) => {
      await k(30), m.upsert([t]);
    }), e.translations && e.translations.map((t) => {
      re.upsert([t]);
    }), e.commands && e.commands.map(({ keys: t, ...d }) => {
      se(d, t);
    }), p("project", e));
  }, [n]);
  return f.useEffect(() => {
    o.set("idle");
  }, []), /* @__PURE__ */ x(O, { children: [
    ["ready", "idle", "loading"].includes(o.get) && /* @__PURE__ */ l(A, { render: n.loading }),
    o.get == "success" && /* @__PURE__ */ l(A, { render: n.app }),
    o.get == "error" && /* @__PURE__ */ l("div", { className: "flex justify-center items-center w-full h-full", children: /* @__PURE__ */ x(me, { className: "flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ l("h1", { className: "p-2 text-2xl text-center", children: /* @__PURE__ */ l(E, { content: "Found Problem , Try After Moment!" }) }),
      /* @__PURE__ */ l("div", { className: "p-2", children: /* @__PURE__ */ l(
        be,
        {
          onClick: () => {
            o.set("idle");
          },
          children: /* @__PURE__ */ l(E, { content: "Try Again" })
        }
      ) })
    ] }) })
  ] });
}, Te = async (n) => {
  const i = document.createElement("div");
  i.classList.add("window"), n = le(n, {
    loading: /* @__PURE__ */ l("div", { className: "top-1/2 left-1/2 fixed transform -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ l(F, { circleClassName: "w-[50px] h-[50px] border-4 " }) }),
    timeLoading: 500
  }), document.body.appendChild(i);
  const o = w(i);
  return o.render(
    /* @__PURE__ */ l(f.StrictMode, { children: /* @__PURE__ */ l(we, { store: T, children: /* @__PURE__ */ l(xe, { props: n }) }) })
  ), o;
};
export {
  Re as defineTable,
  Te as startApplication
};
