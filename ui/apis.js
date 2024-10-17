import { ap as g, U as i, aX as b, aY as d, aZ as h, a_ as w, aa as p } from "./index-8xvo7Uwy.mjs";
import { a$ as z } from "./index-8xvo7Uwy.mjs";
import { Z as m, ag as y, ah as k, ai as S } from "./index-Cep-AhVL.mjs";
const f = (t, n = g("env.isDev")) => {
  n = n ?? !1;
  const e = new AbortController(), r = e.signal, o = new URL(n ? "http://localhost:8888" : "https://water-fetch-account.netlify.app");
  return o.pathname = "/.netlify/functions/" + t, {
    callback: async (a) => await (await fetch(o.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(a),
      signal: r
    })).json(),
    signal: r,
    controller: e
  };
}, U = (t, n) => {
  const { callback: e, signal: r, controller: o } = f(t, n);
  return {
    signal: r,
    controller: o,
    callback: async (s) => {
      var l, u;
      const a = (u = (l = i.server) == null ? void 0 : l.auth.currentUser) == null ? void 0 : u.getIdToken();
      let c = null;
      return a instanceof Promise && (c = await a), await e({
        data: s,
        token: c
      });
    }
  };
}, C = () => new b("water-fetch-60a1af33-8997-5586-b817-f943d9b22d30"), v = async (t) => {
  const { callback: n } = f("generate-auth-url", t.isDev);
  return await n(t);
}, F = async ({ place: t, ...n }) => {
  const { url: e } = await v(n);
  await m(1e3), t == "frame" ? d(e) : t == "window" ? open(e, "_blank", "width=400,height=600,menubar=no,location=no,resizable=no,scrollbars=no,status=no,titlebar=no,toolbar=no,x=30,y=30") : location.href = e;
}, T = {
  solid: y,
  regular: k,
  brands: S
}, j = async (t) => {
  var e;
  if (!((e = i.server) != null && e.db))
    throw "Server is not initialized";
  return {
    ...(await h(w(p(i.server.db, "projects"), t))).data(),
    id: t
  };
};
function x(t, n, e, r = 0) {
  let o = {};
  for (let s in n) {
    let a = r;
    o[s] = t(n[s], () => {
      if (a) {
        a--;
        return;
      }
      e(s);
    });
  }
  return o;
}
export {
  i as Server,
  T as allIcons,
  z as firebaseConfig,
  v as generateAuthUrl,
  f as getFunction,
  C as getLocalDB,
  j as getProjectConfig,
  U as getUserFunction,
  x as onManySnaping,
  F as signInAccount
};
