(() => {
  var e = {
      646: (e, t, r) => {
        e.exports = (function (e) {
          function t(t) {
            for (var r, i, o = t[0], a = t[1], s = 0, u = []; s < o.length; s++)
              (i = o[s]),
                Object.prototype.hasOwnProperty.call(n, i) &&
                  n[i] &&
                  u.push(n[i][0]),
                (n[i] = 0);
            for (r in a)
              Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
            for (c && c(t); u.length; ) u.shift()();
          }
          var r = {},
            n = { 0: 0 };
          function i(t) {
            if (r[t]) return r[t].exports;
            var n = (r[t] = { i: t, l: !1, exports: {} });
            return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
          }
          (i.e = function (e) {
            var t = [],
              r = n[e];
            if (0 !== r)
              if (r) t.push(r[2]);
              else {
                var o = new Promise(function (t, i) {
                  r = n[e] = [t, i];
                });
                t.push((r[2] = o));
                var a,
                  s = document.createElement("script");
                (s.charset = "utf-8"),
                  (s.timeout = 120),
                  i.nc && s.setAttribute("nonce", i.nc),
                  (s.src = (function (e) {
                    return (
                      i.p + "vue-dynamic-marquee.common." + ({}[e] || e) + ".js"
                    );
                  })(e));
                var c = new Error();
                a = function (t) {
                  (s.onerror = s.onload = null), clearTimeout(u);
                  var r = n[e];
                  if (0 !== r) {
                    if (r) {
                      var i = t && ("load" === t.type ? "missing" : t.type),
                        o = t && t.target && t.target.src;
                      (c.message =
                        "Loading chunk " +
                        e +
                        " failed.\n(" +
                        i +
                        ": " +
                        o +
                        ")"),
                        (c.name = "ChunkLoadError"),
                        (c.type = i),
                        (c.request = o),
                        r[1](c);
                    }
                    n[e] = void 0;
                  }
                };
                var u = setTimeout(function () {
                  a({ type: "timeout", target: s });
                }, 12e4);
                (s.onerror = s.onload = a), document.head.appendChild(s);
              }
            return Promise.all(t);
          }),
            (i.m = e),
            (i.c = r),
            (i.d = function (e, t, r) {
              i.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (i.r = function (e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (i.t = function (e, t) {
              if ((1 & t && (e = i(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var r = Object.create(null);
              if (
                (i.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e,
                }),
                2 & t && "string" != typeof e)
              )
                for (var n in e)
                  i.d(
                    r,
                    n,
                    function (t) {
                      return e[t];
                    }.bind(null, n)
                  );
              return r;
            }),
            (i.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return i.d(t, "a", t), t;
            }),
            (i.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (i.p = ""),
            (i.oe = function (e) {
              throw (console.error(e), e);
            });
          var o = (("undefined" != typeof self
              ? self
              : this
            ).webpackJsonpvue_dynamic_marquee =
              ("undefined" != typeof self ? self : this)
                .webpackJsonpvue_dynamic_marquee || []),
            a = o.push.bind(o);
          (o.push = t), (o = o.slice());
          for (var s = 0; s < o.length; s++) t(o[s]);
          var c = a;
          return i((i.s = "fb15"));
        })({
          "00ee": function (e, t, r) {
            var n = {};
            (n[r("b622")("toStringTag")] = "z"),
              (e.exports = "[object z]" === String(n));
          },
          "0366": function (e, t, r) {
            var n = r("1c0b");
            e.exports = function (e, t, r) {
              if ((n(e), void 0 === t)) return e;
              switch (r) {
                case 0:
                  return function () {
                    return e.call(t);
                  };
                case 1:
                  return function (r) {
                    return e.call(t, r);
                  };
                case 2:
                  return function (r, n) {
                    return e.call(t, r, n);
                  };
                case 3:
                  return function (r, n, i) {
                    return e.call(t, r, n, i);
                  };
              }
              return function () {
                return e.apply(t, arguments);
              };
            };
          },
          "057f": function (e, t, r) {
            var n = r("fc6a"),
              i = r("241c").f,
              o = {}.toString,
              a =
                "object" == typeof window &&
                window &&
                Object.getOwnPropertyNames
                  ? Object.getOwnPropertyNames(window)
                  : [];
            e.exports.f = function (e) {
              return a && "[object Window]" == o.call(e)
                ? (function (e) {
                    try {
                      return i(e);
                    } catch (e) {
                      return a.slice();
                    }
                  })(e)
                : i(n(e));
            };
          },
          "06cf": function (e, t, r) {
            var n = r("83ab"),
              i = r("d1e7"),
              o = r("5c6c"),
              a = r("fc6a"),
              s = r("c04e"),
              c = r("5135"),
              u = r("0cfb"),
              l = Object.getOwnPropertyDescriptor;
            t.f = n
              ? l
              : function (e, t) {
                  if (((e = a(e)), (t = s(t, !0)), u))
                    try {
                      return l(e, t);
                    } catch (e) {}
                  if (c(e, t)) return o(!i.f.call(e, t), e[t]);
                };
          },
          "0cfb": function (e, t, r) {
            var n = r("83ab"),
              i = r("d039"),
              o = r("cc12");
            e.exports =
              !n &&
              !i(function () {
                return (
                  7 !=
                  Object.defineProperty(o("div"), "a", {
                    get: function () {
                      return 7;
                    },
                  }).a
                );
              });
          },
          1148: function (e, t, r) {
            "use strict";
            var n = r("a691"),
              i = r("1d80");
            e.exports =
              "".repeat ||
              function (e) {
                var t = String(i(this)),
                  r = "",
                  o = n(e);
                if (o < 0 || o == 1 / 0)
                  throw RangeError("Wrong number of repetitions");
                for (; o > 0; (o >>>= 1) && (t += t)) 1 & o && (r += t);
                return r;
              };
          },
          "159b": function (e, t, r) {
            var n = r("da84"),
              i = r("fdbc"),
              o = r("17c2"),
              a = r("9112");
            for (var s in i) {
              var c = n[s],
                u = c && c.prototype;
              if (u && u.forEach !== o)
                try {
                  a(u, "forEach", o);
                } catch (e) {
                  u.forEach = o;
                }
            }
          },
          "17c2": function (e, t, r) {
            "use strict";
            var n = r("b727").forEach,
              i = r("a640"),
              o = r("ae40"),
              a = i("forEach"),
              s = o("forEach");
            e.exports =
              a && s
                ? [].forEach
                : function (e) {
                    return n(
                      this,
                      e,
                      arguments.length > 1 ? arguments[1] : void 0
                    );
                  };
          },
          "19aa": function (e, t) {
            e.exports = function (e, t, r) {
              if (!(e instanceof t))
                throw TypeError(
                  "Incorrect " + (r ? r + " " : "") + "invocation"
                );
              return e;
            };
          },
          "1be4": function (e, t, r) {
            var n = r("d066");
            e.exports = n("document", "documentElement");
          },
          "1c0b": function (e, t) {
            e.exports = function (e) {
              if ("function" != typeof e)
                throw TypeError(String(e) + " is not a function");
              return e;
            };
          },
          "1c7e": function (e, t, r) {
            var n = r("b622")("iterator"),
              i = !1;
            try {
              var o = 0,
                a = {
                  next: function () {
                    return { done: !!o++ };
                  },
                  return: function () {
                    i = !0;
                  },
                };
              (a[n] = function () {
                return this;
              }),
                Array.from(a, function () {
                  throw 2;
                });
            } catch (e) {}
            e.exports = function (e, t) {
              if (!t && !i) return !1;
              var r = !1;
              try {
                var o = {};
                (o[n] = function () {
                  return {
                    next: function () {
                      return { done: (r = !0) };
                    },
                  };
                }),
                  e(o);
              } catch (e) {}
              return r;
            };
          },
          "1cdc": function (e, t, r) {
            var n = r("342f");
            e.exports = /(iphone|ipod|ipad).*applewebkit/i.test(n);
          },
          "1d80": function (e, t) {
            e.exports = function (e) {
              if (null == e) throw TypeError("Can't call method on " + e);
              return e;
            };
          },
          "1dde": function (e, t, r) {
            var n = r("d039"),
              i = r("b622"),
              o = r("2d00"),
              a = i("species");
            e.exports = function (e) {
              return (
                o >= 51 ||
                !n(function () {
                  var t = [];
                  return (
                    ((t.constructor = {})[a] = function () {
                      return { foo: 1 };
                    }),
                    1 !== t[e](Boolean).foo
                  );
                })
              );
            };
          },
          2266: function (e, t, r) {
            var n = r("825a"),
              i = r("e95a"),
              o = r("50c4"),
              a = r("0366"),
              s = r("35a1"),
              c = r("9bdd"),
              u = function (e, t) {
                (this.stopped = e), (this.result = t);
              };
            (e.exports = function (e, t, r, l, f) {
              var d,
                p,
                h,
                m,
                v,
                g,
                y,
                b = a(t, r, l ? 2 : 1);
              if (f) d = e;
              else {
                if ("function" != typeof (p = s(e)))
                  throw TypeError("Target is not iterable");
                if (i(p)) {
                  for (h = 0, m = o(e.length); m > h; h++)
                    if (
                      (v = l ? b(n((y = e[h]))[0], y[1]) : b(e[h])) &&
                      v instanceof u
                    )
                      return v;
                  return new u(!1);
                }
                d = p.call(e);
              }
              for (g = d.next; !(y = g.call(d)).done; )
                if (
                  "object" == typeof (v = c(d, b, y.value, l)) &&
                  v &&
                  v instanceof u
                )
                  return v;
              return new u(!1);
            }).stop = function (e) {
              return new u(!0, e);
            };
          },
          "23cb": function (e, t, r) {
            var n = r("a691"),
              i = Math.max,
              o = Math.min;
            e.exports = function (e, t) {
              var r = n(e);
              return r < 0 ? i(r + t, 0) : o(r, t);
            };
          },
          "23e7": function (e, t, r) {
            var n = r("da84"),
              i = r("06cf").f,
              o = r("9112"),
              a = r("6eeb"),
              s = r("ce4e"),
              c = r("e893"),
              u = r("94ca");
            e.exports = function (e, t) {
              var r,
                l,
                f,
                d,
                p,
                h = e.target,
                m = e.global,
                v = e.stat;
              if ((r = m ? n : v ? n[h] || s(h, {}) : (n[h] || {}).prototype))
                for (l in t) {
                  if (
                    ((d = t[l]),
                    (f = e.noTargetGet ? (p = i(r, l)) && p.value : r[l]),
                    !u(m ? l : h + (v ? "." : "#") + l, e.forced) &&
                      void 0 !== f)
                  ) {
                    if (typeof d == typeof f) continue;
                    c(d, f);
                  }
                  (e.sham || (f && f.sham)) && o(d, "sham", !0), a(r, l, d, e);
                }
            };
          },
          "241c": function (e, t, r) {
            var n = r("ca84"),
              i = r("7839").concat("length", "prototype");
            t.f =
              Object.getOwnPropertyNames ||
              function (e) {
                return n(e, i);
              };
          },
          2532: function (e, t, r) {
            "use strict";
            var n = r("23e7"),
              i = r("5a34"),
              o = r("1d80");
            n(
              { target: "String", proto: !0, forced: !r("ab13")("includes") },
              {
                includes: function (e) {
                  return !!~String(o(this)).indexOf(
                    i(e),
                    arguments.length > 1 ? arguments[1] : void 0
                  );
                },
              }
            );
          },
          2626: function (e, t, r) {
            "use strict";
            var n = r("d066"),
              i = r("9bf2"),
              o = r("b622"),
              a = r("83ab"),
              s = o("species");
            e.exports = function (e) {
              var t = n(e),
                r = i.f;
              a &&
                t &&
                !t[s] &&
                r(t, s, {
                  configurable: !0,
                  get: function () {
                    return this;
                  },
                });
            };
          },
          "2af1": function (e, t, r) {
            r("23e7")({ target: "Math", stat: !0 }, { sign: r("f748") });
          },
          "2cf4": function (e, t, r) {
            var n,
              i,
              o,
              a = r("da84"),
              s = r("d039"),
              c = r("c6b6"),
              u = r("0366"),
              l = r("1be4"),
              f = r("cc12"),
              d = r("1cdc"),
              p = a.location,
              h = a.setImmediate,
              m = a.clearImmediate,
              v = a.process,
              g = a.MessageChannel,
              y = a.Dispatch,
              b = 0,
              _ = {},
              w = "onreadystatechange",
              x = function (e) {
                if (_.hasOwnProperty(e)) {
                  var t = _[e];
                  delete _[e], t();
                }
              },
              E = function (e) {
                return function () {
                  x(e);
                };
              },
              S = function (e) {
                x(e.data);
              },
              O = function (e) {
                a.postMessage(e + "", p.protocol + "//" + p.host);
              };
            (h && m) ||
              ((h = function (e) {
                for (var t = [], r = 1; arguments.length > r; )
                  t.push(arguments[r++]);
                return (
                  (_[++b] = function () {
                    ("function" == typeof e ? e : Function(e)).apply(void 0, t);
                  }),
                  n(b),
                  b
                );
              }),
              (m = function (e) {
                delete _[e];
              }),
              "process" == c(v)
                ? (n = function (e) {
                    v.nextTick(E(e));
                  })
                : y && y.now
                ? (n = function (e) {
                    y.now(E(e));
                  })
                : g && !d
                ? ((o = (i = new g()).port2),
                  (i.port1.onmessage = S),
                  (n = u(o.postMessage, o, 1)))
                : !a.addEventListener ||
                  "function" != typeof postMessage ||
                  a.importScripts ||
                  s(O)
                ? (n =
                    w in f("script")
                      ? function (e) {
                          l.appendChild(f("script"))[w] = function () {
                            l.removeChild(this), x(e);
                          };
                        }
                      : function (e) {
                          setTimeout(E(e), 0);
                        })
                : ((n = O), a.addEventListener("message", S, !1))),
              (e.exports = { set: h, clear: m });
          },
          "2d00": function (e, t, r) {
            var n,
              i,
              o = r("da84"),
              a = r("342f"),
              s = o.process,
              c = s && s.versions,
              u = c && c.v8;
            u
              ? (i = (n = u.split("."))[0] + n[1])
              : a &&
                (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
                (n = a.match(/Chrome\/(\d+)/)) &&
                (i = n[1]),
              (e.exports = i && +i);
          },
          "342f": function (e, t, r) {
            var n = r("d066");
            e.exports = n("navigator", "userAgent") || "";
          },
          "35a1": function (e, t, r) {
            var n = r("f5df"),
              i = r("3f8c"),
              o = r("b622")("iterator");
            e.exports = function (e) {
              if (null != e) return e[o] || e["@@iterator"] || i[n(e)];
            };
          },
          "37e8": function (e, t, r) {
            var n = r("83ab"),
              i = r("9bf2"),
              o = r("825a"),
              a = r("df75");
            e.exports = n
              ? Object.defineProperties
              : function (e, t) {
                  o(e);
                  for (var r, n = a(t), s = n.length, c = 0; s > c; )
                    i.f(e, (r = n[c++]), t[r]);
                  return e;
                };
          },
          "38cf": function (e, t, r) {
            r("23e7")({ target: "String", proto: !0 }, { repeat: r("1148") });
          },
          "3bbe": function (e, t, r) {
            var n = r("861d");
            e.exports = function (e) {
              if (!n(e) && null !== e)
                throw TypeError("Can't set " + String(e) + " as a prototype");
              return e;
            };
          },
          "3ca3": function (e, t, r) {
            "use strict";
            var n = r("6547").charAt,
              i = r("69f3"),
              o = r("7dd0"),
              a = "String Iterator",
              s = i.set,
              c = i.getterFor(a);
            o(
              String,
              "String",
              function (e) {
                s(this, { type: a, string: String(e), index: 0 });
              },
              function () {
                var e,
                  t = c(this),
                  r = t.string,
                  i = t.index;
                return i >= r.length
                  ? { value: void 0, done: !0 }
                  : ((e = n(r, i)),
                    (t.index += e.length),
                    { value: e, done: !1 });
              }
            );
          },
          "3f8c": function (e, t) {
            e.exports = {};
          },
          "428f": function (e, t, r) {
            var n = r("da84");
            e.exports = n;
          },
          "44ad": function (e, t, r) {
            var n = r("d039"),
              i = r("c6b6"),
              o = "".split;
            e.exports = n(function () {
              return !Object("z").propertyIsEnumerable(0);
            })
              ? function (e) {
                  return "String" == i(e) ? o.call(e, "") : Object(e);
                }
              : Object;
          },
          "44d2": function (e, t, r) {
            var n = r("b622"),
              i = r("7c73"),
              o = r("9bf2"),
              a = n("unscopables"),
              s = Array.prototype;
            null == s[a] && o.f(s, a, { configurable: !0, value: i(null) }),
              (e.exports = function (e) {
                s[a][e] = !0;
              });
          },
          "44de": function (e, t, r) {
            var n = r("da84");
            e.exports = function (e, t) {
              var r = n.console;
              r &&
                r.error &&
                (1 === arguments.length ? r.error(e) : r.error(e, t));
            };
          },
          "44e7": function (e, t, r) {
            var n = r("861d"),
              i = r("c6b6"),
              o = r("b622")("match");
            e.exports = function (e) {
              var t;
              return n(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e));
            };
          },
          4840: function (e, t, r) {
            var n = r("825a"),
              i = r("1c0b"),
              o = r("b622")("species");
            e.exports = function (e, t) {
              var r,
                a = n(e).constructor;
              return void 0 === a || null == (r = n(a)[o]) ? t : i(r);
            };
          },
          4930: function (e, t, r) {
            var n = r("d039");
            e.exports =
              !!Object.getOwnPropertySymbols &&
              !n(function () {
                return !String(Symbol());
              });
          },
          "4d64": function (e, t, r) {
            var n = r("fc6a"),
              i = r("50c4"),
              o = r("23cb"),
              a = function (e) {
                return function (t, r, a) {
                  var s,
                    c = n(t),
                    u = i(c.length),
                    l = o(a, u);
                  if (e && r != r) {
                    for (; u > l; ) if ((s = c[l++]) != s) return !0;
                  } else
                    for (; u > l; l++)
                      if ((e || l in c) && c[l] === r) return e || l || 0;
                  return !e && -1;
                };
              };
            e.exports = { includes: a(!0), indexOf: a(!1) };
          },
          "4de4": function (e, t, r) {
            "use strict";
            var n = r("23e7"),
              i = r("b727").filter,
              o = r("1dde"),
              a = r("ae40"),
              s = o("filter"),
              c = a("filter");
            n(
              { target: "Array", proto: !0, forced: !s || !c },
              {
                filter: function (e) {
                  return i(
                    this,
                    e,
                    arguments.length > 1 ? arguments[1] : void 0
                  );
                },
              }
            );
          },
          "4df4": function (e, t, r) {
            "use strict";
            var n = r("0366"),
              i = r("7b0b"),
              o = r("9bdd"),
              a = r("e95a"),
              s = r("50c4"),
              c = r("8418"),
              u = r("35a1");
            e.exports = function (e) {
              var t,
                r,
                l,
                f,
                d,
                p,
                h = i(e),
                m = "function" == typeof this ? this : Array,
                v = arguments.length,
                g = v > 1 ? arguments[1] : void 0,
                y = void 0 !== g,
                b = u(h),
                _ = 0;
              if (
                (y && (g = n(g, v > 2 ? arguments[2] : void 0, 2)),
                null == b || (m == Array && a(b)))
              )
                for (r = new m((t = s(h.length))); t > _; _++)
                  (p = y ? g(h[_], _) : h[_]), c(r, _, p);
              else
                for (
                  d = (f = b.call(h)).next, r = new m();
                  !(l = d.call(f)).done;
                  _++
                )
                  (p = y ? o(f, g, [l.value, _], !0) : l.value), c(r, _, p);
              return (r.length = _), r;
            };
          },
          "50c4": function (e, t, r) {
            var n = r("a691"),
              i = Math.min;
            e.exports = function (e) {
              return e > 0 ? i(n(e), 9007199254740991) : 0;
            };
          },
          5135: function (e, t) {
            var r = {}.hasOwnProperty;
            e.exports = function (e, t) {
              return r.call(e, t);
            };
          },
          5692: function (e, t, r) {
            var n = r("c430"),
              i = r("c6cd");
            (e.exports = function (e, t) {
              return i[e] || (i[e] = void 0 !== t ? t : {});
            })("versions", []).push({
              version: "3.6.4",
              mode: n ? "pure" : "global",
              copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
            });
          },
          "56ef": function (e, t, r) {
            var n = r("d066"),
              i = r("241c"),
              o = r("7418"),
              a = r("825a");
            e.exports =
              n("Reflect", "ownKeys") ||
              function (e) {
                var t = i.f(a(e)),
                  r = o.f;
                return r ? t.concat(r(e)) : t;
              };
          },
          5899: function (e, t) {
            e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
          },
          "58a8": function (e, t, r) {
            var n = r("1d80"),
              i = "[" + r("5899") + "]",
              o = RegExp("^" + i + i + "*"),
              a = RegExp(i + i + "*$"),
              s = function (e) {
                return function (t) {
                  var r = String(n(t));
                  return (
                    1 & e && (r = r.replace(o, "")),
                    2 & e && (r = r.replace(a, "")),
                    r
                  );
                };
              };
            e.exports = { start: s(1), end: s(2), trim: s(3) };
          },
          "5a34": function (e, t, r) {
            var n = r("44e7");
            e.exports = function (e) {
              if (n(e))
                throw TypeError(
                  "The method doesn't accept regular expressions"
                );
              return e;
            };
          },
          "5c6c": function (e, t) {
            e.exports = function (e, t) {
              return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t,
              };
            };
          },
          6547: function (e, t, r) {
            var n = r("a691"),
              i = r("1d80"),
              o = function (e) {
                return function (t, r) {
                  var o,
                    a,
                    s = String(i(t)),
                    c = n(r),
                    u = s.length;
                  return c < 0 || c >= u
                    ? e
                      ? ""
                      : void 0
                    : (o = s.charCodeAt(c)) < 55296 ||
                      o > 56319 ||
                      c + 1 === u ||
                      (a = s.charCodeAt(c + 1)) < 56320 ||
                      a > 57343
                    ? e
                      ? s.charAt(c)
                      : o
                    : e
                    ? s.slice(c, c + 2)
                    : a - 56320 + ((o - 55296) << 10) + 65536;
                };
              };
            e.exports = { codeAt: o(!1), charAt: o(!0) };
          },
          "65f0": function (e, t, r) {
            var n = r("861d"),
              i = r("e8b5"),
              o = r("b622")("species");
            e.exports = function (e, t) {
              var r;
              return (
                i(e) &&
                  ("function" != typeof (r = e.constructor) ||
                  (r !== Array && !i(r.prototype))
                    ? n(r) && null === (r = r[o]) && (r = void 0)
                    : (r = void 0)),
                new (void 0 === r ? Array : r)(0 === t ? 0 : t)
              );
            };
          },
          "69f3": function (e, t, r) {
            var n,
              i,
              o,
              a = r("7f9a"),
              s = r("da84"),
              c = r("861d"),
              u = r("9112"),
              l = r("5135"),
              f = r("f772"),
              d = r("d012"),
              p = s.WeakMap;
            if (a) {
              var h = new p(),
                m = h.get,
                v = h.has,
                g = h.set;
              (n = function (e, t) {
                return g.call(h, e, t), t;
              }),
                (i = function (e) {
                  return m.call(h, e) || {};
                }),
                (o = function (e) {
                  return v.call(h, e);
                });
            } else {
              var y = f("state");
              (d[y] = !0),
                (n = function (e, t) {
                  return u(e, y, t), t;
                }),
                (i = function (e) {
                  return l(e, y) ? e[y] : {};
                }),
                (o = function (e) {
                  return l(e, y);
                });
            }
            e.exports = {
              set: n,
              get: i,
              has: o,
              enforce: function (e) {
                return o(e) ? i(e) : n(e, {});
              },
              getterFor: function (e) {
                return function (t) {
                  var r;
                  if (!c(t) || (r = i(t)).type !== e)
                    throw TypeError(
                      "Incompatible receiver, " + e + " required"
                    );
                  return r;
                };
              },
            };
          },
          "6eeb": function (e, t, r) {
            var n = r("da84"),
              i = r("9112"),
              o = r("5135"),
              a = r("ce4e"),
              s = r("8925"),
              c = r("69f3"),
              u = c.get,
              l = c.enforce,
              f = String(String).split("String");
            (e.exports = function (e, t, r, s) {
              var c = !!s && !!s.unsafe,
                u = !!s && !!s.enumerable,
                d = !!s && !!s.noTargetGet;
              "function" == typeof r &&
                ("string" != typeof t || o(r, "name") || i(r, "name", t),
                (l(r).source = f.join("string" == typeof t ? t : ""))),
                e !== n
                  ? (c ? !d && e[t] && (u = !0) : delete e[t],
                    u ? (e[t] = r) : i(e, t, r))
                  : u
                  ? (e[t] = r)
                  : a(t, r);
            })(Function.prototype, "toString", function () {
              return ("function" == typeof this && u(this).source) || s(this);
            });
          },
          7156: function (e, t, r) {
            var n = r("861d"),
              i = r("d2bb");
            e.exports = function (e, t, r) {
              var o, a;
              return (
                i &&
                  "function" == typeof (o = t.constructor) &&
                  o !== r &&
                  n((a = o.prototype)) &&
                  a !== r.prototype &&
                  i(e, a),
                e
              );
            };
          },
          7418: function (e, t) {
            t.f = Object.getOwnPropertySymbols;
          },
          "746f": function (e, t, r) {
            var n = r("428f"),
              i = r("5135"),
              o = r("e538"),
              a = r("9bf2").f;
            e.exports = function (e) {
              var t = n.Symbol || (n.Symbol = {});
              i(t, e) || a(t, e, { value: o.f(e) });
            };
          },
          7839: function (e, t) {
            e.exports = [
              "constructor",
              "hasOwnProperty",
              "isPrototypeOf",
              "propertyIsEnumerable",
              "toLocaleString",
              "toString",
              "valueOf",
            ];
          },
          "7b0b": function (e, t, r) {
            var n = r("1d80");
            e.exports = function (e) {
              return Object(n(e));
            };
          },
          "7c73": function (e, t, r) {
            var n,
              i = r("825a"),
              o = r("37e8"),
              a = r("7839"),
              s = r("d012"),
              c = r("1be4"),
              u = r("cc12"),
              l = r("f772"),
              f = "prototype",
              d = "script",
              p = l("IE_PROTO"),
              h = function () {},
              m = function (e) {
                return "<" + d + ">" + e + "</" + d + ">";
              },
              v = function () {
                try {
                  n = document.domain && new ActiveXObject("htmlfile");
                } catch (e) {}
                var e, t, r;
                v = n
                  ? (function (e) {
                      e.write(m("")), e.close();
                      var t = e.parentWindow.Object;
                      return (e = null), t;
                    })(n)
                  : ((t = u("iframe")),
                    (r = "java" + d + ":"),
                    (t.style.display = "none"),
                    c.appendChild(t),
                    (t.src = String(r)),
                    (e = t.contentWindow.document).open(),
                    e.write(m("document.F=Object")),
                    e.close(),
                    e.F);
                for (var i = a.length; i--; ) delete v[f][a[i]];
                return v();
              };
            (s[p] = !0),
              (e.exports =
                Object.create ||
                function (e, t) {
                  var r;
                  return (
                    null !== e
                      ? ((h[f] = i(e)),
                        (r = new h()),
                        (h[f] = null),
                        (r[p] = e))
                      : (r = v()),
                    void 0 === t ? r : o(r, t)
                  );
                });
          },
          "7dd0": function (e, t, r) {
            "use strict";
            var n = r("23e7"),
              i = r("9ed3"),
              o = r("e163"),
              a = r("d2bb"),
              s = r("d44e"),
              c = r("9112"),
              u = r("6eeb"),
              l = r("b622"),
              f = r("c430"),
              d = r("3f8c"),
              p = r("ae93"),
              h = p.IteratorPrototype,
              m = p.BUGGY_SAFARI_ITERATORS,
              v = l("iterator"),
              g = "keys",
              y = "values",
              b = "entries",
              _ = function () {
                return this;
              };
            e.exports = function (e, t, r, l, p, w, x) {
              i(r, t, l);
              var E,
                S,
                O,
                k = function (e) {
                  if (e === p && L) return L;
                  if (!m && e in T) return T[e];
                  switch (e) {
                    case g:
                    case y:
                    case b:
                      return function () {
                        return new r(this, e);
                      };
                  }
                  return function () {
                    return new r(this);
                  };
                },
                C = t + " Iterator",
                A = !1,
                T = e.prototype,
                P = T[v] || T["@@iterator"] || (p && T[p]),
                L = (!m && P) || k(p),
                j = ("Array" == t && T.entries) || P;
              if (
                (j &&
                  ((E = o(j.call(new e()))),
                  h !== Object.prototype &&
                    E.next &&
                    (f ||
                      o(E) === h ||
                      (a ? a(E, h) : "function" != typeof E[v] && c(E, v, _)),
                    s(E, C, !0, !0),
                    f && (d[C] = _))),
                p == y &&
                  P &&
                  P.name !== y &&
                  ((A = !0),
                  (L = function () {
                    return P.call(this);
                  })),
                (f && !x) || T[v] === L || c(T, v, L),
                (d[t] = L),
                p)
              )
                if (
                  ((S = { values: k(y), keys: w ? L : k(g), entries: k(b) }), x)
                )
                  for (O in S) (m || A || !(O in T)) && u(T, O, S[O]);
                else n({ target: t, proto: !0, forced: m || A }, S);
              return S;
            };
          },
          "7f9a": function (e, t, r) {
            var n = r("da84"),
              i = r("8925"),
              o = n.WeakMap;
            e.exports = "function" == typeof o && /native code/.test(i(o));
          },
          "825a": function (e, t, r) {
            var n = r("861d");
            e.exports = function (e) {
              if (!n(e)) throw TypeError(String(e) + " is not an object");
              return e;
            };
          },
          "83ab": function (e, t, r) {
            var n = r("d039");
            e.exports = !n(function () {
              return (
                7 !=
                Object.defineProperty({}, 1, {
                  get: function () {
                    return 7;
                  },
                })[1]
              );
            });
          },
          8418: function (e, t, r) {
            "use strict";
            var n = r("c04e"),
              i = r("9bf2"),
              o = r("5c6c");
            e.exports = function (e, t, r) {
              var a = n(t);
              a in e ? i.f(e, a, o(0, r)) : (e[a] = r);
            };
          },
          "861d": function (e, t) {
            e.exports = function (e) {
              return "object" == typeof e ? null !== e : "function" == typeof e;
            };
          },
          8875: function (e, t, r) {
            var n, i, o;
            "undefined" != typeof self && self,
              (i = []),
              void 0 ===
                (o =
                  "function" ==
                  typeof (n = function () {
                    function e() {
                      var t = Object.getOwnPropertyDescriptor(
                        document,
                        "currentScript"
                      );
                      if (
                        !t &&
                        "currentScript" in document &&
                        document.currentScript
                      )
                        return document.currentScript;
                      if (t && t.get !== e && document.currentScript)
                        return document.currentScript;
                      try {
                        throw new Error();
                      } catch (e) {
                        var r,
                          n,
                          i,
                          o = /@([^@]*):(\d+):(\d+)\s*$/gi,
                          a =
                            /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(e.stack) ||
                            o.exec(e.stack),
                          s = (a && a[1]) || !1,
                          c = (a && a[2]) || !1,
                          u = document.location.href.replace(
                            document.location.hash,
                            ""
                          ),
                          l = document.getElementsByTagName("script");
                        s === u &&
                          ((r = document.documentElement.outerHTML),
                          (n = new RegExp(
                            "(?:[^\\n]+?\\n){0," +
                              (c - 2) +
                              "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*",
                            "i"
                          )),
                          (i = r.replace(n, "$1").trim()));
                        for (var f = 0; f < l.length; f++) {
                          if ("interactive" === l[f].readyState) return l[f];
                          if (l[f].src === s) return l[f];
                          if (
                            s === u &&
                            l[f].innerHTML &&
                            l[f].innerHTML.trim() === i
                          )
                            return l[f];
                        }
                        return null;
                      }
                    }
                    return e;
                  })
                    ? n.apply(t, i)
                    : n) || (e.exports = o);
          },
          8925: function (e, t, r) {
            var n = r("c6cd"),
              i = Function.toString;
            "function" != typeof n.inspectSource &&
              (n.inspectSource = function (e) {
                return i.call(e);
              }),
              (e.exports = n.inspectSource);
          },
          "8bbf": function (e, t) {
            e.exports = r(311);
          },
          "90e3": function (e, t) {
            var r = 0,
              n = Math.random();
            e.exports = function (e) {
              return (
                "Symbol(" +
                String(void 0 === e ? "" : e) +
                ")_" +
                (++r + n).toString(36)
              );
            };
          },
          9112: function (e, t, r) {
            var n = r("83ab"),
              i = r("9bf2"),
              o = r("5c6c");
            e.exports = n
              ? function (e, t, r) {
                  return i.f(e, t, o(1, r));
                }
              : function (e, t, r) {
                  return (e[t] = r), e;
                };
          },
          "94ca": function (e, t, r) {
            var n = r("d039"),
              i = /#|\.prototype\./,
              o = function (e, t) {
                var r = s[a(e)];
                return (
                  r == u || (r != c && ("function" == typeof t ? n(t) : !!t))
                );
              },
              a = (o.normalize = function (e) {
                return String(e).replace(i, ".").toLowerCase();
              }),
              s = (o.data = {}),
              c = (o.NATIVE = "N"),
              u = (o.POLYFILL = "P");
            e.exports = o;
          },
          "96cf": function (e, t) {
            !(function (t) {
              "use strict";
              var r,
                n = Object.prototype,
                i = n.hasOwnProperty,
                o = "function" == typeof Symbol ? Symbol : {},
                a = o.iterator || "@@iterator",
                s = o.asyncIterator || "@@asyncIterator",
                c = o.toStringTag || "@@toStringTag",
                u = "object" == typeof e,
                l = t.regeneratorRuntime;
              if (l) u && (e.exports = l);
              else {
                (l = t.regeneratorRuntime = u ? e.exports : {}).wrap = _;
                var f = "suspendedStart",
                  d = "suspendedYield",
                  p = "executing",
                  h = "completed",
                  m = {},
                  v = {};
                v[a] = function () {
                  return this;
                };
                var g = Object.getPrototypeOf,
                  y = g && g(g(L([])));
                y && y !== n && i.call(y, a) && (v = y);
                var b = (S.prototype = x.prototype = Object.create(v));
                (E.prototype = b.constructor = S),
                  (S.constructor = E),
                  (S[c] = E.displayName = "GeneratorFunction"),
                  (l.isGeneratorFunction = function (e) {
                    var t = "function" == typeof e && e.constructor;
                    return (
                      !!t &&
                      (t === E ||
                        "GeneratorFunction" === (t.displayName || t.name))
                    );
                  }),
                  (l.mark = function (e) {
                    return (
                      Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, S)
                        : ((e.__proto__ = S),
                          c in e || (e[c] = "GeneratorFunction")),
                      (e.prototype = Object.create(b)),
                      e
                    );
                  }),
                  (l.awrap = function (e) {
                    return { __await: e };
                  }),
                  O(k.prototype),
                  (k.prototype[s] = function () {
                    return this;
                  }),
                  (l.AsyncIterator = k),
                  (l.async = function (e, t, r, n) {
                    var i = new k(_(e, t, r, n));
                    return l.isGeneratorFunction(t)
                      ? i
                      : i.next().then(function (e) {
                          return e.done ? e.value : i.next();
                        });
                  }),
                  O(b),
                  (b[c] = "Generator"),
                  (b[a] = function () {
                    return this;
                  }),
                  (b.toString = function () {
                    return "[object Generator]";
                  }),
                  (l.keys = function (e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return (
                      t.reverse(),
                      function r() {
                        for (; t.length; ) {
                          var n = t.pop();
                          if (n in e) return (r.value = n), (r.done = !1), r;
                        }
                        return (r.done = !0), r;
                      }
                    );
                  }),
                  (l.values = L),
                  (P.prototype = {
                    constructor: P,
                    reset: function (e) {
                      if (
                        ((this.prev = 0),
                        (this.next = 0),
                        (this.sent = this._sent = r),
                        (this.done = !1),
                        (this.delegate = null),
                        (this.method = "next"),
                        (this.arg = r),
                        this.tryEntries.forEach(T),
                        !e)
                      )
                        for (var t in this)
                          "t" === t.charAt(0) &&
                            i.call(this, t) &&
                            !isNaN(+t.slice(1)) &&
                            (this[t] = r);
                    },
                    stop: function () {
                      this.done = !0;
                      var e = this.tryEntries[0].completion;
                      if ("throw" === e.type) throw e.arg;
                      return this.rval;
                    },
                    dispatchException: function (e) {
                      if (this.done) throw e;
                      var t = this;
                      function n(n, i) {
                        return (
                          (s.type = "throw"),
                          (s.arg = e),
                          (t.next = n),
                          i && ((t.method = "next"), (t.arg = r)),
                          !!i
                        );
                      }
                      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var a = this.tryEntries[o],
                          s = a.completion;
                        if ("root" === a.tryLoc) return n("end");
                        if (a.tryLoc <= this.prev) {
                          var c = i.call(a, "catchLoc"),
                            u = i.call(a, "finallyLoc");
                          if (c && u) {
                            if (this.prev < a.catchLoc)
                              return n(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc)
                              return n(a.finallyLoc);
                          } else if (c) {
                            if (this.prev < a.catchLoc)
                              return n(a.catchLoc, !0);
                          } else {
                            if (!u)
                              throw new Error(
                                "try statement without catch or finally"
                              );
                            if (this.prev < a.finallyLoc)
                              return n(a.finallyLoc);
                          }
                        }
                      }
                    },
                    abrupt: function (e, t) {
                      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var n = this.tryEntries[r];
                        if (
                          n.tryLoc <= this.prev &&
                          i.call(n, "finallyLoc") &&
                          this.prev < n.finallyLoc
                        ) {
                          var o = n;
                          break;
                        }
                      }
                      o &&
                        ("break" === e || "continue" === e) &&
                        o.tryLoc <= t &&
                        t <= o.finallyLoc &&
                        (o = null);
                      var a = o ? o.completion : {};
                      return (
                        (a.type = e),
                        (a.arg = t),
                        o
                          ? ((this.method = "next"),
                            (this.next = o.finallyLoc),
                            m)
                          : this.complete(a)
                      );
                    },
                    complete: function (e, t) {
                      if ("throw" === e.type) throw e.arg;
                      return (
                        "break" === e.type || "continue" === e.type
                          ? (this.next = e.arg)
                          : "return" === e.type
                          ? ((this.rval = this.arg = e.arg),
                            (this.method = "return"),
                            (this.next = "end"))
                          : "normal" === e.type && t && (this.next = t),
                        m
                      );
                    },
                    finish: function (e) {
                      for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e)
                          return (
                            this.complete(r.completion, r.afterLoc), T(r), m
                          );
                      }
                    },
                    catch: function (e) {
                      for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                          var n = r.completion;
                          if ("throw" === n.type) {
                            var i = n.arg;
                            T(r);
                          }
                          return i;
                        }
                      }
                      throw new Error("illegal catch attempt");
                    },
                    delegateYield: function (e, t, n) {
                      return (
                        (this.delegate = {
                          iterator: L(e),
                          resultName: t,
                          nextLoc: n,
                        }),
                        "next" === this.method && (this.arg = r),
                        m
                      );
                    },
                  });
              }
              function _(e, t, r, n) {
                var i = t && t.prototype instanceof x ? t : x,
                  o = Object.create(i.prototype),
                  a = new P(n || []);
                return (
                  (o._invoke = (function (e, t, r) {
                    var n = f;
                    return function (i, o) {
                      if (n === p)
                        throw new Error("Generator is already running");
                      if (n === h) {
                        if ("throw" === i) throw o;
                        return j();
                      }
                      for (r.method = i, r.arg = o; ; ) {
                        var a = r.delegate;
                        if (a) {
                          var s = C(a, r);
                          if (s) {
                            if (s === m) continue;
                            return s;
                          }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                          if (n === f) throw ((n = h), r.arg);
                          r.dispatchException(r.arg);
                        } else
                          "return" === r.method && r.abrupt("return", r.arg);
                        n = p;
                        var c = w(e, t, r);
                        if ("normal" === c.type) {
                          if (((n = r.done ? h : d), c.arg === m)) continue;
                          return { value: c.arg, done: r.done };
                        }
                        "throw" === c.type &&
                          ((n = h), (r.method = "throw"), (r.arg = c.arg));
                      }
                    };
                  })(e, r, a)),
                  o
                );
              }
              function w(e, t, r) {
                try {
                  return { type: "normal", arg: e.call(t, r) };
                } catch (e) {
                  return { type: "throw", arg: e };
                }
              }
              function x() {}
              function E() {}
              function S() {}
              function O(e) {
                ["next", "throw", "return"].forEach(function (t) {
                  e[t] = function (e) {
                    return this._invoke(t, e);
                  };
                });
              }
              function k(e) {
                function t(r, n, o, a) {
                  var s = w(e[r], e, n);
                  if ("throw" !== s.type) {
                    var c = s.arg,
                      u = c.value;
                    return u && "object" == typeof u && i.call(u, "__await")
                      ? Promise.resolve(u.__await).then(
                          function (e) {
                            t("next", e, o, a);
                          },
                          function (e) {
                            t("throw", e, o, a);
                          }
                        )
                      : Promise.resolve(u).then(function (e) {
                          (c.value = e), o(c);
                        }, a);
                  }
                  a(s.arg);
                }
                var r;
                this._invoke = function (e, n) {
                  function i() {
                    return new Promise(function (r, i) {
                      t(e, n, r, i);
                    });
                  }
                  return (r = r ? r.then(i, i) : i());
                };
              }
              function C(e, t) {
                var n = e.iterator[t.method];
                if (n === r) {
                  if (((t.delegate = null), "throw" === t.method)) {
                    if (
                      e.iterator.return &&
                      ((t.method = "return"),
                      (t.arg = r),
                      C(e, t),
                      "throw" === t.method)
                    )
                      return m;
                    (t.method = "throw"),
                      (t.arg = new TypeError(
                        "The iterator does not provide a 'throw' method"
                      ));
                  }
                  return m;
                }
                var i = w(n, e.iterator, t.arg);
                if ("throw" === i.type)
                  return (
                    (t.method = "throw"),
                    (t.arg = i.arg),
                    (t.delegate = null),
                    m
                  );
                var o = i.arg;
                return o
                  ? o.done
                    ? ((t[e.resultName] = o.value),
                      (t.next = e.nextLoc),
                      "return" !== t.method &&
                        ((t.method = "next"), (t.arg = r)),
                      (t.delegate = null),
                      m)
                    : o
                  : ((t.method = "throw"),
                    (t.arg = new TypeError("iterator result is not an object")),
                    (t.delegate = null),
                    m);
              }
              function A(e) {
                var t = { tryLoc: e[0] };
                1 in e && (t.catchLoc = e[1]),
                  2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                  this.tryEntries.push(t);
              }
              function T(e) {
                var t = e.completion || {};
                (t.type = "normal"), delete t.arg, (e.completion = t);
              }
              function P(e) {
                (this.tryEntries = [{ tryLoc: "root" }]),
                  e.forEach(A, this),
                  this.reset(!0);
              }
              function L(e) {
                if (e) {
                  var t = e[a];
                  if (t) return t.call(e);
                  if ("function" == typeof e.next) return e;
                  if (!isNaN(e.length)) {
                    var n = -1,
                      o = function t() {
                        for (; ++n < e.length; )
                          if (i.call(e, n))
                            return (t.value = e[n]), (t.done = !1), t;
                        return (t.value = r), (t.done = !0), t;
                      };
                    return (o.next = o);
                  }
                }
                return { next: j };
              }
              function j() {
                return { value: r, done: !0 };
              }
            })(
              (function () {
                return this;
              })() || Function("return this")()
            );
          },
          "99af": function (e, t, r) {
            "use strict";
            var n = r("23e7"),
              i = r("d039"),
              o = r("e8b5"),
              a = r("861d"),
              s = r("7b0b"),
              c = r("50c4"),
              u = r("8418"),
              l = r("65f0"),
              f = r("1dde"),
              d = r("b622"),
              p = r("2d00"),
              h = d("isConcatSpreadable"),
              m = 9007199254740991,
              v = "Maximum allowed index exceeded",
              g =
                p >= 51 ||
                !i(function () {
                  var e = [];
                  return (e[h] = !1), e.concat()[0] !== e;
                }),
              y = f("concat"),
              b = function (e) {
                if (!a(e)) return !1;
                var t = e[h];
                return void 0 !== t ? !!t : o(e);
              };
            n(
              { target: "Array", proto: !0, forced: !g || !y },
              {
                concat: function (e) {
                  var t,
                    r,
                    n,
                    i,
                    o,
                    a = s(this),
                    f = l(a, 0),
                    d = 0;
                  for (t = -1, n = arguments.length; t < n; t++)
                    if (b((o = -1 === t ? a : arguments[t]))) {
                      if (d + (i = c(o.length)) > m) throw TypeError(v);
                      for (r = 0; r < i; r++, d++) r in o && u(f, d, o[r]);
                    } else {
                      if (d >= m) throw TypeError(v);
                      u(f, d++, o);
                    }
                  return (f.length = d), f;
                },
              }
            );
          },
          "9bdd": function (e, t, r) {
            var n = r("825a");
            e.exports = function (e, t, r, i) {
              try {
                return i ? t(n(r)[0], r[1]) : t(r);
              } catch (t) {
                var o = e.return;
                throw (void 0 !== o && n(o.call(e)), t);
              }
            };
          },
          "9bf2": function (e, t, r) {
            var n = r("83ab"),
              i = r("0cfb"),
              o = r("825a"),
              a = r("c04e"),
              s = Object.defineProperty;
            t.f = n
              ? s
              : function (e, t, r) {
                  if ((o(e), (t = a(t, !0)), o(r), i))
                    try {
                      return s(e, t, r);
                    } catch (e) {}
                  if ("get" in r || "set" in r)
                    throw TypeError("Accessors not supported");
                  return "value" in r && (e[t] = r.value), e;
                };
          },
          "9ed3": function (e, t, r) {
            "use strict";
            var n = r("ae93").IteratorPrototype,
              i = r("7c73"),
              o = r("5c6c"),
              a = r("d44e"),
              s = r("3f8c"),
              c = function () {
                return this;
              };
            e.exports = function (e, t, r) {
              var u = t + " Iterator";
              return (
                (e.prototype = i(n, { next: o(1, r) })),
                a(e, u, !1, !0),
                (s[u] = c),
                e
              );
            };
          },
          a434: function (e, t, r) {
            "use strict";
            var n = r("23e7"),
              i = r("23cb"),
              o = r("a691"),
              a = r("50c4"),
              s = r("7b0b"),
              c = r("65f0"),
              u = r("8418"),
              l = r("1dde"),
              f = r("ae40"),
              d = l("splice"),
              p = f("splice", { ACCESSORS: !0, 0: 0, 1: 2 }),
              h = Math.max,
              m = Math.min,
              v = 9007199254740991,
              g = "Maximum allowed length exceeded";
            n(
              { target: "Array", proto: !0, forced: !d || !p },
              {
                splice: function (e, t) {
                  var r,
                    n,
                    l,
                    f,
                    d,
                    p,
                    y = s(this),
                    b = a(y.length),
                    _ = i(e, b),
                    w = arguments.length;
                  if (
                    (0 === w
                      ? (r = n = 0)
                      : 1 === w
                      ? ((r = 0), (n = b - _))
                      : ((r = w - 2), (n = m(h(o(t), 0), b - _))),
                    b + r - n > v)
                  )
                    throw TypeError(g);
                  for (l = c(y, n), f = 0; f < n; f++)
                    (d = _ + f) in y && u(l, f, y[d]);
                  if (((l.length = n), r < n)) {
                    for (f = _; f < b - n; f++)
                      (p = f + r),
                        (d = f + n) in y ? (y[p] = y[d]) : delete y[p];
                    for (f = b; f > b - n + r; f--) delete y[f - 1];
                  } else if (r > n)
                    for (f = b - n; f > _; f--)
                      (p = f + r - 1),
                        (d = f + n - 1) in y ? (y[p] = y[d]) : delete y[p];
                  for (f = 0; f < r; f++) y[f + _] = arguments[f + 2];
                  return (y.length = b - n + r), l;
                },
              }
            );
          },
          a4d3: function (e, t, r) {
            "use strict";
            var n = r("23e7"),
              i = r("da84"),
              o = r("d066"),
              a = r("c430"),
              s = r("83ab"),
              c = r("4930"),
              u = r("fdbf"),
              l = r("d039"),
              f = r("5135"),
              d = r("e8b5"),
              p = r("861d"),
              h = r("825a"),
              m = r("7b0b"),
              v = r("fc6a"),
              g = r("c04e"),
              y = r("5c6c"),
              b = r("7c73"),
              _ = r("df75"),
              w = r("241c"),
              x = r("057f"),
              E = r("7418"),
              S = r("06cf"),
              O = r("9bf2"),
              k = r("d1e7"),
              C = r("9112"),
              A = r("6eeb"),
              T = r("5692"),
              P = r("f772"),
              L = r("d012"),
              j = r("90e3"),
              N = r("b622"),
              M = r("e538"),
              I = r("746f"),
              R = r("d44e"),
              D = r("69f3"),
              q = r("b727").forEach,
              $ = P("hidden"),
              F = "Symbol",
              U = "prototype",
              G = N("toPrimitive"),
              z = D.set,
              B = D.getterFor(F),
              W = Object[U],
              V = i.Symbol,
              Y = o("JSON", "stringify"),
              H = S.f,
              J = O.f,
              X = x.f,
              Q = k.f,
              Z = T("symbols"),
              K = T("op-symbols"),
              ee = T("string-to-symbol-registry"),
              te = T("symbol-to-string-registry"),
              re = T("wks"),
              ne = i.QObject,
              ie = !ne || !ne[U] || !ne[U].findChild,
              oe =
                s &&
                l(function () {
                  return (
                    7 !=
                    b(
                      J({}, "a", {
                        get: function () {
                          return J(this, "a", { value: 7 }).a;
                        },
                      })
                    ).a
                  );
                })
                  ? function (e, t, r) {
                      var n = H(W, t);
                      n && delete W[t], J(e, t, r), n && e !== W && J(W, t, n);
                    }
                  : J,
              ae = function (e, t) {
                var r = (Z[e] = b(V[U]));
                return (
                  z(r, { type: F, tag: e, description: t }),
                  s || (r.description = t),
                  r
                );
              },
              se = u
                ? function (e) {
                    return "symbol" == typeof e;
                  }
                : function (e) {
                    return Object(e) instanceof V;
                  },
              ce = function (e, t, r) {
                e === W && ce(K, t, r), h(e);
                var n = g(t, !0);
                return (
                  h(r),
                  f(Z, n)
                    ? (r.enumerable
                        ? (f(e, $) && e[$][n] && (e[$][n] = !1),
                          (r = b(r, { enumerable: y(0, !1) })))
                        : (f(e, $) || J(e, $, y(1, {})), (e[$][n] = !0)),
                      oe(e, n, r))
                    : J(e, n, r)
                );
              },
              ue = function (e, t) {
                h(e);
                var r = v(t),
                  n = _(r).concat(pe(r));
                return (
                  q(n, function (t) {
                    (s && !le.call(r, t)) || ce(e, t, r[t]);
                  }),
                  e
                );
              },
              le = function (e) {
                var t = g(e, !0),
                  r = Q.call(this, t);
                return (
                  !(this === W && f(Z, t) && !f(K, t)) &&
                  (!(
                    r ||
                    !f(this, t) ||
                    !f(Z, t) ||
                    (f(this, $) && this[$][t])
                  ) ||
                    r)
                );
              },
              fe = function (e, t) {
                var r = v(e),
                  n = g(t, !0);
                if (r !== W || !f(Z, n) || f(K, n)) {
                  var i = H(r, n);
                  return (
                    !i ||
                      !f(Z, n) ||
                      (f(r, $) && r[$][n]) ||
                      (i.enumerable = !0),
                    i
                  );
                }
              },
              de = function (e) {
                var t = X(v(e)),
                  r = [];
                return (
                  q(t, function (e) {
                    f(Z, e) || f(L, e) || r.push(e);
                  }),
                  r
                );
              },
              pe = function (e) {
                var t = e === W,
                  r = X(t ? K : v(e)),
                  n = [];
                return (
                  q(r, function (e) {
                    !f(Z, e) || (t && !f(W, e)) || n.push(Z[e]);
                  }),
                  n
                );
              };
            (c ||
              ((V = function () {
                if (this instanceof V)
                  throw TypeError("Symbol is not a constructor");
                var e =
                    arguments.length && void 0 !== arguments[0]
                      ? String(arguments[0])
                      : void 0,
                  t = j(e),
                  r = function (e) {
                    this === W && r.call(K, e),
                      f(this, $) && f(this[$], t) && (this[$][t] = !1),
                      oe(this, t, y(1, e));
                  };
                return (
                  s && ie && oe(W, t, { configurable: !0, set: r }), ae(t, e)
                );
              }),
              A(V[U], "toString", function () {
                return B(this).tag;
              }),
              A(V, "withoutSetter", function (e) {
                return ae(j(e), e);
              }),
              (k.f = le),
              (O.f = ce),
              (S.f = fe),
              (w.f = x.f = de),
              (E.f = pe),
              (M.f = function (e) {
                return ae(N(e), e);
              }),
              s &&
                (J(V[U], "description", {
                  configurable: !0,
                  get: function () {
                    return B(this).description;
                  },
                }),
                a || A(W, "propertyIsEnumerable", le, { unsafe: !0 }))),
            n({ global: !0, wrap: !0, forced: !c, sham: !c }, { Symbol: V }),
            q(_(re), function (e) {
              I(e);
            }),
            n(
              { target: F, stat: !0, forced: !c },
              {
                for: function (e) {
                  var t = String(e);
                  if (f(ee, t)) return ee[t];
                  var r = V(t);
                  return (ee[t] = r), (te[r] = t), r;
                },
                keyFor: function (e) {
                  if (!se(e)) throw TypeError(e + " is not a symbol");
                  if (f(te, e)) return te[e];
                },
                useSetter: function () {
                  ie = !0;
                },
                useSimple: function () {
                  ie = !1;
                },
              }
            ),
            n(
              { target: "Object", stat: !0, forced: !c, sham: !s },
              {
                create: function (e, t) {
                  return void 0 === t ? b(e) : ue(b(e), t);
                },
                defineProperty: ce,
                defineProperties: ue,
                getOwnPropertyDescriptor: fe,
              }
            ),
            n(
              { target: "Object", stat: !0, forced: !c },
              { getOwnPropertyNames: de, getOwnPropertySymbols: pe }
            ),
            n(
              {
                target: "Object",
                stat: !0,
                forced: l(function () {
                  E.f(1);
                }),
              },
              {
                getOwnPropertySymbols: function (e) {
                  return E.f(m(e));
                },
              }
            ),
            Y) &&
              n(
                {
                  target: "JSON",
                  stat: !0,
                  forced:
                    !c ||
                    l(function () {
                      var e = V();
                      return (
                        "[null]" != Y([e]) ||
                        "{}" != Y({ a: e }) ||
                        "{}" != Y(Object(e))
                      );
                    }),
                },
                {
                  stringify: function (e, t, r) {
                    for (var n, i = [e], o = 1; arguments.length > o; )
                      i.push(arguments[o++]);
                    if (((n = t), (p(t) || void 0 !== e) && !se(e)))
                      return (
                        d(t) ||
                          (t = function (e, t) {
                            if (
                              ("function" == typeof n &&
                                (t = n.call(this, e, t)),
                              !se(t))
                            )
                              return t;
                          }),
                        (i[1] = t),
                        Y.apply(null, i)
                      );
                  },
                }
              );
            V[U][G] || C(V[U], G, V[U].valueOf), R(V, F), (L[$] = !0);
          },
          a630: function (e, t, r) {
            var n = r("23e7"),
              i = r("4df4");
            n(
              {
                target: "Array",
                stat: !0,
                forced: !r("1c7e")(function (e) {
                  Array.from(e);
                }),
              },
              { from: i }
            );
          },
          a640: function (e, t, r) {
            "use strict";
            var n = r("d039");
            e.exports = function (e, t) {
              var r = [][e];
              return (
                !!r &&
                n(function () {
                  r.call(
                    null,
                    t ||
                      function () {
                        throw 1;
                      },
                    1
                  );
                })
              );
            };
          },
          a691: function (e, t) {
            var r = Math.ceil,
              n = Math.floor;
            e.exports = function (e) {
              return isNaN((e = +e)) ? 0 : (e > 0 ? n : r)(e);
            };
          },
          a9e3: function (e, t, r) {
            "use strict";
            var n = r("83ab"),
              i = r("da84"),
              o = r("94ca"),
              a = r("6eeb"),
              s = r("5135"),
              c = r("c6b6"),
              u = r("7156"),
              l = r("c04e"),
              f = r("d039"),
              d = r("7c73"),
              p = r("241c").f,
              h = r("06cf").f,
              m = r("9bf2").f,
              v = r("58a8").trim,
              g = "Number",
              y = i[g],
              b = y.prototype,
              _ = c(d(b)) == g,
              w = function (e) {
                var t,
                  r,
                  n,
                  i,
                  o,
                  a,
                  s,
                  c,
                  u = l(e, !1);
                if ("string" == typeof u && u.length > 2)
                  if (43 === (t = (u = v(u)).charCodeAt(0)) || 45 === t) {
                    if (88 === (r = u.charCodeAt(2)) || 120 === r) return NaN;
                  } else if (48 === t) {
                    switch (u.charCodeAt(1)) {
                      case 66:
                      case 98:
                        (n = 2), (i = 49);
                        break;
                      case 79:
                      case 111:
                        (n = 8), (i = 55);
                        break;
                      default:
                        return +u;
                    }
                    for (a = (o = u.slice(2)).length, s = 0; s < a; s++)
                      if ((c = o.charCodeAt(s)) < 48 || c > i) return NaN;
                    return parseInt(o, n);
                  }
                return +u;
              };
            if (o(g, !y(" 0o1") || !y("0b1") || y("+0x1"))) {
              for (
                var x,
                  E = function (e) {
                    var t = arguments.length < 1 ? 0 : e,
                      r = this;
                    return r instanceof E &&
                      (_
                        ? f(function () {
                            b.valueOf.call(r);
                          })
                        : c(r) != g)
                      ? u(new y(w(t)), r, E)
                      : w(t);
                  },
                  S = n
                    ? p(y)
                    : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                        ","
                      ),
                  O = 0;
                S.length > O;
                O++
              )
                s(y, (x = S[O])) && !s(E, x) && m(E, x, h(y, x));
              (E.prototype = b), (b.constructor = E), a(i, g, E);
            }
          },
          ab13: function (e, t, r) {
            var n = r("b622")("match");
            e.exports = function (e) {
              var t = /./;
              try {
                "/./"[e](t);
              } catch (r) {
                try {
                  return (t[n] = !1), "/./"[e](t);
                } catch (e) {}
              }
              return !1;
            };
          },
          ae40: function (e, t, r) {
            var n = r("83ab"),
              i = r("d039"),
              o = r("5135"),
              a = Object.defineProperty,
              s = {},
              c = function (e) {
                throw e;
              };
            e.exports = function (e, t) {
              if (o(s, e)) return s[e];
              t || (t = {});
              var r = [][e],
                u = !!o(t, "ACCESSORS") && t.ACCESSORS,
                l = o(t, 0) ? t[0] : c,
                f = o(t, 1) ? t[1] : void 0;
              return (s[e] =
                !!r &&
                !i(function () {
                  if (u && !n) return !0;
                  var e = { length: -1 };
                  u ? a(e, 1, { enumerable: !0, get: c }) : (e[1] = 1),
                    r.call(e, l, f);
                }));
            };
          },
          ae93: function (e, t, r) {
            "use strict";
            var n,
              i,
              o,
              a = r("e163"),
              s = r("9112"),
              c = r("5135"),
              u = r("b622"),
              l = r("c430"),
              f = u("iterator"),
              d = !1;
            [].keys &&
              ("next" in (o = [].keys())
                ? (i = a(a(o))) !== Object.prototype && (n = i)
                : (d = !0)),
              null == n && (n = {}),
              l ||
                c(n, f) ||
                s(n, f, function () {
                  return this;
                }),
              (e.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: d });
          },
          b041: function (e, t, r) {
            "use strict";
            var n = r("00ee"),
              i = r("f5df");
            e.exports = n
              ? {}.toString
              : function () {
                  return "[object " + i(this) + "]";
                };
          },
          b0c0: function (e, t, r) {
            var n = r("83ab"),
              i = r("9bf2").f,
              o = Function.prototype,
              a = o.toString,
              s = /^\s*function ([^ (]*)/,
              c = "name";
            n &&
              !(c in o) &&
              i(o, c, {
                configurable: !0,
                get: function () {
                  try {
                    return a.call(this).match(s)[1];
                  } catch (e) {
                    return "";
                  }
                },
              });
          },
          b575: function (e, t, r) {
            var n,
              i,
              o,
              a,
              s,
              c,
              u,
              l,
              f = r("da84"),
              d = r("06cf").f,
              p = r("c6b6"),
              h = r("2cf4").set,
              m = r("1cdc"),
              v = f.MutationObserver || f.WebKitMutationObserver,
              g = f.process,
              y = f.Promise,
              b = "process" == p(g),
              _ = d(f, "queueMicrotask"),
              w = _ && _.value;
            w ||
              ((n = function () {
                var e, t;
                for (b && (e = g.domain) && e.exit(); i; ) {
                  (t = i.fn), (i = i.next);
                  try {
                    t();
                  } catch (e) {
                    throw (i ? a() : (o = void 0), e);
                  }
                }
                (o = void 0), e && e.enter();
              }),
              b
                ? (a = function () {
                    g.nextTick(n);
                  })
                : v && !m
                ? ((s = !0),
                  (c = document.createTextNode("")),
                  new v(n).observe(c, { characterData: !0 }),
                  (a = function () {
                    c.data = s = !s;
                  }))
                : y && y.resolve
                ? ((u = y.resolve(void 0)),
                  (l = u.then),
                  (a = function () {
                    l.call(u, n);
                  }))
                : (a = function () {
                    h.call(f, n);
                  })),
              (e.exports =
                w ||
                function (e) {
                  var t = { fn: e, next: void 0 };
                  o && (o.next = t), i || ((i = t), a()), (o = t);
                });
          },
          b622: function (e, t, r) {
            var n = r("da84"),
              i = r("5692"),
              o = r("5135"),
              a = r("90e3"),
              s = r("4930"),
              c = r("fdbf"),
              u = i("wks"),
              l = n.Symbol,
              f = c ? l : (l && l.withoutSetter) || a;
            e.exports = function (e) {
              return (
                o(u, e) ||
                  (s && o(l, e) ? (u[e] = l[e]) : (u[e] = f("Symbol." + e))),
                u[e]
              );
            };
          },
          b64b: function (e, t, r) {
            var n = r("23e7"),
              i = r("7b0b"),
              o = r("df75");
            n(
              {
                target: "Object",
                stat: !0,
                forced: r("d039")(function () {
                  o(1);
                }),
              },
              {
                keys: function (e) {
                  return o(i(e));
                },
              }
            );
          },
          b727: function (e, t, r) {
            var n = r("0366"),
              i = r("44ad"),
              o = r("7b0b"),
              a = r("50c4"),
              s = r("65f0"),
              c = [].push,
              u = function (e) {
                var t = 1 == e,
                  r = 2 == e,
                  u = 3 == e,
                  l = 4 == e,
                  f = 6 == e,
                  d = 5 == e || f;
                return function (p, h, m, v) {
                  for (
                    var g,
                      y,
                      b = o(p),
                      _ = i(b),
                      w = n(h, m, 3),
                      x = a(_.length),
                      E = 0,
                      S = v || s,
                      O = t ? S(p, x) : r ? S(p, 0) : void 0;
                    x > E;
                    E++
                  )
                    if ((d || E in _) && ((y = w((g = _[E]), E, b)), e))
                      if (t) O[E] = y;
                      else if (y)
                        switch (e) {
                          case 3:
                            return !0;
                          case 5:
                            return g;
                          case 6:
                            return E;
                          case 2:
                            c.call(O, g);
                        }
                      else if (l) return !1;
                  return f ? -1 : u || l ? l : O;
                };
              };
            e.exports = {
              forEach: u(0),
              map: u(1),
              filter: u(2),
              some: u(3),
              every: u(4),
              find: u(5),
              findIndex: u(6),
            };
          },
          c04e: function (e, t, r) {
            var n = r("861d");
            e.exports = function (e, t) {
              if (!n(e)) return e;
              var r, i;
              if (
                t &&
                "function" == typeof (r = e.toString) &&
                !n((i = r.call(e)))
              )
                return i;
              if ("function" == typeof (r = e.valueOf) && !n((i = r.call(e))))
                return i;
              if (
                !t &&
                "function" == typeof (r = e.toString) &&
                !n((i = r.call(e)))
              )
                return i;
              throw TypeError("Can't convert object to primitive value");
            };
          },
          c430: function (e, t) {
            e.exports = !1;
          },
          c6b6: function (e, t) {
            var r = {}.toString;
            e.exports = function (e) {
              return r.call(e).slice(8, -1);
            };
          },
          c6cd: function (e, t, r) {
            var n = r("da84"),
              i = r("ce4e"),
              o = "__core-js_shared__",
              a = n[o] || i(o, {});
            e.exports = a;
          },
          c8ba: function (e, t) {
            var r;
            r = (function () {
              return this;
            })();
            try {
              r = r || new Function("return this")();
            } catch (e) {
              "object" == typeof window && (r = window);
            }
            e.exports = r;
          },
          ca84: function (e, t, r) {
            var n = r("5135"),
              i = r("fc6a"),
              o = r("4d64").indexOf,
              a = r("d012");
            e.exports = function (e, t) {
              var r,
                s = i(e),
                c = 0,
                u = [];
              for (r in s) !n(a, r) && n(s, r) && u.push(r);
              for (; t.length > c; )
                n(s, (r = t[c++])) && (~o(u, r) || u.push(r));
              return u;
            };
          },
          caad: function (e, t, r) {
            "use strict";
            var n = r("23e7"),
              i = r("4d64").includes,
              o = r("44d2");
            n(
              {
                target: "Array",
                proto: !0,
                forced: !r("ae40")("indexOf", { ACCESSORS: !0, 1: 0 }),
              },
              {
                includes: function (e) {
                  return i(
                    this,
                    e,
                    arguments.length > 1 ? arguments[1] : void 0
                  );
                },
              }
            ),
              o("includes");
          },
          cc12: function (e, t, r) {
            var n = r("da84"),
              i = r("861d"),
              o = n.document,
              a = i(o) && i(o.createElement);
            e.exports = function (e) {
              return a ? o.createElement(e) : {};
            };
          },
          cdf9: function (e, t, r) {
            var n = r("825a"),
              i = r("861d"),
              o = r("f069");
            e.exports = function (e, t) {
              if ((n(e), i(t) && t.constructor === e)) return t;
              var r = o.f(e);
              return (0, r.resolve)(t), r.promise;
            };
          },
          ce4e: function (e, t, r) {
            var n = r("da84"),
              i = r("9112");
            e.exports = function (e, t) {
              try {
                i(n, e, t);
              } catch (r) {
                n[e] = t;
              }
              return t;
            };
          },
          d012: function (e, t) {
            e.exports = {};
          },
          d039: function (e, t) {
            e.exports = function (e) {
              try {
                return !!e();
              } catch (e) {
                return !0;
              }
            };
          },
          d066: function (e, t, r) {
            var n = r("428f"),
              i = r("da84"),
              o = function (e) {
                return "function" == typeof e ? e : void 0;
              };
            e.exports = function (e, t) {
              return arguments.length < 2
                ? o(n[e]) || o(i[e])
                : (n[e] && n[e][t]) || (i[e] && i[e][t]);
            };
          },
          d1e7: function (e, t, r) {
            "use strict";
            var n = {}.propertyIsEnumerable,
              i = Object.getOwnPropertyDescriptor,
              o = i && !n.call({ 1: 2 }, 1);
            t.f = o
              ? function (e) {
                  var t = i(this, e);
                  return !!t && t.enumerable;
                }
              : n;
          },
          d28b: function (e, t, r) {
            r("746f")("iterator");
          },
          d2bb: function (e, t, r) {
            var n = r("825a"),
              i = r("3bbe");
            e.exports =
              Object.setPrototypeOf ||
              ("__proto__" in {}
                ? (function () {
                    var e,
                      t = !1,
                      r = {};
                    try {
                      (e = Object.getOwnPropertyDescriptor(
                        Object.prototype,
                        "__proto__"
                      ).set).call(r, []),
                        (t = r instanceof Array);
                    } catch (e) {}
                    return function (r, o) {
                      return (
                        n(r), i(o), t ? e.call(r, o) : (r.__proto__ = o), r
                      );
                    };
                  })()
                : void 0);
          },
          d3b7: function (e, t, r) {
            var n = r("00ee"),
              i = r("6eeb"),
              o = r("b041");
            n || i(Object.prototype, "toString", o, { unsafe: !0 });
          },
          d44e: function (e, t, r) {
            var n = r("9bf2").f,
              i = r("5135"),
              o = r("b622")("toStringTag");
            e.exports = function (e, t, r) {
              e &&
                !i((e = r ? e : e.prototype), o) &&
                n(e, o, { configurable: !0, value: t });
            };
          },
          d81d: function (e, t, r) {
            "use strict";
            var n = r("23e7"),
              i = r("b727").map,
              o = r("1dde"),
              a = r("ae40"),
              s = o("map"),
              c = a("map");
            n(
              { target: "Array", proto: !0, forced: !s || !c },
              {
                map: function (e) {
                  return i(
                    this,
                    e,
                    arguments.length > 1 ? arguments[1] : void 0
                  );
                },
              }
            );
          },
          da84: function (e, t, r) {
            (function (t) {
              var r = function (e) {
                return e && e.Math == Math && e;
              };
              e.exports =
                r("object" == typeof globalThis && globalThis) ||
                r("object" == typeof window && window) ||
                r("object" == typeof self && self) ||
                r("object" == typeof t && t) ||
                Function("return this")();
            }).call(this, r("c8ba"));
          },
          dbb4: function (e, t, r) {
            var n = r("23e7"),
              i = r("83ab"),
              o = r("56ef"),
              a = r("fc6a"),
              s = r("06cf"),
              c = r("8418");
            n(
              { target: "Object", stat: !0, sham: !i },
              {
                getOwnPropertyDescriptors: function (e) {
                  for (
                    var t, r, n = a(e), i = s.f, u = o(n), l = {}, f = 0;
                    u.length > f;

                  )
                    void 0 !== (r = i(n, (t = u[f++]))) && c(l, t, r);
                  return l;
                },
              }
            );
          },
          ddb0: function (e, t, r) {
            var n = r("da84"),
              i = r("fdbc"),
              o = r("e260"),
              a = r("9112"),
              s = r("b622"),
              c = s("iterator"),
              u = s("toStringTag"),
              l = o.values;
            for (var f in i) {
              var d = n[f],
                p = d && d.prototype;
              if (p) {
                if (p[c] !== l)
                  try {
                    a(p, c, l);
                  } catch (e) {
                    p[c] = l;
                  }
                if ((p[u] || a(p, u, f), i[f]))
                  for (var h in o)
                    if (p[h] !== o[h])
                      try {
                        a(p, h, o[h]);
                      } catch (e) {
                        p[h] = o[h];
                      }
              }
            }
          },
          df75: function (e, t, r) {
            var n = r("ca84"),
              i = r("7839");
            e.exports =
              Object.keys ||
              function (e) {
                return n(e, i);
              };
          },
          e01a: function (e, t, r) {
            "use strict";
            var n = r("23e7"),
              i = r("83ab"),
              o = r("da84"),
              a = r("5135"),
              s = r("861d"),
              c = r("9bf2").f,
              u = r("e893"),
              l = o.Symbol;
            if (
              i &&
              "function" == typeof l &&
              (!("description" in l.prototype) || void 0 !== l().description)
            ) {
              var f = {},
                d = function () {
                  var e =
                      arguments.length < 1 || void 0 === arguments[0]
                        ? void 0
                        : String(arguments[0]),
                    t =
                      this instanceof d ? new l(e) : void 0 === e ? l() : l(e);
                  return "" === e && (f[t] = !0), t;
                };
              u(d, l);
              var p = (d.prototype = l.prototype);
              p.constructor = d;
              var h = p.toString,
                m = "Symbol(test)" == String(l("test")),
                v = /^Symbol\((.*)\)[^)]+$/;
              c(p, "description", {
                configurable: !0,
                get: function () {
                  var e = s(this) ? this.valueOf() : this,
                    t = h.call(e);
                  if (a(f, e)) return "";
                  var r = m ? t.slice(7, -1) : t.replace(v, "$1");
                  return "" === r ? void 0 : r;
                },
              }),
                n({ global: !0, forced: !0 }, { Symbol: d });
            }
          },
          e163: function (e, t, r) {
            var n = r("5135"),
              i = r("7b0b"),
              o = r("f772"),
              a = r("e177"),
              s = o("IE_PROTO"),
              c = Object.prototype;
            e.exports = a
              ? Object.getPrototypeOf
              : function (e) {
                  return (
                    (e = i(e)),
                    n(e, s)
                      ? e[s]
                      : "function" == typeof e.constructor &&
                        e instanceof e.constructor
                      ? e.constructor.prototype
                      : e instanceof Object
                      ? c
                      : null
                  );
                };
          },
          e177: function (e, t, r) {
            var n = r("d039");
            e.exports = !n(function () {
              function e() {}
              return (
                (e.prototype.constructor = null),
                Object.getPrototypeOf(new e()) !== e.prototype
              );
            });
          },
          e260: function (e, t, r) {
            "use strict";
            var n = r("fc6a"),
              i = r("44d2"),
              o = r("3f8c"),
              a = r("69f3"),
              s = r("7dd0"),
              c = "Array Iterator",
              u = a.set,
              l = a.getterFor(c);
            (e.exports = s(
              Array,
              "Array",
              function (e, t) {
                u(this, { type: c, target: n(e), index: 0, kind: t });
              },
              function () {
                var e = l(this),
                  t = e.target,
                  r = e.kind,
                  n = e.index++;
                return !t || n >= t.length
                  ? ((e.target = void 0), { value: void 0, done: !0 })
                  : "keys" == r
                  ? { value: n, done: !1 }
                  : "values" == r
                  ? { value: t[n], done: !1 }
                  : { value: [n, t[n]], done: !1 };
              },
              "values"
            )),
              (o.Arguments = o.Array),
              i("keys"),
              i("values"),
              i("entries");
          },
          e2cc: function (e, t, r) {
            var n = r("6eeb");
            e.exports = function (e, t, r) {
              for (var i in t) n(e, i, t[i], r);
              return e;
            };
          },
          e439: function (e, t, r) {
            var n = r("23e7"),
              i = r("d039"),
              o = r("fc6a"),
              a = r("06cf").f,
              s = r("83ab"),
              c = i(function () {
                a(1);
              });
            n(
              { target: "Object", stat: !0, forced: !s || c, sham: !s },
              {
                getOwnPropertyDescriptor: function (e, t) {
                  return a(o(e), t);
                },
              }
            );
          },
          e538: function (e, t, r) {
            var n = r("b622");
            t.f = n;
          },
          e667: function (e, t) {
            e.exports = function (e) {
              try {
                return { error: !1, value: e() };
              } catch (e) {
                return { error: !0, value: e };
              }
            };
          },
          e6cf: function (e, t, r) {
            "use strict";
            var n,
              i,
              o,
              a,
              s = r("23e7"),
              c = r("c430"),
              u = r("da84"),
              l = r("d066"),
              f = r("fea9"),
              d = r("6eeb"),
              p = r("e2cc"),
              h = r("d44e"),
              m = r("2626"),
              v = r("861d"),
              g = r("1c0b"),
              y = r("19aa"),
              b = r("c6b6"),
              _ = r("8925"),
              w = r("2266"),
              x = r("1c7e"),
              E = r("4840"),
              S = r("2cf4").set,
              O = r("b575"),
              k = r("cdf9"),
              C = r("44de"),
              A = r("f069"),
              T = r("e667"),
              P = r("69f3"),
              L = r("94ca"),
              j = r("b622"),
              N = r("2d00"),
              M = j("species"),
              I = "Promise",
              R = P.get,
              D = P.set,
              q = P.getterFor(I),
              $ = f,
              F = u.TypeError,
              U = u.document,
              G = u.process,
              z = l("fetch"),
              B = A.f,
              W = B,
              V = "process" == b(G),
              Y = !!(U && U.createEvent && u.dispatchEvent),
              H = "unhandledrejection",
              J = L(I, function () {
                if (!(_($) !== String($))) {
                  if (66 === N) return !0;
                  if (!V && "function" != typeof PromiseRejectionEvent)
                    return !0;
                }
                if (c && !$.prototype.finally) return !0;
                if (N >= 51 && /native code/.test($)) return !1;
                var e = $.resolve(1),
                  t = function (e) {
                    e(
                      function () {},
                      function () {}
                    );
                  };
                return (
                  ((e.constructor = {})[M] = t),
                  !(e.then(function () {}) instanceof t)
                );
              }),
              X =
                J ||
                !x(function (e) {
                  $.all(e).catch(function () {});
                }),
              Q = function (e) {
                var t;
                return !(!v(e) || "function" != typeof (t = e.then)) && t;
              },
              Z = function (e, t, r) {
                if (!t.notified) {
                  t.notified = !0;
                  var n = t.reactions;
                  O(function () {
                    for (
                      var i = t.value, o = 1 == t.state, a = 0;
                      n.length > a;

                    ) {
                      var s,
                        c,
                        u,
                        l = n[a++],
                        f = o ? l.ok : l.fail,
                        d = l.resolve,
                        p = l.reject,
                        h = l.domain;
                      try {
                        f
                          ? (o ||
                              (2 === t.rejection && re(e, t),
                              (t.rejection = 1)),
                            !0 === f
                              ? (s = i)
                              : (h && h.enter(),
                                (s = f(i)),
                                h && (h.exit(), (u = !0))),
                            s === l.promise
                              ? p(F("Promise-chain cycle"))
                              : (c = Q(s))
                              ? c.call(s, d, p)
                              : d(s))
                          : p(i);
                      } catch (e) {
                        h && !u && h.exit(), p(e);
                      }
                    }
                    (t.reactions = []),
                      (t.notified = !1),
                      r && !t.rejection && ee(e, t);
                  });
                }
              },
              K = function (e, t, r) {
                var n, i;
                Y
                  ? (((n = U.createEvent("Event")).promise = t),
                    (n.reason = r),
                    n.initEvent(e, !1, !0),
                    u.dispatchEvent(n))
                  : (n = { promise: t, reason: r }),
                  (i = u["on" + e])
                    ? i(n)
                    : e === H && C("Unhandled promise rejection", r);
              },
              ee = function (e, t) {
                S.call(u, function () {
                  var r,
                    n = t.value;
                  if (
                    te(t) &&
                    ((r = T(function () {
                      V ? G.emit("unhandledRejection", n, e) : K(H, e, n);
                    })),
                    (t.rejection = V || te(t) ? 2 : 1),
                    r.error)
                  )
                    throw r.value;
                });
              },
              te = function (e) {
                return 1 !== e.rejection && !e.parent;
              },
              re = function (e, t) {
                S.call(u, function () {
                  V
                    ? G.emit("rejectionHandled", e)
                    : K("rejectionhandled", e, t.value);
                });
              },
              ne = function (e, t, r, n) {
                return function (i) {
                  e(t, r, i, n);
                };
              },
              ie = function (e, t, r, n) {
                t.done ||
                  ((t.done = !0),
                  n && (t = n),
                  (t.value = r),
                  (t.state = 2),
                  Z(e, t, !0));
              },
              oe = function (e, t, r, n) {
                if (!t.done) {
                  (t.done = !0), n && (t = n);
                  try {
                    if (e === r) throw F("Promise can't be resolved itself");
                    var i = Q(r);
                    i
                      ? O(function () {
                          var n = { done: !1 };
                          try {
                            i.call(r, ne(oe, e, n, t), ne(ie, e, n, t));
                          } catch (r) {
                            ie(e, n, r, t);
                          }
                        })
                      : ((t.value = r), (t.state = 1), Z(e, t, !1));
                  } catch (r) {
                    ie(e, { done: !1 }, r, t);
                  }
                }
              };
            J &&
              (($ = function (e) {
                y(this, $, I), g(e), n.call(this);
                var t = R(this);
                try {
                  e(ne(oe, this, t), ne(ie, this, t));
                } catch (e) {
                  ie(this, t, e);
                }
              }),
              ((n = function (e) {
                D(this, {
                  type: I,
                  done: !1,
                  notified: !1,
                  parent: !1,
                  reactions: [],
                  rejection: !1,
                  state: 0,
                  value: void 0,
                });
              }).prototype = p($.prototype, {
                then: function (e, t) {
                  var r = q(this),
                    n = B(E(this, $));
                  return (
                    (n.ok = "function" != typeof e || e),
                    (n.fail = "function" == typeof t && t),
                    (n.domain = V ? G.domain : void 0),
                    (r.parent = !0),
                    r.reactions.push(n),
                    0 != r.state && Z(this, r, !1),
                    n.promise
                  );
                },
                catch: function (e) {
                  return this.then(void 0, e);
                },
              })),
              (i = function () {
                var e = new n(),
                  t = R(e);
                (this.promise = e),
                  (this.resolve = ne(oe, e, t)),
                  (this.reject = ne(ie, e, t));
              }),
              (A.f = B =
                function (e) {
                  return e === $ || e === o ? new i(e) : W(e);
                }),
              c ||
                "function" != typeof f ||
                ((a = f.prototype.then),
                d(
                  f.prototype,
                  "then",
                  function (e, t) {
                    var r = this;
                    return new $(function (e, t) {
                      a.call(r, e, t);
                    }).then(e, t);
                  },
                  { unsafe: !0 }
                ),
                "function" == typeof z &&
                  s(
                    { global: !0, enumerable: !0, forced: !0 },
                    {
                      fetch: function (e) {
                        return k($, z.apply(u, arguments));
                      },
                    }
                  ))),
              s({ global: !0, wrap: !0, forced: J }, { Promise: $ }),
              h($, I, !1, !0),
              m(I),
              (o = l(I)),
              s(
                { target: I, stat: !0, forced: J },
                {
                  reject: function (e) {
                    var t = B(this);
                    return t.reject.call(void 0, e), t.promise;
                  },
                }
              ),
              s(
                { target: I, stat: !0, forced: c || J },
                {
                  resolve: function (e) {
                    return k(c && this === o ? $ : this, e);
                  },
                }
              ),
              s(
                { target: I, stat: !0, forced: X },
                {
                  all: function (e) {
                    var t = this,
                      r = B(t),
                      n = r.resolve,
                      i = r.reject,
                      o = T(function () {
                        var r = g(t.resolve),
                          o = [],
                          a = 0,
                          s = 1;
                        w(e, function (e) {
                          var c = a++,
                            u = !1;
                          o.push(void 0),
                            s++,
                            r.call(t, e).then(function (e) {
                              u || ((u = !0), (o[c] = e), --s || n(o));
                            }, i);
                        }),
                          --s || n(o);
                      });
                    return o.error && i(o.value), r.promise;
                  },
                  race: function (e) {
                    var t = this,
                      r = B(t),
                      n = r.reject,
                      i = T(function () {
                        var i = g(t.resolve);
                        w(e, function (e) {
                          i.call(t, e).then(r.resolve, n);
                        });
                      });
                    return i.error && n(i.value), r.promise;
                  },
                }
              );
          },
          e893: function (e, t, r) {
            var n = r("5135"),
              i = r("56ef"),
              o = r("06cf"),
              a = r("9bf2");
            e.exports = function (e, t) {
              for (var r = i(t), s = a.f, c = o.f, u = 0; u < r.length; u++) {
                var l = r[u];
                n(e, l) || s(e, l, c(t, l));
              }
            };
          },
          e8b5: function (e, t, r) {
            var n = r("c6b6");
            e.exports =
              Array.isArray ||
              function (e) {
                return "Array" == n(e);
              };
          },
          e95a: function (e, t, r) {
            var n = r("b622"),
              i = r("3f8c"),
              o = n("iterator"),
              a = Array.prototype;
            e.exports = function (e) {
              return void 0 !== e && (i.Array === e || a[o] === e);
            };
          },
          f069: function (e, t, r) {
            "use strict";
            var n = r("1c0b"),
              i = function (e) {
                var t, r;
                (this.promise = new e(function (e, n) {
                  if (void 0 !== t || void 0 !== r)
                    throw TypeError("Bad Promise constructor");
                  (t = e), (r = n);
                })),
                  (this.resolve = n(t)),
                  (this.reject = n(r));
              };
            e.exports.f = function (e) {
              return new i(e);
            };
          },
          f5df: function (e, t, r) {
            var n = r("00ee"),
              i = r("c6b6"),
              o = r("b622")("toStringTag"),
              a =
                "Arguments" ==
                i(
                  (function () {
                    return arguments;
                  })()
                );
            e.exports = n
              ? i
              : function (e) {
                  var t, r, n;
                  return void 0 === e
                    ? "Undefined"
                    : null === e
                    ? "Null"
                    : "string" ==
                      typeof (r = (function (e, t) {
                        try {
                          return e[t];
                        } catch (e) {}
                      })((t = Object(e)), o))
                    ? r
                    : a
                    ? i(t)
                    : "Object" == (n = i(t)) && "function" == typeof t.callee
                    ? "Arguments"
                    : n;
                };
          },
          f748: function (e, t) {
            e.exports =
              Math.sign ||
              function (e) {
                return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1;
              };
          },
          f772: function (e, t, r) {
            var n = r("5692"),
              i = r("90e3"),
              o = n("keys");
            e.exports = function (e) {
              return o[e] || (o[e] = i(e));
            };
          },
          fb15: function (e, t, r) {
            "use strict";
            if ((r.r(t), "undefined" != typeof window)) {
              var n = window.document.currentScript,
                i = r("8875");
              (n = i()),
                "currentScript" in document ||
                  Object.defineProperty(document, "currentScript", { get: i });
              var o = n && n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
              o && (r.p = o[1]);
            }
            r("a4d3"),
              r("e01a"),
              r("d3b7"),
              r("d28b"),
              r("3ca3"),
              r("e260"),
              r("ddb0");
            r("fb6a"), r("b0c0"), r("a630");
            function a(e, t) {
              (null == t || t > e.length) && (t = e.length);
              for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
              return n;
            }
            function s(e, t) {
              if (e) {
                if ("string" == typeof e) return a(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? a(e, t)
                    : void 0
                );
              }
            }
            function c(e, t) {
              return (
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                  if (
                    "undefined" != typeof Symbol &&
                    Symbol.iterator in Object(e)
                  ) {
                    var r = [],
                      n = !0,
                      i = !1,
                      o = void 0;
                    try {
                      for (
                        var a, s = e[Symbol.iterator]();
                        !(n = (a = s.next()).done) &&
                        (r.push(a.value), !t || r.length !== t);
                        n = !0
                      );
                    } catch (e) {
                      (i = !0), (o = e);
                    } finally {
                      try {
                        n || null == s.return || s.return();
                      } finally {
                        if (i) throw o;
                      }
                    }
                    return r;
                  }
                })(e, t) ||
                s(e, t) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
              );
            }
            r("e6cf");
            function u(e, t, r, n, i, o, a) {
              try {
                var s = e[o](a),
                  c = s.value;
              } catch (e) {
                return void r(e);
              }
              s.done ? t(c) : Promise.resolve(c).then(n, i);
            }
            function l(e) {
              return function () {
                var t = this,
                  r = arguments;
                return new Promise(function (n, i) {
                  var o = e.apply(t, r);
                  function a(e) {
                    u(o, n, i, a, s, "next", e);
                  }
                  function s(e) {
                    u(o, n, i, a, s, "throw", e);
                  }
                  a(void 0);
                });
              };
            }
            function f(e) {
              return (
                (function (e) {
                  if (Array.isArray(e)) return a(e);
                })(e) ||
                (function (e) {
                  if (
                    "undefined" != typeof Symbol &&
                    Symbol.iterator in Object(e)
                  )
                    return Array.from(e);
                })(e) ||
                s(e) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
              );
            }
            r("96cf"),
              r("caad"),
              r("a9e3"),
              r("99af"),
              r("2af1"),
              r("38cf"),
              r("a434"),
              r("159b"),
              r("2532"),
              r("d81d");
            var d = r("8bbf"),
              p = r.n(d);
            function h(e, t, r) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = r),
                e
              );
            }
            r("b64b"), r("4de4"), r("e439"), r("dbb4");
            function m(e, t) {
              var r = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                  (n = n.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                  r.push.apply(r, n);
              }
              return r;
            }
            function v(e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? m(Object(r), !0).forEach(function (t) {
                      h(e, t, r[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : m(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t)
                      );
                    });
              }
              return e;
            }
            var g = p.a.extend({
                name: "dynamic-marquee-element",
                props: {
                  progress: Number,
                  direction: {
                    type: String,
                    default: "column",
                    validator: function (e) {
                      return ["column", "row"].includes(e);
                    },
                  },
                  reverse: { type: Boolean, default: !1 },
                  wrapperDirection: {
                    type: String,
                    default: "ltr",
                    validator: function (e) {
                      return ["ltr", "rtl", ""].includes(e);
                    },
                  },
                },
                computed: {
                  axis: function () {
                    return "row" === this.direction ? "X" : "Y";
                  },
                  widthOrHeight: function () {
                    return "row" === this.direction ? "height" : "width";
                  },
                  initialPosition: function () {
                    return "row" === this.direction
                      ? ("ltr" === this.wrapperDirection && !this.reverse) ||
                        ("rtl" === this.wrapperDirection && this.reverse)
                        ? { right: "100%" }
                        : { left: "100%" }
                      : this.reverse
                      ? { top: "100%" }
                      : { bottom: "100%" };
                  },
                  transform: function () {
                    return {
                      transform: "translate"
                        .concat(this.axis, "(")
                        .concat(this.progress, "px)"),
                    };
                  },
                },
                render: function (e) {
                  return e(
                    "div",
                    {
                      ref: "marqueeElement",
                      style: v(
                        v(
                          h(
                            { position: "absolute" },
                            this.widthOrHeight,
                            "100%"
                          ),
                          this.initialPosition
                        ),
                        this.transform
                      ),
                    },
                    this.$slots.default
                  );
                },
              }),
              y = p.a.extend({
                name: "dynamic-marquee",
                components: { DynamicMarqueeElement: g },
                props: {
                  speed: {
                    type: Object,
                    default: function () {
                      return { type: "pps", number: 100 };
                    },
                    validator: function (e) {
                      return (
                        e.type &&
                        ["pps", "duration"].includes(e.type) &&
                        e.number &&
                        !isNaN(e.number)
                      );
                    },
                  },
                  repeat: { type: Boolean, default: !0 },
                  repeatMargin: { type: Number, default: 10 },
                  hoverPause: { type: Boolean, default: !0 },
                  pause: { type: Boolean, default: !1 },
                  direction: {
                    type: String,
                    default: "column",
                    validator: function (e) {
                      return ["column", "row"].includes(e);
                    },
                  },
                  reverse: { type: Boolean, default: !1 },
                },
                data: function () {
                  return {
                    wrapperDimension: 0,
                    marqueeDimension: 0,
                    wrapperDirection: "",
                    repeatNum: 1,
                    lastId: 0,
                    marqueeElement: null,
                    animatedElements: [{ progress: 0, id: 0 }],
                    unanimatedElements: [],
                    pauseInner: !1,
                    lastTime: 0,
                    resizeElementId: 0,
                    resizeObserver: null,
                    deletedElements: [],
                    marqueeNoDimension: !1,
                    testData: {
                      inTest: !1,
                      wrapperDimension: 120,
                      marqueeDimension: 20,
                      wrapperDirection: "ltr",
                    },
                  };
                },
                computed: {
                  allElements: function () {
                    return [].concat(
                      f(this.animatedElements),
                      f(this.unanimatedElements)
                    );
                  },
                  dimension: function () {
                    return "row" === this.direction ? "width" : "height";
                  },
                  sign: function () {
                    return this.reverse ? "-" : "+";
                  },
                },
                methods: {
                  positivise: function (e) {
                    return Math.sign(e) * e;
                  },
                  signNum: function (e) {
                    return +(this.sign + 1) * e;
                  },
                  calcWrapperDimension: function () {
                    var e = this.$refs.wrapper;
                    this.testData.inTest
                      ? (this.wrapperDimension = this.testData.wrapperDimension)
                      : (this.wrapperDimension =
                          e.getBoundingClientRect()[this.dimension]);
                  },
                  calcMarqueeDimension: function () {
                    var e = this.$refs.marqueeComponents;
                    (this.marqueeElement = e[0].$refs.marqueeElement),
                      this.testData.inTest
                        ? (this.marqueeDimension =
                            this.testData.marqueeDimension)
                        : (this.marqueeDimension =
                            this.marqueeElement.getBoundingClientRect()[
                              this.dimension
                            ]);
                  },
                  calcDimensions: function () {
                    this.calcWrapperDimension(), this.calcMarqueeDimension();
                  },
                  calcRepeatNum: function () {
                    return (
                      Math.ceil(
                        this.wrapperDimension /
                          (this.marqueeDimension + this.repeatMargin)
                      ) + 1
                    );
                  },
                  initialAnimationData: function () {
                    var e = this;
                    return l(
                      regeneratorRuntime.mark(function t() {
                        var r;
                        return regeneratorRuntime.wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), e.$nextTick();
                              case 2:
                                for (r = 1; r < e.repeatNum; r++)
                                  e.unanimatedElements.push({
                                    progress: 0,
                                    id: r,
                                  });
                                e.lastId = e.repeatNum - 1;
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    )();
                  },
                  translateMarquee: function (e, t) {
                    var r = t - this.lastTime,
                      n = this.getCurrentProgress(r),
                      i = this.signNum(n);
                    this.animatedElements[e].progress += i;
                  },
                  ppsProgressFromElapsed: function (e) {
                    var t = 1e3 / e;
                    return this.speed.number / t;
                  },
                  durationProgressFromElapsed: function (e) {
                    var t = this.speed.number / e;
                    return (this.wrapperDimension + this.marqueeDimension) / t;
                  },
                  getCurrentProgress: function (e) {
                    switch (this.speed.type) {
                      case "pps":
                        return this.ppsProgressFromElapsed(e);
                      case "duration":
                        return this.durationProgressFromElapsed(e);
                      default:
                        return 0;
                    }
                  },
                  revealNextElement: function (e, t) {
                    var r =
                      this.positivise(this.animatedElements[e].progress) -
                      this.marqueeDimension;
                    if (
                      this.animatedElements.length < this.repeatNum &&
                      r >= this.repeatMargin &&
                      e === this.animatedElements.length - 1
                    ) {
                      var n = this.unanimatedElements.shift();
                      if (n) {
                        if (
                          this.positivise(this.animatedElements[e].progress) <
                          this.wrapperDimension
                        ) {
                          var i = this.signNum(r - this.repeatMargin);
                          n.progress = +i;
                        }
                        this.animatedElements.push(n);
                      }
                    }
                  },
                  elementFinishedTranslate: function (e) {
                    if (
                      this.positivise(this.animatedElements[e].progress) >=
                        this.wrapperDimension + this.marqueeDimension &&
                      ((this.animatedElements[e].progress = 0),
                      this.repeat && this.wrapperDimension > this.repeatMargin)
                    ) {
                      var t = c(this.animatedElements.splice(e, 1), 1)[0];
                      this.unanimatedElements.push(t);
                    }
                  },
                  updateLastTime: function (e) {
                    this.lastTime = e;
                  },
                  calcTranslation: function (e) {
                    for (var t = this.animatedElements.length - 1; t >= 0; t--)
                      this.translateMarquee(t, e),
                        this.repeat && this.revealNextElement(t, e),
                        this.elementFinishedTranslate(t);
                  },
                  togglePause: function (e) {
                    if (this.hoverPause)
                      switch (e.type) {
                        case "mouseenter":
                          this.pauseInner = !0;
                          break;
                        case "mouseleave":
                          this.pauseInner = !1;
                      }
                  },
                  setWrapperDirection: function () {
                    if (this.testData.inTest)
                      this.wrapperDirection = this.testData.wrapperDirection;
                    else {
                      var e = this.$refs.wrapper;
                      this.wrapperDirection =
                        getComputedStyle(e).getPropertyValue("direction");
                    }
                  },
                  setResizeObserver: function () {
                    var e = this;
                    return l(
                      regeneratorRuntime.mark(function t() {
                        var n;
                        return regeneratorRuntime.wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if ("ResizeObserver" in window != !1) {
                                  t.next = 5;
                                  break;
                                }
                                return (
                                  (t.next = 3),
                                  r.e(1).then(r.bind(null, "1d1f"))
                                );
                              case 3:
                                (n = t.sent),
                                  (window.ResizeObserver = n.ResizeObserver);
                              case 5:
                                (e.resizeObserver = new ResizeObserver(
                                  e.onResize
                                )),
                                  e.resizeObserver.observe(e.$refs.wrapper),
                                  e.marqueeElement &&
                                    e.resizeObserver.observe(e.marqueeElement);
                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    )();
                  },
                  onResize: function (e) {
                    var t = this;
                    (this.pauseInner = !0),
                      e.forEach(function (e) {
                        e.target.isEqualNode(t.$refs.wrapper)
                          ? t.onWrapperResize(e.contentRect[t.dimension])
                          : e.target.isEqualNode(t.marqueeElement) &&
                            t.onMarqueeElementResize(
                              e.contentRect[t.dimension]
                            ),
                          (t.pauseInner = !1);
                      });
                  },
                  onWrapperResize: function (e) {
                    (this.wrapperDimension = e), this.addOrRemoveElements();
                  },
                  onMarqueeElementResize: function (e) {
                    if (e)
                      if (this.marqueeNoDimension)
                        this.resetAnimation(), (this.marqueeNoDimension = !1);
                      else {
                        for (
                          var t = this.marqueeDimension - e,
                            r = this.animatedElements.length - 1;
                          r > 0;
                          r--
                        )
                          (this.animatedElements[r].progress +=
                            this.signNum(t) * r),
                            this.moveMinusToUnanimated(r);
                        (this.marqueeDimension = e), this.addOrRemoveElements();
                      }
                    else this.marqueeNoDimension = !0;
                  },
                  moveMinusToUnanimated: function (e) {
                    if (
                      Math.sign(this.animatedElements[e].progress) !==
                      +(this.sign + 1)
                    ) {
                      this.animatedElements[e].progress = 0;
                      var t = c(this.animatedElements.splice(e, 1), 1)[0];
                      this.unanimatedElements.push(t);
                    }
                  },
                  addOrRemoveElements: function () {
                    var e = this;
                    return l(
                      regeneratorRuntime.mark(function t() {
                        var r, n, i, o, a, s;
                        return regeneratorRuntime.wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!e.repeat) {
                                  t.next = 18;
                                  break;
                                }
                                if (
                                  ((r = e.calcRepeatNum()),
                                  !((n = r - e.repeatNum) > 0))
                                ) {
                                  t.next = 7;
                                  break;
                                }
                                for (i = 0; i < n; i++)
                                  (o = e.animatedElements.length
                                    ? "unanimatedElements"
                                    : "animatedElements"),
                                    e[o].push({ progress: 0, id: ++e.lastId });
                                t.next = 17;
                                break;
                              case 7:
                                if (!(n < 0)) {
                                  t.next = 17;
                                  break;
                                }
                                a = 0;
                              case 9:
                                if (!(a > n)) {
                                  t.next = 17;
                                  break;
                                }
                                if (
                                  (e.unanimatedElements.length &&
                                    (e.testData.inTest ||
                                      e.updateObservedElement(
                                        e.unanimatedElements.length - 1
                                      ),
                                    (s = e.unanimatedElements.pop()) &&
                                      e.deletedElements.push(s.id)),
                                  e.testData.inTest)
                                ) {
                                  t.next = 14;
                                  break;
                                }
                                return (t.next = 14), e.$nextTick();
                              case 14:
                                a--, (t.next = 9);
                                break;
                              case 17:
                                e.repeatNum = r;
                              case 18:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    )();
                  },
                  updateObservedElement: function (e) {
                    this.unanimatedElements[e] &&
                      this.unanimatedElements[e].id === this.resizeElementId &&
                      (this.resizeObserver.unobserve(this.marqueeElement),
                      this.updateResizeId(),
                      this.observeNewElement());
                  },
                  updateResizeId: function () {
                    var e = this.resizeElementId;
                    do {
                      e++;
                    } while (this.deletedElements.includes(e));
                    this.deletedElements.push(this.resizeElementId),
                      (this.resizeElementId = e);
                  },
                  observeNewElement: function () {
                    var e = this.$refs.marqueeComponents;
                    (this.marqueeElement = e[1].$refs.marqueeElement),
                      this.resizeObserver.observe(this.marqueeElement);
                  },
                  resetAnimation: function () {
                    (this.pauseInner = !0),
                      this.resizeObserver && this.resizeObserver.disconnect(),
                      (this.animatedElements = [{ progress: 0, id: 0 }]),
                      (this.unanimatedElements = []),
                      this.initialSetup(),
                      (this.pauseInner = !1);
                  },
                  initialSetup: function () {
                    this.calcDimensions(),
                      this.setWrapperDirection(),
                      this.repeat && (this.repeatNum = this.calcRepeatNum()),
                      this.initialAnimationData(),
                      this.testData.inTest || this.setResizeObserver();
                  },
                  fireAnimation: function (e) {
                    var t = e - this.lastTime > 100;
                    this.pause ||
                      this.pauseInner ||
                      t ||
                      this.marqueeNoDimension ||
                      this.calcTranslation(e),
                      this.updateLastTime(e),
                      requestAnimationFrame(this.fireAnimation);
                  },
                },
                watch: {
                  repeat: "resetAnimation",
                  repeatMargin: "resetAnimation",
                  direction: "resetAnimation",
                  reverse: "resetAnimation",
                  "testData.wrapperDimension": function (e) {
                    this.onWrapperResize(e);
                  },
                  "testData.marqueeDimension": function (e) {
                    this.onMarqueeElementResize(e);
                  },
                },
                mounted: function () {
                  var e = this;
                  return l(
                    regeneratorRuntime.mark(function t() {
                      return regeneratorRuntime.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), e.$nextTick();
                            case 2:
                              return (
                                e.initialSetup(), (t.next = 5), e.$nextTick()
                              );
                            case 5:
                              requestAnimationFrame(e.fireAnimation);
                            case 6:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )();
                },
                beforeDestroy: function () {
                  this.resizeObserver && this.resizeObserver.disconnect();
                },
                render: function (e) {
                  var t = this;
                  return e(
                    "div",
                    {
                      ref: "wrapper",
                      style: {
                        overflow: "hidden",
                        height: "100%",
                        width: "100%",
                        position: "relative",
                      },
                      on: {
                        mouseenter: this.togglePause,
                        mouseleave: this.togglePause,
                      },
                    },
                    this.allElements.map(function (r) {
                      return e(
                        g,
                        {
                          ref: "marqueeComponents",
                          refInFor: !0,
                          key: r.id,
                          props: {
                            progress: r.progress,
                            direction: t.direction,
                            reverse: t.reverse,
                            wrapperDirection: t.wrapperDirection,
                          },
                        },
                        t.$slots.default
                      );
                    })
                  );
                },
              });
            t.default = y;
          },
          fb6a: function (e, t, r) {
            "use strict";
            var n = r("23e7"),
              i = r("861d"),
              o = r("e8b5"),
              a = r("23cb"),
              s = r("50c4"),
              c = r("fc6a"),
              u = r("8418"),
              l = r("b622"),
              f = r("1dde"),
              d = r("ae40"),
              p = f("slice"),
              h = d("slice", { ACCESSORS: !0, 0: 0, 1: 2 }),
              m = l("species"),
              v = [].slice,
              g = Math.max;
            n(
              { target: "Array", proto: !0, forced: !p || !h },
              {
                slice: function (e, t) {
                  var r,
                    n,
                    l,
                    f = c(this),
                    d = s(f.length),
                    p = a(e, d),
                    h = a(void 0 === t ? d : t, d);
                  if (
                    o(f) &&
                    ("function" != typeof (r = f.constructor) ||
                    (r !== Array && !o(r.prototype))
                      ? i(r) && null === (r = r[m]) && (r = void 0)
                      : (r = void 0),
                    r === Array || void 0 === r)
                  )
                    return v.call(f, p, h);
                  for (
                    n = new (void 0 === r ? Array : r)(g(h - p, 0)), l = 0;
                    p < h;
                    p++, l++
                  )
                    p in f && u(n, l, f[p]);
                  return (n.length = l), n;
                },
              }
            );
          },
          fc6a: function (e, t, r) {
            var n = r("44ad"),
              i = r("1d80");
            e.exports = function (e) {
              return n(i(e));
            };
          },
          fdbc: function (e, t) {
            e.exports = {
              CSSRuleList: 0,
              CSSStyleDeclaration: 0,
              CSSValueList: 0,
              ClientRectList: 0,
              DOMRectList: 0,
              DOMStringList: 0,
              DOMTokenList: 1,
              DataTransferItemList: 0,
              FileList: 0,
              HTMLAllCollection: 0,
              HTMLCollection: 0,
              HTMLFormElement: 0,
              HTMLSelectElement: 0,
              MediaList: 0,
              MimeTypeArray: 0,
              NamedNodeMap: 0,
              NodeList: 1,
              PaintRequestList: 0,
              Plugin: 0,
              PluginArray: 0,
              SVGLengthList: 0,
              SVGNumberList: 0,
              SVGPathSegList: 0,
              SVGPointList: 0,
              SVGStringList: 0,
              SVGTransformList: 0,
              SourceBufferList: 0,
              StyleSheetList: 0,
              TextTrackCueList: 0,
              TextTrackList: 0,
              TouchList: 0,
            };
          },
          fdbf: function (e, t, r) {
            var n = r("4930");
            e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
          },
          fea9: function (e, t, r) {
            var n = r("da84");
            e.exports = n.Promise;
          },
        }).default;
      },
      627: (e) => {
        function t(e) {
          return -1 !== e.type.indexOf("mouse")
            ? e.clientX
            : e.touches[0].clientX;
        }
        function r(e) {
          return -1 !== e.type.indexOf("mouse")
            ? e.clientY
            : e.touches[0].clientY;
        }
        var n = (function () {
            var e = !1;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0;
                },
              });
              window.addEventListener("test", null, t);
            } catch (e) {}
            return e;
          })(),
          i = 0,
          o = {
            install: function (e, o) {
              var a = Object.assign(
                {},
                {
                  disableClick: !1,
                  tapTolerance: 10,
                  swipeTolerance: 30,
                  touchHoldTolerance: 400,
                  longTapTimeInterval: 400,
                  touchClass: "",
                  namespace: "touch",
                },
                o
              );
              function s(e) {
                var n = this.$$touchObj,
                  o = e.type.indexOf("touch") >= 0,
                  a = e.type.indexOf("mouse") >= 0,
                  s = this;
                o && (i = e.timeStamp),
                  (a && i && e.timeStamp - i < 350) ||
                    n.touchStarted ||
                    (h(this),
                    (n.touchStarted = !0),
                    (n.touchMoved = !1),
                    (n.swipeOutBounded = !1),
                    (n.startX = t(e)),
                    (n.startY = r(e)),
                    (n.currentX = 0),
                    (n.currentY = 0),
                    (n.touchStartTime = e.timeStamp),
                    (n.touchHoldTimer = setTimeout(function () {
                      (n.touchHoldTimer = null), p(e, s, "touchhold");
                    }, n.options.touchHoldTolerance)),
                    p(e, this, "start"));
              }
              function c(e) {
                var n = this.$$touchObj;
                if (((n.currentX = t(e)), (n.currentY = r(e)), n.touchMoved)) {
                  if (!n.swipeOutBounded) {
                    var i = n.options.swipeTolerance;
                    n.swipeOutBounded =
                      Math.abs(n.startX - n.currentX) > i &&
                      Math.abs(n.startY - n.currentY) > i;
                  }
                } else {
                  var o = n.options.tapTolerance;
                  (n.touchMoved =
                    Math.abs(n.startX - n.currentX) > o ||
                    Math.abs(n.startY - n.currentY) > o),
                    n.touchMoved && (v(n), p(e, this, "moved"));
                }
                n.touchMoved && p(e, this, "moving");
              }
              function u() {
                var e = this.$$touchObj;
                v(e),
                  m(this),
                  (e.touchStarted = e.touchMoved = !1),
                  (e.startX = e.startY = 0);
              }
              function l(e) {
                var t = this.$$touchObj,
                  r = e.type.indexOf("touch") >= 0,
                  n = e.type.indexOf("mouse") >= 0;
                r && (i = e.timeStamp);
                var o = r && !t.touchHoldTimer;
                if (
                  (v(t),
                  (t.touchStarted = !1),
                  m(this),
                  !(n && i && e.timeStamp - i < 350))
                )
                  if ((p(e, this, "end"), t.touchMoved)) {
                    if (!t.swipeOutBounded) {
                      var a,
                        s = t.options.swipeTolerance,
                        c = Math.abs(t.startY - t.currentY),
                        u = Math.abs(t.startX - t.currentX);
                      (c > s || u > s) &&
                        ((a =
                          c > s
                            ? t.startY > t.currentY
                              ? "top"
                              : "bottom"
                            : t.startX > t.currentX
                            ? "left"
                            : "right"),
                        t.callbacks["swipe." + a]
                          ? p(e, this, "swipe." + a, a)
                          : p(e, this, "swipe", a));
                    }
                  } else if (
                    t.callbacks.longtap &&
                    e.timeStamp - t.touchStartTime >
                      t.options.longTapTimeInterval
                  )
                    e.cancelable && e.preventDefault(), p(e, this, "longtap");
                  else {
                    if (t.callbacks.touchhold && o)
                      return void (e.cancelable && e.preventDefault());
                    p(e, this, "tap");
                  }
              }
              function f() {
                h(this);
              }
              function d() {
                m(this);
              }
              function p(e, t, r, n) {
                var i = t.$$touchObj,
                  o = (i && i.callbacks[r]) || [];
                if (0 === o.length) return null;
                for (var a = 0; a < o.length; a++) {
                  var s = o[a];
                  s.modifiers.stop && e.stopPropagation(),
                    s.modifiers.prevent && e.cancelable && e.preventDefault(),
                    (s.modifiers.self && e.target !== e.currentTarget) ||
                      ("function" == typeof s.value &&
                        (n ? s.value(n, e) : s.value(e)));
                }
              }
              function h(e) {
                var t = e.$$touchObj.options.touchClass;
                t && e.classList.add(t);
              }
              function m(e) {
                var t = e.$$touchObj.options.touchClass;
                t && e.classList.remove(t);
              }
              function v(e) {
                e.touchHoldTimer &&
                  (clearTimeout(e.touchHoldTimer), (e.touchHoldTimer = null));
              }
              function g(e, t) {
                var r = e.$$touchObj || {
                  callbacks: {},
                  hasBindTouchEvents: !1,
                  options: a,
                };
                return (
                  t && (r.options = Object.assign({}, r.options, t)),
                  (e.$$touchObj = r),
                  e.$$touchObj
                );
              }
              e.directive(a.namespace, {
                bind: function (e, t) {
                  var r = g(e),
                    i = !!n && { passive: !0 },
                    o = t.arg || "tap";
                  switch (o) {
                    case "swipe":
                      var a = t.modifiers;
                      if (a.left || a.right || a.top || a.bottom) {
                        for (var p in t.modifiers)
                          if (
                            ["left", "right", "top", "bottom"].indexOf(p) >= 0
                          ) {
                            var h = "swipe." + p;
                            (r.callbacks[h] = r.callbacks[h] || []),
                              r.callbacks[h].push(t);
                          }
                      } else
                        (r.callbacks.swipe = r.callbacks.swipe || []),
                          r.callbacks.swipe.push(t);
                      break;
                    case "start":
                    case "moving":
                      t.modifiers.disablePassive && (i = !1);
                    default:
                      (r.callbacks[o] = r.callbacks[o] || []),
                        r.callbacks[o].push(t);
                  }
                  r.hasBindTouchEvents ||
                    (e.addEventListener("touchstart", s, i),
                    e.addEventListener("touchmove", c, i),
                    e.addEventListener("touchcancel", u),
                    e.addEventListener("touchend", l),
                    r.options.disableClick ||
                      (e.addEventListener("mousedown", s),
                      e.addEventListener("mousemove", c),
                      e.addEventListener("mouseup", l),
                      e.addEventListener("mouseenter", f),
                      e.addEventListener("mouseleave", d)),
                    (r.hasBindTouchEvents = !0));
                },
                unbind: function (e) {
                  e.removeEventListener("touchstart", s),
                    e.removeEventListener("touchmove", c),
                    e.removeEventListener("touchcancel", u),
                    e.removeEventListener("touchend", l),
                    e.$$touchObj &&
                      !e.$$touchObj.options.disableClick &&
                      (e.removeEventListener("mousedown", s),
                      e.removeEventListener("mousemove", c),
                      e.removeEventListener("mouseup", l),
                      e.removeEventListener("mouseenter", f),
                      e.removeEventListener("mouseleave", d)),
                    delete e.$$touchObj;
                },
              }),
                e.directive(a.namespace + "-class", {
                  bind: function (e, t) {
                    g(e, { touchClass: t.value });
                  },
                }),
                e.directive(a.namespace + "-options", {
                  bind: function (e, t) {
                    g(e, t.value);
                  },
                });
            },
          };
        e.exports = o;
      },
      311: (e) => {
        "use strict";
        e.exports = Vue;
      },
    },
    t = {};
  function r(n) {
    var i = t[n];
    if (void 0 !== i) return i.exports;
    var o = (t[n] = { exports: {} });
    return e[n](o, o.exports, r), o.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      var e = r(646),
        t = r.n(e),
        n = r(627),
        i = r.n(n);
      const o = {
          en: {
            log_into_your_oraimo_account: "Log into Your TheJUJARIAccount",
            email_address: "Email Address",
            password: "Password",
            forgot_your_password: "Forgot your password?",
            reset_it: "Reset it",
            login: "Log in",
            donot_have_an_account: "Don't have an account?",
            create_one: "Create one",
            signin_width_facebook: "Sign in with Facebook",
            signin_width_google: "Sign in with Google",
            shopping_cart: "Shopping Cart",
            all: "ALL",
            subtotal: "Subtotal",
            check_out: "Checkout",
            delete_cart_alert:
              "Are you sure removing this item from your shopping cart?",
            deleting: "Deleting...",
            delete: "Delete",
            cancel: "Cancel",
            total: "Total",
            pages: "pages",
            view_more: "View More",
            learn_more: "Learn More",
            add_to_cart: "Add to Cart",
            adding: "Adding...",
            logining: "Logining...",
            secure_checkout: "Secure Checkout",
            order_complete: "Order Complete",
            home: "HOME",
            transaction_management: "Transaction Management",
            my_order: "My Order",
            account: "Account",
            personal_information: "Personal Information",
            my_wish: "My Wish",
            my_explorer_point: "My Explorer Point",
            address_management: "Address Management",
            product_reviews: "Product Reviews",
            the_minimum_value_is: "The minimum value is {number}.",
            the_maximum_value_is: "The maximum value is {number}.",
            the_maximum_upload_number_is_6: "The maximum upload number is 6.",
            the_maximum_upload_size_is_5m: "The maximum upload size is 5M.",
            the_upload_type_is_PNG_or_JPEG:
              "The maximum upload type is PNG or JPEG.",
            the_email_is_registered: "The email is registered!",
            the_qty_must_be_an_integer: "The qty must be an integer.",
            the_value_must_be_an_integer: "The value must be an integer.",
            most_frequently_searched: "Most frequently searched",
            search: "Search",
            view_cart: "View Cart",
            your_cart_is_empty: "Your cart is empty",
            affiliate: "Affiliate",
            my_account: "My account",
            order: "Order",
            income_details: "Income Details",
            withdraw: "Withdraw",
            user_events: "User Events",
            referral_performance: "Referral Performance",
            affiliate_invite_desc:
              "Share the link with your friends and invite them to join the TheJUJARIaffiliate program. They can get {var1} commissiob and also you can earn a {var2} commission on their total sale!",
            to_VIP: "{var1} to VIP {var2}",
            extra_percent_off: "Extra {number}% OFF",
            left_points:
              "You have {number1} explorer points left, You can use {number2} explorer points for this order",
            point_for_every_currency: "{number1} for every {number2}",
            other: "Other",
            yes: "Yes",
            no: "No",
            submitting: "Submitting...",
          },
          fr: {
            log_into_your_oraimo_account:
              "Connectez-vous à votre compte oraimo",
            email_address: "Adresse email",
            password: "Mot de passe",
            forgot_your_password: "Vous avez oublié votre mot de passe ?",
            reset_it: "Réinitialisez-le",
            login: "Connexion",
            donot_have_an_account: "Vous n'avez pas de compte ?",
            create_one: "Créer un compte",
            signin_width_facebook: " Se connecter avec Facebook ",
            signin_width_google: "Se connecter avec Google",
            shopping_cart: "Panier",
            all: " TOUT ",
            subtotal: "Sous-total",
            check_out: "Vérification",
            delete_cart_alert:
              "Êtes-vous sûr de vouloir rétirer ce produit du panier ? ",
            deleting: "Supprimer...",
            delete: "Supprimer",
            cancel: "Annuler",
            total: "Total",
            pages: "pages",
            view_more: "Voir plus",
            learn_more: "Découvrir",
            add_to_cart: "Ajouter au panier",
            ajouter: "Ajouter...",
            logining: "Connexion...",
            secure_checkout: "Paiement Sécurisé",
            order_complete: "Commande terminée",
            home: "ACCUEIL",
            transaction_management: "Gestion des transactions",
            my_order: "Ma commande",
            account: "Compte",
            personal_information: "Informations personnelles",
            my_wish: "Mon Souhait",
            my_explorer_point: "Mon point d'exploration",
            address_management: "Gestion des adresses",
            product_reviews: "Commentaires sur les produits",
            the_minimum_value_is: "La valeur minimale est de {number}.",
            the_maximum_value_is: "La valeur maximale est de {number}.",
            the_maximum_upload_number_is_6:
              "Le nombre maximum de téléchargements est de 6.",
            the_maximum_upload_size_is_5m:
              "La taille maximale du téléchargement est de 5M.",
            the_upload_type_is_PNG_or_JPEG:
              "Le type de téléchargement maximal est PNG ou JPEG.",
            the_email_is_registered: "L'adresse électronique est enregistrée !",
            the_qty_must_bean_integer: "La quantité doit être un entier.",
            the_value_must_be_an_integer: "La valeur doit être un entier",
            most_frequently_searched: "La recherche la plus fréquente",
            search: "Recherche",
            view_cart: "Voir le panier",
            your_cart_is_empty: "Votre panier est vide",
            affiliate: "Affilié",
            my_account: "Mon compte",
            order: "Commande",
            income_details: "Details des revenus",
            withdraw: "Retrait",
            user_events: "Activité de l'utilisateur",
            referral_performance: "performance de référence",
            affiliate_invite_desc:
              "Partager le lien avec vos amis et invitez les à rejoindre le programme d'affiliation oraimo. Ils pourront gagner une commission de {var1} et vous pourrez obtenir une commission {var2} du total de leur achat.",
            to_VIP: "{var1} à VIP {var2}",
            extra_percent_off: "Supplément de {number}% de réduction",
            left_points:
              "Il vous reste {number1} points d'exploration. Vous pouvez utiliser {number2} points d'exploration pour cette commande.",
            point_for_every_currency: "{number1} pour chaque {number2}",
            other: "Autre",
            yes: "Oui",
            no: "Non",
            submitting: "Soumettre...",
          },
          ar: {
            log_into_your_oraimo_account:
              "قم بتسجيل الدخول إلى حساب TheJUJARIالخاص بك",
            email_address: "عنوان البريد الإلكتروني",
            password: "كلمة المرور",
            forgot_your_password: "نسيت كلمة السر؟",
            reset_it: "إعادة تعيينها",
            login: "تسجيل الدخول",
            donot_have_an_account: "ليس لديك حساب؟",
            create_one: "اصنع واحدا",
            signin_width_facebook: "قم بتسجيل الدخول باستخدام الفيسبوك",
            signin_width_google: "الدخول مع جوجل",
            shopping_cart: "عربة التسوق",
            all: "الجميع",
            subtotal: "المجموع الفرعي",
            check_out: "الدفع",
            delete_cart_alert:
              "هل أنت متأكد من إزالة هذا العنصر من سلة التسوق الخاصة بك؟",
            deleting: "جار الحذف ...",
            delete: "حذف",
            cancel: "يلغي",
            total: "المجموع",
            pages: "الصفحات",
            view_more: "عرض المزيد",
            learn_more: "يتعلم أكثر",
            add_to_cart: "أضفها الى قائمة المشتريات",
            adding: "جار الإضافة ...",
            logining: "تسجيل الدخول...",
            secure_checkout: "الخروج الآمن",
            order_complete: "الطلب جاهز",
            home: "الصفحة الرئيسية",
            transaction_management: "ادارة العمليات التجارية",
            my_order: "طلبي",
            account: "حساب",
            personal_information: "معلومات شخصية",
            my_wish: "امنيتي",
            my_explorer_point: "نقطة المستكشف الخاص بي",
            address_management: "إدارة العناوين",
            product_reviews: "تعليقات المنتج",
            the_minimum_value_is: "اقل قيمه {number}",
            the_maximum_value_is: "{number} القيمة القصوى هي",
            the_maximum_upload_number_is_6: "الحد الأقصى لعدد التحميل هو 6.",
            the_maximum_upload_size_is_5m: "أقصى حجم للتحميل هو 5 ميجا.",
            the_upload_type_is_PNG_or_JPEG:
              "الحد الأقصى لنوع التحميل هو PNG أو JPEG.",
            the_email_is_registered: "تم تسجيل البريد الإلكتروني!",
            the_qty_must_be_an_integer: "يجب أن تكون الكمية عددًا صحيحًا.",
            the_value_must_be_an_integer: "يجب أن تكون القيمة عددًا صحيحًا.",
            most_frequently_searched: "الأكثر بحثًا",
            search: "يبحث",
            view_cart: "عرض عربة التسوق",
            your_cart_is_empty: "عربة التسوق فارغة",
            affiliate: "تسويق بالعمولة",
            my_account: "حسابي",
            order: "الطلب",
            income_details: "تفاصيل الدخل",
            withdraw: "سحب",
            user_events: "أحداث المستخدم",
            referral_performance: "اداء الاحالة",
            affiliate_invite_desc:
              "شارك الرابط مع أصدقائك وادعوهم للانضمام إلى برنامج التسويق بالعمولة  التابع لشركة oraimo. يمكنهم الحصول على عمولة {var1} ويمكنك أيضًا الحصول على عمولة {var2} على إجمالي مبيعاتهم!",
            to_VIP: "{var1} to VIP {var2}",
            extra_percent_off: "خصم إضافي {number}%",
            left_points:
              "لديك {number1} نقطة استكشاف متبقية، يمكنك استخدام {number2} نقطة استكشاف لهذا الطلب",
            point_for_every_currency: "{number1} لكل {number2}",
            other: "آخر",
            yes: "نعم",
            no: "لا",
            submitting: "تقديم...",
          },
        },
        a = {
          userIsRegistered: "/api/user/is-registered",
          register: "/api/register",
          login: "/api/login",
          userFindPasswordEmail: "/api/user/find-password-email",
          userResetPassword: "/api/user/reset-password",
          user: "/api/user",
          userChangePassword: "/api/user/change-password",
          area: "/api/area",
          address: "/api/address",
          addressList: "/api/address/list",
          addressDetail: "/api/address/detail",
          pointTotal: "/api/point/total",
          pointList: "/api/point/list",
          wish: "/api/wish",
          searchRecordQty: "/api/search/record-qty",
          review: "/api/review",
          userReview: "/api/user/review",
          userLikeReview: "/api/user/like/review",
          reviewLike: "/api/review/like",
          reviewUnlike: "/api/review/unlike",
          wishCheck: "/api/wish/check",
          product: "/api/product",
          cart: "/api/cart",
          cartMiniList: "/api/cart/mini-list",
          cartQty: "/api/cart/qty",
          cartSelectProduct: "/api/cart/select-product",
          cartRecommendProduct: "/api/cart/recommend-product",
          logout: "/api/logout",
          subscriber: "/api/subscriber",
          upload: "/api/upload",
          checkout: "/api/checkout",
          order: "/api/order",
          orderCancel: "/api/order/cancel",
          keyword: "/api/keyword",
          cartBuyNow: "/api/cart/buy-now",
          collections: "/api/collections",
          arrivalReminder: "/api/arrival-reminder",
          tips: "/api/tips",
          channelCurrentLanguage: "/api/channel/current-language",
          channelCurrentCurrency: "/api/channel/current-currency",
          affiliateActivityList: "/api/affiliate/activity/list",
          affiliateOrderList: "/api/affiliate/order/list",
          affiliateUserSubordinate: "/api/affiliate/user/subordinate",
          affiliateBankList: "/api/affiliate/bank/list",
          affiliateWithdrawList: "/api/affiliate/withdraw/list",
          affiliateWithdrawAdd: "/api/affiliate/withdraw/add",
          affiliateUserDetail: "/api/affiliate/user/detail",
          affiliateRuleDetail: "/api/affiliate/rule/detail",
          affiliateUserAdd: "/api/affiliate/user/add",
          affiliateWithdrawCancel: "/api/affiliate/withdraw/cancel",
          affiliateActivityDetail: "/api/affiliate/activity/detail",
          affiliateActivityAttend: "/api/affiliate/activity/attend",
          affiliateCashflowList: "/api/affiliate/cash-flow/list",
          affiliateUserAuditStatus: "/api/affiliate/user/audit-status",
          affiliateSettingDetail: "/api/affiliate/setting/detail",
          affiliateWithdrawBalance: "/api/affiliate/withdraw/balance",
        },
        s = axios.create();
      s.interceptors.request.use(function (e) {
        const t = localStorage.getItem("token");
        return t && (e.headers.Authorization = `Bearer ${t}`), e;
      }),
        s.interceptors.response.use(
          function (e) {
            const t = e.config.url;
            return -1e3 !== e.data.code ||
              [
                a.wish,
                a.userLikeReview,
                a.reviewLike,
                a.reviewUnlike,
                a.arrivalReminder,
                a.affiliateUserAuditStatus,
              ].includes(t)
              ? e.data
              : (localStorage.removeItem("token"),
                localStorage.removeItem("name"),
                void (location.href = "/auth/sign-in"));
          },
          function (e) {
            return Promise.reject(e);
          }
        );
      const c = s;
      Vue.use(i());
      const u = {
          props: { view: Boolean, close: Function },
          i18n: new VueI18n({ locale: JS_CURRENT_LANGUAGE, messages: o }),
          data: () => ({ keyword: "", links: [] }),
          methods: {
            getKeywords() {
              c.get(a.keyword).then((e) => {
                0 === e.code && (this.links = e.data);
              });
            },
            handleSearch() {
              location.href = `/search?keyword=${this.keyword}`;
            },
            handleClose() {
              (this.keyword = ""), this.$emit("close");
            },
          },
          mounted() {
            this.getKeywords();
          },
          template:
            '\n    <div class="v-search-container" :class="{ visible: view }" v-touch:swipe.bottom="handleClose">\n      <form class="v-search-form" @submit.prevent="handleSearch()">\n        <input class="v-search-input" type="text" :placeholder="$t(\'search\') + \'...\'" v-model="keyword" />\n        <button type="submit" class="v-search-submit"><span class="icon icon-form-search"></span></button>\n      </form>\n      <h4 class="v-search-title">{{ $t(\'most_frequently_searched\') }}</h4>\n      <div class="v-search-links">\n        <a\n          v-for="link in links"\n          :key="link.uri"\n          :href="link.uri"\n          class="v-search-link"\n        >\n          <img alt="" :src="link.image" />\n          <span>{{ link.title }}</span>\n        </a>\n      </div>\n      <a href="javascript:;" class="v-search-cancel" @click="handleClose" :style="{ position: view ? \'absolute\' : \'static\' }">\n        <span class="icon icon-cancel"><span class="path1"></span><span class="path2"></span></span>\n      </a>\n    </div>\n  ',
        },
        l = {
          props: {
            visible: Boolean,
            content: String,
            delay: { type: Number, default: 3e3 },
            close: Function,
          },
          data: () => ({ timeoutId: null }),
          beforeDestroy() {
            clearTimeout(this.timeoutId);
          },
          watch: {
            visible: function (e) {
              e &&
                0 !== this.$props.delay &&
                (this.timeoutId = setTimeout(() => {
                  this.$emit("close");
                }, this.$props.delay));
            },
          },
          template:
            '\n    <div class="v-alert" :class="{ show: visible }">\n      <div class="v-alert-body">\n        <a href="javascript:;" class="v-alert-close" @click="$emit(\'close\')">\n          <span class="icon icon-order-cancel"><span class="path1"></span><span class="path2"></span></span>\n        </a>\n        <p class="v-alert-content">{{ content }}</p>\n      </div>\n    </div>\n  ',
        },
        f = {
          props: ["value"],
          template:
            '\n    <div class="v-checkbox">\n      <slot></slot>\n      <span class="icon icon-checkbox"><span class="path1"></span><span class="path2"></span></span>\n    </div>\n  ',
        },
        d = {
          props: {
            loading: Boolean,
            visible: Boolean,
            content: String,
            yes: Function,
            no: Function,
          },
          i18n: new VueI18n({ locale: JS_CURRENT_LANGUAGE, messages: o }),
          template:
            '\n    <div class="v-confirm" :class="{ show: visible }">\n      <div class="v-confirm-body">\n        <a href="javascript:;" class="v-confirm-close" @click="$emit(\'no\')">\n          <span class="icon icon-order-cancel"><span class="path1"></span><span class="path2"></span></span>\n        </a>\n        <p class="v-confirm-content">{{ content }}</p>\n        <div class="v-confirm-btns">\n          <button\n            type="button"\n            :disabled="loading"\n            class="v-confirm-yes"\n            @click="$emit(\'yes\')"\n          >\n            <span v-if="loading">{{ $t(\'submitting\') }}</span>\n            <span v-else>{{ $t(\'yes\') }}</span>\n          </button>\n          <button type="button" class="v-confirm-no" @click="$emit(\'no\')">{{ $t(\'no\') }}</button>\n        </div>\n      </div>\n    </div>\n  ',
        },
        p = {
          props: { loading: Boolean, fullscreen: Boolean },
          template:
            '\n    <div class="v-loading">\n      <div class="v-loading-mask" v-if="loading" :style="{ position: fullscreen ? \'fixed\' : \'absolute\' }">\n        <div class="v-loading-spinner">\n          <div class="v-loading-loader"></div>\n        </div>\n      </div>\n      <slot></slot>\n    </div>\n  ',
        },
        h = {
          isNegative: (e) => e < 0,
          isZero: (e) => 0 === e,
          isPositive: (e) => e > 0,
          getPrecision(e) {
            const t = String(e).split(".");
            return t[1] ? t[1].length : 0;
          },
          rounding(e, t) {
            const r = this.getPrecision(e),
              n = this.getPrecision(t),
              i = Math.max(r, n),
              o = Math.pow(10, i),
              a = e * o,
              s = t * o;
            return (
              !!this.isZero(this.mod(a, s)) ||
              this.multiple(s, this.mod(a, s)) < 2
            );
          },
          multiple(e, t) {
            return parseInt(Math.abs(this.devide(e, t)));
          },
          mod: (e, t) => e % t,
          add: (e, t) => e + t,
          minus: (e, t) => e - t,
          multiply: (e, t) => e * t,
          devide: (e, t) => e / t,
          ceil(e, t, r) {
            return this.isZero(this.mod(e, t))
              ? e.toFixed(r)
              : this.isNegative(e)
              ? -this.multiply(t, this.multiple(e, t)).toFixed(r)
              : this.isPositive(e)
              ? this.multiply(t, this.multiple(e, t) + 1).toFixed(r)
              : void 0;
          },
          floor(e, t, r) {
            return this.isZero(this.mod(e, t))
              ? e.toFixed(r)
              : this.isNegative(e)
              ? -this.multiply(t, this.multiple(e, t) + 1).toFixed(r)
              : this.isPositive(e)
              ? this.multiply(t, this.multiple(e, t)).toFixed(r)
              : void 0;
          },
          round(e, t, r) {
            return this.isZero(this.mod(e, t))
              ? e.toFixed(r)
              : this.isNegative(e)
              ? this.rounding(e, t)
                ? -this.multiply(t, this.multiple(e, t)).toFixed(r)
                : -this.multiply(t, this.multiple(e, t) + 1).toFixed(r)
              : this.isPositive(e)
              ? this.rounding(e, t)
                ? this.multiply(t, this.multiple(e, t)).toFixed(r)
                : this.multiply(t, this.multiple(e, t) + 1).toFixed(r)
              : void 0;
          },
        },
        m = {
          formatPrice() {
            const e = document.getElementsByClassName("format_price"),
              t = JS_CURRENCY_GROUP[JS_DEFAULT_CURRENCY];
            for (let r = 0; r < e.length; r++) {
              const n = e[r].getAttribute("data-price");
              e[r].innerHTML = `${t.symbol}${this.formatNumber(n)}`;
            }
          },
          formatNumber(e, t = JS_DEFAULT_CURRENCY) {
            const r = JS_CURRENCY_GROUP[t];
            let n = r.precision;
            switch (
              (["/cart", "/checkout"].includes(location.pathname) &&
                (n = r.calc_precision),
              r.round_type_name)
            ) {
              case "round":
                e = h.round(e * r.exchange_rate, r.unit_amount, n);
                break;
              case "ceil":
                e = h.ceil(e * r.exchange_rate, r.unit_amount, n);
                break;
              case "floor":
                e = h.floor(e * r.exchange_rate, r.unit_amount, n);
            }
            return e;
          },
          formatNumberWithoutUnit(e, t = JS_DEFAULT_CURRENCY) {
            const r = JS_CURRENCY_GROUP[t];
            let n = r.precision;
            return (
              ["/cart", "/checkout"].includes(location.pathname) &&
                (n = r.calc_precision),
              (
                Math.round(e * r.exchange_rate * Math.pow(10, n)) /
                Math.pow(10, n)
              ).toFixed(n)
            );
          },
          getLocationSearch() {
            const e = {};
            return (
              location.search
                .substring(1)
                .split("&")
                .forEach(function (t) {
                  const r = t.split("=");
                  e[r[0]] = r[1];
                }),
              e
            );
          },
          getPlatform: () =>
            "ontouchstart" in document.documentElement ? 2 : 1,
          async addToWishlist(e, t, r, n, i) {
            const o = "USD",
              s = { product_id: e },
              u = await c.post(a.wish, s);
            return (
              0 === u.code &&
                (window.dataLayer &&
                  (dataLayer.push({ ecommerce: null }),
                  dataLayer.push({
                    event: "add_to_wishlist",
                    ecommerce: {
                      items: [
                        {
                          item_id: r,
                          item_name: n,
                          price: this.formatNumber(t, o),
                        },
                      ],
                    },
                  })),
                window.fbq &&
                  fbq("track", "AddToWishlist", {
                    currency: o,
                    value: this.formatNumber(t, o),
                    content_ids: [r],
                    contents: [{ id: r, quantity: 1 }],
                    content_name: n,
                    content_category: i,
                  }),
                window.ttq &&
                  ttq.track("AddToWishlist", {
                    contents: [
                      {
                        content_id: r,
                        content_type: "product",
                        content_name: n,
                      },
                    ],
                    value: this.formatNumber(t, o),
                    currency: o,
                  })),
              u
            );
          },
          updateCartCount(e) {
            const t = document.getElementById("site_cart_num");
            e > 0
              ? ((t.innerHTML = e > 9 ? "9+" : e),
                (t.style.display = "inline-block"))
              : (t.style.display = "none");
          },
          async addToCart(e, t, r, n, i, o, s) {
            const u = "USD",
              l = {
                product_id: e,
                platform: this.getPlatform(),
                qty: t,
                "g-recaptcha-response": s,
              };
            o && (l.cart_rule_id = o);
            const f = await c.post(a.cart, l);
            return (
              0 === f.code &&
                f.data.qty > 0 &&
                (this.updateCartCount(f.data.qty),
                window.dataLayer &&
                  (dataLayer.push({ ecommerce: null }),
                  dataLayer.push({
                    event: "add_to_cart",
                    ecommerce: {
                      method: "addtocart",
                      items: [
                        {
                          item_id: n,
                          item_name: i,
                          price: this.formatNumber(r, u),
                          quantity: t,
                        },
                      ],
                    },
                  })),
                window.fbq &&
                  fbq("track", "AddToCart", {
                    currency: u,
                    value: this.formatNumber(h.multiply(r, t), u),
                    content_ids: [n],
                    contents: [{ id: n, quantity: t }],
                    content_type: "product",
                    content_name: i,
                  }),
                window.ttq &&
                  ttq.track("AddToCart", {
                    contents: [
                      {
                        content_id: n,
                        content_type: "product",
                        content_name: i,
                      },
                    ],
                    value: this.formatNumber(h.multiply(r, t), u),
                    currency: u,
                  })),
              f
            );
          },
          async removeFromCart(e, t, r, n, i, o) {
            const s = await c.delete(
              `${a.cart}/${e}?g-recaptcha-response=${o}`
            );
            return (
              0 === s.code &&
                window.dataLayer &&
                (dataLayer.push({ ecommerce: null }),
                dataLayer.push({
                  event: "remove_from_cart",
                  ecommerce: {
                    items: [
                      {
                        item_id: n,
                        item_name: i,
                        price: this.formatNumber(r, "USD"),
                        quantity: t,
                      },
                    ],
                  },
                })),
              s
            );
          },
          selectProduct() {
            const e = document.getElementsByClassName("js_select_item");
            for (let t = 0; t < e.length; t++)
              (e[t].onclick = (r) => {
                r.preventDefault();
                const n = r.target,
                  i = n.getAttribute("data-sku"),
                  o = n.getAttribute("data-name"),
                  a = n.getAttribute("data-price");
                window.dataLayer &&
                  (dataLayer.push({ ecommerce: null }),
                  dataLayer.push({
                    event: "select_item",
                    ecommerce: {
                      items: [
                        {
                          item_id: i,
                          item_name: o,
                          price: this.formatNumber(a, "USD"),
                        },
                      ],
                    },
                  })),
                  (location.href = e[t].href);
              }),
                (e[t].onmouseenter = (e) => {
                  if (window.innerWidth < 1280) return;
                  const t = e.target;
                  if (!t.querySelector("span")) return;
                  if (t.scrollWidth <= t.clientWidth) return;
                  const r = t.querySelector("span");
                  (r.style.display = "inline-block"),
                    r.animate(
                      [
                        { transform: "translateX(0)" },
                        {
                          transform: `translateX(${
                            "ar" === JS_CURRENT_LANGUAGE
                              ? t.scrollWidth - t.clientWidth
                              : t.clientWidth - t.scrollWidth
                          }px)`,
                        },
                      ],
                      {
                        duration:
                          80 * Math.ceil((t.scrollWidth - t.clientWidth) / 10),
                        fill: "forwards",
                      }
                    );
                }),
                (e[t].onmouseleave = (e) => {
                  if (window.innerWidth < 1280) return;
                  const t = e.target;
                  t.querySelector("span") &&
                    (t.querySelector("span").style.display = "inline");
                });
          },
          addProductToCart() {
            const e = document.getElementsByClassName("js_add_to_cart");
            for (let t = 0; t < e.length; t++)
              e[t].onclick = async (r) => {
                r.preventDefault();
                const n = e[t].getAttribute("data-default-text"),
                  i = e[t].getAttribute("data-adding-text"),
                  o = e[t].getAttribute("data-id"),
                  a = e[t].getAttribute("data-price"),
                  s = e[t].getAttribute("data-sku"),
                  c = e[t].getAttribute("data-name");
                let u = "";
                const l = document.getElementById("cart_rule_id");
                l && (u = l.value),
                  (e[t].innerHTML = i),
                  grecaptcha.ready(() => {
                    grecaptcha
                      .execute(GOOGLE_RECAPTCHA, { action: "submit" })
                      .then(async (r) => {
                        0 ===
                          (await this.addToCart(o, 1, a, s, c, u, r)).code &&
                          (e[t].innerHTML = n);
                      });
                  });
              };
          },
        },
        v = {
          props: {
            isProduct: { type: Boolean, default: !0 },
            tag: { type: String, default: "span" },
            price: Number,
          },
          computed: {
            formatPrice() {
              const e = JS_CURRENCY_GROUP[JS_DEFAULT_CURRENCY];
              return this.isProduct
                ? `${e.symbol}${m.formatNumber(this.price)}`
                : `${e.symbol}${m.formatNumberWithoutUnit(this.price)}`;
            },
          },
          template:
            '\n    <del class="v-price" v-if="tag === \'del\'">{{ formatPrice }}</del>\n    <strong class="v-price" v-else-if="tag === \'strong\'">{{ formatPrice }}</strong>\n    <span class="v-price" v-else>{{ formatPrice }}</span>\n  ',
        };
      Vue.use(i());
      const g = {
        props: { view: Boolean, close: Function },
        i18n: new VueI18n({ locale: JS_CURRENT_LANGUAGE, messages: o }),
        components: {
          "v-alert": l,
          "v-checkbox": f,
          "v-confirm": d,
          "v-loading": p,
          "v-price": v,
        },
        data: () => ({
          cart: { products: [] },
          loading: !1,
          viewConfirm: !1,
          deleteIndex: null,
          deleteLoading: !1,
          viewAlert: !1,
          alertMessage: "",
        }),
        template:
          '\n    <div class="v-cart" :class="{ show: view }" v-touch:swipe.right="handleClose">\n      <div class="cart-header">\n        <h4 class="cart-header-title">{{ $t(\'shopping_cart\') }}</h4>\n        <a class="cart-header-close" href="javascript:;" @click="$emit(\'close\')"><span class="icon icon-modal-close"></span></a>\n      </div>\n      <div class="cart-body">\n        <v-loading :loading="loading">\n          <div v-if="cart.products.length > 0">\n            <div\n              class="header-product"\n              v-for="(product, index) in cart.products"\n              :key="product.sku"\n            >\n              <v-checkbox><input type="checkbox" :checked="product.is_select" @change="handleCheck($event, product.product_id)" /></v-checkbox>\n              <a class="header-product-img js_select_item" :data-sku="product.sku" :data-name="product.full_title" :data-price="product.final_price" :href="product.detail_url">\n                <img alt="" :src="IMAGE_URL + \'fit-in/360x360/\' + product.main_thumb_image" />\n              </a>\n              <div class="header-product-desc">\n                <a :href="product.detail_url" class="js_select_item" :data-sku="product.sku" :data-name="product.full_title" :data-price="product.final_price"><h5>{{ product.full_title }}</h5></a>\n                <p class="attr-box">{{ product.attribute.join(\'/\') }}</p>\n                <p class="price-box">\n                  <v-price :price="product.final_price"></v-price>\n                  <v-price :price="product.market_price" tag="del"></v-price>\n                </p>\n                <div class="flex-box">\n                  <div class="site-qty">\n                    <button\n                      type="button"\n                      class="minus-btn"\n                      :disabled="product.cart_qty <= 1"\n                      @click="handleUpdate(1, index)"\n                    ><span><</span></button>\n                    <input type="text" :value="product.cart_qty" @change="handleInput($event, product)" />\n                    <button\n                      type="button"\n                      class="plus-btn"\n                      :disabled="product.cart_qty >= 99 || product.stock_qty <= product.cart_qty"\n                      @click="handleUpdate(2, index)"\n                    ><span>></span></button>\n                  </div>\n                  <a href="javascript:;" @click="handleRemove(index)"><span class="icon icon-dash"></span></a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div v-else class="cart-empty-tip">\n            <p><span class="icon icon-cart"></span></p>\n            <p>{{ $t(\'your_cart_is_empty\') }}</p>\n          </div>\n        </v-loading>\n      </div>\n      <div class="cart-footer" v-show="cart.products.length > 0">\n        <div class="footer-operate">\n          <div class="check-all">\n            <v-checkbox><input type="checkbox" :checked="isFullChecked" @change="handleCheck($event, null, true)" /></v-checkbox>\n            <label>{{ $t(\'all\') }}</label>\n          </div>\n          <div class="price-box">\n            <h5>{{ $t(\'subtotal\') }}</h5>\n            <p>\n              <v-price :price="cart.cart_subtotal" :is-product="false"></v-price>\n            </p>\n          </div>\n        </div>\n        <div class="footer-btn">\n          <a class="btn-view-cart" href="/cart">{{ $t(\'view_cart\') }}</a>\n          <button class="btn-view-checkout" type="button" :disabled="isDisabled" @click="handleCheckout">{{ $t(\'check_out\') }}</button>\n        </div>\n      </div>\n      <v-confirm\n        :loading="deleteLoading"\n        :visible="viewConfirm"\n        :content="$t(\'delete_cart_alert\')"\n        @yes="removeFromCart"\n        @no="viewConfirm = false"\n      ></v-confirm>\n      <v-alert :visible="viewAlert" :content="alertMessage" @close="viewAlert = false"></v-alert>\n    </div>\n  ',
        methods: {
          getCart() {
            (this.loading = !0),
              c.get(a.cartMiniList).then((e) => {
                0 === e.code &&
                  ((this.cart = e.data),
                  m.updateCartCount(this.countCartQty())),
                  (this.loading = !1);
              });
          },
          countCartQty() {
            let e = 0;
            return (
              this.cart.products.forEach((t) => {
                e += t.cart_qty;
              }),
              e
            );
          },
          handleCheck(e, t, r = !1) {
            const n = { product_ids: [t], is_select: e.target.checked ? 1 : 0 };
            if (r) {
              const e = [];
              this.cart.products.forEach((t) => {
                e.push(t.product_id);
              }),
                (n.product_ids = e);
            }
            grecaptcha.ready(() => {
              grecaptcha
                .execute(GOOGLE_RECAPTCHA, { action: "submit" })
                .then((e) => {
                  (n["g-recaptcha-response"] = e),
                    c.put(a.cartSelectProduct, n).then((e) => {
                      0 === e.code
                        ? this.getCart()
                        : ((this.viewAlert = !0),
                          (this.alertMessage = e.message));
                    });
                });
            });
          },
          handleInput(e, t) {
            const r = e.target.value;
            if (-1 !== r.search(/\D/))
              return (
                (this.viewAlert = !0),
                void (this.alertMessage = this.$t("the_qty_must_be_an_integer"))
              );
            if (r > t.stock_qty)
              return (
                (this.viewAlert = !0),
                void (this.alertMessage = this.$t("the_maximum_value_is", {
                  number: t.stock_qty,
                }))
              );
            const n = { platform: m.getPlatform(), qty: r };
            grecaptcha.ready(() => {
              grecaptcha
                .execute(GOOGLE_RECAPTCHA, { action: "submit" })
                .then((e) => {
                  (n["g-recaptcha-response"] = e),
                    c.put(`${a.cart}/${t.product_id}`, n).then((e) => {
                      0 === e.code
                        ? this.getCart()
                        : ((this.viewAlert = !0),
                          (this.alertMessage = e.message));
                    });
                });
            });
          },
          handleUpdate(e, t) {
            const r = this.cart.products[t],
              n = {
                platform: m.getPlatform(),
                qty: 1 === e ? r.cart_qty - 1 : r.cart_qty + 1,
              };
            grecaptcha.ready(() => {
              grecaptcha
                .execute(GOOGLE_RECAPTCHA, { action: "submit" })
                .then((e) => {
                  (n["g-recaptcha-response"] = e),
                    c.put(`${a.cart}/${r.product_id}`, n).then((e) => {
                      0 === e.code
                        ? this.getCart()
                        : ((this.viewAlert = !0),
                          (this.alertMessage = e.message));
                    });
                });
            });
          },
          handleRemove(e) {
            (this.deleteIndex = e), (this.viewConfirm = !0);
          },
          removeFromCart() {
            grecaptcha.ready(() => {
              grecaptcha
                .execute(GOOGLE_RECAPTCHA, { action: "submit" })
                .then(async (e) => {
                  const t = this.cart.products[this.deleteIndex];
                  this.deleteLoading = !0;
                  const r = await m.removeFromCart(
                    t.product_id,
                    t.qty,
                    t.final_price,
                    t.sku,
                    t.full_title,
                    e
                  );
                  (this.deleteLoading = !1),
                    (this.viewConfirm = !1),
                    0 === r.code && this.getCart();
                });
            });
          },
          handleCheckout() {
            location.href = "/checkout";
          },
          handleClose() {
            this.$emit("close");
          },
        },
        mounted() {
          this.getCart();
        },
        updated() {
          m.formatPrice(), m.selectProduct();
        },
        watch: {
          view: function (e, t) {
            e && e !== t && this.getCart();
          },
        },
        computed: {
          isFullChecked() {
            let e = !1;
            return (
              this.cart.products.length > 0 &&
                (e = this.cart.products.every((e) => 1 === e.is_select)),
              e
            );
          },
          isDisabled() {
            return this.cart.products.every((e) => 0 === e.is_select);
          },
        },
      };
      Vue.use(i()),
        new Vue({
          el: "#header",
          components: { "dynamic-marquee": t(), "v-search": u, "v-cart": g },
          data: {
            viewAd: !0,
            viewCategory: !1,
            viewSubNav: "",
            viewSuberNav: "",
            viewSearch: !1,
            viewCart: !1,
            username: "",
            viewMobileUserCenter: !1,
            viewPCUserCenter: !1,
            affiliateActiveStatus: 0,
            verifyStatus: {},
          },
          methods: {
            closeAd() {
              (this.viewAd = !1), localStorage.setItem("readedAd", 1);
            },
            handleMainMouseleave() {
              (this.viewSearch = !1), (this.viewPCUserCenter = !1);
            },
            toggleCategory() {
              this.viewCategory
                ? ((this.viewMobileUserCenter = !1),
                  (document.body.style.overflowY = "auto"))
                : ((this.viewSubNav = ""),
                  (this.viewSuberNav = ""),
                  (document.body.style.overflowY = "hidden")),
                (this.viewCategory = !this.viewCategory);
            },
            toggleSubNav(e) {
              this.viewSubNav === e
                ? (this.viewSubNav = "")
                : (this.viewSubNav = e),
                (this.viewSuberNav = "");
            },
            toggleSuberNav(e) {
              window.innerWidth >= 1280 ||
                (this.viewSuberNav !== e
                  ? (this.viewSuberNav = e)
                  : (this.viewSuberNav = ""));
            },
            handleUserClick() {
              window.innerWidth >= 1280
                ? (location.href = "/user/person")
                : ((this.viewPCUserCenter = !1),
                  (this.viewCategory = !0),
                  (this.viewMobileUserCenter = !0));
            },
            handleCartMouseenter() {
              (this.viewSearch = !1), (this.viewPCUserCenter = !1);
            },
            handleUserMouseenter() {
              window.innerWidth >= 1280 && (this.viewPCUserCenter = !0);
            },
            getCartQty() {
              const e = document.getElementById("site_cart_num");
              e &&
                c.get(a.cartQty).then(function (t) {
                  if (0 === t.code && t.data.qty > 0) {
                    const r = t.data.qty > 9 ? "9+" : t.data.qty;
                    (e.innerHTML = `${r}`), (e.style.display = "inline-block");
                  }
                });
            },
            handleSignout() {
              c.get(a.logout).then((e) => {
                0 === e.code &&
                  (localStorage.removeItem("token"),
                  localStorage.removeItem("name"),
                  (location.href = "/auth/sign-in"));
              });
            },
            changeLanguage(e) {
              const t = { language_code: e };
              c.put(a.channelCurrentLanguage, t).then((e) => {
                0 === e.code && location.reload();
              });
            },
            changeCurrency(e) {
              const t = { currency_code: e };
              c.put(a.channelCurrentCurrency, t).then((e) => {
                0 === e.code && location.reload();
              });
            },
            getAffiliateSetting() {
              c.get(a.affiliateSettingDetail).then((e) => {
                0 === e.code &&
                  ((this.affiliateActiveStatus = e.data.active),
                  this.getStatus());
              });
            },
            getStatus() {
              null !== localStorage.getItem("token") &&
                c.get(a.affiliateUserAuditStatus).then((e) => {
                  0 === e.code && (this.verifyStatus = e.data);
                });
            },
          },
          mounted() {
            if (
              ((1 === Number(localStorage.getItem("readedAd")) ||
                void 0 === this.$refs.site_ad ||
                (void 0 !== this.$refs.site_ad &&
                  "none" === this.$refs.site_ad.style)) &&
                (this.viewAd = !1),
              (this.username = localStorage.getItem("name")),
              this.getCartQty(),
              document.getElementById("site_cart_num"))
            ) {
              const e = Math.min(window.innerWidth, 750) / 750;
              document.getElementById(
                "site_cart_num"
              ).style.transform = `scale(${e}) translate(${100 * e}%, -${
                100 * e
              }%)`;
            }
            window.innerWidth < 1280 && this.getAffiliateSetting();
          },
          watch: {
            viewSearch: function (e) {
              e && (this.viewPCUserCenter = !1);
            },
            viewPCUserCenter: function (e) {
              e && (this.viewSearch = !1);
            },
          },
        }),
        new Vue({
          el: "#footer",
          data: { viewNav: "", viewBackToTop: !1 },
          methods: {
            toggleNav(e) {
              this.viewNav !== e ? (this.viewNav = e) : (this.viewNav = "");
            },
            handleBackToTop() {
              const e = function () {
                const t = document.documentElement.scrollTop - 80;
                if (((document.documentElement.scrollTop = t), t < 10))
                  return !1;
                requestAnimationFrame(e);
              };
              e();
            },
            initAffiliate() {
              const e = new URLSearchParams(location.search);
              e.get("affiliate_code") &&
                (localStorage.setItem(
                  "affiliate_code",
                  e.get("affiliate_code")
                ),
                localStorage.setItem(
                  "affiliate_timestamp",
                  parseInt(new Date().getTime() / 1e3)
                ));
            },
          },
          mounted() {
            this.initAffiliate(),
              window.addEventListener("scroll", () => {
                document.documentElement.scrollTop > window.innerHeight
                  ? (this.viewBackToTop = !0)
                  : (this.viewBackToTop = !1);
              });
          },
        }),
        document.addEventListener("DOMContentLoaded", function () {
          m.formatPrice(), m.selectProduct(), m.addProductToCart();
        });
    })();
})();
