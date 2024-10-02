import { a as n, j as o, C as c, E as f } from "./PinFeild-d2tlp-XL.mjs";
import { Z as m, a7 as l, S as i, aQ as w, b as x } from "./index-B28S0mrD.mjs";
import { a1 as p } from "./index-CYYSxI_0.mjs";
import u from "react";
import { getFunction as j } from "./apis.js";
const N = ({ onAuthSuccess: a, successComponent: s = /* @__PURE__ */ o(f, {}) }) => {
  const r = new URLSearchParams(location.search).get("token"), e = m(), t = l(async () => {
    await p(1200), r && i.server && await w(i.server.auth, r);
  }, [r]);
  return u.useEffect(() => {
    e && (a == null || a(e));
  }, [e]), /* @__PURE__ */ n("div", { className: "flex justify-center items-center h-full", children: [
    t && /* @__PURE__ */ o(c, { circleClassName: "border-4 w-[50px] h-[50px]" }),
    e && (typeof s == "function" ? /* @__PURE__ */ o(s, { user: e }) : s)
  ] });
}, k = j("payout-get"), P = ({ onPayoutSuccess: a, successComponent: s = /* @__PURE__ */ o(f, {}) }) => {
  const r = new URLSearchParams(location.search).get("payout_id"), e = m(), t = x(null), d = l(async () => {
    if (await p(1200), r && e) {
      const y = await e.getIdToken(!0), h = await k({
        payoutId: r,
        userToken: y
      });
      t.set(h);
    }
  }, [r, e]);
  return u.useEffect(() => {
    t.get && (a == null || a(t.get));
  }, [t.get]), /* @__PURE__ */ n("div", { className: "flex justify-center items-center h-full", children: [
    d && /* @__PURE__ */ o(c, { circleClassName: "border-4 w-[50px] h-[50px]" }),
    t.get && (typeof s == "function" ? /* @__PURE__ */ o(s, { payout: t.get }) : s)
  ] });
};
export {
  N as AuthRoute,
  P as PayoutRoute
};
