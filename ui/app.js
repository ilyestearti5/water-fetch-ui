import { j as d, C as R, a as A, E as I } from "./Loading-BpV9p4sz.mjs";
import * as b from "react";
import f from "react";
import { aC as U, aD as M, aE as T, aF as F, aG as P, aH as $, aI as j, aJ as B, aK as H, aL as V, aM as W, aN as q, aO as K, aP as G, aQ as J, aR as Q, a as w, ap as m, aq as g, q as Y, k as z, aS as X, M as Z, _ as ee, s as h, ag as te, ad as ne, aT as se } from "./index-a0LPp_Jl.mjs";
import ie from "react-dom";
import { a2 as C, ar as x } from "./index-CxQCU1i7.mjs";
import { getLocalDB as oe } from "./apis.js";
function ae() {
  const e = U();
  let o = null, a = null;
  return {
    clear() {
      o = null, a = null;
    },
    notify() {
      e(() => {
        let t = o;
        for (; t; )
          t.callback(), t = t.next;
      });
    },
    get() {
      let t = [], i = o;
      for (; i; )
        t.push(i), i = i.next;
      return t;
    },
    subscribe(t) {
      let i = !0, n = a = {
        callback: t,
        next: null,
        prev: a
      };
      return n.prev ? n.prev.next = n : o = n, function() {
        !i || o === null || (i = !1, n.next ? n.next.prev = n.prev : a = n.prev, n.prev ? n.prev.next = n.next : o = n.next);
      };
    }
  };
}
const L = {
  notify() {
  },
  get: () => []
};
function re(e, o) {
  let a, t = L, i = 0, n = !1;
  function r(D) {
    u();
    const N = t.subscribe(D);
    let E = !1;
    return () => {
      E || (E = !0, N(), S());
    };
  }
  function c() {
    t.notify();
  }
  function l() {
    y.onStateChange && y.onStateChange();
  }
  function s() {
    return n;
  }
  function u() {
    i++, a || (a = e.subscribe(l), t = ae());
  }
  function S() {
    i--, a && i === 0 && (a(), a = void 0, t.clear(), t = L);
  }
  function O() {
    n || (n = !0, u());
  }
  function k() {
    n && (n = !1, S());
  }
  const y = {
    addNestedSub: r,
    notifyNestedSubs: c,
    handleChangeWrapper: l,
    isSubscribed: s,
    trySubscribe: O,
    tryUnsubscribe: k,
    getListeners: () => t
  };
  return y;
}
const ce = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", le = ce ? b.useLayoutEffect : b.useEffect;
function ue({
  store: e,
  context: o,
  children: a,
  serverState: t,
  stabilityCheck: i = "once",
  noopCheck: n = "once"
}) {
  const r = b.useMemo(() => {
    const s = re(e);
    return {
      store: e,
      subscription: s,
      getServerState: t ? () => t : void 0,
      stabilityCheck: i,
      noopCheck: n
    };
  }, [e, t, i, n]), c = b.useMemo(() => e.getState(), [e]);
  le(() => {
    const {
      subscription: s
    } = r;
    return s.onStateChange = s.notifyNestedSubs, s.trySubscribe(), c !== e.getState() && s.notifyNestedSubs(), () => {
      s.tryUnsubscribe(), s.onStateChange = void 0;
    };
  }, [r, c]);
  const l = o || M;
  return /* @__PURE__ */ b.createElement(l.Provider, {
    value: r
  }, a);
}
var v, p = ie;
if (process.env.NODE_ENV === "production")
  v = p.createRoot, p.hydrateRoot;
else {
  var _ = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  v = function(e, o) {
    _.usingClientEntryPoint = !0;
    try {
      return p.createRoot(e, o);
    } finally {
      _.usingClientEntryPoint = !1;
    }
  };
}
function fe() {
  T(), F(), P(), $(), j(), B(), H(), V(), W(), q(), K(), G(), J(), Q();
}
function de() {
  const e = w("window/dark.boolean"), o = m.getOne("primary.background"), a = m.getOne("text.color"), t = m.getOne("bg.selection"), i = m.getOne("text.selection");
  f.useEffect(() => {
    if (e != null)
      return document.body.setAttribute("data-dark", e ? "true" : "false"), () => {
        document.body.removeAttribute("data-dark");
      };
  }, [e]), f.useEffect(() => {
    e != null && (o && (document.body.style.backgroundColor = g(e, o)), a && (document.body.style.color = g(e, a)));
  }, [o, a, e]);
  const n = w("preferences/font.enum");
  f.useEffect(() => {
    if (n && (document.body.style.fontFamily = n), t && i) {
      const r = document.createElement("style");
      r.textContent = `
        ::selection {
          background: ${g(!!e, t)};
          color: ${g(!!e, i)};
        }
      `, document.head.append(r);
    }
    return () => {
    };
  }, [e, t, i, n]);
}
function be() {
  f.useEffect(() => {
    function e() {
      Y("local.isOnLine", navigator.onLine);
    }
    return e(), window.addEventListener("online", e), window.addEventListener("offline", e), () => {
      window.removeEventListener("online", e), window.removeEventListener("offline", e);
    };
  }, []);
}
function me(e) {
  de(), be();
}
const { data: ge } = se, pe = ({ element: e, loading: o, timeLoading: a = 500 }) => {
  me(), fe(), X();
  const t = f.useMemo(() => oe(), []), i = Z(), { status: n } = ee(async () => {
    await C(a);
    let r = [], c = [];
    const l = await t.allDocs({
      include_docs: !0
    });
    l.rows.filter(({ id: s }) => s.startsWith("settings-")).forEach(({ doc: s, id: u }) => {
      s && r.push([u.replace("settings-", ""), s.value]);
    }), l.rows.filter(({ id: s }) => s.startsWith("langs-")).forEach(({ doc: s, id: u }) => {
      s && typeof s.value == "string" && c.push([u.replace("langs-", ""), s.value]);
    }), r.forEach(([s, u]) => {
      h.setOneFeild(s, "value", u);
    }), c.forEach(([s, u]) => {
      te.setOneFeild(s, "value", u);
    });
  }, [t, a]);
  return f.useEffect(() => {
    n.get != "success" && n.set("idle");
  }, [n.get, t]), ne(async () => {
    if (n.get == "success") {
      await C(1e3);
      const r = await t.allDocs();
      await x(r.rows, async (c) => {
        await t.remove(c.id, c.value.rev);
      }), await x(i, async (c) => {
        const l = `settings-${c.settingId}`;
        await t.upsert(l, () => ({
          value: c.value
        }));
      });
    }
  }, [i, t, n.get]), f.useEffect(() => {
    h.setAll(
      Object.entries(ge).map(([r, { def: c, ...l }]) => ({
        ...l,
        settingId: r,
        def: c,
        value: c
      }))
    );
  }, []), /* @__PURE__ */ A(I, { children: [
    ["ready", "idle", "loading"].includes(n.get) && o,
    n.get == "success" && e
  ] });
}, Ce = async (e, o = /* @__PURE__ */ d("div", { className: "top-1/2 left-1/2 fixed transform -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ d(R, { circleClassName: "w-[50px] h-[50px] border-4 " }) }), a = 500) => {
  const t = document.createElement("div");
  t.classList.add("window"), document.body.appendChild(t);
  const i = v(t);
  return i.render(
    /* @__PURE__ */ d(f.StrictMode, { children: /* @__PURE__ */ d(ue, { store: z, children: /* @__PURE__ */ d(pe, { timeLoading: a, element: typeof e == "function" ? /* @__PURE__ */ d(e, {}) : e, loading: typeof o == "function" ? /* @__PURE__ */ d(o, {}) : o }) }) })
  ), i;
};
export {
  Ce as startApplication
};
