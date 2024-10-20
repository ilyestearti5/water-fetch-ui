import { a as c, j as o, C as n, E as f } from "./SeparatedComponents-DfUPj3TY.mjs";
import { a0 as l, j as m, U as i, aR as x, a as w } from "./index-8xvo7Uwy.mjs";
import { Z as p } from "./index-Cep-AhVL.mjs";
import u from "react";
import { getUserFunction as j } from "./apis.js";
const U = ({ onAuthSuccess: t, successComponent: s = /* @__PURE__ */ o(f, {}) }) => {
  const r = new URLSearchParams(location.search).get("token"), e = l(), a = m(async () => {
    await p(1200), r && i.server && await x(i.server.auth, r);
  }, [r]);
  return u.useEffect(() => {
    e && (t == null || t(e));
  }, [e]), /* @__PURE__ */ c("div", { className: "flex justify-center items-center h-full", children: [
    a && /* @__PURE__ */ o(n, { circleClassName: "border-4 w-[50px] h-[50px]" }),
    e && (typeof s == "function" ? /* @__PURE__ */ o(s, { user: e }) : s)
  ] });
}, k = ({ onPayoutSuccess: t, successComponent: s = /* @__PURE__ */ o(f, {}) }) => {
  const r = new URLSearchParams(location.search).get("payout_id"), e = l(), a = w(null), y = m(async () => {
    if (await p(1200), r && e) {
      const { callback: d } = j("payout-get"), h = await d({
        payoutId: r
      });
      a.set(h);
    }
  }, [r, e]);
  return u.useEffect(() => {
    a.get && (t == null || t(a.get));
  }, [a.get]), /* @__PURE__ */ c("div", { className: "flex justify-center items-center h-full", children: [
    y && /* @__PURE__ */ o(n, { circleClassName: "border-4 w-[50px] h-[50px]" }),
    a.get && (typeof s == "function" ? /* @__PURE__ */ o(s, { payout: a.get }) : s)
  ] });
};
export {
  U as AuthRoute,
  k as PayoutRoute
};
