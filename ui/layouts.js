import { j as e, a as i, L as S, C as re, E as W, F as G, S as V, c as ot, b as rt, d as zt, e as Ut, J as at, I as $t } from "./Loading-BjTpGRTY.mjs";
import { g as Se, d as A, u as w, i as it, j as Bt, k as lt, t as Ht, l as Kt, m as Z, a as I, n as Wt, s as M, o as ct, p as ae, e as Y, f as O, q as R, r as $, h as dt, v as ee, w as he, x as Yt, b as x, y as mt, z as _, c as J, A as ut, B as Gt, C as Xt, D as X, E as Zt, F as ue, G as qt, H as K, I as ie, J as Jt, K as pe, L as ft, M as _t, N as Me, O as ht, P as He, Q as Le, S as C, R as L, T as pt, U as Qt, V as Ke, W as We, X as en, Y as tn, Z as Te, _ as gt, $ as yt, a0 as bt, a1 as nn, a2 as sn, a3 as on, a4 as Ie, a5 as Ye, a6 as Ge, a7 as Xe, a8 as rn, a9 as an, aa as Ze, ab as ln, ac as se } from "./index-YGVQf1XJ.mjs";
import { w as H, h as cn, g as le, F as q, i as dn, T, a as j, J as mn, W as k, l as ye, K as be, C as B, H as ve, e as de, I as vt, z as un, L as xe, M as we, d as U, Y as fn, Z as xt, o as hn, f as pn, N as gn, v as yn, B as bn, b as vn, E as xn, O as wn, Q as wt, t as Nn, m as Cn, n as kn, x as Sn, k as In, G as Fn, R as Mn, q as Ln, A as je, P as Ee, r as En, c as Pn, D as Tn, X as jn } from "./ViewPage-B7nrCA56.mjs";
import m, { useState as On, useEffect as An } from "react";
import { h as ce, m as Q, i as me, s as F, t as y, j as Nt, k as Oe, l as Ae, e as z, n as De, g as Ct, D as Dn, o as Rn, p as Re, q as Vn, u as kt, v as zn, w as St, x as It, y as Un, z as Ft, A as ge, B as $n, C as Mt, E as Lt, F as Bn, G as Et, H as Hn, I as qe, J as Kn, K as Ne, L as Wn, M as Yn, N as Gn, O as Xn, P as Zn, Q as qn, R as Jn, T as _n, U as Qn, S as es, V as ts, W as ns, X as ss, Y as Pe, Z as os, _ as rs, $ as as, a0 as is, a1 as ls, a2 as cs, r as Pt } from "./index-CxQCU1i7.mjs";
function ds() {
  const n = Se.getTemp("type"), t = Se.getTemp("id");
  return A(
    "camera-take",
    () => {
      if (t && n == "take") {
        const o = document.querySelector("#camera-view  video");
        if (!o)
          return;
        const r = document.createElement("canvas");
        r.width = o.videoWidth, r.height = o.videoHeight;
        const s = r.getContext("2d");
        s == null || s.drawImage(o, 0, 0, r.width, r.height);
        const a = r.toDataURL("image/jpeg");
        Se.setTemp("result", a);
      }
    },
    [n, t]
  ), /* @__PURE__ */ e(H, { hidden: !t, children: /* @__PURE__ */ e(cn, {}) });
}
function ms() {
  const [n] = le("press ? for help");
  return /* @__PURE__ */ e(q, { "aria-multiline": !1, placeholder: `${n} 😊`, inputName: "findCommand" });
}
function us() {
  const n = w(), t = it(), o = Bt(), r = m.useMemo(() => {
    const f = lt.getState();
    return o.map((v) => ({
      command: v,
      keys: ce.join(v, t, "commandId->command")
    })).filter((v) => v.keys.filter((N) => {
      if (!N.when)
        return !0;
      try {
        return Ht(N.when)({
          state: f,
          focused: null
        });
      } catch {
        return !1;
      }
    }).length || !v.keys.length);
  }, [t, o]), s = Kt(), a = Z("commandId"), l = I("commands/enum/prefixes.object"), d = Z("commands.isLoading"), c = Wt.getAll(), h = m.useMemo(() => {
    const f = Object.entries(l || {}).map(([u, N]) => ({
      key: u,
      settingKey: `${N}.enum`,
      value: N
    })), v = {};
    return ce.fullJoinOne(f, s, "settingKey->settingId").forEach(({ data: u, joinTo: N }) => {
      var E, D;
      v[u.key] = {
        lines: (D = (E = N == null ? void 0 : N.config) == null ? void 0 : E.list) == null ? void 0 : D.map(({ value: P, content: te }) => ({
          id: P,
          content: te,
          checked: (N == null ? void 0 : N.value) == P
        })),
        // desc: "commands/enum/prefixes.object"
        onSubmit(P) {
          M.setOneFeild(u.settingKey, "value", P.id);
        }
      };
    }), Q(
      {
        commands: {
          lines: r.map(({ command: u, keys: N }) => ({
            content: u.label || u.commandId,
            keyPanding: N.map(({ value: E }) => E),
            id: u.commandId
          })),
          onSubmit(u) {
            ct(u.id);
          }
        },
        settings: {
          lines: s.map(({ name: u, settingId: N, desc: E }) => ({
            id: N,
            tools: [],
            content: u || N,
            sub: E
          })),
          onSubmit(u) {
            ae(u.id);
          }
        },
        actions: {
          lines: c.map(({ actionId: u, status: N }) => ({
            content: `${me(u.replaceAll(/[^a-z0-9A-Z]/gi, " ").replaceAll(/ +/gi, " "), void 0, "normal")} ${N == "loading" ? "[running...]" : ""}`,
            id: u
          })),
          onSubmit(u) {
            u.id && Y(u.id);
          }
        }
      },
      v
    );
  }, [r, s, l, c]), g = O.getOneFeild("findCommand", "value"), p = m.useMemo(() => !!(g != null && g.match(/^ *\?/)), [g]), b = m.useMemo(() => Q(
    p && {
      help: {
        lines: Object.entries(h).map(([f]) => ({
          id: f,
          content: f
        })),
        onSubmit(f) {
          R("commandId", f.id);
        }
      }
    },
    !p && h
  ), [h, g, p]);
  return m.useEffect(() => {
    a && p && R("commandId", "help");
  }, [a, g, p]), m.useEffect(() => {
    $.setOneFeild("cmds/list", "focused", 0);
  }, [g]), /* @__PURE__ */ e(
    H,
    {
      onLoadContent: () => {
        F("findCommand");
      },
      onPointerDown: (f) => {
        f.currentTarget == f.target && R("commandId", null);
      },
      hidden: !a,
      children: /* @__PURE__ */ i(
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
            /* @__PURE__ */ i(
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
                          background: dt("to right", "gray.opacity", "transparent", "gray.opacity")
                        })
                      },
                      children: a
                    }
                  ),
                  /* @__PURE__ */ e(S, {})
                ]
              }
            ),
            /* @__PURE__ */ i(
              "div",
              {
                className: "flex justify-between items-center gap-3 p-2",
                onClick: () => {
                  F("findCommand");
                },
                children: [
                  /* @__PURE__ */ e(ms, {}),
                  d && /* @__PURE__ */ e(re, {})
                ]
              }
            ),
            /* @__PURE__ */ e(S, {}),
            /* @__PURE__ */ e(dn, { data: b })
          ]
        }
      )
    }
  );
}
function fs() {
  const n = Z("dev.html.hoverPosition"), t = w();
  return /* @__PURE__ */ e(W, { children: n && /* @__PURE__ */ e(
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
function hs() {
  const n = ee.getOneFeild("settings", "focused"), t = he.getTemp("config"), o = O.getOneFeild("findConfigurations", "value");
  Yt("findConfigurations");
  const r = w(), s = Z("configurations.found.length"), a = m.useMemo(() => me(n || "no settings focused", "camel", "normal"), [n]), [l] = le(`search ${a} in list`), [d] = le(a), c = x(!1), h = O.getOneFeild("findConfigurations-local", "value");
  return mt(
    () => {
      typeof h == "string" && O.setOneFeild("findConfigurations", "value", h);
    },
    [h],
    500
  ), /* @__PURE__ */ e(
    "div",
    {
      className: "p-2 border-transparent border-b border-solid",
      onClick: () => {
        F("findConfigurations");
      },
      children: /* @__PURE__ */ i("div", { className: "relative w-full", children: [
        /* @__PURE__ */ e(
          q,
          {
            selectWhenFocusIn: !0,
            inputName: "findConfigurations-local",
            placeholder: l,
            propositions: (n == "user" ? ["id", "name", "changed"] : n == "keyboardShortcuts" ? ["key", "label", "commandId"] : []).map((g) => `@${g}`).filter((g) => !(o != null && o.includes(g))),
            tabIndex: t ? -1 : 1
          }
        ),
        /* @__PURE__ */ e("div", { className: "top-1/2 right-2 absolute flex items-center gap-2 -translate-y-1/2", children: !!o && /* @__PURE__ */ e(
          T,
          {
            title: "clear",
            onClick: () => {
              O.setOneFeild("findConfigurations-local", "value", "");
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
                  ...r("primary", {
                    color: "primary.content"
                  })
                },
                children: [
                  /* @__PURE__ */ i("span", { children: [
                    /* @__PURE__ */ e(j, { content: "found" }),
                    " ",
                    s,
                    " ",
                    /* @__PURE__ */ e(j, { content: d })
                  ] }),
                  c.get && /* @__PURE__ */ i("span", { children: [
                    " ",
                    "(",
                    /* @__PURE__ */ e(j, { content: "Delete" }),
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
const Je = "visibility/header.boolean";
function eo({ children: n }) {
  const t = I(Je), o = x(!1), r = _("Shift");
  m.useEffect(() => {
    const c = (h) => {
      const g = h.x * 100 / innerWidth;
      o.set(h.y <= 100 && Ae(25, g, 75));
    };
    return document.addEventListener("mousemove", c), () => document.removeEventListener("mousemove", c);
  }, []);
  const s = w(), a = Z("window.isFocused"), l = I("preferences/animation.boolean"), d = m.useMemo(() => s(a ? "primary.background" : "secondry.background", {
    borderColor: "borders",
    boxShadow: J([
      {
        blur: 10,
        x: 0,
        y: 3,
        size: 0,
        colorId: "shadow.color"
      }
    ])
  }), [s, a]);
  return /* @__PURE__ */ i("div", { className: "top-0 z-[10000000000000000000000000000000000000] absolute inset-x-0", children: [
    /* @__PURE__ */ e(
      "div",
      {
        onClick: () => {
          M.setOneFeild(Je, "value", !t);
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
          !o.get || !r ? "h-[0px]" : "border-b border-x h-[30px]"
        ),
        style: d,
        children: /* @__PURE__ */ e(G, { icon: t ? Nt : Oe })
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
          ...d
        },
        children: n
      }
    )
  ] });
}
function ps() {
  const n = ut("notification.header"), t = m.useMemo(() => (Array.isArray(n.get) ? n.get : []).slice(0, 3), [n.get]), o = w();
  return /* @__PURE__ */ e(
    "div",
    {
      className: "h-fit",
      style: {
        ...o({
          background: dt("right", "secondry", "primary"),
          borderColor: "borders",
          color: "primary.content"
        })
      },
      children: !!t.length && /* @__PURE__ */ e(
        mn,
        {
          data: t,
          slotId: "header-notifications",
          focusId: "header-notifications",
          component: ({ index: r, item: s }) => /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ i("div", { className: "flex justify-between items-center p-3", children: [
              /* @__PURE__ */ e("div", { children: s.message || "empty message" }),
              /* @__PURE__ */ e("div", { className: "flex tools", children: /* @__PURE__ */ e(
                k,
                {
                  onClick: () => {
                    n.set((a) => {
                      const l = a == null ? void 0 : a[r];
                      return l && (l.expanded = !l.expanded), a;
                    });
                  },
                  icon: z
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
                children: /* @__PURE__ */ e(V, { children: s.desc || "" })
              }
            )
          ] })
        }
      )
    }
  );
}
const gs = "visibility/configurations.boolean", ys = () => {
  const n = ee.getOneFeild("settings", "focused"), t = m.useMemo(() => me(String(n), "camel", "normal"), [n]), [o] = le(t);
  return /* @__PURE__ */ i("div", { className: "flex justify-between items-center p-2", children: [
    /* @__PURE__ */ e("h1", { className: "font-bold text-2xl capitalize", children: o }),
    /* @__PURE__ */ e("div", { className: "tools", children: /* @__PURE__ */ e(
      T,
      {
        position: {
          x: "left",
          y: "bottom"
        },
        title: "close view configurations",
        children: /* @__PURE__ */ e(
          k,
          {
            onClick: () => {
              M.setOneFeild(gs, "value", !1);
            },
            icon: z
          }
        )
      }
    ) })
  ] });
};
function bs() {
  const n = Gt(), t = $.getOneFeild("keyboardShortcuts", "focused");
  return A(
    "keyboard/update",
    () => {
      if (t == null)
        return;
      const o = n[t];
      o && ($.setOneFeild("keyboardShortcuts", "submited", t), R("keyboard.commandId", o.commandId), F("edit-keyPanding"));
    },
    [t, n]
  ), /* @__PURE__ */ e(
    ye,
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
      component: ({ data: o, index: r, status: s, handel: a, style: l }) => {
        const { commandId: d, label: c = "" } = o, h = Xt(d), g = m.createRef(), p = w(), b = _("Control"), f = x(!1), v = m.useMemo(() => h.filter(({ value: u }) => u).map(({ value: u }) => u), [h]);
        return /* @__PURE__ */ i(
          "div",
          {
            onMouseEnter: () => f.set(!0),
            onMouseLeave: () => f.set(!1),
            onClick: () => {
              a.focus(), a.submit();
            },
            ref: g,
            className: "px-3 text-xs group row",
            style: {
              ...p(
                r % 2 && "primary.background",
                f.get && "gray.opacity",
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
                  children: (f.get || s.isFocused || s.isSubmited) && /* @__PURE__ */ i("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ e(
                      k,
                      {
                        onClick: async () => {
                          const u = JSON.stringify(o);
                          await navigator.clipboard.writeText(u);
                        },
                        icon: De
                      }
                    ),
                    /* @__PURE__ */ e(
                      k,
                      {
                        icon: Ct,
                        onClick: (u) => {
                          R("keyboard.commandId", d), F("edit-keyPanding");
                        }
                      }
                    ),
                    !!h.length && /* @__PURE__ */ e(
                      k,
                      {
                        tabIndex: -1,
                        icon: z,
                        onClick: () => {
                          X.remove(h.map(({ keyId: u }) => u));
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
                    b && (O.setOneFeild("findConfigurations", "value", `@commandId: ${d}`), await new Dn().start(100), F("findConfigurations"));
                  },
                  children: c || d
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
  const r = w();
  return /* @__PURE__ */ e(
    "span",
    {
      className: y("min-w-[100px] h-[35px] gap-2 rounded-md inline-flex items-center justify-center border border-solid border-transparent"),
      style: {
        ...r(
          "secondry.background",
          {
            borderColor: "borders"
          },
          n && "primary",
          n && {
            color: "primary.content"
          },
          {
            boxShadow: J([
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
}, vs = [
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
], _e = 200, xs = () => {
  const n = w(), t = x(!1), o = x(!1), r = x(!1), s = _("Shift"), a = x(!1), l = _("Control"), d = _("AltGraph");
  m.useEffect(() => {
    o.set(l);
  }, [l]), m.useEffect(() => {
    t.set(s);
  }, [s]), m.useEffect(() => {
    r.set(d);
  }, [d]);
  const c = x([-100, -100]), h = x(!1);
  mt(
    () => {
      h.get && h.set(!1);
    },
    [h.get],
    _e
  ), Zt(["keyboard-view"]);
  const g = O.useOneFeild("keyboard-view", "value"), p = x([0, innerHeight - 300]), b = I("visibility/keyboard.boolean");
  return /* @__PURE__ */ i(
    "div",
    {
      hidden: !b,
      className: "z-[100000000000000000000000000000] fixed flex flex-col border border-transparent border-solid rounded-xl w-1/2 max-md:w-2/3 h-[300px] overflow-hidden",
      style: {
        ...n("primary.background", {
          borderColor: "borders",
          boxShadow: J([
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
          p.get && {
            left: `${p.get[0]}px`,
            top: `${p.get[1]}px`
          }
        )
      },
      children: [
        /* @__PURE__ */ i("div", { className: "flex justify-between items-center p-2", children: [
          /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
            k,
            {
              onPointerDown: () => {
                const f = (u) => {
                  p.set([u.pageX, u.pageY]);
                };
                document.addEventListener("mousemove", f);
                const v = () => {
                  document.removeEventListener("pointerup", v), document.removeEventListener("mousemove", f);
                };
                document.addEventListener("pointerup", v);
              },
              icon: Rn,
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
            T,
            {
              title: "close view",
              position: {
                x: "left"
              },
              children: /* @__PURE__ */ e(
                B,
                {
                  onClick: () => {
                    M.setOneFeild("visibility/keyboard.boolean", "value", !1);
                  },
                  icon: z
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ e(S, {}),
        /* @__PURE__ */ i("div", { className: "flex justify-center items-stretch h-full overflow-hidden", children: [
          /* @__PURE__ */ e("div", { className: "w-fit", children: /* @__PURE__ */ e("div", { className: "flex flex-col flex-1 justify-center items-center gap-1 p-2 h-full overflow-hidden", children: [
            {
              name: "shift",
              state: t
            },
            {
              name: "alt gr",
              state: r
            },
            {
              name: "control",
              state: o
            }
          ].map(({ state: f, name: v }, u) => /* @__PURE__ */ e(
            fe,
            {
              isActive: f.get,
              onPointerDown: () => {
                f.set((N) => !N);
              },
              children: v
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
              onClick: (f) => {
                const v = f.pageX, u = f.pageY, { left: N, top: E } = f.currentTarget.getBoundingClientRect();
                c.set([v - N, u - E]), h.set(!0);
              },
              children: [
                c.get && /* @__PURE__ */ e(
                  "span",
                  {
                    className: y(
                      `opacity-0 blur-xl transition-[opacity] duration-[${_e}] absolute pointer-events-none inline-block w-[100px] h-[100px] transform -translate-x-1/2 -translate-y-1/2 rounded-full`,
                      h.get && "opacity-100"
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
                /* @__PURE__ */ e("div", { className: "flex flex-col gap-3", children: vs.map((f, v) => /* @__PURE__ */ e("div", { className: "flex justify-center gap-3", children: f.map((u, N) => /* @__PURE__ */ i(
                  fe,
                  {
                    onPointerDown: () => {
                      const E = t.get ? u.shift : r.get ? u.alt : u.normal, D = document.activeElement;
                      D && (D instanceof HTMLInputElement || D instanceof HTMLTextAreaElement) && (D.value = D.value.concat(E));
                    },
                    className: "relative",
                    children: [
                      t.get ? u.shift : r.get ? u.alt : u.normal,
                      !t.get && /* @__PURE__ */ e(
                        "span",
                        {
                          className: "right-1 bottom-1 absolute text-xs",
                          style: {
                            ...n({ color: "gray.opacity.2" })
                          },
                          children: r.get ? u.normal : u.alt
                        }
                      )
                    ]
                  },
                  N
                )) }, v)) }),
                /* @__PURE__ */ e(
                  fe,
                  {
                    className: "w-full max-lg:w-full",
                    onPointerDown: () => {
                      g.set((f) => f + " "), !a.get && t.get && t.set(!1);
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
                g.set((f) => f == null ? void 0 : f.slice(0, -1));
              }
            },
            {
              name: "clean",
              onClick() {
                g.set("");
              }
            }
          ].map(({ onClick: f, name: v }, u) => /* @__PURE__ */ e(
            fe,
            {
              className: "w-full max-lg:w-full",
              onPointerDown: () => {
                f == null || f();
              },
              children: v
            },
            u
          )) }) })
        ] })
      ]
    }
  );
}, Qe = "visibility/leftSide.boolean", to = ({ children: n }) => {
  const t = I(Qe), o = w();
  return /* @__PURE__ */ e(
    ve,
    {
      position: "right",
      min: 200,
      temp: "leftSide.currentWidth",
      max: () => Math.max(window.innerWidth / 3, 350),
      handelResize: ({ size: r }) => {
        const s = Ae(150, r);
        s != t && M.setOneFeild(Qe, "value", s);
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
}, no = () => {
  const n = w();
  return /* @__PURE__ */ i("div", { className: "w-full", children: [
    /* @__PURE__ */ e("div", { className: "p-2", children: /* @__PURE__ */ e(q, { placeholder: "Search Component Type", inputName: "search-component-type" }) }),
    /* @__PURE__ */ e(S, {}),
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
    ].map(({ content: t, value: o }, r) => /* @__PURE__ */ i(
      de,
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
          /* @__PURE__ */ e(S, {}),
          /* @__PURE__ */ e("p", { className: "p-1 w-full text-center", children: t })
        ]
      },
      r
    )) })
  ] });
}, ws = ({ item: n, status: t, handelFocus: o, handelSubmit: r }) => {
  if (n.type == "separator")
    return /* @__PURE__ */ e("div", { className: "my-1", children: /* @__PURE__ */ e(S, {}) });
  const s = w(), a = m.createRef();
  return /* @__PURE__ */ e("div", { className: "px-1", children: /* @__PURE__ */ i(
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
        $.setOneFeild("menu-list", "focused", null);
      },
      onClick: r(),
      className: "cursor-pointer flex items-center rounded-md px-4 py-1 w-full",
      children: [
        /* @__PURE__ */ e("div", { className: "w-[30px]", children: n.checked && /* @__PURE__ */ e(vt, { icon: Re }) }),
        /* @__PURE__ */ i("div", { className: "flex justify-between items-center gap-1 w-full", children: [
          n.label && /* @__PURE__ */ e("span", { children: n.label }),
          n.accelerator && /* @__PURE__ */ e(be, { shortcut: n.accelerator })
        ] }),
        /* @__PURE__ */ e("div", { className: "w-[30px]" })
      ]
    }
  ) });
}, Ns = () => {
  const n = w(), t = ue.getTemp("list"), o = ue.getTemp("position"), r = ue.getTemp("id"), s = m.createRef(), a = $.getOneFeild("menu-list", "submited");
  m.useEffect(() => {
    r && typeof a == "number" && (ue.setTemp("result", a), $.setOneFeild("menu-list", "submited", null));
  }, [a, r]);
  const l = qt.getOne("menu-list");
  return /* @__PURE__ */ e(H, { hidden: !r, children: /* @__PURE__ */ e(
    un,
    {
      positionId: "menu-list",
      ref: s,
      className: "absolute py-1 border border-transparent border-solid rounded-md w-[350px] max-md:w-[150px]",
      style: {
        ...n("secondry.background", {
          borderColor: "borders",
          boxShadow: J([
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
      children: /* @__PURE__ */ e(xe, { skipFn: ({ enabled: d = !0, type: c }) => c == "separator" || !d, slotId: "menu-list", component: ws, data: t || [] })
    }
  ) });
}, Cs = () => {
  const n = K.getAll();
  return /* @__PURE__ */ e(
    xe,
    {
      data: n,
      slotId: "notification",
      component: ({ item: t, index: o, id: r, handelFocus: s, handelSelect: a, handelSubmit: l, status: d }) => {
        const c = x(!1);
        function h(b, f, v, u) {
          return t.type == "warning" ? f : t.type == "error" ? v : t.type == "success" ? u : b;
        }
        const g = w(), p = I("preferences/animation.boolean");
        return /* @__PURE__ */ i(
          "div",
          {
            id: r,
            onClick: l(),
            onPointerDown: s(a()),
            onDoubleClick: () => {
              K.setOneFeild(t.id, "showDesc", !t.showDesc);
            },
            style: {
              ...g(
                "secondry.background",
                o % 2 && "primary.background",
                c.get && "gray.opacity",
                d.isFocused && {
                  borderColor: "secondry"
                },
                d.isSubmited && {
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
                border-2
                border-solid
                border-transparent
              `
            ),
            onMouseEnter: () => c.set(!0),
            onMouseLeave: () => c.set(!1),
            children: [
              /* @__PURE__ */ i("div", { className: y("relative p-3 flex justify-between items-center"), children: [
                /* @__PURE__ */ i("div", { className: "truncate text-xl flex items-center gap-2", children: [
                  /* @__PURE__ */ e(
                    G,
                    {
                      icon: h(It, St, zn, kt),
                      style: {
                        ...g({
                          color: h("notifay.info", "notifay.warning", "notifay.error", "notifay.success")
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
                      ...g(h("notifay.info", "notifay.warning", "notifay.error", "notifay.success"))
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
                        k,
                        {
                          onClick: () => {
                            K.setOneFeild(t.id, "showDesc", !t.showDesc);
                          },
                          icon: t.showDesc ? Nt : Oe
                        }
                      ),
                      t.removable && /* @__PURE__ */ e(
                        k,
                        {
                          onClick: () => {
                            K.remove([t.id]);
                          },
                          icon: Vn
                        }
                      )
                    ]
                  }
                )
              ] }),
              t.desc && /* @__PURE__ */ e("div", { className: y("h-[0px]", p && "transition-[height] duration-700", t.showDesc && "h-[170px]"), children: /* @__PURE__ */ e(V, { className: "p-6", children: /* @__PURE__ */ e(we, { value: t.desc }) }) }),
              Array.isArray(t.buttons) && /* @__PURE__ */ e("div", { className: "flex justify-end p-5 overflow-x-auto", children: t.buttons.map(({ command: b, label: f }, v) => /* @__PURE__ */ e(
                U,
                {
                  className: "px-2 py-1 rounded-sm",
                  onClick: async () => {
                    typeof b == "object" ? Y(b.action, b.arg) : ct(b);
                  },
                  children: f
                },
                v
              )) }),
              t.status == "loading" && /* @__PURE__ */ e(ot, {})
            ]
          }
        );
      }
    }
  );
}, Fe = "visibility/notifays.boolean", et = "visibility/notifays/nots.boolean";
function ks() {
  const n = I(Fe), t = I(et), o = K.getIds(), r = w(), s = $.getOneFeild("notification", "focused"), a = K.getAll(), l = m.useMemo(() => typeof s != "number" ? null : a[s] || null, [a, s]);
  A(
    "toggleExpandNotifay",
    () => {
      l && K.setOneFeild(l.id, "showDesc", !l.showDesc);
    },
    [l]
  ), A(
    "notification.deleteFocus",
    () => {
      l && K.remove([l.id]);
    },
    [l]
  );
  const d = I("preferences/animation.boolean"), c = I("notification/clearAllConfirmation.boolean");
  return /* @__PURE__ */ i(
    "div",
    {
      onClick: () => {
        n || M.setOneFeild(Fe, "value", !0);
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
        ...r({
          backgroundColor: "secondry.background",
          borderColor: "borders",
          boxShadow: J([
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
              M.setOneFeild(et, "value", !t);
            },
            children: [
              /* @__PURE__ */ i("h3", { className: "font-bold text-lg uppercase notifay-full-title", children: [
                /* @__PURE__ */ e(
                  "span",
                  {
                    style: {
                      ...r(
                        {
                          color: "gray.opacity.2"
                        },
                        o.length && {
                          color: "primary"
                        }
                      )
                    },
                    className: "mr-2",
                    children: !t && `(${o.length})`
                  }
                ),
                /* @__PURE__ */ e(j, { content: "notifications" })
              ] }),
              /* @__PURE__ */ i("div", { className: "flex gap-3 text-xl", children: [
                !!o.length && /* @__PURE__ */ e(
                  k,
                  {
                    onClick: async () => {
                      let h = 1;
                      if (c) {
                        const g = await ie({
                          message: "Do You Want To Clear All Notifications",
                          checkboxLabel: "Don't Ask Me Again",
                          buttons: ["No", "Yes"]
                        });
                        g.checkboxChecked && Jt("notification/clearAllConfirmation.boolean", !1), h = g.response;
                      }
                      h && K.remove(a.filter(({ removable: g = !0 }) => g).map(({ id: g }) => g));
                    },
                    icon: Un
                  }
                ),
                /* @__PURE__ */ e(
                  k,
                  {
                    onClick: () => {
                      M.setOneFeild(Fe, "value", !1);
                    },
                    icon: Ft
                  }
                )
              ] })
            ]
          }
        ),
        !!o.length && t && /* @__PURE__ */ e(S, {}),
        /* @__PURE__ */ e(
          rt,
          {
            focusId: "notifications",
            ignoreOutline: !!l,
            className: y("flex flex-col overflow-hidden max-h-[80vh] rounded-ee-xl rounded-es-xl", d && "duration-300 transition-[max-height]", !t && "max-h-[0vh]"),
            children: /* @__PURE__ */ e(V, { children: /* @__PURE__ */ e(Cs, {}) })
          }
        )
      ]
    }
  );
}
const Ss = () => {
  const n = pe.getTemp("pdf");
  return /* @__PURE__ */ e(H, { hidden: !n, children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(ve, { className: "h-[70vh]", position: "right", temp: "pdf", min: 400, max: () => innerWidth - 30, children: /* @__PURE__ */ e(
    zt,
    {
      className: "h-full overflow-hidden",
      list: [
        /* @__PURE__ */ e(
          Ut,
          {
            title: "PDF..",
            rightSide: /* @__PURE__ */ e("div", { className: "flex tools", children: /* @__PURE__ */ e(T, { title: "close view", children: /* @__PURE__ */ e(
              B,
              {
                icon: z,
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
}, tt = "visibility/rightSide.boolean", so = ({ children: n }) => {
  const t = I(tt), o = w();
  return /* @__PURE__ */ e(
    ve,
    {
      min: 200,
      temp: "rightSide.currentWidth",
      max: () => Math.max(window.innerWidth / 3, 350),
      handelResize: ({ size: r }) => {
        const s = Ae(150, r);
        s != t && M.setOneFeild(tt, "value", s);
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
function Is() {
  const n = ft();
  return /* @__PURE__ */ e(
    ye,
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
      component: ({ data: t, index: o, style: r, status: s, handel: a, id: l }) => {
        const d = _("Control"), c = x(!1), h = m.useMemo(() => !t.settingId.match(/\.password$/gi) && !ge(t.def, t.value), [t]), g = w();
        A(
          "showSubmitSetting",
          () => {
            s.isSubmited && ae(t.settingId);
          },
          [s]
        );
        const p = m.useMemo(() => s.isFocused || s.isSubmited || c.get, [s, c.get]);
        return /* @__PURE__ */ i(
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
              ...r
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
                      className: y("text-xl capitalize truncate", d && "hover:underline cursor-pointer"),
                      onClick: () => {
                        d && t.name != null && O.setOneFeild("findConfigurations", "value", t.name);
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
              /* @__PURE__ */ i(
                "span",
                {
                  className: y("inline-flex gap-1 items-center text-xs italic font-extralight truncate"),
                  onClick: () => {
                    d && O.setOneFeild("findConfigurations", "value", `@id ${t.settingId}`);
                  },
                  children: [
                    /* @__PURE__ */ i(
                      "span",
                      {
                        className: y(d && "hover:underline cursor-pointer"),
                        style: g(
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
                    /* @__PURE__ */ i("div", { className: y("flex opacity-0 transition-[opacity] duration-500", p && "opacity-100"), children: [
                      h && /* @__PURE__ */ e(T, { title: "reset", children: /* @__PURE__ */ e(
                        k,
                        {
                          icon: $n,
                          onClick: () => {
                            M.setOneFeild(t.settingId, "value", t.def);
                          }
                        }
                      ) }),
                      /* @__PURE__ */ e(T, { title: "configurate", children: /* @__PURE__ */ e(
                        k,
                        {
                          onClick: () => {
                            ae(t.settingId);
                          },
                          icon: Mt
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
function Tt(n = [], t = ".") {
  const o = n.filter(Boolean).map((s) => s.split(t)).filter((s) => s.length);
  return Array.from(new Set(o.map(([s]) => s))).map((s) => ({
    data: s,
    innerTree: Tt(
      o.filter(([a]) => a == s).map(([, ...a]) => a.join(t)),
      t
    )
  }));
}
function Fs() {
  const n = ft(), t = m.useMemo(() => n.map(({ settingId: o }) => o), [n]);
  return /* @__PURE__ */ e("div", { id: "settings.tree.view", className: "flex flex-col h-full overflow-hidden", tabIndex: 1, children: /* @__PURE__ */ e(V, { children: /* @__PURE__ */ e(
    fn,
    {
      treeId: "setting-tree-layout",
      tree: Tt(t, "/"),
      component: ({ data: o, status: r, parent: s, isFins: a, innerTree: l, level: d, handels: c }) => {
        const h = w(), [g, p] = o.split("."), b = x(!1), f = m.useMemo(() => {
          const v = [];
          let u = s;
          for (; u; )
            v.push(u.data), u = u.parent;
          return v.reverse().join("/");
        }, [a]);
        return /* @__PURE__ */ i(
          "div",
          {
            "aria-level": d,
            onMouseEnter: () => b.set(!0),
            onMouseLeave: () => b.set(!1),
            className: "flex items-center px-1 border border-transparent border-solid h-[30px]",
            onClick: async () => {
              c.focus(!0);
            },
            style: {
              ...h(
                b.get && "gray.opacity",
                r.isFocused && {
                  borderColor: "primary"
                }
              ),
              paddingLeft: `${d * 50}px`
            },
            children: [
              !p && /* @__PURE__ */ e("div", { className: "mx-1 tools", children: /* @__PURE__ */ e(
                k,
                {
                  iconClassName: "text-xs",
                  tabIndex: -1,
                  icon: r.isExpanded ? Oe : Ft,
                  style: {
                    outlineColor: "transparent"
                  },
                  onClick: () => {
                    c.expand(!1, !r.isExpanded);
                  }
                }
              ) }),
              /* @__PURE__ */ i("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ i("div", { children: [
                  a && g,
                  !a && /* @__PURE__ */ e("b", { children: g }),
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
                p && /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: "px-2 py-1 rounded-md",
                      style: {
                        ...h("gray.opacity")
                      },
                      children: p
                    }
                  ),
                  /* @__PURE__ */ e(
                    k,
                    {
                      onClick: () => {
                        ae(f);
                      },
                      icon: Mt,
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
function Ms() {
  const n = _t(), t = m.useMemo(() => {
    const r = n.filter(({ settingId: s }) => !s.endsWith("password"));
    return Lt(
      r.length && {
        async click() {
          const { response: s } = await ie({
            message: "Are You Sure About Reset All Configurations",
            defaultId: 1,
            title: "Reset All Config",
            buttons: ["No", "Yes"],
            type: "warning"
          });
          s && M.upsert(
            r.map((a) => {
              let l = { ...a };
              return l.def != null && (l.value = l.def), l;
            })
          );
        },
        icon: Hn,
        title: "reset all"
      },
      {
        click() {
          ee.setOneFeild("settings.viewType", "focused", "list");
        },
        title: "list",
        icon: Et
      },
      {
        click() {
          ee.setOneFeild("settings.viewType", "focused", "tree");
        },
        title: "tree",
        icon: Bn
      }
    );
  }, [n]), o = Me(t, "settings.layout.tools");
  return m.useEffect(() => {
    o && (o.click(), $.setOneFeild("settings.layout.tools", "submited", null));
  }, [o]), /* @__PURE__ */ i("div", { className: "relative flex flex-col w-full h-full overflow-hidden", children: [
    /* @__PURE__ */ i(rt, { focusId: "settings.layouts", className: "flex justify-between items-center p-2", children: [
      /* @__PURE__ */ e("div", {}),
      /* @__PURE__ */ e("div", { className: "flex gap-1 tools", children: /* @__PURE__ */ e(
        xe,
        {
          slotId: "settings.layout.tools",
          data: t,
          component: ({ item: { click: r, title: s, icon: a }, tabIndex: l, handelFocus: d, status: c }) => {
            const h = w();
            return /* @__PURE__ */ e(
              T,
              {
                title: s,
                position: {
                  x: "center",
                  y: "top"
                },
                children: /* @__PURE__ */ e(
                  k,
                  {
                    icon: a,
                    onPointerDown: d(),
                    style: {
                      ...h(
                        c.isFocused && {
                          outlineColor: "primary"
                        }
                      )
                    },
                    tabIndex: l,
                    onClick: r
                  }
                )
              }
            );
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ e(S, {}),
    /* @__PURE__ */ e(
      xt,
      {
        views: {
          list: Is,
          tree: Fs
        },
        viewId: "settings.viewType"
      }
    )
  ] });
}
function Ls() {
  const n = he.getTemp("config");
  return m.useEffect(() => {
    n || ae(null);
  }, [n]), /* @__PURE__ */ i("div", { className: "flex flex-col w-full h-full overflow-hidden", children: [
    /* @__PURE__ */ e(hs, {}),
    /* @__PURE__ */ e(S, {}),
    n && /* @__PURE__ */ e(
      xt,
      {
        viewId: "settings",
        views: {
          keyboardShortcuts: bs,
          user: Ms,
          icons: hn,
          colors: pn
        }
      }
    )
  ] });
}
function Es() {
  const n = ee.getOne("settings"), t = m.useMemo(() => Object.entries((n == null ? void 0 : n.tabs) || {}).map(([r, s]) => ({
    id: r,
    ...s,
    isFocused: (n == null ? void 0 : n.focused) == r
  })), [n]), o = w();
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
          component: ({ item: r }) => {
            const { id: s, news: a, isFocused: l, icon: d } = r, c = m.useMemo(() => `settings.${s}.show`, [s]), h = it(), g = m.useMemo(() => ce.join({ cmdId: c }, h, "cmdId->command").map(({ value: v }) => v), [c, h]), [p] = le(me(s, "camel", "normal")), b = x(!1), f = w();
            return /* @__PURE__ */ i(
              T,
              {
                onMouseEnter: () => b.set(!0),
                onMouseLeave: () => b.set(!1),
                draggable: !0,
                title: `press ${g.map((v) => "`" + v + "`").join(" or ")}`,
                onClick: () => {
                  !l && ee.setOneFeild("settings", "focused", r.id);
                },
                style: {
                  ...f((l || b.get) && "primary.background")
                },
                className: "relative truncate cursor-pointer",
                children: [
                  l && /* @__PURE__ */ e("span", { className: "left-0 absolute inset-y-0 w-[2px]", style: { ...f("primary") } }),
                  /* @__PURE__ */ i("div", { className: "flex items-center gap-2 p-2", children: [
                    (d == null ? void 0 : d.value) && /* @__PURE__ */ e(G, { icon: qe(d.type, d.value) }),
                    p,
                    a && /* @__PURE__ */ e(gn, { children: /* @__PURE__ */ e(G, { icon: qe(a.type, a.value) }) })
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
function Ps() {
  return /* @__PURE__ */ e(ve, { position: "right", min: () => innerWidth / 7, max: () => innerWidth / 3, className: "h-full", children: /* @__PURE__ */ e(Es, {}) });
}
const nt = "visibility/configurations.boolean";
function Ts() {
  const n = I(nt), t = w();
  return m.useEffect(() => {
    n && he.setTemp("config", !0);
  }, [n]), /* @__PURE__ */ e(
    yn,
    {
      hidden: !n,
      onLoadContent: () => {
        F("findConfigurations-local");
      },
      onClick: async (o) => {
        o.currentTarget == o.target && M.setOneFeild(nt, "value", !1);
      },
      onTransitionEnd: () => {
        typeof n == "boolean" && he.setTemp("config", n);
      },
      children: /* @__PURE__ */ i(
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
            /* @__PURE__ */ e(ys, {}),
            /* @__PURE__ */ e(S, {}),
            /* @__PURE__ */ i("div", { className: "flex w-[70vw] h-[70vh]", children: [
              /* @__PURE__ */ e(Ps, {}),
              /* @__PURE__ */ e(Ls, {})
            ] })
          ]
        }
      )
    }
  );
}
function js({ settingId: n }) {
  const t = M.getOne(n), o = m.useMemo(() => t == null ? void 0 : t.value, [t]), r = m.useMemo(() => t == null ? void 0 : t.config, [t]), s = x(t == null ? void 0 : t.value);
  m.useEffect(() => {
    M.setOneFeild(n, "value", s.get);
  }, [s.get]), m.useEffect(() => {
    s.set(o);
  }, [t]);
  const a = m.useMemo(() => `setting:${(t == null ? void 0 : t.settingId) || ""}`, [t]), l = m.useMemo(() => {
    var h;
    const c = (h = a.match(/\.[a-zA-Z0-9]+$/gi)) == null ? void 0 : h[0].slice(1);
    return c || null;
  }, [a]), d = w();
  return /* @__PURE__ */ e(
    "div",
    {
      className: y((t == null ? void 0 : t.readonly) && "cursor-not-allowed"),
      style: {
        ...d((t == null ? void 0 : t.readonly) && "primary.background")
      },
      children: /* @__PURE__ */ i("div", { className: y((t == null ? void 0 : t.readonly) && "pointer-events-none"), children: [
        l == "boolean" && /* @__PURE__ */ e(bn, { id: a, state: s, config: r }),
        l == "array" && /* @__PURE__ */ e(vn, { id: a, state: s, config: r }),
        l == "enum" && /* @__PURE__ */ e(xn, { id: a, state: s, config: r }),
        l == "object" && /* @__PURE__ */ e(wn, { id: a, state: s, config: r }),
        l == "string" && /* @__PURE__ */ e(wt, { id: a, state: s, config: r }),
        l == "number" && /* @__PURE__ */ e(Nn, { id: a, state: s, config: r }),
        l == "file" && /* @__PURE__ */ e(Cn, { id: a, state: s, config: r }),
        l == "filter" && /* @__PURE__ */ e(kn, { id: a, state: s, config: r }),
        l == "password" && /* @__PURE__ */ e(Sn, { id: a, state: s, config: r }),
        l == "date" && /* @__PURE__ */ e(In, { id: a, state: s, config: r }),
        l == "regexp" && /* @__PURE__ */ e(Fn, { id: a, state: s }),
        l == "audio" && /* @__PURE__ */ e(Mn, { id: a, state: s, config: r }),
        l == "image" && /* @__PURE__ */ e(Ln, { id: a, state: s, config: r })
      ] })
    }
  );
}
const Os = () => {
  const n = w(), t = ut("view.settings"), o = M.getOne(t.get || ""), r = m.useMemo(() => !o || o.settingId.match(/\.password$/gi) ? !1 : !ge(o.def, o.value), [o]), s = m.useMemo(() => {
    try {
      const a = Function(`return (state)=> \`${(o == null ? void 0 : o.desc) || "**no description defined**"}\` `)(), l = lt.getState();
      return a(l);
    } catch (a) {
      return Kn.err(a), " - ";
    }
  }, [o == null ? void 0 : o.desc]);
  return /* @__PURE__ */ e(
    H,
    {
      onLoadContent: () => {
        t.get && F(`setting:${t.get}`);
      },
      hidden: !t.get,
      children: /* @__PURE__ */ i(
        "div",
        {
          hidden: !t.get,
          className: y("rounded-md border-solid border border-transparent w-1/2 max-md:w-5/6"),
          style: n("secondry.background", {
            borderColor: "borders"
          }),
          children: [
            /* @__PURE__ */ i("div", { className: "flex justify-between items-center gap-1 p-3", children: [
              o && /* @__PURE__ */ i(W, { children: [
                /* @__PURE__ */ e("h1", { className: "text-2xl truncate", children: o.name }),
                /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-[1px] max-md:hidden text-xs", children: /* @__PURE__ */ e(
                  at,
                  {
                    list: o.settingId.split("/").filter(Boolean).map((a, l) => {
                      var h;
                      const d = (h = a.match(/\..+$/gi)) == null ? void 0 : h[0].slice(1);
                      let c = null;
                      switch (d) {
                        case "boolean": {
                          c = Re;
                          break;
                        }
                        case "password": {
                          c = _n;
                          break;
                        }
                        case "number": {
                          c = Jn;
                          break;
                        }
                        case "string": {
                          c = qn;
                          break;
                        }
                        case "file": {
                          c = Zn;
                          break;
                        }
                        case "enum": {
                          c = Et;
                          break;
                        }
                        case "object": {
                          c = Xn;
                          break;
                        }
                        case "array": {
                          c = Gn;
                          break;
                        }
                        case "audio":
                          c = Yn;
                      }
                      return /* @__PURE__ */ i(
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
                    joinComponent: /* @__PURE__ */ e(G, { icon: Ne })
                  }
                ) })
              ] }),
              /* @__PURE__ */ i("div", { className: "flex tools", children: [
                r && /* @__PURE__ */ e(
                  B,
                  {
                    icon: Wn,
                    onClick: async () => {
                      const { response: a } = await ie({
                        message: "are you sure about reset this setting",
                        buttons: ["No", "Yes"],
                        defaultId: 1
                      });
                      a && o && M.setOneFeild(o.settingId, "value", o.def);
                    }
                  }
                ),
                /* @__PURE__ */ e(
                  B,
                  {
                    onClick: () => {
                      t.set(null), F("findConfigurations");
                    },
                    icon: z
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e(S, {}),
            o && /* @__PURE__ */ i(W, { children: [
              /* @__PURE__ */ e(V, { className: "p-2 max-h-[150px]", children: /* @__PURE__ */ e(we, { value: s }) }),
              /* @__PURE__ */ e(S, {})
            ] }),
            t.get && /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ e(js, { settingId: t.get }) })
          ]
        }
      )
    }
  );
}, As = ({ item: n, index: t }) => {
  const o = x(!1), r = x(!1), s = x(!1), a = x(0), { message: l } = n, d = w(), c = I("preferences/toastTime.number"), h = I("preferences/animation.boolean"), g = m.useMemo(() => n.time || c || 5, [c, n.time]);
  m.useEffect(() => {
    if (s.get) {
      const b = setTimeout(() => {
        n.id && ht.remove([n.id]), s.set(!1);
      }, 300);
      return () => {
        clearTimeout(b);
      };
    }
  }, [s.get, n]), m.useEffect(() => {
    let b = 0;
    const f = setInterval(() => {
      a.set(++b), b >= g && (s.set(!0), clearInterval(f));
    }, 1e3);
    return () => {
      clearInterval(f);
    };
  }, [g]), m.useEffect(() => {
    if (r.get) {
      const b = setTimeout(() => {
        r.set(!1);
      }, 3e3);
      return () => {
        clearTimeout(b);
      };
    }
  }, [r.get]);
  function p(b, f, v, u) {
    return n.type == "warning" ? f : n.type == "error" ? v : n.type == "success" ? u : b;
  }
  return /* @__PURE__ */ i(
    "div",
    {
      className: y("flex z-[100000] items-center justify-between p-2 opacity-100 scale-100", s.get && "opacity-0 scale-0", h && "transition-[transform,opacity] duration-300"),
      onMouseEnter: () => o.set(!0),
      onMouseLeave: () => o.set(!1),
      style: {
        ...d(t % 2 && "gray.opacity")
      },
      children: [
        /* @__PURE__ */ i("div", { className: "inline-flex items-center gap-1", children: [
          /* @__PURE__ */ e(
            G,
            {
              icon: p(It, St, Qn, kt),
              style: {
                ...d({
                  color: p("notifay.info", "notifay.warning", "notifay.error", "notifay.success")
                })
              }
            }
          ),
          /* @__PURE__ */ e(we, { value: l.toString() })
        ] }),
        /* @__PURE__ */ i("div", { className: "flex items-center", children: [
          /* @__PURE__ */ e(
            "span",
            {
              className: y("relative rounded-full w-[30px] h-[30px] mx-2 inline-flex items-center justify-center"),
              style: {
                ...d("gray.opacity")
              },
              children: g - a.get
            }
          ),
          /* @__PURE__ */ i("div", { className: y("tools w-[0px] flex gap-1 items-center overflow-hidden", o.get && "w-[50px]", h && "transition-[width]"), children: [
            /* @__PURE__ */ e(
              k,
              {
                onClick: async () => {
                  r.set(!0), await navigator.clipboard.writeText(l.toString());
                },
                icon: r.get ? Re : De
              }
            ),
            /* @__PURE__ */ e(
              k,
              {
                onClick: () => {
                  s.set(!0);
                },
                icon: z
              }
            )
          ] })
        ] })
      ]
    }
  );
}, Ds = () => {
  const n = ht.getAll(), t = w(), o = I("preferences/animation.boolean"), r = m.useMemo(() => As, []), s = I("toast/position.enum");
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
          boxShadow: J([
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
      children: /* @__PURE__ */ e(V, { className: "max-h-[400px]", children: n == null ? void 0 : n.map((a, l) => /* @__PURE__ */ e(r, { index: l, item: a }, a.id)) })
    }
  );
}, oe = {
  commandId: "keyboard.commandId",
  position: "keyboard.editingPosition"
}, st = "key.changeWhen", Rs = m.memo(({ commandId: n }) => /* @__PURE__ */ e(
  at,
  {
    joinComponent: /* @__PURE__ */ e(G, { icon: Ne }),
    list: n.split(".").map((t, o) => /* @__PURE__ */ e("span", { className: "font-bold text-xl capitalize", children: me(t, "camel", "normal") }, o))
  }
), ge), Vs = ({ keyPanding: n }) => {
  const { when: t, value: o, keyId: r } = n, s = x(!1), a = x(""), l = w(), d = x(!1);
  return m.useEffect(() => {
    s.get && F(st);
  }, [s.get]), /* @__PURE__ */ i(
    "div",
    {
      onMouseEnter: () => d.set(!0),
      onMouseLeave: () => d.set(!1),
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
        ...l(d.get && "gray.opacity")
      },
      children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "flex justify-end w-[150px]", children: /* @__PURE__ */ i(
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
              /* @__PURE__ */ e(T, { title: "remove this keypanding", children: /* @__PURE__ */ e(
                k,
                {
                  onClick: () => {
                    X.remove([r]), F("edit-keyPanding");
                  },
                  icon: z
                }
              ) }),
              /* @__PURE__ */ e(T, { title: "copy when value", children: /* @__PURE__ */ e(
                k,
                {
                  icon: De,
                  onClick: async () => {
                    t && await navigator.clipboard.writeText(t);
                  }
                }
              ) }),
              /* @__PURE__ */ e(T, { title: "edit when", children: /* @__PURE__ */ e(
                k,
                {
                  onClick: () => {
                    s.set(!0), t && a.set(t);
                  },
                  icon: Ct
                }
              ) }),
              /* @__PURE__ */ e(T, { title: `change to ${n.repeation ? "unrepeated" : "repeated"} key pending`, children: /* @__PURE__ */ e(
                k,
                {
                  onClick: () => {
                    X.setOneFeild(r, "repeation", !n.repeation);
                  },
                  icon: n.repeation ? ts : Ne
                }
              ) }),
              /* @__PURE__ */ e(T, { title: n.type == "up" ? "switch to down press" : "switch to up press", children: /* @__PURE__ */ e(
                k,
                {
                  onClick: () => {
                    n.keyId && X.setOneFeild(n.keyId, "type", n.type == "up" ? "down" : "up");
                  },
                  icon: n.type == "up" ? ns : ss
                }
              ) })
            ]
          }
        ) }) }),
        /* @__PURE__ */ e("div", { className: "px-2", children: o && /* @__PURE__ */ e(be, { shortcut: o }) }),
        /* @__PURE__ */ i("div", { className: "text-xs col", children: [
          !s.get && (t || " - "),
          s.get && /* @__PURE__ */ e(
            $t,
            {
              style: {
                backgroundColor: "transparent",
                borderColor: "0px"
              },
              value: a.get,
              onValueChange: a.set,
              id: st,
              onFocus: (c) => {
                c.currentTarget.select();
              },
              onKeyDown: (c) => {
                c.key.toLowerCase() == "enter" && c.currentTarget.blur();
              },
              onBlur: (c) => {
                X.setOneFeild(r, "when", c.currentTarget.value), s.set(!1);
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
function zs() {
  const n = Z(oe.commandId), t = x(""), o = He.getAll(), r = He.getEntity(), s = m.useMemo(() => n && r[n] || null, [r, n]), a = X.getAll(), l = m.useMemo(() => a.filter(({ value: p }) => p), [a]), d = m.useMemo(() => s ? ce.join(s, a, "commandId->command") : null, [s, a]), c = m.useMemo(() => o.map((p) => ({
    command: p,
    keys: ce.join(p, a, "commandId->command")
  })), [l]), h = m.useMemo(() => c.filter(({ keys: p }) => p.some(({ value: b }) => b == t.get)), [c, t]), g = w();
  return m.useEffect(() => {
    t.set("");
  }, [s]), /* @__PURE__ */ e(
    H,
    {
      hidden: !s,
      onClick: (p) => {
        p.currentTarget == p.target && (R(oe.commandId, null), R(oe.position, null));
      },
      onLoadContent: () => {
        s && F("edit-keyPanding");
      },
      children: /* @__PURE__ */ i(
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
          onKeyDown: (p) => {
            if (p.currentTarget != p.target || !s)
              return;
            p.stopPropagation(), p.preventDefault(), p.key = p.key.toLowerCase();
            const b = [p.ctrlKey, p.altKey, p.shiftKey].filter(Boolean).length;
            if (!b && ["escape", "backspace"].includes(p.key)) {
              if (t.get) {
                t.set("");
                return;
              }
            } else if (!b && p.key == "enter" && t.get) {
              X.add([
                {
                  command: s.commandId,
                  value: t.get,
                  keyId: Le()
                }
              ]), t.set("");
              return;
            }
            const f = es.fromEvent(p);
            t.set(f);
          },
          children: [
            /* @__PURE__ */ i("div", { className: "relative flex justify-center items-center gap-3 p-2", children: [
              (s == null ? void 0 : s.commandId) && /* @__PURE__ */ e(Rs, { commandId: s.commandId }),
              /* @__PURE__ */ e(
                k,
                {
                  className: y(`
              absolute
              right-2
              top-1/2
              transform
              -translate-y-1/2
            `),
                  onClick: async () => {
                    R(oe.commandId, null), R(oe.position, null), F("findConfigurations");
                  },
                  icon: z
                }
              )
            ] }),
            /* @__PURE__ */ e(S, {}),
            /* @__PURE__ */ i("div", { className: "flex flex-col flex-wrap items-center", children: [
              d == null ? void 0 : d.map((p, b) => /* @__PURE__ */ e(Vs, { keyPanding: p }, b)),
              !(d != null && d.length) && /* @__PURE__ */ e("div", { className: "py-2", children: "no combinition defined" })
            ] }),
            /* @__PURE__ */ e(S, {}),
            /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-2 text-4xl", children: /* @__PURE__ */ e(be, { shortcut: t.get }) }),
            !!h.length && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(S, {}),
              /* @__PURE__ */ e("div", { className: "flex justify-center p-2", children: /* @__PURE__ */ i(je, { children: [
                /* @__PURE__ */ e(j, { content: "existe" }),
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
function oo({ children: n }) {
  const t = I("visibility/header.boolean"), o = I("preferences/animation.boolean");
  return /* @__PURE__ */ i("div", { className: y("absolute bottom-0 inset-x-0 w-full border-solid border-transparent border-b top-0 flex flex-col", t && "top-[51px]", o && "transition-[top] duration-200"), children: [
    /* @__PURE__ */ e(ps, {}),
    /* @__PURE__ */ e("div", { className: "flex items-stretch h-full overflow-hidden", children: n })
  ] });
}
const jt = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,} *$", Us = () => {
  const n = w(), t = O.getOneFeild("signupUseremail", "value"), o = x(""), r = x(""), s = A(
    "signup",
    async () => {
      var a;
      if (!((a = C.server) != null && a.auth)) {
        L("Error When Loading The Auth", "error");
        return;
      }
      if (!t) {
        L("Email is required", "error"), F("signupUseremail");
        return;
      }
      if (!pt(["signupUseremail"]).isValide) {
        L("Please fill the email correctly!", "error"), F("signupUseremail");
        return;
      }
      if (!o.get) {
        L("Password must be at least 6 characters", "error"), F("user-password");
        return;
      }
      if (o.get !== r.get) {
        L("Password and confirm password must be the same!", "error"), F("user-password-confirm");
        return;
      }
      await Qt(C.server.auth, t, o.get);
    },
    [t, o.get, r.get]
  );
  return /* @__PURE__ */ i(V, { className: "flex max-sm:flex-col items-center h-full", children: [
    /* @__PURE__ */ i("div", { className: "p-8 w-1/2 max-sm:w-full", children: [
      /* @__PURE__ */ i(
        "form",
        {
          onSubmit: async (a) => {
            a.preventDefault(), await Y("signup");
          },
          children: [
            /* @__PURE__ */ i("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "email" }),
              /* @__PURE__ */ e(
                q,
                {
                  controls: {
                    [jt]: {
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
              /* @__PURE__ */ e(Ee, { placeholder: "********", id: "user-password", state: o })
            ] }),
            /* @__PURE__ */ i("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "Confirm Password" }),
              /* @__PURE__ */ e(Ee, { placeholder: "********", id: "user-password-confirm", state: r })
            ] }),
            /* @__PURE__ */ e(U, { icon: (s == null ? void 0 : s.status) == "loading" ? Pe : void 0, iconClassName: y("animate-spin"), type: "submit", className: "py-2 rounded-md w-full", children: "Sign Up" })
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
          je,
          {
            onClick: (a) => {
              a.preventDefault(), R("focusedLoginView", 0);
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
      /* @__PURE__ */ e("p", { className: "mb-4 capitalize", children: /* @__PURE__ */ e(j, { content: "water fetch is a platform give's the possiblity for doing more thing by dahbia card" }) }),
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
}, $s = () => {
  const n = w(), t = O.getOneFeild("loginUseremail", "value"), o = x("");
  A(
    "login",
    async () => {
      var a;
      if (!((a = C.server) != null && a.auth)) {
        L("Error When Loading The Auth", "error");
        return;
      }
      if (!t) {
        L("Email is required", "error");
        return;
      }
      if (!o.get) {
        L("Password must be at least 6 characters", "error");
        return;
      }
      await Ke(C.server.auth, t, o.get);
    },
    [t, o.get]
  );
  const r = A(
    "sign-in-facebook",
    async () => {
      var a;
      (a = C.server) != null && a.auth && await We(C.server.auth, new en());
    },
    []
  ), s = A(
    "sign-in-google",
    async () => {
      var a;
      (a = C.server) != null && a.auth && await We(C.server.auth, new tn());
    },
    []
  );
  return /* @__PURE__ */ i(V, { className: "flex max-sm:flex-col items-center", children: [
    /* @__PURE__ */ i("div", { className: "p-8 w-1/2 max-sm:w-full", children: [
      /* @__PURE__ */ i(
        "form",
        {
          onSubmit: async (a) => {
            var l;
            if (a.preventDefault(), !((l = C.server) != null && l.auth)) {
              L("Error When Loading The Auth", "error");
              return;
            }
            if (t && o.get)
              try {
                await Ke(C.server.auth, t, o.get);
              } catch {
                L("Password Or Email Is Incorrect 😴", "error");
              }
          },
          children: [
            /* @__PURE__ */ i("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "Username or email" }),
              /* @__PURE__ */ e(
                q,
                {
                  controls: {
                    [jt]: {
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
              /* @__PURE__ */ e(Ee, { placeholder: "********", state: o })
            ] }),
            /* @__PURE__ */ e(U, { type: "submit", className: "py-2 rounded-md w-full", children: "Login" })
          ]
        }
      ),
      /* @__PURE__ */ i("div", { className: "flex justify-evenly items-center my-3", children: [
        /* @__PURE__ */ e(
          B,
          {
            iconClassName: y((s == null ? void 0 : s.status) == "loading" && "animate-spin"),
            icon: (s == null ? void 0 : s.status) == "loading" ? Pe : os,
            onClick: async () => {
              await Y("sign-in-google");
            }
          }
        ),
        /* @__PURE__ */ e(
          B,
          {
            iconClassName: y((r == null ? void 0 : r.status) == "loading" && "animate-spin"),
            icon: (r == null ? void 0 : r.status) == "loading" ? Pe : rs,
            onClick: async () => {
              await Y("sign-in-facebook");
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
          je,
          {
            onClick: (a) => {
              a.preventDefault(), R("focusedLoginView", 1);
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
      /* @__PURE__ */ e("p", { className: "mb-4 capitalize", children: /* @__PURE__ */ e(j, { content: "water fetch is a platform give's the possiblity for doing more thing by dahbia card" }) }),
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
}, Bs = () => {
  const n = Z("focusedLoginView");
  return /* @__PURE__ */ e(En, { focused: n ?? 0, pages: [/* @__PURE__ */ e($s, {}), /* @__PURE__ */ e(Us, {})] });
}, Hs = ({ projectId: n }) => {
  var a, l;
  const t = Te(), { data: o, error: r, status: s } = gt(async () => {
    var d;
    if (!((d = C.server) != null && d.db))
      return [];
    if (t != null && t.uid) {
      const { docs: c } = await yt(bt(C.server.db, "users", t.uid, "projects", n, "payouts"));
      return c;
    } else
      return [];
  }, [n, t]);
  return m.useEffect(() => {
    s.set("idle");
  }, []), m.useEffect(() => {
    s.get == "error" && r.get && L("Error When Loading The Payouts", "error");
  }, [s.get, r.get]), /* @__PURE__ */ i(W, { children: [
    s.get == "success" && /* @__PURE__ */ i(W, { children: [
      !!((a = o.get) != null && a.length) && /* @__PURE__ */ e(
        ye,
        {
          data: o.get,
          focusId: "payouts-list",
          itemSize: 50,
          slotId: "payouts-list",
          component: ({ style: d, data: c }) => {
            const h = c.data();
            return /* @__PURE__ */ i(
              "div",
              {
                style: {
                  ...d
                },
                className: "flex justify-between items-center gap-1 p-3",
                children: [
                  /* @__PURE__ */ i("span", { children: [
                    h.price,
                    "DA"
                  ] }),
                  /* @__PURE__ */ e(U, { onClick: async () => {
                  }, children: /* @__PURE__ */ e(j, { content: "Prepare" }) })
                ]
              }
            );
          }
        }
      ),
      !((l = o.get) != null && l.length) && /* @__PURE__ */ e("div", { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ e("h1", { children: "No Payouts In Your Account 😔" }) })
    ] }),
    s.get == "loading" && /* @__PURE__ */ e(re, { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2" })
  ] });
}, Ks = () => {
  var N, E, D;
  const n = w(), t = Te(), o = nn(), r = x(!1), s = x(void 0), a = I("preferences/animation.boolean"), l = A(
    "change-my-name",
    async () => {
      C.server && s.get && t && await sn(
        on(C.server.db, "users", t.uid),
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
  m.useEffect(() => {
    Y("change-my-name");
  }, [s.get, t]), m.useEffect(() => {
    F("userLoginDisplayName");
  }, [r.get]), m.useEffect(() => {
    r.set(!1);
  }, [s.get]);
  const d = A(
    "profile-change-image",
    async () => {
      if (!C.server) {
        L("Error When Loading The Server", "error");
        return;
      }
      if (!t)
        return;
      const P = Lt(t.photoURL && "Delete", "Cancel", "Upload", "Open Camera"), { response: te } = await ie({
        title: "Profile Picture",
        message: "Change your profile picture",
        buttons: P,
        defaultId: 2
      }), Ce = P[te];
      if (Ce == "Delete") {
        await Ie(t, {
          photoURL: null
        });
        return;
      }
      if (Ce == "Cancel")
        return;
      if (Ce == "Upload")
        return new Promise((ke) => {
          const ne = document.createElement("input");
          ne.type = "file", ne.accept = "image/*", ne.onchange = async () => {
            var Be;
            if (!C.server)
              return;
            const Ue = (Be = ne.files) == null ? void 0 : Be[0];
            if (!Ue)
              return;
            let Rt = ["users", t.uid, "profile", Le()].filter(Boolean).join("/"), $e = Ye(C.server.storage, Rt);
            await Ge($e, Ue);
            const Vt = await Xe($e);
            return await Ie(t, {
              photoURL: Vt
            }), ke("Done");
          }, ne.click();
        });
      const Ve = await rn("take");
      if (!Ve || !C.server)
        return;
      const Ot = await fetch(Ve).then((ke) => ke.blob());
      let At = ["users", t.uid, "profile", Le()].filter(Boolean).join("/"), ze = Ye(C.server.storage, At);
      await Ge(ze, Ot);
      const Dt = await Xe(ze);
      await Ie(t, {
        photoURL: Dt
      });
    },
    [t]
  ), c = x(!1), h = O.getOneFeild("newUserPhoneNumber", "value"), g = x(null), p = A(
    "send-verification-code",
    async () => {
      if (h && !pt(["newUserPhoneNumber"]).isValide) {
        L("Invalid Phone Number", "error");
        return;
      }
    },
    [h, t]
  );
  m.useEffect(() => {
    c.get && F("newUserPhoneNumber");
  }, [c.get]);
  const {
    data: b,
    status: f,
    error: v
  } = gt(async () => {
    if (t && C.server) {
      const { docs: P } = await yt(bt(C.server.db, "users", t.uid, "projects"));
      return P;
    } else
      return [];
  }, [t]);
  m.useEffect(() => {
    f.set("idle");
  }, []), m.useEffect(() => {
    f.get == "error" && v.get && L("Error Loading Your Projects", "error");
  }, [v.get, f.get]);
  const u = x(null);
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
          className: y("relative rounded-full w-[100px] h-[100px] max-sm:w-[60px] max-sm:h-[60px] overflow-hidden", (t == null ? void 0 : t.emailVerified) && "outline-1 outline-offset-1"),
          onClick: async () => {
            Y("profile-change-image");
          },
          children: [
            (d == null ? void 0 : d.status) != "loading" && /* @__PURE__ */ e("img", { src: (N = t == null ? void 0 : t.photoURL) == null ? void 0 : N.toString(), className: "w-full h-full object-cover" }),
            " ",
            !(t != null && t.photoURL) && /* @__PURE__ */ e(vt, { icon: as }),
            (d == null ? void 0 : d.status) == "loading" && /* @__PURE__ */ e(
              re,
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
      /* @__PURE__ */ i("div", { className: "max-sm:flex max-sm:flex-col max-sm:justify-cente", children: [
        (l == null ? void 0 : l.status) != "loading" && /* @__PURE__ */ i(W, { children: [
          !r.get && /* @__PURE__ */ e(
            "h1",
            {
              className: "text-2xl",
              onClick: () => {
                r.set(!0);
              },
              children: (o == null ? void 0 : o.name) || "No Name"
            }
          ),
          r.get && /* @__PURE__ */ e(
            wt,
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
        (l == null ? void 0 : l.status) == "loading" && /* @__PURE__ */ e(ot, {}),
        /* @__PURE__ */ e("p", { children: o == null ? void 0 : o.email }),
        o && /* @__PURE__ */ i("div", { className: "flex items-center", children: [
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
          c.get && !g.get && /* @__PURE__ */ i("div", { className: "flex items-center gap-1 p-2", children: [
            /* @__PURE__ */ e(
              q,
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
              U,
              {
                className: "px-5 py-1",
                icon: is,
                iconClassName: y("animate-spin", (p == null ? void 0 : p.status) != "loading" && "hidden"),
                onClick: async () => {
                  Y("send-verification-code");
                },
                children: "Verifie"
              }
            ),
            /* @__PURE__ */ e(
              U,
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
          c.get && g.get && /* @__PURE__ */ i("div", { className: "flex items-center gap-1 p-2", children: [
            /* @__PURE__ */ e(q, { inputName: "verificationCode" }),
            /* @__PURE__ */ e(U, { onClick: async () => {
            }, children: "Ok" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ e(S, {}),
    /* @__PURE__ */ i(V, { className: "relative", children: [
      f.get == "success" && /* @__PURE__ */ i(W, { children: [
        /* @__PURE__ */ e("div", { className: "flex flex-wrap", children: (E = b.get) == null ? void 0 : E.map((P, te) => /* @__PURE__ */ e("div", { className: "flex justify-between items-center p-3 w-1/3 max-sm:w-1/2", children: /* @__PURE__ */ i(de, { className: "w-full", children: [
          /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ e("h1", { className: "font-bold text-lg", children: P.id }) }),
          /* @__PURE__ */ e(S, {}),
          /* @__PURE__ */ i("div", { className: "flex justify-between items-center p-2", children: [
            /* @__PURE__ */ e("span", {}),
            /* @__PURE__ */ e(
              B,
              {
                onClick: () => {
                  u.set(P.id);
                },
                icon: Ne
              }
            )
          ] })
        ] }) }, te)) }),
        !((D = b.get) != null && D.length) && /* @__PURE__ */ e("div", { className: "flex justify-center items-center w-full h-full capitalize", children: /* @__PURE__ */ e(j, { content: "no water fetch projects you sigin" }) })
      ] }),
      f.get == "loading" && /* @__PURE__ */ e(re, { className: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" }),
      /* @__PURE__ */ i(
        "div",
        {
          style: {
            ...n("primary.background")
          },
          className: y("right-0 absolute inset-y-0 left-full", u.get && "left-0", a && "transition-[left]"),
          children: [
            /* @__PURE__ */ i("div", { className: "flex items-center gap-3 p-3", children: [
              /* @__PURE__ */ e(
                B,
                {
                  icon: ls,
                  onClick: () => {
                    u.set(null);
                  }
                }
              ),
              /* @__PURE__ */ e("h1", { className: "font-bold text-4xl", children: u.get })
            ] }),
            /* @__PURE__ */ e(S, {}),
            u.get && /* @__PURE__ */ e(Hs, { projectId: u.get })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e(S, {}),
    /* @__PURE__ */ e("div", { className: "flex justify-end gap-2 p-2", children: /* @__PURE__ */ e(
      U,
      {
        className: "max-sm:w-full sm:w-1/4 capitalize",
        style: {
          ...n("error")
        },
        onClick: async () => {
          if (!C.server)
            return;
          const { response: P } = await ie({
            title: "Logout",
            message: "Are you sure you want to logout?",
            buttons: ["No", "Yes"],
            defaultId: 1
          });
          P ? await an(C.server.auth) : L("Ignore Logout", "error");
        },
        children: /* @__PURE__ */ e(j, { content: "logout" })
      }
    ) })
  ] });
}, Ws = () => {
  const n = Te();
  return /* @__PURE__ */ e("div", { className: "relative w-full h-full overflow-hidden", children: /* @__PURE__ */ e(
    Pn,
    {
      render: async () => (await cs(1e3), /* @__PURE__ */ i(W, { children: [
        n && /* @__PURE__ */ e(Ks, {}),
        !n && /* @__PURE__ */ e(Bs, {})
      ] })),
      loading: /* @__PURE__ */ e(re, { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2" })
    }
  ) });
}, Ys = () => {
  const n = pe.getTemp("profile-view");
  return /* @__PURE__ */ e(H, { hidden: !n, children: /* @__PURE__ */ i(de, { className: "w-[80vw] h-[80vh]", children: [
    /* @__PURE__ */ i("div", { className: "flex justify-between items-center p-3", children: [
      /* @__PURE__ */ e("h1", { className: "text-3xl", children: /* @__PURE__ */ e(j, { content: "Your Profile" }) }),
      /* @__PURE__ */ e(
        B,
        {
          icon: z,
          onClick: () => {
            pe.setTemp("profile-view", !1);
          }
        }
      )
    ] }),
    /* @__PURE__ */ e(S, {}),
    /* @__PURE__ */ e(V, { children: /* @__PURE__ */ e(Ws, {}) })
  ] }) });
}, Gs = () => {
  const n = Ze.getTemp("id"), t = Ze.getTemp("src"), o = m.createRef();
  return m.useEffect(() => {
    o.current && (o.current.onclose = () => {
      ln();
    });
  }, [o.current]), /* @__PURE__ */ e(H, { hidden: !n, children: t && n && /* @__PURE__ */ e(de, { className: "w-[70vw] h-[70vh] overflow-hidden", children: /* @__PURE__ */ e("iframe", { ref: o, className: "w-full h-full", id: n, src: t }) }) });
}, ro = () => {
  const n = x(null), t = w(), o = I("preferences/animation.boolean");
  return /* @__PURE__ */ e(H, { children: /* @__PURE__ */ i(de, { children: [
    /* @__PURE__ */ i("div", { className: "flex justify-between items-center gap-1 p-3", children: [
      /* @__PURE__ */ e("h1", { className: "text-2xl", children: "Time" }),
      /* @__PURE__ */ e(
        B,
        {
          onClick: () => {
          },
          icon: z
        }
      )
    ] }),
    /* @__PURE__ */ e(S, {}),
    /* @__PURE__ */ e("div", { className: "flex justify-center p-3", children: /* @__PURE__ */ e(
      "div",
      {
        style: {
          ...t("primary.background", {
            borderColor: "borders",
            boxShadow: J([
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
        children: Pt(1, 12).map((r) => /* @__PURE__ */ e(
          "span",
          {
            onClick: () => {
              n.set(r);
            },
            className: y(
              "inline-flex absolute justify-center items-center rounded-full w-[40px] h-[40px] -translate-x-1/2 -translate-y-1/2 cursor-pointer active:scale-90",
              o && "transition-[transform]"
            ),
            style: {
              ...t(
                {
                  color: "text.color"
                },
                n.get == r && {
                  color: "primary.content",
                  backgroundColor: "primary"
                }
              ),
              top: `${50 - 40 * Math.sin((r + 3) * 30 * Math.PI / 180)}%`,
              left: `${50 + 40 * -Math.cos((r + 3) * 30 * Math.PI / 180)}%`
            },
            children: r
          },
          r
        ))
      }
    ) }),
    /* @__PURE__ */ e(S, {}),
    /* @__PURE__ */ i("div", { className: "flex items-center gap-1 p-2", children: [
      n.get && /* @__PURE__ */ e(
        U,
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
          children: /* @__PURE__ */ e(j, { content: "Clear" })
        }
      ),
      /* @__PURE__ */ e(
        U,
        {
          onClick: () => {
          },
          className: "capitalize",
          children: /* @__PURE__ */ e(j, { content: "Set" })
        }
      )
    ] })
  ] }) });
}, Xs = () => {
  const n = w(), t = se.getTemp("id"), o = se.getTemp("list"), r = Me(o || [], "enum-list", "focused"), s = Me(o || [], "enum-list", "submited"), a = I("preferences/animation.boolean");
  m.useEffect(() => {
    t && s && (se.setTemp("result", s.value), $.setOneFeild("enum-list", "focused", null), $.setOneFeild("enum-list", "submited", null));
  }, [s, t]);
  const l = m.createRef();
  return /* @__PURE__ */ e(
    H,
    {
      hidden: !t,
      onClick: ({ target: d }) => {
        var c;
        (c = l.current) != null && c.contains(d) || se.setTemp("id", null);
      },
      children: o && /* @__PURE__ */ i(
        "div",
        {
          ref: l,
          className: "flex flex-col border border-transparent border-solid rounded-md w-[60vw] max-md:w-3/4 h-[400px] max-md:h-3/4 overflow-hidden",
          style: {
            ...n("secondry.background", {
              borderColor: "borders"
            })
          },
          children: [
            /* @__PURE__ */ e(V, { children: /* @__PURE__ */ e(
              ye,
              {
                minSize: 40,
                maxSize: 200,
                data: o,
                slotId: "enum-list",
                focusId: "enum-list",
                itemSize: 40,
                countLastItems: -1,
                component: ({ data: d, style: c, status: h, handel: g }) => {
                  const p = w(), b = se.getTemp("choised"), f = x(!1);
                  return /* @__PURE__ */ e(
                    "div",
                    {
                      onMouseEnter: (v) => f.set(!0),
                      onMouseLeave: (v) => f.set(!1),
                      style: {
                        ...c,
                        ...p(
                          b == d.value && {
                            color: "primary"
                          },
                          f.get && "gray.opacity",
                          h.isFocused && "primary",
                          h.isFocused && {
                            color: "primary.content"
                          }
                        )
                      },
                      onClick: () => {
                        g.focus(), g.submit();
                      },
                      className: y("text-lg p-1 max-md:p-2 flex items-center justify-center", b == d.value && "font-bold"),
                      children: /* @__PURE__ */ e("span", { children: d.content || d.value })
                    }
                  );
                }
              }
            ) }),
            /* @__PURE__ */ i("div", { className: y("h-[0px]", a && "transition-[height] duration-200", (r == null ? void 0 : r.desc) && "h-[100px]"), children: [
              /* @__PURE__ */ e(S, {}),
              /* @__PURE__ */ e(
                "div",
                {
                  className: "flex justify-center items-center p-4 h-full text-center",
                  style: {
                    ...n("primary.background")
                  },
                  children: /* @__PURE__ */ e(we, { value: (r == null ? void 0 : r.desc) || "" })
                }
              )
            ] })
          ]
        }
      )
    }
  );
}, ao = ({ children: n }) => /* @__PURE__ */ i(W, { children: [
  n,
  /* @__PURE__ */ e(xs, {}),
  /* @__PURE__ */ e(Ss, {}),
  /* @__PURE__ */ e(Gs, {}),
  /* @__PURE__ */ e(Ys, {}),
  /* @__PURE__ */ e(us, {}),
  /* @__PURE__ */ e(Ts, {}),
  /* @__PURE__ */ e(Os, {}),
  /* @__PURE__ */ e(zs, {}),
  /* @__PURE__ */ e(ds, {}),
  /* @__PURE__ */ e(ks, {}),
  /* @__PURE__ */ e(Xs, {}),
  /* @__PURE__ */ e(Ns, {}),
  /* @__PURE__ */ e(Tn, {}),
  /* @__PURE__ */ e(Ds, {}),
  /* @__PURE__ */ e(jn, {}),
  /* @__PURE__ */ e(fs, {})
] }), io = m.memo(
  () => {
    const [n, t] = On(!1), o = m.createRef(), r = () => {
      const s = ["#FF5733", "#FFBD33", "#33FF57", "#3357FF", "#D133FF", "red", "blue", "yellow"];
      return s[Math.floor(Math.random() * s.length)];
    };
    return An(() => {
      const s = setTimeout(() => {
        t(!0);
      }, 8e3);
      return () => clearTimeout(s);
    }, []), /* @__PURE__ */ e("div", { className: "relative flex justify-center items-center w-screen h-screen", children: /* @__PURE__ */ e("div", { ref: o, className: y("absolute inset-0 pointer-events-none transition-opacity duration-[5000ms] ease-out", n && "opacity-0"), children: Pt(1, 30).map((s, a) => /* @__PURE__ */ e(
      "div",
      {
        className: "absolute opacity-70 confetti-piece",
        style: {
          top: -30,
          backgroundColor: r(),
          left: Math.random() * 100 + "vw",
          animationDuration: Math.random() * 3 + 2 + "s",
          animationDelay: Math.random() * 2 + "s"
        }
      },
      a
    )) }) });
  },
  () => !0
);
export {
  ds as CameraView,
  us as Commands,
  io as CongratulationsView,
  ro as DateLayout,
  fs as DevReadingHTML,
  Tn as DialogBoxLayout,
  Xs as EnumLayout,
  ms as FindCommandInput,
  hs as FindSettingFeild,
  Ys as FixedProfileView,
  eo as Header,
  ps as HeaderNotification,
  ys as HeaderSettings,
  Gs as IframeLayout,
  fe as KeyboardButton,
  bs as KeyboardShortcuts,
  xs as KeyboardView,
  ao as Layoutes,
  to as LeftSide,
  no as LeftSideView,
  Bs as LoginContent,
  $s as LoginPage,
  Ns as MenuList,
  ws as MenuRecord,
  Cs as NotifaysSlot,
  ks as Notifications,
  Ss as PDFView,
  Hs as Payouts,
  Ks as ProfileContent,
  Ws as ProfileView,
  so as RightSide,
  Os as SettingUpdateView,
  js as SettingUpdating,
  Ls as Settings,
  Is as SettingsList,
  Ps as SettingsSide,
  Fs as SettingsTree,
  Ts as SettingsView,
  Us as SignupPage,
  As as ToastItem,
  Ds as Toasts,
  zs as UpdateKeyboardShortcut,
  Ms as UserSetting,
  oo as Window,
  vs as dataKeyboard,
  Tt as getTree,
  Je as headerVisibility
};
