import { a as h, j as r, I as o } from "./SeparatedComponents-BcE_KymC.mjs";
import j from "react";
import { u as S, a as p, h as C } from "./index-BxYKyuvy.mjs";
import { m as v, t as z, r as N, a0 as F } from "./index-DdFCMvT_.mjs";
function G({
  children: d,
  leftIcon: f,
  rightIcon: i,
  topIcon: u,
  bottomIcon: B,
  className: I,
  icon: _,
  style: w,
  iconClassName: a,
  onPointerDown: m,
  onPointerLeave: n,
  onPointerUp: b,
  onMouseEnter: g,
  onMouseLeave: y,
  ...l
}) {
  const c = S(), s = p(!1), t = p(!1), x = p(!1);
  j.useEffect(() => () => {
    s.set(!1), t.set(!1), x.set(!1);
  }, []);
  const k = j.useMemo(() => ({
    ...c(
      "primary",
      l["aria-disabled"] && "gray.opacity",
      !l["aria-disabled"] && {
        color: "primary.content"
      },
      (t.get || s.get) && {
        boxShadow: C([
          {
            colorId: "shadow.color",
            blur: 4,
            size: 1,
            x: 0,
            y: 2
          }
        ])
      }
    ),
    ...w
  }), [c, l, s.get, C, w, t.get]);
  return /* @__PURE__ */ h(
    "button",
    {
      onFocus: () => {
        s.set(!0);
      },
      onBlur: () => {
        s.set(!1);
      },
      onMouseEnter: (e) => {
        x.set(!0), g == null || g(e);
      },
      onMouseLeave: (e) => {
        x.set(!1), y == null || y(e);
      },
      onPointerDown: (e) => {
        t.set(!0), m == null || m(e);
      },
      onPointerUp: (e) => {
        t.set(!1), b == null || b(e);
      },
      onPointerLeave: (e) => {
        t.set(!1), n == null || n(e);
      },
      type: "button",
      style: {
        ...c("primary"),
        ...v(k)
      },
      className: z("btn rounded-md cursor-pointer w-full px-3 py-2 relative capitalize overflow-hidden transition-[transform,box-shadow] active:scale-95", I),
      ...l,
      children: [
        N(1, 3).map((e) => /* @__PURE__ */ r(
          "i",
          {
            className: "btn_bg",
            style: {
              ...c("opacity")
            }
          },
          e
        )),
        /* @__PURE__ */ h("div", { className: "flex flex-col flex-none justify-center items-center gap-2 btn-content", children: [
          /* @__PURE__ */ r(o, { iconClassName: a, icon: u }),
          /* @__PURE__ */ h("div", { className: "flex justify-center items-center gap-2", children: [
            /* @__PURE__ */ r(o, { iconClassName: a, icon: f || _ }),
            d,
            /* @__PURE__ */ r(o, { iconClassName: a, icon: i })
          ] }),
          /* @__PURE__ */ r(o, { iconClassName: a, icon: B })
        ] })
      ]
    }
  );
}
const H = ({ className: d, style: f, ...i }) => {
  const u = S();
  return /* @__PURE__ */ r(
    "div",
    {
      ...i,
      className: F("flex flex-col shadow-lg border border-transparent border-solid rounded-2xl w-1/2", d),
      style: {
        ...u({
          backgroundColor: "secondary.background",
          borderColor: "borders"
        }),
        ...f
      }
    }
  );
};
export {
  G as B,
  H as C
};
