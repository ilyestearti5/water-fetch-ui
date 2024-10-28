import { aY as w, T as l, aZ as h, a_ as d, aa as g, ap as b, a$ as p } from "./index-BxYKyuvy.mjs";
import { b1 as D, b0 as B } from "./index-BxYKyuvy.mjs";
import { Z as m, ag as y, ah as k, ai as S } from "./index-DdFCMvT_.mjs";
async function v(t) {
  const { callback: n } = u("generate-auth-url", t.isDev);
  return await n(t);
}
async function P({ place: t, ...n }) {
  const { url: e } = await v(n);
  if (await m(1e3), t == "frame")
    w(e);
  else if (t == "window") {
    const r = (window.innerWidth - 600) / 2 + window.screenX, o = (window.innerHeight - 400) / 2 + window.screenY;
    window.open(e, "_blank", `width=600,height=400,left=${r},top=${o}`);
  } else
    location.href = e;
}
async function T(t) {
  var e;
  if (!((e = l.server) != null && e.db))
    throw "Server is not initialized";
  return {
    ...(await h(d(g(l.server.db, "projects"), t))).data(),
    id: t
  };
}
function $(t, n, e, i = 0) {
  let a = {};
  for (let r in n) {
    let o = i;
    a[r] = t(n[r], () => {
      if (o) {
        o--;
        return;
      }
      e(r);
    });
  }
  return a;
}
function u(t, n = b("env.isDev")) {
  n = n ?? !1;
  const e = new AbortController(), i = e.signal, a = new URL(n ? "http://localhost:8888" : "https://water-fetch-account.netlify.app");
  return a.pathname = "/.netlify/functions/" + t, {
    callback: async (o) => {
      const s = await fetch(a.toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(o),
        signal: i
      });
      if (!s.ok)
        throw await s.text();
      return await s.json();
    },
    signal: i,
    controller: e
  };
}
function F(t, n) {
  const { callback: e, signal: i, controller: a } = u(t, n);
  return {
    signal: i,
    controller: a,
    callback: async (r) => {
      var c, f;
      const o = (f = (c = l.server) == null ? void 0 : c.auth.currentUser) == null ? void 0 : f.getIdToken();
      let s = null;
      return o instanceof Promise && (s = await o), await e({
        data: r,
        token: s
      });
    }
  };
}
function U() {
  return new p("water-fetch-60a1af33-8997-5586-b817-f943d9b22d30");
}
const j = {
  solid: y,
  regular: k,
  brands: S
};
export {
  D as Cloud,
  l as Server,
  j as allIcons,
  B as firebaseConfig,
  v as generateAuthUrl,
  u as getFunction,
  U as getLocalDB,
  T as getProjectConfig,
  F as getUserFunction,
  $ as onManySnaping,
  P as signInAccount
};
