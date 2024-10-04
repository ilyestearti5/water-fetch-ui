import { j as e, u as ne, a as i, L as C, C as Se, E as Y, T as L, F as Q, k as N, S as D, I as et, e as Nt, c as Me, f as tt, g as Ct, b as zt, P as kt, J as nt, A as Fe, d as It } from "./PinFeild-i5ZgTbAA.mjs";
import { g as xe, d as U, u as x, i as st, j as St, k as ot, t as Mt, l as Ft, m as W, a as z, n as jt, s as S, o as rt, p as se, e as oe, f as T, q as E, r as B, h as at, v as J, w as ve, x as Et, b as w, y as it, z as Z, c as $, A as je, B as Lt, C as Bt, D as G, E as Dt, F as me, G as Tt, H as R, I as pe, J as Ot, K as re, L as lt, M as Qt, N as Ne, O as ct, P as Ue, Q as Ht, S as M, R as F, T as Ut, U as Vt, V as Ve, W as Re, X as Rt, Y as Kt, Z as dt, _ as Wt, $ as Xt, a0 as Gt, a1 as Ke, a2 as Yt, a3 as we, a4 as Zt, a5 as ee, a6 as qt, a7 as Jt, a8 as $t, a9 as _t, aa as en, ab as tn } from "./index-D4efwQAm.mjs";
import { p as H, e as nn, F as le, f as sn, T as j, v as on, h as Ee, K as ge, C as K, u as Ae, t as rn, L as ce, M as de, z as an, V as ft, i as ln, d as cn, m as dn, n as mt, B as ut, A as fn, E as mn, O as un, S as vn, N as hn, a as pn, P as gn, D as An, R as yn, b as bn, I as xn, q as Ce, l as vt, c as wn, j as Pn, G as We, y as Nn } from "./Tabs-BH9QqYNv.mjs";
import u, { useState as ze, useEffect as Cn } from "react";
import { h as ae, m as q, i as fe, s as I, t as A, j as Le, k as ye, l as be, e as V, n as Be, g as ht, D as zn, o as kn, p as De, q as In, u as pt, v as Sn, w as Te, x as Oe, y as Mn, z as gt, A as he, B as Fn, C as At, E as yt, F as jn, G as bt, H as En, I as Xe, J as Ln, K as Qe, L as Bn, M as Dn, N as Tn, O as On, P as Qn, Q as Hn, R as Un, T as Vn, U as Rn, S as Kn, V as Wn, W as Xn, X as Gn, Y as ke, Z as Yn, _ as Zn, $ as qn, a0 as Jn, a1 as $n, r as Ie, a2 as _n } from "./index-BclG5w1X.mjs";
import { allIcons as He } from "./apis.js";
import { B as X, C as ie } from "./Card-Bgu-Prmj.mjs";
function es() {
  const t = xe.getTemp("type"), n = xe.getTemp("id");
  return U(
    "camera-take",
    () => {
      if (n && t == "take") {
        const s = document.querySelector("#camera-view  video");
        if (!s)
          return;
        const a = document.createElement("canvas");
        a.width = s.videoWidth, a.height = s.videoHeight;
        const o = a.getContext("2d");
        o == null || o.drawImage(s, 0, 0, a.width, a.height);
        const r = a.toDataURL("image/jpeg");
        xe.setTemp("result", r);
      }
    },
    [t, n]
  ), /* @__PURE__ */ e(H, { hidden: !n, children: /* @__PURE__ */ e(nn, {}) });
}
function ts() {
  const [t] = ne("press ? for help");
  return /* @__PURE__ */ e(le, { "aria-multiline": !1, placeholder: `${t} 😊`, inputName: "findCommand" });
}
function ns() {
  const t = x(), n = st(), s = St(), a = u.useMemo(() => {
    const v = ot.getState();
    return s.map((y) => ({
      command: y,
      keys: ae.join(y, n, "commandId->command")
    })).filter((y) => y.keys.filter((b) => {
      if (!b.when)
        return !0;
      try {
        return Mt(b.when)({
          state: v,
          focused: null
        });
      } catch {
        return !1;
      }
    }).length || !y.keys.length);
  }, [n, s]), o = Ft(), r = W("commandId"), l = z("commands/enum/prefixes.object"), d = W("commands.isLoading"), c = jt.getAll(), h = u.useMemo(() => {
    const v = Object.entries(l || {}).map(([f, b]) => ({
      key: f,
      settingKey: `${b}.enum`,
      value: b
    })), y = {};
    return ae.fullJoinOne(v, o, "settingKey->settingId").forEach(({ data: f, joinTo: b }) => {
      var P, k;
      y[f.key] = {
        lines: (k = (P = b == null ? void 0 : b.config) == null ? void 0 : P.list) == null ? void 0 : k.map(({ value: O, content: _ }) => ({
          id: O,
          content: _,
          checked: (b == null ? void 0 : b.value) == O
        })),
        // desc: "commands/enum/prefixes.object"
        onSubmit(O) {
          S.setOneFeild(f.settingKey, "value", O.id);
        }
      };
    }), q(
      {
        commands: {
          lines: a.map(({ command: f, keys: b }) => ({
            content: f.label || f.commandId,
            keyPanding: b.map(({ value: P }) => P),
            id: f.commandId
          })),
          onSubmit(f) {
            rt(f.id);
          }
        },
        settings: {
          lines: o.map(({ name: f, settingId: b, desc: P }) => ({
            id: b,
            tools: [],
            content: f || b,
            sub: P
          })),
          onSubmit(f) {
            se(f.id);
          }
        },
        actions: {
          lines: c.map(({ actionId: f, status: b }) => ({
            content: `${fe(f.replaceAll(/[^a-z0-9A-Z]/gi, " ").replaceAll(/ +/gi, " "), void 0, "normal")} ${b == "loading" ? "[running...]" : ""}`,
            id: f
          })),
          onSubmit(f) {
            f.id && oe(f.id);
          }
        }
      },
      y
    );
  }, [a, o, l, c]), p = T.getOneFeild("findCommand", "value"), m = u.useMemo(() => !!(p != null && p.match(/^ *\?/)), [p]), g = u.useMemo(() => q(
    m && {
      help: {
        lines: Object.entries(h).map(([v]) => ({
          id: v,
          content: v
        })),
        onSubmit(v) {
          E("commandId", v.id);
        }
      }
    },
    !m && h
  ), [h, p, m]);
  return u.useEffect(() => {
    r && m && E("commandId", "help");
  }, [r, p, m]), u.useEffect(() => {
    B.setOneFeild("cmds/list", "focused", 0);
  }, [p]), /* @__PURE__ */ e(
    H,
    {
      onLoadContent: () => {
        I("findCommand");
      },
      onPointerDown: (v) => {
        v.currentTarget == v.target && E("commandId", null);
      },
      hidden: !r,
      children: /* @__PURE__ */ i(
        "div",
        {
          style: {
            ...t({
              backgroundColor: "secondary.background",
              borderColor: "borders"
            })
          },
          className: A("absolute top-[37px] left-1/2 rounded-xl transform -translate-x-1/2 w-[max(50vw,400px)] shadow-lg border border-solid border-transparent overflow-hidden"),
          children: [
            /* @__PURE__ */ i(
              "div",
              {
                className: "transition-[height]",
                style: q(
                  r && {
                    height: "40px"
                  },
                  !r && {
                    height: "0px"
                  }
                ),
                children: [
                  /* @__PURE__ */ e(
                    "div",
                    {
                      className: "p-2 text-center uppercase",
                      style: {
                        ...t({
                          background: at("to right", "gray.opacity", "transparent", "gray.opacity")
                        })
                      },
                      children: r
                    }
                  ),
                  /* @__PURE__ */ e(C, {})
                ]
              }
            ),
            /* @__PURE__ */ i(
              "div",
              {
                className: "flex justify-between items-center gap-3 p-2",
                onClick: () => {
                  I("findCommand");
                },
                children: [
                  /* @__PURE__ */ e(ts, {}),
                  d && /* @__PURE__ */ e(Se, {})
                ]
              }
            ),
            /* @__PURE__ */ e(C, {}),
            /* @__PURE__ */ e(sn, { data: g })
          ]
        }
      )
    }
  );
}
function ss() {
  const t = W("dev.html.hoverPosition"), n = x();
  return /* @__PURE__ */ e(Y, { children: t && /* @__PURE__ */ e(
    "div",
    {
      className: A(`
            z-[100000000000000000000000000000000000000000]
            fixed
            pointer-events-none
            transition-[width,left,height,top]
            duration-75
          `),
      style: {
        ...n("htmlContentHover"),
        left: `${t.x}px`,
        top: `${t.y}px`,
        width: `${t.width}px`,
        height: `${t.height}px`
      }
    }
  ) });
}
function os() {
  const t = J.getOneFeild("settings", "focused"), n = ve.getTemp("config"), s = T.getOneFeild("findConfigurations", "value");
  Et("findConfigurations");
  const a = x(), o = W("configurations.found.length"), r = u.useMemo(() => fe(t || "no settings focused", "camel", "normal"), [t]), [l] = ne(`search ${r} in list`), [d] = ne(r), c = w(!1), h = T.getOneFeild("findConfigurations-local", "value");
  return it(
    () => {
      typeof h == "string" && T.setOneFeild("findConfigurations", "value", h);
    },
    [h],
    500
  ), /* @__PURE__ */ e(
    "div",
    {
      className: "p-2 border-transparent border-b border-solid",
      onClick: () => {
        I("findConfigurations");
      },
      children: /* @__PURE__ */ i("div", { className: "relative w-full", children: [
        /* @__PURE__ */ e(
          le,
          {
            selectWhenFocusIn: !0,
            inputName: "findConfigurations-local",
            placeholder: l,
            propositions: (t == "user" ? ["id", "name", "changed"] : t == "keyboardShortcuts" ? ["key", "label", "commandId"] : []).map((p) => `@${p}`).filter((p) => !(s != null && s.includes(p))),
            tabIndex: n ? -1 : 1
          }
        ),
        /* @__PURE__ */ e("div", { className: "top-1/2 right-2 absolute flex items-center gap-2 -translate-y-1/2", children: !!s && /* @__PURE__ */ e(
          j,
          {
            title: "clear",
            onClick: () => {
              T.setOneFeild("findConfigurations-local", "value", "");
            },
            onMouseEnter: () => {
              c.set(!0);
            },
            onMouseLeave: () => {
              c.set(!1);
            },
            children: /* @__PURE__ */ i(
              "div",
              {
                className: "px-2 py-1 rounded-sm cursor-pointer",
                style: {
                  ...a("primary", {
                    color: "primary.content"
                  })
                },
                children: [
                  /* @__PURE__ */ i("span", { children: [
                    /* @__PURE__ */ e(L, { content: "found" }),
                    " ",
                    o,
                    " ",
                    /* @__PURE__ */ e(L, { content: d })
                  ] }),
                  c.get && /* @__PURE__ */ i("span", { children: [
                    " ",
                    "(",
                    /* @__PURE__ */ e(L, { content: "Delete" }),
                    ")"
                  ] })
                ]
              }
            )
          }
        ) })
      ] })
    }
  );
}
const Ge = "visibility/header.boolean";
function Gs({ children: t }) {
  const n = z(Ge), s = w(!1), a = Z("Shift");
  u.useEffect(() => {
    const c = (h) => {
      const p = h.x * 100 / innerWidth;
      s.set(h.y <= 100 && be(25, p, 75));
    };
    return document.addEventListener("mousemove", c), () => document.removeEventListener("mousemove", c);
  }, []);
  const o = x(), r = W("window.isFocused"), l = z("preferences/animation.boolean"), d = u.useMemo(() => o(r ? "primary.background" : "secondary.background", {
    borderColor: "borders",
    boxShadow: $([
      {
        blur: 10,
        x: 0,
        y: 3,
        size: 0,
        colorId: "shadow.color"
      }
    ])
  }), [o, r]);
  return /* @__PURE__ */ i("div", { className: "top-0 z-[10000000000000000000000000000000000000] absolute inset-x-0", children: [
    /* @__PURE__ */ e(
      "div",
      {
        onClick: () => {
          S.setOneFeild(Ge, "value", !n);
        },
        title: n ? "hide header bar" : "open header bar",
        className: A(
          `
            absolute
            top-full
            left-1/2
            -translate-x-1/2
            w-[300px]
            rounded-ee-lg
            rounded-es-lg
            flex
            items-center
            justify-center
            cursor-pointer
            overflow-hidden
            shadow-2xl
            border-solid
            border-transparent
            z-10
           `,
          l && "transition-[height] duration-200",
          !s.get || !a ? "h-[0px]" : "border-b border-x h-[30px]"
        ),
        style: d,
        children: /* @__PURE__ */ e(Q, { icon: n ? Le : ye })
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        className: A(
          "relative border-b border-solid border-transparent box-content flex h-[0px] items-center justify-between overflow-hidden",
          n && "h-[50px]",
          l && "transition-[height]"
        ),
        style: {
          ...d
        },
        children: t
      }
    )
  ] });
}
function rs() {
  const t = je("notification.header"), n = u.useMemo(() => (Array.isArray(t.get) ? t.get : []).slice(0, 3), [t.get]), s = x();
  return /* @__PURE__ */ e(
    "div",
    {
      className: "h-fit",
      style: {
        ...s({
          background: at("right", "secondary", "primary"),
          borderColor: "borders",
          color: "primary.content"
        })
      },
      children: !!n.length && /* @__PURE__ */ e(
        on,
        {
          data: n,
          slotId: "header-notifications",
          focusId: "header-notifications",
          component: ({ index: a, item: o }) => /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ i("div", { className: "flex justify-between items-center p-3", children: [
              /* @__PURE__ */ e("div", { children: o.message || "empty message" }),
              /* @__PURE__ */ e("div", { className: "flex tools", children: /* @__PURE__ */ e(
                N,
                {
                  onClick: () => {
                    t.set((r) => {
                      const l = r == null ? void 0 : r[a];
                      return l && (l.expanded = !l.expanded), r;
                    });
                  },
                  icon: V
                }
              ) })
            ] }),
            /* @__PURE__ */ e(
              "div",
              {
                className: A(
                  `
                  h-[0px]
                  p-3
                  flex
                  flex-col
                `,
                  o.expanded && "h-[200px]"
                ),
                children: /* @__PURE__ */ e(D, { children: o.desc || "" })
              }
            )
          ] })
        }
      )
    }
  );
}
const as = "visibility/configurations.boolean", is = () => {
  const t = J.getOneFeild("settings", "focused"), n = u.useMemo(() => fe(String(t), "camel", "normal"), [t]), [s] = ne(n);
  return /* @__PURE__ */ i("div", { className: "flex justify-between items-center p-2", children: [
    /* @__PURE__ */ e("h1", { className: "font-bold text-2xl capitalize", children: s }),
    /* @__PURE__ */ e("div", { className: "tools", children: /* @__PURE__ */ e(
      j,
      {
        position: {
          x: "left",
          y: "bottom"
        },
        title: "close view configurations",
        children: /* @__PURE__ */ e(
          N,
          {
            onClick: () => {
              S.setOneFeild(as, "value", !1);
            },
            icon: V
          }
        )
      }
    ) })
  ] });
};
function ls() {
  const t = Lt(), n = B.getOneFeild("keyboardShortcuts", "focused");
  return U(
    "keyboard/update",
    () => {
      if (n == null)
        return;
      const s = t[n];
      s && (B.setOneFeild("keyboardShortcuts", "submited", n), E("keyboard.commandId", s.commandId), I("edit-keyPanding"));
    },
    [n, t]
  ), /* @__PURE__ */ e(
    Ee,
    {
      itemSize: 30,
      countLastItems: 1,
      focusId: "keyboardShortcuts",
      slotId: "keyboardShortcuts",
      data: t,
      overflow: {
        top: 3,
        bottom: 3
      },
      component: ({ data: s, index: a, status: o, handel: r, style: l }) => {
        const { commandId: d, label: c = "" } = s, h = Bt(d), p = u.createRef(), m = x(), g = Z("Control"), v = w(!1), y = u.useMemo(() => h.filter(({ value: f }) => f).map(({ value: f }) => f), [h]);
        return /* @__PURE__ */ i(
          "div",
          {
            onMouseEnter: () => v.set(!0),
            onMouseLeave: () => v.set(!1),
            onClick: () => {
              r.focus(), r.submit();
            },
            ref: p,
            className: "px-3 text-xs group row",
            style: {
              ...m(
                a % 2 && "primary.background",
                v.get && "gray.opacity",
                o.isFocused && { borderColor: "primary" },
                o.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content"
                }
              ),
              ...l
            },
            children: [
              /* @__PURE__ */ e(
                "div",
                {
                  className: A(`
                w-[150px]
                flex
                justify-end
                px-2
              `),
                  children: (v.get || o.isFocused || o.isSubmited) && /* @__PURE__ */ i("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ e(
                      N,
                      {
                        onClick: async () => {
                          const f = JSON.stringify(s);
                          await navigator.clipboard.writeText(f);
                        },
                        icon: Be
                      }
                    ),
                    /* @__PURE__ */ e(
                      N,
                      {
                        icon: ht,
                        onClick: (f) => {
                          E("keyboard.commandId", d), I("edit-keyPanding");
                        }
                      }
                    ),
                    !!h.length && /* @__PURE__ */ e(
                      N,
                      {
                        tabIndex: -1,
                        icon: V,
                        onClick: () => {
                          G.remove(h.map(({ keyId: f }) => f));
                        }
                      }
                    )
                  ] })
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  className: A("capitalize col", g && "hover:underline cursor-pointer"),
                  onPointerDown: async () => {
                    g && (T.setOneFeild("findConfigurations", "value", `@commandId: ${d}`), await new zn().start(100), I("findConfigurations"));
                  },
                  children: c || d
                }
              ),
              /* @__PURE__ */ e("div", { className: A("col justify-end truncate"), children: /* @__PURE__ */ e(ge, { shortcut: y }) })
            ]
          }
        );
      }
    }
  );
}
const ue = ({ isActive: t, className: n, ...s }) => {
  const a = x();
  return /* @__PURE__ */ e(
    "span",
    {
      className: A("min-w-[100px] h-[35px] gap-2 rounded-md inline-flex items-center justify-center border border-solid border-transparent"),
      style: {
        ...a(
          "secondary.background",
          {
            borderColor: "borders"
          },
          t && "primary",
          t && {
            color: "primary.content"
          },
          {
            boxShadow: $([
              {
                colorId: "shadow.color",
                y: 4,
                x: 0,
                blur: 10,
                size: 4
              }
            ])
          }
        )
      },
      ...s
    }
  );
}, cs = [
  [
    { normal: "1", shift: "&", alt: "!" },
    { normal: "2", shift: "é", alt: "~" },
    { normal: "3", alt: "#", shift: '"' },
    { normal: "4", alt: "{", shift: "'" },
    { normal: "5", alt: "[", shift: "(" },
    { normal: "6", alt: "|", shift: "-" },
    { normal: "7", alt: "`", shift: "è" },
    { normal: "8", alt: "\\", shift: "_" },
    { normal: "9", alt: "^", shift: "ç" },
    { normal: "9", alt: "@", shift: "0" }
  ],
  [
    { normal: "a", shift: "A", alt: "à" },
    { normal: "z", shift: "Z", alt: "æ" },
    { normal: "e", shift: "E", alt: "€" },
    { normal: "r", shift: "R", alt: "®" },
    { normal: "t", shift: "T", alt: "™" },
    { normal: "y", shift: "Y", alt: "¥" },
    { normal: "u", shift: "U", alt: "µ" },
    { normal: "i", shift: "I", alt: "°" },
    { normal: "o", shift: "O", alt: "ø" },
    { normal: "p", shift: "P", alt: "þ" }
  ],
  [
    { normal: "q", shift: "Q", alt: "œ" },
    { normal: "s", shift: "S", alt: "ß" },
    { normal: "d", shift: "D", alt: "ð" },
    { normal: "f", shift: "F", alt: "đ" },
    { normal: "g", shift: "G", alt: "ħ" },
    { normal: "h", shift: "H", alt: "." },
    { normal: "j", shift: "J", alt: "*" },
    { normal: "k", shift: "K", alt: "-" },
    { normal: "l", shift: "L", alt: "/" },
    { normal: "m", shift: "M", alt: "+" }
  ],
  [
    { normal: "w", shift: "W", alt: "=" },
    { normal: "x", shift: "X", alt: ")" },
    { normal: "c", shift: "C", alt: "]" },
    { normal: "v", shift: "V", alt: "}" },
    { normal: "b", shift: "B", alt: ";" },
    { normal: "n", shift: "N", alt: "," }
  ]
], Ye = 200, ds = () => {
  const t = x(), n = w(!1), s = w(!1), a = w(!1), o = Z("Shift"), r = w(!1), l = Z("Control"), d = Z("AltGraph");
  u.useEffect(() => {
    s.set(l);
  }, [l]), u.useEffect(() => {
    n.set(o);
  }, [o]), u.useEffect(() => {
    a.set(d);
  }, [d]);
  const c = w([-100, -100]), h = w(!1);
  it(
    () => {
      h.get && h.set(!1);
    },
    [h.get],
    Ye
  ), Dt(["keyboard-view"]);
  const p = T.useOneFeild("keyboard-view", "value"), m = w([0, innerHeight - 300]), g = z("visibility/keyboard.boolean");
  return /* @__PURE__ */ i(
    "div",
    {
      hidden: !g,
      className: "z-[100000000000000000000000000000] fixed flex flex-col border border-transparent border-solid rounded-xl w-1/2 max-md:w-2/3 h-[300px] overflow-hidden",
      style: {
        ...t("primary.background", {
          borderColor: "borders",
          boxShadow: $([
            {
              colorId: "shadow.color",
              y: 4,
              x: 0,
              blur: 10,
              size: 4
            }
          ])
        }),
        ...q(
          m.get && {
            left: `${m.get[0]}px`,
            top: `${m.get[1]}px`
          }
        )
      },
      children: [
        /* @__PURE__ */ i("div", { className: "flex justify-between items-center p-2", children: [
          /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
            N,
            {
              onPointerDown: () => {
                const v = (f) => {
                  m.set([f.pageX, f.pageY]);
                };
                document.addEventListener("mousemove", v);
                const y = () => {
                  document.removeEventListener("pointerup", y), document.removeEventListener("mousemove", v);
                };
                document.addEventListener("pointerup", y);
              },
              icon: kn,
              className: "cursor-grab"
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "propositions", children: p.get ? /* @__PURE__ */ e(
            "pre",
            {
              className: "px-2 py-1 border border-transparent border-solid rounded-md font-[inherit]",
              style: {
                ...t("secondary.background", {
                  borderColor: "borders"
                })
              },
              children: p.get
            }
          ) : /* @__PURE__ */ e("div", { className: "px-2 py-1", children: /* @__PURE__ */ e("span", { children: "Empty Value" }) }) }),
          /* @__PURE__ */ e(
            j,
            {
              title: "close view",
              position: {
                x: "left"
              },
              children: /* @__PURE__ */ e(
                K,
                {
                  onClick: () => {
                    S.setOneFeild("visibility/keyboard.boolean", "value", !1);
                  },
                  icon: V
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ e(C, {}),
        /* @__PURE__ */ i("div", { className: "flex justify-center items-stretch h-full overflow-hidden", children: [
          /* @__PURE__ */ e("div", { className: "w-fit", children: /* @__PURE__ */ e("div", { className: "flex flex-col flex-1 justify-center items-center gap-1 p-2 h-full overflow-hidden", children: [
            {
              name: "shift",
              state: n
            },
            {
              name: "alt gr",
              state: a
            },
            {
              name: "control",
              state: s
            }
          ].map(({ state: v, name: y }, f) => /* @__PURE__ */ e(
            ue,
            {
              isActive: v.get,
              onPointerDown: () => {
                v.set((b) => !b);
              },
              children: y
            },
            f
          )) }) }),
          /* @__PURE__ */ i(
            "div",
            {
              className: "relative flex flex-col justify-between gap-3 border-x p-2 border-transparent border-solid h-full overflow-hidden",
              style: {
                ...t({
                  borderColor: "borders"
                })
              },
              onClick: (v) => {
                const y = v.pageX, f = v.pageY, { left: b, top: P } = v.currentTarget.getBoundingClientRect();
                c.set([y - b, f - P]), h.set(!0);
              },
              children: [
                c.get && /* @__PURE__ */ e(
                  "span",
                  {
                    className: A(
                      `opacity-0 blur-xl transition-[opacity] duration-[${Ye}] absolute pointer-events-none inline-block w-[100px] h-[100px] transform -translate-x-1/2 -translate-y-1/2 rounded-full`,
                      h.get && "opacity-100"
                    ),
                    style: {
                      ...t("gray.opacity"),
                      ...q(
                        c.get && {
                          left: `${c.get[0]}px`,
                          top: `${c.get[1]}px`
                        }
                      )
                    }
                  }
                ),
                /* @__PURE__ */ e("div", { className: "flex flex-col gap-3", children: cs.map((v, y) => /* @__PURE__ */ e("div", { className: "flex justify-center gap-3", children: v.map((f, b) => /* @__PURE__ */ i(
                  ue,
                  {
                    onPointerDown: () => {
                      const P = n.get ? f.shift : a.get ? f.alt : f.normal, k = document.activeElement;
                      k && (k instanceof HTMLInputElement || k instanceof HTMLTextAreaElement) && (k.value = k.value.concat(P));
                    },
                    className: "relative",
                    children: [
                      n.get ? f.shift : a.get ? f.alt : f.normal,
                      !n.get && /* @__PURE__ */ e(
                        "span",
                        {
                          className: "right-1 bottom-1 absolute text-xs",
                          style: {
                            ...t({ color: "gray.opacity.2" })
                          },
                          children: a.get ? f.normal : f.alt
                        }
                      )
                    ]
                  },
                  b
                )) }, y)) }),
                /* @__PURE__ */ e(
                  ue,
                  {
                    className: "w-full max-lg:w-full",
                    onPointerDown: () => {
                      p.set((v) => v + " "), !r.get && n.get && n.set(!1);
                    },
                    children: "space"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ e("div", { className: "w-fit", children: /* @__PURE__ */ e("div", { className: "flex flex-col flex-1 justify-center items-center gap-1 p-2 w-[20px] h-full overflow-hidden", children: [
            {
              name: "backspace",
              onClick() {
                p.set((v) => v == null ? void 0 : v.slice(0, -1));
              }
            },
            {
              name: "clean",
              onClick() {
                p.set("");
              }
            }
          ].map(({ onClick: v, name: y }, f) => /* @__PURE__ */ e(
            ue,
            {
              className: "w-full max-lg:w-full",
              onPointerDown: () => {
                v == null || v();
              },
              children: y
            },
            f
          )) }) })
        ] })
      ]
    }
  );
}, Ze = "visibility/leftSide.boolean", Ys = ({ children: t }) => {
  const n = z(Ze), s = x();
  return /* @__PURE__ */ e(
    Ae,
    {
      position: "right",
      min: 200,
      temp: "leftSide.currentWidth",
      max: () => Math.max(window.innerWidth / 3, 350),
      handelResize: ({ size: a }) => {
        const o = be(150, a);
        o != n && S.setOneFeild(Ze, "value", o);
      },
      className: A("h-full flex-col flex overflow-hidden border-r border-solid border-transparent z-[10000000000000000]", !n && "border-r-0"),
      hidden: !n,
      style: {
        ...s("secondary.background", {
          borderColor: "borders"
        })
      },
      children: t
    }
  );
}, fs = ({ item: t, status: n, handelFocus: s, handelSubmit: a }) => {
  if (t.type == "separator")
    return /* @__PURE__ */ e("div", { className: "my-1", children: /* @__PURE__ */ e(C, {}) });
  const o = x(), r = u.createRef();
  return /* @__PURE__ */ e("div", { className: "px-1", children: /* @__PURE__ */ i(
    "div",
    {
      ref: r,
      tabIndex: 1,
      style: {
        ...o(
          n.isFocused && "primary",
          n.isFocused && {
            color: "primary.content"
          }
        )
      },
      onMouseEnter: s(),
      onMouseLeave: () => {
        B.setOneFeild("menu-list", "focused", null);
      },
      onClick: a(),
      className: "cursor-pointer flex items-center rounded-md px-4 py-1 w-full",
      children: [
        /* @__PURE__ */ e("div", { className: "w-[30px]", children: t.checked && /* @__PURE__ */ e(et, { icon: De }) }),
        /* @__PURE__ */ i("div", { className: "flex justify-between items-center gap-1 w-full", children: [
          t.label && /* @__PURE__ */ e("span", { children: t.label }),
          t.accelerator && /* @__PURE__ */ e(ge, { shortcut: t.accelerator })
        ] }),
        /* @__PURE__ */ e("div", { className: "w-[30px]" })
      ]
    }
  ) });
}, ms = () => {
  const t = x(), n = me.getTemp("list"), s = me.getTemp("position"), a = me.getTemp("id"), o = u.createRef(), r = B.getOneFeild("menu-list", "submited");
  u.useEffect(() => {
    a && typeof r == "number" && (me.setTemp("result", r), B.setOneFeild("menu-list", "submited", null));
  }, [r, a]);
  const l = Tt.getOne("menu-list");
  return /* @__PURE__ */ e(
    H,
    {
      hidden: !a,
      style: {
        backgroundColor: "transparent"
      },
      children: /* @__PURE__ */ e(
        rn,
        {
          positionId: "menu-list",
          ref: o,
          className: "absolute py-1 border border-transparent border-solid rounded-md w-[350px] max-md:w-[150px]",
          style: {
            ...t("secondary.background", {
              borderColor: "borders",
              boxShadow: $([
                {
                  colorId: "shadow.color",
                  blur: 10,
                  size: 1,
                  x: 0,
                  y: 5
                }
              ])
            }),
            ...q(
              s && (l == null ? void 0 : l.width) && (innerWidth > s[0] + l.width ? {
                left: s[0]
              } : {
                right: innerWidth - s[0]
              }),
              s && (l == null ? void 0 : l.height) && (innerHeight > s[1] + l.height ? {
                top: s[1]
              } : {
                bottom: innerHeight - s[1]
              })
            )
          },
          children: /* @__PURE__ */ e(ce, { skipFn: ({ enabled: d = !0, type: c }) => c == "separator" || !d, slotId: "menu-list", component: fs, data: n || [] })
        }
      )
    }
  );
}, us = () => {
  const t = R.getAll();
  return /* @__PURE__ */ e(
    ce,
    {
      data: t,
      slotId: "notification",
      component: ({ item: n, index: s, id: a, handelFocus: o, handelSelect: r, handelSubmit: l, status: d }) => {
        const c = w(!1);
        function h(g, v, y, f) {
          return n.type == "warning" ? v : n.type == "error" ? y : n.type == "success" ? f : g;
        }
        const p = x(), m = z("preferences/animation.boolean");
        return /* @__PURE__ */ i(
          "div",
          {
            id: a,
            onClick: l(),
            onPointerDown: o(r()),
            onDoubleClick: () => {
              R.setOneFeild(n.id, "showDesc", !n.showDesc);
            },
            style: {
              ...p(
                "secondary.background",
                s % 2 && "primary.background",
                c.get && "gray.opacity",
                d.isFocused && {
                  borderColor: "secondary"
                },
                d.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content"
                }
              )
            },
            className: A(
              `
                overflow-hidden
                transform
                transition-[transform,opacity]
                relative
                max-h-[calc(80vh+50px)]
                border-2
                border-solid
                border-transparent
              `
            ),
            onMouseEnter: () => c.set(!0),
            onMouseLeave: () => c.set(!1),
            children: [
              /* @__PURE__ */ i("div", { className: A("relative p-3 flex justify-between items-center"), children: [
                /* @__PURE__ */ i("div", { className: "truncate text-xl flex items-center gap-2", children: [
                  /* @__PURE__ */ e(
                    Q,
                    {
                      icon: h(Oe, Te, Sn, pt),
                      style: {
                        ...p({
                          color: h("notifay.info", "notifay.warning", "notifay.error", "notifay.success")
                        })
                      }
                    }
                  ),
                  /* @__PURE__ */ e("span", { children: n.title })
                ] }),
                /* @__PURE__ */ e(
                  "div",
                  {
                    className: A(`
                  absolute
                  flex
                  gap-x-2
                  top-1/2
                  h-2/3
                  w-[5px]
                  transform
                  -translate-y-1/2
                  left-0
                  rounded-ee-md
                  rounded-se-md
                `),
                    style: {
                      ...p(h("notifay.info", "notifay.warning", "notifay.error", "notifay.success"))
                    }
                  }
                ),
                /* @__PURE__ */ i(
                  "div",
                  {
                    className: "flex gap-1 text-xl",
                    style: {
                      visibility: c.get || d.isSubmited ? "visible" : "hidden"
                    },
                    children: [
                      n.desc && /* @__PURE__ */ e(
                        N,
                        {
                          onClick: () => {
                            R.setOneFeild(n.id, "showDesc", !n.showDesc);
                          },
                          icon: n.showDesc ? Le : ye
                        }
                      ),
                      n.removable && /* @__PURE__ */ e(
                        N,
                        {
                          onClick: () => {
                            R.remove([n.id]);
                          },
                          icon: In
                        }
                      )
                    ]
                  }
                )
              ] }),
              n.desc && /* @__PURE__ */ e("div", { className: A("h-[0px]", m && "transition-[height] duration-700", n.showDesc && "h-[170px]"), children: /* @__PURE__ */ e(D, { className: "p-6", children: /* @__PURE__ */ e(de, { value: n.desc }) }) }),
              Array.isArray(n.buttons) && /* @__PURE__ */ e("div", { className: "flex justify-end p-5 overflow-x-auto", children: n.buttons.map(({ command: g, label: v }, y) => /* @__PURE__ */ e(
                X,
                {
                  className: "px-2 py-1 rounded-sm",
                  onClick: async () => {
                    typeof g == "object" ? oe(g.action, g.arg) : rt(g);
                  },
                  children: v
                },
                y
              )) }),
              n.status == "loading" && /* @__PURE__ */ e(Nt, {})
            ]
          }
        );
      }
    }
  );
}, Pe = "visibility/notifays.boolean", qe = "visibility/notifays/nots.boolean";
function vs() {
  const t = z(Pe), n = z(qe), s = R.getIds(), a = x(), o = B.getOneFeild("notification", "focused"), r = R.getAll(), l = u.useMemo(() => typeof o != "number" ? null : r[o] || null, [r, o]);
  U(
    "toggleExpandNotifay",
    () => {
      l && R.setOneFeild(l.id, "showDesc", !l.showDesc);
    },
    [l]
  ), U(
    "notification.deleteFocus",
    () => {
      l && R.remove([l.id]);
    },
    [l]
  );
  const d = z("preferences/animation.boolean"), c = z("notification/clearAllConfirmation.boolean");
  return /* @__PURE__ */ i(
    "div",
    {
      onClick: () => {
        t || S.setOneFeild(Pe, "value", !0);
      },
      className: A(
        `
        z-[1000000000000]
        transition-transform
        shadow-xl
        duration-300
        fixed
        bottom-[10px]
        right-[10px]
        rounded-xl
        w-[400px]
        max-md:w-[calc(100%-20px)]
        border
        border-solid
        border-transparent
        overflow-hidden;
      `,
        !t && "translate-x-[calc(100%)]"
      ),
      style: {
        ...a({
          backgroundColor: "secondary.background",
          borderColor: "borders",
          boxShadow: $([
            {
              colorId: "shadow.color",
              blur: 3,
              size: 2,
              x: 0,
              y: 0
            }
          ])
        })
      },
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            className: "notifay-top-view flex justify-between items-center gap-2 p-3 cursor-pointer",
            onClick: () => {
              S.setOneFeild(qe, "value", !n);
            },
            children: [
              /* @__PURE__ */ i("h3", { className: "font-bold text-lg uppercase notifay-full-title", children: [
                /* @__PURE__ */ e(
                  "span",
                  {
                    style: {
                      ...a(
                        {
                          color: "gray.opacity.2"
                        },
                        s.length && {
                          color: "primary"
                        }
                      )
                    },
                    className: "mr-2",
                    children: !n && `(${s.length})`
                  }
                ),
                /* @__PURE__ */ e(L, { content: "notifications" })
              ] }),
              /* @__PURE__ */ i("div", { className: "flex gap-3 text-xl", children: [
                !!s.length && /* @__PURE__ */ e(
                  N,
                  {
                    onClick: async () => {
                      let h = 1;
                      if (c) {
                        const p = await pe({
                          message: "Do You Want To Clear All Notifications",
                          checkboxLabel: "Don't Ask Me Again",
                          buttons: ["No", "Yes"]
                        });
                        p.checkboxChecked && Ot("notification/clearAllConfirmation.boolean", !1), h = p.response;
                      }
                      h && R.remove(r.filter(({ removable: p = !0 }) => p).map(({ id: p }) => p));
                    },
                    icon: Mn
                  }
                ),
                /* @__PURE__ */ e(
                  N,
                  {
                    onClick: () => {
                      S.setOneFeild(Pe, "value", !1);
                    },
                    icon: gt
                  }
                )
              ] })
            ]
          }
        ),
        !!s.length && n && /* @__PURE__ */ e(C, {}),
        /* @__PURE__ */ e(
          Me,
          {
            focusId: "notifications",
            ignoreOutline: !!l,
            className: A("flex flex-col overflow-hidden max-h-[80vh] rounded-ee-xl rounded-es-xl", d && "duration-300 transition-[max-height]", !n && "max-h-[0vh]"),
            children: /* @__PURE__ */ e(D, { children: /* @__PURE__ */ e(us, {}) })
          }
        )
      ]
    }
  );
}
const hs = () => {
  const t = re.getTemp("pdf");
  return /* @__PURE__ */ e(H, { hidden: !t, children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Ae, { className: "h-[70vh]", position: "right", temp: "pdf", min: 400, max: () => innerWidth - 30, children: /* @__PURE__ */ e(
    tt,
    {
      className: "h-full overflow-hidden",
      list: [
        /* @__PURE__ */ e(
          Ct,
          {
            title: "PDF..",
            rightSide: /* @__PURE__ */ e("div", { className: "flex tools", children: /* @__PURE__ */ e(j, { title: "close view", children: /* @__PURE__ */ e(
              K,
              {
                icon: V,
                onClick: () => {
                  re.setTemp("pdf", null);
                }
              }
            ) }) })
          }
        ),
        /* @__PURE__ */ e("div", { className: "p-2 h-full", children: t && /* @__PURE__ */ e("embed", { src: t, className: "rounded-xl w-full h-full overflow-hidden" }) })
      ]
    }
  ) }) }) });
}, Je = "visibility/rightSide.boolean", Zs = ({ children: t }) => {
  const n = z(Je), s = x();
  return /* @__PURE__ */ e(
    Ae,
    {
      min: 200,
      temp: "rightSide.currentWidth",
      max: () => Math.max(window.innerWidth / 3, 350),
      handelResize: ({ size: a }) => {
        const o = be(150, a);
        o != n && S.setOneFeild(Je, "value", o);
      },
      position: "left",
      hidden: !n,
      style: {
        ...s({
          backgroundColor: "secondary.background",
          borderColor: "borders"
        })
      },
      className: A(
        `
        h-full
        flex-col
        flex
        overflow-hidden
        border-l
        border-solid
        border-transparent
        z-[10000000000000]
      `,
        !n && "border-l-0"
      ),
      children: t
    }
  );
};
function ps() {
  const t = lt();
  return /* @__PURE__ */ e(
    Ee,
    {
      data: t,
      slotId: "configurations",
      focusId: "configurations",
      itemSize: 50,
      overflow: {
        top: 4,
        bottom: 4
      },
      countLastItems: -1,
      component: ({ data: n, index: s, style: a, status: o, handel: r, id: l }) => {
        const d = Z("Control"), c = w(!1), h = u.useMemo(() => !n.settingId.match(/\.password$/gi) && !he(n.def, n.value), [n]), p = x();
        U(
          "showSubmitSetting",
          () => {
            o.isSubmited && se(n.settingId);
          },
          [o]
        );
        const m = u.useMemo(() => o.isFocused || o.isSubmited || c.get, [o, c.get]);
        return /* @__PURE__ */ i(
          "div",
          {
            id: l,
            onMouseEnter: () => c.set(!0),
            onMouseLeave: () => c.set(!1),
            className: A(
              `
                flex
                items-center
                justify-between
                h-[70px]
                p-4
                cursor-default
                border
                border-solid
                border-transparent
              `
            ),
            style: {
              ...p(
                s % 2 && "primary.background",
                s % 2 == 0 && "secondary.background",
                c.get && "gray.opacity",
                o.isFocused && {
                  borderColor: "primary"
                },
                o.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content"
                }
              ),
              ...a
            },
            onClick: () => {
              r.focus(), r.submit();
            },
            children: [
              !he(n.value, n.def) && /* @__PURE__ */ e(
                "div",
                {
                  className: "left-0 absolute inset-y-0 w-[3px]",
                  style: {
                    ...p("primary")
                  }
                }
              ),
              /* @__PURE__ */ e(
                "h1",
                {
                  className: A(`
                flex
                gap-1
                items-center
                overflow-hidden
              `),
                  children: /* @__PURE__ */ e(
                    "span",
                    {
                      className: A("text-xl capitalize truncate", d && "hover:underline cursor-pointer"),
                      onClick: () => {
                        d && n.name != null && T.setOneFeild("findConfigurations", "value", n.name);
                      },
                      children: n.name || /* @__PURE__ */ e(
                        "span",
                        {
                          style: p({
                            color: "gray.opacity.2"
                          }),
                          children: "name not provided"
                        }
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ i(
                "span",
                {
                  className: A("inline-flex gap-1 items-center text-xs italic font-extralight truncate"),
                  onClick: () => {
                    d && T.setOneFeild("findConfigurations", "value", `@id ${n.settingId}`);
                  },
                  children: [
                    /* @__PURE__ */ i(
                      "span",
                      {
                        className: A(d && "hover:underline cursor-pointer"),
                        style: p(
                          d && c.get && {
                            color: "primary"
                          }
                        ),
                        children: [
                          "@",
                          /* @__PURE__ */ e("span", { className: "font-normal", children: n.settingId })
                        ]
                      }
                    ),
                    /* @__PURE__ */ i("div", { className: A("flex opacity-0 transition-[opacity] duration-500", m && "opacity-100"), children: [
                      h && /* @__PURE__ */ e(j, { title: "reset", children: /* @__PURE__ */ e(
                        N,
                        {
                          icon: Fn,
                          onClick: () => {
                            S.setOneFeild(n.settingId, "value", n.def);
                          }
                        }
                      ) }),
                      /* @__PURE__ */ e(j, { title: "configurate", children: /* @__PURE__ */ e(
                        N,
                        {
                          onClick: () => {
                            se(n.settingId);
                          },
                          icon: At
                        }
                      ) })
                    ] })
                  ]
                }
              )
            ]
          }
        );
      }
    }
  );
}
function xt(t = [], n = ".") {
  const s = t.filter(Boolean).map((o) => o.split(n)).filter((o) => o.length);
  return Array.from(new Set(s.map(([o]) => o))).map((o) => ({
    data: o,
    innerTree: xt(
      s.filter(([r]) => r == o).map(([, ...r]) => r.join(n)),
      n
    )
  }));
}
function gs() {
  const t = lt(), n = u.useMemo(() => t.map(({ settingId: s }) => s), [t]);
  return /* @__PURE__ */ e("div", { id: "settings.tree.view", className: "flex flex-col h-full overflow-hidden", tabIndex: 1, children: /* @__PURE__ */ e(D, { children: /* @__PURE__ */ e(
    an,
    {
      treeId: "setting-tree-layout",
      tree: xt(n, "/"),
      component: ({ data: s, status: a, parent: o, isFins: r, innerTree: l, level: d, handels: c }) => {
        const h = x(), [p, m] = s.split("."), g = w(!1), v = u.useMemo(() => {
          const y = [];
          let f = o;
          for (; f; )
            y.push(f.data), f = f.parent;
          return y.reverse().join("/");
        }, [r]);
        return /* @__PURE__ */ i(
          "div",
          {
            "aria-level": d,
            onMouseEnter: () => g.set(!0),
            onMouseLeave: () => g.set(!1),
            className: "flex items-center px-1 border border-transparent border-solid h-[30px]",
            onClick: async () => {
              c.focus(!0);
            },
            style: {
              ...h(
                g.get && "gray.opacity",
                a.isFocused && {
                  borderColor: "primary"
                }
              ),
              paddingLeft: `${d * 50}px`
            },
            children: [
              !m && /* @__PURE__ */ e("div", { className: "mx-1 tools", children: /* @__PURE__ */ e(
                N,
                {
                  iconClassName: "text-xs",
                  tabIndex: -1,
                  icon: a.isExpanded ? ye : gt,
                  style: {
                    outlineColor: "transparent"
                  },
                  onClick: () => {
                    c.expand(!1, !a.isExpanded);
                  }
                }
              ) }),
              /* @__PURE__ */ i("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ i("div", { children: [
                  r && p,
                  !r && /* @__PURE__ */ e("b", { children: p }),
                  /* @__PURE__ */ e(
                    "b",
                    {
                      className: "ml-1",
                      style: {
                        ...h({
                          color: "primary"
                        })
                      },
                      children: !!(l != null && l.length) && `(${l == null ? void 0 : l.length})`
                    }
                  )
                ] }),
                m && /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: "px-2 py-1 rounded-md",
                      style: {
                        ...h("gray.opacity")
                      },
                      children: m
                    }
                  ),
                  /* @__PURE__ */ e(
                    N,
                    {
                      onClick: () => {
                        se(v);
                      },
                      icon: At,
                      hidden: !g.get
                    }
                  )
                ] })
              ] })
            ]
          }
        );
      }
    }
  ) }) });
}
function As() {
  const t = Qt(), n = u.useMemo(() => {
    const a = t.filter(({ settingId: o }) => !o.endsWith("password"));
    return yt(
      a.length && {
        async click() {
          const { response: o } = await pe({
            message: "Are You Sure About Reset All Configurations",
            defaultId: 1,
            title: "Reset All Config",
            buttons: ["No", "Yes"],
            type: "warning"
          });
          o && S.upsert(
            a.map((r) => {
              let l = { ...r };
              return l.def != null && (l.value = l.def), l;
            })
          );
        },
        icon: En,
        title: "reset all"
      },
      {
        click() {
          J.setOneFeild("settings.viewType", "focused", "list");
        },
        title: "list",
        icon: bt
      },
      {
        click() {
          J.setOneFeild("settings.viewType", "focused", "tree");
        },
        title: "tree",
        icon: jn
      }
    );
  }, [t]), s = Ne(n, "settings.layout.tools");
  return u.useEffect(() => {
    s && (s.click(), B.setOneFeild("settings.layout.tools", "submited", null));
  }, [s]), /* @__PURE__ */ i("div", { className: "relative flex flex-col w-full h-full overflow-hidden", children: [
    /* @__PURE__ */ i(Me, { focusId: "settings.layouts", className: "flex justify-between items-center p-2", children: [
      /* @__PURE__ */ e("div", {}),
      /* @__PURE__ */ e("div", { className: "flex gap-1 tools", children: /* @__PURE__ */ e(
        ce,
        {
          slotId: "settings.layout.tools",
          data: n,
          component: ({ item: { click: a, title: o, icon: r }, tabIndex: l, handelFocus: d, status: c }) => {
            const h = x();
            return /* @__PURE__ */ e(
              j,
              {
                title: o,
                position: {
                  x: "center",
                  y: "top"
                },
                children: /* @__PURE__ */ e(
                  N,
                  {
                    icon: r,
                    onPointerDown: d(),
                    style: {
                      ...h(
                        c.isFocused && {
                          outlineColor: "primary"
                        }
                      )
                    },
                    tabIndex: l,
                    onClick: a
                  }
                )
              }
            );
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ e(C, {}),
    /* @__PURE__ */ e(
      ft,
      {
        views: {
          list: ps,
          tree: gs
        },
        viewId: "settings.viewType"
      }
    )
  ] });
}
function ys() {
  const t = ve.getTemp("config");
  return u.useEffect(() => {
    t || se(null);
  }, [t]), /* @__PURE__ */ i("div", { className: "flex flex-col w-full h-full overflow-hidden", children: [
    /* @__PURE__ */ e(os, {}),
    /* @__PURE__ */ e(C, {}),
    t && /* @__PURE__ */ e(
      ft,
      {
        viewId: "settings",
        views: {
          keyboardShortcuts: ls,
          user: As,
          icons: ln,
          colors: cn
        }
      }
    )
  ] });
}
function bs() {
  const t = J.getOne("settings"), n = u.useMemo(() => Object.entries((t == null ? void 0 : t.tabs) || {}).map(([a, o]) => ({
    id: a,
    ...o,
    isFocused: (t == null ? void 0 : t.focused) == a
  })), [t]), s = x();
  return /* @__PURE__ */ e(
    "div",
    {
      className: "border-transparent border-r border-solid w-full h-full overflow-hidden",
      style: {
        ...s({
          borderColor: "borders"
        })
      },
      children: /* @__PURE__ */ e(
        ce,
        {
          slotId: "configurations.side.list",
          data: n,
          component: ({ item: a }) => {
            const { id: o, news: r, isFocused: l, icon: d } = a, c = u.useMemo(() => `settings.${o}.show`, [o]), h = st(), p = u.useMemo(() => ae.join({ cmdId: c }, h, "cmdId->command").map(({ value: y }) => y), [c, h]), [m] = ne(fe(o, "camel", "normal")), g = w(!1), v = x();
            return /* @__PURE__ */ i(
              j,
              {
                onMouseEnter: () => g.set(!0),
                onMouseLeave: () => g.set(!1),
                draggable: !0,
                title: `press ${p.map((y) => "`" + y + "`").join(" or ")}`,
                onClick: () => {
                  !l && J.setOneFeild("settings", "focused", a.id);
                },
                style: {
                  ...v((l || g.get) && "primary.background")
                },
                className: "relative truncate cursor-pointer",
                children: [
                  l && /* @__PURE__ */ e("span", { className: "left-0 absolute inset-y-0 w-[2px]", style: { ...v("primary") } }),
                  /* @__PURE__ */ i("div", { className: "flex items-center gap-2 p-2", children: [
                    (d == null ? void 0 : d.value) && /* @__PURE__ */ e(Q, { icon: Xe(d.type, d.value) }),
                    m,
                    r && /* @__PURE__ */ e(dn, { children: /* @__PURE__ */ e(Q, { icon: Xe(r.type, r.value) }) })
                  ] })
                ]
              },
              o
            );
          }
        }
      )
    }
  );
}
function xs() {
  return /* @__PURE__ */ e(Ae, { position: "right", min: () => innerWidth / 7, max: () => innerWidth / 3, className: "h-full", children: /* @__PURE__ */ e(bs, {}) });
}
const $e = "visibility/configurations.boolean";
function ws() {
  const t = z($e), n = x();
  return u.useEffect(() => {
    t && ve.setTemp("config", !0);
  }, [t]), /* @__PURE__ */ e(
    mt,
    {
      hidden: !t,
      onLoadContent: () => {
        I("findConfigurations-local");
      },
      onClick: async (s) => {
        s.currentTarget == s.target && S.setOneFeild($e, "value", !1);
      },
      onTransitionEnd: () => {
        typeof t == "boolean" && ve.setTemp("config", t);
      },
      children: /* @__PURE__ */ i(
        "div",
        {
          className: A(`
          overflow-hidden
          absolute
          transform
          -translate-y-1/2
          -translate-x-1/2
          top-1/2
          left-1/2
          rounded-2xl
          border
          border-solid
        `),
          style: {
            ...n("secondary.background", {
              borderColor: "borders"
            })
          },
          children: [
            /* @__PURE__ */ e(is, {}),
            /* @__PURE__ */ e(C, {}),
            /* @__PURE__ */ i("div", { className: "flex w-[70vw] h-[70vh]", children: [
              /* @__PURE__ */ e(xs, {}),
              /* @__PURE__ */ e(ys, {})
            ] })
          ]
        }
      )
    }
  );
}
function Ps({ settingId: t }) {
  const n = S.getOne(t), s = u.useMemo(() => n == null ? void 0 : n.value, [n]), a = u.useMemo(() => n == null ? void 0 : n.config, [n]), o = w(n == null ? void 0 : n.value);
  u.useEffect(() => {
    S.setOneFeild(t, "value", o.get);
  }, [o.get]), u.useEffect(() => {
    o.set(s);
  }, [n]);
  const r = u.useMemo(() => `setting:${(n == null ? void 0 : n.settingId) || ""}`, [n]), l = u.useMemo(() => {
    var h;
    const c = (h = r.match(/\.[a-zA-Z0-9]+$/gi)) == null ? void 0 : h[0].slice(1);
    return c || null;
  }, [r]), d = x();
  return /* @__PURE__ */ e(
    "div",
    {
      className: A((n == null ? void 0 : n.readonly) && "cursor-not-allowed"),
      style: {
        ...d((n == null ? void 0 : n.readonly) && "primary.background")
      },
      children: /* @__PURE__ */ i("div", { className: A((n == null ? void 0 : n.readonly) && "pointer-events-none"), children: [
        l == "boolean" && /* @__PURE__ */ e(ut, { id: r, state: o, config: a }),
        l == "array" && /* @__PURE__ */ e(fn, { id: r, state: o, config: a }),
        l == "enum" && /* @__PURE__ */ e(mn, { id: r, state: o, config: a }),
        l == "object" && /* @__PURE__ */ e(un, { id: r, state: o, config: a }),
        l == "string" && /* @__PURE__ */ e(vn, { id: r, state: o, config: a }),
        l == "number" && /* @__PURE__ */ e(hn, { id: r, state: o, config: a }),
        l == "file" && /* @__PURE__ */ e(zt, { id: r, state: o, config: a }),
        l == "filter" && /* @__PURE__ */ e(pn, { id: r, state: o, config: a }),
        l == "password" && /* @__PURE__ */ e(gn, { id: r, state: o, config: a }),
        l == "date" && /* @__PURE__ */ e(An, { id: r, state: o, config: a }),
        l == "regexp" && /* @__PURE__ */ e(yn, { id: r, state: o }),
        l == "audio" && /* @__PURE__ */ e(bn, { id: r, state: o, config: a }),
        l == "image" && /* @__PURE__ */ e(xn, { id: r, state: o, config: a }),
        l == "pin" && /* @__PURE__ */ e(kt, { id: r, state: o, config: a })
      ] })
    }
  );
}
const Ns = () => {
  const t = x(), n = je("view.settings"), s = S.getOne(n.get || ""), a = u.useMemo(() => !s || s.settingId.match(/\.password$/gi) ? !1 : !he(s.def, s.value), [s]), o = u.useMemo(() => {
    try {
      const r = Function(`return (state)=> \`${(s == null ? void 0 : s.desc) || "**no description defined**"}\` `)(), l = ot.getState();
      return r(l);
    } catch (r) {
      return Ln.err(r), " - ";
    }
  }, [s == null ? void 0 : s.desc]);
  return /* @__PURE__ */ e(
    H,
    {
      onLoadContent: () => {
        n.get && I(`setting:${n.get}`);
      },
      hidden: !n.get,
      children: /* @__PURE__ */ i(
        "div",
        {
          hidden: !n.get,
          className: A("rounded-md border-solid border border-transparent w-1/2 max-md:w-5/6"),
          style: t("secondary.background", {
            borderColor: "borders"
          }),
          children: [
            /* @__PURE__ */ i("div", { className: "flex justify-between items-center gap-1 p-3", children: [
              s && /* @__PURE__ */ i(Y, { children: [
                /* @__PURE__ */ e("h1", { className: "text-2xl truncate", children: s.name }),
                /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-[1px] max-md:hidden text-xs", children: /* @__PURE__ */ e(
                  nt,
                  {
                    list: s.settingId.split("/").filter(Boolean).map((r, l) => {
                      var h;
                      const d = (h = r.match(/\..+$/gi)) == null ? void 0 : h[0].slice(1);
                      let c = null;
                      switch (d) {
                        case "boolean": {
                          c = De;
                          break;
                        }
                        case "password": {
                          c = Vn;
                          break;
                        }
                        case "number": {
                          c = Un;
                          break;
                        }
                        case "string": {
                          c = Hn;
                          break;
                        }
                        case "file": {
                          c = Qn;
                          break;
                        }
                        case "enum": {
                          c = bt;
                          break;
                        }
                        case "object": {
                          c = On;
                          break;
                        }
                        case "array": {
                          c = Tn;
                          break;
                        }
                        case "audio":
                          c = Dn;
                      }
                      return /* @__PURE__ */ i(
                        "span",
                        {
                          className: "inline-flex items-center gap-x-2 px-2 py-1 rounded-md",
                          style: {
                            ...t("gray.opacity.2")
                          },
                          children: [
                            r.replaceAll(/\..+$/gi, ""),
                            c && /* @__PURE__ */ e(Q, { icon: c })
                          ]
                        },
                        l
                      );
                    }),
                    joinComponent: /* @__PURE__ */ e(Q, { icon: Qe })
                  }
                ) })
              ] }),
              /* @__PURE__ */ i("div", { className: "flex tools", children: [
                a && /* @__PURE__ */ e(
                  K,
                  {
                    icon: Bn,
                    onClick: async () => {
                      const { response: r } = await pe({
                        message: "are you sure about reset this setting",
                        buttons: ["No", "Yes"],
                        defaultId: 1
                      });
                      r && s && S.setOneFeild(s.settingId, "value", s.def);
                    }
                  }
                ),
                /* @__PURE__ */ e(
                  K,
                  {
                    onClick: () => {
                      n.set(null), I("findConfigurations");
                    },
                    icon: V
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e(C, {}),
            s && /* @__PURE__ */ i(Y, { children: [
              /* @__PURE__ */ e(D, { className: "p-2 max-h-[150px]", children: /* @__PURE__ */ e(de, { value: o }) }),
              /* @__PURE__ */ e(C, {})
            ] }),
            n.get && /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ e(Ps, { settingId: n.get }) })
          ]
        }
      )
    }
  );
}, Cs = ({ item: t, index: n }) => {
  const s = w(!1), a = w(!1), o = w(!1), r = w(0), { message: l } = t, d = x(), c = z("preferences/toastTime.number"), h = z("preferences/animation.boolean"), p = u.useMemo(() => t.time || c || 5, [c, t.time]);
  u.useEffect(() => {
    if (o.get) {
      const g = setTimeout(() => {
        t.id && ct.remove([t.id]), o.set(!1);
      }, 300);
      return () => {
        clearTimeout(g);
      };
    }
  }, [o.get, t]), u.useEffect(() => {
    let g = 0;
    const v = setInterval(() => {
      r.set(++g), g >= p && (o.set(!0), clearInterval(v));
    }, 1e3);
    return () => {
      clearInterval(v);
    };
  }, [p]), u.useEffect(() => {
    if (a.get) {
      const g = setTimeout(() => {
        a.set(!1);
      }, 3e3);
      return () => {
        clearTimeout(g);
      };
    }
  }, [a.get]);
  function m(g, v, y, f) {
    return t.type == "warning" ? v : t.type == "error" ? y : t.type == "success" ? f : g;
  }
  return /* @__PURE__ */ i(
    "div",
    {
      className: A("flex z-[100000] items-center justify-between p-2 opacity-100 scale-100", o.get && "opacity-0 scale-0", h && "transition-[transform,opacity] duration-300"),
      onMouseEnter: () => s.set(!0),
      onMouseLeave: () => s.set(!1),
      style: {
        ...d(n % 2 && "gray.opacity")
      },
      children: [
        /* @__PURE__ */ i("div", { className: "inline-flex items-center gap-1", children: [
          /* @__PURE__ */ e(
            Q,
            {
              icon: m(Oe, Te, Rn, pt),
              style: {
                ...d({
                  color: m("notifay.info", "notifay.warning", "notifay.error", "notifay.success")
                })
              }
            }
          ),
          /* @__PURE__ */ e(de, { value: l.toString() })
        ] }),
        /* @__PURE__ */ i("div", { className: "flex items-center", children: [
          /* @__PURE__ */ e(
            "span",
            {
              className: A("relative rounded-full w-[30px] h-[30px] mx-2 inline-flex items-center justify-center"),
              style: {
                ...d("gray.opacity")
              },
              children: p - r.get
            }
          ),
          /* @__PURE__ */ i("div", { className: A("tools w-[0px] flex gap-1 items-center overflow-hidden", s.get && "w-[50px]", h && "transition-[width]"), children: [
            /* @__PURE__ */ e(
              N,
              {
                onClick: async () => {
                  a.set(!0), await navigator.clipboard.writeText(l.toString());
                },
                icon: a.get ? De : Be
              }
            ),
            /* @__PURE__ */ e(
              N,
              {
                onClick: () => {
                  o.set(!0);
                },
                icon: V
              }
            )
          ] })
        ] })
      ]
    }
  );
}, zs = () => {
  const t = ct.getAll(), n = x(), s = z("preferences/animation.boolean"), a = u.useMemo(() => Cs, []), o = z("toast/position.enum");
  return /* @__PURE__ */ e(
    "div",
    {
      className: A(
        "fixed z-[100000000000000000000000000000] min-w-[300px] border overflow-hidden border-transparent rounded-md border-solid left-1/2 transform -translate-x-1/2 scale-0",
        !!(t != null && t.length) && "scale-100",
        s && "transition-transform duration-300",
        o == "top" && "top-[50px]",
        o == "bottom" && "bottom-[50px]"
      ),
      style: {
        ...n("toast.background", {
          boxShadow: $([
            {
              colorId: "shadow.color",
              x: 0,
              y: 20,
              blur: 40,
              size: 10
            }
          ]),
          borderColor: "borders"
        })
      },
      children: /* @__PURE__ */ e(D, { className: "max-h-[400px]", children: t == null ? void 0 : t.map((r, l) => /* @__PURE__ */ e(a, { index: l, item: r }, r.id)) })
    }
  );
}, te = {
  commandId: "keyboard.commandId",
  position: "keyboard.editingPosition"
}, _e = "key.changeWhen", ks = u.memo(({ commandId: t }) => /* @__PURE__ */ e(
  nt,
  {
    joinComponent: /* @__PURE__ */ e(Q, { icon: Qe }),
    list: t.split(".").map((n, s) => /* @__PURE__ */ e("span", { className: "font-bold text-xl capitalize", children: fe(n, "camel", "normal") }, s))
  }
), he), Is = ({ keyPanding: t }) => {
  const { when: n, value: s, keyId: a } = t, o = w(!1), r = w(""), l = x(), d = w(!1);
  return u.useEffect(() => {
    o.get && I(_e);
  }, [o.get]), /* @__PURE__ */ i(
    "div",
    {
      onMouseEnter: () => d.set(!0),
      onMouseLeave: () => d.set(!1),
      className: A(`
        flex
        group
        items-center
        justify-center
        gap-x-1
        cursor-pointer
        w-full
        px-2
        group
        relative
      `),
      style: {
        ...l(d.get && "gray.opacity")
      },
      children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "flex justify-end w-[150px]", children: /* @__PURE__ */ i(
          "div",
          {
            className: A(`
              tools
              flex
              items-center
              gap-1
              invisible
              group-hover:visible
              border-r
              border-solid
              border-transparent
            `),
            style: {
              ...l({
                borderColor: "borders"
              })
            },
            children: [
              /* @__PURE__ */ e(j, { title: "remove this keypanding", children: /* @__PURE__ */ e(
                N,
                {
                  onClick: () => {
                    G.remove([a]), I("edit-keyPanding");
                  },
                  icon: V
                }
              ) }),
              /* @__PURE__ */ e(j, { title: "copy when value", children: /* @__PURE__ */ e(
                N,
                {
                  icon: Be,
                  onClick: async () => {
                    n && await navigator.clipboard.writeText(n);
                  }
                }
              ) }),
              /* @__PURE__ */ e(j, { title: "edit when", children: /* @__PURE__ */ e(
                N,
                {
                  onClick: () => {
                    o.set(!0), n && r.set(n);
                  },
                  icon: ht
                }
              ) }),
              /* @__PURE__ */ e(j, { title: `change to ${t.repeation ? "unrepeated" : "repeated"} key pending`, children: /* @__PURE__ */ e(
                N,
                {
                  onClick: () => {
                    G.setOneFeild(a, "repeation", !t.repeation);
                  },
                  icon: t.repeation ? Wn : Qe
                }
              ) }),
              /* @__PURE__ */ e(j, { title: t.type == "up" ? "switch to down press" : "switch to up press", children: /* @__PURE__ */ e(
                N,
                {
                  onClick: () => {
                    t.keyId && G.setOneFeild(t.keyId, "type", t.type == "up" ? "down" : "up");
                  },
                  icon: t.type == "up" ? Xn : Gn
                }
              ) })
            ]
          }
        ) }) }),
        /* @__PURE__ */ e("div", { className: "px-2", children: s && /* @__PURE__ */ e(ge, { shortcut: s }) }),
        /* @__PURE__ */ i("div", { className: "text-xs col", children: [
          !o.get && (n || " - "),
          o.get && /* @__PURE__ */ e(
            It,
            {
              style: {
                backgroundColor: "transparent",
                borderColor: "0px"
              },
              value: r.get,
              onValueChange: r.set,
              id: _e,
              onFocus: (c) => {
                c.currentTarget.select();
              },
              onKeyDown: (c) => {
                c.key.toLowerCase() == "enter" && c.currentTarget.blur();
              },
              onBlur: (c) => {
                G.setOneFeild(a, "when", c.currentTarget.value), o.set(!1);
              },
              className: "p-0",
              placeholder: "when expression..."
            }
          )
        ] })
      ]
    }
  );
};
function Ss() {
  const t = W(te.commandId), n = w(""), s = Ue.getAll(), a = Ue.getEntity(), o = u.useMemo(() => t && a[t] || null, [a, t]), r = G.getAll(), l = u.useMemo(() => r.filter(({ value: m }) => m), [r]), d = u.useMemo(() => o ? ae.join(o, r, "commandId->command") : null, [o, r]), c = u.useMemo(() => s.map((m) => ({
    command: m,
    keys: ae.join(m, r, "commandId->command")
  })), [l]), h = u.useMemo(() => c.filter(({ keys: m }) => m.some(({ value: g }) => g == n.get)), [c, n]), p = x();
  return u.useEffect(() => {
    n.set("");
  }, [o]), /* @__PURE__ */ e(
    H,
    {
      hidden: !o,
      onClick: (m) => {
        m.currentTarget == m.target && (E(te.commandId, null), E(te.position, null));
      },
      onLoadContent: () => {
        o && I("edit-keyPanding");
      },
      children: /* @__PURE__ */ i(
        "div",
        {
          style: {
            ...p("primary.background", {
              borderColor: "borders"
            })
          },
          className: A(
            `
            rounded-lg
            border
            border-solid
            border-transparent
            min-w-[500px]
            w-[60vw]
          `
          ),
          tabIndex: o ? 1 : -1,
          id: "edit-keyPanding",
          onKeyDown: (m) => {
            if (m.currentTarget != m.target || !o)
              return;
            m.stopPropagation(), m.preventDefault(), m.key = m.key.toLowerCase();
            const g = [m.ctrlKey, m.altKey, m.shiftKey].filter(Boolean).length;
            if (!g && ["escape", "backspace"].includes(m.key)) {
              if (n.get) {
                n.set("");
                return;
              }
            } else if (!g && m.key == "enter" && n.get) {
              G.add([
                {
                  command: o.commandId,
                  value: n.get,
                  keyId: Ht()
                }
              ]), n.set("");
              return;
            }
            const v = Kn.fromEvent(m);
            n.set(v);
          },
          children: [
            /* @__PURE__ */ i("div", { className: "relative flex justify-center items-center gap-3 p-2", children: [
              (o == null ? void 0 : o.commandId) && /* @__PURE__ */ e(ks, { commandId: o.commandId }),
              /* @__PURE__ */ e(
                N,
                {
                  className: A(`
              absolute
              right-2
              top-1/2
              transform
              -translate-y-1/2
            `),
                  onClick: async () => {
                    E(te.commandId, null), E(te.position, null), I("findConfigurations");
                  },
                  icon: V
                }
              )
            ] }),
            /* @__PURE__ */ e(C, {}),
            /* @__PURE__ */ i("div", { className: "flex flex-col flex-wrap items-center", children: [
              d == null ? void 0 : d.map((m, g) => /* @__PURE__ */ e(Is, { keyPanding: m }, g)),
              !(d != null && d.length) && /* @__PURE__ */ e("div", { className: "py-2", children: "no combinition defined" })
            ] }),
            /* @__PURE__ */ e(C, {}),
            /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-2 text-4xl", children: /* @__PURE__ */ e(ge, { shortcut: n.get }) }),
            !!h.length && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(C, {}),
              /* @__PURE__ */ e("div", { className: "flex justify-center p-2", children: /* @__PURE__ */ i(Fe, { children: [
                /* @__PURE__ */ e(L, { content: "existe" }),
                " (",
                h.length,
                ")"
              ] }) })
            ] })
          ]
        }
      )
    }
  );
}
function qs({ children: t }) {
  const n = z("visibility/header.boolean"), s = z("preferences/animation.boolean");
  return /* @__PURE__ */ i("div", { className: A("absolute bottom-0 inset-x-0 w-full border-solid border-transparent border-b top-0 flex flex-col", n && "top-[51px]", s && "transition-[top] duration-200"), children: [
    /* @__PURE__ */ e(rs, {}),
    /* @__PURE__ */ e("div", { className: "flex items-stretch h-full overflow-hidden", children: t })
  ] });
}
const wt = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,} *$", Ms = () => {
  const t = x(), n = T.getOneFeild("signupUseremail", "value"), s = w(""), a = w(""), o = U(
    "signup",
    async () => {
      var r;
      if (!((r = M.server) != null && r.auth)) {
        F("Error When Loading The Auth", "error");
        return;
      }
      if (!n) {
        F("Email is required", "error"), I("signupUseremail");
        return;
      }
      if (!Ut(["signupUseremail"]).isValide) {
        F("Please fill the email correctly!", "error"), I("signupUseremail");
        return;
      }
      if (!s.get) {
        F("Password must be at least 6 characters", "error"), I("user-password");
        return;
      }
      if (s.get !== a.get) {
        F("Password and confirm password must be the same!", "error"), I("user-password-confirm");
        return;
      }
      await Vt(M.server.auth, n, s.get);
    },
    [n, s.get, a.get]
  );
  return /* @__PURE__ */ i(D, { className: "flex max-sm:flex-col items-center h-full", children: [
    /* @__PURE__ */ i("div", { className: "p-8 w-1/2 max-sm:w-full", children: [
      /* @__PURE__ */ i(
        "form",
        {
          onSubmit: async (r) => {
            r.preventDefault(), await oe("signup");
          },
          children: [
            /* @__PURE__ */ i("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "email" }),
              /* @__PURE__ */ e(
                le,
                {
                  controls: {
                    [wt]: {
                      err: "Invalid email",
                      succ: "Valid email"
                    }
                  },
                  placeholder: "@exmple.com",
                  inputName: "signupUseremail",
                  propositions: n && !n.includes("@") ? [n + "@gmail.com"] : []
                }
              )
            ] }),
            /* @__PURE__ */ i("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "Password" }),
              /* @__PURE__ */ e(Ce, { placeholder: "********", id: "user-password", state: s })
            ] }),
            /* @__PURE__ */ i("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "Confirm Password" }),
              /* @__PURE__ */ e(Ce, { placeholder: "********", id: "user-password-confirm", state: a })
            ] }),
            /* @__PURE__ */ e(X, { icon: (o == null ? void 0 : o.status) == "loading" ? ke : void 0, iconClassName: A("animate-spin"), type: "submit", className: "py-2 rounded-md w-full", children: "Sign Up" })
          ]
        }
      ),
      /* @__PURE__ */ i("p", { className: "mt-8 text-center text-sm", children: [
        /* @__PURE__ */ e(
          "span",
          {
            style: {
              ...t({
                color: "gray.opacity.2"
              })
            },
            children: "Already have an account?"
          }
        ),
        " ",
        /* @__PURE__ */ e(
          Fe,
          {
            onClick: (r) => {
              r.preventDefault(), E("focusedLoginView", 0);
            },
            children: "Login"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-8 w-1/2 max-sm:w-full", children: /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ e(
        "h2",
        {
          className: "mb-4 font-semibold text-2xl",
          style: {
            ...t({
              color: "primary"
            })
          },
          children: "Sigin Into Water Fetch"
        }
      ),
      /* @__PURE__ */ e("p", { className: "mb-4 capitalize", children: /* @__PURE__ */ e(L, { content: "water fetch is a platform give's the possiblity for doing more thing by dahbia card" }) }),
      /* @__PURE__ */ i("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12", children: /* @__PURE__ */ e("span", { className: "text-xl", children: "📦" }) }),
        /* @__PURE__ */ i("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("h3", { className: "font-medium text-lg", children: "History" }),
          /* @__PURE__ */ e(
            "p",
            {
              className: "text-sm",
              style: {
                ...t({
                  color: "gray.opacity.2"
                })
              },
              children: "See All Historys"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12", children: /* @__PURE__ */ e("span", { className: "text-xl", children: "💵" }) }),
        /* @__PURE__ */ i("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("h3", { className: "font-medium text-lg", children: "Payouts" }),
          /* @__PURE__ */ e(
            "p",
            {
              className: "text-sm",
              style: {
                ...t({
                  color: "gray.opacity.2"
                })
              },
              children: "Power Save Pays"
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}, Fs = () => {
  const t = x(), n = T.getOneFeild("loginUseremail", "value"), s = w("");
  U(
    "login",
    async () => {
      var r;
      if (!((r = M.server) != null && r.auth)) {
        F("Error When Loading The Auth", "error");
        return;
      }
      if (!n) {
        F("Email is required", "error");
        return;
      }
      if (!s.get) {
        F("Password must be at least 6 characters", "error");
        return;
      }
      await Ve(M.server.auth, n, s.get);
    },
    [n, s.get]
  );
  const a = U(
    "sign-in-facebook",
    async () => {
      var r;
      (r = M.server) != null && r.auth && await Re(M.server.auth, new Rt());
    },
    []
  ), o = U(
    "sign-in-google",
    async () => {
      var r;
      (r = M.server) != null && r.auth && await Re(M.server.auth, new Kt());
    },
    []
  );
  return /* @__PURE__ */ i(D, { className: "flex max-sm:flex-col items-center", children: [
    /* @__PURE__ */ i("div", { className: "p-8 w-1/2 max-sm:w-full", children: [
      /* @__PURE__ */ i(
        "form",
        {
          onSubmit: async (r) => {
            var l;
            if (r.preventDefault(), !((l = M.server) != null && l.auth)) {
              F("Error When Loading The Auth", "error");
              return;
            }
            if (n && s.get)
              try {
                await Ve(M.server.auth, n, s.get);
              } catch {
                F("Password Or Email Is Incorrect 😴", "error");
              }
            else n ? F("Password Required!", "warning") : F("Email Required!", "warning");
          },
          children: [
            /* @__PURE__ */ i("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "email : " }),
              /* @__PURE__ */ e(
                le,
                {
                  controls: {
                    [wt]: {
                      err: "Invalid email",
                      succ: "Valid email"
                    }
                  },
                  inputName: "loginUseremail",
                  placeholder: "@exmple.com",
                  propositions: n && !n.includes("@") ? [n + "@gmail.com"] : []
                }
              )
            ] }),
            /* @__PURE__ */ i("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "Password" }),
              /* @__PURE__ */ e(Ce, { placeholder: "********", state: s })
            ] }),
            /* @__PURE__ */ e(X, { type: "submit", className: "py-2 rounded-md w-full", children: "Login" })
          ]
        }
      ),
      /* @__PURE__ */ i("div", { className: "flex justify-evenly items-center my-3", children: [
        /* @__PURE__ */ e(
          K,
          {
            iconClassName: A((o == null ? void 0 : o.status) == "loading" && "animate-spin"),
            icon: (o == null ? void 0 : o.status) == "loading" ? ke : Yn,
            onClick: async () => {
              await oe("sign-in-google");
            }
          }
        ),
        /* @__PURE__ */ e(
          K,
          {
            iconClassName: A((a == null ? void 0 : a.status) == "loading" && "animate-spin"),
            icon: (a == null ? void 0 : a.status) == "loading" ? ke : Zn,
            onClick: async () => {
              await oe("sign-in-facebook");
            }
          }
        )
      ] }),
      /* @__PURE__ */ i("p", { className: "text-center text-sm", children: [
        /* @__PURE__ */ e(
          "span",
          {
            style: {
              ...t({
                color: "gray.opacity.2"
              })
            },
            children: "Don't have an account?"
          }
        ),
        " ",
        /* @__PURE__ */ e(
          Fe,
          {
            onClick: (r) => {
              r.preventDefault(), E("focusedLoginView", 1);
            },
            children: "Sign up"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-8 w-1/2 max-sm:w-full", children: /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ e(
        "h2",
        {
          className: "mb-4 font-semibold text-2xl",
          style: {
            ...t({
              color: "primary"
            })
          },
          children: "Login Into Water Fetch"
        }
      ),
      /* @__PURE__ */ e("p", { className: "mb-4 capitalize", children: /* @__PURE__ */ e(L, { content: "water fetch is a platform give's the possiblity for doing more thing by dahbia card" }) }),
      /* @__PURE__ */ i("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12", children: /* @__PURE__ */ e("span", { className: "text-xl", children: "📦" }) }),
        /* @__PURE__ */ i("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("h3", { className: "font-medium text-lg", children: "History" }),
          /* @__PURE__ */ e(
            "p",
            {
              className: "text-sm",
              style: {
                ...t({
                  color: "gray.opacity.2"
                })
              },
              children: "See All Historys"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12", children: /* @__PURE__ */ e("span", { className: "text-xl", children: "💵" }) }),
        /* @__PURE__ */ i("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("h3", { className: "font-medium text-lg", children: "Payouts" }),
          /* @__PURE__ */ e(
            "p",
            {
              className: "text-sm",
              style: {
                ...t({
                  color: "gray.opacity.2"
                })
              },
              children: "Power Save Pays"
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}, js = () => {
  const t = W("focusedLoginView");
  return /* @__PURE__ */ e(vt, { focused: t ?? 0, pages: [/* @__PURE__ */ e(Fs, {}), /* @__PURE__ */ e(Ms, {})] });
}, Es = ({ children: t = "" }) => {
  var r;
  const n = x(), s = dt(), a = Wt(), o = W("env.isDev");
  return /* @__PURE__ */ i("div", { className: "flex flex-col h-full overflow-hidden", children: [
    /* @__PURE__ */ e("div", { className: "p-2", children: /* @__PURE__ */ i("div", { className: "flex max-sm:flex-col items-center gap-3", children: [
      /* @__PURE__ */ i(
        "div",
        {
          style: {
            ...n(
              (s == null ? void 0 : s.emailVerified) && {
                outlineColor: "success.text"
              }
            )
          },
          className: A("relative rounded-full w-[100px] h-[100px] max-sm:w-[60px] max-sm:h-[60px] overflow-hidden", (s == null ? void 0 : s.emailVerified) && "outline-1 outline-offset-1"),
          children: [
            (s == null ? void 0 : s.photoURL) && /* @__PURE__ */ e("img", { src: (r = s == null ? void 0 : s.photoURL) == null ? void 0 : r.toString(), className: "w-full h-full object-cover" }),
            !(s != null && s.photoURL) && /* @__PURE__ */ e(et, { icon: qn })
          ]
        }
      ),
      /* @__PURE__ */ i("div", { className: "max-sm:flex max-sm:flex-col max-sm:justify-cente", children: [
        /* @__PURE__ */ e("h1", { className: "text-2xl", children: (a == null ? void 0 : a.nickname) || "No Name" }),
        /* @__PURE__ */ e("p", { children: a == null ? void 0 : a.email }),
        a && /* @__PURE__ */ i("div", { className: "flex items-center", children: [
          /* @__PURE__ */ e("span", { children: "Phone Number" }),
          " : ",
          (s == null ? void 0 : s.phoneNumber) || " - "
        ] }),
        /* @__PURE__ */ e(
          X,
          {
            onClick: ({ clientX: l, clientY: d }) => {
              Xt({
                x: l,
                y: d,
                menu: yt(
                  ...[
                    { label: "Profile", pathname: "personal" },
                    {
                      label: "Billing",
                      pathname: "billing"
                    },
                    {
                      label: "Security",
                      pathname: "security"
                    }
                  ].map(({ label: c, pathname: h }) => ({
                    label: c,
                    click() {
                      const p = document.createElement("a"), m = (o ? "http://localhost:2000" : "https://water-fetch-account.web.app") + "/profile/" + h;
                      p.target = "_blank", p.href = m, p.click();
                    }
                  })),
                  {
                    type: "separator"
                  },
                  {
                    async click() {
                      E("menu.id", null);
                    },
                    label: "Close"
                  }
                )
              });
            },
            className: "md:mt-4 max-md:mt-2 border border-transparent border-solid max-md:text-md",
            style: {
              ...n("primary.background", {
                color: "text.color",
                borderColor: "borders"
              })
            },
            icon: He.solid.faGear,
            children: /* @__PURE__ */ e(L, { content: "manage account" })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e(C, {}),
    /* @__PURE__ */ e(D, { className: "relative", children: t }),
    /* @__PURE__ */ e(C, {}),
    /* @__PURE__ */ e("div", { className: "flex justify-end gap-2 p-2", children: /* @__PURE__ */ e(
      X,
      {
        className: "max-sm:w-full sm:w-1/4 capitalize",
        style: {
          ...n("error")
        },
        onClick: async () => {
          if (!M.server)
            return;
          const { response: l } = await pe({
            title: "Logout",
            message: "Are you sure you want to logout?",
            buttons: ["No", "Yes"],
            defaultId: 1
          });
          l ? await Gt(M.server.auth) : F("Ignore Logout", "error");
        },
        children: /* @__PURE__ */ e(L, { content: "logout" })
      }
    ) })
  ] });
}, Ls = ({ children: t }) => {
  const n = dt();
  return /* @__PURE__ */ e("div", { className: "relative flex flex-col w-full h-full overflow-hidden", children: /* @__PURE__ */ e(
    wn,
    {
      render: async () => (await Jn(1e3), /* @__PURE__ */ i(Y, { children: [
        n && /* @__PURE__ */ e(Es, { children: t }),
        !n && /* @__PURE__ */ e(js, {})
      ] })),
      loading: /* @__PURE__ */ e(Se, { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2" })
    }
  ) });
}, Bs = ({ children: t }) => {
  const n = re.getTemp("profile-view");
  return /* @__PURE__ */ e(H, { hidden: !n, children: /* @__PURE__ */ i(ie, { className: "max-md:rounded-none w-5/6 max-md:w-full h-5/6 max-md:h-full", children: [
    /* @__PURE__ */ i("div", { className: "flex justify-between items-center p-3", children: [
      /* @__PURE__ */ e("h1", { className: "text-3xl", children: /* @__PURE__ */ e(L, { content: "Your Profile" }) }),
      /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e(
        K,
        {
          icon: V,
          onClick: () => {
            re.setTemp("profile-view", !1);
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ e(C, {}),
    /* @__PURE__ */ e(D, { children: /* @__PURE__ */ e(Ls, { children: t }) })
  ] }) });
}, Ds = () => {
  const t = Ke.getTemp("id"), n = Ke.getTemp("src"), s = u.createRef();
  return u.useEffect(() => {
    s.current && (s.current.onclose = () => {
      Yt();
    });
  }, [s.current]), /* @__PURE__ */ e(H, { hidden: !t, children: n && t && /* @__PURE__ */ e(ie, { className: "w-[70vw] h-[70vh] overflow-hidden", children: /* @__PURE__ */ e("iframe", { ref: s, className: "w-full h-full", id: t, src: n }) }) });
}, Ts = "data:audio/wav;base64,UklGRsgsAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YaQsAADz/4P/qP6y/dn8NPzG+4n7ePuN+8X7HvyZ/DT98P3L/sf/4wAeAnkD9ASOBkoIJAodDDcObxDHEjwVqBeIGX8amRoRGhgZzhdOFqAUzBLZEMQOkQxACs0HPAWOAr//1fzJ+aP2W/P373Ls0egP5S7hM90a2ezUNNFzzinNZs3Rzg3R2NP/1m3aCt7V4cXl0ukA7lHyvfZN+/v/xASvCbUO2RMgGYYeBiSqKWcvSTU/O+FAU0V7SONJU0klR9NDuT8QOwU2uzA0K4Ulpx+rGYUTRQ3eBl4AuPnz8hTsFOXr3avWQ8+4xxPASLissEiqfKUaoo2gTqEUpF+otq3Rs2y6cMG2yD/Q+NfV39jnCfBd+MwAZQkYEvUa6yMNLUY2qz8pSdJSU1xbZGdqzW7Lcb9yDHESbVtnaWCSWAxQCUexPQc0JyoEILwVPwujANH11uq/33bUE8mGvcix46VbmpuQMomrgwCAAIAAgACAN4VYjNWURp5yqDazXb7nybvVwuEP7oL6JAf/EwchLS6NOwpJvlZ+ZEhxh3v/f/9//3//f/9//3//f/9/iXZaay9fL1KeRIE2CSgtGRQKp/r66iHbD8u4ujyq0JlYiwCAAIAAgACAAIAAgACAAIAAgACAAIAAgGKBPpbQq9TBVdgT7xAGWR3NNFBMC2Sze/9//3//f/9//3//f/9//3//f/9//3//f/9/0H53afBSojusIxkLGvLe2EO/gKV0jQCAAIAAgACAAIAAgACAAIAAgACAAIAAgACASI9opJK6s9F16doBnxreM0xN22RIeP9//3//f/9//3//f/9//3//f/9//39NdZ9gL0pSMjoZUP+M5OHJVLLknm2PJoMAgACAAIAAgACAAIAAgACA/oD0kVWlu7q70fHpMwNEHcs1hUohWxJoMXLcecZ//3//f/9//3/Mf/FzK2QhUXY7kyPzCXrw+dlfxzi426vYodWZNJPojXuJC4fiiOGPaZvQqmu9pdL06RQC4hcAKoQ4JEQxTVVUuFndXclg3GJNYvdceVJxQ5wwFhtLBjf0E+Wh2EnO5MUAvzS5ZbSEsIitFq6vs1C+QM2l35HyGwPZEP4bzyS6Ky0xXjVjOKA6+DvwO483+S1eIJcSbwYT/F3zMuxB5jXhG92d2bLWZ9Rw09/WYt9o6sH0dP2BBAUKVQ59EdITSxU7FoAWbRbiFMgQRwxECNAE8QGE/5j98fu2+qP56vg/+B74OPm7+ur7i/ys/Fv8tPvB+m759/cu9kL0FvSS90z8/wA0Be0IPgwnD80RGhQoFhAYqBe1EmkL1gO5/Cb2DvBW6gbl7d9K2yzZw9wL5kXyK/7bCFYSsBoSIo0oFS5WMFAsDCLoE2MF7Pe266Dgf9ZwzZzHH8g3z43c/u2C/5oP6h2eKsI1Sj02PtQ35Sp8GKAEs/F/4OfQBcRcvSu++8Um1O3nLP6PE+YmozeoQsxFIUFFNQsjBgzy82ndLcrcvcq5ib1uyKnZUPAZCtsiCjcSQ0VGVkH+NDIikgkz7orVvsTWvGS9osW/1N7pOQSBH/gzST+EQXw7+S3mGRoAIuWn0DvFpMI6yBzViOg2AScaXy2uN/U47jFyI48OFfeK4ZTSI8w7zifY/uis/bQRuiKmLA0uDieoGKsGD/Vm5Z7avtcU3Zbp/PjBB9gUvh6VIVwcFxGcBPP4dO7G5nzlmOs79cL+MgPlA+oI1RAMGoUjLij4I7IWOgMI8CbkPuJC6jT7oA+NHrcj+BpdB3P4IfQY++0LkB0dJk8jcRUSAZXxxuxS8xsDvBNaHLQZ0wwZ/Mzvgu3R9X0DEBD4FGUP7QMt+EzxAPSx/BsG6wzMC0MF/P0Q+Bb4d/xSATsFiAVCA8oA2P5i/rD+sf5m/hb/8gBYA1oFrgOs//D6H/hP+4kBMwg9CtIEUvza9BX1Jf2bB9YNHQoo/zD0W/El+VUGGQ8YDfEA+vP475f3KAZNDygNPwCE84PwMvkkB0sOBQpw/Yfz7vPI/aoIZQuABI76uvUW+jgC2AeqBZ//UfrY+r/+jwIBAwsBEf+O/tb+4v47/48AZgJzArz/Cvyw+xQAgQXdBfL/Kfkq+bwASwhFBx7+wPZs+eUDSwqTBVz6vvWa/DQHMQlsAJf3xPheAoAIUQRy+8f4qv5uBc4EBf9W+/P9RwL9ApsAg/68/nb//f+6AIsBTQCP/TP92QAYBEYBk/tD+64B5QXdAL35SPu6AzwGp/66+HP9ewU7BPv7CfrXABgFmwA3+079UwIlAoX+m/17/54AbAAaABf/Gf7g/2gCWgBb/Cj+VwMEAu/7x/yQA0cDJ/wY/CUDTQO//Kj8gQJoApj99/2eATcB7P4f/wMAbwCkACz/LP7cAOAB5/3I/cECYgFa/KD/uAP//s/8EwICAl/9K/8HAqn/mv4tAHsAFQAr/y3/NQH6/4797gCKASH9o/9vAtn9jf5RAhD/iv6BAer//P4YAEAA3f/r/oUAzgAY/qwAHAGJ/dsA4ADY/RQBSwCh/nkA7/9T/37/cQB0/zf/TAGa/ggAKQEy/iMB9P8+/+4Anv/D/0UACgAY//MAJv/3/78Al/4qARj/+/8vAHv/AwBcAEH/tQCS/w4AkQA5/wsBK/+OAMX/2/9NAKX/NQDt/67/TQA9/2kAQP88AJr/0f8NAFr/cwBR/7oAWf+CAI7/MwDs//P/9v/V/8v/7/+p/wEA4f/Q/xsAiP8PAKz/q//l/5//xv/O/9b/sv8xAKP/ZADs/y4AzP9IAO7/9f9CALv/DQDA/xYAtv/D/yoA2P8TAN3/9/8WAKb//v/p/9L/BwDj/wkAPwASADkAQQAFACgAMQD+/xYAEwDX/+P////c/9v/AADq/+T/AgAUAOv/2v/y//r/2//P/+L/6v/n/9z/5f/u/+X/0//F/8H/xP/J/7r/rP+g/5z/ov+s/7H/r/+t/6r/qP+j/5v/nv+h/6H/q/+z/7j/t/+x/7H/tP+x/6n/pP+b/5L/lP+U/5D/lv+U/4r/if+B/3//fP9//4H/g/+G/3r/df90/3f/ev+D/4z/iv+T/5j/mP+g/67/sv+0/6b/n/+h/5b/lP+a/5f/lv+c/5b/k/+M/4T/iP+E/4X/jf+N/43/j/+N/5D/jP+H/37/f/9+/3v/h/+S/47/iv+I/4T/hP+B/4D/gf+G/4r/i/+H/4H/fP92/3L/bf9r/3b/ff+B/4T/h/+K/43/iP9//3P/a/9j/1v/VP9M/0L/Pf85/0H/Sv9O/1P/WP9c/17/XP9b/1r/WP9P/0T/PP83/zL/Lf8p/yP/H/8b/xb/Df8C///+/v78/vz++/76/vn++P4B/wv/Ef8X/xz/If8m/yv/MP80/zj/NP8v/yr/Jf8g/xv/F/8S/w7/Cv8F/wL/Av8G/wv/Ef8W/xv/IP8k/yn/Lv8y/zf/O/8//0P/R/9L/0//Uv9W/1n/Xf9g/2P/Zv9q/23/cP9y/3X/eP97/33/gP+C/4X/h/+K/4z/jv+Q/5L/lP+W/5j/mv+c/57/oP+i/6P/pf+n/6j/qv+s/63/r/+w/7H/s/+0/7b/t/+4/7n/u/+8/73/vv+//8D/wf/C/8P/xP/F/8b/x//I/8n/yv/L/8z/zf/N/87/z//Q/9D/0f/S/9P/0//U/9X/1f/W/9b/1//Y/9j/2f/Z/9r/2//b/9z/3P/d/93/3v/e/97/3//f/+D/4P/h/+H/4f/i/+L/4//j/+P/5P/k/+T/5f/l/+X/5v/m/+b/5//n/+f/6P/o/+j/6P/p/+n/6f/p/+r/6v/q/+r/6//r/+v/6//r/+z/7P/s/+z/7P/t/+3/7f/t/+3/7v/u/+7/7v/u/+7/7//v/+//7//v/+//7//w//D/8P/w//D/8P/w//D/8f/x//H/8f/x//H/8f/x//L/8v/y//L/8v/y//L/8v/y//L/8//z//P/8//z//P/8//z//P/8//z//P/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9f/1//X/9f/1//X/9f/1//X/9f/1//X/9f/1//X/9f/1//X/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/7//j/9P/w/+3/6//p/+f/5v/m/+b/5//o/+n/6//u//H/9P/4//3/AQAFAAkADAAOABAAEgATABQAFAAUABMAEAALAAUA///5//P/7f/o/+P/3//b/9n/2P/Y/9j/2v/c/9//5P/p/+7/9P/5////BAAKAA8AFAAZABwAHwAhACIAIgAhACAAHQAaABYAEQAMAAcAAgD9//j/8//u/+n/5f/i/9//3f/c/9z/3f/e/+D/4//n/+z/8P/1//r///8DAAgADAARABUAGAAbAB0AHgAeAB4AHAAaABgAFAAQAAwACAADAP//+//2//L/7v/q/+f/5P/i/+H/4P/g/+H/4//l/+j/6//v//T/+P/8/wAABAAIAAwADwATABYAGAAZABoAGgAaABkAFwAUABEADgAKAAYAAgD+//r/9//z/+//7P/p/+b/5f/k/+P/4//k/+b/6P/r/+7/8v/1//n//f8AAAQACAALAA8AEgAUABYAFwAYABgAFwAWABQAEQAOAAsABwAEAAAA/f/5//b/8v/v/+z/6f/o/+b/5v/m/+b/5//p/+v/7v/y//X/+f/8/wAAAwAGAAoADQAQABIAFAAVABUAFQAVABMAEgAPAAwACQAGAAIA///7//j/9P/x/+7/7P/q/+n/6P/o/+j/6f/r/+z/7//y//X/+f/8/wAAAwAHAAoADQAPABEAEgATABMAEwASABEADwAMAAkABgADAP//+//4//X/8v/v/+3/7P/r/+r/6v/r/+z/7f/v//L/9f/4//z///8DAAYACQAMAA4AEAARABEAEQAQAA8ADgAMAAkABgADAP//+//4//X/8v/w/+7/7f/s/+z/7f/t/+//8P/z//b/+f/8/wAABAAHAAkACwANAA4ADwAPAA4ADQAMAAoACAAFAAEA/v/6//f/9P/y//H/8P/v/+//7//w//H/8//1//j/+//+/wIABQAHAAkACwAMAAwADAALAAoACQAHAAQAAQD+//v/+f/2//T/8//y//L/8v/y//P/9f/3//n//P/+/wEAAwAGAAcACAAJAAkACQAIAAYABQACAAAA/v/8//n/+P/2//X/9f/1//X/9v/3//n/+//9////AQACAAQABQAGAAYABQAFAAMAAgAAAP///f/8//r/+f/4//j/+P/4//n/+//8//3//v///wAAAQACAAIAAgACAAEAAAAAAP///v/+//3//P/8//v/+//8//z//f/9//3//v/+//7////////////////////////////////////+//7//v/+//3//f/9//z//P/8//z//f/9//7//////wAAAAABAAEAAQAAAP///v/9//z/+//7//r/+v/7//z//f/+/wAAAQACAAIAAgACAAEA///+//z/+//6//r/+v/6//z//f///wEAAgACAAMAAgABAAAA/v/8//v/+v/6//r/+//8//7/AAABAAIAAgACAAEA///+//z/+//7//v/+//8//3///8AAAEAAQABAAAA///+//3//P/8//z//f/9//7///8AAAAAAAD//////v/+//3//f/9//7//v/+//7//v/+//7//v////////////7//v/+//3//f/9//3//v//////AAAAAP///v/+//3//P/8//3//v///wAAAAAAAP///v/9//z//P/9//7///8AAAAAAAD///7//f/8//z//f/+////AAAAAP///v/9//3//f/9//7////////////+//7//v/+//7//v/+///////+//7//v/+//7//v/+//7//v/+//////////7//v/9//3//v////////////7//f/9//3//v///wAA///+//3//f/9//7//////////v/9//3//v////////////7//v/+//7//////////v/+//7//v/+//7//v/////////+//7//v/+//////////7//v/+//7//////////v/+//7//////////v/+//7//v///////v/+//7//v///////v/+//7//v/+//7//v////7//v/+//7///////7//v/+//7///////7//v/+///////+//7//v/////////+//7//v///////v/+//7//v/+//7//v/+//7//v///////v/+//7///////7//v///////v/+//7///////7//v/+/////v/+//7///////7//v/+//7////+//7//v///////v/+//7////+//7//v////7//v/+/////v/+//7////+//7//v////7//v/+//7////+//7//v////7//v///////v/+/////v/+///////+//7////+//7//v/+/////v/+/////v/+///////+//7////+//7////+//7////+//7//v////7//v///////v///////v///////v///////v////7//v/+/////v/+/////v/+/////v////7//v////7//v////7//v/+//7//v////7//v/+//7////+/////v/+/////v/+/////v/+//7//v////7////+//7//v/+//7//v/+/////v////7////+//7//v/+//7//v/+//7////+/////v/+//7//v/+//7////+/////v////7////+/////v/+//7////+/////v////7//v/+/////v////7//v////7//v/+//7//v////7//v////7////+/////v/+/////v/+//////////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////", Os = () => {
  const t = we.getTemp("params"), n = we.getTemp("id"), s = x(), a = w(!1), o = we.useTemp("checked");
  u.useEffect(() => {
    typeof (t == null ? void 0 : t.checkboxChecked) == "boolean" && o.set(t.checkboxChecked);
  }, [t]), u.useEffect(() => {
    B.setOneFeild("dialog-list", "submited", null);
  }, [n]), u.useEffect(() => {
    B.setOneFeild("dialog-list", "focused", (t == null ? void 0 : t.defaultId) || 0);
  }, [t]), U(
    "dialog.cancel",
    () => {
      typeof (t == null ? void 0 : t.cancelId) == "number" && B.setOneFeild("dialog-list", "submited", t.cancelId);
    },
    [t]
  );
  const r = u.useMemo(() => n ? Ts : null, [n, t]);
  Zt(async () => {
    if (!r)
      return;
    const d = document.createElement("audio");
    d.src = r, await d.play();
  }, [n, t]);
  const l = z("preferences/animation.boolean");
  return /* @__PURE__ */ e(H, { hidden: !n, children: /* @__PURE__ */ e(
    tt,
    {
      className: "lg:w-1/2 max-lg:w-2/3",
      list: [
        (t == null ? void 0 : t.title) && /* @__PURE__ */ e("div", { className: "p-2", children: /* @__PURE__ */ e("h1", { className: "text-2xl", children: t == null ? void 0 : t.title }) }),
        t && /* @__PURE__ */ i("div", { className: "flex gap-5 p-2 w-full cursor-pointer", children: [
          !t.icon && /* @__PURE__ */ i(Y, { children: [
            t.type == "question" && /* @__PURE__ */ e(Q, { icon: $n, className: "text-4xl" }),
            t.type == "info" && /* @__PURE__ */ e(
              Q,
              {
                style: {
                  ...s({
                    color: "notifay.info"
                  })
                },
                icon: Oe,
                className: "text-4xl"
              }
            ),
            t.type == "warning" && /* @__PURE__ */ e(
              Q,
              {
                style: {
                  ...s({
                    color: "notifay.warning"
                  })
                },
                icon: Te,
                className: "text-4xl"
              }
            )
          ] }),
          typeof t.icon == "string" && /* @__PURE__ */ e(Pn, { src: t.icon }),
          /* @__PURE__ */ i(
            "div",
            {
              onClick: () => {
                a.set(!a.get);
              },
              className: "flex justify-between items-center w-full",
              children: [
                /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: t.message }) }),
                t.detail && /* @__PURE__ */ e(N, { className: "ml-2", icon: a.get ? Le : ye })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e(D, { className: A("h-[0vh] overflow-y-auto", a.get && (t == null ? void 0 : t.detail) && "h-[30vh]", l && "transition-[height]"), children: (t == null ? void 0 : t.detail) && /* @__PURE__ */ e("div", { className: "p-2", children: /* @__PURE__ */ e(de, { value: t.detail }) }) }),
        t && /* @__PURE__ */ i(Me, { focusId: "dialog-list-focusable", className: "flex justify-between items-center p-2", children: [
          /* @__PURE__ */ e("div", { children: t.checkboxLabel && /* @__PURE__ */ e(
            ut,
            {
              id: "check",
              state: o,
              config: {
                style: "checkbox",
                onActive: `${t.checkboxLabel}`,
                onDisactive: `${t.checkboxLabel}`
              }
            }
          ) }),
          t.buttons && /* @__PURE__ */ e("div", { className: "flex gap-1 p-2 overflow-x-auto", children: /* @__PURE__ */ e(
            ce,
            {
              slotId: "dialog-list",
              data: t.buttons,
              component: ({ item: d, index: c, status: h, handelSubmit: p, handelFocus: m }) => /* @__PURE__ */ e(
                X,
                {
                  className: "px-4 max-md:w-full",
                  style: {
                    ...s(
                      c != t.defaultId && "gray.opacity",
                      c != t.defaultId && { color: "text.color" },
                      h.isFocused && {
                        outlineColor: "primary"
                      },
                      h.isSubmited && {
                        backgroundColor: "primary",
                        color: "primary.content"
                      }
                    )
                  },
                  onPointerDown: m(),
                  onClick: p(),
                  children: d
                },
                c
              )
            }
          ) })
        ] })
      ]
    }
  ) });
}, Js = () => {
  const [t, n] = ze({ hour: null, minute: null }), [s, a] = ze("hours"), o = [12, ...Ie(1, 11)], r = [...Ie(0, 19)], l = (f, b, P) => {
    const k = f / b * 2 * Math.PI, O = P + P * Math.cos(k - Math.PI / 2), _ = P + P * Math.sin(k - Math.PI / 2);
    return { x: O, y: _ };
  }, d = (f) => {
    n(s === "hours" ? { ...t, hour: f } : { ...t, minute: f });
  }, c = s === "hours" ? o : r, h = s === "hours" ? 12 : 20, p = 120, m = x(), g = w("am"), v = w("0"), y = u.useMemo(() => {
    const f = s === "hours" ? t.hour : t.minute;
    if (f === null) return null;
    const b = f / h * 2 * Math.PI, P = p + p * Math.cos(b - Math.PI / 2), k = p + p * Math.sin(b - Math.PI / 2);
    let O = s == "minutes" ? {
      0: [0, 19],
      20: [20, 39],
      40: [40, 59]
    } : {
      0: [0, 12],
      12: [12, 24]
    };
    const [_, Pt] = O[s == "minutes" ? v.get : g.get];
    return {
      x: P,
      y: k,
      colorId: be(_, f, Pt) ? "primary" : "gray.opacity"
    };
  }, [v.get, g.get, t, h, s]);
  return /* @__PURE__ */ e(H, { children: /* @__PURE__ */ i(ie, { className: "flex flex-col max-md:rounded-none w-1/2 max-md:w-full max-md:h-full", children: [
    /* @__PURE__ */ i("div", { className: "flex justify-between items-center gap-2 p-2", children: [
      /* @__PURE__ */ e("h1", { className: "text-3xl", children: /* @__PURE__ */ e(L, { content: "Date" }) }),
      /* @__PURE__ */ e("div", { className: "flex", children: /* @__PURE__ */ e(
        K,
        {
          icon: He.solid.faXmark,
          onClick: () => {
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ e(C, {}),
    /* @__PURE__ */ e("div", { className: "flex justify-center items-center w-full h-full", children: /* @__PURE__ */ i("svg", { width: "300", height: "300", className: "relative", children: [
      y !== null && /* @__PURE__ */ i(Y, { children: [
        /* @__PURE__ */ e(
          "circle",
          {
            cx: "150",
            cy: "150",
            r: "10",
            style: {
              ...m({
                fill: y.colorId
              })
            }
          }
        ),
        /* @__PURE__ */ e(
          "line",
          {
            x1: "150",
            y1: "150",
            x2: y.x + 30,
            y2: y.y + 30,
            style: {
              ...m({
                stroke: y.colorId
              })
            },
            strokeWidth: "2"
          }
        )
      ] }),
      c.map((f, b) => {
        const { x: P, y: k } = l(b, h, 120);
        let O = s === "hours" && t.hour === +g.get + f || s === "minutes" && t.minute === +v.get + f;
        return /* @__PURE__ */ i(
          "g",
          {
            onClick: () => {
              s == "minutes" ? d(+v.get + f) : d(+g.get + f);
            },
            className: "cursor-pointer",
            children: [
              /* @__PURE__ */ e(
                "circle",
                {
                  cx: P + 30,
                  cy: k + 30,
                  r: s == "hours" ? "20" : "15",
                  style: {
                    ...m(
                      {
                        fill: "gray.opacity"
                      },
                      O && {
                        fill: "primary"
                      }
                    )
                  }
                }
              ),
              /* @__PURE__ */ i(
                "text",
                {
                  x: P + 30,
                  y: k + 30,
                  dy: "0.3em",
                  textAnchor: "middle",
                  fontSize: s == "minutes" ? "13" : "16",
                  style: {
                    ...m(
                      {
                        fill: "text.color"
                      },
                      O && {
                        fill: "primary.content"
                      }
                    )
                  },
                  className: "select-none",
                  children: [
                    s == "minutes" && f + +v.get,
                    s == "hours" && f + +g.get
                  ]
                }
              )
            ]
          },
          f
        );
      })
    ] }) }),
    /* @__PURE__ */ e(C, {}),
    /* @__PURE__ */ e("div", { className: "p-3 text-5xl text-center select-none", children: /* @__PURE__ */ i("span", { className: "cursor-pointer", children: [
      /* @__PURE__ */ e(
        "span",
        {
          style: {
            ...m(
              s == "hours" && {
                color: "primary"
              }
            )
          },
          onClick: () => {
            a("hours");
          },
          className: A(s == "hours" && "font-bold"),
          children: t.hour == null ? "--" : t.hour >= 10 ? t.hour : `0${t.hour}`
        }
      ),
      ":",
      /* @__PURE__ */ e(
        "span",
        {
          style: {
            ...m(
              s == "minutes" && {
                color: "primary"
              }
            )
          },
          onClick: () => {
            a("minutes");
          },
          className: A(s == "minutes" && "font-bold"),
          children: t.minute == null ? "--" : t.minute >= 10 ? t.minute : `0${t.minute}`
        }
      )
    ] }) }),
    /* @__PURE__ */ e(C, {}),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "relative h-[90px] overflow-hidden", children: /* @__PURE__ */ e(
      vt,
      {
        pages: [
          /* @__PURE__ */ e("div", { className: "flex justify-center items-center px-2 w-full h-full", children: /* @__PURE__ */ e(
            We,
            {
              tabs: [
                {
                  label: "AM",
                  value: "0"
                },
                {
                  label: "PM",
                  value: "12"
                }
              ],
              state: g
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "flex justify-center items-center px-2 w-full h-full", children: /* @__PURE__ */ e(
            We,
            {
              tabs: [
                {
                  label: "+00",
                  value: "0"
                },
                {
                  label: "+20",
                  value: "20"
                },
                {
                  label: "+40",
                  value: "40"
                }
              ],
              state: v
            }
          ) })
        ],
        focused: s == "hours" ? 0 : 1
      }
    ) }) }),
    /* @__PURE__ */ e(C, {}),
    /* @__PURE__ */ i("div", { className: "flex gap-1 p-2", children: [
      /* @__PURE__ */ e(
        X,
        {
          className: "p-4 capitalize",
          style: {
            ...m("gray.opacity", {
              color: "text.color"
            })
          },
          onClick: () => {
            n({
              hour: null,
              minute: null
            });
          },
          children: /* @__PURE__ */ e(L, { content: "clear" })
        }
      ),
      /* @__PURE__ */ e(X, { className: "p-4 capitalize", onClick: () => {
      }, children: /* @__PURE__ */ e(L, { content: "set" }) })
    ] })
  ] }) });
}, Qs = () => {
  const t = x(), n = ee.getTemp("id"), s = ee.getTemp("list"), a = T.getOneFeild("find-item-from-enum", "value"), [o, r] = qt(() => a, [a], 700), l = u.useMemo(() => (s == null ? void 0 : s.filter(({ desc: m, content: g }) => _n([g, m].join(" "), String(r)))) || [], [s, r]), d = Ne(l, "enum-list", "focused"), c = Ne(l, "enum-list", "submited"), h = z("preferences/animation.boolean");
  u.useEffect(() => {
    n && c && (ee.setTemp("result", c.value), B.setOneFeild("enum-list", "focused", null), B.setOneFeild("enum-list", "submited", null));
  }, [c, n]), u.useEffect(() => {
    E("enumIsLoading", o);
  }, [o]);
  const p = u.createRef();
  return u.useEffect(() => {
    I("find-item-from-enum");
  }, [n]), /* @__PURE__ */ e(
    H,
    {
      hidden: !n,
      onClick: ({ target: m }) => {
        var g;
        (g = p.current) != null && g.contains(m) || ee.setTemp("id", null);
      },
      children: s && /* @__PURE__ */ i(
        "div",
        {
          ref: p,
          className: "flex flex-col border border-transparent border-solid rounded-md w-[60vw] max-md:w-3/4 h-[400px] max-md:h-3/4 overflow-hidden",
          style: {
            ...t("secondary.background", {
              borderColor: "borders"
            })
          },
          children: [
            /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ e(le, { inputName: "find-item-from-enum" }) }),
              /* @__PURE__ */ e(C, {})
            ] }),
            /* @__PURE__ */ i(D, { children: [
              !o && /* @__PURE__ */ e(
                Ee,
                {
                  minSize: 40,
                  maxSize: 200,
                  data: l || [],
                  slotId: "enum-list",
                  focusId: "enum-list",
                  itemSize: 40,
                  countLastItems: -1,
                  component: ({ data: m, style: g, status: v, handel: y }) => {
                    const f = x(), b = ee.getTemp("choised"), P = w(!1);
                    return /* @__PURE__ */ e(
                      "div",
                      {
                        onMouseEnter: (k) => P.set(!0),
                        onMouseLeave: (k) => P.set(!1),
                        style: {
                          ...g,
                          ...f(
                            b == m.value && {
                              color: "primary"
                            },
                            P.get && "gray.opacity",
                            v.isFocused && "primary",
                            v.isFocused && {
                              color: "primary.content"
                            }
                          )
                        },
                        onClick: () => {
                          y.focus(), y.submit();
                        },
                        className: A("cursor-pointer text-lg p-1 max-md:p-2 flex items-center justify-center", b == m.value && "font-bold"),
                        children: /* @__PURE__ */ e("span", { children: m.content || m.value })
                      }
                    );
                  }
                }
              ),
              o && /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-6", children: /* @__PURE__ */ e(Se, {}) })
            ] }),
            /* @__PURE__ */ i("div", { className: A("h-[0px]", h && "transition-[height] duration-200", (d == null ? void 0 : d.desc) && "h-[100px]"), children: [
              /* @__PURE__ */ e(C, {}),
              /* @__PURE__ */ e(
                "div",
                {
                  className: "flex justify-center items-center p-4 h-full text-center",
                  style: {
                    ...t("primary.background")
                  },
                  children: /* @__PURE__ */ e(de, { value: (d == null ? void 0 : d.desc) || "" })
                }
              )
            ] })
          ]
        }
      )
    }
  );
}, $s = ({ children: t }) => /* @__PURE__ */ i(Y, { children: [
  t,
  /* @__PURE__ */ e(ds, {}),
  /* @__PURE__ */ e(hs, {}),
  /* @__PURE__ */ e(Ds, {}),
  /* @__PURE__ */ e(Bs, {}),
  /* @__PURE__ */ e(ns, {}),
  /* @__PURE__ */ e(ws, {}),
  /* @__PURE__ */ e(Ns, {}),
  /* @__PURE__ */ e(Ss, {}),
  /* @__PURE__ */ e(es, {}),
  /* @__PURE__ */ e(vs, {}),
  /* @__PURE__ */ e(Qs, {}),
  /* @__PURE__ */ e(ms, {}),
  /* @__PURE__ */ e(Os, {}),
  /* @__PURE__ */ e(zs, {}),
  /* @__PURE__ */ e(Nn, {}),
  /* @__PURE__ */ e(ss, {})
] }), _s = u.memo(
  () => {
    const [t, n] = ze(!1), s = u.createRef(), a = () => {
      const o = ["#FF5733", "#FFBD33", "#33FF57", "#3357FF", "#D133FF", "red", "blue", "yellow"];
      return o[Math.floor(Math.random() * o.length)];
    };
    return Cn(() => {
      const o = setTimeout(() => {
        n(!0);
      }, 8e3);
      return () => clearTimeout(o);
    }, []), /* @__PURE__ */ e("div", { className: "relative flex justify-center items-center w-screen h-screen", children: /* @__PURE__ */ e("div", { ref: s, className: A("absolute inset-0 pointer-events-none transition-opacity duration-[5000ms] ease-out", t && "opacity-0"), children: Ie(1, 30).map((o, r) => /* @__PURE__ */ e(
      "div",
      {
        className: "absolute opacity-70 confetti-piece",
        style: {
          top: -30,
          backgroundColor: a(),
          left: Math.random() * 100 + "vw",
          animationDuration: Math.random() * 3 + 2 + "s",
          animationDelay: Math.random() * 2 + "s"
        }
      },
      r
    )) }) });
  },
  () => !0
), eo = () => {
  var a;
  const t = re.getTemp("applications"), n = je("list.applications");
  u.useEffect(() => {
    var r;
    if (!((r = M.server) != null && r.db))
      return;
    const o = Jt(_t(M.server.db, "projects"), $t("label", "!=", null));
    return en(o, ({ docs: l }) => {
      n.set(
        l.map((d) => {
          const c = d.data();
          return {
            label: c.label,
            imageUrl: c.imageUrl,
            site: c.site
          };
        })
      );
    });
  }, []);
  const s = x();
  return /* @__PURE__ */ e(mt, { hidden: !t, children: /* @__PURE__ */ i(ie, { className: "w-[90vw] max-h-[90vh]", children: [
    /* @__PURE__ */ i("div", { className: "flex justify-between items-center p-2", children: [
      /* @__PURE__ */ e("h1", { className: "text-3xl capitalize", children: "water fetch applications" }),
      /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(
        K,
        {
          icon: He.solid.faXmark,
          onClick: () => {
            tn();
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ e(C, {}),
    /* @__PURE__ */ e(D, { children: /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center gap-2 p-2", children: (a = n.get) == null ? void 0 : a.map(({ label: o, imageUrl: r, site: l }, d) => /* @__PURE__ */ e("a", { href: l, target: "_blank", children: /* @__PURE__ */ i(ie, { className: "w-fit", children: [
      /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-3", children: /* @__PURE__ */ e(
        "div",
        {
          className: "flex justify-center items-center border border-transparent border-solid rounded-full w-[100px] h-[100px] overflow-hidden",
          style: {
            ...s("primary.background", {
              borderColor: "borders"
            })
          },
          children: /* @__PURE__ */ e("img", { src: r ?? void 0, className: "w-full h-full object-cover" })
        }
      ) }),
      /* @__PURE__ */ e(C, {}),
      /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ e("p", { className: "text-center text-xl max-md:text-md", children: o }) })
    ] }) }, d)) }) })
  ] }) });
};
export {
  eo as ApplicationsLayout,
  es as CameraView,
  ns as Commands,
  _s as CongratulationsView,
  Js as DateLayout,
  ss as DevReadingHTML,
  Os as DialogBoxLayout,
  Qs as EnumLayout,
  ts as FindCommandInput,
  os as FindSettingFeild,
  Bs as FixedProfileView,
  Gs as Header,
  rs as HeaderNotification,
  is as HeaderSettings,
  Ds as IframeLayout,
  ue as KeyboardButton,
  ls as KeyboardShortcuts,
  ds as KeyboardView,
  $s as Layoutes,
  Ys as LeftSide,
  js as LoginContent,
  Fs as LoginPage,
  ms as MenuList,
  fs as MenuRecord,
  us as NotifaysSlot,
  vs as Notifications,
  hs as PDFView,
  Es as ProfileContent,
  Ls as ProfileView,
  Zs as RightSide,
  Ns as SettingUpdateView,
  Ps as SettingUpdating,
  ys as Settings,
  ps as SettingsList,
  xs as SettingsSide,
  gs as SettingsTree,
  ws as SettingsView,
  Ms as SignupPage,
  Cs as ToastItem,
  zs as Toasts,
  Ss as UpdateKeyboardShortcut,
  As as UserSetting,
  qs as Window,
  cs as dataKeyboard,
  wt as emailRegExp,
  xt as getTree,
  Ge as headerVisibility
};
