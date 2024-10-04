import { ao as b, S as i, aV as d, aW as g, aX as h, aY as w, a9 as p } from "./index-D4efwQAm.mjs";
import { aZ as B } from "./index-D4efwQAm.mjs";
import { a0 as m, ab as y, ac as k, ad as S } from "./index-BclG5w1X.mjs";
const f = (e, n = b("env.isDev")) => {
  n = n ?? !1;
  const t = new AbortController(), r = t.signal, o = new URL(n ? "http://localhost:8888" : "https://water-fetch-account.netlify.app");
  return o.pathname = "/.netlify/functions/" + e, {
    callback: async (a) => await (await fetch(o.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(a),
      signal: r
    })).json(),
    signal: r,
    controller: t
  };
}, C = (e, n) => {
  const { callback: t, signal: r, controller: o } = f(e, n);
  return {
    signal: r,
    controller: o,
    callback: async (s) => {
      var l, u;
      const a = (u = (l = i.server) == null ? void 0 : l.auth.currentUser) == null ? void 0 : u.getIdToken();
      let c = null;
      return a instanceof Promise && (c = await a), await t({
        data: s,
        token: c
      });
    }
  };
}, F = () => new d("water-fetch-60a1af33-8997-5586-b817-f943d9b22d30"), { callback: v } = f("generate-auth-url"), T = async ({ place: e, ...n }) => {
  const { url: t } = await v(n);
  await m(1e3), e == "frame" ? g(t) : e == "window" ? open(t, "_blank", "width=400,height=600,menubar=no,location=no,resizable=no,scrollbars=no,status=no,titlebar=no,toolbar=no,x=30,y=30") : location.href = t;
}, U = {
  solid: y,
  regular: k,
  brands: S
}, j = async (e) => {
  var t;
  if (!((t = i.server) != null && t.db))
    throw "Server is not initialized";
  return {
    ...(await h(w(p(i.server.db, "projects"), e))).data(),
    id: e
  };
};
function x(e, n, t, r = 0) {
  let o = {};
  for (let s in n) {
    let a = r;
    o[s] = e(n[s], () => {
      if (a) {
        a--;
        return;
      }
      t(s);
    });
  }
  return o;
}
export {
  i as Server,
  U as allIcons,
  B as firebaseConfig,
  v as generateAuthUrl,
  f as getFunction,
  F as getLocalDB,
  j as getProjectConfig,
  C as getUserFunction,
  x as onManySnaping,
  T as signInAccount
};
