import { j as e, u as te, a as i, L as N, C as ae, E as K, T as M, F as T, k as P, S as B, I as Je, e as Pt, c as Ie, f as $e, g as Nt, b as Ct, P as zt, J as _e, A as Se, d as kt } from "./PinFeild-d2tlp-XL.mjs";
import { g as we, d as R, u as b, i as et, j as It, k as tt, t as St, l as Ft, m as G, a as C, n as Mt, s as I, o as nt, p as ne, e as se, f as D, q as E, r as L, h as st, v as J, w as ve, x as jt, b as w, y as rt, z as Z, c as Y, A as Fe, B as Et, C as Lt, D as X, E as Bt, F as me, G as Dt, H as V, I as pe, J as Tt, K as re, L as ot, M as Ot, N as Ce, O as at, P as Qe, Q as Qt, S as z, R as F, T as Ht, U as Ut, V as He, W as Ue, X as Rt, Y as Vt, Z as Me, _ as it, $ as lt, a0 as je, a1 as Kt, a2 as Wt, a3 as Xt, a4 as Re, a5 as Gt, a6 as Pe, a7 as Yt, a8 as _, a9 as Zt, aa as qt, ab as Jt, ac as $t, ad as _t } from "./index-B28S0mrD.mjs";
import { p as Q, e as en, F as ie, f as tn, T as j, v as nn, h as ge, K as Ae, C as O, u as ye, t as sn, L as le, M as ce, z as rn, V as ct, i as on, d as an, m as ln, n as dt, B as ft, A as cn, E as dn, O as fn, S as mn, N as un, a as vn, P as hn, D as pn, R as gn, b as An, I as yn, q as ze, l as bn, c as xn, j as wn, y as Pn } from "./ViewPage-8PHHW31w.mjs";
import m, { useState as Nn, useEffect as Cn } from "react";
import { h as oe, m as q, i as de, s as k, t as A, j as Ee, k as be, l as Le, e as H, n as Be, g as mt, D as zn, o as kn, p as De, q as In, u as ut, v as Sn, w as Te, x as Oe, y as Fn, z as vt, A as he, B as Mn, C as ht, E as pt, F as jn, G as gt, H as En, I as Ve, J as Ln, K as xe, L as Bn, M as Dn, N as Tn, O as On, P as Qn, Q as Hn, R as Un, T as Rn, U as Vn, S as Kn, V as Wn, W as Xn, X as Gn, Y as ke, Z as Yn, _ as Zn, $ as qn, a0 as Jn, a1 as $n, a2 as _n, r as At, a3 as es } from "./index-CYYSxI_0.mjs";
import { allIcons as yt } from "./apis.js";
import { B as W, C as $ } from "./Card-IzIbVky-.mjs";
function ts() {
  const n = we.getTemp("type"), t = we.getTemp("id");
  return R(
    "camera-take",
    () => {
      if (t && n == "take") {
        const r = document.querySelector("#camera-view  video");
        if (!r)
          return;
        const a = document.createElement("canvas");
        a.width = r.videoWidth, a.height = r.videoHeight;
        const s = a.getContext("2d");
        s == null || s.drawImage(r, 0, 0, a.width, a.height);
        const o = a.toDataURL("image/jpeg");
        we.setTemp("result", o);
      }
    },
    [n, t]
  ), /* @__PURE__ */ e(Q, { hidden: !t, children: /* @__PURE__ */ e(en, {}) });
}
function ns() {
  const [n] = te("press ? for help");
  return /* @__PURE__ */ e(ie, { "aria-multiline": !1, placeholder: `${n} 😊`, inputName: "findCommand" });
}
function ss() {
  const n = b(), t = et(), r = It(), a = m.useMemo(() => {
    const h = tt.getState();
    return r.map((y) => ({
      command: y,
      keys: oe.join(y, t, "commandId->command")
    })).filter((y) => y.keys.filter((x) => {
      if (!x.when)
        return !0;
      try {
        return St(x.when)({
          state: h,
          focused: null
        });
      } catch {
        return !1;
      }
    }).length || !y.keys.length);
  }, [t, r]), s = Ft(), o = G("commandId"), l = C("commands/enum/prefixes.object"), d = G("commands.isLoading"), c = Mt.getAll(), v = m.useMemo(() => {
    const h = Object.entries(l || {}).map(([u, x]) => ({
      key: u,
      settingKey: `${x}.enum`,
      value: x
    })), y = {};
    return oe.fullJoinOne(h, s, "settingKey->settingId").forEach(({ data: u, joinTo: x }) => {
      var S, U;
      y[u.key] = {
        lines: (U = (S = x == null ? void 0 : x.config) == null ? void 0 : S.list) == null ? void 0 : U.map(({ value: fe, content: wt }) => ({
          id: fe,
          content: wt,
          checked: (x == null ? void 0 : x.value) == fe
        })),
        // desc: "commands/enum/prefixes.object"
        onSubmit(fe) {
          I.setOneFeild(u.settingKey, "value", fe.id);
        }
      };
    }), q(
      {
        commands: {
          lines: a.map(({ command: u, keys: x }) => ({
            content: u.label || u.commandId,
            keyPanding: x.map(({ value: S }) => S),
            id: u.commandId
          })),
          onSubmit(u) {
            nt(u.id);
          }
        },
        settings: {
          lines: s.map(({ name: u, settingId: x, desc: S }) => ({
            id: x,
            tools: [],
            content: u || x,
            sub: S
          })),
          onSubmit(u) {
            ne(u.id);
          }
        },
        actions: {
          lines: c.map(({ actionId: u, status: x }) => ({
            content: `${de(u.replaceAll(/[^a-z0-9A-Z]/gi, " ").replaceAll(/ +/gi, " "), void 0, "normal")} ${x == "loading" ? "[running...]" : ""}`,
            id: u
          })),
          onSubmit(u) {
            u.id && se(u.id);
          }
        }
      },
      y
    );
  }, [a, s, l, c]), p = D.getOneFeild("findCommand", "value"), f = m.useMemo(() => !!(p != null && p.match(/^ *\?/)), [p]), g = m.useMemo(() => q(
    f && {
      help: {
        lines: Object.entries(v).map(([h]) => ({
          id: h,
          content: h
        })),
        onSubmit(h) {
          E("commandId", h.id);
        }
      }
    },
    !f && v
  ), [v, p, f]);
  return m.useEffect(() => {
    o && f && E("commandId", "help");
  }, [o, p, f]), m.useEffect(() => {
    L.setOneFeild("cmds/list", "focused", 0);
  }, [p]), /* @__PURE__ */ e(
    Q,
    {
      onLoadContent: () => {
        k("findCommand");
      },
      onPointerDown: (h) => {
        h.currentTarget == h.target && E("commandId", null);
      },
      hidden: !o,
      children: /* @__PURE__ */ i(
        "div",
        {
          style: {
            ...n({
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
                  o && {
                    height: "40px"
                  },
                  !o && {
                    height: "0px"
                  }
                ),
                children: [
                  /* @__PURE__ */ e(
                    "div",
                    {
                      className: "p-2 text-center uppercase",
                      style: {
                        ...n({
                          background: st("to right", "gray.opacity", "transparent", "gray.opacity")
                        })
                      },
                      children: o
                    }
                  ),
                  /* @__PURE__ */ e(N, {})
                ]
              }
            ),
            /* @__PURE__ */ i(
              "div",
              {
                className: "flex justify-between items-center gap-3 p-2",
                onClick: () => {
                  k("findCommand");
                },
                children: [
                  /* @__PURE__ */ e(ns, {}),
                  d && /* @__PURE__ */ e(ae, {})
                ]
              }
            ),
            /* @__PURE__ */ e(N, {}),
            /* @__PURE__ */ e(tn, { data: g })
          ]
        }
      )
    }
  );
}
function rs() {
  const n = G("dev.html.hoverPosition"), t = b();
  return /* @__PURE__ */ e(K, { children: n && /* @__PURE__ */ e(
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
        ...t("htmlContentHover"),
        left: `${n.x}px`,
        top: `${n.y}px`,
        width: `${n.width}px`,
        height: `${n.height}px`
      }
    }
  ) });
}
function os() {
  const n = J.getOneFeild("settings", "focused"), t = ve.getTemp("config"), r = D.getOneFeild("findConfigurations", "value");
  jt("findConfigurations");
  const a = b(), s = G("configurations.found.length"), o = m.useMemo(() => de(n || "no settings focused", "camel", "normal"), [n]), [l] = te(`search ${o} in list`), [d] = te(o), c = w(!1), v = D.getOneFeild("findConfigurations-local", "value");
  return rt(
    () => {
      typeof v == "string" && D.setOneFeild("findConfigurations", "value", v);
    },
    [v],
    500
  ), /* @__PURE__ */ e(
    "div",
    {
      className: "p-2 border-transparent border-b border-solid",
      onClick: () => {
        k("findConfigurations");
      },
      children: /* @__PURE__ */ i("div", { className: "relative w-full", children: [
        /* @__PURE__ */ e(
          ie,
          {
            selectWhenFocusIn: !0,
            inputName: "findConfigurations-local",
            placeholder: l,
            propositions: (n == "user" ? ["id", "name", "changed"] : n == "keyboardShortcuts" ? ["key", "label", "commandId"] : []).map((p) => `@${p}`).filter((p) => !(r != null && r.includes(p))),
            tabIndex: t ? -1 : 1
          }
        ),
        /* @__PURE__ */ e("div", { className: "top-1/2 right-2 absolute flex items-center gap-2 -translate-y-1/2", children: !!r && /* @__PURE__ */ e(
          j,
          {
            title: "clear",
            onClick: () => {
              D.setOneFeild("findConfigurations-local", "value", "");
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
                    /* @__PURE__ */ e(M, { content: "found" }),
                    " ",
                    s,
                    " ",
                    /* @__PURE__ */ e(M, { content: d })
                  ] }),
                  c.get && /* @__PURE__ */ i("span", { children: [
                    " ",
                    "(",
                    /* @__PURE__ */ e(M, { content: "Delete" }),
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
const Ke = "visibility/header.boolean";
function Zs({ children: n }) {
  const t = C(Ke), r = w(!1), a = Z("Shift");
  m.useEffect(() => {
    const c = (v) => {
      const p = v.x * 100 / innerWidth;
      r.set(v.y <= 100 && Le(25, p, 75));
    };
    return document.addEventListener("mousemove", c), () => document.removeEventListener("mousemove", c);
  }, []);
  const s = b(), o = G("window.isFocused"), l = C("preferences/animation.boolean"), d = m.useMemo(() => s(o ? "primary.background" : "secondary.background", {
    borderColor: "borders",
    boxShadow: Y([
      {
        blur: 10,
        x: 0,
        y: 3,
        size: 0,
        colorId: "shadow.color"
      }
    ])
  }), [s, o]);
  return /* @__PURE__ */ i("div", { className: "top-0 z-[10000000000000000000000000000000000000] absolute inset-x-0", children: [
    /* @__PURE__ */ e(
      "div",
      {
        onClick: () => {
          I.setOneFeild(Ke, "value", !t);
        },
        title: t ? "hide header bar" : "open header bar",
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
          !r.get || !a ? "h-[0px]" : "border-b border-x h-[30px]"
        ),
        style: d,
        children: /* @__PURE__ */ e(T, { icon: t ? Ee : be })
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        className: A(
          "relative border-b border-solid border-transparent box-content flex h-[0px] items-center justify-between overflow-hidden",
          t && "h-[50px]",
          l && "transition-[height]"
        ),
        style: {
          ...d
        },
        children: n
      }
    )
  ] });
}
function as() {
  const n = Fe("notification.header"), t = m.useMemo(() => (Array.isArray(n.get) ? n.get : []).slice(0, 3), [n.get]), r = b();
  return /* @__PURE__ */ e(
    "div",
    {
      className: "h-fit",
      style: {
        ...r({
          background: st("right", "secondary", "primary"),
          borderColor: "borders",
          color: "primary.content"
        })
      },
      children: !!t.length && /* @__PURE__ */ e(
        nn,
        {
          data: t,
          slotId: "header-notifications",
          focusId: "header-notifications",
          component: ({ index: a, item: s }) => /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ i("div", { className: "flex justify-between items-center p-3", children: [
              /* @__PURE__ */ e("div", { children: s.message || "empty message" }),
              /* @__PURE__ */ e("div", { className: "flex tools", children: /* @__PURE__ */ e(
                P,
                {
                  onClick: () => {
                    n.set((o) => {
                      const l = o == null ? void 0 : o[a];
                      return l && (l.expanded = !l.expanded), o;
                    });
                  },
                  icon: H
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
                  s.expanded && "h-[200px]"
                ),
                children: /* @__PURE__ */ e(B, { children: s.desc || "" })
              }
            )
          ] })
        }
      )
    }
  );
}
const is = "visibility/configurations.boolean", ls = () => {
  const n = J.getOneFeild("settings", "focused"), t = m.useMemo(() => de(String(n), "camel", "normal"), [n]), [r] = te(t);
  return /* @__PURE__ */ i("div", { className: "flex justify-between items-center p-2", children: [
    /* @__PURE__ */ e("h1", { className: "font-bold text-2xl capitalize", children: r }),
    /* @__PURE__ */ e("div", { className: "tools", children: /* @__PURE__ */ e(
      j,
      {
        position: {
          x: "left",
          y: "bottom"
        },
        title: "close view configurations",
        children: /* @__PURE__ */ e(
          P,
          {
            onClick: () => {
              I.setOneFeild(is, "value", !1);
            },
            icon: H
          }
        )
      }
    ) })
  ] });
};
function cs() {
  const n = Et(), t = L.getOneFeild("keyboardShortcuts", "focused");
  return R(
    "keyboard/update",
    () => {
      if (t == null)
        return;
      const r = n[t];
      r && (L.setOneFeild("keyboardShortcuts", "submited", t), E("keyboard.commandId", r.commandId), k("edit-keyPanding"));
    },
    [t, n]
  ), /* @__PURE__ */ e(
    ge,
    {
      itemSize: 30,
      countLastItems: 1,
      focusId: "keyboardShortcuts",
      slotId: "keyboardShortcuts",
      data: n,
      overflow: {
        top: 3,
        bottom: 3
      },
      component: ({ data: r, index: a, status: s, handel: o, style: l }) => {
        const { commandId: d, label: c = "" } = r, v = Lt(d), p = m.createRef(), f = b(), g = Z("Control"), h = w(!1), y = m.useMemo(() => v.filter(({ value: u }) => u).map(({ value: u }) => u), [v]);
        return /* @__PURE__ */ i(
          "div",
          {
            onMouseEnter: () => h.set(!0),
            onMouseLeave: () => h.set(!1),
            onClick: () => {
              o.focus(), o.submit();
            },
            ref: p,
            className: "px-3 text-xs group row",
            style: {
              ...f(
                a % 2 && "primary.background",
                h.get && "gray.opacity",
                s.isFocused && { borderColor: "primary" },
                s.isSubmited && {
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
                  children: (h.get || s.isFocused || s.isSubmited) && /* @__PURE__ */ i("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ e(
                      P,
                      {
                        onClick: async () => {
                          const u = JSON.stringify(r);
                          await navigator.clipboard.writeText(u);
                        },
                        icon: Be
                      }
                    ),
                    /* @__PURE__ */ e(
                      P,
                      {
                        icon: mt,
                        onClick: (u) => {
                          E("keyboard.commandId", d), k("edit-keyPanding");
                        }
                      }
                    ),
                    !!v.length && /* @__PURE__ */ e(
                      P,
                      {
                        tabIndex: -1,
                        icon: H,
                        onClick: () => {
                          X.remove(v.map(({ keyId: u }) => u));
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
                    g && (D.setOneFeild("findConfigurations", "value", `@commandId: ${d}`), await new zn().start(100), k("findConfigurations"));
                  },
                  children: c || d
                }
              ),
              /* @__PURE__ */ e("div", { className: A("col justify-end truncate"), children: /* @__PURE__ */ e(Ae, { shortcut: y }) })
            ]
          }
        );
      }
    }
  );
}
const ue = ({ isActive: n, className: t, ...r }) => {
  const a = b();
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
          n && "primary",
          n && {
            color: "primary.content"
          },
          {
            boxShadow: Y([
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
      ...r
    }
  );
}, ds = [
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
], We = 200, fs = () => {
  const n = b(), t = w(!1), r = w(!1), a = w(!1), s = Z("Shift"), o = w(!1), l = Z("Control"), d = Z("AltGraph");
  m.useEffect(() => {
    r.set(l);
  }, [l]), m.useEffect(() => {
    t.set(s);
  }, [s]), m.useEffect(() => {
    a.set(d);
  }, [d]);
  const c = w([-100, -100]), v = w(!1);
  rt(
    () => {
      v.get && v.set(!1);
    },
    [v.get],
    We
  ), Bt(["keyboard-view"]);
  const p = D.useOneFeild("keyboard-view", "value"), f = w([0, innerHeight - 300]), g = C("visibility/keyboard.boolean");
  return /* @__PURE__ */ i(
    "div",
    {
      hidden: !g,
      className: "z-[100000000000000000000000000000] fixed flex flex-col border border-transparent border-solid rounded-xl w-1/2 max-md:w-2/3 h-[300px] overflow-hidden",
      style: {
        ...n("primary.background", {
          borderColor: "borders",
          boxShadow: Y([
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
          f.get && {
            left: `${f.get[0]}px`,
            top: `${f.get[1]}px`
          }
        )
      },
      children: [
        /* @__PURE__ */ i("div", { className: "flex justify-between items-center p-2", children: [
          /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
            P,
            {
              onPointerDown: () => {
                const h = (u) => {
                  f.set([u.pageX, u.pageY]);
                };
                document.addEventListener("mousemove", h);
                const y = () => {
                  document.removeEventListener("pointerup", y), document.removeEventListener("mousemove", h);
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
                ...n("secondary.background", {
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
                O,
                {
                  onClick: () => {
                    I.setOneFeild("visibility/keyboard.boolean", "value", !1);
                  },
                  icon: H
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ e(N, {}),
        /* @__PURE__ */ i("div", { className: "flex justify-center items-stretch h-full overflow-hidden", children: [
          /* @__PURE__ */ e("div", { className: "w-fit", children: /* @__PURE__ */ e("div", { className: "flex flex-col flex-1 justify-center items-center gap-1 p-2 h-full overflow-hidden", children: [
            {
              name: "shift",
              state: t
            },
            {
              name: "alt gr",
              state: a
            },
            {
              name: "control",
              state: r
            }
          ].map(({ state: h, name: y }, u) => /* @__PURE__ */ e(
            ue,
            {
              isActive: h.get,
              onPointerDown: () => {
                h.set((x) => !x);
              },
              children: y
            },
            u
          )) }) }),
          /* @__PURE__ */ i(
            "div",
            {
              className: "relative flex flex-col justify-between gap-3 border-x p-2 border-transparent border-solid h-full overflow-hidden",
              style: {
                ...n({
                  borderColor: "borders"
                })
              },
              onClick: (h) => {
                const y = h.pageX, u = h.pageY, { left: x, top: S } = h.currentTarget.getBoundingClientRect();
                c.set([y - x, u - S]), v.set(!0);
              },
              children: [
                c.get && /* @__PURE__ */ e(
                  "span",
                  {
                    className: A(
                      `opacity-0 blur-xl transition-[opacity] duration-[${We}] absolute pointer-events-none inline-block w-[100px] h-[100px] transform -translate-x-1/2 -translate-y-1/2 rounded-full`,
                      v.get && "opacity-100"
                    ),
                    style: {
                      ...n("gray.opacity"),
                      ...q(
                        c.get && {
                          left: `${c.get[0]}px`,
                          top: `${c.get[1]}px`
                        }
                      )
                    }
                  }
                ),
                /* @__PURE__ */ e("div", { className: "flex flex-col gap-3", children: ds.map((h, y) => /* @__PURE__ */ e("div", { className: "flex justify-center gap-3", children: h.map((u, x) => /* @__PURE__ */ i(
                  ue,
                  {
                    onPointerDown: () => {
                      const S = t.get ? u.shift : a.get ? u.alt : u.normal, U = document.activeElement;
                      U && (U instanceof HTMLInputElement || U instanceof HTMLTextAreaElement) && (U.value = U.value.concat(S));
                    },
                    className: "relative",
                    children: [
                      t.get ? u.shift : a.get ? u.alt : u.normal,
                      !t.get && /* @__PURE__ */ e(
                        "span",
                        {
                          className: "right-1 bottom-1 absolute text-xs",
                          style: {
                            ...n({ color: "gray.opacity.2" })
                          },
                          children: a.get ? u.normal : u.alt
                        }
                      )
                    ]
                  },
                  x
                )) }, y)) }),
                /* @__PURE__ */ e(
                  ue,
                  {
                    className: "w-full max-lg:w-full",
                    onPointerDown: () => {
                      p.set((h) => h + " "), !o.get && t.get && t.set(!1);
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
                p.set((h) => h == null ? void 0 : h.slice(0, -1));
              }
            },
            {
              name: "clean",
              onClick() {
                p.set("");
              }
            }
          ].map(({ onClick: h, name: y }, u) => /* @__PURE__ */ e(
            ue,
            {
              className: "w-full max-lg:w-full",
              onPointerDown: () => {
                h == null || h();
              },
              children: y
            },
            u
          )) }) })
        ] })
      ]
    }
  );
}, Xe = "visibility/leftSide.boolean", qs = ({ children: n }) => {
  const t = C(Xe), r = b();
  return /* @__PURE__ */ e(
    ye,
    {
      position: "right",
      min: 200,
      temp: "leftSide.currentWidth",
      max: () => Math.max(window.innerWidth / 3, 350),
      handelResize: ({ size: a }) => {
        const s = Le(150, a);
        s != t && I.setOneFeild(Xe, "value", s);
      },
      className: A("h-full flex-col flex overflow-hidden border-r border-solid border-transparent z-[10000000000000000]", !t && "border-r-0"),
      hidden: !t,
      style: {
        ...r("secondary.background", {
          borderColor: "borders"
        })
      },
      children: n
    }
  );
}, ms = ({ item: n, status: t, handelFocus: r, handelSubmit: a }) => {
  if (n.type == "separator")
    return /* @__PURE__ */ e("div", { className: "my-1", children: /* @__PURE__ */ e(N, {}) });
  const s = b(), o = m.createRef();
  return /* @__PURE__ */ e("div", { className: "px-1", children: /* @__PURE__ */ i(
    "div",
    {
      ref: o,
      tabIndex: 1,
      style: {
        ...s(
          t.isFocused && "primary",
          t.isFocused && {
            color: "primary.content"
          }
        )
      },
      onMouseEnter: r(),
      onMouseLeave: () => {
        L.setOneFeild("menu-list", "focused", null);
      },
      onClick: a(),
      className: "cursor-pointer flex items-center rounded-md px-4 py-1 w-full",
      children: [
        /* @__PURE__ */ e("div", { className: "w-[30px]", children: n.checked && /* @__PURE__ */ e(Je, { icon: De }) }),
        /* @__PURE__ */ i("div", { className: "flex justify-between items-center gap-1 w-full", children: [
          n.label && /* @__PURE__ */ e("span", { children: n.label }),
          n.accelerator && /* @__PURE__ */ e(Ae, { shortcut: n.accelerator })
        ] }),
        /* @__PURE__ */ e("div", { className: "w-[30px]" })
      ]
    }
  ) });
}, us = () => {
  const n = b(), t = me.getTemp("list"), r = me.getTemp("position"), a = me.getTemp("id"), s = m.createRef(), o = L.getOneFeild("menu-list", "submited");
  m.useEffect(() => {
    a && typeof o == "number" && (me.setTemp("result", o), L.setOneFeild("menu-list", "submited", null));
  }, [o, a]);
  const l = Dt.getOne("menu-list");
  return /* @__PURE__ */ e(
    Q,
    {
      hidden: !a,
      style: {
        backgroundColor: "transparent"
      },
      children: /* @__PURE__ */ e(
        sn,
        {
          positionId: "menu-list",
          ref: s,
          className: "absolute py-1 border border-transparent border-solid rounded-md w-[350px] max-md:w-[150px]",
          style: {
            ...n("secondary.background", {
              borderColor: "borders",
              boxShadow: Y([
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
              r && (l == null ? void 0 : l.width) && (innerWidth > r[0] + l.width ? {
                left: r[0]
              } : {
                right: innerWidth - r[0]
              }),
              r && (l == null ? void 0 : l.height) && (innerHeight > r[1] + l.height ? {
                top: r[1]
              } : {
                bottom: innerHeight - r[1]
              })
            )
          },
          children: /* @__PURE__ */ e(le, { skipFn: ({ enabled: d = !0, type: c }) => c == "separator" || !d, slotId: "menu-list", component: ms, data: t || [] })
        }
      )
    }
  );
}, vs = () => {
  const n = V.getAll();
  return /* @__PURE__ */ e(
    le,
    {
      data: n,
      slotId: "notification",
      component: ({ item: t, index: r, id: a, handelFocus: s, handelSelect: o, handelSubmit: l, status: d }) => {
        const c = w(!1);
        function v(g, h, y, u) {
          return t.type == "warning" ? h : t.type == "error" ? y : t.type == "success" ? u : g;
        }
        const p = b(), f = C("preferences/animation.boolean");
        return /* @__PURE__ */ i(
          "div",
          {
            id: a,
            onClick: l(),
            onPointerDown: s(o()),
            onDoubleClick: () => {
              V.setOneFeild(t.id, "showDesc", !t.showDesc);
            },
            style: {
              ...p(
                "secondary.background",
                r % 2 && "primary.background",
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
                    T,
                    {
                      icon: v(Oe, Te, Sn, ut),
                      style: {
                        ...p({
                          color: v("notifay.info", "notifay.warning", "notifay.error", "notifay.success")
                        })
                      }
                    }
                  ),
                  /* @__PURE__ */ e("span", { children: t.title })
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
                      ...p(v("notifay.info", "notifay.warning", "notifay.error", "notifay.success"))
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
                      t.desc && /* @__PURE__ */ e(
                        P,
                        {
                          onClick: () => {
                            V.setOneFeild(t.id, "showDesc", !t.showDesc);
                          },
                          icon: t.showDesc ? Ee : be
                        }
                      ),
                      t.removable && /* @__PURE__ */ e(
                        P,
                        {
                          onClick: () => {
                            V.remove([t.id]);
                          },
                          icon: In
                        }
                      )
                    ]
                  }
                )
              ] }),
              t.desc && /* @__PURE__ */ e("div", { className: A("h-[0px]", f && "transition-[height] duration-700", t.showDesc && "h-[170px]"), children: /* @__PURE__ */ e(B, { className: "p-6", children: /* @__PURE__ */ e(ce, { value: t.desc }) }) }),
              Array.isArray(t.buttons) && /* @__PURE__ */ e("div", { className: "flex justify-end p-5 overflow-x-auto", children: t.buttons.map(({ command: g, label: h }, y) => /* @__PURE__ */ e(
                W,
                {
                  className: "px-2 py-1 rounded-sm",
                  onClick: async () => {
                    typeof g == "object" ? se(g.action, g.arg) : nt(g);
                  },
                  children: h
                },
                y
              )) }),
              t.status == "loading" && /* @__PURE__ */ e(Pt, {})
            ]
          }
        );
      }
    }
  );
}, Ne = "visibility/notifays.boolean", Ge = "visibility/notifays/nots.boolean";
function hs() {
  const n = C(Ne), t = C(Ge), r = V.getIds(), a = b(), s = L.getOneFeild("notification", "focused"), o = V.getAll(), l = m.useMemo(() => typeof s != "number" ? null : o[s] || null, [o, s]);
  R(
    "toggleExpandNotifay",
    () => {
      l && V.setOneFeild(l.id, "showDesc", !l.showDesc);
    },
    [l]
  ), R(
    "notification.deleteFocus",
    () => {
      l && V.remove([l.id]);
    },
    [l]
  );
  const d = C("preferences/animation.boolean"), c = C("notification/clearAllConfirmation.boolean");
  return /* @__PURE__ */ i(
    "div",
    {
      onClick: () => {
        n || I.setOneFeild(Ne, "value", !0);
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
        !n && "translate-x-[calc(100%)]"
      ),
      style: {
        ...a({
          backgroundColor: "secondary.background",
          borderColor: "borders",
          boxShadow: Y([
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
              I.setOneFeild(Ge, "value", !t);
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
                        r.length && {
                          color: "primary"
                        }
                      )
                    },
                    className: "mr-2",
                    children: !t && `(${r.length})`
                  }
                ),
                /* @__PURE__ */ e(M, { content: "notifications" })
              ] }),
              /* @__PURE__ */ i("div", { className: "flex gap-3 text-xl", children: [
                !!r.length && /* @__PURE__ */ e(
                  P,
                  {
                    onClick: async () => {
                      let v = 1;
                      if (c) {
                        const p = await pe({
                          message: "Do You Want To Clear All Notifications",
                          checkboxLabel: "Don't Ask Me Again",
                          buttons: ["No", "Yes"]
                        });
                        p.checkboxChecked && Tt("notification/clearAllConfirmation.boolean", !1), v = p.response;
                      }
                      v && V.remove(o.filter(({ removable: p = !0 }) => p).map(({ id: p }) => p));
                    },
                    icon: Fn
                  }
                ),
                /* @__PURE__ */ e(
                  P,
                  {
                    onClick: () => {
                      I.setOneFeild(Ne, "value", !1);
                    },
                    icon: vt
                  }
                )
              ] })
            ]
          }
        ),
        !!r.length && t && /* @__PURE__ */ e(N, {}),
        /* @__PURE__ */ e(
          Ie,
          {
            focusId: "notifications",
            ignoreOutline: !!l,
            className: A("flex flex-col overflow-hidden max-h-[80vh] rounded-ee-xl rounded-es-xl", d && "duration-300 transition-[max-height]", !t && "max-h-[0vh]"),
            children: /* @__PURE__ */ e(B, { children: /* @__PURE__ */ e(vs, {}) })
          }
        )
      ]
    }
  );
}
const ps = () => {
  const n = re.getTemp("pdf");
  return /* @__PURE__ */ e(Q, { hidden: !n, children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(ye, { className: "h-[70vh]", position: "right", temp: "pdf", min: 400, max: () => innerWidth - 30, children: /* @__PURE__ */ e(
    $e,
    {
      className: "h-full overflow-hidden",
      list: [
        /* @__PURE__ */ e(
          Nt,
          {
            title: "PDF..",
            rightSide: /* @__PURE__ */ e("div", { className: "flex tools", children: /* @__PURE__ */ e(j, { title: "close view", children: /* @__PURE__ */ e(
              O,
              {
                icon: H,
                onClick: () => {
                  re.setTemp("pdf", null);
                }
              }
            ) }) })
          }
        ),
        /* @__PURE__ */ e("div", { className: "p-2 h-full", children: n && /* @__PURE__ */ e("embed", { src: n, className: "rounded-xl w-full h-full overflow-hidden" }) })
      ]
    }
  ) }) }) });
}, Ye = "visibility/rightSide.boolean", Js = ({ children: n }) => {
  const t = C(Ye), r = b();
  return /* @__PURE__ */ e(
    ye,
    {
      min: 200,
      temp: "rightSide.currentWidth",
      max: () => Math.max(window.innerWidth / 3, 350),
      handelResize: ({ size: a }) => {
        const s = Le(150, a);
        s != t && I.setOneFeild(Ye, "value", s);
      },
      position: "left",
      hidden: !t,
      style: {
        ...r({
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
        !t && "border-l-0"
      ),
      children: n
    }
  );
};
function gs() {
  const n = ot();
  return /* @__PURE__ */ e(
    ge,
    {
      data: n,
      slotId: "configurations",
      focusId: "configurations",
      itemSize: 50,
      overflow: {
        top: 4,
        bottom: 4
      },
      countLastItems: -1,
      component: ({ data: t, index: r, style: a, status: s, handel: o, id: l }) => {
        const d = Z("Control"), c = w(!1), v = m.useMemo(() => !t.settingId.match(/\.password$/gi) && !he(t.def, t.value), [t]), p = b();
        R(
          "showSubmitSetting",
          () => {
            s.isSubmited && ne(t.settingId);
          },
          [s]
        );
        const f = m.useMemo(() => s.isFocused || s.isSubmited || c.get, [s, c.get]);
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
                r % 2 && "primary.background",
                r % 2 == 0 && "secondary.background",
                c.get && "gray.opacity",
                s.isFocused && {
                  borderColor: "primary"
                },
                s.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content"
                }
              ),
              ...a
            },
            onClick: () => {
              o.focus(), o.submit();
            },
            children: [
              !he(t.value, t.def) && /* @__PURE__ */ e(
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
                        d && t.name != null && D.setOneFeild("findConfigurations", "value", t.name);
                      },
                      children: t.name || /* @__PURE__ */ e(
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
                    d && D.setOneFeild("findConfigurations", "value", `@id ${t.settingId}`);
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
                          /* @__PURE__ */ e("span", { className: "font-normal", children: t.settingId })
                        ]
                      }
                    ),
                    /* @__PURE__ */ i("div", { className: A("flex opacity-0 transition-[opacity] duration-500", f && "opacity-100"), children: [
                      v && /* @__PURE__ */ e(j, { title: "reset", children: /* @__PURE__ */ e(
                        P,
                        {
                          icon: Mn,
                          onClick: () => {
                            I.setOneFeild(t.settingId, "value", t.def);
                          }
                        }
                      ) }),
                      /* @__PURE__ */ e(j, { title: "configurate", children: /* @__PURE__ */ e(
                        P,
                        {
                          onClick: () => {
                            ne(t.settingId);
                          },
                          icon: ht
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
function bt(n = [], t = ".") {
  const r = n.filter(Boolean).map((s) => s.split(t)).filter((s) => s.length);
  return Array.from(new Set(r.map(([s]) => s))).map((s) => ({
    data: s,
    innerTree: bt(
      r.filter(([o]) => o == s).map(([, ...o]) => o.join(t)),
      t
    )
  }));
}
function As() {
  const n = ot(), t = m.useMemo(() => n.map(({ settingId: r }) => r), [n]);
  return /* @__PURE__ */ e("div", { id: "settings.tree.view", className: "flex flex-col h-full overflow-hidden", tabIndex: 1, children: /* @__PURE__ */ e(B, { children: /* @__PURE__ */ e(
    rn,
    {
      treeId: "setting-tree-layout",
      tree: bt(t, "/"),
      component: ({ data: r, status: a, parent: s, isFins: o, innerTree: l, level: d, handels: c }) => {
        const v = b(), [p, f] = r.split("."), g = w(!1), h = m.useMemo(() => {
          const y = [];
          let u = s;
          for (; u; )
            y.push(u.data), u = u.parent;
          return y.reverse().join("/");
        }, [o]);
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
              ...v(
                g.get && "gray.opacity",
                a.isFocused && {
                  borderColor: "primary"
                }
              ),
              paddingLeft: `${d * 50}px`
            },
            children: [
              !f && /* @__PURE__ */ e("div", { className: "mx-1 tools", children: /* @__PURE__ */ e(
                P,
                {
                  iconClassName: "text-xs",
                  tabIndex: -1,
                  icon: a.isExpanded ? be : vt,
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
                  o && p,
                  !o && /* @__PURE__ */ e("b", { children: p }),
                  /* @__PURE__ */ e(
                    "b",
                    {
                      className: "ml-1",
                      style: {
                        ...v({
                          color: "primary"
                        })
                      },
                      children: !!(l != null && l.length) && `(${l == null ? void 0 : l.length})`
                    }
                  )
                ] }),
                f && /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: "px-2 py-1 rounded-md",
                      style: {
                        ...v("gray.opacity")
                      },
                      children: f
                    }
                  ),
                  /* @__PURE__ */ e(
                    P,
                    {
                      onClick: () => {
                        ne(h);
                      },
                      icon: ht,
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
function ys() {
  const n = Ot(), t = m.useMemo(() => {
    const a = n.filter(({ settingId: s }) => !s.endsWith("password"));
    return pt(
      a.length && {
        async click() {
          const { response: s } = await pe({
            message: "Are You Sure About Reset All Configurations",
            defaultId: 1,
            title: "Reset All Config",
            buttons: ["No", "Yes"],
            type: "warning"
          });
          s && I.upsert(
            a.map((o) => {
              let l = { ...o };
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
        icon: gt
      },
      {
        click() {
          J.setOneFeild("settings.viewType", "focused", "tree");
        },
        title: "tree",
        icon: jn
      }
    );
  }, [n]), r = Ce(t, "settings.layout.tools");
  return m.useEffect(() => {
    r && (r.click(), L.setOneFeild("settings.layout.tools", "submited", null));
  }, [r]), /* @__PURE__ */ i("div", { className: "relative flex flex-col w-full h-full overflow-hidden", children: [
    /* @__PURE__ */ i(Ie, { focusId: "settings.layouts", className: "flex justify-between items-center p-2", children: [
      /* @__PURE__ */ e("div", {}),
      /* @__PURE__ */ e("div", { className: "flex gap-1 tools", children: /* @__PURE__ */ e(
        le,
        {
          slotId: "settings.layout.tools",
          data: t,
          component: ({ item: { click: a, title: s, icon: o }, tabIndex: l, handelFocus: d, status: c }) => {
            const v = b();
            return /* @__PURE__ */ e(
              j,
              {
                title: s,
                position: {
                  x: "center",
                  y: "top"
                },
                children: /* @__PURE__ */ e(
                  P,
                  {
                    icon: o,
                    onPointerDown: d(),
                    style: {
                      ...v(
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
    /* @__PURE__ */ e(N, {}),
    /* @__PURE__ */ e(
      ct,
      {
        views: {
          list: gs,
          tree: As
        },
        viewId: "settings.viewType"
      }
    )
  ] });
}
function bs() {
  const n = ve.getTemp("config");
  return m.useEffect(() => {
    n || ne(null);
  }, [n]), /* @__PURE__ */ i("div", { className: "flex flex-col w-full h-full overflow-hidden", children: [
    /* @__PURE__ */ e(os, {}),
    /* @__PURE__ */ e(N, {}),
    n && /* @__PURE__ */ e(
      ct,
      {
        viewId: "settings",
        views: {
          keyboardShortcuts: cs,
          user: ys,
          icons: on,
          colors: an
        }
      }
    )
  ] });
}
function xs() {
  const n = J.getOne("settings"), t = m.useMemo(() => Object.entries((n == null ? void 0 : n.tabs) || {}).map(([a, s]) => ({
    id: a,
    ...s,
    isFocused: (n == null ? void 0 : n.focused) == a
  })), [n]), r = b();
  return /* @__PURE__ */ e(
    "div",
    {
      className: "border-transparent border-r border-solid w-full h-full overflow-hidden",
      style: {
        ...r({
          borderColor: "borders"
        })
      },
      children: /* @__PURE__ */ e(
        le,
        {
          slotId: "configurations.side.list",
          data: t,
          component: ({ item: a }) => {
            const { id: s, news: o, isFocused: l, icon: d } = a, c = m.useMemo(() => `settings.${s}.show`, [s]), v = et(), p = m.useMemo(() => oe.join({ cmdId: c }, v, "cmdId->command").map(({ value: y }) => y), [c, v]), [f] = te(de(s, "camel", "normal")), g = w(!1), h = b();
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
                  ...h((l || g.get) && "primary.background")
                },
                className: "relative truncate cursor-pointer",
                children: [
                  l && /* @__PURE__ */ e("span", { className: "left-0 absolute inset-y-0 w-[2px]", style: { ...h("primary") } }),
                  /* @__PURE__ */ i("div", { className: "flex items-center gap-2 p-2", children: [
                    (d == null ? void 0 : d.value) && /* @__PURE__ */ e(T, { icon: Ve(d.type, d.value) }),
                    f,
                    o && /* @__PURE__ */ e(ln, { children: /* @__PURE__ */ e(T, { icon: Ve(o.type, o.value) }) })
                  ] })
                ]
              },
              s
            );
          }
        }
      )
    }
  );
}
function ws() {
  return /* @__PURE__ */ e(ye, { position: "right", min: () => innerWidth / 7, max: () => innerWidth / 3, className: "h-full", children: /* @__PURE__ */ e(xs, {}) });
}
const Ze = "visibility/configurations.boolean";
function Ps() {
  const n = C(Ze), t = b();
  return m.useEffect(() => {
    n && ve.setTemp("config", !0);
  }, [n]), /* @__PURE__ */ e(
    dt,
    {
      hidden: !n,
      onLoadContent: () => {
        k("findConfigurations-local");
      },
      onClick: async (r) => {
        r.currentTarget == r.target && I.setOneFeild(Ze, "value", !1);
      },
      onTransitionEnd: () => {
        typeof n == "boolean" && ve.setTemp("config", n);
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
            ...t("secondary.background", {
              borderColor: "borders"
            })
          },
          children: [
            /* @__PURE__ */ e(ls, {}),
            /* @__PURE__ */ e(N, {}),
            /* @__PURE__ */ i("div", { className: "flex w-[70vw] h-[70vh]", children: [
              /* @__PURE__ */ e(ws, {}),
              /* @__PURE__ */ e(bs, {})
            ] })
          ]
        }
      )
    }
  );
}
function Ns({ settingId: n }) {
  const t = I.getOne(n), r = m.useMemo(() => t == null ? void 0 : t.value, [t]), a = m.useMemo(() => t == null ? void 0 : t.config, [t]), s = w(t == null ? void 0 : t.value);
  m.useEffect(() => {
    I.setOneFeild(n, "value", s.get);
  }, [s.get]), m.useEffect(() => {
    s.set(r);
  }, [t]);
  const o = m.useMemo(() => `setting:${(t == null ? void 0 : t.settingId) || ""}`, [t]), l = m.useMemo(() => {
    var v;
    const c = (v = o.match(/\.[a-zA-Z0-9]+$/gi)) == null ? void 0 : v[0].slice(1);
    return c || null;
  }, [o]), d = b();
  return /* @__PURE__ */ e(
    "div",
    {
      className: A((t == null ? void 0 : t.readonly) && "cursor-not-allowed"),
      style: {
        ...d((t == null ? void 0 : t.readonly) && "primary.background")
      },
      children: /* @__PURE__ */ i("div", { className: A((t == null ? void 0 : t.readonly) && "pointer-events-none"), children: [
        l == "boolean" && /* @__PURE__ */ e(ft, { id: o, state: s, config: a }),
        l == "array" && /* @__PURE__ */ e(cn, { id: o, state: s, config: a }),
        l == "enum" && /* @__PURE__ */ e(dn, { id: o, state: s, config: a }),
        l == "object" && /* @__PURE__ */ e(fn, { id: o, state: s, config: a }),
        l == "string" && /* @__PURE__ */ e(mn, { id: o, state: s, config: a }),
        l == "number" && /* @__PURE__ */ e(un, { id: o, state: s, config: a }),
        l == "file" && /* @__PURE__ */ e(Ct, { id: o, state: s, config: a }),
        l == "filter" && /* @__PURE__ */ e(vn, { id: o, state: s, config: a }),
        l == "password" && /* @__PURE__ */ e(hn, { id: o, state: s, config: a }),
        l == "date" && /* @__PURE__ */ e(pn, { id: o, state: s, config: a }),
        l == "regexp" && /* @__PURE__ */ e(gn, { id: o, state: s }),
        l == "audio" && /* @__PURE__ */ e(An, { id: o, state: s, config: a }),
        l == "image" && /* @__PURE__ */ e(yn, { id: o, state: s, config: a }),
        l == "pin" && /* @__PURE__ */ e(zt, { id: o, state: s, config: a })
      ] })
    }
  );
}
const Cs = () => {
  const n = b(), t = Fe("view.settings"), r = I.getOne(t.get || ""), a = m.useMemo(() => !r || r.settingId.match(/\.password$/gi) ? !1 : !he(r.def, r.value), [r]), s = m.useMemo(() => {
    try {
      const o = Function(`return (state)=> \`${(r == null ? void 0 : r.desc) || "**no description defined**"}\` `)(), l = tt.getState();
      return o(l);
    } catch (o) {
      return Ln.err(o), " - ";
    }
  }, [r == null ? void 0 : r.desc]);
  return /* @__PURE__ */ e(
    Q,
    {
      onLoadContent: () => {
        t.get && k(`setting:${t.get}`);
      },
      hidden: !t.get,
      children: /* @__PURE__ */ i(
        "div",
        {
          hidden: !t.get,
          className: A("rounded-md border-solid border border-transparent w-1/2 max-md:w-5/6"),
          style: n("secondary.background", {
            borderColor: "borders"
          }),
          children: [
            /* @__PURE__ */ i("div", { className: "flex justify-between items-center gap-1 p-3", children: [
              r && /* @__PURE__ */ i(K, { children: [
                /* @__PURE__ */ e("h1", { className: "text-2xl truncate", children: r.name }),
                /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-[1px] max-md:hidden text-xs", children: /* @__PURE__ */ e(
                  _e,
                  {
                    list: r.settingId.split("/").filter(Boolean).map((o, l) => {
                      var v;
                      const d = (v = o.match(/\..+$/gi)) == null ? void 0 : v[0].slice(1);
                      let c = null;
                      switch (d) {
                        case "boolean": {
                          c = De;
                          break;
                        }
                        case "password": {
                          c = Rn;
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
                          c = gt;
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
                            ...n("gray.opacity.2")
                          },
                          children: [
                            o.replaceAll(/\..+$/gi, ""),
                            c && /* @__PURE__ */ e(T, { icon: c })
                          ]
                        },
                        l
                      );
                    }),
                    joinComponent: /* @__PURE__ */ e(T, { icon: xe })
                  }
                ) })
              ] }),
              /* @__PURE__ */ i("div", { className: "flex tools", children: [
                a && /* @__PURE__ */ e(
                  O,
                  {
                    icon: Bn,
                    onClick: async () => {
                      const { response: o } = await pe({
                        message: "are you sure about reset this setting",
                        buttons: ["No", "Yes"],
                        defaultId: 1
                      });
                      o && r && I.setOneFeild(r.settingId, "value", r.def);
                    }
                  }
                ),
                /* @__PURE__ */ e(
                  O,
                  {
                    onClick: () => {
                      t.set(null), k("findConfigurations");
                    },
                    icon: H
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e(N, {}),
            r && /* @__PURE__ */ i(K, { children: [
              /* @__PURE__ */ e(B, { className: "p-2 max-h-[150px]", children: /* @__PURE__ */ e(ce, { value: s }) }),
              /* @__PURE__ */ e(N, {})
            ] }),
            t.get && /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ e(Ns, { settingId: t.get }) })
          ]
        }
      )
    }
  );
}, zs = ({ item: n, index: t }) => {
  const r = w(!1), a = w(!1), s = w(!1), o = w(0), { message: l } = n, d = b(), c = C("preferences/toastTime.number"), v = C("preferences/animation.boolean"), p = m.useMemo(() => n.time || c || 5, [c, n.time]);
  m.useEffect(() => {
    if (s.get) {
      const g = setTimeout(() => {
        n.id && at.remove([n.id]), s.set(!1);
      }, 300);
      return () => {
        clearTimeout(g);
      };
    }
  }, [s.get, n]), m.useEffect(() => {
    let g = 0;
    const h = setInterval(() => {
      o.set(++g), g >= p && (s.set(!0), clearInterval(h));
    }, 1e3);
    return () => {
      clearInterval(h);
    };
  }, [p]), m.useEffect(() => {
    if (a.get) {
      const g = setTimeout(() => {
        a.set(!1);
      }, 3e3);
      return () => {
        clearTimeout(g);
      };
    }
  }, [a.get]);
  function f(g, h, y, u) {
    return n.type == "warning" ? h : n.type == "error" ? y : n.type == "success" ? u : g;
  }
  return /* @__PURE__ */ i(
    "div",
    {
      className: A("flex z-[100000] items-center justify-between p-2 opacity-100 scale-100", s.get && "opacity-0 scale-0", v && "transition-[transform,opacity] duration-300"),
      onMouseEnter: () => r.set(!0),
      onMouseLeave: () => r.set(!1),
      style: {
        ...d(t % 2 && "gray.opacity")
      },
      children: [
        /* @__PURE__ */ i("div", { className: "inline-flex items-center gap-1", children: [
          /* @__PURE__ */ e(
            T,
            {
              icon: f(Oe, Te, Vn, ut),
              style: {
                ...d({
                  color: f("notifay.info", "notifay.warning", "notifay.error", "notifay.success")
                })
              }
            }
          ),
          /* @__PURE__ */ e(ce, { value: l.toString() })
        ] }),
        /* @__PURE__ */ i("div", { className: "flex items-center", children: [
          /* @__PURE__ */ e(
            "span",
            {
              className: A("relative rounded-full w-[30px] h-[30px] mx-2 inline-flex items-center justify-center"),
              style: {
                ...d("gray.opacity")
              },
              children: p - o.get
            }
          ),
          /* @__PURE__ */ i("div", { className: A("tools w-[0px] flex gap-1 items-center overflow-hidden", r.get && "w-[50px]", v && "transition-[width]"), children: [
            /* @__PURE__ */ e(
              P,
              {
                onClick: async () => {
                  a.set(!0), await navigator.clipboard.writeText(l.toString());
                },
                icon: a.get ? De : Be
              }
            ),
            /* @__PURE__ */ e(
              P,
              {
                onClick: () => {
                  s.set(!0);
                },
                icon: H
              }
            )
          ] })
        ] })
      ]
    }
  );
}, ks = () => {
  const n = at.getAll(), t = b(), r = C("preferences/animation.boolean"), a = m.useMemo(() => zs, []), s = C("toast/position.enum");
  return /* @__PURE__ */ e(
    "div",
    {
      className: A(
        "fixed z-[100000000000000000000000000000] min-w-[300px] border overflow-hidden border-transparent rounded-md border-solid left-1/2 transform -translate-x-1/2 scale-0",
        !!(n != null && n.length) && "scale-100",
        r && "transition-transform duration-300",
        s == "top" && "top-[50px]",
        s == "bottom" && "bottom-[50px]"
      ),
      style: {
        ...t("toast.background", {
          boxShadow: Y([
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
      children: /* @__PURE__ */ e(B, { className: "max-h-[400px]", children: n == null ? void 0 : n.map((o, l) => /* @__PURE__ */ e(a, { index: l, item: o }, o.id)) })
    }
  );
}, ee = {
  commandId: "keyboard.commandId",
  position: "keyboard.editingPosition"
}, qe = "key.changeWhen", Is = m.memo(({ commandId: n }) => /* @__PURE__ */ e(
  _e,
  {
    joinComponent: /* @__PURE__ */ e(T, { icon: xe }),
    list: n.split(".").map((t, r) => /* @__PURE__ */ e("span", { className: "font-bold text-xl capitalize", children: de(t, "camel", "normal") }, r))
  }
), he), Ss = ({ keyPanding: n }) => {
  const { when: t, value: r, keyId: a } = n, s = w(!1), o = w(""), l = b(), d = w(!1);
  return m.useEffect(() => {
    s.get && k(qe);
  }, [s.get]), /* @__PURE__ */ i(
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
                P,
                {
                  onClick: () => {
                    X.remove([a]), k("edit-keyPanding");
                  },
                  icon: H
                }
              ) }),
              /* @__PURE__ */ e(j, { title: "copy when value", children: /* @__PURE__ */ e(
                P,
                {
                  icon: Be,
                  onClick: async () => {
                    t && await navigator.clipboard.writeText(t);
                  }
                }
              ) }),
              /* @__PURE__ */ e(j, { title: "edit when", children: /* @__PURE__ */ e(
                P,
                {
                  onClick: () => {
                    s.set(!0), t && o.set(t);
                  },
                  icon: mt
                }
              ) }),
              /* @__PURE__ */ e(j, { title: `change to ${n.repeation ? "unrepeated" : "repeated"} key pending`, children: /* @__PURE__ */ e(
                P,
                {
                  onClick: () => {
                    X.setOneFeild(a, "repeation", !n.repeation);
                  },
                  icon: n.repeation ? Wn : xe
                }
              ) }),
              /* @__PURE__ */ e(j, { title: n.type == "up" ? "switch to down press" : "switch to up press", children: /* @__PURE__ */ e(
                P,
                {
                  onClick: () => {
                    n.keyId && X.setOneFeild(n.keyId, "type", n.type == "up" ? "down" : "up");
                  },
                  icon: n.type == "up" ? Xn : Gn
                }
              ) })
            ]
          }
        ) }) }),
        /* @__PURE__ */ e("div", { className: "px-2", children: r && /* @__PURE__ */ e(Ae, { shortcut: r }) }),
        /* @__PURE__ */ i("div", { className: "text-xs col", children: [
          !s.get && (t || " - "),
          s.get && /* @__PURE__ */ e(
            kt,
            {
              style: {
                backgroundColor: "transparent",
                borderColor: "0px"
              },
              value: o.get,
              onValueChange: o.set,
              id: qe,
              onFocus: (c) => {
                c.currentTarget.select();
              },
              onKeyDown: (c) => {
                c.key.toLowerCase() == "enter" && c.currentTarget.blur();
              },
              onBlur: (c) => {
                X.setOneFeild(a, "when", c.currentTarget.value), s.set(!1);
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
function Fs() {
  const n = G(ee.commandId), t = w(""), r = Qe.getAll(), a = Qe.getEntity(), s = m.useMemo(() => n && a[n] || null, [a, n]), o = X.getAll(), l = m.useMemo(() => o.filter(({ value: f }) => f), [o]), d = m.useMemo(() => s ? oe.join(s, o, "commandId->command") : null, [s, o]), c = m.useMemo(() => r.map((f) => ({
    command: f,
    keys: oe.join(f, o, "commandId->command")
  })), [l]), v = m.useMemo(() => c.filter(({ keys: f }) => f.some(({ value: g }) => g == t.get)), [c, t]), p = b();
  return m.useEffect(() => {
    t.set("");
  }, [s]), /* @__PURE__ */ e(
    Q,
    {
      hidden: !s,
      onClick: (f) => {
        f.currentTarget == f.target && (E(ee.commandId, null), E(ee.position, null));
      },
      onLoadContent: () => {
        s && k("edit-keyPanding");
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
          tabIndex: s ? 1 : -1,
          id: "edit-keyPanding",
          onKeyDown: (f) => {
            if (f.currentTarget != f.target || !s)
              return;
            f.stopPropagation(), f.preventDefault(), f.key = f.key.toLowerCase();
            const g = [f.ctrlKey, f.altKey, f.shiftKey].filter(Boolean).length;
            if (!g && ["escape", "backspace"].includes(f.key)) {
              if (t.get) {
                t.set("");
                return;
              }
            } else if (!g && f.key == "enter" && t.get) {
              X.add([
                {
                  command: s.commandId,
                  value: t.get,
                  keyId: Qt()
                }
              ]), t.set("");
              return;
            }
            const h = Kn.fromEvent(f);
            t.set(h);
          },
          children: [
            /* @__PURE__ */ i("div", { className: "relative flex justify-center items-center gap-3 p-2", children: [
              (s == null ? void 0 : s.commandId) && /* @__PURE__ */ e(Is, { commandId: s.commandId }),
              /* @__PURE__ */ e(
                P,
                {
                  className: A(`
              absolute
              right-2
              top-1/2
              transform
              -translate-y-1/2
            `),
                  onClick: async () => {
                    E(ee.commandId, null), E(ee.position, null), k("findConfigurations");
                  },
                  icon: H
                }
              )
            ] }),
            /* @__PURE__ */ e(N, {}),
            /* @__PURE__ */ i("div", { className: "flex flex-col flex-wrap items-center", children: [
              d == null ? void 0 : d.map((f, g) => /* @__PURE__ */ e(Ss, { keyPanding: f }, g)),
              !(d != null && d.length) && /* @__PURE__ */ e("div", { className: "py-2", children: "no combinition defined" })
            ] }),
            /* @__PURE__ */ e(N, {}),
            /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-2 text-4xl", children: /* @__PURE__ */ e(Ae, { shortcut: t.get }) }),
            !!v.length && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(N, {}),
              /* @__PURE__ */ e("div", { className: "flex justify-center p-2", children: /* @__PURE__ */ i(Se, { children: [
                /* @__PURE__ */ e(M, { content: "existe" }),
                " (",
                v.length,
                ")"
              ] }) })
            ] })
          ]
        }
      )
    }
  );
}
function $s({ children: n }) {
  const t = C("visibility/header.boolean"), r = C("preferences/animation.boolean");
  return /* @__PURE__ */ i("div", { className: A("absolute bottom-0 inset-x-0 w-full border-solid border-transparent border-b top-0 flex flex-col", t && "top-[51px]", r && "transition-[top] duration-200"), children: [
    /* @__PURE__ */ e(as, {}),
    /* @__PURE__ */ e("div", { className: "flex items-stretch h-full overflow-hidden", children: n })
  ] });
}
const xt = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,} *$", Ms = () => {
  const n = b(), t = D.getOneFeild("signupUseremail", "value"), r = w(""), a = w(""), s = R(
    "signup",
    async () => {
      var o;
      if (!((o = z.server) != null && o.auth)) {
        F("Error When Loading The Auth", "error");
        return;
      }
      if (!t) {
        F("Email is required", "error"), k("signupUseremail");
        return;
      }
      if (!Ht(["signupUseremail"]).isValide) {
        F("Please fill the email correctly!", "error"), k("signupUseremail");
        return;
      }
      if (!r.get) {
        F("Password must be at least 6 characters", "error"), k("user-password");
        return;
      }
      if (r.get !== a.get) {
        F("Password and confirm password must be the same!", "error"), k("user-password-confirm");
        return;
      }
      await Ut(z.server.auth, t, r.get);
    },
    [t, r.get, a.get]
  );
  return /* @__PURE__ */ i(B, { className: "flex max-sm:flex-col items-center h-full", children: [
    /* @__PURE__ */ i("div", { className: "p-8 w-1/2 max-sm:w-full", children: [
      /* @__PURE__ */ i(
        "form",
        {
          onSubmit: async (o) => {
            o.preventDefault(), await se("signup");
          },
          children: [
            /* @__PURE__ */ i("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "email" }),
              /* @__PURE__ */ e(
                ie,
                {
                  controls: {
                    [xt]: {
                      err: "Invalid email",
                      succ: "Valid email"
                    }
                  },
                  placeholder: "@exmple.com",
                  inputName: "signupUseremail",
                  propositions: t && !t.includes("@") ? [t + "@gmail.com"] : []
                }
              )
            ] }),
            /* @__PURE__ */ i("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "Password" }),
              /* @__PURE__ */ e(ze, { placeholder: "********", id: "user-password", state: r })
            ] }),
            /* @__PURE__ */ i("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "Confirm Password" }),
              /* @__PURE__ */ e(ze, { placeholder: "********", id: "user-password-confirm", state: a })
            ] }),
            /* @__PURE__ */ e(W, { icon: (s == null ? void 0 : s.status) == "loading" ? ke : void 0, iconClassName: A("animate-spin"), type: "submit", className: "py-2 rounded-md w-full", children: "Sign Up" })
          ]
        }
      ),
      /* @__PURE__ */ i("p", { className: "mt-8 text-center text-sm", children: [
        /* @__PURE__ */ e(
          "span",
          {
            style: {
              ...n({
                color: "gray.opacity.2"
              })
            },
            children: "Already have an account?"
          }
        ),
        " ",
        /* @__PURE__ */ e(
          Se,
          {
            onClick: (o) => {
              o.preventDefault(), E("focusedLoginView", 0);
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
            ...n({
              color: "primary"
            })
          },
          children: "Sigin Into Water Fetch"
        }
      ),
      /* @__PURE__ */ e("p", { className: "mb-4 capitalize", children: /* @__PURE__ */ e(M, { content: "water fetch is a platform give's the possiblity for doing more thing by dahbia card" }) }),
      /* @__PURE__ */ i("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12", children: /* @__PURE__ */ e("span", { className: "text-xl", children: "📦" }) }),
        /* @__PURE__ */ i("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("h3", { className: "font-medium text-lg", children: "History" }),
          /* @__PURE__ */ e(
            "p",
            {
              className: "text-sm",
              style: {
                ...n({
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
                ...n({
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
  const n = b(), t = D.getOneFeild("loginUseremail", "value"), r = w("");
  R(
    "login",
    async () => {
      var o;
      if (!((o = z.server) != null && o.auth)) {
        F("Error When Loading The Auth", "error");
        return;
      }
      if (!t) {
        F("Email is required", "error");
        return;
      }
      if (!r.get) {
        F("Password must be at least 6 characters", "error");
        return;
      }
      await He(z.server.auth, t, r.get);
    },
    [t, r.get]
  );
  const a = R(
    "sign-in-facebook",
    async () => {
      var o;
      (o = z.server) != null && o.auth && await Ue(z.server.auth, new Rt());
    },
    []
  ), s = R(
    "sign-in-google",
    async () => {
      var o;
      (o = z.server) != null && o.auth && await Ue(z.server.auth, new Vt());
    },
    []
  );
  return /* @__PURE__ */ i(B, { className: "flex max-sm:flex-col items-center", children: [
    /* @__PURE__ */ i("div", { className: "p-8 w-1/2 max-sm:w-full", children: [
      /* @__PURE__ */ i(
        "form",
        {
          onSubmit: async (o) => {
            var l;
            if (o.preventDefault(), !((l = z.server) != null && l.auth)) {
              F("Error When Loading The Auth", "error");
              return;
            }
            if (t && r.get)
              try {
                await He(z.server.auth, t, r.get);
              } catch {
                F("Password Or Email Is Incorrect 😴", "error");
              }
            else t ? F("Password Required!", "warning") : F("Email Required!", "warning");
          },
          children: [
            /* @__PURE__ */ i("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "email : " }),
              /* @__PURE__ */ e(
                ie,
                {
                  controls: {
                    [xt]: {
                      err: "Invalid email",
                      succ: "Valid email"
                    }
                  },
                  inputName: "loginUseremail",
                  placeholder: "@exmple.com",
                  propositions: t && !t.includes("@") ? [t + "@gmail.com"] : []
                }
              )
            ] }),
            /* @__PURE__ */ i("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "Password" }),
              /* @__PURE__ */ e(ze, { placeholder: "********", state: r })
            ] }),
            /* @__PURE__ */ e(W, { type: "submit", className: "py-2 rounded-md w-full", children: "Login" })
          ]
        }
      ),
      /* @__PURE__ */ i("div", { className: "flex justify-evenly items-center my-3", children: [
        /* @__PURE__ */ e(
          O,
          {
            iconClassName: A((s == null ? void 0 : s.status) == "loading" && "animate-spin"),
            icon: (s == null ? void 0 : s.status) == "loading" ? ke : Yn,
            onClick: async () => {
              await se("sign-in-google");
            }
          }
        ),
        /* @__PURE__ */ e(
          O,
          {
            iconClassName: A((a == null ? void 0 : a.status) == "loading" && "animate-spin"),
            icon: (a == null ? void 0 : a.status) == "loading" ? ke : Zn,
            onClick: async () => {
              await se("sign-in-facebook");
            }
          }
        )
      ] }),
      /* @__PURE__ */ i("p", { className: "text-center text-sm", children: [
        /* @__PURE__ */ e(
          "span",
          {
            style: {
              ...n({
                color: "gray.opacity.2"
              })
            },
            children: "Don't have an account?"
          }
        ),
        " ",
        /* @__PURE__ */ e(
          Se,
          {
            onClick: (o) => {
              o.preventDefault(), E("focusedLoginView", 1);
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
            ...n({
              color: "primary"
            })
          },
          children: "Login Into Water Fetch"
        }
      ),
      /* @__PURE__ */ e("p", { className: "mb-4 capitalize", children: /* @__PURE__ */ e(M, { content: "water fetch is a platform give's the possiblity for doing more thing by dahbia card" }) }),
      /* @__PURE__ */ i("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12", children: /* @__PURE__ */ e("span", { className: "text-xl", children: "📦" }) }),
        /* @__PURE__ */ i("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("h3", { className: "font-medium text-lg", children: "History" }),
          /* @__PURE__ */ e(
            "p",
            {
              className: "text-sm",
              style: {
                ...n({
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
                ...n({
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
}, Es = () => {
  const n = G("focusedLoginView");
  return /* @__PURE__ */ e(bn, { focused: n ?? 0, pages: [/* @__PURE__ */ e(js, {}), /* @__PURE__ */ e(Ms, {})] });
}, Ls = ({ projectId: n }) => {
  var o, l;
  const t = Me(), { data: r, error: a, status: s } = it(async () => {
    var d;
    if (!((d = z.server) != null && d.db))
      return [];
    if (t != null && t.uid) {
      const { docs: c } = await lt(je(z.server.db, "users", t.uid, "projects", n, "payouts"));
      return c;
    } else
      return [];
  }, [n, t]);
  return m.useEffect(() => {
    s.set("idle");
  }, []), m.useEffect(() => {
    s.get == "error" && a.get && F("Error When Loading The Payouts", "error");
  }, [s.get, a.get]), /* @__PURE__ */ i(K, { children: [
    s.get == "success" && /* @__PURE__ */ i(K, { children: [
      !!((o = r.get) != null && o.length) && /* @__PURE__ */ e(
        ge,
        {
          data: r.get,
          focusId: "payouts-list",
          itemSize: 50,
          slotId: "payouts-list",
          component: ({ style: d, data: c }) => {
            const v = c.data();
            return /* @__PURE__ */ i(
              "div",
              {
                style: {
                  ...d
                },
                className: "flex justify-between items-center gap-1 p-3",
                children: [
                  /* @__PURE__ */ i("span", { children: [
                    v.price,
                    "DA"
                  ] }),
                  /* @__PURE__ */ e(W, { onClick: async () => {
                  }, children: /* @__PURE__ */ e(M, { content: "Prepare" }) })
                ]
              }
            );
          }
        }
      ),
      !((l = r.get) != null && l.length) && /* @__PURE__ */ e("div", { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ e("h1", { children: "No Payouts In Your Account 😔" }) })
    ] }),
    s.get == "loading" && /* @__PURE__ */ e(ae, { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2" })
  ] });
}, Bs = () => {
  var c, v, p;
  const n = b(), t = Me(), r = Kt(), a = C("preferences/animation.boolean"), {
    data: s,
    status: o,
    error: l
  } = it(async () => {
    if (t && z.server) {
      const { docs: f } = await lt(je(z.server.db, "users", t.uid, "projects"));
      return f;
    } else
      return [];
  }, [t]);
  m.useEffect(() => {
    o.set("idle");
  }, []), m.useEffect(() => {
    o.get == "error" && l.get && F("Error Loading Your Projects", "error");
  }, [l.get, o.get]);
  const d = w(null);
  return /* @__PURE__ */ i("div", { className: "flex flex-col h-full overflow-hidden", children: [
    /* @__PURE__ */ e("div", { className: "p-2", children: /* @__PURE__ */ i("div", { className: "flex max-sm:flex-col items-center gap-3", children: [
      /* @__PURE__ */ i(
        "div",
        {
          style: {
            ...n(
              (t == null ? void 0 : t.emailVerified) && {
                outlineColor: "success.text"
              }
            )
          },
          className: A("relative rounded-full w-[100px] h-[100px] max-sm:w-[60px] max-sm:h-[60px] overflow-hidden", (t == null ? void 0 : t.emailVerified) && "outline-1 outline-offset-1"),
          children: [
            (t == null ? void 0 : t.photoURL) && /* @__PURE__ */ e("img", { src: (c = t == null ? void 0 : t.photoURL) == null ? void 0 : c.toString(), className: "w-full h-full object-cover" }),
            !(t != null && t.photoURL) && /* @__PURE__ */ e(Je, { icon: qn })
          ]
        }
      ),
      /* @__PURE__ */ i("div", { className: "max-sm:flex max-sm:flex-col max-sm:justify-cente", children: [
        /* @__PURE__ */ e("h1", { className: "text-2xl", children: (r == null ? void 0 : r.nickname) || "No Name" }),
        /* @__PURE__ */ e("p", { children: r == null ? void 0 : r.email }),
        r && /* @__PURE__ */ i("div", { className: "flex items-center", children: [
          /* @__PURE__ */ e("span", { children: "Phone Number" }),
          " : ",
          (t == null ? void 0 : t.phoneNumber) || " - "
        ] }),
        /* @__PURE__ */ e(
          W,
          {
            onClick: ({ clientX: f, clientY: g }) => {
              Wt({
                x: f,
                y: g,
                menu: pt(
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
                  ].map(({ label: h, pathname: y }) => ({
                    label: h,
                    click() {
                      const u = document.createElement("a"), x = "https://water-fetch-account.web.app/profile/" + y;
                      u.target = "_blank", u.href = x, u.click();
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
            className: "mt-4 border border-transparent border-solid",
            style: {
              ...n("primary.background", {
                color: "text.color",
                borderColor: "borders"
              })
            },
            icon: yt.solid.faGear,
            children: /* @__PURE__ */ e(M, { content: "manage account" })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e(N, {}),
    /* @__PURE__ */ i(B, { className: "relative", children: [
      o.get == "success" && /* @__PURE__ */ i(K, { children: [
        /* @__PURE__ */ e("div", { className: "flex flex-wrap", children: (v = s.get) == null ? void 0 : v.map((f, g) => /* @__PURE__ */ e("div", { className: "flex justify-between items-center p-3 w-1/3 max-sm:w-1/2", children: /* @__PURE__ */ i($, { className: "w-full", children: [
          /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ e("h1", { className: "font-bold text-lg", children: f.id }) }),
          /* @__PURE__ */ e(N, {}),
          /* @__PURE__ */ i("div", { className: "flex justify-between items-center p-2", children: [
            /* @__PURE__ */ e("span", {}),
            /* @__PURE__ */ e(
              O,
              {
                onClick: () => {
                  d.set(f.id);
                },
                icon: xe
              }
            )
          ] })
        ] }) }, g)) }),
        !((p = s.get) != null && p.length) && /* @__PURE__ */ e("div", { className: "flex justify-center items-center w-full h-full capitalize", children: /* @__PURE__ */ e(M, { content: "no water fetch projects you sigin" }) })
      ] }),
      o.get == "loading" && /* @__PURE__ */ e(ae, { className: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" }),
      /* @__PURE__ */ i(
        "div",
        {
          style: {
            ...n("primary.background")
          },
          className: A("right-0 absolute inset-y-0 left-full", d.get && "left-0", a && "transition-[left]"),
          children: [
            /* @__PURE__ */ i("div", { className: "flex items-center gap-3 p-3", children: [
              /* @__PURE__ */ e(
                O,
                {
                  icon: Jn,
                  onClick: () => {
                    d.set(null);
                  }
                }
              ),
              /* @__PURE__ */ e("h1", { className: "font-bold text-4xl", children: d.get })
            ] }),
            /* @__PURE__ */ e(N, {}),
            d.get && /* @__PURE__ */ e(Ls, { projectId: d.get })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e(N, {}),
    /* @__PURE__ */ e("div", { className: "flex justify-end gap-2 p-2", children: /* @__PURE__ */ e(
      W,
      {
        className: "max-sm:w-full sm:w-1/4 capitalize",
        style: {
          ...n("error")
        },
        onClick: async () => {
          if (!z.server)
            return;
          const { response: f } = await pe({
            title: "Logout",
            message: "Are you sure you want to logout?",
            buttons: ["No", "Yes"],
            defaultId: 1
          });
          f ? await Xt(z.server.auth) : F("Ignore Logout", "error");
        },
        children: /* @__PURE__ */ e(M, { content: "logout" })
      }
    ) })
  ] });
}, Ds = () => {
  const n = Me();
  return /* @__PURE__ */ e("div", { className: "relative flex flex-col w-full h-full overflow-hidden", children: /* @__PURE__ */ e(
    xn,
    {
      render: async () => (await $n(1e3), /* @__PURE__ */ i(K, { children: [
        n && /* @__PURE__ */ e(Bs, {}),
        !n && /* @__PURE__ */ e(Es, {})
      ] })),
      loading: /* @__PURE__ */ e(ae, { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2" })
    }
  ) });
}, Ts = () => {
  const n = re.getTemp("profile-view");
  return /* @__PURE__ */ e(Q, { hidden: !n, children: /* @__PURE__ */ i($, { className: "max-md:rounded-none w-5/6 max-md:w-full h-5/6 max-md:h-full", children: [
    /* @__PURE__ */ i("div", { className: "flex justify-between items-center p-3", children: [
      /* @__PURE__ */ e("h1", { className: "text-3xl", children: /* @__PURE__ */ e(M, { content: "Your Profile" }) }),
      /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e(
        O,
        {
          icon: H,
          onClick: () => {
            re.setTemp("profile-view", !1);
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ e(N, {}),
    /* @__PURE__ */ e(B, { children: /* @__PURE__ */ e(Ds, {}) })
  ] }) });
}, Os = () => {
  const n = Re.getTemp("id"), t = Re.getTemp("src"), r = m.createRef();
  return m.useEffect(() => {
    r.current && (r.current.onclose = () => {
      Gt();
    });
  }, [r.current]), /* @__PURE__ */ e(Q, { hidden: !n, children: t && n && /* @__PURE__ */ e($, { className: "w-[70vw] h-[70vh] overflow-hidden", children: /* @__PURE__ */ e("iframe", { ref: r, className: "w-full h-full", id: n, src: t }) }) });
}, Qs = "data:audio/wav;base64,UklGRsgsAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YaQsAADz/4P/qP6y/dn8NPzG+4n7ePuN+8X7HvyZ/DT98P3L/sf/4wAeAnkD9ASOBkoIJAodDDcObxDHEjwVqBeIGX8amRoRGhgZzhdOFqAUzBLZEMQOkQxACs0HPAWOAr//1fzJ+aP2W/P373Ls0egP5S7hM90a2ezUNNFzzinNZs3Rzg3R2NP/1m3aCt7V4cXl0ukA7lHyvfZN+/v/xASvCbUO2RMgGYYeBiSqKWcvSTU/O+FAU0V7SONJU0klR9NDuT8QOwU2uzA0K4Ulpx+rGYUTRQ3eBl4AuPnz8hTsFOXr3avWQ8+4xxPASLissEiqfKUaoo2gTqEUpF+otq3Rs2y6cMG2yD/Q+NfV39jnCfBd+MwAZQkYEvUa6yMNLUY2qz8pSdJSU1xbZGdqzW7Lcb9yDHESbVtnaWCSWAxQCUexPQc0JyoEILwVPwujANH11uq/33bUE8mGvcix46VbmpuQMomrgwCAAIAAgACAN4VYjNWURp5yqDazXb7nybvVwuEP7oL6JAf/EwchLS6NOwpJvlZ+ZEhxh3v/f/9//3//f/9//3//f/9/iXZaay9fL1KeRIE2CSgtGRQKp/r66iHbD8u4ujyq0JlYiwCAAIAAgACAAIAAgACAAIAAgACAAIAAgGKBPpbQq9TBVdgT7xAGWR3NNFBMC2Sze/9//3//f/9//3//f/9//3//f/9//3//f/9/0H53afBSojusIxkLGvLe2EO/gKV0jQCAAIAAgACAAIAAgACAAIAAgACAAIAAgACASI9opJK6s9F16doBnxreM0xN22RIeP9//3//f/9//3//f/9//3//f/9//39NdZ9gL0pSMjoZUP+M5OHJVLLknm2PJoMAgACAAIAAgACAAIAAgACA/oD0kVWlu7q70fHpMwNEHcs1hUohWxJoMXLcecZ//3//f/9//3/Mf/FzK2QhUXY7kyPzCXrw+dlfxzi426vYodWZNJPojXuJC4fiiOGPaZvQqmu9pdL06RQC4hcAKoQ4JEQxTVVUuFndXclg3GJNYvdceVJxQ5wwFhtLBjf0E+Wh2EnO5MUAvzS5ZbSEsIitFq6vs1C+QM2l35HyGwPZEP4bzyS6Ky0xXjVjOKA6+DvwO483+S1eIJcSbwYT/F3zMuxB5jXhG92d2bLWZ9Rw09/WYt9o6sH0dP2BBAUKVQ59EdITSxU7FoAWbRbiFMgQRwxECNAE8QGE/5j98fu2+qP56vg/+B74OPm7+ur7i/ys/Fv8tPvB+m759/cu9kL0FvSS90z8/wA0Be0IPgwnD80RGhQoFhAYqBe1EmkL1gO5/Cb2DvBW6gbl7d9K2yzZw9wL5kXyK/7bCFYSsBoSIo0oFS5WMFAsDCLoE2MF7Pe266Dgf9ZwzZzHH8g3z43c/u2C/5oP6h2eKsI1Sj02PtQ35Sp8GKAEs/F/4OfQBcRcvSu++8Um1O3nLP6PE+YmozeoQsxFIUFFNQsjBgzy82ndLcrcvcq5ib1uyKnZUPAZCtsiCjcSQ0VGVkH+NDIikgkz7orVvsTWvGS9osW/1N7pOQSBH/gzST+EQXw7+S3mGRoAIuWn0DvFpMI6yBzViOg2AScaXy2uN/U47jFyI48OFfeK4ZTSI8w7zifY/uis/bQRuiKmLA0uDieoGKsGD/Vm5Z7avtcU3Zbp/PjBB9gUvh6VIVwcFxGcBPP4dO7G5nzlmOs79cL+MgPlA+oI1RAMGoUjLij4I7IWOgMI8CbkPuJC6jT7oA+NHrcj+BpdB3P4IfQY++0LkB0dJk8jcRUSAZXxxuxS8xsDvBNaHLQZ0wwZ/Mzvgu3R9X0DEBD4FGUP7QMt+EzxAPSx/BsG6wzMC0MF/P0Q+Bb4d/xSATsFiAVCA8oA2P5i/rD+sf5m/hb/8gBYA1oFrgOs//D6H/hP+4kBMwg9CtIEUvza9BX1Jf2bB9YNHQoo/zD0W/El+VUGGQ8YDfEA+vP475f3KAZNDygNPwCE84PwMvkkB0sOBQpw/Yfz7vPI/aoIZQuABI76uvUW+jgC2AeqBZ//UfrY+r/+jwIBAwsBEf+O/tb+4v47/48AZgJzArz/Cvyw+xQAgQXdBfL/Kfkq+bwASwhFBx7+wPZs+eUDSwqTBVz6vvWa/DQHMQlsAJf3xPheAoAIUQRy+8f4qv5uBc4EBf9W+/P9RwL9ApsAg/68/nb//f+6AIsBTQCP/TP92QAYBEYBk/tD+64B5QXdAL35SPu6AzwGp/66+HP9ewU7BPv7CfrXABgFmwA3+079UwIlAoX+m/17/54AbAAaABf/Gf7g/2gCWgBb/Cj+VwMEAu/7x/yQA0cDJ/wY/CUDTQO//Kj8gQJoApj99/2eATcB7P4f/wMAbwCkACz/LP7cAOAB5/3I/cECYgFa/KD/uAP//s/8EwICAl/9K/8HAqn/mv4tAHsAFQAr/y3/NQH6/4797gCKASH9o/9vAtn9jf5RAhD/iv6BAer//P4YAEAA3f/r/oUAzgAY/qwAHAGJ/dsA4ADY/RQBSwCh/nkA7/9T/37/cQB0/zf/TAGa/ggAKQEy/iMB9P8+/+4Anv/D/0UACgAY//MAJv/3/78Al/4qARj/+/8vAHv/AwBcAEH/tQCS/w4AkQA5/wsBK/+OAMX/2/9NAKX/NQDt/67/TQA9/2kAQP88AJr/0f8NAFr/cwBR/7oAWf+CAI7/MwDs//P/9v/V/8v/7/+p/wEA4f/Q/xsAiP8PAKz/q//l/5//xv/O/9b/sv8xAKP/ZADs/y4AzP9IAO7/9f9CALv/DQDA/xYAtv/D/yoA2P8TAN3/9/8WAKb//v/p/9L/BwDj/wkAPwASADkAQQAFACgAMQD+/xYAEwDX/+P////c/9v/AADq/+T/AgAUAOv/2v/y//r/2//P/+L/6v/n/9z/5f/u/+X/0//F/8H/xP/J/7r/rP+g/5z/ov+s/7H/r/+t/6r/qP+j/5v/nv+h/6H/q/+z/7j/t/+x/7H/tP+x/6n/pP+b/5L/lP+U/5D/lv+U/4r/if+B/3//fP9//4H/g/+G/3r/df90/3f/ev+D/4z/iv+T/5j/mP+g/67/sv+0/6b/n/+h/5b/lP+a/5f/lv+c/5b/k/+M/4T/iP+E/4X/jf+N/43/j/+N/5D/jP+H/37/f/9+/3v/h/+S/47/iv+I/4T/hP+B/4D/gf+G/4r/i/+H/4H/fP92/3L/bf9r/3b/ff+B/4T/h/+K/43/iP9//3P/a/9j/1v/VP9M/0L/Pf85/0H/Sv9O/1P/WP9c/17/XP9b/1r/WP9P/0T/PP83/zL/Lf8p/yP/H/8b/xb/Df8C///+/v78/vz++/76/vn++P4B/wv/Ef8X/xz/If8m/yv/MP80/zj/NP8v/yr/Jf8g/xv/F/8S/w7/Cv8F/wL/Av8G/wv/Ef8W/xv/IP8k/yn/Lv8y/zf/O/8//0P/R/9L/0//Uv9W/1n/Xf9g/2P/Zv9q/23/cP9y/3X/eP97/33/gP+C/4X/h/+K/4z/jv+Q/5L/lP+W/5j/mv+c/57/oP+i/6P/pf+n/6j/qv+s/63/r/+w/7H/s/+0/7b/t/+4/7n/u/+8/73/vv+//8D/wf/C/8P/xP/F/8b/x//I/8n/yv/L/8z/zf/N/87/z//Q/9D/0f/S/9P/0//U/9X/1f/W/9b/1//Y/9j/2f/Z/9r/2//b/9z/3P/d/93/3v/e/97/3//f/+D/4P/h/+H/4f/i/+L/4//j/+P/5P/k/+T/5f/l/+X/5v/m/+b/5//n/+f/6P/o/+j/6P/p/+n/6f/p/+r/6v/q/+r/6//r/+v/6//r/+z/7P/s/+z/7P/t/+3/7f/t/+3/7v/u/+7/7v/u/+7/7//v/+//7//v/+//7//w//D/8P/w//D/8P/w//D/8f/x//H/8f/x//H/8f/x//L/8v/y//L/8v/y//L/8v/y//L/8//z//P/8//z//P/8//z//P/8//z//P/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9f/1//X/9f/1//X/9f/1//X/9f/1//X/9f/1//X/9f/1//X/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/7//j/9P/w/+3/6//p/+f/5v/m/+b/5//o/+n/6//u//H/9P/4//3/AQAFAAkADAAOABAAEgATABQAFAAUABMAEAALAAUA///5//P/7f/o/+P/3//b/9n/2P/Y/9j/2v/c/9//5P/p/+7/9P/5////BAAKAA8AFAAZABwAHwAhACIAIgAhACAAHQAaABYAEQAMAAcAAgD9//j/8//u/+n/5f/i/9//3f/c/9z/3f/e/+D/4//n/+z/8P/1//r///8DAAgADAARABUAGAAbAB0AHgAeAB4AHAAaABgAFAAQAAwACAADAP//+//2//L/7v/q/+f/5P/i/+H/4P/g/+H/4//l/+j/6//v//T/+P/8/wAABAAIAAwADwATABYAGAAZABoAGgAaABkAFwAUABEADgAKAAYAAgD+//r/9//z/+//7P/p/+b/5f/k/+P/4//k/+b/6P/r/+7/8v/1//n//f8AAAQACAALAA8AEgAUABYAFwAYABgAFwAWABQAEQAOAAsABwAEAAAA/f/5//b/8v/v/+z/6f/o/+b/5v/m/+b/5//p/+v/7v/y//X/+f/8/wAAAwAGAAoADQAQABIAFAAVABUAFQAVABMAEgAPAAwACQAGAAIA///7//j/9P/x/+7/7P/q/+n/6P/o/+j/6f/r/+z/7//y//X/+f/8/wAAAwAHAAoADQAPABEAEgATABMAEwASABEADwAMAAkABgADAP//+//4//X/8v/v/+3/7P/r/+r/6v/r/+z/7f/v//L/9f/4//z///8DAAYACQAMAA4AEAARABEAEQAQAA8ADgAMAAkABgADAP//+//4//X/8v/w/+7/7f/s/+z/7f/t/+//8P/z//b/+f/8/wAABAAHAAkACwANAA4ADwAPAA4ADQAMAAoACAAFAAEA/v/6//f/9P/y//H/8P/v/+//7//w//H/8//1//j/+//+/wIABQAHAAkACwAMAAwADAALAAoACQAHAAQAAQD+//v/+f/2//T/8//y//L/8v/y//P/9f/3//n//P/+/wEAAwAGAAcACAAJAAkACQAIAAYABQACAAAA/v/8//n/+P/2//X/9f/1//X/9v/3//n/+//9////AQACAAQABQAGAAYABQAFAAMAAgAAAP///f/8//r/+f/4//j/+P/4//n/+//8//3//v///wAAAQACAAIAAgACAAEAAAAAAP///v/+//3//P/8//v/+//8//z//f/9//3//v/+//7////////////////////////////////////+//7//v/+//3//f/9//z//P/8//z//f/9//7//////wAAAAABAAEAAQAAAP///v/9//z/+//7//r/+v/7//z//f/+/wAAAQACAAIAAgACAAEA///+//z/+//6//r/+v/6//z//f///wEAAgACAAMAAgABAAAA/v/8//v/+v/6//r/+//8//7/AAABAAIAAgACAAEA///+//z/+//7//v/+//8//3///8AAAEAAQABAAAA///+//3//P/8//z//f/9//7///8AAAAAAAD//////v/+//3//f/9//7//v/+//7//v/+//7//v////////////7//v/+//3//f/9//3//v//////AAAAAP///v/+//3//P/8//3//v///wAAAAAAAP///v/9//z//P/9//7///8AAAAAAAD///7//f/8//z//f/+////AAAAAP///v/9//3//f/9//7////////////+//7//v/+//7//v/+///////+//7//v/+//7//v/+//7//v/+//////////7//v/9//3//v////////////7//f/9//3//v///wAA///+//3//f/9//7//////////v/9//3//v////////////7//v/+//7//////////v/+//7//v/+//7//v/////////+//7//v/+//////////7//v/+//7//////////v/+//7//////////v/+//7//v///////v/+//7//v///////v/+//7//v/+//7//v////7//v/+//7///////7//v/+//7///////7//v/+///////+//7//v/////////+//7//v///////v/+//7//v/+//7//v/+//7//v///////v/+//7///////7//v///////v/+//7///////7//v/+/////v/+//7///////7//v/+//7////+//7//v///////v/+//7////+//7//v////7//v/+/////v/+//7////+//7//v////7//v/+//7////+//7//v////7//v///////v/+/////v/+///////+//7////+//7//v/+/////v/+/////v/+///////+//7////+//7////+//7////+//7//v////7//v///////v///////v///////v///////v////7//v/+/////v/+/////v/+/////v////7//v////7//v////7//v/+//7//v////7//v/+//7////+/////v/+/////v/+/////v/+//7//v////7////+//7//v/+//7//v/+/////v////7////+//7//v/+//7//v/+//7////+/////v/+//7//v/+//7////+/////v////7////+/////v/+//7////+/////v////7//v/+/////v////7//v////7//v/+//7//v////7//v////7////+/////v/+/////v/+//////////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////", Hs = () => {
  const n = Pe.getTemp("params"), t = Pe.getTemp("id"), r = b(), a = w(!1), s = Pe.useTemp("checked");
  m.useEffect(() => {
    typeof (n == null ? void 0 : n.checkboxChecked) == "boolean" && s.set(n.checkboxChecked);
  }, [n]), m.useEffect(() => {
    L.setOneFeild("dialog-list", "submited", null);
  }, [t]), m.useEffect(() => {
    L.setOneFeild("dialog-list", "focused", (n == null ? void 0 : n.defaultId) || 0);
  }, [n]), R(
    "dialog.cancel",
    () => {
      typeof (n == null ? void 0 : n.cancelId) == "number" && L.setOneFeild("dialog-list", "submited", n.cancelId);
    },
    [n]
  );
  const o = m.useMemo(() => t ? Qs : null, [t, n]);
  Yt(async () => {
    if (!o)
      return;
    const d = document.createElement("audio");
    d.src = o, await d.play();
  }, [t, n]);
  const l = C("preferences/animation.boolean");
  return /* @__PURE__ */ e(Q, { hidden: !t, children: /* @__PURE__ */ e(
    $e,
    {
      className: "lg:w-1/2 max-lg:w-2/3",
      list: [
        (n == null ? void 0 : n.title) && /* @__PURE__ */ e("div", { className: "p-2", children: /* @__PURE__ */ e("h1", { className: "text-2xl", children: n == null ? void 0 : n.title }) }),
        n && /* @__PURE__ */ i("div", { className: "flex gap-5 p-2 w-full cursor-pointer", children: [
          !n.icon && /* @__PURE__ */ i(K, { children: [
            n.type == "question" && /* @__PURE__ */ e(T, { icon: _n, className: "text-4xl" }),
            n.type == "info" && /* @__PURE__ */ e(
              T,
              {
                style: {
                  ...r({
                    color: "notifay.info"
                  })
                },
                icon: Oe,
                className: "text-4xl"
              }
            ),
            n.type == "warning" && /* @__PURE__ */ e(
              T,
              {
                style: {
                  ...r({
                    color: "notifay.warning"
                  })
                },
                icon: Te,
                className: "text-4xl"
              }
            )
          ] }),
          typeof n.icon == "string" && /* @__PURE__ */ e(wn, { src: n.icon }),
          /* @__PURE__ */ i(
            "div",
            {
              onClick: () => {
                a.set(!a.get);
              },
              className: "flex justify-between items-center w-full",
              children: [
                /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: n.message }) }),
                n.detail && /* @__PURE__ */ e(P, { className: "ml-2", icon: a.get ? Ee : be })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e(B, { className: A("h-[0vh] overflow-y-auto", a.get && (n == null ? void 0 : n.detail) && "h-[30vh]", l && "transition-[height]"), children: (n == null ? void 0 : n.detail) && /* @__PURE__ */ e("div", { className: "p-2", children: /* @__PURE__ */ e(ce, { value: n.detail }) }) }),
        n && /* @__PURE__ */ i(Ie, { focusId: "dialog-list-focusable", className: "flex justify-between items-center p-2", children: [
          /* @__PURE__ */ e("div", { children: n.checkboxLabel && /* @__PURE__ */ e(
            ft,
            {
              id: "check",
              state: s,
              config: {
                style: "checkbox",
                onActive: `${n.checkboxLabel}`,
                onDisactive: `${n.checkboxLabel}`
              }
            }
          ) }),
          n.buttons && /* @__PURE__ */ e("div", { className: "flex gap-1 p-2 overflow-x-auto", children: /* @__PURE__ */ e(
            le,
            {
              slotId: "dialog-list",
              data: n.buttons,
              component: ({ item: d, index: c, status: v, handelSubmit: p, handelFocus: f }) => /* @__PURE__ */ e(
                W,
                {
                  className: "px-4 max-md:w-full",
                  style: {
                    ...r(
                      c != n.defaultId && "gray.opacity",
                      c != n.defaultId && { color: "text.color" },
                      v.isFocused && {
                        outlineColor: "primary"
                      },
                      v.isSubmited && {
                        backgroundColor: "primary",
                        color: "primary.content"
                      }
                    )
                  },
                  onPointerDown: f(),
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
}, _s = () => {
  const n = w(null), t = b(), r = C("preferences/animation.boolean");
  return /* @__PURE__ */ e(Q, { children: /* @__PURE__ */ i($, { children: [
    /* @__PURE__ */ i("div", { className: "flex justify-between items-center gap-1 p-3", children: [
      /* @__PURE__ */ e("h1", { className: "text-2xl", children: "Time" }),
      /* @__PURE__ */ e(
        O,
        {
          onClick: () => {
          },
          icon: H
        }
      )
    ] }),
    /* @__PURE__ */ e(N, {}),
    /* @__PURE__ */ e("div", { className: "flex justify-center p-3", children: /* @__PURE__ */ e(
      "div",
      {
        style: {
          ...t("primary.background", {
            borderColor: "borders",
            boxShadow: Y([
              {
                colorId: "gray.opacity",
                blur: 20,
                x: 0,
                y: 4
              }
            ])
          })
        },
        className: "relative border border-transparent border-solid rounded-full w-[300px] h-[300px] text-xl",
        children: At(1, 12).map((a) => /* @__PURE__ */ e(
          "span",
          {
            onClick: () => {
              n.set(a);
            },
            className: A(
              "inline-flex absolute justify-center items-center rounded-full w-[40px] h-[40px] -translate-x-1/2 -translate-y-1/2 cursor-pointer active:scale-90",
              r && "transition-[transform]"
            ),
            style: {
              ...t(
                {
                  color: "text.color"
                },
                n.get == a && {
                  color: "primary.content",
                  backgroundColor: "primary"
                }
              ),
              top: `${50 - 40 * Math.sin((a + 3) * 30 * Math.PI / 180)}%`,
              left: `${50 + 40 * -Math.cos((a + 3) * 30 * Math.PI / 180)}%`
            },
            children: a
          },
          a
        ))
      }
    ) }),
    /* @__PURE__ */ e(N, {}),
    /* @__PURE__ */ i("div", { className: "flex items-center gap-1 p-2", children: [
      n.get && /* @__PURE__ */ e(
        W,
        {
          style: {
            ...t("gray.opacity", {
              color: "text.color"
            })
          },
          onClick: () => {
            n.set(null);
          },
          className: "capitalize",
          children: /* @__PURE__ */ e(M, { content: "Clear" })
        }
      ),
      /* @__PURE__ */ e(
        W,
        {
          onClick: () => {
          },
          className: "capitalize",
          children: /* @__PURE__ */ e(M, { content: "Set" })
        }
      )
    ] })
  ] }) });
}, Us = () => {
  const n = b(), t = _.getTemp("id"), r = _.getTemp("list"), a = D.getOneFeild("find-item-from-enum", "value"), [s, o] = Zt(() => a, [a], 700), l = m.useMemo(() => (r == null ? void 0 : r.filter(({ desc: f, content: g }) => es([g, f].join(" "), String(o)))) || [], [r, o]), d = Ce(l, "enum-list", "focused"), c = Ce(l, "enum-list", "submited"), v = C("preferences/animation.boolean");
  m.useEffect(() => {
    t && c && (_.setTemp("result", c.value), L.setOneFeild("enum-list", "focused", null), L.setOneFeild("enum-list", "submited", null));
  }, [c, t]), m.useEffect(() => {
    E("enumIsLoading", s);
  }, [s]);
  const p = m.createRef();
  return m.useEffect(() => {
    k("find-item-from-enum");
  }, [t]), /* @__PURE__ */ e(
    Q,
    {
      hidden: !t,
      onClick: ({ target: f }) => {
        var g;
        (g = p.current) != null && g.contains(f) || _.setTemp("id", null);
      },
      children: r && /* @__PURE__ */ i(
        "div",
        {
          ref: p,
          className: "flex flex-col border border-transparent border-solid rounded-md w-[60vw] max-md:w-3/4 h-[400px] max-md:h-3/4 overflow-hidden",
          style: {
            ...n("secondary.background", {
              borderColor: "borders"
            })
          },
          children: [
            /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ e(ie, { inputName: "find-item-from-enum" }) }),
              /* @__PURE__ */ e(N, {})
            ] }),
            /* @__PURE__ */ i(B, { children: [
              !s && /* @__PURE__ */ e(
                ge,
                {
                  minSize: 40,
                  maxSize: 200,
                  data: l || [],
                  slotId: "enum-list",
                  focusId: "enum-list",
                  itemSize: 40,
                  countLastItems: -1,
                  component: ({ data: f, style: g, status: h, handel: y }) => {
                    const u = b(), x = _.getTemp("choised"), S = w(!1);
                    return /* @__PURE__ */ e(
                      "div",
                      {
                        onMouseEnter: (U) => S.set(!0),
                        onMouseLeave: (U) => S.set(!1),
                        style: {
                          ...g,
                          ...u(
                            x == f.value && {
                              color: "primary"
                            },
                            S.get && "gray.opacity",
                            h.isFocused && "primary",
                            h.isFocused && {
                              color: "primary.content"
                            }
                          )
                        },
                        onClick: () => {
                          y.focus(), y.submit();
                        },
                        className: A("cursor-pointer text-lg p-1 max-md:p-2 flex items-center justify-center", x == f.value && "font-bold"),
                        children: /* @__PURE__ */ e("span", { children: f.content || f.value })
                      }
                    );
                  }
                }
              ),
              s && /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-6", children: /* @__PURE__ */ e(ae, {}) })
            ] }),
            /* @__PURE__ */ i("div", { className: A("h-[0px]", v && "transition-[height] duration-200", (d == null ? void 0 : d.desc) && "h-[100px]"), children: [
              /* @__PURE__ */ e(N, {}),
              /* @__PURE__ */ e(
                "div",
                {
                  className: "flex justify-center items-center p-4 h-full text-center",
                  style: {
                    ...n("primary.background")
                  },
                  children: /* @__PURE__ */ e(ce, { value: (d == null ? void 0 : d.desc) || "" })
                }
              )
            ] })
          ]
        }
      )
    }
  );
}, er = ({ children: n }) => /* @__PURE__ */ i(K, { children: [
  n,
  /* @__PURE__ */ e(fs, {}),
  /* @__PURE__ */ e(ps, {}),
  /* @__PURE__ */ e(Os, {}),
  /* @__PURE__ */ e(Ts, {}),
  /* @__PURE__ */ e(ss, {}),
  /* @__PURE__ */ e(Ps, {}),
  /* @__PURE__ */ e(Cs, {}),
  /* @__PURE__ */ e(Fs, {}),
  /* @__PURE__ */ e(ts, {}),
  /* @__PURE__ */ e(hs, {}),
  /* @__PURE__ */ e(Us, {}),
  /* @__PURE__ */ e(us, {}),
  /* @__PURE__ */ e(Hs, {}),
  /* @__PURE__ */ e(ks, {}),
  /* @__PURE__ */ e(Pn, {}),
  /* @__PURE__ */ e(rs, {})
] }), tr = m.memo(
  () => {
    const [n, t] = Nn(!1), r = m.createRef(), a = () => {
      const s = ["#FF5733", "#FFBD33", "#33FF57", "#3357FF", "#D133FF", "red", "blue", "yellow"];
      return s[Math.floor(Math.random() * s.length)];
    };
    return Cn(() => {
      const s = setTimeout(() => {
        t(!0);
      }, 8e3);
      return () => clearTimeout(s);
    }, []), /* @__PURE__ */ e("div", { className: "relative flex justify-center items-center w-screen h-screen", children: /* @__PURE__ */ e("div", { ref: r, className: A("absolute inset-0 pointer-events-none transition-opacity duration-[5000ms] ease-out", n && "opacity-0"), children: At(1, 30).map((s, o) => /* @__PURE__ */ e(
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
      o
    )) }) });
  },
  () => !0
), nr = () => {
  var a;
  const n = re.getTemp("applications"), t = Fe("list.applications");
  m.useEffect(() => {
    var o;
    if (!((o = z.server) != null && o.db))
      return;
    const s = qt(je(z.server.db, "projects"), Jt("label", "!=", null));
    return $t(s, ({ docs: l }) => {
      t.set(
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
  const r = b();
  return /* @__PURE__ */ e(dt, { hidden: !n, children: /* @__PURE__ */ i($, { className: "w-[90vw] max-h-[90vh]", children: [
    /* @__PURE__ */ i("div", { className: "flex justify-between items-center p-2", children: [
      /* @__PURE__ */ e("h1", { className: "text-3xl capitalize", children: "water fetch applications" }),
      /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(
        O,
        {
          icon: yt.solid.faXmark,
          onClick: () => {
            _t();
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ e(N, {}),
    /* @__PURE__ */ e(B, { children: /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center gap-2 p-2", children: (a = t.get) == null ? void 0 : a.map(({ label: s, imageUrl: o, site: l }, d) => /* @__PURE__ */ e("a", { href: l, target: "_blank", children: /* @__PURE__ */ i($, { className: "w-fit", children: [
      /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-3", children: /* @__PURE__ */ e(
        "div",
        {
          className: "flex justify-center items-center border border-transparent border-solid rounded-full w-[100px] h-[100px] overflow-hidden",
          style: {
            ...r("primary.background", {
              borderColor: "borders"
            })
          },
          children: /* @__PURE__ */ e("img", { src: o ?? void 0, className: "w-full h-full object-cover" })
        }
      ) }),
      /* @__PURE__ */ e(N, {}),
      /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ e("p", { className: "text-center text-xl max-md:text-md", children: s }) })
    ] }) }, d)) }) })
  ] }) });
};
export {
  nr as ApplicationsLayout,
  ts as CameraView,
  ss as Commands,
  tr as CongratulationsView,
  _s as DateLayout,
  rs as DevReadingHTML,
  Hs as DialogBoxLayout,
  Us as EnumLayout,
  ns as FindCommandInput,
  os as FindSettingFeild,
  Ts as FixedProfileView,
  Zs as Header,
  as as HeaderNotification,
  ls as HeaderSettings,
  Os as IframeLayout,
  ue as KeyboardButton,
  cs as KeyboardShortcuts,
  fs as KeyboardView,
  er as Layoutes,
  qs as LeftSide,
  Es as LoginContent,
  js as LoginPage,
  us as MenuList,
  ms as MenuRecord,
  vs as NotifaysSlot,
  hs as Notifications,
  ps as PDFView,
  Ls as Payouts,
  Bs as ProfileContent,
  Ds as ProfileView,
  Js as RightSide,
  Cs as SettingUpdateView,
  Ns as SettingUpdating,
  bs as Settings,
  gs as SettingsList,
  ws as SettingsSide,
  As as SettingsTree,
  Ps as SettingsView,
  Ms as SignupPage,
  zs as ToastItem,
  ks as Toasts,
  Fs as UpdateKeyboardShortcut,
  ys as UserSetting,
  $s as Window,
  ds as dataKeyboard,
  bt as getTree,
  Ke as headerVisibility
};
