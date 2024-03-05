(() => {
  "use strict";
  var e = {
    n: (t) => {
      var i = t && t.__esModule ? () => t.default : () => t;
      return e.d(i, { a: i }), i;
    },
    d: (t, i) => {
      for (var r in i)
        e.o(i, r) &&
          !e.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: i[r] });
    },
    o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
  };
  const t = Vue;
  var i = e.n(t),
    r = function () {
      return (
        (r =
          Object.assign ||
          function (e) {
            for (var t, i = 1, r = arguments.length; i < r; i++)
              for (var n in (t = arguments[i]))
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
          }),
        r.apply(this, arguments)
      );
    };
  function n(e, t, i, r) {
    return new (i || (i = Promise))(function (n, a) {
      function s(e) {
        try {
          l(r.next(e));
        } catch (e) {
          a(e);
        }
      }
      function o(e) {
        try {
          l(r.throw(e));
        } catch (e) {
          a(e);
        }
      }
      function l(e) {
        var t;
        e.done
          ? n(e.value)
          : ((t = e.value),
            t instanceof i
              ? t
              : new i(function (e) {
                  e(t);
                })).then(s, o);
      }
      l((r = r.apply(e, t || [])).next());
    });
  }
  function a(e, t) {
    var i,
      r,
      n,
      a,
      s = {
        label: 0,
        sent: function () {
          if (1 & n[0]) throw n[1];
          return n[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (a = { next: o(0), throw: o(1), return: o(2) }),
      "function" == typeof Symbol &&
        (a[Symbol.iterator] = function () {
          return this;
        }),
      a
    );
    function o(a) {
      return function (o) {
        return (function (a) {
          if (i) throw new TypeError("Generator is already executing.");
          for (; s; )
            try {
              if (
                ((i = 1),
                r &&
                  (n =
                    2 & a[0]
                      ? r.return
                      : a[0]
                      ? r.throw || ((n = r.return) && n.call(r), 0)
                      : r.next) &&
                  !(n = n.call(r, a[1])).done)
              )
                return n;
              switch (((r = 0), n && (a = [2 & a[0], n.value]), a[0])) {
                case 0:
                case 1:
                  n = a;
                  break;
                case 4:
                  return s.label++, { value: a[1], done: !1 };
                case 5:
                  s.label++, (r = a[1]), (a = [0]);
                  continue;
                case 7:
                  (a = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (
                    !((n = s.trys),
                    (n = n.length > 0 && n[n.length - 1]) ||
                      (6 !== a[0] && 2 !== a[0]))
                  ) {
                    s = 0;
                    continue;
                  }
                  if (3 === a[0] && (!n || (a[1] > n[0] && a[1] < n[3]))) {
                    s.label = a[1];
                    break;
                  }
                  if (6 === a[0] && s.label < n[1]) {
                    (s.label = n[1]), (n = a);
                    break;
                  }
                  if (n && s.label < n[2]) {
                    (s.label = n[2]), s.ops.push(a);
                    break;
                  }
                  n[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              a = t.call(e, s);
            } catch (e) {
              (a = [6, e]), (r = 0);
            } finally {
              i = n = 0;
            }
          if (5 & a[0]) throw a[1];
          return { value: a[0] ? a[1] : void 0, done: !0 };
        })([a, o]);
      };
    }
  }
  function s() {
    for (var e = 0, t = 0, i = arguments.length; t < i; t++)
      e += arguments[t].length;
    var r = Array(e),
      n = 0;
    for (t = 0; t < i; t++)
      for (var a = arguments[t], s = 0, o = a.length; s < o; s++, n++)
        r[n] = a[s];
    return r;
  }
  function o(e) {
    return e != e;
  }
  function l(e) {
    return null == e;
  }
  var u = function (e) {
    return null !== e && e && "object" == typeof e && !Array.isArray(e);
  };
  function d(e) {
    return "" !== e && !l(e);
  }
  function c(e) {
    return "function" == typeof e;
  }
  function f(e) {
    return c(e) && !!e.__locatorRef;
  }
  function v(e, t) {
    var i = Array.isArray(e) ? e : p(e);
    if (c(i.findIndex)) return i.findIndex(t);
    for (var r = 0; r < i.length; r++) if (t(i[r], r)) return r;
    return -1;
  }
  function m(e, t) {
    return -1 !== e.indexOf(t);
  }
  function p(e) {
    return c(Array.from)
      ? Array.from(e)
      : (function (e) {
          for (var t = [], i = e.length, r = 0; r < i; r++) t.push(e[r]);
          return t;
        })(e);
  }
  function h(e) {
    return c(Object.values)
      ? Object.values(e)
      : Object.keys(e).map(function (t) {
          return e[t];
        });
  }
  function _(e, t) {
    return (
      Object.keys(t).forEach(function (i) {
        if (u(t[i])) return e[i] || (e[i] = {}), void _(e[i], t[i]);
        e[i] = t[i];
      }),
      e
    );
  }
  function g(e, t, i) {
    return (
      void 0 === t && (t = 0),
      void 0 === i && (i = { cancelled: !1 }),
      0 === t
        ? e
        : function () {
            for (var n = [], a = 0; a < arguments.length; a++)
              n[a] = arguments[a];
            clearTimeout(r),
              (r = setTimeout(function () {
                (r = void 0), i.cancelled || e.apply(void 0, n);
              }, t));
          }
    );
    var r;
  }
  function y(e, t) {
    return e.replace(/{([^}]+)}/g, function (e, i) {
      return i in t ? t[i] : "{" + i + "}";
    });
  }
  var b = {};
  var w = (function () {
    function e() {}
    return (
      (e.extend = function (e, t) {
        var i = (function (e) {
          var t;
          return (
            (null === (t = e.params) || void 0 === t ? void 0 : t.length) &&
              (e.params = e.params.map(function (e) {
                return "string" == typeof e ? { name: e } : e;
              })),
            e
          );
        })(t);
        b[e]
          ? (b[e] = _(b[e], t))
          : (b[e] = r({ lazy: !1, computesRequired: !1 }, i));
      }),
      (e.isLazy = function (e) {
        var t;
        return !!(null === (t = b[e]) || void 0 === t ? void 0 : t.lazy);
      }),
      (e.isRequireRule = function (e) {
        var t;
        return !!(null === (t = b[e]) || void 0 === t
          ? void 0
          : t.computesRequired);
      }),
      (e.getRuleDefinition = function (e) {
        return b[e];
      }),
      e
    );
  })();
  function x(e, t) {
    !(function (e, t) {
      if (c(t)) return;
      if (c(t.validate)) return;
      if (w.getRuleDefinition(e)) return;
      throw new Error(
        "Extension Error: The validator '" +
          e +
          "' must be a function or have a 'validate' method."
      );
    })(e, t),
      "object" != typeof t ? w.extend(e, { validate: t }) : w.extend(e, t);
  }
  var A = r(
      {},
      {
        defaultMessage: "{_field_} is not valid.",
        skipOptional: !0,
        classes: {
          touched: "touched",
          untouched: "untouched",
          valid: "valid",
          invalid: "invalid",
          pristine: "pristine",
          dirty: "dirty",
        },
        bails: !0,
        mode: "aggressive",
        useConstraintAttrs: !0,
      }
    ),
    O = function () {
      return A;
    },
    R = function (e) {
      A = r(r({}, A), e);
    };
  function k(e) {
    var t,
      i = {};
    return (
      Object.defineProperty(i, "_$$isNormalized", {
        value: !0,
        writable: !1,
        enumerable: !1,
        configurable: !1,
      }),
      e
        ? u(e) && e._$$isNormalized
          ? e
          : u(e)
          ? Object.keys(e).reduce(function (t, i) {
              var r = [];
              return (
                (r =
                  !0 === e[i]
                    ? []
                    : Array.isArray(e[i]) || u(e[i])
                    ? e[i]
                    : [e[i]]),
                !1 !== e[i] && (t[i] = S(i, r)),
                t
              );
            }, i)
          : "string" != typeof e
          ? ((t = "rules must be either a string or an object."),
            console.warn("[vee-validate] " + t),
            i)
          : e.split("|").reduce(function (e, t) {
              var i = q(t);
              return i.name ? ((e[i.name] = S(i.name, i.params)), e) : e;
            }, i)
        : i
    );
  }
  function S(e, t) {
    var i = w.getRuleDefinition(e);
    if (!i) return t;
    var r,
      n,
      a = {};
    if (!i.params && !Array.isArray(t))
      throw new Error(
        "You provided an object params to a rule that has no defined schema."
      );
    if (Array.isArray(t) && !i.params) return t;
    !i.params || (i.params.length < t.length && Array.isArray(t))
      ? (r = t.map(function (e, t) {
          var r,
            a = null === (r = i.params) || void 0 === r ? void 0 : r[t];
          return (n = a || n), a || (a = n), a;
        }))
      : (r = i.params);
    for (var s = 0; s < r.length; s++) {
      var o = r[s],
        l = o.default;
      Array.isArray(t)
        ? s in t && (l = t[s])
        : o.name in t
        ? (l = t[o.name])
        : 1 === r.length && (l = t),
        o.isTarget && (l = $(l, o.cast)),
        "string" == typeof l && "@" === l[0] && (l = $(l.slice(1), o.cast)),
        !f(l) && o.cast && (l = o.cast(l)),
        a[o.name]
          ? ((a[o.name] = Array.isArray(a[o.name]) ? a[o.name] : [a[o.name]]),
            a[o.name].push(l))
          : (a[o.name] = l);
    }
    return a;
  }
  var q = function (e) {
    var t = [],
      i = e.split(":")[0];
    return (
      m(e, ":") && (t = e.split(":").slice(1).join(":").split(",")),
      { name: i, params: t }
    );
  };
  function $(e, t) {
    var i = function (i) {
      var r = i[e];
      return t ? t(r) : r;
    };
    return (i.__locatorRef = e), i;
  }
  function E(e, t, i) {
    return (
      void 0 === i && (i = {}),
      n(this, void 0, void 0, function () {
        var r, n, s, o, l, u;
        return a(this, function (a) {
          switch (a.label) {
            case 0:
              return (
                (r = null == i ? void 0 : i.bails),
                (n = null == i ? void 0 : i.skipIfEmpty),
                [
                  4,
                  T(
                    {
                      name: (null == i ? void 0 : i.name) || "{field}",
                      rules: k(t),
                      bails: null == r || r,
                      skipIfEmpty: null == n || n,
                      forceRequired: !1,
                      crossTable: (null == i ? void 0 : i.values) || {},
                      names: (null == i ? void 0 : i.names) || {},
                      customMessages:
                        (null == i ? void 0 : i.customMessages) || {},
                    },
                    e,
                    i
                  ),
                ]
              );
            case 1:
              return (
                (s = a.sent()),
                (o = []),
                (l = {}),
                (u = {}),
                s.errors.forEach(function (e) {
                  var t = e.msg();
                  o.push(t), (l[e.rule] = t), (u[e.rule] = e.msg);
                }),
                [
                  2,
                  {
                    valid: s.valid,
                    required: s.required,
                    errors: o,
                    failedRules: l,
                    regenerateMap: u,
                  },
                ]
              );
          }
        });
      })
    );
  }
  function T(e, t, i) {
    var r = (void 0 === i ? {} : i).isInitial,
      s = void 0 !== r && r;
    return n(this, void 0, void 0, function () {
      var i, r, n, o, l, u, d, c, f;
      return a(this, function (a) {
        switch (a.label) {
          case 0:
            return [4, L(e, t)];
          case 1:
            if (
              ((i = a.sent()),
              (r = i.shouldSkip),
              (n = i.required),
              (o = i.errors),
              r)
            )
              return [2, { valid: !o.length, required: n, errors: o }];
            (l = Object.keys(e.rules).filter(function (e) {
              return !w.isRequireRule(e);
            })),
              (u = l.length),
              (d = 0),
              (a.label = 2);
          case 2:
            return d < u
              ? s && w.isLazy(l[d])
                ? [3, 4]
                : ((c = l[d]), [4, I(e, t, { name: c, params: e.rules[c] })])
              : [3, 5];
          case 3:
            if (!(f = a.sent()).valid && f.error && (o.push(f.error), e.bails))
              return [2, { valid: !1, required: n, errors: o }];
            a.label = 4;
          case 4:
            return d++, [3, 2];
          case 5:
            return [2, { valid: !o.length, required: n, errors: o }];
        }
      });
    });
  }
  function L(e, t) {
    return n(this, void 0, void 0, function () {
      var i, r, n, s, o, d, c, f, v;
      return a(this, function (a) {
        switch (a.label) {
          case 0:
            (i = Object.keys(e.rules).filter(w.isRequireRule)),
              (r = i.length),
              (n = []),
              (s =
                l(t) ||
                "" === t ||
                ((m = t), Array.isArray(m) && 0 === m.length)),
              (o = s && e.skipIfEmpty),
              (c = 0),
              (a.label = 1);
          case 1:
            return c < r
              ? ((f = i[c]), [4, I(e, t, { name: f, params: e.rules[f] })])
              : [3, 4];
          case 2:
            if (((v = a.sent()), !u(v)))
              throw new Error(
                "Require rules has to return an object (see docs)"
              );
            if (
              (void 0 !== v.required && (d = v.required),
              !v.valid && v.error && (n.push(v.error), e.bails))
            )
              return [2, { shouldSkip: !0, required: v.required, errors: n }];
            a.label = 3;
          case 3:
            return c++, [3, 1];
          case 4:
            return (!s || d || e.skipIfEmpty) && (e.bails || o)
              ? [2, { shouldSkip: !d && s, required: d, errors: n }]
              : [2, { shouldSkip: !1, required: d, errors: n }];
        }
        var m;
      });
    });
  }
  function I(e, t, i) {
    return n(this, void 0, void 0, function () {
      var n, s, o, l, d;
      return a(this, function (a) {
        switch (a.label) {
          case 0:
            if (!(n = w.getRuleDefinition(i.name)) || !n.validate)
              throw new Error("No such validator '" + i.name + "' exists.");
            return (
              (s = n.castValue ? n.castValue(t) : t),
              (o = (function (e, t) {
                if (Array.isArray(e))
                  return e.map(function (e) {
                    var i =
                      "string" == typeof e && "@" === e[0] ? e.slice(1) : e;
                    return i in t ? t[i] : e;
                  });
                var i = {},
                  r = function (e) {
                    return f(e) ? e(t) : e;
                  };
                return (
                  Object.keys(e).forEach(function (t) {
                    i[t] = r(e[t]);
                  }),
                  i
                );
              })(i.params, e.crossTable)),
              [4, n.validate(s, o)]
            );
          case 1:
            return "string" == typeof (l = a.sent())
              ? ((d = r(r({}, o || {}), {
                  _field_: e.name,
                  _value_: t,
                  _rule_: i.name,
                })),
                [
                  2,
                  {
                    valid: !1,
                    error: {
                      rule: i.name,
                      msg: function () {
                        return y(l, d);
                      },
                    },
                  },
                ])
              : (u(l) || (l = { valid: l }),
                [
                  2,
                  {
                    valid: l.valid,
                    required: l.required,
                    error: l.valid ? void 0 : j(e, t, n, i.name, o),
                  },
                ]);
        }
      });
    });
  }
  function j(e, t, i, n, a) {
    var s,
      o = null !== (s = e.customMessages[n]) && void 0 !== s ? s : i.message,
      l = (function (e, t, i) {
        var r = t.params;
        if (!r) return {};
        var n = r.filter(function (e) {
          return e.isTarget;
        }).length;
        if (n <= 0) return {};
        var a = {},
          s = e.rules[i];
        !Array.isArray(s) &&
          u(s) &&
          (s = r.map(function (e) {
            return s[e.name];
          }));
        for (var o = 0; o < r.length; o++) {
          var l = r[o],
            d = s[o];
          if (f(d)) {
            d = d.__locatorRef;
            var c = e.names[d] || d;
            (a[l.name] = c), (a["_" + l.name + "_"] = e.crossTable[d]);
          }
        }
        return a;
      })(e, i, n),
      d = (function (e, t, i, r) {
        var n = {},
          a = e.rules[i],
          s = t.params || [];
        if (!a) return {};
        return (
          Object.keys(a).forEach(function (t, i) {
            var r = a[t];
            if (!f(r)) return {};
            var o = s[i];
            if (!o) return {};
            var l = r.__locatorRef;
            (n[o.name] = e.names[l] || l),
              (n["_" + o.name + "_"] = e.crossTable[l]);
          }),
          { userTargets: n, userMessage: r }
        );
      })(e, i, n, o),
      c = d.userTargets,
      v = d.userMessage,
      m = r(
        r(r(r({}, a || {}), { _field_: e.name, _value_: t, _rule_: n }), l),
        c
      );
    return {
      msg: function () {
        return (function (e, t, i) {
          if ("function" == typeof e) return e(t, i);
          return y(e, r(r({}, i), { _field_: t }));
        })(v || O().defaultMessage, e.name, m);
      },
      rule: n,
    };
  }
  var P = {
      aggressive: function () {
        return { on: ["input", "blur"] };
      },
      eager: function (e) {
        return e.errors.length
          ? { on: ["input", "change"] }
          : { on: ["change", "blur"] };
      },
      passive: function () {
        return { on: [] };
      },
      lazy: function () {
        return { on: ["change", "blur"] };
      },
    },
    V = new (i())();
  var z,
    M = (function () {
      function e(e, t) {
        (this.container = {}), (this.locale = e), this.merge(t);
      }
      return (
        (e.prototype.resolve = function (e, t, i) {
          return this.format(this.locale, e, t, i);
        }),
        (e.prototype.format = function (e, t, i, n) {
          var a,
            s,
            o,
            l,
            u,
            d,
            f,
            v,
            m,
            p =
              null ===
                (o =
                  null ===
                    (s =
                      null === (a = this.container[e]) || void 0 === a
                        ? void 0
                        : a.fields) || void 0 === s
                    ? void 0
                    : s[t]) || void 0 === o
                ? void 0
                : o[i],
            h =
              null ===
                (u =
                  null === (l = this.container[e]) || void 0 === l
                    ? void 0
                    : l.messages) || void 0 === u
                ? void 0
                : u[i];
          return (
            (m = p || h || "") || (m = "{_field_} is not valid"),
            (t =
              null !==
                (v =
                  null ===
                    (f =
                      null === (d = this.container[e]) || void 0 === d
                        ? void 0
                        : d.names) || void 0 === f
                    ? void 0
                    : f[t]) && void 0 !== v
                ? v
                : t),
            c(m) ? m(t, n) : y(m, r(r({}, n), { _field_: t }))
          );
        }),
        (e.prototype.merge = function (e) {
          _(this.container, e);
        }),
        (e.prototype.hasRule = function (e) {
          var t, i;
          return !!(null ===
            (i =
              null === (t = this.container[this.locale]) || void 0 === t
                ? void 0
                : t.messages) || void 0 === i
            ? void 0
            : i[e]);
        }),
        e
      );
    })();
  function C(e, t) {
    var i;
    if (
      (z ||
        ((z = new M("en", {})),
        R({
          defaultMessage: function (e, t) {
            return z.resolve(e, null == t ? void 0 : t._rule_, t || {});
          },
        })),
      "string" == typeof e)
    )
      return (
        (z.locale = e),
        t && z.merge((((i = {})[e] = t), i)),
        void V.$emit("change:locale")
      );
    z.merge(e);
  }
  var N = function e(t, i) {
      if (t === i) return !0;
      if (t && i && "object" == typeof t && "object" == typeof i) {
        if (t.constructor !== i.constructor) return !1;
        var r, n, a;
        if (Array.isArray(t)) {
          if ((r = t.length) != i.length) return !1;
          for (n = r; 0 != n--; ) if (!e(t[n], i[n])) return !1;
          return !0;
        }
        if (t.constructor === RegExp)
          return t.source === i.source && t.flags === i.flags;
        if (t.valueOf !== Object.prototype.valueOf)
          return t.valueOf() === i.valueOf();
        if (t.toString !== Object.prototype.toString)
          return t.toString() === i.toString();
        if ((r = (a = Object.keys(t)).length) !== Object.keys(i).length)
          return !1;
        for (n = r; 0 != n--; )
          if (!Object.prototype.hasOwnProperty.call(i, a[n])) return !1;
        for (n = r; 0 != n--; ) {
          var s = a[n];
          if (!e(t[s], i[s])) return !1;
        }
        return !0;
      }
      return t != t && i != i;
    },
    D = function (e) {
      return (
        !!e &&
        (!!("undefined" != typeof Event && c(Event) && e instanceof Event) ||
          !(!e || !e.srcElement))
      );
    };
  var G = function (e) {
    var t,
      i = (null === (t = e.data) || void 0 === t ? void 0 : t.attrs) || e.elm;
    return (
      !("input" !== e.tag || (i && i.type)) ||
      "textarea" === e.tag ||
      m(
        ["text", "password", "search", "email", "tel", "url", "number"],
        null == i ? void 0 : i.type
      )
    );
  };
  function F(e) {
    if (e.data) {
      var t,
        i,
        r,
        n,
        a = e.data;
      if ("model" in a) return a.model;
      if (e.data.directives)
        return (
          (t = e.data.directives),
          (i = function (e) {
            return "model" === e.name;
          }),
          (r = Array.isArray(t) ? t : p(t)),
          -1 === (n = v(r, i)) ? void 0 : r[n]
        );
    }
  }
  function B(e) {
    var t,
      i,
      r = F(e);
    if (r) return { value: r.value };
    var n = W(e),
      a = (null == n ? void 0 : n.prop) || "value";
    return (null === (t = e.componentOptions) || void 0 === t
      ? void 0
      : t.propsData) && a in e.componentOptions.propsData
      ? { value: e.componentOptions.propsData[a] }
      : (null === (i = e.data) || void 0 === i ? void 0 : i.domProps) &&
        "value" in e.data.domProps
      ? { value: e.data.domProps.value }
      : void 0;
  }
  function U(e) {
    if (!Array.isArray(e) && void 0 !== B(e)) return [e];
    var t = (function (e) {
      return Array.isArray(e)
        ? e
        : Array.isArray(e.children)
        ? e.children
        : e.componentOptions && Array.isArray(e.componentOptions.children)
        ? e.componentOptions.children
        : [];
    })(e);
    return t.reduce(function (e, t) {
      var i = U(t);
      return i.length && e.push.apply(e, i), e;
    }, []);
  }
  function W(e) {
    return e.componentOptions ? e.componentOptions.Ctor.options.model : null;
  }
  function J(e, t, i) {
    if (l(e[t])) e[t] = [i];
    else {
      if (c(e[t]) && e[t].fns) {
        var r = e[t];
        return (
          (r.fns = Array.isArray(r.fns) ? r.fns : [r.fns]),
          void (m(r.fns, i) || r.fns.push(i))
        );
      }
      if (c(e[t])) {
        var n = e[t];
        e[t] = [n];
      }
      Array.isArray(e[t]) && !m(e[t], i) && e[t].push(i);
    }
  }
  function Y(e, t, i) {
    e.componentOptions
      ? (function (e, t, i) {
          e.componentOptions &&
            (e.componentOptions.listeners ||
              (e.componentOptions.listeners = {}),
            J(e.componentOptions.listeners, t, i));
        })(e, t, i)
      : (function (e, t, i) {
          e.data || (e.data = {}),
            l(e.data.on) && (e.data.on = {}),
            J(e.data.on, t, i);
        })(e, t, i);
  }
  function H(e, t) {
    var i;
    return e.componentOptions
      ? (W(e) || { event: "input" }).event || "input"
      : (
          null === (i = null == t ? void 0 : t.modifiers) || void 0 === i
            ? void 0
            : i.lazy
        )
      ? "change"
      : G(e)
      ? "input"
      : "change";
  }
  function K(e) {
    var t,
      i = null === (t = e.data) || void 0 === t ? void 0 : t.attrs;
    if (!m(["input", "select", "textarea"], e.tag) || !i) return {};
    var n = {};
    return (
      "required" in i &&
        !1 !== i.required &&
        w.getRuleDefinition("required") &&
        (n.required = "checkbox" !== i.type || [!0]),
      G(e)
        ? k(
            r(
              r({}, n),
              (function (e) {
                var t,
                  i = null === (t = e.data) || void 0 === t ? void 0 : t.attrs,
                  r = {};
                return i
                  ? ("email" === i.type &&
                      w.getRuleDefinition("email") &&
                      (r.email = ["multiple" in i]),
                    i.pattern &&
                      w.getRuleDefinition("regex") &&
                      (r.regex = i.pattern),
                    i.maxlength >= 0 &&
                      w.getRuleDefinition("max") &&
                      (r.max = i.maxlength),
                    i.minlength >= 0 &&
                      w.getRuleDefinition("min") &&
                      (r.min = i.minlength),
                    "number" === i.type &&
                      (d(i.min) &&
                        w.getRuleDefinition("min_value") &&
                        (r.min_value = Number(i.min)),
                      d(i.max) &&
                        w.getRuleDefinition("max_value") &&
                        (r.max_value = Number(i.max))),
                    r)
                  : r;
              })(e)
            )
          )
        : k(n)
    );
  }
  function Q(e, t) {
    return e.$scopedSlots.default
      ? e.$scopedSlots.default(t) || []
      : e.$slots.default || [];
  }
  function Z(e, t) {
    return (
      !(e._ignoreImmediate || !e.immediate) ||
      ((i = e.value),
      (r = t),
      !((o(i) && o(r)) || i === r || !e.normalizedEvents.length) ||
        !!e._needsValidation ||
        (!e.initialized && void 0 === t))
    );
    var i, r;
  }
  function X(e) {
    return r(r({}, e.flags), {
      errors: e.errors,
      classes: e.classes,
      failedRules: e.failedRules,
      reset: function () {
        return e.reset();
      },
      validate: function () {
        for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
        return e.validate.apply(e, t);
      },
      ariaInput: {
        "aria-invalid": e.flags.invalid ? "true" : "false",
        "aria-required": e.isRequired ? "true" : "false",
        "aria-errormessage": "vee_" + e.id,
      },
      ariaMsg: {
        id: "vee_" + e.id,
        "aria-live": e.errors.length ? "assertive" : "off",
      },
    });
  }
  function ee(e, t) {
    e.initialized || (e.initialValue = t);
    var i = Z(e, t);
    if (
      ((e._needsValidation = !1), (e.value = t), (e._ignoreImmediate = !0), i)
    ) {
      var r = function () {
        if (e.immediate || e.flags.validated) return ie(e);
        e.validateSilent();
      };
      e.initialized
        ? r()
        : e.$once("hook:mounted", function () {
            return r();
          });
    }
  }
  function te(e) {
    return (c(e.mode) ? e.mode : P[e.mode])(e);
  }
  function ie(e) {
    var t = e.validateSilent();
    return (
      (e._pendingValidation = t),
      t.then(function (i) {
        return (
          t === e._pendingValidation &&
            (e.applyResult(i), (e._pendingValidation = void 0)),
          i
        );
      })
    );
  }
  function re(e) {
    e.$veeOnInput ||
      (e.$veeOnInput = function (t) {
        e.syncValue(t), e.setFlags({ dirty: !0, pristine: !1 });
      });
    var t = e.$veeOnInput;
    e.$veeOnBlur ||
      (e.$veeOnBlur = function () {
        e.setFlags({ touched: !0, untouched: !1 });
      });
    var i = e.$veeOnBlur,
      r = e.$veeHandler,
      n = te(e);
    return (
      (r && e.$veeDebounce === e.debounce) ||
        ((r = g(function () {
          e.$nextTick(function () {
            e._pendingReset || ie(e), (e._pendingReset = !1);
          });
        }, n.debounce || e.debounce)),
        (e.$veeHandler = r),
        (e.$veeDebounce = e.debounce)),
      { onInput: t, onBlur: i, onValidate: r }
    );
  }
  var ne = 0;
  var ae = i().extend({
    name: "ValidationProvider",
    inject: {
      $_veeObserver: {
        from: "$_veeObserver",
        default: function () {
          return (
            this.$vnode.context.$_veeObserver ||
              (this.$vnode.context.$_veeObserver = {
                refs: {},
                observe: function (e) {
                  this.refs[e.id] = e;
                },
                unobserve: function (e) {
                  delete this.refs[e];
                },
              }),
            this.$vnode.context.$_veeObserver
          );
        },
      },
    },
    props: {
      vid: { type: String, default: "" },
      name: { type: String, default: null },
      mode: {
        type: [String, Function],
        default: function () {
          return O().mode;
        },
      },
      rules: { type: [Object, String], default: null },
      immediate: { type: Boolean, default: !1 },
      bails: {
        type: Boolean,
        default: function () {
          return O().bails;
        },
      },
      skipIfEmpty: {
        type: Boolean,
        default: function () {
          return O().skipOptional;
        },
      },
      debounce: { type: Number, default: 0 },
      tag: { type: String, default: "span" },
      slim: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
      customMessages: {
        type: Object,
        default: function () {
          return {};
        },
      },
      detectInput: { type: Boolean, default: !0 },
    },
    watch: {
      rules: {
        deep: !0,
        handler: function (e, t) {
          this._needsValidation = !N(e, t);
        },
      },
    },
    data: function () {
      return {
        errors: [],
        value: void 0,
        initialized: !1,
        initialValue: void 0,
        flags: {
          untouched: !0,
          touched: !1,
          dirty: !1,
          pristine: !0,
          valid: !1,
          invalid: !1,
          validated: !1,
          pending: !1,
          required: !1,
          changed: !1,
          passed: !1,
          failed: !1,
        },
        failedRules: {},
        isActive: !0,
        fieldName: "",
        id: "",
      };
    },
    computed: {
      fieldDeps: function () {
        var e = this;
        return Object.keys(this.normalizedRules).reduce(function (t, i) {
          var r = (function (e) {
            return Array.isArray(e)
              ? e.filter(function (e) {
                  return f(e) || ("string" == typeof e && "@" === e[0]);
                })
              : Object.keys(e)
                  .filter(function (t) {
                    return f(e[t]);
                  })
                  .map(function (t) {
                    return e[t];
                  });
          })(e.normalizedRules[i]).map(function (e) {
            return f(e) ? e.__locatorRef : e.slice(1);
          });
          return (
            t.push.apply(t, r),
            r.forEach(function (t) {
              se(e, t);
            }),
            t
          );
        }, []);
      },
      normalizedEvents: function () {
        var e = this;
        return (te(this).on || []).map(function (t) {
          return "input" === t ? e._inputEventName : t;
        });
      },
      isRequired: function () {
        var e = r(r({}, this._resolvedRules), this.normalizedRules),
          t = Object.keys(e).some(w.isRequireRule);
        return (this.flags.required = !!t), t;
      },
      classes: function () {
        return (function (e, t) {
          for (
            var i = {},
              r = Object.keys(t),
              n = r.length,
              a = function (n) {
                var a = r[n],
                  s = (e && e[a]) || a,
                  o = t[a];
                return l(o)
                  ? "continue"
                  : ("valid" !== a && "invalid" !== a) || t.validated
                  ? void ("string" == typeof s
                      ? (i[s] = o)
                      : Array.isArray(s) &&
                        s.forEach(function (e) {
                          i[e] = o;
                        }))
                  : "continue";
              },
              s = 0;
            s < n;
            s++
          )
            a(s);
          return i;
        })(O().classes, this.flags);
      },
      normalizedRules: function () {
        return k(this.rules);
      },
    },
    mounted: function () {
      var e = this,
        t = function () {
          if (e.flags.validated) {
            var t = e._regenerateMap;
            if (t) {
              var i = [],
                r = {};
              return (
                Object.keys(t).forEach(function (e) {
                  var n = t[e]();
                  i.push(n), (r[e] = n);
                }),
                void e.applyResult({
                  errors: i,
                  failedRules: r,
                  regenerateMap: t,
                })
              );
            }
            e.validate();
          }
        };
      V.$on("change:locale", t),
        this.$on("hook:beforeDestroy", function () {
          V.$off("change:locale", t);
        });
    },
    render: function (e) {
      var t = this;
      this.registerField();
      var i = Q(this, X(this));
      if (this.detectInput) {
        var r = U(i);
        r.length &&
          r.forEach(function (e, i) {
            var r, n, a, s, o, l;
            if (
              m(
                ["checkbox", "radio"],
                null ===
                  (n =
                    null === (r = e.data) || void 0 === r ? void 0 : r.attrs) ||
                  void 0 === n
                  ? void 0
                  : n.type
              ) ||
              !(i > 0)
            ) {
              var u = O().useConstraintAttrs ? K(e) : {};
              N(t._resolvedRules, u) || (t._needsValidation = !0),
                m(["input", "select", "textarea"], e.tag) &&
                  (t.fieldName =
                    (null ===
                      (s =
                        null === (a = e.data) || void 0 === a
                          ? void 0
                          : a.attrs) || void 0 === s
                      ? void 0
                      : s.name) ||
                    (null ===
                      (l =
                        null === (o = e.data) || void 0 === o
                          ? void 0
                          : o.attrs) || void 0 === l
                      ? void 0
                      : l.id)),
                (t._resolvedRules = u),
                (function (e, t) {
                  var i = B(t);
                  (e._inputEventName = e._inputEventName || H(t, F(t))),
                    ee(e, null == i ? void 0 : i.value);
                  var r = re(e),
                    n = r.onInput,
                    a = r.onBlur,
                    s = r.onValidate;
                  Y(t, e._inputEventName, n),
                    Y(t, "blur", a),
                    e.normalizedEvents.forEach(function (e) {
                      Y(t, e, s);
                    }),
                    (e.initialized = !0);
                })(t, e);
            }
          });
      }
      return this.slim && i.length <= 1 ? i[0] : e(this.tag, i);
    },
    beforeDestroy: function () {
      this.$_veeObserver.unobserve(this.id);
    },
    activated: function () {
      this.isActive = !0;
    },
    deactivated: function () {
      this.isActive = !1;
    },
    methods: {
      setFlags: function (e) {
        var t = this;
        Object.keys(e).forEach(function (i) {
          t.flags[i] = e[i];
        });
      },
      syncValue: function (e) {
        var t = (function (e) {
          var t, i;
          if (!D(e)) return e;
          var r = e.target;
          if ("file" === r.type && r.files) return p(r.files);
          if (
            null === (t = r._vModifiers) || void 0 === t ? void 0 : t.number
          ) {
            var n = parseFloat(r.value);
            return o(n) ? r.value : n;
          }
          return (null === (i = r._vModifiers) || void 0 === i
            ? void 0
            : i.trim) && "string" == typeof r.value
            ? r.value.trim()
            : r.value;
        })(e);
        (this.value = t), (this.flags.changed = !N(this.initialValue, t));
      },
      reset: function () {
        var e = this;
        (this.errors = []), (this.initialValue = this.value);
        var t = {
          untouched: !0,
          touched: !1,
          dirty: !1,
          pristine: !0,
          valid: !1,
          invalid: !1,
          validated: !1,
          pending: !1,
          required: !1,
          changed: !1,
          passed: !1,
          failed: !1,
        };
        (t.required = this.isRequired),
          this.setFlags(t),
          (this.failedRules = {}),
          this.validateSilent(),
          (this._pendingValidation = void 0),
          (this._pendingReset = !0),
          setTimeout(function () {
            e._pendingReset = !1;
          }, this.debounce);
      },
      validate: function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return n(this, void 0, void 0, function () {
          return a(this, function (t) {
            return e.length > 0 && this.syncValue(e[0]), [2, ie(this)];
          });
        });
      },
      validateSilent: function () {
        return n(this, void 0, void 0, function () {
          var e, t;
          return a(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  this.setFlags({ pending: !0 }),
                  (e = r(r({}, this._resolvedRules), this.normalizedRules)),
                  Object.defineProperty(e, "_$$isNormalized", {
                    value: !0,
                    writable: !1,
                    enumerable: !1,
                    configurable: !1,
                  }),
                  [
                    4,
                    E(
                      this.value,
                      e,
                      r(
                        r(
                          { name: this.name || this.fieldName },
                          ((n = this),
                          (a = n.$_veeObserver.refs),
                          { names: {}, values: {} },
                          n.fieldDeps.reduce(
                            function (e, t) {
                              return a[t]
                                ? ((e.values[t] = a[t].value),
                                  (e.names[t] = a[t].name),
                                  e)
                                : e;
                            },
                            { names: {}, values: {} }
                          ))
                        ),
                        {
                          bails: this.bails,
                          skipIfEmpty: this.skipIfEmpty,
                          isInitial: !this.initialized,
                          customMessages: this.customMessages,
                        }
                      )
                    ),
                  ]
                );
              case 1:
                return (
                  (t = i.sent()),
                  this.setFlags({
                    pending: !1,
                    valid: t.valid,
                    invalid: !t.valid,
                  }),
                  void 0 !== t.required &&
                    this.setFlags({ required: t.required }),
                  [2, t]
                );
            }
            var n, a;
          });
        });
      },
      setErrors: function (e) {
        this.applyResult({ errors: e, failedRules: {} });
      },
      applyResult: function (e) {
        var t = e.errors,
          i = e.failedRules,
          n = e.regenerateMap;
        (this.errors = t),
          (this._regenerateMap = n),
          (this.failedRules = r({}, i || {})),
          this.setFlags({
            valid: !t.length,
            passed: !t.length,
            invalid: !!t.length,
            failed: !!t.length,
            validated: !0,
            changed: !N(this.value, this.initialValue),
          });
      },
      registerField: function () {
        !(function (e) {
          var t = (function (e) {
              if (e.vid) return e.vid;
              if (e.name) return e.name;
              if (e.id) return e.id;
              if (e.fieldName) return e.fieldName;
              return "_vee_" + ++ne;
            })(e),
            i = e.id;
          if (!e.isActive || (i === t && e.$_veeObserver.refs[i])) return;
          i !== t &&
            e.$_veeObserver.refs[i] === e &&
            e.$_veeObserver.unobserve(i);
          (e.id = t), e.$_veeObserver.observe(e);
        })(this);
      },
      checkComputesRequiredState: function () {
        var e = r(r({}, this._resolvedRules), this.normalizedRules);
        return Object.keys(e).some(w.isRequireRule);
      },
    },
  });
  function se(e, t, i) {
    void 0 === i && (i = !0);
    var r = e.$_veeObserver.refs;
    if ((e._veeWatchers || (e._veeWatchers = {}), !r[t] && i))
      return e.$once("hook:mounted", function () {
        se(e, t, !1);
      });
    !c(e._veeWatchers[t]) &&
      r[t] &&
      (e._veeWatchers[t] = r[t].$watch("value", function () {
        var t = e.checkComputesRequiredState();
        e.flags.validated && ((e._needsValidation = !0), e.validate()),
          t && !e.flags.validated && e.validateSilent();
      }));
  }
  var oe = [
      ["pristine", "every"],
      ["dirty", "some"],
      ["touched", "some"],
      ["untouched", "every"],
      ["valid", "every"],
      ["invalid", "some"],
      ["pending", "some"],
      ["validated", "every"],
      ["changed", "some"],
      ["passed", "every"],
      ["failed", "some"],
    ],
    le = 0;
  var ue = i().extend({
    name: "ValidationObserver",
    provide: function () {
      return { $_veeObserver: this };
    },
    inject: {
      $_veeObserver: {
        from: "$_veeObserver",
        default: function () {
          return this.$vnode.context.$_veeObserver
            ? this.$vnode.context.$_veeObserver
            : null;
        },
      },
    },
    props: {
      tag: { type: String, default: "span" },
      vid: {
        type: String,
        default: function () {
          return "obs_" + le++;
        },
      },
      slim: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        id: "",
        refs: {},
        observers: [],
        errors: {},
        flags: fe(),
        fields: {},
      };
    },
    created: function () {
      var e = this;
      (this.id = this.vid), ce(this);
      var t = g(function (t) {
        var i = t.errors,
          r = t.flags,
          n = t.fields;
        (e.errors = i), (e.flags = r), (e.fields = n);
      }, 16);
      this.$watch(ve, t);
    },
    activated: function () {
      ce(this);
    },
    deactivated: function () {
      de(this);
    },
    beforeDestroy: function () {
      de(this);
    },
    render: function (e) {
      var t,
        i = Q(
          this,
          r(r({}, (t = this).flags), {
            errors: t.errors,
            fields: t.fields,
            validate: t.validate,
            validateWithInfo: t.validateWithInfo,
            passes: t.handleSubmit,
            handleSubmit: t.handleSubmit,
            reset: t.reset,
          })
        );
      return this.slim && i.length <= 1
        ? i[0]
        : e(this.tag, { on: this.$listeners }, i);
    },
    methods: {
      observe: function (e, t) {
        var i;
        void 0 === t && (t = "provider"),
          "observer" !== t
            ? (this.refs = r(r({}, this.refs), (((i = {})[e.id] = e), i)))
            : this.observers.push(e);
      },
      unobserve: function (e, t) {
        if ((void 0 === t && (t = "provider"), "provider" !== t)) {
          var i = v(this.observers, function (t) {
            return t.id === e;
          });
          -1 !== i && this.observers.splice(i, 1);
        } else {
          if (!this.refs[e]) return;
          this.$delete(this.refs, e);
        }
      },
      validateWithInfo: function (e) {
        var t = (void 0 === e ? {} : e).silent,
          i = void 0 !== t && t;
        return n(this, void 0, void 0, function () {
          var e, t, r, n, o, l;
          return a(this, function (a) {
            switch (a.label) {
              case 0:
                return [
                  4,
                  Promise.all(
                    s(
                      h(this.refs)
                        .filter(function (e) {
                          return !e.disabled;
                        })
                        .map(function (e) {
                          return e[i ? "validateSilent" : "validate"]().then(
                            function (e) {
                              return e.valid;
                            }
                          );
                        }),
                      this.observers
                        .filter(function (e) {
                          return !e.disabled;
                        })
                        .map(function (e) {
                          return e.validate({ silent: i });
                        })
                    )
                  ),
                ];
              case 1:
                return (
                  (e = a.sent()),
                  (t = e.every(function (e) {
                    return e;
                  })),
                  (r = ve.call(this)),
                  (n = r.errors),
                  (o = r.flags),
                  (l = r.fields),
                  (this.errors = n),
                  (this.flags = o),
                  (this.fields = l),
                  [2, { errors: n, flags: o, fields: l, isValid: t }]
                );
            }
          });
        });
      },
      validate: function (e) {
        var t = (void 0 === e ? {} : e).silent,
          i = void 0 !== t && t;
        return n(this, void 0, void 0, function () {
          return a(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.validateWithInfo({ silent: i })];
              case 1:
                return [2, e.sent().isValid];
            }
          });
        });
      },
      handleSubmit: function (e) {
        return n(this, void 0, void 0, function () {
          return a(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.validate()];
              case 1:
                return t.sent() && e ? [2, e()] : [2];
            }
          });
        });
      },
      reset: function () {
        return s(h(this.refs), this.observers).forEach(function (e) {
          return e.reset();
        });
      },
      setErrors: function (e) {
        var t = this;
        Object.keys(e).forEach(function (i) {
          var r = t.refs[i];
          if (r) {
            var n = e[i] || [];
            (n = "string" == typeof n ? [n] : n), r.setErrors(n);
          }
        }),
          this.observers.forEach(function (t) {
            t.setErrors(e);
          });
      },
    },
  });
  function de(e) {
    e.$_veeObserver && e.$_veeObserver.unobserve(e.id, "observer");
  }
  function ce(e) {
    e.$_veeObserver && e.$_veeObserver.observe(e, "observer");
  }
  function fe() {
    return r(
      r(
        {},
        {
          untouched: !0,
          touched: !1,
          dirty: !1,
          pristine: !0,
          valid: !1,
          invalid: !1,
          validated: !1,
          pending: !1,
          required: !1,
          changed: !1,
          passed: !1,
          failed: !1,
        }
      ),
      { valid: !0, invalid: !1 }
    );
  }
  function ve() {
    for (
      var e = s(
          h(this.refs),
          this.observers.filter(function (e) {
            return !e.disabled;
          })
        ),
        t = {},
        i = fe(),
        n = {},
        a = e.length,
        o = 0;
      o < a;
      o++
    ) {
      var l = e[o];
      Array.isArray(l.errors)
        ? ((t[l.id] = l.errors),
          (n[l.id] = r(
            { id: l.id, name: l.name, failedRules: l.failedRules },
            l.flags
          )))
        : ((t = r(r({}, t), l.errors)), (n = r(r({}, n), l.fields)));
    }
    return (
      oe.forEach(function (t) {
        var r = t[0],
          n = t[1];
        i[r] = e[n](function (e) {
          return e.flags[r];
        });
      }),
      { errors: t, flags: i, fields: n }
    );
  }
  var me = {
      validate: function (e, t) {
        var i = t.target;
        return String(e) === String(i);
      },
      params: [{ name: "target", isTarget: !0 }],
    },
    pe = {
      validate: function (e, t) {
        var i = (void 0 === t ? {} : t).multiple,
          r =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (
          i &&
            !Array.isArray(e) &&
            (e = String(e)
              .split(",")
              .map(function (e) {
                return e.trim();
              })),
          Array.isArray(e)
            ? e.every(function (e) {
                return r.test(String(e));
              })
            : r.test(String(e))
        );
      },
      params: [{ name: "multiple", default: !1 }],
    };
  function he(e) {
    return null == e;
  }
  function _e(e) {
    return Array.isArray(e) && 0 === e.length;
  }
  var ge = function (e, t) {
      var i = t.length;
      return (
        !he(e) &&
        (Array.isArray(e)
          ? e.every(function (e) {
              return ge(e, { length: i });
            })
          : String(e).length >= i)
      );
    },
    ye = {
      validate: ge,
      params: [
        {
          name: "length",
          cast: function (e) {
            return Number(e);
          },
        },
      ],
    },
    be = function (e, t) {
      var i = t.regex;
      return Array.isArray(e)
        ? e.every(function (e) {
            return be(e, { regex: i });
          })
        : i.test(String(e));
    },
    we = {
      validate: be,
      params: [
        {
          name: "regex",
          cast: function (e) {
            return "string" == typeof e ? new RegExp(e) : e;
          },
        },
      ],
    },
    xe = {
      validate: function (e, t) {
        var i = (void 0 === t ? { allowFalse: !0 } : t).allowFalse,
          r = { valid: !1, required: !0 };
        return he(e) || _e(e)
          ? r
          : !1 !== e || i
          ? ((r.valid = !!String(e).trim().length), r)
          : r;
      },
      params: [{ name: "allowFalse", default: !0 }],
      computesRequired: !0,
    };
  const Ae = JSON.parse(
      '{"code":"en","messages":{"alpha":"The {_field_} field may only contain alphabetic characters","alpha_num":"The {_field_} field may only contain alpha-numeric characters","alpha_dash":"The {_field_} field may contain alpha-numeric characters as well as dashes and underscores","alpha_spaces":"The {_field_} field may only contain alphabetic characters as well as spaces","between":"The {_field_} field must be between {min} and {max}","confirmed":"The {_field_} field confirmation does not match","digits":"The {_field_} field must be numeric and exactly contain {length} digits","dimensions":"The {_field_} field must be {width} pixels by {height} pixels","email":"The {_field_} field must be a valid email","excluded":"The {_field_} field is not a valid value","ext":"The {_field_} field is not a valid file","image":"The {_field_} field must be an image","integer":"The {_field_} field must be an integer","length":"The {_field_} field must be {length} long","max_value":"The {_field_} field must be {max} or less","max":"The {_field_} field may not be greater than {length} characters","mimes":"The {_field_} field must have a valid file type","min_value":"The {_field_} field must be {min} or more","min":"The {_field_} field must be at least {length} characters","numeric":"The {_field_} field may only contain numeric characters","oneOf":"The {_field_} field is not a valid value","regex":"The {_field_} field format is invalid","required_if":"The {_field_} field is required","required":"The {_field_} field is required","size":"The {_field_} field size must be less than {size}KB","double":"The {_field_} field must be a valid decimal"}}'
    ),
    Oe = JSON.parse(
      '{"code":"fr","messages":{"alpha":"Le champ {_field_} ne peut contenir que des lettres","alpha_num":"Le champ {_field_} ne peut contenir que des caractères alpha-numériques","alpha_dash":"Le champ {_field_} ne peut contenir que des caractères alpha-numériques, tirets ou soulignés","alpha_spaces":"Le champ {_field_} ne peut contenir que des lettres ou des espaces","between":"Le champ {_field_} doit être compris entre {min} et {max}","confirmed":"Le champ {_field_} ne correspond pas","digits":"Le champ {_field_} doit être un nombre entier de {length} chiffres","dimensions":"Le champ {_field_} doit avoir une taille de {width} pixels par {height} pixels","email":"Le champ {_field_} doit être une adresse e-mail valide","excluded":"Le champ {_field_} doit être une valeur valide","ext":"Le champ {_field_} doit être un fichier valide","image":"Le champ {_field_} doit être une image","integer":"Le champ {_field_} doit être un entier","length":"Le champ {_field_} doit contenir {length} caractères","max_value":"Le champ {_field_} doit avoir une valeur de {max} ou moins","max":"Le champ {_field_} ne peut pas contenir plus de {length} caractères","mimes":"Le champ {_field_} doit avoir un type MIME valide","min_value":"Le champ {_field_} doit avoir une valeur de {min} ou plus","min":"Le champ {_field_} doit contenir au minimum {length} caractères","numeric":"Le champ {_field_} ne peut contenir que des chiffres","oneOf":"Le champ {_field_} doit être une valeur valide","regex":"Le champ {_field_} est invalide","required":"Le champ {_field_} est obligatoire","required_if":"Le champ {_field_} est obligatoire lorsque {target} possède cette valeur","size":"Le champ {_field_} doit avoir un poids inférieur à {size}KB","double":"Le champ {_field_} doit être une décimale valide"}}'
    ),
    Re = JSON.parse(
      '{"code":"ar","messages":{"alpha":"{_field_} يجب ان يحتوي على حروف فقط","alpha_num":"{_field_} قد يحتوي فقط على حروف وارقام","alpha_dash":"{_field_} قد يحتوي على حروف او الرموز - و _","alpha_spaces":"{_field_} قد يحتوي فقط على حروف ومسافات","between":"قيمة {_field_} يجب ان تكون ما بين {min} و {max}","confirmed":"{_field_} لا يماثل التأكيد","digits":"{_field_} يجب ان تحتوي فقط على ارقام والا يزيد عددها عن {length} رقم","dimensions":"{_field_} يجب ان تكون بمقاس {width} بكسل في {height} بكسل","email":"{_field_} يجب ان يكون بريدا اليكتروني صحيح","excluded":"الحقل {_field_} غير صحيح","ext":"نوع ملف {_field_} غير صحيح","image":"{_field_} يجب ان تكون صورة","integer":"الحقل {_field_} يجب ان يكون عدداً صحيحاً","length":"حقل {_field_} يجب الا يزيد عن {length}","max_value":"قيمة الحقل {_field_} يجب ان تكون اصغر من {max} او تساويها","max":"الحقل {_field_} يجب ان يحتوي على {length} حروف على الأكثر","mimes":"نوع ملف {_field_} غير صحيح","min_value":"قيمة الحقل {_field_} يجب ان تكون اكبر من {min} او تساويها","min":"الحقل {_field_} يجب ان يحتوي على {length} حروف على الأقل","numeric":"{_field_} يمكن ان يحتوي فقط على ارقام","oneOf":"الحقل {_field_} يجب ان يكون قيمة صحيحة","regex":"الحقل {_field_} غير صحيح","required":"{_field_} مطلوب","required_if":"حقل {_field_} مطلوب","size":"{_field_} يجب ان يكون اقل من {size} كيلوبايت","double":"يجب أن يكون الحقل {_field_} عددًا عشريًا صالحًا"}}'
    ),
    ke = {
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
    Se = axios.create();
  Se.interceptors.request.use(function (e) {
    const t = localStorage.getItem("token");
    return t && (e.headers.Authorization = `Bearer ${t}`), e;
  }),
    Se.interceptors.response.use(
      function (e) {
        const t = e.config.url;
        return -1e3 !== e.data.code ||
          [
            ke.wish,
            ke.userLikeReview,
            ke.reviewLike,
            ke.reviewUnlike,
            ke.arrivalReminder,
            ke.affiliateUserAuditStatus,
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
  const qe = Se,
    $e = {
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
    Ee = {
      props: { title: String, prev: String },
      template:
        '\n    <h3 class="v-auth-breadcrumb">\n      <a :href="prev ? prev : \'javascript:;\'"><span class="icon icon-prev-page"></span></a>\n      {{ title }}\n    </h3>\n  ',
    },
    Te = {
      props: ["value"],
      template:
        '\n    <div class="v-checkbox">\n      <slot></slot>\n      <span class="icon icon-checkbox"><span class="path1"></span><span class="path2"></span></span>\n    </div>\n  ',
    },
    Le = {
      props: { errors: Array },
      template:
        "\n    <span class=\"v-error-message\" :style=\"{ display: errors.length > 0 ? 'inline-block' : 'none' }\">{{ errors[0] }}</span>\n  ",
    },
    Ie = {
      model: { prop: "value", event: "input" },
      props: { value: String, inputClass: String },
      emits: ["update:modelValue"],
      template:
        '\n    <div class="v-password">\n      <input\n        :class="[inputClass]"\n        :type="visible ? \'text\' : \'password\'"\n        :value="value"\n        @input="$emit(\'input\', $event.target.value)"\n      />\n      <a href="javascript:;" class="visible-pwd" @click="view()">\n        <span class="icon" :class="[visible ? \'icon-eye-opened\' : \'icon-eye-closed\']"></span>\n      </a>\n    </div>\n  ',
      data: () => ({ visible: !1 }),
      methods: {
        view() {
          this.visible = !this.visible;
        },
      },
    },
    je = {
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
        log_into_your_oraimo_account: "Connectez-vous à votre compte oraimo",
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
    };
  x("confirmed", me),
    x("email", pe),
    x("min", ye),
    x("regex", we),
    x("required", xe),
    x("unique", async (e) => {
      const t = { email: e },
        i = await qe.get(ke.userIsRegistered, { params: t });
      return (
        0 !== i.code || 1 !== i.data.is_registered || "The email is registered!"
      );
    }),
    C({ en: Ae, fr: Oe, ar: Re }),
    C(JS_CURRENT_LANGUAGE),
    new Vue({
      el: "#app",
      i18n: new VueI18n({ locale: JS_CURRENT_LANGUAGE, messages: je }),
      components: {
        ValidationObserver: ue,
        ValidationProvider: ae,
        "v-alert": $e,
        "v-auth-breadcrumb": Ee,
        "v-checkbox": Te,
        "v-error-message": Le,
        "v-password": Ie,
      },
      data: {
        redirectUrl: "",
        loading: !1,
        firstname: "",
        lastname: "",
        isSubscribe: 0,
        email: "",
        password: "",
        confirmPassword: "",
        viewAlert: !1,
        alertMessage: "",
      },
      methods: {
        redirect() {
          this.redirectUrl
            ? (location.href = this.redirectUrl.replace("*", "&"))
            : (location.href = "/user/person");
        },
        signup() {
          const e = {
            first_name: this.firstname,
            last_name: this.lastname,
            subscribed: this.isSubscribe || 0,
            email: this.email,
            password: this.password,
          };
          localStorage.getItem("affiliate_code") &&
            ((e.affiliate_code = localStorage.getItem("affiliate_code")),
            (e.affiliate_timestamp = localStorage.getItem(
              "affiliate_timestamp"
            ))),
            grecaptcha.ready(() => {
              grecaptcha
                .execute(GOOGLE_RECAPTCHA, { action: "submit" })
                .then((t) => {
                  (e["g-recaptcha-response"] = t),
                    (this.loading = !0),
                    qe.post(ke.register, e).then((e) => {
                      (this.loading = !1),
                        0 === e.code
                          ? (localStorage.setItem("token", e.data.token),
                            localStorage.setItem(
                              "name",
                              `${e.data.first_name} ${e.data.last_name}`
                            ),
                            this.redirect())
                          : ((this.viewAlert = !0),
                            (this.alertMessage = e.message));
                    });
                });
            });
        },
      },
      mounted() {
        const e = new URLSearchParams(location.search.substring(1));
        (this.firstname = e.get("firstname") || ""),
          (this.lastname = e.get("lastname") || ""),
          e.get("redirect_url") && (this.redirectUrl = e.get("redirect_url"));
      },
    });
})();
