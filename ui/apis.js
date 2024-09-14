import { aX as d, aY as f, S as i, aZ as h, a3 as g, a0 as m } from "./index-YGVQf1XJ.mjs";
import { a_ as D } from "./index-YGVQf1XJ.mjs";
import { a2 as p, ag as b, ah as y, ai as v } from "./index-CxQCU1i7.mjs";
const u = (o, r = !1) => {
  const t = new URL(r ? "http://localhost:8888" : "https://water-fetch-account.netlify.app");
  return t.pathname = "/.netlify/functions/" + o, async (s) => await (await fetch(t.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(s)
  })).json();
}, E = () => new d("water-fetch-60a1af33-8997-5586-b817-f943d9b22d30"), w = u("generate-auth-url"), P = u("generate-payout-url"), C = async ({ place: o, ...r }) => {
  const { url: t } = await w(r);
  return new Promise(async (s, c) => {
    if (o == "frame") {
      const e = f(t);
      await p(1e3);
      const n = document.querySelector("#" + e);
      if (n) {
        const a = n.contentWindow, l = () => {
          s(), a == null || a.removeEventListener("close", l);
        };
        a == null || a.addEventListener("close", l);
      } else
        c("Cannot Access Frame");
    } else {
      const e = open(t, "_blank", "width=400,height=600,menubar=no,location=no,resizable=no,scrollbars=no,status=no,titlebar=no,toolbar=no,x=30,y=30"), n = () => {
        s(), e == null || e.removeEventListener("close", n);
      };
      e == null || e.addEventListener("close", n);
    }
  });
}, j = {
  solid: b,
  regular: y,
  brands: v
}, k = async (o) => {
  var t;
  if (!((t = i.server) != null && t.db))
    throw Error("Server is not initialized");
  return {
    ...(await h(g(m(i.server.db, "projects"), o))).data(),
    id: o
  };
};
export {
  i as Server,
  j as allIcons,
  D as firebaseConfig,
  w as generateAuthUrl,
  P as generatePayoutUrl,
  u as getFunction,
  E as getLocalDB,
  k as getProjectConfig,
  C as signInAccount
};
