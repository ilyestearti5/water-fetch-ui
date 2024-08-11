import { j as e, a, E as U } from "./EmptyComponent-9ba5fd59.mjs";
import { d as ke, c as j, u as w, i as at, j as Ut, k as rt, t as Vt, l as Rt, m as Y, g as M, n as zt, s as L, o as it, p as se, e as $, f as E, q as O, r as B, h as lt, v as _, w as fe, x as $t, a as x, y as ct, z as X, b as J, A as dt, B as Bt, C as Ht, D as K, E as Kt, F as de, G as Wt, H as T, I as he, J as mt, K as Yt, L as ut, M as D, N as ft, O as qt, P as W, Q as Be, R as Pe, S as ht, T as Gt, U as Xt, V as Se, W as pt, X as gt, Y as yt, Z as He, _ as Ke, $ as Zt, a0 as _t, a1 as Ie, a2 as Fe, a3 as We, a4 as Ye, a5 as qe, a6 as Ge, a7 as Jt, a8 as Qt, a9 as Xe } from "./index-e2b4fc99.mjs";
import { B as G, S as le, k as en, g as oe, c as q, L as k, x as ae, l as tn, T as P, a as A, F as H, X as nn, _ as N, U as V, o as Ee, K as ge, i as ye, H as sn, y as be, I as je, h as z, w as bt, b as vt, V as on, W as an, a0 as rn, a1 as xt, r as ln, j as cn, N as dn, D as mn, f as un, d as fn, E as hn, O as pn, Y as wt, G as gn, p as yn, q as bn, P as vn, m as xn, Q as wn, R as Nn, u as Cn, J as Nt, a2 as ue, M as Ct, a3 as Me, A as ve, C as re, z as kn, e as In, n as Sn, $ as Fn, v as Mn } from "./ViewPage-35a8f40f.mjs";
import m from "react";
import { h as ie, m as Z, i as ce, s as I, t as b, j as Oe, k as xe, l as De, e as R, n as Te, g as kt, D as Ln, o as Pn, p as En, q as Ae, u as jn, v as It, w as On, x as St, y as Ft, z as Dn, A as pe, B as Tn, C as Mt, E as An, F as Lt, G as Un, H as Ze, I as Vn, J as we, K as Rn, L as zn, M as $n, N as Bn, O as Hn, P as Kn, Q as Wn, R as Yn, T as qn, U as Le, V as Gn, W as Xn, X as Zn, Y as _n, Z as Jn, _ as Qn, $ as es, a0 as ts, S as ns, a1 as ss, a2 as os, a3 as as } from "./index-c007ee83.mjs";
import "react-dom";
function rs() {
  const n = ke.getTemp("type"), t = ke.getTemp("id");
  return j(
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
        const i = r.toDataURL("image/jpeg");
        ke.setTemp("result", i);
      }
    },
    [n, t]
  ), /* @__PURE__ */ e(G, { hidden: !t, children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(le, { temp: "camera", max: () => innerHeight, min: () => 200, position: "right", children: /* @__PURE__ */ e(en, {}) }) }) });
}
function is() {
  const n = oe("press ? for help");
  return /* @__PURE__ */ e(q, { "aria-multiline": !1, placeholder: `${n} 😊`, inputName: "findCommand" });
}
function ls() {
  const n = w(), t = at(), o = Ut(), r = m.useMemo(() => {
    const y = rt.getState();
    return o.map((v) => ({
      command: v,
      keys: ie.join(v, t, "commandId->command")
    })).filter((v) => v.keys.filter((C) => {
      if (!C.when)
        return !0;
      try {
        return Vt(C.when)({
          state: y,
          focused: null
        });
      } catch {
        return !1;
      }
    }).length || !v.keys.length);
  }, [t, o]), s = Rt(), i = Y("commandId"), l = M("commands/enum/prefixes.object"), d = Y("commands.isLoading"), c = zt.getAll(), h = m.useMemo(() => {
    const y = Object.entries(l || {}).map(([p, C]) => ({
      key: p,
      settingKey: `${C}.enum`,
      value: C
    })), v = {};
    return ie.fullJoinOne(y, s, "settingKey->settingId").forEach(({ data: p, joinTo: C }) => {
      var S, Q;
      v[p.key] = {
        lines: (Q = (S = C == null ? void 0 : C.config) == null ? void 0 : S.list) == null ? void 0 : Q.map(({ value: F, content: ee }) => ({
          id: F,
          content: ee,
          checked: (C == null ? void 0 : C.value) == F
        })),
        // desc: "commands/enum/prefixes.object"
        onSubmit(F) {
          L.setOneFeild(p.settingKey, "value", F.id);
        }
      };
    }), Z(
      {
        commands: {
          lines: r.map(({ command: p, keys: C }) => ({
            content: p.label || p.commandId,
            keyPanding: C.map(({ value: S }) => S),
            id: p.commandId
          })),
          onSubmit(p) {
            it(p.id);
          }
        },
        settings: {
          lines: s.map(({ name: p, settingId: C, desc: S }) => ({
            id: C,
            tools: [],
            content: p || C,
            sub: S
          })),
          onSubmit(p) {
            se(p.id);
          }
        },
        actions: {
          lines: c.map(({ actionId: p, status: C }) => ({
            content: `${ce(p.replaceAll(/[^a-z0-9A-Z]/gi, " ").replaceAll(/ +/gi, " "), void 0, "normal")} ${C ? "[running...]" : ""}`,
            id: p
          })),
          onSubmit(p) {
            p.id && $(p.id);
          }
        }
      },
      v
    );
  }, [r, s, l, c]), g = E.getOneFeild("findCommand", "value"), f = m.useMemo(() => !!(g != null && g.match(/^ *\?/)), [g]), u = m.useMemo(() => Z(
    f && {
      help: {
        lines: Object.entries(h).map(([y]) => ({
          id: y,
          content: y
        })),
        onSubmit(y) {
          O("commandId", y.id);
        }
      }
    },
    !f && h
  ), [h, g, f]);
  return m.useEffect(() => {
    i && f && O("commandId", "help");
  }, [i, g, f]), m.useEffect(() => {
    B.setOneFeild("cmds/list", "focused", 0);
  }, [g]), /* @__PURE__ */ e(
    G,
    {
      onLoadContent: () => {
        I("findCommand");
      },
      onPointerDown: (y) => {
        y.currentTarget == y.target && O("commandId", null);
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
          className: b("absolute top-[37px] left-1/2 rounded-xl transform -translate-x-1/2 w-[max(50vw,400px)] shadow-lg border border-solid border-transparent overflow-hidden"),
          children: [
            /* @__PURE__ */ a(
              "div",
              {
                className: "transition-[height]",
                style: Z(
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
                          background: lt("to right", "gray.opacity", "transparent", "gray.opacity")
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
                  /* @__PURE__ */ e(is, {}),
                  d && /* @__PURE__ */ e(ae, {})
                ]
              }
            ),
            /* @__PURE__ */ e(k, {}),
            /* @__PURE__ */ e(tn, { data: u })
          ]
        }
      )
    }
  );
}
function Xs() {
  const n = Y("dev.html.hoverPosition"), t = w();
  return /* @__PURE__ */ e(U, { children: n && /* @__PURE__ */ e(
    "div",
    {
      className: b(`
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
function cs() {
  const n = _.getOneFeild("settings", "focused"), t = fe.getTemp("config"), o = E.getOneFeild("findConfigurations", "value");
  $t("findConfigurations");
  const r = w(), s = Y("configurations.found.length"), i = m.useMemo(() => ce(n || "no settings focused", "camel", "normal"), [n]), l = oe(`search ${i} in list`), d = oe(i), c = x(!1), h = E.getOneFeild("findConfigurations-local", "value");
  return ct(
    () => {
      typeof h == "string" && E.setOneFeild("findConfigurations", "value", h);
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
      children: /* @__PURE__ */ a("div", { className: "relative w-full", children: [
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
          P,
          {
            title: "clear",
            onClick: () => {
              E.setOneFeild("findConfigurations-local", "value", "");
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
                  ...r("primary", {
                    color: "primary.content"
                  })
                },
                children: [
                  /* @__PURE__ */ a("span", { children: [
                    /* @__PURE__ */ e(A, { content: "found" }),
                    " ",
                    s,
                    " ",
                    /* @__PURE__ */ e(A, { content: d })
                  ] }),
                  c.get && /* @__PURE__ */ a("span", { children: [
                    " ",
                    "(",
                    /* @__PURE__ */ e(A, { content: "Delete" }),
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
const _e = "visibility/header.boolean";
function ds({ children: n }) {
  const t = M(_e), o = x(!1), r = X("Shift");
  m.useEffect(() => {
    const c = (h) => {
      const g = h.x * 100 / innerWidth;
      o.set(h.y <= 100 && De(25, g, 75));
    };
    return document.addEventListener("mousemove", c), () => document.removeEventListener("mousemove", c);
  }, []);
  const s = w(), i = Y("window.isFocused"), l = M("preferences/animation.boolean"), d = m.useMemo(() => s(i ? "primary.background" : "secondry.background", {
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
  }), [s, i]);
  return /* @__PURE__ */ a("div", { className: "top-0 z-[10000000000000000000000000000000000000] absolute inset-x-0", children: [
    /* @__PURE__ */ e(
      "div",
      {
        onClick: () => {
          L.setOneFeild(_e, "value", !t);
        },
        title: t ? "hide header bar" : "open header bar",
        className: b(
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
        children: /* @__PURE__ */ e(H, { icon: t ? Oe : xe })
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        className: b(
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
function ms() {
  const n = dt("notification.header"), t = m.useMemo(() => (Array.isArray(n.get) ? n.get : []).slice(0, 3), [n.get]), o = w();
  return /* @__PURE__ */ e(
    "div",
    {
      className: "h-fit",
      style: {
        ...o({
          background: lt("right", "secondry", "primary"),
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
          component: ({ index: r, item: s }) => /* @__PURE__ */ a("div", { children: [
            /* @__PURE__ */ a("div", { className: "flex justify-between items-center p-3", children: [
              /* @__PURE__ */ e("div", { children: s.message || "empty message" }),
              /* @__PURE__ */ e("div", { className: "flex tools", children: /* @__PURE__ */ e(
                N,
                {
                  onClick: () => {
                    n.set((i) => {
                      const l = i == null ? void 0 : i[r];
                      return l && (l.expanded = !l.expanded), i;
                    });
                  },
                  icon: R
                }
              ) })
            ] }),
            /* @__PURE__ */ e(
              "div",
              {
                className: b(
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
const us = "visibility/configurations.boolean", fs = () => {
  const n = _.getOneFeild("settings", "focused"), t = m.useMemo(() => ce(String(n), "camel", "normal"), [n]), o = oe(t);
  return /* @__PURE__ */ a("div", { className: "flex justify-between items-center p-2", children: [
    /* @__PURE__ */ e("h1", { className: "font-bold text-2xl capitalize", children: o }),
    /* @__PURE__ */ e("div", { className: "tools", children: /* @__PURE__ */ e(
      P,
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
              L.setOneFeild(us, "value", !1);
            },
            icon: R
          }
        )
      }
    ) })
  ] });
};
function hs() {
  const n = Bt(), t = B.getOneFeild("keyboardShortcuts", "focused");
  return j(
    "keyboard/update",
    () => {
      if (t == null)
        return;
      const o = n[t];
      o && (B.setOneFeild("keyboardShortcuts", "submited", t), O("keyboard.commandId", o.commandId), I("edit-keyPanding"));
    },
    [t, n]
  ), /* @__PURE__ */ e(
    Ee,
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
      component: ({ data: o, index: r, status: s, handel: i, style: l }) => {
        const { commandId: d, label: c = "" } = o, h = Ht(d), g = m.createRef(), f = w(), u = X("Control"), y = x(!1), v = m.useMemo(() => h.filter(({ value: p }) => p).map(({ value: p }) => p), [h]);
        return /* @__PURE__ */ a(
          "div",
          {
            onMouseEnter: () => y.set(!0),
            onMouseLeave: () => y.set(!1),
            onClick: () => {
              i.focus(), i.submit();
            },
            ref: g,
            className: "px-3 text-xs group row",
            style: {
              ...f(
                r % 2 && "primary.background",
                y.get && "gray.opacity",
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
                  className: b(`
                w-[150px]
                flex
                justify-end
                px-2
              `),
                  children: (y.get || s.isFocused || s.isSubmited) && /* @__PURE__ */ a("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ e(
                      N,
                      {
                        onClick: async () => {
                          const p = JSON.stringify(o);
                          await navigator.clipboard.writeText(p);
                        },
                        icon: Te
                      }
                    ),
                    /* @__PURE__ */ e(
                      N,
                      {
                        icon: kt,
                        onClick: (p) => {
                          O("keyboard.commandId", d), I("edit-keyPanding");
                        }
                      }
                    ),
                    !!h.length && /* @__PURE__ */ e(
                      N,
                      {
                        tabIndex: -1,
                        icon: R,
                        onClick: () => {
                          K.remove(h.map(({ keyId: p }) => p));
                        }
                      }
                    )
                  ] })
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  className: b("capitalize col", u && "hover:underline cursor-pointer"),
                  onPointerDown: async () => {
                    u && (E.setOneFeild("findConfigurations", "value", `@commandId: ${d}`), await new Ln().start(100), I("findConfigurations"));
                  },
                  children: c || d
                }
              ),
              /* @__PURE__ */ e("div", { className: b("col justify-end truncate"), children: /* @__PURE__ */ e(ge, { shortcut: v }) })
            ]
          }
        );
      }
    }
  );
}
const me = ({ isActive: n, className: t, ...o }) => {
  const r = w();
  return /* @__PURE__ */ e(
    "span",
    {
      className: b("w-[35px] h-[35px] gap-2 rounded-md inline-flex items-center justify-center border border-solid border-transparent", t),
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
}, ps = [
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
], Je = 200, Zs = () => {
  const n = w(), t = x(!1), o = x(!1), r = x(!1), s = X("Shift"), i = x(!1), l = X("Control"), d = X("AltGraph");
  m.useEffect(() => {
    o.set(l);
  }, [l]), m.useEffect(() => {
    t.set(s);
  }, [s]), m.useEffect(() => {
    r.set(d);
  }, [d]);
  const c = x([-100, -100]), h = x(!1);
  ct(
    () => {
      h.get && h.set(!1);
    },
    [h.get],
    Je
  ), Kt(["keyboard-view"]);
  const g = E.useOneFeild("keyboard-view", "value"), f = x([0, innerHeight - 300]);
  return /* @__PURE__ */ a(
    "div",
    {
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
        ...Z(
          f.get && {
            left: `${f.get[0]}px`,
            top: `${f.get[1]}px`
          }
        )
      },
      children: [
        /* @__PURE__ */ a("div", { className: "flex justify-between p-2", children: [
          /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
            N,
            {
              onPointerDown: () => {
                const u = (v) => {
                  f.set([v.pageX, v.pageY]);
                };
                document.addEventListener("mousemove", u);
                const y = () => {
                  document.removeEventListener("pointerup", y), document.removeEventListener("mousemove", u);
                };
                document.addEventListener("pointerup", y);
              },
              icon: Pn,
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
            P,
            {
              title: "close view",
              position: {
                x: "left"
              },
              children: /* @__PURE__ */ e(
                N,
                {
                  onClick: () => {
                    L.setOneFeild("window/mode.enum", "value", "desktop");
                  },
                  icon: En
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ e(k, {}),
        /* @__PURE__ */ a("div", { className: "flex justify-center items-stretch h-full overflow-hidden", children: [
          /* @__PURE__ */ e("div", { className: "flex flex-col flex-1 justify-center items-center gap-1 p-2 w-[200px] h-full overflow-hidden", children: [
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
          ].map(({ state: u, name: y }, v) => /* @__PURE__ */ e(
            me,
            {
              isActive: u.get,
              className: "w-full max-lg:w-full",
              onPointerDown: () => {
                u.set((p) => !p);
              },
              children: y
            },
            v
          )) }),
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
                const y = u.pageX, v = u.pageY, { left: p, top: C } = u.currentTarget.getBoundingClientRect();
                c.set([y - p, v - C]), h.set(!0);
              },
              children: [
                c.get && /* @__PURE__ */ e(
                  "span",
                  {
                    className: b(
                      `opacity-0 blur-xl transition-[opacity] duration-[${Je}] absolute pointer-events-none inline-block w-[100px] h-[100px] transform -translate-x-1/2 -translate-y-1/2 rounded-full`,
                      h.get && "opacity-100"
                    ),
                    style: {
                      ...n("gray.opacity"),
                      ...Z(
                        c.get && {
                          left: `${c.get[0]}px`,
                          top: `${c.get[1]}px`
                        }
                      )
                    }
                  }
                ),
                /* @__PURE__ */ e("div", { className: "flex flex-col gap-3", children: ps.map((u, y) => /* @__PURE__ */ e("div", { className: "flex justify-center gap-3", children: u.map((v, p) => /* @__PURE__ */ a(
                  me,
                  {
                    onPointerDown: () => {
                      const C = t.get ? v.shift : r.get ? v.alt : v.normal, S = document.activeElement;
                      S && (S instanceof HTMLInputElement || S instanceof HTMLTextAreaElement) && (S.value = S.value.concat(C));
                    },
                    className: "relative",
                    children: [
                      t.get ? v.shift : r.get ? v.alt : v.normal,
                      !t.get && /* @__PURE__ */ e(
                        "span",
                        {
                          className: "right-1 bottom-1 absolute text-xs",
                          style: {
                            ...n({ color: "gray.opacity.2" })
                          },
                          children: r.get ? v.normal : v.alt
                        }
                      )
                    ]
                  },
                  p
                )) }, y)) }),
                /* @__PURE__ */ e(
                  me,
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
          /* @__PURE__ */ e("div", { className: "flex flex-col flex-1 justify-center items-center gap-1 p-2 w-[200px] h-full overflow-hidden", children: [
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
          ].map(({ onClick: u, name: y }, v) => /* @__PURE__ */ e(
            me,
            {
              className: "w-full max-lg:w-full",
              onPointerDown: () => {
                u == null || u();
              },
              children: y
            },
            v
          )) })
        ] })
      ]
    }
  );
}, Qe = "visibility/leftSide.boolean", gs = ({ children: n }) => {
  const t = M(Qe), o = w();
  return /* @__PURE__ */ e(
    le,
    {
      position: "right",
      min: 200,
      temp: "leftSide.currentWidth",
      max: () => Math.max(window.innerWidth / 3, 350),
      handelResize: ({ size: r }) => {
        const s = De(150, r);
        s != t && L.setOneFeild(Qe, "value", s);
      },
      className: b("h-full flex-col flex overflow-hidden border-r border-solid border-transparent z-[10000000000000000]", !t && "border-r-0"),
      hidden: !t,
      style: {
        ...o("secondry.background", {
          borderColor: "borders"
        })
      },
      children: n
    }
  );
}, _s = () => {
  const n = w();
  return /* @__PURE__ */ a("div", { className: "w-full", children: [
    /* @__PURE__ */ e("div", { className: "p-2", children: /* @__PURE__ */ e(q, { placeholder: "Search Component Type", inputName: "search-component-type" }) }),
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
    ].map(({ content: t, value: o }, r) => /* @__PURE__ */ a(
      ye,
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
      r
    )) })
  ] });
}, ys = ({ item: n, status: t, handelFocus: o, handelSubmit: r }) => {
  if (n.type == "separator")
    return /* @__PURE__ */ e("div", { className: "my-1", children: /* @__PURE__ */ e(k, {}) });
  const s = w(), i = m.createRef();
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
        B.setOneFeild("menu-list", "focused", null);
      },
      onClick: r(),
      className: "cursor-pointer flex items-center rounded-md px-4 py-1 w-full",
      children: [
        /* @__PURE__ */ e("div", { className: "w-[30px]", children: n.checked && /* @__PURE__ */ e(je, { icon: Ae }) }),
        /* @__PURE__ */ a("div", { className: "flex justify-between items-center gap-1 w-full", children: [
          n.label && /* @__PURE__ */ e("span", { children: n.label }),
          n.accelerator && /* @__PURE__ */ e(ge, { shortcut: n.accelerator })
        ] }),
        /* @__PURE__ */ e("div", { className: "w-[30px]" })
      ]
    }
  ) });
}, bs = () => {
  const n = w(), t = de.getTemp("list"), o = de.getTemp("position"), r = de.getTemp("id"), s = m.createRef(), i = B.getOneFeild("menu-list", "submited");
  m.useEffect(() => {
    r && typeof i == "number" && (de.setTemp("result", i), B.setOneFeild("menu-list", "submited", null));
  }, [i, r]);
  const l = Wt.getOne("menu-list");
  return /* @__PURE__ */ e(G, { hidden: !r, children: /* @__PURE__ */ e(
    sn,
    {
      positionId: "menu-list",
      ref: s,
      className: "absolute py-1 border border-transparent border-solid rounded-md w-[350px]",
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
        ...Z(
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
      children: /* @__PURE__ */ e(be, { skipFn: ({ enabled: d = !0, type: c }) => c == "separator" || !d, slotId: "menu-list", component: ys, data: t || [] })
    }
  ) });
}, vs = () => {
  const n = T.getAll();
  return /* @__PURE__ */ e(
    be,
    {
      data: n,
      slotId: "notification",
      component: ({ item: t, id: o, handelFocus: r, handelSelect: s, handelSubmit: i, status: l }) => {
        const d = x(!1);
        function c(g, f, u, y) {
          return t.type == "warning" ? f : t.type == "error" ? u : t.type == "success" ? y : g;
        }
        const h = w();
        return /* @__PURE__ */ a(
          "div",
          {
            id: o,
            onClick: i(),
            onPointerDown: r(s()),
            onDoubleClick: () => {
              T.setOneFeild(t.id, "showDesc", !t.showDesc);
            },
            style: {
              ...h(
                d.get && "gray.opacity",
                l.isFocused && {
                  borderColor: "secondry"
                },
                l.isSubmited && {
                  backgroundColor: "secondry",
                  color: "secondry.content"
                }
              )
            },
            className: b(
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
            onMouseEnter: () => d.set(!0),
            onMouseLeave: () => d.set(!1),
            children: [
              /* @__PURE__ */ a("div", { className: b("relative p-3 flex justify-between items-center"), children: [
                /* @__PURE__ */ a("div", { className: "truncate text-xl flex items-center gap-2", children: [
                  /* @__PURE__ */ e(
                    H,
                    {
                      icon: c(Ft, St, On, It),
                      style: {
                        ...h({
                          color: c("notifay.info", "notifay.warning", "notifay.error", "notifay.success")
                        })
                      }
                    }
                  ),
                  /* @__PURE__ */ e("span", { children: t.title })
                ] }),
                /* @__PURE__ */ e(
                  "div",
                  {
                    className: b(`
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
                      ...h(c("notifay.info", "notifay.warning", "notifay.error", "notifay.success"))
                    }
                  }
                ),
                /* @__PURE__ */ a(
                  "ul",
                  {
                    className: "flex gap-1",
                    style: {
                      visibility: d.get || l.isSubmited ? "visible" : "hidden"
                    },
                    children: [
                      t.desc && /* @__PURE__ */ e(
                        N,
                        {
                          onClick: () => {
                            T.setOneFeild(t.id, "showDesc", !t.showDesc);
                          },
                          icon: t.showDesc ? xe : Oe
                        }
                      ),
                      t.removable && /* @__PURE__ */ e(
                        N,
                        {
                          onClick: () => {
                            T.remove([t.id]);
                          },
                          icon: jn
                        }
                      )
                    ]
                  }
                )
              ] }),
              t.desc && t.showDesc && /* @__PURE__ */ e("p", { className: "p-6", children: t.desc }),
              Array.isArray(t.buttons) && /* @__PURE__ */ e("div", { className: "flex justify-end p-5 overflow-x-auto", children: t.buttons.map(({ command: g, label: f }, u) => /* @__PURE__ */ e(
                z,
                {
                  className: "px-2 py-1 rounded-sm",
                  onClick: async () => {
                    typeof g == "object" ? $(g.action, g.arg) : it(g);
                  },
                  children: f
                },
                u
              )) }),
              t.status == "loading" && /* @__PURE__ */ e(bt, {})
            ]
          }
        );
      }
    }
  );
}, et = "visibility/notifays.boolean", tt = "visibility/notifays/nots.boolean";
function xs() {
  const n = M(et), t = M(tt), o = T.getIds(), r = w(), s = B.getOneFeild("notification", "focused"), i = T.getAll(), l = m.useMemo(() => typeof s != "number" ? null : i[s] || null, [i, s]);
  return j(
    "toggleExpandNotifay",
    () => {
      l && T.setOneFeild(l.id, "showDesc", !l.showDesc);
    },
    [l]
  ), j(
    "notification.deleteFocus",
    () => {
      l && T.remove([l.id]);
    },
    [l]
  ), /* @__PURE__ */ a(
    "div",
    {
      onClick: () => {
        L.setOneFeild(et, "value", !0);
      },
      className: b(
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
        border
        border-solid
        border-transparent
        overflow-hidden;
      `,
        !n && "translate-x-[400px]"
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
        /* @__PURE__ */ a(
          "div",
          {
            className: "notifay-top-view flex justify-between items-center gap-2 p-3 cursor-pointer group",
            onClick: () => {
              L.setOneFeild(tt, "value", !t);
            },
            children: [
              /* @__PURE__ */ a("h3", { className: "font-bold text-lg uppercase notifay-full-title", children: [
                /* @__PURE__ */ e(A, { content: "notifications" }),
                /* @__PURE__ */ e(
                  "span",
                  {
                    style: {
                      ...r({
                        color: "gray.opacity.2"
                      })
                    },
                    children: !t && `(${o.length})`
                  }
                )
              ] }),
              /* @__PURE__ */ a("div", { className: "group-hover:visible flex invisible", children: [
                /* @__PURE__ */ e(
                  N,
                  {
                    onClick: () => {
                      T.setAll([]);
                    },
                    className: b(!o.length && "pointer-events-none"),
                    icon: Dn
                  }
                ),
                /* @__PURE__ */ e(N, { hidden: !o.length, icon: t ? xe : Oe })
              ] })
            ]
          }
        ),
        !!o.length && t && /* @__PURE__ */ e(k, {}),
        t && !!o.length && /* @__PURE__ */ e(
          vt,
          {
            focusId: "notifications",
            className: b(
              `
          w-[400px]
          flex
          flex-col
          overflow-hidden
          transition-[max-height]
          duration-500
          max-h-[80vh]
          rounded-ee-xl
          rounded-es-xl
        `,
              !t && "max-h-[0vh]"
            ),
            children: /* @__PURE__ */ e(V, { children: /* @__PURE__ */ e(vs, {}) })
          }
        )
      ]
    }
  );
}
const Js = () => {
  const n = he.getTemp("pdf");
  return /* @__PURE__ */ e(G, { hidden: !n, children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(le, { className: "h-[70vh]", position: "right", temp: "pdf", min: 400, max: () => innerWidth - 30, children: /* @__PURE__ */ e(
    on,
    {
      className: "h-full overflow-hidden",
      list: [
        /* @__PURE__ */ e(
          an,
          {
            title: "PDF..",
            rightSide: /* @__PURE__ */ e("div", { className: "flex tools", children: /* @__PURE__ */ e(P, { title: "close view", children: /* @__PURE__ */ e(
              N,
              {
                icon: R,
                onClick: () => {
                  he.setTemp("pdf", null);
                }
              }
            ) }) })
          }
        ),
        /* @__PURE__ */ e("div", { className: "h-full", children: n && /* @__PURE__ */ e("embed", { src: n, className: "w-full h-full" }) })
      ]
    }
  ) }) }) });
}, nt = "visibility/rightSide.boolean", ws = ({ children: n }) => {
  const t = M(nt), o = w();
  return /* @__PURE__ */ e(
    le,
    {
      min: 200,
      temp: "rightSide.currentWidth",
      max: () => Math.max(window.innerWidth / 3, 350),
      handelResize: ({ size: r }) => {
        const s = De(150, r);
        s != t && L.setOneFeild(nt, "value", s);
      },
      position: "left",
      hidden: !t,
      style: {
        ...o({
          backgroundColor: "secondry.background",
          borderColor: "borders"
        })
      },
      className: b(
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
function Ns() {
  const n = mt();
  return /* @__PURE__ */ e(
    Ee,
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
      component: ({ data: t, index: o, style: r, status: s, handel: i, id: l }) => {
        const d = X("Control"), c = x(!1), h = m.useMemo(() => !t.settingId.match(/\.password$/gi) && !pe(t.def, t.value), [t]), g = w();
        j(
          "showSubmitSetting",
          () => {
            s.isSubmited && se(t.settingId);
          },
          [s]
        );
        const f = m.useMemo(() => s.isFocused || s.isSubmited || c.get, [s, c.get]);
        return /* @__PURE__ */ a(
          "div",
          {
            id: l,
            onMouseEnter: () => c.set(!0),
            onMouseLeave: () => c.set(!1),
            className: b(
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
              i.focus(), i.submit();
            },
            children: [
              !pe(t.value, t.def) && /* @__PURE__ */ e(
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
                  className: b(`
                flex
                gap-1
                items-center
                overflow-hidden
              `),
                  children: /* @__PURE__ */ e(
                    "span",
                    {
                      className: b("text-xl capitalize truncate", d && "hover:underline cursor-pointer"),
                      onClick: () => {
                        d && t.name != null && E.setOneFeild("findConfigurations", "value", t.name);
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
                  className: b("inline-flex gap-1 items-center text-xs italic font-extralight truncate"),
                  onClick: () => {
                    d && E.setOneFeild("findConfigurations", "value", `@id ${t.settingId}`);
                  },
                  children: [
                    /* @__PURE__ */ a(
                      "span",
                      {
                        className: b(d && "hover:underline cursor-pointer"),
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
                    /* @__PURE__ */ a("div", { className: b("flex opacity-0 transition-[opacity] duration-500", f && "opacity-100"), children: [
                      h && /* @__PURE__ */ e(P, { title: "reset", children: /* @__PURE__ */ e(
                        N,
                        {
                          icon: Tn,
                          onClick: () => {
                            L.setOneFeild(t.settingId, "value", t.def);
                          }
                        }
                      ) }),
                      /* @__PURE__ */ e(P, { title: "configurate", children: /* @__PURE__ */ e(
                        N,
                        {
                          onClick: () => {
                            se(t.settingId);
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
function Pt(n = [], t = ".") {
  const o = n.filter(Boolean).map((s) => s.split(t)).filter((s) => s.length);
  return Array.from(new Set(o.map(([s]) => s))).map((s) => ({
    data: s,
    innerTree: Pt(
      o.filter(([i]) => i == s).map(([, ...i]) => i.join(t)),
      t
    )
  }));
}
function Cs() {
  const n = mt(), t = m.useMemo(() => n.map(({ settingId: o }) => o), [n]);
  return /* @__PURE__ */ e("div", { id: "settings.tree.view", className: "flex flex-col h-full overflow-hidden", tabIndex: 1, children: /* @__PURE__ */ e(V, { children: /* @__PURE__ */ e(
    rn,
    {
      treeId: "setting-tree-layout",
      tree: Pt(t, "/"),
      component: ({ data: o, status: r, parent: s, isFins: i, innerTree: l, level: d, handels: c }) => {
        const h = w(), [g, f] = o.split("."), u = x(!1), y = m.useMemo(() => {
          const v = [];
          let p = s;
          for (; p; )
            v.push(p.data), p = p.parent;
          return v.reverse().join("/");
        }, [i]);
        return /* @__PURE__ */ a(
          "div",
          {
            "aria-level": d,
            onMouseEnter: () => u.set(!0),
            onMouseLeave: () => u.set(!1),
            className: "flex items-center px-1 border border-transparent border-solid h-[30px]",
            onClick: async () => {
              c.focus(!0);
            },
            style: {
              ...h(
                u.get && "gray.opacity",
                r.isFocused && {
                  borderColor: "primary"
                }
              ),
              paddingLeft: `${d * 50}px`
            },
            children: [
              !f && /* @__PURE__ */ e("div", { className: "mx-1 tools", children: /* @__PURE__ */ e(
                N,
                {
                  iconClassName: "text-xs",
                  tabIndex: -1,
                  icon: r.isExpanded ? xe : An,
                  style: {
                    outlineColor: "transparent"
                  },
                  onClick: () => {
                    c.expand(!1, !r.isExpanded);
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
                        ...h({
                          color: "primary"
                        })
                      },
                      children: !!(l != null && l.length) && `(${l == null ? void 0 : l.length})`
                    }
                  )
                ] }),
                f && /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: "px-2 py-1 rounded-md",
                      style: {
                        ...h("gray.opacity")
                      },
                      children: f
                    }
                  ),
                  /* @__PURE__ */ e(
                    N,
                    {
                      onClick: () => {
                        se(y);
                      },
                      icon: Mt,
                      hidden: !u.get
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
function ks() {
  const n = m.useMemo(() => [
    {
      click() {
        _.setOneFeild("settings.viewType", "focused", "list");
      },
      title: "list",
      icon: Lt
    },
    {
      click() {
        _.setOneFeild("settings.viewType", "focused", "tree");
      },
      title: "tree",
      icon: Un
    }
  ], []), t = Yt(n, "settings.layout.tools");
  return m.useEffect(() => {
    t && (t.click(), B.setOneFeild("settings.layout.tools", "submited", null));
  }, [t]), /* @__PURE__ */ a("div", { className: "relative flex flex-col w-full h-full overflow-hidden", children: [
    /* @__PURE__ */ a(vt, { focusId: "settings.layouts", className: "flex justify-between items-center p-2", children: [
      /* @__PURE__ */ e("div", {}),
      /* @__PURE__ */ e("div", { className: "flex gap-1 tools", children: /* @__PURE__ */ e(
        be,
        {
          slotId: "settings.layout.tools",
          data: n,
          component: ({ item: { click: o, title: r, icon: s }, tabIndex: i, handelFocus: l, status: d }) => {
            const c = w();
            return /* @__PURE__ */ e(
              P,
              {
                title: r,
                position: {
                  x: "center",
                  y: "top"
                },
                children: /* @__PURE__ */ e(
                  N,
                  {
                    icon: s,
                    onPointerDown: l(),
                    style: {
                      ...c(
                        d.isFocused && {
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
      xt,
      {
        views: {
          list: Ns,
          tree: Cs
        },
        viewId: "settings.viewType"
      }
    )
  ] });
}
function Is() {
  const n = fe.getTemp("config");
  return m.useEffect(() => {
    n || se(null);
  }, [n]), /* @__PURE__ */ a("div", { className: "flex flex-col w-full h-full overflow-hidden", children: [
    /* @__PURE__ */ e(cs, {}),
    /* @__PURE__ */ e(k, {}),
    n && /* @__PURE__ */ e(
      xt,
      {
        viewId: "settings",
        views: {
          keyboardShortcuts: hs,
          user: ks,
          icons: ln,
          colors: cn
        }
      }
    )
  ] });
}
function Ss() {
  const n = _.getOne("settings"), t = m.useMemo(() => Object.entries((n == null ? void 0 : n.tabs) || {}).map(([r, s]) => ({
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
        be,
        {
          slotId: "configurations.side.list",
          data: t,
          component: ({ item: r }) => {
            const { id: s, news: i, isFocused: l, icon: d } = r, c = m.useMemo(() => `settings.${s}.show`, [s]), h = at(), g = m.useMemo(() => ie.join({ cmdId: c }, h, "cmdId->command").map(({ value: v }) => v), [c, h]), f = oe(ce(s, "camel", "normal")), u = x(!1), y = w();
            return /* @__PURE__ */ a(
              P,
              {
                onMouseEnter: () => u.set(!0),
                onMouseLeave: () => u.set(!1),
                draggable: !0,
                title: `press ${g.map((v) => "`" + v + "`").join(" or ")}`,
                onClick: () => {
                  !l && _.setOneFeild("settings", "focused", r.id);
                },
                style: {
                  ...y((l || u.get) && "primary.background")
                },
                className: "relative truncate cursor-pointer",
                children: [
                  l && /* @__PURE__ */ e("span", { className: "left-0 absolute inset-y-0 w-[2px]", style: { ...y("primary") } }),
                  /* @__PURE__ */ a("div", { className: "flex items-center gap-2 p-2", children: [
                    (d == null ? void 0 : d.value) && /* @__PURE__ */ e(H, { icon: Ze(d.type, d.value) }),
                    f,
                    i && /* @__PURE__ */ e(dn, { children: /* @__PURE__ */ e(H, { icon: Ze(i.type, i.value) }) })
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
function Fs() {
  return /* @__PURE__ */ e(le, { position: "right", min: () => innerWidth / 7, max: () => innerWidth / 3, className: "h-full", children: /* @__PURE__ */ e(Ss, {}) });
}
const st = "visibility/configurations.boolean";
function Ms() {
  const n = M(st), t = w();
  return m.useEffect(() => {
    n && fe.setTemp("config", !0);
  }, [n]), /* @__PURE__ */ e(
    mn,
    {
      hidden: !n,
      onLoadContent: () => {
        I("findConfigurations-local");
      },
      onClick: async (o) => {
        o.currentTarget == o.target && L.setOneFeild(st, "value", !1);
      },
      onTransitionEnd: () => {
        typeof n == "boolean" && fe.setTemp("config", n);
      },
      children: /* @__PURE__ */ a(
        "div",
        {
          className: b(`
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
            /* @__PURE__ */ e(fs, {}),
            /* @__PURE__ */ e(k, {}),
            /* @__PURE__ */ a("div", { className: "flex w-[70vw] h-[70vh]", children: [
              /* @__PURE__ */ e(Fs, {}),
              /* @__PURE__ */ e(Is, {})
            ] })
          ]
        }
      )
    }
  );
}
function Ls({ settingId: n }) {
  const t = L.getOne(n), o = m.useMemo(() => t == null ? void 0 : t.value, [t]), r = m.useMemo(() => t == null ? void 0 : t.config, [t]), s = x(t == null ? void 0 : t.value);
  m.useEffect(() => {
    L.setOneFeild(n, "value", s.get);
  }, [s.get]), m.useEffect(() => {
    s.set(o);
  }, [t]);
  const i = m.useMemo(() => `setting:${(t == null ? void 0 : t.settingId) || ""}`, [t]), l = m.useMemo(() => {
    var h;
    const c = (h = i.match(/\.[a-zA-Z0-9]+$/gi)) == null ? void 0 : h[0].slice(1);
    return c || null;
  }, [i]), d = w();
  return /* @__PURE__ */ e(
    "div",
    {
      className: b((t == null ? void 0 : t.readonly) && "cursor-not-allowed"),
      style: {
        ...d((t == null ? void 0 : t.readonly) && "primary.background")
      },
      children: /* @__PURE__ */ a("div", { className: b((t == null ? void 0 : t.readonly) && "pointer-events-none"), children: [
        l == "boolean" && /* @__PURE__ */ e(un, { id: i, state: s, config: r }),
        l == "array" && /* @__PURE__ */ e(fn, { id: i, state: s, config: r }),
        l == "enum" && /* @__PURE__ */ e(hn, { id: i, state: s, config: r }),
        l == "object" && /* @__PURE__ */ e(pn, { id: i, state: s, config: r }),
        l == "string" && /* @__PURE__ */ e(wt, { id: i, state: s, config: r }),
        l == "number" && /* @__PURE__ */ e(gn, { id: i, state: s, config: r }),
        l == "file" && /* @__PURE__ */ e(yn, { id: i, state: s, config: r }),
        l == "filter" && /* @__PURE__ */ e(bn, { id: i, state: s, config: r }),
        l == "password" && /* @__PURE__ */ e(vn, { id: i, state: s, config: r }),
        l == "date" && /* @__PURE__ */ e(xn, { id: i, state: s, config: r }),
        l == "regexp" && /* @__PURE__ */ e(wn, { id: i, state: s }),
        l == "audio" && /* @__PURE__ */ e(Nn, { id: i, state: s, config: r }),
        l == "image" && /* @__PURE__ */ e(Cn, { id: i, state: s, config: r })
      ] })
    }
  );
}
const Ps = () => {
  const n = w(), t = dt("view.settings"), o = L.getOne(t.get || ""), r = m.useMemo(() => !o || o.settingId.match(/\.password$/gi) ? !1 : !pe(o.def, o.value), [o]), s = m.useMemo(() => {
    try {
      const i = Function(`return (state)=> \`${(o == null ? void 0 : o.desc) || "**no description defined**"}\` `)(), l = rt.getState();
      return i(l);
    } catch (i) {
      return Vn.err(i), " - ";
    }
  }, [o == null ? void 0 : o.desc]);
  return /* @__PURE__ */ e(
    G,
    {
      onLoadContent: () => {
        t.get && I(`setting:${t.get}`);
      },
      hidden: !t.get,
      children: /* @__PURE__ */ a(
        "div",
        {
          hidden: !t.get,
          className: b("rounded-md border-solid border border-transparent w-1/2"),
          style: n("secondry.background", {
            borderColor: "borders"
          }),
          children: [
            /* @__PURE__ */ a("div", { className: "flex justify-between items-center gap-1 p-3", children: [
              o && /* @__PURE__ */ a(U, { children: [
                /* @__PURE__ */ e("h1", { className: "text-2xl", children: o.name }),
                /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-2 text-xs", children: /* @__PURE__ */ e(
                  Nt,
                  {
                    list: o.settingId.split("/").filter(Boolean).map((i, l) => {
                      var h;
                      const d = (h = i.match(/\..+$/gi)) == null ? void 0 : h[0].slice(1);
                      let c = null;
                      switch (d) {
                        case "boolean": {
                          c = Ae;
                          break;
                        }
                        case "password": {
                          c = Yn;
                          break;
                        }
                        case "number": {
                          c = Wn;
                          break;
                        }
                        case "string": {
                          c = Kn;
                          break;
                        }
                        case "file": {
                          c = Hn;
                          break;
                        }
                        case "enum": {
                          c = Lt;
                          break;
                        }
                        case "object": {
                          c = Bn;
                          break;
                        }
                        case "array": {
                          c = $n;
                          break;
                        }
                        case "audio":
                          c = zn;
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
                            c && /* @__PURE__ */ e(H, { icon: c })
                          ]
                        },
                        l
                      );
                    }),
                    joinComponent: /* @__PURE__ */ e(H, { icon: we })
                  }
                ) })
              ] }),
              /* @__PURE__ */ a("div", { className: "flex tools", children: [
                r && /* @__PURE__ */ e(
                  N,
                  {
                    icon: Rn,
                    onClick: async () => {
                      const { response: i } = await ue({
                        message: "are you sure about reset this setting",
                        buttons: ["No", "Yes"],
                        defaultId: 1
                      });
                      i && o && L.setOneFeild(o.settingId, "value", o.def);
                    }
                  }
                ),
                /* @__PURE__ */ e(
                  N,
                  {
                    onClick: () => {
                      t.set(null), I("findConfigurations");
                    },
                    icon: R
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e(k, {}),
            o && /* @__PURE__ */ a(U, { children: [
              /* @__PURE__ */ e(V, { className: "p-2 max-h-[150px]", children: /* @__PURE__ */ e(Ct, { value: s }) }),
              /* @__PURE__ */ e(k, {})
            ] }),
            t.get && /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ e(Ls, { settingId: t.get }) })
          ]
        }
      )
    }
  );
}, Es = ({ item: n, index: t }) => {
  const o = x(!1), r = x(!1), s = x(!1), i = x(0), { message: l } = n, d = w(), c = M("preferences/toastTime.number"), h = M("preferences/animation.boolean"), g = m.useMemo(() => n.time || c || 5, [c, n.time]);
  m.useEffect(() => {
    if (s.get) {
      const u = setTimeout(() => {
        n.id && ut.remove([n.id]), s.set(!1);
      }, 300);
      return () => {
        clearTimeout(u);
      };
    }
  }, [s.get, n]), m.useEffect(() => {
    let u = 0;
    const y = setInterval(() => {
      i.set(++u), u >= g && (s.set(!0), clearInterval(y));
    }, 1e3);
    return () => {
      clearInterval(y);
    };
  }, [g]), m.useEffect(() => {
    if (r.get) {
      const u = setTimeout(() => {
        r.set(!1);
      }, 3e3);
      return () => {
        clearTimeout(u);
      };
    }
  }, [r.get]);
  function f(u, y, v, p) {
    return n.type == "warning" ? y : n.type == "error" ? v : n.type == "success" ? p : u;
  }
  return /* @__PURE__ */ a(
    "div",
    {
      className: b("flex z-[100000] items-center justify-between p-2 opacity-100 scale-100", s.get && "opacity-0 scale-0", h && "transition-[transform,opacity] duration-300"),
      onMouseEnter: () => o.set(!0),
      onMouseLeave: () => o.set(!1),
      style: {
        ...d(t % 2 && "gray.opacity")
      },
      children: [
        /* @__PURE__ */ a("div", { className: "inline-flex items-center gap-1", children: [
          /* @__PURE__ */ e(
            H,
            {
              icon: f(Ft, St, qn, It),
              style: {
                ...d({
                  color: f("notifay.info", "notifay.warning", "notifay.error", "notifay.success")
                })
              }
            }
          ),
          /* @__PURE__ */ e(Ct, { value: l.toString() })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex items-center", children: [
          /* @__PURE__ */ e(
            "span",
            {
              className: b("relative rounded-full w-[30px] h-[30px] mx-2 inline-flex items-center justify-center"),
              style: {
                ...d("gray.opacity")
              },
              children: g - i.get
            }
          ),
          /* @__PURE__ */ a("div", { className: b("tools w-[0px] flex gap-1 items-center overflow-hidden", o.get && "w-[50px]", h && "transition-[width]"), children: [
            /* @__PURE__ */ e(
              N,
              {
                onClick: async () => {
                  r.set(!0), await navigator.clipboard.writeText(l.toString());
                },
                icon: r.get ? Ae : Te
              }
            ),
            /* @__PURE__ */ e(
              N,
              {
                onClick: () => {
                  s.set(!0);
                },
                icon: R
              }
            )
          ] })
        ] })
      ]
    }
  );
}, js = () => {
  const n = ut.getAll(), t = w(), o = M("preferences/animation.boolean"), r = m.useMemo(() => Es, []), s = M("toast/position.enum");
  return /* @__PURE__ */ e(
    "div",
    {
      className: b(
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
      children: /* @__PURE__ */ e(V, { className: "max-h-[400px]", children: n == null ? void 0 : n.map((i, l) => /* @__PURE__ */ e(r, { index: l, item: i }, i.id)) })
    }
  );
};
function Os({ children: n }) {
  const t = M("visibility/header.boolean"), o = M("preferences/animation.boolean");
  return /* @__PURE__ */ a("div", { className: b("absolute bottom-0 inset-x-0 w-full border-solid border-transparent border-b top-0 flex flex-col", t && "top-[51px]", o && "transition-[top] duration-200"), children: [
    /* @__PURE__ */ e(ms, {}),
    /* @__PURE__ */ e("div", { className: "flex items-stretch h-full overflow-hidden", children: n })
  ] });
}
const Et = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,} *$", Ds = () => {
  const n = w(), t = E.getOneFeild("signupUseremail", "value"), o = x(""), r = x(""), s = j(
    "signup",
    async () => {
      if (!t) {
        D("Email is required", "error"), I("signupUseremail");
        return;
      }
      if (!ft(["signupUseremail"]).isValide) {
        D("Please fill the email correctly!", "error"), I("signupUseremail");
        return;
      }
      if (!o.get) {
        D("Password must be at least 6 characters", "error"), I("user-password");
        return;
      }
      if (o.get !== r.get) {
        D("Password and confirm password must be the same!", "error"), I("user-password-confirm");
        return;
      }
      await qt(W, t, o.get);
    },
    [t, o.get, r.get]
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
                q,
                {
                  controls: {
                    [Et]: {
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
              /* @__PURE__ */ e(Me, { placeholder: "********", id: "user-password", state: o })
            ] }),
            /* @__PURE__ */ a("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "Confirm Password" }),
              /* @__PURE__ */ e(Me, { placeholder: "********", id: "user-password-confirm", state: r })
            ] }),
            /* @__PURE__ */ e(z, { icon: (s == null ? void 0 : s.status) == "loading" ? Le : void 0, iconClassName: b("animate-spin"), type: "submit", className: "py-2 rounded-md w-full", children: "Sign Up" })
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
          ve,
          {
            onClick: (i) => {
              i.preventDefault(), O("focusedLoginView", 0);
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
          children: "Payment And Achet Cards"
        }
      ),
      /* @__PURE__ */ e("p", { className: "mb-4", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus." }),
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
}, Ts = () => {
  const n = w(), t = E.getOneFeild("loginUseremail", "value"), o = x("");
  j(
    "login",
    async () => {
      if (!t) {
        D("Email is required", "error");
        return;
      }
      if (!o.get) {
        D("Password must be at least 6 characters", "error");
        return;
      }
      await Be(W, t, o.get);
    },
    [t, o.get]
  );
  const r = j(
    "sign-in-facebook",
    async () => {
      await Ke(W, new Zt());
    },
    []
  ), s = j(
    "sign-in-google",
    async () => {
      await Ke(W, new _t());
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
                await Be(W, t, o.get);
              } catch {
                D("Password Or Email Is Incorrect 😴", "error");
              }
          },
          children: [
            /* @__PURE__ */ a("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2", children: "Username or email" }),
              /* @__PURE__ */ e(
                q,
                {
                  controls: {
                    [Et]: {
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
              /* @__PURE__ */ e(Me, { placeholder: "********", state: o })
            ] }),
            /* @__PURE__ */ e(z, { type: "submit", className: "py-2 rounded-md w-full", children: "Login" })
          ]
        }
      ),
      /* @__PURE__ */ a("div", { className: "flex justify-evenly items-center my-3", children: [
        /* @__PURE__ */ e(
          re,
          {
            iconClassName: b((s == null ? void 0 : s.status) == "loading" && "animate-spin"),
            icon: (s == null ? void 0 : s.status) == "loading" ? Le : Gn,
            onClick: async () => {
              await $("sign-in-google");
            }
          }
        ),
        /* @__PURE__ */ e(
          re,
          {
            iconClassName: b((r == null ? void 0 : r.status) == "loading" && "animate-spin"),
            icon: (r == null ? void 0 : r.status) == "loading" ? Le : Xn,
            onClick: async () => {
              $("sign-in-facebook");
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
          ve,
          {
            onClick: (i) => {
              i.preventDefault(), O("focusedLoginView", 1);
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
          children: "Payment And Achet Cards"
        }
      ),
      /* @__PURE__ */ e("p", { className: "mb-4", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus." }),
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
}, As = () => {
  const n = Y("focusedLoginView");
  return /* @__PURE__ */ e(kn, { focused: n ?? 0, pages: [/* @__PURE__ */ e(Ts, {}), /* @__PURE__ */ e(Ds, {})] });
}, Us = ({ projectId: n }) => {
  var i, l;
  const t = Pe(), { data: o, error: r, status: s } = pt(async () => {
    if (t != null && t.uid) {
      const { docs: d } = await gt(yt(Se, "users", t.uid, "projects", n, "payouts"));
      return d;
    } else
      return [];
  }, [n, t]);
  return m.useEffect(() => {
    s.set("idle");
  }, []), m.useEffect(() => {
    s.get == "error" && r.get && D("Error When Loading The Payouts", "error");
  }, [s.get, r.get]), /* @__PURE__ */ a(U, { children: [
    s.get == "success" && /* @__PURE__ */ a(U, { children: [
      !!((i = o.get) != null && i.length) && /* @__PURE__ */ e(
        Ee,
        {
          data: o.get,
          focusId: "payouts-list",
          itemSize: 50,
          slotId: "payouts-list",
          component: ({ style: d, data: c }) => {
            const h = c.data();
            return /* @__PURE__ */ e(
              "div",
              {
                style: {
                  ...d
                },
                className: "p-3",
                children: h.price
              }
            );
          }
        }
      ),
      !((l = o.get) != null && l.length) && /* @__PURE__ */ e("div", { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ e("h1", { children: "No Payouts In Your Account 😔" }) })
    ] }),
    s.get == "loading" && /* @__PURE__ */ e(ae, { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2" })
  ] });
}, Vs = () => {
  var C, S, Q;
  const n = w(), t = Pe(), o = ht(), r = x(!1), s = x(void 0), i = M("preferences/animation.boolean"), l = j(
    "change-my-name",
    async () => {
      s.get && t && await Gt(
        Xt(Se, "users", t.uid),
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
    $("change-my-name");
  }, [s.get, t]), m.useEffect(() => {
    I("userLoginDisplayName");
  }, [r.get]), m.useEffect(() => {
    r.set(!1);
  }, [s.get]);
  const d = j(
    "profile-change-image",
    async () => {
      if (!t)
        return;
      const F = es(t.photoURL && "Delete", "Cancel", "Upload", "Open Camera"), { response: ee } = await ue({
        title: "Profile Picture",
        message: "Change your profile picture",
        buttons: F,
        defaultId: 2
      }), Ne = F[ee];
      if (Ne == "Delete") {
        await Ie(t, {
          photoURL: null
        });
        return;
      }
      if (Ne == "Cancel")
        return;
      if (Ne == "Upload")
        return new Promise((Ce) => {
          const te = document.createElement("input");
          te.type = "file", te.accept = "image/*", te.onchange = async () => {
            var $e;
            const Re = ($e = te.files) == null ? void 0 : $e[0];
            if (!Re)
              return;
            let Tt = ["users", t.uid, "profile", Fe()].filter(Boolean).join("/"), ze = We(Ye, Tt);
            await qe(ze, Re);
            const At = await Ge(ze);
            return await Ie(t, {
              photoURL: At
            }), Ce("Done");
          }, te.click();
        });
      const Ue = await Jt("take");
      if (!Ue)
        return;
      const jt = await fetch(Ue).then((Ce) => Ce.blob());
      let Ot = ["users", t.uid, "profile", Fe()].filter(Boolean).join("/"), Ve = We(Ye, Ot);
      await qe(Ve, jt);
      const Dt = await Ge(Ve);
      await Ie(t, {
        photoURL: Dt
      });
    },
    [t]
  ), c = x(!1), h = E.getOneFeild("newUserPhoneNumber", "value"), g = x(null), f = j(
    "send-verification-code",
    async () => {
      if (h && !ft(["newUserPhoneNumber"]).isValide) {
        D("Invalid Phone Number", "error");
        return;
      }
    },
    [h, t]
  );
  m.useEffect(() => {
    c.get && I("newUserPhoneNumber");
  }, [c.get]);
  const {
    data: u,
    status: y,
    error: v
  } = pt(async () => {
    if (t) {
      const { docs: F } = await gt(yt(Se, "users", t.uid, "projects"));
      return F;
    } else
      return [];
  }, [t]);
  m.useEffect(() => {
    y.set("idle");
  }, []), m.useEffect(() => {
    y.get == "error" && v.get && D("Error Loading Your Projects", "error");
  }, [v.get, y.get]);
  const p = x(null);
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
          className: b("relative rounded-full w-[100px] h-[100px] max-sm:w-[60px] max-sm:h-[60px] overflow-hidden", (t == null ? void 0 : t.emailVerified) && "outline-1 outline-offset-1"),
          onClick: async () => {
            $("profile-change-image");
          },
          children: [
            (d == null ? void 0 : d.status) != "loading" && /* @__PURE__ */ e("img", { src: (C = t == null ? void 0 : t.photoURL) == null ? void 0 : C.toString(), className: "w-full h-full object-cover" }),
            " ",
            !(t != null && t.photoURL) && /* @__PURE__ */ e(je, { icon: Zn }),
            (d == null ? void 0 : d.status) == "loading" && /* @__PURE__ */ e(
              ae,
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
        (l == null ? void 0 : l.status) != "loading" && /* @__PURE__ */ a(U, { children: [
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
        (l == null ? void 0 : l.status) == "loading" && /* @__PURE__ */ e(bt, {}),
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
              z,
              {
                className: "px-5 py-1",
                icon: _n,
                iconClassName: b("animate-spin", (f == null ? void 0 : f.status) != "loading" && "hidden"),
                onClick: async () => {
                  $("send-verification-code");
                },
                children: "Verifie"
              }
            ),
            /* @__PURE__ */ e(
              z,
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
            /* @__PURE__ */ e(q, { inputName: "verificationCode" }),
            /* @__PURE__ */ e(z, { onClick: async () => {
            }, children: "Ok" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ e(k, {}),
    /* @__PURE__ */ a(V, { className: "relative", children: [
      y.get == "success" && /* @__PURE__ */ a(U, { children: [
        /* @__PURE__ */ e("div", { className: "flex flex-wrap", children: (S = u.get) == null ? void 0 : S.map((F, ee) => /* @__PURE__ */ e("div", { className: "flex justify-between items-center p-3 w-1/3 max-sm:w-1/2", children: /* @__PURE__ */ a(ye, { className: "w-full", children: [
          /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ e("h1", { className: "font-bold text-lg", children: F.id }) }),
          /* @__PURE__ */ e(k, {}),
          /* @__PURE__ */ a("div", { className: "flex justify-between items-center p-2", children: [
            /* @__PURE__ */ e("span", {}),
            /* @__PURE__ */ e(
              re,
              {
                onClick: () => {
                  p.set(F.id);
                },
                icon: we
              }
            )
          ] })
        ] }) }, ee)) }),
        !((Q = u.get) != null && Q.length) && /* @__PURE__ */ e("div", { className: "flex justify-center items-center w-full h-full capitalize", children: /* @__PURE__ */ e(A, { content: "no water fetch projects you sigin" }) })
      ] }),
      y.get == "loading" && /* @__PURE__ */ e(ae, { className: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" }),
      /* @__PURE__ */ a(
        "div",
        {
          style: {
            ...n("primary.background")
          },
          className: b("right-0 absolute inset-y-0 left-full", p.get && "left-0", i && "transition-[left]"),
          children: [
            /* @__PURE__ */ a("div", { className: "flex items-center gap-3 p-3", children: [
              /* @__PURE__ */ e(
                re,
                {
                  icon: Jn,
                  onClick: () => {
                    p.set(null);
                  }
                }
              ),
              /* @__PURE__ */ e("h1", { className: "font-bold text-4xl", children: p.get })
            ] }),
            /* @__PURE__ */ e(k, {}),
            p.get && /* @__PURE__ */ e(Us, { projectId: p.get })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e(k, {}),
    /* @__PURE__ */ a("div", { className: "flex justify-end gap-2 p-2", children: [
      /* @__PURE__ */ e(
        z,
        {
          className: "max-sm:w-full sm:w-1/4 capitalize",
          style: {
            ...n("error")
          },
          onClick: async () => {
            const { response: F } = await ue({
              title: "Delete Account",
              message: "Are you sure you want to delete your account?",
              buttons: ["No", "Yes"],
              defaultId: 1
            });
            F && (t == null || t.delete(), await He(W));
          },
          children: /* @__PURE__ */ e(A, { content: "delete" })
        }
      ),
      /* @__PURE__ */ e(
        z,
        {
          className: "max-sm:w-full sm:w-1/4 capitalize",
          style: {
            ...n("error")
          },
          onClick: async () => {
            const { response: F } = await ue({
              title: "Logout",
              message: "Are you sure you want to logout?",
              buttons: ["No", "Yes"],
              defaultId: 1
            });
            F ? await He(W) : D("Ignore Logout", "error");
          },
          children: /* @__PURE__ */ e(A, { content: "logout" })
        }
      )
    ] })
  ] });
}, Rs = () => {
  const n = Pe();
  return /* @__PURE__ */ e("div", { className: "relative w-full h-full overflow-hidden", children: /* @__PURE__ */ e(
    In,
    {
      render: async () => (await Qn(1e3), /* @__PURE__ */ a(U, { children: [
        n && /* @__PURE__ */ e(Vs, {}),
        !n && /* @__PURE__ */ e(As, {})
      ] })),
      loading: /* @__PURE__ */ e(ae, { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2" })
    }
  ) });
}, zs = () => {
  const n = he.getTemp("profile-view");
  return /* @__PURE__ */ e(G, { hidden: !n, children: /* @__PURE__ */ a(ye, { className: "w-[80vw] h-[80vh]", children: [
    /* @__PURE__ */ a("div", { className: "flex justify-between items-center p-3", children: [
      /* @__PURE__ */ e("h1", { className: "text-3xl", children: /* @__PURE__ */ e(A, { content: "Your Profile" }) }),
      /* @__PURE__ */ e(
        re,
        {
          icon: R,
          onClick: () => {
            he.setTemp("profile-view", !1);
          }
        }
      )
    ] }),
    /* @__PURE__ */ e(k, {}),
    /* @__PURE__ */ e(V, { children: /* @__PURE__ */ e(Rs, {}) })
  ] }) });
};
function Qs() {
  const n = ht();
  return /* @__PURE__ */ a(U, { children: [
    /* @__PURE__ */ e(ds, { children: /* @__PURE__ */ a("h1", { className: "w-full text-center capitalize", children: [
      "click in the link to see your account ",
      n && "(" + n.name + ")",
      /* @__PURE__ */ a(
        ve,
        {
          onClick: (t) => {
            t.preventDefault(), Qt();
          },
          children: [
            /* @__PURE__ */ e(je, { icon: ts, iconClassName: "mr-1 ml-2" }),
            "here"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ a(Os, { children: [
      /* @__PURE__ */ e(gs, { children: "Somthing in the primary Side" }),
      /* @__PURE__ */ e("div", { className: "flex flex-col justify-center items-center w-full h-full", children: /* @__PURE__ */ e(ye, { className: "justify-center items-center", children: /* @__PURE__ */ e("p", { className: "p-3", children: "Water Fetch UI Design 💦" }) }) }),
      /* @__PURE__ */ e(ws, { children: "Somthing in the secondry Side" })
    ] }),
    /* @__PURE__ */ e(zs, {}),
    /* @__PURE__ */ e(Ms, {}),
    /* @__PURE__ */ e(Ps, {}),
    /* @__PURE__ */ e(rs, {}),
    /* @__PURE__ */ e(xs, {}),
    /* @__PURE__ */ e(ls, {}),
    /* @__PURE__ */ e(Sn, {}),
    /* @__PURE__ */ e(js, {}),
    /* @__PURE__ */ e(bs, {}),
    /* @__PURE__ */ e(Fn, {})
  ] });
}
const ne = {
  commandId: "keyboard.commandId",
  position: "keyboard.editingPosition"
}, ot = "key.changeWhen", $s = m.memo(({ commandId: n }) => /* @__PURE__ */ e(
  Nt,
  {
    joinComponent: /* @__PURE__ */ e(H, { icon: we }),
    list: n.split(".").map((t, o) => /* @__PURE__ */ e("span", { className: "font-bold text-xl capitalize", children: ce(t, "camel", "normal") }, o))
  }
), pe), Bs = ({ keyPanding: n }) => {
  const { when: t, value: o, keyId: r } = n, s = x(!1), i = x(""), l = w(), d = x(!1);
  return m.useEffect(() => {
    s.get && I(ot);
  }, [s.get]), /* @__PURE__ */ a(
    "div",
    {
      onMouseEnter: () => d.set(!0),
      onMouseLeave: () => d.set(!1),
      className: b(`
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
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "flex justify-end w-[150px]", children: /* @__PURE__ */ a(
          "div",
          {
            className: b(`
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
              /* @__PURE__ */ e(P, { title: "remove this keypanding", children: /* @__PURE__ */ e(
                N,
                {
                  onClick: () => {
                    K.remove([r]), I("edit-keyPanding");
                  },
                  icon: R
                }
              ) }),
              /* @__PURE__ */ e(P, { title: "copy when value", children: /* @__PURE__ */ e(
                N,
                {
                  icon: Te,
                  onClick: async () => {
                    t && await navigator.clipboard.writeText(t);
                  }
                }
              ) }),
              /* @__PURE__ */ e(P, { title: "edit when", children: /* @__PURE__ */ e(
                N,
                {
                  onClick: () => {
                    s.set(!0), t && i.set(t);
                  },
                  icon: kt
                }
              ) }),
              /* @__PURE__ */ e(P, { title: `change to ${n.repeation ? "unrepeated" : "repeated"} key pending`, children: /* @__PURE__ */ e(
                N,
                {
                  onClick: () => {
                    K.setOneFeild(r, "repeation", !n.repeation);
                  },
                  icon: n.repeation ? ss : we
                }
              ) }),
              /* @__PURE__ */ e(P, { title: n.type == "up" ? "switch to down press" : "switch to up press", children: /* @__PURE__ */ e(
                N,
                {
                  onClick: () => {
                    n.keyId && K.setOneFeild(n.keyId, "type", n.type == "up" ? "down" : "up");
                  },
                  icon: n.type == "up" ? os : as
                }
              ) })
            ]
          }
        ) }) }),
        /* @__PURE__ */ e("div", { className: "px-2", children: o && /* @__PURE__ */ e(ge, { shortcut: o }) }),
        /* @__PURE__ */ a("div", { className: "text-xs col", children: [
          !s.get && (t || " - "),
          s.get && /* @__PURE__ */ e(
            Mn,
            {
              style: {
                backgroundColor: "transparent",
                borderColor: "0px"
              },
              value: i.get,
              onValueChange: i.set,
              id: ot,
              onFocus: (c) => {
                c.currentTarget.select();
              },
              onKeyDown: (c) => {
                c.key.toLowerCase() == "enter" && c.currentTarget.blur();
              },
              onBlur: (c) => {
                K.setOneFeild(r, "when", c.currentTarget.value), s.set(!1);
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
function eo() {
  const n = Y(ne.commandId), t = x(""), o = Xe.getAll(), r = Xe.getEntity(), s = m.useMemo(() => n && r[n] || null, [r, n]), i = K.getAll(), l = m.useMemo(() => i.filter(({ value: f }) => f), [i]), d = m.useMemo(() => s ? ie.join(s, i, "commandId->command") : null, [s, i]), c = m.useMemo(() => o.map((f) => ({
    command: f,
    keys: ie.join(f, i, "commandId->command")
  })), [l]), h = m.useMemo(() => c.filter(({ keys: f }) => f.some(({ value: u }) => u == t.get)), [c, t]), g = w();
  return m.useEffect(() => {
    t.set("");
  }, [s]), /* @__PURE__ */ e(
    G,
    {
      hidden: !s,
      onClick: (f) => {
        f.currentTarget == f.target && (O(ne.commandId, null), O(ne.position, null));
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
          className: b(
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
            const u = [f.ctrlKey, f.altKey, f.shiftKey].filter(Boolean).length;
            if (!u && ["escape", "backspace"].includes(f.key)) {
              if (t.get) {
                t.set("");
                return;
              }
            } else if (!u && f.key == "enter" && t.get) {
              K.add([
                {
                  command: s.commandId,
                  value: t.get,
                  keyId: Fe()
                }
              ]), t.set("");
              return;
            }
            const y = ns.fromEvent(f);
            t.set(y);
          },
          children: [
            /* @__PURE__ */ a("div", { className: "relative flex justify-center items-center gap-3 p-2", children: [
              (s == null ? void 0 : s.commandId) && /* @__PURE__ */ e($s, { commandId: s.commandId }),
              /* @__PURE__ */ e(
                N,
                {
                  className: b(`
              absolute
              right-2
              top-1/2
              transform
              -translate-y-1/2
            `),
                  onClick: async () => {
                    O(ne.commandId, null), O(ne.position, null), I("findConfigurations");
                  },
                  icon: R
                }
              )
            ] }),
            /* @__PURE__ */ e(k, {}),
            /* @__PURE__ */ a("div", { className: "flex flex-col flex-wrap items-center", children: [
              d == null ? void 0 : d.map((f, u) => /* @__PURE__ */ e(Bs, { keyPanding: f }, u)),
              !(d != null && d.length) && /* @__PURE__ */ e("div", { className: "py-2", children: "no combinition defined" })
            ] }),
            /* @__PURE__ */ e(k, {}),
            /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-2 text-4xl", children: /* @__PURE__ */ e(ge, { shortcut: t.get }) }),
            !!h.length && /* @__PURE__ */ a("div", { children: [
              /* @__PURE__ */ e(k, {}),
              /* @__PURE__ */ e("div", { className: "flex justify-center p-2", children: /* @__PURE__ */ a(ve, { children: [
                /* @__PURE__ */ e(A, { content: "existe" }),
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
export {
  rs as CameraView,
  ls as Commands,
  Xs as DevReadingHTML,
  is as FindCommandInput,
  cs as FindSettingFeild,
  zs as FixedProfileView,
  ds as Header,
  ms as HeaderNotification,
  fs as HeaderSettings,
  hs as KeyboardShortcuts,
  Zs as KeyboardView,
  gs as LeftSide,
  _s as LeftSideView,
  As as LoginContent,
  Ts as LoginPage,
  bs as MenuList,
  vs as NotifaysSlot,
  xs as Notifications,
  Js as PDFView,
  Vs as ProfileContent,
  Rs as ProfileView,
  ws as RightSide,
  Ps as SettingUpdateView,
  Ls as SettingUpdating,
  Is as Settings,
  Ns as SettingsList,
  Fs as SettingsSide,
  Cs as SettingsTree,
  Ms as SettingsView,
  Ds as SignupPage,
  Qs as Test,
  js as Toasts,
  eo as UpdateKeyboardShortcut,
  ks as UserSetting,
  Os as Window
};
