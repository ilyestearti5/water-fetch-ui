import { a as p, j as y, I } from "./PinFeild-i5ZgTbAA.mjs";
import h from "react";
import { u as C, b as g, c as x } from "./index-D4efwQAm.mjs";
import { m as N, t as S, r as _, a3 as B } from "./index-BclG5w1X.mjs";
function O({ children: c, className: o, icon: d, style: s, iconClassName: w, onPointerDown: f, onPointerLeave: u, onPointerUp: i, onMouseEnter: m, onMouseLeave: b, ...a }) {
  const l = C(), r = g(!1), t = g(!1), n = g(!1);
  h.useEffect(() => () => {
    r.set(!1), t.set(!1), n.set(!1);
  }, []);
  const j = h.useMemo(() => ({
    ...l(
      "primary",
      a["aria-disabled"] && "gray.opacity",
      !a["aria-disabled"] && {
        color: "primary.content"
      },
      r.get && {
        boxShadow: x([
          {
            colorId: "shadow.color",
            isInset: !0,
            blur: 1
          }
        ])
      }
    ),
    ...s
  }), [l, a, r.get, x, s, t.get]);
  return /* @__PURE__ */ p(
    "button",
    {
      onFocus: () => {
        r.set(!0);
      },
      onBlur: () => {
        r.set(!1);
      },
      onMouseEnter: (e) => {
        n.set(!0), m == null || m(e);
      },
      onMouseLeave: (e) => {
        n.set(!1), b == null || b(e);
      },
      onPointerDown: (e) => {
        t.set(!0), f == null || f(e);
      },
      onPointerUp: (e) => {
        t.set(!1), i == null || i(e);
      },
      onPointerLeave: (e) => {
        t.set(!1), u == null || u(e);
      },
      type: "button",
      style: {
        ...l("primary"),
        ...N(j)
      },
      className: S("btn rounded-md cursor-pointer w-full px-3 py-2 relative capitalize overflow-hidden transition-[transform] active:scale-95", o),
      ...a,
      children: [
        /* @__PURE__ */ p("div", { className: "flex justify-center items-center gap-2 btn-content", children: [
          /* @__PURE__ */ y(I, { iconClassName: w, icon: d }),
          c
        ] }),
        _(1, 3).map((e) => /* @__PURE__ */ y(
          "i",
          {
            className: "btn__bg",
            style: {
              ...l("opacity")
            }
          },
          e
        ))
      ]
    }
  );
}
const R = ({ className: c, style: o, ...d }) => {
  const s = C();
  return /* @__PURE__ */ y(
    "div",
    {
      ...d,
      className: B("flex flex-col shadow-lg border border-transparent border-solid rounded-2xl w-1/2", c),
      style: {
        ...s({
          backgroundColor: "secondary.background",
          borderColor: "borders"
        }),
        ...o
      }
    }
  );
};
export {
  O as B,
  R as C
};
