import { j as e, a, E as T } from "./EmptyComponent-DdPDoXyL.mjs";
import { c as Se, b as A, a as N, d as dt, i as Zt, j as mt, t as Jt, k as _t, l as Z, g as j, m as Qt, s as P, n as ut, o as ee, e as $, f as O, p as R, q as K, r as ft, v as te, w as he, x as en, u as x, y as ht, z as _, h as se, A as pt, B as tn, C as nn, D as q, E as sn, F as ue, G as on, H, I as pe, J as gt, K as an, L as bt, M as L, N as yt, O as Le, P as xt, Q as vt, R as je, S as wt, T as Ye, U as ln, V as rn, W as Ge } from "./index-BbF-ZXBS.mjs";
import { B as J, g as cn, a5 as re, F as W, t as k, v as ne, i as dn, a2 as D, T as U, a6 as Y, X as mn, a0 as C, U as V, l as De, K as be, C as z, Q as ye, e as ce, G as un, w as xe, I as Te, M as ve, d as S, u as Oe, o as Nt, V as fn, W as hn, a3 as pn, a4 as kt, p as gn, f as bn, N as yn, D as xn, c as Ct, a as St, E as vn, O as wn, Z as Ae, y as It, m as Ft, n as jt, P as Et, j as Mt, H as Nn, R as Pt, r as Lt, J as Dt, a7 as le, a8 as Ee, A as we, x as kn, b as Cn, S as Sn, L as In, _ as Fn, h as jn, z as En, Y as Mn, a9 as Pn, a1 as Ln, k as Dn, s as Tn } from "./ViewPage-Kyfwhmhp.mjs";
import f from "react";
import { a as de, m as Q, b as me, s as I, t as y, i as Ue, D as On, c as ge, g as qe, d as An, e as Un, f as Vn, h as Rn, j as zn, S as Bn } from "./index-xG9JJ5Ch.mjs";
import { b as Ve, c as Ne, f as B, d as Re, a as Tt, e as Hn, g as ze, h as $n, i as Ot, j as Kn, k as At, l as Ut, m as Wn, n as Vt, o as Yn, p as Rt, q as zt, r as Gn, s as ke, t as qn, u as Xn, v as Zn, w as Jn, x as _n, y as Qn, z as es, A as ts, B as ns, C as Me, D as ss, E as os, F as as, G as is, H as ls, I as rs, J as Xe, K as cs, L as ds, M as ms, N as us } from "./index-Dr7qSHtq.mjs";
import { c as fs, a as X, s as Ze, b as hs, d as ps, e as Pe, g as Bt, f as Ht, h as Je, i as _e, F as gs, G as bs, u as Ie, r as Qe, j as et, k as tt, l as nt } from "./firebase-D2OgFAxz.mjs";
function ys() {
  const n = Se.getTemp("type"), t = Se.getTemp("id");
  return A(
    "camera-take",
    () => {
      if (t && n == "take") {
        const o = document.querySelector("#camera-view  video");
        if (!o)
          return;
        const l = document.createElement("canvas");
        l.width = o.videoWidth, l.height = o.videoHeight;
        const s = l.getContext("2d");
        s == null || s.drawImage(o, 0, 0, l.width, l.height);
        const i = l.toDataURL("image/jpeg");
        Se.setTemp("result", i);
      }
    },
    [n, t]
  ), /* @__PURE__ */ e(J, { hidden: !t, children: /* @__PURE__ */ e(cn, {}) });
}
function xs() {
  const n = re("press ? for help");
  return /* @__PURE__ */ e(W, { "aria-multiline": !1, placeholder: `${n} 😊`, inputName: "findCommand" });
}
function vs() {
  const n = N(), t = dt(), o = Zt(), l = f.useMemo(() => {
    const u = mt.getState();
    return o.map((v) => ({
      command: v,
      keys: de.join(v, t, "commandId->command")
    })).filter((v) => v.keys.filter((w) => {
      if (!w.when)
        return !0;
      try {
        return Jt(w.when)({
          state: u,
          focused: null
        });
      } catch {
        return !1;
      }
    }).length || !v.keys.length);
  }, [t, o]), s = _t(), i = Z("commandId"), r = j("commands/enum/prefixes.object"), m = Z("commands.isLoading"), c = Qt.getAll(), p = f.useMemo(() => {
    const u = Object.entries(r || {}).map(([d, w]) => ({
      key: d,
      settingKey: `${w}.enum`,
      value: w
    })), v = {};
    return de.fullJoinOne(u, s, "settingKey->settingId").forEach(({ data: d, joinTo: w }) => {
      var E, M;
      v[d.key] = {
        lines: (M = (E = w == null ? void 0 : w.config) == null ? void 0 : E.list) == null ? void 0 : M.map(({ value: F, content: G }) => ({
          id: F,
          content: G,
          checked: (w == null ? void 0 : w.value) == F
        })),
        // desc: "commands/enum/prefixes.object"
        onSubmit(F) {
          P.setOneFeild(d.settingKey, "value", F.id);
        }
      };
    }), Q(
      {
        commands: {
          lines: l.map(({ command: d, keys: w }) => ({
            content: d.label || d.commandId,
            keyPanding: w.map(({ value: E }) => E),
            id: d.commandId
          })),
          onSubmit(d) {
            ut(d.id);
          }
        },
        settings: {
          lines: s.map(({ name: d, settingId: w, desc: E }) => ({
            id: w,
            tools: [],
            content: d || w,
            sub: E
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
            d.id && $(d.id);
          }
        }
      },
      v
    );
  }, [l, s, r, c]), g = O.getOneFeild("findCommand", "value"), h = f.useMemo(() => !!(g != null && g.match(/^ *\?/)), [g]), b = f.useMemo(() => Q(
    h && {
      help: {
        lines: Object.entries(p).map(([u]) => ({
          id: u,
          content: u
        })),
        onSubmit(u) {
          R("commandId", u.id);
        }
      }
    },
    !h && p
  ), [p, g, h]);
  return f.useEffect(() => {
    i && h && R("commandId", "help");
  }, [i, g, h]), f.useEffect(() => {
    K.setOneFeild("cmds/list", "focused", 0);
  }, [g]), /* @__PURE__ */ e(
    J,
    {
      onLoadContent: () => {
        I("findCommand");
      },
      onPointerDown: (u) => {
        u.currentTarget == u.target && R("commandId", null);
      },
      hidden: !i,
      children: /* @__PURE__ */ a(
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
            /* @__PURE__ */ a(
              "div",
              {
                className: "transition-[height]",
                style: Q(
                  i && {
                    height: "40px"
                  },
                  !i && {
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
                          background: ft("to right", "gray.opacity", "transparent", "gray.opacity")
                        })
                      },
                      children: i
                    }
                  ),
                  /* @__PURE__ */ e(k, {})
                ]
              }
            ),
            /* @__PURE__ */ a(
              "div",
              {
                className: "flex justify-between items-center gap-3 p-2",
                onClick: () => {
                  I("findCommand");
                },
                children: [
                  /* @__PURE__ */ e(xs, {}),
                  m && /* @__PURE__ */ e(ne, {})
                ]
              }
            ),
            /* @__PURE__ */ e(k, {}),
            /* @__PURE__ */ e(dn, { data: b })
          ]
        }
      )
    }
  );
}
function uo() {
  const n = Z("dev.html.hoverPosition"), t = N();
  return /* @__PURE__ */ e(T, { children: n && /* @__PURE__ */ e(
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
function ws() {
  const n = te.getOneFeild("settings", "focused"), t = he.getTemp("config"), o = O.getOneFeild("findConfigurations", "value");
  en("findConfigurations");
  const l = N(), s = Z("configurations.found.length"), i = f.useMemo(() => me(n || "no settings focused", "camel", "normal"), [n]), r = re(`search ${i} in list`), m = re(i), c = x(!1), p = O.getOneFeild("findConfigurations-local", "value");
  return ht(
    () => {
      typeof p == "string" && O.setOneFeild("findConfigurations", "value", p);
    },
    [p],
    500
  ), /* @__PURE__ */ e(
    "div",
    {
      className: "p-2 border-transparent border-b border-solid",
      onClick: () => {
        I("findConfigurations");
      },
      children: /* @__PURE__ */ a("div", { className: "relative w-full", children: [
        /* @__PURE__ */ e(
          W,
          {
            selectWhenFocusIn: !0,
            inputName: "findConfigurations-local",
            placeholder: r,
            propositions: (n == "user" ? ["id", "name", "changed"] : n == "keyboardShortcuts" ? ["key", "label", "commandId"] : []).map((g) => `@${g}`).filter((g) => !(o != null && o.includes(g))),
            tabIndex: t ? -1 : 1
          }
        ),
        /* @__PURE__ */ e("div", { className: "top-1/2 right-2 absolute flex items-center gap-2 -translate-y-1/2", children: !!o && /* @__PURE__ */ e(
          D,
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
            children: /* @__PURE__ */ a(
              "div",
              {
                className: "px-2 py-1 rounded-sm cursor-pointer",
                style: {
                  ...l("primary", {
                    color: "primary.content"
                  })
                },
                children: [
                  /* @__PURE__ */ a("span", { children: [
                    /* @__PURE__ */ e(U, { content: "found" }),
                    " ",
                    s,
                    " ",
                    /* @__PURE__ */ e(U, { content: m })
                  ] }),
                  c.get && /* @__PURE__ */ a("span", { children: [
                    " ",
                    "(",
                    /* @__PURE__ */ e(U, { content: "Delete" }),
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
const st = "visibility/header.boolean";
function Ns({ children: n }) {
  const t = j(st), o = x(!1), l = _("Shift");
  f.useEffect(() => {
    const c = (p) => {
      const g = p.x * 100 / innerWidth;
      o.set(p.y <= 100 && Ue(25, g, 75));
    };
    return document.addEventListener("mousemove", c), () => document.removeEventListener("mousemove", c);
  }, []);
  const s = N(), i = Z("window.isFocused"), r = j("preferences/animation.boolean"), m = f.useMemo(() => s(i ? "primary.background" : "secondry.background", {
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
  }), [s, i]);
  return /* @__PURE__ */ a("div", { className: "top-0 z-[10000000000000000000000000000000000000] absolute inset-x-0", children: [
    /* @__PURE__ */ e(
      "div",
      {
        onClick: () => {
          P.setOneFeild(st, "value", !t);
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
          r && "transition-[height] duration-200",
          !o.get || !l ? "h-[0px]" : "border-b border-x h-[30px]"
        ),
        style: m,
        children: /* @__PURE__ */ e(Y, { icon: t ? Ve : Ne })
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        className: y(
          "relative border-b border-solid border-transparent box-content flex h-[0px] items-center justify-between overflow-hidden",
          t && "h-[50px]",
          r && "transition-[height]"
        ),
        style: {
          ...m
        },
        children: n
      }
    )
  ] });
}
function ks() {
  const n = pt("notification.header"), t = f.useMemo(() => (Array.isArray(n.get) ? n.get : []).slice(0, 3), [n.get]), o = N();
  return /* @__PURE__ */ e(
    "div",
    {
      className: "h-fit",
      style: {
        ...o({
          background: ft("right", "secondry", "primary"),
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
          component: ({ index: l, item: s }) => /* @__PURE__ */ a("div", { children: [
            /* @__PURE__ */ a("div", { className: "flex justify-between items-center p-3", children: [
              /* @__PURE__ */ e("div", { children: s.message || "empty message" }),
              /* @__PURE__ */ e("div", { className: "flex tools", children: /* @__PURE__ */ e(
                C,
                {
                  onClick: () => {
                    n.set((i) => {
                      const r = i == null ? void 0 : i[l];
                      return r && (r.expanded = !r.expanded), i;
                    });
                  },
                  icon: B
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
const Cs = "visibility/configurations.boolean", Ss = () => {
  const n = te.getOneFeild("settings", "focused"), t = f.useMemo(() => me(String(n), "camel", "normal"), [n]), o = re(t);
  return /* @__PURE__ */ a("div", { className: "flex justify-between items-center p-2", children: [
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
          C,
          {
            onClick: () => {
              P.setOneFeild(Cs, "value", !1);
            },
            icon: B
          }
        )
      }
    ) })
  ] });
};
function Is() {
  const n = tn(), t = K.getOneFeild("keyboardShortcuts", "focused");
  return A(
    "keyboard/update",
    () => {
      if (t == null)
        return;
      const o = n[t];
      o && (K.setOneFeild("keyboardShortcuts", "submited", t), R("keyboard.commandId", o.commandId), I("edit-keyPanding"));
    },
    [t, n]
  ), /* @__PURE__ */ e(
    De,
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
      component: ({ data: o, index: l, status: s, handel: i, style: r }) => {
        const { commandId: m, label: c = "" } = o, p = nn(m), g = f.createRef(), h = N(), b = _("Control"), u = x(!1), v = f.useMemo(() => p.filter(({ value: d }) => d).map(({ value: d }) => d), [p]);
        return /* @__PURE__ */ a(
          "div",
          {
            onMouseEnter: () => u.set(!0),
            onMouseLeave: () => u.set(!1),
            onClick: () => {
              i.focus(), i.submit();
            },
            ref: g,
            className: "px-3 text-xs group row",
            style: {
              ...h(
                l % 2 && "primary.background",
                u.get && "gray.opacity",
                s.isFocused && { borderColor: "primary" },
                s.isSubmited && {
                  backgroundColor: "secondry",
                  color: "secondry.content"
                }
              ),
              ...r
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
                  children: (u.get || s.isFocused || s.isSubmited) && /* @__PURE__ */ a("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ e(
                      C,
                      {
                        onClick: async () => {
                          const d = JSON.stringify(o);
                          await navigator.clipboard.writeText(d);
                        },
                        icon: Re
                      }
                    ),
                    /* @__PURE__ */ e(
                      C,
                      {
                        icon: Tt,
                        onClick: (d) => {
                          R("keyboard.commandId", m), I("edit-keyPanding");
                        }
                      }
                    ),
                    !!p.length && /* @__PURE__ */ e(
                      C,
                      {
                        tabIndex: -1,
                        icon: B,
                        onClick: () => {
                          q.remove(p.map(({ keyId: d }) => d));
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
                    b && (O.setOneFeild("findConfigurations", "value", `@commandId: ${m}`), await new On().start(100), I("findConfigurations"));
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
  const l = N();
  return /* @__PURE__ */ e(
    "span",
    {
      className: y("w-[35px] h-[35px] gap-2 rounded-md inline-flex items-center justify-center border border-solid border-transparent", t),
      style: {
        ...l(
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
}, Fs = [
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
], ot = 200, js = () => {
  const n = N(), t = x(!1), o = x(!1), l = x(!1), s = _("Shift"), i = x(!1), r = _("Control"), m = _("AltGraph");
  f.useEffect(() => {
    o.set(r);
  }, [r]), f.useEffect(() => {
    t.set(s);
  }, [s]), f.useEffect(() => {
    l.set(m);
  }, [m]);
  const c = x([-100, -100]), p = x(!1);
  ht(
    () => {
      p.get && p.set(!1);
    },
    [p.get],
    ot
  ), sn(["keyboard-view"]);
  const g = O.useOneFeild("keyboard-view", "value"), h = x([0, innerHeight - 300]), b = j("visibility/keyboard.boolean");
  return /* @__PURE__ */ a(
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
        /* @__PURE__ */ a("div", { className: "flex justify-between items-center p-2", children: [
          /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
            C,
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
              icon: Hn,
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
                z,
                {
                  onClick: () => {
                    P.setOneFeild("visibility/keyboard.boolean", "value", !1);
                  },
                  icon: B
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ e(k, {}),
        /* @__PURE__ */ a("div", { className: "flex justify-center items-stretch h-full overflow-hidden", children: [
          /* @__PURE__ */ e("div", { className: "w-fit", children: /* @__PURE__ */ e("div", { className: "flex flex-col flex-1 justify-center items-center gap-1 p-2 w-[20px] h-full overflow-hidden", children: [
            {
              name: "shift",
              state: t
            },
            {
              name: "alt gr",
              state: l
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
          /* @__PURE__ */ a(
            "div",
            {
              className: "relative flex flex-col justify-between gap-3 border-x p-2 border-transparent border-solid h-full overflow-hidden",
              style: {
                ...n({
                  borderColor: "borders"
                })
              },
              onClick: (u) => {
                const v = u.pageX, d = u.pageY, { left: w, top: E } = u.currentTarget.getBoundingClientRect();
                c.set([v - w, d - E]), p.set(!0);
              },
              children: [
                c.get && /* @__PURE__ */ e(
                  "span",
                  {
                    className: y(
                      `opacity-0 blur-xl transition-[opacity] duration-[${ot}] absolute pointer-events-none inline-block w-[100px] h-[100px] transform -translate-x-1/2 -translate-y-1/2 rounded-full`,
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
                /* @__PURE__ */ e("div", { className: "flex flex-col gap-3", children: Fs.map((u, v) => /* @__PURE__ */ e("div", { className: "flex justify-center gap-3", children: u.map((d, w) => /* @__PURE__ */ a(
                  fe,
                  {
                    onPointerDown: () => {
                      const E = t.get ? d.shift : l.get ? d.alt : d.normal, M = document.activeElement;
                      M && (M instanceof HTMLInputElement || M instanceof HTMLTextAreaElement) && (M.value = M.value.concat(E));
                    },
                    className: "relative",
                    children: [
                      t.get ? d.shift : l.get ? d.alt : d.normal,
                      !t.get && /* @__PURE__ */ e(
                        "span",
                        {
                          className: "right-1 bottom-1 absolute text-xs",
                          style: {
                            ...n({ color: "gray.opacity.2" })
                          },
                          children: l.get ? d.normal : d.alt
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
                      g.set((u) => u + " "), !i.get && t.get && t.set(!1);
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
}, at = "visibility/leftSide.boolean", Es = ({ children: n }) => {
  const t = j(at), o = N();
  return /* @__PURE__ */ e(
    ye,
    {
      position: "right",
      min: 200,
      temp: "leftSide.currentWidth",
      max: () => Math.max(window.innerWidth / 3, 350),
      handelResize: ({ size: l }) => {
        const s = Ue(150, l);
        s != t && P.setOneFeild(at, "value", s);
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
}, fo = () => {
  const n = N();
  return /* @__PURE__ */ a("div", { className: "w-full", children: [
    /* @__PURE__ */ e("div", { className: "p-2", children: /* @__PURE__ */ e(W, { placeholder: "Search Component Type", inputName: "search-component-type" }) }),
    /* @__PURE__ */ e(k, {}),
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
    ].map(({ content: t, value: o }, l) => /* @__PURE__ */ a(
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
          /* @__PURE__ */ e(k, {}),
          /* @__PURE__ */ e("p", { className: "p-1 w-full text-center", children: t })
        ]
      },
      l
    )) })
  ] });
}, Ms = ({ item: n, status: t, handelFocus: o, handelSubmit: l }) => {
  if (n.type == "separator")
    return /* @__PURE__ */ e("div", { className: "my-1", children: /* @__PURE__ */ e(k, {}) });
  const s = N(), i = f.createRef();
  return /* @__PURE__ */ e("div", { className: "px-1", children: /* @__PURE__ */ a(
    "div",
    {
      ref: i,
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
        K.setOneFeild("menu-list", "focused", null);
      },
      onClick: l(),
      className: "cursor-pointer flex items-center rounded-md px-4 py-1 w-full",
      children: [
        /* @__PURE__ */ e("div", { className: "w-[30px]", children: n.checked && /* @__PURE__ */ e(Te, { icon: ze }) }),
        /* @__PURE__ */ a("div", { className: "flex justify-between items-center gap-1 w-full", children: [
          n.label && /* @__PURE__ */ e("span", { children: n.label }),
          n.accelerator && /* @__PURE__ */ e(be, { shortcut: n.accelerator })
        ] }),
        /* @__PURE__ */ e("div", { className: "w-[30px]" })
      ]
    }
  ) });
}, Ps = () => {
  const n = N(), t = ue.getTemp("list"), o = ue.getTemp("position"), l = ue.getTemp("id"), s = f.createRef(), i = K.getOneFeild("menu-list", "submited");
  f.useEffect(() => {
    l && typeof i == "number" && (ue.setTemp("result", i), K.setOneFeild("menu-list", "submited", null));
  }, [i, l]);
  const r = on.getOne("menu-list");
  return /* @__PURE__ */ e(J, { hidden: !l, children: /* @__PURE__ */ e(
    un,
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
          o && (r == null ? void 0 : r.width) && (innerWidth > o[0] + r.width ? {
            left: o[0]
          } : {
            right: innerWidth - o[0]
          }),
          o && (r == null ? void 0 : r.height) && (innerHeight > o[1] + r.height ? {
            top: o[1]
          } : {
            bottom: innerHeight - o[1]
          })
        )
      },
      children: /* @__PURE__ */ e(xe, { skipFn: ({ enabled: m = !0, type: c }) => c == "separator" || !m, slotId: "menu-list", component: Ms, data: t || [] })
    }
  ) });
}, Ls = () => {
  const n = H.getAll();
  return /* @__PURE__ */ e(
    xe,
    {
      data: n,
      slotId: "notification",
      component: ({ item: t, index: o, id: l, handelFocus: s, handelSelect: i, handelSubmit: r, status: m }) => {
        const c = x(!1);
        function p(b, u, v, d) {
          return t.type == "warning" ? u : t.type == "error" ? v : t.type == "success" ? d : b;
        }
        const g = N(), h = j("preferences/animation.boolean");
        return /* @__PURE__ */ a(
          "div",
          {
            id: l,
            onClick: r(),
            onPointerDown: s(i()),
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
              /* @__PURE__ */ a("div", { className: y("relative p-3 flex justify-between items-center"), children: [
                /* @__PURE__ */ a("div", { className: "truncate text-xl flex items-center gap-2", children: [
                  /* @__PURE__ */ e(
                    Y,
                    {
                      icon: p(Ut, At, Kn, Ot),
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
                /* @__PURE__ */ a(
                  "ul",
                  {
                    className: "flex gap-1",
                    style: {
                      visibility: c.get || m.isSubmited ? "visible" : "hidden"
                    },
                    children: [
                      t.desc && /* @__PURE__ */ e(
                        C,
                        {
                          onClick: () => {
                            H.setOneFeild(t.id, "showDesc", !t.showDesc);
                          },
                          icon: t.showDesc ? Ve : Ne
                        }
                      ),
                      t.removable && /* @__PURE__ */ e(
                        C,
                        {
                          onClick: () => {
                            H.remove([t.id]);
                          },
                          icon: $n
                        }
                      )
                    ]
                  }
                )
              ] }),
              t.desc && /* @__PURE__ */ e("div", { className: y("h-[0px]", h && "transition-[height] duration-700", t.showDesc && "h-[170px]"), children: /* @__PURE__ */ e(V, { className: "p-6", children: /* @__PURE__ */ e(ve, { value: t.desc }) }) }),
              Array.isArray(t.buttons) && /* @__PURE__ */ e("div", { className: "flex justify-end p-5 overflow-x-auto", children: t.buttons.map(({ command: b, label: u }, v) => /* @__PURE__ */ e(
                S,
                {
                  className: "px-2 py-1 rounded-sm",
                  onClick: async () => {
                    typeof b == "object" ? $(b.action, b.arg) : ut(b);
                  },
                  children: u
                },
                v
              )) }),
              t.status == "loading" && /* @__PURE__ */ e(Oe, {})
            ]
          }
        );
      }
    }
  );
}, Fe = "visibility/notifays.boolean", it = "visibility/notifays/nots.boolean";
function Ds() {
  const n = j(Fe), t = j(it), o = H.getIds(), l = N(), s = K.getOneFeild("notification", "focused"), i = H.getAll(), r = f.useMemo(() => typeof s != "number" ? null : i[s] || null, [i, s]);
  A(
    "toggleExpandNotifay",
    () => {
      r && H.setOneFeild(r.id, "showDesc", !r.showDesc);
    },
    [r]
  ), A(
    "notification.deleteFocus",
    () => {
      r && H.remove([r.id]);
    },
    [r]
  );
  const m = j("preferences/animation.boolean");
  return /* @__PURE__ */ a(
    "div",
    {
      onClick: () => {
        n || P.setOneFeild(Fe, "value", !0);
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
        ...l({
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
        /* @__PURE__ */ a(
          "div",
          {
            className: "notifay-top-view flex justify-between items-center gap-2 p-3 cursor-pointer",
            onClick: () => {
              P.setOneFeild(it, "value", !t);
            },
            children: [
              /* @__PURE__ */ a("h3", { className: "font-bold text-lg uppercase notifay-full-title", children: [
                /* @__PURE__ */ e(U, { content: "notifications" }),
                /* @__PURE__ */ e(
                  "span",
                  {
                    style: {
                      ...l({
                        color: "gray.opacity.2"
                      })
                    },
                    children: !t && `(${o.length})`
                  }
                )
              ] }),
              /* @__PURE__ */ a("div", { className: "flex", children: [
                /* @__PURE__ */ e(
                  C,
                  {
                    onClick: () => {
                      H.remove(i.filter(({ removable: c = !0 }) => c).map(({ id: c }) => c));
                    },
                    className: y(!o.length && "pointer-events-none"),
                    icon: Wn
                  }
                ),
                !!o.length && /* @__PURE__ */ e(C, { icon: t ? Ne : Ve }),
                /* @__PURE__ */ e(
                  C,
                  {
                    onClick: () => {
                      P.setOneFeild(Fe, "value", !1);
                    },
                    icon: Vt
                  }
                )
              ] })
            ]
          }
        ),
        !!o.length && t && /* @__PURE__ */ e(k, {}),
        /* @__PURE__ */ e(
          Nt,
          {
            focusId: "notifications",
            className: y("flex flex-col overflow-hidden max-h-[80vh] rounded-ee-xl rounded-es-xl", m && "duration-300 transition-[max-height]", !t && "max-h-[0vh]"),
            children: /* @__PURE__ */ e(V, { children: /* @__PURE__ */ e(Ls, {}) })
          }
        )
      ]
    }
  );
}
const Ts = () => {
  const n = pe.getTemp("pdf");
  return /* @__PURE__ */ e(J, { hidden: !n, children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(ye, { className: "h-[70vh]", position: "right", temp: "pdf", min: 400, max: () => innerWidth - 30, children: /* @__PURE__ */ e(
    fn,
    {
      className: "h-full overflow-hidden",
      list: [
        /* @__PURE__ */ e(
          hn,
          {
            title: "PDF..",
            rightSide: /* @__PURE__ */ e("div", { className: "flex tools", children: /* @__PURE__ */ e(D, { title: "close view", children: /* @__PURE__ */ e(
              z,
              {
                icon: B,
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
}, lt = "visibility/rightSide.boolean", Os = ({ children: n }) => {
  const t = j(lt), o = N();
  return /* @__PURE__ */ e(
    ye,
    {
      min: 200,
      temp: "rightSide.currentWidth",
      max: () => Math.max(window.innerWidth / 3, 350),
      handelResize: ({ size: l }) => {
        const s = Ue(150, l);
        s != t && P.setOneFeild(lt, "value", s);
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
function As() {
  const n = gt();
  return /* @__PURE__ */ e(
    De,
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
      component: ({ data: t, index: o, style: l, status: s, handel: i, id: r }) => {
        const m = _("Control"), c = x(!1), p = f.useMemo(() => !t.settingId.match(/\.password$/gi) && !ge(t.def, t.value), [t]), g = N();
        A(
          "showSubmitSetting",
          () => {
            s.isSubmited && ee(t.settingId);
          },
          [s]
        );
        const h = f.useMemo(() => s.isFocused || s.isSubmited || c.get, [s, c.get]);
        return /* @__PURE__ */ a(
          "div",
          {
            id: r,
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
              ...l
            },
            onClick: () => {
              i.focus(), i.submit();
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
                        m && t.name != null && O.setOneFeild("findConfigurations", "value", t.name);
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
              /* @__PURE__ */ a(
                "span",
                {
                  className: y("inline-flex gap-1 items-center text-xs italic font-extralight truncate"),
                  onClick: () => {
                    m && O.setOneFeild("findConfigurations", "value", `@id ${t.settingId}`);
                  },
                  children: [
                    /* @__PURE__ */ a(
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
                    /* @__PURE__ */ a("div", { className: y("flex opacity-0 transition-[opacity] duration-500", h && "opacity-100"), children: [
                      p && /* @__PURE__ */ e(D, { title: "reset", children: /* @__PURE__ */ e(
                        C,
                        {
                          icon: Yn,
                          onClick: () => {
                            P.setOneFeild(t.settingId, "value", t.def);
                          }
                        }
                      ) }),
                      /* @__PURE__ */ e(D, { title: "configurate", children: /* @__PURE__ */ e(
                        C,
                        {
                          onClick: () => {
                            ee(t.settingId);
                          },
                          icon: Rt
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
function $t(n = [], t = ".") {
  const o = n.filter(Boolean).map((s) => s.split(t)).filter((s) => s.length);
  return Array.from(new Set(o.map(([s]) => s))).map((s) => ({
    data: s,
    innerTree: $t(
      o.filter(([i]) => i == s).map(([, ...i]) => i.join(t)),
      t
    )
  }));
}
function Us() {
  const n = gt(), t = f.useMemo(() => n.map(({ settingId: o }) => o), [n]);
  return /* @__PURE__ */ e("div", { id: "settings.tree.view", className: "flex flex-col h-full overflow-hidden", tabIndex: 1, children: /* @__PURE__ */ e(V, { children: /* @__PURE__ */ e(
    pn,
    {
      treeId: "setting-tree-layout",
      tree: $t(t, "/"),
      component: ({ data: o, status: l, parent: s, isFins: i, innerTree: r, level: m, handels: c }) => {
        const p = N(), [g, h] = o.split("."), b = x(!1), u = f.useMemo(() => {
          const v = [];
          let d = s;
          for (; d; )
            v.push(d.data), d = d.parent;
          return v.reverse().join("/");
        }, [i]);
        return /* @__PURE__ */ a(
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
                l.isFocused && {
                  borderColor: "primary"
                }
              ),
              paddingLeft: `${m * 50}px`
            },
            children: [
              !h && /* @__PURE__ */ e("div", { className: "mx-1 tools", children: /* @__PURE__ */ e(
                C,
                {
                  iconClassName: "text-xs",
                  tabIndex: -1,
                  icon: l.isExpanded ? Ne : Vt,
                  style: {
                    outlineColor: "transparent"
                  },
                  onClick: () => {
                    c.expand(!1, !l.isExpanded);
                  }
                }
              ) }),
              /* @__PURE__ */ a("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ a("div", { children: [
                  i && g,
                  !i && /* @__PURE__ */ e("b", { children: g }),
                  /* @__PURE__ */ e(
                    "b",
                    {
                      className: "ml-1",
                      style: {
                        ...p({
                          color: "primary"
                        })
                      },
                      children: !!(r != null && r.length) && `(${r == null ? void 0 : r.length})`
                    }
                  )
                ] }),
                h && /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
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
                    C,
                    {
                      onClick: () => {
                        ee(u);
                      },
                      icon: Rt,
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
function Vs() {
  const n = f.useMemo(() => [
    {
      click() {
        te.setOneFeild("settings.viewType", "focused", "list");
      },
      title: "list",
      icon: zt
    },
    {
      click() {
        te.setOneFeild("settings.viewType", "focused", "tree");
      },
      title: "tree",
      icon: Gn
    }
  ], []), t = an(n, "settings.layout.tools");
  return f.useEffect(() => {
    t && (t.click(), K.setOneFeild("settings.layout.tools", "submited", null));
  }, [t]), /* @__PURE__ */ a("div", { className: "relative flex flex-col w-full h-full overflow-hidden", children: [
    /* @__PURE__ */ a(Nt, { focusId: "settings.layouts", className: "flex justify-between items-center p-2", children: [
      /* @__PURE__ */ e("div", {}),
      /* @__PURE__ */ e("div", { className: "flex gap-1 tools", children: /* @__PURE__ */ e(
        xe,
        {
          slotId: "settings.layout.tools",
          data: n,
          component: ({ item: { click: o, title: l, icon: s }, tabIndex: i, handelFocus: r, status: m }) => {
            const c = N();
            return /* @__PURE__ */ e(
              D,
              {
                title: l,
                position: {
                  x: "center",
                  y: "top"
                },
                children: /* @__PURE__ */ e(
                  C,
                  {
                    icon: s,
                    onPointerDown: r(),
                    style: {
                      ...c(
                        m.isFocused && {
                          outlineColor: "primary"
                        }
                      )
                    },
                    tabIndex: i,
                    onClick: o
                  }
                )
              }
            );
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ e(k, {}),
    /* @__PURE__ */ e(
      kt,
      {
        views: {
          list: As,
          tree: Us
        },
        viewId: "settings.viewType"
      }
    )
  ] });
}
function Rs() {
  const n = he.getTemp("config");
  return f.useEffect(() => {
    n || ee(null);
  }, [n]), /* @__PURE__ */ a("div", { className: "flex flex-col w-full h-full overflow-hidden", children: [
    /* @__PURE__ */ e(ws, {}),
    /* @__PURE__ */ e(k, {}),
    n && /* @__PURE__ */ e(
      kt,
      {
        viewId: "settings",
        views: {
          keyboardShortcuts: Is,
          user: Vs,
          icons: gn,
          colors: bn
        }
      }
    )
  ] });
}
function zs() {
  const n = te.getOne("settings"), t = f.useMemo(() => Object.entries((n == null ? void 0 : n.tabs) || {}).map(([l, s]) => ({
    id: l,
    ...s,
    isFocused: (n == null ? void 0 : n.focused) == l
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
          component: ({ item: l }) => {
            const { id: s, news: i, isFocused: r, icon: m } = l, c = f.useMemo(() => `settings.${s}.show`, [s]), p = dt(), g = f.useMemo(() => de.join({ cmdId: c }, p, "cmdId->command").map(({ value: v }) => v), [c, p]), h = re(me(s, "camel", "normal")), b = x(!1), u = N();
            return /* @__PURE__ */ a(
              D,
              {
                onMouseEnter: () => b.set(!0),
                onMouseLeave: () => b.set(!1),
                draggable: !0,
                title: `press ${g.map((v) => "`" + v + "`").join(" or ")}`,
                onClick: () => {
                  !r && te.setOneFeild("settings", "focused", l.id);
                },
                style: {
                  ...u((r || b.get) && "primary.background")
                },
                className: "relative truncate cursor-pointer",
                children: [
                  r && /* @__PURE__ */ e("span", { className: "left-0 absolute inset-y-0 w-[2px]", style: { ...u("primary") } }),
                  /* @__PURE__ */ a("div", { className: "flex items-center gap-2 p-2", children: [
                    (m == null ? void 0 : m.value) && /* @__PURE__ */ e(Y, { icon: qe(m.type, m.value) }),
                    h,
                    i && /* @__PURE__ */ e(yn, { children: /* @__PURE__ */ e(Y, { icon: qe(i.type, i.value) }) })
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
function Bs() {
  return /* @__PURE__ */ e(ye, { position: "right", min: () => innerWidth / 7, max: () => innerWidth / 3, className: "h-full", children: /* @__PURE__ */ e(zs, {}) });
}
const rt = "visibility/configurations.boolean";
function Hs() {
  const n = j(rt), t = N();
  return f.useEffect(() => {
    n && he.setTemp("config", !0);
  }, [n]), /* @__PURE__ */ e(
    xn,
    {
      hidden: !n,
      onLoadContent: () => {
        I("findConfigurations-local");
      },
      onClick: async (o) => {
        o.currentTarget == o.target && P.setOneFeild(rt, "value", !1);
      },
      onTransitionEnd: () => {
        typeof n == "boolean" && he.setTemp("config", n);
      },
      children: /* @__PURE__ */ a(
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
            /* @__PURE__ */ e(Ss, {}),
            /* @__PURE__ */ e(k, {}),
            /* @__PURE__ */ a("div", { className: "flex w-[70vw] h-[70vh]", children: [
              /* @__PURE__ */ e(Bs, {}),
              /* @__PURE__ */ e(Rs, {})
            ] })
          ]
        }
      )
    }
  );
}
function $s({ settingId: n }) {
  const t = P.getOne(n), o = f.useMemo(() => t == null ? void 0 : t.value, [t]), l = f.useMemo(() => t == null ? void 0 : t.config, [t]), s = x(t == null ? void 0 : t.value);
  f.useEffect(() => {
    P.setOneFeild(n, "value", s.get);
  }, [s.get]), f.useEffect(() => {
    s.set(o);
  }, [t]);
  const i = f.useMemo(() => `setting:${(t == null ? void 0 : t.settingId) || ""}`, [t]), r = f.useMemo(() => {
    var p;
    const c = (p = i.match(/\.[a-zA-Z0-9]+$/gi)) == null ? void 0 : p[0].slice(1);
    return c || null;
  }, [i]), m = N();
  return /* @__PURE__ */ e(
    "div",
    {
      className: y((t == null ? void 0 : t.readonly) && "cursor-not-allowed"),
      style: {
        ...m((t == null ? void 0 : t.readonly) && "primary.background")
      },
      children: /* @__PURE__ */ a("div", { className: y((t == null ? void 0 : t.readonly) && "pointer-events-none"), children: [
        r == "boolean" && /* @__PURE__ */ e(Ct, { id: i, state: s, config: l }),
        r == "array" && /* @__PURE__ */ e(St, { id: i, state: s, config: l }),
        r == "enum" && /* @__PURE__ */ e(vn, { id: i, state: s, config: l }),
        r == "object" && /* @__PURE__ */ e(wn, { id: i, state: s, config: l }),
        r == "string" && /* @__PURE__ */ e(Ae, { id: i, state: s, config: l }),
        r == "number" && /* @__PURE__ */ e(It, { id: i, state: s, config: l }),
        r == "file" && /* @__PURE__ */ e(Ft, { id: i, state: s, config: l }),
        r == "filter" && /* @__PURE__ */ e(jt, { id: i, state: s, config: l }),
        r == "password" && /* @__PURE__ */ e(Et, { id: i, state: s, config: l }),
        r == "date" && /* @__PURE__ */ e(Mt, { id: i, state: s, config: l }),
        r == "regexp" && /* @__PURE__ */ e(Nn, { id: i, state: s }),
        r == "audio" && /* @__PURE__ */ e(Pt, { id: i, state: s, config: l }),
        r == "image" && /* @__PURE__ */ e(Lt, { id: i, state: s, config: l })
      ] })
    }
  );
}
const Ks = () => {
  const n = N(), t = pt("view.settings"), o = P.getOne(t.get || ""), l = f.useMemo(() => !o || o.settingId.match(/\.password$/gi) ? !1 : !ge(o.def, o.value), [o]), s = f.useMemo(() => {
    try {
      const i = Function(`return (state)=> \`${(o == null ? void 0 : o.desc) || "**no description defined**"}\` `)(), r = mt.getState();
      return i(r);
    } catch (i) {
      return An.err(i), " - ";
    }
  }, [o == null ? void 0 : o.desc]);
  return /* @__PURE__ */ e(
    J,
    {
      onLoadContent: () => {
        t.get && I(`setting:${t.get}`);
      },
      hidden: !t.get,
      children: /* @__PURE__ */ a(
        "div",
        {
          hidden: !t.get,
          className: y("rounded-md border-solid border border-transparent w-1/2 max-md:w-5/6"),
          style: n("secondry.background", {
            borderColor: "borders"
          }),
          children: [
            /* @__PURE__ */ a("div", { className: "flex justify-between items-center gap-1 p-3", children: [
              o && /* @__PURE__ */ a(T, { children: [
                /* @__PURE__ */ e("h1", { className: "text-2xl truncate", children: o.name }),
                /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-[1px] max-md:hidden text-xs", children: /* @__PURE__ */ e(
                  Dt,
                  {
                    list: o.settingId.split("/").filter(Boolean).map((i, r) => {
                      var p;
                      const m = (p = i.match(/\..+$/gi)) == null ? void 0 : p[0].slice(1);
                      let c = null;
                      switch (m) {
                        case "boolean": {
                          c = ze;
                          break;
                        }
                        case "password": {
                          c = ts;
                          break;
                        }
                        case "number": {
                          c = es;
                          break;
                        }
                        case "string": {
                          c = Qn;
                          break;
                        }
                        case "file": {
                          c = _n;
                          break;
                        }
                        case "enum": {
                          c = zt;
                          break;
                        }
                        case "object": {
                          c = Jn;
                          break;
                        }
                        case "array": {
                          c = Zn;
                          break;
                        }
                        case "audio":
                          c = Xn;
                      }
                      return /* @__PURE__ */ a(
                        "span",
                        {
                          className: "inline-flex items-center gap-x-2 px-2 py-1 rounded-md",
                          style: {
                            ...n("gray.opacity.2")
                          },
                          children: [
                            i.replaceAll(/\..+$/gi, ""),
                            c && /* @__PURE__ */ e(Y, { icon: c })
                          ]
                        },
                        r
                      );
                    }),
                    joinComponent: /* @__PURE__ */ e(Y, { icon: ke })
                  }
                ) })
              ] }),
              /* @__PURE__ */ a("div", { className: "flex tools", children: [
                l && /* @__PURE__ */ e(
                  z,
                  {
                    icon: qn,
                    onClick: async () => {
                      const { response: i } = await le({
                        message: "are you sure about reset this setting",
                        buttons: ["No", "Yes"],
                        defaultId: 1
                      });
                      i && o && P.setOneFeild(o.settingId, "value", o.def);
                    }
                  }
                ),
                /* @__PURE__ */ e(
                  z,
                  {
                    onClick: () => {
                      t.set(null), I("findConfigurations");
                    },
                    icon: B
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e(k, {}),
            o && /* @__PURE__ */ a(T, { children: [
              /* @__PURE__ */ e(V, { className: "p-2 max-h-[150px]", children: /* @__PURE__ */ e(ve, { value: s }) }),
              /* @__PURE__ */ e(k, {})
            ] }),
            t.get && /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ e($s, { settingId: t.get }) })
          ]
        }
      )
    }
  );
}, Ws = ({ item: n, index: t }) => {
  const o = x(!1), l = x(!1), s = x(!1), i = x(0), { message: r } = n, m = N(), c = j("preferences/toastTime.number"), p = j("preferences/animation.boolean"), g = f.useMemo(() => n.time || c || 5, [c, n.time]);
  f.useEffect(() => {
    if (s.get) {
      const b = setTimeout(() => {
        n.id && bt.remove([n.id]), s.set(!1);
      }, 300);
      return () => {
        clearTimeout(b);
      };
    }
  }, [s.get, n]), f.useEffect(() => {
    let b = 0;
    const u = setInterval(() => {
      i.set(++b), b >= g && (s.set(!0), clearInterval(u));
    }, 1e3);
    return () => {
      clearInterval(u);
    };
  }, [g]), f.useEffect(() => {
    if (l.get) {
      const b = setTimeout(() => {
        l.set(!1);
      }, 3e3);
      return () => {
        clearTimeout(b);
      };
    }
  }, [l.get]);
  function h(b, u, v, d) {
    return n.type == "warning" ? u : n.type == "error" ? v : n.type == "success" ? d : b;
  }
  return /* @__PURE__ */ a(
    "div",
    {
      className: y("flex z-[100000] items-center justify-between p-2 opacity-100 scale-100", s.get && "opacity-0 scale-0", p && "transition-[transform,opacity] duration-300"),
      onMouseEnter: () => o.set(!0),
      onMouseLeave: () => o.set(!1),
      style: {
        ...m(t % 2 && "gray.opacity")
      },
      children: [
        /* @__PURE__ */ a("div", { className: "inline-flex items-center gap-1", children: [
          /* @__PURE__ */ e(
            Y,
            {
              icon: h(Ut, At, ns, Ot),
              style: {
                ...m({
                  color: h("notifay.info", "notifay.warning", "notifay.error", "notifay.success")
                })
              }
            }
          ),
          /* @__PURE__ */ e(ve, { value: r.toString() })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex items-center", children: [
          /* @__PURE__ */ e(
            "span",
            {
              className: y("relative rounded-full w-[30px] h-[30px] mx-2 inline-flex items-center justify-center"),
              style: {
                ...m("gray.opacity")
              },
              children: g - i.get
            }
          ),
          /* @__PURE__ */ a("div", { className: y("tools w-[0px] flex gap-1 items-center overflow-hidden", o.get && "w-[50px]", p && "transition-[width]"), children: [
            /* @__PURE__ */ e(
              C,
              {
                onClick: async () => {
                  l.set(!0), await navigator.clipboard.writeText(r.toString());
                },
                icon: l.get ? ze : Re
              }
            ),
            /* @__PURE__ */ e(
              C,
              {
                onClick: () => {
                  s.set(!0);
                },
                icon: B
              }
            )
          ] })
        ] })
      ]
    }
  );
}, Ys = () => {
  const n = bt.getAll(), t = N(), o = j("preferences/animation.boolean"), l = f.useMemo(() => Ws, []), s = j("toast/position.enum");
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
      children: /* @__PURE__ */ e(V, { className: "max-h-[400px]", children: n == null ? void 0 : n.map((i, r) => /* @__PURE__ */ e(l, { index: r, item: i }, i.id)) })
    }
  );
};
function Gs({ children: n }) {
  const t = j("visibility/header.boolean"), o = j("preferences/animation.boolean");
  return /* @__PURE__ */ a("div", { className: y("absolute bottom-0 inset-x-0 w-full border-solid border-transparent border-b top-0 flex flex-col", t && "top-[51px]", o && "transition-[top] duration-200"), children: [
    /* @__PURE__ */ e(ks, {}),
    /* @__PURE__ */ e("div", { className: "flex items-stretch h-full overflow-hidden", children: n })
  ] });
}
const Kt = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,} *$", qs = () => {
  const n = N(), t = O.getOneFeild("signupUseremail", "value"), o = x(""), l = x(""), s = A(
    "signup",
    async () => {
      if (!t) {
        L("Email is required", "error"), I("signupUseremail");
        return;
      }
      if (!yt(["signupUseremail"]).isValide) {
        L("Please fill the email correctly!", "error"), I("signupUseremail");
        return;
      }
      if (!o.get) {
        L("Password must be at least 6 characters", "error"), I("user-password");
        return;
      }
      if (o.get !== l.get) {
        L("Password and confirm password must be the same!", "error"), I("user-password-confirm");
        return;
      }
      await fs(X, t, o.get);
    },
    [t, o.get, l.get]
  );
  return /* @__PURE__ */ a(V, { className: "flex max-sm:flex-col items-center h-full", children: [
    /* @__PURE__ */ a("div", { className: "p-8 w-1/2 max-sm:w-full", children: [
      /* @__PURE__ */ a(
        "form",
        {
          onSubmit: async (i) => {
            i.preventDefault(), await $("signup");
          },
          children: [
            /* @__PURE__ */ a("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "email" }),
              /* @__PURE__ */ e(
                W,
                {
                  controls: {
                    [Kt]: {
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
            /* @__PURE__ */ a("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "Password" }),
              /* @__PURE__ */ e(Ee, { placeholder: "********", id: "user-password", state: o })
            ] }),
            /* @__PURE__ */ a("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "Confirm Password" }),
              /* @__PURE__ */ e(Ee, { placeholder: "********", id: "user-password-confirm", state: l })
            ] }),
            /* @__PURE__ */ e(S, { icon: (s == null ? void 0 : s.status) == "loading" ? Me : void 0, iconClassName: y("animate-spin"), type: "submit", className: "py-2 rounded-md w-full", children: "Sign Up" })
          ]
        }
      ),
      /* @__PURE__ */ a("p", { className: "mt-8 text-center text-sm", children: [
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
            onClick: (i) => {
              i.preventDefault(), R("focusedLoginView", 0);
            },
            children: "Login"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-8 w-1/2 max-sm:w-full", children: /* @__PURE__ */ a("div", { className: "flex flex-col gap-1", children: [
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
      /* @__PURE__ */ e("p", { className: "mb-4 capitalize", children: /* @__PURE__ */ e(U, { content: "water fetch is a platform give's the possiblity for doing more thing by dahbia card" }) }),
      /* @__PURE__ */ a("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12", children: /* @__PURE__ */ e("span", { className: "text-xl", children: "📦" }) }),
        /* @__PURE__ */ a("div", { className: "flex-1", children: [
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
      /* @__PURE__ */ a("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12", children: /* @__PURE__ */ e("span", { className: "text-xl", children: "💵" }) }),
        /* @__PURE__ */ a("div", { className: "flex-1", children: [
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
}, Xs = () => {
  const n = N(), t = O.getOneFeild("loginUseremail", "value"), o = x("");
  A(
    "login",
    async () => {
      if (!t) {
        L("Email is required", "error");
        return;
      }
      if (!o.get) {
        L("Password must be at least 6 characters", "error");
        return;
      }
      await Ze(X, t, o.get);
    },
    [t, o.get]
  );
  const l = A(
    "sign-in-facebook",
    async () => {
      await _e(X, new gs());
    },
    []
  ), s = A(
    "sign-in-google",
    async () => {
      await _e(X, new bs());
    },
    []
  );
  return /* @__PURE__ */ a(V, { className: "flex max-sm:flex-col items-center", children: [
    /* @__PURE__ */ a("div", { className: "p-8 w-1/2 max-sm:w-full", children: [
      /* @__PURE__ */ a(
        "form",
        {
          onSubmit: async (i) => {
            if (i.preventDefault(), t && o.get)
              try {
                await Ze(X, t, o.get);
              } catch {
                L("Password Or Email Is Incorrect 😴", "error");
              }
          },
          children: [
            /* @__PURE__ */ a("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "Username or email" }),
              /* @__PURE__ */ e(
                W,
                {
                  controls: {
                    [Kt]: {
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
            /* @__PURE__ */ a("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "Password" }),
              /* @__PURE__ */ e(Ee, { placeholder: "********", state: o })
            ] }),
            /* @__PURE__ */ e(S, { type: "submit", className: "py-2 rounded-md w-full", children: "Login" })
          ]
        }
      ),
      /* @__PURE__ */ a("div", { className: "flex justify-evenly items-center my-3", children: [
        /* @__PURE__ */ e(
          z,
          {
            iconClassName: y((s == null ? void 0 : s.status) == "loading" && "animate-spin"),
            icon: (s == null ? void 0 : s.status) == "loading" ? Me : ss,
            onClick: async () => {
              await $("sign-in-google");
            }
          }
        ),
        /* @__PURE__ */ e(
          z,
          {
            iconClassName: y((l == null ? void 0 : l.status) == "loading" && "animate-spin"),
            icon: (l == null ? void 0 : l.status) == "loading" ? Me : os,
            onClick: async () => {
              await $("sign-in-facebook");
            }
          }
        )
      ] }),
      /* @__PURE__ */ a("p", { className: "text-center text-sm", children: [
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
            onClick: (i) => {
              i.preventDefault(), R("focusedLoginView", 1);
            },
            children: "Sign up"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-8 w-1/2 max-sm:w-full", children: /* @__PURE__ */ a("div", { className: "flex flex-col gap-1", children: [
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
      /* @__PURE__ */ e("p", { className: "mb-4 capitalize", children: /* @__PURE__ */ e(U, { content: "water fetch is a platform give's the possiblity for doing more thing by dahbia card" }) }),
      /* @__PURE__ */ a("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12", children: /* @__PURE__ */ e("span", { className: "text-xl", children: "📦" }) }),
        /* @__PURE__ */ a("div", { className: "flex-1", children: [
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
      /* @__PURE__ */ a("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12", children: /* @__PURE__ */ e("span", { className: "text-xl", children: "💵" }) }),
        /* @__PURE__ */ a("div", { className: "flex-1", children: [
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
}, Zs = () => {
  const n = Z("focusedLoginView");
  return /* @__PURE__ */ e(kn, { focused: n ?? 0, pages: [/* @__PURE__ */ e(Xs, {}), /* @__PURE__ */ e(qs, {})] });
}, Js = ({ projectId: n }) => {
  var i, r;
  const t = Le(), { data: o, error: l, status: s } = vt(async () => {
    if (t != null && t.uid) {
      const { docs: m } = await Bt(Ht(Pe, "users", t.uid, "projects", n, "payouts"));
      return m;
    } else
      return [];
  }, [n, t]);
  return f.useEffect(() => {
    s.set("idle");
  }, []), f.useEffect(() => {
    s.get == "error" && l.get && L("Error When Loading The Payouts", "error");
  }, [s.get, l.get]), /* @__PURE__ */ a(T, { children: [
    s.get == "success" && /* @__PURE__ */ a(T, { children: [
      !!((i = o.get) != null && i.length) && /* @__PURE__ */ e(
        De,
        {
          data: o.get,
          focusId: "payouts-list",
          itemSize: 50,
          slotId: "payouts-list",
          component: ({ style: m, data: c }) => {
            const p = c.data();
            return /* @__PURE__ */ a(
              "div",
              {
                style: {
                  ...m
                },
                className: "flex justify-between items-center gap-1 p-3",
                children: [
                  /* @__PURE__ */ a("span", { children: [
                    p.price,
                    "DA"
                  ] }),
                  /* @__PURE__ */ e(S, { onClick: async () => {
                  }, children: /* @__PURE__ */ e(U, { content: "Prepare" }) })
                ]
              }
            );
          }
        }
      ),
      !((r = o.get) != null && r.length) && /* @__PURE__ */ e("div", { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ e("h1", { children: "No Payouts In Your Account 😔" }) })
    ] }),
    s.get == "loading" && /* @__PURE__ */ e(ne, { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2" })
  ] });
}, _s = () => {
  var w, E, M;
  const n = N(), t = Le(), o = xt(), l = x(!1), s = x(void 0), i = j("preferences/animation.boolean"), r = A(
    "change-my-name",
    async () => {
      s.get && t && await hs(
        ps(Pe, "users", t.uid),
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
    $("change-my-name");
  }, [s.get, t]), f.useEffect(() => {
    I("userLoginDisplayName");
  }, [l.get]), f.useEffect(() => {
    l.set(!1);
  }, [s.get]);
  const m = A(
    "profile-change-image",
    async () => {
      if (!t)
        return;
      const F = Vn(t.photoURL && "Delete", "Cancel", "Upload", "Open Camera"), { response: G } = await le({
        title: "Profile Picture",
        message: "Change your profile picture",
        buttons: F,
        defaultId: 2
      }), oe = F[G];
      if (oe == "Delete") {
        await Ie(t, {
          photoURL: null
        });
        return;
      }
      if (oe == "Cancel")
        return;
      if (oe == "Upload")
        return new Promise((Ce) => {
          const ae = document.createElement("input");
          ae.type = "file", ae.accept = "image/*", ae.onchange = async () => {
            var We;
            const $e = (We = ae.files) == null ? void 0 : We[0];
            if (!$e)
              return;
            let qt = ["users", t.uid, "profile", je()].filter(Boolean).join("/"), Ke = Qe(et, qt);
            await tt(Ke, $e);
            const Xt = await nt(Ke);
            return await Ie(t, {
              photoURL: Xt
            }), Ce("Done");
          }, ae.click();
        });
      const Be = await wt("take");
      if (!Be)
        return;
      const Wt = await fetch(Be).then((Ce) => Ce.blob());
      let Yt = ["users", t.uid, "profile", je()].filter(Boolean).join("/"), He = Qe(et, Yt);
      await tt(He, Wt);
      const Gt = await nt(He);
      await Ie(t, {
        photoURL: Gt
      });
    },
    [t]
  ), c = x(!1), p = O.getOneFeild("newUserPhoneNumber", "value"), g = x(null), h = A(
    "send-verification-code",
    async () => {
      if (p && !yt(["newUserPhoneNumber"]).isValide) {
        L("Invalid Phone Number", "error");
        return;
      }
    },
    [p, t]
  );
  f.useEffect(() => {
    c.get && I("newUserPhoneNumber");
  }, [c.get]);
  const {
    data: b,
    status: u,
    error: v
  } = vt(async () => {
    if (t) {
      const { docs: F } = await Bt(Ht(Pe, "users", t.uid, "projects"));
      return F;
    } else
      return [];
  }, [t]);
  f.useEffect(() => {
    u.set("idle");
  }, []), f.useEffect(() => {
    u.get == "error" && v.get && L("Error Loading Your Projects", "error");
  }, [v.get, u.get]);
  const d = x(null);
  return /* @__PURE__ */ a("div", { className: "flex flex-col h-full overflow-hidden", children: [
    /* @__PURE__ */ e("div", { className: "p-2", children: /* @__PURE__ */ a("div", { className: "flex max-sm:flex-col items-center gap-3", children: [
      /* @__PURE__ */ a(
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
            $("profile-change-image");
          },
          children: [
            (m == null ? void 0 : m.status) != "loading" && /* @__PURE__ */ e("img", { src: (w = t == null ? void 0 : t.photoURL) == null ? void 0 : w.toString(), className: "w-full h-full object-cover" }),
            " ",
            !(t != null && t.photoURL) && /* @__PURE__ */ e(Te, { icon: as }),
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
      /* @__PURE__ */ a("div", { className: "max-sm:flex max-sm:flex-col max-sm:justify-cente", children: [
        (r == null ? void 0 : r.status) != "loading" && /* @__PURE__ */ a(T, { children: [
          !l.get && /* @__PURE__ */ e(
            "h1",
            {
              className: "text-2xl",
              onClick: () => {
                l.set(!0);
              },
              children: (o == null ? void 0 : o.name) || "No Name"
            }
          ),
          l.get && /* @__PURE__ */ e(
            Ae,
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
        (r == null ? void 0 : r.status) == "loading" && /* @__PURE__ */ e(Oe, {}),
        /* @__PURE__ */ e("p", { children: o == null ? void 0 : o.email }),
        o && /* @__PURE__ */ a("div", { className: "flex items-center", children: [
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
          c.get && !g.get && /* @__PURE__ */ a("div", { className: "flex items-center gap-1 p-2", children: [
            /* @__PURE__ */ e(
              W,
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
              S,
              {
                className: "px-5 py-1",
                icon: is,
                iconClassName: y("animate-spin", (h == null ? void 0 : h.status) != "loading" && "hidden"),
                onClick: async () => {
                  $("send-verification-code");
                },
                children: "Verifie"
              }
            ),
            /* @__PURE__ */ e(
              S,
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
          c.get && g.get && /* @__PURE__ */ a("div", { className: "flex items-center gap-1 p-2", children: [
            /* @__PURE__ */ e(W, { inputName: "verificationCode" }),
            /* @__PURE__ */ e(S, { onClick: async () => {
            }, children: "Ok" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ e(k, {}),
    /* @__PURE__ */ a(V, { className: "relative", children: [
      u.get == "success" && /* @__PURE__ */ a(T, { children: [
        /* @__PURE__ */ e("div", { className: "flex flex-wrap", children: (E = b.get) == null ? void 0 : E.map((F, G) => /* @__PURE__ */ e("div", { className: "flex justify-between items-center p-3 w-1/3 max-sm:w-1/2", children: /* @__PURE__ */ a(ce, { className: "w-full", children: [
          /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ e("h1", { className: "font-bold text-lg", children: F.id }) }),
          /* @__PURE__ */ e(k, {}),
          /* @__PURE__ */ a("div", { className: "flex justify-between items-center p-2", children: [
            /* @__PURE__ */ e("span", {}),
            /* @__PURE__ */ e(
              z,
              {
                onClick: () => {
                  d.set(F.id);
                },
                icon: ke
              }
            )
          ] })
        ] }) }, G)) }),
        !((M = b.get) != null && M.length) && /* @__PURE__ */ e("div", { className: "flex justify-center items-center w-full h-full capitalize", children: /* @__PURE__ */ e(U, { content: "no water fetch projects you sigin" }) })
      ] }),
      u.get == "loading" && /* @__PURE__ */ e(ne, { className: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" }),
      /* @__PURE__ */ a(
        "div",
        {
          style: {
            ...n("primary.background")
          },
          className: y("right-0 absolute inset-y-0 left-full", d.get && "left-0", i && "transition-[left]"),
          children: [
            /* @__PURE__ */ a("div", { className: "flex items-center gap-3 p-3", children: [
              /* @__PURE__ */ e(
                z,
                {
                  icon: ls,
                  onClick: () => {
                    d.set(null);
                  }
                }
              ),
              /* @__PURE__ */ e("h1", { className: "font-bold text-4xl", children: d.get })
            ] }),
            /* @__PURE__ */ e(k, {}),
            d.get && /* @__PURE__ */ e(Js, { projectId: d.get })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e(k, {}),
    /* @__PURE__ */ a("div", { className: "flex justify-end gap-2 p-2", children: [
      /* @__PURE__ */ e(
        S,
        {
          className: "max-sm:w-full sm:w-1/4 capitalize",
          style: {
            ...n("error")
          },
          onClick: async () => {
            const { response: F } = await le({
              title: "Delete Account",
              message: "Are you sure you want to delete your account?",
              buttons: ["No", "Yes"],
              defaultId: 1
            });
            F && (t == null || t.delete(), await Je(X));
          },
          children: /* @__PURE__ */ e(U, { content: "delete" })
        }
      ),
      /* @__PURE__ */ e(
        S,
        {
          className: "max-sm:w-full sm:w-1/4 capitalize",
          style: {
            ...n("error")
          },
          onClick: async () => {
            const { response: F } = await le({
              title: "Logout",
              message: "Are you sure you want to logout?",
              buttons: ["No", "Yes"],
              defaultId: 1
            });
            F ? await Je(X) : L("Ignore Logout", "error");
          },
          children: /* @__PURE__ */ e(U, { content: "logout" })
        }
      )
    ] })
  ] });
}, Qs = () => {
  const n = Le();
  return /* @__PURE__ */ e("div", { className: "relative w-full h-full overflow-hidden", children: /* @__PURE__ */ e(
    Cn,
    {
      render: async () => (await Un(1e3), /* @__PURE__ */ a(T, { children: [
        n && /* @__PURE__ */ e(_s, {}),
        !n && /* @__PURE__ */ e(Zs, {})
      ] })),
      loading: /* @__PURE__ */ e(ne, { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2" })
    }
  ) });
}, eo = () => {
  const n = pe.getTemp("profile-view");
  return /* @__PURE__ */ e(J, { hidden: !n, children: /* @__PURE__ */ a(ce, { className: "w-[80vw] h-[80vh]", children: [
    /* @__PURE__ */ a("div", { className: "flex justify-between items-center p-3", children: [
      /* @__PURE__ */ e("h1", { className: "text-3xl", children: /* @__PURE__ */ e(U, { content: "Your Profile" }) }),
      /* @__PURE__ */ e(
        z,
        {
          icon: B,
          onClick: () => {
            pe.setTemp("profile-view", !1);
          }
        }
      )
    ] }),
    /* @__PURE__ */ e(k, {}),
    /* @__PURE__ */ e(V, { children: /* @__PURE__ */ e(Qs, {}) })
  ] }) });
}, to = [
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
function ho() {
  const n = xt(), t = x(null), o = x(void 0), l = x(null), s = x(void 0), i = x(void 0), r = x(void 0), m = x(null), c = x(null), p = x(null), g = x(void 0), h = x(null), b = x(!1), u = P.getAll(), v = N();
  return /* @__PURE__ */ a(T, { children: [
    /* @__PURE__ */ e(Ns, { children: /* @__PURE__ */ a("h1", { className: "w-full text-center capitalize", children: [
      "click in the link to see your account ",
      n && "(" + n.name + ")",
      /* @__PURE__ */ a(
        we,
        {
          onClick: (d) => {
            d.preventDefault(), Ye();
          },
          children: [
            /* @__PURE__ */ e(Te, { icon: rs, iconClassName: "mr-1 ml-2" }),
            "here"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ a(Gs, { children: [
      /* @__PURE__ */ e(Es, { children: "Somthing in the primary Side" }),
      /* @__PURE__ */ e(V, { children: [
        {
          label: "Buttons",
          elements: [
            {
              jsxElement: /* @__PURE__ */ e(
                Sn,
                {
                  onClick: () => {
                    L("You Clic Rate Now 🙃", "info");
                  }
                }
              ),
              label: "New Outher Button"
            },
            {
              jsxElement: /* @__PURE__ */ e(In, { children: "Large Button" }),
              label: "Large Button"
            },
            {
              jsxElement: /* @__PURE__ */ e(S, { children: "Ok" }),
              label: "Button",
              definition: ""
            },
            {
              jsxElement: /* @__PURE__ */ e(z, { icon: Xe }),
              label: "Circle Tip"
            },
            {
              jsxElement: /* @__PURE__ */ e(C, { icon: Xe }),
              label: "Tip"
            },
            {
              jsxElement: /* @__PURE__ */ e(
                Fn,
                {
                  className: "text-4xl",
                  isActive: b.get,
                  onClick: () => {
                    b.set(!b.get);
                  },
                  icon: cs
                }
              ),
              label: "Tab"
            },
            {
              jsxElement: /* @__PURE__ */ e(jn, {}),
              label: "Dark Light Icon",
              definition: "Recommended To Use In The Header And One Time In The App"
            }
          ]
        },
        {
          label: "Inputs",
          elements: [
            {
              jsxElement: /* @__PURE__ */ e(W, { className: "h-[200px]", multiLines: !0, inputName: "exmple", propositions: ["Dog", "Cat", "Link", "Simple", "Word", "Hi"], placeholder: "Input Exmple" }),
              label: "Feild"
            }
          ]
        },
        {
          label: "Fields",
          elements: [
            {
              jsxElement: /* @__PURE__ */ e(Ct, { state: t, id: "boolean-field" }),
              label: "Boolean Field"
            },
            {
              jsxElement: /* @__PURE__ */ e(Ae, { state: o, id: "string-field" }),
              label: "String Field"
            },
            {
              jsxElement: /* @__PURE__ */ e(Et, { state: g, id: "password-field" }),
              label: "Password Field"
            },
            {
              jsxElement: /* @__PURE__ */ e(It, { state: h, id: "number-field" }),
              label: "Number Field"
            },
            {
              jsxElement: /* @__PURE__ */ e(
                Ft,
                {
                  config: {
                    properties: ["multiSelections"]
                  },
                  state: l,
                  id: "file-field"
                }
              ),
              label: "File Field"
            },
            {
              jsxElement: /* @__PURE__ */ e(
                jt,
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
                  state: r,
                  id: "pin-field"
                }
              ),
              label: "Pin Field"
            },
            {
              jsxElement: /* @__PURE__ */ e(Pt, { id: "recorder-field", state: p }),
              label: "Recorder Field"
            },
            {
              jsxElement: /* @__PURE__ */ e(St, { state: i, id: "array-field" }),
              label: "Array Field"
            },
            {
              jsxElement: /* @__PURE__ */ e(Mt, { state: m, id: "date-field" }),
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
              jsxElement: /* @__PURE__ */ e(Mn, { length: 10, starts: 2 }),
              label: "Starts"
            },
            {
              jsxElement: /* @__PURE__ */ e(T, {}),
              label: ""
            },
            {
              jsxElement: /* @__PURE__ */ e(ce, { className: "w-fit", children: /* @__PURE__ */ e("p", { className: "p-2", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, tempora. Quod, debitis aut eveniet illo nemo adipisci atque veniam eum distinctio rerum dolore facere magnam libero dolor ratione omnis explicabo." }) }),
              label: "Card"
            },
            {
              jsxElement: /* @__PURE__ */ e(k, {}),
              label: "Line"
            }
          ]
        },
        {
          label: "Layouts",
          elements: [
            {
              jsxElement: /* @__PURE__ */ e(
                S,
                {
                  onClick: () => {
                    const d = Rn(to).value;
                    d && ln(d);
                  },
                  children: "Show Notification"
                }
              ),
              label: "Notification"
            },
            {
              jsxElement: /* @__PURE__ */ e(
                S,
                {
                  onClick: async () => {
                    await le({
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
                S,
                {
                  onClick: () => {
                    Ye();
                  },
                  children: "Show Profile"
                }
              ),
              label: "Show Profile"
            },
            {
              jsxElement: /* @__PURE__ */ a("div", { className: "flex flex-col justify-between h-full", children: [
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
                /* @__PURE__ */ e(k, {}),
                /* @__PURE__ */ e(
                  S,
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
                S,
                {
                  onClick: () => {
                    L("This is a toast", "info");
                  },
                  children: "Show Toast"
                }
              ),
              label: "Toast"
            },
            {
              jsxElement: /* @__PURE__ */ e(
                S,
                {
                  onClick: async () => {
                    wt("take");
                  },
                  children: "Show Camera"
                }
              ),
              label: "Show Camera"
            },
            {
              jsxElement: /* @__PURE__ */ e(
                S,
                {
                  onClick: ({ clientX: d, clientY: w }) => {
                    Pn({
                      x: d,
                      y: w,
                      menu: zn(15).map((E, M) => ({
                        label: `Item ${M}`,
                        click() {
                          L(`Menu Item ${M} Clicked`, "info");
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
              jsxElement: /* @__PURE__ */ e(S, { onClick: async () => {
              }, children: "Show A Pdf" }),
              label: "Pdf"
            },
            {
              jsxElement: /* @__PURE__ */ e(
                S,
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
              jsxElement: /* @__PURE__ */ e("div", { className: "relative h-[20px]", children: /* @__PURE__ */ e(Oe, {}) }),
              label: "Line Loading"
            }
          ]
        }
      ].map(({ label: d, elements: w }, E) => /* @__PURE__ */ a(T, { children: [
        /* @__PURE__ */ e("div", { className: "p-3 max-md:w-full", children: /* @__PURE__ */ e("h1", { className: "font-bold text-4xl max-md:text-center", children: d }) }),
        /* @__PURE__ */ e(k, {}),
        /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-3 p-3 max-md:w-full", children: w.map(({ definition: M, jsxElement: F, label: G }, oe) => /* @__PURE__ */ a(ce, { className: "w-fit max-md:w-full min-w-[200px] max-w-[500px] h-fit min-h-[200px]", children: [
          /* @__PURE__ */ e("div", { className: "p-2", children: /* @__PURE__ */ e("h1", { className: "text-2xl", children: G }) }),
          /* @__PURE__ */ e(k, {}),
          /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-2 w-full h-full", children: F }),
          M && /* @__PURE__ */ a(T, { children: [
            /* @__PURE__ */ e(k, {}),
            /* @__PURE__ */ e(V, { className: "p-2", children: /* @__PURE__ */ e(ve, { value: M }) })
          ] })
        ] }, oe)) }),
        /* @__PURE__ */ e(k, {})
      ] }, E)) }),
      /* @__PURE__ */ e(Os, { children: "Somthing in the secondry Side" })
    ] }),
    /* @__PURE__ */ e(eo, {}),
    /* @__PURE__ */ e(Hs, {}),
    /* @__PURE__ */ e(js, {}),
    /* @__PURE__ */ e(Ks, {}),
    /* @__PURE__ */ e(ys, {}),
    /* @__PURE__ */ e(Ds, {}),
    /* @__PURE__ */ e(vs, {}),
    /* @__PURE__ */ e(Ys, {}),
    /* @__PURE__ */ e(Ts, {}),
    /* @__PURE__ */ e(Ps, {}),
    /* @__PURE__ */ e(Ln, {}),
    /* @__PURE__ */ e(Dn, {})
  ] });
}
const ie = {
  commandId: "keyboard.commandId",
  position: "keyboard.editingPosition"
}, ct = "key.changeWhen", no = f.memo(({ commandId: n }) => /* @__PURE__ */ e(
  Dt,
  {
    joinComponent: /* @__PURE__ */ e(Y, { icon: ke }),
    list: n.split(".").map((t, o) => /* @__PURE__ */ e("span", { className: "font-bold text-xl capitalize", children: me(t, "camel", "normal") }, o))
  }
), ge), so = ({ keyPanding: n }) => {
  const { when: t, value: o, keyId: l } = n, s = x(!1), i = x(""), r = N(), m = x(!1);
  return f.useEffect(() => {
    s.get && I(ct);
  }, [s.get]), /* @__PURE__ */ a(
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
        ...r(m.get && "gray.opacity")
      },
      children: [
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "flex justify-end w-[150px]", children: /* @__PURE__ */ a(
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
              ...r({
                borderColor: "borders"
              })
            },
            children: [
              /* @__PURE__ */ e(D, { title: "remove this keypanding", children: /* @__PURE__ */ e(
                C,
                {
                  onClick: () => {
                    q.remove([l]), I("edit-keyPanding");
                  },
                  icon: B
                }
              ) }),
              /* @__PURE__ */ e(D, { title: "copy when value", children: /* @__PURE__ */ e(
                C,
                {
                  icon: Re,
                  onClick: async () => {
                    t && await navigator.clipboard.writeText(t);
                  }
                }
              ) }),
              /* @__PURE__ */ e(D, { title: "edit when", children: /* @__PURE__ */ e(
                C,
                {
                  onClick: () => {
                    s.set(!0), t && i.set(t);
                  },
                  icon: Tt
                }
              ) }),
              /* @__PURE__ */ e(D, { title: `change to ${n.repeation ? "unrepeated" : "repeated"} key pending`, children: /* @__PURE__ */ e(
                C,
                {
                  onClick: () => {
                    q.setOneFeild(l, "repeation", !n.repeation);
                  },
                  icon: n.repeation ? ds : ke
                }
              ) }),
              /* @__PURE__ */ e(D, { title: n.type == "up" ? "switch to down press" : "switch to up press", children: /* @__PURE__ */ e(
                C,
                {
                  onClick: () => {
                    n.keyId && q.setOneFeild(n.keyId, "type", n.type == "up" ? "down" : "up");
                  },
                  icon: n.type == "up" ? ms : us
                }
              ) })
            ]
          }
        ) }) }),
        /* @__PURE__ */ e("div", { className: "px-2", children: o && /* @__PURE__ */ e(be, { shortcut: o }) }),
        /* @__PURE__ */ a("div", { className: "text-xs col", children: [
          !s.get && (t || " - "),
          s.get && /* @__PURE__ */ e(
            Tn,
            {
              style: {
                backgroundColor: "transparent",
                borderColor: "0px"
              },
              value: i.get,
              onValueChange: i.set,
              id: ct,
              onFocus: (c) => {
                c.currentTarget.select();
              },
              onKeyDown: (c) => {
                c.key.toLowerCase() == "enter" && c.currentTarget.blur();
              },
              onBlur: (c) => {
                q.setOneFeild(l, "when", c.currentTarget.value), s.set(!1);
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
function po() {
  const n = Z(ie.commandId), t = x(""), o = Ge.getAll(), l = Ge.getEntity(), s = f.useMemo(() => n && l[n] || null, [l, n]), i = q.getAll(), r = f.useMemo(() => i.filter(({ value: h }) => h), [i]), m = f.useMemo(() => s ? de.join(s, i, "commandId->command") : null, [s, i]), c = f.useMemo(() => o.map((h) => ({
    command: h,
    keys: de.join(h, i, "commandId->command")
  })), [r]), p = f.useMemo(() => c.filter(({ keys: h }) => h.some(({ value: b }) => b == t.get)), [c, t]), g = N();
  return f.useEffect(() => {
    t.set("");
  }, [s]), /* @__PURE__ */ e(
    J,
    {
      hidden: !s,
      onClick: (h) => {
        h.currentTarget == h.target && (R(ie.commandId, null), R(ie.position, null));
      },
      onLoadContent: () => {
        s && I("edit-keyPanding");
      },
      children: /* @__PURE__ */ a(
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
              q.add([
                {
                  command: s.commandId,
                  value: t.get,
                  keyId: je()
                }
              ]), t.set("");
              return;
            }
            const u = Bn.fromEvent(h);
            t.set(u);
          },
          children: [
            /* @__PURE__ */ a("div", { className: "relative flex justify-center items-center gap-3 p-2", children: [
              (s == null ? void 0 : s.commandId) && /* @__PURE__ */ e(no, { commandId: s.commandId }),
              /* @__PURE__ */ e(
                C,
                {
                  className: y(`
              absolute
              right-2
              top-1/2
              transform
              -translate-y-1/2
            `),
                  onClick: async () => {
                    R(ie.commandId, null), R(ie.position, null), I("findConfigurations");
                  },
                  icon: B
                }
              )
            ] }),
            /* @__PURE__ */ e(k, {}),
            /* @__PURE__ */ a("div", { className: "flex flex-col flex-wrap items-center", children: [
              m == null ? void 0 : m.map((h, b) => /* @__PURE__ */ e(so, { keyPanding: h }, b)),
              !(m != null && m.length) && /* @__PURE__ */ e("div", { className: "py-2", children: "no combinition defined" })
            ] }),
            /* @__PURE__ */ e(k, {}),
            /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-2 text-4xl", children: /* @__PURE__ */ e(be, { shortcut: t.get }) }),
            !!p.length && /* @__PURE__ */ a("div", { children: [
              /* @__PURE__ */ e(k, {}),
              /* @__PURE__ */ e("div", { className: "flex justify-center p-2", children: /* @__PURE__ */ a(we, { children: [
                /* @__PURE__ */ e(U, { content: "existe" }),
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
  ys as CameraView,
  vs as Commands,
  uo as DevReadingHTML,
  xs as FindCommandInput,
  ws as FindSettingFeild,
  eo as FixedProfileView,
  Ns as Header,
  ks as HeaderNotification,
  Ss as HeaderSettings,
  Is as KeyboardShortcuts,
  js as KeyboardView,
  Es as LeftSide,
  fo as LeftSideView,
  Zs as LoginContent,
  Xs as LoginPage,
  Ps as MenuList,
  Ls as NotifaysSlot,
  Ds as Notifications,
  Ts as PDFView,
  _s as ProfileContent,
  Qs as ProfileView,
  Os as RightSide,
  Ks as SettingUpdateView,
  $s as SettingUpdating,
  Rs as Settings,
  As as SettingsList,
  Bs as SettingsSide,
  Us as SettingsTree,
  Hs as SettingsView,
  qs as SignupPage,
  ho as Test,
  Ys as Toasts,
  po as UpdateKeyboardShortcut,
  Vs as UserSetting,
  Gs as Window
};
