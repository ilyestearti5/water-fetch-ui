import { a as n, j as t, C as c, E as f } from "./Loading-BpV9p4sz.mjs";
import { Z as m, ad as l, S as o, aY as p } from "./index-a0LPp_Jl.mjs";
import d from "react";
import { a2 as h } from "./index-CxQCU1i7.mjs";
const v = ({ onAuthSuccess: e, successComponent: s = /* @__PURE__ */ t(f, {}) }) => {
  const r = new URLSearchParams(location.search).get("token"), a = m(), i = l(async () => {
    await h(1200), r && o.server && await p(o.server.auth, r);
  }, [r]);
  return d.useEffect(() => {
    a && (e == null || e(a));
  }, [a]), /* @__PURE__ */ n("div", { className: "flex justify-center items-center h-full", children: [
    i && /* @__PURE__ */ t(c, { circleClassName: "border-4 w-[50px] h-[50px]" }),
    a && (typeof s == "function" ? /* @__PURE__ */ t(s, { user: a }) : s)
  ] });
};
export {
  v as AuthRoute
};
