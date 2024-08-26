var _f = Object.defineProperty;
var yf = (n, e, t) => e in n ? _f(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Nt = (n, e, t) => yf(n, typeof e != "symbol" ? e + "" : e, t);
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * @license
 * Copyright 2017 Google LLC
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
const Su = function(n) {
  const e = [];
  let t = 0;
  for (let r = 0; r < n.length; r++) {
    let i = n.charCodeAt(r);
    i < 128 ? e[t++] = i : i < 2048 ? (e[t++] = i >> 6 | 192, e[t++] = i & 63 | 128) : (i & 64512) === 55296 && r + 1 < n.length && (n.charCodeAt(r + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (n.charCodeAt(++r) & 1023), e[t++] = i >> 18 | 240, e[t++] = i >> 12 & 63 | 128, e[t++] = i >> 6 & 63 | 128, e[t++] = i & 63 | 128) : (e[t++] = i >> 12 | 224, e[t++] = i >> 6 & 63 | 128, e[t++] = i & 63 | 128);
  }
  return e;
}, vf = function(n) {
  const e = [];
  let t = 0, r = 0;
  for (; t < n.length; ) {
    const i = n[t++];
    if (i < 128)
      e[r++] = String.fromCharCode(i);
    else if (i > 191 && i < 224) {
      const s = n[t++];
      e[r++] = String.fromCharCode((i & 31) << 6 | s & 63);
    } else if (i > 239 && i < 365) {
      const s = n[t++], a = n[t++], c = n[t++], l = ((i & 7) << 18 | (s & 63) << 12 | (a & 63) << 6 | c & 63) - 65536;
      e[r++] = String.fromCharCode(55296 + (l >> 10)), e[r++] = String.fromCharCode(56320 + (l & 1023));
    } else {
      const s = n[t++], a = n[t++];
      e[r++] = String.fromCharCode((i & 15) << 12 | (s & 63) << 6 | a & 63);
    }
  }
  return e.join("");
}, Pu = {
  /**
   * Maps bytes to characters.
   */
  byteToCharMap_: null,
  /**
   * Maps characters to bytes.
   */
  charToByteMap_: null,
  /**
   * Maps bytes to websafe characters.
   * @private
   */
  byteToCharMapWebSafe_: null,
  /**
   * Maps websafe characters to bytes.
   * @private
   */
  charToByteMapWebSafe_: null,
  /**
   * Our default alphabet, shared between
   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
   */
  ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  /**
   * Our default alphabet. Value 64 (=) is special; it means "nothing."
   */
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + "+/=";
  },
  /**
   * Our websafe alphabet.
   */
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + "-_.";
  },
  /**
   * Whether this browser supports the atob and btoa functions. This extension
   * started at Mozilla but is now implemented by many browsers. We use the
   * ASSUME_* variables to avoid pulling in the full useragent detection library
   * but still allowing the standard per-browser compilations.
   *
   */
  HAS_NATIVE_SUPPORT: typeof atob == "function",
  /**
   * Base64-encode an array of bytes.
   *
   * @param input An array of bytes (numbers with
   *     value in [0, 255]) to encode.
   * @param webSafe Boolean indicating we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeByteArray(n, e) {
    if (!Array.isArray(n))
      throw Error("encodeByteArray takes an array as a parameter");
    this.init_();
    const t = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [];
    for (let i = 0; i < n.length; i += 3) {
      const s = n[i], a = i + 1 < n.length, c = a ? n[i + 1] : 0, l = i + 2 < n.length, d = l ? n[i + 2] : 0, p = s >> 2, y = (s & 3) << 4 | c >> 4;
      let A = (c & 15) << 2 | d >> 6, b = d & 63;
      l || (b = 64, a || (A = 64)), r.push(t[p], t[y], t[A], t[b]);
    }
    return r.join("");
  },
  /**
   * Base64-encode a string.
   *
   * @param input A string to encode.
   * @param webSafe If true, we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeString(n, e) {
    return this.HAS_NATIVE_SUPPORT && !e ? btoa(n) : this.encodeByteArray(Su(n), e);
  },
  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString(n, e) {
    return this.HAS_NATIVE_SUPPORT && !e ? atob(n) : vf(this.decodeStringToByteArray(n, e));
  },
  /**
   * Base64-decode a string.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * @param input Input to decode.
   * @param webSafe True if we should use the web-safe alphabet.
   * @return bytes representing the decoded value.
   */
  decodeStringToByteArray(n, e) {
    this.init_();
    const t = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [];
    for (let i = 0; i < n.length; ) {
      const s = t[n.charAt(i++)], c = i < n.length ? t[n.charAt(i)] : 0;
      ++i;
      const d = i < n.length ? t[n.charAt(i)] : 64;
      ++i;
      const y = i < n.length ? t[n.charAt(i)] : 64;
      if (++i, s == null || c == null || d == null || y == null)
        throw new Ef();
      const A = s << 2 | c >> 4;
      if (r.push(A), d !== 64) {
        const b = c << 4 & 240 | d >> 2;
        if (r.push(b), y !== 64) {
          const D = d << 6 & 192 | y;
          r.push(D);
        }
      }
    }
    return r;
  },
  /**
   * Lazy static initialization function. Called before
   * accessing any of the static map variables.
   * @private
   */
  init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
      for (let n = 0; n < this.ENCODED_VALS.length; n++)
        this.byteToCharMap_[n] = this.ENCODED_VALS.charAt(n), this.charToByteMap_[this.byteToCharMap_[n]] = n, this.byteToCharMapWebSafe_[n] = this.ENCODED_VALS_WEBSAFE.charAt(n), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]] = n, n >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)] = n, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)] = n);
    }
  }
};
class Ef extends Error {
  constructor() {
    super(...arguments), this.name = "DecodeBase64StringError";
  }
}
const If = function(n) {
  const e = Su(n);
  return Pu.encodeByteArray(e, !0);
}, ai = function(n) {
  return If(n).replace(/\./g, "");
}, Cu = function(n) {
  try {
    return Pu.decodeString(n, !0);
  } catch (e) {
    console.error("base64Decode failed: ", e);
  }
  return null;
};
/**
 * @license
 * Copyright 2022 Google LLC
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
function Tf() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
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
const wf = () => Tf().__FIREBASE_DEFAULTS__, Af = () => {
  if (typeof process > "u" || typeof process.env > "u")
    return;
  const n = process.env.__FIREBASE_DEFAULTS__;
  if (n)
    return JSON.parse(n);
}, Rf = () => {
  if (typeof document > "u")
    return;
  let n;
  try {
    n = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch {
    return;
  }
  const e = n && Cu(n[1]);
  return e && JSON.parse(e);
}, Ai = () => {
  try {
    return wf() || Af() || Rf();
  } catch (n) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);
    return;
  }
}, ku = (n) => {
  var e, t;
  return (t = (e = Ai()) === null || e === void 0 ? void 0 : e.emulatorHosts) === null || t === void 0 ? void 0 : t[n];
}, Du = (n) => {
  const e = ku(n);
  if (!e)
    return;
  const t = e.lastIndexOf(":");
  if (t <= 0 || t + 1 === e.length)
    throw new Error(`Invalid host ${e} with no separate hostname and port!`);
  const r = parseInt(e.substring(t + 1), 10);
  return e[0] === "[" ? [e.substring(1, t - 1), r] : [e.substring(0, t), r];
}, Nu = () => {
  var n;
  return (n = Ai()) === null || n === void 0 ? void 0 : n.config;
}, Ou = (n) => {
  var e;
  return (e = Ai()) === null || e === void 0 ? void 0 : e[`_${n}`];
};
/**
 * @license
 * Copyright 2017 Google LLC
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
class bf {
  constructor() {
    this.reject = () => {
    }, this.resolve = () => {
    }, this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
  /**
   * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */
  wrapCallback(e) {
    return (t, r) => {
      t ? this.reject(t) : this.resolve(r), typeof e == "function" && (this.promise.catch(() => {
      }), e.length === 1 ? e(t) : e(t, r));
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
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
function Vu(n, e) {
  if (n.uid)
    throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
  const t = {
    alg: "none",
    type: "JWT"
  }, r = e || "demo-project", i = n.iat || 0, s = n.sub || n.user_id;
  if (!s)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const a = Object.assign({
    // Set all required fields to decent defaults
    iss: `https://securetoken.google.com/${r}`,
    aud: r,
    iat: i,
    exp: i + 3600,
    auth_time: i,
    sub: s,
    user_id: s,
    firebase: {
      sign_in_provider: "custom",
      identities: {}
    }
  }, n);
  return [
    ai(JSON.stringify(t)),
    ai(JSON.stringify(a)),
    ""
  ].join(".");
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function ge() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function Sf() {
  return typeof window < "u" && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge());
}
function Pf() {
  var n;
  const e = (n = Ai()) === null || n === void 0 ? void 0 : n.forceEnvironment;
  if (e === "node")
    return !0;
  if (e === "browser")
    return !1;
  try {
    return Object.prototype.toString.call(global.process) === "[object process]";
  } catch {
    return !1;
  }
}
function Lu() {
  const n = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof n == "object" && n.id !== void 0;
}
function Cf() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function kf() {
  const n = ge();
  return n.indexOf("MSIE ") >= 0 || n.indexOf("Trident/") >= 0;
}
function Df() {
  return !Pf() && !!navigator.userAgent && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
}
function Mu() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function xu() {
  return new Promise((n, e) => {
    try {
      let t = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module", i = self.indexedDB.open(r);
      i.onsuccess = () => {
        i.result.close(), t || self.indexedDB.deleteDatabase(r), n(!0);
      }, i.onupgradeneeded = () => {
        t = !1;
      }, i.onerror = () => {
        var s;
        e(((s = i.error) === null || s === void 0 ? void 0 : s.message) || "");
      };
    } catch (t) {
      e(t);
    }
  });
}
function Nf() {
  return !(typeof navigator > "u" || !navigator.cookieEnabled);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
const Of = "FirebaseError";
class Ue extends Error {
  constructor(e, t, r) {
    super(t), this.code = e, this.customData = r, this.name = Of, Object.setPrototypeOf(this, Ue.prototype), Error.captureStackTrace && Error.captureStackTrace(this, Gt.prototype.create);
  }
}
class Gt {
  constructor(e, t, r) {
    this.service = e, this.serviceName = t, this.errors = r;
  }
  create(e, ...t) {
    const r = t[0] || {}, i = `${this.service}/${e}`, s = this.errors[e], a = s ? Vf(s, r) : "Error", c = `${this.serviceName}: ${a} (${i}).`;
    return new Ue(i, c, r);
  }
}
function Vf(n, e) {
  return n.replace(Lf, (t, r) => {
    const i = e[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const Lf = /\{\$([^}]+)}/g;
function Mf(n) {
  for (const e in n)
    if (Object.prototype.hasOwnProperty.call(n, e))
      return !1;
  return !0;
}
function ir(n, e) {
  if (n === e)
    return !0;
  const t = Object.keys(n), r = Object.keys(e);
  for (const i of t) {
    if (!r.includes(i))
      return !1;
    const s = n[i], a = e[i];
    if (tc(s) && tc(a)) {
      if (!ir(s, a))
        return !1;
    } else if (s !== a)
      return !1;
  }
  for (const i of r)
    if (!t.includes(i))
      return !1;
  return !0;
}
function tc(n) {
  return n !== null && typeof n == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function yn(n) {
  const e = [];
  for (const [t, r] of Object.entries(n))
    Array.isArray(r) ? r.forEach((i) => {
      e.push(encodeURIComponent(t) + "=" + encodeURIComponent(i));
    }) : e.push(encodeURIComponent(t) + "=" + encodeURIComponent(r));
  return e.length ? "&" + e.join("&") : "";
}
function zn(n) {
  const e = {};
  return n.replace(/^\?/, "").split("&").forEach((r) => {
    if (r) {
      const [i, s] = r.split("=");
      e[decodeURIComponent(i)] = decodeURIComponent(s);
    }
  }), e;
}
function Hn(n) {
  const e = n.indexOf("?");
  if (!e)
    return "";
  const t = n.indexOf("#", e);
  return n.substring(e, t > 0 ? t : void 0);
}
function xf(n, e) {
  const t = new Uf(n, e);
  return t.subscribe.bind(t);
}
class Uf {
  /**
   * @param executor Function which can make calls to a single Observer
   *     as a proxy.
   * @param onNoObservers Callback when count of Observers goes to zero.
   */
  constructor(e, t) {
    this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then(() => {
      e(this);
    }).catch((r) => {
      this.error(r);
    });
  }
  next(e) {
    this.forEachObserver((t) => {
      t.next(e);
    });
  }
  error(e) {
    this.forEachObserver((t) => {
      t.error(e);
    }), this.close(e);
  }
  complete() {
    this.forEachObserver((e) => {
      e.complete();
    }), this.close();
  }
  /**
   * Subscribe function that can be used to add an Observer to the fan-out list.
   *
   * - We require that no event is sent to a subscriber sychronously to their
   *   call to subscribe().
   */
  subscribe(e, t, r) {
    let i;
    if (e === void 0 && t === void 0 && r === void 0)
      throw new Error("Missing Observer.");
    Ff(e, [
      "next",
      "error",
      "complete"
    ]) ? i = e : i = {
      next: e,
      error: t,
      complete: r
    }, i.next === void 0 && (i.next = fs), i.error === void 0 && (i.error = fs), i.complete === void 0 && (i.complete = fs);
    const s = this.unsubscribeOne.bind(this, this.observers.length);
    return this.finalized && this.task.then(() => {
      try {
        this.finalError ? i.error(this.finalError) : i.complete();
      } catch {
      }
    }), this.observers.push(i), s;
  }
  // Unsubscribe is synchronous - we guarantee that no events are sent to
  // any unsubscribed Observer.
  unsubscribeOne(e) {
    this.observers === void 0 || this.observers[e] === void 0 || (delete this.observers[e], this.observerCount -= 1, this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this));
  }
  forEachObserver(e) {
    if (!this.finalized)
      for (let t = 0; t < this.observers.length; t++)
        this.sendOne(t, e);
  }
  // Call the Observer via one of it's callback function. We are careful to
  // confirm that the observe has not been unsubscribed since this asynchronous
  // function had been queued.
  sendOne(e, t) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          t(this.observers[e]);
        } catch (r) {
          typeof console < "u" && console.error && console.error(r);
        }
    });
  }
  close(e) {
    this.finalized || (this.finalized = !0, e !== void 0 && (this.finalError = e), this.task.then(() => {
      this.observers = void 0, this.onNoObservers = void 0;
    }));
  }
}
function Ff(n, e) {
  if (typeof n != "object" || n === null)
    return !1;
  for (const t of e)
    if (t in n && typeof n[t] == "function")
      return !0;
  return !1;
}
function fs() {
}
/**
 * @license
 * Copyright 2019 Google LLC
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
const Bf = 1e3, jf = 2, $f = 4 * 60 * 60 * 1e3, qf = 0.5;
function nc(n, e = Bf, t = jf) {
  const r = e * Math.pow(t, n), i = Math.round(
    // A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    qf * r * // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
    // if we add or subtract.
    (Math.random() - 0.5) * 2
  );
  return Math.min($f, r + i);
}
/**
 * @license
 * Copyright 2021 Google LLC
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
function ne(n) {
  return n && n._delegate ? n._delegate : n;
}
class Me {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  constructor(e, t, r) {
    this.name = e, this.instanceFactory = t, this.type = r, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null;
  }
  setInstantiationMode(e) {
    return this.instantiationMode = e, this;
  }
  setMultipleInstances(e) {
    return this.multipleInstances = e, this;
  }
  setServiceProps(e) {
    return this.serviceProps = e, this;
  }
  setInstanceCreatedCallback(e) {
    return this.onInstanceCreated = e, this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
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
const Ot = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
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
class zf {
  constructor(e, t) {
    this.name = e, this.container = t, this.component = null, this.instances = /* @__PURE__ */ new Map(), this.instancesDeferred = /* @__PURE__ */ new Map(), this.instancesOptions = /* @__PURE__ */ new Map(), this.onInitCallbacks = /* @__PURE__ */ new Map();
  }
  /**
   * @param identifier A provider can provide mulitple instances of a service
   * if this.component.multipleInstances is true.
   */
  get(e) {
    const t = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(t)) {
      const r = new bf();
      if (this.instancesDeferred.set(t, r), this.isInitialized(t) || this.shouldAutoInitialize())
        try {
          const i = this.getOrInitializeService({
            instanceIdentifier: t
          });
          i && r.resolve(i);
        } catch {
        }
    }
    return this.instancesDeferred.get(t).promise;
  }
  getImmediate(e) {
    var t;
    const r = this.normalizeInstanceIdentifier(e == null ? void 0 : e.identifier), i = (t = e == null ? void 0 : e.optional) !== null && t !== void 0 ? t : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({
          instanceIdentifier: r
        });
      } catch (s) {
        if (i)
          return null;
        throw s;
      }
    else {
      if (i)
        return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (this.component = e, !!this.shouldAutoInitialize()) {
      if (Wf(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: Ot });
        } catch {
        }
      for (const [t, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(t);
        try {
          const s = this.getOrInitializeService({
            instanceIdentifier: i
          });
          r.resolve(s);
        } catch {
        }
      }
    }
  }
  clearInstance(e = Ot) {
    this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e);
  }
  // app.delete() will call this method on every provider to delete the services
  // TODO: should we mark the provider as deleted?
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((t) => "INTERNAL" in t).map((t) => t.INTERNAL.delete()),
      ...e.filter((t) => "_delete" in t).map((t) => t._delete())
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = Ot) {
    return this.instances.has(e);
  }
  getOptions(e = Ot) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: t = {} } = e, r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: t
    });
    for (const [s, a] of this.instancesDeferred.entries()) {
      const c = this.normalizeInstanceIdentifier(s);
      r === c && a.resolve(i);
    }
    return i;
  }
  /**
   *
   * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
   * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
   *
   * @param identifier An optional instance identifier
   * @returns a function to unregister the callback
   */
  onInit(e, t) {
    var r;
    const i = this.normalizeInstanceIdentifier(t), s = (r = this.onInitCallbacks.get(i)) !== null && r !== void 0 ? r : /* @__PURE__ */ new Set();
    s.add(e), this.onInitCallbacks.set(i, s);
    const a = this.instances.get(i);
    return a && e(a, i), () => {
      s.delete(e);
    };
  }
  /**
   * Invoke onInit callbacks synchronously
   * @param instance the service instance`
   */
  invokeOnInitCallbacks(e, t) {
    const r = this.onInitCallbacks.get(t);
    if (r)
      for (const i of r)
        try {
          i(e, t);
        } catch {
        }
  }
  getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
    let r = this.instances.get(e);
    if (!r && this.component && (r = this.component.instanceFactory(this.container, {
      instanceIdentifier: Hf(e),
      options: t
    }), this.instances.set(e, r), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(r, e), this.component.onInstanceCreated))
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {
      }
    return r || null;
  }
  normalizeInstanceIdentifier(e = Ot) {
    return this.component ? this.component.multipleInstances ? e : Ot : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function Hf(n) {
  return n === Ot ? void 0 : n;
}
function Wf(n) {
  return n.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class Kf {
  constructor(e) {
    this.name = e, this.providers = /* @__PURE__ */ new Map();
  }
  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */
  addComponent(e) {
    const t = this.getProvider(e.name);
    if (t.isComponentSet())
      throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
    t.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e);
  }
  /**
   * getProvider provides a type safe interface where it can only be called with a field name
   * present in NameServiceMapping interface.
   *
   * Firebase SDKs providing services should extend NameServiceMapping interface to register
   * themselves.
   */
  getProvider(e) {
    if (this.providers.has(e))
      return this.providers.get(e);
    const t = new zf(e, this);
    return this.providers.set(e, t), t;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var H;
(function(n) {
  n[n.DEBUG = 0] = "DEBUG", n[n.VERBOSE = 1] = "VERBOSE", n[n.INFO = 2] = "INFO", n[n.WARN = 3] = "WARN", n[n.ERROR = 4] = "ERROR", n[n.SILENT = 5] = "SILENT";
})(H || (H = {}));
const Gf = {
  debug: H.DEBUG,
  verbose: H.VERBOSE,
  info: H.INFO,
  warn: H.WARN,
  error: H.ERROR,
  silent: H.SILENT
}, Qf = H.INFO, Yf = {
  [H.DEBUG]: "log",
  [H.VERBOSE]: "log",
  [H.INFO]: "info",
  [H.WARN]: "warn",
  [H.ERROR]: "error"
}, Jf = (n, e, ...t) => {
  if (e < n.logLevel)
    return;
  const r = (/* @__PURE__ */ new Date()).toISOString(), i = Yf[e];
  if (i)
    console[i](`[${r}]  ${n.name}:`, ...t);
  else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
};
class Ri {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(e) {
    this.name = e, this._logLevel = Qf, this._logHandler = Jf, this._userLogHandler = null;
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in H))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  // Workaround for setter/getter having to be the same type.
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? Gf[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  /**
   * The functions below are all based on the `console` interface
   */
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, H.DEBUG, ...e), this._logHandler(this, H.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, H.VERBOSE, ...e), this._logHandler(this, H.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, H.INFO, ...e), this._logHandler(this, H.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, H.WARN, ...e), this._logHandler(this, H.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, H.ERROR, ...e), this._logHandler(this, H.ERROR, ...e);
  }
}
const Xf = (n, e) => e.some((t) => n instanceof t);
let rc, ic;
function Zf() {
  return rc || (rc = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function ep() {
  return ic || (ic = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const Uu = /* @__PURE__ */ new WeakMap(), ks = /* @__PURE__ */ new WeakMap(), Fu = /* @__PURE__ */ new WeakMap(), ps = /* @__PURE__ */ new WeakMap(), no = /* @__PURE__ */ new WeakMap();
function tp(n) {
  const e = new Promise((t, r) => {
    const i = () => {
      n.removeEventListener("success", s), n.removeEventListener("error", a);
    }, s = () => {
      t(yt(n.result)), i();
    }, a = () => {
      r(n.error), i();
    };
    n.addEventListener("success", s), n.addEventListener("error", a);
  });
  return e.then((t) => {
    t instanceof IDBCursor && Uu.set(t, n);
  }).catch(() => {
  }), no.set(e, n), e;
}
function np(n) {
  if (ks.has(n))
    return;
  const e = new Promise((t, r) => {
    const i = () => {
      n.removeEventListener("complete", s), n.removeEventListener("error", a), n.removeEventListener("abort", a);
    }, s = () => {
      t(), i();
    }, a = () => {
      r(n.error || new DOMException("AbortError", "AbortError")), i();
    };
    n.addEventListener("complete", s), n.addEventListener("error", a), n.addEventListener("abort", a);
  });
  ks.set(n, e);
}
let Ds = {
  get(n, e, t) {
    if (n instanceof IDBTransaction) {
      if (e === "done")
        return ks.get(n);
      if (e === "objectStoreNames")
        return n.objectStoreNames || Fu.get(n);
      if (e === "store")
        return t.objectStoreNames[1] ? void 0 : t.objectStore(t.objectStoreNames[0]);
    }
    return yt(n[e]);
  },
  set(n, e, t) {
    return n[e] = t, !0;
  },
  has(n, e) {
    return n instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in n;
  }
};
function rp(n) {
  Ds = n(Ds);
}
function ip(n) {
  return n === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...t) {
    const r = n.call(ms(this), e, ...t);
    return Fu.set(r, e.sort ? e.sort() : [e]), yt(r);
  } : ep().includes(n) ? function(...e) {
    return n.apply(ms(this), e), yt(Uu.get(this));
  } : function(...e) {
    return yt(n.apply(ms(this), e));
  };
}
function sp(n) {
  return typeof n == "function" ? ip(n) : (n instanceof IDBTransaction && np(n), Xf(n, Zf()) ? new Proxy(n, Ds) : n);
}
function yt(n) {
  if (n instanceof IDBRequest)
    return tp(n);
  if (ps.has(n))
    return ps.get(n);
  const e = sp(n);
  return e !== n && (ps.set(n, e), no.set(e, n)), e;
}
const ms = (n) => no.get(n);
function Bu(n, e, { blocked: t, upgrade: r, blocking: i, terminated: s } = {}) {
  const a = indexedDB.open(n, e), c = yt(a);
  return r && a.addEventListener("upgradeneeded", (l) => {
    r(yt(a.result), l.oldVersion, l.newVersion, yt(a.transaction), l);
  }), t && a.addEventListener("blocked", (l) => t(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    l.oldVersion,
    l.newVersion,
    l
  )), c.then((l) => {
    s && l.addEventListener("close", () => s()), i && l.addEventListener("versionchange", (d) => i(d.oldVersion, d.newVersion, d));
  }).catch(() => {
  }), c;
}
const op = ["get", "getKey", "getAll", "getAllKeys", "count"], ap = ["put", "add", "delete", "clear"], gs = /* @__PURE__ */ new Map();
function sc(n, e) {
  if (!(n instanceof IDBDatabase && !(e in n) && typeof e == "string"))
    return;
  if (gs.get(e))
    return gs.get(e);
  const t = e.replace(/FromIndex$/, ""), r = e !== t, i = ap.includes(t);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(t in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || op.includes(t))
  )
    return;
  const s = async function(a, ...c) {
    const l = this.transaction(a, i ? "readwrite" : "readonly");
    let d = l.store;
    return r && (d = d.index(c.shift())), (await Promise.all([
      d[t](...c),
      i && l.done
    ]))[0];
  };
  return gs.set(e, s), s;
}
rp((n) => ({
  ...n,
  get: (e, t, r) => sc(e, t) || n.get(e, t, r),
  has: (e, t) => !!sc(e, t) || n.has(e, t)
}));
/**
 * @license
 * Copyright 2019 Google LLC
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
class cp {
  constructor(e) {
    this.container = e;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    return this.container.getProviders().map((t) => {
      if (up(t)) {
        const r = t.getImmediate();
        return `${r.library}/${r.version}`;
      } else
        return null;
    }).filter((t) => t).join(" ");
  }
}
function up(n) {
  const e = n.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const Ns = "@firebase/app", oc = "0.10.8";
/**
 * @license
 * Copyright 2019 Google LLC
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
const Ft = new Ri("@firebase/app"), lp = "@firebase/app-compat", hp = "@firebase/analytics-compat", dp = "@firebase/analytics", fp = "@firebase/app-check-compat", pp = "@firebase/app-check", mp = "@firebase/auth", gp = "@firebase/auth-compat", _p = "@firebase/database", yp = "@firebase/database-compat", vp = "@firebase/functions", Ep = "@firebase/functions-compat", Ip = "@firebase/installations", Tp = "@firebase/installations-compat", wp = "@firebase/messaging", Ap = "@firebase/messaging-compat", Rp = "@firebase/performance", bp = "@firebase/performance-compat", Sp = "@firebase/remote-config", Pp = "@firebase/remote-config-compat", Cp = "@firebase/storage", kp = "@firebase/storage-compat", Dp = "@firebase/firestore", Np = "@firebase/vertexai-preview", Op = "@firebase/firestore-compat", Vp = "firebase", Lp = "10.12.5";
/**
 * @license
 * Copyright 2019 Google LLC
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
const Os = "[DEFAULT]", Mp = {
  [Ns]: "fire-core",
  [lp]: "fire-core-compat",
  [dp]: "fire-analytics",
  [hp]: "fire-analytics-compat",
  [pp]: "fire-app-check",
  [fp]: "fire-app-check-compat",
  [mp]: "fire-auth",
  [gp]: "fire-auth-compat",
  [_p]: "fire-rtdb",
  [yp]: "fire-rtdb-compat",
  [vp]: "fire-fn",
  [Ep]: "fire-fn-compat",
  [Ip]: "fire-iid",
  [Tp]: "fire-iid-compat",
  [wp]: "fire-fcm",
  [Ap]: "fire-fcm-compat",
  [Rp]: "fire-perf",
  [bp]: "fire-perf-compat",
  [Sp]: "fire-rc",
  [Pp]: "fire-rc-compat",
  [Cp]: "fire-gcs",
  [kp]: "fire-gcs-compat",
  [Dp]: "fire-fst",
  [Op]: "fire-fst-compat",
  [Np]: "fire-vertex",
  "fire-js": "fire-js",
  [Vp]: "fire-js-all"
};
/**
 * @license
 * Copyright 2019 Google LLC
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
const ci = /* @__PURE__ */ new Map(), xp = /* @__PURE__ */ new Map(), Vs = /* @__PURE__ */ new Map();
function ac(n, e) {
  try {
    n.container.addComponent(e);
  } catch (t) {
    Ft.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`, t);
  }
}
function $e(n) {
  const e = n.name;
  if (Vs.has(e))
    return Ft.debug(`There were multiple attempts to register component ${e}.`), !1;
  Vs.set(e, n);
  for (const t of ci.values())
    ac(t, n);
  for (const t of xp.values())
    ac(t, n);
  return !0;
}
function bt(n, e) {
  const t = n.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return t && t.triggerHeartbeat(), n.container.getProvider(e);
}
function Be(n) {
  return n.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
const Up = {
  "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
  "bad-app-name": "Illegal App name: '{$appName}'",
  "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
  "app-deleted": "Firebase App named '{$appName}' already deleted",
  "server-app-deleted": "Firebase Server App has been deleted",
  "no-options": "Need to provide options, when not being deployed to hosting via source.",
  "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  "invalid-log-argument": "First argument to `onLog` must be null or a function.",
  "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
  "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments."
}, vt = new Gt("app", "Firebase", Up);
/**
 * @license
 * Copyright 2019 Google LLC
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
class Fp {
  constructor(e, t, r) {
    this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, t), this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = r, this.container.addComponent(new Me(
      "app",
      () => this,
      "PUBLIC"
      /* ComponentType.PUBLIC */
    ));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), this._automaticDataCollectionEnabled = e;
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  /**
   * This function will throw an Error if the App has already been deleted -
   * use before performing API actions on the App.
   */
  checkDestroyed() {
    if (this.isDeleted)
      throw vt.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
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
const Qt = Lp;
function ju(n, e = {}) {
  let t = n;
  typeof e != "object" && (e = { name: e });
  const r = Object.assign({ name: Os, automaticDataCollectionEnabled: !1 }, e), i = r.name;
  if (typeof i != "string" || !i)
    throw vt.create("bad-app-name", {
      appName: String(i)
    });
  if (t || (t = Nu()), !t)
    throw vt.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  const s = ci.get(i);
  if (s) {
    if (ir(t, s.options) && ir(r, s.config))
      return s;
    throw vt.create("duplicate-app", { appName: i });
  }
  const a = new Kf(i);
  for (const l of Vs.values())
    a.addComponent(l);
  const c = new Fp(t, r, a);
  return ci.set(i, c), c;
}
function bi(n = Os) {
  const e = ci.get(n);
  if (!e && n === Os && Nu())
    return ju();
  if (!e)
    throw vt.create("no-app", { appName: n });
  return e;
}
function Pe(n, e, t) {
  var r;
  let i = (r = Mp[n]) !== null && r !== void 0 ? r : n;
  t && (i += `-${t}`);
  const s = i.match(/\s|\//), a = e.match(/\s|\//);
  if (s || a) {
    const c = [
      `Unable to register library "${i}" with version "${e}":`
    ];
    s && c.push(`library name "${i}" contains illegal characters (whitespace or "/")`), s && a && c.push("and"), a && c.push(`version name "${e}" contains illegal characters (whitespace or "/")`), Ft.warn(c.join(" "));
    return;
  }
  $e(new Me(
    `${i}-version`,
    () => ({ library: i, version: e }),
    "VERSION"
    /* ComponentType.VERSION */
  ));
}
/**
 * @license
 * Copyright 2021 Google LLC
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
const Bp = "firebase-heartbeat-database", jp = 1, sr = "firebase-heartbeat-store";
let _s = null;
function $u() {
  return _s || (_s = Bu(Bp, jp, {
    upgrade: (n, e) => {
      switch (e) {
        case 0:
          try {
            n.createObjectStore(sr);
          } catch (t) {
            console.warn(t);
          }
      }
    }
  }).catch((n) => {
    throw vt.create("idb-open", {
      originalErrorMessage: n.message
    });
  })), _s;
}
async function $p(n) {
  try {
    const t = (await $u()).transaction(sr), r = await t.objectStore(sr).get(qu(n));
    return await t.done, r;
  } catch (e) {
    if (e instanceof Ue)
      Ft.warn(e.message);
    else {
      const t = vt.create("idb-get", {
        originalErrorMessage: e == null ? void 0 : e.message
      });
      Ft.warn(t.message);
    }
  }
}
async function cc(n, e) {
  try {
    const r = (await $u()).transaction(sr, "readwrite");
    await r.objectStore(sr).put(e, qu(n)), await r.done;
  } catch (t) {
    if (t instanceof Ue)
      Ft.warn(t.message);
    else {
      const r = vt.create("idb-set", {
        originalErrorMessage: t == null ? void 0 : t.message
      });
      Ft.warn(r.message);
    }
  }
}
function qu(n) {
  return `${n.name}!${n.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
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
const qp = 1024, zp = 30 * 24 * 60 * 60 * 1e3;
class Hp {
  constructor(e) {
    this.container = e, this._heartbeatsCache = null;
    const t = this.container.getProvider("app").getImmediate();
    this._storage = new Kp(t), this._heartbeatsCachePromise = this._storage.read().then((r) => (this._heartbeatsCache = r, r));
  }
  /**
   * Called to report a heartbeat. The function will generate
   * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
   * to IndexedDB.
   * Note that we only store one heartbeat per day. So if a heartbeat for today is
   * already logged, subsequent calls to this function in the same day will be ignored.
   */
  async triggerHeartbeat() {
    var e, t;
    const i = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), s = uc();
    if (!(((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, ((t = this._heartbeatsCache) === null || t === void 0 ? void 0 : t.heartbeats) == null)) && !(this._heartbeatsCache.lastSentHeartbeatDate === s || this._heartbeatsCache.heartbeats.some((a) => a.date === s)))
      return this._heartbeatsCache.heartbeats.push({ date: s, agent: i }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((a) => {
        const c = new Date(a.date).valueOf();
        return Date.now() - c <= zp;
      }), this._storage.overwrite(this._heartbeatsCache);
  }
  /**
   * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
   * It also clears all heartbeats from memory as well as in IndexedDB.
   *
   * NOTE: Consuming product SDKs should not send the header if this method
   * returns an empty string.
   */
  async getHeartbeatsHeader() {
    var e;
    if (this._heartbeatsCache === null && await this._heartbeatsCachePromise, ((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0)
      return "";
    const t = uc(), { heartbeatsToSend: r, unsentEntries: i } = Wp(this._heartbeatsCache.heartbeats), s = ai(JSON.stringify({ version: 2, heartbeats: r }));
    return this._heartbeatsCache.lastSentHeartbeatDate = t, i.length > 0 ? (this._heartbeatsCache.heartbeats = i, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), s;
  }
}
function uc() {
  return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function Wp(n, e = qp) {
  const t = [];
  let r = n.slice();
  for (const i of n) {
    const s = t.find((a) => a.agent === i.agent);
    if (s) {
      if (s.dates.push(i.date), lc(t) > e) {
        s.dates.pop();
        break;
      }
    } else if (t.push({
      agent: i.agent,
      dates: [i.date]
    }), lc(t) > e) {
      t.pop();
      break;
    }
    r = r.slice(1);
  }
  return {
    heartbeatsToSend: t,
    unsentEntries: r
  };
}
class Kp {
  constructor(e) {
    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    return Mu() ? xu().then(() => !0).catch(() => !1) : !1;
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const t = await $p(this.app);
      return t != null && t.heartbeats ? t : { heartbeats: [] };
    } else
      return { heartbeats: [] };
  }
  // overwrite the storage with the provided heartbeats
  async overwrite(e) {
    var t;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return cc(this.app, {
        lastSentHeartbeatDate: (t = e.lastSentHeartbeatDate) !== null && t !== void 0 ? t : i.lastSentHeartbeatDate,
        heartbeats: e.heartbeats
      });
    } else
      return;
  }
  // add heartbeats
  async add(e) {
    var t;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return cc(this.app, {
        lastSentHeartbeatDate: (t = e.lastSentHeartbeatDate) !== null && t !== void 0 ? t : i.lastSentHeartbeatDate,
        heartbeats: [
          ...i.heartbeats,
          ...e.heartbeats
        ]
      });
    } else
      return;
  }
}
function lc(n) {
  return ai(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: n })
  ).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
function Gp(n) {
  $e(new Me(
    "platform-logger",
    (e) => new cp(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), $e(new Me(
    "heartbeat",
    (e) => new Hp(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), Pe(Ns, oc, n), Pe(Ns, oc, "esm2017"), Pe("fire-js", "");
}
Gp("");
var Qp = "firebase", Yp = "10.12.5";
/**
 * @license
 * Copyright 2020 Google LLC
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
Pe(Qp, Yp, "app");
function ro(n, e) {
  var t = {};
  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(n); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[i]) && (t[r[i]] = n[r[i]]);
  return t;
}
function zu() {
  return {
    "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
const Jp = zu, Hu = new Gt("auth", "Firebase", zu());
/**
 * @license
 * Copyright 2020 Google LLC
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
const ui = new Ri("@firebase/auth");
function Xp(n, ...e) {
  ui.logLevel <= H.WARN && ui.warn(`Auth (${Qt}): ${n}`, ...e);
}
function Xr(n, ...e) {
  ui.logLevel <= H.ERROR && ui.error(`Auth (${Qt}): ${n}`, ...e);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function xe(n, ...e) {
  throw so(n, ...e);
}
function Ce(n, ...e) {
  return so(n, ...e);
}
function io(n, e, t) {
  const r = Object.assign(Object.assign({}, Jp()), { [e]: t });
  return new Gt("auth", "Firebase", r).create(e, {
    appName: n.name
  });
}
function tt(n) {
  return io(n, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
}
function Zp(n, e, t) {
  const r = t;
  if (!(e instanceof r))
    throw r.name !== e.constructor.name && xe(
      n,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), io(n, "argument-error", `Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`);
}
function so(n, ...e) {
  if (typeof n != "string") {
    const t = e[0], r = [...e.slice(1)];
    return r[0] && (r[0].appName = n.name), n._errorFactory.create(t, ...r);
  }
  return Hu.create(n, ...e);
}
function V(n, e, ...t) {
  if (!n)
    throw so(e, ...t);
}
function Xe(n) {
  const e = "INTERNAL ASSERTION FAILED: " + n;
  throw Xr(e), new Error(e);
}
function rt(n, e) {
  n || Xe(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function Ls() {
  var n;
  return typeof self < "u" && ((n = self.location) === null || n === void 0 ? void 0 : n.href) || "";
}
function Wu() {
  return hc() === "http:" || hc() === "https:";
}
function hc() {
  var n;
  return typeof self < "u" && ((n = self.location) === null || n === void 0 ? void 0 : n.protocol) || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function em() {
  return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  (Wu() || Lu() || "connection" in navigator) ? navigator.onLine : !0;
}
function tm() {
  if (typeof navigator > "u")
    return null;
  const n = navigator;
  return (
    // Most reliable, but only supported in Chrome/Firefox.
    n.languages && n.languages[0] || // Supported in most browsers, but returns the language of the browser
    // UI, not the language set in browser settings.
    n.language || // Couldn't determine language.
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class pr {
  constructor(e, t) {
    this.shortDelay = e, this.longDelay = t, rt(t > e, "Short delay should be less than long delay!"), this.isMobile = Sf() || Cf();
  }
  get() {
    return em() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function oo(n, e) {
  rt(n.emulator, "Emulator should always be set here");
  const { url: t } = n.emulator;
  return e ? `${t}${e.startsWith("/") ? e.slice(1) : e}` : t;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Ku {
  static initialize(e, t, r) {
    this.fetchImpl = e, t && (this.headersImpl = t), r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl)
      return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self)
      return self.fetch;
    if (typeof globalThis < "u" && globalThis.fetch)
      return globalThis.fetch;
    if (typeof fetch < "u")
      return fetch;
    Xe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl)
      return this.headersImpl;
    if (typeof self < "u" && "Headers" in self)
      return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < "u")
      return Headers;
    Xe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static response() {
    if (this.responseImpl)
      return this.responseImpl;
    if (typeof self < "u" && "Response" in self)
      return self.Response;
    if (typeof globalThis < "u" && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < "u")
      return Response;
    Xe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const nm = {
  // Custom token errors.
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  // This can only happen if the SDK sends a bad request.
  MISSING_CUSTOM_TOKEN: "internal-error",
  // Create Auth URI errors.
  INVALID_IDENTIFIER: "invalid-email",
  // This can only happen if the SDK sends a bad request.
  MISSING_CONTINUE_URI: "internal-error",
  // Sign in with email and password errors (some apply to sign up too).
  INVALID_PASSWORD: "wrong-password",
  // This can only happen if the SDK sends a bad request.
  MISSING_PASSWORD: "missing-password",
  // Thrown if Email Enumeration Protection is enabled in the project and the email or password is
  // invalid.
  INVALID_LOGIN_CREDENTIALS: "invalid-credential",
  // Sign up with email and password errors.
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  // Verify assertion for sign in with credential errors:
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  // This can only happen if the SDK sends a bad request.
  MISSING_REQ_TYPE: "internal-error",
  // Send Password reset email errors:
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  // This can only happen if the SDK sends a bad request.
  MISSING_OOB_CODE: "internal-error",
  // Operations that require ID token in request:
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  // Other errors.
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
  // Phone Auth related errors.
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  // Other action code errors when additional settings passed.
  // MISSING_CONTINUE_URI is getting mapped to INTERNAL_ERROR above.
  // This is OK as this error will be caught by client side validation.
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  // getProjectConfig errors when clientId is passed.
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  // User actions (sign-up or deletion) disabled errors.
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  // Multi factor related errors.
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  // Blocking functions related errors.
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  // Recaptcha related errors.
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type"
  /* AuthErrorCode.INVALID_REQ_TYPE */
};
/**
 * @license
 * Copyright 2020 Google LLC
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
const rm = new pr(3e4, 6e4);
function St(n, e) {
  return n.tenantId && !e.tenantId ? Object.assign(Object.assign({}, e), { tenantId: n.tenantId }) : e;
}
async function Ge(n, e, t, r, i = {}) {
  return Gu(n, i, async () => {
    let s = {}, a = {};
    r && (e === "GET" ? a = r : s = {
      body: JSON.stringify(r)
    });
    const c = yn(Object.assign({ key: n.config.apiKey }, a)).slice(1), l = await n._getAdditionalHeaders();
    return l[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/json", n.languageCode && (l[
      "X-Firebase-Locale"
      /* HttpHeader.X_FIREBASE_LOCALE */
    ] = n.languageCode), Ku.fetch()(Qu(n, n.config.apiHost, t, c), Object.assign({
      method: e,
      headers: l,
      referrerPolicy: "no-referrer"
    }, s));
  });
}
async function Gu(n, e, t) {
  n._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, nm), e);
  try {
    const i = new sm(n), s = await Promise.race([
      t(),
      i.promise
    ]);
    i.clearNetworkTimeout();
    const a = await s.json();
    if ("needConfirmation" in a)
      throw zr(n, "account-exists-with-different-credential", a);
    if (s.ok && !("errorMessage" in a))
      return a;
    {
      const c = s.ok ? a.errorMessage : a.error.message, [l, d] = c.split(" : ");
      if (l === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw zr(n, "credential-already-in-use", a);
      if (l === "EMAIL_EXISTS")
        throw zr(n, "email-already-in-use", a);
      if (l === "USER_DISABLED")
        throw zr(n, "user-disabled", a);
      const p = r[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
      if (d)
        throw io(n, p, d);
      xe(n, p);
    }
  } catch (i) {
    if (i instanceof Ue)
      throw i;
    xe(n, "network-request-failed", { message: String(i) });
  }
}
async function mr(n, e, t, r, i = {}) {
  const s = await Ge(n, e, t, r, i);
  return "mfaPendingCredential" in s && xe(n, "multi-factor-auth-required", {
    _serverResponse: s
  }), s;
}
function Qu(n, e, t, r) {
  const i = `${e}${t}?${r}`;
  return n.config.emulator ? oo(n.config, i) : `${n.config.apiScheme}://${i}`;
}
function im(n) {
  switch (n) {
    case "ENFORCE":
      return "ENFORCE";
    case "AUDIT":
      return "AUDIT";
    case "OFF":
      return "OFF";
    default:
      return "ENFORCEMENT_STATE_UNSPECIFIED";
  }
}
class sm {
  constructor(e) {
    this.auth = e, this.timer = null, this.promise = new Promise((t, r) => {
      this.timer = setTimeout(() => r(Ce(
        this.auth,
        "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
      )), rm.get());
    });
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function zr(n, e, t) {
  const r = {
    appName: n.name
  };
  t.email && (r.email = t.email), t.phoneNumber && (r.phoneNumber = t.phoneNumber);
  const i = Ce(n, e, r);
  return i.customData._tokenResponse = t, i;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function dc(n) {
  return n !== void 0 && n.getResponse !== void 0;
}
function fc(n) {
  return n !== void 0 && n.enterprise !== void 0;
}
class om {
  constructor(e) {
    if (this.siteKey = "", this.recaptchaEnforcementState = [], e.recaptchaKey === void 0)
      throw new Error("recaptchaKey undefined");
    this.siteKey = e.recaptchaKey.split("/")[3], this.recaptchaEnforcementState = e.recaptchaEnforcementState;
  }
  /**
   * Returns the reCAPTCHA Enterprise enforcement state for the given provider.
   *
   * @param providerStr - The provider whose enforcement state is to be returned.
   * @returns The reCAPTCHA Enterprise enforcement state for the given provider.
   */
  getProviderEnforcementState(e) {
    if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0)
      return null;
    for (const t of this.recaptchaEnforcementState)
      if (t.provider && t.provider === e)
        return im(t.enforcementState);
    return null;
  }
  /**
   * Returns true if the reCAPTCHA Enterprise enforcement state for the provider is set to ENFORCE or AUDIT.
   *
   * @param providerStr - The provider whose enablement state is to be returned.
   * @returns Whether or not reCAPTCHA Enterprise protection is enabled for the given provider.
   */
  isProviderEnabled(e) {
    return this.getProviderEnforcementState(e) === "ENFORCE" || this.getProviderEnforcementState(e) === "AUDIT";
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function am(n) {
  return (await Ge(
    n,
    "GET",
    "/v1/recaptchaParams"
    /* Endpoint.GET_RECAPTCHA_PARAM */
  )).recaptchaSiteKey || "";
}
async function cm(n, e) {
  return Ge(n, "GET", "/v2/recaptchaConfig", St(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function um(n, e) {
  return Ge(n, "POST", "/v1/accounts:delete", e);
}
async function Yu(n, e) {
  return Ge(n, "POST", "/v1/accounts:lookup", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function Yn(n) {
  if (n)
    try {
      const e = new Date(Number(n));
      if (!isNaN(e.getTime()))
        return e.toUTCString();
    } catch {
    }
}
async function lm(n, e = !1) {
  const t = ne(n), r = await t.getIdToken(e), i = ao(r);
  V(
    i && i.exp && i.auth_time && i.iat,
    t.auth,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const s = typeof i.firebase == "object" ? i.firebase : void 0, a = s == null ? void 0 : s.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: Yn(ys(i.auth_time)),
    issuedAtTime: Yn(ys(i.iat)),
    expirationTime: Yn(ys(i.exp)),
    signInProvider: a || null,
    signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null
  };
}
function ys(n) {
  return Number(n) * 1e3;
}
function ao(n) {
  const [e, t, r] = n.split(".");
  if (e === void 0 || t === void 0 || r === void 0)
    return Xr("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = Cu(t);
    return i ? JSON.parse(i) : (Xr("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return Xr("Caught error parsing JWT payload as JSON", i == null ? void 0 : i.toString()), null;
  }
}
function pc(n) {
  const e = ao(n);
  return V(
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), V(
    typeof e.exp < "u",
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), V(
    typeof e.iat < "u",
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Number(e.exp) - Number(e.iat);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function ln(n, e, t = !1) {
  if (t)
    return e;
  try {
    return await e;
  } catch (r) {
    throw r instanceof Ue && hm(r) && n.auth.currentUser === n && await n.auth.signOut(), r;
  }
}
function hm({ code: n }) {
  return n === "auth/user-disabled" || n === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class dm {
  constructor(e) {
    this.user = e, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4;
  }
  _start() {
    this.isRunning || (this.isRunning = !0, this.schedule());
  }
  _stop() {
    this.isRunning && (this.isRunning = !1, this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(e) {
    var t;
    if (e) {
      const r = this.errorBackoff;
      return this.errorBackoff = Math.min(
        this.errorBackoff * 2,
        96e4
        /* Duration.RETRY_BACKOFF_MAX */
      ), r;
    } else {
      this.errorBackoff = 3e4;
      const i = ((t = this.user.stsTokenManager.expirationTime) !== null && t !== void 0 ? t : 0) - Date.now() - 3e5;
      return Math.max(0, i);
    }
  }
  schedule(e = !1) {
    if (!this.isRunning)
      return;
    const t = this.getInterval(e);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, t);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (e) {
      (e == null ? void 0 : e.code) === "auth/network-request-failed" && this.schedule(
        /* wasError */
        !0
      );
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Ms {
  constructor(e, t) {
    this.createdAt = e, this.lastLoginAt = t, this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = Yn(this.lastLoginAt), this.creationTime = Yn(this.createdAt);
  }
  _copy(e) {
    this.createdAt = e.createdAt, this.lastLoginAt = e.lastLoginAt, this._initializeTime();
  }
  toJSON() {
    return {
      createdAt: this.createdAt,
      lastLoginAt: this.lastLoginAt
    };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
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
async function li(n) {
  var e;
  const t = n.auth, r = await n.getIdToken(), i = await ln(n, Yu(t, { idToken: r }));
  V(
    i == null ? void 0 : i.users.length,
    t,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const s = i.users[0];
  n._notifyReloadListener(s);
  const a = !((e = s.providerUserInfo) === null || e === void 0) && e.length ? Ju(s.providerUserInfo) : [], c = pm(n.providerData, a), l = n.isAnonymous, d = !(n.email && s.passwordHash) && !(c != null && c.length), p = l ? d : !1, y = {
    uid: s.localId,
    displayName: s.displayName || null,
    photoURL: s.photoUrl || null,
    email: s.email || null,
    emailVerified: s.emailVerified || !1,
    phoneNumber: s.phoneNumber || null,
    tenantId: s.tenantId || null,
    providerData: c,
    metadata: new Ms(s.createdAt, s.lastLoginAt),
    isAnonymous: p
  };
  Object.assign(n, y);
}
async function fm(n) {
  const e = ne(n);
  await li(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
}
function pm(n, e) {
  return [...n.filter((r) => !e.some((i) => i.providerId === r.providerId)), ...e];
}
function Ju(n) {
  return n.map((e) => {
    var { providerId: t } = e, r = ro(e, ["providerId"]);
    return {
      providerId: t,
      uid: r.rawId || "",
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function mm(n, e) {
  const t = await Gu(n, {}, async () => {
    const r = yn({
      grant_type: "refresh_token",
      refresh_token: e
    }).slice(1), { tokenApiHost: i, apiKey: s } = n.config, a = Qu(n, i, "/v1/token", `key=${s}`), c = await n._getAdditionalHeaders();
    return c[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/x-www-form-urlencoded", Ku.fetch()(a, {
      method: "POST",
      headers: c,
      body: r
    });
  });
  return {
    accessToken: t.access_token,
    expiresIn: t.expires_in,
    refreshToken: t.refresh_token
  };
}
async function gm(n, e) {
  return Ge(n, "POST", "/v2/accounts:revokeToken", St(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class on {
  constructor() {
    this.refreshToken = null, this.accessToken = null, this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    V(
      e.idToken,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), V(
      typeof e.idToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), V(
      typeof e.refreshToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const t = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : pc(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
  }
  updateFromIdToken(e) {
    V(
      e.length !== 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const t = pc(e);
    this.updateTokensAndExpiration(e, null, t);
  }
  async getToken(e, t = !1) {
    return !t && this.accessToken && !this.isExpired ? this.accessToken : (V(
      this.refreshToken,
      e,
      "user-token-expired"
      /* AuthErrorCode.TOKEN_EXPIRED */
    ), this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(e, t) {
    const { accessToken: r, refreshToken: i, expiresIn: s } = await mm(e, t);
    this.updateTokensAndExpiration(r, i, Number(s));
  }
  updateTokensAndExpiration(e, t, r) {
    this.refreshToken = t || null, this.accessToken = e || null, this.expirationTime = Date.now() + r * 1e3;
  }
  static fromJSON(e, t) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = t, a = new on();
    return r && (V(typeof r == "string", "internal-error", {
      appName: e
    }), a.refreshToken = r), i && (V(typeof i == "string", "internal-error", {
      appName: e
    }), a.accessToken = i), s && (V(typeof s == "number", "internal-error", {
      appName: e
    }), a.expirationTime = s), a;
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime
    };
  }
  _assign(e) {
    this.accessToken = e.accessToken, this.refreshToken = e.refreshToken, this.expirationTime = e.expirationTime;
  }
  _clone() {
    return Object.assign(new on(), this.toJSON());
  }
  _performRefresh() {
    return Xe("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function ht(n, e) {
  V(typeof n == "string" || typeof n > "u", "internal-error", { appName: e });
}
class Ze {
  constructor(e) {
    var { uid: t, auth: r, stsTokenManager: i } = e, s = ro(e, ["uid", "auth", "stsTokenManager"]);
    this.providerId = "firebase", this.proactiveRefresh = new dm(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = t, this.auth = r, this.stsTokenManager = i, this.accessToken = i.accessToken, this.displayName = s.displayName || null, this.email = s.email || null, this.emailVerified = s.emailVerified || !1, this.phoneNumber = s.phoneNumber || null, this.photoURL = s.photoURL || null, this.isAnonymous = s.isAnonymous || !1, this.tenantId = s.tenantId || null, this.providerData = s.providerData ? [...s.providerData] : [], this.metadata = new Ms(s.createdAt || void 0, s.lastLoginAt || void 0);
  }
  async getIdToken(e) {
    const t = await ln(this, this.stsTokenManager.getToken(this.auth, e));
    return V(
      t,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.accessToken !== t && (this.accessToken = t, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), t;
  }
  getIdTokenResult(e) {
    return lm(this, e);
  }
  reload() {
    return fm(this);
  }
  _assign(e) {
    this !== e && (V(
      this.uid === e.uid,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map((t) => Object.assign({}, t)), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    const t = new Ze(Object.assign(Object.assign({}, this), { auth: e, stsTokenManager: this.stsTokenManager._clone() }));
    return t.metadata._copy(this.metadata), t;
  }
  _onReload(e) {
    V(
      !this.reloadListener,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.reloadListener = e, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null);
  }
  _notifyReloadListener(e) {
    this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e;
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(e, t = !1) {
    let r = !1;
    e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), r = !0), t && await li(this), await this.auth._persistUserIfCurrent(this), r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (Be(this.auth.app))
      return Promise.reject(tt(this.auth));
    const e = await this.getIdToken();
    return await ln(this, um(this.auth, { idToken: e })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
  }
  toJSON() {
    return Object.assign(Object.assign({
      uid: this.uid,
      email: this.email || void 0,
      emailVerified: this.emailVerified,
      displayName: this.displayName || void 0,
      isAnonymous: this.isAnonymous,
      photoURL: this.photoURL || void 0,
      phoneNumber: this.phoneNumber || void 0,
      tenantId: this.tenantId || void 0,
      providerData: this.providerData.map((e) => Object.assign({}, e)),
      stsTokenManager: this.stsTokenManager.toJSON(),
      // Redirect event ID must be maintained in case there is a pending
      // redirect event.
      _redirectEventId: this._redirectEventId
    }, this.metadata.toJSON()), {
      // Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
      apiKey: this.auth.config.apiKey,
      appName: this.auth.name
    });
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(e, t) {
    var r, i, s, a, c, l, d, p;
    const y = (r = t.displayName) !== null && r !== void 0 ? r : void 0, A = (i = t.email) !== null && i !== void 0 ? i : void 0, b = (s = t.phoneNumber) !== null && s !== void 0 ? s : void 0, D = (a = t.photoURL) !== null && a !== void 0 ? a : void 0, O = (c = t.tenantId) !== null && c !== void 0 ? c : void 0, C = (l = t._redirectEventId) !== null && l !== void 0 ? l : void 0, B = (d = t.createdAt) !== null && d !== void 0 ? d : void 0, $ = (p = t.lastLoginAt) !== null && p !== void 0 ? p : void 0, { uid: j, emailVerified: q, isAnonymous: he, providerData: J, stsTokenManager: E } = t;
    V(
      j && E,
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const m = on.fromJSON(this.name, E);
    V(
      typeof j == "string",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), ht(y, e.name), ht(A, e.name), V(
      typeof q == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), V(
      typeof he == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), ht(b, e.name), ht(D, e.name), ht(O, e.name), ht(C, e.name), ht(B, e.name), ht($, e.name);
    const _ = new Ze({
      uid: j,
      auth: e,
      email: A,
      emailVerified: q,
      displayName: y,
      isAnonymous: he,
      photoURL: D,
      phoneNumber: b,
      tenantId: O,
      stsTokenManager: m,
      createdAt: B,
      lastLoginAt: $
    });
    return J && Array.isArray(J) && (_.providerData = J.map((v) => Object.assign({}, v))), C && (_._redirectEventId = C), _;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromIdTokenResponse(e, t, r = !1) {
    const i = new on();
    i.updateFromServerResponse(t);
    const s = new Ze({
      uid: t.localId,
      auth: e,
      stsTokenManager: i,
      isAnonymous: r
    });
    return await li(s), s;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromGetAccountInfoResponse(e, t, r) {
    const i = t.users[0];
    V(
      i.localId !== void 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const s = i.providerUserInfo !== void 0 ? Ju(i.providerUserInfo) : [], a = !(i.email && i.passwordHash) && !(s != null && s.length), c = new on();
    c.updateFromIdToken(r);
    const l = new Ze({
      uid: i.localId,
      auth: e,
      stsTokenManager: c,
      isAnonymous: a
    }), d = {
      uid: i.localId,
      displayName: i.displayName || null,
      photoURL: i.photoUrl || null,
      email: i.email || null,
      emailVerified: i.emailVerified || !1,
      phoneNumber: i.phoneNumber || null,
      tenantId: i.tenantId || null,
      providerData: s,
      metadata: new Ms(i.createdAt, i.lastLoginAt),
      isAnonymous: !(i.email && i.passwordHash) && !(s != null && s.length)
    };
    return Object.assign(l, d), l;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const mc = /* @__PURE__ */ new Map();
function et(n) {
  rt(n instanceof Function, "Expected a class definition");
  let e = mc.get(n);
  return e ? (rt(e instanceof n, "Instance stored in cache mismatched with class"), e) : (e = new n(), mc.set(n, e), e);
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class Xu {
  constructor() {
    this.type = "NONE", this.storage = {};
  }
  async _isAvailable() {
    return !0;
  }
  async _set(e, t) {
    this.storage[e] = t;
  }
  async _get(e) {
    const t = this.storage[e];
    return t === void 0 ? null : t;
  }
  async _remove(e) {
    delete this.storage[e];
  }
  _addListener(e, t) {
  }
  _removeListener(e, t) {
  }
}
Xu.type = "NONE";
const gc = Xu;
/**
 * @license
 * Copyright 2019 Google LLC
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
function Zr(n, e, t) {
  return `firebase:${n}:${e}:${t}`;
}
class an {
  constructor(e, t, r) {
    this.persistence = e, this.auth = t, this.userKey = r;
    const { config: i, name: s } = this.auth;
    this.fullUserKey = Zr(this.userKey, i.apiKey, s), this.fullPersistenceKey = Zr("persistence", i.apiKey, s), this.boundEventHandler = t._onStorageEvent.bind(t), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    return e ? Ze._fromJSON(this.auth, e) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
  }
  async setPersistence(e) {
    if (this.persistence === e)
      return;
    const t = await this.getCurrentUser();
    if (await this.removeCurrentUser(), this.persistence = e, t)
      return this.setCurrentUser(t);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(e, t, r = "authUser") {
    if (!t.length)
      return new an(et(gc), e, r);
    const i = (await Promise.all(t.map(async (d) => {
      if (await d._isAvailable())
        return d;
    }))).filter((d) => d);
    let s = i[0] || et(gc);
    const a = Zr(r, e.config.apiKey, e.name);
    let c = null;
    for (const d of t)
      try {
        const p = await d._get(a);
        if (p) {
          const y = Ze._fromJSON(e, p);
          d !== s && (c = y), s = d;
          break;
        }
      } catch {
      }
    const l = i.filter((d) => d._shouldAllowMigration);
    return !s._shouldAllowMigration || !l.length ? new an(s, e, r) : (s = l[0], c && await s._set(a, c.toJSON()), await Promise.all(t.map(async (d) => {
      if (d !== s)
        try {
          await d._remove(a);
        } catch {
        }
    })), new an(s, e, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function _c(n) {
  const e = n.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (tl(e))
    return "IEMobile";
  if (e.includes("msie") || e.includes("trident/"))
    return "IE";
  if (e.includes("edge/"))
    return "Edge";
  if (Zu(e))
    return "Firefox";
  if (e.includes("silk/"))
    return "Silk";
  if (rl(e))
    return "Blackberry";
  if (il(e))
    return "Webos";
  if (co(e))
    return "Safari";
  if ((e.includes("chrome/") || el(e)) && !e.includes("edge/"))
    return "Chrome";
  if (nl(e))
    return "Android";
  {
    const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/, r = n.match(t);
    if ((r == null ? void 0 : r.length) === 2)
      return r[1];
  }
  return "Other";
}
function Zu(n = ge()) {
  return /firefox\//i.test(n);
}
function co(n = ge()) {
  const e = n.toLowerCase();
  return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android");
}
function el(n = ge()) {
  return /crios\//i.test(n);
}
function tl(n = ge()) {
  return /iemobile/i.test(n);
}
function nl(n = ge()) {
  return /android/i.test(n);
}
function rl(n = ge()) {
  return /blackberry/i.test(n);
}
function il(n = ge()) {
  return /webos/i.test(n);
}
function Si(n = ge()) {
  return /iphone|ipad|ipod/i.test(n) || /macintosh/i.test(n) && /mobile/i.test(n);
}
function _m(n = ge()) {
  var e;
  return Si(n) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone);
}
function ym() {
  return kf() && document.documentMode === 10;
}
function sl(n = ge()) {
  return Si(n) || nl(n) || il(n) || rl(n) || /windows phone/i.test(n) || tl(n);
}
function vm() {
  try {
    return !!(window && window !== window.top);
  } catch {
    return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function ol(n, e = []) {
  let t;
  switch (n) {
    case "Browser":
      t = _c(ge());
      break;
    case "Worker":
      t = `${_c(ge())}-${n}`;
      break;
    default:
      t = n;
  }
  const r = e.length ? e.join(",") : "FirebaseCore-web";
  return `${t}/JsCore/${Qt}/${r}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
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
class Em {
  constructor(e) {
    this.auth = e, this.queue = [];
  }
  pushCallback(e, t) {
    const r = (s) => new Promise((a, c) => {
      try {
        const l = e(s);
        a(l);
      } catch (l) {
        c(l);
      }
    });
    r.onAbort = t, this.queue.push(r);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(e) {
    if (this.auth.currentUser === e)
      return;
    const t = [];
    try {
      for (const r of this.queue)
        await r(e), r.onAbort && t.push(r.onAbort);
    } catch (r) {
      t.reverse();
      for (const i of t)
        try {
          i();
        } catch {
        }
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: r == null ? void 0 : r.message
      });
    }
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
async function Im(n, e = {}) {
  return Ge(n, "GET", "/v2/passwordPolicy", St(n, e));
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
const Tm = 6;
class wm {
  constructor(e) {
    var t, r, i, s;
    const a = e.customStrengthOptions;
    this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = (t = a.minPasswordLength) !== null && t !== void 0 ? t : Tm, a.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = a.maxPasswordLength), a.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = a.containsLowercaseCharacter), a.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = a.containsUppercaseCharacter), a.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = a.containsNumericCharacter), a.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = a.containsNonAlphanumericCharacter), this.enforcementState = e.enforcementState, this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = (i = (r = e.allowedNonAlphanumericCharacters) === null || r === void 0 ? void 0 : r.join("")) !== null && i !== void 0 ? i : "", this.forceUpgradeOnSignin = (s = e.forceUpgradeOnSignin) !== null && s !== void 0 ? s : !1, this.schemaVersion = e.schemaVersion;
  }
  validatePassword(e) {
    var t, r, i, s, a, c;
    const l = {
      isValid: !0,
      passwordPolicy: this
    };
    return this.validatePasswordLengthOptions(e, l), this.validatePasswordCharacterOptions(e, l), l.isValid && (l.isValid = (t = l.meetsMinPasswordLength) !== null && t !== void 0 ? t : !0), l.isValid && (l.isValid = (r = l.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0), l.isValid && (l.isValid = (i = l.containsLowercaseLetter) !== null && i !== void 0 ? i : !0), l.isValid && (l.isValid = (s = l.containsUppercaseLetter) !== null && s !== void 0 ? s : !0), l.isValid && (l.isValid = (a = l.containsNumericCharacter) !== null && a !== void 0 ? a : !0), l.isValid && (l.isValid = (c = l.containsNonAlphanumericCharacter) !== null && c !== void 0 ? c : !0), l;
  }
  /**
   * Validates that the password meets the length options for the policy.
   *
   * @param password Password to validate.
   * @param status Validation status.
   */
  validatePasswordLengthOptions(e, t) {
    const r = this.customStrengthOptions.minPasswordLength, i = this.customStrengthOptions.maxPasswordLength;
    r && (t.meetsMinPasswordLength = e.length >= r), i && (t.meetsMaxPasswordLength = e.length <= i);
  }
  /**
   * Validates that the password meets the character options for the policy.
   *
   * @param password Password to validate.
   * @param status Validation status.
   */
  validatePasswordCharacterOptions(e, t) {
    this.updatePasswordCharacterOptionsStatuses(
      t,
      /* containsLowercaseCharacter= */
      !1,
      /* containsUppercaseCharacter= */
      !1,
      /* containsNumericCharacter= */
      !1,
      /* containsNonAlphanumericCharacter= */
      !1
    );
    let r;
    for (let i = 0; i < e.length; i++)
      r = e.charAt(i), this.updatePasswordCharacterOptionsStatuses(
        t,
        /* containsLowercaseCharacter= */
        r >= "a" && r <= "z",
        /* containsUppercaseCharacter= */
        r >= "A" && r <= "Z",
        /* containsNumericCharacter= */
        r >= "0" && r <= "9",
        /* containsNonAlphanumericCharacter= */
        this.allowedNonAlphanumericCharacters.includes(r)
      );
  }
  /**
   * Updates the running validation status with the statuses for the character options.
   * Expected to be called each time a character is processed to update each option status
   * based on the current character.
   *
   * @param status Validation status.
   * @param containsLowercaseCharacter Whether the character is a lowercase letter.
   * @param containsUppercaseCharacter Whether the character is an uppercase letter.
   * @param containsNumericCharacter Whether the character is a numeric character.
   * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
   */
  updatePasswordCharacterOptionsStatuses(e, t, r, i, s) {
    this.customStrengthOptions.containsLowercaseLetter && (e.containsLowercaseLetter || (e.containsLowercaseLetter = t)), this.customStrengthOptions.containsUppercaseLetter && (e.containsUppercaseLetter || (e.containsUppercaseLetter = r)), this.customStrengthOptions.containsNumericCharacter && (e.containsNumericCharacter || (e.containsNumericCharacter = i)), this.customStrengthOptions.containsNonAlphanumericCharacter && (e.containsNonAlphanumericCharacter || (e.containsNonAlphanumericCharacter = s));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Am {
  constructor(e, t, r, i) {
    this.app = e, this.heartbeatServiceProvider = t, this.appCheckServiceProvider = r, this.config = i, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new yc(this), this.idTokenSubscription = new yc(this), this.beforeStateQueue = new Em(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = Hu, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = i.sdkClientVersion;
  }
  _initializeWithPersistence(e, t) {
    return t && (this._popupRedirectResolver = et(t)), this._initializationPromise = this.queue(async () => {
      var r, i;
      if (!this._deleted && (this.persistenceManager = await an.create(this, e), !this._deleted)) {
        if (!((r = this._popupRedirectResolver) === null || r === void 0) && r._shouldInitProactively)
          try {
            await this._popupRedirectResolver._initialize(this);
          } catch {
          }
        await this.initializeCurrentUser(t), this.lastNotifiedUid = ((i = this.currentUser) === null || i === void 0 ? void 0 : i.uid) || null, !this._deleted && (this._isInitialized = !0);
      }
    }), this._initializationPromise;
  }
  /**
   * If the persistence is changed in another window, the user manager will let us know
   */
  async _onStorageEvent() {
    if (this._deleted)
      return;
    const e = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !e)) {
      if (this.currentUser && e && this.currentUser.uid === e.uid) {
        this._currentUser._assign(e), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(
        e,
        /* skipBeforeStateCallbacks */
        !0
      );
    }
  }
  async initializeCurrentUserFromIdToken(e) {
    try {
      const t = await Yu(this, { idToken: e }), r = await Ze._fromGetAccountInfoResponse(this, t, e);
      await this.directlySetCurrentUser(r);
    } catch (t) {
      console.warn("FirebaseServerApp could not login user with provided authIdToken: ", t), await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(e) {
    var t;
    if (Be(this.app)) {
      const a = this.app.settings.authIdToken;
      return a ? new Promise((c) => {
        setTimeout(() => this.initializeCurrentUserFromIdToken(a).then(c, c));
      }) : this.directlySetCurrentUser(null);
    }
    const r = await this.assertedPersistence.getCurrentUser();
    let i = r, s = !1;
    if (e && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const a = (t = this.redirectUser) === null || t === void 0 ? void 0 : t._redirectEventId, c = i == null ? void 0 : i._redirectEventId, l = await this.tryRedirectSignIn(e);
      (!a || a === c) && (l != null && l.user) && (i = l.user, s = !0);
    }
    if (!i)
      return this.directlySetCurrentUser(null);
    if (!i._redirectEventId) {
      if (s)
        try {
          await this.beforeStateQueue.runMiddleware(i);
        } catch (a) {
          i = r, this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(a));
        }
      return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null);
    }
    return V(
      this._popupRedirectResolver,
      this,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId ? this.directlySetCurrentUser(i) : this.reloadAndSetCurrentUserOrClear(i);
  }
  async tryRedirectSignIn(e) {
    let t = null;
    try {
      t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return t;
  }
  async reloadAndSetCurrentUserOrClear(e) {
    try {
      await li(e);
    } catch (t) {
      if ((t == null ? void 0 : t.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = tm();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    if (Be(this.app))
      return Promise.reject(tt(this));
    const t = e ? ne(e) : null;
    return t && V(
      t.auth.config.apiKey === this.config.apiKey,
      this,
      "invalid-user-token"
      /* AuthErrorCode.INVALID_AUTH */
    ), this._updateCurrentUser(t && t._clone(this));
  }
  async _updateCurrentUser(e, t = !1) {
    if (!this._deleted)
      return e && V(
        this.tenantId === e.tenantId,
        this,
        "tenant-id-mismatch"
        /* AuthErrorCode.TENANT_ID_MISMATCH */
      ), t || await this.beforeStateQueue.runMiddleware(e), this.queue(async () => {
        await this.directlySetCurrentUser(e), this.notifyAuthListeners();
      });
  }
  async signOut() {
    return Be(this.app) ? Promise.reject(tt(this)) : (await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(
      null,
      /* skipBeforeStateCallbacks */
      !0
    ));
  }
  setPersistence(e) {
    return Be(this.app) ? Promise.reject(tt(this)) : this.queue(async () => {
      await this.assertedPersistence.setPersistence(et(e));
    });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(e) {
    this._getPasswordPolicyInternal() || await this._updatePasswordPolicy();
    const t = this._getPasswordPolicyInternal();
    return t.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {})) : t.validatePassword(e);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const e = await Im(this), t = new wm(e);
    this.tenantId === null ? this._projectPasswordPolicy = t : this._tenantPasswordPolicies[this.tenantId] = t;
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new Gt("auth", "Firebase", e());
  }
  onAuthStateChanged(e, t, r) {
    return this.registerStateListener(this.authStateSubscription, e, t, r);
  }
  beforeAuthStateChanged(e, t) {
    return this.beforeStateQueue.pushCallback(e, t);
  }
  onIdTokenChanged(e, t, r) {
    return this.registerStateListener(this.idTokenSubscription, e, t, r);
  }
  authStateReady() {
    return new Promise((e, t) => {
      if (this.currentUser)
        e();
      else {
        const r = this.onAuthStateChanged(() => {
          r(), e();
        }, t);
      }
    });
  }
  /**
   * Revokes the given access token. Currently only supports Apple OAuth access tokens.
   */
  async revokeAccessToken(e) {
    if (this.currentUser) {
      const t = await this.currentUser.getIdToken(), r = {
        providerId: "apple.com",
        tokenType: "ACCESS_TOKEN",
        token: e,
        idToken: t
      };
      this.tenantId != null && (r.tenantId = this.tenantId), await gm(this, r);
    }
  }
  toJSON() {
    var e;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON()
    };
  }
  async _setRedirectUser(e, t) {
    const r = await this.getOrInitRedirectPersistenceManager(t);
    return e === null ? r.removeCurrentUser() : r.setCurrentUser(e);
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const t = e && et(e) || this._popupRedirectResolver;
      V(
        t,
        this,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      ), this.redirectPersistenceManager = await an.create(
        this,
        [et(t._redirectPersistence)],
        "redirectUser"
        /* KeyName.REDIRECT_USER */
      ), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(e) {
    var t, r;
    return this._isInitialized && await this.queue(async () => {
    }), ((t = this._currentUser) === null || t === void 0 ? void 0 : t._redirectEventId) === e ? this._currentUser : ((r = this.redirectUser) === null || r === void 0 ? void 0 : r._redirectEventId) === e ? this.redirectUser : null;
  }
  async _persistUserIfCurrent(e) {
    if (e === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(e));
  }
  /** Notifies listeners only if the user is current */
  _notifyListenersIfCurrent(e) {
    e === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  /** Returns the current user cast as the internal type */
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var e, t;
    if (!this._isInitialized)
      return;
    this.idTokenSubscription.next(this.currentUser);
    const r = (t = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !== null && t !== void 0 ? t : null;
    this.lastNotifiedUid !== r && (this.lastNotifiedUid = r, this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(e, t, r, i) {
    if (this._deleted)
      return () => {
      };
    const s = typeof t == "function" ? t : t.next.bind(t);
    let a = !1;
    const c = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    if (V(
      c,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), c.then(() => {
      a || s(this.currentUser);
    }), typeof t == "function") {
      const l = e.addObserver(t, r, i);
      return () => {
        a = !0, l();
      };
    } else {
      const l = e.addObserver(t);
      return () => {
        a = !0, l();
      };
    }
  }
  /**
   * Unprotected (from race conditions) method to set the current user. This
   * should only be called from within a queued callback. This is necessary
   * because the queue shouldn't rely on another queued callback.
   */
  async directlySetCurrentUser(e) {
    this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(), e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(), this.currentUser = e, e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser();
  }
  queue(e) {
    return this.operations = this.operations.then(e, e), this.operations;
  }
  get assertedPersistence() {
    return V(
      this.persistenceManager,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.persistenceManager;
  }
  _logFramework(e) {
    !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = ol(this.config.clientPlatform, this._getFrameworks()));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var e;
    const t = {
      "X-Client-Version": this.clientVersion
    };
    this.app.options.appId && (t[
      "X-Firebase-gmpid"
      /* HttpHeader.X_FIREBASE_GMPID */
    ] = this.app.options.appId);
    const r = await ((e = this.heartbeatServiceProvider.getImmediate({
      optional: !0
    })) === null || e === void 0 ? void 0 : e.getHeartbeatsHeader());
    r && (t[
      "X-Firebase-Client"
      /* HttpHeader.X_FIREBASE_CLIENT */
    ] = r);
    const i = await this._getAppCheckToken();
    return i && (t[
      "X-Firebase-AppCheck"
      /* HttpHeader.X_FIREBASE_APP_CHECK */
    ] = i), t;
  }
  async _getAppCheckToken() {
    var e;
    const t = await ((e = this.appCheckServiceProvider.getImmediate({ optional: !0 })) === null || e === void 0 ? void 0 : e.getToken());
    return t != null && t.error && Xp(`Error while retrieving App Check token: ${t.error}`), t == null ? void 0 : t.token;
  }
}
function ot(n) {
  return ne(n);
}
class yc {
  constructor(e) {
    this.auth = e, this.observer = null, this.addObserver = xf((t) => this.observer = t);
  }
  get next() {
    return V(
      this.observer,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.observer.next.bind(this.observer);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
let gr = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: ""
};
function Rm(n) {
  gr = n;
}
function uo(n) {
  return gr.loadJS(n);
}
function bm() {
  return gr.recaptchaV2Script;
}
function Sm() {
  return gr.recaptchaEnterpriseScript;
}
function Pm() {
  return gr.gapiScript;
}
function al(n) {
  return `__${n}${Math.floor(Math.random() * 1e6)}`;
}
const Cm = "recaptcha-enterprise", km = "NO_RECAPTCHA";
class Dm {
  /**
   *
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   *
   */
  constructor(e) {
    this.type = Cm, this.auth = ot(e);
  }
  /**
   * Executes the verification process.
   *
   * @returns A Promise for a token that can be used to assert the validity of a request.
   */
  async verify(e = "verify", t = !1) {
    async function r(s) {
      if (!t) {
        if (s.tenantId == null && s._agentRecaptchaConfig != null)
          return s._agentRecaptchaConfig.siteKey;
        if (s.tenantId != null && s._tenantRecaptchaConfigs[s.tenantId] !== void 0)
          return s._tenantRecaptchaConfigs[s.tenantId].siteKey;
      }
      return new Promise(async (a, c) => {
        cm(s, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        }).then((l) => {
          if (l.recaptchaKey === void 0)
            c(new Error("recaptcha Enterprise site key undefined"));
          else {
            const d = new om(l);
            return s.tenantId == null ? s._agentRecaptchaConfig = d : s._tenantRecaptchaConfigs[s.tenantId] = d, a(d.siteKey);
          }
        }).catch((l) => {
          c(l);
        });
      });
    }
    function i(s, a, c) {
      const l = window.grecaptcha;
      fc(l) ? l.enterprise.ready(() => {
        l.enterprise.execute(s, { action: e }).then((d) => {
          a(d);
        }).catch(() => {
          a(km);
        });
      }) : c(Error("No reCAPTCHA enterprise script loaded."));
    }
    return new Promise((s, a) => {
      r(this.auth).then((c) => {
        if (!t && fc(window.grecaptcha))
          i(c, s, a);
        else {
          if (typeof window > "u") {
            a(new Error("RecaptchaVerifier is only supported in browser"));
            return;
          }
          let l = Sm();
          l.length !== 0 && (l += c), uo(l).then(() => {
            i(c, s, a);
          }).catch((d) => {
            a(d);
          });
        }
      }).catch((c) => {
        a(c);
      });
    });
  }
}
async function vc(n, e, t, r = !1) {
  const i = new Dm(n);
  let s;
  try {
    s = await i.verify(t);
  } catch {
    s = await i.verify(t, !0);
  }
  const a = Object.assign({}, e);
  return r ? Object.assign(a, { captchaResp: s }) : Object.assign(a, { captchaResponse: s }), Object.assign(a, {
    clientType: "CLIENT_TYPE_WEB"
    /* RecaptchaClientType.WEB */
  }), Object.assign(a, {
    recaptchaVersion: "RECAPTCHA_ENTERPRISE"
    /* RecaptchaVersion.ENTERPRISE */
  }), a;
}
async function xs(n, e, t, r) {
  var i;
  if (!((i = n._getRecaptchaConfig()) === null || i === void 0) && i.isProviderEnabled(
    "EMAIL_PASSWORD_PROVIDER"
    /* RecaptchaProvider.EMAIL_PASSWORD_PROVIDER */
  )) {
    const s = await vc(
      n,
      e,
      t,
      t === "getOobCode"
      /* RecaptchaActionName.GET_OOB_CODE */
    );
    return r(n, s);
  } else
    return r(n, e).catch(async (s) => {
      if (s.code === "auth/missing-recaptcha-token") {
        console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
        const a = await vc(
          n,
          e,
          t,
          t === "getOobCode"
          /* RecaptchaActionName.GET_OOB_CODE */
        );
        return r(n, a);
      } else
        return Promise.reject(s);
    });
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function Nm(n, e) {
  const t = bt(n, "auth");
  if (t.isInitialized()) {
    const i = t.getImmediate(), s = t.getOptions();
    if (ir(s, e ?? {}))
      return i;
    xe(
      i,
      "already-initialized"
      /* AuthErrorCode.ALREADY_INITIALIZED */
    );
  }
  return t.initialize({ options: e });
}
function Om(n, e) {
  const t = (e == null ? void 0 : e.persistence) || [], r = (Array.isArray(t) ? t : [t]).map(et);
  e != null && e.errorMap && n._updateErrorMap(e.errorMap), n._initializeWithPersistence(r, e == null ? void 0 : e.popupRedirectResolver);
}
function Vm(n, e, t) {
  const r = ot(n);
  V(
    r._canInitEmulator,
    r,
    "emulator-config-failed"
    /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
  ), V(
    /^https?:\/\//.test(e),
    r,
    "invalid-emulator-scheme"
    /* AuthErrorCode.INVALID_EMULATOR_SCHEME */
  );
  const i = !1, s = cl(e), { host: a, port: c } = Lm(e), l = c === null ? "" : `:${c}`;
  r.config.emulator = { url: `${s}//${a}${l}/` }, r.settings.appVerificationDisabledForTesting = !0, r.emulatorConfig = Object.freeze({
    host: a,
    port: c,
    protocol: s.replace(":", ""),
    options: Object.freeze({ disableWarnings: i })
  }), Mm();
}
function cl(n) {
  const e = n.indexOf(":");
  return e < 0 ? "" : n.substr(0, e + 1);
}
function Lm(n) {
  const e = cl(n), t = /(\/\/)?([^?#/]+)/.exec(n.substr(e.length));
  if (!t)
    return { host: "", port: null };
  const r = t[2].split("@").pop() || "", i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const s = i[1];
    return { host: s, port: Ec(r.substr(s.length + 1)) };
  } else {
    const [s, a] = r.split(":");
    return { host: s, port: Ec(a) };
  }
}
function Ec(n) {
  if (!n)
    return null;
  const e = Number(n);
  return isNaN(e) ? null : e;
}
function Mm() {
  function n() {
    const e = document.createElement("p"), t = e.style;
    e.innerText = "Running in emulator mode. Do not use with production credentials.", t.position = "fixed", t.width = "100%", t.backgroundColor = "#ffffff", t.border = ".1em solid #000000", t.color = "#b50000", t.bottom = "0px", t.left = "0px", t.margin = "0px", t.zIndex = "10000", t.textAlign = "center", e.classList.add("firebase-emulator-warning"), document.body.appendChild(e);
  }
  typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", n) : n());
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class lo {
  /** @internal */
  constructor(e, t) {
    this.providerId = e, this.signInMethod = t;
  }
  /**
   * Returns a JSON-serializable representation of this object.
   *
   * @returns a JSON-serializable representation of this object.
   */
  toJSON() {
    return Xe("not implemented");
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return Xe("not implemented");
  }
  /** @internal */
  _linkToIdToken(e, t) {
    return Xe("not implemented");
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return Xe("not implemented");
  }
}
async function xm(n, e) {
  return Ge(n, "POST", "/v1/accounts:signUp", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function Um(n, e) {
  return mr(n, "POST", "/v1/accounts:signInWithPassword", St(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function Fm(n, e) {
  return mr(n, "POST", "/v1/accounts:signInWithEmailLink", St(n, e));
}
async function Bm(n, e) {
  return mr(n, "POST", "/v1/accounts:signInWithEmailLink", St(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class or extends lo {
  /** @internal */
  constructor(e, t, r, i = null) {
    super("password", r), this._email = e, this._password = t, this._tenantId = i;
  }
  /** @internal */
  static _fromEmailAndPassword(e, t) {
    return new or(
      e,
      t,
      "password"
      /* SignInMethod.EMAIL_PASSWORD */
    );
  }
  /** @internal */
  static _fromEmailAndCode(e, t, r = null) {
    return new or(e, t, "emailLink", r);
  }
  /** {@inheritdoc AuthCredential.toJSON} */
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
   *
   * @param json - Either `object` or the stringified representation of the object. When string is
   * provided, `JSON.parse` would be called first.
   *
   * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
   */
  static fromJSON(e) {
    const t = typeof e == "string" ? JSON.parse(e) : e;
    if (t != null && t.email && (t != null && t.password)) {
      if (t.signInMethod === "password")
        return this._fromEmailAndPassword(t.email, t.password);
      if (t.signInMethod === "emailLink")
        return this._fromEmailAndCode(t.email, t.password, t.tenantId);
    }
    return null;
  }
  /** @internal */
  async _getIdTokenResponse(e) {
    switch (this.signInMethod) {
      case "password":
        const t = {
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        return xs(e, t, "signInWithPassword", Um);
      case "emailLink":
        return Fm(e, {
          email: this._email,
          oobCode: this._password
        });
      default:
        xe(
          e,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  /** @internal */
  async _linkToIdToken(e, t) {
    switch (this.signInMethod) {
      case "password":
        const r = {
          idToken: t,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        return xs(e, r, "signUpPassword", xm);
      case "emailLink":
        return Bm(e, {
          idToken: t,
          email: this._email,
          oobCode: this._password
        });
      default:
        xe(
          e,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return this._getIdTokenResponse(e);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function cn(n, e) {
  return mr(n, "POST", "/v1/accounts:signInWithIdp", St(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const jm = "http://localhost";
class Bt extends lo {
  constructor() {
    super(...arguments), this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(e) {
    const t = new Bt(e.providerId, e.signInMethod);
    return e.idToken || e.accessToken ? (e.idToken && (t.idToken = e.idToken), e.accessToken && (t.accessToken = e.accessToken), e.nonce && !e.pendingToken && (t.nonce = e.nonce), e.pendingToken && (t.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (t.accessToken = e.oauthToken, t.secret = e.oauthTokenSecret) : xe(
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), t;
  }
  /** {@inheritdoc AuthCredential.toJSON}  */
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an
   * {@link  AuthCredential}.
   *
   * @param json - Input can be either Object or the stringified representation of the object.
   * When string is provided, JSON.parse would be called first.
   *
   * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
   */
  static fromJSON(e) {
    const t = typeof e == "string" ? JSON.parse(e) : e, { providerId: r, signInMethod: i } = t, s = ro(t, ["providerId", "signInMethod"]);
    if (!r || !i)
      return null;
    const a = new Bt(r, i);
    return a.idToken = s.idToken || void 0, a.accessToken = s.accessToken || void 0, a.secret = s.secret, a.nonce = s.nonce, a.pendingToken = s.pendingToken || null, a;
  }
  /** @internal */
  _getIdTokenResponse(e) {
    const t = this.buildRequest();
    return cn(e, t);
  }
  /** @internal */
  _linkToIdToken(e, t) {
    const r = this.buildRequest();
    return r.idToken = t, cn(e, r);
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    const t = this.buildRequest();
    return t.autoCreate = !1, cn(e, t);
  }
  buildRequest() {
    const e = {
      requestUri: jm,
      returnSecureToken: !0
    };
    if (this.pendingToken)
      e.pendingToken = this.pendingToken;
    else {
      const t = {};
      this.idToken && (t.id_token = this.idToken), this.accessToken && (t.access_token = this.accessToken), this.secret && (t.oauth_token_secret = this.secret), t.providerId = this.providerId, this.nonce && !this.pendingToken && (t.nonce = this.nonce), e.postBody = yn(t);
    }
    return e;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function $m(n) {
  switch (n) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function qm(n) {
  const e = zn(Hn(n)).link, t = e ? zn(Hn(e)).deep_link_id : null, r = zn(Hn(n)).deep_link_id;
  return (r ? zn(Hn(r)).link : null) || r || t || e || n;
}
class ho {
  /**
   * @param actionLink - The link from which to extract the URL.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @internal
   */
  constructor(e) {
    var t, r, i, s, a, c;
    const l = zn(Hn(e)), d = (t = l.apiKey) !== null && t !== void 0 ? t : null, p = (r = l.oobCode) !== null && r !== void 0 ? r : null, y = $m((i = l.mode) !== null && i !== void 0 ? i : null);
    V(
      d && p && y,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), this.apiKey = d, this.operation = y, this.code = p, this.continueUrl = (s = l.continueUrl) !== null && s !== void 0 ? s : null, this.languageCode = (a = l.languageCode) !== null && a !== void 0 ? a : null, this.tenantId = (c = l.tenantId) !== null && c !== void 0 ? c : null;
  }
  /**
   * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
   * otherwise returns null.
   *
   * @param link  - The email action link string.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @public
   */
  static parseLink(e) {
    const t = qm(e);
    try {
      return new ho(t);
    } catch {
      return null;
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class vn {
  constructor() {
    this.providerId = vn.PROVIDER_ID;
  }
  /**
   * Initialize an {@link AuthCredential} using an email and password.
   *
   * @example
   * ```javascript
   * const authCredential = EmailAuthProvider.credential(email, password);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * ```javascript
   * const userCredential = await signInWithEmailAndPassword(auth, email, password);
   * ```
   *
   * @param email - Email address.
   * @param password - User account password.
   * @returns The auth provider credential.
   */
  static credential(e, t) {
    return or._fromEmailAndPassword(e, t);
  }
  /**
   * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
   * email link operation.
   *
   * @example
   * ```javascript
   * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * ```javascript
   * await sendSignInLinkToEmail(auth, email);
   * // Obtain emailLink from user.
   * const userCredential = await signInWithEmailLink(auth, email, emailLink);
   * ```
   *
   * @param auth - The {@link Auth} instance used to verify the link.
   * @param email - Email address.
   * @param emailLink - Sign-in email link.
   * @returns - The auth provider credential.
   */
  static credentialWithLink(e, t) {
    const r = ho.parseLink(t);
    return V(
      r,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), or._fromEmailAndCode(e, r.code, r.tenantId);
  }
}
vn.PROVIDER_ID = "password";
vn.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
vn.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
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
class fo {
  /**
   * Constructor for generic OAuth providers.
   *
   * @param providerId - Provider for which credentials should be generated.
   */
  constructor(e) {
    this.providerId = e, this.defaultLanguageCode = null, this.customParameters = {};
  }
  /**
   * Set the language gode.
   *
   * @param languageCode - language code
   */
  setDefaultLanguage(e) {
    this.defaultLanguageCode = e;
  }
  /**
   * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
   * operations.
   *
   * @remarks
   * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
   * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
   *
   * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
   */
  setCustomParameters(e) {
    return this.customParameters = e, this;
  }
  /**
   * Retrieve the current list of {@link CustomParameters}.
   */
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class _r extends fo {
  constructor() {
    super(...arguments), this.scopes = [];
  }
  /**
   * Add an OAuth scope to the credential.
   *
   * @param scope - Provider OAuth scope to add.
   */
  addScope(e) {
    return this.scopes.includes(e) || this.scopes.push(e), this;
  }
  /**
   * Retrieve the current list of OAuth scopes.
   */
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class dt extends _r {
  constructor() {
    super(
      "facebook.com"
      /* ProviderId.FACEBOOK */
    );
  }
  /**
   * Creates a credential for Facebook.
   *
   * @example
   * ```javascript
   * // `event` from the Facebook auth.authResponseChange callback.
   * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param accessToken - Facebook access token.
   */
  static credential(e) {
    return Bt._fromParams({
      providerId: dt.PROVIDER_ID,
      signInMethod: dt.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return dt.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return dt.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return dt.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
dt.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
dt.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
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
class ft extends _r {
  constructor() {
    super(
      "google.com"
      /* ProviderId.GOOGLE */
    ), this.addScope("profile");
  }
  /**
   * Creates a credential for Google. At least one of ID token and access token is required.
   *
   * @example
   * ```javascript
   * // \`googleUser\` from the onsuccess Google Sign In callback.
   * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param idToken - Google ID token.
   * @param accessToken - Google access token.
   */
  static credential(e, t) {
    return Bt._fromParams({
      providerId: ft.PROVIDER_ID,
      signInMethod: ft.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: t
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return ft.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return ft.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthIdToken: t, oauthAccessToken: r } = e;
    if (!t && !r)
      return null;
    try {
      return ft.credential(t, r);
    } catch {
      return null;
    }
  }
}
ft.GOOGLE_SIGN_IN_METHOD = "google.com";
ft.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
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
class pt extends _r {
  constructor() {
    super(
      "github.com"
      /* ProviderId.GITHUB */
    );
  }
  /**
   * Creates a credential for GitHub.
   *
   * @param accessToken - GitHub access token.
   */
  static credential(e) {
    return Bt._fromParams({
      providerId: pt.PROVIDER_ID,
      signInMethod: pt.GITHUB_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return pt.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return pt.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return pt.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
pt.GITHUB_SIGN_IN_METHOD = "github.com";
pt.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
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
class mt extends _r {
  constructor() {
    super(
      "twitter.com"
      /* ProviderId.TWITTER */
    );
  }
  /**
   * Creates a credential for Twitter.
   *
   * @param token - Twitter access token.
   * @param secret - Twitter secret.
   */
  static credential(e, t) {
    return Bt._fromParams({
      providerId: mt.PROVIDER_ID,
      signInMethod: mt.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: t
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return mt.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return mt.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthAccessToken: t, oauthTokenSecret: r } = e;
    if (!t || !r)
      return null;
    try {
      return mt.credential(t, r);
    } catch {
      return null;
    }
  }
}
mt.TWITTER_SIGN_IN_METHOD = "twitter.com";
mt.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
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
async function zm(n, e) {
  return mr(n, "POST", "/v1/accounts:signUp", St(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class jt {
  constructor(e) {
    this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType;
  }
  static async _fromIdTokenResponse(e, t, r, i = !1) {
    const s = await Ze._fromIdTokenResponse(e, r, i), a = Ic(r);
    return new jt({
      user: s,
      providerId: a,
      _tokenResponse: r,
      operationType: t
    });
  }
  static async _forOperation(e, t, r) {
    await e._updateTokensIfNecessary(
      r,
      /* reload */
      !0
    );
    const i = Ic(r);
    return new jt({
      user: e,
      providerId: i,
      _tokenResponse: r,
      operationType: t
    });
  }
}
function Ic(n) {
  return n.providerId ? n.providerId : "phoneNumber" in n ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class hi extends Ue {
  constructor(e, t, r, i) {
    var s;
    super(t.code, t.message), this.operationType = r, this.user = i, Object.setPrototypeOf(this, hi.prototype), this.customData = {
      appName: e.name,
      tenantId: (s = e.tenantId) !== null && s !== void 0 ? s : void 0,
      _serverResponse: t.customData._serverResponse,
      operationType: r
    };
  }
  static _fromErrorAndOperation(e, t, r, i) {
    return new hi(e, t, r, i);
  }
}
function ul(n, e, t, r) {
  return (e === "reauthenticate" ? t._getReauthenticationResolver(n) : t._getIdTokenResponse(n)).catch((s) => {
    throw s.code === "auth/multi-factor-auth-required" ? hi._fromErrorAndOperation(n, s, e, r) : s;
  });
}
async function Hm(n, e, t = !1) {
  const r = await ln(n, e._linkToIdToken(n.auth, await n.getIdToken()), t);
  return jt._forOperation(n, "link", r);
}
/**
 * @license
 * Copyright 2019 Google LLC
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
async function Wm(n, e, t = !1) {
  const { auth: r } = n;
  if (Be(r.app))
    return Promise.reject(tt(r));
  const i = "reauthenticate";
  try {
    const s = await ln(n, ul(r, i, e, n), t);
    V(
      s.idToken,
      r,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const a = ao(s.idToken);
    V(
      a,
      r,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const { sub: c } = a;
    return V(
      n.uid === c,
      r,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), jt._forOperation(n, i, s);
  } catch (s) {
    throw (s == null ? void 0 : s.code) === "auth/user-not-found" && xe(
      r,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), s;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function ll(n, e, t = !1) {
  if (Be(n.app))
    return Promise.reject(tt(n));
  const r = "signIn", i = await ul(n, r, e), s = await jt._fromIdTokenResponse(n, r, i);
  return t || await n._updateCurrentUser(s.user), s;
}
async function Km(n, e) {
  return ll(ot(n), e);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function hl(n) {
  const e = ot(n);
  e._getPasswordPolicyInternal() && await e._updatePasswordPolicy();
}
async function ZT(n, e, t) {
  if (Be(n.app))
    return Promise.reject(tt(n));
  const r = ot(n), a = await xs(r, {
    returnSecureToken: !0,
    email: e,
    password: t,
    clientType: "CLIENT_TYPE_WEB"
    /* RecaptchaClientType.WEB */
  }, "signUpPassword", zm).catch((l) => {
    throw l.code === "auth/password-does-not-meet-requirements" && hl(n), l;
  }), c = await jt._fromIdTokenResponse(r, "signIn", a);
  return await r._updateCurrentUser(c.user), c;
}
function ew(n, e, t) {
  return Be(n.app) ? Promise.reject(tt(n)) : Km(ne(n), vn.credential(e, t)).catch(async (r) => {
    throw r.code === "auth/password-does-not-meet-requirements" && hl(n), r;
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function Gm(n, e) {
  return Ge(n, "POST", "/v1/accounts:update", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function tw(n, { displayName: e, photoURL: t }) {
  if (e === void 0 && t === void 0)
    return;
  const r = ne(n), s = {
    idToken: await r.getIdToken(),
    displayName: e,
    photoUrl: t,
    returnSecureToken: !0
  }, a = await ln(r, Gm(r.auth, s));
  r.displayName = a.displayName || null, r.photoURL = a.photoUrl || null;
  const c = r.providerData.find(
    ({ providerId: l }) => l === "password"
    /* ProviderId.PASSWORD */
  );
  c && (c.displayName = r.displayName, c.photoURL = r.photoURL), await r._updateTokensIfNecessary(a);
}
function Qm(n, e, t, r) {
  return ne(n).onIdTokenChanged(e, t, r);
}
function Ym(n, e, t) {
  return ne(n).beforeAuthStateChanged(e, t);
}
function nw(n, e, t, r) {
  return ne(n).onAuthStateChanged(e, t, r);
}
function rw(n) {
  return ne(n).signOut();
}
const di = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
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
class dl {
  constructor(e, t) {
    this.storageRetriever = e, this.type = t;
  }
  _isAvailable() {
    try {
      return this.storage ? (this.storage.setItem(di, "1"), this.storage.removeItem(di), Promise.resolve(!0)) : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(e, t) {
    return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve();
  }
  _get(e) {
    const t = this.storage.getItem(e);
    return Promise.resolve(t ? JSON.parse(t) : null);
  }
  _remove(e) {
    return this.storage.removeItem(e), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function Jm() {
  const n = ge();
  return co(n) || Si(n);
}
const Xm = 1e3, Zm = 10;
class fl extends dl {
  constructor() {
    super(
      () => window.localStorage,
      "LOCAL"
      /* PersistenceType.LOCAL */
    ), this.boundEventHandler = (e, t) => this.onStorageEvent(e, t), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = Jm() && vm(), this.fallbackToPolling = sl(), this._shouldAllowMigration = !0;
  }
  forAllChangedKeys(e) {
    for (const t of Object.keys(this.listeners)) {
      const r = this.storage.getItem(t), i = this.localCache[t];
      r !== i && e(t, i, r);
    }
  }
  onStorageEvent(e, t = !1) {
    if (!e.key) {
      this.forAllChangedKeys((a, c, l) => {
        this.notifyListeners(a, l);
      });
      return;
    }
    const r = e.key;
    if (t ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
      const a = this.storage.getItem(r);
      if (e.newValue !== a)
        e.newValue !== null ? this.storage.setItem(r, e.newValue) : this.storage.removeItem(r);
      else if (this.localCache[r] === e.newValue && !t)
        return;
    }
    const i = () => {
      const a = this.storage.getItem(r);
      !t && this.localCache[r] === a || this.notifyListeners(r, a);
    }, s = this.storage.getItem(r);
    ym() && s !== e.newValue && e.newValue !== e.oldValue ? setTimeout(i, Zm) : i();
  }
  notifyListeners(e, t) {
    this.localCache[e] = t;
    const r = this.listeners[e];
    if (r)
      for (const i of Array.from(r))
        i(t && JSON.parse(t));
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(() => {
      this.forAllChangedKeys((e, t, r) => {
        this.onStorageEvent(
          new StorageEvent("storage", {
            key: e,
            oldValue: t,
            newValue: r
          }),
          /* poll */
          !0
        );
      });
    }, Xm);
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(e, t) {
    Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set(), this.localCache[e] = this.storage.getItem(e)), this.listeners[e].add(t);
  }
  _removeListener(e, t) {
    this.listeners[e] && (this.listeners[e].delete(t), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && (this.detachListener(), this.stopPolling());
  }
  // Update local cache on base operations:
  async _set(e, t) {
    await super._set(e, t), this.localCache[e] = JSON.stringify(t);
  }
  async _get(e) {
    const t = await super._get(e);
    return this.localCache[e] = JSON.stringify(t), t;
  }
  async _remove(e) {
    await super._remove(e), delete this.localCache[e];
  }
}
fl.type = "LOCAL";
const eg = fl;
/**
 * @license
 * Copyright 2020 Google LLC
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
class pl extends dl {
  constructor() {
    super(
      () => window.sessionStorage,
      "SESSION"
      /* PersistenceType.SESSION */
    );
  }
  _addListener(e, t) {
  }
  _removeListener(e, t) {
  }
}
pl.type = "SESSION";
const ml = pl;
/**
 * @license
 * Copyright 2019 Google LLC
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
function tg(n) {
  return Promise.all(n.map(async (e) => {
    try {
      return {
        fulfilled: !0,
        value: await e
      };
    } catch (t) {
      return {
        fulfilled: !1,
        reason: t
      };
    }
  }));
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class Pi {
  constructor(e) {
    this.eventTarget = e, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this);
  }
  /**
   * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
   *
   * @param eventTarget - An event target (such as window or self) through which the underlying
   * messages will be received.
   */
  static _getInstance(e) {
    const t = this.receivers.find((i) => i.isListeningto(e));
    if (t)
      return t;
    const r = new Pi(e);
    return this.receivers.push(r), r;
  }
  isListeningto(e) {
    return this.eventTarget === e;
  }
  /**
   * Fans out a MessageEvent to the appropriate listeners.
   *
   * @remarks
   * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
   * finished processing.
   *
   * @param event - The MessageEvent.
   *
   */
  async handleEvent(e) {
    const t = e, { eventId: r, eventType: i, data: s } = t.data, a = this.handlersMap[i];
    if (!(a != null && a.size))
      return;
    t.ports[0].postMessage({
      status: "ack",
      eventId: r,
      eventType: i
    });
    const c = Array.from(a).map(async (d) => d(t.origin, s)), l = await tg(c);
    t.ports[0].postMessage({
      status: "done",
      eventId: r,
      eventType: i,
      response: l
    });
  }
  /**
   * Subscribe an event handler for a particular event.
   *
   * @param eventType - Event name to subscribe to.
   * @param eventHandler - The event handler which should receive the events.
   *
   */
  _subscribe(e, t) {
    Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[e] || (this.handlersMap[e] = /* @__PURE__ */ new Set()), this.handlersMap[e].add(t);
  }
  /**
   * Unsubscribe an event handler from a particular event.
   *
   * @param eventType - Event name to unsubscribe from.
   * @param eventHandler - Optional event handler, if none provided, unsubscribe all handlers on this event.
   *
   */
  _unsubscribe(e, t) {
    this.handlersMap[e] && t && this.handlersMap[e].delete(t), (!t || this.handlersMap[e].size === 0) && delete this.handlersMap[e], Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
Pi.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
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
function po(n = "", e = 10) {
  let t = "";
  for (let r = 0; r < e; r++)
    t += Math.floor(Math.random() * 10);
  return n + t;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class ng {
  constructor(e) {
    this.target = e, this.handlers = /* @__PURE__ */ new Set();
  }
  /**
   * Unsubscribe the handler and remove it from our tracking Set.
   *
   * @param handler - The handler to unsubscribe.
   */
  removeMessageHandler(e) {
    e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1.close()), this.handlers.delete(e);
  }
  /**
   * Send a message to the Receiver located at {@link target}.
   *
   * @remarks
   * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
   * receiver has had a chance to fully process the event.
   *
   * @param eventType - Type of event to send.
   * @param data - The payload of the event.
   * @param timeout - Timeout for waiting on an ACK from the receiver.
   *
   * @returns An array of settled promises from all the handlers that were listening on the receiver.
   */
  async _send(e, t, r = 50) {
    const i = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!i)
      throw new Error(
        "connection_unavailable"
        /* _MessageError.CONNECTION_UNAVAILABLE */
      );
    let s, a;
    return new Promise((c, l) => {
      const d = po("", 20);
      i.port1.start();
      const p = setTimeout(() => {
        l(new Error(
          "unsupported_event"
          /* _MessageError.UNSUPPORTED_EVENT */
        ));
      }, r);
      a = {
        messageChannel: i,
        onMessage(y) {
          const A = y;
          if (A.data.eventId === d)
            switch (A.data.status) {
              case "ack":
                clearTimeout(p), s = setTimeout(
                  () => {
                    l(new Error(
                      "timeout"
                      /* _MessageError.TIMEOUT */
                    ));
                  },
                  3e3
                  /* _TimeoutDuration.COMPLETION */
                );
                break;
              case "done":
                clearTimeout(s), c(A.data.response);
                break;
              default:
                clearTimeout(p), clearTimeout(s), l(new Error(
                  "invalid_response"
                  /* _MessageError.INVALID_RESPONSE */
                ));
                break;
            }
        }
      }, this.handlers.add(a), i.port1.addEventListener("message", a.onMessage), this.target.postMessage({
        eventType: e,
        eventId: d,
        data: t
      }, [i.port2]);
    }).finally(() => {
      a && this.removeMessageHandler(a);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function oe() {
  return window;
}
function rg(n) {
  oe().location.href = n;
}
/**
 * @license
 * Copyright 2020 Google LLC.
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
function mo() {
  return typeof oe().WorkerGlobalScope < "u" && typeof oe().importScripts == "function";
}
async function ig() {
  if (!(navigator != null && navigator.serviceWorker))
    return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function sg() {
  var n;
  return ((n = navigator == null ? void 0 : navigator.serviceWorker) === null || n === void 0 ? void 0 : n.controller) || null;
}
function og() {
  return mo() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
const gl = "firebaseLocalStorageDb", ag = 1, fi = "firebaseLocalStorage", _l = "fbase_key";
class yr {
  constructor(e) {
    this.request = e;
  }
  toPromise() {
    return new Promise((e, t) => {
      this.request.addEventListener("success", () => {
        e(this.request.result);
      }), this.request.addEventListener("error", () => {
        t(this.request.error);
      });
    });
  }
}
function Ci(n, e) {
  return n.transaction([fi], e ? "readwrite" : "readonly").objectStore(fi);
}
function cg() {
  const n = indexedDB.deleteDatabase(gl);
  return new yr(n).toPromise();
}
function Us() {
  const n = indexedDB.open(gl, ag);
  return new Promise((e, t) => {
    n.addEventListener("error", () => {
      t(n.error);
    }), n.addEventListener("upgradeneeded", () => {
      const r = n.result;
      try {
        r.createObjectStore(fi, { keyPath: _l });
      } catch (i) {
        t(i);
      }
    }), n.addEventListener("success", async () => {
      const r = n.result;
      r.objectStoreNames.contains(fi) ? e(r) : (r.close(), await cg(), e(await Us()));
    });
  });
}
async function Tc(n, e, t) {
  const r = Ci(n, !0).put({
    [_l]: e,
    value: t
  });
  return new yr(r).toPromise();
}
async function ug(n, e) {
  const t = Ci(n, !1).get(e), r = await new yr(t).toPromise();
  return r === void 0 ? null : r.value;
}
function wc(n, e) {
  const t = Ci(n, !0).delete(e);
  return new yr(t).toPromise();
}
const lg = 800, hg = 3;
class yl {
  constructor() {
    this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
    }, () => {
    });
  }
  async _openDb() {
    return this.db ? this.db : (this.db = await Us(), this.db);
  }
  async _withRetries(e) {
    let t = 0;
    for (; ; )
      try {
        const r = await this._openDb();
        return await e(r);
      } catch (r) {
        if (t++ > hg)
          throw r;
        this.db && (this.db.close(), this.db = void 0);
      }
  }
  /**
   * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
   * postMessage interface to send these events to the worker ourselves.
   */
  async initializeServiceWorkerMessaging() {
    return mo() ? this.initializeReceiver() : this.initializeSender();
  }
  /**
   * As the worker we should listen to events from the main window.
   */
  async initializeReceiver() {
    this.receiver = Pi._getInstance(og()), this.receiver._subscribe("keyChanged", async (e, t) => ({
      keyProcessed: (await this._poll()).includes(t.key)
    })), this.receiver._subscribe("ping", async (e, t) => [
      "keyChanged"
      /* _EventType.KEY_CHANGED */
    ]);
  }
  /**
   * As the main window, we should let the worker know when keys change (set and remove).
   *
   * @remarks
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
   * may not resolve.
   */
  async initializeSender() {
    var e, t;
    if (this.activeServiceWorker = await ig(), !this.activeServiceWorker)
      return;
    this.sender = new ng(this.activeServiceWorker);
    const r = await this.sender._send(
      "ping",
      {},
      800
      /* _TimeoutDuration.LONG_ACK */
    );
    r && !((e = r[0]) === null || e === void 0) && e.fulfilled && !((t = r[0]) === null || t === void 0) && t.value.includes(
      "keyChanged"
      /* _EventType.KEY_CHANGED */
    ) && (this.serviceWorkerReceiverAvailable = !0);
  }
  /**
   * Let the worker know about a changed key, the exact key doesn't technically matter since the
   * worker will just trigger a full sync anyway.
   *
   * @remarks
   * For now, we only support one service worker per page.
   *
   * @param key - Storage key which changed.
   */
  async notifyServiceWorker(e) {
    if (!(!this.sender || !this.activeServiceWorker || sg() !== this.activeServiceWorker))
      try {
        await this.sender._send(
          "keyChanged",
          { key: e },
          // Use long timeout if receiver has previously responded to a ping from us.
          this.serviceWorkerReceiverAvailable ? 800 : 50
          /* _TimeoutDuration.ACK */
        );
      } catch {
      }
  }
  async _isAvailable() {
    try {
      if (!indexedDB)
        return !1;
      const e = await Us();
      return await Tc(e, di, "1"), await wc(e, di), !0;
    } catch {
    }
    return !1;
  }
  async _withPendingWrite(e) {
    this.pendingWrites++;
    try {
      await e();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(e, t) {
    return this._withPendingWrite(async () => (await this._withRetries((r) => Tc(r, e, t)), this.localCache[e] = t, this.notifyServiceWorker(e)));
  }
  async _get(e) {
    const t = await this._withRetries((r) => ug(r, e));
    return this.localCache[e] = t, t;
  }
  async _remove(e) {
    return this._withPendingWrite(async () => (await this._withRetries((t) => wc(t, e)), delete this.localCache[e], this.notifyServiceWorker(e)));
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const s = Ci(i, !1).getAll();
      return new yr(s).toPromise();
    });
    if (!e)
      return [];
    if (this.pendingWrites !== 0)
      return [];
    const t = [], r = /* @__PURE__ */ new Set();
    if (e.length !== 0)
      for (const { fbase_key: i, value: s } of e)
        r.add(i), JSON.stringify(this.localCache[i]) !== JSON.stringify(s) && (this.notifyListeners(i, s), t.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] && !r.has(i) && (this.notifyListeners(i, null), t.push(i));
    return t;
  }
  notifyListeners(e, t) {
    this.localCache[e] = t;
    const r = this.listeners[e];
    if (r)
      for (const i of Array.from(r))
        i(t);
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), lg);
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
  }
  _addListener(e, t) {
    Object.keys(this.listeners).length === 0 && this.startPolling(), this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set(), this._get(e)), this.listeners[e].add(t);
  }
  _removeListener(e, t) {
    this.listeners[e] && (this.listeners[e].delete(t), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
yl.type = "LOCAL";
const dg = yl;
/**
 * @license
 * Copyright 2020 Google LLC
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
const fg = 500, pg = 6e4, Hr = 1e12;
class mg {
  constructor(e) {
    this.auth = e, this.counter = Hr, this._widgets = /* @__PURE__ */ new Map();
  }
  render(e, t) {
    const r = this.counter;
    return this._widgets.set(r, new gg(e, this.auth.name, t || {})), this.counter++, r;
  }
  reset(e) {
    var t;
    const r = e || Hr;
    (t = this._widgets.get(r)) === null || t === void 0 || t.delete(), this._widgets.delete(r);
  }
  getResponse(e) {
    var t;
    const r = e || Hr;
    return ((t = this._widgets.get(r)) === null || t === void 0 ? void 0 : t.getResponse()) || "";
  }
  async execute(e) {
    var t;
    const r = e || Hr;
    return (t = this._widgets.get(r)) === null || t === void 0 || t.execute(), "";
  }
}
class gg {
  constructor(e, t, r) {
    this.params = r, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
      this.execute();
    };
    const i = typeof e == "string" ? document.getElementById(e) : e;
    V(i, "argument-error", { appName: t }), this.container = i, this.isVisible = this.params.size !== "invisible", this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler);
  }
  getResponse() {
    return this.checkIfDeleted(), this.responseToken;
  }
  delete() {
    this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler);
  }
  execute() {
    this.checkIfDeleted(), !this.timerId && (this.timerId = window.setTimeout(() => {
      this.responseToken = _g(50);
      const { callback: e, "expired-callback": t } = this.params;
      if (e)
        try {
          e(this.responseToken);
        } catch {
        }
      this.timerId = window.setTimeout(() => {
        if (this.timerId = null, this.responseToken = null, t)
          try {
            t();
          } catch {
          }
        this.isVisible && this.execute();
      }, pg);
    }, fg));
  }
  checkIfDeleted() {
    if (this.deleted)
      throw new Error("reCAPTCHA mock was already deleted!");
  }
}
function _g(n) {
  const e = [], t = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let r = 0; r < n; r++)
    e.push(t.charAt(Math.floor(Math.random() * t.length)));
  return e.join("");
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const vs = al("rcb"), yg = new pr(3e4, 6e4);
class vg {
  constructor() {
    var e;
    this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(!((e = oe().grecaptcha) === null || e === void 0) && e.render);
  }
  load(e, t = "") {
    return V(
      Eg(t),
      e,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), this.shouldResolveImmediately(t) && dc(oe().grecaptcha) ? Promise.resolve(oe().grecaptcha) : new Promise((r, i) => {
      const s = oe().setTimeout(() => {
        i(Ce(
          e,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, yg.get());
      oe()[vs] = () => {
        oe().clearTimeout(s), delete oe()[vs];
        const c = oe().grecaptcha;
        if (!c || !dc(c)) {
          i(Ce(
            e,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          ));
          return;
        }
        const l = c.render;
        c.render = (d, p) => {
          const y = l(d, p);
          return this.counter++, y;
        }, this.hostLanguage = t, r(c);
      };
      const a = `${bm()}?${yn({
        onload: vs,
        render: "explicit",
        hl: t
      })}`;
      uo(a).catch(() => {
        clearTimeout(s), i(Ce(
          e,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        ));
      });
    });
  }
  clearedOneInstance() {
    this.counter--;
  }
  shouldResolveImmediately(e) {
    var t;
    return !!(!((t = oe().grecaptcha) === null || t === void 0) && t.render) && (e === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded);
  }
}
function Eg(n) {
  return n.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(n);
}
class Ig {
  async load(e) {
    return new mg(e);
  }
  clearedOneInstance() {
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const Tg = "recaptcha", wg = {
  theme: "light",
  type: "image"
};
class iw {
  /**
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   *
   * @param containerOrId - The reCAPTCHA container parameter.
   *
   * @remarks
   * This has different meaning depending on whether the reCAPTCHA is hidden or visible. For a
   * visible reCAPTCHA the container must be empty. If a string is used, it has to correspond to
   * an element ID. The corresponding element must also must be in the DOM at the time of
   * initialization.
   *
   * @param parameters - The optional reCAPTCHA parameters.
   *
   * @remarks
   * Check the reCAPTCHA docs for a comprehensive list. All parameters are accepted except for
   * the sitekey. Firebase Auth backend provisions a reCAPTCHA for each project and will
   * configure this upon rendering. For an invisible reCAPTCHA, a size key must have the value
   * 'invisible'.
   */
  constructor(e, t, r = Object.assign({}, wg)) {
    this.parameters = r, this.type = Tg, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = /* @__PURE__ */ new Set(), this.renderPromise = null, this.recaptcha = null, this.auth = ot(e), this.isInvisible = this.parameters.size === "invisible", V(
      typeof document < "u",
      this.auth,
      "operation-not-supported-in-this-environment"
      /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
    );
    const i = typeof t == "string" ? document.getElementById(t) : t;
    V(
      i,
      this.auth,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), this.container = i, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new Ig() : new vg(), this.validateStartingState();
  }
  /**
   * Waits for the user to solve the reCAPTCHA and resolves with the reCAPTCHA token.
   *
   * @returns A Promise for the reCAPTCHA token.
   */
  async verify() {
    this.assertNotDestroyed();
    const e = await this.render(), t = this.getAssertedRecaptcha(), r = t.getResponse(e);
    return r || new Promise((i) => {
      const s = (a) => {
        a && (this.tokenChangeListeners.delete(s), i(a));
      };
      this.tokenChangeListeners.add(s), this.isInvisible && t.execute(e);
    });
  }
  /**
   * Renders the reCAPTCHA widget on the page.
   *
   * @returns A Promise that resolves with the reCAPTCHA widget ID.
   */
  render() {
    try {
      this.assertNotDestroyed();
    } catch (e) {
      return Promise.reject(e);
    }
    return this.renderPromise ? this.renderPromise : (this.renderPromise = this.makeRenderPromise().catch((e) => {
      throw this.renderPromise = null, e;
    }), this.renderPromise);
  }
  /** @internal */
  _reset() {
    this.assertNotDestroyed(), this.widgetId !== null && this.getAssertedRecaptcha().reset(this.widgetId);
  }
  /**
   * Clears the reCAPTCHA widget from the page and destroys the instance.
   */
  clear() {
    this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((e) => {
      this.container.removeChild(e);
    });
  }
  validateStartingState() {
    V(
      !this.parameters.sitekey,
      this.auth,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), V(
      this.isInvisible || !this.container.hasChildNodes(),
      this.auth,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), V(
      typeof document < "u",
      this.auth,
      "operation-not-supported-in-this-environment"
      /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
    );
  }
  makeTokenCallback(e) {
    return (t) => {
      if (this.tokenChangeListeners.forEach((r) => r(t)), typeof e == "function")
        e(t);
      else if (typeof e == "string") {
        const r = oe()[e];
        typeof r == "function" && r(t);
      }
    };
  }
  assertNotDestroyed() {
    V(
      !this.destroyed,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
  }
  async makeRenderPromise() {
    if (await this.init(), !this.widgetId) {
      let e = this.container;
      if (!this.isInvisible) {
        const t = document.createElement("div");
        e.appendChild(t), e = t;
      }
      this.widgetId = this.getAssertedRecaptcha().render(e, this.parameters);
    }
    return this.widgetId;
  }
  async init() {
    V(
      Wu() && !mo(),
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), await Ag(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
    const e = await am(this.auth);
    V(
      e,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.parameters.sitekey = e;
  }
  getAssertedRecaptcha() {
    return V(
      this.recaptcha,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.recaptcha;
  }
}
function Ag() {
  let n = null;
  return new Promise((e) => {
    if (document.readyState === "complete") {
      e();
      return;
    }
    n = () => e(), window.addEventListener("load", n);
  }).catch((e) => {
    throw n && window.removeEventListener("load", n), e;
  });
}
/**
 * @license
 * Copyright 2021 Google LLC
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
function vl(n, e) {
  return e ? et(e) : (V(
    n._popupRedirectResolver,
    n,
    "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
  ), n._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class go extends lo {
  constructor(e) {
    super(
      "custom",
      "custom"
      /* ProviderId.CUSTOM */
    ), this.params = e;
  }
  _getIdTokenResponse(e) {
    return cn(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, t) {
    return cn(e, this._buildIdpRequest(t));
  }
  _getReauthenticationResolver(e) {
    return cn(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    const t = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0
    };
    return e && (t.idToken = e), t;
  }
}
function Rg(n) {
  return ll(n.auth, new go(n), n.bypassAuthState);
}
function bg(n) {
  const { auth: e, user: t } = n;
  return V(
    t,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Wm(t, new go(n), n.bypassAuthState);
}
async function Sg(n) {
  const { auth: e, user: t } = n;
  return V(
    t,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Hm(t, new go(n), n.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class El {
  constructor(e, t, r, i, s = !1) {
    this.auth = e, this.resolver = r, this.user = i, this.bypassAuthState = s, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(t) ? t : [t];
  }
  execute() {
    return new Promise(async (e, t) => {
      this.pendingPromise = { resolve: e, reject: t };
      try {
        this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(e) {
    const { urlResponse: t, sessionId: r, postBody: i, tenantId: s, error: a, type: c } = e;
    if (a) {
      this.reject(a);
      return;
    }
    const l = {
      auth: this.auth,
      requestUri: t,
      sessionId: r,
      tenantId: s || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState
    };
    try {
      this.resolve(await this.getIdpTask(c)(l));
    } catch (d) {
      this.reject(d);
    }
  }
  onError(e) {
    this.reject(e);
  }
  getIdpTask(e) {
    switch (e) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return Rg;
      case "linkViaPopup":
      case "linkViaRedirect":
        return Sg;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return bg;
      default:
        xe(
          this.auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  resolve(e) {
    rt(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp();
  }
  reject(e) {
    rt(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const Pg = new pr(2e3, 1e4);
async function sw(n, e, t) {
  if (Be(n.app))
    return Promise.reject(Ce(
      n,
      "operation-not-supported-in-this-environment"
      /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
    ));
  const r = ot(n);
  Zp(n, e, fo);
  const i = vl(r, t);
  return new Vt(r, "signInViaPopup", e, i).executeNotNull();
}
class Vt extends El {
  constructor(e, t, r, i, s) {
    super(e, t, i, s), this.provider = r, this.authWindow = null, this.pollId = null, Vt.currentPopupAction && Vt.currentPopupAction.cancel(), Vt.currentPopupAction = this;
  }
  async executeNotNull() {
    const e = await this.execute();
    return V(
      e,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), e;
  }
  async onExecution() {
    rt(this.filter.length === 1, "Popup operations only handle one event");
    const e = po();
    this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      // There's always one, see constructor
      e
    ), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch((t) => {
      this.reject(t);
    }), this.resolver._isIframeWebStorageSupported(this.auth, (t) => {
      t || this.reject(Ce(
        this.auth,
        "web-storage-unsupported"
        /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */
      ));
    }), this.pollUserCancellation();
  }
  get eventId() {
    var e;
    return ((e = this.authWindow) === null || e === void 0 ? void 0 : e.associatedEvent) || null;
  }
  cancel() {
    this.reject(Ce(
      this.auth,
      "cancelled-popup-request"
      /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
    ));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Vt.currentPopupAction = null;
  }
  pollUserCancellation() {
    const e = () => {
      var t, r;
      if (!((r = (t = this.authWindow) === null || t === void 0 ? void 0 : t.window) === null || r === void 0) && r.closed) {
        this.pollId = window.setTimeout(
          () => {
            this.pollId = null, this.reject(Ce(
              this.auth,
              "popup-closed-by-user"
              /* AuthErrorCode.POPUP_CLOSED_BY_USER */
            ));
          },
          8e3
          /* _Timeout.AUTH_EVENT */
        );
        return;
      }
      this.pollId = window.setTimeout(e, Pg.get());
    };
    e();
  }
}
Vt.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
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
const Cg = "pendingRedirect", ei = /* @__PURE__ */ new Map();
class kg extends El {
  constructor(e, t, r = !1) {
    super(e, [
      "signInViaRedirect",
      "linkViaRedirect",
      "reauthViaRedirect",
      "unknown"
      /* AuthEventType.UNKNOWN */
    ], t, void 0, r), this.eventId = null;
  }
  /**
   * Override the execute function; if we already have a redirect result, then
   * just return it.
   */
  async execute() {
    let e = ei.get(this.auth._key());
    if (!e) {
      try {
        const r = await Dg(this.resolver, this.auth) ? await super.execute() : null;
        e = () => Promise.resolve(r);
      } catch (t) {
        e = () => Promise.reject(t);
      }
      ei.set(this.auth._key(), e);
    }
    return this.bypassAuthState || ei.set(this.auth._key(), () => Promise.resolve(null)), e();
  }
  async onAuthEvent(e) {
    if (e.type === "signInViaRedirect")
      return super.onAuthEvent(e);
    if (e.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (e.eventId) {
      const t = await this.auth._redirectUserForId(e.eventId);
      if (t)
        return this.user = t, super.onAuthEvent(e);
      this.resolve(null);
    }
  }
  async onExecution() {
  }
  cleanUp() {
  }
}
async function Dg(n, e) {
  const t = Vg(e), r = Og(n);
  if (!await r._isAvailable())
    return !1;
  const i = await r._get(t) === "true";
  return await r._remove(t), i;
}
function Ng(n, e) {
  ei.set(n._key(), e);
}
function Og(n) {
  return et(n._redirectPersistence);
}
function Vg(n) {
  return Zr(Cg, n.config.apiKey, n.name);
}
async function Lg(n, e, t = !1) {
  if (Be(n.app))
    return Promise.reject(tt(n));
  const r = ot(n), i = vl(r, e), a = await new kg(r, i, t).execute();
  return a && !t && (delete a.user._redirectEventId, await r._persistUserIfCurrent(a.user), await r._setRedirectUser(null, e)), a;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const Mg = 10 * 60 * 1e3;
class xg {
  constructor(e) {
    this.auth = e, this.cachedEventUids = /* @__PURE__ */ new Set(), this.consumers = /* @__PURE__ */ new Set(), this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now();
  }
  registerConsumer(e) {
    this.consumers.add(e), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null);
  }
  unregisterConsumer(e) {
    this.consumers.delete(e);
  }
  onEvent(e) {
    if (this.hasEventBeenHandled(e))
      return !1;
    let t = !1;
    return this.consumers.forEach((r) => {
      this.isEventForConsumer(e, r) && (t = !0, this.sendToConsumer(e, r), this.saveEventToCache(e));
    }), this.hasHandledPotentialRedirect || !Ug(e) || (this.hasHandledPotentialRedirect = !0, t || (this.queuedRedirectEvent = e, t = !0)), t;
  }
  sendToConsumer(e, t) {
    var r;
    if (e.error && !Il(e)) {
      const i = ((r = e.error.code) === null || r === void 0 ? void 0 : r.split("auth/")[1]) || "internal-error";
      t.onError(Ce(this.auth, i));
    } else
      t.onAuthEvent(e);
  }
  isEventForConsumer(e, t) {
    const r = t.eventId === null || !!e.eventId && e.eventId === t.eventId;
    return t.filter.includes(e.type) && r;
  }
  hasEventBeenHandled(e) {
    return Date.now() - this.lastProcessedEventTime >= Mg && this.cachedEventUids.clear(), this.cachedEventUids.has(Ac(e));
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(Ac(e)), this.lastProcessedEventTime = Date.now();
  }
}
function Ac(n) {
  return [n.type, n.eventId, n.sessionId, n.tenantId].filter((e) => e).join("-");
}
function Il({ type: n, error: e }) {
  return n === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event";
}
function Ug(n) {
  switch (n.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Il(n);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function Fg(n, e = {}) {
  return Ge(n, "GET", "/v1/projects", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const Bg = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, jg = /^https?/;
async function $g(n) {
  if (n.config.emulator)
    return;
  const { authorizedDomains: e } = await Fg(n);
  for (const t of e)
    try {
      if (qg(t))
        return;
    } catch {
    }
  xe(
    n,
    "unauthorized-domain"
    /* AuthErrorCode.INVALID_ORIGIN */
  );
}
function qg(n) {
  const e = Ls(), { protocol: t, hostname: r } = new URL(e);
  if (n.startsWith("chrome-extension://")) {
    const a = new URL(n);
    return a.hostname === "" && r === "" ? t === "chrome-extension:" && n.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : t === "chrome-extension:" && a.hostname === r;
  }
  if (!jg.test(t))
    return !1;
  if (Bg.test(n))
    return r === n;
  const i = n.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
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
const zg = new pr(3e4, 6e4);
function Rc() {
  const n = oe().___jsl;
  if (n != null && n.H) {
    for (const e of Object.keys(n.H))
      if (n.H[e].r = n.H[e].r || [], n.H[e].L = n.H[e].L || [], n.H[e].r = [...n.H[e].L], n.CP)
        for (let t = 0; t < n.CP.length; t++)
          n.CP[t] = null;
  }
}
function Hg(n) {
  return new Promise((e, t) => {
    var r, i, s;
    function a() {
      Rc(), gapi.load("gapi.iframes", {
        callback: () => {
          e(gapi.iframes.getContext());
        },
        ontimeout: () => {
          Rc(), t(Ce(
            n,
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ));
        },
        timeout: zg.get()
      });
    }
    if (!((i = (r = oe().gapi) === null || r === void 0 ? void 0 : r.iframes) === null || i === void 0) && i.Iframe)
      e(gapi.iframes.getContext());
    else if (!((s = oe().gapi) === null || s === void 0) && s.load)
      a();
    else {
      const c = al("iframefcb");
      return oe()[c] = () => {
        gapi.load ? a() : t(Ce(
          n,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, uo(`${Pm()}?onload=${c}`).catch((l) => t(l));
    }
  }).catch((e) => {
    throw ti = null, e;
  });
}
let ti = null;
function Wg(n) {
  return ti = ti || Hg(n), ti;
}
/**
 * @license
 * Copyright 2020 Google LLC.
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
const Kg = new pr(5e3, 15e3), Gg = "__/auth/iframe", Qg = "emulator/auth/iframe", Yg = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
}, Jg = /* @__PURE__ */ new Map([
  ["identitytoolkit.googleapis.com", "p"],
  ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
  ["test-identitytoolkit.sandbox.googleapis.com", "t"]
  // test
]);
function Xg(n) {
  const e = n.config;
  V(
    e.authDomain,
    n,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  );
  const t = e.emulator ? oo(e, Qg) : `https://${n.config.authDomain}/${Gg}`, r = {
    apiKey: e.apiKey,
    appName: n.name,
    v: Qt
  }, i = Jg.get(n.config.apiHost);
  i && (r.eid = i);
  const s = n._getFrameworks();
  return s.length && (r.fw = s.join(",")), `${t}?${yn(r).slice(1)}`;
}
async function Zg(n) {
  const e = await Wg(n), t = oe().gapi;
  return V(
    t,
    n,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), e.open({
    where: document.body,
    url: Xg(n),
    messageHandlersFilter: t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: Yg,
    dontclear: !0
  }, (r) => new Promise(async (i, s) => {
    await r.restyle({
      // Prevent iframe from closing on mouse out.
      setHideOnLeave: !1
    });
    const a = Ce(
      n,
      "network-request-failed"
      /* AuthErrorCode.NETWORK_REQUEST_FAILED */
    ), c = oe().setTimeout(() => {
      s(a);
    }, Kg.get());
    function l() {
      oe().clearTimeout(c), i(r);
    }
    r.ping(l).then(l, () => {
      s(a);
    });
  }));
}
/**
 * @license
 * Copyright 2020 Google LLC.
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
const e_ = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
}, t_ = 500, n_ = 600, r_ = "_blank", i_ = "http://localhost";
class bc {
  constructor(e) {
    this.window = e, this.associatedEvent = null;
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {
      }
  }
}
function s_(n, e, t, r = t_, i = n_) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(), a = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let c = "";
  const l = Object.assign(Object.assign({}, e_), {
    width: r.toString(),
    height: i.toString(),
    top: s,
    left: a
  }), d = ge().toLowerCase();
  t && (c = el(d) ? r_ : t), Zu(d) && (e = e || i_, l.scrollbars = "yes");
  const p = Object.entries(l).reduce((A, [b, D]) => `${A}${b}=${D},`, "");
  if (_m(d) && c !== "_self")
    return o_(e || "", c), new bc(null);
  const y = window.open(e || "", c, p);
  V(
    y,
    n,
    "popup-blocked"
    /* AuthErrorCode.POPUP_BLOCKED */
  );
  try {
    y.focus();
  } catch {
  }
  return new bc(y);
}
function o_(n, e) {
  const t = document.createElement("a");
  t.href = n, t.target = e;
  const r = document.createEvent("MouseEvent");
  r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), t.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
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
const a_ = "__/auth/handler", c_ = "emulator/auth/handler", u_ = encodeURIComponent("fac");
async function Sc(n, e, t, r, i, s) {
  V(
    n.config.authDomain,
    n,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  ), V(
    n.config.apiKey,
    n,
    "invalid-api-key"
    /* AuthErrorCode.INVALID_API_KEY */
  );
  const a = {
    apiKey: n.config.apiKey,
    appName: n.name,
    authType: t,
    redirectUrl: r,
    v: Qt,
    eventId: i
  };
  if (e instanceof fo) {
    e.setDefaultLanguage(n.languageCode), a.providerId = e.providerId || "", Mf(e.getCustomParameters()) || (a.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [p, y] of Object.entries({}))
      a[p] = y;
  }
  if (e instanceof _r) {
    const p = e.getScopes().filter((y) => y !== "");
    p.length > 0 && (a.scopes = p.join(","));
  }
  n.tenantId && (a.tid = n.tenantId);
  const c = a;
  for (const p of Object.keys(c))
    c[p] === void 0 && delete c[p];
  const l = await n._getAppCheckToken(), d = l ? `#${u_}=${encodeURIComponent(l)}` : "";
  return `${l_(n)}?${yn(c).slice(1)}${d}`;
}
function l_({ config: n }) {
  return n.emulator ? oo(n, c_) : `https://${n.authDomain}/${a_}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const Es = "webStorageSupport";
class h_ {
  constructor() {
    this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = ml, this._completeRedirectFn = Lg, this._overrideRedirectResult = Ng;
  }
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
  async _openPopup(e, t, r, i) {
    var s;
    rt((s = this.eventManagers[e._key()]) === null || s === void 0 ? void 0 : s.manager, "_initialize() not called before _openPopup()");
    const a = await Sc(e, t, r, Ls(), i);
    return s_(e, a, po());
  }
  async _openRedirect(e, t, r, i) {
    await this._originValidation(e);
    const s = await Sc(e, t, r, Ls(), i);
    return rg(s), new Promise(() => {
    });
  }
  _initialize(e) {
    const t = e._key();
    if (this.eventManagers[t]) {
      const { manager: i, promise: s } = this.eventManagers[t];
      return i ? Promise.resolve(i) : (rt(s, "If manager is not set, promise should be"), s);
    }
    const r = this.initAndGetManager(e);
    return this.eventManagers[t] = { promise: r }, r.catch(() => {
      delete this.eventManagers[t];
    }), r;
  }
  async initAndGetManager(e) {
    const t = await Zg(e), r = new xg(e);
    return t.register("authEvent", (i) => (V(
      i == null ? void 0 : i.authEvent,
      e,
      "invalid-auth-event"
      /* AuthErrorCode.INVALID_AUTH_EVENT */
    ), {
      status: r.onEvent(i.authEvent) ? "ACK" : "ERROR"
      /* GapiOutcome.ERROR */
    }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = { manager: r }, this.iframes[e._key()] = t, r;
  }
  _isIframeWebStorageSupported(e, t) {
    this.iframes[e._key()].send(Es, { type: Es }, (i) => {
      var s;
      const a = (s = i == null ? void 0 : i[0]) === null || s === void 0 ? void 0 : s[Es];
      a !== void 0 && t(!!a), xe(
        e,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(e) {
    const t = e._key();
    return this.originValidationPromises[t] || (this.originValidationPromises[t] = $g(e)), this.originValidationPromises[t];
  }
  get _shouldInitProactively() {
    return sl() || co() || Si();
  }
}
const d_ = h_;
var Pc = "@firebase/auth", Cc = "1.7.6";
/**
 * @license
 * Copyright 2020 Google LLC
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
class f_ {
  constructor(e) {
    this.auth = e, this.internalListeners = /* @__PURE__ */ new Map();
  }
  getUid() {
    var e;
    return this.assertAuthConfigured(), ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) || null;
  }
  async getToken(e) {
    return this.assertAuthConfigured(), await this.auth._initializationPromise, this.auth.currentUser ? { accessToken: await this.auth.currentUser.getIdToken(e) } : null;
  }
  addAuthTokenListener(e) {
    if (this.assertAuthConfigured(), this.internalListeners.has(e))
      return;
    const t = this.auth.onIdTokenChanged((r) => {
      e((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(e, t), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const t = this.internalListeners.get(e);
    t && (this.internalListeners.delete(e), t(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    V(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
      /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function p_(n) {
  switch (n) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    case "WebExtension":
      return "web-extension";
    default:
      return;
  }
}
function m_(n) {
  $e(new Me(
    "auth",
    (e, { options: t }) => {
      const r = e.getProvider("app").getImmediate(), i = e.getProvider("heartbeat"), s = e.getProvider("app-check-internal"), { apiKey: a, authDomain: c } = r.options;
      V(a && !a.includes(":"), "invalid-api-key", { appName: r.name });
      const l = {
        apiKey: a,
        authDomain: c,
        clientPlatform: n,
        apiHost: "identitytoolkit.googleapis.com",
        tokenApiHost: "securetoken.googleapis.com",
        apiScheme: "https",
        sdkClientVersion: ol(n)
      }, d = new Am(r, i, s, l);
      return Om(d, t), d;
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  ).setInstanceCreatedCallback((e, t, r) => {
    e.getProvider(
      "auth-internal"
      /* _ComponentName.AUTH_INTERNAL */
    ).initialize();
  })), $e(new Me(
    "auth-internal",
    (e) => {
      const t = ot(e.getProvider(
        "auth"
        /* _ComponentName.AUTH */
      ).getImmediate());
      return ((r) => new f_(r))(t);
    },
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  )), Pe(Pc, Cc, p_(n)), Pe(Pc, Cc, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
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
const g_ = 5 * 60, __ = Ou("authIdTokenMaxAge") || g_;
let kc = null;
const y_ = (n) => async (e) => {
  const t = e && await e.getIdTokenResult(), r = t && ((/* @__PURE__ */ new Date()).getTime() - Date.parse(t.issuedAtTime)) / 1e3;
  if (r && r > __)
    return;
  const i = t == null ? void 0 : t.token;
  kc !== i && (kc = i, await fetch(n, {
    method: i ? "POST" : "DELETE",
    headers: i ? {
      Authorization: `Bearer ${i}`
    } : {}
  }));
};
function v_(n = bi()) {
  const e = bt(n, "auth");
  if (e.isInitialized())
    return e.getImmediate();
  const t = Nm(n, {
    popupRedirectResolver: d_,
    persistence: [
      dg,
      eg,
      ml
    ]
  }), r = Ou("authTokenSyncURL");
  if (r && typeof isSecureContext == "boolean" && isSecureContext) {
    const s = new URL(r, location.origin);
    if (location.origin === s.origin) {
      const a = y_(s.toString());
      Ym(t, a, () => a(t.currentUser)), Qm(t, (c) => a(c));
    }
  }
  const i = ku("auth");
  return i && Vm(t, `http://${i}`), t;
}
function E_() {
  var n, e;
  return (e = (n = document.getElementsByTagName("head")) === null || n === void 0 ? void 0 : n[0]) !== null && e !== void 0 ? e : document;
}
Rm({
  loadJS(n) {
    return new Promise((e, t) => {
      const r = document.createElement("script");
      r.setAttribute("src", n), r.onload = e, r.onerror = (i) => {
        const s = Ce(
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        s.customData = i, t(s);
      }, r.type = "text/javascript", r.charset = "UTF-8", E_().appendChild(r);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
});
m_(
  "Browser"
  /* ClientPlatform.BROWSER */
);
var Dc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/
var xt, Tl;
(function() {
  var n;
  /** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  function e(E, m) {
    function _() {
    }
    _.prototype = m.prototype, E.D = m.prototype, E.prototype = new _(), E.prototype.constructor = E, E.C = function(v, I, w) {
      for (var g = Array(arguments.length - 2), Qe = 2; Qe < arguments.length; Qe++) g[Qe - 2] = arguments[Qe];
      return m.prototype[I].apply(v, g);
    };
  }
  function t() {
    this.blockSize = -1;
  }
  function r() {
    this.blockSize = -1, this.blockSize = 64, this.g = Array(4), this.B = Array(this.blockSize), this.o = this.h = 0, this.s();
  }
  e(r, t), r.prototype.s = function() {
    this.g[0] = 1732584193, this.g[1] = 4023233417, this.g[2] = 2562383102, this.g[3] = 271733878, this.o = this.h = 0;
  };
  function i(E, m, _) {
    _ || (_ = 0);
    var v = Array(16);
    if (typeof m == "string") for (var I = 0; 16 > I; ++I) v[I] = m.charCodeAt(_++) | m.charCodeAt(_++) << 8 | m.charCodeAt(_++) << 16 | m.charCodeAt(_++) << 24;
    else for (I = 0; 16 > I; ++I) v[I] = m[_++] | m[_++] << 8 | m[_++] << 16 | m[_++] << 24;
    m = E.g[0], _ = E.g[1], I = E.g[2];
    var w = E.g[3], g = m + (w ^ _ & (I ^ w)) + v[0] + 3614090360 & 4294967295;
    m = _ + (g << 7 & 4294967295 | g >>> 25), g = w + (I ^ m & (_ ^ I)) + v[1] + 3905402710 & 4294967295, w = m + (g << 12 & 4294967295 | g >>> 20), g = I + (_ ^ w & (m ^ _)) + v[2] + 606105819 & 4294967295, I = w + (g << 17 & 4294967295 | g >>> 15), g = _ + (m ^ I & (w ^ m)) + v[3] + 3250441966 & 4294967295, _ = I + (g << 22 & 4294967295 | g >>> 10), g = m + (w ^ _ & (I ^ w)) + v[4] + 4118548399 & 4294967295, m = _ + (g << 7 & 4294967295 | g >>> 25), g = w + (I ^ m & (_ ^ I)) + v[5] + 1200080426 & 4294967295, w = m + (g << 12 & 4294967295 | g >>> 20), g = I + (_ ^ w & (m ^ _)) + v[6] + 2821735955 & 4294967295, I = w + (g << 17 & 4294967295 | g >>> 15), g = _ + (m ^ I & (w ^ m)) + v[7] + 4249261313 & 4294967295, _ = I + (g << 22 & 4294967295 | g >>> 10), g = m + (w ^ _ & (I ^ w)) + v[8] + 1770035416 & 4294967295, m = _ + (g << 7 & 4294967295 | g >>> 25), g = w + (I ^ m & (_ ^ I)) + v[9] + 2336552879 & 4294967295, w = m + (g << 12 & 4294967295 | g >>> 20), g = I + (_ ^ w & (m ^ _)) + v[10] + 4294925233 & 4294967295, I = w + (g << 17 & 4294967295 | g >>> 15), g = _ + (m ^ I & (w ^ m)) + v[11] + 2304563134 & 4294967295, _ = I + (g << 22 & 4294967295 | g >>> 10), g = m + (w ^ _ & (I ^ w)) + v[12] + 1804603682 & 4294967295, m = _ + (g << 7 & 4294967295 | g >>> 25), g = w + (I ^ m & (_ ^ I)) + v[13] + 4254626195 & 4294967295, w = m + (g << 12 & 4294967295 | g >>> 20), g = I + (_ ^ w & (m ^ _)) + v[14] + 2792965006 & 4294967295, I = w + (g << 17 & 4294967295 | g >>> 15), g = _ + (m ^ I & (w ^ m)) + v[15] + 1236535329 & 4294967295, _ = I + (g << 22 & 4294967295 | g >>> 10), g = m + (I ^ w & (_ ^ I)) + v[1] + 4129170786 & 4294967295, m = _ + (g << 5 & 4294967295 | g >>> 27), g = w + (_ ^ I & (m ^ _)) + v[6] + 3225465664 & 4294967295, w = m + (g << 9 & 4294967295 | g >>> 23), g = I + (m ^ _ & (w ^ m)) + v[11] + 643717713 & 4294967295, I = w + (g << 14 & 4294967295 | g >>> 18), g = _ + (w ^ m & (I ^ w)) + v[0] + 3921069994 & 4294967295, _ = I + (g << 20 & 4294967295 | g >>> 12), g = m + (I ^ w & (_ ^ I)) + v[5] + 3593408605 & 4294967295, m = _ + (g << 5 & 4294967295 | g >>> 27), g = w + (_ ^ I & (m ^ _)) + v[10] + 38016083 & 4294967295, w = m + (g << 9 & 4294967295 | g >>> 23), g = I + (m ^ _ & (w ^ m)) + v[15] + 3634488961 & 4294967295, I = w + (g << 14 & 4294967295 | g >>> 18), g = _ + (w ^ m & (I ^ w)) + v[4] + 3889429448 & 4294967295, _ = I + (g << 20 & 4294967295 | g >>> 12), g = m + (I ^ w & (_ ^ I)) + v[9] + 568446438 & 4294967295, m = _ + (g << 5 & 4294967295 | g >>> 27), g = w + (_ ^ I & (m ^ _)) + v[14] + 3275163606 & 4294967295, w = m + (g << 9 & 4294967295 | g >>> 23), g = I + (m ^ _ & (w ^ m)) + v[3] + 4107603335 & 4294967295, I = w + (g << 14 & 4294967295 | g >>> 18), g = _ + (w ^ m & (I ^ w)) + v[8] + 1163531501 & 4294967295, _ = I + (g << 20 & 4294967295 | g >>> 12), g = m + (I ^ w & (_ ^ I)) + v[13] + 2850285829 & 4294967295, m = _ + (g << 5 & 4294967295 | g >>> 27), g = w + (_ ^ I & (m ^ _)) + v[2] + 4243563512 & 4294967295, w = m + (g << 9 & 4294967295 | g >>> 23), g = I + (m ^ _ & (w ^ m)) + v[7] + 1735328473 & 4294967295, I = w + (g << 14 & 4294967295 | g >>> 18), g = _ + (w ^ m & (I ^ w)) + v[12] + 2368359562 & 4294967295, _ = I + (g << 20 & 4294967295 | g >>> 12), g = m + (_ ^ I ^ w) + v[5] + 4294588738 & 4294967295, m = _ + (g << 4 & 4294967295 | g >>> 28), g = w + (m ^ _ ^ I) + v[8] + 2272392833 & 4294967295, w = m + (g << 11 & 4294967295 | g >>> 21), g = I + (w ^ m ^ _) + v[11] + 1839030562 & 4294967295, I = w + (g << 16 & 4294967295 | g >>> 16), g = _ + (I ^ w ^ m) + v[14] + 4259657740 & 4294967295, _ = I + (g << 23 & 4294967295 | g >>> 9), g = m + (_ ^ I ^ w) + v[1] + 2763975236 & 4294967295, m = _ + (g << 4 & 4294967295 | g >>> 28), g = w + (m ^ _ ^ I) + v[4] + 1272893353 & 4294967295, w = m + (g << 11 & 4294967295 | g >>> 21), g = I + (w ^ m ^ _) + v[7] + 4139469664 & 4294967295, I = w + (g << 16 & 4294967295 | g >>> 16), g = _ + (I ^ w ^ m) + v[10] + 3200236656 & 4294967295, _ = I + (g << 23 & 4294967295 | g >>> 9), g = m + (_ ^ I ^ w) + v[13] + 681279174 & 4294967295, m = _ + (g << 4 & 4294967295 | g >>> 28), g = w + (m ^ _ ^ I) + v[0] + 3936430074 & 4294967295, w = m + (g << 11 & 4294967295 | g >>> 21), g = I + (w ^ m ^ _) + v[3] + 3572445317 & 4294967295, I = w + (g << 16 & 4294967295 | g >>> 16), g = _ + (I ^ w ^ m) + v[6] + 76029189 & 4294967295, _ = I + (g << 23 & 4294967295 | g >>> 9), g = m + (_ ^ I ^ w) + v[9] + 3654602809 & 4294967295, m = _ + (g << 4 & 4294967295 | g >>> 28), g = w + (m ^ _ ^ I) + v[12] + 3873151461 & 4294967295, w = m + (g << 11 & 4294967295 | g >>> 21), g = I + (w ^ m ^ _) + v[15] + 530742520 & 4294967295, I = w + (g << 16 & 4294967295 | g >>> 16), g = _ + (I ^ w ^ m) + v[2] + 3299628645 & 4294967295, _ = I + (g << 23 & 4294967295 | g >>> 9), g = m + (I ^ (_ | ~w)) + v[0] + 4096336452 & 4294967295, m = _ + (g << 6 & 4294967295 | g >>> 26), g = w + (_ ^ (m | ~I)) + v[7] + 1126891415 & 4294967295, w = m + (g << 10 & 4294967295 | g >>> 22), g = I + (m ^ (w | ~_)) + v[14] + 2878612391 & 4294967295, I = w + (g << 15 & 4294967295 | g >>> 17), g = _ + (w ^ (I | ~m)) + v[5] + 4237533241 & 4294967295, _ = I + (g << 21 & 4294967295 | g >>> 11), g = m + (I ^ (_ | ~w)) + v[12] + 1700485571 & 4294967295, m = _ + (g << 6 & 4294967295 | g >>> 26), g = w + (_ ^ (m | ~I)) + v[3] + 2399980690 & 4294967295, w = m + (g << 10 & 4294967295 | g >>> 22), g = I + (m ^ (w | ~_)) + v[10] + 4293915773 & 4294967295, I = w + (g << 15 & 4294967295 | g >>> 17), g = _ + (w ^ (I | ~m)) + v[1] + 2240044497 & 4294967295, _ = I + (g << 21 & 4294967295 | g >>> 11), g = m + (I ^ (_ | ~w)) + v[8] + 1873313359 & 4294967295, m = _ + (g << 6 & 4294967295 | g >>> 26), g = w + (_ ^ (m | ~I)) + v[15] + 4264355552 & 4294967295, w = m + (g << 10 & 4294967295 | g >>> 22), g = I + (m ^ (w | ~_)) + v[6] + 2734768916 & 4294967295, I = w + (g << 15 & 4294967295 | g >>> 17), g = _ + (w ^ (I | ~m)) + v[13] + 1309151649 & 4294967295, _ = I + (g << 21 & 4294967295 | g >>> 11), g = m + (I ^ (_ | ~w)) + v[4] + 4149444226 & 4294967295, m = _ + (g << 6 & 4294967295 | g >>> 26), g = w + (_ ^ (m | ~I)) + v[11] + 3174756917 & 4294967295, w = m + (g << 10 & 4294967295 | g >>> 22), g = I + (m ^ (w | ~_)) + v[2] + 718787259 & 4294967295, I = w + (g << 15 & 4294967295 | g >>> 17), g = _ + (w ^ (I | ~m)) + v[9] + 3951481745 & 4294967295, E.g[0] = E.g[0] + m & 4294967295, E.g[1] = E.g[1] + (I + (g << 21 & 4294967295 | g >>> 11)) & 4294967295, E.g[2] = E.g[2] + I & 4294967295, E.g[3] = E.g[3] + w & 4294967295;
  }
  r.prototype.u = function(E, m) {
    m === void 0 && (m = E.length);
    for (var _ = m - this.blockSize, v = this.B, I = this.h, w = 0; w < m; ) {
      if (I == 0) for (; w <= _; ) i(this, E, w), w += this.blockSize;
      if (typeof E == "string") {
        for (; w < m; )
          if (v[I++] = E.charCodeAt(w++), I == this.blockSize) {
            i(this, v), I = 0;
            break;
          }
      } else for (; w < m; ) if (v[I++] = E[w++], I == this.blockSize) {
        i(this, v), I = 0;
        break;
      }
    }
    this.h = I, this.o += m;
  }, r.prototype.v = function() {
    var E = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
    E[0] = 128;
    for (var m = 1; m < E.length - 8; ++m) E[m] = 0;
    var _ = 8 * this.o;
    for (m = E.length - 8; m < E.length; ++m) E[m] = _ & 255, _ /= 256;
    for (this.u(E), E = Array(16), m = _ = 0; 4 > m; ++m) for (var v = 0; 32 > v; v += 8) E[_++] = this.g[m] >>> v & 255;
    return E;
  };
  function s(E, m) {
    var _ = c;
    return Object.prototype.hasOwnProperty.call(_, E) ? _[E] : _[E] = m(E);
  }
  function a(E, m) {
    this.h = m;
    for (var _ = [], v = !0, I = E.length - 1; 0 <= I; I--) {
      var w = E[I] | 0;
      v && w == m || (_[I] = w, v = !1);
    }
    this.g = _;
  }
  var c = {};
  function l(E) {
    return -128 <= E && 128 > E ? s(E, function(m) {
      return new a([m | 0], 0 > m ? -1 : 0);
    }) : new a([E | 0], 0 > E ? -1 : 0);
  }
  function d(E) {
    if (isNaN(E) || !isFinite(E)) return y;
    if (0 > E) return C(d(-E));
    for (var m = [], _ = 1, v = 0; E >= _; v++) m[v] = E / _ | 0, _ *= 4294967296;
    return new a(m, 0);
  }
  function p(E, m) {
    if (E.length == 0) throw Error("number format error: empty string");
    if (m = m || 10, 2 > m || 36 < m) throw Error("radix out of range: " + m);
    if (E.charAt(0) == "-") return C(p(E.substring(1), m));
    if (0 <= E.indexOf("-")) throw Error('number format error: interior "-" character');
    for (var _ = d(Math.pow(m, 8)), v = y, I = 0; I < E.length; I += 8) {
      var w = Math.min(8, E.length - I), g = parseInt(E.substring(I, I + w), m);
      8 > w ? (w = d(Math.pow(m, w)), v = v.j(w).add(d(g))) : (v = v.j(_), v = v.add(d(g)));
    }
    return v;
  }
  var y = l(0), A = l(1), b = l(16777216);
  n = a.prototype, n.m = function() {
    if (O(this)) return -C(this).m();
    for (var E = 0, m = 1, _ = 0; _ < this.g.length; _++) {
      var v = this.i(_);
      E += (0 <= v ? v : 4294967296 + v) * m, m *= 4294967296;
    }
    return E;
  }, n.toString = function(E) {
    if (E = E || 10, 2 > E || 36 < E) throw Error("radix out of range: " + E);
    if (D(this)) return "0";
    if (O(this)) return "-" + C(this).toString(E);
    for (var m = d(Math.pow(E, 6)), _ = this, v = ""; ; ) {
      var I = q(_, m).g;
      _ = B(_, I.j(m));
      var w = ((0 < _.g.length ? _.g[0] : _.h) >>> 0).toString(E);
      if (_ = I, D(_)) return w + v;
      for (; 6 > w.length; ) w = "0" + w;
      v = w + v;
    }
  }, n.i = function(E) {
    return 0 > E ? 0 : E < this.g.length ? this.g[E] : this.h;
  };
  function D(E) {
    if (E.h != 0) return !1;
    for (var m = 0; m < E.g.length; m++) if (E.g[m] != 0) return !1;
    return !0;
  }
  function O(E) {
    return E.h == -1;
  }
  n.l = function(E) {
    return E = B(this, E), O(E) ? -1 : D(E) ? 0 : 1;
  };
  function C(E) {
    for (var m = E.g.length, _ = [], v = 0; v < m; v++) _[v] = ~E.g[v];
    return new a(_, ~E.h).add(A);
  }
  n.abs = function() {
    return O(this) ? C(this) : this;
  }, n.add = function(E) {
    for (var m = Math.max(this.g.length, E.g.length), _ = [], v = 0, I = 0; I <= m; I++) {
      var w = v + (this.i(I) & 65535) + (E.i(I) & 65535), g = (w >>> 16) + (this.i(I) >>> 16) + (E.i(I) >>> 16);
      v = g >>> 16, w &= 65535, g &= 65535, _[I] = g << 16 | w;
    }
    return new a(_, _[_.length - 1] & -2147483648 ? -1 : 0);
  };
  function B(E, m) {
    return E.add(C(m));
  }
  n.j = function(E) {
    if (D(this) || D(E)) return y;
    if (O(this)) return O(E) ? C(this).j(C(E)) : C(C(this).j(E));
    if (O(E)) return C(this.j(C(E)));
    if (0 > this.l(b) && 0 > E.l(b)) return d(this.m() * E.m());
    for (var m = this.g.length + E.g.length, _ = [], v = 0; v < 2 * m; v++) _[v] = 0;
    for (v = 0; v < this.g.length; v++) for (var I = 0; I < E.g.length; I++) {
      var w = this.i(v) >>> 16, g = this.i(v) & 65535, Qe = E.i(I) >>> 16, An = E.i(I) & 65535;
      _[2 * v + 2 * I] += g * An, $(_, 2 * v + 2 * I), _[2 * v + 2 * I + 1] += w * An, $(_, 2 * v + 2 * I + 1), _[2 * v + 2 * I + 1] += g * Qe, $(_, 2 * v + 2 * I + 1), _[2 * v + 2 * I + 2] += w * Qe, $(_, 2 * v + 2 * I + 2);
    }
    for (v = 0; v < m; v++) _[v] = _[2 * v + 1] << 16 | _[2 * v];
    for (v = m; v < 2 * m; v++) _[v] = 0;
    return new a(_, 0);
  };
  function $(E, m) {
    for (; (E[m] & 65535) != E[m]; ) E[m + 1] += E[m] >>> 16, E[m] &= 65535, m++;
  }
  function j(E, m) {
    this.g = E, this.h = m;
  }
  function q(E, m) {
    if (D(m)) throw Error("division by zero");
    if (D(E)) return new j(y, y);
    if (O(E)) return m = q(C(E), m), new j(C(m.g), C(m.h));
    if (O(m)) return m = q(E, C(m)), new j(C(m.g), m.h);
    if (30 < E.g.length) {
      if (O(E) || O(m)) throw Error("slowDivide_ only works with positive integers.");
      for (var _ = A, v = m; 0 >= v.l(E); ) _ = he(_), v = he(v);
      var I = J(_, 1), w = J(v, 1);
      for (v = J(v, 2), _ = J(_, 2); !D(v); ) {
        var g = w.add(v);
        0 >= g.l(E) && (I = I.add(_), w = g), v = J(v, 1), _ = J(_, 1);
      }
      return m = B(E, I.j(m)), new j(I, m);
    }
    for (I = y; 0 <= E.l(m); ) {
      for (_ = Math.max(1, Math.floor(E.m() / m.m())), v = Math.ceil(Math.log(_) / Math.LN2), v = 48 >= v ? 1 : Math.pow(2, v - 48), w = d(_), g = w.j(m); O(g) || 0 < g.l(E); ) _ -= v, w = d(_), g = w.j(m);
      D(w) && (w = A), I = I.add(w), E = B(E, g);
    }
    return new j(I, E);
  }
  n.A = function(E) {
    return q(this, E).h;
  }, n.and = function(E) {
    for (var m = Math.max(this.g.length, E.g.length), _ = [], v = 0; v < m; v++) _[v] = this.i(v) & E.i(v);
    return new a(_, this.h & E.h);
  }, n.or = function(E) {
    for (var m = Math.max(this.g.length, E.g.length), _ = [], v = 0; v < m; v++) _[v] = this.i(v) | E.i(v);
    return new a(_, this.h | E.h);
  }, n.xor = function(E) {
    for (var m = Math.max(this.g.length, E.g.length), _ = [], v = 0; v < m; v++) _[v] = this.i(v) ^ E.i(v);
    return new a(_, this.h ^ E.h);
  };
  function he(E) {
    for (var m = E.g.length + 1, _ = [], v = 0; v < m; v++) _[v] = E.i(v) << 1 | E.i(v - 1) >>> 31;
    return new a(_, E.h);
  }
  function J(E, m) {
    var _ = m >> 5;
    m %= 32;
    for (var v = E.g.length - _, I = [], w = 0; w < v; w++) I[w] = 0 < m ? E.i(w + _) >>> m | E.i(w + _ + 1) << 32 - m : E.i(w + _);
    return new a(I, E.h);
  }
  r.prototype.digest = r.prototype.v, r.prototype.reset = r.prototype.s, r.prototype.update = r.prototype.u, Tl = r, a.prototype.add = a.prototype.add, a.prototype.multiply = a.prototype.j, a.prototype.modulo = a.prototype.A, a.prototype.compare = a.prototype.l, a.prototype.toNumber = a.prototype.m, a.prototype.toString = a.prototype.toString, a.prototype.getBits = a.prototype.i, a.fromNumber = d, a.fromString = p, xt = a;
}).apply(typeof Dc < "u" ? Dc : typeof self < "u" ? self : typeof window < "u" ? window : {});
var Wr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/
var wl, Al, Wn, Rl, ni, Fs, bl, Sl, Pl;
(function() {
  var n, e = typeof Object.defineProperties == "function" ? Object.defineProperty : function(o, u, h) {
    return o == Array.prototype || o == Object.prototype || (o[u] = h.value), o;
  };
  function t(o) {
    o = [typeof globalThis == "object" && globalThis, o, typeof window == "object" && window, typeof self == "object" && self, typeof Wr == "object" && Wr];
    for (var u = 0; u < o.length; ++u) {
      var h = o[u];
      if (h && h.Math == Math) return h;
    }
    throw Error("Cannot find global object");
  }
  var r = t(this);
  function i(o, u) {
    if (u) e: {
      var h = r;
      o = o.split(".");
      for (var f = 0; f < o.length - 1; f++) {
        var T = o[f];
        if (!(T in h)) break e;
        h = h[T];
      }
      o = o[o.length - 1], f = h[o], u = u(f), u != f && u != null && e(h, o, { configurable: !0, writable: !0, value: u });
    }
  }
  function s(o, u) {
    o instanceof String && (o += "");
    var h = 0, f = !1, T = { next: function() {
      if (!f && h < o.length) {
        var R = h++;
        return { value: u(R, o[R]), done: !1 };
      }
      return f = !0, { done: !0, value: void 0 };
    } };
    return T[Symbol.iterator] = function() {
      return T;
    }, T;
  }
  i("Array.prototype.values", function(o) {
    return o || function() {
      return s(this, function(u, h) {
        return h;
      });
    };
  });
  /** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var a = a || {}, c = this || self;
  function l(o) {
    var u = typeof o;
    return u = u != "object" ? u : o ? Array.isArray(o) ? "array" : u : "null", u == "array" || u == "object" && typeof o.length == "number";
  }
  function d(o) {
    var u = typeof o;
    return u == "object" && o != null || u == "function";
  }
  function p(o, u, h) {
    return o.call.apply(o.bind, arguments);
  }
  function y(o, u, h) {
    if (!o) throw Error();
    if (2 < arguments.length) {
      var f = Array.prototype.slice.call(arguments, 2);
      return function() {
        var T = Array.prototype.slice.call(arguments);
        return Array.prototype.unshift.apply(T, f), o.apply(u, T);
      };
    }
    return function() {
      return o.apply(u, arguments);
    };
  }
  function A(o, u, h) {
    return A = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? p : y, A.apply(null, arguments);
  }
  function b(o, u) {
    var h = Array.prototype.slice.call(arguments, 1);
    return function() {
      var f = h.slice();
      return f.push.apply(f, arguments), o.apply(this, f);
    };
  }
  function D(o, u) {
    function h() {
    }
    h.prototype = u.prototype, o.aa = u.prototype, o.prototype = new h(), o.prototype.constructor = o, o.Qb = function(f, T, R) {
      for (var k = Array(arguments.length - 2), Q = 2; Q < arguments.length; Q++) k[Q - 2] = arguments[Q];
      return u.prototype[T].apply(f, k);
    };
  }
  function O(o) {
    const u = o.length;
    if (0 < u) {
      const h = Array(u);
      for (let f = 0; f < u; f++) h[f] = o[f];
      return h;
    }
    return [];
  }
  function C(o, u) {
    for (let h = 1; h < arguments.length; h++) {
      const f = arguments[h];
      if (l(f)) {
        const T = o.length || 0, R = f.length || 0;
        o.length = T + R;
        for (let k = 0; k < R; k++) o[T + k] = f[k];
      } else o.push(f);
    }
  }
  class B {
    constructor(u, h) {
      this.i = u, this.j = h, this.h = 0, this.g = null;
    }
    get() {
      let u;
      return 0 < this.h ? (this.h--, u = this.g, this.g = u.next, u.next = null) : u = this.i(), u;
    }
  }
  function $(o) {
    return /^[\s\xa0]*$/.test(o);
  }
  function j() {
    var o = c.navigator;
    return o && (o = o.userAgent) ? o : "";
  }
  function q(o) {
    return q[" "](o), o;
  }
  q[" "] = function() {
  };
  var he = j().indexOf("Gecko") != -1 && !(j().toLowerCase().indexOf("webkit") != -1 && j().indexOf("Edge") == -1) && !(j().indexOf("Trident") != -1 || j().indexOf("MSIE") != -1) && j().indexOf("Edge") == -1;
  function J(o, u, h) {
    for (const f in o) u.call(h, o[f], f, o);
  }
  function E(o, u) {
    for (const h in o) u.call(void 0, o[h], h, o);
  }
  function m(o) {
    const u = {};
    for (const h in o) u[h] = o[h];
    return u;
  }
  const _ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function v(o, u) {
    let h, f;
    for (let T = 1; T < arguments.length; T++) {
      f = arguments[T];
      for (h in f) o[h] = f[h];
      for (let R = 0; R < _.length; R++) h = _[R], Object.prototype.hasOwnProperty.call(f, h) && (o[h] = f[h]);
    }
  }
  function I(o) {
    var u = 1;
    o = o.split(":");
    const h = [];
    for (; 0 < u && o.length; ) h.push(o.shift()), u--;
    return o.length && h.push(o.join(":")), h;
  }
  function w(o) {
    c.setTimeout(() => {
      throw o;
    }, 0);
  }
  function g() {
    var o = qi;
    let u = null;
    return o.g && (u = o.g, o.g = o.g.next, o.g || (o.h = null), u.next = null), u;
  }
  class Qe {
    constructor() {
      this.h = this.g = null;
    }
    add(u, h) {
      const f = An.get();
      f.set(u, h), this.h ? this.h.next = f : this.g = f, this.h = f;
    }
  }
  var An = new B(() => new Ld(), (o) => o.reset());
  class Ld {
    constructor() {
      this.next = this.g = this.h = null;
    }
    set(u, h) {
      this.h = u, this.g = h, this.next = null;
    }
    reset() {
      this.next = this.g = this.h = null;
    }
  }
  let Rn, bn = !1, qi = new Qe(), ta = () => {
    const o = c.Promise.resolve(void 0);
    Rn = () => {
      o.then(Md);
    };
  };
  var Md = () => {
    for (var o; o = g(); ) {
      try {
        o.h.call(o.g);
      } catch (h) {
        w(h);
      }
      var u = An;
      u.j(o), 100 > u.h && (u.h++, o.next = u.g, u.g = o);
    }
    bn = !1;
  };
  function at() {
    this.s = this.s, this.C = this.C;
  }
  at.prototype.s = !1, at.prototype.ma = function() {
    this.s || (this.s = !0, this.N());
  }, at.prototype.N = function() {
    if (this.C) for (; this.C.length; ) this.C.shift()();
  };
  function ye(o, u) {
    this.type = o, this.g = this.target = u, this.defaultPrevented = !1;
  }
  ye.prototype.h = function() {
    this.defaultPrevented = !0;
  };
  var xd = function() {
    if (!c.addEventListener || !Object.defineProperty) return !1;
    var o = !1, u = Object.defineProperty({}, "passive", { get: function() {
      o = !0;
    } });
    try {
      const h = () => {
      };
      c.addEventListener("test", h, u), c.removeEventListener("test", h, u);
    } catch {
    }
    return o;
  }();
  function Sn(o, u) {
    if (ye.call(this, o ? o.type : ""), this.relatedTarget = this.g = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.state = null, this.pointerId = 0, this.pointerType = "", this.i = null, o) {
      var h = this.type = o.type, f = o.changedTouches && o.changedTouches.length ? o.changedTouches[0] : null;
      if (this.target = o.target || o.srcElement, this.g = u, u = o.relatedTarget) {
        if (he) {
          e: {
            try {
              q(u.nodeName);
              var T = !0;
              break e;
            } catch {
            }
            T = !1;
          }
          T || (u = null);
        }
      } else h == "mouseover" ? u = o.fromElement : h == "mouseout" && (u = o.toElement);
      this.relatedTarget = u, f ? (this.clientX = f.clientX !== void 0 ? f.clientX : f.pageX, this.clientY = f.clientY !== void 0 ? f.clientY : f.pageY, this.screenX = f.screenX || 0, this.screenY = f.screenY || 0) : (this.clientX = o.clientX !== void 0 ? o.clientX : o.pageX, this.clientY = o.clientY !== void 0 ? o.clientY : o.pageY, this.screenX = o.screenX || 0, this.screenY = o.screenY || 0), this.button = o.button, this.key = o.key || "", this.ctrlKey = o.ctrlKey, this.altKey = o.altKey, this.shiftKey = o.shiftKey, this.metaKey = o.metaKey, this.pointerId = o.pointerId || 0, this.pointerType = typeof o.pointerType == "string" ? o.pointerType : Ud[o.pointerType] || "", this.state = o.state, this.i = o, o.defaultPrevented && Sn.aa.h.call(this);
    }
  }
  D(Sn, ye);
  var Ud = { 2: "touch", 3: "pen", 4: "mouse" };
  Sn.prototype.h = function() {
    Sn.aa.h.call(this);
    var o = this.i;
    o.preventDefault ? o.preventDefault() : o.returnValue = !1;
  };
  var br = "closure_listenable_" + (1e6 * Math.random() | 0), Fd = 0;
  function Bd(o, u, h, f, T) {
    this.listener = o, this.proxy = null, this.src = u, this.type = h, this.capture = !!f, this.ha = T, this.key = ++Fd, this.da = this.fa = !1;
  }
  function Sr(o) {
    o.da = !0, o.listener = null, o.proxy = null, o.src = null, o.ha = null;
  }
  function Pr(o) {
    this.src = o, this.g = {}, this.h = 0;
  }
  Pr.prototype.add = function(o, u, h, f, T) {
    var R = o.toString();
    o = this.g[R], o || (o = this.g[R] = [], this.h++);
    var k = Hi(o, u, f, T);
    return -1 < k ? (u = o[k], h || (u.fa = !1)) : (u = new Bd(u, this.src, R, !!f, T), u.fa = h, o.push(u)), u;
  };
  function zi(o, u) {
    var h = u.type;
    if (h in o.g) {
      var f = o.g[h], T = Array.prototype.indexOf.call(f, u, void 0), R;
      (R = 0 <= T) && Array.prototype.splice.call(f, T, 1), R && (Sr(u), o.g[h].length == 0 && (delete o.g[h], o.h--));
    }
  }
  function Hi(o, u, h, f) {
    for (var T = 0; T < o.length; ++T) {
      var R = o[T];
      if (!R.da && R.listener == u && R.capture == !!h && R.ha == f) return T;
    }
    return -1;
  }
  var Wi = "closure_lm_" + (1e6 * Math.random() | 0), Ki = {};
  function na(o, u, h, f, T) {
    if (Array.isArray(u)) {
      for (var R = 0; R < u.length; R++) na(o, u[R], h, f, T);
      return null;
    }
    return h = sa(h), o && o[br] ? o.K(u, h, d(f) ? !!f.capture : !!f, T) : jd(o, u, h, !1, f, T);
  }
  function jd(o, u, h, f, T, R) {
    if (!u) throw Error("Invalid event type");
    var k = d(T) ? !!T.capture : !!T, Q = Qi(o);
    if (Q || (o[Wi] = Q = new Pr(o)), h = Q.add(u, h, f, k, R), h.proxy) return h;
    if (f = $d(), h.proxy = f, f.src = o, f.listener = h, o.addEventListener) xd || (T = k), T === void 0 && (T = !1), o.addEventListener(u.toString(), f, T);
    else if (o.attachEvent) o.attachEvent(ia(u.toString()), f);
    else if (o.addListener && o.removeListener) o.addListener(f);
    else throw Error("addEventListener and attachEvent are unavailable.");
    return h;
  }
  function $d() {
    function o(h) {
      return u.call(o.src, o.listener, h);
    }
    const u = qd;
    return o;
  }
  function ra(o, u, h, f, T) {
    if (Array.isArray(u)) for (var R = 0; R < u.length; R++) ra(o, u[R], h, f, T);
    else f = d(f) ? !!f.capture : !!f, h = sa(h), o && o[br] ? (o = o.i, u = String(u).toString(), u in o.g && (R = o.g[u], h = Hi(R, h, f, T), -1 < h && (Sr(R[h]), Array.prototype.splice.call(R, h, 1), R.length == 0 && (delete o.g[u], o.h--)))) : o && (o = Qi(o)) && (u = o.g[u.toString()], o = -1, u && (o = Hi(u, h, f, T)), (h = -1 < o ? u[o] : null) && Gi(h));
  }
  function Gi(o) {
    if (typeof o != "number" && o && !o.da) {
      var u = o.src;
      if (u && u[br]) zi(u.i, o);
      else {
        var h = o.type, f = o.proxy;
        u.removeEventListener ? u.removeEventListener(h, f, o.capture) : u.detachEvent ? u.detachEvent(ia(h), f) : u.addListener && u.removeListener && u.removeListener(f), (h = Qi(u)) ? (zi(h, o), h.h == 0 && (h.src = null, u[Wi] = null)) : Sr(o);
      }
    }
  }
  function ia(o) {
    return o in Ki ? Ki[o] : Ki[o] = "on" + o;
  }
  function qd(o, u) {
    if (o.da) o = !0;
    else {
      u = new Sn(u, this);
      var h = o.listener, f = o.ha || o.src;
      o.fa && Gi(o), o = h.call(f, u);
    }
    return o;
  }
  function Qi(o) {
    return o = o[Wi], o instanceof Pr ? o : null;
  }
  var Yi = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
  function sa(o) {
    return typeof o == "function" ? o : (o[Yi] || (o[Yi] = function(u) {
      return o.handleEvent(u);
    }), o[Yi]);
  }
  function ve() {
    at.call(this), this.i = new Pr(this), this.M = this, this.F = null;
  }
  D(ve, at), ve.prototype[br] = !0, ve.prototype.removeEventListener = function(o, u, h, f) {
    ra(this, o, u, h, f);
  };
  function Re(o, u) {
    var h, f = o.F;
    if (f) for (h = []; f; f = f.F) h.push(f);
    if (o = o.M, f = u.type || u, typeof u == "string") u = new ye(u, o);
    else if (u instanceof ye) u.target = u.target || o;
    else {
      var T = u;
      u = new ye(f, o), v(u, T);
    }
    if (T = !0, h) for (var R = h.length - 1; 0 <= R; R--) {
      var k = u.g = h[R];
      T = Cr(k, f, !0, u) && T;
    }
    if (k = u.g = o, T = Cr(k, f, !0, u) && T, T = Cr(k, f, !1, u) && T, h) for (R = 0; R < h.length; R++) k = u.g = h[R], T = Cr(k, f, !1, u) && T;
  }
  ve.prototype.N = function() {
    if (ve.aa.N.call(this), this.i) {
      var o = this.i, u;
      for (u in o.g) {
        for (var h = o.g[u], f = 0; f < h.length; f++) Sr(h[f]);
        delete o.g[u], o.h--;
      }
    }
    this.F = null;
  }, ve.prototype.K = function(o, u, h, f) {
    return this.i.add(String(o), u, !1, h, f);
  }, ve.prototype.L = function(o, u, h, f) {
    return this.i.add(String(o), u, !0, h, f);
  };
  function Cr(o, u, h, f) {
    if (u = o.i.g[String(u)], !u) return !0;
    u = u.concat();
    for (var T = !0, R = 0; R < u.length; ++R) {
      var k = u[R];
      if (k && !k.da && k.capture == h) {
        var Q = k.listener, de = k.ha || k.src;
        k.fa && zi(o.i, k), T = Q.call(de, f) !== !1 && T;
      }
    }
    return T && !f.defaultPrevented;
  }
  function oa(o, u, h) {
    if (typeof o == "function") h && (o = A(o, h));
    else if (o && typeof o.handleEvent == "function") o = A(o.handleEvent, o);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(u) ? -1 : c.setTimeout(o, u || 0);
  }
  function aa(o) {
    o.g = oa(() => {
      o.g = null, o.i && (o.i = !1, aa(o));
    }, o.l);
    const u = o.h;
    o.h = null, o.m.apply(null, u);
  }
  class zd extends at {
    constructor(u, h) {
      super(), this.m = u, this.l = h, this.h = null, this.i = !1, this.g = null;
    }
    j(u) {
      this.h = arguments, this.g ? this.i = !0 : aa(this);
    }
    N() {
      super.N(), this.g && (c.clearTimeout(this.g), this.g = null, this.i = !1, this.h = null);
    }
  }
  function Pn(o) {
    at.call(this), this.h = o, this.g = {};
  }
  D(Pn, at);
  var ca = [];
  function ua(o) {
    J(o.g, function(u, h) {
      this.g.hasOwnProperty(h) && Gi(u);
    }, o), o.g = {};
  }
  Pn.prototype.N = function() {
    Pn.aa.N.call(this), ua(this);
  }, Pn.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
  };
  var Ji = c.JSON.stringify, Hd = c.JSON.parse, Wd = class {
    stringify(o) {
      return c.JSON.stringify(o, void 0);
    }
    parse(o) {
      return c.JSON.parse(o, void 0);
    }
  };
  function Xi() {
  }
  Xi.prototype.h = null;
  function la(o) {
    return o.h || (o.h = o.i());
  }
  function ha() {
  }
  var Cn = { OPEN: "a", kb: "b", Ja: "c", wb: "d" };
  function Zi() {
    ye.call(this, "d");
  }
  D(Zi, ye);
  function es() {
    ye.call(this, "c");
  }
  D(es, ye);
  var Pt = {}, da = null;
  function kr() {
    return da = da || new ve();
  }
  Pt.La = "serverreachability";
  function fa(o) {
    ye.call(this, Pt.La, o);
  }
  D(fa, ye);
  function kn(o) {
    const u = kr();
    Re(u, new fa(u));
  }
  Pt.STAT_EVENT = "statevent";
  function pa(o, u) {
    ye.call(this, Pt.STAT_EVENT, o), this.stat = u;
  }
  D(pa, ye);
  function be(o) {
    const u = kr();
    Re(u, new pa(u, o));
  }
  Pt.Ma = "timingevent";
  function ma(o, u) {
    ye.call(this, Pt.Ma, o), this.size = u;
  }
  D(ma, ye);
  function Dn(o, u) {
    if (typeof o != "function") throw Error("Fn must not be null and must be a function");
    return c.setTimeout(function() {
      o();
    }, u);
  }
  function Nn() {
    this.g = !0;
  }
  Nn.prototype.xa = function() {
    this.g = !1;
  };
  function Kd(o, u, h, f, T, R) {
    o.info(function() {
      if (o.g) if (R)
        for (var k = "", Q = R.split("&"), de = 0; de < Q.length; de++) {
          var K = Q[de].split("=");
          if (1 < K.length) {
            var Ee = K[0];
            K = K[1];
            var Ie = Ee.split("_");
            k = 2 <= Ie.length && Ie[1] == "type" ? k + (Ee + "=" + K + "&") : k + (Ee + "=redacted&");
          }
        }
      else k = null;
      else k = R;
      return "XMLHTTP REQ (" + f + ") [attempt " + T + "]: " + u + `
` + h + `
` + k;
    });
  }
  function Gd(o, u, h, f, T, R, k) {
    o.info(function() {
      return "XMLHTTP RESP (" + f + ") [ attempt " + T + "]: " + u + `
` + h + `
` + R + " " + k;
    });
  }
  function Xt(o, u, h, f) {
    o.info(function() {
      return "XMLHTTP TEXT (" + u + "): " + Yd(o, h) + (f ? " " + f : "");
    });
  }
  function Qd(o, u) {
    o.info(function() {
      return "TIMEOUT: " + u;
    });
  }
  Nn.prototype.info = function() {
  };
  function Yd(o, u) {
    if (!o.g) return u;
    if (!u) return null;
    try {
      var h = JSON.parse(u);
      if (h) {
        for (o = 0; o < h.length; o++) if (Array.isArray(h[o])) {
          var f = h[o];
          if (!(2 > f.length)) {
            var T = f[1];
            if (Array.isArray(T) && !(1 > T.length)) {
              var R = T[0];
              if (R != "noop" && R != "stop" && R != "close") for (var k = 1; k < T.length; k++) T[k] = "";
            }
          }
        }
      }
      return Ji(h);
    } catch {
      return u;
    }
  }
  var Dr = { NO_ERROR: 0, gb: 1, tb: 2, sb: 3, nb: 4, rb: 5, ub: 6, Ia: 7, TIMEOUT: 8, xb: 9 }, ga = { lb: "complete", Hb: "success", Ja: "error", Ia: "abort", zb: "ready", Ab: "readystatechange", TIMEOUT: "timeout", vb: "incrementaldata", yb: "progress", ob: "downloadprogress", Pb: "uploadprogress" }, ts;
  function Nr() {
  }
  D(Nr, Xi), Nr.prototype.g = function() {
    return new XMLHttpRequest();
  }, Nr.prototype.i = function() {
    return {};
  }, ts = new Nr();
  function ct(o, u, h, f) {
    this.j = o, this.i = u, this.l = h, this.R = f || 1, this.U = new Pn(this), this.I = 45e3, this.H = null, this.o = !1, this.m = this.A = this.v = this.L = this.F = this.S = this.B = null, this.D = [], this.g = null, this.C = 0, this.s = this.u = null, this.X = -1, this.J = !1, this.O = 0, this.M = null, this.W = this.K = this.T = this.P = !1, this.h = new _a();
  }
  function _a() {
    this.i = null, this.g = "", this.h = !1;
  }
  var ya = {}, ns = {};
  function rs(o, u, h) {
    o.L = 1, o.v = Mr(Ye(u)), o.m = h, o.P = !0, va(o, null);
  }
  function va(o, u) {
    o.F = Date.now(), Or(o), o.A = Ye(o.v);
    var h = o.A, f = o.R;
    Array.isArray(f) || (f = [String(f)]), Oa(h.i, "t", f), o.C = 0, h = o.j.J, o.h = new _a(), o.g = Ja(o.j, h ? u : null, !o.m), 0 < o.O && (o.M = new zd(A(o.Y, o, o.g), o.O)), u = o.U, h = o.g, f = o.ca;
    var T = "readystatechange";
    Array.isArray(T) || (T && (ca[0] = T.toString()), T = ca);
    for (var R = 0; R < T.length; R++) {
      var k = na(h, T[R], f || u.handleEvent, !1, u.h || u);
      if (!k) break;
      u.g[k.key] = k;
    }
    u = o.H ? m(o.H) : {}, o.m ? (o.u || (o.u = "POST"), u["Content-Type"] = "application/x-www-form-urlencoded", o.g.ea(
      o.A,
      o.u,
      o.m,
      u
    )) : (o.u = "GET", o.g.ea(o.A, o.u, null, u)), kn(), Kd(o.i, o.u, o.A, o.l, o.R, o.m);
  }
  ct.prototype.ca = function(o) {
    o = o.target;
    const u = this.M;
    u && Je(o) == 3 ? u.j() : this.Y(o);
  }, ct.prototype.Y = function(o) {
    try {
      if (o == this.g) e: {
        const Ie = Je(this.g);
        var u = this.g.Ba();
        const tn = this.g.Z();
        if (!(3 > Ie) && (Ie != 3 || this.g && (this.h.h || this.g.oa() || Ba(this.g)))) {
          this.J || Ie != 4 || u == 7 || (u == 8 || 0 >= tn ? kn(3) : kn(2)), is(this);
          var h = this.g.Z();
          this.X = h;
          t: if (Ea(this)) {
            var f = Ba(this.g);
            o = "";
            var T = f.length, R = Je(this.g) == 4;
            if (!this.h.i) {
              if (typeof TextDecoder > "u") {
                Ct(this), On(this);
                var k = "";
                break t;
              }
              this.h.i = new c.TextDecoder();
            }
            for (u = 0; u < T; u++) this.h.h = !0, o += this.h.i.decode(f[u], { stream: !(R && u == T - 1) });
            f.length = 0, this.h.g += o, this.C = 0, k = this.h.g;
          } else k = this.g.oa();
          if (this.o = h == 200, Gd(this.i, this.u, this.A, this.l, this.R, Ie, h), this.o) {
            if (this.T && !this.K) {
              t: {
                if (this.g) {
                  var Q, de = this.g;
                  if ((Q = de.g ? de.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !$(Q)) {
                    var K = Q;
                    break t;
                  }
                }
                K = null;
              }
              if (h = K) Xt(this.i, this.l, h, "Initial handshake response via X-HTTP-Initial-Response"), this.K = !0, ss(this, h);
              else {
                this.o = !1, this.s = 3, be(12), Ct(this), On(this);
                break e;
              }
            }
            if (this.P) {
              h = !0;
              let Fe;
              for (; !this.J && this.C < k.length; ) if (Fe = Jd(this, k), Fe == ns) {
                Ie == 4 && (this.s = 4, be(14), h = !1), Xt(this.i, this.l, null, "[Incomplete Response]");
                break;
              } else if (Fe == ya) {
                this.s = 4, be(15), Xt(this.i, this.l, k, "[Invalid Chunk]"), h = !1;
                break;
              } else Xt(this.i, this.l, Fe, null), ss(this, Fe);
              if (Ea(this) && this.C != 0 && (this.h.g = this.h.g.slice(this.C), this.C = 0), Ie != 4 || k.length != 0 || this.h.h || (this.s = 1, be(16), h = !1), this.o = this.o && h, !h) Xt(this.i, this.l, k, "[Invalid Chunked Response]"), Ct(this), On(this);
              else if (0 < k.length && !this.W) {
                this.W = !0;
                var Ee = this.j;
                Ee.g == this && Ee.ba && !Ee.M && (Ee.j.info("Great, no buffering proxy detected. Bytes received: " + k.length), hs(Ee), Ee.M = !0, be(11));
              }
            } else Xt(this.i, this.l, k, null), ss(this, k);
            Ie == 4 && Ct(this), this.o && !this.J && (Ie == 4 ? Ka(this.j, this) : (this.o = !1, Or(this)));
          } else mf(this.g), h == 400 && 0 < k.indexOf("Unknown SID") ? (this.s = 3, be(12)) : (this.s = 0, be(13)), Ct(this), On(this);
        }
      }
    } catch {
    } finally {
    }
  };
  function Ea(o) {
    return o.g ? o.u == "GET" && o.L != 2 && o.j.Ca : !1;
  }
  function Jd(o, u) {
    var h = o.C, f = u.indexOf(`
`, h);
    return f == -1 ? ns : (h = Number(u.substring(h, f)), isNaN(h) ? ya : (f += 1, f + h > u.length ? ns : (u = u.slice(f, f + h), o.C = f + h, u)));
  }
  ct.prototype.cancel = function() {
    this.J = !0, Ct(this);
  };
  function Or(o) {
    o.S = Date.now() + o.I, Ia(o, o.I);
  }
  function Ia(o, u) {
    if (o.B != null) throw Error("WatchDog timer not null");
    o.B = Dn(A(o.ba, o), u);
  }
  function is(o) {
    o.B && (c.clearTimeout(o.B), o.B = null);
  }
  ct.prototype.ba = function() {
    this.B = null;
    const o = Date.now();
    0 <= o - this.S ? (Qd(this.i, this.A), this.L != 2 && (kn(), be(17)), Ct(this), this.s = 2, On(this)) : Ia(this, this.S - o);
  };
  function On(o) {
    o.j.G == 0 || o.J || Ka(o.j, o);
  }
  function Ct(o) {
    is(o);
    var u = o.M;
    u && typeof u.ma == "function" && u.ma(), o.M = null, ua(o.U), o.g && (u = o.g, o.g = null, u.abort(), u.ma());
  }
  function ss(o, u) {
    try {
      var h = o.j;
      if (h.G != 0 && (h.g == o || os(h.h, o))) {
        if (!o.K && os(h.h, o) && h.G == 3) {
          try {
            var f = h.Da.g.parse(u);
          } catch {
            f = null;
          }
          if (Array.isArray(f) && f.length == 3) {
            var T = f;
            if (T[0] == 0) {
              e:
                if (!h.u) {
                  if (h.g) if (h.g.F + 3e3 < o.F) jr(h), Fr(h);
                  else break e;
                  ls(h), be(18);
                }
            } else h.za = T[1], 0 < h.za - h.T && 37500 > T[2] && h.F && h.v == 0 && !h.C && (h.C = Dn(A(h.Za, h), 6e3));
            if (1 >= Aa(h.h) && h.ca) {
              try {
                h.ca();
              } catch {
              }
              h.ca = void 0;
            }
          } else Dt(h, 11);
        } else if ((o.K || h.g == o) && jr(h), !$(u)) for (T = h.Da.g.parse(u), u = 0; u < T.length; u++) {
          let K = T[u];
          if (h.T = K[0], K = K[1], h.G == 2) if (K[0] == "c") {
            h.K = K[1], h.ia = K[2];
            const Ee = K[3];
            Ee != null && (h.la = Ee, h.j.info("VER=" + h.la));
            const Ie = K[4];
            Ie != null && (h.Aa = Ie, h.j.info("SVER=" + h.Aa));
            const tn = K[5];
            tn != null && typeof tn == "number" && 0 < tn && (f = 1.5 * tn, h.L = f, h.j.info("backChannelRequestTimeoutMs_=" + f)), f = h;
            const Fe = o.g;
            if (Fe) {
              const qr = Fe.g ? Fe.g.getResponseHeader("X-Client-Wire-Protocol") : null;
              if (qr) {
                var R = f.h;
                R.g || qr.indexOf("spdy") == -1 && qr.indexOf("quic") == -1 && qr.indexOf("h2") == -1 || (R.j = R.l, R.g = /* @__PURE__ */ new Set(), R.h && (as(R, R.h), R.h = null));
              }
              if (f.D) {
                const ds = Fe.g ? Fe.g.getResponseHeader("X-HTTP-Session-Id") : null;
                ds && (f.ya = ds, X(f.I, f.D, ds));
              }
            }
            h.G = 3, h.l && h.l.ua(), h.ba && (h.R = Date.now() - o.F, h.j.info("Handshake RTT: " + h.R + "ms")), f = h;
            var k = o;
            if (f.qa = Ya(f, f.J ? f.ia : null, f.W), k.K) {
              Ra(f.h, k);
              var Q = k, de = f.L;
              de && (Q.I = de), Q.B && (is(Q), Or(Q)), f.g = k;
            } else Ha(f);
            0 < h.i.length && Br(h);
          } else K[0] != "stop" && K[0] != "close" || Dt(h, 7);
          else h.G == 3 && (K[0] == "stop" || K[0] == "close" ? K[0] == "stop" ? Dt(h, 7) : us(h) : K[0] != "noop" && h.l && h.l.ta(K), h.v = 0);
        }
      }
      kn(4);
    } catch {
    }
  }
  var Xd = class {
    constructor(o, u) {
      this.g = o, this.map = u;
    }
  };
  function Ta(o) {
    this.l = o || 10, c.PerformanceNavigationTiming ? (o = c.performance.getEntriesByType("navigation"), o = 0 < o.length && (o[0].nextHopProtocol == "hq" || o[0].nextHopProtocol == "h2")) : o = !!(c.chrome && c.chrome.loadTimes && c.chrome.loadTimes() && c.chrome.loadTimes().wasFetchedViaSpdy), this.j = o ? this.l : 1, this.g = null, 1 < this.j && (this.g = /* @__PURE__ */ new Set()), this.h = null, this.i = [];
  }
  function wa(o) {
    return o.h ? !0 : o.g ? o.g.size >= o.j : !1;
  }
  function Aa(o) {
    return o.h ? 1 : o.g ? o.g.size : 0;
  }
  function os(o, u) {
    return o.h ? o.h == u : o.g ? o.g.has(u) : !1;
  }
  function as(o, u) {
    o.g ? o.g.add(u) : o.h = u;
  }
  function Ra(o, u) {
    o.h && o.h == u ? o.h = null : o.g && o.g.has(u) && o.g.delete(u);
  }
  Ta.prototype.cancel = function() {
    if (this.i = ba(this), this.h) this.h.cancel(), this.h = null;
    else if (this.g && this.g.size !== 0) {
      for (const o of this.g.values()) o.cancel();
      this.g.clear();
    }
  };
  function ba(o) {
    if (o.h != null) return o.i.concat(o.h.D);
    if (o.g != null && o.g.size !== 0) {
      let u = o.i;
      for (const h of o.g.values()) u = u.concat(h.D);
      return u;
    }
    return O(o.i);
  }
  function Zd(o) {
    if (o.V && typeof o.V == "function") return o.V();
    if (typeof Map < "u" && o instanceof Map || typeof Set < "u" && o instanceof Set) return Array.from(o.values());
    if (typeof o == "string") return o.split("");
    if (l(o)) {
      for (var u = [], h = o.length, f = 0; f < h; f++) u.push(o[f]);
      return u;
    }
    u = [], h = 0;
    for (f in o) u[h++] = o[f];
    return u;
  }
  function ef(o) {
    if (o.na && typeof o.na == "function") return o.na();
    if (!o.V || typeof o.V != "function") {
      if (typeof Map < "u" && o instanceof Map) return Array.from(o.keys());
      if (!(typeof Set < "u" && o instanceof Set)) {
        if (l(o) || typeof o == "string") {
          var u = [];
          o = o.length;
          for (var h = 0; h < o; h++) u.push(h);
          return u;
        }
        u = [], h = 0;
        for (const f in o) u[h++] = f;
        return u;
      }
    }
  }
  function Sa(o, u) {
    if (o.forEach && typeof o.forEach == "function") o.forEach(u, void 0);
    else if (l(o) || typeof o == "string") Array.prototype.forEach.call(o, u, void 0);
    else for (var h = ef(o), f = Zd(o), T = f.length, R = 0; R < T; R++) u.call(void 0, f[R], h && h[R], o);
  }
  var Pa = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
  function tf(o, u) {
    if (o) {
      o = o.split("&");
      for (var h = 0; h < o.length; h++) {
        var f = o[h].indexOf("="), T = null;
        if (0 <= f) {
          var R = o[h].substring(0, f);
          T = o[h].substring(f + 1);
        } else R = o[h];
        u(R, T ? decodeURIComponent(T.replace(/\+/g, " ")) : "");
      }
    }
  }
  function kt(o) {
    if (this.g = this.o = this.j = "", this.s = null, this.m = this.l = "", this.h = !1, o instanceof kt) {
      this.h = o.h, Vr(this, o.j), this.o = o.o, this.g = o.g, Lr(this, o.s), this.l = o.l;
      var u = o.i, h = new Mn();
      h.i = u.i, u.g && (h.g = new Map(u.g), h.h = u.h), Ca(this, h), this.m = o.m;
    } else o && (u = String(o).match(Pa)) ? (this.h = !1, Vr(this, u[1] || "", !0), this.o = Vn(u[2] || ""), this.g = Vn(u[3] || "", !0), Lr(this, u[4]), this.l = Vn(u[5] || "", !0), Ca(this, u[6] || "", !0), this.m = Vn(u[7] || "")) : (this.h = !1, this.i = new Mn(null, this.h));
  }
  kt.prototype.toString = function() {
    var o = [], u = this.j;
    u && o.push(Ln(u, ka, !0), ":");
    var h = this.g;
    return (h || u == "file") && (o.push("//"), (u = this.o) && o.push(Ln(u, ka, !0), "@"), o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), h = this.s, h != null && o.push(":", String(h))), (h = this.l) && (this.g && h.charAt(0) != "/" && o.push("/"), o.push(Ln(h, h.charAt(0) == "/" ? sf : rf, !0))), (h = this.i.toString()) && o.push("?", h), (h = this.m) && o.push("#", Ln(h, af)), o.join("");
  };
  function Ye(o) {
    return new kt(o);
  }
  function Vr(o, u, h) {
    o.j = h ? Vn(u, !0) : u, o.j && (o.j = o.j.replace(/:$/, ""));
  }
  function Lr(o, u) {
    if (u) {
      if (u = Number(u), isNaN(u) || 0 > u) throw Error("Bad port number " + u);
      o.s = u;
    } else o.s = null;
  }
  function Ca(o, u, h) {
    u instanceof Mn ? (o.i = u, cf(o.i, o.h)) : (h || (u = Ln(u, of)), o.i = new Mn(u, o.h));
  }
  function X(o, u, h) {
    o.i.set(u, h);
  }
  function Mr(o) {
    return X(o, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)), o;
  }
  function Vn(o, u) {
    return o ? u ? decodeURI(o.replace(/%25/g, "%2525")) : decodeURIComponent(o) : "";
  }
  function Ln(o, u, h) {
    return typeof o == "string" ? (o = encodeURI(o).replace(u, nf), h && (o = o.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), o) : null;
  }
  function nf(o) {
    return o = o.charCodeAt(0), "%" + (o >> 4 & 15).toString(16) + (o & 15).toString(16);
  }
  var ka = /[#\/\?@]/g, rf = /[#\?:]/g, sf = /[#\?]/g, of = /[#\?@]/g, af = /#/g;
  function Mn(o, u) {
    this.h = this.g = null, this.i = o || null, this.j = !!u;
  }
  function ut(o) {
    o.g || (o.g = /* @__PURE__ */ new Map(), o.h = 0, o.i && tf(o.i, function(u, h) {
      o.add(decodeURIComponent(u.replace(/\+/g, " ")), h);
    }));
  }
  n = Mn.prototype, n.add = function(o, u) {
    ut(this), this.i = null, o = Zt(this, o);
    var h = this.g.get(o);
    return h || this.g.set(o, h = []), h.push(u), this.h += 1, this;
  };
  function Da(o, u) {
    ut(o), u = Zt(o, u), o.g.has(u) && (o.i = null, o.h -= o.g.get(u).length, o.g.delete(u));
  }
  function Na(o, u) {
    return ut(o), u = Zt(o, u), o.g.has(u);
  }
  n.forEach = function(o, u) {
    ut(this), this.g.forEach(function(h, f) {
      h.forEach(function(T) {
        o.call(u, T, f, this);
      }, this);
    }, this);
  }, n.na = function() {
    ut(this);
    const o = Array.from(this.g.values()), u = Array.from(this.g.keys()), h = [];
    for (let f = 0; f < u.length; f++) {
      const T = o[f];
      for (let R = 0; R < T.length; R++) h.push(u[f]);
    }
    return h;
  }, n.V = function(o) {
    ut(this);
    let u = [];
    if (typeof o == "string") Na(this, o) && (u = u.concat(this.g.get(Zt(this, o))));
    else {
      o = Array.from(this.g.values());
      for (let h = 0; h < o.length; h++) u = u.concat(o[h]);
    }
    return u;
  }, n.set = function(o, u) {
    return ut(this), this.i = null, o = Zt(this, o), Na(this, o) && (this.h -= this.g.get(o).length), this.g.set(o, [u]), this.h += 1, this;
  }, n.get = function(o, u) {
    return o ? (o = this.V(o), 0 < o.length ? String(o[0]) : u) : u;
  };
  function Oa(o, u, h) {
    Da(o, u), 0 < h.length && (o.i = null, o.g.set(Zt(o, u), O(h)), o.h += h.length);
  }
  n.toString = function() {
    if (this.i) return this.i;
    if (!this.g) return "";
    const o = [], u = Array.from(this.g.keys());
    for (var h = 0; h < u.length; h++) {
      var f = u[h];
      const R = encodeURIComponent(String(f)), k = this.V(f);
      for (f = 0; f < k.length; f++) {
        var T = R;
        k[f] !== "" && (T += "=" + encodeURIComponent(String(k[f]))), o.push(T);
      }
    }
    return this.i = o.join("&");
  };
  function Zt(o, u) {
    return u = String(u), o.j && (u = u.toLowerCase()), u;
  }
  function cf(o, u) {
    u && !o.j && (ut(o), o.i = null, o.g.forEach(function(h, f) {
      var T = f.toLowerCase();
      f != T && (Da(this, f), Oa(this, T, h));
    }, o)), o.j = u;
  }
  function uf(o, u) {
    const h = new Nn();
    if (c.Image) {
      const f = new Image();
      f.onload = b(lt, h, "TestLoadImage: loaded", !0, u, f), f.onerror = b(lt, h, "TestLoadImage: error", !1, u, f), f.onabort = b(lt, h, "TestLoadImage: abort", !1, u, f), f.ontimeout = b(lt, h, "TestLoadImage: timeout", !1, u, f), c.setTimeout(function() {
        f.ontimeout && f.ontimeout();
      }, 1e4), f.src = o;
    } else u(!1);
  }
  function lf(o, u) {
    const h = new Nn(), f = new AbortController(), T = setTimeout(() => {
      f.abort(), lt(h, "TestPingServer: timeout", !1, u);
    }, 1e4);
    fetch(o, { signal: f.signal }).then((R) => {
      clearTimeout(T), R.ok ? lt(h, "TestPingServer: ok", !0, u) : lt(h, "TestPingServer: server error", !1, u);
    }).catch(() => {
      clearTimeout(T), lt(h, "TestPingServer: error", !1, u);
    });
  }
  function lt(o, u, h, f, T) {
    try {
      T && (T.onload = null, T.onerror = null, T.onabort = null, T.ontimeout = null), f(h);
    } catch {
    }
  }
  function hf() {
    this.g = new Wd();
  }
  function df(o, u, h) {
    const f = h || "";
    try {
      Sa(o, function(T, R) {
        let k = T;
        d(T) && (k = Ji(T)), u.push(f + R + "=" + encodeURIComponent(k));
      });
    } catch (T) {
      throw u.push(f + "type=" + encodeURIComponent("_badmap")), T;
    }
  }
  function xn(o) {
    this.l = o.Ub || null, this.j = o.eb || !1;
  }
  D(xn, Xi), xn.prototype.g = function() {
    return new xr(this.l, this.j);
  }, xn.prototype.i = /* @__PURE__ */ function(o) {
    return function() {
      return o;
    };
  }({});
  function xr(o, u) {
    ve.call(this), this.D = o, this.o = u, this.m = void 0, this.status = this.readyState = 0, this.responseType = this.responseText = this.response = this.statusText = "", this.onreadystatechange = null, this.u = new Headers(), this.h = null, this.B = "GET", this.A = "", this.g = !1, this.v = this.j = this.l = null;
  }
  D(xr, ve), n = xr.prototype, n.open = function(o, u) {
    if (this.readyState != 0) throw this.abort(), Error("Error reopening a connection");
    this.B = o, this.A = u, this.readyState = 1, Fn(this);
  }, n.send = function(o) {
    if (this.readyState != 1) throw this.abort(), Error("need to call open() first. ");
    this.g = !0;
    const u = { headers: this.u, method: this.B, credentials: this.m, cache: void 0 };
    o && (u.body = o), (this.D || c).fetch(new Request(this.A, u)).then(this.Sa.bind(this), this.ga.bind(this));
  }, n.abort = function() {
    this.response = this.responseText = "", this.u = new Headers(), this.status = 0, this.j && this.j.cancel("Request was aborted.").catch(() => {
    }), 1 <= this.readyState && this.g && this.readyState != 4 && (this.g = !1, Un(this)), this.readyState = 0;
  }, n.Sa = function(o) {
    if (this.g && (this.l = o, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = o.headers, this.readyState = 2, Fn(this)), this.g && (this.readyState = 3, Fn(this), this.g))) if (this.responseType === "arraybuffer") o.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this));
    else if (typeof c.ReadableStream < "u" && "body" in o) {
      if (this.j = o.body.getReader(), this.o) {
        if (this.responseType) throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
        this.response = [];
      } else this.response = this.responseText = "", this.v = new TextDecoder();
      Va(this);
    } else o.text().then(this.Ra.bind(this), this.ga.bind(this));
  };
  function Va(o) {
    o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o));
  }
  n.Pa = function(o) {
    if (this.g) {
      if (this.o && o.value) this.response.push(o.value);
      else if (!this.o) {
        var u = o.value ? o.value : new Uint8Array(0);
        (u = this.v.decode(u, { stream: !o.done })) && (this.response = this.responseText += u);
      }
      o.done ? Un(this) : Fn(this), this.readyState == 3 && Va(this);
    }
  }, n.Ra = function(o) {
    this.g && (this.response = this.responseText = o, Un(this));
  }, n.Qa = function(o) {
    this.g && (this.response = o, Un(this));
  }, n.ga = function() {
    this.g && Un(this);
  };
  function Un(o) {
    o.readyState = 4, o.l = null, o.j = null, o.v = null, Fn(o);
  }
  n.setRequestHeader = function(o, u) {
    this.u.append(o, u);
  }, n.getResponseHeader = function(o) {
    return this.h && this.h.get(o.toLowerCase()) || "";
  }, n.getAllResponseHeaders = function() {
    if (!this.h) return "";
    const o = [], u = this.h.entries();
    for (var h = u.next(); !h.done; ) h = h.value, o.push(h[0] + ": " + h[1]), h = u.next();
    return o.join(`\r
`);
  };
  function Fn(o) {
    o.onreadystatechange && o.onreadystatechange.call(o);
  }
  Object.defineProperty(xr.prototype, "withCredentials", { get: function() {
    return this.m === "include";
  }, set: function(o) {
    this.m = o ? "include" : "same-origin";
  } });
  function La(o) {
    let u = "";
    return J(o, function(h, f) {
      u += f, u += ":", u += h, u += `\r
`;
    }), u;
  }
  function cs(o, u, h) {
    e: {
      for (f in h) {
        var f = !1;
        break e;
      }
      f = !0;
    }
    f || (h = La(h), typeof o == "string" ? h != null && encodeURIComponent(String(h)) : X(o, u, h));
  }
  function te(o) {
    ve.call(this), this.headers = /* @__PURE__ */ new Map(), this.o = o || null, this.h = !1, this.v = this.g = null, this.D = "", this.m = 0, this.l = "", this.j = this.B = this.u = this.A = !1, this.I = null, this.H = "", this.J = !1;
  }
  D(te, ve);
  var ff = /^https?$/i, pf = ["POST", "PUT"];
  n = te.prototype, n.Ha = function(o) {
    this.J = o;
  }, n.ea = function(o, u, h, f) {
    if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + o);
    u = u ? u.toUpperCase() : "GET", this.D = o, this.l = "", this.m = 0, this.A = !1, this.h = !0, this.g = this.o ? this.o.g() : ts.g(), this.v = this.o ? la(this.o) : la(ts), this.g.onreadystatechange = A(this.Ea, this);
    try {
      this.B = !0, this.g.open(u, String(o), !0), this.B = !1;
    } catch (R) {
      Ma(this, R);
      return;
    }
    if (o = h || "", h = new Map(this.headers), f) if (Object.getPrototypeOf(f) === Object.prototype) for (var T in f) h.set(T, f[T]);
    else if (typeof f.keys == "function" && typeof f.get == "function") for (const R of f.keys()) h.set(R, f.get(R));
    else throw Error("Unknown input type for opt_headers: " + String(f));
    f = Array.from(h.keys()).find((R) => R.toLowerCase() == "content-type"), T = c.FormData && o instanceof c.FormData, !(0 <= Array.prototype.indexOf.call(pf, u, void 0)) || f || T || h.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    for (const [R, k] of h) this.g.setRequestHeader(R, k);
    this.H && (this.g.responseType = this.H), "withCredentials" in this.g && this.g.withCredentials !== this.J && (this.g.withCredentials = this.J);
    try {
      Fa(this), this.u = !0, this.g.send(o), this.u = !1;
    } catch (R) {
      Ma(this, R);
    }
  };
  function Ma(o, u) {
    o.h = !1, o.g && (o.j = !0, o.g.abort(), o.j = !1), o.l = u, o.m = 5, xa(o), Ur(o);
  }
  function xa(o) {
    o.A || (o.A = !0, Re(o, "complete"), Re(o, "error"));
  }
  n.abort = function(o) {
    this.g && this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1, this.m = o || 7, Re(this, "complete"), Re(this, "abort"), Ur(this));
  }, n.N = function() {
    this.g && (this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1), Ur(this, !0)), te.aa.N.call(this);
  }, n.Ea = function() {
    this.s || (this.B || this.u || this.j ? Ua(this) : this.bb());
  }, n.bb = function() {
    Ua(this);
  };
  function Ua(o) {
    if (o.h && typeof a < "u" && (!o.v[1] || Je(o) != 4 || o.Z() != 2)) {
      if (o.u && Je(o) == 4) oa(o.Ea, 0, o);
      else if (Re(o, "readystatechange"), Je(o) == 4) {
        o.h = !1;
        try {
          const k = o.Z();
          e: switch (k) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var u = !0;
              break e;
            default:
              u = !1;
          }
          var h;
          if (!(h = u)) {
            var f;
            if (f = k === 0) {
              var T = String(o.D).match(Pa)[1] || null;
              !T && c.self && c.self.location && (T = c.self.location.protocol.slice(0, -1)), f = !ff.test(T ? T.toLowerCase() : "");
            }
            h = f;
          }
          if (h) Re(o, "complete"), Re(o, "success");
          else {
            o.m = 6;
            try {
              var R = 2 < Je(o) ? o.g.statusText : "";
            } catch {
              R = "";
            }
            o.l = R + " [" + o.Z() + "]", xa(o);
          }
        } finally {
          Ur(o);
        }
      }
    }
  }
  function Ur(o, u) {
    if (o.g) {
      Fa(o);
      const h = o.g, f = o.v[0] ? () => {
      } : null;
      o.g = null, o.v = null, u || Re(o, "ready");
      try {
        h.onreadystatechange = f;
      } catch {
      }
    }
  }
  function Fa(o) {
    o.I && (c.clearTimeout(o.I), o.I = null);
  }
  n.isActive = function() {
    return !!this.g;
  };
  function Je(o) {
    return o.g ? o.g.readyState : 0;
  }
  n.Z = function() {
    try {
      return 2 < Je(this) ? this.g.status : -1;
    } catch {
      return -1;
    }
  }, n.oa = function() {
    try {
      return this.g ? this.g.responseText : "";
    } catch {
      return "";
    }
  }, n.Oa = function(o) {
    if (this.g) {
      var u = this.g.responseText;
      return o && u.indexOf(o) == 0 && (u = u.substring(o.length)), Hd(u);
    }
  };
  function Ba(o) {
    try {
      if (!o.g) return null;
      if ("response" in o.g) return o.g.response;
      switch (o.H) {
        case "":
        case "text":
          return o.g.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in o.g) return o.g.mozResponseArrayBuffer;
      }
      return null;
    } catch {
      return null;
    }
  }
  function mf(o) {
    const u = {};
    o = (o.g && 2 <= Je(o) && o.g.getAllResponseHeaders() || "").split(`\r
`);
    for (let f = 0; f < o.length; f++) {
      if ($(o[f])) continue;
      var h = I(o[f]);
      const T = h[0];
      if (h = h[1], typeof h != "string") continue;
      h = h.trim();
      const R = u[T] || [];
      u[T] = R, R.push(h);
    }
    E(u, function(f) {
      return f.join(", ");
    });
  }
  n.Ba = function() {
    return this.m;
  }, n.Ka = function() {
    return typeof this.l == "string" ? this.l : String(this.l);
  };
  function Bn(o, u, h) {
    return h && h.internalChannelParams && h.internalChannelParams[o] || u;
  }
  function ja(o) {
    this.Aa = 0, this.i = [], this.j = new Nn(), this.ia = this.qa = this.I = this.W = this.g = this.ya = this.D = this.H = this.m = this.S = this.o = null, this.Ya = this.U = 0, this.Va = Bn("failFast", !1, o), this.F = this.C = this.u = this.s = this.l = null, this.X = !0, this.za = this.T = -1, this.Y = this.v = this.B = 0, this.Ta = Bn("baseRetryDelayMs", 5e3, o), this.cb = Bn("retryDelaySeedMs", 1e4, o), this.Wa = Bn("forwardChannelMaxRetries", 2, o), this.wa = Bn("forwardChannelRequestTimeoutMs", 2e4, o), this.pa = o && o.xmlHttpFactory || void 0, this.Xa = o && o.Tb || void 0, this.Ca = o && o.useFetchStreams || !1, this.L = void 0, this.J = o && o.supportsCrossDomainXhr || !1, this.K = "", this.h = new Ta(o && o.concurrentRequestLimit), this.Da = new hf(), this.P = o && o.fastHandshake || !1, this.O = o && o.encodeInitMessageHeaders || !1, this.P && this.O && (this.O = !1), this.Ua = o && o.Rb || !1, o && o.xa && this.j.xa(), o && o.forceLongPolling && (this.X = !1), this.ba = !this.P && this.X && o && o.detectBufferingProxy || !1, this.ja = void 0, o && o.longPollingTimeout && 0 < o.longPollingTimeout && (this.ja = o.longPollingTimeout), this.ca = void 0, this.R = 0, this.M = !1, this.ka = this.A = null;
  }
  n = ja.prototype, n.la = 8, n.G = 1, n.connect = function(o, u, h, f) {
    be(0), this.W = o, this.H = u || {}, h && f !== void 0 && (this.H.OSID = h, this.H.OAID = f), this.F = this.X, this.I = Ya(this, null, this.W), Br(this);
  };
  function us(o) {
    if ($a(o), o.G == 3) {
      var u = o.U++, h = Ye(o.I);
      if (X(h, "SID", o.K), X(h, "RID", u), X(h, "TYPE", "terminate"), jn(o, h), u = new ct(o, o.j, u), u.L = 2, u.v = Mr(Ye(h)), h = !1, c.navigator && c.navigator.sendBeacon) try {
        h = c.navigator.sendBeacon(u.v.toString(), "");
      } catch {
      }
      !h && c.Image && (new Image().src = u.v, h = !0), h || (u.g = Ja(u.j, null), u.g.ea(u.v)), u.F = Date.now(), Or(u);
    }
    Qa(o);
  }
  function Fr(o) {
    o.g && (hs(o), o.g.cancel(), o.g = null);
  }
  function $a(o) {
    Fr(o), o.u && (c.clearTimeout(o.u), o.u = null), jr(o), o.h.cancel(), o.s && (typeof o.s == "number" && c.clearTimeout(o.s), o.s = null);
  }
  function Br(o) {
    if (!wa(o.h) && !o.s) {
      o.s = !0;
      var u = o.Ga;
      Rn || ta(), bn || (Rn(), bn = !0), qi.add(u, o), o.B = 0;
    }
  }
  function gf(o, u) {
    return Aa(o.h) >= o.h.j - (o.s ? 1 : 0) ? !1 : o.s ? (o.i = u.D.concat(o.i), !0) : o.G == 1 || o.G == 2 || o.B >= (o.Va ? 0 : o.Wa) ? !1 : (o.s = Dn(A(o.Ga, o, u), Ga(o, o.B)), o.B++, !0);
  }
  n.Ga = function(o) {
    if (this.s) if (this.s = null, this.G == 1) {
      if (!o) {
        this.U = Math.floor(1e5 * Math.random()), o = this.U++;
        const T = new ct(this, this.j, o);
        let R = this.o;
        if (this.S && (R ? (R = m(R), v(R, this.S)) : R = this.S), this.m !== null || this.O || (T.H = R, R = null), this.P) e: {
          for (var u = 0, h = 0; h < this.i.length; h++) {
            t: {
              var f = this.i[h];
              if ("__data__" in f.map && (f = f.map.__data__, typeof f == "string")) {
                f = f.length;
                break t;
              }
              f = void 0;
            }
            if (f === void 0) break;
            if (u += f, 4096 < u) {
              u = h;
              break e;
            }
            if (u === 4096 || h === this.i.length - 1) {
              u = h + 1;
              break e;
            }
          }
          u = 1e3;
        }
        else u = 1e3;
        u = za(this, T, u), h = Ye(this.I), X(h, "RID", o), X(h, "CVER", 22), this.D && X(h, "X-HTTP-Session-Id", this.D), jn(this, h), R && (this.O ? u = "headers=" + encodeURIComponent(String(La(R))) + "&" + u : this.m && cs(h, this.m, R)), as(this.h, T), this.Ua && X(h, "TYPE", "init"), this.P ? (X(h, "$req", u), X(h, "SID", "null"), T.T = !0, rs(T, h, null)) : rs(T, h, u), this.G = 2;
      }
    } else this.G == 3 && (o ? qa(this, o) : this.i.length == 0 || wa(this.h) || qa(this));
  };
  function qa(o, u) {
    var h;
    u ? h = u.l : h = o.U++;
    const f = Ye(o.I);
    X(f, "SID", o.K), X(f, "RID", h), X(f, "AID", o.T), jn(o, f), o.m && o.o && cs(f, o.m, o.o), h = new ct(o, o.j, h, o.B + 1), o.m === null && (h.H = o.o), u && (o.i = u.D.concat(o.i)), u = za(o, h, 1e3), h.I = Math.round(0.5 * o.wa) + Math.round(0.5 * o.wa * Math.random()), as(o.h, h), rs(h, f, u);
  }
  function jn(o, u) {
    o.H && J(o.H, function(h, f) {
      X(u, f, h);
    }), o.l && Sa({}, function(h, f) {
      X(u, f, h);
    });
  }
  function za(o, u, h) {
    h = Math.min(o.i.length, h);
    var f = o.l ? A(o.l.Na, o.l, o) : null;
    e: {
      var T = o.i;
      let R = -1;
      for (; ; ) {
        const k = ["count=" + h];
        R == -1 ? 0 < h ? (R = T[0].g, k.push("ofs=" + R)) : R = 0 : k.push("ofs=" + R);
        let Q = !0;
        for (let de = 0; de < h; de++) {
          let K = T[de].g;
          const Ee = T[de].map;
          if (K -= R, 0 > K) R = Math.max(0, T[de].g - 100), Q = !1;
          else try {
            df(Ee, k, "req" + K + "_");
          } catch {
            f && f(Ee);
          }
        }
        if (Q) {
          f = k.join("&");
          break e;
        }
      }
    }
    return o = o.i.splice(0, h), u.D = o, f;
  }
  function Ha(o) {
    if (!o.g && !o.u) {
      o.Y = 1;
      var u = o.Fa;
      Rn || ta(), bn || (Rn(), bn = !0), qi.add(u, o), o.v = 0;
    }
  }
  function ls(o) {
    return o.g || o.u || 3 <= o.v ? !1 : (o.Y++, o.u = Dn(A(o.Fa, o), Ga(o, o.v)), o.v++, !0);
  }
  n.Fa = function() {
    if (this.u = null, Wa(this), this.ba && !(this.M || this.g == null || 0 >= this.R)) {
      var o = 2 * this.R;
      this.j.info("BP detection timer enabled: " + o), this.A = Dn(A(this.ab, this), o);
    }
  }, n.ab = function() {
    this.A && (this.A = null, this.j.info("BP detection timeout reached."), this.j.info("Buffering proxy detected and switch to long-polling!"), this.F = !1, this.M = !0, be(10), Fr(this), Wa(this));
  };
  function hs(o) {
    o.A != null && (c.clearTimeout(o.A), o.A = null);
  }
  function Wa(o) {
    o.g = new ct(o, o.j, "rpc", o.Y), o.m === null && (o.g.H = o.o), o.g.O = 0;
    var u = Ye(o.qa);
    X(u, "RID", "rpc"), X(u, "SID", o.K), X(u, "AID", o.T), X(u, "CI", o.F ? "0" : "1"), !o.F && o.ja && X(u, "TO", o.ja), X(u, "TYPE", "xmlhttp"), jn(o, u), o.m && o.o && cs(u, o.m, o.o), o.L && (o.g.I = o.L);
    var h = o.g;
    o = o.ia, h.L = 1, h.v = Mr(Ye(u)), h.m = null, h.P = !0, va(h, o);
  }
  n.Za = function() {
    this.C != null && (this.C = null, Fr(this), ls(this), be(19));
  };
  function jr(o) {
    o.C != null && (c.clearTimeout(o.C), o.C = null);
  }
  function Ka(o, u) {
    var h = null;
    if (o.g == u) {
      jr(o), hs(o), o.g = null;
      var f = 2;
    } else if (os(o.h, u)) h = u.D, Ra(o.h, u), f = 1;
    else return;
    if (o.G != 0) {
      if (u.o) if (f == 1) {
        h = u.m ? u.m.length : 0, u = Date.now() - u.F;
        var T = o.B;
        f = kr(), Re(f, new ma(f, h)), Br(o);
      } else Ha(o);
      else if (T = u.s, T == 3 || T == 0 && 0 < u.X || !(f == 1 && gf(o, u) || f == 2 && ls(o))) switch (h && 0 < h.length && (u = o.h, u.i = u.i.concat(h)), T) {
        case 1:
          Dt(o, 5);
          break;
        case 4:
          Dt(o, 10);
          break;
        case 3:
          Dt(o, 6);
          break;
        default:
          Dt(o, 2);
      }
    }
  }
  function Ga(o, u) {
    let h = o.Ta + Math.floor(Math.random() * o.cb);
    return o.isActive() || (h *= 2), h * u;
  }
  function Dt(o, u) {
    if (o.j.info("Error code " + u), u == 2) {
      var h = A(o.fb, o), f = o.Xa;
      const T = !f;
      f = new kt(f || "//www.google.com/images/cleardot.gif"), c.location && c.location.protocol == "http" || Vr(f, "https"), Mr(f), T ? uf(f.toString(), h) : lf(f.toString(), h);
    } else be(2);
    o.G = 0, o.l && o.l.sa(u), Qa(o), $a(o);
  }
  n.fb = function(o) {
    o ? (this.j.info("Successfully pinged google.com"), be(2)) : (this.j.info("Failed to ping google.com"), be(1));
  };
  function Qa(o) {
    if (o.G = 0, o.ka = [], o.l) {
      const u = ba(o.h);
      (u.length != 0 || o.i.length != 0) && (C(o.ka, u), C(o.ka, o.i), o.h.i.length = 0, O(o.i), o.i.length = 0), o.l.ra();
    }
  }
  function Ya(o, u, h) {
    var f = h instanceof kt ? Ye(h) : new kt(h);
    if (f.g != "") u && (f.g = u + "." + f.g), Lr(f, f.s);
    else {
      var T = c.location;
      f = T.protocol, u = u ? u + "." + T.hostname : T.hostname, T = +T.port;
      var R = new kt(null);
      f && Vr(R, f), u && (R.g = u), T && Lr(R, T), h && (R.l = h), f = R;
    }
    return h = o.D, u = o.ya, h && u && X(f, h, u), X(f, "VER", o.la), jn(o, f), f;
  }
  function Ja(o, u, h) {
    if (u && !o.J) throw Error("Can't create secondary domain capable XhrIo object.");
    return u = o.Ca && !o.pa ? new te(new xn({ eb: h })) : new te(o.pa), u.Ha(o.J), u;
  }
  n.isActive = function() {
    return !!this.l && this.l.isActive(this);
  };
  function Xa() {
  }
  n = Xa.prototype, n.ua = function() {
  }, n.ta = function() {
  }, n.sa = function() {
  }, n.ra = function() {
  }, n.isActive = function() {
    return !0;
  }, n.Na = function() {
  };
  function $r() {
  }
  $r.prototype.g = function(o, u) {
    return new De(o, u);
  };
  function De(o, u) {
    ve.call(this), this.g = new ja(u), this.l = o, this.h = u && u.messageUrlParams || null, o = u && u.messageHeaders || null, u && u.clientProtocolHeaderRequired && (o ? o["X-Client-Protocol"] = "webchannel" : o = { "X-Client-Protocol": "webchannel" }), this.g.o = o, o = u && u.initMessageHeaders || null, u && u.messageContentType && (o ? o["X-WebChannel-Content-Type"] = u.messageContentType : o = { "X-WebChannel-Content-Type": u.messageContentType }), u && u.va && (o ? o["X-WebChannel-Client-Profile"] = u.va : o = { "X-WebChannel-Client-Profile": u.va }), this.g.S = o, (o = u && u.Sb) && !$(o) && (this.g.m = o), this.v = u && u.supportsCrossDomainXhr || !1, this.u = u && u.sendRawJson || !1, (u = u && u.httpSessionIdParam) && !$(u) && (this.g.D = u, o = this.h, o !== null && u in o && (o = this.h, u in o && delete o[u])), this.j = new en(this);
  }
  D(De, ve), De.prototype.m = function() {
    this.g.l = this.j, this.v && (this.g.J = !0), this.g.connect(this.l, this.h || void 0);
  }, De.prototype.close = function() {
    us(this.g);
  }, De.prototype.o = function(o) {
    var u = this.g;
    if (typeof o == "string") {
      var h = {};
      h.__data__ = o, o = h;
    } else this.u && (h = {}, h.__data__ = Ji(o), o = h);
    u.i.push(new Xd(u.Ya++, o)), u.G == 3 && Br(u);
  }, De.prototype.N = function() {
    this.g.l = null, delete this.j, us(this.g), delete this.g, De.aa.N.call(this);
  };
  function Za(o) {
    Zi.call(this), o.__headers__ && (this.headers = o.__headers__, this.statusCode = o.__status__, delete o.__headers__, delete o.__status__);
    var u = o.__sm__;
    if (u) {
      e: {
        for (const h in u) {
          o = h;
          break e;
        }
        o = void 0;
      }
      (this.i = o) && (o = this.i, u = u !== null && o in u ? u[o] : void 0), this.data = u;
    } else this.data = o;
  }
  D(Za, Zi);
  function ec() {
    es.call(this), this.status = 1;
  }
  D(ec, es);
  function en(o) {
    this.g = o;
  }
  D(en, Xa), en.prototype.ua = function() {
    Re(this.g, "a");
  }, en.prototype.ta = function(o) {
    Re(this.g, new Za(o));
  }, en.prototype.sa = function(o) {
    Re(this.g, new ec());
  }, en.prototype.ra = function() {
    Re(this.g, "b");
  }, $r.prototype.createWebChannel = $r.prototype.g, De.prototype.send = De.prototype.o, De.prototype.open = De.prototype.m, De.prototype.close = De.prototype.close, Pl = function() {
    return new $r();
  }, Sl = function() {
    return kr();
  }, bl = Pt, Fs = { mb: 0, pb: 1, qb: 2, Jb: 3, Ob: 4, Lb: 5, Mb: 6, Kb: 7, Ib: 8, Nb: 9, PROXY: 10, NOPROXY: 11, Gb: 12, Cb: 13, Db: 14, Bb: 15, Eb: 16, Fb: 17, ib: 18, hb: 19, jb: 20 }, Dr.NO_ERROR = 0, Dr.TIMEOUT = 8, Dr.HTTP_ERROR = 6, ni = Dr, ga.COMPLETE = "complete", Rl = ga, ha.EventType = Cn, Cn.OPEN = "a", Cn.CLOSE = "b", Cn.ERROR = "c", Cn.MESSAGE = "d", ve.prototype.listen = ve.prototype.K, Wn = ha, Al = xn, te.prototype.listenOnce = te.prototype.L, te.prototype.getLastError = te.prototype.Ka, te.prototype.getLastErrorCode = te.prototype.Ba, te.prototype.getStatus = te.prototype.Z, te.prototype.getResponseJson = te.prototype.Oa, te.prototype.getResponseText = te.prototype.oa, te.prototype.send = te.prototype.ea, te.prototype.setWithCredentials = te.prototype.Ha, wl = te;
}).apply(typeof Wr < "u" ? Wr : typeof self < "u" ? self : typeof window < "u" ? window : {});
const Nc = "@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
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
class we {
  constructor(e) {
    this.uid = e;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  /**
   * Returns a key representing this user, suitable for inclusion in a
   * dictionary.
   */
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(e) {
    return e.uid === this.uid;
  }
}
we.UNAUTHENTICATED = new we(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
we.GOOGLE_CREDENTIALS = new we("google-credentials-uid"), we.FIRST_PARTY = new we("first-party-uid"), we.MOCK_USER = new we("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
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
let En = "10.12.5";
/**
 * @license
 * Copyright 2017 Google LLC
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
const $t = new Ri("@firebase/firestore");
function $n() {
  return $t.logLevel;
}
function N(n, ...e) {
  if ($t.logLevel <= H.DEBUG) {
    const t = e.map(_o);
    $t.debug(`Firestore (${En}): ${n}`, ...t);
  }
}
function it(n, ...e) {
  if ($t.logLevel <= H.ERROR) {
    const t = e.map(_o);
    $t.error(`Firestore (${En}): ${n}`, ...t);
  }
}
function hn(n, ...e) {
  if ($t.logLevel <= H.WARN) {
    const t = e.map(_o);
    $t.warn(`Firestore (${En}): ${n}`, ...t);
  }
}
function _o(n) {
  if (typeof n == "string") return n;
  try {
    /**
    * @license
    * Copyright 2020 Google LLC
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
    return function(t) {
      return JSON.stringify(t);
    }(n);
  } catch {
    return n;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function x(n = "Unexpected state") {
  const e = `FIRESTORE (${En}) INTERNAL ASSERTION FAILED: ` + n;
  throw it(e), new Error(e);
}
function Y(n, e) {
  n || x();
}
function F(n, e) {
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
const P = {
  // Causes are copied from:
  // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
  /** Not an error; returned on success. */
  OK: "ok",
  /** The operation was cancelled (typically by the caller). */
  CANCELLED: "cancelled",
  /** Unknown error or an error from a different error domain. */
  UNKNOWN: "unknown",
  /**
   * Client specified an invalid argument. Note that this differs from
   * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
   * problematic regardless of the state of the system (e.g., a malformed file
   * name).
   */
  INVALID_ARGUMENT: "invalid-argument",
  /**
   * Deadline expired before operation could complete. For operations that
   * change the state of the system, this error may be returned even if the
   * operation has completed successfully. For example, a successful response
   * from a server could have been delayed long enough for the deadline to
   * expire.
   */
  DEADLINE_EXCEEDED: "deadline-exceeded",
  /** Some requested entity (e.g., file or directory) was not found. */
  NOT_FOUND: "not-found",
  /**
   * Some entity that we attempted to create (e.g., file or directory) already
   * exists.
   */
  ALREADY_EXISTS: "already-exists",
  /**
   * The caller does not have permission to execute the specified operation.
   * PERMISSION_DENIED must not be used for rejections caused by exhausting
   * some resource (use RESOURCE_EXHAUSTED instead for those errors).
   * PERMISSION_DENIED must not be used if the caller cannot be identified
   * (use UNAUTHENTICATED instead for those errors).
   */
  PERMISSION_DENIED: "permission-denied",
  /**
   * The request does not have valid authentication credentials for the
   * operation.
   */
  UNAUTHENTICATED: "unauthenticated",
  /**
   * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
   * entire file system is out of space.
   */
  RESOURCE_EXHAUSTED: "resource-exhausted",
  /**
   * Operation was rejected because the system is not in a state required for
   * the operation's execution. For example, directory to be deleted may be
   * non-empty, an rmdir operation is applied to a non-directory, etc.
   *
   * A litmus test that may help a service implementor in deciding
   * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
   *  (a) Use UNAVAILABLE if the client can retry just the failing call.
   *  (b) Use ABORTED if the client should retry at a higher-level
   *      (e.g., restarting a read-modify-write sequence).
   *  (c) Use FAILED_PRECONDITION if the client should not retry until
   *      the system state has been explicitly fixed. E.g., if an "rmdir"
   *      fails because the directory is non-empty, FAILED_PRECONDITION
   *      should be returned since the client should not retry unless
   *      they have first fixed up the directory by deleting files from it.
   *  (d) Use FAILED_PRECONDITION if the client performs conditional
   *      REST Get/Update/Delete on a resource and the resource on the
   *      server does not match the condition. E.g., conflicting
   *      read-modify-write on the same resource.
   */
  FAILED_PRECONDITION: "failed-precondition",
  /**
   * The operation was aborted, typically due to a concurrency issue like
   * sequencer check failures, transaction aborts, etc.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  ABORTED: "aborted",
  /**
   * Operation was attempted past the valid range. E.g., seeking or reading
   * past end of file.
   *
   * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
   * if the system state changes. For example, a 32-bit file system will
   * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
   * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
   * an offset past the current file size.
   *
   * There is a fair bit of overlap between FAILED_PRECONDITION and
   * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
   * when it applies so that callers who are iterating through a space can
   * easily look for an OUT_OF_RANGE error to detect when they are done.
   */
  OUT_OF_RANGE: "out-of-range",
  /** Operation is not implemented or not supported/enabled in this service. */
  UNIMPLEMENTED: "unimplemented",
  /**
   * Internal errors. Means some invariants expected by underlying System has
   * been broken. If you see one of these errors, Something is very broken.
   */
  INTERNAL: "internal",
  /**
   * The service is currently unavailable. This is a most likely a transient
   * condition and may be corrected by retrying with a backoff.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  UNAVAILABLE: "unavailable",
  /** Unrecoverable data loss or corruption. */
  DATA_LOSS: "data-loss"
};
class L extends Ue {
  /** @hideconstructor */
  constructor(e, t) {
    super(e, t), this.code = e, this.message = t, // HACK: We write a toString property directly because Error is not a real
    // class and so inheritance does not work correctly. We could alternatively
    // do the same "back-door inheritance" trick that FirebaseError does.
    this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Et {
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Cl {
  constructor(e, t) {
    this.user = t, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${e}`);
  }
}
class I_ {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {
  }
  start(e, t) {
    e.enqueueRetryable(() => t(we.UNAUTHENTICATED));
  }
  shutdown() {
  }
}
class T_ {
  constructor(e) {
    this.token = e, /**
     * Stores the listener registered with setChangeListener()
     * This isn't actually necessary since the UID never changes, but we use this
     * to verify the listen contract is adhered to in tests.
     */
    this.changeListener = null;
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {
  }
  start(e, t) {
    this.changeListener = t, // Fire with initial user.
    e.enqueueRetryable(() => t(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class w_ {
  constructor(e) {
    this.t = e, /** Tracks the current User. */
    this.currentUser = we.UNAUTHENTICATED, /**
     * Counter used to detect if the token changed while a getToken request was
     * outstanding.
     */
    this.i = 0, this.forceRefresh = !1, this.auth = null;
  }
  start(e, t) {
    let r = this.i;
    const i = (l) => this.i !== r ? (r = this.i, t(l)) : Promise.resolve();
    let s = new Et();
    this.o = () => {
      this.i++, this.currentUser = this.u(), s.resolve(), s = new Et(), e.enqueueRetryable(() => i(this.currentUser));
    };
    const a = () => {
      const l = s;
      e.enqueueRetryable(async () => {
        await l.promise, await i(this.currentUser);
      });
    }, c = (l) => {
      N("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = l, this.auth.addAuthTokenListener(this.o), a();
    };
    this.t.onInit((l) => c(l)), // Our users can initialize Auth right after Firestore, so we give it
    // a chance to register itself with the component framework before we
    // determine whether to start up in unauthenticated mode.
    setTimeout(() => {
      if (!this.auth) {
        const l = this.t.getImmediate({
          optional: !0
        });
        l ? c(l) : (
          // If auth is still not available, proceed with `null` user
          (N("FirebaseAuthCredentialsProvider", "Auth not yet detected"), s.resolve(), s = new Et())
        );
      }
    }, 0), a();
  }
  getToken() {
    const e = this.i, t = this.forceRefresh;
    return this.forceRefresh = !1, this.auth ? this.auth.getToken(t).then((r) => (
      // Cancel the request since the token changed while the request was
      // outstanding so the response is potentially for a previous user (which
      // user, we can't be sure).
      this.i !== e ? (N("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : r ? (Y(typeof r.accessToken == "string"), new Cl(r.accessToken, this.currentUser)) : null
    )) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.auth && this.auth.removeAuthTokenListener(this.o);
  }
  // Auth.getUid() can return null even with a user logged in. It is because
  // getUid() is synchronous, but the auth code populating Uid is asynchronous.
  // This method should only be called in the AuthTokenListener callback
  // to guarantee to get the actual user.
  u() {
    const e = this.auth && this.auth.getUid();
    return Y(e === null || typeof e == "string"), new we(e);
  }
}
class A_ {
  constructor(e, t, r) {
    this.l = e, this.h = t, this.P = r, this.type = "FirstParty", this.user = we.FIRST_PARTY, this.I = /* @__PURE__ */ new Map();
  }
  /**
   * Gets an authorization token, using a provided factory function, or return
   * null.
   */
  T() {
    return this.P ? this.P() : null;
  }
  get headers() {
    this.I.set("X-Goog-AuthUser", this.l);
    const e = this.T();
    return e && this.I.set("Authorization", e), this.h && this.I.set("X-Goog-Iam-Authorization-Token", this.h), this.I;
  }
}
class R_ {
  constructor(e, t, r) {
    this.l = e, this.h = t, this.P = r;
  }
  getToken() {
    return Promise.resolve(new A_(this.l, this.h, this.P));
  }
  start(e, t) {
    e.enqueueRetryable(() => t(we.FIRST_PARTY));
  }
  shutdown() {
  }
  invalidateToken() {
  }
}
class b_ {
  constructor(e) {
    this.value = e, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
}
class S_ {
  constructor(e) {
    this.A = e, this.forceRefresh = !1, this.appCheck = null, this.R = null;
  }
  start(e, t) {
    const r = (s) => {
      s.error != null && N("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);
      const a = s.token !== this.R;
      return this.R = s.token, N("FirebaseAppCheckTokenProvider", `Received ${a ? "new" : "existing"} token.`), a ? t(s.token) : Promise.resolve();
    };
    this.o = (s) => {
      e.enqueueRetryable(() => r(s));
    };
    const i = (s) => {
      N("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = s, this.appCheck.addTokenListener(this.o);
    };
    this.A.onInit((s) => i(s)), // Our users can initialize AppCheck after Firestore, so we give it
    // a chance to register itself with the component framework.
    setTimeout(() => {
      if (!this.appCheck) {
        const s = this.A.getImmediate({
          optional: !0
        });
        s ? i(s) : (
          // If AppCheck is still not available, proceed without it.
          N("FirebaseAppCheckTokenProvider", "AppCheck not yet detected")
        );
      }
    }, 0);
  }
  getToken() {
    const e = this.forceRefresh;
    return this.forceRefresh = !1, this.appCheck ? this.appCheck.getToken(e).then((t) => t ? (Y(typeof t.token == "string"), this.R = t.token, new b_(t.token)) : null) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function P_(n) {
  const e = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof self < "u" && (self.crypto || self.msCrypto)
  ), t = new Uint8Array(n);
  if (e && typeof e.getRandomValues == "function") e.getRandomValues(t);
  else
    for (let r = 0; r < n; r++) t[r] = Math.floor(256 * Math.random());
  return t;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class kl {
  static newId() {
    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t = Math.floor(256 / e.length) * e.length;
    let r = "";
    for (; r.length < 20; ) {
      const i = P_(40);
      for (let s = 0; s < i.length; ++s)
        r.length < 20 && i[s] < t && (r += e.charAt(i[s] % e.length));
    }
    return r;
  }
}
function G(n, e) {
  return n < e ? -1 : n > e ? 1 : 0;
}
function dn(n, e, t) {
  return n.length === e.length && n.every((r, i) => t(r, e[i]));
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class ue {
  /**
   * Creates a new timestamp.
   *
   * @param seconds - The number of seconds of UTC time since Unix epoch
   *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
   *     9999-12-31T23:59:59Z inclusive.
   * @param nanoseconds - The non-negative fractions of a second at nanosecond
   *     resolution. Negative second values with fractions must still have
   *     non-negative nanoseconds values that count forward in time. Must be
   *     from 0 to 999,999,999 inclusive.
   */
  constructor(e, t) {
    if (this.seconds = e, this.nanoseconds = t, t < 0) throw new L(P.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
    if (t >= 1e9) throw new L(P.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
    if (e < -62135596800) throw new L(P.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
    if (e >= 253402300800) throw new L(P.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
  }
  /**
   * Creates a new timestamp with the current date, with millisecond precision.
   *
   * @returns a new timestamp representing the current date.
   */
  static now() {
    return ue.fromMillis(Date.now());
  }
  /**
   * Creates a new timestamp from the given date.
   *
   * @param date - The date to initialize the `Timestamp` from.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     date.
   */
  static fromDate(e) {
    return ue.fromMillis(e.getTime());
  }
  /**
   * Creates a new timestamp from the given number of milliseconds.
   *
   * @param milliseconds - Number of milliseconds since Unix epoch
   *     1970-01-01T00:00:00Z.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     number of milliseconds.
   */
  static fromMillis(e) {
    const t = Math.floor(e / 1e3), r = Math.floor(1e6 * (e - 1e3 * t));
    return new ue(t, r);
  }
  /**
   * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
   * causes a loss of precision since `Date` objects only support millisecond
   * precision.
   *
   * @returns JavaScript `Date` object representing the same point in time as
   *     this `Timestamp`, with millisecond precision.
   */
  toDate() {
    return new Date(this.toMillis());
  }
  /**
   * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
   * epoch). This operation causes a loss of precision.
   *
   * @returns The point in time corresponding to this timestamp, represented as
   *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
   */
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(e) {
    return this.seconds === e.seconds ? G(this.nanoseconds, e.nanoseconds) : G(this.seconds, e.seconds);
  }
  /**
   * Returns true if this `Timestamp` is equal to the provided one.
   *
   * @param other - The `Timestamp` to compare against.
   * @returns true if this `Timestamp` is equal to the provided one.
   */
  isEqual(e) {
    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
  }
  /** Returns a textual representation of this `Timestamp`. */
  toString() {
    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
  }
  /** Returns a JSON-serializable representation of this `Timestamp`. */
  toJSON() {
    return {
      seconds: this.seconds,
      nanoseconds: this.nanoseconds
    };
  }
  /**
   * Converts this object to a primitive string, which allows `Timestamp` objects
   * to be compared using the `>`, `<=`, `>=` and `>` operators.
   */
  valueOf() {
    const e = this.seconds - -62135596800;
    return String(e).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class U {
  constructor(e) {
    this.timestamp = e;
  }
  static fromTimestamp(e) {
    return new U(e);
  }
  static min() {
    return new U(new ue(0, 0));
  }
  static max() {
    return new U(new ue(253402300799, 999999999));
  }
  compareTo(e) {
    return this.timestamp._compareTo(e.timestamp);
  }
  isEqual(e) {
    return this.timestamp.isEqual(e.timestamp);
  }
  /** Returns a number representation of the version for use in spec tests. */
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class ar {
  constructor(e, t, r) {
    t === void 0 ? t = 0 : t > e.length && x(), r === void 0 ? r = e.length - t : r > e.length - t && x(), this.segments = e, this.offset = t, this.len = r;
  }
  get length() {
    return this.len;
  }
  isEqual(e) {
    return ar.comparator(this, e) === 0;
  }
  child(e) {
    const t = this.segments.slice(this.offset, this.limit());
    return e instanceof ar ? e.forEach((r) => {
      t.push(r);
    }) : t.push(e), this.construct(t);
  }
  /** The index of one past the last segment of the path. */
  limit() {
    return this.offset + this.length;
  }
  popFirst(e) {
    return e = e === void 0 ? 1 : e, this.construct(this.segments, this.offset + e, this.length - e);
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(e) {
    return this.segments[this.offset + e];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(e) {
    if (e.length < this.length) return !1;
    for (let t = 0; t < this.length; t++) if (this.get(t) !== e.get(t)) return !1;
    return !0;
  }
  isImmediateParentOf(e) {
    if (this.length + 1 !== e.length) return !1;
    for (let t = 0; t < this.length; t++) if (this.get(t) !== e.get(t)) return !1;
    return !0;
  }
  forEach(e) {
    for (let t = this.offset, r = this.limit(); t < r; t++) e(this.segments[t]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(e, t) {
    const r = Math.min(e.length, t.length);
    for (let i = 0; i < r; i++) {
      const s = e.get(i), a = t.get(i);
      if (s < a) return -1;
      if (s > a) return 1;
    }
    return e.length < t.length ? -1 : e.length > t.length ? 1 : 0;
  }
}
class Z extends ar {
  construct(e, t, r) {
    return new Z(e, t, r);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  /**
   * Returns a string representation of this path
   * where each path segment has been encoded with
   * `encodeURIComponent`.
   */
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join("/");
  }
  /**
   * Creates a resource path from the given slash-delimited string. If multiple
   * arguments are provided, all components are combined. Leading and trailing
   * slashes from all components are ignored.
   */
  static fromString(...e) {
    const t = [];
    for (const r of e) {
      if (r.indexOf("//") >= 0) throw new L(P.INVALID_ARGUMENT, `Invalid segment (${r}). Paths must not contain // in them.`);
      t.push(...r.split("/").filter((i) => i.length > 0));
    }
    return new Z(t);
  }
  static emptyPath() {
    return new Z([]);
  }
}
const C_ = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class pe extends ar {
  construct(e, t, r) {
    return new pe(e, t, r);
  }
  /**
   * Returns true if the string could be used as a segment in a field path
   * without escaping.
   */
  static isValidIdentifier(e) {
    return C_.test(e);
  }
  canonicalString() {
    return this.toArray().map((e) => (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), pe.isValidIdentifier(e) || (e = "`" + e + "`"), e)).join(".");
  }
  toString() {
    return this.canonicalString();
  }
  /**
   * Returns true if this field references the key of a document.
   */
  isKeyField() {
    return this.length === 1 && this.get(0) === "__name__";
  }
  /**
   * The field designating the key of a document.
   */
  static keyField() {
    return new pe(["__name__"]);
  }
  /**
   * Parses a field string from the given server-formatted string.
   *
   * - Splitting the empty string is not allowed (for now at least).
   * - Empty segments within the string (e.g. if there are two consecutive
   *   separators) are not allowed.
   *
   * TODO(b/37244157): we should make this more strict. Right now, it allows
   * non-identifier path components, even if they aren't escaped.
   */
  static fromServerFormat(e) {
    const t = [];
    let r = "", i = 0;
    const s = () => {
      if (r.length === 0) throw new L(P.INVALID_ARGUMENT, `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
      t.push(r), r = "";
    };
    let a = !1;
    for (; i < e.length; ) {
      const c = e[i];
      if (c === "\\") {
        if (i + 1 === e.length) throw new L(P.INVALID_ARGUMENT, "Path has trailing escape character: " + e);
        const l = e[i + 1];
        if (l !== "\\" && l !== "." && l !== "`") throw new L(P.INVALID_ARGUMENT, "Path has invalid escape sequence: " + e);
        r += l, i += 2;
      } else c === "`" ? (a = !a, i++) : c !== "." || a ? (r += c, i++) : (s(), i++);
    }
    if (s(), a) throw new L(P.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
    return new pe(t);
  }
  static emptyPath() {
    return new pe([]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class M {
  constructor(e) {
    this.path = e;
  }
  static fromPath(e) {
    return new M(Z.fromString(e));
  }
  static fromName(e) {
    return new M(Z.fromString(e).popFirst(5));
  }
  static empty() {
    return new M(Z.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  /** Returns true if the document is in the specified collectionId. */
  hasCollectionId(e) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
  }
  /** Returns the collection group (i.e. the name of the parent collection) for this key. */
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  /** Returns the fully qualified path to the parent collection. */
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(e) {
    return e !== null && Z.comparator(this.path, e.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(e, t) {
    return Z.comparator(e.path, t.path);
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0;
  }
  /**
   * Creates and returns a new document key with the given segments.
   *
   * @param segments - The segments of the path to the document
   * @returns A new instance of DocumentKey
   */
  static fromSegments(e) {
    return new M(new Z(e.slice()));
  }
}
function k_(n, e) {
  const t = n.toTimestamp().seconds, r = n.toTimestamp().nanoseconds + 1, i = U.fromTimestamp(r === 1e9 ? new ue(t + 1, 0) : new ue(t, r));
  return new wt(i, M.empty(), e);
}
function D_(n) {
  return new wt(n.readTime, n.key, -1);
}
class wt {
  constructor(e, t, r) {
    this.readTime = e, this.documentKey = t, this.largestBatchId = r;
  }
  /** Returns an offset that sorts before all regular offsets. */
  static min() {
    return new wt(U.min(), M.empty(), -1);
  }
  /** Returns an offset that sorts after all regular offsets. */
  static max() {
    return new wt(U.max(), M.empty(), -1);
  }
}
function N_(n, e) {
  let t = n.readTime.compareTo(e.readTime);
  return t !== 0 ? t : (t = M.comparator(n.documentKey, e.documentKey), t !== 0 ? t : G(n.largestBatchId, e.largestBatchId));
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const O_ = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class V_ {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(e) {
    this.onCommittedListeners.push(e);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((e) => e());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
async function vr(n) {
  if (n.code !== P.FAILED_PRECONDITION || n.message !== O_) throw n;
  N("LocalStore", "Unexpectedly lost primary lease");
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class S {
  constructor(e) {
    this.nextCallback = null, this.catchCallback = null, // When the operation resolves, we'll set result or error and mark isDone.
    this.result = void 0, this.error = void 0, this.isDone = !1, // Set to true when .then() or .catch() are called and prevents additional
    // chaining.
    this.callbackAttached = !1, e((t) => {
      this.isDone = !0, this.result = t, this.nextCallback && // value should be defined unless T is Void, but we can't express
      // that in the type system.
      this.nextCallback(t);
    }, (t) => {
      this.isDone = !0, this.error = t, this.catchCallback && this.catchCallback(t);
    });
  }
  catch(e) {
    return this.next(void 0, e);
  }
  next(e, t) {
    return this.callbackAttached && x(), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(t, this.error) : this.wrapSuccess(e, this.result) : new S((r, i) => {
      this.nextCallback = (s) => {
        this.wrapSuccess(e, s).next(r, i);
      }, this.catchCallback = (s) => {
        this.wrapFailure(t, s).next(r, i);
      };
    });
  }
  toPromise() {
    return new Promise((e, t) => {
      this.next(e, t);
    });
  }
  wrapUserFunction(e) {
    try {
      const t = e();
      return t instanceof S ? t : S.resolve(t);
    } catch (t) {
      return S.reject(t);
    }
  }
  wrapSuccess(e, t) {
    return e ? this.wrapUserFunction(() => e(t)) : S.resolve(t);
  }
  wrapFailure(e, t) {
    return e ? this.wrapUserFunction(() => e(t)) : S.reject(t);
  }
  static resolve(e) {
    return new S((t, r) => {
      t(e);
    });
  }
  static reject(e) {
    return new S((t, r) => {
      r(e);
    });
  }
  static waitFor(e) {
    return new S((t, r) => {
      let i = 0, s = 0, a = !1;
      e.forEach((c) => {
        ++i, c.next(() => {
          ++s, a && s === i && t();
        }, (l) => r(l));
      }), a = !0, s === i && t();
    });
  }
  /**
   * Given an array of predicate functions that asynchronously evaluate to a
   * boolean, implements a short-circuiting `or` between the results. Predicates
   * will be evaluated until one of them returns `true`, then stop. The final
   * result will be whether any of them returned `true`.
   */
  static or(e) {
    let t = S.resolve(!1);
    for (const r of e) t = t.next((i) => i ? S.resolve(i) : r());
    return t;
  }
  static forEach(e, t) {
    const r = [];
    return e.forEach((i, s) => {
      r.push(t.call(this, i, s));
    }), this.waitFor(r);
  }
  /**
   * Concurrently map all array elements through asynchronous function.
   */
  static mapArray(e, t) {
    return new S((r, i) => {
      const s = e.length, a = new Array(s);
      let c = 0;
      for (let l = 0; l < s; l++) {
        const d = l;
        t(e[d]).next((p) => {
          a[d] = p, ++c, c === s && r(a);
        }, (p) => i(p));
      }
    });
  }
  /**
   * An alternative to recursive PersistencePromise calls, that avoids
   * potential memory problems from unbounded chains of promises.
   *
   * The `action` will be called repeatedly while `condition` is true.
   */
  static doWhile(e, t) {
    return new S((r, i) => {
      const s = () => {
        e() === !0 ? t().next(() => {
          s();
        }, i) : r();
      };
      s();
    });
  }
}
function L_(n) {
  const e = n.match(/Android ([\d.]+)/i), t = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
  return Number(t);
}
function Er(n) {
  return n.name === "IndexedDbTransactionError";
}
/**
 * @license
 * Copyright 2018 Google LLC
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
class yo {
  constructor(e, t) {
    this.previousValue = e, t && (t.sequenceNumberHandler = (r) => this.ie(r), this.se = (r) => t.writeSequenceNumber(r));
  }
  ie(e) {
    return this.previousValue = Math.max(e, this.previousValue), this.previousValue;
  }
  next() {
    const e = ++this.previousValue;
    return this.se && this.se(e), e;
  }
}
yo.oe = -1;
function ki(n) {
  return n == null;
}
function pi(n) {
  return n === 0 && 1 / n == -1 / 0;
}
function M_(n) {
  return typeof n == "number" && Number.isInteger(n) && !pi(n) && n <= Number.MAX_SAFE_INTEGER && n >= Number.MIN_SAFE_INTEGER;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function Oc(n) {
  let e = 0;
  for (const t in n) Object.prototype.hasOwnProperty.call(n, t) && e++;
  return e;
}
function In(n, e) {
  for (const t in n) Object.prototype.hasOwnProperty.call(n, t) && e(t, n[t]);
}
function Dl(n) {
  for (const e in n) if (Object.prototype.hasOwnProperty.call(n, e)) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class ee {
  constructor(e, t) {
    this.comparator = e, this.root = t || fe.EMPTY;
  }
  // Returns a copy of the map, with the specified key/value added or replaced.
  insert(e, t) {
    return new ee(this.comparator, this.root.insert(e, t, this.comparator).copy(null, null, fe.BLACK, null, null));
  }
  // Returns a copy of the map, with the specified key removed.
  remove(e) {
    return new ee(this.comparator, this.root.remove(e, this.comparator).copy(null, null, fe.BLACK, null, null));
  }
  // Returns the value of the node with the given key, or null.
  get(e) {
    let t = this.root;
    for (; !t.isEmpty(); ) {
      const r = this.comparator(e, t.key);
      if (r === 0) return t.value;
      r < 0 ? t = t.left : r > 0 && (t = t.right);
    }
    return null;
  }
  // Returns the index of the element in this sorted map, or -1 if it doesn't
  // exist.
  indexOf(e) {
    let t = 0, r = this.root;
    for (; !r.isEmpty(); ) {
      const i = this.comparator(e, r.key);
      if (i === 0) return t + r.left.size;
      i < 0 ? r = r.left : (
        // Count all nodes left of the node plus the node itself
        (t += r.left.size + 1, r = r.right)
      );
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  // Returns the total number of nodes in the map.
  get size() {
    return this.root.size;
  }
  // Returns the minimum key in the map.
  minKey() {
    return this.root.minKey();
  }
  // Returns the maximum key in the map.
  maxKey() {
    return this.root.maxKey();
  }
  // Traverses the map in key order and calls the specified action function
  // for each key/value pair. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  inorderTraversal(e) {
    return this.root.inorderTraversal(e);
  }
  forEach(e) {
    this.inorderTraversal((t, r) => (e(t, r), !1));
  }
  toString() {
    const e = [];
    return this.inorderTraversal((t, r) => (e.push(`${t}:${r}`), !1)), `{${e.join(", ")}}`;
  }
  // Traverses the map in reverse key order and calls the specified action
  // function for each key/value pair. If action returns true, traversal is
  // aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  reverseTraversal(e) {
    return this.root.reverseTraversal(e);
  }
  // Returns an iterator over the SortedMap.
  getIterator() {
    return new Kr(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(e) {
    return new Kr(this.root, e, this.comparator, !1);
  }
  getReverseIterator() {
    return new Kr(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(e) {
    return new Kr(this.root, e, this.comparator, !0);
  }
}
class Kr {
  constructor(e, t, r, i) {
    this.isReverse = i, this.nodeStack = [];
    let s = 1;
    for (; !e.isEmpty(); ) if (s = t ? r(e.key, t) : 1, // flip the comparison if we're going in reverse
    t && i && (s *= -1), s < 0)
      e = this.isReverse ? e.left : e.right;
    else {
      if (s === 0) {
        this.nodeStack.push(e);
        break;
      }
      this.nodeStack.push(e), e = this.isReverse ? e.right : e.left;
    }
  }
  getNext() {
    let e = this.nodeStack.pop();
    const t = {
      key: e.key,
      value: e.value
    };
    if (this.isReverse) for (e = e.left; !e.isEmpty(); ) this.nodeStack.push(e), e = e.right;
    else for (e = e.right; !e.isEmpty(); ) this.nodeStack.push(e), e = e.left;
    return t;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (this.nodeStack.length === 0) return null;
    const e = this.nodeStack[this.nodeStack.length - 1];
    return {
      key: e.key,
      value: e.value
    };
  }
}
class fe {
  constructor(e, t, r, i, s) {
    this.key = e, this.value = t, this.color = r ?? fe.RED, this.left = i ?? fe.EMPTY, this.right = s ?? fe.EMPTY, this.size = this.left.size + 1 + this.right.size;
  }
  // Returns a copy of the current node, optionally replacing pieces of it.
  copy(e, t, r, i, s) {
    return new fe(e ?? this.key, t ?? this.value, r ?? this.color, i ?? this.left, s ?? this.right);
  }
  isEmpty() {
    return !1;
  }
  // Traverses the tree in key order and calls the specified action function
  // for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  inorderTraversal(e) {
    return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e);
  }
  // Traverses the tree in reverse key order and calls the specified action
  // function for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  reverseTraversal(e) {
    return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e);
  }
  // Returns the minimum node in the tree.
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  // Returns the maximum key in the tree.
  minKey() {
    return this.min().key;
  }
  // Returns the maximum key in the tree.
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  // Returns new tree, with the key/value added.
  insert(e, t, r) {
    let i = this;
    const s = r(e, i.key);
    return i = s < 0 ? i.copy(null, null, null, i.left.insert(e, t, r), null) : s === 0 ? i.copy(null, t, null, null, null) : i.copy(null, null, null, null, i.right.insert(e, t, r)), i.fixUp();
  }
  removeMin() {
    if (this.left.isEmpty()) return fe.EMPTY;
    let e = this;
    return e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()), e = e.copy(null, null, null, e.left.removeMin(), null), e.fixUp();
  }
  // Returns new tree, with the specified item removed.
  remove(e, t) {
    let r, i = this;
    if (t(e, i.key) < 0) i.left.isEmpty() || i.left.isRed() || i.left.left.isRed() || (i = i.moveRedLeft()), i = i.copy(null, null, null, i.left.remove(e, t), null);
    else {
      if (i.left.isRed() && (i = i.rotateRight()), i.right.isEmpty() || i.right.isRed() || i.right.left.isRed() || (i = i.moveRedRight()), t(e, i.key) === 0) {
        if (i.right.isEmpty()) return fe.EMPTY;
        r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.removeMin());
      }
      i = i.copy(null, null, null, null, i.right.remove(e, t));
    }
    return i.fixUp();
  }
  isRed() {
    return this.color;
  }
  // Returns new tree after performing any needed rotations.
  fixUp() {
    let e = this;
    return e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()), e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()), e.left.isRed() && e.right.isRed() && (e = e.colorFlip()), e;
  }
  moveRedLeft() {
    let e = this.colorFlip();
    return e.right.left.isRed() && (e = e.copy(null, null, null, null, e.right.rotateRight()), e = e.rotateLeft(), e = e.colorFlip()), e;
  }
  moveRedRight() {
    let e = this.colorFlip();
    return e.left.left.isRed() && (e = e.rotateRight(), e = e.colorFlip()), e;
  }
  rotateLeft() {
    const e = this.copy(null, null, fe.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  rotateRight() {
    const e = this.copy(null, null, fe.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }
  colorFlip() {
    const e = this.left.copy(null, null, !this.left.color, null, null), t = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e, t);
  }
  // For testing.
  checkMaxDepth() {
    const e = this.check();
    return Math.pow(2, e) <= this.size + 1;
  }
  // In a balanced RB tree, the black-depth (number of black nodes) from root to
  // leaves is equal on both sides.  This function verifies that or asserts.
  check() {
    if (this.isRed() && this.left.isRed() || this.right.isRed()) throw x();
    const e = this.left.check();
    if (e !== this.right.check()) throw x();
    return e + (this.isRed() ? 0 : 1);
  }
}
fe.EMPTY = null, fe.RED = !0, fe.BLACK = !1;
fe.EMPTY = new // Represents an empty node (a leaf node in the Red-Black Tree).
class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw x();
  }
  get value() {
    throw x();
  }
  get color() {
    throw x();
  }
  get left() {
    throw x();
  }
  get right() {
    throw x();
  }
  // Returns a copy of the current node.
  copy(e, t, r, i, s) {
    return this;
  }
  // Returns a copy of the tree, with the specified key/value added.
  insert(e, t, r) {
    return new fe(e, t);
  }
  // Returns a copy of the tree, with the specified key removed.
  remove(e, t) {
    return this;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(e) {
    return !1;
  }
  reverseTraversal(e) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return !1;
  }
  // For testing.
  checkMaxDepth() {
    return !0;
  }
  check() {
    return 0;
  }
}();
/**
 * @license
 * Copyright 2017 Google LLC
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
class me {
  constructor(e) {
    this.comparator = e, this.data = new ee(this.comparator);
  }
  has(e) {
    return this.data.get(e) !== null;
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(e) {
    return this.data.indexOf(e);
  }
  /** Iterates elements in order defined by "comparator" */
  forEach(e) {
    this.data.inorderTraversal((t, r) => (e(t), !1));
  }
  /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */
  forEachInRange(e, t) {
    const r = this.data.getIteratorFrom(e[0]);
    for (; r.hasNext(); ) {
      const i = r.getNext();
      if (this.comparator(i.key, e[1]) >= 0) return;
      t(i.key);
    }
  }
  /**
   * Iterates over `elem`s such that: start &lt;= elem until false is returned.
   */
  forEachWhile(e, t) {
    let r;
    for (r = t !== void 0 ? this.data.getIteratorFrom(t) : this.data.getIterator(); r.hasNext(); )
      if (!e(r.getNext().key)) return;
  }
  /** Finds the least element greater than or equal to `elem`. */
  firstAfterOrEqual(e) {
    const t = this.data.getIteratorFrom(e);
    return t.hasNext() ? t.getNext().key : null;
  }
  getIterator() {
    return new Vc(this.data.getIterator());
  }
  getIteratorFrom(e) {
    return new Vc(this.data.getIteratorFrom(e));
  }
  /** Inserts or updates an element */
  add(e) {
    return this.copy(this.data.remove(e).insert(e, !0));
  }
  /** Deletes an element */
  delete(e) {
    return this.has(e) ? this.copy(this.data.remove(e)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(e) {
    let t = this;
    return t.size < e.size && (t = e, e = this), e.forEach((r) => {
      t = t.add(r);
    }), t;
  }
  isEqual(e) {
    if (!(e instanceof me) || this.size !== e.size) return !1;
    const t = this.data.getIterator(), r = e.data.getIterator();
    for (; t.hasNext(); ) {
      const i = t.getNext().key, s = r.getNext().key;
      if (this.comparator(i, s) !== 0) return !1;
    }
    return !0;
  }
  toArray() {
    const e = [];
    return this.forEach((t) => {
      e.push(t);
    }), e;
  }
  toString() {
    const e = [];
    return this.forEach((t) => e.push(t)), "SortedSet(" + e.toString() + ")";
  }
  copy(e) {
    const t = new me(this.comparator);
    return t.data = e, t;
  }
}
class Vc {
  constructor(e) {
    this.iter = e;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class je {
  constructor(e) {
    this.fields = e, // TODO(dimond): validation of FieldMask
    // Sort the field mask to support `FieldMask.isEqual()` and assert below.
    e.sort(pe.comparator);
  }
  static empty() {
    return new je([]);
  }
  /**
   * Returns a new FieldMask object that is the result of adding all the given
   * fields paths to this field mask.
   */
  unionWith(e) {
    let t = new me(pe.comparator);
    for (const r of this.fields) t = t.add(r);
    for (const r of e) t = t.add(r);
    return new je(t.toArray());
  }
  /**
   * Verifies that `fieldPath` is included by at least one field in this field
   * mask.
   *
   * This is an O(n) operation, where `n` is the size of the field mask.
   */
  covers(e) {
    for (const t of this.fields) if (t.isPrefixOf(e)) return !0;
    return !1;
  }
  isEqual(e) {
    return dn(this.fields, e.fields, (t, r) => t.isEqual(r));
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
class Nl extends Error {
  constructor() {
    super(...arguments), this.name = "Base64DecodeError";
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class _e {
  constructor(e) {
    this.binaryString = e;
  }
  static fromBase64String(e) {
    const t = function(i) {
      try {
        return atob(i);
      } catch (s) {
        throw typeof DOMException < "u" && s instanceof DOMException ? new Nl("Invalid base64 string: " + s) : s;
      }
    }(e);
    return new _e(t);
  }
  static fromUint8Array(e) {
    const t = (
      /**
      * Helper function to convert an Uint8array to a binary string.
      */
      function(i) {
        let s = "";
        for (let a = 0; a < i.length; ++a) s += String.fromCharCode(i[a]);
        return s;
      }(e)
    );
    return new _e(t);
  }
  [Symbol.iterator]() {
    let e = 0;
    return {
      next: () => e < this.binaryString.length ? {
        value: this.binaryString.charCodeAt(e++),
        done: !1
      } : {
        value: void 0,
        done: !0
      }
    };
  }
  toBase64() {
    return function(t) {
      return btoa(t);
    }(this.binaryString);
  }
  toUint8Array() {
    return function(t) {
      const r = new Uint8Array(t.length);
      for (let i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
      return r;
    }(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(e) {
    return G(this.binaryString, e.binaryString);
  }
  isEqual(e) {
    return this.binaryString === e.binaryString;
  }
}
_e.EMPTY_BYTE_STRING = new _e("");
const x_ = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function At(n) {
  if (Y(!!n), typeof n == "string") {
    let e = 0;
    const t = x_.exec(n);
    if (Y(!!t), t[1]) {
      let i = t[1];
      i = (i + "000000000").substr(0, 9), e = Number(i);
    }
    const r = new Date(n);
    return {
      seconds: Math.floor(r.getTime() / 1e3),
      nanos: e
    };
  }
  return {
    seconds: ae(n.seconds),
    nanos: ae(n.nanos)
  };
}
function ae(n) {
  return typeof n == "number" ? n : typeof n == "string" ? Number(n) : 0;
}
function qt(n) {
  return typeof n == "string" ? _e.fromBase64String(n) : _e.fromUint8Array(n);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function vo(n) {
  var e, t;
  return ((t = (((e = n == null ? void 0 : n.mapValue) === null || e === void 0 ? void 0 : e.fields) || {}).__type__) === null || t === void 0 ? void 0 : t.stringValue) === "server_timestamp";
}
function Eo(n) {
  const e = n.mapValue.fields.__previous_value__;
  return vo(e) ? Eo(e) : e;
}
function cr(n) {
  const e = At(n.mapValue.fields.__local_write_time__.timestampValue);
  return new ue(e.seconds, e.nanos);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class U_ {
  /**
   * Constructs a DatabaseInfo using the provided host, databaseId and
   * persistenceKey.
   *
   * @param databaseId - The database to use.
   * @param appId - The Firebase App Id.
   * @param persistenceKey - A unique identifier for this Firestore's local
   * storage (used in conjunction with the databaseId).
   * @param host - The Firestore backend host to connect to.
   * @param ssl - Whether to use SSL when connecting.
   * @param forceLongPolling - Whether to use the forceLongPolling option
   * when using WebChannel as the network transport.
   * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
   * option when using WebChannel as the network transport.
   * @param longPollingOptions Options that configure long-polling.
   * @param useFetchStreams Whether to use the Fetch API instead of
   * XMLHTTPRequest
   */
  constructor(e, t, r, i, s, a, c, l, d) {
    this.databaseId = e, this.appId = t, this.persistenceKey = r, this.host = i, this.ssl = s, this.forceLongPolling = a, this.autoDetectLongPolling = c, this.longPollingOptions = l, this.useFetchStreams = d;
  }
}
class ur {
  constructor(e, t) {
    this.projectId = e, this.database = t || "(default)";
  }
  static empty() {
    return new ur("", "");
  }
  get isDefaultDatabase() {
    return this.database === "(default)";
  }
  isEqual(e) {
    return e instanceof ur && e.projectId === this.projectId && e.database === this.database;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const Gr = {
  mapValue: {
    fields: {
      __type__: {
        stringValue: "__max__"
      }
    }
  }
};
function zt(n) {
  return "nullValue" in n ? 0 : "booleanValue" in n ? 1 : "integerValue" in n || "doubleValue" in n ? 2 : "timestampValue" in n ? 3 : "stringValue" in n ? 5 : "bytesValue" in n ? 6 : "referenceValue" in n ? 7 : "geoPointValue" in n ? 8 : "arrayValue" in n ? 9 : "mapValue" in n ? vo(n) ? 4 : F_(n) ? 9007199254740991 : 10 : x();
}
function We(n, e) {
  if (n === e) return !0;
  const t = zt(n);
  if (t !== zt(e)) return !1;
  switch (t) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return n.booleanValue === e.booleanValue;
    case 4:
      return cr(n).isEqual(cr(e));
    case 3:
      return function(i, s) {
        if (typeof i.timestampValue == "string" && typeof s.timestampValue == "string" && i.timestampValue.length === s.timestampValue.length)
          return i.timestampValue === s.timestampValue;
        const a = At(i.timestampValue), c = At(s.timestampValue);
        return a.seconds === c.seconds && a.nanos === c.nanos;
      }(n, e);
    case 5:
      return n.stringValue === e.stringValue;
    case 6:
      return function(i, s) {
        return qt(i.bytesValue).isEqual(qt(s.bytesValue));
      }(n, e);
    case 7:
      return n.referenceValue === e.referenceValue;
    case 8:
      return function(i, s) {
        return ae(i.geoPointValue.latitude) === ae(s.geoPointValue.latitude) && ae(i.geoPointValue.longitude) === ae(s.geoPointValue.longitude);
      }(n, e);
    case 2:
      return function(i, s) {
        if ("integerValue" in i && "integerValue" in s) return ae(i.integerValue) === ae(s.integerValue);
        if ("doubleValue" in i && "doubleValue" in s) {
          const a = ae(i.doubleValue), c = ae(s.doubleValue);
          return a === c ? pi(a) === pi(c) : isNaN(a) && isNaN(c);
        }
        return !1;
      }(n, e);
    case 9:
      return dn(n.arrayValue.values || [], e.arrayValue.values || [], We);
    case 10:
      return function(i, s) {
        const a = i.mapValue.fields || {}, c = s.mapValue.fields || {};
        if (Oc(a) !== Oc(c)) return !1;
        for (const l in a) if (a.hasOwnProperty(l) && (c[l] === void 0 || !We(a[l], c[l]))) return !1;
        return !0;
      }(n, e);
    default:
      return x();
  }
}
function lr(n, e) {
  return (n.values || []).find((t) => We(t, e)) !== void 0;
}
function fn(n, e) {
  if (n === e) return 0;
  const t = zt(n), r = zt(e);
  if (t !== r) return G(t, r);
  switch (t) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return G(n.booleanValue, e.booleanValue);
    case 2:
      return function(s, a) {
        const c = ae(s.integerValue || s.doubleValue), l = ae(a.integerValue || a.doubleValue);
        return c < l ? -1 : c > l ? 1 : c === l ? 0 : (
          // one or both are NaN.
          isNaN(c) ? isNaN(l) ? 0 : -1 : 1
        );
      }(n, e);
    case 3:
      return Lc(n.timestampValue, e.timestampValue);
    case 4:
      return Lc(cr(n), cr(e));
    case 5:
      return G(n.stringValue, e.stringValue);
    case 6:
      return function(s, a) {
        const c = qt(s), l = qt(a);
        return c.compareTo(l);
      }(n.bytesValue, e.bytesValue);
    case 7:
      return function(s, a) {
        const c = s.split("/"), l = a.split("/");
        for (let d = 0; d < c.length && d < l.length; d++) {
          const p = G(c[d], l[d]);
          if (p !== 0) return p;
        }
        return G(c.length, l.length);
      }(n.referenceValue, e.referenceValue);
    case 8:
      return function(s, a) {
        const c = G(ae(s.latitude), ae(a.latitude));
        return c !== 0 ? c : G(ae(s.longitude), ae(a.longitude));
      }(n.geoPointValue, e.geoPointValue);
    case 9:
      return function(s, a) {
        const c = s.values || [], l = a.values || [];
        for (let d = 0; d < c.length && d < l.length; ++d) {
          const p = fn(c[d], l[d]);
          if (p) return p;
        }
        return G(c.length, l.length);
      }(n.arrayValue, e.arrayValue);
    case 10:
      return function(s, a) {
        if (s === Gr.mapValue && a === Gr.mapValue) return 0;
        if (s === Gr.mapValue) return 1;
        if (a === Gr.mapValue) return -1;
        const c = s.fields || {}, l = Object.keys(c), d = a.fields || {}, p = Object.keys(d);
        l.sort(), p.sort();
        for (let y = 0; y < l.length && y < p.length; ++y) {
          const A = G(l[y], p[y]);
          if (A !== 0) return A;
          const b = fn(c[l[y]], d[p[y]]);
          if (b !== 0) return b;
        }
        return G(l.length, p.length);
      }(n.mapValue, e.mapValue);
    default:
      throw x();
  }
}
function Lc(n, e) {
  if (typeof n == "string" && typeof e == "string" && n.length === e.length) return G(n, e);
  const t = At(n), r = At(e), i = G(t.seconds, r.seconds);
  return i !== 0 ? i : G(t.nanos, r.nanos);
}
function pn(n) {
  return Bs(n);
}
function Bs(n) {
  return "nullValue" in n ? "null" : "booleanValue" in n ? "" + n.booleanValue : "integerValue" in n ? "" + n.integerValue : "doubleValue" in n ? "" + n.doubleValue : "timestampValue" in n ? function(t) {
    const r = At(t);
    return `time(${r.seconds},${r.nanos})`;
  }(n.timestampValue) : "stringValue" in n ? n.stringValue : "bytesValue" in n ? function(t) {
    return qt(t).toBase64();
  }(n.bytesValue) : "referenceValue" in n ? function(t) {
    return M.fromName(t).toString();
  }(n.referenceValue) : "geoPointValue" in n ? function(t) {
    return `geo(${t.latitude},${t.longitude})`;
  }(n.geoPointValue) : "arrayValue" in n ? function(t) {
    let r = "[", i = !0;
    for (const s of t.values || []) i ? i = !1 : r += ",", r += Bs(s);
    return r + "]";
  }(n.arrayValue) : "mapValue" in n ? function(t) {
    const r = Object.keys(t.fields || {}).sort();
    let i = "{", s = !0;
    for (const a of r) s ? s = !1 : i += ",", i += `${a}:${Bs(t.fields[a])}`;
    return i + "}";
  }(n.mapValue) : x();
}
function js(n) {
  return !!n && "integerValue" in n;
}
function Io(n) {
  return !!n && "arrayValue" in n;
}
function Mc(n) {
  return !!n && "nullValue" in n;
}
function xc(n) {
  return !!n && "doubleValue" in n && isNaN(Number(n.doubleValue));
}
function ri(n) {
  return !!n && "mapValue" in n;
}
function Jn(n) {
  if (n.geoPointValue) return {
    geoPointValue: Object.assign({}, n.geoPointValue)
  };
  if (n.timestampValue && typeof n.timestampValue == "object") return {
    timestampValue: Object.assign({}, n.timestampValue)
  };
  if (n.mapValue) {
    const e = {
      mapValue: {
        fields: {}
      }
    };
    return In(n.mapValue.fields, (t, r) => e.mapValue.fields[t] = Jn(r)), e;
  }
  if (n.arrayValue) {
    const e = {
      arrayValue: {
        values: []
      }
    };
    for (let t = 0; t < (n.arrayValue.values || []).length; ++t) e.arrayValue.values[t] = Jn(n.arrayValue.values[t]);
    return e;
  }
  return Object.assign({}, n);
}
function F_(n) {
  return (((n.mapValue || {}).fields || {}).__type__ || {}).stringValue === "__max__";
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Le {
  constructor(e) {
    this.value = e;
  }
  static empty() {
    return new Le({
      mapValue: {}
    });
  }
  /**
   * Returns the value at the given path or null.
   *
   * @param path - the path to search
   * @returns The value at the path or null if the path is not set.
   */
  field(e) {
    if (e.isEmpty()) return this.value;
    {
      let t = this.value;
      for (let r = 0; r < e.length - 1; ++r) if (t = (t.mapValue.fields || {})[e.get(r)], !ri(t)) return null;
      return t = (t.mapValue.fields || {})[e.lastSegment()], t || null;
    }
  }
  /**
   * Sets the field to the provided value.
   *
   * @param path - The field path to set.
   * @param value - The value to set.
   */
  set(e, t) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = Jn(t);
  }
  /**
   * Sets the provided fields to the provided values.
   *
   * @param data - A map of fields to values (or null for deletes).
   */
  setAll(e) {
    let t = pe.emptyPath(), r = {}, i = [];
    e.forEach((a, c) => {
      if (!t.isImmediateParentOf(c)) {
        const l = this.getFieldsMap(t);
        this.applyChanges(l, r, i), r = {}, i = [], t = c.popLast();
      }
      a ? r[c.lastSegment()] = Jn(a) : i.push(c.lastSegment());
    });
    const s = this.getFieldsMap(t);
    this.applyChanges(s, r, i);
  }
  /**
   * Removes the field at the specified path. If there is no field at the
   * specified path, nothing is changed.
   *
   * @param path - The field path to remove.
   */
  delete(e) {
    const t = this.field(e.popLast());
    ri(t) && t.mapValue.fields && delete t.mapValue.fields[e.lastSegment()];
  }
  isEqual(e) {
    return We(this.value, e.value);
  }
  /**
   * Returns the map that contains the leaf element of `path`. If the parent
   * entry does not yet exist, or if it is not a map, a new map will be created.
   */
  getFieldsMap(e) {
    let t = this.value;
    t.mapValue.fields || (t.mapValue = {
      fields: {}
    });
    for (let r = 0; r < e.length; ++r) {
      let i = t.mapValue.fields[e.get(r)];
      ri(i) && i.mapValue.fields || (i = {
        mapValue: {
          fields: {}
        }
      }, t.mapValue.fields[e.get(r)] = i), t = i;
    }
    return t.mapValue.fields;
  }
  /**
   * Modifies `fieldsMap` by adding, replacing or deleting the specified
   * entries.
   */
  applyChanges(e, t, r) {
    In(t, (i, s) => e[i] = s);
    for (const i of r) delete e[i];
  }
  clone() {
    return new Le(Jn(this.value));
  }
}
function Ol(n) {
  const e = [];
  return In(n.fields, (t, r) => {
    const i = new pe([t]);
    if (ri(r)) {
      const s = Ol(r.mapValue).fields;
      if (s.length === 0)
        e.push(i);
      else
        for (const a of s) e.push(i.child(a));
    } else
      e.push(i);
  }), new je(e);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Ae {
  constructor(e, t, r, i, s, a, c) {
    this.key = e, this.documentType = t, this.version = r, this.readTime = i, this.createTime = s, this.data = a, this.documentState = c;
  }
  /**
   * Creates a document with no known version or data, but which can serve as
   * base document for mutations.
   */
  static newInvalidDocument(e) {
    return new Ae(
      e,
      0,
      /* version */
      U.min(),
      /* readTime */
      U.min(),
      /* createTime */
      U.min(),
      Le.empty(),
      0
      /* DocumentState.SYNCED */
    );
  }
  /**
   * Creates a new document that is known to exist with the given data at the
   * given version.
   */
  static newFoundDocument(e, t, r, i) {
    return new Ae(
      e,
      1,
      /* version */
      t,
      /* readTime */
      U.min(),
      /* createTime */
      r,
      i,
      0
      /* DocumentState.SYNCED */
    );
  }
  /** Creates a new document that is known to not exist at the given version. */
  static newNoDocument(e, t) {
    return new Ae(
      e,
      2,
      /* version */
      t,
      /* readTime */
      U.min(),
      /* createTime */
      U.min(),
      Le.empty(),
      0
      /* DocumentState.SYNCED */
    );
  }
  /**
   * Creates a new document that is known to exist at the given version but
   * whose data is not known (e.g. a document that was updated without a known
   * base document).
   */
  static newUnknownDocument(e, t) {
    return new Ae(
      e,
      3,
      /* version */
      t,
      /* readTime */
      U.min(),
      /* createTime */
      U.min(),
      Le.empty(),
      2
      /* DocumentState.HAS_COMMITTED_MUTATIONS */
    );
  }
  /**
   * Changes the document type to indicate that it exists and that its version
   * and data are known.
   */
  convertToFoundDocument(e, t) {
    return !this.createTime.isEqual(U.min()) || this.documentType !== 2 && this.documentType !== 0 || (this.createTime = e), this.version = e, this.documentType = 1, this.data = t, this.documentState = 0, this;
  }
  /**
   * Changes the document type to indicate that it doesn't exist at the given
   * version.
   */
  convertToNoDocument(e) {
    return this.version = e, this.documentType = 2, this.data = Le.empty(), this.documentState = 0, this;
  }
  /**
   * Changes the document type to indicate that it exists at a given version but
   * that its data is not known (e.g. a document that was updated without a known
   * base document).
   */
  convertToUnknownDocument(e) {
    return this.version = e, this.documentType = 3, this.data = Le.empty(), this.documentState = 2, this;
  }
  setHasCommittedMutations() {
    return this.documentState = 2, this;
  }
  setHasLocalMutations() {
    return this.documentState = 1, this.version = U.min(), this;
  }
  setReadTime(e) {
    return this.readTime = e, this;
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(e) {
    return e instanceof Ae && this.key.isEqual(e.key) && this.version.isEqual(e.version) && this.documentType === e.documentType && this.documentState === e.documentState && this.data.isEqual(e.data);
  }
  mutableCopy() {
    return new Ae(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState);
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
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
class mi {
  constructor(e, t) {
    this.position = e, this.inclusive = t;
  }
}
function Uc(n, e, t) {
  let r = 0;
  for (let i = 0; i < n.position.length; i++) {
    const s = e[i], a = n.position[i];
    if (s.field.isKeyField() ? r = M.comparator(M.fromName(a.referenceValue), t.key) : r = fn(a, t.data.field(s.field)), s.dir === "desc" && (r *= -1), r !== 0) break;
  }
  return r;
}
function Fc(n, e) {
  if (n === null) return e === null;
  if (e === null || n.inclusive !== e.inclusive || n.position.length !== e.position.length) return !1;
  for (let t = 0; t < n.position.length; t++)
    if (!We(n.position[t], e.position[t])) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2022 Google LLC
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
class gi {
  constructor(e, t = "asc") {
    this.field = e, this.dir = t;
  }
}
function B_(n, e) {
  return n.dir === e.dir && n.field.isEqual(e.field);
}
/**
 * @license
 * Copyright 2022 Google LLC
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
class Vl {
}
class ce extends Vl {
  constructor(e, t, r) {
    super(), this.field = e, this.op = t, this.value = r;
  }
  /**
   * Creates a filter based on the provided arguments.
   */
  static create(e, t, r) {
    return e.isKeyField() ? t === "in" || t === "not-in" ? this.createKeyFieldInFilter(e, t, r) : new $_(e, t, r) : t === "array-contains" ? new H_(e, r) : t === "in" ? new W_(e, r) : t === "not-in" ? new K_(e, r) : t === "array-contains-any" ? new G_(e, r) : new ce(e, t, r);
  }
  static createKeyFieldInFilter(e, t, r) {
    return t === "in" ? new q_(e, r) : new z_(e, r);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return this.op === "!=" ? t !== null && this.matchesComparison(fn(t, this.value)) : t !== null && zt(this.value) === zt(t) && this.matchesComparison(fn(t, this.value));
  }
  matchesComparison(e) {
    switch (this.op) {
      case "<":
        return e < 0;
      case "<=":
        return e <= 0;
      case "==":
        return e === 0;
      case "!=":
        return e !== 0;
      case ">":
        return e > 0;
      case ">=":
        return e >= 0;
      default:
        return x();
    }
  }
  isInequality() {
    return [
      "<",
      "<=",
      ">",
      ">=",
      "!=",
      "not-in"
      /* Operator.NOT_IN */
    ].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
}
class Ke extends Vl {
  constructor(e, t) {
    super(), this.filters = e, this.op = t, this.ae = null;
  }
  /**
   * Creates a filter based on the provided arguments.
   */
  static create(e, t) {
    return new Ke(e, t);
  }
  matches(e) {
    return Ll(this) ? this.filters.find((t) => !t.matches(e)) === void 0 : this.filters.find((t) => t.matches(e)) !== void 0;
  }
  getFlattenedFilters() {
    return this.ae !== null || (this.ae = this.filters.reduce((e, t) => e.concat(t.getFlattenedFilters()), [])), this.ae;
  }
  // Returns a mutable copy of `this.filters`
  getFilters() {
    return Object.assign([], this.filters);
  }
}
function Ll(n) {
  return n.op === "and";
}
function Ml(n) {
  return j_(n) && Ll(n);
}
function j_(n) {
  for (const e of n.filters) if (e instanceof Ke) return !1;
  return !0;
}
function $s(n) {
  if (n instanceof ce)
    return n.field.canonicalString() + n.op.toString() + pn(n.value);
  if (Ml(n))
    return n.filters.map((e) => $s(e)).join(",");
  {
    const e = n.filters.map((t) => $s(t)).join(",");
    return `${n.op}(${e})`;
  }
}
function xl(n, e) {
  return n instanceof ce ? function(r, i) {
    return i instanceof ce && r.op === i.op && r.field.isEqual(i.field) && We(r.value, i.value);
  }(n, e) : n instanceof Ke ? function(r, i) {
    return i instanceof Ke && r.op === i.op && r.filters.length === i.filters.length ? r.filters.reduce((s, a, c) => s && xl(a, i.filters[c]), !0) : !1;
  }(n, e) : void x();
}
function Ul(n) {
  return n instanceof ce ? function(t) {
    return `${t.field.canonicalString()} ${t.op} ${pn(t.value)}`;
  }(n) : n instanceof Ke ? function(t) {
    return t.op.toString() + " {" + t.getFilters().map(Ul).join(" ,") + "}";
  }(n) : "Filter";
}
class $_ extends ce {
  constructor(e, t, r) {
    super(e, t, r), this.key = M.fromName(r.referenceValue);
  }
  matches(e) {
    const t = M.comparator(e.key, this.key);
    return this.matchesComparison(t);
  }
}
class q_ extends ce {
  constructor(e, t) {
    super(e, "in", t), this.keys = Fl("in", t);
  }
  matches(e) {
    return this.keys.some((t) => t.isEqual(e.key));
  }
}
class z_ extends ce {
  constructor(e, t) {
    super(e, "not-in", t), this.keys = Fl("not-in", t);
  }
  matches(e) {
    return !this.keys.some((t) => t.isEqual(e.key));
  }
}
function Fl(n, e) {
  var t;
  return (((t = e.arrayValue) === null || t === void 0 ? void 0 : t.values) || []).map((r) => M.fromName(r.referenceValue));
}
class H_ extends ce {
  constructor(e, t) {
    super(e, "array-contains", t);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return Io(t) && lr(t.arrayValue, this.value);
  }
}
class W_ extends ce {
  constructor(e, t) {
    super(e, "in", t);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return t !== null && lr(this.value.arrayValue, t);
  }
}
class K_ extends ce {
  constructor(e, t) {
    super(e, "not-in", t);
  }
  matches(e) {
    if (lr(this.value.arrayValue, {
      nullValue: "NULL_VALUE"
    })) return !1;
    const t = e.data.field(this.field);
    return t !== null && !lr(this.value.arrayValue, t);
  }
}
class G_ extends ce {
  constructor(e, t) {
    super(e, "array-contains-any", t);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return !(!Io(t) || !t.arrayValue.values) && t.arrayValue.values.some((r) => lr(this.value.arrayValue, r));
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class Q_ {
  constructor(e, t = null, r = [], i = [], s = null, a = null, c = null) {
    this.path = e, this.collectionGroup = t, this.orderBy = r, this.filters = i, this.limit = s, this.startAt = a, this.endAt = c, this.ue = null;
  }
}
function Bc(n, e = null, t = [], r = [], i = null, s = null, a = null) {
  return new Q_(n, e, t, r, i, s, a);
}
function To(n) {
  const e = F(n);
  if (e.ue === null) {
    let t = e.path.canonicalString();
    e.collectionGroup !== null && (t += "|cg:" + e.collectionGroup), t += "|f:", t += e.filters.map((r) => $s(r)).join(","), t += "|ob:", t += e.orderBy.map((r) => function(s) {
      return s.field.canonicalString() + s.dir;
    }(r)).join(","), ki(e.limit) || (t += "|l:", t += e.limit), e.startAt && (t += "|lb:", t += e.startAt.inclusive ? "b:" : "a:", t += e.startAt.position.map((r) => pn(r)).join(",")), e.endAt && (t += "|ub:", t += e.endAt.inclusive ? "a:" : "b:", t += e.endAt.position.map((r) => pn(r)).join(",")), e.ue = t;
  }
  return e.ue;
}
function wo(n, e) {
  if (n.limit !== e.limit || n.orderBy.length !== e.orderBy.length) return !1;
  for (let t = 0; t < n.orderBy.length; t++) if (!B_(n.orderBy[t], e.orderBy[t])) return !1;
  if (n.filters.length !== e.filters.length) return !1;
  for (let t = 0; t < n.filters.length; t++) if (!xl(n.filters[t], e.filters[t])) return !1;
  return n.collectionGroup === e.collectionGroup && !!n.path.isEqual(e.path) && !!Fc(n.startAt, e.startAt) && Fc(n.endAt, e.endAt);
}
function qs(n) {
  return M.isDocumentKey(n.path) && n.collectionGroup === null && n.filters.length === 0;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Di {
  /**
   * Initializes a Query with a path and optional additional query constraints.
   * Path must currently be empty if this is a collection group query.
   */
  constructor(e, t = null, r = [], i = [], s = null, a = "F", c = null, l = null) {
    this.path = e, this.collectionGroup = t, this.explicitOrderBy = r, this.filters = i, this.limit = s, this.limitType = a, this.startAt = c, this.endAt = l, this.ce = null, // The corresponding `Target` of this `Query` instance, for use with
    // non-aggregate queries.
    this.le = null, // The corresponding `Target` of this `Query` instance, for use with
    // aggregate queries. Unlike targets for non-aggregate queries,
    // aggregate query targets do not contain normalized order-bys, they only
    // contain explicit order-bys.
    this.he = null, this.startAt, this.endAt;
  }
}
function Y_(n, e, t, r, i, s, a, c) {
  return new Di(n, e, t, r, i, s, a, c);
}
function Ao(n) {
  return new Di(n);
}
function jc(n) {
  return n.filters.length === 0 && n.limit === null && n.startAt == null && n.endAt == null && (n.explicitOrderBy.length === 0 || n.explicitOrderBy.length === 1 && n.explicitOrderBy[0].field.isKeyField());
}
function J_(n) {
  return n.collectionGroup !== null;
}
function Xn(n) {
  const e = F(n);
  if (e.ce === null) {
    e.ce = [];
    const t = /* @__PURE__ */ new Set();
    for (const s of e.explicitOrderBy) e.ce.push(s), t.add(s.field.canonicalString());
    const r = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc";
    (function(a) {
      let c = new me(pe.comparator);
      return a.filters.forEach((l) => {
        l.getFlattenedFilters().forEach((d) => {
          d.isInequality() && (c = c.add(d.field));
        });
      }), c;
    })(e).forEach((s) => {
      t.has(s.canonicalString()) || s.isKeyField() || e.ce.push(new gi(s, r));
    }), // Add the document key field to the last if it is not explicitly ordered.
    t.has(pe.keyField().canonicalString()) || e.ce.push(new gi(pe.keyField(), r));
  }
  return e.ce;
}
function ze(n) {
  const e = F(n);
  return e.le || (e.le = X_(e, Xn(n))), e.le;
}
function X_(n, e) {
  if (n.limitType === "F") return Bc(n.path, n.collectionGroup, e, n.filters, n.limit, n.startAt, n.endAt);
  {
    e = e.map((i) => {
      const s = i.dir === "desc" ? "asc" : "desc";
      return new gi(i.field, s);
    });
    const t = n.endAt ? new mi(n.endAt.position, n.endAt.inclusive) : null, r = n.startAt ? new mi(n.startAt.position, n.startAt.inclusive) : null;
    return Bc(n.path, n.collectionGroup, e, n.filters, n.limit, t, r);
  }
}
function zs(n, e, t) {
  return new Di(n.path, n.collectionGroup, n.explicitOrderBy.slice(), n.filters.slice(), e, t, n.startAt, n.endAt);
}
function Ni(n, e) {
  return wo(ze(n), ze(e)) && n.limitType === e.limitType;
}
function Bl(n) {
  return `${To(ze(n))}|lt:${n.limitType}`;
}
function nn(n) {
  return `Query(target=${function(t) {
    let r = t.path.canonicalString();
    return t.collectionGroup !== null && (r += " collectionGroup=" + t.collectionGroup), t.filters.length > 0 && (r += `, filters: [${t.filters.map((i) => Ul(i)).join(", ")}]`), ki(t.limit) || (r += ", limit: " + t.limit), t.orderBy.length > 0 && (r += `, orderBy: [${t.orderBy.map((i) => function(a) {
      return `${a.field.canonicalString()} (${a.dir})`;
    }(i)).join(", ")}]`), t.startAt && (r += ", startAt: ", r += t.startAt.inclusive ? "b:" : "a:", r += t.startAt.position.map((i) => pn(i)).join(",")), t.endAt && (r += ", endAt: ", r += t.endAt.inclusive ? "a:" : "b:", r += t.endAt.position.map((i) => pn(i)).join(",")), `Target(${r})`;
  }(ze(n))}; limitType=${n.limitType})`;
}
function Oi(n, e) {
  return e.isFoundDocument() && function(r, i) {
    const s = i.key.path;
    return r.collectionGroup !== null ? i.key.hasCollectionId(r.collectionGroup) && r.path.isPrefixOf(s) : M.isDocumentKey(r.path) ? r.path.isEqual(s) : r.path.isImmediateParentOf(s);
  }(n, e) && function(r, i) {
    for (const s of Xn(r))
      if (!s.field.isKeyField() && i.data.field(s.field) === null) return !1;
    return !0;
  }(n, e) && function(r, i) {
    for (const s of r.filters) if (!s.matches(i)) return !1;
    return !0;
  }(n, e) && function(r, i) {
    return !(r.startAt && !/**
    * Returns true if a document sorts before a bound using the provided sort
    * order.
    */
    function(a, c, l) {
      const d = Uc(a, c, l);
      return a.inclusive ? d <= 0 : d < 0;
    }(r.startAt, Xn(r), i) || r.endAt && !function(a, c, l) {
      const d = Uc(a, c, l);
      return a.inclusive ? d >= 0 : d > 0;
    }(r.endAt, Xn(r), i));
  }(n, e);
}
function Z_(n) {
  return n.collectionGroup || (n.path.length % 2 == 1 ? n.path.lastSegment() : n.path.get(n.path.length - 2));
}
function jl(n) {
  return (e, t) => {
    let r = !1;
    for (const i of Xn(n)) {
      const s = ey(i, e, t);
      if (s !== 0) return s;
      r = r || i.field.isKeyField();
    }
    return 0;
  };
}
function ey(n, e, t) {
  const r = n.field.isKeyField() ? M.comparator(e.key, t.key) : function(s, a, c) {
    const l = a.data.field(s), d = c.data.field(s);
    return l !== null && d !== null ? fn(l, d) : x();
  }(n.field, e, t);
  switch (n.dir) {
    case "asc":
      return r;
    case "desc":
      return -1 * r;
    default:
      return x();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Tn {
  constructor(e, t) {
    this.mapKeyFn = e, this.equalsFn = t, /**
     * The inner map for a key/value pair. Due to the possibility of collisions we
     * keep a list of entries that we do a linear search through to find an actual
     * match. Note that collisions should be rare, so we still expect near
     * constant time lookups in practice.
     */
    this.inner = {}, /** The number of entries stored in the map */
    this.innerSize = 0;
  }
  /** Get a value for this key, or undefined if it does not exist. */
  get(e) {
    const t = this.mapKeyFn(e), r = this.inner[t];
    if (r !== void 0) {
      for (const [i, s] of r) if (this.equalsFn(i, e)) return s;
    }
  }
  has(e) {
    return this.get(e) !== void 0;
  }
  /** Put this key and value in the map. */
  set(e, t) {
    const r = this.mapKeyFn(e), i = this.inner[r];
    if (i === void 0) return this.inner[r] = [[e, t]], void this.innerSize++;
    for (let s = 0; s < i.length; s++) if (this.equalsFn(i[s][0], e))
      return void (i[s] = [e, t]);
    i.push([e, t]), this.innerSize++;
  }
  /**
   * Remove this key from the map. Returns a boolean if anything was deleted.
   */
  delete(e) {
    const t = this.mapKeyFn(e), r = this.inner[t];
    if (r === void 0) return !1;
    for (let i = 0; i < r.length; i++) if (this.equalsFn(r[i][0], e)) return r.length === 1 ? delete this.inner[t] : r.splice(i, 1), this.innerSize--, !0;
    return !1;
  }
  forEach(e) {
    In(this.inner, (t, r) => {
      for (const [i, s] of r) e(i, s);
    });
  }
  isEmpty() {
    return Dl(this.inner);
  }
  size() {
    return this.innerSize;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
const ty = new ee(M.comparator);
function st() {
  return ty;
}
const $l = new ee(M.comparator);
function Kn(...n) {
  let e = $l;
  for (const t of n) e = e.insert(t.key, t);
  return e;
}
function ql(n) {
  let e = $l;
  return n.forEach((t, r) => e = e.insert(t, r.overlayedDocument)), e;
}
function Lt() {
  return Zn();
}
function zl() {
  return Zn();
}
function Zn() {
  return new Tn((n) => n.toString(), (n, e) => n.isEqual(e));
}
const ny = new ee(M.comparator), ry = new me(M.comparator);
function z(...n) {
  let e = ry;
  for (const t of n) e = e.add(t);
  return e;
}
const iy = new me(G);
function sy() {
  return iy;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function Hl(n, e) {
  if (n.useProto3Json) {
    if (isNaN(e)) return {
      doubleValue: "NaN"
    };
    if (e === 1 / 0) return {
      doubleValue: "Infinity"
    };
    if (e === -1 / 0) return {
      doubleValue: "-Infinity"
    };
  }
  return {
    doubleValue: pi(e) ? "-0" : e
  };
}
function Wl(n) {
  return {
    integerValue: "" + n
  };
}
function oy(n, e) {
  return M_(e) ? Wl(e) : Hl(n, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
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
class Vi {
  constructor() {
    this._ = void 0;
  }
}
function ay(n, e, t) {
  return n instanceof _i ? function(i, s) {
    const a = {
      fields: {
        __type__: {
          stringValue: "server_timestamp"
        },
        __local_write_time__: {
          timestampValue: {
            seconds: i.seconds,
            nanos: i.nanoseconds
          }
        }
      }
    };
    return s && vo(s) && (s = Eo(s)), s && (a.fields.__previous_value__ = s), {
      mapValue: a
    };
  }(t, e) : n instanceof hr ? Gl(n, e) : n instanceof dr ? Ql(n, e) : function(i, s) {
    const a = Kl(i, s), c = $c(a) + $c(i.Pe);
    return js(a) && js(i.Pe) ? Wl(c) : Hl(i.serializer, c);
  }(n, e);
}
function cy(n, e, t) {
  return n instanceof hr ? Gl(n, e) : n instanceof dr ? Ql(n, e) : t;
}
function Kl(n, e) {
  return n instanceof yi ? (
    /** Returns true if `value` is either an IntegerValue or a DoubleValue. */
    function(r) {
      return js(r) || function(s) {
        return !!s && "doubleValue" in s;
      }(r);
    }(e) ? e : {
      integerValue: 0
    }
  ) : null;
}
class _i extends Vi {
}
class hr extends Vi {
  constructor(e) {
    super(), this.elements = e;
  }
}
function Gl(n, e) {
  const t = Yl(e);
  for (const r of n.elements) t.some((i) => We(i, r)) || t.push(r);
  return {
    arrayValue: {
      values: t
    }
  };
}
class dr extends Vi {
  constructor(e) {
    super(), this.elements = e;
  }
}
function Ql(n, e) {
  let t = Yl(e);
  for (const r of n.elements) t = t.filter((i) => !We(i, r));
  return {
    arrayValue: {
      values: t
    }
  };
}
class yi extends Vi {
  constructor(e, t) {
    super(), this.serializer = e, this.Pe = t;
  }
}
function $c(n) {
  return ae(n.integerValue || n.doubleValue);
}
function Yl(n) {
  return Io(n) && n.arrayValue.values ? n.arrayValue.values.slice() : [];
}
function uy(n, e) {
  return n.field.isEqual(e.field) && function(r, i) {
    return r instanceof hr && i instanceof hr || r instanceof dr && i instanceof dr ? dn(r.elements, i.elements, We) : r instanceof yi && i instanceof yi ? We(r.Pe, i.Pe) : r instanceof _i && i instanceof _i;
  }(n.transform, e.transform);
}
class ly {
  constructor(e, t) {
    this.version = e, this.transformResults = t;
  }
}
class nt {
  constructor(e, t) {
    this.updateTime = e, this.exists = t;
  }
  /** Creates a new empty Precondition. */
  static none() {
    return new nt();
  }
  /** Creates a new Precondition with an exists flag. */
  static exists(e) {
    return new nt(void 0, e);
  }
  /** Creates a new Precondition based on a version a document exists at. */
  static updateTime(e) {
    return new nt(e);
  }
  /** Returns whether this Precondition is empty. */
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0;
  }
  isEqual(e) {
    return this.exists === e.exists && (this.updateTime ? !!e.updateTime && this.updateTime.isEqual(e.updateTime) : !e.updateTime);
  }
}
function ii(n, e) {
  return n.updateTime !== void 0 ? e.isFoundDocument() && e.version.isEqual(n.updateTime) : n.exists === void 0 || n.exists === e.isFoundDocument();
}
class Li {
}
function Jl(n, e) {
  if (!n.hasLocalMutations || e && e.fields.length === 0) return null;
  if (e === null) return n.isNoDocument() ? new Zl(n.key, nt.none()) : new Ir(n.key, n.data, nt.none());
  {
    const t = n.data, r = Le.empty();
    let i = new me(pe.comparator);
    for (let s of e.fields) if (!i.has(s)) {
      let a = t.field(s);
      a === null && s.length > 1 && (s = s.popLast(), a = t.field(s)), a === null ? r.delete(s) : r.set(s, a), i = i.add(s);
    }
    return new Yt(n.key, r, new je(i.toArray()), nt.none());
  }
}
function hy(n, e, t) {
  n instanceof Ir ? function(i, s, a) {
    const c = i.value.clone(), l = zc(i.fieldTransforms, s, a.transformResults);
    c.setAll(l), s.convertToFoundDocument(a.version, c).setHasCommittedMutations();
  }(n, e, t) : n instanceof Yt ? function(i, s, a) {
    if (!ii(i.precondition, s))
      return void s.convertToUnknownDocument(a.version);
    const c = zc(i.fieldTransforms, s, a.transformResults), l = s.data;
    l.setAll(Xl(i)), l.setAll(c), s.convertToFoundDocument(a.version, l).setHasCommittedMutations();
  }(n, e, t) : function(i, s, a) {
    s.convertToNoDocument(a.version).setHasCommittedMutations();
  }(0, e, t);
}
function er(n, e, t, r) {
  return n instanceof Ir ? function(s, a, c, l) {
    if (!ii(s.precondition, a))
      return c;
    const d = s.value.clone(), p = Hc(s.fieldTransforms, l, a);
    return d.setAll(p), a.convertToFoundDocument(a.version, d).setHasLocalMutations(), null;
  }(n, e, t, r) : n instanceof Yt ? function(s, a, c, l) {
    if (!ii(s.precondition, a)) return c;
    const d = Hc(s.fieldTransforms, l, a), p = a.data;
    return p.setAll(Xl(s)), p.setAll(d), a.convertToFoundDocument(a.version, p).setHasLocalMutations(), c === null ? null : c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((y) => y.field));
  }(n, e, t, r) : function(s, a, c) {
    return ii(s.precondition, a) ? (a.convertToNoDocument(a.version).setHasLocalMutations(), null) : c;
  }(n, e, t);
}
function dy(n, e) {
  let t = null;
  for (const r of n.fieldTransforms) {
    const i = e.data.field(r.field), s = Kl(r.transform, i || null);
    s != null && (t === null && (t = Le.empty()), t.set(r.field, s));
  }
  return t || null;
}
function qc(n, e) {
  return n.type === e.type && !!n.key.isEqual(e.key) && !!n.precondition.isEqual(e.precondition) && !!function(r, i) {
    return r === void 0 && i === void 0 || !(!r || !i) && dn(r, i, (s, a) => uy(s, a));
  }(n.fieldTransforms, e.fieldTransforms) && (n.type === 0 ? n.value.isEqual(e.value) : n.type !== 1 || n.data.isEqual(e.data) && n.fieldMask.isEqual(e.fieldMask));
}
class Ir extends Li {
  constructor(e, t, r, i = []) {
    super(), this.key = e, this.value = t, this.precondition = r, this.fieldTransforms = i, this.type = 0;
  }
  getFieldMask() {
    return null;
  }
}
class Yt extends Li {
  constructor(e, t, r, i, s = []) {
    super(), this.key = e, this.data = t, this.fieldMask = r, this.precondition = i, this.fieldTransforms = s, this.type = 1;
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
function Xl(n) {
  const e = /* @__PURE__ */ new Map();
  return n.fieldMask.fields.forEach((t) => {
    if (!t.isEmpty()) {
      const r = n.data.field(t);
      e.set(t, r);
    }
  }), e;
}
function zc(n, e, t) {
  const r = /* @__PURE__ */ new Map();
  Y(n.length === t.length);
  for (let i = 0; i < t.length; i++) {
    const s = n[i], a = s.transform, c = e.data.field(s.field);
    r.set(s.field, cy(a, c, t[i]));
  }
  return r;
}
function Hc(n, e, t) {
  const r = /* @__PURE__ */ new Map();
  for (const i of n) {
    const s = i.transform, a = t.data.field(i.field);
    r.set(i.field, ay(s, a, e));
  }
  return r;
}
class Zl extends Li {
  constructor(e, t) {
    super(), this.key = e, this.precondition = t, this.type = 2, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
}
class fy extends Li {
  constructor(e, t) {
    super(), this.key = e, this.precondition = t, this.type = 3, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class py {
  /**
   * @param batchId - The unique ID of this mutation batch.
   * @param localWriteTime - The original write time of this mutation.
   * @param baseMutations - Mutations that are used to populate the base
   * values when this mutation is applied locally. This can be used to locally
   * overwrite values that are persisted in the remote document cache. Base
   * mutations are never sent to the backend.
   * @param mutations - The user-provided mutations in this mutation batch.
   * User-provided mutations are applied both locally and remotely on the
   * backend.
   */
  constructor(e, t, r, i) {
    this.batchId = e, this.localWriteTime = t, this.baseMutations = r, this.mutations = i;
  }
  /**
   * Applies all the mutations in this MutationBatch to the specified document
   * to compute the state of the remote document
   *
   * @param document - The document to apply mutations to.
   * @param batchResult - The result of applying the MutationBatch to the
   * backend.
   */
  applyToRemoteDocument(e, t) {
    const r = t.mutationResults;
    for (let i = 0; i < this.mutations.length; i++) {
      const s = this.mutations[i];
      s.key.isEqual(e.key) && hy(s, e, r[i]);
    }
  }
  /**
   * Computes the local view of a document given all the mutations in this
   * batch.
   *
   * @param document - The document to apply mutations to.
   * @param mutatedFields - Fields that have been updated before applying this mutation batch.
   * @returns A `FieldMask` representing all the fields that are mutated.
   */
  applyToLocalView(e, t) {
    for (const r of this.baseMutations) r.key.isEqual(e.key) && (t = er(r, e, t, this.localWriteTime));
    for (const r of this.mutations) r.key.isEqual(e.key) && (t = er(r, e, t, this.localWriteTime));
    return t;
  }
  /**
   * Computes the local view for all provided documents given the mutations in
   * this batch. Returns a `DocumentKey` to `Mutation` map which can be used to
   * replace all the mutation applications.
   */
  applyToLocalDocumentSet(e, t) {
    const r = zl();
    return this.mutations.forEach((i) => {
      const s = e.get(i.key), a = s.overlayedDocument;
      let c = this.applyToLocalView(a, s.mutatedFields);
      c = t.has(i.key) ? null : c;
      const l = Jl(a, c);
      l !== null && r.set(i.key, l), a.isValidDocument() || a.convertToNoDocument(U.min());
    }), r;
  }
  keys() {
    return this.mutations.reduce((e, t) => e.add(t.key), z());
  }
  isEqual(e) {
    return this.batchId === e.batchId && dn(this.mutations, e.mutations, (t, r) => qc(t, r)) && dn(this.baseMutations, e.baseMutations, (t, r) => qc(t, r));
  }
}
class Ro {
  constructor(e, t, r, i) {
    this.batch = e, this.commitVersion = t, this.mutationResults = r, this.docVersions = i;
  }
  /**
   * Creates a new MutationBatchResult for the given batch and results. There
   * must be one result for each mutation in the batch. This static factory
   * caches a document=&gt;version mapping (docVersions).
   */
  static from(e, t, r) {
    Y(e.mutations.length === r.length);
    let i = /* @__PURE__ */ function() {
      return ny;
    }();
    const s = e.mutations;
    for (let a = 0; a < s.length; a++) i = i.insert(s[a].key, r[a].version);
    return new Ro(e, t, r, i);
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
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
class my {
  constructor(e, t) {
    this.largestBatchId = e, this.mutation = t;
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(e) {
    return e !== null && this.mutation === e.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class gy {
  constructor(e, t) {
    this.count = e, this.unchangedNames = t;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var se, W;
function _y(n) {
  switch (n) {
    default:
      return x();
    case P.CANCELLED:
    case P.UNKNOWN:
    case P.DEADLINE_EXCEEDED:
    case P.RESOURCE_EXHAUSTED:
    case P.INTERNAL:
    case P.UNAVAILABLE:
    case P.UNAUTHENTICATED:
      return !1;
    case P.INVALID_ARGUMENT:
    case P.NOT_FOUND:
    case P.ALREADY_EXISTS:
    case P.PERMISSION_DENIED:
    case P.FAILED_PRECONDITION:
    case P.ABORTED:
    case P.OUT_OF_RANGE:
    case P.UNIMPLEMENTED:
    case P.DATA_LOSS:
      return !0;
  }
}
function eh(n) {
  if (n === void 0)
    return it("GRPC error has no .code"), P.UNKNOWN;
  switch (n) {
    case se.OK:
      return P.OK;
    case se.CANCELLED:
      return P.CANCELLED;
    case se.UNKNOWN:
      return P.UNKNOWN;
    case se.DEADLINE_EXCEEDED:
      return P.DEADLINE_EXCEEDED;
    case se.RESOURCE_EXHAUSTED:
      return P.RESOURCE_EXHAUSTED;
    case se.INTERNAL:
      return P.INTERNAL;
    case se.UNAVAILABLE:
      return P.UNAVAILABLE;
    case se.UNAUTHENTICATED:
      return P.UNAUTHENTICATED;
    case se.INVALID_ARGUMENT:
      return P.INVALID_ARGUMENT;
    case se.NOT_FOUND:
      return P.NOT_FOUND;
    case se.ALREADY_EXISTS:
      return P.ALREADY_EXISTS;
    case se.PERMISSION_DENIED:
      return P.PERMISSION_DENIED;
    case se.FAILED_PRECONDITION:
      return P.FAILED_PRECONDITION;
    case se.ABORTED:
      return P.ABORTED;
    case se.OUT_OF_RANGE:
      return P.OUT_OF_RANGE;
    case se.UNIMPLEMENTED:
      return P.UNIMPLEMENTED;
    case se.DATA_LOSS:
      return P.DATA_LOSS;
    default:
      return x();
  }
}
(W = se || (se = {}))[W.OK = 0] = "OK", W[W.CANCELLED = 1] = "CANCELLED", W[W.UNKNOWN = 2] = "UNKNOWN", W[W.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", W[W.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", W[W.NOT_FOUND = 5] = "NOT_FOUND", W[W.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", W[W.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", W[W.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", W[W.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", W[W.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", W[W.ABORTED = 10] = "ABORTED", W[W.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", W[W.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", W[W.INTERNAL = 13] = "INTERNAL", W[W.UNAVAILABLE = 14] = "UNAVAILABLE", W[W.DATA_LOSS = 15] = "DATA_LOSS";
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
function yy() {
  return new TextEncoder();
}
/**
 * @license
 * Copyright 2022 Google LLC
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
const vy = new xt([4294967295, 4294967295], 0);
function Wc(n) {
  const e = yy().encode(n), t = new Tl();
  return t.update(e), new Uint8Array(t.digest());
}
function Kc(n) {
  const e = new DataView(n.buffer), t = e.getUint32(
    0,
    /* littleEndian= */
    !0
  ), r = e.getUint32(
    4,
    /* littleEndian= */
    !0
  ), i = e.getUint32(
    8,
    /* littleEndian= */
    !0
  ), s = e.getUint32(
    12,
    /* littleEndian= */
    !0
  );
  return [new xt([t, r], 0), new xt([i, s], 0)];
}
class bo {
  constructor(e, t, r) {
    if (this.bitmap = e, this.padding = t, this.hashCount = r, t < 0 || t >= 8) throw new Gn(`Invalid padding: ${t}`);
    if (r < 0) throw new Gn(`Invalid hash count: ${r}`);
    if (e.length > 0 && this.hashCount === 0)
      throw new Gn(`Invalid hash count: ${r}`);
    if (e.length === 0 && t !== 0)
      throw new Gn(`Invalid padding when bitmap length is 0: ${t}`);
    this.Ie = 8 * e.length - t, // Set the bit count in Integer to avoid repetition in mightContain().
    this.Te = xt.fromNumber(this.Ie);
  }
  // Calculate the ith hash value based on the hashed 64bit integers,
  // and calculate its corresponding bit index in the bitmap to be checked.
  Ee(e, t, r) {
    let i = e.add(t.multiply(xt.fromNumber(r)));
    return i.compare(vy) === 1 && (i = new xt([i.getBits(0), i.getBits(1)], 0)), i.modulo(this.Te).toNumber();
  }
  // Return whether the bit on the given index in the bitmap is set to 1.
  de(e) {
    return (this.bitmap[Math.floor(e / 8)] & 1 << e % 8) != 0;
  }
  mightContain(e) {
    if (this.Ie === 0) return !1;
    const t = Wc(e), [r, i] = Kc(t);
    for (let s = 0; s < this.hashCount; s++) {
      const a = this.Ee(r, i, s);
      if (!this.de(a)) return !1;
    }
    return !0;
  }
  /** Create bloom filter for testing purposes only. */
  static create(e, t, r) {
    const i = e % 8 == 0 ? 0 : 8 - e % 8, s = new Uint8Array(Math.ceil(e / 8)), a = new bo(s, i, t);
    return r.forEach((c) => a.insert(c)), a;
  }
  insert(e) {
    if (this.Ie === 0) return;
    const t = Wc(e), [r, i] = Kc(t);
    for (let s = 0; s < this.hashCount; s++) {
      const a = this.Ee(r, i, s);
      this.Ae(a);
    }
  }
  Ae(e) {
    const t = Math.floor(e / 8), r = e % 8;
    this.bitmap[t] |= 1 << r;
  }
}
class Gn extends Error {
  constructor() {
    super(...arguments), this.name = "BloomFilterError";
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Mi {
  constructor(e, t, r, i, s) {
    this.snapshotVersion = e, this.targetChanges = t, this.targetMismatches = r, this.documentUpdates = i, this.resolvedLimboDocuments = s;
  }
  /**
   * HACK: Views require RemoteEvents in order to determine whether the view is
   * CURRENT, but secondary tabs don't receive remote events. So this method is
   * used to create a synthesized RemoteEvent that can be used to apply a
   * CURRENT status change to a View, for queries executed in a different tab.
   */
  // PORTING NOTE: Multi-tab only
  static createSynthesizedRemoteEventForCurrentChange(e, t, r) {
    const i = /* @__PURE__ */ new Map();
    return i.set(e, Tr.createSynthesizedTargetChangeForCurrentChange(e, t, r)), new Mi(U.min(), i, new ee(G), st(), z());
  }
}
class Tr {
  constructor(e, t, r, i, s) {
    this.resumeToken = e, this.current = t, this.addedDocuments = r, this.modifiedDocuments = i, this.removedDocuments = s;
  }
  /**
   * This method is used to create a synthesized TargetChanges that can be used to
   * apply a CURRENT status change to a View (for queries executed in a different
   * tab) or for new queries (to raise snapshots with correct CURRENT status).
   */
  static createSynthesizedTargetChangeForCurrentChange(e, t, r) {
    return new Tr(r, t, z(), z(), z());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class si {
  constructor(e, t, r, i) {
    this.Re = e, this.removedTargetIds = t, this.key = r, this.Ve = i;
  }
}
class th {
  constructor(e, t) {
    this.targetId = e, this.me = t;
  }
}
class nh {
  constructor(e, t, r = _e.EMPTY_BYTE_STRING, i = null) {
    this.state = e, this.targetIds = t, this.resumeToken = r, this.cause = i;
  }
}
class Gc {
  constructor() {
    this.fe = 0, /**
     * Keeps track of the document changes since the last raised snapshot.
     *
     * These changes are continuously updated as we receive document updates and
     * always reflect the current set of changes against the last issued snapshot.
     */
    this.ge = Yc(), /** See public getters for explanations of these fields. */
    this.pe = _e.EMPTY_BYTE_STRING, this.ye = !1, /**
     * Whether this target state should be included in the next snapshot. We
     * initialize to true so that newly-added targets are included in the next
     * RemoteEvent.
     */
    this.we = !0;
  }
  /**
   * Whether this target has been marked 'current'.
   *
   * 'Current' has special meaning in the RPC protocol: It implies that the
   * Watch backend has sent us all changes up to the point at which the target
   * was added and that the target is consistent with the rest of the watch
   * stream.
   */
  get current() {
    return this.ye;
  }
  /** The last resume token sent to us for this target. */
  get resumeToken() {
    return this.pe;
  }
  /** Whether this target has pending target adds or target removes. */
  get Se() {
    return this.fe !== 0;
  }
  /** Whether we have modified any state that should trigger a snapshot. */
  get be() {
    return this.we;
  }
  /**
   * Applies the resume token to the TargetChange, but only when it has a new
   * value. Empty resumeTokens are discarded.
   */
  De(e) {
    e.approximateByteSize() > 0 && (this.we = !0, this.pe = e);
  }
  /**
   * Creates a target change from the current set of changes.
   *
   * To reset the document changes after raising this snapshot, call
   * `clearPendingChanges()`.
   */
  Ce() {
    let e = z(), t = z(), r = z();
    return this.ge.forEach((i, s) => {
      switch (s) {
        case 0:
          e = e.add(i);
          break;
        case 2:
          t = t.add(i);
          break;
        case 1:
          r = r.add(i);
          break;
        default:
          x();
      }
    }), new Tr(this.pe, this.ye, e, t, r);
  }
  /**
   * Resets the document changes and sets `hasPendingChanges` to false.
   */
  ve() {
    this.we = !1, this.ge = Yc();
  }
  Fe(e, t) {
    this.we = !0, this.ge = this.ge.insert(e, t);
  }
  Me(e) {
    this.we = !0, this.ge = this.ge.remove(e);
  }
  xe() {
    this.fe += 1;
  }
  Oe() {
    this.fe -= 1, Y(this.fe >= 0);
  }
  Ne() {
    this.we = !0, this.ye = !0;
  }
}
class Ey {
  constructor(e) {
    this.Le = e, /** The internal state of all tracked targets. */
    this.Be = /* @__PURE__ */ new Map(), /** Keeps track of the documents to update since the last raised snapshot. */
    this.ke = st(), /** A mapping of document keys to their set of target IDs. */
    this.qe = Qc(), /**
     * A map of targets with existence filter mismatches. These targets are
     * known to be inconsistent and their listens needs to be re-established by
     * RemoteStore.
     */
    this.Qe = new ee(G);
  }
  /**
   * Processes and adds the DocumentWatchChange to the current set of changes.
   */
  Ke(e) {
    for (const t of e.Re) e.Ve && e.Ve.isFoundDocument() ? this.$e(t, e.Ve) : this.Ue(t, e.key, e.Ve);
    for (const t of e.removedTargetIds) this.Ue(t, e.key, e.Ve);
  }
  /** Processes and adds the WatchTargetChange to the current set of changes. */
  We(e) {
    this.forEachTarget(e, (t) => {
      const r = this.Ge(t);
      switch (e.state) {
        case 0:
          this.ze(t) && r.De(e.resumeToken);
          break;
        case 1:
          r.Oe(), r.Se || // We have a freshly added target, so we need to reset any state
          // that we had previously. This can happen e.g. when remove and add
          // back a target for existence filter mismatches.
          r.ve(), r.De(e.resumeToken);
          break;
        case 2:
          r.Oe(), r.Se || this.removeTarget(t);
          break;
        case 3:
          this.ze(t) && (r.Ne(), r.De(e.resumeToken));
          break;
        case 4:
          this.ze(t) && // Reset the target and synthesizes removes for all existing
          // documents. The backend will re-add any documents that still
          // match the target before it sends the next global snapshot.
          (this.je(t), r.De(e.resumeToken));
          break;
        default:
          x();
      }
    });
  }
  /**
   * Iterates over all targetIds that the watch change applies to: either the
   * targetIds explicitly listed in the change or the targetIds of all currently
   * active targets.
   */
  forEachTarget(e, t) {
    e.targetIds.length > 0 ? e.targetIds.forEach(t) : this.Be.forEach((r, i) => {
      this.ze(i) && t(i);
    });
  }
  /**
   * Handles existence filters and synthesizes deletes for filter mismatches.
   * Targets that are invalidated by filter mismatches are added to
   * `pendingTargetResets`.
   */
  He(e) {
    const t = e.targetId, r = e.me.count, i = this.Je(t);
    if (i) {
      const s = i.target;
      if (qs(s)) if (r === 0) {
        const a = new M(s.path);
        this.Ue(t, a, Ae.newNoDocument(a, U.min()));
      } else Y(r === 1);
      else {
        const a = this.Ye(t);
        if (a !== r) {
          const c = this.Ze(e), l = c ? this.Xe(c, e, a) : 1;
          if (l !== 0) {
            this.je(t);
            const d = l === 2 ? "TargetPurposeExistenceFilterMismatchBloom" : "TargetPurposeExistenceFilterMismatch";
            this.Qe = this.Qe.insert(t, d);
          }
        }
      }
    }
  }
  /**
   * Parse the bloom filter from the "unchanged_names" field of an existence
   * filter.
   */
  Ze(e) {
    const t = e.me.unchangedNames;
    if (!t || !t.bits) return null;
    const { bits: { bitmap: r = "", padding: i = 0 }, hashCount: s = 0 } = t;
    let a, c;
    try {
      a = qt(r).toUint8Array();
    } catch (l) {
      if (l instanceof Nl) return hn("Decoding the base64 bloom filter in existence filter failed (" + l.message + "); ignoring the bloom filter and falling back to full re-query."), null;
      throw l;
    }
    try {
      c = new bo(a, i, s);
    } catch (l) {
      return hn(l instanceof Gn ? "BloomFilter error: " : "Applying bloom filter failed: ", l), null;
    }
    return c.Ie === 0 ? null : c;
  }
  /**
   * Apply bloom filter to remove the deleted documents, and return the
   * application status.
   */
  Xe(e, t, r) {
    return t.me.count === r - this.nt(e, t.targetId) ? 0 : 2;
  }
  /**
   * Filter out removed documents based on bloom filter membership result and
   * return number of documents removed.
   */
  nt(e, t) {
    const r = this.Le.getRemoteKeysForTarget(t);
    let i = 0;
    return r.forEach((s) => {
      const a = this.Le.tt(), c = `projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;
      e.mightContain(c) || (this.Ue(
        t,
        s,
        /*updatedDocument=*/
        null
      ), i++);
    }), i;
  }
  /**
   * Converts the currently accumulated state into a remote event at the
   * provided snapshot version. Resets the accumulated changes before returning.
   */
  rt(e) {
    const t = /* @__PURE__ */ new Map();
    this.Be.forEach((s, a) => {
      const c = this.Je(a);
      if (c) {
        if (s.current && qs(c.target)) {
          const l = new M(c.target.path);
          this.ke.get(l) !== null || this.it(a, l) || this.Ue(a, l, Ae.newNoDocument(l, e));
        }
        s.be && (t.set(a, s.Ce()), s.ve());
      }
    });
    let r = z();
    this.qe.forEach((s, a) => {
      let c = !0;
      a.forEachWhile((l) => {
        const d = this.Je(l);
        return !d || d.purpose === "TargetPurposeLimboResolution" || (c = !1, !1);
      }), c && (r = r.add(s));
    }), this.ke.forEach((s, a) => a.setReadTime(e));
    const i = new Mi(e, t, this.Qe, this.ke, r);
    return this.ke = st(), this.qe = Qc(), this.Qe = new ee(G), i;
  }
  /**
   * Adds the provided document to the internal list of document updates and
   * its document key to the given target's mapping.
   */
  // Visible for testing.
  $e(e, t) {
    if (!this.ze(e)) return;
    const r = this.it(e, t.key) ? 2 : 0;
    this.Ge(e).Fe(t.key, r), this.ke = this.ke.insert(t.key, t), this.qe = this.qe.insert(t.key, this.st(t.key).add(e));
  }
  /**
   * Removes the provided document from the target mapping. If the
   * document no longer matches the target, but the document's state is still
   * known (e.g. we know that the document was deleted or we received the change
   * that caused the filter mismatch), the new document can be provided
   * to update the remote document cache.
   */
  // Visible for testing.
  Ue(e, t, r) {
    if (!this.ze(e)) return;
    const i = this.Ge(e);
    this.it(e, t) ? i.Fe(
      t,
      1
      /* ChangeType.Removed */
    ) : (
      // The document may have entered and left the target before we raised a
      // snapshot, so we can just ignore the change.
      i.Me(t)
    ), this.qe = this.qe.insert(t, this.st(t).delete(e)), r && (this.ke = this.ke.insert(t, r));
  }
  removeTarget(e) {
    this.Be.delete(e);
  }
  /**
   * Returns the current count of documents in the target. This includes both
   * the number of documents that the LocalStore considers to be part of the
   * target as well as any accumulated changes.
   */
  Ye(e) {
    const t = this.Ge(e).Ce();
    return this.Le.getRemoteKeysForTarget(e).size + t.addedDocuments.size - t.removedDocuments.size;
  }
  /**
   * Increment the number of acks needed from watch before we can consider the
   * server to be 'in-sync' with the client's active targets.
   */
  xe(e) {
    this.Ge(e).xe();
  }
  Ge(e) {
    let t = this.Be.get(e);
    return t || (t = new Gc(), this.Be.set(e, t)), t;
  }
  st(e) {
    let t = this.qe.get(e);
    return t || (t = new me(G), this.qe = this.qe.insert(e, t)), t;
  }
  /**
   * Verifies that the user is still interested in this target (by calling
   * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
   * from watch.
   */
  ze(e) {
    const t = this.Je(e) !== null;
    return t || N("WatchChangeAggregator", "Detected inactive target", e), t;
  }
  /**
   * Returns the TargetData for an active target (i.e. a target that the user
   * is still interested in that has no outstanding target change requests).
   */
  Je(e) {
    const t = this.Be.get(e);
    return t && t.Se ? null : this.Le.ot(e);
  }
  /**
   * Resets the state of a Watch target to its initial state (e.g. sets
   * 'current' to false, clears the resume token and removes its target mapping
   * from all documents).
   */
  je(e) {
    this.Be.set(e, new Gc()), this.Le.getRemoteKeysForTarget(e).forEach((t) => {
      this.Ue(
        e,
        t,
        /*updatedDocument=*/
        null
      );
    });
  }
  /**
   * Returns whether the LocalStore considers the document to be part of the
   * specified target.
   */
  it(e, t) {
    return this.Le.getRemoteKeysForTarget(e).has(t);
  }
}
function Qc() {
  return new ee(M.comparator);
}
function Yc() {
  return new ee(M.comparator);
}
const Iy = {
  asc: "ASCENDING",
  desc: "DESCENDING"
}, Ty = {
  "<": "LESS_THAN",
  "<=": "LESS_THAN_OR_EQUAL",
  ">": "GREATER_THAN",
  ">=": "GREATER_THAN_OR_EQUAL",
  "==": "EQUAL",
  "!=": "NOT_EQUAL",
  "array-contains": "ARRAY_CONTAINS",
  in: "IN",
  "not-in": "NOT_IN",
  "array-contains-any": "ARRAY_CONTAINS_ANY"
}, wy = {
  and: "AND",
  or: "OR"
};
class Ay {
  constructor(e, t) {
    this.databaseId = e, this.useProto3Json = t;
  }
}
function Hs(n, e) {
  return n.useProto3Json || ki(e) ? e : {
    value: e
  };
}
function vi(n, e) {
  return n.useProto3Json ? `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z` : {
    seconds: "" + e.seconds,
    nanos: e.nanoseconds
  };
}
function rh(n, e) {
  return n.useProto3Json ? e.toBase64() : e.toUint8Array();
}
function Ry(n, e) {
  return vi(n, e.toTimestamp());
}
function He(n) {
  return Y(!!n), U.fromTimestamp(function(t) {
    const r = At(t);
    return new ue(r.seconds, r.nanos);
  }(n));
}
function So(n, e) {
  return Ws(n, e).canonicalString();
}
function Ws(n, e) {
  const t = function(i) {
    return new Z(["projects", i.projectId, "databases", i.database]);
  }(n).child("documents");
  return e === void 0 ? t : t.child(e);
}
function ih(n) {
  const e = Z.fromString(n);
  return Y(uh(e)), e;
}
function Ks(n, e) {
  return So(n.databaseId, e.path);
}
function Is(n, e) {
  const t = ih(e);
  if (t.get(1) !== n.databaseId.projectId) throw new L(P.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + t.get(1) + " vs " + n.databaseId.projectId);
  if (t.get(3) !== n.databaseId.database) throw new L(P.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + t.get(3) + " vs " + n.databaseId.database);
  return new M(oh(t));
}
function sh(n, e) {
  return So(n.databaseId, e);
}
function by(n) {
  const e = ih(n);
  return e.length === 4 ? Z.emptyPath() : oh(e);
}
function Gs(n) {
  return new Z(["projects", n.databaseId.projectId, "databases", n.databaseId.database]).canonicalString();
}
function oh(n) {
  return Y(n.length > 4 && n.get(4) === "documents"), n.popFirst(5);
}
function Jc(n, e, t) {
  return {
    name: Ks(n, e),
    fields: t.value.mapValue.fields
  };
}
function Sy(n, e) {
  let t;
  if ("targetChange" in e) {
    e.targetChange;
    const r = function(d) {
      return d === "NO_CHANGE" ? 0 : d === "ADD" ? 1 : d === "REMOVE" ? 2 : d === "CURRENT" ? 3 : d === "RESET" ? 4 : x();
    }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], s = function(d, p) {
      return d.useProto3Json ? (Y(p === void 0 || typeof p == "string"), _e.fromBase64String(p || "")) : (Y(p === void 0 || // Check if the value is an instance of both Buffer and Uint8Array,
      // despite the fact that Buffer extends Uint8Array. In some
      // environments, such as jsdom, the prototype chain of Buffer
      // does not indicate that it extends Uint8Array.
      p instanceof Buffer || p instanceof Uint8Array), _e.fromUint8Array(p || new Uint8Array()));
    }(n, e.targetChange.resumeToken), a = e.targetChange.cause, c = a && function(d) {
      const p = d.code === void 0 ? P.UNKNOWN : eh(d.code);
      return new L(p, d.message || "");
    }(a);
    t = new nh(r, i, s, c || null);
  } else if ("documentChange" in e) {
    e.documentChange;
    const r = e.documentChange;
    r.document, r.document.name, r.document.updateTime;
    const i = Is(n, r.document.name), s = He(r.document.updateTime), a = r.document.createTime ? He(r.document.createTime) : U.min(), c = new Le({
      mapValue: {
        fields: r.document.fields
      }
    }), l = Ae.newFoundDocument(i, s, a, c), d = r.targetIds || [], p = r.removedTargetIds || [];
    t = new si(d, p, l.key, l);
  } else if ("documentDelete" in e) {
    e.documentDelete;
    const r = e.documentDelete;
    r.document;
    const i = Is(n, r.document), s = r.readTime ? He(r.readTime) : U.min(), a = Ae.newNoDocument(i, s), c = r.removedTargetIds || [];
    t = new si([], c, a.key, a);
  } else if ("documentRemove" in e) {
    e.documentRemove;
    const r = e.documentRemove;
    r.document;
    const i = Is(n, r.document), s = r.removedTargetIds || [];
    t = new si([], s, i, null);
  } else {
    if (!("filter" in e)) return x();
    {
      e.filter;
      const r = e.filter;
      r.targetId;
      const { count: i = 0, unchangedNames: s } = r, a = new gy(i, s), c = r.targetId;
      t = new th(c, a);
    }
  }
  return t;
}
function Py(n, e) {
  let t;
  if (e instanceof Ir) t = {
    update: Jc(n, e.key, e.value)
  };
  else if (e instanceof Zl) t = {
    delete: Ks(n, e.key)
  };
  else if (e instanceof Yt) t = {
    update: Jc(n, e.key, e.data),
    updateMask: xy(e.fieldMask)
  };
  else {
    if (!(e instanceof fy)) return x();
    t = {
      verify: Ks(n, e.key)
    };
  }
  return e.fieldTransforms.length > 0 && (t.updateTransforms = e.fieldTransforms.map((r) => function(s, a) {
    const c = a.transform;
    if (c instanceof _i) return {
      fieldPath: a.field.canonicalString(),
      setToServerValue: "REQUEST_TIME"
    };
    if (c instanceof hr) return {
      fieldPath: a.field.canonicalString(),
      appendMissingElements: {
        values: c.elements
      }
    };
    if (c instanceof dr) return {
      fieldPath: a.field.canonicalString(),
      removeAllFromArray: {
        values: c.elements
      }
    };
    if (c instanceof yi) return {
      fieldPath: a.field.canonicalString(),
      increment: c.Pe
    };
    throw x();
  }(0, r))), e.precondition.isNone || (t.currentDocument = function(i, s) {
    return s.updateTime !== void 0 ? {
      updateTime: Ry(i, s.updateTime)
    } : s.exists !== void 0 ? {
      exists: s.exists
    } : x();
  }(n, e.precondition)), t;
}
function Cy(n, e) {
  return n && n.length > 0 ? (Y(e !== void 0), n.map((t) => function(i, s) {
    let a = i.updateTime ? He(i.updateTime) : He(s);
    return a.isEqual(U.min()) && // The Firestore Emulator currently returns an update time of 0 for
    // deletes of non-existing documents (rather than null). This breaks the
    // test "get deleted doc while offline with source=cache" as NoDocuments
    // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
    // TODO(#2149): Remove this when Emulator is fixed
    (a = He(s)), new ly(a, i.transformResults || []);
  }(t, e))) : [];
}
function ky(n, e) {
  return {
    documents: [sh(n, e.path)]
  };
}
function Dy(n, e) {
  const t = {
    structuredQuery: {}
  }, r = e.path;
  let i;
  e.collectionGroup !== null ? (i = r, t.structuredQuery.from = [{
    collectionId: e.collectionGroup,
    allDescendants: !0
  }]) : (i = r.popLast(), t.structuredQuery.from = [{
    collectionId: r.lastSegment()
  }]), t.parent = sh(n, i);
  const s = function(d) {
    if (d.length !== 0)
      return ch(Ke.create(
        d,
        "and"
        /* CompositeOperator.AND */
      ));
  }(e.filters);
  s && (t.structuredQuery.where = s);
  const a = function(d) {
    if (d.length !== 0)
      return d.map((p) => (
        // visible for testing
        function(A) {
          return {
            field: rn(A.field),
            direction: Vy(A.dir)
          };
        }(p)
      ));
  }(e.orderBy);
  a && (t.structuredQuery.orderBy = a);
  const c = Hs(n, e.limit);
  return c !== null && (t.structuredQuery.limit = c), e.startAt && (t.structuredQuery.startAt = function(d) {
    return {
      before: d.inclusive,
      values: d.position
    };
  }(e.startAt)), e.endAt && (t.structuredQuery.endAt = function(d) {
    return {
      before: !d.inclusive,
      values: d.position
    };
  }(e.endAt)), {
    _t: t,
    parent: i
  };
}
function Ny(n) {
  let e = by(n.parent);
  const t = n.structuredQuery, r = t.from ? t.from.length : 0;
  let i = null;
  if (r > 0) {
    Y(r === 1);
    const p = t.from[0];
    p.allDescendants ? i = p.collectionId : e = e.child(p.collectionId);
  }
  let s = [];
  t.where && (s = function(y) {
    const A = ah(y);
    return A instanceof Ke && Ml(A) ? A.getFilters() : [A];
  }(t.where));
  let a = [];
  t.orderBy && (a = function(y) {
    return y.map((A) => function(D) {
      return new gi(
        sn(D.field),
        // visible for testing
        function(C) {
          switch (C) {
            case "ASCENDING":
              return "asc";
            case "DESCENDING":
              return "desc";
            default:
              return;
          }
        }(D.direction)
      );
    }(A));
  }(t.orderBy));
  let c = null;
  t.limit && (c = function(y) {
    let A;
    return A = typeof y == "object" ? y.value : y, ki(A) ? null : A;
  }(t.limit));
  let l = null;
  t.startAt && (l = function(y) {
    const A = !!y.before, b = y.values || [];
    return new mi(b, A);
  }(t.startAt));
  let d = null;
  return t.endAt && (d = function(y) {
    const A = !y.before, b = y.values || [];
    return new mi(b, A);
  }(t.endAt)), Y_(e, i, a, s, c, "F", l, d);
}
function Oy(n, e) {
  const t = function(i) {
    switch (i) {
      case "TargetPurposeListen":
        return null;
      case "TargetPurposeExistenceFilterMismatch":
        return "existence-filter-mismatch";
      case "TargetPurposeExistenceFilterMismatchBloom":
        return "existence-filter-mismatch-bloom";
      case "TargetPurposeLimboResolution":
        return "limbo-document";
      default:
        return x();
    }
  }(e.purpose);
  return t == null ? null : {
    "goog-listen-tags": t
  };
}
function ah(n) {
  return n.unaryFilter !== void 0 ? function(t) {
    switch (t.unaryFilter.op) {
      case "IS_NAN":
        const r = sn(t.unaryFilter.field);
        return ce.create(r, "==", {
          doubleValue: NaN
        });
      case "IS_NULL":
        const i = sn(t.unaryFilter.field);
        return ce.create(i, "==", {
          nullValue: "NULL_VALUE"
        });
      case "IS_NOT_NAN":
        const s = sn(t.unaryFilter.field);
        return ce.create(s, "!=", {
          doubleValue: NaN
        });
      case "IS_NOT_NULL":
        const a = sn(t.unaryFilter.field);
        return ce.create(a, "!=", {
          nullValue: "NULL_VALUE"
        });
      default:
        return x();
    }
  }(n) : n.fieldFilter !== void 0 ? function(t) {
    return ce.create(sn(t.fieldFilter.field), function(i) {
      switch (i) {
        case "EQUAL":
          return "==";
        case "NOT_EQUAL":
          return "!=";
        case "GREATER_THAN":
          return ">";
        case "GREATER_THAN_OR_EQUAL":
          return ">=";
        case "LESS_THAN":
          return "<";
        case "LESS_THAN_OR_EQUAL":
          return "<=";
        case "ARRAY_CONTAINS":
          return "array-contains";
        case "IN":
          return "in";
        case "NOT_IN":
          return "not-in";
        case "ARRAY_CONTAINS_ANY":
          return "array-contains-any";
        default:
          return x();
      }
    }(t.fieldFilter.op), t.fieldFilter.value);
  }(n) : n.compositeFilter !== void 0 ? function(t) {
    return Ke.create(t.compositeFilter.filters.map((r) => ah(r)), function(i) {
      switch (i) {
        case "AND":
          return "and";
        case "OR":
          return "or";
        default:
          return x();
      }
    }(t.compositeFilter.op));
  }(n) : x();
}
function Vy(n) {
  return Iy[n];
}
function Ly(n) {
  return Ty[n];
}
function My(n) {
  return wy[n];
}
function rn(n) {
  return {
    fieldPath: n.canonicalString()
  };
}
function sn(n) {
  return pe.fromServerFormat(n.fieldPath);
}
function ch(n) {
  return n instanceof ce ? function(t) {
    if (t.op === "==") {
      if (xc(t.value)) return {
        unaryFilter: {
          field: rn(t.field),
          op: "IS_NAN"
        }
      };
      if (Mc(t.value)) return {
        unaryFilter: {
          field: rn(t.field),
          op: "IS_NULL"
        }
      };
    } else if (t.op === "!=") {
      if (xc(t.value)) return {
        unaryFilter: {
          field: rn(t.field),
          op: "IS_NOT_NAN"
        }
      };
      if (Mc(t.value)) return {
        unaryFilter: {
          field: rn(t.field),
          op: "IS_NOT_NULL"
        }
      };
    }
    return {
      fieldFilter: {
        field: rn(t.field),
        op: Ly(t.op),
        value: t.value
      }
    };
  }(n) : n instanceof Ke ? function(t) {
    const r = t.getFilters().map((i) => ch(i));
    return r.length === 1 ? r[0] : {
      compositeFilter: {
        op: My(t.op),
        filters: r
      }
    };
  }(n) : x();
}
function xy(n) {
  const e = [];
  return n.fields.forEach((t) => e.push(t.canonicalString())), {
    fieldPaths: e
  };
}
function uh(n) {
  return n.length >= 4 && n.get(0) === "projects" && n.get(2) === "databases";
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class _t {
  constructor(e, t, r, i, s = U.min(), a = U.min(), c = _e.EMPTY_BYTE_STRING, l = null) {
    this.target = e, this.targetId = t, this.purpose = r, this.sequenceNumber = i, this.snapshotVersion = s, this.lastLimboFreeSnapshotVersion = a, this.resumeToken = c, this.expectedCount = l;
  }
  /** Creates a new target data instance with an updated sequence number. */
  withSequenceNumber(e) {
    return new _t(this.target, this.targetId, this.purpose, e, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, this.expectedCount);
  }
  /**
   * Creates a new target data instance with an updated resume token and
   * snapshot version.
   */
  withResumeToken(e, t) {
    return new _t(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      t,
      this.lastLimboFreeSnapshotVersion,
      e,
      /* expectedCount= */
      null
    );
  }
  /**
   * Creates a new target data instance with an updated expected count.
   */
  withExpectedCount(e) {
    return new _t(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, e);
  }
  /**
   * Creates a new target data instance with an updated last limbo free
   * snapshot version number.
   */
  withLastLimboFreeSnapshotVersion(e) {
    return new _t(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, e, this.resumeToken, this.expectedCount);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Uy {
  constructor(e) {
    this.ct = e;
  }
}
function Fy(n) {
  const e = Ny({
    parent: n.parent,
    structuredQuery: n.structuredQuery
  });
  return n.limitType === "LAST" ? zs(
    e,
    e.limit,
    "L"
    /* LimitType.Last */
  ) : e;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class By {
  constructor() {
    this.an = new jy();
  }
  addToCollectionParentIndex(e, t) {
    return this.an.add(t), S.resolve();
  }
  getCollectionParents(e, t) {
    return S.resolve(this.an.getEntries(t));
  }
  addFieldIndex(e, t) {
    return S.resolve();
  }
  deleteFieldIndex(e, t) {
    return S.resolve();
  }
  deleteAllFieldIndexes(e) {
    return S.resolve();
  }
  createTargetIndexes(e, t) {
    return S.resolve();
  }
  getDocumentsMatchingTarget(e, t) {
    return S.resolve(null);
  }
  getIndexType(e, t) {
    return S.resolve(
      0
      /* IndexType.NONE */
    );
  }
  getFieldIndexes(e, t) {
    return S.resolve([]);
  }
  getNextCollectionGroupToUpdate(e) {
    return S.resolve(null);
  }
  getMinOffset(e, t) {
    return S.resolve(wt.min());
  }
  getMinOffsetFromCollectionGroup(e, t) {
    return S.resolve(wt.min());
  }
  updateCollectionGroup(e, t, r) {
    return S.resolve();
  }
  updateIndexEntries(e, t) {
    return S.resolve();
  }
}
class jy {
  constructor() {
    this.index = {};
  }
  // Returns false if the entry already existed.
  add(e) {
    const t = e.lastSegment(), r = e.popLast(), i = this.index[t] || new me(Z.comparator), s = !i.has(r);
    return this.index[t] = i.add(r), s;
  }
  has(e) {
    const t = e.lastSegment(), r = e.popLast(), i = this.index[t];
    return i && i.has(r);
  }
  getEntries(e) {
    return (this.index[e] || new me(Z.comparator)).toArray();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class mn {
  constructor(e) {
    this.Nn = e;
  }
  next() {
    return this.Nn += 2, this.Nn;
  }
  static Ln() {
    return new mn(0);
  }
  static Bn() {
    return new mn(-1);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class $y {
  constructor() {
    this.changes = new Tn((e) => e.toString(), (e, t) => e.isEqual(t)), this.changesApplied = !1;
  }
  /**
   * Buffers a `RemoteDocumentCache.addEntry()` call.
   *
   * You can only modify documents that have already been retrieved via
   * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
   */
  addEntry(e) {
    this.assertNotApplied(), this.changes.set(e.key, e);
  }
  /**
   * Buffers a `RemoteDocumentCache.removeEntry()` call.
   *
   * You can only remove documents that have already been retrieved via
   * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
   */
  removeEntry(e, t) {
    this.assertNotApplied(), this.changes.set(e, Ae.newInvalidDocument(e).setReadTime(t));
  }
  /**
   * Looks up an entry in the cache. The buffered changes will first be checked,
   * and if no buffered change applies, this will forward to
   * `RemoteDocumentCache.getEntry()`.
   *
   * @param transaction - The transaction in which to perform any persistence
   *     operations.
   * @param documentKey - The key of the entry to look up.
   * @returns The cached document or an invalid document if we have nothing
   * cached.
   */
  getEntry(e, t) {
    this.assertNotApplied();
    const r = this.changes.get(t);
    return r !== void 0 ? S.resolve(r) : this.getFromCache(e, t);
  }
  /**
   * Looks up several entries in the cache, forwarding to
   * `RemoteDocumentCache.getEntry()`.
   *
   * @param transaction - The transaction in which to perform any persistence
   *     operations.
   * @param documentKeys - The keys of the entries to look up.
   * @returns A map of cached documents, indexed by key. If an entry cannot be
   *     found, the corresponding key will be mapped to an invalid document.
   */
  getEntries(e, t) {
    return this.getAllFromCache(e, t);
  }
  /**
   * Applies buffered changes to the underlying RemoteDocumentCache, using
   * the provided transaction.
   */
  apply(e) {
    return this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(e);
  }
  /** Helper to assert this.changes is not null  */
  assertNotApplied() {
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
/**
 * @license
 * Copyright 2022 Google LLC
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
class qy {
  constructor(e, t) {
    this.overlayedDocument = e, this.mutatedFields = t;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class zy {
  constructor(e, t, r, i) {
    this.remoteDocumentCache = e, this.mutationQueue = t, this.documentOverlayCache = r, this.indexManager = i;
  }
  /**
   * Get the local view of the document identified by `key`.
   *
   * @returns Local view of the document or null if we don't have any cached
   * state for it.
   */
  getDocument(e, t) {
    let r = null;
    return this.documentOverlayCache.getOverlay(e, t).next((i) => (r = i, this.remoteDocumentCache.getEntry(e, t))).next((i) => (r !== null && er(r.mutation, i, je.empty(), ue.now()), i));
  }
  /**
   * Gets the local view of the documents identified by `keys`.
   *
   * If we don't have cached state for a document in `keys`, a NoDocument will
   * be stored for that key in the resulting set.
   */
  getDocuments(e, t) {
    return this.remoteDocumentCache.getEntries(e, t).next((r) => this.getLocalViewOfDocuments(e, r, z()).next(() => r));
  }
  /**
   * Similar to `getDocuments`, but creates the local view from the given
   * `baseDocs` without retrieving documents from the local store.
   *
   * @param transaction - The transaction this operation is scoped to.
   * @param docs - The documents to apply local mutations to get the local views.
   * @param existenceStateChanged - The set of document keys whose existence state
   *   is changed. This is useful to determine if some documents overlay needs
   *   to be recalculated.
   */
  getLocalViewOfDocuments(e, t, r = z()) {
    const i = Lt();
    return this.populateOverlays(e, i, t).next(() => this.computeViews(e, t, i, r).next((s) => {
      let a = Kn();
      return s.forEach((c, l) => {
        a = a.insert(c, l.overlayedDocument);
      }), a;
    }));
  }
  /**
   * Gets the overlayed documents for the given document map, which will include
   * the local view of those documents and a `FieldMask` indicating which fields
   * are mutated locally, `null` if overlay is a Set or Delete mutation.
   */
  getOverlayedDocuments(e, t) {
    const r = Lt();
    return this.populateOverlays(e, r, t).next(() => this.computeViews(e, t, r, z()));
  }
  /**
   * Fetches the overlays for {@code docs} and adds them to provided overlay map
   * if the map does not already contain an entry for the given document key.
   */
  populateOverlays(e, t, r) {
    const i = [];
    return r.forEach((s) => {
      t.has(s) || i.push(s);
    }), this.documentOverlayCache.getOverlays(e, i).next((s) => {
      s.forEach((a, c) => {
        t.set(a, c);
      });
    });
  }
  /**
   * Computes the local view for the given documents.
   *
   * @param docs - The documents to compute views for. It also has the base
   *   version of the documents.
   * @param overlays - The overlays that need to be applied to the given base
   *   version of the documents.
   * @param existenceStateChanged - A set of documents whose existence states
   *   might have changed. This is used to determine if we need to re-calculate
   *   overlays from mutation queues.
   * @return A map represents the local documents view.
   */
  computeViews(e, t, r, i) {
    let s = st();
    const a = Zn(), c = function() {
      return Zn();
    }();
    return t.forEach((l, d) => {
      const p = r.get(d.key);
      i.has(d.key) && (p === void 0 || p.mutation instanceof Yt) ? s = s.insert(d.key, d) : p !== void 0 ? (a.set(d.key, p.mutation.getFieldMask()), er(p.mutation, d, p.mutation.getFieldMask(), ue.now())) : (
        // no overlay exists
        // Using EMPTY to indicate there is no overlay for the document.
        a.set(d.key, je.empty())
      );
    }), this.recalculateAndSaveOverlays(e, s).next((l) => (l.forEach((d, p) => a.set(d, p)), t.forEach((d, p) => {
      var y;
      return c.set(d, new qy(p, (y = a.get(d)) !== null && y !== void 0 ? y : null));
    }), c));
  }
  recalculateAndSaveOverlays(e, t) {
    const r = Zn();
    let i = new ee((a, c) => a - c), s = z();
    return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e, t).next((a) => {
      for (const c of a) c.keys().forEach((l) => {
        const d = t.get(l);
        if (d === null) return;
        let p = r.get(l) || je.empty();
        p = c.applyToLocalView(d, p), r.set(l, p);
        const y = (i.get(c.batchId) || z()).add(l);
        i = i.insert(c.batchId, y);
      });
    }).next(() => {
      const a = [], c = i.getReverseIterator();
      for (; c.hasNext(); ) {
        const l = c.getNext(), d = l.key, p = l.value, y = zl();
        p.forEach((A) => {
          if (!s.has(A)) {
            const b = Jl(t.get(A), r.get(A));
            b !== null && y.set(A, b), s = s.add(A);
          }
        }), a.push(this.documentOverlayCache.saveOverlays(e, d, y));
      }
      return S.waitFor(a);
    }).next(() => r);
  }
  /**
   * Recalculates overlays by reading the documents from remote document cache
   * first, and saves them after they are calculated.
   */
  recalculateAndSaveOverlaysForDocumentKeys(e, t) {
    return this.remoteDocumentCache.getEntries(e, t).next((r) => this.recalculateAndSaveOverlays(e, r));
  }
  /**
   * Performs a query against the local view of all documents.
   *
   * @param transaction - The persistence transaction.
   * @param query - The query to match documents against.
   * @param offset - Read time and key to start scanning by (exclusive).
   * @param context - A optional tracker to keep a record of important details
   *   during database local query execution.
   */
  getDocumentsMatchingQuery(e, t, r, i) {
    return function(a) {
      return M.isDocumentKey(a.path) && a.collectionGroup === null && a.filters.length === 0;
    }(t) ? this.getDocumentsMatchingDocumentQuery(e, t.path) : J_(t) ? this.getDocumentsMatchingCollectionGroupQuery(e, t, r, i) : this.getDocumentsMatchingCollectionQuery(e, t, r, i);
  }
  /**
   * Given a collection group, returns the next documents that follow the provided offset, along
   * with an updated batch ID.
   *
   * <p>The documents returned by this method are ordered by remote version from the provided
   * offset. If there are no more remote documents after the provided offset, documents with
   * mutations in order of batch id from the offset are returned. Since all documents in a batch are
   * returned together, the total number of documents returned can exceed {@code count}.
   *
   * @param transaction
   * @param collectionGroup The collection group for the documents.
   * @param offset The offset to index into.
   * @param count The number of documents to return
   * @return A LocalWriteResult with the documents that follow the provided offset and the last processed batch id.
   */
  getNextDocuments(e, t, r, i) {
    return this.remoteDocumentCache.getAllFromCollectionGroup(e, t, r, i).next((s) => {
      const a = i - s.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(e, t, r.largestBatchId, i - s.size) : S.resolve(Lt());
      let c = -1, l = s;
      return a.next((d) => S.forEach(d, (p, y) => (c < y.largestBatchId && (c = y.largestBatchId), s.get(p) ? S.resolve() : this.remoteDocumentCache.getEntry(e, p).next((A) => {
        l = l.insert(p, A);
      }))).next(() => this.populateOverlays(e, d, s)).next(() => this.computeViews(e, l, d, z())).next((p) => ({
        batchId: c,
        changes: ql(p)
      })));
    });
  }
  getDocumentsMatchingDocumentQuery(e, t) {
    return this.getDocument(e, new M(t)).next((r) => {
      let i = Kn();
      return r.isFoundDocument() && (i = i.insert(r.key, r)), i;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(e, t, r, i) {
    const s = t.collectionGroup;
    let a = Kn();
    return this.indexManager.getCollectionParents(e, s).next((c) => S.forEach(c, (l) => {
      const d = function(y, A) {
        return new Di(
          A,
          /*collectionGroup=*/
          null,
          y.explicitOrderBy.slice(),
          y.filters.slice(),
          y.limit,
          y.limitType,
          y.startAt,
          y.endAt
        );
      }(t, l.child(s));
      return this.getDocumentsMatchingCollectionQuery(e, d, r, i).next((p) => {
        p.forEach((y, A) => {
          a = a.insert(y, A);
        });
      });
    }).next(() => a));
  }
  getDocumentsMatchingCollectionQuery(e, t, r, i) {
    let s;
    return this.documentOverlayCache.getOverlaysForCollection(e, t.path, r.largestBatchId).next((a) => (s = a, this.remoteDocumentCache.getDocumentsMatchingQuery(e, t, r, s, i))).next((a) => {
      s.forEach((l, d) => {
        const p = d.getKey();
        a.get(p) === null && (a = a.insert(p, Ae.newInvalidDocument(p)));
      });
      let c = Kn();
      return a.forEach((l, d) => {
        const p = s.get(l);
        p !== void 0 && er(p.mutation, d, je.empty(), ue.now()), // Finally, insert the documents that still match the query
        Oi(t, d) && (c = c.insert(l, d));
      }), c;
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Hy {
  constructor(e) {
    this.serializer = e, this.lr = /* @__PURE__ */ new Map(), this.hr = /* @__PURE__ */ new Map();
  }
  getBundleMetadata(e, t) {
    return S.resolve(this.lr.get(t));
  }
  saveBundleMetadata(e, t) {
    return this.lr.set(
      t.id,
      /** Decodes a BundleMetadata proto into a BundleMetadata object. */
      function(i) {
        return {
          id: i.id,
          version: i.version,
          createTime: He(i.createTime)
        };
      }(t)
    ), S.resolve();
  }
  getNamedQuery(e, t) {
    return S.resolve(this.hr.get(t));
  }
  saveNamedQuery(e, t) {
    return this.hr.set(t.name, function(i) {
      return {
        name: i.name,
        query: Fy(i.bundledQuery),
        readTime: He(i.readTime)
      };
    }(t)), S.resolve();
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
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
class Wy {
  constructor() {
    this.overlays = new ee(M.comparator), this.Pr = /* @__PURE__ */ new Map();
  }
  getOverlay(e, t) {
    return S.resolve(this.overlays.get(t));
  }
  getOverlays(e, t) {
    const r = Lt();
    return S.forEach(t, (i) => this.getOverlay(e, i).next((s) => {
      s !== null && r.set(i, s);
    })).next(() => r);
  }
  saveOverlays(e, t, r) {
    return r.forEach((i, s) => {
      this.ht(e, t, s);
    }), S.resolve();
  }
  removeOverlaysForBatchId(e, t, r) {
    const i = this.Pr.get(r);
    return i !== void 0 && (i.forEach((s) => this.overlays = this.overlays.remove(s)), this.Pr.delete(r)), S.resolve();
  }
  getOverlaysForCollection(e, t, r) {
    const i = Lt(), s = t.length + 1, a = new M(t.child("")), c = this.overlays.getIteratorFrom(a);
    for (; c.hasNext(); ) {
      const l = c.getNext().value, d = l.getKey();
      if (!t.isPrefixOf(d.path)) break;
      d.path.length === s && l.largestBatchId > r && i.set(l.getKey(), l);
    }
    return S.resolve(i);
  }
  getOverlaysForCollectionGroup(e, t, r, i) {
    let s = new ee((d, p) => d - p);
    const a = this.overlays.getIterator();
    for (; a.hasNext(); ) {
      const d = a.getNext().value;
      if (d.getKey().getCollectionGroup() === t && d.largestBatchId > r) {
        let p = s.get(d.largestBatchId);
        p === null && (p = Lt(), s = s.insert(d.largestBatchId, p)), p.set(d.getKey(), d);
      }
    }
    const c = Lt(), l = s.getIterator();
    for (; l.hasNext() && (l.getNext().value.forEach((d, p) => c.set(d, p)), !(c.size() >= i)); )
      ;
    return S.resolve(c);
  }
  ht(e, t, r) {
    const i = this.overlays.get(r.key);
    if (i !== null) {
      const a = this.Pr.get(i.largestBatchId).delete(r.key);
      this.Pr.set(i.largestBatchId, a);
    }
    this.overlays = this.overlays.insert(r.key, new my(t, r));
    let s = this.Pr.get(t);
    s === void 0 && (s = z(), this.Pr.set(t, s)), this.Pr.set(t, s.add(r.key));
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
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
class Ky {
  constructor() {
    this.sessionToken = _e.EMPTY_BYTE_STRING;
  }
  getSessionToken(e) {
    return S.resolve(this.sessionToken);
  }
  setSessionToken(e, t) {
    return this.sessionToken = t, S.resolve();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Po {
  constructor() {
    this.Ir = new me(le.Tr), // A set of outstanding references to a document sorted by target id.
    this.Er = new me(le.dr);
  }
  /** Returns true if the reference set contains no references. */
  isEmpty() {
    return this.Ir.isEmpty();
  }
  /** Adds a reference to the given document key for the given ID. */
  addReference(e, t) {
    const r = new le(e, t);
    this.Ir = this.Ir.add(r), this.Er = this.Er.add(r);
  }
  /** Add references to the given document keys for the given ID. */
  Ar(e, t) {
    e.forEach((r) => this.addReference(r, t));
  }
  /**
   * Removes a reference to the given document key for the given
   * ID.
   */
  removeReference(e, t) {
    this.Rr(new le(e, t));
  }
  Vr(e, t) {
    e.forEach((r) => this.removeReference(r, t));
  }
  /**
   * Clears all references with a given ID. Calls removeRef() for each key
   * removed.
   */
  mr(e) {
    const t = new M(new Z([])), r = new le(t, e), i = new le(t, e + 1), s = [];
    return this.Er.forEachInRange([r, i], (a) => {
      this.Rr(a), s.push(a.key);
    }), s;
  }
  gr() {
    this.Ir.forEach((e) => this.Rr(e));
  }
  Rr(e) {
    this.Ir = this.Ir.delete(e), this.Er = this.Er.delete(e);
  }
  pr(e) {
    const t = new M(new Z([])), r = new le(t, e), i = new le(t, e + 1);
    let s = z();
    return this.Er.forEachInRange([r, i], (a) => {
      s = s.add(a.key);
    }), s;
  }
  containsKey(e) {
    const t = new le(e, 0), r = this.Ir.firstAfterOrEqual(t);
    return r !== null && e.isEqual(r.key);
  }
}
class le {
  constructor(e, t) {
    this.key = e, this.yr = t;
  }
  /** Compare by key then by ID */
  static Tr(e, t) {
    return M.comparator(e.key, t.key) || G(e.yr, t.yr);
  }
  /** Compare by ID then by key */
  static dr(e, t) {
    return G(e.yr, t.yr) || M.comparator(e.key, t.key);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Gy {
  constructor(e, t) {
    this.indexManager = e, this.referenceDelegate = t, /**
     * The set of all mutations that have been sent but not yet been applied to
     * the backend.
     */
    this.mutationQueue = [], /** Next value to use when assigning sequential IDs to each mutation batch. */
    this.wr = 1, /** An ordered mapping between documents and the mutations batch IDs. */
    this.Sr = new me(le.Tr);
  }
  checkEmpty(e) {
    return S.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(e, t, r, i) {
    const s = this.wr;
    this.wr++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
    const a = new py(s, t, r, i);
    this.mutationQueue.push(a);
    for (const c of i) this.Sr = this.Sr.add(new le(c.key, s)), this.indexManager.addToCollectionParentIndex(e, c.key.path.popLast());
    return S.resolve(a);
  }
  lookupMutationBatch(e, t) {
    return S.resolve(this.br(t));
  }
  getNextMutationBatchAfterBatchId(e, t) {
    const r = t + 1, i = this.Dr(r), s = i < 0 ? 0 : i;
    return S.resolve(this.mutationQueue.length > s ? this.mutationQueue[s] : null);
  }
  getHighestUnacknowledgedBatchId() {
    return S.resolve(this.mutationQueue.length === 0 ? -1 : this.wr - 1);
  }
  getAllMutationBatches(e) {
    return S.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(e, t) {
    const r = new le(t, 0), i = new le(t, Number.POSITIVE_INFINITY), s = [];
    return this.Sr.forEachInRange([r, i], (a) => {
      const c = this.br(a.yr);
      s.push(c);
    }), S.resolve(s);
  }
  getAllMutationBatchesAffectingDocumentKeys(e, t) {
    let r = new me(G);
    return t.forEach((i) => {
      const s = new le(i, 0), a = new le(i, Number.POSITIVE_INFINITY);
      this.Sr.forEachInRange([s, a], (c) => {
        r = r.add(c.yr);
      });
    }), S.resolve(this.Cr(r));
  }
  getAllMutationBatchesAffectingQuery(e, t) {
    const r = t.path, i = r.length + 1;
    let s = r;
    M.isDocumentKey(s) || (s = s.child(""));
    const a = new le(new M(s), 0);
    let c = new me(G);
    return this.Sr.forEachWhile((l) => {
      const d = l.key.path;
      return !!r.isPrefixOf(d) && // Rows with document keys more than one segment longer than the query
      // path can't be matches. For example, a query on 'rooms' can't match
      // the document /rooms/abc/messages/xyx.
      // TODO(mcg): we'll need a different scanner when we implement
      // ancestor queries.
      (d.length === i && (c = c.add(l.yr)), !0);
    }, a), S.resolve(this.Cr(c));
  }
  Cr(e) {
    const t = [];
    return e.forEach((r) => {
      const i = this.br(r);
      i !== null && t.push(i);
    }), t;
  }
  removeMutationBatch(e, t) {
    Y(this.vr(t.batchId, "removed") === 0), this.mutationQueue.shift();
    let r = this.Sr;
    return S.forEach(t.mutations, (i) => {
      const s = new le(i.key, t.batchId);
      return r = r.delete(s), this.referenceDelegate.markPotentiallyOrphaned(e, i.key);
    }).next(() => {
      this.Sr = r;
    });
  }
  xn(e) {
  }
  containsKey(e, t) {
    const r = new le(t, 0), i = this.Sr.firstAfterOrEqual(r);
    return S.resolve(t.isEqual(i && i.key));
  }
  performConsistencyCheck(e) {
    return this.mutationQueue.length, S.resolve();
  }
  /**
   * Finds the index of the given batchId in the mutation queue and asserts that
   * the resulting index is within the bounds of the queue.
   *
   * @param batchId - The batchId to search for
   * @param action - A description of what the caller is doing, phrased in passive
   * form (e.g. "acknowledged" in a routine that acknowledges batches).
   */
  vr(e, t) {
    return this.Dr(e);
  }
  /**
   * Finds the index of the given batchId in the mutation queue. This operation
   * is O(1).
   *
   * @returns The computed index of the batch with the given batchId, based on
   * the state of the queue. Note this index can be negative if the requested
   * batchId has already been removed from the queue or past the end of the
   * queue if the batchId is larger than the last added batch.
   */
  Dr(e) {
    return this.mutationQueue.length === 0 ? 0 : e - this.mutationQueue[0].batchId;
  }
  /**
   * A version of lookupMutationBatch that doesn't return a promise, this makes
   * other functions that uses this code easier to read and more efficient.
   */
  br(e) {
    const t = this.Dr(e);
    return t < 0 || t >= this.mutationQueue.length ? null : this.mutationQueue[t];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Qy {
  /**
   * @param sizer - Used to assess the size of a document. For eager GC, this is
   * expected to just return 0 to avoid unnecessarily doing the work of
   * calculating the size.
   */
  constructor(e) {
    this.Fr = e, /** Underlying cache of documents and their read times. */
    this.docs = function() {
      return new ee(M.comparator);
    }(), /** Size of all cached documents. */
    this.size = 0;
  }
  setIndexManager(e) {
    this.indexManager = e;
  }
  /**
   * Adds the supplied entry to the cache and updates the cache size as appropriate.
   *
   * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()`.
   */
  addEntry(e, t) {
    const r = t.key, i = this.docs.get(r), s = i ? i.size : 0, a = this.Fr(t);
    return this.docs = this.docs.insert(r, {
      document: t.mutableCopy(),
      size: a
    }), this.size += a - s, this.indexManager.addToCollectionParentIndex(e, r.path.popLast());
  }
  /**
   * Removes the specified entry from the cache and updates the cache size as appropriate.
   *
   * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()`.
   */
  removeEntry(e) {
    const t = this.docs.get(e);
    t && (this.docs = this.docs.remove(e), this.size -= t.size);
  }
  getEntry(e, t) {
    const r = this.docs.get(t);
    return S.resolve(r ? r.document.mutableCopy() : Ae.newInvalidDocument(t));
  }
  getEntries(e, t) {
    let r = st();
    return t.forEach((i) => {
      const s = this.docs.get(i);
      r = r.insert(i, s ? s.document.mutableCopy() : Ae.newInvalidDocument(i));
    }), S.resolve(r);
  }
  getDocumentsMatchingQuery(e, t, r, i) {
    let s = st();
    const a = t.path, c = new M(a.child("")), l = this.docs.getIteratorFrom(c);
    for (; l.hasNext(); ) {
      const { key: d, value: { document: p } } = l.getNext();
      if (!a.isPrefixOf(d.path)) break;
      d.path.length > a.length + 1 || N_(D_(p), r) <= 0 || (i.has(p.key) || Oi(t, p)) && (s = s.insert(p.key, p.mutableCopy()));
    }
    return S.resolve(s);
  }
  getAllFromCollectionGroup(e, t, r, i) {
    x();
  }
  Mr(e, t) {
    return S.forEach(this.docs, (r) => t(r));
  }
  newChangeBuffer(e) {
    return new Yy(this);
  }
  getSize(e) {
    return S.resolve(this.size);
  }
}
class Yy extends $y {
  constructor(e) {
    super(), this.ur = e;
  }
  applyChanges(e) {
    const t = [];
    return this.changes.forEach((r, i) => {
      i.isValidDocument() ? t.push(this.ur.addEntry(e, i)) : this.ur.removeEntry(r);
    }), S.waitFor(t);
  }
  getFromCache(e, t) {
    return this.ur.getEntry(e, t);
  }
  getAllFromCache(e, t) {
    return this.ur.getEntries(e, t);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Jy {
  constructor(e) {
    this.persistence = e, /**
     * Maps a target to the data about that target
     */
    this.Or = new Tn((t) => To(t), wo), /** The last received snapshot version. */
    this.lastRemoteSnapshotVersion = U.min(), /** The highest numbered target ID encountered. */
    this.highestTargetId = 0, /** The highest sequence number encountered. */
    this.Nr = 0, /**
     * A ordered bidirectional mapping between documents and the remote target
     * IDs.
     */
    this.Lr = new Po(), this.targetCount = 0, this.Br = mn.Ln();
  }
  forEachTarget(e, t) {
    return this.Or.forEach((r, i) => t(i)), S.resolve();
  }
  getLastRemoteSnapshotVersion(e) {
    return S.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(e) {
    return S.resolve(this.Nr);
  }
  allocateTargetId(e) {
    return this.highestTargetId = this.Br.next(), S.resolve(this.highestTargetId);
  }
  setTargetsMetadata(e, t, r) {
    return r && (this.lastRemoteSnapshotVersion = r), t > this.Nr && (this.Nr = t), S.resolve();
  }
  Qn(e) {
    this.Or.set(e.target, e);
    const t = e.targetId;
    t > this.highestTargetId && (this.Br = new mn(t), this.highestTargetId = t), e.sequenceNumber > this.Nr && (this.Nr = e.sequenceNumber);
  }
  addTargetData(e, t) {
    return this.Qn(t), this.targetCount += 1, S.resolve();
  }
  updateTargetData(e, t) {
    return this.Qn(t), S.resolve();
  }
  removeTargetData(e, t) {
    return this.Or.delete(t.target), this.Lr.mr(t.targetId), this.targetCount -= 1, S.resolve();
  }
  removeTargets(e, t, r) {
    let i = 0;
    const s = [];
    return this.Or.forEach((a, c) => {
      c.sequenceNumber <= t && r.get(c.targetId) === null && (this.Or.delete(a), s.push(this.removeMatchingKeysForTargetId(e, c.targetId)), i++);
    }), S.waitFor(s).next(() => i);
  }
  getTargetCount(e) {
    return S.resolve(this.targetCount);
  }
  getTargetData(e, t) {
    const r = this.Or.get(t) || null;
    return S.resolve(r);
  }
  addMatchingKeys(e, t, r) {
    return this.Lr.Ar(t, r), S.resolve();
  }
  removeMatchingKeys(e, t, r) {
    this.Lr.Vr(t, r);
    const i = this.persistence.referenceDelegate, s = [];
    return i && t.forEach((a) => {
      s.push(i.markPotentiallyOrphaned(e, a));
    }), S.waitFor(s);
  }
  removeMatchingKeysForTargetId(e, t) {
    return this.Lr.mr(t), S.resolve();
  }
  getMatchingKeysForTargetId(e, t) {
    const r = this.Lr.pr(t);
    return S.resolve(r);
  }
  containsKey(e, t) {
    return S.resolve(this.Lr.containsKey(t));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Xy {
  /**
   * The constructor accepts a factory for creating a reference delegate. This
   * allows both the delegate and this instance to have strong references to
   * each other without having nullable fields that would then need to be
   * checked or asserted on every access.
   */
  constructor(e, t) {
    this.kr = {}, this.overlays = {}, this.qr = new yo(0), this.Qr = !1, this.Qr = !0, this.Kr = new Ky(), this.referenceDelegate = e(this), this.$r = new Jy(this), this.indexManager = new By(), this.remoteDocumentCache = function(i) {
      return new Qy(i);
    }((r) => this.referenceDelegate.Ur(r)), this.serializer = new Uy(t), this.Wr = new Hy(this.serializer);
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return this.Qr = !1, Promise.resolve();
  }
  get started() {
    return this.Qr;
  }
  setDatabaseDeletedListener() {
  }
  setNetworkEnabled() {
  }
  getIndexManager(e) {
    return this.indexManager;
  }
  getDocumentOverlayCache(e) {
    let t = this.overlays[e.toKey()];
    return t || (t = new Wy(), this.overlays[e.toKey()] = t), t;
  }
  getMutationQueue(e, t) {
    let r = this.kr[e.toKey()];
    return r || (r = new Gy(t, this.referenceDelegate), this.kr[e.toKey()] = r), r;
  }
  getGlobalsCache() {
    return this.Kr;
  }
  getTargetCache() {
    return this.$r;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.Wr;
  }
  runTransaction(e, t, r) {
    N("MemoryPersistence", "Starting transaction:", e);
    const i = new Zy(this.qr.next());
    return this.referenceDelegate.Gr(), r(i).next((s) => this.referenceDelegate.zr(i).next(() => s)).toPromise().then((s) => (i.raiseOnCommittedEvent(), s));
  }
  jr(e, t) {
    return S.or(Object.values(this.kr).map((r) => () => r.containsKey(e, t)));
  }
}
class Zy extends V_ {
  constructor(e) {
    super(), this.currentSequenceNumber = e;
  }
}
class Co {
  constructor(e) {
    this.persistence = e, /** Tracks all documents that are active in Query views. */
    this.Hr = new Po(), /** The list of documents that are potentially GCed after each transaction. */
    this.Jr = null;
  }
  static Yr(e) {
    return new Co(e);
  }
  get Zr() {
    if (this.Jr) return this.Jr;
    throw x();
  }
  addReference(e, t, r) {
    return this.Hr.addReference(r, t), this.Zr.delete(r.toString()), S.resolve();
  }
  removeReference(e, t, r) {
    return this.Hr.removeReference(r, t), this.Zr.add(r.toString()), S.resolve();
  }
  markPotentiallyOrphaned(e, t) {
    return this.Zr.add(t.toString()), S.resolve();
  }
  removeTarget(e, t) {
    this.Hr.mr(t.targetId).forEach((i) => this.Zr.add(i.toString()));
    const r = this.persistence.getTargetCache();
    return r.getMatchingKeysForTargetId(e, t.targetId).next((i) => {
      i.forEach((s) => this.Zr.add(s.toString()));
    }).next(() => r.removeTargetData(e, t));
  }
  Gr() {
    this.Jr = /* @__PURE__ */ new Set();
  }
  zr(e) {
    const t = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return S.forEach(this.Zr, (r) => {
      const i = M.fromPath(r);
      return this.Xr(e, i).next((s) => {
        s || t.removeEntry(i, U.min());
      });
    }).next(() => (this.Jr = null, t.apply(e)));
  }
  updateLimboDocument(e, t) {
    return this.Xr(e, t).next((r) => {
      r ? this.Zr.delete(t.toString()) : this.Zr.add(t.toString());
    });
  }
  Ur(e) {
    return 0;
  }
  Xr(e, t) {
    return S.or([() => S.resolve(this.Hr.containsKey(t)), () => this.persistence.getTargetCache().containsKey(e, t), () => this.persistence.jr(e, t)]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class ko {
  constructor(e, t, r, i) {
    this.targetId = e, this.fromCache = t, this.Ki = r, this.$i = i;
  }
  static Ui(e, t) {
    let r = z(), i = z();
    for (const s of t.docChanges) switch (s.type) {
      case 0:
        r = r.add(s.doc.key);
        break;
      case 1:
        i = i.add(s.doc.key);
    }
    return new ko(e, t.fromCache, r, i);
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
class ev {
  constructor() {
    this._documentReadCount = 0;
  }
  get documentReadCount() {
    return this._documentReadCount;
  }
  incrementDocumentReadCount(e) {
    this._documentReadCount += e;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class tv {
  constructor() {
    this.Wi = !1, this.Gi = !1, /**
     * SDK only decides whether it should create index when collection size is
     * larger than this.
     */
    this.zi = 100, this.ji = /**
    * This cost represents the evaluation result of
    * (([index, docKey] + [docKey, docContent]) per document in the result set)
    * / ([docKey, docContent] per documents in full collection scan) coming from
    * experiment [enter PR experiment URL here].
    */
    function() {
      return Df() ? 8 : L_(ge()) > 0 ? 6 : 4;
    }();
  }
  /** Sets the document view to query against. */
  initialize(e, t) {
    this.Hi = e, this.indexManager = t, this.Wi = !0;
  }
  /** Returns all local documents matching the specified query. */
  getDocumentsMatchingQuery(e, t, r, i) {
    const s = {
      result: null
    };
    return this.Ji(e, t).next((a) => {
      s.result = a;
    }).next(() => {
      if (!s.result) return this.Yi(e, t, i, r).next((a) => {
        s.result = a;
      });
    }).next(() => {
      if (s.result) return;
      const a = new ev();
      return this.Zi(e, t, a).next((c) => {
        if (s.result = c, this.Gi) return this.Xi(e, t, a, c.size);
      });
    }).next(() => s.result);
  }
  Xi(e, t, r, i) {
    return r.documentReadCount < this.zi ? ($n() <= H.DEBUG && N("QueryEngine", "SDK will not create cache indexes for query:", nn(t), "since it only creates cache indexes for collection contains", "more than or equal to", this.zi, "documents"), S.resolve()) : ($n() <= H.DEBUG && N("QueryEngine", "Query:", nn(t), "scans", r.documentReadCount, "local documents and returns", i, "documents as results."), r.documentReadCount > this.ji * i ? ($n() <= H.DEBUG && N("QueryEngine", "The SDK decides to create cache indexes for query:", nn(t), "as using cache indexes may help improve performance."), this.indexManager.createTargetIndexes(e, ze(t))) : S.resolve());
  }
  /**
   * Performs an indexed query that evaluates the query based on a collection's
   * persisted index values. Returns `null` if an index is not available.
   */
  Ji(e, t) {
    if (jc(t))
      return S.resolve(null);
    let r = ze(t);
    return this.indexManager.getIndexType(e, r).next((i) => i === 0 ? null : (t.limit !== null && i === 1 && // We cannot apply a limit for targets that are served using a partial
    // index. If a partial index will be used to serve the target, the
    // query may return a superset of documents that match the target
    // (e.g. if the index doesn't include all the target's filters), or
    // may return the correct set of documents in the wrong order (e.g. if
    // the index doesn't include a segment for one of the orderBys).
    // Therefore, a limit should not be applied in such cases.
    (t = zs(
      t,
      null,
      "F"
      /* LimitType.First */
    ), r = ze(t)), this.indexManager.getDocumentsMatchingTarget(e, r).next((s) => {
      const a = z(...s);
      return this.Hi.getDocuments(e, a).next((c) => this.indexManager.getMinOffset(e, r).next((l) => {
        const d = this.es(t, c);
        return this.ts(t, d, a, l.readTime) ? this.Ji(e, zs(
          t,
          null,
          "F"
          /* LimitType.First */
        )) : this.ns(e, d, t, l);
      }));
    })));
  }
  /**
   * Performs a query based on the target's persisted query mapping. Returns
   * `null` if the mapping is not available or cannot be used.
   */
  Yi(e, t, r, i) {
    return jc(t) || i.isEqual(U.min()) ? S.resolve(null) : this.Hi.getDocuments(e, r).next((s) => {
      const a = this.es(t, s);
      return this.ts(t, a, r, i) ? S.resolve(null) : ($n() <= H.DEBUG && N("QueryEngine", "Re-using previous result from %s to execute query: %s", i.toString(), nn(t)), this.ns(e, a, t, k_(i, -1)).next((c) => c));
    });
  }
  /** Applies the query filter and sorting to the provided documents.  */
  es(e, t) {
    let r = new me(jl(e));
    return t.forEach((i, s) => {
      Oi(e, s) && (r = r.add(s));
    }), r;
  }
  /**
   * Determines if a limit query needs to be refilled from cache, making it
   * ineligible for index-free execution.
   *
   * @param query - The query.
   * @param sortedPreviousResults - The documents that matched the query when it
   * was last synchronized, sorted by the query's comparator.
   * @param remoteKeys - The document keys that matched the query at the last
   * snapshot.
   * @param limboFreeSnapshotVersion - The version of the snapshot when the
   * query was last synchronized.
   */
  ts(e, t, r, i) {
    if (e.limit === null)
      return !1;
    if (r.size !== t.size)
      return !0;
    const s = e.limitType === "F" ? t.last() : t.first();
    return !!s && (s.hasPendingWrites || s.version.compareTo(i) > 0);
  }
  Zi(e, t, r) {
    return $n() <= H.DEBUG && N("QueryEngine", "Using full collection scan to execute query:", nn(t)), this.Hi.getDocumentsMatchingQuery(e, t, wt.min(), r);
  }
  /**
   * Combines the results from an indexed execution with the remaining documents
   * that have not yet been indexed.
   */
  ns(e, t, r, i) {
    return this.Hi.getDocumentsMatchingQuery(e, r, i).next((s) => (
      // Merge with existing results
      (t.forEach((a) => {
        s = s.insert(a.key, a);
      }), s)
    ));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class nv {
  constructor(e, t, r, i) {
    this.persistence = e, this.rs = t, this.serializer = i, /**
     * Maps a targetID to data about its target.
     *
     * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
     * of `applyRemoteEvent()` idempotent.
     */
    this.ss = new ee(G), /** Maps a target to its targetID. */
    // TODO(wuandy): Evaluate if TargetId can be part of Target.
    this.os = new Tn((s) => To(s), wo), /**
     * A per collection group index of the last read time processed by
     * `getNewDocumentChanges()`.
     *
     * PORTING NOTE: This is only used for multi-tab synchronization.
     */
    this._s = /* @__PURE__ */ new Map(), this.us = e.getRemoteDocumentCache(), this.$r = e.getTargetCache(), this.Wr = e.getBundleCache(), this.cs(r);
  }
  cs(e) {
    this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e), this.indexManager = this.persistence.getIndexManager(e), this.mutationQueue = this.persistence.getMutationQueue(e, this.indexManager), this.localDocuments = new zy(this.us, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.us.setIndexManager(this.indexManager), this.rs.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(e) {
    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (t) => e.collect(t, this.ss));
  }
}
function rv(n, e, t, r) {
  return new nv(n, e, t, r);
}
async function lh(n, e) {
  const t = F(n);
  return await t.persistence.runTransaction("Handle user change", "readonly", (r) => {
    let i;
    return t.mutationQueue.getAllMutationBatches(r).next((s) => (i = s, t.cs(e), t.mutationQueue.getAllMutationBatches(r))).next((s) => {
      const a = [], c = [];
      let l = z();
      for (const d of i) {
        a.push(d.batchId);
        for (const p of d.mutations) l = l.add(p.key);
      }
      for (const d of s) {
        c.push(d.batchId);
        for (const p of d.mutations) l = l.add(p.key);
      }
      return t.localDocuments.getDocuments(r, l).next((d) => ({
        ls: d,
        removedBatchIds: a,
        addedBatchIds: c
      }));
    });
  });
}
function iv(n, e) {
  const t = F(n);
  return t.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (r) => {
    const i = e.batch.keys(), s = t.us.newChangeBuffer({
      trackRemovals: !0
    });
    return function(c, l, d, p) {
      const y = d.batch, A = y.keys();
      let b = S.resolve();
      return A.forEach((D) => {
        b = b.next(() => p.getEntry(l, D)).next((O) => {
          const C = d.docVersions.get(D);
          Y(C !== null), O.version.compareTo(C) < 0 && (y.applyToRemoteDocument(O, d), O.isValidDocument() && // We use the commitVersion as the readTime rather than the
          // document's updateTime since the updateTime is not advanced
          // for updates that do not modify the underlying document.
          (O.setReadTime(d.commitVersion), p.addEntry(O)));
        });
      }), b.next(() => c.mutationQueue.removeMutationBatch(l, y));
    }(t, r, e, s).next(() => s.apply(r)).next(() => t.mutationQueue.performConsistencyCheck(r)).next(() => t.documentOverlayCache.removeOverlaysForBatchId(r, i, e.batch.batchId)).next(() => t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r, function(c) {
      let l = z();
      for (let d = 0; d < c.mutationResults.length; ++d)
        c.mutationResults[d].transformResults.length > 0 && (l = l.add(c.batch.mutations[d].key));
      return l;
    }(e))).next(() => t.localDocuments.getDocuments(r, i));
  });
}
function hh(n) {
  const e = F(n);
  return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (t) => e.$r.getLastRemoteSnapshotVersion(t));
}
function sv(n, e) {
  const t = F(n), r = e.snapshotVersion;
  let i = t.ss;
  return t.persistence.runTransaction("Apply remote event", "readwrite-primary", (s) => {
    const a = t.us.newChangeBuffer({
      trackRemovals: !0
    });
    i = t.ss;
    const c = [];
    e.targetChanges.forEach((p, y) => {
      const A = i.get(y);
      if (!A) return;
      c.push(t.$r.removeMatchingKeys(s, p.removedDocuments, y).next(() => t.$r.addMatchingKeys(s, p.addedDocuments, y)));
      let b = A.withSequenceNumber(s.currentSequenceNumber);
      e.targetMismatches.get(y) !== null ? b = b.withResumeToken(_e.EMPTY_BYTE_STRING, U.min()).withLastLimboFreeSnapshotVersion(U.min()) : p.resumeToken.approximateByteSize() > 0 && (b = b.withResumeToken(p.resumeToken, r)), i = i.insert(y, b), // Update the target data if there are target changes (or if
      // sufficient time has passed since the last update).
      /**
      * Returns true if the newTargetData should be persisted during an update of
      * an active target. TargetData should always be persisted when a target is
      * being released and should not call this function.
      *
      * While the target is active, TargetData updates can be omitted when nothing
      * about the target has changed except metadata like the resume token or
      * snapshot version. Occasionally it's worth the extra write to prevent these
      * values from getting too stale after a crash, but this doesn't have to be
      * too frequent.
      */
      function(O, C, B) {
        return O.resumeToken.approximateByteSize() === 0 || C.snapshotVersion.toMicroseconds() - O.snapshotVersion.toMicroseconds() >= 3e8 ? !0 : B.addedDocuments.size + B.modifiedDocuments.size + B.removedDocuments.size > 0;
      }(A, b, p) && c.push(t.$r.updateTargetData(s, b));
    });
    let l = st(), d = z();
    if (e.documentUpdates.forEach((p) => {
      e.resolvedLimboDocuments.has(p) && c.push(t.persistence.referenceDelegate.updateLimboDocument(s, p));
    }), // Each loop iteration only affects its "own" doc, so it's safe to get all
    // the remote documents in advance in a single call.
    c.push(ov(s, a, e.documentUpdates).next((p) => {
      l = p.hs, d = p.Ps;
    })), !r.isEqual(U.min())) {
      const p = t.$r.getLastRemoteSnapshotVersion(s).next((y) => t.$r.setTargetsMetadata(s, s.currentSequenceNumber, r));
      c.push(p);
    }
    return S.waitFor(c).next(() => a.apply(s)).next(() => t.localDocuments.getLocalViewOfDocuments(s, l, d)).next(() => l);
  }).then((s) => (t.ss = i, s));
}
function ov(n, e, t) {
  let r = z(), i = z();
  return t.forEach((s) => r = r.add(s)), e.getEntries(n, r).next((s) => {
    let a = st();
    return t.forEach((c, l) => {
      const d = s.get(c);
      l.isFoundDocument() !== d.isFoundDocument() && (i = i.add(c)), // Note: The order of the steps below is important, since we want
      // to ensure that rejected limbo resolutions (which fabricate
      // NoDocuments with SnapshotVersion.min()) never add documents to
      // cache.
      l.isNoDocument() && l.version.isEqual(U.min()) ? (
        // NoDocuments with SnapshotVersion.min() are used in manufactured
        // events. We remove these documents from cache since we lost
        // access.
        (e.removeEntry(c, l.readTime), a = a.insert(c, l))
      ) : !d.isValidDocument() || l.version.compareTo(d.version) > 0 || l.version.compareTo(d.version) === 0 && d.hasPendingWrites ? (e.addEntry(l), a = a.insert(c, l)) : N("LocalStore", "Ignoring outdated watch update for ", c, ". Current version:", d.version, " Watch version:", l.version);
    }), {
      hs: a,
      Ps: i
    };
  });
}
function av(n, e) {
  const t = F(n);
  return t.persistence.runTransaction("Get next mutation batch", "readonly", (r) => (e === void 0 && (e = -1), t.mutationQueue.getNextMutationBatchAfterBatchId(r, e)));
}
function cv(n, e) {
  const t = F(n);
  return t.persistence.runTransaction("Allocate target", "readwrite", (r) => {
    let i;
    return t.$r.getTargetData(r, e).next((s) => s ? (
      // This target has been listened to previously, so reuse the
      // previous targetID.
      // TODO(mcg): freshen last accessed date?
      (i = s, S.resolve(i))
    ) : t.$r.allocateTargetId(r).next((a) => (i = new _t(e, a, "TargetPurposeListen", r.currentSequenceNumber), t.$r.addTargetData(r, i).next(() => i))));
  }).then((r) => {
    const i = t.ss.get(r.targetId);
    return (i === null || r.snapshotVersion.compareTo(i.snapshotVersion) > 0) && (t.ss = t.ss.insert(r.targetId, r), t.os.set(e, r.targetId)), r;
  });
}
async function Qs(n, e, t) {
  const r = F(n), i = r.ss.get(e), s = t ? "readwrite" : "readwrite-primary";
  try {
    t || await r.persistence.runTransaction("Release target", s, (a) => r.persistence.referenceDelegate.removeTarget(a, i));
  } catch (a) {
    if (!Er(a)) throw a;
    N("LocalStore", `Failed to update sequence numbers for target ${e}: ${a}`);
  }
  r.ss = r.ss.remove(e), r.os.delete(i.target);
}
function Xc(n, e, t) {
  const r = F(n);
  let i = U.min(), s = z();
  return r.persistence.runTransaction(
    "Execute query",
    "readwrite",
    // Use readwrite instead of readonly so indexes can be created
    // Use readwrite instead of readonly so indexes can be created
    (a) => function(l, d, p) {
      const y = F(l), A = y.os.get(p);
      return A !== void 0 ? S.resolve(y.ss.get(A)) : y.$r.getTargetData(d, p);
    }(r, a, ze(e)).next((c) => {
      if (c) return i = c.lastLimboFreeSnapshotVersion, r.$r.getMatchingKeysForTargetId(a, c.targetId).next((l) => {
        s = l;
      });
    }).next(() => r.rs.getDocumentsMatchingQuery(a, e, t ? i : U.min(), t ? s : z())).next((c) => (uv(r, Z_(e), c), {
      documents: c,
      Is: s
    }))
  );
}
function uv(n, e, t) {
  let r = n._s.get(e) || U.min();
  t.forEach((i, s) => {
    s.readTime.compareTo(r) > 0 && (r = s.readTime);
  }), n._s.set(e, r);
}
class Zc {
  constructor() {
    this.activeTargetIds = sy();
  }
  Vs(e) {
    this.activeTargetIds = this.activeTargetIds.add(e);
  }
  fs(e) {
    this.activeTargetIds = this.activeTargetIds.delete(e);
  }
  /**
   * Converts this entry into a JSON-encoded format we can use for WebStorage.
   * Does not encode `clientId` as it is part of the key in WebStorage.
   */
  Rs() {
    const e = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now()
    };
    return JSON.stringify(e);
  }
}
class lv {
  constructor() {
    this.io = new Zc(), this.so = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
  }
  addPendingMutation(e) {
  }
  updateMutationState(e, t, r) {
  }
  addLocalQueryTarget(e) {
    return this.io.Vs(e), this.so[e] || "not-current";
  }
  updateQueryState(e, t, r) {
    this.so[e] = t;
  }
  removeLocalQueryTarget(e) {
    this.io.fs(e);
  }
  isLocalQueryTarget(e) {
    return this.io.activeTargetIds.has(e);
  }
  clearQueryState(e) {
    delete this.so[e];
  }
  getAllActiveQueryTargets() {
    return this.io.activeTargetIds;
  }
  isActiveQueryTarget(e) {
    return this.io.activeTargetIds.has(e);
  }
  start() {
    return this.io = new Zc(), Promise.resolve();
  }
  handleUserChange(e, t, r) {
  }
  setOnlineState(e) {
  }
  shutdown() {
  }
  writeSequenceNumber(e) {
  }
  notifyBundleLoaded(e) {
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class hv {
  oo(e) {
  }
  shutdown() {
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class eu {
  constructor() {
    this._o = () => this.ao(), this.uo = () => this.co(), this.lo = [], this.ho();
  }
  oo(e) {
    this.lo.push(e);
  }
  shutdown() {
    window.removeEventListener("online", this._o), window.removeEventListener("offline", this.uo);
  }
  ho() {
    window.addEventListener("online", this._o), window.addEventListener("offline", this.uo);
  }
  ao() {
    N("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (const e of this.lo) e(
      0
      /* NetworkStatus.AVAILABLE */
    );
  }
  co() {
    N("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (const e of this.lo) e(
      1
      /* NetworkStatus.UNAVAILABLE */
    );
  }
  // TODO(chenbrian): Consider passing in window either into this component or
  // here for testing via FakeWindow.
  /** Checks that all used attributes of window are available. */
  static D() {
    return typeof window < "u" && window.addEventListener !== void 0 && window.removeEventListener !== void 0;
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
let Qr = null;
function Ts() {
  return Qr === null ? Qr = function() {
    return 268435456 + Math.round(2147483648 * Math.random());
  }() : Qr++, "0x" + Qr.toString(16);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const dv = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery"
};
/**
 * @license
 * Copyright 2017 Google LLC
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
class fv {
  constructor(e) {
    this.Po = e.Po, this.Io = e.Io;
  }
  To(e) {
    this.Eo = e;
  }
  Ao(e) {
    this.Ro = e;
  }
  Vo(e) {
    this.mo = e;
  }
  onMessage(e) {
    this.fo = e;
  }
  close() {
    this.Io();
  }
  send(e) {
    this.Po(e);
  }
  po() {
    this.Eo();
  }
  yo() {
    this.Ro();
  }
  wo(e) {
    this.mo(e);
  }
  So(e) {
    this.fo(e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
const Te = "WebChannelConnection";
class pv extends /**
 * Base class for all Rest-based connections to the backend (WebChannel and
 * HTTP).
 */
class {
  constructor(t) {
    this.databaseInfo = t, this.databaseId = t.databaseId;
    const r = t.ssl ? "https" : "http", i = encodeURIComponent(this.databaseId.projectId), s = encodeURIComponent(this.databaseId.database);
    this.bo = r + "://" + t.host, this.Do = `projects/${i}/databases/${s}`, this.Co = this.databaseId.database === "(default)" ? `project_id=${i}` : `project_id=${i}&database_id=${s}`;
  }
  get vo() {
    return !1;
  }
  Fo(t, r, i, s, a) {
    const c = Ts(), l = this.Mo(t, r.toUriEncodedString());
    N("RestConnection", `Sending RPC '${t}' ${c}:`, l, i);
    const d = {
      "google-cloud-resource-prefix": this.Do,
      "x-goog-request-params": this.Co
    };
    return this.xo(d, s, a), this.Oo(t, l, d, i).then((p) => (N("RestConnection", `Received RPC '${t}' ${c}: `, p), p), (p) => {
      throw hn("RestConnection", `RPC '${t}' ${c} failed with error: `, p, "url: ", l, "request:", i), p;
    });
  }
  No(t, r, i, s, a, c) {
    return this.Fo(t, r, i, s, a);
  }
  /**
   * Modifies the headers for a request, adding any authorization token if
   * present and any additional headers for the request.
   */
  xo(t, r, i) {
    t["X-Goog-Api-Client"] = // SDK_VERSION is updated to different value at runtime depending on the entry point,
    // so we need to get its value when we need it in a function.
    function() {
      return "gl-js/ fire/" + En;
    }(), // Content-Type: text/plain will avoid preflight requests which might
    // mess with CORS and redirects by proxies. If we add custom headers
    // we will need to change this code to potentially use the $httpOverwrite
    // parameter supported by ESF to avoid triggering preflight requests.
    t["Content-Type"] = "text/plain", this.databaseInfo.appId && (t["X-Firebase-GMPID"] = this.databaseInfo.appId), r && r.headers.forEach((s, a) => t[a] = s), i && i.headers.forEach((s, a) => t[a] = s);
  }
  Mo(t, r) {
    const i = dv[t];
    return `${this.bo}/v1/${r}:${i}`;
  }
  /**
   * Closes and cleans up any resources associated with the connection. This
   * implementation is a no-op because there are no resources associated
   * with the RestConnection that need to be cleaned up.
   */
  terminate() {
  }
} {
  constructor(e) {
    super(e), this.forceLongPolling = e.forceLongPolling, this.autoDetectLongPolling = e.autoDetectLongPolling, this.useFetchStreams = e.useFetchStreams, this.longPollingOptions = e.longPollingOptions;
  }
  Oo(e, t, r, i) {
    const s = Ts();
    return new Promise((a, c) => {
      const l = new wl();
      l.setWithCredentials(!0), l.listenOnce(Rl.COMPLETE, () => {
        try {
          switch (l.getLastErrorCode()) {
            case ni.NO_ERROR:
              const p = l.getResponseJson();
              N(Te, `XHR for RPC '${e}' ${s} received:`, JSON.stringify(p)), a(p);
              break;
            case ni.TIMEOUT:
              N(Te, `RPC '${e}' ${s} timed out`), c(new L(P.DEADLINE_EXCEEDED, "Request time out"));
              break;
            case ni.HTTP_ERROR:
              const y = l.getStatus();
              if (N(Te, `RPC '${e}' ${s} failed with status:`, y, "response text:", l.getResponseText()), y > 0) {
                let A = l.getResponseJson();
                Array.isArray(A) && (A = A[0]);
                const b = A == null ? void 0 : A.error;
                if (b && b.status && b.message) {
                  const D = function(C) {
                    const B = C.toLowerCase().replace(/_/g, "-");
                    return Object.values(P).indexOf(B) >= 0 ? B : P.UNKNOWN;
                  }(b.status);
                  c(new L(D, b.message));
                } else c(new L(P.UNKNOWN, "Server responded with status " + l.getStatus()));
              } else
                c(new L(P.UNAVAILABLE, "Connection failed."));
              break;
            default:
              x();
          }
        } finally {
          N(Te, `RPC '${e}' ${s} completed.`);
        }
      });
      const d = JSON.stringify(i);
      N(Te, `RPC '${e}' ${s} sending request:`, i), l.send(t, "POST", d, r, 15);
    });
  }
  Lo(e, t, r) {
    const i = Ts(), s = [this.bo, "/", "google.firestore.v1.Firestore", "/", e, "/channel"], a = Pl(), c = Sl(), l = {
      // Required for backend stickiness, routing behavior is based on this
      // parameter.
      httpSessionIdParam: "gsessionid",
      initMessageHeaders: {},
      messageUrlParams: {
        // This param is used to improve routing and project isolation by the
        // backend and must be included in every request.
        database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
      },
      sendRawJson: !0,
      supportsCrossDomainXhr: !0,
      internalChannelParams: {
        // Override the default timeout (randomized between 10-20 seconds) since
        // a large write batch on a slow internet connection may take a long
        // time to send to the backend. Rather than have WebChannel impose a
        // tight timeout which could lead to infinite timeouts and retries, we
        // set it very large (5-10 minutes) and rely on the browser's builtin
        // timeouts to kick in if the request isn't working.
        forwardChannelRequestTimeoutMs: 6e5
      },
      forceLongPolling: this.forceLongPolling,
      detectBufferingProxy: this.autoDetectLongPolling
    }, d = this.longPollingOptions.timeoutSeconds;
    d !== void 0 && (l.longPollingTimeout = Math.round(1e3 * d)), this.useFetchStreams && (l.xmlHttpFactory = new Al({})), this.xo(l.initMessageHeaders, t, r), // Sending the custom headers we just added to request.initMessageHeaders
    // (Authorization, etc.) will trigger the browser to make a CORS preflight
    // request because the XHR will no longer meet the criteria for a "simple"
    // CORS request:
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
    // Therefore to avoid the CORS preflight request (an extra network
    // roundtrip), we use the encodeInitMessageHeaders option to specify that
    // the headers should instead be encoded in the request's POST payload,
    // which is recognized by the webchannel backend.
    l.encodeInitMessageHeaders = !0;
    const p = s.join("");
    N(Te, `Creating RPC '${e}' stream ${i}: ${p}`, l);
    const y = a.createWebChannel(p, l);
    let A = !1, b = !1;
    const D = new fv({
      Po: (C) => {
        b ? N(Te, `Not sending because RPC '${e}' stream ${i} is closed:`, C) : (A || (N(Te, `Opening RPC '${e}' stream ${i} transport.`), y.open(), A = !0), N(Te, `RPC '${e}' stream ${i} sending:`, C), y.send(C));
      },
      Io: () => y.close()
    }), O = (C, B, $) => {
      C.listen(B, (j) => {
        try {
          $(j);
        } catch (q) {
          setTimeout(() => {
            throw q;
          }, 0);
        }
      });
    };
    return O(y, Wn.EventType.OPEN, () => {
      b || (N(Te, `RPC '${e}' stream ${i} transport opened.`), D.po());
    }), O(y, Wn.EventType.CLOSE, () => {
      b || (b = !0, N(Te, `RPC '${e}' stream ${i} transport closed`), D.wo());
    }), O(y, Wn.EventType.ERROR, (C) => {
      b || (b = !0, hn(Te, `RPC '${e}' stream ${i} transport errored:`, C), D.wo(new L(P.UNAVAILABLE, "The operation could not be completed")));
    }), O(y, Wn.EventType.MESSAGE, (C) => {
      var B;
      if (!b) {
        const $ = C.data[0];
        Y(!!$);
        const j = $, q = j.error || ((B = j[0]) === null || B === void 0 ? void 0 : B.error);
        if (q) {
          N(Te, `RPC '${e}' stream ${i} received error:`, q);
          const he = q.status;
          let J = (
            /**
            * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
            *
            * @returns The Code equivalent to the given status string or undefined if
            *     there is no match.
            */
            function(_) {
              const v = se[_];
              if (v !== void 0) return eh(v);
            }(he)
          ), E = q.message;
          J === void 0 && (J = P.INTERNAL, E = "Unknown error status: " + he + " with message " + q.message), // Mark closed so no further events are propagated
          b = !0, D.wo(new L(J, E)), y.close();
        } else N(Te, `RPC '${e}' stream ${i} received:`, $), D.So($);
      }
    }), O(c, bl.STAT_EVENT, (C) => {
      C.stat === Fs.PROXY ? N(Te, `RPC '${e}' stream ${i} detected buffering proxy`) : C.stat === Fs.NOPROXY && N(Te, `RPC '${e}' stream ${i} detected no buffering proxy`);
    }), setTimeout(() => {
      D.yo();
    }, 0), D;
  }
}
function ws() {
  return typeof document < "u" ? document : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function xi(n) {
  return new Ay(
    n,
    /* useProto3Json= */
    !0
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class dh {
  constructor(e, t, r = 1e3, i = 1.5, s = 6e4) {
    this.ai = e, this.timerId = t, this.Bo = r, this.ko = i, this.qo = s, this.Qo = 0, this.Ko = null, /** The last backoff attempt, as epoch milliseconds. */
    this.$o = Date.now(), this.reset();
  }
  /**
   * Resets the backoff delay.
   *
   * The very next backoffAndWait() will have no delay. If it is called again
   * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
   * subsequent ones will increase according to the backoffFactor.
   */
  reset() {
    this.Qo = 0;
  }
  /**
   * Resets the backoff delay to the maximum delay (e.g. for use after a
   * RESOURCE_EXHAUSTED error).
   */
  Uo() {
    this.Qo = this.qo;
  }
  /**
   * Returns a promise that resolves after currentDelayMs, and increases the
   * delay for any subsequent attempts. If there was a pending backoff operation
   * already, it will be canceled.
   */
  Wo(e) {
    this.cancel();
    const t = Math.floor(this.Qo + this.Go()), r = Math.max(0, Date.now() - this.$o), i = Math.max(0, t - r);
    i > 0 && N("ExponentialBackoff", `Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`), this.Ko = this.ai.enqueueAfterDelay(this.timerId, i, () => (this.$o = Date.now(), e())), // Apply backoff factor to determine next delay and ensure it is within
    // bounds.
    this.Qo *= this.ko, this.Qo < this.Bo && (this.Qo = this.Bo), this.Qo > this.qo && (this.Qo = this.qo);
  }
  zo() {
    this.Ko !== null && (this.Ko.skipDelay(), this.Ko = null);
  }
  cancel() {
    this.Ko !== null && (this.Ko.cancel(), this.Ko = null);
  }
  /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
  Go() {
    return (Math.random() - 0.5) * this.Qo;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class fh {
  constructor(e, t, r, i, s, a, c, l) {
    this.ai = e, this.jo = r, this.Ho = i, this.connection = s, this.authCredentialsProvider = a, this.appCheckCredentialsProvider = c, this.listener = l, this.state = 0, /**
     * A close count that's incremented every time the stream is closed; used by
     * getCloseGuardedDispatcher() to invalidate callbacks that happen after
     * close.
     */
    this.Jo = 0, this.Yo = null, this.Zo = null, this.stream = null, /**
     * Count of response messages received.
     */
    this.Xo = 0, this.e_ = new dh(e, t);
  }
  /**
   * Returns true if start() has been called and no error has occurred. True
   * indicates the stream is open or in the process of opening (which
   * encompasses respecting backoff, getting auth tokens, and starting the
   * actual RPC). Use isOpen() to determine if the stream is open and ready for
   * outbound requests.
   */
  t_() {
    return this.state === 1 || this.state === 5 || this.n_();
  }
  /**
   * Returns true if the underlying RPC is open (the onOpen() listener has been
   * called) and the stream is ready for outbound requests.
   */
  n_() {
    return this.state === 2 || this.state === 3;
  }
  /**
   * Starts the RPC. Only allowed if isStarted() returns false. The stream is
   * not immediately ready for use: onOpen() will be invoked when the RPC is
   * ready for outbound requests, at which point isOpen() will return true.
   *
   * When start returns, isStarted() will return true.
   */
  start() {
    this.Xo = 0, this.state !== 4 ? this.auth() : this.r_();
  }
  /**
   * Stops the RPC. This call is idempotent and allowed regardless of the
   * current isStarted() state.
   *
   * When stop returns, isStarted() and isOpen() will both return false.
   */
  async stop() {
    this.t_() && await this.close(
      0
      /* PersistentStreamState.Initial */
    );
  }
  /**
   * After an error the stream will usually back off on the next attempt to
   * start it. If the error warrants an immediate restart of the stream, the
   * sender can use this to indicate that the receiver should not back off.
   *
   * Each error will call the onClose() listener. That function can decide to
   * inhibit backoff if required.
   */
  i_() {
    this.state = 0, this.e_.reset();
  }
  /**
   * Marks this stream as idle. If no further actions are performed on the
   * stream for one minute, the stream will automatically close itself and
   * notify the stream's onClose() handler with Status.OK. The stream will then
   * be in a !isStarted() state, requiring the caller to start the stream again
   * before further use.
   *
   * Only streams that are in state 'Open' can be marked idle, as all other
   * states imply pending network operations.
   */
  s_() {
    this.n_() && this.Yo === null && (this.Yo = this.ai.enqueueAfterDelay(this.jo, 6e4, () => this.o_()));
  }
  /** Sends a message to the underlying stream. */
  __(e) {
    this.a_(), this.stream.send(e);
  }
  /** Called by the idle timer when the stream should close due to inactivity. */
  async o_() {
    if (this.n_())
      return this.close(
        0
        /* PersistentStreamState.Initial */
      );
  }
  /** Marks the stream as active again. */
  a_() {
    this.Yo && (this.Yo.cancel(), this.Yo = null);
  }
  /** Cancels the health check delayed operation. */
  u_() {
    this.Zo && (this.Zo.cancel(), this.Zo = null);
  }
  /**
   * Closes the stream and cleans up as necessary:
   *
   * * closes the underlying GRPC stream;
   * * calls the onClose handler with the given 'error';
   * * sets internal stream state to 'finalState';
   * * adjusts the backoff timer based on the error
   *
   * A new stream can be opened by calling start().
   *
   * @param finalState - the intended state of the stream after closing.
   * @param error - the error the connection was closed with.
   */
  async close(e, t) {
    this.a_(), this.u_(), this.e_.cancel(), // Invalidates any stream-related callbacks (e.g. from auth or the
    // underlying stream), guaranteeing they won't execute.
    this.Jo++, e !== 4 ? (
      // If this is an intentional close ensure we don't delay our next connection attempt.
      this.e_.reset()
    ) : t && t.code === P.RESOURCE_EXHAUSTED ? (
      // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
      (it(t.toString()), it("Using maximum backoff delay to prevent overloading the backend."), this.e_.Uo())
    ) : t && t.code === P.UNAUTHENTICATED && this.state !== 3 && // "unauthenticated" error means the token was rejected. This should rarely
    // happen since both Auth and AppCheck ensure a sufficient TTL when we
    // request a token. If a user manually resets their system clock this can
    // fail, however. In this case, we should get a Code.UNAUTHENTICATED error
    // before we received the first message and we need to invalidate the token
    // to ensure that we fetch a new token.
    (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), // Clean up the underlying stream because we are no longer interested in events.
    this.stream !== null && (this.c_(), this.stream.close(), this.stream = null), // This state must be assigned before calling onClose() to allow the callback to
    // inhibit backoff or otherwise manipulate the state in its non-started state.
    this.state = e, // Notify the listener that the stream closed.
    await this.listener.Vo(t);
  }
  /**
   * Can be overridden to perform additional cleanup before the stream is closed.
   * Calling super.tearDown() is not required.
   */
  c_() {
  }
  auth() {
    this.state = 1;
    const e = this.l_(this.Jo), t = this.Jo;
    Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then(([r, i]) => {
      this.Jo === t && // Normally we'd have to schedule the callback on the AsyncQueue.
      // However, the following calls are safe to be called outside the
      // AsyncQueue since they don't chain asynchronous calls
      this.h_(r, i);
    }, (r) => {
      e(() => {
        const i = new L(P.UNKNOWN, "Fetching auth token failed: " + r.message);
        return this.P_(i);
      });
    });
  }
  h_(e, t) {
    const r = this.l_(this.Jo);
    this.stream = this.I_(e, t), this.stream.To(() => {
      r(() => this.listener.To());
    }), this.stream.Ao(() => {
      r(() => (this.state = 2, this.Zo = this.ai.enqueueAfterDelay(this.Ho, 1e4, () => (this.n_() && (this.state = 3), Promise.resolve())), this.listener.Ao()));
    }), this.stream.Vo((i) => {
      r(() => this.P_(i));
    }), this.stream.onMessage((i) => {
      r(() => ++this.Xo == 1 ? this.T_(i) : this.onNext(i));
    });
  }
  r_() {
    this.state = 5, this.e_.Wo(async () => {
      this.state = 0, this.start();
    });
  }
  // Visible for tests
  P_(e) {
    return N("PersistentStream", `close with error: ${e}`), this.stream = null, this.close(4, e);
  }
  /**
   * Returns a "dispatcher" function that dispatches operations onto the
   * AsyncQueue but only runs them if closeCount remains unchanged. This allows
   * us to turn auth / stream callbacks into no-ops if the stream is closed /
   * re-opened, etc.
   */
  l_(e) {
    return (t) => {
      this.ai.enqueueAndForget(() => this.Jo === e ? t() : (N("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()));
    };
  }
}
class mv extends fh {
  constructor(e, t, r, i, s, a) {
    super(e, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", t, r, i, a), this.serializer = s;
  }
  I_(e, t) {
    return this.connection.Lo("Listen", e, t);
  }
  T_(e) {
    return this.onNext(e);
  }
  onNext(e) {
    this.e_.reset();
    const t = Sy(this.serializer, e), r = function(s) {
      if (!("targetChange" in s)) return U.min();
      const a = s.targetChange;
      return a.targetIds && a.targetIds.length ? U.min() : a.readTime ? He(a.readTime) : U.min();
    }(e);
    return this.listener.E_(t, r);
  }
  /**
   * Registers interest in the results of the given target. If the target
   * includes a resumeToken it will be included in the request. Results that
   * affect the target will be streamed back as WatchChange messages that
   * reference the targetId.
   */
  d_(e) {
    const t = {};
    t.database = Gs(this.serializer), t.addTarget = function(s, a) {
      let c;
      const l = a.target;
      if (c = qs(l) ? {
        documents: ky(s, l)
      } : {
        query: Dy(s, l)._t
      }, c.targetId = a.targetId, a.resumeToken.approximateByteSize() > 0) {
        c.resumeToken = rh(s, a.resumeToken);
        const d = Hs(s, a.expectedCount);
        d !== null && (c.expectedCount = d);
      } else if (a.snapshotVersion.compareTo(U.min()) > 0) {
        c.readTime = vi(s, a.snapshotVersion.toTimestamp());
        const d = Hs(s, a.expectedCount);
        d !== null && (c.expectedCount = d);
      }
      return c;
    }(this.serializer, e);
    const r = Oy(this.serializer, e);
    r && (t.labels = r), this.__(t);
  }
  /**
   * Unregisters interest in the results of the target associated with the
   * given targetId.
   */
  A_(e) {
    const t = {};
    t.database = Gs(this.serializer), t.removeTarget = e, this.__(t);
  }
}
class gv extends fh {
  constructor(e, t, r, i, s, a) {
    super(e, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", t, r, i, a), this.serializer = s;
  }
  /**
   * Tracks whether or not a handshake has been successfully exchanged and
   * the stream is ready to accept mutations.
   */
  get R_() {
    return this.Xo > 0;
  }
  // Override of PersistentStream.start
  start() {
    this.lastStreamToken = void 0, super.start();
  }
  c_() {
    this.R_ && this.V_([]);
  }
  I_(e, t) {
    return this.connection.Lo("Write", e, t);
  }
  T_(e) {
    return Y(!!e.streamToken), this.lastStreamToken = e.streamToken, // The first response is always the handshake response
    Y(!e.writeResults || e.writeResults.length === 0), this.listener.m_();
  }
  onNext(e) {
    Y(!!e.streamToken), this.lastStreamToken = e.streamToken, // A successful first write response means the stream is healthy,
    // Note, that we could consider a successful handshake healthy, however,
    // the write itself might be causing an error we want to back off from.
    this.e_.reset();
    const t = Cy(e.writeResults, e.commitTime), r = He(e.commitTime);
    return this.listener.f_(r, t);
  }
  /**
   * Sends an initial streamToken to the server, performing the handshake
   * required to make the StreamingWrite RPC work. Subsequent
   * calls should wait until onHandshakeComplete was called.
   */
  g_() {
    const e = {};
    e.database = Gs(this.serializer), this.__(e);
  }
  /** Sends a group of mutations to the Firestore backend to apply. */
  V_(e) {
    const t = {
      streamToken: this.lastStreamToken,
      writes: e.map((r) => Py(this.serializer, r))
    };
    this.__(t);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class _v extends class {
} {
  constructor(e, t, r, i) {
    super(), this.authCredentials = e, this.appCheckCredentials = t, this.connection = r, this.serializer = i, this.p_ = !1;
  }
  y_() {
    if (this.p_) throw new L(P.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  /** Invokes the provided RPC with auth and AppCheck tokens. */
  Fo(e, t, r, i) {
    return this.y_(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([s, a]) => this.connection.Fo(e, Ws(t, r), i, s, a)).catch((s) => {
      throw s.name === "FirebaseError" ? (s.code === P.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), s) : new L(P.UNKNOWN, s.toString());
    });
  }
  /** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */
  No(e, t, r, i, s) {
    return this.y_(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([a, c]) => this.connection.No(e, Ws(t, r), i, a, c, s)).catch((a) => {
      throw a.name === "FirebaseError" ? (a.code === P.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), a) : new L(P.UNKNOWN, a.toString());
    });
  }
  terminate() {
    this.p_ = !0, this.connection.terminate();
  }
}
class yv {
  constructor(e, t) {
    this.asyncQueue = e, this.onlineStateHandler = t, /** The current OnlineState. */
    this.state = "Unknown", /**
     * A count of consecutive failures to open the stream. If it reaches the
     * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
     * Offline.
     */
    this.w_ = 0, /**
     * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
     * transition from OnlineState.Unknown to OnlineState.Offline without waiting
     * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
     */
    this.S_ = null, /**
     * Whether the client should log a warning message if it fails to connect to
     * the backend (initially true, cleared after a successful stream, or if we've
     * logged the message already).
     */
    this.b_ = !0;
  }
  /**
   * Called by RemoteStore when a watch stream is started (including on each
   * backoff attempt).
   *
   * If this is the first attempt, it sets the OnlineState to Unknown and starts
   * the onlineStateTimer.
   */
  D_() {
    this.w_ === 0 && (this.C_(
      "Unknown"
      /* OnlineState.Unknown */
    ), this.S_ = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this.S_ = null, this.v_("Backend didn't respond within 10 seconds."), this.C_(
      "Offline"
      /* OnlineState.Offline */
    ), Promise.resolve())));
  }
  /**
   * Updates our OnlineState as appropriate after the watch stream reports a
   * failure. The first failure moves us to the 'Unknown' state. We then may
   * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
   * actually transition to the 'Offline' state.
   */
  F_(e) {
    this.state === "Online" ? this.C_(
      "Unknown"
      /* OnlineState.Unknown */
    ) : (this.w_++, this.w_ >= 1 && (this.M_(), this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`), this.C_(
      "Offline"
      /* OnlineState.Offline */
    )));
  }
  /**
   * Explicitly sets the OnlineState to the specified state.
   *
   * Note that this resets our timers / failure counters, etc. used by our
   * Offline heuristics, so must not be used in place of
   * handleWatchStreamStart() and handleWatchStreamFailure().
   */
  set(e) {
    this.M_(), this.w_ = 0, e === "Online" && // We've connected to watch at least once. Don't warn the developer
    // about being offline going forward.
    (this.b_ = !1), this.C_(e);
  }
  C_(e) {
    e !== this.state && (this.state = e, this.onlineStateHandler(e));
  }
  v_(e) {
    const t = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.b_ ? (it(t), this.b_ = !1) : N("OnlineStateTracker", t);
  }
  M_() {
    this.S_ !== null && (this.S_.cancel(), this.S_ = null);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class vv {
  constructor(e, t, r, i, s) {
    this.localStore = e, this.datastore = t, this.asyncQueue = r, this.remoteSyncer = {}, /**
     * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
     * LocalStore via fillWritePipeline() and have or will send to the write
     * stream.
     *
     * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
     * restart the write stream. When the stream is established the writes in the
     * pipeline will be sent in order.
     *
     * Writes remain in writePipeline until they are acknowledged by the backend
     * and thus will automatically be re-sent if the stream is interrupted /
     * restarted before they're acknowledged.
     *
     * Write responses from the backend are linked to their originating request
     * purely based on order, and so we can just shift() writes from the front of
     * the writePipeline as we receive responses.
     */
    this.x_ = [], /**
     * A mapping of watched targets that the client cares about tracking and the
     * user has explicitly called a 'listen' for this target.
     *
     * These targets may or may not have been sent to or acknowledged by the
     * server. On re-establishing the listen stream, these targets should be sent
     * to the server. The targets removed with unlistens are removed eagerly
     * without waiting for confirmation from the listen stream.
     */
    this.O_ = /* @__PURE__ */ new Map(), /**
     * A set of reasons for why the RemoteStore may be offline. If empty, the
     * RemoteStore may start its network connections.
     */
    this.N_ = /* @__PURE__ */ new Set(), /**
     * Event handlers that get called when the network is disabled or enabled.
     *
     * PORTING NOTE: These functions are used on the Web client to create the
     * underlying streams (to support tree-shakeable streams). On Android and iOS,
     * the streams are created during construction of RemoteStore.
     */
    this.L_ = [], this.B_ = s, this.B_.oo((a) => {
      r.enqueueAndForget(async () => {
        Jt(this) && (N("RemoteStore", "Restarting streams for network reachability change."), await async function(l) {
          const d = F(l);
          d.N_.add(
            4
            /* OfflineCause.ConnectivityChange */
          ), await wr(d), d.k_.set(
            "Unknown"
            /* OnlineState.Unknown */
          ), d.N_.delete(
            4
            /* OfflineCause.ConnectivityChange */
          ), await Ui(d);
        }(this));
      });
    }), this.k_ = new yv(r, i);
  }
}
async function Ui(n) {
  if (Jt(n)) for (const e of n.L_) await e(
    /* enabled= */
    !0
  );
}
async function wr(n) {
  for (const e of n.L_) await e(
    /* enabled= */
    !1
  );
}
function ph(n, e) {
  const t = F(n);
  t.O_.has(e.targetId) || // Mark this as something the client is currently listening for.
  (t.O_.set(e.targetId, e), Vo(t) ? (
    // The listen will be sent in onWatchStreamOpen
    Oo(t)
  ) : wn(t).n_() && No(t, e));
}
function Do(n, e) {
  const t = F(n), r = wn(t);
  t.O_.delete(e), r.n_() && mh(t, e), t.O_.size === 0 && (r.n_() ? r.s_() : Jt(t) && // Revert to OnlineState.Unknown if the watch stream is not open and we
  // have no listeners, since without any listens to send we cannot
  // confirm if the stream is healthy and upgrade to OnlineState.Online.
  t.k_.set(
    "Unknown"
    /* OnlineState.Unknown */
  ));
}
function No(n, e) {
  if (n.q_.xe(e.targetId), e.resumeToken.approximateByteSize() > 0 || e.snapshotVersion.compareTo(U.min()) > 0) {
    const t = n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;
    e = e.withExpectedCount(t);
  }
  wn(n).d_(e);
}
function mh(n, e) {
  n.q_.xe(e), wn(n).A_(e);
}
function Oo(n) {
  n.q_ = new Ey({
    getRemoteKeysForTarget: (e) => n.remoteSyncer.getRemoteKeysForTarget(e),
    ot: (e) => n.O_.get(e) || null,
    tt: () => n.datastore.serializer.databaseId
  }), wn(n).start(), n.k_.D_();
}
function Vo(n) {
  return Jt(n) && !wn(n).t_() && n.O_.size > 0;
}
function Jt(n) {
  return F(n).N_.size === 0;
}
function gh(n) {
  n.q_ = void 0;
}
async function Ev(n) {
  n.k_.set(
    "Online"
    /* OnlineState.Online */
  );
}
async function Iv(n) {
  n.O_.forEach((e, t) => {
    No(n, e);
  });
}
async function Tv(n, e) {
  gh(n), // If we still need the watch stream, retry the connection.
  Vo(n) ? (n.k_.F_(e), Oo(n)) : (
    // No need to restart watch stream because there are no active targets.
    // The online state is set to unknown because there is no active attempt
    // at establishing a connection
    n.k_.set(
      "Unknown"
      /* OnlineState.Unknown */
    )
  );
}
async function wv(n, e, t) {
  if (
    // Mark the client as online since we got a message from the server
    n.k_.set(
      "Online"
      /* OnlineState.Online */
    ), e instanceof nh && e.state === 2 && e.cause
  )
    try {
      await /** Handles an error on a target */
      async function(i, s) {
        const a = s.cause;
        for (const c of s.targetIds)
          i.O_.has(c) && (await i.remoteSyncer.rejectListen(c, a), i.O_.delete(c), i.q_.removeTarget(c));
      }(n, e);
    } catch (r) {
      N("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), r), await Ei(n, r);
    }
  else if (e instanceof si ? n.q_.Ke(e) : e instanceof th ? n.q_.He(e) : n.q_.We(e), !t.isEqual(U.min())) try {
    const r = await hh(n.localStore);
    t.compareTo(r) >= 0 && // We have received a target change with a global snapshot if the snapshot
    // version is not equal to SnapshotVersion.min().
    await /**
    * Takes a batch of changes from the Datastore, repackages them as a
    * RemoteEvent, and passes that on to the listener, which is typically the
    * SyncEngine.
    */
    function(s, a) {
      const c = s.q_.rt(a);
      return c.targetChanges.forEach((l, d) => {
        if (l.resumeToken.approximateByteSize() > 0) {
          const p = s.O_.get(d);
          p && s.O_.set(d, p.withResumeToken(l.resumeToken, a));
        }
      }), // Re-establish listens for the targets that have been invalidated by
      // existence filter mismatches.
      c.targetMismatches.forEach((l, d) => {
        const p = s.O_.get(l);
        if (!p)
          return;
        s.O_.set(l, p.withResumeToken(_e.EMPTY_BYTE_STRING, p.snapshotVersion)), // Cause a hard reset by unwatching and rewatching immediately, but
        // deliberately don't send a resume token so that we get a full update.
        mh(s, l);
        const y = new _t(p.target, l, d, p.sequenceNumber);
        No(s, y);
      }), s.remoteSyncer.applyRemoteEvent(c);
    }(n, t);
  } catch (r) {
    N("RemoteStore", "Failed to raise snapshot:", r), await Ei(n, r);
  }
}
async function Ei(n, e, t) {
  if (!Er(e)) throw e;
  n.N_.add(
    1
    /* OfflineCause.IndexedDbFailed */
  ), // Disable network and raise offline snapshots
  await wr(n), n.k_.set(
    "Offline"
    /* OnlineState.Offline */
  ), t || // Use a simple read operation to determine if IndexedDB recovered.
  // Ideally, we would expose a health check directly on SimpleDb, but
  // RemoteStore only has access to persistence through LocalStore.
  (t = () => hh(n.localStore)), // Probe IndexedDB periodically and re-enable network
  n.asyncQueue.enqueueRetryable(async () => {
    N("RemoteStore", "Retrying IndexedDB access"), await t(), n.N_.delete(
      1
      /* OfflineCause.IndexedDbFailed */
    ), await Ui(n);
  });
}
function _h(n, e) {
  return e().catch((t) => Ei(n, t, e));
}
async function Fi(n) {
  const e = F(n), t = Rt(e);
  let r = e.x_.length > 0 ? e.x_[e.x_.length - 1].batchId : -1;
  for (; Av(e); ) try {
    const i = await av(e.localStore, r);
    if (i === null) {
      e.x_.length === 0 && t.s_();
      break;
    }
    r = i.batchId, Rv(e, i);
  } catch (i) {
    await Ei(e, i);
  }
  yh(e) && vh(e);
}
function Av(n) {
  return Jt(n) && n.x_.length < 10;
}
function Rv(n, e) {
  n.x_.push(e);
  const t = Rt(n);
  t.n_() && t.R_ && t.V_(e.mutations);
}
function yh(n) {
  return Jt(n) && !Rt(n).t_() && n.x_.length > 0;
}
function vh(n) {
  Rt(n).start();
}
async function bv(n) {
  Rt(n).g_();
}
async function Sv(n) {
  const e = Rt(n);
  for (const t of n.x_) e.V_(t.mutations);
}
async function Pv(n, e, t) {
  const r = n.x_.shift(), i = Ro.from(r, e, t);
  await _h(n, () => n.remoteSyncer.applySuccessfulWrite(i)), // It's possible that with the completion of this mutation another
  // slot has freed up.
  await Fi(n);
}
async function Cv(n, e) {
  e && Rt(n).R_ && // This error affects the actual write.
  await async function(r, i) {
    if (function(a) {
      return _y(a) && a !== P.ABORTED;
    }(i.code)) {
      const s = r.x_.shift();
      Rt(r).i_(), await _h(r, () => r.remoteSyncer.rejectFailedWrite(s.batchId, i)), // It's possible that with the completion of this mutation
      // another slot has freed up.
      await Fi(r);
    }
  }(n, e), // The write stream might have been started by refilling the write
  // pipeline for failed writes
  yh(n) && vh(n);
}
async function tu(n, e) {
  const t = F(n);
  t.asyncQueue.verifyOperationInProgress(), N("RemoteStore", "RemoteStore received new credentials");
  const r = Jt(t);
  t.N_.add(
    3
    /* OfflineCause.CredentialChange */
  ), await wr(t), r && // Don't set the network status to Unknown if we are offline.
  t.k_.set(
    "Unknown"
    /* OnlineState.Unknown */
  ), await t.remoteSyncer.handleCredentialChange(e), t.N_.delete(
    3
    /* OfflineCause.CredentialChange */
  ), await Ui(t);
}
async function kv(n, e) {
  const t = F(n);
  e ? (t.N_.delete(
    2
    /* OfflineCause.IsSecondary */
  ), await Ui(t)) : e || (t.N_.add(
    2
    /* OfflineCause.IsSecondary */
  ), await wr(t), t.k_.set(
    "Unknown"
    /* OnlineState.Unknown */
  ));
}
function wn(n) {
  return n.Q_ || // Create stream (but note that it is not started yet).
  (n.Q_ = function(t, r, i) {
    const s = F(t);
    return s.y_(), new mv(r, s.connection, s.authCredentials, s.appCheckCredentials, s.serializer, i);
  }(n.datastore, n.asyncQueue, {
    To: Ev.bind(null, n),
    Ao: Iv.bind(null, n),
    Vo: Tv.bind(null, n),
    E_: wv.bind(null, n)
  }), n.L_.push(async (e) => {
    e ? (n.Q_.i_(), Vo(n) ? Oo(n) : n.k_.set(
      "Unknown"
      /* OnlineState.Unknown */
    )) : (await n.Q_.stop(), gh(n));
  })), n.Q_;
}
function Rt(n) {
  return n.K_ || // Create stream (but note that it is not started yet).
  (n.K_ = function(t, r, i) {
    const s = F(t);
    return s.y_(), new gv(r, s.connection, s.authCredentials, s.appCheckCredentials, s.serializer, i);
  }(n.datastore, n.asyncQueue, {
    To: () => Promise.resolve(),
    Ao: bv.bind(null, n),
    Vo: Cv.bind(null, n),
    m_: Sv.bind(null, n),
    f_: Pv.bind(null, n)
  }), n.L_.push(async (e) => {
    e ? (n.K_.i_(), // This will start the write stream if necessary.
    await Fi(n)) : (await n.K_.stop(), n.x_.length > 0 && (N("RemoteStore", `Stopping write stream with ${n.x_.length} pending writes`), n.x_ = []));
  })), n.K_;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Lo {
  constructor(e, t, r, i, s) {
    this.asyncQueue = e, this.timerId = t, this.targetTimeMs = r, this.op = i, this.removalCallback = s, this.deferred = new Et(), this.then = this.deferred.promise.then.bind(this.deferred.promise), // It's normal for the deferred promise to be canceled (due to cancellation)
    // and so we attach a dummy catch callback to avoid
    // 'UnhandledPromiseRejectionWarning' log spam.
    this.deferred.promise.catch((a) => {
    });
  }
  get promise() {
    return this.deferred.promise;
  }
  /**
   * Creates and returns a DelayedOperation that has been scheduled to be
   * executed on the provided asyncQueue after the provided delayMs.
   *
   * @param asyncQueue - The queue to schedule the operation on.
   * @param id - A Timer ID identifying the type of operation this is.
   * @param delayMs - The delay (ms) before the operation should be scheduled.
   * @param op - The operation to run.
   * @param removalCallback - A callback to be called synchronously once the
   *   operation is executed or canceled, notifying the AsyncQueue to remove it
   *   from its delayedOperations list.
   *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
   *   the DelayedOperation class public.
   */
  static createAndSchedule(e, t, r, i, s) {
    const a = Date.now() + r, c = new Lo(e, t, a, i, s);
    return c.start(r), c;
  }
  /**
   * Starts the timer. This is called immediately after construction by
   * createAndSchedule().
   */
  start(e) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
  }
  /**
   * Queues the operation to run immediately (if it hasn't already been run or
   * canceled).
   */
  skipDelay() {
    return this.handleDelayElapsed();
  }
  /**
   * Cancels the operation if it hasn't already been executed or canceled. The
   * promise will be rejected.
   *
   * As long as the operation has not yet been run, calling cancel() provides a
   * guarantee that the operation will not be run.
   */
  cancel(e) {
    this.timerHandle !== null && (this.clearTimeout(), this.deferred.reject(new L(P.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() => this.timerHandle !== null ? (this.clearTimeout(), this.op().then((e) => this.deferred.resolve(e))) : Promise.resolve());
  }
  clearTimeout() {
    this.timerHandle !== null && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
  }
}
function Mo(n, e) {
  if (it("AsyncQueue", `${e}: ${n}`), Er(n)) return new L(P.UNAVAILABLE, `${e}: ${n}`);
  throw n;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class un {
  /** The default ordering is by key if the comparator is omitted */
  constructor(e) {
    this.comparator = e ? (t, r) => e(t, r) || M.comparator(t.key, r.key) : (t, r) => M.comparator(t.key, r.key), this.keyedMap = Kn(), this.sortedSet = new ee(this.comparator);
  }
  /**
   * Returns an empty copy of the existing DocumentSet, using the same
   * comparator.
   */
  static emptySet(e) {
    return new un(e.comparator);
  }
  has(e) {
    return this.keyedMap.get(e) != null;
  }
  get(e) {
    return this.keyedMap.get(e);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  /**
   * Returns the index of the provided key in the document set, or -1 if the
   * document key is not present in the set;
   */
  indexOf(e) {
    const t = this.keyedMap.get(e);
    return t ? this.sortedSet.indexOf(t) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  /** Iterates documents in order defined by "comparator" */
  forEach(e) {
    this.sortedSet.inorderTraversal((t, r) => (e(t), !1));
  }
  /** Inserts or updates a document with the same key */
  add(e) {
    const t = this.delete(e.key);
    return t.copy(t.keyedMap.insert(e.key, e), t.sortedSet.insert(e, null));
  }
  /** Deletes a document with a given key */
  delete(e) {
    const t = this.get(e);
    return t ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(t)) : this;
  }
  isEqual(e) {
    if (!(e instanceof un) || this.size !== e.size) return !1;
    const t = this.sortedSet.getIterator(), r = e.sortedSet.getIterator();
    for (; t.hasNext(); ) {
      const i = t.getNext().key, s = r.getNext().key;
      if (!i.isEqual(s)) return !1;
    }
    return !0;
  }
  toString() {
    const e = [];
    return this.forEach((t) => {
      e.push(t.toString());
    }), e.length === 0 ? "DocumentSet ()" : `DocumentSet (
  ` + e.join(`  
`) + `
)`;
  }
  copy(e, t) {
    const r = new un();
    return r.comparator = this.comparator, r.keyedMap = e, r.sortedSet = t, r;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class nu {
  constructor() {
    this.U_ = new ee(M.comparator);
  }
  track(e) {
    const t = e.doc.key, r = this.U_.get(t);
    r ? (
      // Merge the new change with the existing change.
      e.type !== 0 && r.type === 3 ? this.U_ = this.U_.insert(t, e) : e.type === 3 && r.type !== 1 ? this.U_ = this.U_.insert(t, {
        type: r.type,
        doc: e.doc
      }) : e.type === 2 && r.type === 2 ? this.U_ = this.U_.insert(t, {
        type: 2,
        doc: e.doc
      }) : e.type === 2 && r.type === 0 ? this.U_ = this.U_.insert(t, {
        type: 0,
        doc: e.doc
      }) : e.type === 1 && r.type === 0 ? this.U_ = this.U_.remove(t) : e.type === 1 && r.type === 2 ? this.U_ = this.U_.insert(t, {
        type: 1,
        doc: r.doc
      }) : e.type === 0 && r.type === 1 ? this.U_ = this.U_.insert(t, {
        type: 2,
        doc: e.doc
      }) : (
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        x()
      )
    ) : this.U_ = this.U_.insert(t, e);
  }
  W_() {
    const e = [];
    return this.U_.inorderTraversal((t, r) => {
      e.push(r);
    }), e;
  }
}
class gn {
  constructor(e, t, r, i, s, a, c, l, d) {
    this.query = e, this.docs = t, this.oldDocs = r, this.docChanges = i, this.mutatedKeys = s, this.fromCache = a, this.syncStateChanged = c, this.excludesMetadataChanges = l, this.hasCachedResults = d;
  }
  /** Returns a view snapshot as if all documents in the snapshot were added. */
  static fromInitialDocuments(e, t, r, i, s) {
    const a = [];
    return t.forEach((c) => {
      a.push({
        type: 0,
        doc: c
      });
    }), new gn(
      e,
      t,
      un.emptySet(t),
      a,
      r,
      i,
      /* syncStateChanged= */
      !0,
      /* excludesMetadataChanges= */
      !1,
      s
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(e) {
    if (!(this.fromCache === e.fromCache && this.hasCachedResults === e.hasCachedResults && this.syncStateChanged === e.syncStateChanged && this.mutatedKeys.isEqual(e.mutatedKeys) && Ni(this.query, e.query) && this.docs.isEqual(e.docs) && this.oldDocs.isEqual(e.oldDocs))) return !1;
    const t = this.docChanges, r = e.docChanges;
    if (t.length !== r.length) return !1;
    for (let i = 0; i < t.length; i++) if (t[i].type !== r[i].type || !t[i].doc.isEqual(r[i].doc)) return !1;
    return !0;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Dv {
  constructor() {
    this.G_ = void 0, this.z_ = [];
  }
  // Helper methods that checks if the query has listeners that listening to remote store
  j_() {
    return this.z_.some((e) => e.H_());
  }
}
class Nv {
  constructor() {
    this.queries = ru(), this.onlineState = "Unknown", this.J_ = /* @__PURE__ */ new Set();
  }
  terminate() {
    (function(t, r) {
      const i = F(t), s = i.queries;
      i.queries = ru(), s.forEach((a, c) => {
        for (const l of c.z_) l.onError(r);
      });
    })(this, new L(P.ABORTED, "Firestore shutting down"));
  }
}
function ru() {
  return new Tn((n) => Bl(n), Ni);
}
async function Eh(n, e) {
  const t = F(n);
  let r = 3;
  const i = e.query;
  let s = t.queries.get(i);
  s ? !s.j_() && e.H_() && // Query has been listening to local cache, and tries to add a new listener sourced from watch.
  (r = 2) : (s = new Dv(), r = e.H_() ? 0 : 1);
  try {
    switch (r) {
      case 0:
        s.G_ = await t.onListen(
          i,
          /** enableRemoteListen= */
          !0
        );
        break;
      case 1:
        s.G_ = await t.onListen(
          i,
          /** enableRemoteListen= */
          !1
        );
        break;
      case 2:
        await t.onFirstRemoteStoreListen(i);
    }
  } catch (a) {
    const c = Mo(a, `Initialization of query '${nn(e.query)}' failed`);
    return void e.onError(c);
  }
  t.queries.set(i, s), s.z_.push(e), // Run global snapshot listeners if a consistent snapshot has been emitted.
  e.Y_(t.onlineState), s.G_ && e.Z_(s.G_) && xo(t);
}
async function Ih(n, e) {
  const t = F(n), r = e.query;
  let i = 3;
  const s = t.queries.get(r);
  if (s) {
    const a = s.z_.indexOf(e);
    a >= 0 && (s.z_.splice(a, 1), s.z_.length === 0 ? i = e.H_() ? 0 : 1 : !s.j_() && e.H_() && // The removed listener is the last one that sourced from watch.
    (i = 2));
  }
  switch (i) {
    case 0:
      return t.queries.delete(r), t.onUnlisten(
        r,
        /** disableRemoteListen= */
        !0
      );
    case 1:
      return t.queries.delete(r), t.onUnlisten(
        r,
        /** disableRemoteListen= */
        !1
      );
    case 2:
      return t.onLastRemoteStoreUnlisten(r);
    default:
      return;
  }
}
function Ov(n, e) {
  const t = F(n);
  let r = !1;
  for (const i of e) {
    const s = i.query, a = t.queries.get(s);
    if (a) {
      for (const c of a.z_) c.Z_(i) && (r = !0);
      a.G_ = i;
    }
  }
  r && xo(t);
}
function Vv(n, e, t) {
  const r = F(n), i = r.queries.get(e);
  if (i) for (const s of i.z_) s.onError(t);
  r.queries.delete(e);
}
function xo(n) {
  n.J_.forEach((e) => {
    e.next();
  });
}
var Ys, iu;
(iu = Ys || (Ys = {})).X_ = "default", /** Listen to changes in cache only */
iu.Cache = "cache";
class Th {
  constructor(e, t, r) {
    this.query = e, this.ea = t, /**
     * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
     * observer. This flag is set to true once we've actually raised an event.
     */
    this.ta = !1, this.na = null, this.onlineState = "Unknown", this.options = r || {};
  }
  /**
   * Applies the new ViewSnapshot to this listener, raising a user-facing event
   * if applicable (depending on what changed, whether the user has opted into
   * metadata-only changes, etc.). Returns true if a user-facing event was
   * indeed raised.
   */
  Z_(e) {
    if (!this.options.includeMetadataChanges) {
      const r = [];
      for (const i of e.docChanges) i.type !== 3 && r.push(i);
      e = new gn(
        e.query,
        e.docs,
        e.oldDocs,
        r,
        e.mutatedKeys,
        e.fromCache,
        e.syncStateChanged,
        /* excludesMetadataChanges= */
        !0,
        e.hasCachedResults
      );
    }
    let t = !1;
    return this.ta ? this.ra(e) && (this.ea.next(e), t = !0) : this.ia(e, this.onlineState) && (this.sa(e), t = !0), this.na = e, t;
  }
  onError(e) {
    this.ea.error(e);
  }
  /** Returns whether a snapshot was raised. */
  Y_(e) {
    this.onlineState = e;
    let t = !1;
    return this.na && !this.ta && this.ia(this.na, e) && (this.sa(this.na), t = !0), t;
  }
  ia(e, t) {
    if (!e.fromCache || !this.H_()) return !0;
    const r = t !== "Offline";
    return (!this.options.oa || !r) && (!e.docs.isEmpty() || e.hasCachedResults || t === "Offline");
  }
  ra(e) {
    if (e.docChanges.length > 0) return !0;
    const t = this.na && this.na.hasPendingWrites !== e.hasPendingWrites;
    return !(!e.syncStateChanged && !t) && this.options.includeMetadataChanges === !0;
  }
  sa(e) {
    e = gn.fromInitialDocuments(e.query, e.docs, e.mutatedKeys, e.fromCache, e.hasCachedResults), this.ta = !0, this.ea.next(e);
  }
  H_() {
    return this.options.source !== Ys.Cache;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class wh {
  constructor(e) {
    this.key = e;
  }
}
class Ah {
  constructor(e) {
    this.key = e;
  }
}
class Lv {
  constructor(e, t) {
    this.query = e, this.Ia = t, this.Ta = null, this.hasCachedResults = !1, /**
     * A flag whether the view is current with the backend. A view is considered
     * current after it has seen the current flag from the backend and did not
     * lose consistency within the watch stream (e.g. because of an existence
     * filter mismatch).
     */
    this.current = !1, /** Documents in the view but not in the remote target */
    this.Ea = z(), /** Document Keys that have local changes */
    this.mutatedKeys = z(), this.da = jl(e), this.Aa = new un(this.da);
  }
  /**
   * The set of remote documents that the server has told us belongs to the target associated with
   * this view.
   */
  get Ra() {
    return this.Ia;
  }
  /**
   * Iterates over a set of doc changes, applies the query limit, and computes
   * what the new results should be, what the changes were, and whether we may
   * need to go back to the local cache for more results. Does not make any
   * changes to the view.
   * @param docChanges - The doc changes to apply to this view.
   * @param previousChanges - If this is being called with a refill, then start
   *        with this set of docs and changes instead of the current view.
   * @returns a new set of docs, changes, and refill flag.
   */
  Va(e, t) {
    const r = t ? t.ma : new nu(), i = t ? t.Aa : this.Aa;
    let s = t ? t.mutatedKeys : this.mutatedKeys, a = i, c = !1;
    const l = this.query.limitType === "F" && i.size === this.query.limit ? i.last() : null, d = this.query.limitType === "L" && i.size === this.query.limit ? i.first() : null;
    if (e.inorderTraversal((p, y) => {
      const A = i.get(p), b = Oi(this.query, y) ? y : null, D = !!A && this.mutatedKeys.has(A.key), O = !!b && (b.hasLocalMutations || // We only consider committed mutations for documents that were
      // mutated during the lifetime of the view.
      this.mutatedKeys.has(b.key) && b.hasCommittedMutations);
      let C = !1;
      A && b ? A.data.isEqual(b.data) ? D !== O && (r.track({
        type: 3,
        doc: b
      }), C = !0) : this.fa(A, b) || (r.track({
        type: 2,
        doc: b
      }), C = !0, (l && this.da(b, l) > 0 || d && this.da(b, d) < 0) && // This doc moved from inside the limit to outside the limit.
      // That means there may be some other doc in the local cache
      // that should be included instead.
      (c = !0)) : !A && b ? (r.track({
        type: 0,
        doc: b
      }), C = !0) : A && !b && (r.track({
        type: 1,
        doc: A
      }), C = !0, (l || d) && // A doc was removed from a full limit query. We'll need to
      // requery from the local cache to see if we know about some other
      // doc that should be in the results.
      (c = !0)), C && (b ? (a = a.add(b), s = O ? s.add(p) : s.delete(p)) : (a = a.delete(p), s = s.delete(p)));
    }), this.query.limit !== null) for (; a.size > this.query.limit; ) {
      const p = this.query.limitType === "F" ? a.last() : a.first();
      a = a.delete(p.key), s = s.delete(p.key), r.track({
        type: 1,
        doc: p
      });
    }
    return {
      Aa: a,
      ma: r,
      ts: c,
      mutatedKeys: s
    };
  }
  fa(e, t) {
    return e.hasLocalMutations && t.hasCommittedMutations && !t.hasLocalMutations;
  }
  /**
   * Updates the view with the given ViewDocumentChanges and optionally updates
   * limbo docs and sync state from the provided target change.
   * @param docChanges - The set of changes to make to the view's docs.
   * @param limboResolutionEnabled - Whether to update limbo documents based on
   *        this change.
   * @param targetChange - A target change to apply for computing limbo docs and
   *        sync state.
   * @param targetIsPendingReset - Whether the target is pending to reset due to
   *        existence filter mismatch. If not explicitly specified, it is treated
   *        equivalently to `false`.
   * @returns A new ViewChange with the given docs, changes, and sync state.
   */
  // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
  applyChanges(e, t, r, i) {
    const s = this.Aa;
    this.Aa = e.Aa, this.mutatedKeys = e.mutatedKeys;
    const a = e.ma.W_();
    a.sort((p, y) => function(b, D) {
      const O = (C) => {
        switch (C) {
          case 0:
            return 1;
          case 2:
          case 3:
            return 2;
          case 1:
            return 0;
          default:
            return x();
        }
      };
      return O(b) - O(D);
    }(p.type, y.type) || this.da(p.doc, y.doc)), this.ga(r), i = i != null && i;
    const c = t && !i ? this.pa() : [], l = this.Ea.size === 0 && this.current && !i ? 1 : 0, d = l !== this.Ta;
    return this.Ta = l, a.length !== 0 || d ? {
      snapshot: new gn(
        this.query,
        e.Aa,
        s,
        a,
        e.mutatedKeys,
        l === 0,
        d,
        /* excludesMetadataChanges= */
        !1,
        !!r && r.resumeToken.approximateByteSize() > 0
      ),
      ya: c
    } : {
      ya: c
    };
  }
  /**
   * Applies an OnlineState change to the view, potentially generating a
   * ViewChange if the view's syncState changes as a result.
   */
  Y_(e) {
    return this.current && e === "Offline" ? (
      // If we're offline, set `current` to false and then call applyChanges()
      // to refresh our syncState and generate a ViewChange as appropriate. We
      // are guaranteed to get a new TargetChange that sets `current` back to
      // true once the client is back online.
      (this.current = !1, this.applyChanges(
        {
          Aa: this.Aa,
          ma: new nu(),
          mutatedKeys: this.mutatedKeys,
          ts: !1
        },
        /* limboResolutionEnabled= */
        !1
      ))
    ) : {
      ya: []
    };
  }
  /**
   * Returns whether the doc for the given key should be in limbo.
   */
  wa(e) {
    return !this.Ia.has(e) && // The local store doesn't think it's a result, so it shouldn't be in limbo.
    !!this.Aa.has(e) && !this.Aa.get(e).hasLocalMutations;
  }
  /**
   * Updates syncedDocuments, current, and limbo docs based on the given change.
   * Returns the list of changes to which docs are in limbo.
   */
  ga(e) {
    e && (e.addedDocuments.forEach((t) => this.Ia = this.Ia.add(t)), e.modifiedDocuments.forEach((t) => {
    }), e.removedDocuments.forEach((t) => this.Ia = this.Ia.delete(t)), this.current = e.current);
  }
  pa() {
    if (!this.current) return [];
    const e = this.Ea;
    this.Ea = z(), this.Aa.forEach((r) => {
      this.wa(r.key) && (this.Ea = this.Ea.add(r.key));
    });
    const t = [];
    return e.forEach((r) => {
      this.Ea.has(r) || t.push(new Ah(r));
    }), this.Ea.forEach((r) => {
      e.has(r) || t.push(new wh(r));
    }), t;
  }
  /**
   * Update the in-memory state of the current view with the state read from
   * persistence.
   *
   * We update the query view whenever a client's primary status changes:
   * - When a client transitions from primary to secondary, it can miss
   *   LocalStorage updates and its query views may temporarily not be
   *   synchronized with the state on disk.
   * - For secondary to primary transitions, the client needs to update the list
   *   of `syncedDocuments` since secondary clients update their query views
   *   based purely on synthesized RemoteEvents.
   *
   * @param queryResult.documents - The documents that match the query according
   * to the LocalStore.
   * @param queryResult.remoteKeys - The keys of the documents that match the
   * query according to the backend.
   *
   * @returns The ViewChange that resulted from this synchronization.
   */
  // PORTING NOTE: Multi-tab only.
  Sa(e) {
    this.Ia = e.Is, this.Ea = z();
    const t = this.Va(e.documents);
    return this.applyChanges(
      t,
      /* limboResolutionEnabled= */
      !0
    );
  }
  /**
   * Returns a view snapshot as if this query was just listened to. Contains
   * a document add for every existing document and the `fromCache` and
   * `hasPendingWrites` status of the already established view.
   */
  // PORTING NOTE: Multi-tab only.
  ba() {
    return gn.fromInitialDocuments(this.query, this.Aa, this.mutatedKeys, this.Ta === 0, this.hasCachedResults);
  }
}
class Mv {
  constructor(e, t, r) {
    this.query = e, this.targetId = t, this.view = r;
  }
}
class xv {
  constructor(e) {
    this.key = e, /**
     * Set to true once we've received a document. This is used in
     * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
     * decide whether it needs to manufacture a delete event for the target once
     * the target is CURRENT.
     */
    this.Da = !1;
  }
}
class Uv {
  constructor(e, t, r, i, s, a) {
    this.localStore = e, this.remoteStore = t, this.eventManager = r, this.sharedClientState = i, this.currentUser = s, this.maxConcurrentLimboResolutions = a, this.Ca = {}, this.va = new Tn((c) => Bl(c), Ni), this.Fa = /* @__PURE__ */ new Map(), /**
     * The keys of documents that are in limbo for which we haven't yet started a
     * limbo resolution query. The strings in this set are the result of calling
     * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
     *
     * The `Set` type was chosen because it provides efficient lookup and removal
     * of arbitrary elements and it also maintains insertion order, providing the
     * desired queue-like FIFO semantics.
     */
    this.Ma = /* @__PURE__ */ new Set(), /**
     * Keeps track of the target ID for each document that is in limbo with an
     * active target.
     */
    this.xa = new ee(M.comparator), /**
     * Keeps track of the information about an active limbo resolution for each
     * active target ID that was started for the purpose of limbo resolution.
     */
    this.Oa = /* @__PURE__ */ new Map(), this.Na = new Po(), /** Stores user completion handlers, indexed by User and BatchId. */
    this.La = {}, /** Stores user callbacks waiting for all pending writes to be acknowledged. */
    this.Ba = /* @__PURE__ */ new Map(), this.ka = mn.Bn(), this.onlineState = "Unknown", // The primary state is set to `true` or `false` immediately after Firestore
    // startup. In the interim, a client should only be considered primary if
    // `isPrimary` is true.
    this.qa = void 0;
  }
  get isPrimaryClient() {
    return this.qa === !0;
  }
}
async function Fv(n, e, t = !0) {
  const r = kh(n);
  let i;
  const s = r.va.get(e);
  return s ? (
    // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
    // already exists when EventManager calls us for the first time. This
    // happens when the primary tab is already listening to this query on
    // behalf of another tab and the user of the primary also starts listening
    // to the query. EventManager will not have an assigned target ID in this
    // case and calls `listen` to obtain this ID.
    (r.sharedClientState.addLocalQueryTarget(s.targetId), i = s.view.ba())
  ) : i = await Rh(
    r,
    e,
    t,
    /** shouldInitializeView= */
    !0
  ), i;
}
async function Bv(n, e) {
  const t = kh(n);
  await Rh(
    t,
    e,
    /** shouldListenToRemote= */
    !0,
    /** shouldInitializeView= */
    !1
  );
}
async function Rh(n, e, t, r) {
  const i = await cv(n.localStore, ze(e)), s = i.targetId, a = t ? n.sharedClientState.addLocalQueryTarget(s) : "not-current";
  let c;
  return r && (c = await jv(n, e, s, a === "current", i.resumeToken)), n.isPrimaryClient && t && ph(n.remoteStore, i), c;
}
async function jv(n, e, t, r, i) {
  n.Qa = (y, A, b) => async function(O, C, B, $) {
    let j = C.view.Va(B);
    j.ts && // The query has a limit and some docs were removed, so we need
    // to re-run the query against the local store to make sure we
    // didn't lose any good docs that had been past the limit.
    (j = await Xc(
      O.localStore,
      C.query,
      /* usePreviousResults= */
      !1
    ).then(({ documents: E }) => C.view.Va(E, j)));
    const q = $ && $.targetChanges.get(C.targetId), he = $ && $.targetMismatches.get(C.targetId) != null, J = C.view.applyChanges(
      j,
      /* limboResolutionEnabled= */
      O.isPrimaryClient,
      q,
      he
    );
    return ou(O, C.targetId, J.ya), J.snapshot;
  }(n, y, A, b);
  const s = await Xc(
    n.localStore,
    e,
    /* usePreviousResults= */
    !0
  ), a = new Lv(e, s.Is), c = a.Va(s.documents), l = Tr.createSynthesizedTargetChangeForCurrentChange(t, r && n.onlineState !== "Offline", i), d = a.applyChanges(
    c,
    /* limboResolutionEnabled= */
    n.isPrimaryClient,
    l
  );
  ou(n, t, d.ya);
  const p = new Mv(e, t, a);
  return n.va.set(e, p), n.Fa.has(t) ? n.Fa.get(t).push(e) : n.Fa.set(t, [e]), d.snapshot;
}
async function $v(n, e, t) {
  const r = F(n), i = r.va.get(e), s = r.Fa.get(i.targetId);
  if (s.length > 1) return r.Fa.set(i.targetId, s.filter((a) => !Ni(a, e))), void r.va.delete(e);
  r.isPrimaryClient ? (r.sharedClientState.removeLocalQueryTarget(i.targetId), r.sharedClientState.isActiveQueryTarget(i.targetId) || await Qs(
    r.localStore,
    i.targetId,
    /*keepPersistedTargetData=*/
    !1
  ).then(() => {
    r.sharedClientState.clearQueryState(i.targetId), t && Do(r.remoteStore, i.targetId), Js(r, i.targetId);
  }).catch(vr)) : (Js(r, i.targetId), await Qs(
    r.localStore,
    i.targetId,
    /*keepPersistedTargetData=*/
    !0
  ));
}
async function qv(n, e) {
  const t = F(n), r = t.va.get(e), i = t.Fa.get(r.targetId);
  t.isPrimaryClient && i.length === 1 && // PORTING NOTE: Unregister the target ID with local Firestore client as
  // watch target.
  (t.sharedClientState.removeLocalQueryTarget(r.targetId), Do(t.remoteStore, r.targetId));
}
async function zv(n, e, t) {
  const r = Jv(n);
  try {
    const i = await function(a, c) {
      const l = F(a), d = ue.now(), p = c.reduce((b, D) => b.add(D.key), z());
      let y, A;
      return l.persistence.runTransaction("Locally write mutations", "readwrite", (b) => {
        let D = st(), O = z();
        return l.us.getEntries(b, p).next((C) => {
          D = C, D.forEach((B, $) => {
            $.isValidDocument() || (O = O.add(B));
          });
        }).next(() => l.localDocuments.getOverlayedDocuments(b, D)).next((C) => {
          y = C;
          const B = [];
          for (const $ of c) {
            const j = dy($, y.get($.key).overlayedDocument);
            j != null && // NOTE: The base state should only be applied if there's some
            // existing document to override, so use a Precondition of
            // exists=true
            B.push(new Yt($.key, j, Ol(j.value.mapValue), nt.exists(!0)));
          }
          return l.mutationQueue.addMutationBatch(b, d, B, c);
        }).next((C) => {
          A = C;
          const B = C.applyToLocalDocumentSet(y, O);
          return l.documentOverlayCache.saveOverlays(b, C.batchId, B);
        });
      }).then(() => ({
        batchId: A.batchId,
        changes: ql(y)
      }));
    }(r.localStore, e);
    r.sharedClientState.addPendingMutation(i.batchId), function(a, c, l) {
      let d = a.La[a.currentUser.toKey()];
      d || (d = new ee(G)), d = d.insert(c, l), a.La[a.currentUser.toKey()] = d;
    }(r, i.batchId, t), await Ar(r, i.changes), await Fi(r.remoteStore);
  } catch (i) {
    const s = Mo(i, "Failed to persist write");
    t.reject(s);
  }
}
async function bh(n, e) {
  const t = F(n);
  try {
    const r = await sv(t.localStore, e);
    e.targetChanges.forEach((i, s) => {
      const a = t.Oa.get(s);
      a && // Since this is a limbo resolution lookup, it's for a single document
      // and it could be added, modified, or removed, but not a combination.
      (Y(i.addedDocuments.size + i.modifiedDocuments.size + i.removedDocuments.size <= 1), i.addedDocuments.size > 0 ? a.Da = !0 : i.modifiedDocuments.size > 0 ? Y(a.Da) : i.removedDocuments.size > 0 && (Y(a.Da), a.Da = !1));
    }), await Ar(t, r, e);
  } catch (r) {
    await vr(r);
  }
}
function su(n, e, t) {
  const r = F(n);
  if (r.isPrimaryClient && t === 0 || !r.isPrimaryClient && t === 1) {
    const i = [];
    r.va.forEach((s, a) => {
      const c = a.view.Y_(e);
      c.snapshot && i.push(c.snapshot);
    }), function(a, c) {
      const l = F(a);
      l.onlineState = c;
      let d = !1;
      l.queries.forEach((p, y) => {
        for (const A of y.z_)
          A.Y_(c) && (d = !0);
      }), d && xo(l);
    }(r.eventManager, e), i.length && r.Ca.E_(i), r.onlineState = e, r.isPrimaryClient && r.sharedClientState.setOnlineState(e);
  }
}
async function Hv(n, e, t) {
  const r = F(n);
  r.sharedClientState.updateQueryState(e, "rejected", t);
  const i = r.Oa.get(e), s = i && i.key;
  if (s) {
    let a = new ee(M.comparator);
    a = a.insert(s, Ae.newNoDocument(s, U.min()));
    const c = z().add(s), l = new Mi(
      U.min(),
      /* targetChanges= */
      /* @__PURE__ */ new Map(),
      /* targetMismatches= */
      new ee(G),
      a,
      c
    );
    await bh(r, l), // Since this query failed, we won't want to manually unlisten to it.
    // We only remove it from bookkeeping after we successfully applied the
    // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
    // this query when the RemoteStore restarts the Watch stream, which should
    // re-trigger the target failure.
    r.xa = r.xa.remove(s), r.Oa.delete(e), Uo(r);
  } else await Qs(
    r.localStore,
    e,
    /* keepPersistedTargetData */
    !1
  ).then(() => Js(r, e, t)).catch(vr);
}
async function Wv(n, e) {
  const t = F(n), r = e.batch.batchId;
  try {
    const i = await iv(t.localStore, e);
    Ph(
      t,
      r,
      /*error=*/
      null
    ), Sh(t, r), t.sharedClientState.updateMutationState(r, "acknowledged"), await Ar(t, i);
  } catch (i) {
    await vr(i);
  }
}
async function Kv(n, e, t) {
  const r = F(n);
  try {
    const i = await function(a, c) {
      const l = F(a);
      return l.persistence.runTransaction("Reject batch", "readwrite-primary", (d) => {
        let p;
        return l.mutationQueue.lookupMutationBatch(d, c).next((y) => (Y(y !== null), p = y.keys(), l.mutationQueue.removeMutationBatch(d, y))).next(() => l.mutationQueue.performConsistencyCheck(d)).next(() => l.documentOverlayCache.removeOverlaysForBatchId(d, p, c)).next(() => l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d, p)).next(() => l.localDocuments.getDocuments(d, p));
      });
    }(r.localStore, e);
    Ph(r, e, t), Sh(r, e), r.sharedClientState.updateMutationState(e, "rejected", t), await Ar(r, i);
  } catch (i) {
    await vr(i);
  }
}
function Sh(n, e) {
  (n.Ba.get(e) || []).forEach((t) => {
    t.resolve();
  }), n.Ba.delete(e);
}
function Ph(n, e, t) {
  const r = F(n);
  let i = r.La[r.currentUser.toKey()];
  if (i) {
    const s = i.get(e);
    s && (t ? s.reject(t) : s.resolve(), i = i.remove(e)), r.La[r.currentUser.toKey()] = i;
  }
}
function Js(n, e, t = null) {
  n.sharedClientState.removeLocalQueryTarget(e);
  for (const r of n.Fa.get(e)) n.va.delete(r), t && n.Ca.Ka(r, t);
  n.Fa.delete(e), n.isPrimaryClient && n.Na.mr(e).forEach((r) => {
    n.Na.containsKey(r) || // We removed the last reference for this key
    Ch(n, r);
  });
}
function Ch(n, e) {
  n.Ma.delete(e.path.canonicalString());
  const t = n.xa.get(e);
  t !== null && (Do(n.remoteStore, t), n.xa = n.xa.remove(e), n.Oa.delete(t), Uo(n));
}
function ou(n, e, t) {
  for (const r of t) r instanceof wh ? (n.Na.addReference(r.key, e), Gv(n, r)) : r instanceof Ah ? (N("SyncEngine", "Document no longer in limbo: " + r.key), n.Na.removeReference(r.key, e), n.Na.containsKey(r.key) || // We removed the last reference for this key
  Ch(n, r.key)) : x();
}
function Gv(n, e) {
  const t = e.key, r = t.path.canonicalString();
  n.xa.get(t) || n.Ma.has(r) || (N("SyncEngine", "New document in limbo: " + t), n.Ma.add(r), Uo(n));
}
function Uo(n) {
  for (; n.Ma.size > 0 && n.xa.size < n.maxConcurrentLimboResolutions; ) {
    const e = n.Ma.values().next().value;
    n.Ma.delete(e);
    const t = new M(Z.fromString(e)), r = n.ka.next();
    n.Oa.set(r, new xv(t)), n.xa = n.xa.insert(t, r), ph(n.remoteStore, new _t(ze(Ao(t.path)), r, "TargetPurposeLimboResolution", yo.oe));
  }
}
async function Ar(n, e, t) {
  const r = F(n), i = [], s = [], a = [];
  r.va.isEmpty() || (r.va.forEach((c, l) => {
    a.push(r.Qa(l, e, t).then((d) => {
      var p;
      if ((d || t) && r.isPrimaryClient) {
        const y = d ? !d.fromCache : (p = t == null ? void 0 : t.targetChanges.get(l.targetId)) === null || p === void 0 ? void 0 : p.current;
        r.sharedClientState.updateQueryState(l.targetId, y ? "current" : "not-current");
      }
      if (d) {
        i.push(d);
        const y = ko.Ui(l.targetId, d);
        s.push(y);
      }
    }));
  }), await Promise.all(a), r.Ca.E_(i), await async function(l, d) {
    const p = F(l);
    try {
      await p.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (y) => S.forEach(d, (A) => S.forEach(A.Ki, (b) => p.persistence.referenceDelegate.addReference(y, A.targetId, b)).next(() => S.forEach(A.$i, (b) => p.persistence.referenceDelegate.removeReference(y, A.targetId, b)))));
    } catch (y) {
      if (!Er(y)) throw y;
      N("LocalStore", "Failed to update sequence numbers: " + y);
    }
    for (const y of d) {
      const A = y.targetId;
      if (!y.fromCache) {
        const b = p.ss.get(A), D = b.snapshotVersion, O = b.withLastLimboFreeSnapshotVersion(D);
        p.ss = p.ss.insert(A, O);
      }
    }
  }(r.localStore, s));
}
async function Qv(n, e) {
  const t = F(n);
  if (!t.currentUser.isEqual(e)) {
    N("SyncEngine", "User change. New user:", e.toKey());
    const r = await lh(t.localStore, e);
    t.currentUser = e, // Fails tasks waiting for pending writes requested by previous user.
    function(s, a) {
      s.Ba.forEach((c) => {
        c.forEach((l) => {
          l.reject(new L(P.CANCELLED, a));
        });
      }), s.Ba.clear();
    }(t, "'waitForPendingWrites' promise is rejected due to a user change."), // TODO(b/114226417): Consider calling this only in the primary tab.
    t.sharedClientState.handleUserChange(e, r.removedBatchIds, r.addedBatchIds), await Ar(t, r.ls);
  }
}
function Yv(n, e) {
  const t = F(n), r = t.Oa.get(e);
  if (r && r.Da) return z().add(r.key);
  {
    let i = z();
    const s = t.Fa.get(e);
    if (!s) return i;
    for (const a of s) {
      const c = t.va.get(a);
      i = i.unionWith(c.view.Ra);
    }
    return i;
  }
}
function kh(n) {
  const e = F(n);
  return e.remoteStore.remoteSyncer.applyRemoteEvent = bh.bind(null, e), e.remoteStore.remoteSyncer.getRemoteKeysForTarget = Yv.bind(null, e), e.remoteStore.remoteSyncer.rejectListen = Hv.bind(null, e), e.Ca.E_ = Ov.bind(null, e.eventManager), e.Ca.Ka = Vv.bind(null, e.eventManager), e;
}
function Jv(n) {
  const e = F(n);
  return e.remoteStore.remoteSyncer.applySuccessfulWrite = Wv.bind(null, e), e.remoteStore.remoteSyncer.rejectFailedWrite = Kv.bind(null, e), e;
}
class au {
  constructor() {
    this.synchronizeTabs = !1;
  }
  async initialize(e) {
    this.serializer = xi(e.databaseInfo.databaseId), this.sharedClientState = this.createSharedClientState(e), this.persistence = this.createPersistence(e), await this.persistence.start(), this.localStore = this.createLocalStore(e), this.gcScheduler = this.createGarbageCollectionScheduler(e, this.localStore), this.indexBackfillerScheduler = this.createIndexBackfillerScheduler(e, this.localStore);
  }
  createGarbageCollectionScheduler(e, t) {
    return null;
  }
  createIndexBackfillerScheduler(e, t) {
    return null;
  }
  createLocalStore(e) {
    return rv(this.persistence, new tv(), e.initialUser, this.serializer);
  }
  createPersistence(e) {
    return new Xy(Co.Yr, this.serializer);
  }
  createSharedClientState(e) {
    return new lv();
  }
  async terminate() {
    var e, t;
    (e = this.gcScheduler) === null || e === void 0 || e.stop(), (t = this.indexBackfillerScheduler) === null || t === void 0 || t.stop(), this.sharedClientState.shutdown(), await this.persistence.shutdown();
  }
}
class Xv {
  async initialize(e, t) {
    this.localStore || (this.localStore = e.localStore, this.sharedClientState = e.sharedClientState, this.datastore = this.createDatastore(t), this.remoteStore = this.createRemoteStore(t), this.eventManager = this.createEventManager(t), this.syncEngine = this.createSyncEngine(
      t,
      /* startAsPrimary=*/
      !e.synchronizeTabs
    ), this.sharedClientState.onlineStateHandler = (r) => su(
      this.syncEngine,
      r,
      1
      /* OnlineStateSource.SharedClientState */
    ), this.remoteStore.remoteSyncer.handleCredentialChange = Qv.bind(null, this.syncEngine), await kv(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(e) {
    return function() {
      return new Nv();
    }();
  }
  createDatastore(e) {
    const t = xi(e.databaseInfo.databaseId), r = function(s) {
      return new pv(s);
    }(e.databaseInfo);
    return function(s, a, c, l) {
      return new _v(s, a, c, l);
    }(e.authCredentials, e.appCheckCredentials, r, t);
  }
  createRemoteStore(e) {
    return function(r, i, s, a, c) {
      return new vv(r, i, s, a, c);
    }(this.localStore, this.datastore, e.asyncQueue, (t) => su(
      this.syncEngine,
      t,
      0
      /* OnlineStateSource.RemoteStore */
    ), function() {
      return eu.D() ? new eu() : new hv();
    }());
  }
  createSyncEngine(e, t) {
    return function(i, s, a, c, l, d, p) {
      const y = new Uv(i, s, a, c, l, d);
      return p && (y.qa = !0), y;
    }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, e.initialUser, e.maxConcurrentLimboResolutions, t);
  }
  async terminate() {
    var e, t;
    await async function(i) {
      const s = F(i);
      N("RemoteStore", "RemoteStore shutting down."), s.N_.add(
        5
        /* OfflineCause.Shutdown */
      ), await wr(s), s.B_.shutdown(), // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
      // triggering spurious listener events with cached data, etc.
      s.k_.set(
        "Unknown"
        /* OnlineState.Unknown */
      );
    }(this.remoteStore), (e = this.datastore) === null || e === void 0 || e.terminate(), (t = this.eventManager) === null || t === void 0 || t.terminate();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
/**
 * @license
 * Copyright 2017 Google LLC
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
class Dh {
  constructor(e) {
    this.observer = e, /**
     * When set to true, will not raise future events. Necessary to deal with
     * async detachment of listener.
     */
    this.muted = !1;
  }
  next(e) {
    this.observer.next && this.Wa(this.observer.next, e);
  }
  error(e) {
    this.observer.error ? this.Wa(this.observer.error, e) : it("Uncaught Error in snapshot listener:", e.toString());
  }
  Ga() {
    this.muted = !0;
  }
  Wa(e, t) {
    this.muted || setTimeout(() => {
      this.muted || e(t);
    }, 0);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Zv {
  constructor(e, t, r, i) {
    this.authCredentials = e, this.appCheckCredentials = t, this.asyncQueue = r, this.databaseInfo = i, this.user = we.UNAUTHENTICATED, this.clientId = kl.newId(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this.authCredentials.start(r, async (s) => {
      N("FirestoreClient", "Received user=", s.uid), await this.authCredentialListener(s), this.user = s;
    }), this.appCheckCredentials.start(r, (s) => (N("FirestoreClient", "Received new app check token=", s), this.appCheckCredentialListener(s, this.user)));
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100
    };
  }
  setCredentialChangeListener(e) {
    this.authCredentialListener = e;
  }
  setAppCheckTokenChangeListener(e) {
    this.appCheckCredentialListener = e;
  }
  /**
   * Checks that the client has not been terminated. Ensures that other methods on //
   * this class cannot be called after the client is terminated. //
   */
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown) throw new L(P.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const e = new Et();
    return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
      try {
        this._onlineComponents && await this._onlineComponents.terminate(), this._offlineComponents && await this._offlineComponents.terminate(), // The credentials provider must be terminated after shutting down the
        // RemoteStore as it will prevent the RemoteStore from retrieving auth
        // tokens.
        this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), e.resolve();
      } catch (t) {
        const r = Mo(t, "Failed to shutdown persistence");
        e.reject(r);
      }
    }), e.promise;
  }
}
async function As(n, e) {
  n.asyncQueue.verifyOperationInProgress(), N("FirestoreClient", "Initializing OfflineComponentProvider");
  const t = n.configuration;
  await e.initialize(t);
  let r = t.initialUser;
  n.setCredentialChangeListener(async (i) => {
    r.isEqual(i) || (await lh(e.localStore, i), r = i);
  }), // When a user calls clearPersistence() in one client, all other clients
  // need to be terminated to allow the delete to succeed.
  e.persistence.setDatabaseDeletedListener(() => n.terminate()), n._offlineComponents = e;
}
async function cu(n, e) {
  n.asyncQueue.verifyOperationInProgress();
  const t = await tE(n);
  N("FirestoreClient", "Initializing OnlineComponentProvider"), await e.initialize(t, n.configuration), // The CredentialChangeListener of the online component provider takes
  // precedence over the offline component provider.
  n.setCredentialChangeListener((r) => tu(e.remoteStore, r)), n.setAppCheckTokenChangeListener((r, i) => tu(e.remoteStore, i)), n._onlineComponents = e;
}
function eE(n) {
  return n.name === "FirebaseError" ? n.code === P.FAILED_PRECONDITION || n.code === P.UNIMPLEMENTED : !(typeof DOMException < "u" && n instanceof DOMException) || // When the browser is out of quota we could get either quota exceeded
  // or an aborted error depending on whether the error happened during
  // schema migration.
  n.code === 22 || n.code === 20 || // Firefox Private Browsing mode disables IndexedDb and returns
  // INVALID_STATE for any usage.
  n.code === 11;
}
async function tE(n) {
  if (!n._offlineComponents) if (n._uninitializedComponentsProvider) {
    N("FirestoreClient", "Using user provided OfflineComponentProvider");
    try {
      await As(n, n._uninitializedComponentsProvider._offline);
    } catch (e) {
      const t = e;
      if (!eE(t)) throw t;
      hn("Error using user provided cache. Falling back to memory cache: " + t), await As(n, new au());
    }
  } else N("FirestoreClient", "Using default OfflineComponentProvider"), await As(n, new au());
  return n._offlineComponents;
}
async function Nh(n) {
  return n._onlineComponents || (n._uninitializedComponentsProvider ? (N("FirestoreClient", "Using user provided OnlineComponentProvider"), await cu(n, n._uninitializedComponentsProvider._online)) : (N("FirestoreClient", "Using default OnlineComponentProvider"), await cu(n, new Xv()))), n._onlineComponents;
}
function nE(n) {
  return Nh(n).then((e) => e.syncEngine);
}
async function Xs(n) {
  const e = await Nh(n), t = e.eventManager;
  return t.onListen = Fv.bind(null, e.syncEngine), t.onUnlisten = $v.bind(null, e.syncEngine), t.onFirstRemoteStoreListen = Bv.bind(null, e.syncEngine), t.onLastRemoteStoreUnlisten = qv.bind(null, e.syncEngine), t;
}
function rE(n, e, t = {}) {
  const r = new Et();
  return n.asyncQueue.enqueueAndForget(async () => function(s, a, c, l, d) {
    const p = new Dh({
      next: (A) => {
        a.enqueueAndForget(() => Ih(s, y)), A.fromCache && l.source === "server" ? d.reject(new L(P.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : d.resolve(A);
      },
      error: (A) => d.reject(A)
    }), y = new Th(c, p, {
      includeMetadataChanges: !0,
      oa: !0
    });
    return Eh(s, y);
  }(await Xs(n), n.asyncQueue, e, t, r)), r.promise;
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
function Oh(n) {
  const e = {};
  return n.timeoutSeconds !== void 0 && (e.timeoutSeconds = n.timeoutSeconds), e;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const uu = /* @__PURE__ */ new Map();
/**
 * @license
 * Copyright 2017 Google LLC
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
function Vh(n, e, t) {
  if (!t) throw new L(P.INVALID_ARGUMENT, `Function ${n}() cannot be called with an empty ${e}.`);
}
function iE(n, e, t, r) {
  if (e === !0 && r === !0) throw new L(P.INVALID_ARGUMENT, `${n} and ${t} cannot be used together.`);
}
function lu(n) {
  if (!M.isDocumentKey(n)) throw new L(P.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`);
}
function hu(n) {
  if (M.isDocumentKey(n)) throw new L(P.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`);
}
function Fo(n) {
  if (n === void 0) return "undefined";
  if (n === null) return "null";
  if (typeof n == "string") return n.length > 20 && (n = `${n.substring(0, 20)}...`), JSON.stringify(n);
  if (typeof n == "number" || typeof n == "boolean") return "" + n;
  if (typeof n == "object") {
    if (n instanceof Array) return "an array";
    {
      const e = (
        /** try to get the constructor name for an object. */
        function(r) {
          return r.constructor ? r.constructor.name : null;
        }(n)
      );
      return e ? `a custom ${e} object` : "an object";
    }
  }
  return typeof n == "function" ? "a function" : x();
}
function It(n, e) {
  if ("_delegate" in n && // Unwrap Compat types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (n = n._delegate), !(n instanceof e)) {
    if (e.name === n.constructor.name) throw new L(P.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
    {
      const t = Fo(n);
      throw new L(P.INVALID_ARGUMENT, `Expected type '${e.name}', but it was: ${t}`);
    }
  }
  return n;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class du {
  constructor(e) {
    var t, r;
    if (e.host === void 0) {
      if (e.ssl !== void 0) throw new L(P.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      this.host = "firestore.googleapis.com", this.ssl = !0;
    } else this.host = e.host, this.ssl = (t = e.ssl) === null || t === void 0 || t;
    if (this.credentials = e.credentials, this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties, this.localCache = e.localCache, e.cacheSizeBytes === void 0) this.cacheSizeBytes = 41943040;
    else {
      if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < 1048576) throw new L(P.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
      this.cacheSizeBytes = e.cacheSizeBytes;
    }
    iE("experimentalForceLongPolling", e.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", e.experimentalAutoDetectLongPolling), this.experimentalForceLongPolling = !!e.experimentalForceLongPolling, this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = !1 : e.experimentalAutoDetectLongPolling === void 0 ? this.experimentalAutoDetectLongPolling = !0 : (
      // For backwards compatibility, coerce the value to boolean even though
      // the TypeScript compiler has narrowed the type to boolean already.
      // noinspection PointlessBooleanExpressionJS
      this.experimentalAutoDetectLongPolling = !!e.experimentalAutoDetectLongPolling
    ), this.experimentalLongPollingOptions = Oh((r = e.experimentalLongPollingOptions) !== null && r !== void 0 ? r : {}), function(s) {
      if (s.timeoutSeconds !== void 0) {
        if (isNaN(s.timeoutSeconds)) throw new L(P.INVALID_ARGUMENT, `invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);
        if (s.timeoutSeconds < 5) throw new L(P.INVALID_ARGUMENT, `invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);
        if (s.timeoutSeconds > 30) throw new L(P.INVALID_ARGUMENT, `invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`);
      }
    }(this.experimentalLongPollingOptions), this.useFetchStreams = !!e.useFetchStreams;
  }
  isEqual(e) {
    return this.host === e.host && this.ssl === e.ssl && this.credentials === e.credentials && this.cacheSizeBytes === e.cacheSizeBytes && this.experimentalForceLongPolling === e.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === e.experimentalAutoDetectLongPolling && function(r, i) {
      return r.timeoutSeconds === i.timeoutSeconds;
    }(this.experimentalLongPollingOptions, e.experimentalLongPollingOptions) && this.ignoreUndefinedProperties === e.ignoreUndefinedProperties && this.useFetchStreams === e.useFetchStreams;
  }
}
class Bi {
  /** @hideconstructor */
  constructor(e, t, r, i) {
    this._authCredentials = e, this._appCheckCredentials = t, this._databaseId = r, this._app = i, /**
     * Whether it's a Firestore or Firestore Lite instance.
     */
    this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new du({}), this._settingsFrozen = !1;
  }
  /**
   * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
   * instance.
   */
  get app() {
    if (!this._app) throw new L(P.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== void 0;
  }
  _setSettings(e) {
    if (this._settingsFrozen) throw new L(P.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
    this._settings = new du(e), e.credentials !== void 0 && (this._authCredentials = function(r) {
      if (!r) return new I_();
      switch (r.type) {
        case "firstParty":
          return new R_(r.sessionIndex || "0", r.iamToken || null, r.authTokenFactory || null);
        case "provider":
          return r.client;
        default:
          throw new L(P.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
      }
    }(e.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return this._settingsFrozen = !0, this._settings;
  }
  _delete() {
    return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
  }
  /** Returns a JSON-serializable representation of this `Firestore` instance. */
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings
    };
  }
  /**
   * Terminates all components used by this client. Subclasses can override
   * this method to clean up their own dependencies, but must also call this
   * method.
   *
   * Only ever called once.
   */
  _terminate() {
    return function(t) {
      const r = uu.get(t);
      r && (N("ComponentProvider", "Removing Datastore"), uu.delete(t), r.terminate());
    }(this), Promise.resolve();
  }
}
function sE(n, e, t, r = {}) {
  var i;
  const s = (n = It(n, Bi))._getSettings(), a = `${e}:${t}`;
  if (s.host !== "firestore.googleapis.com" && s.host !== a && hn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."), n._setSettings(Object.assign(Object.assign({}, s), {
    host: a,
    ssl: !1
  })), r.mockUserToken) {
    let c, l;
    if (typeof r.mockUserToken == "string") c = r.mockUserToken, l = we.MOCK_USER;
    else {
      c = Vu(r.mockUserToken, (i = n._app) === null || i === void 0 ? void 0 : i.options.projectId);
      const d = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!d) throw new L(P.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
      l = new we(d);
    }
    n._authCredentials = new T_(new Cl(c, l));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Rr {
  // This is the lite version of the Query class in the main SDK.
  /** @hideconstructor protected */
  constructor(e, t, r) {
    this.converter = t, this._query = r, /** The type of this Firestore reference. */
    this.type = "query", this.firestore = e;
  }
  withConverter(e) {
    return new Rr(this.firestore, e, this._query);
  }
}
class Oe {
  /** @hideconstructor */
  constructor(e, t, r) {
    this.converter = t, this._key = r, /** The type of this Firestore reference. */
    this.type = "document", this.firestore = e;
  }
  get _path() {
    return this._key.path;
  }
  /**
   * The document's identifier within its collection.
   */
  get id() {
    return this._key.path.lastSegment();
  }
  /**
   * A string representing the path of the referenced document (relative
   * to the root of the database).
   */
  get path() {
    return this._key.path.canonicalString();
  }
  /**
   * The collection this `DocumentReference` belongs to.
   */
  get parent() {
    return new Tt(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(e) {
    return new Oe(this.firestore, e, this._key);
  }
}
class Tt extends Rr {
  /** @hideconstructor */
  constructor(e, t, r) {
    super(e, t, Ao(r)), this._path = r, /** The type of this Firestore reference. */
    this.type = "collection";
  }
  /** The collection's identifier. */
  get id() {
    return this._query.path.lastSegment();
  }
  /**
   * A string representing the path of the referenced collection (relative
   * to the root of the database).
   */
  get path() {
    return this._query.path.canonicalString();
  }
  /**
   * A reference to the containing `DocumentReference` if this is a
   * subcollection. If this isn't a subcollection, the reference is null.
   */
  get parent() {
    const e = this._path.popLast();
    return e.isEmpty() ? null : new Oe(
      this.firestore,
      /* converter= */
      null,
      new M(e)
    );
  }
  withConverter(e) {
    return new Tt(this.firestore, e, this._path);
  }
}
function uw(n, e, ...t) {
  if (n = ne(n), Vh("collection", "path", e), n instanceof Bi) {
    const r = Z.fromString(e, ...t);
    return hu(r), new Tt(
      n,
      /* converter= */
      null,
      r
    );
  }
  {
    if (!(n instanceof Oe || n instanceof Tt)) throw new L(P.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const r = n._path.child(Z.fromString(e, ...t));
    return hu(r), new Tt(
      n.firestore,
      /* converter= */
      null,
      r
    );
  }
}
function lw(n, e, ...t) {
  if (n = ne(n), // We allow omission of 'pathString' but explicitly prohibit passing in both
  // 'undefined' and 'null'.
  arguments.length === 1 && (e = kl.newId()), Vh("doc", "path", e), n instanceof Bi) {
    const r = Z.fromString(e, ...t);
    return lu(r), new Oe(
      n,
      /* converter= */
      null,
      new M(r)
    );
  }
  {
    if (!(n instanceof Oe || n instanceof Tt)) throw new L(P.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const r = n._path.child(Z.fromString(e, ...t));
    return lu(r), new Oe(n.firestore, n instanceof Tt ? n.converter : null, new M(r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class oE {
  constructor() {
    this._u = Promise.resolve(), // A list of retryable operations. Retryable operations are run in order and
    // retried with backoff.
    this.au = [], // Is this AsyncQueue being shut down? Once it is set to true, it will not
    // be changed again.
    this.uu = !1, // Operations scheduled to be queued in the future. Operations are
    // automatically removed after they are run or canceled.
    this.cu = [], // visible for testing
    this.lu = null, // Flag set while there's an outstanding AsyncQueue operation, used for
    // assertion sanity-checks.
    this.hu = !1, // Enabled during shutdown on Safari to prevent future access to IndexedDB.
    this.Pu = !1, // List of TimerIds to fast-forward delays for.
    this.Iu = [], // Backoff timer used to schedule retries for retryable operations
    this.e_ = new dh(
      this,
      "async_queue_retry"
      /* TimerId.AsyncQueueRetry */
    ), // Visibility handler that triggers an immediate retry of all retryable
    // operations. Meant to speed up recovery when we regain file system access
    // after page comes into foreground.
    this.Tu = () => {
      const t = ws();
      t && N("AsyncQueue", "Visibility state changed to " + t.visibilityState), this.e_.zo();
    };
    const e = ws();
    e && typeof e.addEventListener == "function" && e.addEventListener("visibilitychange", this.Tu);
  }
  get isShuttingDown() {
    return this.uu;
  }
  /**
   * Adds a new operation to the queue without waiting for it to complete (i.e.
   * we ignore the Promise result).
   */
  enqueueAndForget(e) {
    this.enqueue(e);
  }
  enqueueAndForgetEvenWhileRestricted(e) {
    this.Eu(), // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.du(e);
  }
  enterRestrictedMode(e) {
    if (!this.uu) {
      this.uu = !0, this.Pu = e || !1;
      const t = ws();
      t && typeof t.removeEventListener == "function" && t.removeEventListener("visibilitychange", this.Tu);
    }
  }
  enqueue(e) {
    if (this.Eu(), this.uu)
      return new Promise(() => {
      });
    const t = new Et();
    return this.du(() => this.uu && this.Pu ? Promise.resolve() : (e().then(t.resolve, t.reject), t.promise)).then(() => t.promise);
  }
  enqueueRetryable(e) {
    this.enqueueAndForget(() => (this.au.push(e), this.Au()));
  }
  /**
   * Runs the next operation from the retryable queue. If the operation fails,
   * reschedules with backoff.
   */
  async Au() {
    if (this.au.length !== 0) {
      try {
        await this.au[0](), this.au.shift(), this.e_.reset();
      } catch (e) {
        if (!Er(e)) throw e;
        N("AsyncQueue", "Operation failed with retryable error: " + e);
      }
      this.au.length > 0 && // If there are additional operations, we re-schedule `retryNextOp()`.
      // This is necessary to run retryable operations that failed during
      // their initial attempt since we don't know whether they are already
      // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
      // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
      // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
      // call scheduled here.
      // Since `backoffAndRun()` cancels an existing backoff and schedules a
      // new backoff on every call, there is only ever a single additional
      // operation in the queue.
      this.e_.Wo(() => this.Au());
    }
  }
  du(e) {
    const t = this._u.then(() => (this.hu = !0, e().catch((r) => {
      this.lu = r, this.hu = !1;
      const i = (
        /**
        * Chrome includes Error.message in Error.stack. Other browsers do not.
        * This returns expected output of message + stack when available.
        * @param error - Error or FirestoreError
        */
        function(a) {
          let c = a.message || "";
          return a.stack && (c = a.stack.includes(a.message) ? a.stack : a.message + `
` + a.stack), c;
        }(r)
      );
      throw it("INTERNAL UNHANDLED ERROR: ", i), r;
    }).then((r) => (this.hu = !1, r))));
    return this._u = t, t;
  }
  enqueueAfterDelay(e, t, r) {
    this.Eu(), // Fast-forward delays for timerIds that have been overridden.
    this.Iu.indexOf(e) > -1 && (t = 0);
    const i = Lo.createAndSchedule(this, e, t, r, (s) => this.Ru(s));
    return this.cu.push(i), i;
  }
  Eu() {
    this.lu && x();
  }
  verifyOperationInProgress() {
  }
  /**
   * Waits until all currently queued tasks are finished executing. Delayed
   * operations are not run.
   */
  async Vu() {
    let e;
    do
      e = this._u, await e;
    while (e !== this._u);
  }
  /**
   * For Tests: Determine if a delayed operation with a particular TimerId
   * exists.
   */
  mu(e) {
    for (const t of this.cu) if (t.timerId === e) return !0;
    return !1;
  }
  /**
   * For Tests: Runs some or all delayed operations early.
   *
   * @param lastTimerId - Delayed operations up to and including this TimerId
   * will be drained. Pass TimerId.All to run all delayed operations.
   * @returns a Promise that resolves once all operations have been run.
   */
  fu(e) {
    return this.Vu().then(() => {
      this.cu.sort((t, r) => t.targetTimeMs - r.targetTimeMs);
      for (const t of this.cu) if (t.skipDelay(), e !== "all" && t.timerId === e) break;
      return this.Vu();
    });
  }
  /**
   * For Tests: Skip all subsequent delays for a timer id.
   */
  gu(e) {
    this.Iu.push(e);
  }
  /** Called once a DelayedOperation is run or canceled. */
  Ru(e) {
    const t = this.cu.indexOf(e);
    this.cu.splice(t, 1);
  }
}
function fu(n) {
  return function(t, r) {
    if (typeof t != "object" || t === null) return !1;
    const i = t;
    for (const s of r) if (s in i && typeof i[s] == "function") return !0;
    return !1;
  }(n, ["next", "error", "complete"]);
}
class fr extends Bi {
  /** @hideconstructor */
  constructor(e, t, r, i) {
    super(e, t, r, i), /**
     * Whether it's a {@link Firestore} or Firestore Lite instance.
     */
    this.type = "firestore", this._queue = function() {
      return new oE();
    }(), this._persistenceKey = (i == null ? void 0 : i.name) || "[DEFAULT]";
  }
  _terminate() {
    return this._firestoreClient || // The client must be initialized to ensure that all subsequent API
    // usage throws an exception.
    Lh(this), this._firestoreClient.terminate();
  }
}
function aE(n, e) {
  const t = typeof n == "object" ? n : bi(), r = typeof n == "string" ? n : "(default)", i = bt(t, "firestore").getImmediate({
    identifier: r
  });
  if (!i._initialized) {
    const s = Du("firestore");
    s && sE(i, ...s);
  }
  return i;
}
function Bo(n) {
  return n._firestoreClient || Lh(n), n._firestoreClient.verifyNotTerminated(), n._firestoreClient;
}
function Lh(n) {
  var e, t, r;
  const i = n._freezeSettings(), s = function(c, l, d, p) {
    return new U_(c, l, d, p.host, p.ssl, p.experimentalForceLongPolling, p.experimentalAutoDetectLongPolling, Oh(p.experimentalLongPollingOptions), p.useFetchStreams);
  }(n._databaseId, ((e = n._app) === null || e === void 0 ? void 0 : e.options.appId) || "", n._persistenceKey, i);
  n._firestoreClient = new Zv(n._authCredentials, n._appCheckCredentials, n._queue, s), !((t = i.localCache) === null || t === void 0) && t._offlineComponentProvider && (!((r = i.localCache) === null || r === void 0) && r._onlineComponentProvider) && (n._firestoreClient._uninitializedComponentsProvider = {
    _offlineKind: i.localCache.kind,
    _offline: i.localCache._offlineComponentProvider,
    _online: i.localCache._onlineComponentProvider
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class _n {
  /** @hideconstructor */
  constructor(e) {
    this._byteString = e;
  }
  /**
   * Creates a new `Bytes` object from the given Base64 string, converting it to
   * bytes.
   *
   * @param base64 - The Base64 string used to create the `Bytes` object.
   */
  static fromBase64String(e) {
    try {
      return new _n(_e.fromBase64String(e));
    } catch (t) {
      throw new L(P.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + t);
    }
  }
  /**
   * Creates a new `Bytes` object from the given Uint8Array.
   *
   * @param array - The Uint8Array used to create the `Bytes` object.
   */
  static fromUint8Array(e) {
    return new _n(_e.fromUint8Array(e));
  }
  /**
   * Returns the underlying bytes as a Base64-encoded string.
   *
   * @returns The Base64-encoded string created from the `Bytes` object.
   */
  toBase64() {
    return this._byteString.toBase64();
  }
  /**
   * Returns the underlying bytes in a new `Uint8Array`.
   *
   * @returns The Uint8Array created from the `Bytes` object.
   */
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  /**
   * Returns a string representation of the `Bytes` object.
   *
   * @returns A string representation of the `Bytes` object.
   */
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  /**
   * Returns true if this `Bytes` object is equal to the provided one.
   *
   * @param other - The `Bytes` object to compare against.
   * @returns true if this `Bytes` object is equal to the provided one.
   */
  isEqual(e) {
    return this._byteString.isEqual(e._byteString);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class jo {
  /**
   * Creates a `FieldPath` from the provided field names. If more than one field
   * name is provided, the path will point to a nested field in a document.
   *
   * @param fieldNames - A list of field names.
   */
  constructor(...e) {
    for (let t = 0; t < e.length; ++t) if (e[t].length === 0) throw new L(P.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    this._internalPath = new pe(e);
  }
  /**
   * Returns true if this `FieldPath` is equal to the provided one.
   *
   * @param other - The `FieldPath` to compare against.
   * @returns true if this `FieldPath` is equal to the provided one.
   */
  isEqual(e) {
    return this._internalPath.isEqual(e._internalPath);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Mh {
  /**
   * @param _methodName - The public API endpoint that returns this class.
   * @hideconstructor
   */
  constructor(e) {
    this._methodName = e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class $o {
  /**
   * Creates a new immutable `GeoPoint` object with the provided latitude and
   * longitude values.
   * @param latitude - The latitude as number between -90 and 90.
   * @param longitude - The longitude as number between -180 and 180.
   */
  constructor(e, t) {
    if (!isFinite(e) || e < -90 || e > 90) throw new L(P.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + e);
    if (!isFinite(t) || t < -180 || t > 180) throw new L(P.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + t);
    this._lat = e, this._long = t;
  }
  /**
   * The latitude of this `GeoPoint` instance.
   */
  get latitude() {
    return this._lat;
  }
  /**
   * The longitude of this `GeoPoint` instance.
   */
  get longitude() {
    return this._long;
  }
  /**
   * Returns true if this `GeoPoint` is equal to the provided one.
   *
   * @param other - The `GeoPoint` to compare against.
   * @returns true if this `GeoPoint` is equal to the provided one.
   */
  isEqual(e) {
    return this._lat === e._lat && this._long === e._long;
  }
  /** Returns a JSON-serializable representation of this GeoPoint. */
  toJSON() {
    return {
      latitude: this._lat,
      longitude: this._long
    };
  }
  /**
   * Actually private to JS consumers of our API, so this function is prefixed
   * with an underscore.
   */
  _compareTo(e) {
    return G(this._lat, e._lat) || G(this._long, e._long);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
const cE = /^__.*__$/;
class uE {
  constructor(e, t, r) {
    this.data = e, this.fieldMask = t, this.fieldTransforms = r;
  }
  toMutation(e, t) {
    return this.fieldMask !== null ? new Yt(e, this.data, this.fieldMask, t, this.fieldTransforms) : new Ir(e, this.data, t, this.fieldTransforms);
  }
}
function xh(n) {
  switch (n) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw x();
  }
}
class qo {
  /**
   * Initializes a ParseContext with the given source and path.
   *
   * @param settings - The settings for the parser.
   * @param databaseId - The database ID of the Firestore instance.
   * @param serializer - The serializer to use to generate the Value proto.
   * @param ignoreUndefinedProperties - Whether to ignore undefined properties
   * rather than throw.
   * @param fieldTransforms - A mutable list of field transforms encountered
   * while parsing the data.
   * @param fieldMask - A mutable list of field paths encountered while parsing
   * the data.
   *
   * TODO(b/34871131): We don't support array paths right now, so path can be
   * null to indicate the context represents any location within an array (in
   * which case certain features will not work and errors will be somewhat
   * compromised).
   */
  constructor(e, t, r, i, s, a) {
    this.settings = e, this.databaseId = t, this.serializer = r, this.ignoreUndefinedProperties = i, // Minor hack: If fieldTransforms is undefined, we assume this is an
    // external call and we need to validate the entire path.
    s === void 0 && this.pu(), this.fieldTransforms = s || [], this.fieldMask = a || [];
  }
  get path() {
    return this.settings.path;
  }
  get yu() {
    return this.settings.yu;
  }
  /** Returns a new context with the specified settings overwritten. */
  wu(e) {
    return new qo(Object.assign(Object.assign({}, this.settings), e), this.databaseId, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
  }
  Su(e) {
    var t;
    const r = (t = this.path) === null || t === void 0 ? void 0 : t.child(e), i = this.wu({
      path: r,
      bu: !1
    });
    return i.Du(e), i;
  }
  Cu(e) {
    var t;
    const r = (t = this.path) === null || t === void 0 ? void 0 : t.child(e), i = this.wu({
      path: r,
      bu: !1
    });
    return i.pu(), i;
  }
  vu(e) {
    return this.wu({
      path: void 0,
      bu: !0
    });
  }
  Fu(e) {
    return Ii(e, this.settings.methodName, this.settings.Mu || !1, this.path, this.settings.xu);
  }
  /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
  contains(e) {
    return this.fieldMask.find((t) => e.isPrefixOf(t)) !== void 0 || this.fieldTransforms.find((t) => e.isPrefixOf(t.field)) !== void 0;
  }
  pu() {
    if (this.path) for (let e = 0; e < this.path.length; e++) this.Du(this.path.get(e));
  }
  Du(e) {
    if (e.length === 0) throw this.Fu("Document fields must not be empty");
    if (xh(this.yu) && cE.test(e)) throw this.Fu('Document fields cannot begin and end with "__"');
  }
}
class lE {
  constructor(e, t, r) {
    this.databaseId = e, this.ignoreUndefinedProperties = t, this.serializer = r || xi(e);
  }
  /** Creates a new top-level parse context. */
  Ou(e, t, r, i = !1) {
    return new qo({
      yu: e,
      methodName: t,
      xu: r,
      path: pe.emptyPath(),
      bu: !1,
      Mu: i
    }, this.databaseId, this.serializer, this.ignoreUndefinedProperties);
  }
}
function hE(n) {
  const e = n._freezeSettings(), t = xi(n._databaseId);
  return new lE(n._databaseId, !!e.ignoreUndefinedProperties, t);
}
function dE(n, e, t, r, i, s = {}) {
  const a = n.Ou(s.merge || s.mergeFields ? 2 : 0, e, t, i);
  jh("Data must be an object, but it was:", a, r);
  const c = Fh(r, a);
  let l, d;
  if (s.merge) l = new je(a.fieldMask), d = a.fieldTransforms;
  else if (s.mergeFields) {
    const p = [];
    for (const y of s.mergeFields) {
      const A = fE(e, y, t);
      if (!a.contains(A)) throw new L(P.INVALID_ARGUMENT, `Field '${A}' is specified in your field mask but missing from your input data.`);
      mE(p, A) || p.push(A);
    }
    l = new je(p), d = a.fieldTransforms.filter((y) => l.covers(y.field));
  } else l = null, d = a.fieldTransforms;
  return new uE(new Le(c), l, d);
}
function Uh(n, e) {
  if (Bh(
    // Unwrap the API type from the Compat SDK. This will return the API type
    // from firestore-exp.
    n = ne(n)
  )) return jh("Unsupported field value:", e, n), Fh(n, e);
  if (n instanceof Mh)
    return function(r, i) {
      if (!xh(i.yu)) throw i.Fu(`${r._methodName}() can only be used with update() and set()`);
      if (!i.path) throw i.Fu(`${r._methodName}() is not currently supported inside arrays`);
      const s = r._toFieldTransform(i);
      s && i.fieldTransforms.push(s);
    }(n, e), null;
  if (n === void 0 && e.ignoreUndefinedProperties)
    return null;
  if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.fieldMask.push(e.path), n instanceof Array
  ) {
    if (e.settings.bu && e.yu !== 4) throw e.Fu("Nested arrays are not supported");
    return function(r, i) {
      const s = [];
      let a = 0;
      for (const c of r) {
        let l = Uh(c, i.vu(a));
        l == null && // Just include nulls in the array for fields being replaced with a
        // sentinel.
        (l = {
          nullValue: "NULL_VALUE"
        }), s.push(l), a++;
      }
      return {
        arrayValue: {
          values: s
        }
      };
    }(n, e);
  }
  return function(r, i) {
    if ((r = ne(r)) === null) return {
      nullValue: "NULL_VALUE"
    };
    if (typeof r == "number") return oy(i.serializer, r);
    if (typeof r == "boolean") return {
      booleanValue: r
    };
    if (typeof r == "string") return {
      stringValue: r
    };
    if (r instanceof Date) {
      const s = ue.fromDate(r);
      return {
        timestampValue: vi(i.serializer, s)
      };
    }
    if (r instanceof ue) {
      const s = new ue(r.seconds, 1e3 * Math.floor(r.nanoseconds / 1e3));
      return {
        timestampValue: vi(i.serializer, s)
      };
    }
    if (r instanceof $o) return {
      geoPointValue: {
        latitude: r.latitude,
        longitude: r.longitude
      }
    };
    if (r instanceof _n) return {
      bytesValue: rh(i.serializer, r._byteString)
    };
    if (r instanceof Oe) {
      const s = i.databaseId, a = r.firestore._databaseId;
      if (!a.isEqual(s)) throw i.Fu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);
      return {
        referenceValue: So(r.firestore._databaseId || i.databaseId, r._key.path)
      };
    }
    throw i.Fu(`Unsupported field value: ${Fo(r)}`);
  }(n, e);
}
function Fh(n, e) {
  const t = {};
  return Dl(n) ? (
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.fieldMask.push(e.path)
  ) : In(n, (r, i) => {
    const s = Uh(i, e.Su(r));
    s != null && (t[r] = s);
  }), {
    mapValue: {
      fields: t
    }
  };
}
function Bh(n) {
  return !(typeof n != "object" || n === null || n instanceof Array || n instanceof Date || n instanceof ue || n instanceof $o || n instanceof _n || n instanceof Oe || n instanceof Mh);
}
function jh(n, e, t) {
  if (!Bh(t) || !function(i) {
    return typeof i == "object" && i !== null && (Object.getPrototypeOf(i) === Object.prototype || Object.getPrototypeOf(i) === null);
  }(t)) {
    const r = Fo(t);
    throw r === "an object" ? e.Fu(n + " a custom object") : e.Fu(n + " " + r);
  }
}
function fE(n, e, t) {
  if (
    // If required, replace the FieldPath Compat class with the firestore-exp
    // FieldPath.
    (e = ne(e)) instanceof jo
  ) return e._internalPath;
  if (typeof e == "string") return $h(n, e);
  throw Ii(
    "Field path arguments must be of type string or ",
    n,
    /* hasConverter= */
    !1,
    /* path= */
    void 0,
    t
  );
}
const pE = new RegExp("[~\\*/\\[\\]]");
function $h(n, e, t) {
  if (e.search(pE) >= 0) throw Ii(
    `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
    n,
    /* hasConverter= */
    !1,
    /* path= */
    void 0,
    t
  );
  try {
    return new jo(...e.split("."))._internalPath;
  } catch {
    throw Ii(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      n,
      /* hasConverter= */
      !1,
      /* path= */
      void 0,
      t
    );
  }
}
function Ii(n, e, t, r, i) {
  const s = r && !r.isEmpty(), a = i !== void 0;
  let c = `Function ${e}() called with invalid data`;
  t && (c += " (via `toFirestore()`)"), c += ". ";
  let l = "";
  return (s || a) && (l += " (found", s && (l += ` in field ${r}`), a && (l += ` in document ${i}`), l += ")"), new L(P.INVALID_ARGUMENT, c + n + l);
}
function mE(n, e) {
  return n.some((t) => t.isEqual(e));
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class qh {
  // Note: This class is stripped down version of the DocumentSnapshot in
  // the legacy SDK. The changes are:
  // - No support for SnapshotMetadata.
  // - No support for SnapshotOptions.
  /** @hideconstructor protected */
  constructor(e, t, r, i, s) {
    this._firestore = e, this._userDataWriter = t, this._key = r, this._document = i, this._converter = s;
  }
  /** Property of the `DocumentSnapshot` that provides the document's ID. */
  get id() {
    return this._key.path.lastSegment();
  }
  /**
   * The `DocumentReference` for the document included in the `DocumentSnapshot`.
   */
  get ref() {
    return new Oe(this._firestore, this._converter, this._key);
  }
  /**
   * Signals whether or not the document at the snapshot's location exists.
   *
   * @returns true if the document exists.
   */
  exists() {
    return this._document !== null;
  }
  /**
   * Retrieves all fields in the document as an `Object`. Returns `undefined` if
   * the document doesn't exist.
   *
   * @returns An `Object` containing all fields in the document or `undefined`
   * if the document doesn't exist.
   */
  data() {
    if (this._document) {
      if (this._converter) {
        const e = new gE(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          /* converter= */
          null
        );
        return this._converter.fromFirestore(e);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  /**
   * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
   * document or field doesn't exist.
   *
   * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
   * field.
   * @returns The data at the specified field location or undefined if no such
   * field exists in the document.
   */
  // We are using `any` here to avoid an explicit cast by our users.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(e) {
    if (this._document) {
      const t = this._document.data.field(zh("DocumentSnapshot.get", e));
      if (t !== null) return this._userDataWriter.convertValue(t);
    }
  }
}
class gE extends qh {
  /**
   * Retrieves all fields in the document as an `Object`.
   *
   * @override
   * @returns An `Object` containing all fields in the document.
   */
  data() {
    return super.data();
  }
}
function zh(n, e) {
  return typeof e == "string" ? $h(n, e) : e instanceof jo ? e._internalPath : e._delegate._internalPath;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function Hh(n) {
  if (n.limitType === "L" && n.explicitOrderBy.length === 0) throw new L(P.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}
class _E {
  convertValue(e, t = "none") {
    switch (zt(e)) {
      case 0:
        return null;
      case 1:
        return e.booleanValue;
      case 2:
        return ae(e.integerValue || e.doubleValue);
      case 3:
        return this.convertTimestamp(e.timestampValue);
      case 4:
        return this.convertServerTimestamp(e, t);
      case 5:
        return e.stringValue;
      case 6:
        return this.convertBytes(qt(e.bytesValue));
      case 7:
        return this.convertReference(e.referenceValue);
      case 8:
        return this.convertGeoPoint(e.geoPointValue);
      case 9:
        return this.convertArray(e.arrayValue, t);
      case 10:
        return this.convertObject(e.mapValue, t);
      default:
        throw x();
    }
  }
  convertObject(e, t) {
    return this.convertObjectMap(e.fields, t);
  }
  /**
   * @internal
   */
  convertObjectMap(e, t = "none") {
    const r = {};
    return In(e, (i, s) => {
      r[i] = this.convertValue(s, t);
    }), r;
  }
  convertGeoPoint(e) {
    return new $o(ae(e.latitude), ae(e.longitude));
  }
  convertArray(e, t) {
    return (e.values || []).map((r) => this.convertValue(r, t));
  }
  convertServerTimestamp(e, t) {
    switch (t) {
      case "previous":
        const r = Eo(e);
        return r == null ? null : this.convertValue(r, t);
      case "estimate":
        return this.convertTimestamp(cr(e));
      default:
        return null;
    }
  }
  convertTimestamp(e) {
    const t = At(e);
    return new ue(t.seconds, t.nanos);
  }
  convertDocumentKey(e, t) {
    const r = Z.fromString(e);
    Y(uh(r));
    const i = new ur(r.get(1), r.get(3)), s = new M(r.popFirst(5));
    return i.isEqual(t) || // TODO(b/64130202): Somehow support foreign references.
    it(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`), s;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function yE(n, e, t) {
  let r;
  return r = n ? t && (t.merge || t.mergeFields) ? n.toFirestore(e, t) : n.toFirestore(e) : e, r;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Qn {
  /** @hideconstructor */
  constructor(e, t) {
    this.hasPendingWrites = e, this.fromCache = t;
  }
  /**
   * Returns true if this `SnapshotMetadata` is equal to the provided one.
   *
   * @param other - The `SnapshotMetadata` to compare against.
   * @returns true if this `SnapshotMetadata` is equal to the provided one.
   */
  isEqual(e) {
    return this.hasPendingWrites === e.hasPendingWrites && this.fromCache === e.fromCache;
  }
}
class Wh extends qh {
  /** @hideconstructor protected */
  constructor(e, t, r, i, s, a) {
    super(e, t, r, i, a), this._firestore = e, this._firestoreImpl = e, this.metadata = s;
  }
  /**
   * Returns whether or not the data exists. True if the document exists.
   */
  exists() {
    return super.exists();
  }
  /**
   * Retrieves all fields in the document as an `Object`. Returns `undefined` if
   * the document doesn't exist.
   *
   * By default, `serverTimestamp()` values that have not yet been
   * set to their final value will be returned as `null`. You can override
   * this by passing an options object.
   *
   * @param options - An options object to configure how data is retrieved from
   * the snapshot (for example the desired behavior for server timestamps that
   * have not yet been set to their final value).
   * @returns An `Object` containing all fields in the document or `undefined` if
   * the document doesn't exist.
   */
  data(e = {}) {
    if (this._document) {
      if (this._converter) {
        const t = new oi(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          /* converter= */
          null
        );
        return this._converter.fromFirestore(t, e);
      }
      return this._userDataWriter.convertValue(this._document.data.value, e.serverTimestamps);
    }
  }
  /**
   * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
   * document or field doesn't exist.
   *
   * By default, a `serverTimestamp()` that has not yet been set to
   * its final value will be returned as `null`. You can override this by
   * passing an options object.
   *
   * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
   * field.
   * @param options - An options object to configure how the field is retrieved
   * from the snapshot (for example the desired behavior for server timestamps
   * that have not yet been set to their final value).
   * @returns The data at the specified field location or undefined if no such
   * field exists in the document.
   */
  // We are using `any` here to avoid an explicit cast by our users.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(e, t = {}) {
    if (this._document) {
      const r = this._document.data.field(zh("DocumentSnapshot.get", e));
      if (r !== null) return this._userDataWriter.convertValue(r, t.serverTimestamps);
    }
  }
}
class oi extends Wh {
  /**
   * Retrieves all fields in the document as an `Object`.
   *
   * By default, `serverTimestamp()` values that have not yet been
   * set to their final value will be returned as `null`. You can override
   * this by passing an options object.
   *
   * @override
   * @param options - An options object to configure how data is retrieved from
   * the snapshot (for example the desired behavior for server timestamps that
   * have not yet been set to their final value).
   * @returns An `Object` containing all fields in the document.
   */
  data(e = {}) {
    return super.data(e);
  }
}
class Kh {
  /** @hideconstructor */
  constructor(e, t, r, i) {
    this._firestore = e, this._userDataWriter = t, this._snapshot = i, this.metadata = new Qn(i.hasPendingWrites, i.fromCache), this.query = r;
  }
  /** An array of all the documents in the `QuerySnapshot`. */
  get docs() {
    const e = [];
    return this.forEach((t) => e.push(t)), e;
  }
  /** The number of documents in the `QuerySnapshot`. */
  get size() {
    return this._snapshot.docs.size;
  }
  /** True if there are no documents in the `QuerySnapshot`. */
  get empty() {
    return this.size === 0;
  }
  /**
   * Enumerates all of the documents in the `QuerySnapshot`.
   *
   * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
   * each document in the snapshot.
   * @param thisArg - The `this` binding for the callback.
   */
  forEach(e, t) {
    this._snapshot.docs.forEach((r) => {
      e.call(t, new oi(this._firestore, this._userDataWriter, r.key, r, new Qn(this._snapshot.mutatedKeys.has(r.key), this._snapshot.fromCache), this.query.converter));
    });
  }
  /**
   * Returns an array of the documents changes since the last snapshot. If this
   * is the first snapshot, all documents will be in the list as 'added'
   * changes.
   *
   * @param options - `SnapshotListenOptions` that control whether metadata-only
   * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
   * snapshot events.
   */
  docChanges(e = {}) {
    const t = !!e.includeMetadataChanges;
    if (t && this._snapshot.excludesMetadataChanges) throw new L(P.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
    return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === t || (this._cachedChanges = /** Calculates the array of `DocumentChange`s for a given `ViewSnapshot`. */
    function(i, s) {
      if (i._snapshot.oldDocs.isEmpty()) {
        let a = 0;
        return i._snapshot.docChanges.map((c) => {
          const l = new oi(i._firestore, i._userDataWriter, c.doc.key, c.doc, new Qn(i._snapshot.mutatedKeys.has(c.doc.key), i._snapshot.fromCache), i.query.converter);
          return c.doc, {
            type: "added",
            doc: l,
            oldIndex: -1,
            newIndex: a++
          };
        });
      }
      {
        let a = i._snapshot.oldDocs;
        return i._snapshot.docChanges.filter((c) => s || c.type !== 3).map((c) => {
          const l = new oi(i._firestore, i._userDataWriter, c.doc.key, c.doc, new Qn(i._snapshot.mutatedKeys.has(c.doc.key), i._snapshot.fromCache), i.query.converter);
          let d = -1, p = -1;
          return c.type !== 0 && (d = a.indexOf(c.doc.key), a = a.delete(c.doc.key)), c.type !== 1 && (a = a.add(c.doc), p = a.indexOf(c.doc.key)), {
            type: vE(c.type),
            doc: l,
            oldIndex: d,
            newIndex: p
          };
        });
      }
    }(this, t), this._cachedChangesIncludeMetadataChanges = t), this._cachedChanges;
  }
}
function vE(n) {
  switch (n) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return x();
  }
}
class zo extends _E {
  constructor(e) {
    super(), this.firestore = e;
  }
  convertBytes(e) {
    return new _n(e);
  }
  convertReference(e) {
    const t = this.convertDocumentKey(e, this.firestore._databaseId);
    return new Oe(
      this.firestore,
      /* converter= */
      null,
      t
    );
  }
}
function hw(n) {
  n = It(n, Rr);
  const e = It(n.firestore, fr), t = Bo(e), r = new zo(e);
  return Hh(n._query), rE(t, n._query).then((i) => new Kh(e, r, n, i));
}
function dw(n, e, t) {
  n = It(n, Oe);
  const r = It(n.firestore, fr), i = yE(n.converter, e, t);
  return EE(r, [dE(hE(r), "setDoc", n._key, i, n.converter !== null, t).toMutation(n._key, nt.none())]);
}
function fw(n, ...e) {
  var t, r, i;
  n = ne(n);
  let s = {
    includeMetadataChanges: !1,
    source: "default"
  }, a = 0;
  typeof e[a] != "object" || fu(e[a]) || (s = e[a], a++);
  const c = {
    includeMetadataChanges: s.includeMetadataChanges,
    source: s.source
  };
  if (fu(e[a])) {
    const y = e[a];
    e[a] = (t = y.next) === null || t === void 0 ? void 0 : t.bind(y), e[a + 1] = (r = y.error) === null || r === void 0 ? void 0 : r.bind(y), e[a + 2] = (i = y.complete) === null || i === void 0 ? void 0 : i.bind(y);
  }
  let l, d, p;
  if (n instanceof Oe) d = It(n.firestore, fr), p = Ao(n._key.path), l = {
    next: (y) => {
      e[a] && e[a](IE(d, n, y));
    },
    error: e[a + 1],
    complete: e[a + 2]
  };
  else {
    const y = It(n, Rr);
    d = It(y.firestore, fr), p = y._query;
    const A = new zo(d);
    l = {
      next: (b) => {
        e[a] && e[a](new Kh(d, A, y, b));
      },
      error: e[a + 1],
      complete: e[a + 2]
    }, Hh(n._query);
  }
  return function(A, b, D, O) {
    const C = new Dh(O), B = new Th(b, C, D);
    return A.asyncQueue.enqueueAndForget(async () => Eh(await Xs(A), B)), () => {
      C.Ga(), A.asyncQueue.enqueueAndForget(async () => Ih(await Xs(A), B));
    };
  }(Bo(d), p, c, l);
}
function EE(n, e) {
  return function(r, i) {
    const s = new Et();
    return r.asyncQueue.enqueueAndForget(async () => zv(await nE(r), i, s)), s.promise;
  }(Bo(n), e);
}
function IE(n, e, t) {
  const r = t.docs.get(e._key), i = new zo(n);
  return new Wh(n, i, e._key, r, new Qn(t.hasPendingWrites, t.fromCache), e.converter);
}
(function(e, t = !0) {
  (function(i) {
    En = i;
  })(Qt), $e(new Me("firestore", (r, { instanceIdentifier: i, options: s }) => {
    const a = r.getProvider("app").getImmediate(), c = new fr(new w_(r.getProvider("auth-internal")), new S_(r.getProvider("app-check-internal")), function(d, p) {
      if (!Object.prototype.hasOwnProperty.apply(d.options, ["projectId"])) throw new L(P.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
      return new ur(d.options.projectId, p);
    }(a, i), a);
    return s = Object.assign({
      useFetchStreams: t
    }, s), c._setSettings(s), c;
  }, "PUBLIC").setMultipleInstances(!0)), Pe(Nc, "4.6.5", e), // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
  Pe(Nc, "4.6.5", "esm2017");
})();
/**
 * @license
 * Copyright 2017 Google LLC
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
const Gh = "firebasestorage.googleapis.com", Qh = "storageBucket", TE = 2 * 60 * 1e3, wE = 10 * 60 * 1e3;
/**
 * @license
 * Copyright 2017 Google LLC
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
class ie extends Ue {
  /**
   * @param code - A `StorageErrorCode` string to be prefixed with 'storage/' and
   *  added to the end of the message.
   * @param message  - Error message.
   * @param status_ - Corresponding HTTP Status Code
   */
  constructor(e, t, r = 0) {
    super(Rs(e), `Firebase Storage: ${t} (${Rs(e)})`), this.status_ = r, this.customData = { serverResponse: null }, this._baseMessage = this.message, Object.setPrototypeOf(this, ie.prototype);
  }
  get status() {
    return this.status_;
  }
  set status(e) {
    this.status_ = e;
  }
  /**
   * Compares a `StorageErrorCode` against this error's code, filtering out the prefix.
   */
  _codeEquals(e) {
    return Rs(e) === this.code;
  }
  /**
   * Optional response message that was added by the server.
   */
  get serverResponse() {
    return this.customData.serverResponse;
  }
  set serverResponse(e) {
    this.customData.serverResponse = e, this.customData.serverResponse ? this.message = `${this._baseMessage}
${this.customData.serverResponse}` : this.message = this._baseMessage;
  }
}
var re;
(function(n) {
  n.UNKNOWN = "unknown", n.OBJECT_NOT_FOUND = "object-not-found", n.BUCKET_NOT_FOUND = "bucket-not-found", n.PROJECT_NOT_FOUND = "project-not-found", n.QUOTA_EXCEEDED = "quota-exceeded", n.UNAUTHENTICATED = "unauthenticated", n.UNAUTHORIZED = "unauthorized", n.UNAUTHORIZED_APP = "unauthorized-app", n.RETRY_LIMIT_EXCEEDED = "retry-limit-exceeded", n.INVALID_CHECKSUM = "invalid-checksum", n.CANCELED = "canceled", n.INVALID_EVENT_NAME = "invalid-event-name", n.INVALID_URL = "invalid-url", n.INVALID_DEFAULT_BUCKET = "invalid-default-bucket", n.NO_DEFAULT_BUCKET = "no-default-bucket", n.CANNOT_SLICE_BLOB = "cannot-slice-blob", n.SERVER_FILE_WRONG_SIZE = "server-file-wrong-size", n.NO_DOWNLOAD_URL = "no-download-url", n.INVALID_ARGUMENT = "invalid-argument", n.INVALID_ARGUMENT_COUNT = "invalid-argument-count", n.APP_DELETED = "app-deleted", n.INVALID_ROOT_OPERATION = "invalid-root-operation", n.INVALID_FORMAT = "invalid-format", n.INTERNAL_ERROR = "internal-error", n.UNSUPPORTED_ENVIRONMENT = "unsupported-environment";
})(re || (re = {}));
function Rs(n) {
  return "storage/" + n;
}
function Ho() {
  const n = "An unknown error occurred, please check the error payload for server response.";
  return new ie(re.UNKNOWN, n);
}
function AE(n) {
  return new ie(re.OBJECT_NOT_FOUND, "Object '" + n + "' does not exist.");
}
function RE(n) {
  return new ie(re.QUOTA_EXCEEDED, "Quota for bucket '" + n + "' exceeded, please view quota on https://firebase.google.com/pricing/.");
}
function bE() {
  const n = "User is not authenticated, please authenticate using Firebase Authentication and try again.";
  return new ie(re.UNAUTHENTICATED, n);
}
function SE() {
  return new ie(re.UNAUTHORIZED_APP, "This app does not have permission to access Firebase Storage on this project.");
}
function PE(n) {
  return new ie(re.UNAUTHORIZED, "User does not have permission to access '" + n + "'.");
}
function CE() {
  return new ie(re.RETRY_LIMIT_EXCEEDED, "Max retry time for operation exceeded, please try again.");
}
function kE() {
  return new ie(re.CANCELED, "User canceled the upload/download.");
}
function DE(n) {
  return new ie(re.INVALID_URL, "Invalid URL '" + n + "'.");
}
function NE(n) {
  return new ie(re.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + n + "'.");
}
function OE() {
  return new ie(re.NO_DEFAULT_BUCKET, "No default bucket found. Did you set the '" + Qh + "' property when initializing the app?");
}
function VE() {
  return new ie(re.CANNOT_SLICE_BLOB, "Cannot slice blob for upload. Please retry the upload.");
}
function LE() {
  return new ie(re.NO_DOWNLOAD_URL, "The given file does not have any download URLs.");
}
function ME(n) {
  return new ie(re.UNSUPPORTED_ENVIRONMENT, `${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);
}
function Zs(n) {
  return new ie(re.INVALID_ARGUMENT, n);
}
function Yh() {
  return new ie(re.APP_DELETED, "The Firebase app was deleted.");
}
function xE(n) {
  return new ie(re.INVALID_ROOT_OPERATION, "The operation '" + n + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");
}
function tr(n, e) {
  return new ie(re.INVALID_FORMAT, "String does not match format '" + n + "': " + e);
}
function qn(n) {
  throw new ie(re.INTERNAL_ERROR, "Internal error: " + n);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Ne {
  constructor(e, t) {
    this.bucket = e, this.path_ = t;
  }
  get path() {
    return this.path_;
  }
  get isRoot() {
    return this.path.length === 0;
  }
  fullServerUrl() {
    const e = encodeURIComponent;
    return "/b/" + e(this.bucket) + "/o/" + e(this.path);
  }
  bucketOnlyServerUrl() {
    return "/b/" + encodeURIComponent(this.bucket) + "/o";
  }
  static makeFromBucketSpec(e, t) {
    let r;
    try {
      r = Ne.makeFromUrl(e, t);
    } catch {
      return new Ne(e, "");
    }
    if (r.path === "")
      return r;
    throw NE(e);
  }
  static makeFromUrl(e, t) {
    let r = null;
    const i = "([A-Za-z0-9.\\-_]+)";
    function s(q) {
      q.path.charAt(q.path.length - 1) === "/" && (q.path_ = q.path_.slice(0, -1));
    }
    const a = "(/(.*))?$", c = new RegExp("^gs://" + i + a, "i"), l = { bucket: 1, path: 3 };
    function d(q) {
      q.path_ = decodeURIComponent(q.path);
    }
    const p = "v[A-Za-z0-9_]+", y = t.replace(/[.]/g, "\\."), A = "(/([^?#]*).*)?$", b = new RegExp(`^https?://${y}/${p}/b/${i}/o${A}`, "i"), D = { bucket: 1, path: 3 }, O = t === Gh ? "(?:storage.googleapis.com|storage.cloud.google.com)" : t, C = "([^?#]*)", B = new RegExp(`^https?://${O}/${i}/${C}`, "i"), j = [
      { regex: c, indices: l, postModify: s },
      {
        regex: b,
        indices: D,
        postModify: d
      },
      {
        regex: B,
        indices: { bucket: 1, path: 2 },
        postModify: d
      }
    ];
    for (let q = 0; q < j.length; q++) {
      const he = j[q], J = he.regex.exec(e);
      if (J) {
        const E = J[he.indices.bucket];
        let m = J[he.indices.path];
        m || (m = ""), r = new Ne(E, m), he.postModify(r);
        break;
      }
    }
    if (r == null)
      throw DE(e);
    return r;
  }
}
class UE {
  constructor(e) {
    this.promise_ = Promise.reject(e);
  }
  /** @inheritDoc */
  getPromise() {
    return this.promise_;
  }
  /** @inheritDoc */
  cancel(e = !1) {
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function FE(n, e, t) {
  let r = 1, i = null, s = null, a = !1, c = 0;
  function l() {
    return c === 2;
  }
  let d = !1;
  function p(...C) {
    d || (d = !0, e.apply(null, C));
  }
  function y(C) {
    i = setTimeout(() => {
      i = null, n(b, l());
    }, C);
  }
  function A() {
    s && clearTimeout(s);
  }
  function b(C, ...B) {
    if (d) {
      A();
      return;
    }
    if (C) {
      A(), p.call(null, C, ...B);
      return;
    }
    if (l() || a) {
      A(), p.call(null, C, ...B);
      return;
    }
    r < 64 && (r *= 2);
    let j;
    c === 1 ? (c = 2, j = 0) : j = (r + Math.random()) * 1e3, y(j);
  }
  let D = !1;
  function O(C) {
    D || (D = !0, A(), !d && (i !== null ? (C || (c = 2), clearTimeout(i), y(0)) : C || (c = 1)));
  }
  return y(0), s = setTimeout(() => {
    a = !0, O(!0);
  }, t), O;
}
function BE(n) {
  n(!1);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function jE(n) {
  return n !== void 0;
}
function $E(n) {
  return typeof n == "object" && !Array.isArray(n);
}
function Wo(n) {
  return typeof n == "string" || n instanceof String;
}
function pu(n) {
  return Ko() && n instanceof Blob;
}
function Ko() {
  return typeof Blob < "u";
}
function mu(n, e, t, r) {
  if (r < e)
    throw Zs(`Invalid value for '${n}'. Expected ${e} or greater.`);
  if (r > t)
    throw Zs(`Invalid value for '${n}'. Expected ${t} or less.`);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function Go(n, e, t) {
  let r = e;
  return t == null && (r = `https://${e}`), `${t}://${r}/v0${n}`;
}
function Jh(n) {
  const e = encodeURIComponent;
  let t = "?";
  for (const r in n)
    if (n.hasOwnProperty(r)) {
      const i = e(r) + "=" + e(n[r]);
      t = t + i + "&";
    }
  return t = t.slice(0, -1), t;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var Ut;
(function(n) {
  n[n.NO_ERROR = 0] = "NO_ERROR", n[n.NETWORK_ERROR = 1] = "NETWORK_ERROR", n[n.ABORT = 2] = "ABORT";
})(Ut || (Ut = {}));
/**
 * @license
 * Copyright 2022 Google LLC
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
function qE(n, e) {
  const t = n >= 500 && n < 600, i = [
    // Request Timeout: web server didn't receive full request in time.
    408,
    // Too Many Requests: you're getting rate-limited, basically.
    429
  ].indexOf(n) !== -1, s = e.indexOf(n) !== -1;
  return t || i || s;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class zE {
  constructor(e, t, r, i, s, a, c, l, d, p, y, A = !0) {
    this.url_ = e, this.method_ = t, this.headers_ = r, this.body_ = i, this.successCodes_ = s, this.additionalRetryCodes_ = a, this.callback_ = c, this.errorCallback_ = l, this.timeout_ = d, this.progressCallback_ = p, this.connectionFactory_ = y, this.retry = A, this.pendingConnection_ = null, this.backoffId_ = null, this.canceled_ = !1, this.appDelete_ = !1, this.promise_ = new Promise((b, D) => {
      this.resolve_ = b, this.reject_ = D, this.start_();
    });
  }
  /**
   * Actually starts the retry loop.
   */
  start_() {
    const e = (r, i) => {
      if (i) {
        r(!1, new Yr(!1, null, !0));
        return;
      }
      const s = this.connectionFactory_();
      this.pendingConnection_ = s;
      const a = (c) => {
        const l = c.loaded, d = c.lengthComputable ? c.total : -1;
        this.progressCallback_ !== null && this.progressCallback_(l, d);
      };
      this.progressCallback_ !== null && s.addUploadProgressListener(a), s.send(this.url_, this.method_, this.body_, this.headers_).then(() => {
        this.progressCallback_ !== null && s.removeUploadProgressListener(a), this.pendingConnection_ = null;
        const c = s.getErrorCode() === Ut.NO_ERROR, l = s.getStatus();
        if (!c || qE(l, this.additionalRetryCodes_) && this.retry) {
          const p = s.getErrorCode() === Ut.ABORT;
          r(!1, new Yr(!1, null, p));
          return;
        }
        const d = this.successCodes_.indexOf(l) !== -1;
        r(!0, new Yr(d, s));
      });
    }, t = (r, i) => {
      const s = this.resolve_, a = this.reject_, c = i.connection;
      if (i.wasSuccessCode)
        try {
          const l = this.callback_(c, c.getResponse());
          jE(l) ? s(l) : s();
        } catch (l) {
          a(l);
        }
      else if (c !== null) {
        const l = Ho();
        l.serverResponse = c.getErrorText(), this.errorCallback_ ? a(this.errorCallback_(c, l)) : a(l);
      } else if (i.canceled) {
        const l = this.appDelete_ ? Yh() : kE();
        a(l);
      } else {
        const l = CE();
        a(l);
      }
    };
    this.canceled_ ? t(!1, new Yr(!1, null, !0)) : this.backoffId_ = FE(e, t, this.timeout_);
  }
  /** @inheritDoc */
  getPromise() {
    return this.promise_;
  }
  /** @inheritDoc */
  cancel(e) {
    this.canceled_ = !0, this.appDelete_ = e || !1, this.backoffId_ !== null && BE(this.backoffId_), this.pendingConnection_ !== null && this.pendingConnection_.abort();
  }
}
class Yr {
  constructor(e, t, r) {
    this.wasSuccessCode = e, this.connection = t, this.canceled = !!r;
  }
}
function HE(n, e) {
  e !== null && e.length > 0 && (n.Authorization = "Firebase " + e);
}
function WE(n, e) {
  n["X-Firebase-Storage-Version"] = "webjs/" + (e ?? "AppManager");
}
function KE(n, e) {
  e && (n["X-Firebase-GMPID"] = e);
}
function GE(n, e) {
  e !== null && (n["X-Firebase-AppCheck"] = e);
}
function QE(n, e, t, r, i, s, a = !0) {
  const c = Jh(n.urlParams), l = n.url + c, d = Object.assign({}, n.headers);
  return KE(d, e), HE(d, t), WE(d, s), GE(d, r), new zE(l, n.method, d, n.body, n.successCodes, n.additionalRetryCodes, n.handler, n.errorHandler, n.timeout, n.progressCallback, i, a);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function YE() {
  return typeof BlobBuilder < "u" ? BlobBuilder : typeof WebKitBlobBuilder < "u" ? WebKitBlobBuilder : void 0;
}
function JE(...n) {
  const e = YE();
  if (e !== void 0) {
    const t = new e();
    for (let r = 0; r < n.length; r++)
      t.append(n[r]);
    return t.getBlob();
  } else {
    if (Ko())
      return new Blob(n);
    throw new ie(re.UNSUPPORTED_ENVIRONMENT, "This browser doesn't seem to support creating Blobs");
  }
}
function XE(n, e, t) {
  return n.webkitSlice ? n.webkitSlice(e, t) : n.mozSlice ? n.mozSlice(e, t) : n.slice ? n.slice(e, t) : null;
}
/**
 * @license
 * Copyright 2021 Google LLC
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
function ZE(n) {
  if (typeof atob > "u")
    throw ME("base-64");
  return atob(n);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
const qe = {
  /**
   * Indicates the string should be interpreted "raw", that is, as normal text.
   * The string will be interpreted as UTF-16, then uploaded as a UTF-8 byte
   * sequence.
   * Example: The string 'Hello! \\ud83d\\ude0a' becomes the byte sequence
   * 48 65 6c 6c 6f 21 20 f0 9f 98 8a
   */
  RAW: "raw",
  /**
   * Indicates the string should be interpreted as base64-encoded data.
   * Padding characters (trailing '='s) are optional.
   * Example: The string 'rWmO++E6t7/rlw==' becomes the byte sequence
   * ad 69 8e fb e1 3a b7 bf eb 97
   */
  BASE64: "base64",
  /**
   * Indicates the string should be interpreted as base64url-encoded data.
   * Padding characters (trailing '='s) are optional.
   * Example: The string 'rWmO--E6t7_rlw==' becomes the byte sequence
   * ad 69 8e fb e1 3a b7 bf eb 97
   */
  BASE64URL: "base64url",
  /**
   * Indicates the string is a data URL, such as one obtained from
   * canvas.toDataURL().
   * Example: the string 'data:application/octet-stream;base64,aaaa'
   * becomes the byte sequence
   * 69 a6 9a
   * (the content-type "application/octet-stream" is also applied, but can
   * be overridden in the metadata object).
   */
  DATA_URL: "data_url"
};
class bs {
  constructor(e, t) {
    this.data = e, this.contentType = t || null;
  }
}
function eI(n, e) {
  switch (n) {
    case qe.RAW:
      return new bs(Xh(e));
    case qe.BASE64:
    case qe.BASE64URL:
      return new bs(Zh(n, e));
    case qe.DATA_URL:
      return new bs(nI(e), rI(e));
  }
  throw Ho();
}
function Xh(n) {
  const e = [];
  for (let t = 0; t < n.length; t++) {
    let r = n.charCodeAt(t);
    if (r <= 127)
      e.push(r);
    else if (r <= 2047)
      e.push(192 | r >> 6, 128 | r & 63);
    else if ((r & 64512) === 55296)
      if (!(t < n.length - 1 && (n.charCodeAt(t + 1) & 64512) === 56320))
        e.push(239, 191, 189);
      else {
        const s = r, a = n.charCodeAt(++t);
        r = 65536 | (s & 1023) << 10 | a & 1023, e.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | r & 63);
      }
    else
      (r & 64512) === 56320 ? e.push(239, 191, 189) : e.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | r & 63);
  }
  return new Uint8Array(e);
}
function tI(n) {
  let e;
  try {
    e = decodeURIComponent(n);
  } catch {
    throw tr(qe.DATA_URL, "Malformed data URL.");
  }
  return Xh(e);
}
function Zh(n, e) {
  switch (n) {
    case qe.BASE64: {
      const i = e.indexOf("-") !== -1, s = e.indexOf("_") !== -1;
      if (i || s)
        throw tr(n, "Invalid character '" + (i ? "-" : "_") + "' found: is it base64url encoded?");
      break;
    }
    case qe.BASE64URL: {
      const i = e.indexOf("+") !== -1, s = e.indexOf("/") !== -1;
      if (i || s)
        throw tr(n, "Invalid character '" + (i ? "+" : "/") + "' found: is it base64 encoded?");
      e = e.replace(/-/g, "+").replace(/_/g, "/");
      break;
    }
  }
  let t;
  try {
    t = ZE(e);
  } catch (i) {
    throw i.message.includes("polyfill") ? i : tr(n, "Invalid character found");
  }
  const r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
class ed {
  constructor(e) {
    this.base64 = !1, this.contentType = null;
    const t = e.match(/^data:([^,]+)?,/);
    if (t === null)
      throw tr(qe.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
    const r = t[1] || null;
    r != null && (this.base64 = iI(r, ";base64"), this.contentType = this.base64 ? r.substring(0, r.length - 7) : r), this.rest = e.substring(e.indexOf(",") + 1);
  }
}
function nI(n) {
  const e = new ed(n);
  return e.base64 ? Zh(qe.BASE64, e.rest) : tI(e.rest);
}
function rI(n) {
  return new ed(n).contentType;
}
function iI(n, e) {
  return n.length >= e.length ? n.substring(n.length - e.length) === e : !1;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class gt {
  constructor(e, t) {
    let r = 0, i = "";
    pu(e) ? (this.data_ = e, r = e.size, i = e.type) : e instanceof ArrayBuffer ? (t ? this.data_ = new Uint8Array(e) : (this.data_ = new Uint8Array(e.byteLength), this.data_.set(new Uint8Array(e))), r = this.data_.length) : e instanceof Uint8Array && (t ? this.data_ = e : (this.data_ = new Uint8Array(e.length), this.data_.set(e)), r = e.length), this.size_ = r, this.type_ = i;
  }
  size() {
    return this.size_;
  }
  type() {
    return this.type_;
  }
  slice(e, t) {
    if (pu(this.data_)) {
      const r = this.data_, i = XE(r, e, t);
      return i === null ? null : new gt(i);
    } else {
      const r = new Uint8Array(this.data_.buffer, e, t - e);
      return new gt(r, !0);
    }
  }
  static getBlob(...e) {
    if (Ko()) {
      const t = e.map((r) => r instanceof gt ? r.data_ : r);
      return new gt(JE.apply(null, t));
    } else {
      const t = e.map((a) => Wo(a) ? eI(qe.RAW, a).data : a.data_);
      let r = 0;
      t.forEach((a) => {
        r += a.byteLength;
      });
      const i = new Uint8Array(r);
      let s = 0;
      return t.forEach((a) => {
        for (let c = 0; c < a.length; c++)
          i[s++] = a[c];
      }), new gt(i, !0);
    }
  }
  uploadData() {
    return this.data_;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function td(n) {
  let e;
  try {
    e = JSON.parse(n);
  } catch {
    return null;
  }
  return $E(e) ? e : null;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function sI(n) {
  if (n.length === 0)
    return null;
  const e = n.lastIndexOf("/");
  return e === -1 ? "" : n.slice(0, e);
}
function oI(n, e) {
  const t = e.split("/").filter((r) => r.length > 0).join("/");
  return n.length === 0 ? t : n + "/" + t;
}
function nd(n) {
  const e = n.lastIndexOf("/", n.length - 2);
  return e === -1 ? n : n.slice(e + 1);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function aI(n, e) {
  return e;
}
class Se {
  constructor(e, t, r, i) {
    this.server = e, this.local = t || e, this.writable = !!r, this.xform = i || aI;
  }
}
let Jr = null;
function cI(n) {
  return !Wo(n) || n.length < 2 ? n : nd(n);
}
function rd() {
  if (Jr)
    return Jr;
  const n = [];
  n.push(new Se("bucket")), n.push(new Se("generation")), n.push(new Se("metageneration")), n.push(new Se("name", "fullPath", !0));
  function e(s, a) {
    return cI(a);
  }
  const t = new Se("name");
  t.xform = e, n.push(t);
  function r(s, a) {
    return a !== void 0 ? Number(a) : a;
  }
  const i = new Se("size");
  return i.xform = r, n.push(i), n.push(new Se("timeCreated")), n.push(new Se("updated")), n.push(new Se("md5Hash", null, !0)), n.push(new Se("cacheControl", null, !0)), n.push(new Se("contentDisposition", null, !0)), n.push(new Se("contentEncoding", null, !0)), n.push(new Se("contentLanguage", null, !0)), n.push(new Se("contentType", null, !0)), n.push(new Se("metadata", "customMetadata", !0)), Jr = n, Jr;
}
function uI(n, e) {
  function t() {
    const r = n.bucket, i = n.fullPath, s = new Ne(r, i);
    return e._makeStorageReference(s);
  }
  Object.defineProperty(n, "ref", { get: t });
}
function lI(n, e, t) {
  const r = {};
  r.type = "file";
  const i = t.length;
  for (let s = 0; s < i; s++) {
    const a = t[s];
    r[a.local] = a.xform(r, e[a.server]);
  }
  return uI(r, n), r;
}
function id(n, e, t) {
  const r = td(e);
  return r === null ? null : lI(n, r, t);
}
function hI(n, e, t, r) {
  const i = td(e);
  if (i === null || !Wo(i.downloadTokens))
    return null;
  const s = i.downloadTokens;
  if (s.length === 0)
    return null;
  const a = encodeURIComponent;
  return s.split(",").map((d) => {
    const p = n.bucket, y = n.fullPath, A = "/b/" + a(p) + "/o/" + a(y), b = Go(A, t, r), D = Jh({
      alt: "media",
      token: d
    });
    return b + D;
  })[0];
}
function dI(n, e) {
  const t = {}, r = e.length;
  for (let i = 0; i < r; i++) {
    const s = e[i];
    s.writable && (t[s.server] = n[s.local]);
  }
  return JSON.stringify(t);
}
class sd {
  constructor(e, t, r, i) {
    this.url = e, this.method = t, this.handler = r, this.timeout = i, this.urlParams = {}, this.headers = {}, this.body = null, this.errorHandler = null, this.progressCallback = null, this.successCodes = [200], this.additionalRetryCodes = [];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function od(n) {
  if (!n)
    throw Ho();
}
function fI(n, e) {
  function t(r, i) {
    const s = id(n, i, e);
    return od(s !== null), s;
  }
  return t;
}
function pI(n, e) {
  function t(r, i) {
    const s = id(n, i, e);
    return od(s !== null), hI(s, i, n.host, n._protocol);
  }
  return t;
}
function ad(n) {
  function e(t, r) {
    let i;
    return t.getStatus() === 401 ? /* This exact message string is the only consistent part of the */ /* server's error response that identifies it as an App Check error. */ t.getErrorText().includes("Firebase App Check token is invalid") ? i = SE() : i = bE() : t.getStatus() === 402 ? i = RE(n.bucket) : t.getStatus() === 403 ? i = PE(n.path) : i = r, i.status = t.getStatus(), i.serverResponse = r.serverResponse, i;
  }
  return e;
}
function mI(n) {
  const e = ad(n);
  function t(r, i) {
    let s = e(r, i);
    return r.getStatus() === 404 && (s = AE(n.path)), s.serverResponse = i.serverResponse, s;
  }
  return t;
}
function gI(n, e, t) {
  const r = e.fullServerUrl(), i = Go(r, n.host, n._protocol), s = "GET", a = n.maxOperationRetryTime, c = new sd(i, s, pI(n, t), a);
  return c.errorHandler = mI(e), c;
}
function _I(n, e) {
  return n && n.contentType || e && e.type() || "application/octet-stream";
}
function yI(n, e, t) {
  const r = Object.assign({}, t);
  return r.fullPath = n.path, r.size = e.size(), r.contentType || (r.contentType = _I(null, e)), r;
}
function vI(n, e, t, r, i) {
  const s = e.bucketOnlyServerUrl(), a = {
    "X-Goog-Upload-Protocol": "multipart"
  };
  function c() {
    let j = "";
    for (let q = 0; q < 2; q++)
      j = j + Math.random().toString().slice(2);
    return j;
  }
  const l = c();
  a["Content-Type"] = "multipart/related; boundary=" + l;
  const d = yI(e, r, i), p = dI(d, t), y = "--" + l + `\r
Content-Type: application/json; charset=utf-8\r
\r
` + p + `\r
--` + l + `\r
Content-Type: ` + d.contentType + `\r
\r
`, A = `\r
--` + l + "--", b = gt.getBlob(y, r, A);
  if (b === null)
    throw VE();
  const D = { name: d.fullPath }, O = Go(s, n.host, n._protocol), C = "POST", B = n.maxUploadRetryTime, $ = new sd(O, C, fI(n, t), B);
  return $.urlParams = D, $.headers = a, $.body = b.uploadData(), $.errorHandler = ad(e), $;
}
class EI {
  constructor() {
    this.sent_ = !1, this.xhr_ = new XMLHttpRequest(), this.initXhr(), this.errorCode_ = Ut.NO_ERROR, this.sendPromise_ = new Promise((e) => {
      this.xhr_.addEventListener("abort", () => {
        this.errorCode_ = Ut.ABORT, e();
      }), this.xhr_.addEventListener("error", () => {
        this.errorCode_ = Ut.NETWORK_ERROR, e();
      }), this.xhr_.addEventListener("load", () => {
        e();
      });
    });
  }
  send(e, t, r, i) {
    if (this.sent_)
      throw qn("cannot .send() more than once");
    if (this.sent_ = !0, this.xhr_.open(t, e, !0), i !== void 0)
      for (const s in i)
        i.hasOwnProperty(s) && this.xhr_.setRequestHeader(s, i[s].toString());
    return r !== void 0 ? this.xhr_.send(r) : this.xhr_.send(), this.sendPromise_;
  }
  getErrorCode() {
    if (!this.sent_)
      throw qn("cannot .getErrorCode() before sending");
    return this.errorCode_;
  }
  getStatus() {
    if (!this.sent_)
      throw qn("cannot .getStatus() before sending");
    try {
      return this.xhr_.status;
    } catch {
      return -1;
    }
  }
  getResponse() {
    if (!this.sent_)
      throw qn("cannot .getResponse() before sending");
    return this.xhr_.response;
  }
  getErrorText() {
    if (!this.sent_)
      throw qn("cannot .getErrorText() before sending");
    return this.xhr_.statusText;
  }
  /** Aborts the request. */
  abort() {
    this.xhr_.abort();
  }
  getResponseHeader(e) {
    return this.xhr_.getResponseHeader(e);
  }
  addUploadProgressListener(e) {
    this.xhr_.upload != null && this.xhr_.upload.addEventListener("progress", e);
  }
  removeUploadProgressListener(e) {
    this.xhr_.upload != null && this.xhr_.upload.removeEventListener("progress", e);
  }
}
class II extends EI {
  initXhr() {
    this.xhr_.responseType = "text";
  }
}
function cd() {
  return new II();
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class Ht {
  constructor(e, t) {
    this._service = e, t instanceof Ne ? this._location = t : this._location = Ne.makeFromUrl(t, e.host);
  }
  /**
   * Returns the URL for the bucket and path this object references,
   *     in the form gs://<bucket>/<object-path>
   * @override
   */
  toString() {
    return "gs://" + this._location.bucket + "/" + this._location.path;
  }
  _newRef(e, t) {
    return new Ht(e, t);
  }
  /**
   * A reference to the root of this object's bucket.
   */
  get root() {
    const e = new Ne(this._location.bucket, "");
    return this._newRef(this._service, e);
  }
  /**
   * The name of the bucket containing this reference's object.
   */
  get bucket() {
    return this._location.bucket;
  }
  /**
   * The full path of this object.
   */
  get fullPath() {
    return this._location.path;
  }
  /**
   * The short name of this object, which is the last component of the full path.
   * For example, if fullPath is 'full/path/image.png', name is 'image.png'.
   */
  get name() {
    return nd(this._location.path);
  }
  /**
   * The `StorageService` instance this `StorageReference` is associated with.
   */
  get storage() {
    return this._service;
  }
  /**
   * A `StorageReference` pointing to the parent location of this `StorageReference`, or null if
   * this reference is the root.
   */
  get parent() {
    const e = sI(this._location.path);
    if (e === null)
      return null;
    const t = new Ne(this._location.bucket, e);
    return new Ht(this._service, t);
  }
  /**
   * Utility function to throw an error in methods that do not accept a root reference.
   */
  _throwIfRoot(e) {
    if (this._location.path === "")
      throw xE(e);
  }
}
function TI(n, e, t) {
  n._throwIfRoot("uploadBytes");
  const r = vI(n.storage, n._location, rd(), new gt(e, !0), t);
  return n.storage.makeRequestWithTokens(r, cd).then((i) => ({
    metadata: i,
    ref: n
  }));
}
function wI(n) {
  n._throwIfRoot("getDownloadURL");
  const e = gI(n.storage, n._location, rd());
  return n.storage.makeRequestWithTokens(e, cd).then((t) => {
    if (t === null)
      throw LE();
    return t;
  });
}
function AI(n, e) {
  const t = oI(n._location.path, e), r = new Ne(n._location.bucket, t);
  return new Ht(n.storage, r);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function RI(n) {
  return /^[A-Za-z]+:\/\//.test(n);
}
function bI(n, e) {
  return new Ht(n, e);
}
function ud(n, e) {
  if (n instanceof Qo) {
    const t = n;
    if (t._bucket == null)
      throw OE();
    const r = new Ht(t, t._bucket);
    return e != null ? ud(r, e) : r;
  } else
    return e !== void 0 ? AI(n, e) : n;
}
function SI(n, e) {
  if (e && RI(e)) {
    if (n instanceof Qo)
      return bI(n, e);
    throw Zs("To use ref(service, url), the first argument must be a Storage instance.");
  } else
    return ud(n, e);
}
function gu(n, e) {
  const t = e == null ? void 0 : e[Qh];
  return t == null ? null : Ne.makeFromBucketSpec(t, n);
}
function PI(n, e, t, r = {}) {
  n.host = `${e}:${t}`, n._protocol = "http";
  const { mockUserToken: i } = r;
  i && (n._overrideAuthToken = typeof i == "string" ? i : Vu(i, n.app.options.projectId));
}
class Qo {
  constructor(e, t, r, i, s) {
    this.app = e, this._authProvider = t, this._appCheckProvider = r, this._url = i, this._firebaseVersion = s, this._bucket = null, this._host = Gh, this._protocol = "https", this._appId = null, this._deleted = !1, this._maxOperationRetryTime = TE, this._maxUploadRetryTime = wE, this._requests = /* @__PURE__ */ new Set(), i != null ? this._bucket = Ne.makeFromBucketSpec(i, this._host) : this._bucket = gu(this._host, this.app.options);
  }
  /**
   * The host string for this service, in the form of `host` or
   * `host:port`.
   */
  get host() {
    return this._host;
  }
  set host(e) {
    this._host = e, this._url != null ? this._bucket = Ne.makeFromBucketSpec(this._url, e) : this._bucket = gu(e, this.app.options);
  }
  /**
   * The maximum time to retry uploads in milliseconds.
   */
  get maxUploadRetryTime() {
    return this._maxUploadRetryTime;
  }
  set maxUploadRetryTime(e) {
    mu(
      "time",
      /* minValue=*/
      0,
      /* maxValue= */
      Number.POSITIVE_INFINITY,
      e
    ), this._maxUploadRetryTime = e;
  }
  /**
   * The maximum time to retry operations other than uploads or downloads in
   * milliseconds.
   */
  get maxOperationRetryTime() {
    return this._maxOperationRetryTime;
  }
  set maxOperationRetryTime(e) {
    mu(
      "time",
      /* minValue=*/
      0,
      /* maxValue= */
      Number.POSITIVE_INFINITY,
      e
    ), this._maxOperationRetryTime = e;
  }
  async _getAuthToken() {
    if (this._overrideAuthToken)
      return this._overrideAuthToken;
    const e = this._authProvider.getImmediate({ optional: !0 });
    if (e) {
      const t = await e.getToken();
      if (t !== null)
        return t.accessToken;
    }
    return null;
  }
  async _getAppCheckToken() {
    const e = this._appCheckProvider.getImmediate({ optional: !0 });
    return e ? (await e.getToken()).token : null;
  }
  /**
   * Stop running requests and prevent more from being created.
   */
  _delete() {
    return this._deleted || (this._deleted = !0, this._requests.forEach((e) => e.cancel()), this._requests.clear()), Promise.resolve();
  }
  /**
   * Returns a new firebaseStorage.Reference object referencing this StorageService
   * at the given Location.
   */
  _makeStorageReference(e) {
    return new Ht(this, e);
  }
  /**
   * @param requestInfo - HTTP RequestInfo object
   * @param authToken - Firebase auth token
   */
  _makeRequest(e, t, r, i, s = !0) {
    if (this._deleted)
      return new UE(Yh());
    {
      const a = QE(e, this._appId, r, i, t, this._firebaseVersion, s);
      return this._requests.add(a), a.getPromise().then(() => this._requests.delete(a), () => this._requests.delete(a)), a;
    }
  }
  async makeRequestWithTokens(e, t) {
    const [r, i] = await Promise.all([
      this._getAuthToken(),
      this._getAppCheckToken()
    ]);
    return this._makeRequest(e, t, r, i).getPromise();
  }
}
const _u = "@firebase/storage", yu = "0.12.6";
/**
 * @license
 * Copyright 2020 Google LLC
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
const ld = "storage";
function pw(n, e, t) {
  return n = ne(n), TI(n, e, t);
}
function mw(n) {
  return n = ne(n), wI(n);
}
function gw(n, e) {
  return n = ne(n), SI(n, e);
}
function CI(n = bi(), e) {
  n = ne(n);
  const r = bt(n, ld).getImmediate({
    identifier: e
  }), i = Du("storage");
  return i && kI(r, ...i), r;
}
function kI(n, e, t, r = {}) {
  PI(n, e, t, r);
}
function DI(n, { instanceIdentifier: e }) {
  const t = n.getProvider("app").getImmediate(), r = n.getProvider("auth-internal"), i = n.getProvider("app-check-internal");
  return new Qo(t, r, i, e, Qt);
}
function NI() {
  $e(new Me(
    ld,
    DI,
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setMultipleInstances(!0)), Pe(_u, yu, ""), Pe(_u, yu, "esm2017");
}
NI();
const hd = "@firebase/installations", Yo = "0.6.8";
/**
 * @license
 * Copyright 2019 Google LLC
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
const dd = 1e4, fd = `w:${Yo}`, pd = "FIS_v2", OI = "https://firebaseinstallations.googleapis.com/v1", VI = 60 * 60 * 1e3, LI = "installations", MI = "Installations";
/**
 * @license
 * Copyright 2019 Google LLC
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
const xI = {
  "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
  "not-registered": "Firebase Installation is not registered.",
  "installation-not-found": "Firebase Installation not found.",
  "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
  "app-offline": "Could not process request. Application offline.",
  "delete-pending-registration": "Can't delete installation while there is a pending registration request."
}, Wt = new Gt(LI, MI, xI);
function md(n) {
  return n instanceof Ue && n.code.includes(
    "request-failed"
    /* ErrorCode.REQUEST_FAILED */
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
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
function gd({ projectId: n }) {
  return `${OI}/projects/${n}/installations`;
}
function _d(n) {
  return {
    token: n.token,
    requestStatus: 2,
    expiresIn: FI(n.expiresIn),
    creationTime: Date.now()
  };
}
async function yd(n, e) {
  const r = (await e.json()).error;
  return Wt.create("request-failed", {
    requestName: n,
    serverCode: r.code,
    serverMessage: r.message,
    serverStatus: r.status
  });
}
function vd({ apiKey: n }) {
  return new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-goog-api-key": n
  });
}
function UI(n, { refreshToken: e }) {
  const t = vd(n);
  return t.append("Authorization", BI(e)), t;
}
async function Ed(n) {
  const e = await n();
  return e.status >= 500 && e.status < 600 ? n() : e;
}
function FI(n) {
  return Number(n.replace("s", "000"));
}
function BI(n) {
  return `${pd} ${n}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
async function jI({ appConfig: n, heartbeatServiceProvider: e }, { fid: t }) {
  const r = gd(n), i = vd(n), s = e.getImmediate({
    optional: !0
  });
  if (s) {
    const d = await s.getHeartbeatsHeader();
    d && i.append("x-firebase-client", d);
  }
  const a = {
    fid: t,
    authVersion: pd,
    appId: n.appId,
    sdkVersion: fd
  }, c = {
    method: "POST",
    headers: i,
    body: JSON.stringify(a)
  }, l = await Ed(() => fetch(r, c));
  if (l.ok) {
    const d = await l.json();
    return {
      fid: d.fid || t,
      registrationStatus: 2,
      refreshToken: d.refreshToken,
      authToken: _d(d.authToken)
    };
  } else
    throw await yd("Create Installation", l);
}
/**
 * @license
 * Copyright 2019 Google LLC
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
function Id(n) {
  return new Promise((e) => {
    setTimeout(e, n);
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
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
function $I(n) {
  return btoa(String.fromCharCode(...n)).replace(/\+/g, "-").replace(/\//g, "_");
}
/**
 * @license
 * Copyright 2019 Google LLC
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
const qI = /^[cdef][\w-]{21}$/, eo = "";
function zI() {
  try {
    const n = new Uint8Array(17);
    (self.crypto || self.msCrypto).getRandomValues(n), n[0] = 112 + n[0] % 16;
    const t = HI(n);
    return qI.test(t) ? t : eo;
  } catch {
    return eo;
  }
}
function HI(n) {
  return $I(n).substr(0, 22);
}
/**
 * @license
 * Copyright 2019 Google LLC
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
function ji(n) {
  return `${n.appName}!${n.appId}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
const Td = /* @__PURE__ */ new Map();
function wd(n, e) {
  const t = ji(n);
  Ad(t, e), WI(t, e);
}
function Ad(n, e) {
  const t = Td.get(n);
  if (t)
    for (const r of t)
      r(e);
}
function WI(n, e) {
  const t = KI();
  t && t.postMessage({ key: n, fid: e }), GI();
}
let Mt = null;
function KI() {
  return !Mt && "BroadcastChannel" in self && (Mt = new BroadcastChannel("[Firebase] FID Change"), Mt.onmessage = (n) => {
    Ad(n.data.key, n.data.fid);
  }), Mt;
}
function GI() {
  Td.size === 0 && Mt && (Mt.close(), Mt = null);
}
/**
 * @license
 * Copyright 2019 Google LLC
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
const QI = "firebase-installations-database", YI = 1, Kt = "firebase-installations-store";
let Ss = null;
function Jo() {
  return Ss || (Ss = Bu(QI, YI, {
    upgrade: (n, e) => {
      switch (e) {
        case 0:
          n.createObjectStore(Kt);
      }
    }
  })), Ss;
}
async function Ti(n, e) {
  const t = ji(n), i = (await Jo()).transaction(Kt, "readwrite"), s = i.objectStore(Kt), a = await s.get(t);
  return await s.put(e, t), await i.done, (!a || a.fid !== e.fid) && wd(n, e.fid), e;
}
async function Rd(n) {
  const e = ji(n), r = (await Jo()).transaction(Kt, "readwrite");
  await r.objectStore(Kt).delete(e), await r.done;
}
async function $i(n, e) {
  const t = ji(n), i = (await Jo()).transaction(Kt, "readwrite"), s = i.objectStore(Kt), a = await s.get(t), c = e(a);
  return c === void 0 ? await s.delete(t) : await s.put(c, t), await i.done, c && (!a || a.fid !== c.fid) && wd(n, c.fid), c;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
async function Xo(n) {
  let e;
  const t = await $i(n.appConfig, (r) => {
    const i = JI(r), s = XI(n, i);
    return e = s.registrationPromise, s.installationEntry;
  });
  return t.fid === eo ? { installationEntry: await e } : {
    installationEntry: t,
    registrationPromise: e
  };
}
function JI(n) {
  const e = n || {
    fid: zI(),
    registrationStatus: 0
    /* RequestStatus.NOT_STARTED */
  };
  return bd(e);
}
function XI(n, e) {
  if (e.registrationStatus === 0) {
    if (!navigator.onLine) {
      const i = Promise.reject(Wt.create(
        "app-offline"
        /* ErrorCode.APP_OFFLINE */
      ));
      return {
        installationEntry: e,
        registrationPromise: i
      };
    }
    const t = {
      fid: e.fid,
      registrationStatus: 1,
      registrationTime: Date.now()
    }, r = ZI(n, t);
    return { installationEntry: t, registrationPromise: r };
  } else return e.registrationStatus === 1 ? {
    installationEntry: e,
    registrationPromise: eT(n)
  } : { installationEntry: e };
}
async function ZI(n, e) {
  try {
    const t = await jI(n, e);
    return Ti(n.appConfig, t);
  } catch (t) {
    throw md(t) && t.customData.serverCode === 409 ? await Rd(n.appConfig) : await Ti(n.appConfig, {
      fid: e.fid,
      registrationStatus: 0
      /* RequestStatus.NOT_STARTED */
    }), t;
  }
}
async function eT(n) {
  let e = await vu(n.appConfig);
  for (; e.registrationStatus === 1; )
    await Id(100), e = await vu(n.appConfig);
  if (e.registrationStatus === 0) {
    const { installationEntry: t, registrationPromise: r } = await Xo(n);
    return r || t;
  }
  return e;
}
function vu(n) {
  return $i(n, (e) => {
    if (!e)
      throw Wt.create(
        "installation-not-found"
        /* ErrorCode.INSTALLATION_NOT_FOUND */
      );
    return bd(e);
  });
}
function bd(n) {
  return tT(n) ? {
    fid: n.fid,
    registrationStatus: 0
    /* RequestStatus.NOT_STARTED */
  } : n;
}
function tT(n) {
  return n.registrationStatus === 1 && n.registrationTime + dd < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
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
async function nT({ appConfig: n, heartbeatServiceProvider: e }, t) {
  const r = rT(n, t), i = UI(n, t), s = e.getImmediate({
    optional: !0
  });
  if (s) {
    const d = await s.getHeartbeatsHeader();
    d && i.append("x-firebase-client", d);
  }
  const a = {
    installation: {
      sdkVersion: fd,
      appId: n.appId
    }
  }, c = {
    method: "POST",
    headers: i,
    body: JSON.stringify(a)
  }, l = await Ed(() => fetch(r, c));
  if (l.ok) {
    const d = await l.json();
    return _d(d);
  } else
    throw await yd("Generate Auth Token", l);
}
function rT(n, { fid: e }) {
  return `${gd(n)}/${e}/authTokens:generate`;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
async function Zo(n, e = !1) {
  let t;
  const r = await $i(n.appConfig, (s) => {
    if (!Sd(s))
      throw Wt.create(
        "not-registered"
        /* ErrorCode.NOT_REGISTERED */
      );
    const a = s.authToken;
    if (!e && oT(a))
      return s;
    if (a.requestStatus === 1)
      return t = iT(n, e), s;
    {
      if (!navigator.onLine)
        throw Wt.create(
          "app-offline"
          /* ErrorCode.APP_OFFLINE */
        );
      const c = cT(s);
      return t = sT(n, c), c;
    }
  });
  return t ? await t : r.authToken;
}
async function iT(n, e) {
  let t = await Eu(n.appConfig);
  for (; t.authToken.requestStatus === 1; )
    await Id(100), t = await Eu(n.appConfig);
  const r = t.authToken;
  return r.requestStatus === 0 ? Zo(n, e) : r;
}
function Eu(n) {
  return $i(n, (e) => {
    if (!Sd(e))
      throw Wt.create(
        "not-registered"
        /* ErrorCode.NOT_REGISTERED */
      );
    const t = e.authToken;
    return uT(t) ? Object.assign(Object.assign({}, e), { authToken: {
      requestStatus: 0
      /* RequestStatus.NOT_STARTED */
    } }) : e;
  });
}
async function sT(n, e) {
  try {
    const t = await nT(n, e), r = Object.assign(Object.assign({}, e), { authToken: t });
    return await Ti(n.appConfig, r), t;
  } catch (t) {
    if (md(t) && (t.customData.serverCode === 401 || t.customData.serverCode === 404))
      await Rd(n.appConfig);
    else {
      const r = Object.assign(Object.assign({}, e), { authToken: {
        requestStatus: 0
        /* RequestStatus.NOT_STARTED */
      } });
      await Ti(n.appConfig, r);
    }
    throw t;
  }
}
function Sd(n) {
  return n !== void 0 && n.registrationStatus === 2;
}
function oT(n) {
  return n.requestStatus === 2 && !aT(n);
}
function aT(n) {
  const e = Date.now();
  return e < n.creationTime || n.creationTime + n.expiresIn < e + VI;
}
function cT(n) {
  const e = {
    requestStatus: 1,
    requestTime: Date.now()
  };
  return Object.assign(Object.assign({}, n), { authToken: e });
}
function uT(n) {
  return n.requestStatus === 1 && n.requestTime + dd < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
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
async function lT(n) {
  const e = n, { installationEntry: t, registrationPromise: r } = await Xo(e);
  return r ? r.catch(console.error) : Zo(e).catch(console.error), t.fid;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
async function hT(n, e = !1) {
  const t = n;
  return await dT(t), (await Zo(t, e)).token;
}
async function dT(n) {
  const { registrationPromise: e } = await Xo(n);
  e && await e;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
function fT(n) {
  if (!n || !n.options)
    throw Ps("App Configuration");
  if (!n.name)
    throw Ps("App Name");
  const e = [
    "projectId",
    "apiKey",
    "appId"
  ];
  for (const t of e)
    if (!n.options[t])
      throw Ps(t);
  return {
    appName: n.name,
    projectId: n.options.projectId,
    apiKey: n.options.apiKey,
    appId: n.options.appId
  };
}
function Ps(n) {
  return Wt.create("missing-app-config-values", {
    valueName: n
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const Pd = "installations", pT = "installations-internal", mT = (n) => {
  const e = n.getProvider("app").getImmediate(), t = fT(e), r = bt(e, "heartbeat");
  return {
    app: e,
    appConfig: t,
    heartbeatServiceProvider: r,
    _delete: () => Promise.resolve()
  };
}, gT = (n) => {
  const e = n.getProvider("app").getImmediate(), t = bt(e, Pd).getImmediate();
  return {
    getId: () => lT(t),
    getToken: (i) => hT(t, i)
  };
};
function _T() {
  $e(new Me(
    Pd,
    mT,
    "PUBLIC"
    /* ComponentType.PUBLIC */
  )), $e(new Me(
    pT,
    gT,
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ));
}
_T();
Pe(hd, Yo);
Pe(hd, Yo, "esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
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
const wi = "analytics", yT = "firebase_id", vT = "origin", ET = 60 * 1e3, IT = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig", ea = "https://www.googletagmanager.com/gtag/js";
/**
 * @license
 * Copyright 2019 Google LLC
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
const ke = new Ri("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
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
const TT = {
  "already-exists": "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
  "already-initialized": "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.",
  "already-initialized-settings": "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
  "interop-component-reg-failed": "Firebase Analytics Interop Component failed to instantiate: {$reason}",
  "invalid-analytics-context": "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
  "indexeddb-unavailable": "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
  "fetch-throttle": "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
  "config-fetch-failed": "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
  "no-api-key": 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
  "no-app-id": 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',
  "no-client-id": 'The "client_id" field is empty.',
  "invalid-gtag-resource": "Trusted Types detected an invalid gtag resource: {$gtagURL}."
}, Ve = new Gt("analytics", "Analytics", TT);
/**
 * @license
 * Copyright 2019 Google LLC
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
function wT(n) {
  if (!n.startsWith(ea)) {
    const e = Ve.create("invalid-gtag-resource", {
      gtagURL: n
    });
    return ke.warn(e.message), "";
  }
  return n;
}
function Cd(n) {
  return Promise.all(n.map((e) => e.catch((t) => t)));
}
function AT(n, e) {
  let t;
  return window.trustedTypes && (t = window.trustedTypes.createPolicy(n, e)), t;
}
function RT(n, e) {
  const t = AT("firebase-js-sdk-policy", {
    createScriptURL: wT
  }), r = document.createElement("script"), i = `${ea}?l=${n}&id=${e}`;
  r.src = t ? t == null ? void 0 : t.createScriptURL(i) : i, r.async = !0, document.head.appendChild(r);
}
function bT(n) {
  let e = [];
  return Array.isArray(window[n]) ? e = window[n] : window[n] = e, e;
}
async function ST(n, e, t, r, i, s) {
  const a = r[i];
  try {
    if (a)
      await e[a];
    else {
      const l = (await Cd(t)).find((d) => d.measurementId === i);
      l && await e[l.appId];
    }
  } catch (c) {
    ke.error(c);
  }
  n("config", i, s);
}
async function PT(n, e, t, r, i) {
  try {
    let s = [];
    if (i && i.send_to) {
      let a = i.send_to;
      Array.isArray(a) || (a = [a]);
      const c = await Cd(t);
      for (const l of a) {
        const d = c.find((y) => y.measurementId === l), p = d && e[d.appId];
        if (p)
          s.push(p);
        else {
          s = [];
          break;
        }
      }
    }
    s.length === 0 && (s = Object.values(e)), await Promise.all(s), n("event", r, i || {});
  } catch (s) {
    ke.error(s);
  }
}
function CT(n, e, t, r) {
  async function i(s, ...a) {
    try {
      if (s === "event") {
        const [c, l] = a;
        await PT(n, e, t, c, l);
      } else if (s === "config") {
        const [c, l] = a;
        await ST(n, e, t, r, c, l);
      } else if (s === "consent") {
        const [c, l] = a;
        n("consent", c, l);
      } else if (s === "get") {
        const [c, l, d] = a;
        n("get", c, l, d);
      } else if (s === "set") {
        const [c] = a;
        n("set", c);
      } else
        n(s, ...a);
    } catch (c) {
      ke.error(c);
    }
  }
  return i;
}
function kT(n, e, t, r, i) {
  let s = function(...a) {
    window[r].push(arguments);
  };
  return window[i] && typeof window[i] == "function" && (s = window[i]), window[i] = CT(s, n, e, t), {
    gtagCore: s,
    wrappedGtag: window[i]
  };
}
function DT(n) {
  const e = window.document.getElementsByTagName("script");
  for (const t of Object.values(e))
    if (t.src && t.src.includes(ea) && t.src.includes(n))
      return t;
  return null;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const NT = 30, OT = 1e3;
class VT {
  constructor(e = {}, t = OT) {
    this.throttleMetadata = e, this.intervalMillis = t;
  }
  getThrottleMetadata(e) {
    return this.throttleMetadata[e];
  }
  setThrottleMetadata(e, t) {
    this.throttleMetadata[e] = t;
  }
  deleteThrottleMetadata(e) {
    delete this.throttleMetadata[e];
  }
}
const kd = new VT();
function LT(n) {
  return new Headers({
    Accept: "application/json",
    "x-goog-api-key": n
  });
}
async function MT(n) {
  var e;
  const { appId: t, apiKey: r } = n, i = {
    method: "GET",
    headers: LT(r)
  }, s = IT.replace("{app-id}", t), a = await fetch(s, i);
  if (a.status !== 200 && a.status !== 304) {
    let c = "";
    try {
      const l = await a.json();
      !((e = l.error) === null || e === void 0) && e.message && (c = l.error.message);
    } catch {
    }
    throw Ve.create("config-fetch-failed", {
      httpStatus: a.status,
      responseMessage: c
    });
  }
  return a.json();
}
async function xT(n, e = kd, t) {
  const { appId: r, apiKey: i, measurementId: s } = n.options;
  if (!r)
    throw Ve.create(
      "no-app-id"
      /* AnalyticsError.NO_APP_ID */
    );
  if (!i) {
    if (s)
      return {
        measurementId: s,
        appId: r
      };
    throw Ve.create(
      "no-api-key"
      /* AnalyticsError.NO_API_KEY */
    );
  }
  const a = e.getThrottleMetadata(r) || {
    backoffCount: 0,
    throttleEndTimeMillis: Date.now()
  }, c = new BT();
  return setTimeout(async () => {
    c.abort();
  }, ET), Dd({ appId: r, apiKey: i, measurementId: s }, a, c, e);
}
async function Dd(n, { throttleEndTimeMillis: e, backoffCount: t }, r, i = kd) {
  var s;
  const { appId: a, measurementId: c } = n;
  try {
    await UT(r, e);
  } catch (l) {
    if (c)
      return ke.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l == null ? void 0 : l.message}]`), { appId: a, measurementId: c };
    throw l;
  }
  try {
    const l = await MT(n);
    return i.deleteThrottleMetadata(a), l;
  } catch (l) {
    const d = l;
    if (!FT(d)) {
      if (i.deleteThrottleMetadata(a), c)
        return ke.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d == null ? void 0 : d.message}]`), { appId: a, measurementId: c };
      throw l;
    }
    const p = Number((s = d == null ? void 0 : d.customData) === null || s === void 0 ? void 0 : s.httpStatus) === 503 ? nc(t, i.intervalMillis, NT) : nc(t, i.intervalMillis), y = {
      throttleEndTimeMillis: Date.now() + p,
      backoffCount: t + 1
    };
    return i.setThrottleMetadata(a, y), ke.debug(`Calling attemptFetch again in ${p} millis`), Dd(n, y, r, i);
  }
}
function UT(n, e) {
  return new Promise((t, r) => {
    const i = Math.max(e - Date.now(), 0), s = setTimeout(t, i);
    n.addEventListener(() => {
      clearTimeout(s), r(Ve.create("fetch-throttle", {
        throttleEndTimeMillis: e
      }));
    });
  });
}
function FT(n) {
  if (!(n instanceof Ue) || !n.customData)
    return !1;
  const e = Number(n.customData.httpStatus);
  return e === 429 || e === 500 || e === 503 || e === 504;
}
class BT {
  constructor() {
    this.listeners = [];
  }
  addEventListener(e) {
    this.listeners.push(e);
  }
  abort() {
    this.listeners.forEach((e) => e());
  }
}
async function jT(n, e, t, r, i) {
  if (i && i.global) {
    n("event", t, r);
    return;
  } else {
    const s = await e, a = Object.assign(Object.assign({}, r), { send_to: s });
    n("event", t, a);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
async function $T() {
  if (Mu())
    try {
      await xu();
    } catch (n) {
      return ke.warn(Ve.create("indexeddb-unavailable", {
        errorInfo: n == null ? void 0 : n.toString()
      }).message), !1;
    }
  else
    return ke.warn(Ve.create("indexeddb-unavailable", {
      errorInfo: "IndexedDB is not available in this environment."
    }).message), !1;
  return !0;
}
async function qT(n, e, t, r, i, s, a) {
  var c;
  const l = xT(n);
  l.then((b) => {
    t[b.measurementId] = b.appId, n.options.measurementId && b.measurementId !== n.options.measurementId && ke.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`);
  }).catch((b) => ke.error(b)), e.push(l);
  const d = $T().then((b) => {
    if (b)
      return r.getId();
  }), [p, y] = await Promise.all([
    l,
    d
  ]);
  DT(s) || RT(s, p.measurementId), i("js", /* @__PURE__ */ new Date());
  const A = (c = a == null ? void 0 : a.config) !== null && c !== void 0 ? c : {};
  return A[vT] = "firebase", A.update = !0, y != null && (A[yT] = y), i("config", p.measurementId, A), p.measurementId;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class zT {
  constructor(e) {
    this.app = e;
  }
  _delete() {
    return delete nr[this.app.options.appId], Promise.resolve();
  }
}
let nr = {}, Iu = [];
const Tu = {};
let Cs = "dataLayer", HT = "gtag", wu, Nd, Au = !1;
function WT() {
  const n = [];
  if (Lu() && n.push("This is a browser extension environment."), Nf() || n.push("Cookies are not available."), n.length > 0) {
    const e = n.map((r, i) => `(${i + 1}) ${r}`).join(" "), t = Ve.create("invalid-analytics-context", {
      errorInfo: e
    });
    ke.warn(t.message);
  }
}
function KT(n, e, t) {
  WT();
  const r = n.options.appId;
  if (!r)
    throw Ve.create(
      "no-app-id"
      /* AnalyticsError.NO_APP_ID */
    );
  if (!n.options.apiKey)
    if (n.options.measurementId)
      ke.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);
    else
      throw Ve.create(
        "no-api-key"
        /* AnalyticsError.NO_API_KEY */
      );
  if (nr[r] != null)
    throw Ve.create("already-exists", {
      id: r
    });
  if (!Au) {
    bT(Cs);
    const { wrappedGtag: s, gtagCore: a } = kT(nr, Iu, Tu, Cs, HT);
    Nd = s, wu = a, Au = !0;
  }
  return nr[r] = qT(n, Iu, Tu, e, wu, Cs, t), new zT(n);
}
function GT(n = bi()) {
  n = ne(n);
  const e = bt(n, wi);
  return e.isInitialized() ? e.getImmediate() : QT(n);
}
function QT(n, e = {}) {
  const t = bt(n, wi);
  if (t.isInitialized()) {
    const i = t.getImmediate();
    if (ir(e, t.getOptions()))
      return i;
    throw Ve.create(
      "already-initialized"
      /* AnalyticsError.ALREADY_INITIALIZED */
    );
  }
  return t.initialize({ options: e });
}
function YT(n, e, t, r) {
  n = ne(n), jT(Nd, nr[n.app.options.appId], e, t, r).catch((i) => ke.error(i));
}
const Ru = "@firebase/analytics", bu = "0.10.7";
function JT() {
  $e(new Me(
    wi,
    (e, { options: t }) => {
      const r = e.getProvider("app").getImmediate(), i = e.getProvider("installations-internal").getImmediate();
      return KT(r, i, t);
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  )), $e(new Me(
    "analytics-internal",
    n,
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), Pe(Ru, bu), Pe(Ru, bu, "esm2017");
  function n(e) {
    try {
      const t = e.getProvider(wi).getImmediate();
      return {
        logEvent: (r, i, s) => YT(t, r, i, s)
      };
    } catch (t) {
      throw Ve.create("interop-component-reg-failed", {
        reason: t
      });
    }
  }
}
JT();
const Od = {
  apiKey: "AIzaSyBmcnHP80KXpBXltHrVnP1MZPsiSbVbWqQ",
  authDomain: "water-fetch.firebaseapp.com",
  projectId: "water-fetch",
  storageBucket: "water-fetch.appspot.com",
  messagingSenderId: "911813185967"
}, Vd = ({ appId: n, measurementId: e }) => {
  const t = {
    ...Od,
    appId: n,
    measurementId: e
  };
  return ju(t);
}, rr = class rr {
  constructor(e) {
    Nt(this, "app");
    Nt(this, "auth");
    Nt(this, "db");
    Nt(this, "storage");
    Nt(this, "analytics");
    if (rr.server)
      throw new Error("Server already initialized");
    this.app = Vd(e), this.auth = v_(this.app), this.db = aE(this.app), this.storage = CI(this.app), this.analytics = GT(this.app), rr.server = this;
  }
};
Nt(rr, "server", null);
let to = rr;
const _w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Server: to,
  firebaseConfig: Od,
  initServer: Vd
}, Symbol.toStringTag, { value: "Module" }));
export {
  dt as F,
  ft as G,
  iw as R,
  to as S,
  sw as a,
  uw as b,
  ZT as c,
  dw as d,
  lw as e,
  pw as f,
  hw as g,
  mw as h,
  rw as i,
  nw as j,
  Qm as k,
  _w as l,
  fw as o,
  gw as r,
  ew as s,
  tw as u
};
