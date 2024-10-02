import { aq as s, aW as c, aX as i, S as o, aY as l, aZ as u, a0 as f } from "./index-B28S0mrD.mjs";
import { a_ as T } from "./index-B28S0mrD.mjs";
import { a1 as d, ac as h, ad as g, ae as p } from "./index-CYYSxI_0.mjs";
const n = (t, a = s("env.isDev")) => {
  a = a ?? !1;
  const e = new URL(a ? "http://localhost:8888" : "https://water-fetch-account.netlify.app");
  return e.pathname = "/.netlify/functions/" + t, async (r) => await (await fetch(e.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(r)
  })).json();
}, v = () => new c("water-fetch-60a1af33-8997-5586-b817-f943d9b22d30"), b = n("generate-auth-url"), I = n("generate-payout-url"), P = async ({ place: t, ...a }) => {
  const { url: e } = await b(a);
  await d(1e3), t == "frame" ? i(e) : t == "window" ? open(e, "_blank", "width=400,height=600,menubar=no,location=no,resizable=no,scrollbars=no,status=no,titlebar=no,toolbar=no,x=30,y=30") : location.href = e;
}, j = {
  solid: h,
  regular: g,
  brands: p
}, x = async (t) => {
  var e;
  if (!((e = o.server) != null && e.db))
    throw Error("Server is not initialized");
  return {
    ...(await l(u(f(o.server.db, "projects"), t))).data(),
    id: t
  };
};
export {
  o as Server,
  j as allIcons,
  T as firebaseConfig,
  b as generateAuthUrl,
  I as generatePayoutUrl,
  n as getFunction,
  v as getLocalDB,
  x as getProjectConfig,
  P as signInAccount
};
