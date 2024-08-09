var Cf = Object.defineProperty;
var Tf = (e, t, n) => t in e ? Cf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var or = (e, t, n) => (Tf(e, typeof t != "symbol" ? t + "" : t, n), n), Li = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var fa = (e, t, n) => (Li(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $i = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Fi = (e, t, n, r) => (Li(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
import * as Ve from "react";
import k, { useContext as Af, useRef as Nf, useCallback as Mf, useDebugValue as Rf } from "react";
import Pf, { unstable_batchedUpdates as If } from "react-dom";
function Be(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function zt(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const kc = 6048e5, jf = 864e5;
let Df = {};
function Vr() {
  return Df;
}
function jn(e, t) {
  var s, c, f, l;
  const n = Vr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((l = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : l.weekStartsOn) ?? 0, a = Be(e), o = a.getDay(), i = (o < r ? 7 : 0) + o - r;
  return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
}
function _r(e) {
  return jn(e, { weekStartsOn: 1 });
}
function Oc(e) {
  const t = Be(e), n = t.getFullYear(), r = zt(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const a = _r(r), o = zt(e, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const i = _r(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function zi(e) {
  const t = Be(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Wi(e) {
  const t = Be(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Lf(e, t) {
  const n = zi(e), r = zi(t), a = +n - Wi(n), o = +r - Wi(r);
  return Math.round((a - o) / jf);
}
function $f(e) {
  const t = Oc(e), n = zt(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), _r(n);
}
function Ff(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function zf(e) {
  if (!Ff(e) && typeof e != "number")
    return !1;
  const t = Be(e);
  return !isNaN(Number(t));
}
function Wf(e) {
  const t = Be(e), n = zt(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const Yf = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Vf = (e, t, n) => {
  let r;
  const a = Yf[e];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function da(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Bf = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Uf = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Hf = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Gf = {
  date: da({
    formats: Bf,
    defaultWidth: "full"
  }),
  time: da({
    formats: Uf,
    defaultWidth: "full"
  }),
  dateTime: da({
    formats: Hf,
    defaultWidth: "full"
  })
}, Kf = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, qf = (e, t, n, r) => Kf[e];
function bn(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let a;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : i;
      a = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = n != null && n.width ? String(n.width) : e.defaultWidth;
      a = e.values[s] || e.values[i];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[o];
  };
}
const Xf = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Jf = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Qf = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Zf = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, ed = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, td = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, nd = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, rd = {
  ordinalNumber: nd,
  era: bn({
    values: Xf,
    defaultWidth: "wide"
  }),
  quarter: bn({
    values: Jf,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: bn({
    values: Qf,
    defaultWidth: "wide"
  }),
  day: bn({
    values: Zf,
    defaultWidth: "wide"
  }),
  dayPeriod: bn({
    values: ed,
    defaultWidth: "wide",
    formattingValues: td,
    defaultFormattingWidth: "wide"
  })
};
function wn(e) {
  return (t, n = {}) => {
    const r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    const i = o[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? od(s, (m) => m.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      ad(s, (m) => m.test(i))
    );
    let f;
    f = e.valueCallback ? e.valueCallback(c) : c, f = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(f)
    ) : f;
    const l = t.slice(i.length);
    return { value: f, rest: l };
  };
}
function ad(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function od(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function id(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r)
      return null;
    const a = r[0], o = t.match(e.parsePattern);
    if (!o)
      return null;
    let i = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const s = t.slice(a.length);
    return { value: i, rest: s };
  };
}
const sd = /^(\d+)(th|st|nd|rd)?/i, cd = /\d+/i, ld = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, ud = {
  any: [/^b/i, /^(a|c)/i]
}, fd = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, dd = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, md = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, pd = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, gd = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, hd = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, yd = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, vd = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, bd = {
  ordinalNumber: id({
    matchPattern: sd,
    parsePattern: cd,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: wn({
    matchPatterns: ld,
    defaultMatchWidth: "wide",
    parsePatterns: ud,
    defaultParseWidth: "any"
  }),
  quarter: wn({
    matchPatterns: fd,
    defaultMatchWidth: "wide",
    parsePatterns: dd,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: wn({
    matchPatterns: md,
    defaultMatchWidth: "wide",
    parsePatterns: pd,
    defaultParseWidth: "any"
  }),
  day: wn({
    matchPatterns: gd,
    defaultMatchWidth: "wide",
    parsePatterns: hd,
    defaultParseWidth: "any"
  }),
  dayPeriod: wn({
    matchPatterns: yd,
    defaultMatchWidth: "any",
    parsePatterns: vd,
    defaultParseWidth: "any"
  })
}, wd = {
  code: "en-US",
  formatDistance: Vf,
  formatLong: Gf,
  formatRelative: qf,
  localize: rd,
  match: bd,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function xd(e) {
  const t = Be(e);
  return Lf(t, Wf(t)) + 1;
}
function Ed(e) {
  const t = Be(e), n = +_r(t) - +$f(t);
  return Math.round(n / kc) + 1;
}
function _c(e, t) {
  var l, m, h, u;
  const n = Be(e), r = n.getFullYear(), a = Vr(), o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((m = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : m.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((u = (h = a.locale) == null ? void 0 : h.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, i = zt(e, 0);
  i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0);
  const s = jn(i, t), c = zt(e, 0);
  c.setFullYear(r, 0, o), c.setHours(0, 0, 0, 0);
  const f = jn(c, t);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= f.getTime() ? r : r - 1;
}
function Sd(e, t) {
  var s, c, f, l;
  const n = Vr(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((l = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : l.firstWeekContainsDate) ?? 1, a = _c(e, t), o = zt(e, 0);
  return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), jn(o, t);
}
function kd(e, t) {
  const n = Be(e), r = +jn(n, t) - +Sd(n, t);
  return Math.round(r / kc) + 1;
}
function he(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const wt = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return he(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : he(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return he(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return he(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return he(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return he(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return he(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), a = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return he(a, t.length);
  }
}, Jt = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Yi = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), a = r > 0 ? r : 1 - r;
      return n.ordinalNumber(a, { unit: "year" });
    }
    return wt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const a = _c(e, r), o = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const i = o % 100;
      return he(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : he(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Oc(e);
    return he(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return he(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return he(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return he(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return wt.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return he(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const a = kd(e, r);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : he(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Ed(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : he(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : wt.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = xd(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : he(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const a = e.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(o);
      case "ee":
        return he(o, 2);
      case "eo":
        return n.ordinalNumber(o, { unit: "day" });
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const a = e.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(o);
      case "cc":
        return he(o, t.length);
      case "co":
        return n.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), a = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(a);
      case "ii":
        return he(a, t.length);
      case "io":
        return n.ordinalNumber(a, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r === 12 ? a = Jt.noon : r === 0 ? a = Jt.midnight : a = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r >= 17 ? a = Jt.evening : r >= 12 ? a = Jt.afternoon : r >= 4 ? a = Jt.morning : a = Jt.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return wt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : wt.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : he(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : he(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : wt.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : wt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return wt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Bi(r);
      case "XXXX":
      case "XX":
        return Rt(r);
      case "XXXXX":
      case "XXX":
      default:
        return Rt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Bi(r);
      case "xxxx":
      case "xx":
        return Rt(r);
      case "xxxxx":
      case "xxx":
      default:
        return Rt(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Vi(r, ":");
      case "OOOO":
      default:
        return "GMT" + Rt(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Vi(r, ":");
      case "zzzz":
      default:
        return "GMT" + Rt(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return he(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return he(r, t.length);
  }
};
function Vi(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.trunc(r / 60), o = r % 60;
  return o === 0 ? n + String(a) : n + String(a) + t + he(o, 2);
}
function Bi(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + he(Math.abs(e) / 60, 2) : Rt(e, t);
}
function Rt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = he(Math.trunc(r / 60), 2), o = he(r % 60, 2);
  return n + a + t + o;
}
const Ui = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Cc = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, Od = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return Ui(e, t);
  let o;
  switch (r) {
    case "P":
      o = t.dateTime({ width: "short" });
      break;
    case "PP":
      o = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = t.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", Ui(r, t)).replace("{{time}}", Cc(a, t));
}, _d = {
  p: Cc,
  P: Od
}, Cd = /^D+$/, Td = /^Y+$/, Ad = ["D", "DD", "YY", "YYYY"];
function Nd(e) {
  return Cd.test(e);
}
function Md(e) {
  return Td.test(e);
}
function Rd(e, t, n) {
  const r = Pd(e, t, n);
  if (console.warn(r), Ad.includes(e))
    throw new RangeError(r);
}
function Pd(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Id = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, jd = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Dd = /^'([^]*?)'?$/, Ld = /''/g, $d = /[a-zA-Z]/;
function Fd(e, t, n) {
  var l, m, h, u, g, p, d, y;
  const r = Vr(), a = (n == null ? void 0 : n.locale) ?? r.locale ?? wd, o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((m = (l = n == null ? void 0 : n.locale) == null ? void 0 : l.options) == null ? void 0 : m.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((u = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, i = (n == null ? void 0 : n.weekStartsOn) ?? ((p = (g = n == null ? void 0 : n.locale) == null ? void 0 : g.options) == null ? void 0 : p.weekStartsOn) ?? r.weekStartsOn ?? ((y = (d = r.locale) == null ? void 0 : d.options) == null ? void 0 : y.weekStartsOn) ?? 0, s = Be(e);
  if (!zf(s))
    throw new RangeError("Invalid time value");
  let c = t.match(jd).map((v) => {
    const x = v[0];
    if (x === "p" || x === "P") {
      const E = _d[x];
      return E(v, a.formatLong);
    }
    return v;
  }).join("").match(Id).map((v) => {
    if (v === "''")
      return { isToken: !1, value: "'" };
    const x = v[0];
    if (x === "'")
      return { isToken: !1, value: zd(v) };
    if (Yi[x])
      return { isToken: !0, value: v };
    if (x.match($d))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + x + "`"
      );
    return { isToken: !1, value: v };
  });
  a.localize.preprocessor && (c = a.localize.preprocessor(s, c));
  const f = {
    firstWeekContainsDate: o,
    weekStartsOn: i,
    locale: a
  };
  return c.map((v) => {
    if (!v.isToken)
      return v.value;
    const x = v.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && Md(x) || !(n != null && n.useAdditionalDayOfYearTokens) && Nd(x)) && Rd(x, t, String(e));
    const E = Yi[x[0]];
    return E(s, x, a.localize, f);
  }).join("");
}
function zd(e) {
  const t = e.match(Dd);
  return t ? t[1].replace(Ld, "'") : e;
}
function Wd(e, t) {
  const n = Be(e), r = Be(t);
  return +n < +r;
}
const Fa = (e) => e.replace(/[^a-zA-Z0-9:]+/gi, "").replaceAll(/ +/gi, " ").trim(), en = (e, t) => {
  const n = Fa(String(e)), r = Fa(String(t)).toLowerCase();
  return Ic(r, n);
}, Br = (e = 0, t = 1, n = 1) => {
  if (!n)
    throw Error("cannot be give steps value 0 (infinite loop hapens)");
  (e > t && n > 0 || e <= t && n < 0) && ([t, e] = [e, t]);
  const r = [];
  for (let a = e; a <= t; a += n)
    r.push(a);
  return r;
}, Tc = (e = 0, t = 10) => Math.random() * (t - e) + e, Ac = (e = 0, t = 10) => Math.floor(Tc(e, t)), Cr = (...e) => {
  let t = e[0];
  for (let n = 1; n < e.length; n++) {
    if (t > e[n])
      return !1;
    t = e[n];
  }
  return !0;
};
function Yd(...e) {
  return e.join(" ").replaceAll(
    / +[a-zA-Z]/g,
    (t) => {
      var n;
      return `${(n = t.match(/[a-z]/gi)) == null ? void 0 : n[0].toUpperCase()}`;
    }
  );
}
function it(e, t) {
  const n = [e, t];
  if (!e || !t)
    return e === t;
  if (n.every((r) => typeof r == "object"))
    if (n.every(Array.isArray)) {
      const r = e.length;
      if (r != t.length)
        return !1;
      for (let a = 0; a < r; a++)
        if (!it(e[a], t[a]))
          return !1;
      return !0;
    } else
      return Object.keys({ ...e, ...t }).every((r) => it(e[r], t[r]));
  else
    return e === t;
}
function Vd(e, t) {
  return JSON.stringify(e) == JSON.stringify(t);
}
function qn(e, t) {
  let n = e;
  const r = t.split(/ *\. */gi).filter(Boolean);
  for (const a in r) {
    const o = r[a];
    if (!(o in n))
      return {
        isValide: !1,
        value: void 0
      };
    n = n[o];
  }
  return {
    isValide: !0,
    value: n
  };
}
var un;
class gn {
  constructor() {
    $i(this, un, void 0);
  }
  get timer() {
    return fa(this, un);
  }
  start(t) {
    return new Promise((n) => {
      this.clear(), Fi(this, un, setTimeout(() => {
        n(void 0), this.clear();
      }, t));
    });
  }
  clear() {
    clearTimeout(fa(this, un));
  }
}
un = new WeakMap();
async function zo(e = 0) {
  return await new gn().start(e);
}
const Wo = (e) => {
  const t = Ac(0, e.length);
  return {
    index: t,
    value: e.at(t)
  };
}, Nc = (e) => {
  const t = [...e], n = [];
  for (; t.length; ) {
    const r = Wo(t);
    r.value != null && (n.push(r.value), t.splice(r.index, 1));
  }
  return n;
};
function Mc(e, t) {
  const n = [], r = [];
  for (let a = 0; a < e.length; a++)
    (t(e[a], a) ? n : r).push(e[a]);
  return [n, r];
}
function Ur(e, t) {
  if (!t)
    return e;
  const n = /* @__PURE__ */ Object.create(null), r = { ...t, ...e };
  for (const a in r) {
    const o = e[a], i = t[a];
    typeof o == "object" && !Array.isArray(o) ? n[a] = Ur(o, i) : n[a] = o ?? i;
  }
  return n;
}
function Tr(e, t = "camel", n = "normal") {
  if (typeof e != "string" || t == n)
    return e;
  let r;
  return t == "camel" ? r = e.replaceAll(/[A-Z]+/g, (a) => ` ${a.toLowerCase()}`).trim() : t == "cabab" ? r = e.replaceAll(/-+/g, " ") : r = e, n == "cabab" ? r = r.replaceAll(/ +/g, "-") : n == "camel" && (r = r.replaceAll(/ +[a-z]/g, (a) => a.trimStart().toUpperCase()).trim()), r;
}
function Bd(e) {
  return Object.values(e);
}
async function Ud(e, t) {
  const n = [];
  for (let r = 0; r < e.length; r++) {
    let a = t(e[r], r);
    a instanceof Promise && (a = await a), n.push(a);
  }
  return n;
}
const Rc = (e, t) => {
  const n = {};
  for (const r in e) {
    const a = e[r];
    n[r] = t(a, r);
  }
  return n;
}, qe = {
  inf(...e) {
  },
  err(...e) {
  },
  succ(...e) {
  },
  warn(...e) {
  }
};
function Hd(e = []) {
  const t = [];
  return e.forEach((n) => {
    Array.isArray(n) ? t.push(...n) : t.push(n);
  }), t;
}
function Pc(e, t = "@") {
  const n = e.split(t), r = {
    "default value": String(n[0]).split(/ +/gi)
  };
  return n.slice(1).forEach((a) => {
    const [o, ...i] = a.split(/ +/gi);
    r[o] = i;
  }), r;
}
const Gd = (e = /* @__PURE__ */ new Date()) => Fd(e, "MM/dd/yyyy HH:mm:ss", {}), Kd = (e, t = "K=V", n = ",") => Object.entries(e).map(([r, a]) => t.replaceAll("K", r).replaceAll("V", a)).join(n), Ic = function(e, t) {
  const n = t.toLowerCase();
  let r = 0, a = -1, o;
  for (e = e.toLowerCase(); o = e[r++]; )
    if (!~(a = n.indexOf(o, a + 1)))
      return !1;
  return !0;
};
function qd(e) {
  for (let t = 1; t < e.length; t++)
    if (Wd(e[t], e[t - 1]))
      return !1;
  return !0;
}
const Xd = (...e) => e.reduce(
  (t, n) => t + (typeof n == "number" ? n : 0),
  0
);
function Jd(e, t) {
  return t.filter((n) => e.includes(n));
}
const R1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Delay: gn,
  between: Tc,
  betweenInt: Ac,
  camelCase: Yd,
  con: qe,
  defaultObject: Ur,
  delay: zo,
  doubleFilter: Mc,
  formatObject: Kd,
  fuzzySearch: Ic,
  getSeparateSearchInput: Pc,
  getWordsOnly: Fa,
  include: en,
  isLike: it,
  isLikeFast: Vd,
  isSorted: Cr,
  isSortedDate: qd,
  linear: Hd,
  mapAsync: Ud,
  ori: Jd,
  randomItem: Wo,
  randomizeArray: Nc,
  range: Br,
  renameValues: Rc,
  saveDate: Gd,
  someArray: Xd,
  transformCase: Tr,
  valueFromString: qn,
  values: Bd
}, Symbol.toStringTag, { value: "Module" }));
function Qd() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = jc(t)) && (r && (r += " "), r += n);
  return r;
}
function jc(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = jc(e[r])) && (n && (n += " "), n += t);
  return n;
}
var Yo = "-";
function Zd(e) {
  var t = tm(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, a = r === void 0 ? {} : r;
  function o(s) {
    var c = s.split(Yo);
    return c[0] === "" && c.length !== 1 && c.shift(), Dc(c, t) || em(s);
  }
  function i(s, c) {
    var f = n[s] || [];
    return c && a[s] ? [].concat(f, a[s]) : f;
  }
  return {
    getClassGroupId: o,
    getConflictingClassGroupIds: i
  };
}
function Dc(e, t) {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), a = r ? Dc(e.slice(1), r) : void 0;
  if (a)
    return a;
  if (t.validators.length !== 0) {
    var o = e.join(Yo);
    return (i = t.validators.find(function(s) {
      var c = s.validator;
      return c(o);
    })) == null ? void 0 : i.classGroupId;
  }
}
var Hi = /^\[(.+)\]$/;
function em(e) {
  if (Hi.test(e)) {
    var t = Hi.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function tm(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, a = rm(Object.entries(e.classGroups), n);
  return a.forEach(function(o) {
    var i = o[0], s = o[1];
    za(s, r, i, t);
  }), r;
}
function za(e, t, n, r) {
  e.forEach(function(a) {
    if (typeof a == "string") {
      var o = a === "" ? t : Gi(t, a);
      o.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (nm(a)) {
        za(a(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(function(i) {
      var s = i[0], c = i[1];
      za(c, Gi(t, s), n, r);
    });
  });
}
function Gi(e, t) {
  var n = e;
  return t.split(Yo).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function nm(e) {
  return e.isThemeGetter;
}
function rm(e, t) {
  return t ? e.map(function(n) {
    var r = n[0], a = n[1], o = a.map(function(i) {
      return typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(function(s) {
        var c = s[0], f = s[1];
        return [t + c, f];
      })) : i;
    });
    return [r, o];
  }) : e;
}
function am(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function a(o, i) {
    n.set(o, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get: function(i) {
      var s = n.get(i);
      if (s !== void 0)
        return s;
      if ((s = r.get(i)) !== void 0)
        return a(i, s), s;
    },
    set: function(i, s) {
      n.has(i) ? n.set(i, s) : a(i, s);
    }
  };
}
var Lc = "!";
function om(e) {
  var t = e.separator || ":", n = t.length === 1, r = t[0], a = t.length;
  return function(i) {
    for (var s = [], c = 0, f = 0, l, m = 0; m < i.length; m++) {
      var h = i[m];
      if (c === 0) {
        if (h === r && (n || i.slice(m, m + a) === t)) {
          s.push(i.slice(f, m)), f = m + a;
          continue;
        }
        if (h === "/") {
          l = m;
          continue;
        }
      }
      h === "[" ? c++ : h === "]" && c--;
    }
    var u = s.length === 0 ? i : i.substring(f), g = u.startsWith(Lc), p = g ? u.substring(1) : u, d = l && l > f ? l - f : void 0;
    return {
      modifiers: s,
      hasImportantModifier: g,
      baseClassName: p,
      maybePostfixModifierPosition: d
    };
  };
}
function im(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var a = r[0] === "[";
    a ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function sm(e) {
  return {
    cache: am(e.cacheSize),
    splitModifiers: om(e),
    ...Zd(e)
  };
}
var cm = /\s+/;
function lm(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, a = t.getConflictingClassGroupIds, o = /* @__PURE__ */ new Set();
  return e.trim().split(cm).map(function(i) {
    var s = n(i), c = s.modifiers, f = s.hasImportantModifier, l = s.baseClassName, m = s.maybePostfixModifierPosition, h = r(m ? l.substring(0, m) : l), u = !!m;
    if (!h) {
      if (!m)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      if (h = r(l), !h)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      u = !1;
    }
    var g = im(c).join(":"), p = f ? g + Lc : g;
    return {
      isTailwindClass: !0,
      modifierId: p,
      classGroupId: h,
      originalClassName: i,
      hasPostfixModifier: u
    };
  }).reverse().filter(function(i) {
    if (!i.isTailwindClass)
      return !0;
    var s = i.modifierId, c = i.classGroupId, f = i.hasPostfixModifier, l = s + c;
    return o.has(l) ? !1 : (o.add(l), a(c, f).forEach(function(m) {
      return o.add(s + m);
    }), !0);
  }).reverse().map(function(i) {
    return i.originalClassName;
  }).join(" ");
}
function um() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, a, o, i = s;
  function s(f) {
    var l = t[0], m = t.slice(1), h = m.reduce(function(u, g) {
      return g(u);
    }, l());
    return r = sm(h), a = r.cache.get, o = r.cache.set, i = c, c(f);
  }
  function c(f) {
    var l = a(f);
    if (l)
      return l;
    var m = lm(f, r);
    return o(f, m), m;
  }
  return function() {
    return i(Qd.apply(null, arguments));
  };
}
function ve(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var $c = /^\[(?:([a-z-]+):)?(.+)\]$/i, fm = /^\d+\/\d+$/, dm = /* @__PURE__ */ new Set(["px", "full", "screen"]), mm = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, pm = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, gm = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Je(e) {
  return jt(e) || dm.has(e) || fm.test(e) || Wa(e);
}
function Wa(e) {
  return Ut(e, "length", xm);
}
function hm(e) {
  return Ut(e, "size", Fc);
}
function ym(e) {
  return Ut(e, "position", Fc);
}
function vm(e) {
  return Ut(e, "url", Em);
}
function ir(e) {
  return Ut(e, "number", jt);
}
function jt(e) {
  return !Number.isNaN(Number(e));
}
function bm(e) {
  return e.endsWith("%") && jt(e.slice(0, -1));
}
function xn(e) {
  return Ki(e) || Ut(e, "number", Ki);
}
function ae(e) {
  return $c.test(e);
}
function En() {
  return !0;
}
function xt(e) {
  return mm.test(e);
}
function wm(e) {
  return Ut(e, "", Sm);
}
function Ut(e, t, n) {
  var r = $c.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function xm(e) {
  return pm.test(e);
}
function Fc() {
  return !1;
}
function Em(e) {
  return e.startsWith("url(");
}
function Ki(e) {
  return Number.isInteger(Number(e));
}
function Sm(e) {
  return gm.test(e);
}
function km() {
  var e = ve("colors"), t = ve("spacing"), n = ve("blur"), r = ve("brightness"), a = ve("borderColor"), o = ve("borderRadius"), i = ve("borderSpacing"), s = ve("borderWidth"), c = ve("contrast"), f = ve("grayscale"), l = ve("hueRotate"), m = ve("invert"), h = ve("gap"), u = ve("gradientColorStops"), g = ve("gradientColorStopPositions"), p = ve("inset"), d = ve("margin"), y = ve("opacity"), v = ve("padding"), x = ve("saturate"), E = ve("scale"), b = ve("sepia"), O = ve("skew"), _ = ve("space"), A = ve("translate"), M = function() {
    return ["auto", "contain", "none"];
  }, D = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, ce = function() {
    return ["auto", ae, t];
  }, $ = function() {
    return [ae, t];
  }, ee = function() {
    return ["", Je];
  }, J = function() {
    return ["auto", jt, ae];
  }, I = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, q = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, le = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, xe = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, Se = function() {
    return ["", "0", ae];
  }, C = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, N = function() {
    return [jt, ir];
  }, Y = function() {
    return [jt, ae];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [En],
      spacing: [Je],
      blur: ["none", "", xt, ae],
      brightness: N(),
      borderColor: [e],
      borderRadius: ["none", "", "full", xt, ae],
      borderSpacing: $(),
      borderWidth: ee(),
      contrast: N(),
      grayscale: Se(),
      hueRotate: Y(),
      invert: Se(),
      gap: $(),
      gradientColorStops: [e],
      gradientColorStopPositions: [bm, Wa],
      inset: ce(),
      margin: ce(),
      opacity: N(),
      padding: $(),
      saturate: N(),
      scale: N(),
      sepia: Se(),
      skew: Y(),
      space: $(),
      translate: $()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ae]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [xt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": C()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": C()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(I(), [ae])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: D()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": D()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": D()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: M()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": M()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": M()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [p]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [p]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [p]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [p]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [p]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [p]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [p]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [p]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [p]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", xn]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ce()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", ae]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Se()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Se()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", xn]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [En]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", xn]
        }, ae]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": J()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": J()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [En]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [xn]
        }, ae]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": J()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": J()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", ae]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ae]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(xe())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(xe(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(xe(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [v]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [v]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [v]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [v]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [v]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [v]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [v]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [v]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [v]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [d]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [d]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [d]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [d]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [d]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [d]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [d]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [d]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [d]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [_]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [_]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", ae, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", ae, Je]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [xt]
        }, xt, ae]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ae, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", ae, Je]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ae, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", xt, Wa]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ir]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [En]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ae]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", jt, ir]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ae, Je]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ae]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ae]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [y]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(q(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Je]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ae, Je]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: $()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ae]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ae]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [y]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(I(), [ym])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", hm]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, vm]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [g]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [g]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [u]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [u]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [u]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(q(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: q()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(q())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ae, Je]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Je]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: ee()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Je]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", xt, wm]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [En]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": le()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": le()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", xt, ae]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [f]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [l]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [m]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [x]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [b]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [f]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [l]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [m]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [x]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [b]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ae]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Y()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ae]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Y()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ae]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [E]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [E]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [E]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [xn, ae]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [A]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [A]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [O]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [O]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ae]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ae]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": $()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": $()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": $()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": $()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": $()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": $()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": $()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": $()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": $()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": $()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": $()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": $()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": $()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": $()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": $()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": $()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": $()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": $()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ae]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Je, ir]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var Vo = /* @__PURE__ */ um(km), Om = {
  prefix: "far",
  iconName: "star",
  icon: [576, 512, [11088, 61446], "f005", "M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"]
}, _m = {
  prefix: "far",
  iconName: "copy",
  icon: [448, 512, [], "f0c5", "M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"]
}, Cm = {
  prefix: "fas",
  iconName: "star",
  icon: [576, 512, [11088, 61446], "f005", "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]
}, Tm = {
  prefix: "fas",
  iconName: "xmarks-lines",
  icon: [640, 512, [], "e59a", "M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zm0 384c-17.7 0-32 14.3-32 32s14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM7 167c-9.4 9.4-9.4 24.6 0 33.9l55 55L7 311c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55L41 167c-9.4-9.4-24.6-9.4-33.9 0zM265 167c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55zM455 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"]
}, Am = {
  prefix: "fas",
  iconName: "file-arrow-up",
  icon: [384, 512, ["file-upload"], "f574", "M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 408c0 13.3-10.7 24-24 24s-24-10.7-24-24V305.9l-31 31c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31V408z"]
}, zc = Am, Nm = {
  prefix: "fas",
  iconName: "eye-low-vision",
  icon: [640, 512, ["low-vision"], "f2a8", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223 149.5c48.6-44.3 123-50.8 179.3-11.7c60.8 42.4 78.9 123.2 44.2 186.9L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3L223 149.5zm-139.9 12c-11 14.4-20.5 28.7-28.4 42.2l339 265.7c18.7-5.5 36.2-13 52.6-21.8L83.1 161.5zm-50 86.3c-1.8 6.8-1.3 14 1.4 20.5c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c3.1 0 6.1-.1 9.2-.2L33.1 247.8z"]
}, Mm = Nm, Rm = {
  prefix: "fas",
  iconName: "microphone",
  icon: [384, 512, [], "f130", "M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"]
}, Pm = {
  prefix: "fas",
  iconName: "pause",
  icon: [320, 512, [9208], "f04c", "M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"]
}, Im = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]
}, jm = {
  prefix: "fas",
  iconName: "pen",
  icon: [512, 512, [128394], "f304", "M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]
}, Dm = {
  prefix: "fas",
  iconName: "camera",
  icon: [512, 512, [62258, "camera-alt"], "f030", "M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]
}, Lm = {
  prefix: "fas",
  iconName: "arrow-right-arrow-left",
  icon: [448, 512, [8644, "exchange"], "f0ec", "M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z"]
}, $m = Lm, Fm = {
  prefix: "fas",
  iconName: "stop",
  icon: [384, 512, [9209], "f04d", "M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]
}, zm = {
  prefix: "fas",
  iconName: "angle-down",
  icon: [448, 512, [8964], "f107", "M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]
}, Wm = {
  prefix: "fas",
  iconName: "play",
  icon: [384, 512, [9654], "f04b", "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]
}, Xn = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, Ym = {
  prefix: "fas",
  iconName: "angle-up",
  icon: [448, 512, [8963], "f106", "M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]
}, Ya = {
  prefix: "fas",
  iconName: "check",
  icon: [448, 512, [10003, 10004], "f00c", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}, Vm = {
  prefix: "fas",
  iconName: "triangle-exclamation",
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, Bm = Vm;
function Ar(e, t = [], n = () => {
}) {
  k.useEffect(() => (e().then(), () => n(t)), t);
}
function L(e) {
  const [t, n] = k.useState(e);
  return {
    get: t,
    set: n
  };
}
function Bo(...e) {
  let t = {};
  return e.forEach((n) => {
    n && (t = {
      ...t,
      ...n
    });
  }), t;
}
function Um(...e) {
  let t = [];
  return e.forEach((n) => {
    n && (t = [...t, n]);
  }), t;
}
function qi(e, t, n = (r) => r) {
  const r = L(n(e)), a = k.useDeferredValue(r.get);
  return k.useEffect(() => {
    t(a);
  }, [a]), k.useEffect(() => {
    r.set(n(e));
  }, [e]), r;
}
function Hm(e, t = [], n = 1e3) {
  const r = L(null), a = L(!1);
  return k.useEffect(() => {
    const o = new gn();
    return a.set(!0), o.start(n).then(() => {
      r.set(e()), a.set(!1);
    }), () => {
      o.clear(), a.set(!1);
    };
  }, [...t, n]), [a.get, r.get];
}
function Gm(e, t = [], n = 1e3) {
  const r = L(!1);
  return k.useEffect(() => {
    const a = new gn();
    r.set(!0);
    let o;
    return a.start(n).then(async () => {
      o = e(), o instanceof Promise && await o, r.set(!1);
    }), () => {
      a.clear(), typeof o == "function" && o(), r.set(!1);
    };
  }, [...t, n]), r.get;
}
function Km(e, t = 0) {
  if (!e)
    return;
  const { parentElement: n } = e;
  if (!n)
    return;
  const { x: r, y: a, height: o, width: i } = e.getBoundingClientRect(), { x: s, y: c, height: f, width: l } = n.getBoundingClientRect(), m = a - c - o * t + n.scrollTop, h = r - s - i * t + n.scrollLeft;
  n.scroll({
    top: m - (t >= 0 ? 0 : f),
    left: h - (t >= 0 ? 0 : l)
  });
}
function Xi(e) {
  if (e == null) {
    const n = document.activeElement;
    return n == null || n.blur(), n;
  }
  const t = document.getElementById(e);
  return t == null || t.focus({
    preventScroll: !0
  }), t;
}
function Va() {
  const e = document.activeElement;
  return (e == null ? void 0 : e.id) || null;
}
var qm = (e) => {
  if (!e)
    return !1;
  const { parentElement: t } = e;
  if (!t)
    return !0;
  const { left: n, right: r, top: a, bottom: o } = e.getBoundingClientRect(), { left: i, right: s, top: c, bottom: f } = t.getBoundingClientRect();
  return c <= a && o <= f && i <= n && r <= s;
};
const Xm = {
  boolean(e) {
    return typeof e == "string" ? e == "true" : e ?? !1;
  }
}, V = (...e) => Vo(...e).replaceAll(`
`, " ").replaceAll("	", " ").replaceAll(/ {2,}/gi, " "), sn = class sn {
  constructor(t) {
    or(this, "propertys", {});
    this.keyPanding = t, this.propertys = sn.toProps(this.keyPanding);
  }
  static toProps(t) {
    var f;
    const n = t.split("+").map((l) => l.trim()), r = n.find((l) => /control\??/i.test(l)), a = n.find((l) => /shift\??/i.test(l)), o = n.find((l) => /alt\??/i.test(l)), i = r ? /control\?/i.test(r) ? void 0 : !0 : !1, s = a ? /shift\?/i.test(a) ? void 0 : !0 : !1, c = o ? /alt\?/i.test(o) ? void 0 : !0 : !1;
    return {
      control: i,
      shift: s,
      alt: c,
      keys: (f = n.find((l) => !/(control|shift|alt)\??/i.test(l))) == null ? void 0 : f.split("|").filter((l) => !!l)
    };
  }
  static toString(t) {
    const n = ["control", "shift", "alt"];
    let r = n.map((a) => t[a] ? `${a}` : t[a] == null ? `${a}?` : "").filter(Boolean);
    if (t.keys) {
      const a = [...n, ...n.map((i) => i + "?")], o = t.keys.filter((i) => i && !a.includes(i));
      o.length && (r = [...r, o.join("|")]);
    }
    return r.join("+");
  }
  static fromEvent({ key: t, ctrlKey: n, shiftKey: r, altKey: a }) {
    const o = t.toLowerCase(), s = [this.overreadProps[o] || o];
    return this.toString({
      control: n,
      shift: r,
      alt: a,
      keys: s
    });
  }
  test(t) {
    const { control: n, shift: r, alt: a, keys: o } = this.propertys;
    if (typeof n == "boolean" && n != t.ctrlKey || typeof r == "boolean" && r != t.shiftKey || typeof a == "boolean" && a != t.altKey)
      return !1;
    if (!o)
      return !0;
    const s = (sn.overreadProps[t.key] || t.key).toLowerCase(), c = s.match(/(control|shift|alt)/gi) ? void 0 : s;
    return !!(c && o.includes(c));
  }
  static dispatch(...t) {
    t.forEach((n) => {
      var o;
      const r = new this(n), a = (o = r.propertys.keys) == null ? void 0 : o.map((i) => sn.overreadProps[i] || i);
      dispatchEvent(
        new KeyboardEvent("keydown", {
          ctrlKey: r.propertys.control,
          altKey: r.propertys.alt,
          shiftKey: r.propertys.shift,
          key: a == null ? void 0 : a[0]
        })
      );
    });
  }
};
or(sn, "overreadProps", {
  "+": "plus",
  " ": "space",
  "*": "mul",
  "/": "div",
  audiovolumemute: "mute",
  audiovolumedown: "audio down",
  audiovolumeup: "audio up",
  mediaplaypause: "video play/pause",
  mediatrackprevious: "video previous",
  mediatracknext: "video next"
});
let ft = sn;
function Me(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Jm = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), Ji = Jm, ma = () => Math.random().toString(36).substring(7).split("").join("."), Qm = {
  INIT: `@@redux/INIT${ma()}`,
  REPLACE: `@@redux/REPLACE${ma()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ma()}`
}, $t = Qm;
function Jn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Zm(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (np(e))
    return "date";
  if (tp(e))
    return "error";
  const n = ep(e);
  switch (n) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return n;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ep(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function tp(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function np(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function _t(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Zm(e)), t;
}
function Wc(e, t, n) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Me(2) : `Expected the root reducer to be a function. Instead, received: '${_t(e)}'`);
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Me(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Me(1) : `Expected the enhancer to be a function. Instead, received: '${_t(n)}'`);
    return n(Wc)(e, t);
  }
  let r = e, a = t, o = /* @__PURE__ */ new Map(), i = o, s = 0, c = !1;
  function f() {
    i === o && (i = /* @__PURE__ */ new Map(), o.forEach((d, y) => {
      i.set(y, d);
    }));
  }
  function l() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Me(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return a;
  }
  function m(d) {
    if (typeof d != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Me(4) : `Expected the listener to be a function. Instead, received: '${_t(d)}'`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Me(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let y = !0;
    f();
    const v = s++;
    return i.set(v, d), function() {
      if (y) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? Me(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        y = !1, f(), i.delete(v), o = null;
      }
    };
  }
  function h(d) {
    if (!Jn(d))
      throw new Error(process.env.NODE_ENV === "production" ? Me(7) : `Actions must be plain objects. Instead, the actual type was: '${_t(d)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof d.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Me(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof d.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? Me(17) : `Action "type" property must be a string. Instead, the actual type was: '${_t(d.type)}'. Value was: '${d.type}' (stringified)`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Me(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, a = r(a, d);
    } finally {
      c = !1;
    }
    return (o = i).forEach((v) => {
      v();
    }), d;
  }
  function u(d) {
    if (typeof d != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Me(10) : `Expected the nextReducer to be a function. Instead, received: '${_t(d)}`);
    r = d, h({
      type: $t.REPLACE
    });
  }
  function g() {
    const d = m;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(y) {
        if (typeof y != "object" || y === null)
          throw new Error(process.env.NODE_ENV === "production" ? Me(11) : `Expected the observer to be an object. Instead, received: '${_t(y)}'`);
        function v() {
          const E = y;
          E.next && E.next(l());
        }
        return v(), {
          unsubscribe: d(v)
        };
      },
      [Ji]() {
        return this;
      }
    };
  }
  return h({
    type: $t.INIT
  }), {
    dispatch: h,
    subscribe: m,
    getState: l,
    replaceReducer: u,
    [Ji]: g
  };
}
function Qi(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function rp(e, t, n, r) {
  const a = Object.keys(t), o = n && n.type === $t.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (a.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Jn(e))
    return `The ${o} has unexpected type of "${_t(e)}". Expected argument to be an object with the following keys: "${a.join('", "')}"`;
  const i = Object.keys(e).filter((s) => !t.hasOwnProperty(s) && !r[s]);
  if (i.forEach((s) => {
    r[s] = !0;
  }), !(n && n.type === $t.REPLACE) && i.length > 0)
    return `Unexpected ${i.length > 1 ? "keys" : "key"} "${i.join('", "')}" found in ${o}. Expected to find one of the known reducer keys instead: "${a.join('", "')}". Unexpected keys will be ignored.`;
}
function ap(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: $t.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Me(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof n(void 0, {
      type: $t.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Me(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${$t.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function op(e) {
  const t = Object.keys(e), n = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    process.env.NODE_ENV !== "production" && typeof e[s] > "u" && Qi(`No reducer provided for key "${s}"`), typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let a;
  process.env.NODE_ENV !== "production" && (a = {});
  let o;
  try {
    ap(n);
  } catch (i) {
    o = i;
  }
  return function(s = {}, c) {
    if (o)
      throw o;
    if (process.env.NODE_ENV !== "production") {
      const m = rp(s, n, c, a);
      m && Qi(m);
    }
    let f = !1;
    const l = {};
    for (let m = 0; m < r.length; m++) {
      const h = r[m], u = n[h], g = s[h], p = u(g, c);
      if (typeof p > "u") {
        const d = c && c.type;
        throw new Error(process.env.NODE_ENV === "production" ? Me(14) : `When called with an action of type ${d ? `"${String(d)}"` : "(unknown type)"}, the slice reducer for key "${h}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      l[h] = p, f = f || p !== g;
    }
    return f = f || r.length !== Object.keys(s).length, f ? l : s;
  };
}
function Nr(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function ip(...e) {
  return (t) => (n, r) => {
    const a = t(n, r);
    let o = () => {
      throw new Error(process.env.NODE_ENV === "production" ? Me(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const i = {
      getState: a.getState,
      dispatch: (c, ...f) => o(c, ...f)
    }, s = e.map((c) => c(i));
    return o = Nr(...s)(a.dispatch), {
      ...a,
      dispatch: o
    };
  };
}
function Uo(e) {
  return Jn(e) && "type" in e && typeof e.type == "string";
}
var Yc = Symbol.for("immer-nothing"), Zi = Symbol.for("immer-draftable"), Ue = Symbol.for("immer-state"), sp = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function ze(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const n = sp[e], r = typeof n == "function" ? n.apply(null, t) : n;
    throw new Error(`[Immer] ${r}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var fn = Object.getPrototypeOf;
function st(e) {
  return !!e && !!e[Ue];
}
function dt(e) {
  var t;
  return e ? Vc(e) || Array.isArray(e) || !!e[Zi] || !!((t = e.constructor) != null && t[Zi]) || Gr(e) || Kr(e) : !1;
}
var cp = Object.prototype.constructor.toString();
function Vc(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = fn(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === cp;
}
function Mr(e, t) {
  Hr(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function Hr(e) {
  const t = e[Ue];
  return t ? t.type_ : Array.isArray(e) ? 1 : Gr(e) ? 2 : Kr(e) ? 3 : 0;
}
function Ba(e, t) {
  return Hr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Bc(e, t, n) {
  const r = Hr(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function lp(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Gr(e) {
  return e instanceof Map;
}
function Kr(e) {
  return e instanceof Set;
}
function Pt(e) {
  return e.copy_ || e.base_;
}
function Ua(e, t) {
  if (Gr(e))
    return new Map(e);
  if (Kr(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = Vc(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[Ue];
    let a = Reflect.ownKeys(r);
    for (let o = 0; o < a.length; o++) {
      const i = a[o], s = r[i];
      s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (r[i] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: s.enumerable,
        value: e[i]
      });
    }
    return Object.create(fn(e), r);
  } else {
    const r = fn(e);
    if (r !== null && n)
      return { ...e };
    const a = Object.create(r);
    return Object.assign(a, e);
  }
}
function Ho(e, t = !1) {
  return qr(e) || st(e) || !dt(e) || (Hr(e) > 1 && (e.set = e.add = e.clear = e.delete = up), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => Ho(r, !0))), e;
}
function up() {
  ze(2);
}
function qr(e) {
  return Object.isFrozen(e);
}
var fp = {};
function Wt(e) {
  const t = fp[e];
  return t || ze(0, e), t;
}
var Dn;
function Uc() {
  return Dn;
}
function dp(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function es(e, t) {
  t && (Wt("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Ha(e) {
  Ga(e), e.drafts_.forEach(mp), e.drafts_ = null;
}
function Ga(e) {
  e === Dn && (Dn = e.parent_);
}
function ts(e) {
  return Dn = dp(Dn, e);
}
function mp(e) {
  const t = e[Ue];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function ns(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[Ue].modified_ && (Ha(t), ze(4)), dt(e) && (e = Rr(t, e), t.parent_ || Pr(t, e)), t.patches_ && Wt("Patches").generateReplacementPatches_(
    n[Ue].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Rr(t, n, []), Ha(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Yc ? e : void 0;
}
function Rr(e, t, n) {
  if (qr(t))
    return t;
  const r = t[Ue];
  if (!r)
    return Mr(
      t,
      (a, o) => rs(e, r, t, a, o, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return Pr(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const a = r.copy_;
    let o = a, i = !1;
    r.type_ === 3 && (o = new Set(a), a.clear(), i = !0), Mr(
      o,
      (s, c) => rs(e, r, a, s, c, n, i)
    ), Pr(e, a, !1), n && e.patches_ && Wt("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function rs(e, t, n, r, a, o, i) {
  if (process.env.NODE_ENV !== "production" && a === n && ze(5), st(a)) {
    const s = o && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Ba(t.assigned_, r) ? o.concat(r) : void 0, c = Rr(e, a, s);
    if (Bc(n, r, c), st(c))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    i && n.add(a);
  if (dt(a) && !qr(a)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Rr(e, a), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && Pr(e, a);
  }
}
function Pr(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Ho(t, n);
}
function pp(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Uc(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let a = r, o = Go;
  n && (a = [r], o = Ln);
  const { revoke: i, proxy: s } = Proxy.revocable(a, o);
  return r.draft_ = s, r.revoke_ = i, s;
}
var Go = {
  get(e, t) {
    if (t === Ue)
      return e;
    const n = Pt(e);
    if (!Ba(n, t))
      return gp(e, n, t);
    const r = n[t];
    return e.finalized_ || !dt(r) ? r : r === pa(e.base_, t) ? (ga(e), e.copy_[t] = qa(r, e)) : r;
  },
  has(e, t) {
    return t in Pt(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Pt(e));
  },
  set(e, t, n) {
    const r = Hc(Pt(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const a = pa(Pt(e), t), o = a == null ? void 0 : a[Ue];
      if (o && o.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (lp(n, a) && (n !== void 0 || Ba(e.base_, t)))
        return !0;
      ga(e), Ka(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return pa(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, ga(e), Ka(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = Pt(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    ze(11);
  },
  getPrototypeOf(e) {
    return fn(e.base_);
  },
  setPrototypeOf() {
    ze(12);
  }
}, Ln = {};
Mr(Go, (e, t) => {
  Ln[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Ln.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && ze(13), Ln.set.call(this, e, t, void 0);
};
Ln.set = function(e, t, n) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && ze(14), Go.set.call(this, e[0], t, n, e[0]);
};
function pa(e, t) {
  const n = e[Ue];
  return (n ? Pt(n) : e)[t];
}
function gp(e, t, n) {
  var a;
  const r = Hc(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (a = r.get) == null ? void 0 : a.call(e.draft_)
  ) : void 0;
}
function Hc(e, t) {
  if (!(t in e))
    return;
  let n = fn(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = fn(n);
  }
}
function Ka(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Ka(e.parent_));
}
function ga(e) {
  e.copy_ || (e.copy_ = Ua(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var hp = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const o = n;
        n = t;
        const i = this;
        return function(c = o, ...f) {
          return i.produce(c, (l) => n.call(this, l, ...f));
        };
      }
      typeof n != "function" && ze(6), r !== void 0 && typeof r != "function" && ze(7);
      let a;
      if (dt(t)) {
        const o = ts(this), i = qa(t, void 0);
        let s = !0;
        try {
          a = n(i), s = !1;
        } finally {
          s ? Ha(o) : Ga(o);
        }
        return es(o, r), ns(a, o);
      } else if (!t || typeof t != "object") {
        if (a = n(t), a === void 0 && (a = t), a === Yc && (a = void 0), this.autoFreeze_ && Ho(a, !0), r) {
          const o = [], i = [];
          Wt("Patches").generateReplacementPatches_(t, a, o, i), r(o, i);
        }
        return a;
      } else
        ze(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (i, ...s) => this.produceWithPatches(i, (c) => t(c, ...s));
      let r, a;
      return [this.produce(t, n, (i, s) => {
        r = i, a = s;
      }), r, a];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    dt(e) || ze(8), st(e) && (e = Xr(e));
    const t = ts(this), n = qa(e, void 0);
    return n[Ue].isManual_ = !0, Ga(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Ue];
    (!n || !n.isManual_) && ze(9);
    const { scope_: r } = n;
    return es(r, t), ns(void 0, r);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const a = t[n];
      if (a.path.length === 0 && a.op === "replace") {
        e = a.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = Wt("Patches").applyPatches_;
    return st(e) ? r(e, t) : this.produce(
      e,
      (a) => r(a, t)
    );
  }
};
function qa(e, t) {
  const n = Gr(e) ? Wt("MapSet").proxyMap_(e, t) : Kr(e) ? Wt("MapSet").proxySet_(e, t) : pp(e, t);
  return (t ? t.scope_ : Uc()).drafts_.push(n), n;
}
function Xr(e) {
  return st(e) || ze(10, e), Gc(e);
}
function Gc(e) {
  if (!dt(e) || qr(e))
    return e;
  const t = e[Ue];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Ua(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Ua(e, !0);
  return Mr(n, (r, a) => {
    Bc(n, r, Gc(a));
  }), t && (t.finalized_ = !1), n;
}
var He = new hp(), Ko = He.produce;
He.produceWithPatches.bind(
  He
);
He.setAutoFreeze.bind(He);
He.setUseStrictShallowCopy.bind(He);
He.applyPatches.bind(He);
He.createDraft.bind(He);
He.finishDraft.bind(He);
var yp = (e, t, n) => {
  if (t.length === 1 && t[0] === n) {
    let r = !1;
    try {
      const a = {};
      e(a) === a && (r = !0);
    } catch {
    }
    if (r) {
      let a;
      try {
        throw new Error();
      } catch (o) {
        ({ stack: a } = o);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: a }
      );
    }
  }
}, vp = (e, t, n) => {
  const { memoize: r, memoizeOptions: a } = t, { inputSelectorResults: o, inputSelectorResultsCopy: i } = e, s = r(() => ({}), ...a);
  if (!(s.apply(null, o) === s.apply(null, i))) {
    let f;
    try {
      throw new Error();
    } catch (l) {
      ({ stack: f } = l);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: n,
        firstInputs: o,
        secondInputs: i,
        stack: f
      }
    );
  }
}, bp = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function wp(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function xp(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function Ep(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var as = (e) => Array.isArray(e) ? e : [e];
function Sp(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return Ep(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function os(e, t) {
  const n = [], { length: r } = e;
  for (let a = 0; a < r; a++)
    n.push(e[a].apply(null, t));
  return n;
}
var kp = (e, t) => {
  const { identityFunctionCheck: n, inputStabilityCheck: r } = {
    ...bp,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: yp
    },
    inputStabilityCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: vp
    }
  };
}, Op = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, _p = typeof WeakRef < "u" ? WeakRef : Op, Cp = 0, is = 1;
function sr() {
  return {
    s: Cp,
    v: void 0,
    o: null,
    p: null
  };
}
function qo(e, t = {}) {
  let n = sr();
  const { resultEqualityCheck: r } = t;
  let a, o = 0;
  function i() {
    var m;
    let s = n;
    const { length: c } = arguments;
    for (let h = 0, u = c; h < u; h++) {
      const g = arguments[h];
      if (typeof g == "function" || typeof g == "object" && g !== null) {
        let p = s.o;
        p === null && (s.o = p = /* @__PURE__ */ new WeakMap());
        const d = p.get(g);
        d === void 0 ? (s = sr(), p.set(g, s)) : s = d;
      } else {
        let p = s.p;
        p === null && (s.p = p = /* @__PURE__ */ new Map());
        const d = p.get(g);
        d === void 0 ? (s = sr(), p.set(g, s)) : s = d;
      }
    }
    const f = s;
    let l;
    if (s.s === is ? l = s.v : (l = e.apply(null, arguments), o++), f.s = is, r) {
      const h = ((m = a == null ? void 0 : a.deref) == null ? void 0 : m.call(a)) ?? a;
      h != null && r(h, l) && (l = h, o !== 0 && o--), a = typeof l == "object" && l !== null || typeof l == "function" ? new _p(l) : l;
    }
    return f.v = l, l;
  }
  return i.clearCache = () => {
    n = sr(), i.resetResultsCount();
  }, i.resultsCount = () => o, i.resetResultsCount = () => {
    o = 0;
  }, i;
}
function Kc(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...a) => {
    let o = 0, i = 0, s, c = {}, f = a.pop();
    typeof f == "object" && (c = f, f = a.pop()), wp(
      f,
      `createSelector expects an output function after the inputs, but received: [${typeof f}]`
    );
    const l = {
      ...n,
      ...c
    }, {
      memoize: m,
      memoizeOptions: h = [],
      argsMemoize: u = qo,
      argsMemoizeOptions: g = [],
      devModeChecks: p = {}
    } = l, d = as(h), y = as(g), v = Sp(a), x = m(function() {
      return o++, f.apply(
        null,
        arguments
      );
    }, ...d);
    let E = !0;
    const b = u(function() {
      i++;
      const _ = os(
        v,
        arguments
      );
      if (s = x.apply(null, _), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: A, inputStabilityCheck: M } = kp(E, p);
        if (A.shouldRun && A.run(
          f,
          _,
          s
        ), M.shouldRun) {
          const D = os(
            v,
            arguments
          );
          M.run(
            { inputSelectorResults: _, inputSelectorResultsCopy: D },
            { memoize: m, memoizeOptions: d },
            arguments
          );
        }
        E && (E = !1);
      }
      return s;
    }, ...y);
    return Object.assign(b, {
      resultFunc: f,
      memoizedResultFunc: x,
      dependencies: v,
      dependencyRecomputations: () => i,
      resetDependencyRecomputations: () => {
        i = 0;
      },
      lastResult: () => s,
      recomputations: () => o,
      resetRecomputations: () => {
        o = 0;
      },
      memoize: m,
      argsMemoize: u
    });
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Tp = /* @__PURE__ */ Kc(qo), Ap = Object.assign(
  (e, t = Tp) => {
    xp(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const n = Object.keys(e), r = n.map(
      (o) => e[o]
    );
    return t(
      r,
      (...o) => o.reduce((i, s, c) => (i[n[c]] = s, i), {})
    );
  },
  { withTypes: () => Ap }
);
function qc(e) {
  return ({ dispatch: n, getState: r }) => (a) => (o) => typeof o == "function" ? o(n, r, e) : a(o);
}
var Np = qc(), Mp = qc, Rp = (...e) => {
  const t = Kc(...e), n = Object.assign((...r) => {
    const a = t(...r), o = (i, ...s) => a(st(i) ? Xr(i) : i, ...s);
    return Object.assign(o, a), o;
  }, {
    withTypes: () => n
  });
  return n;
}, Pp = Rp(qo), Ip = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Nr : Nr.apply(null, arguments);
}, jp = (e) => e && typeof e.match == "function";
function dn(e, t) {
  function n(...r) {
    if (t) {
      let a = t(...r);
      if (!a)
        throw new Error(process.env.NODE_ENV === "production" ? ge(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: a.payload,
        ..."meta" in a && {
          meta: a.meta
        },
        ..."error" in a && {
          error: a.error
        }
      };
    }
    return {
      type: e,
      payload: r[0]
    };
  }
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => Uo(r) && r.type === e, n;
}
function Dp(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  jp(e);
}
function Lp(e) {
  return Uo(e) && Object.keys(e).every($p);
}
function $p(e) {
  return ["type", "payload", "error", "meta"].indexOf(e) > -1;
}
function Fp(e) {
  const t = e ? `${e}`.split("/") : [], n = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${n}())\` instead of \`dispatch(${n})\`. This is necessary even if the action has no payload.`;
}
function zp(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (n) => (r) => n(r);
  const {
    isActionCreator: t = Dp
  } = e;
  return () => (n) => (r) => (t(r) && console.warn(Fp(r.type)), n(r));
}
function Xc(e, t) {
  let n = 0;
  return {
    measureTime(r) {
      const a = Date.now();
      try {
        return r();
      } finally {
        const o = Date.now();
        n += o - a;
      }
    },
    warnIfExceeded() {
      n > e && console.warn(`${t} took ${n}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var Jc = class Cn extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Cn.prototype);
  }
  static get [Symbol.species]() {
    return Cn;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Cn(...t[0].concat(this)) : new Cn(...t.concat(this));
  }
};
function ss(e) {
  return dt(e) ? Ko(e, () => {
  }) : e;
}
function cs(e, t, n) {
  if (e.has(t)) {
    let a = e.get(t);
    return n.update && (a = n.update(a, t, e), e.set(t, a)), a;
  }
  if (!n.insert)
    throw new Error(process.env.NODE_ENV === "production" ? ge(10) : "No insert provided for key not already in map");
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function Wp(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function Yp(e, t, n) {
  const r = Qc(e, t, n);
  return {
    detectMutations() {
      return Zc(e, t, r, n);
    }
  };
}
function Qc(e, t = [], n, r = "", a = /* @__PURE__ */ new Set()) {
  const o = {
    value: n
  };
  if (!e(n) && !a.has(n)) {
    a.add(n), o.children = {};
    for (const i in n) {
      const s = r ? r + "." + i : i;
      t.length && t.indexOf(s) !== -1 || (o.children[i] = Qc(e, t, n[i], s));
    }
  }
  return o;
}
function Zc(e, t = [], n, r, a = !1, o = "") {
  const i = n ? n.value : void 0, s = i === r;
  if (a && !s && !Number.isNaN(r))
    return {
      wasMutated: !0,
      path: o
    };
  if (e(i) || e(r))
    return {
      wasMutated: !1
    };
  const c = {};
  for (let l in n.children)
    c[l] = !0;
  for (let l in r)
    c[l] = !0;
  const f = t.length > 0;
  for (let l in c) {
    const m = o ? o + "." + l : l;
    if (f && t.some((g) => g instanceof RegExp ? g.test(m) : m === g))
      continue;
    const h = Zc(e, t, n.children[l], r[l], s, m);
    if (h.wasMutated)
      return h;
  }
  return {
    wasMutated: !1
  };
}
function Vp(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (n) => t(n);
  {
    let t = function(s, c, f, l) {
      return JSON.stringify(s, n(c, l), f);
    }, n = function(s, c) {
      let f = [], l = [];
      return c || (c = function(m, h) {
        return f[0] === h ? "[Circular ~]" : "[Circular ~." + l.slice(0, f.indexOf(h)).join(".") + "]";
      }), function(m, h) {
        if (f.length > 0) {
          var u = f.indexOf(this);
          ~u ? f.splice(u + 1) : f.push(this), ~u ? l.splice(u, 1 / 0, m) : l.push(m), ~f.indexOf(h) && (h = c.call(this, m, h));
        } else
          f.push(h);
        return s == null ? h : s.call(this, m, h);
      };
    }, {
      isImmutable: r = Wp,
      ignoredPaths: a,
      warnAfter: o = 32
    } = e;
    const i = Yp.bind(null, r, a);
    return ({
      getState: s
    }) => {
      let c = s(), f = i(c), l;
      return (m) => (h) => {
        const u = Xc(o, "ImmutableStateInvariantMiddleware");
        u.measureTime(() => {
          if (c = s(), l = f.detectMutations(), f = i(c), l.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? ge(19) : `A state mutation was detected between dispatches, in the path '${l.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const g = m(h);
        return u.measureTime(() => {
          if (c = s(), l = f.detectMutations(), f = i(c), l.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? ge(20) : `A state mutation was detected inside a dispatch, in the path: ${l.path || ""}. Take a look at the reducer(s) handling the action ${t(h)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), u.warnIfExceeded(), g;
      };
    };
  }
}
function el(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || Jn(e);
}
function Xa(e, t = "", n = el, r, a = [], o) {
  let i;
  if (!n(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || o != null && o.has(e))
    return !1;
  const s = r != null ? r(e) : Object.entries(e), c = a.length > 0;
  for (const [f, l] of s) {
    const m = t ? t + "." + f : f;
    if (!(c && a.some((u) => u instanceof RegExp ? u.test(m) : m === u))) {
      if (!n(l))
        return {
          keyPath: m,
          value: l
        };
      if (typeof l == "object" && (i = Xa(l, m, n, r, a, o), i))
        return i;
    }
  }
  return o && tl(e) && o.add(e), !1;
}
function tl(e) {
  if (!Object.isFrozen(e))
    return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !tl(t))
      return !1;
  return !0;
}
function Bp(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (n) => t(n);
  {
    const {
      isSerializable: t = el,
      getEntries: n,
      ignoredActions: r = [],
      ignoredActionPaths: a = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: o = [],
      warnAfter: i = 32,
      ignoreState: s = !1,
      ignoreActions: c = !1,
      disableCache: f = !1
    } = e, l = !f && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (m) => (h) => (u) => {
      if (!Uo(u))
        return h(u);
      const g = h(u), p = Xc(i, "SerializableStateInvariantMiddleware");
      return !c && !(r.length && r.indexOf(u.type) !== -1) && p.measureTime(() => {
        const d = Xa(u, "", t, n, a, l);
        if (d) {
          const {
            keyPath: y,
            value: v
          } = d;
          console.error(`A non-serializable value was detected in an action, in the path: \`${y}\`. Value:`, v, `
Take a look at the logic that dispatched this action: `, u, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), s || (p.measureTime(() => {
        const d = m.getState(), y = Xa(d, "", t, n, o, l);
        if (y) {
          const {
            keyPath: v,
            value: x
          } = y;
          console.error(`A non-serializable value was detected in the state, in the path: \`${v}\`. Value:`, x, `
Take a look at the reducer(s) handling this action type: ${u.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), p.warnIfExceeded()), g;
    };
  }
}
function cr(e) {
  return typeof e == "boolean";
}
var Up = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: a = !0,
    actionCreatorCheck: o = !0
  } = t ?? {};
  let i = new Jc();
  if (n && (cr(n) ? i.push(Np) : i.push(Mp(n.extraArgument))), process.env.NODE_ENV !== "production") {
    if (r) {
      let s = {};
      cr(r) || (s = r), i.unshift(Vp(s));
    }
    if (a) {
      let s = {};
      cr(a) || (s = a), i.push(Bp(s));
    }
    if (o) {
      let s = {};
      cr(o) || (s = o), i.unshift(zp(s));
    }
  }
  return i;
}, Hp = "RTK_autoBatch", nl = (e) => (t) => {
  setTimeout(t, e);
}, Gp = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : nl(10), Kp = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let a = !0, o = !1, i = !1;
  const s = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? Gp : e.type === "callback" ? e.queueNotification : nl(e.timeout), f = () => {
    i = !1, o && (o = !1, s.forEach((l) => l()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(l) {
      const m = () => a && l(), h = r.subscribe(m);
      return s.add(l), () => {
        h(), s.delete(l);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(l) {
      var m;
      try {
        return a = !((m = l == null ? void 0 : l.meta) != null && m[Hp]), o = !a, o && (i || (i = !0, c(f))), r.dispatch(l);
      } finally {
        a = !0;
      }
    }
  });
}, qp = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let a = new Jc(e);
  return r && a.push(Kp(typeof r == "object" ? r : void 0)), a;
}, Et = process.env.NODE_ENV === "production";
function Xp(e) {
  const t = Up(), {
    reducer: n = void 0,
    middleware: r,
    devTools: a = !0,
    preloadedState: o = void 0,
    enhancers: i = void 0
  } = e || {};
  let s;
  if (typeof n == "function")
    s = n;
  else if (Jn(n))
    s = op(n);
  else
    throw new Error(process.env.NODE_ENV === "production" ? ge(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (!Et && r && typeof r != "function")
    throw new Error(process.env.NODE_ENV === "production" ? ge(2) : "`middleware` field must be a callback");
  let c;
  if (typeof r == "function") {
    if (c = r(t), !Et && !Array.isArray(c))
      throw new Error(process.env.NODE_ENV === "production" ? ge(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    c = t();
  if (!Et && c.some((g) => typeof g != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? ge(4) : "each middleware provided to configureStore must be a function");
  let f = Nr;
  a && (f = Ip({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !Et,
    ...typeof a == "object" && a
  }));
  const l = ip(...c), m = qp(l);
  if (!Et && i && typeof i != "function")
    throw new Error(process.env.NODE_ENV === "production" ? ge(5) : "`enhancers` field must be a callback");
  let h = typeof i == "function" ? i(m) : m();
  if (!Et && !Array.isArray(h))
    throw new Error(process.env.NODE_ENV === "production" ? ge(6) : "`enhancers` callback must return an array");
  if (!Et && h.some((g) => typeof g != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? ge(7) : "each enhancer provided to configureStore must be a function");
  !Et && c.length && !h.includes(l) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const u = f(...h);
  return Wc(s, o, u);
}
function rl(e) {
  const t = {}, n = [];
  let r;
  const a = {
    addCase(o, i) {
      if (process.env.NODE_ENV !== "production") {
        if (n.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? ge(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (r)
          throw new Error(process.env.NODE_ENV === "production" ? ge(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const s = typeof o == "string" ? o : o.type;
      if (!s)
        throw new Error(process.env.NODE_ENV === "production" ? ge(28) : "`builder.addCase` cannot be called with an empty action type");
      if (s in t)
        throw new Error(process.env.NODE_ENV === "production" ? ge(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${s}'`);
      return t[s] = i, a;
    },
    addMatcher(o, i) {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error(process.env.NODE_ENV === "production" ? ge(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return n.push({
        matcher: o,
        reducer: i
      }), a;
    },
    addDefaultCase(o) {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error(process.env.NODE_ENV === "production" ? ge(31) : "`builder.addDefaultCase` can only be called once");
      return r = o, a;
    }
  };
  return e(a), [t, n, r];
}
function Jp(e) {
  return typeof e == "function";
}
function Qp(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? ge(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [n, r, a] = rl(t), o;
  if (Jp(e))
    o = () => ss(e());
  else {
    const s = ss(e);
    o = () => s;
  }
  function i(s = o(), c) {
    let f = [n[c.type], ...r.filter(({
      matcher: l
    }) => l(c)).map(({
      reducer: l
    }) => l)];
    return f.filter((l) => !!l).length === 0 && (f = [a]), f.reduce((l, m) => {
      if (m)
        if (st(l)) {
          const u = m(l, c);
          return u === void 0 ? l : u;
        } else {
          if (dt(l))
            return Ko(l, (h) => m(h, c));
          {
            const h = m(l, c);
            if (h === void 0) {
              if (l === null)
                return l;
              throw new Error(process.env.NODE_ENV === "production" ? ge(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return h;
          }
        }
      return l;
    }, s);
  }
  return i.getInitialState = o, i;
}
var Zp = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", De = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Zp[Math.random() * 64 | 0];
  return t;
}, eg = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function tg(e, t) {
  return `${e}/${t}`;
}
function ng({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[eg];
  return function(a) {
    const {
      name: o,
      reducerPath: i = o
    } = a;
    if (!o)
      throw new Error(process.env.NODE_ENV === "production" ? ge(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && a.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const s = (typeof a.reducers == "function" ? a.reducers(ag()) : a.reducers) || {}, c = Object.keys(s), f = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, l = {
      addCase(x, E) {
        const b = typeof x == "string" ? x : x.type;
        if (!b)
          throw new Error(process.env.NODE_ENV === "production" ? ge(12) : "`context.addCase` cannot be called with an empty action type");
        if (b in f.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? ge(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + b);
        return f.sliceCaseReducersByType[b] = E, l;
      },
      addMatcher(x, E) {
        return f.sliceMatchers.push({
          matcher: x,
          reducer: E
        }), l;
      },
      exposeAction(x, E) {
        return f.actionCreators[x] = E, l;
      },
      exposeCaseReducer(x, E) {
        return f.sliceCaseReducersByName[x] = E, l;
      }
    };
    c.forEach((x) => {
      const E = s[x], b = {
        reducerName: x,
        type: tg(o, x),
        createNotation: typeof a.reducers == "function"
      };
      ig(E) ? cg(b, E, l, t) : og(b, E, l);
    });
    function m() {
      if (process.env.NODE_ENV !== "production" && typeof a.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? ge(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [x = {}, E = [], b = void 0] = typeof a.extraReducers == "function" ? rl(a.extraReducers) : [a.extraReducers], O = {
        ...x,
        ...f.sliceCaseReducersByType
      };
      return Qp(a.initialState, (_) => {
        for (let A in O)
          _.addCase(A, O[A]);
        for (let A of f.sliceMatchers)
          _.addMatcher(A.matcher, A.reducer);
        for (let A of E)
          _.addMatcher(A.matcher, A.reducer);
        b && _.addDefaultCase(b);
      });
    }
    const h = (x) => x, u = /* @__PURE__ */ new Map();
    let g;
    function p(x, E) {
      return g || (g = m()), g(x, E);
    }
    function d() {
      return g || (g = m()), g.getInitialState();
    }
    function y(x, E = !1) {
      function b(_) {
        let A = _[x];
        if (typeof A > "u") {
          if (E)
            A = d();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? ge(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return A;
      }
      function O(_ = h) {
        const A = cs(u, E, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return cs(A, _, {
          insert: () => {
            const M = {};
            for (const [D, ce] of Object.entries(a.selectors ?? {}))
              M[D] = rg(ce, _, d, E);
            return M;
          }
        });
      }
      return {
        reducerPath: x,
        getSelectors: O,
        get selectors() {
          return O(b);
        },
        selectSlice: b
      };
    }
    const v = {
      name: o,
      reducer: p,
      actions: f.actionCreators,
      caseReducers: f.sliceCaseReducersByName,
      getInitialState: d,
      ...y(i),
      injectInto(x, {
        reducerPath: E,
        ...b
      } = {}) {
        const O = E ?? i;
        return x.inject({
          reducerPath: O,
          reducer: p
        }, b), {
          ...v,
          ...y(O, !0)
        };
      }
    };
    return v;
  };
}
function rg(e, t, n, r) {
  function a(o, ...i) {
    let s = t(o);
    if (typeof s > "u") {
      if (r)
        s = n();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? ge(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(s, ...i);
  }
  return a.unwrapped = e, a;
}
var Jr = /* @__PURE__ */ ng();
function ag() {
  function e(t, n) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...n
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...n) {
          return t(...n);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, n) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: n
      };
    },
    asyncThunk: e
  };
}
function og({
  type: e,
  reducerName: t,
  createNotation: n
}, r, a) {
  let o, i;
  if ("reducer" in r) {
    if (n && !sg(r))
      throw new Error(process.env.NODE_ENV === "production" ? ge(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    o = r.reducer, i = r.prepare;
  } else
    o = r;
  a.addCase(e, o).exposeCaseReducer(t, o).exposeAction(t, i ? dn(e, i) : dn(e));
}
function ig(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function sg(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function cg({
  type: e,
  reducerName: t
}, n, r, a) {
  if (!a)
    throw new Error(process.env.NODE_ENV === "production" ? ge(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: o,
    fulfilled: i,
    pending: s,
    rejected: c,
    settled: f,
    options: l
  } = n, m = a(e, o, l);
  r.exposeAction(t, m), i && r.addCase(m.fulfilled, i), s && r.addCase(m.pending, s), c && r.addCase(m.rejected, c), f && r.addMatcher(m.settled, f), r.exposeCaseReducer(t, {
    fulfilled: i || lr,
    pending: s || lr,
    rejected: c || lr,
    settled: f || lr
  });
}
function lr() {
}
function lg() {
  return {
    ids: [],
    entities: {}
  };
}
function ug(e) {
  function t(n = {}, r) {
    const a = Object.assign(lg(), n);
    return r ? e.setAll(a, r) : a;
  }
  return {
    getInitialState: t
  };
}
function fg() {
  function e(t, n = {}) {
    const {
      createSelector: r = Pp
    } = n, a = (m) => m.ids, o = (m) => m.entities, i = r(a, o, (m, h) => m.map((u) => h[u])), s = (m, h) => h, c = (m, h) => m[h], f = r(a, (m) => m.length);
    if (!t)
      return {
        selectIds: a,
        selectEntities: o,
        selectAll: i,
        selectTotal: f,
        selectById: r(o, s, c)
      };
    const l = r(t, o);
    return {
      selectIds: r(t, a),
      selectEntities: l,
      selectAll: r(t, i),
      selectTotal: r(t, f),
      selectById: r(l, s, c)
    };
  }
  return {
    getSelectors: e
  };
}
var dg = st;
function mg(e) {
  const t = _e((n, r) => e(r));
  return function(r) {
    return t(r, void 0);
  };
}
function _e(e) {
  return function(n, r) {
    function a(i) {
      return Lp(i);
    }
    const o = (i) => {
      a(r) ? e(r.payload, i) : e(r, i);
    };
    return dg(n) ? (o(n), n) : Ko(n, o);
  };
}
function tn(e, t) {
  const n = t(e);
  return process.env.NODE_ENV !== "production" && n === void 0 && console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", e, "The `selectId` implementation:", t.toString()), n;
}
function Ft(e) {
  return Array.isArray(e) || (e = Object.values(e)), e;
}
function Ja(e) {
  return st(e) ? Xr(e) : e;
}
function al(e, t, n) {
  e = Ft(e);
  const r = Ja(n.ids), a = new Set(r), o = [], i = [];
  for (const s of e) {
    const c = tn(s, t);
    a.has(c) ? i.push({
      id: c,
      changes: s
    }) : o.push(s);
  }
  return [o, i, r];
}
function ol(e) {
  function t(g, p) {
    const d = tn(g, e);
    d in p.entities || (p.ids.push(d), p.entities[d] = g);
  }
  function n(g, p) {
    g = Ft(g);
    for (const d of g)
      t(d, p);
  }
  function r(g, p) {
    const d = tn(g, e);
    d in p.entities || p.ids.push(d), p.entities[d] = g;
  }
  function a(g, p) {
    g = Ft(g);
    for (const d of g)
      r(d, p);
  }
  function o(g, p) {
    g = Ft(g), p.ids = [], p.entities = {}, n(g, p);
  }
  function i(g, p) {
    return s([g], p);
  }
  function s(g, p) {
    let d = !1;
    g.forEach((y) => {
      y in p.entities && (delete p.entities[y], d = !0);
    }), d && (p.ids = p.ids.filter((y) => y in p.entities));
  }
  function c(g) {
    Object.assign(g, {
      ids: [],
      entities: {}
    });
  }
  function f(g, p, d) {
    const y = d.entities[p.id];
    if (y === void 0)
      return !1;
    const v = Object.assign({}, y, p.changes), x = tn(v, e), E = x !== p.id;
    return E && (g[p.id] = x, delete d.entities[p.id]), d.entities[x] = v, E;
  }
  function l(g, p) {
    return m([g], p);
  }
  function m(g, p) {
    const d = {}, y = {};
    g.forEach((x) => {
      x.id in p.entities && (y[x.id] = {
        id: x.id,
        // Spreads ignore falsy values, so this works even if there isn't
        // an existing update already at this key
        changes: {
          ...y[x.id] ? y[x.id].changes : null,
          ...x.changes
        }
      });
    }), g = Object.values(y), g.length > 0 && g.filter((E) => f(d, E, p)).length > 0 && (p.ids = Object.values(p.entities).map((E) => tn(E, e)));
  }
  function h(g, p) {
    return u([g], p);
  }
  function u(g, p) {
    const [d, y] = al(g, e, p);
    m(y, p), n(d, p);
  }
  return {
    removeAll: mg(c),
    addOne: _e(t),
    addMany: _e(n),
    setOne: _e(r),
    setMany: _e(a),
    setAll: _e(o),
    updateOne: _e(l),
    updateMany: _e(m),
    upsertOne: _e(h),
    upsertMany: _e(u),
    removeOne: _e(i),
    removeMany: _e(s)
  };
}
function pg(e, t, n) {
  let r = 0, a = e.length;
  for (; r < a; ) {
    let o = r + a >>> 1;
    const i = e[o];
    n(t, i) >= 0 ? r = o + 1 : a = o;
  }
  return r;
}
function gg(e, t, n) {
  const r = pg(e, t, n);
  return e.splice(r, 0, t), e;
}
function hg(e, t) {
  const {
    removeOne: n,
    removeMany: r,
    removeAll: a
  } = ol(e);
  function o(y, v) {
    return i([y], v);
  }
  function i(y, v, x) {
    y = Ft(y);
    const E = new Set(x ?? Xr(v.ids)), b = y.filter((O) => !E.has(tn(O, e)));
    b.length !== 0 && d(v, b);
  }
  function s(y, v) {
    return c([y], v);
  }
  function c(y, v) {
    if (y = Ft(y), y.length !== 0) {
      for (const x of y)
        delete v.entities[e(x)];
      d(v, y);
    }
  }
  function f(y, v) {
    y = Ft(y), v.entities = {}, v.ids = [], i(y, v, []);
  }
  function l(y, v) {
    return m([y], v);
  }
  function m(y, v) {
    let x = !1, E = !1;
    for (let b of y) {
      const O = v.entities[b.id];
      if (!O)
        continue;
      x = !0, Object.assign(O, b.changes);
      const _ = e(O);
      if (b.id !== _) {
        E = !0, delete v.entities[b.id];
        const A = v.ids.indexOf(b.id);
        v.ids[A] = _, v.entities[_] = O;
      }
    }
    x && d(v, [], x, E);
  }
  function h(y, v) {
    return u([y], v);
  }
  function u(y, v) {
    const [x, E, b] = al(y, e, v);
    E.length && m(E, v), x.length && i(x, v, b);
  }
  function g(y, v) {
    if (y.length !== v.length)
      return !1;
    for (let x = 0; x < y.length && x < v.length; x++)
      if (y[x] !== v[x])
        return !1;
    return !0;
  }
  const d = (y, v, x, E) => {
    const b = Ja(y.entities), O = Ja(y.ids), _ = y.entities;
    let A = O;
    E && (A = Array.from(new Set(O)));
    let M = [];
    for (const $ of A) {
      const ee = b[$];
      ee && M.push(ee);
    }
    const D = M.length === 0;
    for (const $ of v)
      _[e($)] = $, D || gg(M, $, t);
    D ? M = v.slice().sort(t) : x && M.sort(t);
    const ce = M.map(e);
    g(O, ce) || (y.ids = ce);
  };
  return {
    removeOne: n,
    removeMany: r,
    removeAll: a,
    addOne: _e(o),
    updateOne: _e(l),
    upsertOne: _e(h),
    setOne: _e(s),
    setMany: _e(c),
    setAll: _e(f),
    addMany: _e(i),
    updateMany: _e(m),
    upsertMany: _e(u)
  };
}
function yg(e = {}) {
  const {
    selectId: t,
    sortComparer: n
  } = {
    sortComparer: !1,
    selectId: (i) => i.id,
    ...e
  }, r = n ? hg(t, n) : ol(t), a = ug(r), o = fg();
  return {
    selectId: t,
    sortComparer: n,
    ...a,
    ...o,
    ...r
  };
}
var vg = (e, t) => {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? ge(32) : `${t} is not a function`);
}, Xo = "listenerMiddleware", bg = (e) => {
  let {
    type: t,
    actionCreator: n,
    matcher: r,
    predicate: a,
    effect: o
  } = e;
  if (t)
    a = dn(t).match;
  else if (n)
    t = n.type, a = n.match;
  else if (r)
    a = r;
  else if (!a)
    throw new Error(process.env.NODE_ENV === "production" ? ge(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return vg(o, "options.listener"), {
    predicate: a,
    type: t,
    effect: o
  };
}, wg = Object.assign((e) => {
  const {
    type: t,
    predicate: n,
    effect: r
  } = bg(e);
  return {
    id: De(),
    effect: r,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? ge(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => wg
}), xg = Object.assign(dn(`${Xo}/add`), {
  withTypes: () => xg
});
dn(`${Xo}/removeAll`);
var Eg = Object.assign(dn(`${Xo}/remove`), {
  withTypes: () => Eg
});
function ge(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
function Sg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qa = { exports: {} }, ha = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ls;
function kg() {
  if (ls)
    return ha;
  ls = 1;
  var e = k;
  function t(m, h) {
    return m === h && (m !== 0 || 1 / m === 1 / h) || m !== m && h !== h;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, a = e.useEffect, o = e.useLayoutEffect, i = e.useDebugValue;
  function s(m, h) {
    var u = h(), g = r({ inst: { value: u, getSnapshot: h } }), p = g[0].inst, d = g[1];
    return o(function() {
      p.value = u, p.getSnapshot = h, c(p) && d({ inst: p });
    }, [m, u, h]), a(function() {
      return c(p) && d({ inst: p }), m(function() {
        c(p) && d({ inst: p });
      });
    }, [m]), i(u), u;
  }
  function c(m) {
    var h = m.getSnapshot;
    m = m.value;
    try {
      var u = h();
      return !n(m, u);
    } catch {
      return !0;
    }
  }
  function f(m, h) {
    return h();
  }
  var l = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? f : s;
  return ha.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l, ha;
}
var ya = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var us;
function Og() {
  return us || (us = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = k, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(x) {
      {
        for (var E = arguments.length, b = new Array(E > 1 ? E - 1 : 0), O = 1; O < E; O++)
          b[O - 1] = arguments[O];
        r("error", x, b);
      }
    }
    function r(x, E, b) {
      {
        var O = t.ReactDebugCurrentFrame, _ = O.getStackAddendum();
        _ !== "" && (E += "%s", b = b.concat([_]));
        var A = b.map(function(M) {
          return String(M);
        });
        A.unshift("Warning: " + E), Function.prototype.apply.call(console[x], console, A);
      }
    }
    function a(x, E) {
      return x === E && (x !== 0 || 1 / x === 1 / E) || x !== x && E !== E;
    }
    var o = typeof Object.is == "function" ? Object.is : a, i = e.useState, s = e.useEffect, c = e.useLayoutEffect, f = e.useDebugValue, l = !1, m = !1;
    function h(x, E, b) {
      l || e.startTransition !== void 0 && (l = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var O = E();
      if (!m) {
        var _ = E();
        o(O, _) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), m = !0);
      }
      var A = i({
        inst: {
          value: O,
          getSnapshot: E
        }
      }), M = A[0].inst, D = A[1];
      return c(function() {
        M.value = O, M.getSnapshot = E, u(M) && D({
          inst: M
        });
      }, [x, O, E]), s(function() {
        u(M) && D({
          inst: M
        });
        var ce = function() {
          u(M) && D({
            inst: M
          });
        };
        return x(ce);
      }, [x]), f(O), O;
    }
    function u(x) {
      var E = x.getSnapshot, b = x.value;
      try {
        var O = E();
        return !o(b, O);
      } catch {
        return !0;
      }
    }
    function g(x, E, b) {
      return E();
    }
    var p = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", d = !p, y = d ? g : h, v = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : y;
    ya.useSyncExternalStore = v, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ya;
}
process.env.NODE_ENV === "production" ? Qa.exports = kg() : Qa.exports = Og();
var il = Qa.exports, Za = { exports: {} }, va = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fs;
function _g() {
  if (fs)
    return va;
  fs = 1;
  var e = k, t = il;
  function n(f, l) {
    return f === l && (f !== 0 || 1 / f === 1 / l) || f !== f && l !== l;
  }
  var r = typeof Object.is == "function" ? Object.is : n, a = t.useSyncExternalStore, o = e.useRef, i = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return va.useSyncExternalStoreWithSelector = function(f, l, m, h, u) {
    var g = o(null);
    if (g.current === null) {
      var p = { hasValue: !1, value: null };
      g.current = p;
    } else
      p = g.current;
    g = s(function() {
      function y(O) {
        if (!v) {
          if (v = !0, x = O, O = h(O), u !== void 0 && p.hasValue) {
            var _ = p.value;
            if (u(_, O))
              return E = _;
          }
          return E = O;
        }
        if (_ = E, r(x, O))
          return _;
        var A = h(O);
        return u !== void 0 && u(_, A) ? _ : (x = O, E = A);
      }
      var v = !1, x, E, b = m === void 0 ? null : m;
      return [function() {
        return y(l());
      }, b === null ? void 0 : function() {
        return y(b());
      }];
    }, [l, m, h, u]);
    var d = a(f, g[0], g[1]);
    return i(function() {
      p.hasValue = !0, p.value = d;
    }, [d]), c(d), d;
  }, va;
}
var ba = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ds;
function Cg() {
  return ds || (ds = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = k, t = il;
    function n(l, m) {
      return l === m && (l !== 0 || 1 / l === 1 / m) || l !== l && m !== m;
    }
    var r = typeof Object.is == "function" ? Object.is : n, a = t.useSyncExternalStore, o = e.useRef, i = e.useEffect, s = e.useMemo, c = e.useDebugValue;
    function f(l, m, h, u, g) {
      var p = o(null), d;
      p.current === null ? (d = {
        hasValue: !1,
        value: null
      }, p.current = d) : d = p.current;
      var y = s(function() {
        var b = !1, O, _, A = function($) {
          if (!b) {
            b = !0, O = $;
            var ee = u($);
            if (g !== void 0 && d.hasValue) {
              var J = d.value;
              if (g(J, ee))
                return _ = J, J;
            }
            return _ = ee, ee;
          }
          var I = O, q = _;
          if (r(I, $))
            return q;
          var le = u($);
          return g !== void 0 && g(q, le) ? q : (O = $, _ = le, le);
        }, M = h === void 0 ? null : h, D = function() {
          return A(m());
        }, ce = M === null ? void 0 : function() {
          return A(M());
        };
        return [D, ce];
      }, [m, h, u, g]), v = y[0], x = y[1], E = a(l, v, x);
      return i(function() {
        d.hasValue = !0, d.value = E;
      }, [E]), c(E), E;
    }
    ba.useSyncExternalStoreWithSelector = f, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ba;
}
process.env.NODE_ENV === "production" ? Za.exports = _g() : Za.exports = Cg();
var Tg = Za.exports;
function Ag(e) {
  e();
}
let sl = Ag;
const Ng = (e) => sl = e, Mg = () => sl, ms = Symbol.for("react-redux-context"), ps = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Rg() {
  var e;
  if (!Ve.createContext)
    return {};
  const t = (e = ps[ms]) != null ? e : ps[ms] = /* @__PURE__ */ new Map();
  let n = t.get(Ve.createContext);
  return n || (n = Ve.createContext(null), process.env.NODE_ENV !== "production" && (n.displayName = "ReactRedux"), t.set(Ve.createContext, n)), n;
}
const Ir = /* @__PURE__ */ Rg();
function cl(e = Ir) {
  return function() {
    const n = Af(e);
    if (process.env.NODE_ENV !== "production" && !n)
      throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
    return n;
  };
}
const Pg = /* @__PURE__ */ cl(), Ig = () => {
  throw new Error("uSES not initialized!");
};
let ll = Ig;
const jg = (e) => {
  ll = e;
}, Dg = (e, t) => e === t;
function Lg(e = Ir) {
  const t = e === Ir ? Pg : cl(e);
  return function(r, a = {}) {
    const {
      equalityFn: o = Dg,
      stabilityCheck: i = void 0,
      noopCheck: s = void 0
    } = typeof a == "function" ? {
      equalityFn: a
    } : a;
    if (process.env.NODE_ENV !== "production") {
      if (!r)
        throw new Error("You must pass a selector to useSelector");
      if (typeof r != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof o != "function")
        throw new Error("You must pass a function as an equality function to useSelector");
    }
    const {
      store: c,
      subscription: f,
      getServerState: l,
      stabilityCheck: m,
      noopCheck: h
    } = t(), u = Nf(!0), g = Mf({
      [r.name](d) {
        const y = r(d);
        if (process.env.NODE_ENV !== "production") {
          const v = typeof i > "u" ? m : i;
          if (v === "always" || v === "once" && u.current) {
            const E = r(d);
            if (!o(y, E)) {
              let b;
              try {
                throw new Error();
              } catch (O) {
                ({
                  stack: b
                } = O);
              }
              console.warn("Selector " + (r.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`, {
                state: d,
                selected: y,
                selected2: E,
                stack: b
              });
            }
          }
          const x = typeof s > "u" ? h : s;
          if ((x === "always" || x === "once" && u.current) && y === d) {
            let E;
            try {
              throw new Error();
            } catch (b) {
              ({
                stack: E
              } = b);
            }
            console.warn("Selector " + (r.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`, {
              stack: E
            });
          }
          u.current && (u.current = !1);
        }
        return y;
      }
    }[r.name], [r, m, i]), p = ll(f.addNestedSub, c.getState, l || c.getState, g, o);
    return Rf(p), p;
  };
}
const Re = /* @__PURE__ */ Lg();
var eo = { exports: {} }, fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gs;
function $g() {
  if (gs)
    return fe;
  gs = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, u = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, v = e ? Symbol.for("react.scope") : 60119;
  function x(b) {
    if (typeof b == "object" && b !== null) {
      var O = b.$$typeof;
      switch (O) {
        case t:
          switch (b = b.type, b) {
            case c:
            case f:
            case r:
            case o:
            case a:
            case m:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case l:
                case g:
                case u:
                case i:
                  return b;
                default:
                  return O;
              }
          }
        case n:
          return O;
      }
    }
  }
  function E(b) {
    return x(b) === f;
  }
  return fe.AsyncMode = c, fe.ConcurrentMode = f, fe.ContextConsumer = s, fe.ContextProvider = i, fe.Element = t, fe.ForwardRef = l, fe.Fragment = r, fe.Lazy = g, fe.Memo = u, fe.Portal = n, fe.Profiler = o, fe.StrictMode = a, fe.Suspense = m, fe.isAsyncMode = function(b) {
    return E(b) || x(b) === c;
  }, fe.isConcurrentMode = E, fe.isContextConsumer = function(b) {
    return x(b) === s;
  }, fe.isContextProvider = function(b) {
    return x(b) === i;
  }, fe.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, fe.isForwardRef = function(b) {
    return x(b) === l;
  }, fe.isFragment = function(b) {
    return x(b) === r;
  }, fe.isLazy = function(b) {
    return x(b) === g;
  }, fe.isMemo = function(b) {
    return x(b) === u;
  }, fe.isPortal = function(b) {
    return x(b) === n;
  }, fe.isProfiler = function(b) {
    return x(b) === o;
  }, fe.isStrictMode = function(b) {
    return x(b) === a;
  }, fe.isSuspense = function(b) {
    return x(b) === m;
  }, fe.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === f || b === o || b === a || b === m || b === h || typeof b == "object" && b !== null && (b.$$typeof === g || b.$$typeof === u || b.$$typeof === i || b.$$typeof === s || b.$$typeof === l || b.$$typeof === d || b.$$typeof === y || b.$$typeof === v || b.$$typeof === p);
  }, fe.typeOf = x, fe;
}
var de = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hs;
function Fg() {
  return hs || (hs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, u = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, v = e ? Symbol.for("react.scope") : 60119;
    function x(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === r || R === f || R === o || R === a || R === m || R === h || typeof R == "object" && R !== null && (R.$$typeof === g || R.$$typeof === u || R.$$typeof === i || R.$$typeof === s || R.$$typeof === l || R.$$typeof === d || R.$$typeof === y || R.$$typeof === v || R.$$typeof === p);
    }
    function E(R) {
      if (typeof R == "object" && R !== null) {
        var $e = R.$$typeof;
        switch ($e) {
          case t:
            var W = R.type;
            switch (W) {
              case c:
              case f:
              case r:
              case o:
              case a:
              case m:
                return W;
              default:
                var Xe = W && W.$$typeof;
                switch (Xe) {
                  case s:
                  case l:
                  case g:
                  case u:
                  case i:
                    return Xe;
                  default:
                    return $e;
                }
            }
          case n:
            return $e;
        }
      }
    }
    var b = c, O = f, _ = s, A = i, M = t, D = l, ce = r, $ = g, ee = u, J = n, I = o, q = a, le = m, xe = !1;
    function Se(R) {
      return xe || (xe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C(R) || E(R) === c;
    }
    function C(R) {
      return E(R) === f;
    }
    function N(R) {
      return E(R) === s;
    }
    function Y(R) {
      return E(R) === i;
    }
    function F(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function U(R) {
      return E(R) === l;
    }
    function ne(R) {
      return E(R) === r;
    }
    function H(R) {
      return E(R) === g;
    }
    function K(R) {
      return E(R) === u;
    }
    function Q(R) {
      return E(R) === n;
    }
    function ie(R) {
      return E(R) === o;
    }
    function Z(R) {
      return E(R) === a;
    }
    function Ne(R) {
      return E(R) === m;
    }
    de.AsyncMode = b, de.ConcurrentMode = O, de.ContextConsumer = _, de.ContextProvider = A, de.Element = M, de.ForwardRef = D, de.Fragment = ce, de.Lazy = $, de.Memo = ee, de.Portal = J, de.Profiler = I, de.StrictMode = q, de.Suspense = le, de.isAsyncMode = Se, de.isConcurrentMode = C, de.isContextConsumer = N, de.isContextProvider = Y, de.isElement = F, de.isForwardRef = U, de.isFragment = ne, de.isLazy = H, de.isMemo = K, de.isPortal = Q, de.isProfiler = ie, de.isStrictMode = Z, de.isSuspense = Ne, de.isValidElementType = x, de.typeOf = E;
  }()), de;
}
process.env.NODE_ENV === "production" ? eo.exports = $g() : eo.exports = Fg();
var Jo = eo.exports, ul = Jo, zg = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Wg = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, fl = {};
fl[ul.ForwardRef] = zg;
fl[ul.Memo] = Wg;
var me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ys;
function Yg() {
  if (ys)
    return me;
  ys = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), u = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function p(d) {
    if (typeof d == "object" && d !== null) {
      var y = d.$$typeof;
      switch (y) {
        case e:
          switch (d = d.type, d) {
            case n:
            case a:
            case r:
            case f:
            case l:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case s:
                case i:
                case c:
                case h:
                case m:
                case o:
                  return d;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return me.ContextConsumer = i, me.ContextProvider = o, me.Element = e, me.ForwardRef = c, me.Fragment = n, me.Lazy = h, me.Memo = m, me.Portal = t, me.Profiler = a, me.StrictMode = r, me.Suspense = f, me.SuspenseList = l, me.isAsyncMode = function() {
    return !1;
  }, me.isConcurrentMode = function() {
    return !1;
  }, me.isContextConsumer = function(d) {
    return p(d) === i;
  }, me.isContextProvider = function(d) {
    return p(d) === o;
  }, me.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === e;
  }, me.isForwardRef = function(d) {
    return p(d) === c;
  }, me.isFragment = function(d) {
    return p(d) === n;
  }, me.isLazy = function(d) {
    return p(d) === h;
  }, me.isMemo = function(d) {
    return p(d) === m;
  }, me.isPortal = function(d) {
    return p(d) === t;
  }, me.isProfiler = function(d) {
    return p(d) === a;
  }, me.isStrictMode = function(d) {
    return p(d) === r;
  }, me.isSuspense = function(d) {
    return p(d) === f;
  }, me.isSuspenseList = function(d) {
    return p(d) === l;
  }, me.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === n || d === a || d === r || d === f || d === l || d === u || typeof d == "object" && d !== null && (d.$$typeof === h || d.$$typeof === m || d.$$typeof === o || d.$$typeof === i || d.$$typeof === c || d.$$typeof === g || d.getModuleId !== void 0);
  }, me.typeOf = p, me;
}
var pe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vs;
function Vg() {
  return vs || (vs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), u = Symbol.for("react.offscreen"), g = !1, p = !1, d = !1, y = !1, v = !1, x;
    x = Symbol.for("react.module.reference");
    function E(W) {
      return !!(typeof W == "string" || typeof W == "function" || W === n || W === a || v || W === r || W === f || W === l || y || W === u || g || p || d || typeof W == "object" && W !== null && (W.$$typeof === h || W.$$typeof === m || W.$$typeof === o || W.$$typeof === i || W.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      W.$$typeof === x || W.getModuleId !== void 0));
    }
    function b(W) {
      if (typeof W == "object" && W !== null) {
        var Xe = W.$$typeof;
        switch (Xe) {
          case e:
            var nt = W.type;
            switch (nt) {
              case n:
              case a:
              case r:
              case f:
              case l:
                return nt;
              default:
                var yn = nt && nt.$$typeof;
                switch (yn) {
                  case s:
                  case i:
                  case c:
                  case h:
                  case m:
                  case o:
                    return yn;
                  default:
                    return Xe;
                }
            }
          case t:
            return Xe;
        }
      }
    }
    var O = i, _ = o, A = e, M = c, D = n, ce = h, $ = m, ee = t, J = a, I = r, q = f, le = l, xe = !1, Se = !1;
    function C(W) {
      return xe || (xe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function N(W) {
      return Se || (Se = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Y(W) {
      return b(W) === i;
    }
    function F(W) {
      return b(W) === o;
    }
    function U(W) {
      return typeof W == "object" && W !== null && W.$$typeof === e;
    }
    function ne(W) {
      return b(W) === c;
    }
    function H(W) {
      return b(W) === n;
    }
    function K(W) {
      return b(W) === h;
    }
    function Q(W) {
      return b(W) === m;
    }
    function ie(W) {
      return b(W) === t;
    }
    function Z(W) {
      return b(W) === a;
    }
    function Ne(W) {
      return b(W) === r;
    }
    function R(W) {
      return b(W) === f;
    }
    function $e(W) {
      return b(W) === l;
    }
    pe.ContextConsumer = O, pe.ContextProvider = _, pe.Element = A, pe.ForwardRef = M, pe.Fragment = D, pe.Lazy = ce, pe.Memo = $, pe.Portal = ee, pe.Profiler = J, pe.StrictMode = I, pe.Suspense = q, pe.SuspenseList = le, pe.isAsyncMode = C, pe.isConcurrentMode = N, pe.isContextConsumer = Y, pe.isContextProvider = F, pe.isElement = U, pe.isForwardRef = ne, pe.isFragment = H, pe.isLazy = K, pe.isMemo = Q, pe.isPortal = ie, pe.isProfiler = Z, pe.isStrictMode = Ne, pe.isSuspense = R, pe.isSuspenseList = $e, pe.isValidElementType = E, pe.typeOf = b;
  }()), pe;
}
process.env.NODE_ENV === "production" ? Yg() : Vg();
function Bg() {
  const e = Mg();
  let t = null, n = null;
  return {
    clear() {
      t = null, n = null;
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; )
          r.callback(), r = r.next;
      });
    },
    get() {
      let r = [], a = t;
      for (; a; )
        r.push(a), a = a.next;
      return r;
    },
    subscribe(r) {
      let a = !0, o = n = {
        callback: r,
        next: null,
        prev: n
      };
      return o.prev ? o.prev.next = o : t = o, function() {
        !a || t === null || (a = !1, o.next ? o.next.prev = o.prev : n = o.prev, o.prev ? o.prev.next = o.next : t = o.next);
      };
    }
  };
}
const bs = {
  notify() {
  },
  get: () => []
};
function Ug(e, t) {
  let n, r = bs, a = 0, o = !1;
  function i(p) {
    l();
    const d = r.subscribe(p);
    let y = !1;
    return () => {
      y || (y = !0, d(), m());
    };
  }
  function s() {
    r.notify();
  }
  function c() {
    g.onStateChange && g.onStateChange();
  }
  function f() {
    return o;
  }
  function l() {
    a++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = Bg());
  }
  function m() {
    a--, n && a === 0 && (n(), n = void 0, r.clear(), r = bs);
  }
  function h() {
    o || (o = !0, l());
  }
  function u() {
    o && (o = !1, m());
  }
  const g = {
    addNestedSub: i,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: f,
    trySubscribe: h,
    tryUnsubscribe: u,
    getListeners: () => r
  };
  return g;
}
const Hg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Gg = Hg ? Ve.useLayoutEffect : Ve.useEffect;
function Kg({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: a = "once",
  noopCheck: o = "once"
}) {
  const i = Ve.useMemo(() => {
    const f = Ug(e);
    return {
      store: e,
      subscription: f,
      getServerState: r ? () => r : void 0,
      stabilityCheck: a,
      noopCheck: o
    };
  }, [e, r, a, o]), s = Ve.useMemo(() => e.getState(), [e]);
  Gg(() => {
    const {
      subscription: f
    } = i;
    return f.onStateChange = f.notifyNestedSubs, f.trySubscribe(), s !== e.getState() && f.notifyNestedSubs(), () => {
      f.tryUnsubscribe(), f.onStateChange = void 0;
    };
  }, [i, s]);
  const c = t || Ir;
  return /* @__PURE__ */ Ve.createElement(c.Provider, {
    value: i
  }, n);
}
jg(Tg.useSyncExternalStoreWithSelector);
Ng(If);
function Le(e) {
  const { name: t, default: n, id: r, actions: a, uniques: o = [], onSave: i, onRead: s } = e, c = yg({
    selectId: (d) => d[r]
  }), f = c.getSelectors(), l = c.getInitialState({
    saved: !0,
    status: "idle",
    writeStatus: "ready",
    id: r,
    name: t,
    loadingTime: 600,
    changed: !1
  });
  function m(d, y) {
    const v = Object.values(y), x = Object.values(d).map((b) => {
      const O = typeof n == "function" ? n(y, b) : n;
      return Ur(b, O || {});
    });
    if (!o.length)
      return x;
    const E = [...v, ...x.filter(Boolean)];
    return x.filter((b, O) => !E.slice(0, O).find((M) => o.some((D) => Array.isArray(D) ? D.every((ce) => (M == null ? void 0 : M[ce]) == (b == null ? void 0 : b[ce])) : (M == null ? void 0 : M[D]) == b[D])));
  }
  const h = Jr({
    name: t,
    initialState: l,
    reducers: {
      set(d, { payload: y = [] }) {
        c.setAll(d, m(y, d));
      },
      add(d, { payload: y = [] }) {
        const v = m(y, d);
        c.addMany(d, v), v.length && (d.changed = !0);
      },
      remove(d, { payload: y = [] }) {
        y.some((x) => d.ids.includes(x)) && (d.changed = !0), c.removeMany(d, y);
      },
      update(d, { payload: y = [] }) {
        y.map(({ id: E }) => E).some((E) => d.ids.includes(E)) && (d.changed = !0), c.updateMany(d, y);
      },
      reset(d) {
        d.ids.length || (d.changed = !0), c.removeAll(d);
      },
      upsert(d, { payload: y = [] }) {
        c.upsertMany(d, y), d.changed = !0;
      },
      changeStatus(d, { payload: y }) {
        d.status = y;
      },
      setLoadingTime(d, { payload: y }) {
        d.loadingTime = y;
      },
      setChanged(d, { payload: y }) {
        d.changed = y;
      },
      changeWriteStatus(d, { payload: y }) {
        d.writeStatus = y;
      },
      ...a
    }
  }), u = {
    getFull() {
      return Re((y) => y[t]);
    },
    getIds() {
      return Re((y) => f.selectIds(y[t]));
    },
    getId() {
      return Re((y) => y[t].id);
    },
    remove(d) {
      X.dispatch(h.actions.remove(d));
    },
    add(d) {
      X.dispatch(h.actions.add(d));
    },
    upsert(d) {
      X.dispatch(h.actions.upsert(d));
    },
    getOne(d) {
      return Re((y) => {
        const v = f.selectById(y[t], d);
        return typeof v > "u" ? void 0 : v;
      });
    },
    setOne(d, y) {
      X.dispatch(
        h.actions.update([
          {
            id: d,
            changes: y
          }
        ])
      );
    },
    setWriteStatus(d = "ready") {
      X.dispatch(h.actions.changeWriteStatus(d));
    },
    useOne(d) {
      const y = u.getOne(d);
      return qi(
        y,
        (v) => v !== void 0 && u.setOne(d, v),
        (v) => v ?? void 0
      );
    },
    getOneFeild(d, y) {
      return Re((x) => {
        var b;
        const E = (b = f.selectById(x[t], d)) == null ? void 0 : b[y];
        return typeof E > "u" ? void 0 : E;
      });
    },
    setOneFeild(d, y, v) {
      X.dispatch(
        h.actions.update([
          {
            id: d,
            changes: {
              [y]: v
            }
          }
        ])
      );
    },
    useOneFeild(d, y) {
      const v = u.getOneFeild(d, y);
      return qi(
        v,
        (E) => {
          E != null && u.setOneFeild(d, y, E);
        },
        (E) => E
      );
    },
    getOneFeilds(d, y) {
      return Re((x) => {
        const E = f.selectById(x[t], d);
        if (!E)
          return;
        const b = {};
        return y.forEach((O) => {
          b[O] = E[O];
        }), b;
      });
    },
    getAll() {
      return Re((y) => f.selectAll(y[t]));
    },
    setAll(d) {
      X.dispatch(h.actions.set(d));
    },
    useAll() {
      const d = u.getAll(), y = L(d);
      return k.useEffect(() => {
        u.setAll(y.get);
      }, [y.get]), k.useEffect(() => {
        y.set(d);
      }, [d]), y;
    },
    getWriteStatus() {
      return Re((y) => y[t].writeStatus);
    },
    useWriteStatus() {
      const d = u.getWriteStatus(), y = L(d);
      return k.useEffect(() => {
        u.setWriteStatus(y.get);
      }, [y.get]), k.useEffect(() => {
        y.set(d);
      }, [d]), y;
    },
    getStatus() {
      return Re((y) => y[t].status);
    },
    setStatus(d) {
      X.dispatch(h.actions.changeStatus(d));
    },
    useStatus() {
      const d = u.getStatus(), y = L(d);
      return k.useEffect(() => {
        u.setStatus(y.get);
      }, [y.get]), k.useEffect(() => {
        y.set(d);
      }, [d]), y;
    },
    getEntity() {
      return Re((y) => f.selectEntities(y[t]));
    },
    getLoadingTime() {
      return Re((y) => y[t].loadingTime);
    },
    setLoadingTime(d) {
      X.dispatch(h.actions.setLoadingTime(d));
    },
    useLoadingTime() {
      const d = u.getLoadingTime(), y = L(d);
      k.useEffect(() => {
        u.setLoadingTime(y.get);
      }, [y.get]), k.useEffect(() => {
        y.set(d);
      }, [d]);
    },
    getChanged() {
      return Re((y) => y[t].changed);
    },
    setChanged(d) {
      X.dispatch(h.actions.setChanged(d));
    },
    useChanged() {
      const d = u.getChanged(), y = L(d);
      k.useEffect(() => {
        u.setChanged(y.get);
      }, [y.get]), k.useEffect(() => {
        y.set(d);
      }, [d]);
    }
  };
  function g() {
    const d = u.getStatus(), y = u.getId(), v = u.getWriteStatus(), x = u.getLoadingTime();
    return Ar(async () => {
      if (d == "idle") {
        const E = new gn();
        E.clear(), u.setStatus("loading"), await E.start(x);
        try {
          if (!s)
            return;
          let b = s();
          b instanceof Promise && (b = await b), u.setChanged(!1), u.setStatus("success"), u.setAll(b);
        } catch {
          u.setAll([]), u.setStatus("error");
        }
      }
    }, [d]), Ar(async () => {
      if (v == "idle") {
        u.setWriteStatus("loading");
        const E = {};
        try {
          const b = X.getState(), { [t]: O } = b;
          Object.values(O.entities).forEach((A) => {
            if (!A)
              return;
            const { [y]: M, ...D } = A;
            E[M] = D;
          });
          const _ = i == null ? void 0 : i(E, e, b);
          _ instanceof Promise && await _, u.setWriteStatus("success"), u.setWriteStatus("ready");
        } catch {
          u.setWriteStatus("error");
        }
      }
    }, [v]), k.useEffect(() => {
      const E = Object.entries(e.data || {}).map(([b, O]) => ({
        [y]: b,
        ...O
      }));
      u.setAll(E);
    }, []), { id: y, saved: v, status: d, timeLoading: x };
  }
  return {
    slice: h,
    entity: c,
    hooks: u,
    entitySelect: f,
    initialState: l,
    init: g,
    select: (d) => d[t]
  };
}
const qg = {
  settings: {
    focused: "user",
    label: "settings controler",
    tabs: {
      user: {
        icon: {
          value: "faTools"
        }
      },
      keyboardShortcuts: {
        icon: {
          value: "faKeyboard"
        },
        news: {
          value: "faKeyboard"
        }
      },
      icons: {
        icon: {
          value: "faIcons"
        }
      },
      colors: {
        icon: {
          value: "faPenRuler",
          type: "solid"
        }
      }
    }
  },
  "settings.viewType": {
    focused: "list",
    label: "settings layout",
    tab: {
      list: {},
      tree: {}
    }
  }
}, Xg = {
  name: "views",
  id: "viewId",
  default(e, t) {
    const n = t.tabs || {};
    for (const r in n)
      n[r].label || (n[r].label = r);
    return {
      viewId: De(),
      focused: null,
      tabs: n
    };
  },
  data: qg
}, { hooks: Qo, slice: to, init: dl, select: Jg } = Le(Xg);
function Qg(e) {
  const t = Qo.getOne(e);
  return k.useMemo(() => {
    var n;
    return typeof (t == null ? void 0 : t.focused) == "number" ? (n = t == null ? void 0 : t.tabs) == null ? void 0 : n[t.focused] : null;
  }, [t]);
}
const P1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  initViews: dl,
  select: Jg,
  useFocusedTab: Qg,
  viewHooks: Qo,
  viewSlice: to
}, Symbol.toStringTag, { value: "Module" }));
var no = { exports: {} }, Sn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ws;
function Zg() {
  if (ws)
    return Sn;
  ws = 1;
  var e = k, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, c, f) {
    var l, m = {}, h = null, u = null;
    f !== void 0 && (h = "" + f), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (u = c.ref);
    for (l in c)
      r.call(c, l) && !o.hasOwnProperty(l) && (m[l] = c[l]);
    if (s && s.defaultProps)
      for (l in c = s.defaultProps, c)
        m[l] === void 0 && (m[l] = c[l]);
    return { $$typeof: t, type: s, key: h, ref: u, props: m, _owner: a.current };
  }
  return Sn.Fragment = n, Sn.jsx = i, Sn.jsxs = i, Sn;
}
var kn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xs;
function eh() {
  return xs || (xs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = k, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), u = Symbol.for("react.offscreen"), g = Symbol.iterator, p = "@@iterator";
    function d(w) {
      if (w === null || typeof w != "object")
        return null;
      var T = g && w[g] || w[p];
      return typeof T == "function" ? T : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(w) {
      {
        for (var T = arguments.length, P = new Array(T > 1 ? T - 1 : 0), B = 1; B < T; B++)
          P[B - 1] = arguments[B];
        x("error", w, P);
      }
    }
    function x(w, T, P) {
      {
        var B = y.ReactDebugCurrentFrame, ue = B.getStackAddendum();
        ue !== "" && (T += "%s", P = P.concat([ue]));
        var ye = P.map(function(se) {
          return String(se);
        });
        ye.unshift("Warning: " + T), Function.prototype.apply.call(console[w], console, ye);
      }
    }
    var E = !1, b = !1, O = !1, _ = !1, A = !1, M;
    M = Symbol.for("react.module.reference");
    function D(w) {
      return !!(typeof w == "string" || typeof w == "function" || w === r || w === o || A || w === a || w === f || w === l || _ || w === u || E || b || O || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === m || w.$$typeof === i || w.$$typeof === s || w.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      w.$$typeof === M || w.getModuleId !== void 0));
    }
    function ce(w, T, P) {
      var B = w.displayName;
      if (B)
        return B;
      var ue = T.displayName || T.name || "";
      return ue !== "" ? P + "(" + ue + ")" : P;
    }
    function $(w) {
      return w.displayName || "Context";
    }
    function ee(w) {
      if (w == null)
        return null;
      if (typeof w.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof w == "function")
        return w.displayName || w.name || null;
      if (typeof w == "string")
        return w;
      switch (w) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case a:
          return "StrictMode";
        case f:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case s:
            var T = w;
            return $(T) + ".Consumer";
          case i:
            var P = w;
            return $(P._context) + ".Provider";
          case c:
            return ce(w, w.render, "ForwardRef");
          case m:
            var B = w.displayName || null;
            return B !== null ? B : ee(w.type) || "Memo";
          case h: {
            var ue = w, ye = ue._payload, se = ue._init;
            try {
              return ee(se(ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, I = 0, q, le, xe, Se, C, N, Y;
    function F() {
    }
    F.__reactDisabledLog = !0;
    function U() {
      {
        if (I === 0) {
          q = console.log, le = console.info, xe = console.warn, Se = console.error, C = console.group, N = console.groupCollapsed, Y = console.groupEnd;
          var w = {
            configurable: !0,
            enumerable: !0,
            value: F,
            writable: !0
          };
          Object.defineProperties(console, {
            info: w,
            log: w,
            warn: w,
            error: w,
            group: w,
            groupCollapsed: w,
            groupEnd: w
          });
        }
        I++;
      }
    }
    function ne() {
      {
        if (I--, I === 0) {
          var w = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, w, {
              value: q
            }),
            info: J({}, w, {
              value: le
            }),
            warn: J({}, w, {
              value: xe
            }),
            error: J({}, w, {
              value: Se
            }),
            group: J({}, w, {
              value: C
            }),
            groupCollapsed: J({}, w, {
              value: N
            }),
            groupEnd: J({}, w, {
              value: Y
            })
          });
        }
        I < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = y.ReactCurrentDispatcher, K;
    function Q(w, T, P) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (ue) {
            var B = ue.stack.trim().match(/\n( *(at )?)/);
            K = B && B[1] || "";
          }
        return `
` + K + w;
      }
    }
    var ie = !1, Z;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      Z = new Ne();
    }
    function R(w, T) {
      if (!w || ie)
        return "";
      {
        var P = Z.get(w);
        if (P !== void 0)
          return P;
      }
      var B;
      ie = !0;
      var ue = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ye;
      ye = H.current, H.current = null, U();
      try {
        if (T) {
          var se = function() {
            throw Error();
          };
          if (Object.defineProperty(se.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(se, []);
            } catch (Fe) {
              B = Fe;
            }
            Reflect.construct(w, [], se);
          } else {
            try {
              se.call();
            } catch (Fe) {
              B = Fe;
            }
            w.call(se.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Fe) {
            B = Fe;
          }
          w();
        }
      } catch (Fe) {
        if (Fe && B && typeof Fe.stack == "string") {
          for (var re = Fe.stack.split(`
`), Ie = B.stack.split(`
`), Oe = re.length - 1, Te = Ie.length - 1; Oe >= 1 && Te >= 0 && re[Oe] !== Ie[Te]; )
            Te--;
          for (; Oe >= 1 && Te >= 0; Oe--, Te--)
            if (re[Oe] !== Ie[Te]) {
              if (Oe !== 1 || Te !== 1)
                do
                  if (Oe--, Te--, Te < 0 || re[Oe] !== Ie[Te]) {
                    var Ke = `
` + re[Oe].replace(" at new ", " at ");
                    return w.displayName && Ke.includes("<anonymous>") && (Ke = Ke.replace("<anonymous>", w.displayName)), typeof w == "function" && Z.set(w, Ke), Ke;
                  }
                while (Oe >= 1 && Te >= 0);
              break;
            }
        }
      } finally {
        ie = !1, H.current = ye, ne(), Error.prepareStackTrace = ue;
      }
      var Xt = w ? w.displayName || w.name : "", Mt = Xt ? Q(Xt) : "";
      return typeof w == "function" && Z.set(w, Mt), Mt;
    }
    function $e(w, T, P) {
      return R(w, !1);
    }
    function W(w) {
      var T = w.prototype;
      return !!(T && T.isReactComponent);
    }
    function Xe(w, T, P) {
      if (w == null)
        return "";
      if (typeof w == "function")
        return R(w, W(w));
      if (typeof w == "string")
        return Q(w);
      switch (w) {
        case f:
          return Q("Suspense");
        case l:
          return Q("SuspenseList");
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case c:
            return $e(w.render);
          case m:
            return Xe(w.type, T, P);
          case h: {
            var B = w, ue = B._payload, ye = B._init;
            try {
              return Xe(ye(ue), T, P);
            } catch {
            }
          }
        }
      return "";
    }
    var nt = Object.prototype.hasOwnProperty, yn = {}, Oi = y.ReactDebugCurrentFrame;
    function ar(w) {
      if (w) {
        var T = w._owner, P = Xe(w.type, w._source, T ? T.type : null);
        Oi.setExtraStackFrame(P);
      } else
        Oi.setExtraStackFrame(null);
    }
    function af(w, T, P, B, ue) {
      {
        var ye = Function.call.bind(nt);
        for (var se in w)
          if (ye(w, se)) {
            var re = void 0;
            try {
              if (typeof w[se] != "function") {
                var Ie = Error((B || "React class") + ": " + P + " type `" + se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof w[se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ie.name = "Invariant Violation", Ie;
              }
              re = w[se](T, se, B, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Oe) {
              re = Oe;
            }
            re && !(re instanceof Error) && (ar(ue), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", B || "React class", P, se, typeof re), ar(null)), re instanceof Error && !(re.message in yn) && (yn[re.message] = !0, ar(ue), v("Failed %s type: %s", P, re.message), ar(null));
          }
      }
    }
    var of = Array.isArray;
    function oa(w) {
      return of(w);
    }
    function sf(w) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, P = T && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return P;
      }
    }
    function cf(w) {
      try {
        return _i(w), !1;
      } catch {
        return !0;
      }
    }
    function _i(w) {
      return "" + w;
    }
    function Ci(w) {
      if (cf(w))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sf(w)), _i(w);
    }
    var vn = y.ReactCurrentOwner, lf = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ti, Ai, ia;
    ia = {};
    function uf(w) {
      if (nt.call(w, "ref")) {
        var T = Object.getOwnPropertyDescriptor(w, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return w.ref !== void 0;
    }
    function ff(w) {
      if (nt.call(w, "key")) {
        var T = Object.getOwnPropertyDescriptor(w, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return w.key !== void 0;
    }
    function df(w, T) {
      if (typeof w.ref == "string" && vn.current && T && vn.current.stateNode !== T) {
        var P = ee(vn.current.type);
        ia[P] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ee(vn.current.type), w.ref), ia[P] = !0);
      }
    }
    function mf(w, T) {
      {
        var P = function() {
          Ti || (Ti = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        P.isReactWarning = !0, Object.defineProperty(w, "key", {
          get: P,
          configurable: !0
        });
      }
    }
    function pf(w, T) {
      {
        var P = function() {
          Ai || (Ai = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        P.isReactWarning = !0, Object.defineProperty(w, "ref", {
          get: P,
          configurable: !0
        });
      }
    }
    var gf = function(w, T, P, B, ue, ye, se) {
      var re = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: w,
        key: T,
        ref: P,
        props: se,
        // Record the component responsible for creating this element.
        _owner: ye
      };
      return re._store = {}, Object.defineProperty(re._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(re, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.defineProperty(re, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ue
      }), Object.freeze && (Object.freeze(re.props), Object.freeze(re)), re;
    };
    function hf(w, T, P, B, ue) {
      {
        var ye, se = {}, re = null, Ie = null;
        P !== void 0 && (Ci(P), re = "" + P), ff(T) && (Ci(T.key), re = "" + T.key), uf(T) && (Ie = T.ref, df(T, ue));
        for (ye in T)
          nt.call(T, ye) && !lf.hasOwnProperty(ye) && (se[ye] = T[ye]);
        if (w && w.defaultProps) {
          var Oe = w.defaultProps;
          for (ye in Oe)
            se[ye] === void 0 && (se[ye] = Oe[ye]);
        }
        if (re || Ie) {
          var Te = typeof w == "function" ? w.displayName || w.name || "Unknown" : w;
          re && mf(se, Te), Ie && pf(se, Te);
        }
        return gf(w, re, Ie, ue, B, vn.current, se);
      }
    }
    var sa = y.ReactCurrentOwner, Ni = y.ReactDebugCurrentFrame;
    function qt(w) {
      if (w) {
        var T = w._owner, P = Xe(w.type, w._source, T ? T.type : null);
        Ni.setExtraStackFrame(P);
      } else
        Ni.setExtraStackFrame(null);
    }
    var ca;
    ca = !1;
    function la(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function Mi() {
      {
        if (sa.current) {
          var w = ee(sa.current.type);
          if (w)
            return `

Check the render method of \`` + w + "`.";
        }
        return "";
      }
    }
    function yf(w) {
      {
        if (w !== void 0) {
          var T = w.fileName.replace(/^.*[\\\/]/, ""), P = w.lineNumber;
          return `

Check your code at ` + T + ":" + P + ".";
        }
        return "";
      }
    }
    var Ri = {};
    function vf(w) {
      {
        var T = Mi();
        if (!T) {
          var P = typeof w == "string" ? w : w.displayName || w.name;
          P && (T = `

Check the top-level render call using <` + P + ">.");
        }
        return T;
      }
    }
    function Pi(w, T) {
      {
        if (!w._store || w._store.validated || w.key != null)
          return;
        w._store.validated = !0;
        var P = vf(T);
        if (Ri[P])
          return;
        Ri[P] = !0;
        var B = "";
        w && w._owner && w._owner !== sa.current && (B = " It was passed a child from " + ee(w._owner.type) + "."), qt(w), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, B), qt(null);
      }
    }
    function Ii(w, T) {
      {
        if (typeof w != "object")
          return;
        if (oa(w))
          for (var P = 0; P < w.length; P++) {
            var B = w[P];
            la(B) && Pi(B, T);
          }
        else if (la(w))
          w._store && (w._store.validated = !0);
        else if (w) {
          var ue = d(w);
          if (typeof ue == "function" && ue !== w.entries)
            for (var ye = ue.call(w), se; !(se = ye.next()).done; )
              la(se.value) && Pi(se.value, T);
        }
      }
    }
    function bf(w) {
      {
        var T = w.type;
        if (T == null || typeof T == "string")
          return;
        var P;
        if (typeof T == "function")
          P = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === m))
          P = T.propTypes;
        else
          return;
        if (P) {
          var B = ee(T);
          af(P, w.props, "prop", B, w);
        } else if (T.PropTypes !== void 0 && !ca) {
          ca = !0;
          var ue = ee(T);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ue || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wf(w) {
      {
        for (var T = Object.keys(w.props), P = 0; P < T.length; P++) {
          var B = T[P];
          if (B !== "children" && B !== "key") {
            qt(w), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", B), qt(null);
            break;
          }
        }
        w.ref !== null && (qt(w), v("Invalid attribute `ref` supplied to `React.Fragment`."), qt(null));
      }
    }
    var ji = {};
    function Di(w, T, P, B, ue, ye) {
      {
        var se = D(w);
        if (!se) {
          var re = "";
          (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ie = yf(ue);
          Ie ? re += Ie : re += Mi();
          var Oe;
          w === null ? Oe = "null" : oa(w) ? Oe = "array" : w !== void 0 && w.$$typeof === t ? (Oe = "<" + (ee(w.type) || "Unknown") + " />", re = " Did you accidentally export a JSX literal instead of a component?") : Oe = typeof w, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Oe, re);
        }
        var Te = hf(w, T, P, ue, ye);
        if (Te == null)
          return Te;
        if (se) {
          var Ke = T.children;
          if (Ke !== void 0)
            if (B)
              if (oa(Ke)) {
                for (var Xt = 0; Xt < Ke.length; Xt++)
                  Ii(Ke[Xt], w);
                Object.freeze && Object.freeze(Ke);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ii(Ke, w);
        }
        if (nt.call(T, "key")) {
          var Mt = ee(w), Fe = Object.keys(T).filter(function(_f) {
            return _f !== "key";
          }), ua = Fe.length > 0 ? "{key: someKey, " + Fe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ji[Mt + ua]) {
            var Of = Fe.length > 0 ? "{" + Fe.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ua, Mt, Of, Mt), ji[Mt + ua] = !0;
          }
        }
        return w === r ? wf(Te) : bf(Te), Te;
      }
    }
    function xf(w, T, P) {
      return Di(w, T, P, !0);
    }
    function Ef(w, T, P) {
      return Di(w, T, P, !1);
    }
    var Sf = Ef, kf = xf;
    kn.Fragment = r, kn.jsx = Sf, kn.jsxs = kf;
  }()), kn;
}
process.env.NODE_ENV === "production" ? no.exports = Zg() : no.exports = eh();
var Zo = no.exports;
const th = Zo.Fragment, S = Zo.jsx, G = Zo.jsxs, je = ({ children: e }) => /* @__PURE__ */ S(th, { children: e }), ml = {
  id: "treeId",
  name: "tree",
  default: {
    expanded: {},
    separator: "/"
  },
  actions: {
    next(e, { payload: t }) {
      e.entities[t];
    },
    back(e, { payload: t }) {
      e.entities[t];
    },
    toggleExpand(e, { payload: t }) {
      var r;
      const n = e.entities[t];
      n && n.focused && (n.expanded = {
        ...n.expanded || {},
        [n.focused]: !((r = n.expanded) != null && r[n.focused])
      });
    },
    expandMore(e, { payload: t }) {
      const n = e.entities[t];
      n && n.focused && (n.expanded = {
        ...n.expanded || {},
        [n.focused]: !0
      });
    },
    expandLess(e, { payload: t }) {
      const n = e.entities[t];
      n && n.focused && (n.expanded = {
        ...n.expanded || {},
        [n.focused]: !1
      });
    },
    focusParent(e, { payload: t }) {
      const n = e.entities[t];
      if (n && n.focused && n.separator) {
        const r = n.focused.split(n.separator).slice(0, -1).join(n.separator);
        n.focused = r || null;
      }
    },
    focusLeft(e, { payload: t }) {
      var r;
      const n = e.entities[t];
      if (n && n.focused && n.separator)
        if ((r = n.expanded) == null ? void 0 : r[n.focused])
          n.expanded = {
            ...n.expanded || {},
            [n.focused]: !1
          };
        else {
          const o = n.focused.split(n.separator).slice(0, -1).join(n.separator);
          n.focused = o || null;
        }
    },
    focusRight(e, { payload: t }) {
      var r;
      const n = e.entities[t];
      if (n && n.focused && n.separator)
        if (!((r = n.expanded) == null ? void 0 : r[n.focused]))
          n.expanded = {
            ...n.expanded || {},
            [n.focused]: !0
          };
        else {
          const o = [...n.focused.split(n.separator), "0"].join(n.separator);
          n.focused = o;
        }
    }
  },
  data: {}
}, { init: pl, hooks: ut, slice: ro } = Le(ml);
function gl(e) {
  const t = ut.getOne(e);
  k.useEffect(() => {
    t || ut.add([
      {
        treeId: e,
        ends: []
      }
    ]);
  }, [t]);
}
function hl(e, t = 0) {
  const n = [];
  return e == null || e.map(({ data: r, innerTree: a }) => {
    n.push({ data: r, level: t }, ...hl(a, t + 1));
  }), n;
}
function nh(e) {
  return [];
}
function yl({ treeId: e, tree: t = [], component: n, level: r = 0, position: a = "", parent: o }) {
  const i = k.useMemo(() => n, []), s = ut.getOne(e);
  return r == 0 && gl(e), k.useEffect(() => {
    if (!s)
      return;
    const c = Array.from(new Set(s.ends)), f = `${a}${s.separator}${t.length}`;
    c.includes(f) || ut.setOneFeild(e, "ends", [...c, f]);
  }, [t, s]), /* @__PURE__ */ S(je, { children: t.map(({ data: c, innerTree: f }, l) => {
    var g, p;
    const m = `${a}${s == null ? void 0 : s.separator}${l}`, h = {
      data: c,
      parent: o
    }, u = {
      isFocused: m == (s == null ? void 0 : s.focused),
      isSelected: !!((g = s == null ? void 0 : s.selected) != null && g[m]),
      isSubmited: (s == null ? void 0 : s.submited) == m,
      isExpanded: !!((p = s == null ? void 0 : s.expanded) != null && p[m])
    };
    return /* @__PURE__ */ G("div", { children: [
      /* @__PURE__ */ S(
        i,
        {
          status: u,
          handels: {
            focus() {
              s && ut.setOneFeild(e, "focused", m);
            },
            select(d, y) {
              s && ut.setOneFeild(
                e,
                "selected",
                d ? {
                  [m]: y
                } : {
                  ...s.selected,
                  [m]: y
                }
              );
            },
            submit() {
              s && ut.setOneFeild(e, "submited", m);
            },
            expand(d, y) {
              s && ut.setOneFeild(e, "expanded", {
                ...d ? {} : s.expanded || {},
                [m]: y
              });
            }
          },
          level: r,
          isFins: !f,
          position: m,
          data: c,
          index: l,
          parent: h,
          innerTree: f
        }
      ),
      Array.isArray(f) && u.isExpanded && /* @__PURE__ */ S("div", { children: /* @__PURE__ */ S(yl, { position: m, component: n, tree: f, treeId: e, level: r + 1, parent: h }) })
    ] }, l);
  }) });
}
const I1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Tree: yl,
  initNewTree: gl,
  initState: ml,
  initTrees: pl,
  toLinear: hl,
  toTree: nh,
  treeHooks: ut,
  treeSlice: ro
}, Symbol.toStringTag, { value: "Module" })), rh = {
  content: null,
  position: null,
  x: "left",
  y: "bottom"
}, mn = Jr({
  initialState: rh,
  name: "title",
  reducers: {
    // actions
    setContent(e, { payload: t }) {
      e.content = t;
    },
    setPosition(e, { payload: t }) {
      e.position = t;
    },
    setX(e, { payload: t }) {
      e.x = t;
    },
    setY(e, { payload: t }) {
      e.y = t;
    }
  }
});
function wa(e) {
  X.dispatch(mn.actions.setContent(e));
}
function ah() {
  return Re((t) => t.title.content, it);
}
function wr(e) {
  X.dispatch(mn.actions.setPosition(e));
}
function oh() {
  return Re((t) => t.title.position, it);
}
function ih(e = "left") {
  X.dispatch(mn.actions.setX(e));
}
function sh() {
  return Re((t) => t.title.x, it);
}
function ch(e = "bottom") {
  X.dispatch(mn.actions.setY(e));
}
function lh() {
  return Re((t) => t.title.y, it);
}
const uh = {
  id: "id",
  name: "toasts",
  default: () => ({
    id: De(),
    type: "info"
  })
}, { hooks: vl, init: bl, select: fh, slice: ao, entity: dh } = Le(uh);
function wl(e, t, n = De(), r = 5) {
  return vl.add([
    {
      message: e,
      type: t,
      time: r,
      id: n
    }
  ]), n;
}
var xl = /* @__PURE__ */ ((e) => (e[e.short = 5] = "short", e[e.long = 5] = "long", e))(xl || {});
const j1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ToastTime: xl,
  initToasts: bl,
  selectToasts: fh,
  showToast: wl,
  taostsSlice: ao,
  toastHooks: vl,
  toastsEntity: dh
}, Symbol.toStringTag, { value: "Module" })), Ht = {
  id: "slotId",
  name: "slot",
  default: {
    slotId: De(14),
    focused: null,
    submited: null,
    selected: {},
    skiped: {},
    length: 0,
    direction: null,
    redirect: !0
  },
  actions: {
    changeSelectIndexs(e, {
      payload: { name: t, items: n = {} }
    }) {
      const r = e.entities[t];
      r && (r.selected = { ...n });
    },
    removeSelection(e, { payload: t }) {
      e.entities[t] && El.updateOne(e, {
        id: t,
        changes: {
          ...e.entities[t],
          selected: {}
        }
      });
    },
    next(e, { payload: t }) {
      var a;
      const n = e.entities[t];
      if (!n || !n.length) {
        n && (n.focused = null);
        return;
      }
      const { redirect: r = !0 } = n;
      n.direction = "forward", typeof n.focused != "number" && (n.focused = -1);
      do
        n.focused++, r ? n.focused = Math.abs(n.focused) % n.length : n.focused >= n.length && n.focused--;
      while ((a = n.skiped) != null && a[n.focused]);
    },
    back(e, { payload: t }) {
      var a;
      const n = e.entities[t];
      if (!n || !n.length) {
        n && (n.focused = null);
        return;
      }
      const { redirect: r = !0 } = n;
      n.direction = "backward", typeof n.focused != "number" && (n.focused = n.length);
      do
        n.focused--, n.focused < 0 && r ? n.focused = n.length - 1 : n.focused < 0 && (n.focused = 0);
      while ((a = n.skiped) != null && a[n.focused]);
    },
    submit(e, { payload: t }) {
      const n = e.entities[t];
      n && (n.submited = n.focused);
    },
    submitNext(e, { payload: t }) {
      var a;
      const n = e.entities[t];
      if (!n || !n.length) {
        n && (n.submited = null);
        return;
      }
      const { redirect: r = !0 } = n;
      n.direction = "forward", typeof n.submited != "number" && (n.submited = -1);
      do
        n.submited++, r && (n.submited = n.submited % n.length);
      while ((a = n.skiped) != null && a[n.submited]);
    },
    submitBack(e, { payload: t }) {
      var a;
      const n = e.entities[t];
      if (!n || !n.length) {
        n && (n.submited = null);
        return;
      }
      const { redirect: r = !0 } = n;
      n.direction = "backward", typeof n.submited != "number" && (n.submited = n.length);
      do
        n.submited--, r && (n.submited = n.submited % n.length), n.submited < 0 && (n.submited = n.length - 1);
      while ((a = n.skiped) != null && a[n.submited]);
    },
    submitForce(e, { payload: { name: t, index: n = null } }) {
      const r = e.entities[t];
      r && (r.focused = n, r.submited = n);
    },
    escape(e, { payload: t }) {
      const n = e.entities[t];
      n && (n.selected = {}, n.focused = null, n.direction = null, n.submited = null);
    },
    selectAll(e, { payload: t }) {
      const n = e.entities[t];
      if (!n)
        return;
      const r = {};
      Br(0, Number(n.length) - 1, 1).forEach((a) => {
        r[a] = !0;
      }), n.selected = r, n.direction = null;
    }
  }
}, { hooks: Ee, slice: oo, entity: El, init: Sl } = Le(Ht);
function kl(e) {
  X.dispatch({
    type: `${Ht.name}/next`,
    payload: e
  });
}
function Ol(e) {
  return X.dispatch({
    type: `${Ht.name}/back`,
    payload: e
  });
}
function _l(e) {
  return X.dispatch({
    type: `${Ht.name}/escape`,
    payload: e
  });
}
function mh(e) {
  X.dispatch({ type: `${Ht.name}/submit`, payload: e });
}
function ph(e) {
  X.dispatch({ type: `${Ht.name}/submitNext`, payload: e });
}
function gh(e) {
  X.dispatch({ type: `${Ht.name}/submitBack`, payload: e });
}
function ei(e, t) {
  const n = Ee.getOne(e);
  k.useEffect(() => {
    n || Ee.upsert([
      {
        slotId: e,
        length: t.length
      }
    ]);
  }, [n, t]), k.useEffect(() => {
    Ee.setOneFeild(e, "length", t.length);
  }, [t]);
}
function jr(e, t, n = "submited") {
  const r = Ee.getOneFeild(t, n);
  return k.useMemo(() => typeof r != "number" ? null : e[r] || null, [r, e]);
}
const D1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  back: Ol,
  escape: _l,
  getSlotData: jr,
  initNewList: ei,
  initSlot: Sl,
  next: kl,
  slotEntity: El,
  slotHooks: Ee,
  slotSlice: oo,
  submit: mh,
  submitBack: gh,
  submitNext: ph
}, Symbol.toStringTag, { value: "Module" })), hh = {
  appPassword: {},
  colorDarkValue: {},
  colorDefaultValue: {},
  colorLightValue: {},
  colorName: {},
  findCommand: {},
  "findConfigurations-local": {},
  number: {},
  "password/def": {},
  "setting/number": {},
  updateConfigSetting: {},
  "window/password": {}
}, yh = {
  name: "feilds",
  id: "feildId",
  default: () => ({
    selection: {
      direction: "forward",
      end: 0,
      start: 0
    },
    value: ""
  }),
  data: hh
}, { entity: vh, slice: io, hooks: Ce, entitySelect: bh, init: Cl } = Le(yh);
function wh(e, t = []) {
  const n = Object.entries(e), r = n.map(([, a]) => Ce.getOneFeild(a, "value"));
  return k.useMemo(() => {
    const a = {};
    return n.forEach(([o], i) => {
      const s = r[i];
      a[o] = s;
    }), a;
  }, [...r, ...t]);
}
function xh(e) {
  e.forEach((t) => {
    Ce.setOneFeild(t, "value", "");
  });
}
function Qr(e) {
  const t = Ce.getOne(e);
  k.useEffect(() => {
    t || Ce.add([
      {
        feildId: e,
        selection: {
          direction: "forward",
          end: 0,
          start: 0
        },
        value: "",
        controls: {}
      }
    ]);
  }, [t]);
}
function ti(e, t) {
  return k.useMemo(() => {
    if (!t)
      return e || "";
    const r = Math.min(t.start, t.end);
    return (e == null ? void 0 : e.slice(0, r)) || "";
  }, [e, t]);
}
function Tl(e, t) {
  return k.useMemo(() => {
    if (!t)
      return e || "";
    const r = Math.max(t.start, t.end);
    return (e == null ? void 0 : e.slice(r)) || "";
  }, [e, t]);
}
function Al(e, t) {
  return k.useMemo(() => {
    if (!t)
      return e || "";
    const r = Math.min(t.start, t.end), a = Math.max(t.start, t.end);
    return (e == null ? void 0 : e.slice(r, a)) || "";
  }, [e, t]);
}
function Eh(e) {
  e.forEach(Qr);
}
function Sh(e) {
  const t = Ce.getOneFeild(e, "value"), n = Ce.getOneFeild(e, "selection");
  return ti(t, n);
}
function kh(e) {
  const t = Ce.getOneFeild(e, "value"), n = Ce.getOneFeild(e, "selection");
  return Tl(t, n);
}
function Oh(e) {
  const t = Ce.getOneFeild(e, "value"), n = Ce.getOneFeild(e, "selection");
  return Al(t, n);
}
const _h = (e) => document.getElementById(e);
function Ch(e, t = X.getState()) {
  const n = e.map((r) => {
    const a = t.feilds.entities[r], o = Object.keys((a == null ? void 0 : a.controls) || {});
    if (!a || !o.length)
      return {
        response: [],
        isValide: !0
      };
    const i = a.value, s = o.map((c) => i.match(new RegExp(c, "ig")));
    return { response: s, isValide: s.every(Boolean), feildName: r };
  });
  return {
    controls: n,
    isValide: n.every(({ isValide: r }) => r)
  };
}
const L1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkFormByFeilds: Ch,
  feildElement: _h,
  feildEntity: vh,
  feildEntitySelect: bh,
  feildHooks: Ce,
  feildSlice: io,
  getFeildNext: kh,
  getFeildPrevious: Sh,
  getFeildSelected: Oh,
  getManyFeilds: wh,
  getNext: Tl,
  getPrevious: ti,
  getSelected: Al,
  initFeilds: Cl,
  initNewFeild: Qr,
  initNewFeilds: Eh,
  resetManyFeilds: xh
}, Symbol.toStringTag, { value: "Module" })), Nl = {
  "activity/position.enum": {
    config: {
      list: [
        {
          content: "left side",
          value: "leftSide"
        },
        {
          content: "right side",
          value: "rightSide"
        }
      ]
    },
    def: "leftSide",
    desc: "activity position in the sides has two values ${state.settings.entities['activity/position.enum']?.config.list?.map(({ content })=> '\\`' + content '\\`')}",
    name: "activity side position"
  },
  "camera/clear/time.number": {
    config: {
      max: 5,
      min: 1
    },
    def: 4,
    desc: "time to clear the qrcode output by s and is between (**1**) to (**5**)",
    name: "time to clear"
  },
  "camera/loading/time.number": {
    def: 5,
    desc: "time of loading camera by ms",
    name: "loading time camera"
  },
  "preferences/animation.boolean": {
    def: !0,
    desc: "animation in the preferences",
    name: "animation in preferences"
  },
  "preferences/fastScrollKey.enum": {
    config: {
      list: [
        {
          value: "alt"
        },
        {
          value: "control"
        },
        {
          value: "shift"
        }
      ]
    },
    def: "alt",
    desc: "is one between this keys ${state.settings.entities['preferences/fastScrollKey.enum']?.config.list.map(({ value })=> '**' + value + '**').join(' , ')} and when press one of them the scrolling gona be faster",
    name: "speed scrolling meta key"
  },
  "preferences/font.enum": {
    config: {
      list: [
        {
          content: "arial",
          value: "arial"
        },
        {
          content: "times new roman",
          value: "times new roman"
        },
        {
          content: "verdana",
          value: "verdana"
        },
        {
          content: "tahoma",
          value: "tahoma"
        },
        {
          content: "georgia",
          value: "georgia"
        },
        {
          content: "courier new",
          value: "courier new"
        },
        {
          content: "lucida console",
          value: "lucida console"
        },
        {
          content: "impact",
          value: "impact"
        },
        {
          content: "comic sans ms",
          value: "comic sans ms"
        },
        {
          content: "system ui",
          value: "system-ui"
        }
      ]
    },
    def: "arial",
    desc: "change one between this fonts ${state.settings.entities['preferences/font.enum']?.config.list.map(({ content })=> '`' + content + '`').join(' , ')}",
    name: "change font of app"
  },
  "preferences/toastTime.number": {
    config: {
      max: 10,
      min: 1
    },
    def: 6,
    desc: "is in `second`",
    name: "time of toast done"
  },
  "settings/findBy.enum": {
    config: {
      list: [
        {
          content: "setting id",
          value: "settingId"
        },
        {
          value: "setting"
        },
        {
          value: "name"
        }
      ]
    },
    def: "name",
    desc: "the method of how to find \\`setting\\` using one of this:\n${state.settings.entities['settings/findBy.enum']?.config?.list?.map((item)=> '**' + item + '**' ).join(' or ')}",
    name: "find settings using ?"
  },
  "toast/position.enum": {
    config: {
      list: [
        {
          content: "top",
          value: "top"
        },
        {
          content: "bottom",
          value: "bottom"
        }
      ]
    },
    def: "top",
    desc: "the position of the toast is one between ${state.settings.entities['toast/position.enum']?.config.list.map(({ content })=> '`' + content + '`').join(' , ')}",
    name: "toast position"
  },
  "visibility/activity.boolean": {
    def: !0,
    name: "activity visibility"
  },
  "visibility/configurations.boolean": {
    def: !1,
    desc: "hide or visible the configurations view",
    name: "visibility of configurations view",
    private: !0
  },
  "visibility/header.boolean": {
    def: !0,
    name: "header view visibility"
  },
  "visibility/headerNotifays.boolean": {
    def: !1,
    name: "header panel notifications visibility",
    private: !0
  },
  "visibility/keyPanding/form.boolean": {
    def: !1,
    private: !0
  },
  "visibility/leftSide.boolean": {
    def: !1,
    desc: "viibility of **left side**  component",
    name: "left side visibility"
  },
  "visibility/notifays.boolean": {
    def: !1,
    desc: "visibility of **notification** view",
    name: "notification visibility",
    private: !0
  },
  "visibility/notifays/nots.boolean": {
    def: !1,
    private: !0
  },
  "visibility/rightSide.boolean": {
    def: !1,
    desc: "visibility of **right side** component",
    name: "right side visibility"
  },
  "window/dark.boolean": {
    config: {
      style: "checkbox"
    },
    def: !0,
    desc: "change the theme of the app to dark mode",
    name: "dark mode"
  },
  "window/lang.enum": {
    config: {
      list: [
        {
          content: "arabic",
          value: "ar"
        },
        {
          content: "france",
          value: "fr"
        },
        {
          content: "englich",
          value: "en"
        },
        {
          content: "espaniche",
          value: "es"
        },
        {
          content: "india",
          value: "hi"
        },
        {
          content: "japanese",
          value: "ja"
        },
        {
          content: "russian",
          value: "ru"
        }
      ]
    },
    def: "en",
    desc: "change one between this langs ${state.settings.entities['window/lang.enum']?.config.list.map(({ content })=> '`' + content + '`').join(' , ')}",
    name: "change lang of app"
  },
  "window/scroll/animation.boolean": {
    def: !1,
    desc: "scrolling with animation",
    name: "scroll animation"
  }
};
class $n {
  static join(t, n, r) {
    const [a, o] = r.split("->");
    return n.filter((i) => String(t[a]) === String(i[o]));
  }
  static joinOne(t, n, r) {
    const [a, o] = r.split("->");
    return n.find((i) => String(t[a]) == String(i[o]));
  }
  static fullJoin(t, n, r) {
    let a = [...n];
    const [o, i] = r.split("->");
    return t.map((s) => {
      const [c, f] = Mc(a, (l) => String(s[o]) === String(l[i]));
      return a = [...f], {
        data: s,
        childs: c
      };
    });
  }
  static fullJoinOne(t, n, r) {
    const a = [...n], [o, i] = r.split("->");
    return t.map((s) => {
      const c = a.find((f) => String(s[o]) === String(f[i]));
      return c && a.splice(a.indexOf(c), 1), {
        data: s,
        joinTo: c
      };
    });
  }
  static orderBy(t, n, r = "asc") {
    return r == "asc" ? t.sort((a, o) => a[n] < o[n] ? -1 : 1) : t.sort((a, o) => a[n] > o[n] ? -1 : 1);
  }
  static between(t, n, r, a) {
    return r == null && a == null ? t : r == null ? t.filter((o) => o[n] < a) : a == null ? t.filter((o) => {
      const i = o[n];
      return r < i;
    }) : t.filter((o) => {
      const i = o[n];
      return r < i && i < a;
    });
  }
}
const Th = "object", Ah = {
  data: {},
  settings: {
    saved: !0,
    status: "idle",
    reloaded: !0,
    watch: !0,
    ignoreAccess: []
  }
}, so = Jr({
  initialState: Ah,
  name: Th,
  reducers: {
    setValue(e, { payload: t }) {
      const n = e.settings.ignoreAccess.find(({ dir: i }) => t.direction == i);
      if (n && n.pass != t.pass) {
        qe.warn(`Cannot Access Direction ${t.direction}`);
        return;
      }
      const r = t.direction.split(".").filter(Boolean);
      if (!r.length) {
        e.data = t.value;
        return;
      }
      let a = e.data;
      r.slice(0, -1).forEach((i) => {
        let s = a[i];
        s == null && t.force && (a[i] = {}, s = a[i]), a = s;
      });
      const o = r.at(-1);
      a[o] = t.value;
    },
    save(e, { payload: t = !1 }) {
      e.settings.saved = t;
    },
    reload(e, { payload: t = !1 }) {
      e.settings.reloaded = t;
    },
    addIgnoreAccess(e, { payload: t }) {
      t.forEach(({ dir: n, pass: r }) => {
        e.settings.ignoreAccess.find((o) => o.dir == n && r == o.pass) || e.settings.ignoreAccess.push({
          dir: n,
          pass: r
        });
      });
    },
    removeIgnoreAccess(e, { payload: t }) {
      t.forEach(({ dir: n, pass: r }) => {
        const a = e.settings.ignoreAccess.findIndex((o) => o.dir == n && r == o.pass);
        a >= 0 && e.settings.ignoreAccess.splice(a, 1);
      });
    }
  }
});
function Zr(e) {
  return Re((n) => {
    const { isValide: r, value: a } = qn(n.object.data, e);
    return r ? a : null;
  }, it);
}
function Ze(e, t) {
  X.dispatch(
    so.actions.setValue({
      value: t,
      direction: e,
      force: !0
    })
  );
}
function Nh(e) {
  const t = Zr(e), n = L(t);
  return k.useEffect(() => {
    Ze(e, n.get);
  }, [n.get]), k.useEffect(() => {
    n.set(t);
  }, [t]), n;
}
function Mh(e, t) {
  const n = (t || X.getState()).object.data, { isValide: r, value: a } = qn(n, e);
  return r ? a : null;
}
function mt(e) {
  const t = Rl(e);
  return t == null ? void 0 : t.value;
}
const Rh = {
  name: "settings",
  id: "settingId",
  default(e, { def: t }) {
    return {
      private: !1,
      deperacted: !1,
      config: {},
      value: t
    };
  },
  actions: {
    toggle(e, { payload: t }) {
      const n = e.entities[t];
      n && (n.value = !n.value);
    }
  },
  data: Nl
}, { hooks: tt, slice: co, init: Ml, entitySelect: Ph } = Le(Rh);
function Rl(e) {
  const t = tt.getOne(e);
  return k.useMemo(() => t || null, [t]);
}
function Pl() {
  const e = tt.getAll();
  return k.useMemo(() => e.filter(({ private: n = !1 }) => !n), [e]);
}
function Ih(e) {
  const t = tt.getOneFeild(e, "config");
  return k.useMemo(() => t || null, [t]);
}
function jh() {
  const e = Pl(), t = Ce.getOneFeild("findConfigurations", "value"), n = Qo.getOneFeild("settings.viewType", "focused"), r = k.useMemo(() => n == "list" ? $n.orderBy(e, "name", "asc") : n ? $n.orderBy(e, "settingId", "asc") : e, [n, e]), a = mt("settings/findBy.enum"), o = k.useMemo(() => Object.entries(Pc(String(t))).map(([s, c]) => [s, c.join(" ")]), [t]), i = k.useMemo(() => r.filter((s) => o.every(([c, f]) => {
    var l;
    switch (c) {
      case "id":
        return en(s.settingId, f);
      case "name":
        return typeof s.name == "string" && en(s.name, f);
      case "changed":
        return !it(s.def, s.value);
      case "type": {
        const m = (l = s.settingId.match(/\.[a-z]+$/gi)) == null ? void 0 : l[0].slice(1);
        return typeof m == "string" ? en(f, m) : !1;
      }
      case "default value":
        return a == "nice" ? en(Um(s.name, s.desc, s.settingId).join(" "), f) : a && en(String(s[a]), f);
    }
  })), [o, r, a]);
  return k.useEffect(() => {
    Ze("configurations.found.length", i.length);
  }, [i]), i;
}
function Dh(e, t) {
  tt.setOneFeild(e, "config", t);
}
function Lh(e, t) {
  tt.setOneFeild(e, "value", t);
}
const $1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getPublicSettings: Pl,
  getPublicSettingsFilter: jh,
  getSettingById: Rl,
  getSettingConfig: Ih,
  getSettingValue: mt,
  initSettings: Ml,
  setSettingConfig: Dh,
  setSettingValue: Lh,
  settingEntitySelect: Ph,
  settingHooks: tt,
  settingSlice: co
}, Symbol.toStringTag, { value: "Module" })), $h = {
  name: "positions",
  id: "positionId",
  default: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    x: 0,
    y: 0,
    width: 0,
    height: 0
  }
}, { entity: Fh, slice: lo, hooks: zh, entitySelect: Wh, init: Il } = Le($h), F1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  initPositions: Il,
  positionsEntity: Fh,
  positionsEntitySelect: Wh,
  positionsHooks: zh,
  positionsSlice: lo
}, Symbol.toStringTag, { value: "Module" })), Yh = {}, Vh = {
  id: "id",
  name: "notifications",
  default: () => ({
    id: De(),
    desc: void 0,
    removable: !0,
    status: "idle",
    showDesc: !1,
    type: "info",
    buttons: []
  }),
  data: Yh
}, { hooks: Fn, init: jl, select: Bh, slice: uo, entity: Uh } = Le(Vh);
function ni() {
  tt.setOneFeild("visibility/notifays.boolean", "value", !0), tt.setOneFeild("visibility/notifays/nots.boolean", "value", !0);
}
function ri() {
  tt.setOneFeild("visibility/notifays.boolean", "value", !1), tt.setOneFeild("visibility/notifays/nots.boolean", "value", !1);
}
async function fo(e, t = {}) {
  const n = Ur(t, {
    open: !0,
    close: !0,
    time: 2e3
  });
  n != null && n.open && ni();
  const r = {
    id: De(),
    title: " - ",
    ...e
  };
  Fn.upsert([r]), await zo(n.time), Fn.remove([r.id]), n != null && n.close && ri();
}
async function Hh(e, t) {
  const n = t();
  return n instanceof Promise ? new Promise(async (r, a) => {
    ni(), Fn.upsert([e]), n.then(r).catch(a).finally(() => {
      Fn.remove([e.id]), ri();
    });
  }) : n;
}
const z1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closeNotifays: ri,
  initNotifays: jl,
  notifayEntity: Uh,
  notifayHooks: Fn,
  notifaySlice: uo,
  openDuringNotifay: fo,
  openForActionDone: Hh,
  openNotifays: ni,
  selectNotifays: Bh
}, Symbol.toStringTag, { value: "Module" })), Gh = {
  id: "logId",
  name: "logs",
  data: {},
  default: () => ({
    logId: De(10),
    desc: "",
    type: "INFO",
    category: "window",
    showDesc: !1,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  })
}, { entity: Kh, slice: mo, init: Dl, hooks: xr } = Le(Gh), W1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  initLogs: Dl,
  logEntity: Kh,
  logHooks: xr,
  logSlice: mo
}, Symbol.toStringTag, { value: "Module" })), qh = {
  "ar->add": {
    value: "إضافة"
  },
  "ar->calculate-zakat": {
    value: "احسب الزكاة"
  },
  "ar->change": {
    value: "التغيير"
  },
  "ar->Choise-Image": {
    value: "اختيار الصورة"
  },
  "ar->clear": {
    value: "واضح"
  },
  "ar->clear-all": {
    value: "امسح الكل"
  },
  "ar->close-session": {
    value: "إغلاق الجلسة"
  },
  "ar->codes": {
    value: "رموز"
  },
  "ar->colors": {
    value: "الوان"
  },
  "ar->commands": {
    value: "الأوامر"
  },
  "ar->count": {
    value: "عد"
  },
  "ar->create-at": {
    value: "أنشئ في"
  },
  "ar->created-at": {
    value: "أنشئ في"
  },
  "ar->Data-Base": {
    value: "قاعدة بيانات"
  },
  "ar->desc": {
    value: "الوصف"
  },
  "ar->description": {
    value: "الوصف"
  },
  "ar->deshboard": {
    value: "لوحة القيادة"
  },
  "ar->done": {
    value: "تم"
  },
  "ar->done-at": {
    value: "تمت في"
  },
  "ar->email": {
    value: "البريد الإلكتروني"
  },
  "ar->facebook-not-defined": {
    value: "facebook غير معرفة"
  },
  "ar->feedbacks-and-about": {
    value: "ردود الفعل وحول"
  },
  "ar->for-create-one": {
    value: "لطلب واحدة"
  },
  "ar->found": {
    value: "مُستَخرَج"
  },
  "ar->fuateurs": {
    value: "المتابعون"
  },
  "ar->full-name": {
    value: "الاسم الكامل"
  },
  "ar->get-start": {
    value: "ابدأ"
  },
  "ar->home": {
    value: "الصفحة الرئيسية"
  },
  "ar->i'm-give-the-author": {
    value: "أنا أعطي المؤلف"
  },
  "ar->icons": {
    value: "الأيقونات"
  },
  "ar->id": {
    value: "هوية"
  },
  "ar->keyboard-shortcuts": {
    value: "اختصارات لوحة المفاتيح"
  },
  "ar->keyboardShortcuts": {
    value: "اختصارات لوحة المفاتيح"
  },
  "ar->load-extra-files": {
    value: "تحميل ملفات إضافية"
  },
  "ar->loading": {
    value: "تحميل"
  },
  "ar->log-out": {
    value: "تسجيل الخروج"
  },
  "ar->name": {
    value: "الاسم"
  },
  "ar->no-base-url-choised": {
    value: "لا يوجد اختيارات لقاعدة URL"
  },
  "ar->no-image": {
    value: "لا توجد صورة"
  },
  "ar->no-markdown-content": {
    value: "لا يوجد محتوى تخفيض"
  },
  "ar->no-name-defined": {
    value: "لم يُحدد أي اسم"
  },
  "ar->no-result": {
    value: "لا يوجد نتيجة"
  },
  "ar->no-suggestions": {
    value: "لا يوجد اقتراحات"
  },
  "ar->notifications": {
    value: "الإشعارات"
  },
  "ar->open-exsiting-store": {
    value: "فتح متجر موجود"
  },
  "ar->open-new-store": {
    value: "فتح مخزن جديد"
  },
  "ar->open-notifications-view": {
    value: "عرض إشعارات مفتوحة"
  },
  "ar->or-press": {
    value: "أو اضغط"
  },
  "ar->pannel-save-view": {
    value: "حفظ عرض لوحة"
  },
  "ar->partage-store": {
    value: "مخزن المشاركة"
  },
  "ar->pay": {
    value: "ادفع"
  },
  "ar->payment": {
    value: "دفع"
  },
  "ar->payment-": {
    value: "الدفع"
  },
  "ar->payments": {
    value: "المدفوعات"
  },
  "ar->press-?-for-help": {
    value: "اضغط؟ للمساعدة"
  },
  "ar->print": {
    value: "طباعة"
  },
  "ar->privacy": {
    value: "الخصوصية"
  },
  "ar->private": {
    value: "خاص"
  },
  "ar->public": {
    value: "عام"
  },
  "ar->reload-window": {
    value: "إعادة تحميل النافذة"
  },
  "ar->reset": {
    value: "تعيين القيم الافتراضية"
  },
  "ar->reset-base-url": {
    value: "إعادة تعيين عنوان URL الأساسي"
  },
  "ar->save-changes": {
    value: "حفظ التغييرات"
  },
  "ar->save-pannel": {
    value: "حفظ اللوحة"
  },
  "ar->search-user-in-list": {
    value: "البحث عن المستخدم في القائمة"
  },
  "ar->see-your-store": {
    value: "انظر إلى متجرك"
  },
  "ar->sigin": {
    value: "تسجيل الدخول"
  },
  "ar->static": {
    value: "ساكن"
  },
  "ar->status": {
    value: "الحالة"
  },
  "ar->submit": {
    value: "إرسال"
  },
  "ar->system Configurations": {
    value: "تكوينات النظام"
  },
  "ar->System-Configurations": {
    value: "تكوينات النظام"
  },
  "ar->test": {
    value: "اختبار"
  },
  "ar->the-return": {
    value: "العودة"
  },
  "ar->toggle-camera": {
    value: "تنقل الكاميرا"
  },
  "ar->toggle-fullscreen": {
    value: "التبديل إلى ملء الشاشة"
  },
  "ar->toggle-to-dark": {
    value: "الانتقال إلى الوضع الداكن"
  },
  "ar->toggle-to-light": {
    value: "التبديل إلى الإضاءة"
  },
  "ar->un-payments": {
    value: "مدفوعات الأمم المتحدة"
  },
  "ar->update": {
    value: "تحديث"
  },
  "ar->upload": {
    value: "تحميل"
  },
  "ar->user": {
    value: "مستخدم"
  },
  "ar->view-profile": {
    value: "عرض الملف الشخصي"
  },
  "ar->view-settings": {
    value: "إعدادات العرض"
  },
  "ar->visited": {
    value: "تمت الزيارة"
  },
  "ar->welcome": {
    value: "مرحباً"
  },
  "ar->win-detection": {
    value: "كشف الانتصار"
  },
  "ar->write-code-and-start-your-app": {
    value: "اكتب رمز وابدأ تطبيقك"
  },
  "ar->your-starts": {
    value: "تقييم"
  },
  "ar->مستخدم": {
    value: "مستعمل"
  },
  "fr->add": {
    value: "ajouter"
  },
  "fr->calculate-zakat": {
    value: "calculer la zakat"
  },
  "fr->clear": {
    value: "clair"
  },
  "fr->clear-all": {
    value: "tout effacer"
  },
  "fr->close-session": {
    value: "fermer la session"
  },
  "fr->codes": {
    value: "codes"
  },
  "fr->colors": {
    value: "couleurs"
  },
  "fr->count": {
    value: "compter"
  },
  "fr->create-at": {
    value: "créer à"
  },
  "fr->created-at": {
    value: "créé à"
  },
  "fr->ctrl": {
    value: "ctrl"
  },
  "fr->desc": {
    value: "desc"
  },
  "fr->deshboard": {
    value: "Tableau de bord"
  },
  "fr->done-at": {
    value: "fait à"
  },
  "fr->email": {
    value: "courriel"
  },
  "fr->facebook-not-defined": {
    value: "facebook non défini"
  },
  "fr->feedbacks-and-about": {
    value: "retours et à propos"
  },
  "fr->for-create-one": {
    value: "pour en créer une"
  },
  "fr->found": {
    value: "trouvé"
  },
  "fr->fuateurs": {
    value: "followers"
  },
  "fr->full-name": {
    value: "Nom complet"
  },
  "fr->get-start": {
    value: "Commencer"
  },
  "fr->home": {
    value: "Accueil"
  },
  "fr->i'm-give-the-author": {
    value: "Je donne à l'auteur"
  },
  "fr->icons": {
    value: "icônes"
  },
  "fr->id": {
    value: "idientifiant"
  },
  "fr->keyboard-shortcuts": {
    value: "raccourcis clavier"
  },
  "fr->keyboardShortcuts": {
    value: "raccourcis clavier"
  },
  "fr->load-extra-files": {
    value: "charger des fichiers supplémentaires"
  },
  "fr->loading": {
    value: "Chargement"
  },
  "fr->log-out": {
    value: "se déconnecter"
  },
  "fr->name": {
    value: "Nom"
  },
  "fr->no-base-url-choised": {
    value: "aucune URL de base choisie"
  },
  "fr->no-image": {
    value: "pas d’image"
  },
  "fr->no-image-selected": {
    value: "Aucune image sélectionnée"
  },
  "fr->no-markdown-content": {
    value: "pas de contenu markdown"
  },
  "fr->no-name-defined": {
    value: "aucun nom défini"
  },
  "fr->no-result": {
    value: "aucun résultat"
  },
  "fr->no-suggestions": {
    value: "pas de suggestions"
  },
  "fr->notifications": {
    value: "notifications"
  },
  "fr->open-exsiting-store": {
    value: "Ouvrir un magasin existant"
  },
  "fr->open-new-store": {
    value: "ouvrir un nouveau magasin"
  },
  "fr->open-notifications-view": {
    value: "ouvrir l'affichage des notifications"
  },
  "fr->or-press": {
    value: "ou appuyez"
  },
  "fr->pannel-save-view": {
    value: "vue Enreg. tableau"
  },
  "fr->partage-store": {
    value: "partage de magasin"
  },
  "fr->pay": {
    value: "paiement"
  },
  "fr->payment": {
    value: "paiement"
  },
  "fr->payment-": {
    value: "paiement"
  },
  "fr->payments": {
    value: "paiements"
  },
  "fr->permession-for-access-the Cash Stock Management (capabilitéToAccessAllStoreForAuthor)": {
    value: "demande d'accès au module Gestion de Stocks en caisse (capacité à accéder à tous les magasins pour l'auteur)"
  },
  "fr->permession-for-access-the-Cash-Stock-Management-(capabilité-to-access-all-store-for-author)": {
    value: "autorisation d'accès à la Gestion des stocks de trésorerie (capacité d'accès à tous les magasins pour l'auteur)"
  },
  "fr->press-?-for-help": {
    value: "appuyez sur ? pour obtenir de l'aide"
  },
  "fr->privacy": {
    value: "confidentialité"
  },
  "fr->private": {
    value: "privé"
  },
  "fr->public": {
    value: "publique"
  },
  "fr->reload-window": {
    value: "recharger la fenêtre"
  },
  "fr->reset": {
    value: "réinitialiser"
  },
  "fr->reset-base-url": {
    value: "réinitialiser l'URL de base"
  },
  "fr->save-changes": {
    value: "enregistrer les modifications"
  },
  "fr->search-keyboard-shortcuts-in-list": {
    value: "rechercher des raccourcis clavier dans la liste"
  },
  "fr->search-user-in-list": {
    value: "recherche utilisateur dans la liste"
  },
  "fr->see-your-store": {
    value: "voir votre boutique"
  },
  "fr->shift": {
    value: "Maj"
  },
  "fr->static": {
    value: "statique"
  },
  "fr->status": {
    value: "statut"
  },
  "fr->submit": {
    value: "envoyer"
  },
  "fr->test": {
    value: "test"
  },
  "fr->the-return": {
    value: "le retour"
  },
  "fr->toggle-fullscreen": {
    value: "passer en plein écran"
  },
  "fr->toggle-to-dark": {
    value: "basculer vers noir"
  },
  "fr->toggle-to-light": {
    value: "passer en clair"
  },
  "fr->un-payments": {
    value: "paiements en un"
  },
  "fr->update": {
    value: "mettre à jour"
  },
  "fr->user": {
    value: "utilisateur"
  },
  "fr->utilisateur": {
    value: "utilisateur"
  },
  "fr->view-settings": {
    value: "Afficher les paramètres"
  },
  "fr->visited": {
    value: "visité"
  },
  "fr->welcome": {
    value: "bienvenue"
  },
  "fr->win-detection": {
    value: "détection de la victoire"
  },
  "fr->write-code-and-start-your-app": {
    value: "écrivez le code pour lancer votre application"
  },
  "fr->your-starts": {
    value: "vos débuts"
  }
}, Ll = {
  id: "langId",
  name: "langs",
  data: qh
}, $l = () => Dr.setWriteStatus("idle"), { init: Fl, hooks: Dr, entity: Xh, slice: po } = Le(Ll), Y1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cashLangs: $l,
  initConfig: Ll,
  initLangs: Fl,
  langEntity: Xh,
  langHooks: Dr,
  langsSlice: po
}, Symbol.toStringTag, { value: "Module" })), Jh = {
  "camera.take": {
    commands: [
      {
        payload: [
          "camera.take"
        ],
        type: "actions/exec"
      }
    ]
  },
  "colors-list.back": {
    commands: [
      {
        payload: "colors-list",
        type: "slot/back"
      }
    ]
  },
  "colors-list.next": {
    commands: [
      {
        payload: "colors-list",
        type: "slot/next"
      }
    ]
  },
  "colors-list.submit": {
    commands: [
      {
        payload: "colors-list",
        type: "slot/submit"
      }
    ]
  },
  "commands.back": {
    commands: [
      {
        payload: "cmds/list",
        type: "slot/back"
      }
    ],
    label: "commands : back"
  },
  "commands.close": {
    commands: [
      {
        payload: {
          direction: "commandId",
          force: !0,
          value: null
        },
        type: "object/setValue"
      }
    ],
    label: "view : close commands"
  },
  "commands.next": {
    commands: [
      {
        payload: "cmds/list",
        type: "slot/next"
      }
    ],
    label: "commands : next"
  },
  "commands.open": {
    commands: [
      {
        payload: {
          direction: "commandId",
          force: !0,
          value: "commands"
        },
        type: "object/setValue"
      }
    ],
    label: "view : open commands"
  },
  "commands.submit": {
    commands: [
      {
        payload: "cmds/list",
        type: "slot/submit"
      }
    ],
    label: "commands : run"
  },
  "configurations.back": {
    commands: [
      {
        payload: "configurations",
        type: "slot/back"
      }
    ],
    label: "settings : back"
  },
  "configurations.next": {
    commands: [
      {
        payload: "configurations",
        type: "slot/next"
      }
    ],
    label: "settings : next"
  },
  "configurations.settings.layout.submit": {
    commands: [
      {
        payload: "settings.layout.tools",
        type: "slot/submit"
      }
    ],
    label: "settings layout : change"
  },
  "configurations.settings.layouts.next": {
    commands: [
      {
        payload: "settings.layout.tools",
        type: "slot/next"
      }
    ],
    label: "settings layout : next"
  },
  "configurations.settings.layouts.previous": {
    commands: [
      {
        payload: "settings.layout.tools",
        type: "slot/back"
      }
    ],
    label: "settings layout : previous"
  },
  "configurations.submit": {
    commands: [
      {
        payload: "configurations",
        type: "slot/submit"
      }
    ],
    label: "settings : submit"
  },
  "defaultCommand.ignore": {
    commands: [],
    private: !0
  },
  "dialog.clickOnButton": {
    commands: [
      {
        payload: "dialog-list",
        type: "slot/submit"
      }
    ],
    label: "Dialog : Click And Submit"
  },
  "dialog.escape": {
    commands: [
      {
        payload: [
          "dialog.cancel"
        ],
        type: "actions/exec"
      }
    ],
    label: "Dialog : Escape"
  },
  "dialog.goToNextButton": {
    commands: [
      {
        payload: "dialog-list",
        type: "slot/next"
      }
    ],
    label: "Dialog : Next Button"
  },
  "dialog.goToPreviousButton": {
    commands: [
      {
        payload: "dialog-list",
        type: "slot/back"
      }
    ],
    label: "Dialog : Previous Button"
  },
  "feedback/add": {
    commands: [
      {
        payload: [
          "feedback/add"
        ],
        type: "actions/exec"
      }
    ],
    label: "help : add new feedback"
  },
  "header.toggle": {
    commands: [
      {
        payload: "visibility/header.boolean",
        type: "settings/toggle"
      }
    ],
    label: "view : toggle header"
  },
  "headerNotifays.toggleExpand": {
    commands: [
      {
        payload: "visibility/headerNotifays.boolean",
        type: "settings/toggle"
      }
    ],
    label: "view : toggle header notifications"
  },
  "input.addLineBellow": {
    commands: [
      {
        payload: [
          "input.addLineBellow"
        ],
        type: "actions/exec"
      }
    ],
    label: "input : add line bellow"
  },
  "input.completeWord": {
    commands: [
      {
        payload: [
          "input.completeWord"
        ],
        type: "actions/exec"
      }
    ],
    label: "input : complete word"
  },
  "input.selectLine": {
    commands: [
      {
        payload: [
          "input.selectLine"
        ],
        type: "actions/exec"
      }
    ],
    label: "input : select line"
  },
  "input.tab": {
    commands: [
      {
        payload: [
          "input.tab"
        ],
        type: "actions/exec"
      }
    ],
    label: "input : tab space"
  },
  "keyboard/update": {
    commands: [
      {
        payload: [
          "keyboard/update"
        ],
        type: "actions/exec"
      }
    ]
  },
  "keyboardShortcuts.focusNextKeyPanding": {
    commands: [
      {
        payload: "keyboardShortcuts",
        type: "slot/next"
      }
    ],
    label: "keyboard shortcuts : focus next"
  },
  "keyboardShortcuts.focusPreviousKeyPanding": {
    commands: [
      {
        payload: "keyboardShortcuts",
        type: "slot/back"
      }
    ],
    label: "keyboard shortcuts : focus previous"
  },
  "keyboardShortcuts.submitCurrentKeyPanding": {
    commands: [
      {
        payload: "keyboardShortcuts",
        type: "slot/submit"
      }
    ],
    label: "keyboard shortcuts : submit current"
  },
  "menu.back": {
    commands: [
      {
        payload: "menu-list",
        type: "slot/back"
      }
    ]
  },
  "menu.escape": {
    commands: [
      {
        payload: {
          direction: "menu.id",
          force: !0,
          value: null
        },
        type: "object/setValue"
      }
    ]
  },
  "menu.next": {
    commands: [
      {
        payload: "menu-list",
        type: "slot/next"
      }
    ]
  },
  "menu.submit": {
    commands: [
      {
        payload: "menu-list",
        type: "slot/submit"
      }
    ]
  },
  "notifays.toggleExpandNotifay": {
    commands: [
      {
        payload: [
          "toggleExpandNotifay",
          null
        ],
        type: "actions/exec"
      }
    ],
    label: "notifications : toggle expand notifications"
  },
  "notification.close": {
    commands: [
      {
        payload: [
          {
            changes: {
              value: !1
            },
            id: "visibility/notifays.boolean"
          }
        ],
        type: "settings/update"
      }
    ],
    label: "view : close notifications"
  },
  "notification.closeAndExpandLess": {
    commands: [
      "notification.close",
      {
        payload: [
          {
            changes: {
              value: !1
            },
            id: "visibility/notifays/notes.boolean"
          }
        ],
        type: "settings/update"
      }
    ],
    label: "view : close notifications and expand less"
  },
  "notification.deleteFocus": {
    commands: [
      {
        payload: [
          "notification.deleteFocus"
        ],
        type: "actions/exec"
      }
    ],
    label: "notifications : delete the focused notification"
  },
  "notification.focusNext": {
    commands: [
      {
        payload: "notification",
        type: "slot/next"
      }
    ],
    label: "notifications : go next"
  },
  "notification.focusPrevious": {
    commands: [
      {
        payload: "notification",
        type: "slot/back"
      }
    ],
    label: "notifications: go back"
  },
  "notification.open": {
    commands: [
      {
        payload: [
          {
            changes: {
              value: !0
            },
            id: "visibility/notifays.boolean"
          }
        ],
        type: "settings/update"
      }
    ],
    label: "notifications : open"
  },
  "notification.openAndExpandMoreAndFocus": {
    commands: [
      "notification.open",
      {
        payload: [
          {
            changes: {
              value: !0
            },
            id: "visibility/notifays/notes.boolean"
          }
        ],
        type: "settings/update"
      },
      {
        payload: [
          "focus",
          "notifications"
        ],
        type: "actions/exec"
      }
    ],
    label: "notifications : open and expand more and focus"
  },
  "notification.submitCurrent": {
    commands: [
      {
        payload: "notification",
        type: "slot/submit"
      }
    ],
    label: "notifications : submit current"
  },
  "notification.toggle": {
    commands: [
      {
        payload: "visibility/notifays.boolean",
        type: "settings/toggle"
      }
    ],
    label: "view : toggle notifications"
  },
  "search.history.clear": {
    commands: [
      {
        payload: [
          "search.history.clear"
        ],
        type: "actions/exec"
      }
    ],
    label: "search : clear history"
  },
  "settings.colors.show": {
    commands: [
      {
        payload: [
          {
            changes: {
              focused: "colors"
            },
            id: "settings"
          }
        ],
        type: "views/update"
      }
    ]
  },
  "settings.focusNext": {
    commands: [
      {
        payload: "settings",
        type: "slot/next"
      }
    ]
  },
  "settings.focusPrevious": {
    commands: [
      {
        payload: "settings",
        type: "slot/back"
      }
    ]
  },
  "settings.icons.back": {
    commands: [
      {
        payload: "icons-list",
        type: "slot/back"
      }
    ]
  },
  "settings.icons.next": {
    commands: [
      {
        payload: "icons-list",
        type: "slot/next"
      }
    ]
  },
  "settings.icons.show": {
    commands: [
      {
        payload: [
          {
            changes: {
              focused: "icons"
            },
            id: "settings"
          }
        ],
        type: "views/update"
      }
    ]
  },
  "settings.icons.submit": {
    commands: [
      {
        payload: "icons-list",
        type: "slot/submit"
      }
    ]
  },
  "settings.keyboardShortcuts.show": {
    commands: [
      {
        payload: [
          {
            changes: {
              focused: "keyboardShortcuts"
            },
            id: "settings"
          }
        ],
        type: "views/update"
      }
    ]
  },
  "settings.tree.expandLess": {
    commands: [
      {
        payload: "setting-tree-layout",
        type: "tree/expandLess"
      }
    ]
  },
  "settings.tree.expandMore": {
    commands: [
      {
        payload: "setting-tree-layout",
        type: "tree/expandMore"
      }
    ]
  },
  "settings.tree.toggleExpand": {
    commands: [
      {
        payload: "setting-tree-layout",
        type: "tree/toggleExpand"
      }
    ]
  },
  "settings.user.show": {
    commands: [
      {
        payload: [
          {
            changes: {
              focused: "user"
            },
            id: "settings"
          }
        ],
        type: "views/update"
      }
    ]
  },
  "show.submit.setting": {
    commands: [
      {
        payload: [
          "showSubmitSetting",
          null
        ],
        type: "actions/exec"
      }
    ]
  },
  "string.cancel": {
    commands: [
      {
        payload: [
          "string.cancel"
        ],
        type: "actions/exec"
      }
    ],
    private: !0
  },
  "string.change": {
    commands: [
      {
        payload: [
          "string.change"
        ],
        type: "actions/exec"
      }
    ],
    private: !0
  },
  "tools.tip.click": {
    commands: [
      {
        payload: [
          "tip.click"
        ],
        type: "actions/exec"
      }
    ]
  },
  "view.leftSide.close": {
    commands: [
      {
        payload: [
          {
            changes: {
              value: !1
            },
            id: "visibility/leftSide.boolean"
          }
        ],
        type: "settings/update"
      }
    ],
    label: "leftSide : close"
  },
  "view.leftSide.open": {
    commands: [
      {
        payload: [
          {
            changes: {
              value: !0
            },
            id: "visibility/leftSide.boolean"
          }
        ],
        type: "settings/update"
      }
    ]
  },
  "view.leftSide.toggle": {
    commands: [
      {
        payload: "visibility/leftSide.boolean",
        type: "settings/toggle"
      }
    ]
  },
  "view.rightSide.close": {
    commands: [
      {
        payload: [
          {
            changes: {
              value: !1
            },
            id: "visibility/rightSide.boolean"
          }
        ],
        type: "settings/update"
      }
    ]
  },
  "view.rightSide.open": {
    commands: [
      {
        payload: [
          {
            changes: {
              value: !0
            },
            id: "visibility/rightSide.boolean"
          }
        ],
        type: "settings/update"
      }
    ]
  },
  "view.rightSide.toggle": {
    commands: [
      {
        payload: "visibility/rightSide.boolean",
        type: "settings/toggle"
      }
    ]
  },
  "view.settings.hide": {
    commands: [
      {
        payload: [
          {
            changes: {
              value: !1
            },
            id: "visibility/configurations.boolean"
          }
        ],
        type: "settings/update"
      }
    ],
    label: "view : hide settings view"
  },
  "view.settings.show": {
    commands: [
      {
        payload: [
          {
            changes: {
              value: !0
            },
            id: "visibility/configurations.boolean"
          }
        ],
        type: "settings/update"
      },
      {
        payload: [
          {
            changes: {
              value: ""
            },
            id: "findConfigurations-local"
          }
        ],
        type: "feilds/update"
      },
      {
        payload: [
          "focus",
          "findConfigurations-local"
        ],
        type: "actions/exec"
      }
    ],
    label: "view : show settings view"
  },
  "view.settings.update.hide": {
    commands: [
      {
        payload: {
          direction: "view.settings",
          force: !0,
          value: null
        },
        type: "object/setValue"
      },
      {
        payload: [
          "focus",
          "findConfigurations-local"
        ],
        type: "actions/exec"
      }
    ],
    label: "view : hide settings update view"
  },
  "window.toggleMode": {
    commands: [
      {
        payload: "window/dark.boolean",
        type: "settings/toggle"
      }
    ],
    label: "window : toggle between (light/dark) mode"
  }
}, zl = "commands";
function ai(e, t = X.getState()) {
  const { [zl]: n } = t, r = [], a = n.entities[e], o = a == null ? void 0 : a.commands;
  return a != null && a.blocked ? [] : (o == null || o.forEach((i) => {
    typeof i == "string" ? r.push(...ai(i)) : typeof i != "number" && r.push(i);
  }), r);
}
function Wl(e, t = X.getState()) {
  return !!(t != null && t.commands.entities[e]);
}
async function Yl(e, t = X.getState()) {
  const n = e.toString();
  qe.inf("start invoke command : ", n), t = t || X.getState();
  const r = ai(e, t), a = new gn();
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    typeof i == "number" ? await a.start(i) : X.dispatch(i);
  }
  qe.succ("end invoking command : ", n);
}
const Vl = {
  id: "commandId",
  name: "commands",
  data: Jh,
  default: (e, t) => {
    if (!t.commandId)
      return {};
    const [n = "", ...r] = t.commandId.split(".");
    return {
      label: `${Tr(n, "camel", "normal")} : ${r.map((o) => Tr(o, void 0, "normal")).join(" ")}`
    };
  }
}, { hooks: Qh, slice: go, entitySelect: Zh, init: Bl } = Le(Vl), V1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commandSelect: Zh,
  commandsHooks: Qh,
  commandsSlice: go,
  execCommand: Yl,
  execList: ai,
  initCommands: Bl,
  initCommandsConfig: Vl,
  isExist: Wl,
  name: zl
}, Symbol.toStringTag, { value: "Module" })), ey = [
  {
    command: "dialog.goToNextButton",
    value: "arrowdown",
    when: "state.object.data.dialog.id"
  },
  {
    command: "dialog.goToNextButton",
    value: "arrowright",
    when: "state.object.data.dialog.id"
  },
  {
    command: "dialog.goToPreviousButton",
    value: "arrowleft",
    when: "state.object.data.dialog.id"
  },
  {
    command: "dialog.goToPreviousButton",
    value: "arrowup",
    when: "state.object.data.dialog.id"
  },
  {
    command: "dialog.escape",
    value: "escape",
    when: "state.object.data.dialog.id"
  },
  {
    command: "dialog.clickOnButton",
    value: "enter",
    when: "state.object.data.dialog.id"
  },
  {
    command: "dialog.clickOnButton",
    value: "space",
    when: "state.object.data.dialog.id"
  },
  {
    command: "settings.colors.show",
    value: "control+shift+c",
    when: "state.views.entities.settings.focused == 'colors'"
  },
  {
    command: "menu.next",
    when: "state.object.data.menu.id",
    value: "arrowdown"
  },
  {
    command: "menu.back",
    when: "state.object.data.menu.id",
    value: "arrowup"
  },
  {
    command: "menu.submit",
    when: "state.object.data.menu.id",
    value: "enter"
  },
  {
    command: "menu.escape",
    when: "state.object.data.menu.id",
    value: "escape"
  },
  {
    value: "tab",
    command: "input.completeWord",
    when: "state.object.data.input.focusedHasProposition",
    type: "up"
  },
  {
    value: "tab",
    command: "defaultCommand.ignore",
    when: "state.object.data.input.focusedHasProposition"
  },
  {
    value: "tab",
    command: "input.tab",
    when: "state.object.data.input.supportTab"
  },
  {
    value: "control+l",
    command: "input.selectLine",
    when: "focused"
  },
  {
    value: "shift+alt+arrowdown",
    command: "input.addLineBellow",
    when: "focused"
  },
  {
    command: "string.change",
    when: "focused && state.feilds.ids.includes(focused + ':input')",
    value: "enter"
  },
  {
    command: "string.cancel",
    when: "focused && state.feilds.ids.includes(focused + ':input')",
    value: "escape"
  },
  {
    when: "focused == 'feedback' && state.feilds.entities['feedback']?.value",
    command: "feedback/add",
    value: "control+enter",
    private: !0
  },
  {
    command: "commands.next",
    when: "focused == 'cmds/list' || focused == 'findCommand'",
    value: "arrowdown"
  },
  {
    command: "commands.back",
    when: "focused == 'cmds/list' || focused == 'findCommand'",
    value: "arrowup"
  },
  {
    command: "commands.submit",
    when: "focused == 'cmds/list' || focused == 'findCommand'",
    value: "enter"
  },
  {
    repeation: !1,
    command: "activity.focus",
    value: "alt",
    when: "focused != 'activity'"
  },
  {
    command: "activity.views.back",
    value: "arrowup",
    when: "focused == 'activity'"
  },
  {
    command: "activity.views.back",
    value: "arrowleft",
    when: "focused == 'activity'"
  },
  {
    command: "activity.views.next",
    value: "arrowdown",
    when: "focused == 'activity'"
  },
  {
    command: "activity.views.next",
    value: "arrowright",
    when: "focused == 'activity'"
  },
  {
    repeation: !1,
    command: "activity.views.submit",
    value: "enter",
    when: "focused == 'activity'"
  },
  {
    command: "commands.open",
    when: "focused != 'findCommand' || !state.object.data.commandId",
    value: "control+shift+p"
  },
  {
    repeation: !1,
    command: "notification.openAndExpandMoreAndFocus",
    when: "focused != 'notifications'",
    value: "shift+alt+n"
  },
  {
    command: "view.activity.toggle",
    value: "control+alt+a"
  },
  {
    command: "view.leftSide.toggle",
    value: "control+b"
  },
  {
    command: "view.rightSide.toggle",
    value: "control+alt+b"
  },
  {
    command: "view.settings.show",
    when: "focused != 'findConfigurations-local' || !state.settings.entities['visibility/configurations.boolean']?.value",
    value: "control+,"
  },
  {
    repeation: !1,
    command: "settings.keyboardShortcuts.show",
    when: "state.settings.entities['visibility/configurations.boolean']?.value",
    value: "control+k"
  },
  {
    repeation: !1,
    command: "settings.user.show",
    when: "state.settings.entities['visibility/configurations.boolean']?.value",
    value: "control+u"
  },
  {
    repeation: !1,
    command: "settings.icons.show",
    when: "state.settings.entities['visibility/configurations.boolean']?.value",
    value: "control+i"
  },
  {
    command: "layout.zoom.in",
    value: "control+="
  },
  {
    command: "layout.zoom.in",
    value: "control+plus"
  },
  {
    command: "layout.zoom.out",
    value: "control+-"
  },
  {
    command: "layout.zoom.reset",
    value: "control+0"
  },
  {
    repeation: !1,
    command: "keyboardShortcuts.submitCurrentKeyPanding",
    value: "enter",
    when: "['findConfigurations-local','keyboardShortcuts'].includes(focused) && state.views.entities.settings.focused == 'keyboardShortcuts'"
  },
  {
    command: "keyboard/update",
    value: "f2",
    when: "['findConfigurations-local','keyboardShortcuts'].includes(focused) && state.views.entities.settings.focused == 'keyboardShortcuts'"
  },
  {
    command: "keyboardShortcuts.focusNextKeyPanding",
    value: "arrowdown",
    when: "['findConfigurations-local','keyboardShortcuts'].includes(focused) && state.views.entities.settings.focused == 'keyboardShortcuts'"
  },
  {
    command: "keyboardShortcuts.focusPreviousKeyPanding",
    value: "arrowup",
    when: "['findConfigurations-local','keyboardShortcuts'].includes(focused) && state.views.entities.settings.focused == 'keyboardShortcuts'"
  },
  {
    value: "arrowdown",
    command: "colors-list.next",
    when: "['findConfigurations-local','color-list'].includes(focused) && state.views.entities.settings.focused == 'colors'"
  },
  {
    value: "arrowup",
    command: "colors-list.back",
    when: "['findConfigurations-local','color-list'].includes(focused) && state.views.entities.settings.focused == 'colors'"
  },
  {
    value: "enter",
    command: "colors-list.submit",
    when: "['findConfigurations-local','color-list'].includes(focused) && state.views.entities.settings.focused == 'colors'"
  },
  {
    command: "savePanel.open",
    value: "control+s",
    when: "focused != 'savePanelView'"
  },
  {
    command: "savePanel.next",
    value: "arrowdown",
    when: "focused == 'savePanelView'"
  },
  {
    command: "savePanel.back",
    value: "arrowup",
    when: "focused == 'savePanelView'"
  },
  {
    command: "savePanel.close",
    value: "backspace",
    when: "state.settings.entities['visibility/savePanel.boolean']?.value"
  },
  {
    command: "savePanel.toggleCheckedSubmit",
    value: "space",
    when: "focused == 'savePanelView'"
  },
  {
    command: "savePanel.toggleCheckedSubmit",
    value: "enter",
    when: "focused == 'savePanelView'"
  },
  {
    command: "configurations.next",
    value: "arrowdown",
    when: "focused == 'findConfigurations-local' && state.views.entities.settings.focused == 'user'"
  },
  {
    command: "configurations.back",
    value: "arrowup",
    when: "focused == 'findConfigurations-local' && state.views.entities.settings.focused == 'user'"
  },
  {
    repeation: !1,
    command: "configurations.submit",
    value: "enter",
    when: "focused == 'findConfigurations-local' && state.views.entities.settings.focused == 'user'"
  },
  {
    command: "setup.nextPage",
    when: "!state.object.data.setup.user.inited && (!focused || ['setup-controller','setup.btn.previous','setup.btn.next'].includes(focused))",
    value: "arrowright"
  },
  {
    command: "setup.previousPage",
    when: "!state.object.data.setup.user.inited && (!focused || ['setup-controller','setup.btn.previous','setup.btn.next'].includes(focused))",
    value: "arrowleft"
  },
  {
    command: "savePanel.save",
    when: "state.settings.entities['visibility/savePanel.boolean']?.value",
    value: "control+enter"
  },
  {
    command: "notification.submitCurrent",
    when: "focused == 'notifications'",
    value: "enter"
  },
  {
    command: "notification.focusNext",
    when: "focused == 'notifications'",
    value: "arrowdown"
  },
  {
    command: "notification.focusPrevious",
    when: "focused == 'notifications'",
    value: "arrowup"
  },
  {
    command: "notification.deleteFocus",
    when: "focused == 'notifications'",
    value: "delete"
  },
  {
    command: "notifays.toggleExpandNotifay",
    when: "focused == 'notifications'",
    value: "space"
  },
  {
    command: "enum/next",
    value: "arrowdown",
    when: "state.object.data.enum.focused"
  },
  {
    command: "enum/next",
    value: "arrowright",
    when: "state.object.data.enum.focused"
  },
  {
    command: "enum/back",
    value: "arrowleft",
    when: "state.object.data.enum.focused"
  },
  {
    command: "enum/back",
    value: "arrowup",
    when: "state.object.data.enum.focused"
  },
  {
    repeation: !1,
    command: "enum/submit",
    value: "space",
    when: "state.object.data.enum.focused"
  },
  {
    repeation: !1,
    command: "enum/submit",
    value: "enter",
    when: "state.object.data.enum.focused"
  },
  {
    repeation: !1,
    command: "show.submit.setting",
    value: "f2",
    when: "focused == 'findConfigurations-local'"
  },
  {
    command: "commands.close",
    when: "state.object.data.commandId",
    value: "escape"
  },
  {
    repeation: !1,
    command: "activity.escape",
    value: "escape",
    when: "focused == 'activity'"
  },
  {
    command: "savePanel.close",
    value: "escape",
    repeation: !1,
    when: "state.settings.entities['visibility/savePanel.boolean']?.value"
  },
  {
    command: "userProfile.hide",
    value: "escape",
    repeation: !1,
    when: "state.settings.entities['visibility/profile.boolean']?.value"
  },
  {
    command: "view.settings.update.hide",
    when: "state.object.data.view.settings",
    value: "escape"
  },
  {
    command: "view.settings.hide",
    when: "state.settings.entities['visibility/configurations.boolean']?.value",
    value: "escape"
  },
  {
    repeation: !1,
    command: "creditBox.close",
    when: "state.object.data.visibility.credit",
    value: "escape"
  },
  {
    repeation: !1,
    command: "notification.closeAndExpandLess",
    when: "state.settings.entities['visibility/notifays.boolean']?.value",
    value: "escape"
  },
  {
    command: "configurations.settings.layouts.next",
    when: "focused == 'settings.layouts'",
    value: "arrowright"
  },
  {
    command: "configurations.settings.layouts.previous",
    when: "focused == 'settings.layouts'",
    value: "arrowleft"
  },
  {
    command: "configurations.settings.layout.submit",
    when: "focused == 'settings.layouts'",
    value: "enter"
  },
  {
    when: "focused == 'settings.tree.view'",
    value: "space",
    command: "settings.tree.toggleExpand"
  },
  {
    when: "focused == 'settings.tree.view'",
    value: "arrowright",
    command: "settings.tree.expandMore"
  },
  {
    when: "focused == 'settings.tree.view'",
    value: "arrowleft",
    command: "settings.tree.expandLess"
  },
  {
    command: "header.toggle",
    value: "control+h"
  },
  {
    command: "settings.icons.next",
    when: "['findConfigurations-local','icons-list'].includes(focused) && state.views.entities.settings.focused == 'icons'",
    value: "arrowdown"
  },
  {
    command: "settings.icons.back",
    when: "['findConfigurations-local','icons-list'].includes(focused) && state.views.entities.settings.focused == 'icons'",
    value: "arrowup"
  },
  {
    command: "settings.icons.submit",
    when: "['findConfigurations-local','icons-list'].includes(focused) && state.views.entities.settings.focused == 'icons'",
    value: "enter"
  },
  {
    command: "camera.take",
    value: "enter",
    when: "state.object.data?.camera?.id"
  },
  {
    command: "window.toggleMode",
    value: "control+d"
  }
], ty = {
  name: "keys",
  id: "keyId",
  data: Object.entries(ey).map(([e, t]) => ({
    keyId: e,
    ...t
  })),
  default: () => ({
    repeation: !0,
    type: "down",
    only: !0,
    preventDefault: !0,
    keyId: `key_${De()}`
  })
}, { init: Ul, hooks: Qn, slice: ho } = Le(ty), Tn = "_" + De().replaceAll(/[^0-9A-Za-z$_]+/gi, "_");
function Hl(e) {
  return Function(`
    return ({ state , focused })=> {
      ${Tn}_window = window;
      window = null;
      let ${Tn} = ${e};
      window = ${Tn}_window;
      return ${Tn}
    }
  `)();
}
function Gl() {
  Ul();
  const e = Qn.getAll(), t = Zr("commands.isBlocked"), n = k.useMemo(() => t ? [] : e.filter(({ value: r, command: a }) => r && a).map((r) => {
    const { value: a = "", when: o, repeation: i = !0, type: s = "down", only: c = !0, preventDefault: f = !0 } = r, l = new ft(a);
    return {
      fn: async (h) => {
        if (!i && h.repeat || !l.test(h))
          return;
        const u = X.getState();
        if (o) {
          const g = Va(), p = Hl(o);
          try {
            if (!p({ state: u, focused: g }))
              return;
          } catch {
            return;
          }
        }
        c && h.stopImmediatePropagation(), f && h.preventDefault(), qe.inf(`KEYID       = ${r.keyId}`), qe.inf(`RUN         = ${r.command || "no command run"}`), qe.inf(`COMB        = (${r.value})`), qe.inf(`WHEN        = ${r.when || "no provide"}`), r.command && Wl(r.command, u) ? qe.succ("EXISTS") : qe.warn("COMMAND NOT FOUND"), Yl(r.command, u);
      },
      type: s
    };
  }), [e, t]);
  Gm(
    () => (n.forEach(({ fn: r, type: a }) => {
      document.addEventListener(`key${a}`, r);
    }), () => {
      n.forEach(({ fn: r, type: a }) => {
        document.removeEventListener(`key${a}`, r);
      });
    }),
    [n],
    1e3
  );
}
function ny(e) {
  const t = Qn.getAll();
  return k.useMemo(() => $n.join({ commandId: e }, t, "commandId->command"), [e, t]);
}
function oi() {
  const e = Qn.getAll();
  return k.useMemo(() => e.filter(({ value: t }) => t), [e]);
}
function ry(e) {
  const t = oi();
  return k.useMemo(() => $n.join({ actionName: e }, t, "actionName->action"), [t]);
}
const B1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getKeyOf: ny,
  getKeys: oi,
  init: Ul,
  initKeys: Gl,
  keyHooks: Qn,
  keySlice: ho,
  shortcutOf: ry,
  test: Hl,
  windowId: Tn
}, Symbol.toStringTag, { value: "Module" })), ay = "keyboard", oy = {
  Shift: !1,
  Alt: !1,
  Control: !1,
  SymbolLock: !1,
  AltGraph: !1,
  CapsLock: !1,
  Fn: !1,
  FnLock: !1,
  Hyper: !1,
  Meta: !1,
  NumLock: !1,
  Super: !1,
  ScrollLock: !1,
  Symbol: !1,
  Key: void 0
}, Es = Jr({
  name: ay,
  initialState: oy,
  reducers: {
    // actions
    setModifier(e, { payload: t }) {
      try {
        e[t.modifierName] = t.value;
      } catch {
      }
    }
  }
}), iy = {
  autoCompleteInput: {
    default: "#888A"
  },
  "bg.selection": {
    dark: "#fff",
    light: "#000"
  },
  "black.opacity": {
    dark: "#0006",
    light: "#0003"
  },
  borders: {
    dark: "#333",
    light: "#bebebe"
  },
  "checkbox.background": {
    default: "#8884"
  },
  "checkbox.false": {
    default: "#F33"
  },
  "checkbox.true": {
    default: "#393"
  },
  error: {
    default: "#F33"
  },
  "error.border": {
    default: "#733"
  },
  "error.content": {
    default: "white"
  },
  "error.text": {
    default: "#F33"
  },
  "facebook-icon": {
    default: "#014DE4"
  },
  "feild.background": {
    default: "rgba(160 160 160 / 0.2)"
  },
  "focus.text": {
    default: "#F33"
  },
  "google-icon": {
    default: "#E53"
  },
  "gray.opacity": {
    default: "#8884"
  },
  "gray.opacity.2": {
    default: "#8887"
  },
  "gray.opacity.toLight": {
    default: "#eee4"
  },
  htmlContentHover: {
    default: "#27F5"
  },
  "info.text": {
    default: "#37F"
  },
  locationIconSetup: {
    default: "yellow"
  },
  "log.error.color": {
    default: "#F33"
  },
  "log.info.color": {
    default: "#27F"
  },
  "log.secuess.color": {
    default: "#393"
  },
  "log.warning.color": {
    default: "rgb(227 138 32)"
  },
  "microsoft-icon": {
    default: "#F25022"
  },
  "notifay.error": {
    default: "#e61a1a"
  },
  "notifay.info": {
    default: "#2e7aec"
  },
  "notifay.success": {
    default: "#33dd24"
  },
  "notifay.warning": {
    default: "#e7a428"
  },
  primary: {
    dark: "#0078d4",
    light: "#46A"
  },
  "primary.background": {
    dark: "#111",
    light: "#ececec"
  },
  "primary.content": {
    dark: "#fff",
    light: "#fff"
  },
  "primary.hover.background": {
    dark: "#222",
    light: "#e1e1e1"
  },
  "qrCode.detection.secuess": {
    dark: "#0F4",
    light: "#0A3"
  },
  "qrCode.detection.secuess.content": {
    default: "white"
  },
  secondry: {
    dark: "#043853",
    light: "#0d8c9c"
  },
  "secondry.background": {
    dark: "#171717",
    light: "#e1e1e1"
  },
  "secondry.content": {
    default: "#fff"
  },
  selectedTextBackgroundBlured: {
    default: "#8885"
  },
  selectedTextBackgroundFocused: {
    default: "#26F6"
  },
  selectedTextColorBlur: {
    default: "#222"
  },
  selectedTextColorFocused: {
    default: "#fff"
  },
  "shadow.background.from": {
    default: "transparent"
  },
  "shadow.background.to": {
    dark: "#000",
    light: "#999"
  },
  "shadow.color": {
    dark: "#0008",
    light: "#4444"
  },
  "starts.color": {
    dark: "#FA0",
    light: "#E90"
  },
  "status.content": {
    default: "white"
  },
  "submit.background": {
    default: "#9994"
  },
  "success.text": {
    default: "#14B85B"
  },
  "text.color": {
    dark: "#ccc",
    light: "#333"
  },
  "text.selection": {
    dark: "#000",
    light: "#fff"
  },
  "toast.background": {
    dark: "#333",
    light: "#eee"
  },
  transparent: {
    default: "transparent"
  },
  userIconSetup: {
    default: "#27C"
  },
  "warning.text": {
    default: "rgb(227 138 32)"
  },
  wifiIconSetup: {
    default: "#2C6F"
  },
  "window.inWindows.close": {
    default: "red"
  }
}, sy = {
  id: "colorId",
  name: "color",
  data: iy
}, { hooks: nn, slice: yo, init: Kl, select: cy, entity: ly, entitySelect: uy } = Le(sy);
function oe() {
  const e = nn.getEntity(), t = mt("window/dark.boolean");
  return k.useCallback(
    (...n) => {
      const r = {}, a = {};
      if (t == null)
        return a;
      n.forEach((o) => {
        if (o) {
          if (typeof o == "string") {
            r.backgroundColor = o;
            return;
          }
          Object.entries(o).forEach(([i, s]) => {
            if (typeof s == "function") {
              r[i] = s;
              return;
            }
            r[i] = s;
          });
        }
      });
      for (const o in r) {
        const i = r[o];
        if (typeof i == "function")
          a[o] = i(e, t);
        else if (typeof i == "string") {
          const s = e[i];
          s && (a[o] = Ct(t, s));
        }
      }
      return a;
    },
    [t, e]
  );
}
function ql(e, ...t) {
  return (n, r) => `linear-gradient(${e} , ${t.filter((a) => n[a]).map((a) => {
    const o = n[a];
    return Ct(r, o);
  }).join(" , ")})`;
}
function Ct(e, t) {
  return e ? t.dark || t.default : t.light || t.default;
}
function pt(e = []) {
  return (t, n) => e.filter((r) => t[r.colorId]).map(({ colorId: r, x: a = 0, y: o = 0, blur: i = 3, size: s = 1, isInset: c = !1 }) => {
    const f = t[r];
    return `${a}px ${o}px ${i}px ${s}px ${Ct(n, f)} ${c ? "inset" : ""}`;
  }).join(" , ");
}
const U1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  colorEntity: ly,
  colorHooks: nn,
  colorSelectors: uy,
  colorSlice: yo,
  getColor: Ct,
  handelGradientColor: ql,
  handelShadowColor: pt,
  initColors: Kl,
  selectColors: cy,
  useColorMerge: oe
}, Symbol.toStringTag, { value: "Module" })), fy = {}, dy = {
  id: "linkId",
  name: "cahser",
  data: fy,
  default() {
    return {
      status: "idle"
    };
  }
}, { init: Xl, hooks: my, slice: vo } = Le(dy), H1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cashHook: my,
  cashSlice: vo,
  initCashing: Xl
}, Symbol.toStringTag, { value: "Module" })), bo = (e, t, n) => {
  const r = () => {
    const o = X.getState(), { value: i } = qn(o, e);
    (typeof t == "function" ? t(i) : i == t) && (a(), n == null || n(o));
  }, a = X.subscribe(r);
  return a;
}, py = (e, t, n) => {
  const r = () => {
    const a = X.getState(), { value: o, isValide: i } = qn(a, e);
    if (!i) {
      qe.warn("Invalid State Dir", e);
      return;
    }
    (typeof t == "function" ? t(o) : o == t) && (n == null || n(a));
  };
  return X.subscribe(r);
}, Mn = {
  name: "actions",
  id: "actionId",
  data: {},
  default() {
    return {
      status: "ready",
      args: null
    };
  },
  actions: {
    exec(e, { payload: t }) {
      const [n, r] = t, a = e.entities[n];
      a && (a.args = r, a.status = "idle");
    }
  }
}, { entity: gy, slice: wo, hooks: Qe, entitySelect: hy } = Le(Mn);
function Jl(e) {
  const t = Qe.getOne(e);
  k.useEffect(() => {
    t || Qe.upsert([
      {
        actionId: e,
        status: "ready",
        args: null
      }
    ]);
  }, [t]);
}
function We(e, t, n = [], r = () => {
}) {
  k.useEffect(() => () => {
    Qe.remove([e]);
  }, []), Jl(e);
  const a = Qe.getOne(e);
  return Ar(async () => {
    if (!a)
      return;
    const { status: o } = a;
    if (o == "idle") {
      const { args: i } = a;
      Qe.setOneFeild(e, "status", "loading");
      try {
        let s = null, c = null;
        s = t(i), s instanceof Promise ? c = await s : c = s, Qe.setOneFeild(e, "output", c), Qe.setOneFeild(e, "status", "success"), c && r(c);
      } catch {
        Qe.setOneFeild(e, "output", null), Qe.setOneFeild(e, "status", "error");
      }
      Qe.setOneFeild(e, "args", null);
    }
  }, [a, ...n]), a;
}
function at(e, t) {
  return new Promise((n, r) => {
    X.dispatch({ type: "actions/exec", payload: [e, t] });
    const a = bo(`${Mn.name}.entities.` + e + ".status", "success", (i) => {
      o(), n({
        output: i[Mn.name].entities[e].output,
        state: i
      });
    }), o = bo(`${Mn.name}.entities.` + e + ".status", "error", (i) => {
      a(), r(i);
    });
  });
}
const G1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  actionEntity: gy,
  actionEntitySelect: hy,
  actionHooks: Qe,
  actionSlice: wo,
  execAction: at,
  initAction: Jl,
  initActionConfig: Mn,
  useAction: We
}, Symbol.toStringTag, { value: "Module" })), X = Xp({
  reducer: {
    // normal reducers
    [Es.name]: Es.reducer,
    [so.name]: so.reducer,
    [mn.name]: mn.reducer,
    // system space
    [go.name]: go.reducer,
    [ho.name]: ho.reducer,
    [uo.name]: uo.reducer,
    [to.name]: to.reducer,
    [lo.name]: lo.reducer,
    [oo.name]: oo.reducer,
    [co.name]: co.reducer,
    [io.name]: io.reducer,
    [wo.name]: wo.reducer,
    [yo.name]: yo.reducer,
    [ro.name]: ro.reducer,
    [mo.name]: mo.reducer,
    [po.name]: po.reducer,
    [vo.name]: vo.reducer,
    [ao.name]: ao.reducer
    /* main database */
  }
}), cn = class cn {
  constructor(t, n = null) {
    if (this.name = t, this.parent = n, this.name.includes(".") || cn.allTemps[this.name])
      throw `temp name ${this.name} exists before`;
    cn.allTemps[this.name] = this;
  }
  getTemp(t) {
    return Zr([this.name, t].join("."));
  }
  getTempFromStore(t, n) {
    return Mh([this.name, t].join("."), n);
  }
  setTemp(t, n) {
    Ze([this.name, t].join("."), n);
  }
  useTemp(t) {
    return Nh([this.name, t].join("."));
  }
  get childsTemps() {
    return Object.values(cn.allTemps).filter(({ parent: t }) => t == this);
  }
};
or(cn, "allTemps", {});
let Pe = cn;
new Pe("path");
new Pe("window");
new Pe("view");
new Pe("toast");
const Ss = new Pe("dialog");
new Pe("loading");
const ks = new Pe("progress");
new Pe("password");
const Qt = new Pe("menu");
new Pe("news");
new Pe("visibility");
new Pe("ipinfo");
new Pe("submited");
const On = new Pe("camera"), yy = (e) => {
  const t = De();
  return new Promise((n, r) => {
    var i;
    if (!((i = e.buttons) != null && i.length)) {
      r("Need Minimum One Button");
      return;
    }
    Ss.setTemp("id", t), Ss.setTemp("params", e);
    const a = async () => {
      var l, m, h;
      const { slot: s, object: c } = X.getState(), f = (l = s.entities["dialog-list"]) == null ? void 0 : l.submited;
      typeof f == "number" && (n({
        response: f,
        checkboxChecked: ((h = (m = c.data) == null ? void 0 : m.dialog) == null ? void 0 : h.checked) || !1
      }), o(), Ze("dialog.id", null));
    }, o = X.subscribe(a);
  });
};
function vy(e) {
  return new Promise(async (t, n) => {
    var i, s;
    if ((s = (i = X.getState().object.data) == null ? void 0 : i.camera) == null ? void 0 : s.id) {
      n("Camera Is Work Now");
      return;
    }
    const a = De();
    On.setTemp("id", a), On.setTemp("type", e), On.setTemp("result", null), On.setTemp("error", null);
    const o = py(
      "object.data.camera",
      (c) => !!(c != null && c.result || c != null && c.error),
      async ({ object: c }) => {
        var l;
        const f = (l = c.data) == null ? void 0 : l.camera;
        (f == null ? void 0 : f.id) == a && (f.result ? t(f.result) : n(f.error), ["id", "type", "result"].forEach((m) => {
          On.setTemp(m, null);
        }), o());
      }
    );
  });
}
const Ql = ["jpg", "jpeg", "png", "gif", "bmp", "svg", "webp", "tiff", "ico", "jfif"];
function Er(e) {
  return yy(e);
}
async function by() {
  const { screenX: e, screenY: t, innerWidth: n, innerHeight: r } = window;
  return {
    x: e,
    y: t,
    width: n,
    height: r
  };
}
async function wy() {
  return await fetch("https://api.ipify.org?format=json").then((e) => e.json()).then((e) => e.ip);
}
const xy = (e) => {
  var r;
  const t = (r = e.match(/\.[a-z]+$/gi)) == null ? void 0 : r[0].slice(1).toLowerCase();
  let n = {};
  return Ql.forEach((a) => {
    n[a] = a;
  }), n = {
    ...n,
    jpg: "jpeg",
    svg: "svg+xml"
  }, t ? n[t] : "png";
}, Ey = async ({ to: e, subject: t = "", body: n = "" }) => {
  const r = document.createElement("a");
  r.href = `mailto:${e}?subject=${encodeURIComponent(t)}&body=${encodeURIComponent(n)}`, r.click();
}, Sy = ({ tel: e }) => {
  const t = document.createElement("a");
  t.href = `tel:${e}`, t.click();
}, ky = ({ to: e, body: t = "" }) => {
  const n = document.createElement("a");
  n.href = `sms:${e}?body=${encodeURIComponent(t)}`, n.click();
}, Oy = (e) => {
}, _y = () => {
}, Cy = (e) => {
}, Ty = () => {
}, Ay = (e) => {
}, xo = /* @__PURE__ */ new Map(), Ny = (e, t) => {
  const n = async () => {
    const r = t();
    r instanceof Promise && await r;
  };
  xo.set(e, n), document.addEventListener(e, n);
}, My = (e) => {
  const t = xo.get(e);
  t && (document.removeEventListener(e, t), xo.delete(e));
}, Ry = async ({ options: e, value: t }) => {
  ks.setTemp("main", t), ks.setTemp("main-mode", e == null ? void 0 : e.mode);
}, Py = (e) => {
  Qt.setTemp("position", [e.x, e.y]);
  const t = De();
  Qt.setTemp("id", t), Qt.setTemp(
    "list",
    e.menu.map(({ click: n, ...r }) => r)
  ), bo(
    "object.data.menu.result",
    (n) => typeof n == "number",
    (n) => {
      var a, o;
      const r = (a = n.object.data) == null ? void 0 : a.menu;
      if (typeof r == "object" && typeof r.result == "number" && r.id == t) {
        Qt.setTemp("id", null), Qt.setTemp("list", []), Qt.setTemp("result", null);
        const i = e.menu[r.result];
        (o = i.click) == null || o.call(i);
      }
    }
  );
}, Iy = async () => {
}, K1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addToRecentDocuments: Oy,
  clearRecentDocuments: _y,
  getGoogleAuthCode: Ay,
  getImageFileType: xy,
  getJumpListSettings: Ty,
  getLocalAdressIp: wy,
  getWindowData: by,
  imageExtensions: Ql,
  off: My,
  on: Ny,
  openDialog: Er,
  openMenu: Py,
  openPath: Iy,
  sendEmail: Ey,
  sendSms: ky,
  sendTel: Sy,
  setJumpList: Cy,
  setProgress: Ry
}, Symbol.toStringTag, { value: "Module" }));
function jy({ className: e, selectOnFocus: t, onFocus: n, onBlur: r, onValueChange: a, onChange: o, style: i, ...s }, c) {
  const f = oe(), [l, m] = k.useState(!1);
  return /* @__PURE__ */ S(
    "input",
    {
      ...s,
      ref: c,
      onFocus: (h) => {
        !l && m(!0), t && h.currentTarget.select(), n == null || n(h);
      },
      onBlur: (h) => {
        l && m(!1), r == null || r(h);
      },
      className: V(
        `
          p-2
          border
          border-solid
          border-transparent
          font-[inherit]
          resize-none
          whitespace-nowrap
          rounded-sm
          w-full
      `,
        e
      ),
      style: {
        ...f(
          {
            borderColor: "borders",
            backgroundColor: "feild.background"
          },
          l && { borderColor: "primary" }
        ),
        ...i
      },
      onChange: (h) => {
        a == null || a(h.currentTarget.value, h.currentTarget.valueAsNumber), o == null || o(h);
      }
    }
  );
}
const Zl = k.forwardRef(jy);
function Os(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Os(Object(n), !0).forEach(function(r) {
      Ae(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Os(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Lr(e) {
  "@babel/helpers - typeof";
  return Lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lr(e);
}
function Dy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _s(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ly(e, t, n) {
  return t && _s(e.prototype, t), n && _s(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Ae(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ii(e, t) {
  return Fy(e) || Wy(e, t) || eu(e, t) || Vy();
}
function Zn(e) {
  return $y(e) || zy(e) || eu(e) || Yy();
}
function $y(e) {
  if (Array.isArray(e))
    return Eo(e);
}
function Fy(e) {
  if (Array.isArray(e))
    return e;
}
function zy(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Wy(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, o = !1, i, s;
    try {
      for (n = n.call(e); !(a = (i = n.next()).done) && (r.push(i.value), !(t && r.length === t)); a = !0)
        ;
    } catch (c) {
      o = !0, s = c;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return r;
  }
}
function eu(e, t) {
  if (e) {
    if (typeof e == "string")
      return Eo(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Eo(e, t);
  }
}
function Eo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Yy() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Cs = function() {
}, si = {}, tu = {}, nu = null, ru = {
  mark: Cs,
  measure: Cs
};
try {
  typeof window < "u" && (si = window), typeof document < "u" && (tu = document), typeof MutationObserver < "u" && (nu = MutationObserver), typeof performance < "u" && (ru = performance);
} catch {
}
var By = si.navigator || {}, Ts = By.userAgent, As = Ts === void 0 ? "" : Ts, Tt = si, we = tu, Ns = nu, ur = ru;
Tt.document;
var bt = !!we.documentElement && !!we.head && typeof we.addEventListener == "function" && typeof we.createElement == "function", au = ~As.indexOf("MSIE") || ~As.indexOf("Trident/"), fr, dr, mr, pr, gr, gt = "___FONT_AWESOME___", So = 16, ou = "fa", iu = "svg-inline--fa", Yt = "data-fa-i2svg", ko = "data-fa-pseudo-element", Uy = "data-fa-pseudo-element-pending", ci = "data-prefix", li = "data-icon", Ms = "fontawesome-i2svg", Hy = "async", Gy = ["HTML", "HEAD", "STYLE", "SCRIPT"], su = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), be = "classic", ke = "sharp", ui = [be, ke];
function er(e) {
  return new Proxy(e, {
    get: function(n, r) {
      return r in n ? n[r] : n[be];
    }
  });
}
var zn = er((fr = {}, Ae(fr, be, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  fakd: "kit",
  "fa-kit": "kit",
  "fa-kit-duotone": "kit"
}), Ae(fr, ke, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), fr)), Wn = er((dr = {}, Ae(dr, be, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), Ae(dr, ke, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), dr)), Yn = er((mr = {}, Ae(mr, be, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), Ae(mr, ke, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), mr)), Ky = er((pr = {}, Ae(pr, be, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), Ae(pr, ke, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), pr)), qy = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, cu = "fa-layers-text", Xy = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, Jy = er((gr = {}, Ae(gr, be, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), Ae(gr, ke, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), gr)), lu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Qy = lu.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Zy = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Dt = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Vn = /* @__PURE__ */ new Set();
Object.keys(Wn[be]).map(Vn.add.bind(Vn));
Object.keys(Wn[ke]).map(Vn.add.bind(Vn));
var ev = [].concat(ui, Zn(Vn), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Dt.GROUP, Dt.SWAP_OPACITY, Dt.PRIMARY, Dt.SECONDARY]).concat(lu.map(function(e) {
  return "".concat(e, "x");
})).concat(Qy.map(function(e) {
  return "w-".concat(e);
})), Rn = Tt.FontAwesomeConfig || {};
function tv(e) {
  var t = we.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function nv(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (we && typeof we.querySelector == "function") {
  var rv = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  rv.forEach(function(e) {
    var t = ii(e, 2), n = t[0], r = t[1], a = nv(tv(n));
    a != null && (Rn[r] = a);
  });
}
var uu = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: ou,
  replacementClass: iu,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
Rn.familyPrefix && (Rn.cssPrefix = Rn.familyPrefix);
var pn = j(j({}, uu), Rn);
pn.autoReplaceSvg || (pn.observeMutations = !1);
var z = {};
Object.keys(uu).forEach(function(e) {
  Object.defineProperty(z, e, {
    enumerable: !0,
    set: function(n) {
      pn[e] = n, Pn.forEach(function(r) {
        return r(z);
      });
    },
    get: function() {
      return pn[e];
    }
  });
});
Object.defineProperty(z, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    pn.cssPrefix = t, Pn.forEach(function(n) {
      return n(z);
    });
  },
  get: function() {
    return pn.cssPrefix;
  }
});
Tt.FontAwesomeConfig = z;
var Pn = [];
function av(e) {
  return Pn.push(e), function() {
    Pn.splice(Pn.indexOf(e), 1);
  };
}
var St = So, ot = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function ov(e) {
  if (!(!e || !bt)) {
    var t = we.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var n = we.head.childNodes, r = null, a = n.length - 1; a > -1; a--) {
      var o = n[a], i = (o.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(i) > -1 && (r = o);
    }
    return we.head.insertBefore(t, r), e;
  }
}
var iv = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Bn() {
  for (var e = 12, t = ""; e-- > 0; )
    t += iv[Math.random() * 62 | 0];
  return t;
}
function hn(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function fi(e) {
  return e.classList ? hn(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function fu(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function sv(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, '="').concat(fu(e[n]), '" ');
  }, "").trim();
}
function ea(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function di(e) {
  return e.size !== ot.size || e.x !== ot.x || e.y !== ot.y || e.rotate !== ot.rotate || e.flipX || e.flipY;
}
function cv(e) {
  var t = e.transform, n = e.containerWidth, r = e.iconWidth, a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), i = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), c = {
    transform: "".concat(o, " ").concat(i, " ").concat(s)
  }, f = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: c,
    path: f
  };
}
function lv(e) {
  var t = e.transform, n = e.width, r = n === void 0 ? So : n, a = e.height, o = a === void 0 ? So : a, i = e.startCentered, s = i === void 0 ? !1 : i, c = "";
  return s && au ? c += "translate(".concat(t.x / St - r / 2, "em, ").concat(t.y / St - o / 2, "em) ") : s ? c += "translate(calc(-50% + ".concat(t.x / St, "em), calc(-50% + ").concat(t.y / St, "em)) ") : c += "translate(".concat(t.x / St, "em, ").concat(t.y / St, "em) "), c += "scale(".concat(t.size / St * (t.flipX ? -1 : 1), ", ").concat(t.size / St * (t.flipY ? -1 : 1), ") "), c += "rotate(".concat(t.rotate, "deg) "), c;
}
var uv = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function du() {
  var e = ou, t = iu, n = z.cssPrefix, r = z.replacementClass, a = uv;
  if (n !== e || r !== t) {
    var o = new RegExp("\\.".concat(e, "\\-"), "g"), i = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    a = a.replace(o, ".".concat(n, "-")).replace(i, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return a;
}
var Rs = !1;
function xa() {
  z.autoAddCss && !Rs && (ov(du()), Rs = !0);
}
var fv = {
  mixout: function() {
    return {
      dom: {
        css: du,
        insertCss: xa
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        xa();
      },
      beforeI2svg: function() {
        xa();
      }
    };
  }
}, ht = Tt || {};
ht[gt] || (ht[gt] = {});
ht[gt].styles || (ht[gt].styles = {});
ht[gt].hooks || (ht[gt].hooks = {});
ht[gt].shims || (ht[gt].shims = []);
var et = ht[gt], mu = [], dv = function e() {
  we.removeEventListener("DOMContentLoaded", e), $r = 1, mu.map(function(t) {
    return t();
  });
}, $r = !1;
bt && ($r = (we.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(we.readyState), $r || we.addEventListener("DOMContentLoaded", dv));
function mv(e) {
  bt && ($r ? setTimeout(e, 0) : mu.push(e));
}
function tr(e) {
  var t = e.tag, n = e.attributes, r = n === void 0 ? {} : n, a = e.children, o = a === void 0 ? [] : a;
  return typeof e == "string" ? fu(e) : "<".concat(t, " ").concat(sv(r), ">").concat(o.map(tr).join(""), "</").concat(t, ">");
}
function Ps(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var pv = function(t, n) {
  return function(r, a, o, i) {
    return t.call(n, r, a, o, i);
  };
}, Ea = function(t, n, r, a) {
  var o = Object.keys(t), i = o.length, s = a !== void 0 ? pv(n, a) : n, c, f, l;
  for (r === void 0 ? (c = 1, l = t[o[0]]) : (c = 0, l = r); c < i; c++)
    f = o[c], l = s(l, t[f], f, t);
  return l;
};
function gv(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var a = e.charCodeAt(n++);
    if (a >= 55296 && a <= 56319 && n < r) {
      var o = e.charCodeAt(n++);
      (o & 64512) == 56320 ? t.push(((a & 1023) << 10) + (o & 1023) + 65536) : (t.push(a), n--);
    } else
      t.push(a);
  }
  return t;
}
function Oo(e) {
  var t = gv(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function hv(e, t) {
  var n = e.length, r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function Is(e) {
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n], a = !!r.icon;
    return a ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function _o(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.skipHooks, a = r === void 0 ? !1 : r, o = Is(t);
  typeof et.hooks.addPack == "function" && !a ? et.hooks.addPack(e, Is(t)) : et.styles[e] = j(j({}, et.styles[e] || {}), o), e === "fas" && _o("fa", t);
}
var hr, yr, vr, rn = et.styles, yv = et.shims, vv = (hr = {}, Ae(hr, be, Object.values(Yn[be])), Ae(hr, ke, Object.values(Yn[ke])), hr), mi = null, pu = {}, gu = {}, hu = {}, yu = {}, vu = {}, bv = (yr = {}, Ae(yr, be, Object.keys(zn[be])), Ae(yr, ke, Object.keys(zn[ke])), yr);
function wv(e) {
  return ~ev.indexOf(e);
}
function xv(e, t) {
  var n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !wv(a) ? a : null;
}
var bu = function() {
  var t = function(o) {
    return Ea(rn, function(i, s, c) {
      return i[c] = Ea(s, o, {}), i;
    }, {});
  };
  pu = t(function(a, o, i) {
    if (o[3] && (a[o[3]] = i), o[2]) {
      var s = o[2].filter(function(c) {
        return typeof c == "number";
      });
      s.forEach(function(c) {
        a[c.toString(16)] = i;
      });
    }
    return a;
  }), gu = t(function(a, o, i) {
    if (a[i] = i, o[2]) {
      var s = o[2].filter(function(c) {
        return typeof c == "string";
      });
      s.forEach(function(c) {
        a[c] = i;
      });
    }
    return a;
  }), vu = t(function(a, o, i) {
    var s = o[2];
    return a[i] = i, s.forEach(function(c) {
      a[c] = i;
    }), a;
  });
  var n = "far" in rn || z.autoFetchSvg, r = Ea(yv, function(a, o) {
    var i = o[0], s = o[1], c = o[2];
    return s === "far" && !n && (s = "fas"), typeof i == "string" && (a.names[i] = {
      prefix: s,
      iconName: c
    }), typeof i == "number" && (a.unicodes[i.toString(16)] = {
      prefix: s,
      iconName: c
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  hu = r.names, yu = r.unicodes, mi = ta(z.styleDefault, {
    family: z.familyDefault
  });
};
av(function(e) {
  mi = ta(e.styleDefault, {
    family: z.familyDefault
  });
});
bu();
function pi(e, t) {
  return (pu[e] || {})[t];
}
function Ev(e, t) {
  return (gu[e] || {})[t];
}
function Lt(e, t) {
  return (vu[e] || {})[t];
}
function wu(e) {
  return hu[e] || {
    prefix: null,
    iconName: null
  };
}
function Sv(e) {
  var t = yu[e], n = pi("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function At() {
  return mi;
}
var gi = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function ta(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.family, r = n === void 0 ? be : n, a = zn[r][e], o = Wn[r][e] || Wn[r][a], i = e in et.styles ? e : null;
  return o || i || null;
}
var js = (vr = {}, Ae(vr, be, Object.keys(Yn[be])), Ae(vr, ke, Object.keys(Yn[ke])), vr);
function na(e) {
  var t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.skipLookups, a = r === void 0 ? !1 : r, o = (t = {}, Ae(t, be, "".concat(z.cssPrefix, "-").concat(be)), Ae(t, ke, "".concat(z.cssPrefix, "-").concat(ke)), t), i = null, s = be;
  (e.includes(o[be]) || e.some(function(f) {
    return js[be].includes(f);
  })) && (s = be), (e.includes(o[ke]) || e.some(function(f) {
    return js[ke].includes(f);
  })) && (s = ke);
  var c = e.reduce(function(f, l) {
    var m = xv(z.cssPrefix, l);
    if (rn[l] ? (l = vv[s].includes(l) ? Ky[s][l] : l, i = l, f.prefix = l) : bv[s].indexOf(l) > -1 ? (i = l, f.prefix = ta(l, {
      family: s
    })) : m ? f.iconName = m : l !== z.replacementClass && l !== o[be] && l !== o[ke] && f.rest.push(l), !a && f.prefix && f.iconName) {
      var h = i === "fa" ? wu(f.iconName) : {}, u = Lt(f.prefix, f.iconName);
      h.prefix && (i = null), f.iconName = h.iconName || u || f.iconName, f.prefix = h.prefix || f.prefix, f.prefix === "far" && !rn.far && rn.fas && !z.autoFetchSvg && (f.prefix = "fas");
    }
    return f;
  }, gi());
  return (e.includes("fa-brands") || e.includes("fab")) && (c.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (c.prefix = "fad"), !c.prefix && s === ke && (rn.fass || z.autoFetchSvg) && (c.prefix = "fass", c.iconName = Lt(c.prefix, c.iconName) || c.iconName), (c.prefix === "fa" || i === "fa") && (c.prefix = At() || "fas"), c;
}
var kv = /* @__PURE__ */ function() {
  function e() {
    Dy(this, e), this.definitions = {};
  }
  return Ly(e, [{
    key: "add",
    value: function() {
      for (var n = this, r = arguments.length, a = new Array(r), o = 0; o < r; o++)
        a[o] = arguments[o];
      var i = a.reduce(this._pullDefinitions, {});
      Object.keys(i).forEach(function(s) {
        n.definitions[s] = j(j({}, n.definitions[s] || {}), i[s]), _o(s, i[s]);
        var c = Yn[be][s];
        c && _o(c, i[s]), bu();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(n, r) {
      var a = r.prefix && r.iconName && r.icon ? {
        0: r
      } : r;
      return Object.keys(a).map(function(o) {
        var i = a[o], s = i.prefix, c = i.iconName, f = i.icon, l = f[2];
        n[s] || (n[s] = {}), l.length > 0 && l.forEach(function(m) {
          typeof m == "string" && (n[s][m] = f);
        }), n[s][c] = f;
      }), n;
    }
  }]), e;
}(), Ds = [], an = {}, ln = {}, Ov = Object.keys(ln);
function _v(e, t) {
  var n = t.mixoutsTo;
  return Ds = e, an = {}, Object.keys(ln).forEach(function(r) {
    Ov.indexOf(r) === -1 && delete ln[r];
  }), Ds.forEach(function(r) {
    var a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach(function(i) {
      typeof a[i] == "function" && (n[i] = a[i]), Lr(a[i]) === "object" && Object.keys(a[i]).forEach(function(s) {
        n[i] || (n[i] = {}), n[i][s] = a[i][s];
      });
    }), r.hooks) {
      var o = r.hooks();
      Object.keys(o).forEach(function(i) {
        an[i] || (an[i] = []), an[i].push(o[i]);
      });
    }
    r.provides && r.provides(ln);
  }), n;
}
function Co(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  var o = an[e] || [];
  return o.forEach(function(i) {
    t = i.apply(null, [t].concat(r));
  }), t;
}
function Vt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var a = an[e] || [];
  a.forEach(function(o) {
    o.apply(null, n);
  });
}
function yt() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return ln[e] ? ln[e].apply(null, t) : void 0;
}
function To(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, n = e.prefix || At();
  if (t)
    return t = Lt(n, t) || t, Ps(xu.definitions, n, t) || Ps(et.styles, n, t);
}
var xu = new kv(), Cv = function() {
  z.autoReplaceSvg = !1, z.observeMutations = !1, Vt("noAuto");
}, Tv = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return bt ? (Vt("beforeI2svg", t), yt("pseudoElements2svg", t), yt("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot;
    z.autoReplaceSvg === !1 && (z.autoReplaceSvg = !0), z.observeMutations = !0, mv(function() {
      Nv({
        autoReplaceSvgRoot: n
      }), Vt("watch", t);
    });
  }
}, Av = {
  icon: function(t) {
    if (t === null)
      return null;
    if (Lr(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: Lt(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], r = ta(t[0]);
      return {
        prefix: r,
        iconName: Lt(r, n) || n
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(z.cssPrefix, "-")) > -1 || t.match(qy))) {
      var a = na(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: a.prefix || At(),
        iconName: Lt(a.prefix, a.iconName) || a.iconName
      };
    }
    if (typeof t == "string") {
      var o = At();
      return {
        prefix: o,
        iconName: Lt(o, t) || t
      };
    }
  }
}, Ge = {
  noAuto: Cv,
  config: z,
  dom: Tv,
  parse: Av,
  library: xu,
  findIconDefinition: To,
  toHtml: tr
}, Nv = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot, r = n === void 0 ? we : n;
  (Object.keys(et.styles).length > 0 || z.autoFetchSvg) && bt && z.autoReplaceSvg && Ge.dom.i2svg({
    node: r
  });
};
function ra(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(r) {
        return tr(r);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (bt) {
        var r = we.createElement("div");
        return r.innerHTML = e.html, r.children;
      }
    }
  }), e;
}
function Mv(e) {
  var t = e.children, n = e.main, r = e.mask, a = e.attributes, o = e.styles, i = e.transform;
  if (di(i) && n.found && !r.found) {
    var s = n.width, c = n.height, f = {
      x: s / c / 2,
      y: 0.5
    };
    a.style = ea(j(j({}, o), {}, {
      "transform-origin": "".concat(f.x + i.x / 16, "em ").concat(f.y + i.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function Rv(e) {
  var t = e.prefix, n = e.iconName, r = e.children, a = e.attributes, o = e.symbol, i = o === !0 ? "".concat(t, "-").concat(z.cssPrefix, "-").concat(n) : o;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: j(j({}, a), {}, {
        id: i
      }),
      children: r
    }]
  }];
}
function hi(e) {
  var t = e.icons, n = t.main, r = t.mask, a = e.prefix, o = e.iconName, i = e.transform, s = e.symbol, c = e.title, f = e.maskId, l = e.titleId, m = e.extra, h = e.watchable, u = h === void 0 ? !1 : h, g = r.found ? r : n, p = g.width, d = g.height, y = a === "fak", v = [z.replacementClass, o ? "".concat(z.cssPrefix, "-").concat(o) : ""].filter(function(M) {
    return m.classes.indexOf(M) === -1;
  }).filter(function(M) {
    return M !== "" || !!M;
  }).concat(m.classes).join(" "), x = {
    children: [],
    attributes: j(j({}, m.attributes), {}, {
      "data-prefix": a,
      "data-icon": o,
      class: v,
      role: m.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(p, " ").concat(d)
    })
  }, E = y && !~m.classes.indexOf("fa-fw") ? {
    width: "".concat(p / d * 16 * 0.0625, "em")
  } : {};
  u && (x.attributes[Yt] = ""), c && (x.children.push({
    tag: "title",
    attributes: {
      id: x.attributes["aria-labelledby"] || "title-".concat(l || Bn())
    },
    children: [c]
  }), delete x.attributes.title);
  var b = j(j({}, x), {}, {
    prefix: a,
    iconName: o,
    main: n,
    mask: r,
    maskId: f,
    transform: i,
    symbol: s,
    styles: j(j({}, E), m.styles)
  }), O = r.found && n.found ? yt("generateAbstractMask", b) || {
    children: [],
    attributes: {}
  } : yt("generateAbstractIcon", b) || {
    children: [],
    attributes: {}
  }, _ = O.children, A = O.attributes;
  return b.children = _, b.attributes = A, s ? Rv(b) : Mv(b);
}
function Ls(e) {
  var t = e.content, n = e.width, r = e.height, a = e.transform, o = e.title, i = e.extra, s = e.watchable, c = s === void 0 ? !1 : s, f = j(j(j({}, i.attributes), o ? {
    title: o
  } : {}), {}, {
    class: i.classes.join(" ")
  });
  c && (f[Yt] = "");
  var l = j({}, i.styles);
  di(a) && (l.transform = lv({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), l["-webkit-transform"] = l.transform);
  var m = ea(l);
  m.length > 0 && (f.style = m);
  var h = [];
  return h.push({
    tag: "span",
    attributes: f,
    children: [t]
  }), o && h.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [o]
  }), h;
}
function Pv(e) {
  var t = e.content, n = e.title, r = e.extra, a = j(j(j({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), o = ea(r.styles);
  o.length > 0 && (a.style = o);
  var i = [];
  return i.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), n && i.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), i;
}
var Sa = et.styles;
function Ao(e) {
  var t = e[0], n = e[1], r = e.slice(4), a = ii(r, 1), o = a[0], i = null;
  return Array.isArray(o) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(z.cssPrefix, "-").concat(Dt.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(z.cssPrefix, "-").concat(Dt.SECONDARY),
        fill: "currentColor",
        d: o[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(z.cssPrefix, "-").concat(Dt.PRIMARY),
        fill: "currentColor",
        d: o[1]
      }
    }]
  } : i = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: o
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: i
  };
}
var Iv = {
  found: !1,
  width: 512,
  height: 512
};
function jv(e, t) {
  !su && !z.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function No(e, t) {
  var n = t;
  return t === "fa" && z.styleDefault !== null && (t = At()), new Promise(function(r, a) {
    if (yt("missingIconAbstract"), n === "fa") {
      var o = wu(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && Sa[t] && Sa[t][e]) {
      var i = Sa[t][e];
      return r(Ao(i));
    }
    jv(e, t), r(j(j({}, Iv), {}, {
      icon: z.showMissingIcons && e ? yt("missingIconAbstract") || {} : {}
    }));
  });
}
var $s = function() {
}, Mo = z.measurePerformance && ur && ur.mark && ur.measure ? ur : {
  mark: $s,
  measure: $s
}, An = 'FA "6.5.2"', Dv = function(t) {
  return Mo.mark("".concat(An, " ").concat(t, " begins")), function() {
    return Eu(t);
  };
}, Eu = function(t) {
  Mo.mark("".concat(An, " ").concat(t, " ends")), Mo.measure("".concat(An, " ").concat(t), "".concat(An, " ").concat(t, " begins"), "".concat(An, " ").concat(t, " ends"));
}, yi = {
  begin: Dv,
  end: Eu
}, Sr = function() {
};
function Fs(e) {
  var t = e.getAttribute ? e.getAttribute(Yt) : null;
  return typeof t == "string";
}
function Lv(e) {
  var t = e.getAttribute ? e.getAttribute(ci) : null, n = e.getAttribute ? e.getAttribute(li) : null;
  return t && n;
}
function $v(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(z.replacementClass);
}
function Fv() {
  if (z.autoReplaceSvg === !0)
    return kr.replace;
  var e = kr[z.autoReplaceSvg];
  return e || kr.replace;
}
function zv(e) {
  return we.createElementNS("http://www.w3.org/2000/svg", e);
}
function Wv(e) {
  return we.createElement(e);
}
function Su(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.ceFn, r = n === void 0 ? e.tag === "svg" ? zv : Wv : n;
  if (typeof e == "string")
    return we.createTextNode(e);
  var a = r(e.tag);
  Object.keys(e.attributes || []).forEach(function(i) {
    a.setAttribute(i, e.attributes[i]);
  });
  var o = e.children || [];
  return o.forEach(function(i) {
    a.appendChild(Su(i, {
      ceFn: r
    }));
  }), a;
}
function Yv(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var kr = {
  replace: function(t) {
    var n = t[0];
    if (n.parentNode)
      if (t[1].forEach(function(a) {
        n.parentNode.insertBefore(Su(a), n);
      }), n.getAttribute(Yt) === null && z.keepOriginalSource) {
        var r = we.createComment(Yv(n));
        n.parentNode.replaceChild(r, n);
      } else
        n.remove();
  },
  nest: function(t) {
    var n = t[0], r = t[1];
    if (~fi(n).indexOf(z.replacementClass))
      return kr.replace(t);
    var a = new RegExp("".concat(z.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      var o = r[0].attributes.class.split(" ").reduce(function(s, c) {
        return c === z.replacementClass || c.match(a) ? s.toSvg.push(c) : s.toNode.push(c), s;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", o.toNode.join(" "));
    }
    var i = r.map(function(s) {
      return tr(s);
    }).join(`
`);
    n.setAttribute(Yt, ""), n.innerHTML = i;
  }
};
function zs(e) {
  e();
}
function ku(e, t) {
  var n = typeof t == "function" ? t : Sr;
  if (e.length === 0)
    n();
  else {
    var r = zs;
    z.mutateApproach === Hy && (r = Tt.requestAnimationFrame || zs), r(function() {
      var a = Fv(), o = yi.begin("mutate");
      e.map(a), o(), n();
    });
  }
}
var vi = !1;
function Ou() {
  vi = !0;
}
function Ro() {
  vi = !1;
}
var Fr = null;
function Ws(e) {
  if (Ns && z.observeMutations) {
    var t = e.treeCallback, n = t === void 0 ? Sr : t, r = e.nodeCallback, a = r === void 0 ? Sr : r, o = e.pseudoElementsCallback, i = o === void 0 ? Sr : o, s = e.observeMutationsRoot, c = s === void 0 ? we : s;
    Fr = new Ns(function(f) {
      if (!vi) {
        var l = At();
        hn(f).forEach(function(m) {
          if (m.type === "childList" && m.addedNodes.length > 0 && !Fs(m.addedNodes[0]) && (z.searchPseudoElements && i(m.target), n(m.target)), m.type === "attributes" && m.target.parentNode && z.searchPseudoElements && i(m.target.parentNode), m.type === "attributes" && Fs(m.target) && ~Zy.indexOf(m.attributeName))
            if (m.attributeName === "class" && Lv(m.target)) {
              var h = na(fi(m.target)), u = h.prefix, g = h.iconName;
              m.target.setAttribute(ci, u || l), g && m.target.setAttribute(li, g);
            } else
              $v(m.target) && a(m.target);
        });
      }
    }), bt && Fr.observe(c, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function Vv() {
  Fr && Fr.disconnect();
}
function Bv(e) {
  var t = e.getAttribute("style"), n = [];
  return t && (n = t.split(";").reduce(function(r, a) {
    var o = a.split(":"), i = o[0], s = o.slice(1);
    return i && s.length > 0 && (r[i] = s.join(":").trim()), r;
  }, {})), n;
}
function Uv(e) {
  var t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "", a = na(fi(e));
  return a.prefix || (a.prefix = At()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = Ev(a.prefix, e.innerText) || pi(a.prefix, Oo(e.innerText))), !a.iconName && z.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function Hv(e) {
  var t = hn(e.attributes).reduce(function(a, o) {
    return a.name !== "class" && a.name !== "style" && (a[o.name] = o.value), a;
  }, {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return z.autoA11y && (n ? t["aria-labelledby"] = "".concat(z.replacementClass, "-title-").concat(r || Bn()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Gv() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: ot,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function Ys(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, n = Uv(e), r = n.iconName, a = n.prefix, o = n.rest, i = Hv(e), s = Co("parseNodeAttributes", {}, e), c = t.styleParser ? Bv(e) : [];
  return j({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: ot,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: o,
      styles: c,
      attributes: i
    }
  }, s);
}
var Kv = et.styles;
function _u(e) {
  var t = z.autoReplaceSvg === "nest" ? Ys(e, {
    styleParser: !1
  }) : Ys(e);
  return ~t.extra.classes.indexOf(cu) ? yt("generateLayersText", e, t) : yt("generateSvgReplacementMutation", e, t);
}
var Nt = /* @__PURE__ */ new Set();
ui.map(function(e) {
  Nt.add("fa-".concat(e));
});
Object.keys(zn[be]).map(Nt.add.bind(Nt));
Object.keys(zn[ke]).map(Nt.add.bind(Nt));
Nt = Zn(Nt);
function Vs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!bt)
    return Promise.resolve();
  var n = we.documentElement.classList, r = function(m) {
    return n.add("".concat(Ms, "-").concat(m));
  }, a = function(m) {
    return n.remove("".concat(Ms, "-").concat(m));
  }, o = z.autoFetchSvg ? Nt : ui.map(function(l) {
    return "fa-".concat(l);
  }).concat(Object.keys(Kv));
  o.includes("fa") || o.push("fa");
  var i = [".".concat(cu, ":not([").concat(Yt, "])")].concat(o.map(function(l) {
    return ".".concat(l, ":not([").concat(Yt, "])");
  })).join(", ");
  if (i.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = hn(e.querySelectorAll(i));
  } catch {
  }
  if (s.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  var c = yi.begin("onTree"), f = s.reduce(function(l, m) {
    try {
      var h = _u(m);
      h && l.push(h);
    } catch (u) {
      su || u.name === "MissingIcon" && console.error(u);
    }
    return l;
  }, []);
  return new Promise(function(l, m) {
    Promise.all(f).then(function(h) {
      ku(h, function() {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), c(), l();
      });
    }).catch(function(h) {
      c(), m(h);
    });
  });
}
function qv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  _u(e).then(function(n) {
    n && ku([n], t);
  });
}
function Xv(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (t || {}).icon ? t : To(t || {}), a = n.mask;
    return a && (a = (a || {}).icon ? a : To(a || {})), e(r, j(j({}, n), {}, {
      mask: a
    }));
  };
}
var Jv = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, a = r === void 0 ? ot : r, o = n.symbol, i = o === void 0 ? !1 : o, s = n.mask, c = s === void 0 ? null : s, f = n.maskId, l = f === void 0 ? null : f, m = n.title, h = m === void 0 ? null : m, u = n.titleId, g = u === void 0 ? null : u, p = n.classes, d = p === void 0 ? [] : p, y = n.attributes, v = y === void 0 ? {} : y, x = n.styles, E = x === void 0 ? {} : x;
  if (t) {
    var b = t.prefix, O = t.iconName, _ = t.icon;
    return ra(j({
      type: "icon"
    }, t), function() {
      return Vt("beforeDOMElementCreation", {
        iconDefinition: t,
        params: n
      }), z.autoA11y && (h ? v["aria-labelledby"] = "".concat(z.replacementClass, "-title-").concat(g || Bn()) : (v["aria-hidden"] = "true", v.focusable = "false")), hi({
        icons: {
          main: Ao(_),
          mask: c ? Ao(c.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: b,
        iconName: O,
        transform: j(j({}, ot), a),
        symbol: i,
        title: h,
        maskId: l,
        titleId: g,
        extra: {
          attributes: v,
          styles: E,
          classes: d
        }
      });
    });
  }
}, Qv = {
  mixout: function() {
    return {
      icon: Xv(Jv)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = Vs, n.nodeCallback = qv, n;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(n) {
      var r = n.node, a = r === void 0 ? we : r, o = n.callback, i = o === void 0 ? function() {
      } : o;
      return Vs(a, i);
    }, t.generateSvgReplacementMutation = function(n, r) {
      var a = r.iconName, o = r.title, i = r.titleId, s = r.prefix, c = r.transform, f = r.symbol, l = r.mask, m = r.maskId, h = r.extra;
      return new Promise(function(u, g) {
        Promise.all([No(a, s), l.iconName ? No(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(p) {
          var d = ii(p, 2), y = d[0], v = d[1];
          u([n, hi({
            icons: {
              main: y,
              mask: v
            },
            prefix: s,
            iconName: a,
            transform: c,
            symbol: f,
            maskId: m,
            title: o,
            titleId: i,
            extra: h,
            watchable: !0
          })]);
        }).catch(g);
      });
    }, t.generateAbstractIcon = function(n) {
      var r = n.children, a = n.attributes, o = n.main, i = n.transform, s = n.styles, c = ea(s);
      c.length > 0 && (a.style = c);
      var f;
      return di(i) && (f = yt("generateAbstractTransformGrouping", {
        main: o,
        transform: i,
        containerWidth: o.width,
        iconWidth: o.width
      })), r.push(f || o.icon), {
        children: r,
        attributes: a
      };
    };
  }
}, Zv = {
  mixout: function() {
    return {
      layer: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.classes, o = a === void 0 ? [] : a;
        return ra({
          type: "layer"
        }, function() {
          Vt("beforeDOMElementCreation", {
            assembler: n,
            params: r
          });
          var i = [];
          return n(function(s) {
            Array.isArray(s) ? s.map(function(c) {
              i = i.concat(c.abstract);
            }) : i = i.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(z.cssPrefix, "-layers")].concat(Zn(o)).join(" ")
            },
            children: i
          }];
        });
      }
    };
  }
}, eb = {
  mixout: function() {
    return {
      counter: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.title, o = a === void 0 ? null : a, i = r.classes, s = i === void 0 ? [] : i, c = r.attributes, f = c === void 0 ? {} : c, l = r.styles, m = l === void 0 ? {} : l;
        return ra({
          type: "counter",
          content: n
        }, function() {
          return Vt("beforeDOMElementCreation", {
            content: n,
            params: r
          }), Pv({
            content: n.toString(),
            title: o,
            extra: {
              attributes: f,
              styles: m,
              classes: ["".concat(z.cssPrefix, "-layers-counter")].concat(Zn(s))
            }
          });
        });
      }
    };
  }
}, tb = {
  mixout: function() {
    return {
      text: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.transform, o = a === void 0 ? ot : a, i = r.title, s = i === void 0 ? null : i, c = r.classes, f = c === void 0 ? [] : c, l = r.attributes, m = l === void 0 ? {} : l, h = r.styles, u = h === void 0 ? {} : h;
        return ra({
          type: "text",
          content: n
        }, function() {
          return Vt("beforeDOMElementCreation", {
            content: n,
            params: r
          }), Ls({
            content: n,
            transform: j(j({}, ot), o),
            title: s,
            extra: {
              attributes: m,
              styles: u,
              classes: ["".concat(z.cssPrefix, "-layers-text")].concat(Zn(f))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(n, r) {
      var a = r.title, o = r.transform, i = r.extra, s = null, c = null;
      if (au) {
        var f = parseInt(getComputedStyle(n).fontSize, 10), l = n.getBoundingClientRect();
        s = l.width / f, c = l.height / f;
      }
      return z.autoA11y && !a && (i.attributes["aria-hidden"] = "true"), Promise.resolve([n, Ls({
        content: n.innerHTML,
        width: s,
        height: c,
        transform: o,
        title: a,
        extra: i,
        watchable: !0
      })]);
    };
  }
}, nb = new RegExp('"', "ug"), Bs = [1105920, 1112319];
function rb(e) {
  var t = e.replace(nb, ""), n = hv(t, 0), r = n >= Bs[0] && n <= Bs[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Oo(a ? t[0] : t),
    isSecondary: r || a
  };
}
function Us(e, t) {
  var n = "".concat(Uy).concat(t.replace(":", "-"));
  return new Promise(function(r, a) {
    if (e.getAttribute(n) !== null)
      return r();
    var o = hn(e.children), i = o.filter(function(_) {
      return _.getAttribute(ko) === t;
    })[0], s = Tt.getComputedStyle(e, t), c = s.getPropertyValue("font-family").match(Xy), f = s.getPropertyValue("font-weight"), l = s.getPropertyValue("content");
    if (i && !c)
      return e.removeChild(i), r();
    if (c && l !== "none" && l !== "") {
      var m = s.getPropertyValue("content"), h = ~["Sharp"].indexOf(c[2]) ? ke : be, u = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(c[2]) ? Wn[h][c[2].toLowerCase()] : Jy[h][f], g = rb(m), p = g.value, d = g.isSecondary, y = c[0].startsWith("FontAwesome"), v = pi(u, p), x = v;
      if (y) {
        var E = Sv(p);
        E.iconName && E.prefix && (v = E.iconName, u = E.prefix);
      }
      if (v && !d && (!i || i.getAttribute(ci) !== u || i.getAttribute(li) !== x)) {
        e.setAttribute(n, x), i && e.removeChild(i);
        var b = Gv(), O = b.extra;
        O.attributes[ko] = t, No(v, u).then(function(_) {
          var A = hi(j(j({}, b), {}, {
            icons: {
              main: _,
              mask: gi()
            },
            prefix: u,
            iconName: x,
            extra: O,
            watchable: !0
          })), M = we.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(M, e.firstChild) : e.appendChild(M), M.outerHTML = A.map(function(D) {
            return tr(D);
          }).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function ab(e) {
  return Promise.all([Us(e, "::before"), Us(e, "::after")]);
}
function ob(e) {
  return e.parentNode !== document.head && !~Gy.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(ko) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Hs(e) {
  if (bt)
    return new Promise(function(t, n) {
      var r = hn(e.querySelectorAll("*")).filter(ob).map(ab), a = yi.begin("searchPseudoElements");
      Ou(), Promise.all(r).then(function() {
        a(), Ro(), t();
      }).catch(function() {
        a(), Ro(), n();
      });
    });
}
var ib = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.pseudoElementsCallback = Hs, n;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(n) {
      var r = n.node, a = r === void 0 ? we : r;
      z.searchPseudoElements && Hs(a);
    };
  }
}, Gs = !1, sb = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          Ou(), Gs = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        Ws(Co("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        Vv();
      },
      watch: function(n) {
        var r = n.observeMutationsRoot;
        Gs ? Ro() : Ws(Co("mutationObserverCallbacks", {
          observeMutationsRoot: r
        }));
      }
    };
  }
}, Ks = function(t) {
  var n = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(r, a) {
    var o = a.toLowerCase().split("-"), i = o[0], s = o.slice(1).join("-");
    if (i && s === "h")
      return r.flipX = !0, r;
    if (i && s === "v")
      return r.flipY = !0, r;
    if (s = parseFloat(s), isNaN(s))
      return r;
    switch (i) {
      case "grow":
        r.size = r.size + s;
        break;
      case "shrink":
        r.size = r.size - s;
        break;
      case "left":
        r.x = r.x - s;
        break;
      case "right":
        r.x = r.x + s;
        break;
      case "up":
        r.y = r.y - s;
        break;
      case "down":
        r.y = r.y + s;
        break;
      case "rotate":
        r.rotate = r.rotate + s;
        break;
    }
    return r;
  }, n);
}, cb = {
  mixout: function() {
    return {
      parse: {
        transform: function(n) {
          return Ks(n);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-transform");
        return a && (n.transform = Ks(a)), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(n) {
      var r = n.main, a = n.transform, o = n.containerWidth, i = n.iconWidth, s = {
        transform: "translate(".concat(o / 2, " 256)")
      }, c = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), f = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), l = "rotate(".concat(a.rotate, " 0 0)"), m = {
        transform: "".concat(c, " ").concat(f, " ").concat(l)
      }, h = {
        transform: "translate(".concat(i / 2 * -1, " -256)")
      }, u = {
        outer: s,
        inner: m,
        path: h
      };
      return {
        tag: "g",
        attributes: j({}, u.outer),
        children: [{
          tag: "g",
          attributes: j({}, u.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: j(j({}, r.icon.attributes), u.path)
          }]
        }]
      };
    };
  }
}, ka = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function qs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function lb(e) {
  return e.tag === "g" ? e.children : [e];
}
var ub = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-mask"), o = a ? na(a.split(" ").map(function(i) {
          return i.trim();
        })) : gi();
        return o.prefix || (o.prefix = At()), n.mask = o, n.maskId = r.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(n) {
      var r = n.children, a = n.attributes, o = n.main, i = n.mask, s = n.maskId, c = n.transform, f = o.width, l = o.icon, m = i.width, h = i.icon, u = cv({
        transform: c,
        containerWidth: m,
        iconWidth: f
      }), g = {
        tag: "rect",
        attributes: j(j({}, ka), {}, {
          fill: "white"
        })
      }, p = l.children ? {
        children: l.children.map(qs)
      } : {}, d = {
        tag: "g",
        attributes: j({}, u.inner),
        children: [qs(j({
          tag: l.tag,
          attributes: j(j({}, l.attributes), u.path)
        }, p))]
      }, y = {
        tag: "g",
        attributes: j({}, u.outer),
        children: [d]
      }, v = "mask-".concat(s || Bn()), x = "clip-".concat(s || Bn()), E = {
        tag: "mask",
        attributes: j(j({}, ka), {}, {
          id: v,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [g, y]
      }, b = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: x
          },
          children: lb(h)
        }, E]
      };
      return r.push(b, {
        tag: "rect",
        attributes: j({
          fill: "currentColor",
          "clip-path": "url(#".concat(x, ")"),
          mask: "url(#".concat(v, ")")
        }, ka)
      }), {
        children: r,
        attributes: a
      };
    };
  }
}, fb = {
  provides: function(t) {
    var n = !1;
    Tt.matchMedia && (n = Tt.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var r = [], a = {
        fill: "currentColor"
      }, o = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: j(j({}, a), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var i = j(j({}, o), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: j(j({}, a), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return n || s.children.push({
        tag: "animate",
        attributes: j(j({}, o), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: j(j({}, i), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(s), r.push({
        tag: "path",
        attributes: j(j({}, a), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: n ? [] : [{
          tag: "animate",
          attributes: j(j({}, i), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), n || r.push({
        tag: "path",
        attributes: j(j({}, a), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: j(j({}, i), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: r
      };
    };
  }
}, db = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-symbol"), o = a === null ? !1 : a === "" ? !0 : a;
        return n.symbol = o, n;
      }
    };
  }
}, mb = [fv, Qv, Zv, eb, tb, ib, sb, cb, ub, fb, db];
_v(mb, {
  mixoutsTo: Ge
});
Ge.noAuto;
Ge.config;
Ge.library;
Ge.dom;
var Po = Ge.parse;
Ge.findIconDefinition;
Ge.toHtml;
var pb = Ge.icon;
Ge.layer;
Ge.text;
Ge.counter;
var Io = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Oa, Xs;
function gb() {
  if (Xs)
    return Oa;
  Xs = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var i = {}, s = 0; s < 10; s++)
        i["_" + String.fromCharCode(s)] = s;
      var c = Object.getOwnPropertyNames(i).map(function(l) {
        return i[l];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        f[l] = l;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Oa = a() ? Object.assign : function(o, i) {
    for (var s, c = r(o), f, l = 1; l < arguments.length; l++) {
      s = Object(arguments[l]);
      for (var m in s)
        t.call(s, m) && (c[m] = s[m]);
      if (e) {
        f = e(s);
        for (var h = 0; h < f.length; h++)
          n.call(s, f[h]) && (c[f[h]] = s[f[h]]);
      }
    }
    return c;
  }, Oa;
}
var _a, Js;
function bi() {
  if (Js)
    return _a;
  Js = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return _a = e, _a;
}
var Ca, Qs;
function Cu() {
  return Qs || (Qs = 1, Ca = Function.call.bind(Object.prototype.hasOwnProperty)), Ca;
}
var Ta, Zs;
function hb() {
  if (Zs)
    return Ta;
  Zs = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = bi(), n = {}, r = Cu();
    e = function(o) {
      var i = "Warning: " + o;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function a(o, i, s, c, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in o)
        if (r(o, l)) {
          var m;
          try {
            if (typeof o[l] != "function") {
              var h = Error(
                (c || "React class") + ": " + s + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            m = o[l](i, l, c, s, null, t);
          } catch (g) {
            m = g;
          }
          if (m && !(m instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in n)) {
            n[m.message] = !0;
            var u = f ? f() : "";
            e(
              "Failed " + s + " type: " + m.message + (u ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Ta = a, Ta;
}
var Aa, ec;
function yb() {
  if (ec)
    return Aa;
  ec = 1;
  var e = Jo, t = gb(), n = bi(), r = Cu(), a = hb(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(s) {
    var c = "Warning: " + s;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return Aa = function(s, c) {
    var f = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function m(C) {
      var N = C && (f && C[f] || C[l]);
      if (typeof N == "function")
        return N;
    }
    var h = "<<anonymous>>", u = {
      array: y("array"),
      bigint: y("bigint"),
      bool: y("boolean"),
      func: y("function"),
      number: y("number"),
      object: y("object"),
      string: y("string"),
      symbol: y("symbol"),
      any: v(),
      arrayOf: x,
      element: E(),
      elementType: b(),
      instanceOf: O,
      node: D(),
      objectOf: A,
      oneOf: _,
      oneOfType: M,
      shape: $,
      exact: ee
    };
    function g(C, N) {
      return C === N ? C !== 0 || 1 / C === 1 / N : C !== C && N !== N;
    }
    function p(C, N) {
      this.message = C, this.data = N && typeof N == "object" ? N : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function d(C) {
      if (process.env.NODE_ENV !== "production")
        var N = {}, Y = 0;
      function F(ne, H, K, Q, ie, Z, Ne) {
        if (Q = Q || h, Z = Z || K, Ne !== n) {
          if (c) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var $e = Q + ":" + K;
            !N[$e] && // Avoid spamming the console because they are often not actionable except for lib authors
            Y < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + Z + "` prop on `" + Q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), N[$e] = !0, Y++);
          }
        }
        return H[K] == null ? ne ? H[K] === null ? new p("The " + ie + " `" + Z + "` is marked as required " + ("in `" + Q + "`, but its value is `null`.")) : new p("The " + ie + " `" + Z + "` is marked as required in " + ("`" + Q + "`, but its value is `undefined`.")) : null : C(H, K, Q, ie, Z);
      }
      var U = F.bind(null, !1);
      return U.isRequired = F.bind(null, !0), U;
    }
    function y(C) {
      function N(Y, F, U, ne, H, K) {
        var Q = Y[F], ie = q(Q);
        if (ie !== C) {
          var Z = le(Q);
          return new p(
            "Invalid " + ne + " `" + H + "` of type " + ("`" + Z + "` supplied to `" + U + "`, expected ") + ("`" + C + "`."),
            { expectedType: C }
          );
        }
        return null;
      }
      return d(N);
    }
    function v() {
      return d(i);
    }
    function x(C) {
      function N(Y, F, U, ne, H) {
        if (typeof C != "function")
          return new p("Property `" + H + "` of component `" + U + "` has invalid PropType notation inside arrayOf.");
        var K = Y[F];
        if (!Array.isArray(K)) {
          var Q = q(K);
          return new p("Invalid " + ne + " `" + H + "` of type " + ("`" + Q + "` supplied to `" + U + "`, expected an array."));
        }
        for (var ie = 0; ie < K.length; ie++) {
          var Z = C(K, ie, U, ne, H + "[" + ie + "]", n);
          if (Z instanceof Error)
            return Z;
        }
        return null;
      }
      return d(N);
    }
    function E() {
      function C(N, Y, F, U, ne) {
        var H = N[Y];
        if (!s(H)) {
          var K = q(H);
          return new p("Invalid " + U + " `" + ne + "` of type " + ("`" + K + "` supplied to `" + F + "`, expected a single ReactElement."));
        }
        return null;
      }
      return d(C);
    }
    function b() {
      function C(N, Y, F, U, ne) {
        var H = N[Y];
        if (!e.isValidElementType(H)) {
          var K = q(H);
          return new p("Invalid " + U + " `" + ne + "` of type " + ("`" + K + "` supplied to `" + F + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return d(C);
    }
    function O(C) {
      function N(Y, F, U, ne, H) {
        if (!(Y[F] instanceof C)) {
          var K = C.name || h, Q = Se(Y[F]);
          return new p("Invalid " + ne + " `" + H + "` of type " + ("`" + Q + "` supplied to `" + U + "`, expected ") + ("instance of `" + K + "`."));
        }
        return null;
      }
      return d(N);
    }
    function _(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), i;
      function N(Y, F, U, ne, H) {
        for (var K = Y[F], Q = 0; Q < C.length; Q++)
          if (g(K, C[Q]))
            return null;
        var ie = JSON.stringify(C, function(Ne, R) {
          var $e = le(R);
          return $e === "symbol" ? String(R) : R;
        });
        return new p("Invalid " + ne + " `" + H + "` of value `" + String(K) + "` " + ("supplied to `" + U + "`, expected one of " + ie + "."));
      }
      return d(N);
    }
    function A(C) {
      function N(Y, F, U, ne, H) {
        if (typeof C != "function")
          return new p("Property `" + H + "` of component `" + U + "` has invalid PropType notation inside objectOf.");
        var K = Y[F], Q = q(K);
        if (Q !== "object")
          return new p("Invalid " + ne + " `" + H + "` of type " + ("`" + Q + "` supplied to `" + U + "`, expected an object."));
        for (var ie in K)
          if (r(K, ie)) {
            var Z = C(K, ie, U, ne, H + "." + ie, n);
            if (Z instanceof Error)
              return Z;
          }
        return null;
      }
      return d(N);
    }
    function M(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var N = 0; N < C.length; N++) {
        var Y = C[N];
        if (typeof Y != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + xe(Y) + " at index " + N + "."
          ), i;
      }
      function F(U, ne, H, K, Q) {
        for (var ie = [], Z = 0; Z < C.length; Z++) {
          var Ne = C[Z], R = Ne(U, ne, H, K, Q, n);
          if (R == null)
            return null;
          R.data && r(R.data, "expectedType") && ie.push(R.data.expectedType);
        }
        var $e = ie.length > 0 ? ", expected one of type [" + ie.join(", ") + "]" : "";
        return new p("Invalid " + K + " `" + Q + "` supplied to " + ("`" + H + "`" + $e + "."));
      }
      return d(F);
    }
    function D() {
      function C(N, Y, F, U, ne) {
        return J(N[Y]) ? null : new p("Invalid " + U + " `" + ne + "` supplied to " + ("`" + F + "`, expected a ReactNode."));
      }
      return d(C);
    }
    function ce(C, N, Y, F, U) {
      return new p(
        (C || "React class") + ": " + N + " type `" + Y + "." + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + U + "`."
      );
    }
    function $(C) {
      function N(Y, F, U, ne, H) {
        var K = Y[F], Q = q(K);
        if (Q !== "object")
          return new p("Invalid " + ne + " `" + H + "` of type `" + Q + "` " + ("supplied to `" + U + "`, expected `object`."));
        for (var ie in C) {
          var Z = C[ie];
          if (typeof Z != "function")
            return ce(U, ne, H, ie, le(Z));
          var Ne = Z(K, ie, U, ne, H + "." + ie, n);
          if (Ne)
            return Ne;
        }
        return null;
      }
      return d(N);
    }
    function ee(C) {
      function N(Y, F, U, ne, H) {
        var K = Y[F], Q = q(K);
        if (Q !== "object")
          return new p("Invalid " + ne + " `" + H + "` of type `" + Q + "` " + ("supplied to `" + U + "`, expected `object`."));
        var ie = t({}, Y[F], C);
        for (var Z in ie) {
          var Ne = C[Z];
          if (r(C, Z) && typeof Ne != "function")
            return ce(U, ne, H, Z, le(Ne));
          if (!Ne)
            return new p(
              "Invalid " + ne + " `" + H + "` key `" + Z + "` supplied to `" + U + "`.\nBad object: " + JSON.stringify(Y[F], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(C), null, "  ")
            );
          var R = Ne(K, Z, U, ne, H + "." + Z, n);
          if (R)
            return R;
        }
        return null;
      }
      return d(N);
    }
    function J(C) {
      switch (typeof C) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !C;
        case "object":
          if (Array.isArray(C))
            return C.every(J);
          if (C === null || s(C))
            return !0;
          var N = m(C);
          if (N) {
            var Y = N.call(C), F;
            if (N !== C.entries) {
              for (; !(F = Y.next()).done; )
                if (!J(F.value))
                  return !1;
            } else
              for (; !(F = Y.next()).done; ) {
                var U = F.value;
                if (U && !J(U[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function I(C, N) {
      return C === "symbol" ? !0 : N ? N["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && N instanceof Symbol : !1;
    }
    function q(C) {
      var N = typeof C;
      return Array.isArray(C) ? "array" : C instanceof RegExp ? "object" : I(N, C) ? "symbol" : N;
    }
    function le(C) {
      if (typeof C > "u" || C === null)
        return "" + C;
      var N = q(C);
      if (N === "object") {
        if (C instanceof Date)
          return "date";
        if (C instanceof RegExp)
          return "regexp";
      }
      return N;
    }
    function xe(C) {
      var N = le(C);
      switch (N) {
        case "array":
        case "object":
          return "an " + N;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + N;
        default:
          return N;
      }
    }
    function Se(C) {
      return !C.constructor || !C.constructor.name ? h : C.constructor.name;
    }
    return u.checkPropTypes = a, u.resetWarningCache = a.resetWarningCache, u.PropTypes = u, u;
  }, Aa;
}
var Na, tc;
function vb() {
  if (tc)
    return Na;
  tc = 1;
  var e = bi();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Na = function() {
    function r(i, s, c, f, l, m) {
      if (m !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var o = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, Na;
}
if (process.env.NODE_ENV !== "production") {
  var bb = Jo, wb = !0;
  Io.exports = yb()(bb.isElement, wb);
} else
  Io.exports = vb()();
var xb = Io.exports;
const te = /* @__PURE__ */ Sg(xb);
function nc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nc(Object(n), !0).forEach(function(r) {
      on(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nc(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function zr(e) {
  "@babel/helpers - typeof";
  return zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zr(e);
}
function on(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Eb(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Sb(e, t) {
  if (e == null)
    return {};
  var n = Eb(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function jo(e) {
  return kb(e) || Ob(e) || _b(e) || Cb();
}
function kb(e) {
  if (Array.isArray(e))
    return Do(e);
}
function Ob(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function _b(e, t) {
  if (e) {
    if (typeof e == "string")
      return Do(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Do(e, t);
  }
}
function Do(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Cb() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tb(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, o = e.bounce, i = e.shake, s = e.flash, c = e.spin, f = e.spinPulse, l = e.spinReverse, m = e.pulse, h = e.fixedWidth, u = e.inverse, g = e.border, p = e.listItem, d = e.flip, y = e.size, v = e.rotation, x = e.pull, E = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": o,
    "fa-shake": i,
    "fa-flash": s,
    "fa-spin": c,
    "fa-spin-reverse": l,
    "fa-spin-pulse": f,
    "fa-pulse": m,
    "fa-fw": h,
    "fa-inverse": u,
    "fa-border": g,
    "fa-li": p,
    "fa-flip": d === !0,
    "fa-flip-horizontal": d === "horizontal" || d === "both",
    "fa-flip-vertical": d === "vertical" || d === "both"
  }, on(t, "fa-".concat(y), typeof y < "u" && y !== null), on(t, "fa-rotate-".concat(v), typeof v < "u" && v !== null && v !== 0), on(t, "fa-pull-".concat(x), typeof x < "u" && x !== null), on(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(E).map(function(b) {
    return E[b] ? b : null;
  }).filter(function(b) {
    return b;
  });
}
function Ab(e) {
  return e = e - 0, e === e;
}
function Tu(e) {
  return Ab(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Nb = ["style"];
function Mb(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Rb(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = Tu(n.slice(0, r)), o = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[Mb(a)] = o : t[a] = o, t;
  }, {});
}
function Au(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(c) {
    return Au(e, c);
  }), a = Object.keys(t.attributes || {}).reduce(function(c, f) {
    var l = t.attributes[f];
    switch (f) {
      case "class":
        c.attrs.className = l, delete t.attributes.class;
        break;
      case "style":
        c.attrs.style = Rb(l);
        break;
      default:
        f.indexOf("aria-") === 0 || f.indexOf("data-") === 0 ? c.attrs[f.toLowerCase()] = l : c.attrs[Tu(f)] = l;
    }
    return c;
  }, {
    attrs: {}
  }), o = n.style, i = o === void 0 ? {} : o, s = Sb(n, Nb);
  return a.attrs.style = rt(rt({}, a.attrs.style), i), e.apply(void 0, [t.tag, rt(rt({}, a.attrs), s)].concat(jo(r)));
}
var Nu = !1;
try {
  Nu = process.env.NODE_ENV === "production";
} catch {
}
function Pb() {
  if (!Nu && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function rc(e) {
  if (e && zr(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Po.icon)
    return Po.icon(e);
  if (e === null)
    return null;
  if (e && zr(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function Ma(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? on({}, e, t) : {};
}
var ac = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
}, Gt = /* @__PURE__ */ k.forwardRef(function(e, t) {
  var n = rt(rt({}, ac), e), r = n.icon, a = n.mask, o = n.symbol, i = n.className, s = n.title, c = n.titleId, f = n.maskId, l = rc(r), m = Ma("classes", [].concat(jo(Tb(n)), jo((i || "").split(" ")))), h = Ma("transform", typeof n.transform == "string" ? Po.transform(n.transform) : n.transform), u = Ma("mask", rc(a)), g = pb(l, rt(rt(rt(rt({}, m), h), u), {}, {
    symbol: o,
    title: s,
    titleId: c,
    maskId: f
  }));
  if (!g)
    return Pb("Could not find icon", l), null;
  var p = g.abstract, d = {
    ref: t
  };
  return Object.keys(n).forEach(function(y) {
    ac.hasOwnProperty(y) || (d[y] = n[y]);
  }), Ib(p[0], d);
});
Gt.displayName = "FontAwesomeIcon";
Gt.propTypes = {
  beat: te.bool,
  border: te.bool,
  beatFade: te.bool,
  bounce: te.bool,
  className: te.string,
  fade: te.bool,
  flash: te.bool,
  mask: te.oneOfType([te.object, te.array, te.string]),
  maskId: te.string,
  fixedWidth: te.bool,
  inverse: te.bool,
  flip: te.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: te.oneOfType([te.object, te.array, te.string]),
  listItem: te.bool,
  pull: te.oneOf(["right", "left"]),
  pulse: te.bool,
  rotation: te.oneOf([0, 90, 180, 270]),
  shake: te.bool,
  size: te.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: te.bool,
  spinPulse: te.bool,
  spinReverse: te.bool,
  symbol: te.oneOfType([te.bool, te.string]),
  title: te.string,
  titleId: te.string,
  transform: te.oneOfType([te.string, te.object]),
  swapOpacity: te.bool
};
var Ib = Au.bind(null, k.createElement);
const Kt = ({ icon: e, iconClassName: t }) => e ? /* @__PURE__ */ S(Gt, { icon: e, className: V("pointer-events-none", t) }) : /* @__PURE__ */ S(je, {});
function Ye({
  icon: e,
  className: t,
  children: n,
  "aria-checked": r,
  iconClassName: a,
  onFocus: o,
  onBlur: i,
  onMouseEnter: s,
  onMouseLeave: c,
  onPointerDown: f,
  onPointerUp: l,
  onPointerLeave: m,
  style: h,
  ...u
}) {
  const g = oe(), p = L(!1), d = L(!1), y = L(!1);
  return k.useEffect(() => () => {
    y.set(!1), d.set(!1), p.set(!1);
  }, []), /* @__PURE__ */ G(
    "span",
    {
      onFocus: (v) => {
        d.set(!0), o == null || o(v);
      },
      onPointerDown: (v) => {
        y.set(!0), f == null || f(v);
      },
      onPointerUp: (v) => {
        y.set(!1), l == null || l(v);
      },
      onPointerLeave: (v) => {
        y.set(!1), m == null || m(v);
      },
      onBlur: (v) => {
        d.set(!1), i == null || i(v);
      },
      onMouseEnter: (v) => {
        p.set(!0), s == null || s(v);
      },
      onMouseLeave: (v) => {
        p.set(!1), c == null || c(v);
      },
      className: V(
        `
          rounded-md
          p-1
          inline-flex
          items-center
          justify-center
          -outline-offset-1
          outline-1
          outline-transparent
          cursor-pointer
        `,
        u["aria-disabled"] && "pointer-events-none",
        t
      ),
      style: {
        ...g(
          p.get && {
            backgroundColor: "gray.opacity"
          },
          u["aria-disabled"] && {
            color: "gray.opacity.2"
          },
          r && "primary",
          r && {
            color: "primary.content"
          },
          d.get && {
            outlineColor: "primary"
          }
        ),
        ...h
      },
      ...u,
      children: [
        /* @__PURE__ */ S(Kt, { iconClassName: a, icon: e }),
        n
      ]
    }
  );
}
function vt({ children: e, className: t, icon: n, style: r, iconClassName: a, onPointerDown: o, onPointerLeave: i, onPointerUp: s, onMouseEnter: c, onMouseLeave: f, ...l }) {
  var d;
  const m = oe(), h = L(!1), u = L(!1), g = L(!1);
  k.useEffect(() => () => {
    h.set(!1), u.set(!1), g.set(!1);
  }, []);
  const p = k.useMemo(() => ({
    ...m(
      "primary",
      l["aria-disabled"] && "gray.opacity",
      !l["aria-disabled"] && {
        color: "primary.content"
      },
      h.get && {
        boxShadow: pt([
          {
            colorId: "shadow.color",
            isInset: !0,
            blur: 1
          }
        ])
      }
    ),
    ...r
  }), [m, l, h.get, pt, r, u.get]);
  return /* @__PURE__ */ G(
    "button",
    {
      onFocus: () => h.set(!0),
      onBlur: () => h.set(!1),
      onMouseEnter: (y) => {
        g.set(!0), c == null || c(y);
      },
      onMouseLeave: (y) => {
        g.set(!1), f == null || f(y);
      },
      onPointerDown: (y) => {
        u.set(!0), o == null || o(y);
      },
      onPointerUp: (y) => {
        u.set(!1), s == null || s(y);
      },
      onPointerLeave: (y) => {
        u.set(!1), i == null || i(y);
      },
      className: V(
        `
        p-2
        rounded-[4px]
        gap-2
        flex
        items-center
        outline-2
        outline-offset-1
        outline-transparent
        truncate
        justify-center
      `,
        Xm.boolean(l["aria-disabled"]) && "cursor-not-allowed",
        t,
        "relative"
      ),
      type: "button",
      style: Bo(p, h.get && { outlineColor: (d = p.backgroundColor) == null ? void 0 : d.toString() }),
      ...l,
      children: [
        /* @__PURE__ */ S(
          "span",
          {
            className: V("absolute inset-0 opacity-0 transition-[opacity] inline-block pointer-events-none", g.get && "opacity-60"),
            style: {
              ...m("shadow.color", u.get && "gray.opacity.toLight")
            }
          }
        ),
        /* @__PURE__ */ S(Kt, { iconClassName: a, icon: n }),
        e
      ]
    }
  );
}
function jb({ children: e, icon: t, iconClassName: n, isActive: r, style: a, ...o }) {
  const i = L(!1);
  k.useEffect(() => () => {
    i.set(!1);
  }, []);
  const s = oe();
  return /* @__PURE__ */ G(
    "span",
    {
      onMouseEnter: () => {
        i.set(!0);
      },
      onMouseLeave: () => {
        i.set(!1);
      },
      style: {
        ...s(
          r && "primary",
          r && {
            color: "primary.content"
          }
        ),
        ...a
      },
      className: V("relative inline-flex items-center gap-1 px-3 cursor-pointer h-[35px] capitalize outline-1 -outline-offset-1 outline-transparent rounded-lg"),
      ...o,
      children: [
        /* @__PURE__ */ S(
          "div",
          {
            className: V("transition-[width,height,box-shadow] duration-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 rounded-lg -translate-y-1/2 w-full h-full pointer-events-none z-[-10]"),
            style: {
              ...s(
                "secondry.background",
                i.get && "gray.opacity.2",
                r && "primary",
                r && {
                  boxShadow: pt([
                    {
                      colorId: "shadow.color",
                      x: 0,
                      y: 5,
                      blur: 6,
                      size: 0
                    }
                  ])
                }
              )
            }
          }
        ),
        /* @__PURE__ */ S(Kt, { iconClassName: n, icon: t }),
        e
      ]
    }
  );
}
function Db({
  "aria-selected": e,
  children: t,
  className: n,
  icon: r,
  iconClassName: a,
  onBlur: o,
  onFocus: i,
  onMouseEnter: s,
  onMouseLeave: c,
  onPointerDown: f,
  onPointerUp: l,
  style: m,
  ...h
}) {
  const u = L(!1), g = oe(), p = L(!1), d = L(!1);
  return /* @__PURE__ */ G(
    "button",
    {
      onMouseEnter: (y) => {
        s == null || s(y), u.set(!0);
      },
      onMouseLeave: (y) => {
        c == null || c(y), u.set(!1), d.set(!1);
      },
      onFocus: (y) => {
        i == null || i(y), p.set(!0);
      },
      onBlur: (y) => {
        o == null || o(y), p.set(!1);
      },
      onPointerDown: (y) => {
        f == null || f(y), d.set(!0);
      },
      onPointerUp: (y) => {
        l == null || l(y), d.get && d.set(!1);
      },
      ...h,
      style: {
        ...g(
          d.get && "gray.opacity.2",
          u.get && "gray.opacity",
          p.get && {
            outlineColor: "primary"
          }
        ),
        ...m
      },
      className: V(
        `
        outline-transparent
        -outline-offset-1
        outline-1
        p-3
        w-full
        flex
        items-center
        gap-4
        relative
        overflow-hidden
      `,
        n
      ),
      children: [
        /* @__PURE__ */ S(Kt, { iconClassName: a, icon: r }),
        t,
        /* @__PURE__ */ S(
          "div",
          {
            className: V(
              `
          absolute
          -top-[100px]
          h-[400px]
          pointer-events-none
          transition-[left]
          duration-1000
          -left-1/4
          w-1/4
          transform
          -rotate-45
        `,
              u.get && "left-full"
            ),
            style: {
              ...g({
                background: ql("to right", "transparent", "gray.opacity", "transparent")
              })
            }
          }
        )
      ]
    }
  );
}
function Lb({ onClick: e, className: t, children: n, iconClassName: r, ...a }) {
  const o = oe();
  return /* @__PURE__ */ S(
    "span",
    {
      onClick: (i) => {
        i.preventDefault(), e == null || e(i);
      },
      className: V(
        t,
        `
          absolute
          top-0
          right-0
          rounded-xl
          flex
          min-w-[22px]
          h-[22px]
          justify-center
          items-center
          overflow-hidden
        `
      ),
      ...a,
      style: {
        ...o("primary", {
          color: "primary.content"
        })
      },
      children: n
    }
  );
}
function Mu({ className: e, style: t, ...n }) {
  const r = oe(), a = L(!1);
  return /* @__PURE__ */ S(
    "a",
    {
      onMouseEnter: () => a.set(!0),
      onMouseLeave: () => a.set(!1),
      className: V(e, "hover:underline"),
      style: {
        ...r(
          a.get && {
            color: "primary"
          }
        )
      },
      ...n
    }
  );
}
function $b({ children: e, className: t, icon: n, style: r, iconClassName: a, onPointerDown: o, onPointerLeave: i, onPointerUp: s, onMouseEnter: c, onMouseLeave: f, ...l }) {
  const m = oe(), h = L(!1), u = L(!1);
  return k.useEffect(() => () => {
    h.set(!1), u.set(!1);
  }, []), /* @__PURE__ */ G(
    "button",
    {
      onMouseEnter: (g) => {
        u.set(!0), c == null || c(g);
      },
      onMouseLeave: (g) => {
        u.set(!1), f == null || f(g);
      },
      onPointerDown: (g) => {
        h.set(!0), o == null || o(g);
      },
      onPointerUp: (g) => {
        h.set(!1), s == null || s(g);
      },
      onPointerLeave: (g) => {
        h.set(!1), i == null || i(g);
      },
      className: V(
        `
        rounded-full
        w-[40px]
        h-[40px]
        gap-2
        flex
        items-center
        justify-center
        outline-2
        outline-offset-1
        outline-transparent
        truncate
      `,
        t,
        "relative"
      ),
      type: "button",
      style: {
        ...m(u.get && "gray.opacity", h.get && "gray.opacity.2")
      },
      ...l,
      children: [
        /* @__PURE__ */ S(Kt, { iconClassName: Vo("text-xl", a), icon: n }),
        e
      ]
    }
  );
}
const q1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Anchor: Mu,
  Button: vt,
  CircleTip: $b,
  Icon: Kt,
  LargeButton: Db,
  Note: Lb,
  Tab: jb,
  Tip: Ye
}, Symbol.toStringTag, { value: "Module" })), X1 = ({ className: e, style: t, ...n }) => {
  const r = oe();
  return /* @__PURE__ */ S(
    "div",
    {
      ...n,
      className: Vo("rounded-2xl w-1/2 border-solid border-transparent border shadow-lg flex flex-col", e),
      style: {
        ...r({
          backgroundColor: "secondry.background",
          borderColor: "borders"
        }),
        ...t
      }
    }
  );
};
function Un({ joinComponent: e, list: t }) {
  return k.useMemo(() => {
    const r = [], a = t.length;
    let o = 0;
    return t.forEach((i, s) => {
      r.push(/* @__PURE__ */ S(je, { children: i }, o)), s + 1 != a && r.push(/* @__PURE__ */ S(je, { children: e }, o + 1)), o += 2;
    }), r;
  }, [t, e]);
}
function Fb({ string: e = "expmle", time: t = 10 }) {
  const n = L(e), r = L(""), a = L(!0);
  return k.useEffect(() => {
    const o = n.get, i = Nc(o.split("").filter(Boolean));
    a.set(!0);
    let s = 0, c = 0;
    const f = setInterval(function() {
      if (s >= o.length) {
        a.set(!1), clearInterval(f);
        return;
      }
      r.set(`${o.slice(0, s)}${i[c]}`), i[c] == o[s] ? (s++, c = 0) : c++;
    }, t);
    return function() {
      a.set(!1), clearInterval(f);
    };
  }, [n.get]), {
    state: n,
    value: r.get,
    isLoading: a.get
  };
}
const J1 = ({ content: e, time: t }) => {
  const { state: n, value: r } = Fb({
    time: t,
    string: e
  });
  return k.useEffect(() => {
    n.set(e || "");
  }, [e]), /* @__PURE__ */ S(je, { children: r });
};
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var oc;
(function(e) {
  e.HARM_CATEGORY_UNSPECIFIED = "HARM_CATEGORY_UNSPECIFIED", e.HARM_CATEGORY_HATE_SPEECH = "HARM_CATEGORY_HATE_SPEECH", e.HARM_CATEGORY_SEXUALLY_EXPLICIT = "HARM_CATEGORY_SEXUALLY_EXPLICIT", e.HARM_CATEGORY_HARASSMENT = "HARM_CATEGORY_HARASSMENT", e.HARM_CATEGORY_DANGEROUS_CONTENT = "HARM_CATEGORY_DANGEROUS_CONTENT";
})(oc || (oc = {}));
var ic;
(function(e) {
  e.HARM_BLOCK_THRESHOLD_UNSPECIFIED = "HARM_BLOCK_THRESHOLD_UNSPECIFIED", e.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE", e.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE", e.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH", e.BLOCK_NONE = "BLOCK_NONE";
})(ic || (ic = {}));
var sc;
(function(e) {
  e.HARM_PROBABILITY_UNSPECIFIED = "HARM_PROBABILITY_UNSPECIFIED", e.NEGLIGIBLE = "NEGLIGIBLE", e.LOW = "LOW", e.MEDIUM = "MEDIUM", e.HIGH = "HIGH";
})(sc || (sc = {}));
var cc;
(function(e) {
  e.BLOCKED_REASON_UNSPECIFIED = "BLOCKED_REASON_UNSPECIFIED", e.SAFETY = "SAFETY", e.OTHER = "OTHER";
})(cc || (cc = {}));
var Wr;
(function(e) {
  e.FINISH_REASON_UNSPECIFIED = "FINISH_REASON_UNSPECIFIED", e.STOP = "STOP", e.MAX_TOKENS = "MAX_TOKENS", e.SAFETY = "SAFETY", e.RECITATION = "RECITATION", e.OTHER = "OTHER";
})(Wr || (Wr = {}));
var lc;
(function(e) {
  e.TASK_TYPE_UNSPECIFIED = "TASK_TYPE_UNSPECIFIED", e.RETRIEVAL_QUERY = "RETRIEVAL_QUERY", e.RETRIEVAL_DOCUMENT = "RETRIEVAL_DOCUMENT", e.SEMANTIC_SIMILARITY = "SEMANTIC_SIMILARITY", e.CLASSIFICATION = "CLASSIFICATION", e.CLUSTERING = "CLUSTERING";
})(lc || (lc = {}));
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hn extends Error {
  constructor(t) {
    super(`[GoogleGenerativeAI Error]: ${t}`);
  }
}
class uc extends Hn {
  constructor(t, n) {
    super(t), this.response = n;
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zb = "https://generativelanguage.googleapis.com", Wb = "v1", Yb = "0.2.1", Vb = "genai-js";
var Bt;
(function(e) {
  e.GENERATE_CONTENT = "generateContent", e.STREAM_GENERATE_CONTENT = "streamGenerateContent", e.COUNT_TOKENS = "countTokens", e.EMBED_CONTENT = "embedContent", e.BATCH_EMBED_CONTENTS = "batchEmbedContents";
})(Bt || (Bt = {}));
class nr {
  constructor(t, n, r, a) {
    this.model = t, this.task = n, this.apiKey = r, this.stream = a;
  }
  toString() {
    let t = `${zb}/${Wb}/${this.model}:${this.task}`;
    return this.stream && (t += "?alt=sse"), t;
  }
}
function Bb() {
  return `${Vb}/${Yb}`;
}
async function rr(e, t, n) {
  let r;
  try {
    if (r = await fetch(e.toString(), Object.assign(Object.assign({}, Ub(n)), { method: "POST", headers: {
      "Content-Type": "application/json",
      "x-goog-api-client": Bb(),
      "x-goog-api-key": e.apiKey
    }, body: t })), !r.ok) {
      let a = "";
      try {
        const o = await r.json();
        a = o.error.message, o.error.details && (a += ` ${JSON.stringify(o.error.details)}`);
      } catch {
      }
      throw new Error(`[${r.status} ${r.statusText}] ${a}`);
    }
  } catch (a) {
    const o = new Hn(`Error fetching from ${e.toString()}: ${a.message}`);
    throw o.stack = a.stack, o;
  }
  return r;
}
function Ub(e) {
  const t = {};
  if ((e == null ? void 0 : e.timeout) >= 0) {
    const n = new AbortController(), r = n.signal;
    setTimeout(() => n.abort(), e.timeout), t.signal = r;
  }
  return t;
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wi(e) {
  return e.text = () => {
    if (e.candidates && e.candidates.length > 0) {
      if (e.candidates.length > 1 && console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`), Ru(e.candidates[0]))
        throw new uc(`${Yr(e)}`, e);
      return Hb(e);
    } else if (e.promptFeedback)
      throw new uc(`Text not available. ${Yr(e)}`, e);
    return "";
  }, e;
}
function Hb(e) {
  var t, n, r, a;
  return !((a = (r = (n = (t = e.candidates) === null || t === void 0 ? void 0 : t[0].content) === null || n === void 0 ? void 0 : n.parts) === null || r === void 0 ? void 0 : r[0]) === null || a === void 0) && a.text ? e.candidates[0].content.parts[0].text : "";
}
const Gb = [Wr.RECITATION, Wr.SAFETY];
function Ru(e) {
  return !!e.finishReason && Gb.includes(e.finishReason);
}
function Yr(e) {
  var t, n, r;
  let a = "";
  if ((!e.candidates || e.candidates.length === 0) && e.promptFeedback)
    a += "Response was blocked", !((t = e.promptFeedback) === null || t === void 0) && t.blockReason && (a += ` due to ${e.promptFeedback.blockReason}`), !((n = e.promptFeedback) === null || n === void 0) && n.blockReasonMessage && (a += `: ${e.promptFeedback.blockReasonMessage}`);
  else if (!((r = e.candidates) === null || r === void 0) && r[0]) {
    const o = e.candidates[0];
    Ru(o) && (a += `Candidate was blocked due to ${o.finishReason}`, o.finishMessage && (a += `: ${o.finishMessage}`));
  }
  return a;
}
function Gn(e) {
  return this instanceof Gn ? (this.v = e, this) : new Gn(e);
}
function Kb(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []), a, o = [];
  return a = {}, i("next"), i("throw"), i("return"), a[Symbol.asyncIterator] = function() {
    return this;
  }, a;
  function i(h) {
    r[h] && (a[h] = function(u) {
      return new Promise(function(g, p) {
        o.push([h, u, g, p]) > 1 || s(h, u);
      });
    });
  }
  function s(h, u) {
    try {
      c(r[h](u));
    } catch (g) {
      m(o[0][3], g);
    }
  }
  function c(h) {
    h.value instanceof Gn ? Promise.resolve(h.value.v).then(f, l) : m(o[0][2], h);
  }
  function f(h) {
    s("next", h);
  }
  function l(h) {
    s("throw", h);
  }
  function m(h, u) {
    h(u), o.shift(), o.length && s(o[0][0], o[0][1]);
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fc = /^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
function qb(e) {
  const t = e.body.pipeThrough(new TextDecoderStream("utf8", { fatal: !0 })), n = Qb(t), [r, a] = n.tee();
  return {
    stream: Jb(r),
    response: Xb(a)
  };
}
async function Xb(e) {
  const t = [], n = e.getReader();
  for (; ; ) {
    const { done: r, value: a } = await n.read();
    if (r)
      return wi(Zb(t));
    t.push(a);
  }
}
function Jb(e) {
  return Kb(this, arguments, function* () {
    const n = e.getReader();
    for (; ; ) {
      const { value: r, done: a } = yield Gn(n.read());
      if (a)
        break;
      yield yield Gn(wi(r));
    }
  });
}
function Qb(e) {
  const t = e.getReader();
  return new ReadableStream({
    start(r) {
      let a = "";
      return o();
      function o() {
        return t.read().then(({ value: i, done: s }) => {
          if (s) {
            if (a.trim()) {
              r.error(new Hn("Failed to parse stream"));
              return;
            }
            r.close();
            return;
          }
          a += i;
          let c = a.match(fc), f;
          for (; c; ) {
            try {
              f = JSON.parse(c[1]);
            } catch {
              r.error(new Hn(`Error parsing JSON response: "${c[1]}"`));
              return;
            }
            r.enqueue(f), a = a.substring(c[0].length), c = a.match(fc);
          }
          return o();
        });
      }
    }
  });
}
function Zb(e) {
  const t = e[e.length - 1], n = {
    promptFeedback: t == null ? void 0 : t.promptFeedback
  };
  for (const r of e)
    if (r.candidates)
      for (const a of r.candidates) {
        const o = a.index;
        if (n.candidates || (n.candidates = []), n.candidates[o] || (n.candidates[o] = {
          index: a.index
        }), n.candidates[o].citationMetadata = a.citationMetadata, n.candidates[o].finishReason = a.finishReason, n.candidates[o].finishMessage = a.finishMessage, n.candidates[o].safetyRatings = a.safetyRatings, a.content && a.content.parts) {
          n.candidates[o].content || (n.candidates[o].content = {
            role: a.content.role || "user",
            parts: [{ text: "" }]
          });
          for (const i of a.content.parts)
            i.text && (n.candidates[o].content.parts[0].text += i.text);
        }
      }
  return n;
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pu(e, t, n, r) {
  const a = new nr(
    t,
    Bt.STREAM_GENERATE_CONTENT,
    e,
    /* stream */
    !0
  ), o = await rr(a, JSON.stringify(n), r);
  return qb(o);
}
async function Iu(e, t, n, r) {
  const a = new nr(
    t,
    Bt.GENERATE_CONTENT,
    e,
    /* stream */
    !1
  ), i = await (await rr(a, JSON.stringify(n), r)).json();
  return {
    response: wi(i)
  };
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function In(e, t) {
  let n = [];
  if (typeof e == "string")
    n = [{ text: e }];
  else
    for (const r of e)
      typeof r == "string" ? n.push({ text: r }) : n.push(r);
  return { role: t, parts: n };
}
function Ra(e) {
  return e.contents ? e : { contents: [In(e, "user")] };
}
function ew(e) {
  return typeof e == "string" || Array.isArray(e) ? { content: In(e, "user") } : e;
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dc = "SILENT_ERROR";
class tw {
  constructor(t, n, r, a) {
    this.model = n, this.params = r, this.requestOptions = a, this._history = [], this._sendPromise = Promise.resolve(), this._apiKey = t, r != null && r.history && (this._history = r.history.map((o) => {
      if (!o.role)
        throw new Error("Missing role for history item: " + JSON.stringify(o));
      return In(o.parts, o.role);
    }));
  }
  /**
   * Gets the chat history so far. Blocked prompts are not added to history.
   * Blocked candidates are not added to history, nor are the prompts that
   * generated them.
   */
  async getHistory() {
    return await this._sendPromise, this._history;
  }
  /**
   * Sends a chat message and receives a non-streaming
   * {@link GenerateContentResult}
   */
  async sendMessage(t) {
    var n, r;
    await this._sendPromise;
    const a = In(t, "user"), o = {
      safetySettings: (n = this.params) === null || n === void 0 ? void 0 : n.safetySettings,
      generationConfig: (r = this.params) === null || r === void 0 ? void 0 : r.generationConfig,
      contents: [...this._history, a]
    };
    let i;
    return this._sendPromise = this._sendPromise.then(() => Iu(this._apiKey, this.model, o, this.requestOptions)).then((s) => {
      var c;
      if (s.response.candidates && s.response.candidates.length > 0) {
        this._history.push(a);
        const f = Object.assign({
          parts: [],
          // Response seems to come back without a role set.
          role: "model"
        }, (c = s.response.candidates) === null || c === void 0 ? void 0 : c[0].content);
        this._history.push(f);
      } else {
        const f = Yr(s.response);
        f && console.warn(`sendMessage() was unsuccessful. ${f}. Inspect response object for details.`);
      }
      i = s;
    }), await this._sendPromise, i;
  }
  /**
   * Sends a chat message and receives the response as a
   * {@link GenerateContentStreamResult} containing an iterable stream
   * and a response promise.
   */
  async sendMessageStream(t) {
    var n, r;
    await this._sendPromise;
    const a = In(t, "user"), o = {
      safetySettings: (n = this.params) === null || n === void 0 ? void 0 : n.safetySettings,
      generationConfig: (r = this.params) === null || r === void 0 ? void 0 : r.generationConfig,
      contents: [...this._history, a]
    }, i = Pu(this._apiKey, this.model, o, this.requestOptions);
    return this._sendPromise = this._sendPromise.then(() => i).catch((s) => {
      throw new Error(dc);
    }).then((s) => s.response).then((s) => {
      if (s.candidates && s.candidates.length > 0) {
        this._history.push(a);
        const c = Object.assign({}, s.candidates[0].content);
        c.role || (c.role = "model"), this._history.push(c);
      } else {
        const c = Yr(s);
        c && console.warn(`sendMessageStream() was unsuccessful. ${c}. Inspect response object for details.`);
      }
    }).catch((s) => {
      s.message !== dc && console.error(s);
    }), i;
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function nw(e, t, n, r) {
  const a = new nr(t, Bt.COUNT_TOKENS, e, !1);
  return (await rr(a, JSON.stringify(Object.assign(Object.assign({}, n), { model: t })), r)).json();
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function rw(e, t, n, r) {
  const a = new nr(t, Bt.EMBED_CONTENT, e, !1);
  return (await rr(a, JSON.stringify(n), r)).json();
}
async function aw(e, t, n, r) {
  const a = new nr(t, Bt.BATCH_EMBED_CONTENTS, e, !1), o = n.requests.map((s) => Object.assign(Object.assign({}, s), { model: t }));
  return (await rr(a, JSON.stringify({ requests: o }), r)).json();
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ow {
  constructor(t, n, r) {
    this.apiKey = t, n.model.includes("/") ? this.model = n.model : this.model = `models/${n.model}`, this.generationConfig = n.generationConfig || {}, this.safetySettings = n.safetySettings || [], this.requestOptions = r || {};
  }
  /**
   * Makes a single non-streaming call to the model
   * and returns an object containing a single {@link GenerateContentResponse}.
   */
  async generateContent(t) {
    const n = Ra(t);
    return Iu(this.apiKey, this.model, Object.assign({ generationConfig: this.generationConfig, safetySettings: this.safetySettings }, n), this.requestOptions);
  }
  /**
   * Makes a single streaming call to the model
   * and returns an object containing an iterable stream that iterates
   * over all chunks in the streaming response as well as
   * a promise that returns the final aggregated response.
   */
  async generateContentStream(t) {
    const n = Ra(t);
    return Pu(this.apiKey, this.model, Object.assign({ generationConfig: this.generationConfig, safetySettings: this.safetySettings }, n), this.requestOptions);
  }
  /**
   * Gets a new {@link ChatSession} instance which can be used for
   * multi-turn chats.
   */
  startChat(t) {
    return new tw(this.apiKey, this.model, t, this.requestOptions);
  }
  /**
   * Counts the tokens in the provided request.
   */
  async countTokens(t) {
    const n = Ra(t);
    return nw(this.apiKey, this.model, n);
  }
  /**
   * Embeds the provided content.
   */
  async embedContent(t) {
    const n = ew(t);
    return rw(this.apiKey, this.model, n);
  }
  /**
   * Embeds an array of {@link EmbedContentRequest}s.
   */
  async batchEmbedContents(t) {
    return aw(this.apiKey, this.model, t, this.requestOptions);
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class iw {
  constructor(t) {
    this.apiKey = t;
  }
  /**
   * Gets a {@link GenerativeModel} instance for the provided model name.
   */
  getGenerativeModel(t, n) {
    if (!t.model)
      throw new Hn("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");
    return new ow(this.apiKey, t, n);
  }
}
const sw = ({ model: e = "gemini-pro" }) => k.useMemo(() => {
  const n = {}.GEMINI_API_KEY;
  return n ? new iw(n).getGenerativeModel({ model: e }) : null;
}, [e]), ju = (e) => {
  const t = Dr.getEntity(), n = L(!1), r = Zr("system.base"), a = sw({ model: "gemini-pro" }), o = mt("window/lang.enum");
  k.useEffect(() => {
    n.get && ($l(), n.set(!1));
  }, [r, n.get]);
  const i = k.useMemo(() => Tr(e, "normal", "cabab"), [e]), s = k.useMemo(() => o ? `${o}->${i}` : "", [o, i]), c = k.useMemo(() => {
    var l;
    return (l = t[s]) == null ? void 0 : l.value;
  }, [t, s]);
  return Ar(async () => {
    if (!(!o || c || !a || o == "en"))
      try {
        xr.upsert([
          {
            title: `loading translations for langId=${o}`,
            logId: o,
            type: "INFO"
          }
        ]);
        const { response: l } = await a.generateContent(`translate this text to ${o} :

${e}`);
        xr.upsert([
          {
            title: `translations for langId=${o} content it is ${X.getState().logs.ids.length}`,
            logId: o,
            type: "SUCC"
          }
        ]), n.set(!0), Dr.upsert([{ langId: s, value: l.text() }]);
      } catch (l) {
        xr.upsert([
          {
            title: l.message,
            logId: o,
            type: "ERR",
            category: "window"
          }
        ]);
      }
  }, [c, s, o, e, a]), k.useMemo(() => c || e, [c, e]);
};
function Kn({ content: e }) {
  const t = ju(e);
  return /* @__PURE__ */ S(je, { children: t });
}
function Q1({ component: e, text: t }) {
  const n = ju(t);
  return /* @__PURE__ */ S(je, { children: e({ text: n }) });
}
const xi = k.forwardRef(
  ({ focusId: e = De(30), id: t, children: n, onFocus: r, onBlur: a, style: o, className: i, ignoreOutline: s = !1, ...c }, f) => {
    const l = L(!1), m = oe();
    return /* @__PURE__ */ G(
      "div",
      {
        ref: f,
        tabIndex: 1,
        id: e,
        onFocus: (h) => {
          l.set(!0), r == null || r(h);
        },
        onBlur: (h) => {
          l.set(!1), a == null || a(h);
        },
        style: {
          ...o
        },
        className: V("relative", i),
        ...c,
        children: [
          n,
          /* @__PURE__ */ S(
            "div",
            {
              hidden: s,
              className: V(
                i,
                `
              inset-0
              absolute
              pointer-events-none
              border
              border-solid
              border-transparent
              block
              m-0
              p-0
              bg-transparent
              w-auto
              h-auto
            `
              ),
              style: {
                ...m(l.get && { borderColor: "primary" })
              }
            }
          )
        ]
      }
    );
  }
);
function Z1({ length: e = 4, starts: t = e, onSubmit: n }) {
  const r = oe();
  return /* @__PURE__ */ S(je, { children: Br(e).map((a, o) => /* @__PURE__ */ S(
    Gt,
    {
      style: {
        ...r({
          color: "starts.color"
        })
      },
      onClick: (i) => {
        n == null || n(o);
      },
      className: "transform hover:scale-150 transition-tansform duration-200",
      icon: t < a ? Om : Cm
    },
    a
  )) });
}
function cw({ className: e, alt: t, src: n, children: r, style: a, ...o }) {
  const i = oe(), s = L(!1);
  return k.useEffect(() => {
  }, []), /* @__PURE__ */ G(
    "div",
    {
      tabIndex: -1,
      ...o,
      className: V("overflow-hidden rounded-full w-[150px] h-[150px] border border-solid border-transparent transition-shadow duration-300 relative text-xs", e),
      style: {
        ...i(s.get && { borderColor: "primary" }),
        ...a
      },
      onFocus: () => {
        s.set(!0);
      },
      onBlur: () => {
        s.set(!1);
      },
      children: [
        n && /* @__PURE__ */ S("img", { src: n, className: V("absolute inset-0 w-full h-full object-cover"), draggable: !1 }),
        !n && /* @__PURE__ */ S("div", { className: "top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2", children: t }),
        /* @__PURE__ */ S("div", { className: "absolute inset-0 overflow-hidden", children: r })
      ]
    }
  );
}
function It() {
  return It = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, It.apply(this, arguments);
}
const lw = ["children", "options"];
var mc, pc;
(function(e) {
  e.blockQuote = "0", e.breakLine = "1", e.breakThematic = "2", e.codeBlock = "3", e.codeFenced = "4", e.codeInline = "5", e.footnote = "6", e.footnoteReference = "7", e.gfmTask = "8", e.heading = "9", e.headingSetext = "10", e.htmlBlock = "11", e.htmlComment = "12", e.htmlSelfClosing = "13", e.image = "14", e.link = "15", e.linkAngleBraceStyleDetector = "16", e.linkBareUrlDetector = "17", e.linkMailtoDetector = "18", e.newlineCoalescer = "19", e.orderedList = "20", e.paragraph = "21", e.ref = "22", e.refImage = "23", e.refLink = "24", e.table = "25", e.tableSeparator = "26", e.text = "27", e.textBolded = "28", e.textEmphasized = "29", e.textEscaped = "30", e.textMarked = "31", e.textStrikethroughed = "32", e.unorderedList = "33";
})(mc || (mc = {})), function(e) {
  e[e.MAX = 0] = "MAX", e[e.HIGH = 1] = "HIGH", e[e.MED = 2] = "MED", e[e.LOW = 3] = "LOW", e[e.MIN = 4] = "MIN";
}(pc || (pc = {}));
const gc = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, t) => (e[t.toLowerCase()] = t, e), { for: "htmlFor" }), hc = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, uw = ["style", "script"], fw = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, dw = /mailto:/i, mw = /\n{2,}$/, Du = /^(\s*>[\s\S]*?)(?=\n{2,})/, pw = /^ *> ?/gm, gw = /^ {2,}\n/, hw = /^(?:( *[-*_])){3,} *(?:\n *)+\n/, Lu = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/, $u = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, yw = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/, vw = /^(?:\n *)*\n/, bw = /\r\n?/g, ww = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, xw = /^\[\^([^\]]+)]/, Ew = /\f/g, Sw = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/, kw = /^\s*?\[(x|\s)\]/, Fu = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, zu = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Wu = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, Lo = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i, Ow = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, Yu = /^<!--[\s\S]*?(?:-->)/, _w = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, $o = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, Cw = /^\{.*\}$/, Tw = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, Aw = /^<([^ >]+@[^ >]+)>/, Nw = /^<([^ >]+:\/[^ >]+)>/, Mw = /-([a-z])?/gi, Vu = /^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, Rw = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, Pw = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, Iw = /^\[([^\]]*)\] ?\[([^\]]*)\]/, jw = /(\[|\])/g, Dw = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, Lw = /\t/g, $w = /(^ *\||\| *$)/g, Fw = /^ *:-+: *$/, zw = /^ *:-+ *$/, Ww = /^ *-+: *$/, aa = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)", Yw = new RegExp(`^([*_])\\1${aa}\\1\\1(?!\\1)`), Vw = new RegExp(`^([*_])${aa}\\1(?!\\1|\\w)`), Bw = new RegExp(`^==${aa}==`), Uw = new RegExp(`^~~${aa}~~`), Hw = /^\\([^0-9A-Za-z\s])/, Gw = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i, Kw = /^\n+/, qw = /^([ \t]*)/, Xw = /\\([^\\])/g, yc = / *\n+$/, Jw = /(?:^|\n)( *)$/, Ei = "(?:\\d+\\.)", Si = "(?:[*+-])";
function Bu(e) {
  return "( *)(" + (e === 1 ? Ei : Si) + ") +";
}
const Uu = Bu(1), Hu = Bu(2);
function Gu(e) {
  return new RegExp("^" + (e === 1 ? Uu : Hu));
}
const Qw = Gu(1), Zw = Gu(2);
function Ku(e) {
  return new RegExp("^" + (e === 1 ? Uu : Hu) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? Ei : Si) + " )[^\\n]*)*(\\n|$)", "gm");
}
const qu = Ku(1), Xu = Ku(2);
function Ju(e) {
  const t = e === 1 ? Ei : Si;
  return new RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)");
}
const Qu = Ju(1), Zu = Ju(2);
function vc(e, t) {
  const n = t === 1, r = n ? Qu : Zu, a = n ? qu : Xu, o = n ? Qw : Zw;
  return { match(i, s, c) {
    const f = Jw.exec(c);
    return f && (s.list || !s.inline && !s.simple) ? r.exec(i = f[1] + i) : null;
  }, order: 1, parse(i, s, c) {
    const f = n ? +i[2] : void 0, l = i[0].replace(mw, `
`).match(a);
    let m = !1;
    return { items: l.map(function(h, u) {
      const g = o.exec(h)[0].length, p = new RegExp("^ {1," + g + "}", "gm"), d = h.replace(p, "").replace(o, ""), y = u === l.length - 1, v = d.indexOf(`

`) !== -1 || y && m;
      m = v;
      const x = c.inline, E = c.list;
      let b;
      c.list = !0, v ? (c.inline = !1, b = d.replace(yc, `

`)) : (c.inline = !0, b = d.replace(yc, ""));
      const O = s(b, c);
      return c.inline = x, c.list = E, O;
    }), ordered: n, start: f };
  }, render: (i, s, c) => e(i.ordered ? "ol" : "ul", { key: c.key, start: i.type === "20" ? i.start : void 0 }, i.items.map(function(f, l) {
    return e("li", { key: l }, s(f, c));
  })) };
}
const e1 = new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), t1 = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, ef = [Du, Lu, $u, Fu, Wu, zu, Yu, Vu, qu, Qu, Xu, Zu], n1 = [...ef, /^[^\n]+(?:  \n|\n{2,})/, Lo, $o];
function r1(e) {
  return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function a1(e) {
  return Ww.test(e) ? "right" : Fw.test(e) ? "center" : zw.test(e) ? "left" : null;
}
function bc(e, t, n, r) {
  const a = n.inTable;
  n.inTable = !0;
  let o = e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce((s, c) => (c.trim() === "|" ? s.push(r ? { type: "26" } : { type: "27", text: c }) : c !== "" && s.push.apply(s, t(c, n)), s), []);
  n.inTable = a;
  let i = [[]];
  return o.forEach(function(s, c) {
    s.type === "26" ? c !== 0 && c !== o.length - 1 && i.push([]) : (s.type !== "27" || o[c + 1] != null && o[c + 1].type !== "26" || (s.text = s.text.trimEnd()), i[i.length - 1].push(s));
  }), i;
}
function o1(e, t, n) {
  n.inline = !0;
  const r = e[2] ? e[2].replace($w, "").split("|").map(a1) : [], a = e[3] ? function(i, s, c) {
    return i.trim().split(`
`).map(function(f) {
      return bc(f, s, c, !0);
    });
  }(e[3], t, n) : [], o = bc(e[1], t, n, !!a.length);
  return n.inline = !1, a.length ? { align: r, cells: a, header: o, type: "25" } : { children: o, type: "21" };
}
function wc(e, t) {
  return e.align[t] == null ? {} : { textAlign: e.align[t] };
}
function kt(e) {
  return function(t, n) {
    return n.inline ? e.exec(t) : null;
  };
}
function Ot(e) {
  return function(t, n) {
    return n.inline || n.simple ? e.exec(t) : null;
  };
}
function ct(e) {
  return function(t, n) {
    return n.inline || n.simple ? null : e.exec(t);
  };
}
function _n(e) {
  return function(t) {
    return e.exec(t);
  };
}
function i1(e, t, n) {
  if (t.inline || t.simple || n && !n.endsWith(`
`))
    return null;
  let r = "";
  e.split(`
`).every((o) => !ef.some((i) => i.test(o)) && (r += o + `
`, o.trim()));
  const a = r.trimEnd();
  return a == "" ? null : [r, a];
}
function Zt(e) {
  try {
    if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i))
      return;
  } catch {
    return null;
  }
  return e;
}
function xc(e) {
  return e.replace(Xw, "$1");
}
function Or(e, t, n) {
  const r = n.inline || !1, a = n.simple || !1;
  n.inline = !0, n.simple = !0;
  const o = e(t, n);
  return n.inline = r, n.simple = a, o;
}
function s1(e, t, n) {
  const r = n.inline || !1, a = n.simple || !1;
  n.inline = !1, n.simple = !0;
  const o = e(t, n);
  return n.inline = r, n.simple = a, o;
}
function c1(e, t, n) {
  const r = n.inline || !1;
  n.inline = !1;
  const a = e(t, n);
  return n.inline = r, a;
}
const Pa = (e, t, n) => ({ children: Or(t, e[1], n) });
function Ia() {
  return {};
}
function ja() {
  return null;
}
function l1(...e) {
  return e.filter(Boolean).join(" ");
}
function Da(e, t, n) {
  let r = e;
  const a = t.split(".");
  for (; a.length && (r = r[a[0]], r !== void 0); )
    a.shift();
  return r || n;
}
function u1(e = "", t = {}) {
  t.overrides = t.overrides || {}, t.slugify = t.slugify || r1, t.namedCodesToUnicode = t.namedCodesToUnicode ? It({}, hc, t.namedCodesToUnicode) : hc;
  const n = t.createElement || Ve.createElement;
  function r(u, g, ...p) {
    const d = Da(t.overrides, `${u}.props`, {});
    return n(function(y, v) {
      const x = Da(v, y);
      return x ? typeof x == "function" || typeof x == "object" && "render" in x ? x : Da(v, `${y}.component`, y) : y;
    }(u, t.overrides), It({}, g, d, { className: l1(g == null ? void 0 : g.className, d.className) || void 0 }), ...p);
  }
  function a(u) {
    u = u.replace(Sw, "");
    let g = !1;
    t.forceInline ? g = !0 : t.forceBlock || (g = Dw.test(u) === !1);
    const p = l(f(g ? u : `${u.trimEnd().replace(Kw, "")}

`, { inline: g }));
    for (; typeof p[p.length - 1] == "string" && !p[p.length - 1].trim(); )
      p.pop();
    if (t.wrapper === null)
      return p;
    const d = t.wrapper || (g ? "span" : "div");
    let y;
    if (p.length > 1 || t.forceWrapper)
      y = p;
    else {
      if (p.length === 1)
        return y = p[0], typeof y == "string" ? r("span", { key: "outer" }, y) : y;
      y = null;
    }
    return Ve.createElement(d, { key: "outer" }, y);
  }
  function o(u) {
    const g = u.match(fw);
    return g ? g.reduce(function(p, d, y) {
      const v = d.indexOf("=");
      if (v !== -1) {
        const x = function(_) {
          return _.indexOf("-") !== -1 && _.match(_w) === null && (_ = _.replace(Mw, function(A, M) {
            return M.toUpperCase();
          })), _;
        }(d.slice(0, v)).trim(), E = function(_) {
          const A = _[0];
          return (A === '"' || A === "'") && _.length >= 2 && _[_.length - 1] === A ? _.slice(1, -1) : _;
        }(d.slice(v + 1).trim()), b = gc[x] || x, O = p[b] = function(_, A) {
          return _ === "style" ? A.split(/;\s?/).reduce(function(M, D) {
            const ce = D.slice(0, D.indexOf(":"));
            return M[ce.trim().replace(/(-[a-z])/g, ($) => $[1].toUpperCase())] = D.slice(ce.length + 1).trim(), M;
          }, {}) : _ === "href" || _ === "src" ? Zt(A) : (A.match(Cw) && (A = A.slice(1, A.length - 1)), A === "true" || A !== "false" && A);
        }(x, E);
        typeof O == "string" && (Lo.test(O) || $o.test(O)) && (p[b] = Ve.cloneElement(a(O.trim()), { key: y }));
      } else
        d !== "style" && (p[gc[d] || d] = !0);
      return p;
    }, {}) : null;
  }
  const i = [], s = {}, c = { 0: { match: ct(Du), order: 1, parse: (u, g, p) => ({ children: g(u[0].replace(pw, ""), p) }), render: (u, g, p) => r("blockquote", { key: p.key }, g(u.children, p)) }, 1: { match: _n(gw), order: 1, parse: Ia, render: (u, g, p) => r("br", { key: p.key }) }, 2: { match: ct(hw), order: 1, parse: Ia, render: (u, g, p) => r("hr", { key: p.key }) }, 3: { match: ct($u), order: 0, parse: (u) => ({ lang: void 0, text: u[0].replace(/^ {4}/gm, "").replace(/\n+$/, "") }), render: (u, g, p) => r("pre", { key: p.key }, r("code", It({}, u.attrs, { className: u.lang ? `lang-${u.lang}` : "" }), u.text)) }, 4: { match: ct(Lu), order: 0, parse: (u) => ({ attrs: o(u[3] || ""), lang: u[2] || void 0, text: u[4], type: "3" }) }, 5: { match: Ot(yw), order: 3, parse: (u) => ({ text: u[2] }), render: (u, g, p) => r("code", { key: p.key }, u.text) }, 6: { match: ct(ww), order: 0, parse: (u) => (i.push({ footnote: u[2], identifier: u[1] }), {}), render: ja }, 7: { match: kt(xw), order: 1, parse: (u) => ({ target: `#${t.slugify(u[1])}`, text: u[1] }), render: (u, g, p) => r("a", { key: p.key, href: Zt(u.target) }, r("sup", { key: p.key }, u.text)) }, 8: { match: kt(kw), order: 1, parse: (u) => ({ completed: u[1].toLowerCase() === "x" }), render: (u, g, p) => r("input", { checked: u.completed, key: p.key, readOnly: !0, type: "checkbox" }) }, 9: { match: ct(t.enforceAtxHeadings ? zu : Fu), order: 1, parse: (u, g, p) => ({ children: Or(g, u[2], p), id: t.slugify(u[2]), level: u[1].length }), render: (u, g, p) => r(`h${u.level}`, { id: u.id, key: p.key }, g(u.children, p)) }, 10: { match: ct(Wu), order: 0, parse: (u, g, p) => ({ children: Or(g, u[1], p), level: u[2] === "=" ? 1 : 2, type: "9" }) }, 11: { match: _n(Lo), order: 1, parse(u, g, p) {
    const [, d] = u[3].match(qw), y = new RegExp(`^${d}`, "gm"), v = u[3].replace(y, ""), x = (E = v, n1.some((A) => A.test(E)) ? c1 : Or);
    var E;
    const b = u[1].toLowerCase(), O = uw.indexOf(b) !== -1, _ = { attrs: o(u[2]), noInnerParse: O, tag: (O ? b : u[1]).trim() };
    return p.inAnchor = p.inAnchor || b === "a", O ? _.text = u[3] : _.children = x(g, v, p), p.inAnchor = !1, _;
  }, render: (u, g, p) => r(u.tag, It({ key: p.key }, u.attrs), u.text || g(u.children, p)) }, 13: { match: _n($o), order: 1, parse: (u) => ({ attrs: o(u[2] || ""), tag: u[1].trim() }), render: (u, g, p) => r(u.tag, It({}, u.attrs, { key: p.key })) }, 12: { match: _n(Yu), order: 1, parse: () => ({}), render: ja }, 14: { match: Ot(t1), order: 1, parse: (u) => ({ alt: u[1], target: xc(u[2]), title: u[3] }), render: (u, g, p) => r("img", { key: p.key, alt: u.alt || void 0, title: u.title || void 0, src: Zt(u.target) }) }, 15: { match: kt(e1), order: 3, parse: (u, g, p) => ({ children: s1(g, u[1], p), target: xc(u[2]), title: u[3] }), render: (u, g, p) => r("a", { key: p.key, href: Zt(u.target), title: u.title }, g(u.children, p)) }, 16: { match: kt(Nw), order: 0, parse: (u) => ({ children: [{ text: u[1], type: "27" }], target: u[1], type: "15" }) }, 17: { match: (u, g) => g.inAnchor ? null : kt(Tw)(u, g), order: 0, parse: (u) => ({ children: [{ text: u[1], type: "27" }], target: u[1], title: void 0, type: "15" }) }, 18: { match: kt(Aw), order: 0, parse(u) {
    let g = u[1], p = u[1];
    return dw.test(p) || (p = "mailto:" + p), { children: [{ text: g.replace("mailto:", ""), type: "27" }], target: p, type: "15" };
  } }, 20: vc(r, 1), 33: vc(r, 2), 19: { match: ct(vw), order: 3, parse: Ia, render: () => `
` }, 21: { match: i1, order: 3, parse: Pa, render: (u, g, p) => r("p", { key: p.key }, g(u.children, p)) }, 22: { match: kt(Rw), order: 0, parse: (u) => (s[u[1]] = { target: u[2], title: u[4] }, {}), render: ja }, 23: { match: Ot(Pw), order: 0, parse: (u) => ({ alt: u[1] || void 0, ref: u[2] }), render: (u, g, p) => s[u.ref] ? r("img", { key: p.key, alt: u.alt, src: Zt(s[u.ref].target), title: s[u.ref].title }) : null }, 24: { match: kt(Iw), order: 0, parse: (u, g, p) => ({ children: g(u[1], p), fallbackChildren: g(u[0].replace(jw, "\\$1"), p), ref: u[2] }), render: (u, g, p) => s[u.ref] ? r("a", { key: p.key, href: Zt(s[u.ref].target), title: s[u.ref].title }, g(u.children, p)) : r("span", { key: p.key }, g(u.fallbackChildren, p)) }, 25: { match: ct(Vu), order: 1, parse: o1, render(u, g, p) {
    const d = u;
    return r("table", { key: p.key }, r("thead", null, r("tr", null, d.header.map(function(y, v) {
      return r("th", { key: v, style: wc(d, v) }, g(y, p));
    }))), r("tbody", null, d.cells.map(function(y, v) {
      return r("tr", { key: v }, y.map(function(x, E) {
        return r("td", { key: E, style: wc(d, E) }, g(x, p));
      }));
    })));
  } }, 27: { match: _n(Gw), order: 4, parse: (u) => ({ text: u[0].replace(Ow, (g, p) => t.namedCodesToUnicode[p] ? t.namedCodesToUnicode[p] : g) }), render: (u) => u.text }, 28: { match: Ot(Yw), order: 2, parse: (u, g, p) => ({ children: g(u[2], p) }), render: (u, g, p) => r("strong", { key: p.key }, g(u.children, p)) }, 29: { match: Ot(Vw), order: 3, parse: (u, g, p) => ({ children: g(u[2], p) }), render: (u, g, p) => r("em", { key: p.key }, g(u.children, p)) }, 30: { match: Ot(Hw), order: 1, parse: (u) => ({ text: u[1], type: "27" }) }, 31: { match: Ot(Bw), order: 3, parse: Pa, render: (u, g, p) => r("mark", { key: p.key }, g(u.children, p)) }, 32: { match: Ot(Uw), order: 3, parse: Pa, render: (u, g, p) => r("del", { key: p.key }, g(u.children, p)) } };
  t.disableParsingRawHTML === !0 && (delete c[11], delete c[13]);
  const f = function(u) {
    let g = Object.keys(u);
    function p(d, y) {
      let v = [], x = "";
      for (; d; ) {
        let E = 0;
        for (; E < g.length; ) {
          const b = g[E], O = u[b], _ = O.match(d, y, x);
          if (_) {
            const A = _[0];
            d = d.substring(A.length);
            const M = O.parse(_, p, y);
            M.type == null && (M.type = b), v.push(M), x = A;
            break;
          }
          E++;
        }
      }
      return v;
    }
    return g.sort(function(d, y) {
      let v = u[d].order, x = u[y].order;
      return v !== x ? v - x : d < y ? -1 : 1;
    }), function(d, y) {
      return p(function(v) {
        return v.replace(bw, `
`).replace(Ew, "").replace(Lw, "    ");
      }(d), y);
    };
  }(c), l = (m = function(u, g) {
    return function(p, d, y) {
      const v = u[p.type].render;
      return g ? g(() => v(p, d, y), p, d, y) : v(p, d, y);
    };
  }(c, t.renderRule), function u(g, p = {}) {
    if (Array.isArray(g)) {
      const d = p.key, y = [];
      let v = !1;
      for (let x = 0; x < g.length; x++) {
        p.key = x;
        const E = u(g[x], p), b = typeof E == "string";
        b && v ? y[y.length - 1] += E : E !== null && y.push(E), v = b;
      }
      return p.key = d, y;
    }
    return m(g, u, p);
  });
  var m;
  const h = a(e);
  return i.length ? r("div", null, h, r("footer", { key: "footer" }, i.map(function(u) {
    return r("div", { id: t.slugify(u.identifier), key: u.identifier }, u.identifier, l(f(u.footnote, { inline: !0 })));
  }))) : h;
}
const f1 = (e) => {
  let { children: t = "", options: n } = e, r = function(a, o) {
    if (a == null)
      return {};
    var i, s, c = {}, f = Object.keys(a);
    for (s = 0; s < f.length; s++)
      o.indexOf(i = f[s]) >= 0 || (c[i] = a[i]);
    return c;
  }(e, lw);
  return Ve.cloneElement(u1(t, n), r);
};
function tf() {
  const e = oe();
  return /* @__PURE__ */ S(
    "div",
    {
      className: "w-full h-[1px]",
      style: {
        ...e("borders")
      }
    }
  );
}
function d1({ state: e, config: t = {}, id: n }) {
  const r = k.useMemo(() => typeof e.get == "boolean" ? e.get : !1, [e.get]);
  k.useEffect(() => () => {
    o.set(!1);
  }, []);
  const a = oe(), o = L(!1);
  return /* @__PURE__ */ G("span", { className: "inline-flex items-center gap-1", children: [
    t.style == "checkbox" ? /* @__PURE__ */ S(
      "button",
      {
        onClick: () => {
          e.set((i) => !i);
        },
        onFocus: () => {
          o.set(!0);
        },
        onBlur: () => {
          o.set(!1);
        },
        id: n,
        style: {
          ...a(
            "checkbox.background",
            {
              borderColor: "borders"
            },
            o.get && { outlineColor: "primary" }
          )
        },
        className: V(`
            inline-flex
            w-[20px]
            h-[20px]
            items-center
            justify-center
            rounded-md
            border-solid
            border
            border-transparent
            outline-1
            -outline-offset-1
            outline-transparent
          `),
        children: /* @__PURE__ */ S(
          Kt,
          {
            iconClassName: V(
              `
              transform
              transition-transform
              duration-300
              scale-0
            `,
              r && "scale-100"
            ),
            icon: Ya
          }
        )
      }
    ) : /* @__PURE__ */ S(
      "button",
      {
        id: n,
        onFocus: () => o.set(!0),
        onBlur: () => o.set(!1),
        onClick: () => {
          e.set((i) => !i);
        },
        type: "button",
        className: V(`
            inline-block
            w-[40px]
            h-[20px]
            relative
            rounded-full
            shadow-lg
            border-solid
            border
            border-transparent
          `),
        style: {
          ...a(
            "checkbox.background",
            {
              borderColor: "borders"
            },
            o.get && { borderColor: "primary" }
          )
        },
        children: /* @__PURE__ */ S(
          "span",
          {
            className: V("absolute left-0 inline-flex items-center justify-center top-1/2 transform -translate-y-1/2 w-[20px] h-[20px] rounded-full duration-300 text-white", r && "left-1/2"),
            style: {
              ...a(r && "checkbox.true", !r && "checkbox.false")
            },
            children: /* @__PURE__ */ S(Gt, { icon: r ? Ya : Xn })
          }
        )
      }
    ),
    /* @__PURE__ */ S("label", { htmlFor: n, children: (r ? t == null ? void 0 : t.onActive : t == null ? void 0 : t.onDisactive) || "" })
  ] });
}
function ki({ value: e }) {
  const t = oe();
  return /* @__PURE__ */ S("div", { children: /* @__PURE__ */ S(
    f1,
    {
      options: {
        overrides: {
          hr() {
            return /* @__PURE__ */ S("div", { className: "my-2", children: /* @__PURE__ */ S(tf, {}) });
          },
          h1(n) {
            return /* @__PURE__ */ S("h1", { className: "text-6xl", children: n == null ? void 0 : n.children });
          },
          h2(n) {
            return /* @__PURE__ */ S("h1", { className: "text-5xl", children: n == null ? void 0 : n.children });
          },
          h3(n) {
            return /* @__PURE__ */ S("h1", { className: "text-4xl", children: n == null ? void 0 : n.children });
          },
          h4(n) {
            return /* @__PURE__ */ S("h1", { className: "text-3xl", children: n == null ? void 0 : n.children });
          },
          h5(n) {
            return /* @__PURE__ */ S("h1", { className: "text-2xl", children: n == null ? void 0 : n.children });
          },
          h6(n) {
            return /* @__PURE__ */ S("h1", { className: "text-xl", children: n == null ? void 0 : n.children });
          },
          code(n) {
            return /* @__PURE__ */ S(
              "code",
              {
                className: "px-2 py-1 border border-transparent border-solid rounded-md leading-[26px]",
                style: {
                  ...t("gray.opacity", {
                    borderColor: "borders"
                  })
                },
                children: n == null ? void 0 : n.children
              }
            );
          },
          input(n) {
            const r = L((n == null ? void 0 : n.checked) || !1);
            return (n == null ? void 0 : n.type) === "checkbox" ? /* @__PURE__ */ S(
              d1,
              {
                id: De(),
                state: r,
                config: {
                  style: "checkbox"
                }
              }
            ) : /* @__PURE__ */ S("input", { ...n });
          },
          img(n) {
            return /* @__PURE__ */ S("div", { className: "flex justify-center", children: /* @__PURE__ */ S(
              "div",
              {
                className: "rounded-lg sahdow-lg w-fit overflow-hidden",
                style: {
                  ...t({
                    boxShadow: pt([
                      {
                        colorId: "shadow.color"
                      }
                    ])
                  })
                },
                children: /* @__PURE__ */ S("img", { ...n })
              }
            ) });
          },
          p(n) {
            return /* @__PURE__ */ S("p", { className: "p-2", children: n == null ? void 0 : n.children });
          },
          a(n) {
            return /* @__PURE__ */ S(
              "a",
              {
                href: n == null ? void 0 : n.href,
                className: "hover:underline",
                style: {
                  ...t({
                    color: "primary"
                  })
                },
                children: n.children
              }
            );
          },
          table(n) {
            return /* @__PURE__ */ S(
              "div",
              {
                className: V(`
                    w-full
                    overflow-hidden
                    border
                    border-solid
                    border-transparent
                    my-2
                  `),
                style: {
                  ...t("gray.opacity", {
                    borderColor: "gray.opacity.2"
                  })
                },
                children: n.children
              }
            );
          },
          tr(n) {
            const r = k.createRef(), a = k.useMemo(() => {
              let o = r.current, i = 0;
              for (; o; )
                i++, o = o.previousElementSibling;
              return i;
            }, [r.current]);
            return /* @__PURE__ */ S(
              "div",
              {
                ref: r,
                style: {
                  ...t(a % 2 && "gray.opacity")
                },
                className: "flex justify-between items-center gap-x-1 px-1 py-1 border border-transparent border-solid w-full",
                children: n.children
              }
            );
          },
          td(n) {
            return /* @__PURE__ */ S("div", { className: "w-full", children: n == null ? void 0 : n.children });
          },
          tbody(n) {
            return /* @__PURE__ */ S("div", { children: n == null ? void 0 : n.children });
          },
          thead(n) {
            return /* @__PURE__ */ S("div", { children: n == null ? void 0 : n.children });
          },
          th(n) {
            return /* @__PURE__ */ S("div", { className: "w-full", children: n == null ? void 0 : n.children });
          }
        },
        namedCodesToUnicode: { le: "≤" }
      },
      children: e
    }
  ) });
}
function e0({ title: e, position: { x: t = "right", y: n = "bottom" } = { x: "right", y: "bottom" }, onMouseMove: r, onMouseLeave: a, children: o, canMouseOn: i = !1, ...s }) {
  const c = k.createRef();
  return k.useEffect(() => () => {
    wa(null), wr(null);
  }, []), /* @__PURE__ */ S(
    "div",
    {
      ref: c,
      onMouseMove: (f) => {
        e && (wa(e), wr([f.clientX, f.clientY]), ih(t), ch(n)), r == null || r(f);
      },
      onMouseLeave: (f) => {
        i || (wa(null), wr(null)), a == null || a(f);
      },
      ...s,
      children: o
    }
  );
}
function t0() {
  const e = ah(), t = oh(), n = sh(), r = lh(), a = oe();
  return /* @__PURE__ */ S(
    "div",
    {
      onTransitionEnd: () => {
        e || wr(null);
      },
      className: V(
        `
          fixed
          z-[1000000000000000000000]
          pointer-events-none
          opacity-0
          transition-opacity
          delay-300
          duration-500
        `,
        t && "opacity-100",
        n == "left" && "-translate-x-full",
        n == "center" && "-translate-x-1/2",
        r == "top" && "-translate-y-full",
        r == "center" && "-translate-y-1/2",
        (e || e == 0) && "opacity-100"
      ),
      style: {
        ...Bo(
          {
            left: "-1000px",
            top: "-2000px"
          },
          t && {
            left: `${t[0]}px`,
            top: `${t[1]}px`
          }
        )
      },
      children: /* @__PURE__ */ S(
        "div",
        {
          className: V(`
          border
          border-solid
          border-transparent
          rounded-lg
          m-3
          py-1
          px-2
        `),
          style: {
            ...a("secondry.background", {
              borderColor: "borders",
              boxShadow: pt([{ colorId: "shadow.color", blur: 30, size: 1, x: 0, y: 10 }])
            })
          },
          children: /* @__PURE__ */ S(ki, { value: String(e) })
        }
      )
    }
  );
}
var Fo, br = Pf;
if (process.env.NODE_ENV === "production")
  Fo = br.createRoot, br.hydrateRoot;
else {
  var Ec = br.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Fo = function(e, t) {
    Ec.usingClientEntryPoint = !0;
    try {
      return br.createRoot(e, t);
    } finally {
      Ec.usingClientEntryPoint = !1;
    }
  };
}
function m1() {
  Bl(), Cl(), Sl(), Kl(), dl(), Il(), jl(), Ml(), Dl(), pl(), Gl(), Fl(), Xl(), bl();
}
function p1() {
  const e = mt("window/dark.boolean"), t = nn.getOne("primary.background"), n = nn.getOne("text.color"), r = nn.getOne("bg.selection"), a = nn.getOne("text.selection");
  k.useEffect(() => {
    e != null && t && (document.body.style.backgroundColor = Ct(e, t));
  }, [t, e]), k.useEffect(() => {
    n && (document.body.style.color = Ct(!!e, n));
  }, [n, e]), k.useEffect(() => {
    var o;
    if (r && a) {
      const i = (o = document.styleSheets.item(0)) == null ? void 0 : o.insertRule(`
        ::selection {
          background-color: ${Ct(!!e, r)};
          color: ${Ct(!!e, a)};
        }
      `);
      return () => {
        var s;
        typeof i == "number" && ((s = document.styleSheets.item(0)) == null || s.deleteRule(i));
      };
    }
  }, [e, r, a]);
}
function g1() {
  const e = mt("preferences/font.enum");
  k.useEffect(() => {
    if (!e)
      return;
    const t = document.styleSheets.item(0);
    if (t)
      return t.insertRule(`* { font-family: ${e}; }`), () => {
        t.deleteRule(0);
      };
  }, [e]);
}
function h1() {
  k.useEffect(() => {
    function e() {
      Ze("local.isOnLine", navigator.onLine);
    }
    return e(), window.addEventListener("online", e), window.addEventListener("offline", e), () => {
      window.removeEventListener("online", e), window.removeEventListener("offline", e);
    };
  }, []);
}
function y1(e) {
  p1(), h1(), g1(), e == null || e();
}
const n0 = (e, t) => {
  window[e] = t;
}, v1 = ({ children: e }) => (y1(), m1(), k.useEffect(() => {
  tt.setAll(
    Object.entries(Nl).map(([t, { def: n, ...r }]) => ({
      ...r,
      settingId: t,
      def: n,
      value: n
    }))
  );
}, []), /* @__PURE__ */ S(je, { children: e })), r0 = (e) => {
  const t = document.createElement("div");
  t.classList.add("window"), document.body.appendChild(t);
  const n = Fo(t);
  return n.render(
    /* @__PURE__ */ S(k.StrictMode, { children: /* @__PURE__ */ S(Kg, { store: X, children: /* @__PURE__ */ S(v1, { children: typeof e == "function" ? /* @__PURE__ */ S(e, {}) : e }) }) })
  ), n;
};
function Nn({
  extends: e,
  // extends value from main redux store
  attributes: { value: t = "", ref: n, onChange: r, onFocus: a, onBlur: o, "aria-multiline": i = !1, onKeyDown: s, className: c, ...f } = {}
}) {
  let l, m;
  const h = L(!1);
  let u = "";
  e ? (l = Ce.useOneFeild(e, "value"), m = Ce.useOneFeild(e, "selection"), u = ti(l.get, m.get)) : (l = L(String(t)), m = L({
    start: 0,
    end: 0,
    direction: "forward"
  }), u = k.useMemo(() => {
    var v, x;
    return (x = l.get) == null ? void 0 : x.slice(0, (v = m.get) == null ? void 0 : v.end);
  }, [l.get, m.get])), k.useEffect(() => {
    var v, x;
    !i && ((v = l.get) != null && v.includes(`
`)) && l.set((x = l.get) == null ? void 0 : x.replaceAll(`
`, ""));
  }, [l.get]);
  const g = k.createRef(), p = k.useMemo(() => l.get || "", [l.get]), d = oe();
  return {
    InputElement: /* @__PURE__ */ S("div", { className: "relative flex items-center w-full", children: /* @__PURE__ */ S(
      "textarea",
      {
        id: e,
        ref: g,
        rows: p.split(`
`).length || 1,
        ...f,
        className: V(
          `
            p-2
            border
            border-solid
            border-transparent
            font-[inherit]
            resize-none
            whitespace-nowrap
            rounded-sm
            w-full
            text-xs
          `,
          c
        ),
        onFocus: (v) => {
          h.set(!0), a == null || a(v);
        },
        onBlur: (v) => {
          h.set(!1), o == null || o(v);
        },
        onChange: (v) => {
          l.set(v.target.value), r == null || r(v);
        },
        onKeyDown: async (v) => {
          s == null || s(v), await zo(200);
          const { selectionStart: x, selectionEnd: E, selectionDirection: b } = v.target;
          m.set({
            start: x,
            end: E,
            direction: b == "forward" ? "forward" : "backward"
          });
        },
        value: p,
        style: {
          ...d({
            borderColor: h.get ? "primary" : "borders",
            backgroundColor: "feild.background"
          }),
          ...f.style
        }
      }
    ) }),
    value: l,
    focused: h,
    inputRef: g,
    cursorValue: u,
    cursor: m
  };
}
function nf({ onValueChange: e, ...t }) {
  const { InputElement: n, value: r } = Nn({
    attributes: {
      ...t
    }
  });
  return k.useEffect(() => {
    t.value && (e == null || e(String(t.value)));
  }, [t.value]), k.useEffect(() => {
    e == null || e(r.get || "");
  }, [r.get]), n;
}
function a0({ state: e, id: t }) {
  const n = Qn.getOneFeild("addItemInArray", "value"), r = L(""), a = k.useMemo(() => Array.from(new Set(e.get)), [e.get]), o = oe(), i = k.useCallback(() => {
    a.includes(r.get) || r.get === "" || (e.set([...a, r.get]), r.set(""));
  }, [r.get, a, r.set, e.set]);
  return /* @__PURE__ */ G("div", { className: "array-feild", children: [
    /* @__PURE__ */ S("div", { className: "items", children: a.map((s, c) => /* @__PURE__ */ G(
      "div",
      {
        className: V(`
                group
                flex
                items-center
                gap-1
                px-2 py-1
                border
                border-solid
                duration-200
                rounded-sm
              `),
        style: {
          ...o({
            borderColor: "borders"
          })
        },
        children: [
          /* @__PURE__ */ S("span", { children: s }),
          /* @__PURE__ */ G("span", { className: "flex items-center", children: [
            /* @__PURE__ */ S(
              Ye,
              {
                className: "opacity-0 group-hover:opacity-100 transition-[opacity] duration-200",
                onClick: async () => {
                  await navigator.clipboard.writeText(s);
                },
                icon: _m
              }
            ),
            /* @__PURE__ */ S(
              Ye,
              {
                className: "opacity-0 group-hover:opacity-100 transition-[opacity] duration-200",
                onClick: () => {
                  a.splice(c, 1), e.set(a);
                },
                icon: Xn
              }
            )
          ] })
        ]
      },
      c
    )) }),
    /* @__PURE__ */ G("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ S("div", { className: "w-full", children: /* @__PURE__ */ S(
        nf,
        {
          value: r.get,
          placeholder: "write item...",
          id: t,
          onKeyDown: (s) => {
            !n || !new ft(n).test(s) || i();
          },
          spellCheck: !1,
          onValueChange: r.set
        }
      ) }),
      r.get && /* @__PURE__ */ S(vt, { onClick: i, children: /* @__PURE__ */ S(Kn, { content: "add" }) })
    ] })
  ] });
}
const b1 = k.forwardRef(({ children: e, onScroll: t, className: n, type: r = "normal", ...a }, o) => {
  const i = L(0), s = k.createRef(), c = (l) => {
    i.set(l.currentTarget.scrollTop), t && t(l);
  }, f = oe();
  return /* @__PURE__ */ G("div", { ...a, ref: o, className: "scroll-view", children: [
    /* @__PURE__ */ S("div", { "aria-label": "scrolled-view", className: V("overflow-y-auto h-full w-full", n), ref: s, onScroll: c, children: e }),
    /* @__PURE__ */ S(
      "div",
      {
        "data-scrolled": i.get >= 10,
        className: "scroll-shadow-view",
        style: {
          ...f(
            i.get >= 10 && {
              boxShadow: pt([
                {
                  x: 0,
                  y: 4,
                  size: 10,
                  blur: 10,
                  colorId: "shadow.color"
                }
              ])
            }
          )
        }
      }
    )
  ] });
}), Sc = (e, t) => `slot_${e}_${t}`;
function w1({ slotId: e, component: t, data: n, skipFn: r }) {
  const a = Ee.getOneFeild(e, "focused"), o = Ee.getOneFeild(e, "submited"), i = Ee.getOneFeild(e, "selected"), s = Ee.getOneFeild(e, "direction");
  ei(e, n);
  const c = k.useMemo(() => t, []);
  k.useEffect(() => {
    if (typeof a != "number")
      return;
    const l = document.getElementById(Sc(e, a));
    l && !qm(l) && Km(l, s == "backward" ? 0 : -1);
  }, [a, s]);
  const f = k.useMemo(() => {
    if (!r)
      return {};
    const l = {};
    return n.forEach((m, h) => {
      if (r)
        l[h] = !!r(m, h);
      else
        return !1;
    }), l;
  }, [r, n]);
  return k.useEffect(() => {
    Ee.setOneFeild(e, "skiped", f);
  }, [f]), /* @__PURE__ */ S(je, { children: n.map((l, m) => {
    const h = {
      isFocused: m == a,
      isSelected: !!(i != null && i[m]),
      isSubmited: m == o,
      isSkiped: !!(r && r(l, m))
    };
    return /* @__PURE__ */ S(
      c,
      {
        id: Sc(e, m),
        handelFocus: (u) => (g) => {
          Ee.setOneFeild(e, "focused", m), u == null || u(g);
        },
        handelSubmit: (u) => (g) => {
          Ee.setOneFeild(e, "submited", m), u == null || u(g);
        },
        handelSelect: (u) => (g) => {
        },
        tabIndex: h.isFocused ? 1 : -1,
        item: l,
        index: m,
        status: h
      },
      m
    );
  }) });
}
const La = (e) => `object_${e}`;
function o0({ state: e, id: t }) {
  const n = L(!1), r = k.useMemo(() => Object.entries(e.get || {}), [e.get]), a = k.useMemo(() => new ft("enter"), []), o = k.useMemo(() => new ft("escape"), []), {
    InputElement: i,
    inputRef: s,
    value: c
  } = Nn({
    attributes: {
      placeholder: "write key..",
      className: "p-1",
      onKeyDown(g) {
        var p;
        a.test(g) && ((p = h.current) == null || p.focus());
      }
    }
  }), f = k.useMemo(() => La(t), [t]), l = jr(r, f, "focused"), {
    InputElement: m,
    inputRef: h,
    value: u
  } = Nn({
    attributes: {
      className: "p-1",
      onKeyDown(g) {
        a.test(g) && (e.set((p) => ({
          ...p,
          [c.get]: u.get
        })), c.set(""), u.set(""), n.set(!1));
      },
      placeholder: "value ..."
    }
  });
  return k.useEffect(() => {
    var g;
    n.get && ((g = s.current) == null || g.focus());
  }, [n.get]), We(
    "object.deleteProp",
    (g) => {
      f == g.slotId && e.set((p) => {
        if (!(p != null && p[g.key]))
          return p;
        const { [g.key]: d, ...y } = p;
        return y;
      });
    },
    [r, f]
  ), /* @__PURE__ */ G("div", { children: [
    /* @__PURE__ */ G(xi, { className: "rounded-md", ignoreOutline: !l, children: [
      /* @__PURE__ */ S(
        w1,
        {
          component: ({ handelFocus: g, handelSubmit: p, index: d, item: [y, v], status: x }) => {
            const E = L(!1), { InputElement: b, inputRef: O } = Nn({
              attributes: {
                value: y,
                className: "p-0"
              }
            }), {
              InputElement: _,
              inputRef: A,
              value: M
            } = Nn({
              attributes: {
                value: v,
                onKeyDown($) {
                  a.test($) ? (e.set((ee) => {
                    const J = { ...ee };
                    return J[y] = M.get, J;
                  }), D.set(null)) : o.test($) && D.set(null);
                },
                onBlur() {
                  D.set(null);
                },
                className: "p-0"
              }
            }), D = L(null);
            k.useEffect(() => {
              var $, ee, J, I;
              D.get == "key" ? (($ = O.current) == null || $.focus(), (ee = O.current) == null || ee.select()) : D.get == "value" && ((J = A.current) == null || J.focus(), (I = A.current) == null || I.select());
            }, [D.get]);
            const ce = oe();
            return /* @__PURE__ */ G(
              "div",
              {
                onMouseEnter: ($) => E.set(!0),
                onMouseLeave: ($) => E.set(!1),
                onClick: p(),
                onPointerDown: g(),
                className: V("row rounded-md"),
                style: {
                  ...ce(
                    d % 2 ? "primary.background" : "secondry.background",
                    x.isFocused && {
                      borderColor: "primary"
                    },
                    x.isSubmited && "primary",
                    x.isSubmited && {
                      color: "primary.content"
                    }
                  )
                },
                children: [
                  /* @__PURE__ */ S("div", { children: /* @__PURE__ */ G(
                    "div",
                    {
                      onMouseEnter: ($) => E.set(!0),
                      onMouseLeave: ($) => E.set(!1),
                      className: V("w-[100px] flex gap-1 items-center justify-end px-2 invisible", (E.get || x.isFocused || x.isSubmited) && "visible"),
                      children: [
                        /* @__PURE__ */ S(
                          Ye,
                          {
                            icon: Xn,
                            onClick: () => {
                              at("object.deleteProp", {
                                key: y,
                                slotId: La(t)
                              });
                            }
                          }
                        ),
                        /* @__PURE__ */ S(
                          Ye,
                          {
                            icon: jm,
                            onClick: () => {
                              D.set("value");
                            }
                          }
                        )
                      ]
                    }
                  ) }),
                  D.get == "key" ? b : /* @__PURE__ */ S("div", { className: "w-full truncate", onDoubleClick: () => {
                  }, children: y }),
                  D.get == "value" ? _ : /* @__PURE__ */ S(
                    "div",
                    {
                      className: "w-full truncate",
                      onDoubleClick: () => {
                        D.set("value");
                      },
                      children: v
                    }
                  )
                ]
              }
            );
          },
          data: r,
          slotId: La(t)
        }
      ),
      n.get && /* @__PURE__ */ G("div", { className: "flex items-stretch w-full", children: [
        /* @__PURE__ */ S("div", { children: /* @__PURE__ */ S("div", { className: "w-[100px]" }) }),
        i,
        m
      ] })
    ] }),
    /* @__PURE__ */ S("div", { className: "flex justify-end p-1", children: /* @__PURE__ */ S(
      vt,
      {
        id: t,
        className: "px-3 py-1 rounded-md capitalize",
        onClick: () => {
          n.get || n.set(!0);
        },
        children: n.get ? "ok" : "add"
      }
    ) })
  ] });
}
function i0({ state: e, config: t = {}, id: n }) {
  k.useEffect(() => {
    typeof e.get == "number" && (typeof t.max == "number" && t.max < e.get ? e.set(t.max) : typeof t.min == "number" && t.min > e.get && e.set(t.min));
  }, [t.max, t.min, e.get]);
  const r = L(String(e.get)), a = k.createRef();
  k.useEffect(() => {
    var c;
    a.current && (a.current.value = ((c = e.get) == null ? void 0 : c.toString()) || "");
  }, [e.get, a.current]), k.useEffect(() => {
    if (!+r.get) {
      const c = document.getElementById(n);
      c == null || c.select();
    }
  }, [r.get, n]), We(
    "number.changeState",
    (c) => {
      if (c == n) {
        if (r.get.length) {
          const f = +r.get;
          e.set(f);
        } else
          e.set(null);
        Xi(n);
      }
    },
    [r.get, n]
  ), We(
    "number.cancelChangeState",
    (c) => {
      if (c == n) {
        const f = typeof e.get == "number" ? e.get.toString() : "";
        r.set(f), a.current && (a.current.value = f), Xi(n);
      }
    },
    [e.get, a, n]
  ), k.useEffect(() => {
    t.noConfirm && at("number.changeState", n);
  }, [r.get, t.noConfirm]);
  const o = L(!1), i = k.useMemo(() => !t.noConfirm && e.get != +r.get, [t.noConfirm, e.get, r.get]), s = oe();
  return /* @__PURE__ */ G(
    "div",
    {
      className: V(`
        relative
        rounded-md
        flex
        items-center
        gap-1
        w-full
      `),
      children: [
        /* @__PURE__ */ S("div", { className: "flex items-center w-full", children: /* @__PURE__ */ S(
          Zl,
          {
            ref: a,
            onFocus: (c) => {
              o.set(!0), c.currentTarget.select();
            },
            onBlur: () => {
              o.set(!1);
            },
            className: V(t.size == "small" ? "p-1" : "p-2", t.center && "text-center"),
            type: "number",
            id: n,
            min: t.min,
            max: t.max,
            placeholder: t.placeholder,
            onKeyDown: (c) => {
              i && c.key == "Enter" && (c.preventDefault(), c.stopPropagation(), c && at("number.changeState", n));
            },
            onValueChange: r.set
          }
        ) }),
        i && /* @__PURE__ */ G("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ S(
            vt,
            {
              className: "py-1",
              onClick: () => {
                at("number.cancelChangeState", n);
              },
              style: {
                ...s("gray.opacity", {
                  color: "text.color"
                })
              },
              children: /* @__PURE__ */ S(Kn, { content: "cancel" })
            }
          ),
          /* @__PURE__ */ S(
            vt,
            {
              className: "py-1",
              onClick: () => {
                at("number.changeState", n);
              },
              children: /* @__PURE__ */ S(Kn, { content: "change" })
            }
          )
        ] })
      ]
    }
  );
}
function s0({ state: e, config: t = {}, id: n }) {
  Qr(`${n}:input`);
  const r = Ce.useOneFeild(`${n}:input`, "value");
  We(
    "string.change",
    () => {
      const o = Va();
      o && [n, `${n}:change`].includes(o) && e.set(r.get || "");
    },
    [r.get, n]
  ), We(
    "string.cancel",
    () => {
      const o = Va();
      o && [n, `${n}:cancel`].includes(o) && r.set(e.get || "");
    },
    [e.get, n]
  );
  const a = oe();
  return /* @__PURE__ */ G("div", { className: "flex justify-between items-center gap-3", children: [
    /* @__PURE__ */ S(
      Zl,
      {
        maxLength: t.maxLength,
        minLength: t.minLength,
        type: t.locked ? "password" : "text",
        id: n,
        className: "text-xs",
        value: r.get,
        placeholder: t.hint || `provide value for ${n}`,
        onValueChange: r.set
      }
    ),
    (e.get || "") != (r.get || "") && /* @__PURE__ */ G("div", { className: "flex items-cente gap-x-2", children: [
      /* @__PURE__ */ S(
        vt,
        {
          className: "py-1",
          id: `${n}:cancel`,
          onClick: () => {
            at("string.cancel");
          },
          style: {
            ...a("gray.opacity.2")
          },
          children: "cancel"
        }
      ),
      /* @__PURE__ */ S(
        vt,
        {
          className: "py-1",
          id: `${n}:change`,
          onClick: () => {
            at("string.change");
          },
          children: "change"
        }
      )
    ] })
  ] });
}
function x1({ content: e }) {
  const n = {
    ...oe()({
      backgroundColor: "gray.opacity",
      borderColor: "gray.opacity.2"
    })
  };
  return /* @__PURE__ */ G(
    "div",
    {
      style: n,
      className: V(`
        rounded-[4px]
        border-solid
        border-transparent
        border-b-4
        border-x
        border-t
        px-1
      `),
      children: [
        /control/gi.test(e) && "ctrl",
        /shift/gi.test(e) && "shift",
        [/control/gi, /shift/gi].every((r) => !r.test(e)) && e
      ]
    }
  );
}
function E1({ shortcut: e = [], className: t, ...n }) {
  const r = typeof e == "string" ? [e] : e;
  return /* @__PURE__ */ S(
    "span",
    {
      ...n,
      className: V(
        `
        capitalize
        items-center
        gap-x-2
        truncate
        mx-1
      `,
        t
      ),
      children: /* @__PURE__ */ S(
        Un,
        {
          list: r.map((a, o) => {
            const i = a.split("+");
            return /* @__PURE__ */ S("span", { className: "inline-flex items-center gap-x-[1px]", children: /* @__PURE__ */ S(
              Un,
              {
                list: i.map((s, c) => /* @__PURE__ */ S(x1, { content: s }, c)),
                joinComponent: /* @__PURE__ */ S("span", { children: "+" })
              }
            ) }, o);
          }),
          joinComponent: /* @__PURE__ */ S("span", { className: "mx-1", children: "Or" })
        }
      )
    }
  );
}
function S1({
  className: e,
  multiLines: t = !1,
  onChange: n,
  onKeyDown: r,
  onSelect: a,
  onSelectionChange: o,
  onValueChange: i,
  onFocus: s,
  onBlur: c,
  propositions: f,
  selection: l,
  style: m,
  tabSize: h = 4,
  supportTab: u = !1,
  hidden: g,
  acceptKeys: p,
  pattern: d,
  ...y
}) {
  var $, ee, J;
  const v = k.createRef(), x = oi(), E = k.useMemo(() => $n.join({ commandId: "input.completeWord" }, x, "commandId->command"), [x]), b = oe(), O = k.createRef(), _ = L(0), A = k.useMemo(() => {
    var I, q;
    return (q = (I = y.value) == null ? void 0 : I.toString().match(/[^ ]*$/gi)) == null ? void 0 : q[0];
  }, [y.value]), M = k.useMemo(() => {
    const I = (f == null ? void 0 : f.filter((q) => A && q.length != (A == null ? void 0 : A.length) && q.startsWith(A))) || [];
    return Wo(I).value;
  }, [f, A]), D = L(!1);
  k.useEffect(() => {
    O.current && (O.current.scrollTop = _.get);
  }, [_.get]), k.useEffect(() => () => {
    Ze("input.focusedHasProposition", !1), Ze("input.supportTab", !1), D.set(!1);
  }, []), k.useEffect(() => {
    !v.current || !l || v.current.setSelectionRange(l.start, l.end, l.direction);
  }, [v.current, l]);
  const ce = k.useCallback((I) => {
    o == null || o({
      start: I.currentTarget.selectionStart,
      end: I.currentTarget.selectionEnd,
      direction: I.currentTarget.selectionDirection
    });
  }, []);
  return k.useEffect(() => {
    Ze("input.focusedHasProposition", !!(D.get && M));
  }, [D.get, M]), k.useEffect(() => {
    Ze("input.supportTab", D.get && u);
  }, [u, D.get]), We(
    "input.tab",
    () => {
      if (!D.get)
        return;
      const I = v.current;
      if (!I)
        return;
      const { selectionStart: q, selectionEnd: le, value: xe } = I, Se = q, C = le, N = xe.slice(0, q), Y = xe.slice(le), F = " ".repeat(h);
      I.value = N + F + Y, I.setSelectionRange(Se + h, C + h, "forward"), i == null || i(I.value), o == null || o({
        start: I.selectionStart,
        end: I.selectionEnd,
        direction: I.selectionDirection
      });
    },
    [v, D.get, o, i]
  ), We(
    "input.completeWord",
    () => {
      D.get && v.current && (v.current.value = v.current.value.replace(/[^ ]+$/gi, "") + M + " ", i == null || i(v.current.value));
    },
    [v, D.get, M, i]
  ), We(
    "input.selectLine",
    () => {
      if (!D.get || !v.current)
        return;
      const I = v.current, { selectionStart: q, selectionEnd: le, value: xe } = I, Se = xe.slice(0, q), C = xe.slice(le), N = Se.lastIndexOf(`
`) + 1;
      let Y = C.indexOf(`
`);
      Y === -1 && (Y = C.length), I.setSelectionRange(N, le + Y, "forward"), o == null || o({
        start: I.selectionStart,
        end: I.selectionEnd,
        direction: I.selectionDirection
      });
    },
    [v, D.get, o]
  ), We(
    "input.addLineBellow",
    () => {
      if (!D.get)
        return;
      const I = v.current;
      if (!I)
        return;
      const { selectionStart: q, selectionEnd: le, value: xe } = I, Se = xe.slice(0, q), C = xe.slice(le), N = Se.lastIndexOf(`
`) + 1;
      let Y = C.indexOf(`
`);
      Y === -1 && (Y = C.length);
      const F = xe.slice(N, le + Y);
      I.value = Se + `
` + F + C, I.setSelectionRange(q + F.length + 1, le + F.length + 1, "forward"), i == null || i(I.value), o == null || o({
        start: I.selectionStart,
        end: I.selectionEnd,
        direction: I.selectionDirection
      });
    },
    [v, D.get, o, i]
  ), /* @__PURE__ */ G("div", { className: "relative flex w-full h-full", hidden: g, children: [
    /* @__PURE__ */ S(
      "textarea",
      {
        onScroll: (I) => {
          _.set(I.currentTarget.scrollTop);
        },
        ...y,
        onFocus: (I) => {
          D.set(!0), s == null || s(I);
        },
        onBlur: (I) => {
          D.set(!1), c == null || c(I);
        },
        style: {
          ...m,
          ...b({
            caretColor: "text.color"
          }),
          color: "transparent"
        },
        className: V(e, "font-[inherit] selection:text-transparent selection:bg-transparent"),
        spellCheck: !1,
        onSelect: (I) => {
          ce(I), a == null || a(I);
        },
        ref: v,
        onKeyDown: (I) => {
          !t && I.key == "Enter" && I.preventDefault();
          const q = ft.fromEvent(I);
          p && p.some((le) => new RegExp(le, "igm").test(q)) && I.preventDefault(), r == null || r(I);
        },
        onChange: (I) => {
          n == null || n(I), i == null || i(I.currentTarget.value);
        }
      }
    ),
    /* @__PURE__ */ S("div", { ref: O, className: V(e, "absolute inset-0 pointer-events-none overflow-y-auto overflow-x-hidden"), children: /* @__PURE__ */ G(
      "pre",
      {
        className: "font-[inherit] text-wrap",
        style: {
          ...b({
            color: "text.color"
          })
        },
        children: [
          /* @__PURE__ */ S("span", { children: ($ = y.value) == null ? void 0 : $.toString().slice(0, l == null ? void 0 : l.start) }),
          l && /* @__PURE__ */ S(
            "span",
            {
              className: "rounded-sm",
              style: {
                ...b("bg.selection", {
                  color: "text.selection"
                })
              },
              children: (ee = y.value) == null ? void 0 : ee.toString().slice(l == null ? void 0 : l.start, l == null ? void 0 : l.end)
            }
          ),
          l && /* @__PURE__ */ S("span", { children: (J = y.value) == null ? void 0 : J.toString().slice(l.end) }),
          typeof A == "string" && M && /* @__PURE__ */ G(je, { children: [
            /* @__PURE__ */ S(
              "span",
              {
                style: {
                  ...b({
                    color: "autoCompleteInput"
                  })
                },
                children: M.replace(A, "")
              }
            ),
            !!E.length && /* @__PURE__ */ S(E1, { shortcut: E.map(({ value: I }) => I) })
          ] })
        ]
      }
    ) })
  ] });
}
function c0({
  inputName: e,
  selectWhenFocusIn: t,
  placeholder: n,
  controlsPosition: r = "bottom",
  className: a,
  value: o,
  rows: i,
  style: s,
  controls: c,
  onFocus: f,
  onBlur: l,
  acceptHistory: m,
  propositions: h,
  ...u
}) {
  const g = Ce.getOneFeild(e, "value"), p = Ce.getOneFeild(e, "selection"), d = Ce.useOneFeild(e, "history"), y = oe(), v = L(!1);
  Hm(
    () => {
      !m && !g || d.set((E) => E ? [...E, g] : [g]);
    },
    [g, m],
    2e3
  ), Qr(e), k.useEffect(() => {
    Ce.setOneFeild(e, "controls", c || {});
  }, [c, e]);
  const x = k.useMemo(() => Object.entries(c || {}).map(([E, b]) => {
    try {
      const _ = (g == null ? void 0 : g.match(new RegExp(E, "ig"))) ? "succ" : "err";
      return b[_] ? {
        type: _,
        content: b[_]
      } : void 0;
    } catch (O) {
      qe.warn("expression not correct", O);
      return;
    }
  }).filter(Boolean).map((E) => E), [g, c]);
  return /* @__PURE__ */ G("div", { className: "relative flex items-center w-full h-full", children: [
    /* @__PURE__ */ S(
      S1,
      {
        placeholder: `${n || ""}${v.get ? "..." : ""}`,
        propositions: h,
        className: V(
          `
            p-2
            border
            border-solid
            border-transparent
            font-[inherit]
            resize-none
            rounded-sm
            w-full
            text-xs
          `,
          a
        ),
        onFocus: (E) => {
          t && E.currentTarget.select(), v.set(!0), f == null || f(E);
        },
        onBlur: (E) => {
          v.set(!1), l == null || l(E);
        },
        value: g,
        onValueChange: (E) => {
          Ce.setOneFeild(e, "value", E);
        },
        selection: p,
        onSelectionChange: (E) => {
          Ce.setOneFeild(e, "selection", E);
        },
        style: {
          ...y({
            borderColor: v.get ? "primary" : "borders",
            backgroundColor: "feild.background"
          }),
          ...s
        },
        title: void 0,
        rows: i || 1,
        id: e,
        ...u
      }
    ),
    v.get && !!x.length && /* @__PURE__ */ S(
      "div",
      {
        className: V(
          `
              z-[100000000000000000000000000000000000000]
              rounded-md
              absolute
              right-0
              border
              border-solid
              border-transparent
              text-xs
              my-1
              max-w-full
              w-fit
            `,
          r == "top" ? "bottom-full" : "top-full"
        ),
        style: {
          ...y("primary.background", {
            borderColor: "borders"
          })
        },
        children: /* @__PURE__ */ S(
          Un,
          {
            list: x.map(({ content: E, type: b }, O) => {
              const _ = b == "err" ? Bm : Ya;
              return /* @__PURE__ */ G("div", { className: "flex items-center gap-x-2 p-2", children: [
                /* @__PURE__ */ S(
                  Gt,
                  {
                    style: {
                      ...y(
                        b == "err" && {
                          color: "warning.text"
                        },
                        b == "succ" && {
                          color: "success.text"
                        }
                      )
                    },
                    icon: _
                  }
                ),
                E && /* @__PURE__ */ S(ki, { value: E })
              ] }, O);
            }),
            joinComponent: /* @__PURE__ */ S(tf, {})
          }
        )
      }
    )
  ] });
}
function l0({ state: e, config: t = {}, id: n }) {
  var i, s;
  const r = oe(), a = (i = t.properties) == null ? void 0 : i.includes("openDirectory"), o = (s = t.properties) == null ? void 0 : s.includes("openFile");
  return k.useEffect(() => {
    try {
      if (!e.get)
        return;
      e.set(null);
    } catch {
    }
  }, [e.get, o, a]), /* @__PURE__ */ G("div", { className: "relative flex items-center gap-1 w-full", children: [
    /* @__PURE__ */ S("div", { className: "relative w-full", children: /* @__PURE__ */ S(
      "span",
      {
        className: "inline-block px-2 py-1 rounded-md",
        style: {
          ...r("gray.opacity")
        },
        children: /* @__PURE__ */ S(Mu, { href: e.get ?? void 0, children: e.get || "no provided" })
      }
    ) }),
    /* @__PURE__ */ G("div", { className: "flex items-center gap-x-1 tools", children: [
      t.nullable && /* @__PURE__ */ S(
        Ye,
        {
          onClick: () => {
            e.set(null);
          },
          icon: Tm
        }
      ),
      /* @__PURE__ */ S(
        Ye,
        {
          id: `${n}:select`,
          icon: zc,
          onClick: async () => {
          }
        }
      )
    ] })
  ] });
}
const k1 = k.memo(
  ({ value: e }) => {
    const t = oe();
    return /* @__PURE__ */ S(
      "div",
      {
        "data-scrolled": e >= 10,
        className: "-top-[20px] absolute inset-x-0 h-[20px]",
        style: {
          ...t(
            e >= 10 && {
              boxShadow: pt([
                {
                  x: 0,
                  y: 4,
                  size: 10,
                  blur: 10,
                  colorId: "shadow.color"
                }
              ])
            }
          )
        }
      }
    );
  },
  (e, t) => {
    const n = e.value > 10, r = t.value > 10;
    return n == r;
  }
), O1 = k.memo(
  ({ onChangeScrollBarValue: e, height: t, heightPercantage: n, topScroll: r }) => {
    const a = oe(), o = L(!1);
    return /* @__PURE__ */ S(
      "div",
      {
        onMouseEnter: () => {
          o.set(!0);
        },
        onMouseLeave: () => {
          o.set(!1);
        },
        className: V("absolute right-0 w-[5px] h-full inset-y-0 transition-[width] duration-300", o.get && "w-[10px]"),
        children: /* @__PURE__ */ S(
          "div",
          {
            className: V("w-full transition-[top] duration-100 inset-x-0 absolute rounded-ss-md rounded-es-md"),
            style: {
              ...a("gray.opacity.2"),
              ...Bo({
                height: `${n}%`,
                top: `${r}%`
              })
            },
            onMouseDown: (i) => {
              const s = i.clientY, c = r, f = (m) => {
                const h = m.clientY - s, u = t - n, g = h / t * u, p = c + g;
                e(p);
              }, l = () => {
                document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", l);
              };
              document.addEventListener("mousemove", f), document.addEventListener("mouseup", l);
            }
          }
        )
      }
    );
  },
  (e, t) => !(e.height != t.height || e.heightPercantage != t.heightPercantage || e.topScroll != t.topScroll)
), rf = ({ onContentChange: e, ...t }) => {
  const n = k.createRef(), r = L(null);
  k.useEffect(() => {
    const o = n.current;
    if (o) {
      const i = () => {
        const l = o.getBoundingClientRect();
        r.set(l);
      };
      i();
      const s = new ResizeObserver(i), c = new MutationObserver(i), f = new IntersectionObserver(i);
      return s.observe(o, { box: "border-box" }), s.observe(o, { box: "content-box" }), s.observe(o, { box: "device-pixel-content-box" }), c.observe(o, { attributes: !0, subtree: !0, characterData: !0, childList: !0 }), f.observe(o), addEventListener("resize", i), () => {
        s.disconnect(), c.disconnect(), f.disconnect(), removeEventListener("resize", i);
      };
    }
  }, [n.current]), k.useEffect(() => {
    r.get && (e == null || e(r.get));
  }, [r.get]);
  const a = k.useMemo(() => {
    if (!r.get)
      return {};
    const { bottom: o, height: i, left: s, right: c, top: f, width: l, x: m, y: h } = r.get;
    return {
      bottom: o,
      height: i,
      left: s,
      right: c,
      top: f,
      width: l,
      x: m,
      y: h
    };
  }, [r.get]);
  return /* @__PURE__ */ S(
    "div",
    {
      ...t,
      "data-pos": Object.entries(a).map(([o, i]) => `${o}=${i}`).join(","),
      ref: n
    }
  );
};
function _1({ focusId: e, itemSize: t, slotId: n, component: r, handelSkip: a, data: o, countLastItems: i = 3, overflow: { top: s = 0, bottom: c = 0 } = { top: 0, bottom: 0 } }) {
  const f = Ee.getOne(n), l = L(0), m = L(0);
  let h = Ee.getOneFeild(n, "focused");
  ei(n, o), k.useEffect(() => {
    Ee.setOneFeild(n, "length", o.length), o.length || _l(n);
  }, [o]), k.useEffect(() => {
    typeof h == "number" && o.length <= h && Ee.setOneFeild(n, "focused", o.length - 1);
  }, [h, o]), k.useEffect(() => {
    let b = null;
    const O = () => {
      if (b = b || document.getElementById(n), !b)
        return;
      const A = b.getBoundingClientRect().height;
      m.set(A);
    };
    O();
    const _ = setInterval(O, 1e3);
    return () => {
      clearInterval(_);
    };
  }, []);
  const u = L(!1);
  k.useEffect(() => {
    u.set(!1);
  }, [h]), k.useEffect(() => {
    if ([u.get, typeof h != "number", h >= o.length, m.get < t].some(Boolean))
      return;
    const b = l.get <= h * t, O = (h + 1) * t <= l.get + m.get;
    if (O && b)
      return;
    let _;
    h < 0 ? h = 0 : h > (_ = Math.abs(o.length - i)) && (h = _), O || (h = h + 1 - m.get / t);
    const A = t * h;
    l.set(A);
  }, [h, o, i, l.get, m.get, u.get]);
  const g = mt("preferences/fastScrollKey.enum"), p = k.useMemo(() => t * o.length, [t, o]), d = k.useMemo(() => p + t * i, [p, t, i]), y = k.useMemo(() => m.get * 100 / d, [d, m.get]), v = k.useMemo(() => l.get * 100 / d, [d, l.get]), x = mt("window/scroll/animation.boolean"), E = k.useMemo(() => r, []);
  return /* @__PURE__ */ S(xi, { focusId: e, className: "w-full h-full", ignoreOutline: typeof h == "number", id: n, children: /* @__PURE__ */ G(
    rf,
    {
      onContentChange: (b) => {
        m.set(b.height);
      },
      className: "relative h-full overflow-hidden",
      onWheel: (b) => {
        if (y < 100) {
          let O = !1;
          g == "alt" ? O = b.altKey : g == "control" ? O = b.ctrlKey : g == "shift" && (O = b.shiftKey), u.set(!0), l.set((_) => (_ += b.deltaY * (O ? 0.6 : 0.1), _ < 0 ? 0 : Math.min(_, (o.length + i) * t - m.get)));
        }
      },
      children: [
        /* @__PURE__ */ S(
          "div",
          {
            className: V("absolute inset-x-0", x && "transition-[top,left]"),
            style: {
              top: -l.get,
              height: p
            },
            children: o.map((b, O) => {
              var M;
              const A = t * O - l.get;
              if (Cr(-(s + 1) * t, A, A + t, m.get + (c + 1) * t)) {
                const D = {
                  isFocused: O == (f == null ? void 0 : f.focused),
                  isSelected: !!((M = f == null ? void 0 : f.selected) != null && M[O]),
                  isSubmited: O == (f == null ? void 0 : f.submited),
                  isSkiped: !!(a && a({
                    data: b,
                    index: O
                  }))
                }, ce = {
                  height: t,
                  position: "absolute",
                  top: t * O,
                  insetInline: "0px"
                };
                return /* @__PURE__ */ S(E, { status: D, index: O, data: b, style: ce, handel: {
                  focus() {
                    Ee.setOneFeild(n, "focused", O);
                  },
                  select(ee, J) {
                    if (ee)
                      Ee.setOneFeild(n, "selected", {
                        [O]: J
                      });
                    else {
                      if (!(f != null && f.selected))
                        return;
                      Ee.setOneFeild(n, "selected", {
                        ...f.selected,
                        [O]: J
                      });
                    }
                  },
                  submit() {
                    Ee.setOneFeild(n, "submited", O);
                  },
                  skip(ee, J) {
                    ee && Ee.setOneFeild(n, "skiped", { [O]: J });
                  }
                } }, O);
              }
            })
          }
        ),
        y <= 100 && /* @__PURE__ */ S(O1, { height: m.get, onChangeScrollBarValue: l.set, heightPercantage: y, topScroll: v }),
        /* @__PURE__ */ S(k1, { value: l.get })
      ]
    }
  ) });
}
function u0({ data: e, deps: t, itemSize: n, Render: r }) {
  const [a, o] = k.useState(0), i = k.useMemo(() => e ? e.reduce((m, h, u) => m + n(h, u) || 0, 0) : 0, [e, n]), [s, c] = k.useState(null), f = k.useMemo(() => {
    const m = e || [];
    let h = 0;
    const u = [];
    for (let g = 0; g < m.length; g++) {
      const p = m[g], d = n(p, g), y = h + d;
      u.push({
        height: d,
        top: h,
        bottom: y
      }), h = y;
    }
    return u;
  }, [e, n]), l = k.useMemo(() => (s == null ? void 0 : s.height) || 0, [s]);
  return /* @__PURE__ */ S(
    rf,
    {
      onContentChange: ({ x: m, y: h, left: u, right: g, bottom: p, height: d, top: y, width: v }) => {
        c({ x: m, y: h, left: u, right: g, bottom: p, height: d, top: y, width: v });
      },
      className: V(`
        h-full
        w-full
        relative
      `),
      onWheel: (m) => {
        o((h) => (h += m.deltaY * 0.6, h < 0 ? 0 : Math.min(h, i - l)));
      },
      children: /* @__PURE__ */ S(
        "div",
        {
          className: V(`
          absolute
          inset-x-0
        `),
          style: {
            height: `${i}px`,
            top: `${-1 * a}px`
          },
          children: e == null ? void 0 : e.map((m, h) => {
            const u = f[h] || { top: 0, bottom: 0 };
            if (Cr(a, u.bottom) && Cr(u.top, a + l))
              return /* @__PURE__ */ S(
                r,
                {
                  deps: t,
                  scroll: a,
                  scrollToMe: (g = 0) => {
                    typeof g == "string" && (g == "top" ? o(u.top) : o(2 * u.top - l - u.bottom));
                  },
                  scrollByIndex: (g) => {
                    const p = f[g];
                    p && o(p.top);
                  },
                  index: h,
                  data: m,
                  style: {
                    position: "absolute",
                    insetInline: 0,
                    ...Rc(u, (g) => `${g}px`)
                  }
                },
                h
              );
          })
        }
      )
    }
  );
}
const C1 = k.memo(
  ({ list: e }) => {
    const t = oe();
    return /* @__PURE__ */ S(
      _1,
      {
        itemSize: 30,
        data: e,
        focusId: lt,
        slotId: lt,
        countLastItems: -1,
        component: ({ data: { item: n, isChoised: r }, style: a, status: o, handel: i }) => {
          const s = L(!1), c = (n == null ? void 0 : n.content) || (n == null ? void 0 : n.value);
          return /* @__PURE__ */ G(
            "div",
            {
              className: "flex justify-center items-center px-2 truncate",
              onPointerDown: () => {
                i.submit();
              },
              style: {
                ...t(
                  s.get && "primary.hover.background",
                  o.isFocused && {
                    backgroundColor: "primary",
                    color: "primary.content"
                  }
                ),
                ...a
              },
              onMouseEnter: () => s.set(!0),
              onMouseLeave: () => s.set(!1),
              children: [
                r && /* @__PURE__ */ S("b", { children: c }),
                !r && c
              ]
            }
          );
        }
      }
    );
  },
  (e, t) => {
    const n = e.list.length;
    return n != t.list.length ? !0 : Br(0, n).some((a) => !it(e.list[a], t.list[a]));
  }
), lt = "enum/list";
function f0({ config: e = {}, id: t, state: n }) {
  var h, u;
  const r = k.createRef(), { position: a = "bottom" } = e, o = oe(), i = L(!1), s = k.useMemo(() => (e.list || []).map((g) => ({
    item: g,
    isChoised: g.value == n.get
  })), [e.list, n.get]), c = L(!1);
  We(
    "enum/next",
    () => {
      r.current == document.activeElement && c.get && kl(lt);
    },
    [c.get]
  ), We(
    "enum/back",
    () => {
      r.current == document.activeElement && c.get && Ol(lt);
    },
    [c.get]
  );
  const f = jr(s, lt, "submited");
  k.useEffect(() => (Ze("enum.focused", i.get), () => {
    Ze("enum.focused", !1);
  }), [i.get]), k.useEffect(() => {
    const g = s.findIndex(({ isChoised: p }) => p);
    Ee.setOneFeild(lt, "focused", g >= 0 ? g : null);
  }, [s]), k.useEffect(() => {
    !c.get || !f || (n.set(f.item.value), Ee.setOneFeild(lt, "submited", null), c.set(!1));
  }, [f, c.get]), k.useEffect(() => {
    c.set(i.get);
  }, [i.get]), We(
    "enum.toggle.opening",
    () => {
      if (r.current != document.activeElement) {
        c.set(!1);
        return;
      }
      c.set((g) => !g), Ee.setOneFeild(lt, "focused", null);
    },
    [r]
  ), k.useEffect(() => {
    var p, d;
    if (!(!n.get || (p = e.list) != null && p.some(({ value: y }) => y == n.get)))
      if (e.nullable)
        n.set("");
      else {
        const y = (d = e.list) == null ? void 0 : d[0];
        y && n.set(y.value);
      }
  }, [e, n.get, s]);
  const l = k.useMemo(() => {
    var g;
    return (g = e.list) == null ? void 0 : g.find(({ value: p }) => p == n.get);
  }, [e, n.get]), m = jr(s || [], lt, "focused");
  return /* @__PURE__ */ G("div", { className: "relative w-full", children: [
    /* @__PURE__ */ G(
      "div",
      {
        id: t,
        ref: r,
        tabIndex: 1,
        onPointerDown: () => {
          i.get && at("enum.toggle.opening");
        },
        onKeyDown: (g) => {
          new ft("space").test(g) && c.set((p) => !p);
        },
        onFocus: () => {
          i.set(!0);
        },
        onBlur: () => {
          i.set(!1);
        },
        className: V(`
          border
          border-solid
          border-transparent
          px-2
          py-1
          cursor-pointer
          rounded-md
          min-w-[80px]
          flex
          justify-between
          items-center
        `),
        style: {
          ...o(
            "gray.opacity",
            {
              borderColor: "borders"
            },
            i.get && {
              borderColor: "primary",
              backgroundColor: "gray.opacity.2"
            }
          )
        },
        children: [
          /* @__PURE__ */ S("div", { className: "w-full text-center", children: (l == null ? void 0 : l.content) || (l == null ? void 0 : l.value) || "no option choised" }),
          e.expandIcon !== !1 && !!((h = e.list) != null && h.length) && /* @__PURE__ */ S(Gt, { icon: c.get ? Ym : zm })
        ]
      }
    ),
    c.get && !!((u = e.list) != null && u.length) && /* @__PURE__ */ G(je, { children: [
      (m == null ? void 0 : m.item.desc) && /* @__PURE__ */ S(
        "div",
        {
          className: V(
            "z-[10000000] p-2 flex flex-col absolute overflow-hidden rounded-md border border-solid border-transparent w-full",
            a == "top" && "left-1/2 -translate-x-1/2 top-full my-2",
            a == "bottom" && "left-1/2 -translate-x-1/2 bottom-full my-2",
            a == "right" && "top-1/2 -translate-y-1/2 right-full mx-2",
            a == "left" && "top-1/2 -translate-y-1/2 left-full mx-2"
          ),
          style: {
            ...o("secondry.background", {
              borderColor: "borders"
            })
          },
          children: /* @__PURE__ */ S(b1, { className: "max-h-[150px]", children: /* @__PURE__ */ S(ki, { value: m.item.desc }) })
        }
      ),
      /* @__PURE__ */ S(
        "div",
        {
          className: V(
            ` 
              z-[10000000]
              h-[150px]
              flex
              flex-col
              absolute
              overflow-hidden
              rounded-md
              border border-solid border-transparent
              w-full
            `,
            a == "top" && "left-1/2 -translate-x-1/2 bottom-full my-2",
            a == "bottom" && "left-1/2 -translate-x-1/2 top-full my-2",
            a == "right" && "top-1/2 -translate-y-1/2 left-full mx-2",
            a == "left" && "top-1/2 -translate-y-1/2 right-full mx-2"
          ),
          style: {
            ...o("secondry.background", {
              borderColor: "borders"
            })
          },
          children: /* @__PURE__ */ S(C1, { list: s })
        }
      )
    ] })
  ] });
}
function T1({ onChange: e, alt: t, src: n }) {
  const r = oe(), a = mt("preferences/animation.boolean"), o = L(!1), i = k.useCallback(
    async (s) => {
      if (e) {
        if (!s)
          return e(null);
        try {
          e({
            dataURL: s
          });
        } catch {
          e(null);
        }
      }
    },
    [e]
  );
  return /* @__PURE__ */ S(
    cw,
    {
      onMouseEnter: () => {
        o.set(!0);
      },
      onMouseLeave: () => {
        o.set(!1);
      },
      className: "mb-1 border border-transparent border-solid rounded-2xl text-center text-xl italic",
      style: {
        ...r({
          borderColor: "borders",
          boxShadow: pt([
            {
              colorId: "shadow.color",
              blur: 26,
              size: 1,
              x: 0,
              y: 2
            }
          ])
        })
      },
      alt: t,
      src: n,
      children: /* @__PURE__ */ S(
        "div",
        {
          className: V(
            `
            flex
            opacity-100
            absolute
            left-1/2
            transform
            -translate-x-1/2
            bottom-0
            items-center
          `
          ),
          children: /* @__PURE__ */ G(
            "div",
            {
              className: V(
                `
            inline-flex
            items-center
            rounded-ss-xl
            rounded-se-xl
            p-1
            text-xs
            border-solid
            border-t
            border-x            
            border-transparent
          `,
                !o.get && "translate-y-full pointer-events-none",
                a && "transition-transform"
              ),
              style: {
                ...r("secondry.background", {
                  borderColor: "borders"
                })
              },
              children: [
                n && /* @__PURE__ */ S(
                  Ye,
                  {
                    onClick: async () => {
                      const { response: s } = await Er({
                        message: "do you want to recenlty this image",
                        title: "confirmation",
                        type: "warning",
                        buttons: ["no", "yes"],
                        defaultId: 1
                      });
                      s && i(null);
                    },
                    style: {
                      ...r({
                        color: "error"
                      })
                    },
                    icon: Xn
                  }
                ),
                /* @__PURE__ */ S(
                  Ye,
                  {
                    onClick: async () => {
                      if (n) {
                        const { response: c } = await Er({
                          message: "do you want to recenlty this image",
                          title: "confirmation",
                          type: "warning",
                          buttons: ["no", "yes"],
                          defaultId: 1
                        });
                        if (!c)
                          return;
                      }
                      const s = document.createElement("input");
                      s.type = "file", s.accept = "image/*", s.onchange = async () => {
                        var c;
                        if ((c = s.files) != null && c.length) {
                          const f = s.files[0], l = new FileReader();
                          l.onload = () => {
                            var m;
                            i(((m = l.result) == null ? void 0 : m.toString()) || null);
                          }, l.readAsDataURL(f);
                        }
                      }, s.click();
                    },
                    style: {
                      ...r(
                        n && {
                          color: "notifay.warning"
                        },
                        !n && {
                          color: "primary"
                        }
                      )
                    },
                    icon: zc
                  }
                ),
                /* @__PURE__ */ S(
                  Ye,
                  {
                    style: {
                      ...r(
                        n && {
                          color: "notifay.warning"
                        },
                        !n && {
                          color: "primary"
                        }
                      )
                    },
                    onClick: async () => {
                      if (n) {
                        const { response: s } = await Er({
                          message: "do you want to recenlty this image",
                          title: "confirmation",
                          type: "warning",
                          buttons: ["no", "yes"],
                          defaultId: 1
                        });
                        if (!s)
                          return;
                      }
                      try {
                        const s = await vy("take");
                        e == null || e({
                          dataURL: s
                        });
                      } catch (s) {
                        wl(s, "error");
                      }
                    },
                    icon: Dm
                  }
                )
              ]
            }
          )
        }
      )
    }
  );
}
function d0({ state: e }) {
  return /* @__PURE__ */ S("div", { className: "flex justify-center", children: /* @__PURE__ */ S(
    T1,
    {
      onChange: (t) => {
        t != null && t.dataURL && e.set(t == null ? void 0 : t.dataURL);
      },
      src: e.get ?? void 0
    }
  ) });
}
function $a({ eays: e = !0, state: t, onFocus: n, onBlur: r, className: a, style: o, value: i, type: s, ...c }) {
  const f = oe(), l = L(!1), m = L(!1), h = k.createRef();
  return /* @__PURE__ */ G("div", { className: "relative", children: [
    /* @__PURE__ */ S(
      "input",
      {
        ref: h,
        onFocus: (u) => {
          n == null || n(u), m.set(!0);
        },
        onBlur: (u) => {
          r == null || r(u), m.set(!1);
        },
        type: l.get ? "text" : "password",
        className: V("p-2 text-xs border border-solid border-transparent font-[inherit] whitespace-nowrap rounded-sm w-full", a),
        style: {
          ...f("feild.background", {
            borderColor: m.get ? "primary" : "borders"
          }),
          ...o
        },
        onChange: ({ target: u }) => {
          t.set(u.value);
        },
        value: String(t.get || ""),
        ...c
      }
    ),
    e && /* @__PURE__ */ S(
      Ye,
      {
        className: "top-1/2 right-2 absolute transform -translate-y-1/2",
        tabIndex: -1,
        onClick: () => {
          l.set((u) => !u), h.current && (h.current.focus(), h.current.setSelectionRange(0, 1e3, "forward"));
        },
        icon: l.get ? Mm : Im
      }
    )
  ] });
}
function m0({ state: e, config: t = {}, id: n }) {
  const r = L(void 0), a = L(void 0), o = L(void 0), i = k.useMemo(() => e.get ? r.get == e.get : !0, [r.get, e.get]), s = k.useMemo(() => a.get == o.get, [a.get, o.get]), c = k.useMemo(() => a.get == e.get, [a.get, e.get]);
  return We(
    "password.change",
    (f) => {
      n == f && (i && s && e.set(a.get), o.set(""), a.set(""), r.set(""));
    },
    [r.get, a.get, o.get, i, s, n]
  ), /* @__PURE__ */ G("div", { className: "flex flex-col gap-1", children: [
    !!e.get && /* @__PURE__ */ S($a, { id: n, placeholder: "current password", state: r }),
    /* @__PURE__ */ S($a, { id: e.get ? void 0 : n, placeholder: "new password", state: a }),
    /* @__PURE__ */ S($a, { placeholder: "confirm password", state: o }),
    !a.get && !t.canEmpty && /* @__PURE__ */ S("span", { className: "p-1", children: /* @__PURE__ */ S(Kn, { content: "password cannot be empty" }) }),
    /* @__PURE__ */ S("div", { className: "flex justify-end items-center gap-1", children: i && s && !c && /* @__PURE__ */ S(
      vt,
      {
        onClick: () => {
          at("password.change", n);
        },
        icon: $m,
        className: "px-2 py-1",
        children: /* @__PURE__ */ S(Kn, { content: "change" })
      }
    ) })
  ] });
}
function p0({ id: e, config: t }) {
  const n = oe(), r = ((t == null ? void 0 : t.match) || ".").split("-"), a = L(null);
  return /* @__PURE__ */ S(xi, { onKeyDown: () => {
  }, focusId: e, className: "flex items-center gap-2 rounded-lg w-fit", ignoreOutline: !0, children: /* @__PURE__ */ S(
    Un,
    {
      list: r.map((o, i) => {
        const s = o.split(""), c = s.length;
        return /* @__PURE__ */ S("div", { className: "flex", children: /* @__PURE__ */ S(
          Un,
          {
            list: s.map((f, l) => /* @__PURE__ */ S(
              "div",
              {
                className: V(
                  `
                          w-[40px]
                          h-[40px]
                          border-solid
                          border-transparent
                          text-lg
                          text-center
                          border-y
                          border-r
                        `,
                  l == 0 && "rounded-ss-lg rounded-es-lg border-l",
                  l + 1 == c && "rounded-se-lg rounded-ee-lg"
                ),
                style: {
                  ...n(
                    {
                      borderColor: "borders"
                    },
                    a.get === `${i}-${l}` && {
                      borderColor: "primary"
                    }
                  )
                },
                onKeyDown: (m) => {
                  new ft("backspace").test(m) && m.preventDefault();
                }
              },
              l
            )),
            joinComponent: /* @__PURE__ */ S(je, {})
          },
          i
        ) });
      }),
      joinComponent: /* @__PURE__ */ S(je, { children: "-" })
    }
  ) });
}
function g0({ id: e, state: t }) {
  const n = L(null), r = L([]), a = k.useRef(null), o = oe(), i = L(!1), s = L(!1), c = k.useCallback(async () => {
    const l = [];
    try {
      const m = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      if (m) {
        const h = new MediaRecorder(m);
        h.ondataavailable = (u) => {
          l.push(u.data), r.set(l);
        }, h.onstop = async () => {
          const u = new Blob(l, { type: "audio/mp3" });
          try {
            const g = URL.createObjectURL(u);
            t.set(g);
          } catch {
          }
        }, h.start(), n.set(h);
      } else
        r.set([]), n.set(null), await fo({
          type: "error",
          title: "No audio stream detected",
          desc: "Please allow the audio stream to record the audio",
          id: "recorder.error",
          showDesc: !0
        });
    } catch (m) {
      r.set([]), n.set(null), await fo({
        type: "error",
        title: "Error detected",
        desc: String(m.message),
        id: "recorder.error",
        showDesc: !0
      });
    }
  }, []), f = k.useCallback(() => {
    var l;
    (l = n.get) == null || l.stop();
  }, [n.get]);
  return k.useEffect(() => () => {
    f();
  }, [f]), k.useEffect(() => {
    a.current && (a.current.onplay = () => {
      s.set(!0);
    }, a.current.onpause = () => {
      s.set(!1);
    }, a.current.onended = () => {
      s.set(!1);
    });
  }, [a.current]), /* @__PURE__ */ S("div", { className: "flex gap-2", children: /* @__PURE__ */ G("div", { className: "inline-block relative", children: [
    t.get && /* @__PURE__ */ G(je, { children: [
      /* @__PURE__ */ S(
        Ye,
        {
          icon: Xn,
          onClick: () => {
            t.set(null);
          }
        }
      ),
      /* @__PURE__ */ S(
        Ye,
        {
          onClick: () => {
            var l, m;
            s.get ? (m = a.current) == null || m.pause() : (l = a.current) == null || l.play();
          },
          icon: s.get ? Pm : Wm
        }
      )
    ] }),
    /* @__PURE__ */ S(
      Ye,
      {
        id: e,
        style: {
          ...o(
            i.get && {
              backgroundColor: "primary",
              color: "primary.content"
            }
          )
        },
        onClick: () => {
          i.set((l) => !l), i.get ? f() : c();
        },
        icon: i.get ? Fm : Rm
      }
    ),
    t.get && /* @__PURE__ */ S("audio", { ref: a, src: t.get })
  ] }) });
}
function h0({ state: e, id: t }) {
  const n = L("");
  k.useEffect(() => {
    n.set(e.get || "");
  }, [e.get]);
  const r = L(!1), a = k.useMemo(() => {
    try {
      return new RegExp(n.get), r.set(!0), null;
    } catch (i) {
      return String(i == null ? void 0 : i.message);
    }
  }, [n.get]), o = oe();
  return /* @__PURE__ */ G("div", { children: [
    /* @__PURE__ */ G("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ S(
        nf,
        {
          id: `${t}:input`,
          placeholder: "write your regexp here...",
          onFocus: (i) => {
            i.target.select();
          },
          onValueChange: e.set,
          value: e.get
        }
      ),
      !a && /* @__PURE__ */ S(
        vt,
        {
          className: "py-1",
          id: `${t}:submit`,
          onClick: () => {
            e.set(n.get), r.set(!1);
          },
          children: "Ok"
        }
      )
    ] }),
    a && /* @__PURE__ */ S(
      "div",
      {
        className: V(`
            mt-2
            p-1
            text-xs
            border
            border-solid
            border-transparent
            w-fit
          `),
        style: {
          ...o("error", {
            color: "error.content",
            borderColor: "error.border"
          })
        },
        children: a
      }
    )
  ] });
}
export {
  a0 as ArrayFeild,
  d1 as BooleanFeild,
  q1 as Buttons,
  X1 as Card,
  je as EmptyComponent,
  f0 as EnumFeild,
  _1 as FastList,
  c0 as Feild,
  l0 as FileFeild,
  xi as Focus,
  cw as Image,
  d0 as ImageFeild,
  Q1 as InnerText,
  Zl as Input,
  Un as JoinComponentBy,
  i0 as NumberFeild,
  o0 as ObjectFeild,
  m0 as PasswordFeild,
  p0 as PinFeild,
  g0 as RecorderFeild,
  h0 as RegexpFeild,
  Z1 as Starts,
  s0 as StringFeild,
  Kn as Text,
  J1 as TextAnimation,
  t0 as TitleProvider,
  e0 as TitleView,
  u0 as VarFastList,
  G1 as actions,
  H1 as cash,
  U1 as colors,
  V1 as commands,
  n0 as defineGlobal,
  L1 as feilds,
  B1 as keys,
  Y1 as lang,
  W1 as logs,
  z1 as notifications,
  F1 as positions,
  $1 as settings,
  D1 as slots,
  r0 as startApplication,
  X as store,
  j1 as toasts,
  I1 as trees,
  Fb as useTextAnimation,
  R1 as utils,
  P1 as views,
  K1 as webUtils
};
//# sourceMappingURL=index.es.js.map
