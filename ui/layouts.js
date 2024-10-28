import { a as i, E as R, j as e, L as C, g as Je, h as _e, u as ae, C as Se, T as w, F as H, k as z, S as T, I as et, e as Nt, c as Fe, b as Ct, P as zt, J as tt, A as Ee, d as kt } from "./SeparatedComponents-BcE_KymC.mjs";
import h, { useState as It, useEffect as Mt } from "react";
import { v as J, u as P, a as b, i as ue, e as V, o as nt, g as _, j as st, k as St, l as ot, t as Ft, m as Et, n as Y, b as k, p as jt, s as F, q as rt, r as ie, f as O, w as M, x as B, d as at, y as ee, z as pe, A as Dt, B as it, C as $, h as ne, D as Ae, E as Lt, F as Bt, G as Z, H as Tt, I as ve, J as Ot, K as X, L as ye, M as Qt, N as lt, O as Ht, P as ze, Q as ct, R as Qe, S as Ut, T as j, U as L, V as Rt, W as Vt, X as He, Y as Ue, Z as Kt, _ as Xt, $ as Wt, a0 as dt, a1 as Yt, a2 as Re, a3 as Gt, a4 as Ne, a5 as Zt, a6 as oe, a7 as qt, a8 as $t, a9 as Jt, aa as _t, ab as en, ac as tn } from "./index-BxYKyuvy.mjs";
import { m as q, t as A, e as le, g as ce, s as S, h as je, i as be, j as xe, c as K, k as De, d as ft, D as nn, l as sn, n as on, o as mt, p as rn, q as Le, u as Be, v as ge, w as an, x as ut, y as ln, z as vt, A as cn, B as ht, C as dn, E as Ve, F as fn, G as Te, H as mn, I as un, J as vn, K as hn, L as pn, M as gn, N as An, O as yn, P as pt, Q as bn, S as xn, R as wn, T as Pn, U as Nn, V as ke, W as Cn, X as zn, Y as kn, Z as In, _ as Mn, r as Ie, $ as Sn } from "./index-DdFCMvT_.mjs";
import { q as Fn, p as U, C as D, T as E, b as de, e as En, u as jn, f as Oe, K as we, t as Pe, r as Dn, L as fe, M as me, z as Ln, V as gt, i as Bn, d as Tn, m as On, n as At, B as yt, A as Qn, E as Hn, O as Un, S as Rn, N as Vn, F as Kn, P as Xn, D as Wn, R as Yn, a as Gn, I as Zn, h as Me, l as bt, c as qn, j as $n, w as Ke, y as Jn } from "./ViewPage-BVFt5x2t.mjs";
import { allIcons as W } from "./apis.js";
import { B as G, C as te } from "./Card-C9tcykD9.mjs";
const Ys = ({ children: t, min: n, max: s }) => {
  const r = J.useTemp("bottomSheet"), o = P(), a = b(null);
  h.useEffect(() => {
    r.get && a.set(0);
  }, [r.get]);
  const l = b(null), f = b(!1), c = b(!1), u = b(!1);
  return h.useEffect(() => {
    if (!f.get)
      return;
    const v = (g) => {
      g.preventDefault();
      const { clientY: p } = g, m = -(innerHeight - (l.get ?? 0)) + p - 28 / 2;
      a.set(m), c.set(!0);
    }, d = (g) => {
      f.set(!1), g.clientY && (g.clientY >= (l.get ?? 0) / 3 ? (r.set(!1), a.set(1e4), c.set(!1)) : a.set(0));
    };
    return document.addEventListener("mousemove", v), document.addEventListener("mouseup", d), () => {
      c.set(!1), document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", d);
    };
  }, [f.get]), /* @__PURE__ */ i(R, { children: [
    r.get && /* @__PURE__ */ e(
      "div",
      {
        className: "fixed inset-0",
        style: {
          ...o("shadow.color")
        },
        onClick: () => {
          r.set(!1), a.set(1e4);
        }
      }
    ),
    /* @__PURE__ */ i(
      Fn,
      {
        onContentChange: (v) => {
          l.set(v.height);
        },
        style: {
          ...o("secondary.background", {
            borderColor: "borders"
          }),
          ...q(
            r.get && typeof a.get == "number" && {
              transform: `translateY(${Math.max(a.get, 0)}px)`
            },
            n != null && {
              minHeight: n
            },
            s != null && {
              maxHeight: s
            }
          )
        },
        className: A(
          "fixed overflow-hidden z-[1000] flex-none min-h-[100px] flex flex-col max-h-[60vh] inset-x-0 bottom-0 border-x border-t border-solid border-transparent shadow-lg transform translate-y-full rounded-ss-3xl rounded-se-3xl",
          r.get && "translate-y-0",
          !c.get && "transition-transform duration-300"
        ),
        children: [
          /* @__PURE__ */ e(
            "div",
            {
              className: "cursor-row-resize",
              onTouchStart: () => {
                c.set(!0);
              },
              onTouchMove: (v) => {
                v.preventDefault(), u.set(!0);
                const { clientY: d } = v.touches[0], p = -(innerHeight - (l.get ?? 0)) + d - 28 / 2;
                a.set(p);
              },
              onTouchEnd: () => {
                u.set(!1), c.set(!1);
                const v = a.get;
                v && (v >= (l.get ?? 0) / 3 ? (a.set(1e4), r.set(!1)) : a.set(0));
              },
              onMouseDown: (v) => {
                f.set(!0), v.preventDefault();
              },
              children: /* @__PURE__ */ e(
                "div",
                {
                  style: {
                    ...o("secondary.background")
                  },
                  className: "z-[1000] flex justify-center items-center h-[28px]",
                  children: /* @__PURE__ */ e(
                    "div",
                    {
                      className: "rounded-full w-[70px] h-1.5",
                      style: {
                        ...o("gray.opacity.2")
                      }
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ e(C, {}),
          /* @__PURE__ */ e("div", { className: "overflow-hidden", children: t })
        ]
      }
    )
  ] });
};
function _n() {
  const t = ue.getTemp("type"), n = ue.getTemp("id"), s = h.useRef(null), r = b([]), o = b(null), a = h.useCallback((c) => {
    c.getTracks().forEach((u) => u.stop());
  }, []), l = h.useCallback(
    async (c) => {
      try {
        o.get && a(o.get);
        const u = await navigator.mediaDevices.getUserMedia({
          video: { deviceId: { exact: c } }
        });
        s.current && (s.current.srcObject = u, o.set(u));
      } catch (u) {
        console.error("Error switching camera: ", u);
      }
    },
    [o.get, a]
  ), f = P();
  return V(
    "camera-take",
    async () => {
      if (n && o.get && t === "take" && s.current) {
        const c = document.createElement("canvas");
        c.width = s.current.videoWidth, c.height = s.current.videoHeight;
        const u = c.getContext("2d");
        u == null || u.drawImage(s.current, 0, 0, c.width, c.height);
        const v = c.toDataURL("image/jpeg");
        a(o.get), ue.setTemp("result", v);
      }
    },
    [t, n, s, o.get, a]
  ), h.useEffect(() => (n && (async () => {
    try {
      const v = (await navigator.mediaDevices.enumerateDevices()).filter((d) => d.kind === "videoinput");
      if (r.set(v), v.length > 0) {
        const d = await navigator.mediaDevices.getUserMedia({
          video: { deviceId: { exact: v[0].deviceId } }
        });
        s.current && (s.current.srcObject = d, o.set(d));
      }
    } catch {
    }
  })(), () => {
    o.get && o.get.getTracks().forEach((u) => u.stop());
  }), [n]), /* @__PURE__ */ e(U, { hidden: !n, children: /* @__PURE__ */ e(
    Je,
    {
      className: "flex flex-col justify-between max-md:rounded-none w-[70vw] max-md:w-full h-[80vh] max-md:h-full",
      list: [
        /* @__PURE__ */ e(
          _e,
          {
            title: t || "Work Off",
            rightSide: /* @__PURE__ */ e(
              D,
              {
                icon: W.solid.faXmark,
                onClick: () => {
                  ue.setTemp("error", "Escape Take Image"), o.get && a(o.get);
                }
              }
            )
          }
        ),
        /* @__PURE__ */ e("div", { className: "p-2 relative overflow-hidden flex items-center", children: /* @__PURE__ */ e(
          "div",
          {
            className: "border border-transparent border-solid rounded-[10px] w-full h-full overflow-hidden",
            style: {
              ...f("secondary.background", {
                borderColor: "borders"
              })
            },
            children: t && n && /* @__PURE__ */ e("video", { autoPlay: !0, ref: s, id: "video-streaming", className: "w-full h-full" })
          }
        ) }),
        t === "take" && /* @__PURE__ */ i("div", { className: "flex justify-evenly p-4 w-full h-[70px] text-2xl", children: [
          r.get.length > 1 && /* @__PURE__ */ e(E, { title: "Change Camera Device", children: /* @__PURE__ */ e(
            D,
            {
              icon: W.solid.faCameraRotate,
              onClick: ({ clientX: c, clientY: u }) => {
                nt({
                  x: c,
                  y: u,
                  menu: r.get.map(({ label: v, deviceId: d }) => ({
                    label: v,
                    async click() {
                      await l(d);
                    }
                  }))
                });
              }
            }
          ) }),
          /* @__PURE__ */ e(E, { title: "Take Image", children: /* @__PURE__ */ e(
            D,
            {
              onClick: () => {
                _("camera-take");
              },
              icon: W.solid.faCamera
            }
          ) })
        ] })
      ],
      tabIndex: 1,
      id: "camera-view",
      style: {
        ...f("primary.background", {
          borderColor: "borders"
        })
      }
    }
  ) });
}
function es() {
  const [t] = ae("press ? for help");
  return /* @__PURE__ */ e(de, { "aria-multiline": !1, placeholder: `${t} 😊`, inputName: "findCommand" });
}
function ts() {
  const t = P(), n = st(), s = St(), r = h.useMemo(() => {
    const p = ot.getState();
    return s.map((y) => ({
      command: y,
      keys: le.join(y, n, "commandId->command")
    })).filter((y) => y.keys.filter((x) => {
      if (!x.when)
        return !0;
      try {
        return Ft(x.when)({
          state: p,
          focused: null
        });
      } catch {
        return !1;
      }
    }).length || !y.keys.length);
  }, [n, s]), o = Et(), a = Y("commandId"), l = k("commands/enum/prefixes.object"), f = Y("commands.isLoading"), c = jt.getAll(), u = h.useMemo(() => {
    const p = Object.entries(l || {}).map(([m, x]) => ({
      key: m,
      settingKey: `${x}.enum`,
      value: x
    })), y = {};
    return le.fullJoinOne(p, o, "settingKey->settingId").forEach(({ data: m, joinTo: x }) => {
      var N, I;
      y[m.key] = {
        lines: (I = (N = x == null ? void 0 : x.config) == null ? void 0 : N.list) == null ? void 0 : I.map(({ value: Q, content: se }) => ({
          id: Q,
          content: se,
          checked: (x == null ? void 0 : x.value) == Q
        })),
        // desc: "commands/enum/prefixes.object"
        onSubmit(Q) {
          F.setOneFeild(m.settingKey, "value", Q.id);
        }
      };
    }), q(
      {
        commands: {
          lines: r.map(({ command: m, keys: x }) => ({
            content: m.label || m.commandId,
            keyPanding: x.map(({ value: N }) => N),
            id: m.commandId
          })),
          onSubmit(m) {
            rt(m.id);
          }
        },
        settings: {
          lines: o.map(({ name: m, settingId: x, desc: N }) => ({
            id: x,
            tools: [],
            content: m || x,
            sub: N
          })),
          onSubmit(m) {
            ie(m.id);
          }
        },
        actions: {
          lines: c.map(({ actionId: m, status: x }) => ({
            content: `${ce(m.replaceAll(/[^a-z0-9A-Z]/gi, " ").replaceAll(/ +/gi, " "), void 0, "normal")} ${x == "loading" ? "[running...]" : ""}`,
            id: m
          })),
          onSubmit(m) {
            m.id && _(m.id);
          }
        }
      },
      y
    );
  }, [r, o, l, c]), v = O.getOneFeild("findCommand", "value"), d = h.useMemo(() => !!(v != null && v.match(/^ *\?/)), [v]), g = h.useMemo(() => q(
    d && {
      help: {
        lines: Object.entries(u).map(([p]) => ({
          id: p,
          content: p
        })),
        onSubmit(p) {
          M("commandId", p.id);
        }
      }
    },
    !d && u
  ), [u, v, d]);
  return h.useEffect(() => {
    a && d && M("commandId", "help");
  }, [a, v, d]), h.useEffect(() => {
    B.setOneFeild("cmds/list", "focused", 0);
  }, [v]), /* @__PURE__ */ e(
    U,
    {
      onLoadContent: () => {
        S("findCommand");
      },
      onPointerDown: (p) => {
        p.currentTarget == p.target && M("commandId", null);
      },
      hidden: !a,
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
                        ...t({
                          background: at("to right", "gray.opacity", "transparent", "gray.opacity")
                        })
                      },
                      children: a
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
                  S("findCommand");
                },
                children: [
                  /* @__PURE__ */ e(es, {}),
                  f && /* @__PURE__ */ e(Se, {})
                ]
              }
            ),
            /* @__PURE__ */ e(C, {}),
            /* @__PURE__ */ e(En, { data: g })
          ]
        }
      )
    }
  );
}
function ns() {
  const t = Y("dev.html.hoverPosition"), n = P();
  return /* @__PURE__ */ e(R, { children: t && /* @__PURE__ */ e(
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
function ss() {
  const t = ee.getOneFeild("settings", "focused"), n = pe.getTemp("config"), s = O.getOneFeild("findConfigurations", "value");
  Dt("findConfigurations");
  const r = P(), o = Y("configurations.found.length"), a = h.useMemo(() => ce(t || "no settings focused", "camel", "normal"), [t]), [l] = ae(`search ${a} in list`), [f] = ae(a), c = b(!1), u = O.getOneFeild("findConfigurations-local", "value");
  return it(
    () => {
      typeof u == "string" && O.setOneFeild("findConfigurations", "value", u);
    },
    [u],
    500
  ), /* @__PURE__ */ e(
    "div",
    {
      className: "p-2 border-transparent border-b border-solid",
      onClick: () => {
        S("findConfigurations");
      },
      children: /* @__PURE__ */ i("div", { className: "relative w-full", children: [
        /* @__PURE__ */ e(
          de,
          {
            selectWhenFocusIn: !0,
            inputName: "findConfigurations-local",
            placeholder: l,
            propositions: (t == "user" ? ["id", "name", "changed"] : t == "keyboardShortcuts" ? ["key", "label", "commandId"] : []).map((v) => `@${v}`).filter((v) => !(s != null && s.includes(v))),
            tabIndex: n ? -1 : 1
          }
        ),
        /* @__PURE__ */ e("div", { className: "top-1/2 right-2 absolute flex items-center gap-2 -translate-y-1/2", children: !!s && /* @__PURE__ */ e(
          E,
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
                    /* @__PURE__ */ e(w, { content: "found" }),
                    " ",
                    o,
                    " ",
                    /* @__PURE__ */ e(w, { content: f })
                  ] }),
                  c.get && /* @__PURE__ */ i("span", { children: [
                    " ",
                    "(",
                    /* @__PURE__ */ e(w, { content: "Delete" }),
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
const Xe = "visibility/header.boolean";
function Gs({ children: t }) {
  const n = k(Xe), s = b(!1), r = $("Shift");
  h.useEffect(() => {
    const c = (u) => {
      const v = u.x * 100 / innerWidth;
      s.set(u.y <= 100 && xe(25, v, 75));
    };
    return document.addEventListener("mousemove", c), () => document.removeEventListener("mousemove", c);
  }, []);
  const o = P(), a = Y("window.isFocused"), l = k("preferences/animation.boolean"), f = h.useMemo(() => o(a ? "primary.background" : "secondary.background", {
    borderColor: "borders",
    boxShadow: ne([
      {
        blur: 10,
        x: 0,
        y: 3,
        size: 0,
        colorId: "shadow.color"
      }
    ])
  }), [o, a]);
  return /* @__PURE__ */ i("div", { className: "top-0 z-[10000000000000000000000000000000000000] absolute inset-x-0", children: [
    /* @__PURE__ */ e(
      "div",
      {
        onClick: () => {
          F.setOneFeild(Xe, "value", !n);
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
          !s.get || !r ? "h-[0px]" : "border-b border-x h-[30px]"
        ),
        style: f,
        children: /* @__PURE__ */ e(H, { icon: n ? je : be })
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
          ...f
        },
        children: t
      }
    )
  ] });
}
function os() {
  const t = Ae("notification.header"), n = h.useMemo(() => (Array.isArray(t.get) ? t.get : []).slice(0, 3), [t.get]), s = P();
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
        jn,
        {
          data: n,
          slotId: "header-notifications",
          focusId: "header-notifications",
          component: ({ index: r, item: o }) => /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ i("div", { className: "flex justify-between items-center p-3", children: [
              /* @__PURE__ */ e("div", { children: o.message || "empty message" }),
              /* @__PURE__ */ e("div", { className: "flex tools", children: /* @__PURE__ */ e(
                z,
                {
                  onClick: () => {
                    t.set((a) => {
                      const l = a == null ? void 0 : a[r];
                      return l && (l.expanded = !l.expanded), a;
                    });
                  },
                  icon: K
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
                children: /* @__PURE__ */ e(T, { children: o.desc || "" })
              }
            )
          ] })
        }
      )
    }
  );
}
const rs = "visibility/configurations.boolean", as = () => {
  const t = ee.getOneFeild("settings", "focused"), n = h.useMemo(() => ce(String(t), "camel", "normal"), [t]), [s] = ae(n);
  return /* @__PURE__ */ i("div", { className: "flex justify-between items-center p-2", children: [
    /* @__PURE__ */ e("h1", { className: "font-bold text-2xl capitalize", children: s }),
    /* @__PURE__ */ e("div", { className: "tools", children: /* @__PURE__ */ e(
      E,
      {
        position: {
          x: "left",
          y: "bottom"
        },
        title: "close view configurations",
        children: /* @__PURE__ */ e(
          z,
          {
            onClick: () => {
              F.setOneFeild(rs, "value", !1);
            },
            icon: K
          }
        )
      }
    ) })
  ] });
};
function is() {
  const t = Lt(), n = B.getOneFeild("keyboardShortcuts", "focused");
  return V(
    "keyboard/update",
    () => {
      if (n == null)
        return;
      const s = t[n];
      s && (B.setOneFeild("keyboardShortcuts", "submited", n), M("keyboard.commandId", s.commandId), S("edit-keyPanding"));
    },
    [n, t]
  ), /* @__PURE__ */ e(
    Oe,
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
      component: ({ data: s, index: r, status: o, handel: a, style: l }) => {
        const { commandId: f, label: c = "" } = s, u = Bt(f), v = h.createRef(), d = P(), g = $("Control"), p = b(!1), y = h.useMemo(() => u.filter(({ value: m }) => m).map(({ value: m }) => m), [u]);
        return /* @__PURE__ */ i(
          "div",
          {
            onMouseEnter: () => p.set(!0),
            onMouseLeave: () => p.set(!1),
            onClick: () => {
              a.focus(), a.submit();
            },
            ref: v,
            className: "px-3 text-xs group row",
            style: {
              ...d(
                r % 2 && "primary.background",
                p.get && "gray.opacity",
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
                  children: (p.get || o.isFocused || o.isSubmited) && /* @__PURE__ */ i("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ e(
                      z,
                      {
                        onClick: async () => {
                          const m = JSON.stringify(s);
                          await navigator.clipboard.writeText(m);
                        },
                        icon: De
                      }
                    ),
                    /* @__PURE__ */ e(
                      z,
                      {
                        icon: ft,
                        onClick: (m) => {
                          M("keyboard.commandId", f), S("edit-keyPanding");
                        }
                      }
                    ),
                    !!u.length && /* @__PURE__ */ e(
                      z,
                      {
                        tabIndex: -1,
                        icon: K,
                        onClick: () => {
                          Z.remove(u.map(({ keyId: m }) => m));
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
                    g && (O.setOneFeild("findConfigurations", "value", `@commandId: ${f}`), await new nn().start(100), S("findConfigurations"));
                  },
                  children: c || f
                }
              ),
              /* @__PURE__ */ e("div", { className: A("col justify-end truncate"), children: /* @__PURE__ */ e(we, { shortcut: y }) })
            ]
          }
        );
      }
    }
  );
}
const he = ({ isActive: t, className: n, ...s }) => {
  const r = P();
  return /* @__PURE__ */ e(
    "span",
    {
      className: A("min-w-[100px] h-[35px] gap-2 rounded-md inline-flex items-center justify-center border border-solid border-transparent"),
      style: {
        ...r(
          "secondary.background",
          {
            borderColor: "borders"
          },
          t && "primary",
          t && {
            color: "primary.content"
          },
          {
            boxShadow: ne([
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
}, ls = [
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
], We = 200, cs = () => {
  const t = P(), n = b(!1), s = b(!1), r = b(!1), o = $("Shift"), a = b(!1), l = $("Control"), f = $("AltGraph");
  h.useEffect(() => {
    s.set(l);
  }, [l]), h.useEffect(() => {
    n.set(o);
  }, [o]), h.useEffect(() => {
    r.set(f);
  }, [f]);
  const c = b([-100, -100]), u = b(!1);
  it(
    () => {
      u.get && u.set(!1);
    },
    [u.get],
    We
  ), Tt(["keyboard-view"]);
  const v = O.useOneFeild("keyboard-view", "value"), d = b([0, innerHeight - 300]), g = k("visibility/keyboard.boolean");
  return /* @__PURE__ */ i(
    "div",
    {
      hidden: !g,
      className: "z-[100000000000000000000000000000] fixed flex flex-col border border-transparent border-solid rounded-xl w-1/2 max-md:w-2/3 h-[300px] overflow-hidden",
      style: {
        ...t("primary.background", {
          borderColor: "borders",
          boxShadow: ne([
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
          d.get && {
            left: `${d.get[0]}px`,
            top: `${d.get[1]}px`
          }
        )
      },
      children: [
        /* @__PURE__ */ i("div", { className: "flex justify-between items-center p-2", children: [
          /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
            z,
            {
              onPointerDown: () => {
                const p = (m) => {
                  d.set([m.pageX, m.pageY]);
                };
                document.addEventListener("mousemove", p);
                const y = () => {
                  document.removeEventListener("pointerup", y), document.removeEventListener("mousemove", p);
                };
                document.addEventListener("pointerup", y);
              },
              icon: sn,
              className: "cursor-grab"
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "propositions", children: v.get ? /* @__PURE__ */ e(
            "pre",
            {
              className: "px-2 py-1 border border-transparent border-solid rounded-md font-[inherit]",
              style: {
                ...t("secondary.background", {
                  borderColor: "borders"
                })
              },
              children: v.get
            }
          ) : /* @__PURE__ */ e("div", { className: "px-2 py-1 capitalize", children: /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(w, { content: "empty value" }) }) }) }),
          /* @__PURE__ */ e(
            E,
            {
              title: "close view",
              position: {
                x: "left"
              },
              children: /* @__PURE__ */ e(
                D,
                {
                  onClick: () => {
                    F.setOneFeild("visibility/keyboard.boolean", "value", !1);
                  },
                  icon: K
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
              state: r
            },
            {
              name: "control",
              state: s
            }
          ].map(({ state: p, name: y }, m) => /* @__PURE__ */ e(
            he,
            {
              isActive: p.get,
              onPointerDown: () => {
                p.set((x) => !x);
              },
              children: y
            },
            m
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
              onClick: (p) => {
                const y = p.pageX, m = p.pageY, { left: x, top: N } = p.currentTarget.getBoundingClientRect();
                c.set([y - x, m - N]), u.set(!0);
              },
              children: [
                c.get && /* @__PURE__ */ e(
                  "span",
                  {
                    className: A(
                      `opacity-0 blur-xl transition-[opacity] duration-[${We}] absolute pointer-events-none inline-block w-[100px] h-[100px] transform -translate-x-1/2 -translate-y-1/2 rounded-full`,
                      u.get && "opacity-100"
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
                /* @__PURE__ */ e("div", { className: "flex flex-col gap-3", children: ls.map((p, y) => /* @__PURE__ */ e("div", { className: "flex justify-center gap-3", children: p.map((m, x) => /* @__PURE__ */ i(
                  he,
                  {
                    onPointerDown: () => {
                      const N = n.get ? m.shift : r.get ? m.alt : m.normal, I = document.activeElement;
                      I && (I instanceof HTMLInputElement || I instanceof HTMLTextAreaElement) && (I.value = I.value.concat(N));
                    },
                    className: "relative",
                    children: [
                      n.get ? m.shift : r.get ? m.alt : m.normal,
                      !n.get && /* @__PURE__ */ e(
                        "span",
                        {
                          className: "right-1 bottom-1 absolute text-xs",
                          style: {
                            ...t({ color: "gray.opacity.2" })
                          },
                          children: r.get ? m.normal : m.alt
                        }
                      )
                    ]
                  },
                  x
                )) }, y)) }),
                /* @__PURE__ */ e(
                  he,
                  {
                    className: "w-full max-lg:w-full",
                    onPointerDown: () => {
                      v.set((p) => p + " "), !a.get && n.get && n.set(!1);
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
                v.set((p) => p == null ? void 0 : p.slice(0, -1));
              }
            },
            {
              name: "clean",
              onClick() {
                v.set("");
              }
            }
          ].map(({ onClick: p, name: y }, m) => /* @__PURE__ */ e(
            he,
            {
              className: "w-full max-lg:w-full",
              onPointerDown: () => {
                p == null || p();
              },
              children: y
            },
            m
          )) }) })
        ] })
      ]
    }
  );
}, Ye = "visibility/leftSide.boolean", Zs = ({ children: t }) => {
  const n = k(Ye), s = P();
  return /* @__PURE__ */ e(
    Pe,
    {
      position: "right",
      min: 200,
      temp: "leftSide.currentWidth",
      max: () => Math.max(window.innerWidth / 3, 350),
      handelResize: ({ size: r }) => {
        const o = xe(150, r);
        o != n && F.setOneFeild(Ye, "value", o);
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
}, ds = ({ item: t, status: n, handelFocus: s, handelSubmit: r }) => {
  if (t.type == "separator")
    return /* @__PURE__ */ e("div", { className: "my-1", children: /* @__PURE__ */ e(C, {}) });
  const o = P(), a = h.createRef();
  return /* @__PURE__ */ e("div", { className: "px-1", children: /* @__PURE__ */ i(
    "div",
    {
      ref: a,
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
      onClick: r(),
      className: "cursor-pointer flex items-center rounded-md px-4 py-2 w-full",
      children: [
        /* @__PURE__ */ e("div", { className: "inline-flex flex-end items-center gap-1 w-[60px]", children: t.checked && /* @__PURE__ */ e(et, { icon: W.solid.faCheck }) }),
        /* @__PURE__ */ i("div", { className: "flex justify-between items-center gap-1 w-full", children: [
          t.label && /* @__PURE__ */ e("span", { children: t.label }),
          t.accelerator && /* @__PURE__ */ e(we, { shortcut: t.accelerator })
        ] }),
        /* @__PURE__ */ e("div", { className: "w-[60px]" })
      ]
    }
  ) });
}, fs = () => {
  const t = P(), n = ve.getTemp("list"), s = ve.getTemp("position"), r = ve.getTemp("id"), o = h.createRef(), a = B.getOneFeild("menu-list", "submited");
  h.useEffect(() => {
    r && typeof a == "number" && (ve.setTemp("result", a), B.setOneFeild("menu-list", "submited", null));
  }, [a, r]);
  const l = Ot.getOne("menu-list");
  return /* @__PURE__ */ e(U, { className: "select-none scale-100", hidden: !r, children: r && /* @__PURE__ */ e(
    Dn,
    {
      positionId: "menu-list",
      ref: o,
      className: "absolute py-1 border border-transparent border-solid rounded-md w-[350px] max-md:w-[150px]",
      style: {
        ...t("secondary.background", {
          borderColor: "borders",
          boxShadow: ne([
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
      children: /* @__PURE__ */ e(fe, { skipFn: ({ enabled: f = !0, type: c }) => c == "separator" || !f, slotId: "menu-list", component: ds, data: n || [] })
    }
  ) });
}, ms = () => {
  const t = X.getAll();
  return /* @__PURE__ */ e(
    fe,
    {
      data: t,
      slotId: "notification",
      component: ({ item: n, index: s, id: r, handelFocus: o, handelSelect: a, handelSubmit: l, status: f }) => {
        const c = b(!1);
        function u(g, p, y, m) {
          return n.type == "warning" ? p : n.type == "error" ? y : n.type == "success" ? m : g;
        }
        const v = P(), d = k("preferences/animation.boolean");
        return /* @__PURE__ */ i(
          "div",
          {
            id: r,
            onClick: l(),
            onPointerDown: o(a()),
            onDoubleClick: () => {
              X.setOneFeild(n.id, "showDesc", !n.showDesc);
            },
            style: {
              ...v(
                "secondary.background",
                s % 2 && "primary.background",
                c.get && "gray.opacity",
                f.isFocused && {
                  borderColor: "secondary"
                },
                f.isSubmited && {
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
                    H,
                    {
                      icon: u(Be, Le, rn, mt),
                      style: {
                        ...v({
                          color: u("notifay.info", "notifay.warning", "notifay.error", "notifay.success")
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
                      ...v(u("notifay.info", "notifay.warning", "notifay.error", "notifay.success"))
                    }
                  }
                ),
                /* @__PURE__ */ i(
                  "div",
                  {
                    className: "flex gap-1 text-xl",
                    style: {
                      visibility: c.get || f.isSubmited ? "visible" : "hidden"
                    },
                    children: [
                      n.desc && /* @__PURE__ */ e(
                        z,
                        {
                          onClick: () => {
                            X.setOneFeild(n.id, "showDesc", !n.showDesc);
                          },
                          icon: n.showDesc ? je : be
                        }
                      ),
                      n.removable && /* @__PURE__ */ e(
                        z,
                        {
                          onClick: () => {
                            X.remove([n.id]);
                          },
                          icon: on
                        }
                      )
                    ]
                  }
                )
              ] }),
              n.desc && /* @__PURE__ */ e("div", { className: A("h-[0px]", d && "transition-[height] duration-700", n.showDesc && "h-[170px]"), children: /* @__PURE__ */ e(T, { className: "p-6", children: /* @__PURE__ */ e(me, { value: n.desc }) }) }),
              Array.isArray(n.buttons) && /* @__PURE__ */ e("div", { className: "flex justify-end p-5 overflow-x-auto", children: n.buttons.map(({ command: g, label: p }, y) => /* @__PURE__ */ e(
                G,
                {
                  className: "px-2 py-1 rounded-sm",
                  onClick: async () => {
                    typeof g == "object" ? _(g.action, g.arg) : rt(g);
                  },
                  children: p
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
}, Ce = "visibility/notifays.boolean", Ge = "visibility/notifays/nots.boolean";
function us() {
  const t = k(Ce), n = k(Ge), s = X.getIds(), r = P(), o = B.getOneFeild("notification", "focused"), a = X.getAll(), l = h.useMemo(() => typeof o != "number" ? null : a[o] || null, [a, o]);
  V(
    "toggleExpandNotifay",
    () => {
      l && X.setOneFeild(l.id, "showDesc", !l.showDesc);
    },
    [l]
  ), V(
    "notification.deleteFocus",
    () => {
      l && X.remove([l.id]);
    },
    [l]
  );
  const f = k("preferences/animation.boolean"), c = k("notification/clearAllConfirmation.boolean"), u = h.createRef();
  return /* @__PURE__ */ i(
    "div",
    {
      onClick: () => {
        t || F.setOneFeild(Ce, "value", !0);
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
          overflow-hidden
      `,
        !t && "translate-x-[calc(100%)]"
      ),
      style: {
        ...r({
          backgroundColor: "secondary.background",
          borderColor: "borders",
          boxShadow: ne([
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
        /* @__PURE__ */ e(
          "div",
          {
            onClick: ({ target: v }) => {
              var d;
              !t || (d = u.current) != null && d.contains(v) || F.setOneFeild(Ge, "value", !n);
            },
            children: /* @__PURE__ */ i("div", { className: "notifay-top-view flex justify-between items-center gap-2 p-3 cursor-pointer", children: [
              /* @__PURE__ */ i("h3", { className: "font-bold text-lg uppercase notifay-full-title", children: [
                /* @__PURE__ */ e(
                  "span",
                  {
                    style: {
                      ...r(
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
                /* @__PURE__ */ e(w, { content: "notifications" })
              ] }),
              /* @__PURE__ */ i("div", { ref: u, className: "inline-flex", children: [
                !!s.length && /* @__PURE__ */ e(
                  D,
                  {
                    onClick: async () => {
                      let v = 0;
                      if (c) {
                        const d = await ye({
                          title: "Clear All Notifications",
                          message: "Do You Want To Clear All Notifications",
                          checkboxLabel: "Don't Ask Me Again",
                          buttons: ["Yes", "No"],
                          defaultId: 0
                        });
                        d.checkboxChecked && Qt("notification/clearAllConfirmation.boolean", !1), v = d.response;
                      }
                      v || X.remove(a.filter(({ removable: d = !0 }) => d).map(({ id: d }) => d));
                    },
                    icon: W.solid.faXmarksLines
                  }
                ),
                /* @__PURE__ */ e(
                  D,
                  {
                    onClick: () => {
                      F.setOneFeild(Ce, "value", !1);
                    },
                    icon: W.solid.faChevronRight
                  }
                )
              ] })
            ] })
          }
        ),
        !!s.length && n && /* @__PURE__ */ e(C, {}),
        /* @__PURE__ */ e(
          Fe,
          {
            focusId: "notifications",
            ignoreOutline: !!l,
            className: A("flex flex-col overflow-hidden max-h-[80vh] rounded-ee-xl rounded-es-xl", f && "duration-300 transition-[max-height]", !n && "max-h-[0vh]"),
            children: /* @__PURE__ */ e(T, { children: /* @__PURE__ */ e(ms, {}) })
          }
        )
      ]
    }
  );
}
const vs = () => {
  const t = J.getTemp("pdf");
  return /* @__PURE__ */ e(U, { hidden: !t, children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Pe, { className: "h-[70vh]", position: "right", temp: "pdf", min: 400, max: () => innerWidth - 30, children: /* @__PURE__ */ e(
    Je,
    {
      className: "h-full overflow-hidden",
      list: [
        /* @__PURE__ */ e(
          _e,
          {
            title: "PDF..",
            rightSide: /* @__PURE__ */ e("div", { className: "flex tools", children: /* @__PURE__ */ e(E, { title: "close view", children: /* @__PURE__ */ e(
              D,
              {
                icon: K,
                onClick: () => {
                  J.setTemp("pdf", null);
                }
              }
            ) }) })
          }
        ),
        /* @__PURE__ */ e("div", { className: "p-2 h-full", children: t && /* @__PURE__ */ e("embed", { src: t, className: "rounded-xl w-full h-full overflow-hidden" }) })
      ]
    }
  ) }) }) });
}, Ze = "visibility/rightSide.boolean", qs = ({ children: t }) => {
  const n = k(Ze), s = P();
  return /* @__PURE__ */ e(
    Pe,
    {
      min: 200,
      temp: "rightSide.currentWidth",
      max: () => Math.max(window.innerWidth / 3, 350),
      handelResize: ({ size: r }) => {
        const o = xe(150, r);
        o != n && F.setOneFeild(Ze, "value", o);
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
function hs() {
  const t = lt();
  return /* @__PURE__ */ e(
    Oe,
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
      component: ({ data: n, index: s, style: r, status: o, handel: a, id: l }) => {
        const f = $("Control"), c = b(!1), u = h.useMemo(() => !n.settingId.match(/\.password$/gi) && !ge(n.def, n.value), [n]), v = P();
        V(
          "showSubmitSetting",
          () => {
            o.isSubmited && ie(n.settingId);
          },
          [o]
        );
        const d = h.useMemo(() => o.isFocused || o.isSubmited || c.get, [o, c.get]);
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
              ...v(
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
              ...r
            },
            onClick: () => {
              a.focus(), a.submit();
            },
            children: [
              !ge(n.value, n.def) && /* @__PURE__ */ e(
                "div",
                {
                  className: "left-0 absolute inset-y-0 w-[3px]",
                  style: {
                    ...v("primary")
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
                      className: A("text-xl capitalize truncate", f && "hover:underline cursor-pointer"),
                      onClick: () => {
                        f && n.name != null && O.setOneFeild("findConfigurations", "value", n.name);
                      },
                      children: n.name || /* @__PURE__ */ e(
                        "span",
                        {
                          style: v({
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
                    f && O.setOneFeild("findConfigurations", "value", `@id ${n.settingId}`);
                  },
                  children: [
                    /* @__PURE__ */ i(
                      "span",
                      {
                        className: A(f && "hover:underline cursor-pointer"),
                        style: v(
                          f && c.get && {
                            color: "primary"
                          }
                        ),
                        children: [
                          "@",
                          /* @__PURE__ */ e("span", { className: "font-normal", children: n.settingId })
                        ]
                      }
                    ),
                    /* @__PURE__ */ i("div", { className: A("flex opacity-0 transition-[opacity] duration-500", d && "opacity-100"), children: [
                      u && /* @__PURE__ */ e(E, { title: "reset", children: /* @__PURE__ */ e(
                        z,
                        {
                          icon: an,
                          onClick: () => {
                            F.setOneFeild(n.settingId, "value", n.def);
                          }
                        }
                      ) }),
                      /* @__PURE__ */ e(E, { title: "configurate", children: /* @__PURE__ */ e(
                        z,
                        {
                          onClick: () => {
                            ie(n.settingId);
                          },
                          icon: ut
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
      s.filter(([a]) => a == o).map(([, ...a]) => a.join(n)),
      n
    )
  }));
}
function ps() {
  const t = lt(), n = h.useMemo(() => t.map(({ settingId: s }) => s), [t]);
  return /* @__PURE__ */ e("div", { id: "settings.tree.view", className: "flex flex-col h-full overflow-hidden", tabIndex: 1, children: /* @__PURE__ */ e(T, { children: /* @__PURE__ */ e(
    Ln,
    {
      treeId: "setting-tree-layout",
      tree: xt(n, "/"),
      component: ({ data: s, status: r, parent: o, isFins: a, innerTree: l, level: f, handels: c }) => {
        const u = P(), [v, d] = s.split("."), g = b(!1), p = h.useMemo(() => {
          const y = [];
          let m = o;
          for (; m; )
            y.push(m.data), m = m.parent;
          return y.reverse().join("/");
        }, [a]);
        return /* @__PURE__ */ i(
          "div",
          {
            "aria-level": f,
            onMouseEnter: () => g.set(!0),
            onMouseLeave: () => g.set(!1),
            className: "flex items-center px-1 border border-transparent border-solid h-[30px]",
            onClick: async () => {
              c.focus(!0);
            },
            style: {
              ...u(
                g.get && "gray.opacity",
                r.isFocused && {
                  borderColor: "primary"
                }
              ),
              paddingLeft: `${f * 50}px`
            },
            children: [
              !d && /* @__PURE__ */ e("div", { className: "mx-1 tools", children: /* @__PURE__ */ e(
                z,
                {
                  iconClassName: "text-xs",
                  tabIndex: -1,
                  icon: r.isExpanded ? be : ln,
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
                  a && v,
                  !a && /* @__PURE__ */ e("b", { children: v }),
                  /* @__PURE__ */ e(
                    "b",
                    {
                      className: "ml-1",
                      style: {
                        ...u({
                          color: "primary"
                        })
                      },
                      children: !!(l != null && l.length) && `(${l == null ? void 0 : l.length})`
                    }
                  )
                ] }),
                d && /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e(
                    "span",
                    {
                      className: "px-2 py-1 rounded-md",
                      style: {
                        ...u("gray.opacity")
                      },
                      children: d
                    }
                  ),
                  /* @__PURE__ */ e(
                    z,
                    {
                      onClick: () => {
                        ie(p);
                      },
                      icon: ut,
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
function gs() {
  const t = Ht(), n = h.useMemo(() => {
    const r = t.filter(({ settingId: o }) => !o.endsWith("password"));
    return vt(
      r.length && {
        async click() {
          const { response: o } = await ye({
            message: "Are You Sure About Reset All Configurations",
            defaultId: 1,
            title: "Reset All Config",
            buttons: ["No", "Yes"],
            type: "warning"
          });
          o && F.upsert(
            r.map((a) => {
              let l = { ...a };
              return l.def != null && (l.value = l.def), l;
            })
          );
        },
        icon: dn,
        title: "reset all"
      },
      {
        click() {
          ee.setOneFeild("settings.viewType", "focused", "list");
        },
        title: "list",
        icon: ht
      },
      {
        click() {
          ee.setOneFeild("settings.viewType", "focused", "tree");
        },
        title: "tree",
        icon: cn
      }
    );
  }, [t]), s = ze(n, "settings.layout.tools");
  return h.useEffect(() => {
    s && (s.click(), B.setOneFeild("settings.layout.tools", "submited", null));
  }, [s]), /* @__PURE__ */ i("div", { className: "relative flex flex-col w-full h-full overflow-hidden", children: [
    /* @__PURE__ */ i(Fe, { focusId: "settings.layouts", className: "flex justify-between items-center p-2", children: [
      /* @__PURE__ */ e("div", {}),
      /* @__PURE__ */ e("div", { className: "flex gap-1 tools", children: /* @__PURE__ */ e(
        fe,
        {
          slotId: "settings.layout.tools",
          data: n,
          component: ({ item: { click: r, title: o, icon: a }, tabIndex: l, handelFocus: f, status: c }) => {
            const u = P();
            return /* @__PURE__ */ e(
              E,
              {
                title: o,
                position: {
                  x: "center",
                  y: "top"
                },
                children: /* @__PURE__ */ e(
                  z,
                  {
                    icon: a,
                    onPointerDown: f(),
                    style: {
                      ...u(
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
    /* @__PURE__ */ e(C, {}),
    /* @__PURE__ */ e(
      gt,
      {
        views: {
          list: hs,
          tree: ps
        },
        viewId: "settings.viewType"
      }
    )
  ] });
}
function As() {
  const t = pe.getTemp("config");
  return h.useEffect(() => {
    t || ie(null);
  }, [t]), /* @__PURE__ */ i("div", { className: "flex flex-col w-full h-full overflow-hidden", children: [
    /* @__PURE__ */ e(ss, {}),
    /* @__PURE__ */ e(C, {}),
    t && /* @__PURE__ */ e(
      gt,
      {
        viewId: "settings",
        views: {
          keyboardShortcuts: is,
          user: gs,
          icons: Bn,
          colors: Tn
        }
      }
    )
  ] });
}
function ys() {
  const t = ee.getOne("settings"), n = h.useMemo(() => Object.entries((t == null ? void 0 : t.tabs) || {}).map(([r, o]) => ({
    id: r,
    ...o,
    isFocused: (t == null ? void 0 : t.focused) == r
  })), [t]), s = P();
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
        fe,
        {
          slotId: "configurations.side.list",
          data: n,
          component: ({ item: r }) => {
            const { id: o, news: a, isFocused: l, icon: f } = r, c = h.useMemo(() => `settings.${o}.show`, [o]), u = st(), v = h.useMemo(() => le.join({ cmdId: c }, u, "cmdId->command").map(({ value: y }) => y), [c, u]), [d] = ae(ce(o, "camel", "normal")), g = b(!1), p = P();
            return /* @__PURE__ */ i(
              E,
              {
                onMouseEnter: () => g.set(!0),
                onMouseLeave: () => g.set(!1),
                draggable: !0,
                title: `press ${v.map((y) => "`" + y + "`").join(" or ")}`,
                onClick: () => {
                  !l && ee.setOneFeild("settings", "focused", r.id);
                },
                style: {
                  ...p((l || g.get) && "primary.background")
                },
                className: "relative truncate cursor-pointer",
                children: [
                  l && /* @__PURE__ */ e("span", { className: "left-0 absolute inset-y-0 w-[2px]", style: { ...p("primary") } }),
                  /* @__PURE__ */ i("div", { className: "flex items-center gap-2 p-2", children: [
                    (f == null ? void 0 : f.value) && /* @__PURE__ */ e(H, { icon: Ve(f.type, f.value) }),
                    d,
                    a && /* @__PURE__ */ e(On, { children: /* @__PURE__ */ e(H, { icon: Ve(a.type, a.value) }) })
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
function bs() {
  return /* @__PURE__ */ e(Pe, { position: "right", min: () => innerWidth / 7, max: () => innerWidth / 3, className: "h-full", children: /* @__PURE__ */ e(ys, {}) });
}
const qe = "visibility/configurations.boolean";
function xs() {
  const t = k(qe), n = P();
  return h.useEffect(() => {
    t && pe.setTemp("config", !0);
  }, [t]), /* @__PURE__ */ e(
    At,
    {
      hidden: !t,
      onLoadContent: () => {
        S("findConfigurations-local");
      },
      onClick: async (s) => {
        s.currentTarget == s.target && F.setOneFeild(qe, "value", !1);
      },
      onTransitionEnd: () => {
        typeof t == "boolean" && pe.setTemp("config", t);
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
            /* @__PURE__ */ e(as, {}),
            /* @__PURE__ */ e(C, {}),
            /* @__PURE__ */ i("div", { className: "flex w-[70vw] h-[70vh]", children: [
              /* @__PURE__ */ e(bs, {}),
              /* @__PURE__ */ e(As, {})
            ] })
          ]
        }
      )
    }
  );
}
function ws({ settingId: t }) {
  const n = F.getOne(t), s = h.useMemo(() => n == null ? void 0 : n.value, [n]), r = h.useMemo(() => n == null ? void 0 : n.config, [n]), o = b(n == null ? void 0 : n.value);
  h.useEffect(() => {
    F.setOneFeild(t, "value", o.get);
  }, [o.get]), h.useEffect(() => {
    o.set(s);
  }, [n]);
  const a = h.useMemo(() => `setting:${(n == null ? void 0 : n.settingId) || ""}`, [n]), l = h.useMemo(() => {
    var u;
    const c = (u = a.match(/\.[a-zA-Z0-9]+$/gi)) == null ? void 0 : u[0].slice(1);
    return c || null;
  }, [a]), f = P();
  return /* @__PURE__ */ e(
    "div",
    {
      className: A((n == null ? void 0 : n.readonly) && "cursor-not-allowed"),
      style: {
        ...f((n == null ? void 0 : n.readonly) && "primary.background")
      },
      children: /* @__PURE__ */ i("div", { className: A((n == null ? void 0 : n.readonly) && "pointer-events-none"), children: [
        l == "boolean" && /* @__PURE__ */ e(yt, { id: a, state: o, config: r }),
        l == "array" && /* @__PURE__ */ e(Qn, { id: a, state: o, config: r }),
        l == "enum" && /* @__PURE__ */ e(Hn, { id: a, state: o, config: r }),
        l == "object" && /* @__PURE__ */ e(Un, { id: a, state: o, config: r }),
        l == "string" && /* @__PURE__ */ e(Rn, { id: a, state: o, config: r }),
        l == "number" && /* @__PURE__ */ e(Vn, { id: a, state: o, config: r }),
        l == "file" && /* @__PURE__ */ e(Ct, { id: a, state: o, config: r }),
        l == "filter" && /* @__PURE__ */ e(Kn, { id: a, state: o, config: r }),
        l == "password" && /* @__PURE__ */ e(Xn, { id: a, state: o, config: r }),
        l == "date" && /* @__PURE__ */ e(Wn, { id: a, state: o, config: r }),
        l == "regexp" && /* @__PURE__ */ e(Yn, { id: a, state: o }),
        l == "audio" && /* @__PURE__ */ e(Gn, { id: a, state: o, config: r }),
        l == "image" && /* @__PURE__ */ e(Zn, { id: a, state: o, config: r }),
        l == "pin" && /* @__PURE__ */ e(zt, { id: a, state: o, config: r })
      ] })
    }
  );
}
const Ps = () => {
  const t = P(), n = Ae("view.settings"), s = F.getOne(n.get || ""), r = h.useMemo(() => !s || s.settingId.match(/\.password$/gi) ? !1 : !ge(s.def, s.value), [s]), o = h.useMemo(() => {
    try {
      const a = Function(`return (state)=> \`${(s == null ? void 0 : s.desc) || "**no description defined**"}\` `)(), l = ot.getState();
      return a(l);
    } catch (a) {
      return fn.err(a), " - ";
    }
  }, [s == null ? void 0 : s.desc]);
  return /* @__PURE__ */ e(
    U,
    {
      onLoadContent: () => {
        n.get && S(`setting:${n.get}`);
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
              s && /* @__PURE__ */ i(R, { children: [
                /* @__PURE__ */ e("h1", { className: "text-2xl truncate", children: s.name }),
                /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-[1px] max-md:hidden text-xs", children: /* @__PURE__ */ e(
                  tt,
                  {
                    list: s.settingId.split("/").filter(Boolean).map((a, l) => {
                      var u;
                      const f = (u = a.match(/\..+$/gi)) == null ? void 0 : u[0].slice(1);
                      let c = null;
                      switch (f) {
                        case "boolean": {
                          c = pt;
                          break;
                        }
                        case "password": {
                          c = yn;
                          break;
                        }
                        case "number": {
                          c = An;
                          break;
                        }
                        case "string": {
                          c = gn;
                          break;
                        }
                        case "file": {
                          c = pn;
                          break;
                        }
                        case "enum": {
                          c = ht;
                          break;
                        }
                        case "object": {
                          c = hn;
                          break;
                        }
                        case "array": {
                          c = vn;
                          break;
                        }
                        case "audio":
                          c = un;
                      }
                      return /* @__PURE__ */ i(
                        "span",
                        {
                          className: "inline-flex items-center gap-x-2 px-2 py-1 rounded-md",
                          style: {
                            ...t("gray.opacity.2")
                          },
                          children: [
                            a.replaceAll(/\..+$/gi, ""),
                            c && /* @__PURE__ */ e(H, { icon: c })
                          ]
                        },
                        l
                      );
                    }),
                    joinComponent: /* @__PURE__ */ e(H, { icon: Te })
                  }
                ) })
              ] }),
              /* @__PURE__ */ i("div", { className: "flex tools", children: [
                r && /* @__PURE__ */ e(
                  D,
                  {
                    icon: mn,
                    onClick: async () => {
                      const { response: a } = await ye({
                        message: "are you sure about reset this setting",
                        buttons: ["No", "Yes"],
                        defaultId: 1
                      });
                      a && s && F.setOneFeild(s.settingId, "value", s.def);
                    }
                  }
                ),
                /* @__PURE__ */ e(
                  D,
                  {
                    onClick: () => {
                      n.set(null), S("findConfigurations");
                    },
                    icon: K
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e(C, {}),
            s && /* @__PURE__ */ i(R, { children: [
              /* @__PURE__ */ e(T, { className: "p-2 max-h-[150px]", children: /* @__PURE__ */ e(me, { value: o }) }),
              /* @__PURE__ */ e(C, {})
            ] }),
            n.get && /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ e(ws, { settingId: n.get }) })
          ]
        }
      )
    }
  );
}, Ns = ({ item: t, index: n }) => {
  const s = b(!1), r = b(!1), o = b(!1), a = b(0), { message: l } = t, f = P(), c = k("preferences/toastTime.number"), u = k("preferences/animation.boolean"), v = h.useMemo(() => t.time || c || 5, [c, t.time]);
  h.useEffect(() => {
    if (o.get) {
      const g = setTimeout(() => {
        t.id && ct.remove([t.id]), o.set(!1);
      }, 300);
      return () => {
        clearTimeout(g);
      };
    }
  }, [o.get, t]), h.useEffect(() => {
    let g = 0;
    const p = setInterval(() => {
      a.set(++g), g >= v && (o.set(!0), clearInterval(p));
    }, 1e3);
    return () => {
      clearInterval(p);
    };
  }, [v]), h.useEffect(() => {
    if (r.get) {
      const g = setTimeout(() => {
        r.set(!1);
      }, 3e3);
      return () => {
        clearTimeout(g);
      };
    }
  }, [r.get]);
  function d(g, p, y, m) {
    return t.type == "warning" ? p : t.type == "error" ? y : t.type == "success" ? m : g;
  }
  return /* @__PURE__ */ i(
    "div",
    {
      className: A(
        "flex z-[100000] items-center w-full justify-between p-2 opacity-100 scale-100",
        o.get && "opacity-0 scale-0",
        u && "transition-[transform,opacity] duration-300"
      ),
      onMouseEnter: () => s.set(!0),
      onMouseLeave: () => s.set(!1),
      style: {
        ...f(n % 2 && "gray.opacity")
      },
      children: [
        /* @__PURE__ */ i("div", { className: "inline-flex items-center gap-1", children: [
          /* @__PURE__ */ e(
            H,
            {
              icon: d(Be, Le, bn, mt),
              style: {
                ...f({
                  color: d("notifay.info", "notifay.warning", "notifay.error", "notifay.success")
                })
              }
            }
          ),
          /* @__PURE__ */ e("div", { className: "w-full overflow-hidden", children: /* @__PURE__ */ e(me, { value: l.toString() }) })
        ] }),
        /* @__PURE__ */ i("div", { className: "flex items-center", children: [
          /* @__PURE__ */ e(
            "span",
            {
              className: A("relative rounded-full w-[30px] h-[30px] mx-2 inline-flex items-center justify-center"),
              style: {
                ...f("gray.opacity")
              },
              children: v - a.get
            }
          ),
          /* @__PURE__ */ i("div", { className: A("tools w-[0px] flex gap-1 items-center overflow-hidden", s.get && "w-[50px]", u && "transition-[width]"), children: [
            /* @__PURE__ */ e(
              z,
              {
                onClick: async () => {
                  r.set(!0), await navigator.clipboard.writeText(l.toString());
                },
                icon: r.get ? pt : De
              }
            ),
            /* @__PURE__ */ e(
              z,
              {
                onClick: () => {
                  o.set(!0);
                },
                icon: K
              }
            )
          ] })
        ] })
      ]
    }
  );
}, Cs = () => {
  const t = ct.getAll(), n = P(), s = k("preferences/animation.boolean"), r = h.useMemo(() => Ns, []), o = k("toast/position.enum");
  return /* @__PURE__ */ e(
    "div",
    {
      className: A(
        "fixed z-[100000000000000000000000000000] max-w-[90vw] min-w-[300px] border overflow-hidden border-transparent rounded-md border-solid left-1/2 transform -translate-x-1/2 scale-0",
        !!(t != null && t.length) && "scale-100",
        s && "transition-transform duration-300",
        o == "top" && "top-[50px]",
        o == "bottom" && "bottom-[50px]"
      ),
      style: {
        ...n("toast.background", {
          boxShadow: ne([
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
      children: /* @__PURE__ */ e(T, { className: "max-h-[400px]", children: t == null ? void 0 : t.map((a, l) => /* @__PURE__ */ e(r, { index: l, item: a }, a.id)) })
    }
  );
}, re = {
  commandId: "keyboard.commandId",
  position: "keyboard.editingPosition"
}, $e = "key.changeWhen", zs = h.memo(({ commandId: t }) => /* @__PURE__ */ e(
  tt,
  {
    joinComponent: /* @__PURE__ */ e(H, { icon: Te }),
    list: t.split(".").map((n, s) => /* @__PURE__ */ e("span", { className: "font-bold text-xl capitalize", children: ce(n, "camel", "normal") }, s))
  }
), ge), ks = ({ keyPanding: t }) => {
  const { when: n, value: s, keyId: r } = t, o = b(!1), a = b(""), l = P(), f = b(!1);
  return h.useEffect(() => {
    o.get && S($e);
  }, [o.get]), /* @__PURE__ */ i(
    "div",
    {
      onMouseEnter: () => f.set(!0),
      onMouseLeave: () => f.set(!1),
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
        ...l(f.get && "gray.opacity")
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
              /* @__PURE__ */ e(E, { title: "remove this keypanding", children: /* @__PURE__ */ e(
                z,
                {
                  onClick: () => {
                    Z.remove([r]), S("edit-keyPanding");
                  },
                  icon: K
                }
              ) }),
              /* @__PURE__ */ e(E, { title: "copy when value", children: /* @__PURE__ */ e(
                z,
                {
                  icon: De,
                  onClick: async () => {
                    n && await navigator.clipboard.writeText(n);
                  }
                }
              ) }),
              /* @__PURE__ */ e(E, { title: "edit when", children: /* @__PURE__ */ e(
                z,
                {
                  onClick: () => {
                    o.set(!0), n && a.set(n);
                  },
                  icon: ft
                }
              ) }),
              /* @__PURE__ */ e(E, { title: `change to ${t.repeation ? "unrepeated" : "repeated"} key pending`, children: /* @__PURE__ */ e(
                z,
                {
                  onClick: () => {
                    Z.setOneFeild(r, "repeation", !t.repeation);
                  },
                  icon: t.repeation ? wn : Te
                }
              ) }),
              /* @__PURE__ */ e(E, { title: t.type == "up" ? "switch to down press" : "switch to up press", children: /* @__PURE__ */ e(
                z,
                {
                  onClick: () => {
                    t.keyId && Z.setOneFeild(t.keyId, "type", t.type == "up" ? "down" : "up");
                  },
                  icon: t.type == "up" ? Pn : Nn
                }
              ) })
            ]
          }
        ) }) }),
        /* @__PURE__ */ e("div", { className: "px-2", children: s && /* @__PURE__ */ e(we, { shortcut: s }) }),
        /* @__PURE__ */ i("div", { className: "text-xs col", children: [
          !o.get && (n || " - "),
          o.get && /* @__PURE__ */ e(
            kt,
            {
              style: {
                backgroundColor: "transparent",
                borderColor: "0px"
              },
              value: a.get,
              onValueChange: a.set,
              id: $e,
              onFocus: (c) => {
                c.currentTarget.select();
              },
              onKeyDown: (c) => {
                c.key.toLowerCase() == "enter" && c.currentTarget.blur();
              },
              onBlur: (c) => {
                Z.setOneFeild(r, "when", c.currentTarget.value), o.set(!1);
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
function Is() {
  const t = Y(re.commandId), n = b(""), s = Qe.getAll(), r = Qe.getEntity(), o = h.useMemo(() => t && r[t] || null, [r, t]), a = Z.getAll(), l = h.useMemo(() => a.filter(({ value: d }) => d), [a]), f = h.useMemo(() => o ? le.join(o, a, "commandId->command") : null, [o, a]), c = h.useMemo(() => s.map((d) => ({
    command: d,
    keys: le.join(d, a, "commandId->command")
  })), [l]), u = h.useMemo(() => c.filter(({ keys: d }) => d.some(({ value: g }) => g == n.get)), [c, n]), v = P();
  return h.useEffect(() => {
    n.set("");
  }, [o]), /* @__PURE__ */ e(
    U,
    {
      hidden: !o,
      onClick: (d) => {
        d.currentTarget == d.target && (M(re.commandId, null), M(re.position, null));
      },
      onLoadContent: () => {
        o && S("edit-keyPanding");
      },
      children: /* @__PURE__ */ i(
        "div",
        {
          style: {
            ...v("primary.background", {
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
          onKeyDown: (d) => {
            if (d.currentTarget != d.target || !o)
              return;
            d.stopPropagation(), d.preventDefault(), d.key = d.key.toLowerCase();
            const g = [d.ctrlKey, d.altKey, d.shiftKey].filter(Boolean).length;
            if (!g && ["escape", "backspace"].includes(d.key)) {
              if (n.get) {
                n.set("");
                return;
              }
            } else if (!g && d.key == "enter" && n.get) {
              Z.add([
                {
                  command: o.commandId,
                  value: n.get,
                  keyId: Ut()
                }
              ]), n.set("");
              return;
            }
            const p = xn.fromEvent(d);
            n.set(p);
          },
          children: [
            /* @__PURE__ */ i("div", { className: "relative flex justify-center items-center gap-3 p-2", children: [
              (o == null ? void 0 : o.commandId) && /* @__PURE__ */ e(zs, { commandId: o.commandId }),
              /* @__PURE__ */ e(
                z,
                {
                  className: A(`
              absolute
              right-2
              top-1/2
              transform
              -translate-y-1/2
            `),
                  onClick: async () => {
                    M(re.commandId, null), M(re.position, null), S("findConfigurations");
                  },
                  icon: K
                }
              )
            ] }),
            /* @__PURE__ */ e(C, {}),
            /* @__PURE__ */ i("div", { className: "flex flex-col flex-wrap items-center", children: [
              f == null ? void 0 : f.map((d, g) => /* @__PURE__ */ e(ks, { keyPanding: d }, g)),
              !(f != null && f.length) && /* @__PURE__ */ e("div", { className: "py-2", children: "no combinition defined" })
            ] }),
            /* @__PURE__ */ e(C, {}),
            /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-2 text-4xl", children: /* @__PURE__ */ e(we, { shortcut: n.get }) }),
            !!u.length && /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e(C, {}),
              /* @__PURE__ */ e("div", { className: "flex justify-center p-2", children: /* @__PURE__ */ i(Ee, { children: [
                /* @__PURE__ */ e(w, { content: "existe" }),
                " (",
                u.length,
                ")"
              ] }) })
            ] })
          ]
        }
      )
    }
  );
}
function $s({ children: t }) {
  const n = k("visibility/header.boolean"), s = k("preferences/animation.boolean");
  return /* @__PURE__ */ i("div", { className: A("absolute bottom-0 inset-x-0 w-full border-solid border-transparent border-b top-0 flex flex-col", n && "top-[51px]", s && "transition-[top] duration-200"), children: [
    /* @__PURE__ */ e(os, {}),
    /* @__PURE__ */ e("div", { className: "flex items-stretch h-full overflow-hidden", children: t })
  ] });
}
const wt = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,} *$", Ms = () => {
  const t = P(), n = O.getOneFeild("signupUseremail", "value"), s = b(""), r = b(""), o = V(
    "signup",
    async () => {
      var a;
      if (!((a = j.server) != null && a.auth)) {
        L("Error When Loading The Auth", "error");
        return;
      }
      if (!n) {
        L("Email is required", "error"), S("signupUseremail");
        return;
      }
      if (!Rt(["signupUseremail"]).isValide) {
        L("Please fill the email correctly!", "error"), S("signupUseremail");
        return;
      }
      if (!s.get) {
        L("Password must be at least 6 characters", "error"), S("user-password");
        return;
      }
      if (s.get !== r.get) {
        L("Password and confirm password must be the same!", "error"), S("user-password-confirm");
        return;
      }
      await Vt(j.server.auth, n, s.get);
    },
    [n, s.get, r.get]
  );
  return /* @__PURE__ */ i(T, { className: "flex max-sm:flex-col items-center h-full", children: [
    /* @__PURE__ */ i("div", { className: "p-8 w-1/2 max-sm:w-full", children: [
      /* @__PURE__ */ i(
        "form",
        {
          onSubmit: async (a) => {
            a.preventDefault(), await _("signup");
          },
          children: [
            /* @__PURE__ */ i("div", { className: "mb-4", children: [
              /* @__PURE__ */ i("label", { className: "block mb-2 capitalize", children: [
                /* @__PURE__ */ e(w, { content: "email" }),
                " :",
                " "
              ] }),
              /* @__PURE__ */ e(
                de,
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
              /* @__PURE__ */ e("label", { className: "block mb-2 capitalize", children: /* @__PURE__ */ e(w, { content: "password" }) }),
              /* @__PURE__ */ e(Me, { placeholder: "********", id: "user-password", state: s })
            ] }),
            /* @__PURE__ */ i("div", { className: "mb-4", children: [
              /* @__PURE__ */ e("label", { className: "block mb-2 capitalize", children: /* @__PURE__ */ e(w, { content: "confirm password" }) }),
              /* @__PURE__ */ e(Me, { placeholder: "********", id: "user-password-confirm", state: r })
            ] }),
            /* @__PURE__ */ e(G, { icon: (o == null ? void 0 : o.status) == "loading" ? ke : void 0, iconClassName: A("animate-spin"), type: "submit", className: "py-2 rounded-md", children: /* @__PURE__ */ e(w, { content: "signup" }) })
          ]
        }
      ),
      /* @__PURE__ */ i("p", { className: "mt-8 text-center text-sm capitalize", children: [
        /* @__PURE__ */ e(
          "span",
          {
            style: {
              ...t({
                color: "gray.opacity.2"
              })
            },
            children: /* @__PURE__ */ e(w, { content: "already have an account?" })
          }
        ),
        " ",
        /* @__PURE__ */ e(
          Ee,
          {
            onClick: (a) => {
              a.preventDefault(), M("focusedLoginView", 0);
            },
            className: "capitalize",
            children: /* @__PURE__ */ e(w, { content: "login" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-8 w-1/2 max-sm:w-full", children: /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ e(
        "h2",
        {
          className: "mb-4 font-semibold text-2xl capitalize",
          style: {
            ...t({
              color: "primary"
            })
          },
          children: /* @__PURE__ */ e(w, { content: "sigin into water fetch" })
        }
      ),
      /* @__PURE__ */ e("p", { className: "mb-4 capitalize", children: /* @__PURE__ */ e(w, { content: "water fetch is a platform give's the possiblity for doing more thing by dahbia card" }) }),
      /* @__PURE__ */ i("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12", children: /* @__PURE__ */ e("span", { className: "text-xl", children: "📦" }) }),
        /* @__PURE__ */ i("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("h3", { className: "font-medium text-lg capitalize", children: /* @__PURE__ */ e(w, { content: "history" }) }),
          /* @__PURE__ */ e(
            "p",
            {
              style: {
                ...t({
                  color: "gray.opacity.2"
                })
              },
              className: "text-sm capitalize",
              children: /* @__PURE__ */ e(w, { content: "see all historys" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12", children: /* @__PURE__ */ e("span", { className: "text-xl", children: "💵" }) }),
        /* @__PURE__ */ i("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("h3", { className: "font-medium text-lg capitalize", children: /* @__PURE__ */ e(w, { content: "payouts" }) }),
          /* @__PURE__ */ e(
            "p",
            {
              className: "text-sm capitalize",
              style: {
                ...t({
                  color: "gray.opacity.2"
                })
              },
              children: /* @__PURE__ */ e(w, { content: "power save pays" })
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}, Ss = () => {
  const t = P(), n = O.getOneFeild("loginUseremail", "value"), s = b("");
  V(
    "login",
    async () => {
      var a;
      if (!((a = j.server) != null && a.auth)) {
        L("Error When Loading The Auth", "error");
        return;
      }
      if (!n) {
        L("Email is required", "error");
        return;
      }
      if (!s.get) {
        L("Password must be at least 6 characters", "error");
        return;
      }
      await He(j.server.auth, n, s.get);
    },
    [n, s.get]
  );
  const r = V(
    "sign-in-facebook",
    async () => {
      var a;
      (a = j.server) != null && a.auth && await Ue(j.server.auth, new Kt());
    },
    []
  ), o = V(
    "sign-in-google",
    async () => {
      var a;
      (a = j.server) != null && a.auth && await Ue(j.server.auth, new Xt());
    },
    []
  );
  return /* @__PURE__ */ i(T, { className: "flex max-sm:flex-col items-center", children: [
    /* @__PURE__ */ i("div", { className: "p-8 w-1/2 max-sm:w-full", children: [
      /* @__PURE__ */ i(
        "form",
        {
          onSubmit: async (a) => {
            var l;
            if (a.preventDefault(), !((l = j.server) != null && l.auth)) {
              L("Error When Loading The Auth", "error");
              return;
            }
            if (n && s.get)
              try {
                await He(j.server.auth, n, s.get);
              } catch {
                L("Password Or Email Is Incorrect 😴", "error");
              }
            else n ? L("Password Required!", "warning") : L("Email Required!", "warning");
          },
          children: [
            /* @__PURE__ */ i("div", { className: "mb-4", children: [
              /* @__PURE__ */ i("label", { className: "block mb-2 capitalize", children: [
                /* @__PURE__ */ e(w, { content: "email" }),
                " :",
                " "
              ] }),
              /* @__PURE__ */ e(
                de,
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
              /* @__PURE__ */ e("label", { className: "block mb-2 capitalize", children: /* @__PURE__ */ e(w, { content: "password" }) }),
              /* @__PURE__ */ e(Me, { placeholder: "********", state: s })
            ] }),
            /* @__PURE__ */ e(G, { type: "submit", className: "py-2", children: /* @__PURE__ */ e(w, { content: "login" }) })
          ]
        }
      ),
      /* @__PURE__ */ i("div", { className: "flex justify-evenly items-center my-3", children: [
        /* @__PURE__ */ e(
          D,
          {
            iconClassName: A((o == null ? void 0 : o.status) == "loading" && "animate-spin"),
            icon: (o == null ? void 0 : o.status) == "loading" ? ke : Cn,
            onClick: async () => {
              await _("sign-in-google");
            }
          }
        ),
        /* @__PURE__ */ e(
          D,
          {
            iconClassName: A((r == null ? void 0 : r.status) == "loading" && "animate-spin"),
            icon: (r == null ? void 0 : r.status) == "loading" ? ke : zn,
            onClick: async () => {
              await _("sign-in-facebook");
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
            className: "capitalize",
            children: /* @__PURE__ */ e(w, { content: "don't have an account?" })
          }
        ),
        " ",
        /* @__PURE__ */ e(
          Ee,
          {
            onClick: (a) => {
              a.preventDefault(), M("focusedLoginView", 1);
            },
            className: "capitalize",
            children: /* @__PURE__ */ e(w, { content: "sign up" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-8 w-1/2 max-sm:w-full", children: /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ e(
        "h2",
        {
          className: "mb-4 font-semibold text-2xl capitalize",
          style: {
            ...t({
              color: "primary"
            })
          },
          children: /* @__PURE__ */ e(w, { content: "login into water fetch" })
        }
      ),
      /* @__PURE__ */ e("p", { className: "mb-4 capitalize", children: /* @__PURE__ */ e(w, { content: "water fetch is a platform give's the possiblity for doing more thing by dahbia card" }) }),
      /* @__PURE__ */ i("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12", children: /* @__PURE__ */ e("span", { className: "text-xl", children: "📦" }) }),
        /* @__PURE__ */ i("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("h3", { className: "font-medium text-lg capitalize", children: /* @__PURE__ */ e(w, { content: "history" }) }),
          /* @__PURE__ */ e(
            "p",
            {
              className: "text-sm",
              style: {
                ...t({
                  color: "gray.opacity.2"
                })
              },
              children: /* @__PURE__ */ e(w, { content: "see all historys" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12", children: /* @__PURE__ */ e("span", { className: "text-xl", children: "💵" }) }),
        /* @__PURE__ */ i("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("h3", { className: "font-medium text-lg capitalize", children: /* @__PURE__ */ e(w, { content: "payouts" }) }),
          /* @__PURE__ */ e(
            "p",
            {
              className: "text-sm capitalize",
              style: {
                ...t({
                  color: "gray.opacity.2"
                })
              },
              children: /* @__PURE__ */ e(w, { content: "power save pays" })
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}, Fs = () => {
  const t = Y("focusedLoginView");
  return /* @__PURE__ */ e(bt, { focused: t ?? 0, pages: [/* @__PURE__ */ e(Ss, {}), /* @__PURE__ */ e(Ms, {})] });
}, Es = ({ children: t = "" }) => {
  var a;
  const n = P(), s = Wt(), r = dt(), o = Y("env.isDev");
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
            (s == null ? void 0 : s.photoURL) && /* @__PURE__ */ e("img", { src: (a = s == null ? void 0 : s.photoURL) == null ? void 0 : a.toString(), className: "w-full h-full object-cover" }),
            !(s != null && s.photoURL) && /* @__PURE__ */ e(et, { icon: kn })
          ]
        }
      ),
      /* @__PURE__ */ i("div", { className: "max-sm:flex max-sm:flex-col max-sm:justify-cente", children: [
        /* @__PURE__ */ e("h1", { className: "text-2xl", children: (r == null ? void 0 : r.nickname) || "No Name" }),
        /* @__PURE__ */ e("p", { children: r == null ? void 0 : r.email }),
        r && /* @__PURE__ */ i("div", { className: "flex items-center", children: [
          /* @__PURE__ */ e("span", { children: "Phone Number" }),
          " : ",
          (s == null ? void 0 : s.phoneNumber) || " - "
        ] }),
        /* @__PURE__ */ e(
          G,
          {
            onClick: ({ clientX: l, clientY: f }) => {
              nt({
                x: l,
                y: f,
                menu: vt(
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
                  ].map(({ label: c, pathname: u }) => ({
                    label: c,
                    click() {
                      const v = document.createElement("a"), d = (o ? "http://localhost:2000" : "https://water-fetch-account.web.app") + "/profile/" + u;
                      v.target = "_blank", v.href = d, v.click();
                    }
                  })),
                  {
                    type: "separator"
                  },
                  {
                    async click() {
                      M("menu.id", null);
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
            icon: W.solid.faGear,
            children: /* @__PURE__ */ e(w, { content: "manage account" })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e(C, {}),
    /* @__PURE__ */ e(T, { className: "relative", children: t }),
    /* @__PURE__ */ e(C, {}),
    /* @__PURE__ */ e("div", { className: "flex justify-end gap-2 p-2", children: /* @__PURE__ */ e(
      G,
      {
        className: "max-sm:w-full sm:w-1/4 capitalize",
        style: {
          ...n("error")
        },
        onClick: async () => {
          if (!j.server)
            return;
          const { response: l } = await ye({
            title: "Logout",
            message: "Are you sure you want to logout?",
            buttons: ["No", "Yes"],
            defaultId: 1
          });
          l ? await Yt(j.server.auth) : L("Ignore Logout", "error");
        },
        children: /* @__PURE__ */ e(w, { content: "logout" })
      }
    ) })
  ] });
}, js = ({ children: t }) => {
  const n = dt();
  return /* @__PURE__ */ e("div", { className: "relative flex flex-col w-full h-full overflow-hidden", children: /* @__PURE__ */ e(
    qn,
    {
      render: async () => (await In(1e3), /* @__PURE__ */ i(R, { children: [
        n && /* @__PURE__ */ e(Es, { children: t }),
        !n && /* @__PURE__ */ e(Fs, {})
      ] })),
      loading: /* @__PURE__ */ e(Se, { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2" })
    }
  ) });
}, Ds = ({ children: t }) => {
  const n = J.getTemp("profile-view");
  return /* @__PURE__ */ e(U, { hidden: !n, children: /* @__PURE__ */ i(te, { className: "max-md:rounded-none w-5/6 max-md:w-full h-5/6 max-md:h-full", children: [
    /* @__PURE__ */ i("div", { className: "flex justify-between items-center p-3", children: [
      /* @__PURE__ */ e("h1", { className: "text-3xl", children: /* @__PURE__ */ e(w, { content: "Your Profile" }) }),
      /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e(
        D,
        {
          icon: K,
          onClick: () => {
            J.setTemp("profile-view", !1);
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ e(C, {}),
    /* @__PURE__ */ e(T, { children: /* @__PURE__ */ e(js, { children: t }) })
  ] }) });
}, Ls = () => {
  const t = Re.getTemp("id"), n = Re.getTemp("src"), s = h.createRef();
  return h.useEffect(() => {
    s.current && (s.current.onclose = () => {
      Gt();
    });
  }, [s.current]), /* @__PURE__ */ e(U, { hidden: !t, children: n && t && /* @__PURE__ */ e(te, { className: "w-[70vw] h-[70vh] overflow-hidden", children: /* @__PURE__ */ e("iframe", { ref: s, className: "w-full h-full", id: t, src: n }) }) });
}, Bs = "data:audio/wav;base64,UklGRsgsAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YaQsAADz/4P/qP6y/dn8NPzG+4n7ePuN+8X7HvyZ/DT98P3L/sf/4wAeAnkD9ASOBkoIJAodDDcObxDHEjwVqBeIGX8amRoRGhgZzhdOFqAUzBLZEMQOkQxACs0HPAWOAr//1fzJ+aP2W/P373Ls0egP5S7hM90a2ezUNNFzzinNZs3Rzg3R2NP/1m3aCt7V4cXl0ukA7lHyvfZN+/v/xASvCbUO2RMgGYYeBiSqKWcvSTU/O+FAU0V7SONJU0klR9NDuT8QOwU2uzA0K4Ulpx+rGYUTRQ3eBl4AuPnz8hTsFOXr3avWQ8+4xxPASLissEiqfKUaoo2gTqEUpF+otq3Rs2y6cMG2yD/Q+NfV39jnCfBd+MwAZQkYEvUa6yMNLUY2qz8pSdJSU1xbZGdqzW7Lcb9yDHESbVtnaWCSWAxQCUexPQc0JyoEILwVPwujANH11uq/33bUE8mGvcix46VbmpuQMomrgwCAAIAAgACAN4VYjNWURp5yqDazXb7nybvVwuEP7oL6JAf/EwchLS6NOwpJvlZ+ZEhxh3v/f/9//3//f/9//3//f/9/iXZaay9fL1KeRIE2CSgtGRQKp/r66iHbD8u4ujyq0JlYiwCAAIAAgACAAIAAgACAAIAAgACAAIAAgGKBPpbQq9TBVdgT7xAGWR3NNFBMC2Sze/9//3//f/9//3//f/9//3//f/9//3//f/9/0H53afBSojusIxkLGvLe2EO/gKV0jQCAAIAAgACAAIAAgACAAIAAgACAAIAAgACASI9opJK6s9F16doBnxreM0xN22RIeP9//3//f/9//3//f/9//3//f/9//39NdZ9gL0pSMjoZUP+M5OHJVLLknm2PJoMAgACAAIAAgACAAIAAgACA/oD0kVWlu7q70fHpMwNEHcs1hUohWxJoMXLcecZ//3//f/9//3/Mf/FzK2QhUXY7kyPzCXrw+dlfxzi426vYodWZNJPojXuJC4fiiOGPaZvQqmu9pdL06RQC4hcAKoQ4JEQxTVVUuFndXclg3GJNYvdceVJxQ5wwFhtLBjf0E+Wh2EnO5MUAvzS5ZbSEsIitFq6vs1C+QM2l35HyGwPZEP4bzyS6Ky0xXjVjOKA6+DvwO483+S1eIJcSbwYT/F3zMuxB5jXhG92d2bLWZ9Rw09/WYt9o6sH0dP2BBAUKVQ59EdITSxU7FoAWbRbiFMgQRwxECNAE8QGE/5j98fu2+qP56vg/+B74OPm7+ur7i/ys/Fv8tPvB+m759/cu9kL0FvSS90z8/wA0Be0IPgwnD80RGhQoFhAYqBe1EmkL1gO5/Cb2DvBW6gbl7d9K2yzZw9wL5kXyK/7bCFYSsBoSIo0oFS5WMFAsDCLoE2MF7Pe266Dgf9ZwzZzHH8g3z43c/u2C/5oP6h2eKsI1Sj02PtQ35Sp8GKAEs/F/4OfQBcRcvSu++8Um1O3nLP6PE+YmozeoQsxFIUFFNQsjBgzy82ndLcrcvcq5ib1uyKnZUPAZCtsiCjcSQ0VGVkH+NDIikgkz7orVvsTWvGS9osW/1N7pOQSBH/gzST+EQXw7+S3mGRoAIuWn0DvFpMI6yBzViOg2AScaXy2uN/U47jFyI48OFfeK4ZTSI8w7zifY/uis/bQRuiKmLA0uDieoGKsGD/Vm5Z7avtcU3Zbp/PjBB9gUvh6VIVwcFxGcBPP4dO7G5nzlmOs79cL+MgPlA+oI1RAMGoUjLij4I7IWOgMI8CbkPuJC6jT7oA+NHrcj+BpdB3P4IfQY++0LkB0dJk8jcRUSAZXxxuxS8xsDvBNaHLQZ0wwZ/Mzvgu3R9X0DEBD4FGUP7QMt+EzxAPSx/BsG6wzMC0MF/P0Q+Bb4d/xSATsFiAVCA8oA2P5i/rD+sf5m/hb/8gBYA1oFrgOs//D6H/hP+4kBMwg9CtIEUvza9BX1Jf2bB9YNHQoo/zD0W/El+VUGGQ8YDfEA+vP475f3KAZNDygNPwCE84PwMvkkB0sOBQpw/Yfz7vPI/aoIZQuABI76uvUW+jgC2AeqBZ//UfrY+r/+jwIBAwsBEf+O/tb+4v47/48AZgJzArz/Cvyw+xQAgQXdBfL/Kfkq+bwASwhFBx7+wPZs+eUDSwqTBVz6vvWa/DQHMQlsAJf3xPheAoAIUQRy+8f4qv5uBc4EBf9W+/P9RwL9ApsAg/68/nb//f+6AIsBTQCP/TP92QAYBEYBk/tD+64B5QXdAL35SPu6AzwGp/66+HP9ewU7BPv7CfrXABgFmwA3+079UwIlAoX+m/17/54AbAAaABf/Gf7g/2gCWgBb/Cj+VwMEAu/7x/yQA0cDJ/wY/CUDTQO//Kj8gQJoApj99/2eATcB7P4f/wMAbwCkACz/LP7cAOAB5/3I/cECYgFa/KD/uAP//s/8EwICAl/9K/8HAqn/mv4tAHsAFQAr/y3/NQH6/4797gCKASH9o/9vAtn9jf5RAhD/iv6BAer//P4YAEAA3f/r/oUAzgAY/qwAHAGJ/dsA4ADY/RQBSwCh/nkA7/9T/37/cQB0/zf/TAGa/ggAKQEy/iMB9P8+/+4Anv/D/0UACgAY//MAJv/3/78Al/4qARj/+/8vAHv/AwBcAEH/tQCS/w4AkQA5/wsBK/+OAMX/2/9NAKX/NQDt/67/TQA9/2kAQP88AJr/0f8NAFr/cwBR/7oAWf+CAI7/MwDs//P/9v/V/8v/7/+p/wEA4f/Q/xsAiP8PAKz/q//l/5//xv/O/9b/sv8xAKP/ZADs/y4AzP9IAO7/9f9CALv/DQDA/xYAtv/D/yoA2P8TAN3/9/8WAKb//v/p/9L/BwDj/wkAPwASADkAQQAFACgAMQD+/xYAEwDX/+P////c/9v/AADq/+T/AgAUAOv/2v/y//r/2//P/+L/6v/n/9z/5f/u/+X/0//F/8H/xP/J/7r/rP+g/5z/ov+s/7H/r/+t/6r/qP+j/5v/nv+h/6H/q/+z/7j/t/+x/7H/tP+x/6n/pP+b/5L/lP+U/5D/lv+U/4r/if+B/3//fP9//4H/g/+G/3r/df90/3f/ev+D/4z/iv+T/5j/mP+g/67/sv+0/6b/n/+h/5b/lP+a/5f/lv+c/5b/k/+M/4T/iP+E/4X/jf+N/43/j/+N/5D/jP+H/37/f/9+/3v/h/+S/47/iv+I/4T/hP+B/4D/gf+G/4r/i/+H/4H/fP92/3L/bf9r/3b/ff+B/4T/h/+K/43/iP9//3P/a/9j/1v/VP9M/0L/Pf85/0H/Sv9O/1P/WP9c/17/XP9b/1r/WP9P/0T/PP83/zL/Lf8p/yP/H/8b/xb/Df8C///+/v78/vz++/76/vn++P4B/wv/Ef8X/xz/If8m/yv/MP80/zj/NP8v/yr/Jf8g/xv/F/8S/w7/Cv8F/wL/Av8G/wv/Ef8W/xv/IP8k/yn/Lv8y/zf/O/8//0P/R/9L/0//Uv9W/1n/Xf9g/2P/Zv9q/23/cP9y/3X/eP97/33/gP+C/4X/h/+K/4z/jv+Q/5L/lP+W/5j/mv+c/57/oP+i/6P/pf+n/6j/qv+s/63/r/+w/7H/s/+0/7b/t/+4/7n/u/+8/73/vv+//8D/wf/C/8P/xP/F/8b/x//I/8n/yv/L/8z/zf/N/87/z//Q/9D/0f/S/9P/0//U/9X/1f/W/9b/1//Y/9j/2f/Z/9r/2//b/9z/3P/d/93/3v/e/97/3//f/+D/4P/h/+H/4f/i/+L/4//j/+P/5P/k/+T/5f/l/+X/5v/m/+b/5//n/+f/6P/o/+j/6P/p/+n/6f/p/+r/6v/q/+r/6//r/+v/6//r/+z/7P/s/+z/7P/t/+3/7f/t/+3/7v/u/+7/7v/u/+7/7//v/+//7//v/+//7//w//D/8P/w//D/8P/w//D/8f/x//H/8f/x//H/8f/x//L/8v/y//L/8v/y//L/8v/y//L/8//z//P/8//z//P/8//z//P/8//z//P/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9f/1//X/9f/1//X/9f/1//X/9f/1//X/9f/1//X/9f/1//X/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/2//b/9v/3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+P/4//j/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//n/+f/5//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+v/6//r/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v/+//7//v//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//z//P/8//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/7//j/9P/w/+3/6//p/+f/5v/m/+b/5//o/+n/6//u//H/9P/4//3/AQAFAAkADAAOABAAEgATABQAFAAUABMAEAALAAUA///5//P/7f/o/+P/3//b/9n/2P/Y/9j/2v/c/9//5P/p/+7/9P/5////BAAKAA8AFAAZABwAHwAhACIAIgAhACAAHQAaABYAEQAMAAcAAgD9//j/8//u/+n/5f/i/9//3f/c/9z/3f/e/+D/4//n/+z/8P/1//r///8DAAgADAARABUAGAAbAB0AHgAeAB4AHAAaABgAFAAQAAwACAADAP//+//2//L/7v/q/+f/5P/i/+H/4P/g/+H/4//l/+j/6//v//T/+P/8/wAABAAIAAwADwATABYAGAAZABoAGgAaABkAFwAUABEADgAKAAYAAgD+//r/9//z/+//7P/p/+b/5f/k/+P/4//k/+b/6P/r/+7/8v/1//n//f8AAAQACAALAA8AEgAUABYAFwAYABgAFwAWABQAEQAOAAsABwAEAAAA/f/5//b/8v/v/+z/6f/o/+b/5v/m/+b/5//p/+v/7v/y//X/+f/8/wAAAwAGAAoADQAQABIAFAAVABUAFQAVABMAEgAPAAwACQAGAAIA///7//j/9P/x/+7/7P/q/+n/6P/o/+j/6f/r/+z/7//y//X/+f/8/wAAAwAHAAoADQAPABEAEgATABMAEwASABEADwAMAAkABgADAP//+//4//X/8v/v/+3/7P/r/+r/6v/r/+z/7f/v//L/9f/4//z///8DAAYACQAMAA4AEAARABEAEQAQAA8ADgAMAAkABgADAP//+//4//X/8v/w/+7/7f/s/+z/7f/t/+//8P/z//b/+f/8/wAABAAHAAkACwANAA4ADwAPAA4ADQAMAAoACAAFAAEA/v/6//f/9P/y//H/8P/v/+//7//w//H/8//1//j/+//+/wIABQAHAAkACwAMAAwADAALAAoACQAHAAQAAQD+//v/+f/2//T/8//y//L/8v/y//P/9f/3//n//P/+/wEAAwAGAAcACAAJAAkACQAIAAYABQACAAAA/v/8//n/+P/2//X/9f/1//X/9v/3//n/+//9////AQACAAQABQAGAAYABQAFAAMAAgAAAP///f/8//r/+f/4//j/+P/4//n/+//8//3//v///wAAAQACAAIAAgACAAEAAAAAAP///v/+//3//P/8//v/+//8//z//f/9//3//v/+//7////////////////////////////////////+//7//v/+//3//f/9//z//P/8//z//f/9//7//////wAAAAABAAEAAQAAAP///v/9//z/+//7//r/+v/7//z//f/+/wAAAQACAAIAAgACAAEA///+//z/+//6//r/+v/6//z//f///wEAAgACAAMAAgABAAAA/v/8//v/+v/6//r/+//8//7/AAABAAIAAgACAAEA///+//z/+//7//v/+//8//3///8AAAEAAQABAAAA///+//3//P/8//z//f/9//7///8AAAAAAAD//////v/+//3//f/9//7//v/+//7//v/+//7//v////////////7//v/+//3//f/9//3//v//////AAAAAP///v/+//3//P/8//3//v///wAAAAAAAP///v/9//z//P/9//7///8AAAAAAAD///7//f/8//z//f/+////AAAAAP///v/9//3//f/9//7////////////+//7//v/+//7//v/+///////+//7//v/+//7//v/+//7//v/+//////////7//v/9//3//v////////////7//f/9//3//v///wAA///+//3//f/9//7//////////v/9//3//v////////////7//v/+//7//////////v/+//7//v/+//7//v/////////+//7//v/+//////////7//v/+//7//////////v/+//7//////////v/+//7//v///////v/+//7//v///////v/+//7//v/+//7//v////7//v/+//7///////7//v/+//7///////7//v/+///////+//7//v/////////+//7//v///////v/+//7//v/+//7//v/+//7//v///////v/+//7///////7//v///////v/+//7///////7//v/+/////v/+//7///////7//v/+//7////+//7//v///////v/+//7////+//7//v////7//v/+/////v/+//7////+//7//v////7//v/+//7////+//7//v////7//v///////v/+/////v/+///////+//7////+//7//v/+/////v/+/////v/+///////+//7////+//7////+//7////+//7//v////7//v///////v///////v///////v///////v////7//v/+/////v/+/////v/+/////v////7//v////7//v////7//v/+//7//v////7//v/+//7////+/////v/+/////v/+/////v/+//7//v////7////+//7//v/+//7//v/+/////v////7////+//7//v/+//7//v/+//7////+/////v/+//7//v/+//7////+/////v////7////+/////v/+//7////+/////v////7//v/+/////v////7//v////7//v/+//7//v////7//v////7////+/////v/+/////v/+//////////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////", Ts = () => {
  const t = Ne.getTemp("params"), n = Ne.getTemp("id"), s = P(), r = b(!1), o = Ne.useTemp("checked");
  h.useEffect(() => {
    typeof (t == null ? void 0 : t.checkboxChecked) == "boolean" && o.set(t.checkboxChecked);
  }, [t]), h.useEffect(() => {
    B.setOneFeild("dialog-list", "submited", null);
  }, [n]), h.useEffect(() => {
    B.setOneFeild("dialog-list", "focused", (t == null ? void 0 : t.defaultId) || 0);
  }, [t]), V(
    "dialog.cancel",
    () => {
      typeof (t == null ? void 0 : t.cancelId) == "number" && B.setOneFeild("dialog-list", "submited", t.cancelId);
    },
    [t]
  );
  const a = h.useMemo(() => n ? Bs : null, [n, t]);
  Zt(async () => {
    if (!a)
      return;
    const f = document.createElement("audio");
    f.src = a, await f.play();
  }, [n, t]);
  const l = k("preferences/animation.boolean");
  return /* @__PURE__ */ e(U, { hidden: !n, children: /* @__PURE__ */ i(te, { className: "rounded-xl lg:w-1/2 max-lg:w-2/3", children: [
    (t == null ? void 0 : t.title) && /* @__PURE__ */ i(R, { children: [
      /* @__PURE__ */ e("div", { className: "p-2", children: /* @__PURE__ */ e("h1", { className: "text-2xl", children: t == null ? void 0 : t.title }) }),
      /* @__PURE__ */ e(C, {})
    ] }),
    t && /* @__PURE__ */ i(R, { children: [
      /* @__PURE__ */ i("div", { className: "flex gap-5 p-2 w-full cursor-pointer", children: [
        !t.icon && /* @__PURE__ */ i(R, { children: [
          t.type == "question" && /* @__PURE__ */ e(H, { icon: Mn, className: "text-4xl" }),
          t.type == "info" && /* @__PURE__ */ e(
            H,
            {
              style: {
                ...s({
                  color: "notifay.info"
                })
              },
              icon: Be,
              className: "text-4xl"
            }
          ),
          t.type == "warning" && /* @__PURE__ */ e(
            H,
            {
              style: {
                ...s({
                  color: "notifay.warning"
                })
              },
              icon: Le,
              className: "text-4xl"
            }
          )
        ] }),
        typeof t.icon == "string" && /* @__PURE__ */ e($n, { src: t.icon }),
        /* @__PURE__ */ i(
          "div",
          {
            onClick: () => {
              r.set(!r.get);
            },
            className: "flex justify-between items-center w-full",
            children: [
              /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { children: t.message }) }),
              t.detail && /* @__PURE__ */ e(z, { className: "ml-2", icon: r.get ? je : be })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ e(C, {})
    ] }),
    /* @__PURE__ */ e(T, { className: A("h-[0vh] ", r.get && (t == null ? void 0 : t.detail) && "h-[30vh]", l && "transition-[height]"), children: (t == null ? void 0 : t.detail) && /* @__PURE__ */ e("div", { className: "p-2", children: /* @__PURE__ */ e(me, { value: t.detail }) }) }),
    r.get && (t == null ? void 0 : t.detail) && /* @__PURE__ */ e(C, {}),
    t && /* @__PURE__ */ i(Fe, { focusId: "dialog-list-focusable", className: "flex justify-between items-center p-2 rounded-ee-xl rounded-es-xl", children: [
      /* @__PURE__ */ e("div", { children: t.checkboxLabel && /* @__PURE__ */ e(
        yt,
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
        fe,
        {
          slotId: "dialog-list",
          data: t.buttons,
          component: ({ item: f, index: c, status: u, handelSubmit: v, handelFocus: d }) => /* @__PURE__ */ e(
            G,
            {
              className: "px-4 max-md:w-full",
              style: {
                ...s(
                  c != t.defaultId && "gray.opacity",
                  c != t.defaultId && { color: "text.color" },
                  u.isFocused && {
                    outlineColor: "primary"
                  },
                  u.isSubmited && {
                    backgroundColor: "primary",
                    color: "primary.content"
                  }
                )
              },
              onPointerDown: d(),
              onClick: v(),
              children: f
            },
            c
          )
        }
      ) })
    ] })
  ] }) });
}, Js = () => {
  const t = Ae("date-layout-time.id"), n = Y("date-layout-time.init"), s = b({ hour: null, minute: null });
  h.useEffect(() => {
    if (t.get)
      if (n) {
        let m = new Date(n);
        s.set({
          hour: m.getHours(),
          minute: m.getMinutes()
        });
      } else
        s.set({
          hour: null,
          minute: null
        });
  }, [t.get, n]);
  const r = b("hours"), o = h.useMemo(() => [12, ...Ie(1, 11)], []), a = h.useMemo(() => [...Ie(0, 19)], []), l = h.useCallback((m, x, N) => {
    const I = m / x * 2 * Math.PI, Q = N + N * Math.cos(I - Math.PI / 2), se = N + N * Math.sin(I - Math.PI / 2);
    return { x: Q, y: se };
  }, []), f = h.useCallback(
    (m) => {
      r.get === "hours" ? s.set({ ...s.get, hour: m }) : s.set({ ...s.get, minute: m });
    },
    [r.get]
  ), c = r.get === "hours" ? o : a, u = r.get === "hours" ? 12 : 20, v = (r.get === "hours", 120), d = P(), g = b("am"), p = b("0"), y = h.useMemo(() => {
    const m = r.get === "hours" ? s.get.hour : s.get.minute;
    if (m === null) return null;
    const x = m / u * 2 * Math.PI, N = v + v * Math.cos(x - Math.PI / 2), I = v + v * Math.sin(x - Math.PI / 2);
    let Q = r.get == "minutes" ? {
      0: [0, 19],
      20: [20, 39],
      40: [40, 59]
    } : {
      0: [0, 12],
      12: [12, 24]
    };
    const [se, Pt] = Q[r.get == "minutes" ? p.get : g.get];
    return {
      x: N,
      y: I,
      colorId: xe(se, m, Pt) ? "primary" : "gray.opacity"
    };
  }, [p.get, g.get, s.get, u, r.get]);
  return /* @__PURE__ */ e(U, { hidden: !t.get, children: /* @__PURE__ */ i(te, { className: "flex flex-col max-md:rounded-none w-1/2 max-md:w-full max-md:h-full", children: [
    /* @__PURE__ */ i("div", { className: "flex justify-between items-center gap-2 p-2", children: [
      /* @__PURE__ */ e("h1", { className: "text-3xl", children: /* @__PURE__ */ e(w, { content: "Date" }) }),
      /* @__PURE__ */ e("div", { className: "flex", children: /* @__PURE__ */ e(
        D,
        {
          icon: W.solid.faXmark,
          onClick: () => {
            n && t.get && (M("date-layout-time.canceled", !0), M("date-layout-time.result", n));
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ e(C, {}),
    /* @__PURE__ */ e("div", { className: "flex justify-center items-center w-full h-full", children: /* @__PURE__ */ i("svg", { width: "300", height: "300", className: "relative", children: [
      y !== null && /* @__PURE__ */ i(R, { children: [
        /* @__PURE__ */ e(
          "circle",
          {
            cx: "150",
            cy: "150",
            r: "10",
            style: {
              ...d({
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
              ...d({
                stroke: y.colorId
              })
            },
            strokeWidth: "2"
          }
        )
      ] }),
      c.map((m, x) => {
        const { x: N, y: I } = l(x, u, 120);
        let Q = r.get === "hours" && s.get.hour === +g.get + m || r.get === "minutes" && s.get.minute === +p.get + m;
        return /* @__PURE__ */ i(
          "g",
          {
            onClick: () => {
              r.get == "minutes" ? f(+p.get + m) : f(+g.get + m);
            },
            className: "cursor-pointer",
            children: [
              /* @__PURE__ */ e(
                "circle",
                {
                  cx: N + 30,
                  cy: I + 30,
                  r: r.get == "hours" ? "20" : "15",
                  style: {
                    ...d(
                      {
                        fill: "gray.opacity"
                      },
                      Q && {
                        fill: "primary"
                      }
                    )
                  }
                }
              ),
              /* @__PURE__ */ i(
                "text",
                {
                  x: N + 30,
                  y: I + 30,
                  dy: "0.3em",
                  textAnchor: "middle",
                  fontSize: r.get == "minutes" ? "13" : "16",
                  style: {
                    ...d(
                      {
                        fill: "text.color"
                      },
                      Q && {
                        fill: "primary.content"
                      }
                    )
                  },
                  className: "select-none",
                  children: [
                    r.get == "minutes" && m + +p.get,
                    r.get == "hours" && m + +g.get
                  ]
                }
              )
            ]
          },
          m
        );
      })
    ] }) }),
    /* @__PURE__ */ e(C, {}),
    /* @__PURE__ */ e("div", { className: "p-3 text-5xl text-center select-none", children: /* @__PURE__ */ i("span", { tabIndex: 1, className: "cursor-pointer", children: [
      /* @__PURE__ */ e(
        "span",
        {
          style: {
            ...d(
              r.get == "hours" && {
                color: "primary"
              }
            )
          },
          onClick: () => {
            r.set("hours");
          },
          className: A(r.get == "hours" && "font-bold"),
          children: s.get.hour == null ? "--" : s.get.hour >= 10 ? s.get.hour : `0${s.get.hour}`
        }
      ),
      ":",
      /* @__PURE__ */ e(
        "span",
        {
          style: {
            ...d(
              r.get == "minutes" && {
                color: "primary"
              }
            )
          },
          onClick: () => {
            r.set("minutes");
          },
          className: A(r.get == "minutes" && "font-bold"),
          children: s.get.minute == null ? "--" : s.get.minute >= 10 ? s.get.minute : `0${s.get.minute}`
        }
      )
    ] }) }),
    /* @__PURE__ */ e(C, {}),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "relative h-[90px] overflow-hidden", children: /* @__PURE__ */ e(
      bt,
      {
        pages: [
          /* @__PURE__ */ e("div", { className: "flex justify-center items-center px-2 w-full h-full", children: /* @__PURE__ */ e(
            Ke,
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
            Ke,
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
              state: p
            }
          ) })
        ],
        focused: r.get == "hours" ? 0 : 1
      }
    ) }) }),
    /* @__PURE__ */ e(C, {}),
    /* @__PURE__ */ i("div", { className: "flex gap-1 p-2", children: [
      /* @__PURE__ */ e(
        G,
        {
          className: "capitalize",
          style: {
            ...d("gray.opacity", {
              color: "text.color"
            })
          },
          onClick: () => {
            s.set({
              hour: null,
              minute: null
            });
          },
          children: /* @__PURE__ */ e(w, { content: "clear" })
        }
      ),
      /* @__PURE__ */ e(
        G,
        {
          className: "capitalize",
          onClick: () => {
            var x, N;
            let m = /* @__PURE__ */ new Date();
            typeof ((x = s.get) == null ? void 0 : x.hour) == "number" && m.setHours(s.get.hour), typeof ((N = s.get) == null ? void 0 : N.minute) == "number" && m.setMinutes(s.get.minute), M("date-layout-time.canceled", !1), M("date-layout-time.result", m.getTime());
          },
          children: /* @__PURE__ */ e(w, { content: "set" })
        }
      )
    ] })
  ] }) });
}, Os = () => {
  const t = P(), n = oe.getTemp("id"), s = oe.getTemp("list"), r = O.getOneFeild("find-item-from-enum", "value"), [o, a] = qt(() => r, [r], 700), l = h.useMemo(() => (s == null ? void 0 : s.filter(({ desc: d, content: g }) => Sn([g, d].join(" "), String(a)))) || [], [s, a]), f = ze(l, "enum-list", "focused"), c = ze(l, "enum-list", "submited"), u = k("preferences/animation.boolean");
  h.useEffect(() => {
    n && c && (oe.setTemp("result", c.value), B.setOneFeild("enum-list", "focused", null), B.setOneFeild("enum-list", "submited", null));
  }, [c, n]), h.useEffect(() => {
    M("enumIsLoading", o);
  }, [o]);
  const v = h.createRef();
  return /* @__PURE__ */ e(
    U,
    {
      hidden: !n,
      onClick: ({ target: d }) => {
        var g;
        (g = v.current) != null && g.contains(d) || oe.setTemp("id", null);
      },
      children: s && /* @__PURE__ */ i(
        "div",
        {
          ref: v,
          className: "flex flex-col border border-transparent border-solid rounded-md w-[60vw] max-md:w-3/4 h-[400px] max-md:h-3/4 overflow-hidden",
          style: {
            ...t("secondary.background", {
              borderColor: "borders"
            })
          },
          children: [
            /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ e(de, { inputName: "find-item-from-enum" }) }),
              /* @__PURE__ */ e(C, {})
            ] }),
            /* @__PURE__ */ i(T, { children: [
              !o && /* @__PURE__ */ e(
                Oe,
                {
                  minSize: 40,
                  maxSize: 200,
                  data: l || [],
                  slotId: "enum-list",
                  focusId: "enum-list",
                  itemSize: 40,
                  countLastItems: -1,
                  component: ({ data: d, style: g, status: p, handel: y }) => {
                    const m = P(), x = oe.getTemp("choised"), N = b(!1);
                    return /* @__PURE__ */ e(
                      "div",
                      {
                        onMouseEnter: (I) => N.set(!0),
                        onMouseLeave: (I) => N.set(!1),
                        style: {
                          ...g,
                          ...m(
                            x == d.value && {
                              color: "primary"
                            },
                            N.get && "gray.opacity",
                            p.isFocused && "primary",
                            p.isFocused && {
                              color: "primary.content"
                            }
                          )
                        },
                        onClick: () => {
                          y.focus(), y.submit();
                        },
                        className: A("cursor-pointer text-lg p-1 max-md:p-2 flex items-center justify-center", x == d.value && "font-bold"),
                        children: /* @__PURE__ */ e("span", { children: d.content || d.value })
                      }
                    );
                  }
                }
              ),
              o && /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-6 h-full", children: /* @__PURE__ */ e(Se, {}) })
            ] }),
            /* @__PURE__ */ i("div", { className: A("h-[0px]", u && "transition-[height] duration-200", (f == null ? void 0 : f.desc) && "h-[100px]"), children: [
              /* @__PURE__ */ e(C, {}),
              /* @__PURE__ */ e(
                "div",
                {
                  className: "flex justify-center items-center p-4 h-full text-center",
                  style: {
                    ...t("primary.background")
                  },
                  children: /* @__PURE__ */ e(me, { value: (f == null ? void 0 : f.desc) || "" })
                }
              )
            ] })
          ]
        }
      )
    }
  );
}, _s = ({ children: t }) => /* @__PURE__ */ i(R, { children: [
  t,
  /* @__PURE__ */ e(cs, {}),
  /* @__PURE__ */ e(Qs, {}),
  /* @__PURE__ */ e(vs, {}),
  /* @__PURE__ */ e(Ls, {}),
  /* @__PURE__ */ e(Ds, {}),
  /* @__PURE__ */ e(ts, {}),
  /* @__PURE__ */ e(xs, {}),
  /* @__PURE__ */ e(Ps, {}),
  /* @__PURE__ */ e(Is, {}),
  /* @__PURE__ */ e(_n, {}),
  /* @__PURE__ */ e(Os, {}),
  /* @__PURE__ */ e(us, {}),
  /* @__PURE__ */ e(Cs, {}),
  /* @__PURE__ */ e(Ts, {}),
  /* @__PURE__ */ e(fs, {}),
  /* @__PURE__ */ e(Jn, {}),
  /* @__PURE__ */ e(ns, {})
] }), eo = h.memo(
  () => {
    const [t, n] = It(!1), s = h.createRef(), r = () => {
      const o = ["#FF5733", "#FFBD33", "#33FF57", "#3357FF", "#D133FF", "red", "blue", "yellow"];
      return o[Math.floor(Math.random() * o.length)];
    };
    return Mt(() => {
      const o = setTimeout(() => {
        n(!0);
      }, 8e3);
      return () => clearTimeout(o);
    }, []), /* @__PURE__ */ e("div", { className: "relative flex justify-center items-center w-screen h-screen", children: /* @__PURE__ */ e("div", { ref: s, className: A("absolute inset-0 pointer-events-none transition-opacity duration-[5000ms] ease-out", t && "opacity-0"), children: Ie(1, 30).map((o, a) => /* @__PURE__ */ e(
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
), Qs = () => {
  var r;
  const t = J.getTemp("applications"), n = Ae("list.applications");
  h.useEffect(() => {
    var a;
    if (!((a = j.server) != null && a.db))
      return;
    const o = $t(_t(j.server.db, "projects"), Jt("label", "!=", null));
    return en(o, ({ docs: l }) => {
      n.set(
        l.map((f) => {
          const c = f.data();
          return {
            label: c.label,
            imageUrl: c.imageUrl,
            site: c.site
          };
        })
      );
    });
  }, []);
  const s = P();
  return /* @__PURE__ */ e(At, { hidden: !t, children: /* @__PURE__ */ i(te, { className: "w-[90vw] max-h-[90vh]", children: [
    /* @__PURE__ */ i("div", { className: "flex justify-between items-center p-2", children: [
      /* @__PURE__ */ e("h1", { className: "text-3xl capitalize", children: "water fetch applications" }),
      /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(
        D,
        {
          icon: W.solid.faXmark,
          onClick: () => {
            tn();
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ e(C, {}),
    /* @__PURE__ */ e(T, { children: /* @__PURE__ */ i("div", { className: "flex flex-wrap justify-center gap-2 p-2", children: [
      n.get && !n.get.length && /* @__PURE__ */ e(w, { content: "no project's detected" }),
      (r = n.get) == null ? void 0 : r.map(({ label: o, imageUrl: a, site: l }, f) => /* @__PURE__ */ e("a", { href: l, target: "_blank", children: /* @__PURE__ */ i(te, { className: "w-fit", children: [
        /* @__PURE__ */ e("div", { className: "flex justify-center items-center p-3", children: /* @__PURE__ */ e(
          "div",
          {
            className: "flex justify-center items-center border border-transparent border-solid rounded-full w-[100px] h-[100px] overflow-hidden",
            style: {
              ...s("primary.background", {
                borderColor: "borders"
              })
            },
            children: /* @__PURE__ */ e("img", { loading: "lazy", src: a ?? void 0, className: "w-full h-full object-cover" })
          }
        ) }),
        /* @__PURE__ */ e(C, {}),
        /* @__PURE__ */ e("div", { className: "p-3", children: /* @__PURE__ */ e("p", { className: "text-center text-xl max-md:text-md", children: o }) })
      ] }) }, f))
    ] }) })
  ] }) });
};
export {
  Qs as ApplicationsLayout,
  Ys as BottomSheetLayout,
  _n as CameraView,
  ts as Commands,
  eo as CongratulationsView,
  Js as DateLayout,
  ns as DevReadingHTML,
  Ts as DialogBoxLayout,
  Os as EnumLayout,
  es as FindCommandInput,
  ss as FindSettingFeild,
  Ds as FixedProfileView,
  Gs as Header,
  os as HeaderNotification,
  as as HeaderSettings,
  Ls as IframeLayout,
  he as KeyboardButton,
  is as KeyboardShortcuts,
  cs as KeyboardView,
  _s as Layoutes,
  Zs as LeftSide,
  Fs as LoginContent,
  Ss as LoginPage,
  fs as MenuList,
  ds as MenuRecord,
  ms as NotifaysSlot,
  us as Notifications,
  vs as PDFView,
  Es as ProfileContent,
  js as ProfileView,
  qs as RightSide,
  Ps as SettingUpdateView,
  ws as SettingUpdating,
  As as Settings,
  hs as SettingsList,
  bs as SettingsSide,
  ps as SettingsTree,
  xs as SettingsView,
  Ms as SignupPage,
  Ns as ToastItem,
  Cs as Toasts,
  Is as UpdateKeyboardShortcut,
  gs as UserSetting,
  $s as Window,
  ls as dataKeyboard,
  wt as emailRegExp,
  xt as getTree,
  Xe as headerVisibility
};
