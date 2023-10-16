// /*! For license information please see main.js.LICENSE.txt */
// (() => {
//     var t = {
//         69: function(t) {
//           t.exports = function() {
//             function t(t, e) {
//               for (var n = 0; n < e.length; n++) {
//                 var r = e[n];
//                 r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
//               }
//             }
  
//             function e(e, n, r) {
//               return n && t(e.prototype, n), r && t(e, r), e
//             }
  
//             function n() {
//               return (n = Object.assign || function(t) {
//                 for (var e = 1; e < arguments.length; e++) {
//                   var n = arguments[e];
//                   for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
//                 }
//                 return t
//               }).apply(this, arguments)
//             }
  
//             function r(t, e) {
//               t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
//             }
  
//             function i(t) {
//               return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
//                 return t.__proto__ || Object.getPrototypeOf(t)
//               })(t)
//             }
  
//             function o(t, e) {
//               return (o = Object.setPrototypeOf || function(t, e) {
//                 return t.__proto__ = e, t
//               })(t, e)
//             }
  
//             function s(t, e, n) {
//               return (s = function() {
//                 if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
//                 if (Reflect.construct.sham) return !1;
//                 if ("function" == typeof Proxy) return !0;
//                 try {
//                   return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
//                 } catch (t) {
//                   return !1
//                 }
//               }() ? Reflect.construct : function(t, e, n) {
//                 var r = [null];
//                 r.push.apply(r, e);
//                 var i = new(Function.bind.apply(t, r));
//                 return n && o(i, n.prototype), i
//               }).apply(null, arguments)
//             }
  
//             function a(t) {
//               var e = "function" == typeof Map ? new Map : void 0;
//               return (a = function(t) {
//                 if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
//                 if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
//                 if (void 0 !== e) {
//                   if (e.has(t)) return e.get(t);
//                   e.set(t, n)
//                 }
  
//                 function n() {
//                   return s(t, arguments, i(this).constructor)
//                 }
//                 return n.prototype = Object.create(t.prototype, {
//                   constructor: {
//                     value: n,
//                     enumerable: !1,
//                     writable: !0,
//                     configurable: !0
//                   }
//                 }), o(n, t)
//               })(t)
//             }
  
//             function u(t, e) {
//               try {
//                 var n = t()
//               } catch (t) {
//                 return e(t)
//               }
//               return n && n.then ? n.then(void 0, e) : n
//             }
//             "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
//             var c;
//             ! function(t) {
//               t[t.off = 0] = "off", t[t.error = 1] = "error", t[t.warning = 2] = "warning", t[t.info = 3] = "info", t[t.debug = 4] = "debug"
//             }(c || (c = {}));
//             var l = c.off,
//               h = function() {
//                 function t(t) {
//                   this.t = t
//                 }
//                 t.getLevel = function() {
//                   return l
//                 }, t.setLevel = function(t) {
//                   return l = c[t]
//                 };
//                 var e = t.prototype;
//                 return e.error = function() {
//                   for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
//                   this.i(console.error, c.error, e)
//                 }, e.warn = function() {
//                   for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
//                   this.i(console.warn, c.warning, e)
//                 }, e.info = function() {
//                   for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
//                   this.i(console.info, c.info, e)
//                 }, e.debug = function() {
//                   for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
//                   this.i(console.log, c.debug, e)
//                 }, e.i = function(e, n, r) {
//                   n <= t.getLevel() && e.apply(console, ["[" + this.t + "] "].concat(r))
//                 }, t
//               }(),
//               f = P,
//               d = w,
//               p = _,
//               v = x,
//               m = T,
//               g = "/",
//               y = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g");
  
//             function _(t, e) {
//               for (var n, r = [], i = 0, o = 0, s = "", a = e && e.delimiter || g, u = e && e.whitelist || void 0, c = !1; null !== (n = y.exec(t));) {
//                 var l = n[0],
//                   h = n[1],
//                   f = n.index;
//                 if (s += t.slice(o, f), o = f + l.length, h) s += h[1], c = !0;
//                 else {
//                   var d = "",
//                     p = n[2],
//                     v = n[3],
//                     m = n[4],
//                     _ = n[5];
//                   if (!c && s.length) {
//                     var w = s.length - 1,
//                       x = s[w];
//                     (!u || u.indexOf(x) > -1) && (d = x, s = s.slice(0, w))
//                   }
//                   s && (r.push(s), s = "", c = !1);
//                   var E = v || m,
//                     T = d || a;
//                   r.push({
//                     name: p || i++,
//                     prefix: d,
//                     delimiter: T,
//                     optional: "?" === _ || "*" === _,
//                     repeat: "+" === _ || "*" === _,
//                     pattern: E ? k(E) : "[^" + b(T === a ? T : T + a) + "]+?"
//                   })
//                 }
//               }
//               return (s || o < t.length) && r.push(s + t.substr(o)), r
//             }
  
//             function w(t, e) {
//               return function(n, r) {
//                 var i = t.exec(n);
//                 if (!i) return !1;
//                 for (var o = i[0], s = i.index, a = {}, u = r && r.decode || decodeURIComponent, c = 1; c < i.length; c++)
//                   if (void 0 !== i[c]) {
//                     var l = e[c - 1];
//                     a[l.name] = l.repeat ? i[c].split(l.delimiter).map((function(t) {
//                       return u(t, l)
//                     })) : u(i[c], l)
//                   } return {
//                   path: o,
//                   index: s,
//                   params: a
//                 }
//               }
//             }
  
//             function x(t, e) {
//               for (var n = new Array(t.length), r = 0; r < t.length; r++) "object" == typeof t[r] && (n[r] = new RegExp("^(?:" + t[r].pattern + ")$", E(e)));
//               return function(e, r) {
//                 for (var i = "", o = r && r.encode || encodeURIComponent, s = !r || !1 !== r.validate, a = 0; a < t.length; a++) {
//                   var u = t[a];
//                   if ("string" != typeof u) {
//                     var c, l = e ? e[u.name] : void 0;
//                     if (Array.isArray(l)) {
//                       if (!u.repeat) throw new TypeError('Expected "' + u.name + '" to not repeat, but got array');
//                       if (0 === l.length) {
//                         if (u.optional) continue;
//                         throw new TypeError('Expected "' + u.name + '" to not be empty')
//                       }
//                       for (var h = 0; h < l.length; h++) {
//                         if (c = o(l[h], u), s && !n[a].test(c)) throw new TypeError('Expected all "' + u.name + '" to match "' + u.pattern + '"');
//                         i += (0 === h ? u.prefix : u.delimiter) + c
//                       }
//                     } else if ("string" != typeof l && "number" != typeof l && "boolean" != typeof l) {
//                       if (!u.optional) throw new TypeError('Expected "' + u.name + '" to be ' + (u.repeat ? "an array" : "a string"))
//                     } else {
//                       if (c = o(String(l), u), s && !n[a].test(c)) throw new TypeError('Expected "' + u.name + '" to match "' + u.pattern + '", but got "' + c + '"');
//                       i += u.prefix + c
//                     }
//                   } else i += u
//                 }
//                 return i
//               }
//             }
  
//             function b(t) {
//               return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
//             }
  
//             function k(t) {
//               return t.replace(/([=!:$/()])/g, "\\$1")
//             }
  
//             function E(t) {
//               return t && t.sensitive ? "" : "i"
//             }
  
//             function T(t, e, n) {
//               for (var r = (n = n || {}).strict, i = !1 !== n.start, o = !1 !== n.end, s = n.delimiter || g, a = [].concat(n.endsWith || []).map(b).concat("$").join("|"), u = i ? "^" : "", c = 0; c < t.length; c++) {
//                 var l = t[c];
//                 if ("string" == typeof l) u += b(l);
//                 else {
//                   var h = l.repeat ? "(?:" + l.pattern + ")(?:" + b(l.delimiter) + "(?:" + l.pattern + "))*" : l.pattern;
//                   e && e.push(l), u += l.optional ? l.prefix ? "(?:" + b(l.prefix) + "(" + h + "))?" : "(" + h + ")?" : b(l.prefix) + "(" + h + ")"
//                 }
//               }
//               if (o) r || (u += "(?:" + b(s) + ")?"), u += "$" === a ? "$" : "(?=" + a + ")";
//               else {
//                 var f = t[t.length - 1],
//                   d = "string" == typeof f ? f[f.length - 1] === s : void 0 === f;
//                 r || (u += "(?:" + b(s) + "(?=" + a + "))?"), d || (u += "(?=" + b(s) + "|" + a + ")")
//               }
//               return new RegExp(u, E(n))
//             }
  
//             function P(t, e, n) {
//               return t instanceof RegExp ? function(t, e) {
//                 if (!e) return t;
//                 var n = t.source.match(/\((?!\?)/g);
//                 if (n)
//                   for (var r = 0; r < n.length; r++) e.push({
//                     name: r,
//                     prefix: null,
//                     delimiter: null,
//                     optional: !1,
//                     repeat: !1,
//                     pattern: null
//                   });
//                 return t
//               }(t, e) : Array.isArray(t) ? function(t, e, n) {
//                 for (var r = [], i = 0; i < t.length; i++) r.push(P(t[i], e, n).source);
//                 return new RegExp("(?:" + r.join("|") + ")", E(n))
//               }(t, e, n) : function(t, e, n) {
//                 return T(_(t, n), e, n)
//               }(t, e, n)
//             }
//             f.match = function(t, e) {
//               var n = [];
//               return w(P(t, n, e), n)
//             }, f.regexpToFunction = d, f.parse = p, f.compile = function(t, e) {
//               return x(_(t, e), e)
//             }, f.tokensToFunction = v, f.tokensToRegExp = m;
//             var M = {
//                 container: "container",
//                 history: "history",
//                 namespace: "namespace",
//                 prefix: "data-barba",
//                 prevent: "prevent",
//                 wrapper: "wrapper"
//               },
//               A = new(function() {
//                 function t() {
//                   this.o = M, this.u = new DOMParser
//                 }
//                 var e = t.prototype;
//                 return e.toString = function(t) {
//                   return t.outerHTML
//                 }, e.toDocument = function(t) {
//                   return this.u.parseFromString(t, "text/html")
//                 }, e.toElement = function(t) {
//                   var e = document.createElement("div");
//                   return e.innerHTML = t, e
//                 }, e.getHtml = function(t) {
//                   return void 0 === t && (t = document), this.toString(t.documentElement)
//                 }, e.getWrapper = function(t) {
//                   return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
//                 }, e.getContainer = function(t) {
//                   return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]')
//                 }, e.removeContainer = function(t) {
//                   document.body.contains(t) && t.parentNode.removeChild(t)
//                 }, e.addContainer = function(t, e) {
//                   var n = this.getContainer();
//                   n ? this.s(t, n) : e.appendChild(t)
//                 }, e.getNamespace = function(t) {
//                   void 0 === t && (t = document);
//                   var e = t.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
//                   return e ? e.getAttribute(this.o.prefix + "-" + this.o.namespace) : null
//                 }, e.getHref = function(t) {
//                   if (t.tagName && "a" === t.tagName.toLowerCase()) {
//                     if ("string" == typeof t.href) return t.href;
//                     var e = t.getAttribute("href") || t.getAttribute("xlink:href");
//                     if (e) return this.resolveUrl(e.baseVal || e)
//                   }
//                   return null
//                 }, e.resolveUrl = function() {
//                   for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
//                   var r = e.length;
//                   if (0 === r) throw new Error("resolveUrl requires at least one argument; got none.");
//                   var i = document.createElement("base");
//                   if (i.href = arguments[0], 1 === r) return i.href;
//                   var o = document.getElementsByTagName("head")[0];
//                   o.insertBefore(i, o.firstChild);
//                   for (var s, a = document.createElement("a"), u = 1; u < r; u++) a.href = arguments[u], i.href = s = a.href;
//                   return o.removeChild(i), s
//                 }, e.s = function(t, e) {
//                   e.parentNode.insertBefore(t, e.nextSibling)
//                 }, t
//               }()),
//               O = new(function() {
//                 function t() {
//                   this.h = [], this.v = -1
//                 }
//                 var r = t.prototype;
//                 return r.init = function(t, e) {
//                   this.l = "barba";
//                   var n = {
//                     ns: e,
//                     scroll: {
//                       x: window.scrollX,
//                       y: window.scrollY
//                     },
//                     url: t
//                   };
//                   this.h.push(n), this.v = 0;
//                   var r = {
//                     from: this.l,
//                     index: 0,
//                     states: [].concat(this.h)
//                   };
//                   window.history && window.history.replaceState(r, "", t)
//                 }, r.change = function(t, e, n) {
//                   if (n && n.state) {
//                     var r = n.state,
//                       i = r.index;
//                     e = this.m(this.v - i), this.replace(r.states), this.v = i
//                   } else this.add(t, e);
//                   return e
//                 }, r.add = function(t, e) {
//                   var n = this.size,
//                     r = this.p(e),
//                     i = {
//                       ns: "tmp",
//                       scroll: {
//                         x: window.scrollX,
//                         y: window.scrollY
//                       },
//                       url: t
//                     };
//                   this.h.push(i), this.v = n;
//                   var o = {
//                     from: this.l,
//                     index: n,
//                     states: [].concat(this.h)
//                   };
//                   switch (r) {
//                     case "push":
//                       window.history && window.history.pushState(o, "", t);
//                       break;
//                     case "replace":
//                       window.history && window.history.replaceState(o, "", t)
//                   }
//                 }, r.update = function(t, e) {
//                   var r = e || this.v,
//                     i = n({}, this.get(r), {}, t);
//                   this.set(r, i)
//                 }, r.remove = function(t) {
//                   t ? this.h.splice(t, 1) : this.h.pop(), this.v--
//                 }, r.clear = function() {
//                   this.h = [], this.v = -1
//                 }, r.replace = function(t) {
//                   this.h = t
//                 }, r.get = function(t) {
//                   return this.h[t]
//                 }, r.set = function(t, e) {
//                   return this.h[t] = e
//                 }, r.p = function(t) {
//                   var e = "push",
//                     n = t,
//                     r = M.prefix + "-" + M.history;
//                   return n.hasAttribute && n.hasAttribute(r) && (e = n.getAttribute(r)), e
//                 }, r.m = function(t) {
//                   return Math.abs(t) > 1 ? t > 0 ? "forward" : "back" : 0 === t ? "popstate" : t > 0 ? "back" : "forward"
//                 }, e(t, [{
//                   key: "current",
//                   get: function() {
//                     return this.h[this.v]
//                   }
//                 }, {
//                   key: "state",
//                   get: function() {
//                     return this.h[this.h.length - 1]
//                   }
//                 }, {
//                   key: "previous",
//                   get: function() {
//                     return this.v < 1 ? null : this.h[this.v - 1]
//                   }
//                 }, {
//                   key: "size",
//                   get: function() {
//                     return this.h.length
//                   }
//                 }]), t
//               }()),
//               S = function(t, e) {
//                 try {
//                   var n = function() {
//                     if (!e.next.html) return Promise.resolve(t).then((function(t) {
//                       var n = e.next;
//                       if (t) {
//                         var r = A.toElement(t);
//                         n.namespace = A.getNamespace(r), n.container = A.getContainer(r), n.html = t, O.update({
//                           ns: n.namespace
//                         });
//                         var i = A.toDocument(t);
//                         document.title = i.title
//                       }
//                     }))
//                   }();
//                   return Promise.resolve(n && n.then ? n.then((function() {})) : void 0)
//                 } catch (t) {
//                   return Promise.reject(t)
//                 }
//               },
//               C = f,
//               F = {
//                 __proto__: null,
//                 update: S,
//                 nextTick: function() {
//                   return new Promise((function(t) {
//                     window.requestAnimationFrame(t)
//                   }))
//                 },
//                 pathToRegexp: C
//               },
//               L = function() {
//                 return window.location.origin
//               },
//               R = function(t) {
//                 return void 0 === t && (t = window.location.href), D(t).port
//               },
//               D = function(t) {
//                 var e, n = t.match(/:\d+/);
//                 if (null === n) /^http/.test(t) && (e = 80), /^https/.test(t) && (e = 443);
//                 else {
//                   var r = n[0].substring(1);
//                   e = parseInt(r, 10)
//                 }
//                 var i, o = t.replace(L(), ""),
//                   s = {},
//                   a = o.indexOf("#");
//                 a >= 0 && (i = o.slice(a + 1), o = o.slice(0, a));
//                 var u = o.indexOf("?");
//                 return u >= 0 && (s = j(o.slice(u + 1)), o = o.slice(0, u)), {
//                   hash: i,
//                   path: o,
//                   port: e,
//                   query: s
//                 }
//               },
//               j = function(t) {
//                 return t.split("&").reduce((function(t, e) {
//                   var n = e.split("=");
//                   return t[n[0]] = n[1], t
//                 }), {})
//               },
//               I = function(t) {
//                 return void 0 === t && (t = window.location.href), t.replace(/(\/#.*|\/|#.*)$/, "")
//               },
//               $ = {
//                 __proto__: null,
//                 getHref: function() {
//                   return window.location.href
//                 },
//                 getOrigin: L,
//                 getPort: R,
//                 getPath: function(t) {
//                   return void 0 === t && (t = window.location.href), D(t).path
//                 },
//                 parse: D,
//                 parseQuery: j,
//                 clean: I
//               };
  
//             function N(t, e, n) {
//               return void 0 === e && (e = 2e3), new Promise((function(r, i) {
//                 var o = new XMLHttpRequest;
//                 o.onreadystatechange = function() {
//                   if (o.readyState === XMLHttpRequest.DONE)
//                     if (200 === o.status) r(o.responseText);
//                     else if (o.status) {
//                     var e = {
//                       status: o.status,
//                       statusText: o.statusText
//                     };
//                     n(t, e), i(e)
//                   }
//                 }, o.ontimeout = function() {
//                   var r = new Error("Timeout error [" + e + "]");
//                   n(t, r), i(r)
//                 }, o.onerror = function() {
//                   var e = new Error("Fetch error");
//                   n(t, e), i(e)
//                 }, o.open("GET", t), o.timeout = e, o.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), o.setRequestHeader("x-barba", "yes"), o.send()
//               }))
//             }
  
//             function z(t, e) {
//               return void 0 === e && (e = {}),
//                 function() {
//                   for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
//                   var o = !1,
//                     s = new Promise((function(n, i) {
//                       e.async = function() {
//                         return o = !0,
//                           function(t, e) {
//                             t ? i(t) : n(e)
//                           }
//                       };
//                       var s = t.apply(e, r);
//                       o || (function(t) {
//                         return !!t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then
//                       }(s) ? s.then(n, i) : n(s))
//                     }));
//                   return s
//                 }
//             }
//             var q = new(function(t) {
//                 function e() {
//                   var e;
//                   return (e = t.call(this) || this).logger = new h("@barba/core"), e.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], e.registered = new Map, e.init(), e
//                 }
//                 r(e, t);
//                 var n = e.prototype;
//                 return n.init = function() {
//                   var t = this;
//                   this.registered.clear(), this.all.forEach((function(e) {
//                     t[e] || (t[e] = function(n, r) {
//                       t.registered.has(e) || t.registered.set(e, new Set), t.registered.get(e).add({
//                         ctx: r || {},
//                         fn: n
//                       })
//                     })
//                   }))
//                 }, n.do = function(t) {
//                   for (var e = this, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
//                   if (this.registered.has(t)) {
//                     var o = Promise.resolve();
//                     return this.registered.get(t).forEach((function(t) {
//                       o = o.then((function() {
//                         return z(t.fn, t.ctx).apply(void 0, r)
//                       }))
//                     })), o.catch((function(n) {
//                       e.logger.debug("Hook error [" + t + "]"), e.logger.error(n)
//                     }))
//                   }
//                   return Promise.resolve()
//                 }, n.clear = function() {
//                   var t = this;
//                   this.all.forEach((function(e) {
//                     delete t[e]
//                   })), this.init()
//                 }, n.help = function() {
//                   this.logger.info("Available hooks: " + this.all.join(","));
//                   var t = [];
//                   this.registered.forEach((function(e, n) {
//                     return t.push(n)
//                   })), this.logger.info("Registered hooks: " + t.join(","))
//                 }, e
//               }((function() {}))),
//               B = function() {
//                 function t(t) {
//                   if (this.P = [], "boolean" == typeof t) this.g = t;
//                   else {
//                     var e = Array.isArray(t) ? t : [t];
//                     this.P = e.map((function(t) {
//                       return C(t)
//                     }))
//                   }
//                 }
//                 return t.prototype.checkHref = function(t) {
//                   if ("boolean" == typeof this.g) return this.g;
//                   var e = D(t).path;
//                   return this.P.some((function(t) {
//                     return null !== t.exec(e)
//                   }))
//                 }, t
//               }(),
//               W = function(t) {
//                 function e(e) {
//                   var n;
//                   return (n = t.call(this, e) || this).k = new Map, n
//                 }
//                 r(e, t);
//                 var i = e.prototype;
//                 return i.set = function(t, e, n) {
//                   return this.k.set(t, {
//                     action: n,
//                     request: e
//                   }), {
//                     action: n,
//                     request: e
//                   }
//                 }, i.get = function(t) {
//                   return this.k.get(t)
//                 }, i.getRequest = function(t) {
//                   return this.k.get(t).request
//                 }, i.getAction = function(t) {
//                   return this.k.get(t).action
//                 }, i.has = function(t) {
//                   return !this.checkHref(t) && this.k.has(t)
//                 }, i.delete = function(t) {
//                   return this.k.delete(t)
//                 }, i.update = function(t, e) {
//                   var r = n({}, this.k.get(t), {}, e);
//                   return this.k.set(t, r), r
//                 }, e
//               }(B),
//               H = function() {
//                 return !window.history.pushState
//               },
//               V = function(t) {
//                 return !t.el || !t.href
//               },
//               U = function(t) {
//                 var e = t.event;
//                 return e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
//               },
//               Y = function(t) {
//                 var e = t.el;
//                 return e.hasAttribute("target") && "_blank" === e.target
//               },
//               X = function(t) {
//                 var e = t.el;
//                 return void 0 !== e.protocol && window.location.protocol !== e.protocol || void 0 !== e.hostname && window.location.hostname !== e.hostname
//               },
//               G = function(t) {
//                 var e = t.el;
//                 return void 0 !== e.port && R() !== R(e.href)
//               },
//               K = function(t) {
//                 var e = t.el;
//                 return e.getAttribute && "string" == typeof e.getAttribute("download")
//               },
//               Q = function(t) {
//                 return t.el.hasAttribute(M.prefix + "-" + M.prevent)
//               },
//               J = function(t) {
//                 return Boolean(t.el.closest("[" + M.prefix + "-" + M.prevent + '="all"]'))
//               },
//               Z = function(t) {
//                 var e = t.href;
//                 return I(e) === I() && R(e) === R()
//               },
//               tt = function(t) {
//                 function e(e) {
//                   var n;
//                   return (n = t.call(this, e) || this).suite = [], n.tests = new Map, n.init(), n
//                 }
//                 r(e, t);
//                 var n = e.prototype;
//                 return n.init = function() {
//                   this.add("pushState", H), this.add("exists", V), this.add("newTab", U), this.add("blank", Y), this.add("corsDomain", X), this.add("corsPort", G), this.add("download", K), this.add("preventSelf", Q), this.add("preventAll", J), this.add("sameUrl", Z, !1)
//                 }, n.add = function(t, e, n) {
//                   void 0 === n && (n = !0), this.tests.set(t, e), n && this.suite.push(t)
//                 }, n.run = function(t, e, n, r) {
//                   return this.tests.get(t)({
//                     el: e,
//                     event: n,
//                     href: r
//                   })
//                 }, n.checkLink = function(t, e, n) {
//                   var r = this;
//                   return this.suite.some((function(i) {
//                     return r.run(i, t, e, n)
//                   }))
//                 }, e
//               }(B),
//               et = function(t) {
//                 function e(n, r) {
//                   var i;
//                   void 0 === r && (r = "Barba error");
//                   for (var o = arguments.length, s = new Array(o > 2 ? o - 2 : 0), a = 2; a < o; a++) s[a - 2] = arguments[a];
//                   return (i = t.call.apply(t, [this].concat(s)) || this).error = n, i.label = r, Error.captureStackTrace && Error.captureStackTrace(function(t) {
//                     if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//                     return t
//                   }(i), e), i.name = "BarbaError", i
//                 }
//                 return r(e, t), e
//               }(a(Error)),
//               nt = function() {
//                 function t(t) {
//                   void 0 === t && (t = []), this.logger = new h("@barba/core"), this.all = [], this.page = [], this.once = [], this.A = [{
//                     name: "namespace",
//                     type: "strings"
//                   }, {
//                     name: "custom",
//                     type: "function"
//                   }], t && (this.all = this.all.concat(t)), this.update()
//                 }
//                 var e = t.prototype;
//                 return e.add = function(t, e) {
//                   "rule" === t ? this.A.splice(e.position || 0, 0, e.value) : this.all.push(e), this.update()
//                 }, e.resolve = function(t, e) {
//                   var n = this;
//                   void 0 === e && (e = {});
//                   var r = e.once ? this.once : this.page;
//                   r = r.filter(e.self ? function(t) {
//                     return t.name && "self" === t.name
//                   } : function(t) {
//                     return !t.name || "self" !== t.name
//                   });
//                   var i = new Map,
//                     o = r.find((function(r) {
//                       var o = !0,
//                         s = {};
//                       return !(!e.self || "self" !== r.name) || (n.A.reverse().forEach((function(e) {
//                         o && (o = n.R(r, e, t, s), r.from && r.to && (o = n.R(r, e, t, s, "from") && n.R(r, e, t, s, "to")), r.from && !r.to && (o = n.R(r, e, t, s, "from")), !r.from && r.to && (o = n.R(r, e, t, s, "to")))
//                       })), i.set(r, s), o)
//                     })),
//                     s = i.get(o),
//                     a = [];
//                   if (a.push(e.once ? "once" : "page"), e.self && a.push("self"), s) {
//                     var u, c = [o];
//                     Object.keys(s).length > 0 && c.push(s), (u = this.logger).info.apply(u, ["Transition found [" + a.join(",") + "]"].concat(c))
//                   } else this.logger.info("No transition found [" + a.join(",") + "]");
//                   return o
//                 }, e.update = function() {
//                   var t = this;
//                   this.all = this.all.map((function(e) {
//                     return t.T(e)
//                   })).sort((function(t, e) {
//                     return t.priority - e.priority
//                   })).reverse().map((function(t) {
//                     return delete t.priority, t
//                   })), this.page = this.all.filter((function(t) {
//                     return void 0 !== t.leave || void 0 !== t.enter
//                   })), this.once = this.all.filter((function(t) {
//                     return void 0 !== t.once
//                   }))
//                 }, e.R = function(t, e, n, r, i) {
//                   var o = !0,
//                     s = !1,
//                     a = t,
//                     u = e.name,
//                     c = u,
//                     l = u,
//                     h = u,
//                     f = i ? a[i] : a,
//                     d = "to" === i ? n.next : n.current;
//                   if (i ? f && f[u] : f[u]) {
//                     switch (e.type) {
//                       case "strings":
//                       default:
//                         var p = Array.isArray(f[c]) ? f[c] : [f[c]];
//                         d[c] && -1 !== p.indexOf(d[c]) && (s = !0), -1 === p.indexOf(d[c]) && (o = !1);
//                         break;
//                       case "object":
//                         var v = Array.isArray(f[l]) ? f[l] : [f[l]];
//                         d[l] ? (d[l].name && -1 !== v.indexOf(d[l].name) && (s = !0), -1 === v.indexOf(d[l].name) && (o = !1)) : o = !1;
//                         break;
//                       case "function":
//                         f[h](n) ? s = !0 : o = !1
//                     }
//                     s && (i ? (r[i] = r[i] || {}, r[i][u] = a[i][u]) : r[u] = a[u])
//                   }
//                   return o
//                 }, e.O = function(t, e, n) {
//                   var r = 0;
//                   return (t[e] || t.from && t.from[e] || t.to && t.to[e]) && (r += Math.pow(10, n), t.from && t.from[e] && (r += 1), t.to && t.to[e] && (r += 2)), r
//                 }, e.T = function(t) {
//                   var e = this;
//                   t.priority = 0;
//                   var n = 0;
//                   return this.A.forEach((function(r, i) {
//                     n += e.O(t, r.name, i + 1)
//                   })), t.priority = n, t
//                 }, t
//               }(),
//               rt = function() {
//                 function t(t) {
//                   void 0 === t && (t = []), this.logger = new h("@barba/core"), this.S = !1, this.store = new nt(t)
//                 }
//                 var n = t.prototype;
//                 return n.get = function(t, e) {
//                   return this.store.resolve(t, e)
//                 }, n.doOnce = function(t) {
//                   var e = t.data,
//                     n = t.transition;
//                   try {
//                     var r = function() {
//                         i.S = !1
//                       },
//                       i = this,
//                       o = n || {};
//                     i.S = !0;
//                     var s = u((function() {
//                       return Promise.resolve(i.j("beforeOnce", e, o)).then((function() {
//                         return Promise.resolve(i.once(e, o)).then((function() {
//                           return Promise.resolve(i.j("afterOnce", e, o)).then((function() {}))
//                         }))
//                       }))
//                     }), (function(t) {
//                       i.S = !1, i.logger.debug("Transition error [before/after/once]"), i.logger.error(t)
//                     }));
//                     return Promise.resolve(s && s.then ? s.then(r) : r())
//                   } catch (t) {
//                     return Promise.reject(t)
//                   }
//                 }, n.doPage = function(t) {
//                   var e = t.data,
//                     n = t.transition,
//                     r = t.page,
//                     i = t.wrapper;
//                   try {
//                     var o = function(t) {
//                         if (s) return t;
//                         a.S = !1
//                       },
//                       s = !1,
//                       a = this,
//                       c = n || {},
//                       l = !0 === c.sync || !1;
//                     a.S = !0;
//                     var h = u((function() {
//                       function t() {
//                         return Promise.resolve(a.j("before", e, c)).then((function() {
//                           function t(t) {
//                             return Promise.resolve(a.remove(e)).then((function() {
//                               return Promise.resolve(a.j("after", e, c)).then((function() {}))
//                             }))
//                           }
//                           var n = function() {
//                             if (l) return u((function() {
//                               return Promise.resolve(a.add(e, i)).then((function() {
//                                 return Promise.resolve(a.j("beforeLeave", e, c)).then((function() {
//                                   return Promise.resolve(a.j("beforeEnter", e, c)).then((function() {
//                                     return Promise.resolve(Promise.all([a.leave(e, c), a.enter(e, c)])).then((function() {
//                                       return Promise.resolve(a.j("afterLeave", e, c)).then((function() {
//                                         return Promise.resolve(a.j("afterEnter", e, c)).then((function() {}))
//                                       }))
//                                     }))
//                                   }))
//                                 }))
//                               }))
//                             }), (function(t) {
//                               if (a.M(t)) throw new et(t, "Transition error [sync]")
//                             }));
//                             var t = function(t) {
//                                 return u((function() {
//                                   var t = function() {
//                                     if (!1 !== n) return Promise.resolve(a.add(e, i)).then((function() {
//                                       return Promise.resolve(a.j("beforeEnter", e, c)).then((function() {
//                                         return Promise.resolve(a.enter(e, c, n)).then((function() {
//                                           return Promise.resolve(a.j("afterEnter", e, c)).then((function() {}))
//                                         }))
//                                       }))
//                                     }))
//                                   }();
//                                   if (t && t.then) return t.then((function() {}))
//                                 }), (function(t) {
//                                   if (a.M(t)) throw new et(t, "Transition error [before/after/enter]")
//                                 }))
//                               },
//                               n = !1,
//                               o = u((function() {
//                                 return Promise.resolve(a.j("beforeLeave", e, c)).then((function() {
//                                   return Promise.resolve(Promise.all([a.leave(e, c), S(r, e)]).then((function(t) {
//                                     return t[0]
//                                   }))).then((function(t) {
//                                     return n = t, Promise.resolve(a.j("afterLeave", e, c)).then((function() {}))
//                                   }))
//                                 }))
//                               }), (function(t) {
//                                 if (a.M(t)) throw new et(t, "Transition error [before/after/leave]")
//                               }));
//                             return o && o.then ? o.then(t) : t()
//                           }();
//                           return n && n.then ? n.then(t) : t()
//                         }))
//                       }
//                       var n = function() {
//                         if (l) return Promise.resolve(S(r, e)).then((function() {}))
//                       }();
//                       return n && n.then ? n.then(t) : t()
//                     }), (function(t) {
//                       if (a.S = !1, t.name && "BarbaError" === t.name) throw a.logger.debug(t.label), a.logger.error(t.error), t;
//                       throw a.logger.debug("Transition error [page]"), a.logger.error(t), t
//                     }));
//                     return Promise.resolve(h && h.then ? h.then(o) : o(h))
//                   } catch (t) {
//                     return Promise.reject(t)
//                   }
//                 }, n.once = function(t, e) {
//                   try {
//                     return Promise.resolve(q.do("once", t, e)).then((function() {
//                       return e.once ? z(e.once, e)(t) : Promise.resolve()
//                     }))
//                   } catch (t) {
//                     return Promise.reject(t)
//                   }
//                 }, n.leave = function(t, e) {
//                   try {
//                     return Promise.resolve(q.do("leave", t, e)).then((function() {
//                       return e.leave ? z(e.leave, e)(t) : Promise.resolve()
//                     }))
//                   } catch (t) {
//                     return Promise.reject(t)
//                   }
//                 }, n.enter = function(t, e, n) {
//                   try {
//                     return Promise.resolve(q.do("enter", t, e)).then((function() {
//                       return e.enter ? z(e.enter, e)(t, n) : Promise.resolve()
//                     }))
//                   } catch (t) {
//                     return Promise.reject(t)
//                   }
//                 }, n.add = function(t, e) {
//                   try {
//                     return A.addContainer(t.next.container, e), q.do("nextAdded", t), Promise.resolve()
//                   } catch (t) {
//                     return Promise.reject(t)
//                   }
//                 }, n.remove = function(t) {
//                   try {
//                     return A.removeContainer(t.current.container), q.do("currentRemoved", t), Promise.resolve()
//                   } catch (t) {
//                     return Promise.reject(t)
//                   }
//                 }, n.M = function(t) {
//                   return t.message ? !/Timeout error|Fetch error/.test(t.message) : !t.status
//                 }, n.j = function(t, e, n) {
//                   try {
//                     return Promise.resolve(q.do(t, e, n)).then((function() {
//                       return n[t] ? z(n[t], n)(e) : Promise.resolve()
//                     }))
//                   } catch (t) {
//                     return Promise.reject(t)
//                   }
//                 }, e(t, [{
//                   key: "isRunning",
//                   get: function() {
//                     return this.S
//                   },
//                   set: function(t) {
//                     this.S = t
//                   }
//                 }, {
//                   key: "hasOnce",
//                   get: function() {
//                     return this.store.once.length > 0
//                   }
//                 }, {
//                   key: "hasSelf",
//                   get: function() {
//                     return this.store.all.some((function(t) {
//                       return "self" === t.name
//                     }))
//                   }
//                 }, {
//                   key: "shouldWait",
//                   get: function() {
//                     return this.store.all.some((function(t) {
//                       return t.to && !t.to.route || t.sync
//                     }))
//                   }
//                 }]), t
//               }(),
//               it = function() {
//                 function t(t) {
//                   var e = this;
//                   this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = new Map, 0 !== t.length && (t.forEach((function(t) {
//                     e.byNamespace.set(t.namespace, t)
//                   })), this.names.forEach((function(t) {
//                     q[t](e.L(t))
//                   })))
//                 }
//                 return t.prototype.L = function(t) {
//                   var e = this;
//                   return function(n) {
//                     var r = t.match(/enter/i) ? n.next : n.current,
//                       i = e.byNamespace.get(r.namespace);
//                     return i && i[t] ? z(i[t], i)(n) : Promise.resolve()
//                   }
//                 }, t
//               }();
//             Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t) {
//               var e = this;
//               do {
//                 if (e.matches(t)) return e;
//                 e = e.parentElement || e.parentNode
//               } while (null !== e && 1 === e.nodeType);
//               return null
//             });
//             var ot = {
//               container: null,
//               html: "",
//               namespace: "",
//               url: {
//                 hash: "",
//                 href: "",
//                 path: "",
//                 port: null,
//                 query: {}
//               }
//             };
//             return new(function() {
//               function t() {
//                 this.version = "2.9.7", this.schemaPage = ot, this.Logger = h, this.logger = new h("@barba/core"), this.plugins = [], this.hooks = q, this.dom = A, this.helpers = F, this.history = O, this.request = N, this.url = $
//               }
//               var r = t.prototype;
//               return r.use = function(t, e) {
//                 var n = this.plugins;
//                 n.indexOf(t) > -1 ? this.logger.warn("Plugin [" + t.name + "] already installed.") : "function" == typeof t.install ? (t.install(this, e), n.push(t)) : this.logger.warn("Plugin [" + t.name + '] has no "install" method.')
//               }, r.init = function(t) {
//                 var e = void 0 === t ? {} : t,
//                   r = e.transitions,
//                   i = void 0 === r ? [] : r,
//                   o = e.views,
//                   s = void 0 === o ? [] : o,
//                   a = e.schema,
//                   u = void 0 === a ? M : a,
//                   c = e.requestError,
//                   l = e.timeout,
//                   f = void 0 === l ? 2e3 : l,
//                   d = e.cacheIgnore,
//                   p = void 0 !== d && d,
//                   v = e.prefetchIgnore,
//                   m = void 0 !== v && v,
//                   g = e.preventRunning,
//                   y = void 0 !== g && g,
//                   _ = e.prevent,
//                   w = void 0 === _ ? null : _,
//                   x = e.debug,
//                   b = e.logLevel;
//                 if (h.setLevel(!0 === (void 0 !== x && x) ? "debug" : void 0 === b ? "off" : b), this.logger.info(this.version), Object.keys(u).forEach((function(t) {
//                     M[t] && (M[t] = u[t])
//                   })), this.$ = c, this.timeout = f, this.cacheIgnore = p, this.prefetchIgnore = m, this.preventRunning = y, this._ = this.dom.getWrapper(), !this._) throw new Error("[@barba/core] No Barba wrapper found");
//                 this._.setAttribute("aria-live", "polite"), this.q();
//                 var k = this.data.current;
//                 if (!k.container) throw new Error("[@barba/core] No Barba container found");
//                 if (this.cache = new W(p), this.prevent = new tt(m), this.transitions = new rt(i), this.views = new it(s), null !== w) {
//                   if ("function" != typeof w) throw new Error("[@barba/core] Prevent should be a function");
//                   this.prevent.add("preventCustom", w)
//                 }
//                 this.history.init(k.url.href, k.namespace), this.B = this.B.bind(this), this.U = this.U.bind(this), this.D = this.D.bind(this), this.F(), this.plugins.forEach((function(t) {
//                   return t.init()
//                 }));
//                 var E = this.data;
//                 E.trigger = "barba", E.next = E.current, E.current = n({}, this.schemaPage), this.hooks.do("ready", E), this.once(E), this.q()
//               }, r.destroy = function() {
//                 this.q(), this.H(), this.history.clear(), this.hooks.clear(), this.plugins = []
//               }, r.force = function(t) {
//                 window.location.assign(t)
//               }, r.go = function(t, e, n) {
//                 var r;
//                 if (void 0 === e && (e = "barba"), this.transitions.isRunning) this.force(t);
//                 else if (!(r = "popstate" === e ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t) : this.prevent.run("sameUrl", null, null, t)) || this.transitions.hasSelf) return e = this.history.change(t, e, n), n && (n.stopPropagation(), n.preventDefault()), this.page(t, e, r)
//               }, r.once = function(t) {
//                 try {
//                   var e = this;
//                   return Promise.resolve(e.hooks.do("beforeEnter", t)).then((function() {
//                     function n() {
//                       return Promise.resolve(e.hooks.do("afterEnter", t)).then((function() {}))
//                     }
//                     var r = function() {
//                       if (e.transitions.hasOnce) {
//                         var n = e.transitions.get(t, {
//                           once: !0
//                         });
//                         return Promise.resolve(e.transitions.doOnce({
//                           transition: n,
//                           data: t
//                         })).then((function() {}))
//                       }
//                     }();
//                     return r && r.then ? r.then(n) : n()
//                   }))
//                 } catch (t) {
//                   return Promise.reject(t)
//                 }
//               }, r.page = function(t, e, r) {
//                 try {
//                   var i = function() {
//                       var t = o.data;
//                       return Promise.resolve(o.hooks.do("page", t)).then((function() {
//                         var e = u((function() {
//                           var e = o.transitions.get(t, {
//                             once: !1,
//                             self: r
//                           });
//                           return Promise.resolve(o.transitions.doPage({
//                             data: t,
//                             page: s,
//                             transition: e,
//                             wrapper: o._
//                           })).then((function() {
//                             o.q()
//                           }))
//                         }), (function() {
//                           0 === h.getLevel() && o.force(t.current.url.href)
//                         }));
//                         if (e && e.then) return e.then((function() {}))
//                       }))
//                     },
//                     o = this;
//                   o.data.next.url = n({
//                     href: t
//                   }, o.url.parse(t)), o.data.trigger = e;
//                   var s = o.cache.has(t) ? o.cache.update(t, {
//                       action: "click"
//                     }).request : o.cache.set(t, o.request(t, o.timeout, o.onRequestError.bind(o, e)), "click").request,
//                     a = function() {
//                       if (o.transitions.shouldWait) return Promise.resolve(S(s, o.data)).then((function() {}))
//                     }();
//                   return Promise.resolve(a && a.then ? a.then(i) : i())
//                 } catch (t) {
//                   return Promise.reject(t)
//                 }
//               }, r.onRequestError = function(t) {
//                 this.transitions.isRunning = !1;
//                 for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
//                 var i = n[0],
//                   o = n[1],
//                   s = this.cache.getAction(i);
//                 return this.cache.delete(i), !(this.$ && !1 === this.$(t, s, i, o) || ("click" === s && this.force(i), 1))
//               }, r.prefetch = function(t) {
//                 var e = this;
//                 this.cache.has(t) || this.cache.set(t, this.request(t, this.timeout, this.onRequestError.bind(this, "barba")).catch((function(t) {
//                   e.logger.error(t)
//                 })), "prefetch")
//               }, r.F = function() {
//                 !0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.B), document.addEventListener("touchstart", this.B)), document.addEventListener("click", this.U), window.addEventListener("popstate", this.D)
//               }, r.H = function() {
//                 !0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.B), document.removeEventListener("touchstart", this.B)), document.removeEventListener("click", this.U), window.removeEventListener("popstate", this.D)
//               }, r.B = function(t) {
//                 var e = this,
//                   n = this.I(t);
//                 if (n) {
//                   var r = this.dom.getHref(n);
//                   this.prevent.checkHref(r) || this.cache.has(r) || this.cache.set(r, this.request(r, this.timeout, this.onRequestError.bind(this, n)).catch((function(t) {
//                     e.logger.error(t)
//                   })), "enter")
//                 }
//               }, r.U = function(t) {
//                 var e = this.I(t);
//                 if (e) return this.transitions.isRunning && this.preventRunning ? (t.preventDefault(), void t.stopPropagation()) : void this.go(this.dom.getHref(e), e, t)
//               }, r.D = function(t) {
//                 this.go(this.url.getHref(), "popstate", t)
//               }, r.I = function(t) {
//                 for (var e = t.target; e && !this.dom.getHref(e);) e = e.parentNode;
//                 if (e && !this.prevent.checkLink(e, t, this.dom.getHref(e))) return e
//               }, r.q = function() {
//                 var t = this.url.getHref(),
//                   e = {
//                     container: this.dom.getContainer(),
//                     html: this.dom.getHtml(),
//                     namespace: this.dom.getNamespace(),
//                     url: n({
//                       href: t
//                     }, this.url.parse(t))
//                   };
//                 this.C = {
//                   current: e,
//                   next: n({}, this.schemaPage),
//                   trigger: void 0
//                 }, this.hooks.do("reset", this.data)
//               }, e(t, [{
//                 key: "data",
//                 get: function() {
//                   return this.C
//                 }
//               }, {
//                 key: "wrapper",
//                 get: function() {
//                   return this._
//                 }
//               }]), t
//             }())
//           }()
//         },
//         40: function(t) {
//           var e;
//           t.exports = ("2.1.10", e = window.requestIdleCallback || function(t) {
//             var e = Date.now();
//             return setTimeout((function() {
//               t({
//                 didTimeout: !1,
//                 timeRemaining: function() {
//                   return Math.max(0, 50 - (Date.now() - e))
//                 }
//               })
//             }), 1)
//           }, new(function() {
//             function t() {
//               this.name = "@barba/prefetch", this.version = "2.1.10", this.toPrefetch = new Set
//             }
//             var n = t.prototype;
//             return n.install = function(t, e) {
//               var n = void 0 === e ? {} : e,
//                 r = n.root,
//                 i = void 0 === r ? document.body : r,
//                 o = n.timeout,
//                 s = void 0 === o ? 2e3 : o;
//               this.logger = new t.Logger(this.name), this.logger.info(this.version), this.barba = t, this.root = i, this.timeout = s
//             }, n.init = function() {
//               var t = this;
//               this.barba.prefetchIgnore ? this.logger.warn("barba.prefetchIgnore is enabled") : this.barba.cacheIgnore ? this.logger.warn("barba.cacheIgnore is enabled") : (this.observer = new IntersectionObserver((function(e) {
//                 e.forEach((function(e) {
//                   if (e.isIntersecting) {
//                     var n = e.target,
//                       r = t.barba.dom.getHref(n);
//                     t.toPrefetch.has(r) && (t.observer.unobserve(n), t.barba.cache.has(r) ? t.barba.cache.update(r, {
//                       action: "prefetch"
//                     }) : t.barba.cache.set(r, t.barba.request(r, t.barba.timeout, t.barba.onRequestError.bind(t.barba, "barba")).catch((function(e) {
//                       t.logger.error(e)
//                     })), "prefetch"))
//                   }
//                 }))
//               })), this.observe(), this.barba.hooks.after(this.observe, this))
//             }, n.observe = function() {
//               var t = this;
//               e((function() {
//                 t.root.querySelectorAll("a").forEach((function(e) {
//                   var n = e,
//                     r = t.barba.dom.getHref(n);
//                   t.barba.cache.has(r) || t.barba.prevent.checkHref(r) || t.barba.prevent.checkLink(n, {}, r) || (t.observer.observe(e), t.toPrefetch.add(r))
//                 }))
//               }), {
//                 timeout: this.timeout
//               })
//             }, t
//           }()))
//         }
//       },
//       e = {};
  
//     function n(r) {
//       var i = e[r];
//       if (void 0 !== i) return i.exports;
//       var o = e[r] = {
//         exports: {}
//       };
//       return t[r].call(o.exports, o, o.exports, n), o.exports
//     }
//     n.n = t => {
//       var e = t && t.__esModule ? () => t.default : () => t;
//       return n.d(e, {
//         a: e
//       }), e
//     }, n.d = (t, e) => {
//       for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
//         enumerable: !0,
//         get: e[r]
//       })
//     }, n.g = function() {
//       if ("object" == typeof globalThis) return globalThis;
//       try {
//         return this || new Function("return this")()
//       } catch (t) {
//         if ("object" == typeof window) return window
//       }
//     }(), n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), (() => {
//       "use strict";
  
//       function t(t) {
//         if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return t
//       }
  
//       function e(t, e) {
//         t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
//       }
//       var r, i, o, s, a, u, c, l, h, f, d, p, v, m, g, y = {
//           autoSleep: 120,
//           force3D: "auto",
//           nullTargetWarn: 1,
//           units: {
//             lineHeight: ""
//           }
//         },
//         _ = {
//           duration: .5,
//           overwrite: !1,
//           delay: 0
//         },
//         w = 1e8,
//         x = 1e-8,
//         b = 2 * Math.PI,
//         k = b / 4,
//         E = 0,
//         T = Math.sqrt,
//         P = Math.cos,
//         M = Math.sin,
//         A = function(t) {
//           return "string" == typeof t
//         },
//         O = function(t) {
//           return "function" == typeof t
//         },
//         S = function(t) {
//           return "number" == typeof t
//         },
//         C = function(t) {
//           return void 0 === t
//         },
//         F = function(t) {
//           return "object" == typeof t
//         },
//         L = function(t) {
//           return !1 !== t
//         },
//         R = function() {
//           return "undefined" != typeof window
//         },
//         D = function(t) {
//           return O(t) || A(t)
//         },
//         j = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
//         I = Array.isArray,
//         $ = /(?:-?\.?\d|\.)+/gi,
//         N = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
//         z = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
//         q = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
//         B = /[+-]=-?[.\d]+/,
//         W = /[^,'"\[\]\s]+/gi,
//         H = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
//         V = {},
//         U = {},
//         Y = function(t) {
//           return (U = bt(t, V)) && kn
//         },
//         X = function(t, e) {
//           return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
//         },
//         G = function(t, e) {
//           return !e && console.warn(t)
//         },
//         K = function(t, e) {
//           return t && (V[t] = e) && U && (U[t] = e) || V
//         },
//         Q = function() {
//           return 0
//         },
//         J = {
//           suppressEvents: !0,
//           isStart: !0,
//           kill: !1
//         },
//         Z = {
//           suppressEvents: !0,
//           kill: !1
//         },
//         tt = {
//           suppressEvents: !0
//         },
//         et = {},
//         nt = [],
//         rt = {},
//         it = {},
//         ot = {},
//         st = 30,
//         at = [],
//         ut = "",
//         ct = function(t) {
//           var e, n, r = t[0];
//           if (F(r) || O(r) || (t = [t]), !(e = (r._gsap || {}).harness)) {
//             for (n = at.length; n-- && !at[n].targetTest(r););
//             e = at[n]
//           }
//           for (n = t.length; n--;) t[n] && (t[n]._gsap || (t[n]._gsap = new je(t[n], e))) || t.splice(n, 1);
//           return t
//         },
//         lt = function(t) {
//           return t._gsap || ct(Zt(t))[0]._gsap
//         },
//         ht = function(t, e, n) {
//           return (n = t[e]) && O(n) ? t[e]() : C(n) && t.getAttribute && t.getAttribute(e) || n
//         },
//         ft = function(t, e) {
//           return (t = t.split(",")).forEach(e) || t
//         },
//         dt = function(t) {
//           return Math.round(1e5 * t) / 1e5 || 0
//         },
//         pt = function(t) {
//           return Math.round(1e7 * t) / 1e7 || 0
//         },
//         vt = function(t, e) {
//           var n = e.charAt(0),
//             r = parseFloat(e.substr(2));
//           return t = parseFloat(t), "+" === n ? t + r : "-" === n ? t - r : "*" === n ? t * r : t / r
//         },
//         mt = function(t, e) {
//           for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n;);
//           return r < n
//         },
//         gt = function() {
//           var t, e, n = nt.length,
//             r = nt.slice(0);
//           for (rt = {}, nt.length = 0, t = 0; t < n; t++)(e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
//         },
//         yt = function(t, e, n, r) {
//           nt.length && !i && gt(), t.render(e, n, r || i && e < 0 && (t._initted || t._startAt)), nt.length && !i && gt()
//         },
//         _t = function(t) {
//           var e = parseFloat(t);
//           return (e || 0 === e) && (t + "").match(W).length < 2 ? e : A(t) ? t.trim() : t
//         },
//         wt = function(t) {
//           return t
//         },
//         xt = function(t, e) {
//           for (var n in e) n in t || (t[n] = e[n]);
//           return t
//         },
//         bt = function(t, e) {
//           for (var n in e) t[n] = e[n];
//           return t
//         },
//         kt = function t(e, n) {
//           for (var r in n) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (e[r] = F(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
//           return e
//         },
//         Et = function(t, e) {
//           var n, r = {};
//           for (n in t) n in e || (r[n] = t[n]);
//           return r
//         },
//         Tt = function(t) {
//           var e, n = t.parent || s,
//             r = t.keyframes ? (e = I(t.keyframes), function(t, n) {
//               for (var r in n) r in t || "duration" === r && e || "ease" === r || (t[r] = n[r])
//             }) : xt;
//           if (L(t.inherit))
//             for (; n;) r(t, n.vars.defaults), n = n.parent || n._dp;
//           return t
//         },
//         Pt = function(t, e, n, r, i) {
//           void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
//           var o, s = t[r];
//           if (i)
//             for (o = e[i]; s && s[i] > o;) s = s._prev;
//           return s ? (e._next = s._next, s._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = s, e.parent = e._dp = t, e
//         },
//         Mt = function(t, e, n, r) {
//           void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
//           var i = e._prev,
//             o = e._next;
//           i ? i._next = o : t[n] === e && (t[n] = o), o ? o._prev = i : t[r] === e && (t[r] = i), e._next = e._prev = e.parent = null
//         },
//         At = function(t, e) {
//           t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
//         },
//         Ot = function(t, e) {
//           if (t && (!e || e._end > t._dur || e._start < 0))
//             for (var n = t; n;) n._dirty = 1, n = n.parent;
//           return t
//         },
//         St = function(t, e, n, r) {
//           return t._startAt && (i ? t._startAt.revert(Z) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r))
//         },
//         Ct = function t(e) {
//           return !e || e._ts && t(e.parent)
//         },
//         Ft = function(t) {
//           return t._repeat ? Lt(t._tTime, t = t.duration() + t._rDelay) * t : 0
//         },
//         Lt = function(t, e) {
//           var n = Math.floor(t /= e);
//           return t && n === t ? n - 1 : n
//         },
//         Rt = function(t, e) {
//           return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
//         },
//         Dt = function(t) {
//           return t._end = pt(t._start + (t._tDur / Math.abs(t._ts || t._rts || x) || 0))
//         },
//         jt = function(t, e) {
//           var n = t._dp;
//           return n && n.smoothChildTiming && t._ts && (t._start = pt(n._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Dt(t), n._dirty || Ot(n, t)), t
//         },
//         It = function(t, e) {
//           var n;
//           if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (n = Rt(t.rawTime(), e), (!e._dur || Gt(0, e.totalDuration(), n) - e._tTime > x) && e.render(n, !0)), Ot(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
//             if (t._dur < t.duration())
//               for (n = t; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
//             t._zTime = -1e-8
//           }
//         },
//         $t = function(t, e, n, r) {
//           return e.parent && At(e), e._start = pt((S(n) ? n : n || t !== s ? Ut(t, n, e) : t._time) + e._delay), e._end = pt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Pt(t, e, "_first", "_last", t._sort ? "_start" : 0), Bt(e) || (t._recent = e), r || It(t, e), t._ts < 0 && jt(t, t._tTime), t
//         },
//         Nt = function(t, e) {
//           return (V.ScrollTrigger || X("scrollTrigger", e)) && V.ScrollTrigger.create(e, t)
//         },
//         zt = function(t, e, n, r, o) {
//           return He(t, e, o), t._initted ? !n && t._pt && !i && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && h !== ke.frame ? (nt.push(t), t._lazy = [o, r], 1) : void 0 : 1
//         },
//         qt = function t(e) {
//           var n = e.parent;
//           return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
//         },
//         Bt = function(t) {
//           var e = t.data;
//           return "isFromStart" === e || "isStart" === e
//         },
//         Wt = function(t, e, n, r) {
//           var i = t._repeat,
//             o = pt(e) || 0,
//             s = t._tTime / t._tDur;
//           return s && !r && (t._time *= o / t._dur), t._dur = o, t._tDur = i ? i < 0 ? 1e10 : pt(o * (i + 1) + t._rDelay * i) : o, s > 0 && !r && jt(t, t._tTime = t._tDur * s), t.parent && Dt(t), n || Ot(t.parent, t), t
//         },
//         Ht = function(t) {
//           return t instanceof $e ? Ot(t) : Wt(t, t._dur)
//         },
//         Vt = {
//           _start: 0,
//           endTime: Q,
//           totalDuration: Q
//         },
//         Ut = function t(e, n, r) {
//           var i, o, s, a = e.labels,
//             u = e._recent || Vt,
//             c = e.duration() >= w ? u.endTime(!1) : e._dur;
//           return A(n) && (isNaN(n) || n in a) ? (o = n.charAt(0), s = "%" === n.substr(-1), i = n.indexOf("="), "<" === o || ">" === o ? (i >= 0 && (n = n.replace(/=/, "")), ("<" === o ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (s ? (i < 0 ? u : r).totalDuration() / 100 : 1)) : i < 0 ? (n in a || (a[n] = c), a[n]) : (o = parseFloat(n.charAt(i - 1) + n.substr(i + 1)), s && r && (o = o / 100 * (I(r) ? r[0] : r).totalDuration()), i > 1 ? t(e, n.substr(0, i - 1), r) + o : c + o)) : null == n ? c : +n
//         },
//         Yt = function(t, e, n) {
//           var r, i, o = S(e[1]),
//             s = (o ? 2 : 1) + (t < 2 ? 0 : 1),
//             a = e[s];
//           if (o && (a.duration = e[1]), a.parent = n, t) {
//             for (r = a, i = n; i && !("immediateRender" in r);) r = i.vars.defaults || {}, i = L(i.vars.inherit) && i.parent;
//             a.immediateRender = L(r.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[s - 1]
//           }
//           return new Ge(e[0], a, e[s + 1])
//         },
//         Xt = function(t, e) {
//           return t || 0 === t ? e(t) : e
//         },
//         Gt = function(t, e, n) {
//           return n < t ? t : n > e ? e : n
//         },
//         Kt = function(t, e) {
//           return A(t) && (e = H.exec(t)) ? e[1] : ""
//         },
//         Qt = [].slice,
//         Jt = function(t, e) {
//           return t && F(t) && "length" in t && (!e && !t.length || t.length - 1 in t && F(t[0])) && !t.nodeType && t !== a
//         },
//         Zt = function(t, e, n) {
//           return o && !e && o.selector ? o.selector(t) : !A(t) || n || !u && Ee() ? I(t) ? function(t, e, n) {
//             return void 0 === n && (n = []), t.forEach((function(t) {
//               var r;
//               return A(t) && !e || Jt(t, 1) ? (r = n).push.apply(r, Zt(t)) : n.push(t)
//             })) || n
//           }(t, n) : Jt(t) ? Qt.call(t, 0) : t ? [t] : [] : Qt.call((e || c).querySelectorAll(t), 0)
//         },
//         te = function(t) {
//           return t = Zt(t)[0] || G("Invalid scope") || {},
//             function(e) {
//               var n = t.current || t.nativeElement || t;
//               return Zt(e, n.querySelectorAll ? n : n === t ? G("Invalid scope") || c.createElement("div") : t)
//             }
//         },
//         ee = function(t) {
//           return t.sort((function() {
//             return .5 - Math.random()
//           }))
//         },
//         ne = function(t) {
//           if (O(t)) return t;
//           var e = F(t) ? t : {
//               each: t
//             },
//             n = Ce(e.ease),
//             r = e.from || 0,
//             i = parseFloat(e.base) || 0,
//             o = {},
//             s = r > 0 && r < 1,
//             a = isNaN(r) || s,
//             u = e.axis,
//             c = r,
//             l = r;
//           return A(r) ? c = l = {
//               center: .5,
//               edges: .5,
//               end: 1
//             } [r] || 0 : !s && a && (c = r[0], l = r[1]),
//             function(t, s, h) {
//               var f, d, p, v, m, g, y, _, x, b = (h || e).length,
//                 k = o[b];
//               if (!k) {
//                 if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, w])[1])) {
//                   for (y = -w; y < (y = h[x++].getBoundingClientRect().left) && x < b;);
//                   x--
//                 }
//                 for (k = o[b] = [], f = a ? Math.min(x, b) * c - .5 : r % x, d = x === w ? 0 : a ? b * l / x - .5 : r / x | 0, y = 0, _ = w, g = 0; g < b; g++) p = g % x - f, v = d - (g / x | 0), k[g] = m = u ? Math.abs("y" === u ? v : p) : T(p * p + v * v), m > y && (y = m), m < _ && (_ = m);
//                 "random" === r && ee(k), k.max = y - _, k.min = _, k.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (x > b ? b - 1 : u ? "y" === u ? b / x : x : Math.max(x, b / x)) || 0) * ("edges" === r ? -1 : 1), k.b = b < 0 ? i - b : i, k.u = Kt(e.amount || e.each) || 0, n = n && b < 0 ? Oe(n) : n
//               }
//               return b = (k[t] - k.min) / k.max || 0, pt(k.b + (n ? n(b) : b) * k.v) + k.u
//             }
//         },
//         re = function(t) {
//           var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
//           return function(n) {
//             var r = pt(Math.round(parseFloat(n) / t) * t * e);
//             return (r - r % 1) / e + (S(n) ? 0 : Kt(n))
//           }
//         },
//         ie = function(t, e) {
//           var n, r, i = I(t);
//           return !i && F(t) && (n = i = t.radius || w, t.values ? (t = Zt(t.values), (r = !S(t[0])) && (n *= n)) : t = re(t.increment)), Xt(e, i ? O(t) ? function(e) {
//             return r = t(e), Math.abs(r - e) <= n ? r : e
//           } : function(e) {
//             for (var i, o, s = parseFloat(r ? e.x : e), a = parseFloat(r ? e.y : 0), u = w, c = 0, l = t.length; l--;)(i = r ? (i = t[l].x - s) * i + (o = t[l].y - a) * o : Math.abs(t[l] - s)) < u && (u = i, c = l);
//             return c = !n || u <= n ? t[c] : e, r || c === e || S(e) ? c : c + Kt(e)
//           } : re(t))
//         },
//         oe = function(t, e, n, r) {
//           return Xt(I(t) ? !e : !0 === n ? !!(n = 0) : !r, (function() {
//             return I(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + .99 * n)) / n) * n * r) / r
//           }))
//         },
//         se = function(t, e, n) {
//           return Xt(n, (function(n) {
//             return t[~~e(n)]
//           }))
//         },
//         ae = function(t) {
//           for (var e, n, r, i, o = 0, s = ""; ~(e = t.indexOf("random(", o));) r = t.indexOf(")", e), i = "[" === t.charAt(e + 7), n = t.substr(e + 7, r - e - 7).match(i ? W : $), s += t.substr(o, e - o) + oe(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5), o = r + 1;
//           return s + t.substr(o, t.length - o)
//         },
//         ue = function(t, e, n, r, i) {
//           var o = e - t,
//             s = r - n;
//           return Xt(i, (function(e) {
//             return n + ((e - t) / o * s || 0)
//           }))
//         },
//         ce = function(t, e, n) {
//           var r, i, o, s = t.labels,
//             a = w;
//           for (r in s)(i = s[r] - e) < 0 == !!n && i && a > (i = Math.abs(i)) && (o = r, a = i);
//           return o
//         },
//         le = function(t, e, n) {
//           var r, i, s, a = t.vars,
//             u = a[e],
//             c = o,
//             l = t._ctx;
//           if (u) return r = a[e + "Params"], i = a.callbackScope || t, n && nt.length && gt(), l && (o = l), s = r ? u.apply(i, r) : u.call(i), o = c, s
//         },
//         he = function(t) {
//           return At(t), t.scrollTrigger && t.scrollTrigger.kill(!!i), t.progress() < 1 && le(t, "onInterrupt"), t
//         },
//         fe = [],
//         de = function(t) {
//           if (R() && t) {
//             var e = (t = !t.name && t.default || t).name,
//               n = O(t),
//               r = e && !n && t.init ? function() {
//                 this._props = []
//               } : t,
//               i = {
//                 init: Q,
//                 render: on,
//                 add: Be,
//                 kill: an,
//                 modifier: sn,
//                 rawVars: 0
//               },
//               o = {
//                 targetTest: 0,
//                 get: 0,
//                 getSetter: tn,
//                 aliases: {},
//                 register: 0
//               };
//             if (Ee(), t !== r) {
//               if (it[e]) return;
//               xt(r, xt(Et(t, i), o)), bt(r.prototype, bt(i, Et(t, o))), it[r.prop = e] = r, t.targetTest && (at.push(r), et[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
//             }
//             K(e, r), t.register && t.register(kn, r, ln)
//           } else t && fe.push(t)
//         },
//         pe = 255,
//         ve = {
//           aqua: [0, pe, pe],
//           lime: [0, pe, 0],
//           silver: [192, 192, 192],
//           black: [0, 0, 0],
//           maroon: [128, 0, 0],
//           teal: [0, 128, 128],
//           blue: [0, 0, pe],
//           navy: [0, 0, 128],
//           white: [pe, pe, pe],
//           olive: [128, 128, 0],
//           yellow: [pe, pe, 0],
//           orange: [pe, 165, 0],
//           gray: [128, 128, 128],
//           purple: [128, 0, 128],
//           green: [0, 128, 0],
//           red: [pe, 0, 0],
//           pink: [pe, 192, 203],
//           cyan: [0, pe, pe],
//           transparent: [pe, pe, pe, 0]
//         },
//         me = function(t, e, n) {
//           return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * pe + .5 | 0
//         },
//         ge = function(t, e, n) {
//           var r, i, o, s, a, u, c, l, h, f, d = t ? S(t) ? [t >> 16, t >> 8 & pe, t & pe] : 0 : ve.black;
//           if (!d) {
//             if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ve[t]) d = ve[t];
//             else if ("#" === t.charAt(0)) {
//               if (t.length < 6 && (r = t.charAt(1), i = t.charAt(2), o = t.charAt(3), t = "#" + r + r + i + i + o + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(d = parseInt(t.substr(1, 6), 16)) >> 16, d >> 8 & pe, d & pe, parseInt(t.substr(7), 16) / 255];
//               d = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & pe, t & pe]
//             } else if ("hsl" === t.substr(0, 3))
//               if (d = f = t.match($), e) {
//                 if (~t.indexOf("=")) return d = t.match(N), n && d.length < 4 && (d[3] = 1), d
//               } else s = +d[0] % 360 / 360, a = +d[1] / 100, r = 2 * (u = +d[2] / 100) - (i = u <= .5 ? u * (a + 1) : u + a - u * a), d.length > 3 && (d[3] *= 1), d[0] = me(s + 1 / 3, r, i), d[1] = me(s, r, i), d[2] = me(s - 1 / 3, r, i);
//             else d = t.match($) || ve.transparent;
//             d = d.map(Number)
//           }
//           return e && !f && (r = d[0] / pe, i = d[1] / pe, o = d[2] / pe, u = ((c = Math.max(r, i, o)) + (l = Math.min(r, i, o))) / 2, c === l ? s = a = 0 : (h = c - l, a = u > .5 ? h / (2 - c - l) : h / (c + l), s = c === r ? (i - o) / h + (i < o ? 6 : 0) : c === i ? (o - r) / h + 2 : (r - i) / h + 4, s *= 60), d[0] = ~~(s + .5), d[1] = ~~(100 * a + .5), d[2] = ~~(100 * u + .5)), n && d.length < 4 && (d[3] = 1), d
//         },
//         ye = function(t) {
//           var e = [],
//             n = [],
//             r = -1;
//           return t.split(we).forEach((function(t) {
//             var i = t.match(z) || [];
//             e.push.apply(e, i), n.push(r += i.length + 1)
//           })), e.c = n, e
//         },
//         _e = function(t, e, n) {
//           var r, i, o, s, a = "",
//             u = (t + a).match(we),
//             c = e ? "hsla(" : "rgba(",
//             l = 0;
//           if (!u) return t;
//           if (u = u.map((function(t) {
//               return (t = ge(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
//             })), n && (o = ye(t), (r = n.c).join(a) !== o.c.join(a)))
//             for (s = (i = t.replace(we, "1").split(z)).length - 1; l < s; l++) a += i[l] + (~r.indexOf(l) ? u.shift() || c + "0,0,0,0)" : (o.length ? o : u.length ? u : n).shift());
//           if (!i)
//             for (s = (i = t.split(we)).length - 1; l < s; l++) a += i[l] + u[l];
//           return a + i[s]
//         },
//         we = function() {
//           var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
//           for (t in ve) e += "|" + t + "\\b";
//           return new RegExp(e + ")", "gi")
//         }(),
//         xe = /hsl[a]?\(/,
//         be = function(t) {
//           var e, n = t.join(" ");
//           if (we.lastIndex = 0, we.test(n)) return e = xe.test(n), t[1] = _e(t[1], e), t[0] = _e(t[0], e, ye(t[1])), !0
//         },
//         ke = function() {
//           var t, e, n, r, i, o, s = Date.now,
//             h = 500,
//             f = 33,
//             p = s(),
//             v = p,
//             m = 1e3 / 240,
//             g = m,
//             y = [],
//             _ = function n(a) {
//               var u, c, l, d, _ = s() - v,
//                 w = !0 === a;
//               if (_ > h && (p += _ - f), ((u = (l = (v += _) - p) - g) > 0 || w) && (d = ++r.frame, i = l - 1e3 * r.time, r.time = l /= 1e3, g += u + (u >= m ? 4 : m - u), c = 1), w || (t = e(n)), c)
//                 for (o = 0; o < y.length; o++) y[o](l, i, d, a)
//             };
//           return r = {
//             time: 0,
//             frame: 0,
//             tick: function() {
//               _(!0)
//             },
//             deltaRatio: function(t) {
//               return i / (1e3 / (t || 60))
//             },
//             wake: function() {
//               l && (!u && R() && (a = u = window, c = a.document || {}, V.gsap = kn, (a.gsapVersions || (a.gsapVersions = [])).push(kn.version), Y(U || a.GreenSockGlobals || !a.gsap && a || {}), n = a.requestAnimationFrame, fe.forEach(de)), t && r.sleep(), e = n || function(t) {
//                 return setTimeout(t, g - 1e3 * r.time + 1 | 0)
//               }, d = 1, _(2))
//             },
//             sleep: function() {
//               (n ? a.cancelAnimationFrame : clearTimeout)(t), d = 0, e = Q
//             },
//             lagSmoothing: function(t, e) {
//               h = t || 1 / 0, f = Math.min(e || 33, h)
//             },
//             fps: function(t) {
//               m = 1e3 / (t || 240), g = 1e3 * r.time + m
//             },
//             add: function(t, e, n) {
//               var i = e ? function(e, n, o, s) {
//                 t(e, n, o, s), r.remove(i)
//               } : t;
//               return r.remove(t), y[n ? "unshift" : "push"](i), Ee(), i
//             },
//             remove: function(t, e) {
//               ~(e = y.indexOf(t)) && y.splice(e, 1) && o >= e && o--
//             },
//             _listeners: y
//           }, r
//         }(),
//         Ee = function() {
//           return !d && ke.wake()
//         },
//         Te = {},
//         Pe = /^[\d.\-M][\d.\-,\s]/,
//         Me = /["']/g,
//         Ae = function(t) {
//           for (var e, n, r, i = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, u = o.length; a < u; a++) n = o[a], e = a !== u - 1 ? n.lastIndexOf(",") : n.length, r = n.substr(0, e), i[s] = isNaN(r) ? r.replace(Me, "").trim() : +r, s = n.substr(e + 1).trim();
//           return i
//         },
//         Oe = function(t) {
//           return function(e) {
//             return 1 - t(1 - e)
//           }
//         },
//         Se = function t(e, n) {
//           for (var r, i = e._first; i;) i instanceof $e ? t(i, n) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === n || (i.timeline ? t(i.timeline, n) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = n)), i = i._next
//         },
//         Ce = function(t, e) {
//           return t && (O(t) ? t : Te[t] || function(t) {
//             var e, n, r, i, o = (t + "").split("("),
//               s = Te[o[0]];
//             return s && o.length > 1 && s.config ? s.config.apply(null, ~t.indexOf("{") ? [Ae(o[1])] : (e = t, n = e.indexOf("(") + 1, r = e.indexOf(")"), i = e.indexOf("(", n), e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r)).split(",").map(_t)) : Te._CE && Pe.test(t) ? Te._CE("", t) : s
//           }(t)) || e
//         },
//         Fe = function(t, e, n, r) {
//           void 0 === n && (n = function(t) {
//             return 1 - e(1 - t)
//           }), void 0 === r && (r = function(t) {
//             return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
//           });
//           var i, o = {
//             easeIn: e,
//             easeOut: n,
//             easeInOut: r
//           };
//           return ft(t, (function(t) {
//             for (var e in Te[t] = V[t] = o, Te[i = t.toLowerCase()] = n, o) Te[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Te[t + "." + e] = o[e]
//           })), o
//         },
//         Le = function(t) {
//           return function(e) {
//             return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
//           }
//         },
//         Re = function t(e, n, r) {
//           var i = n >= 1 ? n : 1,
//             o = (r || (e ? .3 : .45)) / (n < 1 ? n : 1),
//             s = o / b * (Math.asin(1 / i) || 0),
//             a = function(t) {
//               return 1 === t ? 1 : i * Math.pow(2, -10 * t) * M((t - s) * o) + 1
//             },
//             u = "out" === e ? a : "in" === e ? function(t) {
//               return 1 - a(1 - t)
//             } : Le(a);
//           return o = b / o, u.config = function(n, r) {
//             return t(e, n, r)
//           }, u
//         },
//         De = function t(e, n) {
//           void 0 === n && (n = 1.70158);
//           var r = function(t) {
//               return t ? --t * t * ((n + 1) * t + n) + 1 : 0
//             },
//             i = "out" === e ? r : "in" === e ? function(t) {
//               return 1 - r(1 - t)
//             } : Le(r);
//           return i.config = function(n) {
//             return t(e, n)
//           }, i
//         };
//       ft("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
//         var n = e < 5 ? e + 1 : e;
//         Fe(t + ",Power" + (n - 1), e ? function(t) {
//           return Math.pow(t, n)
//         } : function(t) {
//           return t
//         }, (function(t) {
//           return 1 - Math.pow(1 - t, n)
//         }), (function(t) {
//           return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
//         }))
//       })), Te.Linear.easeNone = Te.none = Te.Linear.easeIn, Fe("Elastic", Re("in"), Re("out"), Re()), p = 7.5625, m = 1 / (v = 2.75), Fe("Bounce", (function(t) {
//         return 1 - g(1 - t)
//       }), g = function(t) {
//         return t < m ? p * t * t : t < .7272727272727273 ? p * Math.pow(t - 1.5 / v, 2) + .75 : t < .9090909090909092 ? p * (t -= 2.25 / v) * t + .9375 : p * Math.pow(t - 2.625 / v, 2) + .984375
//       }), Fe("Expo", (function(t) {
//         return t ? Math.pow(2, 10 * (t - 1)) : 0
//       })), Fe("Circ", (function(t) {
//         return -(T(1 - t * t) - 1)
//       })), Fe("Sine", (function(t) {
//         return 1 === t ? 1 : 1 - P(t * k)
//       })), Fe("Back", De("in"), De("out"), De()), Te.SteppedEase = Te.steps = V.SteppedEase = {
//         config: function(t, e) {
//           void 0 === t && (t = 1);
//           var n = 1 / t,
//             r = t + (e ? 0 : 1),
//             i = e ? 1 : 0;
//           return function(t) {
//             return ((r * Gt(0, .99999999, t) | 0) + i) * n
//           }
//         }
//       }, _.ease = Te["quad.out"], ft("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
//         return ut += t + "," + t + "Params,"
//       }));
//       var je = function(t, e) {
//           this.id = E++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : ht, this.set = e ? e.getSetter : tn
//         },
//         Ie = function() {
//           function t(t) {
//             this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Wt(this, +t.duration, 1, 1), this.data = t.data, o && (this._ctx = o, o.data.push(this)), d || ke.wake()
//           }
//           var e = t.prototype;
//           return e.delay = function(t) {
//             return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
//           }, e.duration = function(t) {
//             return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
//           }, e.totalDuration = function(t) {
//             return arguments.length ? (this._dirty = 0, Wt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
//           }, e.totalTime = function(t, e) {
//             if (Ee(), !arguments.length) return this._tTime;
//             var n = this._dp;
//             if (n && n.smoothChildTiming && this._ts) {
//               for (jt(this, t), !n._dp || n.parent || It(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
//               !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && $t(this._dp, this, this._start - this._delay)
//             }
//             return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === x || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), yt(this, t, e)), this
//           }, e.time = function(t, e) {
//             return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Ft(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
//           }, e.totalProgress = function(t, e) {
//             return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
//           }, e.progress = function(t, e) {
//             return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Ft(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
//           }, e.iteration = function(t, e) {
//             var n = this.duration() + this._rDelay;
//             return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? Lt(this._tTime, n) + 1 : 1
//           }, e.timeScale = function(t) {
//             if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
//             if (this._rts === t) return this;
//             var e = this.parent && this._ts ? Rt(this.parent._time, this) : this._tTime;
//             return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(Gt(-Math.abs(this._delay), this._tDur, e), !0), Dt(this),
//               function(t) {
//                 for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
//                 return t
//               }(this)
//           }, e.paused = function(t) {
//             return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ee(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== x && (this._tTime -= x)))), this) : this._ps
//           }, e.startTime = function(t) {
//             if (arguments.length) {
//               this._start = t;
//               var e = this.parent || this._dp;
//               return e && (e._sort || !this.parent) && $t(e, this, t - this._delay), this
//             }
//             return this._start
//           }, e.endTime = function(t) {
//             return this._start + (L(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
//           }, e.rawTime = function(t) {
//             var e = this.parent || this._dp;
//             return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Rt(e.rawTime(t), this) : this._tTime : this._tTime
//           }, e.revert = function(t) {
//             void 0 === t && (t = tt);
//             var e = i;
//             return i = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), i = e, this
//           }, e.globalTime = function(t) {
//             for (var e = this, n = arguments.length ? t : e.rawTime(); e;) n = e._start + n / (e._ts || 1), e = e._dp;
//             return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(t) : n
//           }, e.repeat = function(t) {
//             return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Ht(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
//           }, e.repeatDelay = function(t) {
//             if (arguments.length) {
//               var e = this._time;
//               return this._rDelay = t, Ht(this), e ? this.time(e) : this
//             }
//             return this._rDelay
//           }, e.yoyo = function(t) {
//             return arguments.length ? (this._yoyo = t, this) : this._yoyo
//           }, e.seek = function(t, e) {
//             return this.totalTime(Ut(this, t), L(e))
//           }, e.restart = function(t, e) {
//             return this.play().totalTime(t ? -this._delay : 0, L(e))
//           }, e.play = function(t, e) {
//             return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
//           }, e.reverse = function(t, e) {
//             return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
//           }, e.pause = function(t, e) {
//             return null != t && this.seek(t, e), this.paused(!0)
//           }, e.resume = function() {
//             return this.paused(!1)
//           }, e.reversed = function(t) {
//             return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
//           }, e.invalidate = function() {
//             return this._initted = this._act = 0, this._zTime = -1e-8, this
//           }, e.isActive = function() {
//             var t, e = this.parent || this._dp,
//               n = this._start;
//             return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - x))
//           }, e.eventCallback = function(t, e, n) {
//             var r = this.vars;
//             return arguments.length > 1 ? (e ? (r[t] = e, n && (r[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete r[t], this) : r[t]
//           }, e.then = function(t) {
//             var e = this;
//             return new Promise((function(n) {
//               var r = O(t) ? t : wt,
//                 i = function() {
//                   var t = e.then;
//                   e.then = null, O(r) && (r = r(e)) && (r.then || r === e) && (e.then = t), n(r), e.then = t
//                 };
//               e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? i() : e._prom = i
//             }))
//           }, e.kill = function() {
//             he(this)
//           }, t
//         }();
//       xt(Ie.prototype, {
//         _time: 0,
//         _start: 0,
//         _end: 0,
//         _tTime: 0,
//         _tDur: 0,
//         _dirty: 0,
//         _repeat: 0,
//         _yoyo: !1,
//         parent: null,
//         _initted: !1,
//         _rDelay: 0,
//         _ts: 1,
//         _dp: 0,
//         ratio: 0,
//         _zTime: -1e-8,
//         _prom: 0,
//         _ps: !1,
//         _rts: 1
//       });
//       var $e = function(n) {
//         function r(e, r) {
//           var i;
//           return void 0 === e && (e = {}), (i = n.call(this, e) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = L(e.sortChildren), s && $t(e.parent || s, t(i), r), e.reversed && i.reverse(), e.paused && i.paused(!0), e.scrollTrigger && Nt(t(i), e.scrollTrigger), i
//         }
//         e(r, n);
//         var o = r.prototype;
//         return o.to = function(t, e, n) {
//           return Yt(0, arguments, this), this
//         }, o.from = function(t, e, n) {
//           return Yt(1, arguments, this), this
//         }, o.fromTo = function(t, e, n, r) {
//           return Yt(2, arguments, this), this
//         }, o.set = function(t, e, n) {
//           return e.duration = 0, e.parent = this, Tt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Ge(t, e, Ut(this, n), 1), this
//         }, o.call = function(t, e, n) {
//           return $t(this, Ge.delayedCall(0, t, e), n)
//         }, o.staggerTo = function(t, e, n, r, i, o, s) {
//           return n.duration = e, n.stagger = n.stagger || r, n.onComplete = o, n.onCompleteParams = s, n.parent = this, new Ge(t, n, Ut(this, i)), this
//         }, o.staggerFrom = function(t, e, n, r, i, o, s) {
//           return n.runBackwards = 1, Tt(n).immediateRender = L(n.immediateRender), this.staggerTo(t, e, n, r, i, o, s)
//         }, o.staggerFromTo = function(t, e, n, r, i, o, s, a) {
//           return r.startAt = n, Tt(r).immediateRender = L(r.immediateRender), this.staggerTo(t, e, r, i, o, s, a)
//         }, o.render = function(t, e, n) {
//           var r, o, a, u, c, l, h, f, d, p, v, m, g = this._time,
//             y = this._dirty ? this.totalDuration() : this._tDur,
//             _ = this._dur,
//             w = t <= 0 ? 0 : pt(t),
//             b = this._zTime < 0 != t < 0 && (this._initted || !_);
//           if (this !== s && w > y && t >= 0 && (w = y), w !== this._tTime || n || b) {
//             if (g !== this._time && _ && (w += this._time - g, t += this._time - g), r = w, d = this._start, l = !(f = this._ts), b && (_ || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
//               if (v = this._yoyo, c = _ + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * c + t, e, n);
//               if (r = pt(w % c), w === y ? (u = this._repeat, r = _) : ((u = ~~(w / c)) && u === w / c && (r = _, u--), r > _ && (r = _)), p = Lt(this._tTime, c), !g && this._tTime && p !== u && this._tTime - p * c - this._dur <= 0 && (p = u), v && 1 & u && (r = _ - r, m = 1), u !== p && !this._lock) {
//                 var k = v && 1 & p,
//                   E = k === (v && 1 & u);
//                 if (u < p && (k = !k), g = k ? 0 : w % _ ? _ : w, this._lock = 1, this.render(g || (m ? 0 : pt(u * c)), e, !_)._lock = 0, this._tTime = w, !e && this.parent && le(this, "onRepeat"), this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1), g && g !== this._time || l !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
//                 if (_ = this._dur, y = this._tDur, E && (this._lock = 2, g = k ? _ : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !m && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
//                 Se(this, m)
//               }
//             }
//             if (this._hasPause && !this._forcing && this._lock < 2 && (h = function(t, e, n) {
//                 var r;
//                 if (n > e)
//                   for (r = t._first; r && r._start <= n;) {
//                     if ("isPause" === r.data && r._start > e) return r;
//                     r = r._next
//                   } else
//                     for (r = t._last; r && r._start >= n;) {
//                       if ("isPause" === r.data && r._start < e) return r;
//                       r = r._prev
//                     }
//               }(this, pt(g), pt(r)), h && (w -= r - (r = h._start))), this._tTime = w, this._time = r, this._act = !f, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), !g && r && !e && !u && (le(this, "onStart"), this._tTime !== w)) return this;
//             if (r >= g && t >= 0)
//               for (o = this._first; o;) {
//                 if (a = o._next, (o._act || r >= o._start) && o._ts && h !== o) {
//                   if (o.parent !== this) return this.render(t, e, n);
//                   if (o.render(o._ts > 0 ? (r - o._start) * o._ts : (o._dirty ? o.totalDuration() : o._tDur) + (r - o._start) * o._ts, e, n), r !== this._time || !this._ts && !l) {
//                     h = 0, a && (w += this._zTime = -1e-8);
//                     break
//                   }
//                 }
//                 o = a
//               } else {
//                 o = this._last;
//                 for (var T = t < 0 ? t : r; o;) {
//                   if (a = o._prev, (o._act || T <= o._end) && o._ts && h !== o) {
//                     if (o.parent !== this) return this.render(t, e, n);
//                     if (o.render(o._ts > 0 ? (T - o._start) * o._ts : (o._dirty ? o.totalDuration() : o._tDur) + (T - o._start) * o._ts, e, n || i && (o._initted || o._startAt)), r !== this._time || !this._ts && !l) {
//                       h = 0, a && (w += this._zTime = T ? -1e-8 : x);
//                       break
//                     }
//                   }
//                   o = a
//                 }
//               }
//             if (h && !e && (this.pause(), h.render(r >= g ? 0 : -1e-8)._zTime = r >= g ? 1 : -1, this._ts)) return this._start = d, Dt(this), this.render(t, e, n);
//             this._onUpdate && !e && le(this, "onUpdate", !0), (w === y && this._tTime >= this.totalDuration() || !w && g) && (d !== this._start && Math.abs(f) === Math.abs(this._ts) || this._lock || ((t || !_) && (w === y && this._ts > 0 || !w && this._ts < 0) && At(this, 1), e || t < 0 && !g || !w && !g && y || (le(this, w === y && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(w < y && this.timeScale() > 0) && this._prom())))
//           }
//           return this
//         }, o.add = function(t, e) {
//           var n = this;
//           if (S(e) || (e = Ut(this, e, t)), !(t instanceof Ie)) {
//             if (I(t)) return t.forEach((function(t) {
//               return n.add(t, e)
//             })), this;
//             if (A(t)) return this.addLabel(t, e);
//             if (!O(t)) return this;
//             t = Ge.delayedCall(0, t)
//           }
//           return this !== t ? $t(this, t, e) : this
//         }, o.getChildren = function(t, e, n, r) {
//           void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === r && (r = -w);
//           for (var i = [], o = this._first; o;) o._start >= r && (o instanceof Ge ? e && i.push(o) : (n && i.push(o), t && i.push.apply(i, o.getChildren(!0, e, n)))), o = o._next;
//           return i
//         }, o.getById = function(t) {
//           for (var e = this.getChildren(1, 1, 1), n = e.length; n--;)
//             if (e[n].vars.id === t) return e[n]
//         }, o.remove = function(t) {
//           return A(t) ? this.removeLabel(t) : O(t) ? this.killTweensOf(t) : (Mt(this, t), t === this._recent && (this._recent = this._last), Ot(this))
//         }, o.totalTime = function(t, e) {
//           return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = pt(ke.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), n.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
//         }, o.addLabel = function(t, e) {
//           return this.labels[t] = Ut(this, e), this
//         }, o.removeLabel = function(t) {
//           return delete this.labels[t], this
//         }, o.addPause = function(t, e, n) {
//           var r = Ge.delayedCall(0, e || Q, n);
//           return r.data = "isPause", this._hasPause = 1, $t(this, r, Ut(this, t))
//         }, o.removePause = function(t) {
//           var e = this._first;
//           for (t = Ut(this, t); e;) e._start === t && "isPause" === e.data && At(e), e = e._next
//         }, o.killTweensOf = function(t, e, n) {
//           for (var r = this.getTweensOf(t, n), i = r.length; i--;) Ne !== r[i] && r[i].kill(t, e);
//           return this
//         }, o.getTweensOf = function(t, e) {
//           for (var n, r = [], i = Zt(t), o = this._first, s = S(e); o;) o instanceof Ge ? mt(o._targets, i) && (s ? (!Ne || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && r.push(o) : (n = o.getTweensOf(i, e)).length && r.push.apply(r, n), o = o._next;
//           return r
//         }, o.tweenTo = function(t, e) {
//           e = e || {};
//           var n, r = this,
//             i = Ut(r, t),
//             o = e,
//             s = o.startAt,
//             a = o.onStart,
//             u = o.onStartParams,
//             c = o.immediateRender,
//             l = Ge.to(r, xt({
//               ease: e.ease || "none",
//               lazy: !1,
//               immediateRender: !1,
//               time: i,
//               overwrite: "auto",
//               duration: e.duration || Math.abs((i - (s && "time" in s ? s.time : r._time)) / r.timeScale()) || x,
//               onStart: function() {
//                 if (r.pause(), !n) {
//                   var t = e.duration || Math.abs((i - (s && "time" in s ? s.time : r._time)) / r.timeScale());
//                   l._dur !== t && Wt(l, t, 0, 1).render(l._time, !0, !0), n = 1
//                 }
//                 a && a.apply(l, u || [])
//               }
//             }, e));
//           return c ? l.render(0) : l
//         }, o.tweenFromTo = function(t, e, n) {
//           return this.tweenTo(e, xt({
//             startAt: {
//               time: Ut(this, t)
//             }
//           }, n))
//         }, o.recent = function() {
//           return this._recent
//         }, o.nextLabel = function(t) {
//           return void 0 === t && (t = this._time), ce(this, Ut(this, t))
//         }, o.previousLabel = function(t) {
//           return void 0 === t && (t = this._time), ce(this, Ut(this, t), 1)
//         }, o.currentLabel = function(t) {
//           return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + x)
//         }, o.shiftChildren = function(t, e, n) {
//           void 0 === n && (n = 0);
//           for (var r, i = this._first, o = this.labels; i;) i._start >= n && (i._start += t, i._end += t), i = i._next;
//           if (e)
//             for (r in o) o[r] >= n && (o[r] += t);
//           return Ot(this)
//         }, o.invalidate = function(t) {
//           var e = this._first;
//           for (this._lock = 0; e;) e.invalidate(t), e = e._next;
//           return n.prototype.invalidate.call(this, t)
//         }, o.clear = function(t) {
//           void 0 === t && (t = !0);
//           for (var e, n = this._first; n;) e = n._next, this.remove(n), n = e;
//           return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Ot(this)
//         }, o.totalDuration = function(t) {
//           var e, n, r, i = 0,
//             o = this,
//             a = o._last,
//             u = w;
//           if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
//           if (o._dirty) {
//             for (r = o.parent; a;) e = a._prev, a._dirty && a.totalDuration(), (n = a._start) > u && o._sort && a._ts && !o._lock ? (o._lock = 1, $t(o, a, n - a._delay, 1)._lock = 0) : u = n, n < 0 && a._ts && (i -= n, (!r && !o._dp || r && r.smoothChildTiming) && (o._start += n / o._ts, o._time -= n, o._tTime -= n), o.shiftChildren(-n, !1, -Infinity), u = 0), a._end > i && a._ts && (i = a._end), a = e;
//             Wt(o, o === s && o._time > i ? o._time : i, 1, 1), o._dirty = 0
//           }
//           return o._tDur
//         }, r.updateRoot = function(t) {
//           if (s._ts && (yt(s, Rt(t, s)), h = ke.frame), ke.frame >= st) {
//             st += y.autoSleep || 120;
//             var e = s._first;
//             if ((!e || !e._ts) && y.autoSleep && ke._listeners.length < 2) {
//               for (; e && !e._ts;) e = e._next;
//               e || ke.sleep()
//             }
//           }
//         }, r
//       }(Ie);
//       xt($e.prototype, {
//         _lock: 0,
//         _hasPause: 0,
//         _forcing: 0
//       });
//       var Ne, ze, qe = function(t, e, n, r, i, o, s) {
//           var a, u, c, l, h, f, d, p, v = new ln(this._pt, t, e, 0, 1, rn, null, i),
//             m = 0,
//             g = 0;
//           for (v.b = n, v.e = r, n += "", (d = ~(r += "").indexOf("random(")) && (r = ae(r)), o && (o(p = [n, r], t, e), n = p[0], r = p[1]), u = n.match(q) || []; a = q.exec(r);) l = a[0], h = r.substring(m, a.index), c ? c = (c + 1) % 5 : "rgba(" === h.substr(-5) && (c = 1), l !== u[g++] && (f = parseFloat(u[g - 1]) || 0, v._pt = {
//             _next: v._pt,
//             p: h || 1 === g ? h : ",",
//             s: f,
//             c: "=" === l.charAt(1) ? vt(f, l) - f : parseFloat(l) - f,
//             m: c && c < 4 ? Math.round : 0
//           }, m = q.lastIndex);
//           return v.c = m < r.length ? r.substring(m, r.length) : "", v.fp = s, (B.test(r) || d) && (v.e = 0), this._pt = v, v
//         },
//         Be = function(t, e, n, r, i, o, s, a, u, c) {
//           O(r) && (r = r(i || 0, t, o));
//           var l, h = t[e],
//             f = "get" !== n ? n : O(h) ? u ? t[e.indexOf("set") || !O(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : h,
//             d = O(h) ? u ? Je : Qe : Ke;
//           if (A(r) && (~r.indexOf("random(") && (r = ae(r)), "=" === r.charAt(1) && ((l = vt(f, r) + (Kt(f) || 0)) || 0 === l) && (r = l)), !c || f !== r || ze) return isNaN(f * r) || "" === r ? (!h && !(e in t) && X(e, r), qe.call(this, t, e, f, r, d, a || y.stringFilter, u)) : (l = new ln(this._pt, t, e, +f || 0, r - (f || 0), "boolean" == typeof h ? nn : en, 0, d), u && (l.fp = u), s && l.modifier(s, this, t), this._pt = l)
//         },
//         We = function(t, e, n, r, i, o) {
//           var s, a, u, c;
//           if (it[t] && !1 !== (s = new it[t]).init(i, s.rawVars ? e[t] : function(t, e, n, r, i) {
//               if (O(t) && (t = Ue(t, i, e, n, r)), !F(t) || t.style && t.nodeType || I(t) || j(t)) return A(t) ? Ue(t, i, e, n, r) : t;
//               var o, s = {};
//               for (o in t) s[o] = Ue(t[o], i, e, n, r);
//               return s
//             }(e[t], r, i, o, n), n, r, o) && (n._pt = a = new ln(n._pt, i, t, 0, 1, s.render, s, 0, s.priority), n !== f))
//             for (u = n._ptLookup[n._targets.indexOf(i)], c = s._props.length; c--;) u[s._props[c]] = a;
//           return s
//         },
//         He = function t(e, n, o) {
//           var a, u, c, l, h, f, d, p, v, m, g, y, b, k = e.vars,
//             E = k.ease,
//             T = k.startAt,
//             P = k.immediateRender,
//             M = k.lazy,
//             A = k.onUpdate,
//             O = k.onUpdateParams,
//             S = k.callbackScope,
//             C = k.runBackwards,
//             F = k.yoyoEase,
//             R = k.keyframes,
//             D = k.autoRevert,
//             j = e._dur,
//             I = e._startAt,
//             $ = e._targets,
//             N = e.parent,
//             z = N && "nested" === N.data ? N.vars.targets : $,
//             q = "auto" === e._overwrite && !r,
//             B = e.timeline;
//           if (B && (!R || !E) && (E = "none"), e._ease = Ce(E, _.ease), e._yEase = F ? Oe(Ce(!0 === F ? E : F, _.ease)) : 0, F && e._yoyo && !e._repeat && (F = e._yEase, e._yEase = e._ease, e._ease = F), e._from = !B && !!k.runBackwards, !B || R && !k.stagger) {
//             if (y = (p = $[0] ? lt($[0]).harness : 0) && k[p.prop], a = Et(k, et), I && (I._zTime < 0 && I.progress(1), n < 0 && C && P && !D ? I.render(-1, !0) : I.revert(C && j ? Z : J), I._lazy = 0), T) {
//               if (At(e._startAt = Ge.set($, xt({
//                   data: "isStart",
//                   overwrite: !1,
//                   parent: N,
//                   immediateRender: !0,
//                   lazy: !I && L(M),
//                   startAt: null,
//                   delay: 0,
//                   onUpdate: A,
//                   onUpdateParams: O,
//                   callbackScope: S,
//                   stagger: 0
//                 }, T))), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (i || !P && !D) && e._startAt.revert(Z), P && j && n <= 0 && o <= 0) return void(n && (e._zTime = n))
//             } else if (C && j && !I)
//               if (n && (P = !1), c = xt({
//                   overwrite: !1,
//                   data: "isFromStart",
//                   lazy: P && !I && L(M),
//                   immediateRender: P,
//                   stagger: 0,
//                   parent: N
//                 }, a), y && (c[p.prop] = y), At(e._startAt = Ge.set($, c)), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (i ? e._startAt.revert(Z) : e._startAt.render(-1, !0)), e._zTime = n, P) {
//                 if (!n) return
//               } else t(e._startAt, x, x);
//             for (e._pt = e._ptCache = 0, M = j && L(M) || M && !j, u = 0; u < $.length; u++) {
//               if (d = (h = $[u])._gsap || ct($)[u]._gsap, e._ptLookup[u] = m = {}, rt[d.id] && nt.length && gt(), g = z === $ ? u : z.indexOf(h), p && !1 !== (v = new p).init(h, y || a, e, g, z) && (e._pt = l = new ln(e._pt, h, v.name, 0, 1, v.render, v, 0, v.priority), v._props.forEach((function(t) {
//                   m[t] = l
//                 })), v.priority && (f = 1)), !p || y)
//                 for (c in a) it[c] && (v = We(c, a, e, g, h, z)) ? v.priority && (f = 1) : m[c] = l = Be.call(e, h, c, "get", a[c], g, z, 0, k.stringFilter);
//               e._op && e._op[u] && e.kill(h, e._op[u]), q && e._pt && (Ne = e, s.killTweensOf(h, m, e.globalTime(n)), b = !e.parent, Ne = 0), e._pt && M && (rt[d.id] = 1)
//             }
//             f && cn(e), e._onInit && e._onInit(e)
//           }
//           e._onUpdate = A, e._initted = (!e._op || e._pt) && !b, R && n <= 0 && B.render(w, !0, !0)
//         },
//         Ve = function(t, e, n, r) {
//           var i, o, s = e.ease || r || "power1.inOut";
//           if (I(e)) o = n[t] || (n[t] = []), e.forEach((function(t, n) {
//             return o.push({
//               t: n / (e.length - 1) * 100,
//               v: t,
//               e: s
//             })
//           }));
//           else
//             for (i in e) o = n[i] || (n[i] = []), "ease" === i || o.push({
//               t: parseFloat(t),
//               v: e[i],
//               e: s
//             })
//         },
//         Ue = function(t, e, n, r, i) {
//           return O(t) ? t.call(e, n, r, i) : A(t) && ~t.indexOf("random(") ? ae(t) : t
//         },
//         Ye = ut + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
//         Xe = {};
//       ft(Ye + ",id,stagger,delay,duration,paused,scrollTrigger", (function(t) {
//         return Xe[t] = 1
//       }));
//       var Ge = function(n) {
//         function o(e, i, o, a) {
//           var u;
//           "number" == typeof i && (o.duration = i, i = o, o = null);
//           var c, l, h, f, d, p, v, m, g = (u = n.call(this, a ? i : Tt(i)) || this).vars,
//             _ = g.duration,
//             w = g.delay,
//             x = g.immediateRender,
//             b = g.stagger,
//             k = g.overwrite,
//             E = g.keyframes,
//             T = g.defaults,
//             P = g.scrollTrigger,
//             M = g.yoyoEase,
//             A = i.parent || s,
//             O = (I(e) || j(e) ? S(e[0]) : "length" in i) ? [e] : Zt(e);
//           if (u._targets = O.length ? ct(O) : G("GSAP target " + e + " not found. https://greensock.com", !y.nullTargetWarn) || [], u._ptLookup = [], u._overwrite = k, E || b || D(_) || D(w)) {
//             if (i = u.vars, (c = u.timeline = new $e({
//                 data: "nested",
//                 defaults: T || {},
//                 targets: A && "nested" === A.data ? A.vars.targets : O
//               })).kill(), c.parent = c._dp = t(u), c._start = 0, b || D(_) || D(w)) {
//               if (f = O.length, v = b && ne(b), F(b))
//                 for (d in b) ~Ye.indexOf(d) && (m || (m = {}), m[d] = b[d]);
//               for (l = 0; l < f; l++)(h = Et(i, Xe)).stagger = 0, M && (h.yoyoEase = M), m && bt(h, m), p = O[l], h.duration = +Ue(_, t(u), l, p, O), h.delay = (+Ue(w, t(u), l, p, O) || 0) - u._delay, !b && 1 === f && h.delay && (u._delay = w = h.delay, u._start += w, h.delay = 0), c.to(p, h, v ? v(l, p, O) : 0), c._ease = Te.none;
//               c.duration() ? _ = w = 0 : u.timeline = 0
//             } else if (E) {
//               Tt(xt(c.vars.defaults, {
//                 ease: "none"
//               })), c._ease = Ce(E.ease || i.ease || "none");
//               var C, R, $, N = 0;
//               if (I(E)) E.forEach((function(t) {
//                 return c.to(O, t, ">")
//               })), c.duration();
//               else {
//                 for (d in h = {}, E) "ease" === d || "easeEach" === d || Ve(d, E[d], h, E.easeEach);
//                 for (d in h)
//                   for (C = h[d].sort((function(t, e) {
//                       return t.t - e.t
//                     })), N = 0, l = 0; l < C.length; l++)($ = {
//                     ease: (R = C[l]).e,
//                     duration: (R.t - (l ? C[l - 1].t : 0)) / 100 * _
//                   })[d] = R.v, c.to(O, $, N), N += $.duration;
//                 c.duration() < _ && c.to({}, {
//                   duration: _ - c.duration()
//                 })
//               }
//             }
//             _ || u.duration(_ = c.duration())
//           } else u.timeline = 0;
//           return !0 !== k || r || (Ne = t(u), s.killTweensOf(O), Ne = 0), $t(A, t(u), o), i.reversed && u.reverse(), i.paused && u.paused(!0), (x || !_ && !E && u._start === pt(A._time) && L(x) && Ct(t(u)) && "nested" !== A.data) && (u._tTime = -1e-8, u.render(Math.max(0, -w) || 0)), P && Nt(t(u), P), u
//         }
//         e(o, n);
//         var a = o.prototype;
//         return a.render = function(t, e, n) {
//           var r, o, s, a, u, c, l, h, f, d = this._time,
//             p = this._tDur,
//             v = this._dur,
//             m = t < 0,
//             g = t > p - x && !m ? p : t < x ? 0 : t;
//           if (v) {
//             if (g !== this._tTime || !t || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m) {
//               if (r = g, h = this.timeline, this._repeat) {
//                 if (a = v + this._rDelay, this._repeat < -1 && m) return this.totalTime(100 * a + t, e, n);
//                 if (r = pt(g % a), g === p ? (s = this._repeat, r = v) : ((s = ~~(g / a)) && s === g / a && (r = v, s--), r > v && (r = v)), (c = this._yoyo && 1 & s) && (f = this._yEase, r = v - r), u = Lt(this._tTime, a), r === d && !n && this._initted) return this._tTime = g, this;
//                 s !== u && (h && this._yEase && Se(h, c), !this.vars.repeatRefresh || c || this._lock || (this._lock = n = 1, this.render(pt(a * s), !0).invalidate()._lock = 0))
//               }
//               if (!this._initted) {
//                 if (zt(this, m ? t : r, n, e, g)) return this._tTime = 0, this;
//                 if (d !== this._time) return this;
//                 if (v !== this._dur) return this.render(t, e, n)
//               }
//               if (this._tTime = g, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (f || this._ease)(r / v), this._from && (this.ratio = l = 1 - l), r && !d && !e && !s && (le(this, "onStart"), this._tTime !== g)) return this;
//               for (o = this._pt; o;) o.r(l, o.d), o = o._next;
//               h && h.render(t < 0 ? t : !r && c ? -1e-8 : h._dur * h._ease(r / this._dur), e, n) || this._startAt && (this._zTime = t), this._onUpdate && !e && (m && St(this, t, 0, n), le(this, "onUpdate")), this._repeat && s !== u && this.vars.onRepeat && !e && this.parent && le(this, "onRepeat"), g !== this._tDur && g || this._tTime !== g || (m && !this._onUpdate && St(this, t, 0, !0), (t || !v) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && At(this, 1), e || m && !d || !(g || d || c) || (le(this, g === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < p && this.timeScale() > 0) && this._prom()))
//             }
//           } else ! function(t, e, n, r) {
//             var o, s, a, u = t.ratio,
//               c = e < 0 || !e && (!t._start && qt(t) && (t._initted || !Bt(t)) || (t._ts < 0 || t._dp._ts < 0) && !Bt(t)) ? 0 : 1,
//               l = t._rDelay,
//               h = 0;
//             if (l && t._repeat && (h = Gt(0, t._tDur, e), s = Lt(h, l), t._yoyo && 1 & s && (c = 1 - c), s !== Lt(t._tTime, l) && (u = 1 - c, t.vars.repeatRefresh && t._initted && t.invalidate())), c !== u || i || r || t._zTime === x || !e && t._zTime) {
//               if (!t._initted && zt(t, e, r, n, h)) return;
//               for (a = t._zTime, t._zTime = e || (n ? x : 0), n || (n = e && !a), t.ratio = c, t._from && (c = 1 - c), t._time = 0, t._tTime = h, o = t._pt; o;) o.r(c, o.d), o = o._next;
//               e < 0 && St(t, e, 0, !0), t._onUpdate && !n && le(t, "onUpdate"), h && t._repeat && !n && t.parent && le(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === c && (c && At(t, 1), n || i || (le(t, c ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
//             } else t._zTime || (t._zTime = e)
//           }(this, t, e, n);
//           return this
//         }, a.targets = function() {
//           return this._targets
//         }, a.invalidate = function(t) {
//           return (!t || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), n.prototype.invalidate.call(this, t)
//         }, a.resetTo = function(t, e, n, r) {
//           d || ke.wake(), this._ts || this.play();
//           var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
//           return this._initted || He(this, i),
//             function(t, e, n, r, i, o, s) {
//               var a, u, c, l, h = (t._pt && t._ptCache || (t._ptCache = {}))[e];
//               if (!h)
//                 for (h = t._ptCache[e] = [], c = t._ptLookup, l = t._targets.length; l--;) {
//                   if ((a = c[l][e]) && a.d && a.d._pt)
//                     for (a = a.d._pt; a && a.p !== e && a.fp !== e;) a = a._next;
//                   if (!a) return ze = 1, t.vars[e] = "+=0", He(t, s), ze = 0, 1;
//                   h.push(a)
//                 }
//               for (l = h.length; l--;)(a = (u = h[l])._pt || u).s = !r && 0 !== r || i ? a.s + (r || 0) + o * a.c : r, a.c = n - a.s, u.e && (u.e = dt(n) + Kt(u.e)), u.b && (u.b = a.s + Kt(u.b))
//             }(this, t, e, n, r, this._ease(i / this._dur), i) ? this.resetTo(t, e, n, r) : (jt(this, 0), this.parent || Pt(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
//         }, a.kill = function(t, e) {
//           if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? he(this) : this;
//           if (this.timeline) {
//             var n = this.timeline.totalDuration();
//             return this.timeline.killTweensOf(t, e, Ne && !0 !== Ne.vars.overwrite)._first || he(this), this.parent && n !== this.timeline.totalDuration() && Wt(this, this._dur * this.timeline._tDur / n, 0, 1), this
//           }
//           var r, i, o, s, a, u, c, l = this._targets,
//             h = t ? Zt(t) : l,
//             f = this._ptLookup,
//             d = this._pt;
//           if ((!e || "all" === e) && function(t, e) {
//               for (var n = t.length, r = n === e.length; r && n-- && t[n] === e[n];);
//               return n < 0
//             }(l, h)) return "all" === e && (this._pt = 0), he(this);
//           for (r = this._op = this._op || [], "all" !== e && (A(e) && (a = {}, ft(e, (function(t) {
//               return a[t] = 1
//             })), e = a), e = function(t, e) {
//               var n, r, i, o, s = t[0] ? lt(t[0]).harness : 0,
//                 a = s && s.aliases;
//               if (!a) return e;
//               for (r in n = bt({}, e), a)
//                 if (r in n)
//                   for (i = (o = a[r].split(",")).length; i--;) n[o[i]] = n[r];
//               return n
//             }(l, e)), c = l.length; c--;)
//             if (~h.indexOf(l[c]))
//               for (a in i = f[c], "all" === e ? (r[c] = e, s = i, o = {}) : (o = r[c] = r[c] || {}, s = e), s)(u = i && i[a]) && ("kill" in u.d && !0 !== u.d.kill(a) || Mt(this, u, "_pt"), delete i[a]), "all" !== o && (o[a] = 1);
//           return this._initted && !this._pt && d && he(this), this
//         }, o.to = function(t, e) {
//           return new o(t, e, arguments[2])
//         }, o.from = function(t, e) {
//           return Yt(1, arguments)
//         }, o.delayedCall = function(t, e, n, r) {
//           return new o(e, 0, {
//             immediateRender: !1,
//             lazy: !1,
//             overwrite: !1,
//             delay: t,
//             onComplete: e,
//             onReverseComplete: e,
//             onCompleteParams: n,
//             onReverseCompleteParams: n,
//             callbackScope: r
//           })
//         }, o.fromTo = function(t, e, n) {
//           return Yt(2, arguments)
//         }, o.set = function(t, e) {
//           return e.duration = 0, e.repeatDelay || (e.repeat = 0), new o(t, e)
//         }, o.killTweensOf = function(t, e, n) {
//           return s.killTweensOf(t, e, n)
//         }, o
//       }(Ie);
//       xt(Ge.prototype, {
//         _targets: [],
//         _lazy: 0,
//         _startAt: 0,
//         _op: 0,
//         _onInit: 0
//       }), ft("staggerTo,staggerFrom,staggerFromTo", (function(t) {
//         Ge[t] = function() {
//           var e = new $e,
//             n = Qt.call(arguments, 0);
//           return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
//         }
//       }));
//       var Ke = function(t, e, n) {
//           return t[e] = n
//         },
//         Qe = function(t, e, n) {
//           return t[e](n)
//         },
//         Je = function(t, e, n, r) {
//           return t[e](r.fp, n)
//         },
//         Ze = function(t, e, n) {
//           return t.setAttribute(e, n)
//         },
//         tn = function(t, e) {
//           return O(t[e]) ? Qe : C(t[e]) && t.setAttribute ? Ze : Ke
//         },
//         en = function(t, e) {
//           return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
//         },
//         nn = function(t, e) {
//           return e.set(e.t, e.p, !!(e.s + e.c * t), e)
//         },
//         rn = function(t, e) {
//           var n = e._pt,
//             r = "";
//           if (!t && e.b) r = e.b;
//           else if (1 === t && e.e) r = e.e;
//           else {
//             for (; n;) r = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + r, n = n._next;
//             r += e.c
//           }
//           e.set(e.t, e.p, r, e)
//         },
//         on = function(t, e) {
//           for (var n = e._pt; n;) n.r(t, n.d), n = n._next
//         },
//         sn = function(t, e, n, r) {
//           for (var i, o = this._pt; o;) i = o._next, o.p === r && o.modifier(t, e, n), o = i
//         },
//         an = function(t) {
//           for (var e, n, r = this._pt; r;) n = r._next, r.p === t && !r.op || r.op === t ? Mt(this, r, "_pt") : r.dep || (e = 1), r = n;
//           return !e
//         },
//         un = function(t, e, n, r) {
//           r.mSet(t, e, r.m.call(r.tween, n, r.mt), r)
//         },
//         cn = function(t) {
//           for (var e, n, r, i, o = t._pt; o;) {
//             for (e = o._next, n = r; n && n.pr > o.pr;) n = n._next;
//             (o._prev = n ? n._prev : i) ? o._prev._next = o: r = o, (o._next = n) ? n._prev = o : i = o, o = e
//           }
//           t._pt = r
//         },
//         ln = function() {
//           function t(t, e, n, r, i, o, s, a, u) {
//             this.t = e, this.s = r, this.c = i, this.p = n, this.r = o || en, this.d = s || this, this.set = a || Ke, this.pr = u || 0, this._next = t, t && (t._prev = this)
//           }
//           return t.prototype.modifier = function(t, e, n) {
//             this.mSet = this.mSet || this.set, this.set = un, this.m = t, this.mt = n, this.tween = e
//           }, t
//         }();
//       ft(ut + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
//         return et[t] = 1
//       })), V.TweenMax = V.TweenLite = Ge, V.TimelineLite = V.TimelineMax = $e, s = new $e({
//         sortChildren: !1,
//         defaults: _,
//         autoRemoveChildren: !0,
//         id: "root",
//         smoothChildTiming: !0
//       }), y.stringFilter = be;
//       var hn = [],
//         fn = {},
//         dn = [],
//         pn = 0,
//         vn = 0,
//         mn = function(t) {
//           return (fn[t] || dn).map((function(t) {
//             return t()
//           }))
//         },
//         gn = function() {
//           var t = Date.now(),
//             e = [];
//           t - pn > 2 && (mn("matchMediaInit"), hn.forEach((function(t) {
//             var n, r, i, o, s = t.queries,
//               u = t.conditions;
//             for (r in s)(n = a.matchMedia(s[r]).matches) && (i = 1), n !== u[r] && (u[r] = n, o = 1);
//             o && (t.revert(), i && e.push(t))
//           })), mn("matchMediaRevert"), e.forEach((function(t) {
//             return t.onMatch(t)
//           })), pn = t, mn("matchMedia"))
//         },
//         yn = function() {
//           function t(t, e) {
//             this.selector = e && te(e), this.data = [], this._r = [], this.isReverted = !1, this.id = vn++, t && this.add(t)
//           }
//           var e = t.prototype;
//           return e.add = function(t, e, n) {
//             O(t) && (n = e, e = t, t = O);
//             var r = this,
//               i = function() {
//                 var t, i = o,
//                   s = r.selector;
//                 return i && i !== r && i.data.push(r), n && (r.selector = te(n)), o = r, t = e.apply(r, arguments), O(t) && r._r.push(t), o = i, r.selector = s, r.isReverted = !1, t
//               };
//             return r.last = i, t === O ? i(r) : t ? r[t] = i : i
//           }, e.ignore = function(t) {
//             var e = o;
//             o = null, t(this), o = e
//           }, e.getTweens = function() {
//             var e = [];
//             return this.data.forEach((function(n) {
//               return n instanceof t ? e.push.apply(e, n.getTweens()) : n instanceof Ge && !(n.parent && "nested" === n.parent.data) && e.push(n)
//             })), e
//           }, e.clear = function() {
//             this._r.length = this.data.length = 0
//           }, e.kill = function(t, e) {
//             var n = this;
//             if (t) {
//               var r = this.getTweens();
//               this.data.forEach((function(t) {
//                 "isFlip" === t.data && (t.revert(), t.getChildren(!0, !0, !1).forEach((function(t) {
//                   return r.splice(r.indexOf(t), 1)
//                 })))
//               })), r.map((function(t) {
//                 return {
//                   g: t.globalTime(0),
//                   t
//                 }
//               })).sort((function(t, e) {
//                 return e.g - t.g || -1 / 0
//               })).forEach((function(e) {
//                 return e.t.revert(t)
//               })), this.data.forEach((function(e) {
//                 return !(e instanceof Ge) && e.revert && e.revert(t)
//               })), this._r.forEach((function(e) {
//                 return e(t, n)
//               })), this.isReverted = !0
//             } else this.data.forEach((function(t) {
//               return t.kill && t.kill()
//             }));
//             if (this.clear(), e)
//               for (var i = hn.length; i--;) hn[i].id === this.id && hn.splice(i, 1)
//           }, e.revert = function(t) {
//             this.kill(t || {})
//           }, t
//         }(),
//         _n = function() {
//           function t(t) {
//             this.contexts = [], this.scope = t
//           }
//           var e = t.prototype;
//           return e.add = function(t, e, n) {
//             F(t) || (t = {
//               matches: t
//             });
//             var r, i, s, u = new yn(0, n || this.scope),
//               c = u.conditions = {};
//             for (i in o && !u.selector && (u.selector = o.selector), this.contexts.push(u), e = u.add("onMatch", e), u.queries = t, t) "all" === i ? s = 1 : (r = a.matchMedia(t[i])) && (hn.indexOf(u) < 0 && hn.push(u), (c[i] = r.matches) && (s = 1), r.addListener ? r.addListener(gn) : r.addEventListener("change", gn));
//             return s && e(u), this
//           }, e.revert = function(t) {
//             this.kill(t || {})
//           }, e.kill = function(t) {
//             this.contexts.forEach((function(e) {
//               return e.kill(t, !0)
//             }))
//           }, t
//         }(),
//         wn = {
//           registerPlugin: function() {
//             for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
//             e.forEach((function(t) {
//               return de(t)
//             }))
//           },
//           timeline: function(t) {
//             return new $e(t)
//           },
//           getTweensOf: function(t, e) {
//             return s.getTweensOf(t, e)
//           },
//           getProperty: function(t, e, n, r) {
//             A(t) && (t = Zt(t)[0]);
//             var i = lt(t || {}).get,
//               o = n ? wt : _t;
//             return "native" === n && (n = ""), t ? e ? o((it[e] && it[e].get || i)(t, e, n, r)) : function(e, n, r) {
//               return o((it[e] && it[e].get || i)(t, e, n, r))
//             } : t
//           },
//           quickSetter: function(t, e, n) {
//             if ((t = Zt(t)).length > 1) {
//               var r = t.map((function(t) {
//                   return kn.quickSetter(t, e, n)
//                 })),
//                 i = r.length;
//               return function(t) {
//                 for (var e = i; e--;) r[e](t)
//               }
//             }
//             t = t[0] || {};
//             var o = it[e],
//               s = lt(t),
//               a = s.harness && (s.harness.aliases || {})[e] || e,
//               u = o ? function(e) {
//                 var r = new o;
//                 f._pt = 0, r.init(t, n ? e + n : e, f, 0, [t]), r.render(1, r), f._pt && on(1, f)
//               } : s.set(t, a);
//             return o ? u : function(e) {
//               return u(t, a, n ? e + n : e, s, 1)
//             }
//           },
//           quickTo: function(t, e, n) {
//             var r, i = kn.to(t, bt(((r = {})[e] = "+=0.1", r.paused = !0, r), n || {})),
//               o = function(t, n, r) {
//                 return i.resetTo(e, t, n, r)
//               };
//             return o.tween = i, o
//           },
//           isTweening: function(t) {
//             return s.getTweensOf(t, !0).length > 0
//           },
//           defaults: function(t) {
//             return t && t.ease && (t.ease = Ce(t.ease, _.ease)), kt(_, t || {})
//           },
//           config: function(t) {
//             return kt(y, t || {})
//           },
//           registerEffect: function(t) {
//             var e = t.name,
//               n = t.effect,
//               r = t.plugins,
//               i = t.defaults,
//               o = t.extendTimeline;
//             (r || "").split(",").forEach((function(t) {
//               return t && !it[t] && !V[t] && G(e + " effect requires " + t + " plugin.")
//             })), ot[e] = function(t, e, r) {
//               return n(Zt(t), xt(e || {}, i), r)
//             }, o && ($e.prototype[e] = function(t, n, r) {
//               return this.add(ot[e](t, F(n) ? n : (r = n) && {}, this), r)
//             })
//           },
//           registerEase: function(t, e) {
//             Te[t] = Ce(e)
//           },
//           parseEase: function(t, e) {
//             return arguments.length ? Ce(t, e) : Te
//           },
//           getById: function(t) {
//             return s.getById(t)
//           },
//           exportRoot: function(t, e) {
//             void 0 === t && (t = {});
//             var n, r, i = new $e(t);
//             for (i.smoothChildTiming = L(t.smoothChildTiming), s.remove(i), i._dp = 0, i._time = i._tTime = s._time, n = s._first; n;) r = n._next, !e && !n._dur && n instanceof Ge && n.vars.onComplete === n._targets[0] || $t(i, n, n._start - n._delay), n = r;
//             return $t(s, i, 0), i
//           },
//           context: function(t, e) {
//             return t ? new yn(t, e) : o
//           },
//           matchMedia: function(t) {
//             return new _n(t)
//           },
//           matchMediaRefresh: function() {
//             return hn.forEach((function(t) {
//               var e, n, r = t.conditions;
//               for (n in r) r[n] && (r[n] = !1, e = 1);
//               e && t.revert()
//             })) || gn()
//           },
//           addEventListener: function(t, e) {
//             var n = fn[t] || (fn[t] = []);
//             ~n.indexOf(e) || n.push(e)
//           },
//           removeEventListener: function(t, e) {
//             var n = fn[t],
//               r = n && n.indexOf(e);
//             r >= 0 && n.splice(r, 1)
//           },
//           utils: {
//             wrap: function t(e, n, r) {
//               var i = n - e;
//               return I(e) ? se(e, t(0, e.length), n) : Xt(r, (function(t) {
//                 return (i + (t - e) % i) % i + e
//               }))
//             },
//             wrapYoyo: function t(e, n, r) {
//               var i = n - e,
//                 o = 2 * i;
//               return I(e) ? se(e, t(0, e.length - 1), n) : Xt(r, (function(t) {
//                 return e + ((t = (o + (t - e) % o) % o || 0) > i ? o - t : t)
//               }))
//             },
//             distribute: ne,
//             random: oe,
//             snap: ie,
//             normalize: function(t, e, n) {
//               return ue(t, e, 0, 1, n)
//             },
//             getUnit: Kt,
//             clamp: function(t, e, n) {
//               return Xt(n, (function(n) {
//                 return Gt(t, e, n)
//               }))
//             },
//             splitColor: ge,
//             toArray: Zt,
//             selector: te,
//             mapRange: ue,
//             pipe: function() {
//               for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
//               return function(t) {
//                 return e.reduce((function(t, e) {
//                   return e(t)
//                 }), t)
//               }
//             },
//             unitize: function(t, e) {
//               return function(n) {
//                 return t(parseFloat(n)) + (e || Kt(n))
//               }
//             },
//             interpolate: function t(e, n, r, i) {
//               var o = isNaN(e + n) ? 0 : function(t) {
//                 return (1 - t) * e + t * n
//               };
//               if (!o) {
//                 var s, a, u, c, l, h = A(e),
//                   f = {};
//                 if (!0 === r && (i = 1) && (r = null), h) e = {
//                   p: e
//                 }, n = {
//                   p: n
//                 };
//                 else if (I(e) && !I(n)) {
//                   for (u = [], c = e.length, l = c - 2, a = 1; a < c; a++) u.push(t(e[a - 1], e[a]));
//                   c--, o = function(t) {
//                     t *= c;
//                     var e = Math.min(l, ~~t);
//                     return u[e](t - e)
//                   }, r = n
//                 } else i || (e = bt(I(e) ? [] : {}, e));
//                 if (!u) {
//                   for (s in n) Be.call(f, e, s, "get", n[s]);
//                   o = function(t) {
//                     return on(t, f) || (h ? e.p : e)
//                   }
//                 }
//               }
//               return Xt(r, o)
//             },
//             shuffle: ee
//           },
//           install: Y,
//           effects: ot,
//           ticker: ke,
//           updateRoot: $e.updateRoot,
//           plugins: it,
//           globalTimeline: s,
//           core: {
//             PropTween: ln,
//             globals: K,
//             Tween: Ge,
//             Timeline: $e,
//             Animation: Ie,
//             getCache: lt,
//             _removeLinkedListItem: Mt,
//             reverting: function() {
//               return i
//             },
//             context: function(t) {
//               return t && o && (o.data.push(t), t._ctx = o), o
//             },
//             suppressOverwrites: function(t) {
//               return r = t
//             }
//           }
//         };
//       ft("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
//         return wn[t] = Ge[t]
//       })), ke.add($e.updateRoot), f = wn.to({}, {
//         duration: 0
//       });
//       var xn = function(t, e) {
//           for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e;) n = n._next;
//           return n
//         },
//         bn = function(t, e) {
//           return {
//             name: t,
//             rawVars: 1,
//             init: function(t, n, r) {
//               r._onInit = function(t) {
//                 var r, i;
//                 if (A(n) && (r = {}, ft(n, (function(t) {
//                     return r[t] = 1
//                   })), n = r), e) {
//                   for (i in r = {}, n) r[i] = e(n[i]);
//                   n = r
//                 }! function(t, e) {
//                   var n, r, i, o = t._targets;
//                   for (n in e)
//                     for (r = o.length; r--;)(i = t._ptLookup[r][n]) && (i = i.d) && (i._pt && (i = xn(i, n)), i && i.modifier && i.modifier(e[n], t, o[r], n))
//                 }(t, n)
//               }
//             }
//           }
//         },
//         kn = wn.registerPlugin({
//           name: "attr",
//           init: function(t, e, n, r, i) {
//             var o, s, a;
//             for (o in this.tween = n, e) a = t.getAttribute(o) || "", (s = this.add(t, "setAttribute", (a || 0) + "", e[o], r, i, 0, 0, o)).op = o, s.b = a, this._props.push(o)
//           },
//           render: function(t, e) {
//             for (var n = e._pt; n;) i ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), n = n._next
//           }
//         }, {
//           name: "endArray",
//           init: function(t, e) {
//             for (var n = e.length; n--;) this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1)
//           }
//         }, bn("roundProps", re), bn("modifiers"), bn("snap", ie)) || wn;
//       Ge.version = $e.version = kn.version = "3.12.2", l = 1, R() && Ee(), Te.Power0, Te.Power1, Te.Power2, Te.Power3, Te.Power4, Te.Linear, Te.Quad, Te.Cubic, Te.Quart, Te.Quint, Te.Strong, Te.Elastic, Te.Back, Te.SteppedEase, Te.Bounce, Te.Sine, Te.Expo, Te.Circ;
//       var En, Tn, Pn, Mn, An, On, Sn, Cn, Fn = {},
//         Ln = 180 / Math.PI,
//         Rn = Math.PI / 180,
//         Dn = Math.atan2,
//         jn = /([A-Z])/g,
//         In = /(left|right|width|margin|padding|x)/i,
//         $n = /[\s,\(]\S/,
//         Nn = {
//           autoAlpha: "opacity,visibility",
//           scale: "scaleX,scaleY",
//           alpha: "opacity"
//         },
//         zn = function(t, e) {
//           return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
//         },
//         qn = function(t, e) {
//           return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
//         },
//         Bn = function(t, e) {
//           return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
//         },
//         Wn = function(t, e) {
//           var n = e.s + e.c * t;
//           e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
//         },
//         Hn = function(t, e) {
//           return e.set(e.t, e.p, t ? e.e : e.b, e)
//         },
//         Vn = function(t, e) {
//           return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
//         },
//         Un = function(t, e, n) {
//           return t.style[e] = n
//         },
//         Yn = function(t, e, n) {
//           return t.style.setProperty(e, n)
//         },
//         Xn = function(t, e, n) {
//           return t._gsap[e] = n
//         },
//         Gn = function(t, e, n) {
//           return t._gsap.scaleX = t._gsap.scaleY = n
//         },
//         Kn = function(t, e, n, r, i) {
//           var o = t._gsap;
//           o.scaleX = o.scaleY = n, o.renderTransform(i, o)
//         },
//         Qn = function(t, e, n, r, i) {
//           var o = t._gsap;
//           o[e] = n, o.renderTransform(i, o)
//         },
//         Jn = "transform",
//         Zn = Jn + "Origin",
//         tr = function t(e, n) {
//           var r = this,
//             i = this.target,
//             o = i.style;
//           if (e in Fn && o) {
//             if (this.tfm = this.tfm || {}, "transform" === e) return Nn.transform.split(",").forEach((function(e) {
//               return t.call(r, e, n)
//             }));
//             if (~(e = Nn[e] || e).indexOf(",") ? e.split(",").forEach((function(t) {
//                 return r.tfm[t] = yr(i, t)
//               })) : this.tfm[e] = i._gsap.x ? i._gsap[e] : yr(i, e), this.props.indexOf(Jn) >= 0) return;
//             i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(Zn, n, "")), e = Jn
//           }(o || n) && this.props.push(e, n, o[e])
//         },
//         er = function(t) {
//           t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
//         },
//         nr = function() {
//           var t, e, n = this.props,
//             r = this.target,
//             i = r.style,
//             o = r._gsap;
//           for (t = 0; t < n.length; t += 3) n[t + 1] ? r[n[t]] = n[t + 2] : n[t + 2] ? i[n[t]] = n[t + 2] : i.removeProperty("--" === n[t].substr(0, 2) ? n[t] : n[t].replace(jn, "-$1").toLowerCase());
//           if (this.tfm) {
//             for (e in this.tfm) o[e] = this.tfm[e];
//             o.svg && (o.renderTransform(), r.setAttribute("data-svg-origin", this.svgo || "")), (t = Sn()) && t.isStart || i[Jn] || (er(i), o.uncache = 1)
//           }
//         },
//         rr = function(t, e) {
//           var n = {
//             target: t,
//             props: [],
//             revert: nr,
//             save: tr
//           };
//           return t._gsap || kn.core.getCache(t), e && e.split(",").forEach((function(t) {
//             return n.save(t)
//           })), n
//         },
//         ir = function(t, e) {
//           var n = Tn.createElementNS ? Tn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Tn.createElement(t);
//           return n.style ? n : Tn.createElement(t)
//         },
//         or = function t(e, n, r) {
//           var i = getComputedStyle(e);
//           return i[n] || i.getPropertyValue(n.replace(jn, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, ar(n) || n, 1) || ""
//         },
//         sr = "O,Moz,ms,Ms,Webkit".split(","),
//         ar = function(t, e, n) {
//           var r = (e || An).style,
//             i = 5;
//           if (t in r && !n) return t;
//           for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(sr[i] + t in r););
//           return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? sr[i] : "") + t
//         },
//         ur = function() {
//           "undefined" != typeof window && window.document && (En = window, Tn = En.document, Pn = Tn.documentElement, An = ir("div") || {
//             style: {}
//           }, ir("div"), Jn = ar(Jn), Zn = Jn + "Origin", An.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Cn = !!ar("perspective"), Sn = kn.core.reverting, Mn = 1)
//         },
//         cr = function t(e) {
//           var n, r = ir("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
//             i = this.parentNode,
//             o = this.nextSibling,
//             s = this.style.cssText;
//           if (Pn.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
//             n = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
//           } catch (t) {} else this._gsapBBox && (n = this._gsapBBox());
//           return i && (o ? i.insertBefore(this, o) : i.appendChild(this)), Pn.removeChild(r), this.style.cssText = s, n
//         },
//         lr = function(t, e) {
//           for (var n = e.length; n--;)
//             if (t.hasAttribute(e[n])) return t.getAttribute(e[n])
//         },
//         hr = function(t) {
//           var e;
//           try {
//             e = t.getBBox()
//           } catch (n) {
//             e = cr.call(t, !0)
//           }
//           return e && (e.width || e.height) || t.getBBox === cr || (e = cr.call(t, !0)), !e || e.width || e.x || e.y ? e : {
//             x: +lr(t, ["x", "cx", "x1"]) || 0,
//             y: +lr(t, ["y", "cy", "y1"]) || 0,
//             width: 0,
//             height: 0
//           }
//         },
//         fr = function(t) {
//           return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !hr(t))
//         },
//         dr = function(t, e) {
//           if (e) {
//             var n = t.style;
//             e in Fn && e !== Zn && (e = Jn), n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), n.removeProperty(e.replace(jn, "-$1").toLowerCase())) : n.removeAttribute(e)
//           }
//         },
//         pr = function(t, e, n, r, i, o) {
//           var s = new ln(t._pt, e, n, 0, 1, o ? Vn : Hn);
//           return t._pt = s, s.b = r, s.e = i, t._props.push(n), s
//         },
//         vr = {
//           deg: 1,
//           rad: 1,
//           turn: 1
//         },
//         mr = {
//           grid: 1,
//           flex: 1
//         },
//         gr = function t(e, n, r, i) {
//           var o, s, a, u, c = parseFloat(r) || 0,
//             l = (r + "").trim().substr((c + "").length) || "px",
//             h = An.style,
//             f = In.test(n),
//             d = "svg" === e.tagName.toLowerCase(),
//             p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
//             v = 100,
//             m = "px" === i,
//             g = "%" === i;
//           return i === l || !c || vr[i] || vr[l] ? c : ("px" !== l && !m && (c = t(e, n, r, "px")), u = e.getCTM && fr(e), !g && "%" !== l || !Fn[n] && !~n.indexOf("adius") ? (h[f ? "width" : "height"] = v + (m ? l : i), s = ~n.indexOf("adius") || "em" === i && e.appendChild && !d ? e : e.parentNode, u && (s = (e.ownerSVGElement || {}).parentNode), s && s !== Tn && s.appendChild || (s = Tn.body), (a = s._gsap) && g && a.width && f && a.time === ke.time && !a.uncache ? dt(c / a.width * v) : ((g || "%" === l) && !mr[or(s, "display")] && (h.position = or(e, "position")), s === e && (h.position = "static"), s.appendChild(An), o = An[p], s.removeChild(An), h.position = "absolute", f && g && ((a = lt(s)).time = ke.time, a.width = s[p]), dt(m ? o * c / v : o && c ? v / o * c : 0))) : (o = u ? e.getBBox()[f ? "width" : "height"] : e[p], dt(g ? c / o * v : c / 100 * o)))
//         },
//         yr = function(t, e, n, r) {
//           var i;
//           return Mn || ur(), e in Nn && "transform" !== e && ~(e = Nn[e]).indexOf(",") && (e = e.split(",")[0]), Fn[e] && "transform" !== e ? (i = Or(t, r), i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : Sr(or(t, Zn)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || r || ~(i + "").indexOf("calc(")) && (i = br[e] && br[e](t, e, n) || or(t, e) || ht(t, e) || ("opacity" === e ? 1 : 0)), n && !~(i + "").trim().indexOf(" ") ? gr(t, e, i, n) + n : i
//         },
//         _r = function(t, e, n, r) {
//           if (!n || "none" === n) {
//             var i = ar(e, t, 1),
//               o = i && or(t, i, 1);
//             o && o !== n ? (e = i, n = o) : "borderColor" === e && (n = or(t, "borderTopColor"))
//           }
//           var s, a, u, c, l, h, f, d, p, v, m, g = new ln(this._pt, t.style, e, 0, 1, rn),
//             _ = 0,
//             w = 0;
//           if (g.b = n, g.e = r, n += "", "auto" == (r += "") && (t.style[e] = r, r = or(t, e) || r, t.style[e] = n), be(s = [n, r]), r = s[1], u = (n = s[0]).match(z) || [], (r.match(z) || []).length) {
//             for (; a = z.exec(r);) f = a[0], p = r.substring(_, a.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), f !== (h = u[w++] || "") && (c = parseFloat(h) || 0, m = h.substr((c + "").length), "=" === f.charAt(1) && (f = vt(c, f) + m), d = parseFloat(f), v = f.substr((d + "").length), _ = z.lastIndex - v.length, v || (v = v || y.units[e] || m, _ === r.length && (r += v, g.e += v)), m !== v && (c = gr(t, e, h, v) || 0), g._pt = {
//               _next: g._pt,
//               p: p || 1 === w ? p : ",",
//               s: c,
//               c: d - c,
//               m: l && l < 4 || "zIndex" === e ? Math.round : 0
//             });
//             g.c = _ < r.length ? r.substring(_, r.length) : ""
//           } else g.r = "display" === e && "none" === r ? Vn : Hn;
//           return B.test(r) && (g.e = 0), this._pt = g, g
//         },
//         wr = {
//           top: "0%",
//           bottom: "100%",
//           left: "0%",
//           right: "100%",
//           center: "50%"
//         },
//         xr = function(t, e) {
//           if (e.tween && e.tween._time === e.tween._dur) {
//             var n, r, i, o = e.t,
//               s = o.style,
//               a = e.u,
//               u = o._gsap;
//             if ("all" === a || !0 === a) s.cssText = "", r = 1;
//             else
//               for (i = (a = a.split(",")).length; --i > -1;) n = a[i], Fn[n] && (r = 1, n = "transformOrigin" === n ? Zn : Jn), dr(o, n);
//             r && (dr(o, Jn), u && (u.svg && o.removeAttribute("transform"), Or(o, 1), u.uncache = 1, er(s)))
//           }
//         },
//         br = {
//           clearProps: function(t, e, n, r, i) {
//             if ("isFromStart" !== i.data) {
//               var o = t._pt = new ln(t._pt, e, n, 0, 0, xr);
//               return o.u = r, o.pr = -10, o.tween = i, t._props.push(n), 1
//             }
//           }
//         },
//         kr = [1, 0, 0, 1, 0, 0],
//         Er = {},
//         Tr = function(t) {
//           return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
//         },
//         Pr = function(t) {
//           var e = or(t, Jn);
//           return Tr(e) ? kr : e.substr(7).match(N).map(dt)
//         },
//         Mr = function(t, e) {
//           var n, r, i, o, s = t._gsap || lt(t),
//             a = t.style,
//             u = Pr(t);
//           return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? kr : u : (u !== kr || t.offsetParent || t === Pn || s.svg || (i = a.display, a.display = "block", (n = t.parentNode) && t.offsetParent || (o = 1, r = t.nextElementSibling, Pn.appendChild(t)), u = Pr(t), i ? a.display = i : dr(t, "display"), o && (r ? n.insertBefore(t, r) : n ? n.appendChild(t) : Pn.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
//         },
//         Ar = function(t, e, n, r, i, o) {
//           var s, a, u, c = t._gsap,
//             l = i || Mr(t, !0),
//             h = c.xOrigin || 0,
//             f = c.yOrigin || 0,
//             d = c.xOffset || 0,
//             p = c.yOffset || 0,
//             v = l[0],
//             m = l[1],
//             g = l[2],
//             y = l[3],
//             _ = l[4],
//             w = l[5],
//             x = e.split(" "),
//             b = parseFloat(x[0]) || 0,
//             k = parseFloat(x[1]) || 0;
//           n ? l !== kr && (a = v * y - m * g) && (u = b * (-m / a) + k * (v / a) - (v * w - m * _) / a, b = b * (y / a) + k * (-g / a) + (g * w - y * _) / a, k = u) : (b = (s = hr(t)).x + (~x[0].indexOf("%") ? b / 100 * s.width : b), k = s.y + (~(x[1] || x[0]).indexOf("%") ? k / 100 * s.height : k)), r || !1 !== r && c.smooth ? (_ = b - h, w = k - f, c.xOffset = d + (_ * v + w * g) - _, c.yOffset = p + (_ * m + w * y) - w) : c.xOffset = c.yOffset = 0, c.xOrigin = b, c.yOrigin = k, c.smooth = !!r, c.origin = e, c.originIsAbsolute = !!n, t.style[Zn] = "0px 0px", o && (pr(o, c, "xOrigin", h, b), pr(o, c, "yOrigin", f, k), pr(o, c, "xOffset", d, c.xOffset), pr(o, c, "yOffset", p, c.yOffset)), t.setAttribute("data-svg-origin", b + " " + k)
//         },
//         Or = function(t, e) {
//           var n = t._gsap || new je(t);
//           if ("x" in n && !e && !n.uncache) return n;
//           var r, i, o, s, a, u, c, l, h, f, d, p, v, m, g, _, w, x, b, k, E, T, P, M, A, O, S, C, F, L, R, D, j = t.style,
//             I = n.scaleX < 0,
//             $ = "px",
//             N = "deg",
//             z = getComputedStyle(t),
//             q = or(t, Zn) || "0";
//           return r = i = o = u = c = l = h = f = d = 0, s = a = 1, n.svg = !(!t.getCTM || !fr(t)), z.translate && ("none" === z.translate && "none" === z.scale && "none" === z.rotate || (j[Jn] = ("none" !== z.translate ? "translate3d(" + (z.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== z.rotate ? "rotate(" + z.rotate + ") " : "") + ("none" !== z.scale ? "scale(" + z.scale.split(" ").join(",") + ") " : "") + ("none" !== z[Jn] ? z[Jn] : "")), j.scale = j.rotate = j.translate = "none"), m = Mr(t, n.svg), n.svg && (n.uncache ? (A = t.getBBox(), q = n.xOrigin - A.x + "px " + (n.yOrigin - A.y) + "px", M = "") : M = !e && t.getAttribute("data-svg-origin"), Ar(t, M || q, !!M || n.originIsAbsolute, !1 !== n.smooth, m)), p = n.xOrigin || 0, v = n.yOrigin || 0, m !== kr && (x = m[0], b = m[1], k = m[2], E = m[3], r = T = m[4], i = P = m[5], 6 === m.length ? (s = Math.sqrt(x * x + b * b), a = Math.sqrt(E * E + k * k), u = x || b ? Dn(b, x) * Ln : 0, (h = k || E ? Dn(k, E) * Ln + u : 0) && (a *= Math.abs(Math.cos(h * Rn))), n.svg && (r -= p - (p * x + v * k), i -= v - (p * b + v * E))) : (D = m[6], L = m[7], S = m[8], C = m[9], F = m[10], R = m[11], r = m[12], i = m[13], o = m[14], c = (g = Dn(D, F)) * Ln, g && (M = T * (_ = Math.cos(-g)) + S * (w = Math.sin(-g)), A = P * _ + C * w, O = D * _ + F * w, S = T * -w + S * _, C = P * -w + C * _, F = D * -w + F * _, R = L * -w + R * _, T = M, P = A, D = O), l = (g = Dn(-k, F)) * Ln, g && (_ = Math.cos(-g), R = E * (w = Math.sin(-g)) + R * _, x = M = x * _ - S * w, b = A = b * _ - C * w, k = O = k * _ - F * w), u = (g = Dn(b, x)) * Ln, g && (M = x * (_ = Math.cos(g)) + b * (w = Math.sin(g)), A = T * _ + P * w, b = b * _ - x * w, P = P * _ - T * w, x = M, T = A), c && Math.abs(c) + Math.abs(u) > 359.9 && (c = u = 0, l = 180 - l), s = dt(Math.sqrt(x * x + b * b + k * k)), a = dt(Math.sqrt(P * P + D * D)), g = Dn(T, P), h = Math.abs(g) > 2e-4 ? g * Ln : 0, d = R ? 1 / (R < 0 ? -R : R) : 0), n.svg && (M = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !Tr(or(t, Jn)), M && t.setAttribute("transform", M))), Math.abs(h) > 90 && Math.abs(h) < 270 && (I ? (s *= -1, h += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (a *= -1, h += h <= 0 ? 180 : -180)), e = e || n.uncache, n.x = r - ((n.xPercent = r && (!e && n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + $, n.y = i - ((n.yPercent = i && (!e && n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + $, n.z = o + $, n.scaleX = dt(s), n.scaleY = dt(a), n.rotation = dt(u) + N, n.rotationX = dt(c) + N, n.rotationY = dt(l) + N, n.skewX = h + N, n.skewY = f + N, n.transformPerspective = d + $, (n.zOrigin = parseFloat(q.split(" ")[2]) || 0) && (j[Zn] = Sr(q)), n.xOffset = n.yOffset = 0, n.force3D = y.force3D, n.renderTransform = n.svg ? Ir : Cn ? jr : Fr, n.uncache = 0, n
//         },
//         Sr = function(t) {
//           return (t = t.split(" "))[0] + " " + t[1]
//         },
//         Cr = function(t, e, n) {
//           var r = Kt(e);
//           return dt(parseFloat(e) + parseFloat(gr(t, "x", n + "px", r))) + r
//         },
//         Fr = function(t, e) {
//           e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, jr(t, e)
//         },
//         Lr = "0deg",
//         Rr = "0px",
//         Dr = ") ",
//         jr = function(t, e) {
//           var n = e || this,
//             r = n.xPercent,
//             i = n.yPercent,
//             o = n.x,
//             s = n.y,
//             a = n.z,
//             u = n.rotation,
//             c = n.rotationY,
//             l = n.rotationX,
//             h = n.skewX,
//             f = n.skewY,
//             d = n.scaleX,
//             p = n.scaleY,
//             v = n.transformPerspective,
//             m = n.force3D,
//             g = n.target,
//             y = n.zOrigin,
//             _ = "",
//             w = "auto" === m && t && 1 !== t || !0 === m;
//           if (y && (l !== Lr || c !== Lr)) {
//             var x, b = parseFloat(c) * Rn,
//               k = Math.sin(b),
//               E = Math.cos(b);
//             b = parseFloat(l) * Rn, x = Math.cos(b), o = Cr(g, o, k * x * -y), s = Cr(g, s, -Math.sin(b) * -y), a = Cr(g, a, E * x * -y + y)
//           }
//           v !== Rr && (_ += "perspective(" + v + Dr), (r || i) && (_ += "translate(" + r + "%, " + i + "%) "), (w || o !== Rr || s !== Rr || a !== Rr) && (_ += a !== Rr || w ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + Dr), u !== Lr && (_ += "rotate(" + u + Dr), c !== Lr && (_ += "rotateY(" + c + Dr), l !== Lr && (_ += "rotateX(" + l + Dr), h === Lr && f === Lr || (_ += "skew(" + h + ", " + f + Dr), 1 === d && 1 === p || (_ += "scale(" + d + ", " + p + Dr), g.style[Jn] = _ || "translate(0, 0)"
//         },
//         Ir = function(t, e) {
//           var n, r, i, o, s, a = e || this,
//             u = a.xPercent,
//             c = a.yPercent,
//             l = a.x,
//             h = a.y,
//             f = a.rotation,
//             d = a.skewX,
//             p = a.skewY,
//             v = a.scaleX,
//             m = a.scaleY,
//             g = a.target,
//             y = a.xOrigin,
//             _ = a.yOrigin,
//             w = a.xOffset,
//             x = a.yOffset,
//             b = a.forceCSS,
//             k = parseFloat(l),
//             E = parseFloat(h);
//           f = parseFloat(f), d = parseFloat(d), (p = parseFloat(p)) && (d += p = parseFloat(p), f += p), f || d ? (f *= Rn, d *= Rn, n = Math.cos(f) * v, r = Math.sin(f) * v, i = Math.sin(f - d) * -m, o = Math.cos(f - d) * m, d && (p *= Rn, s = Math.tan(d - p), i *= s = Math.sqrt(1 + s * s), o *= s, p && (s = Math.tan(p), n *= s = Math.sqrt(1 + s * s), r *= s)), n = dt(n), r = dt(r), i = dt(i), o = dt(o)) : (n = v, o = m, r = i = 0), (k && !~(l + "").indexOf("px") || E && !~(h + "").indexOf("px")) && (k = gr(g, "x", l, "px"), E = gr(g, "y", h, "px")), (y || _ || w || x) && (k = dt(k + y - (y * n + _ * i) + w), E = dt(E + _ - (y * r + _ * o) + x)), (u || c) && (s = g.getBBox(), k = dt(k + u / 100 * s.width), E = dt(E + c / 100 * s.height)), s = "matrix(" + n + "," + r + "," + i + "," + o + "," + k + "," + E + ")", g.setAttribute("transform", s), b && (g.style[Jn] = s)
//         },
//         $r = function(t, e, n, r, i) {
//           var o, s, a = 360,
//             u = A(i),
//             c = parseFloat(i) * (u && ~i.indexOf("rad") ? Ln : 1) - r,
//             l = r + c + "deg";
//           return u && ("short" === (o = i.split("_")[1]) && (c %= a) != c % 180 && (c += c < 0 ? a : -360), "cw" === o && c < 0 ? c = (c + 36e9) % a - ~~(c / a) * a : "ccw" === o && c > 0 && (c = (c - 36e9) % a - ~~(c / a) * a)), t._pt = s = new ln(t._pt, e, n, r, c, qn), s.e = l, s.u = "deg", t._props.push(n), s
//         },
//         Nr = function(t, e) {
//           for (var n in e) t[n] = e[n];
//           return t
//         },
//         zr = function(t, e, n) {
//           var r, i, o, s, a, u, c, l = Nr({}, n._gsap),
//             h = n.style;
//           for (i in l.svg ? (o = n.getAttribute("transform"), n.setAttribute("transform", ""), h[Jn] = e, r = Or(n, 1), dr(n, Jn), n.setAttribute("transform", o)) : (o = getComputedStyle(n)[Jn], h[Jn] = e, r = Or(n, 1), h[Jn] = o), Fn)(o = l[i]) !== (s = r[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (a = Kt(o) !== (c = Kt(s)) ? gr(n, i, o, c) : parseFloat(o), u = parseFloat(s), t._pt = new ln(t._pt, r, i, a, u - a, zn), t._pt.u = c || 0, t._props.push(i));
//           Nr(r, l)
//         };
//       ft("padding,margin,Width,Radius", (function(t, e) {
//         var n = "Top",
//           r = "Right",
//           i = "Bottom",
//           o = "Left",
//           s = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map((function(n) {
//             return e < 2 ? t + n : "border" + n + t
//           }));
//         br[e > 1 ? "border" + t : t] = function(t, e, n, r, i) {
//           var o, a;
//           if (arguments.length < 4) return o = s.map((function(e) {
//             return yr(t, e, n)
//           })), 5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a;
//           o = (r + "").split(" "), a = {}, s.forEach((function(t, e) {
//             return a[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
//           })), t.init(e, a, i)
//         }
//       }));
//       var qr, Br, Wr = {
//         name: "css",
//         register: ur,
//         targetTest: function(t) {
//           return t.style && t.nodeType
//         },
//         init: function(t, e, n, r, i) {
//           var o, s, a, u, c, l, h, f, d, p, v, m, g, _, w, x, b, k, E, T, P = this._props,
//             M = t.style,
//             O = n.vars.startAt;
//           for (h in Mn || ur(), this.styles = this.styles || rr(t), x = this.styles.props, this.tween = n, e)
//             if ("autoRound" !== h && (s = e[h], !it[h] || !We(h, e, n, r, t, i)))
//               if (c = typeof s, l = br[h], "function" === c && (c = typeof(s = s.call(n, r, t, i))), "string" === c && ~s.indexOf("random(") && (s = ae(s)), l) l(this, t, h, s, n) && (w = 1);
//               else if ("--" === h.substr(0, 2)) o = (getComputedStyle(t).getPropertyValue(h) + "").trim(), s += "", we.lastIndex = 0, we.test(o) || (f = Kt(o), d = Kt(s)), d ? f !== d && (o = gr(t, h, o, d) + d) : f && (s += f), this.add(M, "setProperty", o, s, r, i, 0, 0, h), P.push(h), x.push(h, 0, M[h]);
//           else if ("undefined" !== c) {
//             if (O && h in O ? (o = "function" == typeof O[h] ? O[h].call(n, r, t, i) : O[h], A(o) && ~o.indexOf("random(") && (o = ae(o)), Kt(o + "") || (o += y.units[h] || Kt(yr(t, h)) || ""), "=" === (o + "").charAt(1) && (o = yr(t, h))) : o = yr(t, h), u = parseFloat(o), (p = "string" === c && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)), a = parseFloat(s), h in Nn && ("autoAlpha" === h && (1 === u && "hidden" === yr(t, "visibility") && a && (u = 0), x.push("visibility", 0, M.visibility), pr(this, M, "visibility", u ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== h && "transform" !== h && ~(h = Nn[h]).indexOf(",") && (h = h.split(",")[0])), v = h in Fn)
//               if (this.styles.save(h), m || ((g = t._gsap).renderTransform && !e.parseTransform || Or(t, e.parseTransform), _ = !1 !== e.smoothOrigin && g.smooth, (m = this._pt = new ln(this._pt, M, Jn, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === h) this._pt = new ln(this._pt, g, "scaleY", g.scaleY, (p ? vt(g.scaleY, p + a) : a) - g.scaleY || 0, zn), this._pt.u = 0, P.push("scaleY", h), h += "X";
//               else {
//                 if ("transformOrigin" === h) {
//                   x.push(Zn, 0, M[Zn]), k = void 0, E = void 0, T = void 0, E = (k = (b = s).split(" "))[0], T = k[1] || "50%", "top" !== E && "bottom" !== E && "left" !== T && "right" !== T || (b = E, E = T, T = b), k[0] = wr[E] || E, k[1] = wr[T] || T, s = k.join(" "), g.svg ? Ar(t, s, 0, _, 0, this) : ((d = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && pr(this, g, "zOrigin", g.zOrigin, d), pr(this, M, h, Sr(o), Sr(s)));
//                   continue
//                 }
//                 if ("svgOrigin" === h) {
//                   Ar(t, s, 1, _, 0, this);
//                   continue
//                 }
//                 if (h in Er) {
//                   $r(this, g, h, u, p ? vt(u, p + s) : s);
//                   continue
//                 }
//                 if ("smoothOrigin" === h) {
//                   pr(this, g, "smooth", g.smooth, s);
//                   continue
//                 }
//                 if ("force3D" === h) {
//                   g[h] = s;
//                   continue
//                 }
//                 if ("transform" === h) {
//                   zr(this, s, t);
//                   continue
//                 }
//               }
//             else h in M || (h = ar(h) || h);
//             if (v || (a || 0 === a) && (u || 0 === u) && !$n.test(s) && h in M) a || (a = 0), (f = (o + "").substr((u + "").length)) !== (d = Kt(s) || (h in y.units ? y.units[h] : f)) && (u = gr(t, h, o, d)), this._pt = new ln(this._pt, v ? g : M, h, u, (p ? vt(u, p + a) : a) - u, v || "px" !== d && "zIndex" !== h || !1 === e.autoRound ? zn : Wn), this._pt.u = d || 0, f !== d && "%" !== d && (this._pt.b = o, this._pt.r = Bn);
//             else if (h in M) _r.call(this, t, h, o, p ? p + s : s);
//             else if (h in t) this.add(t, h, o || t[h], p ? p + s : s, r, i);
//             else if ("parseTransform" !== h) {
//               X(h, s);
//               continue
//             }
//             v || (h in M ? x.push(h, 0, M[h]) : x.push(h, 1, o || t[h])), P.push(h)
//           }
//           w && cn(this)
//         },
//         render: function(t, e) {
//           if (e.tween._time || !Sn())
//             for (var n = e._pt; n;) n.r(t, n.d), n = n._next;
//           else e.styles.revert()
//         },
//         get: yr,
//         aliases: Nn,
//         getSetter: function(t, e, n) {
//           var r = Nn[e];
//           return r && r.indexOf(",") < 0 && (e = r), e in Fn && e !== Zn && (t._gsap.x || yr(t, "x")) ? n && On === n ? "scale" === e ? Gn : Xn : (On = n || {}) && ("scale" === e ? Kn : Qn) : t.style && !C(t.style[e]) ? Un : ~e.indexOf("-") ? Yn : tn(t, e)
//         },
//         core: {
//           _removeProperty: dr,
//           _getMatrix: Mr
//         }
//       };
//       kn.utils.checkPrefix = ar, kn.core.getStyleSaver = rr, Br = ft("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (qr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
//         Fn[t] = 1
//       })), ft(qr, (function(t) {
//         y.units[t] = "deg", Er[t] = 1
//       })), Nn[Br[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + qr, ft("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
//         var e = t.split(":");
//         Nn[e[1]] = Br[e[0]]
//       })), ft("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
//         y.units[t] = "px"
//       })), kn.registerPlugin(Wr);
//       var Hr = kn.registerPlugin(Wr) || kn,
//         Vr = (Hr.core.Tween, /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi),
//         Ur = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
//         Yr = Math.PI / 180,
//         Xr = (Math.PI, Math.sin),
//         Gr = Math.cos,
//         Kr = Math.abs,
//         Qr = Math.sqrt,
//         Jr = (Math.atan2, function(t) {
//           return "number" == typeof t
//         }),
//         Zr = 1e5,
//         ti = function(t) {
//           return Math.round(t * Zr) / Zr || 0
//         };
  
//       function ei(t, e, n, r, i, o, s, a, u) {
//         if (t !== a || e !== u) {
//           n = Kr(n), r = Kr(r);
//           var c = i % 360 * Yr,
//             l = Gr(c),
//             h = Xr(c),
//             f = Math.PI,
//             d = 2 * f,
//             p = (t - a) / 2,
//             v = (e - u) / 2,
//             m = l * p + h * v,
//             g = -h * p + l * v,
//             y = m * m,
//             _ = g * g,
//             w = y / (n * n) + _ / (r * r);
//           w > 1 && (n = Qr(w) * n, r = Qr(w) * r);
//           var x = n * n,
//             b = r * r,
//             k = (x * b - x * _ - b * y) / (x * _ + b * y);
//           k < 0 && (k = 0);
//           var E = (o === s ? -1 : 1) * Qr(k),
//             T = E * (n * g / r),
//             P = E * (-r * m / n),
//             M = (t + a) / 2 + (l * T - h * P),
//             A = (e + u) / 2 + (h * T + l * P),
//             O = (m - T) / n,
//             S = (g - P) / r,
//             C = (-m - T) / n,
//             F = (-g - P) / r,
//             L = O * O + S * S,
//             R = (S < 0 ? -1 : 1) * Math.acos(O / Qr(L)),
//             D = (O * F - S * C < 0 ? -1 : 1) * Math.acos((O * C + S * F) / Qr(L * (C * C + F * F)));
//           isNaN(D) && (D = f), !s && D > 0 ? D -= d : s && D < 0 && (D += d), R %= d, D %= d;
//           var j, I = Math.ceil(Kr(D) / (d / 4)),
//             $ = [],
//             N = D / I,
//             z = 4 / 3 * Xr(N / 2) / (1 + Gr(N / 2)),
//             q = l * n,
//             B = h * n,
//             W = h * -r,
//             H = l * r;
//           for (j = 0; j < I; j++) m = Gr(i = R + j * N), g = Xr(i), O = Gr(i += N), S = Xr(i), $.push(m - z * g, g + z * m, O + z * S, S - z * O, O, S);
//           for (j = 0; j < $.length; j += 2) m = $[j], g = $[j + 1], $[j] = m * q + g * W + M, $[j + 1] = m * B + g * H + A;
//           return $[j - 2] = a, $[j - 1] = u, $
//         }
//       }
//       var ni, ri, ii = function() {
//           return ni || "undefined" != typeof window && (ni = window.gsap) && ni.registerPlugin && ni
//         },
//         oi = function() {
//           (ni = ii()) ? (ni.registerEase("_CE", li.create), ri = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
//         },
//         si = function(t) {
//           return ~~(1e3 * t + (t < 0 ? -.5 : .5)) / 1e3
//         },
//         ai = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
//         ui = /[cLlsSaAhHvVtTqQ]/g,
//         ci = function t(e, n, r, i, o, s, a, u, c, l, h) {
//           var f, d = (e + r) / 2,
//             p = (n + i) / 2,
//             v = (r + o) / 2,
//             m = (i + s) / 2,
//             g = (o + a) / 2,
//             y = (s + u) / 2,
//             _ = (d + v) / 2,
//             w = (p + m) / 2,
//             x = (v + g) / 2,
//             b = (m + y) / 2,
//             k = (_ + x) / 2,
//             E = (w + b) / 2,
//             T = a - e,
//             P = u - n,
//             M = Math.abs((r - a) * P - (i - u) * T),
//             A = Math.abs((o - a) * P - (s - u) * T);
//           return l || (l = [{
//             x: e,
//             y: n
//           }, {
//             x: a,
//             y: u
//           }], h = 1), l.splice(h || l.length - 1, 0, {
//             x: k,
//             y: E
//           }), (M + A) * (M + A) > c * (T * T + P * P) && (f = l.length, t(e, n, d, p, _, w, k, E, c, l, h), t(k, E, x, b, g, y, a, u, c, l, h + 1 + (l.length - f))), l
//         },
//         li = function() {
//           function t(t, e, n) {
//             ri || oi(), this.id = t, this.setData(e, n)
//           }
//           var e = t.prototype;
//           return e.setData = function(t, e) {
//             e = e || {};
//             var n, r, i, o, s, a, u, c, l, h = (t = t || "0,0,1,1").match(ai),
//               f = 1,
//               d = [],
//               p = [],
//               v = e.precision || 1,
//               m = v <= 1;
//             if (this.data = t, (ui.test(t) || ~t.indexOf("M") && t.indexOf("C") < 0) && (h = function(t) {
//                 var e, n, r, i, o, s, a, u, c, l, h, f, d, p, v, m = (t + "").replace(Ur, (function(t) {
//                     var e = +t;
//                     return e < 1e-4 && e > -1e-4 ? 0 : e
//                   })).match(Vr) || [],
//                   g = [],
//                   y = 0,
//                   _ = 0,
//                   w = 2 / 3,
//                   x = m.length,
//                   b = 0,
//                   k = "ERROR: malformed path: " + t,
//                   E = function(t, e, n, r) {
//                     l = (n - t) / 3, h = (r - e) / 3, a.push(t + l, e + h, n - l, r - h, n, r)
//                   };
//                 if (!t || !isNaN(m[0]) || isNaN(m[1])) return console.log(k), g;
//                 for (e = 0; e < x; e++)
//                   if (d = o, isNaN(m[e]) ? s = (o = m[e].toUpperCase()) !== m[e] : e--, r = +m[e + 1], i = +m[e + 2], s && (r += y, i += _), e || (u = r, c = i), "M" === o) a && (a.length < 8 ? g.length -= 1 : b += a.length), y = u = r, _ = c = i, a = [r, i], g.push(a), e += 2, o = "L";
//                   else if ("C" === o) a || (a = [0, 0]), s || (y = _ = 0), a.push(r, i, y + 1 * m[e + 3], _ + 1 * m[e + 4], y += 1 * m[e + 5], _ += 1 * m[e + 6]), e += 6;
//                 else if ("S" === o) l = y, h = _, "C" !== d && "S" !== d || (l += y - a[a.length - 4], h += _ - a[a.length - 3]), s || (y = _ = 0), a.push(l, h, r, i, y += 1 * m[e + 3], _ += 1 * m[e + 4]), e += 4;
//                 else if ("Q" === o) l = y + (r - y) * w, h = _ + (i - _) * w, s || (y = _ = 0), y += 1 * m[e + 3], _ += 1 * m[e + 4], a.push(l, h, y + (r - y) * w, _ + (i - _) * w, y, _), e += 4;
//                 else if ("T" === o) l = y - a[a.length - 4], h = _ - a[a.length - 3], a.push(y + l, _ + h, r + (y + 1.5 * l - r) * w, i + (_ + 1.5 * h - i) * w, y = r, _ = i), e += 2;
//                 else if ("H" === o) E(y, _, y = r, _), e += 1;
//                 else if ("V" === o) E(y, _, y, _ = r + (s ? _ - y : 0)), e += 1;
//                 else if ("L" === o || "Z" === o) "Z" === o && (r = u, i = c, a.closed = !0), ("L" === o || Kr(y - r) > .5 || Kr(_ - i) > .5) && (E(y, _, r, i), "L" === o && (e += 2)), y = r, _ = i;
//                 else if ("A" === o) {
//                   if (p = m[e + 4], v = m[e + 5], l = m[e + 6], h = m[e + 7], n = 7, p.length > 1 && (p.length < 3 ? (h = l, l = v, n--) : (h = v, l = p.substr(2), n -= 2), v = p.charAt(1), p = p.charAt(0)), f = ei(y, _, +m[e + 1], +m[e + 2], +m[e + 3], +p, +v, (s ? y : 0) + 1 * l, (s ? _ : 0) + 1 * h), e += n, f)
//                     for (n = 0; n < f.length; n++) a.push(f[n]);
//                   y = a[a.length - 2], _ = a[a.length - 1]
//                 } else console.log(k);
//                 return (e = a.length) < 6 ? (g.pop(), e = 0) : a[0] === a[e - 2] && a[1] === a[e - 1] && (a.closed = !0), g.totalPoints = b + e, g
//               }(t)[0]), 4 === (n = h.length)) h.unshift(0, 0), h.push(1, 1), n = 8;
//             else if ((n - 2) % 6) throw "Invalid CustomEase";
//             for (0 == +h[0] && 1 == +h[n - 2] || function(t, e, n) {
//                 n || 0 === n || (n = Math.max(+t[t.length - 1], +t[1]));
//                 var r, i = -1 * +t[0],
//                   o = -n,
//                   s = t.length,
//                   a = 1 / (+t[s - 2] + i),
//                   u = -e || (Math.abs(+t[s - 1] - +t[1]) < .01 * (+t[s - 2] - +t[0]) ? function(t) {
//                     var e, n = t.length,
//                       r = 1e20;
//                     for (e = 1; e < n; e += 6) + t[e] < r && (r = +t[e]);
//                     return r
//                   }(t) + o : +t[s - 1] + o);
//                 for (u = u ? 1 / u : -a, r = 0; r < s; r += 2) t[r] = (+t[r] + i) * a, t[r + 1] = (+t[r + 1] + o) * u
//               }(h, e.height, e.originY), this.segment = h, o = 2; o < n; o += 6) r = {
//               x: +h[o - 2],
//               y: +h[o - 1]
//             }, i = {
//               x: +h[o + 4],
//               y: +h[o + 5]
//             }, d.push(r, i), ci(r.x, r.y, +h[o], +h[o + 1], +h[o + 2], +h[o + 3], i.x, i.y, 1 / (2e5 * v), d, d.length - 1);
//             for (n = d.length, o = 0; o < n; o++) u = d[o], c = d[o - 1] || u, (u.x > c.x || c.y !== u.y && c.x === u.x || u === c) && u.x <= 1 ? (c.cx = u.x - c.x, c.cy = u.y - c.y, c.n = u, c.nx = u.x, m && o > 1 && Math.abs(c.cy / c.cx - d[o - 2].cy / d[o - 2].cx) > 2 && (m = 0), c.cx < f && (c.cx ? f = c.cx : (c.cx = .001, o === n - 1 && (c.x -= .001, f = Math.min(f, .001), m = 0)))) : (d.splice(o--, 1), n--);
//             if (s = 1 / (n = 1 / f + 1 | 0), a = 0, u = d[0], m) {
//               for (o = 0; o < n; o++) l = o * s, u.nx < l && (u = d[++a]), r = u.y + (l - u.x) / u.cx * u.cy, p[o] = {
//                 x: l,
//                 cx: s,
//                 y: r,
//                 cy: 0,
//                 nx: 9
//               }, o && (p[o - 1].cy = r - p[o - 1].y);
//               p[n - 1].cy = d[d.length - 1].y - r
//             } else {
//               for (o = 0; o < n; o++) u.nx < o * s && (u = d[++a]), p[o] = u;
//               a < d.length - 1 && (p[o - 1] = d[d.length - 2])
//             }
//             return this.ease = function(t) {
//               var e = p[t * n | 0] || p[n - 1];
//               return e.nx < t && (e = e.n), e.y + (t - e.x) / e.cx * e.cy
//             }, this.ease.custom = this, this.id && ni && ni.registerEase(this.id, this.ease), this
//           }, e.getSVGData = function(e) {
//             return t.getSVGData(this, e)
//           }, t.create = function(e, n, r) {
//             return new t(e, n, r).ease
//           }, t.register = function(t) {
//             ni = t, oi()
//           }, t.get = function(t) {
//             return ni.parseEase(t)
//           }, t.getSVGData = function(e, n) {
//             var r, i, o, s, a, u, c, l, h, f, d = (n = n || {}).width || 100,
//               p = n.height || 100,
//               v = n.x || 0,
//               m = (n.y || 0) + p,
//               g = ni.utils.toArray(n.path)[0];
//             if (n.invert && (p = -p, m = 0), "string" == typeof e && (e = ni.parseEase(e)), e.custom && (e = e.custom), e instanceof t) r = function(t) {
//               Jr(t[0]) && (t = [t]);
//               var e, n, r, i, o = "",
//                 s = t.length;
//               for (n = 0; n < s; n++) {
//                 for (i = t[n], o += "M" + ti(i[0]) + "," + ti(i[1]) + " C", e = i.length, r = 2; r < e; r++) o += ti(i[r++]) + "," + ti(i[r++]) + " " + ti(i[r++]) + "," + ti(i[r++]) + " " + ti(i[r++]) + "," + ti(i[r]) + " ";
//                 i.closed && (o += "z")
//               }
//               return o
//             }(function(t, e, n, r, i, o, s) {
//               for (var a, u, c, l, h, f = t.length; --f > -1;)
//                 for (u = (a = t[f]).length, c = 0; c < u; c += 2) l = a[c], h = a[c + 1], a[c] = l * e + 0 * h + o, a[c + 1] = 0 * l + h * i + s;
//               return t._dirty = 1, t
//             }([e.segment], d, 0, 0, -p, v, m));
//             else {
//               for (r = [v, m], s = 1 / (c = Math.max(5, 200 * (n.precision || 1))), l = 5 / (c += 2), h = si(v + s * d), i = ((f = si(m + e(s) * -p)) - m) / (h - v), o = 2; o < c; o++) a = si(v + o * s * d), u = si(m + e(o * s) * -p), (Math.abs((u - f) / (a - h) - i) > l || o === c - 1) && (r.push(h, f), i = (u - f) / (a - h)), h = a, f = u;
//               r = "M" + r.join(",")
//             }
//             return g && g.setAttribute("d", r), r
//           }, t
//         }();
//       ii() && ni.registerPlugin(li), li.version = "3.12.2", Hr.registerPlugin(li), li.create("easeOut", "M0,0,C0.3,0.1,0.182,0.718,0.448,0.908,0.579,1.001,0.752,1,1,1"), Hr.defaults({
//         overwrite: "auto",
//         ease: "easeOut"
//       });
//       var hi = n(69),
//         fi = n.n(hi),
//         di = n(40),
//         pi = n.n(di);
  
//       function vi(t) {
//         return new Promise((e => {
//           setTimeout((() => {
//             e()
//           }), 1e3 * t)
//         }))
//       }
//       const mi = new class {
//         constructor() {
//           this.$el = document.getElementById("Cover")
//         }
//         in() {
//           this.$el.style.display = "block", this.$el.style.pointerEvents = "auto", Hr.to(this.$el, {
//             opacity: 1,
//             duration: .6
//           })
//         }
//         out() {
//           this.$el.style.pointerEvents = "none", Hr.to(this.$el, {
//             opacity: 0,
//             duration: 1.2,
//             onComplete: () => {
//               this.$el.style.display = "none"
//             }
//           })
//         }
//       };
//       let gi = null;
//       class yi {
//         constructor() {
//           if (gi) return gi;
//           this.baseFPS = 60, this.baseDeltaTime = 1 / this.baseFPS, this.lastUpdateTime = 0, this.updateFunctions = [], this.updateFunctionsLength = 0, gi = this, this.init()
//         }
//         static getInstance() {
//           return gi || (gi = new yi), gi
//         }
//         static add(t) {
//           yi.getInstance().add(t)
//         }
//         static remove(t) {
//           yi.getInstance().remove(t)
//         }
//         static reset() {
//           yi.getInstance().reset()
//         }
//         init() {
//           this.lastUpdateTime = .001 * performance.now(), this.animFunction = this.update.bind(this), requestAnimationFrame(this.animFunction)
//         }
//         add(t) {
//           this.updateFunctions.push(t), this.updateFunctionsLength = this.updateFunctions.length
//         }
//         remove(t) {
//           let e;
//           for (let n = 0; n < this.updateFunctionsLength; n++)
//             if (e = this.updateFunctions[n], e === t) {
//               this.updateFunctions.splice(n, 1);
//               break
//             } this.updateFunctionsLength = this.updateFunctions.length
//         }
//         update(t) {
//           requestAnimationFrame(this.animFunction);
//           const e = (t *= .001) - this.lastUpdateTime,
//             n = Math.max(Math.min(e / this.baseDeltaTime, 2), .5);
//           let r;
//           for (let i = 0; i < this.updateFunctionsLength; i++) r = this.updateFunctions[i], r({
//             time: t,
//             deltaTime: e,
//             timeScale: n
//           });
//           this.lastUpdateTime = t
//         }
//         reset() {
//           for (let t = 0; t < this.updateFunctionsLength; t++) delete this.updateFunctions[t];
//           this.updateFunctions = [], this.updateFunctions.length = 0, this.updateFunctionsLength = 0
//         }
//       }
//       class _i {
//         constructor() {
//           this.prevSize = {
//             w: 0,
//             h: 0
//           }, this.checkTime = 0, this.interval = 500, this.getSize = null
//         }
//         reset() {
//           this.prevSize = {
//             w: 0,
//             h: 0
//           }, this.checkTime = 0
//         }
//         setSizeFunc(t) {
//           this.getSize = t, this.reset()
//         }
//         check() {
//           const t = performance.now();
//           if (t - this.checkTime < this.interval) return !1;
//           this.checkTime = t;
//           const {
//             width: e,
//             height: n
//           } = this.getSize();
//           return (e !== this.prevSize.w || n !== this.prevSize.h) && (this.prevSize.w = e, this.prevSize.h = n, !0)
//         }
//       }
//       class wi {
//         constructor(t) {
//           this.functions = [], this.numFunctions = 0, this.mq = window.matchMedia(t), this.mq.addEventListener("change", this.onMediaQueryChange.bind(this))
//         }
//         add(t, e = !1) {
//           this.functions.push(t), this.numFunctions = this.functions.length, e && t(this.mq.matches)
//         }
//         remove(t) {
//           for (let e = 0; e < this.numFunctions; e++)
//             if (this.functions[e] === t) {
//               this.functions.splice(e, 1);
//               break
//             } this.numFunctions = this.functions.length
//         }
//         reset() {
//           for (let t = 0; t < this.numFunctions; t++) delete this.functions[t];
//           this.functions = [], this.functions.length = 0, this.numFunctions = 0
//         }
//         onMediaQueryChange() {
//           for (let t = 0; t < this.numFunctions; t++)(0, this.functions[t])(this.mq.matches)
//         }
//         get matches() {
//           return this.mq.matches
//         }
//       }
//       let xi = null;
//       class bi {
//         constructor() {
//           if (xi) return xi;
//           this.onWheelAvailable = "onwheel" in document, this.onKeydownAvailable = "onkeydown" in document, this.onTouchAvailable = "ontouchstart" in document, this.onContextmenuAvailable = "oncontextmenu" in document, this.events = {
//             pointerdown: this.onTouchAvailable ? "touchstart" : "pointerdown",
//             pointermove: this.onTouchAvailable ? "touchmove" : "pointermove",
//             pointerup: this.onTouchAvailable ? "touchend" : "pointerup"
//           }, xi = this
//         }
//         static getInstance() {
//           return xi || (xi = new bi), xi
//         }
//         static get onWheelAvailable() {
//           return bi.getInstance().onWheelAvailable
//         }
//         static get onKeydownAvailable() {
//           return bi.getInstance().onKeydownAvailable
//         }
//         static get onTouchAvailable() {
//           return bi.getInstance().onTouchAvailable
//         }
//         static get isTouch() {
//           return bi.getInstance().onTouchAvailable
//         }
//         static get onContextmenuAvailable() {
//           return bi.getInstance().onContextmenuAvailable
//         }
//         static get pointerdownEvent() {
//           return bi.getInstance().events.pointerdown
//         }
//         static get pointermoveEvent() {
//           return bi.getInstance().events.pointermove
//         }
//         static get pointerupEvent() {
//           return bi.getInstance().events.pointerup
//         }
//       }
//       var ki, Ei, Ti, Pi, Mi = !1,
//         Ai = !1,
//         Oi = [],
//         Si = -1;
  
//       function Ci(t) {
//         let e = Oi.indexOf(t); - 1 !== e && e > Si && Oi.splice(e, 1)
//       }
  
//       function Fi() {
//         Mi = !1, Ai = !0;
//         for (let t = 0; t < Oi.length; t++) Oi[t](), Si = t;
//         Oi.length = 0, Si = -1, Ai = !1
//       }
//       var Li = !0;
  
//       function Ri(t) {
//         Ei = t
//       }
  
//       function Di(t, e, n = {}) {
//         t.dispatchEvent(new CustomEvent(e, {
//           detail: n,
//           bubbles: !0,
//           composed: !0,
//           cancelable: !0
//         }))
//       }
  
//       function ji(t, e) {
//         if ("function" == typeof ShadowRoot && t instanceof ShadowRoot) return void Array.from(t.children).forEach((t => ji(t, e)));
//         let n = !1;
//         if (e(t, (() => n = !0)), n) return;
//         let r = t.firstElementChild;
//         for (; r;) ji(r, e), r = r.nextElementSibling
//       }
  
//       function Ii(t, ...e) {
//         console.warn(`Alpine Warning: ${t}`, ...e)
//       }
//       var $i = !1,
//         Ni = [],
//         zi = [];
  
//       function qi() {
//         return Ni.map((t => t()))
//       }
  
//       function Bi() {
//         return Ni.concat(zi).map((t => t()))
//       }
  
//       function Wi(t) {
//         Ni.push(t)
//       }
  
//       function Hi(t) {
//         zi.push(t)
//       }
  
//       function Vi(t, e = !1) {
//         return Ui(t, (t => {
//           if ((e ? Bi() : qi()).some((e => t.matches(e)))) return !0
//         }))
//       }
  
//       function Ui(t, e) {
//         if (t) {
//           if (e(t)) return t;
//           if (t._x_teleportBack && (t = t._x_teleportBack), t.parentElement) return Ui(t.parentElement, e)
//         }
//       }
//       var Yi = [];
  
//       function Xi(t, e = ji, n = (() => {})) {
//         ! function(r) {
//           zo = !0;
//           let i = Symbol();
//           Bo = i, qo.set(i, []);
//           let o = () => {
//             for (; qo.get(i).length;) qo.get(i).shift()();
//             qo.delete(i)
//           };
//           e(t, ((t, e) => {
//             n(t, e), Yi.forEach((n => n(t, e))), $o(t, t.attributes).forEach((t => t())), t._x_ignore && e()
//           })), zo = !1, o()
//         }()
//       }
  
//       function Gi(t) {
//         ji(t, (t => {
//           no(t),
//             function(t) {
//               if (t._x_cleanups)
//                 for (; t._x_cleanups.length;) t._x_cleanups.pop()()
//             }(t)
//         }))
//       }
//       var Ki = [],
//         Qi = [],
//         Ji = [];
  
//       function Zi(t, e) {
//         "function" == typeof e ? (t._x_cleanups || (t._x_cleanups = []), t._x_cleanups.push(e)) : (e = t, Qi.push(e))
//       }
  
//       function to(t) {
//         Ki.push(t)
//       }
  
//       function eo(t, e, n) {
//         t._x_attributeCleanups || (t._x_attributeCleanups = {}), t._x_attributeCleanups[e] || (t._x_attributeCleanups[e] = []), t._x_attributeCleanups[e].push(n)
//       }
  
//       function no(t, e) {
//         t._x_attributeCleanups && Object.entries(t._x_attributeCleanups).forEach((([n, r]) => {
//           (void 0 === e || e.includes(n)) && (r.forEach((t => t())), delete t._x_attributeCleanups[n])
//         }))
//       }
//       var ro = new MutationObserver(fo),
//         io = !1;
  
//       function oo() {
//         ro.observe(document, {
//           subtree: !0,
//           childList: !0,
//           attributes: !0,
//           attributeOldValue: !0
//         }), io = !0
//       }
  
//       function so() {
//         (ao = ao.concat(ro.takeRecords())).length && !uo && (uo = !0, queueMicrotask((() => {
//           fo(ao), ao.length = 0, uo = !1
//         }))), ro.disconnect(), io = !1
//       }
//       var ao = [],
//         uo = !1;
  
//       function co(t) {
//         if (!io) return t();
//         so();
//         let e = t();
//         return oo(), e
//       }
//       var lo = !1,
//         ho = [];
  
//       function fo(t) {
//         if (lo) return void(ho = ho.concat(t));
//         let e = [],
//           n = [],
//           r = new Map,
//           i = new Map;
//         for (let o = 0; o < t.length; o++)
//           if (!t[o].target._x_ignoreMutationObserver && ("childList" === t[o].type && (t[o].addedNodes.forEach((t => 1 === t.nodeType && e.push(t))), t[o].removedNodes.forEach((t => 1 === t.nodeType && n.push(t)))), "attributes" === t[o].type)) {
//             let e = t[o].target,
//               n = t[o].attributeName,
//               s = t[o].oldValue,
//               a = () => {
//                 r.has(e) || r.set(e, []), r.get(e).push({
//                   name: n,
//                   value: e.getAttribute(n)
//                 })
//               },
//               u = () => {
//                 i.has(e) || i.set(e, []), i.get(e).push(n)
//               };
//             e.hasAttribute(n) && null === s ? a() : e.hasAttribute(n) ? (u(), a()) : u()
//           } i.forEach(((t, e) => {
//           no(e, t)
//         })), r.forEach(((t, e) => {
//           Ki.forEach((n => n(e, t)))
//         }));
//         for (let t of n) e.includes(t) || (Qi.forEach((e => e(t))), Gi(t));
//         e.forEach((t => {
//           t._x_ignoreSelf = !0, t._x_ignore = !0
//         }));
//         for (let t of e) n.includes(t) || t.isConnected && (delete t._x_ignoreSelf, delete t._x_ignore, Ji.forEach((e => e(t))), t._x_ignore = !0, t._x_ignoreSelf = !0);
//         e.forEach((t => {
//           delete t._x_ignoreSelf, delete t._x_ignore
//         })), e = null, n = null, r = null, i = null
//       }
  
//       function po(t) {
//         return go(mo(t))
//       }
  
//       function vo(t, e, n) {
//         return t._x_dataStack = [e, ...mo(n || t)], () => {
//           t._x_dataStack = t._x_dataStack.filter((t => t !== e))
//         }
//       }
  
//       function mo(t) {
//         return t._x_dataStack ? t._x_dataStack : "function" == typeof ShadowRoot && t instanceof ShadowRoot ? mo(t.host) : t.parentNode ? mo(t.parentNode) : []
//       }
  
//       function go(t) {
//         let e = new Proxy({}, {
//           ownKeys: () => Array.from(new Set(t.flatMap((t => Object.keys(t))))),
//           has: (e, n) => t.some((t => t.hasOwnProperty(n))),
//           get: (n, r) => (t.find((t => {
//             if (t.hasOwnProperty(r)) {
//               let n = Object.getOwnPropertyDescriptor(t, r);
//               if (n.get && n.get._x_alreadyBound || n.set && n.set._x_alreadyBound) return !0;
//               if ((n.get || n.set) && n.enumerable) {
//                 let i = n.get,
//                   o = n.set,
//                   s = n;
//                 i = i && i.bind(e), o = o && o.bind(e), i && (i._x_alreadyBound = !0), o && (o._x_alreadyBound = !0), Object.defineProperty(t, r, {
//                   ...s,
//                   get: i,
//                   set: o
//                 })
//               }
//               return !0
//             }
//             return !1
//           })) || {})[r],
//           set: (e, n, r) => {
//             let i = t.find((t => t.hasOwnProperty(n)));
//             return i ? i[n] = r : t[t.length - 1][n] = r, !0
//           }
//         });
//         return e
//       }
  
//       function yo(t) {
//         let e = (n, r = "") => {
//           Object.entries(Object.getOwnPropertyDescriptors(n)).forEach((([i, {
//             value: o,
//             enumerable: s
//           }]) => {
//             if (!1 === s || void 0 === o) return;
//             let a = "" === r ? i : `${r}.${i}`;
//             var u;
//             "object" == typeof o && null !== o && o._x_interceptor ? n[i] = o.initialize(t, a, i) : "object" != typeof(u = o) || Array.isArray(u) || null === u || o === n || o instanceof Element || e(o, a)
//           }))
//         };
//         return e(t)
//       }
  
//       function _o(t, e = (() => {})) {
//         let n = {
//           initialValue: void 0,
//           _x_interceptor: !0,
//           initialize(e, n, r) {
//             return t(this.initialValue, (() => function(t, e) {
//               return e.split(".").reduce(((t, e) => t[e]), t)
//             }(e, n)), (t => wo(e, n, t)), n, r)
//           }
//         };
//         return e(n), t => {
//           if ("object" == typeof t && null !== t && t._x_interceptor) {
//             let e = n.initialize.bind(n);
//             n.initialize = (r, i, o) => {
//               let s = t.initialize(r, i, o);
//               return n.initialValue = s, e(r, i, o)
//             }
//           } else n.initialValue = t;
//           return n
//         }
//       }
  
//       function wo(t, e, n) {
//         if ("string" == typeof e && (e = e.split(".")), 1 !== e.length) {
//           if (0 === e.length) throw error;
//           return t[e[0]] || (t[e[0]] = {}), wo(t[e[0]], e.slice(1), n)
//         }
//         t[e[0]] = n
//       }
//       var xo = {};
  
//       function bo(t, e) {
//         xo[t] = e
//       }
  
//       function ko(t, e) {
//         return Object.entries(xo).forEach((([n, r]) => {
//           let i = null;
//           Object.defineProperty(t, `$${n}`, {
//             get: () => r(e, function() {
//               if (i) return i; {
//                 let [t, n] = Wo(e);
//                 return i = {
//                   interceptor: _o,
//                   ...t
//                 }, Zi(e, n), i
//               }
//             }()),
//             enumerable: !1
//           })
//         })), t
//       }
  
//       function Eo(t, e, n, ...r) {
//         try {
//           return n(...r)
//         } catch (n) {
//           To(n, t, e)
//         }
//       }
  
//       function To(t, e, n = undefined) {
//         Object.assign(t, {
//           el: e,
//           expression: n
//         }), console.warn(`Alpine Expression Error: ${t.message}\n\n${n?'Expression: "'+n+'"\n\n':""}`, e), setTimeout((() => {
//           throw t
//         }), 0)
//       }
//       var Po = !0;
  
//       function Mo(t) {
//         let e = Po;
//         Po = !1;
//         let n = t();
//         return Po = e, n
//       }
  
//       function Ao(t, e, n = {}) {
//         let r;
//         return Oo(t, e)((t => r = t), n), r
//       }
  
//       function Oo(...t) {
//         return So(...t)
//       }
//       var So = Co;
  
//       function Co(t, e) {
//         let n = {};
//         ko(n, t);
//         let r = [n, ...mo(t)],
//           i = "function" == typeof e ? function(t, e) {
//             return (n = (() => {}), {
//               scope: r = {},
//               params: i = []
//             } = {}) => {
//               Lo(n, e.apply(go([r, ...t]), i))
//             }
//           }(r, e) : function(t, e, n) {
//             let r = function(t, e) {
//               if (Fo[t]) return Fo[t];
//               let n = Object.getPrototypeOf((async function() {})).constructor,
//                 r = /^[\n\s]*if.*\(.*\)/.test(t.trim()) || /^(let|const)\s/.test(t.trim()) ? `(async()=>{ ${t} })()` : t;
//               let i = (() => {
//                 try {
//                   return new n(["__self", "scope"], `with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`)
//                 } catch (n) {
//                   return To(n, e, t), Promise.resolve()
//                 }
//               })();
//               return Fo[t] = i, i
//             }(e, n);
//             return (i = (() => {}), {
//               scope: o = {},
//               params: s = []
//             } = {}) => {
//               r.result = void 0, r.finished = !1;
//               let a = go([o, ...t]);
//               if ("function" == typeof r) {
//                 let t = r(r, a).catch((t => To(t, n, e)));
//                 r.finished ? (Lo(i, r.result, a, s, n), r.result = void 0) : t.then((t => {
//                   Lo(i, t, a, s, n)
//                 })).catch((t => To(t, n, e))).finally((() => r.result = void 0))
//               }
//             }
//           }(r, e, t);
//         return Eo.bind(null, t, e, i)
//       }
//       var Fo = {};
  
//       function Lo(t, e, n, r, i) {
//         if (Po && "function" == typeof e) {
//           let o = e.apply(n, r);
//           o instanceof Promise ? o.then((e => Lo(t, e, n, r))).catch((t => To(t, i, e))) : t(o)
//         } else "object" == typeof e && e instanceof Promise ? e.then((e => t(e))) : t(e)
//       }
//       var Ro = "x-";
  
//       function Do(t = "") {
//         return Ro + t
//       }
//       var jo = {};
  
//       function Io(t, e) {
//         return jo[t] = e, {
//           before(e) {
//             if (!jo[e]) return void console.warn("Cannot find directive `${directive}`. `${name}` will use the default order of execution");
//             const n = Qo.indexOf(e);
//             Qo.splice(n >= 0 ? n : Qo.indexOf("DEFAULT"), 0, t)
//           }
//         }
//       }
  
//       function $o(t, e, n) {
//         if (e = Array.from(e), t._x_virtualDirectives) {
//           let n = Object.entries(t._x_virtualDirectives).map((([t, e]) => ({
//               name: t,
//               value: e
//             }))),
//             r = No(n);
//           n = n.map((t => r.find((e => e.name === t.name)) ? {
//             name: `x-bind:${t.name}`,
//             value: `"${t.value}"`
//           } : t)), e = e.concat(n)
//         }
//         let r = {},
//           i = e.map(Vo(((t, e) => r[t] = e))).filter(Xo).map(function(t, e) {
//             return ({
//               name: n,
//               value: r
//             }) => {
//               let i = n.match(Go()),
//                 o = n.match(/:([a-zA-Z0-9\-:]+)/),
//                 s = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
//                 a = e || t[n] || n;
//               return {
//                 type: i ? i[1] : null,
//                 value: o ? o[1] : null,
//                 modifiers: s.map((t => t.replace(".", ""))),
//                 expression: r,
//                 original: a
//               }
//             }
//           }(r, n)).sort(Jo);
//         return i.map((e => function(t, e) {
//           let n = jo[e.type] || (() => {}),
//             [r, i] = Wo(t);
//           eo(t, e.original, i);
//           let o = () => {
//             t._x_ignore || t._x_ignoreSelf || (n.inline && n.inline(t, e, r), n = n.bind(n, t, e, r), zo ? qo.get(Bo).push(n) : n())
//           };
//           return o.runCleanups = i, o
//         }(t, e)))
//       }
  
//       function No(t) {
//         return Array.from(t).map(Vo()).filter((t => !Xo(t)))
//       }
//       var zo = !1,
//         qo = new Map,
//         Bo = Symbol();
  
//       function Wo(t) {
//         let e = [],
//           [n, r] = function(t) {
//             let e = () => {};
//             return [n => {
//               let r = Ei(n);
//               return t._x_effects || (t._x_effects = new Set, t._x_runEffects = () => {
//                 t._x_effects.forEach((t => t()))
//               }), t._x_effects.add(r), e = () => {
//                 void 0 !== r && (t._x_effects.delete(r), Ti(r))
//               }, r
//             }, () => {
//               e()
//             }]
//           }(t);
//         return e.push(r), [{
//           Alpine: Os,
//           effect: n,
//           cleanup: t => e.push(t),
//           evaluateLater: Oo.bind(Oo, t),
//           evaluate: Ao.bind(Ao, t)
//         }, () => e.forEach((t => t()))]
//       }
//       var Ho = (t, e) => ({
//         name: n,
//         value: r
//       }) => (n.startsWith(t) && (n = n.replace(t, e)), {
//         name: n,
//         value: r
//       });
  
//       function Vo(t = (() => {})) {
//         return ({
//           name: e,
//           value: n
//         }) => {
//           let {
//             name: r,
//             value: i
//           } = Uo.reduce(((t, e) => e(t)), {
//             name: e,
//             value: n
//           });
//           return r !== e && t(r, e), {
//             name: r,
//             value: i
//           }
//         }
//       }
//       var Uo = [];
  
//       function Yo(t) {
//         Uo.push(t)
//       }
  
//       function Xo({
//         name: t
//       }) {
//         return Go().test(t)
//       }
//       var Go = () => new RegExp(`^${Ro}([^:^.]+)\\b`),
//         Ko = "DEFAULT",
//         Qo = ["ignore", "ref", "data", "id", "bind", "init", "for", "model", "modelable", "transition", "show", "if", Ko, "teleport"];
  
//       function Jo(t, e) {
//         let n = -1 === Qo.indexOf(t.type) ? Ko : t.type,
//           r = -1 === Qo.indexOf(e.type) ? Ko : e.type;
//         return Qo.indexOf(n) - Qo.indexOf(r)
//       }
//       var Zo = [],
//         ts = !1;
  
//       function es(t = (() => {})) {
//         return queueMicrotask((() => {
//           ts || setTimeout((() => {
//             ns()
//           }))
//         })), new Promise((e => {
//           Zo.push((() => {
//             t(), e()
//           }))
//         }))
//       }
  
//       function ns() {
//         for (ts = !1; Zo.length;) Zo.shift()()
//       }
  
//       function rs(t, e) {
//         return Array.isArray(e) ? is(t, e.join(" ")) : "object" == typeof e && null !== e ? function(t, e) {
//           let n = t => t.split(" ").filter(Boolean),
//             r = Object.entries(e).flatMap((([t, e]) => !!e && n(t))).filter(Boolean),
//             i = Object.entries(e).flatMap((([t, e]) => !e && n(t))).filter(Boolean),
//             o = [],
//             s = [];
//           return i.forEach((e => {
//             t.classList.contains(e) && (t.classList.remove(e), s.push(e))
//           })), r.forEach((e => {
//             t.classList.contains(e) || (t.classList.add(e), o.push(e))
//           })), () => {
//             s.forEach((e => t.classList.add(e))), o.forEach((e => t.classList.remove(e)))
//           }
//         }(t, e) : "function" == typeof e ? rs(t, e()) : is(t, e)
//       }
  
//       function is(t, e) {
//         return e = !0 === e ? e = "" : e || "", n = e.split(" ").filter((e => !t.classList.contains(e))).filter(Boolean), t.classList.add(...n), () => {
//           t.classList.remove(...n)
//         };
//         var n
//       }
  
//       function os(t, e) {
//         return "object" == typeof e && null !== e ? function(t, e) {
//           let n = {};
//           return Object.entries(e).forEach((([e, r]) => {
//             n[e] = t.style[e], e.startsWith("--") || (e = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()), t.style.setProperty(e, r)
//           })), setTimeout((() => {
//             0 === t.style.length && t.removeAttribute("style")
//           })), () => {
//             os(t, n)
//           }
//         }(t, e) : function(t, e) {
//           let n = t.getAttribute("style", e);
//           return t.setAttribute("style", e), () => {
//             t.setAttribute("style", n || "")
//           }
//         }(t, e)
//       }
  
//       function ss(t, e = (() => {})) {
//         let n = !1;
//         return function() {
//           n ? e.apply(this, arguments) : (n = !0, t.apply(this, arguments))
//         }
//       }
  
//       function as(t, e, n = {}) {
//         t._x_transition || (t._x_transition = {
//           enter: {
//             during: n,
//             start: n,
//             end: n
//           },
//           leave: {
//             during: n,
//             start: n,
//             end: n
//           },
//           in(n = (() => {}), r = (() => {})) {
//             cs(t, e, {
//               during: this.enter.during,
//               start: this.enter.start,
//               end: this.enter.end
//             }, n, r)
//           },
//           out(n = (() => {}), r = (() => {})) {
//             cs(t, e, {
//               during: this.leave.during,
//               start: this.leave.start,
//               end: this.leave.end
//             }, n, r)
//           }
//         })
//       }
  
//       function us(t) {
//         let e = t.parentNode;
//         if (e) return e._x_hidePromise ? e : us(e)
//       }
  
//       function cs(t, e, {
//         during: n,
//         start: r,
//         end: i
//       } = {}, o = (() => {}), s = (() => {})) {
//         if (t._x_transitioning && t._x_transitioning.cancel(), 0 === Object.keys(n).length && 0 === Object.keys(r).length && 0 === Object.keys(i).length) return o(), void s();
//         let a, u, c;
//         ! function(t, e) {
//           let n, r, i, o = ss((() => {
//             co((() => {
//               n = !0, r || e.before(), i || (e.end(), ns()), e.after(), t.isConnected && e.cleanup(), delete t._x_transitioning
//             }))
//           }));
//           t._x_transitioning = {
//             beforeCancels: [],
//             beforeCancel(t) {
//               this.beforeCancels.push(t)
//             },
//             cancel: ss((function() {
//               for (; this.beforeCancels.length;) this.beforeCancels.shift()();
//               o()
//             })),
//             finish: o
//           }, co((() => {
//             e.start(), e.during()
//           })), ts = !0, requestAnimationFrame((() => {
//             if (n) return;
//             let o = 1e3 * Number(getComputedStyle(t).transitionDuration.replace(/,.*/, "").replace("s", "")),
//               s = 1e3 * Number(getComputedStyle(t).transitionDelay.replace(/,.*/, "").replace("s", ""));
//             0 === o && (o = 1e3 * Number(getComputedStyle(t).animationDuration.replace("s", ""))), co((() => {
//               e.before()
//             })), r = !0, requestAnimationFrame((() => {
//               n || (co((() => {
//                 e.end()
//               })), ns(), setTimeout(t._x_transitioning.finish, o + s), i = !0)
//             }))
//           }))
//         }(t, {
//           start() {
//             a = e(t, r)
//           },
//           during() {
//             u = e(t, n)
//           },
//           before: o,
//           end() {
//             a(), c = e(t, i)
//           },
//           after: s,
//           cleanup() {
//             u(), c()
//           }
//         })
//       }
  
//       function ls(t, e, n) {
//         if (-1 === t.indexOf(e)) return n;
//         const r = t[t.indexOf(e) + 1];
//         if (!r) return n;
//         if ("scale" === e && isNaN(r)) return n;
//         if ("duration" === e || "delay" === e) {
//           let t = r.match(/([0-9]+)ms/);
//           if (t) return t[1]
//         }
//         return "origin" === e && ["top", "right", "left", "center", "bottom"].includes(t[t.indexOf(e) + 2]) ? [r, t[t.indexOf(e) + 2]].join(" ") : r
//       }
//       Io("transition", ((t, {
//         value: e,
//         modifiers: n,
//         expression: r
//       }, {
//         evaluate: i
//       }) => {
//         "function" == typeof r && (r = i(r)), !1 !== r && (r && "boolean" != typeof r ? function(t, e, n) {
//           as(t, rs, ""), {
//             enter: e => {
//               t._x_transition.enter.during = e
//             },
//             "enter-start": e => {
//               t._x_transition.enter.start = e
//             },
//             "enter-end": e => {
//               t._x_transition.enter.end = e
//             },
//             leave: e => {
//               t._x_transition.leave.during = e
//             },
//             "leave-start": e => {
//               t._x_transition.leave.start = e
//             },
//             "leave-end": e => {
//               t._x_transition.leave.end = e
//             }
//           } [n](e)
//         }(t, r, e) : function(t, e, n) {
//           as(t, os);
//           let r = !e.includes("in") && !e.includes("out") && !n,
//             i = r || e.includes("in") || ["enter"].includes(n),
//             o = r || e.includes("out") || ["leave"].includes(n);
//           e.includes("in") && !r && (e = e.filter(((t, n) => n < e.indexOf("out")))), e.includes("out") && !r && (e = e.filter(((t, n) => n > e.indexOf("out"))));
//           let s = !e.includes("opacity") && !e.includes("scale"),
//             a = s || e.includes("opacity") ? 0 : 1,
//             u = s || e.includes("scale") ? ls(e, "scale", 95) / 100 : 1,
//             c = ls(e, "delay", 0) / 1e3,
//             l = ls(e, "origin", "center"),
//             h = "opacity, transform",
//             f = ls(e, "duration", 150) / 1e3,
//             d = ls(e, "duration", 75) / 1e3,
//             p = "cubic-bezier(0.4, 0.0, 0.2, 1)";
//           i && (t._x_transition.enter.during = {
//             transformOrigin: l,
//             transitionDelay: `${c}s`,
//             transitionProperty: h,
//             transitionDuration: `${f}s`,
//             transitionTimingFunction: p
//           }, t._x_transition.enter.start = {
//             opacity: a,
//             transform: `scale(${u})`
//           }, t._x_transition.enter.end = {
//             opacity: 1,
//             transform: "scale(1)"
//           }), o && (t._x_transition.leave.during = {
//             transformOrigin: l,
//             transitionDelay: `${c}s`,
//             transitionProperty: h,
//             transitionDuration: `${d}s`,
//             transitionTimingFunction: p
//           }, t._x_transition.leave.start = {
//             opacity: 1,
//             transform: "scale(1)"
//           }, t._x_transition.leave.end = {
//             opacity: a,
//             transform: `scale(${u})`
//           })
//         }(t, n, e))
//       })), window.Element.prototype._x_toggleAndCascadeWithTransitions = function(t, e, n, r) {
//         const i = "visible" === document.visibilityState ? requestAnimationFrame : setTimeout;
//         let o = () => i(n);
//         e ? t._x_transition && (t._x_transition.enter || t._x_transition.leave) ? t._x_transition.enter && (Object.entries(t._x_transition.enter.during).length || Object.entries(t._x_transition.enter.start).length || Object.entries(t._x_transition.enter.end).length) ? t._x_transition.in(n) : o() : t._x_transition ? t._x_transition.in(n) : o() : (t._x_hidePromise = t._x_transition ? new Promise(((e, n) => {
//           t._x_transition.out((() => {}), (() => e(r))), t._x_transitioning.beforeCancel((() => n({
//             isFromCancelledTransition: !0
//           })))
//         })) : Promise.resolve(r), queueMicrotask((() => {
//           let e = us(t);
//           e ? (e._x_hideChildren || (e._x_hideChildren = []), e._x_hideChildren.push(t)) : i((() => {
//             let e = t => {
//               let n = Promise.all([t._x_hidePromise, ...(t._x_hideChildren || []).map(e)]).then((([t]) => t()));
//               return delete t._x_hidePromise, delete t._x_hideChildren, n
//             };
//             e(t).catch((t => {
//               if (!t.isFromCancelledTransition) throw t
//             }))
//           }))
//         })))
//       };
//       var hs = !1;
  
//       function fs(t, e = (() => {})) {
//         return (...n) => hs ? e(...n) : t(...n)
//       }
//       var ds = !1;
  
//       function ps(t) {
//         let e = Ei;
//         Ri(((t, n) => {
//           let r = e(t);
//           return Ti(r), () => {}
//         })), t(), Ri(e)
//       }
  
//       function vs(t, e, n, r = []) {
//         switch (t._x_bindings || (t._x_bindings = ki({})), t._x_bindings[e] = n, e = r.includes("camel") ? e.toLowerCase().replace(/-(\w)/g, ((t, e) => e.toUpperCase())) : e) {
//           case "value":
//             ! function(t, e) {
//               if ("radio" === t.type) void 0 === t.attributes.value && (t.value = e), window.fromModel && (t.checked = gs(t.value, e));
//               else if ("checkbox" === t.type) Number.isInteger(e) ? t.value = e : Array.isArray(e) || "boolean" == typeof e || [null, void 0].includes(e) ? Array.isArray(e) ? t.checked = e.some((e => gs(e, t.value))) : t.checked = !!e : t.value = String(e);
//               else if ("SELECT" === t.tagName) ! function(t, e) {
//                 const n = [].concat(e).map((t => t + ""));
//                 Array.from(t.options).forEach((t => {
//                   t.selected = n.includes(t.value)
//                 }))
//               }(t, e);
//               else {
//                 if (t.value === e) return;
//                 t.value = void 0 === e ? "" : e
//               }
//             }(t, n);
//             break;
//           case "style":
//             ! function(t, e) {
//               t._x_undoAddedStyles && t._x_undoAddedStyles(), t._x_undoAddedStyles = os(t, e)
//             }(t, n);
//             break;
//           case "class":
//             ! function(t, e) {
//               t._x_undoAddedClasses && t._x_undoAddedClasses(), t._x_undoAddedClasses = rs(t, e)
//             }(t, n);
//             break;
//           case "selected":
//           case "checked":
//             ! function(t, e, n) {
//               ms(t, e, n),
//                 function(t, e, n) {
//                   t[e] !== n && (t[e] = n)
//                 }(t, e, n)
//             }(t, e, n);
//             break;
//           default:
//             ms(t, e, n)
//         }
//       }
  
//       function ms(t, e, n) {
//         [null, void 0, !1].includes(n) && function(t) {
//           return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(t)
//         }(e) ? t.removeAttribute(e) : (ys(e) && (n = e), function(t, e, n) {
//           t.getAttribute(e) != n && t.setAttribute(e, n)
//         }(t, e, n))
//       }
  
//       function gs(t, e) {
//         return t == e
//       }
  
//       function ys(t) {
//         return ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(t)
//       }
  
//       function _s(t, e, n) {
//         let r = t.getAttribute(e);
//         return null === r ? "function" == typeof n ? n() : n : "" === r || (ys(e) ? !![e, "true"].includes(r) : r)
//       }
  
//       function ws(t, e) {
//         var n;
//         return function() {
//           var r = this,
//             i = arguments;
//           clearTimeout(n), n = setTimeout((function() {
//             n = null, t.apply(r, i)
//           }), e)
//         }
//       }
  
//       function xs(t, e) {
//         let n;
//         return function() {
//           let r = arguments;
//           n || (t.apply(this, r), n = !0, setTimeout((() => n = !1), e))
//         }
//       }
  
//       function bs({
//         get: t,
//         set: e
//       }, {
//         get: n,
//         set: r
//       }) {
//         let i, o, s, a, u = !0,
//           c = Ei((() => {
//             let c, l;
//             u ? (c = t(), r(JSON.parse(JSON.stringify(c))), l = n(), u = !1) : (c = t(), l = n(), s = JSON.stringify(c), a = JSON.stringify(l), s !== i ? (l = n(), r(c), l = c) : (e(JSON.parse(a ?? null)), c = l)), i = JSON.stringify(c), o = JSON.stringify(l)
//           }));
//         return () => {
//           Ti(c)
//         }
//       }
//       var ks = {},
//         Es = !1,
//         Ts = {};
  
//       function Ps(t, e, n) {
//         let r = [];
//         for (; r.length;) r.pop()();
//         let i = Object.entries(e).map((([t, e]) => ({
//             name: t,
//             value: e
//           }))),
//           o = No(i);
//         return i = i.map((t => o.find((e => e.name === t.name)) ? {
//           name: `x-bind:${t.name}`,
//           value: `"${t.value}"`
//         } : t)), $o(t, i, n).map((t => {
//           r.push(t.runCleanups), t()
//         })), () => {
//           for (; r.length;) r.pop()()
//         }
//       }
//       var Ms = {},
//         As = {
//           get reactive() {
//             return ki
//           },
//           get release() {
//             return Ti
//           },
//           get effect() {
//             return Ei
//           },
//           get raw() {
//             return Pi
//           },
//           version: "3.13.0",
//           flushAndStopDeferringMutations: function() {
//             lo = !1, fo(ho), ho = []
//           },
//           dontAutoEvaluateFunctions: Mo,
//           disableEffectScheduling: function(t) {
//             Li = !1, t(), Li = !0
//           },
//           startObservingMutations: oo,
//           stopObservingMutations: so,
//           setReactivityEngine: function(t) {
//             ki = t.reactive, Ti = t.release, Ei = e => t.effect(e, {
//               scheduler: t => {
//                 Li ? function(t) {
//                   var e;
//                   e = t, Oi.includes(e) || Oi.push(e), Ai || Mi || (Mi = !0, queueMicrotask(Fi))
//                 }(t) : t()
//               }
//             }), Pi = t.raw
//           },
//           onAttributeRemoved: eo,
//           onAttributesAdded: to,
//           closestDataStack: mo,
//           skipDuringClone: fs,
//           onlyDuringClone: function(t) {
//             return (...e) => hs && t(...e)
//           },
//           addRootSelector: Wi,
//           addInitSelector: Hi,
//           addScopeToNode: vo,
//           deferMutations: function() {
//             lo = !0
//           },
//           mapAttributes: Yo,
//           evaluateLater: Oo,
//           interceptInit: function(t) {
//             Yi.push(t)
//           },
//           setEvaluator: function(t) {
//             So = t
//           },
//           mergeProxies: go,
//           extractProp: function(t, e, n, r = !0) {
//             if (t._x_bindings && void 0 !== t._x_bindings[e]) return t._x_bindings[e];
//             if (t._x_inlineBindings && void 0 !== t._x_inlineBindings[e]) {
//               let n = t._x_inlineBindings[e];
//               return n.extract = r, Mo((() => Ao(t, n.expression)))
//             }
//             return _s(t, e, n)
//           },
//           findClosest: Ui,
//           onElRemoved: Zi,
//           closestRoot: Vi,
//           destroyTree: Gi,
//           interceptor: _o,
//           transition: cs,
//           setStyles: os,
//           mutateDom: co,
//           directive: Io,
//           entangle: bs,
//           throttle: xs,
//           debounce: ws,
//           evaluate: Ao,
//           initTree: Xi,
//           nextTick: es,
//           prefixed: Do,
//           prefix: function(t) {
//             Ro = t
//           },
//           plugin: function(t) {
//             (Array.isArray(t) ? t : [t]).forEach((t => t(Os)))
//           },
//           magic: bo,
//           store: function(t, e) {
//             if (Es || (ks = ki(ks), Es = !0), void 0 === e) return ks[t];
//             ks[t] = e, "object" == typeof e && null !== e && e.hasOwnProperty("init") && "function" == typeof e.init && ks[t].init(), yo(ks[t])
//           },
//           start: function() {
//             var t;
//             $i && Ii("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."), $i = !0, document.body || Ii("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"), Di(document, "alpine:init"), Di(document, "alpine:initializing"), oo(), t = t => Xi(t, ji), Ji.push(t), Zi((t => Gi(t))), to(((t, e) => {
//               $o(t, e).forEach((t => t()))
//             })), Array.from(document.querySelectorAll(Bi())).filter((t => !Vi(t.parentElement, !0))).forEach((t => {
//               Xi(t)
//             })), Di(document, "alpine:initialized")
//           },
//           clone: function(t, e) {
//             e._x_dataStack || (e._x_dataStack = t._x_dataStack), hs = !0, ds = !0, ps((() => {
//               ! function(t) {
//                 let e = !1;
//                 Xi(t, ((t, n) => {
//                   ji(t, ((t, r) => {
//                     if (e && function(t) {
//                         return qi().some((e => t.matches(e)))
//                       }(t)) return r();
//                     e = !0, n(t, r)
//                   }))
//                 }))
//               }(e)
//             })), hs = !1, ds = !1
//           },
//           cloneNode: function(t, e) {
//             t._x_dataStack && (e._x_dataStack = t._x_dataStack, e.setAttribute("data-has-alpine-state", !0)), hs = !0, ps((() => {
//               Xi(e, ((t, e) => {
//                 e(t, (() => {}))
//               }))
//             })), hs = !1
//           },
//           bound: function(t, e, n) {
//             return t._x_bindings && void 0 !== t._x_bindings[e] ? t._x_bindings[e] : _s(t, e, n)
//           },
//           $data: po,
//           walk: ji,
//           data: function(t, e) {
//             Ms[t] = e
//           },
//           bind: function(t, e) {
//             let n = "function" != typeof e ? () => e : e;
//             return t instanceof Element ? Ps(t, n()) : (Ts[t] = n, () => {})
//           }
//         },
//         Os = As;
  
//       function Ss(t, e) {
//         const n = Object.create(null),
//           r = t.split(",");
//         for (let t = 0; t < r.length; t++) n[r[t]] = !0;
//         return e ? t => !!n[t.toLowerCase()] : t => !!n[t]
//       }
//       var Cs, Fs = Object.freeze({}),
//         Ls = (Object.freeze([]), Object.prototype.hasOwnProperty),
//         Rs = (t, e) => Ls.call(t, e),
//         Ds = Array.isArray,
//         js = t => "[object Map]" === zs(t),
//         Is = t => "symbol" == typeof t,
//         $s = t => null !== t && "object" == typeof t,
//         Ns = Object.prototype.toString,
//         zs = t => Ns.call(t),
//         qs = t => zs(t).slice(8, -1),
//         Bs = t => "string" == typeof t && "NaN" !== t && "-" !== t[0] && "" + parseInt(t, 10) === t,
//         Ws = t => {
//           const e = Object.create(null);
//           return n => e[n] || (e[n] = t(n))
//         },
//         Hs = /-(\w)/g,
//         Vs = (Ws((t => t.replace(Hs, ((t, e) => e ? e.toUpperCase() : "")))), /\B([A-Z])/g),
//         Us = (Ws((t => t.replace(Vs, "-$1").toLowerCase())), Ws((t => t.charAt(0).toUpperCase() + t.slice(1)))),
//         Ys = (Ws((t => t ? `on${Us(t)}` : "")), (t, e) => t !== e && (t == t || e == e)),
//         Xs = new WeakMap,
//         Gs = [],
//         Ks = Symbol("iterate"),
//         Qs = Symbol("Map key iterate"),
//         Js = 0;
  
//       function Zs(t) {
//         const {
//           deps: e
//         } = t;
//         if (e.length) {
//           for (let n = 0; n < e.length; n++) e[n].delete(t);
//           e.length = 0
//         }
//       }
//       var ta = !0,
//         ea = [];
  
//       function na() {
//         const t = ea.pop();
//         ta = void 0 === t || t
//       }
  
//       function ra(t, e, n) {
//         if (!ta || void 0 === Cs) return;
//         let r = Xs.get(t);
//         r || Xs.set(t, r = new Map);
//         let i = r.get(n);
//         i || r.set(n, i = new Set), i.has(Cs) || (i.add(Cs), Cs.deps.push(i), Cs.options.onTrack && Cs.options.onTrack({
//           effect: Cs,
//           target: t,
//           type: e,
//           key: n
//         }))
//       }
  
//       function ia(t, e, n, r, i, o) {
//         const s = Xs.get(t);
//         if (!s) return;
//         const a = new Set,
//           u = t => {
//             t && t.forEach((t => {
//               (t !== Cs || t.allowRecurse) && a.add(t)
//             }))
//           };
//         if ("clear" === e) s.forEach(u);
//         else if ("length" === n && Ds(t)) s.forEach(((t, e) => {
//           ("length" === e || e >= r) && u(t)
//         }));
//         else switch (void 0 !== n && u(s.get(n)), e) {
//           case "add":
//             Ds(t) ? Bs(n) && u(s.get("length")) : (u(s.get(Ks)), js(t) && u(s.get(Qs)));
//             break;
//           case "delete":
//             Ds(t) || (u(s.get(Ks)), js(t) && u(s.get(Qs)));
//             break;
//           case "set":
//             js(t) && u(s.get(Ks))
//         }
//         a.forEach((s => {
//           s.options.onTrigger && s.options.onTrigger({
//             effect: s,
//             target: t,
//             key: n,
//             type: e,
//             newValue: r,
//             oldValue: i,
//             oldTarget: o
//           }), s.options.scheduler ? s.options.scheduler(s) : s()
//         }))
//       }
//       var oa = Ss("__proto__,__v_isRef,__isVue"),
//         sa = new Set(Object.getOwnPropertyNames(Symbol).map((t => Symbol[t])).filter(Is)),
//         aa = ha(),
//         ua = ha(!0),
//         ca = la();
  
//       function la() {
//         const t = {};
//         return ["includes", "indexOf", "lastIndexOf"].forEach((e => {
//           t[e] = function(...t) {
//             const n = Va(this);
//             for (let t = 0, e = this.length; t < e; t++) ra(n, "get", t + "");
//             const r = n[e](...t);
//             return -1 === r || !1 === r ? n[e](...t.map(Va)) : r
//           }
//         })), ["push", "pop", "shift", "unshift", "splice"].forEach((e => {
//           t[e] = function(...t) {
//             ea.push(ta), ta = !1;
//             const n = Va(this)[e].apply(this, t);
//             return na(), n
//           }
//         })), t
//       }
  
//       function ha(t = !1, e = !1) {
//         return function(n, r, i) {
//           if ("__v_isReactive" === r) return !t;
//           if ("__v_isReadonly" === r) return t;
//           if ("__v_raw" === r && i === (t ? e ? qa : za : e ? Na : $a).get(n)) return n;
//           const o = Ds(n);
//           if (!t && o && Rs(ca, r)) return Reflect.get(ca, r, i);
//           const s = Reflect.get(n, r, i);
//           return (Is(r) ? sa.has(r) : oa(r)) ? s : (t || ra(n, "get", r), e ? s : Ua(s) ? o && Bs(r) ? s : s.value : $s(s) ? t ? Wa(s) : Ba(s) : s)
//         }
//       }
  
//       function fa(t = !1) {
//         return function(e, n, r, i) {
//           let o = e[n];
//           if (!t && (r = Va(r), o = Va(o), !Ds(e) && Ua(o) && !Ua(r))) return o.value = r, !0;
//           const s = Ds(e) && Bs(n) ? Number(n) < e.length : Rs(e, n),
//             a = Reflect.set(e, n, r, i);
//           return e === Va(i) && (s ? Ys(r, o) && ia(e, "set", n, r, o) : ia(e, "add", n, r)), a
//         }
//       }
//       var da = {
//           get: aa,
//           set: fa(),
//           deleteProperty: function(t, e) {
//             const n = Rs(t, e),
//               r = t[e],
//               i = Reflect.deleteProperty(t, e);
//             return i && n && ia(t, "delete", e, void 0, r), i
//           },
//           has: function(t, e) {
//             const n = Reflect.has(t, e);
//             return Is(e) && sa.has(e) || ra(t, "has", e), n
//           },
//           ownKeys: function(t) {
//             return ra(t, "iterate", Ds(t) ? "length" : Ks), Reflect.ownKeys(t)
//           }
//         },
//         pa = {
//           get: ua,
//           set: (t, e) => (console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`, t), !0),
//           deleteProperty: (t, e) => (console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`, t), !0)
//         },
//         va = t => $s(t) ? Ba(t) : t,
//         ma = t => $s(t) ? Wa(t) : t,
//         ga = t => t,
//         ya = t => Reflect.getPrototypeOf(t);
  
//       function _a(t, e, n = !1, r = !1) {
//         const i = Va(t = t.__v_raw),
//           o = Va(e);
//         e !== o && !n && ra(i, "get", e), !n && ra(i, "get", o);
//         const {
//           has: s
//         } = ya(i), a = r ? ga : n ? ma : va;
//         return s.call(i, e) ? a(t.get(e)) : s.call(i, o) ? a(t.get(o)) : void(t !== i && t.get(e))
//       }
  
//       function wa(t, e = !1) {
//         const n = this.__v_raw,
//           r = Va(n),
//           i = Va(t);
//         return t !== i && !e && ra(r, "has", t), !e && ra(r, "has", i), t === i ? n.has(t) : n.has(t) || n.has(i)
//       }
  
//       function xa(t, e = !1) {
//         return t = t.__v_raw, !e && ra(Va(t), "iterate", Ks), Reflect.get(t, "size", t)
//       }
  
//       function ba(t) {
//         t = Va(t);
//         const e = Va(this);
//         return ya(e).has.call(e, t) || (e.add(t), ia(e, "add", t, t)), this
//       }
  
//       function ka(t, e) {
//         e = Va(e);
//         const n = Va(this),
//           {
//             has: r,
//             get: i
//           } = ya(n);
//         let o = r.call(n, t);
//         o ? Ia(n, r, t) : (t = Va(t), o = r.call(n, t));
//         const s = i.call(n, t);
//         return n.set(t, e), o ? Ys(e, s) && ia(n, "set", t, e, s) : ia(n, "add", t, e), this
//       }
  
//       function Ea(t) {
//         const e = Va(this),
//           {
//             has: n,
//             get: r
//           } = ya(e);
//         let i = n.call(e, t);
//         i ? Ia(e, n, t) : (t = Va(t), i = n.call(e, t));
//         const o = r ? r.call(e, t) : void 0,
//           s = e.delete(t);
//         return i && ia(e, "delete", t, void 0, o), s
//       }
  
//       function Ta() {
//         const t = Va(this),
//           e = 0 !== t.size,
//           n = js(t) ? new Map(t) : new Set(t),
//           r = t.clear();
//         return e && ia(t, "clear", void 0, void 0, n), r
//       }
  
//       function Pa(t, e) {
//         return function(n, r) {
//           const i = this,
//             o = i.__v_raw,
//             s = Va(o),
//             a = e ? ga : t ? ma : va;
//           return !t && ra(s, "iterate", Ks), o.forEach(((t, e) => n.call(r, a(t), a(e), i)))
//         }
//       }
  
//       function Ma(t, e, n) {
//         return function(...r) {
//           const i = this.__v_raw,
//             o = Va(i),
//             s = js(o),
//             a = "entries" === t || t === Symbol.iterator && s,
//             u = "keys" === t && s,
//             c = i[t](...r),
//             l = n ? ga : e ? ma : va;
//           return !e && ra(o, "iterate", u ? Qs : Ks), {
//             next() {
//               const {
//                 value: t,
//                 done: e
//               } = c.next();
//               return e ? {
//                 value: t,
//                 done: e
//               } : {
//                 value: a ? [l(t[0]), l(t[1])] : l(t),
//                 done: e
//               }
//             },
//             [Symbol.iterator]() {
//               return this
//             }
//           }
//         }
//       }
  
//       function Aa(t) {
//         return function(...e) {
//           {
//             const n = e[0] ? `on key "${e[0]}" ` : "";
//             console.warn(`${Us(t)} operation ${n}failed: target is readonly.`, Va(this))
//           }
//           return "delete" !== t && this
//         }
//       }
  
//       function Oa() {
//         const t = {
//             get(t) {
//               return _a(this, t)
//             },
//             get size() {
//               return xa(this)
//             },
//             has: wa,
//             add: ba,
//             set: ka,
//             delete: Ea,
//             clear: Ta,
//             forEach: Pa(!1, !1)
//           },
//           e = {
//             get(t) {
//               return _a(this, t, !1, !0)
//             },
//             get size() {
//               return xa(this)
//             },
//             has: wa,
//             add: ba,
//             set: ka,
//             delete: Ea,
//             clear: Ta,
//             forEach: Pa(!1, !0)
//           },
//           n = {
//             get(t) {
//               return _a(this, t, !0)
//             },
//             get size() {
//               return xa(this, !0)
//             },
//             has(t) {
//               return wa.call(this, t, !0)
//             },
//             add: Aa("add"),
//             set: Aa("set"),
//             delete: Aa("delete"),
//             clear: Aa("clear"),
//             forEach: Pa(!0, !1)
//           },
//           r = {
//             get(t) {
//               return _a(this, t, !0, !0)
//             },
//             get size() {
//               return xa(this, !0)
//             },
//             has(t) {
//               return wa.call(this, t, !0)
//             },
//             add: Aa("add"),
//             set: Aa("set"),
//             delete: Aa("delete"),
//             clear: Aa("clear"),
//             forEach: Pa(!0, !0)
//           };
//         return ["keys", "values", "entries", Symbol.iterator].forEach((i => {
//           t[i] = Ma(i, !1, !1), n[i] = Ma(i, !0, !1), e[i] = Ma(i, !1, !0), r[i] = Ma(i, !0, !0)
//         })), [t, n, e, r]
//       }
//       var [Sa, Ca, Fa, La] = Oa();
  
//       function Ra(t, e) {
//         const n = e ? t ? La : Fa : t ? Ca : Sa;
//         return (e, r, i) => "__v_isReactive" === r ? !t : "__v_isReadonly" === r ? t : "__v_raw" === r ? e : Reflect.get(Rs(n, r) && r in e ? n : e, r, i)
//       }
//       var Da = {
//           get: Ra(!1, !1)
//         },
//         ja = {
//           get: Ra(!0, !1)
//         };
  
//       function Ia(t, e, n) {
//         const r = Va(n);
//         if (r !== n && e.call(t, r)) {
//           const e = qs(t);
//           console.warn(`Reactive ${e} contains both the raw and reactive versions of the same object${"Map"===e?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)
//         }
//       }
//       var $a = new WeakMap,
//         Na = new WeakMap,
//         za = new WeakMap,
//         qa = new WeakMap;
  
//       function Ba(t) {
//         return t && t.__v_isReadonly ? t : Ha(t, !1, da, Da, $a)
//       }
  
//       function Wa(t) {
//         return Ha(t, !0, pa, ja, za)
//       }
  
//       function Ha(t, e, n, r, i) {
//         if (!$s(t)) return console.warn(`value cannot be made reactive: ${String(t)}`), t;
//         if (t.__v_raw && (!e || !t.__v_isReactive)) return t;
//         const o = i.get(t);
//         if (o) return o;
//         const s = (a = t).__v_skip || !Object.isExtensible(a) ? 0 : function(t) {
//           switch (t) {
//             case "Object":
//             case "Array":
//               return 1;
//             case "Map":
//             case "Set":
//             case "WeakMap":
//             case "WeakSet":
//               return 2;
//             default:
//               return 0
//           }
//         }(qs(a));
//         var a;
//         if (0 === s) return t;
//         const u = new Proxy(t, 2 === s ? r : n);
//         return i.set(t, u), u
//       }
  
//       function Va(t) {
//         return t && Va(t.__v_raw) || t
//       }
  
//       function Ua(t) {
//         return Boolean(t && !0 === t.__v_isRef)
//       }
//       bo("nextTick", (() => es)), bo("dispatch", (t => Di.bind(Di, t))), bo("watch", ((t, {
//         evaluateLater: e,
//         effect: n
//       }) => (r, i) => {
//         let o, s = e(r),
//           a = !0,
//           u = n((() => s((t => {
//             JSON.stringify(t), a ? o = t : queueMicrotask((() => {
//               i(t, o), o = t
//             })), a = !1
//           }))));
//         t._x_effects.delete(u)
//       })), bo("store", (function() {
//         return ks
//       })), bo("data", (t => po(t))), bo("root", (t => Vi(t))), bo("refs", (t => (t._x_refs_proxy || (t._x_refs_proxy = go(function(t) {
//         let e = [],
//           n = t;
//         for (; n;) n._x_refs && e.push(n._x_refs), n = n.parentNode;
//         return e
//       }(t))), t._x_refs_proxy)));
//       var Ya = {};
  
//       function Xa(t) {
//         return Ya[t] || (Ya[t] = 0), ++Ya[t]
//       }
  
//       function Ga(t, e, n) {
//         bo(e, (e => Ii(`You can't use [$${directiveName}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${n}`, e)))
//       }
//       bo("id", (t => (e, n = null) => {
//         let r = function(t, e) {
//             return Ui(t, (t => {
//               if (t._x_ids && t._x_ids[e]) return !0
//             }))
//           }(t, e),
//           i = r ? r._x_ids[e] : Xa(e);
//         return n ? `${e}-${i}-${n}` : `${e}-${i}`
//       })), bo("el", (t => t)), Ga("Focus", "focus", "focus"), Ga("Persist", "persist", "persist"), Io("modelable", ((t, {
//         expression: e
//       }, {
//         effect: n,
//         evaluateLater: r,
//         cleanup: i
//       }) => {
//         let o = r(e),
//           s = () => {
//             let t;
//             return o((e => t = e)), t
//           },
//           a = r(`${e} = __placeholder`),
//           u = t => a((() => {}), {
//             scope: {
//               __placeholder: t
//             }
//           }),
//           c = s();
//         u(c), queueMicrotask((() => {
//           if (!t._x_model) return;
//           t._x_removeModelListeners.default();
//           let e = t._x_model.get,
//             n = t._x_model.set,
//             r = bs({
//               get: () => e(),
//               set(t) {
//                 n(t)
//               }
//             }, {
//               get: () => s(),
//               set(t) {
//                 u(t)
//               }
//             });
//           i(r)
//         }))
//       }));
//       var Ka = document.createElement("div");
//       Io("teleport", ((t, {
//         modifiers: e,
//         expression: n
//       }, {
//         cleanup: r
//       }) => {
//         "template" !== t.tagName.toLowerCase() && Ii("x-teleport can only be used on a <template> tag", t);
//         let i = fs((() => document.querySelector(n)), (() => Ka))();
//         i || Ii(`Cannot find x-teleport element for selector: "${n}"`);
//         let o = t.content.cloneNode(!0).firstElementChild;
//         t._x_teleport = o, o._x_teleportBack = t, t._x_forwardEvents && t._x_forwardEvents.forEach((e => {
//           o.addEventListener(e, (e => {
//             e.stopPropagation(), t.dispatchEvent(new e.constructor(e.type, e))
//           }))
//         })), vo(o, {}, t), co((() => {
//           e.includes("prepend") ? i.parentNode.insertBefore(o, i) : e.includes("append") ? i.parentNode.insertBefore(o, i.nextSibling) : i.appendChild(o), Xi(o), o._x_ignore = !0
//         })), r((() => o.remove()))
//       }));
//       var Qa = () => {};
  
//       function Ja(t, e, n, r) {
//         let i = t,
//           o = t => r(t),
//           s = {},
//           a = (t, e) => n => e(t, n);
//         if (n.includes("dot") && (e = e.replace(/-/g, ".")), n.includes("camel") && (e = e.toLowerCase().replace(/-(\w)/g, ((t, e) => e.toUpperCase()))), n.includes("passive") && (s.passive = !0), n.includes("capture") && (s.capture = !0), n.includes("window") && (i = window), n.includes("document") && (i = document), n.includes("debounce")) {
//           let t = n[n.indexOf("debounce") + 1] || "invalid-wait",
//             e = Za(t.split("ms")[0]) ? Number(t.split("ms")[0]) : 250;
//           o = ws(o, e)
//         }
//         if (n.includes("throttle")) {
//           let t = n[n.indexOf("throttle") + 1] || "invalid-wait",
//             e = Za(t.split("ms")[0]) ? Number(t.split("ms")[0]) : 250;
//           o = xs(o, e)
//         }
//         return n.includes("prevent") && (o = a(o, ((t, e) => {
//           e.preventDefault(), t(e)
//         }))), n.includes("stop") && (o = a(o, ((t, e) => {
//           e.stopPropagation(), t(e)
//         }))), n.includes("self") && (o = a(o, ((e, n) => {
//           n.target === t && e(n)
//         }))), (n.includes("away") || n.includes("outside")) && (i = document, o = a(o, ((e, n) => {
//           t.contains(n.target) || !1 !== n.target.isConnected && (t.offsetWidth < 1 && t.offsetHeight < 1 || !1 !== t._x_isShown && e(n))
//         }))), n.includes("once") && (o = a(o, ((t, n) => {
//           t(n), i.removeEventListener(e, o, s)
//         }))), o = a(o, ((t, r) => {
//           (function(t) {
//             return ["keydown", "keyup"].includes(t)
//           })(e) && function(t, e) {
//             let n = e.filter((t => !["window", "document", "prevent", "stop", "once", "capture"].includes(t)));
//             if (n.includes("debounce")) {
//               let t = n.indexOf("debounce");
//               n.splice(t, Za((n[t + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
//             }
//             if (n.includes("throttle")) {
//               let t = n.indexOf("throttle");
//               n.splice(t, Za((n[t + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
//             }
//             if (0 === n.length) return !1;
//             if (1 === n.length && tu(t.key).includes(n[0])) return !1;
//             const r = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((t => n.includes(t)));
//             return n = n.filter((t => !r.includes(t))), !(r.length > 0 && r.filter((e => ("cmd" !== e && "super" !== e || (e = "meta"), t[`${e}Key`]))).length === r.length && tu(t.key).includes(n[0]))
//           }(r, n) || t(r)
//         })), i.addEventListener(e, o, s), () => {
//           i.removeEventListener(e, o, s)
//         }
//       }
  
//       function Za(t) {
//         return !Array.isArray(t) && !isNaN(t)
//       }
  
//       function tu(t) {
//         if (!t) return [];
//         var e;
//         t = [" ", "_"].includes(e = t) ? e : e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
//         let n = {
//           ctrl: "control",
//           slash: "/",
//           space: " ",
//           spacebar: " ",
//           cmd: "meta",
//           esc: "escape",
//           up: "arrow-up",
//           down: "arrow-down",
//           left: "arrow-left",
//           right: "arrow-right",
//           period: ".",
//           equal: "=",
//           minus: "-",
//           underscore: "_"
//         };
//         return n[t] = t, Object.keys(n).map((e => {
//           if (n[e] === t) return e
//         })).filter((t => t))
//       }
  
//       function eu(t) {
//         let e = t ? parseFloat(t) : null;
//         return n = e, Array.isArray(n) || isNaN(n) ? t : e;
//         var n
//       }
  
//       function nu(t) {
//         return null !== t && "object" == typeof t && "function" == typeof t.get && "function" == typeof t.set
//       }
//       Qa.inline = (t, {
//         modifiers: e
//       }, {
//         cleanup: n
//       }) => {
//         e.includes("self") ? t._x_ignoreSelf = !0 : t._x_ignore = !0, n((() => {
//           e.includes("self") ? delete t._x_ignoreSelf : delete t._x_ignore
//         }))
//       }, Io("ignore", Qa), Io("effect", ((t, {
//         expression: e
//       }, {
//         effect: n
//       }) => n(Oo(t, e)))), Io("model", ((t, {
//         modifiers: e,
//         expression: n
//       }, {
//         effect: r,
//         cleanup: i
//       }) => {
//         let o = t;
//         e.includes("parent") && (o = t.parentNode);
//         let s, a = Oo(o, n);
//         s = "string" == typeof n ? Oo(o, `${n} = __placeholder`) : "function" == typeof n && "string" == typeof n() ? Oo(o, `${n()} = __placeholder`) : () => {};
//         let u = () => {
//             let t;
//             return a((e => t = e)), nu(t) ? t.get() : t
//           },
//           c = t => {
//             let e;
//             a((t => e = t)), nu(e) ? e.set(t) : s((() => {}), {
//               scope: {
//                 __placeholder: t
//               }
//             })
//           };
//         "string" == typeof n && "radio" === t.type && co((() => {
//           t.hasAttribute("name") || t.setAttribute("name", n)
//         }));
//         var l = "select" === t.tagName.toLowerCase() || ["checkbox", "radio"].includes(t.type) || e.includes("lazy") ? "change" : "input";
//         let h = hs ? () => {} : Ja(t, l, e, (n => {
//           c(function(t, e, n, r) {
//             return co((() => {
//               if (n instanceof CustomEvent && void 0 !== n.detail) return n.detail ?? n.target.value;
//               if ("checkbox" === t.type) {
//                 if (Array.isArray(r)) {
//                   let t = e.includes("number") ? eu(n.target.value) : n.target.value;
//                   return n.target.checked ? r.concat([t]) : r.filter((e => !(e == t)))
//                 }
//                 return n.target.checked
//               }
//               if ("select" === t.tagName.toLowerCase() && t.multiple) return e.includes("number") ? Array.from(n.target.selectedOptions).map((t => eu(t.value || t.text))) : Array.from(n.target.selectedOptions).map((t => t.value || t.text)); {
//                 let t = n.target.value;
//                 return e.includes("number") ? eu(t) : e.includes("trim") ? t.trim() : t
//               }
//             }))
//           }(t, e, n, u()))
//         }));
//         if (e.includes("fill") && ([null, ""].includes(u()) || "checkbox" === t.type && Array.isArray(u())) && t.dispatchEvent(new Event(l, {})), t._x_removeModelListeners || (t._x_removeModelListeners = {}), t._x_removeModelListeners.default = h, i((() => t._x_removeModelListeners.default())), t.form) {
//           let e = Ja(t.form, "reset", [], (e => {
//             es((() => t._x_model && t._x_model.set(t.value)))
//           }));
//           i((() => e()))
//         }
//         t._x_model = {
//           get: () => u(),
//           set(t) {
//             c(t)
//           }
//         }, t._x_forceModelUpdate = e => {
//           void 0 === e && "string" == typeof n && n.match(/\./) && (e = ""), window.fromModel = !0, co((() => vs(t, "value", e))), delete window.fromModel
//         }, r((() => {
//           let n = u();
//           e.includes("unintrusive") && document.activeElement.isSameNode(t) || t._x_forceModelUpdate(n)
//         }))
//       })), Io("cloak", (t => queueMicrotask((() => co((() => t.removeAttribute(Do("cloak")))))))), Hi((() => `[${Do("init")}]`)), Io("init", fs(((t, {
//         expression: e
//       }, {
//         evaluate: n
//       }) => "string" == typeof e ? !!e.trim() && n(e, {}, !1) : n(e, {}, !1)))), Io("text", ((t, {
//         expression: e
//       }, {
//         effect: n,
//         evaluateLater: r
//       }) => {
//         let i = r(e);
//         n((() => {
//           i((e => {
//             co((() => {
//               t.textContent = e
//             }))
//           }))
//         }))
//       })), Io("html", ((t, {
//         expression: e
//       }, {
//         effect: n,
//         evaluateLater: r
//       }) => {
//         let i = r(e);
//         n((() => {
//           i((e => {
//             co((() => {
//               t.innerHTML = e, t._x_ignoreSelf = !0, Xi(t), delete t._x_ignoreSelf
//             }))
//           }))
//         }))
//       })), Yo(Ho(":", Do("bind:")));
//       var ru = (t, {
//         value: e,
//         modifiers: n,
//         expression: r,
//         original: i
//       }, {
//         effect: o
//       }) => {
//         if (!e) {
//           let e = {};
//           return s = e, Object.entries(Ts).forEach((([t, e]) => {
//             Object.defineProperty(s, t, {
//               get: () => (...t) => e(...t)
//             })
//           })), void Oo(t, r)((e => {
//             Ps(t, e, i)
//           }), {
//             scope: e
//           })
//         }
//         var s;
//         if ("key" === e) return function(t, e) {
//           t._x_keyExpression = e
//         }(t, r);
//         if (t._x_inlineBindings && t._x_inlineBindings[e] && t._x_inlineBindings[e].extract) return;
//         let a = Oo(t, r);
//         o((() => a((i => {
//           void 0 === i && "string" == typeof r && r.match(/\./) && (i = ""), co((() => vs(t, e, i, n)))
//         }))))
//       };
  
//       function iu(t, e, n, r) {
//         let i = {};
//         return /^\[.*\]$/.test(t.item) && Array.isArray(e) ? t.item.replace("[", "").replace("]", "").split(",").map((t => t.trim())).forEach(((t, n) => {
//           i[t] = e[n]
//         })) : /^\{.*\}$/.test(t.item) && !Array.isArray(e) && "object" == typeof e ? t.item.replace("{", "").replace("}", "").split(",").map((t => t.trim())).forEach((t => {
//           i[t] = e[t]
//         })) : i[t.item] = e, t.index && (i[t.index] = n), t.collection && (i[t.collection] = r), i
//       }
  
//       function ou() {}
  
//       function su(t, e, n) {
//         Io(e, (r => Ii(`You can't use [x-${e}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${n}`, r)))
//       }
//       ru.inline = (t, {
//         value: e,
//         modifiers: n,
//         expression: r
//       }) => {
//         e && (t._x_inlineBindings || (t._x_inlineBindings = {}), t._x_inlineBindings[e] = {
//           expression: r,
//           extract: !1
//         })
//       }, Io("bind", ru), Wi((() => `[${Do("data")}]`)), Io("data", ((t, {
//         expression: e
//       }, {
//         cleanup: n
//       }) => {
//         if (function(t) {
//             return !!hs && (!!ds || t.hasAttribute("data-has-alpine-state"))
//           }(t)) return;
//         e = "" === e ? "{}" : e;
//         let r = {};
//         ko(r, t);
//         let i = {};
//         var o, s;
//         o = i, s = r, Object.entries(Ms).forEach((([t, e]) => {
//           Object.defineProperty(o, t, {
//             get: () => (...t) => e.bind(s)(...t),
//             enumerable: !1
//           })
//         }));
//         let a = Ao(t, e, {
//           scope: i
//         });
//         void 0 !== a && !0 !== a || (a = {}), ko(a, t);
//         let u = ki(a);
//         yo(u);
//         let c = vo(t, u);
//         u.init && Ao(t, u.init), n((() => {
//           u.destroy && Ao(t, u.destroy), c()
//         }))
//       })), Io("show", ((t, {
//         modifiers: e,
//         expression: n
//       }, {
//         effect: r
//       }) => {
//         let i = Oo(t, n);
//         t._x_doHide || (t._x_doHide = () => {
//           co((() => {
//             t.style.setProperty("display", "none", e.includes("important") ? "important" : void 0)
//           }))
//         }), t._x_doShow || (t._x_doShow = () => {
//           co((() => {
//             1 === t.style.length && "none" === t.style.display ? t.removeAttribute("style") : t.style.removeProperty("display")
//           }))
//         });
//         let o, s = () => {
//             t._x_doHide(), t._x_isShown = !1
//           },
//           a = () => {
//             t._x_doShow(), t._x_isShown = !0
//           },
//           u = () => setTimeout(a),
//           c = ss((t => t ? a() : s()), (e => {
//             "function" == typeof t._x_toggleAndCascadeWithTransitions ? t._x_toggleAndCascadeWithTransitions(t, e, a, s) : e ? u() : s()
//           })),
//           l = !0;
//         r((() => i((t => {
//           (l || t !== o) && (e.includes("immediate") && (t ? u() : s()), c(t), o = t, l = !1)
//         }))))
//       })), Io("for", ((t, {
//         expression: e
//       }, {
//         effect: n,
//         cleanup: r
//       }) => {
//         let i = function(t) {
//             let e = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
//               n = t.match(/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/);
//             if (!n) return;
//             let r = {};
//             r.items = n[2].trim();
//             let i = n[1].replace(/^\s*\(|\)\s*$/g, "").trim(),
//               o = i.match(e);
//             return o ? (r.item = i.replace(e, "").trim(), r.index = o[1].trim(), o[2] && (r.collection = o[2].trim())) : r.item = i, r
//           }(e),
//           o = Oo(t, i.items),
//           s = Oo(t, t._x_keyExpression || "index");
//         t._x_prevKeys = [], t._x_lookup = {}, n((() => function(t, e, n, r) {
//           let i = t;
//           n((n => {
//             var o;
//             o = n, !Array.isArray(o) && !isNaN(o) && n >= 0 && (n = Array.from(Array(n).keys(), (t => t + 1))), void 0 === n && (n = []);
//             let s = t._x_lookup,
//               a = t._x_prevKeys,
//               u = [],
//               c = [];
//             if ("object" != typeof(l = n) || Array.isArray(l))
//               for (let t = 0; t < n.length; t++) {
//                 let i = iu(e, n[t], t, n);
//                 r((t => c.push(t)), {
//                   scope: {
//                     index: t,
//                     ...i
//                   }
//                 }), u.push(i)
//               } else n = Object.entries(n).map((([t, i]) => {
//                 let o = iu(e, i, t, n);
//                 r((t => c.push(t)), {
//                   scope: {
//                     index: t,
//                     ...o
//                   }
//                 }), u.push(o)
//               }));
//             var l;
//             let h = [],
//               f = [],
//               d = [],
//               p = [];
//             for (let t = 0; t < a.length; t++) {
//               let e = a[t]; - 1 === c.indexOf(e) && d.push(e)
//             }
//             a = a.filter((t => !d.includes(t)));
//             let v = "template";
//             for (let t = 0; t < c.length; t++) {
//               let e = c[t],
//                 n = a.indexOf(e);
//               if (-1 === n) a.splice(t, 0, e), h.push([v, t]);
//               else if (n !== t) {
//                 let e = a.splice(t, 1)[0],
//                   r = a.splice(n - 1, 1)[0];
//                 a.splice(t, 0, r), a.splice(n, 0, e), f.push([e, r])
//               } else p.push(e);
//               v = e
//             }
//             for (let t = 0; t < d.length; t++) {
//               let e = d[t];
//               s[e]._x_effects && s[e]._x_effects.forEach(Ci), s[e].remove(), s[e] = null, delete s[e]
//             }
//             for (let t = 0; t < f.length; t++) {
//               let [e, n] = f[t], r = s[e], o = s[n], a = document.createElement("div");
//               co((() => {
//                 o || Ii('x-for ":key" is undefined or invalid', i), o.after(a), r.after(o), o._x_currentIfEl && o.after(o._x_currentIfEl), a.before(r), r._x_currentIfEl && r.after(r._x_currentIfEl), a.remove()
//               })), o._x_refreshXForScope(u[c.indexOf(n)])
//             }
//             for (let t = 0; t < h.length; t++) {
//               let [e, n] = h[t], r = "template" === e ? i : s[e];
//               r._x_currentIfEl && (r = r._x_currentIfEl);
//               let o = u[n],
//                 a = c[n],
//                 l = document.importNode(i.content, !0).firstElementChild,
//                 f = ki(o);
//               vo(l, f, i), l._x_refreshXForScope = t => {
//                 Object.entries(t).forEach((([t, e]) => {
//                   f[t] = e
//                 }))
//               }, co((() => {
//                 r.after(l), Xi(l)
//               })), "object" == typeof a && Ii("x-for key cannot be an object, it must be a string or an integer", i), s[a] = l
//             }
//             for (let t = 0; t < p.length; t++) s[p[t]]._x_refreshXForScope(u[c.indexOf(p[t])]);
//             i._x_prevKeys = c
//           }))
//         }(t, i, o, s))), r((() => {
//           Object.values(t._x_lookup).forEach((t => t.remove())), delete t._x_prevKeys, delete t._x_lookup
//         }))
//       })), ou.inline = (t, {
//         expression: e
//       }, {
//         cleanup: n
//       }) => {
//         let r = Vi(t);
//         r._x_refs || (r._x_refs = {}), r._x_refs[e] = t, n((() => delete r._x_refs[e]))
//       }, Io("ref", ou), Io("if", ((t, {
//         expression: e
//       }, {
//         effect: n,
//         cleanup: r
//       }) => {
//         let i = Oo(t, e);
//         n((() => i((e => {
//           e ? (() => {
//             if (t._x_currentIfEl) return t._x_currentIfEl;
//             let e = t.content.cloneNode(!0).firstElementChild;
//             vo(e, {}, t), co((() => {
//               t.after(e), Xi(e)
//             })), t._x_currentIfEl = e, t._x_undoIf = () => {
//               ji(e, (t => {
//                 t._x_effects && t._x_effects.forEach(Ci)
//               })), e.remove(), delete t._x_currentIfEl
//             }
//           })() : t._x_undoIf && (t._x_undoIf(), delete t._x_undoIf)
//         })))), r((() => t._x_undoIf && t._x_undoIf()))
//       })), Io("id", ((t, {
//         expression: e
//       }, {
//         evaluate: n
//       }) => {
//         n(e).forEach((e => function(t, e) {
//           t._x_ids || (t._x_ids = {}), t._x_ids[e] || (t._x_ids[e] = Xa(e))
//         }(t, e)))
//       })), Yo(Ho("@", Do("on:"))), Io("on", fs(((t, {
//         value: e,
//         modifiers: n,
//         expression: r
//       }, {
//         cleanup: i
//       }) => {
//         let o = r ? Oo(t, r) : () => {};
//         "template" === t.tagName.toLowerCase() && (t._x_forwardEvents || (t._x_forwardEvents = []), t._x_forwardEvents.includes(e) || t._x_forwardEvents.push(e));
//         let s = Ja(t, e, n, (t => {
//           o((() => {}), {
//             scope: {
//               $event: t
//             },
//             params: [t]
//           })
//         }));
//         i((() => s()))
//       }))), su("Collapse", "collapse", "collapse"), su("Intersect", "intersect", "intersect"), su("Focus", "trap", "focus"), su("Mask", "mask", "mask"), Os.setEvaluator(Co), Os.setReactivityEngine({
//         reactive: Ba,
//         effect: function(t, e = Fs) {
//           (function(t) {
//             return t && !0 === t._isEffect
//           })(t) && (t = t.raw);
//           const n = function(t, e) {
//             const n = function() {
//               if (!n.active) return t();
//               if (!Gs.includes(n)) {
//                 Zs(n);
//                 try {
//                   return ea.push(ta), ta = !0, Gs.push(n), Cs = n, t()
//                 } finally {
//                   Gs.pop(), na(), Cs = Gs[Gs.length - 1]
//                 }
//               }
//             };
//             return n.id = Js++, n.allowRecurse = !!e.allowRecurse, n._isEffect = !0, n.active = !0, n.raw = t, n.deps = [], n.options = e, n
//           }(t, e);
//           return e.lazy || n(), n
//         },
//         release: function(t) {
//           t.active && (Zs(t), t.options.onStop && t.options.onStop(), t.active = !1)
//         },
//         raw: Va
//       });
//       var au = Os;
//       class uu {
//         static random(t, e) {
//           return void 0 === t ? Math.random() : void 0 === e ? Math.random() * t : t + Math.random() * (e - t)
//         }
//         static randomInt(t, e) {
//           return Math.floor(uu.random(t, e))
//         }
//         static constrain(t, e, n) {
//           return Math.max(Math.min(t, n), e)
//         }
//         static map(t, e, n, r, i) {
//           return (t - e) / (n - e) * (i - r) + r
//         }
//         static radians(t) {
//           return t * (2 * Math.PI / 360)
//         }
//         static dist(t, e, n, r) {
//           return Math.sqrt((t - n) * (t - n) + (e - r) * (e - r))
//         }
//         static lerp(t, e, n) {
//           return t + (e - t) * n
//         }
//         static calcViewportFov(t, e) {
//           return 2 * Math.atan(t / e) * (180 / Math.PI)
//         }
//       }
//       class cu {
//         constructor(t, e) {
//           this.x = t, this.velocity = 0, this.omega = e
//         }
//         update(t, e) {
//           const n = e,
//             r = this.velocity - (this.x - t) * (this.omega * this.omega * n),
//             i = 1 + this.omega * n;
//           this.velocity = r / (i * i), this.x += this.velocity * n
//         }
//         reset() {
//           this.x = 0, this.velocity = 0
//         }
//       }
//       class lu {
//         constructor({
//           x: t,
//           y: e
//         }, n) {
//           this.position = {
//             x: t,
//             y: e
//           }, this.velocity = {
//             x: 0,
//             y: 0
//           }, this.omega = n, this.direction = 0
//         }
//         update(t, e) {
//           const n = e,
//             r = this.velocity.x - (this.position.x - t.x) * (this.omega * this.omega * n),
//             i = this.velocity.y - (this.position.y - t.y) * (this.omega * this.omega * n),
//             o = 1 + this.omega * n;
//           this.velocity.x = r / (o * o), this.velocity.y = i / (o * o), this.position.x += this.velocity.x * n, this.position.y += this.velocity.y * n
//         }
//         calcDirection(t) {
//           this.direction = Math.atan2(this.position.y - t.y, this.position.x - t.x)
//         }
//         reset() {
//           this.position.x = 0, this.position.y = 0, this.velocity.x = 0, this.velocity.y = 0, this.direction = 0
//         }
//         set x(t) {
//           this.position.x = t
//         }
//         set y(t) {
//           this.position.y = t
//         }
//         get x() {
//           return this.position.x
//         }
//         get y() {
//           return this.position.y
//         }
//       }
//       class hu {
//         constructor(t, e = {
//           strictArea: !1,
//           useTouch: !1
//         }) {
//           this.strictArea = e.strictArea, this.useTouch = e.useTouch, this.$area = null, this.$target = null, this.direction = t, this.downPos = 0, this.prevPos = 0, this.targetScroll = 0, this.scroll = 0, this.velocity = 0, this.acceleration = 0, this.k = .4, this.max = 0, this.progress = 0, this.isPointerDown = !1, this.isDragging = !1, this.isAutoScrolling = !1, this.tween = new cu(0, 50), this.onWheelFunction = this.onWheel.bind(this), this.onKeyDownFunction = this.onKeyDown.bind(this), this.onDownFunction = this.onDown.bind(this), this.onMoveFunction = this.onMove.bind(this), this.onUpFunction = this.onUp.bind(this), this.onContextMenuFunc = this.onContextMenu.bind(this), this.listenerOption = {
//             capture: !0,
//             passive: !1
//           }, this.canceller = () => !1, this.resizeMng = new _i
//         }
//         setTarget(t) {
//           this.removeEvents(), this.$area = t, this.$target = this.$area.querySelector('[data-scroll="target"]'), this.setEvents(), this.reset(), this.resizeMng.setSizeFunc((() => {
//             const {
//               width: t,
//               height: e
//             } = this.$target.getBoundingClientRect();
//             return {
//               width: t + window.innerWidth,
//               height: e + window.innerHeight
//             }
//           }))
//         }
//         setCanceller(t) {
//           this.canceller = t
//         }
//         setEvents() {
//           if (!this.$target) return;
//           const t = this.strictArea ? this.$area : window;
//           bi.onWheelAvailable && t.addEventListener("wheel", this.onWheelFunction, this.listenerOption), !this.strictArea && bi.onKeydownAvailable && window.addEventListener("keydown", this.onKeyDownFunction), (bi.isTouch || this.useTouch) && (this.$area.addEventListener(bi.pointerdownEvent, this.onDownFunction, this.listenerOption), this.$area.addEventListener(bi.pointermoveEvent, this.onMoveFunction, this.listenerOption), this.$area.addEventListener(bi.pointerupEvent, this.onUpFunction, this.listenerOption)), bi.onContextmenuAvailable && window.addEventListener("contextmenu", this.onContextMenuFunc)
//         }
//         removeEvents() {
//           if (!this.$target) return;
//           const t = this.strictArea ? this.$area : window;
//           bi.onWheelAvailable && t.removeEventListener("wheel", this.onWheelFunction, this.listenerOption), !this.strictArea && bi.onKeydownAvailable && window.removeEventListener("keydown", this.onKeyDownFunction), (bi.isTouch || this.useTouch) && (this.$area.removeEventListener(bi.pointerdownEvent, this.onDownFunction, this.listenerOption), this.$area.removeEventListener(bi.pointermoveEvent, this.onMoveFunction, this.listenerOption), this.$area.removeEventListener(bi.pointerupEvent, this.onUpFunction, this.listenerOption)), bi.onContextmenuAvailable && window.removeEventListener("contextmenu", this.onContextMenuFunc)
//         }
//         getDownX(t) {
//           return bi.isTouch ? t.changedTouches[0].pageX : t.pageX
//         }
//         getDownY(t) {
//           return bi.isTouch ? t.changedTouches[0].pageY : t.pageY
//         }
//         getDownPos(t) {
//           return "vertical" === this.direction ? this.getDownY(t) : this.getDownX(t)
//         }
//         onWheel(t) {
//           if (this.canceller()) return;
//           t.preventDefault();
//           let e = 0;
//           e = "horizontal" === this.direction ? Math.abs(t.deltaY) >= Math.abs(t.deltaX) ? t.deltaY : t.deltaX : t.deltaY;
//           const n = e;
//           this.addTargetScroll(n)
//         }
//         onKeyDown(t) {
//           if (this.canceller()) return;
//           const e = t.code;
//           "ArrowUp" === e ? this.addTargetScroll(-500) : "ArrowDown" === e && this.addTargetScroll(500)
//         }
//         onDown(t) {
//           if (this.canceller()) return;
//           this.isPointerDown = !0;
//           const e = this.getDownPos(t);
//           this.downPos = e, this.prevPos = e
//         }
//         onMove(t) {
//           if (this.canceller()) return;
//           if (!this.isPointerDown) return;
//           t.preventDefault();
//           const e = this.getDownPos(t);
//           this.prevPos = this.downPos, this.downPos = e;
//           const n = this.prevPos - this.downPos;
//           this.addTargetScroll(n), this.isDragging = !0
//         }
//         onUp() {
//           this.canceller() || this.isPointerDown && (this.acceleration = -this.k * (this.scroll - this.targetScroll), this.downPos = 0, this.prevPos = 0, this.isPointerDown = !1, this.isDragging = !1)
//         }
//         onContextMenu() {
//           this.isPointerDown = !1
//         }
//         addTargetScroll(t) {
//           this.targetScroll = uu.constrain(this.targetScroll + t, 0, this.max)
//         }
//         update(t) {
//           this.canceller() || (this.resizeMng.check() && this.resize(), this.velocity += this.acceleration, this.targetScroll += this.velocity, this.velocity *= .9, this.acceleration = 0, this.targetScroll = uu.constrain(this.targetScroll, 0, this.max), this.tween.update(this.targetScroll, t), Math.abs(this.tween.velocity) < .01 && (this.tween.x = this.targetScroll), this.isAutoScrolling && (this.tween.x = this.targetScroll), this.scroll = this.tween.x, this.max > 0 ? this.progress = uu.constrain(this.scroll / this.max, 0, 1) : this.progress = 0, this.progress < 1e-4 && (this.progress = 0), this.$target.parentNode.style.setProperty("--scroll", this.progress))
//         }
//         reset() {
//           this.targetScroll = 0, this.scroll = 0, this.velocity = 0, this.acceleration = 0, this.max = 0, this.progress = 0, this.tween.reset()
//         }
//         scrollTo(t, e = 1) {
//           this.isAutoScrolling = !0, Hr.to(this, {
//             targetScroll: t,
//             duration: e,
//             onComplete: () => {
//               this.isAutoScrolling = !1
//             }
//           })
//         }
//         scrollBy(t, e = 1) {
//           this.isAutoScrolling = !0, Hr.to(this, {
//             targetScroll: this.targetScroll + t,
//             duration: e,
//             onComplete: () => {
//               this.isAutoScrolling = !1
//             }
//           })
//         }
//         scrollTop({
//           duration: t = 1
//         }) {
//           this.isAutoScrolling = !0, Hr.to(this, {
//             targetScroll: 0,
//             duration: t,
//             onComplete: () => {
//               this.isAutoScrolling = !1
//             }
//           })
//         }
//       }
//       class fu extends hu {
//         constructor(t) {
//           super("vertical", t)
//         }
//         resize() {
//           if (!this.$target) return;
//           const {
//             height: t
//           } = this.$target.getBoundingClientRect(), {
//             height: e
//           } = this.$target.parentNode.getBoundingClientRect();
//           this.max = Math.round(t - e)
//         }
//         update(t) {
//           super.update(t), this.$target.style.transform = `translate3d(0, ${-this.scroll}px, 0)`
//         }
//       }
//       class du extends hu {
//         constructor(t) {
//           super("horizontal", t)
//         }
//         resize() {
//           if (!this.$target) return;
//           const {
//             width: t
//           } = this.$target.getBoundingClientRect(), {
//             width: e
//           } = this.$target.parentNode.getBoundingClientRect();
//           this.max = Math.round(t - e)
//         }
//         update(t) {
//           super.update(t), this.$target.style.transform = `translate3d(${-this.scroll}px, 0, 0)`
//         }
//       }
//       const pu = {
//         pageId: "home",
//         isScrollable: !1,
//         isMenuOpen: !1,
//         init() {
//           this.scroll = null, this.$siteNavi = document.getElementById("SiteNavi")
//         },
//         changePage(t) {
//           this.pageId = t
//         },
//         update({
//           deltaTime: t
//         }) {
//           this.isScrollable && this.scroll.update(t)
//         },
//         setScrollArea(t, e) {
//           if (this.scroll && this.scroll.removeEvents(), "none" === t) return this.scroll = null, void(this.isScrollable = !1);
//           this.scroll = e ? new du : new fu, this.scroll.setTarget(t), this.isScrollable = !0
//         },
//         scrollBy(t) {
//           this.scroll.scrollBy(t)
//         },
//         scrollTo(t) {
//           this.scroll.scrollTo(t)
//         },
//         getScroll() {
//           return this.scroll
//         },
//         openMenu() {
//           Hr.fromTo(this.$siteNavi, {
//             opacity: 0
//           }, {
//             opacity: 1,
//             duration: .3,
//             onStart: () => {
//               this.isMenuOpen = !0, this.$siteNavi.style.display = "block"
//             }
//           })
//         },
//         closeMenu() {
//           Hr.to(this.$siteNavi, {
//             opacity: 0,
//             duration: .3,
//             onComplete: () => {
//               this.isMenuOpen = !1, this.$siteNavi.style.display = "none"
//             }
//           })
//         }
//       };
//       let vu = null;
//       class mu {
//         constructor() {
//           if (vu) return vu;
//           this.px = 0, this.py = 0, vu = this, this.init()
//         }
//         static getInstance() {
//           return vu || (vu = new mu), vu
//         }
//         static get x() {
//           return mu.getInstance().px
//         }
//         static get y() {
//           return mu.getInstance().py
//         }
//         init() {
//           document.addEventListener("pointermove", this.onPointerMove.bind(this))
//         }
//         onPointerMove(t) {
//           this.px = t.pageX, this.py = t.pageY
//         }
//       }
//       const gu = {
//         isOnWork: !1,
//         inOnText: !1,
//         isOnThumbnail: !1,
//         isOnFootPrint: !1,
//         init() {
//           bi.isTouch ? document.getElementById("Cursor").remove() : (document.body.classList.add("no-cursor"), this.$cursor = document.getElementById("Cursor"), this.tween = new lu({
//             x: mu.x,
//             y: mu.y
//           }, 50), this.onMoveFirstFunc = this.onMoveFirst.bind(this), document.addEventListener("pointermove", this.onMoveFirstFunc))
//         },
//         onMoveFirst() {
//           this.$cursor.classList.remove("hide"), document.removeEventListener("pointermove", this.onMoveFirstFunc)
//         },
//         state() {
//           return {
//             "on-work": this.isOnWork,
//             "on-text": this.inOnText,
//             "on-thumbnail": this.isOnThumbnail,
//             "on-footprint": this.isOnFootPrint
//           }
//         },
//         update({
//           deltaTime: t
//         }) {
//           this.tween.update({
//             x: mu.x,
//             y: mu.y
//           }, t), this.$cursor.style.transform = `translate3d(${this.tween.position.x}px, ${this.tween.position.y}px, 0)`
//         },
//         show() {
//           this.$cursor.classList.remove("hide")
//         },
//         hide() {
//           this.$cursor.classList.add("hide")
//         },
//         enterWork() {
//           this.isOnWork = !0
//         },
//         leaveWork() {
//           this.isOnWork = !1
//         },
//         enterText() {
//           this.inOnText = !0
//         },
//         leaveText() {
//           this.inOnText = !1
//         },
//         enterThumbnail() {
//           this.isOnThumbnail = !0
//         },
//         leaveThumbnail() {
//           this.isOnThumbnail = !1
//         },
//         enterFootPrint() {
//           this.isOnFootPrint = !0
//         },
//         leaveFootPrint() {
//           this.isOnFootPrint = !1
//         },
//         reset() {
//           this.isOnWork = !1, this.inOnText = !1, this.isOnThumbnail = !1, this.isOnFootPrint = !1
//         }
//       };
  
//       function yu(t, e) {
//         var n = Object.keys(t);
//         if (Object.getOwnPropertySymbols) {
//           var r = Object.getOwnPropertySymbols(t);
//           e && (r = r.filter((function(e) {
//             return Object.getOwnPropertyDescriptor(t, e).enumerable
//           }))), n.push.apply(n, r)
//         }
//         return n
//       }
  
//       function _u(t) {
//         for (var e = 1; e < arguments.length; e++) {
//           var n = null != arguments[e] ? arguments[e] : {};
//           e % 2 ? yu(Object(n), !0).forEach((function(e) {
//             Pu(t, e, n[e])
//           })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : yu(Object(n)).forEach((function(e) {
//             Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
//           }))
//         }
//         return t
//       }
  
//       function wu() {
//         wu = function() {
//           return t
//         };
//         var t = {},
//           e = Object.prototype,
//           n = e.hasOwnProperty,
//           r = Object.defineProperty || function(t, e, n) {
//             t[e] = n.value
//           },
//           i = "function" == typeof Symbol ? Symbol : {},
//           o = i.iterator || "@@iterator",
//           s = i.asyncIterator || "@@asyncIterator",
//           a = i.toStringTag || "@@toStringTag";
  
//         function u(t, e, n) {
//           return Object.defineProperty(t, e, {
//             value: n,
//             enumerable: !0,
//             configurable: !0,
//             writable: !0
//           }), t[e]
//         }
//         try {
//           u({}, "")
//         } catch (t) {
//           u = function(t, e, n) {
//             return t[e] = n
//           }
//         }
  
//         function c(t, e, n, i) {
//           var o = e && e.prototype instanceof f ? e : f,
//             s = Object.create(o.prototype),
//             a = new T(i || []);
//           return r(s, "_invoke", {
//             value: x(t, n, a)
//           }), s
//         }
  
//         function l(t, e, n) {
//           try {
//             return {
//               type: "normal",
//               arg: t.call(e, n)
//             }
//           } catch (t) {
//             return {
//               type: "throw",
//               arg: t
//             }
//           }
//         }
//         t.wrap = c;
//         var h = {};
  
//         function f() {}
  
//         function d() {}
  
//         function p() {}
//         var v = {};
//         u(v, o, (function() {
//           return this
//         }));
//         var m = Object.getPrototypeOf,
//           g = m && m(m(P([])));
//         g && g !== e && n.call(g, o) && (v = g);
//         var y = p.prototype = f.prototype = Object.create(v);
  
//         function _(t) {
//           ["next", "throw", "return"].forEach((function(e) {
//             u(t, e, (function(t) {
//               return this._invoke(e, t)
//             }))
//           }))
//         }
  
//         function w(t, e) {
//           function i(r, o, s, a) {
//             var u = l(t[r], t, o);
//             if ("throw" !== u.type) {
//               var c = u.arg,
//                 h = c.value;
//               return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then((function(t) {
//                 i("next", t, s, a)
//               }), (function(t) {
//                 i("throw", t, s, a)
//               })) : e.resolve(h).then((function(t) {
//                 c.value = t, s(c)
//               }), (function(t) {
//                 return i("throw", t, s, a)
//               }))
//             }
//             a(u.arg)
//           }
//           var o;
//           r(this, "_invoke", {
//             value: function(t, n) {
//               function r() {
//                 return new e((function(e, r) {
//                   i(t, n, e, r)
//                 }))
//               }
//               return o = o ? o.then(r, r) : r()
//             }
//           })
//         }
  
//         function x(t, e, n) {
//           var r = "suspendedStart";
//           return function(i, o) {
//             if ("executing" === r) throw new Error("Generator is already running");
//             if ("completed" === r) {
//               if ("throw" === i) throw o;
//               return {
//                 value: void 0,
//                 done: !0
//               }
//             }
//             for (n.method = i, n.arg = o;;) {
//               var s = n.delegate;
//               if (s) {
//                 var a = b(s, n);
//                 if (a) {
//                   if (a === h) continue;
//                   return a
//                 }
//               }
//               if ("next" === n.method) n.sent = n._sent = n.arg;
//               else if ("throw" === n.method) {
//                 if ("suspendedStart" === r) throw r = "completed", n.arg;
//                 n.dispatchException(n.arg)
//               } else "return" === n.method && n.abrupt("return", n.arg);
//               r = "executing";
//               var u = l(t, e, n);
//               if ("normal" === u.type) {
//                 if (r = n.done ? "completed" : "suspendedYield", u.arg === h) continue;
//                 return {
//                   value: u.arg,
//                   done: n.done
//                 }
//               }
//               "throw" === u.type && (r = "completed", n.method = "throw", n.arg = u.arg)
//             }
//           }
//         }
  
//         function b(t, e) {
//           var n = e.method,
//             r = t.iterator[n];
//           if (void 0 === r) return e.delegate = null, "throw" === n && t.iterator.return && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), h;
//           var i = l(r, t.iterator, e.arg);
//           if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, h;
//           var o = i.arg;
//           return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, h) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, h)
//         }
  
//         function k(t) {
//           var e = {
//             tryLoc: t[0]
//           };
//           1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
//         }
  
//         function E(t) {
//           var e = t.completion || {};
//           e.type = "normal", delete e.arg, t.completion = e
//         }
  
//         function T(t) {
//           this.tryEntries = [{
//             tryLoc: "root"
//           }], t.forEach(k, this), this.reset(!0)
//         }
  
//         function P(t) {
//           if (t) {
//             var e = t[o];
//             if (e) return e.call(t);
//             if ("function" == typeof t.next) return t;
//             if (!isNaN(t.length)) {
//               var r = -1,
//                 i = function e() {
//                   for (; ++r < t.length;)
//                     if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
//                   return e.value = void 0, e.done = !0, e
//                 };
//               return i.next = i
//             }
//           }
//           return {
//             next: M
//           }
//         }
  
//         function M() {
//           return {
//             value: void 0,
//             done: !0
//           }
//         }
//         return d.prototype = p, r(y, "constructor", {
//           value: p,
//           configurable: !0
//         }), r(p, "constructor", {
//           value: d,
//           configurable: !0
//         }), d.displayName = u(p, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
//           var e = "function" == typeof t && t.constructor;
//           return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
//         }, t.mark = function(t) {
//           return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, u(t, a, "GeneratorFunction")), t.prototype = Object.create(y), t
//         }, t.awrap = function(t) {
//           return {
//             __await: t
//           }
//         }, _(w.prototype), u(w.prototype, s, (function() {
//           return this
//         })), t.AsyncIterator = w, t.async = function(e, n, r, i, o) {
//           void 0 === o && (o = Promise);
//           var s = new w(c(e, n, r, i), o);
//           return t.isGeneratorFunction(n) ? s : s.next().then((function(t) {
//             return t.done ? t.value : s.next()
//           }))
//         }, _(y), u(y, a, "Generator"), u(y, o, (function() {
//           return this
//         })), u(y, "toString", (function() {
//           return "[object Generator]"
//         })), t.keys = function(t) {
//           var e = Object(t),
//             n = [];
//           for (var r in e) n.push(r);
//           return n.reverse(),
//             function t() {
//               for (; n.length;) {
//                 var r = n.pop();
//                 if (r in e) return t.value = r, t.done = !1, t
//               }
//               return t.done = !0, t
//             }
//         }, t.values = P, T.prototype = {
//           constructor: T,
//           reset: function(t) {
//             if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
//               for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
//           },
//           stop: function() {
//             this.done = !0;
//             var t = this.tryEntries[0].completion;
//             if ("throw" === t.type) throw t.arg;
//             return this.rval
//           },
//           dispatchException: function(t) {
//             if (this.done) throw t;
//             var e = this;
  
//             function r(n, r) {
//               return s.type = "throw", s.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
//             }
//             for (var i = this.tryEntries.length - 1; i >= 0; --i) {
//               var o = this.tryEntries[i],
//                 s = o.completion;
//               if ("root" === o.tryLoc) return r("end");
//               if (o.tryLoc <= this.prev) {
//                 var a = n.call(o, "catchLoc"),
//                   u = n.call(o, "finallyLoc");
//                 if (a && u) {
//                   if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
//                   if (this.prev < o.finallyLoc) return r(o.finallyLoc)
//                 } else if (a) {
//                   if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
//                 } else {
//                   if (!u) throw new Error("try statement without catch or finally");
//                   if (this.prev < o.finallyLoc) return r(o.finallyLoc)
//                 }
//               }
//             }
//           },
//           abrupt: function(t, e) {
//             for (var r = this.tryEntries.length - 1; r >= 0; --r) {
//               var i = this.tryEntries[r];
//               if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
//                 var o = i;
//                 break
//               }
//             }
//             o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
//             var s = o ? o.completion : {};
//             return s.type = t, s.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(s)
//           },
//           complete: function(t, e) {
//             if ("throw" === t.type) throw t.arg;
//             return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), h
//           },
//           finish: function(t) {
//             for (var e = this.tryEntries.length - 1; e >= 0; --e) {
//               var n = this.tryEntries[e];
//               if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), E(n), h
//             }
//           },
//           catch: function(t) {
//             for (var e = this.tryEntries.length - 1; e >= 0; --e) {
//               var n = this.tryEntries[e];
//               if (n.tryLoc === t) {
//                 var r = n.completion;
//                 if ("throw" === r.type) {
//                   var i = r.arg;
//                   E(n)
//                 }
//                 return i
//               }
//             }
//             throw new Error("illegal catch attempt")
//           },
//           delegateYield: function(t, e, n) {
//             return this.delegate = {
//               iterator: P(t),
//               resultName: e,
//               nextLoc: n
//             }, "next" === this.method && (this.arg = void 0), h
//           }
//         }, t
//       }
  
//       function xu(t, e, n, r, i, o, s) {
//         try {
//           var a = t[o](s),
//             u = a.value
//         } catch (t) {
//           return void n(t)
//         }
//         a.done ? e(u) : Promise.resolve(u).then(r, i)
//       }
  
//       function bu(t) {
//         return function() {
//           var e = this,
//             n = arguments;
//           return new Promise((function(r, i) {
//             var o = t.apply(e, n);
  
//             function s(t) {
//               xu(o, r, i, s, a, "next", t)
//             }
  
//             function a(t) {
//               xu(o, r, i, s, a, "throw", t)
//             }
//             s(void 0)
//           }))
//         }
//       }
  
//       function ku(t, e) {
//         if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
//       }
  
//       function Eu(t, e) {
//         for (var n = 0; n < e.length; n++) {
//           var r = e[n];
//           r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Lu(r.key), r)
//         }
//       }
  
//       function Tu(t, e, n) {
//         return e && Eu(t.prototype, e), n && Eu(t, n), Object.defineProperty(t, "prototype", {
//           writable: !1
//         }), t
//       }
  
//       function Pu(t, e, n) {
//         return (e = Lu(e)) in t ? Object.defineProperty(t, e, {
//           value: n,
//           enumerable: !0,
//           configurable: !0,
//           writable: !0
//         }) : t[e] = n, t
//       }
  
//       function Mu(t) {
//         return Mu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
//           return t.__proto__ || Object.getPrototypeOf(t)
//         }, Mu(t)
//       }
  
//       function Au(t, e) {
//         return Au = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
//           return t.__proto__ = e, t
//         }, Au(t, e)
//       }
  
//       function Ou() {
//         if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
//         if (Reflect.construct.sham) return !1;
//         if ("function" == typeof Proxy) return !0;
//         try {
//           return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
//         } catch (t) {
//           return !1
//         }
//       }
  
//       function Su(t, e, n) {
//         return Su = Ou() ? Reflect.construct.bind() : function(t, e, n) {
//           var r = [null];
//           r.push.apply(r, e);
//           var i = new(Function.bind.apply(t, r));
//           return n && Au(i, n.prototype), i
//         }, Su.apply(null, arguments)
//       }
  
//       function Cu(t) {
//         var e = "function" == typeof Map ? new Map : void 0;
//         return Cu = function(t) {
//           if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
//           var n;
//           if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
//           if (void 0 !== e) {
//             if (e.has(t)) return e.get(t);
//             e.set(t, r)
//           }
  
//           function r() {
//             return Su(t, arguments, Mu(this).constructor)
//           }
//           return r.prototype = Object.create(t.prototype, {
//             constructor: {
//               value: r,
//               enumerable: !1,
//               writable: !0,
//               configurable: !0
//             }
//           }), Au(r, t)
//         }, Cu(t)
//       }
  
//       function Fu(t) {
//         if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//         return t
//       }
  
//       function Lu(t) {
//         var e = function(t, e) {
//           if ("object" != typeof t || null === t) return t;
//           var n = t[Symbol.toPrimitive];
//           if (void 0 !== n) {
//             var r = n.call(t, "string");
//             if ("object" != typeof r) return r;
//             throw new TypeError("@@toPrimitive must return a primitive value.")
//           }
//           return String(t)
//         }(t);
//         return "symbol" == typeof e ? e : String(e)
//       }
//       var Ru = void 0 !== n.g && "[object global]" === {}.toString.call(n.g);
  
//       function Du(t, e) {
//         return 0 === t.indexOf(e.toLowerCase()) ? t : "".concat(e.toLowerCase()).concat(t.substr(0, 1).toUpperCase()).concat(t.substr(1))
//       }
  
//       function ju(t) {
//         return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(t)
//       }
  
//       function Iu(t) {
//         return /^https:\/\/player\.vimeo\.com\/video\/\d+/.test(t)
//       }
  
//       function $u() {
//         var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
//           n = e.id,
//           r = e.url,
//           i = n || r;
//         if (!i) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
//         if (t = i, !isNaN(parseFloat(t)) && isFinite(t) && Math.floor(t) == t) return "https://vimeo.com/".concat(i);
//         if (ju(i)) return i.replace("http:", "https:");
//         if (n) throw new TypeError("“".concat(n, "” is not a valid video id."));
//         throw new TypeError("“".concat(i, "” is not a vimeo.com url."))
//       }
//       var Nu = function(t, e, n) {
//           var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "addEventListener",
//             i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "removeEventListener",
//             o = "string" == typeof e ? [e] : e;
//           return o.forEach((function(e) {
//             t[r](e, n)
//           })), {
//             cancel: function() {
//               return o.forEach((function(e) {
//                 return t[i](e, n)
//               }))
//             }
//           }
//         },
//         zu = void 0 !== Array.prototype.indexOf,
//         qu = "undefined" != typeof window && void 0 !== window.postMessage;
//       if (!(Ru || zu && qu)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
//       var Bu = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {};
//       ! function(t) {
//         if (!t.WeakMap) {
//           var e = Object.prototype.hasOwnProperty,
//             n = Object.defineProperty && function() {
//               try {
//                 return 1 === Object.defineProperty({}, "x", {
//                   value: 1
//                 }).x
//               } catch (t) {}
//             }(),
//             r = function(t, e, r) {
//               n ? Object.defineProperty(t, e, {
//                 configurable: !0,
//                 writable: !0,
//                 value: r
//               }) : t[e] = r
//             };
//           t.WeakMap = function() {
//             function t() {
//               if (void 0 === this) throw new TypeError("Constructor WeakMap requires 'new'");
//               if (r(this, "_id", "_WeakMap_" + o() + "." + o()), arguments.length > 0) throw new TypeError("WeakMap iterable is not supported")
//             }
  
//             function n(t, n) {
//               if (!i(t) || !e.call(t, "_id")) throw new TypeError(n + " method called on incompatible receiver " + typeof t)
//             }
  
//             function o() {
//               return Math.random().toString().substring(2)
//             }
//             return r(t.prototype, "delete", (function(t) {
//               if (n(this, "delete"), !i(t)) return !1;
//               var e = t[this._id];
//               return !(!e || e[0] !== t || (delete t[this._id], 0))
//             })), r(t.prototype, "get", (function(t) {
//               if (n(this, "get"), i(t)) {
//                 var e = t[this._id];
//                 return e && e[0] === t ? e[1] : void 0
//               }
//             })), r(t.prototype, "has", (function(t) {
//               if (n(this, "has"), !i(t)) return !1;
//               var e = t[this._id];
//               return !(!e || e[0] !== t)
//             })), r(t.prototype, "set", (function(t, e) {
//               if (n(this, "set"), !i(t)) throw new TypeError("Invalid value used as weak map key");
//               var o = t[this._id];
//               return o && o[0] === t ? (o[1] = e, this) : (r(t, this._id, [t, e]), this)
//             })), r(t, "_polyfill", !0), t
//           }()
//         }
  
//         function i(t) {
//           return Object(t) === t
//         }
//       }("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : Bu);
//       var Wu, Hu, Vu = (Wu = function(t) {
//           var e, n, r;
//           r = function() {
//             var t, e, n, r = Object.prototype.toString,
//               i = "undefined" != typeof setImmediate ? function(t) {
//                 return setImmediate(t)
//               } : setTimeout;
//             try {
//               Object.defineProperty({}, "x", {}), t = function(t, e, n, r) {
//                 return Object.defineProperty(t, e, {
//                   value: n,
//                   writable: !0,
//                   configurable: !1 !== r
//                 })
//               }
//             } catch (e) {
//               t = function(t, e, n) {
//                 return t[e] = n, t
//               }
//             }
  
//             function o(t, r) {
//               n.add(t, r), e || (e = i(n.drain))
//             }
  
//             function s(t) {
//               var e, n = typeof t;
//               return null == t || "object" != n && "function" != n || (e = t.then), "function" == typeof e && e
//             }
  
//             function a() {
//               for (var t = 0; t < this.chain.length; t++) u(this, 1 === this.state ? this.chain[t].success : this.chain[t].failure, this.chain[t]);
//               this.chain.length = 0
//             }
  
//             function u(t, e, n) {
//               var r, i;
//               try {
//                 !1 === e ? n.reject(t.msg) : (r = !0 === e ? t.msg : e.call(void 0, t.msg)) === n.promise ? n.reject(TypeError("Promise-chain cycle")) : (i = s(r)) ? i.call(r, n.resolve, n.reject) : n.resolve(r)
//               } catch (t) {
//                 n.reject(t)
//               }
//             }
  
//             function c(t) {
//               var e, n = this;
//               if (!n.triggered) {
//                 n.triggered = !0, n.def && (n = n.def);
//                 try {
//                   (e = s(t)) ? o((function() {
//                     var r = new f(n);
//                     try {
//                       e.call(t, (function() {
//                         c.apply(r, arguments)
//                       }), (function() {
//                         l.apply(r, arguments)
//                       }))
//                     } catch (t) {
//                       l.call(r, t)
//                     }
//                   })): (n.msg = t, n.state = 1, n.chain.length > 0 && o(a, n))
//                 } catch (t) {
//                   l.call(new f(n), t)
//                 }
//               }
//             }
  
//             function l(t) {
//               var e = this;
//               e.triggered || (e.triggered = !0, e.def && (e = e.def), e.msg = t, e.state = 2, e.chain.length > 0 && o(a, e))
//             }
  
//             function h(t, e, n, r) {
//               for (var i = 0; i < e.length; i++) ! function(i) {
//                 t.resolve(e[i]).then((function(t) {
//                   n(i, t)
//                 }), r)
//               }(i)
//             }
  
//             function f(t) {
//               this.def = t, this.triggered = !1
//             }
  
//             function d(t) {
//               this.promise = t, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
//             }
  
//             function p(t) {
//               if ("function" != typeof t) throw TypeError("Not a function");
//               if (0 !== this.__NPO__) throw TypeError("Not a promise");
//               this.__NPO__ = 1;
//               var e = new d(this);
//               this.then = function(t, n) {
//                 var r = {
//                   success: "function" != typeof t || t,
//                   failure: "function" == typeof n && n
//                 };
//                 return r.promise = new this.constructor((function(t, e) {
//                   if ("function" != typeof t || "function" != typeof e) throw TypeError("Not a function");
//                   r.resolve = t, r.reject = e
//                 })), e.chain.push(r), 0 !== e.state && o(a, e), r.promise
//               }, this.catch = function(t) {
//                 return this.then(void 0, t)
//               };
//               try {
//                 t.call(void 0, (function(t) {
//                   c.call(e, t)
//                 }), (function(t) {
//                   l.call(e, t)
//                 }))
//               } catch (t) {
//                 l.call(e, t)
//               }
//             }
//             n = function() {
//               var t, n, r;
  
//               function i(t, e) {
//                 this.fn = t, this.self = e, this.next = void 0
//               }
//               return {
//                 add: function(e, o) {
//                   r = new i(e, o), n ? n.next = r : t = r, n = r, r = void 0
//                 },
//                 drain: function() {
//                   var r = t;
//                   for (t = n = e = void 0; r;) r.fn.call(r.self), r = r.next
//                 }
//               }
//             }();
//             var v = t({}, "constructor", p, !1);
//             return p.prototype = v, t(v, "__NPO__", 0, !1), t(p, "resolve", (function(t) {
//               return t && "object" == typeof t && 1 === t.__NPO__ ? t : new this((function(e, n) {
//                 if ("function" != typeof e || "function" != typeof n) throw TypeError("Not a function");
//                 e(t)
//               }))
//             })), t(p, "reject", (function(t) {
//               return new this((function(e, n) {
//                 if ("function" != typeof e || "function" != typeof n) throw TypeError("Not a function");
//                 n(t)
//               }))
//             })), t(p, "all", (function(t) {
//               var e = this;
//               return "[object Array]" != r.call(t) ? e.reject(TypeError("Not an array")) : 0 === t.length ? e.resolve([]) : new e((function(n, r) {
//                 if ("function" != typeof n || "function" != typeof r) throw TypeError("Not a function");
//                 var i = t.length,
//                   o = Array(i),
//                   s = 0;
//                 h(e, t, (function(t, e) {
//                   o[t] = e, ++s === i && n(o)
//                 }), r)
//               }))
//             })), t(p, "race", (function(t) {
//               var e = this;
//               return "[object Array]" != r.call(t) ? e.reject(TypeError("Not an array")) : new e((function(n, r) {
//                 if ("function" != typeof n || "function" != typeof r) throw TypeError("Not a function");
//                 h(e, t, (function(t, e) {
//                   n(e)
//                 }), r)
//               }))
//             })), p
//           }, (n = Bu)[e = "Promise"] = n[e] || r(), t.exports && (t.exports = n[e])
//         }, Wu(Hu = {
//           exports: {}
//         }), Hu.exports),
//         Uu = new WeakMap;
  
//       function Yu(t, e, n) {
//         var r = Uu.get(t.element) || {};
//         e in r || (r[e] = []), r[e].push(n), Uu.set(t.element, r)
//       }
  
//       function Xu(t, e) {
//         return (Uu.get(t.element) || {})[e] || []
//       }
  
//       function Gu(t, e, n) {
//         var r = Uu.get(t.element) || {};
//         if (!r[e]) return !0;
//         if (!n) return r[e] = [], Uu.set(t.element, r), !0;
//         var i = r[e].indexOf(n);
//         return -1 !== i && r[e].splice(i, 1), Uu.set(t.element, r), r[e] && 0 === r[e].length
//       }
  
//       function Ku(t) {
//         if ("string" == typeof t) try {
//           t = JSON.parse(t)
//         } catch (t) {
//           return console.warn(t), {}
//         }
//         return t
//       }
  
//       function Qu(t, e, n) {
//         if (t.element.contentWindow && t.element.contentWindow.postMessage) {
//           var r = {
//             method: e
//           };
//           void 0 !== n && (r.value = n);
//           var i = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
//           i >= 8 && i < 10 && (r = JSON.stringify(r)), t.element.contentWindow.postMessage(r, t.origin)
//         }
//       }
//       var Ju = ["autopause", "autoplay", "background", "byline", "color", "colors", "controls", "dnt", "height", "id", "interactive_params", "keyboard", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];
  
//       function Zu(t) {
//         var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
//         return Ju.reduce((function(e, n) {
//           var r = t.getAttribute("data-vimeo-".concat(n));
//           return (r || "" === r) && (e[n] = "" === r ? 1 : r), e
//         }), e)
//       }
  
//       function tc(t, e) {
//         var n = t.html;
//         if (!e) throw new TypeError("An element must be provided");
//         if (null !== e.getAttribute("data-vimeo-initialized")) return e.querySelector("iframe");
//         var r = document.createElement("div");
//         return r.innerHTML = n, e.appendChild(r.firstChild), e.setAttribute("data-vimeo-initialized", "true"), e.querySelector("iframe")
//       }
  
//       function ec(t) {
//         var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
//           n = arguments.length > 2 ? arguments[2] : void 0;
//         return new Promise((function(r, i) {
//           if (!ju(t)) throw new TypeError("“".concat(t, "” is not a vimeo.com url."));
//           var o = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(t));
//           for (var s in e) e.hasOwnProperty(s) && (o += "&".concat(s, "=").concat(encodeURIComponent(e[s])));
//           var a = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
//           a.open("GET", o, !0), a.onload = function() {
//             if (404 !== a.status)
//               if (403 !== a.status) try {
//                 var e = JSON.parse(a.responseText);
//                 if (403 === e.domain_status_code) return tc(e, n), void i(new Error("“".concat(t, "” is not embeddable.")));
//                 r(e)
//               } catch (t) {
//                 i(t)
//               } else i(new Error("“".concat(t, "” is not embeddable.")));
//               else i(new Error("“".concat(t, "” was not found.")))
//           }, a.onerror = function() {
//             var t = a.status ? " (".concat(a.status, ")") : "";
//             i(new Error("There was an error fetching the embed code from Vimeo".concat(t, ".")))
//           }, a.send()
//         }))
//       }
//       var nc = {
//           role: "viewer",
//           autoPlayMuted: !0,
//           allowedDrift: .3,
//           maxAllowedDrift: 1,
//           minCheckInterval: .1,
//           maxRateAdjustment: .2,
//           maxTimeToCatchUp: 1
//         },
//         rc = function(t) {
//           ! function(t, e) {
//             if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
//             t.prototype = Object.create(e && e.prototype, {
//               constructor: {
//                 value: t,
//                 writable: !0,
//                 configurable: !0
//               }
//             }), Object.defineProperty(t, "prototype", {
//               writable: !1
//             }), e && Au(t, e)
//           }(a, t);
//           var e, n, r, i, o, s = (i = a, o = Ou(), function() {
//             var t, e = Mu(i);
//             if (o) {
//               var n = Mu(this).constructor;
//               t = Reflect.construct(e, arguments, n)
//             } else t = e.apply(this, arguments);
//             return function(t, e) {
//               if (e && ("object" == typeof e || "function" == typeof e)) return e;
//               if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
//               return Fu(t)
//             }(this, t)
//           });
  
//           function a(t, e) {
//             var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
//               i = arguments.length > 3 ? arguments[3] : void 0;
//             return ku(this, a), Pu(Fu(n = s.call(this)), "logger", void 0), Pu(Fu(n), "speedAdjustment", 0), Pu(Fu(n), "adjustSpeed", function() {
//               var t = bu(wu().mark((function t(e, r) {
//                 var i;
//                 return wu().wrap((function(t) {
//                   for (;;) switch (t.prev = t.next) {
//                     case 0:
//                       if (n.speedAdjustment !== r) {
//                         t.next = 2;
//                         break
//                       }
//                       return t.abrupt("return");
//                     case 2:
//                       return t.next = 4, e.getPlaybackRate();
//                     case 4:
//                       return t.t0 = t.sent, t.t1 = n.speedAdjustment, t.t2 = t.t0 - t.t1, t.t3 = r, i = t.t2 + t.t3, n.log("New playbackRate:  ".concat(i)), t.next = 12, e.setPlaybackRate(i);
//                     case 12:
//                       n.speedAdjustment = r;
//                     case 13:
//                     case "end":
//                       return t.stop()
//                   }
//                 }), t)
//               })));
//               return function(e, n) {
//                 return t.apply(this, arguments)
//               }
//             }()), n.logger = i, n.init(e, t, _u(_u({}, nc), r)), n
//           }
//           return Tu(a, [{
//             key: "disconnect",
//             value: function() {
//               this.dispatchEvent(new Event("disconnect"))
//             }
//           }, {
//             key: "init",
//             value: (r = bu(wu().mark((function t(e, n, r) {
//               var i, o, s, a = this;
//               return wu().wrap((function(t) {
//                 for (;;) switch (t.prev = t.next) {
//                   case 0:
//                     return t.next = 2, this.waitForTOReadyState(e, "open");
//                   case 2:
//                     if ("viewer" !== r.role) {
//                       t.next = 10;
//                       break
//                     }
//                     return t.next = 5, this.updatePlayer(e, n, r);
//                   case 5:
//                     i = Nu(e, "change", (function() {
//                       return a.updatePlayer(e, n, r)
//                     })), o = this.maintainPlaybackPosition(e, n, r), this.addEventListener("disconnect", (function() {
//                       o.cancel(), i.cancel()
//                     })), t.next = 14;
//                     break;
//                   case 10:
//                     return t.next = 12, this.updateTimingObject(e, n);
//                   case 12:
//                     s = Nu(n, ["seeked", "play", "pause", "ratechange"], (function() {
//                       return a.updateTimingObject(e, n)
//                     }), "on", "off"), this.addEventListener("disconnect", (function() {
//                       return s.cancel()
//                     }));
//                   case 14:
//                   case "end":
//                     return t.stop()
//                 }
//               }), t, this)
//             }))), function(t, e, n) {
//               return r.apply(this, arguments)
//             })
//           }, {
//             key: "updateTimingObject",
//             value: (n = bu(wu().mark((function t(e, n) {
//               return wu().wrap((function(t) {
//                 for (;;) switch (t.prev = t.next) {
//                   case 0:
//                     return t.t0 = e, t.next = 3, n.getCurrentTime();
//                   case 3:
//                     return t.t1 = t.sent, t.next = 6, n.getPaused();
//                   case 6:
//                     if (!t.sent) {
//                       t.next = 10;
//                       break
//                     }
//                     t.t2 = 0, t.next = 13;
//                     break;
//                   case 10:
//                     return t.next = 12, n.getPlaybackRate();
//                   case 12:
//                     t.t2 = t.sent;
//                   case 13:
//                     t.t3 = t.t2, t.t4 = {
//                       position: t.t1,
//                       velocity: t.t3
//                     }, t.t0.update.call(t.t0, t.t4);
//                   case 16:
//                   case "end":
//                     return t.stop()
//                 }
//               }), t)
//             }))), function(t, e) {
//               return n.apply(this, arguments)
//             })
//           }, {
//             key: "updatePlayer",
//             value: (e = bu(wu().mark((function t(e, n, r) {
//               var i, o, s;
//               return wu().wrap((function(t) {
//                 for (;;) switch (t.prev = t.next) {
//                   case 0:
//                     if (i = e.query(), o = i.position, s = i.velocity, "number" == typeof o && n.setCurrentTime(o), "number" != typeof s) {
//                       t.next = 25;
//                       break
//                     }
//                     if (0 !== s) {
//                       t.next = 11;
//                       break
//                     }
//                     return t.next = 6, n.getPaused();
//                   case 6:
//                     if (t.t0 = t.sent, !1 !== t.t0) {
//                       t.next = 9;
//                       break
//                     }
//                     n.pause();
//                   case 9:
//                     t.next = 25;
//                     break;
//                   case 11:
//                     if (!(s > 0)) {
//                       t.next = 25;
//                       break
//                     }
//                     return t.next = 14, n.getPaused();
//                   case 14:
//                     if (t.t1 = t.sent, !0 !== t.t1) {
//                       t.next = 19;
//                       break
//                     }
//                     return t.next = 18, n.play().catch(function() {
//                       var t = bu(wu().mark((function t(e) {
//                         return wu().wrap((function(t) {
//                           for (;;) switch (t.prev = t.next) {
//                             case 0:
//                               if ("NotAllowedError" !== e.name || !r.autoPlayMuted) {
//                                 t.next = 5;
//                                 break
//                               }
//                               return t.next = 3, n.setMuted(!0);
//                             case 3:
//                               return t.next = 5, n.play().catch((function(t) {
//                                 return console.error("Couldn't play the video from TimingSrcConnector. Error:", t)
//                               }));
//                             case 5:
//                             case "end":
//                               return t.stop()
//                           }
//                         }), t)
//                       })));
//                       return function(e) {
//                         return t.apply(this, arguments)
//                       }
//                     }());
//                   case 18:
//                     this.updatePlayer(e, n, r);
//                   case 19:
//                     return t.next = 21, n.getPlaybackRate();
//                   case 21:
//                     if (t.t2 = t.sent, t.t3 = s, t.t2 === t.t3) {
//                       t.next = 25;
//                       break
//                     }
//                     n.setPlaybackRate(s);
//                   case 25:
//                   case "end":
//                     return t.stop()
//                 }
//               }), t, this)
//             }))), function(t, n, r) {
//               return e.apply(this, arguments)
//             })
//           }, {
//             key: "maintainPlaybackPosition",
//             value: function(t, e, n) {
//               var r = this,
//                 i = n.allowedDrift,
//                 o = n.maxAllowedDrift,
//                 s = n.minCheckInterval,
//                 a = n.maxRateAdjustment,
//                 u = n.maxTimeToCatchUp,
//                 c = 1e3 * Math.min(u, Math.max(s, o)),
//                 l = function() {
//                   var n = bu(wu().mark((function n() {
//                     var s, c, l, h, f;
//                     return wu().wrap((function(n) {
//                       for (;;) switch (n.prev = n.next) {
//                         case 0:
//                           if (n.t0 = 0 === t.query().velocity, n.t0) {
//                             n.next = 6;
//                             break
//                           }
//                           return n.next = 4, e.getPaused();
//                         case 4:
//                           n.t1 = n.sent, n.t0 = !0 === n.t1;
//                         case 6:
//                           if (!n.t0) {
//                             n.next = 8;
//                             break
//                           }
//                           return n.abrupt("return");
//                         case 8:
//                           return n.t2 = t.query().position, n.next = 11, e.getCurrentTime();
//                         case 11:
//                           if (n.t3 = n.sent, s = n.t2 - n.t3, c = Math.abs(s), r.log("Drift: ".concat(s)), !(c > o)) {
//                             n.next = 22;
//                             break
//                           }
//                           return n.next = 18, r.adjustSpeed(e, 0);
//                         case 18:
//                           e.setCurrentTime(t.query().position), r.log("Resync by currentTime"), n.next = 29;
//                           break;
//                         case 22:
//                           if (!(c > i)) {
//                             n.next = 29;
//                             break
//                           }
//                           return f = (l = c / u) < (h = a) ? (h - l) / 2 : h, n.next = 28, r.adjustSpeed(e, f * Math.sign(s));
//                         case 28:
//                           r.log("Resync by playbackRate");
//                         case 29:
//                         case "end":
//                           return n.stop()
//                       }
//                     }), n)
//                   })));
//                   return function() {
//                     return n.apply(this, arguments)
//                   }
//                 }(),
//                 h = setInterval((function() {
//                   return l()
//                 }), c);
//               return {
//                 cancel: function() {
//                   return clearInterval(h)
//                 }
//               }
//             }
//           }, {
//             key: "log",
//             value: function(t) {
//               var e;
//               null === (e = this.logger) || void 0 === e || e.call(this, "TimingSrcConnector: ".concat(t))
//             }
//           }, {
//             key: "waitForTOReadyState",
//             value: function(t, e) {
//               return new Promise((function(n) {
//                 ! function r() {
//                   t.readyState === e ? n() : t.addEventListener("readystatechange", r, {
//                     once: !0
//                   })
//                 }()
//               }))
//             }
//           }]), a
//         }(Cu(EventTarget)),
//         ic = new WeakMap,
//         oc = new WeakMap,
//         sc = {},
//         ac = function() {
//           function t(e) {
//             var n = this,
//               r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
//             if (ku(this, t), window.jQuery && e instanceof jQuery && (e.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), e = e[0]), "undefined" != typeof document && "string" == typeof e && (e = document.getElementById(e)), ! function(t) {
//                 return Boolean(t && 1 === t.nodeType && "nodeName" in t && t.ownerDocument && t.ownerDocument.defaultView)
//               }(e)) throw new TypeError("You must pass either a valid element or a valid id.");
//             if ("IFRAME" !== e.nodeName) {
//               var i = e.querySelector("iframe");
//               i && (e = i)
//             }
//             if ("IFRAME" === e.nodeName && !ju(e.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed.");
//             if (ic.has(e)) return ic.get(e);
//             this._window = e.ownerDocument.defaultView, this.element = e, this.origin = "*";
//             var o = new Vu((function(t, i) {
//               if (n._onMessage = function(e) {
//                   if (ju(e.origin) && n.element.contentWindow === e.source) {
//                     "*" === n.origin && (n.origin = e.origin);
//                     var r = Ku(e.data);
//                     if (r && "error" === r.event && r.data && "ready" === r.data.method) {
//                       var o = new Error(r.data.message);
//                       return o.name = r.data.name, void i(o)
//                     }
//                     var s = r && "ready" === r.event,
//                       a = r && "ping" === r.method;
//                     if (s || a) return n.element.setAttribute("data-ready", "true"), void t();
//                     ! function(t, e) {
//                       var n, r = [];
//                       if ((e = Ku(e)).event) "error" === e.event && Xu(t, e.data.method).forEach((function(n) {
//                         var r = new Error(e.data.message);
//                         r.name = e.data.name, n.reject(r), Gu(t, e.data.method, n)
//                       })), r = Xu(t, "event:".concat(e.event)), n = e.data;
//                       else if (e.method) {
//                         var i = function(t, e) {
//                           var n = Xu(t, e);
//                           if (n.length < 1) return !1;
//                           var r = n.shift();
//                           return Gu(t, e, r), r
//                         }(t, e.method);
//                         i && (r.push(i), n = e.value)
//                       }
//                       r.forEach((function(e) {
//                         try {
//                           if ("function" == typeof e) return void e.call(t, n);
//                           e.resolve(n)
//                         } catch (t) {}
//                       }))
//                     }(n, r)
//                   }
//                 }, n._window.addEventListener("message", n._onMessage), "IFRAME" !== n.element.nodeName) {
//                 var o = Zu(e, r);
//                 ec($u(o), o, e).then((function(t) {
//                   var r, i, o, s = tc(t, e);
//                   return n.element = s, n._originalElement = e, r = e, i = s, o = Uu.get(r), Uu.set(i, o), Uu.delete(r), ic.set(n.element, n), t
//                 })).catch(i)
//               }
//             }));
//             if (oc.set(this, o), ic.set(this.element, this), "IFRAME" === this.element.nodeName && Qu(this, "ping"), sc.isEnabled) {
//               var s = function() {
//                 return sc.exit()
//               };
//               this.fullscreenchangeHandler = function() {
//                 sc.isFullscreen ? Yu(n, "event:exitFullscreen", s) : Gu(n, "event:exitFullscreen", s), n.ready().then((function() {
//                   Qu(n, "fullscreenchange", sc.isFullscreen)
//                 }))
//               }, sc.on("fullscreenchange", this.fullscreenchangeHandler)
//             }
//             return this
//           }
//           var e;
//           return Tu(t, [{
//             key: "callMethod",
//             value: function(t) {
//               var e = this,
//                 n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
//               return new Vu((function(r, i) {
//                 return e.ready().then((function() {
//                   Yu(e, t, {
//                     resolve: r,
//                     reject: i
//                   }), Qu(e, t, n)
//                 })).catch(i)
//               }))
//             }
//           }, {
//             key: "get",
//             value: function(t) {
//               var e = this;
//               return new Vu((function(n, r) {
//                 return t = Du(t, "get"), e.ready().then((function() {
//                   Yu(e, t, {
//                     resolve: n,
//                     reject: r
//                   }), Qu(e, t)
//                 })).catch(r)
//               }))
//             }
//           }, {
//             key: "set",
//             value: function(t, e) {
//               var n = this;
//               return new Vu((function(r, i) {
//                 if (t = Du(t, "set"), null == e) throw new TypeError("There must be a value to set.");
//                 return n.ready().then((function() {
//                   Yu(n, t, {
//                     resolve: r,
//                     reject: i
//                   }), Qu(n, t, e)
//                 })).catch(i)
//               }))
//             }
//           }, {
//             key: "on",
//             value: function(t, e) {
//               if (!t) throw new TypeError("You must pass an event name.");
//               if (!e) throw new TypeError("You must pass a callback function.");
//               if ("function" != typeof e) throw new TypeError("The callback must be a function.");
//               0 === Xu(this, "event:".concat(t)).length && this.callMethod("addEventListener", t).catch((function() {})), Yu(this, "event:".concat(t), e)
//             }
//           }, {
//             key: "off",
//             value: function(t, e) {
//               if (!t) throw new TypeError("You must pass an event name.");
//               if (e && "function" != typeof e) throw new TypeError("The callback must be a function.");
//               Gu(this, "event:".concat(t), e) && this.callMethod("removeEventListener", t).catch((function(t) {}))
//             }
//           }, {
//             key: "loadVideo",
//             value: function(t) {
//               return this.callMethod("loadVideo", t)
//             }
//           }, {
//             key: "ready",
//             value: function() {
//               var t = oc.get(this) || new Vu((function(t, e) {
//                 e(new Error("Unknown player. Probably unloaded."))
//               }));
//               return Vu.resolve(t)
//             }
//           }, {
//             key: "addCuePoint",
//             value: function(t) {
//               var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
//               return this.callMethod("addCuePoint", {
//                 time: t,
//                 data: e
//               })
//             }
//           }, {
//             key: "removeCuePoint",
//             value: function(t) {
//               return this.callMethod("removeCuePoint", t)
//             }
//           }, {
//             key: "enableTextTrack",
//             value: function(t, e) {
//               if (!t) throw new TypeError("You must pass a language.");
//               return this.callMethod("enableTextTrack", {
//                 language: t,
//                 kind: e
//               })
//             }
//           }, {
//             key: "disableTextTrack",
//             value: function() {
//               return this.callMethod("disableTextTrack")
//             }
//           }, {
//             key: "pause",
//             value: function() {
//               return this.callMethod("pause")
//             }
//           }, {
//             key: "play",
//             value: function() {
//               return this.callMethod("play")
//             }
//           }, {
//             key: "requestFullscreen",
//             value: function() {
//               return sc.isEnabled ? sc.request(this.element) : this.callMethod("requestFullscreen")
//             }
//           }, {
//             key: "exitFullscreen",
//             value: function() {
//               return sc.isEnabled ? sc.exit() : this.callMethod("exitFullscreen")
//             }
//           }, {
//             key: "getFullscreen",
//             value: function() {
//               return sc.isEnabled ? Vu.resolve(sc.isFullscreen) : this.get("fullscreen")
//             }
//           }, {
//             key: "requestPictureInPicture",
//             value: function() {
//               return this.callMethod("requestPictureInPicture")
//             }
//           }, {
//             key: "exitPictureInPicture",
//             value: function() {
//               return this.callMethod("exitPictureInPicture")
//             }
//           }, {
//             key: "getPictureInPicture",
//             value: function() {
//               return this.get("pictureInPicture")
//             }
//           }, {
//             key: "remotePlaybackPrompt",
//             value: function() {
//               return this.callMethod("remotePlaybackPrompt")
//             }
//           }, {
//             key: "unload",
//             value: function() {
//               return this.callMethod("unload")
//             }
//           }, {
//             key: "destroy",
//             value: function() {
//               var t = this;
//               return new Vu((function(e) {
//                 if (oc.delete(t), ic.delete(t.element), t._originalElement && (ic.delete(t._originalElement), t._originalElement.removeAttribute("data-vimeo-initialized")), t.element && "IFRAME" === t.element.nodeName && t.element.parentNode && (t.element.parentNode.parentNode && t._originalElement && t._originalElement !== t.element.parentNode ? t.element.parentNode.parentNode.removeChild(t.element.parentNode) : t.element.parentNode.removeChild(t.element)), t.element && "DIV" === t.element.nodeName && t.element.parentNode) {
//                   t.element.removeAttribute("data-vimeo-initialized");
//                   var n = t.element.querySelector("iframe");
//                   n && n.parentNode && (n.parentNode.parentNode && t._originalElement && t._originalElement !== n.parentNode ? n.parentNode.parentNode.removeChild(n.parentNode) : n.parentNode.removeChild(n))
//                 }
//                 t._window.removeEventListener("message", t._onMessage), sc.isEnabled && sc.off("fullscreenchange", t.fullscreenchangeHandler), e()
//               }))
//             }
//           }, {
//             key: "getAutopause",
//             value: function() {
//               return this.get("autopause")
//             }
//           }, {
//             key: "setAutopause",
//             value: function(t) {
//               return this.set("autopause", t)
//             }
//           }, {
//             key: "getBuffered",
//             value: function() {
//               return this.get("buffered")
//             }
//           }, {
//             key: "getCameraProps",
//             value: function() {
//               return this.get("cameraProps")
//             }
//           }, {
//             key: "setCameraProps",
//             value: function(t) {
//               return this.set("cameraProps", t)
//             }
//           }, {
//             key: "getChapters",
//             value: function() {
//               return this.get("chapters")
//             }
//           }, {
//             key: "getCurrentChapter",
//             value: function() {
//               return this.get("currentChapter")
//             }
//           }, {
//             key: "getColor",
//             value: function() {
//               return this.get("color")
//             }
//           }, {
//             key: "getColors",
//             value: function() {
//               return Vu.all([this.get("colorOne"), this.get("colorTwo"), this.get("colorThree"), this.get("colorFour")])
//             }
//           }, {
//             key: "setColor",
//             value: function(t) {
//               return this.set("color", t)
//             }
//           }, {
//             key: "setColors",
//             value: function(t) {
//               if (!Array.isArray(t)) return new Vu((function(t, e) {
//                 return e(new TypeError("Argument must be an array."))
//               }));
//               var e = new Vu((function(t) {
//                   return t(null)
//                 })),
//                 n = [t[0] ? this.set("colorOne", t[0]) : e, t[1] ? this.set("colorTwo", t[1]) : e, t[2] ? this.set("colorThree", t[2]) : e, t[3] ? this.set("colorFour", t[3]) : e];
//               return Vu.all(n)
//             }
//           }, {
//             key: "getCuePoints",
//             value: function() {
//               return this.get("cuePoints")
//             }
//           }, {
//             key: "getCurrentTime",
//             value: function() {
//               return this.get("currentTime")
//             }
//           }, {
//             key: "setCurrentTime",
//             value: function(t) {
//               return this.set("currentTime", t)
//             }
//           }, {
//             key: "getDuration",
//             value: function() {
//               return this.get("duration")
//             }
//           }, {
//             key: "getEnded",
//             value: function() {
//               return this.get("ended")
//             }
//           }, {
//             key: "getLoop",
//             value: function() {
//               return this.get("loop")
//             }
//           }, {
//             key: "setLoop",
//             value: function(t) {
//               return this.set("loop", t)
//             }
//           }, {
//             key: "setMuted",
//             value: function(t) {
//               return this.set("muted", t)
//             }
//           }, {
//             key: "getMuted",
//             value: function() {
//               return this.get("muted")
//             }
//           }, {
//             key: "getPaused",
//             value: function() {
//               return this.get("paused")
//             }
//           }, {
//             key: "getPlaybackRate",
//             value: function() {
//               return this.get("playbackRate")
//             }
//           }, {
//             key: "setPlaybackRate",
//             value: function(t) {
//               return this.set("playbackRate", t)
//             }
//           }, {
//             key: "getPlayed",
//             value: function() {
//               return this.get("played")
//             }
//           }, {
//             key: "getQualities",
//             value: function() {
//               return this.get("qualities")
//             }
//           }, {
//             key: "getQuality",
//             value: function() {
//               return this.get("quality")
//             }
//           }, {
//             key: "setQuality",
//             value: function(t) {
//               return this.set("quality", t)
//             }
//           }, {
//             key: "getRemotePlaybackAvailability",
//             value: function() {
//               return this.get("remotePlaybackAvailability")
//             }
//           }, {
//             key: "getRemotePlaybackState",
//             value: function() {
//               return this.get("remotePlaybackState")
//             }
//           }, {
//             key: "getSeekable",
//             value: function() {
//               return this.get("seekable")
//             }
//           }, {
//             key: "getSeeking",
//             value: function() {
//               return this.get("seeking")
//             }
//           }, {
//             key: "getTextTracks",
//             value: function() {
//               return this.get("textTracks")
//             }
//           }, {
//             key: "getVideoEmbedCode",
//             value: function() {
//               return this.get("videoEmbedCode")
//             }
//           }, {
//             key: "getVideoId",
//             value: function() {
//               return this.get("videoId")
//             }
//           }, {
//             key: "getVideoTitle",
//             value: function() {
//               return this.get("videoTitle")
//             }
//           }, {
//             key: "getVideoWidth",
//             value: function() {
//               return this.get("videoWidth")
//             }
//           }, {
//             key: "getVideoHeight",
//             value: function() {
//               return this.get("videoHeight")
//             }
//           }, {
//             key: "getVideoUrl",
//             value: function() {
//               return this.get("videoUrl")
//             }
//           }, {
//             key: "getVolume",
//             value: function() {
//               return this.get("volume")
//             }
//           }, {
//             key: "setVolume",
//             value: function(t) {
//               return this.set("volume", t)
//             }
//           }, {
//             key: "setTimingSrc",
//             value: (e = bu(wu().mark((function t(e, n) {
//               var r, i = this;
//               return wu().wrap((function(t) {
//                 for (;;) switch (t.prev = t.next) {
//                   case 0:
//                     if (e) {
//                       t.next = 2;
//                       break
//                     }
//                     throw new TypeError("A Timing Object must be provided.");
//                   case 2:
//                     return t.next = 4, this.ready();
//                   case 4:
//                     return r = new rc(this, e, n), Qu(this, "notifyTimingObjectConnect"), r.addEventListener("disconnect", (function() {
//                       return Qu(i, "notifyTimingObjectDisconnect")
//                     })), t.abrupt("return", r);
//                   case 8:
//                   case "end":
//                     return t.stop()
//                 }
//               }), t, this)
//             }))), function(t, n) {
//               return e.apply(this, arguments)
//             })
//           }]), t
//         }();
//       Ru || (sc = function() {
//         var t = function() {
//             for (var t, e = [
//                 ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
//                 ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
//                 ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
//                 ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
//                 ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
//               ], n = 0, r = e.length, i = {}; n < r; n++)
//               if ((t = e[n]) && t[1] in document) {
//                 for (n = 0; n < t.length; n++) i[e[0][n]] = t[n];
//                 return i
//               } return !1
//           }(),
//           e = {
//             fullscreenchange: t.fullscreenchange,
//             fullscreenerror: t.fullscreenerror
//           },
//           n = {
//             request: function(e) {
//               return new Promise((function(r, i) {
//                 var o = function t() {
//                   n.off("fullscreenchange", t), r()
//                 };
//                 n.on("fullscreenchange", o);
//                 var s = (e = e || document.documentElement)[t.requestFullscreen]();
//                 s instanceof Promise && s.then(o).catch(i)
//               }))
//             },
//             exit: function() {
//               return new Promise((function(e, r) {
//                 if (n.isFullscreen) {
//                   var i = function t() {
//                     n.off("fullscreenchange", t), e()
//                   };
//                   n.on("fullscreenchange", i);
//                   var o = document[t.exitFullscreen]();
//                   o instanceof Promise && o.then(i).catch(r)
//                 } else e()
//               }))
//             },
//             on: function(t, n) {
//               var r = e[t];
//               r && document.addEventListener(r, n)
//             },
//             off: function(t, n) {
//               var r = e[t];
//               r && document.removeEventListener(r, n)
//             }
//           };
//         return Object.defineProperties(n, {
//           isFullscreen: {
//             get: function() {
//               return Boolean(document[t.fullscreenElement])
//             }
//           },
//           element: {
//             enumerable: !0,
//             get: function() {
//               return document[t.fullscreenElement]
//             }
//           },
//           isEnabled: {
//             enumerable: !0,
//             get: function() {
//               return Boolean(document[t.fullscreenEnabled])
//             }
//           }
//         }), n
//       }(), function() {
//         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
//           e = [].slice.call(t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
//           n = function(t) {
//             "console" in window && console.error && console.error("There was an error creating an embed: ".concat(t))
//           };
//         e.forEach((function(t) {
//           try {
//             if (null !== t.getAttribute("data-vimeo-defer")) return;
//             var e = Zu(t);
//             ec($u(e), e, t).then((function(e) {
//               return tc(e, t)
//             })).catch(n)
//           } catch (t) {
//             n(t)
//           }
//         }))
//       }(), function() {
//         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
//         window.VimeoPlayerResizeEmbeds_ || (window.VimeoPlayerResizeEmbeds_ = !0, window.addEventListener("message", (function(e) {
//           if (ju(e.origin) && e.data && "spacechange" === e.data.event)
//             for (var n = t.querySelectorAll("iframe"), r = 0; r < n.length; r++)
//               if (n[r].contentWindow === e.source) {
//                 n[r].parentElement.style.paddingBottom = "".concat(e.data.data[0].bottom, "px");
//                 break
//               }
//         })))
//       }(), function() {
//         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
//         window.VimeoSeoMetadataAppended || (window.VimeoSeoMetadataAppended = !0, window.addEventListener("message", (function(e) {
//           if (ju(e.origin)) {
//             var n = Ku(e.data);
//             if (n && "ready" === n.event)
//               for (var r = t.querySelectorAll("iframe"), i = 0; i < r.length; i++) {
//                 var o = r[i],
//                   s = o.contentWindow === e.source;
//                 Iu(o.src) && s && new ac(o).callMethod("appendVideoMetadata", window.location.href)
//               }
//           }
//         })))
//       }(), function() {
//         var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
//         if (!window.VimeoCheckedUrlTimeParam) {
//           window.VimeoCheckedUrlTimeParam = !0;
//           var e = function(t) {
//             "console" in window && console.error && console.error("There was an error getting video Id: ".concat(t))
//           };
//           window.addEventListener("message", (function(n) {
//             if (ju(n.origin)) {
//               var r = Ku(n.data);
//               if (r && "ready" === r.event)
//                 for (var i = t.querySelectorAll("iframe"), o = function() {
//                     var t = i[s],
//                       r = t.contentWindow === n.source;
//                     if (Iu(t.src) && r) {
//                       var o = new ac(t);
//                       o.getVideoId().then((function(t) {
//                         var e = new RegExp("[?&]vimeo_t_".concat(t, "=([^&#]*)")).exec(window.location.href);
//                         if (e && e[1]) {
//                           var n = decodeURI(e[1]);
//                           o.setCurrentTime(n)
//                         }
//                       })).catch(e)
//                     }
//                   }, s = 0; s < i.length; s++) o()
//             }
//           }))
//         }
//       }());
//       const uc = ac,
//         cc = new class {
//           constructor() {
//             this.$root = document.getElementById("VideoPlayer")
//           }
//           setVideoId(t) {
//             this.vimeoPlayer && this.vimeoPlayer.destroy(), this.vimeoPlayer = new uc("iFrameWrap", {
//               id: t,
//               title: !1,
//               byline: !1,
//               portrait: !1,
//               dnt: !0
//             })
//           }
//           play() {
//             this.vimeoPlayer.play()
//           }
//           open() {
//             Hr.to(this.$root, {
//               opacity: 1,
//               duration: .6,
//               onStart: () => {
//                 this.$root.style.display = "flex"
//               }
//             })
//           }
//           close() {
//             this.vimeoPlayer && this.vimeoPlayer.pause(), Hr.to(this.$root, {
//               opacity: 0,
//               duration: .6,
//               onComplete: () => {
//                 this.$root.style.display = "none"
//               }
//             })
//           }
//         },
//         lc = {
//           isOpen: !1,
//           init() {},
//           setVideoId(t) {
//             cc.setVideoId(t)
//           },
//           open() {
//             cc.open(), Alpine.store("cursor").hide()
//           },
//           close() {
//             cc.close(), Alpine.store("cursor").show()
//           }
//         },
//         hc = {
//           dpr: 1
//         };
//       class fc {
//         constructor(t) {
//           this.$container = t, this.direction = "horizontal", this.downPos = 0, this.prevPos = 0, this.targetScroll = 0, this.scroll = 0, this.velocity = 0, this.acceleration = 0, this.k = .2, this.max = 0, this.progress = 0, this.tween = new cu(0, 30), this.onWheelFunction = this.onWheel.bind(this), this.onKeyDownFunction = this.onKeyDown.bind(this), this.onDownFunction = this.onDown.bind(this), this.onMoveFunction = this.onMove.bind(this), this.onUpFunction = this.onUp.bind(this), this.onContextMenuFunc = this.onContextMenu.bind(this), this.listenerOption = {
//             capture: !0,
//             passive: !1
//           }, this.canceller = () => !1, this.setEvents()
//         }
//         setEvents() {
//           bi.onWheelAvailable && window.addEventListener("wheel", this.onWheelFunction, this.listenerOption), bi.onKeydownAvailable && window.addEventListener("keydown", this.onKeyDownFunction), bi.isTouch && (this.$container.addEventListener("touchstart", this.onDownFunction, this.listenerOption), this.$container.addEventListener("touchmove", this.onMoveFunction, this.listenerOption), this.$container.addEventListener("touchend", this.onUpFunction, this.listenerOption)), bi.onContextmenuAvailable && window.addEventListener("contextmenu", this.onContextMenuFunc)
//         }
//         removeEvents() {
//           bi.onWheelAvailable && window.removeEventListener("wheel", this.onWheelFunction, this.listenerOption), bi.onKeydownAvailable && window.removeEventListener("keydown", this.onKeyDownFunction), bi.isTouch && (this.$container.removeEventListener("touchstart", this.onDownFunction, this.listenerOption), this.$container.removeEventListener("touchmove", this.onMoveFunction, this.listenerOption), this.$container.removeEventListener("touchend", this.onUpFunction, this.listenerOption)), bi.onContextmenuAvailable && window.removeEventListener("contextmenu", this.onContextMenuFunc)
//         }
//         setCanceller(t) {
//           this.canceller = t
//         }
//         getDownX(t) {
//           return bi.isTouch ? t.changedTouches[0].pageX : t.pageX
//         }
//         getDownY(t) {
//           return bi.isTouch ? t.changedTouches[0].pageY : t.pageY
//         }
//         getDownPos(t) {
//           return "vertical" === this.direction ? this.getDownY(t) : this.getDownX(t)
//         }
//         onWheel(t) {
//           if (this.canceller()) return;
//           t.preventDefault();
//           let e = 0;
//           e = Math.abs(t.deltaY) >= Math.abs(t.deltaX) ? t.deltaY : t.deltaX;
//           const n = e;
//           this.addTargetScroll(n)
//         }
//         onKeyDown(t) {
//           if (this.canceller()) return;
//           const e = t.code;
//           "ArrowUp" === e ? this.addTargetScroll(-500) : "ArrowDown" === e && this.addTargetScroll(500)
//         }
//         onDown() {
//           this.isPointerDown = !0;
//           const t = this.getDownPos(event);
//           this.downPos = t, this.prevPos = t
//         }
//         onMove(t) {
//           if (t.preventDefault(), !this.isPointerDown) return;
//           const e = this.getDownPos(t);
//           this.prevPos = this.downPos, this.downPos = e;
//           const n = this.prevPos - this.downPos;
//           this.addTargetScroll(n), this.isDragging = !0
//         }
//         onUp() {
//           this.isPointerDown && (this.acceleration = -this.k * (this.scroll - this.targetScroll) * hc.dpr, this.downPos = 0, this.prevPos = 0, this.isPointerDown = !1, this.isDragging = !1)
//         }
//         onContextMenu() {
//           this.isPointerDown = !1
//         }
//         addTargetScroll(t) {
//           this.targetScroll = uu.constrain(this.targetScroll + t * hc.dpr, 0, this.max)
//         }
//         update({
//           deltaTime: t
//         }) {
//           this.canceller() || (this.velocity += this.acceleration, this.targetScroll += this.velocity, this.velocity *= .9, this.acceleration = 0, this.targetScroll = uu.constrain(this.targetScroll, 0, this.max), this.tween.update(this.targetScroll, t), this.scroll = this.tween.x, this.max > 0 ? this.progress = uu.constrain(this.scroll / this.max, 0, 1) : this.progress = 0, this.progress < .01 && (this.progress = 0))
//         }
//         reset() {
//           this.targetScroll = 0, this.scroll = 0, this.velocity = 0, this.acceleration = 0, this.max = 0, this.progress = 0, this.tween.reset()
//         }
//         scrollToTop() {
//           Hr.to(this, {
//             targetScroll: 0,
//             duration: .4
//           })
//         }
//       }
//       class dc {
//         constructor({
//           x: t,
//           y: e
//         }, n, r) {
//           this.position = {
//             x: t,
//             y: e
//           }, this.velocity = {
//             x: 0,
//             y: 0
//           }, this.accelerlation = {
//             x: 0,
//             y: 0
//           }, this.omega = n, this.gammaScale = Math.min(r, .99), this.direction = 0
//         }
//         update(t, e) {
//           const n = e,
//             r = this.omega * this.omega,
//             i = this.omega * this.gammaScale;
//           this.accelerlation.x = -r * (this.position.x - t.x) - 2 * i * this.velocity.x, this.accelerlation.y = -r * (this.position.y - t.y) - 2 * i * this.velocity.y, this.velocity.x += n * this.accelerlation.x, this.velocity.y += n * this.accelerlation.y, this.position.x += n * this.velocity.x, this.position.y += n * this.velocity.y
//         }
//         calcDirection(t) {
//           this.direction = Math.atan2(this.position.y - t.y, this.position.x - t.x)
//         }
//         reset() {
//           this.position.x = 0, this.position.y = 0, this.velocity.x = 0, this.velocity.y = 0, this.accelerlation.x = 0, this.accelerlation.y = 0, this.direction = 0
//         }
//         set x(t) {
//           this.position.x = t
//         }
//         set y(t) {
//           this.position.y = t
//         }
//         get x() {
//           return this.position.x
//         }
//         get y() {
//           return this.position.y
//         }
//       }
//       class pc {
//         constructor({
//           row: t,
//           column: e,
//           category: n,
//           pagePath: r
//         }) {
//           this.row = t, this.column = e, this.p = new dc({
//             x: 0,
//             y: 0
//           }, 12, .75), this.t = {
//             x: 0,
//             y: 0
//           }, this.width = 0, this.height = 0, this.opacity = 1, this.isActive = !0, this.isHovered = !1, this.category = n, this.pagePath = r, this.images = [], this.numImages = 0
//         }
//         add(t) {
//           this.images.push(t), this.numImages++
//         }
//         calcLayout() {
//           let t = this.p.x,
//             e = this.p.y;
//           for (let n = 0; n < this.numImages; n++) {
//             const r = this.images[n];
//             r.dHeight = this.height, r.dWidth = r.aspectRatio * r.dHeight, 0 !== n && (t += this.images[n - 1].dWidth - r.dWidth + 50 * hc.dpr), r.dx = t, r.dy = e, n === this.numImages - 1 && (this.width = r.dx + r.dWidth - this.p.x)
//           }
//         }
//         checkPointerIntersection(t) {
//           if (t.x >= this.p.x && t.x <= this.p.x + this.width && t.y >= this.p.y && t.y <= this.p.y + this.height) {
//             if (!this.isHovered) {
//               this.isHovered = !0;
//               for (let t = 0; t < this.numImages; t++) this.images[t].spreadOut(t)
//             }
//           } else if (this.isHovered) {
//             this.isHovered = !1;
//             for (let t = 0; t < this.numImages; t++) this.images[t].backToDefault()
//           }
//           return this.isHovered
//         }
//         update({
//           deltaTime: t
//         }) {
//           this.p.update(this.t, t);
//           let e = this.p.x,
//             n = this.p.y;
//           for (let r = 0; r < this.numImages; r++) {
//             const i = this.images[r];
//             i.dHeight = this.height, i.dWidth = i.aspectRatio * i.dHeight, 0 !== r && (e += this.images[r - 1].dWidth - i.dWidth + 50 * hc.dpr), i.dx = e, i.dy = n, i.update(t), r === this.numImages - 1 && (this.width = i.dx + i.dWidth - this.p.x)
//           }
//         }
//         draw(t, e) {
//           t.globalAlpha = this.opacity;
//           for (let n = this.numImages - 1; n >= 0; n--) this.images[n].draw(t, e);
//           t.globalAlpha = 1
//         }
//         show() {
//           this.isActive = !0, Hr.to(this, {
//             opacity: 1,
//             duration: .4
//           })
//         }
//         hide() {
//           this.isActive = !1, Hr.to(this, {
//             opacity: 0,
//             duration: .4
//           })
//         }
//       }
//       class vc {
//         constructor(t, e) {
//           this.x = t, this.velocity = 0, this.omega = e
//         }
//         lerp(t, e, n) {
//           return t + (e - t) * n
//         }
//         update(t, e) {
//           const n = Math.min(Math.exp(-this.omega * e), 1),
//             r = this.lerp(t, this.x, n);
//           this.velocity = r - this.x, this.x = r
//         }
//         reset() {
//           this.x = 0, this.velocity = 0
//         }
//       }
//       class mc {
//         constructor({
//           isLast: t,
//           aspectRatio: e
//         }) {
//           this.el = null, this.sx = 0, this.sy = 0, this.sWidth = 0, this.sHeight = 0, this.dx = 0, this.dy = 0, this.dWidth = 0, this.dHeight = 0, this.aspectRatio = e, this.isLast = t, this.isReady = !1, this.move = {
//             x: 0,
//             y: 0,
//             rot: 0,
//             scale: 1
//           }, this.maskTarget = 0, this.mask = new vc(0, 5)
//         }
//         setImage(t) {
//           this.el = t, this.sWidth = this.el.naturalWidth, this.sHeight = this.el.naturalHeight, this.isReady = !0
//         }
//         update(t) {
//           this.mask.update(this.maskTarget, t)
//         }
//         draw(t, e) {
//           if (this.isReady) {
//             if (t.save(), t.translate(this.dx + this.dWidth / 2 + this.move.x, this.dy + this.dHeight / 2 + this.move.y), t.scale(this.move.scale, this.move.scale), !this.isLast) {
//               const e = t.createLinearGradient(this.dWidth / 2, -this.dHeight / 2, this.dWidth / 2 + 15 * hc.dpr, -this.dHeight / 2);
//               e.addColorStop(0, "rgba(0, 0, 0, 0.2)"), e.addColorStop(.5, "rgba(0, 0, 0, 0.05)"), e.addColorStop(1, "rgba(0, 0, 0, 0)"), t.fillStyle = e, t.fillRect(this.dWidth / 2 - 1 * hc.dpr, -this.dHeight / 2, 15 * hc.dpr, this.dHeight)
//             }
//             t.drawImage(this.el, this.sx, this.sy, this.sWidth, this.sHeight, -this.dWidth / 2, -this.dHeight / 2, this.dWidth, this.dHeight), this.maskTarget = e ? .25 : 0, this.mask.x > .01 && (t.globalAlpha = this.mask.x, t.fillStyle = "#000", t.fillRect(-this.dWidth / 2, -this.dHeight / 2, this.dWidth, this.dHeight), t.globalAlpha = 1), t.restore()
//           }
//         }
//         spreadOut(t) {
//           Hr.to(this.move, {
//             x: 50 * (t + 1) * hc.dpr,
//             scale: Math.pow(.95, t),
//             duration: .8
//           })
//         }
//         backToDefault() {
//           Hr.to(this.move, {
//             x: 0,
//             scale: 1,
//             duration: .6
//           })
//         }
//       }
//       class gc extends fc {
//         constructor(t) {
//           super(t), this.canvas = this.$container.querySelector("canvas"), this.ctx = this.canvas.getContext("2d", {
//             storage: "discardable"
//           }), this.pointer = {
//             x: -9999,
//             y: -9999
//           }, hc.dpr = Math.min(window.devicePixelRatio, 2), this.allGroups = [], this.activeGroups = [], this.numGroups = 0, this.hoveredGroup = null, this.space = 0, this.margin = 0, this.gap = {
//             row: 0,
//             column: 0
//           }, this.category = "all", this.rowHeight = 0, this.numRows = 3, this.onMouseMoveFunc = this.onMouseMove.bind(this), this.onMouseLeaveFunc = this.onMouseLeave.bind(this), this.initGridData(), this.init(this.$container.querySelectorAll(".postData > div"))
//         }
//         initGridData() {
//           this.gridData = [];
//           for (let t = 0; t < this.numRows; t++) this.gridData.push({
//             rowIndex: t,
//             numColumns: 0,
//             width: 0,
//             groups: []
//           })
//         }
//         init(t) {
//           this.resize(), t.forEach(((t, e) => {
//             const n = this.getMinRowIndex(),
//               r = this.gridData[n],
//               i = new pc({
//                 row: r.rowIndex,
//                 column: r.numColumns++,
//                 category: t.dataset.category,
//                 pagePath: t.dataset.pagePath
//               });
//             if (r.groups.push(i), 0 === i.column) i.p.x = this.margin;
//             else {
//               const t = r.groups[i.column - 1];
//               i.p.x = t.p.x + t.width + this.gap.column
//             }
//             i.p.y = this.space + i.row * (this.rowHeight + this.gap.row), i.height = this.rowHeight;
//             const o = t.querySelectorAll("div");
//             o.forEach(((t, e) => {
//               const n = new mc({
//                 isLast: e === o.length - 1,
//                 aspectRatio: parseFloat(t.dataset.aspectRatio)
//               });
//               i.add(n);
//               const r = document.createElement("img");
//               r.src = "", r.onload = () => {
//                 n.setImage(r)
//               }, r.src = t.dataset.src
//             })), i.calcLayout(), r.width += i.width, this.allGroups.push(i), this.numGroups++
//           })), this.activeGroups = [...this.allGroups], this.$container.addEventListener("mousemove", this.onMouseMoveFunc), this.$container.addEventListener("mouseleave", this.onMouseLeaveFunc)
//         }
//         getMinRowIndex() {
//           let t = 0,
//             e = 1 / 0;
//           for (let n = 0, r = this.gridData.length; n < r; n++) {
//             const r = this.gridData[n].width;
//             r < e && (e = r, t = n)
//           }
//           return t
//         }
//         resize() {
//           const {
//             width: t,
//             height: e
//           } = this.$container.getBoundingClientRect();
//           this.canvas.width = hc.dpr * t, this.canvas.height = hc.dpr * e, this.canvas.style.width = t + "px", this.canvas.style.height = e + "px", t < 640 ? (this.space = 10 * hc.dpr, this.margin = 10 * hc.dpr, this.gap = {
//             row: 10 * hc.dpr,
//             column: 10 * hc.dpr
//           }) : (this.space = 10 * hc.dpr, this.margin = 100 * hc.dpr, this.gap = {
//             row: 10 * hc.dpr,
//             column: 10 * hc.dpr
//           }), this.rowHeight = (this.canvas.height - 2 * this.gap.row - 2 * this.space) / 3
//         }
//         update(t) {
//           super.update(t), this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.save(), this.ctx.translate(-this.scroll, 0);
//           for (let t = 0; t < this.numRows; t++) {
//             const e = this.gridData[t],
//               n = e.groups.length;
//             for (let t = 0; t < n; t++) {
//               const n = e.groups[t];
//               if (0 === n.column) n.t.x = this.margin;
//               else {
//                 const t = e.groups[n.column - 1];
//                 n.t.x = t.t.x + t.width + this.gap.column
//               }
//               n.t.y = this.space + n.row * (this.rowHeight + this.gap.row), n.height = this.rowHeight
//             }
//           }
//           let e = null;
//           const n = this.activeGroups.length;
//           for (let t = 0; t < n; t++) {
//             const n = this.activeGroups[t];
//             !bi.isTouch && n.checkPointerIntersection(this.pointer) && (e = n)
//           }
//           for (let n = this.numGroups - 1; n >= 0; n--) {
//             const r = this.allGroups[n],
//               i = null !== e && !r.isHovered;
//             r.opacity > 0 && (r.update(t), r.draw(this.ctx, i))
//           }
//           this.ctx.restore();
//           const r = this.activeGroups.at(-1);
//           this.max = r.p.x + r.width - this.canvas.width + this.margin, bi.isTouch || (this.max += r.width), this.hoveredGroup = null !== e ? e : null
//         }
//         onMouseMove(t) {
//           this.pointer.x = t.offsetX * hc.dpr + this.scroll, this.pointer.y = t.offsetY * hc.dpr
//         }
//         onMouseLeave() {
//           this.pointer = {
//             x: -9999,
//             y: -9999
//           }
//         }
//         changeCat(t) {
//           if (this.category !== t) {
//             this.category = t;
//             for (let e = 0; e < this.numGroups; e++) {
//               const n = this.allGroups[e];
//               "all" === t || n.category === t ? n.show() : n.hide()
//             }
//             this.activeGroups = this.allGroups.filter((t => t.isActive)), this.initGridData(), this.activeGroups.forEach((t => {
//               const e = this.gridData[this.getMinRowIndex()];
//               t.row = e.rowIndex, t.column = e.numColumns++, e.groups.push(t), t.calcLayout(), e.width += t.width
//             })), this.scrollToTop()
//           }
//         }
//         checkClick(t) {
//           const e = t.offsetX * hc.dpr + this.scroll,
//             n = t.offsetY * hc.dpr;
//           for (let t = 0; t < this.activeGroups.length; t++) {
//             const r = this.activeGroups[t];
//             if (r.checkPointerIntersection({
//                 x: e,
//                 y: n
//               })) return r.pagePath
//           }
//           return null
//         }
//         kill() {
//           delete this.ctx, this.removeEvents(), this.$container.removeEventListener("mousemove", this.onMouseMoveFunc), this.$container.removeEventListener("mouseleave", this.onMouseLeaveFunc)
//         }
//         get width() {
//           return this.canvas.width
//         }
//         get height() {
//           return this.canvas.height
//         }
//       }
//       const yc = {
//         isVisible: !1,
//         init() {
//           this.canvas = null, this.resizeMng = new _i
//         },
//         toggleView(t, e) {
//           if (this.canvas && this.canvas.kill(), "photo" === t || "movie" === t) {
//             const t = e.querySelector(".projects_canvas");
//             this.canvas = new gc(t), this.isVisible = !0, this.resizeMng.setSizeFunc((() => {
//               const {
//                 width: e,
//                 height: n
//               } = t.getBoundingClientRect();
//               return {
//                 width: e,
//                 height: n
//               }
//             })), t.addEventListener("click", (t => {
//               const e = this.canvas.checkClick(t);
//               e && fi().go(e)
//             }))
//           } else this.isVisible = !1
//         },
//         changeCat(t) {
//           this.canvas.changeCat(t)
//         },
//         resize() {
//           this.canvas.resize()
//         },
//         update(t) {
//           this.isVisible && (this.resizeMng.check() && this.resize(), this.canvas.update(t), this.canvas.hoveredGroup ? Alpine.store("cursor").enterWork() : Alpine.store("cursor").leaveWork())
//         }
//       };
  
//       function _c() {
//         if ("" === location.search) return {};
//         const t = {},
//           e = location.search.substring(1).split("&");
//         for (let n = 0; n < e.length; n++) {
//           const r = e[n].split("=");
//           t[r[0]] = r[1]
//         }
//         return t
//       }
//       const wc = {
//           width: 0,
//           height: 0,
//           dpr: 1
//         },
//         xc = .5 * (Math.sqrt(3) - 1),
//         bc = (3 - Math.sqrt(3)) / 6,
//         kc = (Math.sqrt(5), Math.sqrt(5), t => 0 | Math.floor(t)),
//         Ec = new Float64Array([1, 1, -1, 1, 1, -1, -1, -1, 1, 0, -1, 0, 1, 0, -1, 0, 0, 1, 0, -1, 0, 1, 0, -1]);
//       class Tc {
//         constructor({
//           pawImage: t
//         }) {
//           this.pawImage = t, this.width = 20 * wc.dpr, this.pawWidth = 18 * wc.dpr, this.pawHeight = 1.0534979424 * this.pawWidth, this.position = {
//             x: 0,
//             y: 0
//           }, this.angle = 0, this.lastStepTime = 0, this.stepInterval = 1.2, this.footSteps = [], this.noise2D = function(t = Math.random) {
//             const e = function(t) {
//                 const e = new Uint8Array(512);
//                 for (let t = 0; t < 256; t++) e[t] = t;
//                 for (let n = 0; n < 255; n++) {
//                   const r = n + ~~(t() * (256 - n)),
//                     i = e[n];
//                   e[n] = e[r], e[r] = i
//                 }
//                 for (let t = 256; t < 512; t++) e[t] = e[t - 256];
//                 return e
//               }(t),
//               n = new Float64Array(e).map((t => Ec[t % 12 * 2])),
//               r = new Float64Array(e).map((t => Ec[t % 12 * 2 + 1]));
//             return function(t, i) {
//               let o = 0,
//                 s = 0,
//                 a = 0;
//               const u = (t + i) * xc,
//                 c = kc(t + u),
//                 l = kc(i + u),
//                 h = (c + l) * bc,
//                 f = t - (c - h),
//                 d = i - (l - h);
//               let p, v;
//               f > d ? (p = 1, v = 0) : (p = 0, v = 1);
//               const m = f - p + bc,
//                 g = d - v + bc,
//                 y = f - 1 + 2 * bc,
//                 _ = d - 1 + 2 * bc,
//                 w = 255 & c,
//                 x = 255 & l;
//               let b = .5 - f * f - d * d;
//               if (b >= 0) {
//                 const t = w + e[x];
//                 b *= b, o = b * b * (n[t] * f + r[t] * d)
//               }
//               let k = .5 - m * m - g * g;
//               if (k >= 0) {
//                 const t = w + p + e[x + v];
//                 k *= k, s = k * k * (n[t] * m + r[t] * g)
//               }
//               let E = .5 - y * y - _ * _;
//               if (E >= 0) {
//                 const t = w + 1 + e[x + 1];
//                 E *= E, a = E * E * (n[t] * y + r[t] * _)
//               }
//               return 70 * (o + s + a)
//             }
//           }(), this.isReft = !0
//         }
//         start({
//           sx: t,
//           sy: e
//         }) {
//           this.position = {
//             x: t,
//             y: e
//           }
//         }
//         update({
//           time: t
//         }) {
//           if (t - this.lastStepTime < this.stepInterval) return;
//           this.lastStepTime = t;
//           const e = .5 * (1 + this.noise2D(.0015 * this.position.x, .0015 * this.position.y)) * Math.PI * 2,
//             n = 40 * Math.cos(e) * wc.dpr,
//             r = 40 * Math.sin(e) * wc.dpr;
//           this.position.x += n, this.position.y += r;
//           let i = 0;
//           i = this.isReft ? {
//             x: this.position.x + this.width / 2 * Math.cos(e + .5 * Math.PI),
//             y: this.position.y + this.width / 2 * Math.sin(e + .5 * Math.PI)
//           } : {
//             x: this.position.x + this.width / 2 * Math.cos(e - .5 * Math.PI),
//             y: this.position.y + this.width / 2 * Math.sin(e - .5 * Math.PI)
//           }, this.isReft = !this.isReft;
//           const o = {
//             alpha: 0,
//             x: i.x,
//             y: i.y,
//             angle: e + .5 * Math.PI,
//             remove: !1
//           };
//           this.footSteps.push(o), this.footSteps = this.footSteps.filter((t => !t.remove)), Hr.to(o, {
//             keyframes: {
//               alpha: [0, 1, 0],
//               easeEach: "circ.out"
//             },
//             ease: "none",
//             duration: .8 * 6,
//             onComplete: function() {
//               const [t] = this.targets();
//               t.remove = !0
//             }
//           })
//         }
//         draw(t, e) {
//           for (let n = 0; n < this.footSteps.length; n++) {
//             const r = this.footSteps[n];
//             t.save(), t.translate(r.x, r.y), t.rotate(r.angle), t.globalAlpha = r.alpha * e, t.drawImage(this.pawImage, -this.pawWidth / 2, -this.pawHeight / 2, this.pawWidth, this.pawHeight), t.restore()
//           }
//         }
//         get x() {
//           return this.position.x
//         }
//         get y() {
//           return this.position.y
//         }
//       }
//       class Pc {
//         constructor() {
//           this.$container = document.getElementById("FootPrint"), this.canvas = this.$container.querySelector("canvas"), this.ctx = this.canvas.getContext("2d", {
//             storage: "discardable"
//           }), this.pointer = {
//             x: -9999,
//             y: -9999
//           }, wc.dpr = Math.min(window.devicePixelRatio, 2), this.isReady = !1, this.isHovered = !1, this.opacity = 1, this.init()
//         }
//         init() {
//           this.resize();
//           const t = document.createElement("img");
//           t.src = "/assets/image/cat-paw.webp", this.okomechan = new Tc({
//             pawImage: t
//           }), this.okomechan.start({
//             sx: .5 * this.canvas.width,
//             sy: .5 * this.canvas.height
//           }), this.isReady = !0
//         }
//         stop() {
//           Hr.to(this, {
//             opacity: 0,
//             duration: 1,
//             onComplete: () => {
//               this.kill()
//             }
//           })
//         }
//         resize() {
//           const {
//             width: t,
//             height: e
//           } = this.$container.getBoundingClientRect();
//           this.canvas.width = wc.dpr * t, this.canvas.height = wc.dpr * e, this.canvas.style.width = t + "px", this.canvas.style.height = e + "px", wc.width = this.canvas.width, wc.height = this.canvas.height
//         }
//         kill() {
//           this.isReady = !1, delete this.ctx, this.$container.remove()
//         }
//         checkHover({
//           mx: t,
//           my: e
//         }) {
//           const n = 100 * wc.dpr,
//             r = uu.dist(this.okomechan.x, this.okomechan.y, t, e);
//           this.isHovered = r <= n
//         }
//         checkClick(t) {
//           const e = t.clientX * wc.dpr,
//             n = t.clientY * wc.dpr,
//             r = 100 * wc.dpr;
//           return uu.dist(this.okomechan.x, this.okomechan.y, e, n) <= r
//         }
//         update(t) {
//           this.isReady && (this.okomechan.update(t), this.checkHover({
//             mx: mu.x * wc.dpr,
//             my: mu.y * wc.dpr
//           }), this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.okomechan.draw(this.ctx, this.opacity))
//         }
//       }
//       const Mc = {
//           isVisible: !1,
//           isValidTransition: !1,
//           init() {
//             this.canvas = null, this.$root = document.getElementById("FootPrint"), this.onMouseMoveFunc = this.onMouseMove.bind(this), this.onClickFunc = this.onClick.bind(this);
//             const t = _c();
//             let e = 3e5;
//             t.footprint && 1 === parseInt(t.footprint) && (e = 1e3);
//             const n = e + 2e4;
//             setTimeout((() => {
//               this.canvas = new Pc, this.$root.style.visibility = "visible", this.$root.classList.add("on"), this.isVisible = !0, this.setEvents()
//             }), e), this.stopID = setTimeout((async () => {
//               this.hideCanvas()
//             }), n)
//           },
//           resize() {
//             this.isVisible && this.canvas.resize()
//           },
//           update(t) {
//             this.isVisible && this.canvas.update(t)
//           },
//           setEvents() {
//             this.$root.addEventListener("mousemove", this.onMouseMoveFunc), this.$root.addEventListener("click", this.onClickFunc)
//           },
//           removeEvents() {
//             this.$root.removeEventListener("mousemove", this.onMouseMoveFunc), this.$root.removeEventListener("click", this.onClickFunc)
//           },
//           async hideCanvas() {
//             this.canvas.stop(), this.$root.classList.remove("on"), await vi(1), this.isVisible = !1, this.removeEvents(), this.canvas = null
//           },
//           onMouseMove() {
//             this.canvas.isHovered ? Alpine.store("cursor").enterFootPrint() : Alpine.store("cursor").leaveFootPrint()
//           },
//           onClick(t) {
//             this.canvas.checkClick(t) && (this.isValidTransition = !0, fi().go("/okome-chan/"), clearTimeout(this.stopID), this.hideCanvas())
//           }
//         },
//         Ac = () => ({
//           category: "all",
//           title: "All",
//           init() {},
//           btn: {
//             ":class"() {
//               const t = this.$el.dataset.category;
//               return {
//                 "is-selected": this.category === t
//               }
//             },
//             "@click"(t) {
//               const e = t.target;
//               this.category = e.dataset.category, this.title = e.dataset.categoryTitle, Alpine.store("listCanvas").changeCat(this.category)
//             },
//             "@mouseenter"() {
//               Alpine.store("cursor").enterText()
//             },
//             "@mouseleave"() {
//               Alpine.store("cursor").leaveText()
//             }
//           }
//         }),
//         Oc = () => ({
//           state: "default",
//           timeoutID: null,
//           init() {
//             this.$default = this.$root.querySelector(".copyTextBtn_t1"), this.$hover = this.$root.querySelector(".copyTextBtn_t2"), this.$complete = this.$root.querySelector(".copyTextBtn_t3")
//           },
//           enter() {
//             clearTimeout(this.timeoutID), this.textOut(this.$default), this.textIn(this.$hover), this.state = "hover", Alpine.store("cursor").enterText()
//           },
//           leave() {
//             clearTimeout(this.timeoutID), "hover" === this.state ? this.textOut(this.$hover) : "complete" === this.state && this.textOut(this.$complete), this.textIn(this.$default), this.state = "default", Alpine.store("cursor").leaveText()
//           },
//           copy() {
//             "default" === this.state ? this.textOut(this.$default) : "hover" === this.state && this.textOut(this.$hover), this.textIn(this.$complete), this.state = "complete", this.timeoutID = setTimeout((() => {
//               this.leave()
//             }), 2e3), navigator.clipboard && navigator.clipboard.writeText(this.$root.dataset.copyText)
//           },
//           textOut(t) {
//             Hr.to(t, {
//               opacity: 0,
//               yPercent: -50,
//               duration: .6
//             })
//           },
//           textIn(t) {
//             Hr.fromTo(t, {
//               opacity: 0,
//               yPercent: 50
//             }, {
//               opacity: 1,
//               yPercent: 0,
//               duration: .6
//             })
//           }
//         }),
//         Sc = () => ({
//           "@mouseenter.stop"() {
//             Alpine.store("cursor").enterText()
//           },
//           "@mouseleave.stop"() {
//             Alpine.store("cursor").leaveText()
//           }
//         }),
//         Cc = () => ({
//           "@mouseenter.stop"() {
//             Alpine.store("cursor").enterWork()
//           },
//           "@mouseleave.stop"() {
//             Alpine.store("cursor").leaveWork()
//           }
//         }),
//         Fc = () => ({
//           "@mouseenter.stop"() {
//             Alpine.store("cursor").enterText()
//           },
//           "@mouseleave.stop"() {
//             Alpine.store("cursor").leaveText()
//           },
//           "@click.stop"() {
//             Alpine.store("ui").openMenu()
//           }
//         }),
//         Lc = () => ({
//           "@mouseenter.stop"() {
//             Alpine.store("cursor").enterText()
//           },
//           "@mouseleave.stop"() {
//             Alpine.store("cursor").leaveText()
//           },
//           "@click.stop"() {
//             Alpine.store("ui").closeMenu()
//           }
//         }),
//         Rc = () => ({
//           "@mouseenter.stop"() {
//             Alpine.store("cursor").enterThumbnail()
//           },
//           "@mouseleave.stop"() {
//             Alpine.store("cursor").leaveThumbnail()
//           },
//           "@click.stop"() {
//             Alpine.store("player").open()
//           }
//         }),
//         Dc = new class {
//           constructor() {
//             this.$el = document.getElementById("Loading"), this.$chars = this.$el.querySelectorAll(".c"), this.$bg = this.$el.querySelector(".loading_bg")
//           }
//           in() {
//             this.$chars.forEach(((t, e) => {
//               Hr.fromTo(t, {
//                 opacity: 0
//               }, {
//                 opacity: 1,
//                 duration: .4 + .1 * e
//               })
//             }))
//           }
//           out() {
//             this.$el.style.pointerEvents = "none", Hr.to(this.$bg, {
//               opacity: 0,
//               duration: 1.6,
//               onComplete: () => {
//                 this.$el.remove()
//               }
//             }), this.$chars.forEach((t => {
//               Hr.to(t, {
//                 opacity: 0,
//                 duration: .4 + .8 * Math.random()
//               })
//             }))
//           }
//         };
//       class jc {
//         constructor() {}
//         resize() {}
//         update() {}
//         kill() {}
//       }
//       class Ic extends jc {
//         constructor(t) {
//           super();
//           const e = t.querySelector(".projectDetail_videoItem");
//           e && Alpine.store("player").setVideoId(e.dataset.videoId)
//         }
//       }
//       class $c extends jc {
//         constructor(t) {
//           super(), this.$sections = t.querySelectorAll(".info_section")
//         }
//         resize(t) {
//           this.$sections.forEach((e => {
//             if (t) {
//               const {
//                 width: t
//               } = e.getBoundingClientRect();
//               e.style.width = t + "px"
//             } else e.style.width = "auto"
//           }))
//         }
//       }
//       class Nc extends jc {
//         constructor(t) {
//           super();
//           const e = _c();
//           let n = !1;
//           e.password && "41n" === e.password && (n = !0), Alpine.store("footprint").isValidTransition || n || fi().force("/"), this.$items = t.querySelectorAll(".okome_item"), this.numItems = this.$items.length
//         }
//         update(t, e) {
//           if (e)
//             for (let t = 0; t < this.numItems; t++) {
//               const e = this.$items[t],
//                 {
//                   left: n
//                 } = e.getBoundingClientRect();
//               let r = uu.constrain((n - 100) / window.innerWidth, 0, 1);
//               r = r ** 2, e.style.setProperty("--tween", r)
//             }
//         }
//       }
//       const zc = new class {
//         constructor() {
//           this.pageProcess = null
//         }
//         async init() {
//           window.Alpine = au, au.store("ui", pu), au.store("cursor", gu), au.store("player", lc), au.store("listCanvas", yc), au.store("footprint", Mc), au.data("category", Ac), au.data("copyText", Oc), au.bind("textBtn", Sc), au.bind("workBtn", Cc), au.bind("menuBtn", Fc), au.bind("menuCloseBtn", Lc), au.bind("playBtn", Rc), au.start(), this.mq640 = new wi("(min-width: 640px)"), this.resizeMng = new _i, this.resizeMng.setSizeFunc((() => ({
//             width: window.innerWidth,
//             height: window.innerHeight
//           }))), bi.isTouch ? document.body.classList.add("is-touch-device") : document.body.classList.add("is-pointer-device");
//           const t = document.querySelector("#PageWrapper .page");
//           this.enter(t), yi.add(this.update.bind(this)), await vi(.4), Dc.in(), await vi(1.8), Dc.out()
//         }
//         beforeEnter() {
//           au.store("cursor").reset(), this.pageProcess && (this.pageProcess.kill(), this.pageProcess = null)
//         }
//         enter(t) {
//           const e = t.dataset.pageNamespace;
//           document.body.dataset.page = e, au.store("ui").changePage(e), au.store("listCanvas").toggleView(e, t);
//           const n = t.querySelector('[data-scroll="area"]');
//           switch (n ? au.store("ui").setScrollArea(n, this.mq640.matches) : au.store("ui").setScrollArea("none"), e) {
//             case "project-detail":
//               this.pageProcess = new Ic(t);
//               break;
//             case "info":
//               this.pageProcess = new $c(t);
//               break;
//             case "okome":
//               this.pageProcess = new Nc(t);
//               break;
//             default:
//               this.pageProcess = new jc(t)
//           }
//           this.resize()
//         }
//         resize() {
//           const t = document.documentElement,
//             e = .01 * t.clientWidth,
//             n = .01 * t.clientHeight;
//           document.documentElement.style.setProperty("--vw", `${e}px`), document.documentElement.style.setProperty("--vh", `${n}px`), document.documentElement.style.setProperty("--vmax", `${Math.max(e,n)}px`), document.documentElement.style.setProperty("--vmin", `${Math.min(e,n)}px`);
//           let r = 10;
//           this.mq640.matches && (r = 100);
//           const i = (t.clientWidth - 2 * r) / 16;
//           document.documentElement.style.setProperty("--column", `${i}px`), document.documentElement.style.setProperty("--margin", `${r}px`), au.store("footprint").resize(), this.pageProcess && this.pageProcess.resize(this.mq640.matches)
//         }
//         update(t) {
//           this.resizeMng.check() && this.resize(), au.store("ui").update(t), bi.isTouch || au.store("cursor").update(t), au.store("footprint").update(t), au.store("ui").isMenuOpen || (au.store("listCanvas").update(t), this.pageProcess && this.pageProcess.update(t, this.mq640.matches))
//         }
//       };
//       fi().use(pi());
//       let qc = !1;
//       fi().hooks.before((t => {
//         Alpine.store("ui").isMenuOpen ? (qc = !0, Alpine.store("ui").closeMenu()) : mi.in()
//       })), fi().hooks.beforeEnter((t => {
//         zc.beforeEnter()
//       })), fi().hooks.enter((({
//         next: t
//       }) => {
//         zc.enter(t.container), qc || mi.out()
//       })), fi().hooks.after((t => {
//         qc = !1
//       })), fi().init({
//         schema: {
//           prefix: "data-page"
//         },
//         transitions: [{
//           sync: !1,
//           name: "default",
//           leave: async ({
//             current: t
//           }) => (qc || await vi(.6), new Promise((t => {
//             t()
//           }))),
//           enter: async ({
//             next: t
//           }) => new Promise((t => {
//             t()
//           }))
//         }]
//       }), document.addEventListener("DOMContentLoaded", (() => {
//         ! function() {
//           const t = document.querySelector('meta[name="viewport"]');
  
//           function e() {
//             const e = window.outerWidth > 375 ? "width=device-width,initial-scale=1" : "width=375";
//             t.getAttribute("content") !== e && t.setAttribute("content", e)
//           }
//           window.addEventListener("resize", e), e()
//         }(), zc.init()
//       }))
//     })()
//   })();