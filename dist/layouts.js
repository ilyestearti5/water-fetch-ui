import { j as e, a as r, E as O } from "./EmptyComponent-DdPDoXyL.mjs";
import { c as Se, b as U, a as N, d as lt, i as qt, j as ct, t as Xt, k as Zt, l as Z, g as L, m as Jt, s as T, n as dt, o as ee, e as K, f as A, p as z, q as W, r as mt, v as te, w as he, x as _t, u as x, y as ut, z as _, h as se, A as ft, B as Qt, C as en, D as X, E as tn, F as ue, G as nn, H, I as pe, J as ht, K as sn, L as ie, M as pt, N as j, O as gt, P as Me, Q as bt, R as yt, S as Ee, T as xt, U as We, V as on, W as an, X as rn, Y as Ye } from "./index-Ck57f-5M.mjs";
import { B as J, g as ln, a7 as le, F as Y, x as C, z as ne, i as cn, ac as D, T as V, af as G, a3 as dn, aa as S, a0 as R, n as Pe, K as be, C as B, $ as ye, e as ce, I as Te, Y as mn, G as xe, M as ve, d as I, y as De, q as vt, a1 as un, a2 as fn, ad as hn, ae as wt, r as pn, f as gn, N as bn, D as yn, c as Nt, a as Ct, m as xn, Q as vn, a5 as Oe, O as kt, o as St, p as It, U as Ft, k as Et, _ as wn, Z as jt, u as Lt, J as Mt, R as je, A as we, H as Nn, b as Cn, S as kn, L as Sn, a6 as In, h as Fn, W as En, a4 as jn, ab as Ln, l as Mn, v as Pn } from "./ViewPage-CiBtxH_v.mjs";
import f from "react";
import { a as de, m as Q, b as me, s as F, t as y, i as Ae, D as Tn, c as ge, g as Ge, d as Dn, e as On, f as An, h as Un, j as Vn, S as Rn } from "./index-BAWoqxfk.mjs";
import { b as Ue, c as Ne, f as $, d as Ve, a as Pt, e as zn, g as Re, h as Bn, i as Tt, j as $n, k as Dt, l as Ot, m as Hn, n as At, o as Kn, p as Ut, q as Vt, r as Wn, s as Ce, t as Yn, u as Gn, v as qn, w as Xn, x as Zn, y as Jn, z as _n, A as Qn, B as es, C as Le, D as ts, E as ns, F as ss, G as os, H as as, I as rs, J as qe, K as is, L as ls, M as cs, N as ds } from "./index-Buy7cH84.mjs";
import { S as k, c as ms, s as Xe, a as Ze, F as us, G as fs, g as Rt, b as zt, d as hs, e as ps, u as Ie, r as Je, f as _e, h as Qe, i as et } from "./firebase-oFaglbxa.mjs";
function gs() {
  const n = Se.getTemp("type"), t = Se.getTemp("id");
  return U(
    "camera-take",
    () => {
      if (t && n == "take") {
        const o = document.querySelector("#camera-view  video");
        if (!o)
          return;
        const i = document.createElement("canvas");
        i.width = o.videoWidth, i.height = o.videoHeight;
        const s = i.getContext("2d");
        s == null || s.drawImage(o, 0, 0, i.width, i.height);
        const a = i.toDataURL("image/jpeg");
        Se.setTemp("result", a);
      }
    },
    [n, t]
  ), /* @__PURE__ */ e(J, { hidden: !t, children: /* @__PURE__ */ e(ln, {}) });
}
function bs() {
  const n = le("press ? for help");
  return /* @__PURE__ */ e(Y, { "aria-multiline": !1, placeholder: `${n} 😊`, inputName: "findCommand" });
}
function ys() {
  const n = N(), t = lt(), o = qt(), i = f.useMemo(() => {
    const u = ct.getState();
    return o.map((v) => ({
      command: v,
      keys: de.join(v, t, "commandId->command")
    })).filter((v) => v.keys.filter((w) => {
      if (!w.when)
        return !0;
      try {
        return Xt(w.when)({
          state: u,
          focused: null
        });
      } catch {
        return !1;
      }
    }).length || !v.keys.length);
  }, [t, o]), s = Zt(), a = Z("commandId"), l = L("commands/enum/prefixes.object"), m = Z("commands.isLoading"), c = Jt.getAll(), p = f.useMemo(() => {
    const u = Object.entries(l || {}).map(([d, w]) => ({
      key: d,
      settingKey: `${w}.enum`,
      value: w
    })), v = {};
    return de.fullJoinOne(u, s, "settingKey->settingId").forEach(({ data: d, joinTo: w }) => {
      var M, P;
      v[d.key] = {
        lines: (P = (M = w == null ? void 0 : w.config) == null ? void 0 : M.list) == null ? void 0 : P.map(({ value: E, content: q }) => ({
          id: E,
          content: q,
          checked: (w == null ? void 0 : w.value) == E
        })),
        // desc: "commands/enum/prefixes.object"
        onSubmit(E) {
          T.setOneFeild(d.settingKey, "value", E.id);
        }
      };
    }), Q(
      {
        commands: {
          lines: i.map(({ command: d, keys: w }) => ({
            content: d.label || d.commandId,
            keyPanding: w.map(({ value: M }) => M),
            id: d.commandId
          })),
          onSubmit(d) {
            dt(d.id);
          }
        },
        settings: {
          lines: s.map(({ name: d, settingId: w, desc: M }) => ({
            id: w,
            tools: [],
            content: d || w,
            sub: M
          })),
          onSubmit(d) {
            ee(d.id);
          }
        },
        actions: {
          lines: c.map(({ actionId: d, status: w }) => ({
            content: `${me(d.replaceAll(/[^a-z0-9A-Z]/gi, " ").replaceAll(/ +/gi, " "), void 0, "normal")} ${w == "loading" ? "[running...]" : ""}`,
            id: d
          })),
          onSubmit(d) {
            d.id && K(d.id);
          }
        }
      },
      v
    );
  }, [i, s, l, c]), g = A.getOneFeild("findCommand", "value"), h = f.useMemo(() => !!(g != null && g.match(/^ *\?/)), [g]), b = f.useMemo(() => Q(
    h && {
      help: {
        lines: Object.entries(p).map(([u]) => ({
          id: u,
          content: u
        })),
        onSubmit(u) {
          z("commandId", u.id);
        }
      }
    },
    !h && p
  ), [p, g, h]);
  return f.useEffect(() => {
    a && h && z("commandId", "help");
  }, [a, g, h]), f.useEffect(() => {
    W.setOneFeild("cmds/list", "focused", 0);
  }, [g]), /* @__PURE__ */ e(
    J,
    {
      onLoadContent: () => {
        F("findCommand");
      },
      onPointerDown: (u) => {
        u.currentTarget == u.target && z("commandId", null);
      },
      hidden: !a,
      children: /* @__PURE__ */ r(
        "div",
        {
          style: {
            ...n({
              backgroundColor: "secondry.background",
              borderColor: "borders"
            })
          },
          className: y("absolute top-[37px] left-1/2 rounded-xl transform -translate-x-1/2 w-[max(50vw,400px)] shadow-lg border border-solid border-transparent overflow-hidden"),
          children: [
            /* @__PURE__ */ r(
              "div",
              {
                className: "transition-[height]",
                style: Q(
                  a && {
                    height: "40px"
                  },
                  !a && {
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
                          background: mt("to right", "gray.opacity", "transparent", "gray.opacity")
                        })
                      },
                      children: a
                    }
                  ),
                  /* @__PURE__ */ e(C, {})
                ]
              }
            ),
            /* @__PURE__ */ r(
              "div",
              {
                className: "flex justify-between items-center gap-3 p-2",
                onClick: () => {
                  F("findCommand");
                },
                children: [
                  /* @__PURE__ */ e(bs, {}),
                  m && /* @__PURE__ */ e(ne, {})
                ]
              }
            ),
            /* @__PURE__ */ e(C, {}),
            /* @__PURE__ */ e(cn, { data: b })
          ]
        }
      )
    }
  );
}
function co() {
  const n = Z("dev.html.hoverPosition"), t = N();
  return /* @__PURE__ */ e(O, { children: n && /* @__PURE__ */ e(
    "div",
    {
      className: y(`
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
function xs() {
  const n = te.getOneFeild("settings", "focused"), t = he.getTemp("config"), o = A.getOneFeild("findConfigurations", "value");
  _t("findConfigurations");
  const i = N(), s = Z("configurations.found.length"), a = f.useMemo(() => me(n || "no settings focused", "camel", "normal"), [n]), l = le(`search ${a} in list`), m = le(a), c = x(!1), p = A.getOneFeild("findConfigurations-local", "value");
  return ut(
    () => {
      typeof p == "string" && A.setOneFeild("findConfigurations", "value", p);
    },
    [p],
    500
  ), /* @__PURE__ */ e(
    "div",
    {
      className: "p-2 border-transparent border-b border-solid",
      onClick: () => {
        F("findConfigurations");
      },
      children: /* @__PURE__ */ r("div", { className: "relative w-full", children: [
        /* @__PURE__ */ e(
          Y,
          {
            selectWhenFocusIn: !0,
            inputName: "findConfigurations-local",
            placeholder: l,
            propositions: (n == "user" ? ["id", "name", "changed"] : n == "keyboardShortcuts" ? ["key", "label", "commandId"] : []).map((g) => `@${g}`).filter((g) => !(o != null && o.includes(g))),
            tabIndex: t ? -1 : 1
          }
        ),
        /* @__PURE__ */ e("div", { className: "top-1/2 right-2 absolute flex items-center gap-2 -translate-y-1/2", children: !!o && /* @__PURE__ */ e(
          D,
          {
            title: "clear",
            onClick: () => {
              A.setOneFeild("findConfigurations-local", "value", "");
            },
            onMouseEnter: () => {
              c.set(!0);
            },
            onMouseLeave: () => {
              c.set(!1);
            },
            children: /* @__PURE__ */ r(
              "div",
              {
                className: "px-2 py-1 rounded-sm cursor-pointer",
                style: {
                  ...i("primary", {
                    color: "primary.content"
                  })
                },
                children: [
                  /* @__PURE__ */ r("span", { children: [
                    /* @__PURE__ */ e(V, { content: "found" }),
                    " ",
                    s,
                    " ",
                    /* @__PURE__ */ e(V, { content: m })
                  ] }),
                  c.get && /* @__PURE__ */ r("span", { children: [
                    " ",
                    "(",
                    /* @__PURE__ */ e(V, { content: "Delete" }),
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
const tt = "visibility/header.boolean";
function vs({ children: n }) {
  const t = L(tt), o = x(!1), i = _("Shift");
  f.useEffect(() => {
    const c = (p) => {
      const g = p.x * 100 / innerWidth;
      o.set(p.y <= 100 && Ae(25, g, 75));
    };
    return document.addEventListener("mousemove", c), () => document.removeEventListener("mousemove", c);
  }, []);
  const s = N(), a = Z("window.isFocused"), l = L("preferences/animation.boolean"), m = f.useMemo(() => s(a ? "primary.background" : "secondry.background", {
    borderColor: "borders",
    boxShadow: se([
      {
        blur: 10,
        x: 0,
        y: 3,
        size: 0,
        colorId: "shadow.color"
      }
    ])
  }), [s, a]);
  return /* @__PURE__ */ r("div", { className: "top-0 z-[10000000000000000000000000000000000000] absolute inset-x-0", children: [
    /* @__PURE__ */ e(
      "div",
      {
        onClick: () => {
          T.setOneFeild(tt, "value", !t);
        },
        title: t ? "hide header bar" : "open header bar",
        className: y(
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
          !o.get || !i ? "h-[0px]" : "border-b border-x h-[30px]"
        ),
        style: m,
        children: /* @__PURE__ */ e(G, { icon: t ? Ue : Ne })
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        className: y(
          "relative border-b border-solid border-transparent box-content flex h-[0px] items-center justify-between overflow-hidden",
          t && "h-[50px]",
          l && "transition-[height]"
        ),
        style: {
          ...m
        },
        children: n
      }
    )
  ] });
}
function ws() {
  const n = ft("notification.header"), t = f.useMemo(() => (Array.isArray(n.get) ? n.get : []).slice(0, 3), [n.get]), o = N();
  return /* @__PURE__ */ e(
    "div",
    {
      className: "h-fit",
      style: {
        ...o({
          background: mt("right", "secondry", "primary"),
          borderColor: "borders",
          color: "primary.content"
        })
      },
      children: !!t.length && /* @__PURE__ */ e(
        dn,
        {
          data: t,
          slotId: "header-notifications",
          focusId: "header-notifications",
          component: ({ index: i, item: s }) => /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ r("div", { className: "flex justify-between items-center p-3", children: [
              /* @__PURE__ */ e("div", { children: s.message || "empty message" }),
              /* @__PURE__ */ e("div", { className: "flex tools", children: /* @__PURE__ */ e(
                S,
                {
                  onClick: () => {
                    n.set((a) => {
                      const l = a == null ? void 0 : a[i];
                      return l && (l.expanded = !l.expanded), a;
                    });
                  },
                  icon: $
                }
              ) })
            ] }),
            /* @__PURE__ */ e(
              "div",
              {
                className: y(
                  `
                  h-[0px]
                  p-3
                  flex
                  flex-col
                `,
                  s.expanded && "h-[200px]"
                ),
                children: /* @__PURE__ */ e(R, { children: s.desc || "" })
              }
            )
          ] })
        }
      )
    }
  );
}
const Ns = "visibility/configurations.boolean", Cs = () => {
  const n = te.getOneFeild("settings", "focused"), t = f.useMemo(() => me(String(n), "camel", "normal"), [n]), o = le(t);
  return /* @__PURE__ */ r("div", { className: "flex justify-between items-center p-2", children: [
    /* @__PURE__ */ e("h1", { className: "font-bold text-2xl capitalize", children: o }),
    /* @__PURE__ */ e("div", { className: "tools", children: /* @__PURE__ */ e(
      D,
      {
        position: {
          x: "left",
          y: "bottom"
        },
        title: "close view configurations",
        children: /* @__PURE__ */ e(
          S,
          {
            onClick: () => {
              T.setOneFeild(Ns, "value", !1);
            },
            icon: $
          }
        )
      }
    ) })
  ] });
};
function ks() {
  const n = Qt(), t = W.getOneFeild("keyboardShortcuts", "focused");
  return U(
    "keyboard/update",
    () => {
      if (t == null)
        return;
      const o = n[t];
      o && (W.setOneFeild("keyboardShortcuts", "submited", t), z("keyboard.commandId", o.commandId), F("edit-keyPanding"));
    },
    [t, n]
  ), /* @__PURE__ */ e(
    Pe,
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
      component: ({ data: o, index: i, status: s, handel: a, style: l }) => {
        const { commandId: m, label: c = "" } = o, p = en(m), g = f.createRef(), h = N(), b = _("Control"), u = x(!1), v = f.useMemo(() => p.filter(({ value: d }) => d).map(({ value: d }) => d), [p]);
        return /* @__PURE__ */ r(
          "div",
          {
            onMouseEnter: () => u.set(!0),
            onMouseLeave: () => u.set(!1),
            onClick: () => {
              a.focus(), a.submit();
            },
            ref: g,
            className: "px-3 text-xs group row",
            style: {
              ...h(
                i % 2 && "primary.background",
                u.get && "gray.opacity",
                s.isFocused && { borderColor: "primary" },
                s.isSubmited && {
                  backgroundColor: "secondry",
                  color: "secondry.content"
                }
              ),
              ...l
            },
            children: [
              /* @__PURE__ */ e(
                "div",
                {
                  className: y(`
                w-[150px]
                flex
                justify-end
                px-2
              `),
                  children: (u.get || s.isFocused || s.isSubmited) && /* @__PURE__ */ r("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ e(
                      S,
                      {
                        onClick: async () => {
                          const d = JSON.stringify(o);
                          await navigator.clipboard.writeText(d);
                        },
                        icon: Ve
                      }
                    ),
                    /* @__PURE__ */ e(
                      S,
                      {
                        icon: Pt,
                        onClick: (d) => {
                          z("keyboard.commandId", m), F("edit-keyPanding");
                        }
                      }
                    ),
                    !!p.length && /* @__PURE__ */ e(
                      S,
                      {
                        tabIndex: -1,
                        icon: $,
                        onClick: () => {
                          X.remove(p.map(({ keyId: d }) => d));
                        }
                      }
                    )
                  ] })
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  className: y("capitalize col", b && "hover:underline cursor-pointer"),
                  onPointerDown: async () => {
                    b && (A.setOneFeild("findConfigurations", "value", `@commandId: ${m}`), await new Tn().start(100), F("findConfigurations"));
                  },
                  children: c || m
                }
              ),
              /* @__PURE__ */ e("div", { className: y("col justify-end truncate"), children: /* @__PURE__ */ e(be, { shortcut: v }) })
            ]
          }
        );
      }
    }
  );
}
const fe = ({ isActive: n, className: t, ...o }) => {
  const i = N();
  return /* @__PURE__ */ e(
    "span",
    {
      className: y("w-[35px] h-[35px] gap-2 rounded-md inline-flex items-center justify-center border border-solid border-transparent", t),
      style: {
        ...i(
          "secondry.background",
          {
            borderColor: "borders"
          },
          n && "primary",
          n && {
            color: "primary.content"
          },
          {
            boxShadow: se([
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
      ...o
    }
  );
}, Ss = [
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
], nt = 200, Is = () => {
  const n = N(), t = x(!1), o = x(!1), i = x(!1), s = _("Shift"), a = x(!1), l = _("Control"), m = _("AltGraph");
  f.useEffect(() => {
    o.set(l);
  }, [l]), f.useEffect(() => {
    t.set(s);
  }, [s]), f.useEffect(() => {
    i.set(m);
  }, [m]);
  const c = x([-100, -100]), p = x(!1);
  ut(
    () => {
      p.get && p.set(!1);
    },
    [p.get],
    nt
  ), tn(["keyboard-view"]);
  const g = A.useOneFeild("keyboard-view", "value"), h = x([0, innerHeight - 300]), b = L("visibility/keyboard.boolean");
  return /* @__PURE__ */ r(
    "div",
    {
      hidden: !b,
      className: "z-[100000000000000000000000000000] fixed flex flex-col border border-transparent border-solid rounded-xl w-1/2 max-md:w-2/3 h-[300px] overflow-hidden",
      style: {
        ...n("primary.background", {
          borderColor: "borders",
          boxShadow: se([
            {
              colorId: "shadow.color",
              y: 4,
              x: 0,
              blur: 10,
              size: 4
            }
          ])
        }),
        ...Q(
          h.get && {
            left: `${h.get[0]}px`,
            top: `${h.get[1]}px`
          }
        )
      },
      children: [
        /* @__PURE__ */ r("div", { className: "flex justify-between items-center p-2", children: [
          /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
            S,
            {
              onPointerDown: () => {
                const u = (d) => {
                  h.set([d.pageX, d.pageY]);
                };
                document.addEventListener("mousemove", u);
                const v = () => {
                  document.removeEventListener("pointerup", v), document.removeEventListener("mousemove", u);
                };
                document.addEventListener("pointerup", v);
              },
              icon: zn,
              className: "cursor-grab"
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "propositions", children: g.get ? /* @__PURE__ */ e(
            "pre",
            {
              className: "px-2 py-1 border border-transparent border-solid rounded-md font-[inherit]",
              style: {
                ...n("secondry.background", {
                  borderColor: "borders"
                })
              },
              children: g.get
            }
          ) : /* @__PURE__ */ e("div", { className: "px-2 py-1", children: /* @__PURE__ */ e("span", { children: "Empty Value" }) }) }),
          /* @__PURE__ */ e(
            D,
            {
              title: "close view",
              position: {
                x: "left"
              },
              children: /* @__PURE__ */ e(
                B,
                {
                  onClick: () => {
                    T.setOneFeild("visibility/keyboard.boolean", "value", !1);
                  },
                  icon: $
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ e(C, {}),
        /* @__PURE__ */ r("div", { className: "flex justify-center items-stretch h-full overflow-hidden", children: [
          /* @__PURE__ */ e("div", { className: "w-fit", children: /* @__PURE__ */ e("div", { className: "flex flex-col flex-1 justify-center items-center gap-1 p-2 w-[20px] h-full overflow-hidden", children: [
            {
              name: "shift",
              state: t
            },
            {
              name: "alt gr",
              state: i
            },
            {
              name: "control",
              state: o
            }
          ].map(({ state: u, name: v }, d) => /* @__PURE__ */ e(
            fe,
            {
              isActive: u.get,
              className: "w-full max-lg:w-full",
              onPointerDown: () => {
                u.set((w) => !w);
              },
              children: v
            },
            d
          )) }) }),
          /* @__PURE__ */ r(
            "div",
            {
              className: "relative flex flex-col justify-between gap-3 border-x p-2 border-transparent border-solid h-full overflow-hidden",
              style: {
                ...n({
                  borderColor: "borders"
                })
              },
              onClick: (u) => {
                const v = u.pageX, d = u.pageY, { left: w, top: M } = u.currentTarget.getBoundingClientRect();
                c.set([v - w, d - M]), p.set(!0);
              },
              children: [
                c.get && /* @__PURE__ */ e(
                  "span",
                  {
                    className: y(
                      `opacity-0 blur-xl transition-[opacity] duration-[${nt}] absolute pointer-events-none inline-block w-[100px] h-[100px] transform -translate-x-1/2 -translate-y-1/2 rounded-full`,
                      p.get && "opacity-100"
                    ),
                    style: {
                      ...n("gray.opacity"),
                      ...Q(
                        c.get && {
                          left: `${c.get[0]}px`,
                          top: `${c.get[1]}px`
                        }
                      )
                    }
                  }
                ),
                /* @__PURE__ */ e("div", { className: "flex flex-col gap-3", children: Ss.map((u, v) => /* @__PURE__ */ e("div", { className: "flex justify-center gap-3", children: u.map((d, w) => /* @__PURE__ */ r(
                  fe,
                  {
                    onPointerDown: () => {
                      const M = t.get ? d.shift : i.get ? d.alt : d.normal, P = document.activeElement;
                      P && (P instanceof HTMLInputElement || P instanceof HTMLTextAreaElement) && (P.value = P.value.concat(M));
                    },
                    className: "relative",
                    children: [
                      t.get ? d.shift : i.get ? d.alt : d.normal,
                      !t.get && /* @__PURE__ */ e(
                        "span",
                        {
                          className: "right-1 bottom-1 absolute text-xs",
                          style: {
                            ...n({ color: "gray.opacity.2" })
                          },
                          children: i.get ? d.normal : d.alt
                        }
                      )
                    ]
                  },
                  w
                )) }, v)) }),
                /* @__PURE__ */ e(
                  fe,
                  {
                    className: "w-full max-lg:w-full",
                    onPointerDown: () => {
                      g.set((u) => u + " "), !a.get && t.get && t.set(!1);
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
                g.set((u) => u == null ? void 0 : u.slice(0, -1));
              }
            },
            {
              name: "clean",
              onClick() {
                g.set("");
              }
            }
          ].map(({ onClick: u, name: v }, d) => /* @__PURE__ */ e(
            fe,
            {
              className: "w-full max-lg:w-full",
              onPointerDown: () => {
                u == null || u();
              },
              children: v
            },
            d
          )) }) })
        ] })
      ]
    }
  );
}, st = "visibility/leftSide.boolean", Fs = ({ children: n }) => {
  const t = L(st), o = N();
  return /* @__PURE__ */ e(
    ye,
    {
      position: "right",
      min: 200,
      temp: "leftSide.currentWidth",
      max: () => Math.max(window.innerWidth / 3, 350),
      handelResize: ({ size: i }) => {
        const s = Ae(150, i);
        s != t && T.setOneFeild(st, "value", s);
      },
      className: y("h-full flex-col flex overflow-hidden border-r border-solid border-transparent z-[10000000000000000]", !t && "border-r-0"),
      hidden: !t,
      style: {
        ...o("secondry.background", {
          borderColor: "borders"
        })
      },
      children: n
    }
  );
}, mo = () => {
  const n = N();
  return /* @__PURE__ */ r("div", { className: "w-full", children: [
    /* @__PURE__ */ e("div", { className: "p-2", children: /* @__PURE__ */ e(Y, { placeholder: "Search Component Type", inputName: "search-component-type" }) }),
    /* @__PURE__ */ e(C, {}),
    /* @__PURE__ */ e("div", { className: "flex flex-col gap-y-1 p-2", children: [
      {
        value: "text",
        content: "Text"
      },
      {
        value: "inrow-view",
        content: "InRow View"
      },
      {
        value: "inline-view",
        content: "Inline View"
      },
      {
        value: "button",
        content: "Button"
      },
      {
        value: "card",
        content: "Card"
      },
      {
        value: "image",
        content: "Image"
      },
      {
        value: "field",
        content: "Feild"
      },
      {
        value: "line",
        content: "Line"
      }
    ].map(({ content: t, value: o }, i) => /* @__PURE__ */ r(
      ce,
      {
        draggable: !0,
        onDrag: (s) => {
          s.dataTransfer.setData("viewId", o);
        },
        className: "w-full cursor-move",
        children: [
          /* @__PURE__ */ e("div", { className: "p-1 h-[70px]", children: /* @__PURE__ */ e(
            "div",
            {
              style: {
                ...n("gray.opacity")
              },
              className: "rounded-2xl w-full h-full",
              children: /* @__PURE__ */ e("img", {})
            }
          ) }),
          /* @__PURE__ */ e(C, {}),
          /* @__PURE__ */ e("p", { className: "p-1 w-full text-center", children: t })
        ]
      },
      i
    )) })
  ] });
}, Es = ({ item: n, status: t, handelFocus: o, handelSubmit: i }) => {
  if (n.type == "separator")
    return /* @__PURE__ */ e("div", { className: "my-1", children: /* @__PURE__ */ e(C, {}) });
  const s = N(), a = f.createRef();
  return /* @__PURE__ */ e("div", { className: "px-1", children: /* @__PURE__ */ r(
    "div",
    {
      ref: a,
      tabIndex: 1,
      style: {
        ...s(
          t.isFocused && "primary",
          t.isFocused && {
            color: "primary.content"
          }
        )
      },
      onMouseEnter: o(),
      onMouseLeave: () => {
        W.setOneFeild("menu-list", "focused", null);
      },
      onClick: i(),
      className: "cursor-pointer flex items-center rounded-md px-4 py-1 w-full",
      children: [
        /* @__PURE__ */ e("div", { className: "w-[30px]", children: n.checked && /* @__PURE__ */ e(Te, { icon: Re }) }),
        /* @__PURE__ */ r("div", { className: "flex justify-between items-center gap-1 w-full", children: [
          n.label && /* @__PURE__ */ e("span", { children: n.label }),
          n.accelerator && /* @__PURE__ */ e(be, { shortcut: n.accelerator })
        ] }),
        /* @__PURE__ */ e("div", { className: "w-[30px]" })
      ]
    }
  ) });
}, js = () => {
  const n = N(), t = ue.getTemp("list"), o = ue.getTemp("position"), i = ue.getTemp("id"), s = f.createRef(), a = W.getOneFeild("menu-list", "submited");
  f.useEffect(() => {
    i && typeof a == "number" && (ue.setTemp("result", a), W.setOneFeild("menu-list", "submited", null));
  }, [a, i]);
  const l = nn.getOne("menu-list");
  return /* @__PURE__ */ e(J, { hidden: !i, children: /* @__PURE__ */ e(
    mn,
    {
      positionId: "menu-list",
      ref: s,
      className: "absolute py-1 border border-transparent border-solid rounded-md w-[350px] max-md:w-[150px]",
      style: {
        ...n("secondry.background", {
          borderColor: "borders",
          boxShadow: se([
            {
              colorId: "shadow.color",
              blur: 10,
              size: 1,
              x: 0,
              y: 5
            }
          ])
        }),
        ...Q(
          o && (l == null ? void 0 : l.width) && (innerWidth > o[0] + l.width ? {
            left: o[0]
          } : {
            right: innerWidth - o[0]
          }),
          o && (l == null ? void 0 : l.height) && (innerHeight > o[1] + l.height ? {
            top: o[1]
          } : {
            bottom: innerHeight - o[1]
          })
        )
      },
      children: /* @__PURE__ */ e(xe, { skipFn: ({ enabled: m = !0, type: c }) => c == "separator" || !m, slotId: "menu-list", component: Es, data: t || [] })
    }
  ) });
}, Ls = () => {
  const n = H.getAll();
  return /* @__PURE__ */ e(
    xe,
    {
      data: n,
      slotId: "notification",
      component: ({ item: t, index: o, id: i, handelFocus: s, handelSelect: a, handelSubmit: l, status: m }) => {
        const c = x(!1);
        function p(b, u, v, d) {
          return t.type == "warning" ? u : t.type == "error" ? v : t.type == "success" ? d : b;
        }
        const g = N(), h = L("preferences/animation.boolean");
        return /* @__PURE__ */ r(
          "div",
          {
            id: i,
            onClick: l(),
            onPointerDown: s(a()),
            onDoubleClick: () => {
              H.setOneFeild(t.id, "showDesc", !t.showDesc);
            },
            style: {
              ...g(
                "secondry.background",
                o % 2 && "primary.background",
                c.get && "gray.opacity",
                m.isFocused && {
                  borderColor: "secondry"
                },
                m.isSubmited && {
                  backgroundColor: "secondry",
                  color: "secondry.content"
                }
              )
            },
            className: y(
              `
                overflow-hidden
                transform
                transition-[transform,opacity]
                relative
                max-h-[calc(80vh+50px)]
                border
                border-solid
                border-transparent
              `
            ),
            onMouseEnter: () => c.set(!0),
            onMouseLeave: () => c.set(!1),
            children: [
              /* @__PURE__ */ r("div", { className: y("relative p-3 flex justify-between items-center"), children: [
                /* @__PURE__ */ r("div", { className: "truncate text-xl flex items-center gap-2", children: [
                  /* @__PURE__ */ e(
                    G,
                    {
                      icon: p(Ot, Dt, $n, Tt),
                      style: {
                        ...g({
                          color: p("notifay.info", "notifay.warning", "notifay.error", "notifay.success")
                        })
                      }
                    }
                  ),
                  /* @__PURE__ */ e("span", { children: t.title })
                ] }),
                /* @__PURE__ */ e(
                  "div",
                  {
                    className: y(`
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
                      ...g(p("notifay.info", "notifay.warning", "notifay.error", "notifay.success"))
                    }
                  }
                ),
                /* @__PURE__ */ r(
                  "ul",
                  {
                    className: "flex gap-1",
                    style: {
                      visibility: c.get || m.isSubmited ? "visible" : "hidden"
                    },
                    children: [
                      t.desc && /* @__PURE__ */ e(
                        S,
                        {
                          onClick: () => {
                            H.setOneFeild(t.id, "showDesc", !t.showDesc);
                          },
                          icon: t.showDesc ? Ue : Ne
                        }
                      ),
                      t.removable && /* @__PURE__ */ e(
                        S,
                        {
                          onClick: () => {
                            H.remove([t.id]);
                          },
                          icon: Bn
                        }
                      )
                    ]
                  }
                )
              ] }),
              t.desc && /* @__PURE__ */ e("div", { className: y("h-[0px]", h && "transition-[height] duration-700", t.showDesc && "h-[170px]"), children: /* @__PURE__ */ e(R, { className: "p-6", children: /* @__PURE__ */ e(ve, { value: t.desc }) }) }),
              Array.isArray(t.buttons) && /* @__PURE__ */ e("div", { className: "flex justify-end p-5 overflow-x-auto", children: t.buttons.map(({ command: b, label: u }, v) => /* @__PURE__ */ e(
                I,
                {
                  className: "px-2 py-1 rounded-sm",
                  onClick: async () => {
                    typeof b == "object" ? K(b.action, b.arg) : dt(b);
                  },
                  children: u
                },
                v
              )) }),
              t.status == "loading" && /* @__PURE__ */ e(De, {})
            ]
          }
        );
      }
    }
  );
}, Fe = "visibility/notifays.boolean", ot = "visibility/notifays/nots.boolean";
function Ms() {
  const n = L(Fe), t = L(ot), o = H.getIds(), i = N(), s = W.getOneFeild("notification", "focused"), a = H.getAll(), l = f.useMemo(() => typeof s != "number" ? null : a[s] || null, [a, s]);
  U(
    "toggleExpandNotifay",
    () => {
      l && H.setOneFeild(l.id, "showDesc", !l.showDesc);
    },
    [l]
  ), U(
    "notification.deleteFocus",
    () => {
      l && H.remove([l.id]);
    },
    [l]
  );
  const m = L("preferences/animation.boolean");
  return /* @__PURE__ */ r(
    "div",
    {
      onClick: () => {
        n || T.setOneFeild(Fe, "value", !0);
      },
      className: y(
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
        ...i({
          backgroundColor: "secondry.background",
          borderColor: "borders",
          boxShadow: se([
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
        /* @__PURE__ */ r(
          "div",
          {
            className: "notifay-top-view flex justify-between items-center gap-2 p-3 cursor-pointer",
            onClick: () => {
              T.setOneFeild(ot, "value", !t);
            },
            children: [
              /* @__PURE__ */ r("h3", { className: "font-bold text-lg uppercase notifay-full-title", children: [
                /* @__PURE__ */ e(V, { content: "notifications" }),
                /* @__PURE__ */ e(
                  "span",
                  {
                    style: {
                      ...i({
                        color: "gray.opacity.2"
                      })
                    },
                    children: !t && `(${o.length})`
                  }
                )
              ] }),
              /* @__PURE__ */ r("div", { className: "flex", children: [
                /* @__PURE__ */ e(
                  S,
                  {
                    onClick: () => {
                      H.remove(a.filter(({ removable: c = !0 }) => c).map(({ id: c }) => c));
                    },
                    className: y(!o.length && "pointer-events-none"),
                    icon: Hn
                  }
                ),
                !!o.length && /* @__PURE__ */ e(S, { icon: t ? Ne : Ue }),
                /* @__PURE__ */ e(
                  S,
                  {
                    onClick: () => {
                      T.setOneFeild(Fe, "value", !1);
                    },
                    icon: At
                  }
                )
              ] })
            ]
          }
        ),
        !!o.length && t && /* @__PURE__ */ e(C, {}),
        /* @__PURE__ */ e(
          vt,
          {
            focusId: "notifications",
            className: y("flex flex-col overflow-hidden max-h-[80vh] rounded-ee-xl rounded-es-xl", m && "duration-300 transition-[max-height]", !t && "max-h-[0vh]"),
            children: /* @__PURE__ */ e(R, { children: /* @__PURE__ */ e(Ls, {}) })
          }
        )
      ]
    }
  );
}
const Ps = () => {
  const n = pe.getTemp("pdf");
  return /* @__PURE__ */ e(J, { hidden: !n, children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(ye, { className: "h-[70vh]", position: "right", temp: "pdf", min: 400, max: () => innerWidth - 30, children: /* @__PURE__ */ e(
    un,
    {
      className: "h-full overflow-hidden",
      list: [
        /* @__PURE__ */ e(
          fn,
          {
            title: "PDF..",
            rightSide: /* @__PURE__ */ e("div", { className: "flex tools", children: /* @__PURE__ */ e(D, { title: "close view", children: /* @__PURE__ */ e(
              B,
              {
                icon: $,
                onClick: () => {
                  pe.setTemp("pdf", null);
                }
              }
            ) }) })
          }
        ),
        /* @__PURE__ */ e("div", { className: "p-2 h-full", children: n && /* @__PURE__ */ e("embed", { src: n, className: "rounded-xl w-full h-full overflow-hidden" }) })
      ]
    }
  ) }) }) });
}, at = "visibility/rightSide.boolean", Ts = ({ children: n }) => {
  const t = L(at), o = N();
  return /* @__PURE__ */ e(
    ye,
    {
      min: 200,
      temp: "rightSide.currentWidth",
      max: () => Math.max(window.innerWidth / 3, 350),
      handelResize: ({ size: i }) => {
        const s = Ae(150, i);
        s != t && T.setOneFeild(at, "value", s);
      },
      position: "left",
      hidden: !t,
      style: {
        ...o({
          backgroundColor: "secondry.background",
          borderColor: "borders"
        })
      },
      className: y(
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
function Ds() {
  const n = ht();
  return /* @__PURE__ */ e(
    Pe,
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
      component: ({ data: t, index: o, style: i, status: s, handel: a, id: l }) => {
        const m = _("Control"), c = x(!1), p = f.useMemo(() => !t.settingId.match(/\.password$/gi) && !ge(t.def, t.value), [t]), g = N();
        U(
          "showSubmitSetting",
          () => {
            s.isSubmited && ee(t.settingId);
          },
          [s]
        );
        const h = f.useMemo(() => s.isFocused || s.isSubmited || c.get, [s, c.get]);
        return /* @__PURE__ */ r(
          "div",
          {
            id: l,
            onMouseEnter: () => c.set(!0),
            onMouseLeave: () => c.set(!1),
            className: y(
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
              ...g(
                o % 2 && "primary.background",
                o % 2 == 0 && "secondry.background",
                c.get && "gray.opacity",
                s.isFocused && {
                  borderColor: "primary"
                },
                s.isSubmited && {
                  backgroundColor: "secondry",
                  color: "secondry.content"
                }
              ),
              ...i
            },
            onClick: () => {
              a.focus(), a.submit();
            },
            children: [
              !ge(t.value, t.def) && /* @__PURE__ */ e(
                "div",
                {
                  className: "left-0 absolute inset-y-0 w-[3px]",
                  style: {
                    ...g("primary")
                  }
                }
              ),
              /* @__PURE__ */ e(
                "h1",
                {
                  className: y(`
                flex
                gap-1
                items-center
                overflow-hidden
              `),
                  children: /* @__PURE__ */ e(
                    "span",
                    {
                      className: y("text-xl capitalize truncate", m && "hover:underline cursor-pointer"),
                      onClick: () => {
                        m && t.name != null && A.setOneFeild("findConfigurations", "value", t.name);
                      },
                      children: t.name || /* @__PURE__ */ e(
                        "span",
                        {
                          style: g({
                            color: "gray.opacity.2"
                          }),
                          children: "name not provided"
                        }
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ r(
                "span",
                {
                  className: y("inline-flex gap-1 items-center text-xs italic font-extralight truncate"),
                  onClick: () => {
                    m && A.setOneFeild("findConfigurations", "value", `@id ${t.settingId}`);
                  },
                  children: [
                    /* @__PURE__ */ r(
                      "span",
                      {
                        className: y(m && "hover:underline cursor-pointer"),
                        style: g(
                          m && c.get && {
                            color: "primary"
                          }
                        ),
                        children: [
                          "@",
                          /* @__PURE__ */ e("span", { className: "font-normal", children: t.settingId })
                        ]
                      }
                    ),
                    /* @__PURE__ */ r("div", { className: y("flex opacity-0 transition-[opacity] duration-500", h && "opacity-100"), children: [
                      p && /* @__PURE__ */ e(D, { title: "reset", children: /* @__PURE__ */ e(
                        S,
                        {
                          icon: Kn,
                          onClick: () => {
                            T.setOneFeild(t.settingId, "value", t.def);
                          }
                        }
                      ) }),
                      /* @__PURE__ */ e(D, { title: "configurate", children: /* @__PURE__ */ e(
                        S,
                        {
                          onClick: () => {
                            ee(t.settingId);
                          },
                          icon: Ut
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
function Bt(n = [], t = ".") {
  const o = n.filter(Boolean).map((s) => s.split(t)).filter((s) => s.length);
  return Array.from(new Set(o.map(([s]) => s))).map((s) => ({
    data: s,
    innerTree: Bt(
      o.filter(([a]) => a == s).map(([, ...a]) => a.join(t)),
      t
    )
  }));
}
function Os() {
  const n = ht(), t = f.useMemo(() => n.map(({ settingId: o }) => o), [n]);
  return /* @__PURE__ */ e("div", { id: "settings.tree.view", className: "flex flex-col h-full overflow-hidden", tabIndex: 1, children: /* @__PURE__ */ e(R, { children: /* @__PURE__ */ e(
    hn,
    {
      treeId: "setting-tree-layout",
      tree: Bt(t, "/"),
      component: ({ data: o, status: i, parent: s, isFins: a, innerTree: l, level: m, handels: c }) => {
        const p = N(), [g, h] = o.split("."), b = x(!1), u = f.useMemo(() => {
          const v = [];
          let d = s;
          for (; d; )
            v.push(d.data), d = d.parent;
          return v.reverse().join("/");
        }, [a]);
        return /* @__PURE__ */ r(
          "div",
          {
            "aria-level": m,
            onMouseEnter: () => b.set(!0),
            onMouseLeave: () => b.set(!1),
            className: "flex items-center px-1 border border-transparent border-solid h-[30px]",
            onClick: async () => {
              c.focus(!0);
            },
            style: {
              ...p(
                b.get && "gray.opacity",
                i.isFocused && {
                  borderColor: "primary"
                }
              ),
              paddingLeft: `${m * 50}px`
            },
            children: [
              !h && /* @__PURE__ */ e("div", { className: "mx-1 tools", children: /* @__PURE__ */ e(
                S,
                {
                  iconClassName: "text-xs",
                  tabIndex: -1,
                  icon: i.isExpanded ? Ne : At,
                  style: {
                    outlineColor: "transparent"
                  },
                  onClick: () => {
                    c.expand(!1, !i.isExpanded);
                  }
                }
              ) }),
              /* @__PURE__ */ r("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ r("div", { children: [
                  a && g,
                  !a && /* @__PURE__ */ e("b", { children: g }),
                  /* @__PURE__ */ e(
                    "b",
                    {
                      className: "ml-1",
                      style: {
                        ...p({
                          color: "primary"
                        })
                      },
                      children: !!(l != null && l.length) && `(${l == null ? void 0 : l.length})`
                    }
                  )
                ] }),
                h && /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: "px-2 py-1 rounded-md",
                      style: {
                        ...p("gray.opacity")
                      },
                      children: h
                    }
                  ),
                  /* @__PURE__ */ e(
                    S,
                    {
                      onClick: () => {
                        ee(u);
                      },
                      icon: Ut,
                      hidden: !b.get
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
  const n = f.useMemo(() => [
    {
      click() {
        te.setOneFeild("settings.viewType", "focused", "list");
      },
      title: "list",
      icon: Vt
    },
    {
      click() {
        te.setOneFeild("settings.viewType", "focused", "tree");
      },
      title: "tree",
      icon: Wn
    }
  ], []), t = sn(n, "settings.layout.tools");
  return f.useEffect(() => {
    t && (t.click(), W.setOneFeild("settings.layout.tools", "submited", null));
  }, [t]), /* @__PURE__ */ r("div", { className: "relative flex flex-col w-full h-full overflow-hidden", children: [
    /* @__PURE__ */ r(vt, { focusId: "settings.layouts", className: "flex justify-between items-center p-2", children: [
      /* @__PURE__ */ e("div", {}),
      /* @__PURE__ */ e("div", { className: "flex gap-1 tools", children: /* @__PURE__ */ e(
        xe,
        {
          slotId: "settings.layout.tools",
          data: n,
          component: ({ item: { click: o, title: i, icon: s }, tabIndex: a, handelFocus: l, status: m }) => {
            const c = N();
            return /* @__PURE__ */ e(
              D,
              {
                title: i,
                position: {
                  x: "center",
                  y: "top"
                },
                children: /* @__PURE__ */ e(
                  S,
                  {
                    icon: s,
                    onPointerDown: l(),
                    style: {
                      ...c(
                        m.isFocused && {
                          outlineColor: "primary"
                        }
                      )
                    },
                    tabIndex: a,
                    onClick: o
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
      wt,
      {
        views: {
          list: Ds,
          tree: Os
        },
        viewId: "settings.viewType"
      }
    )
  ] });
}
function Us() {
  const n = he.getTemp("config");
  return f.useEffect(() => {
    n || ee(null);
  }, [n]), /* @__PURE__ */ r("div", { className: "flex flex-col w-full h-full overflow-hidden", children: [
    /* @__PURE__ */ e(xs, {}),
    /* @__PURE__ */ e(C, {}),
    n && /* @__PURE__ */ e(
      wt,
      {
        viewId: "settings",
        views: {
          keyboardShortcuts: ks,
          user: As,
          icons: pn,
          colors: gn
        }
      }
    )
  ] });
}
function Vs() {
  const n = te.getOne("settings"), t = f.useMemo(() => Object.entries((n == null ? void 0 : n.tabs) || {}).map(([i, s]) => ({
    id: i,
    ...s,
    isFocused: (n == null ? void 0 : n.focused) == i
  })), [n]), o = N();
  return /* @__PURE__ */ e(
    "div",
    {
      className: "border-transparent border-r border-solid w-full h-full overflow-hidden",
      style: {
        ...o({
          borderColor: "borders"
        })
      },
      children: /* @__PURE__ */ e(
        xe,
        {
          slotId: "configurations.side.list",
          data: t,
          component: ({ item: i }) => {
            const { id: s, news: a, isFocused: l, icon: m } = i, c = f.useMemo(() => `settings.${s}.show`, [s]), p = lt(), g = f.useMemo(() => de.join({ cmdId: c }, p, "cmdId->command").map(({ value: v }) => v), [c, p]), h = le(me(s, "camel", "normal")), b = x(!1), u = N();
            return /* @__PURE__ */ r(
              D,
              {
                onMouseEnter: () => b.set(!0),
                onMouseLeave: () => b.set(!1),
                draggable: !0,
                title: `press ${g.map((v) => "`" + v + "`").join(" or ")}`,
                onClick: () => {
                  !l && te.setOneFeild("settings", "focused", i.id);
                },
                style: {
                  ...u((l || b.get) && "primary.background")
                },
                className: "relative truncate cursor-pointer",
                children: [
                  l && /* @__PURE__ */ e("span", { className: "left-0 absolute inset-y-0 w-[2px]", style: { ...u("primary") } }),
                  /* @__PURE__ */ r("div", { className: "flex items-center gap-2 p-2", children: [
                    (m == null ? void 0 : m.value) && /* @__PURE__ */ e(G, { icon: Ge(m.type, m.value) }),
                    h,
                    a && /* @__PURE__ */ e(bn, { children: /* @__PURE__ */ e(G, { icon: Ge(a.type, a.value) }) })
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
function Rs() {
  return /* @__PURE__ */ e(ye, { position: "right", min: () => innerWidth / 7, max: () => innerWidth / 3, className: "h-full", children: /* @__PURE__ */ e(Vs, {}) });
}
const rt = "visibility/configurations.boolean";
function zs() {
  const n = L(rt), t = N();
  return f.useEffect(() => {
    n && he.setTemp("config", !0);
  }, [n]), /* @__PURE__ */ e(
    yn,
    {
      hidden: !n,
      onLoadContent: () => {
        F("findConfigurations-local");
      },
      onClick: async (o) => {
        o.currentTarget == o.target && T.setOneFeild(rt, "value", !1);
      },
      onTransitionEnd: () => {
        typeof n == "boolean" && he.setTemp("config", n);
      },
      children: /* @__PURE__ */ r(
        "div",
        {
          className: y(`
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
            ...t("secondry.background", {
              borderColor: "borders"
            })
          },
          children: [
            /* @__PURE__ */ e(Cs, {}),
            /* @__PURE__ */ e(C, {}),
            /* @__PURE__ */ r("div", { className: "flex w-[70vw] h-[70vh]", children: [
              /* @__PURE__ */ e(Rs, {}),
              /* @__PURE__ */ e(Us, {})
            ] })
          ]
        }
      )
    }
  );
}
function Bs({ settingId: n }) {
  const t = T.getOne(n), o = f.useMemo(() => t == null ? void 0 : t.value, [t]), i = f.useMemo(() => t == null ? void 0 : t.config, [t]), s = x(t == null ? void 0 : t.value);
  f.useEffect(() => {
    T.setOneFeild(n, "value", s.get);
  }, [s.get]), f.useEffect(() => {
    s.set(o);
  }, [t]);
  const a = f.useMemo(() => `setting:${(t == null ? void 0 : t.settingId) || ""}`, [t]), l = f.useMemo(() => {
    var p;
    const c = (p = a.match(/\.[a-zA-Z0-9]+$/gi)) == null ? void 0 : p[0].slice(1);
    return c || null;
  }, [a]), m = N();
  return /* @__PURE__ */ e(
    "div",
    {
      className: y((t == null ? void 0 : t.readonly) && "cursor-not-allowed"),
      style: {
        ...m((t == null ? void 0 : t.readonly) && "primary.background")
      },
      children: /* @__PURE__ */ r("div", { className: y((t == null ? void 0 : t.readonly) && "pointer-events-none"), children: [
        l == "boolean" && /* @__PURE__ */ e(Nt, { id: a, state: s, config: i }),
        l == "array" && /* @__PURE__ */ e(Ct, { id: a, state: s, config: i }),
        l == "enum" && /* @__PURE__ */ e(xn, { id: a, state: s, config: i }),
        l == "object" && /* @__PURE__ */ e(vn, { id: a, state: s, config: i }),
        l == "string" && /* @__PURE__ */ e(Oe, { id: a, state: s, config: i }),
        l == "number" && /* @__PURE__ */ e(kt, { id: a, state: s, config: i }),
        l == "file" && /* @__PURE__ */ e(St, { id: a, state: s, config: i }),
        l == "filter" && /* @__PURE__ */ e(It, { id: a, state: s, config: i }),
        l == "password" && /* @__PURE__ */ e(Ft, { id: a, state: s, config: i }),
        l == "date" && /* @__PURE__ */ e(Et, { id: a, state: s, config: i }),
        l == "regexp" && /* @__PURE__ */ e(wn, { id: a, state: s }),
        l == "audio" && /* @__PURE__ */ e(jt, { id: a, state: s, config: i }),
        l == "image" && /* @__PURE__ */ e(Lt, { id: a, state: s, config: i })
      ] })
    }
  );
}
const $s = () => {
  const n = N(), t = ft("view.settings"), o = T.getOne(t.get || ""), i = f.useMemo(() => !o || o.settingId.match(/\.password$/gi) ? !1 : !ge(o.def, o.value), [o]), s = f.useMemo(() => {
    try {
      const a = Function(`return (state)=> \`${(o == null ? void 0 : o.desc) || "**no description defined**"}\` `)(), l = ct.getState();
      return a(l);
    } catch (a) {
      return Dn.err(a), " - ";
    }
  }, [o == null ? void 0 : o.desc]);
  return /* @__PURE__ */ e(
    J,
    {
      onLoadContent: () => {
        t.get && F(`setting:${t.get}`);
      },
      hidden: !t.get,
      children: /* @__PURE__ */ r(
        "div",
        {
          hidden: !t.get,
          className: y("rounded-md border-solid border border-transparent w-1/2 max-md:w-5/6"),
          style: n("secondry.background", {
            borderColor: "borders"
          }),
          children: [
            /* @__PURE__ */ r("div", { className: "flex justify-between items-center gap-1 p-3", children: [
              o && /* @__PURE__ */ r(O, { children: [
                /* @__PURE__ */ e("h1", { className: "text-2xl truncate", children: o.name }),
                /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-[1px] max-md:hidden text-xs", children: /* @__PURE__ */ e(
                  Mt,
                  {
                    list: o.settingId.split("/").filter(Boolean).map((a, l) => {
                      var p;
                      const m = (p = a.match(/\..+$/gi)) == null ? void 0 : p[0].slice(1);
                      let c = null;
                      switch (m) {
                        case "boolean": {
                          c = Re;
                          break;
                        }
                        case "password": {
                          c = Qn;
                          break;
                        }
                        case "number": {
                          c = _n;
                          break;
                        }
                        case "string": {
                          c = Jn;
                          break;
                        }
                        case "file": {
                          c = Zn;
                          break;
                        }
                        case "enum": {
                          c = Vt;
                          break;
                        }
                        case "object": {
                          c = Xn;
                          break;
                        }
                        case "array": {
                          c = qn;
                          break;
                        }
                        case "audio":
                          c = Gn;
                      }
                      return /* @__PURE__ */ r(
                        "span",
                        {
                          className: "inline-flex items-center gap-x-2 px-2 py-1 rounded-md",
                          style: {
                            ...n("gray.opacity.2")
                          },
                          children: [
                            a.replaceAll(/\..+$/gi, ""),
                            c && /* @__PURE__ */ e(G, { icon: c })
                          ]
                        },
                        l
                      );
                    }),
                    joinComponent: /* @__PURE__ */ e(G, { icon: Ce })
                  }
                ) })
              ] }),
              /* @__PURE__ */ r("div", { className: "flex tools", children: [
                i && /* @__PURE__ */ e(
                  B,
                  {
                    icon: Yn,
                    onClick: async () => {
                      const { response: a } = await ie({
                        message: "are you sure about reset this setting",
                        buttons: ["No", "Yes"],
                        defaultId: 1
                      });
                      a && o && T.setOneFeild(o.settingId, "value", o.def);
                    }
                  }
                ),
                /* @__PURE__ */ e(
                  B,
                  {
                    onClick: () => {
                      t.set(null), F("findConfigurations");
                    },
                    icon: $
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e(C, {}),
            o && /* @__PURE__ */ r(O, { children: [
              /* @__PURE__ */ e(R, { className: "p-2 max-h-[150px]", children: /* @__PURE__ */ e(ve, { value: s }) }),
              /* @__PURE__ */ e(C, {})
            ] }),
            t.get && /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ e(Bs, { settingId: t.get }) })
          ]
        }
      )
    }
  );
}, Hs = ({ item: n, index: t }) => {
  const o = x(!1), i = x(!1), s = x(!1), a = x(0), { message: l } = n, m = N(), c = L("preferences/toastTime.number"), p = L("preferences/animation.boolean"), g = f.useMemo(() => n.time || c || 5, [c, n.time]);
  f.useEffect(() => {
    if (s.get) {
      const b = setTimeout(() => {
        n.id && pt.remove([n.id]), s.set(!1);
      }, 300);
      return () => {
        clearTimeout(b);
      };
    }
  }, [s.get, n]), f.useEffect(() => {
    let b = 0;
    const u = setInterval(() => {
      a.set(++b), b >= g && (s.set(!0), clearInterval(u));
    }, 1e3);
    return () => {
      clearInterval(u);
    };
  }, [g]), f.useEffect(() => {
    if (i.get) {
      const b = setTimeout(() => {
        i.set(!1);
      }, 3e3);
      return () => {
        clearTimeout(b);
      };
    }
  }, [i.get]);
  function h(b, u, v, d) {
    return n.type == "warning" ? u : n.type == "error" ? v : n.type == "success" ? d : b;
  }
  return /* @__PURE__ */ r(
    "div",
    {
      className: y("flex z-[100000] items-center justify-between p-2 opacity-100 scale-100", s.get && "opacity-0 scale-0", p && "transition-[transform,opacity] duration-300"),
      onMouseEnter: () => o.set(!0),
      onMouseLeave: () => o.set(!1),
      style: {
        ...m(t % 2 && "gray.opacity")
      },
      children: [
        /* @__PURE__ */ r("div", { className: "inline-flex items-center gap-1", children: [
          /* @__PURE__ */ e(
            G,
            {
              icon: h(Ot, Dt, es, Tt),
              style: {
                ...m({
                  color: h("notifay.info", "notifay.warning", "notifay.error", "notifay.success")
                })
              }
            }
          ),
          /* @__PURE__ */ e(ve, { value: l.toString() })
        ] }),
        /* @__PURE__ */ r("div", { className: "flex items-center", children: [
          /* @__PURE__ */ e(
            "span",
            {
              className: y("relative rounded-full w-[30px] h-[30px] mx-2 inline-flex items-center justify-center"),
              style: {
                ...m("gray.opacity")
              },
              children: g - a.get
            }
          ),
          /* @__PURE__ */ r("div", { className: y("tools w-[0px] flex gap-1 items-center overflow-hidden", o.get && "w-[50px]", p && "transition-[width]"), children: [
            /* @__PURE__ */ e(
              S,
              {
                onClick: async () => {
                  i.set(!0), await navigator.clipboard.writeText(l.toString());
                },
                icon: i.get ? Re : Ve
              }
            ),
            /* @__PURE__ */ e(
              S,
              {
                onClick: () => {
                  s.set(!0);
                },
                icon: $
              }
            )
          ] })
        ] })
      ]
    }
  );
}, Ks = () => {
  const n = pt.getAll(), t = N(), o = L("preferences/animation.boolean"), i = f.useMemo(() => Hs, []), s = L("toast/position.enum");
  return /* @__PURE__ */ e(
    "div",
    {
      className: y(
        "fixed z-[100000000000000000000000000000] min-w-[300px] border overflow-hidden border-transparent rounded-md border-solid left-1/2 transform -translate-x-1/2 scale-0",
        !!(n != null && n.length) && "scale-100",
        o && "transition-transform duration-300",
        s == "top" && "top-[50px]",
        s == "bottom" && "bottom-[50px]"
      ),
      style: {
        ...t("toast.background", {
          boxShadow: se([
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
      children: /* @__PURE__ */ e(R, { className: "max-h-[400px]", children: n == null ? void 0 : n.map((a, l) => /* @__PURE__ */ e(i, { index: l, item: a }, a.id)) })
    }
  );
};
function Ws({ children: n }) {
  const t = L("visibility/header.boolean"), o = L("preferences/animation.boolean");
  return /* @__PURE__ */ r("div", { className: y("absolute bottom-0 inset-x-0 w-full border-solid border-transparent border-b top-0 flex flex-col", t && "top-[51px]", o && "transition-[top] duration-200"), children: [
    /* @__PURE__ */ e(ws, {}),
    /* @__PURE__ */ e("div", { className: "flex items-stretch h-full overflow-hidden", children: n })
  ] });
}
const $t = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,} *$", Ys = () => {
  const n = N(), t = A.getOneFeild("signupUseremail", "value"), o = x(""), i = x(""), s = U(
    "signup",
    async () => {
      var a;
      if (!((a = k.server) != null && a.auth)) {
        j("Error When Loading The Auth", "error");
        return;
      }
      if (!t) {
        j("Email is required", "error"), F("signupUseremail");
        return;
      }
      if (!gt(["signupUseremail"]).isValide) {
        j("Please fill the email correctly!", "error"), F("signupUseremail");
        return;
      }
      if (!o.get) {
        j("Password must be at least 6 characters", "error"), F("user-password");
        return;
      }
      if (o.get !== i.get) {
        j("Password and confirm password must be the same!", "error"), F("user-password-confirm");
        return;
      }
      await ms(k.server.auth, t, o.get);
    },
    [t, o.get, i.get]
  );
  return /* @__PURE__ */ r(R, { className: "flex max-sm:flex-col items-center h-full", children: [
    /* @__PURE__ */ r("div", { className: "p-8 w-1/2 max-sm:w-full", children: [
      /* @__PURE__ */ r(
        "form",
        {
          onSubmit: async (a) => {
            a.preventDefault(), await K("signup");
          },
          children: [
            /* @__PURE__ */ r("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "email" }),
              /* @__PURE__ */ e(
                Y,
                {
                  controls: {
                    [$t]: {
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
            /* @__PURE__ */ r("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "Password" }),
              /* @__PURE__ */ e(je, { placeholder: "********", id: "user-password", state: o })
            ] }),
            /* @__PURE__ */ r("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "Confirm Password" }),
              /* @__PURE__ */ e(je, { placeholder: "********", id: "user-password-confirm", state: i })
            ] }),
            /* @__PURE__ */ e(I, { icon: (s == null ? void 0 : s.status) == "loading" ? Le : void 0, iconClassName: y("animate-spin"), type: "submit", className: "py-2 rounded-md w-full", children: "Sign Up" })
          ]
        }
      ),
      /* @__PURE__ */ r("p", { className: "mt-8 text-center text-sm", children: [
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
          we,
          {
            onClick: (a) => {
              a.preventDefault(), z("focusedLoginView", 0);
            },
            children: "Login"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-8 w-1/2 max-sm:w-full", children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
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
      /* @__PURE__ */ e("p", { className: "mb-4 capitalize", children: /* @__PURE__ */ e(V, { content: "water fetch is a platform give's the possiblity for doing more thing by dahbia card" }) }),
      /* @__PURE__ */ r("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12", children: /* @__PURE__ */ e("span", { className: "text-xl", children: "📦" }) }),
        /* @__PURE__ */ r("div", { className: "flex-1", children: [
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
      /* @__PURE__ */ r("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12", children: /* @__PURE__ */ e("span", { className: "text-xl", children: "💵" }) }),
        /* @__PURE__ */ r("div", { className: "flex-1", children: [
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
}, Gs = () => {
  const n = N(), t = A.getOneFeild("loginUseremail", "value"), o = x("");
  U(
    "login",
    async () => {
      var a;
      if (!((a = k.server) != null && a.auth)) {
        j("Error When Loading The Auth", "error");
        return;
      }
      if (!t) {
        j("Email is required", "error");
        return;
      }
      if (!o.get) {
        j("Password must be at least 6 characters", "error");
        return;
      }
      await Xe(k.server.auth, t, o.get);
    },
    [t, o.get]
  );
  const i = U(
    "sign-in-facebook",
    async () => {
      var a;
      (a = k.server) != null && a.auth && await Ze(k.server.auth, new us());
    },
    []
  ), s = U(
    "sign-in-google",
    async () => {
      var a;
      (a = k.server) != null && a.auth && await Ze(k.server.auth, new fs());
    },
    []
  );
  return /* @__PURE__ */ r(R, { className: "flex max-sm:flex-col items-center", children: [
    /* @__PURE__ */ r("div", { className: "p-8 w-1/2 max-sm:w-full", children: [
      /* @__PURE__ */ r(
        "form",
        {
          onSubmit: async (a) => {
            var l;
            if (a.preventDefault(), !((l = k.server) != null && l.auth)) {
              j("Error When Loading The Auth", "error");
              return;
            }
            if (t && o.get)
              try {
                await Xe(k.server.auth, t, o.get);
              } catch {
                j("Password Or Email Is Incorrect 😴", "error");
              }
          },
          children: [
            /* @__PURE__ */ r("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "Username or email" }),
              /* @__PURE__ */ e(
                Y,
                {
                  controls: {
                    [$t]: {
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
            /* @__PURE__ */ r("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "Password" }),
              /* @__PURE__ */ e(je, { placeholder: "********", state: o })
            ] }),
            /* @__PURE__ */ e(I, { type: "submit", className: "py-2 rounded-md w-full", children: "Login" })
          ]
        }
      ),
      /* @__PURE__ */ r("div", { className: "flex justify-evenly items-center my-3", children: [
        /* @__PURE__ */ e(
          B,
          {
            iconClassName: y((s == null ? void 0 : s.status) == "loading" && "animate-spin"),
            icon: (s == null ? void 0 : s.status) == "loading" ? Le : ts,
            onClick: async () => {
              await K("sign-in-google");
            }
          }
        ),
        /* @__PURE__ */ e(
          B,
          {
            iconClassName: y((i == null ? void 0 : i.status) == "loading" && "animate-spin"),
            icon: (i == null ? void 0 : i.status) == "loading" ? Le : ns,
            onClick: async () => {
              await K("sign-in-facebook");
            }
          }
        )
      ] }),
      /* @__PURE__ */ r("p", { className: "text-center text-sm", children: [
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
          we,
          {
            onClick: (a) => {
              a.preventDefault(), z("focusedLoginView", 1);
            },
            children: "Sign up"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-8 w-1/2 max-sm:w-full", children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
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
      /* @__PURE__ */ e("p", { className: "mb-4 capitalize", children: /* @__PURE__ */ e(V, { content: "water fetch is a platform give's the possiblity for doing more thing by dahbia card" }) }),
      /* @__PURE__ */ r("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12", children: /* @__PURE__ */ e("span", { className: "text-xl", children: "📦" }) }),
        /* @__PURE__ */ r("div", { className: "flex-1", children: [
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
      /* @__PURE__ */ r("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12", children: /* @__PURE__ */ e("span", { className: "text-xl", children: "💵" }) }),
        /* @__PURE__ */ r("div", { className: "flex-1", children: [
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
}, qs = () => {
  const n = Z("focusedLoginView");
  return /* @__PURE__ */ e(Nn, { focused: n ?? 0, pages: [/* @__PURE__ */ e(Gs, {}), /* @__PURE__ */ e(Ys, {})] });
}, Xs = ({ projectId: n }) => {
  var a, l;
  const t = Me(), { data: o, error: i, status: s } = bt(async () => {
    var m;
    if (!((m = k.server) != null && m.db))
      return [];
    if (t != null && t.uid) {
      const { docs: c } = await Rt(zt(k.server.db, "users", t.uid, "projects", n, "payouts"));
      return c;
    } else
      return [];
  }, [n, t]);
  return f.useEffect(() => {
    s.set("idle");
  }, []), f.useEffect(() => {
    s.get == "error" && i.get && j("Error When Loading The Payouts", "error");
  }, [s.get, i.get]), /* @__PURE__ */ r(O, { children: [
    s.get == "success" && /* @__PURE__ */ r(O, { children: [
      !!((a = o.get) != null && a.length) && /* @__PURE__ */ e(
        Pe,
        {
          data: o.get,
          focusId: "payouts-list",
          itemSize: 50,
          slotId: "payouts-list",
          component: ({ style: m, data: c }) => {
            const p = c.data();
            return /* @__PURE__ */ r(
              "div",
              {
                style: {
                  ...m
                },
                className: "flex justify-between items-center gap-1 p-3",
                children: [
                  /* @__PURE__ */ r("span", { children: [
                    p.price,
                    "DA"
                  ] }),
                  /* @__PURE__ */ e(I, { onClick: async () => {
                  }, children: /* @__PURE__ */ e(V, { content: "Prepare" }) })
                ]
              }
            );
          }
        }
      ),
      !((l = o.get) != null && l.length) && /* @__PURE__ */ e("div", { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ e("h1", { children: "No Payouts In Your Account 😔" }) })
    ] }),
    s.get == "loading" && /* @__PURE__ */ e(ne, { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2" })
  ] });
}, Zs = () => {
  var w, M, P;
  const n = N(), t = Me(), o = yt(), i = x(!1), s = x(void 0), a = L("preferences/animation.boolean"), l = U(
    "change-my-name",
    async () => {
      k.server && s.get && t && await hs(
        ps(k.server.db, "users", t.uid),
        {
          name: s.get
        },
        {
          merge: !0
        }
      );
    },
    [s.get, t]
  );
  f.useEffect(() => {
    K("change-my-name");
  }, [s.get, t]), f.useEffect(() => {
    F("userLoginDisplayName");
  }, [i.get]), f.useEffect(() => {
    i.set(!1);
  }, [s.get]);
  const m = U(
    "profile-change-image",
    async () => {
      if (!k.server) {
        j("Error When Loading The Server", "error");
        return;
      }
      if (!t)
        return;
      const E = On(t.photoURL && "Delete", "Cancel", "Upload", "Open Camera"), { response: q } = await ie({
        title: "Profile Picture",
        message: "Change your profile picture",
        buttons: E,
        defaultId: 2
      }), oe = E[q];
      if (oe == "Delete") {
        await Ie(t, {
          photoURL: null
        });
        return;
      }
      if (oe == "Cancel")
        return;
      if (oe == "Upload")
        return new Promise((ke) => {
          const ae = document.createElement("input");
          ae.type = "file", ae.accept = "image/*", ae.onchange = async () => {
            var Ke;
            if (!k.server)
              return;
            const $e = (Ke = ae.files) == null ? void 0 : Ke[0];
            if (!$e)
              return;
            let Yt = ["users", t.uid, "profile", Ee()].filter(Boolean).join("/"), He = Je(k.server.storage, Yt);
            await _e(He, $e);
            const Gt = await Qe(He);
            return await Ie(t, {
              photoURL: Gt
            }), ke("Done");
          }, ae.click();
        });
      const ze = await xt("take");
      if (!ze || !k.server)
        return;
      const Ht = await fetch(ze).then((ke) => ke.blob());
      let Kt = ["users", t.uid, "profile", Ee()].filter(Boolean).join("/"), Be = Je(k.server.storage, Kt);
      await _e(Be, Ht);
      const Wt = await Qe(Be);
      await Ie(t, {
        photoURL: Wt
      });
    },
    [t]
  ), c = x(!1), p = A.getOneFeild("newUserPhoneNumber", "value"), g = x(null), h = U(
    "send-verification-code",
    async () => {
      if (p && !gt(["newUserPhoneNumber"]).isValide) {
        j("Invalid Phone Number", "error");
        return;
      }
    },
    [p, t]
  );
  f.useEffect(() => {
    c.get && F("newUserPhoneNumber");
  }, [c.get]);
  const {
    data: b,
    status: u,
    error: v
  } = bt(async () => {
    if (t && k.server) {
      const { docs: E } = await Rt(zt(k.server.db, "users", t.uid, "projects"));
      return E;
    } else
      return [];
  }, [t]);
  f.useEffect(() => {
    u.set("idle");
  }, []), f.useEffect(() => {
    u.get == "error" && v.get && j("Error Loading Your Projects", "error");
  }, [v.get, u.get]);
  const d = x(null);
  return /* @__PURE__ */ r("div", { className: "flex flex-col h-full overflow-hidden", children: [
    /* @__PURE__ */ e("div", { className: "p-2", children: /* @__PURE__ */ r("div", { className: "flex max-sm:flex-col items-center gap-3", children: [
      /* @__PURE__ */ r(
        "div",
        {
          style: {
            ...n(
              (t == null ? void 0 : t.emailVerified) && {
                outlineColor: "success.text"
              }
            )
          },
          className: y("relative rounded-full w-[100px] h-[100px] max-sm:w-[60px] max-sm:h-[60px] overflow-hidden", (t == null ? void 0 : t.emailVerified) && "outline-1 outline-offset-1"),
          onClick: async () => {
            K("profile-change-image");
          },
          children: [
            (m == null ? void 0 : m.status) != "loading" && /* @__PURE__ */ e("img", { src: (w = t == null ? void 0 : t.photoURL) == null ? void 0 : w.toString(), className: "w-full h-full object-cover" }),
            " ",
            !(t != null && t.photoURL) && /* @__PURE__ */ e(Te, { icon: ss }),
            (m == null ? void 0 : m.status) == "loading" && /* @__PURE__ */ e(
              ne,
              {
                className: "top-1/2 left-1/2 absolute w-3/4 h-3/4 transform -translate-x-1/2 -translate-y-1/2",
                style: {
                  ...n({
                    borderColor: "success.text"
                  })
                }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ r("div", { className: "max-sm:flex max-sm:flex-col max-sm:justify-cente", children: [
        (l == null ? void 0 : l.status) != "loading" && /* @__PURE__ */ r(O, { children: [
          !i.get && /* @__PURE__ */ e(
            "h1",
            {
              className: "text-2xl",
              onClick: () => {
                i.set(!0);
              },
              children: (o == null ? void 0 : o.name) || "No Name"
            }
          ),
          i.get && /* @__PURE__ */ e(
            Oe,
            {
              id: "userLoginDisplayName",
              state: s,
              config: {
                hint: "Enter Your Name",
                uncancable: !0
              }
            }
          )
        ] }),
        (l == null ? void 0 : l.status) == "loading" && /* @__PURE__ */ e(De, {}),
        /* @__PURE__ */ e("p", { children: o == null ? void 0 : o.email }),
        o && /* @__PURE__ */ r("div", { className: "flex items-center", children: [
          /* @__PURE__ */ e(
            "span",
            {
              className: "cursor-pointer",
              onClick: () => {
              },
              children: "Phone Number"
            }
          ),
          " ",
          ": ",
          !c.get && ((t == null ? void 0 : t.phoneNumber) || " - "),
          c.get && !g.get && /* @__PURE__ */ r("div", { className: "flex items-center gap-1 p-2", children: [
            /* @__PURE__ */ e(
              Y,
              {
                controls: {
                  "(0|\\+[0-9]+)[0-9]{9}": {
                    succ: "valide phone number",
                    err: "invalid phone number"
                  }
                },
                inputName: "newUserPhoneNumber",
                placeholder: "Enter Phone Number"
              }
            ),
            /* @__PURE__ */ e(
              I,
              {
                className: "px-5 py-1",
                icon: os,
                iconClassName: y("animate-spin", (h == null ? void 0 : h.status) != "loading" && "hidden"),
                onClick: async () => {
                  K("send-verification-code");
                },
                children: "Verifie"
              }
            ),
            /* @__PURE__ */ e(
              I,
              {
                style: {
                  ...n("gray.opacity")
                },
                className: "px-5 py-1",
                onClick: () => {
                  c.set(!1);
                },
                children: "Cancel"
              }
            )
          ] }),
          c.get && g.get && /* @__PURE__ */ r("div", { className: "flex items-center gap-1 p-2", children: [
            /* @__PURE__ */ e(Y, { inputName: "verificationCode" }),
            /* @__PURE__ */ e(I, { onClick: async () => {
            }, children: "Ok" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ e(C, {}),
    /* @__PURE__ */ r(R, { className: "relative", children: [
      u.get == "success" && /* @__PURE__ */ r(O, { children: [
        /* @__PURE__ */ e("div", { className: "flex flex-wrap", children: (M = b.get) == null ? void 0 : M.map((E, q) => /* @__PURE__ */ e("div", { className: "flex justify-between items-center p-3 w-1/3 max-sm:w-1/2", children: /* @__PURE__ */ r(ce, { className: "w-full", children: [
          /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ e("h1", { className: "font-bold text-lg", children: E.id }) }),
          /* @__PURE__ */ e(C, {}),
          /* @__PURE__ */ r("div", { className: "flex justify-between items-center p-2", children: [
            /* @__PURE__ */ e("span", {}),
            /* @__PURE__ */ e(
              B,
              {
                onClick: () => {
                  d.set(E.id);
                },
                icon: Ce
              }
            )
          ] })
        ] }) }, q)) }),
        !((P = b.get) != null && P.length) && /* @__PURE__ */ e("div", { className: "flex justify-center items-center w-full h-full capitalize", children: /* @__PURE__ */ e(V, { content: "no water fetch projects you sigin" }) })
      ] }),
      u.get == "loading" && /* @__PURE__ */ e(ne, { className: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" }),
      /* @__PURE__ */ r(
        "div",
        {
          style: {
            ...n("primary.background")
          },
          className: y("right-0 absolute inset-y-0 left-full", d.get && "left-0", a && "transition-[left]"),
          children: [
            /* @__PURE__ */ r("div", { className: "flex items-center gap-3 p-3", children: [
              /* @__PURE__ */ e(
                B,
                {
                  icon: as,
                  onClick: () => {
                    d.set(null);
                  }
                }
              ),
              /* @__PURE__ */ e("h1", { className: "font-bold text-4xl", children: d.get })
            ] }),
            /* @__PURE__ */ e(C, {}),
            d.get && /* @__PURE__ */ e(Xs, { projectId: d.get })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e(C, {}),
    /* @__PURE__ */ r("div", { className: "flex justify-end gap-2 p-2", children: [
      /* @__PURE__ */ e(
        I,
        {
          className: "max-sm:w-full sm:w-1/4 capitalize",
          style: {
            ...n("error")
          },
          onClick: async () => {
            const { response: E } = await ie({
              title: "Delete Account",
              message: "Are you sure you want to delete your account?",
              buttons: ["No", "Yes"],
              defaultId: 1
            });
            E && k.server && (t == null || t.delete(), await et(k.server.auth));
          },
          children: /* @__PURE__ */ e(V, { content: "delete" })
        }
      ),
      /* @__PURE__ */ e(
        I,
        {
          className: "max-sm:w-full sm:w-1/4 capitalize",
          style: {
            ...n("error")
          },
          onClick: async () => {
            if (!k.server)
              return;
            const { response: E } = await ie({
              title: "Logout",
              message: "Are you sure you want to logout?",
              buttons: ["No", "Yes"],
              defaultId: 1
            });
            E ? await et(k.server.auth) : j("Ignore Logout", "error");
          },
          children: /* @__PURE__ */ e(V, { content: "logout" })
        }
      )
    ] })
  ] });
}, Js = () => {
  const n = Me();
  return /* @__PURE__ */ e("div", { className: "relative w-full h-full overflow-hidden", children: /* @__PURE__ */ e(
    Cn,
    {
      render: async () => (await An(1e3), /* @__PURE__ */ r(O, { children: [
        n && /* @__PURE__ */ e(Zs, {}),
        !n && /* @__PURE__ */ e(qs, {})
      ] })),
      loading: /* @__PURE__ */ e(ne, { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2" })
    }
  ) });
}, _s = () => {
  const n = pe.getTemp("profile-view");
  return /* @__PURE__ */ e(J, { hidden: !n, children: /* @__PURE__ */ r(ce, { className: "w-[80vw] h-[80vh]", children: [
    /* @__PURE__ */ r("div", { className: "flex justify-between items-center p-3", children: [
      /* @__PURE__ */ e("h1", { className: "text-3xl", children: /* @__PURE__ */ e(V, { content: "Your Profile" }) }),
      /* @__PURE__ */ e(
        B,
        {
          icon: $,
          onClick: () => {
            pe.setTemp("profile-view", !1);
          }
        }
      )
    ] }),
    /* @__PURE__ */ e(C, {}),
    /* @__PURE__ */ e(R, { children: /* @__PURE__ */ e(Js, {}) })
  ] }) });
}, Qs = [
  {
    title: "Product Posted",
    type: "info",
    desc: "Ahmed Post A New Product"
  },
  {
    title: "You Post A Product",
    type: "success",
    desc: "Your Product Is Now Live"
  },
  {
    title: "Product Deleted",
    type: "error",
    desc: "Your Product Is Deleted"
  },
  {
    title: "Product Updated",
    type: "warning",
    desc: "Your Product Is Updated"
  },
  {
    title: "Product Posted",
    type: "info",
    desc: "Ahmed Post A New Product"
  }
];
function uo() {
  const n = yt(), t = x(null), o = x(void 0), i = x(null), s = x(void 0), a = x(void 0), l = x(void 0), m = x(null), c = x(null), p = x(null), g = x(void 0), h = x(3), b = x(!1), u = T.getAll(), v = N();
  return /* @__PURE__ */ r(O, { children: [
    /* @__PURE__ */ e(vs, { children: /* @__PURE__ */ r("h1", { className: "w-full text-center capitalize", children: [
      "click in the link to see your account ",
      n && "(" + n.name + ")",
      /* @__PURE__ */ r(
        we,
        {
          onClick: (d) => {
            d.preventDefault(), We();
          },
          children: [
            /* @__PURE__ */ e(Te, { icon: rs, iconClassName: "mr-1 ml-2" }),
            "here"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ r(Ws, { children: [
      /* @__PURE__ */ e(Fs, { children: "Somthing in the primary Side" }),
      /* @__PURE__ */ e(R, { children: [
        {
          label: "Buttons",
          elements: [
            {
              jsxElement: /* @__PURE__ */ e(
                kn,
                {
                  onClick: () => {
                    j("You Clic Rate Now 🙃", "info");
                  }
                }
              ),
              label: "New Outher Button"
            },
            {
              jsxElement: /* @__PURE__ */ e(Sn, { children: "Large Button" }),
              label: "Large Button"
            },
            {
              jsxElement: /* @__PURE__ */ e(I, { children: "Ok" }),
              label: "Button",
              definition: ""
            },
            {
              jsxElement: /* @__PURE__ */ e(B, { icon: qe }),
              label: "Circle Tip"
            },
            {
              jsxElement: /* @__PURE__ */ e(S, { icon: qe }),
              label: "Tip"
            },
            {
              jsxElement: /* @__PURE__ */ e(
                In,
                {
                  className: "text-4xl",
                  isActive: b.get,
                  onClick: () => {
                    b.set(!b.get);
                  },
                  icon: is
                }
              ),
              label: "Tab"
            },
            {
              jsxElement: /* @__PURE__ */ e(Fn, {}),
              label: "Dark Light Icon",
              definition: "Recommended To Use In The Header And One Time In The App"
            }
          ]
        },
        {
          label: "Inputs",
          elements: [
            {
              jsxElement: /* @__PURE__ */ e(Y, { className: "h-[200px]", multiLines: !0, inputName: "exmple", propositions: ["Dog", "Cat", "Link", "Simple", "Word", "Hi"], placeholder: "Input Exmple" }),
              label: "Feild"
            }
          ]
        },
        {
          label: "Fields",
          elements: [
            {
              jsxElement: /* @__PURE__ */ e(Nt, { state: t, id: "boolean-field" }),
              label: "Boolean Field"
            },
            {
              jsxElement: /* @__PURE__ */ e(Oe, { state: o, id: "string-field" }),
              label: "String Field"
            },
            {
              jsxElement: /* @__PURE__ */ e(Ft, { state: g, id: "password-field" }),
              label: "Password Field"
            },
            {
              jsxElement: /* @__PURE__ */ e(kt, { state: h, id: "number-field" }),
              label: "Number Field"
            },
            {
              jsxElement: /* @__PURE__ */ e(
                St,
                {
                  config: {
                    properties: ["multiSelections"]
                  },
                  state: i,
                  id: "file-field"
                }
              ),
              label: "File Field"
            },
            {
              jsxElement: /* @__PURE__ */ e(
                It,
                {
                  config: {
                    list: ["Dog", "Cat"]
                  },
                  state: s,
                  id: "filter-field"
                }
              ),
              label: "Filter Field"
            },
            {
              jsxElement: /* @__PURE__ */ e(
                En,
                {
                  config: {
                    match: "...."
                  },
                  state: l,
                  id: "pin-field"
                }
              ),
              label: "Pin Field"
            },
            {
              jsxElement: /* @__PURE__ */ e(jt, { id: "recorder-field", state: p }),
              label: "Recorder Field"
            },
            {
              jsxElement: /* @__PURE__ */ e(Ct, { state: a, id: "array-field" }),
              label: "Array Field"
            },
            {
              jsxElement: /* @__PURE__ */ e(Et, { state: m, id: "date-field" }),
              label: "Date Field"
            },
            {
              jsxElement: /* @__PURE__ */ e(
                Lt,
                {
                  state: c,
                  config: {
                    rounded: !0
                  },
                  id: "image-field"
                }
              ),
              label: "Image Field"
            }
          ]
        },
        {
          label: "UI",
          elements: [
            {
              jsxElement: /* @__PURE__ */ e(jn, { length: 10, starts: 2 }),
              label: "Starts"
            },
            {
              jsxElement: /* @__PURE__ */ e(O, {}),
              label: ""
            },
            {
              jsxElement: /* @__PURE__ */ e(ce, { className: "w-fit", children: /* @__PURE__ */ e("p", { className: "p-2", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, tempora. Quod, debitis aut eveniet illo nemo adipisci atque veniam eum distinctio rerum dolore facere magnam libero dolor ratione omnis explicabo." }) }),
              label: "Card"
            },
            {
              jsxElement: /* @__PURE__ */ e(C, {}),
              label: "Line"
            }
          ]
        },
        {
          label: "Layouts",
          elements: [
            {
              jsxElement: /* @__PURE__ */ e(
                I,
                {
                  onClick: () => {
                    const d = Un(Qs).value;
                    d && on(d);
                  },
                  children: "Show Notification"
                }
              ),
              label: "Notification"
            },
            {
              jsxElement: /* @__PURE__ */ e(
                I,
                {
                  onClick: async () => {
                    await ie({
                      message: "This is a dialog",
                      title: "Dialog",
                      type: "info",
                      buttons: ["Ok"]
                    });
                  },
                  children: "Show Dialog"
                }
              ),
              label: "Dialog"
            },
            {
              jsxElement: /* @__PURE__ */ e(
                I,
                {
                  onClick: () => {
                    We();
                  },
                  children: "Show Profile"
                }
              ),
              label: "Show Profile"
            },
            {
              jsxElement: /* @__PURE__ */ r("div", { className: "flex flex-col justify-between h-full", children: [
                /* @__PURE__ */ e(
                  "select",
                  {
                    style: {
                      ...v("gray.opacity")
                    },
                    className: "mb-3 p-2",
                    name: "all-settings-selection",
                    children: u.map(({ name: d, settingId: w }) => /* @__PURE__ */ e(
                      "option",
                      {
                        style: {
                          ...v({
                            borderColor: "borders",
                            backgroundColor: "primary.background"
                          })
                        },
                        value: w,
                        children: d || w
                      },
                      w
                    ))
                  }
                ),
                /* @__PURE__ */ e(C, {}),
                /* @__PURE__ */ e(
                  I,
                  {
                    onClick: () => {
                      var w;
                      const d = (w = document.querySelector("select[name=all-settings-selection]")) == null ? void 0 : w.value;
                      d && ee(d);
                    },
                    children: "Show Current Setting"
                  }
                )
              ] }),
              label: "Update Setting"
            },
            {
              jsxElement: /* @__PURE__ */ e(
                I,
                {
                  onClick: () => {
                    j("This is a toast", "info");
                  },
                  children: "Show Toast"
                }
              ),
              label: "Toast"
            },
            {
              jsxElement: /* @__PURE__ */ e(
                I,
                {
                  onClick: async () => {
                    xt("take");
                  },
                  children: "Show Camera"
                }
              ),
              label: "Show Camera"
            },
            {
              jsxElement: /* @__PURE__ */ e(
                I,
                {
                  onClick: ({ clientX: d, clientY: w }) => {
                    an({
                      x: d,
                      y: w,
                      menu: Vn(15).map((M, P) => ({
                        label: `Item ${P}`,
                        click() {
                          j(`Menu Item ${P} Clicked`, "info");
                        }
                      }))
                    });
                  },
                  children: "Show Menu"
                }
              ),
              label: "Show Menu"
            },
            {
              jsxElement: /* @__PURE__ */ e(I, { onClick: async () => {
              }, children: "Show A Pdf" }),
              label: "Pdf"
            },
            {
              jsxElement: /* @__PURE__ */ e(
                I,
                {
                  onClick: () => {
                    rn("visibility/keyboard.boolean", !0);
                  },
                  children: "Show Keyboard"
                }
              ),
              label: "Keyboard"
            }
          ]
        },
        {
          label: "Loading",
          elements: [
            {
              jsxElement: /* @__PURE__ */ e(ne, {}),
              label: "Circle Loading"
            },
            {
              jsxElement: /* @__PURE__ */ e("div", { className: "relative h-[20px]", children: /* @__PURE__ */ e(De, {}) }),
              label: "Line Loading"
            }
          ]
        }
      ].map(({ label: d, elements: w }, M) => /* @__PURE__ */ r(O, { children: [
        /* @__PURE__ */ e("div", { className: "p-3 max-md:w-full", children: /* @__PURE__ */ e("h1", { className: "font-bold text-4xl max-md:text-center", children: d }) }),
        /* @__PURE__ */ e(C, {}),
        /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-3 p-3 max-md:w-full", children: w.map(({ definition: P, jsxElement: E, label: q }, oe) => /* @__PURE__ */ r(ce, { className: "w-fit max-md:w-full min-w-[200px] max-w-[500px] h-fit min-h-[200px]", children: [
          /* @__PURE__ */ e("div", { className: "p-2", children: /* @__PURE__ */ e("h1", { className: "text-2xl", children: q }) }),
          /* @__PURE__ */ e(C, {}),
          /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-2 w-full h-full", children: E }),
          P && /* @__PURE__ */ r(O, { children: [
            /* @__PURE__ */ e(C, {}),
            /* @__PURE__ */ e(R, { className: "p-2", children: /* @__PURE__ */ e(ve, { value: P }) })
          ] })
        ] }, oe)) }),
        /* @__PURE__ */ e(C, {})
      ] }, M)) }),
      /* @__PURE__ */ e(Ts, { children: "Somthing in the secondry Side" })
    ] }),
    /* @__PURE__ */ e(_s, {}),
    /* @__PURE__ */ e(zs, {}),
    /* @__PURE__ */ e(Is, {}),
    /* @__PURE__ */ e($s, {}),
    /* @__PURE__ */ e(gs, {}),
    /* @__PURE__ */ e(Ms, {}),
    /* @__PURE__ */ e(ys, {}),
    /* @__PURE__ */ e(Ks, {}),
    /* @__PURE__ */ e(Ps, {}),
    /* @__PURE__ */ e(js, {}),
    /* @__PURE__ */ e(Ln, {}),
    /* @__PURE__ */ e(Mn, {})
  ] });
}
const re = {
  commandId: "keyboard.commandId",
  position: "keyboard.editingPosition"
}, it = "key.changeWhen", eo = f.memo(({ commandId: n }) => /* @__PURE__ */ e(
  Mt,
  {
    joinComponent: /* @__PURE__ */ e(G, { icon: Ce }),
    list: n.split(".").map((t, o) => /* @__PURE__ */ e("span", { className: "font-bold text-xl capitalize", children: me(t, "camel", "normal") }, o))
  }
), ge), to = ({ keyPanding: n }) => {
  const { when: t, value: o, keyId: i } = n, s = x(!1), a = x(""), l = N(), m = x(!1);
  return f.useEffect(() => {
    s.get && F(it);
  }, [s.get]), /* @__PURE__ */ r(
    "div",
    {
      onMouseEnter: () => m.set(!0),
      onMouseLeave: () => m.set(!1),
      className: y(`
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
        ...l(m.get && "gray.opacity")
      },
      children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "flex justify-end w-[150px]", children: /* @__PURE__ */ r(
          "div",
          {
            className: y(`
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
              /* @__PURE__ */ e(D, { title: "remove this keypanding", children: /* @__PURE__ */ e(
                S,
                {
                  onClick: () => {
                    X.remove([i]), F("edit-keyPanding");
                  },
                  icon: $
                }
              ) }),
              /* @__PURE__ */ e(D, { title: "copy when value", children: /* @__PURE__ */ e(
                S,
                {
                  icon: Ve,
                  onClick: async () => {
                    t && await navigator.clipboard.writeText(t);
                  }
                }
              ) }),
              /* @__PURE__ */ e(D, { title: "edit when", children: /* @__PURE__ */ e(
                S,
                {
                  onClick: () => {
                    s.set(!0), t && a.set(t);
                  },
                  icon: Pt
                }
              ) }),
              /* @__PURE__ */ e(D, { title: `change to ${n.repeation ? "unrepeated" : "repeated"} key pending`, children: /* @__PURE__ */ e(
                S,
                {
                  onClick: () => {
                    X.setOneFeild(i, "repeation", !n.repeation);
                  },
                  icon: n.repeation ? ls : Ce
                }
              ) }),
              /* @__PURE__ */ e(D, { title: n.type == "up" ? "switch to down press" : "switch to up press", children: /* @__PURE__ */ e(
                S,
                {
                  onClick: () => {
                    n.keyId && X.setOneFeild(n.keyId, "type", n.type == "up" ? "down" : "up");
                  },
                  icon: n.type == "up" ? cs : ds
                }
              ) })
            ]
          }
        ) }) }),
        /* @__PURE__ */ e("div", { className: "px-2", children: o && /* @__PURE__ */ e(be, { shortcut: o }) }),
        /* @__PURE__ */ r("div", { className: "text-xs col", children: [
          !s.get && (t || " - "),
          s.get && /* @__PURE__ */ e(
            Pn,
            {
              style: {
                backgroundColor: "transparent",
                borderColor: "0px"
              },
              value: a.get,
              onValueChange: a.set,
              id: it,
              onFocus: (c) => {
                c.currentTarget.select();
              },
              onKeyDown: (c) => {
                c.key.toLowerCase() == "enter" && c.currentTarget.blur();
              },
              onBlur: (c) => {
                X.setOneFeild(i, "when", c.currentTarget.value), s.set(!1);
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
function fo() {
  const n = Z(re.commandId), t = x(""), o = Ye.getAll(), i = Ye.getEntity(), s = f.useMemo(() => n && i[n] || null, [i, n]), a = X.getAll(), l = f.useMemo(() => a.filter(({ value: h }) => h), [a]), m = f.useMemo(() => s ? de.join(s, a, "commandId->command") : null, [s, a]), c = f.useMemo(() => o.map((h) => ({
    command: h,
    keys: de.join(h, a, "commandId->command")
  })), [l]), p = f.useMemo(() => c.filter(({ keys: h }) => h.some(({ value: b }) => b == t.get)), [c, t]), g = N();
  return f.useEffect(() => {
    t.set("");
  }, [s]), /* @__PURE__ */ e(
    J,
    {
      hidden: !s,
      onClick: (h) => {
        h.currentTarget == h.target && (z(re.commandId, null), z(re.position, null));
      },
      onLoadContent: () => {
        s && F("edit-keyPanding");
      },
      children: /* @__PURE__ */ r(
        "div",
        {
          style: {
            ...g("primary.background", {
              borderColor: "borders"
            })
          },
          className: y(
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
          onKeyDown: (h) => {
            if (h.currentTarget != h.target || !s)
              return;
            h.stopPropagation(), h.preventDefault(), h.key = h.key.toLowerCase();
            const b = [h.ctrlKey, h.altKey, h.shiftKey].filter(Boolean).length;
            if (!b && ["escape", "backspace"].includes(h.key)) {
              if (t.get) {
                t.set("");
                return;
              }
            } else if (!b && h.key == "enter" && t.get) {
              X.add([
                {
                  command: s.commandId,
                  value: t.get,
                  keyId: Ee()
                }
              ]), t.set("");
              return;
            }
            const u = Rn.fromEvent(h);
            t.set(u);
          },
          children: [
            /* @__PURE__ */ r("div", { className: "relative flex justify-center items-center gap-3 p-2", children: [
              (s == null ? void 0 : s.commandId) && /* @__PURE__ */ e(eo, { commandId: s.commandId }),
              /* @__PURE__ */ e(
                S,
                {
                  className: y(`
              absolute
              right-2
              top-1/2
              transform
              -translate-y-1/2
            `),
                  onClick: async () => {
                    z(re.commandId, null), z(re.position, null), F("findConfigurations");
                  },
                  icon: $
                }
              )
            ] }),
            /* @__PURE__ */ e(C, {}),
            /* @__PURE__ */ r("div", { className: "flex flex-col flex-wrap items-center", children: [
              m == null ? void 0 : m.map((h, b) => /* @__PURE__ */ e(to, { keyPanding: h }, b)),
              !(m != null && m.length) && /* @__PURE__ */ e("div", { className: "py-2", children: "no combinition defined" })
            ] }),
            /* @__PURE__ */ e(C, {}),
            /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-2 text-4xl", children: /* @__PURE__ */ e(be, { shortcut: t.get }) }),
            !!p.length && /* @__PURE__ */ r("div", { children: [
              /* @__PURE__ */ e(C, {}),
              /* @__PURE__ */ e("div", { className: "flex justify-center p-2", children: /* @__PURE__ */ r(we, { children: [
                /* @__PURE__ */ e(V, { content: "existe" }),
                " (",
                p.length,
                ")"
              ] }) })
            ] })
          ]
        }
      )
    }
  );
}
export {
  gs as CameraView,
  ys as Commands,
  co as DevReadingHTML,
  bs as FindCommandInput,
  xs as FindSettingFeild,
  _s as FixedProfileView,
  vs as Header,
  ws as HeaderNotification,
  Cs as HeaderSettings,
  fe as KeyboardButton,
  ks as KeyboardShortcuts,
  Is as KeyboardView,
  Fs as LeftSide,
  mo as LeftSideView,
  qs as LoginContent,
  Gs as LoginPage,
  js as MenuList,
  Es as MenuRecord,
  Ls as NotifaysSlot,
  Ms as Notifications,
  Ps as PDFView,
  Xs as Payouts,
  Zs as ProfileContent,
  Js as ProfileView,
  Ts as RightSide,
  $s as SettingUpdateView,
  Bs as SettingUpdating,
  Us as Settings,
  Ds as SettingsList,
  Rs as SettingsSide,
  Os as SettingsTree,
  zs as SettingsView,
  Ys as SignupPage,
  uo as Test,
  Hs as ToastItem,
  Ks as Toasts,
  fo as UpdateKeyboardShortcut,
  As as UserSetting,
  Ws as Window,
  Ss as dataKeyboard,
  Bt as getTree,
  tt as headerVisibility
};
